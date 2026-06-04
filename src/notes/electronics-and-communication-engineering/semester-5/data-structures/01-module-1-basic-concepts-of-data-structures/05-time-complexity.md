---
title: "Time Complexity"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe9fe"
status: "completed"
scrapedAt: "2026-05-23T17:54:56.074Z"
---
# Module 1: Basic Concepts of Data Structures

## Topic: Time Complexity

### 1. Introduction to Time Complexity

Time complexity is a measure of how the execution time of an algorithm grows as the input size increases. It helps us understand the efficiency of an algorithm and compare different algorithms for the same problem.

**Key Concept:** We are interested in the *growth rate* of the execution time, not the exact time itself, as the latter depends on factors like the hardware, programming language, and compiler.

**Relevance to Course Outcomes:**
*   **CO1 (K2): Compare performance of algorithms using asymptotic notations.** Time complexity is the foundation for comparing algorithm performance using asymptotic notations.

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Chapters often introduce the concept of algorithm analysis and efficiency early on.
*   **Samanta (2/e):** Similarly, this book will likely cover the fundamentals of algorithm efficiency and measurement.

### 2. Why Measure Time Complexity?

*   **Algorithm Selection:** To choose the most efficient algorithm for a given task, especially when dealing with large datasets.
*   **Performance Prediction:** To estimate how an algorithm will perform on larger inputs without actually running it.
*   **Resource Optimization:** To understand where an algorithm might become a bottleneck and identify areas for improvement.

### 3. Measuring Time Complexity: The Basic Idea

The execution time of an algorithm can be thought of as a function of the input size, `n`. We often count the number of elementary operations (e.g., comparisons, assignments, arithmetic operations) performed by the algorithm.

**Example:** Consider a simple loop that iterates `n` times.
```c++
void print_n_times(int n) {
    for (int i = 0; i < n; i++) {
        // Perform a constant number of operations (e.g., print)
        printf("%d\n", i);
    }
}
```
In this example, the `printf` statement inside the loop is executed `n` times. The number of operations is directly proportional to `n`.

### 4. Asymptotic Notations

Asymptotic notations are used to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. They provide a way to express the time complexity in a standardized manner, ignoring constant factors and lower-order terms.

**Key Concepts:**

*   **Big-O Notation (O): Upper Bound**
    *   Defines an *asymptotic upper bound*. If `f(n)` is O(`g(n)`), it means that for large `n`, `f(n)` is bounded above by a constant multiple of `g(n)`.
    *   **Formal Definition:** A function `f(n)` is O(`g(n)`) if there exist positive constants `c` and `n₀` such that `f(n) <= c * g(n)` for all `n >= n₀`.
    *   **Intuition:** The algorithm's execution time will not grow *faster than* `g(n)`.

*   **Big-Omega Notation (Ω): Lower Bound**
    *   Defines an *asymptotic lower bound*. If `f(n)` is Ω(`g(n)`), it means that for large `n`, `f(n)` is bounded below by a constant multiple of `g(n)`.
    *   **Formal Definition:** A function `f(n)` is Ω(`g(n)`) if there exist positive constants `c` and `n₀` such that `f(n) >= c * g(n)` for all `n >= n₀`.
    *   **Intuition:** The algorithm's execution time will not grow *slower than* `g(n)`.

*   **Big-Theta Notation (Θ): Tight Bound**
    *   Defines an *asymptotic tight bound*. If `f(n)` is Θ(`g(n)`), it means that `f(n)` is both O(`g(n)`) and Ω(`g(n)`).
    *   **Formal Definition:** A function `f(n)` is Θ(`g(n)`) if there exist positive constants `c₁`, `c₂`, and `n₀` such that `c₁ * g(n) <= f(n) <= c₂ * g(n)` for all `n >= n₀`.
    *   **Intuition:** The algorithm's execution time grows *exactly at the same rate as* `g(n)`.

**Relevance to Course Outcomes:**
*   **CO1 (K2): Compare performance of algorithms using asymptotic notations.** This is the core of this section. Understanding O, Ω, and Θ is crucial for comparison.

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Chapter 1 likely covers these notations in detail.
*   **Samanta (2/e):** Similar coverage is expected.
*   **Gilberg & Forouzan (2/e):** Will provide a clear explanation and examples.
*   **Lipschuts (Schaum's, 2/e):** Excellent source for practice problems and a rigorous explanation.
*   **Aho, Hopcroft, & Ullman (1/e):** A foundational text; will have a thorough treatment.

**Common Growth Functions:**

| Notation | Name              | Description                                     | Example                                      |
| :------- | :---------------- | :---------------------------------------------- | :------------------------------------------- |
| O(1)     | Constant Time     | Execution time is constant, independent of `n`. | Accessing an array element by index.         |
| O(log n) | Logarithmic Time  | Execution time grows logarithmically with `n`.  | Binary search.                               |
| O(n)     | Linear Time       | Execution time grows linearly with `n`.         | Traversing an array, simple loop.            |
| O(n log n)| Linearithmic Time | Execution time grows by `n` multiplied by log `n`. | Efficient sorting algorithms (Merge Sort, Quick Sort). |
| O(n²)    | Quadratic Time    | Execution time grows by the square of `n`.      | Nested loops iterating over `n` elements.    |
| O(2ⁿ)    | Exponential Time  | Execution time grows exponentially with `n`.    | Brute-force solutions to some NP-hard problems. |
| O(n!)    | Factorial Time    | Execution time grows by the factorial of `n`. | Traveling Salesperson Problem (brute force). |

**Hierarchy of Growth Rates:**
`O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)`

**Important Point:** When determining the Big-O complexity, we focus on the *dominant term* and ignore constant factors and lower-order terms because they become insignificant as `n` grows large.

**Example:**
If an algorithm has `3n² + 5n + 10` operations:
*   Dominant term: `3n²`
*   Ignore constant factor `3`: `n²`
*   Ignore lower-order terms `5n + 10`: `n²`
*   Therefore, the time complexity is **O(n²)**.

### 5. Calculating Time Complexity of Code Snippets

We analyze algorithms by breaking them down into basic operations and summing their counts.

**Types of Statements and their Complexity:**

*   **Assignment, Arithmetic Operation, Comparison:** O(1) (Constant time)
*   **Blocks of Code:** The complexity of the block is the sum of the complexities of the statements within it. If statements are sequential, we take the maximum.
*   **Sequential Statements:** If statement A takes `T₁(n)` time and statement B takes `T₂(n)` time, the total time is `T₁(n) + T₂(n)`. The complexity is `O(max(T₁(n), T₂(n)))`.
*   **Conditional Statements (if-else):** The complexity is the complexity of the condition plus the complexity of the branch taken. In worst-case analysis, we consider the branch that takes longer.
    *   `if (condition) { block1 } else { block2 }`
    *   Complexity = `O(condition) + O(max(block1, block2))`
*   **Loops:** The complexity of a loop is the number of iterations multiplied by the complexity of the loop body.
*   **Nested Loops:** The complexity is the product of the number of iterations of each loop.

**Relevance to Course Outcomes:**
*   **CO1 (K2): Compare performance of algorithms using asymptotic notations.** Practicing calculation is essential for comparison.
*   **CO2 (K3): Solve real world problems efficiently using appropriate data structures.** Understanding time complexity helps choose the right data structure and algorithm.

**Textbook References:**
*   **Gilberg & Forouzan (2/e):** Provides step-by-step examples.
*   **Lipschuts (Schaum's, 2/e):** Numerous examples and exercises for practice.

#### Examples:

**Example 1: Constant Time**
```c++
int get_first_element(int arr[], int size) {
    return arr[0]; // One assignment and one access
}
```
*   **Analysis:** A single operation.
*   **Time Complexity:** **O(1)**

**Example 2: Linear Time (Simple Loop)**
```c++
void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); // O(1) operation inside
    }
}
```
*   **Analysis:** The loop iterates `size` times. The operation inside (printf) is O(1).
*   **Number of iterations:** `size`
*   **Complexity of body:** O(1)
*   **Total Time:** `size * O(1) = O(size)`
*   **Time Complexity:** **O(n)** (where `n` is `size`)

**Example 3: Quadratic Time (Nested Loops)**
```c++
void print_pairs(int arr[], int size) {
    for (int i = 0; i < size; i++) { // Outer loop: n iterations
        for (int j = 0; j < size; j++) { // Inner loop: n iterations
            printf("%d, %d\n", arr[i], arr[j]); // O(1) operation
        }
    }
}
```
*   **Analysis:** The outer loop runs `n` times. For each iteration of the outer loop, the inner loop runs `n` times.
*   **Total operations:** `n * n * O(1) = n² * O(1) = O(n²)`
*   **Time Complexity:** **O(n²)**

**Example 4: Logarithmic Time (Binary Search - Conceptual)**
Imagine searching in a sorted array by repeatedly dividing the search interval in half.
*   **Analysis:** With each step, the problem size is reduced by a factor of 2. The number of steps to reduce `n` to 1 is `log₂n`.
*   **Time Complexity:** **O(log n)**

**Example 5: `n log n` Time (Merge Sort - Conceptual)**
Merge sort divides the array into two halves, recursively sorts them, and then merges the sorted halves.
*   **Analysis:** The division is O(1). The recursive calls operate on subarrays of size `n/2`. The merging step takes O(n) time.
    *   `T(n) = 2 * T(n/2) + O(n)`
    *   This recurrence relation solves to O(n log n).
*   **Time Complexity:** **O(n log n)**

**Example 6: Complexity with Varying Loop Counts**
```c++
void tricky_loop(int n) {
    int count = 0;
    for (int i = 1; i <= n; i *= 2) { // i takes values: 1, 2, 4, 8, ..., up to n
        count++;
    }
    // The loop runs log₂n times
    // The number of iterations is approximately log₂n

    for (int j = n; j > 1; j /= 2) { // j takes values: n, n/2, n/4, ..., 2
        count++;
    }
    // The loop runs log₂n times
    // The number of iterations is approximately log₂n
}
```
*   **Analysis:**
    *   The first loop runs as `i` doubles until it exceeds `n`. This takes `log₂n` iterations.
    *   The second loop runs as `j` halves until it becomes 1. This also takes `log₂n` iterations.
*   **Total Time Complexity:** `O(log n) + O(log n) = O(2 log n)`. Ignoring constant factors, this simplifies to **O(log n)**.

### 6. Best-Case, Average-Case, and Worst-Case Complexity

*   **Worst-Case Complexity:** The maximum amount of time an algorithm can take for a given input size `n`. This is usually the most important to consider as it guarantees a performance bound. (Often represented by Big-O).
*   **Best-Case Complexity:** The minimum amount of time an algorithm can take for a given input size `n`. (Often represented by Big-Omega).
*   **Average-Case Complexity:** The expected running time of an algorithm, averaged over all possible inputs of size `n`. This is often difficult to calculate precisely and depends on the probability distribution of inputs.

**Example: Linear Search**
```c++
int linear_search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) { // O(n) loop
        if (arr[i] == key) {
            return i; // O(1)
        }
    }
    return -1; // O(1)
}
```
*   **Worst-Case:** The element `key` is the last element in the array or not present. The loop runs `n` times. Complexity: **O(n)**.
*   **Best-Case:** The element `key` is the first element. The loop runs once. Complexity: **O(1)**.
*   **Average-Case:** Assuming the element is equally likely to be at any position, on average, it will be found around the middle. Complexity: **O(n)**.

**Important Point:** When we speak of an algorithm's time complexity without qualification, we usually mean its *worst-case* time complexity.

**Relevance to Course Outcomes:**
*   **CO1 (K2): Compare performance of algorithms using asymptotic notations.** Understanding these cases helps in accurate comparison.
*   **CO2 (K3): Solve real world problems efficiently using appropriate data structures.** Knowing the worst-case helps avoid unexpected performance degradation.

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Will discuss these different cases of analysis.
*   **Samanta (2/e):** Essential for understanding performance under various scenarios.
*   **Lipschuts (Schaum's, 2/e):** Provides examples to illustrate the differences.

### 7. Space Complexity

While time complexity measures execution time, space complexity measures the amount of memory an algorithm uses.

**Key Concepts:**

*   **Auxiliary Space:** The extra memory space used by an algorithm, *excluding* the space for the input.
*   **Total Space:** The space for the input plus the auxiliary space.

**Asymptotic Notations for Space Complexity:** Similar to time complexity, we use Big-O, Big-Omega, and Big-Theta to describe space complexity.

**Example:**
```c++
void swap(int &a, int &b) { // O(1) space
    int temp = a; // Uses 'temp' variable
    a = b;
    b = temp;
}

void bubble_sort(int arr[], int size) {
    // In-place sorting, typically O(1) auxiliary space
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int* create_copy(int arr[], int size) {
    int* copy_arr = new int[size]; // Allocates new array of size 'size'
    for (int i = 0; i < size; i++) {
        copy_arr[i] = arr[i];
    }
    return copy_arr; // Returns a copy, requires O(n) auxiliary space
}
```
*   **`bubble_sort` space complexity:** The `swap` function uses a single `temp` variable (O(1) space). The sorting happens in-place (modifying the original array). So, the auxiliary space complexity is **O(1)**.
*   **`create_copy` space complexity:** The function creates a new array of size `n` to store the copy. This requires **O(n)** auxiliary space.

**Relevance to Course Outcomes:**
*   **CO1 (K2): Compare performance of algorithms using asymptotic notations.** Space complexity is also a performance metric for comparison.
*   **CO2 (K3): Solve real world problems efficiently using appropriate data structures.** Limited memory environments require efficient space usage.

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Will cover space complexity when analyzing algorithms.
*   **Samanta (2/e):** Essential for understanding memory requirements.
*   **Brass (2/e):** Advanced topics may delve deeper into space-time trade-offs.

### 8. Important Points to Remember

*   **Focus on Growth Rate:** Time complexity is about how runtime scales with input size, not precise time.
*   **Worst-Case is King:** Usually, we analyze the worst-case time complexity.
*   **Dominant Term:** When calculating complexity, ignore constants and lower-order terms.
*   **Asymptotic Notations are Tools:** Big-O, Big-Omega, and Big-Theta help us categorize and compare algorithms.
*   **Time vs. Space:** Algorithms can have trade-offs between time and space complexity.
*   **Operations Count:** The core idea is to count elementary operations.

### 9. Practice Questions

**Question 1:**
What is the time complexity of the following code snippet?
```c++
void process_data(int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += i;
        for (int j = 0; j < i; j++) {
            sum += j;
        }
    }
}
```
*   a) O(n)
*   b) O(n log n)
*   c) O(n²)
*   d) O(n³)

**Question 2:**
Which of the following is NOT an asymptotic notation?
*   a) O
*   b) Ω
*   c) Θ
*   d) T

**Question 3:**
An algorithm that has a time complexity of O(1) means that:
*   a) Its execution time depends directly on the input size `n`.
*   b) Its execution time is constant, regardless of the input size `n`.
*   c) Its execution time grows very slowly as `n` increases.
*   d) Its execution time grows very rapidly as `n` increases.

**Question 4:**
What is the worst-case time complexity of searching for an element in an unsorted array?
*   a) O(1)
*   b) O(log n)
*   c) O(n)
*   d) O(n²)

**Question 5:**
Consider the following code:
```c++
void mystery(int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            for (int j = 0; j < n; j += 2) {
                count++;
            }
        } else {
            for (int k = 0; k < n; k++) {
                count++;
            }
        }
    }
}
```
What is the time complexity of the `mystery` function?

### 10. Answers to Practice Questions

**Answer 1:**
The outer loop runs `n` times. The inner loop runs `i` times for each iteration of the outer loop.
When `i=0`, inner loop runs 0 times.
When `i=1`, inner loop runs 1 time.
When `i=2`, inner loop runs 2 times.
...
When `i=n-1`, inner loop runs `n-1` times.
The total number of operations in the inner loop is `0 + 1 + 2 + ... + (n-1)`, which is `n(n-1)/2`. This is `O(n²)`.
The operations outside the inner loop but inside the outer loop are O(1).
So, the total complexity is dominated by the inner loop's sum: `O(n²)`.
**Correct Answer: c) O(n²)**

**Answer 2:**
'T' is not a standard asymptotic notation. The standard ones are O, Ω, and Θ.
**Correct Answer: d) T**

**Answer 3:**
O(1) means constant time, which is independent of the input size.
**Correct Answer: b) Its execution time is constant, regardless of the input size `n`.**

**Answer 4:**
In an unsorted array, you might have to check every element in the worst case. This is a linear scan.
**Correct Answer: c) O(n)**

**Answer 5:**
*   The outer loop runs `n` times.
*   Inside the outer loop, there's an `if-else` block.
    *   **If `i` is even:** The inner loop `for (int j = 0; j < n; j += 2)` runs approximately `n/2` times. Each iteration is O(1). So, this block is O(n).
    *   **If `i` is odd:** The inner loop `for (int k = 0; k < n; k++)` runs `n` times. Each iteration is O(1). So, this block is O(n).
*   In both cases (even or odd `i`), the operations inside the outer loop take O(n) time.
*   Since the outer loop runs `n` times, and each iteration takes O(n) time, the total time complexity is `n * O(n) = O(n²)`.
**Time Complexity: O(n²)**

---
This concludes the notes for Time Complexity in Module 1. Remember to practice analyzing different code snippets and data structure operations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
