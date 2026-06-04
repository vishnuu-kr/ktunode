---
title: "Discrete-time State Space System:"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d7"
status: "completed"
scrapedAt: "2026-05-23T16:36:21.227Z"
---
# Discrete Time Control Systems: Module 3 - Discrete-time State Space System

This module introduces the state-space representation of discrete-time systems, a powerful tool for analyzing and designing control systems. It builds upon the foundational concepts of discrete-time systems and provides a framework for understanding system behavior and implementing advanced control strategies.

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Model discrete-time systems using the state-space approach.
*   Analyze the properties of discrete-time state-space systems, including stability and controllability.
*   Understand the concept of state transition matrices for discrete-time systems.
*   Design state feedback controllers for discrete-time systems.
*   Design state observers for discrete-time systems.

## Course Outcomes Addressed:

*   **CO3: Model and analyse discrete-time system using state space approach.** (Knowledge Level: K3)
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.** (Knowledge Level: K3)

## Key Concepts and Definitions:

### 1. State-Space Representation of Discrete-Time Systems

The state-space representation is a method of describing the behavior of a dynamic system using a set of first-order differential (or difference) equations. For a discrete-time linear time-invariant (LTI) system, it is typically represented as:

**State Equation:**
$\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$

**Output Equation:**
$\mathbf{y}(k) = C\mathbf{x}(k) + D\mathbf{u}(k)$

Where:
*   $\mathbf{x}(k)$: The state vector at time instant $k$, representing the internal state of the system. It is an $n \times 1$ column vector, where $n$ is the order of the system.
*   $\mathbf{u}(k)$: The input vector at time instant $k$. It is an $m \times 1$ column vector, where $m$ is the number of inputs.
*   $\mathbf{y}(k)$: The output vector at time instant $k$. It is a $p \times 1$ column vector, where $p$ is the number of outputs.
*   $A$: The $n \times n$ state matrix, representing the internal dynamics of the system.
*   $B$: The $n \times m$ input matrix, relating the input to the state transitions.
*   $C$: The $p \times n$ output matrix, relating the state to the output.
*   $D$: The $p \times m$ feedforward matrix, relating the input directly to the output.

**Important Note:** The state-space representation provides a more complete description of the system's behavior than the pulse transfer function, as it explicitly accounts for the internal states.

### 2. Derivation of State-Space Representation from Difference Equations

Many discrete-time systems are initially described by higher-order linear constant-coefficient difference equations. These can be converted into state-space form.

**Example:** Consider a system described by the difference equation:
$y(k+2) + a_1 y(k+1) + a_0 y(k) = b_0 u(k)$

We can define the state variables as follows:
$x_1(k) = y(k)$
$x_2(k) = y(k+1)$

Now, we can derive the state equations:
$x_1(k+1) = y(k+1) = x_2(k)$

$x_2(k+1) = y(k+2) = -a_1 y(k+1) - a_0 y(k) + b_0 u(k)$
$x_2(k+1) = -a_1 x_2(k) - a_0 x_1(k) + b_0 u(k)$

In matrix form:
$\begin{bmatrix} x_1(k+1) \\ x_2(k+1) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -a_0 & -a_1 \end{bmatrix} \begin{bmatrix} x_1(k) \\ x_2(k) \end{bmatrix} + \begin{bmatrix} 0 \\ b_0 \end{bmatrix} u(k)$

So, $A = \begin{bmatrix} 0 & 1 \\ -a_0 & -a_1 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ b_0 \end{bmatrix}$.

If the output is $y(k) = x_1(k)$, then:
$y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1(k) \\ x_2(k) \end{bmatrix} + [0] u(k)$

So, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D = [0]$.

**Canonical Forms:** There are several canonical forms for state-space representation, such as the controllable canonical form and observable canonical form, which can simplify analysis and controller design. (Refer to Ogata, Chapter 6 for details on canonical forms).

### 3. State Transition Matrix

The state transition matrix describes how the state vector evolves over time from one instant to the next, given the system matrices $A$ and $B$ and the input $\mathbf{u}(k)$.

**Derivation:**
Starting from $\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$:
$\mathbf{x}(1) = A\mathbf{x}(0) + B\mathbf{u}(0)$
$\mathbf{x}(2) = A\mathbf{x}(1) + B\mathbf{u}(1) = A(A\mathbf{x}(0) + B\mathbf{u}(0)) + B\mathbf{u}(1) = A^2\mathbf{x}(0) + AB\mathbf{u}(0) + B\mathbf{u}(1)$
$\mathbf{x}(3) = A\mathbf{x}(2) + B\mathbf{u}(2) = A(A^2\mathbf{x}(0) + AB\mathbf{u}(0) + B\mathbf{u}(1)) + B\mathbf{u}(2) = A^3\mathbf{x}(0) + A^2B\mathbf{u}(0) + AB\mathbf{u}(1) + B\mathbf{u}(2)$

In general, the solution is:
$\mathbf{x}(k) = A^k\mathbf{x}(0) + \sum_{i=0}^{k-1} A^{k-1-i} B\mathbf{u}(i)$

The **state transition matrix**, denoted by $\Phi(k, k_0) = A^{k-k_0}$, describes the evolution of the state vector from time $k_0$ to time $k$ in the absence of input ($\mathbf{u}(k) = 0$).

**For zero input:**
$\mathbf{x}(k) = A^k\mathbf{x}(0) = \Phi(k, 0)\mathbf{x}(0)$

**For non-zero input:**
$\mathbf{x}(k) = \Phi(k, 0)\mathbf{x}(0) + \sum_{i=0}^{k-1} \Phi(k, i+1) B\mathbf{u}(i)$

**Calculating $A^k$:**
Calculating $A^k$ directly can be computationally intensive. Common methods include:
*   **Cayley-Hamilton Theorem:** This theorem states that every matrix satisfies its own characteristic equation. For a matrix $A$ with characteristic polynomial $det(sI - A) = s^n + a_{n-1}s^{n-1} + \dots + a_0$, we have $A^n + a_{n-1}A^{n-1} + \dots + a_0I = 0$. This can be used to express higher powers of $A$ in terms of lower powers. (Refer to Gopal, Chapter 3 for detailed methods).
*   **Eigenvalue Decomposition:** If $A$ is diagonalizable, $A = P\Lambda P^{-1}$, where $\Lambda$ is a diagonal matrix of eigenvalues and $P$ is the matrix of eigenvectors. Then $A^k = P\Lambda^k P^{-1}$, where $\Lambda^k$ is a diagonal matrix with the eigenvalues raised to the power of $k$.
*   **Laplace Transform (Z-transform for discrete systems):** The Z-transform of the state equation can be used to find the state transition matrix.

    Taking the Z-transform of $\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$:
    $z\mathbf{X}(z) - z\mathbf{x}(0) = A\mathbf{X}(z) + B\mathbf{U}(z)$
    $(zI - A)\mathbf{X}(z) = z\mathbf{x}(0) + B\mathbf{U}(z)$
    $\mathbf{X}(z) = (zI - A)^{-1} z\mathbf{x}(0) + (zI - A)^{-1} B\mathbf{U}(z)$

    The term $(zI - A)^{-1}z$ corresponds to the Z-transform of $A^k$. Specifically, the Z-transform of $A^k$ is $z(zI-A)^{-1}$.

**Example:**
Let $A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$.
The characteristic equation is $det(sI - A) = det \begin{bmatrix} s & -1 \\ 0.5 & s-1.5 \end{bmatrix} = s(s-1.5) - (-1)(0.5) = s^2 - 1.5s + 0.5 = 0$.
The eigenvalues are $s = 0.5$ and $s = 1$.

Using eigenvalue decomposition:
Find eigenvectors. For $s=0.5$: $(0.5I - A)\mathbf{v} = 0 \implies \begin{bmatrix} 0.5 & -1 \\ 0.5 & -1 \end{bmatrix}\mathbf{v} = 0 \implies v_1 = 2v_2$. Let $v_2=1$, then $v_1=2$. $\mathbf{v}_1 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.
For $s=1$: $(I - A)\mathbf{v} = 0 \implies \begin{bmatrix} 1 & -1 \\ 0.5 & 0.5 \end{bmatrix}\mathbf{v} = 0 \implies v_1 = v_2$. Let $v_2=1$, then $v_1=1$. $\mathbf{v}_2 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

$P = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$, $P^{-1} = \frac{1}{2-1}\begin{bmatrix} 1 & -1 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 1 & -1 \\ -1 & 2 \end{bmatrix}$.
$\Lambda = \begin{bmatrix} 0.5 & 0 \\ 0 & 1 \end{bmatrix}$.

$A^k = P\Lambda^k P^{-1} = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} (0.5)^k & 0 \\ 0 & 1^k \end{bmatrix} \begin{bmatrix} 1 & -1 \\ -1 & 2 \end{bmatrix}$
$A^k = \begin{bmatrix} 2(0.5)^k & 1 \\ (0.5)^k & 1 \end{bmatrix} \begin{bmatrix} 1 & -1 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 2(0.5)^k - 1 & -2(0.5)^k + 2 \\ (0.5)^k - 1 & -(0.5)^k + 2 \end{bmatrix}$

**Important Point:** The state transition matrix is crucial for understanding the unforced (zero input) behavior of the system. Its properties, particularly the eigenvalues of $A$, determine the stability of the system.

### 4. Stability of Discrete-Time State-Space Systems

A discrete-time LTI system described by $\mathbf{x}(k+1) = A\mathbf{x}(k)$ is asymptotically stable if and only if all eigenvalues of the matrix $A$ lie inside the unit circle in the z-plane (i.e., $|s_i| < 1$ for all eigenvalues $s_i$).

*   **Asymptotically Stable:** If all eigenvalues $|s_i| < 1$. The state will decay to zero as $k \to \infty$.
*   **Marginally Stable:** If all eigenvalues $|s_i| \le 1$, with at least one eigenvalue at $|s_i| = 1$ and all eigenvalues with $|s_i|=1$ are simple roots of the characteristic polynomial. The state remains bounded but does not necessarily decay to zero.
*   **Unstable:** If at least one eigenvalue $|s_i| > 1$, or if there are multiple roots on the unit circle. The state will grow unbounded as $k \to \infty$.

**Stability Analysis using Eigenvalues:**
The eigenvalues of $A$ are the roots of the characteristic equation $det(zI - A) = 0$.

**Example:**
For $A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, eigenvalues are $0.5$ and $1$.
Since $|0.5| < 1$ and $|1| = 1$, and the eigenvalue $1$ is a simple root, the system is marginally stable.

**Lyapunov Stability:** A more rigorous method for stability analysis, especially for nonlinear systems, is Lyapunov's direct method. For linear systems, it relates to the existence of a positive definite solution to certain matrix equations. (Refer to Ogata, Chapter 6 for a detailed treatment of Lyapunov stability).

### 5. Controllability

**Controllability** refers to the ability to steer the system from any initial state to any desired final state within a finite number of sampling periods by applying appropriate input signals.

For a system $\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$, the system is controllable if and only if the **controllability matrix** $\mathcal{C}$ has full rank $n$ (where $n$ is the order of the system).

The controllability matrix is defined as:
$\mathcal{C} = \begin{bmatrix} B & AB & A^2B & \dots & A^{n-1}B \end{bmatrix}$

The system is controllable if $rank(\mathcal{C}) = n$.

**Important Note:** If the system is controllable, we can choose a state feedback control law $\mathbf{u}(k) = -K\mathbf{x}(k)$, where $K$ is an $m \times n$ gain matrix, to place the closed-loop poles (eigenvalues of $A-BK$) arbitrarily.

**Example:**
$A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$. $n=2$.

$AB = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.5 \end{bmatrix}$.

$\mathcal{C} = \begin{bmatrix} B & AB \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 1 & 1.5 \end{bmatrix}$.

$det(\mathcal{C}) = 0 \times 1.5 - 1 \times 1 = -1$.
Since $det(\mathcal{C}) \neq 0$, the matrix $\mathcal{C}$ has full rank ($rank(\mathcal{C}) = 2 = n$).
Therefore, the system is controllable.

**Controllability Canonical Form:** A system can be transformed into its controllability canonical form, which simplifies the analysis of controllability. (Refer to Ogata, Chapter 6).

### 6. Observability

**Observability** refers to the ability to determine the complete state vector of the system at any time instant by observing the output signals and knowing the input signals.

For a system $\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$ and $\mathbf{y}(k) = C\mathbf{x}(k) + D\mathbf{u}(k)$, the system is observable if and only if the **observability matrix** $\mathcal{O}$ has full rank $n$.

The observability matrix is defined as:
$\mathcal{O} = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix}$

The system is observable if $rank(\mathcal{O}) = n$.

**Important Note:** If the system is observable, we can design a state observer (estimator) that reconstructs the state vector from the system's output and input.

**Example:**
$A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$. $n=2$.

$CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$.

$\mathcal{O} = \begin{bmatrix} C \\ CA \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.

$det(\mathcal{O}) = 1 \times 1 - 0 \times 0 = 1$.
Since $det(\mathcal{O}) \neq 0$, the matrix $\mathcal{O}$ has full rank ($rank(\mathcal{O}) = 2 = n$).
Therefore, the system is observable.

**Observability Canonical Form:** Similar to controllability, a system can be transformed into its observability canonical form. (Refer to Ogata, Chapter 6).

**Duality Principle:** There is a duality between controllability and observability. If a system $(A, B, C)$ is controllable, then the system $(A^T, C^T, B^T)$ is observable, and vice versa.

### 7. State Feedback Control

**State feedback** is a control strategy where the control signal $\mathbf{u}(k)$ is a linear combination of the system's state variables:
$\mathbf{u}(k) = -\mathbf{K}\mathbf{x}(k)$

Where $\mathbf{K}$ is the $m \times n$ state feedback gain matrix.

Substituting this into the state equation:
$\mathbf{x}(k+1) = A\mathbf{x}(k) + B(-\mathbf{K}\mathbf{x}(k))$
$\mathbf{x}(k+1) = (A - B\mathbf{K})\mathbf{x}(k)$

The matrix $(A - B\mathbf{K})$ is the closed-loop state matrix. The eigenvalues of $(A - B\mathbf{K})$ determine the stability and transient response of the closed-loop system.

**Pole Placement:** If the system is controllable, the state feedback gain matrix $\mathbf{K}$ can be designed to place the eigenvalues of $(A - B\mathbf{K})$ at any desired locations in the z-plane (provided they are a valid set of characteristic roots for a discrete-time system).

**Methods for Designing K:**
*   **Ackermann's Formula:** A direct formula to compute $\mathbf{K}$ for single-input systems to achieve desired closed-loop poles. For a single-input system ($m=1$), let the desired characteristic polynomial be $P_d(z) = (z - \lambda_1)(z - \lambda_2)\dots(z - \lambda_n)$. The desired characteristic polynomial can be written as $P_d(z) = z^n + p_{n-1}z^{n-1} + \dots + p_0$.
    Then,
    $K = \begin{bmatrix} 0 & 0 & \dots & 1 \end{bmatrix} \mathcal{C}^{-1} P_d(A)$

    Where $P_d(A) = A^n + p_{n-1}A^{n-1} + \dots + p_0I$. (Refer to Ogata, Chapter 6 for detailed steps and derivation).

*   **Controllable Canonical Form:** Transforming the system to its controllable canonical form simplifies the calculation of $\mathbf{K}$.

**Example (Single Input):**
Consider the controllable system with $A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
Let the desired closed-loop poles be at $z = 0.2$ and $z = 0.3$.
The desired characteristic polynomial is $P_d(z) = (z - 0.2)(z - 0.3) = z^2 - 0.5z + 0.06$.
So, $p_1 = -0.5$ and $p_0 = 0.06$.

From the previous controllability calculation, $\mathcal{C} = \begin{bmatrix} 0 & 1 \\ 1 & 1.5 \end{bmatrix}$ and $\mathcal{C}^{-1} = \begin{bmatrix} -1.5 & 1 \\ 1 & 0 \end{bmatrix}$.

$P_d(A) = A^2 - 0.5A + 0.06I$.
$A^2 = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} = \begin{bmatrix} -0.5 & 1.5 \\ -0.75 & 1.75 \end{bmatrix}$.

$P_d(A) = \begin{bmatrix} -0.5 & 1.5 \\ -0.75 & 1.75 \end{bmatrix} - 0.5 \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} + 0.06 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$P_d(A) = \begin{bmatrix} -0.5 & 1.5 \\ -0.75 & 1.75 \end{bmatrix} - \begin{bmatrix} 0 & 0.5 \\ -0.25 & 0.75 \end{bmatrix} + \begin{bmatrix} 0.06 & 0 \\ 0 & 0.06 \end{bmatrix}$
$P_d(A) = \begin{bmatrix} -0.44 & 1 \\ -0.5 & 1.06 \end{bmatrix}$.

Now, apply Ackermann's formula:
$K = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathcal{C}^{-1} P_d(A)$ (Note: For n=2, $K$ is a 1x2 matrix, so $\begin{bmatrix} 0 & 1 \end{bmatrix}$ is used)
$K = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} -1.5 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} -0.44 & 1 \\ -0.5 & 1.06 \end{bmatrix}$
$K = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} -0.44 & 1 \\ -0.5 & 1.06 \end{bmatrix} = \begin{bmatrix} -0.44 & 1 \end{bmatrix}$.

So, the state feedback control law is $\mathbf{u}(k) = -K\mathbf{x}(k) = -[-0.44 \quad 1]\mathbf{x}(k) = 0.44x_1(k) - x_2(k)$.

**Important Point:** State feedback control allows for reshaping the system's dynamic response by moving the closed-loop poles to desired locations, thereby improving stability and performance.

### 8. State Observers (Estimators)

In many practical scenarios, the entire state vector $\mathbf{x}(k)$ is not directly measurable. A **state observer** is a dynamic system that estimates the state vector based on the system's input $\mathbf{u}(k)$ and output $\mathbf{y}(k)$.

The observer state equation is typically designed to mimic the system's state equation but with a correction term based on the difference between the actual output $\mathbf{y}(k)$ and the observer's estimated output $\hat{\mathbf{y}}(k)$.

**Observer State Equation:**
$\hat{\mathbf{x}}(k+1) = A\hat{\mathbf{x}}(k) + B\mathbf{u}(k) + L(\mathbf{y}(k) - \hat{\mathbf{y}}(k))$

Where:
*   $\hat{\mathbf{x}}(k)$: The estimated state vector at time instant $k$.
*   $L$: The $n \times p$ observer gain matrix.
*   $\mathbf{y}(k) = C\mathbf{x}(k) + D\mathbf{u}(k)$: The actual output.
*   $\hat{\mathbf{y}}(k) = C\hat{\mathbf{x}}(k) + D\mathbf{u}(k)$: The observer's estimated output.

Let $\mathbf{e}(k) = \mathbf{x}(k) - \hat{\mathbf{x}}(k)$ be the observer error.
$\mathbf{e}(k+1) = \mathbf{x}(k+1) - \hat{\mathbf{x}}(k+1)$
$\mathbf{e}(k+1) = (A\mathbf{x}(k) + B\mathbf{u}(k)) - (A\hat{\mathbf{x}}(k) + B\mathbf{u}(k) + L(\mathbf{y}(k) - \hat{\mathbf{y}}(k)))$
$\mathbf{e}(k+1) = A(\mathbf{x}(k) - \hat{\mathbf{x}}(k)) - L(C\mathbf{x}(k) + D\mathbf{u}(k) - (C\hat{\mathbf{x}}(k) + D\mathbf{u}(k)))$
$\mathbf{e}(k+1) = A\mathbf{e}(k) - LC(\mathbf{x}(k) - \hat{\mathbf{x}}(k))$
$\mathbf{e}(k+1) = (A - LC)\mathbf{e}(k)$

The observer error dynamics are governed by the matrix $(A - LC)$. For the observer to be effective, the observer error $\mathbf{e}(k)$ must converge to zero as $k \to \infty$. This means the eigenvalues of $(A - LC)$ must lie inside the unit circle.

**Observer Design:**
The observer gain matrix $L$ can be designed to place the eigenvalues of $(A - LC)$ at desired locations, typically much faster than the closed-loop system poles from state feedback.

**Methods for Designing L:**
*   **Ackermann's Formula for Observers:** Similar to state feedback, Ackermann's formula can be used for single-output systems ($p=1$). If the desired observer poles are $\mu_1, \mu_2, \dots, \mu_n$, forming a desired characteristic polynomial $P_{obs}(z) = z^n + q_{n-1}z^{n-1} + \dots + q_0$, then:
    $L = [P_{obs}(A) \mathcal{O}^*] \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix}$

    Where $\mathcal{O}^*$ is the pseudoinverse of the observability matrix $\mathcal{O}$.
    For a single-output system, $\mathcal{O}^* = (\mathcal{O}^T \mathcal{O})^{-1} \mathcal{O}^T$. (Refer to Ogata, Chapter 6 for a more practical form of Ackermann's formula for observers). A more common form for single output systems is:
    $L = \begin{bmatrix} q_{n-1} & q_{n-2} & \dots & q_0 \end{bmatrix}^T$ when the system is in the observable canonical form.
    Alternatively, using the duality principle: if the system $(A, C)$ is observable, then the system $(A^T, C^T)$ is controllable. We can design a state feedback gain matrix $K_{obs}$ for the dual system such that the eigenvalues of $(A^T - C^T K_{obs})$ are at the desired observer pole locations. Then, $L = K_{obs}^T$.

*   **Duality with Pole Placement:** Design the observer gain $L$ by considering the dual system $(A^T, C^T)$. If the desired observer poles are $\mu_1, \dots, \mu_n$, we can use Ackermann's formula or pole placement techniques on the dual system $(A^T, C^T)$ to find a gain $K_{dual}$ such that the eigenvalues of $(A^T - C^T K_{dual})$ are at the desired locations. Then, $L = K_{dual}^T$.

**Example (Single Output):**
Consider the observable system with $A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
Let the desired observer poles be at $z = 0.2$ and $z = 0.3$. These are faster than the system poles.
Desired observer characteristic polynomial: $P_{obs}(z) = (z - 0.2)(z - 0.3) = z^2 - 0.5z + 0.06$.
So, $q_1 = -0.5$ and $q_0 = 0.06$.

Using the duality principle:
Dual system matrices: $A^T = \begin{bmatrix} 0 & -0.5 \\ 1 & 1.5 \end{bmatrix}$, $C^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
We need to find $K_{dual}$ such that the eigenvalues of $(A^T - C^T K_{dual})$ are $0.2$ and $0.3$.
The desired characteristic polynomial for the dual system is $z^2 - 0.5z + 0.06 = 0$.
The controllable canonical form for $(A^T, C^T)$ would lead to $K_{dual} = \begin{bmatrix} -0.5 & 1 \end{bmatrix}$.

Then, $L = K_{dual}^T = \begin{bmatrix} -0.5 \\ 1 \end{bmatrix}$.

The observer equation is:
$\hat{\mathbf{x}}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} \hat{\mathbf{x}}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} -0.5 \\ 1 \end{bmatrix} (y(k) - \hat{y}(k))$
$\hat{\mathbf{x}}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} \hat{\mathbf{x}}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} -0.5 \\ 1 \end{bmatrix} (y(k) - \begin{bmatrix} 1 & 0 \end{bmatrix} \hat{\mathbf{x}}(k))$

**Important Point:** State observers are essential for implementing state feedback control when not all states are directly measurable. The observer's speed of convergence (determined by its poles) impacts the overall system performance.

### 9. Combined State Feedback and Observer (Full-Order Observer-Based Control)

In practice, state feedback control is often implemented using an observer to estimate the states. The control law becomes:
$\mathbf{u}(k) = -K\hat{\mathbf{x}}(k)$

The overall closed-loop system can be analyzed by combining the system dynamics, the observer dynamics, and the control law. This results in a higher-order system, and its stability must be analyzed. The separation principle states that if the observer poles are sufficiently faster than the closed-loop controller poles, the overall system can be considered stable if both the controller and observer are individually stable.

## Practice Questions and Exercises:

**Question 1:**
Consider a discrete-time system described by the difference equation:
$y(k+2) - 0.3y(k+1) + 0.02y(k) = 0.5u(k)$
where $y(k)$ is the output and $u(k)$ is the input.

a) Represent this system in state-space form, choosing appropriate state variables.
b) Determine the state transition matrix $A^k$ if $A = \begin{bmatrix} 0 & 1 \\ 0.02 & 0.3 \end{bmatrix}$. (Hint: Use the characteristic equation and eigenvalue decomposition).

**Solution 1:**
a) Let $x_1(k) = y(k)$ and $x_2(k) = y(k+1)$.
$x_1(k+1) = y(k+1) = x_2(k)$
$x_2(k+1) = y(k+2) = 0.3y(k+1) - 0.02y(k) + 0.5u(k)$
$x_2(k+1) = 0.3x_2(k) - 0.02x_1(k) + 0.5u(k)$

State-space representation:
$\mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.02 & 0.3 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 0.5 \end{bmatrix} u(k)$
$\mathbf{y}(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(k)$

$A = \begin{bmatrix} 0 & 1 \\ -0.02 & 0.3 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 0.5 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.

b) Characteristic equation: $det(zI - A) = det \begin{bmatrix} z & -1 \\ 0.02 & z-0.3 \end{bmatrix} = z(z-0.3) - (-1)(0.02) = z^2 - 0.3z + 0.02 = 0$.
Eigenvalues: $(z-0.1)(z-0.2) = 0 \implies z_1 = 0.1, z_2 = 0.2$.

Eigenvectors:
For $z_1 = 0.1$: $(0.1I - A)\mathbf{v}_1 = 0 \implies \begin{bmatrix} 0.1 & -1 \\ 0.02 & 0.1-0.3 \end{bmatrix}\mathbf{v}_1 = \begin{bmatrix} 0.1 & -1 \\ 0.02 & -0.2 \end{bmatrix}\mathbf{v}_1 = 0$.
$0.1v_{11} - v_{12} = 0 \implies v_{12} = 0.1v_{11}$. Let $v_{11}=10$, then $v_{12}=1$. $\mathbf{v}_1 = \begin{bmatrix} 10 \\ 1 \end{bmatrix}$.

For $z_2 = 0.2$: $(0.2I - A)\mathbf{v}_2 = 0 \implies \begin{bmatrix} 0.2 & -1 \\ 0.02 & 0.2-0.3 \end{bmatrix}\mathbf{v}_2 = \begin{bmatrix} 0.2 & -1 \\ 0.02 & -0.1 \end{bmatrix}\mathbf{v}_2 = 0$.
$0.2v_{21} - v_{22} = 0 \implies v_{22} = 0.2v_{21}$. Let $v_{21}=5$, then $v_{22}=1$. $\mathbf{v}_2 = \begin{bmatrix} 5 \\ 1 \end{bmatrix}$.

$P = \begin{bmatrix} 10 & 5 \\ 1 & 1 \end{bmatrix}$, $P^{-1} = \frac{1}{10-5}\begin{bmatrix} 1 & -5 \\ -1 & 10 \end{bmatrix} = \begin{bmatrix} 0.2 & -1 \\ -0.2 & 2 \end{bmatrix}$.
$\Lambda = \begin{bmatrix} 0.1 & 0 \\ 0 & 0.2 \end{bmatrix}$.

$A^k = P\Lambda^k P^{-1} = \begin{bmatrix} 10 & 5 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} (0.1)^k & 0 \\ 0 & (0.2)^k \end{bmatrix} \begin{bmatrix} 0.2 & -1 \\ -0.2 & 2 \end{bmatrix}$
$A^k = \begin{bmatrix} 10(0.1)^k & 5(0.2)^k \\ (0.1)^k & (0.2)^k \end{bmatrix} \begin{bmatrix} 0.2 & -1 \\ -0.2 & 2 \end{bmatrix}$
$A^k = \begin{bmatrix} 2(0.1)^k - (0.2)^k & -10(0.1)^k + 10(0.2)^k \\ 0.2(0.1)^k - 0.2(0.2)^k & -(0.1)^k + 2(0.2)^k \end{bmatrix}$

**Question 2:**
For the system in Question 1, determine if it is controllable and observable.

**Solution 2:**
Controllability:
$\mathcal{C} = \begin{bmatrix} B & AB \end{bmatrix}$
$AB = \begin{bmatrix} 0 & 1 \\ -0.02 & 0.3 \end{bmatrix} \begin{bmatrix} 0 \\ 0.5 \end{bmatrix} = \begin{bmatrix} 0.5 \\ 0.15 \end{bmatrix}$.
$\mathcal{C} = \begin{bmatrix} 0 & 0.5 \\ 0.5 & 0.15 \end{bmatrix}$.
$det(\mathcal{C}) = 0(0.15) - 0.5(0.5) = -0.25 \neq 0$.
Since $det(\mathcal{C}) \neq 0$, $rank(\mathcal{C}) = 2$, so the system is controllable.

Observability:
$\mathcal{O} = \begin{bmatrix} C \\ CA \end{bmatrix}$
$CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.02 & 0.3 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$.
$\mathcal{O} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.
$det(\mathcal{O}) = 1(1) - 0(0) = 1 \neq 0$.
Since $det(\mathcal{O}) \neq 0$, $rank(\mathcal{O}) = 2$, so the system is observable.

**Question 3:**
For the controllable system with $A = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix}$ and $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, design a state feedback gain matrix $K$ to place the closed-loop poles at $z = 0.2$ and $z = 0.3$.

**Solution 3:**
Desired characteristic polynomial: $P_d(z) = (z-0.2)(z-0.3) = z^2 - 0.5z + 0.06$.
So, $p_1 = -0.5$ and $p_0 = 0.06$.

Controllability matrix:
$AB = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0.5 \end{bmatrix}$.
$\mathcal{C} = \begin{bmatrix} B & AB \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 1 & 0.5 \end{bmatrix}$.
$\mathcal{C}^{-1} = \frac{1}{0-1}\begin{bmatrix} 0.5 & -1 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} -0.5 & 1 \\ 1 & 0 \end{bmatrix}$.

$P_d(A) = A^2 - 0.5A + 0.06I$.
$A^2 = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix} = \begin{bmatrix} -0.1 & 0.5 \\ -0.05 & 0.45 \end{bmatrix}$.

$P_d(A) = \begin{bmatrix} -0.1 & 0.5 \\ -0.05 & 0.45 \end{bmatrix} - 0.5 \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix} + 0.06 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$P_d(A) = \begin{bmatrix} -0.1 & 0.5 \\ -0.05 & 0.45 \end{bmatrix} - \begin{bmatrix} 0 & 0.5 \\ -0.05 & 0.25 \end{bmatrix} + \begin{bmatrix} 0.06 & 0 \\ 0 & 0.06 \end{bmatrix}$
$P_d(A) = \begin{bmatrix} -0.04 & 0 \\ 0 & 0.26 \end{bmatrix}$.

Using Ackermann's formula (for single input $m=1$, $n=2$):
$K = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathcal{C}^{-1} P_d(A)$
$K = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} -0.5 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} -0.04 & 0 \\ 0 & 0.26 \end{bmatrix}$
$K = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} -0.04 & 0 \\ 0 & 0.26 \end{bmatrix} = \begin{bmatrix} -0.04 & 0 \end{bmatrix}$.

State feedback control law: $\mathbf{u}(k) = -K\mathbf{x}(k) = -[-0.04 \quad 0]\mathbf{x}(k) = 0.04x_1(k)$.

**Question 4:**
For the observable system with $A = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix}$ and $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, design an observer gain matrix $L$ to place the observer poles at $z = 0.1$ and $z = 0.1$ (critically damped convergence).

**Solution 4:**
Desired observer characteristic polynomial: $P_{obs}(z) = (z-0.1)(z-0.1) = z^2 - 0.2z + 0.01$.
So, $q_1 = -0.2$ and $q_0 = 0.01$.

Using the duality principle:
Dual system matrices: $A^T = \begin{bmatrix} 0 & -0.1 \\ 1 & 0.5 \end{bmatrix}$, $C^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
We need to find $K_{dual}$ such that the eigenvalues of $(A^T - C^T K_{dual})$ are $0.1$ and $0.1$.
The desired characteristic polynomial for the dual system is $z^2 - 0.2z + 0.01 = 0$.

To simplify finding $K_{dual}$, we can transform $(A^T, C^T)$ to the controllable canonical form. The controllable canonical form for $(A^T, C^T)$ has:
$A_{T} = \begin{bmatrix} 0 & 1 \\ -q_0 & -q_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.01 & 0.2 \end{bmatrix}$.
$B_{T} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

The gain $K_{dual}$ for this canonical form is $K_{dual} = \begin{bmatrix} q_0 & q_1 \end{bmatrix} = \begin{bmatrix} 0.01 & 0.2 \end{bmatrix}$.

Then, $L = K_{dual}^T = \begin{bmatrix} 0.01 \\ 0.2 \end{bmatrix}$.

The observer equation is:
$\hat{\mathbf{x}}(k+1) = A\hat{\mathbf{x}}(k) + B u(k) + L(y(k) - C\hat{\mathbf{x}}(k))$
$\hat{\mathbf{x}}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.5 \end{bmatrix} \hat{\mathbf{x}}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} 0.01 \\ 0.2 \end{bmatrix} (y(k) - \begin{bmatrix} 1 & 0 \end{bmatrix} \hat{\mathbf{x}}(k))$

## Important Points to Remember:

*   The state-space representation provides a more comprehensive model of discrete-time systems, including internal states.
*   The state transition matrix $A^k$ governs the unforced response of the system.
*   System stability is determined by the location of the eigenvalues of the state matrix $A$ relative to the unit circle in the z-plane.
*   Controllability ensures that the system's states can be manipulated by the input.
*   Observability ensures that the system's states can be inferred from its outputs and inputs.
*   State feedback control allows for pole placement, altering the system's dynamics for improved performance.
*   State observers are crucial for estimating unmeasurable states, enabling the implementation of state feedback in real-world applications.
*   The duality principle is a powerful tool for relating controllability and observability and simplifying observer design.
*   The separation principle is important for analyzing the stability of observer-based control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References:

*   **Digital control system analysis and design by Philips and Nagle (Prentice Hall, 1984):** Provides foundational concepts and analysis techniques for discrete-time control systems, including state-space methods.
*   **Discrete Time Control Systems by K. Ogata (PHI Learning Private Limited, New Delhi, 2009.):** A comprehensive text covering state-space representation, stability, controllability, observability, pole placement, and observers in detail, with numerous examples. This is a primary reference for this topic.
*   **Digital control and State Variable methods by M. Gopal (Tata McGraw –Hill, 1997):** Offers a strong emphasis on state-variable methods, including their application in control system design and analysis.

This module provides the essential tools for understanding and designing advanced digital control systems using the state-space approach. Mastering these concepts is fundamental for tackling more complex control problems.