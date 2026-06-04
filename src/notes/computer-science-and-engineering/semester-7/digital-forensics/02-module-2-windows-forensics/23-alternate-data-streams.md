---
title: "Alternate Data Streams"
subject: "DIGITAL FORENSICS"
module: "Module 2: Windows Forensics "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c520"
status: "completed"
scrapedAt: "2026-05-20T17:04:52.514Z"
---
# Digital Forensics: Module 2 - Windows Forensics

## Topic: Alternate Data Streams (ADS)

---

### 1. Introduction to Alternate Data Streams (ADS)

*   **What are Alternate Data Streams?**
    *   A feature of the NTFS file system that allows embedding of additional data with a file, without changing the file's primary content or size.
    *   Think of it as a hidden compartment within a file where extra information can be stored.
    *   These streams are not directly visible in standard file explorer views.

*   **Purpose of ADS:**
    *   **Original intended use:** Used by Windows for various purposes, such as:
        *   Storing file attributes (e.g., creation time, last modified time).
        *   Storing thumbnail images for documents.
        *   Storing Zone.Identifier information (used by the browser to indicate the origin of downloaded files, often leading to security warnings).
        *   Document summarization or metadata.
    *   **Malicious use:** Can be exploited by attackers to hide malware, malicious scripts, or other sensitive data.

*   **How ADS works (under the hood):**
    *   NTFS stores file information in Master File Table (MFT) records.
    *   Each file and directory has an MFT record.
    *   This record contains attributes, one of which can be `$DATA`.
    *   By default, the `$DATA` attribute stores the main content of the file.
    *   However, additional `$DATA` attributes, or other attributes, can be added to the MFT record, each referred to as a "stream."
    *   The primary stream is the one seen by the user. Other streams are alternate data streams.

---

### 2. Key Concepts and Definitions

*   **NTFS (New Technology File System):** The default file system for modern Windows operating systems. It supports advanced features like journaling, permissions, encryption, and Alternate Data Streams.

*   **MFT (Master File Table):** A database file on an NTFS volume that contains records for every file and directory on the volume. Each record describes the file's attributes and where its data is located.

*   **Attribute:** A piece of information about a file, such as its name, size, timestamps, security permissions, or data content.

*   **Stream:** In the context of NTFS, a stream is a sequence of bytes associated
