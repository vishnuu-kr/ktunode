---
title: "NDMP"
subject: "STORAGE SYSTEMS"
module: "Module 3: Business Continuity, Backup and Recovery:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cac1"
status: "completed"
scrapedAt: "2026-05-20T17:27:38.093Z"
---
# Storage Systems: Module 3 - Business Continuity, Backup and Recovery

## Topic: Network Data Management Protocol (NDMP)

---

### 1. Introduction to NDMP

#### Key Concepts & Definitions:

*   **NDMP (Network Data Management Protocol):** A protocol designed to standardize how backup software communicates with Network Attached Storage (NAS) devices. It allows backup operations to be managed directly by the NAS filer, offloading the client machine.
*   **NAS Filer:** A dedicated storage device connected to a network, providing file-based data storage services. Examples include NetApp, EMC Celerra (now Dell EMC Isilon), Sun StorageTek, and HP Network Storage Solutions.
*   **Backup Client:** The software running on a server or workstation that initiates and manages backup operations.
*   **NDMP Agent/Server:** Software embedded within the NAS filer that listens for and responds to NDMP commands from the backup client.
*   **Data Mover:** The component within the NAS filer responsible for reading data from its internal storage and writing it to a backup target (like a tape drive or disk).
*   **Tape Drive:** A storage device that reads and writes data sequentially onto magnetic tape media.
*   **Backup Target:** The destination for the backup data, typically a tape library or disk-based backup appliance.

#### Purpose of NDMP:

*   **Offload Backup Processing:** By allowing the NAS filer to perform the backup directly, the burden on client machines (servers) is significantly reduced. This improves client performance and allows them to focus on their primary applications.
*   **Simplify NAS Backups:** NDMP provides a standardized way to back up NAS file systems, regardless of the underlying NAS vendor, as long as the vendor supports NDMP.
*   **Direct NAS-to-Target Backups:** Enables backups to be sent directly from the NAS filer to a backup target (e.g., a tape drive attached to the NAS or a network-attached backup device) without needing an intermediary backup server.

#### Learning Outcome Covered:

*   **Understand the role and purpose of NDMP in NAS environments.**

---

### 2. NDMP Architecture and Operation

#### Key Concepts & Definitions:

*   **NDMP Protocol Flow:** NDMP operations involve a series of messages exchanged between the backup client and the NAS filer.
*   **Control Connection:** The primary connection used for sending NDMP commands and receiving status updates. Typically uses TCP port 10000.
*   **Data Connection:** The connection used for transferring the actual backup data. This connection is established after the backup client sends a backup command.
*   **NDMP Modes:**
    *   **Local Mode:** The NAS filer backs up its data to a local storage device (e.g., a tape drive directly connected to the filer).
    *   **3-Way Handshake (Remote Mode):** The NAS filer backs up its data to a remote backup target (e.g., a tape drive attached to a backup server, or a disk target on a separate storage system). This involves three participants: the NAS filer, the backup client (or media server), and the backup target.
*   **NDMP Messages:** NDMP uses a specific set of messages for different operations, such as:
    *   `CONNECT`: Establishes an NDMP connection.
    *   `AUTH_USER`: Authenticates the client.
    *   `Two-Way Handshake`: A security mechanism.
    *   `FILE_LIST`: Requests a list of files to be backed up.
    *   `BACKUP`: Initiates a backup operation.
    *   `RESTORE`: Initiates a restore operation.
    *   `DATA_GET_MD5`: Requests a checksum for data verification.
    *   `DATA_READ`: Reads data from a file for backup.
    *   `DATA_WRITE`: Writes data to a file during restore.
    *   `HALT`: Stops an NDMP operation.
    *   `QUIT`: Closes the NDMP connection.

#### NDMP Operation Example (Local Mode Backup):

1.  **Backup Client initiates:** The backup client connects to the NAS filer's NDMP agent (usually on port 10000).
2.  **Authentication:** The backup client authenticates itself with the NAS filer.
3.  **Commanding the Backup:** The backup client sends an NDMP command to the NAS filer to start a backup of a specific file system. The command specifies the target device (e.g., a tape drive attached to the NAS).
4.  **NAS Filer Executes Backup:** The NAS filer's data mover reads the data from its internal file system.
5.  **Data Transfer to Target:** The NAS filer's data mover writes the data directly to the attached tape drive.
6.  **Status Updates:** The NAS filer sends status updates back to the backup client throughout the process.
7.  **Completion:** Once the backup is complete, the NAS filer reports the status.

#### NDMP Operation Example (3-Way Handshake - Remote Mode Backup):

1.  **Backup Client initiates:** The backup client connects to the NAS filer's NDMP agent.
2.  **Authentication:** Authentication occurs.
3.  **Commanding the Backup:** The backup client sends a command to the NAS filer to back up a file system, specifying a remote target (e.g., a tape drive managed by the backup client's media server). The command includes the IP address of the media server.
4.  **NAS Filer Data Transfer:** The NAS filer's data mover reads the data from its internal file system.
5.  **Data Transfer to Media Server:** The NAS filer, via its NDMP agent, establishes a data connection to the media server and streams the data to it.
6.  **Media Server Writes to Target:** The media server receives the data and writes it to its attached backup target (e.g., a tape drive).
7.  **Status Updates:** Both the NAS filer and the media server provide status updates to the backup client.
8.  **Completion:** The operation is marked complete.

#### Learning Outcomes Covered:

*   **Explain the typical architecture of NDMP.**
*   **Describe the NDMP communication process between the backup client, NAS filer, and backup target.**

---

### 3. NDMP Implementations and Benefits

#### Key Concepts & Definitions:

*   **NDMP Versions:** NDMP has evolved over time with different versions supporting various features and improvements. Version 3 is common, with newer versions offering enhanced security and capabilities.
*   **NDMP Connectivity Options:**
    *   **NDMP Authenticated:** Requires authentication, providing a layer of security.
    *   **NDMP Unauthenticated:** Older implementations might not require authentication, which is a security risk.
*   **Vendor Support:** Different NAS vendors implement NDMP with varying levels of support and features. It's crucial to check vendor documentation for compatibility.
*   **Backup Software Support:** Most enterprise-grade backup software solutions support NDMP, allowing them to integrate with NDMP-enabled NAS devices. Examples include Veritas NetBackup, Commvault, IBM Spectrum Protect, and Veeam Backup & Replication (often through integrations).

#### Benefits of NDMP:

*   **Reduced Load on Client Servers:** As mentioned, this is a primary benefit.
*   **Faster Backups:** Direct data transfer from NAS to target can be more efficient than routing data through a client server.
*   **Centralized NAS Backup Management:** Backup software can manage backups for multiple NAS devices from a single console.
*   **Data Integrity:** NDMP often includes mechanisms for data integrity checks (e.g., checksums).
*   **Simplified Infrastructure:** Eliminates the need for separate backup agents installed on each NAS filer, and can reduce the complexity of NAS backup configurations.

#### Considerations and Potential Challenges:

*   **Vendor Interoperability:** While NDMP is a standard, specific implementations can vary, leading to interoperability issues.
*   **NDMP Version Compatibility:** Ensure the backup client and NAS filer support compatible NDMP versions.
*   **Security:** Unauthenticated NDMP connections are a security risk. Always use authenticated modes.
*   **Configuration Complexity:** Setting up NDMP, especially in 3-way handshake scenarios, can sometimes be complex.
*   **NAS Performance:** The performance of the NAS filer itself will impact backup speeds.
*   **Firewall Rules:** Specific firewall ports (typically TCP 10000 for control, and dynamic ports for data) need to be open between the backup client, NAS, and target.

#### Learning Outcomes Covered:

*   **Discuss various implementations of NDMP and the level of vendor support.**
*   **Identify the benefits and potential challenges of using NDMP for NAS backups.**

---

### 4. NDMP Backup and Restore Operations

#### Key Concepts & Definitions:

*   **NDMP Backup Types:**
    *   **Full Backup:** Backs up all selected files and directories.
    *   **Incremental Backup:** Backs up only files that have changed since the last full or incremental backup.
    *   **Differential Backup:** Backs up only files that have changed since the last full backup. (Note: NDMP's native support for incremental/differential can vary by vendor implementation).
*   **NDMP Restore Process:**
    1.  **Backup Client requests restore:** The backup client instructs the NAS filer to restore specific data from a backup image.
    2.  **NAS Filer accesses backup:** The NAS filer's data mover accesses the backup target (either directly or via the media server).
    3.  **Data Transfer to NAS:** Data is read from the backup target and transferred back to the NAS filer.
    4.  **NAS Filer writes data:** The NAS filer overwrites or writes the restored data back into its file system.
    5.  **Verification:** The restore operation may include verification steps.
*   **Data Integrity Check:** NDMP can support mechanisms like MD5 checksums to ensure data integrity during backup and restore.

#### Practical Considerations for NDMP Backups:

*   **Selecting Backup Source:** Choose the specific file systems or directories on the NAS to be backed up.
*   **Defining Backup Target:** Specify the tape drive, library, or disk pool where the backup data will be stored.
*   **Scheduling Backups:** Configure backup jobs to run at specific times or intervals.
*   **Monitoring Backup Jobs:** Regularly check the status of backup operations to ensure they are successful.
*   **Testing Restores:** **Crucially important!** Periodically perform test restores to verify the integrity of your backups and the restore process.

#### Learning Outcomes Covered:

*   **Describe the process of performing NDMP backups and restores.**

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary advantage of using NDMP for NAS backups?

**Answer:** The primary advantage is offloading the backup processing from client servers to the NAS filer, thus reducing the load on client systems and improving their performance.

**Question 2:** In an NDMP 3-way handshake, what are the three participants involved?

**Answer:** The three participants are the NAS filer (performing the data read), the backup client (or media server, managing the backup target), and the backup target (e.g., tape drive or disk appliance).

**Question 3:** Which TCP port is typically used for NDMP control connections?

**Answer:** TCP port 10000 is typically used for NDMP control connections.

**Question 4:** What is a potential security risk associated with older NDMP implementations?

**Answer:** Older or unconfigured NDMP implementations might allow unauthenticated connections, posing a security risk. It's important to use authenticated NDMP modes.

**Question 5:** Why is it important to perform test restores even if NDMP backups are successful?

**Answer:** Test restores are crucial to verify the integrity of the backup data and the entire restore process. A successful backup does not guarantee a successful restore; issues can arise with data corruption, tape readability, or the restore procedure itself.

**Question 6:** Explain the difference between NDMP Local Mode and 3-Way Handshake (Remote Mode) for backups.

**Answer:**
*   **Local Mode:** The NAS filer backs up its data to a storage device (like a tape drive) directly attached to the NAS filer itself.
*   **3-Way Handshake (Remote Mode):** The NAS filer backs up its data to a remote backup target, typically managed by a separate backup server or media server. The NAS filer sends data directly to the media server, which then writes it to the target.

---

### 6. Important Points to Remember

*   **NDMP is specifically for NAS devices.** It's not a general-purpose backup protocol for servers with local storage.
*   **Offload is key:** The main benefit is reducing the burden on your client servers.
*   **Standardization:** NDMP aims to provide a consistent way to back up different NAS vendor devices.
*   **Vendor and Software Compatibility:** Always verify that your NAS hardware and backup software support NDMP and the specific version being used.
*   **Security:** Prioritize using authenticated NDMP connections.
*   **Test Restores:** Never skip this crucial step in any backup strategy.
*   **Firewall:** Ensure necessary ports are open for NDMP communication.
*   **Performance:** While NDMP offloads client processing, the performance of the NAS filer and the backup target will directly impact backup speeds.

---
