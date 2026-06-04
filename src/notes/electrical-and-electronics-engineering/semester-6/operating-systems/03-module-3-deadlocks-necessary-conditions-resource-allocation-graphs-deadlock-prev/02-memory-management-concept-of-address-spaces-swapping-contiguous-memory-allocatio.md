---
title: "Memory Management: Concept of address spaces, Swapping, Contiguous memory allocation, fixed and variable partitions, Segmentation, Paging. Virtual memory, Demand paging, Page replacement algorithms."
subject: "OPERATING SYSTEMS"
module: "Module 3: Deadlocks: Necessary conditions, Resource allocation graphs, Deadlock prevention, Deadlock avoidance – Banker’s algorithms, Deadlock detection, Recovery from deadlock."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365e6"
status: "completed"
scrapedAt: "2026-05-23T16:30:11.461Z"
---
Here are comprehensive study notes for the specified topic in Operating Systems, focusing on Memory Management within the context of Module 3 (Deadlocks).

## Module 3: Deadlocks and Memory Management

This module delves into two critical aspects of operating systems: the prevention and management of deadlocks, and the efficient allocation and utilization of memory. While the module title primarily focuses on deadlocks, the provided description explicitly includes **Memory Management** as a key topic within this module. This suggests an understanding of how memory management strategies can influence or be influenced by deadlock situations, or that memory management is a core component of OS functionality covered in this module.

---

### **Part 1: Deadlocks**

This section covers the fundamental concepts of deadlocks in operating systems.

#### **Learning Outcome Alignment:**

*   **CO4:** Explain any one method for detection, prevention, avoidance, and recovery for managing deadlocks in Operating Systems.

#### **Key Concepts and Definitions:**

*   **Deadlock:** A situation where a set of processes are blocked indefinitely, each holding a resource and waiting to acquire a resource held by another process in the set.

*   **Necessary Conditions for Deadlock (Coffman Conditions):** For a deadlock to occur, all four of these conditions must hold simultaneously.

    1.  **Mutual Exclusion:** At least one resource must be held in a non-sharable mode; that is, only one process can use the resource at any given time. If another process requests access to this resource, the requesting process must wait until the resource has been released.
        *   *Example:* A printer can only be used by one process at a time.

    2.  **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.
        *   *Example:* Process P1 holds resource R1 and is waiting for resource R2, which is held by Process P2.

    3.  **No Preemption:** Resources cannot be preempted; that is, a resource can only be released voluntarily by the process holding it after that process has completed its task.
        *   *Example:* If a process is holding a CPU core, it cannot be forcibly taken away by the OS.

    4.  **Circular Wait:** There must exist a set of waiting processes $\{P_0, P_1, \dots, P_n\}$ such that $P_0$ is waiting for a resource held by $P_1$, $P_1$ is waiting for a resource held by $P_2$, ..., $P_{n-1}$ is waiting for a resource held by $P_n$, and $P_n$ is waiting for a resource held by $P_0$.
        *   *Example:* P1 holds R1, wants R2. P2 holds R2, wants R1. This forms a cycle.

#### **Resource Allocation Graphs (RAG):**

*   A directed graph used to represent the state of resources and processes in a system.
*   **Components:**
    *   **Processes:** Represented by circles.
    *   **Resource Types:** Represented by squares.
    *   **Instance of a Resource Type:** Represented by a square with a dot inside.
    *   **Assignment Edge:** A directed edge from a resource instance to a process, indicating that the process currently holds the resource. (Resource -> Process)
    *   **Request Edge:** A directed edge from a process to a resource type, indicating that the process is requesting an instance of that resource type. (Process -> Resource)

*   **Deadlock Detection using RAG:**
    *   **If the graph contains a cycle:** A deadlock *may* exist.
    *   **If the graph contains a cycle and each resource type in the cycle has only a single instance:** A deadlock *definitely* exists.
    *   **If the graph contains a cycle and resource types have multiple instances:** A deadlock *may* exist. To confirm, we need to check if all instances are allocated. If there are free instances, the cycle might be broken.

#### **Deadlock Prevention:**

*   Strategies that ensure at least one of the four necessary conditions for deadlock cannot hold.

    1.  **Preventing Mutual Exclusion:** Not always possible, as some resources are inherently non-sharable (e.g., printers). In some cases, like read-only files, mutual exclusion can be relaxed.

    2.  **Preventing Hold and Wait:**
        *   **Strategy:** Require processes to request and be allocated all their required resources *before* they begin execution.
        *   **Pros:** Prevents hold and wait.
        *   **Cons:** Can lead to very low resource utilization and potential starvation if a process needs a resource that is never released. It's also difficult to know all resource needs in advance.

    3.  **Preventing No Preemption:**
        *   **Strategy:** If a process holding resources is waiting for another resource, release all currently held resources. The process re-acquires all its needed resources when it restarts.
        *   **Pros:** Prevents no preemption.
        *   **Cons:** Can be complex to implement and may lead to process starvation.

    4.  **Preventing Circular Wait:**
        *   **Strategy:** Impose a total ordering of all resource types. Require that each process requests resources in increasing order of enumeration.
        *   *Example:* If resource types are R1, R2, R3, a process cannot request R2 if it already holds R3.
        *   **Pros:** Effectively prevents circular wait.
        *   **Cons:** Can be difficult to define a universal ordering for all resource types.

#### **Deadlock Avoidance:**

*   Strategies that dynamically analyze resource allocation to ensure that the system never enters an unsafe state (a state from which a deadlock can occur).

    *   **Unsafe State:** A state where there is a sequence of process executions that leads to a deadlock.
    *   **Safe State:** A state where there exists a sequence of process executions that allows all processes to complete without deadlocks.

    *   **Banker's Algorithm (for Deadlock Avoidance):**
        *   **Concept:** Processes declare their maximum resource needs in advance. The OS then checks if granting a request would lead to an unsafe state.
        *   **Data Structures:**
            *   `Available`: A vector of length *m* indicating the number of available instances of each resource type.
            *   `Max`: An *n x m* matrix defining the maximum demand of each process for each resource type.
            *   `Allocation`: An *n x m* matrix defining the number of resources of each type currently allocated to each process.
            *   `Need`: An *n x m* matrix defining the remaining resource needs of each process (`Need[i,j] = Max[i,j] - Allocation[i,j]`).

        *   **Safety Algorithm:**
            1.  Initialize `Work = Available` and `Finish[i] = false` for all *i*.
            2.  Find an index `i` such that `Finish[i] == false` and `Need[i] <= Work`.
            3.  If no such `i` exists, go to step 4.
            4.  If such an `i` is found:
                *   `Work = Work + Allocation[i]`
                *   `Finish[i] = true`
                *   Go to step 2.
            5.  If `Finish[i] == true` for all *i*, then the system is in a safe state.

        *   **Resource-Request Algorithm (for a specific process P_i):**
            1.  If `Request[i] <= Need[i]`:
                *   If `Request[i] <= Available`:
                    *   Pretend to allocate:
                        *   `Available = Available - Request[i]`
                        *   `Allocation[i] = Allocation[i] + Request[i]`
                        *   `Need[i] = Need[i] - Request[i]`
                    *   Check if the new state is safe using the Safety Algorithm.
                    *   If safe, grant the request.
                    *   If unsafe, deny the request and return P_i to its original state.
                *   Else (not enough available resources): P_i must wait.
            2.  Else (request exceeds maximum need): Terminate P_i.

        *   **Important Consideration:** Banker's Algorithm requires processes to declare their maximum resource needs *before* execution, which is often impractical.

#### **Deadlock Detection:**

*   Periodically check the system for the presence of deadlocks. If a deadlock is detected, an appropriate recovery action is taken.
*   **Algorithm (for multiple instances of each resource type):**
    1.  Initialize `Work = Available` and `Finish[i] = false` for all processes that have no allocated resources. For processes with allocated resources, `Finish[i] = true`.
    2.  Find an index `i` such that `Finish[i] == false` and `Request[i] <= Work`. (Where `Request[i]` is the vector of resources currently requested by process `i`).
    3.  If no such `i` exists, go to step 4.
    4.  If such an `i` is found:
        *   `Work = Work + Allocation[i]` (Release resources held by process `i`).
        *   `Finish[i] = true`.
        *   Go to step 2.
    5.  If `Finish[i] == false` for some `i`, then the system is in a deadlocked state, and process `i` is involved in the deadlock.

#### **Recovery from Deadlock:**

*   If a deadlock is detected, the OS must break the cycle.

    1.  **Process Termination:**
        *   **Abort all deadlocked processes:** Simple but expensive.
        *   **Abort one process at a time:** Select a process based on cost (e.g., priority, progress made, resources used) and repeat until the deadlock is resolved.

    2.  **Resource Preemption:**
        *   **Select a victim:** Choose a process to preempt resources from.
        *   **Rollback:** Restore the preempted process to a previous checkpoint. This is complex and requires a robust rollback mechanism.
        *   **Starvation:** Repeatedly selecting the same victim can lead to starvation.

---

### **Part 2: Memory Management**

This section covers various techniques for managing computer memory.

#### **Learning Outcome Alignment:**

*   **CO5:** Explain the memory management algorithms in Operating Systems.

#### **Key Concepts and Definitions:**

*   **Memory Management:** The process of allocating and deallocating memory space to various processes and tasks within a computer system. Its goals include efficiency, protection, and allowing multiple processes to share memory.

*   **Address Spaces:**
    *   **Logical Address (Virtual Address):** An address generated by the CPU. It's independent of the physical memory addresses.
    *   **Physical Address:** The actual address in the main memory.
    *   **Memory Management Unit (MMU):** Hardware that translates logical addresses into physical addresses.

*   **Swapping:**
    *   **Concept:** Moving processes (or parts of processes) between main memory and secondary storage (e.g., hard disk) to free up main memory for other processes.
    *   **Full Swapping:** The entire process is moved.
    *   **Partial Swapping:** Only parts of a process are moved (e.g., pages in virtual memory).
    *   **Overlays:** A technique for limited memory environments where parts of a program are loaded into memory only when needed.

*   **Contiguous Memory Allocation:**
    *   **Concept:** Each process is allocated a single, contiguous block of physical memory.
    *   **External Fragmentation:** Occurs when there is enough total memory to satisfy a request, but the memory is not contiguous; it's scattered in small, unusable holes.

    *   **Fixed Partitions (Static Partitioning):**
        *   **Concept:** Main memory is divided into a fixed number of partitions of fixed size.
        *   **Pros:** Simple to implement.
        *   **Cons:**
            *   **Internal Fragmentation:** If a process is smaller than the partition it's allocated to, the remaining space in the partition is wasted.
            *   Limited number of processes that can be in memory.

    *   **Variable Partitions (Dynamic Partitioning):**
        *   **Concept:** Main memory is initially one large block. When a process arrives, an exactly sized block is allocated from the available free space. When a process terminates, its memory is returned to the free space.
        *   **Allocation Strategies:**
            *   **First-Fit:** Allocate the first free block that is large enough.
            *   **Best-Fit:** Allocate the smallest free block that is large enough.
            *   **Worst-Fit:** Allocate the largest free block.
        *   **Pros:** Reduces internal fragmentation.
        *   **Cons:**
            *   **External Fragmentation:** Can still occur, even with sophisticated allocation strategies.
            *   Requires complex memory management.

*   **Segmentation:**
    *   **Concept:** Memory is divided into segments, each representing a logical unit of a program (e.g., code segment, data segment, stack segment). Segments can be of variable size.
    *   **Logical Address:** Consists of a `(segment number, offset)`.
    *   **Hardware Support:** Requires a **Segment Table**, where each entry contains the base address and limit (size) of the segment.
    *   **Pros:**
        *   Supports sharing of segments between processes.
        *   Can enforce protection mechanisms on individual segments.
        *   More closely matches the programmer's view of memory.
    *   **Cons:**
        *   External fragmentation can occur due to variable segment sizes.

*   **Paging:**
    *   **Concept:** Memory is divided into fixed-size blocks called **frames**. Processes are also divided into fixed-size blocks of the same size called **pages**. Pages of a process can be loaded into any available frame in physical memory.
    *   **Logical Address:** Consists of a `(page number, offset)`.
    *   **Hardware Support:** Requires a **Page Table**, which maps page numbers to frame numbers.
    *   **Page Table Structure:** Each entry contains the frame number where the corresponding page is stored. Other bits can indicate validity, protection, etc.
    *   **Address Translation:**
        1.  The CPU generates a logical address.
        2.  The MMU extracts the page number.
        3.  The MMU uses the page number as an index into the page table to find the corresponding frame number.
        4.  The offset is appended to the frame number to form the physical address.
    *   **Pros:**
        *   Eliminates external fragmentation.
        *   Allows processes to be non-contiguous in physical memory.
    *   **Cons:**
        *   **Internal fragmentation:** Can occur if a process is not an exact multiple of the page size.
        *   Overhead of page table management.
        *   Can lead to multiple memory accesses (page table lookup + data access).

#### **Virtual Memory:**

*   **Concept:** A memory management technique that allows the execution of processes that may not be completely resident in main memory. It creates an illusion of a larger memory space than physically available.
*   **Benefits:**
    *   Allows users to run larger programs.
    *   Allows more processes to be run concurrently.
    *   Improves system throughput.

#### **Demand Paging:**

*   **Concept:** A process is loaded into memory only when it is needed (i.e., when a page is accessed for the first time). Pages are brought into memory only on demand.
*   **Page Fault:** An interrupt generated by the MMU when a process tries to access a page that is not currently in physical memory.
*   **Demand Paging Steps:**
    1.  A process requests access to a page.
    2.  The MMU checks the page table. If the page is not in memory (invalid bit set), a page fault occurs.
    3.  The OS handles the page fault:
        *   Finds the required page on secondary storage.
        *   Finds a free frame in physical memory. If no free frame is available, a page replacement algorithm is used to select a victim page to be swapped out.
        *   Loads the required page into the chosen frame.
        *   Updates the page table for the process.
        *   Restarts the instruction that caused the page fault.

#### **Page Replacement Algorithms:**

*   When a page fault occurs and no free frames are available, a page that is currently in memory must be swapped out to make room for the new page. The goal of page replacement algorithms is to choose a victim page that is least likely to be used in the near future.

    1.  **First-In, First-Out (FIFO):**
        *   **Concept:** Replace the oldest page in memory (the one that has been in memory the longest).
        *   **Implementation:** Uses a queue. New pages are added to the tail, and the page at the head is replaced.
        *   **Drawback:** Can perform poorly, as the oldest page might be frequently used (e.g., the program counter).

    2.  **Optimal (OPT) / Minimum Replacement:**
        *   **Concept:** Replace the page that will not be used for the longest period of time.
        *   **Implementation:** Requires knowledge of future page accesses, making it impractical for real-time systems but useful as a benchmark.
        *   **Advantage:** Provides the minimum possible number of page faults.

    3.  **Least Recently Used (LRU):**
        *   **Concept:** Replace the page that has not been used for the longest period of time. This is based on the "locality of reference" principle, assuming that pages used recently will be used again soon.
        *   **Implementation:** Can be implemented using:
            *   **Counters:** Associate a counter with each page, incrementing it on each access. The page with the smallest counter is replaced.
            *   **Stack:** Maintain a stack of page numbers. On access, move the accessed page to the top of the stack. The page at the bottom is the LRU page.
        *   **Pros:** Generally performs well.
        *   **Cons:** Can have significant hardware overhead for implementation.

    4.  **Least Frequently Used (LFU):**
        *   **Concept:** Replace the page that has been used the least number of times.
        *   **Implementation:** Requires maintaining usage counts for each page.
        *   **Drawback:** Can be slow to adapt to changes in usage patterns. A page used frequently early on might be incorrectly kept even if its usage drops significantly.

    5.  **Most Recently Used (MRU):**
        *   **Concept:** Replace the page that has been used most recently. This is rarely effective as recently used pages are likely to be used again soon.

    6.  **Approximation Algorithms (e.g., Second-Chance, Enhanced Second-Chance):**
        *   **Concept:** These algorithms approximate LRU behavior with less overhead.
        *   **Second-Chance:** Uses a reference bit. When a page fault occurs, scan the page frames. If a frame's reference bit is 0, replace that page. If it's 1, clear the bit and move to the next frame (giving it a "second chance").
        *   **Enhanced Second-Chance:** Uses both a reference bit (R) and a modify bit (M). The replacement order is:
            *   (0, 0): Neither recently used nor modified (best candidate).
            *   (0, 1): Not recently used but modified (write back needed).
            *   (1, 0): Recently used but not modified.
            *   (1, 1): Recently used and modified (worst candidate).

---

### **Important Points to Remember:**

*   **Deadlock Conditions:** All four conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) must hold for a deadlock to occur.
*   **RAG Cycles:** A cycle in an RAG is a necessary but not always sufficient condition for deadlock (unless each resource type has only one instance).
*   **Prevention vs. Avoidance:** Prevention guarantees deadlock will not happen by making one of the conditions impossible. Avoidance aims to keep the system in a safe state, thus preventing deadlocks.
*   **Banker's Algorithm:** A powerful avoidance algorithm but requires processes to declare maximum resource needs in advance, which is often impractical.
*   **Memory Management Goals:** Efficient utilization, protection, and allowing multiple processes.
*   **Fragmentation:** External fragmentation is a problem in contiguous allocation and segmentation, while internal fragmentation is a problem in paging and fixed partitions.
*   **Paging vs. Segmentation:** Paging divides memory into fixed-size blocks, abstracting physical memory. Segmentation divides memory into logical, variable-size units, reflecting the program's structure.
*   **Virtual Memory:** Enables running programs larger than physical memory by using secondary storage.
*   **Page Fault:** A crucial event in demand paging, handled by the OS to bring pages into memory.
*   **LRU:** A highly effective page replacement algorithm, often approximated due to implementation complexity.

---

### **Practice Questions with Answers:**

**Deadlocks:**

1.  **Question:** List and briefly explain the four necessary conditions for a deadlock to occur.
    **Answer:**
    *   **Mutual Exclusion:** At least one resource is non-sharable.
    *   **Hold and Wait:** A process holds resources while waiting for others.
    *   **No Preemption:** Resources cannot be forcibly taken.
    *   **Circular Wait:** A cycle of processes waiting for each other's resources.

2.  **Question:** Consider a system with two processes, P1 and P2, and two resources, R1 and R2. P1 holds R1 and requests R2. P2 holds R2 and requests R1. Draw the Resource Allocation Graph for this scenario. Does a deadlock exist? Explain.
    **Answer:**
    *   **RAG:**
        *   Circle for P1, Circle for P2.
        *   Square for R1, Square for R2. Assume one instance of each.
        *   Edge from R1 to P1 (P1 holds R1).
        *   Edge from P1 to R2 (P1 requests R2).
        *   Edge from R2 to P2 (P2 holds R2).
        *   Edge from P2 to R1 (P2 requests R1).
    *   **Deadlock:** Yes, a deadlock exists because there is a cycle (P1 -> R2 -> P2 -> R1 -> P1), and each resource type has only a single instance.

3.  **Question:** What is the primary drawback of the "prevent hold and wait" strategy for deadlock prevention?
    **Answer:** It can lead to very low resource utilization and potential starvation, as processes might need to request all their resources upfront, even if some are not immediately needed.

**Memory Management:**

4.  **Question:** Differentiate between internal and external fragmentation. Give an example for each.
    **Answer:**
    *   **Internal Fragmentation:** Wasted space *within* an allocated block.
        *   *Example:* Allocating a 4KB block to a process that only needs 1KB. The remaining 3KB is internally fragmented.
    *   **External Fragmentation:** Wasted space in the form of small, non-contiguous holes *between* allocated blocks.
        *   *Example:* In contiguous allocation, after several processes are loaded and unloaded, memory might be fragmented into many small free blocks, none large enough for a new process, even if the total free space is sufficient.

5.  **Question:** Explain the purpose of a Page Table in paging. How does it work?
    **Answer:** The Page Table maps logical page numbers to physical frame numbers. When the CPU generates a logical address `(page number, offset)`, the page number is used as an index into the page table. The entry at that index contains the frame number where the page is located in physical memory. The offset is then appended to the frame number to form the physical address.

6.  **Question:** What is the fundamental principle behind the LRU page replacement algorithm?
    **Answer:** The principle of "locality of reference." It assumes that pages that have been used recently are likely to be used again soon, and therefore, the page least recently used is the best candidate for replacement.

7.  **Question:** Describe the steps involved in handling a page fault in a demand paging system.
    **Answer:**
    1.  A page fault interrupt occurs.
    2.  The OS checks if the referenced page is valid and if it's in secondary storage.
    3.  If valid, find a free frame. If no free frame, select a victim page using a page replacement algorithm and swap it out if dirty.
    4.  Load the required page from secondary storage into the chosen frame.
    5.  Update the page table for the process.
    6.  Restart the instruction that caused the fault.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **References:**

*   **Silberschatz, Galvin, Gagne - Operating System Concepts (9th Edition):** This textbook provides a comprehensive and widely accepted foundation for operating systems concepts, including detailed explanations of deadlocks, memory management techniques (contiguous allocation, segmentation, paging), virtual memory, and page replacement algorithms. Chapters on Deadlocks and Memory Management are highly relevant.
*   **Tanenbaum - Modern Operating Systems (6th Edition):** Another authoritative source that covers similar topics with a focus on practical implementations and architectural considerations.
*   **Nutt, Chaki, Neogy - Operating Systems (3rd Edition):** Offers a good balance of theoretical concepts and practical insights into OS design and implementation.
*   **Dhamdhere - Operating Systems (2nd Edition):** Known for its clarity and detailed explanations, especially on fundamental OS mechanisms.
*   **Haldar, Aravind - Operating Systems:** Provides a solid understanding of core OS principles.

These notes cover the specified topic within Module 3, aligning with the learning outcomes and course outcomes provided. The content is structured for easy understanding, with key concepts, definitions, examples, and practice questions.