---
title: "Live VM migration steps, migration of memory, files and network resources."
subject: "ADVANCED COMPUTING SYSTEMS"
module: "Module 3: Virtualization:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bab8"
status: "completed"
scrapedAt: "2026-05-20T16:49:58.047Z"
---
# ADVANCED COMPUTING SYSTEMS - Module 3: Virtualization - Live VM Migration

## Topic: Live VM Migration Steps, Migration of Memory, Files and Network Resources

**Learning Outcomes:**

*   Understand the concept and benefits of live virtual machine (VM) migration.
*   Identify and explain the steps involved in live VM migration.
*   Describe the techniques used for migrating memory during live migration.
*   Explain how file systems and storage are handled during live VM migration.
*   Outline the strategies for migrating network resources during live VM migration.
*   Recognize the challenges and considerations involved in live VM migration.

### 1. Introduction to Live VM Migration

*   **Definition:** Live VM migration (also known as live migration or VMotion) is the process of transferring a running virtual machine from one physical host to another without any significant downtime or interruption of service.

*   **Benefits:**
    *   **Resource Optimization:** Allows workloads to be moved to hosts with more available resources (CPU, memory, storage).
    *   **High Availability:** Enables moving VMs away from failing or overloaded hosts to ensure continued operation.
    *   **Maintenance:** Facilitates performing hardware or software maintenance on a physical host without interrupting VM services.
    *   **Load Balancing:** Distributes VMs across hosts to balance workloads and prevent bottlenecks.
    *   **Disaster Recovery:** Provides a mechanism for relocating VMs to a recovery site in case of a disaster.
    *   **Energy Efficiency:**  Consolidate workloads onto fewer hosts and power down idle servers, reducing energy consumption.

*   **Key Concepts:**
    *   **Source Host:** The physical host from which the VM is being migrated.
    *   **Destination Host:** The physical host to which the VM is being migrated.
    *   **Downtime:** The brief period of interruption when the VM's execution is switched from the source to the destination host. Ideally, live migration minimizes this to nearly zero.

### 2. Live VM Migration Steps (Detailed)

The live migration process typically involves the following steps:

1.  **Pre-Copy Iteration (Memory Pre-Transfer):**
    *   **Initiation:** The migration process begins by initiating a connection between the source and destination hosts.  Authentication and authorization take place.
    *   **Memory Mapping:** The source host identifies and maps the VM's memory pages.
    *   **Iterative Copy:**  The source host begins transferring the VM's memory to the destination host while the VM is still running on the source.  This is done iteratively.
    *   **Dirty Page Tracking:**  During the memory transfer, the source host monitors which memory pages are being modified ("dirtied") by the VM. These dirty pages are tracked for subsequent re-transmission.
    *   **Minimizing Downtime:** The goal is to transfer as much of the memory as possible during this phase, leaving only a small amount of dirty pages to be transferred during the final switchover.

2.  **Stop-and-Copy (Switchover):**
    *   **Quiescing the VM:** The VM on the source host is briefly paused. This is necessary to ensure data consistency.
    *   **Final Memory Transfer:** The remaining dirty memory pages are transferred to the destination host. This is the phase that introduces the (minimal) downtime.
    *   **State Transfer:** The VM's current CPU state (registers, program counter, etc.) and device states are transferred to the destination host.  This includes information about the virtual CPU, network cards, and storage controllers.

3.  **Activation on Destination Host:**
    *   **VM Resumption:** The VM is resumed on the destination host, using the transferred memory, CPU state, and device states.
    *   **Address Resolution Protocol (ARP) Update:**  The destination host sends out ARP updates to the network to inform switches and routers that the VM's MAC address is now associated with the destination host's IP address. This ensures that network traffic is correctly routed to the VM.
    *   **Cleanup:** The source host releases the VM's resources after confirming successful operation on the destination host.  This often involves destroying the VM instance on the source host.

4.  **Post-Migration Management:**
    *   **Verification:** Monitoring tools can be used to verify the VM's performance and stability on the destination host.
    *   **Resource Reallocation:**  The resources that were previously allocated to the VM on the source host can be released and reallocated to other VMs or tasks.

**Example:**

Imagine a web server VM running on Host A.  Due to scheduled maintenance on Host A, you need to migrate it to Host B.  The live migration process would:

1.  Copy most of the web server's memory from Host A to Host B while the web server is still actively serving requests on Host A.
2.  Briefly pause the web server on Host A.
3.  Transfer the remaining, recently changed memory pages and CPU state to Host B.
4.  Resume the web server on Host B.
5.  Update the network to direct traffic to Host B for the web server.

This entire process should happen quickly enough that users experience minimal or no interruption.

### 3. Migration of Memory

*   **Pre-copy Migration:**  The dominant technique.  As described above, it involves iterative copying of memory pages while the VM is running on the source.
*   **Post-copy Migration:** Less common. Transfers the bare minimum memory needed to start the VM on the destination. Memory is only transferred when the VM attempts to access it on the destination, leading to page faults that trigger memory transfer.  Can lead to performance issues if not carefully managed.
*   **Dirty Page Handling:** Crucial for minimizing downtime. Effective dirty page tracking and iterative re-transmission are essential.
*   **Memory Compression:** Compressing memory pages before transmission can reduce the amount of data transferred, speeding up the process.
*   **Memory Deduplication:** Identifying and eliminating duplicate memory pages can further reduce the amount of data transferred.

### 4. Migration of Files and Storage

*   **Shared Storage:** The simplest approach.  If the VM's disk image is stored on shared storage (e.g., a SAN or NAS), both the source and destination hosts can access it.  During migration, the VM is simply pointed to the same disk image from the destination host.  Requires a reliable and high-performance shared storage infrastructure.
*   **Storage Migration (Data Copy):** If shared storage is not available, the VM's disk image must be copied from the source to the destination host. This can be done concurrently with memory migration.
    *   **Block-level Replication:** Replicating disk blocks can be more efficient than file-level copying, especially for large disk images with many small files.
    *   **Incremental Replication:**  Copying only the changes made to the disk image since the last replication can significantly reduce the transfer time.
*   **Network File System (NFS):** The VM's disk image can be accessed via NFS. The destination host mounts the NFS share during migration.  Performance can be a concern depending on network bandwidth and latency.
*   **Storage vMotion (VMware):** VMware's solution that allows migrating a VM's storage concurrently with live migration, even to different storage types.

### 5. Migration of Network Resources

*   **Virtual Network Interface Cards (vNICs):** VMs use vNICs to connect to the network.
*   **MAC Address Preservation:** The VM's MAC address must remain the same after migration. This is essential for network connectivity and preventing routing issues.
*   **ARP Updates:**  As mentioned earlier, the destination host sends ARP updates to the network to inform switches and routers that the VM's MAC address is now associated with the destination host's IP address.
*   **Virtual Switches:** Virtual switches within the hypervisor connect VMs to the physical network. They must be configured to support VM migration.
*   **VLAN Configuration:** VLANs (Virtual LANs) are used to segment the network.  The VLAN configuration must be consistent between the source and destination hosts.
*   **Distributed Virtual Switches (e.g., VMware vDS):** Provide centralized management and configuration of virtual switches across multiple hosts, simplifying network migration.

### 6. Challenges and Considerations

*   **Network Bandwidth:** Sufficient network bandwidth is crucial for transferring memory and disk images quickly.
*   **Network Latency:** High network latency can significantly slow down the migration process.
*   **CPU Overhead:** Tracking dirty pages and compressing memory can introduce CPU overhead on the source host.
*   **Memory Contention:** Memory contention on the source host can impact the performance of the VM being migrated.
*   **Disk I/O:** Disk I/O on the source host can slow down the disk image migration process.
*   **Security:** Secure communication channels must be used between the source and destination hosts to protect the VM's data.  Encryption should be used.
*   **Compatibility:** The source and destination hosts must be compatible in terms of CPU architecture, operating system, and hypervisor version.
*   **Downtime Minimization:**  Achieving near-zero downtime requires careful optimization of all aspects of the migration process.
*   **Shared Resources:** Handling shared resources (e.g., databases, external services) accessed by the VM requires careful coordination to avoid conflicts.  Consider using distributed locking mechanisms or transaction management.
*   **Monitoring and Logging:** Comprehensive monitoring and logging are essential for tracking the progress of migration and troubleshooting any issues.

### Important Points to Remember:

*   Live VM migration is a complex process that involves coordinating memory, storage, and network resources.
*   The goal is to minimize downtime and ensure seamless operation during and after migration.
*   Proper planning and configuration are essential for successful live VM migration.
*   Network bandwidth and latency are critical factors that can impact the performance of live migration.
*   Security considerations are paramount, especially when migrating VMs across different networks or data centers.

### Practice Questions/Exercises:

1.  **Explain the benefits of live VM migration in a cloud computing environment.**
    *   **Answer:**  Resource optimization, high availability, maintenance without downtime, load balancing, disaster recovery, and energy efficiency, enabling dynamic resource allocation and improved infrastructure resilience.

2.  **Describe the steps involved in pre-copy live VM migration.**
    *   **Answer:** Initiation of connection, Memory Mapping, Iterative Memory Copy, Dirty Page Tracking, Stop-and-Copy to transfer remaining dirty pages and the VM state. Activation on destination host and ARP update

3.  **What are the challenges of migrating memory during live VM migration and how can they be addressed?**
    *   **Answer:**  Challenges include network bandwidth limitations, high latency, CPU overhead for dirty page tracking, and memory contention. These can be addressed by using efficient network protocols, memory compression and deduplication, and careful resource management.

4.  **Compare and contrast shared storage and storage migration approaches for handling disk images during live VM migration.**
    *   **Answer:** Shared storage is simpler and faster if available as the VM just points to the existing storage on the destination. Storage Migration copies the data, which takes longer and needs to be planned for.

5.  **Why is it important to preserve the MAC address of a VM during live migration?**
    *   **Answer:** To ensure network connectivity and prevent routing issues, as network devices rely on MAC addresses for forwarding traffic. Preserving the MAC address avoids the need to update network configurations and minimizes disruption.

6.  **What security considerations should be taken into account when migrating VMs across different networks or data centers?**
    *   **Answer:** Secure communication channels (e.g., encrypted VPNs) must be used to protect the VM's data during transit.  Authentication and authorization mechanisms should be in place to prevent unauthorized access. Regular security audits and penetration testing should be performed.

7.  **You have a VM that needs to be migrated, but you have limited network bandwidth. What strategies can you use to mitigate the impact on the migration process?**
    *   **Answer:** Employ memory compression and deduplication techniques to reduce the amount of data transferred.  Consider using incremental replication for disk images.  Schedule the migration during off-peak hours to minimize network congestion. Prioritize the migration traffic using QoS (Quality of Service) settings.

8.  **Research and compare the live migration implementations of two different hypervisors (e.g., VMware vMotion and KVM live migration).  What are the key differences and similarities?**
    *   **Answer:**  (Requires independent research).  Focus on differences in the specific algorithms used for memory and storage migration, the level of automation, integration with management tools, and any unique features.  Similarities will likely include the general steps of pre-copy, stop-and-copy, and ARP updates.

This comprehensive outline provides a solid foundation for understanding live VM migration. Remember to supplement this material with further reading and practical exercises for a deeper understanding.
