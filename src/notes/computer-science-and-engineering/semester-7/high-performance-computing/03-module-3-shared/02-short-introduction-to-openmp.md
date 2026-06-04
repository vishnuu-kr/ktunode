---
title: "Short introduction to OpenMP"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 3: Shared"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c62d"
status: "completed"
scrapedAt: "2026-05-20T17:07:13.976Z"
---
# High Performance Computing: Module 3: Shared Memory Parallelism - Short Introduction to OpenMP

## 1. Introduction to OpenMP

OpenMP (Open Multi-Processing) is an API (Application Programming Interface) that supports multi-platform shared-memory parallel programming in C, C++, and Fortran. It consists of a set of compiler directives, library routines, and environment variables that can be used to specify shared memory parallelism in a program.

**Key Concepts:**

*   **Shared Memory Parallelism:** In this model, multiple processors (or cores) access a single, unified memory space. This means that all threads can read and write to the same memory locations.
*   **Threads:** OpenMP creates and manages threads. A thread is the smallest unit of execution within a process. Each thread has its own program counter, stack, and set of registers, but they share the same address space.
*   **Compiler Directives:** These are special comments that the compiler interprets to generate parallel code. They start with `#pragma omp` in C/C++ and `!$OMP` in Fortran.
*   **Runtime Library:** Provides functions that allow programs to control and query the OpenMP execution environment (e.g., number of threads, thread ID).
*   **Environment Variables:** Used to control OpenMP's behavior at runtime without recompiling the code (e.g., setting the number of threads).

**Why Use OpenMP?**

*   **Simplicity:** Easier to learn and use compared to lower-level threading APIs like POSIX threads (pthreads).
*   **Portability:** Works across different operating systems and hardware architectures.
*   **Incremental Parallelism:** Allows you to parallelize parts of your sequential code without a complete rewrite.
*   **Compiler Support:** Widely supported by major compilers (GCC, Clang, Intel C++ Compiler, etc.).

---

## 2. Basic OpenMP Constructs

OpenMP uses directives to define parallel regions and specify how work should be distributed among threads.

### 2.1. Parallel Region

The `#pragma omp parallel` directive is the most fundamental construct. It creates a **parallel region**, meaning that the enclosed code block will be executed by multiple threads.

**Syntax:**

```c++
#pragma omp parallel
{
    // Code to be executed by multiple threads
}
```

**Example:**

```c++
#include <iostream>
#include <omp.h>

int main() {
    #pragma omp parallel
    {
        std::cout << "Hello from thread " << omp_get_thread_num() << std::endl;
    }
    return 0;
}
```

**Explanation:**

*   When the `#pragma omp parallel` directive is encountered, the program forks a team of threads.
*   Each thread executes the code within the curly braces `{}`.
*   `omp_get_thread_num()` returns the unique ID of the current thread within the team, starting from 0 for the master thread.

**Important Point:** Without any further directives within the parallel region, each thread will execute the *entire* block of code. This can lead to redundant work and incorrect results if not managed properly.

### 2.2. Worksharing Constructs

Worksharing constructs distribute the execution of a loop or a code block among the threads in a team.

#### 2.2.1. `#pragma omp for` (or `#pragma omp do` in Fortran)

This directive distributes the iterations of a loop among the threads.

**Syntax:**

```c++
#pragma omp for
for (int i = 0; i < N; ++i) {
    // Loop body
}
```

**Combining with `parallel`:**

It's common to combine `parallel` and `for` directives. The `#pragma omp parallel for` directive creates a parallel region and then distributes the loop iterations among the threads in that region.

**Syntax:**

```c++
#pragma omp parallel for
for (int i = 0; i < N; ++i) {
    // Loop body
}
```

**Example:**

```c++
#include <iostream>
#include <vector>
#include <omp.h>

int main() {
    const int N = 100;
    std::vector<int> data(N);

    #pragma omp parallel for
    for (int i = 0; i < N; ++i) {
        data[i] = i * 2;
        std::cout << "Thread " << omp_get_thread_num() << " processing index " << i << std::endl;
    }

    // Optional: Print results to verify
    // for (int i = 0; i < N; ++i) {
    //     std::cout << data[i] << " ";
    // }
    // std::cout << std::endl;

    return 0;
}
```

**Explanation:**

*   The `#pragma omp parallel for` directive instructs the compiler to parallelize the subsequent `for` loop.
*   The iterations of the loop (0 to N-1) are divided among the available threads.
*   Each thread executes a subset of the loop iterations. The default schedule is `static`, which divides iterations into chunks and assigns them to threads.

**Important Point:** The loop being parallelized must be a **well-formed loop** where iterations are independent or their dependencies are handled correctly.

#### 2.2.2. `#pragma omp sections`

This construct allows you to divide a code block into independent sections, each of which can be executed by a different thread.

**Syntax:**

```c++
#pragma omp parallel sections
{
    #pragma omp section
    {
        // Code for section 1
    }
    #pragma omp section
    {
        // Code for section 2
    }
    // ... more sections
}
```

**Example:**

```c++
#include <iostream>
#include <omp.h>

void task1() {
    std::cout << "Executing Task 1 on thread " << omp_get_thread_num() << std::endl;
}

void task2() {
    std::cout << "Executing Task 2 on thread " << omp_get_thread_num() << std::endl;
}

int main() {
    #pragma omp parallel sections
    {
        #pragma omp section
        {
            task1();
        }
        #pragma omp section
        {
            task2();
        }
    }
    return 0;
}
```

**Explanation:**

*   The `#pragma omp parallel sections` directive creates a parallel region where the enclosed `#pragma omp section` blocks can be executed in parallel.
*   OpenMP will assign each section to an available thread.

**Important Point:** Sections are executed in the order they appear in the code, but their *execution* by threads can happen in any order. Threads wait at the end of the `sections` construct until all sections are completed.

#### 2.2.3. `#pragma omp single`

This directive ensures that a specific code block is executed by only one thread in the team, while other threads in the team continue execution or wait.

**Syntax:**

```c++
#pragma omp single
{
    // Code to be executed by only one thread
}
```

**Example:**

```c++
#include <iostream>
#include <omp.h>

int main() {
    int result = 0;
    const int N = 1000000;

    #pragma omp parallel for
    for (int i = 0; i < N; ++i) {
        // Potentially expensive computation
        result += i; // This will have race conditions without reduction!
    }

    // Print the final result once
    #pragma omp single
    {
        std::cout << "The sum is: " << result << std::endl;
    }

    return 0;
}
```

**Explanation:**

*   The `#pragma omp single` directive ensures that the `std::cout` statement is executed by only one thread. This is useful for operations that should only happen once, like printing a final result or performing an I/O operation that isn't thread-safe.

**Important Point:** Threads that are not chosen to execute the `single` block will wait at the end of the `single` construct until the chosen thread completes it.

---

## 3. Data Scoping and Clauses

Understanding how data is shared or private to threads is crucial for correctness and performance. OpenMP uses **clauses** on directives to control data scoping.

### 3.1. Variable Scoping

*   **Shared:** Variables declared outside the parallel region are shared by default. All threads can access and modify them.
*   **Private:** Variables declared within a parallel region or declared as private using a clause are specific to each thread. Each thread gets its own copy.

**Common Scoping Clauses:**

*   **`private(var1, var2, ...)`:** Declares variables as private to each thread. Each thread gets its own copy, and its initial value is undefined.
*   **`firstprivate(var1, var2, ...)`:** Similar to `private`, but each thread's private copy is initialized with the value of the original variable before the parallel region.
*   **`lastprivate(var1, var2, ...)`:** Similar to `private`, but the value of the variable from the last iteration (or the last executed section) is copied back to the original variable after the construct.
*   **`shared(var1, var2, ...)`:** Explicitly declares variables as shared.
*   **`default(shared | none)`:** Controls the default scoping for variables not explicitly mentioned in other clauses.
    *   `default(shared)`: All variables not explicitly declared otherwise are shared.
    *   `default(none)`: Requires explicit scoping for all variables. This is generally recommended for clarity and preventing errors.

**Example:**

```c++
#include <iostream>
#include <vector>
#include <omp.h>

int main() {
    const int N = 10;
    std::vector<int> a(N), b(N), c(N);

    // Initialize data
    for (int i = 0; i < N; ++i) {
        a[i] = i;
        b[i] = i * 2;
    }

    int sum_of_b = 0; // Shared variable
    int i; // Loop control variable

    #pragma omp parallel for default(none) private(i) shared(a, b, c, N)
    for (i = 0; i < N; ++i) {
        c[i] = a[i] + b[i];
        // Accessing sum_of_b here without synchronization will cause a race condition
        // sum_of_b += b[i]; // Problematic!
    }

    // Example of a single-threaded operation within a parallel region
    #pragma omp single
    {
        std::cout << "Calculation complete." << std::endl;
    }

    // Example of lastprivate: 'i' will hold the last value of the loop
    #pragma omp parallel for lastprivate(i)
    for (int j = 0; j < 5; ++j) {
        // ...
    }
    std::cout << "Last value of j: " << i << std::endl; // 'i' is now the 'lastprivate' variable

    return 0;
}
```

**Explanation:**

*   `default(none)`: Forces us to explicitly define the scope of each variable.
*   `private(i)`: Ensures that each thread has its own copy of the loop counter `i`.
*   `shared(a, b, c, N)`: Explicitly declares the arrays and N as shared.
*   `lastprivate(i)`: When the loop finishes, the value of `i` from the last iteration is copied back to the `i` variable outside the loop.

### 3.2. Race Conditions and Synchronization

A **race condition** occurs when multiple threads access shared data, and at least one of them modifies it, leading to unpredictable results depending on the order of execution.

**Solutions:**

*   **`reduction(operator: var)` Clause:** This clause is used with `parallel for` (and other constructs) to perform reductions on a variable. The compiler creates a private copy of the variable for each thread, performs operations on it locally, and then combines these private copies using the specified operator (e.g., `+`, `*`, `max`, `min`) to produce a final result.

    **Example:**

    ```c++
    #include <iostream>
    #include <vector>
    #include <omp.h>

    int main() {
        const int N = 1000000;
        std::vector<int> data(N);
        for (int i = 0; i < N; ++i) {
            data[i] = i % 10 + 1; // Values between 1 and 10
        }

        int sum = 0; // Shared variable

        #pragma omp parallel for reduction(+:sum)
        for (int i = 0; i < N; ++i) {
            sum += data[i];
        }

        std::cout << "The parallel sum is: " << sum << std::endl;

        // Calculate sequential sum for verification
        int sequential_sum = 0;
        for (int i = 0; i < N; ++i) {
            sequential_sum += data[i];
        }
        std::cout << "The sequential sum is: " << sequential_sum << std::endl;

        return 0;
    }
    ```

    **Explanation:**
    *   `reduction(+:sum)`: Declares `sum` as a reduction variable. Each thread gets a private `sum`, initialized to 0. The `+=` operation is performed on the private `sum`. Finally, all private `sum`s are added together into the original `sum`.

*   **`critical` Directive:** This directive ensures that only one thread at a time can execute a specific code block. It's like a lock for a critical section of code.

    **Syntax:**

    ```c++
    #pragma omp critical
    {
        // Critical section: only one thread can execute this at a time
    }
    ```

    **Example:**

    ```c++
    #include <iostream>
    #include <vector>
    #include <omp.h>

    int main() {
        int shared_counter = 0;

        #pragma omp parallel for
        for (int i = 0; i < 100; ++i) {
            // This access to shared_counter is a race condition
            // without synchronization
            #pragma omp critical
            {
                shared_counter++;
            }
        }

        std::cout << "Final counter value: " << shared_counter << std::endl;
        return 0;
    }
    ```

    **Explanation:**
    *   The `#pragma omp critical` directive ensures that only one thread can increment `shared_counter` at a time, preventing a race condition.

*   **`atomic` Directive:** Similar to `critical`, but specifically for atomic memory operations on a single variable (e.g., increment, decrement, assignment). It's generally more efficient than `critical` for simple operations.

    **Syntax:**

    ```c++
    #pragma omp atomic
    shared_variable++;
    ```

    **Example:**

    ```c++
    #include <iostream>
    #include <vector>
    #include <omp.h>

    int main() {
        int shared_counter = 0;

        #pragma omp parallel for
        for (int i = 0; i < 100; ++i) {
            #pragma omp atomic
            shared_counter++;
        }

        std::cout << "Final counter value: " << shared_counter << std::endl;
        return 0;
    }
    ```

    **Explanation:**
    *   `#pragma omp atomic`: Guarantees that the `shared_counter++` operation is performed atomically, meaning it completes without interruption from other threads.

**Important Point:** `reduction` is often preferred for accumulation tasks as it avoids the overhead of explicit locking mechanisms (`critical`, `atomic`). Use `critical` or `atomic` when `reduction` is not applicable.

---

## 4. Controlling the Number of Threads

OpenMP allows you to control the number of threads used by setting environment variables or using runtime library routines.

### 4.1. Environment Variable: `OMP_NUM_THREADS`

This is the most common way to set the number of threads.

**Example (Bash/Shell):**

```bash
export OMP_NUM_THREADS=4
./my_openmp_program
```

**Example (Windows Command Prompt):**

```cmd
set OMP_NUM_THREADS=4
my_openmp_program.exe
```

**Important Point:** If `OMP_NUM_THREADS` is not set, OpenMP typically defaults to using the number of cores available on the system.

### 4.2. Runtime Library Routines

OpenMP provides functions to query and set the number of threads at runtime.

*   **`omp_set_num_threads(int num_threads)`:** Sets the number of threads to be used in subsequent parallel regions.
*   **`omp_get_num_threads()`:** Returns the number of threads currently in the team.
*   **`omp_get_max_threads()`:** Returns the maximum number of threads that can be used if `OMP_NUM_THREADS` is not set or if the runtime system has a limit.
*   **`omp_get_num_procs()`:** Returns the number of processors available to the runtime system.

**Example:**

```c++
#include <iostream>
#include <omp.h>

int main() {
    // Set the number of threads to 4
    omp_set_num_threads(4);

    #pragma omp parallel
    {
        std::cout << "Hello from thread " << omp_get_thread_num()
                  << " out of " << omp_get_num_threads() << std::endl;
    }

    // Override with environment variable if set (example, usually env var takes precedence)
    // int num_threads = omp_get_max_threads(); // Could use this to get a default

    return 0;
}
```

**Important Point:** `omp_set_num_threads()` should typically be called before the first parallel region. Environment variables usually have higher precedence than `omp_set_num_threads()`.

---

## 5. Practice Questions & Exercises

**Question 1:**
Consider the following C++ code snippet. What will be the output, and why?

```c++
#include <iostream>
#include <omp.h>

int main() {
    int counter = 0;
    #pragma omp parallel for
    for (int i = 0; i < 10; ++i) {
        counter = i;
    }
    std::cout << "Final counter: " << counter << std::endl;
    return 0;
}
```

**Answer 1:**
The output will be unpredictable. It's likely to be a value between 0 and 9, but it's not guaranteed. This is because `counter` is a shared variable, and multiple threads are writing to it simultaneously without any synchronization. This is a classic **race condition**. The last thread to write to `counter` will determine its final value. For example, if thread 3 finishes its iteration and sets `counter = 3`, and then thread 7 quickly finishes its iteration and sets `counter = 7`, the final value will be 7. However, if thread 7 finishes *before* thread 3, the final value could be 3.

**Question 2:**
How would you modify the code from Question 1 to correctly calculate the sum of `i` from 0 to 9 in parallel, ensuring no race conditions?

**Answer 2:**
Use the `reduction` clause.

```c++
#include <iostream>
#include <omp.h>

int main() {
    int sum = 0;
    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < 10; ++i) {
        sum += i;
    }
    std::cout << "Final sum: " << sum << std::endl;
    return 0;
}
```
**Explanation:** The `reduction(+:sum)` clause ensures that each thread has a private copy of `sum`, initialized to 0. The `+=` operation is performed on the private copies, and then all private copies are summed up at the end to update the original `sum`. This correctly computes the sum (which should be 45).

**Question 3:**
What is the difference between `#pragma omp critical` and `#pragma omp atomic`?

**Answer 3:**
*   **`#pragma omp critical`**: Protects a *block* of code, ensuring that only one thread can execute that block at a time. It's like a mutex (mutual exclusion lock). It can be used for complex operations involving multiple statements.
*   **`#pragma omp atomic`**: Protects a *single expression* that updates a memory location (e.g., `x++`, `y = z`). It's typically more lightweight and efficient than `critical` for these specific atomic operations.

**Question 4:**
Write an OpenMP program that prints "Hello from thread X" for each thread, where X is the thread's ID and also prints "Hello from thread X out of Y" where Y is the total number of threads.

**Answer 4:**

```c++
#include <iostream>
#include <omp.h>

int main() {
    #pragma omp parallel
    {
        int thread_id = omp_get_thread_num();
        int num_threads = omp_get_num_threads();
        std::cout << "Hello from thread " << thread_id << " out of " << num_threads << std::endl;
    }
    return 0;
}
```

**Question 5:**
What does `default(none)` clause do, and why is it good practice to use it?

**Answer 5:**
The `default(none)` clause requires you to explicitly specify the data scope (e.g., `shared`, `private`, `firstprivate`, `lastprivate`) for all variables used within the parallel region that are not automatically handled (like loop variables for `parallel for`).

It's good practice because:
1.  **Clarity:** It makes the code more readable and understandable by explicitly stating how each variable is handled.
2.  **Error Prevention:** It helps catch common mistakes where a variable might be unintentionally shared or made private, leading to race conditions or incorrect data propagation. It forces the programmer to think about data scoping, which is critical for correct parallel programming.

---

## 6. Important Points to Remember

*   **Shared Memory Model:** OpenMP is designed for systems where multiple processors share a single memory space.
*   **Compiler Directives:** OpenMP is directive-based. These directives instruct the compiler on how to parallelize the code.
*   **Threads:** OpenMP manages threads for parallel execution.
*   **Parallel Region:** The `#pragma omp parallel` directive creates a block of code that will be executed by multiple threads.
*   **Worksharing:** Constructs like `#pragma omp for` and `#pragma omp sections` distribute work among threads.
*   **Data Scoping:** Carefully manage variable scope using clauses like `private`, `firstprivate`, `lastprivate`, `shared`, and `reduction` to avoid race conditions.
*   **Race Conditions:** Occur when multiple threads access shared data, with at least one modifying it, leading to unpredictable results.
*   **Synchronization:** Use `reduction`, `critical`, and `atomic` directives to handle shared data access safely. `reduction` is often preferred for accumulation.
*   **Thread Count:** Control the number of threads using `OMP_NUM_THREADS` environment variable or `omp_set_num_threads()` runtime function.
*   **`default(none)`:** Always consider using this clause for explicit data scoping and error prevention.
*   **Compile with OpenMP Flag:** You need to enable OpenMP support during compilation. For GCC/Clang, use `-fopenmp`. For Intel compilers, use `-qopenmp`.

This introduction covers the foundational concepts of OpenMP. As you progress, you'll encounter more advanced directives and clauses for finer-grained control over parallelism.
