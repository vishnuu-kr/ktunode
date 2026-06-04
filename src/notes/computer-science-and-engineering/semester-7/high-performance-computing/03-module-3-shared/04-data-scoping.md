---
title: "Data scoping"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 3: Shared"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c62f"
status: "completed"
scrapedAt: "2026-05-20T17:07:15.463Z"
---
# High Performance Computing: Module 3 - Shared Memory: Data Scoping

## Module Overview

This module delves into the intricacies of shared memory programming in High Performance Computing (HPC). We will explore how data is accessed and managed by multiple processing units within a shared memory architecture, focusing on the critical concept of data scoping. Understanding data scoping is paramount for writing efficient, correct, and scalable parallel programs.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the fundamental concepts of data scoping in shared memory systems.**
*   **Identify and differentiate between global, private, and shared data.**
*   **Explain the implications of data scoping on program correctness and performance.**
*   **Apply techniques for managing data scope in parallel programs.**
*   **Recognize and avoid common data scoping related issues like race conditions and deadlocks.**

---

## 1. Fundamental Concepts of Data Scoping in Shared Memory Systems

In shared memory parallel programming, multiple threads or processes have access to a common pool of memory. Data scoping refers to how data is declared, accessed, and managed within this shared memory space, and how different threads interact with it.

### Key Concepts:

*   **Shared Memory Architecture:** A system where multiple processors or cores can access the same physical memory. This allows for efficient data sharing but introduces challenges in managing concurrent access.
*   **Threads/Processes:** Independent units of execution that can run concurrently. In shared memory systems, threads typically share the same address space.
*   **Concurrency:** The ability of different parts of a program or system to be executed out-of-order or in parallel.
*   **Data Visibility:** Which threads can access and modify a particular piece of data.
*   **Data Ownership:** While not strictly enforced in shared memory, it can be a useful conceptual model to think about which thread is primarily responsible for managing or modifying a piece of data.

### Why is Data Scoping Important?

*   **Correctness:** Improper data scoping can lead to race conditions, where the outcome of a program depends on the unpredictable timing of multiple threads accessing shared data.
*   **Performance:** Efficient data scoping can minimize data contention, improve cache utilization, and reduce overhead associated with synchronization.
*   **Maintainability:** Clearly defined data scopes make parallel programs easier to understand, debug, and maintain.

---

## 2. Identifying and Differentiating Data Scopes

In shared memory programming, data can generally be categorized into three main scopes: Global, Private, and Shared.

### 2.1. Global Data

*   **Definition:** Global data refers to variables declared outside of any function or within a scope that is accessible to all threads or processes. In C/C++, this typically includes global variables and static variables.
*   **Characteristics:**
    *   Accessible from anywhere in the program.
    *   Persists for the lifetime of the program.
    *   **Critical for shared data operations.**
*   **Example (C/C++):**

    ```c++
    #include <iostream>
    #include <thread>
    #include <vector>

    int global_counter = 0; // Global variable

    void increment_global() {
        for (int i = 0; i < 100000; ++i) {
            global_counter++; // All threads access this shared global variable
        }
    }

    int main() {
        std::vector<std::thread> threads;
        for (int i = 0; i < 4; ++i) {
            threads.push_back(std::thread(increment_global));
        }

        for (auto& t : threads) {
            t.join();
        }

        std::cout << "Final global_counter value: " << global_counter << std::endl;
        // Expected output is likely less than 400000 due to race conditions
        return 0;
    }
    ```
*   **Important Point:** Accessing and modifying global data concurrently without proper synchronization mechanisms (like mutexes) will likely lead to **race conditions**.

### 2.2. Private Data

*   **Definition:** Private data refers to variables that are local to a specific thread or function call. Each thread has its own private copy of these variables. This includes local variables declared within functions and variables passed by value to thread functions.
*   **Characteristics:**
    *   Only accessible by the thread that owns it.
    *   Not visible or accessible by other threads.
    *   Eliminates data contention for these variables.
*   **Example (C/C++):**

    ```c++
    #include <iostream>
    #include <thread>
    #include <vector>

    void thread_function(int thread_id) {
        int private_local_var = thread_id * 10; // Private to this thread
        std::cout << "Thread " << thread_id << ": private_local_var = " << private_local_var << std::endl;
        // This variable is not visible to other threads.
    }

    int main() {
        std::vector<std::thread> threads;
        for (int i = 0; i < 4; ++i) {
            threads.push_back(std::thread(thread_function, i));
        }

        for (auto& t : threads) {
            t.join();
        }
        return 0;
    }
    ```
*   **Important Point:** Private data is inherently safe from concurrent access issues and is often preferred for temporary calculations within a thread.

### 2.3. Shared Data

*   **Definition:** Shared data refers to data that is accessible by multiple threads or processes. This is typically achieved by declaring data in a scope that all threads can reach (e.g., global variables, heap-allocated memory that is shared).
*   **Characteristics:**
    *   Can be accessed and modified by multiple threads.
    *   Requires careful management to ensure correctness.
    *   Forms the basis of communication and collaboration between threads.
*   **Examples:**
    *   **Global variables:** As seen in the `global_counter` example.
    *   **Heap-allocated memory:** `malloc`, `new` in C/C++ can allocate memory that is shared.
    *   **Data structures:** Arrays, lists, queues that are intended to be processed by multiple threads.
*   **Example (C/C++):**

    ```c++
    #include <iostream>
    #include <thread>
    #include <vector>
    #include <mutex>

    std::vector<int> shared_data_vector; // Shared global data structure
    std::mutex data_mutex; // Mutex to protect shared data

    void add_to_shared_vector(int value) {
        std::lock_guard<std::mutex> lock(data_mutex); // Acquire mutex
        shared_data_vector.push_back(value);
        // Mutex is automatically released when lock_guard goes out of scope
    }

    int main() {
        std::vector<std::thread> threads;
        for (int i = 0; i < 5; ++i) {
            threads.push_back(std::thread(add_to_shared_vector, i * 10));
        }

        for (auto& t : threads) {
            t.join();
        }

        std::cout << "Shared data vector: ";
        for (int val : shared_data_vector) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
        // Expected output will have all values added correctly due to mutex
        return 0;
    }
    ```
*   **Important Point:** Shared data is the most common source of concurrency issues. Synchronization mechanisms are essential to protect shared data.

---

## 3. Implications of Data Scoping on Program Correctness and Performance

Understanding data scoping is crucial because it directly impacts how your parallel program behaves.

### 3.1. Implications for Correctness

*   **Race Conditions:**
    *   **Definition:** Occur when multiple threads access the same shared data, and at least one of them modifies it. The final result depends on the interleaving of thread execution.
    *   **Example:** The `global_counter++` operation is not atomic. It involves reading the current value, incrementing it, and writing it back. If two threads do this concurrently, one thread's increment might be lost.
    *   **Mitigation:** Synchronization primitives like mutexes, semaphores, atomic operations.
*   **Data Dependencies:**
    *   **Definition:** When the output of one computation is the input to another. In parallel programming, if these computations are performed by different threads, careful management of data scope and synchronization is needed to ensure dependencies are met.
    *   **Example:** Thread A calculates a value and stores it in a shared variable. Thread B needs to read that value before proceeding. Thread B must wait for Thread A to complete its write.
    *   **Mitigation:** Barriers, condition variables, explicit data passing.
*   **Deadlocks:**
    *   **Definition:** A situation where two or more threads are blocked forever, waiting for each other to release resources that they need. This can arise from improper ordering of acquiring locks on shared data.
    *   **Example:** Thread 1 acquires Lock A and then tries to acquire Lock B. Thread 2 acquires Lock B and then tries to acquire Lock A. Both threads will wait indefinitely.
    *   **Mitigation:** Consistent lock ordering, avoiding nested locks where possible, using deadlock detection mechanisms.

### 3.2. Implications for Performance

*   **Data Contention:**
    *   **Definition:** When multiple threads try to access and modify the same shared resource (e.g., a lock protecting a shared data structure) simultaneously. High contention leads to threads waiting, reducing parallelism.
    *   **Impact:** Excessive lock acquisitions and releases, threads spending more time waiting than computing.
    *   **Mitigation:** Reducing the amount of data that needs to be shared, using finer-grained locking, employing lock-free data structures, utilizing private copies when feasible.
*   **Cache Coherency and False Sharing:**
    *   **Cache Coherency:** Ensures that all processors have a consistent view of memory. When a processor modifies data in its cache, this change is propagated to other caches that might hold a copy of that data. This process involves communication overhead.
    *   **False Sharing:** Occurs when threads operate on different data elements, but these elements happen to reside on the same cache line. When one thread modifies its data, the entire cache line is invalidated for other threads, even if they don't need the modified data.
    *   **Example:** Two threads, each working on a different element of an array, but those elements fall within the same cache line. If thread 1 writes to its element, thread 2's cache line containing its element will be invalidated, forcing a re-fetch.
    *   **Mitigation:** Aligning data to cache line boundaries, padding data structures to avoid false sharing, using thread-local storage.
*   **Synchronization Overhead:**
    *   **Definition:** The cost associated with using synchronization primitives (mutexes, semaphores, etc.). These operations have a non-trivial execution time.
    *   **Impact:** Frequent synchronization can negate the benefits of parallelism, especially for small critical sections.
    *   **Mitigation:** Minimizing the frequency and duration of critical sections, using efficient synchronization mechanisms, employing atomic operations for simple updates.

---

## 4. Techniques for Managing Data Scope in Parallel Programs

Effective data scoping is achieved through a combination of language constructs and design patterns.

### 4.1. Variable Declaration and Scope Rules

*   **Local Variables:** Declared within functions or blocks. They are naturally private to the thread executing that function/block.
*   **Global Variables:** Declared at the top level of a program. They are inherently shared. Use with caution and proper synchronization.
*   **Static Variables:**
    *   **Global Static:** Similar to global variables, but their scope is limited to the translation unit (file). Still shared.
    *   **Local Static:** Initialized once and persist across function calls. If accessed by multiple threads, they behave like shared variables.

### 4.2. Using Synchronization Primitives

*   **Mutexes (Mutual Exclusion Locks):**
    *   **Purpose:** To protect critical sections of code that access shared data. Only one thread can hold a mutex at a time.
    *   **Mechanism:** `lock()` and `unlock()`.
    *   **C++ Example:** `std::mutex`, `std::lock_guard`, `std::unique_lock`.
*   **Semaphores:**
    *   **Purpose:** To control access to a resource that has a limited number of instances. Can be used for signaling between threads.
    *   **Mechanism:** `wait()` (decrement) and `signal()` (increment).
*   **Atomic Operations:**
    *   **Purpose:** For simple, indivisible operations on shared data (e.g., increment, compare-and-swap). They are typically implemented using special hardware instructions.
    *   **C++ Example:** `std::atomic<int>`, `fetch_add()`.

### 4.3. Thread-Local Storage (TLS)

*   **Purpose:** To provide each thread with its own independent copy of a variable, even if it's declared in a shared scope.
*   **Mechanism:** In C++, uses `__thread` keyword (GCC/Clang) or `thread_local` keyword (C++11 onwards).
*   **Example (C++11):**

    ```c++
    #include <iostream>
    #include <thread>
    #include <vector>

    thread_local int thread_local_counter = 0; // Each thread gets its own copy

    void increment_thread_local() {
        for (int i = 0; i < 1000; ++i) {
            thread_local_counter++;
        }
        std::cout << "Thread ID: " << std::this_thread::get_id()
                  << ", thread_local_counter: " << thread_local_counter << std::endl;
    }

    int main() {
        std::vector<std::thread> threads;
        for (int i = 0; i < 4; ++i) {
            threads.push_back(std::thread(increment_thread_local));
        }

        for (auto& t : threads) {
            t.join();
        }
        return 0;
    }
    ```
    *   **Important Point:** Thread-local storage is excellent for reducing contention on per-thread accumulators or temporary variables.

### 4.4. Passing Data to Threads

*   **Pass by Value:** Creates a copy of the argument for the thread function. This makes the data private to the thread.
*   **Pass by Reference (or Pointer):** If the reference/pointer points to shared data, the thread can access and modify that shared data. Requires synchronization if it's mutable shared data.
*   **Example (Passing by value for private data):** Already shown in `thread_function` example.

### 4.5. Data Partitioning and Domain Decomposition

*   **Purpose:** Dividing a large dataset into smaller, independent chunks that can be processed by different threads. This minimizes the need for threads to access the same data.
*   **Mechanism:** Distribute work items or data segments to threads.
*   **Example:** In image processing, dividing an image into rows or blocks for parallel processing. Each thread works on its assigned block.

---

## 5. Recognizing and Avoiding Common Data Scoping Related Issues

Proactive identification and prevention are key to robust parallel programming.

### 5.1. Race Conditions

*   **Recognition:**
    *   Results vary between runs of the same program.
    *   Debugging reveals unexpected values or incorrect program states.
    *   Operations on shared data that are not atomic (e.g., `x++`, `x = x + y`).
*   **Avoidance:**
    *   **Protect all shared mutable data:** Use mutexes or other synchronization primitives around access to shared variables and data structures.
    *   **Use atomic operations:** For simple read-modify-write operations, `std::atomic` is often more efficient than mutexes.
    *   **Minimize shared mutable state:** Design algorithms to use private data as much as possible.
    *   **Carefully manage data dependencies:** Ensure that a thread does not read data that another thread is in the process of writing, unless explicitly synchronized.

### 5.2. Deadlocks

*   **Recognition:**
    *   Program hangs indefinitely.
    *   Deadlock detection tools or techniques might be needed.
    *   Multiple threads are waiting for locks held by other waiting threads.
*   **Avoidance:**
    *   **Consistent Lock Ordering:** Always acquire locks in the same order across all threads. If Thread A needs Lock 1 and Lock 2, and Thread B needs Lock 1 and Lock 2, ensure both always acquire Lock 1 before Lock 2.
    *   **Avoid Nested Locks:** If possible, break down operations to avoid holding multiple locks simultaneously.
    *   **Timeouts:** Use timed lock acquisition (`try_lock_for`, `try_lock_until`) and implement retry mechanisms.
    *   **Deadlock Detection:** In complex systems, use mechanisms to detect and resolve deadlocks.

### 5.3. Over-Contention

*   **Recognition:**
    *   Performance does not scale linearly with the number of threads.
    *   Threads spend a significant amount of time waiting on locks.
    *   Profiling tools show high lock contention rates.
*   **Avoidance:**
    *   **Reduce Critical Section Size:** Make the code protected by locks as short as possible.
    *   **Use Finer-Grained Locking:** Instead of locking an entire data structure, lock individual elements or subsets if possible.
    *   **Employ Concurrent Data Structures:** Libraries often provide thread-safe data structures (e.g., concurrent hash maps) that manage internal locking more efficiently.
    *   **Utilize Lock-Free Algorithms:** These algorithms use atomic operations to manage shared data without explicit locks, which can offer better scalability under high contention.
    *   **Thread-Local Copies:** Whenever possible, use thread-local copies for computations and merge results at the end.

---

## 6. Important Points to Remember

*   **Shared data is the bottleneck:** The primary challenge in shared memory programming is managing concurrent access to shared data.
*   **Synchronization is your friend (but use it wisely):** Mutexes, semaphores, and atomics are essential tools for correctness, but overuse or misuse can hurt performance.
*   **Private data is safe:** Maximize the use of private data for threads to avoid concurrency issues and contention.
*   **Know your scope:** Be clear about which variables are global, shared, or private to each thread.
*   **Race conditions lead to unpredictable results:** Always protect shared mutable data.
*   **Deadlocks lead to program hangs:** Follow consistent locking strategies.
*   **Contention slows you down:** Optimize for minimal synchronization overhead and data contention.
*   **False sharing can be subtle:** Be aware of cache line behavior when designing data structures.
*   **Test thoroughly:** Parallel programs are notoriously difficult to debug. Test with various numbers of threads and input data.

---

## Practice Questions and Exercises

**Question 1:**

Consider the following C++ code snippet. Identify the scope of `shared_value` and `thread_local_value`. What potential problem exists if multiple threads execute `process_data` concurrently without any synchronization?

```c++
#include <iostream>
#include <thread>

int shared_value = 0;

void process_data(int thread_id) {
    thread_local int thread_local_value = thread_id * 100;
    shared_value += thread_id;
    thread_local_value += thread_id;
    std::cout << "Thread " << thread_id << ": Shared=" << shared_value << ", Local=" << thread_local_value << std::endl;
}

int main() {
    std::thread t1(process_data, 1);
    std::thread t2(process_data, 2);
    t1.join();
    t2.join();
    return 0;
}
```

**Answer 1:**

*   `shared_value`: This is a **global variable**, making it **shared** among all threads.
*   `thread_local_value`: This is declared with `thread_local`, making it **private** to each thread. Each thread will have its own independent copy.

The potential problem is a **race condition** on `shared_value`. The operation `shared_value += thread_id;` is not atomic. If both threads attempt to read, modify, and write `shared_value` at nearly the same time, one of the updates might be lost. For example, if `shared_value` is 0, thread 1 adds 1 (making it 1), and then thread 2 reads 0, adds 2, and writes 2, the final value would be 2 instead of the expected 3. `thread_local_value` is safe as it's private to each thread.

---

**Question 2:**

You are writing a parallel program where each thread needs to calculate a partial sum of a large array. You want to ensure that each thread's partial sum is correctly computed and then added to a global total sum.

a) How would you declare the array of partial sums to ensure each thread has its own copy?
b) How would you declare the global total sum?
c) What synchronization mechanism would you use to safely update the global total sum with each thread's partial sum?

**Answer 2:**

a) To ensure each thread has its own copy of a partial sum variable, you could declare an array of partial sums (e.g., `std::vector<int> partial_sums(num_threads);`) and then pass the appropriate element to each thread function using its thread ID as an index. Alternatively, you could use `thread_local int partial_sum;` within the thread function or a global `thread_local` variable.

b) The global total sum should be declared as a **global variable** (e.g., `int global_total_sum = 0;`) so it's accessible to all threads.

c) To safely update the global total sum, you would use a **mutex**. Each thread would acquire the mutex, add its `partial_sum` to `global_total_sum`, and then release the mutex. Using `std::lock_guard` in C++ is a recommended way to manage mutexes automatically. Alternatively, if the partial sum update is a simple addition, `std::atomic<int>` with `fetch_add` could be used for better performance.

---

**Question 3:**

Explain the concept of "false sharing" and provide a scenario where it might occur. How can it be mitigated?

**Answer 3:**

**False Sharing:** False sharing occurs when two or more threads access different data items that reside on the same cache line. Even though the threads are not actually sharing the data they are operating on, the hardware's cache coherency protocol treats the entire cache line as shared. When one thread modifies its data on the cache line, the entire line is invalidated in other processors' caches, even if those processors only need different parts of the line. This forces a re-fetch of the modified cache line, leading to performance degradation due to unnecessary cache coherency traffic.

**Scenario:** Consider an array `int data[1024];` and two threads, Thread A and Thread B. Thread A iterates through `data[0]` to `data[511]`, and Thread B iterates through `data[512]` to `data[1023]`. If a cache line is 64 bytes, and each `int` is 4 bytes, then 16 integers fit into a single cache line. It's possible that `data[0]` through `data[15]` are in one cache line, `data[16]` through `data[31]` in another, and so on. If Thread A is working on `data[10]` and Thread B is working on `data[26]` (assuming `data[10]` and `data[26]` are on different cache lines, this is not false sharing), but if Thread A is working on `data[10]` and Thread B is working on `data[12]`, and both reside in the same cache line, and Thread A writes to `data[10]`, the entire cache line containing both `data[10]` and `data[12]` will be invalidated. Thread B will then have to re-fetch this line to access `data[12]`, even though it was `data[10]` that changed.

**Mitigation:**

*   **Data Alignment and Padding:** Align data structures to cache line boundaries. Add padding between data elements or structures to ensure that frequently accessed but independent data items do not reside on the same cache line. For example, ensuring each thread's data chunk starts at a cache line boundary or adding padding to array elements if necessary.
*   **Thread-Local Storage:** Use `thread_local` for data that is unique to each thread (like accumulators), effectively removing it from the shared cache line issue.
*   **Array of Structures vs. Structure of Arrays:** Sometimes restructuring data can help. For instance, if threads access different fields of a structure, separating these fields into different arrays (Structure of Arrays) might prevent false sharing if threads only access one specific field at a time.

---
