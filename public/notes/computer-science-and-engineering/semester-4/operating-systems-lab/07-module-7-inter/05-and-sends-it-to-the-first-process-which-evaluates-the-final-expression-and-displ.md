---
title: "and sends it to the first process which evaluates the final expression and displays it."
subject: "OPERATING SYSTEMS LAB"
module: "Module 7: Inter"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b495"
status: "completed"
scrapedAt: "2026-05-20T16:14:56.257Z"
---
## OPERATING SYSTEMS LAB - Module 7: Inter-Process Communication (IPC) - Expression Evaluation

These notes cover inter-process communication (IPC) concepts, specifically focusing on using IPC to evaluate a mathematical expression distributed across multiple processes.

**Description:** The task involves dividing a mathematical expression into parts, distributing these parts to different processes for partial evaluation, and then collecting the results back to a final process that combines the partial results to display the final answer.

**1. Learning Outcomes:**

*   Understand the concept of Inter-Process Communication (IPC).
*   Learn different IPC mechanisms available in operating systems.
*   Implement a specific IPC mechanism (e.g., pipes, message queues, shared memory) to facilitate communication between processes.
*   Design a multi-process application where different processes perform a specific task (partial evaluation of an expression).
*   Synchronize the operation of multiple processes to avoid race conditions and ensure correct final result.
*   Implement a system where one process acts as a coordinator, distributing tasks and collecting results.
*   Evaluate the performance of different IPC mechanisms for this specific task.

**2. Key Concepts and Definitions:**

*   **Inter-Process Communication (IPC):** Mechanisms that allow processes to communicate with each other and synchronize their actions.  Processes can exchange data, signal events, or control each other's execution.

*   **Process:** An instance of a computer program that is being executed. Each process has its own memory space and resources.

*   **Concurrency:**  The ability of a system to handle multiple tasks simultaneously.  This can be achieved through parallelism (truly simultaneous execution on multiple processors) or interleaving (rapid switching between tasks on a single processor).

*   **Parallelism:**  The simultaneous execution of multiple parts of a computation on multiple processors.

*   **Synchronization:**  Ensuring that processes cooperate correctly and avoid conflicts when accessing shared resources or performing coordinated tasks.

*   **Race Condition:**  A situation where the outcome of a computation depends on the unpredictable order in which multiple processes access and modify shared data.

*   **Critical Section:**  A section of code that accesses shared resources.  Access to critical sections must be protected to prevent race conditions.

*   **Mutual Exclusion:**  Ensuring that only one process can access a critical section at any given time.

*   **Deadlock:**  A situation where two or more processes are blocked indefinitely, waiting for each other to release resources.

*   **Starvation:** A situation where a process is perpetually denied access to a resource it needs.

*   **IPC Mechanisms:**

    *   **Pipes:**  A unidirectional data channel used for communication between related processes (e.g., parent-child).  Data written to one end of the pipe can be read from the other.
    *   **Named Pipes (FIFOs):**  Similar to pipes but can be used for communication between unrelated processes.  They have a file system name.
    *   **Message Queues:**  A queue of messages that can be sent and received between processes.  Messages are typically prioritized.
    *   **Shared Memory:**  A region of memory that is shared by multiple processes.  This is the fastest form of IPC, but requires careful synchronization to avoid race conditions.
    *   **Semaphores:**  A synchronization primitive used to control access to shared resources.  Semaphores can be used to implement mutual exclusion and other synchronization patterns.
    *   **Signals:**  Software interrupts that can be sent to processes to signal events.
    *   **Sockets:**  A more general-purpose communication mechanism that can be used for communication between processes on the same machine or across a network.

**3. Examples (using pipes and fork):**

Let's consider a simple expression: `(2 + 3) * 4`.  We can divide this into two parts: `(2 + 3)` and `4`.

**Example 1: Using Pipes and Fork for Expression Evaluation**

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
  int pipefd[2];  // File descriptors for the pipe
  pid_t pid;      // Process ID

  // Create the pipe
  if (pipe(pipefd) == -1) {
    perror("pipe");
    exit(EXIT_FAILURE);
  }

  // Create a child process
  pid = fork();

  if (pid == -1) {
    perror("fork");
    exit(EXIT_FAILURE);
  }

  if (pid == 0) { // Child process: Evaluates (2 + 3)
    close(pipefd[0]); // Close the read end of the pipe

    int result = 2 + 3;
    printf("Child process: Partial result = %d\n", result);

    // Send the result to the parent process
    if (write(pipefd[1], &result, sizeof(result)) == -1) {
      perror("write");
      exit(EXIT_FAILURE);
    }

    close(pipefd[1]); // Close the write end of the pipe
    exit(EXIT_SUCCESS);

  } else { // Parent process: Receives result and calculates the final expression
    close(pipefd[1]); // Close the write end of the pipe

    int partial_result;

    // Read the partial result from the child process
    if (read(pipefd[0], &partial_result, sizeof(partial_result)) == -1) {
      perror("read");
      exit(EXIT_FAILURE);
    }

    printf("Parent process: Received partial result = %d\n", partial_result);

    // Calculate the final result
    int final_result = partial_result * 4;
    printf("Parent process: Final result = %d\n", final_result);

    close(pipefd[0]); // Close the read end of the pipe
    wait(NULL);      // Wait for the child process to exit
    exit(EXIT_SUCCESS);
  }

  return 0;
}
```

**Explanation:**

1.  **`pipe(pipefd)`:** Creates a pipe. `pipefd[0]` is the file descriptor for the read end, and `pipefd[1]` is the file descriptor for the write end.
2.  **`fork()`:** Creates a new process (child process).  The child process is a copy of the parent process.
3.  **Child Process:**
    *   Closes the read end of the pipe (`pipefd[0]`).  The child process only needs to write.
    *   Calculates the partial result `2 + 3 = 5`.
    *   Writes the partial result to the write end of the pipe (`pipefd[1]`).
    *   Closes the write end of the pipe.  It's important to close unused file descriptors.
    *   Exits.
4.  **Parent Process:**
    *   Closes the write end of the pipe (`pipefd[1]`).  The parent process only needs to read.
    *   Reads the partial result from the read end of the pipe (`pipefd[0]`).
    *   Calculates the final result: `partial_result * 4`.
    *   Prints the final result.
    *   Closes the read end of the pipe.
    *   `wait(NULL)`:  Waits for the child process to terminate. This is important to prevent the parent process from exiting before the child process has finished writing to the pipe.

**Example 2: Distributing a More Complex Expression**

Let's say we want to evaluate: `(5 + 2) * (8 - 3)` using multiple processes.

*   **Process 1:**  Evaluates `(5 + 2)`
*   **Process 2:**  Evaluates `(8 - 3)`
*   **Process 3 (Parent):** Collects the results from Process 1 and Process 2, multiplies them, and prints the final result.

This example would require two pipes, one for each child process to communicate its result back to the parent.  The synchronization becomes more important as you need to ensure both child processes have completed before the parent calculates the final result.

**4. Important Points to Remember:**

*   **Closing File Descriptors:** Always close file descriptors for the ends of the pipe that a process is not using. Failing to do so can lead to unexpected behavior and resource leaks.
*   **Synchronization:**  When using shared memory or multiple pipes, proper synchronization is crucial.  Semaphores are a common way to achieve this. Without synchronization, race conditions can occur, leading to incorrect results.
*   **Error Handling:** Always check the return values of system calls (e.g., `pipe()`, `fork()`, `read()`, `write()`) to detect errors.
*   **Data Types:** Ensure that the data being written to and read from the pipe or shared memory is of the correct type and size.
*   **Security Considerations:** When using IPC mechanisms, be aware of security implications.  Improperly configured IPC mechanisms can be exploited by malicious processes. Consider setting appropriate permissions and using authentication mechanisms where necessary.
*   **Choosing the Right IPC Mechanism:** The best IPC mechanism depends on the specific requirements of the application.
    *   **Pipes:** Simple and efficient for communication between related processes.
    *   **Message Queues:** Useful for asynchronous communication and when message ordering is important.
    *   **Shared Memory:**  The fastest form of IPC, but requires careful synchronization.

**5. Practice Questions/Exercises:**

1.  **Modify the provided pipe example to handle a division operation instead of multiplication.**  For example, `(2 + 3) / 4`.  Consider how to handle the case where the divisor is zero.
    *   **Answer:** The core changes would involve altering the mathematical operation in the parent process to `/` instead of `*`.  You should also add a check in the parent process *before* performing the division to verify that `partial_result` is not zero.  If it is, handle the error appropriately (e.g., print an error message and exit).

2.  **Write a program that uses message queues to implement the expression evaluation task.**  Divide the expression `(10 - 4) * (2 + 1)` into two parts and use two processes to calculate the partial results.  The parent process receives the results from the message queue and calculates the final result.
    *   **Answer (Conceptual Outline):**
        *   Create a message queue.
        *   Fork two child processes.
        *   Child process 1: Evaluates `(10 - 4)`, sends the result to the message queue.
        *   Child process 2: Evaluates `(2 + 1)`, sends the result to the message queue.
        *   Parent process: Receives two messages from the message queue (one from each child).  Calculates `result1 * result2` and prints the final result.
        *   Remember to handle potential errors when creating the queue, sending messages, and receiving messages.

3.  **Implement the expression evaluation task using shared memory and semaphores. Evaluate the performance of shared memory against pipes for a complex mathematical expression.**  Use semaphores to protect the shared memory region from race conditions.
    *   **Answer (Conceptual Outline):**
        *   Create a shared memory region.
        *   Create two semaphores (one for each child to signal completion).
        *   Fork two child processes.
        *   Child process 1: Evaluates a part of the expression, writes the result to shared memory, and signals semaphore 1.
        *   Child process 2: Evaluates a part of the expression, writes the result to shared memory, and signals semaphore 2.
        *   Parent process: Waits on both semaphores. Reads the results from shared memory, performs the final calculation, and prints the result.
        *   Remember to detach and destroy the shared memory region and semaphores when finished.
        *   For performance evaluation, time the execution using `clock()` or similar functions for both the shared memory and pipe implementations for a large and complex expression. Compare the execution times. Shared memory should generally be faster.

4.  **Discuss the advantages and disadvantages of using pipes, message queues, and shared memory for inter-process communication.**
    *   **Answer:**
        *   **Pipes:**
            *   Advantages: Simple to use for related processes, relatively low overhead.
            *   Disadvantages: Unidirectional communication, only for related processes.
        *   **Message Queues:**
            *   Advantages: Asynchronous communication, can be used between unrelated processes, message prioritization.
            *   Disadvantages: Overhead of message queuing, requires managing message queues.
        *   **Shared Memory:**
            *   Advantages: Fastest IPC mechanism.
            *   Disadvantages: Requires careful synchronization, more complex to implement, potential for security issues.

**6.  Highlight Important Points to Remember (Redundant but Emphasizes Key Takeaways):**

*   **Synchronization is paramount** when using shared resources like shared memory. Use semaphores or other synchronization primitives.
*   **Handle errors!**  Check return values of system calls.
*   **Close file descriptors** for unused ends of pipes.
*   **Understand the trade-offs** between different IPC mechanisms.  Choose the best one for the specific problem.
*   **Be aware of security implications** when using IPC.

These notes provide a foundation for understanding and implementing inter-process communication, particularly in the context of distributing a task like expression evaluation across multiple processes. Remember to practice implementing these concepts to gain a deeper understanding.
