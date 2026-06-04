---
title: "FIR Filter Structures: Linear structures, Direct Form"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Structures for the realization of Discrete"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe996"
status: "completed"
scrapedAt: "2026-05-23T17:55:35.106Z"
---
# Digital Signal Processing: Module 3 - Structures for the Realization of Discrete FIR Filters

This module focuses on how to implement digital filters, specifically Finite Impulse Response (FIR) filters, in practice. We will explore different computational structures that allow us to translate a filter's mathematical description into a sequence of operations performed by a digital system.

## Module Objectives & Learning Outcomes

By the end of this module, you should be able to:

*   **Understand FIR Filter Structures:** Comprehend the different ways an FIR filter's difference equation can be represented computationally.
*   **Analyze FIR Filter Structures:** Evaluate the computational efficiency and hardware requirements of various FIR filter structures.
*   **Implement FIR Filters:** Translate an FIR filter's transfer function into a working computational structure.

---

## 1. Introduction to FIR Filters and Their Realization

**1.1 What is an FIR Filter?**

A Finite Impulse Response (FIR) filter is a type of digital filter where the output depends only on the current and past input samples. Unlike Infinite Impulse Response (IIR) filters, FIR filters do not have feedback loops. This property makes them inherently stable and allows for linear phase characteristics, which are crucial in many signal processing applications to avoid phase distortion.

The general difference equation for an FIR filter is:

$y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2] + \dots + b_M x[n-M]$

where:
*   $y[n]$ is the output signal at time $n$.
*   $x[n]$ is the input signal at time $n$.
*   $b_k$ are the filter coefficients (taps).
*   $M$ is the order of the filter (the highest delay in the input signal).

The corresponding transfer function in the z-domain is:

$H(z) = \frac{Y(z)}{X(z)} = b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_M z^{-M}$

**1.2 Why are Filter Structures Important? (CO3 - K3)**

The mathematical description of a filter (difference equation or transfer function) needs to be translated into a computational algorithm that can be implemented on a digital processor. Different structures can perform the same filtering operation but may vary significantly in:

*   **Computational Complexity:** Number of multiplications, additions, and delays required.
*   **Memory Requirements:** Number of storage elements (delay elements) needed.
*   **Sensitivity to Coefficient Quantization:** How errors in representing filter coefficients affect the filter's performance.
*   **Hardware Implementation:** Suitability for realization using digital circuits (e.g., microprocessors, DSP chips, ASICs).

**1.3 Key Components of Digital Filter Structures:**

*   **Multipliers:** For multiplying input samples or intermediate results by filter coefficients.
*   **Adders:** For summing weighted input samples or intermediate results.
*   **Delay Elements (Unit Delay $z^{-1}$):** For storing previous input or output samples.

---

## 2. Linear Structures for FIR Filter Realization

Linear structures are the most fundamental ways to implement digital filters. They directly mirror the operations described in the difference equation or transfer function.

### 2.1 Direct Form I Structure

The Direct Form I structure directly implements the difference equation in its original form.

**Difference Equation:**
$y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2] + \dots + b_M x[n-M]$

**Realization:**
This structure requires $M$ delay elements to store the past $M$ input samples.

**Diagram:**

```
          b0
  x[n] ----(*)----> y[n]
          ^
          |
          b1
  x[n-1]--|--(*)---->
          ^
          |
          b2
  x[n-2]--|--|--(*)---->
          ^  |
          |  |
         ... ...
          ^
          |
          bM
  x[n-M]--|--|--|--(*)---->
```
*(Note: The diagram above is a simplified representation. A proper block diagram would show delay elements explicitly connecting the outputs of one stage to the inputs of the next, and then summing these weighted outputs.)*

**Computational Requirements:**
*   Multiplications: $M+1$ (for $b_0$ to $b_M$)
*   Additions: $M$
*   Delay Elements: $M$

**Advantages:**
*   Simple to understand and directly maps to the difference equation.
*   Guaranteed stability for FIR filters.

**Disadvantages:**
*   Can be less efficient in terms of hardware compared to other structures for certain filter orders or when compared to transposed structures.

**Example (M=2):**
Let $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2]$
This requires storing $x[n-1]$ and $x[n-2]$.

**(CO3 - K3)**

### 2.2 Direct Form II Structure

The Direct Form II structure is derived by rearranging the order of operations and is generally more efficient in terms of the number of delay elements required. It is derived from the concept of separating the numerator and denominator polynomials of a transfer function, but for FIR filters, there is no denominator polynomial (or it's just 1). However, the structure is still relevant.

**Transfer Function:**
$H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_M z^{-M}$

We can group terms:
$H(z) = b_0 + z^{-1} (b_1 + b_2 z^{-1} + \dots + b_M z^{-(M-1)})$

This can be implemented as a cascade of delays and multiplications.

**Diagram (Conceptual):**

The Direct Form II structure can be visualized as a series of delay elements, with each output being multiplied by a coefficient and then summed. The key is that all the $z^{-1}$ operations are grouped.

**Computational Requirements:**
*   Multiplications: $M+1$
*   Additions: $M$
*   Delay Elements: $M$

**Wait, why is it called Direct Form II if the delay element count is the same?**

The "Direct Form II" nomenclature is more prominent when discussing IIR filters where it offers a significant reduction in delay elements compared to Direct Form I. For FIR filters, the Direct Form II structure is often conceptualized as grouping the delays, leading to a structure that looks different but has the same core computational requirements.

A common way to represent Direct Form II for FIR filters is to consider the transfer function as:

$H(z) = (b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_M z^{-M})$

This can be computed efficiently using Horner's method:

$H(z) = b_0 + z^{-1}(b_1 + z^{-1}(b_2 + \dots + z^{-1}(b_M)\dots))$

**Diagram using Horner's Method for FIR:**

```
                     bM
  x[n] ---->-------(*)----->
           |       ^
           |       | z^-1
           |       |
           |     b(M-1)
           | ----(*)----->
           |     ^
           |     | z^-1
           |     |
           |   b(M-2)
           | ----(*)----->
           |     ^
           |     | z^-1
           |     |
           ...   ...
           |     ^
           |     | z^-1
           |     |
           b0
           ----(*)-----> y[n]
```

This structure is more efficient in terms of delay elements for IIR filters but for FIR filters, the delay element count remains $M$.

**(CO3 - K3)**

### 2.3 Transposed Direct Form

The Transposed Direct Form structure is obtained by applying the principle of transposition to the Direct Form I structure. Transposition involves swapping input and output nodes, swapping directed edges, and reversing the direction of all edges. This operation preserves the input-output relationship but can be advantageous for certain hardware implementations or when dealing with feedback loops (more relevant for IIR).

For FIR filters, the transposition of the Direct Form I structure results in a structure where the signal flow is reversed, and the delays are placed at the "output" side of each summation.

**Diagram (Transposed Direct Form I):**

```
          b0
  x[n] ---->--+----(*)----> y[n]
              |
              | z^-1
              v
  x[n-1] ---->--+----(*)----+
              |           |
              | z^-1      |
              v           |
  x[n-2] ---->--+----(*)----+
              |           |
             ...         ...
              |           |
  x[n-M] ---->--+----(*)----+
```
*(Again, a simplified conceptual representation. A formal diagram would show feedback-like connections but still represent an FIR operation.)*

**Computational Requirements:**
*   Multiplications: $M+1$
*   Additions: $M$
*   Delay Elements: $M$

**Advantages:**
*   Can be more suitable for certain parallel processing architectures.
*   The structure itself is symmetric to the direct form.

**Disadvantages:**
*   For FIR filters, it doesn't offer a significant advantage over the direct form in terms of basic computational elements.

**(CO3 - K3)**

---

## 3. FIR Filter Structures and Course Outcomes Alignment

*   **CO1: Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.**
    *   While this module focuses on direct realization, understanding the difference equation ($y[n] = \sum_{k=0}^M b_k x[n-k]$) is foundational to signal processing, including DFT-based filtering. FIR filter coefficients ($b_k$) are often derived using frequency-domain design methods like the Parks-McClellan algorithm, which are related to DFT.

*   **CO2: Design linear phase FIR filters and IIR filters of different specifications.**
    *   The structures discussed here are the building blocks for implementing filters designed according to specific specifications, including linear phase FIR filters. The choice of structure can impact the efficiency and precision of implementing these designed filters.

*   **CO3: Realise the various FIR and IIR filter structures for a given system function. (Knowledge Level: K3)**
    *   This is the core of the module. We are learning to translate a system function (represented by the difference equation or transfer function) into a realizable computational structure. The Direct Form I and Transposed Direct Form are key FIR structures introduced here.

*   **CO4: Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.**
    *   Understanding filter structures is crucial for understanding how DSP processors execute algorithms. Efficient implementation of FIR filters on DSPs often involves specialized instructions and architectures that can leverage these structures (e.g., MAC units). While FFT is a separate topic, both are fundamental to digital signal processing implementation.

---

## 4. Important Points to Remember

*   **FIR filters are inherently stable.**
*   **The order of an FIR filter ($M$) determines the number of delay elements required.**
*   **Direct Form I is the most straightforward implementation directly from the difference equation.**
*   **The Transposed Direct Form is derived by transposing the Direct Form I.**
*   **For FIR filters, Direct Form I and Transposed Direct Form have the same number of multiplications, additions, and delays ($M+1$, $M$, and $M$ respectively).**
*   **The choice of structure can impact hardware efficiency and numerical stability (though stability is less of a concern for FIR).**
*   **Understanding these structures is key to implementing filters efficiently on digital hardware.**

---

## 5. Examples and Practice Questions

**Example 1: Implementing a 2nd Order FIR Filter**

Consider an FIR filter with the following transfer function:
$H(z) = 1 + 0.5z^{-1} + 0.2z^{-2}$

This corresponds to the difference equation:
$y[n] = x[n] + 0.5x[n-1] + 0.2x[n-2]$

**Direct Form I Implementation:**

The structure would have:
*   One input $x[n]$.
*   Three multipliers for $b_0=1$, $b_1=0.5$, $b_2=0.2$.
*   Two delay elements to store $x[n-1]$ and $x[n-2]$.
*   Two adders to sum the weighted terms.

**(CO3 - K3)**

**Practice Question 1:**

Given an FIR filter with the difference equation:
$y[n] = 0.8x[n] - 0.3x[n-1] + 0.1x[n-2] - 0.5x[n-3]$

1.  What is the order of this filter?
2.  Draw the Direct Form I structure for this filter.
3.  How many delay elements, multipliers, and adders are needed for this implementation?

**Answer 1:**

1.  The order of the filter is $M=3$, as the highest delay is $x[n-3]$.
2.  **Diagram (Direct Form I):**
    ```
                0.8
      x[n] ----(*)----+
                ^     |
                |     +-----> y[n]
                |     |
          -0.3  |     |
    x[n-1] ----(*)----+
                ^     |
                |     |
                |     +
          0.1   |     |
    x[n-2] ----(*)----+
                ^     |
                |     |
                |     +
          -0.5  |     |
    x[n-3] ----(*)----+
    ```
    *(Formal diagram requires explicit delay blocks $z^{-1}$ connecting the output of one stage to the input of the next, and then summing all weighted terms. For example, x[n-1] is the output of the first delay element fed by x[n]. x[n-2] is the output of the second delay element fed by the output of the first delay element, and so on.)*

3.  Number of delay elements: $M = 3$
    Number of multipliers: $M+1 = 4$
    Number of adders: $M = 3$

**(CO3 - K3)**

**Practice Question 2:**

Consider the FIR transfer function $H(z) = 2 + z^{-1} - 3z^{-2}$.

1.  Write the difference equation for this filter.
2.  Draw the Transposed Direct Form structure for this filter.
3.  What are the computational requirements (delays, multipliers, adders) for this structure?

**Answer 2:**

1.  Difference equation: $y[n] = 2x[n] + x[n-1] - 3x[n-2]$
2.  **Diagram (Transposed Direct Form):**
    ```
                   2
      x[n] ---->--+--(*)----+-----> y[n]
                 |         |
                 | z^-1    |
                 v         |
      x[n-1] ---->--+--(*)----+
                 |         |
                 | z^-1    |
                 v         |
      x[n-2] ---->--+--(*)----+
    ```
    *(Again, a simplified representation. Each path from x[n] to y[n] involves multiplications, summing up, and delays.)*

3.  Computational Requirements:
    *   Delay elements: $M = 2$
    *   Multipliers: $M+1 = 3$ (for coefficients 2, 1, -3)
    *   Adders: $M = 2$

**(CO3 - K3)**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 6. References

This module's content is based on fundamental concepts covered in:

*   **Digital Signal Processing using Matlab by Vinay K. Ingle, John G. Proakis (Cengage Learning, 3rd Ed., 2011):** Chapter 5 (Digital Filter Structures) would be highly relevant.
*   **Discrete-Time Signal Processing by Alan V Oppenheim, Ronald W. Schafer (Pearson Education, 3rd Ed., 2014):** Chapters 6 and 7 typically cover filter realization.
*   **Digital Signal Processing by Shaila D. Apte (Wiley, 2nd Ed, 2019):** Look for chapters on filter structures and realization.
*   **Digital Signal Processing: A Computer based Approach by Mitra S. K. (McGraw Hill, 4th Ed., 2014):** This book will likely have dedicated sections on implementing digital filters.

---