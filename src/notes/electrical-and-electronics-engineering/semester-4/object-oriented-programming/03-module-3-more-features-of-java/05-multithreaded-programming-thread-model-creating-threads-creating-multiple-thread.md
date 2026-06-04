---
title: "Multithreaded programming -Thread model, Creating threads, Creating multiple threads, thread synchronization."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36012"
status: "completed"
scrapedAt: "2026-05-23T16:17:37.650Z"
---
Here are comprehensive study notes for the topic "Multithreaded Programming" from Module 3: More features of Java in OBJECT ORIENTED PROGRAMMING.

---

# Module 3: More Features of Java - Multithreaded Programming

**Course Outcomes Addressed:**
*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Multithreaded programming. (Knowledge Level: K3)

**Learning Outcomes:**
Upon completion of this topic, you should be able to:
*   Understand the thread model in Java.
*   Create threads in Java using different approaches.
*   Create and manage multiple threads concurrently.
*   Implement thread synchronization to prevent race conditions and ensure data integrity.

---

## 1. Introduction to Multithreaded Programming

**Key Concept:** A thread is the smallest unit of processing that can be scheduled by an operating system. Multithreaded programming allows a program to perform multiple tasks concurrently.

**Why Multithreading?**
*   **Responsiveness:** Keeps an application responsive, especially during long-running operations (e.g., UI updates while a file is being downloaded).
*   **Resource Sharing:** Threads within the same process share the same memory space, allowing for efficient communication and data sharing.
*   **Efficiency:** Can utilize multiple CPU cores for parallel execution, improving performance.
*   **Concurrency:** Allows for simultaneous execution of tasks, making programs appear to run faster.

**Analogy:** Think of a restaurant. A single-threaded restaurant would have one chef doing everything: taking orders, cooking, serving, and cleaning. A multithreaded restaurant would have multiple chefs (threads) working in parallel: one taking orders, another cooking appetizers, another cooking main courses, and a waiter serving. This makes the service much faster and more efficient.

---

## 2. The Thread Model in Java

**Key Concept:** Java's thread model is based on the **operating system's thread model**. This means that Java threads are typically implemented as native threads managed by the underlying OS. However, Java also provides an abstraction layer.

**Process vs. Thread:**
*   **Process:** An independent program in execution. It has its own memory space, resources (file handles, etc.), and execution context.
*   **Thread:** A path of execution within a process. Threads within the same process share the process's memory space and resources.

**Java's Thread Model - Key Characteristics:**
*   **Concurrency:** Java supports concurrent execution of threads.
*   **Shared Memory:** Threads within a Java application share the same heap memory. This means they can access and modify the same objects.
*   **JVM Responsibility:** The Java Virtual Machine (JVM) manages the lifecycle of Java threads.
*   **Operating System Dependency:** While the JVM provides the abstraction, the actual scheduling and execution of threads are performed by the underlying operating system's thread scheduler.

**Important Point:** Because threads share memory, improper access can lead to **race conditions**, where the outcome of an operation depends on the unpredictable order in which threads execute. This is where thread synchronization becomes crucial.

---

## 3. Creating Threads in Java

There are two primary ways to create threads in Java:

### 3.1. Extending the `Thread` Class

**Key Concept:** You can create a new class that extends the `java.lang.Thread` class and overrides its `run()` method. The `run()` method contains the code that will be executed by the thread.

**Steps:**
1.  Define a class that extends `Thread`.
2.  Override the `run()` method. This method contains the code the thread will execute.
3.  Create an instance of your thread class.
4.  Call the `start()` method on the thread object. **Do NOT call `run()` directly.** The `start()` method is responsible for creating a new execution thread and calling the `run()` method within that new thread.

**Example:**

```java
// 1. Define a class that extends Thread
class MyThread extends Thread {
    private String threadName;

    MyThread(String name) {
        threadName = name;
        System.out.println("Creating " +  threadName );
    }

    // 2. Override the run() method
    @Override
    public void run() {
        System.out.println("Running " +  threadName );
        try {
            for(int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                // Pause the thread for 50 milliseconds
                Thread.sleep(50);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " +  threadName + " interrupted.");
        }
        System.out.println("Thread " +  threadName + " exiting.");
    }
}

public class ThreadCreationExample1 {
    public static void main(String[] args) {
        // 3. Create an instance of your thread class
        MyThread thread1 = new MyThread("Thread-1");
        MyThread thread2 = new MyThread("Thread-2");

        // 4. Call the start() method
        thread1.start();
        thread2.start();

        System.out.println("Main thread finished.");
    }
}
```

**Output (may vary slightly due to scheduling):**

```
Creating Thread-1
Creating Thread-2
Running Thread-1
Thread: Thread-1, 4
Running Thread-2
Thread: Thread-2, 4
Thread: Thread-1, 3
Thread: Thread-2, 3
Thread: Thread-1, 2
Thread: Thread-2, 2
Thread: Thread-1, 1
Thread: Thread-2, 1
Thread Thread-1 exiting.
Thread Thread-2 exiting.
Main thread finished.
```

**Important Point (Schildt, Chapter 30):** Using `start()` creates a new thread of execution, while calling `run()` directly executes the code within the current thread.

---

### 3.2. Implementing the `Runnable` Interface

**Key Concept:** A more flexible and recommended approach is to implement the `java.lang.Runnable` interface. This interface has a single method, `run()`, which contains the code to be executed. You then create a `Thread` object and pass your `Runnable` object to its constructor.

**Steps:**
1.  Define a class that implements the `Runnable` interface.
2.  Implement the `run()` method, which contains the thread's executable code.
3.  Create an instance of your `Runnable` class.
4.  Create a `Thread` object, passing the `Runnable` instance to its constructor: `Thread t = new Thread(yourRunnableInstance);`.
5.  Call the `start()` method on the `Thread` object.

**Example:**

```java
// 1. Define a class that implements Runnable
class MyRunnable implements Runnable {
    private String threadName;

    MyRunnable(String name) {
        threadName = name;
        System.out.println("Creating " +  threadName );
    }

    // 2. Implement the run() method
    @Override
    public void run() {
        System.out.println("Running " +  threadName );
        try {
            for(int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                // Pause the thread for 50 milliseconds
                Thread.sleep(50);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " +  threadName + " interrupted.");
        }
        System.out.println("Thread " +  threadName + " exiting.");
    }
}

public class ThreadCreationExample2 {
    public static void main(String[] args) {
        // 3. Create an instance of your Runnable class
        MyRunnable myRunnable1 = new MyRunnable("Thread-A");
        MyRunnable myRunnable2 = new MyRunnable("Thread-B");

        // 4. Create Thread objects
        Thread threadA = new Thread(myRunnable1);
        Thread threadB = new Thread(myRunnable2);

        // 5. Call the start() method
        threadA.start();
        threadB.start();

        System.out.println("Main thread finished.");
    }
}
```

**Output (similar to the previous example):**

```
Creating Thread-A
Creating Thread-B
Running Thread-A
Thread: Thread-A, 4
Running Thread-B
Thread: Thread-B, 4
Thread: Thread-A, 3
Thread: Thread-B, 3
Thread: Thread-A, 2
Thread: Thread-B, 2
Thread: Thread-A, 1
Thread: Thread-B, 1
Thread Thread-A exiting.
Thread Thread-B exiting.
Main thread finished.
```

**Advantages of Implementing `Runnable` (Deitel & Deitel, Chapter 16):**
*   **Flexibility:** Your class can still extend another class. In Java, you can only extend one class, but you can implement multiple interfaces.
*   **Decoupling:** Separates the task (what the thread does) from the thread management (how it's executed). This makes the code more modular.

---

## 4. Creating Multiple Threads (Concurrency)

**Key Concept:** To achieve concurrency, you simply create and start multiple `Thread` or `Runnable` objects. The Java runtime and the operating system's scheduler will manage their execution, interleaving their operations.

**How it Works:**
When multiple threads are started, the JVM assigns CPU time slices to each runnable thread. This leads to the illusion of simultaneous execution. On systems with multiple CPU cores, threads can genuinely run in parallel.

**Example (using `Runnable` for illustration):**

```java
class Worker implements Runnable {
    private String taskName;

    Worker(String name) {
        taskName = name;
        System.out.println("Task " + taskName + " created.");
    }

    @Override
    public void run() {
        System.out.println("Executing task: " + taskName);
        try {
            // Simulate work
            for (int i = 1; i <= 5; i++) {
                System.out.println("Task " + taskName + ": Step " + i);
                Thread.sleep((long) (Math.random() * 1000)); // Sleep for a random time
            }
        } catch (InterruptedException e) {
            System.out.println("Task " + taskName + " interrupted.");
        }
        System.out.println("Task " + taskName + " completed.");
    }
}

public class MultipleThreadsExample {
    public static void main(String[] args) {
        System.out.println("Main thread starting multiple tasks.");

        Worker task1 = new Worker("A");
        Worker task2 = new Worker("B");
        Worker task3 = new Worker("C");

        Thread thread1 = new Thread(task1);
        Thread thread2 = new Thread(task2);
        Thread thread3 = new Thread(task3);

        thread1.start();
        thread2.start();
        thread3.start();

        System.out.println("Main thread has started all tasks.");
        // The main thread continues its execution while worker threads run concurrently.
    }
}
```

**Potential Output (order will vary):**

```
Main thread starting multiple tasks.
Task A created.
Task B created.
Task C created.
Executing task: A
Task A: Step 1
Executing task: B
Task B: Step 1
Executing task: C
Task C: Step 1
Task A: Step 2
Task B: Step 2
Task C: Step 2
Task A: Step 3
Task B: Step 3
Task C: Step 3
Task A: Step 4
Task B: Step 4
Task C: Step 4
Task A: Step 5
Task B: Step 5
Task C: Step 5
Task A completed.
Task B completed.
Task C completed.
Main thread has started all tasks.
```

**Important Point:** The output order of messages from different threads is not guaranteed due to the operating system's thread scheduler.

---

## 5. Thread Synchronization

**Key Concept:** When multiple threads access shared resources (like variables, data structures, or files), and at least one of them modifies the resource, there's a risk of **race conditions**. Synchronization mechanisms are used to ensure that only one thread can access a shared resource at a time, preventing data corruption and maintaining program integrity.

**Common Synchronization Mechanisms in Java:**

### 5.1. `synchronized` Keyword

**Key Concept:** The `synchronized` keyword can be applied to methods or blocks of code. When a thread enters a `synchronized` method or block, it acquires a lock on the object. Other threads trying to access the same `synchronized` method or block on the same object will be blocked until the first thread releases the lock.

**a) Synchronized Methods:**
If a method is declared `synchronized`, the entire method is synchronized. The lock is acquired on the instance of the object on which the method is called.

```java
class Counter {
    private int count = 0;

    // Synchronized method
    public synchronized void increment() {
        count++; // Critical section
        System.out.println("Count is: " + count + " by thread: " + Thread.currentThread().getName());
    }

    public int getCount() {
        return count;
    }
}

class SynchronizedMethodExample {
    public static void main(String[] args) {
        Counter counter = new Counter();

        Runnable r = () -> {
            for (int i = 0; i < 5; i++) {
                counter.increment();
            }
        };

        Thread t1 = new Thread(r, "Thread-1");
        Thread t2 = new Thread(r, "Thread-2");

        t1.start();
        t2.start();
    }
}
```

**Explanation:**
Without `synchronized`, if `t1` reads `count` (e.g., 5), then `t2` reads `count` (also 5), both increment it to 6, and both write 6 back. This results in a lost update. With `synchronized`, `t1` will acquire the lock, increment `count` to 6, and release the lock. Only then can `t2` acquire the lock and increment it to 7.

**b) Synchronized Blocks:**
You can synchronize only a specific section of code within a method using `synchronized (object) { ... }`. This is useful when only a small part of a method needs to be protected. The object provided in the parentheses is the object on which the lock is acquired.

```java
class BankAccount {
    private double balance = 1000;

    public void deposit(double amount) {
        System.out.println(Thread.currentThread().getName() + " trying to deposit " + amount);
        synchronized (this) { // Synchronizing on the current object (BankAccount instance)
            balance += amount;
            System.out.println(Thread.currentThread().getName() + " deposited " + amount + ". New balance: " + balance);
        }
    }

    public void withdraw(double amount) {
        System.out.println(Thread.currentThread().getName() + " trying to withdraw " + amount);
        synchronized (this) { // Synchronizing on the current object
            if (balance >= amount) {
                balance -= amount;
                System.out.println(Thread.currentThread().getName() + " withdrew " + amount + ". New balance: " + balance);
            } else {
                System.out.println(Thread.currentThread().getName() + " insufficient funds for withdrawal of " + amount + ". Current balance: " + balance);
            }
        }
    }

    public double getBalance() {
        return balance;
    }
}

class SynchronizedBlockExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        Runnable depositor = () -> {
            account.deposit(100);
            account.withdraw(50);
        };

        Runnable withdrawer = () -> {
            account.withdraw(200);
            account.deposit(50);
        };

        Thread t1 = new Thread(depositor, "Depositor-1");
        Thread t2 = new Thread(withdrawer, "Withdrawer-1");

        t1.start();
        t2.start();
    }
}
```

**Important Point (Schildt, Chapter 30):**
*   `synchronized` methods implicitly synchronize on the object instance.
*   `synchronized` blocks allow finer-grained control over which object's lock is used.
*   Synchronizing on `this` is common for instance methods.
*   Synchronizing on the class object (`ClassName.class`) is used for static synchronized methods, synchronizing access to static resources.

**Referencing Balagurusamy, Chapter 12:** Balagurusamy emphasizes that the `synchronized` keyword is the primary mechanism for mutual exclusion, preventing data corruption in multithreaded scenarios by ensuring that only one thread can execute the synchronized code block at a time.

### 5.2. `volatile` Keyword

**Key Concept:** The `volatile` keyword is a weaker form of synchronization. It ensures that changes to a variable are immediately visible to all threads. Without `volatile`, threads might cache the value of a variable in their local registers, leading to stale data.

**Use Case:** `volatile` is primarily used for simple flags or status variables where visibility is the main concern, not necessarily atomic updates.

**Example:**

```java
class VolatileExample {
    // volatile ensures that 'running' is always read from main memory, not a CPU cache.
    private volatile boolean running = true;

    public void run() {
        int counter = 0;
        while (running) {
            counter++;
            // System.out.println("Counter: " + counter); // uncomment for slow execution
        }
        System.out.println("Thread stopped. Final count: " + counter);
    }

    public void stopRunning() {
        running = false;
        System.out.println("Setting running to false.");
    }
}

class MainVolatile {
    public static void main(String[] args) throws InterruptedException {
        VolatileExample ve = new VolatileExample();

        Thread workerThread = new Thread(() -> {
            ve.run();
        });

        workerThread.start();

        // Let the worker thread run for a bit
        Thread.sleep(2000);

        // Signal the worker thread to stop
        ve.stopRunning();

        // Wait for the worker thread to finish
        workerThread.join();
        System.out.println("Main thread finished.");
    }
}
```

**Explanation:**
In `MainVolatile`, when `ve.stopRunning()` is called, `running` is set to `false`. Because `running` is `volatile`, the `workerThread`'s `while(running)` loop condition will see this updated value and terminate. Without `volatile`, the `workerThread` might continue running indefinitely because it could be using a cached `true` value of `running`.

**Important Point (Y. Daniel Liang, Chapter 20):** Liang explains `volatile` as a hint to the compiler and the system that a variable's value might be changed by another thread at any time, ensuring that the variable is always read from and written to main memory. It guarantees *visibility*, not *atomicity*.

### 5.3. `wait()`, `notify()`, and `notifyAll()`

**Key Concept:** These methods, inherited from `java.lang.Object`, are used for inter-thread communication and coordination. They allow threads to pause their execution (`wait()`) and to be woken up by other threads (`notify()`, `notifyAll()`).

*   `wait()`: Causes the current thread to pause execution and wait until another thread invokes `notify()` or `notifyAll()` on the same object. The thread must own the monitor (lock) of the object on which `wait()` is called.
*   `notify()`: Wakes up a single thread that is waiting on the object's monitor. If multiple threads are waiting, only one is woken up arbitrarily.
*   `notifyAll()`: Wakes up all threads that are waiting on the object's monitor.

**Important Rules:**
1.  These methods can only be called from within a `synchronized` block or method.
2.  The thread calling `wait()`, `notify()`, or `notifyAll()` must own the monitor of the object.

**Example (Producer-Consumer Problem - a classic synchronization problem):**

```java
class SharedBuffer {
    private int[] buffer = new int[5]; // A buffer of size 5
    private int count; // Number of items in the buffer

    // Producer method
    public synchronized void produce(int item) {
        // Wait if the buffer is full
        while (count == buffer.length) {
            try {
                System.out.println("Buffer is full. Producer waiting...");
                wait(); // Release lock and wait
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Add item to buffer
        buffer[count] = item;
        count++;
        System.out.println("Produced: " + item + " | Buffer count: " + count);

        // Notify consumer that an item is available
        notifyAll(); // Wake up any waiting consumers
    }

    // Consumer method
    public synchronized int consume() {
        // Wait if the buffer is empty
        while (count == 0) {
            try {
                System.out.println("Buffer is empty. Consumer waiting...");
                wait(); // Release lock and wait
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Consume item from buffer
        int item = buffer[0]; // Consume from the front
        // Shift elements to the left to fill the gap
        for (int i = 0; i < count - 1; i++) {
            buffer[i] = buffer[i + 1];
        }
        count--;
        System.out.println("Consumed: " + item + " | Buffer count: " + count);

        // Notify producer that space is available
        notifyAll(); // Wake up any waiting producers
        return item;
    }
}

class ProducerConsumerExample {
    public static void main(String[] args) {
        SharedBuffer buffer = new SharedBuffer();

        // Producer thread
        Thread producerThread = new Thread(() -> {
            for (int i = 1; i <= 10; i++) {
                buffer.produce(i);
                try {
                    Thread.sleep(100); // Simulate time to produce
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "Producer");

        // Consumer thread
        Thread consumerThread = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                buffer.consume();
                try {
                    Thread.sleep(200); // Simulate time to consume
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "Consumer");

        producerThread.start();
        consumerThread.start();
    }
}
```

**Explanation:**
*   The producer waits (`wait()`) if the buffer is full.
*   The consumer waits (`wait()`) if the buffer is empty.
*   When the producer adds an item, it calls `notifyAll()` to wake up the consumer.
*   When the consumer removes an item, it calls `notifyAll()` to wake up the producer.
*   Using `while` loops for checking conditions before `wait()` is crucial because a thread might be woken up spuriously or by `notifyAll()` even if its condition isn't met (this is called a "spurious wakeup"). The `while` loop re-checks the condition after waking up.

**Important Point (Head First Java, Chapter 12):** Head First Java uses vivid analogies to explain `wait()`, `notify()`, and `notifyAll()`. Think of them as giving threads the ability to talk to each other and coordinate actions, like waiting for a signal before proceeding.

---

## 6. Thread States

**Key Concept:** A thread can exist in one of several states during its lifecycle.

*   **New:** A thread that has been created but has not yet started execution.
*   **Runnable:** A thread that is ready to run. The thread scheduler is considering it for execution.
*   **Running:** The thread is currently executing.
*   **Blocked/Waiting:** The thread is temporarily unable to run, usually because it's waiting for an I/O operation to complete, waiting for a lock on a synchronized resource, or waiting for another thread to signal it (`wait()`).
*   **Timed Waiting:** Similar to waiting, but the thread will wake up automatically after a specified period of time (e.g., using `sleep()`, `wait(timeout)`, `join(timeout)`).
*   **Terminated:** The thread has completed its execution (e.g., the `run()` method has finished) or has been stopped abnormally.

**Common Thread Methods Related to State:**
*   `start()`: Moves a thread from New to Runnable.
*   `sleep(long millis)`: Moves a thread from Running to Timed Waiting.
*   `wait()`: Moves a thread from Running to Waiting.
*   `wait(long timeout)`: Moves a thread from Running to Timed Waiting.
*   `notify()`: Moves a Waiting or Timed Waiting thread to the Runnable state.
*   `notifyAll()`: Moves all Waiting or Timed Waiting threads to the Runnable state.
*   `join()`: Waits for another thread to die, moving the current thread to a Waiting state.
*   `yield()`: Suggests that the current thread voluntarily give up its CPU time slice, moving it from Running back to Runnable.

---

## 7. Important Points to Remember

*   **`start()` vs. `run()`:** Always use `start()` to begin a new thread's execution. Calling `run()` directly executes the code in the current thread.
*   **Thread Safety:** Not all shared resource access needs synchronization. Synchronization adds overhead. Only synchronize critical sections where data integrity might be compromised.
*   **`volatile` for Visibility:** Use `volatile` when you need to ensure that changes to a variable are visible across threads, but you don't need atomic updates.
*   **`synchronized` for Atomicity and Mutual Exclusion:** Use `synchronized` methods or blocks to protect critical sections and ensure atomic operations on shared data.
*   **`wait()/notify()/notifyAll()` for Coordination:** Use these methods for complex inter-thread communication and signaling, especially in producer-consumer scenarios. Remember the `while` loop pattern for checking conditions before `wait()`.
*   **Deadlock:** Be aware of the possibility of **deadlock**, where two or more threads are blocked forever, waiting for each other to release resources. This often happens when threads try to acquire multiple locks in different orders.
*   **Performance:** Excessive synchronization or unnecessary locking can lead to performance bottlenecks.
*   **Thread Naming:** Naming threads (`Thread(Runnable r, String name)`) can be helpful for debugging.

---

## 8. Practice Questions and Exercises

**Question 1:** What is the fundamental difference between a process and a thread? (K2)

**Answer:** A process is an independent program execution with its own memory space and resources. A thread is a path of execution within a process, sharing the process's memory and resources.

---

**Question 2:** Explain the two primary ways to create threads in Java and state which one is generally preferred and why. (K3)

**Answer:**
1.  **Extending `Thread`:** Create a class that inherits from `java.lang.Thread` and overrides `run()`.
2.  **Implementing `Runnable`:** Create a class that implements `java.lang.Runnable` and implements `run()`. Then, create a `Thread` object, passing the `Runnable` instance to its constructor.

The `Runnable` interface approach is generally preferred because it offers greater flexibility, allowing your class to extend other classes while still supporting threading, and it promotes better decoupling of tasks from thread management.

---

**Question 3:** Consider the following code snippet. What potential issue might arise if the `count++` operation were not synchronized, and how would `synchronized` keyword resolve it? (K3)

```java
class Counter {
    private int count = 0;

    public void increment() {
        count++; // Potential issue here
        System.out.println("Count: " + count);
    }
}
```

**Answer:**
The potential issue is a **race condition**. If multiple threads call `increment()` concurrently:
1.  A thread reads the value of `count` (e.g., 5).
2.  Before it can write the incremented value back, another thread also reads `count` (still 5).
3.  Both threads increment their local copy of `count` to 6.
4.  Both threads write 6 back to `count`.

This results in a lost update – `count` should be 7 but is only 6.

Using `synchronized void increment()` or `synchronized (this) { count++; }` would resolve this. The `synchronized` keyword ensures that only one thread can execute the `count++` operation at a time, guaranteeing that the read-increment-write sequence is atomic.

---

**Question 4:** When would you use the `volatile` keyword, and what guarantee does it provide that `synchronized` might not offer in the same way? (K3)

**Answer:**
You would use the `volatile` keyword when you need to ensure that changes to a variable are **visible** to all threads immediately. It's typically used for simple flags or status indicators.

`volatile` guarantees visibility: it ensures that when one thread modifies a `volatile` variable, all other threads will see the updated value. It prevents threads from using stale cached values.

`synchronized`, on the other hand, provides both **visibility** (because acquiring a lock makes all prior writes visible to the thread acquiring the lock) and **atomicity/mutual exclusion** (ensuring that only one thread can execute a synchronized block at a time). `synchronized` has higher overhead than `volatile`.

---

**Question 5:** Explain the purpose of `wait()`, `notify()`, and `notifyAll()` in multithreaded programming. (K3)

**Answer:** These methods are used for inter-thread communication and coordination.
*   `wait()`: Causes the calling thread to pause execution and release the object's lock, waiting to be notified by another thread.
*   `notify()`: Wakes up a single thread waiting on the object's monitor.
*   `notifyAll()`: Wakes up all threads waiting on the object's monitor.

They are essential for scenarios like the producer-consumer problem, where threads need to signal each other about the state of shared resources (e.g., buffer full/empty). They must be called within a `synchronized` context.

---

**Exercise:** Write a Java program that creates three threads. Each thread should print its name and a sequence of numbers from 1 to 5, with a small random delay between each number. Ensure the output from different threads is interleaved. (K3)

**Solution Snippet (using `Runnable`):**

```java
class NumberPrinter implements Runnable {
    private String threadName;

    NumberPrinter(String name) {
        threadName = name;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + ": " + i);
            try {
                Thread.sleep((long) (Math.random() * 500)); // Random delay up to 0.5 seconds
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted.");
            }
        }
        System.out.println(threadName + " finished.");
    }
}

public class InterleavedPrinting {
    public static void main(String[] args) {
        NumberPrinter np1 = new NumberPrinter("Thread-A");
        NumberPrinter np2 = new NumberPrinter("Thread-B");
        NumberPrinter np3 = new NumberPrinter("Thread-C");

        Thread t1 = new Thread(np1);
        Thread t2 = new Thread(np2);
        Thread t3 = new Thread(np3);

        t1.start();
        t2.start();
        t3.start();
    }
}
```

---

This concludes the study notes on Multithreaded Programming in Java. Remember to practice these concepts to solidify your understanding.
