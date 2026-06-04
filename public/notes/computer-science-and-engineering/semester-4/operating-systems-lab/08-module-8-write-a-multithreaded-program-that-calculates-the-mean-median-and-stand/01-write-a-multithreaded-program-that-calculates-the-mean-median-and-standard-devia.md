---
title: "Write a multithreaded program that calculates the mean, median, and standard deviation for a list of integers. This program should receive a series of integers on the command line and will then create three separate worker threads. The first thread will determine the mean value, the second will determine the median and the third will calculate the standard deviation of the integers. The variables representing the mean, median, and standard deviation values will be stored globally. The worker threads will set these values, and the parent thread will output the values once the workers have exited."
subject: "OPERATING SYSTEMS LAB"
module: "Module 8: Write a multithreaded program that calculates the mean, median, and standard deviation for a list of integers. This program should receive a series of integers on the command line and will then create three separate worker threads. The first thread will determine the mean value, the second will determine the median and the third will calculate the standard deviation of the integers. The variables representing the mean, median, and standard deviation values will be stored globally. The worker threads will set these values, and the parent thread will output the values once the workers have exited."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b499"
status: "completed"
scrapedAt: "2026-05-20T16:14:58.466Z"
---
# OPERATING SYSTEMS LAB - Module 8: Multithreaded Statistics Calculation

**Topic:** Write a multithreaded program that calculates the mean, median, and standard deviation for a list of integers. This program will receive a series of integers on the command line and will then create three separate worker threads. The first thread will determine the mean value, the second will determine the median and the third will calculate the standard deviation of the integers. The variables representing the mean, median, and standard deviation values will be stored globally. The worker threads will set these values, and the parent thread will output the values once the workers have exited.

**Learning Outcomes:**

*   Understand the concept of multithreading and its advantages.
*   Learn how to create and manage threads in a programming language (e.g., C/C++ with pthreads or Java).
*   Understand the need for synchronization when accessing shared resources (global variables) in a multithreaded environment.
*   Implement the mean, median, and standard deviation statistical calculations.
*   Pass command-line arguments to a program.
*   Understand the lifecycle of a thread (creation, execution, termination).
*   Demonstrate proper error handling in a multithreaded application.

## 1. Introduction to Multithreading

*   **Definition:** Multithreading is a technique that allows a single process to execute multiple threads of execution concurrently.
*   **Threads vs. Processes:**
    *   *Process:* An independent execution environment with its own memory space, resources, and program counter.  Processes are heavyweight.
    *   *Thread:* A lightweight unit of execution within a process. Threads share the process's memory space, resources (open files, etc.). Threads are faster to create and switch between than processes.
*   **Advantages of Multithreading:**
    *   *Improved Performance:*  Can exploit parallelism on multi-core processors.  Individual tasks can be broken into smaller, concurrent tasks.
    *   *Increased Responsiveness:*  A long-running task can be handled by a separate thread, preventing the main thread from blocking and making the application more responsive.
    *   *Resource Sharing:* Threads within the same process can easily share data, making communication simpler compared to inter-process communication (IPC).
    *   *Economy:* Creating and managing threads is typically less resource-intensive than creating and managing processes.

*   **Key Concepts:**
    *   **Concurrency:**  The ability of a system to execute multiple tasks seemingly simultaneously.  This can be achieved through interleaving tasks on a single core or through true parallelism on multiple cores.
    *   **Parallelism:** The actual simultaneous execution of multiple tasks on multiple processing cores.
    *   **Thread Creation:** The process of creating a new thread within a process.
    *   **Thread Synchronization:** Mechanisms used to coordinate the execution of multiple threads to prevent race conditions and ensure data consistency when accessing shared resources. Common synchronization primitives include:
        *   *Mutexes (Mutual Exclusion Locks):*  Allow only one thread to access a critical section of code at a time.
        *   *Semaphores:* Generalize mutexes and allow a limited number of threads to access a resource concurrently.
        *   *Condition Variables:* Allow threads to wait for specific conditions to be met before proceeding.
        *   *Barriers:* Allow multiple threads to synchronize at a specific point in their execution.

## 2. Creating and Managing Threads (Example: C with pthreads)

*   **pthreads (POSIX Threads):** A standardized API for creating and managing threads in C/C++.  Available on most Unix-like systems (Linux, macOS, etc.).

*   **Header File:** `#include <pthread.h>`

*   **Key Functions:**
    *   `pthread_create(pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine) (void *), void *arg);`
        *   `thread`:  A pointer to a `pthread_t` variable that will store the ID of the new thread.
        *   `attr`:  A pointer to a `pthread_attr_t` structure specifying thread attributes (e.g., stack size, scheduling policy).  Can be `NULL` for default attributes.
        *   `start_routine`:  A pointer to a function that the thread will execute.  This function must take a `void *` argument and return a `void *`.
        *   `arg`:  A pointer to an argument that will be passed to the `start_routine`.  Can be `NULL` if no argument is needed.
    *   `pthread_join(pthread_t thread, void **retval);`
        *   `thread`:  The ID of the thread to wait for.
        *   `retval`:  A pointer to a `void *` variable where the thread's return value will be stored.  Can be `NULL` if the return value is not needed.  `pthread_join` makes the calling thread block until the target thread terminates.
    *   `pthread_exit(void *retval);`
        *   Terminates the calling thread.  `retval` is a pointer to a value that can be retrieved by another thread using `pthread_join`.
    *   `pthread_mutex_init(pthread_mutex_t *mutex, const pthread_mutexattr_t *attr);`
        * Initializes a mutex.
    *   `pthread_mutex_lock(pthread_mutex_t *mutex);`
        * Locks a mutex, blocking until the mutex is available.
    *   `pthread_mutex_unlock(pthread_mutex_t *mutex);`
        * Unlocks a mutex.
    *   `pthread_mutex_destroy(pthread_mutex_t *mutex);`
        * Destroys a mutex.

*   **Example (C):**

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void *thread_function(void *arg) {
    int thread_id = *((int *)arg);
    printf("Thread %d: Hello from thread!\n", thread_id);
    pthread_exit(NULL);
}

int main() {
    pthread_t thread1, thread2;
    int id1 = 1, id2 = 2;

    pthread_create(&thread1, NULL, thread_function, &id1);
    pthread_create(&thread2, NULL, thread_function, &id2);

    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Main: Threads have finished.\n");

    return 0;
}
```

## 3. Command-Line Argument Parsing

*   `int main(int argc, char *argv[])`
    *   `argc`:  The number of command-line arguments (including the program name).
    *   `argv`:  An array of strings representing the command-line arguments.  `argv[0]` is the program name.  `argv[1]` through `argv[argc-1]` are the arguments passed by the user.

*   **Example:**

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: program_name <number1> <number2> ...\n");
        return 1;
    }

    printf("Program name: %s\n", argv[0]);
    printf("Number of arguments: %d\n", argc - 1);

    for (int i = 1; i < argc; i++) {
        int number = atoi(argv[i]);  // Convert string to integer
        printf("Argument %d: %d\n", i, number);
    }

    return 0;
}
```

## 4. Calculating Mean, Median, and Standard Deviation

*   **Mean:**  The average of a set of numbers. Sum of all numbers divided by the count.
*   **Median:** The middle value in a sorted set of numbers. If the number of elements is even, the median is the average of the two middle values.
*   **Standard Deviation:** A measure of the spread of data around the mean.
    1.  Calculate the mean.
    2.  For each number, find the difference between the number and the mean.
    3.  Square each difference.
    4.  Sum the squared differences.
    5.  Divide the sum by the number of elements (for population standard deviation) or the number of elements minus 1 (for sample standard deviation).  Usually, the sample standard deviation is used.
    6.  Take the square root of the result.

*   **Implementation Considerations:**
    *   **Data Types:**  Use `double` to represent the mean and standard deviation for better precision.
    *   **Sorting:** The median calculation requires sorting the input data. You can use the `qsort` function from the standard library (`stdlib.h`).

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Function to calculate the mean
double calculate_mean(int data[], int n) {
    double sum = 0.0;
    for (int i = 0; i < n; i++) {
        sum += data[i];
    }
    return sum / n;
}

// Function to compare integers for qsort
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

// Function to calculate the median
double calculate_median(int data[], int n) {
    // Create a copy of the data to avoid modifying the original array
    int *sorted_data = (int *)malloc(n * sizeof(int));
    if (sorted_data == NULL) {
        perror("malloc failed");
        exit(EXIT_FAILURE);
    }
    for (int i = 0; i < n; i++) {
        sorted_data[i] = data[i];
    }

    qsort(sorted_data, n, sizeof(int), compare);

    double median;
    if (n % 2 == 0) {
        // Even number of elements
        median = (sorted_data[n / 2 - 1] + sorted_data[n / 2]) / 2.0;
    } else {
        // Odd number of elements
        median = sorted_data[n / 2];
    }
    free(sorted_data);
    return median;
}

// Function to calculate the standard deviation
double calculate_standard_deviation(int data[], int n, double mean) {
    double sum_of_squares = 0.0;
    for (int i = 0; i < n; i++) {
        sum_of_squares += pow(data[i] - mean, 2);
    }
    return sqrt(sum_of_squares / (n - 1)); // Sample standard deviation
}
```

## 5. Multithreaded Implementation

*   **Global Variables:** The mean, median, and standard deviation should be stored in global variables so they can be accessed by all threads.  Since multiple threads will be writing to these variables, *you must protect them with mutexes* to prevent race conditions.

*   **Thread Functions:**
    *   Each thread will execute a function that calculates one of the statistics (mean, median, or standard deviation).
    *   The thread functions will:
        1.  Acquire the mutex protecting the global variable.
        2.  Calculate the statistic.
        3.  Store the result in the global variable.
        4.  Release the mutex.
        5.  Exit the thread.

*   **Main Thread:**
    1.  Parse the command-line arguments and store the integers in an array.
    2.  Initialize the global variables (mean, median, standard deviation) and their corresponding mutexes.
    3.  Create the three worker threads, passing the data array and its size as arguments (or accessible globally as well).
    4.  Wait for all three threads to finish using `pthread_join`.
    5.  Print the calculated mean, median, and standard deviation.
    6.  Destroy the mutexes.
    7.  Free any dynamically allocated memory.

*   **Example (Illustrative - Requires complete implementation):**

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <math.h>

// Global variables (MUST BE PROTECTED BY MUTEXES)
double mean, median, std_dev;
pthread_mutex_t mean_mutex, median_mutex, std_dev_mutex;

// Data array and size (also accessible to threads)
int *data;
int data_size;

// Function to calculate the mean (thread function)
void *calculate_mean_thread(void *arg) {
    double local_mean = 0.0;
    for (int i = 0; i < data_size; i++) {
        local_mean += data[i];
    }
    local_mean /= data_size;

    pthread_mutex_lock(&mean_mutex); // Acquire mutex
    mean = local_mean;
    pthread_mutex_unlock(&mean_mutex); // Release mutex

    pthread_exit(NULL);
}

// Function to calculate the median (thread function)
void *calculate_median_thread(void *arg) {
    // (Implementation similar to calculate_mean_thread, using calculate_median function)
    // Requires copying data, sorting, and mutex protection.
    double local_median = calculate_median(data, data_size); // Assuming you have that function defined earlier
    pthread_mutex_lock(&median_mutex);
    median = local_median;
    pthread_mutex_unlock(&median_mutex);
    pthread_exit(NULL);
}


// Function to calculate the standard deviation (thread function)
void *calculate_std_dev_thread(void *arg) {
    // (Implementation similar to calculate_mean_thread, using calculate_standard_deviation function)
    double local_std_dev;
    pthread_mutex_lock(&mean_mutex); // need the mean which is protected by a mutex
    local_std_dev = calculate_standard_deviation(data, data_size, mean);
    pthread_mutex_unlock(&mean_mutex);

    pthread_mutex_lock(&std_dev_mutex);
    std_dev = local_std_dev;
    pthread_mutex_unlock(&std_dev_mutex);
    pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: program_name <number1> <number2> ...\n");
        return 1;
    }

    data_size = argc - 1;
    data = (int *)malloc(data_size * sizeof(int));
    if (data == NULL) {
        perror("malloc failed");
        return 1;
    }

    for (int i = 0; i < data_size; i++) {
        data[i] = atoi(argv[i + 1]);
    }

    // Initialize mutexes
    pthread_mutex_init(&mean_mutex, NULL);
    pthread_mutex_init(&median_mutex, NULL);
    pthread_mutex_init(&std_dev_mutex, NULL);

    // Create threads
    pthread_t mean_thread, median_thread, std_dev_thread;

    pthread_create(&mean_thread, NULL, calculate_mean_thread, NULL);
    pthread_create(&median_thread, NULL, calculate_median_thread, NULL);
    pthread_create(&std_dev_thread, NULL, calculate_std_dev_thread, NULL);

    // Wait for threads to finish
    pthread_join(mean_thread, NULL);
    pthread_join(median_thread, NULL);
    pthread_join(std_dev_thread, NULL);

    // Print results
    printf("Mean: %lf\n", mean);
    printf("Median: %lf\n", median);
    printf("Standard Deviation: %lf\n", std_dev);

    // Destroy mutexes
    pthread_mutex_destroy(&mean_mutex);
    pthread_mutex_destroy(&median_mutex);
    pthread_mutex_destroy(&std_dev_mutex);

    // Free allocated memory
    free(data);

    return 0;
}
```

## 6. Error Handling

*   Always check the return values of functions like `pthread_create`, `pthread_join`, `malloc`, `pthread_mutex_init`, `pthread_mutex_lock`, and `pthread_mutex_unlock`.
*   Use `perror` to print error messages to `stderr`.
*   Gracefully exit the program if an error occurs, freeing any allocated resources.

## 7. Important Points to Remember

*   **Race Conditions:**  Be extremely careful when accessing shared resources (global variables) in a multithreaded environment.  Use mutexes or other synchronization mechanisms to prevent race conditions.  A race condition occurs when the outcome of a program depends on the unpredictable order in which multiple threads access shared data.
*   **Deadlocks:**  A deadlock occurs when two or more threads are blocked indefinitely, waiting for each other to release resources. Avoid circular dependencies when acquiring mutexes.  For example, if thread A locks mutex 1 and tries to lock mutex 2, and thread B locks mutex 2 and tries to lock mutex 1, a deadlock will occur.
*   **Memory Management:**  Ensure that you free any dynamically allocated memory when it is no longer needed to prevent memory leaks.
*   **Thread Safety:**  Make sure that the functions you use in your threads are thread-safe.  Thread-safe functions can be called by multiple threads concurrently without causing data corruption or other problems.
*   **Avoid Global Variables (If Possible):** While this example uses global variables for demonstration, it's often better to pass data to threads as arguments to avoid potential issues with shared mutable state.

## 8. Practice Questions and Exercises

1.  **What is the difference between a process and a thread?**

    *Answer:* A process is an independent execution environment with its own memory space, while a thread is a lightweight unit of execution within a process, sharing the process's memory space.

2.  **What is a race condition, and how can you prevent it?**

    *Answer:* A race condition occurs when the outcome of a program depends on the unpredictable order in which multiple threads access shared data. You can prevent race conditions by using synchronization mechanisms like mutexes to protect shared resources.

3.  **Explain the purpose of `pthread_create` and `pthread_join`.**

    *Answer:* `pthread_create` creates a new thread. `pthread_join` makes the calling thread wait for the specified thread to terminate.

4.  **How do you pass arguments to a thread function in C using pthreads?**

    *Answer:* You pass a pointer to an argument as the fourth argument to `pthread_create`.  The thread function must then cast this `void*` argument to the appropriate data type.

5.  **Write a code snippet that initializes a mutex in C using pthreads.**

    *Answer:*

    ```c
    #include <pthread.h>

    pthread_mutex_t my_mutex;

    int main() {
        pthread_mutex_init(&my_mutex, NULL);
        // ... rest of the code ...
        return 0;
    }
    ```

6.  **Modify the provided example code to handle the case where no command-line arguments are provided more robustly (e.g., print a more detailed error message and usage instructions).**

    *Answer:*

    ```c
    #include <stdio.h>
    #include <stdlib.h>

    int main(int argc, char *argv[]) {
        if (argc < 2) {
            fprintf(stderr, "Error: You must provide at least one integer as a command-line argument.\n");
            fprintf(stderr, "Usage: %s <integer1> <integer2> ... <integerN>\n", argv[0]);
            fprintf(stderr, "Example: %s 1 2 3 4 5\n", argv[0]);
            return 1; // Indicate an error
        }

        // ... rest of the code to process the arguments ...
        return 0;
    }
    ```

7.  **Explain the importance of destroying a mutex using `pthread_mutex_destroy`. What happens if you don't destroy it?**

    *Answer:*  `pthread_mutex_destroy` releases the resources associated with a mutex.  Failing to destroy a mutex can lead to resource leaks. In some cases, leaving a mutex locked or initialized when a process exits can cause undefined behavior, depending on the operating system's thread implementation.

8.  **Why is it generally a good practice to minimize the time a mutex is held?**

    *Answer:* Holding a mutex for a long time reduces the concurrency of the application. Other threads that need to access the protected resource will be blocked, decreasing overall performance.  Therefore, critical sections protected by mutexes should be as short as possible.

These notes provide a comprehensive overview of multithreading concepts, implementation details, and best practices relevant to the given lab assignment.  Remember to adapt and expand upon these notes based on the specific requirements of your course and programming environment. Good luck!
