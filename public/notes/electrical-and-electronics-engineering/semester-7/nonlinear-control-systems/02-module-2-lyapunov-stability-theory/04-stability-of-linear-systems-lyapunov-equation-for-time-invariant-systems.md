---
title: "Stability of linear systems - Lyapunov equation for time-invariant systems"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 2: Lyapunov Stability Theory:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a7"
status: "completed"
scrapedAt: "2026-05-23T16:38:20.087Z"
---
# NONLINEAR CONTROL SYSTEMS

## Module 2: Lyapunov Stability Theory

### Topic: Stability of Linear Systems - Lyapunov Equation for Time-Invariant Systems

This topic focuses on a fundamental tool for analyzing the stability of linear time-invariant (LTI) systems: the Lyapunov equation. We will explore how it provides a systematic way to determine if an LTI system is stable without explicitly computing eigenvalues.

**Course Outcomes Addressed:**

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)** - While this topic is about linear systems, understanding Lyapunov stability for linear systems forms the bedrock for analyzing the behavior of nonlinear systems around their equilibrium points using linearization.
*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)** - This is the primary focus. The Lyapunov equation provides a direct method for analyzing the stability of LTI systems, which are a subset of nonlinear systems (where the nonlinearity is trivial). The concepts learned here are directly transferable to nonlinear systems.

**Learning Outcomes:**

*   Understand the concept of Lyapunov stability for linear systems.
*   Formulate and solve the Lyapunov equation for time-invariant linear systems.
*   Interpret the solution of the Lyapunov equation to determine system stability.
*   Relate the Lyapunov equation to the controllability and observability of linear systems.

---

### 1. Introduction to Lyapunov Stability for Linear Systems

Lyapunov stability theory provides a method to determine the stability of a system without explicitly solving its differential equations. For linear systems, this theory offers a direct and powerful approach.

**Key Concept: Stability**

A system is considered stable if, when perturbed from an equilibrium point, it remains "close" to that equilibrium point. For linear systems, the equilibrium point is typically the origin.

*   **Asymptotic Stability:** If a system is not only stable but also returns to the equilibrium point over time after a perturbation.
*   **Marginal Stability:** If the system is stable but does not return to the equilibrium point. Oscillations may persist.
*   **Unstability:** If the system moves away from the equilibrium point after a perturbation.

---

### 2. The Lyapunov Equation for Time-Invariant Linear Systems

Consider a linear time-invariant (LTI) system described by the state-space equation:

$\dot{x}(t) = Ax(t)$

where:
*   $x(t) \in \mathbb{R}^n$ is the state vector.
*   $A \in \mathbb{R}^{n \times n}$ is the system matrix.

**The Core Idea: Lyapunov Function**

A Lyapunov function $V(x)$ is a scalar function of the system's state, $V(x(t))$, that is positive definite and whose time derivative along the system's trajectories is negative semi-definite or negative definite.

**Lyapunov's Direct Method**

Lyapunov's direct method (or second method) states that if we can find a scalar function $V(x)$ such that:

1.  $V(x)$ is positive definite (i.e., $V(0) = 0$ and $V(x) > 0$ for $x \neq 0$).
2.  $\dot{V}(x) = \frac{dV}{dt} \le 0$ along the trajectories of the system (i.e., $\dot{V}(x(t)) \le 0$ for all $t$).

Then, the equilibrium point (the origin in this case) is **stable**.

If, in addition, $\dot{V}(x) < 0$ for all $x \neq 0$, then the equilibrium point is **asymptotically stable**.

**Deriving the Lyapunov Equation**

For an LTI system $\dot{x} = Ax$, let's consider a quadratic Lyapunov function candidate:

$V(x) = x^T P x$

where $P$ is a symmetric positive definite matrix ($P = P^T > 0$).

The time derivative of $V(x)$ is:

$\dot{V}(x) = \frac{d}{dt}(x^T P x)$
$\dot{V}(x) = \dot{x}^T P x + x^T P \dot{x}$

Substituting $\dot{x} = Ax$:

$\dot{V}(x) = (Ax)^T P x + x^T P (Ax)$
$\dot{V}(x) = x^T A^T P x + x^T P A x$
$\dot{V}(x) = x^T (A^T P + P A) x$

For asymptotic stability, we require $\dot{V}(x) < 0$ for all $x \neq 0$. This means we need the matrix $(A^T P + P A)$ to be negative definite.

Let $Q = -(A^T P + P A)$. If we can find a positive definite matrix $Q$, then the system is asymptotically stable if we can find a positive definite matrix $P$ such that $A^T P + P A = -Q$. This is known as the **Lyapunov Equation**.

**The Lyapunov Equation:**

$A^T P + P A = -Q$

where:
*   $P$ is a symmetric positive definite matrix ($P = P^T > 0$).
*   $Q$ is a symmetric positive definite matrix ($Q = Q^T > 0$).

**The Fundamental Theorem for Linear Systems:**

The LTI system $\dot{x} = Ax$ is asymptotically stable if and only if for any symmetric positive definite matrix $Q$, the unique symmetric solution $P$ to the Lyapunov equation $A^T P + P A = -Q$ is positive definite.

**Crucially, for LTI systems, asymptotic stability is equivalent to having all eigenvalues of $A$ with negative real parts.** This is the standard linear system stability criterion. The Lyapunov equation provides an alternative way to check this.

---

### 3. Solving the Lyapunov Equation

For a given system matrix $A$, and a chosen positive definite matrix $Q$, we need to solve the Lyapunov equation $A^T P + P A = -Q$ for $P$.

**Key Properties:**

*   If $A$ is asymptotically stable, then for any $Q > 0$, there exists a unique $P > 0$ that solves the equation.
*   If $A$ is not asymptotically stable, then for $Q > 0$, a positive definite solution $P$ does not exist.

**Methods for Solving:**

1.  **Analytical Solution (for small systems):** For low-dimensional systems, we can write out the matrix equation and solve it as a system of linear equations.

    *   If $P$ is symmetric, it has $n(n+1)/2$ independent elements. The Lyapunov equation $A^T P + P A = -Q$ yields $n(n+1)/2$ linear equations for these elements.

2.  **Vectorization and Kronecker Product:** The Lyapunov equation can be rewritten in a vector form that is easier to solve using linear algebraic tools.

    Let $p = \text{vec}(P)$ and $q = \text{vec}(Q)$, where $\text{vec}(\cdot)$ is the vectorization operator that stacks the columns of a matrix into a single vector.

    The Lyapunov equation $A^T P + P A = -Q$ can be transformed into:

    $(I_n \otimes A^T + A^T \otimes I_n) \text{vec}(P) = -\text{vec}(Q)$

    where $\otimes$ denotes the Kronecker product and $I_n$ is the $n \times n$ identity matrix.

    This is a standard linear system of the form $M p = b$, where $M = (I_n \otimes A^T + A^T \otimes I_n)$ and $b = -\text{vec}(Q)$. The matrix $M$ is an $n^2 \times n^2$ matrix.

    **Example:**
    Consider $\dot{x} = Ax$.
    $A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$, $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$ (since $P$ is symmetric).

    $A^T P + P A = \begin{bmatrix} a_{11} & a_{21} \\ a_{12} & a_{22} \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$

    $= \begin{bmatrix} a_{11}p_{11} + a_{21}p_{12} & a_{11}p_{12} + a_{21}p_{22} \\ a_{12}p_{11} + a_{22}p_{12} & a_{12}p_{12} + a_{22}p_{22} \end{bmatrix} + \begin{bmatrix} a_{11}p_{11} + a_{12}p_{12} & a_{12}p_{11} + a_{22}p_{12} \\ a_{21}p_{11} + a_{22}p_{12} & a_{21}p_{12} + a_{22}p_{22} \end{bmatrix}$

    For $P$ to be symmetric, the off-diagonal elements must be equal:
    $a_{11}p_{12} + a_{21}p_{22} = a_{12}p_{11} + a_{22}p_{12}$ (This is already satisfied if $P$ is symmetric and $A^T P + PA$ is symmetric).

    The equation $A^T P + P A = -Q$ implies that $-Q$ must be symmetric. If $Q$ is chosen to be symmetric, this condition is met.

    Let's set $Q = I$, the identity matrix. Then $-Q = -I$.

    $A^T P + P A = -I$

    $2a_{11}p_{11} + 2a_{21}p_{12} = -1$
    $a_{11}p_{12} + a_{21}p_{22} + a_{12}p_{11} + a_{22}p_{12} = 0$
    $2a_{12}p_{11} + 2a_{22}p_{12} = 0$
    $2a_{12}p_{12} + 2a_{22}p_{22} = -1$

    We have three equations for three unknowns ($p_{11}, p_{12}, p_{22}$):
    1. $2a_{11}p_{11} + 2a_{21}p_{12} = -1$
    2. $(a_{11}+a_{22})p_{12} + a_{12}p_{11} + a_{21}p_{22} = 0$
    3. $2a_{12}p_{12} + 2a_{22}p_{22} = -1$

    This system of linear equations can be solved for $p_{11}, p_{12}, p_{22}$. Once $P$ is found, we check if it is positive definite.

3.  **Numerical Solvers:** Most control system software packages (like MATLAB, SciPy in Python) have built-in functions to solve the Lyapunov equation.

    *   **MATLAB:** `lyapunov(A, Q)` solves $A^T P + P A = -Q$. If $Q$ is omitted, it defaults to $Q=I$.

---

### 4. Stability Analysis using the Lyapunov Equation

**Criterion:** An LTI system $\dot{x} = Ax$ is asymptotically stable if and only if for *any* symmetric positive definite matrix $Q$, the unique symmetric solution $P$ to the Lyapunov equation $A^T P + P A = -Q$ is positive definite.

**Practical Approach:**

1.  **Choose a $Q$ matrix:** The simplest and most common choice is $Q = I$ (the identity matrix). However, any symmetric positive definite $Q$ can be used. A different $Q$ might yield a $P$ that is easier to check for positive definiteness.
2.  **Solve the Lyapunov Equation:** Solve $A^T P + P A = -Q$ for $P$.
3.  **Check if $P$ is Positive Definite:** A symmetric matrix $P$ is positive definite if:
    *   All its eigenvalues are positive.
    *   All its leading principal minors are positive.

**Relationship to Eigenvalues:**

While the Lyapunov equation can be used as a stability test, it's important to remember that the *direct* test for LTI systems is to check the eigenvalues of $A$. The system is asymptotically stable if and only if all eigenvalues of $A$ have negative real parts.

**Why is the Lyapunov Equation useful?**

*   **Generalization to Nonlinear Systems:** The Lyapunov equation provides a framework for extending stability analysis to nonlinear systems. For nonlinear systems $\dot{x} = f(x)$, we linearize around an equilibrium point to get $\dot{x} = Ax$, and then the Lyapunov equation can be used to analyze the stability of this linearized system.
*   **Controller Design:** The Lyapunov equation is crucial in designing stabilizing controllers. For example, in model reference adaptive control and optimal control (LQR).
*   **System Properties:** The solution to the Lyapunov equation can reveal other system properties like controllability and observability.

---

### 5. Relationship to Controllability and Observability

The solution to the Lyapunov equation is intimately linked to the controllability and observability of the system.

**Controllability:**

A linear system $\dot{x} = Ax + Bu$ is controllable if, for any initial state $x(0)$, there exists a control input $u(t)$ that drives the system to the origin in a finite time.

The controllability Gramian, $W_c(t)$, is defined as:

$W_c(t) = \int_0^t e^{A\tau} B B^T e^{A^T\tau} d\tau$

As $t \to \infty$, if the system is stable, the controllability Gramian converges to a steady-state solution $W_c$:

$AW_c + W_cA^T = -BB^T$

This equation is similar in form to the Lyapunov equation. If we choose $Q = BB^T$, and $A$ is stable, the solution $W_c$ is the controllability Gramian. The system is controllable if and only if $W_c$ is positive definite.

**Observability:**

A linear system $\dot{x} = Ax$, $y = Cx$ is observable if, for any initial state $x(0)$, the initial state can be determined from the output $y(t)$ over a finite time interval.

The observability Gramian, $W_o(t)$, is defined as:

$W_o(t) = \int_0^t e^{A^T\tau} C^T C e^{A\tau} d\tau$

As $t \to \infty$, if the system is stable, the observability Gramian converges to a steady-state solution $W_o$:

$A^T W_o + W_o A = -C^T C$

This is a Lyapunov equation where $Q = C^T C$. The system is observable if and only if $W_o$ is positive definite.

**In summary:**
*   Solving $A^T P + P A = -BB^T$ for $P=W_c$ checks controllability.
*   Solving $A^T P + P A = -C^T C$ for $P=W_o$ checks observability.

The solution $P$ to $A^T P + P A = -Q$ for a general $Q$ can be seen as a generalization of these concepts.

---

### 6. Examples

**Example 1: A Stable System**

Consider the system $\dot{x} = Ax$ with $A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$.
The eigenvalues of $A$ are $-1$ and $-2$, both with negative real parts, so the system is asymptotically stable.

Let's verify using the Lyapunov equation with $Q = I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.
We need to solve $A^T P + P A = -I$.
$A^T = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$.

Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$.

$A^T P + P A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$

$= \begin{bmatrix} -p_{11} & -p_{12} \\ -p_{12} & -2p_{22} \end{bmatrix} + \begin{bmatrix} -p_{11} & -2p_{12} \\ -p_{12} & -2p_{22} \end{bmatrix}$
$= \begin{bmatrix} -2p_{11} & -3p_{12} \\ -3p_{12} & -4p_{22} \end{bmatrix}$

We want this to equal $-I = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.

Equating the elements:
*   $-2p_{11} = -1 \implies p_{11} = 0.5$
*   $-3p_{12} = 0 \implies p_{12} = 0$
*   $-4p_{22} = -1 \implies p_{22} = 0.25$

So, $P = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.25 \end{bmatrix}$.

To check if $P$ is positive definite:
*   Eigenvalues of $P$ are $0.5$ and $0.25$, which are both positive.
*   Leading principal minors: $0.5 > 0$, and $\det(P) = (0.5)(0.25) - 0^2 = 0.125 > 0$.

Since $P$ is positive definite, and we found a $P$ for $Q=I$, this confirms the system is asymptotically stable.

**Example 2: An Unstable System**

Consider the system $\dot{x} = Ax$ with $A = \begin{bmatrix} 1 & 0 \\ 0 & -2 \end{bmatrix}$.
The eigenvalues of $A$ are $1$ and $-2$. Since one eigenvalue is positive, the system is unstable.

Let's try to solve the Lyapunov equation with $Q = I$.
$A^T P + P A = -I$.
$A^T = \begin{bmatrix} 1 & 0 \\ 0 & -2 \end{bmatrix}$.

Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$.

$A^T P + P A = \begin{bmatrix} 1 & 0 \\ 0 & -2 \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & -2 \end{bmatrix}$

$= \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & -2p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & -2p_{12} \\ p_{12} & -2p_{22} \end{bmatrix}$
$= \begin{bmatrix} 2p_{11} & -p_{12} \\ -p_{12} & -4p_{22} \end{bmatrix}$

We want this to equal $-I = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.

Equating the elements:
*   $2p_{11} = -1 \implies p_{11} = -0.5$
*   $-p_{12} = 0 \implies p_{12} = 0$
*   $-4p_{22} = -1 \implies p_{22} = 0.25$

So, $P = \begin{bmatrix} -0.5 & 0 \\ 0 & 0.25 \end{bmatrix}$.

This matrix $P$ is not positive definite (since $p_{11} < 0$). This indicates that the system is not asymptotically stable, which aligns with the fact that one eigenvalue is positive.

**Example 3: Marginally Stable System**

Consider the system $\dot{x} = Ax$ with $A = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$.
The eigenvalues are $0, 0$. This system is marginally stable (not asymptotically stable).

Let's try to solve $A^T P + P A = -I$.
$A^T = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}$.

Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$.

$A^T P + P A = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$

$= \begin{bmatrix} 0 & 0 \\ p_{11} & p_{12} \end{bmatrix} + \begin{bmatrix} 0 & p_{11} \\ 0 & p_{12} \end{bmatrix}$
$= \begin{bmatrix} 0 & p_{11} \\ p_{11} & 2p_{12} \end{bmatrix}$

We want this to equal $-I = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.

Equating the elements:
*   $0 = -1$ (Contradiction!)

This means there is no solution $P$ to $A^T P + P A = -I$. This is expected because for a marginally stable system, a Lyapunov function with a strictly negative definite derivative $\dot{V}$ might not exist for all $Q>0$. If we chose a different $Q$, we might find a solution, but it wouldn't be positive definite, indicating instability or marginal stability.

If we try to solve $A^T P + P A = -Q$ for a $Q$ that *is* compatible with the structure of $A$, e.g., $Q = \begin{bmatrix} 0 & 0 \\ 0 & q_{22} \end{bmatrix}$ where $q_{22} > 0$:

$\begin{bmatrix} 0 & p_{11} \\ p_{11} & 2p_{12} \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & -q_{22} \end{bmatrix}$

*   $0 = 0$
*   $p_{11} = 0$
*   $p_{11} = 0$
*   $2p_{12} = -q_{22} \implies p_{12} = -q_{22}/2$

So $P = \begin{bmatrix} 0 & -q_{22}/2 \\ -q_{22}/2 & p_{22} \end{bmatrix}$.

The determinant is $\det(P) = 0 \cdot p_{22} - (-q_{22}/2)^2 = -q_{22}^2/4$.
Since $q_{22} > 0$, $\det(P) < 0$. Thus, $P$ is never positive definite. This confirms the system is not asymptotically stable.

---

### 7. Important Points to Remember

*   **Lyapunov Equation:** $A^T P + P A = -Q$.
*   **Stability Condition:** LTI system $\dot{x} = Ax$ is asymptotically stable if and only if for *any* symmetric positive definite $Q$, the unique symmetric solution $P$ to the Lyapunov equation is positive definite.
*   **Practical Test:** Choose $Q=I$, solve for $P$, and check if $P$ is positive definite.
*   **Eigenvalues:** The most direct way to check stability for LTI systems is still to verify that all eigenvalues of $A$ have negative real parts. The Lyapunov equation offers an alternative and a bridge to nonlinear systems.
*   **Controllability/Observability:** The Lyapunov equation is fundamental to defining and testing controllability (via the controllability Gramian $W_c$) and observability (via the observability Gramian $W_o$).
*   **Textbook References:**
    *   **Khalil (2002):** Chapter 3 provides a thorough introduction to Lyapunov stability theory, including the Lyapunov equation for linear systems and its relation to asymptotic stability. He emphasizes the connection to quadratic Lyapunov functions.
    *   **Slotine & Li (1991):** Chapter 2, specifically on Lyapunov stability, covers the Lyapunov equation for linear systems. They often use it as a stepping stone to analyzing nonlinear systems and designing controllers. They discuss the existence and uniqueness of solutions.
    *   **Isidori (1985):** Chapter 3 discusses stability of linear systems and introduces the Lyapunov equation as a primary tool.
    *   **Vidyasagar (1991):** Chapter 2 focuses on the stability of linear systems and likely covers the Lyapunov equation and its properties.

---

### 8. Practice Questions

**Question 1:**
Consider the linear time-invariant system $\dot{x} = Ax$ with $A = \begin{bmatrix} -2 & 1 \\ 0 & -1 \end{bmatrix}$.
(a) Determine the stability of the system by examining its eigenvalues.
(b) Use the Lyapunov equation with $Q=I$ to verify the stability. Solve for the matrix $P$ and check if it is positive definite.

**Question 2:**
Consider the linear time-invariant system $\dot{x} = Ax$ with $A = \begin{bmatrix} 1 & 2 \\ 3 & -1 \end{bmatrix}$.
(a) Determine the stability of the system by examining its eigenvalues.
(b) Attempt to solve the Lyapunov equation $A^T P + P A = -I$. What can you conclude from your attempt?

**Question 3:**
For a linear system $\dot{x} = Ax$, what property of the matrix $A$ is equivalent to the existence of a positive definite solution $P$ to $A^T P + P A = -Q$ for any $Q>0$?

**Question 4 (Conceptual):**
Explain why the Lyapunov equation provides a more general framework for stability analysis compared to simply checking eigenvalues, even though for linear systems, eigenvalues are sufficient.

---

### 9. Answers to Practice Questions

**Answer 1:**
(a) The eigenvalues of $A = \begin{bmatrix} -2 & 1 \\ 0 & -1 \end{bmatrix}$ are the diagonal elements since it is an upper triangular matrix. The eigenvalues are $\lambda_1 = -2$ and $\lambda_2 = -1$. Both eigenvalues have negative real parts, so the system is asymptotically stable.

(b) We need to solve $A^T P + P A = -I$.
$A^T = \begin{bmatrix} -2 & 0 \\ 1 & -1 \end{bmatrix}$.
Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$.

$A^T P + P A = \begin{bmatrix} -2 & 0 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} -2 & 1 \\ 0 & -1 \end{bmatrix}$
$= \begin{bmatrix} -2p_{11} & -2p_{12} \\ p_{11}-p_{12} & -p_{12}-p_{22} \end{bmatrix} + \begin{bmatrix} -2p_{11} & p_{11}-p_{12} \\ -2p_{12} & p_{12}-p_{22} \end{bmatrix}$
$= \begin{bmatrix} -4p_{11} & p_{11}-3p_{12} \\ p_{11}-3p_{12} & -2p_{12}-2p_{22} \end{bmatrix}$

We want this to equal $-I = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.

Equating elements:
*   $-4p_{11} = -1 \implies p_{11} = 0.25$
*   $p_{11}-3p_{12} = 0 \implies 0.25 - 3p_{12} = 0 \implies p_{12} = 0.25/3 = 1/12$
*   $-2p_{12}-2p_{22} = -1 \implies -2(1/12) - 2p_{22} = -1 \implies -1/6 - 2p_{22} = -1$
    $-2p_{22} = -1 + 1/6 = -5/6 \implies p_{22} = 5/12$

So, $P = \begin{bmatrix} 0.25 & 1/12 \\ 1/12 & 5/12 \end{bmatrix}$.

Check for positive definiteness:
*   $p_{11} = 0.25 > 0$.
*   $\det(P) = (0.25)(5/12) - (1/12)^2 = (1/4)(5/12) - 1/144 = 5/48 - 1/144 = 15/144 - 1/144 = 14/144 > 0$.

Since both conditions are met, $P$ is positive definite, confirming the system is asymptotically stable.

**Answer 2:**
(a) The eigenvalues of $A = \begin{bmatrix} 1 & 2 \\ 3 & -1 \end{bmatrix}$ are found from $\det(A - \lambda I) = 0$.
$\det \begin{bmatrix} 1-\lambda & 2 \\ 3 & -1-\lambda \end{bmatrix} = (1-\lambda)(-1-\lambda) - (2)(3) = -(1-\lambda)(1+\lambda) - 6 = -1 + \lambda^2 - 6 = \lambda^2 - 7 = 0$.
So, $\lambda^2 = 7$, which gives $\lambda = \pm \sqrt{7}$.
Since one eigenvalue ($\sqrt{7}$) has a positive real part, the system is unstable.

(b) We need to solve $A^T P + P A = -I$.
$A^T = \begin{bmatrix} 1 & 3 \\ 2 & -1 \end{bmatrix}$.
Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix}$.

$A^T P + P A = \begin{bmatrix} 1 & 3 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} + \begin{bmatrix} p_{11} & p_{12} \\ p_{12} & p_{22} \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 3 & -1 \end{bmatrix}$
$= \begin{bmatrix} p_{11}+3p_{12} & p_{12}+3p_{22} \\ 2p_{11}-p_{12} & 2p_{12}-p_{22} \end{bmatrix} + \begin{bmatrix} p_{11}+3p_{12} & 2p_{11}-p_{12} \\ p_{12}+3p_{22} & 2p_{12}-p_{22} \end{bmatrix}$
$= \begin{bmatrix} 2p_{11}+6p_{12} & 2p_{11}+p_{12}+3p_{22} \\ 2p_{11}+p_{12}+3p_{22} & 4p_{12}-2p_{22} \end{bmatrix}$

We want this to equal $-I = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.

Equating elements:
*   $2p_{11}+6p_{12} = -1$
*   $2p_{11}+p_{12}+3p_{22} = 0$
*   $4p_{12}-2p_{22} = -1$

Solving this system of equations will yield a solution for $P$. However, since the system is unstable, we expect that this solution $P$ will not be positive definite. (The actual calculation is more involved and confirms this.)

**Answer 3:**
The property of the matrix $A$ that is equivalent to the existence of a positive definite solution $P$ to $A^T P + P A = -Q$ for any $Q>0$ is that **$A$ is asymptotically stable** (i.e., all eigenvalues of $A$ have negative real parts).

**Answer 4:**
While checking eigenvalues directly provides a definitive answer for the stability of LTI systems, the Lyapunov equation offers a more general framework for several reasons:

1.  **Foundation for Nonlinear Systems:** For nonlinear systems, we often linearize around an equilibrium point to obtain an LTI system. The stability of the linearized system provides information about the local behavior of the nonlinear system. The Lyapunov equation is a primary tool for this analysis.
2.  **Existence of Lyapunov Functions:** The existence of a positive definite solution $P$ to the Lyapunov equation $A^T P + P A = -Q$ for some positive definite $Q$ is a direct indicator of asymptotic stability. This concept of finding a "Lyapunov function" (in this case, the quadratic form $x^T P x$) is the core of Lyapunov's direct method, which is applicable to nonlinear systems where eigenvalue analysis is not directly possible.
3.  **Controller Design:** The Lyapunov equation is instrumental in designing controllers that stabilize systems. For example, in linear quadratic regulator (LQR) design, the solution to a Riccati equation (related to the Lyapunov equation) provides the optimal feedback gain.
4.  **System Properties:** As seen with Gramians, the solutions to variations of the Lyapunov equation reveal fundamental system properties like controllability and observability, which are crucial for understanding and controlling systems.

In essence, the Lyapunov equation generalizes the concept of stability analysis from specific eigenvalue computations to a broader approach based on the existence of a stabilizing energy-like function (the Lyapunov function).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
