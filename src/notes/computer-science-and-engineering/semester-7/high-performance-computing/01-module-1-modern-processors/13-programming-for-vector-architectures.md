---
title: "Programming for vector architectures."
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 1: Modern processors"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c61e"
status: "completed"
scrapedAt: "2026-05-20T17:07:04.464Z"
---
# HIGH PERFORMANCE COMPUTING

## Module 1: Modern Processors

### Topic: Programming for Vector Architectures

---

## 1. Introduction to Vector Architectures

Vector architectures are designed to perform the same operation on multiple data elements simultaneously. This parallelism is achieved through **Single Instruction, Multiple Data (SIMD)** execution.

### 1.1 What are Vector Architectures?

*   **Concept:** Execute a single instruction on a vector (an array or list of data) of operands.
*   **Analogy:** Imagine having a special tool that can paint 10 fence posts with one stroke, rather than painting each post individually.
*   **Key Component:** **Vector Registers:** These are large registers capable of holding multiple data elements (e.g., 128-bit, 256-bit, 512-bit). The size of the vector register determines how many elements can be processed in a single instruction.
*   **Vector Instructions:** Special instructions that operate on entire vectors. Examples include `VADD` (vector add), `VMUL` (vector multiply), `VLOAD` (vector load), `VSTORE` (vector store).

### 1.2 Evolution and Relevance

*   **Historical Context:** Early supercomputers heavily utilized vector architectures.
*   **Modern Relevance:** SIMD capabilities are now integrated into most modern CPUs (e.g., Intel SSE, AVX, AVX-512; ARM NEON). They are crucial for accelerating tasks in graphics, multimedia, scientific computing, machine learning, and data processing.
*   **Benefits:**
    *   **Increased Throughput:** Process more data per clock cycle.
    *   **Reduced Instruction Overhead:** One vector instruction replaces many scalar instructions.
    *   **Lower Power Consumption:** Efficiently utilize hardware.

### 1.3 Key Concepts and Terminology

*   **Vector Length (VL):** The number of data elements that can be processed by a vector instruction in a single operation. This is dependent on the vector register size and the data type (e.g., 32-bit integers, 64-bit floating-point numbers).
*   **Vector Register:** A register that holds a vector of data elements.
*   **Vectorizable Code:** Code that can be automatically or manually transformed to utilize vector instructions.
*   **Mask Registers:** Used to enable/disable operations on specific elements within a vector, allowing for conditional execution on vector elements.
*   **Strided Access:** Accessing elements of an array with a fixed stride (e.g., `A[i]`, `A[i+2]`, `A[i+4]`). Vector instructions can handle strided loads/stores efficiently.
*   **Gather/Scatter Operations:**
    *   **Gather:** Loading elements from memory into a vector register, where the memory addresses of these elements are specified by another vector register.
    *   **Scatter:** The inverse of gather, storing elements from a vector register to memory at addresses specified by another vector register.

---

## 2. Identifying Vectorizable Code

Not all code is inherently vectorizable. The structure and data dependencies of the code play a critical role.

### 2.1 Loop-Level Parallelism

*   **Data Parallelism:** The most common form of parallelism exploited by vector architectures. Operations are performed independently on different data elements.
*   **Loops:** Loops are prime candidates for vectorization because they often perform the same operation on a sequence of data.

### 2.2 Dependencies that Hinder Vectorization

*   **True Dependencies (Read-After-Write):** An instruction needs the result of a previous instruction operating on the *same* data element.
    *   **Example:** `a[i] = a[i-1] + b[i]` – to compute `a[i]`, you need the value of `a[i-1]` from the *previous* iteration. This makes direct vectorization difficult.
*   **Anti-Dependencies (Write-After-Read):** An instruction writes to a location that a previous instruction needs to read.
    *   **Example:** `a[i-1] = a[i] + b[i]` – if `a[i]` is read by the next iteration's calculation of `a[i-1]`, and the current iteration writes to `a[i-1]`, this can cause issues if not handled properly (e.g., by renaming or reordering).
*   **Output Dependencies (Write-After-Write):** Two instructions write to the same location. The order of writes matters.
    *   **Example:** `a[i] = a[i-1] + b[i]`; `a[i] = c[i] * d[i]` – the final value of `a[i]` depends on which write happens last.

### 2.3 Identifying Vectorizable Patterns

*   **Outer loops with independent iterations:** If iterations of a loop do not depend on each other, they are good candidates for vectorization.
*   **Simple arithmetic operations:** Addition, subtraction, multiplication, division on array elements.
*   **Array-based operations:** Most operations on contiguous array elements are vectorizable.
*   **Conditional execution:** Can be handled using mask registers.

### 2.4 Example: Vectorizable vs. Non-Vectorizable Loop

**Vectorizable:**

```c
// Vectorizable loop
for (int i = 0; i < N; i++) {
    C[i] = A[i] + B[i];
}
```

*   Each iteration of the loop performs the same operation (`+`) on different elements of arrays `A` and `B` to produce elements of array `C`.
*   There are no dependencies between loop iterations.

**Non-Vectorizable (due to true dependency):**

```c
// Non-vectorizable loop (initially)
for (int i = 1; i < N; i++) {
    A[i] = A[i-1] + B[i];
}
```

*   To calculate `A[i]`, the loop needs the value of `A[i-1]` from the *previous* iteration. This creates a **true dependency**.

---

## 3. Programming Techniques for Vector Architectures

### 3.1 Compiler Auto-Vectorization

*   **Concept:** Compilers can automatically detect vectorizable code patterns (especially in simple loops) and generate SIMD instructions.
*   **Compiler Flags:** Enable vectorization using flags like `-O3`, `-ftree-vectorize` (GCC/Clang), or `/arch:AVX2`, `/O3` (MSVC).
*   **Limitations:** Compilers might struggle with complex control flow, indirect memory accesses (gather/scatter), and certain data dependencies.

### 3.2 Intrinsics

*   **Concept:** Special functions provided by compiler vendors that map directly to vector instructions. They offer more control than auto-vectorization.
*   **Advantages:**
    *   Expose specific vector instructions and their capabilities.
    *   Allow manual optimization when auto-vectorization fails.
    *   Provide finer control over vector register usage and masking.
*   **Disadvantages:**
    *   Code becomes compiler-specific (less portable).
    *   Requires understanding of the underlying vector architecture.
*   **Example (Intel AVX2 - conceptual):**
    ```c
    #include <immintrin.h> // For Intel intrinsics

    // Load 8 floats into a 256-bit YMM register
    __m256 vec_a = _mm256_loadu_ps(A); // _loadu for unaligned access
    __m256 vec_b = _mm256_loadu_ps(B);

    // Perform element-wise addition
    __m256 vec_c = _mm256_add_ps(vec_a, vec_b);

    // Store the result back to memory
    _mm256_storeu_ps(C, vec_c);
    ```
    *   `__m256` represents a 256-bit vector register.
    *   `_mm256_loadu_ps` loads 8 single-precision floats (8 * 32 bits = 256 bits) from unaligned memory.
    *   `_mm256_add_ps` performs element-wise addition of the two vectors.
    *   `_mm256_storeu_ps` stores the resulting vector to unaligned memory.

### 3.3 Vector Libraries

*   **Concept:** Libraries that provide optimized routines for common vector operations (e.g., BLAS, FFTW, Eigen).
*   **Advantages:**
    *   Leverage highly tuned, architecture-specific implementations.
    *   Abstract away the complexities of intrinsics and compiler flags.
    *   Often offer a portable interface.
*   **Example:** Using BLAS for matrix-vector multiplication. Instead of writing a loop with intrinsics, you would call a function like `cblas_sgemv`.

### 3.4 Data Alignment

*   **Importance:** Many vector load/store instructions perform best (or only work) on data aligned to the vector register size boundary.
*   **Aligned Access:** Usually faster as it can be completed in a single memory bus transaction.
*   **Unaligned Access:** May require multiple memory transactions, incurring performance penalties.
*   **Techniques for Alignment:**
    *   Declare arrays using aligned allocation (e.g., `_aligned_malloc` in MSVC, `posix_memalign` in POSIX, or using C++11 `alignas`).
    *   Use "unaligned" load/store intrinsics (e.g., `_mm_loadu_ps`, `_mm256_loadu_ps`) as a fallback, but be aware of the potential performance cost.
    *   The compiler might automatically handle alignment for globally or statically allocated arrays.

### 3.5 Handling Non-Vectorizable Code Patterns

*   **Scalar Expansion:** For dependencies where a value from one iteration is needed in the next, you can use scalar variables to hold the necessary value from the previous iteration.
    ```c
    // Vectorizable version of the previous non-vectorizable loop
    float prev_A_i_minus_1 = A[0]; // Initialize with A[0]
    for (int i = 1; i < N; i++) {
        float current_A_i = prev_A_i_minus_1 + B[i];
        A[i] = current_A_i;
        prev_A_i_minus_1 = current_A_i; // Update for the next iteration
    }
    ```
    *   The compiler can then potentially vectorize the loop over `B[i]` and `A[i]`, while the `prev_A_i_minus_1` is handled as a scalar.
*   **Loop Unrolling:** Can expose more independent operations within a loop body, potentially aiding vectorization.
*   **Manual Vectorization with Intrinsics:** As discussed above, this is the most direct way to handle complex cases.
*   **Data Restructuring:** Sometimes, changing the way data is stored (e.g., struct-of-arrays vs. array-of-structs) can improve vectorization.

---

## 4. Key SIMD Instructions and Operations

The exact instruction set varies by architecture (e.g., SSE, AVX, AVX2, AVX-512 for Intel; NEON for ARM). Here we'll cover common conceptual operations.

### 4.1 Load and Store Operations

*   **Vector Load:** Loads multiple contiguous data elements from memory into a vector register.
    *   `LOAD_VECTOR(address)`
    *   Aligned vs. Unaligned variants exist.
*   **Vector Store:** Stores the contents of a vector register to multiple contiguous memory locations.
    *   `STORE_VECTOR(address, vector_register)`
    *   Aligned vs. Unaligned variants exist.
*   **Gather/Scatter:** For non-contiguous memory accesses.
    *   `GATHER_VECTOR(addresses_vector, base_address)`
    *   `SCATTER_VECTOR(addresses_vector, base_address, data_vector)`

### 4.2 Arithmetic and Logic Operations

These operations are performed element-wise between two vector registers.

*   **Addition:** `VADD(vec1, vec2)`
*   **Subtraction:** `VSUB(vec1, vec2)`
*   **Multiplication:** `VMUL(vec1, vec2)`
*   **Division:** `VDIV(vec1, vec2)`
*   **AND:** `VAND(vec1, vec2)`
*   **OR:** `VOR(vec1, vec2)`
*   **XOR:** `VXOR(vec1, vec2)`
*   **Fused Multiply-Add (FMA):** `VFMA(vec1, vec2, vec3)` computes `(vec1 * vec2) + vec3` in a single instruction. This is very common and efficient.

### 4.3 Comparison and Masking Operations

*   **Compare:** `VCMP_EQ(vec1, vec2)` (element-wise equality check, returns a mask vector). Other comparisons: `<` (less than), `>` (greater than), `<=` (less than or equal), `>=` (greater than or equal), `!=` (not equal).
*   **Blend/Select:** `VBLEND(vec1, vec2, mask_vector)`: Selects elements from `vec1` or `vec2` based on the corresponding bit in the `mask_vector`.
    *   If mask bit is 1, take from `vec1`.
    *   If mask bit is 0, take from `vec2`.
*   **Masked Operations:** Many arithmetic/logic instructions can take a mask register as an argument, effectively applying the operation only to the enabled elements.
    *   `VADD_MASKED(vec1, vec2, mask_vector)`

### 4.4 Shuffle and Permute Operations

*   **Shuffle:** Rearrange elements within a vector register or combine elements from two vector registers into a new vector.
    *   `VSHUFFLE(vec1, vec2, control_vector)`

### 4.5 Horizontal Operations

*   **HADD/HSUB/HMUL:** Operations that sum, subtract, or multiply elements *within* a single vector register. Often used in conjunction with shuffles to reduce a vector to a single scalar result.

---

## 5. Practice Questions and Exercises

---

### Question 1: Auto-Vectorization Identification

Consider the following C code snippets. For each, determine if it's likely to be auto-vectorized by a modern compiler and explain why or why not.

```c
// Snippet A
for (int i = 0; i < 1000; i++) {
    C[i] = A[i] * 2.0f + B[i];
}

// Snippet B
for (int i = 0; i < 1000; i++) {
    if (A[i] > 0) {
        C[i] = A[i] + B[i];
    } else {
        C[i] = A[i] - B[i];
    }
}

// Snippet C
for (int i = 1; i < 1000; i++) {
    A[i] = A[i] + A[i-1];
}

// Snippet D
for (int i = 0; i < 1000; i++) {
    C[i] = A[i] + B[i % 10]; // Modulo operation
}
```

**Answer 1:**

*   **Snippet A:** **Likely vectorizable.** This is a classic example of data parallelism. Each iteration performs independent, simple arithmetic operations on array elements.
*   **Snippet B:** **Potentially vectorizable, but more complex.** The `if-else` statement introduces conditional execution. Compilers can often handle this using masks and conditional moves, but it's less straightforward than Snippet A. The performance might be slightly lower due to the overhead of masking.
*   **Snippet C:** **Not likely to be auto-vectorized directly.** This loop has a **true dependency** (`A[i]` depends on `A[i-1]`). Compilers would need to perform loop transformations (like scalar expansion) to make it vectorizable, which they might not do automatically for this specific pattern.
*   **Snippet D:** **Unlikely to be auto-vectorized directly.** The `B[i % 10]` access pattern involves an **indirect memory access** with a non-uniform stride (it accesses the same elements of `B` repeatedly). This is often difficult for compilers to vectorize efficiently. It might be vectorizable with specialized gather instructions if the compiler supports it and the pattern is recognized.

---

### Question 2: Intrinsics Application

Write conceptual C code using Intel AVX2 intrinsics (`__m256`) to perform the following operation:

`C[i] = (A[i] * B[i]) + C[i]` for a block of 8 `float` elements. Assume `A`, `B`, and `C` are `float` arrays.

**Answer 2:**

```c
#include <immintrin.h> // For AVX2 intrinsics

// Assume A, B, C are pointers to float arrays, and we are processing
// a block of 8 elements starting at these pointers.

// Load 8 floats from A into a 256-bit register (YMM register)
__m256 vec_a = _mm256_loadu_ps(A); // Using unaligned load for generality

// Load 8 floats from B into another YMM register
__m256 vec_b = _mm256_loadu_ps(B);

// Load 8 floats from C into a third YMM register
__m256 vec_c = _mm256_loadu_ps(C);

// Perform element-wise multiplication: A * B
__m256 vec_mul_result = _mm256_mul_ps(vec_a, vec_b);

// Perform element-wise addition: (A * B) + C
__m256 vec_add_result = _mm256_add_ps(vec_mul_result, vec_c);

// Store the result back into C
_mm256_storeu_ps(C, vec_add_result); // Using unaligned store for generality

// If it was a Fused Multiply-Add (FMA) operation, it would be:
// __m256 vec_fma_result = _mm256_fmadd_ps(vec_a, vec_b, vec_c); // (A * B) + C
// _mm256_storeu_ps(C, vec_fma_result);
```

---

### Question 3: Data Dependencies

Explain the difference between true, anti, and output dependencies and why they are problematic for vectorization. Provide a simple example for each.

**Answer 3:**

These dependencies represent relationships between instructions that can prevent or complicate vectorization because they dictate a specific order of execution that might not align with SIMD's parallel nature.

*   **True Dependency (Read-After-Write - RAW):**
    *   **Definition:** An instruction needs to read a value that a previous instruction has written. The read must happen *after* the write.
    *   **Problem for Vectorization:** If the read and write operations are within the same loop iteration or across iterations that the vectorizer tries to combine, the dependency can stall the pipeline or require scalar execution for that specific element.
    *   **Example:**
        ```c
        // a[i] needs the result of a[i-1]
        for (int i = 1; i < N; i++) {
            a[i] = a[i-1] + b[i];
        }
        ```
        To calculate `a[5]`, the value of `a[4]` must already be computed.

*   **Anti-Dependency (Write-After-Read - WAR):**
    *   **Definition:** An instruction writes to a location that a previous instruction needs to read. The write must happen *after* the read.
    *   **Problem for Vectorization:** If vectorization reorders instructions or processes elements in a way that the write happens before the read, it can lead to incorrect results. Compilers can often resolve this using register renaming or by ensuring the read happens before the write.
    *   **Example:**
        ```c
        // Instruction 1: Reads from a[i]
        // Instruction 2: Writes to a[i-1]
        // If Instruction 2 is part of a vector operation and overwrites a[i-1]
        // before Instruction 1 reads a[i] (which might be stored in the same
        // physical register if not renamed), it causes an anti-dependency.
        // A more direct example is difficult without specifying register allocation.
        // A simplified conceptual example:
        // scalar_temp = A[i];
        // A[i-1] = B[i] + C[i]; // If A[i] and A[i-1] were in the same register, this could be an issue
        // use(scalar_temp);
        ```
        A common scenario is when a register is reused. If `A[i]` is loaded into `R1`, and then `A[i-1]` is written to `R1`, but `R1` is still needed for the value of `A[i]`, this is an anti-dependency.

*   **Output Dependency (Write-After-Write - WAW):**
    *   **Definition:** Two instructions write to the same location. The write from the second instruction must happen *after* the write from the first instruction.
    *   **Problem for Vectorization:** If vectorization leads to writes in an arbitrary order, the final value might be incorrect. Compilers can often resolve this by ensuring writes occur in the intended order or by using different registers.
    *   **Example:**
        ```c
        // Two assignments to the same element A[i] within a loop body
        for (int i = 0; i < N; i++) {
            // First assignment
            A[i] = B[i] + C[i];
            // Second assignment to the same location A[i]
            A[i] = D[i] * E[i];
        }
        ```
        The final value of `A[i]` depends on which assignment happens last. If both are vectorizable and happen concurrently, the order is undefined without explicit handling.

---

## 6. Important Points to Remember

*   **SIMD = Single Instruction, Multiple Data:** The core principle of vector architectures.
*   **Vector Registers are Key:** They hold multiple data elements.
*   **Data Parallelism is the Target:** Operations on independent data elements are ideal.
*   **Dependencies are the Enemy:** True, anti, and output dependencies can hinder or break vectorization.
*   **Compiler Auto-Vectorization is a First Step:** Always enable compiler optimizations (`-O3`, etc.) and check compiler reports to see what is being vectorized.
*   **Intrinsics Offer Control:** Use them when auto-vectorization fails or for fine-grained optimization.
*   **Data Alignment Matters:** Aligned loads/stores are generally faster.
*   **Libraries are Your Friends:** Leverage optimized vector libraries (BLAS, etc.) for common tasks.
*   **Understand Your Target Architecture:** The specifics of instruction sets (SSE, AVX, NEON) and register sizes are crucial for effective vector programming.
