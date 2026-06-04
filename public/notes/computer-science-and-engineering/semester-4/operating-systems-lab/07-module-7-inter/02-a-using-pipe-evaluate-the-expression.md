---
title: "(a) Using Pipe – Evaluate the expression"
subject: "OPERATING SYSTEMS LAB"
module: "Module 7: Inter"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b492"
status: "completed"
scrapedAt: "2026-05-20T16:14:54.000Z"
---
## OPERATING SYSTEMS LAB - Module 7: Inter - (a) Using Pipe – Evaluate the Expression

**Objective:** Understand how to use pipes in an operating system to evaluate expressions by connecting the output of one process to the input of another.

**Learning Outcomes:**

*   Understand the concept of pipes for inter-process communication (IPC).
*   Implement and use pipes to pass data between processes.
*   Utilize pipes to build a pipeline of processes that evaluates an expression step-by-step.
*   Understand the limitations and considerations of using pipes.
*   Write C/C++/Python code to create and use pipes for expression evaluation.

---

**1. Key Concepts and Definitions**

*   **Process:** An instance of a computer program that is being executed.
*   **Inter-Process Communication (IPC):** Mechanisms that allow processes to communicate and synchronize their actions.
*   **Pipe:** A unidirectional, inter-process communication mechanism in Unix-like operating systems. It acts as a conduit for data flow between processes. Data written to the write end of the pipe can be read from the read end.  Pipes are typically used for communication between related processes (e.g., parent and child).
*   **Anonymous Pipe:**  A pipe that is created using the `pipe()` system call.  It exists only within the kernel and is not accessible by name like a file.  It is typically used for communication between related processes.
*   **Named Pipe (FIFO):** A pipe that is created using the `mkfifo()` system call. It exists as a file in the filesystem and can be used for communication between unrelated processes.
*   **Pipeline:** A sequence of processes connected by pipes, where the output of one process is the input of the next.  This allows for modular processing of data.
*   **System Call:** A request from a user-level process to the operating system kernel. `pipe()`, `fork()`, `read()`, `write()`, `close()`, `dup2()` are system calls related to pipes.
*   **File Descriptors:** Integers that represent open files (including pipes) within a process.  `0` is standard input (stdin), `1` is standard output (stdout), and `2` is standard error (stderr).
*   **fork():**  Creates a new process (child process) that is a copy of the calling process (parent process).
*   **dup2():**  Replaces one file descriptor with another.  Used to redirect standard input or output of a process to a pipe.

**2. How Pipes Work**

*   **Creation:** A pipe is created using the `pipe()` system call.  This system call takes an array of two integers as an argument.  After a successful call, the first element of the array (e.g., `fd[0]`) represents the read end of the pipe, and the second element (e.g., `fd[1]`) represents the write end of the pipe.
*   **Communication:** Data is written to the write end of the pipe using the `write()` system call and read from the read end of the pipe using the `read()` system call.
*   **Unidirectional:** Data flows in one direction only, from the write end to the read end.
*   **Buffering:** Pipes have a limited buffer size. If the write end is written to when the buffer is full, the writing process will block until space becomes available in the buffer (when the reading process consumes data).  Similarly, if the read end is read from when the buffer is empty, the reading process will block until data is written to the buffer.
*   **Closing:** It is crucial to close the unused ends of the pipe in both the parent and child processes. Closing the write end of the pipe signals the end of data to the reader. If the reader attempts to read from a pipe whose write end is closed, the `read()` system call will return 0, indicating end-of-file.

**3. Evaluating Expressions Using Pipes**

The general approach to evaluating an expression using pipes involves creating a pipeline of processes, where each process performs a specific operation on the data passed to it.

**Example: Evaluating "2 + 3 * 4"**

We can break down the evaluation into the following steps:

1.  **Process 1:** Sends the expression "2 + 3 * 4" to the next process.
2.  **Process 2:**  Parses the expression and performs the multiplication operation: `3 * 4 = 12`.  Sends "2 + 12" to the next process.
3.  **Process 3:** Performs the addition operation: `2 + 12 = 14`. Sends "14" to the next process.
4.  **Process 4:** Receives the final result "14" and prints it.

**4. Implementation (C/C++)**

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

int main() {
    int pipe1[2], pipe2[2], pipe3[2];
    pid_t child1, child2, child3;

    // Create pipes
    if (pipe(pipe1) == -1 || pipe(pipe2) == -1 || pipe(pipe3) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);
    }

    // Child 1: Sends the initial expression
    child1 = fork();
    if (child1 == 0) {
        close(pipe1[0]); // Close read end of pipe1
        close(pipe2[0]); close(pipe2[1]); //Close unused pipes
        close(pipe3[0]); close(pipe3[1]);
        const char *expression = "2 + 3 * 4";
        write(pipe1[1], expression, strlen(expression) + 1);
        close(pipe1[1]); // Close write end of pipe1 after writing
        exit(EXIT_SUCCESS);
    } else if (child1 < 0) {
        perror("fork");
        exit(EXIT_FAILURE);
    }

    // Child 2: Performs multiplication
    child2 = fork();
    if (child2 == 0) {
        close(pipe1[1]); // Close write end of pipe1
        close(pipe2[0]); // Close read end of pipe2
        close(pipe3[0]); close(pipe3[1]); //Close unused pipes

        char buffer[100];
        read(pipe1[0], buffer, sizeof(buffer));
        close(pipe1[0]); // Close read end of pipe1 after reading

        // Perform multiplication (simplified parsing for demonstration)
        char *mul_ptr = strstr(buffer, "*");
        if (mul_ptr != NULL) {
            int num1 = atoi(mul_ptr - 2); //Very basic parsing
            int num2 = atoi(mul_ptr + 2); //Very basic parsing
            int result = num1 * num2;

            //Create a new expression string
            char new_expression[100];
            sprintf(new_expression, "2 + %d", result);

            write(pipe2[1], new_expression, strlen(new_expression) + 1);
        }
        close(pipe2[1]);
        exit(EXIT_SUCCESS);
    }  else if (child2 < 0) {
        perror("fork");
        exit(EXIT_FAILURE);
    }


    // Child 3: Performs addition
    child3 = fork();
    if (child3 == 0) {
        close(pipe1[0]); close(pipe1[1]); //Close unused pipes
        close(pipe2[1]); // Close write end of pipe2
        close(pipe3[0]); // Close read end of pipe3

        char buffer[100];
        read(pipe2[0], buffer, sizeof(buffer));
        close(pipe2[0]); // Close read end of pipe2 after reading

        // Perform addition (simplified parsing for demonstration)
        char *add_ptr = strstr(buffer, "+");
        if (add_ptr != NULL) {
            int num1 = atoi(buffer); //Even more basic parsing
            int num2 = atoi(add_ptr + 2);
            int result = num1 + num2;

            char final_result[100];
            sprintf(final_result, "%d", result);

            write(pipe3[1], final_result, strlen(final_result) + 1);
        }
        close(pipe3[1]);
        exit(EXIT_SUCCESS);
    } else if (child3 < 0) {
      perror("fork");
      exit(EXIT_FAILURE);
    }


    // Parent process: Receives and prints the final result
    close(pipe1[0]); close(pipe1[1]);
    close(pipe2[0]); close(pipe2[1]);
    close(pipe3[1]); // Close write end of pipe3

    char final_result[100];
    read(pipe3[0], final_result, sizeof(final_result));
    close(pipe3[0]); // Close read end of pipe3 after reading

    printf("Result: %s\n", final_result);

    // Wait for child processes to finish
    wait(NULL);
    wait(NULL);
    wait(NULL);

    return 0;
}
```

**Explanation:**

*   The code creates three pipes: `pipe1`, `pipe2`, and `pipe3`.
*   It then forks three child processes (`child1`, `child2`, `child3`).
*   `child1` writes the initial expression to `pipe1`.
*   `child2` reads the expression from `pipe1`, performs the multiplication, and writes the updated expression to `pipe2`.
*   `child3` reads the updated expression from `pipe2`, performs the addition, and writes the final result to `pipe3`.
*   The parent process reads the final result from `pipe3` and prints it.
*   **Crucially, each process closes the unused ends of the pipes to avoid deadlocks and ensure correct data flow.**

**Important Notes:**

*   **Error Handling:** The code includes basic error handling (checking the return values of `pipe()` and `fork()`). In a production environment, more robust error handling is essential.
*   **Parsing:** The parsing in this example is extremely simplified and only works for a specific format.  A real-world expression evaluator would require a more sophisticated parsing algorithm.
*   **Data Conversion:**  `atoi()` is used for simple string-to-integer conversion.  More sophisticated methods might be necessary for handling different data types.
*   **Synchronization:**  For more complex expressions, additional synchronization mechanisms (e.g., semaphores, mutexes) might be needed to ensure correct evaluation order and data consistency.

**5. Implementation (Python)**

```python
import os
import sys
import multiprocessing

def send_expression(expression, write_end):
    os.close(write_end[0]) # close the reading end
    os.write(write_end[1], expression.encode())
    os.close(write_end[1]) # close the writing end


def multiply(read_end, write_end):
    os.close(read_end[1])  # close the writing end
    os.close(write_end[0]) # close the reading end
    expression = os.read(read_end[0], 1024).decode().strip()
    os.close(read_end[0])

    parts = expression.split("*")
    if len(parts) == 2:
        try:
            num1 = int(parts[0].split()[-1]) # extract last num
            num2 = int(parts[1].split()[0]) # extract first num
            result = num1 * num2
            new_expression = expression.replace(f"{num1} * {num2}", str(result)) # simple replace
            os.write(write_end[1], new_expression.encode())

        except ValueError:
            os.write(write_end[1], "Invalid input".encode()) #Error handling
    else:
         os.write(write_end[1], "Invalid format".encode()) #Error handling

    os.close(write_end[1])


def add(read_end, write_end):
    os.close(read_end[1]) # close the writing end
    os.close(write_end[0]) # close the reading end

    expression = os.read(read_end[0], 1024).decode().strip()
    os.close(read_end[0])

    parts = expression.split("+")
    if len(parts) == 2:
        try:
            num1 = int(parts[0].strip())
            num2 = int(parts[1].strip())
            result = num1 + num2
            os.write(write_end[1], str(result).encode())

        except ValueError:
            os.write(write_end[1], "Invalid input".encode())
    else:
         os.write(write_end[1], "Invalid format".encode())

    os.close(write_end[1])


if __name__ == "__main__":
    # pipes initialization
    pipe1 = os.pipe()
    pipe2 = os.pipe()

    # process creation
    p1 = multiprocessing.Process(target=send_expression, args=("2 + 3 * 4", pipe1))
    p2 = multiprocessing.Process(target=multiply, args=(pipe1, pipe2))

    read_pipe2, write_pipe2 = os.pipe()
    p3 = multiprocessing.Process(target=add, args=(pipe2, write_pipe2))


    # start processing
    p1.start()
    p2.start()
    p3.start()

    # close unused ends
    os.close(write_pipe2[1])
    result = os.read(write_pipe2[0], 1024).decode().strip()
    os.close(write_pipe2[0])

    # wait for execution
    p1.join()
    p2.join()
    p3.join()

    print(f"Result: {result}")
```

**Explanation (Python):**

*   The python example uses the `os.pipe()` to create the pipes and the `multiprocessing` module to create parallel processes.
*   Each process reads and writes through the relevant file descriptors to process part of the evaluation chain.
*   `encode()` and `decode()` are used to convert strings to bytes and vice versa, which is necessary for writing and reading from pipes.
*   The example highlights the use of `os.close()` to explicitly close the file descriptors after each process.

**6. Limitations and Considerations of Pipes**

*   **Unidirectional:** Pipes only allow data flow in one direction. For bidirectional communication, two pipes are needed.
*   **Related Processes:**  Anonymous pipes are typically used for communication between related processes (parent-child). Named pipes can be used between unrelated processes, but they add complexity.
*   **Buffering:** Pipes have a limited buffer size, which can lead to blocking if the writer is faster than the reader.
*   **Data Format:** Pipes transmit raw bytes. Processes need to agree on a data format for interpretation.
*   **Synchronization:** For complex interactions, pipes may require additional synchronization mechanisms to prevent race conditions and ensure data integrity.
*   **Overhead:** Creating and managing pipes introduces overhead, so it's not always the most efficient IPC mechanism for very high-frequency communication.

**7. Practice Questions/Exercises**

1.  **Modify the C/C++ code to handle subtraction as well as addition and multiplication.**
    *   **Answer:** You'll need to extend the parsing logic in the child processes to recognize the subtraction operator and perform the corresponding operation.  Remember to consider operator precedence.

2.  **Implement a simple command-line calculator using pipes. The user enters an expression (e.g., "5 + 2 * 3"), and the program evaluates it and prints the result.**
    *   **Answer:** You'll need to create a process to read user input, a process to parse the expression and create the evaluation steps, and a pipeline of processes to perform the calculations.

3.  **Explain why it's important to close the unused ends of the pipe in both the parent and child processes.**
    *   **Answer:** Closing unused write ends allows the reader to detect the end of the data stream (read() returns 0).  Closing unused read ends prevents deadlocks. If a process holds a read end open and tries to write to the pipe when the buffer is full, it will block indefinitely if there are no readers.

4. **How could you extend the python example to handle arbitrary numbers of multiplications and additions in a string?**
    * **Answer:** Use Regular Expressions (regex) for parsing the string and extracting the numbers and operators, and then iterate through them using a loop to apply all operations using more pipe stages.  This increases the code complexity but scales much better.

**8. Important Points to Remember**

*   Always close the unused ends of pipes in both parent and child processes.
*   Understand the limitations of pipes (unidirectional, buffering).
*   Choose the appropriate data format for communication.
*   Handle errors and synchronization carefully.
*   Pipes are a valuable tool for creating modular and parallel processing pipelines.
