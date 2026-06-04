---
title: "Programs for sequential search"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da369"
status: "completed"
scrapedAt: "2026-05-23T17:42:04.909Z"
---
# Programming in C: Module 2 - Arrays: Programs for Sequential Search

Welcome everyone! Today, we're diving into a fundamental data structure in programming: **Arrays**. And within the realm of arrays, we'll explore a very common and intuitive search technique: **Sequential Search**, also known as Linear Search. This topic is crucial because it directly relates to our ability to efficiently find specific pieces of information within a collection of data, a task you'll perform countless times in your programming journey.

Think about it: you have a box of crayons, and you need to find the "scarlet red" crayon. What do you do? You likely pick them up one by one and look at the color until you find the one you're looking for. This, in essence, is sequential search! It’s the most straightforward way to find an element in an array.

## Understanding Arrays: The Foundation

Before we get to searching, let's quickly recap what arrays are, as our entire discussion on sequential search will revolve around them.

An **array**, as you know from our earlier discussions and as explained in great detail by **Herbert Schildt in "C The Complete Reference,"** is a collection of elements of the same data type, stored in contiguous memory locations. Imagine a row of identical lockers, each numbered sequentially. Each locker can hold the same type of item (e.g., a book), and you can access any locker directly using its number.

In C, we declare an array like this:

```c
dataType arrayName[arraySize];
```

For instance, `int numbers[10];` declares an array named `numbers` that can hold 10 integer values. These elements are indexed starting from **0**. So, the first element is `numbers[0]`, the second is `numbers[1]`, and so on, up to `numbers[9]` for our example. This indexing is key to accessing elements during our search.

This ability to store and access multiple related data items efficiently is why arrays are fundamental, and it directly supports **Course Outcome CO2: Develop C programs using arrays, matrices, and strings.**

## Sequential Search: The Step-by-Step Approach

Now, let's talk about sequential search. The goal of sequential search is to find a specific element (often called the "key" or "target value") within an array.

### How It Works: The "Look-and-See" Method

Imagine you have a list of student IDs in an array, and you need to find the ID of a particular student. Sequential search works like this:

1.  **Start at the beginning:** You begin by looking at the very first element of the array.
2.  **Compare:** You compare this element with the target value you're looking for.
3.  **Match?**
    *   If they match, congratulations! You've found the element. You can note its position (index) and stop searching.
    *   If they don't match, you move to the *next* element in the array and repeat the comparison.
4.  **Continue until:** You either find a match or you reach the end of the array.
5.  **Not found:** If you reach the end of the array without finding a match, it means the target value is not present in the array.

This process is simple, robust, and can be applied to any array, regardless of whether it's sorted or not. As **Brian Kernighan and Dennis Ritchie in "The C Programming Language"** emphasize, simplicity and clarity are often the most important aspects of a good algorithm.

### Implementing Sequential Search in C

Let's translate this logic into a C program. We'll need a function that takes the array, its size, and the target value as input. It should return the index where the element is found, or a special value (like -1) if it's not found.

Here's a typical structure for a sequential search function:

```c
// Function to perform sequential search
// arr: the array to search in
// n: the number of elements in the array
// key: the element to search for
// Returns: the index of the key if found, -1 otherwise
int sequentialSearch(int arr[], int n, int key) {
    // Loop through each element of the array
    for (int i = 0; i < n; i++) {
        // Compare the current element with the key
        if (arr[i] == key) {
            // If a match is found, return the current index
            return i; // We found it at index 'i'
        }
    }
    // If the loop finishes without finding the key, return -1
    return -1; // Key not found in the array
}
```

**Let's break this down:**

*   We use a `for` loop to iterate from the first element (`i = 0`) up to, but not including, the size of the array (`i < n`). This is crucial for correct array traversal.
*   Inside the loop, `if (arr[i] == key)` checks if the element at the current index `i` is equal to our `key`.
*   If `arr[i] == key` is true, we immediately `return i;`. This stops the loop and the function, returning the index where the `key` was found.
*   If the loop completes without executing the `return i;` statement, it means the `key` was never found. In this case, we `return -1;`. Using -1 is a common convention to indicate that the search was unsuccessful because array indices are always non-negative.

This function directly addresses **Course Outcome CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules**. Here, `sequentialSearch` is a module that solves the problem of finding an element.

### A Relatable Example: Finding a Book in a Library Shelf

Imagine a small library with books arranged linearly on a shelf. You're looking for "The C Programming Language" by Kernighan and Ritchie.

*   **Array:** The shelf of books.
*   **Elements:** Individual books.
*   **Data Type:** Books (or more specifically, their titles).
*   **Sequential Search:** You start at the leftmost book, check its title. If it's not the one you want, you move to the next book and check its title, and so on.

Let's see this in a `main` function:

```c
#include <stdio.h>

// (Paste the sequentialSearch function here from above)
int sequentialSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int studentIDs[] = {101, 105, 112, 120, 125, 130, 145, 150};
    int numStudents = sizeof(studentIDs) / sizeof(studentIDs[0]); // Calculate array size
    int searchID = 125; // The ID we are looking for

    int index = sequentialSearch(studentIDs, numStudents, searchID);

    if (index != -1) {
        printf("Student ID %d found at index %d.\n", searchID, index);
        // We can also print the actual value found, which is studentIDs[index]
        // printf("The value at index %d is %d.\n", index, studentIDs[index]);
    } else {
        printf("Student ID %d not found in the list.\n", searchID);
    }

    // Let's try searching for an ID that isn't there
    searchID = 999;
    index = sequentialSearch(studentIDs, numStudents, searchID);

    if (index != -1) {
        printf("Student ID %d found at index %d.\n", searchID, index);
    } else {
        printf("Student ID %d not found in the list.\n", searchID);
    }

    return 0;
}
```

**Explanation of the `main` function:**

1.  We declare an integer array `studentIDs` with some sample data.
2.  `sizeof(studentIDs) / sizeof(studentIDs[0])` is a handy C idiom to calculate the number of elements in an array. `sizeof(studentIDs)` gives the total size of the array in bytes, and `sizeof(studentIDs[0])` gives the size of a single element in bytes. Dividing them gives us the count. This is a common technique you'll see in C programming and is a good practice to follow for dynamic array size handling.
3.  We define `searchID` as the value we want to find.
4.  We call our `sequentialSearch` function, passing the array, its size, and the `searchID`.
5.  The returned `index` is checked. If it's not -1, we print a success message indicating the index. Otherwise, we print a "not found" message.
6.  We then demonstrate searching for an ID that is not present in the array to show the "not found" case.

This program directly demonstrates **Course Outcome CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** We've taken the problem of finding an ID and used `if` and `for` statements to build a solution.

## Key Considerations and Efficiency

While sequential search is simple, it's important to understand its performance characteristics.

### Time Complexity: The Worst-Case Scenario

The efficiency of an algorithm is often described by its "time complexity." For sequential search:

*   **Best Case:** The element you're looking for is the *very first* element. The search takes constant time, often denoted as O(1).
*   **Worst Case:** The element you're looking for is the *very last* element, or it's not in the array at all. In this case, you have to check every single element. If the array has `n` elements, you perform `n` comparisons. This is called **linear time complexity**, denoted as **O(n)**.

This is an important point for exams. If you're asked about the time complexity of sequential search, the answer is O(n), as we typically analyze the worst-case scenario to understand the algorithm's limitations. **E. Balagurusamy in "Programming In Ansi C"** often emphasizes analyzing algorithms for their efficiency.

### When is Sequential Search Good?

Despite its O(n) worst-case complexity, sequential search is excellent for:

*   **Small Arrays:** For small collections of data, the overhead of more complex search algorithms (like binary search, which we'll cover later) isn't worth it. Sequential search is often faster due to its simplicity.
*   **Unsorted Arrays:** If your data isn't sorted, sequential search is one of the few direct options. Trying to use binary search on unsorted data will yield incorrect results.
*   **Infrequently Searched Arrays:** If you only search an array once in a while, the effort to sort it for a faster search might be overkill.

### Potential Pitfalls and How to Avoid Them

*   **Off-by-One Errors:** Be very careful with your loop conditions (`i < n` vs. `i <= n`) and array indexing (`arr[i]` vs. `arr[i-1]`). Accessing `arr[n]` when the valid indices are `0` to `n-1` will lead to undefined behavior (and often crashes!).
*   **Not Handling "Not Found":** Always ensure your search function correctly signals when an element is not found, typically by returning a sentinel value like -1. Failing to do so can lead to using an invalid index later in your program.
*   **Searching in a Void:** Remember that `sizeof(array) / sizeof(array[0])` only works correctly if `array` is an array declared directly in the scope where `sizeof` is used. If you pass an array to a function, it "decays" into a pointer, and `sizeof(pointer)` will give you the size of the pointer, not the array! This is why we pass the size `n` explicitly to our `sequentialSearch` function.

## Connecting to Course Outcomes

Let's explicitly tie this topic back to our course outcomes:

*   **CO1 (Infer and develop basic constructs):** Writing the `sequentialSearch` function uses `for` loops, `if` statements, and basic arithmetic, demonstrating the core building blocks of C.
*   **CO2 (Develop C programs using arrays):** This entire topic is about operating on arrays, specifically searching within them.
*   **CO3 (Utilize functions for modular solutions):** We created a reusable `sequentialSearch` function, a perfect example of modular programming.
*   **CO4 (Pointers for dynamic data handling):** While not directly using complex pointer manipulation here, understanding how arrays decay to pointers when passed to functions is a foundational step towards mastering pointers. The `sizeof` pitfall is a clear illustration of this.
*   **CO5 (Files for permanent storage):** While we haven't touched files yet, imagine storing a large list of student IDs in a file. You would then read that data into an array and *then* use sequential search. This shows how array operations fit into larger data management tasks.

**Yashavant Kanetkar's "Let us C"** is an excellent resource for practical C programming, and sequential search is a prime example of a concept explained and applied thoroughly in such books.

## Summary: What to Remember

*   **Sequential Search** is a simple, element-by-element search algorithm.
*   It works by comparing the target value with each array element from start to finish.
*   It is **O(n)** in the worst case, making it suitable for small or unsorted arrays.
*   Always pass the array size to functions that process arrays.
*   Return a sentinel value (like -1) to indicate an element was not found.

Mastering sequential search is your first step into efficient data retrieval. It's the foundation upon which more complex search and sorting algorithms are built. Keep practicing, and you'll find yourself using this technique quite often!

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual to more exam-oriented:

**Q1. What is sequential search, and how does it work?**

**Answer:** Sequential search (or linear search) is an algorithm that finds a target value within an array by checking each element one by one, starting from the first element, until a match is found or the end of the array is reached. If a match is found, the index of that element is returned. If the entire array is traversed without finding the target value, a special value (commonly -1) is returned to indicate that the element is not present.

**Q2. What is the time complexity of sequential search, and why?**

**Answer:** The time complexity of sequential search is **O(n)**, where 'n' is the number of elements in the array. This is because, in the worst-case scenario (when the element is the last one in the array or not present at all), the algorithm must examine every single element in the array. Each comparison is considered a constant-time operation, so performing 'n' comparisons results in linear time complexity.

**Q3. When would you choose to use sequential search over a more complex search algorithm like binary search?**

**Answer:** You would choose sequential search when:
*   The array is small: The overhead of sorting an array for binary search might be greater than the cost of a simple sequential search.
*   The array is unsorted: Sequential search works on any array, sorted or not. Binary search requires a sorted array.
*   The data is searched infrequently: If you only need to search the array once or twice, the effort to sort it for a faster search might not be justified.
*   Simplicity is paramount: Sequential search is very easy to implement and understand.

**Q4. Consider the following C code snippet. What will be the output of this program? Explain why.**

```c
#include <stdio.h>

int search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int data[] = {5, 2, 8, 1, 9, 4};
    int n = sizeof(data) / sizeof(data[0]);
    int target = 8;
    int result = search(data, n, target);

    if (result != -1) {
        printf("Found %d at index %d\n", target, result);
    } else {
        printf("%d not found\n", target);
    }
    return 0;
}
```

**Answer:**
The output of the program will be:
`Found 8 at index 2`

**Explanation:**
1.  The `data` array is initialized as `{5, 2, 8, 1, 9, 4}`.
2.  `n` is calculated as `6` (the number of elements).
3.  `target` is set to `8`.
4.  The `search` function is called with `data`, `n=6`, and `key=8`.
5.  The loop starts:
    *   `i=0`: `data[0]` is `5`. `5 != 8`.
    *   `i=1`: `data[1]` is `2`. `2 != 8`.
    *   `i=2`: `data[2]` is `8`. `8 == 8`. The condition `arr[i] == key` is true.
6.  The function `return i;`, which is `return 2;`.
7.  In `main`, `result` becomes `2`.
8.  The condition `result != -1` (i.e., `2 != -1`) is true.
9.  The program prints "Found 8 at index 2".

**Q5. You are given an array `int numbers[] = {10, 20, 30, 40, 50};`. If you call a function `int found_index = search_element(numbers, 5, 60);` where `search_element` implements sequential search, what value will `found_index` hold? What if you searched for `20`?**

**Answer:**
*   If you search for `60`, `found_index` will hold **-1**. This is because `60` is not present in the `numbers` array, and the sequential search function will traverse the entire array without finding it, ultimately returning the sentinel value `-1`.
*   If you search for `20`, `found_index` will hold **1**. The sequential search will compare `10` (at index 0) with `20`, not a match. Then it will compare `20` (at index 1) with `20`, which is a match. The function will then return the current index, which is `1`.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
