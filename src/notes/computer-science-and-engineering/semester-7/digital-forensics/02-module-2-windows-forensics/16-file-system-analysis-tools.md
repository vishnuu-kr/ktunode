---
title: "File System Analysis Tools"
subject: "DIGITAL FORENSICS"
module: "Module 2: Windows Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c519"
status: "completed"
scrapedAt: "2026-05-20T17:04:47.716Z"
---
# Digital Forensics: Module 2: Windows Forensics - File System Analysis Tools

## Introduction to File System Analysis in Windows Forensics

File system analysis is a cornerstone of Windows digital forensics. It involves examining the structure and content of file systems to recover deleted files, identify hidden data, understand user activity, and establish timelines. Windows operating systems primarily use two major file systems: **FAT32** and **NTFS**. Each has unique characteristics that forensic analysts must understand to effectively extract evidence.

---

## Learning Outcomes & Key Concepts

### 1. Understanding the Basics of FAT32 and NTFS File Systems

*   **File System:** A method and data structure that an operating system uses to control how data is stored and retrieved. It organizes files and directories on a storage device.

*   **FAT32 (File Allocation Table 32):**
    *   **Overview:** An older file system, commonly used on older Windows versions, USB drives, and SD cards.
    *   **Structure:** Relies on a table (File Allocation Table) to map file locations on the disk.
    *   **Limitations:**
        *   Maximum file size: 4GB.
        *   Maximum volume size: 2TB (though often formatted to 32GB).
        *   Lacks robust journaling, file permissions, and encryption features.
        *   More susceptible to fragmentation.
    *   **Forensic Relevance:** Important for recovering data from older media or devices, and understanding legacy systems.

*   **NTFS (New Technology File System):**
    *   **Overview:** The standard file system for modern Windows operating systems (Windows NT and later).
    *   **Structure:** Uses a Master File Table (MFT) as its central data structure.
    *   **Key Features & Forensic Relevance:**
        *   **Master File Table (MFT):**
            *   Contains records for every file and directory on the volume.
            *   Each record (MFT record or file record) stores metadata about the file, including its name, size, timestamps, and data location.
            *   Small files might have their data stored directly within the MFT record (resident data).
        *   **Journaling (USN Journal):**
            *   Records changes made to the file system (creations, deletions, modifications).
            *   Crucial for reconstructing events and understanding file system activity, especially for recovering deleted files or identifying malicious modifications.
        *   **Access Control Lists (ACLs):**
            *   Manages file permissions and ownership, providing insight into user access and potential unauthorized actions.
        *   **Encryption (EFS - Encrypting File System):**
            *   Allows files to be encrypted at the file system level. Forensic analysts need to consider decryption methods.
        *   **Hard Links and Symbolic Links:**
            *   Allow multiple file names to point to the same file data, which can obscure the true location or intent.
        *   **Alternate Data Streams (ADS):**
            *   Allow additional data to be hidden within existing files without changing the file's apparent size. This is a common technique for steganography and malware hiding.
        *   **Timestamp Attributes (Standard Information & File Name attributes):**
            *   **MAC Times:** Modified, Accessed, Created, Entry Modified (M.A.C.E.). Vital for establishing timelines of activity.
                *   **Created:** The time the file was created on the current file system.
                *   **Accessed:** The last time the file was accessed (read, executed, etc.). This can be disabled for performance reasons.
                *   **Modified:** The last time the content of the file was changed.
                *   **Entry Modified:** The last time the file's metadata (e.g., name, permissions) was changed.
            *   **Important Note:** MAC times can be manipulated, so corroboration with other evidence is essential.

### 2. Identifying Key Artifacts within FAT32 and NTFS

#### FAT32 Artifacts:

*   **File Allocation Table (FAT):** Contains entries for each cluster on the disk, indicating whether it's free, allocated, or bad.
*   **Root Directory:** Stores entries for files and subdirectories directly in the root.
*   **File Entries:** Contain the file name, extension, size, and starting cluster number.
*   **Deleted Files:** In FAT32, deleting a file typically marks the first cluster entry in the FAT as free and the first byte of the directory entry as a special character (e.g., `0xE5`). The file's data remains on disk until overwritten.

#### NTFS Artifacts:

*   **Master File Table (MFT):** As described above, the central repository of file information.
    *   **MFT Records (File Records):** Contain file attributes.
        *   **Standard Information Attribute:** Holds MAC times, file size, etc.
        *   **File Name Attribute:** Stores the file name and path.
        *   **Data Attribute:** Holds the actual file content. For small files, this is "resident" and stored within the MFT record. For larger files, it contains pointers to clusters on the disk ("non-resident").
*   **$MFTMirr:** A backup copy of the first few MFT records, useful for recovering information about critical system files.
*   **$LogFile:** Records transactions to the NTFS log, helping to recover from unexpected shutdowns.
*   **$Bitmap:** Tracks which clusters are allocated and which are free.
*   **$Secure:** Stores Security Descriptors and Access Control Lists (ACLs).
*   **USN Journal ($UsnJrnl):** Records changes to files and directories.
    *   **USN Journal Entry:** Contains information about the file operation, file name, path, and timestamps.
*   **Alternate Data Streams (ADS):** Stored within the MFT record, often associated with the file they are attached to.
*   **Volume Shadow Copies (VSC):** Snapshots of the volume at a specific point in time, useful for recovering previous versions of files.
*   **Registry Hives:** Contain configuration information, user activity logs, and system settings. (While not strictly file system *structure*, they are critical files within the file system for analysis).
*   **Prefetch Files (`*.pf`):** Records program execution, including last execution time and frequency.
*   **Shellbags:** Track user interactions with folders and files via Windows Explorer, providing a history of navigation.
*   **Jump Lists:** Created for recently opened files and applications by pinned tasks, indicating user habits.
*   **Recycle Bin (`$Recycle.Bin`):** Stores deleted files before permanent removal.

### 3. Utilizing File System Analysis Tools for Evidence Acquisition and Examination

#### Categories of Tools:

*   **Disk Imaging Tools:** Create bit-for-bit copies of storage media.
    *   **Purpose:** To preserve the original evidence in a forensically sound manner and allow analysis without altering the source.
    *   **Examples:**
        *   **FTK Imager:** A widely used, free imaging tool for Windows. Supports various formats (raw, E01, AFF).
        *   **EnCase:** A commercial forensic suite with robust imaging capabilities.
        *   **dd (Linux/macOS):** A command-line utility for creating disk images.

*   **Forensic Suites (Integrated Tools):** Comprehensive software packages that offer a wide range of forensic capabilities, including file system analysis.
    *   **Purpose:** To acquire, analyze, and report on digital evidence from a single platform.
    *   **Examples:**
        *   **EnCase Forensic:** Powerful, feature-rich, handles various file systems, and includes advanced analysis modules.
        *   **AccessData FTK (Forensic Toolkit):** Another industry-standard suite, known for its indexing and search capabilities.
        *   **X-Ways Forensics:** Highly regarded for its speed, efficiency, and granular control over data examination, especially its ability to examine unallocated space.
        *   **Autopsy:** An open-source, user-friendly graphical interface for the Sleuth Kit, popular for its extensibility.

*   **Specialized File System Analysis Tools:** Tools designed for specific tasks related to file system examination.
    *   **Purpose:** To drill down into specific file system structures or recover particular types of data.
    *   **Examples:**
        *   **The Sleuth Kit (TSK):** A collection of command-line tools for analyzing file systems (FAT, NTFS, ext2/3/4, etc.) from disk images. It provides low-level access to file system structures.
        *   **Log2Timeline / Plaso:** Tools for correlating timestamps and creating a unified timeline of events from various forensic artifacts.
        *   **Bulk Extractor:** A tool that scans disk images for specific types of information, such as email addresses, URLs, credit card numbers, etc.
        *   **File Carver/UnEasher:** Tools that attempt to recover files based on file headers and footers, even when file system metadata is lost or corrupted.
        *   **Registry Viewers (e.g., Registry Explorer, RegRipper):** Tools specifically for parsing and analyzing Windows Registry hives, a critical component of file system analysis.
        *   **Prefetch Viewers (e.g., Prefetch Explorer):** Tools for analyzing `.pf` files.
        *   **Shellbag Parsers:** Tools to extract and analyze Shellbag artifacts.

#### Key Operations Performed by These Tools:

*   **Disk Imaging:** Creating bit-for-bit copies.
*   **Mounting Images:** Accessing the contents of disk images as if they were physical drives.
*   **File System Navigation:** Browsing directories and files within an image.
*   **File Recovery:** Attempting to restore deleted or fragmented files.
*   **Keyword Searching:** Finding specific strings within files and unallocated space.
*   **Timeline Analysis:** Correlating file access, modification, and creation times to build a sequence of events.
*   **Metadata Examination:** Inspecting file attributes, timestamps, permissions, and other file system metadata.
*   **Unallocated Space Analysis:** Examining areas of the disk not currently assigned to files for remnants of deleted data.
*   **Log File Analysis:** Examining journals (USN Journal) and other logs for activity tracking.
*   **Registry Analysis:** Parsing registry hives for user activity, system configuration, and software execution.

### 4. Recovering Deleted Files and Hidden Data

#### Recovering Deleted Files:

*   **FAT32:**
    *   **Process:** Locate the directory entry, check for the deletion marker (`0xE5` in the first byte of the filename), and then follow the cluster chain in the FAT to reconstruct the file.
    *   **Challenges:** Data can be overwritten quickly. Fragmentation can make reconstruction difficult.

*   **NTFS:**
    *   **Process:**
        1.  **MFT Scan:** Look for MFT records where the "Standard Information" attribute indicates the file is "deleted" (e.g., a specific flag or a zeroed-out entry).
        2.  **Data Attribute:** Examine the "Data" attribute to find the file's location (resident in MFT or non-resident pointers to clusters).
        3.  **USN Journal:** The USN Journal might contain information about the deleted file's existence and last modified time, even if the MFT entry is gone.
        4.  **Unallocated Space:** If MFT entries are overwritten, file carving techniques are used to find file headers/footers in unallocated space.
    *   **Tools:** Forensic suites (EnCase, FTK, X-Ways), The Sleuth Kit, file carving tools.

#### Recovering Hidden Data:

*   **Alternate Data Streams (ADS):**
    *   **How it works:** A file can have multiple data streams. The primary stream is what you see. Hidden data can be attached as an alternate stream.
    *   **Detection:** Tools that examine NTFS metadata can reveal ADS. For example, using `dir /r` in the command prompt or specialized forensic tools.
    *   **Example:** `notepad.exe` could have a hidden ADS containing malicious code.

*   **Steganography:**
    *   **How it works:** Hiding data within other benign files (images, audio, video) in a way that is not obvious.
    *   **Detection:** Requires specialized steganography detection tools and often analysis of the carrier file's properties. This is beyond basic file system analysis but is a related forensic discipline.

*   **File Packing/Encryption:**
    *   **How it works:** Files can be compressed, packed, or encrypted to obscure their content or intent.
    *   **Detection:** Identifying packed executables, analyzing file headers for encryption indicators, and potentially decrypting if keys are available or found.

*   **Hidden Files/Folders:**
    *   **How it works:** Files and folders can be marked as "hidden" through their file attributes.
    *   **Detection:** Most forensic tools can display hidden files and folders by default or through an option.

### 5. Creating Timelines of Activity Using File System Artifacts

*   **Importance of Timelines:** Timelines are crucial for understanding the sequence of events, identifying when specific actions occurred, and correlating different pieces of evidence.

*   **Key Timestamps:**
    *   **MAC Times (Created, Accessed, Modified, Entry Modified):** As detailed in Section 1.
    *   **Prefetch Timestamps:** Last execution time of applications.
    *   **Shellbag Timestamps:** Timestamps associated with folder navigation history.
    *   **Jump List Timestamps:** Access times for recently used files/applications.
    *   **USN Journal Timestamps:** Timestamps of file system changes.
    *   **Log Files (Event Logs, Application Logs):** System and application-generated timestamps of activities.

*   **Timeline Creation Tools:**
    *   **Log2Timeline / Plaso:** Collects timestamps from various sources (file systems, registry, event logs, browser history, etc.) and creates a single, sortable timeline.
    *   **Forensic Suites (EnCase, FTK, Autopsy):** Often have built-in timeline views that aggregate timestamps from analyzed artifacts.

*   **Process:**
    1.  **Collect Timestamps:** Extract relevant timestamps from all analyzed artifacts (files, registry, logs, etc.).
    2.  **Correlate:** Group similar events and identify common threads.
    3.  **Sort:** Arrange events chronologically.
    4.  **Analyze:** Interpret the timeline to reconstruct user activity, identify suspicious actions, and establish a narrative.

*   **Challenges:**
    *   **Timestamp Manipulation:** MAC times can be altered.
    *   **System Clock Skew:** If the system clock was incorrect, timestamps will be inaccurate.
    *   **Time Zones:** Ensuring correct time zone interpretation.
    *   **"Accessed" Time Updates:** The "Accessed" timestamp can be updated frequently by background processes, making it less reliable for specific user actions unless specific Windows configurations are in place.

---

## Practice Questions & Exercises

**Question 1:** You are examining a USB drive that was used to transfer sensitive documents. The drive is formatted as FAT32. What is the maximum file size you would expect to encounter for any single file on this drive?
    a) 2GB
    b) 4GB
    c) 8GB
    d) Unlimited

**Question 2:** Which NTFS feature records changes made to the file system, making it invaluable for reconstructing events and recovering deleted files?
    a) Master File Table (MFT)
    b) Alternate Data Streams (ADS)
    c) USN Journal
    d) Access Control Lists (ACLs)

**Question 3:** A user claims they never accessed a particular document. You find the document in question. Which timestamp attribute is most likely to support their claim *if it is recent and the document was indeed accessed*?
    a) Created
    b) Modified
    c) Accessed
    d) Entry Modified

**Question 4:** What is the primary data structure in NTFS that contains records for every file and directory on the volume?
    a) File Allocation Table (FAT)
    b) Master File Table (MFT)
    c) Bitmap
    d) LogFile

**Question 5:** You suspect an attacker has hidden malicious code within a legitimate executable file. What NTFS feature might they have used, and how would you typically detect it?

---

## Answers to Practice Questions

**Answer 1:** b) 4GB. FAT32 has a maximum file size limit of 4GB.

**Answer 2:** c) USN Journal. The USN Journal (Update Sequence Number Journal) records file system changes.

**Answer 3:** c) Accessed. The "Accessed" timestamp is updated when a file is read or executed. If this timestamp is old or shows no recent activity, it might support the user's claim.

**Answer 4:** b) Master File Table (MFT). The MFT is the central database of all files and directories on an NTFS volume.

**Answer 5:**
    *   **Feature:** Alternate Data Streams (ADS). An attacker could hide malicious code in an ADS attached to a legitimate executable file.
    *   **Detection:** Forensic tools that can examine NTFS metadata, such as FTK Imager, EnCase, X-Ways Forensics, or the `dir /r` command in Windows, can reveal the presence of ADS. Specialized tools can then be used to extract the data from the stream.

---

## Important Points to Remember

*   **Forensic Soundness:** Always work on a forensic image of the original media, never the original drive itself, to preserve the integrity of the evidence.
*   **Tool Proficiency:** Familiarize yourself with multiple forensic tools, as each has its strengths and weaknesses.
*   **Understanding File Systems:** A deep understanding of FAT32 and NTFS is critical for interpreting the data recovered by tools.
*   **Timestamp Analysis:** MAC times (Created, Accessed, Modified, Entry Modified) are vital for timeline reconstruction but can be manipulated. Corroborate with other evidence.
*   **Unallocated Space:** Don't neglect unallocated space; it often contains remnants of deleted files and other valuable evidence.
*   **Hidden Data Techniques:** Be aware of common methods for hiding data, such as ADS, file packing, and steganography.
*   **Timeline Correlation:** The real power of file system analysis comes from correlating timestamps from various artifacts to build a comprehensive picture of events.
*   **Journaling:** The USN Journal in NTFS is an extremely valuable artifact for tracking file system activity and recovering deleted data.
*   **MFT as a Key:** The MFT is the primary source of file metadata in NTFS. Understanding its structure and attributes is fundamental.
