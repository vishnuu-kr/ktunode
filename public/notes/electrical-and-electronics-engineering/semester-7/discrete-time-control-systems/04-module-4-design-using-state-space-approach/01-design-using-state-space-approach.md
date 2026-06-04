---
title: "Design using State Space approach:"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 4: Design using State Space approach:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368df"
status: "completed"
scrapedAt: "2026-05-23T16:36:31.020Z"
---
# DISCRETE TIME CONTROL SYSTEMS - Module 4: Design using State Space Approach

## Introduction to State Space Design in Discrete-Time Systems

The state-space approach provides a powerful framework for analyzing and designing control systems, particularly for multi-input, multi-output (MIMO) systems and systems with internal dynamics. In discrete-time control, the state-space representation describes the system's behavior at discrete time instants. This module focuses on designing controllers using this representation to achieve desired system performance.

**Course Outcomes Covered:**
*   **CO3:** Model and analyse discrete-time system using state space approach. (Knowledge Level: K3)
*   **CO4:** Design discrete-time state feedback controllers and observers for a linear system. (Knowledge Level: K3)

**Learning Outcomes Addressed:**
*   Understanding the state-space representation of discrete-time systems.
*   Concept of controllability and observability in discrete-time systems.
*   Design of state feedback controllers for pole placement.
*   Design of observers (state estimators) for discrete-time systems.
*   Combined design of controllers and observers (e.g., using separation principle).

---

### 1. State-Space Representation of Discrete-Time Systems

**1.1 Definition:**
A discrete-time linear time-invariant (LTI) system can be represented in state-space form as:

*   **State Equation:** $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)$
*   **Output Equation:** $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k) + \mathbf{D}\mathbf{u}(k)$

Where:
*   $\mathbf{x}(k)$: The state vector at time $k$. It is an $n \times 1$ column vector.
*   $\mathbf{u}(k)$: The input vector at time $k$. It is an $m \times 1$ column vector.
*   $\mathbf{y}(k)$: The output vector at time $k$. It is a $p \times 1$ column vector.
*   $\mathbf{A}$: The state transition matrix ($n \times n$).
*   $\mathbf{B}$: The input matrix ($n \times m$).
*   $\mathbf{C}$: The output matrix ($p \times n$).
*   $\mathbf{D}$: The feedforward matrix ($p \times m$).

**1.2 Conversion from Transfer Function to State-Space:**

*   **Canonical Forms:** Several canonical forms exist for state-space representation from a transfer function. The **control canonical form** and **observer canonical form** are commonly used.

    *   **Control Canonical Form (for controllable systems):**
        Consider a single-input, single-output (SISO) system with transfer function:
        $G(z) = \frac{Y(z)}{U(z)} = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$

        The state-space representation in control canonical form is:
        $\mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_n & -a_{n-1} & -a_{n-2} & \dots & -a_1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} u(k)$

        $\mathbf{y}(k) = \begin{bmatrix} b_{n-1} & b_{n-2} & \dots & b_1 & b_0 \end{bmatrix} \mathbf{x}(k)$

        *(Refer to Ogata, Chapter 3, for detailed derivation and other canonical forms.)*

*   **Example 1:**
    Obtain the state-space representation in control canonical form for the system with transfer function:
    $G(z) = \frac{4z + 3}{z^2 - 0.5z + 0.2}$

    First, rewrite in terms of $z^{-1}$:
    $G(z) = \frac{4z^{-1} + 3z^{-2}}{1 - 0.5z^{-1} + 0.2z^{-2}}$

    Here, $a_1 = -0.5$, $a_2 = 0.2$, $b_0 = 3$, $b_1 = 4$. (Note: In control canonical form for transfer functions starting with a numerator coefficient of $z^{n-1}$, the $b_i$ coefficients are usually shifted. A common convention is $G(z) = \frac{b_{n-1} + b_{n-2}z^{-1} + \dots + b_0z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$. With this convention, $b_1=4$, $b_0=3$. If the numerator is $b_0 + b_1 z^{-1} + ...$, then $b_0=4, b_1=3$. Let's assume the latter for this example and stick to the standard structure of the matrix. *Correction: The standard form in Ogata is $Y(z)/U(z) = (b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}) / (1 + a_1z^{-1} + \dots + a_nz^{-n})$. So, $a_1=-0.5, a_2=0.2$ and $b_0=3, b_1=4$. The state vector is $\mathbf{x} = [x_1, x_2]^T$. The matrix coefficients for the output are typically $y(k) = [b_{n-1} \dots b_1 b_0] \mathbf{x}(k)$. In our case, $n=2$, so $y(k) = [b_1 \ b_0] \mathbf{x}(k) = [4 \ 3] \mathbf{x}(k)$. However, the standard control canonical form uses $b_0$ for the highest power of $z$ in the numerator after division by $z^{n-1}$. Let's re-evaluate based on the structure of the matrices given for control canonical form.)

    A common convention for control canonical form for $G(z) = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$:
    $\mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 \\ -a_2 & -a_1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)$
    $\mathbf{y}(k) = \begin{bmatrix} b_1 & b_0 \end{bmatrix} \mathbf{x}(k)$

    So, for $G(z) = \frac{3 + 4z^{-1}}{1 - 0.5z^{-1} + 0.2z^{-2}}$:
    $a_1 = -0.5, a_2 = 0.2$
    $b_0 = 3, b_1 = 4$

    $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 4 & 3 \end{bmatrix}$, $\mathbf{D} = [0]$

    *(Important: Always confirm the convention used by the textbook or source for canonical forms as coefficient placements can vary.)*

**1.3 Discretization of Continuous-Time Systems:**
If a continuous-time system is described by $\dot{\mathbf{x}}_c(t) = \mathbf{A}_c \mathbf{x}_c(t) + \mathbf{B}_c \mathbf{u}_c(t)$ and $\mathbf{y}_c(t) = \mathbf{C}_c \mathbf{x}_c(t) + \mathbf{D}_c \mathbf{u}_c(t)$, it can be discretized using zero-order hold (ZOH) on the input.
For a sampling period $T$:
*   $\mathbf{A} = e^{\mathbf{A}_c T}$
*   $\mathbf{B} = \int_{0}^{T} e^{\mathbf{A}_c \tau} \mathbf{B}_c d\tau$

    *(Refer to Kuo, Chapter 6 or Franklin, Powell, Workman, Chapter 2 for detailed methods of discretization, including series expansion for A and integral calculation for B.)*

---

### 2. Controllability and Observability

These concepts are fundamental to state-space design as they determine whether the system's states can be influenced by the input and whether they can be inferred from the output, respectively.

**2.1 Controllability:**
A discrete-time system is **completely state controllable** if it is possible to transfer the system from any initial state $\mathbf{x}(0)$ to any final state $\mathbf{x}(N)$ in $N$ sampling periods, using a suitable control input $\mathbf{u}(k)$.

*   **Controllability Matrix:**
    For a system with state-space representation $(\mathbf{A}, \mathbf{B})$, the controllability matrix is given by:
    $\mathbf{M}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} & \mathbf{A}^2\mathbf{B} & \dots & \mathbf{A}^{n-1}\mathbf{B} \end{bmatrix}$
    where $n$ is the order of the system.

*   **Controllability Condition:**
    The system is completely state controllable if and only if the rank of the controllability matrix $\mathbf{M}_c$ is equal to $n$ (the order of the system).
    $rank(\mathbf{M}_c) = n$

    *(Refer to Ogata, Chapter 3, for proofs and implications of controllability.)*

*   **Example 2:**
    Determine if the system with $\mathbf{A} = \begin{bmatrix} 0.5 & 1 \\ 0 & 0.2 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ is controllable.
    $n=2$.
    $\mathbf{M}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix}$
    $\mathbf{A}\mathbf{B} = \begin{bmatrix} 0.5 & 1 \\ 0 & 0.2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0.5 \\ 0 \end{bmatrix}$
    $\mathbf{M}_c = \begin{bmatrix} 1 & 0.5 \\ 0 & 0 \end{bmatrix}$
    $rank(\mathbf{M}_c) = 1$.
    Since $rank(\mathbf{M}_c) = 1 < n=2$, the system is **not controllable**.

**2.2 Observability:**
A discrete-time system is **completely observable** if, given the output $\{\mathbf{y}(0), \mathbf{y}(1), \dots, \mathbf{y}(n-1)\}$ and the input $\{\mathbf{u}(0), \mathbf{u}(1), \dots, \mathbf{u}(n-1)\}$, the initial state $\mathbf{x}(0)$ can be uniquely determined.

*   **Observability Matrix:**
    For a system with state-space representation $(\mathbf{A}, \mathbf{C})$, the observability matrix is given by:
    $\mathbf{M}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \\ \mathbf{C}\mathbf{A}^2 \\ \vdots \\ \mathbf{C}\mathbf{A}^{n-1} \end{bmatrix}$

*   **Observability Condition:**
    The system is completely observable if and only if the rank of the observability matrix $\mathbf{M}_o$ is equal to $n$.
    $rank(\mathbf{M}_o) = n$

    *(Note: For SISO systems, observability of $(\mathbf{A}, \mathbf{C})$ is equivalent to controllability of $(\mathbf{A}^T, \mathbf{C}^T)$.)*

*   **Example 3:**
    Determine if the system with $\mathbf{A} = \begin{bmatrix} 0.5 & 1 \\ 0 & 0.2 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$ is observable.
    $n=2$.
    $\mathbf{M}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \end{bmatrix}$
    $\mathbf{C}\mathbf{A} = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0.5 & 1 \\ 0 & 0.2 \end{bmatrix} = \begin{bmatrix} 0.5 & 1 \end{bmatrix}$
    $\mathbf{M}_o = \begin{bmatrix} 1 & 0 \\ 0.5 & 1 \end{bmatrix}$
    The determinant of $\mathbf{M}_o$ is $(1)(1) - (0)(0.5) = 1 \neq 0$.
    Since $rank(\mathbf{M}_o) = 2 = n$, the system is **observable**.

**Important Point:**
Controllability and observability are invariant under state transformation. However, they can change if the sampling period $T$ is changed.

---

### 3. Design of State Feedback Controllers (Pole Placement)

The goal of state feedback is to manipulate the system's poles (eigenvalues of $\mathbf{A}$) to achieve desired transient and steady-state responses. This is done by designing a control law of the form $\mathbf{u}(k) = -\mathbf{K}\mathbf{x}(k)$, where $\mathbf{K}$ is the state feedback gain matrix.

**3.1 State Feedback Control Law:**
$\mathbf{u}(k) = -\mathbf{K}\mathbf{x}(k)$

Substituting this into the state equation:
$\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}(-\mathbf{K}\mathbf{x}(k))$
$\mathbf{x}(k+1) = (\mathbf{A} - \mathbf{B}\mathbf{K})\mathbf{x}(k)$

The closed-loop system matrix is $(\mathbf{A} - \mathbf{B}\mathbf{K})$. The eigenvalues of this matrix determine the system's behavior. The design objective is to choose $\mathbf{K}$ such that the eigenvalues of $(\mathbf{A} - \mathbf{B}\mathbf{K})$ are at desired locations.

**3.2 Pole Placement:**
If the system $(\mathbf{A}, \mathbf{B})$ is controllable, then it is possible to place the closed-loop poles at any desired set of locations by choosing an appropriate gain matrix $\mathbf{K}$.

*   **Design Methods:**

    1.  **Ackermann's Formula (for SISO systems):**
        For a single-input system, Ackermann's formula provides a direct way to calculate $\mathbf{K}$.
        If the desired characteristic polynomial is $p_{des}(z) = z^n + \alpha_1z^{n-1} + \dots + \alpha_n$, then:
        $\mathbf{K} = \begin{bmatrix} 0 & 0 & \dots & 1 \end{bmatrix} \mathbf{M}_c^{-1} p_{des}(\mathbf{A})$
        where $p_{des}(\mathbf{A}) = \mathbf{A}^n + \alpha_1\mathbf{A}^{n-1} + \dots + \alpha_n\mathbf{I}$.
        Note that $\mathbf{M}_c^{-1}$ is $\begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} & \dots & \mathbf{A}^{n-1}\mathbf{B} \end{bmatrix}^{-1}$. If the system is in control canonical form, $\mathbf{K} = \begin{bmatrix} k_1 & k_2 & \dots & k_n \end{bmatrix}$ where $p_{des}(z) = z^n + k_n z^{n-1} + \dots + k_1$. The gain vector is often defined as $\mathbf{u} = -\mathbf{k}\mathbf{x}^T$ or $\mathbf{u} = -\mathbf{K}\mathbf{x}$. If the control canonical form is used where the last row of $\mathbf{A}$ is $[-a_n \ -a_{n-1} \dots -a_1]$ and $\mathbf{B}$ is a column of zeros except for a 1 in the last row, then the desired characteristic polynomial $p_{des}(z) = z^n + p_1z^{n-1} + \dots + p_n$ corresponds to the coefficients $a_i$ in the new system: $z^n + a_1z^{n-1} + \dots + a_n = 0$. The state feedback gain $\mathbf{K}$ will be $\begin{bmatrix} p_n & p_{n-1} & \dots & p_1 \end{bmatrix}$.
        Let's re-state Ackermann's for standard control canonical form:
        If $\mathbf{A}$ and $\mathbf{B}$ are in control canonical form, $\mathbf{B} = [0, 0, \dots, 1]^T$, and the desired characteristic polynomial is $p_{des}(z) = z^n + \alpha_1z^{n-1} + \dots + \alpha_n$, then the gain vector $\mathbf{K} = \begin{bmatrix} k_1 & k_2 & \dots & k_n \end{bmatrix}$ is given by:
        $p_{des}(z) = z^n + k_n z^{n-1} + \dots + k_1$
        And $\mathbf{K} = \begin{bmatrix} k_1 & k_2 & \dots & k_n \end{bmatrix}$ where $p_{des}(z) = z^n - (\text{coefficients of } (\mathbf{A}-\mathbf{B}\mathbf{K}))$.
        More precisely, if $p_{des}(z) = z^n + \hat{\alpha}_1 z^{n-1} + \dots + \hat{\alpha}_n$, then $\mathbf{K} = \begin{bmatrix} \hat{\alpha}_n & \hat{\alpha}_{n-1} & \dots & \hat{\alpha}_1 \end{bmatrix}$ when $\mathbf{u} = -\mathbf{K}\mathbf{x}$.

    2.  **Direct Coefficient Matching:**
        For systems in control canonical form, this method is straightforward.
        Calculate $(\mathbf{A} - \mathbf{B}\mathbf{K})$. The characteristic polynomial of this matrix is $det(z\mathbf{I} - (\mathbf{A} - \mathbf{B}\mathbf{K}))$. Match this polynomial with the desired characteristic polynomial.

    *(Refer to Gopal, Chapter 3, for detailed derivation of Ackermann's formula and other methods.)*

*   **Example 4:**
    Consider the system from Example 1:
    $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    This system is controllable. Let's place the closed-loop poles at $z = 0.3$ and $z = 0.4$.
    The desired characteristic polynomial is:
    $p_{des}(z) = (z - 0.3)(z - 0.4) = z^2 - 0.7z + 0.12$
    In standard form for control canonical matrix: $z^2 + a_1 z + a_2 = 0$.
    So, the desired coefficients are $a_1 = -0.7$ and $a_2 = 0.12$.
    Using the convention where $\mathbf{K} = \begin{bmatrix} k_1 & k_2 \end{bmatrix}$ and the closed-loop characteristic polynomial is $z^2 + k_2 z + k_1$, we need $k_1 = 0.12$ and $k_2 = -0.7$.
    Therefore, $\mathbf{K} = \begin{bmatrix} 0.12 & -0.7 \end{bmatrix}$.

    Let's verify by calculating $(\mathbf{A} - \mathbf{B}\mathbf{K})$:
    $\mathbf{A} - \mathbf{B}\mathbf{K} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0 \\ 1 \end{bmatrix} \begin{bmatrix} 0.12 & -0.7 \end{bmatrix}$
    $= \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0 & 0 \\ 0.12 & -0.7 \end{bmatrix}$
    $= \begin{bmatrix} 0 & 1 \\ -0.2 - 0.12 & 0.5 - (-0.7) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.32 & 1.2 \end{bmatrix}$

    The characteristic polynomial is $det(z\mathbf{I} - (\mathbf{A} - \mathbf{B}\mathbf{K}))$:
    $det\left(\begin{bmatrix} z & 0 \\ 0 & z \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -0.32 & 1.2 \end{bmatrix}\right) = det\begin{bmatrix} z & -1 \\ 0.32 & z-1.2 \end{bmatrix}$
    $= z(z - 1.2) - (-1)(0.32) = z^2 - 1.2z + 0.32$

    This doesn't match $z^2 - 0.7z + 0.12$. Let's re-examine the pole placement and canonical form convention.

    **Revisiting Control Canonical Form and Pole Placement:**
    For $G(z) = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$, the control canonical form state-space equations are:
    $\mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \\ -a_n & -a_{n-1} & \dots & -a_1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} u(k)$
    $\mathbf{y}(k) = \begin{bmatrix} b_{n-1} & b_{n-2} & \dots & b_0 \end{bmatrix} \mathbf{x}(k)$

    The characteristic polynomial of $\mathbf{A}$ is $det(z\mathbf{I} - \mathbf{A}) = z^n + a_1z^{n-1} + \dots + a_n$.
    When state feedback $\mathbf{u}(k) = -\mathbf{K}\mathbf{x}(k)$ is applied, with $\mathbf{K} = \begin{bmatrix} k_n & k_{n-1} & \dots & k_1 \end{bmatrix}$ (row vector), the closed-loop system is $\mathbf{x}(k+1) = (\mathbf{A} - \mathbf{B}\mathbf{K})\mathbf{x}(k)$.
    The matrix $(\mathbf{A} - \mathbf{B}\mathbf{K})$ will have its last row as:
    $[-a_n - k_n \quad -a_{n-1} - k_{n-1} \quad \dots \quad -a_1 - k_1]$

    The characteristic polynomial of $(\mathbf{A} - \mathbf{B}\mathbf{K})$ is $z^n + (a_1+k_1)z^{n-1} + \dots + (a_n+k_n)$.
    Let the desired characteristic polynomial be $p_{des}(z) = z^n + \hat{a}_1z^{n-1} + \dots + \hat{a}_n$.
    Then we must have:
    $a_1 + k_1 = \hat{a}_1 \implies k_1 = \hat{a}_1 - a_1$
    $a_2 + k_2 = \hat{a}_2 \implies k_2 = \hat{a}_2 - a_2$
    ...
    $a_n + k_n = \hat{a}_n \implies k_n = \hat{a}_n - a_n$

    So, $\mathbf{K} = \begin{bmatrix} k_n & k_{n-1} & \dots & k_1 \end{bmatrix} = \begin{bmatrix} \hat{a}_n - a_n & \hat{a}_{n-1} - a_{n-1} & \dots & \hat{a}_1 - a_1 \end{bmatrix}$.

    **Applying to Example 4:**
    $G(z) = \frac{3 + 4z^{-1}}{1 - 0.5z^{-1} + 0.2z^{-2}}$
    Control canonical form: $a_1 = -0.5$, $a_2 = 0.2$. $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
    Desired poles at $z=0.3, z=0.4$.
    Desired characteristic polynomial: $p_{des}(z) = (z - 0.3)(z - 0.4) = z^2 - 0.7z + 0.12$.
    So, $\hat{a}_1 = -0.7$, $\hat{a}_2 = 0.12$.

    Now calculate $k_1, k_2$:
    $k_1 = \hat{a}_1 - a_1 = -0.7 - (-0.5) = -0.2$
    $k_2 = \hat{a}_2 - a_2 = 0.12 - 0.2 = -0.08$

    The gain vector is $\mathbf{K} = \begin{bmatrix} k_2 & k_1 \end{bmatrix}$ for this control canonical form structure.
    So, $\mathbf{K} = \begin{bmatrix} -0.08 & -0.2 \end{bmatrix}$.

    Let's verify $(\mathbf{A} - \mathbf{B}\mathbf{K})$:
    $\mathbf{A} - \mathbf{B}\mathbf{K} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0 \\ 1 \end{bmatrix} \begin{bmatrix} -0.08 & -0.2 \end{bmatrix}$
    $= \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0 & 0 \\ -0.08 & -0.2 \end{bmatrix}$
    $= \begin{bmatrix} 0 & 1 \\ -0.2 - (-0.08) & 0.5 - (-0.2) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.12 & 0.7 \end{bmatrix}$

    Characteristic polynomial: $det(z\mathbf{I} - (\mathbf{A} - \mathbf{B}\mathbf{K}))$
    $det\left(\begin{bmatrix} z & 0 \\ 0 & z \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -0.12 & 0.7 \end{bmatrix}\right) = det\begin{bmatrix} z & -1 \\ 0.12 & z-0.7 \end{bmatrix}$
    $= z(z - 0.7) - (-1)(0.12) = z^2 - 0.7z + 0.12$. This matches the desired polynomial.

    **Important Point:**
    When using Ackermann's formula or direct coefficient matching, ensure consistency in the definition of the control canonical form and the state feedback gain vector $\mathbf{K}$. The placement of coefficients in $\mathbf{K}$ depends on the specific form.

---

### 4. Design of Observers (State Estimators)

In many practical scenarios, not all state variables are directly measurable. An observer is a dynamic system that estimates the state vector $\mathbf{x}(k)$ using the system's inputs $\mathbf{u}(k)$ and outputs $\mathbf{y}(k)$.

**4.1 Observer Definition:**
A linear observer for the system $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)$, $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k)$ is typically implemented as:
$\hat{\mathbf{x}}(k+1) = \mathbf{A}\hat{\mathbf{x}}(k) + \mathbf{B}\mathbf{u}(k) + \mathbf{L}(\mathbf{y}(k) - \mathbf{C}\hat{\mathbf{x}}(k))$
where $\hat{\mathbf{x}}(k)$ is the estimated state vector and $\mathbf{L}$ is the observer gain matrix (also called the estimator gain).

**4.2 Observer Error Dynamics:**
Let $\mathbf{e}(k) = \mathbf{x}(k) - \hat{\mathbf{x}}(k)$ be the estimation error.
Subtracting the observer equation from the state equation:
$\mathbf{x}(k+1) - \hat{\mathbf{x}}(k+1) = (\mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)) - (\mathbf{A}\hat{\mathbf{x}}(k) + \mathbf{B}\mathbf{u}(k) + \mathbf{L}(\mathbf{y}(k) - \mathbf{C}\hat{\mathbf{x}}(k)))$
$\mathbf{e}(k+1) = \mathbf{A}\mathbf{x}(k) - \mathbf{A}\hat{\mathbf{x}}(k) - \mathbf{L}(\mathbf{y}(k) - \mathbf{C}\hat{\mathbf{x}}(k))$
$\mathbf{e}(k+1) = \mathbf{A}(\mathbf{x}(k) - \hat{\mathbf{x}}(k)) - \mathbf{L}(\mathbf{C}\mathbf{x}(k) - \mathbf{C}\hat{\mathbf{x}}(k))$  (assuming $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k)$ for simplicity, ignoring D term)
$\mathbf{e}(k+1) = \mathbf{A}\mathbf{e}(k) - \mathbf{L}\mathbf{C}\mathbf{e}(k)$
$\mathbf{e}(k+1) = (\mathbf{A} - \mathbf{L}\mathbf{C})\mathbf{e}(k)$

The observer error dynamics are governed by the matrix $(\mathbf{A} - \mathbf{L}\mathbf{C})$. The design objective is to choose $\mathbf{L}$ such that the eigenvalues of $(\mathbf{A} - \mathbf{L}\mathbf{C})$ are at desired locations, typically faster than the closed-loop system poles determined by the controller.

**4.3 Observer Design (Pole Placement):**
If the system $(\mathbf{A}, \mathbf{C})$ is observable, then it is possible to place the eigenvalues of $(\mathbf{A} - \mathbf{L}\mathbf{C})$ at any desired set of locations by choosing $\mathbf{L}$.

*   **Design Methods:**
    1.  **Ackermann's Formula (for SISO systems):**
        For a single-output system, Ackermann's formula can be used to find $\mathbf{L}$.
        If the desired observer characteristic polynomial is $p_{obs}(z) = z^n + \beta_1z^{n-1} + \dots + \beta_n$, then:
        $\mathbf{L} = \begin{bmatrix} \beta_n \\ \beta_{n-1} \\ \vdots \\ \beta_1 \end{bmatrix}$ (column vector) calculated from $\mathbf{L} = p_{obs}(\mathbf{A}^T)(\mathbf{M}_o^T)^{-1} \begin{bmatrix} 0 \\ 0 \\ \dots \\ 1 \end{bmatrix}$.
        A more direct way for SISO systems: Calculate the transpose of the controllability matrix for $(\mathbf{A}^T, \mathbf{C}^T)$:
        $\mathbf{M}_{co}^T = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T & \dots & (\mathbf{A}^T)^{n-1}\mathbf{C}^T \end{bmatrix}$
        Let the desired observer characteristic polynomial be $p_{obs}(z) = z^n + \beta_1 z^{n-1} + \dots + \beta_n$.
        Then $\mathbf{L} = \begin{bmatrix} \beta_n \\ \beta_{n-1} \\ \vdots \\ \beta_1 \end{bmatrix}$ where $\mathbf{L} = \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} \mathbf{M}_{co}^T^{-1} p_{obs}(\mathbf{A}^T)$.

    2.  **Duality with State Feedback:**
        The problem of designing an observer gain $\mathbf{L}$ for $(\mathbf{A}, \mathbf{C})$ is dual to designing a controller gain $\mathbf{K}$ for $(\mathbf{A}^T, \mathbf{C}^T)$. If the system is observable, then $(\mathbf{A}^T, \mathbf{C}^T)$ is controllable. We can use the same pole placement techniques (like Ackermann's formula) for $(\mathbf{A}^T, \mathbf{C}^T)$ to find a gain $\mathbf{K}_{dual}$ and then $\mathbf{L} = \mathbf{K}_{dual}^T$.

    *(Refer to Ogata, Chapter 3, and Gopal, Chapter 3 for observer design methods.)*

*   **Example 5:**
    Consider the system:
    $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$
    This system is observable. Let's place the observer poles at $z = 0.1$ and $z = 0.2$ (faster than controller poles).
    Desired observer characteristic polynomial:
    $p_{obs}(z) = (z - 0.1)(z - 0.2) = z^2 - 0.3z + 0.02$
    So, $\beta_1 = -0.3$, $\beta_2 = 0.02$.

    Using the duality principle, we consider the system $(\mathbf{A}^T, \mathbf{C}^T)$:
    $\mathbf{A}^T = \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix}$, $\mathbf{C}^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    This is a controllable system with $\mathbf{B}_{dual} = \mathbf{C}^T$.
    We want to find $\mathbf{K}_{dual}$ for the system $(\mathbf{A}^T, \mathbf{B}_{dual})$ such that the closed-loop poles are at $0.1, 0.2$.
    The desired characteristic polynomial for the controller is $z^2 - 0.3z + 0.02$.
    In control canonical form for this dual system, the characteristic polynomial of $\mathbf{A}^T$ is $z^2 - 0.5z + 0.2$.
    So $a_1 = -0.5$, $a_2 = 0.2$ for the dual system.
    The desired polynomial coefficients are $\hat{a}_1 = -0.3$, $\hat{a}_2 = 0.02$.

    Using the pole placement relations for the dual system:
    $k_{dual,1} = \hat{a}_1 - a_1 = -0.3 - (-0.5) = 0.2$
    $k_{dual,2} = \hat{a}_2 - a_2 = 0.02 - 0.2 = -0.18$

    The gain vector for the dual system is $\mathbf{K}_{dual} = \begin{bmatrix} k_{dual,2} & k_{dual,1} \end{bmatrix} = \begin{bmatrix} -0.18 & 0.2 \end{bmatrix}$.
    The observer gain $\mathbf{L}$ is the transpose of this:
    $\mathbf{L} = \mathbf{K}_{dual}^T = \begin{bmatrix} -0.18 \\ 0.2 \end{bmatrix}$.

    Let's verify $(\mathbf{A} - \mathbf{L}\mathbf{C})$:
    $\mathbf{A} - \mathbf{L}\mathbf{C} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} -0.18 \\ 0.2 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix}$
    $= \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} -0.18 & 0 \\ 0.2 & 0 \end{bmatrix}$
    $= \begin{bmatrix} 0 - (-0.18) & 1 - 0 \\ -0.2 - 0.2 & 0.5 - 0 \end{bmatrix} = \begin{bmatrix} 0.18 & 1 \\ -0.4 & 0.5 \end{bmatrix}$

    Characteristic polynomial: $det(z\mathbf{I} - (\mathbf{A} - \mathbf{L}\mathbf{C}))$
    $det\left(\begin{bmatrix} z & 0 \\ 0 & z \end{bmatrix} - \begin{bmatrix} 0.18 & 1 \\ -0.4 & 0.5 \end{bmatrix}\right) = det\begin{bmatrix} z-0.18 & -1 \\ 0.4 & z-0.5 \end{bmatrix}$
    $= (z-0.18)(z-0.5) - (-1)(0.4) = z^2 - 0.5z - 0.18z + 0.09 + 0.4$
    $= z^2 - 0.68z + 0.49$. This does not match the desired $z^2 - 0.3z + 0.02$.

    **Revisiting Observer Design and Duality Convention:**
    The duality statement should be precise. If we are designing $\mathbf{K}$ for $(\mathbf{A}, \mathbf{B})$ to have eigenvalues $p_i$, we design $\mathbf{L}$ for $(\mathbf{A}^T, \mathbf{C}^T)$ to have eigenvalues $p_i$.
    Let's use the direct Ackermann's formula for $\mathbf{L}$ for $(\mathbf{A}, \mathbf{C})$.
    The observability matrix is $\mathbf{M}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0.5 & 1 \end{bmatrix}$.
    The transpose of $\mathbf{M}_o$ is $\mathbf{M}_o^T = \begin{bmatrix} 1 & 0.5 \\ 0 & 1 \end{bmatrix}$. This is also the controllability matrix for $(\mathbf{A}^T, \mathbf{C}^T)$.
    $\mathbf{M}_o^T^{-1} = \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix}$.

    The desired characteristic polynomial for the observer is $p_{obs}(z) = z^2 - 0.3z + 0.02$.
    The matrix $p_{obs}(\mathbf{A}^T)$ is:
    $p_{obs}(\mathbf{A}^T) = (\mathbf{A}^T)^2 - 0.3\mathbf{A}^T + 0.02\mathbf{I}$
    $\mathbf{A}^T = \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix}$
    $(\mathbf{A}^T)^2 = \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix} \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix} = \begin{bmatrix} -0.2 & -0.1 \\ 0.5 & 0.45 \end{bmatrix}$

    $p_{obs}(\mathbf{A}^T) = \begin{bmatrix} -0.2 & -0.1 \\ 0.5 & 0.45 \end{bmatrix} - 0.3 \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix} + 0.02 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $= \begin{bmatrix} -0.2 & -0.1 \\ 0.5 & 0.45 \end{bmatrix} - \begin{bmatrix} 0 & -0.06 \\ 0.3 & 0.15 \end{bmatrix} + \begin{bmatrix} 0.02 & 0 \\ 0 & 0.02 \end{bmatrix}$
    $= \begin{bmatrix} -0.2 - 0 + 0.02 & -0.1 - (-0.06) + 0 \\ 0.5 - 0.3 + 0 & 0.45 - 0.15 + 0.02 \end{bmatrix} = \begin{bmatrix} -0.18 & -0.04 \\ 0.2 & 0.32 \end{bmatrix}$

    Now apply the formula $\mathbf{L} = p_{obs}(\mathbf{A}^T)(\mathbf{M}_o^T)^{-1} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ (or $\mathbf{C}$ for the original system).
    The formula $\mathbf{L} = p_{obs}(\mathbf{A}^T)(\mathbf{M}_o^T)^{-1} \mathbf{v}_n$ where $\mathbf{v}_n = [0, 0, \dots, 1]^T$ is used when the controllability matrix is in the form $[\mathbf{B}, \mathbf{A}\mathbf{B}, \dots, \mathbf{A}^{n-1}\mathbf{B}]$. For observability, the matrix is $\begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \\ \vdots \end{bmatrix}$.

    The dual of Ackermann's formula for $\mathbf{L}$ where the desired characteristic polynomial is $p_{obs}(z) = z^n + \beta_1z^{n-1} + \dots + \beta_n$ is:
    $\mathbf{L} = (\mathbf{M}_o^T)^{-1} \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} p_{obs}(\mathbf{A}^T)$. This formulation is for $\mathbf{u} = -\mathbf{K}\mathbf{x}$. For observer $\mathbf{L}$, it is $\mathbf{L} = p_{obs}(\mathbf{A}^T)(\mathbf{M}_o^T)^{-1} \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix}$ or $\mathbf{L} = \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} (\mathbf{M}_o^{-1}) p_{obs}(\mathbf{A})$.

    Let's use the standard controller-dual:
    Consider $(\mathbf{A}^T, \mathbf{C}^T)$ which is $\begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix}$ and $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    The controllable canonical form for this dual system would have $\mathbf{A}_{dual} = \begin{bmatrix} 0 & 1 \\ 0.2 & -0.5 \end{bmatrix}$ and $\mathbf{B}_{dual} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
    This is not the correct canonical form for the dual system.

    **Correct Duality Approach:**
    If the system is $(\mathbf{A}, \mathbf{C})$, the dual system is $(\mathbf{A}^T, \mathbf{C}^T)$.
    Controllability of $(\mathbf{A}^T, \mathbf{C}^T)$ requires $rank(\begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix}) = n$.
    $\mathbf{C}^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\mathbf{A}^T\mathbf{C}^T = \begin{bmatrix} 0 & -0.2 \\ 1 & 0.5 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
    $\begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$. Rank is 2. So $(\mathbf{A}^T, \mathbf{C}^T)$ is controllable.

    Let's find $\mathbf{K}_{dual}$ for $(\mathbf{A}^T, \mathbf{B}_{dual} = \mathbf{C}^T)$ with desired poles $0.1, 0.2$.
    Desired polynomial: $z^2 - 0.3z + 0.02$.
    The system $(\mathbf{A}^T, \mathbf{C}^T)$ is not directly in control canonical form for the pair $(\mathbf{A}^T, \mathbf{B}_{dual})$.

    Let's use the direct Ackermann's formula for $\mathbf{L}$:
    $\mathbf{L} = \begin{bmatrix} k_{o1} \\ k_{o2} \end{bmatrix}$ such that the observer characteristic polynomial is $z^2 + (a_{1,obs} - l_{2}c_{2} - l_{1}c_{1})z + \dots$.
    The observer dynamics are $\mathbf{e}(k+1) = (\mathbf{A} - \mathbf{L}\mathbf{C})\mathbf{e}(k)$.
    $(\mathbf{A} - \mathbf{L}\mathbf{C}) = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} l_{o1} \\ l_{o2} \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} -l_{o1} & 1 \\ -0.2 - l_{o2} & 0.5 \end{bmatrix}$.
    Characteristic polynomial: $det(z\mathbf{I} - (\mathbf{A} - \mathbf{L}\mathbf{C})) = det \begin{bmatrix} z+l_{o1} & -1 \\ 0.2+l_{o2} & z-0.5 \end{bmatrix}$
    $= (z+l_{o1})(z-0.5) - (-1)(0.2+l_{o2})$
    $= z^2 - 0.5z + l_{o1}z - 0.5l_{o1} + 0.2 + l_{o2}$
    $= z^2 + (l_{o1} - 0.5)z + (-0.5l_{o1} + l_{o2} + 0.2)$

    We want this to be $z^2 - 0.3z + 0.02$.
    Equating coefficients:
    1. $l_{o1} - 0.5 = -0.3 \implies l_{o1} = 0.5 - 0.3 = 0.2$
    2. $-0.5l_{o1} + l_{o2} + 0.2 = 0.02$
       $-0.5(0.2) + l_{o2} + 0.2 = 0.02$
       $-0.1 + l_{o2} + 0.2 = 0.02$
       $l_{o2} + 0.1 = 0.02 \implies l_{o2} = 0.02 - 0.1 = -0.08$

    So, $\mathbf{L} = \begin{bmatrix} 0.2 \\ -0.08 \end{bmatrix}$.

    Let's verify the observer matrix with this $\mathbf{L}$:
    $\mathbf{A} - \mathbf{L}\mathbf{C} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0.2 \\ -0.08 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} 0.2 & 0 \\ -0.08 & 0 \end{bmatrix}$
    $= \begin{bmatrix} -0.2 & 1 \\ -0.12 & 0.5 \end{bmatrix}$
    Characteristic polynomial: $det\left(\begin{bmatrix} z & 0 \\ 0 & z \end{bmatrix} - \begin{bmatrix} -0.2 & 1 \\ -0.12 & 0.5 \end{bmatrix}\right) = det\begin{bmatrix} z+0.2 & -1 \\ 0.12 & z-0.5 \end{bmatrix}$
    $= (z+0.2)(z-0.5) - (-1)(0.12) = z^2 - 0.5z + 0.2z - 0.1 + 0.12$
    $= z^2 - 0.3z + 0.02$. This matches the desired polynomial.

    **Important Point:** The placement of $l_{i}$ in $\mathbf{L}$ depends on the form of $\mathbf{C}$ and the matrix $(\mathbf{A} - \mathbf{L}\mathbf{C})$. For $\mathbf{C} = \begin{bmatrix} 1 & 0 & \dots & 0 \end{bmatrix}$, the observer gain $\mathbf{L}$'s elements are related to the polynomial coefficients in a specific way.

---

### 5. Combined Controller and Observer Design (Separation Principle)

The separation principle states that for a linear system with a linear controller and a linear observer, the design of the controller and the observer can be carried out independently. The control law is then implemented as $\mathbf{u}(k) = -\mathbf{K}\hat{\mathbf{x}}(k)$, where $\hat{\mathbf{x}}(k)$ is the output of the observer.

**5.1 Structure:**
The overall system with state feedback and an observer becomes:
1.  **Plant:** $\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}\mathbf{u}(k)$
    $\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k)$
2.  **Controller (State Feedback):** $\mathbf{u}(k) = -\mathbf{K}\hat{\mathbf{x}}(k)$
3.  **Observer:** $\hat{\mathbf{x}}(k+1) = \mathbf{A}\hat{\mathbf{x}}(k) + \mathbf{B}\mathbf{u}(k) + \mathbf{L}(\mathbf{y}(k) - \mathbf{C}\hat{\mathbf{x}}(k))$

Substituting $\mathbf{u}(k)$:
$\hat{\mathbf{x}}(k+1) = (\mathbf{A} - \mathbf{B}\mathbf{K} - \mathbf{L}\mathbf{C})\hat{\mathbf{x}}(k) + \mathbf{L}\mathbf{y}(k)$

The combined system dynamics can be analyzed by considering the state error $\mathbf{e}(k) = \mathbf{x}(k) - \hat{\mathbf{x}}(k)$ and the estimated state $\hat{\mathbf{x}}(k)$.

The overall closed-loop system matrix for the combined system is:
$\begin{bmatrix} \mathbf{x}(k+1) \\ \mathbf{e}(k+1) \end{bmatrix} = \begin{bmatrix} \mathbf{A}-\mathbf{BK} & -\mathbf{BK} \\ 0 & \mathbf{A}-\mathbf{LC} \end{bmatrix} \begin{bmatrix} \mathbf{x}(k) \\ \mathbf{e}(k) \end{bmatrix}$

The eigenvalues of the combined system are the union of the eigenvalues of $(\mathbf{A} - \mathbf{B}\mathbf{K})$ (controller poles) and $(\mathbf{A} - \mathbf{L}\mathbf{C})$ (observer poles).

**5.2 Design Steps:**
1.  **Check Controllability and Observability:** Ensure the system is controllable to design the state feedback controller and observable to design the observer.
2.  **Design Controller:** Choose desired closed-loop poles for the controller and determine the state feedback gain matrix $\mathbf{K}$ using pole placement techniques (e.g., Ackermann's formula, direct matching).
3.  **Design Observer:** Choose desired observer poles (usually faster than controller poles) and determine the observer gain matrix $\mathbf{L}$ using pole placement techniques (e.g., duality, direct matching).
4.  **Implement:** Use the estimated state from the observer $\hat{\mathbf{x}}(k)$ in the control law $\mathbf{u}(k) = -\mathbf{K}\hat{\mathbf{x}}(k)$.

**Important Point:**
The separation principle holds when the plant is linear and time-invariant, and the observer is linear. The controller gains are computed assuming full state availability, and the observer gains are computed to make the estimation error converge quickly.

---

### 6. Practice Questions and Exercises

**Question 1 (CO3, CO4):**
Consider a discrete-time system described by:
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.4 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$
a) Determine if the system is controllable.
b) Determine if the system is observable.

**Answer 1:**
a) Controllability:
$\mathbf{M}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix}$
$\mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.4 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0.4 \end{bmatrix}$
$\mathbf{M}_c = \begin{bmatrix} 0 & 1 \\ 1 & 0.4 \end{bmatrix}$
$det(\mathbf{M}_c) = 0(0.4) - 1(1) = -1 \neq 0$. Rank is 2. System is controllable.

b) Observability:
$\mathbf{M}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \end{bmatrix}$
$\mathbf{C}\mathbf{A} = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.1 & 0.4 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
$\mathbf{M}_o = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$det(\mathbf{M}_o) = 1(1) - 0(0) = 1 \neq 0$. Rank is 2. System is observable.

**Question 2 (CO4):**
For the controllable system from Question 1, design a state feedback controller $\mathbf{u}(k) = -\mathbf{K}\mathbf{x}(k)$ to place the closed-loop poles at $z = 0.2$ and $z = 0.3$.

**Answer 2:**
The system is in control canonical form with $a_1 = -0.1, a_2 = 0.4$.
Desired poles are $0.2, 0.3$.
Desired characteristic polynomial: $p_{des}(z) = (z - 0.2)(z - 0.3) = z^2 - 0.5z + 0.06$.
So, $\hat{a}_1 = -0.5, \hat{a}_2 = 0.06$.

Calculate gain coefficients:
$k_1 = \hat{a}_1 - a_1 = -0.5 - (-0.1) = -0.4$
$k_2 = \hat{a}_2 - a_2 = 0.06 - 0.4 = -0.34$

The state feedback gain matrix is $\mathbf{K} = \begin{bmatrix} k_2 & k_1 \end{bmatrix} = \begin{bmatrix} -0.34 & -0.4 \end{bmatrix}$.

**Question 3 (CO4):**
For the observable system from Question 1, design an observer gain matrix $\mathbf{L}$ such that the observer poles are at $z = 0.1$ and $z = 0.1$.

**Answer 3:**
The system has $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.4 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
Desired observer poles: $0.1, 0.1$.
Desired observer characteristic polynomial: $p_{obs}(z) = (z - 0.1)(z - 0.1) = z^2 - 0.2z + 0.01$.

Observer matrix: $(\mathbf{A} - \mathbf{L}\mathbf{C}) = \begin{bmatrix} 0 & 1 \\ -0.1 & 0.4 \end{bmatrix} - \begin{bmatrix} l_{o1} \\ l_{o2} \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} -l_{o1} & 1 \\ -0.1 - l_{o2} & 0.4 \end{bmatrix}$.
Characteristic polynomial: $det(z\mathbf{I} - (\mathbf{A} - \mathbf{L}\mathbf{C})) = det \begin{bmatrix} z+l_{o1} & -1 \\ 0.1+l_{o2} & z-0.4 \end{bmatrix}$
$= (z+l_{o1})(z-0.4) - (-1)(0.1+l_{o2})$
$= z^2 - 0.4z + l_{o1}z - 0.4l_{o1} + 0.1 + l_{o2}$
$= z^2 + (l_{o1} - 0.4)z + (-0.4l_{o1} + l_{o2} + 0.1)$

Equating coefficients with $z^2 - 0.2z + 0.01$:
1. $l_{o1} - 0.4 = -0.2 \implies l_{o1} = 0.4 - 0.2 = 0.2$
2. $-0.4l_{o1} + l_{o2} + 0.1 = 0.01$
   $-0.4(0.2) + l_{o2} + 0.1 = 0.01$
   $-0.08 + l_{o2} + 0.1 = 0.01$
   $l_{o2} + 0.02 = 0.01 \implies l_{o2} = 0.01 - 0.02 = -0.01$

So, $\mathbf{L} = \begin{bmatrix} 0.2 \\ -0.01 \end{bmatrix}$.

---

### 7. Summary and Key Takeaways

*   Discrete-time systems can be represented in state-space form using state and output equations.
*   Controllability and observability are crucial for state-space design and are determined by the rank of the controllability and observability matrices.
*   State feedback control ($\mathbf{u} = -\mathbf{K}\mathbf{x}$) allows for pole placement to achieve desired system dynamics, provided the system is controllable.
*   Observers ($\hat{\mathbf{x}}$) estimate unmeasurable states and are designed using observer gain $\mathbf{L}$ to place the observer error poles, provided the system is observable.
*   The separation principle allows independent design of controllers and observers, with the control law using the estimated state.
*   Care must be taken with conventions for canonical forms and the arrangement of gain matrices ($\mathbf{K}$ and $\mathbf{L}$).

---
**References Used:**
*   Digital control system analysis and design by Philips and Nagle (Prentice Hall, 1984) - Conceptual understanding of state-space.
*   Discrete Time Control Systems by K. Ogata (PHI Learning Private Limited, New Delhi, 2009.) - Core concepts, canonical forms, controllability, observability, Ackermann's formula.
*   Digital control and State Variable methods by M. Gopal (Tata McGraw –Hill, 1997) - Pole placement techniques, observer design, separation principle.
*   Digital Control Systems by B C Kuo (Oxford University Press, 2nd Ed., 1992) - Discretization methods, state-space formulations.
*   Digital Control of Dynamic Systems by G.F.Franklin, J. David Powell and M. Workman (, 3rd Ed.) - General principles, discretization, state-space applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
