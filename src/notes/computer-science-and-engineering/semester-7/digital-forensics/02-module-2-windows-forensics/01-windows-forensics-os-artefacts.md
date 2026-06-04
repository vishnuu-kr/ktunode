---
title: "Windows Forensics - OS Artefacts"
subject: "DIGITAL FORENSICS"
module: "Module 2: Windows Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c50a"
status: "completed"
scrapedAt: "2026-05-20T17:04:37.375Z"
---
# Digital Forensics: Module 2 - Windows Forensics: OS Artefacts

---

## Introduction to Windows Forensics and OS Artefacts

This module delves into the core of Windows forensics, focusing on the systematic examination of operating system artefacts. These artefacts are traces left behind by user activity, system operations, and application execution, providing crucial evidence for investigations. Understanding these artefacts allows digital forensic examiners to reconstruct events, identify user actions, and establish timelines.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Identify and explain common Windows operating system artefacts.**
*   **Locate and extract key artefacts from a Windows operating system image.**
*   **Interpret the significance of various Windows artefacts in an investigation.**
*   **Utilize common forensic tools for the analysis of Windows artefacts.**
*   **Understand the impact of Windows operating system versions on artefact prevalence and analysis.**
*   **Describe the role of artefacts in establishing user activity, system events, and timelines.**

---

## Key Concepts and Definitions

*   **Digital Forensics:** The application of investigative and analytical techniques to identify, collect, preserve, analyze, and present digital evidence.
*   **Operating System (OS) Artefacts:** Residual data created by the OS and applications that can indicate system activity and user actions. These are the "footprints" left behind.
*   **Forensic Imaging:** Creating an exact, bit-for-bit copy of a storage medium to preserve the original evidence and conduct analysis on the copy.
*   **Write Blockers:** Hardware devices that prevent any accidental writes to the original evidence drive during the imaging process.
*   **Timelining:** The process of reconstructing the sequence of events on a system by analyzing time-stamped artefacts.
*   **Registry:** A hierarchical database in Windows that stores low-level settings for the operating system and for applications that opt to use the Registry.
*   **Event Logs:** Records of significant events that have occurred on the system, such as system startup/shutdown, application errors, and security events.
*   **File System Artefacts:** Information embedded within the file system structure itself, such as the Master File Table (MFT) in NTFS.

---

## Common Windows OS Artefacts and Their Analysis

This section details key artefacts found in Windows operating systems, their significance, and common methods of analysis.

### 1. The Windows Registry

The Registry is a treasure trove of information about the system's configuration, installed software, user preferences, and recent activity.

*   **Structure:** Hierarchical database organized into "hives" (e.g., HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS).
*   **Key Artefacts within the Registry:**
    *   **`NTUSER.DAT`:** Contains the profile settings for a specific user (e.g., `C:\Users\<Username>\NTUSER.DAT`).
        *   **MRU Lists (Most Recently Used):** Tracks recently opened files, applications, and network shares.
        *   **Run/RunOnce Keys:** Records programs configured to start automatically at user logon.
        *   **Shell Bags:** Stores information about the last viewed folder, window size, and view settings, even for folders that have been deleted.
        *   **TypedPaths:** Records paths typed into the Windows Explorer address bar.
        *   **UsrClass.dat:** Similar to NTUSER.DAT but for user-specific COM registrations and file associations.
    *   **`SOFTWARE` Hive (e.g., `C:\Windows\System32\config\SOFTWARE`):**
        *   **Installed Programs:** Information about installed software, including version numbers and installation paths.
        *   **User Accounts:** Details about user accounts and their privileges.
        *   **Network Connections:** Information about network adapters and connection history.
    *   **`SYSTEM` Hive (e.g., `C:\Windows\System32\config\SYSTEM`):**
        *   **System Information:** Hardware configurations, device drivers, and boot information.
        *   **Time Zone Settings:** Critical for correlating events.
        *   **Last Known Good Configuration:** Information about previous successful system states.
    *   **`SAM` Hive (e.g., `C:\Windows\System32\config\SAM`):** Stores user account information, including encrypted password hashes. (Requires special privileges to access and often needs to be dumped).
*   **Analysis Tools:** Registry viewers like Registry Explorer, RegRipper, and forensic suites (e.g., FTK, EnCase).

**Example:** If a user claims they never ran a specific application, examining the `NTUSER.DAT` hive for evidence of the application's executable path in MRU lists or Run keys can contradict this claim.

**Important Point:** The Registry is constantly updated. Analyzing the `RegModTime` (Registry modification time) can help establish the timeline of changes.

### 2. Event Logs

Windows Event Logs record a wide range of system and security-related events, providing a historical record of system activity.

*   **Log Files:** Typically stored in `.evtx` format (Windows Vista and later) or `.evt` format (pre-Vista).
    *   **Security Log:** Records security-related events like successful/failed logins, privilege use, and object access.
    *   **System Log:** Records events related to system components and drivers.
    *   **Application Log:** Records events generated by installed applications.
    *   **Setup Log:** Records events related to system setup and configuration changes.
    *   **Forwarded Events:** (If configured) Events forwarded from other computers.
*   **Key Event IDs for Investigation:**
    *   **Logon/Logoff Events (e.g., Event ID 4624 - Successful Logon, 4625 - Failed Logon, 4634 - Logoff):** Essential for tracking user activity and identifying unauthorized access.
    *   **Process Creation (e.g., Event ID 4688 - A process has been created):** Tracks the execution of applications and scripts.
    *   **File/Object Access (e.g., Event ID 4663 - An attempt was made to access an object):** Logs attempts to read, write, or execute files.
    *   **System Startup/Shutdown (e.g., Event ID 6005 - The Event log service was started, 6006 - The Event log service was stopped):** Helps establish system uptime and operational periods.
*   **Analysis Tools:** Built-in Event Viewer, specialized log analysis tools (e.g., Evtx Explorer, Log Parser, forensic suites).

**Example:** A successful logon event (Event ID 4624) with a specific user account and workstation IP address can prove that a particular user accessed the system at a given time.

**Important Point:** Event logs can be tampered with or cleared. Forensic examiners must verify the integrity of the logs and look for evidence of clearing.

### 3. File System Artefacts

Beyond the files themselves, the file system structure contains valuable metadata about files and their activity.

*   **Master File Table (MFT) (NTFS):** A database that stores information about every file and directory on an NTFS volume.
    *   **MFT Records:** Each file/directory has a record containing metadata like file name, size, creation/modification/access timestamps, and location on the disk.
    *   **Resident vs. Non-Resident Data:** Small files can be stored directly within their MFT record (resident), while larger files are stored elsewhere on the disk (non-resident), with pointers in the MFT record.
    *   **$MFTMirr:** A backup copy of the first few MFT records.
    *   **$BadClus:** A record of bad clusters on the disk.
*   **$USNJrnl (Update Sequence Number Journal):** A transaction log that records changes made to the file system, including file creations, modifications, and deletions.
    *   **Useful for:** Identifying recently created or deleted files that may not be readily apparent in the file system.
*   **Timestamps:** Crucial for reconstructing activity.
    *   **Creation Time:** When the file was created.
    *   **Modification Time:** When the file's content was last changed.
    *   **Access Time:** When the file was last accessed.
    *   **MFT Entry Modified Time:** When the MFT record itself was last updated (e.g., during a rename or attribute change).
    *   **Note:** Access timestamps can be unreliable as they can be turned off or modified by the OS.
*   **Prefetch Files (`.pf`):** Located in `C:\Windows\Prefetch`, these files are created when an application is executed for the first time. They store information about the application, its loaded DLLs, and the files it accessed.
    *   **Useful for:** Identifying applications that have been executed, even if their executables have been deleted, and understanding their execution patterns.
*   **Shellbags:** As mentioned in the Registry section, Shellbags are also stored in the file system in `UsrClass.dat` and `NTUSER.DAT`.
*   **Recycle Bin (`$Recycle.Bin`):** Contains deleted files.
    *   **Information stored:** Original file path, deletion date/time, and the SID of the user who deleted it.
*   **Volume Shadow Copies (VSC):** Snapshots of the file system at specific points in time, useful for recovering deleted or modified files.
*   **Analysis Tools:** File system explorers in forensic suites, dedicated MFT viewers, Prefetch parsers, Recycle Bin parsers.

**Example:** An MFT record showing a file with a modification time after a reported incident can indicate that the file was altered during or after the event.

**Important Point:** Understanding NTFS structures is critical for advanced analysis, especially for recovering deleted files or analyzing file system inconsistencies.

### 4. LNK Files (Shortcuts)

LNK files (`.lnk`) are shortcut files that point to other files or directories. They contain valuable metadata.

*   **Location:** Typically found in user profiles (`Desktop`, `Start Menu`, `Recent folders`).
*   **Key Artefacts within LNK files:**
    *   **Target File/Directory Path:** The location of the original file/directory.
    *   **Timestamps:** Creation, modification, and access times of the *target* file, as well as the creation and modification times of the LNK file itself.
    *   **Drive Letter:** The drive letter on which the target was located.
    *   **Volume Serial Number:** The serial number of the volume where the target resided.
    *   **Size of Target:** The size of the original file.
*   **Analysis Tools:** LNK parsers within forensic suites, specialized LNK analysis tools.

**Example:** An LNK file pointing to a document on a removable drive, with a creation timestamp indicating it was accessed recently, can suggest activity with that removable drive.

**Important Point:** LNK files are often created when a user interacts with a file, even if the original file is deleted.

### 5. Jump Lists

Jump Lists are context menus that appear when a user right-clicks an application icon in the taskbar or Start Menu. They provide quick access to recently used files and tasks.

*   **Location:** Stored within the user's profile in `AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations` and `AppData\Roaming\Microsoft\Windows\Recent\CustomDestinations`.
*   **Artefacts:** Records of recently opened files, applications, and custom tasks. Each entry has associated timestamps.
*   **Analysis Tools:** Jump List parsers within forensic suites.

**Example:** Jump Lists can show which documents a user recently worked on within a specific application, even if those documents are no longer easily accessible.

**Important Point:** Jump Lists are a strong indicator of recent user activity with applications.

### 6. Shellbags

As mentioned previously, Shellbags are crucial for reconstructing user navigation within the file system.

*   **Location:** Primarily within the Registry (`NTUSER.DAT`, `UsrClass.dat`).
*   **Artefacts:** Stores information about how users viewed folders, including:
    *   Last viewed folder path.
    *   Window size and position.
    *   View settings (icons, list view, etc.).
*   **Significance:** Can reveal access to folders that have since been deleted or hidden.
*   **Analysis Tools:** Shellbag parsers in forensic suites.

**Example:** If a user claims they never navigated to a specific sensitive folder, Shellbag artefacts can prove otherwise by showing the user viewed that folder in a particular way.

**Important Point:** Shellbags are created even for folders that no longer exist, making them powerful for uncovering past activity.

### 7. Amcache.hve

Amcache is a database used by Windows to track installed applications, their associated files, and execution history.

*   **Location:** `C:\Windows\AppCompat\Programs\Amcache.hve`
*   **Artefacts:**
    *   List of installed programs.
    *   Paths to executables.
    *   File hashes.
    *   Execution counts.
*   **Significance:** Useful for identifying applications that have been run on the system, even if they have been uninstalled.
*   **Analysis Tools:** Amcache parsers in forensic suites.

**Example:** Amcache can confirm if a specific malware executable has ever been run on the system, even if the executable has been deleted.

**Important Point:** Amcache provides a more persistent record of application execution compared to Prefetch files.

### 8. Shimcache (Application Compatibility Cache)

The Shimcache is another mechanism Windows uses to ensure application compatibility. It records information about executables that have been run.

*   **Location:** Registry hive (`SYSTEM`).
*   **Artefacts:**
    *   File name.
    *   File size.
    *   Last modified timestamp of the file.
    *   Execution flag.
*   **Significance:** Can reveal executables that have been run, even if Prefetch files are unavailable or deleted.
*   **Analysis Tools:** Shimcache parsers in forensic suites.

**Example:** If a suspicious executable was run, but its Prefetch file is missing, the Shimcache can still provide evidence of its execution.

**Important Point:** Shimcache entries are generally persistent until the SYSTEM hive is overwritten or cleared.

### 9. Other Relevant Artefacts

*   **Browser History and Cache:** Websites visited, cookies, download history.
*   **Email Artefacts:** PST/OST files, MBOX files.
*   **Document Artefacts:** Document metadata (e.g., author, creation date), AutoSave files.
*   **Network Artefacts:** Network connection logs, firewall logs, ARP cache.
*   **USB Device History:** Information about connected USB devices.
*   **UserAssist:** Records program execution counts and last execution times (stored in the Registry).

---

## Forensic Process for Windows Artefacts

1.  **Identification:** Determine the scope of the investigation and the types of artefacts likely to be relevant.
2.  **Collection:**
    *   Create a forensic image of the affected drive(s) using write-blockers.
    *   Collect relevant artefacts directly from the live system if imaging is not feasible (less ideal for evidence integrity).
3.  **Preservation:** Ensure the integrity of the collected evidence by maintaining the chain of custody.
4.  **Analysis:**
    *   Use forensic tools to parse and interpret the collected artefacts.
    *   Correlate artefacts from different sources to build a comprehensive timeline.
    *   Look for anomalies and evidence of tampering.
5.  **Reporting:** Document findings, methodology, and conclusions in a clear and concise report.

---

## Impact of Windows OS Versions

Different Windows versions have different artefact locations, formats, and types.

*   **Windows XP/2003:** Older artefact formats (e.g., `.evt` for event logs), fewer sophisticated tracking mechanisms.
*   **Windows Vista/7/8/10/11:**
    *   `.evtx` for Event Logs.
    *   Introduction of User Account Control (UAC) affecting privilege escalation artefacts.
    *   Enhanced Prefetching and Superfetch.
    *   More sophisticated Registry structures and new hives.
    *   Introduction of technologies like Jump Lists and Windows Search Indexing.
    *   Changes in hibernation and shutdown behaviour.

**Important Point:** Examiners must be aware of the specific Windows version they are analyzing to correctly locate and interpret artefacts.

---

## Practice Questions

1.  **What is the primary function of the Windows Registry in digital forensics?**
2.  **Which Registry hive typically contains the profile settings for a specific user?**
3.  **What is Event ID 4624 in Windows Event Logs, and why is it significant?**
4.  **Describe the role of the Master File Table (MFT) in NTFS file system analysis.**
5.  **What are Prefetch files, and how can they be useful in an investigation?**
6.  **Explain the significance of LNK files in reconstructing user activity.**
7.  **Where are Jump Lists typically stored in a Windows file system?**
8.  **How might an examiner use Shellbag artefacts to prove a user accessed a deleted folder?**
9.  **What is Amcache.hve, and what kind of information does it contain?**
10. **Why is it important to know the specific Windows OS version during forensic analysis?**

---

## Answers to Practice Questions

1.  **What is the primary function of the Windows Registry in digital forensics?**
    The Windows Registry stores critical configuration data for the operating system and installed applications, including user preferences, installed software, hardware configurations, and historical activity, making it a vital source of forensic evidence.

2.  **Which Registry hive typically contains the profile settings for a specific user?**
    The `NTUSER.DAT` hive, located within a user's profile directory (e.g., `C:\Users\<Username>\NTUSER.DAT`), typically contains the profile settings for that user.

3.  **What is Event ID 4624 in Windows Event Logs, and why is it significant?**
    Event ID 4624 signifies a "Successful Logon" event. It is significant because it records when a user successfully logged into the system, including the logon type (interactive, remote, etc.), username, and source IP address, helping to establish user activity and access times.

4.  **Describe the role of the Master File Table (MFT) in NTFS file system analysis.**
    The MFT is a database that contains a record for every file and directory on an NTFS volume. Each MFT record stores metadata about the file, such as its name, size, timestamps (creation, modification, access), and pointers to the data clusters on the disk. It is crucial for file system integrity checks and recovering deleted files.

5.  **What are Prefetch files, and how can they be useful in an investigation?**
    Prefetch files (`.pf`) are created by Windows when an application is first executed. They contain information about the application's executable path, loaded DLLs, and files accessed. They are useful for identifying which applications have been run on the system, even if their executables have been deleted, and for establishing execution timelines.

6.  **Explain the significance of LNK files in reconstructing user activity.**
    LNK files (shortcuts) are significant because they point to original files or directories and store metadata about the target, including its path, timestamps, and volume information. Analyzing LNK files can reveal user interaction with files that may have been moved, renamed, or deleted, and can also indicate the use of removable media.

7.  **Where are Jump Lists typically stored in a Windows file system?**
    Jump Lists are typically stored within the user's profile in the following directories:
    *   `%AppData%\Microsoft\Windows\Recent\AutomaticDestinations\`
    *   `%AppData%\Microsoft\Windows\Recent\CustomDestinations\`

8.  **How might an examiner use Shellbag artefacts to prove a user accessed a deleted folder?**
    Shellbag artefacts store information about how users viewed folders, including the path of the folder. Even if a folder is deleted, Shellbag entries can persist in the Registry, proving that a user navigated to and viewed that specific folder at some point in time.

9.  **What is Amcache.hve, and what kind of information does it contain?**
    Amcache.hve is a Registry hive that Windows uses to track installed applications, their associated files, and execution history. It contains information such as the path to executables, file hashes, and execution counts, providing a record of application usage.

10. **Why is it important to know the specific Windows OS version during forensic analysis?**
    Different Windows versions store artefacts in different locations, use different file formats (e.g., `.evt` vs. `.evtx`), and implement different tracking mechanisms. Knowing the OS version is crucial for correctly locating, parsing, and interpreting artefacts to ensure accurate analysis.

---

## Important Points to Remember

*   **Chain of Custody:** Always maintain a strict chain of custody for all evidence.
*   **Write Blocking:** Use write blockers to prevent accidental modification of original evidence.
*   **Verification:** Independently verify your findings using multiple tools or methods where possible.
*   **Context is Key:** Artefacts are only meaningful when analyzed within their proper context and correlated with other evidence.
*   **Timelining:** Master the art of building accurate timelines by correlating time-stamped artefacts.
*   **Tool Proficiency:** Become proficient with forensic tools designed for Windows artefact analysis.
*   **Continuous Learning:** Windows OS evolves, and so do its artefacts. Stay updated on new forensic techniques and artefact locations.
*   **Legal Admissibility:** Understand the requirements for ensuring the admissibility of digital evidence in legal proceedings.

---
