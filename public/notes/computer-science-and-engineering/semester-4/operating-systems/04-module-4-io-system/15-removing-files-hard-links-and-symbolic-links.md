---
title: "Removing files - Hard links and Symbolic links"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd8"
status: "completed"
scrapedAt: "2026-05-20T16:14:39.037Z"
---
# OPERATING SYSTEMS - Module 4: I/O System - Removing Files: Hard Links and Symbolic Links

## Introduction

This module focuses on the nuances of removing files, specifically when dealing with hard links and symbolic links. Understanding the differences in behavior is crucial for maintaining data integrity and avoiding unintended data loss.

## Learning Outcomes

Upon completion of this topic, you should be able to:

1.  Define hard links and symbolic links (soft links).
2.  Explain how hard links and symbolic links differ in terms of storage, inodes, and behavior.
3.  Describe the impact of removing a file on its hard links and symbolic links.
4.  Identify the use cases for hard links and symbolic links.
5.  Utilize commands (like `rm`, `ln`, `ln -s`) to create and remove files and links.
6.  Predict the consequences of removing a file with existing hard links and symbolic links.

## 1. Key Concepts and Definitions

*   **File:** A named collection of related information recorded on secondary storage (e.g., hard drive).
*   **Inode (Index Node):** A data structure that stores metadata about a file, such as its owner, permissions, size, timestamps, and pointers to the data blocks on disk. Each file has one inode.  The inode number is a unique identifier for a file within a filesystem.
*   **Directory Entry:**  A directory entry maps a filename to an inode number.  Directories are essentially tables that link filenames to inodes.
*   **Link:** A connection between a filename and a file. There are two types: hard links and symbolic links.

    *   **Hard Link:** A directory entry that points directly to an inode. Multiple hard links can point to the same inode. Essentially, a hard link is another name for the same file.
    *   **Symbolic Link (Soft Link):** A special type of file that contains a text string representing the path to another file or directory. It does not point to the inode directly.  It is a pointer to another filename.

## 2. Hard Links vs. Symbolic Links

| Feature           | Hard Link                                     | Symbolic Link (Soft Link)                                    |
|-------------------|----------------------------------------------|--------------------------------------------------------------|
| **Storage**       | Shares the same inode as the original file. | Contains the path to the target file; occupies its own inode. |
| **Inode**         | Same inode number.                            | Different inode number.                                       |
| **File System**   | Must reside on the same file system.         | Can span different file systems.                           |
| **Behavior on Removal of Target** | Removing the original file doesn't affect the hard link. The data is only truly removed when *all* hard links are deleted.  The data persists as long as at least one hard link exists. | Removing the original file makes the symbolic link "dangling" - it becomes broken because the target it points to no longer exists. |
| **Directory Links** | Cannot be used to link to directories.        | Can be used to link to directories.                           |
| **Permissions**   | Shares the same permissions as the original file. | Has its own permissions, independent of the target file.        |
| **Size**          | Appears to have the same size as the original file. | Has a small size, representing the length of the path it stores. |

## 3. Impact of Removing Files

**Removing the Original File (Target File):**

*   **Hard Links:**  Removing the *original* file (one of the hard links) *does not* delete the file's contents, as the other hard link(s) still point to the same inode and data. The link count in the inode is decremented. When the link count reaches zero, the inode and its associated data blocks are marked as free and may be reused.
*   **Symbolic Links:** Removing the original file makes the symbolic link a "dangling link". The symbolic link still exists as a file, but when you try to access it, you will get an error (e.g., "No such file or directory").  The symbolic link's contents (the path to the missing file) remain, but they are now useless.

**Removing a Hard Link:**

*   Removes *only* the specific directory entry (the link) that was deleted. The other hard links and the underlying data remain intact, unless it was the *last* hard link.

**Removing a Symbolic Link:**

*   Removes only the symbolic link file itself. The original target file remains untouched.

## 4. Use Cases

*   **Hard Links:**
    *   Creating aliases for important files, preventing accidental deletion (data protection).
    *   Conserving disk space by sharing a single copy of a file between multiple directories (especially useful for large files).
    *   Used internally by the file system for directory structure (e.g., "." and ".." entries).

*   **Symbolic Links:**
    *   Creating shortcuts to frequently accessed files or directories.
    *   Providing a stable path to a file even if the actual file is moved to a different location (maintaining compatibility).
    *   Linking files across different file systems.
    *   Organizing files into logical structures.

## 5. Commands

*   `ln <target> <link_name>`: Creates a hard link.  `<target>` is the existing file, and `<link_name>` is the new hard link.
*   `ln -s <target> <link_name>`: Creates a symbolic link.  `<target>` is the existing file or directory, and `<link_name>` is the new symbolic link.
*   `rm <file>`: Removes a file (either a regular file, a hard link, or a symbolic link).
*   `ls -l <file>`:  Lists file details, including link count (for hard links) and the target path (for symbolic links).
*   `stat <file>`: Provides detailed file information, including inode number.

**Examples:**

```bash
# Create a file
echo "This is the original file" > original.txt

# Create a hard link
ln original.txt hard_link.txt

# Create a symbolic link
ln -s original.txt soft_link.txt

# List the files with details
ls -l

# Output (example):
# -rw-r--r-- 2 user user 28 Oct 26 10:00 hard_link.txt
# -rw-r--r-- 2 user user 28 Oct 26 10:00 original.txt
# lrwxrwxrwx 1 user user 12 Oct 26 10:00 soft_link.txt -> original.txt

# Check the inode number
stat original.txt | grep Inode
stat hard_link.txt | grep Inode
stat soft_link.txt | grep Inode

#Remove the original file
rm original.txt

#List the files again
ls -l

#Output:
# -rw-r--r-- 1 user user 28 Oct 26 10:00 hard_link.txt
# lrwxrwxrwx 1 user user 12 Oct 26 10:00 soft_link.txt -> original.txt

#Try to read the softlink
cat soft_link.txt

#Output:
#cat: soft_link.txt: No such file or directory

#Hardlink still works
cat hard_link.txt

#Output:
#This is the original file

#Remove the hardlink
rm hard_link.txt
```

## 6. Consequences of Removing Files

**Scenario 1: Removing a file with a hard link**

1.  File `A` is created. Inode is created, data is written to disk. Link count in inode = 1.
2.  `ln A B` is executed (hard link). Link count in inode = 2.
3.  `rm A` is executed.  Directory entry `A` is removed. Link count in inode = 1.
4.  File `B` still exists and is accessible.

**Scenario 2: Removing a file with a symbolic link**

1.  File `A` is created.
2.  `ln -s A B` is executed (symbolic link).
3.  `rm A` is executed.
4.  Symbolic link `B` now points to a non-existent file. `B` itself still exists as a (now useless) file.  Trying to access `B` will result in an error.

**Scenario 3: Removing a symbolic link**

1.  File `A` is created.
2.  `ln -s A B` is executed (symbolic link).
3.  `rm B` is executed.
4.  Only the symbolic link `B` is removed. File `A` remains untouched and accessible.

## 7. Important Points to Remember

*   Hard links share the same inode, symbolic links have different inodes.
*   Hard links must be on the same file system, symbolic links can cross file systems.
*   Removing a file with hard links only removes the *link*, not the data, until the last hard link is removed.
*   Removing a file pointed to by a symbolic link creates a dangling link.
*   Hard links cannot point to directories, while symbolic links can.
*   `rm` removes both hard and symbolic links, but the consequences differ.

## 8. Practice Questions/Exercises

**Q1:** What is the key difference between a hard link and a symbolic link in terms of how they point to the target file?

**A1:** A hard link points directly to the inode of the target file, while a symbolic link stores the *path* to the target file.

**Q2:** If you have a file `myfile.txt` with two hard links, `link1.txt` and `link2.txt`, what happens if you delete `myfile.txt`?  What will be displayed if you list `link1.txt`'s contents with `cat link1.txt`?

**A2:** `link1.txt` and `link2.txt` will still be accessible and contain the same content as `myfile.txt` did. The file content remains on the disk and can still be read with `cat link1.txt`.

**Q3:**  You have a file `source.txt` and a symbolic link `symlink.txt` pointing to `source.txt`.  What command will remove *only* the symbolic link, leaving `source.txt` untouched?

**A3:** `rm symlink.txt`

**Q4:** Why can't you create a hard link to a directory?

**A4:**  Allowing hard links to directories would create cycles in the file system directory structure, which could lead to infinite loops when traversing the file system and cause problems with utilities like `fsck` (file system check). Also, hard links to directories would make garbage collection of the file system much more difficult.

**Q5:**  You create a hard link named 'new_file.txt' to 'existing_file.txt'. You then modify 'existing_file.txt'. What will be the content of 'new_file.txt'?

**A5:** 'new_file.txt' will contain the modified content. Because they are hard links, they both refer to the same inode and therefore the same data on disk.  Any changes made through one link are immediately reflected when accessing the file through the other link.

**Q6:** Write the commands to create a file called "my_file.txt", add the text "hello world", create a hard link to the file called "hard_link.txt" and then delete the original file "my_file.txt". Finally, output the text in "hard_link.txt".

**A6:**
```bash
echo "hello world" > my_file.txt
ln my_file.txt hard_link.txt
rm my_file.txt
cat hard_link.txt
```

This comprehensive guide covers the concepts, differences, and implications of removing files with hard links and symbolic links. Remember to experiment with these commands in a safe environment to solidify your understanding. Good luck!
