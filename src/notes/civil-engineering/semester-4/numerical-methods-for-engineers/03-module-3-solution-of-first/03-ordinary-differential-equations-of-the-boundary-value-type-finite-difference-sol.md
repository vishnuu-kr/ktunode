---
title: "Ordinary differential equations of the boundary value type – Finite difference solution."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 3: Solution of first"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b46"
status: "completed"
scrapedAt: "2026-05-20T18:46:51.778Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 3: Solution of First-Order Ordinary Differential Equations

### Topic: Ordinary Differential Equations of the Boundary Value Type – Finite Difference Solution

---

### 1. Introduction to Boundary Value Problems (BVPs)

#### 1.1 Definition of BVPs

*   **Ordinary Differential Equation (ODE):** An equation involving an unknown function of one independent variable and its derivatives.
*   **Boundary Value Problem (BVP):** An ODE where conditions are specified at **two or more distinct points** of the independent variable. This is in contrast to Initial Value Problems (IVPs), where all conditions are specified at a single point.
*   **Typical Form of a Second-Order BVP:**
    $ \frac{d^2y}{dx^2} = f(x, y, \frac{dy}{dx}) $
    with boundary conditions specified at $x=a$ and $x=b$. Common forms include:
    *   Dirichlet conditions: $y(a) = \alpha$, $y(b) = \beta$
    *   Neumann conditions: $\frac{dy}{dx}(a) = \alpha$, $\frac{dy}{dx}(b) = \beta$
    *   Mixed conditions: A combination of Dirichlet and Neumann conditions.

#### 1.2 Why Finite Difference Methods for BVPs?

*   **Analytical Solutions:** Often difficult or impossible to find for complex BVPs.
*   **Discretization:** Finite difference methods approximate the continuous domain into a discrete set of points (a grid or mesh).
*   **Differential Operators:** Derivatives in the ODE are replaced by algebraic approximations using finite differences.
*   **System of Algebraic Equations:** This process transforms the BVP into a system of linear (or non-linear) algebraic equations that can be solved numerically.

---

### 2. Finite Difference Approximations

#### 2.1 Basic Finite Difference Formulas

We consider a uniform grid with spacing $h$. Let $y_i$ be the approximate value of the solution $y(x)$ at $x_i = a + ih$, where $i = 0, 1, 2, ..., N$, and $x_N = b$. Thus, $h = \frac{b-a}{N}$.

*   **Forward Difference:**
    $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_i}{h} $
    Order of accuracy: $O(h)$

*   **Backward Difference:**
    $ \frac{dy}{dx} \approx \frac{y_i - y_{i-1}}{h} $
    Order of accuracy: $O(h)$

*   **Central Difference:**
    $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_{i-1}}{2h} $
    Order of accuracy: $O(h^2)$

*   **Second Derivative (Central Difference):**
    $ \frac{d^2y}{dx^2} \approx \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} $
    Order of accuracy: $O(h^2)$

#### 2.2 Applying Finite Differences to BVPs

Let's consider a general second-order linear BVP:
$ p(x)\frac{d^2y}{dx^2} + q(x)\frac{dy}{dx} + r(x)y = s(x) $
with boundary conditions $y(a) = \alpha$ and $y(b) = \beta$.

Using central difference approximations at an interior point $x_i$:
$ p(x_i)\left(\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2}\right) + q(x_i)\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) + r(x_i)y_i = s(x_i) $

Rearranging the terms to group $y_{i-1}$, $y_i$, and $y_{i+1}$:
$ \frac{p_i}{h^2}(y_{i+1} - 2y_i + y_{i-1}) + \frac{q_i}{2h}(y_{i+1} - y_{i-1}) + r_i y_i = s_i $

Multiply by $h^2$:
$ p_i(y_{i+1} - 2y_i + y_{i-1}) + \frac{q_i h}{2}(y_{i+1} - y_{i-1}) + r_i h^2 y_i = s_i h^2 $

Group terms:
$ \left(\frac{p_i}{h^2} - \frac{q_i}{2h}\right)y_{i-1} + \left(-\frac{2p_i}{h^2} + r_i\right)y_i + \left(\frac{p_i}{h^2} + \frac{q_i}{2h}\right)y_{i+1} = s_i $

Let:
*   $A_i = \frac{p_i}{h^2} - \frac{q_i}{2h}$
*   $B_i = -\frac{2p_i}{h^2} + r_i$
*   $C_i = \frac{p_i}{h^2} + \frac{q_i}{2h}$
*   $D_i = s_i$

The equation becomes:
$ A_i y_{i-1} + B_i y_i + C_i y_{i+1} = D_i $

This equation holds for $i = 1, 2, ..., N-1$ (the interior points).

#### 2.3 Incorporating Boundary Conditions

*   **Dirichlet Conditions:** $y(a) = \alpha$ and $y(b) = \beta$.
    *   For $i=0$: $y_0 = \alpha$ (This is an equation for $y_0$)
    *   For $i=N$: $y_N = \beta$ (This is an equation for $y_N$)

*   **Neumann Conditions:** $\frac{dy}{dx}(a) = \alpha$ and $\frac{dy}{dx}(b) = \beta$.
    These conditions involve derivatives at the boundaries. We can approximate them using finite differences.
    *   At $x=a$ ($i=0$):
        *   Forward difference: $\frac{y_1 - y_0}{h} = \alpha$  $\implies y_1 - y_0 = h\alpha$
        *   Central difference (if we introduce a "ghost" point $y_{-1}$): $\frac{y_1 - y_{-1}}{2h} = \alpha \implies y_{-1} = y_1 - 2h\alpha$. This ghost point can be used in the finite difference equation at $i=0$.
    *   At $x=b$ ($i=N$):
        *   Backward difference: $\frac{y_N - y_{N-1}}{h} = \beta \implies y_N - y_{N-1} = h\beta$
        *   Central difference (if we introduce a "ghost" point $y_{N+1}$): $\frac{y_{N+1} - y_{N-1}}{2h} = \beta \implies y_{N+1} = y_{N-1} + 2h\beta$. This ghost point can be used in the finite difference equation at $i=N$.

#### 2.4 System of Linear Equations

Combining the finite difference equations for interior points and the boundary condition equations, we obtain a system of $N+1$ linear algebraic equations for the $N+1$ unknown values $y_0, y_1, ..., y_N$.

For $i=1, \dots, N-1$:
$ A_i y_{i-1} + B_i y_i + C_i y_{i+1} = D_i $

With boundary conditions:
*   $y_0 = \alpha$ (for Dirichlet at $x=a$)
*   $y_N = \beta$ (for Dirichlet at $x=b$)

If Neumann conditions are present, the equations at $i=0$ and $i=N$ will be modified.

**Example with Dirichlet Conditions:**

Let's consider the BVP:
$ \frac{d^2y}{dx^2} - y = 0 $, with $y(0) = 0$ and $y(1) = 1$.

Here, $p(x) = 1$, $q(x) = 0$, $r(x) = -1$, $s(x) = 0$.
The finite difference equation for interior points ($i=1, \dots, N-1$):
$ \left(\frac{1}{h^2} - \frac{0}{2h}\right)y_{i-1} + \left(-\frac{2}{h^2} - 1\right)y_i + \left(\frac{1}{h^2} + \frac{0}{2h}\right)y_{i+1} = 0 $
$ \frac{1}{h^2} y_{i-1} - \left(\frac{2}{h^2} + 1\right)y_i + \frac{1}{h^2} y_{i+1} = 0 $

Let's choose $N=4$. Then $h = \frac{1-0}{4} = 0.25$.
The grid points are $x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$.
We need to solve for $y_0, y_1, y_2, y_3, y_4$.

Boundary conditions:
$y_0 = 0$
$y_4 = 1$

The interior points are $i=1, 2, 3$.
For $i=1$ ($x_1=0.25$):
$ \frac{1}{(0.25)^2} y_0 - \left(\frac{2}{(0.25)^2} + 1\right)y_1 + \frac{1}{(0.25)^2} y_2 = 0 $
$ 16 y_0 - (32+1)y_1 + 16 y_2 = 0 $
$ 16 y_0 - 33 y_1 + 16 y_2 = 0 $

For $i=2$ ($x_2=0.5$):
$ \frac{1}{(0.25)^2} y_1 - \left(\frac{2}{(0.25)^2} + 1\right)y_2 + \frac{1}{(0.25)^2} y_3 = 0 $
$ 16 y_1 - 33 y_2 + 16 y_3 = 0 $

For $i=3$ ($x_3=0.75$):
$ \frac{1}{(0.25)^2} y_2 - \left(\frac{2}{(0.25)^2} + 1\right)y_3 + \frac{1}{(0.25)^2} y_4 = 0 $
$ 16 y_2 - 33 y_3 + 16 y_4 = 0 $

Now we have a system of 3 equations for $y_1, y_2, y_3$:
1. $ 16 y_0 - 33 y_1 + 16 y_2 = 0 $
2. $ 16 y_1 - 33 y_2 + 16 y_3 = 0 $
3. $ 16 y_2 - 33 y_3 + 16 y_4 = 0 $

Substitute boundary conditions $y_0 = 0$ and $y_4 = 1$:
1. $ 16(0) - 33 y_1 + 16 y_2 = 0 \implies -33 y_1 + 16 y_2 = 0 $
2. $ 16 y_1 - 33 y_2 + 16 y_3 = 0 $
3. $ 16 y_2 - 33 y_3 + 16(1) = 0 \implies 16 y_2 - 33 y_3 = -16 $

This gives us a $3 \times 3$ system:
$ \begin{pmatrix} -33 & 16 & 0 \\ 16 & -33 & 16 \\ 0 & 16 & -33 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ -16 \end{pmatrix} $

This system can be solved using Gaussian elimination or other matrix inversion methods.

**Matrix Structure:**

Notice that for a linear BVP, the resulting system of equations is often a **tridiagonal matrix**, which is computationally advantageous.
The general form of the matrix equation is $ \mathbf{A} \mathbf{y} = \mathbf{b} $, where $\mathbf{y} = [y_0, y_1, \dots, y_N]^T$.

For the example above:
$ \begin{pmatrix}
1 & 0 & 0 & 0 & 0 \\
-33 & 16 & 0 & 0 & 0 \\
0 & 16 & -33 & 16 & 0 \\
0 & 0 & 16 & -33 & 16 \\
0 & 0 & 0 & 0 & 1
\end{pmatrix} \begin{pmatrix} y_0 \\ y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
-16 \\
1
\end{pmatrix} $

Wait, let's re-examine the first and last rows of the matrix system when boundary conditions are applied directly.

The system of equations is:
$ y_0 = \alpha $
$ A_1 y_0 + B_1 y_1 + C_1 y_2 = D_1 $
$ A_2 y_1 + B_2 y_2 + C_2 y_3 = D_2 $
...
$ A_{N-1} y_{N-2} + B_{N-1} y_{N-1} + C_{N-1} y_N = D_{N-1} $
$ y_N = \beta $

When substituting $y_0=\alpha$ and $y_N=\beta$ into the first and last interior point equations:

For $i=1$: $A_1 \alpha + B_1 y_1 + C_1 y_2 = D_1 \implies B_1 y_1 + C_1 y_2 = D_1 - A_1 \alpha$
For $i=N-1$: $A_{N-1} y_{N-2} + B_{N-1} y_{N-1} + C_{N-1} \beta = D_{N-1} \implies A_{N-1} y_{N-2} + B_{N-1} y_{N-1} = D_{N-1} - C_{N-1} \beta$

So the matrix system for the *interior* unknowns $y_1, \dots, y_{N-1}$ looks like:

$ \begin{pmatrix}
B_1 & C_1 & 0 & \dots & 0 \\
A_2 & B_2 & C_2 & \dots & 0 \\
0 & A_3 & B_3 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \dots & A_{N-1} & B_{N-1}
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ \vdots \\ y_{N-1} \end{pmatrix} = \begin{pmatrix}
D_1 - A_1 \alpha \\
D_2 \\
D_3 \\
\vdots \\
D_{N-1} - C_{N-1} \beta
\end{pmatrix} $

This is a $(N-1) \times (N-1)$ tridiagonal system.

Let's re-apply to the example: $ \frac{d^2y}{dx^2} - y = 0 $, $y(0)=0, y(1)=1$, $N=4, h=0.25$.
$p_i=1, q_i=0, r_i=-1, s_i=0$.
$A_i = \frac{1}{h^2} = 16$
$B_i = -\frac{2}{h^2} - 1 = -33$
$C_i = \frac{1}{h^2} = 16$
$D_i = 0$

We are solving for $y_1, y_2, y_3$.
The system is:
$B_1 y_1 + C_1 y_2 = D_1 - A_1 \alpha \implies -33 y_1 + 16 y_2 = 0 - 16(0) = 0$
$A_2 y_1 + B_2 y_2 + C_2 y_3 = D_2 \implies 16 y_1 - 33 y_2 + 16 y_3 = 0$
$A_3 y_2 + B_3 y_3 = D_3 - C_3 \beta \implies 16 y_2 - 33 y_3 = 0 - 16(1) = -16$

This matches our earlier system for $y_1, y_2, y_3$.

#### 2.5 Solving the Tridiagonal System

Tridiagonal systems can be efficiently solved using the **Thomas Algorithm** (a form of Gaussian elimination optimized for tridiagonal matrices).

**Thomas Algorithm:**
For a system $ \mathbf{A} \mathbf{y} = \mathbf{b} $ where $\mathbf{A}$ is tridiagonal:
$ \begin{pmatrix}
b_1 & c_1 & 0 & \dots & 0 \\
a_2 & b_2 & c_2 & \dots & 0 \\
0 & a_3 & b_3 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \dots & a_n & b_n
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ \vdots \\ y_n \end{pmatrix} = \begin{pmatrix} d_1 \\ d_2 \\ d_3 \\ \vdots \\ d_n \end{pmatrix} $

**Forward Elimination:**
Create new coefficients $\beta_i$ and $\gamma_i$:
$ \beta_1 = b_1 $
$ \gamma_1 = d_1 / \beta_1 $

For $i = 2, \dots, n$:
$ \beta_i = b_i - \frac{a_i}{ \beta_{i-1} } c_{i-1} $
$ \gamma_i = \frac{d_i - a_i \gamma_{i-1}}{ \beta_i } $

**Backward Substitution:**
$ y_n = \gamma_n $
For $i = n-1, \dots, 1$:
$ y_i = \gamma_i - \frac{c_i}{ \beta_i } y_{i+1} $

---

### 3. Finite Difference Methods for Neumann Boundary Conditions

Consider the BVP:
$ \frac{d^2y}{dx^2} = f(x) $
with $y(a) = \alpha$ and $\frac{dy}{dx}(b) = \beta$.

The finite difference equation for an interior point $x_i$ is:
$ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} = f(x_i) $
$ y_{i-1} - 2y_i + y_{i+1} = h^2 f(x_i) $

**Handling Neumann at x=b (i=N):**
$ \frac{dy}{dx}(b) = \beta $

We can use a backward difference approximation:
$ \frac{y_N - y_{N-1}}{h} = \beta \implies y_N - y_{N-1} = h\beta $

This equation relates $y_{N-1}$ and $y_N$. However, we usually want a system for $y_0, y_1, \dots, y_N$.

A common approach is to use a **ghost point** $y_{N+1}$.
Using central difference at $x_N$:
$ \frac{y_{N+1} - y_{N-1}}{2h} = \beta \implies y_{N+1} = y_{N-1} + 2h\beta $

Now, apply the finite difference equation at $i=N$:
$ \frac{y_{N+1} - 2y_N + y_{N-1}}{h^2} = f(x_N) $
Substitute $y_{N+1}$:
$ \frac{(y_{N-1} + 2h\beta) - 2y_N + y_{N-1}}{h^2} = f(x_N) $
$ \frac{2y_{N-1} - 2y_N + 2h\beta}{h^2} = f(x_N) $
$ 2y_{N-1} - 2y_N + 2h\beta = h^2 f(x_N) $
$ y_{N-1} - y_N = -\frac{h^2}{2} f(x_N) - h\beta $

This gives us an equation involving $y_{N-1}$ and $y_N$.

Alternatively, if we only use the $y_0, \dots, y_N$ points, the equation at $i=N$ needs to be modified to incorporate the Neumann condition.
The general form of the equation at $i=N$ is:
$ A_N y_{N-1} + B_N y_N + C_N y_{N+1} = D_N $ (This would be derived if we had an equation at $i=N$ using central differences, which implies $y_{N+1}$)

If we don't introduce a ghost point and only solve for $y_0, \dots, y_N$, we need to modify the finite difference equations at the boundaries where Neumann conditions are applied.

Let's use the example: $ \frac{d^2y}{dx^2} = 1 $, $y(0)=0$, $\frac{dy}{dx}(1)=0$.
$N=4$, $h=0.25$.
$p(x)=1, q(x)=0, r(x)=0, s(x)=1$.
The finite difference equation for interior points ($i=1, 2, 3$):
$ \frac{y_{i-1} - 2y_i + y_{i+1}}{h^2} = 1 $
$ y_{i-1} - 2y_i + y_{i+1} = h^2 = (0.25)^2 = 0.0625 $

Boundary conditions:
$y_0 = 0$
$\frac{dy}{dx}(1) = 0$

Using backward difference for $\frac{dy}{dx}(1)$:
$ \frac{y_N - y_{N-1}}{h} = 0 \implies y_N - y_{N-1} = 0 \implies y_N = y_{N-1} $

The system of equations for $y_1, y_2, y_3, y_4$ (since $y_0$ is known):
For $i=1$: $y_0 - 2y_1 + y_2 = 0.0625 \implies 0 - 2y_1 + y_2 = 0.0625 \implies -2y_1 + y_2 = 0.0625$
For $i=2$: $y_1 - 2y_2 + y_3 = 0.0625$
For $i=3$: $y_2 - 2y_3 + y_4 = 0.0625$
For $i=4$: $y_3 - 2y_4 + y_5 = 0.0625$ (This would be if we used central difference at $i=4$. We need to use the Neumann condition directly.)

Let's re-think how to generate the system.
We have $y_0, y_1, y_2, y_3, y_4$ as unknowns.

Equations:
1. $y_0 = 0$ (Dirichlet at $i=0$)
2. $y_0 - 2y_1 + y_2 = 0.0625$ (Finite difference at $i=1$)
3. $y_1 - 2y_2 + y_3 = 0.0625$ (Finite difference at $i=2$)
4. $y_2 - 2y_3 + y_4 = 0.0625$ (Finite difference at $i=3$)
5. $y_4 - y_3 = 0$ (Neumann at $i=4$, using backward difference $\frac{y_4 - y_3}{h} = 0$)

Substituting $y_0=0$ into eq 2:
$ -2y_1 + y_2 = 0.0625 $

Now we have a $3 \times 3$ system for $y_1, y_2, y_3$:
$ \begin{pmatrix}
-2 & 1 & 0 \\
1 & -2 & 1 \\
0 & 1 & -1 \quad (\text{from } y_2 - 2y_3 + y_4 = 0.0625 \text{ and } y_4 = y_3)
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix}
0.0625 \\
0.0625 \\
0.0625
\end{pmatrix} $

Let's verify equation 4: $y_2 - 2y_3 + y_4 = 0.0625$.
Using $y_4=y_3$: $y_2 - 2y_3 + y_3 = 0.0625 \implies y_2 - y_3 = 0.0625$.
So the matrix is:
$ \begin{pmatrix}
-2 & 1 & 0 \\
1 & -2 & 1 \\
0 & 1 & -1
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix}
0.0625 \\
0.0625 \\
0.0625
\end{pmatrix} $

This is a tridiagonal system.

The solution for $y_1, y_2, y_3$ will be obtained, and then $y_4 = y_3$.

---

### 4. Accuracy and Error

*   **Local Truncation Error:** The error introduced at a single grid point when replacing the differential operator with its finite difference approximation. For the central difference approximations of first and second derivatives, the local truncation error is $O(h^2)$.
*   **Global Truncation Error:** The accumulation of local truncation errors over the entire domain. For consistent finite difference schemes of order $p$, the global truncation error is $O(h^p)$. In our case, using central differences, it's $O(h^2)$.
*   **Convergence:** As $h \to 0$, the numerical solution approaches the exact solution.
*   **Stability:** The numerical method does not amplify errors as the computation progresses. For many linear BVPs with appropriate boundary conditions, finite difference methods are generally stable.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the boundary value problem:
$ \frac{d^2y}{dx^2} + y = 0 $
with boundary conditions $y(0) = 0$ and $y(1) = 1$.
Divide the interval $[0, 1]$ into 4 equal subintervals. Write down the system of linear algebraic equations for the unknown values $y_1, y_2, y_3$ using the finite difference method.

**Solution 1:**
$N=4$, $h = \frac{1-0}{4} = 0.25$.
The equation is $ \frac{d^2y}{dx^2} + y = 0 $.
Here, $p(x)=1, q(x)=0, r(x)=1, s(x)=0$.
The finite difference equation at an interior point $i$ ($i=1, 2, 3$):
$ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + y_i = 0 $
$ y_{i-1} + (-2 + h^2)y_i + y_{i+1} = 0 $
$ y_{i-1} + (-2 + (0.25)^2)y_i + y_{i+1} = 0 $
$ y_{i-1} + (-2 + 0.0625)y_i + y_{i+1} = 0 $
$ y_{i-1} - 1.9375 y_i + y_{i+1} = 0 $

Boundary conditions: $y_0 = 0$, $y_4 = 1$.

For $i=1$: $y_0 - 1.9375 y_1 + y_2 = 0$.
Substitute $y_0=0$: $ -1.9375 y_1 + y_2 = 0 $

For $i=2$: $y_1 - 1.9375 y_2 + y_3 = 0$

For $i=3$: $y_2 - 1.9375 y_3 + y_4 = 0$.
Substitute $y_4=1$: $ y_2 - 1.9375 y_3 + 1 = 0 \implies y_2 - 1.9375 y_3 = -1 $

The system of equations for $y_1, y_2, y_3$ is:
$ \begin{pmatrix}
-1.9375 & 1 & 0 \\
1 & -1.9375 & 1 \\
0 & 1 & -1.9375
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
-1
\end{pmatrix} $

**Question 2:**
Consider the boundary value problem:
$ \frac{d^2y}{dx^2} = x $
with boundary conditions $y(0) = 0$ and $\frac{dy}{dx}(1) = 0$.
Divide the interval $[0, 1]$ into 2 equal subintervals. Write down the system of linear algebraic equations for the unknown values $y_1, y_2$.

**Solution 2:**
$N=2$, $h = \frac{1-0}{2} = 0.5$.
The equation is $ \frac{d^2y}{dx^2} = x $.
Here, $p(x)=1, q(x)=0, r(x)=0, s(x)=x$.
The finite difference equation at an interior point $i$ ($i=1$):
$ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} = x_i $
$ y_{i-1} - 2y_i + y_{i+1} = h^2 x_i $
$ y_{i-1} - 2y_i + y_{i+1} = (0.5)^2 x_i = 0.25 x_i $

Boundary conditions: $y(0) = 0$ ($y_0 = 0$), $\frac{dy}{dx}(1) = 0$ ($\frac{dy}{dx}(x_2) = 0$).

We need to solve for $y_1, y_2$.
The points are $x_0=0, x_1=0.5, x_2=1$.

The finite difference equation at $i=1$ ($x_1=0.5$):
$ y_0 - 2y_1 + y_2 = 0.25 x_1 = 0.25(0.5) = 0.125 $
Substitute $y_0=0$:
$ 0 - 2y_1 + y_2 = 0.125 \implies -2y_1 + y_2 = 0.125 $

Now, consider the boundary condition at $x=1$ ($x_2$).
$ \frac{dy}{dx}(1) = 0 $.
Using backward difference at $x_2$:
$ \frac{y_2 - y_1}{h} = 0 $
$ y_2 - y_1 = 0 \implies y_2 = y_1 $

We have a system of 2 equations for $y_1, y_2$:
1. $ -2y_1 + y_2 = 0.125 $
2. $ -y_1 + y_2 = 0 $

This can be written as:
$ \begin{pmatrix}
-2 & 1 \\
-1 & 1
\end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = \begin{pmatrix}
0.125 \\
0
\end{pmatrix} $

Solving this system:
From (2), $y_2 = y_1$.
Substitute into (1): $-2y_1 + y_1 = 0.125 \implies -y_1 = 0.125 \implies y_1 = -0.125$.
Then $y_2 = y_1 = -0.125$.
So the approximate solution is $y_0=0, y_1=-0.125, y_2=-0.125$.

---

### 6. Important Points to Remember

*   **Distinction between BVPs and IVPs:** Conditions at multiple points for BVPs, vs. conditions at a single point for IVPs.
*   **Finite Difference Approximations:** Central differences are generally preferred for their higher order of accuracy ($O(h^2)$) compared to forward/backward differences ($O(h)$).
*   **System of Algebraic Equations:** The core idea is to convert the differential equation into a system of algebraic equations by discretizing the domain.
*   **Tridiagonal Matrices:** For linear second-order BVPs, the resulting system of equations often forms a tridiagonal matrix, which can be solved efficiently using the Thomas Algorithm.
*   **Boundary Condition Implementation:** Carefully implement Dirichlet and Neumann boundary conditions. Neumann conditions often require special treatment, such as using ghost points or modified finite difference formulas at the boundary.
*   **Accuracy:** The accuracy of the solution depends on the step size $h$. Smaller $h$ generally leads to more accurate results but requires solving a larger system of equations.
*   **Truncation Error:** Understand the difference between local and global truncation error and how they relate to the order of the finite difference approximation.

---
