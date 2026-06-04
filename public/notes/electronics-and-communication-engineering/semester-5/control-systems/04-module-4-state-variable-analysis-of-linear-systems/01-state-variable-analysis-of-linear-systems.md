---
title: "State Variable Analysis of Linear Systems:"
subject: "CONTROL SYSTEMS"
module: "Module 4: State Variable Analysis of Linear Systems:"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe961"
status: "completed"
scrapedAt: "2026-05-23T17:54:48.932Z"
---
# Module 4: State Variable Analysis of Linear Systems

This module introduces the powerful technique of state variable analysis, a modern approach to understanding and controlling linear systems. Unlike the traditional transfer function method, state variable analysis provides a more comprehensive view of system behavior by considering the internal states of the system.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental concepts of state variable analysis.
*   Represent linear systems in state-space form.
*   Derive the state transition matrix and understand its significance.
*   Analyze the time-domain response of linear systems using state-space equations.
*   Determine the controllability and observability of linear systems.

## 1. Introduction to State Variable Analysis

State variable analysis offers a unified approach to analyzing both single-input, single-output (SISO) and multiple-input, multiple-output (MIMO) systems. It is particularly useful for analyzing complex systems with internal dynamics.

### 1.1 Key Concepts and Definitions

*   **State Variables:** The minimum set of variables required to describe the complete behavior of a dynamic system. These variables, along with the system's inputs, uniquely determine the future states of the system. For an $n$-th order system, $n$ state variables are required.
    *   **Examples:**
        *   For an inductor, the state variable is the **current through it**.
        *   For a capacitor, the state variable is the **voltage across it**.
        *   For a mechanical system with mass and damper, the state variables are **position and velocity**.

*   **State Vector ($\mathbf{x}(t)$):** A column vector formed by the state variables. For an $n$-th order system, the state vector is an $n \times 1$ vector:
    $$ \mathbf{x}(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{bmatrix} $$

*   **State Space:** The $n$-dimensional space whose axes are the state variables. The trajectory of the state vector in the state space describes the system's behavior.

*   **Input Vector ($\mathbf{u}(t)$):** A column vector representing the external inputs to the system. For a system with $r$ inputs, the input vector is an $r \times 1$ vector.

*   **Output Vector ($\mathbf{y}(t)$):** A column vector representing the measured outputs of the system. For a system with $m$ outputs, the output vector is an $m \times 1$ vector.

*   **State Equation:** A first-order differential equation that describes how the state vector changes with time. It is typically expressed in the form:
    $$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
    where:
    *   $\dot{\mathbf{x}}(t)$ is the time derivative of the state vector.
    *   $\mathbf{A}$ is the $n \times n$ **system matrix** (or state matrix). It describes the internal dynamics of the system.
    *   $\mathbf{B}$ is the $n \times r$ **input matrix** (or control matrix). It relates the inputs to the rate of change of the state variables.

*   **Output Equation:** An algebraic equation that relates the output vector to the state vector and the input vector. It is typically expressed in the form:
    $$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$
    where:
    *   $\mathbf{C}$ is the $m \times n$ **output matrix**. It relates the state variables to the outputs.
    *   $\mathbf{D}$ is the $m \times r$ **feedforward matrix**. It relates the inputs directly to the outputs.

The set of equations:
$$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
$$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$
is known as the **state-space representation** or **state-space model** of the linear system.

**Important Point:** The state-space representation is not unique. Different choices of state variables can lead to different state-space representations for the same system. However, these representations are related through a similarity transformation.

### 1.2 Deriving State-Space Representation

The state-space representation can be derived from the differential equations governing a system or from its transfer function.

#### 1.2.1 From Differential Equations

**Example 1.1:** Consider a second-order system described by the differential equation:
$$ \ddot{y}(t) + 3\dot{y}(t) + 2y(t) = u(t) $$
where $y(t)$ is the output and $u(t)$ is the input.

**Steps:**
1.  **Define State Variables:** For an $n$-th order system, we typically choose the output and its first $n-1$ derivatives as state variables.
    Let $x_1(t) = y(t)$
    Let $x_2(t) = \dot{y}(t)$

2.  **Express Derivatives of State Variables:**
    $\dot{x}_1(t) = \dot{y}(t) = x_2(t)$
    $\dot{x}_2(t) = \ddot{y}(t)$

3.  **Rewrite the Original Differential Equation in terms of State Variables:**
    From the given equation: $\ddot{y}(t) = -2y(t) - 3\dot{y}(t) + u(t)$
    Substituting state variables: $\dot{x}_2(t) = -2x_1(t) - 3x_2(t) + u(t)$

4.  **Formulate the State Equations:**
    $$ \dot{x}_1(t) = 0x_1(t) + 1x_2(t) + 0u(t) $$
    $$ \dot{x}_2(t) = -2x_1(t) - 3x_2(t) + 1u(t) $$
    In matrix form:
    $$ \begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
    So, $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$ and $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

5.  **Formulate the Output Equation:**
    The output is $y(t)$, which we defined as $x_1(t)$.
    $$ y(t) = 1x_1(t) + 0x_2(t) + 0u(t) $$
    In matrix form:
    $$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 0 \end{bmatrix} u(t) $$
    So, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$ and $\mathbf{D} = \begin{bmatrix} 0 \end{bmatrix}$.

    The state-space representation is:
    $$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
    $$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) + 0 u(t) $$

**Alternative Choice of State Variables:** We can choose other state variables. For example, let $x_1 = y$ and $x_2 = \dot{y} + \alpha y$. This leads to a different state-space representation but is equivalent. The standard approach is usually preferred for simplicity.

#### 1.2.2 From Transfer Function

For a SISO system with transfer function $G(s) = \frac{Y(s)}{U(s)}$, we can obtain various state-space representations using different canonical forms.

**General Transfer Function:**
$$ G(s) = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0}{s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0} $$
where $n \ge m$.

**1. Controllable Canonical Form (CCF):**
This form is derived by rearranging the transfer function as:
$$ G(s) = \frac{1}{s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0} (b_m s^m + \dots + b_0) $$
$$ G(s) = \frac{1}{s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0} Y(s) $$
$$ Y(s) = \frac{1}{s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0} X_1(s) $$
where $X_1(s)$ is an intermediate signal.
The denominator polynomial relates to the characteristic equation of the system.

If we have $G(s) = \frac{Y(s)}{U(s)}$, we can write it as:
$$ Y(s) = G(s) U(s) = \frac{b_m s^m + \dots + b_0}{s^n + a_{n-1} s^{n-1} + \dots + a_0} U(s) $$
$$ (s^n + a_{n-1} s^{n-1} + \dots + a_0) Y(s) = (b_m s^m + \dots + b_0) U(s) $$

In the controllable canonical form, the state variables are chosen such that the system matrix $\mathbf{A}$ has the coefficients of the characteristic polynomial in its last row.

For a transfer function $G(s) = \frac{b_n s^{n-1} + b_{n-1} s^{n-2} + \dots + b_1}{s^n + a_{n-1} s^{n-1} + \dots + a_0}$, the CCF state-space representation is:
$$ \mathbf{A}_{CCF} = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_0 & -a_1 & -a_2 & \dots & -a_{n-1} \end{bmatrix}, \quad \mathbf{B}_{CCF} = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} $$
$$ \mathbf{C}_{CCF} = \begin{bmatrix} b_0 & b_1 & b_2 & \dots & b_{n-1} \end{bmatrix}, \quad \mathbf{D}_{CCF} = b_n $$
(Note: The numerator coefficients are often indexed from $b_0$ to $b_{n-1}$ for a polynomial of degree $n-1$ when the denominator is monic of degree $n$. If the numerator degree is $m$, $b_i$ for $i>m$ would be zero).

**Example 1.2:** Obtain the controllable canonical form for the transfer function:
$$ G(s) = \frac{s+2}{s^2 + 3s + 2} $$
Here, $n=2$, $a_1=3$, $a_0=2$. The numerator coefficients are $b_1=1$, $b_0=2$.
$$ \mathbf{A}_{CCF} = \begin{bmatrix} 0 & 1 \\ -a_0 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} $$
$$ \mathbf{B}_{CCF} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$
$$ \mathbf{C}_{CCF} = \begin{bmatrix} b_0 & b_1 \end{bmatrix} = \begin{bmatrix} 2 & 1 \end{bmatrix} $$
$$ \mathbf{D}_{CCF} = 0 $$

This yields the state-space representation:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 2 & 1 \end{bmatrix} \mathbf{x}(t) + 0 u(t) $$

*Reference: Ogata, Chapter 2; Kuo & Golnaraghi, Chapter 6.*

**2. Observable Canonical Form (OCF):**
In this form, the system matrix $\mathbf{A}$ has the coefficients of the characteristic polynomial in its first column.

For a transfer function $G(s) = \frac{b_n s^{n-1} + b_{n-1} s^{n-2} + \dots + b_1}{s^n + a_{n-1} s^{n-1} + \dots + a_0}$, the OCF state-space representation is:
$$ \mathbf{A}_{OCF} = \begin{bmatrix} -a_{n-1} & -a_{n-2} & \dots & -a_1 & -a_0 \\ 1 & 0 & \dots & 0 & 0 \\ 0 & 1 & \dots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & 0 \end{bmatrix}, \quad \mathbf{B}_{OCF} = \begin{bmatrix} b_{n-1} \\ b_{n-2} \\ \vdots \\ b_1 \\ b_0 \end{bmatrix} $$
$$ \mathbf{C}_{OCF} = \begin{bmatrix} 0 & 0 & \dots & 0 & 1 \end{bmatrix}, \quad \mathbf{D}_{OCF} = b_n $$
(Note: For a transfer function $\frac{b_m s^m + \dots + b_0}{s^n + \dots}$, the $\mathbf{B}$ vector can be adjusted. If the numerator degree is less than $n-1$, leading zeros might be added to the $\mathbf{B}$ vector's top. If $b_n$ is the coefficient of $s^{n-1}$ in the numerator, it's included in $\mathbf{D}$.)

**Example 1.3:** Obtain the observable canonical form for the transfer function:
$$ G(s) = \frac{s+2}{s^2 + 3s + 2} $$
Here, $n=2$, $a_1=3$, $a_0=2$. The numerator coefficients are $b_1=1$, $b_0=2$.
$$ \mathbf{A}_{OCF} = \begin{bmatrix} -a_1 & -a_0 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} -3 & -2 \\ 1 & 0 \end{bmatrix} $$
$$ \mathbf{B}_{OCF} = \begin{bmatrix} b_0 \\ b_1 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix} $$
$$ \mathbf{C}_{OCF} = \begin{bmatrix} 0 & 1 \end{bmatrix} $$
$$ \mathbf{D}_{OCF} = 0 $$

This yields the state-space representation:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} -3 & -2 \\ 1 & 0 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 2 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(t) + 0 u(t) $$

*Reference: Ogata, Chapter 2; Kuo & Golnaraghi, Chapter 6.*

**Important Point:** The characteristic polynomial (determinant of $(sI - A)$) is invariant under similarity transformations. Therefore, both CCF and OCF for the same transfer function will have the same characteristic polynomial, which is the denominator of the transfer function.

## 2. Solution of State Equations

The state equation is a first-order linear vector differential equation. The solution depends on the initial state vector $\mathbf{x}(t_0)$ and the input vector $\mathbf{u}(t)$ from $t_0$ to $t$.

### 2.1 The State Transition Matrix ($\Phi(t, t_0)$)

The solution to the homogeneous state equation ($\mathbf{u}(t) = 0$) is:
$$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) $$
This is analogous to the scalar differential equation $\dot{x}(t) = ax(t)$, whose solution is $x(t) = x(t_0)e^{a(t-t_0)}$.

The solution to the vector differential equation is given by:
$$ \mathbf{x}(t) = \Phi(t, t_0) \mathbf{x}(t_0) $$
where $\Phi(t, t_0)$ is the **state transition matrix**. It is defined as the solution to the homogeneous equation with the initial condition $\mathbf{x}(t_0) = \mathbf{I}$ (identity matrix).

For a time-invariant system where $\mathbf{A}$ is constant, the state transition matrix has a simpler form:
$$ \Phi(t, t_0) = e^{\mathbf{A}(t-t_0)} $$
This is the matrix exponential.

#### 2.1.1 Properties of the State Transition Matrix

*   $\Phi(t, t_0) = e^{\mathbf{A}(t-t_0)}$
*   $\Phi(t_0, t_0) = e^{\mathbf{A}(0)} = \mathbf{I}$ (Identity matrix)
*   $\Phi(t_1, t_0) = \Phi(t_1, t) \Phi(t, t_0)$
*   $\Phi(t_0, t) = \Phi^{-1}(t, t_0)$
*   $\frac{\partial}{\partial t} \Phi(t, t_0) = \mathbf{A} \Phi(t, t_0) = \Phi(t, t_0) \mathbf{A}$

#### 2.1.2 Calculation of the State Transition Matrix

The matrix exponential $e^{\mathbf{A}t}$ can be calculated using several methods:

**a) Taylor Series Expansion:**
$$ e^{\mathbf{A}t} = \mathbf{I} + \mathbf{A}t + \frac{(\mathbf{A}t)^2}{2!} + \frac{(\mathbf{A}t)^3}{3!} + \dots $$
This method is often computationally intensive and may not be practical for hand calculations unless the series converges quickly (e.g., nilpotent matrices).

**b) Using Eigenvalues and Eigenvectors:**
If $\mathbf{A}$ has distinct eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$, and corresponding eigenvectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$, then we can write $\mathbf{A} = \mathbf{V} \mathbf{\Lambda} \mathbf{V}^{-1}$, where $\mathbf{V} = [\mathbf{v}_1 \ \mathbf{v}_2 \ \dots \ \mathbf{v}_n]$ and $\mathbf{\Lambda} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$.
Then,
$$ e^{\mathbf{A}t} = \mathbf{V} e^{\mathbf{\Lambda}t} \mathbf{V}^{-1} $$
where $e^{\mathbf{\Lambda}t} = \text{diag}(e^{\lambda_1 t}, e^{\lambda_2 t}, \dots, e^{\lambda_n t})$.

**Example 2.1:** Calculate $\Phi(t) = e^{\mathbf{A}t}$ for $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$.

1.  **Find Eigenvalues:**
    Characteristic equation: $\det(s\mathbf{I} - \mathbf{A}) = 0$
    $$ \det \begin{bmatrix} s & -1 \\ 2 & s+3 \end{bmatrix} = s(s+3) - (-1)(2) = s^2 + 3s + 2 = 0 $$
    Factoring: $(s+1)(s+2) = 0$. Eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -2$.

2.  **Find Eigenvectors:**
    For $\lambda_1 = -1$:
    $(s\mathbf{I} - \mathbf{A})\mathbf{v}_1 = 0$
    $$ \begin{bmatrix} -1 & -1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} $$
    $-v_{11} - v_{12} = 0 \implies v_{12} = -v_{11}$. Let $v_{11} = 1$, then $\mathbf{v}_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

    For $\lambda_2 = -2$:
    $(s\mathbf{I} - \mathbf{A})\mathbf{v}_2 = 0$
    $$ \begin{bmatrix} -2 & -1 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} $$
    $-2v_{21} - v_{22} = 0 \implies v_{22} = -2v_{21}$. Let $v_{21} = 1$, then $\mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.

3.  **Form Matrices $\mathbf{V}$ and $\mathbf{\Lambda}$:**
    $$ \mathbf{V} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix}, \quad \mathbf{\Lambda} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} $$

4.  **Calculate $\mathbf{V}^{-1}$:**
    $\det(\mathbf{V}) = (1)(-2) - (1)(-1) = -2 + 1 = -1$.
    $$ \mathbf{V}^{-1} = \frac{1}{-1} \begin{bmatrix} -2 & -1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix} $$

5.  **Calculate $e^{\mathbf{\Lambda}t}$:**
    $$ e^{\mathbf{\Lambda}t} = \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} $$

6.  **Calculate $e^{\mathbf{A}t} = \mathbf{V} e^{\mathbf{\Lambda}t} \mathbf{V}^{-1}$:**
    $$ e^{\mathbf{A}t} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix} $$
    $$ e^{\mathbf{A}t} = \begin{bmatrix} e^{-t} & e^{-2t} \\ -e^{-t} & -2e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix} $$
    $$ e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix} $$

    So, $\Phi(t) = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix}$.

    *Reference: Ogata, Chapter 2; Kuo & Golnaraghi, Chapter 6; Nagarath & Gopal, Chapter 12.*

**c) Using Laplace Transforms:**
The Laplace transform of the state equation is:
$s\mathbf{X}(s) - \mathbf{x}(0) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$
$(s\mathbf{I} - \mathbf{A})\mathbf{X}(s) = \mathbf{x}(0) + \mathbf{B}\mathbf{U}(s)$
$$ \mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1} \mathbf{x}(0) + (s\mathbf{I} - \mathbf{A})^{-1} \mathbf{B}\mathbf{U}(s) $$
The term $(s\mathbf{I} - \mathbf{A})^{-1}$ is the Laplace transform of the state transition matrix, i.e., $\mathcal{L}\{e^{\mathbf{A}t}\} = (s\mathbf{I} - \mathbf{A})^{-1}$.
We can find $\Phi(t)$ by taking the inverse Laplace transform of $(s\mathbf{I} - \mathbf{A})^{-1}$.

**Example 2.2:** Find $\Phi(t)$ for $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$ using Laplace Transforms.
$$ s\mathbf{I} - \mathbf{A} = s\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} s & -1 \\ 2 & s+3 \end{bmatrix} $$
$$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{\det(s\mathbf{I} - \mathbf{A})} \text{adj}(s\mathbf{I} - \mathbf{A}) $$
$$ \det(s\mathbf{I} - \mathbf{A}) = s(s+3) - (-1)(2) = s^2 + 3s + 2 $$
$$ \text{adj}(s\mathbf{I} - \mathbf{A}) = \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} $$
$$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} $$
$$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{(s+1)(s+2)} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} $$
$$ (s\mathbf{I} - \mathbf{A})^{-1} = \begin{bmatrix} \frac{s+3}{(s+1)(s+2)} & \frac{1}{(s+1)(s+2)} \\ \frac{-2}{(s+1)(s+2)} & \frac{s}{(s+1)(s+2)} \end{bmatrix} $$

Using partial fraction expansion:
$\frac{s+3}{(s+1)(s+2)} = \frac{A}{s+1} + \frac{B}{s+2} \implies s+3 = A(s+2) + B(s+1)$.
If $s=-1$, $2 = -A \implies A = -2$.
If $s=-2$, $1 = -B \implies B = -1$.
So, $\frac{s+3}{(s+1)(s+2)} = \frac{-2}{s+1} + \frac{-1}{s+2}$.

$\frac{1}{(s+1)(s+2)} = \frac{C}{s+1} + \frac{D}{s+2} \implies 1 = C(s+2) + D(s+1)$.
If $s=-1$, $1 = C$.
If $s=-2$, $1 = -D \implies D = -1$.
So, $\frac{1}{(s+1)(s+2)} = \frac{1}{s+1} - \frac{1}{s+2}$.

$\frac{-2}{(s+1)(s+2)} = -2 \left(\frac{1}{s+1} - \frac{1}{s+2}\right) = \frac{-2}{s+1} + \frac{2}{s+2}$.

$\frac{s}{(s+1)(s+2)} = \frac{E}{s+1} + \frac{F}{s+2} \implies s = E(s+2) + F(s+1)$.
If $s=-1$, $-1 = -E \implies E = 1$.
If $s=-2$, $-2 = -F \implies F = 2$.
So, $\frac{s}{(s+1)(s+2)} = \frac{1}{s+1} + \frac{2}{s+2}$.

Now, taking the inverse Laplace transform of each element:
$\mathcal{L}^{-1}\left\{\frac{-2}{s+1}\right\} = -2e^{-t}$
$\mathcal{L}^{-1}\left\{\frac{-1}{s+2}\right\} = -e^{-2t}$
$\mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = e^{-t}$
$\mathcal{L}^{-1}\left\{\frac{-1}{s+2}\right\} = -e^{-2t}$
$\mathcal{L}^{-1}\left\{\frac{2}{s+2}\right\} = 2e^{-2t}$

$$ \Phi(t) = \mathcal{L}^{-1}\{(s\mathbf{I} - \mathbf{A})^{-1}\} = \begin{bmatrix} -2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & e^{-t} + 2e^{-2t} \end{bmatrix} $$
Wait, there's a mismatch with the eigenvector method. Let's recheck the $\mathbf{V}^{-1}$ calculation or the multiplication.

Recheck: $e^{\mathbf{A}t} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
$\begin{bmatrix} e^{-t} & e^{-2t} \\ -e^{-t} & -2e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix}$

Let's recheck the Laplace Transform calculation of the top-right element.
$\frac{1}{(s+1)(s+2)} = \frac{1}{s+1} - \frac{1}{s+2}$. Inverse Laplace is $e^{-t} - e^{-2t}$. This matches the first method.

Let's recheck the bottom-right element of the first method's result: $-e^{-t} + 2e^{-2t}$.
Laplace Transform of $\frac{s}{(s+1)(s+2)} = \frac{1}{s+1} + \frac{2}{s+2}$. Inverse Laplace is $e^{-t} + 2e^{-2t}$.

Ah, there's a sign error in the first method's calculation or presentation of the bottom-right element.
The correct result from the first method should be:
$$ \Phi(t) = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & \mathbf{e}^{-t} + 2e^{-2t} \end{bmatrix} $$
Let's check the Laplace transform result again.
Top-left: $-2e^{-t} - e^{-2t}$ vs $2e^{-t} - e^{-2t}$. There is a sign difference.

Let's re-verify the eigenvector method:
$\mathbf{V}^{-1} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$. This seems correct.
$\mathbf{V} e^{\mathbf{\Lambda}t} \mathbf{V}^{-1} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
$= \begin{bmatrix} e^{-t} & e^{-2t} \\ -e^{-t} & -2e^{-2t} \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
Top-left: $e^{-t}(2) + e^{-2t}(-1) = 2e^{-t} - e^{-2t}$.
Top-right: $e^{-t}(1) + e^{-2t}(-1) = e^{-t} - e^{-2t}$.
Bottom-left: $-e^{-t}(2) + (-2e^{-2t})(-1) = -2e^{-t} + 2e^{-2t}$.
Bottom-right: $-e^{-t}(1) + (-2e^{-2t})(-1) = -e^{-t} + 2e^{-2t}$.

The first method (eigenvectors) appears correct as derived. Let's re-examine the Laplace transform matrix inversion.
$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2+3s+2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} $
$ \frac{s+3}{(s+1)(s+2)} = \frac{A}{s+1} + \frac{B}{s+2} $
$ s+3 = A(s+2) + B(s+1) $
$ s=-1 \implies 2 = A(1) \implies A=2 $
$ s=-2 \implies 1 = B(-1) \implies B=-1 $
So, $\frac{s+3}{(s+1)(s+2)} = \frac{2}{s+1} - \frac{1}{s+2}$. Inverse Laplace is $2e^{-t} - e^{-2t}$. This matches the eigenvector method's top-left.

$ \frac{1}{(s+1)(s+2)} = \frac{C}{s+1} + \frac{D}{s+2} $
$ 1 = C(s+2) + D(s+1) $
$ s=-1 \implies 1 = C(1) \implies C=1 $
$ s=-2 \implies 1 = D(-1) \implies D=-1 $
So, $\frac{1}{(s+1)(s+2)} = \frac{1}{s+1} - \frac{1}{s+2}$. Inverse Laplace is $e^{-t} - e^{-2t}$. This matches the eigenvector method's top-right.

$ \frac{-2}{(s+1)(s+2)} = \frac{E}{s+1} + \frac{F}{s+2} $
$ -2 = E(s+2) + F(s+1) $
$ s=-1 \implies -2 = E(1) \implies E=-2 $
$ s=-2 \implies -2 = F(-1) \implies F=2 $
So, $\frac{-2}{(s+1)(s+2)} = \frac{-2}{s+1} + \frac{2}{s+2}$. Inverse Laplace is $-2e^{-t} + 2e^{-2t}$. This matches the eigenvector method's bottom-left.

$ \frac{s}{(s+1)(s+2)} = \frac{G}{s+1} + \frac{H}{s+2} $
$ s = G(s+2) + H(s+1) $
$ s=-1 \implies -1 = G(1) \implies G=-1 $
$ s=-2 \implies -2 = H(-1) \implies H=2 $
So, $\frac{s}{(s+1)(s+2)} = \frac{-1}{s+1} + \frac{2}{s+2}$. Inverse Laplace is $-e^{-t} + 2e^{-2t}$. This matches the eigenvector method's bottom-right.

Conclusion: Both methods yield the same result. My initial transcription of the eigenvector result for the bottom-right was incorrect.

**Final Corrected State Transition Matrix:**
$$ \Phi(t) = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix} $$

*Reference: Ogata, Chapter 2; Kuo & Golnaraghi, Chapter 6; Nagarath & Gopal, Chapter 12.*

### 2.2 Solution for Zero Initial Conditions

If $\mathbf{x}(0) = 0$, then the solution to the state equation is:
$$ \mathbf{x}(t) = \int_{0}^{t} e^{\mathbf{A}(t-\tau)} \mathbf{B}\mathbf{u}(\tau) d\tau $$
In Laplace domain: $\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1} \mathbf{B}\mathbf{U}(s)$.

### 2.3 Solution for Non-zero Initial Conditions

The complete solution is:
$$ \mathbf{x}(t) = e^{\mathbf{A}t} \mathbf{x}(0) + \int_{0}^{t} e^{\mathbf{A}(t-\tau)} \mathbf{B}\mathbf{u}(\tau) d\tau $$
In Laplace domain: $\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1} \mathbf{x}(0) + (s\mathbf{I} - \mathbf{A})^{-1} \mathbf{B}\mathbf{U}(s)$.

### 2.4 Overall System Response

The output vector $\mathbf{y}(t)$ is given by:
$$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$
Substituting the solution for $\mathbf{x}(t)$:
$$ \mathbf{y}(t) = \mathbf{C} \left[ e^{\mathbf{A}t} \mathbf{x}(0) + \int_{0}^{t} e^{\mathbf{A}(t-\tau)} \mathbf{B}\mathbf{u}(\tau) d\tau \right] + \mathbf{D}\mathbf{u}(t) $$

The output response consists of two parts:
1.  **Zero-input response:** $\mathbf{y}_{zi}(t) = \mathbf{C} e^{\mathbf{A}t} \mathbf{x}(0)$ (response due to initial conditions when input is zero).
2.  **Zero-state response:** $\mathbf{y}_{zs}(t) = \mathbf{C} \int_{0}^{t} e^{\mathbf{A}(t-\tau)} \mathbf{B}\mathbf{u}(\tau) d\tau + \mathbf{D}\mathbf{u}(t)$ (response due to input when initial conditions are zero).

### 2.5 Transfer Function from State-Space Model

The transfer function matrix $\mathbf{G}(s)$ for a MIMO system can be found from its state-space representation:
$$ \mathbf{G}(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D} $$
For a SISO system, this will result in a scalar transfer function.

**Example 2.3:** Find the transfer function from the state-space model:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 2 & 1 \end{bmatrix} \mathbf{x}(t) + 0 u(t) $$

From Example 2.2, we found:
$$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} $$
$$ \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & 1 \end{bmatrix}, \quad \mathbf{D} = 0 $$
$$ \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 2 & 1 \end{bmatrix} \frac{1}{s^2 + 3s + 2} \begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$
$$ = \begin{bmatrix} 2 & 1 \end{bmatrix} \frac{1}{s^2 + 3s + 2} \begin{bmatrix} 1 \\ s \end{bmatrix} $$
$$ = \frac{1}{s^2 + 3s + 2} \begin{bmatrix} 2(1) + 1(s) \end{bmatrix} $$
$$ = \frac{s+2}{s^2 + 3s + 2} $$
This matches the transfer function used in Examples 1.2 and 1.3.

*Reference: Ogata, Chapter 2; Kuo & Golnaraghi, Chapter 6; Nagarath & Gopal, Chapter 12.*

## 3. Controllability and Observability

These concepts are fundamental to modern control theory and determine whether a system can be manipulated to reach any desired state (controllability) and whether the internal states can be determined from the outputs (observability).

### 3.1 Controllability

A linear time-invariant system is **completely controllable** if it is possible to steer the system from any initial state $\mathbf{x}(t_0)$ to any desired final state $\mathbf{x}(t_f)$ in a finite time $t_f - t_0$, using a suitable control input $\mathbf{u}(t)$.

For a linear time-invariant system described by:
$$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
The system is completely controllable if and only if the **controllability matrix** $\mathbf{W}_c(t)$ has full rank ($n$).
$$ \mathbf{W}_c(t) = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} & \mathbf{A}^2\mathbf{B} & \dots & \mathbf{A}^{n-1}\mathbf{B} \end{bmatrix} $$
For the system to be controllable, $\text{rank}(\mathbf{W}_c(t)) = n$.

**Alternative Test (for LTI systems):** The system is controllable if and only if the matrix $(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}$ has no pole-zero cancellations in the right half of the s-plane, or equivalently, if the rank of the matrix $\mathbf{W}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} & \dots & \mathbf{A}^{n-1}\mathbf{B} \end{bmatrix}$ is equal to $n$. For LTI systems, it is sufficient to check the rank of $\mathbf{W}_c$ (the matrix at time $t=0$).

**Example 3.1:** Determine the controllability of the system:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
Here, $n=2$.
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

1.  **Calculate $\mathbf{A}\mathbf{B}$:**
    $$ \mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -3 \end{bmatrix} $$

2.  **Form the Controllability Matrix $\mathbf{W}_c$:**
    $$ \mathbf{W}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 1 & -3 \end{bmatrix} $$

3.  **Check the rank of $\mathbf{W}_c$:**
    $\det(\mathbf{W}_c) = (0)(-3) - (1)(1) = -1$.
    Since the determinant is non-zero, the rank of $\mathbf{W}_c$ is 2, which is equal to $n$.
    Therefore, the system is completely controllable.

**Example 3.2:** Consider a system with a repeated pole and a zero at the same location.
$$ G(s) = \frac{s+1}{(s+1)^2} = \frac{s+1}{s^2+2s+1} $$
Controllable Canonical Form:
$a_1=2, a_0=1$. $b_1=1, b_0=1$.
$$ \mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$
$\mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.
$$ \mathbf{W}_c = \begin{bmatrix} 0 & 1 \\ 1 & -2 \end{bmatrix} $$
$\det(\mathbf{W}_c) = (0)(-2) - (1)(1) = -1 \ne 0$. Rank is 2. Controllable.

Now consider if the state-space representation was different, e.g., if a cancellation occurred in the state-space model that was not evident from the minimal transfer function.

If we have a system where a state variable is completely decoupled and does not influence the output or is not controllable, it will lead to rank deficiency.

**Example 3.3 (Uncontrollable System):**
$$ \dot{x}_1 = x_1 + u $$
$$ \dot{x}_2 = -x_2 $$
$$ y = x_1 $$
State-space representation:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$
Here $n=2$.
$\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

1.  **Calculate $\mathbf{A}\mathbf{B}$:**
    $$ \mathbf{A}\mathbf{B} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} $$

2.  **Form the Controllability Matrix $\mathbf{W}_c$:**
    $$ \mathbf{W}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix} $$

3.  **Check the rank of $\mathbf{W}_c$:**
    $\det(\mathbf{W}_c) = (1)(0) - (1)(0) = 0$.
    The rank of $\mathbf{W}_c$ is 1, which is less than $n=2$.
    Therefore, the system is **not completely controllable**. The state variable $x_2$ is uncontrollable.

*Reference: Ogata, Chapter 3; Kuo & Golnaraghi, Chapter 7; Nagarath & Gopal, Chapter 13.*

### 3.2 Observability

A linear time-invariant system is **completely observable** if it is possible to determine the initial state vector $\mathbf{x}(t_0)$ by observing the output vector $\mathbf{y}(t)$ and knowing the input vector $\mathbf{u}(t)$ over the interval $t_0 \le t \le t_f$.

For a linear time-invariant system described by:
$$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
$$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$
The system is completely observable if and only if the **observability matrix** $\mathbf{W}_o(t)$ has full rank ($n$).
$$ \mathbf{W}_o(t) = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T & (\mathbf{A}^T)^2\mathbf{C}^T & \dots & (\mathbf{A}^T)^{n-1}\mathbf{C}^T \end{bmatrix} $$
For the system to be observable, $\text{rank}(\mathbf{W}_o(t)) = n$.

**Alternative Test (for LTI systems):** The system is observable if and only if the rank of the matrix $\mathbf{W}_o = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T & \dots & (\mathbf{A}^T)^{n-1}\mathbf{C}^T \end{bmatrix}$ is equal to $n$. For LTI systems, it is sufficient to check the rank of $\mathbf{W}_o$ (the matrix at time $t=0$).

**Duality Principle:** There is a duality between controllability and observability. A system $(\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D})$ is controllable if and only if the dual system $(\mathbf{A}^T, \mathbf{C}^T, \mathbf{B}^T, \mathbf{D}^T)$ is observable.

**Example 3.4:** Determine the observability of the system:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 2 & 1 \end{bmatrix} \mathbf{x}(t) + 0 u(t) $$
Here, $n=2$.
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 2 & 1 \end{bmatrix}$.

1.  **Calculate $\mathbf{A}^T$ and $\mathbf{C}^T$:**
    $$ \mathbf{A}^T = \begin{bmatrix} 0 & -2 \\ 1 & -3 \end{bmatrix}, \quad \mathbf{C}^T = \begin{bmatrix} 2 \\ 1 \end{bmatrix} $$

2.  **Calculate $\mathbf{A}^T\mathbf{C}^T$:**
    $$ \mathbf{A}^T\mathbf{C}^T = \begin{bmatrix} 0 & -2 \\ 1 & -3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ -1 \end{bmatrix} $$

3.  **Form the Observability Matrix $\mathbf{W}_o$:**
    $$ \mathbf{W}_o = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix} $$

4.  **Check the rank of $\mathbf{W}_o$:**
    $\det(\mathbf{W}_o) = (2)(-1) - (-2)(1) = -2 + 2 = 0$.
    The rank of $\mathbf{W}_o$ is 1, which is less than $n=2$.
    Therefore, the system is **not completely observable**.

**Example 3.5 (Unobservable System):** Consider the system from Example 3.3, but with a different output.
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(t) $$
Here, $n=2$.
$\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$.

1.  **Calculate $\mathbf{A}^T$ and $\mathbf{C}^T$:**
    $$ \mathbf{A}^T = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}, \quad \mathbf{C}^T = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$

2.  **Calculate $\mathbf{A}^T\mathbf{C}^T$:**
    $$ \mathbf{A}^T\mathbf{C}^T = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \end{bmatrix} $$

3.  **Form the Observability Matrix $\mathbf{W}_o$:**
    $$ \mathbf{W}_o = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 1 & -1 \end{bmatrix} $$

4.  **Check the rank of $\mathbf{W}_o$:**
    $\det(\mathbf{W}_o) = (0)(-1) - (0)(1) = 0$.
    The rank of $\mathbf{W}_o$ is 1, which is less than $n=2$.
    Therefore, the system is **not completely observable**. The state variable $x_1$ is unobservable (since $y=x_2$, and $x_1$ does not affect $y$).

*Reference: Ogata, Chapter 3; Kuo & Golnaraghi, Chapter 7; Nagarath & Gopal, Chapter 13.*

### 3.3 Relation to Transfer Function

For a system represented by $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$, the system is:
*   **Controllable** if there are no cancellations of the form $(s-\lambda)$ in the numerator and denominator of the transfer function when derived from a controllable canonical form. Equivalently, if the rank of $\mathbf{W}_c$ is $n$.
*   **Observable** if there are no cancellations of the form $(s-\lambda)$ in the transfer function when derived from an observable canonical form. Equivalently, if the rank of $\mathbf{W}_o$ is $n$.

A system is **irreducible** if it is both controllable and observable. Irreducible systems have minimal order transfer functions, meaning that any common factors in the numerator and denominator have been cancelled.

If a system has common factors in its transfer function (pole-zero cancellations), these correspond to uncontrollable or unobservable modes.

**Example 3.6:**
$G(s) = \frac{s+a}{(s+a)(s+b)}$.
This transfer function has a pole-zero cancellation at $s=-a$.
If we put this into CCF, the state corresponding to the $(s+a)$ mode will be uncontrollable.
If we put this into OCF, the state corresponding to the $(s+a)$ mode will be unobservable.

*Reference: Ogata, Chapter 3; Kuo & Golnaraghi, Chapter 7; Nagarath & Gopal, Chapter 13.*

## 4. Summary and Important Points

*   **State-space representation** provides a modern and comprehensive way to analyze dynamic systems, especially MIMO systems.
*   The state variables are the minimum set of variables required to describe the system's internal behavior.
*   The **state equation** ($\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$) describes the dynamics of the state vector.
*   The **output equation** ($\mathbf{y} = \mathbf{C}\mathbf{x} + \mathbf{D}\mathbf{u}$) relates the state and input to the system's output.
*   The **state transition matrix**, $\Phi(t, t_0) = e^{\mathbf{A}(t-t_0)}$, describes the system's behavior in the absence of input. It can be calculated using Taylor series, eigenvalues/eigenvectors, or Laplace transforms.
*   The solution of the state equation accounts for both initial conditions and inputs.
*   **Controllability** determines if all states can be driven to desired values by external inputs. Checked using the controllability matrix $\mathbf{W}_c = [\mathbf{B} \ \mathbf{A}\mathbf{B} \ \dots \ \mathbf{A}^{n-1}\mathbf{B}]$. The system is controllable if $\text{rank}(\mathbf{W}_c) = n$.
*   **Observability** determines if all states can be inferred from the system's outputs. Checked using the observability matrix $\mathbf{W}_o = [\mathbf{C}^T \ \mathbf{A}^T\mathbf{C}^T \ \dots \ (\mathbf{A}^T)^{n-1}\mathbf{C}^T]$. The system is observable if $\text{rank}(\mathbf{W}_o) = n$.
*   Pole-zero cancellations in the transfer function correspond to uncontrollable or unobservable modes.
*   The **Duality Principle** relates controllability and observability.

**Important Points to Remember:**

*   The choice of state variables affects the specific $\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$ matrices but not the system's overall behavior (controllability, observability, eigenvalues).
*   The characteristic equation $\det(s\mathbf{I} - \mathbf{A}) = 0$ is invariant under similarity transformations and its roots are the system's eigenvalues (poles).
*   For LTI systems, the rank test for controllability and observability using the matrices $\mathbf{W}_c$ and $\mathbf{W}_o$ is sufficient.

---

## Practice Questions

**Question 1:**
Obtain the state-space representation in controllable canonical form for the transfer function:
$$ G(s) = \frac{2s^2 + 5s + 3}{s^3 + 6s^2 + 11s + 6} $$

**Question 2:**
Find the state transition matrix $\Phi(t) = e^{\mathbf{A}t}$ for the system with state matrix:
$$ \mathbf{A} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} $$

**Question 3:**
Determine if the system described by the following state-space equations is controllable and observable:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$

**Question 4:**
A system is represented by:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$
Is this system controllable? Is it observable? Justify your answers.

**Question 5:**
Calculate the transfer function of the system from its state-space representation:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$

---

## Answers to Practice Questions

**Answer 1:**
For $G(s) = \frac{2s^2 + 5s + 3}{s^3 + 6s^2 + 11s + 6}$, we have:
$n=3$. $a_2=6, a_1=11, a_0=6$. Numerator: $b_2=2, b_1=5, b_0=3$.
The controllable canonical form state-space representation is:
$$ \mathbf{A}_{CCF} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -a_0 & -a_1 & -a_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -6 & -11 & -6 \end{bmatrix} $$
$$ \mathbf{B}_{CCF} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} $$
$$ \mathbf{C}_{CCF} = \begin{bmatrix} b_0 & b_1 & b_2 \end{bmatrix} = \begin{bmatrix} 3 & 5 & 2 \end{bmatrix} $$
$$ \mathbf{D}_{CCF} = 0 $$

**Answer 2:**
$$ \mathbf{A} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} $$
Since $\mathbf{A}$ is a diagonal matrix, the matrix exponential is:
$$ \Phi(t) = e^{\mathbf{A}t} = \begin{bmatrix} e^{-1t} & 0 \\ 0 & e^{-2t} \end{bmatrix} = \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} $$

**Answer 3:**
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$. $n=2$.

**Controllability:**
$\mathbf{A}\mathbf{B} = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \end{bmatrix}$.
$\mathbf{W}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$.
$\det(\mathbf{W}_c) = (1)(-1) - (0)(0) = -1 \ne 0$. Rank is 2.
The system is **controllable**.

**Observability:**
$\mathbf{A}^T = \begin{bmatrix} 0 & -1 \\ 1 & -2 \end{bmatrix}$, $\mathbf{C}^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
$\mathbf{A}^T\mathbf{C}^T = \begin{bmatrix} 0 & -1 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
$\mathbf{W}_o = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.
$\det(\mathbf{W}_o) = (1)(1) - (0)(0) = 1 \ne 0$. Rank is 2.
The system is **observable**.

**Answer 4:**
$\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$. $n=2$.

**Controllability:**
$\mathbf{A}\mathbf{B} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \end{bmatrix}$.
$\mathbf{W}_c = \begin{bmatrix} \mathbf{B} & \mathbf{A}\mathbf{B} \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 1 & -1 \end{bmatrix}$.
$\det(\mathbf{W}_c) = (0)(-1) - (0)(1) = 0$. Rank is 1.
The system is **not controllable** because the rank of $\mathbf{W}_c$ (1) is less than $n$ (2). The state $x_1$ is uncontrollable.

**Observability:**
$\mathbf{A}^T = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$, $\mathbf{C}^T = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
$\mathbf{A}^T\mathbf{C}^T = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
$\mathbf{W}_o = \begin{bmatrix} \mathbf{C}^T & \mathbf{A}^T\mathbf{C}^T \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$.
$\det(\mathbf{W}_o) = (1)(0) - (1)(0) = 0$. Rank is 1.
The system is **not observable** because the rank of $\mathbf{W}_o$ (1) is less than $n$ (2). The state $x_2$ is unobservable.

**Answer 5:**
$\mathbf{A} = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$.

1.  **Calculate $s\mathbf{I} - \mathbf{A}$:**
    $$ s\mathbf{I} - \mathbf{A} = s\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix} = \begin{bmatrix} s+1 & -1 \\ 0 & s+2 \end{bmatrix} $$

2.  **Calculate $(s\mathbf{I} - \mathbf{A})^{-1}$:**
    $\det(s\mathbf{I} - \mathbf{A}) = (s+1)(s+2) - (-1)(0) = (s+1)(s+2)$.
    $$ (s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{(s+1)(s+2)} \begin{bmatrix} s+2 & 1 \\ 0 & s+1 \end{bmatrix} $$

3.  **Calculate $\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}$:**
    $$ \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{(s+1)(s+2)} \begin{bmatrix} s+2 & 1 \\ 0 & s+1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$
    $$ = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{(s+1)(s+2)} \begin{bmatrix} 1 \\ s+1 \end{bmatrix} $$
    $$ = \frac{1}{(s+1)(s+2)} \begin{bmatrix} 1(1) + 0(s+1) \end{bmatrix} $$
    $$ = \frac{1}{(s+1)(s+2)} $$

4.  **Add $\mathbf{D}$:** Since $\mathbf{D}=0$, the transfer function is:
    $$ G(s) = \frac{1}{(s+1)(s+2)} = \frac{1}{s^2 + 3s + 2} $$

---
This concludes Module 4. Remember to practice deriving state-space models and checking controllability and observability for various systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
