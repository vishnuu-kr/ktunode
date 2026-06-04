---
title: "Transfer function from State equation"
subject: "CONTROL SYSTEMS"
module: "Module 4: State Variable Analysis of Linear Systems:"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe963"
status: "completed"
scrapedAt: "2026-05-23T17:54:50.427Z"
---
# Module 4: State Variable Analysis of Linear Systems - Transfer Function from State Equation

This module delves into the process of deriving the transfer function of a linear time-invariant (LTI) system from its state-space representation. This is a crucial link between two fundamental approaches to system analysis and design in control systems.

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Derive the transfer function of an LTI system from its state-space equations.
*   Understand the relationship between state-space and transfer function representations.
*   Identify the poles of a system from its state-space representation.
*   Determine the system matrix, input matrix, output matrix, and direct transmission matrix from state-space equations.

**Course Outcomes Alignment:**

This topic primarily contributes to:

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**: By enabling the conversion from state-space to transfer function, we can then apply the well-established transfer function analysis techniques.
*   **CO5: Analyse system Controllability and Observability using state space representation (Knowledge Level: K3)**: While this topic focuses on the transfer function derivation, understanding the state-space representation is fundamental to controllability and observability analysis.

---

## 1. Introduction to State-Space Representation

Before deriving the transfer function, it's essential to recall the standard state-space representation of an LTI system.

**Key Concepts & Definitions:**

*   **State Variables:** The minimum set of variables that completely describe the internal state of a dynamic system at any given time.
*   **State Vector ($\mathbf{x}(t)$):** A column vector containing all the state variables.
    $\mathbf{x}(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{bmatrix}$
*   **Input Vector ($\mathbf{u}(t)$):** A column vector containing the external inputs to the system. For a single-input system, $\mathbf{u}(t)$ is a scalar.
    $\mathbf{u}(t) = \begin{bmatrix} u_1(t) \\ u_2(t) \\ \vdots \\ u_m(t) \end{bmatrix}$
*   **Output Vector ($\mathbf{y}(t)$):** A column vector containing the system's outputs. For a single-output system, $\mathbf{y}(t)$ is a scalar.
    $\mathbf{y}(t) = \begin{bmatrix} y_1(t) \\ y_2(t) \\ \vdots \\ y_p(t) \end{bmatrix}$

**State Equation:**

The dynamics of the system are described by the first-order differential equation:

$\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$

Where:
*   $\mathbf{A}$ is the $n \times n$ **system matrix** (or state matrix). It describes the internal dynamics of the system.
*   $\mathbf{B}$ is the $n \times m$ **input matrix** (or control matrix). It relates the input to the state variables.

**Output Equation:**

The system's outputs are described by:

$\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$

Where:
*   $\mathbf{C}$ is the $p \times n$ **output matrix** (or observation matrix). It relates the state variables to the output.
*   $\mathbf{D}$ is the $p \times m$ **direct transmission matrix** (or feedforward matrix). It represents any direct connection from the input to the output.

---

## 2. Deriving the Transfer Function from State-Space Equations

The transfer function $G(s)$ is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.

**Steps:**

1.  **Take the Laplace Transform of the State Equation:**
    Apply the Laplace transform to the state equation $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$.
    Recall that $\mathcal{L}\{\dot{\mathbf{x}}(t)\} = s\mathbf{X}(s) - \mathbf{x}(0)$, where $\mathbf{X}(s) = \mathcal{L}\{\mathbf{x}(t)\}$.

    $s\mathbf{X}(s) - \mathbf{x}(0) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$

2.  **Apply Zero Initial Conditions:**
    For the transfer function derivation, we assume zero initial conditions, meaning $\mathbf{x}(0) = \mathbf{0}$.

    $s\mathbf{X}(s) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$

3.  **Rearrange to Solve for $\mathbf{X}(s)$:**
    Group terms containing $\mathbf{X}(s)$:

    $s\mathbf{X}(s) - \mathbf{A}\mathbf{X}(s) = \mathbf{B}\mathbf{U}(s)$
    $(s\mathbf{I} - \mathbf{A})\mathbf{X}(s) = \mathbf{B}\mathbf{U}(s)$

    Where $\mathbf{I}$ is the identity matrix of the same dimension as $\mathbf{A}$.

    To isolate $\mathbf{X}(s)$, multiply both sides by the inverse of $(s\mathbf{I} - \mathbf{A})$:

    $\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)$

    The term $(s\mathbf{I} - \mathbf{A})^{-1}$ is known as the **resolvent matrix** or **transfer matrix** of the system.

4.  **Take the Laplace Transform of the Output Equation:**
    Apply the Laplace transform to the output equation $\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$.
    Recall that $\mathcal{L}\{\mathbf{y}(t)\} = \mathbf{Y}(s)$ and $\mathcal{L}\{\mathbf{u}(t)\} = \mathbf{U}(s)$.

    $\mathbf{Y}(s) = \mathbf{C}\mathbf{X}(s) + \mathbf{D}\mathbf{U}(s)$

5.  **Substitute $\mathbf{X}(s)$ into the Output Equation:**
    Substitute the expression for $\mathbf{X}(s)$ from step 3 into the transformed output equation:

    $\mathbf{Y}(s) = \mathbf{C} [(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)] + \mathbf{D}\mathbf{U}(s)$

6.  **Factor out $\mathbf{U}(s)$:**
    $\mathbf{Y}(s) = [\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}]\mathbf{U}(s)$

7.  **Define the Transfer Function Matrix:**
    The term in the square brackets is the **transfer function matrix**, often denoted as $\mathbf{G}(s)$:

    $\mathbf{G}(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$

    For a single-input, single-output (SISO) system, $\mathbf{G}(s)$ will be a scalar, representing the transfer function $G(s)$.

    $G(s) = \frac{Y(s)}{U(s)} = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$

**Important Point to Remember:**
The inverse of $(s\mathbf{I} - \mathbf{A})$ can be calculated using the formula:
$(s\mathbf{I} - \mathbf{A})^{-1} = \frac{\text{adj}(s\mathbf{I} - \mathbf{A})}{\det(s\mathbf{I} - \mathbf{A})}$

This means the transfer function will have the characteristic equation of the system, $\det(s\mathbf{I} - \mathbf{A})$, as its denominator.

---

## 3. Worked Examples

Let's illustrate the derivation with a common example.

**Example 1: Second-Order System**

Consider a system described by the following state-space equations:

$\dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t)$

$y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) + 0 u(t)$

Here, $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, and $\mathbf{D} = 0$.

**Solution:**

1.  **Calculate $(s\mathbf{I} - \mathbf{A})$:**
    $s\mathbf{I} - \mathbf{A} = s\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} s & -1 \\ 2 & s+3 \end{bmatrix}$

2.  **Calculate the determinant of $(s\mathbf{I} - \mathbf{A})$:**
    $\det(s\mathbf{I} - \mathbf{A}) = s(s+3) - (-1)(2) = s^2 + 3s + 2$
    This is the characteristic equation of the system.

3.  **Calculate the adjoint of $(s\mathbf{I} - \mathbf{A})$:**
    For a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the adjoint is $\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.
    $\text{adj}(s\mathbf{I} - \mathbf{A}) = \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix}$

4.  **Calculate $(s\mathbf{I} - \mathbf{A})^{-1}$:**
    $(s\mathbf{I} - \mathbf{A})^{-1} = \frac{\text{adj}(s\mathbf{I} - \mathbf{A})}{\det(s\mathbf{I} - \mathbf{A})} = \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix}$

5.  **Calculate $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}$:**
    $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 1 & 0 \end{bmatrix} \left( \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} \right) \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    $= \frac{1}{s^2 + 3s + 2} \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    $= \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    $= \frac{1}{s^2 + 3s + 2} [(s+3)(0) + (1)(1)]$
    $= \frac{1}{s^2 + 3s + 2}$

6.  **Add $\mathbf{D}$:**
    $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D} = \frac{1}{s^2 + 3s + 2} + 0$
    $G(s) = \frac{1}{s^2 + 3s + 2}$

**Result:** The transfer function of the system is $G(s) = \frac{1}{s^2 + 3s + 2}$.

---

**Example 2: System with Direct Feedthrough**

Consider a system with:

$\dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & -1 \\ 1 & 0 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t)$

$y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(t) + 1 u(t)$

Here, $\mathbf{A} = \begin{bmatrix} -1 & -1 \\ 1 & 0 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$, and $\mathbf{D} = 1$.

**Solution:**

1.  **Calculate $(s\mathbf{I} - \mathbf{A})$:**
    $s\mathbf{I} - \mathbf{A} = s\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} -1 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} s+1 & 1 \\ -1 & s \end{bmatrix}$

2.  **Calculate the determinant of $(s\mathbf{I} - \mathbf{A})$:**
    $\det(s\mathbf{I} - \mathbf{A}) = s(s+1) - (1)(-1) = s^2 + s + 1$

3.  **Calculate the adjoint of $(s\mathbf{I} - \mathbf{A})$:**
    $\text{adj}(s\mathbf{I} - \mathbf{A}) = \begin{bmatrix} s & -1 \\ 1 & s+1 \end{bmatrix}$

4.  **Calculate $(s\mathbf{I} - \mathbf{A})^{-1}$:**
    $(s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2 + s + 1} \begin{bmatrix} s & -1 \\ 1 & s+1 \end{bmatrix}$

5.  **Calculate $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}$:**
    $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 0 & 1 \end{bmatrix} \left( \frac{1}{s^2 + s + 1} \begin{bmatrix} s & -1 \\ 1 & s+1 \end{bmatrix} \right) \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $= \frac{1}{s^2 + s + 1} \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} s & -1 \\ 1 & s+1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $= \frac{1}{s^2 + s + 1} \begin{bmatrix} 1 & s+1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $= \frac{1}{s^2 + s + 1} [(1)(1) + (s+1)(0)]$
    $= \frac{1}{s^2 + s + 1}$

6.  **Add $\mathbf{D}$:**
    $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D} = \frac{1}{s^2 + s + 1} + 1$
    $G(s) = \frac{1 + (s^2 + s + 1)}{s^2 + s + 1} = \frac{s^2 + s + 2}{s^2 + s + 1}$

**Result:** The transfer function of the system is $G(s) = \frac{s^2 + s + 2}{s^2 + s + 1}$.

---

## 4. Relationship to System Poles and Zeros

**Key Concepts & Definitions:**

*   **Poles:** The roots of the denominator polynomial of the transfer function. They determine the system's transient response characteristics (stability, oscillation frequency, damping).
*   **Zeros:** The roots of the numerator polynomial of the transfer function. They affect the system's transient response by influencing the relative amplitudes of different modes.

From the transfer function derived as $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$, we can see:

*   **Poles:** The poles of the transfer function are the roots of the characteristic equation $\det(s\mathbf{I} - \mathbf{A}) = 0$. These are the same poles that would be obtained from an analysis of the system's differential equations directly. The poles are solely determined by the system matrix $\mathbf{A}$.
*   **Zeros:** The zeros of the transfer function are more complex to determine directly from the $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$ expression. For SISO systems, the zeros are typically found by examining the roots of the numerator of the simplified transfer function. They depend on the interplay between $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ (and $\mathbf{D}$).

**Textbook References:**

*   **Nagarath & Gopal (7th Ed., 2022):** Chapter 10 (State Variable Analysis) discusses the transformation from state-space to transfer function and the concept of poles and zeros derived from this representation.
*   **Ogata (5th Ed., 2015):** Chapter 2 (State-Space Analysis) and Chapter 6 (Transfer Function and State-Variable Models) provide a thorough treatment of converting between these representations.
*   **Kuo & Golnaraghi (10th Ed., 2017):** Chapter 4 (State-Space Analysis) and Chapter 5 (Transfer Function and Block Diagram) also cover this conversion and its implications.

---

## 5. Practice Questions/Exercises

**Question 1:**
Given the state-space equations:
$\dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & 0 \\ 1 & -2 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t)$
$y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(t)$

Find the transfer function $G(s) = Y(s)/U(s)$.

**Answer 1:**
1.  $s\mathbf{I} - \mathbf{A} = \begin{bmatrix} s+1 & 0 \\ -1 & s+2 \end{bmatrix}$
2.  $\det(s\mathbf{I} - \mathbf{A}) = (s+1)(s+2) = s^2 + 3s + 2$
3.  $\text{adj}(s\mathbf{I} - \mathbf{A}) = \begin{bmatrix} s+2 & 0 \\ 1 & s+1 \end{bmatrix}$
4.  $(s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+2 & 0 \\ 1 & s+1 \end{bmatrix}$
5.  $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 0 & 1 \end{bmatrix} \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+2 & 0 \\ 1 & s+1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $= \frac{1}{s^2 + 3s + 2} \begin{bmatrix} 1 & s+1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \frac{1}{s^2 + 3s + 2}$
6.  $D=0$.
    $G(s) = \frac{1}{s^2 + 3s + 2}$

**Question 2:**
For the system:
$\dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & -5 \\ 1 & -2 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t)$
$y(t) = \begin{bmatrix} 1 & 2 \end{bmatrix} \mathbf{x}(t) + 0 u(t)$

Find the transfer function $G(s)$.

**Answer 2:**
1.  $s\mathbf{I} - \mathbf{A} = \begin{bmatrix} s & 5 \\ -1 & s+2 \end{bmatrix}$
2.  $\det(s\mathbf{I} - \mathbf{A}) = s(s+2) - (5)(-1) = s^2 + 2s + 5$
3.  $\text{adj}(s\mathbf{I} - \mathbf{A}) = \begin{bmatrix} s+2 & -5 \\ 1 & s \end{bmatrix}$
4.  $(s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2 + 2s + 5} \begin{bmatrix} s+2 & -5 \\ 1 & s \end{bmatrix}$
5.  $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 1 & 2 \end{bmatrix} \frac{1}{s^2 + 2s + 5} \begin{bmatrix} s+2 & -5 \\ 1 & s \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $= \frac{1}{s^2 + 2s + 5} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} s+2 \\ 1 \end{bmatrix}$
    $= \frac{1}{s^2 + 2s + 5} [(1)(s+2) + (2)(1)]$
    $= \frac{s+4}{s^2 + 2s + 5}$
6.  $D=0$.
    $G(s) = \frac{s+4}{s^2 + 2s + 5}$

---

## 6. Important Points to Remember

*   The transfer function $G(s)$ of a linear time-invariant system can be derived from its state-space representation using the formula:
    $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$
*   This derivation assumes zero initial conditions.
*   The denominator of the transfer function is the characteristic polynomial of the system, $\det(s\mathbf{I} - \mathbf{A})$, which directly gives the system's poles.
*   The poles of the system are independent of the output matrix $\mathbf{C}$ and the input matrix $\mathbf{B}$ (and $\mathbf{D}$) when considering the system's inherent dynamics.
*   The zeros of the system are influenced by $\mathbf{C}$ and $\mathbf{B}$ (and $\mathbf{D}$) in addition to $\mathbf{A}$.
*   For multi-input multi-output (MIMO) systems, the result is a transfer function matrix $\mathbf{G}(s)$, where each element $G_{ij}(s)$ represents the transfer function from input $j$ to output $i$.

---

## 7. Connection to Course Outcomes

*   **CO1 (Transfer Function Approach):** This topic directly enables the analysis of systems using the transfer function approach by providing a method to obtain the transfer function from state-space models, which are often obtained from physical system modeling. This allows the application of familiar techniques like pole-zero analysis, Bode plots, etc.
*   **CO5 (Controllability & Observability):** Understanding the state-space representation is fundamental to analyzing controllability and observability. While this specific topic focuses on transfer function derivation, it solidifies the understanding of the state-space matrices ($\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$) which are the building blocks for these analyses.

---
This concludes the study notes for deriving the transfer function from state equations. Remember to practice these derivations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
