---
title: "State Observer Design: Full order observers and Reduced order observers."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 4: Design using State Space approach:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368e4"
status: "completed"
scrapedAt: "2026-05-23T16:36:38.839Z"
---
# Discrete Time Control Systems: Module 4 - State Observer Design

This module focuses on designing state observers for discrete-time systems using the state-space approach. State observers are crucial when not all state variables are measurable directly. We will explore both full-order and reduced-order observers.

**Course Outcomes Addressed:**

*   **CO3:** Model and analyse discrete-time system using state space approach. (Knowledge Level: K3) - Understanding the state-space representation is fundamental to observer design.
*   **CO4:** Design discrete-time state feedback controllers and observers for a linear system. (Knowledge Level: K3) - This module directly addresses the design of state observers.

---

## 1. Introduction to State Observers in Discrete-Time Systems

### 1.1. The Need for State Observers

In many practical control systems, not all state variables of the system are directly measurable by sensors. However, state feedback control requires knowledge of all state variables. If the system is observable, it's possible to estimate the unmeasurable states using the available measurements and the system's input and output history. This estimation is performed by a **state observer**.

**Key Concept:** **Observability** is a property of a system that determines whether its internal states can be inferred from its external outputs.

### 1.2. State-Space Representation of Discrete-Time Systems

Recall the standard state-space representation of a linear time-invariant (LTI) discrete-time system:

$$
x(k+1) = Ax(k) + Bu(k)
$$

$$
y(k) = Cx(k) + Du(k)
$$

where:
*   $x(k) \in \mathbb{R}^n$ is the state vector at time step $k$.
*   $u(k) \in \mathbb{R}^m$ is the input vector at time step $k$.
*   $y(k) \in \mathbb{R}^p$ is the output vector at time step $k$.
*   $A \in \mathbb{R}^{n \times n}$ is the state matrix.
*   $B \in \mathbb{R}^{n \times m}$ is the input matrix.
*   $C \in \mathbb{R}^{p \times n}$ is the output matrix.
*   $D \in \mathbb{R}^{p \times m}$ is the feedforward matrix.

**Reference:** This foundational representation is discussed extensively in **Ogata (2009)** and **Philips & Nagle (1984)**.

### 1.3. The Observer Problem

Given the system equations and a set of measurements $y(k)$, the goal of a state observer is to generate an estimate of the state vector, denoted by $\hat{x}(k)$, such that $\hat{x}(k) \to x(k)$ as $k \to \infty$.

---

## 2. Full-Order State Observers

A full-order state observer estimates all $n$ state variables of the system. The structure of a full-order observer is similar to the system itself, with an added "correction term" that uses the difference between the actual output and the observer's predicted output to drive the estimated states towards the true states.

### 2.1. Observer Dynamics

Consider a linear observer with the following structure:

$$
\hat{x}(k+1) = A\hat{x}(k) + Bu(k) + L(y(k) - \hat{y}(k))
$$

where:
*   $\hat{x}(k)$ is the estimated state vector.
*   $\hat{y}(k) = C\hat{x}(k) + Du(k)$ is the estimated output.
*   $L \in \mathbb{R}^{n \times p}$ is the observer gain matrix.

### 2.2. Observer Error Dynamics

Let the state error be $e(k) = x(k) - \hat{x}(k)$.
Subtracting the observer equation from the system equation:

$$
x(k+1) - \hat{x}(k+1) = (Ax(k) + Bu(k)) - (A\hat{x}(k) + Bu(k) + L(y(k) - \hat{y}(k)))
$$

$$
e(k+1) = Ax(k) - A\hat{x}(k) - L(Cx(k) + Du(k) - (C\hat{x}(k) + Du(k)))
$$

$$
e(k+1) = A(x(k) - \hat{x}(k)) - L(Cx(k) - C\hat{x}(k))
$$

$$
e(k+1) = A e(k) - LC e(k)
$$

$$
e(k+1) = (A - LC)e(k)
$$

Let $A_o = A - LC$ be the observer dynamics matrix. The error dynamics are governed by:

$$
e(k+1) = A_o e(k)
$$

For the observer to converge to the true state, the error $e(k)$ must decay to zero as $k \to \infty$. This happens if and only if all eigenvalues of $A_o$ are inside the unit circle (for discrete-time systems).

### 2.3. Designing the Observer Gain Matrix $L$

The design problem reduces to selecting the observer gain matrix $L$ such that the eigenvalues of $(A - LC)$ are placed at desired locations within the unit circle. These desired locations are typically chosen to be faster than the dominant poles of the system.

**Pole Placement for Observers:**
This is analogous to pole placement for state feedback controllers. We want to choose $L$ such that the characteristic polynomial of $(A - LC)$ matches a desired characteristic polynomial.

The characteristic equation is:
$$
\det(\lambda I - (A - LC)) = 0
$$

**Ackermann's Formula (for $L$):**
For single-input, single-output (SISO) systems ($m=1, p=1$), if the system is observable, the observer gain $L$ can be designed using a formula similar to Ackermann's formula for state feedback.
The observer is designed based on the **dual** system. The dual system has matrices $A^T$ and $C^T$.

The desired characteristic polynomial for the observer is:
$$
\phi(\lambda) = (\lambda - \mu_1)(\lambda - \mu_2)\dots(\lambda - \mu_n)
$$
where $\mu_i$ are the desired distinct closed-loop pole locations for the observer error dynamics, inside the unit circle.

Let $\phi_o(A) = A_o^n + \alpha_{n-1} A_o^{n-1} + \dots + \alpha_0 I$.
Then, the desired observer characteristic polynomial can be written as:
$$
\phi_o(\lambda) = \lambda^n + \alpha_{n-1} \lambda^{n-1} + \dots + \alpha_0
$$

The gain matrix $L$ is given by:
$$
L = \phi_o(A^T)(C^T) [ (C^T)^T \phi_o(A^T) (C^T) ]^{-1}
$$
Wait, this is Ackermann's formula for $K$ if we replace $B$ with $C^T$ and $A$ with $A^T$. Let's be careful.

A more direct way for SISO systems ($p=1$):
Let $\phi_o(\lambda)$ be the desired characteristic polynomial for $A-LC$.
$$
L = \begin{bmatrix} l_1 & l_2 & \dots & l_n \end{bmatrix}^T
$$
where $l_i$ are scalars.

The matrix $A-LC$ has the form:
$$
A - LC = \begin{bmatrix}
A_{11} - l_1 c_1 & A_{12} - l_1 c_2 & \dots & A_{1n} - l_1 c_n \\
A_{21} - l_2 c_1 & A_{22} - l_2 c_2 & \dots & A_{2n} - l_2 c_n \\
\vdots & \vdots & \ddots & \vdots \\
A_{n1} - l_n c_1 & A_{n2} - l_n c_2 & \dots & A_{nn} - l_n c_n
\end{bmatrix}
$$
where $C = \begin{bmatrix} c_1 & c_2 & \dots & c_n \end{bmatrix}$.

The characteristic polynomial of $A-LC$ is $\det(\lambda I - (A-LC))$.
We want this to be equal to $\phi_o(\lambda)$.

**Alternative approach: Transformation to Controllable Canonical Form (for design)**
If the system is observable, it can be transformed into the observable canonical form. In this form, designing $L$ becomes straightforward.

Let the system be observable. We can find a similarity transformation $x = T\tilde{x}$ such that the system in $\tilde{x}$ coordinates is in observable canonical form:

$$
\tilde{x}(k+1) = \tilde{A}\tilde{x}(k) + \tilde{B}u(k)
$$

$$
y(k) = \tilde{C}\tilde{x}(k) + Du(k)
$$

where $\tilde{C} = \begin{bmatrix} 1 & 0 & \dots & 0 \end{bmatrix}$ and
$$
\tilde{A} = \begin{bmatrix}
0 & 1 & 0 & \dots & 0 \\
0 & 0 & 1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 1 \\
-\alpha_0 & -\alpha_1 & -\alpha_2 & \dots & -\alpha_{n-1}
\end{bmatrix}
$$
Here, $\alpha_i$ are the coefficients of the characteristic polynomial of $A$:
$$
\det(\lambda I - A) = \lambda^n + \alpha_{n-1} \lambda^{n-1} + \dots + \alpha_0
$$

The observer in the transformed coordinates is:
$$
\hat{\tilde{x}}(k+1) = \tilde{A}\hat{\tilde{x}}(k) + \tilde{B}u(k) + \tilde{L}(y(k) - \hat{y}(k))
$$
where $\hat{y}(k) = \tilde{C}\hat{\tilde{x}}(k) + Du(k)$.

The error dynamics in the transformed coordinates are:
$$
e_{\tilde{x}}(k+1) = (\tilde{A} - \tilde{L}\tilde{C})e_{\tilde{x}}(k)
$$

For $\tilde{C} = \begin{bmatrix} 1 & 0 & \dots & 0 \end{bmatrix}$, $\tilde{L}$ can be chosen as:
$$
\tilde{L} = \begin{bmatrix} l_1 & l_2 & \dots & l_n \end{bmatrix}^T
$$
And the matrix $\tilde{A} - \tilde{L}\tilde{C}$ becomes:
$$
\tilde{A} - \tilde{L}\tilde{C} = \begin{bmatrix}
0 & 1 & 0 & \dots & 0 \\
0 & 0 & 1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 1 \\
-\alpha_0 - l_1 & -\alpha_1 - l_2 & -\alpha_2 - l_3 & \dots & -\alpha_{n-1} - l_n
\end{bmatrix}
$$
The characteristic polynomial of this matrix is:
$$
\det(\lambda I - (\tilde{A} - \tilde{L}\tilde{C})) = \lambda^n + (\alpha_{n-1} + l_n) \lambda^{n-1} + \dots + (\alpha_0 + l_1)
$$

We want to match this to the desired observer characteristic polynomial:
$$
\phi_o(\lambda) = \lambda^n + \beta_{n-1} \lambda^{n-1} + \dots + \beta_0
$$
where $\beta_i$ are chosen such that the poles $(\lambda - \mu_i)$ are inside the unit circle.

Comparing coefficients:
$$
\beta_{n-1} = \alpha_{n-1} + l_n \implies l_n = \beta_{n-1} - \alpha_{n-1}
$$
$$
\beta_{n-2} = \alpha_{n-2} + l_{n-1} \implies l_{n-1} = \beta_{n-2} - \alpha_{n-2}
$$
$\vdots$
$$
\beta_0 = \alpha_0 + l_1 \implies l_1 = \beta_0 - \alpha_0
$$

So, the desired observer gain in the transformed coordinates is $\tilde{L} = \begin{bmatrix} \beta_0 - \alpha_0 & \beta_1 - \alpha_1 & \dots & \beta_{n-1} - \alpha_{n-1} \end{bmatrix}^T$.

Once $\tilde{L}$ is found, the gain matrix in the original coordinates is $L = T^{-T}\tilde{L}$.

**Important Note:** The characteristic polynomial of the *observer error dynamics* is $\det(\lambda I - (A-LC))$. We choose the desired poles for this error, not for the observer states directly. Faster error convergence requires poles closer to the origin.

**Textbook Reference:** **M. Gopal (1997)** provides detailed methods for calculating observer gains, including the use of canonical forms.

### 2.4. Observer Implementation

The observer equation is:
$$
\hat{x}(k+1) = A\hat{x}(k) + Bu(k) + L(y(k) - C\hat{x}(k))
$$
$$
\hat{x}(k+1) = (A - LC)\hat{x}(k) + Bu(k) + Ly(k)
$$

This form clearly shows that the observer is a discrete-time system with state $\hat{x}(k)$, driven by the system input $u(k)$ and the measured output $y(k)$.

### 2.5. Combination with State Feedback

A common use of observers is in conjunction with state feedback controllers. When states are not measured, we use the estimated states for feedback:

$$
u(k) = -K\hat{x}(k)
$$

The closed-loop system then becomes:
System: $x(k+1) = Ax(k) + Bu(k)$
Observer: $\hat{x}(k+1) = (A - LC)\hat{x}(k) + Bu(k) + Ly(k)$
Controller: $u(k) = -K\hat{x}(k)$

Substituting $u(k)$ into the system and observer equations:
$x(k+1) = Ax(k) - BK\hat{x}(k)$
$\hat{x}(k+1) = (A - LC)\hat{x}(k) - BK\hat{x}(k) + Ly(k)$
$\hat{x}(k+1) = (A - LC - BK)\hat{x}(k) + Ly(k)$

The overall system state is $\begin{bmatrix} x(k) \\ e(k) \end{bmatrix}$.
$e(k) = x(k) - \hat{x}(k)$
$x(k+1) = Ax(k) - BK\hat{x}(k)$
$e(k+1) = x(k+1) - \hat{x}(k+1) = (Ax(k) - BK\hat{x}(k)) - ((A - LC - BK)\hat{x}(k) + Ly(k))$
$e(k+1) = Ax(k) - A\hat{x}(k) + LC\hat{x}(k) + BK\hat{x}(k) - BK\hat{x}(k) - Ly(k)$
$e(k+1) = A(x(k) - \hat{x}(k)) + LC\hat{x}(k) - L(Cx(k) + Du(k))$
$e(k+1) = A e(k) + LC\hat{x}(k) - LCx(k) - LDCK\hat{x}(k)$ (assuming $u = -K\hat{x}$)
$e(k+1) = A e(k) - LC e(k) + LC\hat{x}(k) - LDCK\hat{x}(k)$

This is becoming complicated. A simpler approach using the separation principle is often used. The eigenvalues of the closed-loop system are the union of the eigenvalues of the state feedback controller $(A-BK)$ and the observer error dynamics $(A-LC)$. This separation holds if $D=0$. If $D \neq 0$, there is some coupling.

**Textbook Reference:** **Kuo (1992)** and **Franklin, Powell, & Workman (3rd Ed.)** discuss the combined controller-observer design and the separation principle.

---

## 3. Reduced-Order State Observers

A full-order observer is designed when the output $y(k)$ is available. However, if $p < n$, the output $y(k)$ only provides information about $p$ of the state variables. The remaining $n-p$ states are not directly available.

A reduced-order observer estimates only the $n-p$ unmeasurable states. It utilizes the known measurable states (directly from the output or its transformation) to reduce the order of the observer.

### 3.1. Motivation for Reduced-Order Observers

1.  **Fewer computations:** Reduces the complexity and computational load.
2.  **Better performance:** Can sometimes offer better performance and faster convergence for the estimated unmeasurable states.

### 3.2. Structure of a Reduced-Order Observer

We partition the state vector $x(k)$ into two parts:
1.  The part directly related to the output: $x_1(k) \in \mathbb{R}^p$
2.  The unmeasurable part: $x_2(k) \in \mathbb{R}^{n-p}$

So, $x(k) = \begin{bmatrix} x_1(k) \\ x_2(k) \end{bmatrix}$.

The system equations can be rewritten accordingly:

$$
\begin{bmatrix} x_1(k+1) \\ x_2(k+1) \end{bmatrix} = \begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{bmatrix} \begin{bmatrix} x_1(k) \\ x_2(k) \end{bmatrix} + \begin{bmatrix} B_1 \\ B_2 \end{bmatrix} u(k)
$$

$$
y(k) = \begin{bmatrix} C_{1} & C_{2} \end{bmatrix} \begin{bmatrix} x_1(k) \\ x_2(k) \end{bmatrix} + Du(k)
$$

Assuming $C$ is such that the first $p$ components of $x$ are the measured ones, we can write:
$y(k) = x_1(k)$ (by choosing an appropriate coordinate transformation, i.e., $C$ is partitioned into $[I_p | 0]$).
If $C$ is not in this form, we can always find a transformation. Let's assume for simplicity that $y(k) = x_1(k)$ after a suitable transformation.

Then the system becomes:

$$
x_1(k+1) = A_{11}x_1(k) + A_{12}x_2(k) + B_1u(k)
$$

$$
x_2(k+1) = A_{21}x_1(k) + A_{22}x_2(k) + B_2u(k)
$$

And the output is $y(k) = x_1(k)$.

The measured states are $y(k)$. The observer needs to estimate $x_2(k)$.
Let $\hat{x}_2(k)$ be the estimate of $x_2(k)$.
The structure of the reduced-order observer for $\hat{x}_2(k)$ is:

$$
\hat{x}_2(k+1) = A_{22}\hat{x}_2(k) + A_{21}y(k) + B_2u(k) + L_2(y(k+1) - \hat{y}(k+1))
$$

where $L_2 \in \mathbb{R}^{(n-p) \times p}$ is the observer gain matrix for the reduced-order observer.

Let's examine the term $y(k+1)$:
$y(k+1) = x_1(k+1) = A_{11}x_1(k) + A_{12}x_2(k) + B_1u(k)$.
Substituting $x_1(k) = y(k)$:
$y(k+1) = A_{11}y(k) + A_{12}x_2(k) + B_1u(k)$.

The predicted output of the observer at $k+1$ is:
$\hat{y}(k+1) = A_{11}y(k) + A_{12}\hat{x}_2(k) + B_1u(k)$.

The error in the predicted output is:
$y(k+1) - \hat{y}(k+1) = (A_{11}y(k) + A_{12}x_2(k) + B_1u(k)) - (A_{11}y(k) + A_{12}\hat{x}_2(k) + B_1u(k))$
$y(k+1) - \hat{y}(k+1) = A_{12}(x_2(k) - \hat{x}_2(k))$

Let the error in the unmeasurable states be $e_2(k) = x_2(k) - \hat{x}_2(k)$.
Substituting this into the observer equation:
$\hat{x}_2(k+1) = A_{22}\hat{x}_2(k) + A_{21}y(k) + B_2u(k) + L_2 A_{12} e_2(k)$

Now, let's look at the error dynamics for $e_2(k)$:
$e_2(k+1) = x_2(k+1) - \hat{x}_2(k+1)$
$e_2(k+1) = (A_{21}x_1(k) + A_{22}x_2(k) + B_2u(k)) - (A_{22}\hat{x}_2(k) + A_{21}y(k) + B_2u(k) + L_2 A_{12} e_2(k))$
Since $y(k) = x_1(k)$:
$e_2(k+1) = A_{21}y(k) + A_{22}x_2(k) - A_{22}\hat{x}_2(k) - A_{21}y(k) - L_2 A_{12} e_2(k)$
$e_2(k+1) = A_{22}(x_2(k) - \hat{x}_2(k)) - L_2 A_{12} e_2(k)$
$e_2(k+1) = (A_{22} - L_2 A_{12}) e_2(k)$

The error dynamics are governed by:
$e_2(k+1) = (A_{22} - L_2 A_{12}) e_2(k)$

The observer gain $L_2$ is designed to place the eigenvalues of $(A_{22} - L_2 A_{12})$ inside the unit circle.

**Design Procedure for Reduced-Order Observer:**

1.  **Transform the state-space representation:** If necessary, apply a similarity transformation $x = T\tilde{x}$ such that the output $y(k)$ is directly one or more of the components of $\tilde{x}(k)$. For instance, transform so that $\tilde{C} = [I_p | 0]$.
    If $y(k) = \tilde{C}\tilde{x}(k)$, and $\tilde{C} = [I_p | 0]$, then $\tilde{x}_1(k) = y(k)$.
    The partitioned system matrices are $\tilde{A} = \begin{bmatrix} \tilde{A}_{11} & \tilde{A}_{12} \\ \tilde{A}_{21} & \tilde{A}_{22} \end{bmatrix}$, $\tilde{B} = \begin{bmatrix} \tilde{B}_1 \\ \tilde{B}_2 \end{bmatrix}$.
    Here $\tilde{A}_{11} \in \mathbb{R}^{p \times p}$, $\tilde{A}_{12} \in \mathbb{R}^{p \times (n-p)}$, $\tilde{A}_{21} \in \mathbb{R}^{(n-p) \times p}$, $\tilde{A}_{22} \in \mathbb{R}^{(n-p) \times (n-p)}$.
    $\tilde{B}_1 \in \mathbb{R}^{p \times m}$, $\tilde{B}_2 \in \mathbb{R}^{(n-p) \times m}$.
    The output is $y(k) = \tilde{x}_1(k)$.

2.  **Define the observer equation for the unmeasurable states $\hat{x}_2(k)$:**
    $$
    \hat{x}_2(k+1) = \tilde{A}_{22}\hat{x}_2(k) + \tilde{A}_{21}y(k) + \tilde{B}_2u(k) + L_2(y(k+1) - (\tilde{A}_{11}y(k) + \tilde{A}_{12}\hat{x}_2(k) + \tilde{B}_1u(k)))
    $$
    $$
    \hat{x}_2(k+1) = (\tilde{A}_{22} - L_2\tilde{A}_{12})\hat{x}_2(k) + (\tilde{A}_{21} - L_2\tilde{A}_{11})y(k) + (\tilde{B}_2 - L_2\tilde{B}_1)u(k)
    $$

3.  **Determine the desired observer error dynamics:** The error dynamics are $e_2(k+1) = (\tilde{A}_{22} - L_2\tilde{A}_{12})e_2(k)$.
    The observer gain $L_2$ is chosen to place the eigenvalues of $(\tilde{A}_{22} - L_2\tilde{A}_{12})$ at desired locations $\mu_i$ (inside the unit circle).

4.  **Design $L_2$:** This is a pole placement problem for the system with matrices $\tilde{A}_{22}$ and $\tilde{A}_{12}$. This is equivalent to designing a controller gain $K'$ for a system with state matrices $A'$ and $B'$ where $A' = \tilde{A}_{22}^T$ and $B' = \tilde{A}_{12}^T$. The gain matrix $L_2$ would then be $K'^T$.
    Specifically, for a SISO system where $y(k)$ is a single output ($p=1$), the matrix $\tilde{A}_{12}$ is a column vector, and $\tilde{A}_{22}$ is $(n-1) \times (n-1)$. The design of $L_2$ involves finding the gain for the dual system.

**Textbook Reference:** **Isermann (1989)** and **Houpis & Lamont (1985)** provide comprehensive explanations of reduced-order observers and their design.

---

## 4. Practical Considerations and Examples

### 4.1. Pole Selection for Observers

The desired poles for the observer error dynamics $(\mu_i)$ should be chosen to be faster than the dominant poles of the controlled system. A common rule of thumb is to place observer poles 5 to 10 times faster than the dominant closed-loop system poles. This ensures that the observer error converges quickly and doesn't significantly degrade the overall system performance.

### 4.2. Example: Full-Order Observer Design

Consider a discrete-time system:
$$
x(k+1) = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)
$$
$$
y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(k)
$$

Here, $A = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
The state $x_1(k)$ is measured ($y(k) = x_1(k)$), but $x_2(k)$ is not.

**Goal:** Design a full-order observer. Let's place the observer error poles at $\mu_1 = 0.2$ and $\mu_2 = 0.3$. These are well inside the unit circle.

**Step 1: Calculate the characteristic polynomial of A.**
$$
\det(\lambda I - A) = \det \left( \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} \right)
$$
$$
= \det \begin{bmatrix} \lambda - 0.8 & -0.1 \\ 0.2 & \lambda - 0.5 \end{bmatrix}
$$
$$
= (\lambda - 0.8)(\lambda - 0.5) - (-0.1)(0.2)
$$
$$
= \lambda^2 - 0.5\lambda - 0.8\lambda + 0.4 + 0.02
$$
$$
= \lambda^2 - 1.3\lambda + 0.42
$$
So, $\alpha_1 = -1.3$ and $\alpha_0 = 0.42$.

**Step 2: Define the desired observer characteristic polynomial.**
Desired poles are $\mu_1 = 0.2, \mu_2 = 0.3$.
$$
\phi_o(\lambda) = (\lambda - 0.2)(\lambda - 0.3) = \lambda^2 - 0.3\lambda - 0.2\lambda + 0.06 = \lambda^2 - 0.5\lambda + 0.06
$$
So, $\beta_1 = -0.5$ and $\beta_0 = 0.06$.

**Step 3: Calculate the observer gain L.**
The observer dynamics matrix is $A_o = A - LC$. We want $\det(\lambda I - (A-LC)) = \phi_o(\lambda)$.
For SISO systems, we can use the transformation to observable canonical form or directly calculate $L$.
Let $L = \begin{bmatrix} l_1 \\ l_2 \end{bmatrix}$.
$C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.

$A - LC = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} l_1 \\ l_2 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix}$
$$
= \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} - \begin{bmatrix} l_1 & 0 \\ l_2 & 0 \end{bmatrix}
$$
$$
= \begin{bmatrix} 0.8 - l_1 & 0.1 \\ -0.2 - l_2 & 0.5 \end{bmatrix}
$$

Characteristic polynomial:
$$
\det(\lambda I - (A-LC)) = \det \begin{bmatrix} \lambda - (0.8 - l_1) & -0.1 \\ 0.2 + l_2 & \lambda - 0.5 \end{bmatrix}
$$
$$
= (\lambda - 0.8 + l_1)(\lambda - 0.5) - (-0.1)(0.2 + l_2)
$$
$$
= \lambda^2 - 0.5\lambda - 0.8\lambda + 0.4 + l_1\lambda - 0.5l_1 + 0.02 + 0.1l_2
$$
$$
= \lambda^2 + (l_1 - 1.3)\lambda + (0.42 - 0.5l_1 + 0.1l_2)
$$

Matching coefficients with $\phi_o(\lambda) = \lambda^2 - 0.5\lambda + 0.06$:
Coefficient of $\lambda$: $l_1 - 1.3 = -0.5 \implies l_1 = 1.3 - 0.5 = 0.8$.
Constant term: $0.42 - 0.5l_1 + 0.1l_2 = 0.06$.
Substitute $l_1 = 0.8$:
$0.42 - 0.5(0.8) + 0.1l_2 = 0.06$
$0.42 - 0.4 + 0.1l_2 = 0.06$
$0.02 + 0.1l_2 = 0.06$
$0.1l_2 = 0.04 \implies l_2 = 0.4$.

So, the observer gain matrix is $L = \begin{bmatrix} 0.8 \\ 0.4 \end{bmatrix}$.

**Observer Equation:**
$\hat{x}(k+1) = A\hat{x}(k) + Bu(k) + L(y(k) - C\hat{x}(k))$
$\hat{x}(k+1) = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} \hat{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} 0.8 \\ 0.4 \end{bmatrix} (y(k) - \begin{bmatrix} 1 & 0 \end{bmatrix} \hat{x}(k))$
$\hat{x}(k+1) = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} \hat{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} 0.8 \\ 0.4 \end{bmatrix} (y(k) - \hat{x}_1(k))$

This can also be written as:
$\hat{x}(k+1) = (A - LC)\hat{x}(k) + Bu(k) + Ly(k)$
$A - LC = \begin{bmatrix} 0.8 - 0.8 & 0.1 \\ -0.2 - 0.4 & 0.5 \end{bmatrix} = \begin{bmatrix} 0 & 0.1 \\ -0.6 & 0.5 \end{bmatrix}$
$\hat{x}(k+1) = \begin{bmatrix} 0 & 0.1 \\ -0.6 & 0.5 \end{bmatrix} \hat{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) + \begin{bmatrix} 0.8 \\ 0.4 \end{bmatrix} y(k)$

**Observer Error Dynamics:**
$A_o = A - LC = \begin{bmatrix} 0 & 0.1 \\ -0.6 & 0.5 \end{bmatrix}$
$\det(\lambda I - A_o) = \det \begin{bmatrix} \lambda & -0.1 \\ 0.6 & \lambda - 0.5 \end{bmatrix} = \lambda(\lambda - 0.5) - (-0.1)(0.6) = \lambda^2 - 0.5\lambda + 0.06$.
The eigenvalues are indeed $0.2$ and $0.3$.

### 4.3. Example: Reduced-Order Observer Design

Using the same system as above:
$x(k+1) = \begin{bmatrix} 0.8 & 0.1 \\ -0.2 & 0.5 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)$
$y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(k)$

Here $p=1$, $n=2$, so $n-p=1$. We need to estimate $x_2(k)$.
The system is already in the desired form where $y(k) = x_1(k)$.

$x_1(k+1) = 0.8 x_1(k) + 0.1 x_2(k) + 0 u(k)$
$x_2(k+1) = -0.2 x_1(k) + 0.5 x_2(k) + 1 u(k)$
$y(k) = x_1(k)$

The partitioned matrices are:
$A_{11} = 0.8$, $A_{12} = 0.1$
$A_{21} = -0.2$, $A_{22} = 0.5$
$B_1 = 0$, $B_2 = 1$

The observer estimates $x_2(k)$, denoted $\hat{x}_2(k)$.
The observer equation for $\hat{x}_2(k)$ is:
$$
\hat{x}_2(k+1) = A_{22}\hat{x}_2(k) + A_{21}y(k) + B_2u(k) + L_2(y(k+1) - (A_{11}y(k) + A_{12}\hat{x}_2(k) + B_1u(k)))
$$
Here, $L_2$ is a scalar, since $n-p=1$ and $p=1$.
The error dynamics are $e_2(k+1) = (A_{22} - L_2 A_{12})e_2(k)$.
We need to choose $L_2$ such that $A_{22} - L_2 A_{12}$ has a desired eigenvalue $\mu$.

Let's choose the desired eigenvalue $\mu = 0.2$ (faster than the original system poles).
$A_{22} = 0.5$, $A_{12} = 0.1$.
$0.5 - L_2(0.1) = 0.2$
$0.1 L_2 = 0.5 - 0.2 = 0.3$
$L_2 = 3$.

Now substitute $L_2=3$ into the observer equation:
$\hat{x}_2(k+1) = 0.5\hat{x}_2(k) + (-0.2)y(k) + 1u(k) + 3(y(k+1) - (0.8y(k) + 0.1\hat{x}_2(k) + 0u(k)))$
$\hat{x}_2(k+1) = 0.5\hat{x}_2(k) - 0.2y(k) + u(k) + 3(y(k+1) - 0.8y(k) - 0.1\hat{x}_2(k))$
$\hat{x}_2(k+1) = 0.5\hat{x}_2(k) - 0.2y(k) + u(k) + 3y(k+1) - 2.4y(k) - 0.3\hat{x}_2(k)$
$\hat{x}_2(k+1) = (0.5 - 0.3)\hat{x}_2(k) + (3 - 0.2 - 2.4)y(k) + 3y(k+1) + u(k)$
$\hat{x}_2(k+1) = 0.2\hat{x}_2(k) + 0.4y(k) + 3y(k+1) + u(k)$

The observer estimate is $\hat{x}_2(k)$.
The estimated state vector is $\hat{x}(k) = \begin{bmatrix} y(k) \\ \hat{x}_2(k) \end{bmatrix}$.

**Observer Error Dynamics:**
$e_2(k+1) = (A_{22} - L_2 A_{12})e_2(k) = (0.5 - 3 \times 0.1)e_2(k) = (0.5 - 0.3)e_2(k) = 0.2 e_2(k)$.
The eigenvalue is $0.2$, as desired.

**Important Note:** For the observer equation, you need $y(k+1)$, which means you need to know the system dynamics for the next step ($A_{11}, A_{12}, B_1$). This requires a prediction of the system's behavior.

---

## 5. Summary and Key Takeaways

*   **State Observers:** Estimate unmeasurable states when only outputs are available.
*   **Full-Order Observer:** Estimates all $n$ states. The observer dynamics are $e(k+1) = (A - LC)e(k)$, where $L$ is designed to place eigenvalues of $(A-LC)$ inside the unit circle.
*   **Reduced-Order Observer:** Estimates only the $n-p$ unmeasurable states, utilizing the $p$ measurable states. The observer dynamics are $e_2(k+1) = (A_{22} - L_2 A_{12})e_2(k)$, where $L_2$ is designed to place eigenvalues of $(A_{22} - L_2 A_{12})$ inside the unit circle.
*   **Design:** Pole placement is the primary technique for designing observer gains $L$ or $L_2$. Desired poles are typically chosen faster than the system's open-loop or closed-loop poles.
*   **Observability:** A system must be observable for state estimation to be possible.
*   **Combined Control and Observation:** Observers are often used with state feedback controllers ($u = -K\hat{x}$) to control systems with unmeasurable states. The separation principle applies for controller and observer pole placement.

---

## 6. Practice Questions

1.  Given a discrete-time system:
    $$
    x(k+1) = \begin{bmatrix} 0.7 & 0.3 \\ -0.1 & 0.9 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)
    $$
    $$
    y(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(k)
    $$
    Design a full-order observer such that the observer error dynamics have poles at $0.2$ and $0.4$. Calculate the observer gain matrix $L$.
    **(Answer Below)**

2.  Consider the same system as in Question 1. Design a reduced-order observer to estimate $x_2(k)$. Place the observer error pole at $0.2$. Calculate the observer gain $L_2$.
    **(Answer Below)**

---

## 7. Answers to Practice Questions

**Answer to Question 1:**
System matrices: $A = \begin{bmatrix} 0.7 & 0.3 \\ -0.1 & 0.9 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
Characteristic polynomial of $A$:
$\det(\lambda I - A) = (\lambda - 0.7)(\lambda - 0.9) - (0.3)(-0.1) = \lambda^2 - 1.6\lambda + 0.63 + 0.03 = \lambda^2 - 1.6\lambda + 0.66$.
So, $\alpha_1 = -1.6$, $\alpha_0 = 0.66$.

Desired observer poles: $\mu_1 = 0.2, \mu_2 = 0.4$.
Desired characteristic polynomial: $\phi_o(\lambda) = (\lambda - 0.2)(\lambda - 0.4) = \lambda^2 - 0.6\lambda + 0.08$.
So, $\beta_1 = -0.6$, $\beta_0 = 0.08$.

Let $L = \begin{bmatrix} l_1 \\ l_2 \end{bmatrix}$.
$A - LC = \begin{bmatrix} 0.7 & 0.3 \\ -0.1 & 0.9 \end{bmatrix} - \begin{bmatrix} l_1 \\ l_2 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} 0.7 - l_1 & 0.3 \\ -0.1 - l_2 & 0.9 \end{bmatrix}$.
$\det(\lambda I - (A-LC)) = (\lambda - 0.7 + l_1)(\lambda - 0.9) - (0.3)(-0.1 - l_2)$
$= \lambda^2 - 0.9\lambda - 0.7\lambda + 0.63 + l_1\lambda - 0.9l_1 + 0.03 + 0.3l_2$
$= \lambda^2 + (l_1 - 1.6)\lambda + (0.66 - 0.9l_1 + 0.3l_2)$.

Matching coefficients with $\lambda^2 - 0.6\lambda + 0.08$:
$l_1 - 1.6 = -0.6 \implies l_1 = 1.0$.
$0.66 - 0.9(1.0) + 0.3l_2 = 0.08$
$0.66 - 0.9 + 0.3l_2 = 0.08$
$-0.24 + 0.3l_2 = 0.08$
$0.3l_2 = 0.32 \implies l_2 = \frac{0.32}{0.3} = \frac{3.2}{3} \approx 1.0667$.

So, $L = \begin{bmatrix} 1.0 \\ 1.0667 \end{bmatrix}$.

**Answer to Question 2:**
System matrices partitioned: $y(k) = x_1(k)$.
$A_{11} = 0.7$, $A_{12} = 0.3$
$A_{21} = -0.1$, $A_{22} = 0.9$
$B_1 = 0$, $B_2 = 1$

We need to estimate $x_2(k)$ using $\hat{x}_2(k)$.
Error dynamics: $e_2(k+1) = (A_{22} - L_2 A_{12})e_2(k)$.
Desired eigenvalue $\mu = 0.2$.
$0.9 - L_2 (0.3) = 0.2$
$0.3 L_2 = 0.9 - 0.2 = 0.7$
$L_2 = \frac{0.7}{0.3} = \frac{7}{3} \approx 2.3333$.

The observer gain is $L_2 = 2.3333$.

The observer equation for $\hat{x}_2(k)$ is:
$\hat{x}_2(k+1) = (A_{22} - L_2 A_{12})\hat{x}_2(k) + (A_{21} - L_2 A_{11})y(k) + (B_2 - L_2 B_1)u(k)$
$\hat{x}_2(k+1) = (0.9 - 2.3333 \times 0.3)\hat{x}_2(k) + (-0.1 - 2.3333 \times 0.7)y(k) + (1 - 2.3333 \times 0)u(k)$
$\hat{x}_2(k+1) = (0.9 - 0.7) \hat{x}_2(k) + (-0.1 - 1.6333)y(k) + 1 u(k)$
$\hat{x}_2(k+1) = 0.2 \hat{x}_2(k) - 1.7333 y(k) + u(k)$.

The estimated state is $\hat{x}(k) = \begin{bmatrix} y(k) \\ \hat{x}_2(k) \end{bmatrix}$.

---
This concludes Module 4 on State Observer Design. Remember to practice designing observers for different systems and to understand the trade-offs between full-order and reduced-order observers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
