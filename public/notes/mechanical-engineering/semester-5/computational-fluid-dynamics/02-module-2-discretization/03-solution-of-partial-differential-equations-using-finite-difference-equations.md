---
title: "Solution of partial differential equations using finite difference equations."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 2: Discretization"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463430"
status: "completed"
scrapedAt: "2026-05-20T17:58:11.494Z"
---
# COMPUTATIONAL FLUID DYNAMICS (CFD)

## Module 2: Discretization

## Topic: Solution of Partial Differential Equations (PDEs) using Finite Difference Equations (FDEs)

---

### **1. Introduction to Discretization and Finite Difference Method**

**1.1. What is Discretization?**

*   Discretization is the process of converting continuous partial differential equations (PDEs) that describe physical phenomena (like fluid flow and heat transfer) into a system of algebraic equations that can be solved by a computer.
*   This involves approximating the continuous domain into a discrete set of points or cells and approximating the differential operators using algebraic expressions.

**1.2. The Need for Discretization in CFD**

*   Analytical solutions to PDEs are only possible for very simple cases.
*   Real-world fluid flow and heat transfer problems are often complex and require numerical solutions.
*   Computers operate on discrete data, making numerical methods essential.

**1.3. The Finite Difference Method (FDM)**

*   FDM is one of the fundamental discretization techniques used in CFD.
*   It approximates derivatives in PDEs by using Taylor series expansions of the dependent variable at discrete grid points.
*   FDM is typically applied to problems with regular, structured grids (e.g., Cartesian or rectilinear).

**Key Concept:** Taylor Series Expansion

*   The Taylor series expansion of a function $f(x)$ around a point $x_0$ is given by:
    $f(x) = f(x_0) + (x-x_0)f'(x_0) + \frac{(x-x_0)^2}{2!}f''(x_0) + \frac{(x-x_0)^3}{3!}f'''(x_0) + ...$
*   This expansion is the foundation for approximating derivatives in FDM.

---

### **2. Finite Difference Approximations for Derivatives**

**2.1. One-Dimensional Derivatives**

Consider a function $f(x)$ defined on a one-dimensional grid with equally spaced points $x_i = x_0 + i\Delta x$, where $\Delta x$ is the grid spacing.

*   **First Derivative:**
    *   **Forward Difference:** Approximates $f'(x_i)$ using information at $x_i$ and $x_{i+1}$.
        $f(x_{i+1}) = f(x_i) + \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) + ...$
        Rearranging for $f'(x_i)$:
        $f'(x_i) \approx \frac{f(x_{i+1}) - f(x_i)}{\Delta x}$
        *Error Order:* $O(\Delta x)$ - First-order accurate.

    *   **Backward Difference:** Approximates $f'(x_i)$ using information at $x_i$ and $x_{i-1}$.
        $f(x_i) = f(x_{i-1}) + \Delta x f'(x_{i-1}) + \frac{(\Delta x)^2}{2!}f''(x_{i-1}) + ...$
        Let $x_{i-1} = x_i - \Delta x$. Then:
        $f(x_i) = f(x_i - \Delta x) + \Delta x f'(x_i - \Delta x) + \frac{(\Delta x)^2}{2!}f''(x_i - \Delta x) + ...$
        This isn't directly giving $f'(x_i)$. Let's expand $f(x_i)$ in terms of $x_{i-1}$:
        $f(x_i) = f(x_{i-1}) + \Delta x f'(x_{i-1}) + \frac{(\Delta x)^2}{2!}f''(x_{i-1}) + ...$
        Now expand $f(x_i)$ using Taylor expansion around $x_{i-1}$:
        $f(x_i) = f(x_{i-1}) + (x_i - x_{i-1})f'(x_{i-1}) + \frac{(x_i - x_{i-1})^2}{2!}f''(x_{i-1}) + ...$
        $f(x_i) = f(x_{i-1}) + \Delta x f'(x_{i-1}) + \frac{(\Delta x)^2}{2!}f''(x_{i-1}) + ...$

        Let's try expanding $f(x_i)$ around $x_{i-1}$:
        $f(x_i) = f(x_{i-1}) + \Delta x f'(x_{i-1}) + \frac{(\Delta x)^2}{2!}f''(x_{i-1}) + ...$
        This doesn't directly give $f'(x_{i-1})$ in terms of $f(x_i)$ and $f(x_{i-1})$.

        Let's expand $f(x_{i-1})$ around $x_i$:
        $f(x_{i-1}) = f(x_i) + (x_{i-1} - x_i)f'(x_i) + \frac{(x_{i-1} - x_i)^2}{2!}f''(x_i) + ...$
        $f(x_{i-1}) = f(x_i) - \Delta x f'(x_i) + \frac{(-\Delta x)^2}{2!}f''(x_i) + ...$
        $f(x_{i-1}) = f(x_i) - \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) + ...$
        Rearranging for $f'(x_i)$:
        $f'(x_i) \approx \frac{f(x_i) - f(x_{i-1})}{\Delta x}$
        *Error Order:* $O(\Delta x)$ - First-order accurate.

    *   **Central Difference:** Approximates $f'(x_i)$ using information at $x_{i-1}$ and $x_{i+1}$.
        Expand $f(x_{i+1})$ around $x_i$:
        $f(x_{i+1}) = f(x_i) + \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) + \frac{(\Delta x)^3}{3!}f'''(x_i) + ...$ (1)
        Expand $f(x_{i-1})$ around $x_i$:
        $f(x_{i-1}) = f(x_i) + (x_{i-1} - x_i)f'(x_i) + \frac{(x_{i-1} - x_i)^2}{2!}f''(x_i) + \frac{(x_{i-1} - x_i)^3}{3!}f'''(x_i) + ...$
        $f(x_{i-1}) = f(x_i) - \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) - \frac{(\Delta x)^3}{3!}f'''(x_i) + ...$ (2)
        Subtract (2) from (1):
        $f(x_{i+1}) - f(x_{i-1}) = 2\Delta x f'(x_i) + 2\frac{(\Delta x)^3}{3!}f'''(x_i) + ...$
        Rearranging for $f'(x_i)$:
        $f'(x_i) \approx \frac{f(x_{i+1}) - f(x_{i-1})}{2\Delta x}$
        *Error Order:* $O(\Delta x^2)$ - Second-order accurate. This is generally preferred for its higher accuracy.

*   **Second Derivative:**
    *   **Central Difference:** Approximates $f''(x_i)$ using information at $x_{i-1}$, $x_i$, and $x_{i+1}$.
        Add (1) and (2):
        $f(x_{i+1}) + f(x_{i-1}) = 2f(x_i) + 2\frac{(\Delta x)^2}{2!}f''(x_i) + 2\frac{(\Delta x)^4}{4!}f^{(4)}(x_i) + ...$
        $f(x_{i+1}) + f(x_{i-1}) = 2f(x_i) + (\Delta x)^2 f''(x_i) + \frac{(\Delta x)^4}{12}f^{(4)}(x_i) + ...$
        Rearranging for $f''(x_i)$:
        $f''(x_i) \approx \frac{f(x_{i+1}) - 2f(x_i) + f(x_{i-1})}{(\Delta x)^2}$
        *Error Order:* $O(\Delta x^2)$ - Second-order accurate.

**2.2. Two-Dimensional Derivatives (for a function $f(x, y)$)**

Consider a 2D grid with points $(x_i, y_j)$, where $x_i = x_0 + i\Delta x$ and $y_j = y_0 + j\Delta y$.

*   **Partial Derivatives:**
    *   **First Partial Derivative w.r.t. x:**
        *   Forward Difference: $\frac{\partial f}{\partial x} \bigg|_{i,j} \approx \frac{f_{i+1,j} - f_{i,j}}{\Delta x}$
        *   Backward Difference: $\frac{\partial f}{\partial x} \bigg|_{i,j} \approx \frac{f_{i,j} - f_{i-1,j}}{\Delta x}$
        *   Central Difference: $\frac{\partial f}{\partial x} \bigg|_{i,j} \approx \frac{f_{i+1,j} - f_{i-1,j}}{2\Delta x}$ (Second-order accurate)

    *   **First Partial Derivative w.r.t. y:**
        *   Forward Difference: $\frac{\partial f}{\partial y} \bigg|_{i,j} \approx \frac{f_{i,j+1} - f_{i,j}}{\Delta y}$
        *   Backward Difference: $\frac{\partial f}{\partial y} \bigg|_{i,j} \approx \frac{f_{i,j} - f_{i,j-1}}{\Delta y}$
        *   Central Difference: $\frac{\partial f}{\partial y} \bigg|_{i,j} \approx \frac{f_{i,j+1} - f_{i,j-1}}{2\Delta y}$ (Second-order accurate)

    *   **Second Partial Derivative w.r.t. x:**
        *   Central Difference: $\frac{\partial^2 f}{\partial x^2} \bigg|_{i,j} \approx \frac{f_{i+1,j} - 2f_{i,j} + f_{i-1,j}}{(\Delta x)^2}$ (Second-order accurate)

    *   **Second Partial Derivative w.r.t. y:**
        *   Central Difference: $\frac{\partial^2 f}{\partial y^2} \bigg|_{i,j} \approx \frac{f_{i,j+1} - 2f_{i,j} + f_{i,j-1}}{(\Delta y)^2}$ (Second-order accurate)

    *   **Mixed Partial Derivative:**
        *   $\frac{\partial^2 f}{\partial x \partial y} \bigg|_{i,j} \approx \frac{f_{i+1,j+1} - f_{i+1,j-1} - f_{i-1,j+1} + f_{i-1,j-1}}{4\Delta x \Delta y}$ (Second-order accurate)

**Important Point:** The choice of finite difference scheme (forward, backward, central) impacts the accuracy and stability of the numerical solution. Central difference schemes are generally preferred for their higher accuracy when appropriate.

---

### **3. Discretization of Simple PDEs**

We will now apply these finite difference approximations to discretize common PDEs encountered in fluid mechanics and heat transfer.

**3.1. One-Dimensional Steady-State Heat Conduction (Poisson Equation)**

Consider the steady-state heat conduction equation in one dimension:
$\frac{d^2T}{dx^2} + q''' = 0$, where $T$ is temperature and $q'''$ is a heat source term.

*   **Domain:** $0 \le x \le L$.
*   **Discretization:** Divide the domain into $N$ intervals, resulting in $N+1$ grid points $x_i$, where $x_i = i\Delta x$ and $\Delta x = L/N$.
*   **Applying FDM:** Replace the second derivative with its central difference approximation:
    $\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2} + q'''_i = 0$
*   **Rearranging:**
    $T_{i+1} - 2T_i + T_{i-1} = -q'''_i (\Delta x)^2$
*   This equation holds for all interior grid points ($i = 1, 2, ..., N-1$).
*   For the boundary points ($i=0$ and $i=N$), we use the specified boundary conditions (e.g., Dirichlet: $T_0 = T_{inlet}$, $T_N = T_{outlet}$; or Neumann: $\frac{dT}{dx}|_0 = G_0$).
*   This process results in a system of linear algebraic equations that can be solved for the unknown temperatures $T_i$ at each grid point.

**Example 1: Discretize $\frac{d^2T}{dx^2} = 0$ with boundary conditions $T(0)=100^\circ C$ and $T(1)=0^\circ C$.**

*   Discretized equation: $\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2} = 0$
*   Simplified: $T_{i+1} - 2T_i + T_{i-1} = 0$
*   Boundary conditions: $T_0 = 100$, $T_N = 0$.
*   For $N=3$ intervals, $\Delta x = 1/3$. Grid points are $x_0=0, x_1=1/3, x_2=2/3, x_3=1$.
    *   For $i=1$: $T_2 - 2T_1 + T_0 = 0 \implies T_2 - 2T_1 + 100 = 0$
    *   For $i=2$: $T_3 - 2T_2 + T_1 = 0 \implies 0 - 2T_2 + T_1 = 0 \implies T_1 = 2T_2$
*   Substitute $T_1 = 2T_2$ into the first equation:
    $T_2 - 2(2T_2) + 100 = 0 \implies T_2 - 4T_2 + 100 = 0 \implies -3T_2 = -100 \implies T_2 = 100/3$
*   Then $T_1 = 2T_2 = 2(100/3) = 200/3$.
*   The temperatures are: $T_0=100$, $T_1=200/3 \approx 66.67$, $T_2=100/3 \approx 33.33$, $T_3=0$.

**3.2. One-Dimensional Transient Heat Conduction (Parabolic PDE)**

Consider the transient heat conduction equation in one dimension:
$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, where $\alpha$ is the thermal diffusivity.

*   **Domain:** $0 \le x \le L$, $t \ge 0$.
*   **Discretization:**
    *   **Spatial:** Use central difference for the second spatial derivative: $\frac{\partial^2 T}{\partial x^2} \bigg|_{i} \approx \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$. Here, $n$ denotes the time step.
    *   **Temporal:**
        *   **Explicit (Forward Euler):** Approximate the time derivative using forward difference: $\frac{\partial T}{\partial t} \bigg|_{i} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$.
        *   **Implicit (Backward Euler):** Approximate the time derivative using backward difference: $\frac{\partial T}{\partial t} \bigg|_{i} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$.

*   **Discretized Equation (Explicit Scheme):**
    $\frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$
    $T_{i}^{n+1} = T_{i}^{n} + \alpha \frac{\Delta t}{(\Delta x)^2} (T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n})$
    Let $\beta = \alpha \frac{\Delta t}{(\Delta x)^2}$.
    $T_{i}^{n+1} = T_{i}^{n} + \beta (T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n})$
    $T_{i}^{n+1} = (1 - 2\beta)T_{i}^{n} + \beta T_{i+1}^{n} + \beta T_{i-1}^{n}$
    *   **Accuracy:** First-order in time, second-order in space.
    *   **Stability:** The explicit scheme is conditionally stable. For stability, the Courant-Friedrichs-Lewy (CFL) condition must be met: $\beta \le 0.5$. This means $\Delta t$ must be small relative to $(\Delta x)^2$.

*   **Discretized Equation (Implicit Scheme):**
    $\frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2}$
    $T_{i}^{n+1} - T_{i}^{n} = \beta (T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1})$
    $T_{i}^{n+1} (1 + 2\beta) - \beta T_{i+1}^{n+1} - \beta T_{i-1}^{n+1} = T_{i}^{n}$
    *   **Accuracy:** First-order in time, second-order in space.
    *   **Stability:** Unconditionally stable, meaning any $\Delta t$ can be used without stability concerns. However, larger $\Delta t$ values might reduce accuracy.
    *   **Solution:** This scheme results in a system of linear equations for the unknown temperatures at the next time step ($T_i^{n+1}$). This system must be solved at each time step, which is computationally more expensive than the explicit scheme per time step, but it allows for larger time steps.

**Reference (Patankar, 2017):** Patankar extensively discusses the discretization of various terms, including diffusion and transient terms, and highlights the trade-offs between explicit and implicit schemes in terms of stability and computational effort.

**3.3. One-Dimensional Linear Convection (Hyperbolic PDE)**

Consider the 1D linear convection equation:
$\frac{\partial \phi}{\partial t} + u \frac{\partial \phi}{\partial x} = 0$, where $\phi$ is a scalar property (e.g., concentration, temperature) and $u$ is a constant velocity.

*   **Discretization of the Convection Term ($u \frac{\partial \phi}{\partial x}$):** This term is critical and requires careful discretization.
    *   **Central Difference:** $u \frac{\phi_{i+1}^n - \phi_{i-1}^n}{2\Delta x}$
        *   **Accuracy:** Second-order accurate.
        *   **Problem:** Can lead to oscillations and numerical diffusion if the grid is too coarse or the flow is highly convective. It doesn't inherently carry the "upwind" information.
    *   **Upwind Difference (First-order):** Based on the direction of flow. If $u > 0$, the property $\phi$ at $x_i$ at the next time step is influenced by the values at $x_i$ and $x_{i-1}$.
        $u \frac{\phi_i^n - \phi_{i-1}^n}{\Delta x}$
        *   **Accuracy:** First-order accurate.
        *   **Advantage:** Artificially dissipative, which helps to damp oscillations and prevent instability in convective problems. It's inherently stable.
        *   **Disadvantage:** Introduces significant numerical diffusion, smearing out sharp gradients.
    *   **Higher-Order Upwind Schemes:** Schemes like the QUICK (Quadratic Upstream Interpolation for Convective Kinematics) scheme or Adams-Bashforth methods aim to achieve higher-order accuracy while retaining the stability of upwinding. These typically involve using more grid points in the stencil.

*   **Discretized Equation (Explicit Scheme with Upwind Difference):**
    $\frac{\phi_i^{n+1} - \phi_i^n}{\Delta t} + u \frac{\phi_i^n - \phi_{i-1}^n}{\Delta x} = 0$
    $\phi_i^{n+1} = \phi_i^n - u \frac{\Delta t}{\Delta x} (\phi_i^n - \phi_{i-1}^n)$
    Let $C = u \frac{\Delta t}{\Delta x}$ (Courant number).
    $\phi_i^{n+1} = \phi_i^n - C (\phi_i^n - \phi_{i-1}^n)$
    $\phi_i^{n+1} = (1-C)\phi_i^n + C\phi_{i-1}^n$
    *   **Stability:** Conditionally stable. CFL condition requires $|C| \le 1$.

**Example 2: Discretize $\frac{\partial \phi}{\partial t} + 2 \frac{\partial \phi}{\partial x} = 0$ using explicit upwind scheme with $\Delta x = 0.1$, $\Delta t = 0.01$.**

*   Courant number $C = u \frac{\Delta t}{\Delta x} = 2 \times \frac{0.01}{0.1} = 2 \times 0.1 = 0.2$.
*   Since $C = 0.2 \le 1$, the scheme is stable.
*   Discretized equation: $\phi_i^{n+1} = (1 - 0.2)\phi_i^n + 0.2\phi_{i-1}^n = 0.8\phi_i^n + 0.2\phi_{i-1}^n$.

**3.4. Two-Dimensional Steady-State Convection-Diffusion Equation**

Consider the 2D convection-diffusion equation:
$\rho u \frac{\partial \phi}{\partial x} + \rho v \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial x} \left( \Gamma \frac{\partial \phi}{\partial x} \right) + \frac{\partial}{\partial y} \left( \Gamma \frac{\partial \phi}{\partial y} \right) + S$
where $\phi$ is the dependent variable, $\rho$ is density, $u, v$ are velocity components, $\Gamma$ is the diffusion coefficient, and $S$ is a source term.

*   **Domain:** A 2D rectangular grid.
*   **Discretization:** A combination of approximations will be used.
    *   **Convection Terms:** Typically discretized using upwind schemes (for stability) or higher-order schemes.
        *   $\rho u \frac{\partial \phi}{\partial x} \approx \rho u \frac{\phi_{i,j} - \phi_{i-1,j}}{\Delta x}$ (assuming $u>0$)
        *   $\rho v \frac{\partial \phi}{\partial y} \approx \rho v \frac{\phi_{i,j} - \phi_{i,j-1}}{\Delta y}$ (assuming $v>0$)
    *   **Diffusion Terms:** Typically discretized using central differences.
        *   $\frac{\partial}{\partial x} \left( \Gamma \frac{\partial \phi}{\partial x} \right) \approx \frac{\Gamma_{e} \frac{\phi_{i+1,j} - \phi_{i,j}}{\Delta x} - \Gamma_{w} \frac{\phi_{i,j} - \phi_{i-1,j}}{\Delta x}}{\Delta x}$
        *   $\frac{\partial}{\partial y} \left( \Gamma \frac{\partial \phi}{\partial y} \right) \approx \frac{\Gamma_{n} \frac{\phi_{i,j+1} - \phi_{i,j}}{\Delta y} - \Gamma_{s} \frac{\phi_{i,j} - \phi_{i,j-1}}{\Delta y}}{\Delta y}$
        (where subscripts e, w, n, s refer to cell faces)
    *   **Source Term:** $S \approx S_{i,j}$

*   **Combined Discretized Equation (example for a control volume around $P_{i,j}$):**
    $(\rho u)_P \frac{\phi_E - \phi_P}{\Delta x} + (\rho v)_P \frac{\phi_N - \phi_P}{\Delta y} \approx \frac{\Gamma_E (\phi_{E} - \phi_P) - \Gamma_W (\phi_P - \phi_W)}{\Delta x^2} + \frac{\Gamma_N (\phi_{N} - \phi_P) - \Gamma_S (\phi_P - \phi_S)}{\Delta y^2} + S_P$
    (Using upwind for convection and central for diffusion for simplicity here, and cell-centered notation where P is the center, E is east neighbor, etc.)

    **Important Point:** For convection-diffusion problems, the choice of discretization for the convection term significantly impacts the solution. The "Peclet number" ($Pe = \frac{\rho |u| \Delta x}{\Gamma}$ for 1D) indicates the relative importance of convection to diffusion. For high Peclet numbers, convection dominates, and upwinding is usually necessary for stability.

**Reference (Anderson Jr., 2012):** Anderson Jr. provides detailed derivations and examples of discretizing various PDEs, including the diffusion and convection terms, and discusses the implications of different schemes (forward, backward, central differences) and their orders of accuracy. He also touches upon the concept of stability.

---

### **4. Solution of Discretized Equations**

Once the PDEs are discretized into a system of algebraic equations, these equations need to be solved.

**4.1. Types of Algebraic Systems**

*   **Linear Systems:** Arise from linear PDEs or linearized non-linear PDEs. These are of the form $A\mathbf{x} = \mathbf{b}$, where $A$ is a matrix, $\mathbf{x}$ is the vector of unknowns, and $\mathbf{b}$ is a known vector.
*   **Non-linear Systems:** Arise from non-linear PDEs. These may require iterative methods or linearization techniques.

**4.2. Solution Techniques**

*   **Direct Methods:**
    *   **Gaussian Elimination:** Solves $A\mathbf{x} = \mathbf{b}$ directly by transforming the matrix $A$ into an upper triangular form. Suitable for small systems.
    *   **Matrix Inversion:** Finding $A^{-1}$ and then $\mathbf{x} = A^{-1}\mathbf{b}$. Generally computationally expensive for large systems.
    *   **For banded matrices (common in FDM):** Specialized direct solvers exist that exploit the sparsity of the matrix.

*   **Iterative Methods:** Start with an initial guess for the solution and refine it iteratively until a convergence criterion is met. Generally preferred for large systems common in CFD.
    *   **Jacobi Method:**
        $x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \ne i} a_{ij} x_j^{(k)} \right)$
        Uses values from the previous iteration ($k$) to compute the new iteration ($k+1$).
    *   **Gauss-Seidel Method:**
        $x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} x_j^{(k+1)} - \sum_{j > i} a_{ij} x_j^{(k)} \right)$
        Uses newly computed values from the current iteration ($k+1$) as soon as they are available, leading to faster convergence than Jacobi.
    *   **Successive Over-Relaxation (SOR):** An acceleration of Gauss-Seidel.
    *   **Conjugate Gradient (CG) Method:** For symmetric positive-definite systems.
    *   **Bi-Conjugate Gradient (BiCG) and GMRES (Generalized Minimum Residual):** For non-symmetric systems.

**4.3. Handling Transient Problems (Time Marching)**

*   For time-dependent PDEs, the discretized algebraic equations are solved at each time step.
*   The solution at time $t^{n+1}$ depends on the solution at time $t^n$ (and possibly earlier times).
*   **Explicit schemes:** Calculate $T^{n+1}$ directly from known values at time $n$. Simpler but subject to stability restrictions.
*   **Implicit schemes:** Require solving a system of equations for $T^{n+1}$ at each time step. More complex per step but offer unconditional stability.

**Reference (Date, 2005):** Anil W. Date's book provides a good overview of both direct and iterative methods for solving the algebraic systems arising from discretization, with emphasis on their application in CFD.

---

### **5. Practice Questions and Answers**

**Question 1:**
Derive the central difference approximation for the first derivative $\frac{df}{dx}$ at point $x_i$. What is its order of accuracy?

**Answer 1:**
Using Taylor series expansions for $f(x_{i+1})$ and $f(x_{i-1})$ around $x_i$:
$f(x_{i+1}) = f(x_i) + \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) + \frac{(\Delta x)^3}{3!}f'''(x_i) + ...$
$f(x_{i-1}) = f(x_i) - \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!}f''(x_i) - \frac{(\Delta x)^3}{3!}f'''(x_i) + ...$
Subtracting the second from the first:
$f(x_{i+1}) - f(x_{i-1}) = 2\Delta x f'(x_i) + 2\frac{(\Delta x)^3}{3!}f'''(x_i) + ...$
Rearranging for $f'(x_i)$:
$f'(x_i) = \frac{f(x_{i+1}) - f(x_{i-1})}{2\Delta x} - \frac{(\Delta x)^2}{6}f'''(x_i) + ...$
The leading error term is proportional to $(\Delta x)^2$, so the approximation is **second-order accurate** ($O(\Delta x^2)$).

**Question 2:**
Discretize the 1D steady-state heat conduction equation $\frac{d^2T}{dx^2} = 0$ using the finite difference method. Consider a domain of length $L=1$ divided into 2 equal intervals. Assume boundary conditions $T(0)=50^\circ C$ and $T(1)=100^\circ C$.

**Answer 2:**
*   Domain: $L=1$.
*   Number of intervals: 2.
*   Grid points: $N=2$. $x_0=0, x_1=0.5, x_2=1$.
*   Grid spacing: $\Delta x = L/N = 1/2 = 0.5$.
*   Discretized equation: $\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2} = 0$
    $T_{i+1} - 2T_i + T_{i-1} = 0$
*   Boundary conditions: $T_0 = 50$, $T_2 = 100$.
*   For interior point $i=1$:
    $T_2 - 2T_1 + T_0 = 0$
    $100 - 2T_1 + 50 = 0$
    $150 - 2T_1 = 0$
    $2T_1 = 150$
    $T_1 = 75^\circ C$.
*   The solution is $T_0=50^\circ C$, $T_1=75^\circ C$, $T_2=100^\circ C$.

**Question 3:**
What is the stability condition for the explicit finite difference scheme for the 1D transient heat conduction equation?

**Answer 3:**
The discretized equation for the explicit scheme is:
$T_{i}^{n+1} = (1 - 2\beta)T_{i}^{n} + \beta T_{i+1}^{n} + \beta T_{i-1}^{n}$, where $\beta = \alpha \frac{\Delta t}{(\Delta x)^2}$.
The stability condition is $\beta \le 0.5$. This means $\alpha \frac{\Delta t}{(\Delta x)^2} \le 0.5$.

**Question 4:**
Consider the 1D linear convection equation $\frac{\partial \phi}{\partial t} + u \frac{\partial \phi}{\partial x} = 0$. If you discretize the spatial derivative using a first-order upwind scheme and the temporal derivative using forward Euler, what is the stability condition?

**Answer 4:**
The discretized equation is $\phi_i^{n+1} = (1-C)\phi_i^n + C\phi_{i-1}^n$, where $C = u \frac{\Delta t}{\Delta x}$ is the Courant number.
The stability condition for this scheme is $|C| \le 1$.

---

### **6. Important Points to Remember**

*   **Taylor Series is Key:** All finite difference approximations stem from Taylor series expansions.
*   **Accuracy vs. Complexity:** Central difference schemes are generally more accurate ($O(\Delta x^2)$) than forward/backward difference schemes ($O(\Delta x)$), but may have larger stencils.
*   **Stability:** Explicit schemes for time-dependent problems are often conditionally stable, requiring small time steps (CFL condition). Implicit schemes are usually unconditionally stable but computationally more demanding per time step.
*   **Convection Dominance:** For problems where convection is dominant (high Peclet numbers), upwind differencing or flux-limited schemes are crucial for stability, albeit at the cost of numerical diffusion.
*   **Grid Dependence:** The accuracy of FDM solutions depends on the grid spacing ($\Delta x, \Delta y, \Delta t$). Solutions should ideally be checked for grid convergence by refining the grid.
*   **Boundary Conditions:** Proper implementation of boundary conditions is as important as discretizing the governing equations.
*   **FDM Applicability:** FDM is best suited for problems with simple, regular geometries and structured grids. For complex geometries, Finite Volume Method (FVM) or Finite Element Method (FEM) are often preferred.

---

### **7. Alignment with Course Outcomes**

*   **CO1: To understand the governing equations of fluid flow and heat transfer. (K2)**
    *   This topic builds upon understanding the PDEs themselves (e.g., heat conduction, convection-diffusion) which are the starting point for discretization.
*   **CO2: To apply finite difference methods to simple partial differential equations (K3)**
    *   This is the core of the topic. We have demonstrated how to discretize and set up algebraic equations for simple 1D and 2D PDEs.
*   **CO3: To demonstrate the use of finite volume method for simple 1D/2D problems (K3)**
    *   While this module focuses on FDM, it provides the foundational understanding of converting continuous problems to discrete algebraic systems, which is also the goal of FVM. The principles of approximating derivatives are transferable.
*   **CO4: To understand different solution techniques for convection diffusion equation (K2)**
    *   We discussed the challenges of discretizing the convection term and the use of upwinding, which is a key technique for convection-diffusion problems. The stability and accuracy trade-offs are highlighted.
*   **CO5: To apply the knowledge of CFD to interpret the graphical results (K3)**
    *   Understanding discretization and the resulting algebraic equations is the first step towards obtaining numerical results, which are then visualized and interpreted. The choice of discretization scheme directly affects the quality of these results.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **8. References**

*   **Computational Fluid Dynamics by John D Anderson Jr (McGraw-Hill Book Company, 2012):** Provides a thorough introduction to the fundamental concepts of CFD, including detailed derivations of finite difference approximations and their application to various fluid dynamics equations. Chapters on discretization and numerical methods for PDEs are particularly relevant.
*   **Numerical Heat Transfer and Fluid Flow by S V Patankar, (McGraw-Hill, 2017):** A classic text that emphasizes the physical meaning behind the discretized equations and provides practical insights into handling different terms and schemes, especially the finite volume method. While focused on FVM, the discretization principles are well-explained.
*   **An Introduction to Computational Fluid Dynamics: The Finite Volume Method by H. Versteeg, W.Malalasekera (Pearson, 2nd, 2008):** While primarily on FVM, it offers valuable context on discretization in general and the challenges posed by convection-dominated flows, which is highly relevant to understanding the motivation behind different FDM schemes.
*   **Introduction to computational fluid dynamics by Anil W. Date (Cambridge University Press, 2005):** Discusses various numerical methods for solving PDEs, including FDM, and touches upon the methods for solving the resulting algebraic systems.
*   **Introductory methods to numerical analysis by S Sastry (PHI learing Private Ltd., 2012):** A good source for the mathematical foundations of numerical analysis, including Taylor series, finite differences, and methods for solving linear systems.
*   **Heat transfer by S P Venkatesh (Ane books Pvt Ltd, 2009):** Provides the physical context for the heat transfer equations that are often discretized using FDM.

---