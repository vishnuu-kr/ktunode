---
title: "File System: File concept - Attributes, Operations, types, structure – Access methods, Protection. File-system implementation, Directory implementation. Allocation methods."
subject: "OPERATING SYSTEMS"
module: "Module 4: File System: File concept "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365e8"
status: "completed"
scrapedAt: "2026-05-23T16:30:12.817Z"
---
# Operating Systems: Module 4 - File System: File Concept

## Table of Contents

1.  [Introduction to File Systems](#introduction-to-file-systems)
2.  [File Concept](#file-concept)
    *   [File Attributes](#file-attributes)
    *   [File Operations](#file-operations)
    *   [File Types](#file-types)
    *   [File Structure](#file-structure)
3.  [Access Methods](#access-methods)
    *   [Sequential Access](#sequential-access)
    *   [Direct Access (Random Access)](#direct-access-random-access)
    *   [Indexed Sequential Access](#indexed-sequential-access)
4.  [File Protection](#file-protection)
    *   [Access Control Lists (ACLs)](#access-control-lists-acls)
    *   [Capabilities](#capabilities)
    *   [Password Protection](#password-protection)
    *   [Encryption](#encryption)
5.  [File-System Implementation](#file-system-implementation)
    *   [File System Structure](#file-system-structure)
    *   [Logical File System](#logical-file-system)
    *   [Physical File System](#physical-file-system)
6.  [Directory Implementation](#directory-implementation)
    *   [Single-Level Directory](#single-level-directory)
    *   [Two-Level Directory](#two-level-directory)
    *   [Tree-Structured Directory](#tree-structured-directory)
    *   [Acyclic-Graph Directories](#acyclic-graph-directories)
    *   [General Graph Directories](#general-graph-directories)
7.  [Allocation Methods](#allocation-methods)
    *   [Contiguous Allocation](#contiguous-allocation)
    *   [Linked Allocation](#linked-allocation)
    *   [Indexed Allocation](#indexed-allocation)
8.  [Practice Questions and Answers](#practice-questions-and-answers)
9.  [Key Points to Remember](#key-points-to-remember)
10. [References](#references)

---

## 1. Introduction to File Systems

A **file system** is the part of the operating system that manages how files are stored, organized, and accessed on secondary storage devices (like hard drives, SSDs, USB drives). It provides a logical view of information to users and applications, abstracting away the complexities of the underlying hardware.

**Relevance:** File systems are crucial for any computing device as they enable persistent storage and retrieval of data, programs, and operating system components. Without them, data would be lost as soon as power is turned off. (Connects to **CO1**, **CO6**)

**Key Concepts:**
*   **Abstraction:** Hides the physical details of storage devices.
*   **Organization:** Provides a structured way to manage files and directories.
*   **Access Control:** Manages who can access what information.
*   **Efficiency:** Optimizes storage and retrieval of data.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12: File System Interface, Chapter 13: File System Implementation

---

## 2. File Concept

The fundamental unit of storage and organization in a file system is the **file**. A file is a named collection of related information recorded on secondary storage.

### File Attributes

Files have various attributes that provide information about them to the operating system and users. These attributes are typically stored in a **directory entry** or **file control block (FCB)**.

*   **Name:** A human-readable identifier for the file. (e.g., `document.txt`, `report.pdf`)
*   **Identifier:** A unique tag (number or string) within the file system that identifies the file, used internally by the OS.
*   **Type:** The kind of information the file contains (e.g., text, executable, image, audio). This helps the OS determine how to interpret and process the file.
*   **Location:** Pointer to the actual location of the file on the storage device (e.g., starting block number and size, or pointers to all blocks).
*   **Size:** The current size of the file in bytes, words, or blocks.
*   **Protection:** Information about who can do what with the file (read, write, execute). This relates to file access permissions.
*   **Time Stamps:**
    *   **Creation Time:** When the file was created.
    *   **Last Access Time:** When the file was last read.
    *   **Last Modification Time:** When the file was last written to.
    *   **Last Change Time:** When the file's metadata (attributes) was last changed.
*   **Access Count:** Number of times the file has been accessed.
*   **Owner ID, Group ID:** Identifiers of the file's owner and the group it belongs to, used for protection.

**Example:** A file named `my_report.docx` might have attributes like:
*   Name: `my_report.docx`
*   Type: Document (e.g., Microsoft Word)
*   Location: Block 100, 101, 102 on disk C
*   Size: 15 KB
*   Protection: Owner can read/write/execute, Group can read, Others can read.
*   Last Modified: 2023-10-27 10:30 AM

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.1: File Concept

### File Operations

The operating system provides a set of operations that can be performed on files:

*   **Create:** Creates a new file. This involves allocating space on the secondary storage and creating a directory entry.
*   **Write:** Writes data to a file. This can be appending data to the end or overwriting existing data.
*   **Read:** Reads data from a file.
*   **Seek:** Changes the current file position pointer. This is used for direct access.
*   **Delete:** Removes a file. This involves deallocating its storage space and removing its directory entry.
*   **Truncate:** Resizes a file to zero length, effectively deleting its contents but keeping the directory entry.
*   **Rename:** Changes the name of a file.

**Example:**
*   `fopen("my_file.txt", "w")` - Creates `my_file.txt` for writing.
*   `fwrite(buffer, size, count, file_pointer)` - Writes data from a buffer to the file.
*   `fread(buffer, size, count, file_pointer)` - Reads data from the file into a buffer.
*   `fseek(file_pointer, offset, whence)` - Moves the file pointer.
*   `fclose(file_pointer)` - Closes the file, flushing buffers and releasing resources.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.1: File Concept

### File Types

Files can be categorized based on their content and how they are structured.

*   **Plain Files:** Contain sequences of bytes, perhaps with some structure (e.g., ASCII text files, binary files).
    *   **Text Files:** Contain printable characters, often organized into lines.
    *   **Executable Files:** Contain machine code or interpreted code that can be executed by the system.
*   **Directories:** Special files that contain information about other files, typically mapping file names to their identifiers or locations.
*   **Special Files:**
    *   **Device Files:** Represent I/O devices (e.g., `/dev/tty` for the terminal, `/dev/null` for discarding output). These allow I/O devices to be treated like files.

**Example (Unix/Linux):**
*   `example.txt`: Plain text file.
*   `my_program`: Executable file.
*   `/home/user/documents/`: Directory file.
*   `/dev/sda1`: Represents the first partition of the first SATA disk.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.1: File Concept

### File Structure

The structure of a file depends on its type and how the operating system manages it.

*   **Simple Structure:** A sequence of records of fixed or variable length. Applications manage the record structure. (e.g., traditional databases, CSV files)
*   **Complex Structure:** The OS understands the file's structure and provides tools for manipulating it. (e.g., indexed files, database files with specific indexing mechanisms)

**Example:**
*   **Fixed-Length Records:** A student record file where each student record is exactly 100 bytes.
*   **Variable-Length Records:** A text file where lines can be of different lengths.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.1: File Concept

---

## 3. Access Methods

Access methods define how data is retrieved from a file.

### Sequential Access

*   **Description:** Information in the file is accessed in a linear sequence, one record after another. The current position in the file is maintained.
*   **Operation:** To read the Nth record, you must first read the preceding N-1 records.
*   **Use Cases:** Primarily for text files, log files, or situations where data is processed sequentially.
*   **Example:** Reading a text file line by line using `fgets()` or `readline()`.

**Important Point:** No direct access to arbitrary records.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.2: Access Methods

### Direct Access (Random Access)

*   **Description:** The file is viewed as a collection of fixed-size blocks (or records). The file system can directly access any block of the file without reading the preceding blocks. This is achieved using a **block address** or by using a **seek operation** to position the file pointer.
*   **Operation:** Read/write operations occur at a specified position. A `seek` operation allows jumping to any block.
*   **Use Cases:** Databases, operating system swap files, any application requiring quick access to specific data records.
*   **Example:** Accessing the 100th record in a file where each record is 512 bytes long. The OS can directly read block `(100 * 512) / block_size`.

**Important Point:** Allows efficient random access.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.2: Access Methods

### Indexed Sequential Access

*   **Description:** Combines aspects of both sequential and direct access. It uses an **index** to locate specific records within the file. The index is a separate data structure that maps keys to the disk addresses of records.
*   **Operation:** To access a record, the system first searches the index to find the address of the desired record, then uses direct access to retrieve that record.
*   **Use Cases:** Efficient for files that are accessed both sequentially and randomly.
*   **Example:** Relational databases often use B-trees or similar index structures.

**Important Point:** Provides fast random access by maintaining an index.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.2: Access Methods

---

## 4. File Protection

File protection ensures that only authorized users or processes can access or modify files. This is a critical aspect of operating system security. (Connects to **CO6**)

### Mechanisms:

*   **Owner, Group, Others:**
    *   **Owner:** The user who created the file.
    *   **Group:** A set of users who share common access rights.
    *   **Others:** All other users on the system.
    *   **Permissions:** For each category (owner, group, others), specific access rights are granted:
        *   **Read (r):** Ability to view the file's content.
        *   **Write (w):** Ability to modify the file's content.
        *   **Execute (x):** Ability to run the file as a program.
    *   **Example (Unix/Linux):** `rwxr-xr--` means owner has read, write, execute; group has read, execute; others have read.

### Access Control Lists (ACLs)

*   **Description:** A more fine-grained approach than owner/group/others. An ACL is a list of entries, where each entry specifies a user or group and their permitted access rights to the file.
*   **Structure:** Each entry (Access Control Entry - ACE) typically contains:
    *   **Identifier:** The user or group being granted access.
    *   **Permissions:** The set of access rights (read, write, execute, etc.).
*   **Advantage:** Allows granting specific permissions to individual users or groups beyond the standard owner/group/others.
*   **Example:** An ACL for `secret_report.doc` might include:
    *   User `Alice`: read, write
    *   Group `Managers`: read
    *   User `Bob`: read
    *   Owner `Admin`: read, write, execute

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.5: Protection

### Capabilities

*   **Description:** A capability is a reference to an object (e.g., a file) that includes the access rights for that object. A process possesses capabilities to access objects. This is a "possibility" based approach rather than a "permission" based approach.
*   **Advantage:** If a process has a capability for a file, it can access it, regardless of whether its name is in a directory or ACL.
*   **Challenge:** Managing capabilities securely, especially revocation.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.5: Protection

### Password Protection

*   **Description:** A file can be protected by a password. Only users who know the password can access the file.
*   **Implementation:** The OS stores an encrypted version of the password. When a user attempts to access the file, they provide the password, which is encrypted and compared with the stored encrypted password.
*   **Challenge:** Password management and vulnerability if passwords are weak or compromised.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.5: Protection

### Encryption

*   **Description:** Data within a file is encrypted using an encryption algorithm and a key. Only users with the correct key can decrypt and read the file.
*   **Advantage:** Provides strong protection even if the underlying storage is accessed without authorization.
*   **Use Cases:** Sensitive data, confidential documents.
*   **Example:** Disk encryption (e.g., BitLocker, FileVault), encrypted archives (e.g., ZIP with password).

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.5: Protection

---

## 5. File-System Implementation

This section describes how the operating system implements file systems.

### File System Structure

A file system typically has a layered structure:

1.  **File System Interface:** Provides operations to users and applications (e.g., `open`, `read`, `write`, `close`).
2.  **Logical File System:** Manages file-related information (metadata) and translates file operations into block-level I/O requests. It deals with file names, directories, and file attributes.
3.  **Basic File System (or Device Manager):** Interacts with the physical storage devices. It translates logical block addresses into physical block addresses on the disk and manages I/O transfers.
4.  **I/O Control:** Lower-level software that controls the actual hardware devices (e.g., disk controllers).

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.1: File System Structure

### Logical File System

*   **Role:** Manages the mapping of file names to physical storage locations. It deals with the metadata associated with files.
*   **Components:**
    *   **Directory Structure:** Manages directories and their contents (file names, pointers to metadata).
    *   **File Control Blocks (FCBs) / Inodes:** Contains all the metadata about a file (attributes, location pointers).
    *   **Buffer Cache:** Manages a cache of recently accessed disk blocks to improve performance.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.1: File System Structure

### Physical File System

*   **Role:** Manages the physical storage allocation and data transfer to/from the disk.
*   **Components:**
    *   **Allocation Methods:** Determines how disk space is allocated to files (e.g., contiguous, linked, indexed).
    *   **Free Space Management:** Keeps track of available disk blocks.
    *   **Disk Scheduling:** Optimizes the order of disk I/O requests (although this is often handled by the device driver).

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.1: File System Structure

---

## 6. Directory Implementation

Directories are special files used to organize other files and directories. The implementation of directory structures affects how quickly files can be found.

### Single-Level Directory

*   **Description:** All files are in a single directory.
*   **Pros:** Simple to implement.
*   **Cons:**
    *   **Naming Conflicts:** Difficult to manage as the number of files grows, as all file names must be unique.
    *   **Limited Scalability:** Not suitable for large systems with many users.
*   **Example:** Early operating systems.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.3: Directory Structure

### Two-Level Directory

*   **Description:** Each user has their own directory. There's a master file directory that maps user names to their individual directories.
*   **Pros:**
    *   **Reduces Naming Conflicts:** Users can have files with the same name as long as they are in different user directories.
*   **Cons:**
    *   **No Sharing:** Difficult to share files between users.
    *   **Limited Structure:** Still relatively simple.
*   **Example:** Master File Directory maps `user1` to `dir1`, `user2` to `dir2`. Files can be `dir1/fileA` and `dir2/fileA`.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.3: Directory Structure

### Tree-Structured Directory

*   **Description:** A hierarchical structure where directories can contain files and other subdirectories, forming a tree. The root directory is at the top.
*   **Pros:**
    *   **Efficient Organization:** Allows for logical grouping of files.
    *   **No Naming Conflicts:** File names need only be unique within their own directory.
    *   **Flexible Sharing:** Files can be shared by creating links (hard or symbolic) to them in other directories.
*   **Path:** Files are accessed via a **path name**, which is a sequence of directory names leading to the file (e.g., `/home/user/documents/report.txt`).
    *   **Absolute Path:** Starts from the root directory.
    *   **Relative Path:** Starts from the current working directory.
*   **Example:** The file system structure of modern operating systems like Windows, macOS, and Linux.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.3: Directory Structure

### Acyclic-Graph Directories

*   **Description:** Allows directories to share subdirectories and files. A file or subdirectory can have multiple directories pointing to it. This creates a directed acyclic graph (DAG).
*   **Pros:**
    *   **Efficient Sharing:** Enables sharing of files and directories easily.
    *   **Flexibility:** Users can organize files in multiple locations without duplication.
*   **Implementation:** Uses **links** (e.g., symbolic links in Unix, shortcuts in Windows).
*   **Challenge:** Garbage collection and file deletion can be complex (when do you actually delete the file if multiple links point to it?).
*   **Example:** A file `notes.txt` might be in both `/home/user/projectA/` and `/home/user/important_docs/`.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.3: Directory Structure

### General Graph Directories

*   **Description:** Allows directories to link to any other directory, including creating cycles.
*   **Challenge:**
    *   **Traversal Complexity:** Requires sophisticated algorithms to detect cycles and avoid infinite loops during searches.
    *   **File Deletion:** More complex to manage.
*   **Use:** Rarely used due to complexity.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 12.3: Directory Structure

---

## 7. Allocation Methods

Allocation methods determine how disk space is assigned to files. This impacts performance, space utilization, and fragmentation.

### Contiguous Allocation

*   **Description:** Each file occupies a contiguous block of disk addresses.
*   **Pros:**
    *   **Simple:** Easy to implement.
    *   **Fast Access:** Sequential and random access are both fast as blocks are adjacent.
*   **Cons:**
    *   **External Fragmentation:** Free space can become broken into many small, non-contiguous pieces, making it difficult to allocate space for new files even if the total free space is sufficient.
    *   **File Size Problem:** Files cannot be easily extended if there's no contiguous free space available. Requires moving the entire file.
*   **Implementation:** Requires maintaining a table of free blocks or a free-space list.
*   **Example:** Early disk partitioning schemes, some optical media.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.2: Allocation Methods

### Linked Allocation

*   **Description:** Each file is a linked list of disk blocks. The directory entry contains a pointer to the first block, and each block contains a pointer to the next block in the file.
*   **Pros:**
    *   **No External Fragmentation:** Any free block can be allocated.
    *   **Easy Extension:** Files can be easily extended by allocating a new block and linking it.
*   **Cons:**
    *   **Slow Random Access:** To access the Nth block, all preceding N-1 blocks must be read.
    *   **Space Overhead:** Each block (except the last) needs to store a pointer, reducing effective storage.
    *   **Reliability:** If a block or its pointer is corrupted, the entire chain can be broken, and the file may be lost.
    *   **No Direct Block Access:** Requires sequential traversal.
*   **Implementation:** Requires a pointer to the first block in the directory.
*   **Example:** FAT (File Allocation Table) file systems loosely use this concept, where a table stores the next cluster for each cluster.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.2: Allocation Methods

### Indexed Allocation

*   **Description:** Each file has an **index block** that contains pointers to all the blocks allocated to that file. The directory entry points to the index block.
*   **Pros:**
    *   **Fast Random Access:** Can directly access any block using the index.
    *   **No External Fragmentation:** Free blocks can be allocated anywhere.
    *   **Efficient Extension:** New blocks can be added by simply adding their pointers to the index block.
*   **Cons:**
    *   **Space Overhead:** The index block itself takes up space. For very large files, a single index block might not be enough, leading to linked index blocks or multi-level indexing (like Unix's inodes).
    *   **Index Block Management:** Managing the index block adds complexity.
*   **Implementation:** Uses an index block (like `inode` in Unix-like systems).
*   **Example:** Unix file systems (ext2, ext3, ext4) use inodes, which are the index blocks.

**Textbook Reference:**
*   Silberschatz, Galvin, Gagne: Chapter 13.2: Allocation Methods

---

## 8. Practice Questions and Answers

**Question 1:** What is the primary function of a file system?
**Answer:** The primary function of a file system is to manage how files are stored, organized, and accessed on secondary storage devices, providing a logical view of data to users and applications. (CO1, CO6)

**Question 2:** List at least five file attributes.
**Answer:** Name, Identifier, Type, Location, Size, Protection, Creation Time, Last Access Time, Last Modification Time. (K2)

**Question 3:** Differentiate between sequential access and direct access methods.
**Answer:**
*   **Sequential Access:** Data is accessed in a linear order, one record after another. To access the Nth record, the first N-1 must be read.
*   **Direct Access (Random Access):** Any block of data can be accessed directly without reading preceding blocks, typically using block addresses or seek operations. (K2)

**Question 4:** What is the main problem with contiguous allocation?
**Answer:** External fragmentation. Free space becomes divided into small, non-contiguous chunks, making it difficult to allocate space for new files even if the total free space is sufficient. (CO6)

**Question 5:** How does an indexed allocation method solve the problem of external fragmentation?
**Answer:** In indexed allocation, each file has an index block that points to all its data blocks. Any free block on the disk can be allocated to a file, and its pointer is added to the index block. This eliminates external fragmentation because file blocks do not need to be contiguous. (CO6)

**Question 6:** Explain the concept of Access Control Lists (ACLs) in file protection.
**Answer:** ACLs are a fine-grained mechanism for file protection. Each file has an associated list of entries (ACEs), where each entry specifies a user or group and the specific access rights (read, write, execute) granted to them. This allows for more flexible protection than simple owner/group/others permissions. (CO6)

**Question 7:** What is the advantage of a tree-structured directory over a single-level directory?
**Answer:** A tree-structured directory allows for better organization, reduces naming conflicts by providing unique file paths, and enables efficient sharing of files and directories through links, unlike a single-level directory which has all files in one flat structure. (CO6)

**Question 8:** Which allocation method suffers from significant overhead due to pointers within data blocks?
**Answer:** Linked allocation suffers from this overhead, as each data block (except the last) must contain a pointer to the next block. (CO6)

**Question 9:** Give an example of a file type that is not a plain file.
**Answer:** A directory file or a device file. (K2)

**Question 10:** What is the purpose of a file's "identifier" attribute?
**Answer:** The identifier is an internal, unique tag (often a number) that the operating system uses to refer to the file internally, separate from its human-readable name, which might change. This identifier typically points to the file's metadata (e.g., inode number). (K2)

---

## 9. Key Points to Remember

*   **File System:** Manages data on secondary storage, providing abstraction, organization, and access control. (CO1, CO6)
*   **File Attributes:** Essential metadata like name, type, location, size, and protection.
*   **File Operations:** Create, read, write, delete, seek, rename, truncate.
*   **Access Methods:** Sequential (linear) vs. Direct (random) access. Indexed sequential access combines both.
*   **File Protection:** Crucial for security, implemented via permissions (owner/group/others), ACLs, capabilities, passwords, and encryption. (CO6)
*   **Directory Structures:** Single-level, two-level, tree-structured (most common), acyclic-graph, general-graph. Hierarchical structures offer better organization and reduce naming conflicts. (CO6)
*   **Allocation Methods:**
    *   **Contiguous:** Simple, fast access, but suffers from external fragmentation.
    *   **Linked:** No external fragmentation, easy extension, but slow random access and pointer overhead.
    *   **Indexed:** Fast random access, no external fragmentation, but index block overhead. (CO6)
*   **File System Implementation:** Layers of software (logical file system, basic file system) manage files and translate requests to disk operations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 10. References

*   **Silberschatz, Peter Baer Galvin, Greg Gagne:** *Operating System Concepts*, 9th Edition, Wiley India, 2015. (Primary Reference)
*   **Andrew S Tanenbaum:** *Modern Operating Systems*, 6th Edition, Pearson Education, 2015.
*   **Garry Nutt, Nabendu Chaki, Sarmistha Neogy:** *Operating Systems*, 3rd Edition, Pearson Education.
*   **D.M.Dhamdhere:** *Operating Systems*, 2nd Edition, Tata McGraw Hill, 2011.
*   **Sibsankar Haldar, Alex A Aravind:** *Operating Systems*, Pearson Education.