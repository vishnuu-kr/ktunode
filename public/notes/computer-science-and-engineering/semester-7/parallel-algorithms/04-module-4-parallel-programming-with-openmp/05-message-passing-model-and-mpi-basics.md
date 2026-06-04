---
title: "Message passing model and MPI basics"
subject: "PARALLEL ALGORITHMS"
module: "Module 4: Parallel Programming with OpenMP "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c709"
status: "completed"
scrapedAt: "2026-05-20T17:08:59.496Z"
---
# Parallel Algorithms: Module 4 - Parallel Programming with OpenMP

## Topic: Message Passing Model and MPI Basics

This module introduces the fundamental concepts of the message passing model for parallel programming, with a focus on the Message Passing Interface (MPI). While the module title mentions OpenMP, this specific topic delves into a different, albeit complementary, parallel programming paradigm.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

1.  **Explain the message passing model of parallel computation and its advantages/disadvantages.**
2.  **Describe the core concepts of the Message Passing Interface (MPI) and its purpose.**
3.  **Identify and explain the fundamental MPI functions for process management, communication, and data transfer.**
4.  **Write simple parallel programs using MPI for basic tasks like data distribution and aggregation.**
5.  **Understand the difference between point-to-point and collective communication in MPI.**

---

### 1. The Message Passing Model of Parallel Computation

The message passing model is a paradigm for parallel programming where processes (or tasks) explicitly communicate with each other by sending and receiving messages. Each process typically has its own private memory space.

#### 1.1 Key Concepts

*   **Processes:** Independent units of execution that operate on their own data. In the message passing model, processes are typically assumed to be physically distributed across different nodes in a parallel system.
*   **Private Memory:** Each process has its own memory space, preventing direct access to the memory of other processes.
*   **Messages:** Explicit units of data that are exchanged between processes. These messages are the sole mechanism for inter-process communication.
*   **Communication Primitives:** Predefined operations (functions) that allow processes to send and receive messages.

#### 1.2 How it Works

1.  **Initialization:** The parallel program starts with a certain number of processes.
2.  **Execution:** Each process executes its portion of the computation independently.
3.  **Communication:** When a process needs data or needs to share results with another process, it uses a communication primitive to send a message to a specific destination process or group of processes. The receiving process uses a corresponding primitive to receive the message.
4.  **Synchronization:** Message passing inherently provides a level of synchronization. A send operation might block until the message is sent, and a receive operation will block until a message is available.

#### 1.3 Advantages of the Message Passing Model

*   **Scalability:** Well-suited for distributed memory systems (clusters, supercomputers) where memory is not shared.
*   **Flexibility:** Allows for fine-grained control over communication patterns and data distribution.
*   **Portability:** Standardized libraries like MPI provide a portable way to write parallel programs across different hardware architectures.
*   **Fault Tolerance (Potential):** Can be designed to handle process failures more gracefully than shared memory models in certain scenarios.

#### 1.4 Disadvantages of the Message Passing Model

*   **Complexity:** Requires explicit management of communication, which can make programming more complex than shared memory models.
*   **Overhead:** Message passing involves network latency and bandwidth costs, which can be significant for frequent or small communications.
*   **Deadlocks:** Poorly designed communication patterns can lead to deadlocks, where processes are stuck waiting for messages that will never arrive.

---

### 2. The Message Passing Interface (MPI)

MPI is a de facto standard, a library of functions and conventions for writing message-passing parallel programs. It is not a programming language itself but a specification that can be implemented in various languages like C, C++, and Fortran.

#### 2.1 Purpose of MPI

*   **Standardization:** Provides a consistent and portable way to write message-passing applications that can run on a wide variety of parallel hardware.
*   **Abstraction:** Hides the complexities of underlying hardware and network communication protocols.
*   **Performance:** Implementations are highly optimized for specific architectures.

#### 2.2 MPI Fundamentals

*   **Communicators:** A group of processes that can communicate with each other. The most common communicator is `MPI_COMM_WORLD`, which includes all processes in an MPI job.
*   **Ranks:** Each process within a communicator is assigned a unique integer identifier called a rank. Ranks range from 0 to `size - 1`, where `size` is the total number of processes in the communicator.
*   **Processes:** MPI applications execute as a group of processes, typically launched by an MPI launcher (e.g., `mpirun`, `mpiexec`).

---

### 3. Fundamental MPI Functions

MPI provides a rich set of functions for managing processes, sending and receiving messages, and performing collective operations. Here are some of the most basic and commonly used ones:

#### 3.1 Initialization and Finalization

*   `MPI_Init(int *argc, char ***argv)`
    *   **Description:** Initializes the MPI environment. Must be called before any other MPI function. It's usually the first MPI function called in a parallel program.
    *   **Arguments:** `argc` and `argv` are pointers to the command-line arguments, allowing MPI to parse its own arguments.
*   `MPI_Finalize()`
    *   **Description:** Cleans up the MPI environment. Must be called before the program exits. All MPI operations must be completed before this call.
*   `MPI_Initialized(int *flag)`
    *   **Description:** Checks if MPI has been initialized. Returns `flag = 1` if initialized, `0` otherwise.
*   `MPI_Finalized(int *flag)`
    *   **Description:** Checks if MPI has been finalized. Returns `flag = 1` if finalized, `0` otherwise.

#### 3.2 Communicator and Process Information

*   `MPI_Comm_size(MPI_Comm comm, int *size)`
    *   **Description:** Returns the number of processes in a given communicator.
    *   **Arguments:**
        *   `comm`: The communicator (e.g., `MPI_COMM_WORLD`).
        *   `size`: Pointer to an integer where the size will be stored.
*   `MPI_Comm_rank(MPI_Comm comm, int *rank)`
    *   **Description:** Returns the rank of the calling process within a given communicator.
    *   **Arguments:**
        *   `comm`: The communicator.
        *   `rank`: Pointer to an integer where the rank will be stored.

#### 3.3 Point-to-Point Communication

Point-to-point communication involves sending a message from one specific process to another specific process.

*   `MPI_Send(void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm)`
    *   **Description:** Sends a message from the calling process to a destination process.
    *   **Arguments:**
        *   `buf`: Pointer to the buffer containing the data to be sent.
        *   `count`: The number of elements to send.
        *   `datatype`: The MPI datatype of the elements (e.g., `MPI_INT`, `MPI_FLOAT`, `MPI_CHAR`).
        *   `dest`: The rank of the destination process.
        *   `tag`: A user-defined integer that helps distinguish messages. Can be used for matching sends and receives.
        *   `comm`: The communicator.
    *   **Important:** `MPI_Send` is a **blocking** operation. It returns only after the message has been safely put into a buffer for transmission. The user's buffer can be reused after `MPI_Send` returns.

*   `MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status)`
    *   **Description:** Receives a message from a source process.
    *   **Arguments:**
        *   `buf`: Pointer to the buffer where the received data will be stored.
        *   `count`: The maximum number of elements the buffer can receive.
        *   `datatype`: The MPI datatype of the elements to be received.
        *   `source`: The rank of the source process. `MPI_ANY_SOURCE` can be used to receive from any process.
        *   `tag`: The tag of the message to receive. `MPI_ANY_TAG` can be used to receive any message.
        *   `comm`: The communicator.
        *   `status`: Pointer to an `MPI_Status` object which will contain information about the received message (e.g., source, tag, number of elements received).
    *   **Important:** `MPI_Recv` is also a **blocking** operation. It returns only when a message matching the criteria (source, tag, communicator) has been received and copied into the user's buffer.

*   `MPI_Isend(void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm, MPI_Request *request)`
    *   **Description:** Initiates a non-blocking send operation.
    *   **Arguments:** Similar to `MPI_Send`, plus `MPI_Request *request`.
    *   **Important:** `MPI_Isend` returns immediately, even if the message is not yet sent. The `request` object can be used to check the status of the send or to wait for its completion using `MPI_Wait`.

*   `MPI_Irecv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Request *request)`
    *   **Description:** Initiates a non-blocking receive operation.
    *   **Arguments:** Similar to `MPI_Recv`, plus `MPI_Request *request`.
    *   **Important:** `MPI_Irecv` returns immediately. The `request` object is used to check the status or wait for completion.

*   `MPI_Wait(MPI_Request *request, MPI_Status *status)`
    *   **Description:** Blocks until the operation associated with the given `request` is complete.

#### 3.4 Tags

*   **Purpose:** Tags are used to distinguish between different types of messages being sent between processes. This is crucial in scenarios where a process might send multiple types of messages or receive messages from multiple sources.
*   **Matching:** MPI typically matches sends and receives based on communicator, source, destination, and tag. A receive for a specific tag will only pick up a send with the same tag.

---

### 4. Simple Parallel Programs using MPI

Let's illustrate with a basic example: a program where the root process (rank 0) sends a message to all other processes, and each process prints the received message.

#### Example: Sending a greeting to all processes

```c
#include <mpi.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int rank, size;
    char message[256];
    char greeting[256];

    // Initialize MPI
    MPI_Init(&argc, &argv);

    // Get the rank of the current process
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    // Get the total number of processes
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (rank == 0) {
        // Process 0 (root) prepares the greeting
        sprintf(greeting, "Hello from rank 0!");
        printf("Rank 0 sending: \"%s\"\n", greeting);

        // Send the greeting to all other processes
        for (int i = 1; i < size; i++) {
            MPI_Send(greeting, strlen(greeting) + 1, MPI_CHAR, i, 0, MPI_COMM_WORLD);
        }
    } else {
        // Other processes receive the greeting
        MPI_Recv(message, 256, MPI_CHAR, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Rank %d received: \"%s\"\n", rank, message);
    }

    // Finalize MPI
    MPI_Finalize();

    return 0;
}
```

**How to Compile and Run (using MPICH or OpenMPI):**

1.  **Save:** Save the code as `hello_mpi.c`.
2.  **Compile:**
    ```bash
    mpicc hello_mpi.c -o hello_mpi
    ```
3.  **Run:** To run with 4 processes:
    ```bash
    mpirun -np 4 ./hello_mpi
    ```

**Expected Output (order may vary slightly for the `printf` statements):**

```
Rank 0 sending: "Hello from rank 0!"
Rank 1 received: "Hello from rank 0!"
Rank 2 received: "Hello from rank 0!"
Rank 3 received: "Hello from rank 0!"
```

#### Example: Summing numbers using MPI

Let's say we want to sum numbers distributed across processes. Each process has a local sum, and we want to find the global sum.

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    int local_sum, global_sum;
    int send_buf, recv_buf;

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // Each process computes a local sum (e.g., based on its rank)
    local_sum = rank * 10; // Example: process 0 gets 0, 1 gets 10, 2 gets 20, etc.
    printf("Rank %d: local_sum = %d\n", rank, local_sum);

    // Initialize global_sum (only root needs it initially)
    global_sum = 0;

    // Use MPI_Reduce to sum values from all processes to the root (rank 0)
    // MPI_SUM is an operation that sums the values.
    // MPI_INT is the datatype.
    // 0 is the root rank.
    MPI_Reduce(&local_sum, &global_sum, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

    // Root process prints the final global sum
    if (rank == 0) {
        printf("Rank 0: global_sum = %d\n", global_sum);
    }

    MPI_Finalize();
    return 0;
}
```

**Expected Output (for 4 processes):**

```
Rank 0: local_sum = 0
Rank 1: local_sum = 10
Rank 2: local_sum = 20
Rank 3: local_sum = 30
Rank 0: global_sum = 60
```
(0 + 10 + 20 + 30 = 60)

---

### 5. Difference between Point-to-Point and Collective Communication

#### 5.1 Point-to-Point Communication

*   **Definition:** Communication between exactly two processes. One process sends, and another receives.
*   **Examples:** `MPI_Send`, `MPI_Recv`, `MPI_Isend`, `MPI_Irecv`.
*   **Characteristics:**
    *   Requires explicit specification of sender and receiver.
    *   Can be synchronous or asynchronous.
    *   Offers flexibility in message matching (using tags).
    *   Can lead to deadlocks if not carefully managed.

#### 5.2 Collective Communication

*   **Definition:** Communication operations that involve more than two processes simultaneously. These operations are typically associated with a specific communicator and involve all processes within that communicator.
*   **Examples:**
    *   **Broadcast:** One process sends data to all other processes. (`MPI_Bcast`)
    *   **Scatter:** One process distributes different pieces of data to all other processes. (`MPI_Scatter`)
    *   **Gather:** All processes send their data to one designated process. (`MPI_Gather`)
    *   **Allgather:** All processes send their data to all other processes. (`MPI_Allgather`)
    *   **Reduce:** All processes contribute data to a single process, which performs an aggregation operation (sum, max, min, etc.). (`MPI_Reduce`, `MPI_Allreduce`)
    *   **Barrier:** Synchronizes all processes in a communicator. (`MPI_Barrier`)
*   **Characteristics:**
    *   Involve groups of processes.
    *   Often more efficient than implementing the same functionality using point-to-point communication, as MPI implementations can optimize these operations.
    *   Provide higher-level abstractions for common parallel tasks.
    *   Can still lead to deadlocks if used improperly (e.g., incorrect order of collective calls).

**Illustrative Example: `MPI_Bcast` (Broadcast)**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    char message[256] = "This is a broadcast message.";
    int root = 0; // Process 0 is the root

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // Process 0 has the data, all others will receive it
    MPI_Bcast(message, 256, MPI_CHAR, root, MPI_COMM_WORLD);

    // All processes print the received message
    printf("Rank %d received: \"%s\"\n", rank, message);

    MPI_Finalize();
    return 0;
}
```

**Explanation:** Process 0 initializes `message`. `MPI_Bcast` ensures that a copy of `message` from process `root` (0) is sent to all other processes. After the `MPI_Bcast` call returns, all processes will have the broadcasted message in their `message` buffer.

---

### Practice Questions/Exercises

1.  **Conceptual:**
    *   Describe the core difference between shared memory and message passing parallel programming models.
    *   What is the primary advantage of MPI over trying to use raw network sockets for parallel programming?
    *   Explain the concept of a "communicator" and "rank" in MPI.

2.  **Function Usage:**
    *   Which MPI function is used to get the total number of processes in `MPI_COMM_WORLD`?
    *   What is the purpose of the `tag` argument in `MPI_Send` and `MPI_Recv`?
    *   What is the difference between `MPI_Send` and `MPI_Isend`? When might you prefer one over the other?

3.  **Coding Exercise:**
    *   Write an MPI program where process 0 collects a string from each of the other processes (rank 1 to `size-1`). Each process `i` (where `i > 0`) should send its rank as a string (e.g., "1", "2", etc.). Process 0 should then print all the received strings.
    *   Modify the `MPI_Reduce` example to calculate the product of numbers instead of the sum.

---

### Answers to Practice Questions

1.  **Conceptual:**
    *   **Shared Memory:** Processes share a common memory space, allowing direct access to data. Communication is implicit through shared variables. Easier to program for simple tasks but can face scalability issues and synchronization complexities.
    *   **Message Passing:** Processes have private memory and communicate by explicitly sending and receiving messages. More complex to program but scales well on distributed memory systems.
    *   **Advantage of MPI:** MPI provides a standardized, portable, and optimized interface for message passing, abstracting away hardware-specific details and offering a rich set of communication primitives.
    *   **Communicator:** A group of processes that can communicate with each other. `MPI_COMM_WORLD` is the default communicator containing all processes.
    *   **Rank:** A unique integer identifier (0 to `size-1`) for each process within a communicator.

2.  **Function Usage:**
    *   `MPI_Comm_size(MPI_COMM_WORLD, &size);`
    *   The `tag` argument helps in differentiating messages. A receive operation can be programmed to only accept messages with a specific tag, preventing unintended message mixing.
    *   `MPI_Send` is **blocking**: it returns only after the message has been placed in a send buffer for transmission. `MPI_Isend` is **non-blocking**: it returns immediately after initiating the send operation, allowing the calling process to continue execution. You might prefer `MPI_Isend` when you want to overlap computation with communication or to avoid blocking the entire process.

3.  **Coding Exercise:**

    **Program to collect strings from other processes:**

    ```c
    #include <mpi.h>
    #include <stdio.h>
    #include <string.h>

    int main(int argc, char *argv[]) {
        int rank, size;
        char buffer[256];
        int i;

        MPI_Init(&argc, &argv);
        MPI_Comm_rank(MPI_COMM_WORLD, &rank);
        MPI_Comm_size(MPI_COMM_WORLD, &size);

        if (rank == 0) {
            printf("Rank 0: Collecting messages...\n");
            for (i = 1; i < size; i++) {
                // Receive from each process i, with tag 0
                MPI_Recv(buffer, 256, MPI_CHAR, i, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
                printf("Rank 0 received from %d: \"%s\"\n", i, buffer);
            }
        } else {
            // Other processes send their rank as a string
            sprintf(buffer, "%d", rank);
            MPI_Send(buffer, strlen(buffer) + 1, MPI_CHAR, 0, 0, MPI_COMM_WORLD);
            printf("Rank %d sent: \"%s\"\n", rank, buffer);
        }

        MPI_Finalize();
        return 0;
    }
    ```

    **Program to calculate product using `MPI_Reduce`:**

    ```c
    #include <mpi.h>
    #include <stdio.h>

    int main(int argc, char *argv[]) {
        int rank, size;
        int local_product, global_product;
        int send_buf, recv_buf;

        MPI_Init(&argc, &argv);
        MPI_Comm_rank(MPI_COMM_WORLD, &rank);
        MPI_Comm_size(MPI_COMM_WORLD, &size);

        // Each process computes a local product (e.g., based on its rank)
        // Avoid multiplying by 0 if it's not the intended behavior
        local_product = (rank == 0) ? 1 : rank; // Example: process 0 gets 1, 1 gets 1, 2 gets 2, etc.
                                                // For a product, usually start with 1.
                                                // Let's adjust to make it more interesting
        if (rank == 0) local_product = 1; // Special case for root
        else local_product = rank; // Processes 1..N-1 use their rank

        printf("Rank %d: local_product = %d\n", rank, local_product);

        // Initialize global_product (only root needs it initially)
        // For product, the identity element is 1.
        global_product = 1;

        // Use MPI_Reduce to multiply values from all processes to the root (rank 0)
        // MPI_PROD is an operation that multiplies the values.
        MPI_Reduce(&local_product, &global_product, 1, MPI_INT, MPI_PROD, 0, MPI_COMM_WORLD);

        // Root process prints the final global product
        if (rank == 0) {
            printf("Rank 0: global_product = %d\n", global_product);
        }

        MPI_Finalize();
        return 0;
    }
    ```
    **Expected Output (for 4 processes with local_product = rank, but root = 1):**
    ```
    Rank 0: local_product = 1
    Rank 1: local_product = 1
    Rank 2: local_product = 2
    Rank 3: local_product = 3
    Rank 0: global_product = 6
    ```
    (1 * 1 * 2 * 3 = 6)

---

### Important Points to Remember

*   **`MPI_Init` and `MPI_Finalize`:** Always call these at the beginning and end of your MPI program, respectively.
*   **Blocking vs. Non-blocking:** Understand the difference between blocking (`MPI_Send`, `MPI_Recv`) and non-blocking (`MPI_Isend`, `MPI_Irecv`) communication and when to use them. Non-blocking calls require `MPI_Wait` or `MPI_Test` to ensure completion.
*   **Tags:** Use tags to distinguish messages and avoid unintended communication. `MPI_ANY_TAG` is useful for receiving any message, but specific tags are better for structured communication.
*   **`MPI_STATUS_IGNORE`:** A convenient way to ignore the `MPI_Status` output when you don't need information about the received message.
*   **Datatypes:** Use the correct MPI datatypes (e.g., `MPI_INT`, `MPI_DOUBLE`, `MPI_CHAR`).
*   **Collective Operations:** They simplify common parallel patterns and are often more efficient than manual point-to-point implementations.
*   **Deadlocks:** Be aware of potential deadlocks, especially in programs with complex communication patterns or where receives are posted before sends. Ensure that for every send, there is a corresponding receive, and they are correctly matched.

---
This concludes the overview of the message passing model and MPI basics. This foundational knowledge is essential for understanding more advanced parallel programming techniques.
