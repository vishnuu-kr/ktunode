---
title: "Multithreading models"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af9b"
status: "completed"
scrapedAt: "2026-05-20T16:13:56.683Z"
---
# OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Multithreading Models

## Learning Outcomes:

Upon completion of this section, you will be able to:

*   Describe the concept of multithreading and its benefits.
*   Explain different multithreading models: Many-to-One, One-to-One, and Many-to-Many.
*   Compare and contrast the advantages and disadvantages of each multithreading model.
*   Discuss the implementation issues related to multithreading, such as thread management and resource allocation.
*   Understand the concept of two-level model and its advantages.

## 1. Introduction to Multithreading

### 1.1. Concept of Multithreading

*   **Definition:** Multithreading is a technique that allows multiple threads of execution to exist within the context of a single process. These threads share the same code section, data section, and operating system resources, but have their own program counter, stack, and register set.

*   **Process vs. Thread:**
    *   **Process:** A heavyweight entity that requires significant system resources (memory, files, etc.) and represents an independent execution environment.
    *   **Thread:** A lightweight entity within a process, sharing resources and allowing for concurrency.

*   **Concurrency vs. Parallelism:**
    *   **Concurrency:** Multiple tasks making progress, but not necessarily executing simultaneously. This is often achieved through time-sharing.
    *   **Parallelism:** Multiple tasks executing simultaneously on different processing cores or CPUs. Multithreading can enable parallelism on multi-core systems.

### 1.2. Benefits of Multithreading

*   **Responsiveness:**  Allows a program to remain responsive even if part of it is blocked or performing a lengthy operation. For example, a GUI application can remain interactive while processing a large file.
*   **Resource Sharing:** Threads share the same process resources, reducing the overhead of creating and managing separate processes.
*   **Economy:** Creating and managing threads is generally less expensive than creating and managing processes.
*   **Scalability:** Allows applications to take advantage of multi-core architectures, improving performance by executing different threads in parallel.
*   **Improved throughput:** When waiting on an I/O operation, one thread can be blocked while others continue executing, improving overall application throughput.

## 2. Multithreading Models

### 2.1. Many-to-One Model

*   **Description:**  Multiple user-level threads are mapped to a single kernel thread.

*   **Diagram:**

    ```
    User-Level Threads:  T1  T2  T3  T4  ...
                              |
                              |
    Kernel-Level Thread:      K1
    ```

*   **Advantages:**
    *   Thread management is done in user space, so it's very efficient.
    *   Portable (no need for kernel support for threads).

*   **Disadvantages:**
    *   The entire process will block if a thread makes a blocking system call because only one thread can access the kernel at a time.
    *   Unable to take advantage of multiple processors as only one thread can run at a time.
    *   Limited concurrency

*   **Example:**  GNU Portable Threads, Java green threads (historically).

### 2.2. One-to-One Model

*   **Description:** Each user-level thread is mapped to a corresponding kernel thread.

*   **Diagram:**

    ```
    User-Level Threads:  T1  T2  T3  T4  ...
                              |   |   |   |
    Kernel-Level Threads:      K1  K2  K3  K4  ...
    ```

*   **Advantages:**
    *   Allows true concurrency. Threads can run in parallel on multi-core systems.
    *   If a thread makes a blocking system call, other threads can continue to execute.

*   **Disadvantages:**
    *   Creating a user thread requires creating a corresponding kernel thread, which can be more resource intensive.
    *   Limitation on the number of threads due to kernel overhead. The operating system might impose a limit.

*   **Example:** Linux (NPTL - Native POSIX Threads Library), Windows.

### 2.3. Many-to-Many Model

*   **Description:**  Multiple user-level threads are mapped to a smaller or equal number of kernel threads.

*   **Diagram:**

    ```
    User-Level Threads:  T1  T2  T3  T4  T5  T6  ...
                              \   / \   /
                               \ /   \ /
    Kernel-Level Threads:      K1      K2
    ```

*   **Advantages:**
    *   Developers can create as many user threads as necessary, and the corresponding kernel threads can run in parallel on a multiprocessor system.
    *   Overcomes the limitations of both the Many-to-One and One-to-One models.
    *   Blocking system calls do not block the entire process.

*   **Disadvantages:**
    *   Complex to implement. Requires sophisticated thread management and scheduling mechanisms.
    *   Can still be limited by the number of kernel threads available.

*   **Example:**  Solaris (historically, now primarily One-to-One), HP-UX, Tru64 UNIX.

### 2.4 Two-Level Model

*   **Description:** A combination of the Many-to-Many and One-to-One models. It allows a user-level thread to be bound to a kernel thread.

*   **Diagram:**

    ```
    User-Level Threads:  T1  T2  T3  T4  T5  T6  ...
                                     |
                              \   / \   /
                               \ /   \ /
    Kernel-Level Threads:      K1      K2   K3
    ```

*   **Advantages:**
    *   Offers flexibility by allowing both Many-to-Many and One-to-One relationships between user and kernel threads.
    *   Provides the best of both worlds, allowing for concurrency, parallelism, and control over resource allocation.

*   **Disadvantages:**
    *   Most complex model to implement.

*   **Example:** IRIX, HP-UX (to a certain extent).

## 3. Implementation Issues

### 3.1. Thread Management

*   **Thread Creation:**  Creating new threads involves allocating memory for the thread's stack and creating a thread control block.
*   **Thread Termination:** Reclaiming the thread's resources (stack, etc.) when the thread is finished.  Care must be taken to avoid dangling pointers or memory leaks.
*   **Thread Switching:** Switching between threads involves saving the state of the current thread and restoring the state of the next thread. This is often handled by a thread scheduler within the process or by the kernel.

### 3.2. Resource Allocation

*   **CPU Scheduling:**  Determining which thread gets access to the CPU at any given time.  Scheduling algorithms can prioritize threads based on importance or urgency.
*   **Memory Management:** Managing the shared memory space of the process, ensuring that threads do not interfere with each other's memory.
*   **I/O Resource Management:** Coordinating access to shared I/O resources (files, network connections) to prevent conflicts.  Mutexes and semaphores are often used for this purpose.

### 3.3. Context Switching

*   Switching the CPU from one process or thread to another.

*   Process context switching involves saving the entire process state, including the memory map and file handles. It's heavyweight.

*   Thread context switching within the same process is lighter weight because threads share the same address space and resources. Only the register values and stack pointer need to be switched.

### 3.4 Thread Cancellation
*   Terminating a thread before it has completed. Two approaches:
    *   **Asynchronous cancellation:** one thread immediately terminates the target thread.
    *   **Deferred cancellation:** the target thread periodically checks whether it should terminate, allowing it to cleanly release resources before exiting. Deferred cancellation is generally safer and more predictable.

### 3.5 Signal Handling

*   Signals are used in UNIX systems to notify a process of the occurrence of a particular event.

*   In a single-threaded program, signals are delivered to the process as a whole.

*   In a multithreaded program, the following options exist for signal delivery:
    *   Deliver the signal to the thread to which the signal applies.
    *   Deliver the signal to every thread in the process.
    *   Deliver the signal to certain threads in the process.
    *   Assign a specific thread to receive all signals for the process.

## 4. Important Points to Remember

*   Multithreading allows concurrency and can improve performance, especially on multi-core systems.
*   The choice of multithreading model depends on the specific application requirements and the underlying operating system.
*   Careful thread management and resource allocation are crucial to avoid deadlocks, race conditions, and other concurrency-related issues.
*   Context switching is an overhead associated with multithreading, but it's generally less expensive than process context switching.

## 5. Practice Questions and Exercises

**Question 1:** Explain the difference between concurrency and parallelism.

**Answer:** Concurrency means that multiple tasks are making progress, but they may not be executing simultaneously. Parallelism means that multiple tasks are executing simultaneously, typically on different processing cores.

**Question 2:**  What are the advantages and disadvantages of the Many-to-One multithreading model?

**Answer:**
*   Advantages: Efficient thread management in user space, portable.
*   Disadvantages: Entire process blocks if one thread blocks, cannot take advantage of multiple processors, limited concurrency.

**Question 3:**  In which multithreading model does a blocking system call block the entire process?

**Answer:**  Many-to-One model.

**Question 4:** Which multithreading model is commonly used in Linux?

**Answer:** One-to-One model (NPTL).

**Question 5:** Explain the advantages of the two-level model compared to the many-to-many model.

**Answer:** The two-level model offers the flexibility to bind user-level threads directly to kernel threads (One-to-One) in addition to having multiple user threads mapped to a smaller number of kernel threads (Many-to-Many).  This allows for more control over resource allocation and concurrency.  It combines the benefits of both models.

**Question 6:** What is deferred cancellation? Why is it preferred?

**Answer:** Deferred cancellation is a thread cancellation technique where the target thread periodically checks if it should terminate. It's preferred because it allows the thread to cleanly release resources before exiting, preventing potential issues like data corruption or resource leaks.

**Question 7:** Describe how signals are handled in a multithreaded process.

**Answer:** In a multithreaded process, signal delivery can be handled in several ways: delivering the signal to the specific thread it applies to, delivering it to every thread, delivering it to certain threads, or assigning a dedicated thread to handle all signals for the process. The choice depends on the signal's nature and the application's requirements.
