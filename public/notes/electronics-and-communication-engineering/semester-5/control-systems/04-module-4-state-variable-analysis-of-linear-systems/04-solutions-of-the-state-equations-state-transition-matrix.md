---
title: "Solutions of the state equations, state transition matrix"
subject: "CONTROL SYSTEMS"
module: "Module 4: State Variable Analysis of Linear Systems:"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe964"
status: "completed"
scrapedAt: "2026-05-23T17:54:51.163Z"
---
# CONTROL SYSTEMS - Module 4: State Variable Analysis of Linear Systems

## Topic: Solutions of the State Equations and State Transition Matrix

This module delves into the foundational techniques for solving linear time-invariant (LTI) state-space equations and introduces the crucial concept of the state transition matrix. Understanding these elements is vital for analyzing system behavior and designing control strategies, directly contributing to CO5 (Controllability and Observability) and enabling a deeper understanding for other COs.

---

### 1. Introduction to State Equations

State variable analysis provides a powerful alternative to the transfer function approach for representing and analyzing dynamic systems. It offers a more complete description of the system's behavior, including internal states.

**Key Concepts:**

*   **State Variables:** A minimum set of variables that completely describe the internal state of a dynamic system at any given time. These variables, along with the input, are sufficient to determine the future state of the system.
*   **State Vector ($\mathbf{x}(t)$):** A column vector containing the state variables. For an n-dimensional system, $\mathbf{x}(t)$ is an $n \times 1$ vector.
*   **Input Vector ($\mathbf{u}(t)$):** A column vector containing the system's inputs. For a system with $r$ inputs, $\mathbf{u}(t)$ is an $r \times 1$ vector.
*   **Output Vector ($\mathbf{y}(t)$):** A column vector containing the system's outputs. For a system with $m$ outputs, $\mathbf{y}(t)$ is an $m \times 1$ vector.

**General Form of Linear Time-Invariant (LTI) State-Space Equations:**

The state-space representation of an LTI system is given by:

$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) \quad \text{(State Equation)}
$$

$$
\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) \quad \text{(Output Equation)}
$$

Where:
*   $\mathbf{A}$: $n \times n$ state matrix (or system matrix).
*   $\mathbf{B}$: $n \times r$ input matrix.
*   $\mathbf{C}$: $m \times n$ output matrix.
*   $\mathbf{D}$: $m \times r$ direct transmission matrix.
*   $\dot{\mathbf{x}}(t)$: Time derivative of the state vector.

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2)*

---

### 2. Solution of the State Equations for Zero Input (Homogeneous Solution)

When there are no external inputs ($\mathbf{u}(t) = \mathbf{0}$), the state equation becomes:

$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t)
$$

This is a first-order linear homogeneous differential equation. The solution is analogous to the scalar case $dx/dt = ax$, which has a solution $x(t) = x(0)e^{at}$. In the vector form, the solution involves the matrix exponential.

**The Solution:**

The solution to the homogeneous state equation is:

$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0)
$$

where:
*   $\mathbf{x}(0)$ is the initial state vector at time $t=0$.
*   $e^{\mathbf{A}t}$ is the **matrix exponential**, also known as the **state transition matrix** (more on this later).

*(Refer to: Kuo & Golnaraghi, Chapter 6; Ogata, Chapter 2)*

**Important Point:** The solution for the homogeneous case represents the system's internal behavior driven solely by its initial conditions.

---

### 3. Solution of the State Equations for Zero Initial Conditions (Forced Solution)

When the initial state is zero ($\mathbf{x}(0) = \mathbf{0}$), the state equation is:

$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)
$$

To solve this, we use the concept of an integrating factor, which in the matrix case is $e^{-\mathbf{A}t}$. Multiplying both sides by $e^{-\mathbf{A}t}$:

$$
e^{-\mathbf{A}t}\dot{\mathbf{x}}(t) - e^{-\mathbf{A}t}\mathbf{A}\mathbf{x}(t) = e^{-\mathbf{A}t}\mathbf{B}\mathbf{u}(t)
$$

The left side can be recognized as the derivative of a product:

$$
\frac{d}{dt}[e^{-\mathbf{A}t}\mathbf{x}(t)] = e^{-\mathbf{A}t}\mathbf{B}\mathbf{u}(t)
$$

Integrating both sides from $0$ to $t$:

$$
\int_{0}^{t} \frac{d}{d\tau}[e^{-\mathbf{A}\tau}\mathbf{x}(\tau)] d\tau = \int_{0}^{t} e^{-\mathbf{A}\tau}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

$$
[e^{-\mathbf{A}\tau}\mathbf{x}(\tau)]_{0}^{t} = \int_{0}^{t} e^{-\mathbf{A}\tau}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

Since $\mathbf{x}(0) = \mathbf{0}$, the term at $\tau=0$ is zero:

$$
e^{-\mathbf{A}t}\mathbf{x}(t) = \int_{0}^{t} e^{-\mathbf{A}\tau}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

Multiplying by $e^{\mathbf{A}t}$ to isolate $\mathbf{x}(t)$:

$$
\mathbf{x}(t) = e^{\mathbf{A}t} \int_{0}^{t} e^{-\mathbf{A}\tau}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

This is the solution for zero initial conditions.

*(Refer to: DiStefano, Stubberud, & Williams, Chapter 5; Ogata, Chapter 2)*

---

### 4. Complete Solution of the State Equations

Combining the homogeneous and forced solutions (by considering both initial conditions and inputs), the general solution to the state equation is:

$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0) + \int_{0}^{t} e^{\mathbf{A}(t-\tau)}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

**Explanation:**
*   The first term, $e^{\mathbf{A}t}\mathbf{x}(0)$, represents the response due to the initial conditions.
*   The second term, $\int_{0}^{t} e^{\mathbf{A}(t-\tau)}\mathbf{B}\mathbf{u}(\tau) d\tau$, represents the response due to the input $\mathbf{u}(t)$.
*   Notice that the integral uses $e^{\mathbf{A}(t-\tau)}$, which is a property of the state transition matrix.

*(Refer to: Nagarath & Gopal, Chapter 12; Kuo & Golnaraghi, Chapter 6)*

**Important Point:** This equation is the cornerstone for understanding how a system's state evolves over time, given its initial state and inputs.

---

### 5. The State Transition Matrix ($\boldsymbol{\Phi}(t)$ or $e^{\mathbf{A}t}$)

The state transition matrix is a fundamental concept that plays a role similar to the impulse response in transfer function analysis. It describes how the state vector changes from time $t_0$ to time $t$ under zero input conditions.

**Definition:**

The state transition matrix $\boldsymbol{\Phi}(t, t_0)$ of a linear system $\dot{\mathbf{x}}(t) = \mathbf{A}(t)\mathbf{x}(t) + \mathbf{B}(t)\mathbf{u}(t)$ is the solution of the homogeneous state equation with initial condition $\mathbf{x}(t_0) = \mathbf{I}$ (identity matrix):

$$
\boldsymbol{\Phi}(t, t_0) = e^{\mathbf{A}(t-t_0)}
$$

For LTI systems, where $\mathbf{A}$ is constant, this simplifies to:

$$
\boldsymbol{\Phi}(t) = e^{\mathbf{A}t}
$$

The complete solution can then be written as:

$$
\mathbf{x}(t) = \boldsymbol{\Phi}(t, 0)\mathbf{x}(0) + \int_{0}^{t} \boldsymbol{\Phi}(t, \tau)\mathbf{B}\mathbf{u}(\tau) d\tau
$$

And for LTI systems:

$$
\mathbf{x}(t) = \boldsymbol{\Phi}(t)\mathbf{x}(0) + \int_{0}^{t} \boldsymbol{\Phi}(t-\tau)\mathbf{B}\mathbf{u}(\tau) d\tau
$$

*(Refer to: Ogata, Chapter 2; Nise, Chapter 4)*

**Properties of the State Transition Matrix ($\boldsymbol{\Phi}(t) = e^{\mathbf{A}t}$ for LTI systems):**

1.  $\boldsymbol{\Phi}(0) = e^{\mathbf{A} \cdot 0} = e^{\mathbf{0}} = \mathbf{I}$ (Identity Matrix)
    *   *Significance:* At time zero, the transition from the initial state is the identity, meaning $\mathbf{x}(0) = \mathbf{I} \cdot \mathbf{x}(0)$.
2.  $\boldsymbol{\Phi}(t_1 + t_2) = \boldsymbol{\Phi}(t_1)\boldsymbol{\Phi}(t_2)$
    *   *Significance:* This multiplicative property allows us to transition the system state over different time intervals.
3.  $\boldsymbol{\Phi}^{-1}(t) = \boldsymbol{\Phi}(-t) = e^{-\mathbf{A}t}$
    *   *Significance:* The inverse of the state transition matrix is the state transition matrix for negative time.
4.  $\frac{d}{dt}\boldsymbol{\Phi}(t) = \mathbf{A}\boldsymbol{\Phi}(t) = \boldsymbol{\Phi}(t)\mathbf{A}$
    *   *Significance:* This confirms that $\boldsymbol{\Phi}(t)$ is indeed the solution to the homogeneous equation.
5.  $\int_{0}^{t} \boldsymbol{\Phi}(\tau) d\tau$ exists.

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2)*

---

### 6. Methods for Computing the State Transition Matrix $e^{\mathbf{A}t}$

The most challenging part is often computing $e^{\mathbf{A}t}$. Here are common methods:

#### 6.1. Using the Power Series Expansion

The definition of the matrix exponential is based on its Taylor series expansion:

$$
e^{\mathbf{A}t} = \mathbf{I} + \mathbf{A}t + \frac{(\mathbf{A}t)^2}{2!} + \frac{(\mathbf{A}t)^3}{3!} + \dots = \sum_{k=0}^{\infty} \frac{(\mathbf{A}t)^k}{k!}
$$

**Procedure:**
1.  Calculate powers of $\mathbf{A}$: $\mathbf{A}^2, \mathbf{A}^3, \dots$
2.  Calculate $\mathbf{A}^k t^k / k!$ for several terms.
3.  Sum the terms to approximate $e^{\mathbf{A}t}$.

**Example:** For a 2x2 matrix $\mathbf{A}$, this might involve computing $\mathbf{A}^2, \mathbf{A}^3$, etc., and summing the series. This method is generally computationally intensive and often used for theoretical derivations or small examples.

*(Refer to: Ogata, Chapter 2)*

#### 6.2. Using Diagonalization (Eigenvalue-Eigenvector Method)

This is a very common and powerful method for LTI systems.

**Conditions:** The matrix $\mathbf{A}$ must be diagonalizable. This means $\mathbf{A}$ must have $n$ linearly independent eigenvectors.

**Procedure:**
1.  **Find Eigenvalues:** Solve the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ to find eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$.
2.  **Find Eigenvectors:** For each eigenvalue $\lambda_i$, solve $(\mathbf{A} - \lambda_i\mathbf{I})\mathbf{v}_i = \mathbf{0}$ to find the corresponding eigenvector $\mathbf{v}_i$.
3.  **Form Matrices:**
    *   $\mathbf{P}$: A matrix whose columns are the linearly independent eigenvectors: $\mathbf{P} = [\mathbf{v}_1 \ \mathbf{v}_2 \ \dots \ \mathbf{v}_n]$.
    *   $\boldsymbol{\Lambda}$: A diagonal matrix whose diagonal elements are the eigenvalues: $\boldsymbol{\Lambda} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$.
4.  **Diagonalization:** $\mathbf{A} = \mathbf{P}\boldsymbol{\Lambda}\mathbf{P}^{-1}$
5.  **Compute $e^{\mathbf{A}t}$:**
    $$
    e^{\mathbf{A}t} = \mathbf{P}e^{\boldsymbol{\Lambda}t}\mathbf{P}^{-1}
    $$
    where $e^{\boldsymbol{\Lambda}t}$ is a diagonal matrix with elements $e^{\lambda_i t}$:
    $$
    e^{\boldsymbol{\Lambda}t} = \begin{bmatrix} e^{\lambda_1 t} & 0 & \dots & 0 \\ 0 & e^{\lambda_2 t} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & e^{\lambda_n t} \end{bmatrix}
    $$

**Example:**
Consider $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$.
1.  Eigenvalues: $\det(\mathbf{A} - \lambda\mathbf{I}) = \det\begin{bmatrix} -\lambda & 1 \\ -2 & -3-\lambda \end{bmatrix} = (-\lambda)(-3-\lambda) - (1)(-2) = 3\lambda + \lambda^2 + 2 = (\lambda+1)(\lambda+2) = 0$. So, $\lambda_1 = -1, \lambda_2 = -2$.
2.  Eigenvectors:
    *   For $\lambda_1 = -1$: $(\mathbf{A} - (-1)\mathbf{I})\mathbf{v}_1 = \begin{bmatrix} 1 & 1 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = \mathbf{0} \Rightarrow v_{11} + v_{12} = 0 \Rightarrow \mathbf{v}_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$ (choosing $v_{11}=1$).
    *   For $\lambda_2 = -2$: $(\mathbf{A} - (-2)\mathbf{I})\mathbf{v}_2 = \begin{bmatrix} 2 & 1 \\ -2 & -1 \end{bmatrix}\begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = \mathbf{0} \Rightarrow 2v_{21} + v_{22} = 0 \Rightarrow \mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$ (choosing $v_{21}=1$).
3.  Matrices:
    *   $\mathbf{P} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix}$
    *   $\boldsymbol{\Lambda} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$
4.  $\mathbf{P}^{-1}$: $\det(\mathbf{P}) = (1)(-2) - (1)(-1) = -2 + 1 = -1$.
    $\mathbf{P}^{-1} = \frac{1}{-1}\begin{bmatrix} -2 & -1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$.
5.  $e^{\mathbf{A}t} = \mathbf{P}e^{\boldsymbol{\Lambda}t}\mathbf{P}^{-1} = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix}\begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix}\begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
    $e^{\mathbf{A}t} = \begin{bmatrix} e^{-t} & e^{-2t} \\ -e^{-t} & -2e^{-2t} \end{bmatrix}\begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
    $e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix}$

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2; Nise, Chapter 4)*

**Important Note:** If eigenvalues are repeated, the diagonalization method needs modification using generalized eigenvectors (Jordan Canonical Form), which is more complex.

#### 6.3. Using the Cayley-Hamilton Theorem

This theorem states that every square matrix satisfies its own characteristic equation.

**Procedure:**
1.  **Find the Characteristic Equation:** $\Delta(\lambda) = \det(\mathbf{A} - \lambda\mathbf{I}) = 0$.
2.  **Replace $\lambda$ with $\mathbf{A}$:** $\Delta(\mathbf{A}) = \mathbf{0}$.
3.  **Express $e^{\mathbf{A}t}$ as a polynomial in $\mathbf{A}$:** The characteristic equation is a polynomial of degree $n$. Since $e^{\mathbf{A}t}$ can be shown to be representable as a polynomial of degree at most $n-1$, i.e., $e^{\mathbf{A}t} = c_0(t)\mathbf{I} + c_1(t)\mathbf{A} + \dots + c_{n-1}(t)\mathbf{A}^{n-1}$.
4.  **Use the Eigenvalues:** The coefficients $c_i(t)$ can be found by satisfying the relationship $e^{\lambda_i t} = c_0(t) + c_1(t)\lambda_i + \dots + c_{n-1}(t)\lambda_i^{n-1}$ for each distinct eigenvalue $\lambda_i$. If there are repeated eigenvalues, derivatives of this relation are used.
5.  **Solve for coefficients:** Solve the system of linear equations for $c_i(t)$.

**Example (Same as above):**
$\Delta(\lambda) = \lambda^2 + 3\lambda + 2 = 0$.
By Cayley-Hamilton: $\mathbf{A}^2 + 3\mathbf{A} + 2\mathbf{I} = \mathbf{0}$.
We want to find $e^{\mathbf{A}t}$. The eigenvalues are $\lambda_1 = -1, \lambda_2 = -2$.
Let $e^{\mathbf{A}t} = c_0(t)\mathbf{I} + c_1(t)\mathbf{A}$.
For $\lambda_1 = -1$: $e^{-t} = c_0(t) + c_1(t)(-1) \Rightarrow e^{-t} = c_0(t) - c_1(t)$
For $\lambda_2 = -2$: $e^{-2t} = c_0(t) + c_1(t)(-2) \Rightarrow e^{-2t} = c_0(t) - 2c_1(t)$

Subtracting the second equation from the first:
$e^{-t} - e^{-2t} = c_1(t)$
Substituting $c_1(t)$ back into the first equation:
$e^{-t} = c_0(t) - (e^{-t} - e^{-2t}) \Rightarrow c_0(t) = 2e^{-t} - e^{-2t}$

So, $e^{\mathbf{A}t} = (2e^{-t} - e^{-2t})\mathbf{I} + (e^{-t} - e^{-2t})\mathbf{A}$
$e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & 0 \\ 0 & 2e^{-t} - e^{-2t} \end{bmatrix} + \begin{bmatrix} 0 & e^{-t} - e^{-2t} \\ -2(e^{-t} - e^{-2t}) & -3(e^{-t} - e^{-2t}) \end{bmatrix}$
$e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & (2e^{-t} - e^{-2t}) - 3(e^{-t} - e^{-2t}) \end{bmatrix}$
$e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix}$
This matches the result from diagonalization.

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2)*

#### 6.4. Laplace Transform Method

This method leverages the Laplace transform to solve the state equations directly.

**Procedure:**
1.  **Take Laplace Transform of State Equation:**
    $s\mathbf{X}(s) - \mathbf{x}(0) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$
2.  **Rearrange to solve for $\mathbf{X}(s)$:**
    $(s\mathbf{I} - \mathbf{A})\mathbf{X}(s) = \mathbf{x}(0) + \mathbf{B}\mathbf{U}(s)$
3.  **Isolate $\mathbf{X}(s)$:**
    $\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{x}(0) + (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)$
4.  **Identify the State Transition Matrix:** The term $(s\mathbf{I} - \mathbf{A})^{-1}$ is the Laplace transform of the state transition matrix $\boldsymbol{\Phi}(t) = e^{\mathbf{A}t}$.
    $$
    \mathcal{L}[e^{\mathbf{A}t}] = (s\mathbf{I} - \mathbf{A})^{-1}
    $$
5.  **Inverse Laplace Transform:** Take the inverse Laplace transform of $\mathbf{X}(s)$ to get $\mathbf{x}(t)$.

**Example:**
For $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$:
$s\mathbf{I} - \mathbf{A} = \begin{bmatrix} s & 0 \\ 0 & s \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} s & -1 \\ 2 & s+3 \end{bmatrix}$
$(s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s(s+3) - (-2)(1)}\begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix} = \frac{1}{s^2+3s+2}\begin{bmatrix} s+3 & 1 \\ -2 & s \end{bmatrix}$
$(s\mathbf{I} - \mathbf{A})^{-1} = \begin{bmatrix} \frac{s+3}{(s+1)(s+2)} & \frac{1}{(s+1)(s+2)} \\ \frac{-2}{(s+1)(s+2)} & \frac{s}{(s+1)(s+2)} \end{bmatrix}$

Now, use partial fraction expansion for each term to find the inverse Laplace transform.
For example, for $\frac{s+3}{(s+1)(s+2)}$:
$\frac{s+3}{(s+1)(s+2)} = \frac{A}{s+1} + \frac{B}{s+2}$
$s+3 = A(s+2) + B(s+1)$
If $s=-1$, $2 = A(1) \Rightarrow A=2$.
If $s=-2$, $1 = B(-1) \Rightarrow B=-1$.
So, $\frac{s+3}{(s+1)(s+2)} = \frac{2}{s+1} - \frac{1}{s+2}$.
$\mathcal{L}^{-1}\left\{\frac{2}{s+1} - \frac{1}{s+2}\right\} = 2e^{-t} - e^{-2t}$.

Continuing this for all terms in the matrix will yield the state transition matrix $e^{\mathbf{A}t}$.

*(Refer to: Nagarath & Gopal, Chapter 12; Kuo & Golnaraghi, Chapter 6)*

---

### 7. Example: Solving a Complete State Equation

Let's consider a second-order system with:
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$
Initial state: $\mathbf{x}(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
Input: $u(t) = 1$ (unit step function)

**Goal:** Find the state vector $\mathbf{x}(t)$ and output $\mathbf{y}(t)$.

**Steps:**

1.  **Compute the State Transition Matrix $\boldsymbol{\Phi}(t) = e^{\mathbf{A}t}$:**
    We already computed this using diagonalization:
    $e^{\mathbf{A}t} = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix}$

2.  **Compute the first term of the solution (response to initial conditions):**
    $\mathbf{x}_1(t) = e^{\mathbf{A}t}\mathbf{x}(0) = \begin{bmatrix} 2e^{-t} - e^{-2t} & e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} & -e^{-t} + 2e^{-2t} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
    $\mathbf{x}_1(t) = \begin{bmatrix} 2e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} \end{bmatrix}$

3.  **Compute the second term of the solution (response to input):**
    $\mathbf{x}_2(t) = \int_{0}^{t} e^{\mathbf{A}(t-\tau)}\mathbf{B}\mathbf{u}(\tau) d\tau$
    Since $u(\tau) = 1$, and $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$:
    $e^{\mathbf{A}(t-\tau)}\mathbf{B} = \begin{bmatrix} 2e^{-(t-\tau)} - e^{-2(t-\tau)} & e^{-(t-\tau)} - e^{-2(t-\tau)} \\ -2e^{-(t-\tau)} + 2e^{-2(t-\tau)} & -e^{-(t-\tau)} + 2e^{-2(t-\tau)} \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
    $e^{\mathbf{A}(t-\tau)}\mathbf{B} = \begin{bmatrix} e^{-(t-\tau)} - e^{-2(t-\tau)} \\ -e^{-(t-\tau)} + 2e^{-2(t-\tau)} \end{bmatrix}$

    Now integrate:
    $\mathbf{x}_2(t) = \int_{0}^{t} \begin{bmatrix} e^{-(t-\tau)} - e^{-2(t-\tau)} \\ -e^{-(t-\tau)} + 2e^{-2(t-\tau)} \end{bmatrix} d\tau$

    Let's integrate each component:
    $\int_{0}^{t} (e^{-t}e^{\tau} - e^{-2t}e^{2\tau}) d\tau = e^{-t}\int_{0}^{t} e^{\tau} d\tau - e^{-2t}\int_{0}^{t} e^{2\tau} d\tau$
    $= e^{-t}[e^{\tau}]_{0}^{t} - e^{-2t}[\frac{1}{2}e^{2\tau}]_{0}^{t}$
    $= e^{-t}(e^t - 1) - e^{-2t}(\frac{1}{2}e^{2t} - \frac{1}{2})$
    $= (1 - e^{-t}) - (\frac{1}{2} - \frac{1}{2}e^{-2t})$
    $= \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t}$

    $\int_{0}^{t} (-e^{-t}e^{\tau} + 2e^{-2t}e^{2\tau}) d\tau = -e^{-t}\int_{0}^{t} e^{\tau} d\tau + 2e^{-2t}\int_{0}^{t} e^{2\tau} d\tau$
    $= -e^{-t}[e^{\tau}]_{0}^{t} + 2e^{-2t}[\frac{1}{2}e^{2\tau}]_{0}^{t}$
    $= -e^{-t}(e^t - 1) + 2e^{-2t}(\frac{1}{2}e^{2t} - \frac{1}{2})$
    $= -(1 - e^{-t}) + (1 - e^{-2t})$
    $= -1 + e^{-t} + 1 - e^{-2t}$
    $= e^{-t} - e^{-2t}$

    So, $\mathbf{x}_2(t) = \begin{bmatrix} \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t} \\ e^{-t} - e^{-2t} \end{bmatrix}$

4.  **Compute the total state vector $\mathbf{x}(t)$:**
    $\mathbf{x}(t) = \mathbf{x}_1(t) + \mathbf{x}_2(t)$
    $\mathbf{x}(t) = \begin{bmatrix} 2e^{-t} - e^{-2t} \\ -2e^{-t} + 2e^{-2t} \end{bmatrix} + \begin{bmatrix} \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t} \\ e^{-t} - e^{-2t} \end{bmatrix}$
    $\mathbf{x}(t) = \begin{bmatrix} \frac{3}{2}e^{-t} - \frac{1}{2}e^{-2t} + \frac{1}{2} \\ -e^{-t} + e^{-2t} \end{bmatrix}$

    Let $x_1(t) = \frac{3}{2}e^{-t} - \frac{1}{2}e^{-2t} + \frac{1}{2}$ and $x_2(t) = -e^{-t} + e^{-2t}$.

5.  **Compute the output $\mathbf{y}(t)$:**
    $\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$
    $\mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 \cdot 1$
    $\mathbf{y}(t) = x_1(t) = \frac{3}{2}e^{-t} - \frac{1}{2}e^{-2t} + \frac{1}{2}$

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2)*

---

### 8. Relation to Transfer Function Approach

The state-space representation and transfer function representation are interconnected. For an LTI system:

$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0) + \int_{0}^{t} e^{\mathbf{A}(t-\tau)}\mathbf{B}\mathbf{u}(\tau) d\tau
$$

$$
\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)
$$

Taking the Laplace transform (with $\mathbf{x}(0) = \mathbf{0}$ for simplicity in finding the transfer function):

$$
\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)
$$

$$
\mathbf{Y}(s) = \mathbf{C}\mathbf{X}(s) + \mathbf{D}\mathbf{U}(s)
$$

Substituting $\mathbf{X}(s)$:

$$
\mathbf{Y}(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s) + \mathbf{D}\mathbf{U}(s)
$$

The transfer function matrix $\mathbf{G}(s)$ is defined as $\mathbf{Y}(s) = \mathbf{G}(s)\mathbf{U}(s)$:

$$
\mathbf{G}(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}
$$

This equation explicitly shows how to obtain the transfer function from the state-space matrices.

**Connection to COs:**
*   **CO1 (Transfer Function Approach):** Understanding this link is crucial for bridging the two representation methods.
*   **CO5 (Controllability and Observability):** The methods for analyzing controllability and observability (using $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$) are directly linked to the state-space matrices used in solving state equations.

*(Refer to: Nagarath & Gopal, Chapter 12; Ogata, Chapter 2; Nise, Chapter 4)*

---

### 9. Practice Questions and Exercises

**Question 1:**
For a system with state equation $\dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}\mathbf{x}(t)$ and initial condition $\mathbf{x}(0) = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$, find the state vector $\mathbf{x}(t)$.

**Solution 1:**
The $\mathbf{A}$ matrix is diagonal.
$\mathbf{A} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$
$e^{\mathbf{A}t} = \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix}$
$\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0) = \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-2t} \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} e^{-t} \\ e^{-2t} \end{bmatrix}$

---

**Question 2:**
Given $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix}$, compute the state transition matrix $e^{\mathbf{A}t}$ using the Cayley-Hamilton theorem.

**Solution 2:**
Characteristic equation: $\det(\mathbf{A} - \lambda\mathbf{I}) = \det\begin{bmatrix} -\lambda & 1 \\ -1 & -2-\lambda \end{bmatrix} = (-\lambda)(-2-\lambda) - (1)(-1) = 2\lambda + \lambda^2 + 1 = (\lambda+1)^2 = 0$.
Eigenvalue $\lambda = -1$ (repeated).
By Cayley-Hamilton: $(\mathbf{A}+\mathbf{I})^2 = \mathbf{0}$.
Let $e^{\mathbf{A}t} = c_0(t)\mathbf{I} + c_1(t)\mathbf{A}$.
Since the eigenvalue is repeated, we also use the derivative of the relationship:
$e^{\lambda t} = c_0(t) + c_1(t)\lambda$
$te^{\lambda t} = c_1(t)$

For $\lambda = -1$:
$e^{-t} = c_0(t) + c_1(t)(-1) \Rightarrow e^{-t} = c_0(t) - c_1(t)$
$te^{-t} = c_1(t)$

Substitute $c_1(t)$ into the first equation:
$e^{-t} = c_0(t) - te^{-t} \Rightarrow c_0(t) = e^{-t} + te^{-t}$

So, $e^{\mathbf{A}t} = (e^{-t} + te^{-t})\mathbf{I} + te^{-t}\mathbf{A}$
$e^{\mathbf{A}t} = e^{-t}\begin{bmatrix} 1+t & 0 \\ 0 & 1+t \end{bmatrix} + te^{-t}\begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix}$
$e^{\mathbf{A}t} = e^{-t}\begin{bmatrix} 1+t & 1 \\ -1 & (1+t)-2t \end{bmatrix} = e^{-t}\begin{bmatrix} 1+t & 1 \\ -1 & 1-t \end{bmatrix}$

---

**Question 3:**
For a system described by $\dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -6 & -5 \end{bmatrix}\mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix}u(t)$ and $\mathbf{x}(0) = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, find the transfer function from $u(t)$ to $y(t) = x_1(t)$.

**Solution 3:**
$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -6 & -5 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$.
Transfer function $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$.
$s\mathbf{I} - \mathbf{A} = \begin{bmatrix} s & -1 \\ 6 & s+5 \end{bmatrix}$
$(s\mathbf{I} - \mathbf{A})^{-1} = \frac{1}{s(s+5) - (-6)(1)}\begin{bmatrix} s+5 & 1 \\ -6 & s \end{bmatrix} = \frac{1}{s^2+5s+6}\begin{bmatrix} s+5 & 1 \\ -6 & s \end{bmatrix}$
$G(s) = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{(s+2)(s+3)}\begin{bmatrix} s+5 & 1 \\ -6 & s \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} + 0$
$G(s) = \frac{1}{(s+2)(s+3)} \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} s+5 \\ -6 \end{bmatrix} \begin{bmatrix} 1 \\ s \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
$G(s) = \frac{1}{(s+2)(s+3)} \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ s \end{bmatrix} = \frac{1}{(s+2)(s+3)} [1 \cdot 1 + 0 \cdot s] = \frac{1}{s^2+5s+6}$

---

### 10. Important Points to Remember

*   The state transition matrix $\boldsymbol{\Phi}(t) = e^{\mathbf{A}t}$ is crucial for solving homogeneous state equations and understanding system evolution.
*   The complete solution of state equations accounts for both initial conditions and external inputs.
*   Various methods exist for computing $e^{\mathbf{A}t}$, including power series, diagonalization, Cayley-Hamilton theorem, and Laplace transform. Diagonalization is often preferred for its analytical clarity, provided the matrix is diagonalizable.
*   The transfer function matrix can be derived from the state-space matrices using $G(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$.
*   Understanding state variable analysis provides a deeper insight into system behavior and is fundamental for analyzing controllability and observability (CO5).

---

This module provides the essential tools for solving the fundamental state equations of linear systems. The state transition matrix is central to this, bridging the gap between system dynamics and external inputs/initial conditions. Mastering these concepts is a prerequisite for advanced control system design and analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
