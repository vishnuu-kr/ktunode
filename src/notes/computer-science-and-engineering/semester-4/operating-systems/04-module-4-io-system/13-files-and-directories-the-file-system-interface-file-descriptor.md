---
title: "Files and Directories : The File System Interface - File descriptor"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd6"
status: "completed"
scrapedAt: "2026-05-20T16:14:37.608Z"
---
# Operating Systems: Module 4 - I/O System: Files and Directories - The File System Interface - File Descriptor

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Define what a file descriptor is and its purpose.
*   Explain how a file descriptor relates to a file and its associated resources.
*   Describe the standard file descriptors (stdin, stdout, stderr).
*   Understand the process of opening, reading, writing, and closing files using file descriptors.
*   Explain the difference between file descriptors and file pointers (e.g., FILE* in C).
*   Understand how file descriptors are managed by the operating system.

## 1. Key Concepts and Definitions

*   **File:** A named collection of related information, recorded on secondary storage (e.g., hard drive, SSD). Files can contain programs, data, or any other type of information.
*   **Directory (or Folder):** A container that groups files and other directories together, providing a hierarchical organization of the file system.
*   **File System:** The method an operating system uses to organize and manage files on storage devices.  It defines how files are named, stored, accessed, and protected. Examples include NTFS, ext4, APFS.
*   **File System Interface:**  The set of system calls provided by the operating system that allows user programs to interact with the file system.  This interface abstracts away the complexities of the underlying hardware and storage devices.
*   **File Descriptor:** An integer value that uniquely identifies an open file within a process.  It's an index into a per-process table maintained by the operating system. This table contains information about the opened file, such as its current offset, access mode (read, write, etc.), and a pointer to the actual file structure in the kernel.
*   **System Call:**  A request from a user-level process to the operating system kernel.  Interacting with the file system usually involves system calls.

## 2. File Descriptors: Definition and Purpose

*   A **file descriptor (FD)** is a non-negative integer used by a process to access a file or other input/output resource, such as a pipe or socket.
*   It's essentially a handle that the operating system provides to a process after a file has been opened.
*   The purpose of a file descriptor is to provide a secure and consistent way for processes to interact with files, abstracting away the details of the underlying hardware and file system implementation.

## 3. Relationship to Files and Resources

*   When a process opens a file (using a system call like `open()`), the operating system allocates a new file descriptor for that file within the process's descriptor table.
*   The file descriptor acts as an *index* into this table.
*   The entry in the table associated with the file descriptor contains information about the open file:
    *   **Current file offset (read/write pointer):** Indicates the position in the file where the next read or write operation will occur.
    *   **Access mode:** Specifies how the file was opened (e.g., read-only, write-only, read-write).
    *   **File status flags:**  Additional flags that affect the behavior of I/O operations on the file.
    *   **Pointer to the file's vnode/inode:** This pointer leads to the underlying file system's data structure, which contains the actual file metadata (e.g., file size, permissions, timestamps, data block locations).

## 4. Standard File Descriptors

Every process automatically has three standard file descriptors open when it starts:

*   **`0` (stdin):** Standard input.  Typically connected to the keyboard.  Used for reading input into the program.
*   **`1` (stdout):** Standard output.  Typically connected to the terminal or console.  Used for writing output from the program.
*   **`2` (stderr):** Standard error.  Typically connected to the terminal or console.  Used for writing error messages and diagnostic information from the program.

These are defined in C using symbolic names (e.g., `STDIN_FILENO`, `STDOUT_FILENO`, `STDERR_FILENO` in `<unistd.h>`).

**Example (C):**

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    fprintf(stdout, "This is standard output.\n");  // Same as printf
    fprintf(stderr, "This is standard error.\n");
    return 0;
}
```

## 5. Opening, Reading, Writing, and Closing Files

The typical process for interacting with a file using file descriptors involves the following system calls:

*   **`open()`:**  Opens a file and returns a new file descriptor.
    *   Takes the file path and flags indicating the desired access mode (e.g., `O_RDONLY`, `O_WRONLY`, `O_RDWR`, `O_CREAT`).
    *   Returns a non-negative integer (the file descriptor) on success, or `-1` on failure.

    ```c
    #include <fcntl.h>
    #include <stdio.h>
    #include <stdlib.h> // For EXIT_FAILURE
    #include <errno.h> // For errno

    int main() {
        int fd;
        fd = open("my_file.txt", O_RDWR | O_CREAT, 0644); // Read/Write, create if it doesn't exist, permissions 644
        if (fd == -1) {
            perror("open"); // Print a descriptive error message
            exit(EXIT_FAILURE);
        }
        printf("File descriptor: %d\n", fd);

        // ... further operations on the file ...

        return 0;
    }
    ```

*   **`read()`:**  Reads data from the file associated with the file descriptor.
    *   Takes the file descriptor, a buffer to store the data, and the number of bytes to read.
    *   Returns the number of bytes actually read (which may be less than the requested number), or `-1` on error. Returns `0` on end-of-file.

    ```c
    #include <unistd.h>
    #include <stdio.h>
    #include <stdlib.h>

    int main() {
      int fd;
      char buffer[256];
      ssize_t bytesRead;

      fd = open("my_file.txt", O_RDONLY);
      if(fd == -1) {
        perror("open");
        exit(EXIT_FAILURE);
      }

      bytesRead = read(fd, buffer, sizeof(buffer));
      if (bytesRead == -1) {
        perror("read");
        close(fd); // Important to close file descriptors on error
        exit(EXIT_FAILURE);
      }

      printf("Bytes read: %zd\n", bytesRead);
      printf("Data read: %.*s\n", (int)bytesRead, buffer); // Correct way to print a known-length string

      close(fd);
      return 0;
    }
    ```

*   **`write()`:**  Writes data to the file associated with the file descriptor.
    *   Takes the file descriptor, a buffer containing the data, and the number of bytes to write.
    *   Returns the number of bytes actually written, or `-1` on error.

    ```c
    #include <unistd.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>

    int main() {
      int fd;
      char message[] = "Hello, file system!\n";
      ssize_t bytesWritten;

      fd = open("my_file.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644); // O_TRUNC truncates the file if it exists
      if(fd == -1) {
        perror("open");
        exit(EXIT_FAILURE);
      }

      bytesWritten = write(fd, message, strlen(message));
      if (bytesWritten == -1) {
        perror("write");
        close(fd);
        exit(EXIT_FAILURE);
      }

      printf("Bytes written: %zd\n", bytesWritten);

      close(fd);
      return 0;
    }
    ```

*   **`close()`:**  Closes the file associated with the file descriptor, releasing the descriptor.
    *   Takes the file descriptor as input.
    *   Returns `0` on success, or `-1` on error.
    *   **Important:**  Always close file descriptors when you are finished with them to avoid resource leaks.

    ```c
    #include <unistd.h>
    #include <stdio.h>

    int main() {
        int fd;
        fd = open("my_file.txt", O_RDONLY);
        if (fd != -1) {
            if (close(fd) == 0) {
                printf("File descriptor %d closed successfully.\n", fd);
            } else {
                perror("close");
            }
        } else {
            perror("open");
        }
        return 0;
    }
    ```

## 6. File Descriptors vs. File Pointers (FILE*)

*   **File Descriptors:** Low-level, integer handles managed directly by the operating system kernel.  Used in system calls like `open()`, `read()`, `write()`, and `close()`. Part of the POSIX standard.
*   **File Pointers (FILE*):** Higher-level abstractions provided by the standard C library (`stdio.h`). Used in functions like `fopen()`, `fread()`, `fwrite()`, and `fclose()`.

The `FILE*` type uses file descriptors internally. When you call `fopen()`, it typically makes a system call to `open()` and then creates a `FILE` structure to manage buffering and other details.  `fread()`, `fwrite()`, and `fclose()` then operate on the `FILE` structure and eventually translate into `read()`, `write()`, and `close()` system calls.

**Key Differences:**

| Feature       | File Descriptor                               | File Pointer (FILE*)                            |
|---------------|----------------------------------------------|-----------------------------------------------|
| Level         | Low-level                                     | High-level                                      |
| Management    | Kernel-managed                               | C library-managed                               |
| System Calls  | Directly used in system calls                 | Abstracted by C library functions              |
| Buffering     | No buffering (unless explicitly implemented) | Usually buffered                               |
| Error Handling | `errno` variable                             | Functions return error codes (e.g., `NULL`, `EOF`)|
| Portability    | POSIX standard                              | C standard                                      |

**Example illustrating the relationship:**

```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
  // Using FILE*
  FILE *fp = fopen("my_file.txt", "r");
  if (fp == NULL) {
    perror("fopen");
    exit(EXIT_FAILURE);
  }

  // Get the underlying file descriptor from the FILE* stream
  int fd = fileno(fp); // fileno() returns the file descriptor associated with the FILE* stream.

  printf("File descriptor associated with fp: %d\n", fd);

  fclose(fp); // This will eventually call the close() system call.
  return 0;
}
```

## 7. File Descriptor Management by the Operating System

*   Each process has its own table of file descriptors, starting from 0.
*   When a process calls `open()`, the OS finds the first available (unused) entry in the process's file descriptor table and assigns the corresponding integer to the new file descriptor.
*   The OS maintains a *system-wide* file table (or similar structure) that tracks all open files. Each entry in this table contains information like the current file offset, access mode, and a pointer to the file's vnode/inode.
*   When a process closes a file descriptor using `close()`, the corresponding entry in its file descriptor table is marked as available for reuse. The operating system may also perform cleanup operations related to the file.
*   **Duplication:**  File descriptors can be duplicated using the `dup()` or `dup2()` system calls. This allows multiple file descriptors within the *same* process to refer to the same open file. Changes to the file offset through one file descriptor will be visible through the other, as they both point to the same entry in the system-wide file table.

## 8. Important Points to Remember

*   **Always close file descriptors after use** to avoid resource leaks and potential errors.
*   **Check return values of system calls** for errors. Use `perror()` to print descriptive error messages.
*   Understand the difference between file descriptors and file pointers. Choose the appropriate level of abstraction for your needs.
*   Be aware of the standard file descriptors and how they are used for input, output, and error reporting.
*   File descriptors are process-specific.  Different processes may have different file descriptors pointing to the same file.

## 9. Practice Questions/Exercises

1.  **What is a file descriptor? Explain its purpose in the context of operating systems.**
    *   **Answer:** A file descriptor is a non-negative integer that uniquely identifies an open file or other input/output resource within a process. Its purpose is to provide a secure and consistent way for processes to interact with files, abstracting away the underlying hardware and file system details.

2.  **What are the standard file descriptors and what are they typically used for?**
    *   **Answer:** The standard file descriptors are:
        *   `0` (stdin): Standard input (typically the keyboard).
        *   `1` (stdout): Standard output (typically the terminal/console).
        *   `2` (stderr): Standard error (typically the terminal/console).

3.  **Write a C code snippet that opens a file named "test.txt" in read-only mode and prints its file descriptor. Handle potential errors.**
    *   **Answer:**

    ```c
    #include <stdio.h>
    #include <fcntl.h>
    #include <unistd.h>
    #include <stdlib.h>

    int main() {
        int fd = open("test.txt", O_RDONLY);
        if (fd == -1) {
            perror("Error opening file");
            return 1; // Indicate an error
        }
        printf("File descriptor: %d\n", fd);
        close(fd);
        return 0;
    }
    ```

4.  **Explain the difference between a file descriptor and a file pointer (FILE*). Provide a situation where you might prefer to use file descriptors over FILE* and vice versa.**
    *   **Answer:** File descriptors are low-level integer handles managed by the kernel, while file pointers (FILE*) are higher-level abstractions provided by the C standard library.
        *   *Use file descriptors when:* You need direct control over low-level I/O operations, or when interacting with system calls directly (e.g., when working with sockets or pipes).
        *   *Use FILE* when:* You want to use the standard C library's buffering and formatting capabilities (e.g., `printf`, `scanf`, `fread`, `fwrite`) for simpler and more portable file I/O.  Also, FILE* is often easier to use for simple file reading/writing.

5.  **What happens when you `dup()` a file descriptor? How are the file offsets affected?**
    *   **Answer:** `dup()` creates a new file descriptor that refers to the *same* underlying file object as the original file descriptor. Both file descriptors point to the same entry in the system-wide file table.  Therefore, they *share* the same file offset (read/write pointer).  If you move the file offset using one file descriptor (e.g., by reading from the file), the offset will also change for the other file descriptor because they both point to the same underlying file.
