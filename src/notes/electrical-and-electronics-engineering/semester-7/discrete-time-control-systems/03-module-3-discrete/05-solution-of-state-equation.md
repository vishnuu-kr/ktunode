---
title: "Solution of state equation"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368db"
status: "completed"
scrapedAt: "2026-05-23T16:36:26.253Z"
---
# Discrete Time Control Systems: Module 3 - Discrete

## Topic: Solution of State Equation

This module focuses on the analysis and design of discrete-time control systems using the state-space approach. We will explore how to model these systems and, crucially, how to solve their state equations.

---

### Learning Outcomes Addressed in this Topic:

*   **LO1: Model and analyze discrete-time systems using state-space representation.** (Aligns with CO3)
*   **LO2: Solve the discrete-time state equation to determine the system's future states.** (Aligns with CO3)
*   **LO3: Understand the significance of the state transition matrix in system analysis.** (Aligns with CO3)
*   **LO4: Analyze the zero-input and zero-state responses of discrete-time systems.** (Aligns with CO3)

---

### 1. Introduction to Discrete-Time State-Space Representation

The state-space representation is a powerful tool for analyzing and designing control systems, especially for multivariable systems. For discrete-time systems, the state equation describes the evolution of the system's internal states over time in discrete steps.

#### Key Concepts:

*   **State Variables:** A minimal set of variables that completely describe the internal state of the system at any given time.
*   **State Vector ($x(k)$):** A column vector containing all the state variables at discrete time step $k$. If there are $n$ state variables, $x(k)$ is an $n \times 1$ vector.
*   **Input Vector ($u(k)$):** A column vector containing the system's input signals at discrete time step $k$. If there are $r$ inputs, $u(k)$ is an $r \times 1$ vector.
*   **Output Vector ($y(k)$):** A column vector containing the system's output signals at discrete time step $k$. If there are $p$ outputs, $y(k)$ is a $p \times 1$ vector.

#### Discrete-Time State Equation:

The general form of the discrete-time state equation is:

$$x(k+1) = A x(k) + B u(k)$$

Where:
*   $x(k+1)$ is the state vector at the next time step ($k+1$).
*   $x(k)$ is the state vector at the current time step ($k$).
*   $u(k)$ is the input vector at the current time step ($k$).
*   $A$ is the **state transition matrix** ($n \times n$ matrix), which describes how the states evolve from one time step to the next in the absence of input.
*   $B$ is the **input matrix** ($n \times r$ matrix), which describes how the input affects the state changes.

#### Discrete-Time Output Equation:

The output equation describes how the system's outputs are related to its states and inputs:

$$y(k) = C x(k) + D u(k)$$

Where:
*   $y(k)$ is the output vector at the current time step ($k$).
*   $C$ is the **output matrix** ($p \times n$ matrix), which relates the states to the outputs.
*   $D$ is the **feedforward matrix** ($p \times r$ matrix), which relates the inputs directly to the outputs.

---

### 2. Solution of the Discrete-Time State Equation

The primary goal here is to find an expression for the state vector $x(k)$ at any time $k$, given the initial state $x(0)$ and the input sequence $u(0), u(1), u(2), \dots$.

#### Iterative Solution (Direct Method):

We can solve the state equation iteratively by substituting the equation for each time step.

*   At $k=0$:
    $x(1) = A x(0) + B u(0)$

*   At $k=1$:
    $x(2) = A x(1) + B u(1) = A [A x(0) + B u(0)] + B u(1) = A^2 x(0) + A B u(0) + B u(1)$

*   At $k=2$:
    $x(3) = A x(2) + B u(2) = A [A^2 x(0) + A B u(0) + B u(1)] + B u(2) = A^3 x(0) + A^2 B u(0) + A B u(1) + B u(2)$

Generalizing this pattern for $k$ time steps, we get:

$$x(k) = A^k x(0) + A^{k-1} B u(0) + A^{k-2} B u(1) + \dots + A B u(k-2) + B u(k-1)$$

This can be written in a more compact summation form:

$$x(k) = A^k x(0) + \sum_{i=0}^{k-1} A^{k-1-i} B u(i)$$

This is the **general solution** of the discrete-time state equation.

#### The State Transition Matrix ($\Phi(k)$ or $A^k$):

The term $A^k$ plays a crucial role in the solution. It is known as the **state transition matrix** for a time-invariant system. It dictates how the state vector evolves from $x(0)$ to $x(k)$ in the absence of any input.

*   **Definition:** The state transition matrix for a discrete-time system with state matrix $A$ is $\Phi(k, t_0) = A^{k-t_0}$ where $t_0$ is the initial time. For $t_0=0$, $\Phi(k, 0) = A^k$.

*   **Properties of the State Transition Matrix ($A^k$):**
    1.  $A^0 = I$ (Identity matrix)
    2.  $A^{k_1+k_2} = A^{k_1} A^{k_2}$
    3.  $(A^k)^{-1} = A^{-k}$ (if $A$ is invertible)
    4.  $\frac{dA^k}{dt}$ is not directly applicable here as $k$ is discrete. However, if $A$ itself is a function of time $A(t)$, then the solution is more complex and involves the matrix exponential or summation. For time-invariant systems (where $A$ is constant), $A^k$ is the straightforward term.

#### **The Solution in Terms of the State Transition Matrix:**

Using the state transition matrix $\Phi(k) = A^k$, the general solution can be rewritten as:

$$x(k) = \Phi(k) x(0) + \sum_{i=0}^{k-1} \Phi(k-1-i) B u(i)$$

This formula clearly separates the response due to the initial conditions (the first term) and the response due to the input (the second term).

*   **Zero-Input Response:** The response of the system when $u(k) = 0$ for all $k$.
    $x_{zi}(k) = A^k x(0)$
*   **Zero-State Response:** The response of the system when $x(0) = 0$.
    $x_{zs}(k) = \sum_{i=0}^{k-1} A^{k-1-i} B u(i)$

The total response is the sum of the zero-input and zero-state responses: $x(k) = x_{zi}(k) + x_{zs}(k)$.

---

### 3. Calculation of the State Transition Matrix ($A^k$)

For practical analysis, we need efficient methods to compute $A^k$.

#### Methods for calculating $A^k$:

1.  **Direct Matrix Multiplication:** For small $k$, we can simply multiply the matrix $A$ by itself $k$ times. This is computationally intensive for large $k$.

2.  **Cayley-Hamilton Theorem:** This theorem states that every square matrix satisfies its own characteristic equation. The characteristic equation is given by $\det(A - \lambda I) = 0$. Let the characteristic polynomial be $p(\lambda) = \lambda^n + c_{n-1}\lambda^{n-1} + \dots + c_1\lambda + c_0$. Then, $p(A) = A^n + c_{n-1}A^{n-1} + \dots + c_1A + c_0I = 0$. This can be used to express higher powers of $A$ ($A^k$ for $k \ge n$) as linear combinations of lower powers of $A$ ($I, A, A^2, \dots, A^{n-1}$).

    *   **Procedure:**
        a. Find the characteristic equation: $\det(A - \lambda I) = 0$.
        b. Let the characteristic polynomial be $p(\lambda)$. According to Cayley-Hamilton, $p(A) = 0$.
        c. Express $A^n$ in terms of lower powers of $A$ using $p(A) = 0$.
        d. Use this relation to express $A^{n+1}, A^{n+2}, \dots$ in terms of lower powers.
        e. For any $A^k$, we can write $A^k = \alpha_0(k)I + \alpha_1(k)A + \dots + \alpha_{n-1}(k)A^{n-1}$, where $\alpha_i(k)$ are coefficients that depend on $k$.
        f. Alternatively, we can express $A^k$ as a polynomial in $A$.

3.  **Laplace Transform Method (Z-Transform for discrete systems):** While the Laplace transform is for continuous-time systems, the Z-transform is the equivalent for discrete-time systems. However, calculating $A^k$ directly via Z-transform is often done by taking the inverse Z-transform of $(zI - A)^{-1}$.

    *   Consider the system equation $x(k+1) = Ax(k) + Bu(k)$.
    *   Taking the Z-transform of both sides:
        $zX(z) - zx(0) = AX(z) + BU(z)$
    *   Rearranging to solve for $X(z)$:
        $(zI - A)X(z) = zx(0) + BU(z)$
        $X(z) = (zI - A)^{-1} zx(0) + (zI - A)^{-1} BU(z)$

    *   Now, recall that for a continuous-time system, the solution involved $e^{At}$ which is the inverse Laplace transform of $(sI-A)^{-1}$. Similarly, for discrete-time systems, the inverse Z-transform of $(zI - A)^{-1}$ gives $A^k$.
        Let $\mathcal{Z}^{-1}[(zI - A)^{-1}] = A^k$.
        Then, from the above expression:
        $x(k) = \mathcal{Z}^{-1}[ (zI - A)^{-1} zx(0) ] + \mathcal{Z}^{-1}[ (zI - A)^{-1} BU(z) ]$
        $x(k) = A^k x(0) + \mathcal{Z}^{-1}[ (zI - A)^{-1} B U(z) ]$

    *   The term $\mathcal{Z}^{-1}[ (zI - A)^{-1} B U(z) ]$ corresponds to the summation term in the iterative solution.
        $\mathcal{Z}^{-1}[ (zI - A)^{-1} B U(z) ] = \sum_{i=0}^{k-1} A^{k-1-i} B u(i)$.

    *   Therefore, the Z-transform approach confirms the general solution and highlights the importance of $(zI - A)^{-1}$ in determining $A^k$. Calculating $(zI - A)^{-1}$ involves finding the adjugate of $(zI - A)$ and dividing by its determinant (which is related to the characteristic polynomial).

4.  **Eigenvalue Decomposition (Diagonalization):** If matrix $A$ is diagonalizable, we can write $A = P \Lambda P^{-1}$, where $\Lambda$ is a diagonal matrix of eigenvalues and $P$ is the matrix of corresponding eigenvectors.
    Then, $A^k = (P \Lambda P^{-1})^k = P \Lambda^k P^{-1}$.
    The calculation of $\Lambda^k$ is straightforward: if $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, then $\Lambda^k = \text{diag}(\lambda_1^k, \lambda_2^k, \dots, \lambda_n^k)$.
    This method is very efficient for computing $A^k$ if $A$ is diagonalizable.

    *   **Caveat:** If $A$ has repeated eigenvalues or is not diagonalizable, we need to use the Jordan Canonical Form, which is more complex.

---

### 4. Examples

**Example 1: Finding the State Transition Matrix**

Consider a discrete-time system with state matrix $A = \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix}$. Find $A^2$ and $A^3$.

*   **Using Direct Multiplication:**
    $A^2 = A \times A = \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix} = \begin{bmatrix} (0)(0)+(1)(-0.5) & (0)(1)+(1)(-1.5) \\ (-0.5)(0)+(-1.5)(-0.5) & (-0.5)(1)+(-1.5)(-1.5) \end{bmatrix} = \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix}$

    $A^3 = A^2 \times A = \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix} = \begin{bmatrix} (-0.5)(0)+(-1.5)(-0.5) & (-0.5)(1)+(-1.5)(-1.5) \\ (0.75)(0)+(1.75)(-0.5) & (0.75)(1)+(1.75)(-1.5) \end{bmatrix} = \begin{bmatrix} 0.75 & 1.0 \\ -0.875 & -1.875 \end{bmatrix}$

*   **Using Cayley-Hamilton Theorem:**
    Characteristic equation: $\det(A - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -0.5 & -1.5-\lambda \end{bmatrix} = (-\lambda)(-1.5-\lambda) - (1)(-0.5) = 1.5\lambda + \lambda^2 + 0.5 = \lambda^2 + 1.5\lambda + 0.5 = 0$.
    By Cayley-Hamilton theorem, $A^2 + 1.5A + 0.5I = 0$.
    Therefore, $A^2 = -1.5A - 0.5I$.
    $A^2 = -1.5 \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix} - 0.5 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1.5 \\ 0.75 & 2.25 \end{bmatrix} - \begin{bmatrix} 0.5 & 0 \\ 0 & 0.5 \end{bmatrix} = \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix}$. (Matches direct multiplication)

    To find $A^3$:
    $A^3 = A \times A^2 = A(-1.5A - 0.5I) = -1.5A^2 - 0.5A$
    $A^3 = -1.5 \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix} - 0.5 \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix}$
    $A^3 = \begin{bmatrix} 0.75 & 2.25 \\ -1.125 & -2.625 \end{bmatrix} - \begin{bmatrix} 0 & 0.5 \\ -0.25 & -0.75 \end{bmatrix} = \begin{bmatrix} 0.75 & 1.75 \\ -0.875 & -1.875 \end{bmatrix}$.
    *(Correction in calculation of A^3: Should be)*
    $A^3 = \begin{bmatrix} 0.75 & 2.25 \\ -1.125 & -2.625 \end{bmatrix} - \begin{bmatrix} 0 & 0.5 \\ -0.25 & -0.75 \end{bmatrix} = \begin{bmatrix} 0.75 & 1.75 \\ -0.875 & -1.875 \end{bmatrix}$.
    *(Re-checking the calculation for A^3 from direct multiplication)*
    $A^3 = \begin{bmatrix} 0.75 & 1.0 \\ -0.875 & -1.875 \end{bmatrix}$ - *There seems to be a discrepancy in the A^3 calculation between methods. Let's re-calculate A^3 using the Cayley-Hamilton result:*

    $A^3 = -1.5A^2 - 0.5A$
    $A^3 = -1.5 \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix} - 0.5 \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix}$
    $A^3 = \begin{bmatrix} 0.75 & 2.25 \\ -1.125 & -2.625 \end{bmatrix} - \begin{bmatrix} 0 & 0.5 \\ -0.25 & -0.75 \end{bmatrix} = \begin{bmatrix} 0.75 & 1.75 \\ -0.875 & -1.875 \end{bmatrix}$

    *Let's re-calculate A^3 directly one more time to be sure:*
    $A^3 = A^2 \times A = \begin{bmatrix} -0.5 & -1.5 \\ 0.75 & 1.75 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.5 & -1.5 \end{bmatrix}$
    $A^3_{11} = (-0.5)(0) + (-1.5)(-0.5) = 0.75$
    $A^3_{12} = (-0.5)(1) + (-1.5)(-1.5) = -0.5 + 2.25 = 1.75$
    $A^3_{21} = (0.75)(0) + (1.75)(-0.5) = -0.875$
    $A^3_{22} = (0.75)(1) + (1.75)(-1.5) = 0.75 - 2.625 = -1.875$
    So, $A^3 = \begin{bmatrix} 0.75 & 1.75 \\ -0.875 & -1.875 \end{bmatrix}$. The Cayley-Hamilton method result matches this. My initial manual calculation for A^3 using direct multiplication had an error in the (1,2) element.

**Example 2: Solving the State Equation**

Consider the system:
$x(k+1) = \begin{bmatrix} 1 & 1 \\ 0 & 0.5 \end{bmatrix} x(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(k)$
$y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(k)$

Given initial state $x(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and input $u(k) = 1$ for $k \ge 0$. Find $x(k)$ and $y(k)$ for $k=0, 1, 2$.

Let $A = \begin{bmatrix} 1 & 1 \\ 0 & 0.5 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $x(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $u(k) = 1$.

*   **For k=0:**
    $x(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $y(0) = C x(0) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = 1$

*   **For k=1:**
    $x(1) = A x(0) + B u(0) = \begin{bmatrix} 1 & 1 \\ 0 & 0.5 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} (1) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$
    $y(1) = C x(1) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 2 \\ 0 \end{bmatrix} = 2$

*   **For k=2:**
    $x(2) = A x(1) + B u(1) = \begin{bmatrix} 1 & 1 \\ 0 & 0.5 \end{bmatrix} \begin{bmatrix} 2 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} (1) = \begin{bmatrix} 2 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
    $y(2) = C x(2) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 3 \\ 0 \end{bmatrix} = 3$

*   **General Solution Approach (for verification):**
    First, find $A^k$.
    Characteristic equation: $\det(A-\lambda I) = \det \begin{bmatrix} 1-\lambda & 1 \\ 0 & 0.5-\lambda \end{bmatrix} = (1-\lambda)(0.5-\lambda) = 0$.
    Eigenvalues are $\lambda_1 = 1$, $\lambda_2 = 0.5$.
    Since eigenvalues are distinct, $A$ is diagonalizable. $A = P \Lambda P^{-1}$.
    Eigenvectors:
    For $\lambda_1 = 1$: $(A - I)v_1 = 0 \implies \begin{bmatrix} 0 & 1 \\ 0 & -0.5 \end{bmatrix} v_1 = 0 \implies v_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    For $\lambda_2 = 0.5$: $(A - 0.5I)v_2 = 0 \implies \begin{bmatrix} 0.5 & 1 \\ 0 & 0 \end{bmatrix} v_2 = 0 \implies v_2 = \begin{bmatrix} -2 \\ 1 \end{bmatrix}$.
    $P = \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix}$, $P^{-1} = \frac{1}{1} \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$.
    $\Lambda = \begin{bmatrix} 1 & 0 \\ 0 & 0.5 \end{bmatrix}$.
    $A^k = P \Lambda^k P^{-1} = \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1^k & 0 \\ 0 & 0.5^k \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$
    $A^k = \begin{bmatrix} 1 & -2 \cdot 0.5^k \\ 0 & 1 \cdot 0.5^k \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 - 2 \cdot 0.5^k \\ 0 & 0.5^k \end{bmatrix}$
    $A^k = \begin{bmatrix} 1 & 2(1 - 0.5^k) \\ 0 & 0.5^k \end{bmatrix}$

    Now, calculate the summation term for $x(k) = A^k x(0) + \sum_{i=0}^{k-1} A^{k-1-i} B u(i)$:
    $A^{k-1-i} B = \begin{bmatrix} 1 & 2(1 - 0.5^{k-1-i}) \\ 0 & 0.5^{k-1-i} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    $\sum_{i=0}^{k-1} A^{k-1-i} B u(i) = \sum_{i=0}^{k-1} \begin{bmatrix} 1 \\ 0 \end{bmatrix} (1) = \sum_{i=0}^{k-1} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} k \\ 0 \end{bmatrix}$.

    So, $x(k) = A^k x(0) + \begin{bmatrix} k \\ 0 \end{bmatrix}$
    $x(k) = \begin{bmatrix} 1 & 2(1 - 0.5^k) \\ 0 & 0.5^k \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} k \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} k \\ 0 \end{bmatrix} = \begin{bmatrix} 1+k \\ 0 \end{bmatrix}$.

    Let's check for $k=0, 1, 2$:
    $x(0) = \begin{bmatrix} 1+0 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ (Matches)
    $x(1) = \begin{bmatrix} 1+1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$ (Matches)
    $x(2) = \begin{bmatrix} 1+2 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$ (Matches)

    Now for the output:
    $y(k) = C x(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 1+k \\ 0 \end{bmatrix} = 1+k$.
    $y(0) = 1+0 = 1$ (Matches)
    $y(1) = 1+1 = 2$ (Matches)
    $y(2) = 1+2 = 3$ (Matches)

    The general solution approach yields the same results.

---

### 5. Practice Questions

**Question 1:**
Given the discrete-time state-space system:
$x(k+1) = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix} x(k) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} u(k)$
$y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(k)$

If the initial state is $x(0) = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and the input is $u(k) = 0$ for all $k \ge 0$, find the zero-input response $x_{zi}(k)$ and $y_{zi}(k)$ for $k=0, 1, 2$.

**Answer 1:**
The state transition matrix $A = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix}$ is already diagonal.
$A^k = \begin{bmatrix} 0.5^k & 0 \\ 0 & 0.2^k \end{bmatrix}$.

The zero-input response is $x_{zi}(k) = A^k x(0)$.
$x_{zi}(k) = \begin{bmatrix} 0.5^k & 0 \\ 0 & 0.2^k \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.5^k \\ 0.2^k \end{bmatrix}$.

For $k=0$: $x_{zi}(0) = \begin{bmatrix} 0.5^0 \\ 0.2^0 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
$y_{zi}(0) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = 1$.

For $k=1$: $x_{zi}(1) = \begin{bmatrix} 0.5^1 \\ 0.2^1 \end{bmatrix} = \begin{bmatrix} 0.5 \\ 0.2 \end{bmatrix}$.
$y_{zi}(1) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0.5 \\ 0.2 \end{bmatrix} = 0.5$.

For $k=2$: $x_{zi}(2) = \begin{bmatrix} 0.5^2 \\ 0.2^2 \end{bmatrix} = \begin{bmatrix} 0.25 \\ 0.04 \end{bmatrix}$.
$y_{zi}(2) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0.25 \\ 0.04 \end{bmatrix} = 0.25$.

**Question 2:**
Consider the system:
$x(k+1) = \begin{bmatrix} 0 & 1 \\ -0.1 & 1.1 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)$

Find the state transition matrix $A^2$ using two different methods.
**Answer 2:**
Let $A = \begin{bmatrix} 0 & 1 \\ -0.1 & 1.1 \end{bmatrix}$.

**Method 1: Direct Multiplication**
$A^2 = A \times A = \begin{bmatrix} 0 & 1 \\ -0.1 & 1.1 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.1 & 1.1 \end{bmatrix} = \begin{bmatrix} (0)(0)+(1)(-0.1) & (0)(1)+(1)(1.1) \\ (-0.1)(0)+(1.1)(-0.1) & (-0.1)(1)+(1.1)(1.1) \end{bmatrix} = \begin{bmatrix} -0.1 & 1.1 \\ -0.11 & 1.11 \end{bmatrix}$

**Method 2: Cayley-Hamilton Theorem**
Characteristic equation: $\det(A - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -0.1 & 1.1-\lambda \end{bmatrix} = (-\lambda)(1.1-\lambda) - (1)(-0.1) = -1.1\lambda + \lambda^2 + 0.1 = \lambda^2 - 1.1\lambda + 0.1 = 0$.
By Cayley-Hamilton, $A^2 - 1.1A + 0.1I = 0$.
$A^2 = 1.1A - 0.1I = 1.1 \begin{bmatrix} 0 & 1 \\ -0.1 & 1.1 \end{bmatrix} - 0.1 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$A^2 = \begin{bmatrix} 0 & 1.1 \\ -0.11 & 1.21 \end{bmatrix} - \begin{bmatrix} 0.1 & 0 \\ 0 & 0.1 \end{bmatrix} = \begin{bmatrix} -0.1 & 1.1 \\ -0.11 & 1.11 \end{bmatrix}$

Both methods yield the same result.

---

### 6. Important Points to Remember:

*   The discrete-time state equation is $x(k+1) = A x(k) + B u(k)$.
*   The general solution is $x(k) = A^k x(0) + \sum_{i=0}^{k-1} A^{k-1-i} B u(i)$.
*   $A^k$ is the **state transition matrix** for time-invariant systems.
*   The solution can be decomposed into **zero-input response** ($A^k x(0)$) and **zero-state response** ($\sum_{i=0}^{k-1} A^{k-1-i} B u(i)$).
*   Methods for computing $A^k$ include direct multiplication, Cayley-Hamilton theorem, and eigenvalue decomposition.
*   Understanding $A^k$ is fundamental for analyzing system behavior over time.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook and Reference Material Links:

*   **Digital control system analysis and design by Philips and Nagle (1984):** Often covers state-space methods in detail, including solutions to state equations. Look for chapters on state-space representation and analysis.
*   **Discrete Time Control Systems by K. Ogata (2009):** This is a highly regarded text. Chapter 2 ("State-Space Analysis") and Chapter 3 ("Discrete-Time State-Space Analysis") will be particularly relevant. Ogata provides thorough derivations and examples for solving state equations.
*   **Digital control and State Variable methods by M. Gopal (1997):** This book specifically focuses on state-variable methods for digital control. Chapters on the solution of state equations and the state transition matrix will be directly applicable.
*   **Digital Control Systems by B C Kuo (1992):** Kuo's text also provides comprehensive coverage of state-space analysis for digital systems.
*   **Digital Control of Dynamic Systems by G.F.Franklin, J. David Powell and M. Workman (, 3rd Ed.):** This is another leading textbook. Its chapters on discrete-time systems and state-space methods will cover the solution of state equations.

*(Note: Actual page numbers or specific chapter headings would require access to the books, but the topics mentioned are standard within these texts for this subject.)*

---

### Connection to Course Outcomes:

*   **CO3: Model and analyse discrete-time system using state space approach.**
    This topic directly addresses CO3 by explaining the state-space model and, more importantly, providing the tools to *analyze* the system's behavior over time through the solution of the state equation. Understanding the state transition matrix is key to this analysis.

This concludes the notes on the solution of the state equation for discrete-time control systems. This foundation is crucial for subsequent topics like controller design and observer design.