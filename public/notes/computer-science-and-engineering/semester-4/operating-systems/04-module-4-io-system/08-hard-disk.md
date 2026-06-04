---
title: "Hard disk:"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd1"
status: "completed"
scrapedAt: "2026-05-20T16:14:32.816Z"
---
## OPERATING SYSTEMS - Module 4: I/O System - Topic: Hard Disk

**Learning Outcomes:**

*   Understand the structure and components of a hard disk drive (HDD).
*   Explain how data is organized and accessed on a hard disk.
*   Describe various disk scheduling algorithms and their performance characteristics.
*   Understand disk management techniques, including formatting, partitioning, and RAID.
*   Discuss the different types of interfaces used for connecting hard disks to a computer system.
*   Understand the concept of disk caching.
*   Compare and contrast HDDs with other storage technologies such as SSDs.

**1. Hard Disk Structure and Components:**

*   **Definition:** A hard disk drive (HDD) is a non-volatile storage device that stores and retrieves digital data using rotating magnetic disks (platters).
*   **Components:**
    *   **Platters:**  Circular disks made of a rigid material (typically aluminum alloy or glass) coated with a magnetic material.  Data is stored magnetically on these platters.
    *   **Spindle:**  The central axis around which the platters rotate. Rotation speed is measured in RPM (revolutions per minute).  Common speeds include 5400 RPM, 7200 RPM, and 10000 RPM.
    *   **Read/Write Heads:**  Electromagnetic devices that read and write data to the platters.  Each platter surface typically has its own read/write head. The head *flies* above the surface of the platter on a cushion of air to prevent physical contact.
    *   **Actuator Arm (Head Arm):**  Mechanically positions the read/write heads over the desired track on the platter. The arm moves radially across the platters.
    *   **Actuator:**  The mechanism that moves the actuator arm.  Common types include voice coil actuators (more precise and faster) and stepper motor actuators (older, less precise).
    *   **Controller:**  A circuit board that controls the operation of the hard disk, including managing the movement of the actuator arm, reading and writing data, and communicating with the host system.  It includes a buffer (cache).
    *   **Interface Connector:**  Connects the hard disk to the host system (e.g., SATA, SAS, IDE).
    *   **Case/Enclosure:**  Protects the internal components of the hard disk.

*   **Diagram:**

    ```
    +---------------------------------------------------+
    |                      Case                         |
    |   +-----------+  +-----------+  +-----------+   |
    |   |  Platter  |  |  Platter  |  |  Platter  |   |  (Multiple platters stacked on the spindle)
    |   +-----------+  +-----------+  +-----------+   |
    |        |              |              |
    |        Head          Head          Head        (Read/Write Heads)
    |        |              |              |
    |   +-----|--------------|--------------|-----+
    |   |     Actuator Arm                         |
    |   +------------------------------------------+
    |                      Spindle                    |
    |                     Actuator                     |
    |                  Controller Board               |
    |               Interface Connector                |
    +---------------------------------------------------+
    ```

**2. Data Organization and Access:**

*   **Sectors:**  The smallest unit of storage on a hard disk.  Typically 512 bytes or 4096 bytes (4KiB - Advanced Format).
*   **Tracks:**  Concentric circles on the platter surface where data is stored.
*   **Cylinders:**  The set of all tracks that are at the same radial distance from the center of the platters.  If a hard disk has multiple platters, a cylinder consists of a track on each platter surface.
*   **CHS Addressing (Cylinder-Head-Sector):**  An older addressing scheme used to locate data on a hard disk.  It specifies the cylinder number, head number (which platter surface), and sector number within the track.  Largely superseded by LBA.
*   **LBA (Logical Block Addressing):** A linear addressing scheme that assigns a unique number (logical block address) to each sector on the hard disk. This simplifies addressing and overcomes the limitations of CHS addressing. The OS uses LBA, which is then translated by the drive controller into physical locations.
*   **Access Time:** The time it takes to access data on a hard disk. Composed of:
    *   **Seek Time:**  The time it takes for the actuator arm to move the read/write heads to the correct track (cylinder).  This is the dominant factor in access time.
    *   **Rotational Latency (Rotational Delay):** The time it takes for the desired sector to rotate under the read/write head.  Average rotational latency is typically calculated as (60 seconds / RPM) / 2.
    *   **Transfer Time:** The time it takes to transfer the data from the disk to the host system.  This depends on the rotation speed and the density of data on the tracks.
    *   `Access Time = Seek Time + Rotational Latency + Transfer Time`

**Example:** A hard disk with a seek time of 5ms and a rotational speed of 7200 RPM:

*   Average Rotational Latency = (60 seconds / 7200 RPM) / 2 = 0.004167 seconds = 4.17 ms
*   Access Time (without transfer time) = 5ms + 4.17ms = 9.17ms

**3. Disk Scheduling Algorithms:**

*   **Goal:**  To minimize the average seek time and improve disk throughput by optimizing the order in which disk I/O requests are serviced.

*   **Common Algorithms:**

    *   **FCFS (First-Come, First-Served):**  Processes requests in the order they arrive. Simple to implement, but can result in long seek times if requests are scattered across the disk.
        *   **Example:**  Requests arrive in the order: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at position 53.
            *   Head movement: 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67
            *   Total head movement: (98-53) + (183-98) + (183-37) + (122-37) + (122-14) + (124-14) + (124-65) + (67-65) = 640 cylinders
    *   **SSTF (Shortest Seek Time First):**  Selects the request that requires the shortest seek time from the current head position.  Can improve throughput compared to FCFS, but can lead to starvation for requests far from the current head position.
        *   **Example:** Requests arrive in the order: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at position 53.
            *   Head movement: 53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 183
            *   Total head movement: (65-53) + (67-65) + (67-37) + (37-14) + (98-14) + (122-98) + (124-122) + (183-124) = 236 cylinders
    *   **SCAN (Elevator Algorithm):**  The head moves in one direction (e.g., from the innermost track to the outermost track), servicing requests along the way.  When it reaches the end, it reverses direction and continues servicing requests.  Provides more uniform service than SSTF.
        *   **Example:** Requests arrive in the order: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at position 53 and moves towards the highest cylinder number. Assume the disk has cylinders 0-199.
            *   Head movement: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 199 -> 14 -> 37
            *   Total head movement: (65-53) + (67-65) + (98-67) + (122-98) + (124-122) + (183-124) + (199-183) + (199-14) + (37-14) = 322 cylinders
    *   **C-SCAN (Circular SCAN):**  Similar to SCAN, but when the head reaches the end of the disk, it immediately returns to the beginning without servicing any requests on the return trip.  Provides more uniform service than SCAN.
         *   **Example:** Requests arrive in the order: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at position 53 and moves towards the highest cylinder number. Assume the disk has cylinders 0-199.
            *   Head movement: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 199 -> 0 -> 14 -> 37
            *   Total head movement: (65-53) + (67-65) + (98-67) + (122-98) + (124-122) + (183-124) + (199-183) + (199-0) + (14-0) + (37-14) = 560 cylinders
    *   **LOOK:**  Similar to SCAN, but the head reverses direction only when there are no more requests in the current direction of travel.  Avoids unnecessary head movement to the end of the disk.
    *   **C-LOOK:** Similar to C-SCAN, but the head returns to the closest request at the beginning of the disk without traveling all the way to cylinder 0.

*   **Considerations when choosing an algorithm:**
    *   **Starvation:** Some algorithms (like SSTF) can lead to starvation.
    *   **Throughput:** The rate at which I/O requests are completed.
    *   **Fairness:** How equally the algorithm treats all requests.
    *   **Overhead:** The computational cost of the algorithm itself.

**4. Disk Management:**

*   **Formatting:**  The process of preparing a hard disk for use by creating tracks and sectors, writing control structures, and setting up the file system.
    *   **Low-Level Formatting:**  Physical formatting that creates the physical sectors and tracks.  Typically done by the manufacturer.  Often not accessible to the average user.
    *   **High-Level Formatting:**  Logical formatting that creates the file system structure (e.g., FAT32, NTFS, ext4).  This makes the disk usable by the operating system.

*   **Partitioning:**  Dividing a hard disk into multiple logical sections, each of which can be treated as a separate drive.
    *   **Purpose:**  To allow multiple operating systems to be installed on the same disk, to separate system files from user data, or to improve organization.
    *   **MBR (Master Boot Record):**  An older partitioning scheme that allows for up to four primary partitions.
    *   **GPT (GUID Partition Table):**  A newer partitioning scheme that allows for a larger number of partitions and supports larger disk sizes.

*   **RAID (Redundant Array of Independent Disks):**  A technique for combining multiple physical hard disks into a single logical unit to improve performance, reliability, or both.
    *   **RAID 0 (Striping):**  Data is striped across multiple disks, increasing performance.  No redundancy; if one disk fails, all data is lost.
    *   **RAID 1 (Mirroring):**  Data is mirrored on two disks, providing redundancy.  If one disk fails, the system can continue to operate using the other disk.
    *   **RAID 5 (Striping with Parity):**  Data is striped across multiple disks, with parity information stored on one of the disks.  Allows for one disk to fail without losing data.  Requires at least three disks.
    *   **RAID 10 (RAID 1+0):**  A combination of RAID 1 and RAID 0.  Data is mirrored and then striped, providing both redundancy and performance. Requires a minimum of 4 disks.

**5. Hard Disk Interfaces:**

*   **IDE (Integrated Drive Electronics) / ATA (Advanced Technology Attachment):** An older parallel interface.  Relatively slow compared to newer interfaces.  Limited to a maximum of two devices per channel.
*   **SATA (Serial ATA):**  A serial interface that offers higher data transfer rates than IDE.  Supports hot-swapping (the ability to connect and disconnect devices while the system is running). The most common interface currently.
*   **SAS (Serial Attached SCSI):**  A serial interface designed for enterprise applications.  Offers higher performance and reliability than SATA.  Supports more advanced features like command queuing.
*   **NVMe (Non-Volatile Memory Express):**  A high-performance interface designed for SSDs. Uses the PCIe bus to provide significantly faster data transfer rates than SATA or SAS. While primarily for SSDs, NVMe can theoretically be used with HDDs, though the benefits would be limited by the mechanical constraints of the HDD.

**6. Disk Caching:**

*   **Concept:** Using a small amount of fast memory (cache) on the disk controller or in the operating system to store frequently accessed data.
*   **Purpose:** To reduce the average access time to data on the disk.
*   **Mechanism:** When data is read from the disk, it is stored in the cache.  If the same data is requested again, it can be retrieved from the cache much faster than from the disk.
*   **Types:**
    *   **Disk Controller Cache:** Cache memory embedded in the hard disk controller.
    *   **Operating System Cache:** Using a portion of system RAM as a disk cache.  Implemented by the operating system.  This is more accurately called a *page cache*.
*   **Write Caching:** Data to be written to the disk is temporarily stored in the cache.  This can improve write performance, but it also introduces the risk of data loss if the system crashes before the data is written to the disk (this is often mitigated by using battery-backed caches on enterprise drives).
*   **Read Caching:** Read data stored in cache for future use.

**7. HDD vs. SSD:**

| Feature           | HDD (Hard Disk Drive)              | SSD (Solid State Drive)                |
|-------------------|--------------------------------------|----------------------------------------|
| Storage Medium    | Rotating magnetic platters           | NAND flash memory                      |
| Access Time       | Slower (mechanical movement)        | Faster (no moving parts)               |
| Data Transfer Rate| Lower                                | Higher                                 |
| Durability        | Less durable (moving parts)           | More durable (no moving parts)          |
| Noise             | Noisy (spinning and clicking)        | Silent                                 |
| Power Consumption | Higher                               | Lower                                  |
| Cost              | Lower cost per gigabyte              | Higher cost per gigabyte                |
| Fragmentation     | Susceptible to fragmentation        | Less susceptible to fragmentation       |
| Form Factor       | Typically 3.5" or 2.5"              | Various (2.5", M.2, PCIe add-in cards) |

**Important Points to Remember:**

*   HDDs are mechanical devices and thus have inherent limitations in terms of access time and durability.
*   Disk scheduling algorithms can significantly improve disk performance by optimizing the order in which requests are serviced.
*   RAID provides various options for improving performance and reliability.
*   SSDs offer significant performance advantages over HDDs but are generally more expensive.
*   Disk caching is a technique for improving disk performance by storing frequently accessed data in fast memory.

**Practice Questions/Exercises:**

1.  **Calculate the average rotational latency for a hard disk spinning at 15000 RPM.**

    *   *Answer:* (60 seconds / 15000 RPM) / 2 = 0.002 seconds = 2ms

2.  **Explain the difference between CHS and LBA addressing.**

    *   *Answer:* CHS addressing specifies the physical location of data on the disk using cylinder, head, and sector numbers. LBA addressing uses a linear sequence of block addresses, making addressing simpler and overcoming the size limitations of CHS.

3.  **Describe how RAID 5 works and its advantages.**

    *   *Answer:* RAID 5 stripes data across multiple disks and includes parity information. If one disk fails, the data can be reconstructed using the parity information on the remaining disks. It offers a good balance between performance, redundancy, and storage efficiency.

4.  **Why is seek time typically the dominant factor in HDD access time?**

    *   *Answer:* Because it involves the physical movement of the actuator arm across the platters, which is slower than the rotational latency and transfer time.

5.  **Given the following disk requests (cylinder numbers): 23, 89, 132, 42, 187. The disk head is currently at cylinder 100. Using the SSTF algorithm, what order would these requests be serviced in, and what is the total head movement?**

    *   *Answer:*
        *   Order: 89 -> 132 -> 42 -> 23 -> 187
        *   Total Head Movement: (100-89) + (132-89) + (132-42) + (42-23) + (187-23) = 11 + 43 + 90 + 19 + 164 = 327 cylinders

6.  **What is the main advantage of SSDs over HDDs?  What are their main disadvantages?**

    *   *Answer:*  Main advantage: much faster access times due to the absence of moving parts. Main disadvantages: higher cost per gigabyte and, traditionally, lower write endurance (though this is less of a concern with modern SSDs).

7.  **Explain the concept of disk fragmentation and why it can reduce performance in HDDs.**

    *   *Answer:* Disk fragmentation occurs when a file is stored in non-contiguous blocks across the hard disk.  This requires the disk head to move to multiple locations to read the entire file, increasing access time. This happens because when files are written and deleted over time, the contiguous free space on the disk gets broken up into smaller chunks.

This provides comprehensive notes on hard disks within the context of operating systems, covering the learning outcomes and providing helpful examples and practice questions. Remember to review other resources and do further research to solidify your understanding. Good luck!
