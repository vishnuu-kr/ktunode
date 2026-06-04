---
title: "Geometry"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd2"
status: "completed"
scrapedAt: "2026-05-20T16:14:33.555Z"
---
## OPERATING SYSTEMS - Module 4: I/O System - Geometry

### Introduction

This section focuses on the geometry aspect related to I/O systems, particularly in the context of secondary storage devices like Hard Disk Drives (HDDs). Understanding the geometry of these devices is crucial for understanding how data is organized and accessed, which directly impacts I/O performance.

### Learning Outcomes:

*   Understand the physical components and geometry of Hard Disk Drives (HDDs).
*   Define key geometric parameters like Tracks, Sectors, Cylinders, Heads, and Platter.
*   Explain how the geometry of an HDD affects its storage capacity and performance.
*   Understand different disk addressing schemes.
*   Calculate storage capacity based on given geometry parameters.

### 1. Physical Components and Geometry of Hard Disk Drives (HDDs)

*   **Platters:** Circular disks made of aluminum alloy or glass. Data is stored on the surface of these platters.  HDDs typically contain multiple platters stacked on top of each other.

*   **Heads:** Read/write heads are used to read data from and write data to the platters. There are usually two heads per platter, one for each surface.

*   **Spindle:** The spindle is the central rotating shaft around which the platters spin. The speed of the spindle (measured in RPM – Revolutions Per Minute) is a key factor in disk performance.

*   **Actuator Arm:** The actuator arm moves the read/write heads across the surface of the platters. It contains multiple arms, each holding a head.

*   **Cylinders:**  The set of all tracks that are at the same radial distance from the center of the platters. Imagine a vertical cylinder cutting through all platters at a specific radius.

*   **Tracks:**  A concentric ring on the surface of a platter where data is stored.

*   **Sectors:**  A segment of a track.  Sectors are the smallest unit of data that can be read or written to a disk. Historically, sectors were typically 512 bytes, but now Advanced Format Drives (AFDs) use 4096-byte (4KiB) sectors.

*   **Gap:**  Gaps are small, unused areas between sectors.  They serve to separate sectors, allowing the read/write head time to switch between reading and writing.

### 2. Key Geometric Parameters: Tracks, Sectors, Cylinders, Heads, and Platter

*   **Tracks:**  Concentric circles on the platter's surface. The number of tracks determines how densely data can be packed.  More tracks mean more data can be stored.

*   **Sectors:**  Divisions of a track into smaller, arc-shaped segments.  Sectors are the basic unit of storage.  The number of sectors per track can vary across the disk (more sectors on the outer tracks).

*   **Cylinders:**  A collection of tracks at the same radial distance across all platters. Accessing data within the same cylinder is generally faster because the read/write head doesn't need to move significantly.

*   **Heads:** The number of read/write heads per platter surface.  More heads allow for simultaneous access to data on multiple surfaces.

*   **Platter:** The physical disk where data is stored.  More platters generally mean higher storage capacity.

**Diagram:**

```
        ______
       /      \
      | Platter |
       \______/
         / \
        /   \
       /_____\
      | Track  |
       \_____/
         / \
        /   \
       /_____\
      | Sector |
       \_____/

  Actuator Arm ->  /\
                /  \
               /____\
              |  Head |
               \____/
```

### 3. How Geometry Affects Storage Capacity and Performance

*   **Storage Capacity:**
    *   Capacity = (Number of Platters) * (Number of Heads per Platter) * (Number of Tracks per Head) * (Number of Sectors per Track) * (Bytes per Sector)
    *   Increasing any of these parameters increases the overall storage capacity.

*   **Performance:**
    *   **Seek Time:** The time it takes for the actuator arm to move the read/write head to the correct track (cylinder).  Shorter seek times improve performance.  Data locality (placing related data in the same cylinder) minimizes seek time.
    *   **Rotational Latency:** The time it takes for the desired sector to rotate under the read/write head.  Faster spindle speeds (RPM) reduce rotational latency.
    *   **Transfer Rate:** The rate at which data is transferred between the disk and the computer. Higher transfer rates improve performance.  Transfer rate is related to the linear density of data on the track and the rotation speed.
    *   **Geometry Optimization:**  Modern operating systems and disk controllers employ techniques to optimize I/O operations based on disk geometry.  For example, they might reorder I/O requests to minimize head movement.

**Example:**

A disk has 2 platters, 2 heads per platter, 1000 tracks per head, 500 sectors per track, and 512 bytes per sector.

Total Capacity = 2 * 2 * 1000 * 500 * 512 bytes = 1,024,000,000 bytes = 1.024 GB

### 4. Disk Addressing Schemes

*   **CHS (Cylinder-Head-Sector):**  An older addressing scheme that directly specified the physical location of a sector using its cylinder, head, and sector numbers. Limited by BIOS limitations and small address spaces.  Become obsolete with larger disk sizes.

*   **LBA (Logical Block Addressing):**  A more modern and widely used addressing scheme.  It assigns a unique sequential number (Logical Block Address or LBA) to each sector on the disk. The operating system and disk controller translate the LBA into the physical CHS address.  Overcomes the limitations of CHS and allows for larger drive sizes.

    *   LBA simplifies disk management and provides a consistent addressing scheme regardless of the physical geometry of the disk.

### 5. Calculating Storage Capacity

As seen in section 3, the total storage capacity can be calculated using:

Capacity = (Number of Platters) * (Number of Heads per Platter) * (Number of Tracks per Head) * (Number of Sectors per Track) * (Bytes per Sector)

**Example 1:**

A disk has 4 platters, 2 heads per platter surface, 2048 tracks per surface, 256 sectors per track, and 512 bytes per sector. Calculate the disk capacity in GB.

Capacity = 4 * 2 * 2048 * 256 * 512 = 2,147,483,648 bytes

Capacity = 2,147,483,648 / (1024 * 1024 * 1024) = 2 GB

**Example 2:**

A disk has a capacity of 500GB. It has 2 platters, each with two surfaces, each surface with 16383 tracks. Each track has 63 sectors, and each sector has 512 bytes.

Let's verify the capacity:
2 * 2 * 16383 * 63 * 512 = 2,113,929,216 bytes = approximately 2GB.  Something is wrong.  This highlights that in practice HDDs do not achieve the theoretical capacity because of overhead, formatting, and spare sectors.  Modern drives also use Advanced Format (4096-byte sectors)

**Important Note:** The capacity calculated using the formula is often a *theoretical* maximum.  The actual usable capacity is typically lower due to factors such as formatting overhead, system files, and bad sector mapping.

### 6. Practice Questions and Exercises

**Question 1:** Define the following terms:

*   Track
*   Sector
*   Cylinder
*   Head
*   Platter

**Answer:** Refer to Section 2.

**Question 2:**  A hard drive has the following specifications: 3 platters, 2 heads per platter, 10,000 tracks per head, 1,000 sectors per track, and 512 bytes per sector. Calculate the total capacity in GB.

**Answer:**

Capacity = 3 * 2 * 10,000 * 1,000 * 512 bytes = 30,720,000,000 bytes

Capacity = 30,720,000,000 / (1024 * 1024 * 1024) = approximately 28.6 GB

**Question 3:**  Explain the difference between CHS and LBA addressing schemes.

**Answer:** Refer to Section 4.

**Question 4:** How does disk geometry influence the I/O performance of an operating system?

**Answer:** Refer to Section 3, highlighting the impact on seek time, rotational latency, and transfer rate.

**Question 5:**  A hard drive manufacturer advertises a 1TB hard drive. After connecting it to your computer, the operating system reports a capacity of approximately 931 GB. Explain why there is a discrepancy.

**Answer:** The discrepancy arises due to several factors:

*   **Base-2 vs. Base-10:** Hard drive manufacturers typically use the decimal definition of a gigabyte (GB), where 1 GB = 1,000,000,000 bytes.  Operating systems, however, often use the binary definition, where 1 GB = 1,073,741,824 bytes (2^30 bytes).  The lower number of bytes per GB when advertised makes the drive seem bigger than it is when used in a system using binary calculation.

*   **Formatting Overhead:** When a hard drive is formatted, a portion of the space is reserved for file system structures, metadata, and other overhead. This space is not available for storing user data.

*   **Bad Sector Mapping:**  Hard drives often have some sectors that are identified as faulty during manufacturing or usage. These bad sectors are mapped out and replaced with spare sectors, reducing the overall usable capacity.

*   **Partitioning:** The partitioning scheme chosen can also impact the available space.

**Question 6:** What are the benefits of using a modern LBA addressing scheme compared to the older CHS scheme?

**Answer:**

*   **Larger Drive Support:** LBA can address much larger drives than CHS.  CHS had limits imposed by the BIOS that made it difficult to address drives larger than 8.4GB.
*   **Abstraction:** LBA provides a logical view of the disk, hiding the physical geometry from the operating system. This allows the drive to be treated as a linear array of blocks, simplifying disk management.
*   **Improved Compatibility:**  LBA is more compatible with different hardware platforms and operating systems.

### 7. Important Points to Remember

*   Understand the relationship between tracks, sectors, cylinders, heads, and platters.
*   Know how to calculate disk capacity from these parameters.
*   Understand the impact of disk geometry on I/O performance (seek time, rotational latency, transfer rate).
*   Be familiar with CHS and LBA addressing schemes and their differences.
*   Realize that advertised drive capacity is a *theoretical* maximum and the usable capacity is typically lower.
*   Modern drives commonly use Advanced Format (4096-byte) sectors, which impact performance and calculation.
