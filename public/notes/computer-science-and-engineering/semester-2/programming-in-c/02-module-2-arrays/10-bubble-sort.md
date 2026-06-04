---
title: "Bubble sort"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e49"
status: "completed"
scrapedAt: "2026-05-20T16:35:21.315Z"
---
## Programming in C: Module 2 - Arrays

### Topic: Bubble Sort

Welcome, everyone! Today, we're diving into one of the most fundamental sorting algorithms you'll encounter in programming: **Bubble Sort**. It's a fantastic algorithm to start with because it's conceptually simple and helps us understand how to manipulate arrays efficiently. This topic is crucial for building your foundation in algorithms and data structures, directly contributing to Course Outcomes like **CO2: Develop C programs using arrays, matrices, and strings** and even **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**

Think about it: when you have a list of unsorted numbers, like exam scores, prices, or even names, you often want to arrange them in order, right? Whether it's ascending (smallest to largest) or descending (largest to smallest), sorting is a common task. Bubble sort is one way to achieve this.

#### What is Sorting?

Before we jump into Bubble Sort itself, let's clarify what sorting means in the context of programming. **Sorting** is the process of arranging elements of a list or an array in a specific order. This order is typically numerical (ascending or descending) or alphabetical.

#### The Analogy: Bubbling Up the Smallest (or Largest)

Now, why is it called "Bubble Sort"? Imagine a bunch of grapes in a bunch. If you gently shake the bunch, the smaller grapes tend to rise to the top, while the heavier ones settle at the bottom. Bubble sort works in a similar fashion, but instead of grapes, we're dealing with numbers (or other data types) in an array.

The core idea of Bubble Sort is to repeatedly step through the list, compare adjacent elements, and swap them if they are in the wrong order. This process is repeated until the list is sorted. Essentially, in each pass through the list, the largest (or smallest, depending on your desired order) unsorted element "bubbles up" to its correct position at the end of the unsorted portion.

Let's break down how this happens.

### How Bubble Sort Works: A Step-by-Step Explanation

Consider an unsorted array of numbers: `[5, 1, 4, 2, 8]`

We want to sort this in ascending order.

**Pass 1:**

1.  **Compare `5` and `1`:** They are in the wrong order (5 > 1). Swap them.
    Array becomes: `[1, 5, 4, 2, 8]`
2.  **Compare `5` and `4`:** They are in the wrong order (5 > 4). Swap them.
    Array becomes: `[1, 4, 5, 2, 8]`
3.  **Compare `5` and `2`:** They are in the wrong order (5 > 2). Swap them.
    Array becomes: `[1, 4, 2, 5, 8]`
4.  **Compare `5` and `8`:** They are in the correct order (5 < 8). No swap.
    Array remains: `[1, 4, 2, 5, 8]`

After Pass 1, the largest element, `8`, has "bubbled up" to its correct final position at the end of the array. We now know that the last element is sorted.

**Pass 2:**

Now, we repeat the process, but we only need to consider the elements up to the second-to-last position because we know the last one is already sorted.

1.  **Compare `1` and `4`:** Correct order. No swap.
    Array remains: `[1, 4, 2, 5, 8]`
2.  **Compare `4` and `2`:** Wrong order (4 > 2). Swap them.
    Array becomes: `[1, 2, 4, 5, 8]`
3.  **Compare `4` and `5`:** Correct order. No swap.
    Array remains: `[1, 2, 4, 5, 8]`

After Pass 2, the second largest element, `5`, is now in its correct position.

**Pass 3:**

We consider elements up to the third-to-last position.

1.  **Compare `1` and `2`:** Correct order. No swap.
    Array remains: `[1, 2, 4, 5, 8]`
2.  **Compare `2` and `4`:** Correct order. No swap.
    Array remains: `[1, 2, 4, 5, 8]`

After Pass 3, the third largest element, `4`, is in its correct position.

**Pass 4:**

We consider elements up to the fourth-to-last position.

1.  **Compare `1` and `2`:** Correct order. No swap.
    Array remains: `[1, 2, 4, 5, 8]`

The array is now fully sorted: `[1, 2, 4, 5, 8]`.

Notice that after each pass, the largest unsorted element is placed at its correct final position. This means that in subsequent passes, we don't need to check the already sorted elements at the end.

#### Implementing Bubble Sort in C

Let's translate this logic into C code. We'll need two nested loops.

The **outer loop** will control the number of passes. In an array of `n` elements, we might need up to `n-1` passes. Why `n-1`? Because after `n-1` passes, `n-1` elements will be in their correct sorted positions, meaning the last remaining element (the first one) must also be in its correct place.

The **inner loop** will perform the comparisons and swaps within each pass. In each pass `i` (starting from 0), the inner loop will iterate from the first element up to the `n-1-i`-th element. This `n-1-i` is important: as `i` increases (meaning we complete more passes), the range of the inner loop shrinks because the end of the array becomes progressively sorted.

Here’s a typical structure:

```c
#include <stdio.h>

// Function to perform bubble sort
void bubbleSort(int arr[], int n) {
    int i, j;
    int temp; // Temporary variable for swapping

    // Outer loop for passes
    for (i = 0; i < n - 1; i++) {

        // Inner loop for comparisons and swaps
        // The last i elements are already in place
        for (j = 0; j < n - 1 - i; j++) {

            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Function to print an array (useful for testing)
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// Driver program to test above
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: \n");
    printArray(arr, n);

    bubbleSort(arr, n);

    printf("Sorted array: \n");
    printArray(arr, n);

    return 0;
}
```

Let's look at the `bubbleSort` function closely.

*   `for (i = 0; i < n - 1; i++)`: This is our outer loop. It ensures we make enough passes. For an array of size `n`, we need at most `n-1` passes.
*   `for (j = 0; j < n - 1 - i; j++)`: This is our inner loop. `j` goes from `0` up to `n - 1 - i`.
    *   `n - 1`: We compare `arr[j]` with `arr[j+1]`, so `j` can go up to `n-2` to access `arr[n-1]`.
    *   `- i`: This is the optimization. After `i` passes, the last `i` elements are already in their sorted positions. So, we don't need to compare them anymore.
*   `if (arr[j] > arr[j + 1])`: This is the core comparison. If the current element is greater than the next one, they are out of order for ascending sort.
*   The three lines within the `if` block perform the **swap**. We use a `temp` variable to temporarily hold one of the values while we rearrange. This is a common pattern in programming and a good example of how to manage variables for data manipulation, reinforcing **CO1**.

#### Optimizing Bubble Sort

While the basic Bubble Sort works, it can be inefficient if the array is already partially sorted or nearly sorted. Imagine an array that's already sorted. The basic bubble sort will still go through all the passes and perform all the comparisons, even though no swaps will occur.

We can add a flag to detect if any swaps were made during a pass. If no swaps occur in a particular pass, it means the array is already sorted, and we can terminate the algorithm early. This is a significant optimization, especially for nearly sorted arrays.

Let's see how this optimized version looks:

```c
#include <stdio.h>
#include <stdbool.h> // For using boolean type

// Function to perform optimized bubble sort
void optimizedBubbleSort(int arr[], int n) {
    int i, j;
    int temp;
    bool swapped; // Flag to track if any swap happened

    for (i = 0; i < n - 1; i++) {
        swapped = false; // Initialize swapped to false at the beginning of each pass

        // Inner loop for comparisons and swaps
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // A swap occurred
            }
        }

        // If no two elements were swapped by inner loop, then break
        if (swapped == false)
            break;
    }
}

// printArray function remains the same as before...
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: \n");
    printArray(arr, n);

    optimizedBubbleSort(arr, n); // Using the optimized version

    printf("Sorted array: \n");
    printArray(arr, n);

    return 0;
}
```

In the `optimizedBubbleSort` function, we introduce a `swapped` boolean variable.
*   `swapped = false;` is set at the start of each outer loop iteration (each pass).
*   If a swap occurs, `swapped` is set to `true`.
*   At the end of the inner loop (after all comparisons for that pass), we check `if (swapped == false)`. If it's still `false`, it means no elements were out of place, and thus the array is sorted. We can then `break` out of the outer loop.

This optimization is a great example of how a small change can significantly improve performance. It also reinforces the idea of analyzing algorithm behavior, which is a step towards **CO1** at a deeper understanding level.

#### Time and Space Complexity

When we talk about sorting algorithms, we often discuss their **time complexity** and **space complexity**. These terms help us understand how the algorithm's performance scales with the input size.

*   **Time Complexity:** This measures how much time an algorithm takes to run as a function of the length of the input.
    *   **Worst Case:** This happens when the array is sorted in reverse order. In this scenario, every element will be compared and swapped in almost every pass. For an array of size `n`, the outer loop runs `n-1` times, and the inner loop runs approximately `n` times in the first pass, `n-1` in the second, and so on. This leads to roughly `n * n` operations. So, the worst-case time complexity is **O(n²)**.
    *   **Best Case:** This happens when the array is already sorted. With the optimization, the algorithm will make just one pass, find no swaps, and terminate. The time complexity becomes **O(n)**. Without the optimization, it remains O(n²).
    *   **Average Case:** On average, Bubble Sort also has a time complexity of **O(n²)**.

*   **Space Complexity:** This measures the amount of extra memory an algorithm uses. Bubble Sort is an **in-place sorting algorithm**. This means it sorts the array by rearranging its elements directly within the array itself, without needing significant extra memory. The only extra space used is for a few variables like `i`, `j`, and `temp` (and `swapped` in the optimized version). This space is constant, regardless of the input array size. Therefore, the space complexity is **O(1)**.

Understanding complexity is vital for choosing the right algorithm for a given problem, especially as data sets grow larger. This ties into **CO1** and the broader understanding of computational problem-solving.

#### When to Use Bubble Sort?

Given its O(n²) time complexity, Bubble Sort is generally *not* the most efficient sorting algorithm for large datasets. Algorithms like Merge Sort or Quick Sort, which have O(n log n) average time complexity, are usually preferred for practical applications.

However, Bubble Sort is:

1.  **Easy to Understand and Implement:** It's a great algorithm for beginners to grasp the basics of sorting and array manipulation.
2.  **Good for Small Datasets:** For very small arrays, the performance difference between O(n²) and O(n log n) might be negligible.
3.  **Useful for Educational Purposes:** It serves as a stepping stone to understanding more complex sorting algorithms.
4.  **Suitable for Nearly Sorted Arrays (with optimization):** If you know your data is already mostly sorted, the optimized Bubble Sort can be reasonably efficient.

Think of it like learning to ride a bicycle with training wheels. Bubble sort is like that. You learn the fundamental mechanics of balancing (comparisons) and steering (swaps) before moving on to a road bike (more advanced algorithms) for longer journeys.

#### Connecting to Course Outcomes

Let's explicitly see how Bubble Sort relates to our Course Outcomes:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   The problem of sorting an array is a clear computational problem.
    *   Developing the Bubble Sort code requires using basic constructs like variables (`int`, `bool`), control statements (`for`, `if`), and the `main` function.
    *   Understanding the logic of comparisons and swaps directly relates to how control statements direct program flow.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    *   Bubble Sort is fundamentally an array manipulation algorithm. We work directly with an array of elements, accessing them by index (`arr[j]`, `arr[j+1]`). This is the primary way we utilize arrays in this topic.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   We can implement `bubbleSort` as a separate function. This modularizes our code. The `printArray` function is another example of modularization, making the code cleaner and reusable.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    *   While our examples use static arrays, understanding how arrays work is a prerequisite for pointers. In C, arrays and pointers are closely related. The function signature `void bubbleSort(int arr[], int n)` actually passes the array as a pointer to its first element. A deeper dive could involve passing a pointer to the end of the array for more complex manipulation, but for basic bubble sort, understanding array indexing is key.

*   **CO5: Use files in C to permanently store and manipulate data.**
    *   While not directly used *in* the bubble sort algorithm itself, sorting is often a preliminary step before storing data. For example, you might read a list of student scores from a file, sort them using Bubble Sort (or another algorithm), and then write the sorted list back to a file. This topic provides a tool that can be integrated into file handling operations.

### Summary and Key Takeaways

Let's recap the important points about Bubble Sort:

*   **What it is:** A simple comparison-based sorting algorithm.
*   **How it works:** Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element "bubbles up" to its correct position in each pass.
*   **Implementation:** Uses nested loops. The outer loop controls passes, and the inner loop performs comparisons and swaps. The inner loop's range shrinks with each pass.
*   **Optimization:** A `swapped` flag can terminate the algorithm early if a pass completes with no swaps, indicating the array is sorted.
*   **Time Complexity:** O(n²) in the worst and average cases. O(n) in the best case (with optimization).
*   **Space Complexity:** O(1) (in-place sorting).
*   **Usefulness:** Excellent for learning, small datasets, and nearly sorted data. Not ideal for large, unsorted datasets compared to more advanced algorithms.

Remember this: Bubble Sort is a foundational algorithm. While you might not use it in highly optimized production code for large datasets, understanding its mechanics provides a solid basis for learning more sophisticated algorithms. It teaches you about iteration, comparison, conditional execution, and the crucial concept of in-place sorting.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-oriented.

**Q1. (Conceptual) Explain why Bubble Sort is called "Bubble Sort".**

**Answer:**
Bubble Sort is named so because of its mechanism of repeatedly comparing adjacent elements and swapping them if they are in the wrong order. In each pass, the largest (or smallest, depending on the sorting order) unsorted element effectively "bubbles up" towards its correct position at the end of the unsorted portion of the array, much like bubbles rising in water.

**Q2. (Conceptual) What is the primary advantage of Bubble Sort over other sorting algorithms?**

**Answer:**
The primary advantage of Bubble Sort is its **simplicity and ease of understanding and implementation**. It's an excellent algorithm for educational purposes, allowing beginners to grasp the core concepts of sorting and array manipulation without complex logic.

**Q3. (Exam-Oriented) Consider an array `arr = {50, 20, 40, 10, 30}`. Trace the state of the array after the first pass of Bubble Sort (ascending order).**

**Answer:**
Let's trace:
Initial array: `{50, 20, 40, 10, 30}`

*   **Pass 1, Comparison 1:** Compare `50` and `20`. `50 > 20`, so swap. Array: `{20, 50, 40, 10, 30}`
*   **Pass 1, Comparison 2:** Compare `50` and `40`. `50 > 40`, so swap. Array: `{20, 40, 50, 10, 30}`
*   **Pass 1, Comparison 3:** Compare `50` and `10`. `50 > 10`, so swap. Array: `{20, 40, 10, 50, 30}`
*   **Pass 1, Comparison 4:** Compare `50` and `30`. `50 > 30`, so swap. Array: `{20, 40, 10, 30, 50}`

After the first pass, the largest element `50` has bubbled up to the last position.
**State of the array after the first pass: `{20, 40, 10, 30, 50}`**

**Q4. (Exam-Oriented) What is the time complexity of Bubble Sort in the worst-case scenario, and what is the space complexity?**

**Answer:**
*   **Worst-Case Time Complexity:** **O(n²)**. This occurs when the input array is sorted in reverse order, requiring the maximum number of comparisons and swaps.
*   **Space Complexity:** **O(1)**. Bubble Sort is an in-place sorting algorithm, meaning it only requires a constant amount of extra memory for temporary variables (like `temp` for swapping), regardless of the input array size.

**Q5. (Conceptual) How does the optimization using a `swapped` flag improve the performance of Bubble Sort?**

**Answer:**
The optimization using a `swapped` flag significantly improves Bubble Sort's performance, especially for nearly sorted arrays. If, during a full pass of the inner loop, no swaps are made, it indicates that the array is already sorted. The flag, which is set to `true` only when a swap occurs, will remain `false` if no swaps happen. An early exit condition (`if (swapped == false) break;`) checks this flag after each pass. If the array is already sorted, the algorithm can terminate after the first pass (O(n)), rather than continuing unnecessarily through all O(n²) potential passes.

---
