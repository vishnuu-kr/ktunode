---
title: "Garbage collection and compaction"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac38"
status: "completed"
scrapedAt: "2026-05-20T16:22:57.517Z"
---
## DATA STRUCTURES AND ALGORITHMS - Module 2: Linked List and Memory Management - Garbage Collection and Compaction

**Learning Outcomes:**

*   Understand the concept of garbage collection and its importance in memory management.
*   Describe different garbage collection techniques (e.g., mark and sweep, reference counting, generational garbage collection).
*   Explain the need for memory compaction and different compaction strategies.
*   Compare and contrast different garbage collection and compaction methods.
*   Evaluate the performance implications of various garbage collection and compaction algorithms.

**1. Introduction to Garbage Collection and Memory Management**

*   **What is Memory Management?** Memory management is the process of allocating and freeing memory blocks in a computer system. Efficient memory management is crucial for program performance and stability.
*   **The Problem of Memory Leaks:** When memory is allocated but not freed (even when it's no longer needed), it leads to a *memory leak*.  Over time, these leaks consume available memory, eventually causing the program (or even the entire system) to slow down or crash.
*   **The Role of Garbage Collection:** Garbage collection (GC) is a form of automatic memory management.  It aims to reclaim memory occupied by objects that are no longer in use by the program, thus preventing memory leaks.  It automates the process of freeing unused memory, relieving the programmer from explicitly deallocating memory blocks.
*   **Importance of Garbage Collection:**
    *   Reduces the risk of memory leaks.
    *   Simplifies programming by removing the burden of manual memory management.
    *   Increases programmer productivity.
    *   Improves program reliability and stability.

**2. Key Concepts and Definitions**

*   **Object:**  A region of memory that stores data and often contains code (methods) that operate on that data. In garbage collection, an object is the unit of allocation and deallocation.
*   **Reachability:**  An object is considered *reachable* if it can be accessed directly or indirectly from a set of root objects (e.g., global variables, local variables on the stack, registers).
*   **Unreachable (Garbage) Objects:** An object is *unreachable* or *garbage* if there is no way for the program to access it anymore.  These objects are candidates for garbage collection.
*   **Root Set:** The set of objects that are initially known to be live (reachable).  Garbage collectors start their search for reachable objects from the root set.
*   **Allocation:**  The process of reserving a portion of memory for a new object.
*   **Deallocation (Freeing):** The process of releasing previously allocated memory, making it available for reuse.
*   **Fragmentation:**  Memory fragmentation occurs when available memory is broken into small, non-contiguous blocks, making it difficult to allocate larger objects.  This can lead to performance degradation.
    *   **External Fragmentation:** Available memory is fragmented into small chunks, even though the total amount of available memory is large enough to satisfy an allocation request.
    *   **Internal Fragmentation:** Memory is allocated in blocks larger than the actual object size, leading to wasted space within the allocated block.
*   **Pause Time:** The amount of time the program is suspended (paused) while the garbage collector is running.  Minimizing pause time is crucial for interactive applications and real-time systems.
*   **Throughput:** A measure of how much work the program can accomplish per unit of time, excluding garbage collection time.  Garbage collectors aim to maximize throughput while keeping pause times acceptable.

**3. Garbage Collection Techniques**

*   **3.1 Reference Counting:**
    *   **Mechanism:** Each object maintains a counter that tracks the number of references (pointers) pointing to it.
    *   **Allocation:** When an object is created, its reference count is initialized to 1.
    *   **Assignment:** When a new reference to an object is created, its reference count is incremented. When a reference is removed (e.g., variable goes out of scope, pointer is reassigned), the reference count is decremented.
    *   **Deallocation:** When an object's reference count reaches 0, it means no other object is referencing it, so it is considered garbage and can be reclaimed.  The memory is freed, and the reference counts of any objects referenced by the freed object are also decremented (which may trigger further deallocations).
    *   **Advantages:**
        *   Simple to implement.
        *   Immediate reclamation: Memory is freed as soon as it becomes garbage.
        *   Incremental: Reclamation is done in small steps, avoiding long pauses.
    *   **Disadvantages:**
        *   **Cycle Detection:** Cannot detect and reclaim circular references (e.g., object A points to object B, and object B points to object A). This leads to memory leaks.
        *   **Overhead:**  Updating reference counts requires extra instructions every time a reference is created or destroyed, adding overhead to the program.
        *   **Space Overhead:** Requires space to store the reference count for each object.

    *   **Example:**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None

    a = Node(10)  # Reference count of Node(10) is 1
    b = Node(20)  # Reference count of Node(20) is 1
    a.next = b  # Reference count of Node(20) is now 2
    b.next = a  # Reference count of Node(10) is now 2

    #  If we now delete a and b (e.g., they go out of scope), the reference counts of Node(10) and Node(20) will become 1.  However, they are no longer reachable from the root set, but their reference counts are not 0.  This is a circular reference that reference counting cannot handle.
    ```

*   **3.2 Mark and Sweep:**
    *   **Mechanism:** A two-phase garbage collection algorithm:
        *   **Mark Phase:** Starts from the root set and recursively traverses all reachable objects, marking them as "alive."
        *   **Sweep Phase:** Scans the entire heap (memory space) and reclaims the memory occupied by objects that are not marked (i.e., unreachable objects).
    *   **Advantages:**
        *   Can detect and reclaim circular references.
        *   Simple to implement.
    *   **Disadvantages:**
        *   **Stop-the-World:** Requires suspending the program during the entire garbage collection process (both mark and sweep phases), leading to long pause times.
        *   **Fragmentation:** Can lead to memory fragmentation, as freed memory may not be contiguous.
        *   **Heap Traversal:**  Requires traversing the entire heap, even if only a small fraction of the objects are garbage.

    *   **Example (Conceptual):**

    1.  **Initial State:** Heap contains allocated objects, some reachable, some unreachable.
    2.  **Mark Phase:**  Starting from the root set, the garbage collector marks all reachable objects.
    3.  **Sweep Phase:** The garbage collector sweeps through the heap, identifying unmarked (unreachable) objects and reclaiming their memory.

*   **3.3 Generational Garbage Collection:**
    *   **Mechanism:** Based on the observation that most objects tend to have short lifetimes.  Divides the heap into generations (typically "young generation" and "old generation").
        *   **Young Generation:** Newly created objects are allocated in the young generation. This generation is garbage collected frequently because it contains the most garbage.
        *   **Old Generation:** Objects that survive multiple garbage collection cycles in the young generation are promoted to the old generation. This generation is garbage collected less frequently.
    *   **Advantages:**
        *   Reduces pause times by focusing garbage collection efforts on the young generation, which contains the most garbage.
        *   Improved throughput compared to mark and sweep.
    *   **Disadvantages:**
        *   More complex to implement than mark and sweep or reference counting.
        *   Requires tracking inter-generational references (references from older generations to younger generations).
        *   Still requires stop-the-world pauses, but they are typically shorter.

    *   **Example:**

    1.  New objects are allocated in the young generation.
    2.  The young generation is frequently garbage collected.  Objects that survive are promoted to the old generation.
    3.  The old generation is garbage collected less frequently.

*   **3.4 Other Techniques:**
    *   **Copying Garbage Collection:**  Divides the heap into two regions.  Live objects are copied from one region to the other, effectively compacting memory.
    *   **Incremental Garbage Collection:**  Performs garbage collection in smaller increments, interleaved with program execution, to reduce pause times.
    *   **Concurrent Garbage Collection:**  Performs garbage collection concurrently with the program execution, minimizing pause times.

**4. Memory Compaction**

*   **What is Memory Compaction?** Memory compaction is a technique used to reduce external fragmentation.  It involves moving all the live objects to one end of the heap, creating a single large contiguous block of free memory.
*   **Why is Compaction Necessary?** After repeated allocation and deallocation, the heap can become fragmented, making it difficult to allocate larger objects even if there is enough total free memory.
*   **Compaction Strategies:**
    *   **Sliding Compaction:** Objects are moved to one end of the heap, filling in the gaps left by freed objects. This requires updating all pointers to the moved objects.
    *   **Lisp 2 Compaction:** Divides the heap into blocks of fixed size. Live objects are moved within their blocks, and empty blocks are merged to create larger free blocks.
    *   **Thread Compaction:** Compaction happens with different threads making it more efficient.

*   **Advantages of Compaction:**
    *   Reduces external fragmentation.
    *   Improves memory allocation efficiency.
*   **Disadvantages of Compaction:**
    *   Can be time-consuming, especially for large heaps with many live objects.
    *   Requires updating all pointers to moved objects, which can be complex and error-prone.
    *   Often involves stop-the-world pauses.

**5. Comparing Garbage Collection and Compaction Methods**

| Feature | Reference Counting | Mark and Sweep | Generational GC | Compaction |
|---|---|---|---|---|
| **Cycle Detection** | No | Yes | Yes | Not applicable (fragmentation) |
| **Pause Time** | Low (incremental) | High (stop-the-world) | Moderate (stop-the-world, but shorter) | High (stop-the-world) |
| **Throughput** | Lower (overhead of reference counting) | Moderate | Higher | Moderate (due to pointer updates) |
| **Complexity** | Simple | Moderate | Complex | Moderate to Complex |
| **Fragmentation** | Can lead to fragmentation | Can lead to fragmentation | Can lead to fragmentation | Eliminates external fragmentation |
| **Space Overhead** | Requires space for reference count | Minimal | Minimal | Minimal |

**6. Performance Implications**

*   **Pause Time vs. Throughput Trade-off:** There is often a trade-off between minimizing pause times and maximizing throughput.  Algorithms that minimize pause times (e.g., incremental or concurrent GC) may have lower throughput than stop-the-world algorithms.
*   **Heap Size:** The size of the heap can significantly impact the performance of garbage collection.  Larger heaps may require longer garbage collection cycles.
*   **Object Lifetime:** The distribution of object lifetimes can also affect performance. Generational garbage collection is most effective when most objects have short lifetimes.
*   **Fragmentation:** Fragmentation can negatively impact allocation speed and overall performance. Compaction can mitigate the effects of fragmentation but adds its own overhead.
*   **Compiler and Runtime System:** The implementation of the garbage collector in the compiler and runtime system can have a significant impact on performance.

**7. Practice Questions/Exercises**

1.  **Question:** Explain the difference between external and internal fragmentation. Provide examples.

    **Answer:**

    *   **External Fragmentation:** Occurs when there is enough total memory available, but it is divided into small, non-contiguous blocks. For example, imagine you have 100KB of free memory, but it's split into 10 blocks of 10KB each. If you try to allocate a 50KB object, you won't be able to, even though you have enough total free memory.
    *   **Internal Fragmentation:** Occurs when memory is allocated in blocks larger than the actual object size. For example, if the memory allocator only allocates in blocks of 16KB, and you allocate a 5KB object, you'll waste 11KB inside that allocated block.

2.  **Question:**  Why can reference counting garbage collection fail to reclaim memory occupied by circularly linked objects?  Provide an example in a programming language of your choice.

    **Answer:**  Reference counting fails because circularly linked objects will have reference counts greater than zero, even when they are no longer reachable from the root set.  The reference count never reaches zero, so the memory is never reclaimed.  The Python example from section 3.1 demonstrates this.

3.  **Question:**  Describe the two phases of the mark and sweep garbage collection algorithm. What are the disadvantages of this approach?

    **Answer:**

    *   **Mark Phase:** The garbage collector starts from the root set and traverses all reachable objects, marking them as "alive."
    *   **Sweep Phase:** The garbage collector scans the entire heap and reclaims the memory occupied by objects that are not marked (i.e., unreachable objects).

    **Disadvantages:**  Stop-the-world pauses, fragmentation, and heap traversal.

4.  **Question:**  Explain the basic principle behind generational garbage collection.  Why is this approach often more efficient than mark and sweep?

    **Answer:**  Generational garbage collection is based on the observation that most objects tend to have short lifetimes.  The heap is divided into generations (young and old).  The young generation is garbage collected more frequently because it contains the most garbage. This is often more efficient than mark and sweep because it focuses garbage collection efforts on a smaller region of memory where garbage is more concentrated, leading to shorter pause times.

5.  **Question:**  What is memory compaction, and why is it important?  What are the drawbacks of compaction?

    **Answer:**  Memory compaction is the process of moving all the live objects to one end of the heap, creating a single large contiguous block of free memory.  It is important because it reduces external fragmentation, making it easier to allocate larger objects. Drawbacks include: being time-consuming, requiring updating all pointers, and often involves stop-the-world pauses.

**8. Important Points to Remember**

*   Garbage collection automates memory management, reducing the risk of memory leaks and simplifying programming.
*   Different garbage collection techniques have different trade-offs between pause time, throughput, and complexity.
*   Reference counting is simple but cannot detect cycles.
*   Mark and sweep can detect cycles but involves stop-the-world pauses.
*   Generational garbage collection is often more efficient by exploiting the observation that most objects have short lifetimes.
*   Memory compaction reduces fragmentation but can be time-consuming and requires updating pointers.
*   Choosing the right garbage collection algorithm depends on the specific application requirements and performance goals.
