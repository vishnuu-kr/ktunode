---
title: "Parabolic equation-explicit and implicit method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c6"
status: "completed"
scrapedAt: "2026-05-20T18:23:26.728Z"
---
## NUMERICAL TECHNIQUES ENGINEERING - Module 4: Numerical Solution of Partial Differential Equations

### Topic: Parabolic Equations - Explicit and Implicit Methods

---

### **Introduction to Partial Differential Equations (PDEs)**

Partial Differential Equations (PDEs) are differential equations that contain unknown multivariable functions and their partial derivatives. They are fundamental to describing phenomena in various fields of engineering and science, including heat transfer, fluid dynamics, wave propagation, and electromagnetism.

*   **Key Concepts:**
    *   **PDE vs. ODE:** Ordinary Differential Equations (ODEs) involve functions of a single independent variable and their derivatives, while PDEs involve functions of multiple independent variables and their partial derivatives.
    *   **Classification of PDEs:** PDEs are broadly classified into three types based on their second-order derivatives:
        *   **Elliptic:** e.g., Laplace's equation ($\nabla^2 u = 0$), Poisson's equation ($\nabla^2 u = f$). Often used for steady-state problems.
        *   **Parabolic:** e.g., Heat equation ($\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$), Diffusion equation. Characterized by a time derivative and a second-order spatial derivative. Often used for time-dependent phenomena like heat diffusion.
        *   **Hyperbolic:** e.g., Wave equation ($\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$). Often used for wave propagation phenomena.

---

### **Focus: Parabolic Equations**

Parabolic equations are typically used to model transient (time-dependent) diffusion or heat transfer processes. A common example is the one-dimensional heat equation:

$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$

where:
*   $u(x,t)$ is the dependent variable (e.g., temperature) as a function of spatial position $x$ and time $t$.
*   $\alpha$ is the thermal diffusivity (a constant).

**Learning Outcome Addressed:**
*   The study of these methods directly addresses **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**. Understanding how to discretize and solve parabolic PDEs numerically is a core aspect of this outcome.

---

### **Numerical Solution of Parabolic Equations: Discretization**

To solve PDEs numerically, we discretize the domain into a grid of points. This transforms the continuous problem into a system of algebraic equations.

*   **Spatial Discretization:** The spatial domain (e.g., length $L$) is divided into $M$ segments of equal width $\Delta x$. The spatial points are denoted by $x_i = i \Delta x$, where $i = 0, 1, \dots, M$.
*   **Temporal Discretization:** The time domain is divided into steps of size $\Delta t$. Time points are denoted by $t_j = j \Delta t$, where $j = 0, 1, 2, \dots$.
*   **Notation:** $u_i^j$ represents the approximate value of $u(x_i, t_j)$.

We will use finite difference approximations for the derivatives:

*   **First-order time derivative ($\frac{\partial u}{\partial t}$):**
    *   **Forward Difference (Explicit):** $\frac{\partial u}{\partial t} \approx \frac{u_i^{j+1} - u_i^j}{\Delta t}$
    *   **Backward Difference (Implicit):** $\frac{\partial u}{\partial t} \approx \frac{u_i^j - u_i^{j-1}}{\Delta t}$ (less common for forward marching in time)
    *   **Central Difference (Implicit):** $\frac{\partial u}{\partial t} \approx \frac{u_i^{j+1} - u_i^j}{\Delta t}$ (most common for moving from $j$ to $j+1$)

*   **Second-order spatial derivative ($\frac{\partial^2 u}{\partial x^2}$):**
    *   **Central Difference:** $\frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

---

### **1. Explicit Method (Forward-Time Central-Space - FTCS)**

The FTCS method approximates the time derivative using a forward difference and the spatial derivative using a central difference.

**Derivation for the Heat Equation:**
Substituting the finite difference approximations into the heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$:

$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Rearranging to solve for the unknown at the next time step, $u_i^{j+1}$:

$u_i^{j+1} = u_i^j + \frac{\alpha \Delta t}{(\Delta x)^2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. The equation becomes:

$u_i^{j+1} = u_i^j + r (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

$u_i^{j+1} = r u_{i-1}^j + (1 - 2r) u_i^j + r u_{i+1}^j$

This is the FTCS explicit scheme.

**Key Concepts & Definitions:**
*   **Explicit:** The value of $u$ at the next time step ($j+1$) is calculated directly from known values at the current time step ($j$). There is no need to solve a system of equations.
*   **Stability Condition:** The FTCS scheme is only conditionally stable. For the solution to remain bounded and not oscillate uncontrollably, the following condition must be met:
    $r = \frac{\alpha \Delta t}{(\Delta x)^2} \leq 0.5$

**Reference:**
*   Chapra & Canale (6th Ed., 2010): Chapter 14 discusses finite difference methods for PDEs and highlights the explicit solution for the heat equation.
*   Gupta (1995): Chapter 7 covers numerical solutions of PDEs and details the FTCS method.

**Example:**
Consider the 1D heat equation $u_t = u_{xx}$ with $\alpha = 1$.
Domain: $0 \le x \le 1$. Boundary conditions: $u(0,t) = 0$, $u(1,t) = 0$. Initial condition: $u(x,0) = \sin(\pi x)$.
Let $\Delta x = 0.25$ and $\Delta t = 0.01$.
Calculate $r = \frac{1 \times 0.01}{(0.25)^2} = \frac{0.01}{0.0625} = 0.16$.
Since $r = 0.16 \le 0.5$, the scheme is stable.

Let's calculate $u$ at $t = 0.01$ ($j=1$).
The spatial points are $x = 0, 0.25, 0.5, 0.75, 1$.
Initial condition ($j=0$):
$u_0^0 = \sin(0) = 0$
$u_1^0 = \sin(\pi \times 0.25) = \sin(\pi/4) = \frac{\sqrt{2}}{2} \approx 0.707$
$u_2^0 = \sin(\pi \times 0.5) = \sin(\pi/2) = 1$
$u_3^0 = \sin(\pi \times 0.75) = \sin(3\pi/4) = \frac{\sqrt{2}}{2} \approx 0.707$
$u_4^0 = \sin(\pi \times 1) = \sin(\pi) = 0$

Using the FTCS formula: $u_i^{j+1} = r u_{i-1}^j + (1 - 2r) u_i^j + r u_{i+1}^j$ with $r = 0.16$.
$(1 - 2r) = 1 - 2(0.16) = 1 - 0.32 = 0.68$.

For $i=1$ (at $x=0.25$):
$u_1^1 = 0.16 u_0^0 + 0.68 u_1^0 + 0.16 u_2^0$
$u_1^1 = 0.16(0) + 0.68(0.707) + 0.16(1) = 0 + 0.48076 + 0.16 = 0.64076$

For $i=2$ (at $x=0.5$):
$u_2^1 = 0.16 u_1^0 + 0.68 u_2^0 + 0.16 u_3^0$
$u_2^1 = 0.16(0.707) + 0.68(1) + 0.16(0.707) = 0.11312 + 0.68 + 0.11312 = 0.90624$

For $i=3$ (at $x=0.75$):
$u_3^1 = 0.16 u_2^0 + 0.68 u_3^0 + 0.16 u_4^0$
$u_3^1 = 0.16(1) + 0.68(0.707) + 0.16(0) = 0.16 + 0.48076 + 0 = 0.64076$

So, at $t=0.01$, the approximate temperatures are: $(0, 0.64076, 0.90624, 0.64076, 0)$.

**Important Points to Remember (FTCS):**
*   Simple to implement, as it directly calculates the next state.
*   Requires small time steps to maintain stability ($r \le 0.5$). This can make it computationally expensive for long time simulations.
*   Accuracy is typically $O(\Delta t, (\Delta x)^2)$.

---

### **2. Implicit Method (Backward-Time Central-Space - BTCS)**

The BTCS method approximates the time derivative using a backward difference and the spatial derivative using a central difference, but importantly, the spatial derivatives are evaluated at the *next* time level ($j+1$).

**Derivation for the Heat Equation:**
Consider the heat equation at time level $j+1$:
$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$

Using a backward difference for time and central difference for space at time level $j+1$:

$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

Rearranging to group terms at time level $j+1$ on one side:

$-\frac{\alpha \Delta t}{(\Delta x)^2} u_{i-1}^{j+1} + \left(1 + \frac{2 \alpha \Delta t}{(\Delta x)^2}\right) u_i^{j+1} - \frac{\alpha \Delta t}{(\Delta x)^2} u_{i+1}^{j+1} = u_i^j$

Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. The equation becomes:

$-r u_{i-1}^{j+1} + (1 + 2r) u_i^{j+1} - r u_{i+1}^{j+1} = u_i^j$

This is the BTCS implicit scheme.

**Key Concepts & Definitions:**
*   **Implicit:** The value of $u$ at the next time step ($j+1$) depends on values of $u$ at the *same* time step ($j+1$) at neighboring spatial locations ($i-1, i+1$). This means that at each time step, we need to solve a system of linear equations to find the unknown values $u_i^{j+1}$.
*   **Stability:** The BTCS scheme is unconditionally stable, meaning it remains stable for any $\Delta t$ and $\Delta x$. This is a significant advantage over the explicit method.

**Reference:**
*   Chapra & Canale (6th Ed., 2010): Discusses implicit methods and their stability properties.
*   E Balagurusamy (2017): Chapter 10 on PDEs likely covers implicit methods like BTCS.
*   Gerald & Wheatly (6th Ed.): Chapter 9 on numerical solution of PDEs will detail implicit techniques.

**System of Equations:**
For an interior point $i$ (where $1 \le i \le M-1$), the BTCS scheme gives a set of equations. For the domain $x \in [0, L]$ with $M$ spatial segments, we have $M-1$ interior points ($i=1, 2, \dots, M-1$).

The system of equations for $j+1$ time step can be written in matrix form: $\mathbf{A} \mathbf{u}^{j+1} = \mathbf{b}$.

For $i = 1, 2, \dots, M-1$:
$-r u_{i-1}^{j+1} + (1+2r) u_i^{j+1} - r u_{i+1}^{j+1} = u_i^j$

The matrix $\mathbf{A}$ will be a tridiagonal matrix.

**Example (Continuing from FTCS example):**
Equation: $u_t = u_{xx}$, $\alpha=1$, $r=0.16$.
Domain: $0 \le x \le 1$, $\Delta x = 0.25$. $M=4$ segments, $N=5$ points (0, 0.25, 0.5, 0.75, 1).
Interior points: $i=1, 2, 3$.
Boundary conditions: $u_0^j = 0$, $u_4^j = 0$ for all $j$.
Initial condition: $u(x,0) = \sin(\pi x)$.

The system of equations for $u_1^{j+1}, u_2^{j+1}, u_3^{j+1}$ is:

For $i=1$: $-r u_0^{j+1} + (1+2r) u_1^{j+1} - r u_2^{j+1} = u_1^j$
Since $u_0^{j+1} = 0$: $(1+2r) u_1^{j+1} - r u_2^{j+1} = u_1^j$

For $i=2$: $-r u_1^{j+1} + (1+2r) u_2^{j+1} - r u_3^{j+1} = u_2^j$

For $i=3$: $-r u_2^{j+1} + (1+2r) u_3^{j+1} - r u_4^{j+1} = u_3^j$
Since $u_4^{j+1} = 0$: $-r u_2^{j+1} + (1+2r) u_3^{j+1} = u_3^j$

Substituting $r = 0.16$ and $(1+2r) = 1.32$:

$1.32 u_1^{j+1} - 0.16 u_2^{j+1} = u_1^j$
$-0.16 u_1^{j+1} + 1.32 u_2^{j+1} - 0.16 u_3^{j+1} = u_2^j$
$-0.16 u_2^{j+1} + 1.32 u_3^{j+1} = u_3^j$

Using the initial conditions ($j=0$):
$u_1^0 = 0.707$, $u_2^0 = 1.0$, $u_3^0 = 0.707$.

The system to solve for $u_1^1, u_2^1, u_3^1$ is:

$1.32 u_1^1 - 0.16 u_2^1 = 0.707$
$-0.16 u_1^1 + 1.32 u_2^1 - 0.16 u_3^1 = 1.0$
$-0.16 u_2^1 + 1.32 u_3^1 = 0.707$

This is a tridiagonal system. Solving this system (e.g., using Thomas algorithm or Gaussian elimination) would give the values of $u_1^1, u_2^1, u_3^1$.

**Solving Tridiagonal Systems:**
Tridiagonal systems are common in implicit methods for PDEs. The Thomas algorithm is an efficient method for solving them.
The general form is:
$a_i x_{i-1} + b_i x_i + c_i x_{i+1} = d_i$

The algorithm involves forward elimination to transform the system into an upper bidiagonal system and then backward substitution to find the solution.

**Important Points to Remember (BTCS):**
*   Unconditionally stable, allowing larger time steps than FTCS.
*   Requires solving a system of linear equations at each time step, which is computationally more demanding per step but potentially more efficient for long simulations due to larger $\Delta t$.
*   Accuracy is typically $O(\Delta t, (\Delta x)^2)$.

---

### **3. Crank-Nicolson Method**

The Crank-Nicolson method is another popular implicit method that offers higher accuracy. It approximates the time derivative using a central difference and the spatial derivative by averaging the spatial derivatives at the *current* and *next* time levels.

**Derivation for the Heat Equation:**
$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{1}{2} \left( \frac{\partial^2 u}{\partial x^2} \bigg|_{j+1} + \frac{\partial^2 u}{\partial x^2} \bigg|_{j} \right)$

Substituting finite differences:

$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \frac{\alpha}{2} \left( \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} + \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} \right)$

Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. Multiplying by $\Delta t$ and rearranging:

$u_i^{j+1} - u_i^j = \frac{r}{2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}) + \frac{r}{2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Grouping terms at time level $j+1$ on the left and $j$ on the right:

$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

This is the Crank-Nicolson scheme.

**Key Concepts & Definitions:**
*   **Implicit:** Like BTCS, this method results in a system of linear equations to solve at each time step.
*   **Accuracy:** The Crank-Nicolson method is second-order accurate in both space and time: $O((\Delta t)^2, (\Delta x)^2)$. This is superior to FTCS and BTCS, which are $O(\Delta t, (\Delta x)^2)$.
*   **Stability:** It is also unconditionally stable.

**Reference:**
*   Chapra & Canale (6th Ed., 2010): Discusses Crank-Nicolson as a more accurate implicit method.
*   Jain, Iyengar, & Jain: A comprehensive reference for numerical methods, likely detailing the Crank-Nicolson scheme.
*   Conte & De Boor: Another advanced reference for numerical analysis that would cover this topic.

**System of Equations:**
The Crank-Nicolson scheme also results in a tridiagonal system of equations for the unknown values at time level $j+1$.

**Important Points to Remember (Crank-Nicolson):**
*   Offers higher accuracy than FTCS and BTCS.
*   Unconditionally stable.
*   Requires solving a tridiagonal system of equations at each time step.
*   The increased accuracy can allow for larger time steps compared to FTCS while maintaining accuracy, making it efficient.

---

### **Comparison of Methods**

| Feature        | FTCS (Explicit)                                | BTCS (Implicit)                                | Crank-Nicolson (Implicit)                        |
| :------------- | :--------------------------------------------- | :--------------------------------------------- | :----------------------------------------------- |
| **Time Deriv.** | Forward Difference                             | Backward Difference                            | Central Difference                               |
| **Space Deriv.**| Central Difference                             | Central Difference                             | Central Difference (averaged)                    |
| **Calculation**| Direct calculation of $u^{j+1}$ from $u^j$     | Solves system of equations for $u^{j+1}$       | Solves system of equations for $u^{j+1}$         |
| **Stability**  | Conditionally stable ($r \le 0.5$)            | Unconditionally stable                         | Unconditionally stable                           |
| **Accuracy**   | $O(\Delta t, (\Delta x)^2)$                    | $O(\Delta t, (\Delta x)^2)$                    | $O((\Delta t)^2, (\Delta x)^2)$                  |
| **Complexity** | Simple implementation, small $\Delta t$ needed | More complex implementation, larger $\Delta t$ possible | More complex implementation, higher accuracy     |

---

### **Addressing Learning Outcomes and Course Outcomes**

*   **Learning Outcome:** This entire topic directly contributes to the understanding and application of numerical methods for solving PDEs, fulfilling **LO: Parabolic equation-explicit and implicit method**.

*   **Course Outcomes:**
    *   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3):** By studying and implementing FTCS, BTCS, and Crank-Nicolson methods, students learn to discretize parabolic PDEs and solve them computationally. This directly aligns with executing numerical procedures for PDEs.
    *   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3):** Implicit methods require solving systems of linear equations, thus reinforcing the application of techniques to solve linear systems, which is a prerequisite for solving PDEs numerically. If the PDE itself were nonlinear, these methods would be extended, also aligning with CO1.

---

### **Practice Questions and Exercises**

**Question 1 (FTCS):**
Consider the 1D heat equation $u_t = 2u_{xx}$ with $\alpha = 2$.
Domain: $0 \le x \le 1$.
Boundary conditions: $u(0,t) = 0$, $u(1,t) = 0$.
Initial condition: $u(x,0) = 100 \sin(\pi x)$.
Use the FTCS method to find the temperature distribution at $t = 0.01$.
Choose $\Delta x = 0.25$ and $\Delta t = 0.005$.

**Answer 1:**
$r = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{2 \times 0.005}{(0.25)^2} = \frac{0.01}{0.0625} = 0.16$.
Since $r = 0.16 \le 0.5$, the scheme is stable.
FTCS formula: $u_i^{j+1} = r u_{i-1}^j + (1 - 2r) u_i^j + r u_{i+1}^j$
$1 - 2r = 1 - 2(0.16) = 1 - 0.32 = 0.68$.
$u_i^{j+1} = 0.16 u_{i-1}^j + 0.68 u_i^j + 0.16 u_{i+1}^j$.

Initial conditions ($j=0$, $t=0$):
$x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$.
$u_0^0 = 0$
$u_1^0 = 100 \sin(\pi \times 0.25) = 100 \sin(\pi/4) = 100 \times \frac{\sqrt{2}}{2} \approx 70.71$
$u_2^0 = 100 \sin(\pi \times 0.5) = 100 \sin(\pi/2) = 100 \times 1 = 100$
$u_3^0 = 100 \sin(\pi \times 0.75) = 100 \sin(3\pi/4) = 100 \times \frac{\sqrt{2}}{2} \approx 70.71$
$u_4^0 = 0$

Calculate $u_i^1$ (at $t=0.01$):
$u_1^1 = 0.16 u_0^0 + 0.68 u_1^0 + 0.16 u_2^0 = 0.16(0) + 0.68(70.71) + 0.16(100) = 0 + 48.0828 + 16 = 64.0828$
$u_2^1 = 0.16 u_1^0 + 0.68 u_2^0 + 0.16 u_3^0 = 0.16(70.71) + 0.68(100) + 0.16(70.71) = 11.3136 + 68 + 11.3136 = 90.6272$
$u_3^1 = 0.16 u_2^0 + 0.68 u_3^0 + 0.16 u_4^0 = 0.16(100) + 0.68(70.71) + 0.16(0) = 16 + 48.0828 + 0 = 64.0828$

Temperatures at $t=0.01$ are approximately: $(0, 64.08, 90.63, 64.08, 0)$.

**Question 2 (Conceptual):**
Explain why implicit methods are generally preferred over explicit methods for solving parabolic PDEs over long time durations, despite their increased computational complexity per time step.

**Answer 2:**
Implicit methods are preferred due to their unconditional stability. This allows for significantly larger time steps ($\Delta t$) compared to explicit methods, which are conditionally stable and require very small $\Delta t$ to maintain stability. While implicit methods involve solving a system of equations at each time step (e.g., a tridiagonal system), the ability to take larger time steps often leads to fewer total time steps being required for the same simulation duration. This can result in a lower overall computational cost and faster execution time for long-term simulations. Additionally, methods like Crank-Nicolson offer higher accuracy, which further justifies their use.

**Question 3 (BTCS System Setup):**
Set up the system of linear equations for the BTCS method to solve the 1D heat equation $u_t = u_{xx}$ for one time step.
Domain: $0 \le x \le 1$.
Boundary conditions: $u(0,t) = 0$, $u(1,t) = 10$.
Initial condition: $u(x,0) = 0$.
Use $\Delta x = 0.5$ and $\Delta t = 0.1$.

**Answer 3:**
$\alpha = 1$. $r = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{1 \times 0.1}{(0.5)^2} = \frac{0.1}{0.25} = 0.4$.
BTCS formula: $-r u_{i-1}^{j+1} + (1 + 2r) u_i^{j+1} - r u_{i+1}^{j+1} = u_i^j$.
$1 + 2r = 1 + 2(0.4) = 1.8$.

Domain: $0 \le x \le 1$. $\Delta x = 0.5$.
Spatial points: $x_0=0, x_1=0.5, x_2=1$.
Number of interior points: 1 ($i=1$).
Boundary conditions: $u_0^j = 0$, $u_2^j = 10$ for all $j$.
Initial condition ($j=0$): $u_0^0 = 0$, $u_1^0 = 0$, $u_2^0 = 10$.

We need to solve for $u_1^1$. The BTCS equation applies for $i=1$:
$-r u_0^{j+1} + (1 + 2r) u_1^{j+1} - r u_2^{j+1} = u_1^j$.

Substitute $j=0$, $r=0.4$, $1+2r=1.8$:
$-0.4 u_0^1 + 1.8 u_1^1 - 0.4 u_2^1 = u_1^0$.

Apply boundary conditions $u_0^1 = 0$ and $u_2^1 = 10$:
$-0.4 (0) + 1.8 u_1^1 - 0.4 (10) = 0$.
$1.8 u_1^1 - 4 = 0$.
$1.8 u_1^1 = 4$.
$u_1^1 = \frac{4}{1.8} = \frac{40}{18} = \frac{20}{9} \approx 2.22$.

The temperature at $x=0.5$ at $t=0.1$ is approximately $2.22$.

---

### **Summary of Key Points**

*   Parabolic PDEs, like the heat equation, often model diffusion and transient phenomena.
*   **FTCS (Explicit):** Simple to implement, but conditionally stable, requiring small $\Delta t$ ( $\frac{\alpha \Delta t}{(\Delta x)^2} \le 0.5$).
*   **BTCS (Implicit):** Unconditionally stable, but requires solving a system of linear equations (tridiagonal) at each time step.
*   **Crank-Nicolson:** Unconditionally stable and second-order accurate in both space and time, offering better accuracy but also requiring the solution of a tridiagonal system.
*   The choice of method depends on the specific problem, desired accuracy, and computational resources. For long-term simulations or when stability is a concern, implicit methods are generally preferred.

---
This concludes the study notes for Parabolic Equations - Explicit and Implicit Methods. Remember to refer to the specified textbooks for more in-depth explanations and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
