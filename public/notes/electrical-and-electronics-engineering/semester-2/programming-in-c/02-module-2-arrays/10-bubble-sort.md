---
title: "Bubble sort"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98f7"
status: "completed"
scrapedAt: "2026-05-23T16:09:15.804Z"
---
# Programming in C: Module 2 - Arrays

## Topic: Bubble Sort

Welcome, everyone, to our journey into the heart of sorting algorithms! Today, we're diving into a fundamental and quite intuitive sorting technique known as **Bubble Sort**. You'll find this topic directly relates to **Course Outcome 2 (CO2)**, where we focus on developing C programs using arrays. Understanding sorting is crucial for efficient data management, and Bubble Sort is often your first introduction to how we can systematically arrange data within an array.

### What is Sorting? And Why Bubble Sort?

Imagine you have a pile of unsorted exam papers, each with a student's roll number. To submit them to the administration, they need to be in order of roll numbers, right? Sorting is simply the process of arranging elements in a specific order, usually ascending or descending.

Bubble Sort is one of the simplest sorting algorithms. Its beauty lies in its simplicity and ease of understanding. It's like bubbles rising to the surface in a fizzy drink – the larger (or smaller, depending on your order) elements "bubble up" to their correct positions. While it might not be the most efficient for very large datasets (we'll explore more advanced algorithms later!), it's an excellent starting point for grasping the core concepts of sorting and how we can manipulate arrays in C.

### The Core Idea: Comparisons and Swaps

At its heart, Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

Let's visualize this. Consider an array: `[5, 1, 4, 2, 8]`. We want to sort it in ascending order.

**Pass 1:**
*   Compare `5` and `1`. They are in the wrong order. Swap them. The array becomes: `[1, 5, 4, 2, 8]`
*   Compare `5` and `4`. They are in the wrong order. Swap them. The array becomes: `[1, 4, 5, 2, 8]`
*   Compare `5` and `2`. They are in the wrong order. Swap them. The array becomes: `[1, 4, 2, 5, 8]`
*   Compare `5` and `8`. They are in the correct order. No swap. The array remains: `[1, 4, 2, 5, 8]`

After the first pass, notice that the largest element, `8`, has "bubbled up" to its correct final position at the end of the array. This is a key characteristic of Bubble Sort – in each pass, at least one element (the largest unsorted one) finds its correct place.

**Pass 2:**
Now, we don't need to consider the last element (`8`) because we know it's already in its final sorted position. We'll work with the remaining unsorted portion: `[1, 4, 2, 5]`
*   Compare `1` and `4`. Correct order. No swap. `[1, 4, 2, 5]`
*   Compare `4` and `2`. Wrong order. Swap. `[1, 2, 4, 5]`
*   Compare `4` and `5`. Correct order. No swap. `[1, 2, 4, 5]`

Now, the second largest element, `5`, has also moved to its correct position (or close enough, it's in the second-to-last place, which is correct for the unsorted portion).

We continue this process.

**Pass 3:**
Unsorted portion: `[1, 2, 4]`
*   Compare `1` and `2`. Correct order. No swap. `[1, 2, 4]`
*   Compare `2` and `4`. Correct order. No swap. `[1, 2, 4]`

The array is now `[1, 2, 4, 5, 8]`. Notice that after pass 3, the array is fully sorted!

### How to Implement Bubble Sort in C

To implement this in C, we'll typically use nested loops.

*   **Outer Loop:** This loop controls the number of passes. Since in each pass, at least one element moves to its final position, we need at most `n-1` passes for an array of size `n`. Why `n-1`? Because after `n-1` elements are in their correct place, the last remaining element *must* also be in its correct place.
*   **Inner Loop:** This loop performs the comparisons and swaps within a single pass. In each pass `i` (starting from 0), the inner loop will compare elements from the beginning of the array up to the `n-1-i`-th element. We subtract `i` because the last `i` elements are already sorted and don't need to be checked again.

Let's think about the structure of the C code.

```c
#include <stdio.h>

// Function to perform bubble sort
void bubbleSort(int arr[], int n) {
    int i, j;
    int temp; // A temporary variable for swapping

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

// Function to print an array
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// Main function to test the bubble sort
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]); // Calculate the number of elements

    printf("Original array: \n");
    printArray(arr, n);

    bubbleSort(arr, n); // Call the sorting function

    printf("Sorted array: \n");
    printArray(arr, n);

    return 0;
}
```

**Explanation of the Code:**

*   **`bubbleSort(int arr[], int n)`**: This function takes an integer array `arr` and its size `n` as input.
*   **`for (i = 0; i < n - 1; i++)`**: This is our outer loop, controlling the passes. It will run `n-1` times.
*   **`for (j = 0; j < n - 1 - i; j++)`**: This is our inner loop. Notice the `n - 1 - i`. As `i` increases (meaning we've completed more passes), the upper bound for `j` decreases. This is an optimization because the last `i` elements are already sorted.
*   **`if (arr[j] > arr[j + 1])`**: This is the crucial comparison. If the current element (`arr[j]`) is greater than the next element (`arr[j+1]`), they are in the wrong order for ascending sort.
*   **Swapping**: The three lines using `temp` are a standard way to swap the values of two variables in C. You've likely seen this pattern before when working with basic variable manipulation.

This implementation directly addresses **CO2**, as we are manipulating and sorting an array using C constructs. The logic of comparing and swapping is a fundamental array operation.

### Optimization: Early Termination

What if the array is already sorted, or becomes sorted before the full `n-1` passes are completed? Our current implementation would still go through all the passes. We can add a small optimization.

We can use a flag (a boolean variable, or simply an integer acting as a flag) to check if any swaps occurred during a pass. If a pass completes *without* any swaps, it means the array is already sorted, and we can stop the algorithm early.

Let's see how to modify the `bubbleSort` function:

```c
void bubbleSortOptimized(int arr[], int n) {
    int i, j;
    int temp;
    int swapped; // Flag to track if any swap occurred

    for (i = 0; i < n - 1; i++) {
        swapped = 0; // Reset the flag for each new pass

        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1; // Set the flag because a swap happened
            }
        }

        // If no two elements were swapped by inner loop, then break
        if (swapped == 0) {
            break; // Array is sorted, exit the outer loop
        }
    }
}
```

This optimized version is still a Bubble Sort, but it can be much faster for already sorted or nearly sorted arrays. It's a good practice to consider such optimizations.

### Time and Space Complexity: A Quick Look

When we talk about algorithms, especially in exams or when discussing efficiency, we often refer to their **time complexity** and **space complexity**.

*   **Time Complexity**: This describes how the execution time of an algorithm grows with the input size.
    *   For Bubble Sort, in the worst-case scenario (e.g., an array sorted in reverse order), we perform approximately `n^2/2` comparisons and swaps. So, its time complexity is **O(n^2)**. This is quadratic, meaning if you double the number of elements, the time taken increases by about four times.
    *   In the best-case scenario (already sorted array with our optimized version), it’s **O(n)** because it only needs one pass.
*   **Space Complexity**: This describes the amount of extra memory an algorithm uses. Bubble Sort is an "in-place" sorting algorithm, meaning it sorts the array without needing significant additional memory. The only extra memory used is for a few variables like `i`, `j`, and `temp`. Therefore, its space complexity is **O(1)**, which is constant and very efficient in terms of memory usage.

Remembering these complexities is important for comparing Bubble Sort with other sorting algorithms. While O(n^2) isn't great for large datasets, the O(1) space complexity is a major plus!

### Real-World Analogy Revisited

Think about organizing your bookshelf. You pick up the first book. Is it in the right place? You might compare it with the next one. If they're out of order, you swap them. You continue this process for the entire shelf. Then you go back and do it again, but this time, you might skip the last book you placed correctly. It's like tidying up step-by-step, making sure each item finds its rightful spot.

### Connecting to Course Outcomes

*   **CO1 (Infer a computational problem and develop C programs...)**: Bubble Sort is a direct application of inferring the problem of sorting and developing a C program using control statements (`for`, `if`) to solve it.
*   **CO2 (Develop C programs using arrays...)**: This is the most direct link. Bubble Sort fundamentally manipulates elements within an array, demonstrating array processing and modification.
*   **CO3 (Utilize functions...)**: We encapsulated the sorting logic in a `bubbleSort` function, showcasing modular programming.
*   **CO4 (Develop C programs using pointers...)**: While not strictly required for this basic implementation, you *could* pass arrays to functions using pointers, which is a concept you'll explore further in later modules. The `arr[]` notation in function parameters is essentially a pointer to the first element.

### Common Pitfalls and Exam Tips

*   **Off-by-one errors**: Be very careful with the loop bounds, especially `n-1` and `n-1-i`. A small mistake here can lead to incorrect sorting or even a crash (segmentation fault if you access beyond array bounds).
*   **Forgetting the `temp` variable**: When swapping, you *must* use a temporary variable. If you do `arr[j] = arr[j+1]; arr[j+1] = arr[j];`, you'll lose the original value of `arr[j]`!
*   **Not optimizing**: For your understanding, always try to implement the optimized version with the `swapped` flag if you have time. It shows a deeper understanding of efficiency.
*   **Understanding complexity**: Be prepared to explain why Bubble Sort is O(n^2) and O(1) space. This is a common question to test your analytical skills.
*   **Trace the algorithm**: For small arrays, try to trace the execution on paper, like we did at the beginning. This is invaluable for debugging and understanding.

### In Summary

Bubble Sort is a straightforward sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. Its simplicity makes it ideal for learning, and it demonstrates basic array manipulation and control flow in C. While not the most efficient for large datasets, its O(1) space complexity is a significant advantage. Mastering Bubble Sort lays a strong foundation for understanding more complex sorting algorithms and essential programming concepts related to arrays.

***

## Sample Questions with Answers

**1. Conceptual Question:**

**Question:** Explain the basic working principle of Bubble Sort using an analogy.

**Answer:** Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. Think of it like sorting a stack of books by height. You pick up two adjacent books, compare their heights. If the book on the left is taller than the book on the right (assuming you want them ordered shortest to tallest), you swap them. You go through the stack, performing these comparisons and swaps. After one full pass, the tallest book will have "bubbled up" to its correct position at the end. You repeat this process, but each time, you can ignore the last element you just placed correctly, making the process slightly faster.

**2. Code/Application Question:**

**Question:** Write a C program snippet that demonstrates the swap operation within a Bubble Sort implementation for an array `arr` at indices `j` and `j+1`. Assume `arr` is an integer array and `j` is a valid index.

**Answer:**

```c
// Assuming arr is int arr[] and j is int j
int temp; // Temporary variable to hold one of the values

if (arr[j] > arr[j+1]) { // Check if swap is needed (for ascending order)
    // Swap arr[j] and arr[j+1]
    temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}
```
**Reasoning:** The swap requires a third, temporary variable (`temp`) to store the value of `arr[j]` before `arr[j]` is overwritten with `arr[j+1]`. Then, the original value of `arr[j]` (stored in `temp`) is assigned to `arr[j+1]`. This ensures that no data is lost during the swap.

**3. Exam-Oriented Question:**

**Question:** What is the time complexity of Bubble Sort in the worst case, and why? Also, what is its space complexity?

**Answer:**
*   **Time Complexity (Worst Case):** O(n^2) (pronounced "order of n squared").
    *   **Reasoning:** In the worst case (e.g., an array sorted in reverse order), Bubble Sort needs to perform approximately `n` passes. In each pass, it performs up to `n-1` comparisons. The total number of comparisons is roughly proportional to `n * n`, hence O(n^2). For instance, an array like `{5, 4, 3, 2, 1}` would require many swaps in each pass.
*   **Space Complexity:** O(1) (pronounced "order of constant").
    *   **Reasoning:** Bubble Sort is an "in-place" sorting algorithm. It sorts the array by rearranging the elements within the original array itself. The only additional memory it uses is for a few auxiliary variables like loop counters (`i`, `j`) and a temporary variable for swapping (`temp`). The amount of this extra memory does not grow with the size of the input array `n`. Hence, it's considered constant space.

**4. Optimization Question:**

**Question:** How can Bubble Sort be optimized to terminate early if the array becomes sorted before all passes are completed? Explain the modification needed.

**Answer:** Bubble Sort can be optimized by using a "swapped" flag. A boolean variable (or an integer acting as a flag, like `swapped = 0` initially) is introduced. Inside the inner loop, if any swap occurs between adjacent elements, this flag is set to `1` (or `true`). After the inner loop completes a pass, we check the flag. If the flag is still `0` (or `false`), it means no swaps occurred in that pass, which implies the array is already sorted. In this case, we can break out of the outer loop prematurely, saving unnecessary computations.

**Example Modification Snippet:**

```c
void bubbleSortOptimized(int arr[], int n) {
    int i, j;
    int temp;
    int swapped;

    for (i = 0; i < n - 1; i++) {
        swapped = 0; // Reset flag for each pass
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1; // A swap occurred
            }
        }
        // If no swaps happened in this pass, the array is sorted
        if (swapped == 0) {
            break;
        }
    }
}
