---
title: "Stability of numerical solutions."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 3: Solution of unsteady conduction equation using finite difference method"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464379"
status: "completed"
scrapedAt: "2026-05-20T18:10:39.380Z"
---
# COMPUTATIONAL HEAT TRANSFER - Module 3: Solution of Unsteady Conduction Equation using Finite Difference Method

## Topic: Stability of Numerical Solutions

---

### **Learning Outcomes Covered:**

*   Understanding the concept of stability in numerical solutions of unsteady heat conduction problems.
*   Analyzing the conditions for stability for explicit and implicit finite difference schemes.
*   Identifying the limitations and advantages of stable and unstable schemes.
*   Applying stability criteria to select appropriate numerical methods for specific problems.
*   Interpreting the impact of discretization on solution stability.

---

### **Key Concepts and Definitions:**

*   **Unsteady Conduction Equation:** A partial differential equation (PDE) that describes how temperature changes over time and space in a material due to heat conduction. For a 1D rod with constant thermal properties, it is:
    $$ \frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} $$
    where $T$ is temperature, $t$ is time, $x$ is spatial coordinate, and $\alpha$ is thermal diffusivity.
*   **Finite Difference Method (FDM):** A numerical technique used to approximate solutions to differential equations by discretizing the domain into a grid and replacing derivatives with finite difference approximations.
*   **Explicit Scheme:** A finite difference scheme where the temperature at the new time step can be computed directly from known values at the previous time step. The solution for $T_{i}^{n+1}$ depends only on $T_{j}^{n}$ for various $j$.
*   **Implicit Scheme:** A finite difference scheme where the temperature at the new time step depends on temperatures at the same new time step at neighboring spatial locations. The solution for $T_{i}^{n+1}$ involves a system of equations where $T_{i}^{n+1}$ depends on $T_{i-1}^{n+1}$ and $T_{i+1}^{n+1}$.
*   **Stability:** A desirable property of a numerical method where small errors introduced during the computation do not grow unboundedly with time, leading to a physically meaningful and accurate solution. An unstable scheme will produce results that oscillate wildly or diverge, rendering them useless.
*   **Truncation Error:** The error introduced when an infinite series (like a Taylor series) is approximated by a finite number of terms. This is inherent in finite difference approximations.
*   **Round-off Error:** Errors introduced due to the finite precision of computer arithmetic.
*   **Courant-Friedrichs-Lewy (CFL) Condition:** A necessary condition for the stability of certain numerical schemes used for solving hyperbolic and parabolic PDEs. It relates the time step size to the spatial step size and the properties of the PDE.

---

### **1. Stability Analysis of Finite Difference Schemes**

When solving the unsteady heat conduction equation, the choice of time step ($\Delta t$) and spatial step ($\Delta x$) is crucial for the stability and accuracy of the numerical solution.

#### **1.1 Explicit Scheme (Forward-Time, Central-Space - FTCS)**

The FTCS scheme approximates the unsteady conduction equation as follows:

**Discretization:**
*   Time derivative: $\frac{\partial T}{\partial t} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$
*   Spatial derivative: $\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$

Substituting these into the unsteady conduction equation:
$$ \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2} $$

Solving for $T_{i}^{n+1}$:
$$ T_{i}^{n+1} = T_{i}^{n} + \alpha \Delta t \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2} $$
$$ T_{i}^{n+1} = T_{i}^{n} (1 - 2\alpha \frac{\Delta t}{(\Delta x)^2}) + T_{i+1}^{n} (\alpha \frac{\Delta t}{(\Delta x)^2}) + T_{i-1}^{n} (\alpha \frac{\Delta t}{(\Delta x)^2}) $$

Let $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2}$. Then the equation becomes:
$$ T_{i}^{n+1} = T_{i}^{n} (1 - 2\lambda) + \lambda (T_{i+1}^{n} + T_{i-1}^{n}) $$

**Stability Criterion for FTCS:**

The FTCS scheme is conditionally stable. It is stable if and only if:
$$ \lambda \le \frac{1}{2} $$
or
$$ \alpha \frac{\Delta t}{(\Delta x)^2} \le \frac{1}{2} $$

This condition implies that the time step $\Delta t$ must be sufficiently small relative to the spatial step $\Delta x$. Specifically, $\Delta t \le \frac{(\Delta x)^2}{2\alpha}$.

**Reason for Instability:**
If $\lambda > \frac{1}{2}$, the coefficient of $T_{i}^{n}$ becomes negative. This can lead to oscillations and amplification of errors as time progresses. Imagine a situation where a small error is introduced. If the coefficient is negative, the error gets multiplied by a negative number, and then combined with other terms, potentially amplifying.

**Advantages of Explicit Schemes:**
*   Simple to implement as each unknown $T_{i}^{n+1}$ can be calculated directly.
*   No need to solve a system of linear equations.

**Disadvantages of Explicit Schemes:**
*   Conditional stability requires very small time steps, especially for fine spatial grids, making it computationally expensive for long time simulations.

#### **1.2 Implicit Schemes**

Implicit schemes overcome the stability limitations of explicit schemes by allowing larger time steps. However, they require solving a system of linear equations at each time step.

##### **1.2.1 Backward-Time, Central-Space (BTCS) Scheme**

The BTCS scheme approximates the unsteady conduction equation using backward differences for time and central differences for space, evaluating the spatial terms at the new time step ($n+1$).

**Discretization:**
*   Time derivative: $\frac{\partial T}{\partial t} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$
*   Spatial derivative: $\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2}$

Substituting these into the unsteady conduction equation:
$$ \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2} $$

Rearranging to group terms at time step $n+1$:
$$ T_{i}^{n+1} - \alpha \Delta t \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2} = T_{i}^{n} $$
$$ T_{i-1}^{n+1} - 2(1 + \frac{(\Delta x)^2}{\alpha \Delta t}) T_{i}^{n+1} + T_{i+1}^{n+1} = -\frac{(\Delta x)^2}{\alpha \Delta t} T_{i}^{n} $$

Let $\mu = \frac{\alpha \Delta t}{(\Delta x)^2}$. Then the equation becomes:
$$ T_{i-1}^{n+1} - 2(1 + \mu) T_{i}^{n+1} + T_{i+1}^{n+1} = - \mu T_{i}^{n} $$

**Stability Criterion for BTCS:**

The BTCS scheme is **unconditionally stable**. This means it remains stable for any choice of $\Delta t$ and $\Delta x$.

**Reason for Unconditional Stability:**
The stability can be analyzed using the von Neumann method. The coefficient of $T_{i}^{n+1}$ is always negative and greater than 2 in magnitude (since $\mu > 0$). This structure ensures that any small error introduced at a given time step does not grow but rather decays or remains bounded. The solution at time $n+1$ is a weighted average of values at time $n$, but importantly, the coefficients for the unknown values at $n+1$ are such that they suppress error growth.

**Advantages of Implicit Schemes (like BTCS):**
*   Unconditional stability allows for larger time steps, making them more efficient for long-time simulations.

**Disadvantages of Implicit Schemes:**
*   Requires solving a system of linear algebraic equations at each time step, which is more complex to implement.
*   For 1D problems, this is typically a tridiagonal system, which can be solved efficiently using the Thomas algorithm. For 2D and 3D problems, the systems become much larger and more complex (e.g., banded matrices, sparse matrices).

#### **1.3 Crank-Nicolson Scheme**

The Crank-Nicolson scheme is an alternative implicit method that offers second-order accuracy in both space and time by averaging the spatial derivatives at time steps $n$ and $n+1$.

**Discretization:**
*   Time derivative: $\frac{\partial T}{\partial t} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$
*   Spatial derivative: Averaged at $n$ and $n+1$:
    $$ \frac{\partial^2 T}{\partial x^2} \approx \frac{1}{2} \left( \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2} + \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2} \right) $$

Substituting into the unsteady conduction equation:
$$ \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \frac{\alpha}{2} \left( \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2} + \frac{T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2} \right) $$

Let $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2}$. Rearranging to group terms at time step $n+1$:
$$ T_{i}^{n+1} - \frac{\lambda}{2} (T_{i+1}^{n+1} - 2T_{i}^{n+1} + T_{i-1}^{n+1}) = T_{i}^{n} + \frac{\lambda}{2} (T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}) $$
$$ -\frac{\lambda}{2} T_{i-1}^{n+1} + (1 + \lambda) T_{i}^{n+1} - \frac{\lambda}{2} T_{i+1}^{n+1} = \frac{\lambda}{2} T_{i-1}^{n} + (1 - \lambda) T_{i}^{n} + \frac{\lambda}{2} T_{i+1}^{n} $$

**Stability Criterion for Crank-Nicolson:**

The Crank-Nicolson scheme is also **unconditionally stable**.

**Reason for Unconditional Stability:**
Similar to BTCS, the structure of the resulting linear system and the coefficients ensure stability for all $\Delta t$. The von Neumann analysis confirms this. The unconditional stability is a significant advantage, allowing flexibility in time step selection while maintaining accuracy.

**Advantages of Crank-Nicolson:**
*   Unconditional stability.
*   Second-order accuracy in both time and space, leading to more accurate solutions for a given spatial discretization compared to BTCS.

**Disadvantages of Crank-Nicolson:**
*   Requires solving a system of linear equations at each time step, similar to BTCS.
*   The resulting system is tridiagonal for 1D problems.

---

### **2. Von Neumann Stability Analysis (Brief Overview)**

The von Neumann stability analysis is a common method to determine the stability of finite difference schemes for linear PDEs. It involves assuming a solution of the form $T_j^n = G^n e^{i \beta j \Delta x}$, where $G$ is the amplification factor, $\beta$ is the wave number, $i$ is the imaginary unit, and $j$ is the spatial index.

By substituting this assumed solution into the discretized finite difference equation and performing algebraic manipulations, one can derive an expression for the amplification factor $G$.

*   **Stable Scheme:** $|G| \le 1$. The amplitude of any error component does not grow with time.
*   **Unstable Scheme:** $|G| > 1$. The amplitude of error components grows with time.
*   **Conditionally Stable Scheme:** $|G| \le 1$ only if certain conditions on $\Delta t$ and $\Delta x$ are met.

**(Refer to Sastry, S.S., "Introductory Methods to Numerical Analysis" for detailed derivation of von Neumann analysis for various schemes.)**

---

### **3. Trade-offs Between Explicit and Implicit Schemes**

| Feature              | Explicit (FTCS)                                     | Implicit (BTCS, Crank-Nicolson)                     |
| :------------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| **Stability**        | Conditionally stable ($\lambda \le 0.5$)            | Unconditionally stable                              |
| **Time Step ($\Delta t$)** | Small time steps required for stability       | Larger time steps allowed                           |
| **Implementation**   | Simpler, direct calculation of unknowns             | More complex, requires solving a system of equations |
| **Computational Cost per Time Step** | Low (per grid point)                          | Higher (due to system solution)                     |
| **Overall Efficiency** | Can be inefficient for long-time simulations      | Generally more efficient for long-time simulations  |
| **Accuracy**         | First-order in time, second-order in space        | BTCS: First-order in time, second-order in space. Crank-Nicolson: Second-order in time and space. |

---

### **4. Impact of Discretization and Grid Refinement**

*   **Spatial Step ($\Delta x$):** For explicit schemes, decreasing $\Delta x$ (refining the grid) requires a proportionally smaller $\Delta t$ to maintain stability (due to the $(\Delta x)^2$ term in the stability criterion). This can significantly increase computational time. Implicit schemes are not affected in terms of stability by $\Delta x$.
*   **Time Step ($\Delta t$):** For explicit schemes, increasing $\Delta t$ beyond the stability limit leads to divergence. For implicit schemes, $\Delta t$ can be increased to speed up computations, but accuracy can still be affected if $\Delta t$ becomes too large.

---

### **5. Practical Considerations and Recommendations**

*   **Problem Type:** For short-time simulations or when the stability condition of the explicit scheme is easily met, the explicit scheme might be preferred due to its simplicity.
*   **Simulation Duration:** For long-time simulations or when high temporal resolution is not critical, implicit schemes are usually the better choice due to their ability to take larger time steps.
*   **Accuracy Requirements:** If high accuracy is required, the Crank-Nicolson scheme is often preferred due to its second-order accuracy in time.
*   **Computational Resources:** Implicit schemes, while requiring more computation per time step, can be more efficient overall for long simulations, potentially requiring fewer total time steps.

---

### **Examples**

**Example 1: Stability of FTCS**

Consider the 1D unsteady heat conduction equation with $\alpha = 0.01 \, \text{m}^2/\text{s}$. We have a domain of $L=1 \, \text{m}$ divided into $N=10$ spatial intervals, so $\Delta x = 1/10 = 0.1 \, \text{m}$.

**Scenario A: $\Delta t = 0.1 \, \text{s}$**
Calculate $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2} = 0.01 \times \frac{0.1}{(0.1)^2} = 0.01 \times \frac{0.1}{0.01} = 0.01 \times 10 = 0.1$.
Since $\lambda = 0.1 \le 0.5$, the FTCS scheme is **stable**.

**Scenario B: $\Delta t = 0.5 \, \text{s}$**
Calculate $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2} = 0.01 \times \frac{0.5}{(0.1)^2} = 0.01 \times \frac{0.5}{0.01} = 0.01 \times 50 = 0.5$.
Since $\lambda = 0.5 \le 0.5$, the FTCS scheme is **stable**.

**Scenario C: $\Delta t = 0.6 \, \text{s}$**
Calculate $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2} = 0.01 \times \frac{0.6}{(0.1)^2} = 0.01 \times \frac{0.6}{0.01} = 0.01 \times 60 = 0.6$.
Since $\lambda = 0.6 > 0.5$, the FTCS scheme is **unstable**. The solution will likely diverge.

---

### **Practice Questions/Exercises**

1.  **Question:** For the 1D unsteady heat conduction equation, $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, the FTCS (Forward-Time, Central-Space) scheme is used. If $\alpha = 2 \times 10^{-5} \, \text{m}^2/\text{s}$, $\Delta x = 0.05 \, \text{m}$, what is the maximum allowable time step $\Delta t$ for the scheme to be stable?

    **Answer:**
    The stability criterion for FTCS is $\lambda = \alpha \frac{\Delta t}{(\Delta x)^2} \le 0.5$.
    We need to find $\Delta t$.
    $\Delta t \le 0.5 \frac{(\Delta x)^2}{\alpha}$
    $\Delta t \le 0.5 \frac{(0.05 \, \text{m})^2}{2 \times 10^{-5} \, \text{m}^2/\text{s}}$
    $\Delta t \le 0.5 \frac{0.0025 \, \text{m}^2}{2 \times 10^{-5} \, \text{m}^2/\text{s}}$
    $\Delta t \le 0.5 \times 125 \, \text{s}$
    $\Delta t \le 62.5 \, \text{s}$
    The maximum allowable time step is $62.5 \, \text{s}$.

2.  **Question:** Compare and contrast the stability characteristics and practical implications of the explicit FTCS scheme and the implicit Crank-Nicolson scheme for solving the unsteady heat conduction equation.

    **Answer:**
    *   **FTCS (Explicit):**
        *   **Stability:** Conditionally stable, requiring $\alpha \frac{\Delta t}{(\Delta x)^2} \le 0.5$.
        *   **Practical Implications:** Requires small time steps, especially with fine spatial grids, which can lead to slow simulations for long physical times. Simple to implement.
    *   **Crank-Nicolson (Implicit):**
        *   **Stability:** Unconditionally stable.
        *   **Practical Implications:** Allows larger time steps, leading to faster simulations for long physical times. Requires solving a system of linear equations at each time step, making implementation more complex. Offers higher temporal accuracy (second-order) compared to FTCS (first-order).

3.  **Question:** True or False: The BTCS (Backward-Time, Central-Space) scheme is unconditionally stable.

    **Answer:** True.

4.  **Question:** A simulation using the FTCS scheme for unsteady conduction is exhibiting erratic and diverging results. What is the most likely cause, and what steps should be taken to correct it?

    **Answer:**
    The most likely cause is that the time step $\Delta t$ is too large, violating the stability criterion $\alpha \frac{\Delta t}{(\Delta x)^2} \le 0.5$.
    **Steps to correct:**
    1.  **Reduce $\Delta t$**: Decrease the time step size.
    2.  **Increase $\Delta x$**: Increase the spatial step size (this is usually less desirable as it reduces spatial accuracy).
    3.  **Switch to an implicit scheme**: If reducing $\Delta t$ makes the simulation too slow, switch to an unconditionally stable implicit scheme like BTCS or Crank-Nicolson.

---

### **Important Points to Remember:**

*   **Stability is paramount:** An unstable numerical solution is meaningless.
*   **Explicit vs. Implicit:** Explicit schemes are simple but have strict time step limitations. Implicit schemes are more complex but offer unconditional stability and allow larger time steps.
*   **CFL Condition:** For explicit schemes solving parabolic PDEs, the time step is directly related to the square of the spatial step.
*   **Trade-off:** Stability, accuracy, and computational cost are interconnected. Choosing a scheme involves balancing these factors.
*   **Accuracy:** While BTCS and Crank-Nicolson are unconditionally stable, the choice of $\Delta t$ still affects the *accuracy* of the solution. Larger $\Delta t$ might be stable but less accurate.
*   **Spatial Discretization:** The choice of $\Delta x$ influences the accuracy of the spatial derivatives and, for explicit schemes, the allowable $\Delta t$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **References and Further Reading:**

*   **Sastry, S. S. (2012).** *Introductory Methods to Numerical Analysis*. PHI Learning Private Ltd. (Chapter on finite difference methods for partial differential equations, including stability analysis).
*   **Patankar, S. V. (2017).** *Numerical Heat Transfer and Fluid Flow*. CRC Press. (Discusses stability criteria and methods for solving discretized equations in heat transfer contexts).
*   **Anderson, J. D., & Wendt, J. (1995).** *Computational Fluid Dynamics*. McGraw-Hill International Editions. (Provides a fundamental understanding of numerical methods for PDEs, including stability).
*   **Versteeg, H., & Malalasekera, W. (2008).** *An Introduction to Computational Fluid Dynamics: The Finite Volume Method*. Pearson. (While focused on FVM, it covers fundamental concepts of discretization and stability applicable to FDM).

---

### **Alignment with Course Outcomes:**

*   **CO1 (Governing Equations):** Understanding of the unsteady conduction equation as the governing PDE.
*   **CO2 (PDE Classification):** The unsteady conduction equation is parabolic, and stability criteria are derived based on this classification.
*   **CO3 (FDM Familiarity):** This entire topic is centered around applying FDM to the unsteady conduction equation.
*   **CO4 (Solving Linear Systems):** Implicit schemes require solving systems of linear algebraic equations, highlighting the relevance of CO4.
*   **CO5 (Solving Problems):** Understanding stability is crucial for successfully solving unsteady conduction problems numerically. It dictates the choices of discretization parameters required for a stable and accurate solution.