---
title: "Analysis of USB Connections"
subject: "DIGITAL FORENSICS"
module: "Module 2: Windows Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c50c"
status: "completed"
scrapedAt: "2026-05-20T17:04:38.770Z"
---
# Digital Forensics: Module 2 - Windows Forensics
## Topic: Analysis of USB Connections

This module delves into the crucial aspect of analyzing USB connection artifacts within Windows operating systems. Understanding how USB devices are connected and interacted with can provide invaluable evidence in digital investigations.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Identify and locate evidence related to USB device connections in Windows.**
2.  **Understand the Windows Registry and its role in storing USB connection information.**
3.  **Analyze the contents of relevant Registry keys to determine device type, vendor, product, and connection history.**
4.  **Explain the significance of other data sources, such as Event Logs and file system artifacts, in corroborating USB connection analysis.**
5.  **Utilize forensic tools to extract and interpret USB connection evidence.**
6.  **Reconstruct the timeline of USB device usage on a Windows system.**

---

### 1. Identifying and Locating Evidence of USB Device Connections in Windows

USB devices, ranging from flash drives and external hard drives to keyboards, mice, and printers, leave traces of their presence on a Windows system. These traces can be found in various locations:

*   **Windows Registry:** The primary repository for device connection information.
*   **Event Logs:** System events related to device installation and connection.
*   **File System Artifacts:** Last access times, creation times, and modification times of files associated with USB devices.
*   **Prefetch Files:** Executable files that might have been launched due to USB device interaction.
*   **ShellBags:** User interface artifacts that can indicate browsing of USB drive contents.

---

### 2. The Windows Registry and its Role in Storing USB Connection Information

The **Windows Registry** is a hierarchical database that stores low-level settings for the operating system and for applications that opt to use the registry. It's a critical source of forensic data for USB connections because Windows meticulously records information about hardware and devices that are connected to the system.

**Key Concepts:**

*   **Registry Hives:** The Registry is organized into files called "hives." For USB analysis, we are primarily interested in:
    *   **SYSTEM:** Contains hardware and system configuration data.
    *   **SOFTWARE:** Stores application settings and Windows configuration.
    *   **NTUSER.DAT:** User-specific preferences and settings.
*   **Registry Keys and Values:** Information is stored in a tree-like structure of keys, which contain values. Values hold the actual data.
*   **Plug and Play (PnP) Manager:** Windows uses the PnP Manager to detect, install, and configure hardware devices, including USB devices. The Registry stores the PnP Manager's configuration data.

---

### 3. Analyzing Relevant Registry Keys for USB Connection Data

Several Registry keys are crucial for understanding USB connections. The exact paths can vary slightly between Windows versions, but the core concepts remain consistent.

**Key Registry Keys and Their Significance:**

*   **`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR`**:
    *   **Purpose:** This key enumerates all USB Mass Storage devices that have been connected to the system.
    *   **Information Stored:**
        *   **Device Instance ID:** A unique identifier for each USB device connection (e.g., `USBSTOR\DISK&VEN_KINGSTON&PROD_DATATRAVELER_3.0&REV_1000\AA01041020110305&0`).
        *   **Vendor ID (VID):** A 4-digit hexadecimal code identifying the manufacturer of the device.
        *   **Product ID (PID):** A 4-digit hexadecimal code identifying the specific model of the device.
        *   **Serial Number:** Often stored here, providing a unique identifier for an individual device.
        *   **Device Description:** A human-readable name for the device.
        *   **First Time Connected:** The timestamp when the device was first recognized by the system.
        *   **Last Time Connected:** The timestamp when the device was last connected.
        *   **Connection Count:** In some Windows versions, the number of times a device has been connected.

    *   **Example Value:** `DeviceDesc` (REG_SZ) might contain "Kingston DataTraveler 3.0 USB Device". `HardwareID` (REG_MULTI_SZ) could show `USBSTOR\Disk&Ven_Kingston&Prod_DataTraveler_3.0&Rev_1000`, `USBSTOR\Disk&Ven_Kingston&Prod_DataTraveler_3.0`, etc.

*   **`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USB`**:
    *   **Purpose:** Enumerates all USB devices, not just mass storage. This includes keyboards, mice, webcams, etc.
    *   **Information Stored:** Similar to `USBSTOR`, but for various USB device classes.

*   **`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\EMDMgmt`**:
    *   **Purpose:** Stores information about connected media devices, including removable drives.
    *   **Information Stored:**
        *   **Volume GUIDs:** Unique identifiers for volumes on storage devices.
        *   **Drive Letters:** The assigned drive letter for the device.
        *   **Volume Serial Numbers:** Unique identifier for the file system on the volume.

    *   **Example:** You might find entries linking a specific device to a drive letter like `D:`.

*   **`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\UserNotify`**:
    *   **Purpose:** While not directly for USB connections, this can sometimes show entries related to devices that trigger login events or have associated user interface elements.

*   **`HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2`**:
    *   **Purpose:** Tracks mounted volumes, including those from USB drives. This can show drive letters, volume GUIDs, and file paths where they were mounted.

*   **`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\USBSTOR\Enum`** (Older versions)
    *   **Purpose:** In older Windows versions, this key might also contain enumerations of USB storage devices.

**Important Note on Timestamps:**

Registry timestamps are crucial for reconstructing the timeline.
*   **`LastWrite` time of the Registry key itself:** This often reflects the last time the device was connected or interacted with.
*   **Specific timestamps within values:** Some values might contain timestamps indicating the first or last connection.

---

### 4. Significance of Other Data Sources

While the Registry is paramount, other data sources provide crucial corroboration and additional context:

*   **Event Logs:**
    *   **System Log:** Look for events related to device installation and Plug and Play.
        *   **Event ID 1000:** Information about device installation.
        *   **Event ID 43:** Device started (e.g., `USBSTOR` service started).
        *   **Event ID 44:** Device stopped.
    *   **Setupapi.dev.log (often found in `C:\Windows\INF\`):** Detailed logs of device installation and driver loading. This is an invaluable source for confirming when a device was first recognized and installed.

*   **File System Artifacts:**
    *   **Last Accessed, Creation, Modification Times:** Examine the timestamps of files and folders on the USB drive itself (if the drive is still connected or its image is available). These times can indicate when the drive was accessed and what activities were performed.
    *   **`$MFT` (Master File Table):** In NTFS file systems, the `$MFT` contains metadata about every file and directory, including timestamps.
    *   **Shellbags:** These Registry entries (located in `NTUSER.DAT`) record the viewing preferences for folders. If a user browsed the contents of a USB drive, Shellbags can indicate which folders were accessed and when.

*   **Prefetch Files (`.pf` files in `C:\Windows\Prefetch\`):**
    *   **Purpose:** Prefetch files are created when an application is executed. If a USB device contains an autorun executable or if the user manually executed a file from the USB, a corresponding prefetch file might be generated.
    *   **Information:** Timestamps of execution and the number of times an executable was run.

*   **Shimcache (AppCompatCache):**
    *   **Purpose:** A cache of recently executed programs. If programs from a USB drive were run, they might appear here.
    *   **Information:** Program path, last modified time, and execution flag.

---

### 5. Utilizing Forensic Tools for USB Connection Analysis

Manual analysis of the Registry can be tedious and error-prone. Forensic tools automate the extraction and interpretation of this data.

**Common Forensic Tools:**

*   **FTK Imager:** A free tool for creating disk images and mounting them for browsing.
*   **EnCase:** A comprehensive commercial digital forensics platform.
*   **Autopsy:** A popular open-source digital forensics platform.
*   **USBDeview (NirSoft):** A free utility that displays information about all USB devices currently connected to your computer, as well as all USB devices that have been connected in the past. It displays useful information like device name, description, manufacturer, serial number, and the date and time it was last connected.
*   **Registry Explorer (Eric Zimmerman's Tools):** A powerful free tool for parsing and analyzing Windows Registry hives. It has specific plugins for USB device analysis.
*   **ShellBags Explorer (Eric Zimmerman's Tools):** For analyzing Shellbags artifacts.
*   **Prefetch Explorer (Eric Zimmerman's Tools):** For analyzing Prefetch files.

**How Tools Help:**

*   **Automated Parsing:** Tools automatically parse Registry hives, extract relevant keys, and present the data in a user-friendly format.
*   **Timestamps:** They often normalize timestamps to a consistent format, making timeline reconstruction easier.
*   **Corroboration:** Many tools can correlate information from different sources (Registry, Event Logs, File System) to provide a more complete picture.
*   **Reporting:** Tools can generate detailed reports of findings.

---

### 6. Reconstructing the Timeline of USB Device Usage

The ultimate goal is to understand *when* a USB device was connected and used. This involves:

1.  **Identifying the USB device:** Using the Registry keys (`USBSTOR`, `USB`), determine the VID, PID, and potentially the serial number of the device.
2.  **Extracting all relevant timestamps:**
    *   Registry timestamps (`LastWrite` of keys, specific values).
    *   Event Log timestamps.
    *   File system timestamps on the USB drive (if available).
    *   Prefetch file timestamps.
    *   Shellbags timestamps.
3.  **Correlating timestamps:** Match timestamps from different sources to build a chronological sequence of events. For example, an Event Log entry indicating a device installation might precede a Registry entry showing its first connection.
4.  **Determining the last connection:** The `LastWrite` timestamp of the relevant Registry key in `Enum\USBSTOR` often indicates the last time the device was plugged in.

**Example Scenario:**

An investigator finds a USB flash drive connected to a suspect's computer. They want to know when it was last used.

*   **Registry Analysis (using Registry Explorer):**
    *   They find an entry under `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR` with a Device Instance ID matching the drive's VID/PID.
    *   The `LastWrite` time of this key is `2023-10-27 14:30:15 UTC`. This suggests the drive was connected around this time.
*   **Event Log Analysis (System Log):**
    *   They find an event indicating "Disk drive (X:) has been surprised removed" with a timestamp shortly after the Registry timestamp, suggesting the drive was unplugged.
    *   They might also find a "Device installed" event in the Setupapi log related to this specific USB device.
*   **Shellbags Analysis:**
    *   Shellbags might show that the user browsed the contents of the USB drive at `2023-10-27 14:20:00 UTC`.

By combining these pieces of evidence, the investigator can confidently state that the USB drive was connected and accessed on October 27, 2023, between 14:20 and 14:30 UTC.

---

### Practice Questions and Exercises

**Question 1:**

Which Windows Registry hive is primarily used for storing information about connected hardware devices, including USB devices?

a) `HKEY_CLASSES_ROOT`
b) `HKEY_CURRENT_CONFIG`
c) `HKEY_LOCAL_MACHINE\SYSTEM`
d) `HKEY_USERS`

**Answer 1:**

c) `HKEY_LOCAL_MACHINE\SYSTEM`

**Explanation:** The `SYSTEM` hive contains hardware and system configuration data, including the Plug and Play manager's records of connected devices.

---

**Question 2:**

You are analyzing the Windows Registry for evidence of USB mass storage device connections. Which key would you most likely investigate?

a) `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2`
b) `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\EMDMgmt`
c) `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR`
d) `C:\Windows\Prefetch`

**Answer 2:**

c) `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR`

**Explanation:** This key specifically enumerates USB mass storage devices that have been connected. While other options might contain related information, `USBSTOR` is the most direct source for mass storage device enumerations.

---

**Question 3:**

What is the significance of the `LastWrite` timestamp on a Registry key found under `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR`?

a) It indicates the date and time the operating system was installed.
b) It indicates the last time the USB device was connected to the system.
c) It indicates the date and time the user last logged into the computer.
d) It indicates the date and time the Registry hive was last backed up.

**Answer 3:**

b) It indicates the last time the USB device was connected to the system.

**Explanation:** The `LastWrite` time of the specific Registry key representing a USB device often reflects the last time Windows interacted with that device, typically when it was plugged in.

---

**Question 4 (Practical Exercise):**

If you had a disk image of a Windows system, describe the steps you would take using a forensic tool like Registry Explorer to find out what USB flash drives were connected to the system and when they were last used.

**Answer 4 (Outline):**

1.  **Load the Registry Hives:** Open the disk image in Registry Explorer and load the relevant Registry hives: `SYSTEM` and `SOFTWARE` (specifically from the `Windows\System32\Config` folder in the image).
2.  **Navigate to `USBSTOR`:** Browse to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR`.
3.  **Examine Device Entries:** For each subkey under `USBSTOR` (representing a unique device instance):
    *   Look at the `DeviceDesc` value for a human-readable name.
    *   Examine `HardwareID` values for Vendor ID (VID) and Product ID (PID).
    *   Note the `LastWrite` timestamp of the key, which indicates the last connection time.
    *   Look for values that might contain serial numbers if available.
4.  **Corroborate with other sources (if available and time permits):**
    *   Check Event Logs for device installation or removal events corresponding to the identified USB devices.
    *   Examine `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\EMDMgmt` for volume information and drive letter assignments.
    *   If a USB drive's contents are accessible (e.g., from another forensic image or live system), analyze file system timestamps on the drive itself.
5.  **Document findings:** Record the VID, PID, potential serial numbers, device descriptions, and the last connection timestamps for each identified USB device.

---

### Important Points to Remember:

*   **Registry is Key:** The Windows Registry is the most critical source for USB connection evidence.
*   **`USBSTOR` and `USB`:** Focus on `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR` for mass storage and `\USB` for other USB devices.
*   **Timestamps are Crucial:** Pay close attention to `LastWrite` times on Registry keys and timestamps in Event Logs.
*   **Corroborate Evidence:** Never rely on a single piece of evidence. Use Event Logs, file system artifacts, and Prefetch files to confirm findings.
*   **Forensic Tools are Essential:** Utilize specialized tools like Registry Explorer and USBDeview for efficient and accurate analysis.
*   **Windows Version Differences:** Be aware that Registry paths and specific artifact locations can vary slightly between Windows versions (e.g., XP vs. Windows 7 vs. Windows 10/11).
*   **Serial Numbers:** The presence and extraction of USB serial numbers are vital for identifying specific devices. Not all devices expose a serial number.
*   **User Context:** Remember that USB connections can be user-specific when analyzing `NTUSER.DAT` hives.

---
