---
title: "chmod"
subject: "IT WORKSHOP"
module: "Module 4: Familiarizing basic Unix/Linux commands "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97d0"
status: "completed"
scrapedAt: "2026-05-23T16:07:26.087Z"
---
# IT WORKSHOP: Module 4 - Familiarizing Basic Unix/Linux Commands

## Topic: The `chmod` Command - Controlling File Permissions

Welcome, everyone! Today, we're diving into a fundamental aspect of working with Unix and Linux systems: **file permissions**. Think of this like a bouncer at a club – they decide who gets in, who can do what, and who's just looking from the outside. In our digital world, this "bouncer" is controlled by a powerful command called `chmod`.

This is crucial for your understanding of how Linux operates at a deeper level, directly supporting **Course Outcome 2 (CO2): Make use of the command line of Linux operating system and shell programming.** By mastering `chmod`, you're learning to interact with and manage the core resources of the system, which is a key step towards effective shell programming.

### Understanding the "Who" and the "What" of Permissions

Before we get our hands dirty with `chmod`, let's understand *what* we're controlling. In Linux, every file and directory has a set of permissions associated with it. These permissions determine **who** can do **what** to that file or directory.

There are three main "whos" (the **User Categories**):

*   **User (u):** This refers to the owner of the file. If you created a file, you are its owner.
*   **Group (g):** This refers to a group of users that have been assigned specific permissions. Think of a project team – everyone on that team might need access to the same set of project files.
*   **Others (o):** This encompasses everyone else on the system who is not the owner and not part of the designated group.

And there are three main "whats" (the **Permissions**):

*   **Read (r):** Allows you to view the contents of a file. For a directory, it allows you to list the contents (e.g., using `ls`).
*   **Write (w):** Allows you to modify the contents of a file. For a directory, it allows you to create, delete, or rename files within that directory.
*   **Execute (x):** Allows you to run a file as a program or script. For a directory, it allows you to `cd` into that directory and access files within it.

You'll often see these permissions represented in a string of characters, like `-rwxr-xr--`. Let's break this down:

*   The first character (`-`) indicates the file type. A hyphen means it's a regular file. `d` would mean it's a directory, `l` would be a symbolic link, and so on.
*   The next three characters (`rwx`) represent the **user's** permissions. Here, the owner has read, write, and execute permissions.
*   The next three (`r-x`) represent the **group's** permissions. The group can read and execute, but not write.
*   The last three (`r--`) represent the **others'** permissions. Others can only read the file.

This is a visual representation that you'll encounter constantly when working with Linux. Understanding this initial state is key to knowing how `chmod` can alter it.

### The `chmod` Command: Changing Permissions

The `chmod` command (short for "change mode") is our tool to modify these permissions. It's incredibly versatile and can be used in two main ways: using **symbolic mode** or **numeric (octal) mode**.

#### 1. Symbolic Mode: The Human-Readable Way

Symbolic mode uses letters to represent the user categories and permissions, making it quite intuitive. It's like saying, "Give the user read and write access."

The general syntax is:

`chmod [who][operator][permission] filename`

Let's break down the components:

*   **[who]:** This can be `u` (user), `g` (group), `o` (others), or `a` (all – which is a shorthand for `ugo`).
*   **[operator]:**
    *   `+`: Adds a permission.
    *   `-`: Removes a permission.
    *   `=`: Sets the permissions exactly as specified, removing any existing ones not listed.
*   **[permission]:** `r` (read), `w` (write), `x` (execute).

**Let's walk through some relatable examples:**

Imagine you have a script called `backup.sh` that you want to run yourself, but you don't want anyone else to accidentally modify or run it.

*   **Giving yourself execute permission:**
    `chmod u+x backup.sh`
    This adds execute permission *only* for the owner (`u`). The command is saying, "For the user, add (+) execute (x) permission for the file `backup.sh`."

*   **Removing write permission for the group and others:**
    `chmod go-w backup.sh`
    This says, "For the group (g) and others (o), remove (-) write (w) permission from `backup.sh`." Now, only you, the owner, can write to it.

*   **Setting permissions precisely:**
    Let's say you want to ensure *only* the owner can read and write to a sensitive configuration file, `settings.conf`. You want to remove all other permissions for everyone.
    `chmod u=rw settings.conf`
    This is powerful because it *sets* the owner's permissions to read (`r`) and write (`w`) and *removes* all other permissions for the owner. If group or others had any permissions before, they are gone.

*   **A common scenario: Making a script executable for everyone:**
    If you have a public utility script, you might want everyone to be able to run it.
    `chmod a+x utility.sh`
    This gives execute permission to the owner, group, and others.

*   **Combining changes:** You can make multiple changes in a single command:
    `chmod ug+rw,o-rwx important_document.txt`
    This grants read and write to the user and group, and removes all permissions for others.

**Important Note:** When you see permissions like `-rwxr-xr-x`, it means read, write, execute for the owner; read and execute for the group; and read and execute for others. `chmod a+x your_script.sh` would change this to `-rwxr-xr-x`.

Reference Book [2], "LINUX for Developers," by William Rothwell, emphasizes how crucial it is to understand the default permissions and how `chmod` allows fine-grained control, which is essential for security and proper application behavior.

#### 2. Numeric (Octal) Mode: The Concise Way

Numeric mode, often called octal mode, is a more compact way to set permissions. It leverages the fact that each permission has a numeric value:

*   **Read (r):** 4
*   **Write (w):** 2
*   **Execute (x):** 1
*   **No permission (-):** 0

Permissions are grouped for the owner, group, and others. You sum the values within each group to get a three-digit octal number.

Let's look at how common permission sets translate:

*   `rwx` (read, write, execute) = 4 + 2 + 1 = **7**
*   `rw-` (read, write) = 4 + 2 + 0 = **6**
*   `r-x` (read, execute) = 4 + 0 + 1 = **5**
*   `r--` (read only) = 4 + 0 + 0 = **4**
*   `---` (no permissions) = 0 + 0 + 0 = **0**

So, a permission string like `-rwxr-xr--` translates to:
*   Owner: `rwx` = 7
*   Group: `r-x` = 5
*   Others: `r--` = 4

This would be represented numerically as `754`.

The syntax for numeric mode is:

`chmod [octal_number] filename`

**Let's revisit our examples using numeric mode:**

*   **Giving yourself execute permission (owner: `rwx`, group: `r-x`, others: `r-x`):**
    This is a common setting for executable scripts.
    `chmod 755 backup.sh`
    Here, 7 (rwx) is for the owner, 5 (r-x) is for the group, and 5 (r-x) is for others.

*   **Ensuring only the owner can read and write (owner: `rw-`, group: `---`, others: `---`):**
    `chmod 600 settings.conf`
    Here, 6 (rw-) is for the owner, 0 (---) is for the group, and 0 (---) is for others. This is very restrictive and good for private files.

*   **Making a script executable for everyone (owner: `rwx`, group: `rwx`, others: `rwx`):**
    `chmod 777 public_script.sh`
    This gives full permissions to everyone. **Use this with extreme caution!** Giving everyone write and execute permissions can be a significant security risk. Textbooks like Schneider and Gersting's "Invitation to Computer Science" often highlight that granting excessive permissions can lead to unintended data modification or system compromise.

*   **Owner read/write, group read, others no access:**
    `chmod 640 confidential_data.txt`
    Owner gets `rw-` (6), Group gets `r--` (4), Others get `---` (0).

**Exam Tip:** You'll often be asked to set specific permissions, and knowing both modes is beneficial. Symbolic mode is easier for understanding individual changes, while numeric mode is faster for setting complex permission sets. Be prepared to convert between them.

### Permissions for Directories

The same principles apply to directories, but the meaning of the permissions changes slightly:

*   **Read (r) on a directory:** Allows you to list the contents of the directory (e.g., using `ls`).
*   **Write (w) on a directory:** Allows you to create, delete, and rename files *within* that directory. It does *not* allow you to delete the directory itself unless you also have execute permission.
*   **Execute (x) on a directory:** Allows you to `cd` into the directory and access files or subdirectories within it. Without execute permission, you can list the contents (if you have read permission), but you can't open or interact with anything inside.

**Analogy:** Think of a locked filing cabinet (the directory).
*   **Read:** You can see the labels on the folders inside.
*   **Write:** You can add new folders, remove folders, or rename them.
*   **Execute:** You can open the cabinet and take out a specific folder to work with.

**Example:**

If you have a directory `/home/user/projects` and you want your team (who are in the `developers` group) to be able to add new files and subdirectories but not delete existing ones, and you want yourself to have full control, you might set it like this:

*   Owner (you): `rwx` (7)
*   Group (developers): `rw-` (6) (read to see files, write to add/remove files)
*   Others: `r-x` (5) (read to list, execute to enter)

This would be `chmod 765 /home/user/projects`.

### Special Permissions: SetUID, SetGID, and Sticky Bit

Beyond the basic read, write, and execute, there are three special permissions that can be set on files and directories, which are critical for system administration and secure programming. These are represented by an additional digit (or letter) at the beginning of the permission string.

*   **SetUID (SUID) - `s` in the owner's execute position (e.g., `-rwsr-xr-x`):**
    *   **For executables:** When a file with SUID is executed, it runs with the permissions of the *file owner*, not the user running the file.
    *   **Example:** The `passwd` command on your system is typically SUID. When you run `passwd` to change your password, it needs to write to the `/etc/shadow` file, which only `root` can do. Because `passwd` is SUID, it runs with `root`'s permissions, allowing you to change your password even though you aren't `root`.
    *   **Numeric:** This adds 4000 to the octal permissions. So, `rwsr-xr-x` would be `4755`.
    *   **Symbolic:** `chmod u+s filename`

*   **SetGID (SGID) - `s` in the group's execute position (e.g., `-rwxr-sr-x`):**
    *   **For executables:** Similar to SUID, but the program runs with the permissions of the *group owner* of the file.
    *   **For directories:** This is very useful. When a directory has SGID set, any new files or subdirectories created within it will *inherit the group ownership* of the parent directory, not the primary group of the user creating them. This is invaluable for shared project directories.
    *   **Example:** If `/data/shared_projects` has SGID set, and the `developers` group owns it, any file or subdirectory created within `/data/shared_projects` by anyone in the `developers` group will also belong to the `developers` group.
    *   **Numeric:** Adds 2000 to the octal permissions. So, `rwxr-sr-x` would be `2755`.
    *   **Symbolic:** `chmod g+s directory_name`

*   **Sticky Bit - `t` in the others' execute position (e.g., `-rwxr-xr-t`):**
    *   **For directories:** This is most commonly seen on directories like `/tmp`. When the sticky bit is set on a directory, only the owner of a file within that directory (or the owner of the directory, or root) can delete or rename that file.
    *   **Analogy:** Think of a public bulletin board. Anyone can post a message, but only the person who posted it can take it down. Without the sticky bit, anyone could delete anyone else's message.
    *   **Numeric:** Adds 1000 to the octal permissions. So, `rwxr-xr-t` would be `1755`.
    *   **Symbolic:** `chmod o+t directory_name`

**How to see these special permissions:**
When you use `ls -l`, you'll see a lowercase `s` where the execute bit for user or group would be if the execute bit was also set (e.g., `-rwsr-xr-x` or `-rwxr-sr-x`). If the execute bit is *not* set but the special bit *is*, you'll see an uppercase `S` (e.g., `-rwSr-xr-x`). For the sticky bit, it's usually shown as `t` in the 'others' execute position if that permission is also set (`-rwxr-xr-t`), or `T` if execute is not set for 'others' (`-rwxr-xr-T`).

**Relevance to CO2:** Understanding these special permissions is a deeper dive into shell programming and Linux command line utility. They are often used in system scripts and for managing shared resources, directly impacting how programs execute and how data is handled securely.

### Common Pitfalls and Best Practices

*   **Over-granting Permissions:** The most common mistake is giving too much permission, especially `777`. Remember, `777` means everyone can read, write, and execute. This is a major security risk for anything other than temporary, public scratch directories.
*   **Confusing File and Directory Permissions:** Remember that `w` on a directory is different from `w` on a file. Incorrectly setting directory permissions can prevent users from accessing their own files or creating new ones.
*   **Not Setting Execute Permissions for Scripts:** If you write a shell script, it won't run unless it has execute permission (`x`). Use `chmod +x your_script.sh`.
*   **Forgetting the Owner:** When using numeric mode `755`, you're implicitly setting permissions for owner, group, and others. Always know which group you're dealing with.

**Schneider and Gersting's "Invitation to Computer Science"** often discusses the principle of **least privilege**, which is directly applicable here. You should grant only the minimum permissions necessary for a user or process to perform its intended function.

### Linking to Course Outcomes

*   **CO1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems.** While `chmod` doesn't directly interface with hardware, understanding file permissions is a foundational concept in how the operating system (software) manages access to storage devices (hardware). It's about controlling *access* to where data is stored.
*   **CO2: Make use of the command line of Linux operating system and shell programming.** This is the primary outcome addressed. `chmod` is a core command-line utility. Mastering it is essential for navigating, managing, and scripting within a Linux environment. Understanding permissions is vital for writing robust shell scripts that interact correctly with files and directories.
*   **CO4: Develop basic websites using HTML, CSS & JavaScript and manage the versions.** While seemingly unrelated, web servers run on Linux. File permissions dictate who can read your HTML files, who can modify your CSS, and whether your server can execute any backend scripts (like PHP or Python) that serve your website. Version control (like Git, mentioned in reference books) manages code changes, but deployment often requires correct file permissions managed by `chmod`.

### Summary

The `chmod` command is your primary tool for managing file and directory permissions in Unix-like systems. You can use:

*   **Symbolic Mode:** Intuitive, using `u`, `g`, `o`, `a` with `+`, `-`, `=` and `r`, `w`, `x`. Great for understanding individual permission changes.
*   **Numeric Mode:** Concise, using octal values (4 for read, 2 for write, 1 for execute) to represent permissions for owner, group, and others. Faster for setting multiple permissions at once.

Remember the three user categories (owner, group, others) and the three permissions (read, write, execute). Pay special attention to directory permissions and the powerful special permissions (SUID, SGID, Sticky Bit) for more advanced use cases. Always practice the principle of least privilege!

---

## Sample Questions with Answers

**Q1. Explain the difference between read, write, and execute permissions for a directory in Linux.**

**Answer:**
For a directory:
*   **Read (`r`):** Allows listing the contents of the directory (e.g., using `ls`).
*   **Write (`w`):** Allows creating, deleting, or renaming files *within* the directory.
*   **Execute (`x`):** Allows you to `cd` into the directory and access files or subdirectories within it. Without execute permission, you can't navigate into the directory.

**Q2. What command would you use to give the owner of a file `my_script.sh` read and write permissions, and the group and others only read permission? Provide the answer in both symbolic and numeric modes.**

**Answer:**
The desired permissions are:
*   Owner: Read + Write (`rw-`) = 4 + 2 = 6
*   Group: Read (`r--`) = 4
*   Others: Read (`r--`) = 4

So the numeric representation is `644`.

*   **Symbolic Mode:**
    `chmod u=rw,go=r my_script.sh`
    Explanation: `u=rw` sets owner's permissions to read and write. `go=r` sets group's and others' permissions to read only.

*   **Numeric Mode:**
    `chmod 644 my_script.sh`
    Explanation: 6 for owner (rw-), 4 for group (r--), and 4 for others (r--).

**Q3. A file is listed with permissions `-rwxr-sr-x`. What does the `s` in the group's execute position signify, and what command would set this permission if it were missing?**

**Answer:**
The `s` in the group's execute position signifies the **SetGID (SGID)** permission.
*   **If this is an executable file:** It means the file will run with the permissions of the *group owner* of the file, not the user running it.
*   **If this is a directory:** It means that any new files or subdirectories created within this directory will inherit the group ownership of the parent directory, rather than the primary group of the user creating them.

The command to set this permission using symbolic mode is:
`chmod g+s filename`

To set it using numeric mode, assuming the original permissions were `-rwxr-xr-x` (755), adding SGID (2000) would make it `2755`. So, the command would be:
`chmod 2755 filename`

**Q4. Why is it generally a bad idea to use `chmod 777` on a file or directory?**

**Answer:**
`chmod 777` grants **full read, write, and execute permissions to everyone** – the owner, the group, and all other users on the system. This is a significant security risk because:
1.  **Anyone can modify or delete your files:** If you have `777` on a file, any user can change its contents. If you have `777` on a directory, any user can add, delete, or rename files within it.
2.  **Execution by unknown users:** If it's a script or program, anyone can execute it, potentially running malicious code or consuming excessive system resources.

It violates the principle of least privilege and should only be used in very specific, controlled scenarios, typically for temporary directories like `/tmp` where isolation is managed by other means. For most situations, more restrictive permissions are necessary to maintain system security and data integrity. This is a fundamental security concept often highlighted in IT system management discussions.
