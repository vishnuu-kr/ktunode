---
title: "Create a new process using a fork system call. Print the parent and child process IDs. Use the pstree command to find the process tree for the child process starting from the init process."
subject: "OPERATING SYSTEMS LAB"
module: "Module 4: Create a new process using a fork system call. Print the parent and child process IDs. Use the pstree command to find the process tree for the child process starting from the init process."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b48b"
status: "completed"
scrapedAt: "2026-05-20T16:14:51.158Z"
---
# OPERATING SYSTEMS LAB - Module 4: Process Creation with `fork()` and Process Tree Analysis

## Topic: Create a new process using a fork system call. Print the parent and child process IDs. Use the pstree command to find the process tree for the child process starting from the init process.

### Learning Outcomes:

*   Understand the concept of process creation using the `fork()` system call.
*   Differentiate between the parent and child processes after a `fork()` call.
*   Learn how to obtain and print the process IDs (PIDs) of the parent and child processes.
*   Utilize the `pstree` command to visualize the process tree, starting from the `init` process.
*   Interpret the output of the `pstree` command and understand the process hierarchy.

### 1. Key Concepts and Definitions

*   **Process:** An instance of a program in execution. It is a fundamental concept in operating systems, representing an independent unit of resource allocation and scheduling.
*   **Process ID (PID):** A unique numerical identifier assigned to each process by the operating system.  It is used to track and manage processes.
*   **Parent Process:** The process that creates a new process.
*   **Child Process:** The new process created by the parent process through a system call (typically `fork()`).
*   **`fork()` System Call:** A system call that creates a new process by duplicating the existing process.  The new process is an exact copy of the parent process, including code, data, and open files.
*   **Process Tree:** A hierarchical representation of processes, showing the parent-child relationships.  The root of the tree is usually the `init` process (PID 1).
*   **`init` Process:** The first process to be started by the kernel during the system boot. It is the ancestor of all other processes.
*   **System Call:** An interface provided by the operating system kernel that allows user-level processes to request services from the kernel, such as creating a new process, reading from a file, or writing to the screen.
*   **`pstree` command:** A command-line utility that displays the processes running on the system as a tree.

### 2. Process Creation using `fork()`

The `fork()` system call is the primary mechanism for creating new processes in Unix-like operating systems.

**Function Prototype (in C):**

```c
#include <unistd.h>
pid_t fork(void);
```

**Return Value:**

*   **In the parent process:**  `fork()` returns the PID of the newly created child process.  If an error occurs, it returns -1.
*   **In the child process:** `fork()` returns 0.
*   **Error:** On failure, `fork()` returns -1.

**Explanation:**

1.  When `fork()` is called, the OS creates a new process that is a copy of the calling process (the parent).
2.  Both the parent and child processes continue execution from the point where `fork()` returns.
3.  Crucially, both processes receive a *different* return value from `fork()`, allowing them to distinguish themselves and execute different code if necessary.

**Example Code:**

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // Required for fork() and getpid()

int main() {
  pid_t pid;

  printf("Before fork(): PID = %d\n", getpid());

  pid = fork();

  if (pid < 0) {
    // Error occurred
    fprintf(stderr, "Fork failed!\n");
    return 1;
  } else if (pid == 0) {
    // Child process
    printf("Child process: PID = %d, Parent PID = %d\n", getpid(), getppid());
    // Add child-specific code here.
  } else {
    // Parent process
    printf("Parent process: PID = %d, Child PID = %d\n", getpid(), pid);
    // Add parent-specific code here, like waiting for the child to finish.
    // wait(NULL); // Example: wait for the child. Requires #include <sys/wait.h>
  }

  printf("After fork(): This line is executed by both parent and child\n");

  return 0;
}
```

**Explanation of the Example:**

*   `#include <unistd.h>`:  This header file provides access to POSIX operating system API, including the `fork()` and `getpid()` functions.
*   `pid_t pid;`:  Declares a variable `pid` of type `pid_t`, which is used to store process IDs.
*   `getpid()`: Returns the process ID of the current process.
*   `getppid()`: Returns the process ID of the parent process.
*   `fork()`: Creates a new process (the child).
*   `if (pid < 0)`:  Handles the error case where `fork()` fails.
*   `else if (pid == 0)`:  The code inside this block is executed only by the child process.
*   `else`: The code inside this block is executed only by the parent process.  The `pid` variable will contain the PID of the child.
*   The final `printf` statement is executed by both the parent and the child processes.  This is because both processes continue execution after the `fork()` call.

**Important Considerations:**

*   **Memory:**  Initially, the child process has a copy of the parent's memory space.  However, modern operating systems often implement a "copy-on-write" (COW) mechanism.  This means that the memory is not actually copied until either the parent or the child modifies it. This saves resources.
*   **File Descriptors:** Open file descriptors are duplicated in the child process.  This means that both parent and child can read from or write to the same files. This can lead to race conditions if not handled carefully.
*   **Resource Limits:** The child process inherits resource limits from the parent process.

### 3. Obtaining Process IDs (PIDs)

*   **`getpid()`:**  This function returns the process ID of the *current* process.
*   **`getppid()`:** This function returns the process ID of the *parent* process.
*   The return value of `fork()` in the parent process provides the PID of the newly created child process.

### 4. Using `pstree` to Visualize the Process Tree

The `pstree` command is a powerful tool for visualizing the hierarchy of processes on a Linux or Unix-like system. It displays the processes as a tree, making it easy to understand the relationships between them.

**Basic Usage:**

```bash
pstree
```

This will display the entire process tree, starting from the `init` process (PID 1).

**Filtering by PID:**

To view the process tree starting from a specific process ID, use the `-p` option followed by the PID:

```bash
pstree -p <PID>
```

Replace `<PID>` with the actual process ID you want to start the tree from.  For example:

```bash
pstree -p 1
```

This shows the process tree rooted at PID 1, the `init` process.

**Example:**

After running the C code example above, you can use `pstree -p <child_pid>` (where `<child_pid>` is the actual PID of the child process printed by your program) to see where your child process fits in the overall process tree.

### 5. Interpreting the `pstree` Output

The `pstree` output shows the parent-child relationships between processes.  Each process is represented by its name and, optionally, its PID.  The indentation indicates the level of the process in the hierarchy.

**Example Output:**

```
init─┬─NetworkManager
     ├─accounts-daemon───2*[{accounts-daemon}]
     ├─alsactl
     ├─apache2─┬─apache2
     │         ├─apache2
     │         ├─apache2
     │         ├─apache2
     │         └─apache2
     ├─atd
     ├─avahi-daemon───avahi-daemon
     ├─bluetoothd
     ├─cgmanager
     ├─cgproxy
     ├─console-kit-dae───64*[{console-kit-dae}]
     ├─cron
     ├─cups-browsed
     ├─cupsd
     ├─dbus-daemon───{dbus-daemon}
     ├─dnsmasq
     ├─exim4
     ├─gdm3───gdm-session-wor───gnome-session-b───gnome-shell─┬─...
     │                                                        └─nautilus
     ├─geoclue
     ├─irqbalance
     ├─kerneloops
     ├─lightdm─┬─Xorg
     │         └─lightdm───lightdm-session───lxsession─┬─...
     │                                                   ├─lxpanel
     │                                                   ├─pcmanfm
     │                                                   └─xscreensaver
     ├─login
     ├─mdadm
     ├─ModemManager
     ├─mysqld_safe───mysqld───{mysqld}
     ├─ntpd
     ├─polkitd───6*[{polkitd}]
     ├─rsyslogd
     ├─speech-dispatcher
     ├─sshd
     ├─systemd-journal
     ├─systemd-logind
     ├─systemd-udevd
     ├─thermald
     ├─udisksd───{udisksd}
     ├─upowerd───{upowerd}
     └─wpa_supplicant
```

In this example, `init` (the `init` process) is the root of the tree. All other processes are descendants of `init`.  The `apache2` process, for instance, has multiple child processes.

### 6. Practice Questions and Exercises

1.  **Write a C program that creates two child processes. Each child process should print its PID and its parent's PID.**

    **Answer:**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <sys/wait.h> // For wait()

    int main() {
        pid_t pid1, pid2;

        // First child
        pid1 = fork();

        if (pid1 < 0) {
            fprintf(stderr, "Fork failed for child 1\n");
            return 1;
        } else if (pid1 == 0) {
            // Child 1
            printf("Child 1: PID = %d, Parent PID = %d\n", getpid(), getppid());
            return 0; // Important: Child should exit after its task
        } else {
            // Parent
            wait(NULL); // Wait for child 1 to finish
            // Second child
            pid2 = fork();

            if (pid2 < 0) {
                fprintf(stderr, "Fork failed for child 2\n");
                return 1;
            } else if (pid2 == 0) {
                // Child 2
                printf("Child 2: PID = %d, Parent PID = %d\n", getpid(), getppid());
                return 0; // Important: Child should exit after its task
            } else {
                // Parent
                wait(NULL); // Wait for child 2 to finish
                printf("Parent: PID = %d, Child 1 PID = %d, Child 2 PID = %d\n", getpid(), pid1, pid2);
            }
        }
        return 0;
    }
    ```

2.  **Explain the difference between the return value of `fork()` in the parent and child processes.**

    **Answer:** In the parent process, `fork()` returns the PID of the newly created child process. In the child process, `fork()` returns 0.

3.  **What is the purpose of the `pstree` command? How can you use it to find the parent process of a specific process?**

    **Answer:** The `pstree` command displays the processes running on the system as a tree, showing the parent-child relationships. To find the parent process of a specific process, you can use `pstree -p <PID>`, where `<PID>` is the PID of the process. The parent of that process will be the process directly above it in the tree.  Alternatively, you can run `pstree` without the `-p` option to see the full tree, and then search the output to find the parent process.

4.  **What is the significance of the `init` process (PID 1)?**

    **Answer:** The `init` process is the first process started by the kernel during system boot. It is the ancestor of all other processes in the system.

5.  **Write a program that forks a child process. The parent process waits for the child to complete, then prints a message. The child process prints a message and then exits.**

    **Answer:**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <sys/wait.h>

    int main() {
        pid_t pid;
        int status;

        pid = fork();

        if (pid < 0) {
            fprintf(stderr, "Fork failed!\n");
            return 1;
        } else if (pid == 0) {
            // Child process
            printf("Child: Hello from the child process (PID = %d)\n", getpid());
            sleep(2); // Simulate some work
            exit(0); // Child exits
        } else {
            // Parent process
            printf("Parent: Waiting for child (PID = %d) to finish...\n", pid);
            wait(&status); // Wait for the child to terminate
            printf("Parent: Child (PID = %d) has finished with status %d\n", pid, WEXITSTATUS(status));
        }

        return 0;
    }
    ```

### 7. Important Points to Remember

*   The `fork()` system call creates a nearly identical copy of the parent process.
*   The child process receives a return value of 0 from `fork()`, while the parent process receives the PID of the child process.
*   Use `getpid()` and `getppid()` to obtain the process IDs of the current process and its parent, respectively.
*   The `pstree` command is a useful tool for visualizing the process tree and understanding process relationships.
*   Always handle the error case when `fork()` returns -1.
*   Be aware of the implications of shared resources (e.g., file descriptors) after a `fork()` call.  Consider using mechanisms like `wait()` in the parent to coordinate with the child.
*   Child processes should typically `exit()` when their work is complete. This is important to prevent zombie processes.
*   Understand the concept of "copy-on-write" and its effect on memory usage after a `fork()` call.
*  Always include necessary header files like `<unistd.h>` and `<sys/wait.h>`.  Failing to do so can result in compilation errors or unexpected program behavior.
