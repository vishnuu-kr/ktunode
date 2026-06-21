import os
import json
import re
import shutil
import difflib

# Source and destination directories
subjects_dir = r'src/data/subjects'
backup_dir = r'src/data/subjects_backup'

# 1. Back up existing subjects folder just in case
if os.path.exists(subjects_dir):
    if os.path.exists(backup_dir):
        shutil.rmtree(backup_dir)
    shutil.copytree(subjects_dir, backup_dir)
    print(f"Backed up {subjects_dir} to {backup_dir}")

# 2. Load the pool of unique subjects from frontend subjects files
pool = {}
for root, ds, files in os.walk(backup_dir):
    for f in files:
        if f.endswith('.json'):
            try:
                d = json.load(open(os.path.join(root, f), encoding='utf-8'))
                code = d.get('code')
                name = d.get('name')
                if code and name:
                    # Clean modules to remove any specific branch/semester IDs
                    # We will regenerate the topic IDs dynamically
                    pool[code.upper()] = {
                        'code': code.upper(),
                        'name': name.strip(),
                        'modules': d.get('modules', [])
                    }
            except Exception as e:
                print(f"Error reading pool file {f}: {e}")

print(f"Loaded pool of {len(pool)} unique subjects.")

# Load the official scheme (syllabus)
scheme = json.load(open(r'src/data/ktu_2024_scheme.json', encoding='utf-8'))
config = json.load(open(r'constants/site-config.json', encoding='utf-8'))
allowed_branches = config['allowedBranches']

def slugify(name):
    s = name.lower()
    s = s.replace('&', 'and')
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

# Map of branch display name -> branch slug
branch_slugs = {b: slugify(b) for b in scheme.keys()}

def clean_name(n):
    n = n.lower()
    n = n.replace('-', ' ')
    n = n.replace('&', ' and ')
    n = n.replace('behaviour', 'behavior')
    n = re.sub(r'\s+', ' ', n)
    n = re.sub(r'[^a-z0-9\s]', '', n)
    # remove common prefixes/suffixes
    n = re.sub(r'\b(introduction to|basics of|principles of|fundamentals of)\b', '', n)
    n = re.sub(r'\b(lab|laboratory|workshop|practice)\b', '', n)
    n = n.replace('ii', '2')
    n = n.replace('iii', '3')
    n = n.replace('iv', '4')
    return n.strip()

def get_words(name):
    return set(clean_name(name).split())

# We will read branch information of all subjects from the perfect extractor metadata
perfect_dir = r'c:\Users\Windows 10\Downloads\ktunode\ktu-node-extractor\perfect'
subject_branches = {}
for f in os.listdir(perfect_dir):
    p = os.path.join(perfect_dir, f)
    if os.path.isdir(p):
        meta_path = os.path.join(p, 'metadata.json')
        if os.path.exists(meta_path):
            try:
                m = json.load(open(meta_path, encoding='utf-8'))
                code = m.get('subject_code')
                if code:
                    # Clean branches to make sure they match
                    branches = m.get('branches', [])
                    subject_branches[code.upper()] = [branch_slugs[b] for b in branches if b in branch_slugs]
            except:
                pass

# Fallback: if a subject is not in perfect_dir but in pool, get its branch from the current folders it is in
for code, info in pool.items():
    if code not in subject_branches:
        subject_branches[code] = []

# Fill in branches from backup files
for root, ds, files in os.walk(backup_dir):
    for f in files:
        if f.endswith('.json'):
            try:
                d = json.load(open(os.path.join(root, f), encoding='utf-8'))
                code = d.get('code')
                branch_id = d.get('branchId')
                if code and branch_id:
                    code_up = code.upper()
                    if branch_id not in subject_branches.get(code_up, []):
                        if code_up not in subject_branches:
                            subject_branches[code_up] = []
                        subject_branches[code_up].append(branch_id)
            except:
                pass

# Clear existing subjects directory
if os.path.exists(subjects_dir):
    shutil.rmtree(subjects_dir)
os.makedirs(subjects_dir)
print(f"Cleared existing {subjects_dir} and recreated it.")

# Helper to customize modules and topics structure
def customize_modules(modules, branch_id, sem, code):
    custom_mods = []
    for mod in modules:
        mod_title = mod.get('title', '')
        custom_topics = []
        for i, topic in enumerate(mod.get('topics', [])):
            topic_title = topic.get('title', '')
            custom_topics.append({
                "id": f"{branch_id}-{sem}-{code.lower()}-m{mod_title}-t{i+1}",
                "title": topic_title,
                "content": "",
                "pyqs": []
            })
        custom_mods.append({
            "id": mod.get('id', ''),
            "title": mod_title,
            "topics": custom_topics
        })
    return custom_mods

# Remap and write files
files_written = 0

for branch_name, sems in scheme.items():
    branch_slug = branch_slugs[branch_name]
    for sem_item in sems:
        sem = sem_item['semester']
        sem_folder = f"{branch_slug}-{sem}"
        sem_path = os.path.join(subjects_dir, sem_folder)
        os.makedirs(sem_path, exist_ok=True)
        
        # Mapped subject codes for this semester and branch
        mapped_codes = []
        
        # 1. Map core subjects and choices specified in the scheme
        for subj in sem_item['subjects']:
            name = subj['name']
            
            # Skip broad elective/placeholder categories
            name_lower = name.lower()
            if any(x in name_lower for x in ['programme elective', 'open elective', 'minor', 'honours', 'audit course', 'mooc', 'comprehensive', 'seminar', 'project', 'internship', 'option 1', 'option 2', 'option 3']):
                continue
                
            sub_names = [x.strip() for x in name.split('/')] if '/' in name else [name]
            for sname in sub_names:
                clean_s = clean_name(sname)
                s_words = get_words(sname)
                
                found_code = None
                
                # 1. Try exact normalized match
                for code, p_info in pool.items():
                    if clean_name(p_info['name']) == clean_s:
                        found_code = code
                        break
                        
                # 2. Try word subset match (enforcing semester digit match in code)
                if not found_code:
                    for code, p_info in pool.items():
                        p_words = get_words(p_info['name'])
                        if s_words and (s_words.issubset(p_words) or p_words.issubset(s_words)):
                            m = re.search(r'\d', code)
                            code_sem = int(m.group()) if m else 0
                            if sem in [1, 2]:
                                if code_sem in [1, 2]:
                                    found_code = code
                                    break
                            elif code_sem == sem:
                                found_code = code
                                break
                                
                # 3. Try close match
                if not found_code:
                    close = difflib.get_close_matches(sname, [p['name'] for p in pool.values()], n=1, cutoff=0.7)
                    if close:
                        for code, p_info in pool.items():
                            if p_info['name'] == close[0]:
                                found_code = code
                                break
                                
                if found_code:
                    if found_code not in mapped_codes:
                        mapped_codes.append(found_code)
                else:
                    print(f"Warning: could not map \"{sname}\" in {branch_name} S{sem}")
        
        # 2. Map electives (Program and Open Electives) that belong to this branch and semester
        for code, p_info in pool.items():
            if code.startswith('PE') or code.startswith('OE'):
                if branch_slug in subject_branches.get(code, []):
                    m = re.search(r'\d', code)
                    code_sem = int(m.group()) if m else 0
                    if code_sem == sem:
                        if code not in mapped_codes:
                            mapped_codes.append(code)
                            
        # 3. Write subjects to folder
        for sno, code in enumerate(mapped_codes):
            p_info = pool[code]
            subject_obj = {
                "id": f"{code.lower()}-{branch_slug}-s{sem}",
                "code": code,
                "name": p_info['name'],
                "branchId": branch_slug,
                "semester": sem,
                "modules": customize_modules(p_info['modules'], branch_slug, sem, code)
            }
            
            filename = f"{sno:03d}_{code}.json"
            filepath = os.path.join(sem_path, filename)
            with open(filepath, 'w', encoding='utf-8') as out_f:
                json.dump(subject_obj, out_f, indent=2, ensure_ascii=False)
            files_written += 1

print(f"Successfully generated {files_written} subjects across all branch folders!")
