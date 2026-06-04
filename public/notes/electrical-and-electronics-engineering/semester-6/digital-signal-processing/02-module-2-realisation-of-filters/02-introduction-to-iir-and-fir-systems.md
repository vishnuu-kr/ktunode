---
title: "Introduction to IIR and FIR systems."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Realisation of Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3665f"
status: "completed"
scrapedAt: "2026-05-23T16:26:39.942Z"
---
# Digital Signal Processing: Module 2 - Realisation of Filters

## Topic: Introduction to IIR and FIR Systems

**Course Outcomes Addressed:**
*   **CO2:** Realise IIR and FIR filters (Knowledge Level: K3)
*   **CO3:** Design of IIR and FIR filters (Knowledge Level: K3)

**Learning Outcomes:**
*   Understand the fundamental differences between Infinite Impulse Response (IIR) and Finite Impulse Response (FIR) digital filters.
*   Identify the mathematical representations of IIR and FIR filters using difference equations and transfer functions.
*   Recognize the characteristics of IIR and FIR filters, including stability, causality, phase response, and computational complexity.
*   Understand the basic building blocks used in the realization of digital filters.

---

### 1. Introduction to Digital Filters

Digital filters are essential components in Digital Signal Processing (DSP) for modifying or extracting specific frequency components from a digital signal. They operate on discrete-time sequences.

*   **Definition:** A digital filter is a system that takes a discrete-time input signal and produces a discrete-time output signal, typically by applying a set of mathematical operations.

*   **Classification:** Digital filters are broadly classified into two main categories based on the nature of their impulse response:
    *   **Infinite Impulse Response (IIR) Filters**
    *   **Finite Impulse Response (FIR) Filters**

---

### 2. Finite Impulse Response (FIR) Filters

FIR filters are characterized by an impulse response that is of finite duration. This means that the output of an FIR filter will become zero after a finite number of time samples following an impulse input.

#### 2.1 Mathematical Representation

An N-th order FIR filter is described by the following difference equation:

$y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2] + \dots + b_N x[n-N]$

Where:
*   $y[n]$ is the output signal at time $n$.
*   $x[n]$ is the input signal at time $n$.
*   $b_k$ are the filter coefficients.
*   $N$ is the order of the filter.

The impulse response $h[n]$ of an FIR filter is given by:

$h[n] = \begin{cases} b_n & 0 \le n \le N \\ 0 & \text{otherwise} \end{cases}$

This is because if $x[n] = \delta[n]$ (an impulse), then $y[n] = h[n]$.

#### 2.2 Transfer Function

Taking the Z-transform of the difference equation:

$Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + b_2 z^{-2} X(z) + \dots + b_N z^{-N} X(z)$

$Y(z) = X(z) [b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_N z^{-N}]$

The transfer function $H(z)$ is defined as the ratio of the output Z-transform to the input Z-transform:

$H(z) = \frac{Y(z)}{X(z)} = b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_N z^{-N}$

$H(z) = \sum_{k=0}^{N} b_k z^{-k}$

**Key Observation:** The transfer function of an FIR filter is a polynomial in $z^{-1}$ and has no poles other than at $z=0$.

#### 2.3 Characteristics of FIR Filters

*   **Stability:** All FIR filters are inherently stable because their impulse response is finite and they have no poles in the z-plane except possibly at the origin.
    *   **Proakis & Manolakis, 4th Ed., p. 611:** "FIR filters are always stable."

*   **Causality:** FIR filters can be designed to be causal by ensuring the impulse response $h[n]$ is zero for $n < 0$. This is achieved by using only past and present input samples in the difference equation.

*   **Phase Response:** FIR filters can be designed to have linear phase. Linear phase is highly desirable in many applications as it ensures that all frequency components are delayed by the same amount, thus preserving the waveform shape of the signal.
    *   **Oppenheim & Schafer, 2nd Ed., p. 574:** Discusses conditions for linear phase in FIR filters (e.g., symmetry of coefficients).

*   **Computational Complexity:** FIR filters generally require more coefficients (and thus more multiplications and additions) than IIR filters for achieving a similar frequency response. This can lead to higher computational load and latency.

*   **Design:** FIR filters are typically designed using methods like the window method, frequency sampling method, and optimal (equiripple) design methods (e.g., Parks-McClellan algorithm).
    *   **Ifeachor & Jervis, 2nd Ed., Chapter 6:** Provides detailed coverage of FIR filter design techniques.

#### 2.4 Example: A Simple FIR Filter

Consider a 2nd order FIR filter with coefficients $b_0 = 1$, $b_1 = 0.5$, $b_2 = 0.2$.

*   **Difference Equation:** $y[n] = x[n] + 0.5 x[n-1] + 0.2 x[n-2]$
*   **Transfer Function:** $H(z) = 1 + 0.5 z^{-1} + 0.2 z^{-2}$
*   **Impulse Response:** $h[0] = 1, h[1] = 0.5, h[2] = 0.2$, and $h[n] = 0$ for $n < 0$ and $n > 2$.

Let's trace the output for an input $x[n] = \{1, 2, 3, 0, 0, \dots\}$ (i.e., $x[0]=1, x[1]=2, x[2]=3$, and $x[n]=0$ for $n \ge 3$).

*   $y[0] = b_0 x[0] = 1 \times 1 = 1$
*   $y[1] = b_0 x[1] + b_1 x[0] = 1 \times 2 + 0.5 \times 1 = 2 + 0.5 = 2.5$
*   $y[2] = b_0 x[2] + b_1 x[1] + b_2 x[0] = 1 \times 3 + 0.5 \times 2 + 0.2 \times 1 = 3 + 1 + 0.2 = 4.2$
*   $y[3] = b_0 x[3] + b_1 x[2] + b_2 x[1] = 1 \times 0 + 0.5 \times 3 + 0.2 \times 2 = 0 + 1.5 + 0.4 = 1.9$
*   $y[4] = b_0 x[4] + b_1 x[3] + b_2 x[2] = 1 \times 0 + 0.5 \times 0 + 0.2 \times 3 = 0.6$
*   $y[5] = b_0 x[5] + b_1 x[4] + b_2 x[3] = 1 \times 0 + 0.5 \times 0 + 0.2 \times 0 = 0$
*   ...and so on, the output will eventually become zero.

---

### 3. Infinite Impulse Response (IIR) Filters

IIR filters are characterized by an impulse response that theoretically decays to zero over an infinite duration. This is achieved by using feedback, meaning the current output depends on past outputs as well as past and present inputs.

#### 3.1 Mathematical Representation

An N-th order IIR filter (also known as a recursive filter) is described by the following general linear constant-coefficient difference equation:

$y[n] = \sum_{k=0}^{N} b_k x[n-k] - \sum_{k=1}^{M} a_k y[n-k]$

Where:
*   $y[n]$ is the output signal at time $n$.
*   $x[n]$ is the input signal at time $n$.
*   $b_k$ are the feedforward coefficients (associated with input samples).
*   $a_k$ are the feedback coefficients (associated with output samples).
*   $N$ is the order of the feedforward part.
*   $M$ is the order of the feedback part.
*   The highest order of the difference equation is typically taken as $\max(N, M)$.

The impulse response $h[n]$ for an IIR filter is generally non-zero for all $n \ge 0$ and decays over time.

#### 3.2 Transfer Function

Taking the Z-transform of the difference equation:

$Y(z) = \sum_{k=0}^{N} b_k z^{-k} X(z) - \sum_{k=1}^{M} a_k z^{-k} Y(z)$

$Y(z) + \sum_{k=1}^{M} a_k z^{-k} Y(z) = \sum_{k=0}^{N} b_k z^{-k} X(z)$

$Y(z) \left( 1 + \sum_{k=1}^{M} a_k z^{-k} \right) = X(z) \sum_{k=0}^{N} b_k z^{-k}$

The transfer function $H(z)$ is:

$H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{N} b_k z^{-k}}{1 + \sum_{k=1}^{M} a_k z^{-k}}$

$H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_N z^{-N}}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_M z^{-M}}$

**Key Observation:** The transfer function of an IIR filter is a rational function (a ratio of two polynomials in $z^{-1}$), which means it has both zeros (from the numerator) and poles (from the denominator). The presence of poles away from the origin is what causes the impulse response to be infinite.

#### 3.3 Characteristics of IIR Filters

*   **Stability:** IIR filters can be unstable if the poles of the transfer function lie outside the unit circle in the z-plane. Careful design is required to ensure stability.
    *   **Proakis & Manolakis, 4th Ed., p. 612:** "The stability of a recursive filter is determined by the location of the poles of its transfer function." For a causal system, stability is guaranteed if all poles lie strictly inside the unit circle ($|p_i| < 1$).
    *   **Salivahanan et al., 2nd Ed., p. 345:** Mentions that stability depends on the roots of the denominator polynomial (poles).

*   **Causality:** IIR filters can be designed to be causal by ensuring the difference equation only uses past and present input samples and past output samples.

*   **Phase Response:** IIR filters generally do not have linear phase. Their phase response is typically non-linear and varies significantly with frequency. This non-linear phase can cause distortion in signals where phase is critical.
    *   **Oppenheim & Schafer, 2nd Ed., p. 612:** Discusses the difficulty in achieving linear phase for IIR filters.

*   **Computational Complexity:** IIR filters are generally more computationally efficient than FIR filters for achieving a given frequency response. They require fewer coefficients (and thus fewer multiplications and additions), leading to lower computational load and latency.
    *   **Ifeachor & Jervis, 2nd Ed., Chapter 7:** Highlights the computational efficiency of IIR filters.

*   **Design:** IIR filters are typically designed by transforming analog filter designs (like Butterworth, Chebyshev, Elliptic) into the digital domain using methods such as the impulse invariance method, bilinear transform, and matched Z-transform.
    *   **Proakis & Manolakis, 4th Ed., Chapter 7:** Explains these design techniques in detail.

#### 3.4 Example: A Simple IIR Filter

Consider a 1st order IIR filter with $b_0 = 1$, $b_1 = 0.5$, and $a_1 = -0.8$.

*   **Difference Equation:** $y[n] = x[n] + 0.5 x[n-1] - (-0.8) y[n-1]$
    $y[n] = x[n] + 0.5 x[n-1] + 0.8 y[n-1]$

*   **Transfer Function:** $H(z) = \frac{1 + 0.5 z^{-1}}{1 - 0.8 z^{-1}}$

*   **Poles and Zeros:**
    *   Zero: $1 + 0.5 z^{-1} = 0 \implies z^{-1} = -2 \implies z = -0.5$
    *   Pole: $1 - 0.8 z^{-1} = 0 \implies z^{-1} = 1/0.8 = 1.25 \implies z = 0.8$

Since the pole $z=0.8$ is inside the unit circle, this filter is stable.

Let's trace the output for an input $x[n] = \{1, 0, 0, 0, \dots\}$ (i.e., $x[0]=1$, $x[n]=0$ for $n>0$), assuming zero initial conditions ($y[-1]=0$).

*   $y[0] = x[0] + 0.5 x[-1] + 0.8 y[-1] = 1 + 0.5(0) + 0.8(0) = 1$
*   $y[1] = x[1] + 0.5 x[0] + 0.8 y[0] = 0 + 0.5(1) + 0.8(1) = 0.5 + 0.8 = 1.3$
*   $y[2] = x[2] + 0.5 x[1] + 0.8 y[1] = 0 + 0.5(0) + 0.8(1.3) = 1.04$
*   $y[3] = x[3] + 0.5 x[2] + 0.8 y[2] = 0 + 0.5(0) + 0.8(1.04) = 0.832$
*   ...and so on. The output will continue to decay but will never reach exactly zero in a finite number of steps due to the feedback. This is the characteristic of an infinite impulse response.

---

### 4. Key Differences: FIR vs. IIR Filters

| Feature             | FIR Filter                                    | IIR Filter                                          |
| :------------------ | :-------------------------------------------- | :-------------------------------------------------- |
| **Impulse Response**| Finite Duration                               | Infinite Duration                                   |
| **Feedback**        | No feedback (non-recursive)                   | Uses feedback (recursive)                           |
| **Difference Eq.**  | $y[n] = \sum b_k x[n-k]$                       | $y[n] = \sum b_k x[n-k] - \sum a_k y[n-k]$          |
| **Transfer Fn.**    | Polynomial in $z^{-1}$                        | Rational function (ratio of polynomials)            |
| **Poles**           | Only at $z=0$                                 | Can be anywhere in the z-plane                      |
| **Stability**       | Always Stable                                 | Can be unstable if poles are outside unit circle    |
| **Phase Response**  | Can be designed to have linear phase          | Generally non-linear phase                          |
| **Computational Load**| Higher for equivalent spec.                 | Lower for equivalent spec.                          |
| **Design Method**   | Windowing, Frequency Sampling, Equiripple     | Analog prototypes (Butterworth, etc.) + Transforms |
| **Memory**          | Requires delay elements for input samples     | Requires delay elements for input and output samples|
| **Noise Sensitivity**| Less sensitive to coefficient quantization   | More sensitive to coefficient quantization          |

*   **Ifeachor & Jervis, 2nd Ed., Table 6.1 & 7.1:** Summarizes many of these key differences.

---

### 5. Basic Building Blocks for Realization

Digital filters are realized in hardware or software using basic building blocks:

*   **Adders:** For summing signals.
*   **Multipliers:** For scaling signals by filter coefficients.
*   **Delay Elements (Unit Delay):** For storing a signal sample for one sample period ($z^{-1}$ operation). These are often implemented using registers.

#### 5.1 Realization of FIR Filters

An FIR filter can be realized directly from its difference equation or transfer function by connecting these basic blocks.

**Direct Form I Realization:**
This is a straightforward implementation of the difference equation, requiring two sets of delay elements.

For $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2]$:

```
      +-------+       +-------+       +-------+
x[n] -->|       |----->| z^-1  |----->| z^-1  |----->
      | Adder |       +-------+       +-------+
      +-------+           |               |
         ^                | b_1           | b_2
         | b_0            v               v
         +----------------+---------------+
```

This diagram directly implements $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2]$. This structure is often called the "non-recursive" or "moving average" structure.

#### 5.2 Realization of IIR Filters

IIR filters require feedback, so delay elements are needed for both input and output samples.

**Direct Form I Realization for IIR:**
This realization directly implements the difference equation $y[n] = b_0 x[n] + b_1 x[n-1] - a_1 y[n-1]$.

```
      +-------+       +-------+       +-------+
x[n] -->|       |----->| z^-1  |----->| z^-1  |----->
      | Adder |       +-------+       +-------+
      +-------+           |               |
         ^                | b_1           | b_2
         | b_0            v               v
         +----------------+---------------+
                          |
                          | y[n-1] (feedback)
                          v
                        +-------+
                        |  z^-1 |
                        +-------+
                            | -a_1
                            v
                          +-------+
                          | Adder |<----(Input from x[n] path)
                          +-------+
                              ^
                              | b_0, b_1, b_2 ...
                              v
                            (Output y[n])
```
*Note: The diagram above is a conceptual representation. A more accurate block diagram for $y[n] = b_0 x[n] + b_1 x[n-1] - a_1 y[n-1]$ would be:*

```
      +-------+
x[n] -->|       |-------+
      | Adder |       |
      +-------+       |
         ^            |
         | b_0        | b_1
         |            v
         +-------->z^-1------>
                    |
                    | y[n-1]
                    v
                  +-------+
                  |  z^-1 |
                  +-------+
                     | -a_1
                     v
                   +-------+
                   | Adder |
                   +-------+-----> y[n]
                      ^
                      | b_1 feedback from previous stage of input
                      |
                      +-- x[n-1] path
```

A clearer representation of Direct Form I for $H(z) = \frac{b_0 + b_1 z^{-1}}{1 + a_1 z^{-1}}$:

```
      +---------+       +---------+
x[n] --| b0      |------>| z^-1    |------>
      +---------+       +---------+
         |                | b1
         |                v
         +--------------> +---------+ --> y[n]
                               ^
                               | a1
                               |
                              +---------+
                              | z^-1    | ----> y[n-1] (feedback)
                              +---------+
```

This Direct Form I structure is conceptually easy to understand but is generally not the most efficient in terms of the number of delay elements or coefficient sensitivity. More efficient structures like Direct Form II, Transposed Direct Form, and Cascade/Parallel forms exist and will be discussed in subsequent topics.

*   **Proakis & Manolakis, 4th Ed., Chapter 6:** Discusses various realization structures for both FIR and IIR filters.
*   **Oppenheim & Schafer, 2nd Ed., Chapter 4:** Also covers filter realization structures.

---

### 6. Importance and Applications

*   **Signal Filtering:** Removing unwanted noise or extracting specific frequency bands (e.g., audio equalizers, medical signal processing).
*   **System Simulation:** Modeling dynamic systems in engineering and science.
*   **Control Systems:** Designing controllers for feedback systems.
*   **Telecommunications:** Channel equalization, echo cancellation.
*   **Image Processing:** Sharpening, blurring, edge detection.

---

### 7. Practice Questions and Exercises

**Instructions:** Answer the following questions to test your understanding.

**Q1. (Multiple Choice)** Which of the following statements is FALSE about FIR filters?
    a) They are always stable.
    b) They can have linear phase.
    c) They are computationally more efficient than IIR filters for equivalent specifications.
    d) Their impulse response has finite duration.

**Q2. (True/False)** An IIR filter's stability depends on the location of its poles in the z-plane.

**Q3. (Short Answer)** Write the difference equation and transfer function for an FIR filter with coefficients $h[0]=0.5, h[1]=1, h[2]=0.5$ and order $N=2$.

**Q4. (Short Answer)** Write the general difference equation and transfer function for an M-th order IIR filter.

**Q5. (Conceptual)** Explain why an FIR filter is always stable.

**Q6. (Conceptual)** Why is linear phase desirable in some signal processing applications?

---

### 8. Answers to Practice Questions

**A1.** **c)** FIR filters are generally less computationally efficient than IIR filters for achieving similar frequency response specifications.

**A2.** **True.** If any pole lies outside the unit circle, the system is unstable.

**A3.**
    *   **Difference Equation:** $y[n] = 0.5 x[n] + 1 x[n-1] + 0.5 x[n-2]$
    *   **Transfer Function:** $H(z) = 0.5 + z^{-1} + 0.5 z^{-2}$

**A4.**
    *   **General Difference Equation:** $y[n] = \sum_{k=0}^{N} b_k x[n-k] - \sum_{k=1}^{M} a_k y[n-k]$
    *   **General Transfer Function:** $H(z) = \frac{\sum_{k=0}^{N} b_k z^{-k}}{1 + \sum_{k=1}^{M} a_k z^{-k}}$

**A5.** An FIR filter's output is a weighted sum of a finite number of past and present input samples. Since the input signal is assumed to be bounded, and the number of terms is finite, the output will also remain bounded, ensuring stability. Mathematically, FIR filters have no poles (or poles only at $z=0$), which are always inside the unit circle, guaranteeing stability.

**A6.** Linear phase means that all frequency components of a signal are delayed by the same amount of time. This is crucial for applications where the shape of the signal must be preserved, such as in audio processing (to avoid altering the perceived sound quality) or data transmission (to prevent inter-symbol interference). Non-linear phase can introduce phase distortion, leading to waveform distortion.

---

### 9. Important Points to Remember

*   **FIR vs. IIR:** The fundamental difference lies in the presence or absence of feedback, which dictates whether the impulse response is finite or infinite.
*   **Stability:** FIR filters are inherently stable; IIR filters require careful pole placement within the unit circle for stability.
*   **Phase:** FIR filters offer the flexibility of linear phase design, a significant advantage for many applications, while IIR filters typically have non-linear phase.
*   **Efficiency:** IIR filters are generally more computationally efficient (fewer operations) for achieving sharp frequency cutoffs compared to FIR filters.
*   **Realization:** Both filter types are built using adders, multipliers, and delay elements. The structure of the realization differs due to the feedback in IIR filters.
*   **Design Trade-offs:** The choice between FIR and IIR filters involves trade-offs between phase linearity, computational complexity, and design complexity.

---
**References:**
*   Proakis, J. G., & Manolakis, D. G. (2007). *Digital Signal Processing: Principles, Algorithms & Applications* (4th ed.). Pearson.
*   Oppenheim, A. V., & Schafer, R. W. (2009). *Discrete-Time Signal Processing* (2nd ed.). Pearson Prentice Hall.
*   Ifeachor, E. C., & Jervis, B. W. (2002). *Digital Signal Processing: A Practical Approach* (2nd ed.). Pearson Education.
*   Salivahanan, S., Vallavaraj, A., & Gnapriya, C. (2010). *Digital Signal Processing* (2nd ed.). Tata McGraw Hill.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
