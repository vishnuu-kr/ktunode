---
title: "Realization of digital controllers."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 2: Design of Compensators:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d5"
status: "completed"
scrapedAt: "2026-05-23T16:36:19.838Z"
---
# Discrete Time Control Systems: Module 2 - Design of Compensators

## Topic: Realization of Digital Controllers

This module focuses on the practical implementation of digital controllers that have been designed to meet specific performance objectives for discrete-time systems. We will explore various methods for converting the designed controller algorithms into executable code or hardware configurations.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand different methods for realizing a digital controller.
*   Implement digital controllers in various forms, such as direct,
    normal, and transposed structures.
*   Analyze the effects of finite word-length and quantization on controller performance.
*   Select appropriate realization structures based on system requirements and hardware constraints.
*   Apply the concepts of digital controller realization to practical control problems.

---

### Key Concepts and Definitions:

**1. Digital Controller:** A controller that operates on discrete-time signals, typically implemented using a digital computer or microcontroller. It takes sampled output signals as input and generates control signals at discrete time instants.

**2. Transfer Function of a Digital Controller:** The pulse transfer function $D(z)$ represents the input-output relationship of a digital controller in the z-domain. It is typically obtained from the discretized version of an analog controller or designed directly in the z-domain.

**3. Realization:** The process of converting a digital controller's pulse transfer function into a specific structure or algorithm that can be implemented on digital hardware. This involves expressing the transfer function in a form suitable for computation.

**4. Difference Equation:** A time-domain representation of the digital controller's operation, derived from its pulse transfer function. It relates the current control output to past control outputs and current and past sampled input signals.

**5. Finite Word Length Effects:** The limitations imposed by the finite number of bits used to represent digital signals (inputs, outputs, coefficients, and intermediate calculations). These effects can lead to:
    *   **Quantization Error:** Errors introduced when analog signals are converted to digital (ADC) or digital signals are converted back to analog (DAC).
    *   **Rounding and Truncation Errors:** Errors occurring during arithmetic operations due to the finite word length of operands and results.
    *   **Limit Cycles:** Oscillatory behavior in the controller output that can arise from quantization and rounding errors, especially in the absence of an input signal.

**6. Fixed-Point vs. Floating-Point Arithmetic:**
    *   **Fixed-Point:** Numbers are represented with a fixed number of bits for the integer and fractional parts. Simpler hardware but prone to overflow and underflow issues.
    *   **Floating-Point:** Numbers are represented in a scientific notation format (mantissa and exponent). More dynamic range and precision but computationally more intensive.

---

### Methods of Realizing Digital Controllers:

The pulse transfer function of a digital controller, $D(z)$, can be expressed as a ratio of polynomials in $z^{-1}$:

$D(z) = \frac{Y(z)}{U(z)} = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_m z^{-m}}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_n z^{-n}}$

where $Y(z)$ is the output in the z-domain and $U(z)$ is the input in the z-domain.

This transfer function can be converted into a difference equation:

$y(k) = -a_1 y(k-1) - a_2 y(k-2) - \dots - a_n y(k-n) + b_0 u(k) + b_1 u(k-1) + \dots + b_m u(k-m)$

Several realization structures exist to implement this difference equation. The choice of structure impacts computational complexity, sensitivity to coefficient quantization, and susceptibility to round-off errors.

#### 1. Direct Realization (Standard Form)

This is the most straightforward realization, directly implementing the difference equation.

**Structure:**

$$
\begin{aligned}
y(k) = & b_0 u(k) + b_1 u(k-1) + \dots + b_m u(k-m) \\
& - a_1 y(k-1) - a_2 y(k-2) - \dots - a_n y(k-n)
\end{aligned}
$$

**Block Diagram:**

(A block diagram would show delay elements ($z^{-1}$) for past input and output samples, multipliers for coefficients $b_i$ and $a_i$, and adders to sum the terms.)

**Advantages:**
*   Simple and intuitive.
*   Directly maps the difference equation.

**Disadvantages:**
*   Can be sensitive to coefficient quantization.
*   Susceptible to round-off errors, especially for higher-order systems.

**Example (First-order controller $D(z) = \frac{b_0 + b_1 z^{-1}}{1 + a_1 z^{-1}}$):**

Difference Equation: $y(k) = -a_1 y(k-1) + b_0 u(k) + b_1 u(k-1)$

Implementation requires:
*   One delay element for $u(k-1)$
*   One delay element for $y(k-1)$
*   Multipliers for $b_0, b_1, a_1$
*   An adder to combine terms

**Reference:** This structure is generally discussed in all introductory texts on digital control, including **Philips and Nagle (1984)**, **Ogata (2009)**, and **Gopal (1997)**.

#### 2. Parallel Realization

This structure decomposes the controller's transfer function into a sum of simpler transfer functions, typically first-order or second-order sections.

**Decomposition:**
The transfer function $D(z)$ is decomposed using partial fraction expansion:

$D(z) = P_0 + \sum_{i=1}^p \frac{C_{i1} + C_{i2} z^{-1}}{1 + d_{i1} z^{-1} + d_{i2} z^{-2}}$ (for real poles)
or
$D(z) = P_0 + \sum_{i=1}^p \frac{A_i}{1 - r_i z^{-1}}$ (for distinct real poles)

Each term is then realized separately and summed up.

**Structure:** Each section is realized in a simple form (e.g., direct form I for first-order terms).

**Advantages:**
*   Generally less sensitive to coefficient quantization compared to the direct form.
*   Can offer better numerical stability.

**Disadvantages:**
*   More complex structure with more arithmetic operations.
*   Requires careful pairing of complex conjugate poles for real coefficient realization.

**Example (Second-order controller $D(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 + a_1 z^{-1} + a_2 z^{-2}}$):**
If the denominator has roots $r_1, r_2$, then $1 + a_1 z^{-1} + a_2 z^{-2} = (1 - r_1 z^{-1})(1 - r_2 z^{-1})$.
Partial fraction expansion:
$D(z) = K + \frac{C_1}{1 - r_1 z^{-1}} + \frac{C_2}{1 - r_2 z^{-1}}$ (assuming distinct real poles)

Each fraction $\frac{C_i}{1 - r_i z^{-1}}$ can be realized as $y_i(k) = r_i y_i(k-1) + C_i u(k)$, and the total output is $y(k) = K u(k) + y_1(k) + y_2(k)$.

**Reference:** **Philips and Nagle (1984)** provides a good discussion on parallel realization. **Kuo (1992)** also covers this extensively.

#### 3. Cascade Realization

This structure decomposes the controller's transfer function into a product of simpler transfer functions, typically first-order or second-order sections.

**Decomposition:**
$D(z) = D_1(z) D_2(z) \dots D_L(z)$
where each $D_i(z)$ is a low-order (usually first or second order) transfer function.

**Structure:** Each section $D_i(z)$ is realized in a chosen structure (e.g., direct form I, normal, or transposed). The output of one section is the input to the next.

**Advantages:**
*   Can offer reduced sensitivity to coefficient quantization by carefully choosing the pairing of zeros and poles.
*   Often leads to good numerical properties.

**Disadvantages:**
*   The choice of pairing zeros and poles significantly impacts performance. Optimal pairing strategies exist to minimize sensitivity.

**Example (Third-order controller $D(z) = \frac{(b_0 + b_1 z^{-1})(b'_0 + b'_1 z^{-1} + b'_2 z^{-2})}{(1 + a_1 z^{-1})(1 + a'_1 z^{-1} + a'_2 z^{-2})}$):**
This can be decomposed into:
$D_1(z) = \frac{b_0 + b_1 z^{-1}}{1 + a_1 z^{-1}}$
$D_2(z) = \frac{b'_0 + b'_1 z^{-1} + b'_2 z^{-2}}{1 + a'_1 z^{-1} + a'_2 z^{-2}}$
$D(z) = D_1(z) D_2(z)$

Each $D_i(z)$ is realized separately (e.g., direct form I) and cascaded.

**Reference:** **Ogata (2009)** and **Gopal (1997)** explain cascade realization and the importance of zero-pole pairing. **Houpis and Lamont (1985)** also delve into this.

#### 4. Normal Realization (Canonical Forms)

These are highly structured realizations that aim to minimize the number of multipliers and delay elements for a given order, while also offering good numerical properties.

**a) Normal Direct Form (or Controllable Canonical Form):**
This form is derived from the controllable canonical state-space representation.

**Structure:**
For a transfer function $D(z) = \frac{b_0 + b_1 z^{-1} + \dots + b_n z^{-n}}{1 + a_1 z^{-1} + \dots + a_n z^{-n}}$ (assuming $m=n$), the difference equation is:
$y(k) = -a_1 y(k-1) - \dots - a_n y(k-n) + b_0 u(k) + b_1 u(k-1) + \dots + b_n u(k-n)$

However, the "normal direct form" often refers to a structure where the state variables are directly related to the delay element outputs. A common representation leads to:

$y(k) = b_0 u(k) + x_1(k+1)$
$x_1(k+1) = b_1 u(k) - a_1 y(k) + x_2(k+1)$
$x_2(k+1) = b_2 u(k) - a_2 y(k) + x_3(k+1)$
...
$x_n(k+1) = b_n u(k) - a_n y(k)$

This can be re-arranged into a form with feedback and feedforward paths.

**A more standard representation of Normal Direct Form:**

$y(k) = \sum_{i=0}^n b_i u(k-i) - \sum_{i=1}^n a_i y(k-i)$

The structure often involves a chain of delay elements with feedback loops connected to specific points. A common realization has $n$ delays and $2n+1$ multipliers.

**Advantages:**
*   Minimal number of multipliers ($2n+1$ for a transfer function of order $n$).
*   Good numerical properties, especially when paired with an appropriate zero-pole pairing in cascade.

**Disadvantages:**
*   Can still be sensitive to coefficient quantization, depending on the pairing strategy.

**Reference:** **Philips and Nagle (1984)** and **Gopal (1997)** discuss canonical forms.

**b) Transposed Direct Form:**
This is obtained by transposing the block diagram of the direct form. It swaps the roles of summers and branching points, and also delays.

**Structure:**
The transposed direct form can be visualized by reversing the direction of signal flow in the direct form diagram.

For $D(z) = \frac{b_0 + b_1 z^{-1} + \dots + b_n z^{-n}}{1 + a_1 z^{-1} + \dots + a_n z^{-n}}$, the difference equation might not be immediately obvious from transposing the direct form's difference equation. Instead, consider the signal flow.

A common transposed structure can be represented by:
$y(k) = b_0 u(k) + x_1(k)$
$x_1(k) = b_1 u(k) + a_1 y(k) + x_2(k)$
$x_2(k) = b_2 u(k) + a_2 y(k) + x_3(k)$
...
$x_n(k) = b_n u(k) + a_n y(k)$

This structure has $n$ delays, $2n+1$ multipliers, and $n+1$ adders.

**Advantages:**
*   Often exhibits better numerical properties (less sensitive to coefficient quantization) than the direct form.
*   The output signal is available at the input of the last delay element.

**Disadvantages:**
*   Can be less intuitive to derive directly from the difference equation.

**Reference:** **Ogata (2009)** and **Kuo (1992)** discuss transposed structures.

---

### Finite Word-Length Effects and Quantization

The implementation of digital controllers on finite-precision hardware introduces errors that can degrade performance.

**1. Quantization of Input/Output:**
*   **Analog-to-Digital Converter (ADC):** Converts the continuous-time, continuous-amplitude analog sensor output to a discrete-time, discrete-amplitude digital signal. The resolution of the ADC determines the quantization error.
*   **Digital-to-Analog Converter (DAC):** Converts the discrete-time, discrete-amplitude digital control signal to a continuous-time, continuous-amplitude analog signal. Similar quantization effects occur here.

**2. Quantization of Coefficients:**
*   The controller coefficients ($a_i$, $b_i$) must be represented with finite precision. This can lead to errors in the controller's transfer function. The sensitivity of the realization structure to coefficient errors is critical.

**3. Quantization of Intermediate Calculations (Round-off Error):**
*   During the computation of the difference equation, intermediate products and sums are also quantized due to finite word length. This is often the most significant source of error.

**Methods to Minimize Finite Word-Length Effects:**

*   **Choose appropriate realization structures:** Parallel and cascade forms with careful pairing are generally less sensitive than direct forms.
*   **Use higher word lengths:** Increased precision for data and coefficients reduces quantization error.
*   **Scaling:** Scaling intermediate signals can help prevent overflow.
*   **Error detection and correction:** More complex techniques for specific applications.
*   **Coefficient optimization:** Techniques to adjust coefficients to minimize sensitivity to quantization.

**Analysis of Limit Cycles:**
Limit cycles are self-sustained oscillations that occur in digital systems due to quantization and rounding. They are particularly problematic in systems with no input or with very small inputs.
*   **Small Amplitude Limit Cycles:** Typically occur in the presence of quantization.
*   **Overflow Limit Cycles:** Occur when intermediate signal values exceed the representable range.

**Techniques for analyzing limit cycles:**
*   **State-space representation:** Analyzing the phase plane of the system.
*   **Gain calculations:** Estimating the gain of the quantization characteristics.

**Reference:** **Philips and Nagle (1984)** and **Gopal (1997)** dedicate significant portions to finite word-length effects. **Franklin, Powell, and Workman (3rd Ed.)** provide a thorough treatment of quantization and its impact. **Isermann (1989)** also covers implementation aspects.

---

### Practical Considerations in Realization

*   **Sampling Rate ($T$):** The choice of sampling period affects the required controller complexity and the accuracy of discretization. Higher sampling rates generally require higher-order controllers and can introduce numerical issues.
*   **Processor Speed and Memory:** The chosen realization structure must be computationally feasible on the target digital hardware (microcontroller, DSP, etc.). Memory requirements for storing coefficients and past samples must also be considered.
*   **Real-time Constraints:** The controller must execute its computations within the sampling period to maintain closed-loop stability and performance.
*   **Hardware Interfaces:** The digital controller needs to interface with ADCs, DACs, sensors, and actuators.

---

### Alignment with Course Outcomes:

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach. (Knowledge Level: K3)**
    *   This topic builds upon understanding pulse transfer functions by showing how to implement them. The difference equations derived from $D(z)$ are the direct result of this modeling.
*   **CO2: Design digital compensators for linear systems. (Knowledge Level: K3)**
    *   This topic is the practical "how-to" after the design phase. The realization process directly implements the designed compensator's transfer function.
*   **CO3: Model and analyse discrete-time system using state space approach. (Knowledge Level: K3)**
    *   While not directly focused on state-space design, canonical forms (like controllable canonical form) are derived from state-space representations, linking these concepts.
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system. (Knowledge Level: K3)**
    *   The realization techniques discussed can also be applied to implement state feedback laws and observer equations.

---

### Practice Questions:

**Question 1:**
A digital controller has the pulse transfer function:
$D(z) = \frac{1 + 2z^{-1} + z^{-2}}{1 - 0.5z^{-1}}$
Derive the difference equation for this controller and describe how to realize it in a direct form.

**Question 2:**
Consider the transfer function $D(z) = \frac{0.2 + 0.3z^{-1}}{1 - 0.4z^{-1} + 0.1z^{-2}}$.
a) Decompose this transfer function into a cascade of first-order and second-order sections.
b) Briefly describe how each section could be realized.
c) What are the potential advantages of this realization over a direct form?

**Question 3:**
Explain the primary sources of finite word-length errors in digital controller implementation and discuss two methods to mitigate their impact.

**Question 4:**
Compare and contrast the direct form realization and the transposed direct form realization in terms of their structure and numerical properties.

---

### Answers to Practice Questions:

**Answer 1:**
The difference equation is derived by cross-multiplying:
$Y(z)(1 - 0.5z^{-1}) = X(z)(1 + 2z^{-1} + z^{-2})$
$Y(z) - 0.5z^{-1}Y(z) = X(z) + 2z^{-1}X(z) + z^{-2}X(z)$
Taking the inverse z-transform:
$y(k) - 0.5y(k-1) = u(k) + 2u(k-1) + u(k-2)$
Rearranging for $y(k)$:
$y(k) = 0.5y(k-1) + u(k) + 2u(k-1) + u(k-2)$

**Direct Form Realization:**
This requires:
*   One delay element for $y(k-1)$.
*   One delay element for $u(k-1)$.
*   One delay element for $u(k-2)$.
*   Multipliers: $0.5$ for $y(k-1)$, $1$ for $u(k)$, $2$ for $u(k-1)$, $1$ for $u(k-2)$.
*   An adder to sum all the terms on the right-hand side to produce $y(k)$.
The block diagram would show a feedback path from the output of the $y(k-1)$ delay element (multiplied by 0.5) and feedforward paths from the current input $u(k)$ and past inputs $u(k-1)$ and $u(k-2)$ (multiplied by their respective coefficients), all summed together.

**Answer 2:**
a) **Decomposition:**
The denominator is $1 - 0.4z^{-1} + 0.1z^{-2}$. To find its roots, consider $0.1r^2 - 0.4r + 1 = 0$, or $r^2 - 4r + 10 = 0$.
Using the quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$r = \frac{4 \pm \sqrt{(-4)^2 - 4(1)(10)}}{2(1)} = \frac{4 \pm \sqrt{16 - 40}}{2} = \frac{4 \pm \sqrt{-24}}{2} = 2 \pm j\sqrt{6}$
The poles are at $z = \frac{1}{2 \pm j\sqrt{6}}$. These are complex poles. For real coefficient realization, we need to pair them in a second-order section.

Let's assume for simplicity that the numerator also has roots that can be paired with the denominator poles to form simpler sections. However, if we just need to decompose the denominator for realization purposes, we can consider it as a single second-order section.

If the numerator had a simple term like $0.2$, and the denominator roots allowed for a first-order decomposition, we could do that. In this case, the denominator is inherently second-order.

Let's assume a zero-pole pairing that results in a first-order and a second-order section. This might not be directly possible without knowing the numerator's roots.
A common way to decompose a second-order denominator for realization is to keep it as a second-order block, or if the zeros allow, form a first-order section and a second-order section.

Let's assume a hypothetical decomposition of $D(z)$ into:
$D(z) = D_1(z) \times D_2(z)$
where $D_1(z)$ is first-order and $D_2(z)$ is second-order. For instance:
$D_1(z) = \frac{0.2 + 0.1z^{-1}}{1 - 0.2z^{-1}}$
$D_2(z) = \frac{1 + z^{-1}}{1 - 0.2z^{-1} + 0.05z^{-2}}$
(Note: This is just an example for decomposition demonstration; actual pairing would depend on numerator zeros).

b) **Realization of Sections:**
*   **$D_1(z)$ (First-order):** Can be realized in direct form I, transposed direct form, or parallel form.
    *   Difference Equation: $y_1(k) = 0.2z^{-1}y_1(k) + (0.2 + 0.1z^{-1})u_1(k)$
    *   $y_1(k) = 0.2y_1(k-1) + 0.2u_1(k) + 0.1u_1(k-1)$
*   **$D_2(z)$ (Second-order):** Can be realized in direct form, transposed direct form, or as a sum of first-order terms (if real poles are found).
    *   Difference Equation: $y_2(k) = (0.2 - 0.05z^{-1})y_2(k) + (1+z^{-1})u_2(k)$
    *   $y_2(k) = 0.2y_2(k-1) - 0.05y_2(k-2) + u_2(k) + u_2(k-1)$

The overall controller output $y(k)$ would be the output of the last section, $y_2(k)$, if $u_2(k) = y_1(k)$.

c) **Advantages of Cascade Realization:**
*   **Reduced Sensitivity:** By carefully pairing zeros and poles, the sensitivity of the controller's coefficients to quantization can be significantly reduced compared to a direct realization of the entire transfer function. This leads to a more robust controller.
*   **Numerical Stability:** Lower-order sections are generally more numerically stable.

**Answer 3:**
The primary sources of finite word-length errors are:

1.  **Quantization of Input/Output Signals:** When analog sensor signals are converted to digital by an ADC and when digital control signals are converted to analog by a DAC, the continuous amplitude is mapped to discrete levels. The resolution of the ADC/DAC determines the magnitude of this quantization error.
2.  **Quantization of Coefficients:** The controller's coefficients ($a_i, b_i$) are stored and used with a finite number of bits. This quantization of coefficients can alter the actual transfer function implemented, leading to performance degradation.
3.  **Round-off Errors in Arithmetic Operations:** During the computation of the difference equation (multiplications and additions), intermediate results are also quantized due to the finite word length of the processor. These round-off errors accumulate and can significantly affect the controller's output, potentially leading to limit cycles.

**Methods to Mitigate Impact:**

1.  **Choice of Realization Structure:** Using structures like parallel or cascade realization with optimal zero-pole pairing tends to be less sensitive to coefficient quantization than direct forms. Transposed structures also often offer better numerical properties.
2.  **Increased Word Length:** Using processors with wider data word lengths (e.g., 16-bit, 24-bit, or 32-bit floating-point) for data, coefficients, and arithmetic operations reduces the magnitude of quantization and round-off errors.
3.  **Scaling:** Intermediate results within the controller's computation can be scaled to prevent overflow (when values exceed the maximum representable number) and to keep signals within a range where quantization error is minimized.
4.  **Coefficient Optimization Techniques:** Algorithms exist to adjust the controller coefficients to minimize their sensitivity to quantization, particularly for specific realization structures.

**Answer 4:**
**Direct Form Realization:**

*   **Structure:** Directly implements the difference equation $y(k) = \sum b_i u(k-i) - \sum a_i y(k-i)$. It involves $n$ delay elements for past inputs and outputs, $2n+1$ multipliers, and $n+1$ adders for an $n$-th order transfer function.
*   **Numerical Properties:** Can be sensitive to coefficient quantization. The sensitivity depends on the location of the poles and zeros of the transfer function. For systems with poles clustered closely together, sensitivity can be high. Susceptible to round-off errors.
*   **Intuition:** Straightforward to derive from the difference equation.

**Transposed Direct Form Realization:**

*   **Structure:** Obtained by transposing the block diagram of the direct form. This means reversing the direction of signal flow in the delay elements and swapping the roles of summers and branching points. It also uses $n$ delay elements, $2n+1$ multipliers, and $n+1$ adders.
*   **Numerical Properties:** Generally offers improved numerical properties, meaning it is often less sensitive to coefficient quantization compared to the direct form. The output is available at the input of the last delay element.
*   **Intuition:** Less intuitive to derive directly from the difference equation compared to the direct form.

**Key Differences:**

| Feature                | Direct Form                               | Transposed Direct Form                     |
| :--------------------- | :---------------------------------------- | :----------------------------------------- |
| **Signal Flow**        | Forward signal flow through delays        | Backward signal flow through delays        |
| **Coefficient Sensitivity** | Can be high, especially for clustered poles | Generally lower than direct form           |
| **Round-off Error**    | Can accumulate                         | May exhibit better error distribution      |
| **Output Availability**| At the final summer                       | At the input of the last delay element     |
| **Derivation**         | Straightforward from difference equation  | Requires diagram transposition            |

---

### Important Points to Remember:

*   The choice of realization structure is crucial for efficient and robust implementation of digital controllers.
*   Trade-offs exist between complexity, numerical performance, and sensitivity to quantization for different structures.
*   Finite word-length effects (quantization of input/output, coefficients, and round-off errors) are unavoidable in practical implementations and can significantly impact performance.
*   Parallel and cascade realization structures, often with optimal zero-pole pairing, are generally preferred for their reduced sensitivity to coefficient quantization.
*   Understanding the implications of fixed-point versus floating-point arithmetic is important for hardware selection.
*   Limit cycles are a potential problem arising from quantization, especially in the absence of a signal.

---
This comprehensive study material covers the realization of digital controllers, addressing various structures, their advantages and disadvantages, and the critical impact of finite word-length effects, all within the context of discrete-time control systems design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
