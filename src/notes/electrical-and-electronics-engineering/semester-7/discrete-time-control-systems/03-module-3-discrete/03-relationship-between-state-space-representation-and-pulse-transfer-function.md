---
title: "Relationship between state space representation and pulse transfer function"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d9"
status: "completed"
scrapedAt: "2026-05-23T16:36:23.697Z"
---
# Module 3: Discrete - Relationship between State Space Representation and Pulse Transfer Function

This module delves into the crucial connection between two fundamental ways of representing discrete-time control systems: the state-space representation and the pulse transfer function. Understanding this relationship is essential for analyzing and designing digital control systems, as outlined in the course outcomes.

---

## 1. Introduction to State-Space Representation and Pulse Transfer Function

Before exploring their relationship, let's briefly recap the core concepts.

### 1.1 State-Space Representation

**Definition:** State-space representation describes a system's behavior using a set of first-order differential (or difference) equations. It involves state variables that capture the internal state of the system at any given time.

**Discrete-Time State-Space Equations:**
For a linear time-invariant (LTI) discrete-time system, the state-space representation is given by:

*   **State Equation:** $\mathbf{x}(k+1) = A\mathbf{x}(k) + B u(k)$
*   **Output Equation:** $\mathbf{y}(k) = C\mathbf{x}(k) + D u(k)$

Where:
*   $\mathbf{x}(k)$: State vector at time instant $k$.
*   $u(k)$: Input signal at time instant $k$.
*   $\mathbf{y}(k)$: Output signal at time instant $k$.
*   $A$: State transition matrix.
*   $B$: Input matrix.
*   $C$: Output matrix.
*   $D$: Direct transmission matrix (feedforward).

**(Referenced from: Ogata, Chapter 2; Gopal, Chapter 2)**

### 1.2 Pulse Transfer Function

**Definition:** The pulse transfer function represents the input-output relationship of a discrete-time LTI system in the z-domain. It is obtained by taking the z-transform of the system's impulse response.

**Relationship to Difference Equations:**
A system described by a linear constant-coefficient difference equation:
$y(k) + a_1 y(k-1) + \dots + a_n y(k-n) = b_0 u(k) + b_1 u(k-1) + \dots + b_m u(k-m)$
can be represented by a pulse transfer function $G(z) = Y(z)/U(z)$.

**(Referenced from: Philips & Nagle, Chapter 2; Kuo, Chapter 3)**

---

## 2. Deriving the Pulse Transfer Function from State-Space Representation

The core of this topic lies in how we can derive the pulse transfer function (which describes the input-output relationship) from the state-space representation (which describes the internal dynamics and input-output relationship).

### 2.1 z-Transform of State-Space Equations

We start by taking the z-transform of the discrete-time state-space equations:

*   **State Equation (z-transform):**
    $z\mathbf{X}(z) - z\mathbf{x}(0) = A\mathbf{X}(z) + B U(z)$
    Rearranging to solve for $\mathbf{X}(z)$:
    $(zI - A)\mathbf{X}(z) = z\mathbf{x}(0) + B U(z)$
    $\mathbf{X}(z) = (zI - A)^{-1} z\mathbf{x}(0) + (zI - A)^{-1} B U(z)$
    Where:
    *   $\mathbf{X}(z)$: z-transform of the state vector $\mathbf{x}(k)$.
    *   $U(z)$: z-transform of the input signal $u(k)$.
    *   $I$: Identity matrix.
    *   $\mathbf{x}(0)$: Initial state vector.

*   **Output Equation (z-transform):**
    $Y(z) = C\mathbf{X}(z) + D U(z)$

**(Referenced from: Ogata, Chapter 2; Gopal, Chapter 4)**

### 2.2 Obtaining the Pulse Transfer Function

To obtain the pulse transfer function, we assume zero initial conditions, i.e., $\mathbf{x}(0) = \mathbf{0}$. This is standard practice when deriving transfer functions, as they represent the system's response to an input starting from rest.

Substituting $\mathbf{x}(0) = \mathbf{0}$ into the state equation for $\mathbf{X}(z)$:
$\mathbf{X}(z) = (zI - A)^{-1} B U(z)$

Now, substitute this expression for $\mathbf{X}(z)$ into the output equation:
$Y(z) = C [(zI - A)^{-1} B U(z)] + D U(z)$
$Y(z) = [C(zI - A)^{-1} B + D] U(z)$

The pulse transfer function $G(z)$ is defined as the ratio $Y(z)/U(z)$ when $\mathbf{x}(0) = \mathbf{0}$. Therefore:

$$G(z) = \frac{Y(z)}{U(z)} = C(zI - A)^{-1} B + D$$

This equation is a fundamental result that allows us to derive the pulse transfer function directly from the state-space matrices ($A$, $B$, $C$, $D$).

**(Referenced from: Philips & Nagle, Chapter 4; Gopal, Chapter 4)**

---

## 3. Key Concepts and Definitions for the Derivation

### 3.1 The Resolvent Matrix $(zI - A)^{-1}$

The term $(zI - A)^{-1}$ is known as the **resolvent matrix**. It plays a crucial role in transforming from the time domain to the frequency (z) domain.

*   **Calculation:** $(zI - A)^{-1} = \frac{adj(zI - A)}{det(zI - A)}$
    where $adj(zI - A)$ is the adjugate of the matrix $(zI - A)$, and $det(zI - A)$ is its determinant.

*   **Significance:** The roots of $det(zI - A) = 0$ are the **poles** of the system, which are the eigenvalues of the $A$ matrix. The poles determine the system's stability and transient response characteristics.

**(Referenced from: Gopal, Chapter 4; Franklin, Powell, Workman, Chapter 4)**

---

## 4. Example: Deriving Pulse Transfer Function from State-Space

Let's consider a simple discrete-time system with the following state-space representation:

$A = \begin{bmatrix} 0.5 & 0 \\ 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $D = 0$

We want to find the pulse transfer function $G(z) = Y(z)/U(z)$.

**Step 1: Compute $(zI - A)$**
$zI - A = z \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0.5 & 0 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} z - 0.5 & 0 \\ -1 & z \end{bmatrix}$

**Step 2: Compute the determinant of $(zI - A)$**
$det(zI - A) = (z - 0.5)(z) - (0)(-1) = z^2 - 0.5z$

**Step 3: Compute the adjugate of $(zI - A)$**
For a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the adjugate is $\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.
So, $adj(zI - A) = \begin{bmatrix} z & 0 \\ 1 & z - 0.5 \end{bmatrix}$

**Step 4: Compute the inverse $(zI - A)^{-1}$**
$(zI - A)^{-1} = \frac{adj(zI - A)}{det(zI - A)} = \frac{1}{z^2 - 0.5z} \begin{bmatrix} z & 0 \\ 1 & z - 0.5 \end{bmatrix} = \begin{bmatrix} \frac{z}{z^2 - 0.5z} & \frac{0}{z^2 - 0.5z} \\ \frac{1}{z^2 - 0.5z} & \frac{z - 0.5}{z^2 - 0.5z} \end{bmatrix}$

**Step 5: Compute $C(zI - A)^{-1} B$**
$C(zI - A)^{-1} B = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} \frac{z}{z^2 - 0.5z} & \frac{0}{z^2 - 0.5z} \\ \frac{1}{z^2 - 0.5z} & \frac{z - 0.5}{z^2 - 0.5z} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

First, multiply $C$ by $(zI - A)^{-1}$:
$\begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} \frac{z}{z^2 - 0.5z} & \frac{0}{z^2 - 0.5z} \\ \frac{1}{z^2 - 0.5z} & \frac{z - 0.5}{z^2 - 0.5z} \end{bmatrix} = \begin{bmatrix} \frac{1}{z^2 - 0.5z} & \frac{z - 0.5}{z^2 - 0.5z} \end{bmatrix}$

Now, multiply the result by $B$:
$\begin{bmatrix} \frac{1}{z^2 - 0.5z} & \frac{z - 0.5}{z^2 - 0.5z} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \frac{1}{z^2 - 0.5z} \times 1 + \frac{z - 0.5}{z^2 - 0.5z} \times 0 = \frac{1}{z^2 - 0.5z}$

**Step 6: Add $D$**
$G(z) = C(zI - A)^{-1} B + D = \frac{1}{z^2 - 0.5z} + 0 = \frac{1}{z^2 - 0.5z}$

We can simplify the denominator: $z^2 - 0.5z = z(z - 0.5)$.
So, the pulse transfer function is $G(z) = \frac{1}{z(z - 0.5)}$.

**(Referenced from: Ogata, Example 2-7; Gopal, Example 4.3)**

---

## 5. Relationship to System Poles and Zeros

The derived pulse transfer function $G(z) = C(zI - A)^{-1} B + D$ reveals key system characteristics:

*   **Poles:** The poles of $G(z)$ are the roots of the characteristic equation $det(zI - A) = 0$. These are the eigenvalues of the $A$ matrix and dictate the system's stability and natural response modes.
*   **Zeros:** The zeros of $G(z)$ are the roots of the numerator polynomial, which result from the specific choices of $B$, $C$, and $D$ matrices in relation to $(zI - A)^{-1}$.

**(Referenced from: Kuo, Chapter 5; Franklin, Powell, Workman, Chapter 4)**

---

## 6. Converting Pulse Transfer Function to State-Space

While this module focuses on deriving $G(z)$ from state-space, it's important to note that the reverse is also possible. A given pulse transfer function can be converted into various state-space realizations (e.g., controllable canonical form, observable canonical form). This conversion highlights the flexibility of the state-space representation.

**(Referenced from: Philips & Nagle, Chapter 4; Ogata, Chapter 2)**

---

## 7. Relevance to Course Outcomes

This topic directly supports several course outcomes:

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.** Understanding the derivation of $G(z)$ from state-space is a fundamental step in modeling systems and analyzing their behavior in the z-domain.
*   **CO3: Model and analyse discrete-time system using state space approach.** This topic bridges the two representations, allowing for analysis using either approach and understanding their equivalence.

---

## 8. Important Points to Remember

*   The formula $G(z) = C(zI - A)^{-1} B + D$ is the direct link between state-space matrices and the pulse transfer function.
*   Assume **zero initial conditions** ($\mathbf{x}(0) = \mathbf{0}$) when deriving the pulse transfer function.
*   The **poles** of the pulse transfer function are the **eigenvalues of the $A$ matrix**.
*   The **resolvent matrix** $(zI - A)^{-1}$ is key to the derivation.
*   The choice of state-space representation for a given pulse transfer function is not unique, leading to different sets of $A, B, C, D$ matrices (realizations).

---

## 9. Practice Questions and Exercises

**Question 1:**
Given the discrete-time state-space representation:
$A = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.2 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D = 0$
Find the pulse transfer function $G(z) = Y(z)/U(z)$.

**Solution 1:**
1.  **Compute $(zI - A)$:**
    $zI - A = z \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -0.2 & 1.2 \end{bmatrix} = \begin{bmatrix} z & -1 \\ 0.2 & z - 1.2 \end{bmatrix}$

2.  **Compute $det(zI - A)$:**
    $det(zI - A) = z(z - 1.2) - (-1)(0.2) = z^2 - 1.2z + 0.2$

3.  **Compute $adj(zI - A)$:**
    $adj(zI - A) = \begin{bmatrix} z - 1.2 & 1 \\ -0.2 & z \end{bmatrix}$

4.  **Compute $(zI - A)^{-1}$:**
    $(zI - A)^{-1} = \frac{1}{z^2 - 1.2z + 0.2} \begin{bmatrix} z - 1.2 & 1 \\ -0.2 & z \end{bmatrix}$

5.  **Compute $C(zI - A)^{-1} B$:**
    $C(zI - A)^{-1} B = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{z^2 - 1.2z + 0.2} \begin{bmatrix} z - 1.2 & 1 \\ -0.2 & z \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

    First, multiply $(zI - A)^{-1}$ by $B$:
    $\frac{1}{z^2 - 1.2z + 0.2} \begin{bmatrix} z - 1.2 & 1 \\ -0.2 & z \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \frac{1}{z^2 - 1.2z + 0.2} \begin{bmatrix} 1 \\ z \end{bmatrix}$

    Now, multiply by $C$:
    $\begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{z^2 - 1.2z + 0.2} \begin{bmatrix} 1 \\ z \end{bmatrix} = \frac{1}{z^2 - 1.2z + 0.2} (1 \times 1 + 0 \times z) = \frac{1}{z^2 - 1.2z + 0.2}$

6.  **Add $D$:**
    $G(z) = \frac{1}{z^2 - 1.2z + 0.2} + 0 = \frac{1}{z^2 - 1.2z + 0.2}$

The pulse transfer function is $G(z) = \frac{1}{z^2 - 1.2z + 0.2}$.
The poles are the roots of $z^2 - 1.2z + 0.2 = 0$. Using the quadratic formula $z = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$z = \frac{1.2 \pm \sqrt{(-1.2)^2 - 4(1)(0.2)}}{2(1)} = \frac{1.2 \pm \sqrt{1.44 - 0.8}}{2} = \frac{1.2 \pm \sqrt{0.64}}{2} = \frac{1.2 \pm 0.8}{2}$
Poles are $z_1 = \frac{1.2 + 0.8}{2} = \frac{2}{2} = 1$ and $z_2 = \frac{1.2 - 0.8}{2} = \frac{0.4}{2} = 0.2$.

---

**Question 2:**
Consider a discrete-time system with the pulse transfer function:
$G(z) = \frac{z+1}{z^2 - 0.5z + 0.1}$
Find one possible state-space representation $(A, B, C, D)$ for this system.

**Solution 2:**
We can use the controllable canonical form realization.
First, rewrite $G(z)$ as:
$G(z) = \frac{z+1}{z^2 - 0.5z + 0.1}$

For a system with pulse transfer function $\frac{b_0 z^n + b_1 z^{n-1} + \dots + b_n}{z^n + a_1 z^{n-1} + \dots + a_n}$, the controllable canonical form is:

$A = \begin{bmatrix} -a_1 & -a_2 & \dots & -a_n \\ 1 & 0 & \dots & 0 \\ 0 & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} b_n \\ b_{n-1} \\ \vdots \\ b_1 \\ b_0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 0 & \dots & 1 \end{bmatrix}$, $D=0$ (if $D=0$)

In our case, $n=2$.
The denominator is $z^2 - 0.5z + 0.1$. So, $a_1 = -0.5$, $a_2 = 0.1$.
The numerator is $z+1$. We can write it as $0z^2 + 1z^1 + 1z^0$.
So, $b_0 = 0$ (coefficient of $z^2$), $b_1 = 1$ (coefficient of $z^1$), $b_2 = 1$ (coefficient of $z^0$).

The controllable canonical form matrices are:

$A = \begin{bmatrix} -a_1 & -a_2 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} -(-0.5) & -(0.1) \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0.5 & -0.1 \\ 1 & 0 \end{bmatrix}$

$B = \begin{bmatrix} b_2 \\ b_1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ (Note: $b_0$ is usually the coefficient of $z^0$ in the numerator and it matters if $D$ is non-zero. For standard controllable canonical form, the numerator coefficients are mapped as $b_n, b_{n-1}, \ldots, b_0$. However, some texts might use $b_{n-1}, \ldots, b_0$ for a numerator polynomial of degree $n-1$. Let's use the standard definition where the numerator is $b_0 z^{n-1} + \dots + b_{n-1}$, here $n=2$ so $z+1$ is $b_0 z + b_1$, which means $b_0 = 1, b_1 = 1$. The controllable canonical form for $\frac{b_0 z^{n-1} + \dots + b_{n-1}}{z^n + a_1 z^{n-1} + \dots + a_n}$ is:
$A = \begin{bmatrix} -a_1 & -a_2 & \dots & -a_n \\ 1 & 0 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} b_{n-1} & b_{n-2} & \dots & b_0 \end{bmatrix}$, $D=0$.

Let's re-evaluate based on the standard form:
$G(z) = \frac{b_0 z + b_1}{z^2 + a_1 z + a_2} = \frac{1 \cdot z + 1}{z^2 - 0.5z + 0.1}$
Here, $n=2$. The numerator is of degree $n-1=1$.
$a_1 = -0.5, a_2 = 0.1$
$b_0 = 1, b_1 = 1$

Controllable Canonical Form:
$A = \begin{bmatrix} -a_1 & -a_2 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0.5 & -0.1 \\ 1 & 0 \end{bmatrix}$
$B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
$C = \begin{bmatrix} b_1 & b_0 \end{bmatrix} = \begin{bmatrix} 1 & 1 \end{bmatrix}$
$D = 0$

Let's verify this:
$zI - A = \begin{bmatrix} z-0.5 & 0.1 \\ -1 & z \end{bmatrix}$
$det(zI - A) = (z-0.5)z - (0.1)(-1) = z^2 - 0.5z + 0.1$ (Correct denominator)

$C(zI - A)^{-1} B = \begin{bmatrix} 1 & 1 \end{bmatrix} \frac{1}{z^2 - 0.5z + 0.1} \begin{bmatrix} z & -0.1 \\ 1 & z-0.5 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
$= \begin{bmatrix} 1 & 1 \end{bmatrix} \frac{1}{z^2 - 0.5z + 0.1} \begin{bmatrix} z \\ 1 \end{bmatrix}$
$= \frac{1}{z^2 - 0.5z + 0.1} [1 \cdot z + 1 \cdot 1] = \frac{z+1}{z^2 - 0.5z + 0.1}$ (Correct numerator)

So, one possible state-space representation is:
$A = \begin{bmatrix} 0.5 & -0.1 \\ 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 1 \end{bmatrix}$, $D = 0$.

**(Referenced from: Ogata, Chapter 2; Gopal, Chapter 4 for canonical forms)**

---

This module provides the foundational understanding for relating the system's internal dynamics (state-space) to its input-output behavior (pulse transfer function), which is crucial for subsequent analysis and design tasks in discrete-time control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
