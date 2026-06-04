---
title: "Memory Management in RTOS: Implementing dynamic memory allocation"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 4: Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3f3"
status: "completed"
scrapedAt: "2026-05-23T18:09:18.410Z"
---
# REAL TIME OPERATING SYSTEM

## Module 4: Real-Time Memory Management
### Topic: Implementing Dynamic Memory Allocation

---

### **Learning Outcomes:**

*   **LO1: Understand the necessity and challenges of dynamic memory allocation in RTOS.**
*   **LO2: Differentiate between static and dynamic memory allocation in the context of RTOS.**
*   **LO3: Explain various dynamic memory allocation algorithms suitable for RTOS.**
*   **LO4: Analyze the performance and overhead associated with different dynamic memory allocation techniques.**
*   **LO5: Implement dynamic memory allocation strategies in an RTOS environment.**
*   **LO6: Identify and mitigate common memory management issues in real-time systems.**

---

### **Course Outcomes Alignment:**

*   **CO1:** Understanding the need for dynamic memory allocation contributes to explaining fundamental concepts of RTOS. (K1, K2)
*   **CO2:** While not directly about scheduling, efficient memory management is crucial for predictable task execution. (K4)
*   **CO3:** WCET analysis can be impacted by dynamic memory allocation overhead. (K3, K4)
*   **CO4:** Implementing dynamic memory allocation is a direct utilization of RTOS services. (K3, K4)
*   **CO5:** Practical application development often requires dynamic memory allocation for flexible data structures. (K3, K4)

---

### **Introduction to Memory Management in RTOS**

Memory management is a critical aspect of Real-Time Operating Systems (RTOS). Unlike general-purpose operating systems, RTOS often operate on resource-constrained embedded systems where memory is a precious commodity. The primary goal of memory management in an RTOS is to provide efficient, predictable, and timely access to memory for critical tasks while minimizing overhead.

---

### **1. Static vs. Dynamic Memory Allocation**

#### **1.1 Static Memory Allocation**

*   **Definition:** Memory is allocated at compile time or load time. The size and lifetime of memory blocks are fixed and known before the program execution begins.
*   **Characteristics:**
    *   **Predictable:** Allocation and deallocation times are deterministic.
    *   **Low Overhead:** No runtime overhead for allocation/deallocation.
    *   **Memory Waste:** Can lead to internal or external fragmentation if not precisely sized.
    *   **Inflexible:** Not suitable for situations where the amount of memory needed is unknown at compile time (e.g., variable-sized data structures, handling unpredictable events).
*   **RTOS Context:** Often preferred for critical tasks and fixed-size buffers where predictability is paramount. (Cooling, 2018)

#### **1.2 Dynamic Memory Allocation**

*   **Definition:** Memory is allocated and deallocated during program execution at runtime. The size and lifetime of memory blocks are determined by the program's needs.
*   **Characteristics:**
    *   **Flexible:** Adapts to varying memory requirements.
    *   **Efficient Use of Memory:** Can potentially reduce overall memory footprint by allocating only what is needed.
    *   **Runtime Overhead:** Involves overhead for allocation and deallocation, which can be non-deterministic.
    *   **Fragmentation:** Prone to internal and external fragmentation if not managed carefully.
    *   **Complexity:** More complex to implement and debug.
*   **RTOS Context:** Useful for data structures that change size, communication buffers, or situations where the memory needs are not known beforehand. However, the non-deterministic nature of some dynamic allocation schemes can be a challenge in strict real-time systems. (Mall, 2007)

---

### **2. Necessity and Challenges of Dynamic Memory Allocation in RTOS**

#### **2.1 Necessity**

*   **Variable Data Sizes:** Handling data that varies in size, such as sensor readings, network packets, or user inputs.
*   **Dynamic Data Structures:** Implementing data structures like linked lists, queues, or trees that grow or shrink during runtime.
*   **Task Creation/Deletion:** In some RTOS, tasks might be dynamically created and destroyed, requiring dynamic memory for their control blocks and stacks.
*   **Event Handling:** Allocating memory for event objects or message queues that are populated and emptied dynamically.

#### **2.2 Challenges**

*   **Timing Predictability:** The primary challenge. Standard dynamic memory allocation algorithms (like `malloc` and `free` in C) often have non-deterministic execution times due to the search for suitable memory blocks and the overhead of managing the heap. This can violate hard real-time constraints. (Kopetz, 2011)
*   **Fragmentation:**
    *   **Internal Fragmentation:** When a block of memory is allocated to a process, but the process only uses a portion of it. The unused portion within the allocated block is wasted.
    *   **External Fragmentation:** When free memory is broken into small, non-contiguous pieces. Even if the total amount of free memory is sufficient, no single contiguous block may be large enough to satisfy a request.
*   **Heap Corruption:** Bugs in dynamic memory allocation/deallocation can lead to heap corruption, causing unpredictable behavior or crashes.
*   **Concurrency Issues:** If multiple tasks can access the heap simultaneously, proper synchronization mechanisms (like mutexes) are required, adding complexity and potential for priority inversion. (Valvano, 2017)

---

### **3. Dynamic Memory Allocation Algorithms for RTOS**

Given the challenges, RTOS often employ specialized dynamic memory allocation techniques or variations of standard algorithms to meet real-time requirements.

#### **3.1 Fixed-Size Block Allocation (Memory Pools)**

*   **Concept:** The memory is divided into a set of fixed-size blocks. When a request for memory comes, the allocator finds a free block of the appropriate size.
*   **Implementation:**
    *   A large block of memory is pre-allocated (e.g., from a static pool).
    *   This block is then divided into smaller, equally-sized blocks.
    *   A free list (or similar data structure) is maintained to keep track of available blocks.
*   **Algorithms:**
    *   **First Fit:** Search the free list from the beginning and allocate the first block that is large enough.
    *   **Best Fit:** Search the entire free list and allocate the smallest block that is large enough. This can minimize wasted space within allocated blocks (internal fragmentation) but might lead to more fragmentation of the free list (external fragmentation).
    *   **Worst Fit:** Search the entire free list and allocate the largest block that is large enough. This might leave larger free blocks for future requests but can be inefficient.
*   **RTOS Suitability:**
    *   **Pros:**
        *   **Deterministic Allocation/Deallocation Time:** If all blocks are of the same size, allocation/deallocation is typically very fast and predictable (O(1) if a simple list is used).
        *   **Reduces External Fragmentation:** By using fixed-size blocks, external fragmentation is largely eliminated.
    *   **Cons:**
        *   **Internal Fragmentation:** If requests are for sizes smaller than the fixed block size, the unused portion within the block is wasted.
        *   **Less Flexible:** Requires knowing the range of memory block sizes needed at design time.
*   **Example:** Imagine needing memory for network packets of 64 bytes, 128 bytes, and 256 bytes. You could create three separate memory pools: one with blocks of 64 bytes, another with 128 bytes, and a third with 256 bytes. A request for 100 bytes would be serviced from the 128-byte pool. (Valvano, 2017)

#### **3.2 Best-Fit with Buddy System**

*   **Concept:** The memory is managed in blocks of power-of-two sizes. When a request comes, the allocator finds the smallest block that fits. If a block is too large, it is split into two "buddies" of half the size, and the process continues until a suitable block is found. When memory is deallocated, the allocator attempts to merge it with its buddy if the buddy is also free, thereby coalescing free blocks.
*   **RTOS Suitability:**
    *   **Pros:**
        *   **Relatively Fast Allocation/Deallocation:** Merging free blocks can be efficient.
        *   **Reduces External Fragmentation:** The merging process helps to keep free memory contiguous.
    *   **Cons:**
        *   **Internal Fragmentation:** Still prone to internal fragmentation as blocks are power-of-two sized.
        *   **Complexity:** More complex to implement than simple fixed-size pools.
        *   **Non-determinism:** The splitting and merging process can introduce some non-determinism, especially if the system is heavily fragmented. (Krishna & Shin, 2010)

#### **3.3 Slab Allocation**

*   **Concept:** Combines the benefits of fixed-size blocks and dynamic allocation. Memory is divided into "slabs," and each slab is dedicated to a specific object type (and thus, a specific size). When an object is created, it's taken from the appropriate slab. When it's destroyed, it's returned to the slab.
*   **RTOS Suitability:**
    *   **Pros:**
        *   **Fast Allocation/Deallocation:** Allocation/deallocation is very quick as blocks are readily available for a specific object type.
        *   **Reduces Fragmentation:** Minimizes fragmentation by dedicating slabs to specific object sizes.
        *   **Cache Friendliness:** Objects of the same type are often contiguous, improving CPU cache performance.
    *   **Cons:**
        *   **Requires Prior Knowledge of Object Sizes:** Need to define object types and their sizes beforehand.
        *   **Potential for Internal Fragmentation:** If objects within a slab don't perfectly fill the slab.
*   **Example:** In a communication system, you might have a slab allocator for network packet buffers, another for message queue control blocks, etc. (Valvano, 2017)

#### **3.4 Other Techniques (Less Common for Hard Real-Time)**

*   **First-Fit/Best-Fit on a General Heap:** Standard `malloc`/`free` implementations can be used if the real-time requirements are soft, or if the allocation/deallocation is infrequent and carefully managed to avoid critical timing windows. (Mall, 2007)
*   **Memory Pools with Variable Sizes (Coalescing Free Lists):** More complex than fixed-size pools, attempts to manage free blocks of varying sizes by coalescing adjacent free blocks upon deallocation. Can be more efficient but introduces more complexity and potential non-determinism.

---

### **4. Performance and Overhead Analysis**

| Allocation Technique        | Allocation Time        | Deallocation Time      | Internal Fragmentation | External Fragmentation | Complexity    | RTOS Suitability Notes                                                                     |
| :-------------------------- | :--------------------- | :--------------------- | :--------------------- | :--------------------- | :------------ | :----------------------------------------------------------------------------------------- |
| **Fixed-Size Blocks (Pools)** | Deterministic (Fast)   | Deterministic (Fast)   | Moderate               | Low                    | Low           | Excellent for predictable requirements with known object sizes.                            |
| **Buddy System**            | Near-Deterministic     | Near-Deterministic     | Moderate               | Low to Moderate        | Moderate      | Good balance, but power-of-two sizes can be wasteful.                                      |
| **Slab Allocation**         | Deterministic (Very Fast)| Deterministic (Very Fast)| Low to Moderate        | Low                    | Moderate      | Ideal for object-oriented designs or systems with many identical objects.                  |
| **General Heap (malloc/free)**| Non-deterministic (Slow)| Non-deterministic (Slow)| Variable               | High                   | High          | Generally unsuitable for hard real-time due to unpredictable overhead and fragmentation. |

**Overhead Considerations:**

*   **Memory Overhead:** Each allocation scheme requires some memory for its internal data structures (e.g., free lists, block headers).
*   **CPU Overhead:** The time taken by the allocator to find a suitable block and update its internal state. This is crucial for real-time performance.
*   **Context Switch Overhead:** If memory allocation/deallocation occurs in a critical section protected by a semaphore or mutex, it can lead to priority inversion or blocking if the holder of the resource has a lower priority. (Liu, 2009)

---

### **5. Implementing Dynamic Memory Allocation in an RTOS**

Implementation typically involves the RTOS kernel providing APIs for memory management.

#### **5.1 RTOS APIs**

Most RTOS provide a set of memory management functions. Common patterns include:

*   **Creating a Memory Pool:**
    ```c
    // Example (conceptual)
    mem_pool_handle_t create_memory_pool(void* memory_start, size_t total_size, size_t block_size);
    ```
*   **Allocating from a Pool:**
    ```c
    // Example (conceptual)
    void* allocate_from_pool(mem_pool_handle_t pool_handle);
    ```
*   **Deallocating to a Pool:**
    ```c
    // Example (conceptual)
    void deallocate_to_pool(mem_pool_handle_t pool_handle, void* block_ptr);
    ```
*   **General Heap Allocation (if supported):**
    ```c
    // Example (standard C, often provided by RTOS SDK)
    void* pvPortMalloc(size_t xWantedSize); // Example from FreeRTOS
    void vPortFree(void* pv);              // Example from FreeRTOS
    ```

#### **5.2 Design Considerations for Implementation**

*   **Partitioning Memory:** The total available RAM can be partitioned into different memory regions or pools to isolate critical tasks from less critical ones or to dedicate memory for specific purposes.
*   **Data Structures:** Choosing appropriate data structures for managing free lists is important for performance. Linked lists are common.
*   **Synchronization:** If multiple tasks can access the same memory pool or heap, access must be serialized using mechanisms like mutexes or semaphores to prevent race conditions. This can impact real-time performance.
*   **Error Handling:** Robust error handling is essential. What happens if `allocate` fails (returns `NULL`)? The RTOS task needs to be prepared for this.

#### **5.3 Example: FreeRTOS Memory Management**

FreeRTOS offers several memory management schemes:

1.  **`heap_1`:** Simplest. Allocates memory from a fixed-size array. `free()` does nothing. Not suitable for general use.
2.  **`heap_2`:** Simple first-fit algorithm using a linked list of free blocks. Susceptible to fragmentation.
3.  **`heap_3`:** Calls the standard C `malloc()` and `free()` library functions. Performance depends on the underlying C library.
4.  **`heap_4`:** A first-fit algorithm with coalescing of free blocks to reduce fragmentation. Generally a good choice for many embedded systems.
5.  **`heap_5`:** More sophisticated first-fit algorithm that can combine multiple RAM regions.

**Configuration:** The memory management scheme is typically selected via build configuration (e.g., `FreeRTOSConfig.h`).

**Example Usage (conceptual FreeRTOS):**

```c
#include "FreeRTOS.h"
#include "task.h"
#include "stdlib.h" // For standard malloc/free if heap_3 is used

void producer_task(void *pvParameters) {
    // Example: Allocate memory for a message
    char *message = (char *)pvPortMalloc(100 * sizeof(char));

    if (message != NULL) {
        strcpy(message, "Hello from producer!");
        // Send message to a queue...
        xQueueSend(myQueue, &message, portMAX_DELAY);
        // Note: For message queues where messages are copied,
        // we often free the message buffer AFTER it's been processed by the receiver.
        // In this example, assuming the receiver copies the data and frees the original buffer.
    } else {
        // Handle allocation failure
        // vTaskDelay(pdMS_TO_TICKS(100));
    }
    vTaskDelete(NULL);
}

void consumer_task(void *pvParameters) {
    char *received_message;

    while(1) {
        if (xQueueReceive(myQueue, &received_message, portMAX_DELAY) == pdPASS) {
            // Process the message
            printf("Received: %s\n", received_message);

            // Free the memory once done processing
            vPortFree(received_message);
        }
        // vTaskDelay(pdMS_TO_TICKS(50));
    }
}
```
(Valvano, 2017; FreeRTOS documentation)

---

### **6. Common Memory Management Issues and Mitigation**

#### **6.1 Memory Leaks**

*   **Description:** Memory is allocated but never deallocated, even when it's no longer needed. Over time, this depletes available memory, leading to allocation failures and system instability.
*   **Mitigation:**
    *   **Adhere to allocation/deallocation pairing:** Ensure every `malloc`-like call has a corresponding `free`-like call.
    *   **Use RAII (Resource Acquisition Is Initialization) principles:** In C++, this involves using objects whose destructors automatically free memory. In C, this can be achieved by carefully managing resource lifetimes within function scopes or module lifecycles.
    *   **Track allocated memory:** Implement a mechanism to log or track allocated blocks, especially during development and testing.
    *   **Utilize RTOS memory analysis tools:** Some RTOS provide tools to detect memory leaks.
    *   **Use fixed-size block allocation:** If possible, this completely eliminates the possibility of memory leaks due to incorrect `free` calls for variable-sized blocks.

#### **6.2 Buffer Overflows/Underflows**

*   **Description:** Writing data beyond the allocated buffer boundaries (overflow) or before the start of an allocated buffer (underflow). This can corrupt adjacent memory, data structures, or even execution code.
*   **Mitigation:**
    *   **Careful bounds checking:** Always check if the data being written fits within the allocated buffer size.
    *   **Use safer string functions:** Use `strncpy`, `snprintf` instead of `strcpy`, `sprintf` to prevent overflows.
    *   **Allocate slightly more memory than strictly needed:** Provides a small safety margin.
    *   **Memory Debugging Tools:** Tools like Valgrind (though often too heavy for embedded) or static analysis tools can help detect these issues. For embedded, careful code reviews and specific RTOS-aware debugging are key. (Laplante, Ovaska, 2012)

#### **6.3 Double Free**

*   **Description:** Attempting to deallocate a memory block that has already been deallocated. This corrupts the heap's metadata, leading to unpredictable behavior.
*   **Mitigation:**
    *   **Set pointers to `NULL` after freeing:** `free(ptr); ptr = NULL;` This prevents accidental double frees.
    *   **Careful management of shared pointers:** Ensure only one task or component is responsible for deallocating a particular piece of memory.

#### **6.4 Dangling Pointers**

*   **Description:** A pointer that refers to a memory location that has already been deallocated. Accessing data through a dangling pointer leads to undefined behavior.
*   **Mitigation:**
    *   **Set pointers to `NULL` after freeing:** As mentioned for double frees.
    *   **Use smart pointers (in C++):** These manage memory automatically.
    *   **Careful scope management:** Ensure pointers do not outlive the memory they point to.

#### **6.5 Fragmentation**

*   **Description:** As discussed, internal and external fragmentation reduce the effective usable memory.
*   **Mitigation:**
    *   **Use Fixed-Size Block Allocation (Memory Pools):** Best for minimizing external fragmentation.
    *   **Use Slab Allocation:** Efficient for specific object types.
    *   **Regular Coalescing:** Buddy systems and some heap managers attempt to coalesce free blocks.
    *   **Memory Compaction:** Advanced techniques that involve moving allocated blocks to contiguous memory regions. This is complex and often too time-consuming for real-time systems.
    *   **Memory Pool Re-initialization:** In systems where fragmentation becomes severe, a controlled restart or re-initialization of memory pools might be a last resort, but this interrupts operation.

---

### **Important Points to Remember**

*   **Predictability is Paramount:** In hard real-time systems, the non-deterministic nature of standard dynamic memory allocation is a major concern.
*   **Memory Pools are Often Preferred:** For many RTOS applications requiring predictable memory access, fixed-size memory pools offer the best balance of flexibility and determinism.
*   **Overhead Matters:** Always consider the CPU time and memory used by the allocation/deallocation mechanism itself.
*   **Careful Design:** The choice of memory management strategy should be part of the overall system design, considering the types and lifetimes of data structures.
*   **Testing and Debugging:** Thorough testing is crucial for identifying memory-related bugs like leaks, overflows, and dangling pointers. RTOS-specific debugging tools can be invaluable.
*   **Resource Constraints:** RTOS often run on systems with limited RAM. Efficient memory utilization is critical. (Valvano, 2017)

---

### **Practice Questions**

**Question 1:**
Explain why standard `malloc()` and `free()` from the C standard library might be problematic for hard real-time systems. (Aligns with CO1, CO4, K1, K2)

**Answer:** Standard `malloc()` and `free()` implementations typically have non-deterministic execution times. The time taken to find a suitable free block or to merge freed blocks can vary significantly depending on the current state of the heap. This variability makes it difficult to guarantee that memory operations will complete within the required deadlines, which is a fundamental requirement of hard real-time systems. Additionally, they can lead to significant external fragmentation over time, further reducing the predictability of allocation success. (Cooling, 2018; Mall, 2007)

**Question 2:**
Describe the concept of a "memory pool" in the context of RTOS dynamic memory allocation. What are its main advantages and disadvantages for real-time applications? (Aligns with CO1, CO4, K1, K2, K3)

**Answer:** A memory pool is a dynamic memory allocation technique where a region of memory is pre-allocated and then divided into a number of fixed-size blocks. A free list is maintained to track available blocks.

*   **Advantages:**
    *   **Predictable Allocation/Deallocation:** Allocating and deallocating a block from a fixed-size pool is typically very fast and deterministic (often O(1)), as it involves simply taking a block from or returning it to the free list.
    *   **Reduces External Fragmentation:** Since all blocks are the same size, external fragmentation is largely eliminated.
    *   **Simplicity:** Easier to implement and debug than more complex heap management schemes.
*   **Disadvantages:**
    *   **Internal Fragmentation:** If memory requests are for sizes smaller than the fixed block size, the unused portion within the allocated block is wasted.
    *   **Less Flexible:** Requires designers to know the maximum size and number of blocks needed for each type of object at design time. (Valvano, 2017)

**Question 3:**
Consider an embedded system where tasks frequently create and destroy temporary data buffers of varying sizes (e.g., network packet processing). Which dynamic memory allocation strategy would you recommend, and why? Discuss potential issues with your chosen strategy. (Aligns with CO4, CO5, K3, K4)

**Answer:** For network packet processing with varying buffer sizes, **fixed-size block allocation (memory pools)** is a strong candidate, provided the range of packet sizes is somewhat predictable or can be categorized into a few common sizes.

*   **Recommendation and Rationale:**
    *   If the packet sizes are consistently within a few common ranges (e.g., 64 bytes, 128 bytes, 512 bytes), creating separate memory pools for each size would offer deterministic allocation and deallocation times, crucial for real-time processing of network traffic. This minimizes jitter introduced by memory operations.
    *   If the sizes are highly variable and unpredictable, a more general-purpose heap manager that supports coalescing (like FreeRTOS `heap_4`) might be necessary, but with the caveat of potential non-determinism.

*   **Potential Issues:**
    *   **With Memory Pools:**
        *   **Internal Fragmentation:** If a packet is smaller than the allocated block size (e.g., a 40-byte packet in a 64-byte pool), the remaining 24 bytes are wasted (internal fragmentation).
        *   **Multiple Pools:** Managing multiple pools adds complexity.
    *   **With General Heap (e.g., `heap_4`):**
        *   **External Fragmentation:** Over time, repeated allocations and deallocations of varying sizes can lead to external fragmentation, where free memory is scattered into small, unusable chunks. This could eventually cause allocation failures even if total free memory is sufficient.
        *   **Non-determinism:** The allocation and deallocation times for general heap managers can be variable, potentially impacting real-time deadlines if not carefully managed. (Valvano, 2017; Mall, 2007)

**Question 4:**
What is external fragmentation, and how can it be mitigated in an RTOS? (Aligns with CO1, CO4, K1, K2)

**Answer:** External fragmentation occurs when free memory is divided into many small, non-contiguous blocks, even if the total amount of free memory is sufficient to satisfy a request. A new allocation request cannot be fulfilled because no single free block is large enough.

Mitigation strategies include:
*   **Fixed-Size Block Allocation (Memory Pools):** This is the most effective method as it virtually eliminates external fragmentation by ensuring all free blocks are of the same size.
*   **Coalescing Free Blocks:** Implementing algorithms that merge adjacent free memory blocks when memory is deallocated can help reduce external fragmentation (e.g., Buddy System, `heap_4` in FreeRTOS).
*   **Memory Compaction:** While generally not feasible for hard real-time systems due to its high overhead and non-determinism, it involves moving allocated blocks to make free memory contiguous.
*   **Careful Allocation Strategy:** Using best-fit or worst-fit algorithms with general heaps can sometimes help, but it's not a foolproof solution. (Krishna & Shin, 2010; Liu, 2009)

---
**References Used:**

*   Cooling, J. (2018). *Real-Time Operating Systems Book 1: The Theory*. CreateSpace Independent Publishing Platform.
*   Mall, R. (2007). *Real-Time Systems: Theory and Practice*. Pearson Education.
*   Kopetz, H. (2011). *Real-Time Systems: Design Principles for Distributed Embedded Applications* (2nd ed.). Springer.
*   Valvano, J. W. (2017). *Embedded Systems: Real-Time Operating Systems for Arm Cortex-M Microcontrollers* (3rd ed.). CreateSpace Independent Publishing Platform.
*   Krishna, C. M., & Shin, K. G. (2010). *Real-Time Systems*. McGraw-Hill.
*   Liu, J. W. S. (2009). *Real-Time Systems*. Pearson Education.
*   Laplante, P. A., & Ovaska, S. J. (2012). *Real-Time Systems Design and Analysis*. Wiley.
*   Zhu, Y. (2017). *Embedded Systems with ARM Cortex-M Microcontrollers in Assembly Language and C* (3rd ed.). E-Man Press LLC.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
