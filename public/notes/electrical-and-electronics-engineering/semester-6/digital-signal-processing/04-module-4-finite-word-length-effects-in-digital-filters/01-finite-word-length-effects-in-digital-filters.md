---
title: "Finite Word Length effects in Digital Filters:"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: Finite Word Length effects in Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3666a"
status: "completed"
scrapedAt: "2026-05-23T16:26:50.589Z"
---
# Module 4: Finite Word Length Effects in Digital Filters

## 1. Introduction to Finite Word Length Effects

Finite word length effects arise due to the limitation of representing continuous-valued analog signals and system parameters (coefficients, state variables) in a finite number of bits in a digital system. This leads to several inaccuracies that can degrade the performance of digital filters.

### 1.1 Sources of Finite Word Length Effects

*   **Quantization:** The process of approximating a continuous-valued signal or parameter to the nearest representable discrete value.
*   **Rounding:** A type of quantization where the value is rounded to the nearest representable level.
*   **Truncation:** A type of quantization where the fractional part of a number is simply discarded, effectively rounding towards zero.

### 1.2 Types of Quantization Errors

There are two primary sources of quantization errors:

1.  **Input Signal Quantization:** When the analog input signal is converted to a digital signal by an Analog-to-Digital Converter (ADC).
2.  **Coefficient Quantization:** When the filter coefficients, designed with infinite precision, are represented with a finite number of bits.
3.  **Product Quantization:** When the multiplication of input samples or state variables with filter coefficients results in a value that exceeds the available word length and must be quantized.
4.  **Summation Quantization (Limit Cycle Effects):** When the accumulation of quantized values in the filter's summation can lead to self-sustaining oscillations.

### 1.3 Impact of Finite Word Length

*   **Distortion:** Introduction of unwanted frequency components.
*   **Noise:** Addition of random-like errors to the output signal.
*   **Filter Performance Degradation:** Deviation from the desired frequency response, instability, and reduced accuracy.
*   **Limit Cycles:** In IIR filters, especially those with feedback, quantization errors can cause the filter output to oscillate between specific values even in the absence of an input signal.

## 2. Quantization Error Models

Quantization error is typically modeled as an additive noise signal.

### 2.1 Quantization Error for Rounding

When rounding to the nearest quantization level, the error `e(n)` is uniformly distributed over the interval $[-Q/2, Q/2]$, where `Q` is the quantization step size.

*   **Quantization Step Size (Q):** The difference between adjacent quantization levels. For a binary representation with $L$ bits, $Q = V_{max} / 2^L$, where $V_{max}$ is the maximum representable signal value.
*   **Error Variance:** $\sigma_e^2 = Q^2/12$.

### 2.2 Quantization Error for Truncation

When truncating, the error `e(n)` is uniformly distributed over the interval $[-Q, 0]$.

*   **Error Variance:** $\sigma_e^2 = Q^2/3$.

**Important Note:** Rounding generally introduces less error than truncation for the same word length.

## 3. Quantization Effects in Digital Filters

### 3.1 Input Signal Quantization

The input signal $x(n)$ is typically quantized by an ADC. If the input signal is within the dynamic range of the ADC, this quantization introduces an error $e_x(n)$.

*   **Modeling:** The quantized input $x_q(n)$ can be represented as $x_q(n) = x(n) + e_x(n)$, where $e_x(n)$ is the quantization error.
*   **Impact:** This error propagates through the filter, affecting the output signal.

### 3.2 Coefficient Quantization

Filter coefficients, designed with infinite precision, must be represented with a finite number of bits. This leads to a change in the filter's transfer function.

*   **Impact on Frequency Response:** Coefficient quantization can cause significant deviations from the desired frequency response, especially for high-order filters or filters with sharp transitions. Poles and zeros can shift, leading to unintended gain and phase responses.
*   **Sensitivity Analysis:** The sensitivity of a filter's transfer function to coefficient variations is crucial. Filters with pole-zero pairs close to the unit circle or with poles close to unity are more sensitive.

**Example:** Consider a simple first-order IIR filter $y(n) = a \cdot y(n-1) + x(n)$. If the coefficient 'a' is quantized to $a_q$, the new transfer function is $H_q(z) = \frac{1}{1 - a_q z^{-1}}$. The difference in magnitude response $|H(e^{j\omega})| - |H_q(e^{j\omega})|$ quantifies the effect of coefficient quantization.

### 3.3 Product Quantization

In digital filters, multiplications between signal samples and coefficients, or between state variables, produce intermediate results. If these results exceed the available word length, they must be quantized.

*   **Location of Quantization:** Product quantization can occur immediately after multiplication or after summation.
*   **Impact:** Similar to input signal quantization, it introduces additive noise that propagates through the filter.

### 3.4 Summation Quantization and Limit Cycles

Summation quantization occurs when intermediate sums in the filter's difference equation are quantized. This is particularly problematic in IIR filters due to the feedback loops.

*   **Limit Cycles:** These are self-sustaining oscillations in the output of an IIR filter, even when the input is zero, due to the accumulation of quantization errors. They are a form of undesirable behavior caused by finite word length arithmetic.

#### 3.4.1 Types of Limit Cycles

1.  **Geometric Limit Cycles:** Occur when the output settles to a fixed value other than zero. These are less common and can be avoided by proper filter design.
2.  **Non-zero Limit Cycles (Dead Zone Limit Cycles):** Occur when the output oscillates between a finite set of values, and the filter remains in this state until a sufficiently large input signal "kicks" it out of the dead zone.

#### 3.4.2 Analyzing Limit Cycles

Limit cycle behavior is often analyzed by considering the filter's difference equation and the effect of quantization. For a first-order filter $y(n) = a \cdot y(n-1) + x(n)$, with quantization occurring after multiplication and the assumption that $x(n)=0$:

$y_q(n) = \text{Quantize}(a \cdot y_q(n-1))$

Let $y_q(n) = y(n) + \epsilon(n)$, where $\epsilon(n)$ is the quantization error. If we assume truncation quantization, where the value is rounded towards zero:

$y_q(n) = \text{Trun}(a \cdot y_q(n-1))$

If $|a| < 1$, the output should ideally decay to zero. However, due to quantization, it might oscillate.

**Example:** For a first-order filter with $a = 0.9$ and a quantization step size $Q$. If the output is $y_q(n-1) = 0.4Q$, and we use truncation:

$y_q(n) = \text{Trun}(0.9 \cdot 0.4Q) = \text{Trun}(0.36Q) = 0$ (assuming $Q$ is the smallest representable increment).

If the output is $y_q(n-1) = 0.6Q$:

$y_q(n) = \text{Trun}(0.9 \cdot 0.6Q) = \text{Trun}(0.54Q) = 0$.

If the output is $y_q(n-1) = 1.2Q$:

$y_q(n) = \text{Trun}(0.9 \cdot 1.2Q) = \text{Trun}(1.08Q) = 1Q$.

If the output is $y_q(n-1) = 1.3Q$:

$y_q(n) = \text{Trun}(0.9 \cdot 1.3Q) = \text{Trun}(1.17Q) = 1Q$.

The smallest amplitude of oscillation (dead zone) is related to the quantization step size and the coefficient. For truncation, the dead zone width can be approximately $Q$ when $|a| < 1$.

**Proakis & Manolakis:** Chapter 7 discusses quantization effects extensively. They analyze the variance of output noise due to coefficient and signal quantization. They also introduce methods to bound the amplitude of limit cycles.

**Oppenheim & Schafer:** Chapter 8 focuses on quantization effects and limit cycles, providing a detailed mathematical treatment of these phenomena and discussing the trade-offs between filter structure, word length, and performance. They emphasize the use of state-variable diagrams for analyzing quantization effects.

## 4. Mitigation Techniques for Finite Word Length Effects

Several techniques can be employed to minimize the impact of finite word length effects.

### 4.1 Increasing Word Length

The most straightforward method is to use a larger word length for representing signals and coefficients. This reduces the quantization step size and, consequently, the quantization error variance.

*   **Trade-off:** Increased hardware complexity, cost, and power consumption.

### 4.2 Choice of Filter Structure

The structure of the digital filter significantly affects its sensitivity to finite word length effects.

*   **Direct Form I & II:** More sensitive to coefficient quantization, especially for higher-order filters. Poles and zeros are directly represented, making them prone to shift.
*   **Cascade and Parallel Structures:** By decomposing a high-order filter into lower-order sections (e.g., second-order sections), the sensitivity to coefficient quantization can be reduced. The overall response is the product or sum of the responses of these sections.
*   **Lattice and Ladder Structures:** These structures exhibit lower sensitivity to coefficient quantization compared to direct forms. They are often preferred for implementing digital filters in finite word length environments.

**Proakis & Manolakis:** Discusses the advantages of cascade and parallel forms for reducing coefficient sensitivity.

**Oppenheim & Schafer:** Provides detailed comparisons of different filter structures regarding their finite word length performance.

### 4.3 Coefficient Optimization and Scaling

*   **Coefficient Quantization Optimization:** Techniques exist to find the "best" quantized coefficients that minimize the deviation from the ideal frequency response. This often involves optimization algorithms.
*   **Scaling:** To prevent overflow during summation and multiplication, the signals within the filter should be scaled appropriately. This involves monitoring the maximum expected signal levels at various points in the filter.

### 4.4 Rounding Techniques

*   **Stochastic Rounding:** Instead of rounding to the nearest value, the output is rounded to one of the two nearest representable values with a probability proportional to the distance. This can sometimes reduce the bias introduced by deterministic rounding.

### 4.5 Quantizer Design

*   **Non-linear Quantizers:** Custom quantizers can be designed to better match the signal statistics, potentially reducing the overall error.
*   **Over-sampling and Noise Shaping:** In ADCs, over-sampling and noise-shaping techniques are used to push the quantization noise to higher frequencies, where it can be more easily filtered out by analog or digital filters.

## 5. Quantization Error Analysis and Modeling

A crucial aspect of understanding finite word length effects is to quantify their impact. This involves analyzing the signal-to-quantization noise ratio (SQNR).

### 5.1 Signal-to-Quantization Noise Ratio (SQNR)

SQNR is a measure of the quality of the quantized signal. It is defined as the ratio of the signal power to the quantization noise power.

$SQNR = \frac{P_s}{P_e}$

Where:
*   $P_s$: Signal power.
*   $P_e$: Quantization error power.

For a signal quantized by rounding with $L$ bits, the theoretical maximum SQNR in dB is:

$SQNR_{max} = 6.02L + 1.76 \text{ dB}$

**Proakis & Manolakis:** Provides detailed derivations of SQNR for various scenarios, including the impact of filter structures and coefficient quantization.

**Ifeachor & Jervis:** Discusses SQNR in the context of practical DSP implementations, illustrating how hardware limitations affect achievable SQNR.

### 5.2 Noise Gain

Noise gain is a measure of how quantization noise is amplified as it propagates through the filter.

*   **For FIR Filters:** The noise gain is related to the sum of the absolute values of the filter coefficients.
*   **For IIR Filters:** The noise gain is more complex and depends on the filter's poles and the structure. It can be significantly higher than for FIR filters, especially if poles are close to the unit circle.

### 5.3 Roundoff Noise in FIR Filters

For an FIR filter $y(n) = \sum_{k=0}^{N} b_k x(n-k)$, if each product $b_k x(n-k)$ is quantized with an error $e_k(n)$, the total output error is $e_y(n) = \sum_{k=0}^{N} e_k(n)$. Assuming the quantization errors are independent and uniformly distributed over $[-Q/2, Q/2]$ for rounding:

The total noise power at the output is the sum of the individual error powers:

$P_{e_y} = \sum_{k=0}^{N} E[e_k^2(n)] = \sum_{k=0}^{N} \sigma_{e_k}^2 = \sum_{k=0}^{N} \frac{Q^2}{12}$

If the word length used for products is the same for all terms, then $P_{e_y} = (N+1) \frac{Q^2}{12}$.

**Ifeachor & Jervis:** Provides practical examples of calculating noise gain for FIR filters and discusses how the $L_1$ norm of the impulse response relates to noise amplification.

### 5.4 Roundoff Noise in IIR Filters

The analysis of roundoff noise in IIR filters is more complex due to the feedback. The output error $e_y(n)$ depends on the input signal, past output signals, and the quantization errors introduced at each stage.

$y_q(n) = \sum_{i=0}^{M} a_i y_q(n-i) + \sum_{k=0}^{N} b_k x_q(n-k)$

Let $y_q(n) = y(n) + e_y(n)$ and $x_q(n) = x(n) + e_x(n)$. Substituting these into the difference equation and considering the quantization errors introduced at each multiplication and summation step leads to a detailed analysis involving the filter's impulse response and the locations of quantization errors.

**Key Insight:** The overall noise gain in an IIR filter is influenced by the magnitude of the impulse response. If the impulse response grows significantly before decaying (e.g., due to poles near the unit circle), the quantization noise will be amplified more.

**Oppenheim & Schafer:** Chapter 8, Section 8.3 provides a rigorous analysis of roundoff noise in IIR filters using state-variable representations, showing how the choice of state variables and filter structure impacts the noise gain.

## 6. Practice Questions and Answers

Here are some practice questions to test your understanding.

**Question 1:**
(CO4, K3) A digital filter has coefficients $b_0 = 0.5$, $b_1 = -0.25$. If the input signal is $x(n)$, and the products $b_k x(n-k)$ are quantized using truncation to 4 bits (excluding sign bit, using 2's complement for coefficients and data), what is the quantization error variance for each product?

**Answer:**
Assuming the input signal and coefficients are represented with a certain number of bits, let's consider the quantization step size $Q$. If we assume that the product $b_k x(n-k)$ is quantized to the nearest representable value after the multiplication. For truncation to 4 bits, the range of values that can be represented after quantization is limited.

Let's simplify this by considering the quantization of the *coefficient* itself. If the coefficient $b_0 = 0.5$ is represented in 4 bits (2's complement, with one sign bit and three fractional bits), the quantization step size for coefficients would be $Q_{coeff} = 2^{-3} = 0.125$.

If $b_0 = 0.5$ (exact), and it is represented as $b_{0q} = 0.5$, there is no quantization error for the coefficient.

Now, let's consider the product $b_k x(n-k)$. If the product itself is quantized. Suppose the maximum value of the product is $V_{max}$. If the product is quantized to $L$ bits, the step size $Q$ for the product would depend on the representation of the product.

**Let's reframe the question to be about coefficient quantization:**
If coefficient $b_0 = 0.5$ is to be represented using 3 fractional bits in 2's complement representation (total 4 bits: 1 sign, 3 fractional), the quantization step size $Q = 2^{-3} = 0.125$.
The exact value $0.5$ can be represented exactly as $0.100_2 \times 2^0$. So, $b_{0q} = 0.5$. The quantization error for the coefficient is 0.

If coefficient $b_1 = -0.25$ is to be represented using 3 fractional bits in 2's complement:
$-0.25$ in binary is $-0.010_2$. This can be represented exactly as $-0.010_2 \times 2^0$. So, $b_{1q} = -0.25$. The quantization error for this coefficient is also 0.

**To illustrate quantization error, let's take a coefficient that cannot be represented exactly:**
Suppose a coefficient is $b_2 = 0.3$. With 3 fractional bits ($Q=0.125$), $0.3$ lies between $0.25 (0.010_2)$ and $0.375 (0.011_2)$.
Using truncation to 3 fractional bits, $b_{2q} = 0.25$. The error is $0.3 - 0.25 = 0.05$.
Using rounding to 3 fractional bits, $b_{2q} = 0.25$ (since $0.3$ is closer to $0.25$ than $0.375$). The error is $0.3 - 0.25 = 0.05$.
The error range for truncation is $[-Q, 0]$, so $[-0.125, 0]$. The error variance for truncation is $Q^2/3 = (0.125)^2/3$.
The error range for rounding is $[-Q/2, Q/2]$, so $[-0.0625, 0.0625]$. The error variance for rounding is $Q^2/12 = (0.125)^2/12$.

**Question 2:**
(CO4, K3) Explain why IIR filters are generally more susceptible to limit cycle oscillations than FIR filters.

**Answer:**
IIR filters have feedback loops in their structure. This means that past output samples are fed back and used in the computation of the current output. When quantization occurs during the multiplication of these feedback signals or their summation, small errors can accumulate. If the feedback gain is significant (e.g., poles close to the unit circle), these accumulated errors can grow and lead to self-sustaining oscillations, known as limit cycles, even in the absence of an input signal.

FIR filters, on the other hand, do not have feedback. Their output is a weighted sum of past input samples. While quantization errors are introduced in the multiplications and summations, these errors do not get re-circulated and amplified in feedback loops. Therefore, FIR filters are generally immune to limit cycle oscillations.

**Question 3:**
(CO4, K3) What is the theoretical maximum Signal-to-Quantization Noise Ratio (SQNR) in dB for a signal quantized using rounding to $L=12$ bits?

**Answer:**
The theoretical maximum SQNR for a signal quantized using rounding to $L$ bits is given by the formula:
$SQNR_{max} = 6.02L + 1.76 \text{ dB}$

For $L=12$ bits:
$SQNR_{max} = 6.02 \times 12 + 1.76$
$SQNR_{max} = 72.24 + 1.76$
$SQNR_{max} = 74.00 \text{ dB}$

**Question 4:**
(CO4, K3) Why is the choice of filter structure important when implementing digital filters with finite word lengths? Give an example of a filter structure that is less sensitive to coefficient quantization.

**Answer:**
The choice of filter structure is critical because different structures have varying sensitivities to the quantization of filter coefficients and round-off errors in computations. Some structures can amplify quantization noise more than others, leading to significant degradation in the filter's performance (e.g., deviation from the ideal frequency response, increased noise floor).

An example of a filter structure that is less sensitive to coefficient quantization is the **Lattice structure** or **Ladder structure**. These structures are derived from orthogonal polynomials and have the property that the quantization error introduced by quantizing one coefficient affects only a limited part of the overall transfer function, rather than significantly altering the pole and zero locations. Cascade and parallel forms also offer improved sensitivity over direct forms by breaking down high-order filters into lower-order sections.

## 7. Key Points to Remember

*   Finite word length effects are inevitable in digital implementations.
*   Quantization, rounding, and truncation are the core processes causing these effects.
*   Input signal quantization, coefficient quantization, product quantization, and summation quantization are the sources of error.
*   IIR filters are more prone to limit cycles due to feedback.
*   Increasing word length is the most direct way to reduce errors but increases complexity.
*   Filter structure choice (e.g., lattice, cascade, parallel) is crucial for mitigating coefficient sensitivity and round-off noise.
*   SQNR quantifies the signal quality after quantization, with a theoretical maximum based on the number of bits.
*   Noise gain measures how quantization noise is amplified through the filter.

## 8. Alignment with Course Outcomes

*   **CO1: Analyse discrete-time systems using DFT (Knowledge Level: K2)**
    *   While this module primarily deals with finite word length effects, understanding how these effects alter the system's behavior (e.g., change in frequency response due to coefficient quantization) relates to system analysis. DFT can be used to analyze the frequency response of a filter *after* coefficient quantization has occurred.
*   **CO2: Realise IIR and FIR filters (Knowledge Level: K3)**
    *   This module directly addresses the practical challenges of realizing these filters in hardware due to finite word lengths. Understanding these effects is essential for choosing appropriate realization techniques and word lengths.
*   **CO3: Design of IIR and FIR filters (Knowledge Level: K3)**
    *   Filter design must consider finite word length effects. A filter designed with infinite precision might not meet specifications when implemented with finite precision. Knowledge of these effects informs the design process, guiding the selection of filter structures and specifying acceptable coefficient sensitivity.
*   **CO4: Analyse effect of word length in digital filters (Knowledge Level: K3)**
    *   This is the core outcome of this module. All topics covered, from error models to mitigation techniques and noise analysis, directly contribute to analyzing the effect of word length.

This comprehensive set of notes covers the essential aspects of Finite Word Length Effects in Digital Filters, drawing upon the principles and methodologies discussed in the recommended textbooks. Remember to practice with different examples and explore the specific analyses provided in Proakis & Manolakis and Oppenheim & Schafer for a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
