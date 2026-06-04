---
title: "Programs for sequential search"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e48"
status: "completed"
scrapedAt: "2026-05-20T16:35:20.597Z"
---
# Module 2: Arrays - Programs for Sequential Search

Welcome, everyone! Today, we're diving into one of the fundamental operations we perform with arrays: **searching**. Imagine you have a large collection of items, maybe your favorite songs, student IDs, or product codes. How do you find a specific item within that collection? That's where search algorithms come in, and today, we'll focus on the most straightforward one: **Sequential Search**, also known as **Linear Search**.

This topic is crucial because it directly ties into our Course Outcome 2: "Develop C programs using arrays, matrices, and strings." By the end of this session, you'll not only understand *how* sequential search works but also be able to *implement* it effectively in C. This is a core skill for any programmer, building upon your understanding of basic constructs (CO1) and setting the stage for more complex data manipulation later on.

## 1. What is Sequential Search? The Basic Idea

Let's start with a relatable scenario. Suppose you've misplaced your library card. You know it's somewhere in your backpack, which contains several other cards and slips of paper. What's the most intuitive way to find it? You'd likely take out each item one by one and check if it's your library card, right? You'd start from the top, examine the first item, then the second, and so on, until you either find your card or exhaust all the items in the backpack.

This is exactly what sequential search does with an array. Given an array of elements and a specific value (the "key" or "target" you're looking for), sequential search checks each element of the array in order, from the first element to the last, until the target value is found or the entire array has been scanned.

Think of it like reading a book from cover to cover to find a particular sentence. You don't jump around; you read linearly.

**Key Concept:** **Sequential Search (Linear Search)**: An algorithm that finds the position of a target value within a list. It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.

This method is simple and works for any kind of array, regardless of whether it's sorted or not. However, as you might guess, it can be quite slow if the array is very large.

## 2. How Sequential Search Works: The Algorithm Step-by-Step

Let's break down the process into logical steps, as if we were writing a recipe for it.

1.  **Start at the Beginning:** You begin by looking at the very first element of the array (index 0).
2.  **Compare:** You compare this element with the target value you're searching for.
3.  **Found?**
    *   If the element matches the target value, congratulations! You've found it. The algorithm can stop, and you can report the position (index) where it was found.
    *   If it doesn't match, move to the next element.
4.  **Next Element:** You proceed to the second element (index 1), then the third (index 2), and so on.
5.  **Repeat:** You continue this process of comparing and moving to the next element.
6.  **End of the Array:** What happens if you reach the end of the array without finding the target value? This means the target value is not present in the array. In this case, the algorithm reports that the element was not found.

This systematic checking is precisely what we translate into our C code.

## 3. Implementing Sequential Search in C: The Code

Now, let's see how we can translate this logic into a C program. We'll need a function that takes the array, its size, and the target value as input, and returns the index where the value is found, or a special value (like -1) to indicate it wasn't found.

As Gottfried highlights in "Programming with C," arrays are a fundamental data structure, and search operations are key to their utility. Hanly and Koffman, in "Problem Solving and Program Design in C," emphasize the importance of clear algorithms and their translation into code.

Here's a typical structure for a sequential search function:

```c
#include <stdio.h>

/**
 * @brief Performs sequential search on an integer array.
 *
 * @param arr The array to search within.
 * @param size The number of elements in the array.
 * @param target The value to search for.
 * @return The index of the target value if found, otherwise -1.
 */
int sequentialSearch(int arr[], int size, int target) {
    // Loop through each element of the array
    // The loop runs from index 0 up to (but not including) 'size'
    for (int i = 0; i < size; i++) {
        // Compare the current element with the target value
        if (arr[i] == target) {
            // If a match is found, return the current index 'i'
            // This is where the search is successful!
            return i;
        }
    }

    // If the loop finishes without finding the target,
    // it means the element is not in the array.
    // Return -1 to indicate that the element was not found.
    return -1;
}

// Main function to demonstrate the sequentialSearch
int main() {
    int myNumbers[] = {15, 8, 22, 5, 19, 30, 12};
    int arraySize = sizeof(myNumbers) / sizeof(myNumbers[0]); // Calculate the size of the array
    int valueToFind = 22;
    int notFoundValue = 100;

    // Search for a value that exists
    int indexFound = sequentialSearch(myNumbers, arraySize, valueToFind);

    if (indexFound != -1) {
        printf("Value %d found at index: %d\n", valueToFind, indexFound);
    } else {
        printf("Value %d not found in the array.\n", valueToFind);
    }

    // Search for a value that does not exist
    int indexNotFound = sequentialSearch(myNumbers, arraySize, notFoundValue);

    if (indexNotFound != -1) {
        printf("Value %d found at index: %d\n", notFoundValue, indexNotFound);
    } else {
        printf("Value %d not found in the array.\n", notFoundValue);
    }

    return 0;
}
```

Let's dissect this code:

*   **`int sequentialSearch(int arr[], int size, int target)`**: This is our function signature.
    *   `int arr[]`: This parameter represents the array of integers we're searching within.
    *   `int size`: This tells the function how many elements are in the `arr`. It's *crucial* to pass the size, as C arrays don't inherently store their own size.
    *   `int target`: This is the specific integer value we're trying to locate.
    *   The function is declared to return an `int`, which will be the index.

*   **`for (int i = 0; i < size; i++)`**: This `for` loop is the heart of our search.
    *   It initializes a counter `i` to `0` (the first index).
    *   The condition `i < size` ensures the loop continues as long as `i` is a valid index within the array.
    *   `i++` increments `i` after each iteration, moving us to the next element. This mirrors our "step-by-step" scanning.

*   **`if (arr[i] == target)`**: Inside the loop, this `if` statement performs the comparison. `arr[i]` accesses the element at the current index `i`. If it's equal to our `target`, we've found it.

*   **`return i;`**: If the `if` condition is true, we immediately exit the function and return the current index `i`. This is a successful search.

*   **`return -1;`**: This statement is placed *after* the `for` loop. If the loop completes all its iterations without ever finding a match (meaning the `return i;` statement was never executed), this line is reached. It signifies that the `target` value was not present in the array. We use `-1` as a common convention to indicate "not found" because array indices are always non-negative.

**Connecting to Course Outcomes:**

*   **CO1 (Basic Constructs):** This directly uses `for` loops and `if` statements, which are fundamental control flow constructs.
*   **CO2 (Arrays):** It demonstrates how to access elements within an array using their indices (`arr[i]`) and how to iterate through an entire array.

**Exam Tip:** Always remember to include the "not found" case and return a distinct value (like -1). Many students forget this, leading to incorrect results when the target isn't present. Also, ensure you correctly calculate and pass the array size to the search function.

## 4. Real-World Examples and Analogies to Solidify Understanding

Let's try to make this even more tangible.

**Example 1: Finding a Friend's Number in Your Phone Contact List (Unsorted)**

Imagine your phone's contact list isn't sorted alphabetically. To find your friend "Alice," you might scroll down the list, checking each name one by one: "Bob... Charlie... David... Alice!" Found her! The moment you see "Alice," you stop scrolling and dial. If you scroll through the entire list and never see "Alice," you conclude she's not in your contacts (or at least not listed under that name). This is a perfect analogy for sequential search on an unsorted array.

**Example 2: Checking Ticket Numbers at an Event Entrance**

Let's say you're working at the entrance of a concert, and each attendee has a ticket with a unique number. You have a list of authorized ticket numbers. When a person shows up, you take their ticket number and scan your list from the top: "Ticket 101... nope. Ticket 102... nope. Ticket 103... yes, found it!" You let them in. If you reach the end of your authorized list without finding their number, you politely tell them their ticket is invalid. Again, sequential!

**Example 3: Searching for a Specific Word in a Document (Page by Page)**

If you're asked to find every instance of the word "programming" in a physical book without using the index, you'd read each page, line by line, word by word, until you find it. If you scan every page and don't find it, it's not there.

These examples highlight that sequential search is the go-to method when you have no prior information about the order of elements or when the data is simply too small to worry about more advanced techniques.

**Connecting to Course Outcomes:**

*   **CO1 (Problem Inference):** These examples help you infer the underlying computational problem – searching for a specific item in a collection.

## 5. Considerations and When to Use Sequential Search

While sequential search is simple, it's not always the most efficient.

*   **Simplicity:** Its biggest advantage is its simplicity. It's easy to understand and implement. This makes it a great starting point for learning about search algorithms.
*   **Unsorted Data:** It works perfectly on *unsorted* arrays. If your data is not in any specific order, sequential search is often your only option unless you sort it first.
*   **Small Datasets:** For small arrays, the difference in speed between sequential search and more advanced methods (like binary search) is negligible.
*   **When the Element is Near the Beginning:** If the item you're looking for is likely to be one of the first elements, sequential search can be quite fast.

**What about when it's *not* ideal?**

If you have a very large array and you need to perform many searches, sequential search can become a bottleneck. Imagine searching for a specific song in a music library of 100,000 songs using only sequential search – it could take a very long time! This is where sorted data and algorithms like **Binary Search** (which we might cover later) shine. Binary search requires the array to be sorted, but it's dramatically faster for large datasets.

The choice of algorithm often depends on the size of the data, whether the data is sorted, and how frequently you'll be performing searches. As Brian Kernighan and Dennis Ritchie (K&R) noted in "The C Programming Language," choosing the right tool for the job is paramount. Sequential search is a fundamental tool, but it's important to know its limitations.

**Connecting to Course Outcomes:**

*   **CO1 (Knowledge Level K2 - Understanding):** Understanding the trade-offs of sequential search (simplicity vs. efficiency) is key.

## 6. Example with a Function and User Input

Let's make our `sequentialSearch` function more interactive by allowing the user to input the array elements and the value to search.

```c
#include <stdio.h>

// Function definition remains the same as before
int sequentialSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Found
        }
    }
    return -1; // Not found
}

int main() {
    int arraySize;
    int searchArray[100]; // Assuming a maximum size of 100 elements
    int valueToFind;
    int resultIndex;

    // 1. Get the size of the array from the user
    printf("Enter the number of elements in the array (max 100): ");
    scanf("%d", &arraySize);

    // Basic input validation for array size
    if (arraySize <= 0 || arraySize > 100) {
        printf("Invalid array size. Please enter a value between 1 and 100.\n");
        return 1; // Exit with an error code
    }

    // 2. Get the array elements from the user
    printf("Enter %d integer elements:\n", arraySize);
    for (int i = 0; i < arraySize; i++) {
        printf("Element %d: ", i + 1); // User-friendly prompt
        scanf("%d", &searchArray[i]);
    }

    // 3. Get the value to search for from the user
    printf("Enter the value you want to search for: ");
    scanf("%d", &valueToFind);

    // 4. Call the sequentialSearch function
    resultIndex = sequentialSearch(searchArray, arraySize, valueToFind);

    // 5. Display the result
    if (resultIndex != -1) {
        printf("\nSuccess! The value %d was found at index %d.\n", valueToFind, resultIndex);
    } else {
        printf("\nSorry, the value %d is not present in the array.\n", valueToFind);
    }

    return 0;
}
```

This version demonstrates how to combine input (`scanf`), array manipulation, and our search function, making it a more complete example of applying the concept.

**Connecting to Course Outcomes:**

*   **CO1 (Control Statements):** Uses `if` for validation and output.
*   **CO2 (Arrays):** Takes user input directly into an array.
*   **CO3 (Functions):** We're using a separate `sequentialSearch` function, promoting modularity.

**Remember this:** When dealing with user input and arrays, always consider potential issues like invalid input (e.g., non-numeric values, out-of-bounds array sizes) and handle them gracefully.

## 7. Efficiency Analysis (Briefly)

For those interested in how fast an algorithm runs, we often talk about its "time complexity."

*   **Best Case:** The target element is the very first one in the array. The algorithm checks only one element. This is very fast!
*   **Worst Case:** The target element is the last one, or it's not in the array at all. The algorithm has to check every single element. If the array has `n` elements, it performs `n` comparisons. This is often represented as **O(n)**, meaning the time taken grows linearly with the size of the array.
*   **Average Case:** On average, for a random array and a random target, you'd expect to check about half the elements, so it's also **O(n)**.

As Yashavant Kanetkar might say in "Let us C," understanding complexity helps you choose the right algorithm for performance-critical applications. For sequential search, O(n) is the key takeaway.

**Connecting to Course Outcomes:**

*   **CO1 (Knowledge Level K2):** Understanding that algorithms have different performance characteristics is part of understanding computational problems.

## Summary and Key Takeaways

Today, we've explored the **Sequential Search** algorithm.

*   It's the simplest search method, checking each element one by one.
*   It's ideal for **unsorted arrays** and **small datasets**.
*   The C implementation involves a `for` loop iterating through the array and an `if` condition to compare elements with the target.
*   A crucial part of the implementation is handling the "element not found" case, typically by returning `-1`.
*   Its time complexity is **O(n)**, meaning it's linear with respect to the array size.

This understanding of sequential search is foundational. It directly supports CO2 by demonstrating array traversal and manipulation, and it builds on CO1 by using basic programming constructs. As you move forward, you'll see how these simple ideas form the building blocks for more complex algorithms and data structures.

Keep practicing writing and testing these functions, perhaps by trying to search for different data types or in slightly modified scenarios. That's how you truly master these concepts!

---

## Sample Questions and Answers

Here are some questions that test your understanding of sequential search, ranging from conceptual to exam-style.

**Question 1 (Conceptual):**
What is the main advantage of sequential search compared to other search algorithms?

**Answer:**
The main advantage of sequential search is its **simplicity**. It is easy to understand, implement, and doesn't require the array to be sorted. This makes it suitable for small datasets or when the data is not organized.

**Question 2 (Conceptual):**
If a sequential search function returns -1, what does it signify?

**Answer:**
If a sequential search function returns -1, it signifies that the **target value was not found** in the array. It's a common convention to use -1 as an indicator for "not found" because array indices are always non-negative (0 or greater).

**Question 3 (Exam-Oriented - Code Snippet):**
Consider the following C code:

```c
int findElement(int data[], int count, int key) {
    for (int i = 0; i < count; i++) {
        if (data[i] == key) {
            return i;
        }
    }
    return 0; // Potential issue here!
}
```
What is a potential problem with the `return 0;` statement in this code snippet? How should it be corrected?

**Answer:**
The potential problem is that `return 0;` is ambiguous. If the `key` is actually found at index `0`, the function returns `0`, which correctly indicates it was found. However, if the `key` is *not* found after checking all elements, it *also* returns `0`. This makes it impossible to distinguish between finding the element at the first position and not finding it at all.

**Correction:** The `return 0;` statement should be changed to `return -1;` to unambiguously indicate that the element was not found.

```c
int findElement(int data[], int count, int key) {
    for (int i = 0; i < count; i++) {
        if (data[i] == key) {
            return i; // Found
        }
    }
    return -1; // Corrected: indicates not found
}
```

**Question 4 (Exam-Oriented - Tracing):**
Trace the execution of the `sequentialSearch` function with the following inputs:
`arr = {7, 2, 9, 1, 5}`
`size = 5`
`target = 9`

**Answer:**
1.  `sequentialSearch` is called with `arr = {7, 2, 9, 1, 5}`, `size = 5`, `target = 9`.
2.  The `for` loop starts: `i = 0`.
3.  Check `arr[0] == target`: `7 == 9` is false.
4.  Increment `i` to `1`.
5.  Check `arr[1] == target`: `2 == 9` is false.
6.  Increment `i` to `2`.
7.  Check `arr[2] == target`: `9 == 9` is true.
8.  The function `return i;`, which is `return 2;`.
9.  The search is successful, and the function returns `2`.

**Expected output:** The value 9 was found at index 2.

**Question 5 (Application):**
You have an array of `studentMarks[] = {65, 88, 72, 95, 59, 80}`. Write a C program segment that uses a sequential search to find if any student scored exactly 72 marks. If found, print "Student with 72 marks found." Otherwise, print "No student scored 72 marks."

**Answer:**

```c
#include <stdio.h>

// Assume sequentialSearch function is defined as shown earlier
int sequentialSearch(int arr[], int size, int target); // Declaration

int main() {
    int studentMarks[] = {65, 88, 72, 95, 59, 80};
    int numStudents = sizeof(studentMarks) / sizeof(studentMarks[0]);
    int targetScore = 72;

    int foundIndex = sequentialSearch(studentMarks, numStudents, targetScore);

    if (foundIndex != -1) {
        printf("Student with %d marks found.\n", targetScore);
    } else {
        printf("No student scored %d marks.\n", targetScore);
    }

    return 0;
}

// Definition of sequentialSearch (as provided in section 3)
int sequentialSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
