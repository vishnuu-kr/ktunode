---
title: "Discretization error, truncation error, round off error."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 2: Discretization"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463431"
status: "completed"
scrapedAt: "2026-05-20T17:58:12.278Z"
---
# COMPUTATIONAL FLUID DYNAMICS - Module 2: Discretization

## Topic: Discretization Error, Truncation Error, Round-off Error

---

### **Introduction**

In Computational Fluid Dynamics (CFD), we transform continuous governing equations (Partial Differential Equations - PDEs) that describe fluid flow and heat transfer into a system of algebraic equations that can be solved by a computer. This process is called **discretization**. Discretization inherently introduces errors, which can significantly impact the accuracy and reliability of our CFD solutions. Understanding these errors is crucial for interpreting results and making informed decisions about numerical methods.

This module focuses on the types of errors that arise during the discretization process: **discretization error**, **truncation error**, and **round-off error**.

---

### **1. Discretization Error**

Discretization error is the overarching error introduced when a continuous problem is replaced by a discrete one. It represents the difference between the exact solution of the continuous problem and the exact solution of the discretized problem.

**Key Concepts:**

*   **Continuous Problem:** The original governing PDEs of fluid flow and heat transfer (e.g., Navier-Stokes equations, Energy equation) defined over continuous spatial and temporal domains.
*   **Discretized Problem:** The set of algebraic equations obtained after applying discretization techniques (like Finite Difference, Finite Volume, or Finite Element methods) to the continuous problem. These equations are solved at discrete points or cells within the computational domain.
*   **Mathematical Representation:**
    $E_{discretization} = u_{exact} - u_{discretized\_exact}$
    Where:
    *   $u_{exact}$ is the exact solution to the original continuous problem.
    *   $u_{discretized\_exact}$ is the exact solution to the *discretized* system of algebraic equations.

**Relationship to Other Errors:**

Discretization error is a broad term that encompasses both truncation error and, to some extent, can be influenced by round-off error propagation. However, it's most commonly understood as the error arising from approximating derivatives with algebraic expressions.

**Relevance to Learning Outcomes:**

*   **CO1 (Knowledge Level K2):** Understanding that discretization is necessary to solve governing equations computationally implies an awareness that this process introduces inaccuracies.
*   **CO3 (Knowledge Level K3 - Finite Volume Method):** When applying the Finite Volume Method, we approximate fluxes across control volume faces using values at cell centers or interpolated values. This approximation directly leads to discretization error.

---

### **2. Truncation Error**

Truncation error is a direct consequence of approximating continuous derivatives (found in the governing PDEs) with discrete algebraic expressions derived from Taylor series expansions.

**Key Concepts:**

*   **Taylor Series Expansion:** A fundamental tool used to approximate function values at nearby points using the function's value and its derivatives at a specific point.
    For a function $f(x)$, the Taylor series expansion around $x_0$ is:
    $f(x) = f(x_0) + (x-x_0)f'(x_0) + \frac{(x-x_0)^2}{2!}f''(x_0) + \frac{(x-x_0)^3}{3!}f'''(x_0) + \dots$
*   **Approximation of Derivatives:** Truncation error arises when we truncate this infinite series after a finite number of terms to represent a derivative.
*   **Finite Difference Schemes:** The methods used to approximate derivatives are called finite difference schemes. The accuracy of these schemes is determined by the order of truncation error.

**Types of Finite Difference Schemes and Truncation Error:**

Let's consider a one-dimensional problem and a function $u(x)$. We want to approximate the first derivative $du/dx$ at a point $x_i$. Let $x_{i+1} = x_i + \Delta x$ and $x_{i-1} = x_i - \Delta x$.

*   **Forward Difference (Approximation of $u'(x_i)$):**
    $u'(x_i) \approx \frac{u(x_{i+1}) - u(x_i)}{\Delta x}$
    Using Taylor series for $u(x_{i+1})$:
    $u(x_{i+1}) = u(x_i) + \Delta x u'(x_i) + \frac{(\Delta x)^2}{2!} u''(x_i) + \frac{(\Delta x)^3}{3!} u'''(\xi_1)$
    Substituting this into the forward difference formula:
    $\frac{u(x_{i+1}) - u(x_i)}{\Delta x} = \frac{1}{\Delta x} \left( \Delta x u'(x_i) + \frac{(\Delta x)^2}{2!} u''(x_i) + \dots \right)$
    $\frac{u(x_{i+1}) - u(x_i)}{\Delta x} = u'(x_i) + \frac{\Delta x}{2} u''(x_i) + O(\Delta x^2)$
    The **truncation error** for the forward difference scheme is $O(\Delta x)$, meaning it is proportional to the grid spacing.

*   **Backward Difference (Approximation of $u'(x_i)$):**
    $u'(x_i) \approx \frac{u(x_i) - u(x_{i-1})}{\Delta x}$
    Using Taylor series for $u(x_{i-1})$:
    $u(x_{i-1}) = u(x_i) - \Delta x u'(x_i) + \frac{(\Delta x)^2}{2!} u''(x_i) - \frac{(\Delta x)^3}{3!} u'''(\xi_2)$
    Substituting this into the backward difference formula:
    $\frac{u(x_i) - u(x_{i-1})}{\Delta x} = \frac{1}{\Delta x} \left( \Delta x u'(x_i) - \frac{(\Delta x)^2}{2!} u''(x_i) + \dots \right)$
    $\frac{u(x_i) - u(x_{i-1})}{\Delta x} = u'(x_i) - \frac{\Delta x}{2} u''(x_i) + O(\Delta x^2)$
    The **truncation error** for the backward difference scheme is $O(\Delta x)$.

*   **Central Difference (Approximation of $u'(x_i)$):**
    $u'(x_i) \approx \frac{u(x_{i+1}) - u(x_{i-1})}{2\Delta x}$
    Using Taylor series for $u(x_{i+1})$ and $u(x_{i-1})$:
    $u(x_{i+1}) = u(x_i) + \Delta x u'(x_i) + \frac{(\Delta x)^2}{2!} u''(x_i) + \frac{(\Delta x)^3}{3!} u'''(x_i) + \frac{(\Delta x)^4}{4!} u^{(4)}(\xi_3)$
    $u(x_{i-1}) = u(x_i) - \Delta x u'(x_i) + \frac{(\Delta x)^2}{2!} u''(x_i) - \frac{(\Delta x)^3}{3!} u'''(x_i) + \frac{(\Delta x)^4}{4!} u^{(4)}(\xi_4)$
    Subtracting $u(x_{i-1})$ from $u(x_{i+1})$:
    $u(x_{i+1}) - u(x_{i-1}) = 2 \Delta x u'(x_i) + 2 \frac{(\Delta x)^3}{3!} u'''(x_i) + \dots$
    Substituting into the central difference formula:
    $\frac{u(x_{i+1}) - u(x_{i-1})}{2\Delta x} = u'(x_i) + \frac{(\Delta x)^2}{6} u'''(x_i) + O(\Delta x^3)$
    The **truncation error** for the central difference scheme is $O(\Delta x^2)$, meaning it is more accurate than forward or backward differences for the same $\Delta x$.

*   **Approximation of Second Derivative ($u''(x_i)$) using Central Difference:**
    $u''(x_i) \approx \frac{u(x_{i+1}) - 2u(x_i) + u(x_{i-1})}{(\Delta x)^2}$
    Using Taylor series expansions for $u(x_{i+1})$ and $u(x_{i-1})$ and adding them:
    $u(x_{i+1}) + u(x_{i-1}) = 2u(x_i) + 2 \frac{(\Delta x)^2}{2!} u''(x_i) + 2 \frac{(\Delta x)^4}{4!} u^{(4)}(\xi_5)$
    Rearranging and dividing by $(\Delta x)^2$:
    $\frac{u(x_{i+1}) - 2u(x_i) + u(x_{i-1})}{(\Delta x)^2} = u''(x_i) + \frac{(\Delta x)^2}{12} u^{(4)}(\xi_5)$
    The **truncation error** for this central difference scheme for the second derivative is $O(\Delta x^2)$.

**Order of Accuracy:**

*   The "order of accuracy" of a finite difference scheme is the power of $\Delta x$ in the leading term of the truncation error.
*   A scheme with order $p$ means the truncation error is proportional to $(\Delta x)^p$.
*   Reducing $\Delta x$ by half for a second-order accurate scheme reduces the truncation error by a factor of $2^2 = 4$.

**Relevance to Learning Outcomes:**

*   **CO2 (Knowledge Level K3 - Finite Difference Methods):** This topic is the core of applying finite difference methods. Understanding how to derive these schemes and their associated truncation errors is essential.
*   **CO3 (Knowledge Level K3 - Finite Volume Method):** While the Finite Volume Method uses integration and flux approximations, the underlying principles of approximating derivatives (often indirectly) and their error terms are related. For example, approximating a diffusion term using central differencing for the gradient at a face leads to similar error characteristics.
*   **CO4 (Knowledge Level K2 - Convection-Diffusion Equation):** The convection-diffusion equation involves both first-order (convection) and second-order (diffusion) derivatives. The choice of discretization scheme (e.g., upwind for convection, central for diffusion) directly impacts the truncation error and solution stability.

**Important Points to Remember:**

*   **Truncation error is inherent in approximating derivatives.**
*   **Central difference schemes are generally more accurate than forward or backward difference schemes for the same grid spacing.**
*   **Higher-order schemes reduce truncation error more effectively when the grid is refined.**
*   **Truncation error decreases as the grid spacing ($\Delta x$) decreases.**

**Example from Textbooks:**

*   **Anderson Jr., Chapter 3 (Finite Difference Method):** This chapter extensively discusses Taylor series expansions to derive finite difference approximations for derivatives and analyzes their truncation error, classifying them as forward, backward, and central differences. It emphasizes how the order of accuracy relates to the grid size.
*   **Patankar, Chapter 2 (Finite Difference Method):** Patankar also covers Taylor series expansions for deriving finite difference forms of differential equations and discusses the concept of truncation error. He often uses a staggered grid, which can affect how these errors manifest.
*   **Versteeg & Malalasekera, Chapter 3 (Finite Difference Method):** This book details the derivation of finite difference approximations for first and second derivatives, explicitly showing the $O(\Delta x)$ and $O(\Delta x^2)$ terms for truncation error, linking it to the accuracy of the approximations.

---

### **3. Round-off Error**

Round-off error arises from the finite precision of computer arithmetic. Computers represent real numbers with a finite number of bits, leading to small errors when numbers are stored or manipulated.

**Key Concepts:**

*   **Finite Precision Arithmetic:** Computers use floating-point representation, which can only store a finite number of significant digits.
*   **Rounding:** When a calculation results in a number that cannot be exactly represented, it must be rounded to the nearest representable number. This introduces a small error.
*   **Accumulation of Round-off Error:** In a CFD simulation, millions or billions of calculations are performed. Even small round-off errors can accumulate over many operations, potentially leading to significant inaccuracies, especially in ill-conditioned systems.

**Factors Influencing Round-off Error:**

*   **Number of Operations:** More operations mean more chances for round-off error to occur and accumulate.
*   **Magnitude of Numbers:** Performing calculations with very large and very small numbers simultaneously can lead to catastrophic cancellation, where subtracting two nearly equal numbers results in a significant loss of precision.
*   **Algorithm/Scheme:** Some numerical algorithms are more susceptible to round-off error accumulation than others.
*   **Computer's Floating-Point Representation:** Single precision (32-bit) vs. Double precision (64-bit) floating-point numbers. Double precision offers higher accuracy but requires more memory and computational time.

**Example of Round-off Error:**

Consider the subtraction $1.000000000000001 - 1.000000000000000$. If a computer uses 15 significant digits for single precision, this might become $1.000000000000000 - 1.000000000000000 = 0$. The actual difference is $1 \times 10^{-15}$, which is lost.

Now consider a case where the truncation error is very small (e.g., using a very fine grid with a high-order scheme) but we are solving a system where intermediate values become very close. For instance, consider the central difference approximation for the first derivative:
$u'(x_i) \approx \frac{u(x_{i+1}) - u(x_{i-1})}{2\Delta x}$
If $u(x_{i+1})$ and $u(x_{i-1})$ are very close, their subtraction might lose significant digits due to round-off error, even if $\Delta x$ is very small.

**Relationship between Truncation Error and Round-off Error:**

There's an interesting interplay between truncation error and round-off error.

*   **As $\Delta x$ decreases (grid refinement), truncation error decreases.**
*   **However, as $\Delta x$ decreases, the number of operations to solve the discrete system typically increases, and we might encounter more subtractions of nearly equal numbers, potentially increasing round-off error accumulation.**

This leads to a point where further refinement of the grid beyond a certain limit might not improve the accuracy, and could even degrade it, because round-off error starts to dominate.

**Example Scenario:**

Imagine solving Laplace's equation $\nabla^2 u = 0$ on a very fine grid.
The discretized form using central differences might involve summing values from neighboring cells.
For a point $(i, j)$: $u_{i,j} \approx \frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}}{4}$.
If the solution varies very smoothly, the values $u_{i+1,j}, u_{i-1,j}$, etc., will be very close to $u_{i,j}$. If the grid spacing is extremely small, the difference between $u_{i+1,j}$ and $u_{i,j}$ might be on the order of machine epsilon. Repeatedly averaging these very close numbers can lead to round-off errors becoming more significant than the small truncation errors.

**Relevance to Learning Outcomes:**

*   **CO1 (Knowledge Level K2):** Understanding that computational solutions are subject to errors implies acknowledging that machine limitations (round-off) play a role.
*   **CO2 & CO3 (Knowledge Level K3):** When implementing Finite Difference or Finite Volume methods, the choice of data types (single vs. double precision) and the numerical algorithms used for solving the resulting algebraic systems can influence round-off error.
*   **CO5 (Knowledge Level K3):** Interpreting graphical results requires understanding that the "smoothness" or minor wiggles in a plot might be due to round-off error, especially in regions where truncation error is already very small.

**Important Points to Remember:**

*   **Round-off error is due to finite computer precision.**
*   **It accumulates with the number of operations.**
*   **Using double-precision floating-point numbers generally reduces round-off error.**
*   **Catastrophic cancellation can amplify round-off error.**
*   **There exists an optimal grid spacing where the sum of truncation error and round-off error is minimized.**

**Example from Textbooks:**

*   **Anderson Jr., Chapter 2 (Fundamental Concepts):** Anderson often discusses the need for numerical precision and briefly touches upon machine limitations that lead to round-off errors.
*   **Patankar, Chapter 5 (Finite Volume Method):** While Patankar's focus is on the formulation, the practical implementation of his methods (like the SIMPLE algorithm) involves many iterative calculations where round-off error can accumulate. He stresses the importance of robust numerical procedures.
*   **Versteeg & Malalasekera, Chapter 2 (Mathematical Background):** This chapter often covers the basics of numerical precision and floating-point arithmetic, laying the groundwork for understanding round-off errors. They might discuss error propagation.

---

### **4. The Interplay and Total Error**

The total error in a CFD solution is a combination of discretization error (primarily truncation error) and round-off error.

**Total Error $\approx$ Truncation Error + Round-off Error**

**Error Behavior with Grid Refinement:**

*   **As grid spacing $\Delta x$ decreases:**
    *   Truncation Error $\downarrow$ (e.g., $O(\Delta x^p)$ where $p \ge 1$)
    *   Round-off Error $\uparrow$ (due to increased operations, potential for cancellation)

*   **Optimal Grid Spacing:** There exists an intermediate value of $\Delta x$ where the total error is minimized.

[**Conceptual Graph:** Imagine a graph with $\Delta x$ on the x-axis and Error on the y-axis. The truncation error curve starts high and decreases monotonically with decreasing $\Delta x$. The round-off error curve starts low and increases monotonically with decreasing $\Delta x$. The sum of these two curves forms a U-shaped curve, with a minimum at some optimal $\Delta x$.]

**Strategies to Minimize Error:**

1.  **Use Higher-Order Schemes:** Employ finite difference or finite volume schemes with a higher order of accuracy (e.g., $O(\Delta x^2)$ or higher) to reduce truncation error for a given grid spacing.
2.  **Grid Refinement:** Systematically reduce the grid spacing ($\Delta x$) and observe the convergence of the solution. The solution should approach a limit.
3.  **Use Double Precision:** Employ double-precision (64-bit) floating-point numbers to minimize round-off errors.
4.  **Choose Appropriate Algorithms:** Select stable and robust numerical algorithms for solving the algebraic systems.
5.  **Verification and Validation:** Compare CFD results against analytical solutions (for simple cases) or experimental data (validation). Verify that the CFD solution converges properly with grid refinement.

**Relevance to Learning Outcomes:**

*   **CO1, CO2, CO3, CO4, CO5:** All course outcomes benefit from understanding the total error. Choosing appropriate discretization methods (CO2, CO3), understanding how convection and diffusion terms affect accuracy (CO4), and interpreting results (CO5) all depend on managing these errors.

---

### **Practice Questions and Exercises**

**Question 1:**
Consider the function $f(x) = e^x$.
a) Using Taylor series expansion, derive the forward difference approximation for $f'(x)$.
b) Determine the order of accuracy (truncation error) for this scheme.
c) If $x=0$ and $\Delta x = 0.1$, calculate the approximate value of $f'(0)$ using the forward difference scheme. Compare it to the exact value.

**Answer 1:**
a) Taylor series for $f(x+\Delta x) = f(x) + \Delta x f'(x) + \frac{(\Delta x)^2}{2!} f''(x) + \dots$
Rearranging for $f'(x)$: $f'(x) \approx \frac{f(x+\Delta x) - f(x)}{\Delta x} - \frac{\Delta x}{2} f''(x) - \dots$
Forward difference approximation: $f'(x) \approx \frac{f(x+\Delta x) - f(x)}{\Delta x}$
b) The leading term in the truncation error is $-\frac{\Delta x}{2} f''(x)$. Since the error is proportional to $\Delta x$, the order of accuracy is $O(\Delta x)$.
c) Exact value of $f'(0)$ for $f(x)=e^x$ is $f'(0) = e^0 = 1$.
Approximate value: $\frac{e^{0.1} - e^0}{0.1} = \frac{1.10517 - 1}{0.1} = \frac{0.10517}{0.1} = 1.0517$.
Error = $1.0517 - 1 = 0.0517$. This is approximately $(0.1)/2 = 0.05$ (since $f''(x) = e^x$, $f''(0) = 1$).

---

**Question 2:**
Consider the second derivative approximation $u''(x) \approx \frac{u(x+\Delta x) - 2u(x) + u(x-\Delta x)}{(\Delta x)^2}$.
a) Derive the truncation error for this central difference scheme.
b) What is the order of accuracy?
c) If you refine the grid spacing by a factor of 2 (halving $\Delta x$), by what factor would you expect the truncation error to decrease?

**Answer 2:**
a) As shown in the notes, the Taylor series expansion leads to:
$\frac{u(x+\Delta x) - 2u(x) + u(x-\Delta x)}{(\Delta x)^2} = u''(x) + \frac{(\Delta x)^2}{12} u^{(4)}(x) + \dots$
The truncation error is $O(\Delta x^2)$.
b) The order of accuracy is 2.
c) If the truncation error is $O(\Delta x^2)$, and $\Delta x$ is halved, the new error will be proportional to $(\Delta x/2)^2 = (\Delta x)^2 / 4$. Therefore, the truncation error would decrease by a factor of 4.

---

**Question 3:**
Explain how round-off error can become significant in CFD simulations, even when using high-order discretization schemes.

**Answer 3:**
Round-off error arises from the finite precision of computer arithmetic. While high-order schemes reduce truncation error, they often involve more complex calculations and potentially require finer grids. As the grid spacing ($\Delta x$) becomes extremely small, the differences between neighboring cell values in smooth regions might become very small, approaching the machine's precision limit. When these small numbers are repeatedly used in calculations (e.g., additions, subtractions, divisions in iterative solvers), the inherent round-off errors can accumulate. In extreme cases, the round-off error can become larger than the truncation error, preventing further accuracy improvements even with finer grids. This is sometimes referred to as the "round-off limit." Using double-precision floating-point numbers is a standard practice to mitigate this problem.

---

### **Summary of Key Points**

*   **Discretization Error:** The error introduced by approximating continuous equations with discrete algebraic equations.
*   **Truncation Error:** Arises from approximating derivatives using finite differences (Taylor series truncation). Its magnitude depends on the grid spacing ($\Delta x$) and the order of the approximation. Central differences are generally more accurate than forward/backward differences.
*   **Round-off Error:** Arises from the finite precision of computer arithmetic. It accumulates with the number of operations and can become significant for very fine grids or ill-conditioned problems.
*   **Total Error:** A combination of truncation and round-off error. An optimal grid spacing exists that minimizes total error.
*   **Mitigation Strategies:** Use higher-order schemes, grid refinement, double precision, and robust algorithms. Verification and validation are crucial.

---

### **Alignment with Course Outcomes**

*   **CO1 (Knowledge Level K2):** This topic directly addresses the fundamental sources of error in CFD, which is essential for understanding the limitations of computational models.
*   **CO2 (Knowledge Level K3):** The discussion on finite difference schemes and truncation error is core to applying these methods.
*   **CO3 (Knowledge Level K3):** The principles of approximating derivatives and managing errors are transferable to the Finite Volume Method, where fluxes are approximated.
*   **CO4 (Knowledge Level K2):** Understanding truncation error is critical for selecting appropriate schemes for convection (first-order terms) and diffusion (second-order terms) in the convection-diffusion equation.
*   **CO5 (Knowledge Level K3):** Recognizing the impact of truncation and round-off errors is vital for interpreting numerical results and understanding why solutions might behave in a certain way (e.g., convergence issues, oscillatory behavior, limitations on accuracy).

---
This concludes Module 2, Topic: Discretization Error, Truncation Error, Round-off Error. Remember that mastering these concepts is fundamental to performing accurate and reliable CFD simulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
