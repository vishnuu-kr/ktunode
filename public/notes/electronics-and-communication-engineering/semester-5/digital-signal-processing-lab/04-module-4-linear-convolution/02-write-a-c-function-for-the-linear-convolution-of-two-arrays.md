---
title: "Write a C function for the linear convolution of two arrays."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 4: Linear convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec41"
status: "completed"
scrapedAt: "2026-05-23T17:56:03.464Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 4: Linear Convolution

## Topic: Write a C function for the linear convolution of two arrays.

### Learning Outcomes:
*   Understand the mathematical definition of linear convolution.
*   Implement the linear convolution operation in C.
*   Analyze the output length of a linear convolution.
*   Apply linear convolution to real-world DSP problems.

### Key Concepts and Definitions:

#### 1. Linear Convolution
Linear convolution is a fundamental operation in Digital Signal Processing (DSP) used to describe the output of a Linear Time-Invariant (LTI) system when the input is a discrete-time signal.

Mathematically, for two discrete-time signals $x[n]$ and $h[n]$, their linear convolution, denoted by $y[n] = x[n] * h[n]$, is defined as:

$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

This formula represents the weighted sum of shifted versions of one signal, where the weights are given by the other signal.

**Intuitive Explanation:**
Imagine one signal ($x[k]$) as the input and the other ($h[n-k]$) as the impulse response. For each output sample $y[n]$, we "flip" and "shift" the impulse response ($h$). We then multiply the overlapping parts of the input signal and the flipped/shifted impulse response and sum up these products.

#### 2. Impulse Response ($h[n]$)
The impulse response of an LTI system is the output of the system when the input is a unit impulse signal, $\delta[n]$. The impulse response completely characterizes the LTI system.

#### 3. Unit Impulse Signal ($\delta[n]$)
The unit impulse signal is defined as:
$$
\delta[n] = \begin{cases} 1 & \text{if } n = 0 \\ 0 & \text{if } n \neq 0 \end{cases}
$$

#### 4. Output Length of Convolution
If $x[n]$ has length $N_x$ and $h[n]$ has length $N_h$, the resulting convolution $y[n]$ will have a length of $N_y = N_x + N_h - 1$.

*   **Example:** If $x[n]$ has 5 samples and $h[n]$ has 3 samples, the convolution $y[n]$ will have $5 + 3 - 1 = 7$ samples.

### C Function Implementation

Let's consider two finite-length arrays (signals) in C: `input_signal` and `impulse_response`.

**Assumptions:**
*   Both arrays contain finite-length sequences.
*   We will assume the signals start at index 0 for simplicity in C implementation.

**Algorithm:**

The convolution formula $y[n] = \sum_{k=0}^{N_x-1} x[k] h[n-k]$ can be implemented by iterating through each output sample $n$. For each $n$, we iterate through the input signal $x[k]$. The index for $h$ will be $(n-k)$. We need to be careful with the bounds to ensure we only access valid elements of the `impulse_response` array.

Let:
*   `input_signal` be `x` of size `N_x`.
*   `impulse_response` be `h` of size `N_h`.
*   `output_signal` be `y` of size `N_y = N_x + N_h - 1`.

The summation for $y[n]$ will be over valid $k$ such that $0 \le k < N_x$ and $0 \le (n-k) < N_h$.

This second condition can be rewritten as $n - N_h + 1 \le k \le n$.

Combining the conditions for $k$:
$\max(0, n - N_h + 1) \le k \le \min(N_x - 1, n)$.

This leads to the following C implementation:

```c
#include <stdio.h>
#include <stdlib.h> // For malloc and free

/**
 * @brief Computes the linear convolution of two discrete-time signals.
 *
 * @param x Pointer to the input signal array.
 * @param nx Length of the input signal array.
 * @param h Pointer to the impulse response array.
 * @param nh Length of the impulse response array.
 * @param y Pointer to the output array (must be allocated by the caller).
 *          The caller is responsible for allocating N_y = nx + nh - 1 elements.
 * @return 0 if successful, -1 if memory allocation fails or invalid input.
 *
 * This function implements the formula:
 * y[n] = sum_{k=0}^{nx-1} x[k] * h[n-k]
 *
 * For finite length signals, the valid range for k is:
 * max(0, n - nh + 1) <= k <= min(nx - 1, n)
 */
int linear_convolution(const double *x, int nx, const double *h, int nh, double *y) {
    if (x == NULL || h == NULL || y == NULL || nx <= 0 || nh <= 0) {
        fprintf(stderr, "Error: Invalid input arrays or lengths.\n");
        return -1; // Indicate error
    }

    int ny = nx + nh - 1; // Length of the output signal

    // Initialize the output array to zeros
    for (int i = 0; i < ny; ++i) {
        y[i] = 0.0;
    }

    // Perform the convolution
    for (int n = 0; n < ny; ++n) { // Iterate through each output sample y[n]
        // Iterate through the input signal x[k]
        // The valid range for k is: max(0, n - nh + 1) <= k <= min(nx - 1, n)
        int k_start = (n - nh + 1 > 0) ? (n - nh + 1) : 0;
        int k_end = (n < nx - 1) ? n : (nx - 1);

        for (int k = k_start; k <= k_end; ++k) {
            // Calculate the index for the impulse response h
            int h_index = n - k;

            // Ensure h_index is within valid bounds for h
            // This check is implicitly handled by the k_start and k_end calculation
            // but can be added for robustness if the logic for k_start/k_end is complex.
            // if (h_index >= 0 && h_index < nh) {
                y[n] += x[k] * h[h_index];
            // }
        }
    }

    return 0; // Indicate success
}

// --- Example Usage ---
int main() {
    // Example 1: Simple signals
    double x1[] = {1.0, 2.0, 3.0}; // nx = 3
    double h1[] = {1.0, 0.5};      // nh = 2
    int nx1 = sizeof(x1) / sizeof(x1[0]);
    int nh1 = sizeof(h1) / sizeof(h1[0]);
    int ny1 = nx1 + nh1 - 1; // ny1 = 3 + 2 - 1 = 4

    double *y1 = (double *)malloc(ny1 * sizeof(double));
    if (y1 == NULL) {
        fprintf(stderr, "Memory allocation failed for y1.\n");
        return 1;
    }

    if (linear_convolution(x1, nx1, h1, nh1, y1) == 0) {
        printf("Convolution Result (Example 1):\n");
        for (int i = 0; i < ny1; ++i) {
            printf("y[%d] = %f\n", i, y1[i]);
        }
    }
    free(y1); // Free allocated memory

    printf("\n");

    // Example 2: Signals with zeros
    double x2[] = {1.0, 0.0, 2.0}; // nx = 3
    double h2[] = {1.0, 1.0, 1.0}; // nh = 3
    int nx2 = sizeof(x2) / sizeof(x2[0]);
    int nh2 = sizeof(h2) / sizeof(h2[0]);
    int ny2 = nx2 + nh2 - 1; // ny2 = 3 + 3 - 1 = 5

    double *y2 = (double *)malloc(ny2 * sizeof(double));
    if (y2 == NULL) {
        fprintf(stderr, "Memory allocation failed for y2.\n");
        return 1;
    }

    if (linear_convolution(x2, nx2, h2, nh2, y2) == 0) {
        printf("Convolution Result (Example 2):\n");
        for (int i = 0; i < ny2; ++i) {
            printf("y[%d] = %f\n", i, y2[i]);
        }
    }
    free(y2); // Free allocated memory

    return 0;
}
```

**Explanation of the `linear_convolution` function:**

1.  **Header Inclusion:** `stdio.h` for printing, `stdlib.h` for `malloc` and `free`.
2.  **Function Signature:**
    *   `const double *x`: Pointer to the input signal array. `const` indicates the function will not modify the input array.
    *   `int nx`: Length of the input signal array.
    *   `const double *h`: Pointer to the impulse response array.
    *   `int nh`: Length of the impulse response array.
    *   `double *y`: Pointer to the output array where the result will be stored. **Crucially, the caller must allocate sufficient memory for `y` before calling this function.**
    *   **Return Value:** Returns `0` on success and `-1` on error (e.g., invalid inputs).
3.  **Input Validation:** Checks if any of the input pointers are `NULL` or if lengths are non-positive.
4.  **Output Length Calculation:** `ny = nx + nh - 1;` determines the size of the output array.
5.  **Output Initialization:** The `y` array is initialized to `0.0` before starting the summation. This is important because we are accumulating sums.
6.  **Outer Loop (`for n`):** This loop iterates from `n = 0` to `ny - 1`, computing each sample of the output signal `y[n]`.
7.  **Inner Loop (`for k`):** This loop iterates through the elements of the input signal `x`. The range of `k` is determined by the valid overlap between `x[k]` and `h[n-k]`.
    *   `k_start`: The starting index for `k`. It's the maximum of `0` (start of `x`) and `n - nh + 1` (to ensure `n-k` doesn't go below `0` for `h`).
    *   `k_end`: The ending index for `k`. It's the minimum of `nx - 1` (end of `x`) and `n` (to ensure `n-k` doesn't go beyond `nh-1` for `h`).
8.  **Convolution Summation:** Inside the inner loop, `y[n] += x[k] * h[n - k];` accumulates the product of the corresponding elements.
9.  **Example Usage (`main` function):**
    *   Demonstrates how to declare input signals, calculate their lengths, allocate memory for the output signal using `malloc`, call the `linear_convolution` function, print the results, and finally free the allocated memory using `free`.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Relating to Textbooks and Reference Books:

*   **Proakis & Ingle (Digital Signal Processing using Matlab):** This textbook extensively covers the theory of LTI systems and convolution in Chapters 2 and 3. It provides the mathematical foundation and often uses MATLAB examples, which can be conceptually translated to C implementations. The concept of flipping and shifting, as described in the convolution formula, is central. The output length calculation ($N_x + N_h - 1$) is also a key takeaway.
*   **Downey (Think DSP: Digital Signal Processing using Python):** While focusing on Python, Downey's book explains DSP concepts clearly, including convolution. The Python `numpy.convolve` function is a direct parallel to our C implementation. The book emphasizes understanding the process of breaking down convolution into manageable steps, which our C function does.
*   **Chassaing (DSP applications using C and the TMS320C6x DSK):** This book is highly relevant as it deals with implementing DSP algorithms in C, specifically for embedded processors. The techniques for array manipulation and efficient computation shown in this book are applicable to our convolution function. Chapter 3 on convolution and correlation is a direct reference.
*   **Oppenheim & Schafer (Discrete-Time Signal Processing):** This is a foundational text. Convolution is discussed in detail in Chapter 2. The book rigorously derives the convolution sum and properties of convolution, providing a deep theoretical understanding that underpins the C implementation.

### Aligning with Course Outcomes:

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While this topic isn't directly about generating waveforms, the arrays `x` and `h` in our examples represent signal waveforms (input and impulse response). Understanding how these signals behave during convolution is essential for signal processing.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** Convolution in the time domain is equivalent to multiplication in the frequency domain (Convolution Theorem). While this lab focuses on the time-domain implementation, knowing this property is crucial for understanding why convolution is important. Implementing DFT/IDFT and verifying this theorem would build upon our understanding of convolution.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** Implementing DSP algorithms like convolution in C is a fundamental step towards understanding how these algorithms are deployed on DSP hardware. The use of arrays, loops, and memory management in C is directly transferable to programming real-time DSP systems.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** This is the primary outcome addressed. Linear convolution is the mechanism by which LTI systems transform an input signal into an output signal. By writing a C function for convolution, we are directly implementing the behavior of an LTI system.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** FIR filters are a type of LTI system. Their behavior is defined by their coefficients, which form the impulse response ($h[n]$). To simulate the output of an FIR filter given an input signal, we use linear convolution. Therefore, a robust C function for linear convolution is a prerequisite for implementing FIR filters.

### Practice Questions and Exercises:

**Question 1:**
Given input signal $x[n] = \{1, 2, 3\}$ (for $n=0, 1, 2$) and impulse response $h[n] = \{4, 5\}$ (for $n=0, 1$), what is the output $y[n]$ after linear convolution? What is the length of $y[n]$?

**Answer 1:**
*   Length of $x[n]$ ($N_x$) = 3
*   Length of $h[n]$ ($N_h$) = 2
*   Length of $y[n]$ ($N_y$) = $N_x + N_h - 1 = 3 + 2 - 1 = 4$

Using the formula $y[n] = \sum_{k=0}^{N_x-1} x[k] h[n-k]$:

*   $y[0] = x[0]h[0] = 1 \times 4 = 4$
*   $y[1] = x[0]h[1] + x[1]h[0] = (1 \times 5) + (2 \times 4) = 5 + 8 = 13$
*   $y[2] = x[1]h[1] + x[2]h[0] = (2 \times 5) + (3 \times 4) = 10 + 12 = 22$
*   $y[3] = x[2]h[1] = 3 \times 5 = 15$

So, $y[n] = \{4, 13, 22, 15\}$.

**Question 2:**
Modify the provided C function to handle `float` data types instead of `double`.

**Answer 2:**
Change all `double` to `float` in the function signature, variable declarations, and initializations.

```c
// Modified function for float
int linear_convolution_float(const float *x, int nx, const float *h, int nh, float *y) {
    if (x == NULL || h == NULL || y == NULL || nx <= 0 || nh <= 0) {
        fprintf(stderr, "Error: Invalid input arrays or lengths.\n");
        return -1;
    }

    int ny = nx + nh - 1;

    for (int i = 0; i < ny; ++i) {
        y[i] = 0.0f; // Use 0.0f for float literal
    }

    for (int n = 0; n < ny; ++n) {
        int k_start = (n - nh + 1 > 0) ? (n - nh + 1) : 0;
        int k_end = (n < nx - 1) ? n : (nx - 1);

        for (int k = k_start; k <= k_end; ++k) {
            int h_index = n - k;
            y[n] += x[k] * h[h_index];
        }
    }

    return 0;
}
```

**Question 3:**
Consider an FIR filter with impulse response $h[n] = \{0.1, 0.2, 0.1\}$ for $n=0, 1, 2$. If the input signal is $x[n] = \{1, 1, 1, 1, 1\}$ for $n=0, 1, 2, 3, 4$. What is the output of the filter? Use the C function to verify your answer.

**Answer 3:**
*   $N_x = 5$, $N_h = 3$.
*   $N_y = 5 + 3 - 1 = 7$.

Manual Calculation:
*   $y[0] = x[0]h[0] = 1 \times 0.1 = 0.1$
*   $y[1] = x[0]h[1] + x[1]h[0] = (1 \times 0.2) + (1 \times 0.1) = 0.3$
*   $y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1 \times 0.1) + (1 \times 0.2) + (1 \times 0.1) = 0.4$
*   $y[3] = x[1]h[2] + x[2]h[1] + x[3]h[0] = (1 \times 0.1) + (1 \times 0.2) + (1 \times 0.1) = 0.4$
*   $y[4] = x[2]h[2] + x[3]h[1] + x[4]h[0] = (1 \times 0.1) + (1 \times 0.2) + (1 \times 0.1) = 0.4$
*   $y[5] = x[3]h[2] + x[4]h[1] = (1 \times 0.1) + (1 \times 0.2) = 0.3$
*   $y[6] = x[4]h[2] = 1 \times 0.1 = 0.1$

Result: $y[n] = \{0.1, 0.3, 0.4, 0.4, 0.4, 0.3, 0.1\}$

To verify with C, you would set up `x` and `h` arrays in `main` and call the `linear_convolution` function.

### Important Points to Remember:

*   **Output Length:** Always remember that the output of convolving two sequences of length $N_x$ and $N_h$ has a length of $N_x + N_h - 1$.
*   **Index Handling:** Pay close attention to array indexing, especially when accessing `h[n-k]`. The `k_start` and `k_end` calculations are crucial for correctness and preventing out-of-bounds access.
*   **Initialization:** Initialize the output array to zero before accumulating the sum.
*   **Memory Management:** If you dynamically allocate memory for the output array (using `malloc`), ensure you `free` it when it's no longer needed to prevent memory leaks.
*   **LTI System Characterization:** Convolution is the fundamental operation that defines how an LTI system responds to any input signal, given its impulse response.
*   **Convolution Theorem:** Remember that convolution in the time domain is equivalent to point-wise multiplication in the frequency domain. This is a powerful duality in DSP.

This comprehensive set of notes covers the theoretical basis of linear convolution, its practical implementation in C, and its relevance within the context of a Digital Signal Processing Lab course, aligning with the specified learning and course outcomes.