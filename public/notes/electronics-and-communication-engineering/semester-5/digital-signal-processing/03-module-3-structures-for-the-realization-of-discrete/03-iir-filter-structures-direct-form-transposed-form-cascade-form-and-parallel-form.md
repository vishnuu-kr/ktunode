---
title: "IIR Filter Structures: Direct Form, Transposed Form, Cascade Form and 
Parallel Form"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Structures for the realization of Discrete"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe997"
status: "completed"
scrapedAt: "2026-05-23T17:55:35.813Z"
---
# DIGITAL SIGNAL PROCESSING: Module 3 - Structures for the Realization of Discrete

## Topic: IIR Filter Structures: Direct Form, Transposed Form, Cascade Form, and Parallel Form

---

### Introduction to IIR Filter Structures

Infinite Impulse Response (IIR) filters are characterized by their feedback loops, which allow a system's output to depend on its past outputs as well as past and present inputs. This feedback mechanism leads to a more computationally efficient design compared to FIR filters for achieving a desired frequency response, but it also introduces potential stability issues. Realizing these filters involves implementing their difference equations using digital components such as adders, multipliers, and delay elements (often represented by $z^{-1}$ blocks). The structure of this implementation directly impacts computational efficiency, coefficient sensitivity, and round-off noise.

This module focuses on common structures for realizing IIR filters, providing different ways to implement the same system function.

---

### Learning Outcomes (LOs) Addressed in this Topic:

*   **LO1:** Understand the basic difference equation of an IIR filter and its relation to the system function.
*   **LO2:** Relate the system function of an IIR filter to its realization structures.
*   **LO3:** Analyze and compare the properties of different IIR filter structures in terms of computational requirements, memory, and sensitivity.
*   **LO4:** Visualize and draw the block diagrams for Direct Form I and II, Transposed, Cascade, and Parallel forms of IIR filters.
*   **LO5:** Understand how the choice of structure can impact the implementation of an IIR filter.

---

### Course Outcomes (COs) Alignment:

*   **CO3: Realise the various FIR and IIR filter structures for a given system function. (Knowledge Level: K3)**
    *   This topic directly addresses CO3 by detailing the realization of IIR filters through different structures. Students will learn to translate a given system function into a block diagram representation.

---

### Key Concepts and Definitions:

*   **Difference Equation:** A mathematical expression that defines the relationship between the input signal $x[n]$, the output signal $y[n]$, and their past values for a digital filter. For a general IIR filter, it is given by:
    $y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{j=1}^{N} a_j y[n-j]$

*   **System Function (Transfer Function):** The Z-transform of the impulse response $h[n]$, or equivalently, the ratio of the Z-transform of the output $Y(z)$ to the Z-transform of the input $X(z)$, assuming zero initial conditions. For an IIR filter, it is expressed as:
    $H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{j=1}^{N} a_j z^{-j}}$
    Where:
    *   $b_k$ are the feedforward coefficients (related to the numerator polynomial).
    *   $a_j$ are the feedback coefficients (related to the denominator polynomial, with $a_0 = 1$).

*   **Delay Elements ($z^{-1}$):** These represent a unit delay in the discrete-time domain, meaning they shift a signal one sample into the future.

*   **Adders:** Used to sum multiple signal components.

*   **Multipliers:** Used to scale signal components by filter coefficients.

---

### 1. Direct Form I Structure

The Direct Form I structure is a direct implementation of the IIR filter's difference equation. It separates the numerator and denominator parts of the system function into distinct filter sections.

**System Function:**
$H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_N z^{-N}}$

**Difference Equation:**
$y[n] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M] - a_1 y[n-1] - a_2 y[n-2] - \dots - a_N y[n-N]$

**Realization:**
This form can be visualized by splitting the system function into two parts:
$H(z) = H_{num}(z) H_{den}(z)$
Where:
*   $H_{num}(z) = b_0 + b_1 z^{-1} + \dots + b_M z^{-M}$ (a Finite Impulse Response filter)
*   $H_{den}(z) = \frac{1}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_N z^{-N}}$ (an Infinite Impulse Response filter)

The Direct Form I structure implements $H_{num}(z)$ using a tapped delay line for the input signal $x[n]$ and $H_{den}(z)$ using a tapped delay line for the output signal $y[n]$ with feedback.

**Block Diagram (for N=2, M=2):**

```
      x[n] ----+----------------> (+) ------> y[n]
               |                  ^
               | b0               |
               |                  | a1
               +--- z^-1 ---+      |
               |            |      |
               | b1         +--- z^-1 ---+
               |            |            |
               +--- z^-1 ---+            | a2
               |            |            |
               | b2         +--- z^-1 ---+
               |            |
               +------------+
```
*(Note: The diagram above is a simplified representation. A full Direct Form I involves two cascaded blocks. One for numerator, one for denominator. The 'n' indicates the current input, and the '+' represents the summation points)*

**Detailed Block Diagram Concept:**

*   **Numerator Part:** A FIR filter operating on $x[n]$ with coefficients $b_0, b_1, \dots, b_M$. This produces an intermediate signal $w[n]$:
    $w[n] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$
*   **Denominator Part:** An IIR filter (recursive part) operating on $w[n]$ as input and producing the output $y[n]$:
    $y[n] = w[n] - a_1 y[n-1] - a_2 y[n-2] - \dots - a_N y[n-N]$

**Number of Components (for M=N):**
*   Delay elements: $M + N$ (or $2N$ if $M=N$)
*   Multipliers: $M + 1 + N$ (or $2N+1$ if $M=N$)
*   Adders: $M + N$ (or $2N$ if $M=N$)

**Advantages:**
*   Direct implementation of the difference equation.
*   Easy to understand.

**Disadvantages:**
*   Requires a large number of delay elements and multipliers, making it less computationally efficient and memory-intensive compared to other forms.
*   Can exhibit high sensitivity to coefficient quantization, particularly for narrow-band filters.

---

### 2. Direct Form II Structure

The Direct Form II structure is a more efficient realization that reduces the number of delay elements. It exploits the fact that the numerator and denominator polynomials are independent and can be rearranged.

**Realization:**
The Direct Form II structure can be derived from Direct Form I by realizing the system function as:
$H(z) = \left( \frac{1}{1 + a_1 z^{-1} + \dots + a_N z^{-N}} \right) \left( b_0 + b_1 z^{-1} + \dots + b_M z^{-M} \right)$

This implementation uses a single delay line for the intermediate signal $w[n]$. The feedback part is realized first, and then the feedforward part operates on the output of the feedback section.

**Block Diagram (for N=2, M=2):**

```
      x[n] ----> (+) ------> (+) ------> y[n]
               |   ^      |
               |   | a1   | b0
               |   |      |
               |   +--z^-1-+
               |          |
               |   +--z^-1-+
               |          | a2
               |          |
               |   +--z^-1-+
               |          | b1
               |          |
               |          +--z^-1-+
               |                    |
               |          +--z^-1-+
               |                    | b2
               |                    |
               +--------------------+
```
*(Note: Again, a simplified representation. The main idea is a single cascade of delays where feedback taps are subtracted from the input signal before being passed through the delays, and then feedforward taps are added.)*

**Detailed Block Diagram Concept:**

1.  The input $x[n]$ is processed by the feedback section:
    $w[n] = x[n] - a_1 w[n-1] - a_2 w[n-2] - \dots - a_N w[n-N]$
    This is equivalent to filtering $x[n]$ with $1/(1 + \sum a_j z^{-j})$.

2.  The output of the feedback section, $w[n]$, is then processed by the feedforward section:
    $y[n] = b_0 w[n] + b_1 w[n-1] + \dots + b_M w[n-M]$
    This is equivalent to multiplying $W(z)$ by the numerator polynomial $(b_0 + b_1 z^{-1} + \dots + b_M z^{-M})$.

**Number of Components (for M=N):**
*   Delay elements: $N$ (This is the significant reduction compared to Direct Form I)
*   Multipliers: $N + 1 + M$ (or $2N+1$ if $M=N$)
*   Adders: $N + M$ (or $2N$ if $M=N$)

**Advantages:**
*   **Reduced number of delay elements:** This makes it more memory-efficient and potentially faster.
*   **Reduced number of multipliers (compared to Direct Form I for the same number of delays).**

**Disadvantages:**
*   **Coefficient Sensitivity:** Can still be sensitive to coefficient quantization, although generally less so than Direct Form I. The feedback path is more critical.
*   **Intermediate Signal:** The intermediate signal $w[n]$ is not directly observable, which can make debugging or analysis slightly more complex than Direct Form I.

**Reference (Ingle & Proakis, 3rd Ed.):** Chapter 7 discusses the direct forms, highlighting the $N$ delays in Direct Form II as a major advantage. They also discuss the sensitivity issues.

---

### 3. Transposed Form Structures

Transposition is a technique used to rearrange the block diagram of a digital filter without changing its input-output characteristics. The transposed structure is obtained by interchanging the roles of signal flow and time. In terms of block diagrams, this means:
*   Interchanging adders and signal branching points.
*   Interchanging input and output.
*   Reversing the direction of all signal flows (changing $z^{-1}$ to $z$).

The transposed structure for a given filter is *equivalent* to the original filter.

**Derivation of Transposed Form:**

Consider the system function:
$H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{j=1}^{N} a_j z^{-j}}$

This implies:
$Y(z) \left(1 + \sum_{j=1}^{N} a_j z^{-j}\right) = X(z) \left(\sum_{k=0}^{M} b_k z^{-k}\right)$

Rearranging for $X(z)$:
$X(z) = Y(z) \left(1 + \sum_{j=1}^{N} a_j z^{-j}\right) - X(z) \left(\sum_{j=1}^{N} a_j z^{-j}\right)$

This is not directly helpful for transposition. A better approach is to work with the difference equation and then transpose the block diagram.

Alternatively, if $H(z)$ represents the transfer function, its transposed version $H_T(z)$ is obtained by replacing $z^{-1}$ with $z$ and swapping input and output. For a rational transfer function, the transposed *system* has a transfer function $H_T(z) = H(z^{-1})$. However, to obtain the transposed *structure* that implements $H(z)$, we transpose the block diagram of the original structure.

**Transposed Direct Form I:**
By transposing the Direct Form I structure, we obtain the Transposed Direct Form I.

**Block Diagram Concept (Transposed Direct Form I):**
Instead of signals flowing forward through delays, they flow backward. Feedback paths become feedforward, and feedforward paths become feedback.

**Transposed Direct Form II:**
Similarly, transposing the Direct Form II structure yields the Transposed Direct Form II.

**Number of Components (Transposed Forms):**
The number of delay elements, multipliers, and adders remain the same as their corresponding non-transposed forms.

**Advantages:**
*   **Causality:** The transposed form naturally handles causal systems.
*   **Interchangeability:** The transposed structure implements the same filter, so it can be used interchangeably with the original structure.
*   **Analysis:** In some analysis scenarios (e.g., analyzing the effect of disturbances), the transposed form can be more convenient.

**Disadvantages:**
*   **Coefficient Sensitivity:** Similar sensitivity issues to Direct Form I and II can persist.

**Reference (Oppenheim & Schafer, 3rd Ed.):** Chapter 6 discusses the transposition theorem and its application to filter structures.

---

### 4. Cascade Form Structure

The cascade form realizes a transfer function by factoring it into a product of lower-order sub-filters, which are then interconnected in series.

**System Function:**
$H(z) = H_1(z) H_2(z) \dots H_k(z)$

Each $H_i(z)$ is typically a second-order section (biquad) or a first-order section. This decomposition is beneficial because:
*   Higher-order IIR filters can be decomposed into simpler, more manageable second-order sections.
*   Second-order sections are easier to design and optimize for coefficient sensitivity and round-off noise.
*   It simplifies the implementation and can be more modular.

**Common Sub-filters:**
*   **First-order section:**
    $H_1(z) = \frac{b_0 + b_1 z^{-1}}{1 + a_1 z^{-1}}$
*   **Second-order section (biquad):**
    $H_i(z) = \frac{b_{i0} + b_{i1} z^{-1} + b_{i2} z^{-2}}{1 + a_{i1} z^{-1} + a_{i2} z^{-2}}$

The overall system function $H(z)$ is obtained by cascading these sections. Each section can be implemented using a Direct Form I or Direct Form II structure.

**Block Diagram Concept:**
Multiple instances of Direct Form I or Direct Form II (for first or second-order sections) are connected in series. The output of one section becomes the input to the next.

```
      x[n] --> [Section 1] --> [Section 2] --> ... --> [Section K] --> y[n]
```
Where each `[Section i]` is a realization of a lower-order transfer function, typically using Direct Form II for efficiency.

**Number of Components:**
The total number of components is the sum of components for each sub-filter section. For example, if an $N$-th order filter is decomposed into $N/2$ second-order sections (assuming $N$ is even), and each second-order section uses Direct Form II:
*   Delay elements: $(N/2) \times 2 = N$
*   Multipliers: $(N/2) \times (2+1+2) = 5N/2$
*   Adders: $(N/2) \times (2+2) = 2N$

**Advantages:**
*   **Reduced Coefficient Sensitivity:** By breaking down the filter into lower-order sections, the overall sensitivity to coefficient quantization is often reduced. This is a major advantage.
*   **Modularity:** Easier to design, implement, and debug.
*   **Flexibility:** Allows for different orders of sections and different types of sub-filters.
*   **Stability:** Can help manage stability by ensuring each section is stable.

**Disadvantages:**
*   **Increased Number of Multipliers (potentially):** Compared to a single Direct Form II for the same filter order, the cascade form might use more multipliers if the intermediate factoring leads to many first-order sections or if the order of sub-filters is not optimized. However, typically the sensitivity benefits outweigh this.
*   **Order of Sections:** The order in which the second-order sections are cascaded can affect the overall round-off noise and coefficient sensitivity.

**Reference (Mitra, 4th Ed.):** Chapter 8 discusses canonical forms and cascaded structures, emphasizing the advantages for practical implementation.

---

### 5. Parallel Form Structure

The parallel form realizes a transfer function by decomposing it into a sum of lower-order sub-filters, which are then interconnected in parallel.

**System Function:**
$H(z) = H_1(z) + H_2(z) + \dots + H_k(z)$

Similar to the cascade form, the decomposition usually involves first-order and second-order sections. A general $N$-th order IIR filter can be decomposed into first-order and second-order terms via partial fraction expansion.

**Decomposition:**
$H(z) = A_0 + \sum_{i=1}^{L} \frac{A_i}{1 - p_i z^{-1}} + \sum_{j=1}^{Q} \frac{B_{j0} + B_{j1} z^{-1}}{1 - c_{j1} z^{-1} - c_{j2} z^{-2}}$

Where:
*   $A_0$ is a constant term (if $M \ge N$).
*   $\frac{A_i}{1 - p_i z^{-1}}$ are first-order terms corresponding to real poles $p_i$.
*   $\frac{B_{j0} + B_{j1} z^{-1}}{1 - c_{j1} z^{-1} - c_{j2} z^{-2}}$ are second-order terms corresponding to complex conjugate poles.

Each of these terms is implemented as a separate sub-filter (usually in Direct Form I or II), and their outputs are summed together.

**Block Diagram Concept:**
Multiple instances of Direct Form I or Direct Form II (for first or second-order sections) are connected in parallel. The input signal is fed to all sections, and their outputs are summed to produce the final output.

```
                  +-----> [Section 1] ----+
                  |                      |
x[n] ------> -----> [Section 2] ----+     | ------> (+) ------> y[n]
            |     |                      |             ^
            |     | ...                  |             |
            |     |                      |             |
            +-----> [Section K] ----+
```
Where each `[Section i]` is a realization of a lower-order transfer function, and the final (+) sums the outputs of all sections.

**Number of Components:**
Similar to the cascade form, the total number of components is the sum of components for each sub-filter section.

**Advantages:**
*   **Reduced Coefficient Sensitivity:** Like the cascade form, decomposition into lower-order sections can reduce sensitivity.
*   **Numerical Stability:** Can be beneficial for numerical stability.
*   **Modularity:** Similar modularity benefits as the cascade form.

**Disadvantages:**
*   **Requires Partial Fraction Expansion:** The process of decomposing the transfer function using partial fraction expansion can be computationally intensive and requires finding the poles of the filter.
*   **Number of Adders:** The parallel form typically requires more adders than the cascade form due to the final summation stage.

**Reference (Apte, 2nd Ed.):** Chapter 7 discusses different realization structures, including parallel realization through partial fraction expansion.

---

### Comparison of IIR Filter Structures

| Feature                | Direct Form I | Direct Form II | Transposed Form | Cascade Form    | Parallel Form   |
| :--------------------- | :------------ | :------------- | :-------------- | :-------------- | :-------------- |
| **Delay Elements**     | $M+N$ (max $2N$) | $N$ (min)      | $M+N$ (max $2N$) | Depends on sub-filters (e.g., $N$ for $N/2$ biquads) | Depends on sub-filters (e.g., $N$ for $N/2$ biquads) |
| **Multipliers**        | $M+1+N$ (max $2N+1$) | $M+1+N$ (max $2N+1$) | $M+1+N$ (max $2N+1$) | Sum of sub-filters' multipliers | Sum of sub-filters' multipliers |
| **Adders**             | $M+N$ (max $2N$) | $M+N$ (max $2N$) | $M+N$ (max $2N$) | Sum of sub-filters' adders | Sum of sub-filters' adders + final summing adders |
| **Coefficient Sensitivity** | High          | Moderate       | Moderate        | Low (preferred) | Low             |
| **Memory Usage**       | High          | Low            | High            | Moderate        | Moderate        |
| **Computational Load** | High          | Moderate       | Moderate        | Moderate        | Moderate        |
| **Modularity**         | Low           | Low            | Low             | High (preferred)| High            |
| **Ease of Design**     | Simple        | Simple         | Simple          | Moderate        | Moderate (requires PFE) |

**Important Considerations for Practical Implementation:**

*   **Coefficient Quantization:** The finite precision of digital arithmetic leads to quantization errors in filter coefficients. Structures with lower coefficient sensitivity (like cascade and parallel forms) are generally preferred for practical implementations to maintain filter performance.
*   **Round-off Noise:** Intermediate signal multiplications and additions can introduce round-off noise. The structure choice can influence the overall noise level. Using higher-order sections (biquads) in cascade or parallel forms often helps in managing round-off noise.
*   **Hardware/Software Constraints:** The number of available multipliers, adders, and memory locations can dictate the choice of structure. Direct Form II is often a good balance between efficiency and simplicity.

---

### Practice Questions/Exercises

**Question 1:**
A digital filter is described by the following system function:
$H(z) = \frac{1 + 2z^{-1} + z^{-2}}{1 - 0.5z^{-1} + 0.25z^{-2}}$

**(a)** Write the difference equation for this filter.
**(b)** Draw the Direct Form I realization of this filter.
**(c)** Draw the Direct Form II realization of this filter.
**(d)** What is the main advantage of Direct Form II over Direct Form I?

**Answer 1:**
**(a)** The difference equation is:
$y[n] = x[n] + 2x[n-1] + x[n-2] - (-0.5)y[n-1] - (0.25)y[n-2]$
$y[n] = x[n] + 2x[n-1] + x[n-2] + 0.5y[n-1] - 0.25y[n-2]$

**(b)** **Direct Form I:** Requires two cascaded sections, one for the numerator and one for the denominator.
*   Numerator section: $w[n] = x[n] + 2x[n-1] + x[n-2]$
*   Denominator section: $y[n] = w[n] + 0.5y[n-1] - 0.25y[n-2]$
    This would involve a total of 4 delay elements ($z^{-1}, z^{-2}$ for numerator and $z^{-1}, z^{-2}$ for denominator).

**(c)** **Direct Form II:** Uses a single delay line.
*   Let $w[n]$ be the output of the recursive part.
    $w[n] = x[n] + 0.5w[n-1] - 0.25w[n-2]$
*   Then the output $y[n]$ is obtained from $w[n]$:
    $y[n] = w[n] + 2w[n-1] + w[n-2]$
    This requires only 2 delay elements ($z^{-1}, z^{-2}$).

**(d)** The main advantage of Direct Form II over Direct Form I is the **reduced number of delay elements**. Direct Form II uses $N$ delay elements (where $N$ is the order of the denominator polynomial), whereas Direct Form I uses $M+N$ delay elements.

---

**Question 2:**
Consider a filter with the transfer function:
$H(z) = \frac{1 + z^{-1}}{1 - 0.5z^{-1}}$

**(a)** Draw the Direct Form II realization of this filter.
**(b)** What is the transfer function of the transposed structure of the Direct Form II realization?

**Answer 2:**
**(a)** **Direct Form II Realization:**
$H(z) = \frac{1 + z^{-1}}{1 - 0.5z^{-1}} = \left(\frac{1}{1 - 0.5z^{-1}}\right) (1 + z^{-1})$
*   Recursive part: $w[n] = x[n] + 0.5w[n-1]$
*   Non-recursive part: $y[n] = w[n] + w[n-1]$

**Block Diagram (Direct Form II):**

```
      x[n] ----> (+) ------> (+) ------> y[n]
               |   ^      |
               |   | 0.5  | 1
               |   |      |
               |   +--z^-1-+
               |          | 1
               |          |
               +----------+
```

**(b)** The transfer function of the transposed structure of a filter with transfer function $H(z)$ is $H_T(z) = H(z^{-1})$.
So, for $H(z) = \frac{1 + z^{-1}}{1 - 0.5z^{-1}}$,
The transposed transfer function is:
$H_T(z) = H(z^{-1}) = \frac{1 + (z^{-1})^{-1}}{1 - 0.5(z^{-1})^{-1}} = \frac{1 + z}{1 - 0.5z}$

---

**Question 3:**
Why are cascade and parallel forms generally preferred over direct forms for practical IIR filter implementations, especially when designing filters with sharp frequency cutoffs?

**Answer 3:**
Cascade and parallel forms are generally preferred for practical IIR filter implementations due to their **reduced sensitivity to coefficient quantization**.

*   **Coefficient Sensitivity:** Filters with sharp frequency cutoffs (e.g., bandpass filters with narrow passbands) often have poles and zeros that are close together in the z-plane. In direct form realizations, these clustered poles and zeros can lead to a high sensitivity of the frequency response to small changes in the coefficients. Quantization errors in coefficients can significantly alter the filter's behavior, potentially leading to instability or a degraded frequency response.
*   **Decomposition:** Cascade and parallel forms break down a high-order filter into a series or sum of lower-order sections (typically second-order sections, or biquads). Each of these sections can be designed and implemented in a way that minimizes coefficient sensitivity and round-off noise. By carefully selecting the poles and zeros for each biquad and the order of cascading/summing, the overall sensitivity of the filter can be significantly reduced, leading to a more robust and predictable implementation.

---

### Important Points to Remember:

*   **Direct Form I:** Direct mapping of the difference equation, high delay elements.
*   **Direct Form II:** Minimizes delay elements, still susceptible to coefficient sensitivity.
*   **Transposed Form:** Equivalent structure to the original, obtained by reversing signal flow.
*   **Cascade Form:** Factorizes $H(z)$ into lower-order sections in series. Reduces coefficient sensitivity, highly modular. Preferred for practical designs.
*   **Parallel Form:** Decomposes $H(z)$ into lower-order sections in parallel using partial fraction expansion. Also reduces coefficient sensitivity.

The choice of structure is a trade-off between computational efficiency, memory usage, and robustness against numerical errors (coefficient quantization and round-off noise). For most practical IIR filter designs, **cascade and parallel forms are preferred due to their superior performance in handling coefficient sensitivity.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
