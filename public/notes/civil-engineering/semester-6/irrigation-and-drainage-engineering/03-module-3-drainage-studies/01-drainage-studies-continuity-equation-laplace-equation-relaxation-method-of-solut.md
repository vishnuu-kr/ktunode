---
title: "Drainage studies -continuity equation, Laplace equation, relaxation method of solution-Typical boundary conditions like impervious layer, plane of symmetry, free water surface, water at rest or slowly moving water, seepage surface- Dupit Forchheimer Theory steady low above an impervious horizontal boundary-Dupits equation-water table subject to recharge."
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 3: Drainage studies "
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811111"
status: "completed"
scrapedAt: "2026-05-20T18:55:09.330Z"
---
# Irrigation and Drainage Engineering: Module 3 - Drainage Studies

## Introduction to Drainage Studies

Drainage studies are crucial in understanding and managing water movement in the soil, particularly in the context of agriculture and civil engineering. This module focuses on the fundamental principles governing subsurface water flow and how these principles are applied to drainage design.

---

## 1. The Continuity Equation

**Key Concept:** The continuity equation is a fundamental principle in fluid mechanics that states that mass is conserved. In the context of groundwater flow, it translates to the conservation of water volume.

**Definition:** The continuity equation for groundwater flow states that the rate at which water enters a control volume must equal the rate at which it leaves, plus the rate of accumulation within the volume.

**Mathematical Formulation:**

For steady flow (no change in storage with time), the continuity equation can be simplified. Consider a small control volume with dimensions $\Delta x$, $\Delta y$, and $\Delta z$.

The volumetric flow rate across a face is given by $Q = -K \frac{\partial h}{\partial x} A$, where:
*   $K$ is the hydraulic conductivity
*   $\frac{\partial h}{\partial x}$ is the hydraulic gradient in the x-direction
*   $A$ is the cross-sectional area

Applying the continuity equation to a small control volume in 2D (for simplicity, considering flow in x and y directions):

$(\text{Inflow in x} - \text{Outflow in x}) + (\text{Inflow in y} - \text{Outflow in y}) = \text{Rate of change of storage}$

$(-K \frac{\partial h}{\partial x} \Delta y \Delta z) - (-K \frac{\partial h}{\partial x} + \frac{\partial}{\partial x}(K \frac{\partial h}{\partial x}) \Delta x) \Delta y \Delta z + (-K \frac{\partial h}{\partial y} \Delta x \Delta z) - (-K \frac{\partial h}{\partial y} + \frac{\partial}{\partial y}(K \frac{\partial h}{\partial y}) \Delta y) \Delta x \Delta z = \frac{\partial \theta}{\partial t} \Delta x \Delta y \Delta z$

Where $\theta$ is the volumetric water content.

Simplifying for a homogeneous and isotropic medium ($K$ is constant in all directions) and assuming steady flow ($\frac{\partial \theta}{\partial t} = 0$):

$K \frac{\partial^2 h}{\partial x^2} + K \frac{\partial^2 h}{\partial y^2} = 0$

Dividing by $K$:

$\frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2} = 0$

This is the **Laplace Equation** in two dimensions for steady, incompressible fluid flow in a porous medium.

**Learning Outcome Covered:** Understanding the fundamental principle of mass conservation applied to groundwater flow.

---

## 2. The Laplace Equation

**Key Concept:** The Laplace equation describes steady-state, two-dimensional groundwater flow in a homogeneous and isotropic medium where there is no source or sink of water.

**Definition:** The Laplace equation is a second-order partial differential equation. In two dimensions, it is expressed as:

$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$

Where:
*   $\phi$ is the hydraulic head ($h$) in groundwater hydrology, or sometimes represented by stream function or velocity potential.

**Applicability:**
*   Steady-state flow: The hydraulic head at any point does not change with time.
*   Incompressible fluid: The density of water is constant.
*   Homogeneous and isotropic porous medium: Hydraulic conductivity ($K$) is uniform and the same in all directions.
*   No sources or sinks: No wells pumping water in or out, no recharge or deep percolation within the domain of interest.

**Relationship to Continuity Equation:** As shown above, the Laplace equation is a direct consequence of the continuity equation under the stated assumptions.

**Learning Outcome Covered:** Understanding the mathematical representation of steady-state groundwater flow and its underlying assumptions.

---

## 3. Relaxation Method of Solution

**Key Concept:** The relaxation method is an iterative numerical technique used to solve systems of linear equations, including partial differential equations like the Laplace equation, especially when analytical solutions are difficult or impossible to obtain.

**How it Works:**
1.  **Discretization:** The flow domain is divided into a grid (mesh) of points.
2.  **Initial Guess:** An initial estimate of the hydraulic head ($\phi$) is assigned to each grid point.
3.  **Residual Calculation:** At each grid point, the value of the Laplace equation is calculated using the current estimates of the head at neighboring points. This value, which should ideally be zero for a true solution, is called the **residual**.
4.  **Relaxation:** The residual is "relaxed" or adjusted by modifying the head at the point. The adjustment is typically a fraction of the residual. A "relaxation factor" is used to control the convergence speed.
5.  **Iteration:** Steps 3 and 4 are repeated for all grid points. This process is iterated until the residuals at all points are sufficiently small, indicating that the solution has converged.

**Steps for a 2D Laplace Equation on a Grid:**

For a grid point $(i, j)$, the Laplace equation can be approximated using finite differences:

$\frac{\phi_{i+1, j} - 2\phi_{i, j} + \phi_{i-1, j}}{(\Delta x)^2} + \frac{\phi_{i, j+1} - 2\phi_{i, j} + \phi_{i, j-1}}{(\Delta y)^2} = 0$

Assuming $\Delta x = \Delta y = \Delta s$ (square grid), this simplifies to:

$\phi_{i+1, j} + \phi_{i-1, j} + \phi_{i, j+1} + \phi_{i, j-1} - 4\phi_{i, j} = 0$

Rearranging to solve for $\phi_{i, j}$:

$\phi_{i, j} = \frac{\phi_{i+1, j} + \phi_{i-1, j} + \phi_{i, j+1} + \phi_{i, j-1}}{4}$

This is the **five-point formula**.

**Relaxation Process:**
*   Calculate the residual $R_{i, j} = \phi_{i+1, j} + \phi_{i-1, j} + \phi_{i, j+1} + \phi_{i, j-1} - 4\phi_{i, j}$ at each interior grid point.
*   If $R_{i, j} \neq 0$, update the value of $\phi_{i, j}$ using the relaxation formula:
    $\phi_{i, j}^{\text{new}} = \phi_{i, j}^{\text{old}} + \omega \cdot \frac{R_{i, j}}{4}$
    where $\omega$ is the relaxation factor ($0 < \omega < 2$). For the Laplace equation, a typical value is $\omega = 1$ (Gauss-Seidel method), or sometimes slightly higher values can improve convergence.

**Learning Outcome Covered:** Understanding numerical methods for solving drainage flow problems.

---

## 4. Typical Boundary Conditions

Boundary conditions are essential for defining the physical limits of the flow domain and how water interacts with its boundaries. They allow us to obtain specific solutions to the Laplace equation.

### 4.1. Impervious Layer

**Definition:** A boundary where there is no flow across it, either into or out of the domain. This typically occurs at the bottom of a saturated zone where the material is impermeable or at a depth where the water table is defined.

**Mathematical Representation:** The flow is perpendicular to the boundary, meaning the hydraulic gradient in the direction perpendicular to the boundary is zero.
*   If the impervious boundary is horizontal (e.g., at $y = 0$), then $\frac{\partial h}{\partial y} = 0$ at $y=0$.
*   If the impervious boundary is vertical (e.g., at $x = 0$), then $\frac{\partial h}{\partial x} = 0$ at $x=0$.

**On a Grid (Relaxation Method):** For a point $(i, j)$ adjacent to an impervious boundary. If the boundary is at $j-1$ (bottom), and the point $(i, j-1)$ is outside the domain (impervious), we can imagine a "mirror image" point $(i, j-2)$ with the same head as $(i, j)$. Alternatively, the condition $\frac{\partial h}{\partial y} = 0$ implies $h_{i, j-1} = h_{i, j+1}$ for a horizontal impervious boundary at $y=0$ (represented by the grid line $j=1$, and the boundary is between $j=0$ and $j=1$). In the five-point formula, if point $(i, j-1)$ represents the boundary condition, it's handled differently.

**Example:** Consider a grid where the bottom boundary is impervious. For a point $(i, j)$ just above the impervious boundary, the flow is only in the y-direction. The condition is that $h_{i, j-1}$ is effectively the same as $h_{i, j+1}$ in calculating the flux.

**Learning Outcome Covered:** Applying boundary conditions related to impermeable surfaces.

### 4.2. Plane of Symmetry

**Definition:** A line or plane within the flow domain where the flow pattern is mirrored on either side. Water flow is perpendicular to this plane.

**Mathematical Representation:** Similar to an impervious boundary, the hydraulic gradient normal to the plane of symmetry is zero.
*   If the plane of symmetry is vertical (e.g., at $x = c$), then $\frac{\partial h}{\partial x} = 0$ at $x = c$.

**On a Grid:** For a point $(i, j)$ on a grid that lies on a plane of symmetry, the value of the head at the mirrored point outside the domain is the same as the head at the point on the other side within the domain.

**Example:** In a drainage system with a symmetrical layout, the center line can be a plane of symmetry.

**Learning Outcome Covered:** Applying boundary conditions related to symmetry in flow problems.

### 4.3. Free Water Surface

**Definition:** The upper surface of the groundwater that is exposed to the atmosphere (or a region of atmospheric pressure). The hydraulic head at this surface is equal to the elevation of the surface.

**Mathematical Representation:** $h = z$, where $h$ is the hydraulic head and $z$ is the elevation of the free surface. This implies $\frac{\partial h}{\partial s} = \frac{\partial z}{\partial s}$, where $s$ is any direction along the free surface.

**On a Grid:** For grid points lying on the free water surface, the head is set equal to the elevation of that grid point. This is a non-linear boundary condition because the location of the free surface itself depends on the solution.

**Example:** The water table in an unconfined aquifer.

**Learning Outcome Covered:** Applying boundary conditions related to the water table.

### 4.4. Water at Rest or Slowly Moving Water

**Definition:** In regions where the water is essentially static or moving very slowly, the hydraulic head is constant throughout that region.

**Mathematical Representation:** $\nabla h = 0$, which means $\frac{\partial h}{\partial x} = 0$ and $\frac{\partial h}{\partial y} = 0$.

**On a Grid:** All grid points within this region will have the same hydraulic head.

**Example:** A large body of stagnant water.

**Learning Outcome Covered:** Understanding boundary conditions for static or near-static water.

### 4.5. Seepage Surface

**Definition:** The boundary where groundwater emerges from the soil and flows into the air, typically at the face of a ditch, canal, or embankment. Along a seepage surface, the hydraulic head is equal to the elevation of the surface.

**Mathematical Representation:** Similar to the free water surface, $h = z$ along the seepage surface. However, the seepage surface is often a boundary between a saturated zone and an unsaturated zone, and its location is determined by the flow.

**On a Grid:** This can be a complex boundary condition to implement in numerical methods. It is often implicitly handled by setting the head equal to the elevation at grid points where seepage is expected.

**Example:** Water flowing out of an embankment into the air.

**Learning Outcome Covered:** Applying boundary conditions related to water emerging from the soil.

---

## 5. Dupuit-Forchheimer Theory: Steady Flow Above an Impervious Horizontal Boundary

**Key Concept:** This theory simplifies the analysis of steady, saturated flow in unconfined aquifers with a free surface, particularly for flow towards drains or ditches. It makes assumptions that linearize the flow and make it analytically tractable.

**Assumptions:**
1.  **Horizontal Flow:** The primary component of flow is horizontal. Vertical flow components are neglected.
2.  **Constant Hydraulic Gradient:** The hydraulic gradient in the horizontal direction is constant with respect to height (i.e., $\frac{\partial h}{\partial x}$ is independent of $y$). This implies that the flow lines are horizontal.
3.  **Free Surface as Water Table:** The upper surface of the groundwater is a free surface (water table) where the pressure is atmospheric.
4.  **Impervious Horizontal Base:** The flow occurs above a horizontal, impermeable layer.
5.  **Steady State:** The flow conditions are constant over time.
6.  **Homogeneous and Isotropic Medium:** The hydraulic conductivity ($K$) is constant throughout the aquifer.

**Derivation of Dupuit's Equation:**

Consider a flow system with an impervious horizontal base at $y=0$. The water table is at a height $h(x)$. We are considering flow in the x-direction.

The continuity equation in 2D is:
$\frac{\partial}{\partial x}(K \frac{\partial h}{\partial x}) + \frac{\partial}{\partial y}(K \frac{\partial h}{\partial y}) = 0$

Under Dupuit's assumptions:
*   The horizontal flow rate ($Q_x$) is dominant.
*   The hydraulic gradient $\frac{\partial h}{\partial x}$ is independent of $y$.
*   The vertical flow component $\frac{\partial h}{\partial y}$ is negligible compared to the horizontal flow.

The discharge per unit width ($q_x$) through a vertical cross-section of area $h(x) \times 1$ is given by Darcy's Law:

$q_x = -K \cdot h(x) \cdot \frac{dh}{dx}$

(Note: Darcy's Law is $v = -K \frac{dh}{ds}$. The volumetric flux is $q = -KA \frac{dh}{ds}$. Here, $A$ is the cross-sectional area perpendicular to flow. For flow in the x-direction, the area of the vertical slice is $h(x) \times \text{unit width}$. So $q_x = -K \cdot h(x) \cdot \frac{dh}{dx}$.)

Applying continuity: The flow rate $q_x$ at a cross-section $x$ must be equal to the flow rate $q_{x+\Delta x}$ at $x+\Delta x$ plus any recharge or discharge between $x$ and $x+\Delta x$. For no recharge/discharge in this segment:

$q_x = q_{x+\Delta x}$

This implies $\frac{dq_x}{dx} = 0$, which is consistent with the equation above if $K$ is constant and $h$ varies only with $x$.

The equation $q_x = -K h \frac{dh}{dx}$ is the **Dupuit's Equation**.

**Learning Outcome Covered:** Understanding the Dupuit-Forchheimer theory and its core equation for steady flow.

---

## 6. Dupuit's Equation for Specific Cases

Dupuit's equation is a first-order differential equation that can be solved for various boundary conditions to determine the shape of the water table.

**Form of Dupuit's Equation:**
$K h \frac{dh}{dx} = -q_x$ (where $q_x$ is the discharge, often negative if flowing from right to left, or we consider the magnitude of flow). Let's use $q$ as the magnitude of flow per unit width.
$h \frac{dh}{dx} = -\frac{q}{K}$

Integrating with respect to $x$:
$\int h \, dh = -\int \frac{q}{K} \, dx$
$\frac{1}{2} h^2 = -\frac{q}{K} x + C$

Or, more generally, integrating $K h \, dh = -q \, dx$:
$\frac{1}{2} K h^2 = -qx + C$

The constant of integration $C$ is determined by the boundary conditions.

### 6.1. Flow Between Two Parallel Ditches (or Drains)

Consider two parallel ditches separated by a distance $L$.
*   Ditch 1 is at $x=0$, with water table height $h_1$.
*   Ditch 2 is at $x=L$, with water table height $h_2$.
*   The total flow per unit width between the ditches is $q$ (constant).

Boundary conditions:
*   At $x=0$, $h = h_1$.
*   At $x=L$, $h = h_2$.

Using $\frac{1}{2} K h^2 = -qx + C$:
At $x=0$: $\frac{1}{2} K h_1^2 = C$
So, $C = \frac{1}{2} K h_1^2$.

The equation becomes: $\frac{1}{2} K h^2 = -qx + \frac{1}{2} K h_1^2$

At $x=L$: $\frac{1}{2} K h_2^2 = -qL + \frac{1}{2} K h_1^2$

Solving for $q$:
$qL = \frac{1}{2} K h_1^2 - \frac{1}{2} K h_2^2$
$q = \frac{K (h_1^2 - h_2^2)}{2L}$

This equation gives the flow rate per unit width. The water table profile is:
$h^2 = h_1^2 - \frac{2q}{K} x = h_1^2 - \frac{h_1^2 - h_2^2}{L} x$
$h(x) = \sqrt{h_1^2 - \frac{h_1^2 - h_2^2}{L} x}$

**Example:** A farmland between two parallel drainage ditches spaced 50 m apart. The water table elevation is 2.5 m above the impervious base at one ditch and 1.5 m at the other. The hydraulic conductivity of the soil is $5 \times 10^{-5}$ m/s. Calculate the flow rate per meter width and the water table elevation midway between the ditches.

$L = 50$ m, $h_1 = 2.5$ m, $h_2 = 1.5$ m, $K = 5 \times 10^{-5}$ m/s.

$q = \frac{5 \times 10^{-5} \text{ m/s} \times ((2.5 \text{ m})^2 - (1.5 \text{ m})^2)}{2 \times 50 \text{ m}}$
$q = \frac{5 \times 10^{-5} \times (6.25 - 2.25)}{100}$
$q = \frac{5 \times 10^{-5} \times 4}{100} = \frac{20 \times 10^{-5}}{100} = 2 \times 10^{-6} \text{ m}^3/\text{s/m}$

Midway between ditches ($x = L/2 = 25$ m):
$h(25) = \sqrt{(2.5)^2 - \frac{(2.5)^2 - (1.5)^2}{50} \times 25}$
$h(25) = \sqrt{6.25 - \frac{4}{50} \times 25}$
$h(25) = \sqrt{6.25 - \frac{100}{50}} = \sqrt{6.25 - 2}$
$h(25) = \sqrt{4.25} \approx 2.06$ m

**Learning Outcome Covered:** Applying Dupuit's equation to solve practical drainage scenarios.

### 6.2. Water Table Subject to Recharge

**Key Concept:** When there is uniform vertical recharge (e.g., from rainfall or infiltration) over the area, it adds to the flow.

**Modified Dupuit's Equation:**
The Darcy flux in the x-direction, $q_x$, is no longer constant. It changes due to recharge.
Let $r$ be the rate of recharge (volume per unit area per unit time), e.g., in m/s.
Consider a segment of width $dx$. The recharge into this segment is $r \cdot dx$.

Applying continuity to a segment:
$q_x - q_{x+dx} = r \cdot dx$
$-dq_x = r \cdot dx$
$\frac{dq_x}{dx} = -r$

We know $q_x = -K h \frac{dh}{dx}$. Substitute this into the equation:
$\frac{d}{dx} (-K h \frac{dh}{dx}) = -r$
$-K \frac{d}{dx} (h \frac{dh}{dx}) = -r$
$\frac{d}{dx} (h \frac{dh}{dx}) = \frac{r}{K}$

Integrating with respect to $x$:
$h \frac{dh}{dx} = \frac{r}{K} x + C_1$

Integrating again:
$\int h \, dh = \int (\frac{r}{K} x + C_1) \, dx$
$\frac{1}{2} h^2 = \frac{r}{2K} x^2 + C_1 x + C_2$

**Example:** A water table under a flat, impermeable surface with uniform recharge $r$. The water table elevation is $h_0$ at $x=0$ and rises to a maximum at $x=L$ where it might feed into a ditch or channel. Assume the water table has zero slope at its highest point (a watershed divide), so $\frac{dh}{dx} = 0$ at $x=L$.

Boundary conditions:
*   At $x=0$, $h=h_0$.
*   At $x=L$, $\frac{dh}{dx} = 0$.

From $\frac{dh}{dx} = \frac{r}{K} x + C_1$:
At $x=L$, $0 = \frac{r}{K} L + C_1 \Rightarrow C_1 = -\frac{rL}{K}$

So, $\frac{dh}{dx} = \frac{r}{K} x - \frac{rL}{K} = \frac{r}{K}(x-L)$

From $\frac{1}{2} h^2 = \frac{r}{2K} x^2 + C_1 x + C_2$:
Substitute $C_1 = -\frac{rL}{K}$:
$\frac{1}{2} h^2 = \frac{r}{2K} x^2 - \frac{rL}{K} x + C_2$

At $x=0$, $h=h_0$:
$\frac{1}{2} h_0^2 = C_2$

So, $\frac{1}{2} h^2 = \frac{r}{2K} x^2 - \frac{rL}{K} x + \frac{1}{2} h_0^2$
$h^2 = \frac{r}{K} x^2 - \frac{2rL}{K} x + h_0^2$
$h(x) = \sqrt{h_0^2 - \frac{2rL}{K} x + \frac{r}{K} x^2}$

This equation describes a parabolic water table profile under uniform recharge. The highest point of the water table is at $x=L$, where $h(L) = \sqrt{h_0^2 - \frac{2rL^2}{K} + \frac{rL^2}{K}} = \sqrt{h_0^2 - \frac{rL^2}{K}}$.

**Learning Outcome Covered:** Analyzing groundwater flow with recharge using Dupuit's equation.

---

## Practice Questions and Exercises

**Question 1:**
State the Laplace equation in 2D and the conditions under which it is valid for groundwater flow.

**Answer:**
The Laplace equation in 2D is $\frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2} = 0$.
It is valid for:
*   Steady-state flow.
*   Incompressible fluid (water).
*   Homogeneous and isotropic porous medium.
*   No sources or sinks within the flow domain.

**Question 2:**
Explain the concept of relaxation in the context of solving the Laplace equation. What is the five-point formula used in this method?

**Answer:**
Relaxation is an iterative numerical technique to solve partial differential equations like the Laplace equation. It involves:
1.  Discretizing the domain into a grid.
2.  Making an initial guess of the hydraulic head at each grid point.
3.  Calculating the residual (the value of the equation that should be zero).
4.  Adjusting (relaxing) the head at a point based on its residual to reduce the error.
5.  Repeating until convergence is achieved (residuals are small).

The five-point formula for a square grid ($\Delta x = \Delta y = \Delta s$) is:
$\phi_{i, j} = \frac{\phi_{i+1, j} + \phi_{i-1, j} + \phi_{i, j+1} + \phi_{i, j-1}}{4}$

**Question 3:**
Describe the boundary condition at an impervious layer.

**Answer:**
At an impervious layer, there is no flow across the boundary. This means the hydraulic gradient perpendicular to the boundary is zero. Mathematically, if the boundary is horizontal ($y=c$), $\frac{\partial h}{\partial y} = 0$. If it is vertical ($x=c$), $\frac{\partial h}{\partial x} = 0$.

**Question 4:**
What are the key assumptions of the Dupuit-Forchheimer theory for steady flow above an impervious horizontal boundary?

**Answer:**
The key assumptions are:
1.  Horizontal flow is dominant; vertical flow is negligible.
2.  The hydraulic gradient in the horizontal direction is constant with height.
3.  The free surface is the water table.
4.  There is an impervious horizontal base.
5.  Flow is steady.
6.  The porous medium is homogeneous and isotropic.

**Question 5:**
A drainage ditch is parallel to an impervious horizontal boundary. The water table elevation at a distance of 10 m from the ditch is 2.0 m above the boundary, and at a distance of 30 m from the ditch, it is 3.0 m above the boundary. If the hydraulic conductivity is $4 \times 10^{-5}$ m/s, calculate the flow rate per unit width into the ditch, assuming the ditch is at $x=0$ and the impervious boundary is at $y=0$. Use Dupuit's equation. Assume the ditch is wide enough that the water table elevation at the ditch is the same as the ditch water level, say $h_0$. For simplicity, let's consider the flow between $x_1=10$m and $x_2=30$m.

**Answer:**
We are applying Dupuit's equation in the form $\frac{1}{2} K h^2 = -qx + C$.
Let the ditch be at $x=0$ (although the problem refers to distances from it). The problem statement implies flow towards the ditch. Let's rephrase this: Consider flow from a region where $h=3.0$m at $x=30$m to a region where $h=2.0$m at $x=10$m. The flow is towards smaller $x$.

Let's set up the problem more clearly:
Ditch is at $x=0$.
At $x_1 = 10$ m, $h_1 = 2.0$ m.
At $x_2 = 30$ m, $h_2 = 3.0$ m.
$K = 4 \times 10^{-5}$ m/s.
The flow is from $x=30$ to $x=10$. The discharge $q$ should be positive if flow is from right to left. Let's assume the equation is $\frac{1}{2} K h^2 = qx + C$ where $q$ is the discharge if flowing from left to right. If it flows from right to left, the discharge term should be positive.

Let's use the form: $\frac{1}{2} K h^2 = -q_{net} x + C$, where $q_{net}$ is the net flow out of the region from left to right.
The region is between $x=10$ and $x=30$. Flow is from $x=30$ to $x=10$.
So, flow *into* the region at $x=30$ is $q'$, and flow *out* at $x=10$ is $q'$.
Let's consider the region as a whole.

We are given two points on the water table and need to find the flow rate between them.
Let $x=10$ correspond to point 1 and $x=30$ to point 2.
$\frac{1}{2} K h_1^2 = -q(x_1) + C_1$
$\frac{1}{2} K h_2^2 = -q(x_2) + C_2$

Using the form $\frac{1}{2} K h^2 = -q x + C$, where $q$ is the discharge per unit width (positive if flow is to the right).
At $x_1 = 10$, $h_1 = 2.0$: $\frac{1}{2} K (2.0)^2 = -q (10) + C$
At $x_2 = 30$, $h_2 = 3.0$: $\frac{1}{2} K (3.0)^2 = -q (30) + C$

Subtracting the first equation from the second:
$\frac{1}{2} K (3.0^2 - 2.0^2) = -q(30 - 10)$
$\frac{1}{2} K (9 - 4) = -q(20)$
$\frac{1}{2} K (5) = -20q$
$2.5 K = -20q$

This implies $q$ is negative, meaning flow is to the left. The magnitude of the flow rate per unit width is $|q|$.

$|q| = \frac{2.5 K}{20} = \frac{2.5 \times 4 \times 10^{-5}}{20} = \frac{10 \times 10^{-5}}{20} = 0.5 \times 10^{-5} \text{ m}^3/\text{s/m}$
$|q| = 5 \times 10^{-6} \text{ m}^3/\text{s/m}$

The flow rate is into the ditch from the region at $x=10$. So, if the ditch is at $x=0$, this represents the flow coming towards it.

**Question 6:**
If a uniform recharge of $r = 1 \times 10^{-7}$ m/s is applied to the situation in Question 5, how would the calculation of flow rate change? (Conceptual answer is fine).

**Answer:**
With recharge $r$, the flow rate $q_x$ is no longer constant with $x$. The Dupuit's equation becomes:
$\frac{d}{dx} (h \frac{dh}{dx}) = \frac{r}{K}$
The solution involves a parabolic water table profile. The flow rate into the ditch would be the value of $-q_x$ at the ditch's location, and $q_x$ would be a function of $x$. The equation $h \frac{dh}{dx} = \frac{r}{K} x + C_1$ would be used to find the profile, and then the flow rate could be determined from the derivative at the ditch. The problem would require specifying boundary conditions for both head and its derivative, or two head values at different locations.

---

## Important Points to Remember

*   **Continuity Equation:** The bedrock of fluid flow analysis, ensuring no mass is lost or created.
*   **Laplace Equation:** A powerful tool for steady-state, 2D groundwater flow in homogeneous/isotropic media, representing flow nets and potential fields.
*   **Boundary Conditions:** Crucial for obtaining realistic solutions. Understand the physical meaning of each type.
*   **Relaxation Method:** A versatile numerical technique for solving PDEs when analytical solutions are elusive.
*   **Dupuit-Forchheimer Theory:** A simplified but highly useful analytical approach for unconfined groundwater flow, especially for drainage problems. Its assumptions are key to its application.
*   **Dupuit's Equation:** $h \frac{dh}{dx} = -\frac{q}{K}$ (or variations) allows calculation of flow rates and water table shapes.
*   **Recharge:** Significantly alters flow patterns and requires modified equations (e.g., parabolic water table).

This module provides the foundational understanding for analyzing and designing drainage systems by applying fundamental physical principles and mathematical models.
