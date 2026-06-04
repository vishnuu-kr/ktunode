---
title: "A short introduction to MPI , A simple example"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 4: Distributed"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c635"
status: "completed"
scrapedAt: "2026-05-20T17:07:19.060Z"
---
# High Performance Computing: Module 4 - Distributed Computing

## Topic: A Short Introduction to MPI and a Simple Example

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concepts and purpose of the Message Passing Interface (MPI).
*   Identify common MPI communication patterns.
*   Write and execute a basic MPI program.
*   Understand the roles of rank and communicator in MPI.
*   Explain the difference between point-to-point and collective communication.

---

### 2. Introduction to MPI

#### What is MPI?

*   **Definition:** The Message Passing Interface (MPI) is a standardized, portable, and widely used library for parallel programming. It defines a set of functions that allow processes to communicate with each other by sending and receiving messages.
*   **Purpose:** MPI is designed for distributed-memory systems, where each processor has its own private memory. It enables programmers to write parallel applications that can run on a cluster of computers or multiple nodes in a supercomputer.
*   **Key Idea:** Instead of sharing memory (like in shared-memory programming), MPI processes explicitly send data to other processes and receive data from them. This is often referred to as **message passing**.

#### Why Use MPI?

*   **Scalability:** MPI is highly scalable and can be used to develop applications that run on thousands or even millions of processors.
*   **Portability:** MPI programs can be compiled and run on a wide variety of hardware architectures and operating systems with minimal or no modifications.
*   **Standardization:** It's a well-defined standard, meaning implementations are available for most parallel computing platforms.
*   **Flexibility:** Supports various communication patterns, from simple one-to-one messages to complex group operations.

#### Core Concepts in MPI

*   **Process:** An independent execution unit within an MPI application. Each process has its own memory space.
*   **Communicator:** An MPI object that defines a group of processes and the communication context in which they operate. It acts as a "virtual network" or "channel" for communication.
    *   **`MPI_COMM_WORLD`:** The default, predefined communicator that includes all processes launched in an MPI job.
*   **Rank:** A unique integer identifier assigned to each process within a communicator. Ranks start from 0.
    *   The process with rank 0 is often designated as the "master" or "root" process, but this is a convention, not a strict rule enforced by MPI itself.
*   **Message:** A unit of data exchanged between processes. A message typically consists of:
    *   **Data Buffer:** The actual data being sent.
    *   **Data Type:** The type of data (e.g., integer, float, character). MPI provides predefined types like `MPI_INT`, `MPI_FLOAT`, `MPI_CHAR`.
    *   **Count:** The number of elements of the specified data type.
    *   **Destination/Source:** The rank of the process to send to or receive from.
    *   **Tag:** An integer used to distinguish between different types of messages between the same pair of processes.

#### Common MPI Communication Patterns

1.  **Point-to-Point Communication:**
    *   Involves exactly two processes: a sender and a receiver.
    *   **Blocking Send:** The sending process is blocked until the message is placed in a send buffer (it doesn't necessarily mean the message has reached the receiver).
    *   **Non-blocking Send:** The sending process continues execution immediately after initiating the send operation.
    *   **Blocking Receive:** The receiving process is blocked until the message arrives.
    *   **Non-blocking Receive:** The receiving process continues
