---
title: "Storage Arrays- Architectural Principles"
subject: "STORAGE SYSTEMS"
module: "Module 1: Storage technologies:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8caa0"
status: "completed"
scrapedAt: "2026-05-20T17:27:17.037Z"
---
# STORAGE SYSTEMS: Module 1: Storage Technologies

## Topic: Storage Arrays - Architectural Principles

This module introduces the fundamental architectural principles behind storage arrays, the building blocks of modern data storage infrastructure. We will explore the key components, design considerations, and common architectural models that dictate how data is stored, accessed, and managed.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1:** Explain the core components of a storage array and their respective functions.
*   **LO2:** Describe the different tiers of storage within a storage array and their characteristics.
*   **LO3:** Understand the concept of RAID (Redundant Array of Independent Disks) and its various levels, including their benefits and drawbacks.
*   **LO4:** Discuss the importance of caching and its role in improving storage array performance.
*   **LO5:** Explain the concept of storage virtualization and its advantages in a storage array environment.
*   **LO6:** Differentiate between NAS and SAN storage architectures and their use cases.
*   **LO7:** Identify the key considerations when designing or selecting a storage array.

---

### 1. Core Components of a Storage Array

A storage array is a specialized hardware device designed for storing and managing large volumes of data. It typically consists of several interconnected components working in harmony.

#### 1.1. Storage Media (Disks)

*   **Definition:** The physical devices where data is actually stored.
*   **Types:**
    *   **HDDs (Hard Disk Drives):** Mechanical drives with spinning platters and read/write heads. Offer high capacity at a lower cost, but are slower and more prone to mechanical failure.
        *   *Example:* 7200 RPM SATA drives for capacity-focused tiers.
    *   **SSDs (Solid State Drives):** Use flash memory chips, offering significantly faster read/write speeds, lower latency, and higher durability. More expensive per gigabyte.
        *   *Example:* NVMe SSDs for high-performance application tiers.
    *   **Hybrid Drives:** Combine SSD and HDD technologies to offer a balance of speed and capacity.
*   **Key Metrics:**
    *   **Capacity:** Measured in Gigabytes (GB) or Terabytes (TB).
    *   **Performance:** Measured by IOPS (Input/Output Operations Per Second) and Throughput (MB/s or GB/s).
    *   **Latency:** The delay between requesting data and receiving it.
    *   **Reliability:** Measured by MTBF (Mean Time Between Failures).

#### 1.2. Controllers (Storage Processors)

*   **Definition:** The "brains" of the storage array. These are often redundant servers or dedicated processors responsible for managing data access, RAID operations, caching, and communication with servers.
*   **Functions:**
    *   **I/O Processing:** Handle read and write requests from servers.
    *   **RAID Management:** Implement RAID algorithms for data redundancy and performance.
    *   **Caching:** Manage volatile (DRAM) and non-volatile (NVRAM) caches.
    *   **Data Services:** Implement features like snapshots, replication, and thin provisioning.
    *   **Connectivity:** Manage connections to hosts (servers) and internal disks.
*   **Redundancy:** Controllers are typically deployed in pairs for high availability. If one controller fails, the other takes over seamlessly.
    *   *Example:* Active/Passive or Active/Active controller configurations.

#### 1.3. Cache Memory

*   **Definition:** High-speed memory used to temporarily store frequently accessed data.
*   **Types:**
    *   **Read Cache (Cache Hit):** Stores data that has been read recently. If the same data is requested again, it can be served directly from cache, significantly reducing latency.
    *   **Write Cache (Write Pending):** Stores data that has been written by the server but not yet committed to the disks. This allows the server to respond quickly and the array to perform writes more efficiently in the background.
*   **NVRAM (Non-Volatile RAM):** A critical component of write cache. NVRAM retains data even if power is lost, preventing data loss during power outages. Write data is committed from NVRAM to persistent storage (SSDs or HDDs) once power is restored.
    *   *Example:* A controller might have 8GB of DRAM for read/write caching and 4GB of NVRAM for write cache protection.

#### 1.4. Host Connectivity (I/O Ports)

*   **Definition:** The interfaces that connect the storage array to servers (hosts).
*   **Protocols:**
    *   **Fibre Channel (FC):** A high-speed, low-latency network protocol commonly used in SAN environments. Typically uses optical cables.
    *   **iSCSI (Internet Small Computer System Interface):** Runs IP-based storage protocols over Ethernet networks. More cost-effective for many deployments.
    *   **SAS (Serial Attached SCSI):** Connects internal components or directly to servers in some configurations.
    *   **NVMe/FC or NVMe/TCP:** Newer protocols leveraging NVMe flash storage for even higher performance.
*   **Ports:** Storage arrays will have multiple ports to allow for high availability and increased bandwidth.
    *   *Example:* An array might have 8 x 16Gb Fibre Channel ports and 4 x 10Gbps iSCSI ports.

#### 1.5. Enclosures (Disk Shelves)

*   **Definition:** The physical chassis that houses the disk drives, power supplies, cooling systems, and back-end interconnects.
*   **Scalability:** Arrays are often designed to be scalable by adding more enclosures to increase storage capacity.
*   **Interconnects:** These enclosures connect to the controllers via high-speed internal buses.

---

### 2. Tiers of Storage

To optimize performance and cost, storage arrays often implement a tiered storage strategy. Data is placed on different types of storage media based on its access frequency and performance requirements.

#### 2.1. Tier 0 (Extreme Performance)

*   **Characteristics:** Highest performance, lowest latency, highest cost per GB.
*   **Media:** Typically NVMe SSDs, specialized memory-based storage.
*   **Use Cases:** Mission-critical applications, high-frequency trading, real-time analytics, demanding databases.
*   *Example:* Storing the most frequently accessed, time-sensitive transaction data for an e-commerce platform.

#### 2.2. Tier 1 (Performance)

*   **Characteristics:** High performance, low latency, moderate cost per GB.
*   **Media:** SATA SSDs, enterprise SAS SSDs.
*   **Use Cases:** General-purpose databases, virtual machine storage, critical application data.
*   *Example:* Storing the operating system and application data for a busy web server.

#### 2.3. Tier 2 (Capacity/Performance Balance)

*   **Characteristics:** Good balance of capacity, performance, and cost.
*   **Media:** SAS HDDs (10K/15K RPM), sometimes hybrid drives.
*   **Use Cases:** File servers, less frequently accessed databases, virtual desktops.
*   *Example:* Storing user home directories or shared project files.

#### 2.4. Tier 3 (Capacity/Archival)

*   **Characteristics:** Highest capacity, lowest cost per GB, lowest performance.
*   **Media:** SATA HDDs (7200 RPM), Nearline SAS HDDs.
*   **Use Cases:** Archival data, backup storage, large media files, compliance data.
*   *Example:* Storing historical customer records or video surveillance footage.

#### 2.5. Automated Tiering

*   **Definition:** Software intelligence within the storage array that automatically moves data blocks between tiers based on their access patterns and policies.
*   **Benefits:** Optimizes performance and cost without manual intervention.
    *   *Example:* A block of data accessed very frequently might be promoted from Tier 2 to Tier 1, and then to Tier 0 if its access intensity increases. Conversely, infrequently accessed data might be demoted.

---

### 3. RAID (Redundant Array of Independent Disks)

RAID is a fundamental technology for providing data redundancy and improving performance by combining multiple physical disks into a single logical unit.

#### 3.1. Concepts

*   **Redundancy:** The ability to withstand the failure of one or more disks without losing data.
*   **Striping:** Data is divided into blocks and written across multiple disks simultaneously, improving read/write performance.
*   **Parity:** Calculated data that can be used to reconstruct data from failed disks.

#### 3.2. Common RAID Levels

| RAID Level | Description                                                                                                                                                                                                                | Performance (Read/Write) | Redundancy         | Disk Overhead | Use Case Examples                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :----------------- | :------------ | :----------------------------------------------------------------------------- |
| **RAID 0** | **Striping without Parity:** Data is striped across all disks. Offers the highest performance but no redundancy. A single disk failure results in complete data loss.                                                        | Excellent                | None               | 0%            | Video editing scratch disks, temporary data where speed is paramount.          |
| **RAID 1** | **Mirroring:** Data is written identically to two or more disks. Offers excellent read performance and high data availability, but write performance is similar to a single disk. High disk overhead.                      | Good                     | Full Mirror        | 50% - 100%    | Operating system drives, critical application data where availability is key. |
| **RAID 5** | **Striping with Distributed Parity:** Data is striped across disks, with parity information distributed across all disks. Can withstand the failure of one disk. Good balance of performance and capacity.                 | Good                     | Single Disk Failure | ~1/N (N=disks) | General-purpose servers, file servers, application storage.                  |
| **RAID 6** | **Striping with Dual Distributed Parity:** Similar to RAID 5 but uses two independent parity calculations, allowing it to withstand the failure of two disks. Higher overhead than RAID 5.                                      | Good                     | Double Disk Failure | ~2/N (N=disks) | Large capacity arrays, environments where higher availability is required.   |
| **RAID 10** | **Stripe of Mirrors (RAID 1+0):** Combines RAID 1 (mirroring) and RAID 0 (striping). Data is mirrored, and then those mirrors are striped. Offers excellent performance and high availability. Higher disk overhead. | Excellent                | Single Disk Failure | 50%           | High-performance databases, transactional systems, virtual machine clusters.  |

*   **N:** Number of disks.
*   **Note:** RAID 5 and RAID 6 have a "rebuild penalty" where performance degrades significantly during the process of rebuilding data onto a replacement disk. RAID 10 generally has a faster rebuild time.

#### 3.3. Considerations

*   **Number of Disks:** Most RAID levels require a minimum number of disks.
*   **Capacity Efficiency:** RAID 0 is 100% efficient, RAID 1 is 50% efficient, RAID 5 uses one disk for parity, RAID 6 uses two.
*   **Performance Characteristics:** Different RAID levels have different read and write performance profiles.
*   **Rebuild Time:** The time it takes to rebuild data after a disk failure. This is a critical factor for large arrays.

---

### 4. Caching and Its Role in Performance

Caching is a crucial technique used by storage arrays to accelerate data access.

#### 4.1. Read Cache

*   **Mechanism:** Frequently read data blocks are stored in fast memory (DRAM) on the controllers.
*   **Cache Hit:** When a requested block is found in the cache. This results in significantly faster access than reading from the disks.
*   **Cache Miss:** When a requested block is not found in the cache, and it must be retrieved from the slower disk subsystem. The block is then usually placed in the cache for future access.
*   **Benefits:** Reduces latency for read operations, improves overall application responsiveness.

#### 4.2. Write Cache

*   **Mechanism:** Data written by servers is first written to fast memory (DRAM) and then to NVRAM for persistence. Once confirmed in NVRAM, the array can immediately acknowledge the write to the server, making the write operation appear very fast.
*   **NVRAM (Non-Volatile RAM):** Crucial for write cache. It ensures that data written to cache is not lost in case of a power failure. The data is then written from NVRAM to the persistent disks at a later time.
*   **Write Operations:** The array's controllers optimize write operations by grouping writes, performing them in the background, and potentially optimizing their placement on the disks.
*   **Benefits:** Significantly improves write performance by decoupling server write acknowledgments from the slower disk write operations.

#### 4.3. Cache Management

*   **Cache Algorithms:** Sophisticated algorithms are used to decide which data to keep in cache and when to evict older data.
*   **Cache Warming:** The process of proactively loading frequently accessed data into the cache, often during off-peak hours or based on predictive analytics.

---

### 5. Storage Virtualization

Storage virtualization abstracts the complexity of the physical storage hardware, presenting a unified pool of storage resources to servers.

#### 5.1. Definition

*   **Concept:** The process of pooling physical storage from multiple devices into what appears to be a single storage device managed from a central console.
*   **Abstraction:** Hides the underlying complexities of disk drives, RAID levels, and physical connectivity.

#### 5.2. Types of Storage Virtualization

*   **Array-Based Virtualization:** Performed by the storage array controllers themselves. This is the most common form found in modern storage arrays.
    *   *Example:* A storage array might present LUNs (Logical Unit Numbers) to servers, where each LUN is a logical representation of a portion of the array's storage.
*   **Network-Based Virtualization:** Achieved through hardware appliances or software in the network path between servers and storage.
    *   *Example:* Storage virtualization appliances that sit between servers and existing SAN storage.
*   **Host-Based Virtualization:** Implemented through software agents running on the servers themselves.
    *   *Example:* Software RAID or volume managers on a server operating system.

#### 5.3. Benefits of Storage Virtualization

*   **Simplified Management:** Centralized management of storage resources.
*   **Improved Utilization:** Ability to allocate and reallocate storage dynamically, reducing wasted space.
*   **Enhanced Flexibility:** Easier to migrate data, expand storage, and implement advanced data services.
*   **Thin Provisioning:** Allocate logical storage capacity to applications without allocating the physical capacity upfront. Physical capacity is consumed only as data is written.
    *   *Example:* A server is allocated a 1TB LUN, but only 100GB is actually used on disk initially. As the application writes data, more physical space is consumed.
*   **Snapshots and Replication:** Easier to implement and manage for backup and disaster recovery.
*   **Automated Tiering:** Enables the automated movement of data between different storage tiers.

---

### 6. NAS vs. SAN Storage Architectures

These are two primary ways storage is presented to servers, each with different protocols and use cases.

#### 6.1. NAS (Network Attached Storage)

*   **Definition:** A dedicated storage device connected to a network (typically Ethernet) that provides file-level data access to clients.
*   **Protocol:** Primarily uses **NFS (Network File System)** for Unix/Linux and **SMB/CIFS (Server Message Block/Common Internet File System)** for Windows.
*   **Access Method:** File-level access. Servers see NAS devices as network shares or mounted directories.
*   **Architecture:** Acts as a dedicated file server on the network.
*   **Use Cases:**
    *   File sharing among multiple users and applications.
    *   Centralized storage for user home directories.
    *   Content repositories.
    *   Web serving.
*   **Advantages:** Easy to set up and manage, cost-effective for file sharing, uses standard Ethernet infrastructure.
*   **Disadvantages:** Can have higher latency for block-level operations compared to SAN, not ideal for high-performance databases or transactional workloads that require block-level access.

#### 6.2. SAN (Storage Area Network)

*   **Definition:** A dedicated, high-speed network that provides block-level access to storage devices.
*   **Protocol:** Primarily uses **Fibre Channel (FC)** or **iSCSI** over Ethernet.
*   **Access Method:** Block-level access. Servers see SAN storage as locally attached disks (e.g., SCSI disks).
*   **Architecture:** A separate network infrastructure dedicated to storage traffic.
*   **Use Cases:**
    *   High-performance databases.
    *   Virtualization environments (e.g., VMware vSphere, Hyper-V).
    *   Mission-critical applications requiring low latency and high throughput.
    *   Server boot from SAN.
*   **Advantages:** High performance, low latency, supports a wide range of block-level operations, scalable.
*   **Disadvantages:** Can be more complex and expensive to set up and manage, requires specialized networking (FC) or careful network configuration for iSCSI.

#### 6.3. Key Differences Summarized

| Feature       | NAS (Network Attached Storage) | SAN (Storage Area Network)                                  |
| :------------ | :----------------------------- | :---------------------------------------------------------- |
| **Access**    | File-level                     | Block-level                                                 |
| **Protocols** | NFS, SMB/CIFS                  | Fibre Channel (FC), iSCSI                                   |
| **Network**   | Ethernet                       | Dedicated FC or Ethernet (for iSCSI)                        |
| **View to Host** | Network shares/directories     | Local disks (like SCSI)                                     |
| **Use Cases** | File sharing, content storage  | Databases, virtualization, transactional workloads          |
| **Complexity** | Simpler                        | More complex (especially FC)                                |
| **Cost**      | Generally lower                | Generally higher (especially FC)                            |

---

### 7. Key Considerations When Designing or Selecting a Storage Array

Choosing the right storage array involves understanding your specific needs and matching them to the capabilities of available solutions.

#### 7.1. Performance Requirements

*   **IOPS:** What is the required number of read/write operations per second?
*   **Throughput:** What is the required data transfer rate (MB/s or GB/s)?
*   **Latency:** What is the acceptable delay for data access?
*   **Workload Analysis:** Understand the characteristics of your applications (e.g., sequential vs. random I/O, read-heavy vs. write-heavy).

#### 7.2. Capacity Requirements

*   **Current Capacity:** How much storage do you need today?
*   **Growth Projections:** How much will your storage needs grow in the next 1, 3, 5 years?
*   **Data Reduction:** Consider technologies like deduplication and compression to reduce effective capacity requirements.

#### 7.3. Availability and Resilience

*   **Redundancy:** What level of fault tolerance is required? (e.g., single disk failure, dual disk failure, node failure).
*   **High Availability (HA):** How important is uptime? Do you need active/active controllers, redundant power supplies, and network paths?
*   **Disaster Recovery (DR):** Do you need replication capabilities to a secondary site?

#### 7.4. Scalability

*   **Capacity Scalability:** Can you easily add more disks or enclosures as your needs grow?
*   **Performance Scalability:** Can you add more controllers or expand bandwidth to meet increasing performance demands?

#### 7.5. Management and Ease of Use

*   **Management Interface:** Is the GUI intuitive and easy to use?
*   **Automation:** Does it support scripting or APIs for automation?
*   **Monitoring and Alerting:** Does it provide comprehensive monitoring and timely alerts?

#### 7.6. Cost and Budget

*   **Acquisition Cost:** The initial purchase price.
*   **Total Cost of Ownership (TCO):** Includes power consumption, cooling, maintenance, support, and potential upgrades.
*   **Licensing:** Consider costs for advanced features like snapshots, replication, thin provisioning, etc.

#### 7.7. Connectivity and Protocols

*   **Host Connectivity:** What protocols do your servers support (FC, iSCSI, NVMe)?
*   **Network Infrastructure:** Do you have the necessary network infrastructure (e.g., FC switches, 10GbE+ Ethernet switches)?

#### 7.8. Data Services

*   **Snapshots:** Point-in-time copies of data for backup and rollback.
*   **Replication:** Copying data to another location for disaster recovery.
*   **Thin Provisioning:** Efficiently allocating storage capacity.
*   **Deduplication and Compression:** Reducing storage footprint.
*   **Encryption:** Protecting data at rest.

---

### Important Points to Remember:

*   **Controllers are the brain:** They manage data access, RAID, and cache. Redundancy is critical.
*   **Cache is king for performance:** Both read and write cache significantly boost speed. NVRAM is essential for write cache persistence.
*   **Tiered storage optimizes cost and performance:** Match data to the appropriate media based on access frequency.
*   **RAID provides data protection and performance:** Understand the trade-offs of different RAID levels (performance, capacity overhead, redundancy).
*   **Storage virtualization simplifies management and improves utilization.**
*   **NAS is for file-level access over Ethernet; SAN is for block-level access over FC or iSCSI.**
*   **Thoroughly analyze your requirements before selecting a storage array.**

---

### Practice Questions:

1.  **Question:** A storage array controller fails. What mechanism ensures that data access continues uninterrupted?
    **Answer:** Redundant controllers. If one controller fails, the other takes over automatically (failover).

2.  **Question:** You have an application that performs very frequent, small writes. Which component of the storage array is most critical for achieving good write performance for this application?
    **Answer:** Write cache, specifically the NVRAM component of the write cache.

3.  **Question:** Explain the primary difference between RAID 5 and RAID 6 in terms of data protection.
    **Answer:** RAID 5 can tolerate the failure of a single disk. RAID 6 can tolerate the failure of two disks due to its use of dual parity.

4.  **Question:** Your organization needs to store large archives of historical data that are accessed very infrequently. Which tier of storage would be most appropriate, and what type of media would typically be used?
    **Answer:** Tier 3 (Capacity/Archival). Typically uses high-capacity, lower-RPM SATA HDDs.

5.  **Question:** A server needs to access storage as if it were a local disk. Which storage architecture is most suitable for this scenario?
    **Answer:** SAN (Storage Area Network). It provides block-level access, making storage appear as locally attached disks.

6.  **Question:** What is the main advantage of thin provisioning?
    **Answer:** It allows you to allocate logical storage capacity to applications without immediately consuming the physical storage. This improves storage utilization and defers capacity purchases until they are actually needed.

7.  **Question:** Describe a scenario where NAS would be a better choice than SAN, and vice-versa.
    **Answer:**
    *   **NAS is better for:** Sharing common files among many users, like a departmental file server or user home directories.
    *   **SAN is better for:** High-performance transactional databases or virtual machine clusters that require very low latency and high IOPS at the block level.

8.  **Question:** What is the disk overhead percentage for RAID 10?
    **Answer:** 50%. This is because data is mirrored, so you have 2x the capacity of disks required for the actual data.

---
