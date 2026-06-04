---
title: "Create a new process using a fork system call. The child process should print the string “PCCSL407 ” and the parent process should print the string “ Operating Systems Lab ”. Use a wait system call to ensure that the output displayed is “ PCCSL407 Operating Systems Lab ”"
subject: "OPERATING SYSTEMS LAB"
module: "Module 6: Create a new process using a fork system call. The child process should print the string “PCCSL407 ” and the parent process should print the string “ Operating Systems Lab ”. Use a wait system call to ensure that the output displayed is “ PCCSL407 Operating Systems Lab ”"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b48f"
status: "completed"
scrapedAt: "2026-05-20T16:14:52.580Z"
---
## OPERATING SYSTEMS LAB - Module 6: Process Creation with `fork()` and Synchronization with `wait()`

**Topic:** Create a new process using a fork system call. The child process should print the string “PCCSL407 ” and the parent process should print the string “ Operating Systems Lab ”. Use a wait system call to ensure that the output displayed is “ PCCSL407 Operating Systems Lab ”

**Description:** This module focuses on understanding process creation using the `fork()` system call in Linux-based operating systems and utilizing the `wait()` system call to synchronize the execution of parent and child processes.  Specifically, we'll create a program where the child process prints "PCCSL407 " and the parent prints " Operating Systems Lab ", ensuring the output is displayed in the correct order.

**Learning Outcomes:**

*   Understand the concept of processes and process creation.
*   Explain the functionality of the `fork()` system call and its return values.
*   Demonstrate the ability to create a child process using `fork()`.
*   Understand the concept of process synchronization.
*   Explain the functionality of the `wait()` system call.
*   Implement `wait()` to ensure a parent process waits for its child process to complete.
*   Write a C program that utilizes `fork()` and `wait()` to achieve the specified output: "PCCSL407 Operating Systems Lab ".

---

### 1. Key Concepts and Definitions

*   **Process:** A program in execution. It's an active entity that requires resources (CPU time, memory, I/O) to perform its task.  Each process has its own address space, which includes the program code, data, stack, and heap.
*   **Process Creation:** The act of generating a new process from an existing one. In Unix-like systems, this is primarily achieved using the `fork()` system call.
*   **`fork()` System Call:** A system call that creates a new process. The new process (the child process) is an almost exact duplicate of the existing process (the parent process).  It receives its own copy of the parent's memory space, including code, data, stack, and file descriptors. The primary difference is the process ID (PID).
*   **Process ID (PID):** A unique numerical identifier assigned to each process by the operating system.
*   **Parent Process:** The process that calls the `fork()` system call.
*   **Child Process:** The new process created by the `fork()` system call.
*   **Process Synchronization:** Coordinating the execution of multiple processes to prevent data inconsistency and ensure correct execution.  `wait()` is a mechanism for parent processes to synchronize with their child processes.
*   **`wait()` System Call:** A system call that causes the calling process (usually the parent) to suspend execution until one of its child processes terminates.  It can also retrieve the exit status of the terminated child.
*   **Exit Status:** A numerical value returned by a process when it terminates, often indicating whether the process completed successfully (typically 0) or encountered an error.

### 2. The `fork()` System Call in Detail

*   **Functionality:**  The `fork()` system call duplicates the calling process into a new process.
*   **Return Values:**
    *   In the parent process: `fork()` returns the PID of the newly created child process.  This value will always be greater than 0.
    *   In the child process: `fork()` returns 0.
    *   On error: `fork()` returns -1.  This can happen if the system lacks the resources to create a new process (e.g., insufficient memory or exceeding the maximum number of processes allowed).
*   **Important Considerations:**
    *   Both parent and child processes continue execution from the point *after* the `fork()` call.
    *   The parent and child processes have separate memory spaces.  Changes made to variables in the child process will *not* affect the parent process, and vice versa.
    *   File descriptors are duplicated. Both parent and child can read and write to the same files (initially at the same position in the file).

### 3. The `wait()` System Call in Detail

*   **Functionality:** The `wait()` system call suspends the execution of the calling process until one of its child processes terminates.
*   **Purpose:**  Primarily used for process synchronization, ensuring that a parent process doesn't proceed until its child has finished its task.  This is crucial in scenarios where the parent needs the results of the child's computation or to avoid race conditions.
*   **Syntax:**
    ```c
    #include <sys/types.h>
    #include <sys/wait.h>

    pid_t wait(int *status);
    ```
*   **Parameters:**
    *   `status`:  A pointer to an integer. If this argument is not `NULL`, `wait()` stores status information about the child process in the integer pointed to by `status`. This status can be examined using macros defined in `<sys/wait.h>`.  You can also use `NULL` if you don't need the status.
*   **Return Values:**
    *   On success: `wait()` returns the PID of the terminated child process.
    *   On error: `wait()` returns -1.  Common errors include:
        *   `ECHILD`: The calling process has no existing unwaited-for child processes.
        *   `EINTR`:  The call was interrupted by a signal.
*   **Macros for Examining the Exit Status (when `status` is not `NULL`):**
    *   `WIFEXITED(status)`:  Returns true if the child terminated normally (by calling `exit()` or returning from `main()`).
    *   `WEXITSTATUS(status)`:  If `WIFEXITED(status)` is true, this returns the exit status of the child process (the argument passed to `exit()`).
    *   `WIFSIGNALED(status)`: Returns true if the child process terminated due to a signal (e.g., `SIGSEGV` for a segmentation fault).
    *   `WTERMSIG(status)`: If `WIFSIGNALED(status)` is true, this returns the number of the signal that caused the child process to terminate.

### 4. Example Code: Achieving the Specified Output

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;

    pid = fork();

    if (pid < 0) {
        // Error occurred
        fprintf(stderr, "Fork failed\n");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("PCCSL407 ");
        exit(0); // Terminate the child process
    } else {
        // Parent process
        wait(NULL); // Wait for the child to complete
        printf("Operating Systems Lab\n");
    }

    return 0;
}
```

**Explanation:**

1.  **Includes:** Necessary header files are included for standard input/output (`stdio.h`), standard library functions (`stdlib.h`), system calls related to processes (`unistd.h`), and process waiting (`sys/wait.h`).
2.  **`fork()` Call:** The `fork()` system call is invoked to create a new process.
3.  **Error Handling:** The code checks if `fork()` returned -1, indicating an error. If an error occurred, an error message is printed, and the program exits.
4.  **Child Process (pid == 0):** If `fork()` returns 0, the code inside the `else if (pid == 0)` block is executed by the child process. The child process prints "PCCSL407 " and then calls `exit(0)` to terminate.  `exit(0)` signifies a successful termination.
5.  **Parent Process (pid > 0):** If `fork()` returns a value greater than 0 (the PID of the child), the code inside the `else` block is executed by the parent process.
6.  **`wait(NULL)`:** The parent process calls `wait(NULL)` to wait for its child process to complete execution. This ensures that the parent doesn't print its string until the child has finished printing its string.  We use `NULL` here because we don't need the exit status of the child.
7.  **Parent Prints:** After the child process terminates, the `wait()` call returns, and the parent process prints " Operating Systems Lab" followed by a newline character.

**Compilation and Execution:**

1.  Save the code as `process_example.c`.
2.  Compile the code using a C compiler (like GCC): `gcc process_example.c -o process_example`
3.  Execute the compiled program: `./process_example`

**Output:**

```
PCCSL407 Operating Systems Lab
```

### 5. Practice Questions/Exercises

1.  **What is the purpose of the `fork()` system call?**

    *   **Answer:** To create a new process, which is a copy of the existing (parent) process.

2.  **What are the return values of `fork()` in the parent and child processes?**

    *   **Answer:**  In the parent process, `fork()` returns the PID of the child process (a positive integer). In the child process, `fork()` returns 0. On error, it returns -1.

3.  **Why is the `wait()` system call important for process synchronization?**

    *   **Answer:**  `wait()` allows a parent process to pause its execution until one of its child processes has terminated. This ensures that the parent can coordinate with the child and, for example, wait for the child to complete a task before using the results.

4.  **Modify the example code to print the PID of both the parent and child processes.**

    *   **Answer:**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <sys/wait.h>

    int main() {
        pid_t pid;

        pid = fork();

        if (pid < 0) {
            fprintf(stderr, "Fork failed\n");
            return 1;
        } else if (pid == 0) {
            // Child process
            printf("Child PID: %d, Parent PID: %d\n", getpid(), getppid()); // getpid() returns the process ID of the calling process, getppid() returns the parent process ID
            printf("PCCSL407 ");
            exit(0);
        } else {
            // Parent process
            wait(NULL);
            printf("Parent PID: %d, Child PID: %d\n", getpid(), pid);
            printf("Operating Systems Lab\n");
        }

        return 0;
    }
    ```

5.  **What happens if the `wait()` system call is not used in the example code?  Explain the potential outcome and what is it called?**

    *   **Answer:** If `wait()` is not used, the parent process might continue executing *before* the child process has finished printing "PCCSL407 ". This could lead to the output being interleaved or the parent printing its string first, resulting in incorrect output (e.g., "Operating Systems Lab PCCSL407 "). This is called a **race condition**.  The parent and child are "racing" to print, and the order in which they print is not guaranteed.  Also, the child process could become a **zombie process**, a process that has completed execution, but its process table entry has not yet been removed.  The parent process is responsible for reaping the zombie process by calling `wait()`.

### 6. Important Points to Remember

*   `fork()` creates a nearly identical copy of the parent process.
*   The `wait()` system call provides a mechanism for parent processes to synchronize with their child processes, preventing race conditions and zombie processes.
*   Understanding the return values of `fork()` is crucial for distinguishing between the parent and child processes.
*   Always include error handling to gracefully manage potential failures of system calls like `fork()`.
*   Use `exit()` to terminate a process cleanly, especially in child processes.
*   Proper use of `wait()` helps ensure that the parent process doesn't terminate before the child process and that the child's resources are properly released.
---
