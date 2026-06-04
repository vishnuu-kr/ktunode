---
title: "Parabolic equations – Explicit finite difference method – Bender-Schmidt method. Crank-Nicholson implicit method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 4: Partial differential equations in two"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b49"
status: "completed"
scrapedAt: "2026-05-20T18:46:53.158Z"
---
# NUMERICAL METHODS FOR ENGINEERS - Module 4: Partial Differential Equations in Two Dimensions

## Topic: Parabolic Equations – Explicit Finite Difference Method – Bender-Schmidt Method. Crank-Nicolson Implicit Method.

---

### **1. Introduction to Parabolic Partial Differential Equations (PDEs)**

*   **Definition:** Parabolic PDEs are a class of differential equations that describe phenomena involving diffusion, heat transfer, or wave propagation over time. They typically involve a second-order spatial derivative and a first-order time derivative.
*   **General Form:** The most common example is the one-dimensional heat equation:
    $$ \frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2} $$
    where:
    *   $u(x, t)$ is the dependent variable (e.g., temperature, concentration).
    *   $x$ is the spatial coordinate.
    *   $t$ is the time coordinate.
    *   $\alpha$ is the thermal diffusivity or diffusion coefficient (a positive constant).
*   **Physical Significance:**
    *   **Heat Conduction:** How temperature distributes in a material over time.
    *   **Diffusion:** How concentration of a substance spreads through a medium.
*   **Boundary and Initial Conditions:** To solve a parabolic PDE, we need:
    *   **Initial Condition (IC):** The state of the system at the beginning ($t=0$). For example, $u(x, 0) = f(x)$.
    *   **Boundary Conditions (BCs):** The conditions at the spatial boundaries of the domain. Common types include:
        *   **Dirichlet BCs:** The value of $u$ is specified at the boundaries (e.g., $u(0, t) = T_1$, $u(L, t) = T_2$).
        *   **Neumann BCs:** The derivative of $u$ (related to flux) is specified at the boundaries (e.g., $\frac{\partial u}{\partial x}(0, t) = C_1$, $\frac{\partial u}{\partial x}(L, t) = C_2$).
        *   **Robin BCs:** A linear combination of $u$ and its derivative is specified.

---

### **2. Finite Difference Method (FDM) for Parabolic PDEs**

*   **Concept:** FDM approximates the continuous partial derivatives in the PDE by replacing them with discrete differences based on a grid of points in the spatial and temporal domains.
*   **Discretization:**
    *   **Spatial Domain:** Divide the spatial domain (e.g., from $x=0$ to $x=L$) into $M$ intervals of width $\Delta x = L/M$. The spatial grid points are $x_i = i \Delta x$, for $i = 0, 1, \dots, M$.
    *   **Temporal Domain:** Divide the time domain into steps of size $\Delta t$. The time points are $t_n = n \Delta t$, for $n = 0, 1, 2, \dots$.
    *   **Notation:** Let $u_i^n$ denote the approximate value of $u(x_i, t_n)$ at spatial grid point $x_i$ and time step $t_n$.

*   **Approximating Derivatives:**
    *   **First Time Derivative ($\frac{\partial u}{\partial t}$):**
        *   **Forward Difference (Explicit):** $\frac{u_i^{n+1} - u_i^n}{\Delta t}$
        *   **Backward Difference (Implicit):** $\frac{u_i^n - u_i^{n-1}}{\Delta t}$
        *   **Central Difference (Crank-Nicolson):** $\frac{u_i^{n+1} - u_i^n}{\Delta t}$ (applied to the average of time levels)
    *   **Second Spatial Derivative ($\frac{\partial^2 u}{\partial x^2}$):**
        *   **Central Difference (Second Order Accurate):** $\frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{(\Delta x)^2}$

---

### **3. Explicit Finite Difference Method – Bender-Schmidt Method**

*   **Concept:** This method uses a forward difference in time and a central difference in space. The value of $u$ at the next time step ($n+1$) is calculated directly from values at the current time step ($n$). This makes it "explicit" because we don't need to solve a system of equations.
*   **Derivation (Bender-Schmidt Method):**
    Consider the heat equation: $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$
    Apply the forward difference for $\frac{\partial u}{\partial t}$ and the central difference for $\frac{\partial^2 u}{\partial x^2}$ at grid point $(x_i, t_n)$:
    $$ \frac{u_i^{n+1} - u_i^n}{\Delta t} = \alpha \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{(\Delta x)^2} $$
    Rearranging to solve for $u_i^{n+1}$:
    $$ u_i^{n+1} = u_i^n + \frac{\alpha \Delta t}{(\Delta x)^2} (u_{i+1}^n - 2u_i^n + u_{i-1}^n) $$
    Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. This parameter is called the **Courant number** or **diffusion number**.
    $$ u_i^{n+1} = u_i^n + r (u_{i+1}^n - 2u_i^n + u_{i-1}^n) $$
    $$ u_i^{n+1} = (1 - 2r)u_i^n + r(u_{i+1}^n + u_{i-1}^n) $$
    This is the **Bender-Schmidt formula**.

*   **Stability Condition:** The explicit method is only conditionally stable. For the Bender-Schmidt method, the solution remains bounded and converges to the true solution only if:
    $$ r = \frac{\alpha \Delta t}{(\Delta x)^2} \le \frac{1}{2} $$
    *   **Consequence of Violating the Condition:** If $r > 1/2$, the numerical solution will become oscillatory and grow unboundedly, leading to physically meaningless results. This means that to maintain stability, $\Delta t$ must be chosen sufficiently small relative to $(\Delta x)^2$. This can be a significant limitation as it requires many small time steps.

*   **Accuracy:** The Bender-Schmidt method is first-order accurate in time ($\mathcal{O}(\Delta t)$) and second-order accurate in space ($\mathcal{O}((\Delta x)^2)$).

*   **Example (Bender-Schmidt):**
    Solve $u_t = u_{xx}$ with $u(x, 0) = \sin(\pi x)$ for $0 \le x \le 1$, and $u(0, t) = u(1, t) = 0$.
    Let $\Delta x = 0.1$, $\Delta t = 0.001$.
    Then $r = \frac{0.001}{(0.1)^2} = \frac{0.001}{0.01} = 0.1$. Since $0.1 \le 0.5$, the method is stable.

    *   **Time $t=0$ (Initial Condition):**
        $u_i^0 = \sin(\pi x_i)$ for $i=0, \dots, 10$.
        $u_0^0 = \sin(0) = 0$
        $u_1^0 = \sin(\pi \cdot 0.1) \approx 0.3090$
        $u_2^0 = \sin(\pi \cdot 0.2) \approx 0.5878$
        ...
        $u_{10}^0 = \sin(\pi \cdot 1) = 0$

    *   **Time $t=\Delta t = 0.001$ (Calculate $u_i^1$):**
        For $i=1, \dots, 9$ (internal points):
        $u_i^1 = (1 - 2 \cdot 0.1)u_i^0 + 0.1(u_{i+1}^0 + u_{i-1}^0)$
        $u_i^1 = 0.8 u_i^0 + 0.1(u_{i+1}^0 + u_{i-1}^0)$

        Example for $u_1^1$:
        $u_1^1 = 0.8 u_1^0 + 0.1(u_2^0 + u_0^0)$
        $u_1^1 = 0.8 \sin(0.1\pi) + 0.1(\sin(0.2\pi) + \sin(0))$
        $u_1^1 \approx 0.8(0.3090) + 0.1(0.5878 + 0) \approx 0.2472 + 0.0588 = 0.3060$

    *   **Boundary Conditions:**
        $u_0^{n+1} = 0$ for all $n$.
        $u_{10}^{n+1} = 0$ for all $n$.

---

### **4. Crank-Nicolson Implicit Method**

*   **Concept:** This method uses a central difference in time (averaging forward and backward differences) and a central difference in space. It's an "implicit" method because the value at the next time step ($n+1$) depends on values at the same time step ($n+1$) at neighboring spatial points. This requires solving a system of linear equations at each time step.
*   **Derivation:**
    Consider the heat equation: $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$
    The Crank-Nicolson method approximates the time derivative at the midpoint in time, $t_{n+1/2}$, by averaging the spatial derivatives at time $t_n$ and $t_{n+1}$:
    $$ \frac{u_i^{n+1} - u_i^n}{\Delta t} = \frac{\alpha}{2} \left( \frac{\partial^2 u}{\partial x^2} \Big|_{x_i, t_{n+1}} + \frac{\partial^2 u}{\partial x^2} \Big|_{x_i, t_n} \right) $$
    Using central differences for the spatial derivatives:
    $$ \frac{u_i^{n+1} - u_i^n}{\Delta t} = \frac{\alpha}{2} \left( \frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{(\Delta x)^2} + \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{(\Delta x)^2} \right) $$
    Rearrange and group terms by time level ($n+1$ and $n$). Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
    $$ \frac{u_i^{n+1} - u_i^n}{\Delta t} = \frac{r}{2 \Delta t} (u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1} - (u_{i+1}^n - 2u_i^n + u_{i-1}^n)) $$
    $$ u_i^{n+1} - u_i^n = \frac{r}{2} (u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}) - \frac{r}{2} (u_{i+1}^n - 2u_i^n + u_{i-1}^n) $$
    Move terms from the right side's time level $n$ to the left side:
    $$ u_i^{n+1} + \frac{r}{2} (2u_i^{n+1} - u_{i+1}^{n+1} - u_{i-1}^{n+1}) = u_i^n + \frac{r}{2} (2u_i^n - u_{i+1}^n - u_{i-1}^n) $$
    Rearranging to emphasize terms at time level $n+1$ on the left and $n$ on the right:
    $$ -\frac{r}{2} u_{i-1}^{n+1} + (1+r) u_i^{n+1} - \frac{r}{2} u_{i+1}^{n+1} = \frac{r}{2} u_{i-1}^n + (1-r) u_i^n + \frac{r}{2} u_{i+1}^n $$
    This equation must be solved for each internal spatial point $i=1, \dots, M-1$ at each time step. This results in a system of linear equations.

*   **System of Equations:**
    For $i = 1, \dots, M-1$:
    $$ -\frac{r}{2} u_{i-1}^{n+1} + (1+r) u_i^{n+1} - \frac{r}{2} u_{i+1}^{n+1} = \text{RHS}_i^n $$
    where $\text{RHS}_i^n = \frac{r}{2} u_{i-1}^n + (1-r) u_i^n + \frac{r}{2} u_{i+1}^n$.

    Let's write this out for the internal points:
    For $i=1$: $-\frac{r}{2} u_0^{n+1} + (1+r) u_1^{n+1} - \frac{r}{2} u_2^{n+1} = \text{RHS}_1^n$
    For $i=2$: $-\frac{r}{2} u_1^{n+1} + (1+r) u_2^{n+1} - \frac{r}{2} u_3^{n+1} = \text{RHS}_2^n$
    ...
    For $i=M-1$: $-\frac{r}{2} u_{M-2}^{n+1} + (1+r) u_{M-1}^{n+1} - \frac{r}{2} u_M^{n+1} = \text{RHS}_{M-1}^n$

    **Incorporating Boundary Conditions:**
    If Dirichlet boundary conditions are used, $u_0^{n+1}$ and $u_M^{n+1}$ are known. They can be substituted into the first and last equations, respectively, to reduce the system to $M-1$ equations for $M-1$ unknowns ($u_1^{n+1}$ to $u_{M-1}^{n+1}$).

    Example with $u_0^{n+1} = A$ and $u_M^{n+1} = B$:
    For $i=1$: $(1+r) u_1^{n+1} - \frac{r}{2} u_2^{n+1} = \text{RHS}_1^n + \frac{r}{2} A$
    For $i=2$: $-\frac{r}{2} u_1^{n+1} + (1+r) u_2^{n+1} - \frac{r}{2} u_3^{n+1} = \text{RHS}_2^n$
    ...
    For $i=M-1$: $-\frac{r}{2} u_{M-2}^{n+1} + (1+r) u_{M-1}^{n+1} = \text{RHS}_{M-1}^n + \frac{r}{2} B$

    This system can be written in matrix form: $C \mathbf{u}^{n+1} = \mathbf{d}^n$, where $C$ is a tridiagonal matrix.
    $$
    \begin{pmatrix}
    1+r & -r/2 & 0 & \dots & 0 \\
    -r/2 & 1+r & -r/2 & \dots & 0 \\
    0 & -r/2 & 1+r & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & -r/2 & 1+r
    \end{pmatrix}
    \begin{pmatrix}
    u_1^{n+1} \\
    u_2^{n+1} \\
    \vdots \\
    u_{M-1}^{n+1}
    \end{pmatrix}
    =
    \begin{pmatrix}
    \text{RHS}_1^n + \frac{r}{2} A \\
    \text{RHS}_2^n \\
    \vdots \\
    \text{RHS}_{M-1}^n + \frac{r}{2} B
    \end{pmatrix}
    $$
    This tridiagonal system can be efficiently solved using the **Thomas algorithm** (also known as the TDMA - Tridiagonal Matrix Algorithm).

*   **Stability:** The Crank-Nicolson method is **unconditionally stable**. This means it is stable for any value of $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. This is a significant advantage over the explicit method, as it allows for larger time steps, potentially reducing computational time.

*   **Accuracy:** The Crank-Nicolson method is second-order accurate in time ($\mathcal{O}((\Delta t)^2)$) and second-order accurate in space ($\mathcal{O}((\Delta x)^2)$). This higher accuracy in time is due to the averaging of the time derivative.

*   **Advantages:**
    *   Unconditional stability.
    *   Higher accuracy in time.
    *   Often preferred for parabolic problems where stability is a concern or where larger time steps are desired.

*   **Disadvantages:**
    *   Requires solving a system of linear equations at each time step, which is computationally more expensive per time step than the explicit method.
    *   Implementation is more complex due to the need for a linear solver.

*   **Example (Crank-Nicolson):**
    Solve $u_t = u_{xx}$ with $u(x, 0) = \sin(\pi x)$ for $0 \le x \le 1$, and $u(0, t) = u(1, t) = 0$.
    Let $\Delta x = 0.1$, $\Delta t = 0.01$.
    Then $r = \frac{0.01}{(0.1)^2} = \frac{0.01}{0.01} = 1$. The explicit method would be unstable here, but Crank-Nicolson is stable.

    *   **Time $t=0$ (Initial Condition):**
        $u_i^0 = \sin(\pi x_i)$ for $i=0, \dots, 10$.

    *   **Time $t=\Delta t = 0.01$ (Calculate $u_i^1$):**
        We need to solve the system of equations for $i=1, \dots, 9$:
        $-\frac{1}{2} u_{i-1}^{1} + (1+1) u_i^{1} - \frac{1}{2} u_{i+1}^{1} = \frac{1}{2} u_{i-1}^0 + (1-1) u_i^0 + \frac{1}{2} u_{i+1}^0$
        $-\frac{1}{2} u_{i-1}^{1} + 2 u_i^{1} - \frac{1}{2} u_{i+1}^{1} = \frac{1}{2} (u_{i-1}^0 + u_{i+1}^0)$

        Boundary conditions: $u_0^1 = 0$, $u_{10}^1 = 0$.

        The system for $i=1, \dots, 9$ is:
        $i=1$: $2 u_1^1 - \frac{1}{2} u_2^1 = \frac{1}{2} (u_0^0 + u_2^0)$
        $i=2$: $-\frac{1}{2} u_1^1 + 2 u_2^1 - \frac{1}{2} u_3^1 = \frac{1}{2} (u_1^0 + u_3^0)$
        ...
        $i=9$: $-\frac{1}{2} u_8^1 + 2 u_9^1 = \frac{1}{2} (u_8^0 + u_{10}^0)$

        This system is solved using the Thomas algorithm to find $u_1^1, \dots, u_9^1$.

---

### **5. Comparison of Methods**

| Feature           | Bender-Schmidt (Explicit)                               | Crank-Nicolson (Implicit)                                   |
| :---------------- | :------------------------------------------------------ | :---------------------------------------------------------- |
| **Time Derivative** | Forward Difference ($\mathcal{O}(\Delta t)$)             | Centered Difference (Average) ($\mathcal{O}((\Delta t)^2)$) |
| **Spatial Derivative** | Central Difference ($\mathcal{O}((\Delta x)^2)$)        | Central Difference ($\mathcal{O}((\Delta x)^2)$)            |
| **Stability**     | Conditionally stable ($r \le 0.5$)                      | Unconditionally stable                                      |
| **Accuracy**      | $\mathcal{O}(\Delta t) + \mathcal{O}((\Delta x)^2)$     | $\mathcal{O}((\Delta t)^2) + \mathcal{O}((\Delta x)^2)$     |
| **Computational Cost per Time Step** | Low (direct calculation)                             | High (solving a tridiagonal system)                         |
| **Implementation**| Simpler                                                 | More complex                                                |
| **$\Delta t$ constraint** | Strict (small $\Delta t$ needed for stability) | No strict constraint, larger $\Delta t$ possible          |

**Important Decision:**

*   If **simplicity and ease of implementation** are paramount, and the problem allows for small time steps, the **Bender-Schmidt method** might be sufficient.
*   If **accuracy and stability** are critical, especially with larger time intervals or when dealing with stiff diffusion problems, the **Crank-Nicolson method** is generally preferred, despite its higher computational cost per time step.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Consider the heat equation $u_t = u_{xx}$ with $u(x, 0) = x(1-x)$ for $0 \le x \le 1$, and $u(0, t) = u(1, t) = 0$.
You want to solve this using the Bender-Schmidt explicit method.
(a) Write down the finite difference equation for $u_i^{n+1}$.
(b) Determine the stability condition for this method.
(c) If you choose $\Delta x = 0.1$, what is the maximum allowed value for $\Delta t$ to ensure stability?

**Answer 1:**
(a) The finite difference equation is:
$u_i^{n+1} = (1 - 2r)u_i^n + r(u_{i+1}^n + u_{i-1}^n)$, where $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
For $u_t = u_{xx}$, $\alpha = 1$. So, $r = \frac{\Delta t}{(\Delta x)^2}$.
$u_i^{n+1} = (1 - 2\frac{\Delta t}{(\Delta x)^2})u_i^n + \frac{\Delta t}{(\Delta x)^2}(u_{i+1}^n + u_{i-1}^n)$.

(b) The stability condition for the Bender-Schmidt method is $r \le \frac{1}{2}$.
This means $\frac{\Delta t}{(\Delta x)^2} \le \frac{1}{2}$.

(c) Given $\Delta x = 0.1$:
$\frac{\Delta t}{(0.1)^2} \le \frac{1}{2}$
$\frac{\Delta t}{0.01} \le \frac{1}{2}$
$\Delta t \le 0.005$
The maximum allowed value for $\Delta t$ is $0.005$.

---

**Question 2:**
For the same problem as in Question 1, you decide to use the Crank-Nicolson implicit method.
(a) Write down the finite difference equation for $u_i^{n+1}$ in terms of $u_{i-1}^{n+1}, u_i^{n+1}, u_{i+1}^{n+1}$ and values at time $n$.
(b) Explain why this method is called "implicit" and what computational procedure it requires.
(c) What is the stability characteristic of the Crank-Nicolson method?

**Answer 2:**
(a) The finite difference equation for Crank-Nicolson is:
$-\frac{r}{2} u_{i-1}^{n+1} + (1+r) u_i^{n+1} - \frac{r}{2} u_{i+1}^{n+1} = \frac{r}{2} u_{i-1}^n + (1-r) u_i^n + \frac{r}{2} u_{i+1}^n$,
where $r = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{\Delta t}{(\Delta x)^2}$ for $\alpha=1$.

(b) This method is called "implicit" because the unknown values at the next time step ($u_i^{n+1}$) appear on both sides of the equation and are coupled with their spatial neighbors ($u_{i-1}^{n+1}, u_{i+1}^{n+1}$). This means that to find the values at time $n+1$, one must solve a system of linear equations simultaneously for all interior spatial points at that time step. This typically involves techniques like Gaussian elimination or the Thomas algorithm for tridiagonal systems.

(c) The Crank-Nicolson method is **unconditionally stable**. This means it is stable for any value of $r$, allowing for larger time steps compared to explicit methods without sacrificing stability.

---

**Question 3:**
You are solving the heat equation $u_t = 4 u_{xx}$ with $u(x,0) = 0$ for $0 \le x \le 1$ and $u(0,t) = t$, $u(1,t) = 0$.
You choose $\Delta x = 0.2$.
(a) Using the Bender-Schmidt method, what is the maximum $\Delta t$ allowed for stability?
(b) If you instead use Crank-Nicolson, can you choose $\Delta t = 0.01$? Explain why or why not in terms of stability and computational cost.

**Answer 3:**
Given $u_t = 4 u_{xx}$, so $\alpha = 4$.
$\Delta x = 0.2$.

(a) For Bender-Schmidt:
Stability condition is $r \le \frac{1}{2}$, where $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
$r = \frac{4 \Delta t}{(0.2)^2} = \frac{4 \Delta t}{0.04} = 100 \Delta t$.
So, $100 \Delta t \le \frac{1}{2} \implies \Delta t \le \frac{1}{200} = 0.005$.
The maximum $\Delta t$ for stability is $0.005$.

(b) If using Crank-Nicolson with $\Delta t = 0.01$:
The value of $r = 100 \Delta t = 100 \times 0.01 = 1$.
*   **Stability:** The Crank-Nicolson method is **unconditionally stable**, so $\Delta t = 0.01$ is perfectly acceptable from a stability standpoint, even though it would be highly unstable for the explicit method.
*   **Computational Cost:** While stable, $\Delta t = 0.01$ represents a $100\%$ increase in $\Delta t$ compared to the maximum stable step for the explicit method (0.005). This means fewer time steps are needed to cover the same duration. However, each time step for Crank-Nicolson requires solving a tridiagonal system of equations, which is computationally more intensive than the direct calculation of the explicit method. The overall time to reach a solution might be faster with Crank-Nicolson if the reduction in the number of time steps outweighs the increased cost per step.

---

### **7. Important Points to Remember**

*   **Explicit Methods (Bender-Schmidt):**
    *   Easy to implement.
    *   Direct calculation of $u$ at the new time step.
    *   **Major drawback: Stability is conditional**. Requires small $\Delta t$ relative to $(\Delta x)^2$ via the Courant number $r = \frac{\alpha \Delta t}{(\Delta x)^2} \le 0.5$.
    *   First-order accurate in time.

*   **Implicit Methods (Crank-Nicolson):**
    *   More complex to implement as they require solving a system of linear equations (often tridiagonal) at each time step.
    *   **Major advantage: Unconditional stability**. Allows for larger $\Delta t$.
    *   Second-order accurate in time.
    *   Generally preferred for accuracy and efficiency when large time steps are beneficial.

*   **Courant Number ($r$):** A crucial parameter for explicit methods. Its value dictates stability and influences accuracy.

*   **Choice of Method:** The choice between explicit and implicit methods depends on the specific problem, desired accuracy, and computational resources. For many practical engineering problems, implicit methods like Crank-Nicolson are favored due to their stability properties.

---
