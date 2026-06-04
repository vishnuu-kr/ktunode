---
title: "Windows OS Artifacts"
subject: "DIGITAL FORENSICS"
module: "Module 3: Mobile Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c527"
status: "completed"
scrapedAt: "2026-05-20T17:04:56.578Z"
---
# Digital Forensics: Module 3 - Mobile Forensics: Windows OS Artifacts

## Introduction to Windows OS Artifacts in Mobile Forensics

This module focuses on understanding and analyzing artifacts left behind by Windows operating systems on mobile devices. While primarily associated with desktop and laptop computers, Windows also has a presence in the mobile space through devices like Windows Phones, tablets, and even IoT devices. Mobile forensics aims to extract, preserve, and analyze digital evidence from these devices to support investigations. Understanding Windows OS artifacts is crucial for identifying user activity, device usage, and potential evidence of malicious activity.

---

## Learning Outcomes

By the end of this topic, you should be able to:

*   **Identify and describe key Windows operating system artifacts relevant to mobile forensic investigations.**
*   **Explain the types of information that can be recovered from these artifacts.**
*   **Locate and extract these artifacts from Windows-based mobile devices.**
*   **Analyze the extracted artifacts to reconstruct user activity and support an investigation.**
*   **Understand the challenges and considerations when dealing with Windows OS artifacts in a mobile forensic context.**

---

## Key Concepts and Definitions

*   **Artifact:** Any piece of data or information that can be derived from a digital device that indicates the presence or action of a user or system.
*   **Windows Phone:** A mobile operating system developed by Microsoft, which powered a range of smartphones.
*   **Windows Tablets/2-in-1s:** Devices running full Windows operating systems (like Windows 10/11) that can also function as tablets.
*   **Internet of Things (IoT) Devices:** Increasingly, Windows IoT runs on embedded systems, some of which might be considered "mobile" in a broader sense.
*   **File System:** The structure and organization of files and directories on a storage device. Understanding the file system is crucial for locating artifacts.
*   **Registry:** A hierarchical database in Windows that stores low-level settings for the operating system and for applications that opt to use the registry.
*   **Event Logs:** Records of system and application events that occur on a Windows computer, providing a chronological history of activities.
*   **Prefetch Files:** Small files created by Windows to speed up application loading. They contain information about application execution.
*   **Shimcache (AppCompatCache):** A memory cache that stores information about executable files that have been run on the system, including their last run time.
*   **User Interface (UI) Cache:** Stores information about recently accessed files, programs, and folders, aiding in the reconstruction of user activity.
*   **Browser History/Cache:** Records of websites visited, downloaded files, and other browsing-related data.
*   **Application Data:** Information generated and stored by installed applications, which can include user-created content, settings, and activity logs.
*   **Mobile Forensics Tools:** Specialized software designed to acquire and analyze data from mobile devices, including those running Windows.

---

## Windows OS Artifacts and Their Significance

Windows OS artifacts on mobile devices can provide a wealth of information for forensic investigators. The type and accessibility of these artifacts depend on the specific Windows version and the device's form factor.

### 1. File System Artifacts

The file system is the foundation for storing all data on a device. Understanding its structure is paramount.

*   **System Files and Directories:**
    *   **`\Windows\System32`:** Contains critical system files and executables.
    *   **`\Program Files` and `\Program Files (x86)`:** Locations for installed applications.
    *   **`\Users\<Username>\`:** User-specific data, including documents, downloads, and application settings.
        *   **`\Users\<Username>\AppData\`:** Contains application settings and user-specific data.
            *   **`\Local\`:** Application data that is not synchronized across different computers.
            *   **`\Roaming\`:** Application data that can roam with the user profile.
            *   **`\LocalLow\`:** Application data for low-integrity applications.
    *   **`\Windows\Prefetch\`:** Contains `.pf` files for application execution.
        *   **Significance:** Tracks which applications have been executed, how many times, and when they were last run. Essential for identifying program usage.
    *   **`\Windows\AppCompatibility\`:** Contains files related to application compatibility and execution, including Shimcache.
        *   **Significance:** Provides a history of executable files that have been run on the system, even if they were deleted later. Crucial for identifying malicious or unauthorized software execution.

*   **User-Created Files:**
    *   Documents, images, videos, audio files, etc.
    *   **Significance:** Direct evidence of user activity, content creation, and communication.

*   **Deleted Files:**
    *   Even if deleted, file fragments may remain on the storage medium until overwritten.
    *   **Significance:** Can be recovered using specialized forensic tools, providing evidence of previously existing data.

### 2. Registry Artifacts

The Windows Registry is a central database of configuration settings.

*   **`HKEY_CURRENT_USER (HKCU)`:** Contains configuration settings for the currently logged-in user.
    *   **`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`:** Tracks recently opened documents.
        *   **Significance:** Shows which files and applications the user has recently interacted with.
    *   **`HKCU\Software\Microsoft\Windows\CurrentVersion\Run`:** Lists applications that automatically start with the user's login.
        *   **Significance:** Can indicate the presence of malware or persistent applications.

*   **`HKEY_LOCAL_MACHINE (HKLM)`:** Contains configuration settings for the entire system.
    *   **`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList`:** Information about user profiles.
        *   **Significance:** Can help identify all user accounts that have ever been active on the device.
    *   **`HKLM\SYSTEM\CurrentControlSet\Services`:** Information about system services.
        *   **Significance:** Can reveal installed software and potentially malicious services.

*   **`HKEY_USERS`:** Contains the user profiles for all users who have logged into the system.

### 3. Event Logs

Windows Event Logs provide a historical record of system and application activities.

*   **Application Logs:** Events generated by applications.
    *   **Significance:** Can show application errors, successful operations, or user interactions with specific applications.
*   **Security Logs:** Security-related events, such as successful and failed login attempts, privilege changes, and object access.
    *   **Significance:** Crucial for detecting unauthorized access, brute-force attacks, and policy violations.
*   **System Logs:** Events generated by Windows components, such as driver failures, hardware issues, and startup/shutdown events.
    *   **Significance:** Provides an overview of the device's operational health and critical system events.
*   **Setup Logs:** Events related to Windows installations and upgrades.
    *   **Significance:** Can help understand the history of the operating system's installation and configuration.
*   **Forwarded Events:** Events that are collected from other computers.
*   **Custom Logs:** Logs created by specific applications or services.

**Common Event Log IDs of Interest:**
*   **4624:** Successful logon
*   **4625:** Failed logon
*   **4648:** A logon was attempted using explicit credentials
*   **4663:** An attempt was made to access an object

### 4. Browser Forensics Artifacts

These artifacts are specific to web browsing activity.

*   **Internet Explorer/Microsoft Edge History:**
    *   Location: Typically found in `\Users\<Username>\AppData\Local\Microsoft\Windows\WebCacheV01\` (for newer Edge) or `\Users\<Username>\History\History.IE5\` (for Internet Explorer).
    *   **Significance:** Records visited URLs, timestamps, and titles of web pages.

*   **Browser Cache:**
    *   Stores temporary files for web pages (images, CSS, JavaScript).
    *   **Significance:** Can reconstruct visited web pages, even if the history is cleared.

*   **Cookies:**
    *   Small files stored by websites to remember user preferences or session information.
    *   **Significance:** Can indicate returning visitors, authentication tokens, and tracking information.

*   **Downloads History:**
    *   Records files downloaded from the internet.
    *   **Significance:** Identifies files obtained by the user and their origin.

### 5. Application-Specific Artifacts

Many applications create their own data stores.

*   **Messaging Applications:** Chat logs, contact lists, media files.
*   **Office Suite Applications:** Document creation/modification times, author information.
*   **Media Players:** Playlists, recently played media.
*   **Camera Applications:** Photos, videos, metadata (EXIF data including timestamps, GPS location).

### 6. Windows Phone Specific Artifacts (Older Devices)

While less common now, understanding these is important for legacy investigations.

*   **`\Data\Users\Public\Documents\`:** User accessible storage.
*   **`\Windows\System32\config\`:** Contains critical registry hives.
*   **Application Data:** Often stored in specific application directories within the file system.
*   **Messaging Databases:** Often proprietary formats, requiring specific parsing tools.
*   **Call Logs and SMS Databases:** Usually stored in SQLite databases.

### 7. Windows 10/11 Tablet Artifacts

These devices behave much like laptops, so many desktop forensics techniques apply.

*   **User Account Information:** From `SAM` (Security Account Manager) and `SYSTEM` hive.
*   **Connected USB Devices:** USB devices are tracked in the registry.
    *   **`HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR\`**
    *   **Significance:** Identifies external storage devices that have been connected, including their serial numbers and connection times.
*   **Network Connection History:** Wireless network profiles, wired connection logs.
*   **Shellbags:** A registry artifact that tracks the way a user has interacted with folders and files, even if they were later deleted.
    *   **Significance:** Can reveal folder traversal and file access patterns.

---

## Locating and Extracting Artifacts

The process of locating and extracting artifacts depends on the forensic approach:

1.  **Logical Acquisition:**
    *   Extracts files and directories accessible through the device's operating system.
    *   Less invasive, but may miss deleted data or data not exposed by the OS.
    *   Commonly done via USB connection and forensic imaging tools.

2.  **Physical Acquisition:**
    *   Creates a bit-for-bit copy of the entire storage media.
    *   Captures all data, including deleted files, slack space, and unallocated space.
    *   Requires more advanced techniques like JTAG, Chip-off, or bootloader exploitation, depending on the device.

3.  **File System Acquisition (for full Windows OS devices):**
    *   Similar to logical acquisition but with a deeper understanding of the file system structure.
    *   Tools like FTK Imager, EnCase, X-Ways Forensics can be used to image partitions.

### Key Tools Used:

*   **Forensic Imaging Tools:** FTK Imager, EnCase Forensic, X-Ways Forensics, Macrium Reflect (for imaging partitions).
*   **Registry Viewers:** Registry Explorer, RECmd, RegRipper.
*   **Prefetch Parsers:** Prefetch Analyzer.
*   **Event Log Viewers:** Event Viewer (built-in Windows tool), LogParser.
*   **Browser Artifact Parsers:** Browser History Examiner, Nirvana.
*   **Specialized Mobile Forensic Suites:** Cellebrite UFED, Magnet AXIOM, MSAB XRY (these often support Windows devices, especially older Windows Phones).

---

## Analyzing Artifacts

Once extracted, artifacts need to be analyzed to build a timeline of events and support the investigation.

### Common Analysis Tasks:

*   **Timeline Reconstruction:** Correlating events from various artifacts (e.g., Prefetch, Event Logs, Browser History) to create a chronological sequence of user activity.
*   **User Activity Profiling:** Identifying application usage, file access patterns, browsing habits, and communication methods.
*   **Malware Detection:** Identifying execution of suspicious executables (Prefetch, Shimcache), unauthorized services, and network connections.
*   **Evidence Correlation:** Linking data from different artifacts to a specific user or incident.
*   **Data Recovery:** Attempting to recover deleted files or fragments of data.

---

## Challenges and Considerations

*   **Encryption:** Modern Windows devices, especially tablets, may employ full-disk encryption (e.g., BitLocker), which requires the decryption key or password to access the data.
*   **Data Volatility:** Like all digital devices, data can be volatile and lost if the device is not handled properly.
*   **File System Variations:** Different versions of Windows (e.g., Windows 10 Mobile vs. Windows 10 Pro) may have slight variations in artifact locations and formats.
*   **Proprietary Data Formats:** Some applications store data in proprietary formats that require specialized parsers.
*   **Cloud Synchronization:** Data might be stored in cloud services (OneDrive, etc.) rather than solely on the device, requiring separate acquisition methods.
*   **Secure Boot and Device Guard:** These security features can restrict access to certain parts of the file system or prevent the execution of unsigned code.
*   **Data Wiping:** If a device has been remotely wiped or factory reset, obtaining forensic data can be extremely challenging or impossible.

---

## Practice Questions and Exercises

**Question 1:**
What is the primary purpose of Prefetch files in Windows, and how can an investigator use them in a mobile forensic case involving a Windows tablet?

**Answer 1:**
Prefetch files (`.pf` files in `\Windows\Prefetch\`) are used by Windows to speed up application loading by creating a cache of application startup information. An investigator can use Prefetch files to determine which applications have been executed on the device, how many times they've been run, and their last execution timestamp. This helps identify user activity and potentially the execution of malware or unauthorized applications.

**Question 2:**
Describe the significance of the Windows Registry for mobile forensic investigations. Name at least two key registry locations and the type of information they might contain.

**Answer 2:**
The Windows Registry is a critical database containing configuration settings for the operating system and applications. It provides insights into user activity, installed software, and system configurations.

*   **`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`:** Tracks recently opened documents and applications, indicating user interaction with files.
*   **`HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR\`:** Records information about connected USB storage devices, including serial numbers and connection times, which can identify the use of external storage.

**Question 3:**
A user denies ever using a specific messaging application on their Windows phone. What types of artifacts might you look for to potentially contradict this denial?

**Answer 3:**
To contradict the denial, you might look for:
*   **Application Installation Data:** Evidence of the application being installed in `\Program Files\` or similar directories.
*   **Prefetch Files:** If the application was run, a `.pf` file might exist in `\Windows\Prefetch\`.
*   **Registry Entries:** The application might have created registry keys for its settings or to
