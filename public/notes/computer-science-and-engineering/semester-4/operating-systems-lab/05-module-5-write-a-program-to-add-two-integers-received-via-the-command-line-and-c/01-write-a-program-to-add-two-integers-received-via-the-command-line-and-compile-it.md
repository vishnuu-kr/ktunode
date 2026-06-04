---
title: "Write a program to add two integers (received via the command line) and compile it to an executable named “ myadder ”. Now write another program that creates a new process using a fork system call. Make the child process add two integers by replacing its image with the “ myadder ” image using execvp system call."
subject: "OPERATING SYSTEMS LAB"
module: "Module 5: Write a program to add two integers (received via the command line) and compile it to an executable named “ myadder ”. Now write another program that creates a new process using a fork system call. Make the child process add two integers by replacing its image with the “ myadder ” image using execvp system call."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b48d"
status: "completed"
scrapedAt: "2026-05-20T16:14:51.867Z"
---
# OPERATING SYSTEMS LAB - Module 5: Fork, Execvp, and Command Line Arguments

## Topic: Adding Integers via Command Line in a Child Process using Fork and Execvp

**Description:** This module covers creating two programs. The first program (`myadder`) adds two integers passed via the command line. The second program creates a child process using `fork()`, then replaces the child's process image with the `myadder` executable using `execvp()`.

**Learning Outcomes:**

*   Understand the use of command-line arguments.
*   Understand and utilize the `fork()` system call for process creation.
*   Understand and utilize the `execvp()` system call for process replacement.
*   Understand the concepts of process ID (PID) and parent process ID (PPID).
*   Write, compile, and execute C programs that use `fork()` and `execvp()`.
*   Demonstrate proper error handling for system calls.

---

## 1. Key Concepts and Definitions

*   **Command-Line Arguments:** Data passed to a program when it's executed from the command line.  In C, they are accessed through the `main` function's arguments: `int main(int argc, char *argv[])`.  `argc` is the argument count (including the program name), and `argv` is an array of strings, where `argv[0]` is the program name, `argv[1]` is the first argument, and so on.

*   **Process:**  An instance of a computer program that is being executed. It has its own memory space, program counter, stack, and other resources.

*   **Process ID (PID):** A unique numerical identifier assigned to each process by the operating system.

*   **Parent Process ID (PPID):** The process ID of the process that created the current process.

*   **`fork()` System Call:** Creates a new process (the "child process") that is a nearly identical copy of the calling process (the "parent process").  It returns:
    *   Zero (0) to the child process.
    *   The PID of the child process to the parent process.
    *   -1 on failure.

*   **`execvp()` System Call:** Replaces the current process image with a new process image. It loads and executes a new program.  It takes two arguments:
    *   `file`:  The path to the executable file.
    *   `argv`:  An array of null-terminated strings representing the argument list to be passed to the new program.  The first element (`argv[0]`) is conventionally the program name (or a similar identifier).  The last element *must* be a NULL pointer.

*   **Process Image:** The in-memory representation of a program, including its code, data, stack, and heap.

---

## 2. Program 1: `myadder.c` - Adding Integers from Command Line

```c
#include <stdio.h>
#include <stdlib.h> // For atoi()

int main(int argc, char *argv[]) {
    if (argc != 3) {
        fprintf(stderr, "Usage: myadder <integer1> <integer2>\n");
        return 1; // Indicate an error
    }

    int num1 = atoi(argv[1]); // Convert the first argument to an integer
    int num2 = atoi(argv[2]); // Convert the second argument to an integer

    int sum = num1 + num2;

    printf("Sum: %d\n", sum);

    return 0; // Indicate successful execution
}
```

**Explanation:**

*   **Includes:**  `stdio.h` for standard input/output functions (like `printf`, `fprintf`), and `stdlib.h` for `atoi` (string to integer conversion).
*   **`main` function:**  The entry point of the program. It takes `argc` (argument count) and `argv` (argument vector) as input.
*   **Argument Validation:**  Checks if the number of arguments is correct (program name + two integers).  If not, it prints an error message to `stderr` (standard error stream) and exits with a non-zero return code (indicating failure).
*   **String to Integer Conversion:** `atoi(argv[1])` and `atoi(argv[2])` convert the command-line arguments (which are strings) to integers.
*   **Calculation and Output:**  Calculates the sum and prints the result to the console.
*   **Return Value:** Returns 0 to indicate successful execution.

**Compilation:**

```bash
gcc myadder.c -o myadder
```

This command compiles `myadder.c` and creates an executable file named `myadder`.

---

## 3. Program 2: `parent_child.c` - Fork and Execvp

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // For fork(), execvp()
#include <sys/wait.h> // For wait()

int main() {
    pid_t pid;

    pid = fork(); // Create a child process

    if (pid < 0) {
        fprintf(stderr, "Fork failed!\n");
        return 1; // Indicate an error
    } else if (pid == 0) {
        // Child process
        printf("Child process (PID: %d, PPID: %d) executing myadder...\n", getpid(), getppid());

        char *args[] = {"myadder", "10", "20", NULL}; // Arguments for myadder

        // Replace the child's process image with myadder
        execvp(args[0], args);

        // If execvp fails, this code will be executed
        perror("execvp failed"); // Print error message
        exit(1); // Exit child process with an error code
    } else {
        // Parent process
        printf("Parent process (PID: %d, Child PID: %d) waiting for child...\n", getpid(), pid);

        int status;
        wait(&status); // Wait for the child process to finish

        printf("Child process (PID: %d) finished. Exit status: %d\n", pid, WEXITSTATUS(status));
    }

    return 0;
}
```

**Explanation:**

*   **Includes:** `unistd.h` for `fork()` and `execvp()`, `sys/wait.h` for `wait()`.
*   **`fork()`:**  Creates a child process.
*   **Error Handling:** Checks if `fork()` failed (returned a negative value).
*   **Child Process (pid == 0):**
    *   Prints its PID and PPID.
    *   Creates an array of strings `args` to be passed as arguments to `myadder`.  **Important:** The array *must* be null-terminated (`NULL`).  `args[0]` is the program name (in this case, "myadder"), `args[1]` and `args[2]` are the two integers to be added, and `args[3]` is `NULL`.
    *   **`execvp("myadder", args)`:**  Replaces the child's process image with the `myadder` executable. The `execvp` function searches for "myadder" in the directories specified by the PATH environment variable.  It then executes `myadder` with the provided arguments.
    *   **Error Handling After `execvp()`:** If `execvp()` is successful, the code following it *will not* be executed (because the process image has been replaced). If `execvp()` fails (e.g., because the executable file is not found), the `perror()` and `exit()` calls will be executed, indicating an error.
*   **Parent Process (pid > 0):**
    *   Prints its PID and the child's PID.
    *   **`wait(&status)`:**  Suspends the parent process until the child process terminates. The `status` variable will contain information about how the child process terminated (e.g., its exit code).
    *   **`WEXITSTATUS(status)`:**  Extracts the exit code of the child process from the `status` variable.
*   **Return Value:** Returns 0 to indicate successful execution.

**Compilation:**

```bash
gcc parent_child.c -o parent_child
```

This command compiles `parent_child.c` and creates an executable file named `parent_child`.

---

## 4. Execution

1.  **Compile both programs:**
    ```bash
    gcc myadder.c -o myadder
    gcc parent_child.c -o parent_child
    ```

2.  **Run `parent_child`:**
    ```bash
    ./parent_child
    ```

**Expected Output (may vary slightly depending on your system):**

```
Parent process (PID: 12345, Child PID: 12346) waiting for child...
Child process (PID: 12346, PPID: 12345) executing myadder...
Sum: 30
Child process (PID: 12346) finished. Exit status: 0
```

**Explanation of the Output:**

*   The parent process starts and forks a child process.
*   The child process prints a message indicating it is about to execute `myadder`.
*   The `execvp` call in the child process replaces its code with the code from `myadder`.
*   `myadder` executes, adds 10 and 20, and prints the sum (30).
*   `myadder` terminates with an exit code of 0.
*   The parent process receives a signal that the child process has terminated.
*   The parent process prints a message indicating the child's PID and exit status.

---

## 5. Important Points to Remember

*   The `execvp` function replaces the *entire* process image. Any code after `execvp` (in the child process) will only be executed if `execvp` fails.
*   The `argv` array passed to `execvp` *must* be null-terminated.  This is a common mistake.
*   Error handling is crucial.  Always check the return values of `fork()` and `execvp()`.
*   The order of execution between the parent and child processes can be unpredictable unless you use synchronization mechanisms (like `wait()`).
*   `atoi()` does not perform robust error checking. Consider using `strtol()` for better error handling when converting strings to integers in a production environment.  However, for simplicity in this lab exercise, `atoi()` is sufficient.
*   Ensure the `myadder` executable is in the same directory as `parent_child` or that the full path to `myadder` is provided to `execvp`.  Otherwise, the `execvp` call will likely fail.

---

## 6. Practice Questions and Exercises

**1. Modify `myadder.c` to handle negative numbers correctly.**

**Answer:** The provided `myadder.c` already handles negative numbers correctly because `atoi()` can parse negative numbers.  No changes are required.  However, it would be good practice to add more robust error handling (e.g., using `strtol()`) to handle cases where the input strings are not valid integers.

**2. Modify `parent_child.c` to pass different arguments to `myadder` (e.g., 5 and 15).**

**Answer:**  Change the `args` array in `parent_child.c`:

```c
char *args[] = {"myadder", "5", "15", NULL};
```

**3. What happens if you remove the `NULL` terminator from the `args` array in `parent_child.c`?  Why?**

**Answer:**  `execvp()` expects a null-terminated array of strings. If the `NULL` terminator is missing, `execvp()` will continue to read memory beyond the bounds of the `args` array, potentially leading to a segmentation fault or unpredictable behavior.  It won't know where the list of arguments ends.

**4. Write a program that creates multiple child processes (e.g., three children) using `fork()`. Each child process should execute a different program using `execvp()`. You can create additional simple executables for this purpose.  The parent process should wait for all child processes to complete.**

**Answer:**

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;
    int i;
    int num_children = 3;

    char *programs[] = {"/bin/ls", "/bin/pwd", "/bin/date"}; // Example programs

    for (i = 0; i < num_children; i++) {
        pid = fork();

        if (pid < 0) {
            perror("Fork failed");
            exit(1);
        } else if (pid == 0) {
            // Child process
            printf("Child %d (PID: %d) executing %s\n", i + 1, getpid(), programs[i]);
            char *args[] = {programs[i], NULL}; // args[0] is program name, args[1] is NULL
            execvp(args[0], args);
            perror("execvp failed");
            exit(1);
        }
    }

    // Parent process waits for all children
    for (i = 0; i < num_children; i++) {
        int status;
        pid_t child_pid = wait(&status);
        printf("Child process (PID: %d) finished with status: %d\n", child_pid, WEXITSTATUS(status));
    }

    return 0;
}
```

**5.  What happens if `myadder` is not executable (e.g., its permissions are set such that it cannot be executed)?**

**Answer:**  The `execvp()` call in `parent_child.c` will fail.  The `perror("execvp failed")` line in the child process will print an error message indicating "Permission denied" (or a similar error message depending on the specific reason for the failure).  The child process will then exit with a non-zero exit code (due to the `exit(1)` call).

---

This comprehensive guide should provide a solid foundation for understanding the `fork()` and `execvp()` system calls and how to use them to create and manipulate processes in an operating system. Remember to experiment with the code and try different variations to solidify your understanding.
