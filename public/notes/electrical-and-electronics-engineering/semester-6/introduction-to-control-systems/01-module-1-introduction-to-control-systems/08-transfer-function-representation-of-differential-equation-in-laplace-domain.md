---
title: "Transfer function representation of differential equation in Laplace domain."
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b2"
status: "completed"
scrapedAt: "2026-05-23T16:29:15.775Z"
---
# Module 1: Introduction to Control Systems
## Topic: Transfer Function Representation of Differential Equations in Laplace Domain

This module introduces the fundamental concept of representing dynamic systems using mathematical models, specifically focusing on the conversion of linear ordinary differential equations (ODEs) into the Laplace domain to derive the transfer function. This forms the bedrock for analyzing and designing control systems.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the relationship between time-domain differential equations and their Laplace-domain equivalents.
*   Apply the Laplace transform to linear time-invariant (LTI) differential equations.
*   Define and derive the transfer function of a system.
*   Identify the conditions under which a transfer function is valid.
*   Recognize the advantages of using transfer functions in control system analysis and design.

---

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO1: To represent continuous time systems in the classical domain. (Knowledge Level: K2)** - By learning how to convert time-domain differential equations into the Laplace domain, we are effectively representing systems in a new mathematical domain for analysis.
*   **CO5: To represent continuous time systems in the classical domain. (Knowledge Level: K2)** - This is a repetition of CO1, reinforcing the importance of this foundational representation.

---

### 1.0 Introduction to Control Systems and Mathematical Modeling

**1.1 What is a Control System?**

A control system is an arrangement of physical components that manages, commands, directs, or regulates the behavior of other devices or systems. Its primary goal is to maintain a desired output or state despite disturbances.

*   **Key Components:**
    *   **Plant:** The system or process being controlled (e.g., an electric motor, a heating element, an aircraft).
    *   **Controller:** The component that generates control signals based on feedback or desired setpoints (e.g., a PID controller).
    *   **Sensor:** Measures the output of the plant (e.g., a tachometer, a thermometer).
    *   **Actuator:** Converts the controller's output signal into a physical action that affects the plant (e.g., a motor driver, a valve).

**1.2 Mathematical Modeling**

Mathematical modeling is crucial in control systems engineering. It involves creating a mathematical description of the system's behavior. This allows us to:

*   Analyze system dynamics.
*   Predict system response to inputs.
*   Design controllers to achieve desired performance.
*   Simulate system behavior before implementation.

**1.3 Why Laplace Transform?**

Many physical systems are described by linear ordinary differential equations (ODEs) in the time domain. Solving these ODEs directly can be cumbersome, especially for complex systems and when dealing with various input signals.

The Laplace transform is a powerful mathematical tool that converts differential equations in the time domain into algebraic equations in the frequency (or complex frequency, 's') domain. This simplification makes it significantly easier to:

*   Analyze system behavior.
*   Solve differential equations.
*   Represent system characteristics using transfer functions.

**References:**
*   Nise, Chapter 2: "Time and Frequency Responses" - Introduces the Laplace transform as a tool for analysis.
*   Nagrath & Gopal, Chapter 2: "Mathematical Modeling and Analogous Systems" - Discusses the necessity of mathematical models and introduces Laplace transforms.
*   Ogata, Chapter 2: "Laplace Transforms" - Provides a comprehensive review of Laplace transform properties.

---

### 2.0 The Laplace Transform

The unilateral Laplace transform of a function $f(t)$, denoted as $F(s)$, is defined as:

$$F(s) = \mathcal{L}\{f(t)\} = \int_{0^-}^{\infty} f(t) e^{-st} dt$$

where:
*   $s = \sigma + j\omega$ is a complex variable.
*   $e^{-st}$ is the kernel of the transform.
*   The integral is from $0^-$ to $\infty$ to account for initial conditions at $t=0$.

**Key Properties of the Laplace Transform relevant to ODEs:**

| Time-Domain Function $f(t)$ | Laplace Transform $F(s)$ |
| :-------------------------- | :----------------------- |
| $\delta(t)$ (unit impulse)  | $1$                      |
| $u(t)$ (unit step)          | $1/s$                    |
| $t u(t)$ (ramp)             | $1/s^2$                  |
| $t^n u(t)$                  | $n!/s^{n+1}$             |
| $e^{-at} u(t)$              | $1/(s+a)$                |
| $\sin(\omega t) u(t)$       | $\omega / (s^2 + \omega^2)$ |
| $\cos(\omega t) u(t)$       | $s / (s^2 + \omega^2)$   |

**Differentiation Property:**

The Laplace transform of the derivative of a function is crucial for converting ODEs.

*   $\mathcal{L}\{f'(t)\} = sF(s) - f(0^-)$
*   $\mathcal{L}\{f''(t)\} = s^2F(s) - s f(0^-) - f'(0^-)$
*   $\mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - s^{n-1}f(0^-) - s^{n-2}f'(0^-) - \dots - f^{(n-1)}(0^-)$

where $f(0^-)$, $f'(0^-)$, etc., are the initial conditions of the function and its derivatives at $t=0$.

**Important Note:** For the purpose of defining a transfer function, we often assume **zero initial conditions**. This simplifies the process and allows us to focus on the system's inherent dynamics.

**References:**
*   Nise, Chapter 2: Details Laplace transform properties and theorems.
*   Ogata, Chapter 2: Provides a thorough review of Laplace transform pairs and properties.
*   Kuo, Chapter 3: "Laplace Transform Analysis of Linear Systems" - Covers the essential Laplace transform properties and their application.

---

### 3.0 Representing Differential Equations in the Laplace Domain

Consider a linear, time-invariant (LTI) ordinary differential equation of order $n$:

$$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + b_{m-1} \frac{d^{m-1} x(t)}{dt^{m-1}} + \dots + b_1 \frac{dx(t)}{dt} + b_0 x(t)$$

where:
*   $y(t)$ is the output of the system.
*   $x(t)$ is the input to the system.
*   $a_i$ and $b_j$ are constant coefficients.
*   We assume $n \ge m$ for a physically realizable system (strictly proper transfer functions).

**Steps to Convert to the Laplace Domain:**

1.  **Apply the Laplace Transform to each term** of the differential equation.
2.  **Use the differentiation property** of the Laplace transform.
3.  **Apply the linearity property** of the Laplace transform.
4.  **Assume zero initial conditions:** $y(0^-) = 0, y'(0^-) = 0, \dots, y^{(n-1)}(0^-) = 0$ and $x(0^-) = 0, x'(0^-) = 0, \dots, x^{(m-1)}(0^-) = 0$.

Let $Y(s) = \mathcal{L}\{y(t)\}$ and $X(s) = \mathcal{L}\{x(t)\}$.

Applying the Laplace transform with zero initial conditions:

*   $\mathcal{L}\{a_n \frac{d^n y(t)}{dt^n}\} = a_n (s^n Y(s) - 0) = a_n s^n Y(s)$
*   $\mathcal{L}\{a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}}\} = a_{n-1} (s^{n-1} Y(s) - 0) = a_{n-1} s^{n-1} Y(s)$
*   ...
*   $\mathcal{L}\{a_1 \frac{dy(t)}{dt}\} = a_1 (s Y(s) - 0) = a_1 s Y(s)$
*   $\mathcal{L}\{a_0 y(t)\} = a_0 Y(s)$

Similarly for the input terms:

*   $\mathcal{L}\{b_m \frac{d^m x(t)}{dt^m}\} = b_m (s^m X(s) - 0) = b_m s^m X(s)$
*   ...
*   $\mathcal{L}\{b_0 x(t)\} = b_0 X(s)$

The transformed equation becomes:

$$(a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0) Y(s) = (b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0) X(s)$$

---

### 4.0 The Transfer Function

**Definition:** The transfer function of a linear, time-invariant (LTI) system is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming all initial conditions are zero.

$$G(s) = \frac{Y(s)}{X(s)}$$

From the transformed differential equation derived in Section 3.0:

$$G(s) = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0}$$

**4.1 Conditions for Validity:**

The transfer function representation is valid for:

1.  **Linear Systems:** The system must obey the principle of superposition (additivity and homogeneity).
2.  **Time-Invariant Systems:** The system's parameters (coefficients $a_i, b_j$) must not change with time.
3.  **Zero Initial Conditions:** The transfer function characterizes the system's response to an input *after* any initial transients have settled or when the system starts from rest.
4.  **Causality:** The system's output at any time must depend only on present and past inputs, not future inputs. This is usually implicit in physical systems.
5.  **The input must be transformable:** The input signal $x(t)$ must exist for $t \ge 0$ and have a Laplace transform.

**References:**
*   Nise, Chapter 2: Introduces the transfer function concept and its derivation.
*   Nagrath & Gopal, Chapter 2: Explains the transfer function as a key characteristic of LTI systems.
*   Ogata, Chapter 2: Details the derivation of transfer functions from differential equations.
*   Dorf & Bishop, Chapter 2: "Modeling in the Frequency Domain" - Focuses on transfer functions and their properties.

---

### 5.0 Examples

**Example 5.1: First-Order System (RC Circuit)**

Consider an RC circuit where a voltage input $v_i(t)$ is applied, and the output voltage $v_o(t)$ is taken across the capacitor.

The differential equation is:
$$RC \frac{dv_o(t)}{dt} + v_o(t) = v_i(t)$$

*   **Identify:**
    *   Output: $y(t) = v_o(t)$
    *   Input: $x(t) = v_i(t)$
    *   Coefficients: $a_1 = RC$, $a_0 = 1$; $b_0 = 1$.
*   **Apply Laplace Transform (with zero initial conditions, $v_o(0^-) = 0$):**
    *   $\mathcal{L}\{RC \frac{dv_o(t)}{dt}\} = RC (s V_o(s) - v_o(0^-)) = RC s V_o(s)$
    *   $\mathcal{L}\{v_o(t)\} = V_o(s)$
    *   $\mathcal{L}\{v_i(t)\} = V_i(s)$
*   **Transformed Equation:**
    $$RC s V_o(s) + V_o(s) = V_i(s)$$
    $$(RCs + 1) V_o(s) = V_i(s)$$
*   **Transfer Function:**
    $$G(s) = \frac{V_o(s)}{V_i(s)} = \frac{1}{RCs + 1}$$

**Example 5.2: Second-Order System (Mass-Spring-Damper)**

Consider a mass-spring-damper system with displacement $y(t)$ as the output and force $f(t)$ as the input. The equation of motion is:

$$m \frac{d^2 y(t)}{dt^2} + b \frac{dy(t)}{dt} + k y(t) = f(t)$$

*   **Identify:**
    *   Output: $y(t)$
    *   Input: $x(t) = f(t)$
    *   Coefficients: $a_2 = m$, $a_1 = b$, $a_0 = k$; $b_0 = 1$.
*   **Apply Laplace Transform (with zero initial conditions, $y(0^-) = 0, y'(0^-) = 0$):**
    *   $\mathcal{L}\{m \frac{d^2 y(t)}{dt^2}\} = m (s^2 Y(s) - s y(0^-) - y'(0^-)) = m s^2 Y(s)$
    *   $\mathcal{L}\{b \frac{dy(t)}{dt}\} = b (s Y(s) - y(0^-)) = b s Y(s)$
    *   $\mathcal{L}\{k y(t)\} = k Y(s)$
    *   $\mathcal{L}\{f(t)\} = F(s)$
*   **Transformed Equation:**
    $$m s^2 Y(s) + b s Y(s) + k Y(s) = F(s)$$
    $$(ms^2 + bs + k) Y(s) = F(s)$$
*   **Transfer Function:**
    $$G(s) = \frac{Y(s)}{F(s)} = \frac{1}{ms^2 + bs + k}$$

**Example 5.3: System with Derivative Input**

Consider a system described by:

$$\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt} + 3x(t)$$

*   **Identify:**
    *   Output: $y(t)$
    *   Input: $x(t)$
    *   Coefficients: $a_1 = 1$, $a_0 = 2$; $b_1 = 1$, $b_0 = 3$.
*   **Apply Laplace Transform (with zero initial conditions, $y(0^-) = 0, x(0^-) = 0$):**
    *   $\mathcal{L}\{\frac{dy(t)}{dt}\} = s Y(s)$
    *   $\mathcal{L}\{2y(t)\} = 2 Y(s)$
    *   $\mathcal{L}\{\frac{dx(t)}{dt}\} = s X(s)$
    *   $\mathcal{L}\{3x(t)\} = 3 X(s)$
*   **Transformed Equation:**
    $$s Y(s) + 2 Y(s) = s X(s) + 3 X(s)$$
    $$(s+2) Y(s) = (s+3) X(s)$$
*   **Transfer Function:**
    $$G(s) = \frac{Y(s)}{X(s)} = \frac{s+3}{s+2}$$

**References:**
*   Nise, Chapter 2: Worked examples of converting ODEs to transfer functions for various systems.
*   Ogata, Chapter 2: Numerous examples illustrating the process.

---

### 6.0 Advantages of Transfer Function Representation

1.  **Simplification:** Converts complex differential equations into simpler algebraic equations in the 's'-domain.
2.  **System Characterization:** A transfer function completely characterizes an LTI system's input-output relationship in the absence of initial conditions.
3.  **Ease of Analysis:** Many powerful analytical techniques (e.g., pole-zero analysis, root locus, Bode plots, Nyquist plots) are based on the transfer function.
4.  **System Interconnection:** Transfer functions are easily combined (multiplied in series, added in parallel) to represent the overall transfer function of interconnected systems.
5.  **Design Tool:** Serves as a fundamental tool for controller design, allowing engineers to shape system behavior.
6.  **Focus on Dynamics:** By assuming zero initial conditions, it focuses on the system's inherent dynamic response to inputs.

**References:**
*   Nise, Chapter 2: Discusses the advantages and applications of transfer functions.
*   Nagrath & Gopal, Chapter 2: Highlights the utility of transfer functions in system analysis and design.

---

### 7.0 Important Points to Remember

*   **Laplace Transform:** Transforms ODEs into algebraic equations. Key properties are linearity and the differentiation property.
*   **Zero Initial Conditions:** Essential for deriving the transfer function. The transfer function describes the system's behavior *from rest*.
*   **Transfer Function Definition:** $G(s) = \frac{\mathcal{L}\{\text{output}\}}{\mathcal{L}\{\text{input}\}}$, with zero initial conditions.
*   **LTI Systems:** Transfer functions are applicable only to Linear Time-Invariant systems.
*   **Order of Numerator and Denominator:** For physical realizability, the degree of the denominator polynomial is typically greater than or equal to the degree of the numerator polynomial. If $m > n$, it implies an anticipatory system, which is usually not physically realizable.
*   **Poles and Zeros:** The roots of the denominator polynomial are called **poles**, and the roots of the numerator polynomial are called **zeros**. These are critical for understanding system stability and performance. (This will be explored in more detail in later modules).

---

### 8.0 Practice Questions and Exercises

**Instructions:** For each question, derive the transfer function $G(s) = Y(s)/X(s)$ assuming zero initial conditions.

**Question 8.1:**
Given the differential equation:
$3 \frac{d^2 y(t)}{dt^2} + 5 \frac{dy(t)}{dt} + 2 y(t) = 4 \frac{dx(t)}{dt} + 6 x(t)$

**Question 8.2:**
The motion of a mechanical system is described by:
$2 \frac{d^3 y(t)}{dt^3} + 8 \frac{d^2 y(t)}{dt^2} + 6 \frac{dy(t)}{dt} = f(t)$
where $y(t)$ is the displacement and $f(t)$ is the applied force.

**Question 8.3:**
An electrical circuit is described by the following equation, where $v_o(t)$ is the output voltage and $v_{in}(t)$ is the input voltage:
$\frac{1}{2} \frac{dv_o(t)}{dt} + 5 v_o(t) = v_{in}(t)$

**Question 8.4:**
Consider a system with the following input-output relationship:
$\frac{dy(t)}{dt} + y(t) = \frac{dx(t)}{dt}$

---

### 9.0 Answers to Practice Questions

**Answer 9.1:**
*   Laplace transform of the equation with zero initial conditions:
    $3(s^2 Y(s)) + 5(s Y(s)) + 2 Y(s) = 4(s X(s)) + 6 X(s)$
*   Factor out $Y(s)$ and $X(s)$:
    $(3s^2 + 5s + 2) Y(s) = (4s + 6) X(s)$
*   Transfer Function:
    $$G(s) = \frac{Y(s)}{X(s)} = \frac{4s + 6}{3s^2 + 5s + 2}$$

**Answer 9.2:**
*   Laplace transform of the equation with zero initial conditions ($y(0^-)=0, y'(0^-)=0, y''(0^-)=0$):
    $2(s^3 Y(s)) + 8(s^2 Y(s)) + 6(s Y(s)) = F(s)$
*   Factor out $Y(s)$:
    $(2s^3 + 8s^2 + 6s) Y(s) = F(s)$
*   Transfer Function:
    $$G(s) = \frac{Y(s)}{F(s)} = \frac{1}{2s^3 + 8s^2 + 6s}$$
    (Can be simplified by dividing numerator and denominator by 2: $G(s) = \frac{0.5}{s^3 + 4s^2 + 3s}$)

**Answer 9.3:**
*   Laplace transform of the equation with zero initial conditions ($v_o(0^-)=0$):
    $\frac{1}{2}(s V_o(s)) + 5 V_o(s) = V_{in}(s)$
*   Factor out $V_o(s)$:
    $(\frac{1}{2}s + 5) V_o(s) = V_{in}(s)$
*   Transfer Function:
    $$G(s) = \frac{V_o(s)}{V_{in}(s)} = \frac{1}{\frac{1}{2}s + 5}$$
    (Can be rewritten as $G(s) = \frac{2}{s + 10}$)

**Answer 9.4:**
*   Laplace transform of the equation with zero initial conditions ($y(0^-)=0, x(0^-)=0$):
    $s Y(s) + Y(s) = s X(s)$
*   Factor out $Y(s)$:
    $(s+1) Y(s) = s X(s)$
*   Transfer Function:
    $$G(s) = \frac{Y(s)}{X(s)} = \frac{s}{s+1}$$

---

This concludes the introduction to transfer function representation of differential equations in the Laplace domain. This foundational understanding is crucial for all subsequent topics in control systems analysis and design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
