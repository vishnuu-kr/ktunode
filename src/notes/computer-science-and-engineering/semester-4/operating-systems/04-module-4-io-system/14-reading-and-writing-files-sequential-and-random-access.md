---
title: "reading and writing files (sequential and random access)"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd7"
status: "completed"
scrapedAt: "2026-05-20T16:14:38.325Z"
---
# Operating Systems: Module 4 - I/O System: Reading and Writing Files (Sequential & Random Access)

## Introduction

This module delves into the vital aspect of Input/Output (I/O) operations within an operating system, specifically focusing on how files are read and written.  We will explore two primary methods: sequential access and random access, understanding their characteristics, advantages, and disadvantages.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Describe the concepts of sequential and random file access.
*   Compare and contrast sequential and random file access methods.
*   Explain the advantages and disadvantages of each access method.
*   Illustrate how sequential and random file access are implemented in common file systems.
*   Write pseudo-code examples for reading and writing files using both methods.
*   Understand the use cases where one method is preferred over the other.

## 1. Key Concepts and Definitions

*   **File:** A named collection of related information recorded on secondary storage (e.g., hard drive, SSD).  It is a logical unit of storage.
*   **I/O (Input/Output):** The communication between the computer and the outside world (e.g., keyboard, mouse, monitor, storage devices).
*   **File Access Method:** The way in which a file's records are accessed.  We'll focus on sequential and random.
*   **Sequential Access:** Accessing records in a file in a linear order, one after another.  Like a tape player.
*   **Random Access (Direct Access):** Accessing any record in a file directly, without having to read the preceding records.  Like a CD player or a hard drive.
*   **File Pointer (or File Offset):** A marker that indicates the current position in the file where the next read or write operation will occur.
*   **Seek Operation:**  An operation that moves the file pointer to a specific location in the file.  Essential for random access.
*   **Record:**  A logical unit of data within a file. Can be fixed-length or variable-length.

## 2. Sequential Access

### 2.1. Definition

Sequential access involves reading or writing records in a file in a predetermined order, from the beginning to the end.  You must access records in sequence; you cannot jump directly to a specific record without reading all the preceding ones.

### 2.2. Characteristics

*   **Linear Access:**  Records are processed in a linear fashion.
*   **File Pointer:** The file pointer automatically advances after each read or write operation.
*   **Simple Implementation:** Relatively straightforward to implement in both hardware and software.
*   **Suitable for Batch Processing:**  Well-suited for applications where all or most records in a file need to be processed, such as batch processing of payroll data.

### 2.3. Advantages

*   **Simplicity:** Easy to implement and understand.
*   **Efficiency for Serial Processing:**  Highly efficient when processing all or most of the records in a file sequentially.
*   **Low Overhead:**  Minimal overhead in terms of storage space and processing power.

### 2.4. Disadvantages

*   **Inefficient for Random Access:**  Very slow and inefficient when you need to access specific records randomly.  You may have to read through a large portion of the file to find the desired record.
*   **Not Suitable for Interactive Applications:**  Not suitable for interactive applications where users frequently need to access specific records out of sequence.

### 2.5. Implementation

Most programming languages provide functions for sequential file access.  Examples:

*   **C:** `fopen`, `fread`, `fwrite`, `fclose` (without explicit seeking)
*   **Python:** `open` (with "r" or "w" mode and then `read`, `write`, `readline` without `seek`)
*   **Java:** `FileInputStream`, `FileOutputStream`, `BufferedReader`, `BufferedWriter` (without `seek`)

### 2.6. Example (Pseudo-code - Sequential Read)

```
// Assume a file named "data.txt" contains lines of text.

open file "data.txt" in read mode

while (not end of file) {
  read a line from the file and store it in a variable called "line"
  print the "line" to the console
}

close the file
```

### 2.7. Example (Pseudo-code - Sequential Write)

```
// Assume we want to write a list of names to a file.
open file "names.txt" in write mode

names = ["Alice", "Bob", "Charlie"]

for each name in names {
  write the name to the file, followed by a newline character
}

close the file
```

## 3. Random Access

### 3.1. Definition

Random access allows you to access any record in a file directly, without needing to read all the preceding records.  This is achieved by specifying the position (offset) of the desired record within the file.

### 3.2. Characteristics

*   **Direct Access:**  Any record can be accessed directly.
*   **Seek Operation:** Requires a seek operation to move the file pointer to the desired record location before reading or writing.
*   **More Complex Implementation:**  More complex to implement than sequential access, as it requires mechanisms to calculate and manage record positions.
*   **Suitable for Interactive Applications:** Well-suited for applications where users frequently need to access specific records out of sequence, such as database management systems.

### 3.3. Advantages

*   **Fast Access to Specific Records:**  Provides fast access to specific records without needing to read preceding records.
*   **Suitable for Interactive Applications:**  Well-suited for interactive applications where users frequently need to access specific records out of sequence.
*   **Efficient for Updating Records:**  Efficient for updating specific records in a file without rewriting the entire file.

### 3.4. Disadvantages

*   **More Complex Implementation:**  More complex to implement than sequential access.
*   **Requires Calculation of Record Positions:**  Requires a mechanism to calculate the position of each record within the file.  This may involve fixed-length records or the use of indexes.
*   **Potential for Fragmentation:**  If records are variable-length and frequently updated, it can lead to fragmentation of the file.

### 3.5. Implementation

Most programming languages provide functions for random file access.  Examples:

*   **C:** `fopen`, `fread`, `fwrite`, `fseek`, `fclose`
*   **Python:** `open` (with "r+" or "w+" or "a+" mode), `read`, `write`, `seek`
*   **Java:** `RandomAccessFile`

### 3.6. Example (Pseudo-code - Random Read)

```
// Assume a file "data.txt" contains fixed-length records of 100 bytes each.
// We want to read the 5th record.

open file "data.txt" in read mode

record_size = 100
record_number = 5 // Index starts at 1 (meaning the 5th record)

// Calculate the offset (position) of the 5th record.
offset = (record_number - 1) * record_size

// Move the file pointer to the calculated offset.
seek to position offset in the file

// Read the record (100 bytes) from the file.
read record_size bytes from the file and store it in a variable called "record"

// Process the record.
print the "record" to the console

close the file
```

### 3.7. Example (Pseudo-code - Random Write)

```
// Assume a file "data.txt" contains fixed-length records of 100 bytes each.
// We want to write data to the 3rd record.

open file "data.txt" in write mode

record_size = 100
record_number = 3 // Index starts at 1

// The data we want to write.
new_data = "Updated data for record 3". Pad the string with spaces until it is 100 bytes.

// Calculate the offset.
offset = (record_number - 1) * record_size

// Seek to the offset.
seek to position offset in the file

// Write the data.
write new_data to the file

close the file
```

## 4. Comparison of Sequential and Random Access

| Feature         | Sequential Access                           | Random Access                             |
|-----------------|----------------------------------------------|--------------------------------------------|
| Access Order    | Linear                                     | Direct                                     |
| File Pointer    | Automatically advances                      | Requires explicit seeking                   |
| Complexity      | Simple                                     | More complex                               |
| Speed           | Fast for serial processing                | Fast for accessing specific records        |
| Use Cases       | Batch processing, archiving, logging      | Database systems, interactive applications |
| File Type       | Suitable for various file types          | Best with fixed-length records or indexed |
| Example Devices | Tape drives                                | Hard drives, SSDs                            |

## 5. Implementation in Common File Systems

Most file systems (e.g., NTFS, FAT32, ext4) support both sequential and random access. The underlying implementation details depend on the specific file system's architecture.

*   **File System Metadata:** File systems store metadata about each file, including its size, location on disk, and access permissions. This metadata is crucial for random access because it allows the OS to quickly locate the desired record.
*   **Allocation Units (Clusters/Blocks):** Files are typically stored in allocation units (clusters or blocks) on the storage device. The file system maps logical file offsets to physical block addresses, enabling the OS to retrieve the correct data for random access.
*   **Indexing (B-trees, Hash Tables):** Some file systems or applications use indexing techniques to speed up random access, especially for large files. An index is a data structure that maps record keys to their physical locations on disk.  Databases frequently employ indexes.

## 6. Use Cases

*   **Sequential Access:**
    *   **Log Files:** Writing log entries in chronological order.
    *   **Data Backup:** Creating a complete backup of a system.
    *   **Audio/Video Streaming (Mostly):** Playing audio or video files from start to finish. While traditionally sequential, modern streaming often involves some random access for seeking.
    *   **Simple Text Editors:** Opening and reading a text file from beginning to end.
*   **Random Access:**
    *   **Database Management Systems (DBMS):** Retrieving specific records from a database based on a key.
    *   **Word Processors:** Editing a document and jumping between pages.
    *   **Video Editing Software:**  Non-linear video editing, requiring access to different parts of a video file.
    *   **Game Development:** Loading specific game assets as needed.

## 7. Important Points to Remember

*   Sequential access is simple but inefficient for random data retrieval.
*   Random access provides fast access to individual records but is more complex to implement.
*   The choice between sequential and random access depends on the application's requirements.
*   File systems provide mechanisms to support both sequential and random access.
*   Consider file fragmentation, particularly with random access and variable-length records. Use defragmentation tools to improve performance.
*   Understanding the difference between sequential and random access is crucial for efficient file processing and system performance.

## 8. Practice Questions and Exercises

**Question 1:** Explain the difference between sequential and random file access.  Give an example of an application that would benefit from each type of access.

**Answer:** Sequential access reads data in a linear order, one record after another. Random access allows direct access to any record in the file. A log file benefits from sequential access (writing entries in order), while a database benefits from random access (retrieving specific records).

**Question 2:** Describe how a file system supports random access.

**Answer:** File systems support random access through metadata management (file size, location), mapping logical offsets to physical block addresses on the storage device, and potentially using indexing techniques (B-trees, Hash tables) for faster lookups.

**Question 3:** Write pseudo-code to read the 10th record in a file containing fixed-length records of 50 bytes using random access.

**Answer:**

```
open file "data.txt" in read mode

record_size = 50
record_number = 10

offset = (record_number - 1) * record_size

seek to position offset in the file

read record_size bytes from the file and store it in a variable called "record"

print the "record" to the console

close the file
```

**Question 4:** What are the advantages and disadvantages of sequential access?

**Answer:**
*Advantages: simple to implement, efficient for serial processing, low overhead.*
*Disadvantages: inefficient for random access, not suitable for interactive applications.*

**Question 5:**  When would you choose to use sequential file access over random file access? Give a specific example.

**Answer:** You would choose sequential access when you need to process all or most of the records in a file in a linear fashion.  A good example is creating an archive of data where you need to read every file and write it to the archive.  There's no need for random access here; a sequential read of each original file is sufficient.
