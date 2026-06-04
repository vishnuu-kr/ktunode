---
title: "calculation of drag"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a7b"
status: "completed"
scrapedAt: "2026-05-20T18:46:37.984Z"
---
# Mechanics of Fluid Flow: Module 3 - Concept of Boundary Layer

## Topic: Calculation of Drag

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of drag and its origins in fluid flow.
*   Define and calculate drag force for flow over a flat plate.
*   Differentiate between friction drag and pressure drag.
*   Calculate the drag coefficient for flow over a flat plate.
*   Understand the significance of Reynolds number in drag calculation.
*   Relate boundary layer thickness to drag force.

---

### 1. Introduction to Drag

**Definition:** Drag is the force exerted by a fluid on an object moving through it, or by a fluid flowing past a stationary object, that opposes the relative motion. It is a resistive force acting parallel to the direction of fluid flow.

**Origins of Drag:** Drag arises from two primary mechanisms:

*   **Skin Friction Drag (Viscous Drag):** This is due to the shear stress exerted by the fluid on the surface of the object. It originates from the viscosity of the fluid within the boundary layer.
*   **Pressure Drag (Form Drag/Profile Drag):** This is due to the pressure difference between the front and rear of the object. It is a consequence of flow separation, which creates a wake region of lower pressure behind the object.

**Total Drag:** The total drag force ($F_D$) is the sum of skin friction drag ($F_{Df}$) and pressure drag ($F_{Dp}$):

$F_D = F_{Df} + F_{Dp}$

---

### 2. Drag on a Flat Plate Parallel to the Flow

When a fluid flows over a flat plate aligned parallel to the flow direction, the primary source of drag is **skin friction drag**. Pressure drag is generally negligible for streamlined bodies like a flat plate in parallel flow, as flow separation is minimal.

#### 2.1. Boundary Layer Growth on a Flat Plate

*   **Concept:** As a fluid flows over a flat plate, a thin layer of fluid near the surface, called the **boundary layer**, is formed. Within this layer, the fluid velocity changes from zero at the surface (due to the no-slip condition) to the free-stream velocity at the edge of the boundary layer.
*   **Development:**
    *   At the leading edge of the plate, the boundary layer starts with zero thickness.
    *   As the flow progresses along the plate, the boundary layer grows in thickness.
    *   The growth depends on the fluid properties (viscosity, density) and the flow velocity.
*   **Types of Boundary Layers:**
    *   **Laminar Boundary Layer:** Smooth, orderly flow. Typically occurs at lower Reynolds numbers. Velocity profile is parabolic.
    *   **Turbulent Boundary Layer:** Chaotic, irregular flow with eddies. Typically occurs at higher Reynolds numbers. Velocity profile is fuller (more uniform in the core).
    *   **Transition Region:** The region where the flow changes from laminar to turbulent.

#### 2.2. Boundary Layer Thickness ($\delta$)

**Definition:** The boundary layer thickness ($\delta$) is the distance from the surface where the fluid velocity reaches approximately 99% of the free-stream velocity ($U_\infty$).

*   **Laminar Boundary Layer Thickness:** For laminar flow over a flat plate, the theoretical thickness is given by:
    $\delta(x) = \frac{5x}{\sqrt{Re_x}}$
    Where:
    *   $x$ is the distance from the leading edge.
    *   $Re_x = \frac{\rho U_\infty x}{\mu} = \frac{U_\infty x}{\nu}$ is the local Reynolds number.
    *   $\rho$ is the fluid density.
    *   $U_\infty$ is the free-stream velocity.
    *   $\mu$ is the dynamic viscosity.
    *   $\nu = \frac{\mu}{\rho}$ is the kinematic viscosity.

*   **Turbulent Boundary Layer Thickness:** For turbulent flow over a flat plate, the empirical relation for thickness is approximately:
    $\delta(x) \approx \frac{0.37x}{Re_x^{1/5}}$
    This shows that the turbulent boundary layer grows faster than the laminar one.

*   **Displacement Thickness ($\delta^*$):** The distance by which the external flow is displaced outwards due to the boundary layer. It represents the reduction in flow area.
    $\delta^* = \int_0^\delta (1 - \frac{u}{U_\infty}) dy$

*   **Momentum Thickness ($\theta$):** The distance by which the momentum of the external flow is reduced due to the boundary layer.
    $\theta = \int_0^\delta \frac{u}{U_\infty} (1 - \frac{u}{U_\infty}) dy$

---

### 3. Calculation of Skin Friction Drag on a Flat Plate

The skin friction drag force on a flat plate is calculated by integrating the shear stress ($\tau_w$) over the surface area of the plate.

**Shear Stress ($\tau_w$):** This is the viscous stress at the wall.

*   **For Laminar Boundary Layer:**
    The shear stress at the wall for a laminar boundary layer is given by:
    $\tau_w(x) = \mu \left(\frac{\partial u}{\partial y}\right)_{y=0}$
    For a laminar boundary layer over a flat plate, it can be shown that:
    $\tau_w(x) = \frac{\tau_{w0}}{\sqrt{Re_x}}$
    Where $\tau_{w0} = \mu \frac{U_\infty}{\sqrt{\nu/U_\infty}}$ is the shear stress at the leading edge.
    The local skin friction coefficient ($C_{fx}$) is:
    $C_{fx} = \frac{\tau_w(x)}{\frac{1}{2}\rho U_\infty^2} = \frac{0.664}{\sqrt{Re_x}}$

*   **For Turbulent Boundary Layer:**
    The shear stress is generally higher due to the increased mixing. An empirical relation for the local skin friction coefficient for a turbulent boundary layer is often used:
    $C_{fx} = \frac{0.0592}{Re_x^{1/5}}$ (Valid for $5 \times 10^5 < Re_x < 10^7$)

**Drag Force ($F_{Df}$):** The total drag force is obtained by integrating the shear stress over the area of the plate (Length $L$, Width $W$).

*   **For Laminar Flow Over the Entire Plate (if $Re_L < 5 \times 10^5$):**
    $F_{Df} = \int_0^L \tau_w(x) W dx$
    Substituting $\tau_w(x) = \mu \frac{U_\infty}{\sqrt{\nu/U_\infty}} \frac{0.664}{\sqrt{Re_x}}$ and $Re_x = \frac{\rho U_\infty x}{\mu}$:
    $F_{Df} = \int_0^L \mu \frac{U_\infty}{\sqrt{\nu/U_\infty}} \frac{0.664}{\sqrt{\frac{\rho U_\infty x}{\mu}}} W dx$
    $F_{Df} = W \mu \frac{U_\infty^{3/2}}{\sqrt{\nu}} \frac{0.664}{\sqrt{\rho/\mu}} \int_0^L \frac{1}{\sqrt{x}} dx$
    $F_{Df} = W \mu \frac{U_\infty^{3/2}}{\sqrt{\nu}} \frac{0.664}{\sqrt{\rho/\mu}} [2\sqrt{x}]_0^L$
    $F_{Df} = W \mu \frac{U_\infty^{3/2}}{\sqrt{\nu}} \frac{0.664}{\sqrt{\rho/\mu}} 2\sqrt{L}$
    $F_{Df} = 1.328 W L \mu \frac{U_\infty^{1/2}}{\sqrt{\nu L}}$
    $F_{Df} = 1.328 W L \frac{\mu U_\infty}{\sqrt{\frac{\rho U_\infty L}{\mu}}} = 1.328 W L \frac{\mu U_\infty}{\sqrt{Re_L}}$
    We can express this in terms of the average skin friction coefficient ($C_{Df}$):
    $C_{Df} = \frac{F_{Df}}{\frac{1}{2}\rho U_\infty^2 (WL)} = \frac{1.328 W L \frac{\mu U_\infty}{\sqrt{Re_L}}}{\frac{1}{2}\rho U_\infty^2 (WL)}$
    $C_{Df} = \frac{1.328}{\sqrt{Re_L}}$
    So, $F_{Df} = C_{Df} \frac{1}{2}\rho U_\infty^2 A_{plate}$
    Where $A_{plate} = WL$ is the surface area of one side.

*   **For Turbulent Flow Over the Entire Plate (if $Re_L > 5 \times 10^5$):**
    Using the empirical local coefficient $C_{fx} = \frac{0.0592}{Re_x^{1/5}}$:
    $F_{Df} = \int_0^L \frac{0.0592}{\left(\frac{\rho U_\infty x}{\mu}\right)^{1/5}} \frac{1}{2}\rho U_\infty^2 W dx$
    $F_{Df} = \frac{0.0592}{2} \rho U_\infty^2 W \left(\frac{\mu}{\rho U_\infty}\right)^{1/5} \int_0^L x^{-1/5} dx$
    $F_{Df} = \frac{0.0592}{2} \rho U_\infty^2 W \left(\frac{\mu}{\rho U_\infty}\right)^{1/5} \left[\frac{x^{4/5}}{4/5}\right]_0^L$
    $F_{Df} = \frac{0.0592}{2} \rho U_\infty^2 W \left(\frac{\mu}{\rho U_\infty}\right)^{1/5} \frac{5}{4} L^{4/5}$
    $F_{Df} = 0.074 W L \rho U_\infty^2 \left(\frac{\mu}{\rho U_\infty L}\right)^{1/5} = 0.074 W L \frac{1}{2}\rho U_\infty^2 \left(\frac{\rho U_\infty L}{\mu}\right)^{-1/5}$
    The average skin friction coefficient is:
    $C_{Df} = \frac{F_{Df}}{\frac{1}{2}\rho U_\infty^2 (WL)} = \frac{0.074}{Re_L^{1/5}}$

*   **For Mixed Flow (Laminar followed by Turbulent):**
    If the flow starts laminar and becomes turbulent, the drag is calculated by summing the drag in the laminar section and the drag in the turbulent section.
    $F_{Df} = \left(\text{Drag from } 0 \text{ to } x_c\right) + \left(\text{Drag from } x_c \text{ to } L\right)$
    The transition typically occurs around $Re_c = 5 \times 10^5$.
    $F_{Df} = \left(C_{Df, laminar, x_c} \frac{1}{2}\rho U_\infty^2 W x_c\right) + \left(C_{Df, turbulent, L-x_c} \frac{1}{2}\rho U_\infty^2 W (L-x_c)\right)$
    $F_{Df} = \left(\frac{1.328}{\sqrt{Re_c}} \frac{1}{2}\rho U_\infty^2 W x_c\right) + \left(\frac{0.074}{Re_L^{1/5}} \frac{1}{2}\rho U_\infty^2 W (L-x_c) - \frac{0.074}{Re_c^{1/5}} \frac{1}{2}\rho U_\infty^2 W x_c\right)$
    Note: The subtraction of the turbulent drag from $x_c$ is to correct for the turbulent formula being applied from the origin.
    A common empirical formula for mixed flow is:
    $C_{Df} = \frac{0.074}{Re_L^{1/5}} - \frac{A}{Re_L}$
    Where $A$ is a constant that depends on the critical Reynolds number ($Re_c$). For $Re_c = 5 \times 10^5$, $A = 1700$.
    So, $C_{Df} = \frac{0.074}{Re_L^{1/5}} - \frac{1700}{Re_L}$

**Drag Coefficient ($C_D$):** For a flat plate parallel to the flow, the total drag coefficient ($C_D$) is essentially the skin friction drag coefficient ($C_{Df}$).
$C_D = C_{Df}$

---

### 4. Practice Questions and Answers

**Question 1:** Air at standard atmospheric conditions ($U_\infty = 20 \, \text{m/s}$, $\rho = 1.225 \, \text{kg/m}^3$, $\nu = 1.5 \times 10^{-5} \, \text{m}^2/\text{s}$) flows over a flat plate of length 2 m and width 1 m. Calculate the drag force on the plate assuming the flow is entirely laminar.

**Answer:**
First, calculate the Reynolds number at the end of the plate ($Re_L$):
$Re_L = \frac{U_\infty L}{\nu} = \frac{20 \, \text{m/s} \times 2 \, \text{m}}{1.5 \times 10^{-5} \, \text{m}^2/\text{s}} = 2.67 \times 10^6$

Since $Re_L > 5 \times 10^5$, the assumption of entirely laminar flow is incorrect. However, if we were to *assume* laminar flow for this question as stated, we would proceed with the laminar formula.

**Assuming laminar flow (for the sake of the question's premise):**
The drag coefficient for laminar flow is:
$C_{Df} = \frac{1.328}{\sqrt{Re_L}} = \frac{1.328}{\sqrt{2.67 \times 10^6}} = \frac{1.328}{1634} \approx 0.000813$

The surface area of the plate is $A_{plate} = L \times W = 2 \, \text{m} \times 1 \, \text{m} = 2 \, \text{m}^2$.
The drag force is:
$F_{Df} = C_{Df} \frac{1}{2}\rho U_\infty^2 A_{plate} = 0.000813 \times \frac{1}{2} \times 1.225 \, \text{kg/m}^3 \times (20 \, \text{m/s})^2 \times 2 \, \text{m}^2$
$F_{Df} = 0.000813 \times 0.5 \times 1.225 \times 400 \times 2 \approx 0.663 \, \text{N}$

**Question 2:** Repeat Question 1, but assume the flow is entirely turbulent from the leading edge.

**Answer:**
Using the turbulent flow formula:
$C_{Df} = \frac{0.074}{Re_L^{1/5}} = \frac{0.074}{(2.67 \times 10^6)^{1/5}} = \frac{0.074}{37.1} \approx 0.00199$

The drag force is:
$F_{Df} = C_{Df} \frac{1}{2}\rho U_\infty^2 A_{plate} = 0.00199 \times \frac{1}{2} \times 1.225 \, \text{kg/m}^3 \times (20 \, \text{m/s})^2 \times 2 \, \text{m}^2$
$F_{Df} = 0.00199 \times 0.5 \times 1.225 \times 400 \times 2 \approx 1.63 \, \text{N}$

**Question 3:** Repeat Question 1, assuming the flow transitions to turbulent at $Re_c = 5 \times 10^5$.

**Answer:**
Transition occurs at $x_c = \frac{Re_c \nu}{U_\infty} = \frac{5 \times 10^5 \times 1.5 \times 10^{-5} \, \text{m}^2/\text{s}}{20 \, \text{m/s}} = 0.375 \, \text{m}$.

Use the mixed flow formula:
$C_{Df} = \frac{0.074}{Re_L^{1/5}} - \frac{1700}{Re_L}$
$C_{Df} = \frac{0.074}{(2.67 \times 10^6)^{1/5}} - \frac{1700}{2.67 \times 10^6}$
$C_{Df} = 0.00199 - 0.000637 = 0.001353$

The drag force is:
$F_{Df} = C_{Df} \frac{1}{2}\rho U_\infty^2 A_{plate} = 0.001353 \times \frac{1}{2} \times 1.225 \, \text{kg/m}^3 \times (20 \, \text{m/s})^2 \times 2 \, \text{m}^2$
$F_{Df} = 0.001353 \times 0.5 \times 1.225 \times 400 \times 2 \approx 1.107 \, \text{N}$

**Note:** The mixed flow calculation gives a result between purely laminar and purely turbulent, which is expected. The higher drag for turbulent flow is evident.

---

### 5. Important Points to Remember

*   **Drag** is the resistive force exerted by a fluid on a moving object.
*   **Skin friction drag** is due to shear stress at the surface and is dominant for flat plates parallel to the flow.
*   **Pressure drag** is due to pressure differences caused by flow separation and is significant for bluff bodies.
*   The **boundary layer thickness** ($\delta$) increases with distance from the leading edge.
*   **Reynolds number ($Re_x$)** is crucial for determining the flow regime (laminar or turbulent) and calculating drag.
*   For laminar flow over a flat plate, $C_{Df} \propto Re_L^{-1/2}$.
*   For turbulent flow over a flat plate, $C_{Df} \propto Re_L^{-1/5}$.
*   Turbulent boundary layers are thicker and have higher skin friction drag than laminar boundary layers.
*   Drag is calculated by integrating shear stress over the surface area, often expressed using the drag coefficient ($C_D$) and dynamic pressure ($\frac{1}{2}\rho U_\infty^2$).
*   For mixed flow, the drag is calculated by summing contributions from laminar and turbulent sections or using empirical mixed-flow formulas.

---
This concludes the notes on the calculation of drag for flow over a flat plate. Remember to practice these calculations with different parameters and fluid properties.
