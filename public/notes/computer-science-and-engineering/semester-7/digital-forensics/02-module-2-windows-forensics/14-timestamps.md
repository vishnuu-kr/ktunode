---
title: "Timestamps"
subject: "DIGITAL FORENSICS"
module: "Module 2: Windows Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c517"
status: "completed"
scrapedAt: "2026-05-20T17:04:46.214Z"
---
# DIGITAL FORENSICS: Module 2: Windows Forensics - Timestamps

---

## 1. Understanding Timestamps in Windows Forensics

### 1.1. What are Timestamps?

*   **Definition:** Timestamps are metadata associated with files and system events that record the date and time of specific actions or states. They are crucial for establishing a timeline of activities on a Windows system.
*   **Purpose:**
    *   Reconstructing events and user activities.
    *   Identifying when a file was created, modified, or accessed.
    *   Determining the order of operations.
    *   Detecting suspicious or unauthorized modifications.
    *   Providing evidence in legal proceedings.

### 1.2. Types of Timestamps in Windows

Windows systems store various types of timestamps for files and system objects. The most common ones we focus on in forensics are:

*   **MAC Times (Modified, Accessed, Created):** These are associated with individual files and directories.
    *   **M (Modified Time):**
        *   **Definition:** The last time the content of the file was changed. This includes adding, deleting, or modifying data within the file.
        *   **Example:** Saving changes to a Word document.
    *   **A (Accessed Time):**
        *   **Definition:** The last time the file was opened or read. This can be influenced by various system processes, not just direct user interaction.
        *   **Important Note:** In older Windows versions (and by default in some modern configurations), the Accessed time might not be updated frequently to improve performance. This is known as "Lazy Access Time."
        *   **Example:** Opening a PDF file to view its contents.
    *   **C (Created Time):**
        *   **Definition:** The time the file was first created on the current file system. This is *not* necessarily the original creation time if the file was copied or moved from another location.
        *   **Example:** Saving a newly created document to your hard drive.

*   **Entry Modified Time (Directory Entry Modified Time):**
    *   **Definition:** The last time the file's metadata *within the directory entry* was changed. This includes changes to the file name, its attributes (like read-only), or its MAC times.
    *   **Significance:** This timestamp is often more reliable than the Accessed time because it's updated whenever the file's information in the directory structure changes.
    *   **Example:** Renaming a file, changing its read-only attribute, or updating its MAC times.

*   **File System Record Modified Time (MFT Entry Modified Time):**
    *   **Definition:** The last time the Master File Table (MFT) entry for the file was modified. The MFT is a database that stores information about all files and directories on an NTFS volume.
    *   **Significance:** This timestamp is updated whenever any attribute of the file, including its MAC times, is changed. It's a very granular timestamp.

*   **Other Important System Timestamps:**
    *   **Registry Timestamps:** Entries within the Windows Registry also have timestamps, indicating when they were created, modified, or last accessed.
    *   **Event Log Timestamps:** Windows Event Logs record system and application events with precise timestamps, crucial for tracking system activity and user actions.
    *   **Prefetch File Timestamps:** These files store information about applications that have been run, including their execution times.
    *   **Shellbags Timestamps:** These record user activity related to opening folders and browsing the file system.
    *   **LNK File Timestamps:** Shortcut (.lnk) files contain information about the target file, including its original creation, modification, and last accessed times.

### 1.3. How Timestamps are Stored (NTFS)

*   **NTFS (New Technology File System):** The primary file system used by modern Windows operating systems.
*   **Master File Table (MFT):** Every file and directory on an NTFS volume has an entry in the MFT.
*   **MFT Attributes:** Each MFT entry contains various attributes, including timestamps.
    *   **$STANDARD\_INFORMATION Attribute:** Contains the MAC times (Modified, Accessed, Created) and the Entry Modified Time.
    *   **$FILE\_NAME Attribute:** Contains the file name and also its own set of timestamps (often referred to as "name creation" or "name modified" times). These can be subtly different from the $STANDARD\_INFORMATION timestamps.

### 1.4. Timestamp Interpretation and Challenges

*   **Time Zones:** Timestamps are typically stored in Coordinated Universal Time (UTC) by the file system, but the display might be adjusted based on the system's time zone settings. Forensic analysts must be aware of and account for time zone differences.
*   **System Clock Manipulation:** A determined attacker can change the system clock to manipulate timestamps. This is a common evasion technique.
*   **File Copying and Moving:** When files are copied or moved, new "Created" and "Accessed" timestamps are generated on the destination. The original "Created" time might be lost unless preserved by the copying tool.
*   **System Performance Optimizations:** Features like "Lazy Access Time" can make the Accessed timestamp unreliable as it might not be updated for every access.
*   **File System Corruption:** In rare cases, file system corruption can lead to incorrect or missing timestamps.
*   **"Falsifying" Timestamps:** While not truly "falsifying" in the sense of altering historical records without a trace, attackers might use tools to set arbitrary timestamps to mislead investigations. However, forensic techniques can often identify these anomalies.

---

## 2. Forensic Collection and Analysis of Timestamps

### 2.1. Forensic Imaging

*   **Importance:** Always acquire a bit-for-bit forensic image of the storage media. This preserves the original state of the data, including all timestamps, without altering them.
*   **Tools:** FTK Imager, EnCase Forensic, X-Ways Forensics, dd (Linux).

### 2.2. Timestamp Extraction Methods

*   **Command-Line Tools:**
    *   **`dir` command (Windows Command Prompt):** Displays basic file information, including Modified date and time.
    *   **`fsutil file queryfilename`:** Can provide more detailed information about a file, including its MFT entry.
    *   **PowerShell:** Offers powerful cmdlets like `Get-ChildItem` which can retrieve various file properties, including MAC times.
        ```powershell
        Get-ChildItem C:\Path\To\Your\File.txt | Select-Object Name, CreationTime, LastWriteTime, LastAccessTime
        ```
*   **Forensic Analysis Suites:**
    *   **FTK (Forensics Toolkit):** Provides comprehensive views of file system artifacts, including timestamps.
    *   **EnCase:** Similar to FTK, allows detailed examination of file metadata.
    *   **X-Ways Forensics:** Known for its speed and low-level file system analysis capabilities.
    *   **Autopsy:** An open-source forensic platform that can analyze disk images and extract timestamps.
*   **Specialized Tools:**
    *   **Timestomp:** A command-line utility designed to manipulate or report on file timestamps. While useful for understanding how timestamps can be changed, it should only be used in controlled environments for testing.
    *   **Shellbags Explorer:** Analyzes Shellbags artifacts, which contain timestamps related to folder access.
    *   **Prefetch Viewer:** Analyzes Prefetch files.
    *   **Log2Timeline / Plaso:** Powerful tools for creating a unified timeline from various data sources, including file system timestamps and event logs.

### 2.3. Analyzing Timestamps for Evidence

*   **Establishing a Timeline:**
    *   Identify files and events relevant to the investigation.
    *   Extract the MAC times for these items.
    *   Sort the extracted timestamps chronologically.
    *   Corroborate file timestamps with system event logs (e.g., a file modification timestamp should align with an application execution event).
*   **Identifying Anomalies:**
    *   **Out-of-order timestamps:** For example, a file's "Created" time being later than its "Modified" time.
    *   **Unusual access patterns:** Files being accessed at odd hours or by unexpected processes.
    *   **Timestamps modified to be in the past/future:** Can indicate attempts to hide activity.
    *   **Mismatched timestamps:** Differences between the $STANDARD\_INFORMATION and $FILE\_NAME attributes can indicate manipulation.
*   **Corroboration:**
    *   **User Activity:** Do the timestamps align with known user actions?
    *   **Application Activity:** Do timestamps correlate with application execution times in Prefetch files or event logs?
    *   **Registry Changes:** Do timestamps of relevant registry keys support file system events?
    *   **LNK Files:** Examine timestamps within shortcut files to understand when the shortcut was created or accessed, and potentially infer activity on the target file.

---

## 3. Key Concepts and Definitions Review

*   **MAC Times:** Modified, Accessed, Created (file content modification, file read, file creation).
*   **Entry Modified Time:** Directory entry modification (file name, attributes, MAC times).
*   **MFT:** Master File Table, the database of files on NTFS.
*   **$STANDARD\_INFORMATION:** MFT attribute holding MAC and Entry Modified Times.
*   **$FILE\_NAME:** MFT attribute holding file name and its own timestamps.
*   **UTC (Coordinated Universal Time):** The standard time format used internally by Windows.
*   **Lazy Access Time:** A performance optimization where the Accessed time is not always updated.
*   **Forensic Imaging:** Creating a bit-for-bit copy of storage media.
*   **Timeline Analysis:** Reconstructing a sequence of events based on timestamps.

---

## 4. Important Points to Remember

*   **Never work on the original evidence.** Always use a forensic image.
*   **Be aware of "Lazy Access Time"** and its impact on the reliability of the Accessed timestamp.
*   **Corroborate timestamps from multiple sources** (file system, event logs, Prefetch, Registry, LNK files) to build a stronger case.
*   **Understand the difference between Created, Modified, Accessed, and Entry Modified Times.** Each tells a different story.
*   **Consider time zone conversions** carefully when reporting findings.
*   **Timestamp anomalies can be indicators of malicious activity or system misconfigurations.**
*   **Tools like Log2Timeline/Plaso are invaluable** for aggregating and visualizing timelines from various artifacts.

---

## 5. Practice Questions and Exercises

**Question 1:** A user reports that a sensitive document was last accessed on Tuesday at 10:00 AM. However, your forensic analysis of the file shows a "Modified" timestamp of Tuesday at 9:00 AM and an "Accessed" timestamp of Monday at 5:00 PM. What might this indicate?

**Answer 1:**
This could indicate several things:
*   The user's report of the access time is inaccurate.
*   The "Accessed" timestamp was not updated due to "Lazy Access Time" or another system process that read the file without updating the accessed time.
*   The document was modified at 9:00 AM and then accessed at some point before Monday 5:00 PM, and then no further access occurred until the user's reported time, which might be inaccurate.
*   The file might have been "touched" or its metadata updated without its content being modified, potentially changing its Entry Modified Time.

**Question 2:** You find a file named `secret_plan.docx` with the following timestamps:
*   Created: 2023-10-26 08:30:00
*   Modified: 2023-10-26 10:15:00
*   Accessed: 2023-10-25 14:00:00
*   Entry Modified: 2023-10-26 11:00:00

Explain the potential sequence of events based on these timestamps.

**Answer 2:**
A possible sequence of events could be:
1.  **2023-10-25 14:00:00:** The file was first accessed.
2.  **2023-10-26 08:30:00:** The file was created. This is unusual, as the accessed time is earlier than the created time. This suggests the file might have been copied from another location where it was previously accessed, or the Accessed timestamp was set by a process prior to its formal creation on the current filesystem.
3.  **2023-10-26 10:15:00:** The content of the file was modified.
4.  **2023-10-26 11:00:00:** The file's directory entry was modified. This could be due to renaming the file, changing its attributes, or simply updating its MAC times. This Entry Modified time being later than the Modified time is common.

**Exercise:**

Using a forensic analysis tool (or by exploring files on your own system and using PowerShell commands like `Get-ChildItem`), find a file and extract its:
*   Creation Time
*   Last Write Time (Modified)
*   Last Access Time
*   The `Directory` path

Then, consider what actions you might have taken on that file that would result in those specific timestamps.

---

This concludes Module 2, Topic: Timestamps. Remember that mastering timestamps is fundamental to reconstructing digital events.
