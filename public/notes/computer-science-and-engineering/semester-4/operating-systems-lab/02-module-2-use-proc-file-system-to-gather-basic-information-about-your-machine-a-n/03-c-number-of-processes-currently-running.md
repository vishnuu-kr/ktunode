---
title: "(c) Number of processes currently running."
subject: "OPERATING SYSTEMS LAB"
module: "Module 2: Use /proc file system to gather basic information about your machine: (a) Number of CPU cores"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b484"
status: "completed"
scrapedAt: "2026-05-20T16:14:47.604Z"
---
# Operating Systems Lab: Module 2 - /proc File System (c) Number of Running Processes

**Subject:** OPERATING SYSTEMS LAB
**Module:** Module 2: Use /proc file system to gather basic information about your machine
**Topic:** (c) Number of processes currently running
**Description:**  Using the `/proc` file system to determine the number of processes currently running on the system.

**Learning Outcomes:**

*   Understand the `/proc` file system and its purpose.
*   Learn how to use the `/proc` file system to determine the number of currently running processes.
*   Be able to write a simple shell script or C program to automate the process of counting running processes.
*   Understand different methods for counting processes and their relative advantages/disadvantages.

## 1. Introduction to the `/proc` File System

*   **Definition:** The `/proc` file system (also known as the process information pseudo-file system) is a virtual file system dynamically created by the kernel. It doesn't contain actual files stored on a disk but exposes kernel data structures in a hierarchical file-like structure.

*   **Purpose:**  It provides a mechanism for user-space programs to access information about the kernel and processes running on the system.

*   **Key Characteristics:**
    *   **Virtual:** Data is generated on-demand when accessed.
    *   **Dynamic:**  Contents change as the system state changes.
    *   **Hierarchical:** Organized in a directory structure.
    *   **Read-only (mostly):**  Primarily used for reading system information, although some files allow writing to control specific kernel parameters.

*   **Structure:**
    *   Each process running on the system gets its own directory named after its Process ID (PID).  For example, `/proc/1234` represents information about the process with PID 1234.
    *   Within each PID directory, there are files containing information about the process (e.g., `status`, `cmdline`, `mem`).
    *   Root-level files provide system-wide information (e.g., `cpuinfo`, `meminfo`).

## 2. Determining the Number of Running Processes

There are several ways to determine the number of running processes using the `/proc` file system:

**Method 1: Counting PID Directories Directly**

*   **Concept:** Count the number of directories in `/proc` that represent process IDs (i.e., directories consisting only of digits).
*   **Command (using `ls` and `wc`):**

    ```bash
    ls -d /proc/[0-9]* | wc -l
    ```

    *   `ls -d /proc/[0-9]*`: Lists directories in `/proc` that start with a digit. The `-d` option ensures that only directories are listed, not the contents of the directories.  `[0-9]*` is a wildcard that matches any directory name that consists of one or more digits.
    *   `wc -l`: Counts the number of lines in the output of `ls -d /proc/[0-9]*`, which represents the number of process directories.

*   **Explanation:** This method relies on the assumption that each directory starting with a digit in `/proc` corresponds to a running process.  This is generally accurate, but system processes (kernel threads) might exist without corresponding directories in /proc.

**Method 2: Using `ps` Command**

*   **Concept:** The `ps` (process status) command is a standard utility for displaying information about running processes.
*   **Command:**

    ```bash
    ps -ef | wc -l
    ```

    *   `ps -ef`:  Displays all processes currently running on the system (equivalent to `ps aux` in some systems). The `-e` option selects all processes. The `-f` option provides a full listing.
    *   `wc -l`: Counts the number of lines in the output of `ps -ef`. This count *includes* the header line output by `ps`.

*   **Adjusting for the Header Row:**
    To get the accurate number of processes, subtract 1 from the output of the above command:

    ```bash
    expr $(ps -ef | wc -l) - 1
    ```

    *   `expr`:  A utility for evaluating arithmetic expressions.
    *   `$(...)`:  Command substitution; the output of the command within the parentheses is substituted into the command.

*   **Alternative using `ps` and `grep`:**
    ```bash
    ps -e | grep -v PID | wc -l
    ```
    *   `ps -e`: Lists all processes.
    *   `grep -v PID`:  Filters out the line containing "PID" (the header line).
    *   `wc -l`: Counts the remaining lines, representing the number of processes.

**Method 3: Using `top` or `htop` (Interactive Monitoring)**

*   **Concept:** `top` and `htop` are interactive process monitoring tools that provide real-time information about system resource usage and running processes.
*   **Usage:** Run `top` or `htop` in a terminal. The number of running processes is typically displayed in the header section of the output. These tools provide a dynamic view that updates in real-time. This is useful for visually observing the number of processes and their characteristics.

**Method 4: Writing a C Program (More Advanced)**

*   **Concept:** Use C programming with directory traversal techniques to count the number of PID directories under `/proc`.

```c
#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <ctype.h>

int main() {
  DIR *dir;
  struct dirent *entry;
  int process_count = 0;

  dir = opendir("/proc");
  if (dir == NULL) {
    perror("opendir");
    return 1;
  }

  while ((entry = readdir(dir)) != NULL) {
    if (isdigit(entry->d_name[0])) {
      process_count++;
    }
  }

  closedir(dir);
  printf("Number of processes: %d\n", process_count);

  return 0;
}
```

*   **Explanation of C Code:**
    1.  **Include Headers:**  Includes necessary headers for directory operations (`dirent.h`), standard input/output (`stdio.h`), standard library functions (`stdlib.h`), and character testing (`ctype.h`).
    2.  **Open Directory:** `opendir("/proc")` opens the `/proc` directory.  Error handling is included to check if the directory could be opened.
    3.  **Read Directory Entries:**  `readdir(dir)` reads each entry (file or subdirectory) in the `/proc` directory.
    4.  **Check for Digit:**  `isdigit(entry->d_name[0])` checks if the first character of the directory entry's name is a digit. If it is, it's assumed to be a PID directory.
    5.  **Increment Count:** If the entry is a PID directory, the `process_count` is incremented.
    6.  **Close Directory:**  `closedir(dir)` closes the directory stream.
    7.  **Print Result:** Prints the final `process_count`.

*   **Compilation:**  `gcc count_processes.c -o count_processes`
*   **Execution:**  `./count_processes`

## 3. Comparison of Methods

| Method                      | Advantages                                             | Disadvantages                                                    |
| --------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| `ls -d /proc/[0-9]* | wc -l`      | Simple, one-liner                                     | May be less accurate (system processes without PID directories) |
| `ps -ef | wc -l`           | Uses a standard utility (`ps`)                         | Requires subtracting the header line to get an accurate count   |
| `top` or `htop`            | Provides real-time monitoring, user-friendly interface   | Interactive; not suitable for scripting or automation           |
| C program                 | Most accurate, avoids header issues                      | Requires C programming knowledge, more complex                  |

## 4. Key Concepts and Definitions

*   **Process:** An instance of a program in execution. Each process has its own memory space, resources, and PID.
*   **PID (Process ID):**  A unique numerical identifier assigned to each process by the operating system.
*   **Kernel Threads:** Lightweight processes managed directly by the kernel. They may not always have a corresponding directory in /proc.
*   **User Space vs. Kernel Space:** User space is where applications run, while kernel space is where the operating system kernel runs. The `/proc` file system bridges the gap between these two spaces, allowing user-space programs to access kernel information.

## 5. Important Points to Remember

*   The `/proc` file system is a virtual file system; the data is dynamically generated.
*   The number of running processes can vary rapidly.
*   Different methods for counting processes may yield slightly different results due to how system processes are handled.
*   The `/proc` file system is a powerful tool for understanding the state of your system.
*   Always handle directory and file operations with care, especially when dealing with system-level information.

## 6. Practice Questions/Exercises

**Question 1:**  Explain the purpose of the `/proc` file system.

**Answer:** The `/proc` file system is a virtual file system that exposes kernel data structures as a hierarchical file-like structure, allowing user-space programs to access information about the kernel and processes running on the system.

**Question 2:** Why might the `ls -d /proc/[0-9]* | wc -l` command not give the exact number of processes running?

**Answer:** It might not give the exact number because some system processes (kernel threads) may not have corresponding directories in `/proc`.

**Question 3:** How can you modify the `ps -ef | wc -l` command to get the correct number of processes running without including the header line?

**Answer:** You can use `expr $(ps -ef | wc -l) - 1` or `ps -e | grep -v PID | wc -l`.

**Question 4:** Write a shell script that takes a process name as input and prints its PID. If the process is not running, it should print "Process not found".

**Answer:**

```bash
#!/bin/bash

process_name="$1"

pid=$(pgrep "$process_name")

if [ -z "$pid" ]; then
  echo "Process not found"
else
  echo "PID: $pid"
fi
```

**Question 5:** Why is it important to close the directory stream after opening it with `opendir()` in the C program?

**Answer:** Failing to close the directory stream with `closedir()` can lead to resource leaks, potentially exhausting system resources and causing instability.  It's good programming practice to always close resources that have been opened.
