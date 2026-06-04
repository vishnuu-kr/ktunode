---
title: "speeding up array access"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feafd"
status: "completed"
scrapedAt: "2026-05-23T17:53:34.178Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Speeding Up Array Access

This module focuses on enhancing the efficiency of accessing elements within arrays in ARM assembly language. Understanding these techniques is crucial for optimizing performance in embedded systems, aligning with **CO1 (C features in embedded systems)** and **CO3 (Choosing between assembly/C)** as efficient array access often translates to better C code performance when interacting with hardware or critical loops. It also contributes to **CO2 (Programmer's view of processor architecture)** by illustrating how architectural features can be exploited for speed.

### Learning Outcomes:

*   Understand the fundamental challenges in array access performance.
*   Identify and apply techniques to improve the speed of array access in ARM assembly.
*   Analyze the trade-offs between different array access optimization strategies.
*   Recognize the role of addressing modes in array access efficiency.
*   Appreciate how instruction sequencing impacts overall program execution time.

---

### 1. Introduction to Array Access and its Performance Bottlenecks

Arrays are fundamental data structures, but direct access can be slow due to the sequential nature of memory. In assembly, accessing an array element typically involves:

*   **Base Address:** The starting memory address of the array.
*   **Index:** The position of the desired element within the array.
*   **Element Size:** The size (in bytes) of each element (e.g., 1 byte for `char`, 2 bytes for `short`, 4 bytes for `int` or `float`).

The effective address of an array element is calculated as:
`Effective Address = Base Address + (Index * Element Size)`

**Performance Bottlenecks:**

*   **Multiplication:** The `Index * Element Size` calculation can be computationally expensive, especially if the element size is not a power of two.
*   **Memory Latency:** Fetching data from memory takes time, and repeated memory accesses can stall the pipeline.
*   **Instruction Overhead:** Multiple instructions are often required to calculate the address and fetch the data.

**Key Concept:** Efficient array access hinges on minimizing these bottlenecks by leveraging ARM's architectural features and optimizing the instruction sequence.

---

### 2. Leveraging ARM Addressing Modes for Efficient Array Access

ARM processors provide powerful addressing modes that can significantly simplify and speed up array access.

#### 2.1. Base + Offset Addressing

This is a fundamental addressing mode where the effective address is the sum of a base register and an immediate offset.

*   **Syntax:** `[Rn, #offset]`
*   **Example:** `LDR R0, [R1, #4]`  (Loads data from address `R1 + 4` into `R0`)

**How it helps:**

*   If the `Element Size` is a constant and a power of two (e.g., 4 bytes for `int`), the multiplication by `Element Size` can be replaced by a left shift, which is a very fast operation.
*   The offset can be directly incorporated into the instruction, reducing the need for separate addition instructions.

**Textbook Reference:** Lewis, Chapter 4 ("Instruction Set Architecture") discusses addressing modes. Yiu, Chapter 3 ("ARM Core Architecture and Programmer's Model") also details addressing modes.

#### 2.2. Base + Index Addressing (Pre-indexed and Post-indexed)

These modes combine a base register with a register that holds the index, allowing for dynamic offsets.

*   **Pre-indexed Addressing:** The address is calculated *before* the memory access. The base register can optionally be updated.
    *   **Syntax (without write-back):** `[Rn, Rm]`  (Loads data from address `Rn + Rm` into the destination register)
    *   **Syntax (with write-back):** `[Rn, Rm]!` (Loads data from address `Rn + Rm` and updates `Rn` to `Rn + Rm`)
*   **Post-indexed Addressing:** The address is calculated *after* the memory access. The base register is updated with the calculated address.
    *   **Syntax:** `[Rn], Rm` (Loads data from address `Rn`, then updates `Rn` to `Rn + Rm`)

**How it helps:**

*   **Iterating through arrays:** When iterating through an array, the index register (`Rm`) can hold the offset to the current element. After accessing an element, you can increment the index register by the element size.
    *   **Pre-indexed with write-back** is particularly useful for sequential access: `LDR R0, [R1, R2]!` loads the element pointed to by `R1 + R2` and then updates `R1` by adding `R2` (effectively `R1 = R1 + R2`), preparing for the next iteration.
    *   **Post-indexed** is also useful for sequential access: `LDR R0, [R1], R2` loads the element pointed to by `R1`, then updates `R1` by adding `R2`.

**Example (Iterating through an array of 4-byte integers):**

```assembly
; Assume R1 holds the base address of the array
; Assume R2 holds the current index (e.g., 0, 4, 8, ...)
; Assume R0 will hold the loaded element

; Using pre-indexed with write-back for efficient iteration
LDR R0, [R1, R2]! ; Load element at R1+R2, then R1 = R1 + R2
; Now R1 points to the next potential element's base address
; If R2 is incremented by element size (4), this is very efficient.
```

**Key Concept:** The `!` (write-back) suffix is critical for optimizing loops that process array elements sequentially.

#### 2.3. Base + Offset + Register Addressing (Pre-indexed)

This is the most general form, allowing for a base register, an immediate offset, and a register offset.

*   **Syntax:** `[Rn, Rm, LSL #imm]` (Loads data from `Rn + (Rm << imm)`)
*   **How it helps:** This directly supports the array access formula `Base Address + (Index * Element Size)` when `Element Size` is a power of two. The `LSL #imm` part performs the multiplication by `2^imm`.

**Example (Accessing element `i` in an array of 4-byte integers):**

```assembly
; Assume R1 holds the base address of the array
; Assume R2 holds the index 'i'
; Assume R3 will hold the loaded element

; Access element at address: R1 + (R2 * 4)
; R2 * 4 is equivalent to R2 << 2
LDR R3, [R1, R2, LSL #2]
```

This single instruction performs the base address calculation, index multiplication (via shift), and memory fetch, making it highly efficient.

**Textbook Reference:** Yiu, Chapter 3 ("ARM Core Architecture and Programmer's Model") details these advanced addressing modes.

---

### 3. Optimizing Loop Structures for Array Processing

When processing arrays, loops are ubiquitous. Optimizing the loop structure itself, in conjunction with addressing modes, is key.

#### 3.1. Loop Unrolling

Loop unrolling replicates the loop body multiple times, reducing loop overhead (branching, counter decrements).

**Consider:** A loop summing elements of an array.

**Original Loop (inefficient):**

```assembly
sum_array:
    MOV R0, #0          ; Initialize sum
    MOV R1, #0          ; Initialize index
    MOV R2, #ARRAY_SIZE ; Loop counter

loop_start:
    CMP R2, #0
    BEQ loop_end

    ; Load element at R1
    LDR R3, [R_ARRAY_BASE, R1]
    ADD R0, R0, R3      ; Add to sum

    ADD R1, R1, #4      ; Increment index by element size (4 bytes)
    SUB R2, R2, #1      ; Decrement counter
    B loop_start

loop_end:
    BX LR               ; Return
```

**Unrolled Loop (more efficient):**

```assembly
; Assume R_ARRAY_BASE points to the array
; Assume R0 is used to accumulate the sum

    ; Process elements 0, 1, 2, 3 in one go
    LDR R1, [R_ARRAY_BASE, #0]  ; Load element 0
    LDR R2, [R_ARRAY_BASE, #4]  ; Load element 1
    LDR R3, [R_ARRAY_BASE, #8]  ; Load element 2
    LDR R4, [R_ARRAY_BASE, #12] ; Load element 3

    ADD R0, R0, R1
    ADD R0, R0, R2
    ADD R0, R0, R3
    ADD R0, R0, R4

    ; ... repeat for other blocks of 4 elements, adjusting offsets
    ; Handle remaining elements if array size is not a multiple of 4
```

**Benefits:**

*   Reduces branch instructions (`CMP`, `B`) within the loop.
*   Allows the processor to execute instructions in parallel (if dependencies allow).
*   More instructions can be issued per clock cycle.

**Drawbacks:**

*   Increases code size.
*   Requires careful handling of loop termination and remaining elements.
*   Less flexible for dynamically sized arrays.

**Textbook Reference:** Zhu, Chapter 5 ("Optimization Techniques") discusses loop unrolling as a code optimization strategy.

#### 3.2. Autoincrement/Autodecrement (Implicit in Post-indexed)

While ARM doesn't have a dedicated "autoincrement" addressing mode separate from post-indexed, the **post-indexed** mode with write-back achieves this effect.

*   **`[Rn], Rm`:** Access memory at `Rn`, then update `Rn` to `Rn + Rm`.
*   **`[Rn], #offset`:** Access memory at `Rn`, then update `Rn` to `Rn + offset`.

**How it helps:** This is perfect for iterating through an array where the base address needs to be advanced after each access.

**Example (Summing an array using post-indexed):**

```assembly
; Assume R1 holds the base address of the array
; Assume R2 holds the increment value (element size, e.g., 4)
; Assume R0 is used to accumulate the sum

    MOV R3, #ARRAY_SIZE / 4 ; Number of elements

loop_start:
    CMP R3, #0
    BEQ loop_end

    LDR R4, [R1], R2        ; Load element, then R1 = R1 + R2
    ADD R0, R0, R4          ; Add to sum
    SUB R3, R3, #1          ; Decrement element counter
    B loop_start

loop_end:
    BX LR
```

This approach is cleaner and more efficient than manual index register manipulation for sequential array traversal.

---

### 4. Considerations for Different Data Types and Array Sizes

The optimization strategies depend heavily on the size of the array elements and the total array size.

#### 4.1. Element Size and Shifting

*   **Powers of Two Element Sizes (1, 2, 4, 8 bytes):** These are ideal for optimization as multiplication by these sizes can be replaced by fast bit shifts.
    *   `x * 1 = x` (no shift)
    *   `x * 2 = x << 1`
    *   `x * 4 = x << 2`
    *   `x * 8 = x << 3`
    ARM's `[Rn, Rm, LSL #imm]` addressing mode directly exploits this.

*   **Non-Powers of Two Element Sizes:** If element sizes are not powers of two (e.g., a struct with a variable-length field), the multiplication `Index * Element Size` cannot be efficiently done with a single shift. This might require a `MUL` instruction, which is slower, or using a lookup table for offsets if feasible.

#### 4.2. Array Size and Loop Control

*   **Small Arrays:** For very small arrays, the overhead of complex addressing modes or unrolling might outweigh the benefits. Simple sequential access might be sufficient.
*   **Large Arrays:** Loop unrolling becomes more beneficial for large arrays as it significantly reduces the number of loop iterations and associated overhead.
*   **Dynamic Array Sizes:** If the array size is not known at compile time, relying on runtime calculations for offsets and using the most efficient general-purpose addressing modes (like pre-indexed with register offset) is crucial.

---

### 5. Example: Summing an Array of Integers

Let's illustrate a more optimized approach for summing an array of 32-bit integers (4 bytes each) using ARM assembly.

**Scenario:** Sum all elements in an array.

```assembly
; Assume:
; R0: holds the accumulated sum (initialized to 0)
; R1: holds the base address of the integer array
; R2: holds the number of elements in the array

    PUSH {R4-R7, LR}         ; Save registers and LR
    MOV R4, R1              ; Copy base address to R4 for iteration
    MOV R5, R0              ; Copy sum to R5 for accumulation
    MOV R6, R2              ; Copy element count to R6

    ; Optimized loop using pre-indexed with register offset and LSL
    ; Effectively: R_current_address = R1 + (R7 * 4)
    ; We'll use R7 as our index counter (0, 1, 2...)

    MOV R7, #0              ; Initialize index counter to 0

optimized_loop:
    CMP R7, R6              ; Compare index with total count
    BGE loop_end            ; If index >= count, exit loop

    ; Load element at base address + (index * element_size)
    ; R4 is base, R7 is index, element size is 4 (LSL #2)
    LDR R3, [R4, R7, LSL #2] ; Load element from memory

    ADD R5, R5, R3          ; Add the loaded element to the sum

    ADD R7, R7, #1          ; Increment index
    B optimized_loop

loop_end:
    MOV R0, R5              ; Move final sum to R0
    POP {R4-R7, LR}         ; Restore registers and LR
    BX LR                   ; Return
```

**Explanation:**

1.  **Register Usage:**
    *   `R1` (input): Base address of the array.
    *   `R2` (input): Number of elements.
    *   `R0` (output): Resulting sum.
    *   `R4`: Stores the base address to avoid modifying it.
    *   `R5`: Accumulates the sum.
    *   `R6`: Stores the total element count for loop termination.
    *   `R7`: Acts as the element index (0, 1, 2, ...).
    *   `R3`: Temporarily holds the loaded array element.

2.  **Loop Logic:**
    *   The loop continues as long as the index `R7` is less than the total element count `R6`.
    *   `LDR R3, [R4, R7, LSL #2]` is the core optimization:
        *   `R4`: Base address.
        *   `R7`: Index.
        *   `LSL #2`: Multiplies `R7` by 4 (element size), effectively calculating the byte offset.
        *   This single instruction computes the effective address and fetches the data.

3.  **Accumulation:** The fetched element (`R3`) is added to the running sum (`R5`).

4.  **Index Increment:** The index `R7` is incremented by 1 for the next iteration.

This approach is significantly more efficient than repeatedly calculating offsets using separate instructions.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider an array of 16-bit unsigned integers. Write an ARM assembly snippet to load the element at index `R3` from the array whose base address is in `R0`. The result should be placed in `R1`.

**Question 2:**
Explain why using `[Rn, Rm, LSL #imm]` addressing mode is generally faster than `ADD R_temp, Rn, Rm; LDR R1, [R_temp]` for array access when the element size is a power of two.

**Question 3:**
If you are processing an array of `char` (1 byte per element) sequentially in a loop, which ARM addressing mode would be most efficient for advancing the pointer to the next element after each load? Provide an example using post-indexed addressing.

**Question 4:**
Discuss the trade-offs between loop unrolling and traditional loop structures when optimizing array processing in ARM assembly, considering code size and execution speed.

---

### 7. Answers to Practice Questions

**Answer 1:**
```assembly
; R0: Base address of the array
; R3: Index of the desired element
; R1: Will hold the loaded element

; Element size is 2 bytes (16-bit unsigned integer)
; Index * Element Size = R3 * 2 = R3 << 1

LDR R1, [R0, R3, LSL #1]
```

**Answer 2:**
The `[Rn, Rm, LSL #imm]` addressing mode is a single instruction that performs address calculation (base + (index << shift)) and memory fetch. This allows the processor's instruction pipeline to work more efficiently, often completing the entire operation in fewer clock cycles than a sequence of separate `ADD`, `LSL`, and `LDR` instructions. The processor can often decode and execute these complex addressing modes in parallel.

**Answer 3:**
For sequential access of `char` elements, **post-indexed addressing** is most efficient. It allows loading the current element and then automatically updating the base address to point to the next element in one instruction.

Example using post-indexed addressing:

```assembly
; Assume:
; R0: Base address of the char array (will be updated)
; R1: Will hold the loaded char
; R2: Holds the increment value (1 for char)

; Load the current character and then advance the pointer
LDRB R1, [R0], R2      ; Load byte at R0 into R1, then R0 = R0 + R2 (which is R0 + 1)
```
*Note:* `LDRB` is used to load a single byte.

**Answer 4:**
*   **Loop Unrolling:**
    *   **Pros:**
        *   **Reduces loop overhead:** Eliminates multiple branch instructions (`CMP`, `B`) per iteration, saving cycles.
        *   **Improves instruction-level parallelism (ILP):** More independent instructions can be fetched and executed concurrently by the processor's pipeline.
        *   Can lead to higher performance for large arrays.
    *   **Cons:**
        *   **Increases code size:** Duplicating the loop body significantly bloats the program.
        *   **Less flexible:** Difficult to adapt to dynamically sized arrays or complex loop conditions.
        *   **Can lead to register pressure:** Requires more registers to hold intermediate results if not managed carefully.
        *   **Complexity in handling remainders:** If the array size isn't a perfect multiple of the unrolling factor, extra code is needed to process the remaining elements.

*   **Traditional Loop Structures:**
    *   **Pros:**
        *   **Compact code size:** More memory efficient.
        *   **More flexible:** Easily adaptable to variable array sizes and conditions.
        *   **Simpler to implement:** Less prone to off-by-one errors in loop control.
    *   **Cons:**
        *   **Higher loop overhead:** Each iteration involves branch instructions, adding latency.
        *   **Lower ILP:** Pipeline might stall more frequently due to sequential instruction fetching and branching.
        *   Can be slower for large arrays where loop overhead dominates.

**Conclusion:** For embedded systems where code size is often a critical constraint, traditional loops are preferred unless performance is paramount and the array size is known to be large and fixed. If performance is critical, loop unrolling (or partially unrolling) can be a powerful optimization.

---

### 8. Important Points to Remember

*   **Addressing Modes are Key:** ARM's addressing modes (especially pre-indexed with register offset and LSL, and post-indexed) are designed to accelerate array access.
*   **Powers of Two:** Leverage the fact that multiplication by powers of two can be replaced by efficient bit shifts (`LSL`).
*   **Loop Overhead:** Minimize branch instructions and counter decrements in tight loops that access arrays.
*   **Post-indexed for Sequential Access:** Use `[Rn], Rm` or `[Rn], #offset` for efficient traversal of array elements.
*   **Code Size vs. Speed:** Loop unrolling improves speed but increases code size. Choose the optimization based on project constraints.
*   **Data Type Matters:** The size of array elements directly impacts the shift amount or multiplication required.

---

This concludes the study notes on speeding up array access in ARM assembly. Understanding these techniques is vital for writing efficient embedded software.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
