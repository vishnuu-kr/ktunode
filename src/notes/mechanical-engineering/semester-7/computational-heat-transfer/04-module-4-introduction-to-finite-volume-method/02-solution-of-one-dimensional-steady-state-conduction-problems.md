---
title: "Solution of one-dimensional steady state conduction problems."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 4: Introduction to Finite volume method."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446437e"
status: "completed"
scrapedAt: "2026-05-20T18:10:42.165Z"
---
# Computational Heat Transfer: Module 4 - Introduction to Finite Volume Method (FVM)

## Topic: Solution of One-Dimensional Steady-State Conduction Problems

### 1. Introduction to FVM (CO3 - K1)

The Finite Volume Method (FVM) is a numerical technique used to solve partial differential equations (PDEs). It's particularly well-suited for conservation laws that arise in fluid dynamics and heat transfer. Unlike the Finite Difference Method (FDM) which approximates derivatives at discrete points, FVM discretizes the domain into small control volumes and applies the conservation principle over each volume.

**Key Concepts:**

*   **Control Volume:** A small, finite region of the domain over which conservation laws are applied.
*   **Discretization:** Dividing the computational domain into a finite number of control volumes.
*   **Flux:** The rate of transfer of a quantity (e.g., heat) across a surface.
*   **Integral Form of Conservation Law:** The fundamental principle used in FVM, stating that the rate of change of a conserved quantity within a control volume plus the net flux out of the control volume equals the source/sink term within the volume.

**Advantages of FVM (Anderson & Wendt, 1995; Versteeg & Malalasekera, 2008):**

*   **Conservation:** Guarantees conservation of physical quantities (mass, momentum, energy) at the discrete level, which is crucial for accurate simulations.
*   **Flexibility:** Can handle complex geometries and irregular grids more easily than FDM.
*   **Accuracy:** Particularly good for problems with discontinuities or sharp gradients.

### 2. Governing Equations for One-Dimensional Steady-State Conduction (CO1 - K2)

**Fourier's Law of Conduction:** Describes the rate of heat transfer through a material due to a temperature gradient.

For one-dimensional steady-state conduction, the governing equation is:

$$ \frac{d}{dx} \left( k \frac{dT}{dx} \right) + q''' = 0 $$

Where:
*   $T$ is temperature (°C or K)
*   $x$ is the spatial coordinate (m)
*   $k$ is thermal conductivity (W/m·K)
*   $q'''$ is the volumetric heat generation rate (W/m³)

**Special Cases:**

*   **Constant Thermal Conductivity ($k$ = constant):**
    $$ k \frac{d^2T}{dx^2} + q''' = 0 $$
*   **No Heat Generation ($q''' = 0$):**
    $$ \frac{d}{dx} \left( k \frac{dT}{dx} \right) = 0 $$
*   **Constant Thermal Conductivity and No Heat Generation:**
    $$ \frac{d^2T}{dx^2} = 0 $$

**Boundary Conditions (Essential for solving the PDE):**

*   **Dirichlet Boundary Condition (1st kind):** Temperature is specified at the boundary.
    *   Example: $T(x=0) = T_0$
*   **Neumann Boundary Condition (2nd kind):** Heat flux is specified at the boundary.
    *   Example: $-k \frac{dT}{dx}(x=L) = q_0''$ (where $q_0''$ is the heat flux at x=L)
    *   If $q_0'' = 0$, it represents an insulated boundary (adiabatic).
*   **Robin Boundary Condition (3rd kind):** Convective heat transfer is specified at the boundary.
    *   Example: $-k \frac{dT}{dx}(x=0) = h(T(x=0) - T_\infty)$

### 3. Discretization of the Domain using FVM

Consider a one-dimensional rod of length $L$. We discretize this rod into $N$ control volumes. The boundaries between control volumes are called **interfaces**.

**Illustration:**

```
Domain:  |------------------------------------|
         0                                  L

Control Volumes:
         |----|----|----| ... |----|
         P1   P2   P3       PN
         (Nodes)

Interfaces:
         | - i-1/2 - i - i+1/2 - |
         (Face Centers)
```

*   Let the nodes (points where temperature is calculated) be located at $x_1, x_2, ..., x_N$.
*   The centers of the control volumes are usually aligned with the nodes.
*   The interfaces are located at $x_{1.5}, x_{2.5}, ..., x_{N-0.5}$.
*   The volume of the $i$-th control volume is $\Delta x_i = x_{i+0.5} - x_{i-0.5}$.
*   For uniform grids, $\Delta x_i = \Delta x = L/N$.

### 4. Derivation of the Finite Volume Equation for 1D Steady-State Conduction

We will derive the discretized equation for a general control volume $i$ located around node $i$. The control volume extends from $x_{i-0.5}$ to $x_{i+0.5}$.

**Governing Equation (Integral Form):**

$$ \int_{x_{i-0.5}}^{x_{i+0.5}} \left[ \frac{d}{dx} \left( k \frac{dT}{dx} \right) + q''' \right] dx = 0 $$

Integrating the terms:

$$ \left[ k \frac{dT}{dx} \right]_{x_{i+0.5}} - \left[ k \frac{dT}{dx} \right]_{x_{i-0.5}} + \int_{x_{i-0.5}}^{x_{i+0.5}} q''' dx = 0 $$

Let $T_i$ be the temperature at node $i$, and $T_{i+1}$ be the temperature at node $i+1$.

**Approximating the Fluxes:**

At the interfaces ($x_{i+0.5}$ and $x_{i-0.5}$), we approximate the temperature gradient using values at the adjacent nodes.

*   **Flux at $x_{i+0.5}$:**
    $$ \left[ k \frac{dT}{dx} \right]_{x_{i+0.5}} \approx k_{i+0.5} \frac{T_{i+1} - T_i}{x_{i+1} - x_i} $$
    where $k_{i+0.5}$ is the thermal conductivity at the interface.

*   **Flux at $x_{i-0.5}$:**
    $$ \left[ k \frac{dT}{dx} \right]_{x_{i-0.5}} \approx k_{i-0.5} \frac{T_i - T_{i-1}}{x_i - x_{i-1}} $$
    where $k_{i-0.5}$ is the thermal conductivity at the interface.

**Approximating the Heat Generation Term:**

The integral of the heat generation term can be approximated by:

$$ \int_{x_{i-0.5}}^{x_{i+0.5}} q''' dx \approx q'''_i \Delta x_i $$
where $q'''_i$ is the average heat generation rate in control volume $i$, often taken as the value at the node $i$.

**Substituting back into the integrated equation:**

$$ k_{i+0.5} \frac{T_{i+1} - T_i}{\Delta x_{i+0.5}} - k_{i-0.5} \frac{T_i - T_{i-1}}{\Delta x_{i-0.5}} + q'''_i \Delta x_i = 0 $$

Where:
*   $\Delta x_{i+0.5} = x_{i+1} - x_i$ (distance between nodes)
*   $\Delta x_{i-0.5} = x_i - x_{i-1}$ (distance between nodes)

**Rearranging to the general form:**

$$ A_i T_i = B_{i-1} T_{i-1} + B_{i+1} T_{i+1} + C_i $$

This is a **linear algebraic equation** for each control volume. The coefficients $A_i$, $B_{i-1}$, $B_{i+1}$, and $C_i$ depend on the physical properties ($k$, $q'''$) and the grid spacing ($\Delta x$).

### 5. Handling Different Boundary Conditions

**A. Dirichlet Boundary Condition (e.g., $T_1 = T_{specified}$ at $x=0$)**

The equation for the first control volume (node 1) can be modified. Instead of solving for $T_1$, its value is known. We can substitute $T_1$ into the equation for the second control volume (node 2), effectively eliminating the unknown $T_1$.

Alternatively, we can treat the boundary as a "ghost node" and impose the Dirichlet condition directly. For a boundary at $x_{0.5}$ where $T_1$ is specified, the equation for control volume 1 becomes:

$$ k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} - \text{Flux from left boundary} + q'''_1 \Delta x_1 = 0 $$

If the left boundary ($x=0$) is a boundary of the domain and $T_1$ is specified, we can consider the flux crossing this boundary as known. For example, if $T_1$ is specified, we might write the equation for CV1 as:

$$(k_{1.5}/\Delta x_{1.5}) T_2 = (k_{1.5}/\Delta x_{1.5}) T_1 - \text{Boundary Flux} - q'''_1 \Delta x_1$$

A simpler way is to directly set the coefficients for the first node in the system of equations. For control volume 1:

$$ A_1 T_1 = B_2 T_2 + C_1 $$

If $T_1$ is specified, this equation can be rewritten as:

$$ (A_1 - B_2) T_1 = B_2 T_2 + C_1 $$
This isn't quite right. The most common approach is to modify the equation for CV1 directly.

Let's reconsider the equation for CV1:
$$ k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} - \text{Flux}_{x_{0.5}} + q'''_1 \Delta x_1 = 0 $$
If the boundary at $x=0$ is a Dirichlet boundary with $T_1 = T_{specified}$, the equation for CV1 doesn't involve a flux from a previous volume. The flux at $x_{1.5}$ is approximated as $k_{1.5}(T_2 - T_1)/\Delta x_{1.5}$.
The equation for CV1 is:
$$ k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} + q'''_1 \Delta x_1 = 0 $$
Since $T_1$ is known, this equation directly gives $T_2$. However, if we want to solve a system of equations for $T_2, T_3, ..., T_N$, we rewrite this equation for CV1 to express $T_1$ in terms of $T_2$:
$$ T_1 = T_{specified} $$
This condition is imposed by directly setting the value of $T_1$. For the second CV (node 2), the equation would be:
$$ k_{2.5} \frac{T_3 - T_2}{\Delta x_{2.5}} - k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} + q'''_2 \Delta x_2 = 0 $$
Substituting $T_1$:
$$ k_{2.5} \frac{T_3 - T_2}{\Delta x_{2.5}} - k_{1.5} \frac{T_2 - T_{specified}}{\Delta x_{1.5}} + q'''_2 \Delta x_2 = 0 $$
This equation involves $T_2$ and $T_3$.

**B. Neumann Boundary Condition (e.g., $-k \frac{dT}{dx} = q_0''$ at $x=L$)**

For a control volume at the boundary (e.g., CVN around node N), the flux at the right interface ($x_{N+0.5}$ which is the domain boundary) is known ($q_0''$).

The equation for CVN is:
$$ \left[ k \frac{dT}{dx} \right]_{x_{N+0.5}} - \left[ k \frac{dT}{dx} \right]_{x_{N-0.5}} + q'''_N \Delta x_N = 0 $$
Substituting the known flux at $x_{N+0.5}$:
$$ q_0'' - k_{N-0.5} \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} + q'''_N \Delta x_N = 0 $$
This equation allows us to solve for $T_N$ if $T_{N-1}$ is known, or it becomes part of the system of equations.

*   **Insulated Boundary ($q_0'' = 0$):** The flux at the boundary is zero. This means $\frac{dT}{dx} = 0$ at the boundary. If the boundary is at $x_{N+0.5}$, then the equation for CVN is:
    $$ 0 - k_{N-0.5} \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} + q'''_N \Delta x_N = 0 $$

**C. Robin Boundary Condition (e.g., $-k \frac{dT}{dx} = h(T - T_\infty)$ at $x=0$)**

For a control volume at the boundary (e.g., CV1 around node 1), the flux at the left interface ($x_{0.5}$ which is the domain boundary) is expressed in terms of the boundary temperature.

The equation for CV1 is:
$$ \left[ k \frac{dT}{dx} \right]_{x_{1.5}} - \left[ k \frac{dT}{dx} \right]_{x_{0.5}} + q'''_1 \Delta x_1 = 0 $$
Substituting the flux at $x_{0.5}$ using the Robin condition:
$$ k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} - \left( -h(T_1 - T_\infty) \right) + q'''_1 \Delta x_1 = 0 $$
$$ k_{1.5} \frac{T_2 - T_1}{\Delta x_{1.5}} + h(T_1 - T_\infty) + q'''_1 \Delta x_1 = 0 $$
This equation involves $T_1$ and $T_2$ and is incorporated into the system of equations.

### 6. Solution of the System of Linear Algebraic Equations (CO4 - K2)

After discretizing the domain, we obtain a system of linear algebraic equations of the form:

$$ [A] \{T\} = \{C\} $$

Where:
*   $[A]$ is the coefficient matrix.
*   $\{T\}$ is the vector of unknown temperatures ($T_1, T_2, ..., T_N$).
*   $\{C\}$ is the source/boundary condition vector.

For 1D problems, the coefficient matrix $[A]$ is typically **tridiagonal** (non-zero elements only on the main diagonal, the superdiagonal, and the subdiagonal). This is a significant advantage as tridiagonal systems can be solved efficiently.

**Methods for Solving Linear Systems:**

*   **Direct Methods:**
    *   **Gaussian Elimination:** A systematic procedure to transform the system into an upper triangular form, which can then be solved by back-substitution.
    *   **Thomas Algorithm (TDMA - Tridiagonal Matrix Algorithm):** A specialized and efficient form of Gaussian elimination for tridiagonal systems. This is the preferred method for 1D problems. (Sastry, 2012; Patankar, 2017)

*   **Iterative Methods:**
    *   **Jacobi Method:** Updates each unknown using values from the previous iteration.
    *   **Gauss-Seidel Method:** Updates each unknown using the most recently computed values.
    *   **Successive Over-Relaxation (SOR):** An acceleration technique for Gauss-Seidel.
    *   **Conjugate Gradient Method:** For symmetric positive-definite matrices.

**Thomas Algorithm (TDMA) - A brief outline:**

The system for TDMA looks like:

$$ a_i T_i + b_i T_{i+1} + c_i T_{i-1} = d_i $$

Or, in our FVM form:
$$ - \frac{k_{i-0.5}}{\Delta x_{i-0.5}} T_{i-1} + \left( \frac{k_{i-0.5}}{\Delta x_{i-0.5}} + \frac{k_{i+0.5}}{\Delta x_{i+0.5}} + \text{term for } q'''_i \right) T_i - \frac{k_{i+0.5}}{\Delta x_{i+0.5}} T_{i+1} = \text{Source/Boundary Term} $$

Let the coefficients be:
$c_i = - \frac{k_{i-0.5}}{\Delta x_{i-0.5}}$ (coefficient of $T_{i-1}$)
$b_i = - \frac{k_{i+0.5}}{\Delta x_{i+0.5}}$ (coefficient of $T_{i+1}$)
$a_i = \frac{k_{i-0.5}}{\Delta x_{i-0.5}} + \frac{k_{i+0.5}}{\Delta x_{i+0.5}} + (\text{related to } q'''_i)$ (coefficient of $T_i$)
$d_i = -q'''_i \Delta x_i + (\text{boundary flux terms})$ (RHS)

TDMA involves two passes:
1.  **Forward Elimination:** Reduces the system to a bidiagonal form where $T_i = \alpha_i T_{i+1} + \beta_i$.
2.  **Backward Substitution:** Solves for $T_N, T_{N-1}, ..., T_1$.

(Refer to Sastry, 2012, for detailed TDMA implementation).

### 7. Example: One-Dimensional Steady-State Conduction with Uniform Grid and Constant Properties (CO5 - K3)

**Problem:** Consider a one-dimensional rod of length $L=1$ m. The thermal conductivity $k = 100$ W/m·K. The left end ($x=0$) is maintained at $T_1 = 100^\circ$C, and the right end ($x=1$) is at $T_2 = 50^\circ$C. There is no heat generation ($q'''=0$). Solve this problem using FVM.

**Governing Equation:**
$$ k \frac{d^2T}{dx^2} = 0 \quad \Rightarrow \quad \frac{d^2T}{dx^2} = 0 $$

**Analytical Solution:**
Integrating twice:
$ \frac{dT}{dx} = C_1 $
$ T(x) = C_1 x + C_2 $

Using boundary conditions:
$ T(0) = 100 \Rightarrow C_2 = 100 $
$ T(1) = 50 \Rightarrow C_1 (1) + 100 = 50 \Rightarrow C_1 = -50 $

So, $ T(x) = -50x + 100 $.

**FVM Discretization:**
Let's use $N=4$ control volumes (nodes).
$\Delta x = L/N = 1/4 = 0.25$ m.
Nodes are at $x_1=0, x_2=0.25, x_3=0.5, x_4=0.75, x_5=1$. (Note: Typically, N nodes implies N-1 intervals, but for simplicity, let's consider N control volumes meaning N internal interfaces and 2 boundaries).
Let's use N=3 nodes for simplicity of illustration of the system.
Nodes at $x_1=0, x_2=0.5, x_3=1$. $\Delta x = 0.5$.
Control volumes centered at $x_1, x_2, x_3$.
Interfaces at $x_{0.5}=0, x_{1.5}=0.5, x_{2.5}=1$.

This setup is a bit confusing. Let's use the standard convention: $N$ control volumes, $N+1$ nodes.
$N=2$ control volumes.
Nodes: $x_0, x_1, x_2$.
$x_0 = 0$, $x_1 = 0.5$, $x_2 = 1$.
CV1: center $x_1$, interfaces at $x_0=0$ and $x_1=0.5$. $\Delta x_1 = 0.5$.
CV2: center $x_2$, interfaces at $x_1=0.5$ and $x_2=1$. $\Delta x_2 = 0.5$.

Let $T_1$ and $T_2$ be the unknown temperatures at nodes $x_1$ and $x_2$.
Boundary condition $T_0 = 100$ at $x_0=0$.
Boundary condition $T_2 = 50$ at $x_2=1$.

This is a simple case where the unknowns are at the boundaries themselves if N=2.
Let's choose $N=2$ internal nodes and $N+2$ total nodes $x_0, x_1, x_2, x_3$.
$N=2$. Length $L=1$. $\Delta x = 1/3 \approx 0.333$.
Nodes: $x_0=0, x_1=1/3, x_2=2/3, x_3=1$.
CV1: center $x_1$, interfaces at $x_0=0, x_1=1/3$. $\Delta x_1 = 1/3$.
CV2: center $x_2$, interfaces at $x_1=1/3, x_2=2/3$. $\Delta x_2 = 1/3$.
CV3: center $x_3$, interfaces at $x_2=2/3, x_3=1$. $\Delta x_3 = 1/3$.

Let's simplify and use 3 control volumes, 4 nodes: $x_0, x_1, x_2, x_3$.
$N=3$. $\Delta x = 1/3$.
Nodes: $x_0=0, x_1=1/3, x_2=2/3, x_3=1$.
Boundary conditions: $T_0 = 100^\circ$C, $T_3 = 50^\circ$C.
We need to solve for $T_1$ and $T_2$.

Discretized equation for CV1 (centered at $x_1$):
$k \frac{T_2 - T_1}{\Delta x} - k \frac{T_1 - T_0}{\Delta x} = 0$ (No heat generation)
$T_2 - T_1 - (T_1 - T_0) = 0$
$T_2 - 2T_1 + T_0 = 0$
Since $T_0=100$:
$T_2 - 2T_1 + 100 = 0 \quad (1)$

Discretized equation for CV2 (centered at $x_2$):
$k \frac{T_3 - T_2}{\Delta x} - k \frac{T_2 - T_1}{\Delta x} = 0$
$T_3 - T_2 - (T_2 - T_1) = 0$
$T_3 - 2T_2 + T_1 = 0$
Since $T_3=50$:
$50 - 2T_2 + T_1 = 0 \quad (2)$

We have a system of two equations with two unknowns ($T_1, T_2$):
1.  $-2T_1 + T_2 = -100$
2.  $T_1 - 2T_2 = -50$

**Solving the system:**
Multiply (1) by 2: $-4T_1 + 2T_2 = -200$
Add this to (2):
$(-4T_1 + 2T_2) + (T_1 - 2T_2) = -200 + (-50)$
$-3T_1 = -250$
$T_1 = 250/3 \approx 83.33^\circ$C

Substitute $T_1$ into (1):
$-2(250/3) + T_2 = -100$
$-500/3 + T_2 = -300/3$
$T_2 = (500 - 300)/3 = 200/3 \approx 66.67^\circ$C

**FVM Results:**
$T_0 = 100^\circ$C
$T_1 \approx 83.33^\circ$C
$T_2 \approx 66.67^\circ$C
$T_3 = 50^\circ$C

**Analytical Results:**
$T(x) = -50x + 100$
$T(0) = 100^\circ$C
$T(1/3) = -50(1/3) + 100 = -50/3 + 300/3 = 250/3 \approx 83.33^\circ$C
$T(2/3) = -50(2/3) + 100 = -100/3 + 300/3 = 200/3 \approx 66.67^\circ$C
$T(1) = 50^\circ$C

The FVM results match the analytical solution for this uniform grid case.

### 8. Practice Questions/Exercises

**Question 1:**
A one-dimensional plane wall of thickness $2L = 0.2$ m has thermal conductivity $k = 50$ W/m·K. The wall is subjected to a uniform heat generation rate of $q''' = 1000$ W/m³. The left surface ($x=-L$) is insulated, and the right surface ($x=L$) is maintained at $T(L) = 100^\circ$C.
(a) Write down the governing differential equation.
(b) Derive the finite volume discretization for a control volume centered at node $i$.
(c) Formulate the system of equations if the domain is discretized into 4 control volumes. Clearly state the equations for each control volume, considering the boundary conditions. (Assume uniform grid).
(d) State how you would solve this system of equations.

**Solution 1:**
(a) Governing equation: $ \frac{d}{dx} \left( k \frac{dT}{dx} \right) + q''' = 0 $. With $k$ constant and $q'''$ constant: $ k \frac{d^2T}{dx^2} + q''' = 0 $.

(b) Discretized equation for CV $i$ (centered at $x_i$):
$ k \frac{T_{i+1} - T_i}{\Delta x} - k \frac{T_i - T_{i-1}}{\Delta x} + q''' \Delta x = 0 $
$ k(T_{i+1} - T_i) - k(T_i - T_{i-1}) + q''' (\Delta x)^2 = 0 $
$ k T_{i-1} - 2k T_i + k T_{i+1} + q''' (\Delta x)^2 = 0 $

(c) Domain is from $x=-L$ to $x=L$, $2L=0.2$, so $L=0.1$.
Discretized into 4 control volumes. This means $N=4$ CVs.
Total nodes $N+1 = 5$. Let's number nodes from 0 to 4.
$x_0 = -0.1, x_1 = -0.05, x_2 = 0, x_3 = 0.05, x_4 = 0.1$.
$\Delta x = 0.1 / 2 = 0.05$ m.
Boundary conditions:
Insulated at $x_0 = -0.1$ (Neumann: $dT/dx = 0$ at $x_0$).
$T_4 = 100^\circ$C at $x_4 = 0.1$ (Dirichlet).
Need to solve for $T_1, T_2, T_3$.

CV1 (centered at $x_1$):
Interface $x_0$ (left boundary), Interface $x_1$ (between CV1 and CV2).
$k \frac{T_1 - T_0}{\Delta x} - \text{Flux}_{x_0} + q''' \Delta x = 0$.
Since $x_0$ is insulated, $\frac{dT}{dx}|_{x_0} = 0$. So, Flux$_{x_0}$ is 0.
$ k \frac{T_1 - T_0}{\Delta x} + q''' \Delta x = 0 $.
This is not right. The FVM equation applies to the *interior* of the domain.
Let's re-evaluate the CVs and nodes.
Let's have 4 nodes for simplicity: $x_0, x_1, x_2, x_3$. $\Delta x = 0.2 / 3$.
Boundary conditions: $T_0$ at $x_0=0$, $T_3$ at $x_3=0.2$.
This problem needs to be carefully set up regarding node and CV numbering.

**Let's use the standard approach for the problem statement:**
4 control volumes means 5 nodes: $x_0, x_1, x_2, x_3, x_4$.
$x_0 = -0.1, x_1 = -0.05, x_2 = 0, x_3 = 0.05, x_4 = 0.1$. $\Delta x = 0.05$ m.
BCs:
$x_0$ is left boundary: Insulated ($dT/dx = 0$ at $x_0$).
$x_4$ is right boundary: $T_4 = 100^\circ$C.
We need to solve for $T_1, T_2, T_3$.

*   **Equation for CV1 (centered at $x_1$):**
    Interfaces: $x_{0.5}$ (at $x_0=-0.1$), $x_{1.5}$ (at $x_1=-0.05$).
    $k \frac{T_2 - T_1}{\Delta x} - k \frac{T_1 - T_0}{\Delta x} + q''' \Delta x = 0$
    For the left boundary at $x_{0.5}$, the flux is zero. This means we don't have a term $k \frac{T_0 - T_{-1}}{\Delta x}$ because $x_0$ is a boundary.
    The term from the left face of CV1 is the flux at $x_{0.5}$.
    The FVM equation for CV1 centered at $x_1$ is:
    $ \left[ k \frac{dT}{dx} \right]_{x_{1.5}} - \left[ k \frac{dT}{dx} \right]_{x_{0.5}} + q''' \Delta x = 0 $
    $ k \frac{T_2 - T_1}{\Delta x} - 0 + q''' \Delta x = 0 $ (Since $dT/dx = 0$ at $x_{0.5}$, the flux at the boundary is 0).
    $ k(T_2 - T_1) + q''' (\Delta x)^2 = 0 $
    $ 50(T_2 - T_1) + 1000 (0.05)^2 = 0 $
    $ 50(T_2 - T_1) + 1000 (0.0025) = 0 $
    $ 50(T_2 - T_1) + 2.5 = 0 $
    $ -50 T_1 + 50 T_2 = -2.5 \quad (Eq. 1') $

*   **Equation for CV2 (centered at $x_2$):**
    Interfaces: $x_{1.5}$ (at $x_1=-0.05$), $x_{2.5}$ (at $x_2=0$).
    $ k \frac{T_3 - T_2}{\Delta x} - k \frac{T_2 - T_1}{\Delta x} + q''' \Delta x = 0 $
    $ k(T_3 - T_2) - k(T_2 - T_1) + q''' (\Delta x)^2 = 0 $
    $ k T_1 - 2k T_2 + k T_3 + q''' (\Delta x)^2 = 0 $
    $ 50 T_1 - 2(50) T_2 + 50 T_3 + 1000 (0.05)^2 = 0 $
    $ 50 T_1 - 100 T_2 + 50 T_3 + 2.5 = 0 \quad (Eq. 2') $

*   **Equation for CV3 (centered at $x_3$):**
    Interfaces: $x_{2.5}$ (at $x_2=0$), $x_{3.5}$ (at $x_3=0.05$).
    $ k \frac{T_4 - T_3}{\Delta x} - k \frac{T_3 - T_2}{\Delta x} + q''' \Delta x = 0 $
    $ k(T_4 - T_3) - k(T_3 - T_2) + q''' (\Delta x)^2 = 0 $
    $ k T_2 - 2k T_3 + k T_4 + q''' (\Delta x)^2 = 0 $
    $ 50 T_2 - 2(50) T_3 + 50 T_4 + 1000 (0.05)^2 = 0 $
    Substitute $T_4 = 100$:
    $ 50 T_2 - 100 T_3 + 50 (100) + 2.5 = 0 $
    $ 50 T_2 - 100 T_3 + 5000 + 2.5 = 0 $
    $ 50 T_2 - 100 T_3 = -5002.5 \quad (Eq. 3') $

System of equations for $T_1, T_2, T_3$:
1'.  $-50 T_1 + 50 T_2 = -2.5$
2'.  $50 T_1 - 100 T_2 + 50 T_3 = -2.5$
3'.  $50 T_2 - 100 T_3 = -5002.5$

(d) This system of linear algebraic equations can be solved using the Thomas Algorithm (TDMA) due to its tridiagonal nature. Alternatively, direct methods like Gaussian elimination or iterative methods like Gauss-Seidel can be used.

**Question 2:**
Consider a 1D rod with constant thermal conductivity $k$. The left end ($x=0$) is subjected to convection with ambient temperature $T_\infty$ and heat transfer coefficient $h$. The right end ($x=L$) is maintained at a constant temperature $T_L$. There is no heat generation. Derive the finite volume equations for the first and last control volumes.

**Solution 2:**
Let's assume $N$ control volumes and $N+1$ nodes ($x_0, x_1, ..., x_N$).
$\Delta x_i$ is the width of CV $i$.
Let $x_0=0$ be the left boundary and $x_N=L$ be the right boundary.

*   **First Control Volume (CV1, centered at $x_1$):**
    Interfaces at $x_{0.5}$ (boundary $x_0=0$) and $x_{1.5}$ (between CV1 and CV2).
    Governing equation for CV1:
    $ \left[ k \frac{dT}{dx} \right]_{x_{1.5}} - \left[ k \frac{dT}{dx} \right]_{x_{0.5}} = 0 $ (no heat generation)

    Flux at $x_{1.5}$: $k \frac{T_2 - T_1}{\Delta x_{1.5}}$
    Flux at $x_{0.5}$ (boundary at $x=0$): $-k \frac{dT}{dx}|_{x_{0.5}} = h(T(x=0) - T_\infty)$.
    We need to approximate $T(x=0)$. In FVM, we often approximate the boundary temperature by the nodal temperature closest to it. If CV1 is centered at $x_1$, and $x_0$ is the boundary, then $T(x=0)$ is usually approximated as $T_1$. This is a common approximation when the boundary face coincides with a node.
    So, flux at $x_{0.5} \approx h(T_1 - T_\infty)$.
    The term in the FVM equation is $\left[ k \frac{dT}{dx} \right]_{x_{0.5}}$, which should be the flux *leaving* the control volume.
    The flux *entering* the CV from the left boundary is $-h(T_1 - T_\infty)$.
    So, the term $\left[ k \frac{dT}{dx} \right]_{x_{0.5}}$ in the equation should be the flux *out* of the CV at $x_{0.5}$. This flux is $-h(T_1 - T_\infty)$ if it's directed outwards from the boundary.
    Let's be precise: The integral form is $\int_{CV} \nabla \cdot \mathbf{q} dV = \int_{CV} S dV$.
    For 1D: $\int_{x_{i-0.5}}^{x_{i+0.5}} \frac{d}{dx}(k \frac{dT}{dx}) dx = 0$.
    $(k \frac{dT}{dx})_{x_{i+0.5}} - (k \frac{dT}{dx})_{x_{i-0.5}} = 0$.

    For CV1 (interfaces at $x_{0.5}$ and $x_{1.5}$):
    $(k \frac{dT}{dx})_{x_{1.5}} - (k \frac{dT}{dx})_{x_{0.5}} = 0$.
    $k \frac{T_2 - T_1}{\Delta x_{1.5}} - (-h(T_1 - T_\infty)) = 0$
    $k \frac{T_2 - T_1}{\Delta x_{1.5}} + h(T_1 - T_\infty) = 0$.
    This is the equation for the first control volume.

*   **Last Control Volume (CV_N, centered at $x_N$):**
    Interfaces at $x_{N-0.5}$ (between CV_{N-1} and CV_N) and $x_{N+0.5}$ (boundary at $x_N=L$).
    Governing equation for CV_N:
    $ \left[ k \frac{dT}{dx} \right]_{x_{N+0.5}} - \left[ k \frac{dT}{dx} \right]_{x_{N-0.5}} = 0 $

    Flux at $x_{N-0.5}$: $k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}}$
    Flux at $x_{N+0.5}$ (boundary at $x=L$): This flux is zero as $T_N$ is specified.
    So, $(k \frac{dT}{dx})_{x_{N+0.5}}$ represents the flux at the right boundary. Since the temperature $T_N$ is fixed, the flux across this face is what is needed to satisfy the overall conservation.
    The equation for CV_N is:
    $ (k \frac{dT}{dx})_{x_{N+0.5}} - k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} = 0 $.

    Since $T_N$ is specified, the flux at the right boundary $x_{N+0.5}$ (which is the domain boundary $x=L$) is not an unknown that needs approximation from the neighboring CV.
    The equation for the last control volume (CV_N, centered at $x_N$) will have the form:
    $ k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} - \left[ k \frac{dT}{dx} \right]_{x_{N-0.5}} = 0 $
    Actually, the equation for CV_N is:
    $ \left[ k \frac{dT}{dx} \right]_{x_{N+0.5}} - \left[ k \frac{dT}{dx} \right]_{x_{N-0.5}} = 0 $
    Here, $\left[ k \frac{dT}{dx} \right]_{x_{N+0.5}}$ is the flux at the right boundary. Since $T_N$ is specified, this flux is not a standard gradient approximation.
    The equation for CV_N should be formulated to have $T_{N-1}$ and $T_N$ as unknowns.
    $k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} - k \frac{T_{N-1} - T_{N-2}}{\Delta x_{N-1.5}} = 0$ is for CV_{N-1}.
    For CV_N:
    $ \left[ k \frac{dT}{dx} \right]_{x_{N+0.5}} - k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} = 0 $
    Since $T_N$ is a known boundary value, the equation for CV_N should be written such that it helps solve for $T_{N-1}$.
    The FVM equation for CV_N is:
    $ (\text{Flux out of CV at } x_{N+0.5}) - (\text{Flux out of CV at } x_{N-0.5}) = 0 $
    Flux out of CV at $x_{N+0.5}$ is the flux at the right boundary $x_N=L$. Since $T_N$ is specified, this flux is whatever value is needed to satisfy the equation.
    The standard way to handle Dirichlet at the last node ($T_N$ is known) is to modify the equation for CV_{N-1}.
    Equation for CV_{N-1} centered at $x_{N-1}$:
    $ k \frac{T_N - T_{N-1}}{\Delta x_{N-0.5}} - k \frac{T_{N-1} - T_{N-2}}{\Delta x_{N-1.5}} = 0 $
    Since $T_N$ is known, substitute it:
    $ k \frac{T_N^{specified} - T_{N-1}}{\Delta x_{N-0.5}} - k \frac{T_{N-1} - T_{N-2}}{\Delta x_{N-1.5}} = 0 $
    This equation involves $T_{N-1}$ and $T_{N-2}$, and $T_N$ is a known value.

### 9. Important Points to Remember

*   **Conservation is Key:** FVM ensures conservation by integrating the governing equations over control volumes.
*   **Integral Form:** Always start from the integral form of the conservation law.
*   **Interface Fluxes:** Accurate approximation of fluxes at control volume interfaces is critical.
*   **Tridiagonal Systems:** 1D steady-state conduction problems typically result in tridiagonal systems, efficiently solvable by TDMA.
*   **Boundary Conditions:** Proper implementation of boundary conditions is crucial for accurate solutions. Dirichlet conditions are typically imposed directly, while Neumann and Robin conditions modify the equations at the boundary control volumes.
*   **Grid Quality:** While FVM is robust, a finer grid generally leads to more accurate results.

---
**References:**

*   Sastry, S.S. (2012). *Introductory Methods to Numerical Analysis*. PHI Learning Pvt. Ltd.
*   Patankar, Suhas V. (2017). *Numerical Heat Transfer and Fluid Flow*. CRC Press.
*   Anderson, John David, & Wendt, John. (1995). *Computational Fluid Dynamics*. McGraw-Hill International Editions.
*   Versteeg, H., & Malalasekera, W. (2008). *An Introduction to Computational Fluid Dynamics: The Finite Volume Method*. Pearson.
*   Venkatesh, S.P. (2009). *Heat Transfer*. Ane Books Pvt Ltd.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
