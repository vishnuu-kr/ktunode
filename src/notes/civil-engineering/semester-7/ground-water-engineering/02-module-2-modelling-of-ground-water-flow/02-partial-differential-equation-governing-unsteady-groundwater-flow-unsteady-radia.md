---
title: "Partial differential equation governing unsteady groundwater flow- unsteady radial flow towards well."
subject: "GROUND WATER ENGINEERING"
module: "Module 2: Modelling of ground water flow"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811535"
status: "completed"
scrapedAt: "2026-05-20T19:00:05.562Z"
---
# GROUND WATER ENGINEERING: Module 2: Modelling of Ground Water Flow

## Topic: Partial Differential Equation Governing Unsteady Groundwater Flow - Unsteady Radial Flow Towards a Well

This module focuses on understanding the fundamental principles governing how groundwater moves, particularly when wells are pumping and the flow is not constant over time and space. We will derive and analyze the partial differential equation (PDE) that describes this complex phenomenon.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Understand the physical principles** governing unsteady radial flow towards a well.
*   **Derive the partial differential equation** for unsteady radial flow in a confined aquifer.
*   **Derive the partial differential equation** for unsteady radial flow in an unconfined aquifer.
*   **Identify and explain the components** of the derived PDEs.
*   **Understand the assumptions and limitations** associated with these equations.
*   **Recognize the importance of boundary and initial conditions** for solving these PDEs.
*   **Identify common solution methods** for these types of PDEs.
*   **Apply the concepts to practical scenarios** of well hydraulics.

---

### 1. Introduction to Unsteady Groundwater Flow and Radial Flow Towards a Well

#### 1.1. What is Unsteady Groundwater Flow?

*   **Definition:** Unsteady (or transient) groundwater flow occurs when the hydraulic head (or water table elevation) at any point in the aquifer changes with time. This is in contrast to steady-state flow, where the head remains constant.
*   **Causes of Unsteady Flow:**
    *   Pumping or injection of wells.
    *   Recharge from precipitation or surface water infiltration.
    *   Fluctuations in surface water bodies (rivers, lakes) connected to the aquifer.
    *   Changes in atmospheric pressure.
    *   Aquifer compaction or expansion (storage changes).

#### 1.2. Radial Flow Towards a Well

*   **Scenario:** Imagine a single well abstracting water from an aquifer. The water flows towards the well from all directions.
*   **Radial Symmetry:** In an idealized, homogeneous, and isotropic aquifer with a single pumping well, the flow pattern is often assumed to be radially symmetric. This means the hydraulic head and flow velocity depend only on the distance from the well (radial distance) and time, not on the angular position.
*   **Impact of Pumping:** When a well starts pumping, it creates a cone of depression, which is a lowering of the water table (or potentiometric surface) around the well. This cone of depression grows with time until a new equilibrium is reached, or if pumping continues indefinitely, the flow may remain unsteady.

---

### 2. Governing Principles: Darcy's Law and the Continuity Equation

#### 2.1. Darcy's Law

*   **Statement:** Darcy's Law describes the flow of groundwater through a porous medium. It states that the flow rate is proportional to the hydraulic gradient and the hydraulic conductivity of the medium.
*   **Equation (1D):**
    $q = -K \frac{dh}{dl}$
    Where:
    *   $q$ is the specific discharge (or Darcy flux) (L/T).
    *   $K$ is the hydraulic conductivity (L/T).
    *   $\frac{dh}{dl}$ is the hydraulic gradient (dimensionless).
    *   The negative sign indicates that flow occurs in the direction of decreasing hydraulic head.

*   **Equation (3D):** In vector form, for three dimensions:
    $\mathbf{q} = -K \nabla h$
    Where:
    *   $\mathbf{q}$ is the specific discharge vector (L/T).
    *   $\nabla h$ is the hydraulic gradient vector (dimensionless).

#### 2.2. Continuity Equation

*   **Statement:** The continuity equation is a statement of the conservation of mass. For groundwater flow, it means that the rate of water entering a control volume must equal the rate of water leaving it, plus any change in the volume of water stored within the control volume.
*   **General Form:**
    $\frac{\partial (\rho n_e s_s h)}{\partial t} = -\nabla \cdot (\rho \mathbf{q})$ (for compressible fluids and porous media)
    Where:
    *   $\rho$ is the fluid density (M/L³).
    *   $n_e$ is the effective porosity (dimensionless).
    *   $s_s$ is the specific storage (L⁻¹) (for compressible porous media).
    *   $h$ is the hydraulic head (L).
    *   $t$ is time (T).
    *   $\nabla \cdot (\rho \mathbf{q})$ is the divergence of the specific discharge, representing the net outflow from the control volume.

*   **Simplification for Incompressible Fluids and Porous Media:** If we assume the fluid is incompressible ($\rho$ is constant) and the porous medium is rigid ($n_e$ is constant and $s_s$ is constant), the continuity equation becomes:
    $n_e \frac{\partial h}{\partial t} = -\nabla \cdot \mathbf{q}$

---

### 3. Derivation of the PDE for Unsteady Radial Flow in a Confined Aquifer

#### 3.1. Assumptions

*   **Confined Aquifer:** The aquifer is bounded above and below by impermeable layers (aquitards). The water is under pressure, and the potentiometric surface (piezometric head) is below the top of the aquifer.
*   **Homogeneous and Isotropic Aquifer:** Hydraulic conductivity ($K$) is constant throughout the aquifer and the same in all directions.
*   **Radial Symmetry:** Flow is only a function of radial distance ($r$) from the well and time ($t$).
*   **Aquifer is Storativity is Constant:** The storativity ($S$) of the aquifer is constant.
*   **Well is Infinitely Thin:** The well has negligible radius compared to the aquifer dimensions.
*   **Well is Pumping at a Constant Rate ($Q$):** A constant volume of water is extracted per unit time.

#### 3.2. Setting up the Control Volume

Consider a cylindrical control volume of radius $r$ and thickness $b$ (aquifer thickness) around the pumping well. The flow is predominantly radial.

#### 3.3. Applying Darcy's Law in Radial Coordinates

*   In radial coordinates, Darcy's Law for specific discharge in the radial direction ($q_r$) is:
    $q_r = -K \frac{dh}{dr}$
    (Since flow is radial, there are no tangential or vertical components of specific discharge if we consider flow in a horizontal plane).

#### 3.4. Applying the Continuity Equation in Radial Coordinates

*   The continuity equation in radial coordinates for a confined aquifer (assuming incompressible fluid and porous medium):
    $n_e \frac{\partial h}{\partial t} = -\frac{1}{r} \frac{\partial}{\partial r} (r \cdot q_r)$
    *   The term $\frac{1}{r} \frac{\partial}{\partial r} (r \cdot q_r)$ represents the divergence in polar coordinates for flow in the radial direction.

#### 3.5. Substitution and Simplification

*   Substitute Darcy's Law ($q_r = -K \frac{dh}{dr}$) into the continuity equation:
    $n_e \frac{\partial h}{\partial t} = -\frac{1}{r} \frac{\partial}{\partial r} \left( r \cdot \left( -K \frac{dh}{dr} \right) \right)$
*   Since $K$ is constant, we can pull it out of the derivative:
    $n_e \frac{\partial h}{\partial t} = \frac{K}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right)$
*   Rearranging the terms:
    $\frac{\partial h}{\partial t} = \frac{K}{n_e} \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right)$
*   We know that $S = n_e \cdot b \cdot s_s$, where $S$ is storativity and $b$ is aquifer thickness. For a confined aquifer, $S$ is constant and related to $n_e$ and $b$.
    Let $T = K \cdot b$, where $T$ is the transmissivity (a measure of the aquifer's ability to transmit water).
*   The PDE can be rewritten in terms of transmissivity $T$ and storativity $S$:
    $n_e \frac{\partial h}{\partial t} = \frac{T}{b} \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right)$
    Multiply by $b$:
    $n_e b \frac{\partial h}{\partial t} = \frac{T}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right)$
    Since $S = n_e b s_s$ and for a confined aquifer $s_s$ is often assumed constant and $S$ is used directly, or if $s_s$ is constant and $b$ is constant, $S$ is constant. For simplicity, we often use $S$ directly.
    $\frac{S}{T} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right)$

#### 3.6. The Theis Equation PDE for Confined Aquifers

*   The standard form of the partial differential equation governing unsteady radial flow in a confined aquifer is:
    $\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = \frac{S}{T} \frac{\partial h}{\partial t}$

    This is often written as:
    $\frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial h}{\partial r} \right) = \frac{S}{T} \frac{\partial h}{\partial t}$

    Where:
    *   $h(r, t)$ is the hydraulic head at radial distance $r$ and time $t$ (L).
    *   $r$ is the radial distance from the well (L).
    *   $t$ is time (T).
    *   $S$ is the storativity of the aquifer (dimensionless).
    *   $T$ is the transmissivity of the aquifer (L²/T).

---

### 4. Derivation of the PDE for Unsteady Radial Flow in an Unconfined Aquifer

#### 4.1. Assumptions

*   **Unconfined Aquifer:** The aquifer is bounded above by the water table, which is free to move vertically.
*   **Homogeneous and Isotropic Aquifer:** Hydraulic conductivity ($K$) is constant.
*   **Radial Symmetry:** Flow is only a function of radial distance ($r$) and time ($t$).
*   **Darcian Flow:** Darcy's Law applies.
*   **Negligible Vertical Flow:** We assume horizontal flow dominates.
*   **Constant Hydraulic Conductivity:** $K$ is constant even as the water table drops. (This is a significant simplification).
*   **Small Changes in Water Table:** The drawdown is small compared to the saturated thickness of the aquifer. This allows us to use the initial saturated thickness in calculations.
*   **Well is Infinitely Thin.**
*   **Well is Pumping at a Constant Rate ($Q$).**

#### 4.2. Key Difference from Confined Aquifers: Variable Thickness

The primary challenge in unconfined aquifers is that the saturated thickness changes with pumping. The hydraulic head in an unconfined aquifer is the elevation of the water table. The flow is driven by the gradient of this water table elevation.

#### 4.3. Applying Darcy's Law and Continuity in Radial Coordinates

*   Consider a cylindrical control volume of radius $r$ and average saturated thickness $b'(r,t)$ at time $t$.
*   The specific discharge in the radial direction is given by Darcy's Law:
    $q_r = -K \frac{dh}{dr}$
    Here, $h$ is the water table elevation.
*   The continuity equation for flow within the control volume:
    Rate of inflow - Rate of outflow = Rate of change of storage
    $\left( 2\pi r \cdot b'(r,t) \cdot q_r \right)_{r} - \left( 2\pi r \cdot b'(r,t) \cdot q_r \right)_{r+\Delta r} = \frac{\partial}{\partial t} (\text{Storage Volume})$

*   **Storage Volume Change:** The change in storage is the change in the volume of water in the element of aquifer between radius $r$ and $r+\Delta r$, with saturated thickness $b'(r,t)$.
    Storage Volume $= 2\pi r \Delta r \cdot b'(r,t) \cdot n_e$
    Rate of change of storage $= 2\pi r \Delta r \cdot n_e \frac{\partial b'(r,t)}{\partial t}$
    Since $b'(r,t)$ is the water table elevation $h(r,t)$,
    Rate of change of storage $= 2\pi r \Delta r \cdot n_e \frac{\partial h}{\partial t}$
    *   Note: For an unconfined aquifer, $n_e$ represents the specific yield ($S_y$) for water table fluctuations.

*   **Divergence Term:** The net outflow from the cylindrical shell is approximately:
    $\frac{\partial}{\partial r} (2\pi r \cdot b'(r,t) \cdot q_r) \Delta r$
    Substituting $q_r = -K \frac{dh}{dr}$:
    $\frac{\partial}{\partial r} \left( 2\pi r \cdot b'(r,t) \cdot \left(-K \frac{dh}{dr}\right) \right) \Delta r$

*   **Putting it together:**
    $-\frac{\partial}{\partial r} \left( 2\pi r \cdot b'(r,t) \cdot K \frac{dh}{dr} \right) \Delta r = 2\pi r \Delta r \cdot n_e \frac{\partial h}{\partial t}$
    Divide by $2\pi r \Delta r$:
    $-\frac{1}{r} \frac{\partial}{\partial r} \left( r \cdot b'(r,t) \cdot K \frac{dh}{dr} \right) = n_e \frac{\partial h}{\partial t}$

#### 4.4. The Boussinesq Equation PDE for Unconfined Aquifers

*   **Simplification:** For small drawdowns compared to the saturated thickness, we can approximate $b'(r,t)$ with the initial saturated thickness, $b_0$. This is a crucial approximation for the Boussinesq equation.
    If $b'(r,t) \approx b_0$ (constant), then:
    $-\frac{K b_0}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right) = n_e \frac{\partial h}{\partial t}$
    Since $T = K b_0$ and $S_y = n_e$ (for a phreatic aquifer and small drawdowns), we get:
    $\frac{T}{r} \frac{\partial}{\partial r} \left( r \frac{dh}{dr} \right) = S_y \frac{\partial h}{\partial t}$
    Which leads to the same form as the confined aquifer PDE, but with $S_y$ (specific yield) instead of $S$ (storativity):
    $\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = \frac{S_y}{T} \frac{\partial h}{\partial t}$

    *   **However, this approximation is often not sufficient for larger drawdowns.** A more accurate formulation acknowledges the changing saturated thickness. If we consider the saturated thickness $b'(r,t)$, the PDE becomes non-linear:
        $\frac{\partial}{\partial r} \left( r \cdot b'(r,t) \cdot K \frac{\partial h}{\partial r} \right) = r \cdot n_e \frac{\partial h}{\partial t}$
        where $b'(r,t)$ is a function of $h(r,t)$ and the aquifer base elevation.

*   **The Boussinesq Equation (for unconfined aquifers with small drawdowns):**
    $\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = \frac{S_y}{T} \frac{\partial h}{\partial t}$
    Or equivalently:
    $\frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial h}{\partial r} \right) = \frac{S_y}{T} \frac{\partial h}{\partial t}$

    Where:
    *   $h(r, t)$ is the water table elevation at radial distance $r$ and time $t$ (L).
    *   $r$ is the radial distance from the well (L).
    *   $t$ is time (T).
    *   $S_y$ is the specific yield of the unconfined aquifer (dimensionless).
    *   $T$ is the transmissivity of the aquifer, $T = K \cdot b_0$ (L²/T), where $b_0$ is the initial saturated thickness.

#### 4.5. Key Differences between Confined and Unconfined PDEs

| Feature          | Confined Aquifer PDE                                        | Unconfined Aquifer PDE (Boussinesq approx.)                            |
| :--------------- | :---------------------------------------------------------- | :--------------------------------------------------------------------- |
| **Head Variable** | Potentiometric surface ($h$)                                | Water table elevation ($h$)                                            |
| **Parameter $S$** | Storativity ($S = n_e b s_s$) (constant)                  | Specific Yield ($S_y = n_e$) (dimensionless)                           |
| **Parameter $T$** | Transmissivity ($T = K b$) (constant)                     | Transmissivity ($T = K b_0$) (constant, where $b_0$ is initial thickness) |
| **Non-linearity**| Linear PDE                                                  | Approximately linear PDE for small drawdowns; becomes non-linear otherwise |
| **Storage Mech.**| Expansion/contraction of aquifer matrix and fluid         | Gravity drainage/imbibition from water table                          |

---

### 5. Boundary and Initial Conditions

To solve these PDEs, we need to define the state of the aquifer at the beginning of the analysis and its behavior at the boundaries.

#### 5.1. Initial Conditions (IC)

*   **Definition:** Describes the state of the system at the start of the process (typically $t=0$, before pumping begins).
*   **Example for Radial Flow:**
    *   **Uniform Head:** $h(r, 0) = h_0$ for all $r$, where $h_0$ is the initial uniform hydraulic head (or water table elevation).

#### 5.2. Boundary Conditions (BC)

*   **Definition:** Describes the head or flux at the boundaries of the aquifer domain.

*   **Common Boundary Conditions for Radial Flow Towards a Well:**

    1.  **Well Boundary Condition (Dirichlet or specified head):**
        *   At the well radius ($r = r_w$), the head is specified. In the context of pumping, this often means the head drops to a certain level. However, it's more common to relate the head at the well to the pumping rate. For very long pumping times and a fully penetrating well, the head at the well is often assumed to be the pumping level.
        *   **Theis Equation's Well BC (related to pumping rate):** The key to solving the Theis equation is relating the pumping rate ($Q$) to the head gradient at the well face.
            The total discharge through the cylindrical surface at radius $r$ is $Q(r,t) = 2\pi r \cdot b \cdot q_r$.
            At the well face ($r = r_w$):
            $Q = 2\pi r_w \cdot b \cdot \left( -K \frac{dh}{dr} \right)_{r=r_w}$
            Or in terms of $T$:
            $Q = 2\pi T \left( \frac{dh}{dr} \right)_{r=r_w}$
            This is a mixed boundary condition (involving both $h$ and its derivative).

    2.  **Outer Boundary Condition (Specified Head or No-Flow):**
        *   **Specified Head (Dirichlet):** At a large distance from the well ($r \to \infty$), the head remains at its initial undisturbed value.
            $h(r, t) = h_0$ as $r \to \infty$
        *   **No-Flow (Neumann):** If there's an impermeable boundary (impervious boundary, fault) at a distance $R$ from the well, then there is no flow across this boundary.
            $\left( \frac{dh}{dr} \right)_{r=R} = 0$

---

### 6. Common Solution Methods

Solving these PDEs requires analytical or numerical techniques.

#### 6.1. Analytical Solutions (Theis Solution)

*   **Theis Equation:** The analytical solution to the PDE for unsteady radial flow in a confined aquifer with the specified boundary and initial conditions is known as the Theis equation.
*   **Integral Form:**
    $h_0 - h(r, t) = \frac{Q}{4\pi T} \int_{u}^{\infty} \frac{e^{-x}}{x} dx$
    where $u = \frac{r^2 S}{4 T t}$ and $h_0 - h(r,t)$ is the drawdown.
*   **Theis Well Function ($W(u)$):** The integral is the exponential integral, denoted as $W(u)$.
    $s = h_0 - h(r, t) = \frac{Q}{4\pi T} W(u)$
    Where $W(u) = \int_{u}^{\infty} \frac{e^{-x}}{x} dx \approx -0.5772 - \ln(u) + u - \frac{u^2}{2 \cdot 2!} + \frac{u^3}{3 \cdot 3!} - \dots$
*   **Approximations of $W(u)$:**
    *   For large $u$ (early times, close to the well): $W(u) \approx -0.5772 - \ln(u)$
    *   For small $u$ (late times, far from the well): $W(u) \approx e^{-u}/u$ (This is not the typical approximation; the early time approximation is more common and derived from the series).

#### 6.2. Numerical Solutions

*   **Finite Difference Method (FDM):** The aquifer domain is discretized into a grid, and the PDE is approximated using finite differences. This is suitable for complex geometries and boundary conditions.
*   **Finite Element Method (FEM):** The domain is divided into smaller elements, and the solution is approximated within these elements. Also very flexible.
*   **Boundary Element Method (BEM):** Can be efficient for problems with simple geometries but complex boundary conditions.

---

### 7. Practice Questions and Exercises

**Question 1:**
State the partial differential equation governing unsteady radial flow in a confined aquifer. Define all the variables and parameters involved.

**Answer:**
The PDE is:
$\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = \frac{S}{T} \frac{\partial h}{\partial t}$
Where:
*   $h(r, t)$: hydraulic head (L)
*   $r$: radial distance from the well (L)
*   $t$: time (T)
*   $S$: storativity (dimensionless)
*   $T$: transmissivity (L²/T)

**Question 2:**
What is the primary difference in the storage mechanism between a confined aquifer and an unconfined aquifer? How does this difference manifest in the governing PDEs?

**Answer:**
*   **Confined Aquifer:** Storage is due to the expansion of the aquifer matrix and the fluid itself when pressure decreases. This is quantified by storativity ($S$) and specific storage ($s_s$), which are generally constant.
*   **Unconfined Aquifer:** Storage is primarily due to gravity drainage and imbibition of water from the pore spaces as the water table declines or rises. This is quantified by the specific yield ($S_y$), which is often considered constant for small water table fluctuations.
*   **Manifestation in PDE:** The confined aquifer PDE uses storativity ($S$), while the unconfined aquifer PDE (Boussinesq approximation) uses specific yield ($S_y$). The unconfined aquifer PDE can also become non-linear if the changing saturated thickness is accurately accounted for, whereas the confined aquifer PDE is linear.

**Question 3:**
Consider an unconfined aquifer with initial saturated thickness $b_0 = 20$ m and hydraulic conductivity $K = 5 \times 10^{-4}$ m/s. A well is pumped at a constant rate $Q = 0.02$ m³/s. Assume $S_y = 0.15$.
a) Calculate the transmissivity ($T$) of the aquifer.
b) Write down the governing PDE for unsteady radial flow in this aquifer.
c) If the well is located at $r=0$, and the initial water table is at $h_0 = 50$ m, what would be the initial condition?

**Answer:**
a) Transmissivity $T = K \times b_0 = (5 \times 10^{-4} \text{ m/s}) \times (20 \text{ m}) = 1 \times 10^{-2} \text{ m²/s}$.
b) The governing PDE is the Boussinesq equation:
$\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = \frac{0.15}{1 \times 10^{-2} \text{ m²/s}} \frac{\partial h}{\partial t}$
$\frac{\partial^2 h}{\partial r^2} + \frac{1}{r} \frac{\partial h}{\partial r} = 150 \text{ s⁻¹} \frac{\partial h}{\partial t}$
c) The initial condition is $h(r, 0) = 50$ m for all radial distances $r$.

**Question 4:**
What is the meaning of the variable $u$ in the Theis equation, and how does its value change with time and distance from the well?

**Answer:**
$u = \frac{r^2 S}{4 T t}$
*   **Meaning:** $u$ is a dimensionless parameter that characterizes the "time-distance" relationship in unsteady flow. It represents the ratio of the rate of drawdown due to radial diffusion of pressure changes to the rate of water release from storage.
*   **Change with time:** As time ($t$) increases, $u$ decreases (for a fixed $r$). This means that for a fixed observation point, we move towards smaller values of $u$ as pumping progresses, indicating the influence of storage becomes more dominant relative to flow.
*   **Change with distance:** As radial distance ($r$) increases, $u$ increases (for a fixed $t$). This means that observation points farther from the well experience conditions corresponding to larger $u$ values at any given time.

---

### 8. Important Points to Remember

*   **Unsteady flow** means the hydraulic head changes with time.
*   **Radial flow** towards a well assumes flow is only dependent on the distance from the well.
*   The derivation of the PDEs relies on **Darcy's Law** and the **Continuity Equation**.
*   **Confined aquifers** lead to a linear PDE with **storativity ($S$)**.
*   **Unconfined aquifers** lead to a PDE that is approximately linear (Boussinesq) for small drawdowns, using **specific yield ($S_y$)**. A more accurate treatment becomes non-linear.
*   **Transmissivity ($T$)** represents the aquifer's ability to transmit water and is $K \cdot b$ for confined and $K \cdot b_0$ for unconfined aquifers.
*   **Initial and boundary conditions** are essential for solving these PDEs.
*   The **Theis equation** is a fundamental analytical solution for unsteady radial flow in confined aquifers.
*   Numerical methods (FDM, FEM) are used for more complex aquifer systems.

---

This comprehensive set of notes should provide a strong foundation for understanding the partial differential equations governing unsteady radial flow towards a well in groundwater engineering. Remember to practice applying these concepts to solve real-world problems.
