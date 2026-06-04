---
title: "RAID5"
subject: "STORAGE SYSTEMS"
module: "Module 1: Storage technologies:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8caa6"
status: "completed"
scrapedAt: "2026-05-20T17:27:20.980Z"
---
# STORAGE SYSTEMS - Module 1: Storage Technologies

## Topic: RAID 5

---

### 1. Introduction to RAID

*   **RAID (Redundant Array of Independent Disks):** A data storage virtualization technology that combines multiple physical disk drives into one or more logical units for the purposes of data redundancy, performance improvement, or both.
*   **Purpose of RAID:**
    *   **Fault Tolerance (Redundancy):** Protect data from disk failures.
    *   **Performance Improvement:** Increase read/write speeds.
    *   **Cost-Effectiveness:** Often cheaper than single, high-capacity drives.

---

### 2. RAID 5: Parity-Based Redundancy

*   **Definition:** RAID 5 is a popular RAID level that distributes **block-level striping with distributed parity**. This means data is striped across multiple disks, and parity information is also distributed across all disks.
*   **Minimum Drives:** Requires a minimum of **three** physical disk drives.
*   **Key Concept: Parity:** Parity is a form of error detection and correction. In RAID 5, parity data is calculated from the data on other disks and stored on a separate disk. If one disk fails, the missing data can be reconstructed using the parity information.
*   **Distributed Parity:** Unlike RAID 3 or RAID 4, where parity is dedicated to a single disk, RAID 5 distributes the parity information across all drives in the array. This avoids the "write penalty" associated with a dedicated parity disk being a bottleneck.

---

### 3. How RAID 5 Works

*   **Striping:** Data is broken down into blocks and striped across multiple drives. This improves read performance by allowing multiple drives to serve different parts of a file simultaneously.
*   **Parity Calculation:** For each stripe of data across multiple drives, a parity block is calculated. The parity calculation is typically an XOR (exclusive OR) operation.
    *   **XOR Example:**
        *   Disk 1 Data Block: `1010`
        *   Disk 2 Data Block: `0110`
        *   Disk 3 Data Block: `1100`
        *   Parity Block: `1010 XOR 0110 XOR 1100 = 0000`
*   **Distributed Parity Layout:** The parity blocks are not concentrated on a single drive. Instead, they are distributed in a rotating fashion across the drives. This spreads the parity calculation and read/write load evenly.

    *   **Example Layout (4 Drives):**
        | Drive 1 | Drive 2 | Drive 3 | Drive 4 |
        | :------ | :------ | :------ | :------ |
        | Data A1 | Data A2 | Data A3 | Parity A|
        | Data B1 | Data B2 | Parity B| Data B3 |
        | Data C1 | Parity C| Data C2 | Data C3 |
        | Parity D| Data D1 | Data D2 | Data D3 |

*   **Read Operations:**
    *   When reading data, the system can read blocks from multiple drives simultaneously (striping).
    *   If a parity block needs to be read, it's read from the corresponding drive.
*   **Write Operations:**
    *   Writes are more complex due to parity.
    *   **Read-Modify-Write:** To update a single data block, the RAID controller must:
        1.  Read the original data block.
        2.  Read the corresponding parity block.
        3.  Modify the data block in memory.
        4.  Recalculate the new parity using the modified data and the original data of other blocks in the stripe.
        5.  Write the modified data block.
        6.  Write the new parity block.
    *   This "read-modify-write" process incurs a performance penalty, especially for small, random writes.

---

### 4. Fault Tolerance and Reconstruction

*   **Single Drive Failure:** RAID 5 can tolerate the failure of **one** disk drive without data loss.
*   **Reconstruction Process:**
    1.  When a drive fails, the RAID controller marks it as offline.
    2.  The array continues to operate in a degraded mode, accessing data from the remaining drives.
    3.  When a failed drive is replaced, the controller uses the parity information and data from the surviving drives to rebuild the missing data onto the new drive. This process is called **reconstruction** or **resilvering**.

    *   **Reconstruction Example (from the layout above, if Drive 3 fails):**
        *   To reconstruct Data C2 on the new Drive 3:
            *   Read Data C1 (Drive 1).
            *   Read Parity C (Drive 2).
            *   Read Data C3 (Drive 4).
            *   Calculate: `New Data C2 = Data C1 XOR Parity C XOR Data C3`

---

### 5. Performance Characteristics

*   **Read Performance:** Generally good. Striping allows for parallel reads across multiple drives.
*   **Write Performance:** Can be a bottleneck, especially for small, random writes, due to the overhead of calculating and writing parity (read-modify-write penalty). Sequential writes generally perform better.
*   **Capacity Overhead:** In an array of *N* drives, the usable capacity is equivalent to *(N-1)* drives. One drive's worth of capacity is used for parity.
    *   **Formula:** Usable Capacity = (Number of Drives - 1) * (Capacity of Smallest Drive)

---

### 6. Advantages of RAID 5

*   **Good Balance:** Offers a good balance between performance (especially for reads), redundancy, and storage efficiency.
*   **Fault Tolerance:** Can withstand a single disk failure.
*   **Storage Efficiency:** More efficient than RAID 1 or RAID 10 in terms of usable capacity for a given number of drives.
*   **Distributed Parity:** Avoids the bottleneck of a dedicated parity drive.

---

### 7. Disadvantages of RAID 5

*   **Write Performance Penalty:** The read-modify-write process for parity calculations can significantly slow down write operations, especially random writes.
*   **Reconstruction Time:** Rebuilding a failed drive can take a considerable amount of time, especially with large drives. During this rebuild period, the array is vulnerable to a second drive failure, which would result in data loss.
*   **Single Drive Failure Tolerance Only:** Cannot withstand the failure of two or more drives simultaneously.
*   **Increased Risk with Large Drives:** As drive sizes increase, the time it takes to reconstruct can be very long, increasing the window of vulnerability.

---

### 8. When to Use RAID 5

*   **Read-Intensive Workloads:** Applications that perform more reads than writes, such as web servers, file servers, and streaming media servers.
*   **General-Purpose Storage:** A good default choice for many business applications where a balance of performance, redundancy, and capacity is needed.
*   **Budget-Conscious Solutions:** When cost-effectiveness is a consideration, as it offers better capacity utilization than RAID 1 or RAID 10.

---

### 9. Practice Questions & Answers

**Question 1:** What is the minimum number of drives required for a RAID 5 array?
**Answer:** Three drives.

**Question 2:** Explain the concept of "distributed parity" in RAID 5.
**Answer:** Distributed parity means that the parity information, which is used to reconstruct data in case of a drive failure, is spread across all the drives in the array, rather than being concentrated on a single dedicated parity drive. This prevents the parity drive from becoming a performance bottleneck.

**Question 3:** What is the main performance disadvantage of RAID 5, particularly for certain types of operations?
**Answer:** The main performance disadvantage is the write performance penalty, especially for small, random writes. This is due to the "read-modify-write" process required to update parity information.

**Question 4:** How much usable capacity is lost in a RAID 5 array of 5 drives, each with a capacity of 1TB?
**Answer:**
*   Total drives (N) = 5
*   Capacity of smallest drive = 1TB
*   Usable Capacity = (N - 1) * (Capacity of Smallest Drive)
*   Usable Capacity = (5 - 1) * 1TB = 4 * 1TB = 4TB
*   Therefore, 1TB of capacity is lost due to parity.

**Question 5:** What is the primary risk associated with using RAID 5 with very large capacity drives?
**Answer:** The primary risk is the extended time required for data reconstruction after a drive failure. During this long rebuild period, the array is highly vulnerable to a second drive failure, which would lead to complete data loss.

---

### 10. Important Points to Remember

*   **Minimum 3 drives.**
*   **Single disk fault tolerance.**
*   **Distributed parity is key for performance and load balancing.**
*   **Read performance is generally good; write performance can be a bottleneck.**
*   **Usable capacity is (N-1) * smallest drive capacity.**
*   **Reconstruction time is a critical factor, especially with large drives.**
*   **Not suitable for highly write-intensive workloads.**
*   **Not fault-tolerant against two simultaneous drive failures.**
*   **Consider RAID 6 or RAID 10 for higher levels of protection against multiple drive failures.**

---
