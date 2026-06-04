---
title: "Solution of unsteady conduction equation using finite difference method- Explicit, implicit and semi-implicit methods."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 3: Solution of unsteady conduction equation using finite difference method"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464378"
status: "completed"
scrapedAt: "2026-05-20T18:10:38.683Z"
---
# Computational Heat Transfer: Module 3 - Solution of Unsteady Conduction Equation using Finite Difference Method

## Topic: Explicit, Implicit, and Semi-Implicit Methods

---

### **1. Introduction to Unsteady Conduction and the Governing Equation**

*   **Unsteady Heat Conduction:** Refers to the heat transfer process where temperature changes with time at any point within a body. This is in contrast to steady-state conduction, where temperature is constant over time.
*   **The 1D Unsteady Heat Conduction Equation:** The fundamental governing equation for heat transfer in one dimension without internal heat generation is:

    $$ \frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} $$

    Where:
    *   $T$ is temperature ($T(x, t)$).
    *   $t$ is time.
    *   $x$ is the spatial coordinate.
    *   $\alpha$ is the thermal diffusivity of the material ($\alpha = k / (\rho c_p)$), representing how quickly temperature diffuses through a material. ($k$: thermal conductivity, $\rho$: density, $c_p$: specific heat capacity).

*   **Discretization:** To solve this Partial Differential Equation (PDE) numerically, we discretize both space and time.
    *   **Spatial Discretization:** Divide the physical domain into small segments (nodes) of length $\Delta x$. Let the spatial nodes be indexed by $i = 0, 1, 2, ..., N$.
    *   **Temporal Discretization:** Divide the time domain into small time steps of duration $\Delta t$. Let the time levels be indexed by $j = 0, 1, 2, ...$.
    *   The temperature at a spatial node $i$ and time level $j$ is denoted as $T_i^j$.

*   **Objective:** Our goal is to find the temperature distribution $T(x, t)$ at various time levels.

---

### **2. Finite Difference Approximations**

We need to approximate the partial derivatives in the unsteady conduction equation using finite differences.

*   **Spatial Derivative ($\frac{\partial^2 T}{\partial x^2}$):** The most common approximation is the **central difference** for the second derivative.

    At node $i$ and time level $j$:
    $$ \left(\frac{\partial^2 T}{\partial x^2}\right)_i^j \approx \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2} $$
    This approximation is second-order accurate in space.

*   **Temporal Derivative ($\frac{\partial T}{\partial t}$):** We can approximate this derivative in several ways, leading to different numerical methods:

    *   **Forward Difference:** Approximates the derivative at the beginning of the time step.
        $$ \left(\frac{\partial T}{\partial t}\right)_i^j \approx \frac{T_i^{j+1} - T_i^j}{\Delta t} $$
        This is first-order accurate in time.

    *   **Backward Difference:** Approximates the derivative at the end of the time step.
        $$ \left(\frac{\partial T}{\partial t}\right)_i^j \approx \frac{T_i^{j+1} - T_i^j}{\Delta t} $$
        This is first-order accurate in time.

    *   **Crank-Nicolson (Central Difference in Time):** Approximates the derivative at the midpoint of the time step (averaging the spatial derivative at the beginning and end of the time step).
        $$ \left(\frac{\partial T}{\partial t}\right)_i^j \approx \frac{T_i^{j+1} - T_i^j}{\Delta t} $$
        And the spatial derivative is averaged:
        $$ \alpha \left(\frac{\partial^2 T}{\partial x^2}\right)_i^{j+1/2} \approx \frac{\alpha}{2} \left[ \left(\frac{\partial^2 T}{\partial x^2}\right)_i^j + \left(\frac{\partial^2 T}{\partial x^2}\right)_i^{j+1} \right] $$
        This is second-order accurate in time.

---

### **3. Explicit Method (Forward Euler Method)**

This method uses the forward difference approximation for the time derivative and approximates the spatial derivative at the *previous* time level ($j$).

*   **Discretized Equation:** Substituting the approximations into the governing equation:

    $$ \frac{T_i^{j+1} - T_i^j}{\Delta t} = \alpha \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2} $$

*   **Solving for $T_i^{j+1}$:** We can directly solve for the temperature at the new time level ($j+1$) at node $i$:

    $$ T_i^{j+1} = T_i^j + \frac{\alpha \Delta t}{(\Delta x)^2} (T_{i+1}^j - 2T_i^j + T_{i-1}^j) $$

*   **Introducing the Fourier Number ($\ Fo$):**
    Let $Fo = \frac{\alpha \Delta t}{(\Delta x)^2}$. This dimensionless number is crucial for stability.

    $$ T_i^{j+1} = T_i^j + Fo (T_{i+1}^j - 2T_i^j + T_{i-1}^j) $$

    $$ T_i^{j+1} = Fo T_{i+1}^j + (1 - 2Fo) T_i^j + Fo T_{i-1}^j $$

*   **Advantages:**
    *   **Simple to implement:** Each new temperature $T_i^{j+1}$ can be calculated directly from known temperatures at the previous time step. No system of equations needs to be solved simultaneously.
    *   **Explicit dependency:** The calculation at time $j+1$ depends explicitly on values at time $j$.

*   **Disadvantages:**
    *   **Conditional Stability:** The explicit method is only stable if the Fourier number ($Fo$) is below a certain limit. For the 1D unsteady conduction equation using the explicit method, the stability criterion is:

        $$ Fo = \frac{\alpha \Delta t}{(\Delta x)^2} \leq \frac{1}{2} $$

        This is a significant limitation as it requires very small time steps ($\Delta t$) for stability, especially for fine spatial grids ($\Delta x$) or materials with high thermal diffusivity ($\alpha$). This can lead to long computation times.

*   **Example:** Consider a rod with initial temperature distribution. To find the temperature at the next time step, you simply plug in the temperatures of the neighboring nodes and the current node from the previous time step.

---

### **4. Implicit Method (Backward Euler Method)**

This method uses the backward difference approximation for the time derivative and approximates the spatial derivative at the *new* time level ($j+1$). This means that the temperatures at the new time level for all spatial nodes are coupled.

*   **Discretized Equation:**

    $$ \frac{T_i^{j+1} - T_i^j}{\Delta t} = \alpha \frac{T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}}{(\Delta x)^2} $$

*   **Rearranging for $T^{j+1}$:**

    $$ T_i^{j+1} - \frac{\alpha \Delta t}{(\Delta x)^2} (T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}) = T_i^j $$

    $$ T_i^{j+1} - Fo (T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}) = T_i^j $$

    $$ -Fo T_{i-1}^{j+1} + (1 + 2Fo) T_i^{j+1} - Fo T_{i+1}^{j+1} = T_i^j $$

*   **System of Equations:** For an interior node $i$, the equation involves $T_{i-1}^{j+1}$, $T_i^{j+1}$, and $T_{i+1}^{j+1}$. When applied to all interior nodes ($i = 1, 2, ..., N-1$), this results in a system of linear algebraic equations for the unknown temperatures at the new time level.

    For a domain with $N$ spatial nodes and considering boundary conditions:
    *   Let $T_0^{j+1}$ and $T_N^{j+1}$ be known due to boundary conditions.
    *   The system of equations for $i = 1, 2, ..., N-1$ is:
        $$ -Fo T_{i-1}^{j+1} + (1 + 2Fo) T_i^{j+1} - Fo T_{i+1}^{j+1} = T_i^j $$

    This system can be written in matrix form $A \mathbf{T}^{j+1} = \mathbf{b}$, where:
    *   $\mathbf{T}^{j+1}$ is the vector of unknown temperatures at time $j+1$.
    *   $A$ is a tridiagonal matrix.
    *   $\mathbf{b}$ is a vector containing known temperatures from time $j$ and boundary conditions.

*   **Advantages:**
    *   **Unconditionally Stable:** The implicit method is stable for any time step size ($\Delta t$). This allows for larger time steps, significantly reducing computation time compared to the explicit method for the same accuracy.
    *   **Handles larger time steps:** The stability is not tied to the Fourier number, making it more practical for many simulations.

*   **Disadvantages:**
    *   **Requires solving a system of equations:** At each time step, a system of linear algebraic equations must be solved, which is computationally more intensive per step than the explicit method.
    *   **More complex to implement:** Requires a linear equation solver (e.g., Thomas algorithm for tridiagonal systems).

*   **Reference:** Patankar (2017) extensively discusses the formulation and solution of such linear systems in the context of numerical heat transfer and fluid flow. The Thomas algorithm is a standard method for solving tridiagonal systems efficiently.

---

### **5. Semi-Implicit Method (e.g., Crank-Nicolson Method)**

The Crank-Nicolson method offers a balance between the stability of implicit methods and the accuracy of central differences in time. It approximates the time derivative using a central difference and the spatial derivative as an average of its values at the beginning and end of the time step.

*   **Discretized Equation:**

    $$ \frac{T_i^{j+1} - T_i^j}{\Delta t} = \frac{\alpha}{2} \left[ \left(\frac{\partial^2 T}{\partial x^2}\right)_i^j + \left(\frac{\partial^2 T}{\partial x^2}\right)_i^{j+1} \right] $$

    Substituting the central difference for the spatial derivative:

    $$ \frac{T_i^{j+1} - T_i^j}{\Delta t} = \frac{\alpha}{2} \left[ \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2} + \frac{T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}}{(\Delta x)^2} \right] $$

*   **Rearranging for $T^{j+1}$:**

    $$ \frac{T_i^{j+1} - T_i^j}{\Delta t} = \frac{Fo}{2} \left[ (T_{i+1}^j - 2T_i^j + T_{i-1}^j) + (T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}) \right] $$

    Multiply by $\Delta t$:

    $$ T_i^{j+1} - T_i^j = \frac{Fo}{2} (T_{i+1}^j - 2T_i^j + T_{i-1}^j) + \frac{Fo}{2} (T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}) $$

    Group terms for time level $j+1$ on the left and $j$ on the right:

    $$ T_i^{j+1} - \frac{Fo}{2} (T_{i+1}^{j+1} - 2T_i^{j+1} + T_{i-1}^{j+1}) = T_i^j + \frac{Fo}{2} (T_{i+1}^j - 2T_i^j + T_{i-1}^j) $$

    $$ -\frac{Fo}{2} T_{i-1}^{j+1} + \left(1 + Fo\right) T_i^{j+1} - \frac{Fo}{2} T_{i+1}^{j+1} = \frac{Fo}{2} T_{i-1}^j + \left(1 - Fo\right) T_i^j + \frac{Fo}{2} T_{i+1}^j $$

*   **System of Equations:** Similar to the implicit method, this formulation also results in a system of linear algebraic equations for the unknown temperatures at the new time level ($j+1$). For an interior node $i$:

    $$ -\frac{Fo}{2} T_{i-1}^{j+1} + (1 + Fo) T_i^{j+1} - \frac{Fo}{2} T_{i+1}^{j+1} = \frac{Fo}{2} T_{i-1}^j + (1 - Fo) T_i^j + \frac{Fo}{2} T_{i+1}^j $$

    Again, this forms a tridiagonal system $A' \mathbf{T}^{j+1} = \mathbf{b}'$.

*   **Advantages:**
    *   **Unconditionally Stable:** Like the implicit method, Crank-Nicolson is stable for any time step size.
    *   **Second-order accuracy in time:** This is its major advantage over the explicit (first-order) and implicit (first-order) methods. It requires fewer time steps to achieve a given accuracy in time.

*   **Disadvantages:**
    *   **Requires solving a system of equations:** Similar to the implicit method, a linear system needs to be solved at each time step.
    *   **Slightly more complex formulation:** The right-hand side of the system involves values from both time levels.

*   **Reference:** Sastry (2012) provides a detailed explanation of the Crank-Nicolson method and its derivation for solving parabolic PDEs.

---

### **6. Comparison of Methods**

| Feature             | Explicit Method (Forward Euler)                     | Implicit Method (Backward Euler)                  | Semi-Implicit (Crank-Nicolson)                  |
| :------------------ | :-------------------------------------------------- | :------------------------------------------------ | :---------------------------------------------- |
| **Time Derivative** | Forward Difference                                  | Backward Difference                             | Central Difference                              |
| **Spatial Derivative**| Central Difference (at $t^j$)                       | Central Difference (at $t^{j+1}$)                 | Central Difference (average of $t^j$ and $t^{j+1}$) |
| **Accuracy (Time)** | First-order ($O(\Delta t)$)                         | First-order ($O(\Delta t)$)                       | Second-order ($O(\Delta t^2)$)                  |
| **Accuracy (Space)**| Second-order ($O(\Delta x^2)$)                      | Second-order ($O(\Delta x^2)$)                    | Second-order ($O(\Delta x^2)$)                  |
| **Stability**       | Conditionally Stable ($Fo \le 0.5$)               | Unconditionally Stable                            | Unconditionally Stable                          |
| **Computational Cost per Step** | Low (direct calculation)                  | High (solve linear system)                        | High (solve linear system)                      |
| **Flexibility of $\Delta t$** | Restricted                                          | High                                              | High                                            |
| **Implementation**  | Simple                                              | Moderate (requires linear solver)                 | Moderate (requires linear solver)               |

---

### **7. Learning Outcomes Addressed**

*   **CO1 & CO2 (Governing Equations & PDEs):** This module directly deals with the 1D unsteady heat conduction equation, a parabolic PDE, and its discretization.
*   **CO3 (FDM):** All methods discussed (explicit, implicit, semi-implicit) are based on the Finite Difference Method (FDM) for discretizing the PDE.
*   **CO4 (Solving Linear Algebraic Equations):** Implicit and semi-implicit methods require solving systems of linear algebraic equations, often tridiagonal systems, for which efficient solvers (like the Thomas algorithm) exist.
*   **CO5 (Solving Unsteady Conduction):** The primary goal of this module is to provide the numerical techniques to solve problems involving unsteady conduction.

---

### **8. Key Concepts and Definitions**

*   **Unsteady Conduction:** Heat transfer where temperature varies with time.
*   **Finite Difference Method (FDM):** A numerical technique that approximates derivatives with differences between function values at discrete points.
*   **Discretization:** The process of dividing a continuous domain (space and time) into discrete points (nodes) and intervals.
*   **Fourier Number ($Fo$):** A dimensionless parameter ($\alpha \Delta t / (\Delta x)^2$) that governs the behavior of the explicit method and is crucial for its stability.
*   **Stability:** A numerical method is stable if errors do not grow unboundedly as time progresses.
*   **Explicit Method:** Calculates unknown values at a future time step directly from known values at the current time step.
*   **Implicit Method:** Calculates unknown values at a future time step by solving a system of equations involving values at the future time step for multiple spatial locations.
*   **Semi-Implicit Method (Crank-Nicolson):** A compromise that uses average values at the beginning and end of the time step, offering higher accuracy and unconditional stability.
*   **Tridiagonal Matrix:** A square matrix where non-zero elements are confined to the main diagonal, the first super-diagonal, and the first sub-diagonal.

---

### **9. Practice Questions and Exercises**

**Question 1:**
For the 1D unsteady heat conduction equation $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, the explicit finite difference scheme is given by:
$T_i^{j+1} = T_i^j + Fo (T_{i+1}^j - 2T_i^j + T_{i-1}^j)$, where $Fo = \frac{\alpha \Delta t}{(\Delta x)^2}$.
What is the stability criterion for this explicit scheme?
(a) $Fo \le 0.25$
(b) $Fo \le 0.5$
(c) $Fo \le 1.0$
(d) No stability criterion exists

**Answer:** (b) $Fo \le 0.5$

**Question 2:**
Which of the following numerical methods for solving the unsteady heat conduction equation is unconditionally stable but requires solving a system of linear equations at each time step?
(a) Explicit method
(b) Implicit method
(c) Semi-explicit method
(d) Analytical method

**Answer:** (b) Implicit method

**Question 3:**
The Crank-Nicolson method offers which advantage over the explicit and standard implicit (backward Euler) methods for solving the unsteady heat conduction equation?
(a) It is always more computationally efficient per time step.
(b) It is first-order accurate in time.
(c) It is second-order accurate in time.
(d) It does not require spatial discretization.

**Answer:** (c) It is second-order accurate in time.

**Question 4 (Conceptual):**
Explain why the explicit method is conditionally stable while the implicit and Crank-Nicolson methods are unconditionally stable. What are the practical implications of this stability difference?

**Answer Guidance:**
*   **Explicit Stability:** Errors at a given time step propagate forward and influence future calculations. The explicit method's calculation for $T_i^{j+1}$ uses only values from time $j$. If $\Delta t$ is too large relative to $\Delta x$ and $\alpha$, errors from $T_{i-1}^j$ and $T_{i+1}^j$ can amplify when calculating $T_i^{j+1}$. The $1-2Fo$ term in the coefficient of $T_i^j$ must be non-negative for the update to be physically meaningful (e.g., not leading to a negative temperature if starting from positive). This leads to $1-2Fo \ge 0 \implies Fo \le 0.5$.
*   **Implicit Stability:** The calculation for $T_i^{j+1}$ involves neighboring nodes at the same time level ($T_{i-1}^{j+1}$, $T_i^{j+1}$, $T_{i+1}^{j+1}$). This coupling tends to "smear out" errors rather than amplify them. The coefficients in the resulting linear system are such that they ensure stability regardless of $\Delta t$.
*   **Crank-Nicolson Stability:** Similar to the implicit method, the averaging of spatial derivatives at both time levels creates a stable system.
*   **Practical Implications:** Unconditional stability allows implicit and Crank-Nicolson methods to use larger time steps, reducing the total number of steps and overall computation time, especially for problems requiring small spatial grids or high diffusivity. The explicit method might require prohibitively small time steps, making it computationally expensive or even intractable.

**Question 5 (Numerical - setup):**
Consider a 1D rod of length $L=1$ m with $\alpha = 0.01 \, \text{m}^2/\text{s}$. The rod is discretized into 5 nodes ($N=4$ intervals, $\Delta x = 0.25$ m). The initial temperature is uniform at $100^\circ\text{C}$. The left boundary ($x=0$) is kept at $100^\circ\text{C}$, and the right boundary ($x=1$) is suddenly changed to $0^\circ\text{C}$.
If you choose a time step $\Delta t = 0.01$ s:
(a) Calculate the Fourier number ($Fo$).
(b) Determine if the explicit method is stable for this choice of $\Delta t$ and $\Delta x$.
(c) Set up the matrix equation $A\mathbf{T}^{j+1} = \mathbf{b}$ for the implicit method to find the temperatures at $t = 0.01$ s. Assume the boundary conditions at $t=0$ are $T_0^j = 100$ and $T_4^j = 100$. At $t=0.01$s, the boundary condition at $x=1$ becomes $T_4^{j+1} = 0$.

**Answer:**
(a) $Fo = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{0.01 \, \text{m}^2/\text{s} \times 0.01 \, \text{s}}{(0.25 \, \text{m})^2} = \frac{0.0001}{0.0625} = 0.0016$.

(b) Since $Fo = 0.0016 \le 0.5$, the explicit method is stable for this choice of $\Delta t$ and $\Delta x$.

(c) **Implicit Method Setup (for the first time step, j=0):**
The governing equation at node $i$ for the implicit method is:
$-Fo T_{i-1}^{j+1} + (1 + 2Fo) T_i^{j+1} - Fo T_{i+1}^{j+1} = T_i^j$

With $Fo = 0.0016$:
$-0.0016 T_{i-1}^{j+1} + (1 + 2 \times 0.0016) T_i^{j+1} - 0.0016 T_{i+1}^{j+1} = T_i^j$
$-0.0016 T_{i-1}^{j+1} + 1.0032 T_i^{j+1} - 0.0016 T_{i+1}^{j+1} = T_i^j$

We are solving for $T_1^{1}, T_2^{1}, T_3^{1}$ (since $T_0^{1}$ and $T_4^{1}$ are boundary conditions).
The initial temperatures are $T_0^0 = T_1^0 = T_2^0 = T_3^0 = T_4^0 = 100^\circ\text{C}$.
The boundary conditions for the next time step ($j+1=1$) are $T_0^1 = 100^\circ\text{C}$ and $T_4^1 = 0^\circ\text{C}$.

*   **For node i=1:**
    $-0.0016 T_0^1 + 1.0032 T_1^1 - 0.0016 T_2^1 = T_1^0$
    $-0.0016 (100) + 1.0032 T_1^1 - 0.0016 T_2^1 = 100$
    $1.0032 T_1^1 - 0.0016 T_2^1 = 100 + 0.0016 \times 100 = 100.16$

*   **For node i=2:**
    $-0.0016 T_1^1 + 1.0032 T_2^1 - 0.0016 T_3^1 = T_2^0$
    $-0.0016 T_1^1 + 1.0032 T_2^1 - 0.0016 T_3^1 = 100$

*   **For node i=3:**
    $-0.0016 T_2^1 + 1.0032 T_3^1 - 0.0016 T_4^1 = T_3^0$
    $-0.0016 T_2^1 + 1.0032 T_3^1 - 0.0016 (0) = 100$
    $-0.0016 T_2^1 + 1.0032 T_3^1 = 100$

The matrix equation is:
$$ \begin{pmatrix} 1.0032 & -0.0016 & 0 \\ -0.0016 & 1.0032 & -0.0016 \\ 0 & -0.0016 & 1.0032 \end{pmatrix} \begin{pmatrix} T_1^1 \\ T_2^1 \\ T_3^1 \end{pmatrix} = \begin{pmatrix} 100.16 \\ 100 \\ 100 \end{pmatrix} $$
This is the system $A\mathbf{T}^1 = \mathbf{b}$.

---

### **10. Important Points to Remember**

*   The choice of numerical method (explicit, implicit, semi-implicit) depends on the trade-off between **stability**, **accuracy**, and **computational cost per time step**.
*   **Explicit methods** are simple but suffer from **conditional stability**, often requiring very small time steps.
*   **Implicit and Crank-Nicolson methods** are **unconditionally stable**, allowing larger time steps, but require solving a system of linear equations.
*   **Crank-Nicolson** provides **second-order accuracy in time**, making it generally more accurate for a given time step compared to the first-order implicit (backward Euler) method.
*   The **Fourier number ($Fo$)** is a critical parameter for explicit methods.
*   When solving implicit or Crank-Nicolson methods, the resulting system of linear equations for a 1D problem is typically **tridiagonal**, which can be solved efficiently using the **Thomas algorithm**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **11. References Incorporated**

*   **Sastry, S. S. (2012).** *Introductory methods to numerical analysis*. This book is a fundamental resource for understanding numerical methods, including the derivation and application of finite difference schemes for PDEs. It would cover the explicit and implicit formulations in detail.
*   **Patankar, Suhas V. (2017).** *Numerical Heat Transfer and Fluid Flow*. Patankar's work is seminal in computational fluid dynamics and heat transfer. His book is excellent for understanding the practical implementation of numerical methods, including the setup and solution of the discretized equations, and the use of techniques like the Thomas algorithm for tridiagonal systems that arise in implicit methods.
*   **Anderson, John David, and Wendt, John (1995).** *Computational fluid dynamics*. While broader, CFD books often provide a good introduction to the numerical treatment of diffusion-dominated equations, which are foundational to heat transfer.
*   **Versteeg, H., & Malalasekra, W. (2008).** *An Introduction to Computational Fluid Dynamics the Finite Volume Method*. Although this course focuses on FDM, understanding the broader context of numerical methods for PDEs, including FVM, can be beneficial for understanding the underlying principles.
*   **Venkatesh, S. P. (2009).** *Heat transfer*. A general heat transfer text would provide the physical context for the conduction equation and its parameters.

This comprehensive set of notes covers the core concepts of solving the unsteady conduction equation using explicit, implicit, and semi-implicit finite difference methods, addressing the learning outcomes and referencing the provided texts.