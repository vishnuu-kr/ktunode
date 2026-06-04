---
title: "sorting"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364e5"
status: "completed"
scrapedAt: "2026-05-23T16:23:00.327Z"
---
## MICROPROCESSORS AND EMBEDDED SYSTEMS LAB - Module 1: Data Transfer: Block Data Movement - Topic: Sorting

This module focuses on the fundamental concept of data transfer and its application in practical scenarios within the context of microprocessors and embedded systems. Sorting, a crucial data manipulation technique, allows us to arrange data in a specific order, making it easier to analyze, search, and process. This topic will explore various sorting algorithms and their implementation using assembly language for microcontrollers, particularly the 8051.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the importance and applications of sorting in embedded systems.
*   Implement basic sorting algorithms (e.g., Bubble Sort, Selection Sort) in 8051 Assembly Language.
*   Analyze the efficiency and complexity of different sorting algorithms.
*   Apply block data movement instructions for efficient sorting operations.
*   Develop ALP programs to sort a block of data stored in the microcontroller's memory.

---

### 1. Introduction to Sorting and its Importance

**Definition:** Sorting is the process of arranging elements of a list or array in a specific order, typically in ascending or descending numerical or alphabetical order.

**Why is Sorting Important in Embedded Systems?**

*   **Efficient Data Retrieval:** Sorted data allows for faster searching using algorithms like Binary Search.
*   **Data Analysis and Presentation:** Presenting sensor readings, logs, or measurements in a sorted order makes them more readable and understandable.
*   **Algorithm Requirements:** Many algorithms, especially those used in control systems or signal processing, require input data to be sorted.
*   **Resource Optimization:** Efficient sorting can lead to faster processing and reduced power consumption, which are critical in embedded systems.
*   **Data Validation and Filtering:** Sorting can help in identifying outliers or invalid data points.

---

### 2. Block Data Movement and its Relevance to Sorting

**Concept:** Block data movement refers to transferring a contiguous block of data from one memory location to another. Microcontrollers like the 8051 provide specific instructions to facilitate this, significantly improving the efficiency of operations like sorting.

**Key 8051 Instructions for Block Data Movement:**

*   **`MOV DPTR, #address`**: Loads the Data Pointer with the starting address of the source or destination block.
*   **`MOVX A, @DPTR`**: Moves data from external memory pointed to by DPTR into the Accumulator.
*   **`MOVX @DPTR, A`**: Moves data from the Accumulator to external memory pointed to by DPTR.
*   **`INC DPTR`**: Increments the Data Pointer by 1. This is crucial for sequential block transfer.
*   **`MOV A, @R0` / `MOV A, @R1`**: Moves data from internal RAM pointed to by R0 or R1 into the Accumulator.
*   **`MOV @R0, A` / `MOV @R1, A`**: Moves data from the Accumulator to internal RAM pointed to by R0 or R1.
*   **`INC R0` / `INC R1`**: Increments the register R0 or R1, essential for iterating through blocks in internal RAM.

**How they facilitate Sorting:**

When implementing sorting algorithms that involve swapping elements or comparing adjacent elements, we often need to move data between different memory locations. Efficient block data movement instructions minimize the number of instructions required for these transfers, leading to faster execution times.

---

### 3. Common Sorting Algorithms and their 8051 Implementation

We will focus on two fundamental sorting algorithms suitable for microcontroller implementation: Bubble Sort and Selection Sort.

#### 3.1. Bubble Sort

**Concept:** Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. Larger elements "bubble up" to the end of the list.

**Algorithm Steps:**

1.  Iterate through the array from the first element to the second-to-last element.
2.  For each element, compare it with the next element.
3.  If the current element is greater than the next element, swap them.
4.  Repeat steps 1-3 for each pass. The number of passes needed is typically one less than the number of elements.

**Example:** Sorting an array `[5, 1, 4, 2, 8]`

*   **Pass 1:**
    *   (5, 1) -> swap -> `[1, 5, 4, 2, 8]`
    *   (5, 4) -> swap -> `[1, 4, 5, 2, 8]`
    *   (5, 2) -> swap -> `[1, 4, 2, 5, 8]`
    *   (5, 8) -> no swap -> `[1, 4, 2, 5, 8]`
    *   Largest element (8) is now at the end.
*   **Pass 2:**
    *   (1, 4) -> no swap -> `[1, 4, 2, 5, 8]`
    *   (4, 2) -> swap -> `[1, 2, 4, 5, 8]`
    *   (4, 5) -> no swap -> `[1, 2, 4, 5, 8]`
    *   Second largest element (5) is in place.
*   **Pass 3:**
    *   (1, 2) -> no swap -> `[1, 2, 4, 5, 8]`
    *   (2, 4) -> no swap -> `[1, 2, 4, 5, 8]`
    *   Third largest element (4) is in place.
*   **Pass 4:**
    *   (1, 2) -> no swap -> `[1, 2, 4, 5, 8]`
    *   Sorted!

**8051 ALP Implementation Considerations:**

*   **Data Storage:** Assume the array is stored in internal or external RAM.
*   **Counters:** Use registers (e.g., R0-R7) to manage loop counts (outer loop for passes, inner loop for comparisons).
*   **Comparisons:** `CJNE` (Compare and Jump if Not Equal) or `JC` (Jump if Carry) instructions are essential.
*   **Swapping:** Requires temporary storage (e.g., in the Accumulator or another register).

**Illustrative ALP Snippet (Conceptual - not a complete program):**

```assembly
; Assume array starts at address 0x30, length N is in R7

MOV R0, #30h      ; Pointer to the start of the array
MOV R1, R0        ; Pointer for the inner loop
INC R1            ; Start comparison from the second element
MOV R2, R7        ; Outer loop counter (N-1 passes)

OUTER_LOOP:
    MOV R3, R7      ; Inner loop counter (N-1 comparisons in the first pass)
    DEC R3          ; Adjust for the fact we compare N-1 pairs

INNER_LOOP:
    ; Load element 1 (pointed to by R0) into A
    MOV A, @R0
    ; Load element 2 (pointed to by R1) into B
    MOV B, @R1

    CJNE A, B, NO_SWAP ; Compare A and B

    ; If A > B (for ascending sort), swap
    MOV A, @R0      ; Reload A
    MOV @R1, A      ; Move A to the location pointed by R1
    MOV A, B        ; Load B into A
    MOV @R0, A      ; Move B to the location pointed by R0

NO_SWAP:
    INC R0          ; Move to next element for comparison
    INC R1
    DJNZ R3, INNER_LOOP ; Decrement inner loop counter and jump if not zero

    ; Reset R0 and R1 for the next pass
    MOV R0, #30h
    MOV R1, R0
    INC R1

    DJNZ R2, OUTER_LOOP ; Decrement outer loop counter and jump if not zero
```

**Reference:**
*   **Kenneth Ayala's "The 8051 Microcontroller":** Chapter on Assembly Language Programming often includes examples of array manipulation and looping structures vital for implementing sorting. Look for sections on addressing modes and loop control.
*   **Muhammad Ali Mazidi's "The 8051 Microcontroller and Embedded Systems":** This book provides detailed explanations of assembly language programming, including how to handle arrays and implement algorithms. Chapters on data movement and program flow control will be relevant.

---

#### 3.2. Selection Sort

**Concept:** Selection Sort divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly finds the minimum element from the unsorted sublist and swaps it with the first element of the unsorted sublist.

**Algorithm Steps:**

1.  Iterate through the array from the first element to the second-to-last element.
2.  Assume the current element is the minimum.
3.  Iterate through the remaining unsorted elements to find the actual minimum element.
4.  If the minimum element is not the current element, swap them.
5.  Repeat steps 2-4 for each position in the array.

**Example:** Sorting an array `[5, 1, 4, 2, 8]`

*   **Pass 1:**
    *   Minimum element is 1 (at index 1).
    *   Swap 5 and 1 -> `[1, 5, 4, 2, 8]`
    *   Sorted sublist: `[1]`
*   **Pass 2:**
    *   Consider unsorted sublist `[5, 4, 2, 8]`. Minimum element is 2 (at index 3).
    *   Swap 5 and 2 -> `[1, 2, 4, 5, 8]`
    *   Sorted sublist: `[1, 2]`
*   **Pass 3:**
    *   Consider unsorted sublist `[4, 5, 8]`. Minimum element is 4 (at index 2).
    *   No swap needed.
    *   Sorted sublist: `[1, 2, 4]`
*   **Pass 4:**
    *   Consider unsorted sublist `[5, 8]`. Minimum element is 5 (at index 3).
    *   No swap needed.
    *   Sorted sublist: `[1, 2, 4, 5]`
*   Sorted! `[1, 2, 4, 5, 8]`

**8051 ALP Implementation Considerations:**

*   **Indices:** Need registers to keep track of the current position (for the sorted sublist boundary) and the index of the minimum element found so far.
*   **Comparisons:** Similar to Bubble Sort, `CJNE` is used.
*   **Swapping:** Requires temporary storage. The swap logic might be slightly more complex as you need to swap the element at the current position with the minimum element found.

**Illustrative ALP Snippet (Conceptual):**

```assembly
; Assume array starts at address 0x30, length N is in R7

MOV R0, #30h      ; Pointer to the start of the array
MOV R6, R0        ; R6 will point to the current position being considered
MOV R5, R7        ; R5 = N (total number of elements)

OUTER_LOOP_SEL:
    MOV R1, R6        ; R1 points to the current minimum element's initial position
    MOV A, @R1        ; Load the initial minimum value into A
    MOV R2, R1        ; R2 will store the address of the minimum element found so far

    ; Inner loop to find the minimum element
    MOV R3, R6        ; R3 points to the start of the unsorted portion
    INC R3            ; Start comparison from the next element
    MOV R4, R5        ; R4 = N
    SUBB A, #0        ; Ensure R4 holds N
    DEC R4            ; R4 becomes N-1 (total elements to check from current position)

INNER_LOOP_SEL:
    MOV B, @R3        ; Load the next element to compare
    MOV A, @R2        ; Load the current minimum element

    CJNE A, B, CHECK_GREATER ; Compare current min and next element

    ; If elements are equal, no update needed, continue
    JMP CONTINUE_INNER

CHECK_GREATER:
    ; If A (current min) > B (next element), then B is the new minimum
    JC UPDATE_MIN     ; If carry is set, B < A, update min

CONTINUE_INNER:
    INC R3            ; Move to the next element
    DJNZ R4, INNER_LOOP_SEL ; Decrement and loop if not done

    ; Check if a swap is needed (minimum element is not at the current position)
    MOV A, R6
    CJNE A, R2, PERFORM_SWAP ; Compare start of unsorted section with min element pointer

    ; No swap needed, move to the next outer loop iteration
    INC R6            ; Move the boundary of the sorted section
    DJNZ R5, OUTER_LOOP_SEL ; Decrement and loop if not done

PERFORM_SWAP:
    ; Swap element at R6 with element at R2
    MOV A, @R6
    MOV @R2, A        ; Move element from R6 to R2 location
    MOV A, @R2        ; Reload the value that was originally at R6 (now at R2)
    MOV @R6, A        ; Move it to the R6 location

    INC R6            ; Move the boundary of the sorted section
    DJNZ R5, OUTER_LOOP_SEL ; Decrement and loop if not done

UPDATE_MIN:
    MOV R2, R3        ; Update the address of the minimum element
    JMP CONTINUE_INNER ; Continue inner loop

```

**Reference:**
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers":** This textbook is likely to have practical examples of assembly language programming for the 8051, including array manipulation and algorithmic implementations. Pay attention to how loops and conditional jumps are used to build complex logic.

---

### 4. Efficiency and Complexity Analysis

**Time Complexity:**

*   **Bubble Sort:** O(n^2) in the worst and average case. It performs approximately n^2/2 comparisons and swaps.
*   **Selection Sort:** O(n^2) in all cases (worst, average, and best). It always performs n(n-1)/2 comparisons.

**Space Complexity:**

*   Both Bubble Sort and Selection Sort are **in-place** sorting algorithms, meaning they require minimal extra space (typically only a few temporary registers for swapping). Their space complexity is O(1).

**Considerations for Embedded Systems:**

*   For small datasets, the O(n^2) complexity of these algorithms is often acceptable.
*   If dealing with very large datasets, more efficient algorithms like Merge Sort or Quick Sort (which have O(n log n) complexity) might be necessary. However, their implementation in 8051 assembly can be significantly more complex due to recursion and dynamic memory allocation (which is limited in many 8051 environments).
*   The **number of memory accesses** is also a critical factor. Instructions like `MOVX` to external RAM are slower than `MOV` to internal RAM. Optimizing data placement and using efficient block transfers can significantly impact performance.

---

### 5. Interfacing and Practical Implementation

**Hardware Setup:**

*   **Microcontroller Board:** An 8051 development board (e.g., using AT89S52).
*   **Memory:** Internal RAM of the 8051 is usually limited (e.g., 128 or 256 bytes). For larger datasets, external RAM might be required.
*   **Development Environment:** An assembler (like Keil uVision, SDCC) and a programmer/debugger.

**Steps for Implementation:**

1.  **Define Data:** Determine where your data block will be stored (internal RAM, external RAM). Initialize the data with sample values.
2.  **Choose Algorithm:** Select either Bubble Sort or Selection Sort based on the requirements.
3.  **Write ALP:**
    *   Set up memory pointers (DPTR for external, R0/R1 for internal).
    *   Implement the comparison and swap logic using appropriate instructions.
    *   Use registers as counters for loops.
    *   Handle edge cases (e.g., empty array, array with one element).
4.  **Assemble and Load:** Assemble the ALP code and load it onto the microcontroller.
5.  **Test and Debug:** Use a debugger to step through the code, monitor register values, and verify that the data is sorted correctly.

**Example Problem:** Sort an array of 10 bytes stored in internal RAM starting at address `0x40` in ascending order using Bubble Sort.

---

### 6. Practice Questions and Exercises

**Question 1:**

Explain the fundamental principle behind Bubble Sort. What is its time complexity?

**Answer:**
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Larger elements "bubble up" to the end of the list. Its time complexity is O(n^2) in the worst and average cases.

**Question 2:**

Describe how you would implement a swap operation in 8051 Assembly Language for two bytes located at memory addresses pointed to by R0 and R1 respectively.

**Answer:**
A swap operation would typically involve using the Accumulator as a temporary storage:

```assembly
    MOV A, @R0      ; Load the byte at R0 into the Accumulator
    MOV B, @R1      ; Load the byte at R1 into Register B (another temp)
    MOV @R1, A      ; Move the content of the Accumulator (from R0) to the R1 location
    MOV @R0, B      ; Move the content of Register B (from R1) to the R0 location
```

*(Alternatively, if only one temporary location is needed and the data is not needed simultaneously, the Accumulator alone can be used for swapping between @R0 and @R1)*

```assembly
    MOV A, @R0      ; Load A with the byte at R0
    MOV R2, A       ; Store A in a temporary register R2
    MOV A, @R1      ; Load A with the byte at R1
    MOV @R0, A      ; Move the byte from R1 to R0's location
    MOV A, R2       ; Load A with the original byte from R0 (stored in R2)
    MOV @R1, A      ; Move the byte from R2 to R1's location
```

**Question 3:**

Consider an array of 8 bytes stored in external memory starting at `0x1000`. Write an ALP snippet to sort this array in descending order using Selection Sort. You can assume the length (8) is already loaded into register R7.

**Answer:**
*(This is a more complex question requiring a significant ALP program. Below is a conceptual outline and a few key parts. A full solution would be extensive.)*

```assembly
; Assume array length N=8 is in R7, starting address 0x1000

    MOV DPTR, #1000h    ; DPTR points to the start of the array
    MOV R6, DPTR        ; R6 will hold the current position pointer
    MOV R5, R7          ; R5 holds the number of elements (N)

OUTER_LOOP_SEL_DESC:
    MOV R1, R6          ; R1 points to the initial maximum element's position
    MOV A, @DPTR        ; Load the initial maximum value (descending sort)
    MOV R2, DPTR        ; R2 will store the address of the maximum element found so far

    ; Inner loop to find the maximum element
    MOV R3, R6          ; R3 points to the start of the unsorted portion
    INC R3              ; Start comparison from the next element
    MOV R4, R5          ; R4 = N
    DEC R4              ; R4 = N-1 (number of elements to check)

INNER_LOOP_SEL_DESC:
    MOV @R1, B          ; Store current max in B temporarily before loading next element
    MOVX A, @DPTR       ; Load the next element to compare
    MOV B, A            ; Store it in B

    MOV A, @R2          ; Load the current maximum element

    CJNE A, B, CHECK_LESS ; Compare current max and next element

    ; If elements are equal, no update needed, continue
    JMP CONTINUE_INNER_DESC

CHECK_LESS:
    ; If A (current max) < B (next element), then B is the new maximum
    JNC UPDATE_MAX     ; If carry is not set, B >= A, update max

CONTINUE_INNER_DESC:
    INC DPTR            ; Move to the next element in external memory
    DJNZ R4, INNER_LOOP_SEL_DESC ; Decrement and loop if not done

    ; Check if a swap is needed (maximum element is not at the current position R6)
    MOV A, R6           ; Load address of current position
    CJNE A, R2, PERFORM_SWAP_DESC ; Compare current position pointer with max element pointer

    ; No swap needed, move to the next outer loop iteration
    INC R6              ; Move the boundary of the sorted section
    INC DPTR            ; Ensure DPTR points to the next element for next outer loop iteration
    DJNZ R5, OUTER_LOOP_SEL_DESC ; Decrement and loop if not done

PERFORM_SWAP_DESC:
    ; Swap element at R6 with element at R2 (external memory)
    MOVX A, @R6         ; Load element at R6 into A
    MOV B, A            ; Store in B
    MOVX A, @R2         ; Load element at R2 into A
    MOVX @R6, A         ; Move element from R2 to R6 location
    MOV A, B            ; Load original R6 value back into A
    MOVX @R2, A         ; Move it to the R2 location

    INC R6              ; Move the boundary of the sorted section
    INC DPTR            ; Ensure DPTR points to the next element for next outer loop iteration
    DJNZ R5, OUTER_LOOP_SEL_DESC ; Decrement and loop if not done

UPDATE_MAX:
    MOV R2, DPTR        ; Update the address of the maximum element
    JMP CONTINUE_INNER_DESC ; Continue inner loop

```
*(Note: This snippet is complex due to external memory access and the need to manage DPTR carefully. It's a starting point for a full implementation.)*

**Question 4:**

What are the advantages of using Selection Sort over Bubble Sort in terms of the number of swaps performed?

**Answer:**
Selection Sort performs a maximum of N-1 swaps, regardless of the initial order of the array. Bubble Sort, on the other hand, can perform up to N(N-1)/2 swaps in the worst case (e.g., reverse-sorted array). Therefore, if the number of writes to memory is a critical concern, Selection Sort is preferable.

---

### 7. Important Points to Remember

*   **Data Location:** Internal RAM is faster but limited. External RAM offers more space but is slower. Choose wisely based on your data size and performance needs.
*   **Register Usage:** Carefully plan your register allocation for counters, pointers, and temporary storage to avoid conflicts.
*   **Block Transfer Instructions:** Leverage `MOVX` with DPTR incrementing for efficient block transfers, especially with external memory.
*   **Comparison Instructions:** `CJNE` is very useful for comparing elements. Understand its behavior with carry flag.
*   **Swapping Logic:** Always use a temporary storage location (Accumulator or another register) for swapping elements.
*   **Algorithm Choice:** For small datasets common in embedded systems, simple O(n^2) algorithms like Bubble Sort and Selection Sort are often sufficient.
*   **Debugging:** Use the simulator/debugger extensively to trace your code's execution and identify errors.

---

### 8. Alignment with Course Outcomes

This topic directly supports the following Course Outcomes:

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   Implementing sorting algorithms in ALP requires understanding and applying arithmetic (for comparisons) and logical operations (for data manipulation and flow control) to solve the problem of ordering data.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   While this topic focuses on ALP, understanding the underlying logic and memory operations is crucial for writing efficient embedded C code that leverages the 8051's capabilities. The principles of array manipulation and looping are transferable.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   While not directly about peripherals, understanding how to manage and transfer data blocks from different memory locations (internal/external RAM) is a fundamental step towards interfacing with peripherals that might require data buffering or block transfers.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   Sorting data from sensors or input devices before processing or displaying it is a common system design requirement. This topic provides the foundational algorithms to achieve such functionality.

---

This comprehensive set of notes should provide a solid foundation for understanding and implementing sorting algorithms in the context of Microprocessors and Embedded Systems Lab, specifically with the 8051 microcontroller. Remember to practice by writing and debugging your own ALP programs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
