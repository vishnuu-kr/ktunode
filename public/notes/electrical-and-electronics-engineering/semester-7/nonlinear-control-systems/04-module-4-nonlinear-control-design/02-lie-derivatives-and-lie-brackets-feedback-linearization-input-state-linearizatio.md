---
title: "Lie Derivatives and Lie Brackets; Feedback linearization, Input state linearization and input – output linearization of SISO systems. (3 hours)"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 4: Nonlinear Control Design:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369b1"
status: "completed"
scrapedAt: "2026-05-23T16:38:34.084Z"
---
# NONLINEAR CONTROL SYSTEMS - Module 4: Nonlinear Control Design

## Topic: Lie Derivatives and Lie Brackets; Feedback Linearization (SISO Systems)

**(Approx. 3 Hours)**

---

### **Introduction**

This module delves into the powerful techniques of **Feedback Linearization**, a cornerstone of nonlinear control design. We will explore the fundamental mathematical tools, **Lie Derivatives** and **Lie Brackets**, that underpin these methods. Feedback linearization aims to transform a nonlinear system into an equivalent linear system through a suitable nonlinear state feedback and, potentially, a coordinate transformation. This allows us to leverage the well-established tools of linear control theory to design controllers for nonlinear systems.

---

### **1. Lie Derivatives and Lie Brackets**

These are essential mathematical tools for analyzing and manipulating nonlinear systems, particularly for understanding the geometric structure of vector fields.

#### **1.1 Lie Derivative**

The Lie derivative quantifies the rate of change of a scalar function (output) along the trajectories of a vector field (system dynamics). It is a fundamental concept in differential geometry and is crucial for understanding how feedback affects the system's behavior.

**Definition:**

Given a system in state-space form:
$\dot{x} = f(x)$, where $x \in \mathbb{R}^n$ and $f: \mathbb{R}^n \to \mathbb{R}^n$ is a smooth vector field.
Let $h(x): \mathbb{R}^n \to \mathbb{R}$ be a smooth scalar function.

The **Lie derivative of $h$ with respect to $f$**, denoted as $L_f h$, is defined as the directional derivative of $h$ in the direction of the vector field $f$:

$L_f h(x) = \frac{\partial h}{\partial x}(x) f(x)$

where $\frac{\partial h}{\partial x}$ is the gradient of $h$.

**Interpretation:**

*   $L_f h(x)$ represents the instantaneous rate of change of the output $h(x)$ as the system state $x$ evolves along the trajectories of $\dot{x} = f(x)$.
*   If $h(x)$ represents an output quantity of interest, $L_f h(x)$ tells us how fast that output is changing due to the system's internal dynamics.

**Higher-Order Lie Derivatives:**

The Lie derivative can be applied iteratively. The k-th order Lie derivative of $h$ with respect to $f$, denoted as $L_f^k h$, is defined as:

$L_f^0 h = h$
$L_f^1 h = L_f h$
$L_f^k h = L_f (L_f^{k-1} h)$ for $k > 1$

This means we repeatedly differentiate the output with respect to time, assuming the system dynamics $f(x)$ are in effect.

**Example:**

Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1 - x_2 + u$

Let the output be $y = h(x) = x_1$.

*   $L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 - x_2 + u \end{bmatrix} = x_2$
    (Note: Here, $f$ includes the control input $u$. In the context of Lie derivatives before feedback, we usually consider $u=0$ or the drift vector field. Let's consider the drift term first.)

Let the drift vector field be $f(x) = \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix}$.
$L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix} = x_2$.

*   $L_f^2 h(x) = L_f (L_f h(x)) = L_f (x_2)$.
    To calculate $L_f(x_2)$, we need the gradient of $x_2$: $\frac{\partial (x_2)}{\partial x} = \begin{bmatrix} 0 & 1 \end{bmatrix}$.
    So, $L_f(x_2) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix} = -x_1 - x_2$.

**Relationship to Output Derivative:**

If the system is $\dot{x} = f(x) + g(x)u$ and $y = h(x)$, then:

$\dot{y} = L_f h(x) + L_g h(x) u$

where $g(x)$ is the input matrix (for SISO, $g(x)$ is a column vector).
$L_g h(x) = \frac{\partial h}{\partial x}(x) g(x)$.

This shows that the first time derivative of the output depends on the Lie derivative of $h$ with respect to the drift term $f$ and the Lie derivative of $h$ with respect to the input term $g$.

#### **1.2 Lie Bracket**

The Lie bracket measures the failure of two vector fields to commute. It plays a crucial role in determining the controllability of a nonlinear system and in constructing feedback transformations.

**Definition:**

Given two smooth vector fields, $F(x)$ and $G(x)$, defined on $\mathbb{R}^n$. The **Lie bracket of $F$ and $G$**, denoted as $[F, G]$, is defined as:

$[F, G](x) = \frac{\partial G}{\partial x}(x) F(x) - \frac{\partial F}{\partial x}(x) G(x)$

**Interpretation:**

*   The Lie bracket measures how much the flow of $F$ and the flow of $G$ "disagree" or fail to commute.
*   If $[F, G] = 0$, then the vector fields $F$ and $G$ commute, meaning their flows commute.
*   Geometrically, it describes the curvature of the manifold generated by the flows of $F$ and $G$.

**Higher-Order Lie Brackets:**

Lie brackets can be nested to form longer chains, which are important for controllability analysis. For example:
$[F, [G, H]]$

**Example:**

Consider the vector fields:
$F(x) = \begin{bmatrix} x_2 \\ -x_1 \end{bmatrix}$ and $G(x) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

*   $\frac{\partial G}{\partial x} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$
*   $\frac{\partial F}{\partial x} = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$

$[F, G](x) = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} - \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \end{bmatrix}$

**Key Properties of Lie Brackets:**

*   **Bilinearity:** $[aF_1 + bF_2, G] = a[F_1, G] + b[F_2, G]$ and $[F, aG_1 + bG_2] = a[F, G_1] + b[F, G_2]$
*   **Alternating:** $[F, G] = -[G, F]$
*   **Jacobi Identity:** $[F, [G, H]] + [G, [H, F]] + [H, [F, G]] = 0$

---

### **2. Feedback Linearization**

Feedback linearization is a powerful technique that allows us to transform a nonlinear system into a linear one by using a nonlinear state feedback control law and, possibly, a nonlinear coordinate transformation. This enables us to apply linear control design methodologies.

There are two main types of feedback linearization: **Input-State Linearization** and **Input-Output Linearization**.

#### **2.1 Input-State Linearization (Global Feedback Linearization)**

The goal of input-state linearization is to find a nonlinear state feedback control law $u = \alpha(x) + \beta(x)v$ and a diffeomorphism (smooth invertible coordinate transformation) $z = T(x)$ such that the system in the new coordinates $z$ becomes linear in the new input $v$:

$\dot{z} = Az + Bv$

This is a strong form of linearization, as it linearizes the entire system's dynamics.

**Conditions for Input-State Linearization (SISO Systems):**

Consider a system:
$\dot{x} = f(x) + g(x)u$
$y = h(x)$

For input-state linearization to be possible, the system must satisfy certain structural conditions. One sufficient condition is related to the controllability of the system and the existence of a particular class of feedback.

**Concept of Relative Degree:**

The **relative degree**, denoted by $r$, of an output $y = h(x)$ with respect to the input $u$ for a system $\dot{x} = f(x) + g(x)u$ is the smallest integer $r$ such that the $r$-th time derivative of $y$ depends explicitly on $u$.

$y^{(r)} = L_f^r h(x) + L_g L_f^{r-1} h(x) u$

The relative degree is $r$ if:
1.  $L_g L_f^i h(x) = 0$ for $i = 0, 1, \dots, r-2$
2.  $L_g L_f^{r-1} h(x) \neq 0$ for all $x$ in the operating region.

**The relative degree essentially tells us how many times we need to differentiate the output to see the effect of the input.**

For input-state linearization, a necessary and sufficient condition for a system with relative degree $r$ is that $r=n$ (the order of the system).

**The Linearizing Control Law:**

If $r=n$, we can achieve input-state linearization using the following feedback control law:

$u = \frac{1}{L_g L_f^{n-1} h(x)} \left( v - L_f^n h(x) \right)$

Substituting this into the $n$-th derivative of the output:
$y^{(n)} = L_f^n h(x) + L_g L_f^{n-1} h(x) \left( \frac{1}{L_g L_f^{n-1} h(x)} \left( v - L_f^n h(x) \right) \right)$
$y^{(n)} = L_f^n h(x) + v - L_f^n h(x)$
$y^{(n)} = v$

The closed-loop system becomes:
$\dot{x} = f(x) + g(x) \left( \frac{1}{L_g L_f^{n-1} h(x)} \left( v - L_f^n h(x) \right) \right)$

This is a nonlinear transformation. To see the linearized form, we can introduce a new coordinate transformation $z = T(x)$:

$z_1 = h(x)$
$z_2 = \dot{h}(x) = L_f h(x)$
...
$z_n = h^{(n-1)}(x) = L_f^{n-1} h(x)$

In these new coordinates, the system dynamics are:
$\dot{z}_1 = z_2$
$\dot{z}_2 = z_3$
...
$\dot{z}_{n-1} = z_n$
$\dot{z}_n = y^{(n)} = v$

This is exactly the controllable canonical form of a linear system.

**Conditions and Limitations (Khalil, Chapter 6):**

*   **Integrability Condition:** For a coordinate transformation $z = T(x)$ to exist such that the system takes the form $\dot{z} = Az + Bu$, specific integrability conditions must be met. These conditions are related to the vanishing Lie brackets involving the vector fields $f$ and $g$.
*   **Distribution:** The distribution spanned by $\{g, [f,g], [f,[f,g]], \dots\}$ must have a certain structure.
*   **Global vs. Local:** While the formulas derived often appear local, achieving global input-state linearization requires stronger conditions, often related to the controllability properties of the system and the topology of the state space. If the Lie bracket $[f,g]$ is non-zero, the system is "nonlinear" in a fundamental way that might prevent global linearization.
*   **Feedback Linearizable Systems:** A system is input-state linearizable if and only if it is globally controllable and the distribution $\mathcal{D} = \text{span}\{g, [f,g], \dots, [f, \dots, [f,g]\dots]\}$ is involutive and has constant rank equal to $n$. However, this is a strong condition. A more practical check for the existence of feedback linearization is often based on the relative degree equalling the system order.

**Example (Input-State Linearization):**

Consider the same system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1 - x_2 + u$
Let $y = h(x) = x_1$.
System order $n=2$.

We need to find the relative degree.
$f(x) = \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

*   $L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix} = x_2$.
*   $L_g h(x) = \frac{\partial h}{\partial x} g(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 0$.
    So, $r \neq 1$.

*   $L_f^2 h(x) = L_f (L_f h(x)) = L_f (x_2)$.
    $L_f(x_2) = \frac{\partial (x_2)}{\partial x} f(x) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1 - x_2 \end{bmatrix} = -x_1 - x_2$.
*   $L_g L_f^1 h(x) = L_g(x_2) = \frac{\partial (x_2)}{\partial x} g(x) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 1$.
    Since $L_g L_f^1 h(x) = 1 \neq 0$, the relative degree is $r=2$.

Since $r=n=2$, input-state linearization is possible.

The linearizing control law is:
$u = \frac{1}{L_g L_f^{n-1} h(x)} \left( v - L_f^n h(x) \right)$
$u = \frac{1}{L_g L_f^1 h(x)} \left( v - L_f^2 h(x) \right)$
$u = \frac{1}{1} \left( v - (-x_1 - x_2) \right)$
$u = v + x_1 + x_2$

The closed-loop system becomes $y^{(2)} = v$.
In terms of state variables, $y = x_1$, $\dot{y} = x_2$.
So, $\ddot{y} = v$.

The new coordinate transformation is $z_1 = y = x_1$ and $z_2 = \dot{y} = \dot{x}_1 = x_2$.
The system in new coordinates is:
$\dot{z}_1 = z_2$
$\dot{z}_2 = v$

This is a linear system in controllable canonical form. We can design a linear controller for $v$ to achieve desired poles for the $z$ dynamics, e.g., $\ddot{y} + k_1 \dot{y} + k_0 y = 0 \implies v = -k_1 z_2 - k_0 z_1$.

**Important Point (Khalil, p. 157):**
The existence of a coordinate transformation $z = T(x)$ such that the system becomes linear in $z$ for all $x$ is not guaranteed just by $r=n$. The integrability conditions related to the Lie brackets of $g, [f,g], \dots, [f, \dots, [f,g]\dots]$ must hold. For global input-state linearization, $r$ must equal $n$ and the distribution spanned by $\{g, [f,g], \dots, [f^{n-1},g]\}$ must be involutive and span the whole state space.

---

#### **2.2 Input-Output Linearization**

Input-output linearization aims to make the input-output relationship of the nonlinear system linear, typically in a specific form like a chain of integrators. This is less restrictive than input-state linearization, as it doesn't necessarily linearize the internal dynamics.

**Goal:** To transform the system such that $y^{(r)} = v$, where $r$ is the relative degree of the output $y$. The internal dynamics (the remaining $n-r$ states) are also implicitly defined.

**Conditions for Input-Output Linearization (SISO Systems):**

Consider a system:
$\dot{x} = f(x) + g(x)u$
$y = h(x)$

The system must have a well-defined relative degree $r$. This means:
1.  $L_g L_f^i h(x) = 0$ for $i = 0, 1, \dots, r-2$
2.  $L_g L_f^{r-1} h(x) \neq 0$ for all $x$ in the operating region.

**The Linearizing Control Law:**

The control law that achieves input-output linearization is:

$u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$

With this control law, the input-output behavior becomes:
$y^{(r)} = L_f^r h(x) + L_g L_f^{r-1} h(x) u$
$y^{(r)} = L_f^r h(x) + L_g L_f^{r-1} h(x) \left( \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right) \right)$
$y^{(r)} = L_f^r h(x) + v - L_f^r h(x)$
$y^{(r)} = v$

The system's input-output behavior is now linear, mimicking a chain of $r$ integrators.

**Internal Dynamics:**

The remaining $n-r$ states, not directly observable through $y^{(r)}$, constitute the **internal dynamics**. The evolution of these internal states is governed by the remaining equations from the Lie derivative expansion:

$\dot{\xi} = \eta(x)$
where $\xi$ represents the internal states.

The stability of the closed-loop system depends on the stability of these internal dynamics. If the internal dynamics are unstable, the overall system will be unstable, even though the input-output behavior is linearized.

**Conditions for Stability of Internal Dynamics (Khalil, p. 161; Slotine & Li, p. 185):**

For the closed-loop system to be stable, the internal dynamics must be stable. The internal dynamics are described by a system of differential equations whose right-hand sides are $L_f^k h(x)$ for $k=0, \dots, r-1$ and are zero for $k \ge r$.

A key condition for the stability of the internal dynamics is that the Jacobian of the transformation $z = T(x)$, where $z_1=h(x), \dots, z_r = L_f^{r-1} h(x)$, must be full rank, and the dynamics of the $n-r$ unmeasured states must be asymptotically stable under the feedback.

**The Feedback-Linearized System:**

The closed-loop system can be represented in a canonical form (Brunovsky canonical form for nonlinear systems):

$z = \Phi(x) = \begin{bmatrix} h(x) \\ L_f h(x) \\ \vdots \\ L_f^{r-1} h(x) \end{bmatrix}$

The system can then be partitioned into:
$y^{(r)} = v$
$\dot{\eta} = q(x)$  (where $\eta$ are the internal states)

The vector field $q(x)$ defining the internal dynamics is related to the Lie derivatives and Lie brackets. Specifically, the internal dynamics are governed by the vector fields that lie in the kernel of the linear forms $dh, d(L_f h), \dots, d(L_f^{r-1} h)$.

**Example (Input-Output Linearization):**

Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1 - x_2 + u$
Let $y = h(x) = x_1$.
System order $n=2$.

We found the relative degree $r=2$.
$L_f h(x) = x_2$
$L_f^2 h(x) = -x_1 - x_2$
$L_g L_f^1 h(x) = 1$

The input-output linearizing control law is:
$u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$
$u = \frac{1}{1} \left( v - (-x_1 - x_2) \right)$
$u = v + x_1 + x_2$

The input-output behavior becomes $y^{(2)} = v$.

In this case, $r=n=2$. So, all states are observable through the output derivatives. The internal dynamics consist of $n-r = 2-2 = 0$ states. Therefore, input-output linearization is the same as input-state linearization for this specific system. The system's internal dynamics are trivially stable because there are no unobserved dynamics.

**Example with Internal Dynamics:**

Consider a system with $n=3$ and $r=1$:
$\dot{x}_1 = x_1 + x_2$
$\dot{x}_2 = x_3$
$\dot{x}_3 = u$
$y = h(x) = x_1$

$f(x) = \begin{bmatrix} x_1 + x_2 \\ x_3 \\ 0 \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$.

*   $L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 + x_2 \\ x_3 \\ 0 \end{bmatrix} = x_1 + x_2$.
*   $L_g h(x) = \frac{\partial h}{\partial x} g(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = 0$.
    So, $r \neq 1$ if $L_f h$ is the first derivative.

Let's re-evaluate the derivative of $y$.
$y = x_1$
$\dot{y} = x_1 + x_2$

Wait, this output is not what we want. We need the output to be directly related to the state for simple Lie derivative calculation in this form. Let's assume the output is $y = h(x)$.

Let's take a system where $r=1$ is clearly identified.
System:
$\dot{x}_1 = x_1 + x_2 + u$
$\dot{x}_2 = x_3$
$\dot{x}_3 = -x_2 - 2x_3$
$y = x_1$

$f(x) = \begin{bmatrix} x_1 + x_2 \\ x_3 \\ -x_2 - 2x_3 \end{bmatrix}$, $g(x) = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$.
$h(x) = x_1$.

*   $L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 + x_2 \\ x_3 \\ -x_2 - 2x_3 \end{bmatrix} = x_1 + x_2$.
*   $L_g h(x) = \frac{\partial h}{\partial x} g(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = 1$.
    Since $L_g h(x) \neq 0$, the relative degree is $r=1$.

The input-output linearizing control law is:
$u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$
$u = \frac{1}{L_g h(x)} \left( v - L_f h(x) \right)$
$u = \frac{1}{1} \left( v - (x_1 + x_2) \right)$
$u = v - x_1 - x_2$

The input-output behavior becomes $y^{(1)} = v$.

Now, let's look at the internal dynamics. Here $n=3$ and $r=1$. The internal dynamics are of order $n-r = 3-1 = 2$.
The internal states are the states not directly involved in the first derivative of the output. In this case, the internal states can be considered $(x_2, x_3)$ if we view $y$ as the first state, $y'=v$, and the remaining dynamics.

Let's use the coordinate transformation $z_1 = h(x) = x_1$.
The system becomes:
$\dot{z}_1 = L_f h(x) + L_g h(x) u = (x_1 + x_2) + 1 \cdot (v - x_1 - x_2) = v$.
This is $y^{(1)} = v$.

The remaining states are $x_2$ and $x_3$. Their dynamics are:
$\dot{x}_2 = x_3$
$\dot{x}_3 = -x_2 - 2x_3$

These are the internal dynamics. The characteristic equation of the internal dynamics is:
$s^2 - (\text{trace})s + (\text{determinant}) = 0$
Matrix for internal dynamics (Jacobian of $f$ w.r.t. $x_2, x_3$):
Consider the subsystem $\dot{x}_2 = x_3$, $\dot{x}_3 = -x_2 - 2x_3$.
The state vector for internal dynamics is $\begin{bmatrix} x_2 \\ x_3 \end{bmatrix}$.
The matrix is $\begin{bmatrix} 0 & 1 \\ -1 & -2 \end{bmatrix}$.
Characteristic equation: $\det \left( \begin{bmatrix} s & -1 \\ 1 & s+2 \end{bmatrix} \right) = s(s+2) - (-1)(1) = s^2 + 2s + 1 = (s+1)^2 = 0$.

The eigenvalues are $-1, -1$. Since both eigenvalues are negative, the internal dynamics are stable. Thus, the overall closed-loop system will be stable.

**Important Note (Slotine & Li, p. 186):**
The existence of a coordinate transformation $\Phi(x) = [h(x), L_f h(x), \dots, L_f^{r-1} h(x)]$ requires the vector fields $\{g, [f,g], \dots, [f^{r-2},g]\}$ to be linearly independent and the distribution spanned by $\{g, [f,g], \dots, [f^{r-1},g]\}$ to be involutive. However, for just input-output linearization, the primary requirement is that $L_g L_f^{r-1} h(x) \neq 0$. The stability of internal dynamics is a crucial consideration for overall closed-loop stability.

---

### **3. Feedback Linearization Design Procedure (Summary)**

1.  **System Representation:** Write the nonlinear system in the form $\dot{x} = f(x) + g(x)u$ and identify the output $y = h(x)$.
2.  **Calculate Relative Degree:** Compute the Lie derivatives $L_f^k h(x)$ and $L_g L_f^{k-1} h(x)$ for $k=1, 2, \dots$. Find the smallest $r$ such that $L_g L_f^{r-1} h(x) \neq 0$.
3.  **Check for Linearization Possibility:**
    *   For **Input-Output Linearization:** Ensure $r$ is well-defined and $L_g L_f^{r-1} h(x)$ is non-zero.
    *   For **Input-State Linearization:** Check if $r=n$. Additionally, verify integrability conditions, though this can be complex. A common simplification is to assume $r=n$ implies input-state linearization is possible for design purposes, with the understanding that global linearization might not always be achievable.
4.  **Design Linearizing Control Law:**
    *   For **Input-Output Linearization:** $u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$. This makes $y^{(r)} = v$.
    *   For **Input-State Linearization:** Same formula as above, but with $r=n$. This makes $y^{(n)} = v$.
5.  **Design the Equivalent Linear System:**
    *   For **Input-Output Linearization:** The input-output relation is $y^{(r)} = v$. Design $v$ to achieve a desired linear behavior for $y$, e.g., $y^{(r)} + k_{r-1}y^{(r-1)} + \dots + k_0 y = 0$. So, $v = -k_{r-1}y^{(r-1)} - \dots - k_0 y$.
    *   For **Input-State Linearization:** The closed-loop system in the $z$ coordinates is $\dot{z} = Az + Bu$. Design $v$ to place the poles of the linear system $Az+Bu$ as desired, e.g., $v = -Kz$.
6.  **Analyze Internal Dynamics (for Input-Output Linearization):** Examine the stability of the $n-r$ states that do not appear in $y, \dot{y}, \dots, y^{(r-1)}$. If they are unstable, the overall system is unstable.
7.  **Implement:** Substitute the designed $v$ back into the control law $u$.

---

### **4. Connection to Course Outcomes**

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)**
    *   Lie derivatives help understand how outputs change along system trajectories, providing insight into local behavior. Feedback linearization aims to transform this nonlinear behavior into a linear, predictable one.
*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)**
    *   For input-output linearization, the stability of the internal dynamics is crucial. Analyzing the eigenvalues of the Jacobian of the internal dynamics' vector field is a key step in assessing closed-loop stability.
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis. (Knowledge Level: K2)**
    *   Once a system is linearized, its frequency response can be analyzed using linear techniques (Bode plots, Nyquist plots). This is a major motivation for feedback linearization.
*   **CO4: Design feedback controller for nonlinear systems. (Knowledge Level: K3)**
    *   This entire module is dedicated to designing controllers for nonlinear systems using feedback linearization. We learn to design the feedback law to achieve desired linear input-output behavior.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1^3 + u$
Let the output be $y = x_1$.
(a) Calculate the relative degree of the output $y$.
(b) Design a feedback control law $u = \alpha(x) + \beta(x)v$ to achieve input-output linearization.
(c) What is the resulting input-output differential equation?
(d) Is this system input-state linearizable? Justify your answer.

**Solution 1:**
(a) $f(x) = \begin{bmatrix} x_2 \\ -x_1^3 \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $h(x) = x_1$.
$L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1^3 \end{bmatrix} = x_2$.
$L_g h(x) = \frac{\partial h}{\partial x} g(x) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 0$.
Since $L_g h(x) = 0$, the relative degree is not 1.

$L_f^2 h(x) = L_f(x_2) = \frac{\partial (x_2)}{\partial x} f(x) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_2 \\ -x_1^3 \end{bmatrix} = -x_1^3$.
$L_g L_f^1 h(x) = L_g(x_2) = \frac{\partial (x_2)}{\partial x} g(x) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 1$.
Since $L_g L_f^1 h(x) = 1 \neq 0$, the relative degree is $r=2$.

(b) The control law for input-output linearization is:
$u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$
$u = \frac{1}{L_g L_f^1 h(x)} \left( v - L_f^2 h(x) \right)$
$u = \frac{1}{1} \left( v - (-x_1^3) \right)$
$u = v + x_1^3$

Here $\alpha(x) = x_1^3$ and $\beta(x) = 1$.

(c) The resulting input-output differential equation is $y^{(r)} = v$, which is $y^{(2)} = v$.

(d) The system order is $n=2$. The relative degree $r=2$. Since $r=n$, the system is potentially input-state linearizable. In this case, the coordinate transformation is $z_1 = h(x) = x_1$ and $z_2 = L_f h(x) = x_2$.
The system in $z$ coordinates is $\dot{z}_1 = z_2$, $\dot{z}_2 = v$.
This is the controllable canonical form, a linear system. Therefore, the system is input-state linearizable.

---

**Question 2:**
Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = x_3$
$\dot{x}_3 = -2x_1 - 5x_2 - 3x_3 + u$
Let $y = x_1$.
(a) Determine the relative degree of the output $y$.
(b) Design a feedback control law to achieve input-output linearization.
(c) What are the internal dynamics? Are they stable?

**Solution 2:**
(a) $n=3$.
$f(x) = \begin{bmatrix} x_2 \\ x_3 \\ -2x_1 - 5x_2 - 3x_3 \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$, $h(x) = x_1$.

$L_f h(x) = \frac{\partial h}{\partial x} f(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ x_3 \\ -2x_1 - 5x_2 - 3x_3 \end{bmatrix} = x_2$.
$L_g h(x) = \frac{\partial h}{\partial x} g(x) = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = 0$. ($r \neq 1$)

$L_f^2 h(x) = L_f(x_2) = \frac{\partial (x_2)}{\partial x} f(x) = \begin{bmatrix} 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} x_2 \\ x_3 \\ -2x_1 - 5x_2 - 3x_3 \end{bmatrix} = x_3$.
$L_g L_f^1 h(x) = L_g(x_2) = \frac{\partial (x_2)}{\partial x} g(x) = \begin{bmatrix} 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = 0$. ($r \neq 2$)

$L_f^3 h(x) = L_f(x_3) = \frac{\partial (x_3)}{\partial x} f(x) = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_2 \\ x_3 \\ -2x_1 - 5x_2 - 3x_3 \end{bmatrix} = -2x_1 - 5x_2 - 3x_3$.
$L_g L_f^2 h(x) = L_g(x_3) = \frac{\partial (x_3)}{\partial x} g(x) = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = 1$.
Since $L_g L_f^2 h(x) = 1 \neq 0$, the relative degree is $r=3$.

(b) The control law is:
$u = \frac{1}{L_g L_f^{r-1} h(x)} \left( v - L_f^r h(x) \right)$
$u = \frac{1}{L_g L_f^2 h(x)} \left( v - L_f^3 h(x) \right)$
$u = \frac{1}{1} \left( v - (-2x_1 - 5x_2 - 3x_3) \right)$
$u = v + 2x_1 + 5x_2 + 3x_3$

(c) Since $n=3$ and $r=3$, $n-r = 0$. There are no internal dynamics. The system is input-state linearizable and the internal dynamics are trivially stable.
The input-output behavior is $y^{(3)} = v$.
The coordinate transformation is $z_1 = h(x) = x_1$, $z_2 = L_f h(x) = x_2$, $z_3 = L_f^2 h(x) = x_3$.
The system in $z$ coordinates is:
$\dot{z}_1 = z_2$
$\dot{z}_2 = z_3$
$\dot{z}_3 = v$
This is a linear system.

---

### **Important Points to Remember**

*   **Lie Derivative:** Measures the rate of change of a function along vector field trajectories.
*   **Lie Bracket:** Measures the non-commutativity of vector fields, crucial for controllability and integrability conditions.
*   **Relative Degree:** The number of output differentiations required to see the input. It dictates the order of the linear input-output behavior.
*   **Input-Output Linearization:** Achieves $y^{(r)} = v$. The internal dynamics must be stable for overall system stability.
*   **Input-State Linearization:** Achieves linear dynamics in a transformed coordinate system ($z=T(x)$), requiring $r=n$ and satisfaction of integrability conditions.
*   **Stability of Internal Dynamics:** A critical consideration for input-output linearization. Unstable internal dynamics lead to an unstable closed-loop system.
*   **Textbook References:**
    *   **Khalil:** Chapters on Feedback Linearization, Lie Algebra and Differentiable Manifolds.
    *   **Slotine & Li:** Chapters on Feedback Linearization and Geometric Methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Further Reading**

*   Explore the detailed conditions for the existence of feedback linearization and the construction of coordinate transformations in Khalil and Slotine & Li.
*   Investigate the concept of "zero dynamics" which is synonymous with internal dynamics.
*   Understand the limitations of feedback linearization, such as the potential for instability of internal dynamics and the fact that global linearization might not always be possible.

---