---
title: "convergence and stability"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c7"
status: "completed"
scrapedAt: "2026-05-20T18:23:27.434Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 4: Numerical Solution of Partial Differential Equations

## Topic: Convergence and Stability

### 1. Introduction to Convergence and Stability in PDEs

When we solve Partial Differential Equations (PDEs) numerically, we are essentially approximating a continuous solution with a discrete one. This process introduces potential issues that can lead to inaccurate or meaningless results. Convergence and stability are two critical concepts that assess the quality and reliability of these numerical solutions.

*   **Convergence:** A numerical method is considered **convergent** if the numerical solution approaches the true analytical solution as the grid spacing (or time step) approaches zero. In simpler terms, as we refine the mesh or time discretization, the numerical result gets closer and closer to the actual answer.
*   **Stability:** A numerical method is considered **stable** if errors introduced during the computation (due to approximations, round-off, or initial conditions) do not grow unbounded as the computation progresses. An unstable method can amplify even small errors, leading to wildly oscillating or nonsensical results.

**Why are they important?**

*   **Accuracy:** Convergence directly relates to the accuracy of the numerical solution. A convergent method, with a fine enough discretization, will produce an accurate approximation.
*   **Reliability:** Stability ensures that the numerical solution remains meaningful throughout the computation. An unstable method will produce garbage regardless of how fine the discretization is.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Discusses the trade-off between accuracy and computational cost, and introduces the concepts of convergence and stability in the context of numerical methods for ODEs and PDEs.
*   **Gupta (1995):** Provides a foundational understanding of stability and convergence criteria for various finite difference schemes applied to PDEs.
*   **Jain, Iyengar & Jain:** Offers rigorous mathematical treatments of stability and convergence for different types of PDEs and numerical methods.

**Course Outcome Alignment:**

*   **CO4:** Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3). Understanding convergence and stability is crucial for successfully executing these procedures and ensuring the obtained solutions are valid.

### 2. Sources of Errors in Numerical Solutions of PDEs

Before diving into convergence and stability, it's important to understand where errors originate in the numerical solution of PDEs:

*   **Truncation Error:** This error arises from approximating differential operators with finite differences. When we replace continuous derivatives with discrete approximations (e.g., Taylor series expansions), we neglect higher-order terms.
    *   **Example:** The forward difference approximation for $\frac{\partial u}{\partial x}$ is $\frac{u(x+\Delta x, t) - u(x, t)}{\Delta x}$. The truncation error is of the order of $\Delta x$.
*   **Round-off Error:** This error is introduced by the finite precision of computer arithmetic. Each arithmetic operation (addition, subtraction, multiplication, division) can introduce a small error.
    *   **Example:** Storing $1/3$ as $0.3333$ introduces a round-off error.
*   **Algorithmic Error:** This error can stem from the specific numerical algorithm chosen, such as iterative methods that are stopped prematurely.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Explains truncation error as the difference between the exact differential equation and its finite difference approximation.
*   **Balagurusamy (2017):** Provides a clear explanation of how discretization leads to truncation errors.

### 3. Convergence Analysis

Convergence is a property of the numerical method itself. It's often assessed by examining how the solution behaves as the step sizes ($\Delta x$, $\Delta y$, $\Delta t$, etc.) tend to zero.

#### 3.1. Definition of Convergence

A numerical method for a PDE is convergent if the numerical solution $u_h$ approaches the true analytical solution $u$ as all step sizes tend to zero.

$$ \lim_{\Delta x, \Delta y, \Delta t, \dots \to 0} \|u_h - u\| = 0 $$

where $\| \cdot \|$ represents a suitable norm (e.g., $L_2$ norm, maximum norm).

#### 3.2. The Lax Equivalence Theorem

This is a fundamental theorem in the numerical solution of PDEs. It states that for a consistent and stable numerical method, convergence is guaranteed. Conversely, if a method is convergent and consistent, it must be stable.

*   **Consistency:** A numerical method is **consistent** if it accurately approximates the original PDE as the step sizes approach zero. This means the truncation error of the finite difference approximation tends to zero as $\Delta x, \Delta y, \Delta t \to 0$.
*   **Stability:** The numerical scheme does not amplify errors as the computation progresses.

**Lax Equivalence Theorem:** For a linear PDE problem, if a finite-difference scheme is consistent with the PDE and stable, then it is convergent. Conversely, if the scheme is consistent and convergent, it must be stable.

**Key Takeaway:** If we can prove consistency and stability, we are guaranteed convergence. This is often the practical approach to verifying a numerical method.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Introduces the concept of consistency and its importance for convergence.
*   **Jain, Iyengar & Jain:** Provides a detailed mathematical proof and discussion of the Lax Equivalence Theorem.
*   **Gerald & Wheatly (6th Edition):** Explains consistency as the requirement that the discretized equation tends to the original PDE as step sizes go to zero.

#### 3.3. Analyzing Consistency

To check for consistency, we substitute the Taylor series expansions of the discrete variables into the finite difference scheme and see if it reduces to the original PDE as step sizes tend to zero.

**Example: Forward Difference for $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ (Heat Equation)**

The PDE is: $\frac{\partial u}{\partial t} - \alpha \frac{\partial^2 u}{\partial x^2} = 0$

Consider the explicit finite difference scheme:
$\frac{u_{i}^{j+1} - u_{i}^{j}}{\Delta t} - \alpha \frac{u_{i+1}^{j} - 2u_{i}^{j} + u_{i-1}^{j}}{(\Delta x)^2} = 0$

Let $u(x, t)$ be the exact solution. At grid point $(x_i, t_j)$, we have:
$u_i^{j+1} = u(x_i, t_{j+1}) = u(x_i, t_j + \Delta t) = u(x_i, t_j) + \Delta t \frac{\partial u}{\partial t} + \frac{(\Delta t)^2}{2} \frac{\partial^2 u}{\partial t^2} + \dots$
$u_{i+1}^{j} = u(x_{i+1}, t_j) = u(x_i + \Delta x, t_j) = u(x_i, t_j) + \Delta x \frac{\partial u}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2} + \frac{(\Delta x)^3}{6} \frac{\partial^3 u}{\partial x^3} + \dots$
$u_{i-1}^{j} = u(x_{i-1}, t_j) = u(x_i - \Delta x, t_j) = u(x_i, t_j) - \Delta x \frac{\partial u}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2} - \frac{(\Delta x)^3}{6} \frac{\partial^3 u}{\partial x^3} + \dots$

Substituting these into the finite difference scheme:
$\frac{1}{\Delta t} \left( u + \Delta t \frac{\partial u}{\partial t} + \frac{(\Delta t)^2}{2} \frac{\partial^2 u}{\partial t^2} + \dots - u \right) - \alpha \frac{1}{(\Delta x)^2} \left( (u + \Delta x \frac{\partial u}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2} + \dots) - 2u + (u - \Delta x \frac{\partial u}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2} - \dots) \right) = 0$

$\frac{\partial u}{\partial t} + \frac{\Delta t}{2} \frac{\partial^2 u}{\partial t^2} + \dots - \alpha \frac{1}{(\Delta x)^2} \left( (\Delta x)^2 \frac{\partial^2 u}{\partial x^2} + O((\Delta x)^4) \right) = 0$

$\frac{\partial u}{\partial t} + \frac{\Delta t}{2} \frac{\partial^2 u}{\partial t^2} + \dots - \alpha \frac{\partial^2 u}{\partial x^2} - \alpha O((\Delta x)^2) = 0$

Rearranging:
$\left( \frac{\partial u}{\partial t} - \alpha \frac{\partial^2 u}{\partial x^2} \right) + \frac{\Delta t}{2} \frac{\partial^2 u}{\partial t^2} - \alpha O((\Delta x)^2) = 0$

The term in the parenthesis is zero because $u$ is the exact solution.
The truncation error is: $T = \frac{\Delta t}{2} \frac{\partial^2 u}{\partial t^2} - \alpha O((\Delta x)^2)$.

As $\Delta t \to 0$ and $\Delta x \to 0$, the truncation error $T \to 0$. Therefore, the scheme is **consistent**.

### 4. Stability Analysis

Stability is about error propagation. If a method is unstable, errors grow uncontrollably.

#### 4.1. Definition of Stability

A numerical method is **stable** if the amplification of errors introduced at each time step is bounded. For finite difference methods, this is often analyzed using the **von Neumann stability analysis** for linear PDEs with constant coefficients.

#### 4.2. Von Neumann Stability Analysis

This method analyzes the behavior of a single Fourier mode error. Assume the error at a grid point $(x_i, t_j)$ can be represented by $e_i^j = \xi^j e^{ikx_i}$, where:
*   $\xi$ is the amplification factor.
*   $k$ is the wave number.
*   $i$ is the spatial index.
*   $j$ is the temporal index.

We substitute this error term into the finite difference equation and solve for $\xi$. The method is stable if $|\xi| \le 1$ for all wave numbers $k$.

**Example: Forward Difference Scheme for the Heat Equation ($\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$)**

The finite difference equation is:
$\frac{u_{i}^{j+1} - u_{i}^{j}}{\Delta t} = \alpha \frac{u_{i+1}^{j} - 2u_{i}^{j} + u_{i-1}^{j}}{(\Delta x)^2}$

Let $u_i^j$ represent the true solution plus error, so $u_i^j = U_i^j + e_i^j$, where $U_i^j$ is the true solution and $e_i^j$ is the error. Substituting into the finite difference equation:

$\frac{U_{i}^{j+1} + e_{i}^{j+1} - (U_{i}^{j} + e_{i}^{j})}{\Delta t} = \alpha \frac{(U_{i+1}^{j} + e_{i+1}^{j}) - 2(U_{i}^{j} + e_{i}^{j}) + (U_{i-1}^{j} + e_{i-1}^{j})}{(\Delta x)^2}$

Since $U$ satisfies the discretized equation, we are left with the error equation:
$\frac{e_{i}^{j+1} - e_{i}^{j}}{\Delta t} = \alpha \frac{e_{i+1}^{j} - 2e_{i}^{j} + e_{i-1}^{j}}{(\Delta x)^2}$

Substitute $e_i^j = \xi^j e^{ikx_i}$:
$\frac{\xi^{j+1} e^{ikx_i} - \xi^j e^{ikx_i}}{\Delta t} = \alpha \frac{\xi^j e^{ik(x_i+\Delta x)} - 2\xi^j e^{ikx_i} + \xi^j e^{ik(x_i-\Delta x)}}{(\Delta x)^2}$

Divide by $\xi^j e^{ikx_i}$ (assuming $\xi \neq 0$ and $e^{ikx_i} \neq 0$):
$\frac{\xi - 1}{\Delta t} = \alpha \frac{e^{ik\Delta x} - 2 + e^{-ik\Delta x}}{(\Delta x)^2}$

Using Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$, so $e^{ik\Delta x} + e^{-ik\Delta x} = 2\cos(k\Delta x)$:
$\frac{\xi - 1}{\Delta t} = \alpha \frac{2\cos(k\Delta x) - 2}{(\Delta x)^2}$

$\xi - 1 = \alpha \frac{\Delta t}{(\Delta x)^2} (2\cos(k\Delta x) - 2)$
$\xi = 1 + 2\alpha \frac{\Delta t}{(\Delta x)^2} (\cos(k\Delta x) - 1)$

Let $\mu = \alpha \frac{\Delta t}{(\Delta x)^2}$. This is the Courant number for the heat equation.
$\xi = 1 + 2\mu (\cos(k\Delta x) - 1)$

For stability, we need $|\xi| \le 1$.
We know that $-1 \le \cos(k\Delta x) \le 1$.
The term $(\cos(k\Delta x) - 1)$ ranges from $-2$ to $0$.

So, $\xi$ ranges from $1 + 2\mu(-2) = 1 - 4\mu$ to $1 + 2\mu(0) = 1$.

For $|\xi| \le 1$, we need:
$-1 \le 1 + 2\mu (\cos(k\Delta x) - 1) \le 1$

The right inequality $1 + 2\mu (\cos(k\Delta x) - 1) \le 1$ is always satisfied since $\cos(k\Delta x) - 1 \le 0$ and $\mu > 0$.

The left inequality:
$-1 \le 1 + 2\mu (\cos(k\Delta x) - 1)$
$-2 \le 2\mu (\cos(k\Delta x) - 1)$
$-1 \le \mu (\cos(k\Delta x) - 1)$

Since $\cos(k\Delta x) - 1$ is always negative or zero, we can rewrite this as:
$1 \ge -\mu (\cos(k\Delta x) - 1)$
$1 \ge \mu (1 - \cos(k\Delta x))$

The maximum value of $1 - \cos(k\Delta x)$ is $2$ (when $\cos(k\Delta x) = -1$).
So, for stability, we need $1 \ge \mu(2)$.
$1 \ge 2\mu$
$\mu \le \frac{1}{2}$

Therefore, for the explicit forward difference scheme of the heat equation, the stability condition is:
$\alpha \frac{\Delta t}{(\Delta x)^2} \le \frac{1}{2}$

This means that for a fixed spatial grid size $\Delta x$, the time step $\Delta t$ must be small enough. If we halve $\Delta x$, we need to reduce $\Delta t$ by a factor of $4$ to maintain stability. This is a significant limitation of the explicit method.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Explains the von Neumann stability analysis and its application to various schemes.
*   **Gupta (1995):** Details the derivation of stability criteria for parabolic and hyperbolic PDEs.
*   **Jain, Iyengar & Jain:** Provides a comprehensive treatment of stability analysis, including the von Neumann method and its limitations.

#### 4.3. Implicit Methods and Stability

Implicit methods, such as the Crank-Nicolson method or the fully implicit backward difference method, often have better stability properties. They involve solving a system of linear equations at each time step.

**Example: Fully Implicit Backward Difference for Heat Equation**

The finite difference equation is:
$\frac{u_{i}^{j+1} - u_{i}^{j}}{\Delta t} = \alpha \frac{u_{i+1}^{j+1} - 2u_{i}^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

Applying von Neumann stability analysis to the error equation (which has the same form as the original finite difference equation):
$\frac{\xi - 1}{\Delta t} = \alpha \frac{\xi e^{ik\Delta x} - 2\xi + \xi e^{-ik\Delta x}}{(\Delta x)^2}$

$\frac{\xi - 1}{\Delta t} = \alpha \frac{\xi (2\cos(k\Delta x) - 2)}{(\Delta x)^2}$

$\xi - 1 = \alpha \Delta t \frac{\xi (2\cos(k\Delta x) - 2)}{(\Delta x)^2}$
$\xi - 1 = \xi (2\mu (\cos(k\Delta x) - 1))$
$\xi - \xi (2\mu (\cos(k\Delta x) - 1)) = 1$
$\xi (1 - 2\mu (\cos(k\Delta x) - 1)) = 1$
$\xi = \frac{1}{1 - 2\mu (\cos(k\Delta x) - 1)}$
$\xi = \frac{1}{1 + 2\mu (1 - \cos(k\Delta x))}$

For stability, we need $|\xi| \le 1$.
Since $1 - \cos(k\Delta x) \ge 0$, the denominator $1 + 2\mu (1 - \cos(k\Delta x)) \ge 1$.
Therefore, $0 < \xi \le 1$.
The condition $|\xi| \le 1$ is always satisfied for any $\mu$ (and thus any $\Delta t / (\Delta x)^2$ ratio).

**Conclusion for Implicit Method:** The fully implicit backward difference method for the heat equation is **unconditionally stable**. This means we can choose any time step $\Delta t$ relative to $\Delta x$ without causing instability. However, it requires solving a system of equations at each time step, which can be computationally more expensive per step than explicit methods.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Contrasts the stability of explicit and implicit methods.
*   **Balagurusamy (2017):** Discusses implicit schemes and their superior stability characteristics.

#### 4.4. Other Stability Analysis Methods

*   **Matrix Method:** For systems of equations, stability can be analyzed by examining the eigenvalues of the amplification matrix.
*   **Energy Methods:** For certain types of PDEs, stability can be shown by demonstrating that the "energy" of the error remains bounded.

### 5. Relationship between Convergence, Stability, and Truncation Error

The Lax Equivalence Theorem highlights the crucial interplay between these concepts for linear problems.

*   **Consistency + Stability => Convergence**
*   **Consistency + Convergence => Stability**

The order of accuracy of the truncation error also influences convergence. A method with a truncation error of order $O((\Delta x)^p + (\Delta t)^q)$ is generally more convergent than one with a lower order of truncation error, provided it is stable.

**Explicit Methods:**
*   Often easier to implement.
*   May have restrictive stability conditions (e.g., Courant-Friedrichs-Lewy or CFL condition for hyperbolic equations).

**Implicit Methods:**
*   Generally more stable (often unconditionally stable).
*   Require solving a system of equations at each time step, making them computationally more expensive per step.

**Trade-offs:**

*   **Computational Cost:** Explicit methods might be faster per time step, but may require many small time steps to satisfy stability, leading to a higher overall computational cost. Implicit methods are slower per time step but can use larger time steps.
*   **Implementation Complexity:** Explicit methods are usually simpler to code. Implicit methods require matrix solvers.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Emphasizes the balance between accuracy, stability, and computational effort.
*   **Jain, Iyengar & Jain:** Provides a deep dive into the theoretical underpinnings and practical implications of these relationships.

### 6. The Courant-Friedrichs-Lewy (CFL) Condition

The CFL condition is a necessary condition for the convergence of hyperbolic PDEs. It states that the domain of dependence of the numerical scheme must contain the domain of dependence of the analytical solution.

For a 1D hyperbolic equation $\frac{\partial u}{\partial t} + c \frac{\partial u}{\partial x} = 0$, solved using an explicit forward difference scheme (upwind scheme):
$\frac{u_{i}^{j+1} - u_{i}^{j}}{\Delta t} + c \frac{u_{i}^{j} - u_{i-1}^{j}}{\Delta x} = 0$

The domain of dependence of the analytical solution at $(x_i, t_{j+1})$ is the characteristic line passing through this point.
The domain of dependence of the numerical scheme at $(x_i, t_{j+1})$ is the set of grid points $(x_k, t_j)$ that influence $u_i^{j+1}$.

For convergence, the characteristic line from $(x_i, t_{j+1})$ must intersect the previous time level $t_j$ at a point $(x_i - c\Delta t, t_j)$ which is within the computational stencil's influence at $t_j$. The stencil for the upwind scheme uses points $x_{i-1}$ and $x_i$.

So, we require $x_{i-1} \le x_i - c\Delta t \le x_i$.
This implies $x_i - \Delta x \le x_i - c\Delta t$.
And $x_i - c\Delta t \le x_i$.

From $x_i - c\Delta t \le x_i$, we get $-c\Delta t \le 0$. If $c>0$, this means $\Delta t \ge 0$. If $c<0$, this means $\Delta t \le 0$. So $c\Delta t \ge 0$ if $c>0$ and $c\Delta t \le 0$ if $c<0$.
In general, $|c|\Delta t \ge 0$.

From $x_i - \Delta x \le x_i - c\Delta t$, we get $-\Delta x \le -c\Delta t$, which means $\Delta x \ge c\Delta t$ for $c>0$.
If $c<0$, then $-\Delta x \le -c\Delta t$ becomes $\Delta x \ge -c\Delta t = |c|\Delta t$.
So, generally, $\Delta x \ge |c|\Delta t$, or $\frac{|c|\Delta t}{\Delta x} \le 1$.

The CFL number is defined as $C = \frac{|c|\Delta t}{\Delta x}$.
The CFL condition for this 1D hyperbolic equation is $C \le 1$.

**Generalization:** For higher dimensions or more complex equations, the CFL condition takes more complex forms, often involving the ratio of the speed of propagation to the grid spacing in each direction and the time step.

**Important Note:** The CFL condition is a *necessary* condition for convergence for hyperbolic problems, but it is not always *sufficient* (especially for non-linear equations or less stable schemes). However, it is crucial for ensuring stability of explicit schemes.

**Textbook References:**

*   **Chapra & Canale (6th Ed., 2010):** Explains the CFL condition in detail for hyperbolic PDEs.
*   **Gupta (1995):** Provides specific CFL conditions for various hyperbolic problems and schemes.
*   **Balagurusamy (2017):** Presents simplified examples to illustrate the CFL condition.

### 7. Practical Considerations and Best Practices

*   **Choosing the Right Method:** Explicit vs. Implicit depends on the PDE, desired accuracy, and computational resources.
*   **Grid Refinement:** Always check if reducing the grid spacing improves the solution and if it converges.
*   **Time Step Selection:** For explicit methods, adhere to the stability criteria (e.g., CFL condition). For implicit methods, time step choice is more about accuracy than stability.
*   **Verification:** Compare numerical solutions with analytical solutions (if available) or known benchmarks.
*   **Sensitivity Analysis:** Test how sensitive the solution is to changes in grid spacing and time step.
*   **Higher-Order Schemes:** Using higher-order accurate finite difference schemes can improve accuracy for a given grid size but might also have more complex stability criteria.

**Course Outcome Alignment:**

*   **CO4:** Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3). Understanding these practical aspects allows for the effective and reliable execution of numerical procedures.

### 8. Practice Questions and Exercises

**Question 1:**
Consider the 1D heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$.
a) State the explicit finite difference scheme (forward in time, central in space).
b) Perform a von Neumann stability analysis for this scheme and derive the stability condition.
c) If $\alpha = 0.01$ and $\Delta x = 0.1$, what is the maximum allowable time step $\Delta t$ for stability?

**Answer 1:**
a) $\frac{u_{i}^{j+1} - u_{i}^{j}}{\Delta t} = \alpha \frac{u_{i+1}^{j} - 2u_{i}^{j} + u_{i-1}^{j}}{(\Delta x)^2}$
b) Stability condition is $\alpha \frac{\Delta t}{(\Delta x)^2} \le \frac{1}{2}$.
c) With $\alpha = 0.01$ and $\Delta x = 0.1$:
   $0.01 \frac{\Delta t}{(0.1)^2} \le 0.5$
   $0.01 \frac{\Delta t}{0.01} \le 0.5$
   $\Delta t \le 0.5$
   The maximum allowable time step is $0.5$.

**Question 2:**
Explain the Lax Equivalence Theorem in your own words. What are the two conditions required for a numerical method to be convergent based on this theorem?

**Answer 2:**
The Lax Equivalence Theorem states that for a linear PDE, if a finite-difference scheme is consistent with the PDE and is stable, then it is guaranteed to be convergent. Conversely, if it's consistent and convergent, it must be stable. The two conditions are:
1.  **Consistency:** The numerical scheme must accurately approximate the original PDE as the grid spacing and time step approach zero.
2.  **Stability:** The numerical scheme must not amplify errors as the computation proceeds.

**Question 3:**
Consider the 1D wave equation $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$. Write down the central difference approximation for both the temporal and spatial derivatives. Derive the CFL condition for this scheme.

**Answer 3:**
The wave equation is: $\frac{\partial^2 u}{\partial t^2} - c^2 \frac{\partial^2 u}{\partial x^2} = 0$

Central difference for $\frac{\partial^2 u}{\partial t^2}$: $\frac{u_{i}^{j+1} - 2u_{i}^{j} + u_{i}^{j-1}}{(\Delta t)^2}$
Central difference for $\frac{\partial^2 u}{\partial x^2}$: $\frac{u_{i+1}^{j} - 2u_{i}^{j} + u_{i-1}^{j}}{(\Delta x)^2}$

The finite difference scheme is:
$\frac{u_{i}^{j+1} - 2u_{i}^{j} + u_{i}^{j-1}}{(\Delta t)^2} - c^2 \frac{u_{i+1}^{j} - 2u_{i}^{j} + u_{i-1}^{j}}{(\Delta x)^2} = 0$

Let $u_i^j = \xi^j e^{ikx_i}$. For the wave equation, we consider the ratio of error at step $j+1$ to step $j-1$. Let $\xi = e^{i\beta}$ where $\beta = k\Delta x$.
The equation in terms of $\xi$ (for error $e_i^j = \xi^j e^{ikx_i}$):
$\frac{\xi^{j+1} e^{ikx_i} - 2\xi^j e^{ikx_i} + \xi^{j-1} e^{ikx_i}}{(\Delta t)^2} - c^2 \frac{\xi^j e^{ik(x_i+\Delta x)} - 2\xi^j e^{ikx_i} + \xi^j e^{ik(x_i-\Delta x)}}{(\Delta x)^2} = 0$

Divide by $\xi^{j-1} e^{ikx_i}$:
$\frac{\xi^2 - 2\xi + 1}{(\Delta t)^2} - c^2 \frac{\xi e^{ik\Delta x} - 2\xi + \xi e^{-ik\Delta x}}{(\Delta x)^2} = 0$
$\frac{(\xi - 1)^2}{(\Delta t)^2} - c^2 \frac{\xi(2\cos(k\Delta x) - 2)}{(\Delta x)^2} = 0$

Let $r = \frac{c\Delta t}{\Delta x}$ (Courant number). Let $\theta = k\Delta x$.
$\frac{(\xi - 1)^2}{(\Delta t)^2} = c^2 \frac{\xi(2 - 2\cos\theta)}{(\Delta x)^2}$
$(\xi - 1)^2 = (\Delta t)^2 \frac{c^2}{(\Delta x)^2} \xi (2 - 2\cos\theta)$
$(\xi - 1)^2 = r^2 \xi (2 - 2\cos\theta)$

$\xi^2 - 2\xi + 1 = 2r^2 \xi (1 - \cos\theta)$
$\xi^2 - 2\xi(1 + r^2(1 - \cos\theta)) + 1 = 0$

This is a quadratic equation for $\xi$. For stability, the roots of this quadratic must have magnitude less than or equal to 1. For this specific scheme, the roots are:
$\xi = \frac{2(1 + r^2(1 - \cos\theta)) \pm \sqrt{4(1 + r^2(1 - \cos\theta))^2 - 4}}{2}$
$\xi = (1 + r^2(1 - \cos\theta)) \pm \sqrt{(1 + r^2(1 - \cos\theta))^2 - 1}$

For stability, we require $|\xi| \le 1$. The roots of this quadratic equation are $\xi$ and $1/\xi$. For $|\xi| \le 1$, we must have $|\xi| = 1$. This occurs when the term under the square root is negative, meaning $1 + r^2(1 - \cos\theta) < 1$. However, $1 - \cos\theta \ge 0$ and $r^2 > 0$, so $1 + r^2(1 - \cos\theta) \ge 1$.
The stability condition simplifies to requiring that the discriminant is non-positive, which leads to $r^2(1-\cos\theta) \le 1$.
The maximum value of $1 - \cos\theta$ is $2$.
So, $r^2(2) \le 1$, which means $r^2 \le 1/2$.
$r \le \frac{1}{\sqrt{2}}$

The CFL condition for the 1D wave equation using the central difference scheme is $C = \frac{c\Delta t}{\Delta x} \le \frac{1}{\sqrt{2}}$.

### 9. Summary of Key Points

*   **Convergence:** Numerical solution approaches the true solution as step sizes go to zero.
*   **Stability:** Errors do not grow unboundedly during computation.
*   **Consistency:** The numerical scheme approximates the PDE accurately as step sizes decrease.
*   **Lax Equivalence Theorem:** For linear PDEs, Consistency + Stability <=> Convergence.
*   **Von Neumann Analysis:** A method to determine stability by examining the amplification factor of Fourier modes.
*   **Explicit Methods:** Simpler, but often have restrictive stability conditions (e.g., CFL condition).
*   **Implicit Methods:** More stable (often unconditionally), but computationally more expensive per time step.
*   **CFL Condition:** A necessary condition for stability/convergence of explicit schemes for hyperbolic PDEs, relating speed of propagation, grid size, and time step.

This comprehensive set of notes aims to provide a solid understanding of convergence and stability in the numerical solution of PDEs, equipping you to choose, implement, and analyze numerical methods effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
