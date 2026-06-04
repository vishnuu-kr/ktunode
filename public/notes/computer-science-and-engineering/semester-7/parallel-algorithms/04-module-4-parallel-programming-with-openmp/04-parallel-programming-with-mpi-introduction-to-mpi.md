---
title: "Parallel Programming with MPI - Introduction to MPI"
subject: "PARALLEL ALGORITHMS"
module: "Module 4: Parallel Programming with OpenMP "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c708"
status: "completed"
scrapedAt: "2026-05-20T17:08:58.632Z"
---
## Module 4: Parallel Programming with OpenMP

## Topic: Parallel Programming with MPI - Introduction to MPI

**Context:** This topic is part of Module 4, which focuses on parallel programming paradigms. While the module title mentions OpenMP, this specific topic introduces **MPI (Message Passing Interface)**, a fundamental technology for parallel programming, particularly in distributed-memory systems. It's important to note the distinction and understand that while OpenMP targets shared-memory, MPI is designed for distributed-memory environments.

---

### 1. Introduction to MPI

**What is MPI?**

*   **MPI (Message Passing Interface)** is a standardized **API (Application Programming Interface)** for message passing communication between processes.
*   It's not a programming language itself but a specification for library functions that can be called from languages like C, C++, and Fortran.
*   MPI is designed for **distributed-memory parallel programming**, where each process has its own private memory.

**Why MPI?**

*   **Scalability:** MPI is crucial for scaling parallel applications across multiple nodes (computers) in a cluster.
*   **Portability:** The MPI standard ensures that MPI programs can run on a wide variety of hardware and operating systems without modification.
*   **Flexibility:** MPI supports various communication patterns, including one-to-one, one-to-many, and many-to-one.

**MPI Execution Model:**

*   **Process-based Parallelism:** MPI programs are executed by multiple independent processes.
*   **No Shared Memory:** Each process operates on its own data, and data sharing occurs explicitly through message passing.
*   **Rank and Communicator:**
    *   **Rank:** Each process in an MPI program is assigned a unique integer identifier called its **rank**. Ranks start from 0.
    *   **Communicator:** A communicator defines a group of processes that can communicate with each other. The default communicator is `MPI_COMM_WORLD`, which includes all processes launched for the MPI job.

---

### 2. Key Concepts and Definitions

**2.1. Processes:**

*   In MPI, "process" refers to an independent execution unit. These processes typically run on different nodes in a cluster, but can also run on the same node.
*   Each process has its own address space, meaning it cannot directly access the memory of other processes.

**2.2. Message Passing:**

*   The core mechanism for data exchange between MPI processes.
*   Involves sending data from one process and receiving it by another.
*   **Key components of message passing:**
    *   **Sender:** The process initiating the communication.
    *   **Receiver:** The process expecting to receive the data.
    *   **Data Buffer:** The memory location where the data to be sent or received is stored.
    *   **Tag:** An integer value used to identify specific messages, allowing processes to distinguish between different types of communications.
    *   **Communicator:** Specifies the group of processes involved in the communication.

**2.3. MPI Datatypes:**

*   MPI defines a set of predefined datatypes (e.g., `MPI_INT`, `MPI_FLOAT`, `MPI_CHAR`) that correspond to fundamental data types in C/C++.
*   These datatypes are used to specify the type and number of elements in a message.
*   **Derived Datatypes:** MPI also allows the creation of derived datatypes to represent more complex data structures like arrays, structs, or strided data.

**2.4. MPI Communication Modes:**

MPI offers different communication modes to control the behavior of send and receive operations:

*   **Blocking vs. Non-blocking:**
    *   **Blocking:** The operation (send or receive) does not return until it has completed (i.e., the message has been sent or received). This simplifies programming but can lead to deadlocks if not managed carefully.
    *   **Non-blocking:** The operation returns immediately, allowing the process to continue execution while the communication is in progress. This offers better performance and flexibility but requires careful management of communication completion.

*   **Buffered vs. Unbuffered:**
    *   **Buffered:** The send operation uses an MPI-provided buffer to store the message. This allows the sender to proceed without waiting for the receiver.
    *   **Unbuffered:** The send operation requires the receiver to be ready to accept the message.

**2.5. Common MPI Communication Functions:**

*   **`MPI_Init(int *argc, char ***argv)`:** Initializes the MPI environment. This must be the first MPI function called.
*   **`MPI_Finalize()`:** Terminates the MPI environment. This must be the last MPI function called.
*   **`MPI_Comm_size(MPI_Comm comm, int *size)`:** Returns the number of processes in a given communicator.
*   **`MPI_Comm_rank(MPI_Comm comm, int *rank)`:** Returns the rank of the calling process in a given communicator.
*   **`MPI_Send(void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm)`:** Performs a blocking send operation.
    *   `buf`: Pointer to the send buffer.
    *   `count`: Number of elements in the buffer.
    *   `datatype`: MPI datatype of the elements.
    *   `dest`: Rank of the destination process.
    *   `tag`: Message tag.
    *   `comm`: Communicator.
*   **`MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status)`:** Performs a blocking receive operation.
    *   `buf`: Pointer to the receive buffer.
    *   `count`: Maximum number of elements to receive.
    *   `datatype`: MPI datatype of the elements.
    *   `source`: Rank of the source process.
    *   `tag`: Message tag.
    *   `comm`: Communicator.
    *   `status`: MPI status object to get information about the received message.
*   **`MPI_Sendrecv(void *sendbuf, int sendcount, MPI_Datatype sendtype, int dest, int sendtag, void *recvbuf, int recvcount, MPI_Datatype recvtype, int source, int recvtag, MPI_Comm comm, MPI_Status *status)`:** Performs a combined send and receive operation. This is useful for avoiding deadlocks in certain communication patterns.

---

### 3. Examples

**Example 1: Simple "Hello, World!" with MPI**

This example demonstrates how to initialize MPI, get the rank and size, and print a message from each process.

**C Code:**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;

    // Initialize the MPI environment
    MPI_Init(&argc, &argv);

    // Get the number of processes
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // Get the rank of the current process
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    // Print a "Hello, World!" message from each process
    printf("Hello from process %d of %d\n", rank, size);

    // Finalize the MPI environment
    MPI_Finalize();

    return 0;
}
```

**How to Compile and Run:**

1.  **Compile:** Using an MPI compiler (e.g., `mpicc`):
    ```bash
    mpicc hello_mpi.c -o hello_mpi
    ```
2.  **Run:** Using `mpirun` or `mpiexec` to launch multiple processes. For example, to run with 4 processes:
    ```bash
    mpirun -np 4 ./hello_mpi
    ```

**Expected Output (order may vary):**

```
Hello from process 0 of 4
Hello from process 2 of 4
Hello from process 1 of 4
Hello from process 3 of 4
```

**Example 2: Point-to-Point Communication (Send/Receive)**

This example shows a process with rank 0 sending a message to process 1, and process 1 receiving it.

**C Code:**

```c
#include <mpi.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int rank, size;
    char message[20];
    int message_len;

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (size < 2) {
        fprintf(stderr, "This program requires at least 2 processes.\n");
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    if (rank == 0) {
        // Process 0 sends a message
        strcpy(message, "Hello from rank 0!");
        message_len = strlen(message) + 1; // Include null terminator

        printf("Rank 0 sending: \"%s\"\n", message);
        MPI_Send(message, message_len, MPI_CHAR, 1, 0, MPI_COMM_WORLD);
    } else if (rank == 1) {
        // Process 1 receives the message
        MPI_Recv(message, 20, MPI_CHAR, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Rank 1 received: \"%s\"\n", message);
    }

    MPI_Finalize();
    return 0;
}
```

**How to Compile and Run:**

1.  **Compile:**
    ```bash
    mpicc send_recv_mpi.c -o send_recv_mpi
    ```
2.  **Run:**
    ```bash
    mpirun -np 2 ./send_recv_mpi
    ```

**Expected Output:**

```
Rank 0 sending: "Hello from rank 0!"
Rank 1 received: "Hello from rank 0!"
```

**Explanation:**

*   Process 0 sends the string "Hello from rank 0!" to process 1.
*   The `MPI_Send` and `MPI_Recv` calls use the same `tag` (0) and `communicator` (`MPI_COMM_WORLD`) to match the message.
*   The `MPI_STATUS_IGNORE` is used as a placeholder since we don't need information about the received message in this simple case.

---

### 4. Practice Questions or Exercises

**Question 1: Initialization and Termination**

What are the two fundamental MPI functions that must be called to initialize and terminate an MPI program, respectively?

**Answer:**
`MPI_Init()` and `MPI_Finalize()`.

**Question 2: Process Identification**

How can a process determine its unique identifier and the total number of processes participating in an MPI job?

**Answer:**
A process can determine its unique identifier (rank) using `MPI_Comm_rank()` and the total number of processes using `MPI_Comm_size()`. Both functions take a communicator (typically `MPI_COMM_WORLD`) as an argument.

**Question 3: Point-to-Point Communication Logic**

Consider a scenario where process A sends a message to process B. What information must be consistent between the `MPI_Send` call in process A and the `MPI_Recv` call in process B for the communication to succeed?

**Answer:**
The communicator (`MPI_COMM_WORLD` in most cases) and the message tag must be the same for both the sender and receiver. The destination rank in `MPI_Send` must be the rank of process B, and the source rank in `MPI_Recv` must be the rank of process A.

**Question 4: Basic MPI Program Structure (Fill in the blanks)**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank;

    ____( &argc, &argv ); // Initialize MPI

    ____( MPI_COMM_WORLD, &rank ); // Get rank

    printf("My rank is: %d\n", rank);

    ____(); // Finalize MPI

    return 0;
}
```

**Answer:**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank;

    MPI_Init( &argc, &argv ); // Initialize MPI

    MPI_Comm_rank( MPI_COMM_WORLD, &rank ); // Get rank

    printf("My rank is: %d\n", rank);

    MPI_Finalize(); // Finalize MPI

    return 0;
}
```

**Question 5: Array Summation (Conceptual)**

Imagine you have an array distributed across multiple processes. How would you use MPI to calculate the sum of all elements in the array? (Describe the steps, not necessarily the code).

**Answer:**

1.  **Initialization:** All processes initialize MPI.
2.  **Data Distribution:** The array is partitioned, and each process holds a portion of the array.
3.  **Local Summation:** Each process calculates the sum of its local portion of the array.
4.  **Global Reduction:** A collective communication operation called **reduction** is used. This involves processes sending their local sums to a designated process (e.g., rank 0), which then sums up all received local sums to get the global sum. Alternatively, a tree-based reduction can be performed where processes exchange partial sums with each other.
5.  **Output:** The designated process (or all processes) prints the final global sum.

---

### 5. Important Points to Remember

*   **MPI is for Distributed Memory:** Unlike OpenMP which targets shared-memory systems, MPI is primarily used for parallel programming on distributed-memory architectures (clusters of computers).
*   **Explicit Communication:** Data sharing in MPI is achieved through explicit message passing (`MPI_Send`, `MPI_Recv`, etc.). Processes cannot directly access each other's memory.
*   **Processes, Not Threads:** MPI programs run as multiple independent processes, each with its own memory space.
*   **Initialization and Finalization:** `MPI_Init()` must be called before any other MPI function, and `MPI_Finalize()` must be called before the program exits.
*   **Communicators and Ranks:** Ranks are unique identifiers for processes within a communicator. `MPI_COMM_WORLD` is the default communicator that includes all processes.
*   **Message Matching:** For `MPI_Send` and `MPI_Recv` to work correctly, the communicator, source, destination, and tag must match between the sending and receiving processes.
*   **Blocking vs. Non-blocking:** Understand the difference and when to use each. Blocking operations are simpler but can lead to deadlocks. Non-blocking operations offer better performance but require more careful management.
*   **Deadlock Potential:** In MPI, circular waiting for messages can lead to deadlocks. Careful design of communication patterns and the use of functions like `MPI_Sendrecv` can help prevent this.
*   **Collective Operations:** MPI provides powerful collective communication operations (like `MPI_Bcast`, `MPI_Reduce`, `MPI_Allgather`) that simplify common parallel patterns and are often more efficient than implementing them with multiple point-to-point calls.

---
