---
title: "Cayley-Hamilton theorem and z-transform method."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368dd"
status: "completed"
scrapedAt: "2026-05-23T16:36:29.210Z"
---
# DISCRETE TIME CONTROL SYSTEMS

## Module 3: Discrete Systems

### Topic: Cayley-Hamilton Theorem and Z-Transform Method

---

**Objective:** This module will introduce the fundamental concepts and techniques for analyzing and understanding discrete-time control systems. We will delve into the powerful Cayley-Hamilton theorem and the ubiquitous z-transform method, which are essential tools for dissecting the behavior of these systems.

---

### 1. Introduction to Discrete-Time Systems and State-Space Representation (Relevant to CO3)

Before diving into the specific theorems, it's crucial to recap the state-space representation of discrete-time systems, as both the Cayley-Hamilton theorem and the z-transform method are often applied in this context.

*   **Definition:** A discrete-time linear time-invariant (LTI) system can be described by the following state-space equations:
    *   State Equation: $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)$
    *   Output Equation: $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k) + \mathbf{D}\mathbf{u}(k)$
    where:
    *   $\mathbf{x}(k)$: state vector at time $k$
    *   $\mathbf{u}(k)$: input vector at time $k$
    *   $\mathbf{y}(k)$: output vector at time $k$
    *   $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$, $\mathbf{D}$: system matrices

*   **Textbook Reference:**
    *   **Ogata (2009):** Chapter 6 ("State-Space Analysis of Discrete-Time Systems") provides a thorough foundation on state-space modeling and analysis techniques for discrete-time systems.
    *   **Gopal (1997):** Chapter 3 ("State Space Representation of Discrete Time Systems") also covers the fundamentals of state-space modeling.

---

### 2. The Cayley-Hamilton Theorem and its Application in Discrete-Time Systems (Relevant to CO3)

The Cayley-Hamilton theorem is a fundamental result in linear algebra that has significant implications in control theory, particularly for analyzing system properties like controllability, observability, and for deriving system responses.

#### 2.1 The Cayley-Hamilton Theorem

*   **Statement:** Every square matrix satisfies its own characteristic equation.
*   **Characteristic Equation:** For an $n \times n$ matrix $\mathbf{A}$, the characteristic equation is given by:
    $det(\lambda\mathbf{I} - \mathbf{A}) = 0$
    where $\lambda$ is an eigenvalue and $\mathbf{I}$ is the identity matrix.
*   **Cayley-Hamilton Theorem in terms of $\mathbf{A}$:** If the characteristic polynomial is $p(\lambda) = c_n\lambda^n + c_{n-1}\lambda^{n-1} + \dots + c_1\lambda + c_0$, then the theorem states:
    $p(\mathbf{A}) = c_n\mathbf{A}^n + c_{n-1}\mathbf{A}^{n-1} + \dots + c_1\mathbf{A} + c_0\mathbf{I} = \mathbf{0}$
    where $\mathbf{0}$ is the zero matrix.

#### 2.2 Application in Discrete-Time Control Systems

The Cayley-Hamilton theorem is particularly useful for:

1.  **Computing Higher Powers of the A-matrix:** This is crucial for calculating the state transition matrix $\Phi(k) = \mathbf{A}^k$ for discrete-time systems. The theorem allows us to express $\mathbf{A}^k$ as a linear combination of lower powers of $\mathbf{A}$ (from $\mathbf{I}$ to $\mathbf{A}^{n-1}$).

    *   **How it works:** From the characteristic equation $det(\lambda\mathbf{I} - \mathbf{A}) = 0$, we have $\lambda^n = -\frac{1}{c_n}(c_{n-1}\lambda^{n-1} + \dots + c_1\lambda + c_0)$. Substituting $\mathbf{A}$ for $\lambda$, we get:
        $\mathbf{A}^n = -\frac{1}{c_n}(c_{n-1}\mathbf{A}^{n-1} + \dots + c_1\mathbf{A} + c_0\mathbf{I})$
    *   By repeatedly applying this, any $\mathbf{A}^k$ for $k \geq n$ can be expressed as a linear combination of $\mathbf{I}, \mathbf{A}, \dots, \mathbf{A}^{n-1}$.

2.  **Deriving the State Transition Matrix (for homogeneous system):**
    *   The solution to the homogeneous state equation $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k)$ is $\mathbf{x}(k) = \mathbf{A}^k \mathbf{x}(0)$.
    *   Using Cayley-Hamilton, we can express $\mathbf{A}^k$ and hence $\mathbf{x}(k)$ more directly.

3.  **Finding the Discrete-Time Transfer Function from State-Space:** While the z-transform method is the primary tool, the Cayley-Hamilton theorem can be implicitly used in deriving the relationship between the state-space matrices and the transfer function.

*   **Textbook Reference:**
    *   **Philips and Nagle (1984):** Chapter 2 ("Discrete-Time System Analysis") likely discusses the relationship between characteristic equations and system properties, which can be linked to Cayley-Hamilton.
    *   **Gopal (1997):** Chapter 4 ("Controllability and Observability of Discrete Time Systems") and Chapter 5 ("Stability and Pole Placement") often utilize concepts derived from the characteristic polynomial and matrix powers, where Cayley-Hamilton is implicitly or explicitly applied.

#### 2.3 Example: Using Cayley-Hamilton to Compute $\mathbf{A}^k$

Consider a discrete-time system with the state matrix:
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix}$

1.  **Find the characteristic equation:**
    $det(\lambda\mathbf{I} - \mathbf{A}) = det \begin{bmatrix} \lambda & -1 \\ 0.2 & \lambda - 1.1 \end{bmatrix} = \lambda(\lambda - 1.1) - (-1)(0.2) = \lambda^2 - 1.1\lambda + 0.2$
    The characteristic equation is: $\lambda^2 - 1.1\lambda + 0.2 = 0$.

2.  **Apply Cayley-Hamilton Theorem:**
    $\mathbf{A}^2 - 1.1\mathbf{A} + 0.2\mathbf{I} = \mathbf{0}$

3.  **Express $\mathbf{A}^2$ in terms of lower powers:**
    $\mathbf{A}^2 = 1.1\mathbf{A} - 0.2\mathbf{I}$
    $\mathbf{A}^2 = 1.1 \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix} - 0.2 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $\mathbf{A}^2 = \begin{bmatrix} 0 & 1.1 \\ -0.22 & 1.21 \end{bmatrix} - \begin{bmatrix} 0.2 & 0 \\ 0 & 0.2 \end{bmatrix} = \begin{bmatrix} -0.2 & 1.1 \\ -0.22 & 1.01 \end{bmatrix}$

4.  **Express $\mathbf{A}^3$ in terms of lower powers:**
    $\mathbf{A}^3 = \mathbf{A} \cdot \mathbf{A}^2 = \mathbf{A} (1.1\mathbf{A} - 0.2\mathbf{I}) = 1.1\mathbf{A}^2 - 0.2\mathbf{A}$
    Substitute $\mathbf{A}^2$:
    $\mathbf{A}^3 = 1.1 (1.1\mathbf{A} - 0.2\mathbf{I}) - 0.2\mathbf{A}$
    $\mathbf{A}^3 = 1.21\mathbf{A} - 0.22\mathbf{I} - 0.2\mathbf{A}$
    $\mathbf{A}^3 = 1.01\mathbf{A} - 0.22\mathbf{I}$
    $\mathbf{A}^3 = 1.01 \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix} - 0.22 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $\mathbf{A}^3 = \begin{bmatrix} 0 & 1.01 \\ -0.202 & 1.111 \end{bmatrix} - \begin{bmatrix} 0.22 & 0 \\ 0 & 0.22 \end{bmatrix} = \begin{bmatrix} -0.22 & 1.01 \\ -0.202 & 0.891 \end{bmatrix}$

    This process can be continued for any power of $\mathbf{A}$.

---

### 3. The Z-Transform Method for Discrete-Time Systems (Relevant to CO1)

The z-transform is an indispensable tool for analyzing discrete-time signals and systems. It transforms sequences from the time domain to the complex frequency domain (z-domain), simplifying operations like convolution into multiplication and making the analysis of system behavior more tractable.

#### 3.1 The Z-Transform

*   **Definition:** The z-transform of a discrete-time signal $x(k)$ is defined as:
    $X(z) = Z\{x(k)\} = \sum_{k=-\infty}^{\infty} x(k)z^{-k}$
    This series converges for values of $z$ within the Region of Convergence (ROC).

*   **One-Sided Z-Transform:** For causal signals (i.e., $x(k) = 0$ for $k < 0$), the z-transform is often defined as:
    $X(z) = \sum_{k=0}^{\infty} x(k)z^{-k}$

*   **Inverse Z-Transform:** The inverse z-transform recovers the original signal from its z-transform. Common methods include partial fraction expansion and contour integration.

#### 3.2 Properties of the Z-Transform

Several properties simplify analysis:

*   **Linearity:** $Z\{ax(k) + by(k)\} = aX(z) + bY(z)$
*   **Time Shifting:**
    *   $Z\{x(k-m)u(k-m)\} = z^{-m}X(z)$ (for $m \geq 0$)
    *   $Z\{x(k+m)u(k)\} = z^m X(z) - z^m x(0) - z^{m-1}x(1) - \dots - z x(m-1)$
*   **Multiplication by $a^k$:** $Z\{a^k x(k)\} = X(z/a)$
*   **Multiplication by $k$:** $Z\{k x(k)\} = -z \frac{dX(z)}{dz}$
*   **Convolution:** $Z\{x(k) * y(k)\} = X(z)Y(z)$

#### 3.3 The Transfer Function of a Discrete-Time System (CO1)

For a Linear Time-Invariant (LTI) discrete-time system, the transfer function relates the z-transform of the output $Y(z)$ to the z-transform of the input $U(z)$, assuming zero initial conditions.

*   **From Difference Equations:**
    Consider a causal system described by a linear constant-coefficient difference equation:
    $a_0 y(k) + a_1 y(k-1) + \dots + a_n y(k-n) = b_0 u(k) + b_1 u(k-1) + \dots + b_m u(k-m)$
    Taking the z-transform of both sides (and assuming zero initial conditions for $y(k-i)$ and $u(k-i)$ for $i > 0$):
    $a_0 Y(z) + a_1 z^{-1}Y(z) + \dots + a_n z^{-n}Y(z) = b_0 U(z) + b_1 z^{-1}U(z) + \dots + b_m z^{-m}U(z)$
    $Y(z)(a_0 + a_1 z^{-1} + \dots + a_n z^{-n}) = U(z)(b_0 + b_1 z^{-1} + \dots + b_m z^{-m})$
    The transfer function $H(z)$ is:
    $H(z) = \frac{Y(z)}{U(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_m z^{-m}}{a_0 + a_1 z^{-1} + \dots + a_n z^{-n}}$
    This can also be written as:
    $H(z) = \frac{z^n (b_0 z^n + b_1 z^{n-1} + \dots + b_m z^{n-m})}{z^n (a_0 z^n + a_1 z^{n-1} + \dots + a_n)}$ (assuming $n \geq m$)
    or
    $H(z) = \frac{b_0 z^m + b_1 z^{m-1} + \dots + b_m}{a_0 z^n + a_1 z^{n-1} + \dots + a_n}$

*   **From State-Space Representation (CO3):**
    For the system:
    $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)$
    $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k) + \mathbf{D}\mathbf{u}(k)$
    Taking the z-transform of the state equation (with $\mathbf{x}(0) = \mathbf{0}$):
    $z\mathbf{X}(z) - z\mathbf{x}(0) = \mathbf{A}\mathbf{X}(z) + \mathbf{B}\mathbf{U}(z)$
    $z\mathbf{X}(z) = \mathbf{A}\mathbf{X}(z) + \mathbf{B}\mathbf{U}(z)$
    $(z\mathbf{I} - \mathbf{A})\mathbf{X}(z) = \mathbf{B}\mathbf{U}(z)$
    $\mathbf{X}(z) = (z\mathbf{I} - \mathbf{A})^{-1} \mathbf{B}\mathbf{U}(z)$
    Taking the z-transform of the output equation:
    $\mathbf{Y}(z) = \mathbf{C}\mathbf{X}(z) + \mathbf{D}\mathbf{U}(z)$
    Substitute $\mathbf{X}(z)$:
    $\mathbf{Y}(z) = \mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1} \mathbf{B}\mathbf{U}(z) + \mathbf{D}\mathbf{U}(z)$
    The transfer function matrix $\mathbf{H}(z)$ is:
    $\mathbf{H}(z) = \frac{\mathbf{Y}(z)}{\mathbf{U}(z)} = \mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1} \mathbf{B} + \mathbf{D}$

*   **Textbook Reference:**
    *   **Kuo (1992):** Chapter 2 ("Z-Transform Theory and Applications") and Chapter 3 ("Sampled-Data Systems") are excellent resources for understanding the z-transform and its application to discrete-time systems.
    *   **Ogata (2009):** Chapter 3 ("The z-Transform and Its Applications") covers the z-transform properties, inverse z-transform, and methods for obtaining transfer functions from difference equations.
    *   **Philips and Nagle (1984):** Chapter 2 ("Discrete-Time System Analysis") discusses the z-transform and its use in analyzing sampled-data systems.

#### 3.4 Example: Z-Transform Method for Transfer Function

Consider a system described by the difference equation:
$y(k) + 2y(k-1) = u(k) - u(k-1)$

1.  **Take the z-transform of both sides (assume $y(-1)=0$, $u(-1)=0$):**
    $Z\{y(k)\} + 2Z\{y(k-1)\} = Z\{u(k)\} - Z\{u(k-1)\}$
    $Y(z) + 2z^{-1}Y(z) = U(z) - z^{-1}U(z)$

2.  **Rearrange to find $H(z)$:**
    $Y(z)(1 + 2z^{-1}) = U(z)(1 - z^{-1})$
    $H(z) = \frac{Y(z)}{U(z)} = \frac{1 - z^{-1}}{1 + 2z^{-1}}$

3.  **To get positive powers of $z$:** Multiply numerator and denominator by $z$:
    $H(z) = \frac{z(1 - z^{-1})}{z(1 + 2z^{-1})} = \frac{z - 1}{z + 2}$

#### 3.5 Example: Transfer Function from State-Space

Consider the state-space system:
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$

1.  **Calculate $z\mathbf{I} - \mathbf{A}$:**
    $z\mathbf{I} - \mathbf{A} = z\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix} = \begin{bmatrix} z & -1 \\ 0.2 & z - 1.1 \end{bmatrix}$

2.  **Calculate the inverse $(z\mathbf{I} - \mathbf{A})^{-1}$:**
    The determinant is $det(z\mathbf{I} - \mathbf{A}) = z(z - 1.1) - (-1)(0.2) = z^2 - 1.1z + 0.2$.
    The inverse is:
    $(z\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{z^2 - 1.1z + 0.2} \begin{bmatrix} z - 1.1 & 1 \\ -0.2 & z \end{bmatrix}$

3.  **Calculate $\mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}$:**
    $\mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1} = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{z^2 - 1.1z + 0.2} \begin{bmatrix} z - 1.1 & 1 \\ -0.2 & z \end{bmatrix}$
    $= \frac{1}{z^2 - 1.1z + 0.2} \begin{bmatrix} z - 1.1 & 1 \end{bmatrix}$

    $\mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \frac{1}{z^2 - 1.1z + 0.2} \begin{bmatrix} z - 1.1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    $= \frac{1}{z^2 - 1.1z + 0.2} ( (z-1.1)(0) + (1)(1) ) = \frac{1}{z^2 - 1.1z + 0.2}$

4.  **Add $\mathbf{D}$ (which is 0):**
    $H(z) = \frac{1}{z^2 - 1.1z + 0.2}$

---

### 4. Relation between Cayley-Hamilton and Z-Transform (Implicit Connections)

While not always explicitly taught as a direct theorem connecting them, there are strong implicit links:

*   **Poles and Zeros:** The poles of the transfer function $H(z)$ are the roots of the characteristic equation $det(z\mathbf{I} - \mathbf{A}) = 0$. The Cayley-Hamilton theorem is fundamentally about the matrix satisfying its characteristic polynomial, which directly relates to the system's poles.
*   **System Stability:** The location of the poles (roots of the characteristic equation) determines the stability of the discrete-time system. The Cayley-Hamilton theorem provides a way to manipulate the matrix $\mathbf{A}$ and its powers, which are essential for analyzing system stability and response.
*   **Impulse Response:** The impulse response $h(k)$ is the inverse z-transform of $H(z)$. The numerator and denominator of $H(z)$ are derived from the system matrices. The Cayley-Hamilton theorem helps in expressing $\mathbf{A}^k$, which is directly related to the impulse response when derived from state-space.

*   **Textbook Reference:**
    *   **Isermann (1989):** Volume I, Chapter 2 ("Basic Principles of Digital Control Systems") might touch upon the theoretical underpinnings connecting matrix properties and transform methods.
    *   **Franklin, Powell, and Workman (2002):** Chapter 3 ("The z-Transform") and Chapter 7 ("State-Space Methods") will likely showcase how these concepts are unified in practice.

---

### 5. System Response Analysis using Z-Transform (Relevant to CO1)

The z-transform method is powerful for determining the system's output for a given input.

*   **Steps:**
    1.  Obtain the transfer function $H(z)$.
    2.  Take the z-transform of the input signal $U(z)$.
    3.  Calculate the output in the z-domain: $Y(z) = H(z)U(z)$.
    4.  Find the inverse z-transform of $Y(z)$ to obtain the output signal $y(k)$.

*   **Common Techniques for Inverse Z-Transform:**
    *   **Partial Fraction Expansion:** Decompose $Y(z)$ into simpler fractions whose inverse z-transforms are known.
    *   **Power Series Expansion:** Expand $Y(z)$ into a power series in $z^{-1}$. The coefficients of the series are the terms of the output sequence $y(k)$.

*   **Example: Finding Output using Z-Transform**
    Consider the system with $H(z) = \frac{z - 1}{z + 2}$ and input $u(k) = (0.5)^k u(k)$ (where $u(k)$ is the unit step function for causal sequences).

    1.  **Z-transform of the input:**
        $U(z) = Z\{(0.5)^k u(k)\} = \frac{z}{z - 0.5}$

    2.  **Calculate $Y(z)$:**
        $Y(z) = H(z)U(z) = \frac{z - 1}{z + 2} \cdot \frac{z}{z - 0.5} = \frac{z(z-1)}{(z+2)(z-0.5)}$

    3.  **Partial Fraction Expansion of $Y(z)/z$:**
        $\frac{Y(z)}{z} = \frac{z-1}{(z+2)(z-0.5)} = \frac{A}{z+2} + \frac{B}{z-0.5}$
        $z-1 = A(z-0.5) + B(z+2)$
        *   Set $z = 0.5$: $0.5 - 1 = B(0.5 + 2) \implies -0.5 = 2.5B \implies B = -0.2$
        *   Set $z = -2$: $-2 - 1 = A(-2 - 0.5) \implies -3 = -2.5A \implies A = 1.2$
        So, $\frac{Y(z)}{z} = \frac{1.2}{z+2} + \frac{-0.2}{z-0.5}$

    4.  **Obtain $Y(z)$:**
        $Y(z) = \frac{1.2z}{z+2} - \frac{0.2z}{z-0.5}$
        $Y(z) = 1.2 \frac{z}{z+2} - 0.2 \frac{z}{z-0.5}$

    5.  **Find the inverse Z-transform:**
        Recall $Z\{a^k u(k)\} = \frac{z}{z-a}$.
        $y(k) = 1.2 (-2)^k u(k) - 0.2 (0.5)^k u(k)$

*   **Textbook Reference:**
    *   **Ogata (2009):** Chapter 3 provides detailed examples and methods for calculating system responses.
    *   **Philips and Nagle (1984):** Chapter 2 often includes examples of step response and impulse response calculations.

---

### 6. Connection to Course Outcomes

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.**
    *   This topic directly addresses this by teaching how to derive and use the pulse transfer function $H(z)$ from difference equations and state-space representations. Analyzing system behavior often involves manipulating $H(z)$ in the z-domain.

*   **CO3: Model and analyse discrete-time system using state space approach.**
    *   The Cayley-Hamilton theorem is a tool for manipulating the state matrix $\mathbf{A}$. The z-transform method is used to derive the transfer function from state-space matrices, which is a key aspect of analyzing state-space systems in the frequency domain.

---

### 7. Important Points to Remember

*   **Cayley-Hamilton:** A matrix satisfies its own characteristic equation. This is useful for computing matrix powers and understanding system invariants.
*   **Z-Transform:** Transforms discrete-time signals/systems from the time domain to the z-domain, simplifying operations like convolution to multiplication.
*   **Transfer Function $H(z)$:** For discrete-time LTI systems, it's the ratio of output z-transform to input z-transform (with zero initial conditions). It can be derived from difference equations or state-space models.
*   **Poles:** The roots of the denominator polynomial of $H(z)$ are the poles of the system, which are also the eigenvalues of the $\mathbf{A}$ matrix. They dictate system stability and response characteristics.
*   **State-Space to Transfer Function:** $\mathbf{H}(z) = \mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$.

---

### 8. Practice Questions and Exercises

**Question 1:**
A discrete-time LTI system is described by the difference equation:
$y(k) - 0.5y(k-1) = 0.2u(k-1)$
Determine the pulse transfer function $H(z)$.

**Answer 1:**
Taking the z-transform of the difference equation:
$Y(z) - 0.5z^{-1}Y(z) = 0.2z^{-1}U(z)$
$Y(z)(1 - 0.5z^{-1}) = 0.2z^{-1}U(z)$
$H(z) = \frac{Y(z)}{U(z)} = \frac{0.2z^{-1}}{1 - 0.5z^{-1}} = \frac{0.2}{z - 0.5}$

---

**Question 2:**
Given the state-space representation:
$\mathbf{x}(k+1) = \begin{bmatrix} 0.1 & 0.2 \\ 0.3 & 0.4 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} \mathbf{u}(k)$
$\mathbf{y}(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(k) + 0 \mathbf{u}(k)$
Find the pulse transfer function $H(z)$.

**Answer 2:**
$\mathbf{A} = \begin{bmatrix} 0.1 & 0.2 \\ 0.3 & 0.4 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$

1.  $z\mathbf{I} - \mathbf{A} = \begin{bmatrix} z - 0.1 & -0.2 \\ -0.3 & z - 0.4 \end{bmatrix}$
2.  $det(z\mathbf{I} - \mathbf{A}) = (z - 0.1)(z - 0.4) - (-0.2)(-0.3) = z^2 - 0.5z + 0.04 - 0.06 = z^2 - 0.5z - 0.02$
3.  $(z\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{z^2 - 0.5z - 0.02} \begin{bmatrix} z - 0.4 & 0.2 \\ 0.3 & z - 0.1 \end{bmatrix}$
4.  $\mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1} = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{z^2 - 0.5z - 0.02} \begin{bmatrix} z - 0.4 & 0.2 \\ 0.3 & z - 0.1 \end{bmatrix} = \frac{1}{z^2 - 0.5z - 0.02} \begin{bmatrix} z - 0.4 & 0.2 \end{bmatrix}$
5.  $\mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \frac{1}{z^2 - 0.5z - 0.02} \begin{bmatrix} z - 0.4 & 0.2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \frac{z - 0.4}{z^2 - 0.5z - 0.02}$
6.  $H(z) = \mathbf{C}(z\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D} = \frac{z - 0.4}{z^2 - 0.5z - 0.02}$

---

**Question 3:**
For the matrix $\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$, use the Cayley-Hamilton theorem to find $\mathbf{A}^3$.

**Answer 3:**
1.  Characteristic equation:
    $det(\lambda\mathbf{I} - \mathbf{A}) = det \begin{bmatrix} \lambda - 1 & -1 \\ 0 & \lambda - 1 \end{bmatrix} = (\lambda - 1)^2 = \lambda^2 - 2\lambda + 1 = 0$

2.  By Cayley-Hamilton:
    $\mathbf{A}^2 - 2\mathbf{A} + \mathbf{I} = \mathbf{0}$

3.  Express $\mathbf{A}^2$:
    $\mathbf{A}^2 = 2\mathbf{A} - \mathbf{I}$
    $\mathbf{A}^2 = 2 \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 2 \\ 0 & 2 \end{bmatrix} - \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$

4.  Express $\mathbf{A}^3$:
    $\mathbf{A}^3 = \mathbf{A} \cdot \mathbf{A}^2 = \mathbf{A}(2\mathbf{A} - \mathbf{I}) = 2\mathbf{A}^2 - \mathbf{A}$
    $\mathbf{A}^3 = 2(2\mathbf{A} - \mathbf{I}) - \mathbf{A} = 4\mathbf{A} - 2\mathbf{I} - \mathbf{A} = 3\mathbf{A} - 2\mathbf{I}$
    $\mathbf{A}^3 = 3 \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} - 2 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 3 & 3 \\ 0 & 3 \end{bmatrix} - \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}$

    (Direct calculation: $\mathbf{A}^2 = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$.
    $\mathbf{A}^3 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}$. The Cayley-Hamilton method yields the same result.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. Further Reading and Resources

*   Refer to the specified textbooks (Philips and Nagle, Ogata, Gopal) for more detailed explanations, derivations, and a broader range of examples.
*   Explore online resources and video lectures on the z-transform and Cayley-Hamilton theorem for visual learning.

---