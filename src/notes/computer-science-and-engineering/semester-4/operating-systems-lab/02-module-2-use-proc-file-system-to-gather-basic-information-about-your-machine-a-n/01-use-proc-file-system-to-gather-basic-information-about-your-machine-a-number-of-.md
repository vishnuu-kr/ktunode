---
title: "Use /proc file system to gather basic information about your machine: (a) Number of CPU cores"
subject: "OPERATING SYSTEMS LAB"
module: "Module 2: Use /proc file system to gather basic information about your machine: (a) Number of CPU cores"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b482"
status: "completed"
scrapedAt: "2026-05-20T16:14:46.182Z"
---
## OPERATING SYSTEMS LAB - Module 2: /proc File System - CPU Core Count

**Topic:** Use /proc file system to gather basic information about your machine: (a) Number of CPU cores

**Description:** Learn how to use the `/proc` file system in Linux to determine the number of CPU cores available on your system.

**Learning Outcomes:**

*   Understand the role and purpose of the `/proc` file system in Linux.
*   Identify the specific file within `/proc` that contains CPU information.
*   Write a script (using shell commands) to extract the CPU core count from the relevant file.
*   Explain the difference between CPU cores, processors, and threads (hyper-threading).
*   Interpret the output obtained from the `/proc` file system and relate it to the physical CPU configuration.

---

### 1. Introduction to the `/proc` File System

*   **Definition:** The `/proc` file system is a virtual file system in Linux that provides a dynamically updated interface to kernel data structures.  It doesn't contain "real" files stored on disk, but rather presents information about running processes, hardware configuration, and other kernel internals.
*   **Purpose:** It allows userspace programs (like the ones you write in your shell scripts) to inspect and, in some limited cases, control the kernel's behavior. It acts as an information portal.
*   **Key Characteristics:**
    *   **Virtual:** Data is generated on-the-fly when you access a file in `/proc`.
    *   **Dynamic:**  Information is constantly updated as the system changes (processes start/stop, CPU usage fluctuates, etc.).
    *   **Read-only (mostly):** Generally, you'll be reading information from `/proc`, not writing to it. Some files allow writing for specific control actions, but caution is advised.
*   **Importance in System Administration:** Essential for system monitoring, performance tuning, and troubleshooting.

### 2. Identifying the Relevant File for CPU Information

*   The primary file for CPU information is `/proc/cpuinfo`.
*   **Content of `/proc/cpuinfo`:** Contains detailed information about each logical CPU core in the system.  It includes details like:
    *   `processor`:  The logical processor ID (starting from 0).
    *   `cpu family`:  The CPU family.
    *   `model`:  The CPU model.
    *   `model name`:  A more descriptive name of the CPU.
    *   `stepping`:  The CPU stepping (revision).
    *   `cpu MHz`:  The CPU clock speed.
    *   `cache size`:  The CPU cache size.
    *   `flags`:  CPU features (e.g., `mmx`, `sse`, `avx`).
*   **Finding the CPU Core Count:** We need to analyze the `/proc/cpuinfo` file and count the number of distinct `processor` entries.  Each `processor` entry represents a logical CPU.  If hyper-threading is enabled, the number of logical CPUs will be greater than the number of physical cores.

### 3. Scripting to Extract the CPU Core Count

*   **Using `grep` and `wc`:** We can use `grep` to filter lines containing "processor" and `wc -l` to count the number of lines.
    ```bash
    #!/bin/bash

    # Count the number of lines containing "processor" in /proc/cpuinfo
    cpu_count=$(grep -c processor /proc/cpuinfo)

    # Display the CPU core count
    echo "Number of CPU cores (logical): $cpu_count"
    ```
    **Explanation:**
    *   `grep -c processor /proc/cpuinfo`:  `grep` searches `/proc/cpuinfo` for lines containing the string "processor".  The `-c` option tells `grep` to output only the *count* of matching lines, not the lines themselves.
    *   `cpu_count=$(...)`: This is command substitution. The output of the command inside the parentheses is captured and assigned to the variable `cpu_count`.
    *   `echo "Number of CPU cores (logical): $cpu_count"`:  Prints the CPU core count to the console.
*   **Alternative using `awk`:** `awk` can be more flexible for parsing.
    ```bash
    #!/bin/bash

    cpu_count=$(awk '/^processor/ {count++} END {print count}' /proc/cpuinfo)

    echo "Number of CPU cores (logical): $cpu_count"
    ```

    **Explanation:**
    * `awk '/^processor/ {count++} END {print count}' /proc/cpuinfo`: This uses awk to count occurrences.
    * `/^processor/`: This is a regular expression that matches lines starting with "processor". The `^` symbol denotes the beginning of the line.
    * `{count++}`: For each line that matches the pattern, the `count` variable is incremented.
    * `END {print count}`:  After processing the entire file, the `END` block is executed, printing the final value of `count`.
*   **Running the Script:**
    1.  Save the script to a file (e.g., `cpu_count.sh`).
    2.  Make the script executable: `chmod +x cpu_count.sh`.
    3.  Run the script: `./cpu_count.sh`.
*   **Important Considerations:**  The count obtained using these scripts represents the *logical* CPU cores. If hyper-threading is enabled, this will be double the number of *physical* cores.

### 4.  CPU Cores, Processors, and Threads (Hyper-Threading)

*   **CPU Core:**  A physical processing unit within a CPU. Each core can independently execute instructions.
*   **Processor:**  Sometimes used synonymously with CPU, but can also refer to the entire CPU chip which might contain multiple cores.  It's better to be specific (multi-core processor).
*   **Hyper-Threading (Simultaneous Multithreading - SMT):** A technology that allows a single physical CPU core to appear as two logical cores to the operating system. This allows the core to switch between two different threads of execution rapidly, improving overall throughput.  It does *not* double the processing power of the core, but it can provide a performance boost, especially when dealing with workloads that have a lot of waiting (e.g., waiting for I/O).

*   **Distinguishing Physical vs. Logical Cores:** Determining the number of *physical* cores from `/proc/cpuinfo` directly is slightly more complex. You can examine the `core id` field.  All entries with the same `core id` belong to the same physical core. You'd need to write a more sophisticated script to extract the unique `core id` values and count them. However, there are other methods outside of `/proc/cpuinfo` that are more reliable. For example, `lscpu` command is helpful for getting details on number of sockets, cores and threads per socket.

    ```bash
    lscpu | grep "Core(s) per socket:"
    lscpu | grep "Socket(s):"
    ```

### 5. Interpreting the Output and Relating to Physical CPU Configuration

*   **Example Output:**  Let's say the script returns `Number of CPU cores (logical): 8`.
*   **Possible Interpretations:**
    *   The system has 8 physical CPU cores *without* hyper-threading.
    *   The system has 4 physical CPU cores *with* hyper-threading enabled (4 cores * 2 threads/core = 8 logical cores).
*   **Verification:**  To determine the *actual* physical core count, you'll often need to consult the CPU's specifications (e.g., from the manufacturer's website). Commands like `lscpu` provides clearer information than parsing `/proc/cpuinfo`

### Practice Questions/Exercises:

1.  **Question:** Write a script that prints the model name of the CPU as reported in `/proc/cpuinfo`.
    **Answer:**
    ```bash
    #!/bin/bash
    cpu_model=$(grep "model name" /proc/cpuinfo | head -n 1 | awk -F: '{print $2}' | tr -d ' ')
    echo "CPU Model: $cpu_model"
    ```
    **Explanation:**
    * `grep "model name" /proc/cpuinfo`: Filters lines that contain the string "model name".
    * `head -n 1`: Displays only the first matching line (since it will repeat for each logical CPU).
    * `awk -F: '{print $2}'`:  Uses `awk` to split the line at the colon (`:`) and print the second field (the CPU model).
    * `tr -d ' '`: Remove leading and trailing whitespaces using `tr` command

2.  **Question:** Modify the script to also print the CPU clock speed.
    **Answer:**
    ```bash
    #!/bin/bash
    cpu_model=$(grep "model name" /proc/cpuinfo | head -n 1 | awk -F: '{print $2}' | tr -d ' ')
    cpu_speed=$(grep "cpu MHz" /proc/cpuinfo | head -n 1 | awk -F: '{print $2}' | tr -d ' ')

    echo "CPU Model: $cpu_model"
    echo "CPU Speed: $cpu_speed MHz"
    ```

3.  **Question:** Explain why simply dividing the logical CPU count by 2 might *not* always give you the correct number of physical cores.
    **Answer:** Hyper-Threading may be disabled or not supported.  The system may also have more than one CPU socket with multiple cores in each socket.  A single system can have multiple physical CPUs and each of those CPUs can have multiple cores.

4. **Question:** Use `lscpu` command to print the number of sockets, cores per socket, and threads per core.

    **Answer:**
    ```bash
    lscpu | grep "Socket(s):"
    lscpu | grep "Core(s) per socket:"
    lscpu | grep "Thread(s) per core:"
    ```

---

### Important Points to Remember

*   `/proc` is a virtual file system, not a physical one.
*   The information in `/proc` is dynamic and reflects the current state of the system.
*   The `/proc/cpuinfo` file provides detailed information about each logical CPU.
*   The number of entries in `/proc/cpuinfo` for "processor" indicates the number of logical cores.
*   Distinguish between physical cores, logical cores (hyper-threading), and the CPU or Processor (the physical chip).
*   Use `lscpu` command whenever possible. Parsing `/proc/cpuinfo` directly is usually avoided due to the command line utility providing a simpler, easier to understand, output.
*   Use caution when writing to files in `/proc`, as incorrect modifications can destabilize the system.  (This module focuses on reading, not writing).
