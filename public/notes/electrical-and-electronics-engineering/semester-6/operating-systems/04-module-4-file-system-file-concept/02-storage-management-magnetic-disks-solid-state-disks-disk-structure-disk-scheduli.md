---
title: "Storage Management: Magnetic disks, Solid-state disks, Disk Structure, Disk scheduling, Disk formatting."
subject: "OPERATING SYSTEMS"
module: "Module 4: File System: File concept "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365e9"
status: "completed"
scrapedAt: "2026-05-23T16:30:14.602Z"
---
# Operating Systems: Module 4 - File System: File Concept

## Topic: Storage Management: Magnetic Disks, Solid-State Disks, Disk Structure, Disk Scheduling, Disk Formatting

---

### 1. Introduction to Storage Management

Storage management is a crucial function of the operating system, responsible for organizing, accessing, and managing data stored on secondary storage devices. This module delves into the core aspects of how operating systems handle this critical task, focusing on the prevalent storage technologies and the mechanisms used to optimize their performance.

---

### 2. Magnetic Disks

Magnetic disks, historically the primary medium for secondary storage, store data magnetically.

*   **Key Concepts:**
    *   **Platters:** Circular disks coated with a magnetic material. Data is recorded on both surfaces of each platter.
    *   **Spindle:** The central rod around which platters rotate at a constant speed (RPM - Revolutions Per Minute).
    *   **Read/Write Heads:** Small electromagnets attached to an actuator arm that move across the platter surface to read or write data.
    *   **Tracks:** Concentric circles on each platter surface where data is stored.
    *   **Sectors:** Divisions of a track, representing the smallest addressable unit of storage (typically 512 bytes).
    *   **Cylinders:** A set of tracks at the same radial position on all platters.
    *   **Cylinder Skew:** A small delay introduced to avoid read/write head contention when moving between adjacent tracks.

*   **How Data is Stored and Accessed:**
    1.  **Seek Time:** The time it takes for the read/write heads to move to the correct cylinder.
    2.  **Rotational Latency:** The time it takes for the desired sector to rotate under the read/write head.
    3.  **Transfer Time:** The time it takes to transfer the data from the disk to memory (or vice-versa) once the head is positioned.

*   **Reference:**
    *   Silberschatz, Galvin, Gagne (9th Edition) discusses magnetic disks in detail in Chapter 12.

---

### 3. Solid-State Drives (SSDs)

Solid-state drives use flash memory chips to store data, offering significant performance advantages over magnetic disks.

*   **Key Concepts:**
    *   **NAND Flash Memory:** The underlying technology for SSDs, organized into pages and blocks.
    *   **Pages:** The smallest unit of read/write operation.
    *   **Blocks:** A collection of pages. Erasing data must be done at the block level, which is slower than page writes.
    *   **Wear Leveling:** A technique to distribute write operations evenly across all flash memory cells to prolong the lifespan of the SSD.
    *   **Garbage Collection:** The process of reclaiming space occupied by deleted data by moving valid pages from partially filled blocks to new blocks, and then erasing the original blocks.
    *   **TRIM Command:** An OS command that informs the SSD which data blocks are no longer in use, allowing the SSD to manage its internal storage more efficiently.

*   **Advantages of SSDs over Magnetic Disks:**
    *   **Faster Access Times:** No mechanical movement required for seeking and rotation.
    *   **Lower Latency:** Significantly reduced delays in data access.
    *   **Higher Throughput:** Faster data transfer rates.
    *   **Lower Power Consumption:** Generally consume less power.
    *   **Durability:** More resistant to physical shock.

*   **Disadvantages of SSDs:**
    *   **Higher Cost per Gigabyte:** Typically more expensive than HDDs.
    *   **Limited Write Cycles:** Flash memory cells have a finite number of write/erase cycles.
    *   **Data Recovery Complexity:** Data recovery can be more challenging in case of failure.

*   **Reference:**
    *   Silberschatz, Galvin, Gagne (9th Edition) provides an overview of SSDs and their implications in Chapter 12.

---

### 4. Disk Structure

Disks are organized into logical units for efficient storage and retrieval of data by the operating system.

*   **Key Concepts:**
    *   **Physical Formatting (Low-Level Formatting):** Dividing the disk into sectors and tracks. This is usually done by the manufacturer.
    *   **Logical Formatting (High-Level Formatting):** Creating a file system on the disk, which involves:
        *   **File Allocation Table (FAT):** A table that keeps track of which disk sectors are allocated to which files.
        *   **Index Nodes (i-nodes):** In Unix-like systems, each file has an i-node that contains metadata about the file (permissions, ownership, timestamps, pointers to data blocks).
        *   **Boot Block:** Contains information needed to boot the operating system.
        *   **Partitioning:** Dividing the disk into one or more logical sections called partitions. Each partition can be treated as a separate disk drive.

*   **How the OS Sees the Disk:**
    *   The OS typically sees a disk as an array of logical blocks, managed by the file system. The underlying physical structure (sectors, tracks) is abstracted away.

*   **Reference:**
    *   Silberschatz, Galvin, Gagne (9th Edition) details disk structure and logical formatting in Chapter 12.
    *   Tanenbaum (6th Edition) also covers disk organization and file system structures extensively in its chapters on file systems.

---

### 5. Disk Scheduling

Disk scheduling algorithms are employed by the operating system to determine the order in which disk I/O requests are serviced to optimize performance (minimize seek time and rotational latency) and improve throughput.

*   **Goals of Disk Scheduling:**
    *   **Maximize Throughput:** Service as many requests as possible per unit of time.
    *   **Minimize Response Time:** Reduce the time taken to service a particular request.
    *   **Minimize Seek Time:** Reduce the movement of the read/write heads.
    *   **Minimize Rotational Latency:** Reduce the waiting time for the desired sector.

*   **Common Disk Scheduling Algorithms:**

    *   **First-Come, First-Served (FCFS):**
        *   **Description:** Requests are serviced in the order they arrive.
        *   **Pros:** Simple to implement.
        *   **Cons:** Can lead to very long seek times if requests are scattered across the disk.

    *   **Shortest Seek Time First (SSTF):**
        *   **Description:** The request with the shortest seek time from the current head position is serviced next.
        *   **Pros:** Generally provides better performance than FCFS.
        *   **Cons:** Can lead to **starvation** of requests that are far away from the current head position.

    *   **SCAN (Elevator Algorithm):**
        *   **Description:** The read/write heads move in one direction (e.g., from inner to outer cylinders), servicing all requests along the way. When it reaches the end, it reverses direction and continues servicing requests.
        *   **Pros:** Prevents starvation. Provides a good balance between throughput and response time.
        *   **Cons:** Can still have significant waiting times for requests at the opposite end of the sweep.

    *   **C-SCAN (Circular SCAN):**
        *   **Description:** Similar to SCAN, but when the head reaches the end of the disk, it immediately jumps back to the beginning of the disk (without servicing requests on the return trip) and starts a new sweep.
        *   **Pros:** Provides more uniform wait times compared to SCAN, as it avoids the long waits for requests at the far end that SCAN might experience.
        *   **Cons:** May service fewer requests per sweep than SCAN if requests are evenly distributed.

    *   **LOOK:**
        *   **Description:** A variation of SCAN where the head only moves as far as the last request in each direction, rather than going all the way to the end of the disk.

    *   **C-LOOK:**
        *   **Description:** A variation of C-SCAN where the head only moves as far as the last request in each direction before jumping back.

*   **Example:**
    *   Consider the following disk head positions and requests (cylinder numbers):
        Head is at cylinder 50. Requests: 98, 183, 37, 122, 65, 67, 124, 180, 27
    *   **FCFS:** 50 -> 98 -> 183 -> 37 -> 122 -> 65 -> 67 -> 124 -> 180 -> 27 (High seek movement)
    *   **SSTF:** 50 -> 37 (13) -> 65 (28) -> 67 (2) -> 27 (40) -> 98 (71) -> 122 (24) -> 124 (2) -> 180 (56) -> 183 (3) (Minimizes immediate seeks but can cause starvation)
    *   **SCAN (moving towards higher cylinders):** 50 -> 65 -> 67 -> 98 -> 122 -> 124 -> 180 -> 183 -> (reverse) -> 37 -> 27 (Better than FCFS)
    *   **C-SCAN (moving towards higher cylinders):** 50 -> 65 -> 67 -> 98 -> 122 -> 124 -> 180 -> 183 -> (jump to 0) -> 27 -> 37 (Uniform wait times)

*   **Reference:**
    *   Silberschatz, Galvin, Gagne (9th Edition) provides a comprehensive analysis of disk scheduling algorithms in Chapter 12.
    *   Nutt, Chaki, Neogy (3rd Edition) also covers disk scheduling techniques in their respective chapters.

---

### 6. Disk Formatting

Disk formatting is the process of preparing a disk drive for use by an operating system. It involves creating the file system structure on the disk.

*   **Types of Formatting:**
    *   **Low-Level Formatting (Physical Formatting):**
        *   **Purpose:** To divide the disk surface into sectors and tracks. This process also writes a unique identifier to each sector and potentially a defect list for bad sectors.
        *   **Who Performs:** Typically done by the disk manufacturer. It's a hardware-level operation.
        *   **Re-formatting:** While possible, re-low-level formatting is rarely needed by end-users.

    *   **High-Level Formatting (Logical Formatting):**
        *   **Purpose:** To create a file system on the disk. This involves setting up the directory structure, allocating space for files, creating the boot sector, and establishing structures like the File Allocation Table (FAT) or i-nodes.
        *   **Who Performs:** Done by the operating system using tools like `mkfs` (Linux), `format` (Windows).
        *   **Effect:** Erases existing data and replaces it with the new file system structure.

*   **Process of High-Level Formatting:**
    1.  **Partitioning:** The disk is divided into one or more logical partitions.
    2.  **File System Creation:** The chosen file system (e.g., NTFS, FAT32, ext4, APFS) is installed on the partition. This includes:
        *   Creating the root directory.
        *   Initializing the allocation structures (e.g., FAT, bitmap).
        *   Writing metadata for the file system itself.
    3.  **Boot Sector:** Installing the boot sector, which contains the initial instructions to load the operating system when the computer starts.

*   **Reference:**
    *   Dhamdhere (2nd Edition) often provides practical insights into file system creation and formatting in its sections.
    *   Haldar & Aravind (Pearson) also likely covers the practical aspects of disk formatting and file system preparation.

---

### 7. Alignment with Course Outcomes (COs)

This module directly contributes to several course outcomes:

*   **CO1 (Explain the relevance, structure and functions of Operating Systems):** Understanding storage devices (magnetic disks, SSDs), their structure, and the OS's role in managing them (formatting, scheduling) is fundamental to the OS's functions.
*   **CO2 (Illustrate the concepts of process management and process scheduling mechanisms):** Disk scheduling is analogous to CPU scheduling; both aim to optimize resource utilization and minimize waiting times. The concepts of queues, algorithms, and performance metrics are shared.
*   **CO6 (Explain the security aspects and algorithms for file and storage management):** While this module focuses on performance, the underlying storage structures (file systems) are the foundation for file security and access control, which will be covered in later modules. Understanding how data is physically and logically organized is crucial for managing it securely.

---

### 8. Important Points to Remember

*   **HDD vs. SSD:** SSDs are significantly faster and more durable due to the absence of mechanical parts, but HDDs are still more cost-effective for large storage capacities.
*   **Seek Time and Rotational Latency:** These are the primary performance bottlenecks for magnetic disks. Disk scheduling algorithms aim to minimize these.
*   **Wear Leveling & Garbage Collection:** Crucial for the longevity and performance of SSDs.
*   **Low-Level vs. High-Level Formatting:** Low-level formatting sets up the physical structure, while high-level formatting creates the file system that the OS interacts with.
*   **Disk Scheduling Goals:** Throughput maximization and latency minimization are key. SSTF can lead to starvation, while SCAN and C-SCAN prevent it.

---

### 9. Practice Questions and Exercises

**Question 1:** Explain the main differences between magnetic disks and solid-state drives, focusing on their impact on operating system storage management.
**Answer:** Magnetic disks use spinning platters and moving read/write heads, leading to mechanical delays (seek time, rotational latency). SSDs use flash memory, providing much faster access times and lower latency due to their electronic nature. This means the OS can access data much quicker from an SSD, influencing caching strategies and overall system responsiveness.

**Question 2:** Describe the SCAN (Elevator Algorithm) for disk scheduling. What are its advantages and disadvantages?
**Answer:** SCAN moves the read/write head in one direction across the disk, servicing requests, and then reverses direction upon reaching the end. Its advantage is preventing starvation of requests. A disadvantage is that requests at the far end of the sweep might experience longer waiting times than those closer to the current head position.

**Question 3:** What is the purpose of high-level formatting?
**Answer:** High-level formatting prepares a disk partition for use by creating a file system. This involves establishing the directory structure, allocation tables (like FAT or i-nodes), and the boot sector, allowing the OS to store and retrieve files logically.

**Question 4:** If the disk head is at cylinder 50, and the pending requests are for cylinders 98, 183, 37, 122, 65, 67, 124, 180, 27. Calculate the total head movement in cylinders for the SSTF algorithm. Assume the disk head will move towards increasing cylinder numbers first.
**Answer:**
Current Head: 50
Requests: {98, 183, 37, 122, 65, 67, 124, 180, 27}

1.  From 50, closest is 37 (seek = |50-37| = 13). New Head: 37. Requests: {98, 183, 122, 65, 67, 124, 180, 27}
2.  From 37, closest is 27 (seek = |37-27| = 10). New Head: 27. Requests: {98, 183, 122, 65, 67, 124, 180}
3.  From 27, closest is 65 (seek = |27-65| = 38). New Head: 65. Requests: {98, 183, 122, 67, 124, 180}
4.  From 65, closest is 67 (seek = |65-67| = 2). New Head: 67. Requests: {98, 183, 122, 124, 180}
5.  From 67, closest is 98 (seek = |67-98| = 31). New Head: 98. Requests: {183, 122, 124, 180}
6.  From 98, closest is 122 (seek = |98-122| = 24). New Head: 122. Requests: {183, 124, 180}
7.  From 122, closest is 124 (seek = |122-124| = 2). New Head: 124. Requests: {183, 180}
8.  From 124, closest is 180 (seek = |124-180| = 56). New Head: 180. Requests: {183}
9.  From 180, closest is 183 (seek = |180-183| = 3). New Head: 183. Requests: {}

Total Head Movement = 13 + 10 + 38 + 2 + 31 + 24 + 2 + 56 + 3 = **179 cylinders**.

**Question 5:** What is the primary challenge in managing SSDs compared to magnetic disks, and how do operating systems address it?
**Answer:** The primary challenge in managing SSDs is their limited number of write/erase cycles per flash memory cell. Operating systems address this through techniques like **wear leveling**, which distributes writes evenly across all cells, and by supporting the **TRIM command**, which allows the OS to inform the SSD about unused blocks, enabling more efficient internal garbage collection and reducing unnecessary writes.

---
This comprehensive set of notes covers the essential aspects of storage management as detailed in your specified learning outcomes and textbooks. Remember to cross-reference with your primary textbook for deeper understanding and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
