---
title: "State Space Model, Analysis and Controller Design"
subject: "CONTROL SYSTEM LAB"
module: "Module 13: State Space Model, Analysis and Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3678d"
status: "completed"
scrapedAt: "2026-05-23T16:25:36.899Z"
---
# Control System Lab: Module 13 - State Space Model, Analysis and Controller Design

## Module Overview

This module introduces the powerful framework of state-space representation for dynamic systems. We will learn how to model systems in state-space, analyze their behavior using various techniques, and design controllers within this framework to achieve desired performance. This approach is particularly useful for multi-input, multi-output (MIMO) systems and for understanding the internal dynamics of a system.

## Learning Outcomes

By the end of this module, you will be able to:

*   **Understand and derive state-space models:** Convert transfer function representations to state-space and derive state-space models from physical system descriptions. (Related to CO1)
*   **Analyze system properties using state-space:** Determine system stability, controllability, and observability. (Related to CO3)
*   **Design state-feedback controllers:** Understand the concept of pole placement and design state-feedback controllers to meet performance specifications. (Related to CO4)
*   **Design observers (state estimators):** Understand the need for observers and design Luenberger observers to estimate unmeasured states. (Related to CO4)

## Course Outcomes Addressed in this Module

*   **CO1:** Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3) - *While this module focuses on modeling from existing information, understanding how physical system parameters translate into state-space equations is crucial for experimental modeling.*
*   **CO3:** Analyse a linear continuous time system model using simulation tools. (K3) - *We will learn the tools and techniques to analyze system properties like stability, controllability, and observability using simulation.*
*   **CO4:** Design suitable controllers/compensators to meet the performance requirements using simulation tools. (K5) - *This module directly addresses the design of state-feedback controllers and observers for performance enhancement.*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbook and Reference Material

This module draws heavily from the following texts:

*   **Primary:**
    *   Ogata, K. (2009). *Modern Control Engineering*. Pearson.
    *   Nise, N. S. (2009). *Control Systems Engineering*. Wiley.
    *   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering*. New Age.
*   **References:**
    *   Kuo, B. C. (n.d.). *Automatic Control Systems*. Prentice Hall of India.
    *   Gopal, M. (n.d.). *Control Systems Principles and Design*. Tata McGraw Hill.
    *   Dorf, R. C., & Bishop, R. H. (n.d.). *Modern Control Systems*. Pearson Education India.

---

## 1. State-Space Representation

The state-space representation is a mathematical model of a physical system in terms of its state variables, inputs, and outputs. It is expressed as a set of first-order differential equations.

### 1.1. Key Concepts and Definitions

*   **State Variables:** The minimum set of variables that completely describe the internal state of a dynamic system at any given time. Once the state variables and the input are known, the future behavior of the system is determined.
    *   **Examples:** For an RLC circuit, the voltage across the capacitor and the current through the inductor are natural choices for state variables. For a mechanical system with mass and spring, the position and velocity of the mass are state variables.
*   **State Vector ($\mathbf{x}(t)$):** A column vector containing the state variables.
    $ \mathbf{x}(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{bmatrix} $
    where $n$ is the order of the system.
*   **Input Vector ($\mathbf{u}(t)$):** A column vector containing the system inputs. For single-input systems, $\mathbf{u}(t) = [u(t)]$.
*   **Output Vector ($\mathbf{y}(t)$):** A column vector containing the system outputs. For single-output systems, $\mathbf{y}(t) = [y(t)]$.
*   **State Equation:** A first-order vector differential equation that describes how the state vector changes over time.
    $ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $
    where:
    *   $\mathbf{A}$ is the $n \times n$ **state matrix** (or system matrix).
    *   $\mathbf{B}$ is the $n \times m$ **input matrix** (or control matrix), where $m$ is the number of inputs.
*   **Output Equation:** An algebraic equation that relates the output vector to the state vector and the input vector.
    $ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $
    where:
    *   $\mathbf{C}$ is the $p \times n$ **output matrix** (or observation matrix), where $p$ is the number of outputs.
    *   $\mathbf{D}$ is the $p \times m$ **feedforward matrix** (or direct transmission matrix).

### 1.2. Deriving State-Space Models

#### 1.2.1. From Transfer Function

Given a transfer function $G(s) = \frac{Y(s)}{U(s)} = \frac{b_n s^n + b_{n-1} s^{n-1} + \dots + b_1 s + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0}$, we can derive various state-space representations. Common canonical forms include:

*   **Controller Canonical Form:**
    *   $\dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_0 & -a_1 & -a_2 & \dots & -a_{n-1} \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1/a_n \end{bmatrix} u(t)$
    *   $y(t) = \begin{bmatrix} b_0 & b_1 & b_2 & \dots & b_{n-1} \end{bmatrix} \mathbf{x}(t) + \frac{b_n}{a_n} u(t)$
    *   *Note:* If $a_n = 1$, then $\mathbf{B} = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix}$ and $\mathbf{D} = b_n$.

*   **Observer Canonical Form:**
    *   $\dot{\mathbf{x}}(t) = \begin{bmatrix} -a_{n-1} & -a_{n-2} & \dots & -a_1 & -a_0 \\ 1 & 0 & \dots & 0 & 0 \\ 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} b_{n-1} \\ b_{n-2} \\ \vdots \\ b_1 \\ b_0 \end{bmatrix} u(t)$
    *   $y(t) = \begin{bmatrix} 0 & 0 & \dots & 0 & 1 \end{bmatrix} \mathbf{x}(t) + \frac{b_n}{a_n} u(t)$
    *   *Note:* This form is particularly useful for designing observers.

*   **Diagonal Canonical Form (if poles are distinct):**
    *   $G(s) = \sum_{i=1}^n \frac{c_i}{s - p_i}$
    *   $\dot{\mathbf{x}}(t) = \begin{bmatrix} p_1 & 0 & \dots & 0 \\ 0 & p_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & p_n \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{bmatrix} u(t)$
    *   $y(t) = \begin{bmatrix} c_1 & c_2 & \dots & c_n \end{bmatrix} \mathbf{x}(t)$
    *   *Note:* For systems with repeated poles, Jordan canonical form is used.

**Example (Ogata, 5th Ed., Chapter 4, Example 4-1):**
Consider the transfer function $G(s) = \frac{Y(s)}{U(s)} = \frac{10}{s^2 + 2s + 10}$.
This can be written as $s^2 Y(s) + 2s Y(s) + 10 Y(s) = 10 U(s)$.
Dividing by $s^2$: $Y(s) + \frac{2}{s} Y(s) + \frac{10}{s^2} Y(s) = \frac{10}{s^2} U(s)$.

Let $u(t)$ be the input and $y(t)$ be the output.
We can define state variables based on the denominator polynomial. For controller canonical form, let:
$X_1(s) = \frac{1}{s^2 + 2s + 10} U(s)$
$X_2(s) = s X_1(s) = \frac{s}{s^2 + 2s + 10} U(s)$
Then $Y(s) = 10 X_1(s)$.

From $X_2(s) = s X_1(s)$, we get $\dot{x}_1(t) = x_2(t)$.
From $\frac{Y(s)}{U(s)} = \frac{10}{s^2 + 2s + 10}$, we have $(s^2 + 2s + 10)Y(s) = 10U(s)$.
If we consider $Y(s)$ as the output, and if we express $Y(s)$ in terms of state variables:
$Y(s) = 10 X_1(s)$.

Let's use a standard approach for controller canonical form.
$\frac{Y(s)}{U(s)} = \frac{b_n s^n + \dots + b_0}{s^n + a_{n-1} s^{n-1} + \dots + a_0}$
Let $X_1(s) = \frac{1}{s^n + a_{n-1} s^{n-1} + \dots + a_0} U(s)$.
Then $Y(s) = (b_n s^n + \dots + b_0) X_1(s)$.
The state variables are chosen as:
$X_1(s) = \frac{1}{s^n + a_{n-1} s^{n-1} + \dots + a_0} U(s)$
$X_2(s) = s X_1(s)$
...
$X_n(s) = s^{n-1} X_1(s)$

In our example, $G(s) = \frac{10}{s^2 + 2s + 10}$. So $n=2$, $a_2=1$, $a_1=2$, $a_0=10$, $b_1=0$, $b_0=10$.
Let $X_1(s) = \frac{1}{s^2 + 2s + 10} U(s)$.
Then $Y(s) = 10 X_1(s)$.
The state variables are $x_1(t)$ and $x_2(t)$, where $X_1(s) = X_1(s)$ and $X_2(s) = s X_1(s)$.
From $(s^2 + 2s + 10) X_1(s) = U(s)$:
$s^2 X_1(s) = -2s X_1(s) - 10 X_1(s) + U(s)$
$s X_2(s) = -2 X_2(s) - 10 X_1(s) + U(s)$
$\dot{x}_2(t) = -10 x_1(t) - 2 x_2(t) + u(t)$

The state equations are:
$\dot{x}_1(t) = x_2(t)$
$\dot{x}_2(t) = -10 x_1(t) - 2 x_2(t) + u(t)$

The output equation is:
$y(t) = 10 x_1(t)$

In matrix form (Controller Canonical Form):
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -10 & -2 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} 10 & 0 \end{bmatrix}, \mathbf{D} = [0] $

**Important:** The choice of state variables is not unique. Different choices lead to different state-space representations for the same system. The system's input-output behavior (transfer function) will be the same, but the internal dynamics described by $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$ will differ.

#### 1.2.2. From Physical Systems (CO1)

This involves identifying suitable state variables from the physical structure of the system and formulating the differential equations governing their behavior.

**Example (Nise, 5th Ed., Chapter 4, Example 4.3):**
Consider the mechanical system with mass $M$, spring constant $K$, and damping coefficient $B$.
Let $x_1$ be the position and $x_2$ be the velocity.
Force balance equation: $M \ddot{x} + B \dot{x} + K x = u(t)$
Dividing by $M$: $\ddot{x} + \frac{B}{M} \dot{x} + \frac{K}{M} x = \frac{1}{M} u(t)$

Define state variables:
$x_1(t) = x(t)$ (position)
$x_2(t) = \dot{x}(t)$ (velocity)

The state equations are:
$\dot{x}_1(t) = \dot{x}(t) = x_2(t)$
$\dot{x}_2(t) = \ddot{x}(t) = -\frac{K}{M} x(t) - \frac{B}{M} \dot{x}(t) + \frac{1}{M} u(t)$
$\dot{x}_2(t) = -\frac{K}{M} x_1(t) - \frac{B}{M} x_2(t) + \frac{1}{M} u(t)$

In matrix form:
$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -\frac{K}{M} & -\frac{B}{M} \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ \frac{1}{M} \end{bmatrix} u(t) $

If the output is the position, $y(t) = x(t)$:
$ \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}, \mathbf{D} = [0] $

**CO1 Alignment:** To perform experiments and determine parameters for modeling, you would need to:
1.  **Identify physical components:** Recognize masses, springs, dampers, inductors, capacitors, etc.
2.  **Choose state variables:** Select variables that define the system's energy storage or memory elements (e.g., position/velocity for mechanical, current/voltage for electrical).
3.  **Formulate equations of motion:** Apply physical laws (Newton's laws, Kirchhoff's laws) to derive differential equations.
4.  **Relate parameters to matrices:** Identify the coefficients in the derived equations with the system matrix $\mathbf{A}$, input matrix $\mathbf{B}$, output matrix $\mathbf{C}$, and feedforward matrix $\mathbf{D}$. Parameters like $M, B, K$ would be determined through experiments (e.g., measuring response to known inputs).

---

## 2. State-Space Analysis (CO3)

Analysis of a system's properties from its state-space representation.

### 2.1. Stability Analysis

A linear time-invariant (LTI) system is stable if its state vector $\mathbf{x}(t)$ remains bounded for all bounded inputs $\mathbf{u}(t)$. For a homogeneous system ($\mathbf{B}\mathbf{u}(t) = 0$), stability is determined by the eigenvalues of the state matrix $\mathbf{A}$.

*   **Concept:** The behavior of the homogeneous system $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t)$ is governed by the solutions of the characteristic equation:
    $ |\mathbf{A} - \lambda \mathbf{I}| = 0 $
    where $\lambda$ represents the eigenvalues and $\mathbf{I}$ is the identity matrix.
*   **Stability Criterion:**
    *   **Asymptotically Stable:** All eigenvalues of $\mathbf{A}$ have negative real parts. The system will return to its equilibrium point if the input is removed.
    *   **Marginally Stable:** At least one eigenvalue has a zero real part, and all other eigenvalues have negative real parts. Eigenvalues with zero real parts must be simple roots of the characteristic polynomial. The system will oscillate or remain at a constant value if the input is removed.
    *   **Unstable:** At least one eigenvalue has a positive real part, or there are repeated eigenvalues with zero real parts. The system's response will grow unbounded.

**Example (CO3):**
Consider a system with state matrix $ \mathbf{A} = \begin{bmatrix} -1 & 2 \\ 0 & -3 \end{bmatrix} $.
The characteristic equation is $|\mathbf{A} - \lambda \mathbf{I}| = \begin{vmatrix} -1-\lambda & 2 \\ 0 & -3-\lambda \end{vmatrix} = (-1-\lambda)(-3-\lambda) - 0 \times 2 = 0$.
$ (\lambda+1)(\lambda+3) = 0 $
The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -3$.
Since both eigenvalues have negative real parts, the system is asymptotically stable.

**Simulation Tool:** MATLAB/Octave can be used to find eigenvalues using the `eig(A)` command.

### 2.2. Controllability

A system is controllable if it is possible to steer the system from any initial state to any final state in a finite amount of time by applying a suitable control input $\mathbf{u}(t)$.

*   **Concept:** Controllability assesses whether the input $\mathbf{u}(t)$ has influence over the states of the system.
*   **Controllability Matrix ($ \mathbf{Q}_c $):** For a system in the form $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$, the controllability matrix is defined as:
    $ \mathbf{Q}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} & \mathbf{A}^2\mathbf{B} & \dots & \mathbf{A}^{n-1}\mathbf{B} \end{bmatrix} $
    where $n$ is the order of the system.
*   **Controllability Criterion:** The system is controllable if and only if the controllability matrix $ \mathbf{Q}_c $ has full rank, i.e., $rank(\mathbf{Q}_c) = n$.

**Example (CO3):**
Consider the system:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $
$n=2$.
$ \mathbf{Q}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} $
$ \mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -3 \end{bmatrix} $
$ \mathbf{Q}_c = \begin{bmatrix} 0 & 1 \\ 1 & -3 \end{bmatrix} $
The determinant of $ \mathbf{Q}_c $ is $ (0 \times -3) - (1 \times 1) = -1 $.
Since $det(\mathbf{Q}_c) \neq 0$, the rank is 2, which is equal to $n$. Therefore, the system is controllable.

**Simulation Tool:** MATLAB/Octave can calculate the controllability matrix and its rank. For example, `ctrb(A, B)` generates the controllability matrix, and `rank(ctrb(A, B))` gives its rank.

### 2.3. Observability

A system is observable if it is possible to determine the initial state of the system from the output and the input over a finite time interval.

*   **Concept:** Observability assesses whether the output $\mathbf{y}(t)$ contains enough information to infer the internal states of the system.
*   **Observability Matrix ($ \mathbf{Q}_o $):** For a system in the form $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$ and $\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$, the observability matrix is defined as:
    $ \mathbf{Q}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \\ \mathbf{C}\mathbf{A}^2 \\ \vdots \\ \mathbf{C}\mathbf{A}^{n-1} \end{bmatrix} $
    where $n$ is the order of the system.
*   **Observability Criterion:** The system is observable if and only if the observability matrix $ \mathbf{Q}_o $ has full rank, i.e., $rank(\mathbf{Q}_o) = n$.

**Example (CO3):**
Consider the system:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix} $
$n=2$.
$ \mathbf{Q}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \end{bmatrix} $
$ \mathbf{C}\mathbf{A} = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix} $
$ \mathbf{Q}_o = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} $
The determinant of $ \mathbf{Q}_o $ is $ (1 \times 1) - (0 \times 0) = 1 $.
Since $det(\mathbf{Q}_o) \neq 0$, the rank is 2, which is equal to $n$. Therefore, the system is observable.

**Simulation Tool:** MATLAB/Octave can calculate the observability matrix and its rank. For example, `obsv(A, C)` generates the observability matrix, and `rank(obsv(A, C))` gives its rank.

**Duality:** There's a duality between controllability and observability. A system $(A, B, C)$ is controllable if and only if its dual system $(A^T, C^T, B^T)$ is observable. This is a crucial theoretical link. (Ogata, 5th Ed., Section 4-5)

---

## 3. State-Space Controller Design (CO4)

### 3.1. State-Feedback Control and Pole Placement

*   **Concept:** In state-feedback control, the control signal $\mathbf{u}(t)$ is a linear combination of the state variables:
    $ \mathbf{u}(t) = -\mathbf{K}\mathbf{x}(t) $
    where $\mathbf{K}$ is the $m \times n$ state-feedback gain matrix. The negative sign is conventional and signifies that the feedback is typically negative.
*   **Objective:** By choosing an appropriate gain matrix $\mathbf{K}$, we can place the closed-loop poles (eigenvalues of the closed-loop system matrix) at desired locations in the complex plane, thereby achieving desired transient and steady-state responses.
*   **Closed-Loop System Matrix:** Substituting $\mathbf{u}(t) = -\mathbf{K}\mathbf{x}(t)$ into the state equation:
    $ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}(-\mathbf{K}\mathbf{x}(t)) $
    $ \dot{\mathbf{x}}(t) = (\mathbf{A} - \mathbf{B}\mathbf{K})\mathbf{x}(t) $
    The closed-loop system matrix is $ \mathbf{A}_{cl} = \mathbf{A} - \mathbf{B}\mathbf{K} $.
*   **Pole Placement Condition:** For a controllable system, it is possible to design a state-feedback gain matrix $\mathbf{K}$ such that the closed-loop system matrix $ \mathbf{A}_{cl} $ has any desired set of $n$ eigenvalues (poles).
*   **Design Methods:**
    *   **Direct Method (using Characteristic Polynomial):**
        1.  Determine the desired closed-loop characteristic polynomial $D_{cl}(\lambda) = (\lambda - \lambda_1)(\lambda - \lambda_2)\dots(\lambda - \lambda_n)$, where $\lambda_i$ are the desired pole locations.
        2.  Express the characteristic polynomial of the open-loop system matrix $ \mathbf{A} $ in controller canonical form: $D_{ol}(\lambda) = \lambda^n + a_{n-1} \lambda^{n-1} + \dots + a_1 \lambda + a_0$.
        3.  Assume a general state-feedback matrix $\mathbf{K} = \begin{bmatrix} k_1 & k_2 & \dots & k_n \end{bmatrix}$ (for a single input system).
        4.  Calculate the closed-loop system matrix $ \mathbf{A}_{cl} = \mathbf{A} - \mathbf{B}\mathbf{K} $.
        5.  Find the characteristic polynomial of $ \mathbf{A}_{cl} $.
        6.  Equate the coefficients of the closed-loop characteristic polynomial with the desired characteristic polynomial to solve for the unknown gains $k_1, k_2, \dots, k_n$.
        *   *This method is generally suitable for systems already in controller canonical form.*

    *   **Ackermann's Formula (for single-input systems):**
        This formula directly calculates the state-feedback gain matrix $\mathbf{K}$ for a controllable system to place the poles at desired locations.
        $ \mathbf{K} = [\begin{matrix} 0 & 0 & \dots & 1 \end{matrix}] \mathbf{Q}_c^{-1} D_{cl}(\mathbf{A}) $
        where:
        *   $ D_{cl}(\mathbf{A}) $ is the desired characteristic polynomial evaluated at matrix $\mathbf{A}$.
        *   $ \mathbf{Q}_c $ is the controllability matrix.
        *   $ [\begin{matrix} 0 & 0 & \dots & 1 \end{matrix}] $ is a $1 \times n$ row vector.
        *   *Note:* For a system in controller canonical form, $ \mathbf{Q}_c^{-1} D_{cl}(\mathbf{A}) $ simplifies.

    *   **Linear Matrix Inequalities (LMIs) and Optimization-based methods:** More advanced techniques for designing controllers with robustness and other performance constraints. (Beyond the scope of basic notes, but mentioned in advanced texts).

**Example (CO4 - Pole Placement):**
Consider the controllable system:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $
Let the desired closed-loop poles be at $\lambda_1 = -4$ and $\lambda_2 = -5$.
The desired characteristic polynomial is:
$ D_{cl}(\lambda) = (\lambda - (-4))(\lambda - (-5)) = (\lambda + 4)(\lambda + 5) = \lambda^2 + 9\lambda + 20 $

**Using the Direct Method (Controller Canonical Form):**
The system is already in controller canonical form.
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -a_0 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} $
$ \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $
Let $ \mathbf{K} = \begin{bmatrix} k_1 & k_2 \end{bmatrix} $.
$ \mathbf{A}_{cl} = \mathbf{A} - \mathbf{B}\mathbf{K} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} - \begin{bmatrix} 0 \\ 1 \end{bmatrix} \begin{bmatrix} k_1 & k_2 \end{bmatrix} $
$ \mathbf{A}_{cl} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} - \begin{bmatrix} 0 & 0 \\ k_1 & k_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -2-k_1 & -3-k_2 \end{bmatrix} $

The characteristic polynomial of $ \mathbf{A}_{cl} $ is:
$ |\mathbf{A}_{cl} - \lambda \mathbf{I}| = \begin{vmatrix} -\lambda & 1 \\ -2-k_1 & -3-k_2-\lambda \end{vmatrix} = (-\lambda)(-3-k_2-\lambda) - 1(-2-k_1) $
$ = \lambda^2 + (3+k_2)\lambda + (2+k_1) $

Equating coefficients with $ D_{cl}(\lambda) = \lambda^2 + 9\lambda + 20 $:
$ 3+k_2 = 9 \implies k_2 = 6 $
$ 2+k_1 = 20 \implies k_1 = 18 $
So, the state-feedback gain matrix is $ \mathbf{K} = \begin{bmatrix} 18 & 6 \end{bmatrix} $.

**Using Ackermann's Formula:**
$ \mathbf{Q}_c = \begin{bmatrix} 0 & 1 \\ 1 & -3 \end{bmatrix} $
$ \mathbf{Q}_c^{-1} = \frac{1}{-1} \begin{bmatrix} -3 & -1 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 3 & 1 \\ 1 & 0 \end{bmatrix} $
$ D_{cl}(\mathbf{A}) = \mathbf{A}^2 + 9\mathbf{A} + 20\mathbf{I} $
$ \mathbf{A}^2 = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix} $
$ D_{cl}(\mathbf{A}) = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix} + 9 \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} + 20 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} $
$ D_{cl}(\mathbf{A}) = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix} + \begin{bmatrix} 0 & 9 \\ -18 & -27 \end{bmatrix} + \begin{bmatrix} 20 & 0 \\ 0 & 20 \end{bmatrix} = \begin{bmatrix} 18 & 6 \\ -12 & 0 \end{bmatrix} $

$ \mathbf{K} = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{Q}_c^{-1} D_{cl}(\mathbf{A}) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 3 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 18 & 6 \\ -12 & 0 \end{bmatrix} $
$ \mathbf{K} = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 18 & 6 \\ -12 & 0 \end{bmatrix} = \begin{bmatrix} 18 & 6 \end{bmatrix} $
Both methods yield the same result.

**Simulation Tool:** MATLAB's `place` function can directly compute the state-feedback gain matrix for pole placement: `K = place(A, B, desired_poles)`.

**CO4 Alignment:** This section directly addresses designing controllers to meet performance requirements (defined by pole locations) using simulation tools.

### 3.2. Observers (State Estimators)

*   **Need for Observers:** In many practical systems, not all state variables are measurable directly. Observers are used to estimate the unmeasurable states based on the system's inputs and measurable outputs.
*   **Luenberger Observer:** A common type of observer that reconstructs the state vector.
    *   **Concept:** The observer is a model of the system itself, but with an additional term that corrects the estimated state based on the difference between the actual output and the estimated output.
    *   **Observer State Equation:**
        $ \dot{\hat{\mathbf{x}}}(t) = \mathbf{A}\hat{\mathbf{x}}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{L}(\mathbf{y}(t) - \hat{\mathbf{y}}(t)) $
        where:
        *   $\hat{\mathbf{x}}(t)$ is the estimated state vector.
        *   $\hat{\mathbf{y}}(t) = \mathbf{C}\hat{\mathbf{x}}(t) + \mathbf{D}\mathbf{u}(t)$ is the estimated output.
        *   $\mathbf{L}$ is the $n \times p$ observer gain matrix (or corrector matrix).
    *   **Simplified Observer Structure:** If $\mathbf{D} = \mathbf{0}$ and for a single output system ($p=1$):
        $ \dot{\hat{\mathbf{x}}}(t) = \mathbf{A}\hat{\mathbf{x}}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{l}(\mathbf{y}(t) - \mathbf{C}\hat{\mathbf{x}}(t)) $
        $ \dot{\hat{\mathbf{x}}}(t) = (\mathbf{A} - \mathbf{l}\mathbf{C})\hat{\mathbf{x}}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{l}\mathbf{y}(t) $
        The observer error dynamics is given by:
        $ \dot{\mathbf{e}}(t) = \dot{\mathbf{x}}(t) - \dot{\hat{\mathbf{x}}}(t) = (\mathbf{A} - \mathbf{l}\mathbf{C})\mathbf{e}(t) $
        where $ \mathbf{e}(t) = \mathbf{x}(t) - \hat{\mathbf{x}}(t) $ is the estimation error.
    *   **Observer Design (Pole Placement):** The observer error dynamics is governed by the matrix $ \mathbf{A}_{obs} = \mathbf{A} - \mathbf{l}\mathbf{C} $. We want the eigenvalues of $ \mathbf{A}_{obs} $ to be in the left-half plane, typically faster than the closed-loop system poles. The observer gain matrix $ \mathbf{l} $ can be designed using pole placement techniques.
    *   **Observer Pole Placement Condition:** A system $(A, C)$ is observable if and only if it is possible to design an observer gain matrix $\mathbf{l}$ such that the observer error dynamics matrix $ \mathbf{A} - \mathbf{l}\mathbf{C} $ has any desired set of $n$ eigenvalues.
    *   **Ackermann's Formula for Observer Design:** For a single-output system:
        $ \mathbf{l} = (\mathbf{Q}_o^T)^{-1} [\begin{matrix} 0 \\ 0 \\ \vdots \\ 1 \end{matrix}] D_{obs}(\mathbf{A}) $
        where $ D_{obs}(\mathbf{A}) $ is the desired observer characteristic polynomial evaluated at matrix $\mathbf{A}$, and $ \mathbf{Q}_o $ is the observability matrix.

**Example (CO4 - Observer Design):**
Consider the observable system:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix} $
Let the desired observer poles be at $\lambda_1 = -10$ and $\lambda_2 = -11$. These should be faster than the desired closed-loop system poles (e.g., -4, -5).
The desired observer characteristic polynomial is:
$ D_{obs}(\lambda) = (\lambda - (-10))(\lambda - (-11)) = (\lambda + 10)(\lambda + 11) = \lambda^2 + 21\lambda + 110 $

**Using Observer Canonical Form and Ackermann's Formula:**
The system is not in observer canonical form. However, we can utilize the dual relationship. The dual system is:
$ \mathbf{A}^T = \begin{bmatrix} 0 & -2 \\ 1 & -3 \end{bmatrix}, \mathbf{C}^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix} $
This dual system is in controller canonical form. Let's find the state-feedback gain $ \mathbf{k}_o^T $ for the dual system to place its poles at $-10, -11$.
$ \mathbf{A}_{dual} = \mathbf{A}^T, \mathbf{B}_{dual} = \mathbf{C}^T $
$ D_{cl}(\lambda) $ for dual system is $ \lambda^2 + 21\lambda + 110 $.
$ \mathbf{A}_{dual} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} $ (Wait, this is the original A, so the dual is not controller canonical here. Let's use observer canonical form for the original A).

Let's consider the system in observer canonical form and then apply Ackermann's formula or directly solve.
For $ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} $, the observer canonical form is:
$ \mathbf{A}_{obs} = \begin{bmatrix} -a_{n-1} & -a_{n-2} \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} -(-3) & -(-2) \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 3 & 2 \\ 1 & 0 \end{bmatrix} $ (This is not quite right, the standard observer canonical form has $-\alpha_i$ on the first row).
Let's stick to the definition $ \mathbf{A}_{obs} = \mathbf{A} - \mathbf{l}\mathbf{C} $.
$ \mathbf{A}_{obs} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} - \begin{bmatrix} l_1 \\ l_2 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} - \begin{bmatrix} l_1 & 0 \\ l_2 & 0 \end{bmatrix} = \begin{bmatrix} -l_1 & 1 \\ -2-l_2 & -3 \end{bmatrix} $

The characteristic polynomial of $ \mathbf{A}_{obs} $ is:
$ |\mathbf{A}_{obs} - \lambda \mathbf{I}| = \begin{vmatrix} -l_1-\lambda & 1 \\ -2-l_2 & -3-\lambda \end{vmatrix} = (-l_1-\lambda)(-3-\lambda) - 1(-2-l_2) $
$ = (l_1+\lambda)(3+\lambda) + (2+l_2) = 3l_1 + l_1\lambda + 3\lambda + \lambda^2 + 2 + l_2 $
$ = \lambda^2 + (l_1+3)\lambda + (3l_1+l_2+2) $

Equating coefficients with $ D_{obs}(\lambda) = \lambda^2 + 21\lambda + 110 $:
$ l_1+3 = 21 \implies l_1 = 18 $
$ 3l_1+l_2+2 = 110 \implies 3(18)+l_2+2 = 110 \implies 54+l_2+2 = 110 \implies l_2 = 110 - 56 = 54 $
So, the observer gain matrix is $ \mathbf{l} = \begin{bmatrix} 18 \\ 54 \end{bmatrix} $.

**Simulation Tool:** MATLAB's `place` function can also be used for observer pole placement: `l = place(A', C', desired_observer_poles)'`. Note the use of transpose for $A'$ and $C'$ because `place` is designed for controllable systems and we are using the dual observability property.

**CO4 Alignment:** Designing observers is crucial for implementing state-feedback control when states are not directly measurable. This aligns with designing controllers to meet performance requirements.

### 3.3. Combined Controller and Observer (Standard Observer-Based Controller)

In practice, when states are not measured, we use the estimated states from an observer to implement the state-feedback control law.
$ \mathbf{u}(t) = -\mathbf{K}\hat{\mathbf{x}}(t) $

The overall closed-loop system with an observer-based controller involves the original system dynamics, the state-feedback law, and the observer dynamics. The separation principle states that for a linear system with Gaussian noise and quadratic cost, the optimal controller and observer design can be performed independently.

---

## 4. Practice Questions and Exercises

**Q1. State-Space Modeling (CO1):**
Derive the state-space representation in controller canonical form for the following transfer function:
$ G(s) = \frac{2s + 5}{s^3 + 6s^2 + 11s + 6} $

**Answer:**
The transfer function is $ G(s) = \frac{b_2 s + b_1}{s^3 + a_2 s^2 + a_1 s + a_0} $.
Here, $a_0=6, a_1=11, a_2=6$, and $b_1=5, b_2=2$. (Assuming $a_3=1$)
Controller Canonical Form:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -a_0 & -a_1 & -a_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -6 & -11 & -6 \end{bmatrix} $
$ \mathbf{B} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} $
$ \mathbf{C} = \begin{bmatrix} b_0 & b_1 & b_2 \end{bmatrix} $ (Since $b_0=0$ in this case) $= \begin{bmatrix} 0 & 5 & 2 \end{bmatrix} $
$ \mathbf{D} = [0] $

**Q2. Stability Analysis (CO3):**
Determine the stability of a system with the state matrix:
$ \mathbf{A} = \begin{bmatrix} -2 & 1 & 0 \\ 0 & -4 & 3 \\ 0 & 0 & -1 \end{bmatrix} $

**Answer:**
The eigenvalues of an upper triangular matrix are its diagonal elements.
The eigenvalues are $\lambda_1 = -2$, $\lambda_2 = -4$, $\lambda_3 = -1$.
Since all eigenvalues have negative real parts, the system is asymptotically stable.

**Q3. Controllability and Observability (CO3):**
For the system:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix} $
Determine if the system is controllable and observable.

**Answer:**
**Controllability:**
$ \mathbf{Q}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} $
$ \mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix} $
$ \mathbf{Q}_c = \begin{bmatrix} 0 & 1 \\ 1 & -1 \end{bmatrix} $
$ det(\mathbf{Q}_c) = (0)(-1) - (1)(1) = -1 \neq 0 $. Rank is 2. The system is controllable.

**Observability:**
$ \mathbf{Q}_o = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \end{bmatrix} $
$ \mathbf{C}\mathbf{A} = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix} $
$ \mathbf{Q}_o = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} $
$ det(\mathbf{Q}_o) = (1)(1) - (0)(0) = 1 \neq 0 $. Rank is 2. The system is observable.

**Q4. State-Feedback Design (CO4):**
Consider the controllable system from Q3:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $
Design a state-feedback controller $ \mathbf{u} = -\mathbf{K}\mathbf{x} $ to place the closed-loop poles at $-3$ and $-4$.

**Answer:**
Desired characteristic polynomial: $D_{cl}(\lambda) = (\lambda+3)(\lambda+4) = \lambda^2 + 7\lambda + 12$.
The system is in controller canonical form with $a_0 = -1, a_1 = -1$.
Let $ \mathbf{K} = \begin{bmatrix} k_1 & k_2 \end{bmatrix} $.
$ \mathbf{A}_{cl} = \mathbf{A} - \mathbf{B}\mathbf{K} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix} - \begin{bmatrix} 0 \\ 1 \end{bmatrix} \begin{bmatrix} k_1 & k_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1-k_1 & -1-k_2 \end{bmatrix} $
Characteristic polynomial of $ \mathbf{A}_{cl} $:
$ |\mathbf{A}_{cl} - \lambda \mathbf{I}| = \begin{vmatrix} -\lambda & 1 \\ -1-k_1 & -1-k_2-\lambda \end{vmatrix} = (-\lambda)(-1-k_2-\lambda) - 1(-1-k_1) $
$ = \lambda^2 + (1+k_2)\lambda + (1+k_1) $
Equating coefficients with $ \lambda^2 + 7\lambda + 12 $:
$ 1+k_2 = 7 \implies k_2 = 6 $
$ 1+k_1 = 12 \implies k_1 = 11 $
So, $ \mathbf{K} = \begin{bmatrix} 11 & 6 \end{bmatrix} $.

**Q5. Observer Design (CO4):**
For the observable system from Q3:
$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix} $
Design a Luenberger observer gain $ \mathbf{l} $ such that the observer error dynamics poles are at $-5$ and $-6$.

**Answer:**
Desired observer characteristic polynomial: $D_{obs}(\lambda) = (\lambda+5)(\lambda+6) = \lambda^2 + 11\lambda + 30$.
$ \mathbf{A}_{obs} = \mathbf{A} - \mathbf{l}\mathbf{C} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix} - \begin{bmatrix} l_1 \\ l_2 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} -l_1 & 1 \\ -1-l_2 & -1 \end{bmatrix} $
Characteristic polynomial of $ \mathbf{A}_{obs} $:
$ |\mathbf{A}_{obs} - \lambda \mathbf{I}| = \begin{vmatrix} -l_1-\lambda & 1 \\ -1-l_2 & -1-\lambda \end{vmatrix} = (-l_1-\lambda)(-1-\lambda) - 1(-1-l_2) $
$ = (l_1+\lambda)(1+\lambda) + (1+l_2) = l_1 + l_1\lambda + \lambda + \lambda^2 + 1 + l_2 $
$ = \lambda^2 + (l_1+1)\lambda + (l_1+l_2+1) $
Equating coefficients with $ \lambda^2 + 11\lambda + 30 $:
$ l_1+1 = 11 \implies l_1 = 10 $
$ l_1+l_2+1 = 30 \implies 10+l_2+1 = 30 \implies l_2 = 19 $
So, $ \mathbf{l} = \begin{bmatrix} 10 \\ 19 \end{bmatrix} $.

---

## 5. Important Points to Remember

*   **State Variables:** Minimum set to describe system's internal state. Not unique.
*   **State-Space Form:** $\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$, $\mathbf{y} = \mathbf{C}\mathbf{x} + \mathbf{D}\mathbf{u}$.
*   **Stability:** Determined by eigenvalues of $\mathbf{A}$. All eigenvalues must have negative real parts for asymptotic stability.
*   **Controllability:** System can be driven to any desired state. Checked by rank of $\mathbf{Q}_c$.
*   **Observability:** All states can be determined from output. Checked by rank of $\mathbf{Q}_o$.
*   **State-Feedback:** $\mathbf{u} = -\mathbf{K}\mathbf{x}$. Used for pole placement to meet performance specs.
*   **Pole Placement:** Ability to arbitrarily assign closed-loop poles for controllable systems. Ackermann's formula is a direct method.
*   **Observers:** Estimate unmeasured states. Luenberger observer uses output error feedback. Observer poles should be faster than controller poles.
*   **Simulation Tools:** MATLAB/Octave are essential for analyzing controllability, observability, and designing controllers/observers.

---

This concludes the study notes for Module 13. Remember to practice these concepts with the provided examples and exercises, and utilize simulation tools effectively for analysis and design.