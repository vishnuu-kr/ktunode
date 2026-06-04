---
title: "Write a simple program to print the system time and execute it. Then use the / proc file system to determine how long this program (in the strict sense, the corresponding process) ran in user and kernel modes."
subject: "OPERATING SYSTEMS LAB"
module: "Module 3: Write a simple program to print the system time and execute it. Then use the / proc file system to determine how long this program (in the strict sense, the corresponding process) ran in user and kernel modes."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b489"
status: "completed"
scrapedAt: "2026-05-20T16:14:50.446Z"
---
## OPERATING SYSTEMS LAB - Module 3: Process Time Measurement using /proc

**Topic:** Write a simple program to print the system time and execute it. Then use the `/proc` file system to determine how long this program (in the strict sense, the corresponding process) ran in user and kernel modes.

**Learning Outcomes:**

*   Understand the concept of user and kernel modes in operating systems.
*   Be able to write a simple program to print the system time in C (or another suitable language).
*   Understand the purpose and structure of the `/proc` file system.
*   Be able to access process-related information from the `/proc` file system.
*   Be able to extract user and kernel time for a specific process using the `/proc` file system.
*   Calculate the user and kernel execution time from the values obtained from `/proc`.

**1. Introduction to User and Kernel Modes**

*   **Definition:** Modern operating systems operate in at least two modes: user mode and kernel mode (also known as supervisor mode). This separation provides security and stability.

*   **Kernel Mode:**
    *   Has unrestricted access to the hardware and system resources.
    *   Executes the core operating system functions, such as interrupt handling, memory management, and process scheduling.
    *   Code running in kernel mode can execute any instruction the CPU is capable of executing.
    *   Typically reserved for trusted code within the OS kernel.

*   **User Mode:**
    *   Has restricted access to the system.  Cannot directly access hardware or sensitive memory regions.
    *   Most applications run in user mode.
    *   System calls are used to request services from the kernel.
    *   If a user-mode program needs to access hardware or perform privileged operations, it must request the kernel to do it on its behalf.

*   **Importance:** This separation prevents user programs from accidentally or intentionally corrupting the operating system or interfering with other processes.

**2. Writing a Simple Program to Print the System Time (C Example)**

```c
#include <stdio.h>
#include <time.h>

int main() {
  time_t rawtime;
  struct tm * timeinfo;

  time ( &rawtime );
  timeinfo = localtime ( &rawtime );

  printf ("Current local time and date: %s", asctime(timeinfo));

  // Simulate some work to have measurable user-mode time
  volatile int i;
  for (i = 0; i < 100000000; i++); // Loop to consume CPU cycles

  return 0;
}
```

*   **Explanation:**
    *   `#include <stdio.h>`:  Provides standard input/output functions like `printf`.
    *   `#include <time.h>`: Provides time-related functions.
    *   `time(&rawtime)`: Gets the current calendar time and stores it in the `rawtime` variable.
    *   `localtime(&rawtime)`: Converts the `rawtime` value to local time.
    *   `asctime(timeinfo)`: Converts the `tm` structure (time information) to a human-readable string.
    *   `printf(...)`: Prints the current time to the console.
    *   The `for` loop is included to simulate some user-mode work. Without it, the program might be too fast for accurate measurement via `/proc`.  The `volatile` keyword prevents the compiler from optimizing the loop away.

*   **Compilation:**  `gcc time_program.c -o time_program`

*   **Execution:**  `./time_program`

**3. Understanding the /proc File System**

*   **Definition:** `/proc` is a pseudo-filesystem in Linux that provides an interface to kernel data structures. It doesn't actually store files on disk; instead, it dynamically creates files on demand to expose information about running processes and the system.

*   **Process-Specific Information:** Each running process has a directory named after its process ID (PID) under `/proc`. For example, if a process has a PID of 1234, its information will be located in `/proc/1234`.

*   **Key Files in /proc/<PID>:**
    *   `/proc/<PID>/stat`:  Contains a wealth of information about the process, including its PID, state, CPU usage (user and kernel time), memory usage, and more. This is the primary file we'll use.
    *   `/proc/<PID>/status`: Contains more human-readable information about the process, including its name, UID, GID, and memory usage.
    *   `/proc/<PID>/cmdline`: Contains the command line used to execute the process.
    *   `/proc/<PID>/cwd`: A symbolic link to the current working directory of the process.

**4. Accessing Process Information from /proc**

*   **Using `cat`:** You can use the `cat` command to view the contents of files under `/proc/<PID>`. For example: `cat /proc/1234/stat`

*   **Using C code (for automation):** The `fopen`, `fscanf`, and `fclose` functions can be used to read data from the `/proc/<PID>/stat` file programmatically.

**5. Extracting User and Kernel Time from /proc/<PID>/stat**

*   **Location of User and Kernel Time:** The `/proc/<PID>/stat` file contains many fields separated by spaces. The user time is located in the 14th field (`utime`), and the kernel time is located in the 15th field (`stime`).  These values represent the time the process has spent in user mode and kernel mode, respectively, *in jiffies*.

*   **Jiffies:** Jiffies are a system-dependent unit of time.  You can determine the number of jiffies per second using the `sysconf(_SC_CLK_TCK)` function or by checking the `/proc/stat` file.

*   **Example `/proc/<PID>/stat` content:**

    ```
    1234 (time_program) S 5678 9012 3456 7890 -1 65536 1234567 8888888 9999999 1111111 2222222 3333 4444 5555 6666 7777 8888 9999 10101010 11111111 12121212 13131313 0 0 0 0 0 0
    ```

    In this example:
    *   PID: 1234
    *   User Time (utime): 3333 jiffies (the 14th field)
    *   Kernel Time (stime): 4444 jiffies (the 15th field)

**6. Calculating User and Kernel Execution Time**

*   **Steps:**
    1.  **Get the PID of the process:**  You can get the PID by running your program and using the `ps` command (e.g., `ps aux | grep time_program`) or programmatically using functions like `getpid()`.
    2.  **Read `utime` and `stime` from `/proc/<PID>/stat`:**  Parse the contents of the `/proc/<PID>/stat` file to extract the values of `utime` and `stime`.
    3.  **Determine jiffies per second:**  Use `sysconf(_SC_CLK_TCK)` to get the number of jiffies per second.
    4.  **Calculate the time in seconds:**

        ```
        User Time (seconds) = utime / jiffies_per_second
        Kernel Time (seconds) = stime / jiffies_per_second
        ```

*   **C Code Example (Complete Program):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    #include <unistd.h>
    #include <sys/types.h>

    int main() {
      time_t rawtime;
      struct tm * timeinfo;
      pid_t pid = getpid();
      long utime, stime, clktck;
      FILE *fp;
      char stat_file_path[50];
      int i;

      time ( &rawtime );
      timeinfo = localtime ( &rawtime );

      printf ("Current local time and date: %s", asctime(timeinfo));

      // Simulate some work to have measurable user-mode time
      volatile int j;
      for (j = 0; j < 100000000; j++); // Loop to consume CPU cycles


      sprintf(stat_file_path, "/proc/%d/stat", pid);
      fp = fopen(stat_file_path, "r");
      if (fp == NULL) {
        perror("Error opening /proc/stat file");
        return 1;
      }

      // Read the necessary fields from /proc/<PID>/stat
      // The important fields (utime, stime) are the 14th and 15th, but we need to read others before them.
      //We only care about utime (14th field) and stime (15th field)
      fscanf(fp, "%*d %*s %*c %*d %*d %*d %*d %*d %*u %*lu %*lu %*lu %*lu %ld %ld", &utime, &stime);
      fclose(fp);

      clktck = sysconf(_SC_CLK_TCK);

      printf("PID: %d\n", pid);
      printf("User Time (jiffies): %ld\n", utime);
      printf("Kernel Time (jiffies): %ld\n", stime);
      printf("Jiffies per second: %ld\n", clktck);
      printf("User Time (seconds): %.6f\n", (double)utime / clktck);
      printf("Kernel Time (seconds): %.6f\n", (double)stime / clktck);

      return 0;
    }
    ```

    *   **Important:** This code uses `fscanf` with `%*d` and `%*s` to skip fields it doesn't need. `%*` means "read and discard."

**7. Important Points to Remember**

*   The `/proc` file system is a virtual file system; it doesn't represent actual files on disk.
*   The values in `/proc/<PID>/stat` are cumulative since the process started. If the process has been running for a long time, the values can be large.
*   The accuracy of the time measurement is limited by the system's clock resolution (jiffies).  Short-running programs might show zero user or kernel time. Increasing the workload inside the program (e.g., by increasing iterations of the loop) can help increase accuracy.
*   Root privileges are usually not required to read files under `/proc/<PID>` for a process owned by the current user. However, accessing information about other user's processes usually requires root privileges.
*   The format of the `/proc/<PID>/stat` file can vary slightly between kernel versions.  Always consult the `proc(5)` man page for the specific kernel version you are using to ensure you are interpreting the data correctly.  You can access this man page by running `man proc` in a terminal.
* The `volatile` keyword prevents the compiler from optimizing the work loop away. This is crucial for measurable results in fast programs.

**8. Practice Questions/Exercises**

1.  **Compile and run the C code example.**  Verify that it prints the current time and calculates the user and kernel time correctly.
    *   **Answer:**  Compile with `gcc time_program.c -o time_program`.  Run with `./time_program`. Check the output to verify the time and the user/kernel time calculations.  Run `man proc` in a separate terminal to understand the fields output in /proc/[pid]/stat.

2.  **Modify the C code to simulate more work (e.g., by increasing the number of iterations in the loop).** How does this affect the user and kernel time?
    *   **Answer:**  Increasing the loop iterations will generally increase the user time because the process spends more time executing in user mode. Kernel time might increase slightly due to increased scheduling overhead or other system calls.

3.  **Write a shell script that takes a process name as input and prints the user and kernel time for that process.**  (Hint: use `pgrep` to find the PID, then read the `/proc/<PID>/stat` file).
    *   **Answer:**

        ```bash
        #!/bin/bash

        process_name="$1"

        if [ -z "$process_name" ]; then
          echo "Usage: $0 <process_name>"
          exit 1
        fi

        pid=$(pgrep "$process_name")

        if [ -z "$pid" ]; then
          echo "Process '$process_name' not found."
          exit 1
        fi

        stat_file="/proc/$pid/stat"

        if [ ! -f "$stat_file" ]; then
          echo "Error: stat file not found for PID $pid"
          exit 1
        fi

        utime=$(awk '{print $14}' "$stat_file")
        stime=$(awk '{print $15}' "$stat_file")

        jiffies_per_second=$(getconf CLK_TCK)

        user_time_sec=$(echo "scale=6; $utime / $jiffies_per_second" | bc)
        kernel_time_sec=$(echo "scale=6; $stime / $jiffies_per_second" | bc)

        echo "Process Name: $process_name"
        echo "PID: $pid"
        echo "User Time (seconds): $user_time_sec"
        echo "Kernel Time (seconds): $kernel_time_sec"
        ```

4. **How does the `/proc` filesystem contribute to system monitoring and debugging?**

    *   **Answer:** The `/proc` filesystem allows administrators and developers to inspect the state of processes and the kernel in real-time. This is valuable for identifying performance bottlenecks, diagnosing errors, and understanding how system resources are being used. Tools like `top`, `ps`, and `htop` heavily rely on data provided by `/proc`.

5. **What happens if you try to access a `/proc/<PID>` directory for a PID that doesn't exist or for a process you don't have permission to access?**

    * **Answer:** If the PID doesn't exist, accessing `/proc/<PID>` will result in a "No such file or directory" error. If you don't have sufficient permissions to access the directory or files within it, you will receive a "Permission denied" error.  Only the owner of the process or the root user can typically access the information for a given process.

These notes provide a solid foundation for understanding how to measure process time using the `/proc` file system in Linux. Remember to experiment with the code and shell script examples to solidify your understanding.
