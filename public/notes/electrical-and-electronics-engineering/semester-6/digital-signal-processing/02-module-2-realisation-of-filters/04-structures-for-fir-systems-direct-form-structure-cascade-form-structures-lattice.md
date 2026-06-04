---
title: "Structures for FIR Systems:  Direct-Form Structure, Cascade-Form Structures, Lattice Structure. Linear Phase FIR filters."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Realisation of Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36661"
status: "completed"
scrapedAt: "2026-05-23T16:26:42.123Z"
---
# Digital Signal Processing: Module 2 - Realisation of Filters

## Topic: Structures for FIR Systems

This module delves into the practical implementation of Finite Impulse Response (FIR) filters, exploring various computational structures that can be used for their realization. We will cover the Direct-Form, Cascade-Form, and Lattice structures, as well as the important concept of Linear Phase FIR filters.

---

### 1. Structures for FIR Systems

The goal of filter realization is to translate a given filter specification (often in the form of a difference equation or transfer function) into a structure of interconnected basic operations like delays, multipliers, and adders. This structure dictates the computational complexity, memory requirements, and susceptibility to round-off errors.

#### 1.1. Direct-Form Structure

The direct-form structure is the most straightforward realization of an FIR filter, directly translating its difference equation into a computational diagram.

**Key Concepts & Definitions:**

*   **FIR Filter Difference Equation:** For a causal FIR filter of order $N-1$, the output $y[n]$ is related to the input $x[n]$ and the filter coefficients $b_k$ by:
    $y[n] = b_0x[n] + b_1x[n-1] + b_2x[n-2] + \dots + b_{N-1}x[n-N+1]$
*   **Transfer Function:** The transfer function of an FIR filter is given by:
    $H(z) = \sum_{k=0}^{N-1} b_k z^{-k}$
*   **Computational Elements:**
    *   **Delay Elements ($z^{-1}$):** Represent the memory of the system, storing past input values.
    *   **Multipliers:** Multiply input samples or delayed input samples by filter coefficients.
    *   **Adders:** Sum the weighted input samples to produce the output.

**Direct-Form I:**

This structure directly implements the difference equation by feeding past input samples to a series of delays, which are then multiplied by the coefficients and summed.

**Diagram:**

```
      x[n] ---+--------------> +-----------> +-----------> ... ------> +
              |                |             |                       |
              | z^-1           | z^-1        | z^-1                  | z^-1
              |                |             |                       |
              +-------------> (+) ----------> (+) ----------> ... ------> (+)
              |                |             |                       |
          b0*x[n]          b1*x[n-1]     b2*x[n-2]                 b(N-1)*x[n-N+1]
              |                |             |                       |
              +----------------+-------------+-----------------------+
                                           |
                                           v
                                         y[n]
```

**Number of Multipliers:** $N$
**Number of Delay Elements:** $N-1$
**Number of Adders:** $N-1$

**Advantages:**

*   Simple to understand and implement.
*   Directly maps to the difference equation.

**Disadvantages:**

*   **Sensitivity to Quantization Errors:** The product of many coefficients can lead to significant round-off errors, especially for high-order filters or filters with large coefficient values. This can affect the stability and performance of the filter. (Proakis & Manolakis, 4th Ed., Chapter 7)
*   **Limited flexibility for certain filter types:** Not ideal for realizing certain types of filters efficiently.

**Example:**

Consider an FIR filter with the following difference equation:
$y[n] = 0.5x[n] + 0.2x[n-1] - 0.3x[n-2]$

The direct-form realization would involve:
*   One delay for $x[n-1]$
*   Two delays for $x[n-2]$
*   Multiplication of $x[n]$ by $0.5$, $x[n-1]$ by $0.2$, and $x[n-2]$ by $-0.3$.
*   Summing these weighted terms to get $y[n]$.

**Practice Question 1.1:**

Draw the direct-form structure for an FIR filter with the transfer function $H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3}$.

**Answer 1.1:**

```
      x[n] ---+--------------> +-----------> +-----------> +
              |                |             |             |
              | z^-1           | z^-1        | z^-1        |
              |                |             |             |
              +-------------> (+) ----------> (+) ----------> (+)
              |                |             |             |
          1*x[n]          2*x[n-1]      3*x[n-2]      4*x[n-3]
              |                |             |             |
              +----------------+-------------+-------------+
                                           |
                                           v
                                         y[n]
```

---

#### 1.2. Cascade-Form Structures

Cascade-form structures are used to realize higher-order FIR filters by breaking them down into a series of lower-order FIR filters. This is particularly useful for polynomial factorization and can offer advantages in terms of coefficient sensitivity.

**Key Concepts & Definitions:**

*   **Second-Order Sections (SOS):** FIR filters are often decomposed into second-order sections. A general second-order FIR filter has a transfer function:
    $H_i(z) = b_{i0} + b_{i1}z^{-1} + b_{i2}z^{-2}$
*   **Factorization:** A higher-order FIR filter $H(z)$ can be expressed as a product of second-order sections:
    $H(z) = H_1(z) \cdot H_2(z) \cdot \dots \cdot H_M(z)$
    where $M \approx (N-1)/2$.

**Diagram:**

The overall system is a series of these second-order sections, each implemented in direct-form II (transposed).

```
x[n] --> [ H1(z) ] --> [ H2(z) ] --> ... --> [ HM(z) ] --> y[n]
```

Each $H_i(z)$ block is typically realized using a direct-form II (transposed) structure for each second-order section for efficiency.

**Direct-Form II Transposed Structure for a Second-Order Section:**

For $H_i(z) = b_{i0} + b_{i1}z^{-1} + b_{i2}z^{-2}$, the direct-form II transposed structure is preferred for cascade realization.

**Diagram for a Second-Order Section (Direct-Form II Transposed):**

```
            +---------+     +---------+
x_i[n] ---> | b_i0    | --> |         | --> y_i[n]
            +---------+     |         |
                            |   (+)   |
            +---------+     |         |
x_i[n] ---> | b_i1    | --> | z^-1    |
            |         |     |         |
            +---------+     |   (+)   |
                            |         |
            +---------+     | z^-1    |
x_i[n] ---> | b_i2    | --> |         |
            +---------+     +---------+
```
*Note: The diagram above shows the structure for $H(z) = b_0 + b_1z^{-1} + b_2z^{-2}$. For cascade, we would have multiple such structures chained together.*

Let's redraw a typical block for a second-order section in cascade:

```
x_i[n] ---> (+) ----+--------------> (+) ----+--------------> (+) ---> y_i[n]
            |       |                |       |                |
           b_i0     | z^-1           b_i1     | z^-1           b_i2
            |       |                |       |                |
            +-------+----------------+-------+----------------+
                    |                        |
                    +------------------------+
```
This is a bit confusing. Let's use a more standard representation for a second-order direct-form II transposed FIR:

For $H_i(z) = b_{i0} + b_{i1}z^{-1} + b_{i2}z^{-2}$:

```
      x_i[n] ---+------------->(+)------------->(+) ---> y_i[n]
                |              |               |
              b_i0            z^-1            b_i1
                |              |               |
                +------------>(+)------------->(+)
                               |               |
                             z^-1            b_i2
                               |               |
                               +---------------+
```

The cascade structure would have multiple such blocks connected in series.

**Advantages:**

*   **Reduced Coefficient Sensitivity:** By decomposing into lower-order sections, the overall sensitivity to quantization of individual coefficients can be reduced, especially if the factorization is done carefully (e.g., by pairing complex conjugate roots). (Oppenheim & Schafer, 2nd Ed., Chapter 6)
*   **Improved Numerical Stability:** Can lead to better numerical performance compared to a high-order direct-form realization.
*   **Flexibility in Design:** Allows for specific shaping of the frequency response by designing individual sections.

**Disadvantages:**

*   **More Delay Elements:** Generally requires more delay elements than a direct-form realization for the same order, as each second-order section needs 2 delays.
*   **Complexity in Factorization:** The process of finding suitable second-order sections and their coefficients can be complex.

**Example:**

A 4th-order FIR filter can be represented as $H(z) = H_1(z)H_2(z)$, where $H_1(z)$ and $H_2(z)$ are second-order FIR filters.

$H_1(z) = b_{10} + b_{11}z^{-1} + b_{12}z^{-2}$
$H_2(z) = b_{20} + b_{21}z^{-1} + b_{22}z^{-2}$

The cascade realization would have an input signal fed into the realization of $H_1(z)$, and the output of $H_1(z)$ becomes the input to the realization of $H_2(z)$.

**Practice Question 1.2:**

An FIR filter has a transfer function $H(z) = (1 + 0.5z^{-1})(2 - 0.1z^{-1} + 0.3z^{-2})$.
a) What is the order of this filter?
b) Describe how you would realize this filter in cascade form.

**Answer 1.2:**

a) The first factor is a first-order FIR filter (order 1). The second factor is a second-order FIR filter (order 2). When multiplied, the order of the resulting filter is the sum of the orders of the individual factors: $1 + 2 = 3$. So, the order of this filter is 3.

b) To realize this filter in cascade form, we would implement the two factors separately and connect them in series.
    *   The first factor $H_1(z) = 1 + 0.5z^{-1}$ is a first-order FIR filter. It can be realized with a single delay element.
    *   The second factor $H_2(z) = 2 - 0.1z^{-1} + 0.3z^{-2}$ is a second-order FIR filter. It can be realized using a second-order direct-form II transposed structure.
    The output of the $H_1(z)$ realization would be fed as the input to the $H_2(z)$ realization.

---

#### 1.3. Lattice Structure

The lattice structure is a realization that is based on the concept of orthogonal transformations and predictor polynomials. It offers excellent numerical properties, particularly in terms of coefficient sensitivity, and is widely used in adaptive filtering and speech processing.

**Key Concepts & Definitions:**

*   **Prediction Error:** Lattice structures are derived from the concept of forward and backward prediction errors. For a time series $x[n]$, the forward prediction error $e_m[n]$ at stage $m$ is the difference between the actual input and its predicted value based on the first $m-1$ coefficients. The backward prediction error $r_m[n]$ is the prediction error for the time-reversed signal.
*   **Reflection Coefficients ($k_m$):** These coefficients, also known as reflection coefficients, determine the transformation at each stage of the lattice. They are related to the correlation properties of the input signal. For FIR filters, these are derived from the filter coefficients.
*   **Stages:** A lattice structure is composed of a series of stages. Each stage performs a specific linear transformation involving the input and a reflection coefficient.
*   **FIR Lattice Structure:** For FIR filters, the lattice structure can be derived from the roots of the filter's polynomial. If $H(z) = \sum_{k=0}^{N-1} b_k z^{-k}$, it can be factored into a product of first-order polynomials, and then a lattice realization can be constructed.

**Realization of a First-Order FIR Lattice Section:**

A single-stage lattice section for an FIR filter can realize a filter of the form $1 + kz^{-1}$ or $k + z^{-1}$.

**Diagram for a general lattice stage:**

```
      u_m[n] ----> (+) ----+-----------> v_m[n]
                  |       |
                 k_m      | z^-1
                  |       |
                  +------>u_{m+1}[n]
                          |
                          v_m[n]
```
In this diagram, $u_m[n]$ is the input to the stage, and $v_m[n]$ is the output. The reflection coefficient is $k_m$. The outputs of each stage become the inputs to the next.

For FIR filters, the lattice structure is often implemented using "forward prediction errors" $f_m[n]$ and "backward prediction errors" $b_m[n]$.

**A common FIR lattice structure:**

```
      x[n] ----> (+) ----+-----------> f_1[n]
                  |       |
                 k_1      | z^-1
                  |       |
                  +------>b_1[n]
```
Here, $f_1[n] = x[n] + k_1 b_0[n]$ and $b_1[n] = k_1 x[n] + b_0[n]$, where $b_0[n] = x[n-1]$ (effectively).

A more complete FIR lattice for a filter of order $N-1$ would involve $N-1$ such stages. The output $y[n]$ is a linear combination of the forward prediction errors at different stages.

**From FIR Coefficients to Lattice Coefficients (Simplified Example):**

Consider $H(z) = b_0 + b_1z^{-1}$.
We can write this as $H(z) = b_0(1 + \frac{b_1}{b_0}z^{-1})$.
This can be seen as a direct-form realization of $1 + k z^{-1}$ scaled by $b_0$, where $k = b_1/b_0$.
A single lattice stage can realize $1 + k z^{-1}$.

The relationship between direct-form coefficients $b_k$ and lattice coefficients $k_m$ is recursive and can be complex. (Ifeachor & Jervis, 2nd Ed., Chapter 5)

**Advantages:**

*   **Excellent Numerical Properties:** The lattice structure is known for its low sensitivity to coefficient quantization and its inherent numerical stability. (Proakis & Manolakis, 4th Ed., Chapter 7)
*   **Orthogonality:** The stages are somewhat orthogonal, meaning that errors in one stage do not significantly affect others.
*   **Efficient for Adaptive Filtering:** Widely used in adaptive filters due to its numerical stability and efficient update of reflection coefficients.
*   **Model Order Selection:** The magnitudes of the reflection coefficients can provide information about the appropriate order of the filter.

**Disadvantages:**

*   **Less Intuitive:** The structure and the relationship between direct-form coefficients and lattice coefficients can be less intuitive to grasp.
*   **Can require more multipliers and adders:** For a given order, a lattice structure might require more multipliers and adders than a direct-form realization, although this can be offset by the numerical benefits.

**Example:**

Consider an FIR filter with $H(z) = 1 + 0.7z^{-1} - 0.5z^{-2}$.
This is a second-order FIR filter. We would need a two-stage lattice structure. The derivation of $k_1$ and $k_2$ from $b_0, b_1, b_2$ is a systematic process, often involving polynomial factorization or recursive formulas.

For $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2}$, the first stage coefficient $k_1$ is related to the ratio of $b_1$ and $b_0$. The second stage coefficient $k_2$ is related to the remaining polynomial after factoring out the first stage.

Let's consider a standard FIR lattice realization where the output $y[n]$ is a weighted sum of forward prediction errors:
$y[n] = \sum_{m=0}^{N-1} c_m f_m[n]$

The forward prediction errors are computed recursively:
$f_0[n] = x[n]$
$f_m[n] = f_{m-1}[n] + k_m b_{m-1}[n-1]$
$b_m[n] = k_m f_{m-1}[n] + b_{m-1}[n-1]$

and $b_0[n] = x[n-1]$.

**Practice Question 1.3:**

What are the main advantages of using a lattice structure for FIR filter realization compared to a direct-form structure?

**Answer 1.3:**

The main advantages of the lattice structure for FIR filter realization are:
*   **Excellent Numerical Properties:** Low sensitivity to coefficient quantization, leading to better numerical stability.
*   **Orthogonality:** Stages are somewhat independent, reducing the propagation of errors.
*   **Suitability for Adaptive Filtering:** Its numerical stability makes it ideal for adaptive algorithms where coefficients are updated frequently.

---

### 2. Linear Phase FIR Filters

Linear phase filters are a special class of FIR filters that are highly desirable in many signal processing applications because they do not introduce phase distortion. This means that all frequency components of the input signal are delayed by the same amount, preserving the waveform shape.

**Key Concepts & Definitions:**

*   **Phase Response:** The phase response of a filter, $\phi(\omega)$, describes how the phase of a sinusoidal signal at angular frequency $\omega$ is shifted by the filter.
*   **Linear Phase:** A filter has linear phase if its phase response is a linear function of frequency:
    $\phi(\omega) = -\omega \tau$
    where $\tau$ is a constant delay.
*   **Group Delay:** The group delay, $\tau_g(\omega)$, is defined as the negative derivative of the phase response with respect to angular frequency:
    $\tau_g(\omega) = -\frac{d\phi(\omega)}{d\omega}$
    For linear phase filters, the group delay is constant: $\tau_g(\omega) = \tau$.
*   **Transfer Function:** For an FIR filter with coefficients $b_k$, the transfer function is $H(z) = \sum_{k=0}^{N-1} b_k z^{-k}$. The frequency response is $H(e^{j\omega}) = \sum_{k=0}^{N-1} b_k e^{-j\omega k}$.
    $H(e^{j\omega}) = |H(e^{j\omega})| e^{j\phi(\omega)}$

**Conditions for Linear Phase FIR Filters:**

An FIR filter $H(z) = \sum_{k=0}^{N-1} b_k z^{-k}$ has a constant group delay (linear phase) if and only if its coefficients satisfy certain symmetry or anti-symmetry properties. There are four types of linear phase FIR filters:

**Type I Linear Phase FIR Filter:**

*   **Symmetry:** Coefficients are symmetric about the center.
*   **Odd Length (N is odd):** $N = 2M+1$.
    $b_k = b_{N-1-k}$ for $k = 0, 1, \dots, M$.
    The center of symmetry is at $k = M$.
*   **Transfer Function Form:**
    $H(z) = z^{-M} \sum_{k=0}^{M} b_k (z^k + z^{-k})$
    or $H(z) = z^{-M} [b_M + \sum_{k=0}^{M-1} b_k (z^k + z^{-k})]$
*   **Phase Response:** $\phi(\omega) = -\omega M$. The group delay is $\tau_g = M$.
*   **Constant Group Delay:** $M = (N-1)/2$.

**Type II Linear Phase FIR Filter:**

*   **Symmetry:** Coefficients are symmetric about the center.
*   **Even Length (N is even):** $N = 2M$.
    $b_k = b_{N-1-k}$ for $k = 0, 1, \dots, M-1$.
    The center of symmetry is between $k=M-1$ and $k=M$.
*   **Transfer Function Form:**
    $H(z) = z^{-M+1/2} \sum_{k=0}^{M-1} b_k (z^{k+1/2} + z^{-(k+1/2)})$
    (This form is often more theoretical. Practical realization avoids fractional delays.)
*   **Phase Response:** $\phi(\omega) = -\omega (M - 1/2)$. The group delay is $\tau_g = M - 1/2$.
*   **Constant Group Delay:** $M-1/2 = (N-1)/2$.

**Type III Linear Phase FIR Filter:**

*   **Anti-symmetry:** Coefficients are anti-symmetric about the center.
*   **Odd Length (N is odd):** $N = 2M+1$.
    $b_k = -b_{N-1-k}$ for $k = 0, 1, \dots, M$.
    The center of symmetry is at $k=M$.
*   **Transfer Function Form:**
    $H(z) = z^{-M} \sum_{k=0}^{M-1} b_k (z^k - z^{-k})$
    (Note: $b_M$ must be zero for anti-symmetry about the center).
*   **Phase Response:** $\phi(\omega) = -\omega M \pm \pi/2$. The group delay is $\tau_g = M$.
*   **Constant Group Delay:** $M = (N-1)/2$.
*   **Zero Gain at Nyquist:** At $\omega = \pi$, $H(e^{j\pi}) = \sum b_k (-1)^k = 0$.

**Type IV Linear Phase FIR Filter:**

*   **Anti-symmetry:** Coefficients are anti-symmetric about the center.
*   **Even Length (N is even):** $N = 2M$.
    $b_k = -b_{N-1-k}$ for $k = 0, 1, \dots, M-1$.
    The center of symmetry is between $k=M-1$ and $k=M$.
*   **Transfer Function Form:**
    $H(z) = z^{-M+1/2} \sum_{k=0}^{M-1} b_k (z^{k+1/2} - z^{-(k+1/2)})$
*   **Phase Response:** $\phi(\omega) = -\omega (M - 1/2) \pm \pi/2$. The group delay is $\tau_g = M - 1/2$.
*   **Constant Group Delay:** $M-1/2 = (N-1)/2$.
*   **Zero Gain at Nyquist:** At $\omega = \pi$, $H(e^{j\pi}) = 0$.

**Advantages of Linear Phase FIR Filters:**

*   **Preservation of Waveform Shape:** Crucial in applications like image processing, data transmission, and speech processing where waveform integrity is important.
*   **Predictable Delay:** The constant group delay makes it easy to compensate for the delay in a system.

**Disadvantages of Linear Phase FIR Filters:**

*   **Design Constraints:** The symmetry/anti-symmetry conditions on coefficients impose constraints on the filter design, which might make it harder to meet arbitrary frequency response specifications.
*   **Higher Order for Sharp Transitions:** Achieving sharp transitions in the frequency response often requires a higher filter order compared to non-linear phase filters.

**Efficient Realization of Linear Phase FIR Filters:**

The symmetry properties of linear phase FIR filters can be exploited to reduce the number of multipliers and delay elements required for their realization.

*   **Type I (N odd, $N=2M+1$):**
    $H(z) = z^{-M} [b_M + 2\sum_{k=0}^{M-1} b_k \cos(\omega(k-M))]$
    The number of multipliers can be reduced to $M+1$. The structure involves summing terms of the form $b_k(x[n-M+k] + x[n-M-k])$.

*   **Type II (N even, $N=2M$):**
    $H(z) = z^{-(M-1/2)} [b_{M-1} 2\cos(\omega/2) + \sum_{k=0}^{M-2} b_k (z^{k+1/2} + z^{-(k+1/2)}) ]$
    (Simplified view: Sum of terms $b_k(x[n-M+k] + x[n-M-1+k])$)
    The number of multipliers can be reduced to $M$.

**Example of Efficient Realization (Type I):**

For $N=5$, $M=2$. $b_0 = b_4$, $b_1 = b_3$.
$H(z) = b_0(1+z^{-4}) + b_1(z^{-1}+z^{-3}) + b_2z^{-2}$
$H(z) = z^{-2} [b_0(z^2+z^{-2}) + b_1(z+z^{-1}) + b_2]$
$H(z) = z^{-2} [b_0(2\cos(2\omega)) + b_1(2\cos(\omega)) + b_2]$ (This is the frequency domain view, not the time-domain realization)

**Time-domain realization structure for Type I:**

```
      x[n] ---+------------->(+)------------->(+)------------->(+) ---> y[n]
              |              |               |               |
            b_0            z^-1            b_1             z^-1
              |              |               |               |
              +------------>(+)------------->(+)------------->(+)
                             |               |               |
                           z^-1            b_0             z^-1
                             |               |               |
                             +------------->(+)------------->(+)
                                             |               |
                                           b_1             z^-1
                                             |               |
                                             +---------------+
```
This is still not quite right. Let's focus on the coefficients being summed with delayed inputs:

For $H(z) = b_0x[n] + b_1x[n-1] + b_2x[n-2] + b_3x[n-3] + b_4x[n-4]$
with $b_0=b_4$, $b_1=b_3$.
$y[n] = b_0x[n] + b_1x[n-1] + b_2x[n-2] + b_1x[n-3] + b_0x[n-4]$
$y[n] = b_0(x[n] + x[n-4]) + b_1(x[n-1] + x[n-3]) + b_2x[n-2]$

**Diagram for Type I realization:**

```
      x[n] --+------------------------------+--> (+)
             |                              |     | b_0
             | z^-1                         |     |
             +----------------------------->|     |
             |                              |     |
             | z^-1                         |     |
             +----------------------------->(+)   |
                                           | | b_1 |
                                           | |     |
             x[n-1] ----------------------->| |     |
                                           | |     |
             x[n-2] ----------------------->| +--->(+)
                                           | | b_2 |
                                           | |     |
             x[n-3] ----------------------->| |     |
                                           | |     |
             x[n-4] ----------------------->| +--->(+)
                                             | | b_1 |
                                             | |     |
                                             | |     |
                                             | +--->(+)
                                             | | b_0 |
                                             | |     |
                                             | |     |
                                             +-------+

The structure should be more like:

       x[n] --------> (+) --------> (+) --------> (+) --------> (+) --------> y[n]
                     |           |           |           |
                   b_0         z^-1        b_1         z^-1
                     |           |           |           |
                     +---------> (+)---------> (+)---------> (+)
                                 |           |           |
                               b_0 (delay) b_1 (delay) b_0 (delay)
                                 |           |           |
                                 +---------> (+)---------> (+)
                                             |           |
                                           b_1 (delay) b_0 (delay)
                                             |           |
                                             +-----------+
```
This is still not right. Let's use a standard diagram for the efficient realization of Type I:

For $y[n] = b_0(x[n] + x[n-4]) + b_1(x[n-1] + x[n-3]) + b_2x[n-2]$

```
       x[n] ------> (+) -----------> (+) -----------> (+) ------> y[n]
                    |              |               |
                  b_0            z^-1            b_1
                    |              |               |
                    +------------>(+)------------->(+)
                                   |               |
                                 b_0 (delay)     b_1 (delay)
                                   |               |
                                   +------------->(+)
                                                   |
                                                 b_2
```
This still doesn't correctly pair the symmetric terms. The key is to sum delayed inputs *before* multiplying by coefficients.

Corrected conceptual diagram for efficient Type I:

```
      x[n] ----> (+) ------> (+) -----------> (+) ------> (+) ------> (+) ------> y[n]
                |          |               |               |               |
              b_0        z^-1            b_1             z^-1            b_0
                |          |               |               |               |
                +-------->(+)------------->(+)------------->(+)------------->(+)
                           |               |               |               |
                         z^-1            b_1             z^-1            b_0
                           |               |               |               |
                           +------------->(+)------------->(+)------------->(+)
                                           |               |               |
                                         b_1             z^-1            b_0
                                           |               |               |
                                           +------------->(+)------------->(+)
                                                           |               |
                                                         b_0             z^-1
                                                           |               |
                                                           +---------------+
```
This is still too complex. The core idea is to reuse delays.

**Efficient Structure for Type I (N=2M+1):**

```
      x[n] ----+------------->(+)------> (+) ------> (+) ------> y[n]
               |              |         |         |
             b_0          z^-1      b_1     z^-1    b_2
               |              |         |         |
               +------------>(+)------> (+)------> (+)
                              |         |         |
                            b_0       z^-1      b_1
                              |         |         |
                              +-------->(+)------> (+)
                                        |         |
                                      b_0       z^-1
                                        |         |
                                        +---------+

```
This is still incorrect. The structure should group additions of delayed inputs.

Let's use the formula $y[n] = b_0(x[n] + x[n-4]) + b_1(x[n-1] + x[n-3]) + b_2x[n-2]$.

```
x[n] ---+                                     +----------------> b_0 multiplier ----> Sum (+) ---> y[n]
        |                                     |
        +--- z^-1 ---> (+) --- z^-1 ---> (+) ---+----------------> b_1 multiplier ----> (+)
                      |                   |                                            |
                      |                   |                                            |
        +--- z^-1 ---> (+)                 +--------------------------------------------+
        |               |
        |               +--- z^-1 ---> (+) ---+--------------------------------------------> b_0 multiplier ----> (+)
        |                               |                                            |
        +--- z^-1 ---> (+) ------------+--------------------------------------------+---> b_1 multiplier ----> (+)
                                        |                                            |
                                        +--------------------------------------------+---> b_2 multiplier ----> (+)
```
This is getting complicated to represent textually. The core idea is to sum pairs of symmetrically delayed inputs, then multiply by coefficients, and then sum the results.

**Key Insight:** The number of multiplications is reduced by about half because the coefficients are paired. For $N=2M+1$, you need $M+1$ multiplications. For $N=2M$, you need $M$ multiplications.

**Practice Question 2.1:**

An FIR filter has coefficients $b_0=1, b_1=-2, b_2=3, b_3=-2, b_4=1$.
a) What is the order of this filter?
b) What type of linear phase FIR filter is this?
c) What is the constant group delay?
d) How many multiplications are required for its direct-form realization?
e) How many multiplications are required for its efficient realization?

**Answer 2.1:**

a) The order of the filter is $N-1 = 5-1 = 4$.

b) The coefficients are $b_0=1, b_1=-2, b_2=3, b_3=-2, b_4=1$.
Check for symmetry: $b_0 = b_4$ (1=1), $b_1 = b_3$ (-2=-2).
This is a symmetric coefficient sequence. Since the length $N=5$ is odd, this is a **Type I linear phase FIR filter**.

c) For a Type I filter with $N=5$, the center delay is $M = (N-1)/2 = (5-1)/2 = 2$.
The constant group delay is $\tau_g = M = 2$ samples.

d) For direct-form realization, it requires $N$ multiplications, so $5$ multiplications.

e) For efficient realization of a Type I filter with $N=5$ ($M=2$), it requires $M+1 = 2+1 = 3$ multiplications.

---

### 3. Connection to Course Outcomes

*   **CO1 (Analyze discrete-time systems using DFT):** While DFT is not directly used in filter realization structures, understanding the frequency response properties (magnitude and phase) is crucial for designing and evaluating filters, which in turn are realized by these structures. Linear phase filters are a direct manifestation of specific phase characteristics.
*   **CO2 (Realise IIR and FIR filters):** This entire module is dedicated to the realization of FIR filters, covering different structures (Direct-Form, Cascade, Lattice) that are practical implementations.
*   **CO3 (Design of IIR and FIR filters):** The choice of realization structure can impact the design process and the effectiveness of the designed filter. For instance, if linear phase is a design requirement, then Type I, II, III, or IV structures are considered. The numerical properties of lattice structures can also influence design choices.
*   **CO4 (Analyse effect of word length in digital filters):** The sensitivity of different structures to quantization errors (due to limited word length) is a key consideration. Direct-form structures are generally more sensitive than lattice structures. Understanding these effects is vital for choosing an appropriate realization for a given application. (Proakis & Manolakis, 4th Ed., Chapter 7)

---

### 4. Important Points to Remember

*   **Direct-Form:** Simple, direct implementation, but can be sensitive to coefficient quantization.
*   **Cascade-Form:** Decomposes into lower-order sections, often improving numerical stability and reducing sensitivity.
*   **Lattice Structure:** Offers excellent numerical properties and orthogonality, making it ideal for adaptive filtering and applications requiring high precision.
*   **Linear Phase FIR Filters:** Preserve waveform shape by introducing a constant group delay. They have specific symmetry properties in their coefficients (Types I, II, III, IV).
*   **Efficient Realization:** Linear phase FIR filters can be realized with fewer multipliers by exploiting their coefficient symmetries.
*   **Choice of Structure:** The choice of realization structure depends on factors like computational complexity, memory requirements, numerical stability, and specific filter properties (e.g., linear phase).

---

### 5. Practice Questions (Comprehensive)

**Question 1:**
An FIR filter is described by the transfer function $H(z) = 1 + 0.8z^{-1} + 0.6z^{-2} + 0.4z^{-3} + 0.2z^{-4}$.
a) Draw the direct-form structure for this filter.
b) Is this filter a linear phase FIR filter? If so, what type and what is its group delay?
c) How many multiplications and delays are needed for its direct-form realization?

**Question 2:**
Consider an FIR filter $H(z) = (1 + 0.5z^{-1} + 0.2z^{-2})(0.3 + 0.7z^{-1})$.
a) What is the order of this filter?
b) Describe how to realize this filter in cascade form.
c) What are the potential benefits of realizing this filter in cascade form compared to a direct-form realization of the expanded polynomial?

**Question 3:**
Explain the concept of linear phase in FIR filters and list the four types of linear phase FIR filters. For each type, specify the conditions on the coefficients and the resulting group delay.

**Question 4:**
Why is the lattice structure often preferred over the direct-form structure for FIR filter realization, especially in applications sensitive to numerical precision?

---

### 6. Answers to Comprehensive Practice Questions

**Answer 1:**
$H(z) = 1 + 0.8z^{-1} + 0.6z^{-2} + 0.4z^{-3} + 0.2z^{-4}$
a) Direct-Form Structure:
```
      x[n] ---+--------------> +-----------> +-----------> +-----------> +
              |                |             |             |             |
              | z^-1           | z^-1        | z^-1        | z^-1        |
              |                |             |             |             |
              +-------------> (+) ----------> (+) ----------> (+) ----------> (+)
              |                |             |             |             |
          1*x[n]          0.8*x[n-1]      0.6*x[n-2]      0.4*x[n-3]      0.2*x[n-4]
              |                |             |             |             |
              +----------------+-------------+-------------+-------------+
                                           |
                                           v
                                         y[n]
```
b) Coefficients: $b_0=1, b_1=0.8, b_2=0.6, b_3=0.4, b_4=0.2$.
Check symmetry: $b_0=1, b_4=0.2$. $b_0 \neq b_4$. Therefore, it is not a linear phase FIR filter.

c) For direct-form realization:
*   Multiplications: $N = 5$
*   Delay elements: $N-1 = 4$

**Answer 2:**
$H(z) = (1 + 0.5z^{-1} + 0.2z^{-2})(0.3 + 0.7z^{-1})$
a) The order of the first factor is 2, and the order of the second factor is 1. The order of the product filter is $2+1=3$.

b) Cascade Realization:
The filter can be realized by implementing each factor separately and connecting them in series.
*   First factor: $H_1(z) = 1 + 0.5z^{-1} + 0.2z^{-2}$ (a second-order FIR filter). This can be realized using a direct-form structure.
*   Second factor: $H_2(z) = 0.3 + 0.7z^{-1}$ (a first-order FIR filter). This can be realized with a single delay.
The output of the $H_2(z)$ realization would be the input to the $H_1(z)$ realization.

c) Potential benefits of cascade form:
*   **Reduced Coefficient Sensitivity:** By breaking down the high-order filter into lower-order sections, the overall sensitivity to quantization errors in individual coefficients can be reduced.
*   **Improved Numerical Stability:** Can lead to better numerical performance, especially if the factors are carefully chosen.

**Answer 3:**
Linear phase in FIR filters means that all frequency components of the input signal are delayed by the same amount, preserving the waveform shape. This is characterized by a phase response $\phi(\omega) = -\omega \tau$ or a constant group delay $\tau_g(\omega) = \tau$.

The four types of linear phase FIR filters are:

*   **Type I:**
    *   **Coefficient Condition:** Symmetric: $b_k = b_{N-1-k}$ for $k=0, \dots, N-1$.
    *   **Length:** Odd ($N=2M+1$).
    *   **Group Delay:** $\tau_g = M = (N-1)/2$.

*   **Type II:**
    *   **Coefficient Condition:** Symmetric: $b_k = b_{N-1-k}$ for $k=0, \dots, N-1$.
    *   **Length:** Even ($N=2M$).
    *   **Group Delay:** $\tau_g = M - 1/2 = (N-1)/2$.

*   **Type III:**
    *   **Coefficient Condition:** Anti-symmetric: $b_k = -b_{N-1-k}$ for $k=0, \dots, N-1$.
    *   **Length:** Odd ($N=2M+1$). $b_M = 0$.
    *   **Group Delay:** $\tau_g = M = (N-1)/2$. (Phase response has an added $\pm \pi/2$ term).

*   **Type IV:**
    *   **Coefficient Condition:** Anti-symmetric: $b_k = -b_{N-1-k}$ for $k=0, \dots, N-1$.
    *   **Length:** Even ($N=2M$).
    *   **Group Delay:** $\tau_g = M - 1/2 = (N-1)/2$. (Phase response has an added $\pm \pi/2$ term).

**Answer 4:**
The lattice structure is often preferred over the direct-form structure for FIR filter realization due to its superior numerical properties. Specifically:
*   **Low Sensitivity to Coefficient Quantization:** The reflection coefficients ($k_m$) in a lattice structure typically have magnitudes less than 1, leading to a more numerically stable representation compared to direct-form coefficients, which can be arbitrarily large. This results in less degradation of the filter's performance when using finite-precision arithmetic (limited word length).
*   **Orthogonality:** The stages in a lattice structure are nearly orthogonal. This means that errors introduced at one stage are not amplified and propagated significantly to subsequent stages, unlike in the direct-form structure where errors can accumulate through many multiplications and additions.
*   **Adaptive Filtering Suitability:** The numerical stability and efficient update mechanisms of lattice structures make them highly suitable for adaptive filtering applications, where filter coefficients are constantly adjusted.

This concludes the study notes for Module 2, Topic: Structures for FIR Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
