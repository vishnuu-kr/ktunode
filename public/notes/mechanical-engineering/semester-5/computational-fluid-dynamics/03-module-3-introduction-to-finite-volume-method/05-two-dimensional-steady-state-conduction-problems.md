---
title: "two-dimensional steady state conduction problems"
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446343b"
status: "completed"
scrapedAt: "2026-05-20T17:58:18.803Z"
---
# Module 3: Introduction to Finite Volume Method - Two-Dimensional Steady State Conduction Problems

## 1. Introduction to Conduction

**Conduction** is the transfer of heat through direct contact of molecules. In solids, it's primarily due to vibrations of the lattice and the movement of free electrons. In fluids, it's due to molecular collisions.

**Steady State** means that the temperature at any point in the medium does not change with time. The heat flowing into a region is equal to the heat flowing out.

**Two-Dimensional (2D)** problems involve temperature variations in two spatial directions, typically x and y.

**Governing Equation for Heat Conduction:**

The fundamental equation governing heat conduction is Fourier's Law of Heat Conduction, which states that the rate of heat flow is proportional to the negative temperature gradient.

In differential form, for a vector $\mathbf{q}$ representing heat flux:
$\mathbf{q} = -k \nabla T$
where:
*   $k$ is the thermal conductivity of the material (assumed constant for simplicity in many introductory problems).
*   $\nabla T$ is the temperature gradient.

For **steady state** and **no heat generation** within the medium, the conservation of energy principle leads to the **Laplace Equation**:

$\nabla^2 T = 0$

In two dimensions, this expands to:

$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$

This is a second-order partial differential equation (PDE). Understanding and solving this equation is crucial for analyzing heat transfer in various engineering applications.

*   **Reference:** Anderson Jr. (2012) extensively discusses the derivation and physical meaning of the Laplace equation in the context of fluid mechanics and heat transfer. Patankar (2017) also provides a foundational understanding of diffusion phenomena, which is directly related to conduction.

## 2. The Finite Volume Method (FVM) Philosophy

The Finite Volume Method (FVM) is a numerical technique used to solve differential equations, particularly those that involve conservation laws, like fluid flow and heat transfer. Its core idea is to discretize the problem domain into a finite number of small volumes, called **control volumes (CVs)**. The governing equation is then integrated over each control volume.

**Key Principles of FVM:**

*   **Discretization into Control Volumes:** The computational domain is divided into a finite number of non-overlapping control volumes. These volumes do not necessarily align with the grid lines.
*   **Integral Form of the Governing Equation:** The conservation law (e.g., energy conservation for heat transfer) is written in its integral form over each control volume. This ensures that quantities like heat are conserved across the boundaries of these volumes, even if the discretization is approximate.
*   **Flux Calculation at Interfaces:** The key to FVM is calculating the flux (e.g., heat flux) across the faces (interfaces) of the control volumes. This typically involves some form of interpolation of the variable (temperature, in this case) at the cell centers to the cell faces.
*   **Assembly of Algebraic Equations:** Integrating the governing equation over each control volume and calculating fluxes at the interfaces leads to a system of algebraic equations, one for each control volume.
*   **Solution of Algebraic Equations:** These algebraic equations are then solved using numerical methods to obtain the unknown values of the variable (temperature) at the center of each control volume.

**Advantages of FVM:**

*   **Conservation:** FVM inherently conserves physical quantities (like heat) because the method is based on the integral form of conservation laws. What flows out of one control volume must flow into the adjacent one. This is a significant advantage, especially for fluid flow problems where mass and momentum conservation are critical.
*   **Flexibility with Grids:** FVM can handle unstructured grids (where cell shapes are irregular) and complex geometries more easily than some other methods, like Finite Difference Method (FDM).
*   **Accuracy:** For diffusion-dominated problems like conduction, FVM generally provides good accuracy.

*   **Reference:** Versteeg & Malalasekera (2008) provide an in-depth explanation of the FVM philosophy and its application to various types of PDEs, including conduction. Anderson Jr. (2012) also introduces FVM as a powerful tool for CFD.

## 3. Discretization of the 2D Steady State Conduction Equation

Let's consider the 2D steady state conduction equation:

$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$

We will discretize this equation using the FVM. The domain is divided into a grid of control volumes. For simplicity, let's consider a **structured, rectilinear grid** composed of rectangular control volumes.

### 3.1 Control Volume Formulation

Consider a single control volume centered at a grid point P(i, j). Its neighbors are:
*   West (W): (i-1, j)
*   East (E): (i+1, j)
*   South (S): (i, j-1)
*   North (N): (i, j+1)

The faces of this control volume are:
*   West face: between P and W
*   East face: between P and E
*   South face: between P and S
*   North face: between P and N

Let the dimensions of the control volume around P(i, j) be $\Delta x$ in the x-direction and $\Delta y$ in the y-direction. The grid points are located at $x_i$ and $y_j$. The centers of the control volumes are at $(x_i, y_j)$.

The control volume faces are located at:
*   West face: $x_{i-1/2}$
*   East face: $x_{i+1/2}$
*   South face: $y_{j-1/2}$
*   North face: $y_{j+1/2}$

### 3.2 Integrating the Governing Equation

We integrate the 2D Laplace equation over the control volume centered at P(i, j):

$\int_{CV} \left( \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} \right) dV = \int_{CV} 0 \, dV = 0$

Using the divergence theorem (Gauss's theorem), we can convert the volume integral of derivatives into surface integrals of fluxes:

$\int_{CV} \frac{\partial^2 T}{\partial x^2} dV = \int_{CV} \frac{\partial}{\partial x} \left( \frac{\partial T}{\partial x} \right) dV = \oint_{Sur} \left( \frac{\partial T}{\partial x} \right) \mathbf{n} \cdot \mathbf{i} \, dS$

This integral represents the net flux of heat in the x-direction across the boundaries of the control volume. In our rectilinear grid, this flux occurs across the west and east faces:

$\oint_{Sur} \left( \frac{\partial T}{\partial x} \right) \mathbf{n} \cdot \mathbf{i} \, dS = \left. \left( \frac{\partial T}{\partial x} \right) \right|_{East} A_{East} - \left. \left( \frac{\partial T}{\partial x} \right) \right|_{West} A_{West}$

Similarly, for the y-direction:

$\int_{CV} \frac{\partial^2 T}{\partial y^2} dV = \oint_{Sur} \left( \frac{\partial T}{\partial y} \right) \mathbf{n} \cdot \mathbf{j} \, dS = \left. \left( \frac{\partial T}{\partial y} \right) \right|_{North} A_{North} - \left. \left( \frac{\partial T}{\partial y} \right) \right|_{South} A_{South}$

For a rectangular control volume of width $\Delta x$ and height $\Delta y$, the areas of the faces are $A_{East} = A_{West} = \Delta y$ and $A_{North} = A_{South} = \Delta x$.

The equation becomes:

$\left. k \frac{\partial T}{\partial x} \right|_{East} \Delta y - \left. k \frac{\partial T}{\partial x} \right|_{West} \Delta y + \left. k \frac{\partial T}{\partial y} \right|_{North} \Delta x - \left. k \frac{\partial T}{\partial y} \right|_{South} \Delta x = 0$

Dividing by $k$ (assuming constant thermal conductivity):

$\left. \frac{\partial T}{\partial x} \right|_{East} \Delta y - \left. \frac{\partial T}{\partial x} \right|_{West} \Delta y + \left. \frac{\partial T}{\partial y} \right|_{North} \Delta x - \left. \frac{\partial T}{\partial y} \right|_{South} \Delta x = 0$

### 3.3 Approximation of Gradients (Discretization Schemes)

To obtain algebraic equations, we need to approximate the temperature gradients at the faces using the temperatures at the cell centers. The choice of approximation scheme is crucial for accuracy and stability.

**3.3.1 Central Differencing Scheme (CDS)**

This is the most common and often preferred scheme for diffusion-dominated problems like conduction, as it tends to be second-order accurate and stable. It approximates the gradient at a face by the difference in temperature between the adjacent cell centers divided by the distance between them.

*   **Gradient at the East Face (between P and E):**
    $\left. \frac{\partial T}{\partial x} \right|_{East} \approx \frac{T_E - T_P}{\delta x_{PE}}$
    where $\delta x_{PE}$ is the distance between the center of P and the East face (which is half the distance between P and E, so $\delta x_{PE} = \frac{\Delta x_P + \Delta x_E}{2}$). In a uniform grid, $\delta x_{PE} = \frac{\Delta x}{2}$.

*   **Gradient at the West Face (between P and W):**
    $\left. \frac{\partial T}{\partial x} \right|_{West} \approx \frac{T_P - T_W}{\delta x_{PW}}$
    where $\delta x_{PW}$ is the distance between the West face and the center of P. In a uniform grid, $\delta x_{PW} = \frac{\Delta x}{2}$.

*   **Gradient at the North Face (between P and N):**
    $\left. \frac{\partial T}{\partial y} \right|_{North} \approx \frac{T_N - T_P}{\delta y_{PN}}$
    where $\delta y_{PN}$ is the distance between the center of P and the North face. In a uniform grid, $\delta y_{PN} = \frac{\Delta y}{2}$.

*   **Gradient at the South Face (between P and S):**
    $\left. \frac{\partial T}{\partial y} \right|_{South} \approx \frac{T_P - T_S}{\delta y_{PS}}$
    where $\delta y_{PS}$ is the distance between the South face and the center of P. In a uniform grid, $\delta y_{PS} = \frac{\Delta y}{2}$.

**Substituting these into the discretized equation (assuming uniform grid spacing $\Delta x$ and $\Delta y$, and constant $k$):**

$\left( \frac{T_E - T_P}{\Delta x/2} \right) \Delta y - \left( \frac{T_P - T_W}{\Delta x/2} \right) \Delta y + \left( \frac{T_N - T_P}{\Delta y/2} \right) \Delta x - \left( \frac{T_P - T_S}{\Delta y/2} \right) \Delta x = 0$

Multiply by $\frac{1}{2}$:

$\left( \frac{T_E - T_P}{\Delta x} \right) \Delta y - \left( \frac{T_P - T_W}{\Delta x} \right) \Delta y + \left( \frac{T_N - T_P}{\Delta y} \right) \Delta x - \left( \frac{T_P - T_S}{\Delta y} \right) \Delta x = 0$

Let's analyze the terms:
*   Heat flow across East face: $k \frac{T_E - T_P}{\Delta x/2} \Delta y = k \frac{2 \Delta y}{\Delta x} (T_E - T_P)$
*   Heat flow across West face: $k \frac{T_P - T_W}{\Delta x/2} \Delta y = k \frac{2 \Delta y}{\Delta x} (T_P - T_W)$
*   Heat flow across North face: $k \frac{T_N - T_P}{\Delta y/2} \Delta x = k \frac{2 \Delta x}{\Delta y} (T_N - T_P)$
*   Heat flow across South face: $k \frac{T_P - T_S}{\Delta y/2} \Delta x = k \frac{2 \Delta x}{\Delta y} (T_P - T_S)$

The discretized equation becomes:

$k \frac{2 \Delta y}{\Delta x} (T_E - T_P) - k \frac{2 \Delta y}{\Delta x} (T_P - T_W) + k \frac{2 \Delta x}{\Delta y} (T_N - T_P) - k \frac{2 \Delta x}{\Delta y} (T_P - T_S) = 0$

Rearranging to isolate $T_P$:

$k \frac{2 \Delta y}{\Delta x} T_E + k \frac{2 \Delta y}{\Delta x} T_W + k \frac{2 \Delta x}{\Delta y} T_N + k \frac{2 \Delta x}{\Delta y} T_S - \left( k \frac{2 \Delta y}{\Delta x} + k \frac{2 \Delta y}{\Delta x} + k \frac{2 \Delta x}{\Delta y} + k \frac{2 \Delta x}{\Delta y} \right) T_P = 0$

$k \frac{2 \Delta y}{\Delta x} (T_E + T_W) + k \frac{2 \Delta x}{\Delta y} (T_N + T_S) - 2k \left( \frac{\Delta y}{\Delta x} + \frac{\Delta x}{\Delta y} \right) T_P = 0$

If $k$ is constant, we can divide by $2k$:

$\frac{\Delta y}{\Delta x} (T_E + T_W) + \frac{\Delta x}{\Delta y} (T_N + T_S) - \left( \frac{\Delta y}{\Delta x} + \frac{\Delta x}{\Delta y} \right) T_P = 0$

This is the algebraic equation for the internal grid point P(i, j). The coefficients represent the thermal conductances between the cell centers.

*   **Reference:** Patankar (2017) emphasizes the importance of flux calculation and provides detailed derivations of discretized forms for diffusion terms. Versteeg & Malalasekera (2008) also cover central differencing and its application to conduction.

**3.3.2 Other Schemes (Brief Mention):**

While CDS is common for conduction, other schemes exist, especially for convection-diffusion problems (which you'll see in later modules).
*   **Upwind Differencing Scheme (UDS):** Uses the value from the upstream node. It's first-order accurate but has good stability. For conduction (no convection), UDS is identical to CDS.
*   **Hybrid Scheme:** A combination of CDS and UDS, switching based on the Peclet number.
*   **Power Law Scheme:** Offers better accuracy for convection-diffusion problems.

For 2D steady-state conduction with constant thermal conductivity, the central differencing scheme is generally the most appropriate and leads to the discretized equations shown above.

## 4. Boundary Conditions

Boundary conditions are essential for solving PDEs as they provide specific values or relationships at the edges of the domain, allowing for a unique solution. For 2D steady-state conduction, common boundary conditions include:

*   **Dirichlet Boundary Condition (Prescribed Temperature):** The temperature is specified on a boundary.
    *   Example: $T = T_0$ on a specific wall.
    *   **Implementation in FVM:** For a face on the boundary, if the adjacent cell is outside the domain, its temperature is known from the boundary condition. For example, if the East face is a Dirichlet boundary with $T_E = T_{boundary}$, then $T_E$ in the equation for cell P is simply $T_{boundary}$.

*   **Neumann Boundary Condition (Prescribed Heat Flux):** The rate of heat transfer across the boundary is specified.
    *   Example: $\mathbf{q} \cdot \mathbf{n} = q_0$ on a boundary, or $-k \frac{\partial T}{\partial n} = q_0$.
    *   **Implementation in FVM:** For a boundary face, the flux across that face is directly used. For an adiabatic (insulated) boundary, the flux is zero: $-k \frac{\partial T}{\partial n} = 0$, which means $\frac{\partial T}{\partial n} = 0$.
        *   If the East face is insulated, $\left. \frac{\partial T}{\partial x} \right|_{East} = 0$. This term vanishes from the equation for cell P.

*   **Mixed (Robin) Boundary Condition:** A combination of temperature and flux is specified.
    *   Example: Convection to an ambient fluid: $-k \frac{\partial T}{\partial n} = h (T - T_{\infty})$, where $h$ is the convective heat transfer coefficient and $T_{\infty}$ is the ambient temperature.
    *   **Implementation in FVM:** This requires approximating the temperature gradient at the boundary using a scheme (e.g., CDS) and then substituting the boundary condition relationship. For a face between cell P and an external ambient, this can be approximated as:
        $-k \frac{T_P - T_{boundary\_face}}{\delta x_{P\_face}} = h (T_{boundary\_face} - T_{\infty})$
        If we assume the temperature at the boundary face is simply $T_P$ for a boundary cell, or we use a virtual node. More commonly, for a boundary face of cell P, the heat flux entering cell P from outside is $h (T_{\infty} - T_P)$, which is added to the flux balance for cell P.

*   **Reference:** All the textbooks provide detailed discussions on various boundary conditions and their implementation in numerical methods. Anderson Jr. (2012) and Versteeg & Malalasekera (2008) are particularly good for understanding the FVM approach to boundary conditions.

## 5. Solving the Algebraic System

After discretizing the Laplace equation for all internal control volumes, we obtain a system of linear algebraic equations:

$a_P T_P = \sum_{nb} a_{nb} T_{nb} + b_P$

where:
*   $T_P$ is the unknown temperature at the center of control volume P.
*   $T_{nb}$ are the temperatures of the neighboring control volumes (E, W, N, S).
*   $a_P$ is the coefficient of $T_P$, which is the sum of the coefficients of the neighboring nodes plus any terms arising from the left side of the equation.
*   $a_{nb}$ are the coefficients of the neighboring nodes, representing thermal conductances.
*   $b_P$ is a source term, which is zero for the Laplace equation without heat generation.

For the 2D conduction problem with uniform grid and CDS, the equation for point P(i, j) is:

$\frac{\Delta y}{\Delta x} T_{i+1,j} + \frac{\Delta y}{\Delta x} T_{i-1,j} + \frac{\Delta x}{\Delta y} T_{i,j+1} + \frac{\Delta x}{\Delta y} T_{i,j-1} - \left( 2\frac{\Delta y}{\Delta x} + 2\frac{\Delta x}{\Delta y} \right) T_{i,j} = 0$

This can be written in the general form as:

$a_P T_P = a_E T_E + a_W T_W + a_N T_N + a_S T_S$

where:
*   $a_P = 2\left(\frac{\Delta y}{\Delta x} + \frac{\Delta x}{\Delta y}\right)$ (assuming $k=1$)
*   $a_E = a_W = \frac{\Delta y}{\Delta x}$
*   $a_N = a_S = \frac{\Delta x}{\Delta y}$

This system of equations needs to be solved. Since the coefficients are fixed and the equations are linear, direct or iterative methods can be used.

**Solution Techniques:**

*   **Direct Methods (e.g., Gaussian Elimination, Matrix Inversion):** Suitable for small systems. For larger grids, the coefficient matrix becomes very large and sparse, making direct methods computationally expensive and memory-intensive.
*   **Iterative Methods:** More suitable for large systems. The idea is to start with an initial guess for the temperatures and iteratively refine them until convergence is achieved.

    *   **Jacobi Method:** Uses values from the previous iteration to update all unknowns simultaneously.
    *   **Gauss-Seidel Method:** Uses updated values as soon as they are available in the current iteration, leading to faster convergence.
    *   **Successive Over-Relaxation (SOR):** An improvement over Gauss-Seidel, it introduces a relaxation factor to accelerate convergence.
    *   **Conjugate Gradient (CG) methods:** For symmetric positive-definite matrices (which arise from diffusion problems).

The choice of solver depends on the size of the problem, desired accuracy, and available computational resources.

*   **Reference:** Patankar (2017) provides an excellent overview of iterative solution techniques for linear systems encountered in CFD. Anderson Jr. (2012) also discusses various solution strategies.

## 6. Example: 2D Steady State Conduction in a Square Plate

Consider a square plate of dimensions $L \times L$. Let the thermal conductivity be $k=1$. The grid is uniform with $N \times N$ cells.

**Problem Setup:**

*   Domain: $0 \le x \le L$, $0 \le y \le L$.
*   Governing Equation: $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$.
*   Boundary Conditions:
    *   Left boundary ($x=0$): $T(0, y) = T_L$ (constant)
    *   Right boundary ($x=L$): $T(L, y) = T_R$ (constant)
    *   Bottom boundary ($y=0$): $T(x, 0) = T_B$ (constant)
    *   Top boundary ($y=L$): $T(x, L) = T_T$ (constant)

Let's consider a simple case: $L=1$, $N=2$ (so $3 \times 3$ grid points), $T_L = 100$, $T_R = 0$, $T_B = 0$, $T_T = 0$.
The grid points are $(x_i, y_j)$ where $x_i = i \frac{L}{N}$ and $y_j = j \frac{L}{N}$ for $i, j = 0, 1, ..., N$.
Here, $x_0=0, x_1=0.5, x_2=1$ and $y_0=0, y_1=0.5, y_2=1$. $\Delta x = \Delta y = 0.5$.

The internal grid points are P11 (at $x=0.5, y=0.5$).
The grid points are P00, P10, P20, P01, P11, P21, P02, P12, P22.
$T_{0j} = 100$ for $j=0,1,2$.
$T_{2j} = 0$ for $j=0,1,2$.
$T_{i0} = 0$ for $i=0,1,2$.
$T_{i2} = 0$ for $i=0,1,2$.

The only internal node is P11. Its neighbors are:
*   W: P01 ($T_0=100$)
*   E: P21 ($T_2=0$)
*   S: P10 ($T_0=0$)
*   N: P12 ($T_2=0$)

The equation for P11 (i=1, j=1) with $\Delta x = \Delta y = 0.5$:
$\frac{\Delta y}{\Delta x} = \frac{0.5}{0.5} = 1$
$\frac{\Delta x}{\Delta y} = \frac{0.5}{0.5} = 1$

The discretized equation:
$1 \cdot T_{21} + 1 \cdot T_{01} + 1 \cdot T_{12} + 1 \cdot T_{10} - (2 \cdot 1 + 2 \cdot 1) T_{11} = 0$

$T_{E} + T_{W} + T_{N} + T_{S} - 4 T_{P} = 0$

Substituting known boundary values:
$0 + 100 + 0 + 0 - 4 T_{11} = 0$
$100 - 4 T_{11} = 0$
$T_{11} = \frac{100}{4} = 25$

**For a more complex grid (e.g., $5 \times 5$ grid, $N=4$), you would have multiple internal nodes and would need to solve a system of equations using an iterative solver.**

**Example with $3 \times 3$ grid (N=2):**

Let $L=1$, $T_L=100$, $T_R=0$, $T_B=0$, $T_T=0$.
$\Delta x = \Delta y = 0.5$.
Nodes: P00 to P22.
Internal node: P11 (at $x=0.5, y=0.5$).
Neighbors:
W: P01 ($T_0=100$)
E: P21 ($T_2=0$)
S: P10 ($T_0=0$)
N: P12 ($T_2=0$)

Discretized equation for P11:
$\frac{T_E - T_P}{\Delta x/2} \Delta y - \frac{T_P - T_W}{\Delta x/2} \Delta y + \frac{T_N - T_P}{\Delta y/2} \Delta x - \frac{T_P - T_S}{\Delta y/2} \Delta x = 0$
With $k=1, \Delta x = \Delta y = 0.5$:
$\frac{T_{21} - T_{11}}{0.25} \cdot 0.5 - \frac{T_{11} - T_{01}}{0.25} \cdot 0.5 + \frac{T_{12} - T_{11}}{0.25} \cdot 0.5 - \frac{T_{11} - T_{10}}{0.25} \cdot 0.5 = 0$

Multiply by $\frac{0.25}{0.5} = 0.5$:
$0.5 (T_{21} - T_{11}) - 0.5 (T_{11} - T_{01}) + 0.5 (T_{12} - T_{11}) - 0.5 (T_{11} - T_{10}) = 0$

Multiply by 2:
$(T_{21} - T_{11}) - (T_{11} - T_{01}) + (T_{12} - T_{11}) - (T_{11} - T_{10}) = 0$

$T_{21} + T_{01} + T_{12} + T_{10} - 4 T_{11} = 0$

Substitute BCs:
$0 + 100 + 0 + 0 - 4 T_{11} = 0$
$T_{11} = 25$

**Learning Outcome Alignment:**

*   **CO1:** Understands governing equations (Laplace equation). (K2)
*   **CO2:** Applies finite difference concepts for discretization. (K3)
*   **CO3:** Demonstrates FVM for 2D conduction. (K3)
*   **CO4:** Understands diffusion (conduction is a diffusion process). (K2)
*   **CO5:** Can interpret results (e.g., the calculated temperature of 25 for the example). (K3)

## 7. Practice Questions

1.  **Derivation:** Derive the discretized algebraic equation for an internal node in a 2D steady-state conduction problem using the Finite Volume Method with the Central Differencing Scheme. Assume a non-uniform grid in both x and y directions. Let the control volume be centered at P, with neighbors W, E, S, N.

    *   **Answer Hint:** Consider the distances between cell centers and faces ($\delta x_{PE}, \delta x_{PW}, \delta y_{PN}, \delta y_{PS}$) and the grid spacings ($\Delta x_P, \Delta x_E$, etc.). The integral of the flux across a face of area $A$ is $k \frac{T_{neighbor} - T_P}{\delta x} A$.

2.  **Boundary Condition Application:** Consider a 2D steady-state conduction problem on a rectangular domain. A portion of the right boundary ($x=L$) has a specified temperature ($T=T_1$), while the rest of the right boundary is insulated ($\frac{\partial T}{\partial x} = 0$). How would you implement these conditions for the control volumes adjacent to the right boundary?

    *   **Answer Hint:** For the portion with specified temperature, use the Dirichlet condition. For the insulated portion, set the flux term across the boundary face to zero.

3.  **Conceptual:** Explain why the Finite Volume Method inherently conserves quantities like heat, unlike some Finite Difference Method formulations.

    *   **Answer Hint:** Focus on the integral form of the governing equations and how fluxes are balanced across control volume faces.

4.  **Simple Calculation:** A 2D square plate ($2\Delta x \times 2\Delta y$) has its left edge at $T=100$, and the other three edges are at $T=0$. Use FVM with CDS to estimate the temperature at the center of the plate.

    *   **Answer Hint:** This is similar to the example provided in Section 6 with $N=2$.

## 8. Important Points to Remember

*   **FVM is based on integral conservation laws.** This ensures that quantities are conserved across control volume interfaces.
*   **The Laplace equation ($\nabla^2 T = 0$) governs 2D steady-state conduction without heat sources.**
*   **Central Differencing Scheme (CDS) is generally preferred for diffusion-dominated problems like conduction due to its second-order accuracy and stability.**
*   **The approximation of gradients at cell faces is crucial.** For CDS, it's the difference in temperature between adjacent cell centers divided by the distance.
*   **Boundary conditions must be applied correctly.** Dirichlet conditions set known temperatures at boundary faces, while Neumann conditions relate fluxes at boundaries.
*   **The discretization process converts the PDE into a system of linear algebraic equations.**
*   **Iterative methods are typically used to solve these large systems for practical problems.**
*   **Thermal conductivity ($k$) appears in the coefficients of the algebraic equations.** If $k$ is not constant, it needs to be handled carefully at the interfaces (harmonic mean is often used for conductivity between two different materials).

This concludes the notes on two-dimensional steady-state conduction problems using the Finite Volume Method. This foundational topic sets the stage for more complex heat transfer and fluid flow problems addressed in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
