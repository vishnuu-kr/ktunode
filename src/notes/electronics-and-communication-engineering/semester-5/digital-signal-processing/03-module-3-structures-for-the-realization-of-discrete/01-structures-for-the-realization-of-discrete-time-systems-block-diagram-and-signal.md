---
title: "Structures for the realization of Discrete-Time Systems - Block diagram and 
signal flow graph representations of filters"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Structures for the realization of Discrete"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe995"
status: "completed"
scrapedAt: "2026-05-23T17:55:34.397Z"
---
# Module 3: Structures for the Realization of Discrete-Time Systems

## Topic: Block Diagram and Signal Flow Graph Representations of Filters

**Welcome to Module 3!** This module delves into the practical ways we can implement discrete-time systems, particularly filters. Understanding these structures is crucial for efficient hardware and software implementation, as well as for analyzing system behavior. We will explore two fundamental graphical representations: block diagrams and signal flow graphs.

---

### **1. Introduction to Discrete-Time System Realization**

**What is Realization?**

Realization refers to the process of translating a mathematical description of a discrete-time system (typically a difference equation or a transfer function) into a computational structure that can be implemented. This structure dictates how the input signal is processed to produce the output signal using basic operations like multiplication, addition, and delay.

**Why Different Structures?**

Different realization structures offer various advantages and disadvantages in terms of:

*   **Computational Complexity:** Number of multiplications and additions required.
*   **Memory Requirements:** Number of delay elements needed.
*   **Round-off Noise Sensitivity:** Impact of finite-precision arithmetic.
*   **Coefficient Sensitivity:** How changes in filter coefficients affect the frequency response.
*   **Hardware Implementation:** Ease of implementation on digital hardware (e.g., DSP processors, FPGAs).

---

### **2. Block Diagram Representation**

A block diagram provides a visual representation of a discrete-time system using basic building blocks.

**Key Building Blocks:**

*   **Summation Junction (+):** Combines multiple input signals.
*   **Multiplication (by a constant):** Multiplies a signal by a coefficient.
*   **Delay Element (z⁻¹):** Represents a unit delay in the time domain, corresponding to multiplication by $z^{-1}$ in the z-domain. $y[n-1] = z^{-1}\{y[n]\}$.
*   **Input Signal (x[n]):** The signal entering the system.
*   **Output Signal (y[n]):** The signal exiting the system.

**Translating Difference Equations to Block Diagrams:**

Consider a general Linear Time-Invariant (LTI) system described by a difference equation:

$y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$

This equation represents an IIR (Infinite Impulse Response) filter.

**Direct Form I (DF-I):**

This structure directly implements the difference equation by separating the FIR and IIR parts.

**Steps for DF-I:**

1.  **Rearrange the equation:**
    $y[n] + \sum_{k=1}^{N} a_k y[n-k] = \sum_{k=0}^{M} b_k x[n-k]$
2.  **Introduce a delay:** Treat the right-hand side as an intermediate signal, say $v[n]$, and then apply delays to $y[n]$ to obtain $y[n-k]$.
    $v[n] = \sum_{k=0}^{M} b_k x[n-k]$
    $y[n] = v[n] - \sum_{k=1}^{N} a_k y[n-k]$

**Block Diagram for DF-I:**

```
      x[n] --+----------------------->(+)---- y[n]
             |                        |
             |                        |
             |          b0            |
             +---------(*)----------+
             |          |           |
             | z^-1     |           |
             |          |           |
             |          +---------(+)----
             |          |           |  -a1
             |          | z^-1      |  (*)
             |          |           |  |
             |          +---------(+)----
             |          |           |  -a2
             |          | z^-1      |  (*)
             |          |           |  |
             |          +-----------+

        ^                                 ^
        |                                 |
        |                                 |
      x[n-1]                            y[n-1]
      x[n-2]                            y[n-2]
        ...                               ...
```

**Key Observations for DF-I:**

*   The input signal $x[n]$ goes through a cascade of FIR operations and then a feedback loop with delayed outputs of $y[n]$ being subtracted.
*   Requires $M+N$ delay elements.
*   The FIR and IIR parts are treated separately.

**Direct Form II (DF-II):**

This structure is a more optimized form by sharing delay elements between the FIR and IIR parts.

**Steps for DF-II:**

1.  **Rearrange the equation:**
    $y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$
2.  **Introduce an intermediate signal $v[n]$:**
    $v[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$ (This is not helpful for DF-II)
3.  **Alternative approach:** Consider the transfer function $H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{k=1}^{N} a_k z^{-k}}$.
    We can write this as:
    $Y(z) = (\sum_{k=0}^{M} b_k z^{-k}) V(z)$
    $V(z) = \frac{X(z)}{1 + \sum_{k=1}^{N} a_k z^{-k}}$
    Which leads to:
    $V(z) (1 + \sum_{k=1}^{N} a_k z^{-k}) = X(z)$
    $V(z) = X(z) - \sum_{k=1}^{N} a_k z^{-k} V(z)$
    In the time domain: $v[n] = x[n] - \sum_{k=1}^{N} a_k v[n-k]$
    And: $y[n] = \sum_{k=0}^{M} b_k v[n-k]$

**Block Diagram for DF-II:**

```
      x[n] -->(+)------------------>(*)---- y[n]
               ^  |                 |   b0
               |  |                 |
               |  | z^-1            |
               |  |                 |
               |  |                 +-------->(*)---- y[n]
               |  |                 |   b1
               |  | z^-1            |
               |  |                 |
               |  |                 +-------->(*)---- y[n]
               |  |                 |   b2
               |  | z^-1            |
               |  |                 |
               |  +--------->(+)----+
               |            ^ | -a1
               |            | | (*)
               |            | |
               |            | z^-1
               |            |
               |            +--------->(+)----+
               |                      ^ | -a2
               |                      | | (*)
               |                      | |
               |                      | z^-1
               |                      |
               |                      +----------->(+)
                                                ^ | -aN
                                                | | (*)
                                                | |
                                                | z^-1
                                                |
                                                +----------->(+)
```

**Key Observations for DF-II:**

*   Requires $\max(M, N)$ delay elements. If $M < N$, we can pad the numerator with zeros to make it the same order as the denominator, increasing the number of delays to $N$.
*   The structure consists of a cascade of delays, with feedback applied to the first delay element.
*   Generally preferred over DF-I due to fewer delays when $M \le N$.

**FIR Filters:**

For FIR filters, the difference equation is:
$y[n] = \sum_{k=0}^{M} b_k x[n-k]$

**Direct Form FIR:**

This is a straightforward implementation of the FIR equation.

**Block Diagram for Direct Form FIR:**

```
      x[n] -->(+)---- y[n]
             |
             |
             |     b0
             +---(*)
             |     |
             | z^-1|
             |     |
             |     +---(+)
             |     |   b1
             |     |   (*)
             |     |   |
             |     |   z^-1
             |     |   |
             |     |   +---(+)
             |     |       b2
             |     |       (*)
             |     |       |
             |     |       z^-1
             |     |       |
             |     |       +---(+)
             |     |           bM
             |     |           (*)
             |     |           |
             |     |           z^-1
             |     |           |
             +-----+-----------+
```

**Key Observations for Direct Form FIR:**

*   Requires $M$ delay elements.
*   Each tap of the FIR filter (coefficient $b_k$) multiplies a delayed version of the input.

---

### **3. Signal Flow Graph (SFG) Representation**

A signal flow graph is another graphical method for representing discrete-time systems. It is more abstract than a block diagram and focuses on the flow of signals and operations.

**Key Components of an SFG:**

*   **Nodes:** Represent signals or states.
*   **Branches (Edges):** Represent operations (multiplication, delay) and connect nodes. Each branch has a label indicating the operation.
*   **Source Nodes:** Nodes that have only outgoing branches (e.g., input signal $x[n]$).
*   **Sink Nodes:** Nodes that have only incoming branches (e.g., output signal $y[n]$).
*   **Gain:** A scalar value associated with a branch, representing multiplication by a coefficient.
*   **Delay:** Represented by a branch with a gain of $z^{-1}$.

**Translating Difference Equations to SFGs:**

Similar to block diagrams, SFGs can be derived from difference equations.

**General IIR System:**

$y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$

**SFG for Direct Form I (DF-I):**

Let $v[n] = \sum_{k=0}^{M} b_k x[n-k]$.
Then $y[n] = v[n] - \sum_{k=1}^{N} a_k y[n-k]$.

We need nodes for $x[n]$, $y[n]$, and the intermediate delayed signals.

**Steps:**

1.  **Input node:** $x[n]$.
2.  **Output node:** $y[n]$.
3.  **Delay elements:** Nodes representing $x[n-k]$ and $y[n-k]$.
4.  **Branches:**
    *   Branches from $x[n]$ to $x[n-1]$, $x[n-1]$ to $x[n-2]$, etc., with gain $z^{-1}$.
    *   Branches from $y[n]$ to $y[n-1]$, $y[n-1]$ to $y[n-2]$, etc., with gain $z^{-1}$.
    *   Branches with gains $b_k$ from $x[n-k]$ to the output summation point.
    *   Branches with gains $-a_k$ from $y[n-k]$ to the output summation point.

**SFG for DF-I (Conceptual):**

```
       x[n] ---------------------> o (intermediate signal for b0) ----> (+) -----> y[n]
        |                        |
        | z^-1                   | z^-1
        |                        |
        o ---------------------> o (intermediate signal for b1) ----> (+)
        |                        |
        | z^-1                   | z^-1
        |                        |
        o ---------------------> o (intermediate signal for bM) ----> (+)
                                  ^
                                  |
                                  | -a1
                                  o <------------------------------------
                                  | z^-1
                                  |
                                  o <------------------------------------
                                  | -a2
                                  | z^-1
                                  |
                                  ...
                                  | -aN
                                  o <------------------------------------
                                    z^-1
```

*Note: This representation is a bit simplified. A more precise SFG would clearly show the summation points.*

**SFG for Direct Form II (DF-II):**

Let $v[n]$ be the output of the delay chain.
$v[n] = x[n] - \sum_{k=1}^{N} a_k v[n-k]$
$y[n] = \sum_{k=0}^{M} b_k v[n-k]$

**Steps:**

1.  **Input node:** $x[n]$.
2.  **Output node:** $y[n]$.
3.  **Delay elements:** Nodes representing $v[n-k]$.
4.  **Branches:**
    *   Branch from $x[n]$ to the first delay element with gain 1.
    *   Branches from $v[n-k]$ to the feedback summation point with gains $-a_k$.
    *   Branches from $v[n-k]$ to the output summation point with gains $b_k$.

**SFG for DF-II (Conceptual):**

```
        x[n] ----> o ------------------> o ------------------> o ...
                 | z^-1              | z^-1              | z^-1
                 v[n-1]              v[n-2]              v[n-N]
                  ^                    ^                    ^
                  |                    |                    |
    -a1 --(+)-----'         -a2 --(+)-----'         -aN --(+)-----'
           ^                                              ^
           |                                              |
           o <--------------------------------------------'
           | b0
           |
           o <--------------------------------------------
           | b1
           |
           ...
           | bM
           |
           o <--------------------------------------------
```

**SFG for FIR Filters (Direct Form):**

$y[n] = \sum_{k=0}^{M} b_k x[n-k]$

**Steps:**

1.  **Input node:** $x[n]$.
2.  **Output node:** $y[n]$.
3.  **Delay elements:** Nodes representing $x[n-k]$.
4.  **Branches:**
    *   Branches from $x[n]$ to $x[n-1]$, etc., with gain $z^{-1}$.
    *   Branches with gains $b_k$ from $x[n-k]$ to the output summation point.

**SFG for Direct Form FIR (Conceptual):**

```
        x[n] ----> o ------------------> o ------------------> o ...
                 | z^-1              | z^-1              | z^-1
                 x[n-1]              x[n-2]              x[n-M]
                  ^                    ^                    ^
                  |                    |                    |
       b0 --- (+)----'       b1 --- (+)----'       bM --- (+)----'
                                         ^
                                         |
                                         o <------------------------
                                           y[n]
```

**Advantages of SFGs:**

*   Can be used to derive transfer functions using Mason's Gain Formula (though this is beyond the scope of this specific topic, it's a key application).
*   Provide a clear visual representation of signal flow and dependencies.
*   Useful for analyzing system properties and potential parallelization.

**Reference:**

*   **Oppenheim & Schafer, 3rd Ed.:** Chapter 4 (Structures for IIR Digital Filters) and Chapter 5 (Structures for FIR Digital Filters) provide detailed explanations and derivations of these structures. They discuss the implications of coefficient quantization and round-off noise in different structures.
*   **Mitra, 4th Ed.:** Chapter 3 (Digital Filter Implementation) covers block diagram and signal flow graph representations in detail, often with excellent visual aids.
*   **Proakis & Ingle, 3rd Ed.:** Chapter 6 (Digital Filter Realizations) offers a comprehensive overview of various structures, including direct forms, cascade, and parallel forms, discussing their merits and limitations.

---

### **4. Transposed Structures**

Transposed structures are obtained by reversing the direction of signal flow in the SFG. For LTI systems, the input-output relationship remains the same, but the structure is altered.

**How to Transpose an SFG:**

1.  Reverse the direction of all branches.
2.  Interchange source and sink nodes.
3.  Branches with gains of $z^{-1}$ remain $z^{-1}$ (they still represent a delay).

**Transposed Direct Form I (for IIR):**

If we take the DF-I SFG and transpose it, we get the Transposed DF-I structure.

**Transposed Direct Form II (for IIR):**

Similarly, transposing the DF-II SFG yields the Transposed DF-II structure.

**Transposed FIR Direct Form:**

Transposing the FIR direct form leads to the Transposed FIR Direct Form.

**Key Points about Transposed Structures:**

*   They can exhibit different sensitivities to coefficient quantization and round-off noise compared to their non-transposed counterparts.
*   For IIR filters, the transposed direct form structures are particularly important as they are closely related to lattice structures and can offer improved numerical properties.

**Reference:**

*   **Apte, 2nd Ed.:** Section 4.4 (Transposed Structures) explains how to derive them and discusses their properties.
*   **Ifeachor & Jervis, 2nd Ed.:** Chapter 4 (Digital Filter Implementation) includes sections on transposed structures and their importance.

---

### **5. Other Important Structures (Briefly Mentioned)**

While this topic focuses on block diagrams and SFGs, it's worth knowing that other structures exist, often derived from these fundamental forms or for specific design goals:

*   **Cascade Structures:** Decomposing a higher-order filter into a cascade of lower-order filters (e.g., second-order sections or "biquads"). This is often done to improve numerical stability and reduce sensitivity.
*   **Parallel Structures:** Decomposing a filter into a parallel combination of lower-order filters.
*   **Lattice Structures:** Particularly for IIR filters, lattice structures offer excellent numerical properties and modularity. They are derived using orthogonal polynomials.

---

### **6. Learning Outcomes Addressed**

*   **CO1: Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.** (While this module focuses on direct realization, understanding filter structures is foundational. DFT-based filtering is a separate method, but the underlying system representation is similar.)
*   **CO2: Design linear phase FIR filters and IIR filters of different specifications.** (Understanding structures is essential for *implementing* the designed filters.)
*   **CO3: Realise the various FIR and IIR filter structures for a given system function.** (This module directly addresses this outcome by showing how to derive block diagrams and SFGs from system functions/difference equations.)
*   **CO4: Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.** (DSP processor architecture often utilizes efficient hardware implementations of the structures discussed here.)

---

### **7. Key Points to Remember**

*   **Block diagrams and SFGs are visual tools** to represent the computational process of a discrete-time system.
*   **Delay elements ($z^{-1}$) are crucial** in representing the temporal dependencies of the system.
*   **Direct Form I and Direct Form II** are fundamental structures for IIR filters, differing in delay element usage and structure.
*   **FIR filters have simpler direct form structures** based directly on their convolution sum.
*   **Transposed structures** are derived by reversing signal flow and can have different numerical properties.
*   The choice of structure impacts **computational cost, memory, and sensitivity** to quantization.

---

### **8. Practice Questions & Exercises**

**Question 1:**

Given the following difference equation for an IIR filter:
$y[n] = 0.5 y[n-1] + 0.25 y[n-2] + x[n] + 0.7 x[n-1] + 0.1 x[n-2]$

(a) Draw the block diagram for the Direct Form I realization of this filter.
(b) Draw the block diagram for the Direct Form II realization of this filter.
(c) Draw the Signal Flow Graph for the Direct Form II realization of this filter.

**Answer 1:**

**(a) Direct Form I Block Diagram:**

```
      x[n] --+----------------------->(+)---- y[n]
             |                        |
             |          0.1           |
             +---------(*)----------+
             |          |           |
             | z^-1     |           |
             |          |           |
             |          +---------(+)----
             |          |           |  -0.25
             |          | z^-1      |  (*)
             |          |           |  |
             |          +---------(+)----
             |          |           |  -0.5
             |          | z^-1      |  (*)
             |          |           |  |
             |          +-----------+
             |
             |          0.7
             +---------(*)----------+
             |          |
             | z^-1     |
             |          |
             +---------(*)----------+
             |          |
             | z^-1     |
             |          |
             +----------+

        ^                                 ^
        |                                 |
        |                                 |
      x[n-1]                            y[n-1]
      x[n-2]                            y[n-2]
```
*(Self-correction: The diagram above needs to show the summation of x terms and y terms separately to be more precise for DF-I. Let's refine this conceptually)*

**Refined DF-I Block Diagram Concept:**

The equation is $y[n] = (0.5y[n-1] + 0.25y[n-2]) + (x[n] + 0.7x[n-1] + 0.1x[n-2])$.
The FIR part sums $x[n]$, $0.7x[n-1]$, $0.1x[n-2]$.
The IIR part subtracts $0.5y[n-1]$ and $0.25y[n-2]$ from the FIR sum.

```
x[n] --> (+) --o------> (+) ---- y[n]
      |     |FIR sum|    ^
      |     |       |    | feedback summation
      |   0.7       |    |
      o----(*)-------o    | -0.5
      | z^-1|       |    | (*)
      |     |       |    | z^-1
      o----(*)-------o    |
      | z^-1|       |    |
      |     |       |    | -0.25
      o----(*)-------o    | (*)
      | z^-1|       |    | z^-1
      |     |       |    |
      |   0.1       |    |
      o----(*)-------o----+
```
*(This is still a bit hard to draw perfectly in text. The core idea is a chain of delays for x, multiplied by coeffs, summed, and then a chain of delays for y, multiplied by coeffs, and subtracted from the x sum)*

**(b) Direct Form II Block Diagram:**

The transfer function is $H(z) = \frac{1 + 0.7z^{-1} + 0.1z^{-2}}{1 - 0.5z^{-1} - 0.25z^{-2}}$.
$Y(z) = (1 + 0.7z^{-1} + 0.1z^{-2}) V(z)$
$V(z) = \frac{X(z)}{1 - 0.5z^{-1} - 0.25z^{-2}}$

$v[n] = x[n] + 0.5 v[n-1] + 0.25 v[n-2]$
$y[n] = v[n] + 0.7 v[n-1] + 0.1 v[n-2]$

```
      x[n] -->(+)------------------>(*)---- y[n]
               ^  |                 |   1
               |  |                 |
               |  | z^-1            |
               |  |                 |
               |  |                 +-------->(*)---- y[n]
               |  |                 |   0.7
               |  | z^-1            |
               |  |                 |
               |  |                 +-------->(*)---- y[n]
               |  |                 |   0.1
               |  | z^-1            |
               |  |                 |
               |  +--------->(+)----+
               |            ^ | 0.5
               |            | | (*)
               |            | |
               |            | z^-1
               |            |
               |            +--------->(+)----+
               |                      ^ | 0.25
               |                      | | (*)
               |                      | |
               |                      | z^-1
               |                      |
               |                      +----------->(+)
```

**(c) Signal Flow Graph for Direct Form II:**

```
        x[n] ----> o ------------------> o ------------------> o
                 | z^-1              | z^-1
                 v[n-1]              v[n-2]
                  ^                    ^
                  |                    |
     0.5 --(+)-----'         0.25 --(+)-----'
            ^                               ^
            |                               |
            o <-----------------------------'
            | 1
            |
            o <----------------------------
            | 0.7
            |
            o <----------------------------
            | 0.1
            |
            o ---------------------------> y[n]
```

**Question 2:**

Derive the direct form realization block diagram for the FIR filter with system function:
$H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3}$

**Answer 2:**

The difference equation is $y[n] = x[n] + 2x[n-1] + 3x[n-2] + 4x[n-3]$.

```
      x[n] -->(+)---- y[n]
             |
             |
             |     1
             +---(*)
             |     |
             | z^-1|
             |     |
             |     +---(+)
             |     |   2
             |     |   (*)
             |     |   |
             |     |   z^-1
             |     |   |
             |     |   +---(+)
             |     |       3
             |     |       (*)
             |     |       |
             |     |       z^-1
             |     |       |
             |     |       +---(+)
             |     |           4
             |     |           (*)
             |     |           |
             |     |           z^-1
             |     |           |
             +-----+-----------+
```

**Question 3:**

What is the primary advantage of Direct Form II over Direct Form I for IIR filters?

**Answer 3:**

The primary advantage of Direct Form II over Direct Form I is that it uses fewer delay elements, specifically $\max(M, N)$ delays compared to $M+N$ delays in DF-I. This can lead to reduced memory requirements and potentially lower hardware complexity.

---

### **9. Further Exploration (Optional)**

*   **Coefficient Sensitivity:** Research how different structures (DF-I, DF-II, Transposed DF-II) exhibit varying sensitivities to changes in filter coefficients, especially near poles and zeros.
*   **Round-off Noise:** Investigate how the placement of delay elements and arithmetic operations in different structures affects the accumulation of round-off noise.
*   **Alternative Structures:** Explore the block diagrams and SFGs for cascade and parallel realizations and understand why they are often preferred for higher-order filters.

---

This concludes our exploration of block diagram and signal flow graph representations for discrete-time filters. Mastering these concepts will provide a strong foundation for understanding the implementation and behavior of digital filters.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
