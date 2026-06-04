---
title: "(b) Total memory and the fraction of free memory"
subject: "OPERATING SYSTEMS LAB"
module: "Module 2: Use /proc file system to gather basic information about your machine: (a) Number of CPU cores"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b483"
status: "completed"
scrapedAt: "2026-05-20T16:14:46.895Z"
---
# Operating Systems Lab: Module 2 - /proc Filesystem & Memory Information

**Topic:** Total Memory and the Fraction of Free Memory

**Module:** Use /proc file system to gather basic information about your machine: (a) Number of CPU cores; (b) Total memory and the fraction of free memory.

**Subject:** Operating Systems Lab

**Learning Outcomes:**

*   Understand the /proc filesystem and its role in exposing kernel information.
*   Learn how to access memory information using specific files within the /proc filesystem.
*   Be able to extract total memory and free memory values from the /proc/meminfo file.
*   Calculate the fraction of free memory based on extracted values.
*   Demonstrate the ability to write simple shell scripts to automate memory information retrieval.

## 1. Introduction to the /proc Filesystem

*   **What is /proc?**  The `/proc` filesystem is a pseudo-filesystem on Linux systems. It doesn't store actual data on a disk.  Instead, it dynamically generates information about the kernel and running processes whenever a file within `/proc` is accessed.

*   **Key Concepts:**

    *   **Pseudo-filesystem:**  A filesystem that doesn't store persistent data on physical storage.
    *   **Kernel Space:** The privileged memory space where the operating system kernel executes.  `/proc` provides a window into the kernel's state.
    *   **User Space:** The memory space where user-level applications execute.
    *   **Virtual Files:** The files in `/proc` are virtual; they are created on-the-fly when accessed.
    *   **Read-Only (Mostly):** Most files within `/proc` are read-only from the user's perspective.  Some files (typically under `/proc/sys`) can be written to configure kernel parameters.

*   **Purpose:** The `/proc` filesystem is a central place for system information and process management. It provides a convenient and standardized interface for applications to access kernel data.

*   **Location:**  It is typically mounted at `/proc`. You can view it like any other directory in your filesystem, but remember its unique nature.

*   **How to Access:** Use standard file system commands like `cat`, `less`, `grep`, etc. to access the information within the files.

## 2. Accessing Memory Information using /proc/meminfo

*   **The /proc/meminfo File:** The `/proc/meminfo` file contains detailed information about the system's memory usage.  This includes total memory, free memory, buffers, cached memory, swap space, and other related metrics.

*   **Structure of /proc/meminfo:** The file consists of key-value pairs, each on a separate line.  The key indicates the memory metric (e.g., `MemTotal`, `MemFree`), and the value represents the quantity (usually in kilobytes - kB).

*   **Key Memory Metrics:**

    *   **`MemTotal:`**  Total amount of physical RAM installed in the system (in kB).  This represents the total memory accessible to the kernel.
    *   **`MemFree:`** Amount of free or unused physical RAM (in kB). This is the memory currently not being used by any application or the kernel.
    *   **`MemAvailable:`** An estimate of how much memory is available for starting new applications, without swapping.  This is generally a more useful metric than `MemFree` because it takes into account memory used for caches and buffers that can be quickly freed if needed.
    *   **`Buffers:`** Memory used for file system metadata (e.g., directory information). This memory can be reclaimed if needed.
    *   **`Cached:`** Memory used to cache data from files. This memory can be reclaimed if needed.
    *   **`SwapTotal:`**  Total amount of swap space available (in kB).  Swap space is used as virtual memory when physical RAM is exhausted.
    *   **`SwapFree:`**  Amount of free swap space available (in kB).

*   **Example /proc/meminfo Contents (Simplified):**

    ```
    MemTotal:        8164032 kB
    MemFree:         1234567 kB
    MemAvailable:    4567890 kB
    Buffers:          12345 kB
    Cached:         2345678 kB
    SwapTotal:        2097152 kB
    SwapFree:         2097152 kB
    ```

## 3. Extracting Total and Free Memory

*   **Using `cat` and `grep`:** We can use the `cat` command to view the contents of `/proc/meminfo` and the `grep` command to filter for specific lines containing `MemTotal` and `MemFree`.

    ```bash
    cat /proc/meminfo | grep MemTotal
    cat /proc/meminfo | grep MemFree
    ```

*   **Using `awk` to extract the value:**  We can use `awk` to further extract only the numerical value (in kB) from the output of `grep`.  `awk` is a powerful text processing tool.

    ```bash
    MemTotal=$(cat /proc/meminfo | grep MemTotal | awk '{print $2}')
    MemFree=$(cat /proc/meminfo | grep MemFree | awk '{print $2}')

    echo "Total Memory: $MemTotal kB"
    echo "Free Memory: $MemFree kB"
    ```

*   **Explanation:**
    *   `cat /proc/meminfo | grep MemTotal` -  This pipes the output of `cat /proc/meminfo` (the entire content of `/proc/meminfo`) to `grep MemTotal`. `grep` then filters and outputs only the line containing "MemTotal".
    *   `awk '{print $2}'` - This takes the output from `grep` and passes it to `awk`. `awk` splits the line into fields (separated by spaces) and prints the second field (`$2`), which is the numerical value.
    *   `MemTotal=$(...)` - This uses command substitution to capture the output of the entire command pipeline and assign it to the `MemTotal` variable.

## 4. Calculating the Fraction of Free Memory

*   **Formula:**  The fraction of free memory is calculated as:

    `Fraction of Free Memory = MemFree / MemTotal`

*   **Shell Script Example:**

    ```bash
    #!/bin/bash

    # Get total and free memory in kB
    MemTotal=$(cat /proc/meminfo | grep MemTotal | awk '{print $2}')
    MemFree=$(cat /proc/meminfo | grep MemFree | awk '{print $2}')

    # Calculate the fraction of free memory
    Fraction=$(echo "scale=4; $MemFree / $MemTotal" | bc) # Use bc for floating-point arithmetic

    # Display the results
    echo "Total Memory: $MemTotal kB"
    echo "Free Memory: $MemFree kB"
    echo "Fraction of Free Memory: $Fraction"
    ```

*   **Explanation:**

    *   `scale=4` in `bc` sets the precision to 4 decimal places.  This ensures a more accurate result.
    *   `bc` is the "basic calculator" command-line utility.  It's necessary for performing floating-point arithmetic in the shell. Without `bc`, shell arithmetic defaults to integer arithmetic, leading to inaccurate fraction calculation.
    *   The `echo` command pipes the expression `$MemFree / $MemTotal` to `bc` for evaluation.

*   **Important:** Remember to make the script executable: `chmod +x script_name.sh`

## 5. Practice Questions and Exercises

1.  **Question:** What is the purpose of the `/proc` filesystem?

    **Answer:** To expose kernel information and process information to user-space applications in a standardized way.  It is a pseudo-filesystem that dynamically generates data when accessed.

2.  **Exercise:** Write a script to display the total memory, free memory, and memory available (MemAvailable) in MB instead of kB.

    **Solution:**

    ```bash
    #!/bin/bash

    # Get memory values in kB
    MemTotal_kB=$(cat /proc/meminfo | grep MemTotal | awk '{print $2}')
    MemFree_kB=$(cat /proc/meminfo | grep MemFree | awk '{print $2}')
    MemAvailable_kB=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')

    # Convert to MB
    MemTotal_MB=$(echo "scale=2; $MemTotal_kB / 1024" | bc)
    MemFree_MB=$(echo "scale=2; $MemFree_kB / 1024" | bc)
    MemAvailable_MB=$(echo "scale=2; $MemAvailable_kB / 1024" | bc)

    # Display the results
    echo "Total Memory: $MemTotal_MB MB"
    echo "Free Memory: $MemFree_MB MB"
    echo "Memory Available: $MemAvailable_MB MB"
    ```

3.  **Question:** Why is `MemAvailable` often a more useful metric than `MemFree`?

    **Answer:** Because `MemAvailable` takes into account memory used for caches and buffers that can be quickly freed if needed by new applications.  `MemFree` only represents truly unused memory.

4.  **Exercise:** Modify the script from Exercise 2 to also calculate and display the percentage of total memory that is free.

    **Solution:**

    ```bash
    #!/bin/bash

    # Get memory values in kB
    MemTotal_kB=$(cat /proc/meminfo | grep MemTotal | awk '{print $2}')
    MemFree_kB=$(cat /proc/meminfo | grep MemFree | awk '{print $2}')

    # Convert to MB
    MemTotal_MB=$(echo "scale=2; $MemTotal_kB / 1024" | bc)
    MemFree_MB=$(echo "scale=2; $MemFree_kB / 1024" | bc)

    # Calculate percentage of free memory
    PercentageFree=$(echo "scale=2; ($MemFree_kB / $MemTotal_kB) * 100" | bc)

    # Display the results
    echo "Total Memory: $MemTotal_MB MB"
    echo "Free Memory: $MemFree_MB MB"
    echo "Percentage of Free Memory: $PercentageFree%"
    ```

5.  **Question:** What command is essential for performing accurate floating point calculations in shell scripts?

    **Answer:** `bc`

## 6. Important Points to Remember

*   The `/proc` filesystem is dynamic and its contents reflect the current state of the kernel.
*   `/proc/meminfo` is the primary source of memory information.
*   Memory values are usually reported in kilobytes (kB). You may need to convert them to MB or GB.
*   Use `bc` for floating-point arithmetic in shell scripts to ensure accurate calculations.
*   `MemAvailable` is a better indicator of available memory for new applications than `MemFree`.
*   Always make your scripts executable using `chmod +x script_name.sh`.
*   The output of `/proc/meminfo` and the specific metrics reported can vary slightly depending on the Linux distribution and kernel version. However, the core metrics (MemTotal, MemFree, MemAvailable) are usually consistent.
