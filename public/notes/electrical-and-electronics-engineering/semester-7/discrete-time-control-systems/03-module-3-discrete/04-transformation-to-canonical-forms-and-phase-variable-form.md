---
title: "Transformation to canonical forms and phase variable form."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368da"
status: "completed"
scrapedAt: "2026-05-23T16:36:24.996Z"
---
# DISCRETE TIME CONTROL SYSTEMS - Module 3: Discrete - Transformation to Canonical Forms and Phase Variable Form

---

## 1. Introduction to Canonical Forms and Phase Variable Form

This module focuses on representing discrete-time systems in different equivalent forms, known as canonical forms. These forms simplify analysis and controller/observer design. The **phase variable form** is a particularly important canonical form because it directly relates to the system's differential equation and allows for straightforward implementation of state feedback control.

**Key Concepts:**

*   **State-Space Representation:** A mathematical model that describes a system's behavior using a set of first-order differential (or difference) equations. It consists of state equations and output equations.
*   **Canonical Form:** A standardized representation of a system's state-space equations that reveals specific properties of the system and simplifies certain design tasks.
*   **Phase Variable:** A set of state variables where each variable represents a derivative (in continuous-time) or a delayed version (in discrete-time) of the output, up to the order of the system.

**Learning Outcomes Addressed:**

*   This module directly contributes to **CO3: Model and analyse discrete-time system using state space approach** by providing methods to transform existing state-space representations into structured canonical forms.

---

## 2. Why Transform to Canonical Forms?

Transforming a system's state-space representation into canonical forms offers several advantages:

*   **Simplification of Analysis:** Certain system properties, such as controllability and observability, can be easily determined from specific canonical forms.
*   **Systematic Controller Design:** Canonical forms often simplify the design of state feedback controllers and observers. For instance, the phase variable form is ideal for pole placement.
*   **Understanding System Structure:** The structure of the system matrix in a canonical form can reveal inherent properties and relationships between state variables.
*   **Ease of Implementation:** Some canonical forms are directly mappable to practical digital controller implementations.

**Reference:**
*   **Ogata (2009):** Chapter 3, "State-Space Analysis of Discrete-Time Systems," discusses the importance of canonical forms for analysis and design.
*   **Phillips & Nagle (1984):** Chapter 3, "State-Space Techniques," likely touches upon canonical forms for simplifying system representation.

---

## 3. Transformation to Phase Variable Form

The phase variable canonical form is derived from the system's transfer function or its differential equation. It's characterized by a companion matrix structure.

### 3.1 From Transfer Function to Phase Variable Form

Consider a linear, time-invariant, single-input, single-output (SISO) discrete-time system with the following transfer function:

$$ G(z) = \frac{Y(z)}{U(z)} = \frac{b_0 + b_1z^{-1} + b_2z^{-2} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + a_2z^{-2} + \dots + a_nz^{-n}} $$

We can rewrite this as:

$$ Y(z)(1 + a_1z^{-1} + \dots + a_nz^{-n}) = U(z)(b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}) $$

$$ Y(z) = -a_1z^{-1}Y(z) - \dots - a_nz^{-nY(z)} + b_0U(z) + b_1z^{-1}U(z) + \dots + b_{n-1}z^{-(n-1)}U(z) $$

Let's define the output $y(k)$ and its delayed versions as the state variables in the phase variable form. However, a more common and convenient approach is to use the delayed versions of the input and manipulate the equation.

Consider the system represented by a differential equation in terms of $y(k)$:

$$ y(k+n) + a_1y(k+n-1) + \dots + a_ny(k) = b_0u(k+n) + b_1u(k+n-1) + \dots + b_{n-1}u(k) $$

**Phase Variable Canonical Form:**

We define the state variables $x_1(k), x_2(k), \dots, x_n(k)$ as follows:

*   $x_1(k) = y(k)$
*   $x_2(k) = y(k+1)$
*   ...
*   $x_n(k) = y(k+n-1)$

This definition is for the *continuous-time* phase variable form. For *discrete-time*, the standard phase variable form is derived by considering the delayed versions of the output as states, or by manipulating the transfer function directly.

A more direct way to obtain the phase variable form from the transfer function is to consider the relation:

$$ Y(z) = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}} U(z) $$

Let's introduce an intermediate variable $W(z)$ such that:

$$ W(z) = \frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}} $$

This implies the difference equation:

$$ W(k+n) + a_1W(k+n-1) + \dots + a_nW(k) = U(k) $$

Now, we can express $Y(z)$ in terms of $W(z)$:

$$ Y(z) = (b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}) W(z) $$

$$ Y(z) = b_0W(z) + b_1z^{-1}W(z) + \dots + b_{n-1}z^{-(n-1)}W(z) $$

This gives the output equation:

$$ y(k) = b_0w(k) + b_1w(k-1) + \dots + b_{n-1}w(k-n+1) $$

From the equation for $W(z)$, we can define the state variables. A common choice for the phase variable form is:

*   $x_1(k) = w(k)$
*   $x_2(k) = w(k+1)$
*   ...
*   $x_n(k) = w(k+n-1)$

Now, let's derive the state equations from $w(k+n) + a_1w(k+n-1) + \dots + a_nw(k) = U(k)$:

$w(k+n) = -a_1w(k+n-1) - a_2w(k+n-2) - \dots - a_nw(k) + U(k)$

In terms of state variables:

$x_1(k+1) = w(k+1) = x_2(k)$
$x_2(k+1) = w(k+2) = x_3(k)$
...
$x_{n-1}(k+1) = w(k+n-1) = x_n(k)$
$x_n(k+1) = w(k+n) = -a_n x_1(k) - a_{n-1} x_2(k) - \dots - a_1 x_n(k) + u(k)$

This can be written in matrix form:

$$ \mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_n & -a_{n-1} & -a_{n-2} & \dots & -a_1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix} u(k) $$

$$ \mathbf{x}(k+1) = A_{pv} \mathbf{x}(k) + B_{pv} u(k) $$

And the output equation:

$$ y(k) = [b_{n-1} \quad b_{n-2} \quad \dots \quad b_1 \quad b_0] \mathbf{x}(k) $$

$$ y(k) = C_{pv} \mathbf{x}(k) $$

**Note:** There are two common conventions for the phase variable form derived from the transfer function's coefficients. The above form is often referred to as the **controllable canonical form** or **phase variable canonical form** when derived from the polynomial form $1/(1+a_1z^{-1} + ...)$. The coefficients $b_i$ in the numerator affect the output matrix $C$.

**Alternative Phase Variable Form (related to observer canonical form):**

Sometimes, the phase variable form is derived such that the output is directly related to the last state variable.

Let's go back to:
$$ Y(z) = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}} U(z) $$

We can rewrite this as:
$$ Y(z) = (b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}) \frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}} $$

Let $\frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}} = X_1(z)$, where $X_1(z)$ is the first state variable.
This implies:
$X_1(z) (1 + a_1z^{-1} + \dots + a_nz^{-n}) = U(z)$
$X_1(z) = \frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$

Now, let's define the states related to $U(z)z^{-i}$:
Define $X_1(z) = \frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}}$.
Let $x_1(k) = u(k)$, $x_2(k) = u(k-1)$, ..., $x_n(k) = u(k-n+1)$. This is not a canonical form.

Let's use the state definition where the last state is related to the output.
Consider the form:
$$ x_1(k+1) = x_2(k) $$
$$ x_2(k+1) = x_3(k) $$
$$ \vdots $$
$$ x_{n-1}(k+1) = x_n(k) $$
$$ x_n(k+1) = -a_n x_1(k) - a_{n-1} x_2(k) - \dots - a_1 x_n(k) + u(k) $$
And the output:
$$ y(k) = b_{n-1} x_1(k) + b_{n-2} x_2(k) + \dots + b_0 x_n(k) $$

This is the form derived earlier.

**Another prevalent phase variable form (often called observer canonical form in continuous time, but can be derived from transfer function):**

Let's invert the numerator and denominator:
$$ \frac{Y(z)}{U(z)} = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}} $$
$$ \frac{Y(z)}{U(z)} = z^{-(n-1)} \frac{b_0z^{n-1} + b_1z^{n-2} + \dots + b_{n-1}}{z^{n} + a_1z^{n-1} + \dots + a_n} $$

Consider the system structure where the output is the last state, and the input directly affects the first state.

Let's use a different approach. From the transfer function:
$Y(z) = b_0 U(z) + b_1 z^{-1} U(z) + \dots + b_{n-1} z^{-(n-1)} U(z)$
And
$Y(z) (1 + a_1 z^{-1} + \dots + a_n z^{-n}) = U(z) (b_0 + b_1 z^{-1} + \dots + b_{n-1} z^{-(n-1)})$

Consider a different structure, which is often useful for control design.
Let $x_1(k) = y(k)$
$x_2(k) = \nabla y(k) = y(k+1)$ - This is not good for discrete time.

Let's consider the structure often presented for phase variable form in discrete time, directly from the difference equation:
$y(k+n) + a_1y(k+n-1) + \dots + a_ny(k) = b_0u(k) + b_1u(k-1) + \dots + b_{n-1}u(k-n+1)$

A common phase variable representation relates to the output and its delayed versions.
Let $x_1(k) = y(k)$
$x_2(k) = y(k-1)$
...
$x_n(k) = y(k-n+1)$

Then $y(k+1) = x_1(k+1)$.
From the difference equation, $y(k+1) = -a_1y(k) - \dots - a_ny(k-n+1) + b_0u(k+1) + \dots + b_{n-1}u(k-n+2)$. This is complex due to future inputs.

**Let's stick to the most standard definition derived from the transfer function structure.**

Consider the transfer function:
$$ G(z) = \frac{Y(z)}{U(z)} = \frac{b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}}{1 + a_1z^{-1} + \dots + a_nz^{-n}} $$

Rewrite as:
$$ Y(z) = (b_0 + b_1z^{-1} + \dots + b_{n-1}z^{-(n-1)}) W(z) $$
where
$$ W(z) = \frac{U(z)}{1 + a_1z^{-1} + \dots + a_nz^{-n}} $$

This gives:
$$ (1 + a_1z^{-1} + \dots + a_nz^{-n}) W(z) = U(z) $$
$$ W(z) = -a_1z^{-1}W(z) - \dots - a_nz^{-nW(z) + U(z)} $$

Let the state variables be:
*   $x_1(k) = w(k)$
*   $x_2(k) = w(k+1)$
*   ...
*   $x_n(k) = w(k+n-1)$

Then:
$x_1(k+1) = w(k+1) = x_2(k)$
$x_2(k+1) = w(k+2) = x_3(k)$
...
$x_{n-1}(k+1) = w(k+n-1) = x_n(k)$
$x_n(k+1) = w(k+n) = -a_n w(k) - a_{n-1} w(k+1) - \dots - a_1 w(k+n-1) + u(k)$
$x_n(k+1) = -a_n x_1(k) - a_{n-1} x_2(k) - \dots - a_1 x_n(k) + u(k)$

The state-space equations in phase variable (controllable canonical) form are:

$$ \mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_n & -a_{n-1} & -a_{n-2} & \dots & -a_1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix} u(k) $$

$$ y(k) = \begin{bmatrix} b_{n-1} & b_{n-2} & \dots & b_1 & b_0 \end{bmatrix} \mathbf{x}(k) $$

This is the **controllable canonical form**. The phase variable form is often used interchangeably with this.

**Example:**
Consider the transfer function:
$$ G(z) = \frac{2z + 3}{z^2 + 0.5z + 0.1} $$
Here, $n=2$.
$Y(z)/U(z) = \frac{2z + 3}{z^2 + 0.5z + 0.1}$.
To match the standard form $G(z) = \frac{b_0 + b_1z^{-1} + \dots}{1 + a_1z^{-1} + \dots}$, divide numerator and denominator by $z^2$:
$$ G(z) = \frac{2z^{-1} + 3z^{-2}}{1 + 0.5z^{-1} + 0.1z^{-2}} $$
So, $b_0 = 0$, $b_1 = 2$, $b_2 = 3$.
$a_1 = 0.5$, $a_2 = 0.1$.

The phase variable canonical form is:
$$ \mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.1 & -0.5 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k) $$
$$ y(k) = \begin{bmatrix} b_1 & b_0 \end{bmatrix} \mathbf{x}(k) = \begin{bmatrix} 2 & 0 \end{bmatrix} \mathbf{x}(k) $$

**Important Point:** The coefficients $a_i$ in the denominator determine the $A$ matrix, and the coefficients $b_i$ in the numerator determine the $C$ matrix. The $B$ matrix is always a standard form for this canonical representation.

**Reference:**
*   **Ogata (2009):** Chapter 3, "State-Space Analysis of Discrete-Time Systems," section on "Canonical Forms."
*   **Gopal (1997):** Chapter 4, "State Space Techniques," will likely cover transformations to canonical forms.

---

### 3.2 From State-Space to Phase Variable Form

Given a system in an arbitrary state-space form:
$$ \mathbf{x}(k+1) = A \mathbf{x}(k) + B u(k) $$
$$ y(k) = C \mathbf{x}(k) + D u(k) $$

We want to find a transformation matrix $P$ such that:
$$ \mathbf{z}(k) = P \mathbf{x}(k) $$
where $\mathbf{z}(k)$ are the state variables in the phase variable form.

This implies:
$$ \mathbf{x}(k) = P^{-1} \mathbf{z}(k) $$

Substituting into the original equations:
$$ P^{-1} \mathbf{z}(k+1) = A P^{-1} \mathbf{z}(k) + B u(k) $$
$$ \mathbf{z}(k+1) = P A P^{-1} \mathbf{z}(k) + P B u(k) $$
$$ \mathbf{z}(k+1) = A_{pv} \mathbf{z}(k) + B_{pv} u(k) $$

And for the output:
$$ y(k) = C P^{-1} \mathbf{z}(k) + D u(k) $$
$$ y(k) = C_{pv} \mathbf{z}(k) + D_{pv} u(k) $$

Where:
$A_{pv} = P A P^{-1}$
$B_{pv} = P B$
$C_{pv} = C P^{-1}$
$D_{pv} = D$

The challenge is to find the appropriate transformation matrix $P$. For transformation to the controllable canonical form (phase variable form), the transformation matrix $P$ is related to the controllability matrix.

**Controllability Matrix:**
$Q_c = \begin{bmatrix} B & AB & A^2B & \dots & A^{n-1}B \end{bmatrix}$

The transformation matrix $P$ is constructed using the coefficients of the characteristic polynomial of $A$, which are the same as the coefficients of the denominator of the transfer function.

The characteristic polynomial is:
$p(\lambda) = \det(\lambda I - A) = \lambda^n + a_1\lambda^{n-1} + \dots + a_n$

The transformation matrix $P$ to the controllable canonical form is given by:

$$ P = \begin{bmatrix} c_n & c_{n-1} & \dots & c_1 \\ c_{n-1} & c_{n-2} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ c_1 & 0 & \dots & 0 \end{bmatrix} $$
where $c_i$ are related to the coefficients of the characteristic polynomial of $A$. This is not the standard form.

**Let's refer to a direct method for finding P:**

If the system is controllable, the controllable canonical form exists. The transformation matrix $P$ can be found by ensuring that $P B$ has the desired form of the $B$ matrix for the controllable canonical form (i.e., $[0, 0, \dots, 1]^T$).

$B_{pv} = P B = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix}$

Consider the first column of $P$: $\mathbf{p}_1$.
$P B = \begin{bmatrix} \mathbf{p}_1^T \\ \mathbf{p}_2^T \\ \vdots \\ \mathbf{p}_n^T \end{bmatrix} B = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix}$

This implies:
$\mathbf{p}_i^T B = 0$ for $i=1, \dots, n-1$
$\mathbf{p}_n^T B = 1$

The vectors $\mathbf{p}_i^T$ are related to the rows of $P$. The rows of $P$ are related to the coefficients of the characteristic polynomial of $A$.

**A simpler approach using the dual system:**

Transformation to canonical forms is often easier via the transfer function. If you have the state-space form, you can first derive the transfer function, then convert to the phase variable form, and then if needed, find the transformation matrix.

1.  **Calculate the transfer function from the given $A, B, C, D$ matrices:**
    $G(z) = C(zI - A)^{-1}B + D$
2.  **Convert the transfer function to the phase variable form** (as described in Section 3.1). This gives $A_{pv}, B_{pv}, C_{pv}, D_{pv}$.
3.  **Find the transformation matrix $P$:**
    The controllability matrix $Q_c = [B \ AB \ \dots \ A^{n-1}B]$.
    The controllable canonical form $A_{pv}$ and $B_{pv}$ are related to $A, B$ by $A_{pv} = P A P^{-1}$ and $B_{pv} = P B$.
    The matrix $P$ can be constructed as:
    $$ P = \begin{bmatrix} \mathbf{c}_n^T \\ \mathbf{c}_{n-1}^T \\ \vdots \\ \mathbf{c}_1^T \end{bmatrix} $$
    where $\mathbf{c}_i^T$ are related to the rows of $Q_c^{-1}$ and the characteristic polynomial.

    A more direct approach for $P$ exists. The first row of $P$ is typically derived from the coefficients of the characteristic polynomial and the inverse of $Q_c$.

    **Textbook Approach (Ogata):**
    To transform a system $(A, B, C)$ to the controllable canonical form $(A_{pv}, B_{pv}, C_{pv})$, where $A_{pv}$ has the companion structure and $B_{pv} = [0, 0, \dots, 1]^T$, the transformation matrix $P$ is given by:

    $$ P = \begin{bmatrix} c_n & c_{n-1} & \dots & c_1 \\ c_{n-1} & c_{n-2} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ c_1 & 0 & \dots & 0 \end{bmatrix} $$
    where $c_i$ are the coefficients of the characteristic polynomial $\det(zI-A) = z^n + c_1z^{n-1} + \dots + c_n$. (This matrix $P$ is the inverse of the transformation matrix for going TO the controllable form).

    Let's use the structure of $P$ directly.
    The transformation matrix $T$ such that $A_{pv} = T A T^{-1}$ and $B_{pv} = T B$ is:
    $$ T = \begin{bmatrix} v \\ v A \\ \vdots \\ v A^{n-1} \end{bmatrix} $$
    where $v$ is a row vector related to the coefficients of the characteristic polynomial. Specifically, $v = [c_n, c_{n-1}, \dots, c_1]$.

    **Let's verify this with an example:**
    System:
    $A = \begin{bmatrix} 0 & 1 \\ -0.1 & -0.5 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 2 & 0 \end{bmatrix}$

    Characteristic polynomial: $\det(zI - A) = \det \begin{bmatrix} z & -1 \\ 0.1 & z+0.5 \end{bmatrix} = z(z+0.5) - (-1)(0.1) = z^2 + 0.5z + 0.1$.
    So, $a_1 = 0.5$, $a_2 = 0.1$.
    The desired $A_{pv}$ is $\begin{bmatrix} 0 & 1 \\ -a_2 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.1 & -0.5 \end{bmatrix}$.
    The desired $B_{pv}$ is $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

    In this specific example, the system is ALREADY in the controllable canonical form (phase variable form).

    **Let's take another example where it's not in canonical form:**
    $A = \begin{bmatrix} -0.5 & 0.1 \\ 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0.1 & 1 \end{bmatrix}$

    Characteristic polynomial: $\det(zI - A) = \det \begin{bmatrix} z+0.5 & -0.1 \\ -1 & z \end{bmatrix} = (z+0.5)z - (-0.1)(-1) = z^2 + 0.5z - 0.1$.
    So, $a_1 = 0.5$, $a_2 = -0.1$.
    The desired $A_{pv}$ is $\begin{bmatrix} 0 & 1 \\ -a_2 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0.1 & -0.5 \end{bmatrix}$.
    The desired $B_{pv}$ is $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

    The transformation matrix $T$ is given by:
    $T = \begin{bmatrix} c_n & c_{n-1} \\ c_{n-1} & 0 \end{bmatrix}$ where $c_1=0.5, c_2=-0.1$.
    This definition of $T$ is often for going from canonical to general form.

    **Let's use the controllability matrix approach for $P$:**
    $Q_c = \begin{bmatrix} B & AB \end{bmatrix} = \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix}$
    $Q_c^{-1} = \frac{1}{1} \begin{bmatrix} 1 & 0.5 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0.5 \\ 0 & 1 \end{bmatrix}$

    The transformation matrix $P$ is related to the coefficients and $Q_c^{-1}$.
    A common way to find $P$ is $P^{-1} = Q_c \begin{bmatrix} 0 & \dots & 0 & 1 \\ \vdots & \iddots & 1 & 0 \\ 0 & \iddots & \vdots & \vdots \\ 1 & 0 & \dots & 0 \end{bmatrix}$. This is complex.

    **Simplified approach using $P$ directly:**
    The row vectors of $P$ are related to the coefficients of the characteristic polynomial and the controllability matrix.
    $P = \begin{bmatrix} c_2 & c_1 \\ c_1 & 0 \end{bmatrix} Q_c^{-1}$ - This is incorrect.

    **The correct transformation matrix $P$ to go from a controllable system $(A, B)$ to the controllable canonical form $(A_{pv}, B_{pv})$ where $B_{pv} = [0, \dots, 1]^T$ is:**
    Let the characteristic polynomial be $z^n + a_1 z^{n-1} + \dots + a_n = 0$.
    $P^{-1} = Q_c \begin{bmatrix} 0 & \dots & 0 & 1 \\ \vdots & \iddots & 1 & 0 \\ 0 & \iddots & \vdots & \vdots \\ 1 & 0 & \dots & 0 \end{bmatrix}$ is not correct.

    A more common way to find $P$ is through the dual system or by constructing $P$ such that $P^{-1}A_{pv}P = A$ and $P^{-1}B_{pv} = B$.

    **Let's use the direct formula for P from Ogata (Chapter 3, Eq. 3.95):**
    Let $G(z) = C(zI-A)^{-1}B$.
    $G(z) = \frac{N(z)}{D(z)} = \frac{b_0z^{n-1} + b_1z^{n-2} + \dots + b_{n-1}}{z^n + a_1z^{n-1} + \dots + a_n}$
    Here $a_i$ are coefficients of the characteristic polynomial $\det(zI-A)$.
    The controllable canonical form has $A_{pv}$ with coefficients $-a_i$ in the last row.

    The transformation matrix $P$ such that $\mathbf{z} = P\mathbf{x}$ (where $\mathbf{z}$ is the phase variable state) is:
    $$ P = \begin{bmatrix} \alpha_n \\ \alpha_{n-1} \\ \vdots \\ \alpha_1 \end{bmatrix} $$
    where $\alpha_i$ are row vectors defined by $P^{-1} = Q_c M$, with $M$ being a permutation matrix.

    **A more practical approach to find $P$ for transformation to controllable canonical form:**
    The transformation matrix $T$ to map from the general form $(A, B)$ to the controllable canonical form $(A_{pv}, B_{pv})$ is given by:
    $$ T = \begin{bmatrix} \beta_1 \\ \beta_2 \\ \vdots \\ \beta_n \end{bmatrix} $$
    where $\beta_i$ are row vectors such that $\beta_n = [c_n, c_{n-1}, \dots, c_1]$ (coefficients of characteristic polynomial) and $\beta_i$ are derived from $\beta_{i+1}$ and the inverse of $Q_c$.

    **Let's simplify:** The transformation matrix $P$ is often derived such that $P B = B_{pv}$.
    For $B_{pv} = \begin{bmatrix} 0 \\ \vdots \\ 1 \end{bmatrix}$, let $P = Q_c^{-1} K$, where $K$ is a matrix to achieve the target $B_{pv}$.

    A standard result states that if $Q_c$ is the controllability matrix, then the transformation matrix $P$ such that $A_{pv} = PA P^{-1}$ and $B_{pv} = PB$ is given by:
    $$ P = \begin{bmatrix} \mathbf{v} \\ \mathbf{v}A \\ \vdots \\ \mathbf{v}A^{n-1} \end{bmatrix}^{-1} $$
    where $\mathbf{v}$ is a row vector related to the coefficients of the characteristic polynomial.
    Specifically, if $\det(zI - A) = z^n + a_1 z^{n-1} + \dots + a_n$, then $\mathbf{v} = [a_n, a_{n-1}, \dots, a_1]$. This is for a different canonical form.

    **For the controllable canonical form with $B_{pv} = [0, \dots, 1]^T$:**
    The transformation matrix $P$ can be found using the relationship $P^{-1} = Q_c M$, where $M$ is a matrix to extract the last column of $Q_c$.
    Let $Q_c = [ \mathbf{b}_1 \ \mathbf{b}_2 \ \dots \ \mathbf{b}_n ]$ where $\mathbf{b}_i = A^{i-1}B$.
    The first row of $P$ is related to the coefficients of the characteristic polynomial of $A$, and subsequent rows are derived from $P A$.

    **Reference:**
    *   **Gopal (1997), Chapter 4:** Provides detailed methods for transformation to various canonical forms, including phase variable form, and the derivation of the transformation matrix $P$.

---

## 4. Other Canonical Forms

While the phase variable form is crucial, other canonical forms exist, each highlighting different system properties.

### 4.1 Diagonal Canonical Form

This form is achievable if the system has distinct eigenvalues. The state-space representation is:

$$ \mathbf{x}(k+1) = \begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{bmatrix} u(k) $$

$$ y(k) = \begin{bmatrix} c_1 & c_2 & \dots & c_n \end{bmatrix} \mathbf{x}(k) $$

Here, $\lambda_i$ are the distinct eigenvalues of $A$.
The output equation coefficients $c_i$ depend on the original $C$ matrix and the transformation.

*   **Advantages:** Directly shows the system's poles (eigenvalues) and allows for independent control of each mode if the system is controllable.
*   **Limitations:** Only applicable if all eigenvalues are distinct.

**Transformation to Diagonal Form:**
The transformation matrix $P$ is formed using the eigenvectors of $A$. If $\mathbf{v}_i$ is the eigenvector corresponding to $\lambda_i$, then the rows of $P^{-1}$ are $\mathbf{v}_i$.

$$ P^{-1} = \begin{bmatrix} \mathbf{v}_1 \\ \mathbf{v}_2 \\ \vdots \\ \mathbf{v}_n \end{bmatrix} $$

The $B$ matrix in the diagonal form depends on the structure of the original $B$ and the eigenvectors. If $B = [b_1, \dots, b_n]^T$, then the diagonal $B_{diag}$ is such that $P B = B_{diag}$.

**Reference:**
*   **Kuo (1992):** Chapter 7, "State-Space Analysis," covers transformations to diagonal canonical form.

### 4.2 Jordan Canonical Form

This form is applicable even when eigenvalues are repeated. It block-diagonalizes the $A$ matrix into Jordan blocks.

$$ A_{J} = \begin{bmatrix} J_1 & 0 & \dots & 0 \\ 0 & J_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & J_m \end{bmatrix} $$

where each $J_i$ is a Jordan block:
$$ J_i = \begin{bmatrix} \lambda_i & 1 & 0 & \dots & 0 \\ 0 & \lambda_i & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ 0 & 0 & 0 & \dots & \lambda_i \end{bmatrix} $$

*   **Advantages:** Handles repeated eigenvalues.
*   **Limitations:** More complex transformation matrix and output representation.

**Transformation to Jordan Form:**
The transformation matrix $P$ is formed using generalized eigenvectors.

**Reference:**
*   **Franklin, Powell, Workman (3rd Ed.):** Chapter 4, "State-Space Representations," likely discusses Jordan form.

---

## 5. Importance of Canonical Forms for Control Design

*   **Pole Placement (Phase Variable Form):** The controllable canonical form is ideal for pole placement. With state feedback $u(k) = -K\mathbf{x}(k)$, the closed-loop system matrix is $A_{pv} - B_{pv}K$. Since $B_{pv} = [0, \dots, 1]^T$, the desired characteristic polynomial of the closed-loop system can be directly achieved by choosing $K = [k_n, k_{n-1}, \dots, k_1]$ such that $z^n + k_1z^{n-1} + \dots + k_n$ is the desired polynomial.
*   **Observer Design (Dual of Controllable Canonical Form):** The dual of the controllable canonical form (observer canonical form) is useful for observer design. The transformation to this form uses the observability matrix.
*   **Decoupling (Diagonal Form):** The diagonal canonical form, when achievable, facilitates independent control of system modes.

**Learning Outcomes Addressed:**

*   **CO3:** Understanding these canonical forms enhances the ability to model and analyze discrete-time systems.
*   **CO4:** The phase variable form is fundamental for designing state feedback controllers for pole placement.

---

## 6. Practice Questions

1.  Derive the state-space representation in phase variable (controllable canonical) form for the following discrete-time transfer function:
    $$ G(z) = \frac{4z^2 + 2z + 1}{z^3 + 0.5z^2 + 0.2z + 0.1} $$

2.  Given the discrete-time system:
    $$ \mathbf{x}(k+1) = \begin{bmatrix} -0.2 & 1 \\ -0.1 & -0.3 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(k) $$
    $$ y(k) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(k) $$
    Determine if this system is in phase variable (controllable canonical) form. If not, find the transformation matrix $P$ to transform it into that form and derive the new state-space matrices $(A_{pv}, B_{pv}, C_{pv})$.

3.  What are the advantages of transforming a discrete-time system into a canonical form?

4.  Under what condition can a system be transformed into a diagonal canonical form?

---

## 7. Answers to Practice Questions

**1. Phase Variable Form from Transfer Function:**
$$ G(z) = \frac{4z^2 + 2z + 1}{z^3 + 0.5z^2 + 0.2z + 0.1} $$
To match the standard form $\frac{b_0 + b_1z^{-1} + b_2z^{-2} + \dots}{1 + a_1z^{-1} + a_2z^{-2} + \dots}$, divide numerator and denominator by $z^3$:
$$ G(z) = \frac{4z^{-1} + 2z^{-2} + 1z^{-3}}{1 + 0.5z^{-1} + 0.2z^{-2} + 0.1z^{-3}} $$
Here, $n=3$.
$a_1 = 0.5$, $a_2 = 0.2$, $a_3 = 0.1$.
$b_0 = 0$, $b_1 = 4$, $b_2 = 2$, $b_3 = 1$.

The phase variable canonical form state-space matrices are:
$$ A_{pv} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -a_3 & -a_2 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -0.1 & -0.2 & -0.5 \end{bmatrix} $$
$$ B_{pv} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} $$
$$ C_{pv} = \begin{bmatrix} b_{n-1} & b_{n-2} & \dots & b_0 \end{bmatrix} = \begin{bmatrix} b_2 & b_1 & b_0 \end{bmatrix} = \begin{bmatrix} 2 & 4 & 0 \end{bmatrix} $$

**2. Transformation to Phase Variable Form:**
The given system is:
$$ A = \begin{bmatrix} -0.2 & 1 \\ -0.1 & -0.3 \end{bmatrix}, \quad B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad C = \begin{bmatrix} 0 & 1 \end{bmatrix} $$
The characteristic polynomial is $\det(zI - A) = \det \begin{bmatrix} z+0.2 & -1 \\ 0.1 & z+0.3 \end{bmatrix} = (z+0.2)(z+0.3) - (-1)(0.1) = z^2 + 0.5z + 0.06 + 0.1 = z^2 + 0.5z + 0.16$.
So, $a_1 = 0.5$ and $a_2 = 0.16$.

The desired phase variable form ($A_{pv}, B_{pv}$) is:
$$ A_{pv} = \begin{bmatrix} 0 & 1 \\ -a_2 & -a_1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.16 & -0.5 \end{bmatrix} $$
$$ B_{pv} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$
The given system is **not** in phase variable form because its $A$ and $B$ matrices do not match the required structure.

To find the transformation matrix $P$ such that $\mathbf{z} = P\mathbf{x}$, we use $A_{pv} = P A P^{-1}$ and $B_{pv} = P B$.
The controllability matrix is $Q_c = [B \ AB]$.
$AB = \begin{bmatrix} -0.2 & 1 \\ -0.1 & -0.3 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -0.2 \\ -0.1 \end{bmatrix}$.
$Q_c = \begin{bmatrix} 1 & -0.2 \\ 0 & -0.1 \end{bmatrix}$.
$Q_c^{-1} = \frac{1}{-0.1} \begin{bmatrix} -0.1 & 0.2 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 0 & -10 \end{bmatrix}$.

The transformation matrix $P$ to go from the original form to the controllable canonical form is given by:
$$ P = \begin{bmatrix} c_n & c_{n-1} & \dots & c_1 \\ c_{n-1} & c_{n-2} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ c_1 & 0 & \dots & 0 \end{bmatrix} $$
This definition of P relates to the output matrix.

Let's use the definition related to $P B = B_{pv}$.
The row vectors of $P$ can be found. A common method involves $P = [ \mathbf{v} A ]^{-1} $ where $\mathbf{v}$ is related to the characteristic polynomial.

Let's use the relation $P = T^{-1}$ where $T$ maps to the controllable form.
$T = \begin{bmatrix} c_n & c_{n-1} \\ c_{n-1} & 0 \end{bmatrix} Q_c^{-1}$ is incorrect.

A simpler calculation of $P$ from $A, B$ to $A_{pv}, B_{pv}$ can be done by observing the structure.
The matrix $P$ is such that its rows are formed using the characteristic polynomial coefficients and the inverse of the controllability matrix $Q_c$.
Let $P = \begin{bmatrix} p_{11} & p_{12} \\ p_{21} & p_{22} \end{bmatrix}$.
$P B = \begin{bmatrix} p_{11} & p_{12} \\ p_{21} & p_{22} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} p_{11} \\ p_{21} \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
So, $p_{11} = 0$ and $p_{21} = 1$.
$$ P = \begin{bmatrix} 0 & p_{12} \\ 1 & p_{22} \end{bmatrix} $$
Now, $A_{pv} = P A P^{-1}$.
$P^{-1} = \frac{1}{-p_{12}} \begin{bmatrix} p_{22} & -p_{12} \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} -p_{22}/p_{12} & 1 \\ 1/p_{12} & 0 \end{bmatrix}$.

The relationship $P A = A_{pv} P$ is often easier to use:
$\begin{bmatrix} 0 & p_{12} \\ 1 & p_{22} \end{bmatrix} \begin{bmatrix} -0.2 & 1 \\ -0.1 & -0.3 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -0.16 & -0.5 \end{bmatrix} \begin{bmatrix} 0 & p_{12} \\ 1 & p_{22} \end{bmatrix}$

Left side:
$\begin{bmatrix} -0.1p_{12} & -0.3p_{12} \\ -0.2 - 0.1p_{22} & 1 - 0.3p_{22} \end{bmatrix}$

Right side:
$\begin{bmatrix} 1 & p_{22} \\ -0.5 & -0.16p_{12} - 0.5p_{22} \end{bmatrix}$

Equating the elements:
From row 1, col 1: $-0.1p_{12} = 1 \implies p_{12} = -10$.
From row 2, col 1: $-0.2 - 0.1p_{22} = -0.5 \implies -0.1p_{22} = -0.3 \implies p_{22} = 3$.

So, the transformation matrix $P$ is:
$$ P = \begin{bmatrix} 0 & -10 \\ 1 & 3 \end{bmatrix} $$

Now let's find $C_{pv} = C P^{-1}$:
$P^{-1} = \frac{1}{10} \begin{bmatrix} 3 & 10 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 0.3 & 1 \\ -0.1 & 0 \end{bmatrix}$.
$C_{pv} = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 0.3 & 1 \\ -0.1 & 0 \end{bmatrix} = \begin{bmatrix} -0.1 & 0 \end{bmatrix}$.

So, the new state-space matrices in phase variable form are:
$$ A_{pv} = \begin{bmatrix} 0 & 1 \\ -0.16 & -0.5 \end{bmatrix}, \quad B_{pv} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \quad C_{pv} = \begin{bmatrix} -0.1 & 0 \end{bmatrix} $$

**3. Advantages of Canonical Forms:**
*   **Simplification of Analysis:** Easily identify system properties like controllability and observability.
*   **Systematic Design:** Facilitate controller and observer design (e.g., pole placement using phase variable form).
*   **Understanding System Structure:** Reveal inherent system dynamics related to poles and modes.
*   **Standardization:** Provide a common framework for representing systems.

**4. Transformation to Diagonal Canonical Form:**
A system can be transformed into a diagonal canonical form if and only if all its eigenvalues are distinct.

---

## 8. Important Points to Remember

*   **Phase Variable (Controllable Canonical) Form:** Characterized by a companion matrix $A_{pv}$ where the last row contains the negative of the characteristic polynomial coefficients, and a standard $B_{pv} = [0, \dots, 1]^T$.
*   **Numerator Coefficients (Phase Variable Form):** The coefficients of the numerator of the transfer function determine the $C_{pv}$ matrix in the phase variable form.
*   **Transformation Matrix $P$:** Used to convert from an arbitrary state-space representation to a canonical form. $A_{new} = P A P^{-1}$, $B_{new} = P B$, $C_{new} = C P^{-1}$.
*   **Controllability:** A prerequisite for transforming a system into the controllable canonical form.
*   **Diagonal Form:** Requires distinct eigenvalues. Simplifies analysis and control of individual modes.
*   **Purpose:** Canonical forms simplify analysis and provide structured methods for controller and observer design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 9. References

*   **Digital control system analysis and design** by Philips and Nagle (Prentice Hall, 1984)
*   **Discrete Time Control Systems** by K. Ogata (PHI Learning Private Limited, New Delhi, 2009.)
*   **Digital control and State Variable methods** by M. Gopal (Tata McGraw –Hill, 1997)
*   **Digital Control Systems** by B C Kuo (Oxford University Press, 2nd Ed., 1992)
*   **Digital Control of Dynamic Systems** by G.F.Franklin, J. David Powell and M. Workman (, 3rd Ed.)

---