---
title: "(e) Number of processes forked since the last bootup. How do you compare this value with the one in (c) above?"
subject: "OPERATING SYSTEMS LAB"
module: "Module 2: Use /proc file system to gather basic information about your machine: (a) Number of CPU cores"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b486"
status: "completed"
scrapedAt: "2026-05-20T16:14:49.020Z"
---
# OPERATING SYSTEMS LAB - Module 2: /proc File System - Topic (e) Processes Forked Since Boot

**Topic:** (e) Number of processes forked since the last bootup. How do you compare this value with the one in (c) above?

**Module:** Module 2: Use /proc file system to gather basic information about your machine.

**Subject:** OPERATING SYSTEMS LAB

**Learning Outcomes:**

*   Understand the significance of the `/proc` filesystem.
*   Locate and extract information about the number of processes forked since the last bootup.
*   Compare the number of forked processes with the number of currently running processes.
*   Interpret the differences between these two metrics.
*   Understand the relationship between processes, forking, and system performance.

## 1. Introduction to the `/proc` Filesystem

*   **Definition:** The `/proc` filesystem is a virtual, dynamically generated filesystem that provides a window into the kernel's data structures and the processes running on the system. It's not stored on a physical disk.

*   **Purpose:**
    *   Provides real-time information about the system's state.
    *   Allows users and applications to monitor and interact with the kernel.
    *   Facilitates debugging and system analysis.

*   **Key Features:**
    *   Contains directories and files that represent various system components and processes.
    *   Files are typically read-only and contain text-based data.
    *   Contents are dynamically generated whenever accessed.

*   **Why is it useful for this task?** `/proc` is a central repository of system information.  The information on processes forked since boot is directly available through a specific file in the `/proc` filesystem, eliminating the need for complex system calls or external tools.

## 2. Locating the Number of Processes Forked Since Boot

*   **File Location:** The number of processes forked since the last bootup is typically found in the `/proc/stat` file.

*   **File Content:** The `/proc/stat` file contains various kernel statistics, including CPU usage, disk I/O, and process creation.

*   **Relevant Statistic:**  The line starting with "processes" in `/proc/stat` shows the total number of processes created since the system booted.

*   **Accessing the Information:** You can use the `cat` command or other text processing utilities like `grep` and `awk` to extract this information.

**Example:**

```bash
cat /proc/stat | grep processes
```

This command will output a line similar to:

```
processes 12345
```

In this example, `12345` is the number of processes forked since the last boot.

## 3. Retrieving the Number of Currently Running Processes (Recap from Topic c)

*   While this topic focuses on forked processes, understanding the number of currently running processes is crucial for comparison.
*   **How to find (Recap):** You can use commands like `ps`, `top`, or `htop` to list the currently running processes.
*   **Direct approach for count:** A quick way to get the count is using `ps -e | wc -l`. Note: This counts the header row as well, so subtract 1.
*   **Indirect Approach:**  You might be able to find the number of currently running processes within the `/proc` filesystem by counting the number of directories corresponding to process IDs (PIDs).  Each PID directory represents a running process.  However, this method is less reliable due to transient processes.

## 4. Comparing Forked Processes with Currently Running Processes

*   **Key Difference:**
    *   **Forked Processes:** Represent the total number of processes *created* since the last boot.
    *   **Currently Running Processes:** Represent the number of processes that are *currently active* (i.e., not terminated or waiting).

*   **Interpretation:**

    *   The number of forked processes will always be greater than or equal to the number of currently running processes.
    *   The difference between these two values indicates the number of processes that have been created and subsequently terminated (either normally or abnormally) since the last boot.  This includes processes that exited successfully, crashed, or were killed.
    *   A large difference suggests a high churn rate of processes (processes being created and destroyed frequently). This could be normal (e.g., web server handling many requests) or indicate potential issues (e.g., frequently crashing applications).

*   **Example:**

    *   Forked Processes: 10000
    *   Currently Running Processes: 100
    *   Difference: 9900.  This suggests that 9900 processes have been created and terminated since the boot.

## 5. Significance of Process Forking and System Performance

*   **Process Forking:**  The primary mechanism for creating new processes in Unix-like operating systems. The `fork()` system call creates a duplicate of the calling process (the parent process). The new process (the child process) then typically executes a different program using the `exec()` family of system calls.

*   **Impact on System Performance:**

    *   **Resource Consumption:** Each process consumes system resources (CPU time, memory, file handles, etc.).
    *   **Context Switching:**  Switching between processes incurs overhead (saving and restoring process state).
    *   **Too many running processes:**  Can lead to system slowdowns due to resource contention and increased context switching.
    *   **Excessive Forking:**  Frequent forking (even if processes quickly terminate) can still put a strain on the system due to the overhead of process creation.  Consider the fork bomb vulnerability as an extreme example.

*   **Monitoring Process Forking:** Tracking the number of processes forked can help identify potential performance bottlenecks or issues. For example, a sudden spike in forked processes might indicate a problem with an application that is repeatedly crashing and restarting.

## 6. Important Points to Remember

*   `/proc` is a virtual filesystem, so its contents are generated dynamically.
*   The "processes" entry in `/proc/stat` is a cumulative counter that only resets on reboot.
*   The difference between forked processes and currently running processes reflects the number of terminated processes.
*   High process churn can negatively impact system performance.
*   Understanding process forking is fundamental to understanding how Unix-like operating systems work.

## 7. Practice Questions and Exercises

**Question 1:**

*   How would you determine the number of processes forked since the last boot using command-line tools?

**Answer:**

```bash
cat /proc/stat | grep processes
```

**Question 2:**

*   What does the difference between the number of processes forked since the last boot and the number of currently running processes indicate?

**Answer:**

The difference indicates the number of processes that have been created and subsequently terminated (either normally or abnormally) since the last boot.

**Question 3:**

*   If the number of processes forked since the last boot is significantly higher than the number of currently running processes, what might this suggest?

**Answer:**

This suggests a high churn rate of processes, indicating that many processes are being created and terminated frequently. This could be normal behavior, but it could also indicate potential issues such as an application crashing and restarting repeatedly, or a misconfigured service.

**Question 4:**

*   Explain why `/proc` is called a virtual filesystem.

**Answer:**

`/proc` is called a virtual filesystem because its contents are not stored on a physical disk. Instead, the kernel generates the files and directories on demand based on the current state of the system.

**Exercise 1:**

1.  Write a shell script that outputs the number of processes forked since the last boot.
2.  Modify the script to also output the number of currently running processes.
3.  Calculate and display the difference between the two values.

**Example Script (Exercise 1):**

```bash
#!/bin/bash

# Get the number of processes forked since boot
forked_processes=$(cat /proc/stat | grep processes | awk '{print $2}')

# Get the number of currently running processes
running_processes=$(ps -e | wc -l)
running_processes=$((running_processes - 1)) # Account for the header row in ps

# Calculate the difference
difference=$((forked_processes - running_processes))

# Output the results
echo "Processes Forked Since Boot: $forked_processes"
echo "Currently Running Processes: $running_processes"
echo "Difference: $difference"
```

**Explanation of the Script:**

*   `#!/bin/bash`:  Shebang line, specifies the interpreter for the script.
*   `forked_processes=$(cat /proc/stat | grep processes | awk '{print $2}')`:  Gets the number of forked processes from `/proc/stat` using `cat`, `grep`, and `awk`.  `awk '{print $2}'` extracts the second field (the number) from the `grep` output.
*   `running_processes=$(ps -e | wc -l)`: Gets the total number of lines returned by ps -e.
*   `running_processes=$((running_processes - 1))`: Decrements by 1 to account for the `ps` header row.
*   `difference=$((forked_processes - running_processes))`:  Calculates the difference between the two values.
*   `echo ...`:  Prints the results.

**Exercise 2:**

Run the script from Exercise 1.  Then, start and stop a CPU-intensive program (e.g., `yes > /dev/null & sleep 5; killall yes`). Rerun the script and observe the changes in the number of processes forked since boot and the difference.

This exercise helps solidify the understanding of how process creation and termination affects the `/proc/stat` values.
