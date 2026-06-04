---
title: "Groundwater movement – Water table and Piezometric level (surface) – Theory of groundwater flow – Darcy’s law and its experimental verification – differential equation governing groundwater flow."
subject: "HYDROGEOLOGY"
module: "Module 2: Groundwater exploration"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811b06"
status: "completed"
scrapedAt: "2026-05-20T19:03:19.201Z"
---
# Hydrogeology: Module 2 - Groundwater Exploration

## Topic: Groundwater Movement

This module focuses on understanding how groundwater moves within the earth's subsurface. We will explore the concepts of the water table and piezometric surface, the fundamental theories governing groundwater flow, Darcy's Law and its experimental validation, and the differential equations that describe this movement.

---

### 1. Water Table and Piezometric Level (Surface)

#### 1.1 The Water Table

*   **Definition:** The water table is the **upper surface of the zone of saturation** in an unconfined aquifer. It is the level at which the pore water pressure is equal to atmospheric pressure.
*   **Characteristics:**
    *   It is a **free surface**, meaning it can fluctuate in elevation.
    *   Its shape generally mimics the topography of the land surface but is usually less irregular.
    *   It rises when recharge exceeds discharge and falls when discharge exceeds recharge.
    *   It is the level to which water will rise in a well penetrating an unconfined aquifer and open to the atmosphere.
*   **Unconfined Aquifer:** An aquifer that has a water table as its upper boundary. The water in an unconfined aquifer is under atmospheric pressure.
*   **Example:** Imagine a dug well in a sandy area. The water level inside the well, when it's not being pumped, represents the water table. If it rains heavily, the water table will rise. If there's a prolonged drought, it will fall.

#### 1.2 Piezometric Level (Surface)

*   **Definition:** The piezometric level (or piezometric surface) is the **imaginary surface to which water will rise in a tightly cased well penetrating a confined aquifer**. It represents the potentiometric head of the groundwater.
*   **Characteristics:**
    *   It is not a physical surface but a **pressure surface**.
    *   In a confined aquifer, the piezometric surface is usually **above the top of the aquifer**.
    *   The elevation of the piezometric surface indicates the energy or head available to drive groundwater flow.
    *   Groundwater flows from areas of higher piezometric head to areas of lower piezometric head.
*   **Confined Aquifer:** An aquifer that is overlain by a confining layer (aquitard or aquiclude) and is saturated under pressure greater than atmospheric.
*   **Potentiometric Head:** The sum of the elevation head and the pressure head.
    *   **Elevation Head (z):** The vertical distance from a reference datum (e.g., sea level) to a point within the aquifer.
    *   **Pressure Head (h_p):** The pressure at a point within the aquifer divided by the specific weight of water ($\rho_w \cdot g$). It represents the height of a column of water that would exert that pressure.
    *   **Total Head (H) = Elevation Head (z) + Pressure Head (h_p)**
*   **Example:** In a confined aquifer between two impermeable layers, water injected into the aquifer at one location will create pressure. If you drill a well into this aquifer, the water level in the well will rise to a certain elevation, indicating the piezometric surface. If this elevation is above the top of the aquifer, it signifies positive pore pressure. If the piezometric surface is below the top of the aquifer, it means the water is under less than atmospheric pressure.

#### 1.3 Relationship between Water Table and Piezometric Surface

*   **Unconfined Aquifers:** The water table **is** the piezometric surface. The water level in a well in an unconfined aquifer reflects the pressure which is atmospheric at the water table.
*   **Confined Aquifers:** The piezometric surface is generally **above or below** the top of the aquifer, depending on the pressure within the aquifer.
    *   **Artesian Well:** If the piezometric surface is above the ground surface, a well drilled into a confined aquifer will flow spontaneously at the surface.
    *   **Non-flowing Artesian Well:** If the piezometric surface is above the top of the aquifer but below the ground surface, water will rise in the well but will not flow out.
    *   **Reversed Flow:** If the piezometric surface is below the top of the aquifer, water may flow *into* the aquifer from the well if the pressure in the well is higher than the aquifer.

---

### 2. Theory of Groundwater Flow

#### 2.1 Driving Force: Hydraulic Gradient

*   **Concept:** Groundwater flow is driven by a difference in **total head**. Water moves from regions of higher total head to regions of lower total head.
*   **Hydraulic Gradient (i):** The rate of change of total head with respect to distance in the direction of the steepest decrease in head.
    *   $i = -\frac{dH}{dl}$
    *   Where:
        *   $H$ is the total head (dimensionless or units of length)
        *   $l$ is the distance in the direction of flow (units of length)
        *   The negative sign indicates that head decreases in the direction of flow.
*   **Graphical Representation:** The hydraulic gradient is the slope of the piezometric surface (in confined aquifers) or the water table (in unconfined aquifers) along a flow path.

#### 2.2 Flow Paths and Streamlines

*   **Streamline:** A line tangent to the direction of flow at every point. In steady flow, streamlines are fixed in space.
*   **Flow Path (or Pathline):** The actual path followed by a particle of water as it moves through the porous medium. In steady flow, streamlines and pathlines are identical.
*   **Equipotential Line:** A line connecting points of equal total head. Groundwater flows perpendicular to equipotential lines.
*   **Flow Net:** A graphical representation of groundwater flow consisting of a network of equipotential lines and streamlines.
    *   **Properties of a Flow Net:**
        *   Streamlines and equipotential lines intersect at right angles.
        *   The spacing between streamlines is proportional to the discharge.
        *   The spacing between equipotential lines is proportional to the head loss.
        *   For flow in homogeneous and isotropic media, the flow net is composed of curvilinear squares (regions bounded by adjacent streamlines and equipotential lines).

#### 2.3 Types of Flow

*   **Steady Flow:** The hydraulic head at any point in the aquifer does not change with time. The rate of recharge equals the rate of discharge.
*   **Unsteady Flow (Transient Flow):** The hydraulic head at any point in the aquifer changes with time. This occurs during periods of pumping or significant changes in recharge/discharge.
*   **Laminar Flow:** Flow characterized by smooth, orderly movement of water particles in layers (laminae). Groundwater flow is almost always laminar.
*   **Turbulent Flow:** Flow characterized by chaotic, irregular motion of water particles with eddies and mixing. Typically occurs at very high velocities, which are rarely encountered in natural groundwater systems.

---

### 3. Darcy’s Law

#### 3.1 Introduction

*   **Developed by:** Henry Darcy (1856) based on experiments with water flow through sand filters.
*   **Significance:** A fundamental empirical law that quantifies the relationship between the flow rate of groundwater, the properties of the porous medium, and the hydraulic gradient.

#### 3.2 The Law

*   **Statement:** The discharge ($Q$) through a porous medium is directly proportional to the hydraulic gradient ($i$) and the cross-sectional area ($A$) perpendicular to the flow, and to the hydraulic conductivity ($K$).
*   **Mathematical Formulation:**
    $Q = -K \cdot A \cdot \frac{dH}{dl}$
    *   Where:
        *   $Q$ = Discharge or volumetric flow rate (e.g., m³/s, L/min)
        *   $K$ = Hydraulic conductivity (units of velocity, e.g., m/s, cm/day). A measure of how easily water can flow through the porous medium. It depends on the properties of the medium (grain size, shape, sorting, pore connectivity) and the fluid (viscosity, density).
        *   $A$ = Cross-sectional area of the porous medium perpendicular to the direction of flow (e.g., m²)
        *   $\frac{dH}{dl}$ = Hydraulic gradient (dimensionless or units of length)
*   **Alternative Form using Head Loss ($\Delta H$) and Length ($L$):**
    $Q = K \cdot A \cdot \frac{h_1 - h_2}{L}$
    *   Where:
        *   $h_1$ = Total head at the upstream end
        *   $h_2$ = Total head at the downstream end
        *   $L$ = Length of the flow path over which the head loss occurs

#### 3.3 Hydraulic Conductivity ($K$)

*   **Definition:** A coefficient that represents the ability of a porous medium to transmit water. It has units of velocity.
*   **Factors Affecting $K$:**
    *   **Pore Size:** Larger pores lead to higher $K$.
    *   **Pore Connectivity:** Well-connected pores allow for easier flow.
    *   **Grain Size and Sorting:** Well-sorted, coarse-grained materials (like gravel) have higher $K$ than poorly sorted or fine-grained materials (like clay).
    *   **Fluid Properties:** Viscosity and density of the fluid (for water, temperature plays a minor role).
*   **Intrinsic Permeability ($k$):** A property of the porous medium only, independent of the fluid.
    *   $K = k \cdot \frac{\rho_w \cdot g}{\mu}$
    *   Where:
        *   $k$ = Intrinsic permeability (units of area, e.g., m², Darcy)
        *   $\rho_w$ = Density of water (kg/m³)
        *   $g$ = Acceleration due to gravity (m/s²)
        *   $\mu$ = Dynamic viscosity of water (Pa·s or N·s/m²)

#### 3.4 Seepage Velocity vs. Average Linear Velocity

*   **Seepage Velocity ($v_s$):** The average velocity of water through the pore spaces.
    *   $v_s = \frac{Q}{A}$
    *   From Darcy's Law: $v_s = K \cdot i$
*   **Average Linear Velocity ($v_a$ or $v_{avg}$):** The actual average velocity of water particles as they move through the interconnected pore network. This is the velocity relevant for contaminant transport and travel time.
    *   $v_a = \frac{Q}{A_p}$
    *   Where $A_p$ is the area of the pores ($A_p = n \cdot A$), and $n$ is the effective porosity.
    *   Therefore, $v_a = \frac{Q}{n \cdot A} = \frac{v_s}{n}$
*   **Effective Porosity ($n_e$):** The fraction of the total volume of the porous medium that consists of interconnected pores through which water can flow.
*   **Key Point:** The average linear velocity ($v_a$) is always greater than the seepage velocity ($v_s$) because the water flows through a smaller effective area (the pores).

---

### 4. Experimental Verification of Darcy’s Law

#### 4.1 Darcy's Original Experiment

*   **Setup:** Darcy used a vertical cylinder filled with sand. Water was introduced at one end and flowed out at the other. He measured the discharge ($Q$) and the difference in water levels (head loss, $\Delta H$) over a known length ($L$) of the sand column.
*   **Procedure:**
    1.  Fill the cylinder with sand.
    2.  Apply a constant flow rate or a constant head difference across the sand column.
    3.  Measure the volume of water collected over a specific time to calculate discharge ($Q$).
    4.  Measure the water levels in piezometers (tubes) placed at the upstream and downstream ends of the sand column to determine the head loss ($\Delta H = h_1 - h_2$).
    5.  Measure the length ($L$) of the sand column.
    6.  Measure the cross-sectional area ($A$) of the cylinder.
*   **Results:** Darcy found that the discharge ($Q$) was directly proportional to the head difference ($\Delta H$) and inversely proportional to the length ($L$), and also proportional to the cross-sectional area ($A$). This confirmed the relationship:
    $Q \propto A \cdot \frac{\Delta H}{L}$
    which is the basis of Darcy's Law.

#### 4.2 Modern Experimental Verification

*   **Laboratory Permeameters:**
    *   **Constant Head Permeameter:** Used for permeable soils (sands, gravels). A constant hydraulic head difference is maintained across a sample of the porous material. Discharge and head loss are measured.
    *   **Falling Head Permeameter:** Used for less permeable soils (silts, clays). The head difference changes over time as water drains from a standpipe connected to the sample. The rate of fall of the water level in the standpipe is used to calculate hydraulic conductivity.
*   **Field Methods:**
    *   **Pumping Tests:** Water is pumped from a well, and the drawdown (lowering of the water table or piezometric surface) is measured in the pumping well and surrounding observation wells over time. This data is analyzed using analytical solutions to the groundwater flow equation (derived from Darcy's Law) to determine aquifer properties like hydraulic conductivity and transmissivity.
    *   **Slug Tests:** A sudden change in head is induced in a well (by inserting or removing a solid object or by rapid pumping), and the recovery of the water level is monitored. This provides a localized estimate of hydraulic conductivity.

#### 4.3 Limitations of Darcy's Law

*   **Laminar Flow Assumption:** Darcy's Law is strictly valid only for laminar flow. At very high velocities, turbulence can occur, and the relationship between flow and gradient becomes non-linear. The **Reynolds number ($Re$)** is used to assess the flow regime. For porous media, $Re$ is typically defined as:
    $Re = \frac{\rho \cdot v_a \cdot d}{\mu}$
    *   Where $\rho$ is fluid density, $v_a$ is average linear velocity, $d$ is a characteristic grain diameter, and $\mu$ is dynamic viscosity.
    *   Generally, $Re < 1$ indicates laminar flow, while $Re > 1$ suggests potential for transitional or turbulent flow. In most groundwater systems, $Re$ is very small, confirming the applicability of Darcy's Law.
*   **Homogeneous and Isotropic Medium:** The basic form of Darcy's Law assumes the porous medium is homogeneous (properties are uniform throughout) and isotropic (properties are the same in all directions). In reality, aquifers can be heterogeneous and anisotropic, requiring modifications to the law (e.g., using tensors for hydraulic conductivity).
*   **Saturated Flow:** Darcy's Law applies to saturated conditions where pores are completely filled with water. In the unsaturated zone, water content is less than 100%, and the flow is governed by different principles (e.g., Richards' Equation).

---

### 5. Differential Equation Governing Groundwater Flow

#### 5.1 Derivation of the 1D Flow Equation

*   Consider a small elemental block of porous medium of length $\Delta x$, cross-sectional area $A$, and volume $A \cdot \Delta x$.
*   **Mass Conservation:** The principle of conservation of mass states that the rate of mass entering the block minus the rate of mass leaving the block must equal the rate of change of mass within the block.
*   **Flow Rate In (at x):** $Q_{in} = -K \cdot A \cdot \frac{dH}{dx}$ (using Darcy's Law)
*   **Flow Rate Out (at x + $\Delta x$):** $Q_{out} = -K \cdot A \cdot \frac{dH}{dx}\bigg|_{x+\Delta x}$
*   **Net Flow Rate into the block:** $Q_{net} = Q_{in} - Q_{out} = -K \cdot A \cdot \left(\frac{dH}{dx} - \frac{dH}{dx}\bigg|_{x+\Delta x}\right)$
*   Using Taylor series expansion for $\frac{dH}{dx}\bigg|_{x+\Delta x} \approx \frac{dH}{dx} + \frac{\partial}{\partial x}\left(\frac{dH}{dx}\right) \Delta x$:
    $Q_{net} \approx -K \cdot A \cdot \left(\frac{dH}{dx} - \left(\frac{dH}{dx} + \frac{\partial}{\partial x}\left(\frac{dH}{dx}\right) \Delta x\right)\right)$
    $Q_{net} \approx K \cdot A \cdot \frac{\partial^2 H}{\partial x^2} \Delta x$
*   **Change in Mass within the block:**
    *   Volume of water in the block = $A \cdot \Delta x \cdot n_e$ (where $n_e$ is effective porosity)
    *   Mass of water = $(A \cdot \Delta x \cdot n_e) \cdot \rho_w$
    *   Rate of change of mass = $\frac{\partial}{\partial t} (A \cdot \Delta x \cdot n_e \cdot \rho_w)$
    *   Assuming $A$, $n_e$, and $\rho_w$ are constant for a small block: Rate of change of mass = $A \cdot \Delta x \cdot n_e \cdot \rho_w \frac{\partial H}{\partial t}$ (This assumes a relationship between head and mass, which is more rigorous with storage coefficient, but for conceptual derivation, this is often used).
*   **Equating Net Flow to Change in Mass:**
    $K \cdot A \cdot \frac{\partial^2 H}{\partial x^2} \Delta x = - A \cdot \Delta x \cdot n_e \cdot \rho_w \frac{\partial H}{\partial t}$ (The negative sign arises from the definition of flow direction vs. storage change)
*   **Simplifying to the 1D Unsteady Flow Equation (Heat Equation Analogue):**
    $\frac{\partial^2 H}{\partial x^2} = \frac{n_e \cdot \rho_w \cdot g}{K \cdot \rho_w \cdot g} \frac{\partial H}{\partial t}$ (Introducing specific storage $S_s = \rho_w \cdot g \cdot \alpha$, where $\alpha$ is compressibility of porous medium + water). For incompressible system: $S = n_e$.
    $\frac{\partial^2 H}{\partial x^2} = \frac{S}{K} \frac{\partial H}{\partial t}$
    Let $T = K \cdot b$ (Transmissivity, where $b$ is aquifer thickness) and $S$ (Storativity, for confined aquifers).
    For confined aquifers, the equation is often written in terms of drawdown $s = h_0 - h$ where $h_0$ is initial head:
    $\frac{\partial^2 s}{\partial x^2} = \frac{S}{T} \frac{\partial s}{\partial t}$
    This is the **1D diffusion equation**, or **parabolic partial differential equation**.

#### 5.2 The 2D and 3D Flow Equations (The Diffusion Equation)

*   **General Form (3D):** The principle of mass conservation applied to a 3D elemental control volume leads to the **three-dimensional groundwater flow equation (or Theis equation for unsteady flow)**:
    $\frac{\partial}{\partial x}\left(K_{xx}\frac{\partial H}{\partial x}\right) + \frac{\partial}{\partial y}\left(K_{yy}\frac{\partial H}{\partial y}\right) + \frac{\partial}{\partial z}\left(K_{zz}\frac{\partial H}{\partial z}\right) + W = S_s \frac{\partial H}{\partial t}$
    *   Where:
        *   $H(x, y, z, t)$ is the hydraulic head at any point $(x, y, z)$ at time $t$.
        *   $K_{xx}, K_{yy}, K_{zz}$ are the hydraulic conductivity components in the x, y, and z directions (allowing for anisotropy).
        *   $W$ is a source/sink term (e.g., recharge, withdrawal) per unit volume.
        *   $S_s$ is the specific storage ($S_s = \alpha + n_e \beta_w$), representing the volume of water released from or taken into storage per unit volume of aquifer per unit change in head.
*   **For Homogeneous and Isotropic Aquifers:** $K_{xx} = K_{yy} = K_{zz} = K$
    $K \left(\frac{\partial^2 H}{\partial x^2} + \frac{\partial^2 H}{\partial y^2} + \frac{\partial^2 H}{\partial z^2}\right) + W = S_s \frac{\partial H}{\partial t}$
*   **For Steady Flow:** $\frac{\partial H}{\partial t} = 0$
    $K \nabla^2 H + W = 0$
    Where $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$ is the Laplacian operator.
    If there are no sources or sinks ($W=0$):
    $K \nabla^2 H = 0 \implies \nabla^2 H = 0$
    This is **Laplace's equation**, which describes steady-state groundwater flow in homogeneous, isotropic, saturated conditions without sources or sinks.
*   **For 2D Flow (e.g., horizontal flow in a confined aquifer):**
    $\frac{\partial}{\partial x}\left(K_{xx} b \frac{\partial h}{\partial x}\right) + \frac{\partial}{\partial y}\left(K_{yy} b \frac{\partial h}{\partial y}\right) + W' = S \frac{\partial h}{\partial t}$
    *   Where $h$ is hydraulic head (in confined aquifer, piezometric head), $b$ is aquifer thickness, $W'$ is source/sink per unit area, and $S = S_s \cdot b$ is the storativity.
    *   Using Transmissivity ($T = K \cdot b$):
        $\frac{\partial}{\partial x}\left(T_{xx} \frac{\partial h}{\partial x}\right) + \frac{\partial}{\partial y}\left(T_{yy} \frac{\partial h}{\partial y}\right) + W' = S \frac{\partial h}{\partial t}$
        For homogeneous and isotropic conditions ($T_{xx} = T_{yy} = T$):
        $T \left(\frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2}\right) + W' = S \frac{\partial h}{\partial t}$
        This is the **2D diffusion equation**.
*   **For Steady 2D Flow:**
    $T \nabla^2 h + W' = 0$
    If $W'=0$:
    $\nabla^2 h = 0$ (Laplace's equation in 2D)

#### 5.3 Solutions to the Groundwater Flow Equation

*   Solutions to these equations, along with appropriate boundary conditions (e.g., specified head at boundaries, specified flux across boundaries), allow us to predict groundwater flow patterns, water table/piezometric surface elevations, and the movement of contaminants.
*   Analytical solutions (e.g., Theis, Cooper-Jacob) are available for simplified aquifer geometries and boundary conditions.
*   Numerical methods (e.g., Finite Difference, Finite Element) are used for more complex, heterogeneous, and anisotropic aquifer systems.

---

### Important Points to Remember:

*   **Water table** is the upper surface of saturation in unconfined aquifers.
*   **Piezometric surface** represents the potentiometric head in confined aquifers.
*   Groundwater flows from high **total head** to low **total head**.
*   **Hydraulic gradient** ($i$) is the driving force for flow.
*   **Darcy's Law** ($Q = -K A \frac{dH}{dl}$) is fundamental for quantifying flow in porous media.
*   **Hydraulic conductivity ($K$)** is a measure of the ease with which water moves through a medium.
*   **Seepage velocity** is $Q/A$, while **average linear velocity** is $Q/(n_e A)$, which is higher.
*   Darcy's Law is valid for **laminar flow** in **saturated** porous media.
*   The groundwater flow equation is a **diffusion equation** (parabolic PDE).
*   **Laplace's equation** describes **steady-state** groundwater flow in homogeneous, isotropic conditions without sources/sinks.
*   **Specific storage ($S_s$)** and **storativity ($S$)** account for the release/storage of water due to changes in head.
*   **Transmissivity ($T$)** is the product of hydraulic conductivity ($K$) and aquifer thickness ($b$) and represents the capacity of an aquifer to transmit water.

---

### Practice Questions and Exercises

**Question 1: Definitions**
Define the following terms:
a) Water table
b) Piezometric surface
c) Hydraulic conductivity
d) Effective porosity

**Answer 1:**
a) **Water table:** The upper surface of the zone of saturation in an unconfined aquifer, where pore water pressure equals atmospheric pressure.
b) **Piezometric surface:** The imaginary surface representing the level to which water will rise in a tightly cased well penetrating a confined aquifer, indicating the potentiometric head.
c) **Hydraulic conductivity:** A measure of the ability of a porous medium to transmit water, quantified by Darcy's Law and having units of velocity.
d) **Effective porosity:** The fraction of the total volume of a porous medium that consists of interconnected pores through which fluids can flow.

**Question 2: Darcy's Law Calculation**
A sand column of length 0.5 m and cross-sectional area 0.01 m² has a hydraulic conductivity of $1 \times 10^{-4}$ m/s. If the head at one end of the column is 2.0 m and at the other end is 0.5 m, calculate the discharge through the column.

**Answer 2:**
Given:
$L = 0.5$ m
$A = 0.01$ m²
$K = 1 \times 10^{-4}$ m/s
$h_1 = 2.0$ m
$h_2 = 0.5$ m

Using Darcy's Law: $Q = K \cdot A \cdot \frac{h_1 - h_2}{L}$
$Q = (1 \times 10^{-4} \text{ m/s}) \cdot (0.01 \text{ m²}) \cdot \frac{2.0 \text{ m} - 0.5 \text{ m}}{0.5 \text{ m}}$
$Q = (1 \times 10^{-6} \text{ m³/s}) \cdot \frac{1.5 \text{ m}}{0.5 \text{ m}}$
$Q = (1 \times 10^{-6} \text{ m³/s}) \cdot 3$
$Q = 3 \times 10^{-6}$ m³/s

**Question 3: Velocity Comparison**
If a sandy aquifer has a hydraulic conductivity of $1 \times 10^{-5}$ m/s and an effective porosity of 0.3, and the hydraulic gradient is 0.01, calculate:
a) The seepage velocity.
b) The average linear velocity.

**Answer 3:**
Given:
$K = 1 \times 10^{-5}$ m/s
$n_e = 0.3$
$i = 0.01$

a) **Seepage velocity ($v_s$):**
$v_s = K \cdot i$
$v_s = (1 \times 10^{-5} \text{ m/s}) \cdot 0.01$
$v_s = 1 \times 10^{-7}$ m/s

b) **Average linear velocity ($v_a$):**
$v_a = \frac{v_s}{n_e}$
$v_a = \frac{1 \times 10^{-7} \text{ m/s}}{0.3}$
$v_a \approx 3.33 \times 10^{-7}$ m/s

**Question 4: Flow Equation Concept**
What is the governing differential equation for steady-state, saturated, two-dimensional groundwater flow in a homogeneous and isotropic aquifer with no sources or sinks?

**Answer 4:**
The governing differential equation is **Laplace's equation**:
$\nabla^2 h = 0$
or $\frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2} = 0$

**Question 5: Unconfined vs. Confined**
How does the water level in a well relate to the water table in an unconfined aquifer, and how does it relate to the piezometric surface in a confined aquifer?

**Answer 5:**
*   In an **unconfined aquifer**, the water level in a well accurately represents the **water table**.
*   In a **confined aquifer**, the water level in a well rises to the elevation of the **piezometric surface**. This level may be above, at, or below the top of the aquifer, depending on the internal pressure of the aquifer.
