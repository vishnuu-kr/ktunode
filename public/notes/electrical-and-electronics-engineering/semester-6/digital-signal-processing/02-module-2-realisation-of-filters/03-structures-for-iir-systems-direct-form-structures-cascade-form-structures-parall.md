---
title: "Structures for IIR Systems: Direct-Form Structures, Cascade-Form Structures, Parallel-Form Structures, Lattice Structures for IIR Systems."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Realisation of Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36660"
status: "completed"
scrapedAt: "2026-05-23T16:26:41.055Z"
---
# DIGITAL SIGNAL PROCESSING: Module 2: Realisation of Filters

## Topic: Structures for IIR Systems

### 1. Introduction to IIR Filter Realizations

Infinite Impulse Response (IIR) filters are characterized by their feedback paths, which allow past output samples to influence the current output. This feedback is what leads to the "infinite" duration of the impulse response. The realization of an IIR filter refers to the way its difference equation is translated into a block diagram or a computational structure using delays, multipliers, and adders. The choice of structure significantly impacts computational complexity, sensitivity to coefficient quantization, and round-off error accumulation.

**Key Concepts:**

*   **Difference Equation:** The fundamental mathematical representation of a digital filter, relating the current output to past inputs and past outputs. For a general IIR filter:
    $$y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$$
    where:
    *   $y[n]$ is the output signal at time $n$.
    *   $x[n]$ is the input signal at time $n$.
    *   $b_k$ are the feedforward coefficients.
    *   $a_k$ are the feedback coefficients.
    *   $M$ is the order of the feedforward part.
    *   $N$ is the order of the feedback part.

*   **Transfer Function:** The Z-transform of the impulse response, representing the filter in the Z-domain.
    $$H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{k=1}^{N} a_k z^{-k}}$$

*   **Block Diagram:** A graphical representation of the filter's structure, showing the connections between system components.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Chapter 7 (Introduction to Digital Filters) will cover the basics of difference equations and transfer functions.
*   **Oppenheim & Schafer (2nd Ed.):** Chapter 5 (Structures for Realization of Systems) will provide foundational concepts on filter structures.

**Alignment with Course Outcomes:**

*   **CO2 (Realise IIR and FIR filters):** This module directly addresses the realization of IIR filters.
*   **CO1 (Analyse discrete-time systems using DFT):** While not directly using DFT for realization, understanding the frequency response (which can be analyzed via DFT) informs the design and evaluation of these structures.

---

### 2. Direct-Form Structures

Direct-form structures are the most straightforward realizations derived directly from the difference equation or transfer function. They are conceptually simple but can have disadvantages in terms of coefficient sensitivity and round-off errors.

#### 2.1. Direct-Form I (DF-I) Structure

The DF-I structure directly implements the difference equation. It is realized by breaking down the transfer function into two separate parts: a non-recursive (FIR) part and a recursive (IIR) part.

**Derivation:**

The difference equation can be rewritten as:
$$y[n] = b_0 x[n] + b_1 x[n-1] + ... + b_M x[n-M] - a_1 y[n-1] - ... - a_N y[n-N]$$

This can be implemented by first computing an intermediate signal $v[n]$ which is the output of the non-recursive part:
$$v[n] = \sum_{k=0}^{M} b_k x[n-k]$$

Then, the output $y[n]$ is computed using the feedback:
$$y[n] = v[n] - \sum_{k=1}^{N} a_k y[n-k]$$

**Block Diagram (DF-I):**

```
      x[n] --+---------+     +---------+     +---------+
             | z^-1    | --> | z^-1    | --> | ...     | -->  x[n-M]
             |         |     |         |     |         |
             +---------+     +---------+     +---------+
                  |               |               |
                  v               v               v
      b0*x[n] ----+               b1*x[n-1] ----+     bM*x[n-M] ----+
                  |                               |                 |
                  +-----------+                   +-----------------+
                              |                                       |
                              v                                       v
      +---------+     +---------+     +---------+                   +-----------+
y[n] <----|  +    | <---|  +    | <---|  +    | <-------------------|  -a1*y[n-1] |
      |  ^    |     |  ^    |     |  ^    |     |                   |           |
      |  |    |     |  |    |     |  |    |     |                   |           |
      |  |    |     |  |    |     |  |    |     |                   |           |
      |  b0*  |     |  b1*  |     |  bM*  |     |                   |           |
      +---------+     +---------+     +---------+                   |           |
                                                                      |           |
                                                                      v           v
                                                              +---------+     +---------+
                                                              | z^-1    | --> | ...     | --> y[n-N]
                                                              |         |     |         |
                                                              +---------+     +---------+

```
*(Note: This is a simplified textual representation. A proper block diagram would show multipliers and adders explicitly.)*

**Key Features of DF-I:**

*   **Number of delays:** $M + N$.
*   **Number of multipliers:** $M + N + 1$.
*   **Number of adders:** $M + N$.
*   **Pros:** Directly implements the difference equation.
*   **Cons:**
    *   Requires separate delay chains for input and output, making it less efficient in terms of hardware/software.
    *   Can be sensitive to coefficient quantization, especially for feedback coefficients.
    *   Round-off error can accumulate due to the cascaded nature of operations.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.1 (Direct-Form Realizations).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.1.1 (Direct-Form I).

#### 2.2. Direct-Form II (DF-II) Structure

The DF-II structure is derived by realizing the numerator and denominator polynomials of the transfer function in a cascaded manner. This is more efficient in terms of the number of delay elements.

**Derivation:**

Let the transfer function be:
$$H(z) = \frac{B(z)}{A(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{k=1}^{N} a_k z^{-k}}$$

We can rewrite $H(z)$ as the product of two transfer functions:
$$H(z) = \left(\sum_{k=0}^{M} b_k z^{-k}\right) \left(\frac{1}{1 + \sum_{k=1}^{N} a_k z^{-k}}\right)$$

Let $H_1(z) = \frac{1}{1 + \sum_{k=1}^{N} a_k z^{-k}}$ and $H_2(z) = \sum_{k=0}^{M} b_k z^{-k}$.
Then $H(z) = H_1(z) H_2(z)$.

The output $Y(z) = H_1(z) H_2(z) X(z)$. Let $V(z) = H_1(z) X(z)$.
Then $Y(z) = H_2(z) V(z)$.

This leads to two difference equations:
1.  $V(n) + \sum_{k=1}^{N} a_k v[n-k] = x[n]$
2.  $y[n] = \sum_{k=0}^{M} b_k v[n-k]$

**Block Diagram (DF-II):**

```
      x[n] --+----------------------------------------+
             |                                        |
             v                                        |
      +---------+     +---------+     +---------+     |
      |  +    | --> |  +    | --> |  +    | --> | ... | --> v[n-N]
      |  ^    |     |  ^    |     |  ^    |     |     |
      |  |    |     |  |    |     |  |    |     |     |
      |  |    |     |  |    |     |  |    |     |     |
      |  1    |     | -a1   |     | -a2   |     |     |
      +---------+     +---------+     +---------+     |
             |               |               |         |
             +---------------+---------------+---------+
                                             |
                                             v
                                         +---------+
                                         |  +    | --> v[n]
                                         |  ^    |
                                         |  |    |
                                         |  b0   |
                                         +---------+
                                             |
                                             v
                                         +---------+
                                         |  +    | --> y[n]
                                         |  ^    |
                                         |  |    |
                                         |  b1   |
                                         +---------+
                                             |
                                             v
                                         +---------+
                                         |  +    | --> ...
                                         |  ^    |
                                         |  |    |
                                         |  bM   |
                                         +---------+

```
*(Note: This is a simplified textual representation. A proper block diagram would show multipliers and adders explicitly.)*

**Key Features of DF-II:**

*   **Number of delays:** $\max(M, N)$. If $M=N$, then $N$ delays.
*   **Number of multipliers:** $M + N + 1$.
*   **Number of adders:** $M + N$.
*   **Pros:**
    *   More efficient in terms of delay elements compared to DF-I.
    *   The feedback and feedforward paths are separated, which can lead to better performance in some cases.
*   **Cons:**
    *   Still susceptible to coefficient sensitivity and round-off errors. The order in which $H_1(z)$ and $H_2(z)$ are implemented can affect performance.

**Important Point to Remember:** DF-II uses the minimum number of delays required to realize the filter, making it more hardware-efficient.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.1 (Direct-Form Realizations).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.1.1 (Direct-Form II).

#### 2.3. Transposed Direct-Form Structures

Transposed structures are obtained by interchanging the roles of inputs and outputs and reversing the direction of signal flow in the block diagram. For direct-form structures, this means exchanging $x[n]$ and $y[n]$, and reversing the connections of delay elements.

**Transposed Direct-Form I (TDF-I):**

If we transpose the DF-I structure, we get the TDF-I structure. It has the same number of delays, multipliers, and adders as DF-I.

**Transposed Direct-Form II (TDF-II):**

If we transpose the DF-II structure, we get the TDF-II structure. It also has the same number of delays, multipliers, and adders as DF-II.

**Key Features of Transposed Structures:**

*   **Equivalent Transfer Function:** Transposing a structure does not change its overall input-output relationship.
*   **Sensitivity and Round-off Errors:** While the transfer function is the same, the accumulation of round-off errors and sensitivity to coefficient quantization might differ due to the reordering of operations. This can be significant in practical implementations.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.2 (Transposed Direct-Form Realizations).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.2 (Transposed Structures).

---

### 3. Cascade-Form Structures

Cascade-form structures realize an IIR filter by cascading (connecting in series) simpler second-order (biquad) sections. This approach is particularly useful for higher-order filters and offers advantages in terms of coefficient sensitivity and numerical stability.

**Derivation:**

A general IIR transfer function can be factored into a product of first-order and second-order sections:
$$H(z) = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{k=1}^{N} a_k z^{-k}} = A \prod_{k=1}^{K_1} \frac{c_{k0} + c_{k1} z^{-1}}{1 + d_{k1} z^{-1}} \prod_{k=1}^{K_2} \frac{e_{k0} + e_{k1} z^{-1} + e_{k2} z^{-2}}{1 + f_{k1} z^{-1} + f_{k2} z^{-2}}$$
where $K_1 = M - N$ (if $M>N$) and $K_2 = N$. The constant $A$ accounts for the overall gain.

Each factor represents a biquad section. The overall transfer function is the product of these sections:
$$H(z) = H_1(z) H_2(z) \dots H_L(z)$$

The implementation involves realizing each biquad section using a standard structure (e.g., DF-II) and then connecting them in series.

**Block Diagram (Cascade Form):**

```
x[n] --> [ Stage 1 ] --> [ Stage 2 ] --> ... --> [ Stage L ] --> y[n]
```

Each `[ Stage i ]` is a realization of a biquad section, typically implemented as a second-order Direct-Form II structure:

$$H_i(z) = K_i \frac{1 + b_{i1} z^{-1} + b_{i2} z^{-2}}{1 + a_{i1} z^{-1} + a_{i2} z^{-2}}$$

**Key Features of Cascade Form:**

*   **Number of delays:** Each second-order section requires 2 delays. For $N$ poles, we need approximately $N/2$ second-order sections, so the total number of delays is roughly $N$.
*   **Number of multipliers and adders:** Proportional to the number of sections.
*   **Pros:**
    *   **Reduced Coefficient Sensitivity:** By breaking down a high-order filter into low-order sections, the sensitivity of the overall transfer function to quantization of individual coefficients is significantly reduced. This is a major advantage.
    *   **Improved Numerical Stability:** Cascade structures tend to be more numerically stable, especially when designed carefully by pairing poles and zeros close to each other.
    *   **Flexibility:** Allows for selective processing or adjustment of individual frequency bands by modifying specific biquad sections.
*   **Cons:**
    *   **Tuning is Critical:** The order in which the biquad sections are cascaded and how poles and zeros are paired within each section is crucial for optimal performance. Incorrect pairing can lead to increased sensitivity.
    *   **Computational Overhead:** May require more multipliers and adders than a direct-form structure for the same order, although this is often compensated by improved performance.

**Important Point to Remember:** The effectiveness of the cascade structure relies heavily on proper pairing of poles and zeros and ordering of sections to minimize sensitivity and round-off errors.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.3 (Cascade-Form Realizations).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.3 (Cascade Realizations).
*   **Ifeachor & Jervis (2nd Ed.):** Chapter 6 (Digital Filter Implementation) will likely discuss cascade structures and their advantages.

---

### 4. Parallel-Form Structures

Parallel-form structures realize an IIR filter by decomposing its transfer function into a sum of simpler transfer functions, typically first-order and second-order sections, and then implementing these sections in parallel.

**Derivation:**

A general IIR transfer function can be decomposed using partial fraction expansion.
$$H(z) = \sum_{k=1}^{N} \frac{C_k}{1 - p_k z^{-1}} + \sum_{k=1}^{M} D_k z^{-k}$$
or for second-order sections:
$$H(z) = A + \sum_{k=1}^{N_{real}} \frac{A_k}{1 - p_{k,real} z^{-1}} + \sum_{k=1}^{N_{complex}} \frac{B_{k1} + B_{k2} z^{-1}}{1 - 2 \text{Re}(p_k) z^{-1} + |p_k|^2 z^{-2}}$$
where $p_k$ are the poles and $D_k$ (or $A_k, B_{k1}, B_{k2}$) are the residues. The constant term $A$ handles any non-zero gain at $z=\infty$.

The overall transfer function is the sum of these parallel sections:
$$H(z) = H_{parallel,1}(z) + H_{parallel,2}(z) + \dots + H_{parallel,L}(z)$$

**Block Diagram (Parallel Form):**

```
               +------------------+
x[n] -------->|  Stage 1         |
               |  (e.g., 1st/2nd  |----------+
               |  order section)  |          |
               +------------------+          |
                                             |
               +------------------+          |
x[n] -------->|  Stage 2         |----------+---> y[n]
               |                  |          |
               +------------------+          |
                                             |
               ...                           |
                                             |
               +------------------+          |
x[n] -------->|  Stage L         |----------+
               |                  |
               +------------------+
```

**Key Features of Parallel Form:**

*   **Number of delays:** Depends on the number and order of the decomposed sections. Typically, each first-order section needs 1 delay, and each second-order section needs 2 delays.
*   **Number of multipliers and adders:** Proportional to the number of sections.
*   **Pros:**
    *   **Good for Specific Pole Locations:** Can be advantageous for filters with poles that are widely separated in the Z-plane.
    *   **Potential for Reduced Sensitivity:** Similar to cascade structures, decomposing into simpler sections can help manage coefficient sensitivity.
*   **Cons:**
    *   **Partial Fraction Expansion Complexity:** Performing partial fraction expansion can be computationally intensive and may lead to complex coefficients for real filters if not handled carefully (e.g., by combining conjugate poles).
    *   **Less Common for General Filters:** Compared to cascade structures, parallel forms are less frequently used for general-purpose IIR filter realization due to the complexity of the decomposition.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.4 (Parallel-Form Realizations).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.4 (Parallel Realizations).

---

### 5. Lattice Structures for IIR Systems

Lattice structures are a class of filter realizations that are fundamentally different from direct, cascade, and parallel forms. They are derived from orthogonal polynomial expansions and have excellent properties regarding coefficient quantization and numerical stability. They are particularly well-suited for adaptive filtering and reflection coefficient modeling.

**Key Concepts:**

*   **Reflection Coefficients:** The parameters that define a lattice structure. These are analogous to reflection coefficients in acoustic tubes or transmission lines.
*   **Orthogonality:** Lattice structures are based on orthogonal polynomials, which contribute to their desirable numerical properties.
*   **Stages:** A lattice structure is built as a series of stages, where each stage implements a reflection.

**Types of Lattice Structures for IIR Systems:**

IIR lattice structures are typically derived from the factorization of the transfer function in terms of lossless discrete-time network theory or from the factorization of the autocorrelation sequence.

#### 5.1. All-pass Lattice Structures (Type I)

These structures are derived from the factorization of the denominator polynomial. The transfer function of a single stage of an all-pass lattice is:

$$H_1(z) = \frac{z^{-1} - k}{1 - k z^{-1}}$$
where $k$ is the reflection coefficient.

The overall transfer function $H(z)$ can be realized by cascading multiple such stages, each with its own reflection coefficient $k_i$:

$$H(z) = \frac{B(z)}{A(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{\prod_{k=1}^{N} (1 - p_k z^{-1})}$$

The denominator $A(z)$ can be represented as a product of all-pass factors, and the numerator can be formed by multiplying appropriate feedforward terms with these all-pass factors.

**Block Diagram (Conceptual - a single all-pass stage):**

```
x[n] --+--------------+
       |              |
       v              |
+---------+   z^-1     |
|         | ---------> +------> v1[n]
|  +------>|          |
|  ^      |----------+
|  |      |  * k
|  |      |
+---------+
      |
      v
   -k*x[n]
```
The output of the stage $v[n]$ is computed as:
$v[n] = k x[n] + z^{-1} (x[n-1] - k v[n-1])$ (This is for the transposed version)
Or, for the standard version:
$y[n] = k y[n-1] + x[n] - k x[n-1]$

**Key Features of All-Pass Lattice:**

*   **Reflection Coefficients:** $k_1, k_2, \dots, k_N$.
*   **Pros:**
    *   **Excellent Coefficient Quantization Properties:** Reflection coefficients are typically bounded between -1 and 1, leading to very low sensitivity to quantization errors.
    *   **Numerical Stability:** Inherently stable due to the nature of reflection coefficients.
    *   **Adaptability:** Easily adaptable for adaptive filtering algorithms.
*   **Cons:**
    *   **Non-trivial Mapping:** The relationship between the reflection coefficients and the standard $a_k, b_k$ coefficients of a direct-form structure is not straightforward.
    *   **Implementation Complexity:** The block diagram can appear less intuitive than direct-form structures.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.5 (Lattice Structures). This section will likely introduce the concept and different types of lattice structures for IIR systems.
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.6 (Lattice Structures). This will also be a key reference for lattice filter realization.

#### 5.2. Pole-Zero Lattice Structures (Type II)

These structures factorize both the numerator and the denominator polynomials. They are constructed by cascading an all-pole lattice (for the denominator) and an all-zero lattice (for the numerator).

**Key Concepts:**

*   **All-Pole Lattice:** Realizes the denominator polynomial $1/A(z)$.
*   **All-Zero Lattice:** Realizes the numerator polynomial $B(z)$.
*   **Cascading:** The overall filter is realized by cascading these two types of lattices.

**Block Diagram (Conceptual):**

```
x[n] --> [ All-Pole Lattice ] --> [ All-Zero Lattice ] --> y[n]
```

**Key Features of Pole-Zero Lattice:**

*   **Pros:**
    *   **Combines Benefits:** Leverages the excellent numerical properties of all-pole lattices for the feedback section and all-zero lattices for the feedforward section.
    *   **High Degree of Robustness:** Generally considered one of the most robust structures for IIR filter realization.
*   **Cons:**
    *   **Higher Complexity:** Requires implementing two separate lattice structures.

**Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Section 7.2.5 (Lattice Structures).
*   **Oppenheim & Schafer (2nd Ed.):** Section 5.6 (Lattice Structures).

---

### 6. Comparison of Structures

| Structure             | Number of Delays | Number of Multipliers | Number of Adders | Coefficient Sensitivity | Round-off Error Accumulation | Ease of Implementation |
| :-------------------- | :--------------- | :-------------------- | :--------------- | :---------------------- | :--------------------------- | :--------------------- |
| **Direct-Form I**     | $M+N$            | $M+N+1$               | $M+N$            | High (especially feedback) | Moderate                     | Direct               |
| **Direct-Form II**    | $\max(M,N)$      | $M+N+1$               | $M+N$            | Moderate                | Moderate                     | Direct               |
| **Cascade-Form**      | ~$N$ (for $N$ poles) | Varies (per biquad)   | Varies (per biquad)| Low (with proper pairing) | Low (with proper pairing)    | Good (for biquads)   |
| **Parallel-Form**     | Varies           | Varies                | Varies           | Moderate                | Moderate                     | Complex (PFD)        |
| **Lattice Structures**| Varies (~$N$)     | Varies                | Varies           | Very Low                | Very Low                     | Moderate (conceptual) |

**Important Considerations for Choice of Structure:**

*   **Filter Order:** For low-order filters, direct-form structures might be sufficient. For higher-order filters, cascade or lattice structures are generally preferred.
*   **Coefficient Quantization:** If precision is critical and coefficients are quantized to a limited number of bits, lattice structures offer the best performance.
*   **Hardware/Software Constraints:** The number of delays, multipliers, and adders impacts the implementation cost. Direct-form II is often a good compromise for efficiency.
*   **Adaptive Filtering:** Lattice structures are particularly well-suited for adaptive filtering applications.

---

### 7. Practice Questions and Exercises

**Question 1:**

Consider an IIR filter with the transfer function:
$$H(z) = \frac{1 + 2z^{-1} + z^{-2}}{1 - 0.5z^{-1} + 0.25z^{-2}}$$
Sketch the Direct-Form I and Direct-Form II block diagrams for this filter.

**Answer 1:**

*   **Direct-Form I:** Requires 2 delays for the numerator and 2 delays for the denominator, totaling 4 delays. It directly implements the difference equation:
    $y[n] = x[n] + 2x[n-1] + x[n-2] - (-0.5)y[n-1] - 0.25y[n-2]$
    The block diagram would have two separate chains of delays for $x$ and $y$ signals.

*   **Direct-Form II:** Requires $\max(2, 2) = 2$ delays. The transfer function is split into $H_1(z) = \frac{1}{1 - 0.5z^{-1} + 0.25z^{-2}}$ and $H_2(z) = 1 + 2z^{-1} + z^{-2}$.
    The block diagram would have a single chain of 2 delays for an intermediate signal, with the numerator coefficients applied to this intermediate signal.

**Question 2:**

What is the primary advantage of using cascade-form structures over direct-form structures for IIR filters?

**Answer 2:**

The primary advantage of cascade-form structures is their **reduced sensitivity to coefficient quantization** and improved numerical stability. By breaking down a high-order filter into a series of low-order (biquad) sections, the impact of quantizing individual filter coefficients is significantly lessened, leading to a more robust and predictable filter performance.

**Question 3:**

Explain the concept of reflection coefficients in lattice structures and why they are beneficial.

**Answer 3:**

Reflection coefficients ($k_i$) in lattice structures are parameters that define the stages of the filter. They are analogous to the reflection coefficients in wave propagation (e.g., in acoustic tubes or transmission lines), where they represent the ratio of reflected signal amplitude to incident signal amplitude at an interface.

**Benefits of Reflection Coefficients:**

*   **Bounded Range:** Reflection coefficients are typically bounded between -1 and +1. This limited range makes them far less susceptible to quantization errors compared to the coefficients of direct-form structures.
*   **Numerical Stability:** The structure inherently maintains stability as long as the reflection coefficients are within their valid range. This makes them highly robust against numerical errors.
*   **Adaptability:** Lattice structures are very efficient for adaptive filtering algorithms, as updating the reflection coefficients is a direct process.

**Question 4:**

Consider a filter whose transfer function is $H(z) = \frac{z^{-1}}{1 - 0.5z^{-1}}$.
a) Realize this filter using Direct-Form I.
b) Realize this filter using Direct-Form II.
c) Calculate the number of delays, multipliers, and adders for both realizations.

**Answer 4:**

The difference equation is $y[n] = 0.5y[n-1] + x[n-1]$.

a) **Direct-Form I:**
   $H(z) = \frac{z^{-1}}{1 - 0.5z^{-1}} = \frac{z^{-1}}{1 + (-0.5)z^{-1}}$
   Here, $M=1$, $N=1$. $b_0=0, b_1=1$. $a_1 = -0.5$.
   The difference equation is $y[n] = x[n-1] + 0.5y[n-1]$.
   *   Block Diagram: Requires one delay for $x$ and one delay for $y$.
       ```
       x[n] --> z^-1 --> [+] --> y[n]
                      |      ^
                      |      | 0.5
                      +------|
       ```
   *   Delays: $M+N = 1+1 = 2$.
   *   Multipliers: $M+N+1 = 1+1+1 = 3$ (one for $b_1$, one for $a_1$, one for the implicit $1$ in numerator).
   *   Adders: $M+N = 1+1 = 2$.

b) **Direct-Form II:**
   $H_1(z) = \frac{1}{1 - 0.5z^{-1}}$, $H_2(z) = z^{-1}$
   *   $V(z) = H_1(z) X(z) \implies v[n] = 0.5v[n-1] + x[n]$
   *   $Y(z) = H_2(z) V(z) \implies y[n] = v[n-1]$
   *   Block Diagram: Requires one delay for the intermediate signal $v$.
       ```
       x[n] --> [+] --> z^-1 --> y[n]
                |      ^
                |      | 0.5
                +------|
       ```
   *   Delays: $\max(M,N) = \max(1,1) = 1$.
   *   Multipliers: $M+N+1 = 1+1+1 = 3$.
   *   Adders: $M+N = 1+1 = 2$.

**Question 5:**

True or False: Cascade-form structures are generally less sensitive to coefficient quantization than Direct-Form II structures. Justify your answer.

**Answer 5:**

**True.** Cascade-form structures are generally less sensitive to coefficient quantization than Direct-Form II structures.

**Justification:** In a Direct-Form II structure, a high-order filter's transfer function is realized in a single block. Quantizing the coefficients of this single block can lead to significant shifts in the pole and zero locations, potentially altering the filter's frequency response substantially. In contrast, the cascade-form structure decomposes the high-order filter into a series of low-order (typically second-order) sections. Each section has its own set of coefficients. By carefully pairing poles and zeros that are close to each other within these low-order sections, the sensitivity of each individual section to coefficient quantization is reduced. When these sections are cascaded, the overall sensitivity of the filter to coefficient quantization is significantly lower than that of a single high-order direct-form realization.

---

### 8. Summary and Key Takeaways

*   **IIR Filter Realizations** translate difference equations into block diagrams using delays, multipliers, and adders.
*   **Direct-Form I (DF-I):** Directly implements the difference equation, requiring separate delay chains for input and output, leading to more delays.
*   **Direct-Form II (DF-II):** More efficient in delays by cascading numerator and denominator polynomial implementations, using $\max(M, N)$ delays.
*   **Transposed Structures:** Interchange input/output and reverse signal flow; maintain transfer function but can alter error accumulation.
*   **Cascade-Form:** Factors the transfer function into cascaded biquad sections. Offers **significantly reduced coefficient sensitivity** and improved numerical stability, making it a preferred choice for higher-order filters.
*   **Parallel-Form:** Decomposes the transfer function via partial fraction expansion into parallel sections. Useful for filters with widely separated poles but can be complex to implement.
*   **Lattice Structures:** Utilize reflection coefficients, offering **excellent numerical properties**, low sensitivity, and robustness, making them ideal for adaptive filtering.
*   The **choice of structure** depends on factors like filter order, required precision, available hardware, and application needs. For high precision and robustness, cascade and lattice structures are generally superior to direct-form structures.

This module directly supports **CO2: Realise IIR and FIR filters** by detailing the various methods to implement IIR filters. Understanding these structures is fundamental to subsequent filter design and analysis steps.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
