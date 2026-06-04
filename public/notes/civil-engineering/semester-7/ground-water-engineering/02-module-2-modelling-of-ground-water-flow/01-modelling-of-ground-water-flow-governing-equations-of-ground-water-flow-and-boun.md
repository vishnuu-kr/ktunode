---
title: "Modelling of ground water flow- governing equations of ground water flow and boundary conditions (basic ideas only), solution of partial differential equation of ground water flow for 1D steady ground water flow in homogenous aquifers (confined and unconfined) using finite difference method (uniform mesh interval only)"
subject: "GROUND WATER ENGINEERING"
module: "Module 2: Modelling of ground water flow"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811534"
status: "completed"
scrapedAt: "2026-05-20T19:00:04.802Z"
---
# GROUND WATER ENGINEERING - Module 2: Modelling of Ground Water Flow

## Topic: Modelling of Ground Water Flow - Governing Equations and Boundary Conditions (Basic Ideas), Solution of 1D Steady Ground Water Flow in Homogenous Aquifers using Finite Difference Method

---

### **Introduction to Groundwater Flow Modelling**

*   **What is Groundwater Modelling?**
    *   A mathematical representation of a real groundwater system.
    *   Used to understand groundwater flow patterns, predict system behavior under various stresses (e.g., pumping, recharge), and test management scenarios.
*   **Why Model Groundwater Flow?**
    *   Predicting water table response to pumping.
    *   Estimating aquifer yield.
    *   Assessing the impact of land use changes or contamination.
    *   Designing well fields.
    *   Investigating groundwater-surface water interactions.
*   **Types of Groundwater Models:**
    *   **Analytical Models:** Simple, closed-form mathematical solutions for idealized conditions. Limited applicability.
    *   **Numerical Models:** Solve governing equations using numerical approximation techniques (e.g., Finite Difference, Finite Element). More flexible and widely used.

---

### **Governing Equations of Groundwater Flow (Basic Ideas)**

The fundamental principle governing groundwater flow is the **conservation of mass**. This, combined with Darcy's Law, leads to the governing equations.

*   **Darcy's Law:**
    *   Describes the flow of groundwater through a porous medium.
    *   **Statement:** The discharge velocity is directly proportional to the hydraulic gradient and the permeability of the medium.
    *   **Equation (1D):** $q_x = -K \frac{dh}{dx}$
        *   $q_x$: Specific discharge (Darcy flux) in the x-direction ($L/T$)
        *   $K$: Hydraulic conductivity ($L/T$) - measure of how easily water flows through the medium.
        *   $\frac{dh}{dx}$: Hydraulic gradient in the x-direction ($L/L$) - change in hydraulic head with distance.
    *   **Vector Form (3D):** $\mathbf{q} = -K \nabla h$
        *   $\mathbf{q}$: Specific discharge vector
        *   $\nabla h$: Hydraulic head gradient vector

*   **Continuity Equation:**
    *   States that mass is conserved; the rate at which water enters a control volume must equal the rate at which it leaves, plus any change in storage within the volume.
    *   **Inflow - Outflow + Sources/Sinks = Change in Storage**

*   **Combining Darcy's Law and Continuity (General Governing Equation):**
    *   For **homogeneous and isotropic** media (K is constant in all directions):
        *   **Confined Aquifer (saturated flow, constant saturated thickness):**
            *   Governing Equation: $\frac{\partial}{\partial x}(K_{xx} \frac{\partial h}{\partial x}) + \frac{\partial}{\partial y}(K_{yy} \frac{\partial h}{\partial y}) + \frac{\partial}{\partial z}(K_{zz} \frac{\partial h}{\partial z}) + W = S_s \frac{\partial h}{\partial t}$
            *   Where:
                *   $h$: Hydraulic head ($L$)
                *   $K_{xx}, K_{yy}, K_{zz}$: Hydraulic conductivity components ($L/T$)
                *   $W$: Volumetric flux per unit volume from sources/sinks ($1/T$) (e.g., recharge, pumping)
                *   $S_s$: Specific storage ($1/L$) - volume of water released from storage per unit volume of aquifer per unit decline in head.
                *   $t$: Time ($T$)
            *   **For 1D Steady State, Homogeneous & Isotropic:**
                *   $\frac{d}{dx}(K \frac{dh}{dx}) = 0$
                *   Since K is constant, $K \frac{d^2h}{dx^2} = 0 \implies \frac{d^2h}{dx^2} = 0$

        *   **Unconfined Aquifer (flow is driven by changes in water table, saturated thickness varies):**
            *   The equation is similar, but the term related to storage ($S_s$) is often replaced by the **storativity (S)**, which is $S = S_s b$, where $b$ is the saturated thickness.
            *   The governing equation becomes more complex as $b$ is a function of $h$ ($b = h - z_b$, where $z_b$ is the bottom elevation).
            *   For **1D Steady State, Homogeneous & Isotropic:**
                *   The governing equation for head ($h$) is the same as confined: $\frac{d^2h}{dx^2} = 0$.
                *   However, it's important to remember that $h$ in an unconfined aquifer represents the water table elevation. The specific discharge is related to the saturated thickness.

*   **Important Note:** For today's focus, we'll primarily deal with the **1D Steady State, Homogeneous & Isotropic** case: $\frac{d^2h}{dx^2} = 0$.

---

### **Boundary Conditions (Basic Ideas)**

Boundary conditions are essential to define the specific problem being solved and to obtain a unique solution. They specify the state of the system at its boundaries.

*   **Types of Boundary Conditions:**
    1.  **Dirichlet Boundary Condition (Type 1): Specified Head:**
        *   The hydraulic head ($h$) is specified at a boundary.
        *   **Example:** A river or lake connected to the aquifer where the water level is constant.
        *   **Mathematical Form:** $h = H_0$ on boundary $\Gamma_1$

    2.  **Neumann Boundary Condition (Type 2): Specified Flux:**
        *   The specific discharge ($q$) is specified at a boundary.
        *   **Example:** Impermeable boundaries (no flow across), or specified recharge/discharge zones.
        *   **Mathematical Form:** $-K \frac{dh}{dn} = q_0$ on boundary $\Gamma_2$
            *   $q_0$: Specified flux across the boundary ($L/T$)
            *   $\mathbf{n}$: Normal vector to the boundary

    3.  **Cauchy Boundary Condition (Type 3): Specified Head-Dependent Flux:**
        *   The flux across the boundary is proportional to the difference in head between the boundary and an external point.
        *   **Example:** Flow from a leaky confining layer or flow between a stream and an aquifer where the stream stage is variable.
        *   **Mathematical Form:** $-K \frac{dh}{dn} = P (h - h_{ext})$ on boundary $\Gamma_3$
            *   $P$: Leakage factor or proportionality constant ($L/T$)
            *   $h_{ext}$: External head ($L$)

*   **Application to 1D Steady Flow:**
    *   For a 1D domain from $x=0$ to $x=L$:
        *   **At $x=0$:**
            *   Dirichlet: $h(0) = h_0$
            *   Neumann: $-K \frac{dh}{dx}(0) = q_0$ (e.g., impermeable boundary means $q_0 = 0$)
        *   **At $x=L$:**
            *   Dirichlet: $h(L) = h_L$
            *   Neumann: $-K \frac{dh}{dx}(L) = q_L$ (e.g., impermeable boundary means $q_L = 0$)

---

### **Solution of 1D Steady Groundwater Flow in Homogeneous Aquifers using Finite Difference Method (Uniform Mesh Interval)**

The Finite Difference Method (FDM) approximates the continuous derivatives in the governing partial differential equation (PDE) with algebraic expressions involving values of the dependent variable (hydraulic head, $h$) at discrete points in space.

*   **The Governing Equation for 1D Steady Flow:**
    *   $\frac{d^2h}{dx^2} = 0$

*   **Discretization of the Domain:**
    *   Divide the spatial domain (e.g., along the x-axis) into $N$ segments of equal width, $\Delta x$.
    *   This creates $N+1$ discrete points or "nodes," indexed from $i=0$ to $i=N$.
    *   The position of node $i$ is $x_i = i \Delta x$.
    *   The hydraulic head at node $i$ is denoted as $h_i$.

*   **Finite Difference Approximations:**
    *   We approximate the derivatives of $h$ with respect to $x$ using differences in $h$ between adjacent nodes.
    *   **First Derivative:**
        *   Forward difference: $\frac{dh}{dx} \approx \frac{h_{i+1} - h_i}{\Delta x}$
        *   Backward difference: $\frac{dh}{dx} \approx \frac{h_i - h_{i-1}}{\Delta x}$
        *   Central difference: $\frac{dh}{dx} \approx \frac{h_{i+1} - h_{i-1}}{2 \Delta x}$ (More accurate)
    *   **Second Derivative:**
        *   We use the central difference approximation for the first derivative applied twice.
        *   $\frac{d^2h}{dx^2} = \frac{d}{dx} \left(\frac{dh}{dx}\right)$
        *   Using central difference for the outer derivative:
            *   $\frac{d}{dx} \left(\frac{dh}{dx}\right) \approx \frac{\left(\frac{dh}{dx}\right)_{i+1/2} - \left(\frac{dh}{dx}\right)_{i-1/2}}{\Delta x}$
        *   Now approximate the first derivatives at the midpoints $(i+1/2)$ and $(i-1/2)$ using central differences:
            *   $\left(\frac{dh}{dx}\right)_{i+1/2} \approx \frac{h_{i+1} - h_i}{\Delta x}$
            *   $\left(\frac{dh}{dx}\right)_{i-1/2} \approx \frac{h_i - h_{i-1}}{\Delta x}$
        *   Substituting back:
            *   $\frac{d^2h}{dx^2} \approx \frac{\frac{h_{i+1} - h_i}{\Delta x} - \frac{h_i - h_{i-1}}{\Delta x}}{\Delta x}$
            *   $\frac{d^2h}{dx^2} \approx \frac{h_{i+1} - h_i - h_i + h_{i-1}}{(\Delta x)^2}$
            *   **Finite Difference Approximation:** $\frac{h_{i+1} - 2h_i + h_{i-1}}{(\Delta x)^2}$

*   **Applying FDM to the Governing Equation:**
    *   Substitute the finite difference approximation for the second derivative into the governing equation $\frac{d^2h}{dx^2} = 0$:
        *   $\frac{h_{i+1} - 2h_i + h_{i-1}}{(\Delta x)^2} = 0$
    *   Since $(\Delta x)^2$ is not zero, we can multiply both sides by it:
        *   $h_{i+1} - 2h_i + h_{i-1} = 0$
    *   Rearranging to solve for the unknown head at the central node $h_i$:
        *   $2h_i = h_{i+1} + h_{i-1}$
        *   **The Finite Difference Equation (FDE) for 1D Steady Flow:** $h_i = \frac{h_{i+1} + h_{i-1}}{2}$
    *   **Interpretation:** The head at any interior node is the average of the heads at its two neighboring nodes. This is a linear relationship.

*   **Incorporating Boundary Conditions:**

    1.  **Confined Aquifer (Homogeneous, Isotropic, 1D Steady Flow):**
        *   **Problem:** An aquifer of length $L$, with constant hydraulic conductivity $K$.
        *   **Boundary Conditions:**
            *   At $x=0$ (node $i=0$): $h_0 = H_1$ (Dirichlet)
            *   At $x=L$ (node $i=N$): $h_N = H_2$ (Dirichlet)
        *   **Discretization:** $N$ segments, $N+1$ nodes. $x_i = i \Delta x$, where $\Delta x = L/N$.
        *   **The FDE applies to interior nodes:** $i = 1, 2, ..., N-1$.
            *   $h_i = \frac{h_{i+1} + h_{i-1}}{2}$ for $i = 1, ..., N-1$.
        *   **System of Equations:** We have $N-1$ equations for the $N-1$ unknown heads ($h_1, h_2, ..., h_{N-1}$). The boundary heads ($h_0, h_N$) are known.
        *   **Solution:** This is a system of linear equations. Since the FDE is linear, and the boundary conditions are linear, the solution will be linear.
        *   **Analytical Solution (for comparison):** For $\frac{d^2h}{dx^2} = 0$, the general solution is $h(x) = Ax + B$. Applying boundary conditions $h(0)=H_1$ and $h(L)=H_2$:
            *   $h(0) = B = H_1$
            *   $h(L) = AL + B = H_2 \implies AL + H_1 = H_2 \implies A = \frac{H_2 - H_1}{L}$
            *   So, $h(x) = \frac{H_2 - H_1}{L} x + H_1$.
            *   This shows that in a 1D homogeneous aquifer under steady-state, the hydraulic head profile is linear. The finite difference method will approximate this linear profile.

    2.  **Unconfined Aquifer (Homogeneous, Isotropic, 1D Steady Flow):**
        *   **Governing Equation:** For steady state, the equation for the water table elevation ($h$) is the same as the confined case: $\frac{d^2h}{dx^2} = 0$.
        *   **Finite Difference Equation:** Also the same: $h_i = \frac{h_{i+1} + h_{i-1}}{2}$.
        *   **Boundary Conditions:**
            *   **Dirichlet (Specified Water Table):** If the water table elevation is known at a boundary (e.g., a lake edge), then $h_0 = H_1$ or $h_N = H_2$.
            *   **Neumann (Specified Flux):** If there is a known flux across a boundary (e.g., impermeable boundary with $q=0$ or seepage face), we need to apply the finite difference approximation to the flux term $-K \frac{dh}{dx}$.
                *   **Example: Impermeable Boundary at $x=0$ (Node $i=0$):**
                    *   The flux across the boundary is zero: $-K \frac{dh}{dx}(0) = 0$.
                    *   Using backward difference at $i=0$: $-K \frac{h_0 - h_{-1}}{\Delta x} = 0$. This introduces a "fictitious" node $h_{-1}$.
                    *   Since $K$ and $\Delta x$ are not zero, we must have $h_0 - h_{-1} = 0 \implies h_{-1} = h_0$.
                    *   Now, consider the FDE for the first interior node ($i=1$): $h_1 = \frac{h_2 + h_0}{2}$. This equation is valid.
                    *   Alternatively, we can express the flux at the boundary using a central difference involving the boundary node and the first interior node. For $i=0$, the flux is often approximated as: $-K \frac{h_1 - h_0}{\Delta x} = 0 \implies h_1 = h_0$. This is incorrect for an impermeable boundary unless $h_1=h_0$ which implies zero gradient.
                    *   **Correct application of Neumann boundary at $x=0$ ($i=0$):** The FDE is applied to the node itself using the finite difference approximation of the governing equation.
                        *   The governing equation is $\frac{d}{dx}(K\frac{dh}{dx}) + W = 0$. For steady, no source/sink, $\frac{d}{dx}(K\frac{dh}{dx}) = 0$.
                        *   Apply this to the domain from $-\Delta x/2$ to $\Delta x/2$ centered at $i=0$. The flux across $x=0$ is zero.
                        *   The average flux into node 0 from the left is $q_{left} = -K\frac{h_0-h_{-1}}{\Delta x}$. The average flux into node 0 from the right is $q_{right} = -K\frac{h_1-h_0}{\Delta x}$.
                        *   If boundary at $i=0$ is impermeable, the net flux into the "cell" centered at node 0 must be zero.
                        *   A common approach is to discretize the flux balance for the control volume around the boundary node. For $i=0$ with impermeable boundary, the flux entering from the right is balanced by no flux from the left: $-K \frac{h_1 - h_0}{\Delta x} = 0 \implies h_1 = h_0$. This is still problematic.

                        *   **Revisit the second derivative approximation for the boundary node:**
                            *   We need to discretize the governing equation $\frac{d^2h}{dx^2}=0$ at each node.
                            *   At $i=0$, $\frac{h_1 - 2h_0 + h_{-1}}{(\Delta x)^2} = 0$.
                            *   For an impermeable boundary at $x=0$, the flux across $x=0$ is 0. This means the gradient at $x=0$ is 0.
                            *   If we use a central difference approximation for the gradient at $x=0$: $\frac{h_1 - h_{-1}}{2\Delta x} = 0 \implies h_{-1} = h_1$.
                            *   Substitute this into the FDE for node 0: $\frac{h_1 - 2h_0 + h_1}{(\Delta x)^2} = 0 \implies 2h_1 - 2h_0 = 0 \implies h_1 = h_0$.
                            *   **So, for an impermeable boundary at $x=0$, the condition is $h_1 = h_0$.** This implies the head is constant at the boundary and the first interior node.

                *   **Example: Specified Flux at $x=L$ (Node $i=N$):**
                    *   Let $q_L$ be the specified flux (e.g., recharge or discharge rate per unit area).
                    *   Neumann condition: $-K \frac{dh}{dx}(L) = q_L$.
                    *   Using backward difference at $x=L$: $-K \frac{h_N - h_{N-1}}{\Delta x} = q_L$.
                    *   Rearranging to solve for $h_N$: $h_N - h_{N-1} = -\frac{q_L \Delta x}{K}$.
                    *   $h_N = h_{N-1} - \frac{q_L \Delta x}{K}$. This provides an equation relating $h_N$ and $h_{N-1}$.

        *   **General Approach for Neumann Boundary:** The FDEs are formulated for all interior nodes. For boundary nodes where a Neumann condition is specified, the FDE is modified to incorporate the flux information.

    3.  **Example with Mixed Boundary Conditions (Confined):**
        *   Domain $0 \le x \le L$.
        *   $i=0$: $h_0 = H_1$ (Dirichlet)
        *   $i=N$: $-K \frac{dh}{dx}(L) = Q$ (Neumann, where $Q$ is flux per unit length, e.g., pumping).
        *   FDE for interior nodes ($i=1, ..., N-1$): $h_i = \frac{h_{i+1} + h_{i-1}}{2}$.
        *   For the boundary at $i=N$, we use the Neumann condition: $-K \frac{h_N - h_{N-1}}{\Delta x} = Q$.
        *   Rearranging: $h_N = h_{N-1} - \frac{Q \Delta x}{K}$.
        *   Now we have a system of $N$ equations for $N$ unknowns ($h_1, ..., h_N$).
            *   Equation 1: $h_1 = \frac{h_2 + h_0}{2}$
            *   Equation 2: $h_2 = \frac{h_3 + h_1}{2}$
            *   ...
            *   Equation N-1: $h_{N-1} = \frac{h_N + h_{N-2}}{2}$
            *   Equation N: $h_N = h_{N-1} - \frac{Q \Delta x}{K}$
        *   This system can be solved using matrix methods (e.g., Gaussian elimination, Thomas algorithm for tridiagonal systems).

---

### **Key Concepts and Definitions Summary**

*   **Darcy's Law:** Specific discharge is proportional to hydraulic gradient and hydraulic conductivity.
*   **Continuity Equation:** Mass conservation principle.
*   **Governing Equation (1D Steady):** $\frac{d^2h}{dx^2} = 0$.
*   **Homogeneous Aquifer:** Hydraulic conductivity ($K$) is uniform throughout.
*   **Isotropic Aquifer:** Hydraulic conductivity is the same in all directions.
*   **Confined Aquifer:** Bounded above and below by impermeable layers, saturated at all times.
*   **Unconfined Aquifer:** Upper boundary is the water table, which can fluctuate.
*   **Hydraulic Head ($h$):** Total energy per unit weight of water.
*   **Hydraulic Gradient:** Rate of change of hydraulic head with distance.
*   **Boundary Conditions:** Specify conditions at the edges of the model domain (Dirichlet, Neumann, Cauchy).
*   **Finite Difference Method (FDM):** Numerical technique approximating derivatives with algebraic differences.
*   **Discretization:** Dividing the continuous domain into discrete points (nodes).
*   **Mesh Interval ($\Delta x$):** The distance between adjacent nodes.
*   **Finite Difference Equation (FDE):** Algebraic equation representing the governing equation at a node. For 1D steady flow: $h_i = \frac{h_{i+1} + h_{i-1}}{2}$.
*   **Impermeable Boundary:** No flow across the boundary (Neumann condition with flux = 0). For 1D, this leads to $h_{i-1} = h_{i+1}$ if applied to an interior node, or $h_0 = h_1$ if applied to node 0 using the fictitious node method.

---

### **Important Points to Remember**

*   The governing equation $\frac{d^2h}{dx^2} = 0$ for 1D steady flow implies a **linear variation of hydraulic head** with distance in homogeneous aquifers.
*   FDM replaces the continuous PDE with a system of algebraic equations.
*   The accuracy of FDM depends on the **mesh size ($\Delta x$)**. Smaller $\Delta x$ generally leads to higher accuracy but also a larger system of equations.
*   **Boundary conditions are crucial.** They determine which specific linear profile satisfies the problem constraints.
*   For Neumann boundary conditions, careful application of the FDM approximation to the flux term is needed to derive the correct FDE at the boundary node.

---

### **Practice Questions and Exercises**

**Question 1:**
A homogeneous and isotropic confined aquifer of length 500 m has a constant hydraulic conductivity of $10^{-4}$ m/s. The hydraulic head at one end ($x=0$) is 20 m, and at the other end ($x=500$ m) is 10 m. The flow is steady and one-dimensional.
(a) Write down the governing equation for this system.
(b) What is the finite difference equation for an interior node?
(c) If we discretize the aquifer into 5 intervals (6 nodes), what is the value of $\Delta x$?
(d) Calculate the hydraulic head at nodes $x=100$ m, $x=200$ m, $x=300$ m, and $x=400$ m using the finite difference method (or by recognizing the linear nature of the solution).

**Answer 1:**
(a) Governing Equation: $\frac{d^2h}{dx^2} = 0$
(b) Finite Difference Equation: $h_i = \frac{h_{i+1} + h_{i-1}}{2}$
(c) $\Delta x = \frac{500 \text{ m}}{5} = 100 \text{ m}$. The nodes are at $x=0, 100, 200, 300, 400, 500$ m.
(d) Since the solution is linear, we can use the analytical solution $h(x) = \frac{H_2 - H_1}{L} x + H_1$.
    $H_1 = 20$ m (at $x=0$), $H_2 = 10$ m (at $x=500$ m), $L = 500$ m.
    $h(x) = \frac{10 - 20}{500} x + 20 = -\frac{10}{500} x + 20 = -0.02x + 20$.
    *   At $x=100$ m: $h(100) = -0.02(100) + 20 = -2 + 20 = 18$ m.
    *   At $x=200$ m: $h(200) = -0.02(200) + 20 = -4 + 20 = 16$ m.
    *   At $x=300$ m: $h(300) = -0.02(300) + 20 = -6 + 20 = 14$ m.
    *   At $x=400$ m: $h(400) = -0.02(400) + 20 = -8 + 20 = 12$ m.

    Using FDM:
    Nodes: $h_0 = 20, h_1=?, h_2=?, h_3=?, h_4=?, h_5 = 10$.
    $h_1 = \frac{h_0 + h_2}{2} \implies 2h_1 = 20 + h_2$
    $h_2 = \frac{h_1 + h_3}{2} \implies 2h_2 = h_1 + h_3$
    $h_3 = \frac{h_2 + h_4}{2} \implies 2h_3 = h_2 + h_4$
    $h_4 = \frac{h_3 + h_5}{2} \implies 2h_4 = h_3 + 10$
    Solving this system yields the same linear profile.

**Question 2:**
Consider a 1D domain from $x=0$ to $x=20$ m. The aquifer is homogeneous and steady-state.
The boundary condition at $x=0$ is an impermeable boundary.
The boundary condition at $x=20$ m is a specified head of $h_{20} = 15$ m.
The governing equation is $\frac{d^2h}{dx^2} = 0$.
Discretize the domain into 4 intervals ($\Delta x = 5$ m).
(a) What are the node indices and their positions?
(b) Write down the finite difference equation for interior nodes.
(c) What is the FDE for the boundary node at $x=0$ (node 0)?
(d) Write down the FDE for the boundary node at $x=20$ (node 4).
(e) Set up the system of linear equations to solve for the unknown heads $h_0, h_1, h_2, h_3$.

**Answer 2:**
(a) Nodes are at $x=0, 5, 10, 15, 20$ m. Indices are $i=0, 1, 2, 3, 4$. $\Delta x = 5$ m.
(b) For interior nodes ($i=1, 2, 3$): $h_i = \frac{h_{i+1} + h_{i-1}}{2}$.
    *   $2h_1 = h_0 + h_2$
    *   $2h_2 = h_1 + h_3$
    *   $2h_3 = h_2 + h_4$
(c) For the impermeable boundary at $x=0$ (node $i=0$), we use the fictitious node method or the property that the gradient is zero. The FDE at node 0, using a fictitious node $h_{-1}$, is $\frac{h_1 - 2h_0 + h_{-1}}{(\Delta x)^2} = 0$. For impermeable boundary, $\frac{h_1 - h_{-1}}{2\Delta x} = 0 \implies h_{-1} = h_1$. Substituting this gives $h_1 - 2h_0 + h_1 = 0 \implies 2h_1 - 2h_0 = 0 \implies h_0 = h_1$.
(d) For the Dirichlet boundary at $x=20$ m (node $i=4$), the head is directly given: $h_4 = 15$ m.
(e) System of equations:
    1.  $2h_1 - h_0 - h_2 = 0$
    2.  $-h_1 + 2h_2 - h_3 = 0$
    3.  $-h_2 + 2h_3 - h_4 = 0$
    4.  $h_4 = 15$ (This is a known value, not an equation for an unknown)

    We have 3 unknowns ($h_0, h_1, h_2, h_3$) and 3 equations from (b) and (c).
    Substituting $h_0 = h_1$ into eq 1: $2h_1 - h_1 - h_2 = 0 \implies h_1 - h_2 = 0 \implies h_1 = h_2$.
    Substitute $h_1 = h_2$ into eq 2: $-h_1 + 2h_1 - h_3 = 0 \implies h_1 - h_3 = 0 \implies h_1 = h_3$.
    So, $h_1 = h_2 = h_3$.
    Now use eq 3 and the known $h_4$:
    $-h_2 + 2h_3 - h_4 = 0$. Since $h_2 = h_3$, this becomes $-h_2 + 2h_2 - h_4 = 0 \implies h_2 - h_4 = 0 \implies h_2 = h_4$.
    Therefore, $h_1 = h_2 = h_3 = h_4 = 15$ m.
    And since $h_0 = h_1$, we get $h_0 = 15$ m.
    All heads are 15 m. This makes sense because the impermeable boundary implies zero gradient, and if the head at the other end is 15 m, a zero gradient implies the head stays constant.

---
