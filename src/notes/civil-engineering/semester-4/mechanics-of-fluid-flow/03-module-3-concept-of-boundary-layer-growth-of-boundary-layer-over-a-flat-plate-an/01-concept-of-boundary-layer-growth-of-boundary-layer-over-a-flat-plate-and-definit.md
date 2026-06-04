---
title: "Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a74"
status: "completed"
scrapedAt: "2026-05-20T18:46:33.198Z"
---
# Mechanics of Fluid Flow: Module 3 - Concept of Boundary Layer

## Topic: Growth of Boundary Layer Over a Flat Plate and Definition of Boundary Layer Thickness

---

### 1. Introduction to the Boundary Layer Concept

*   **The Problem:** When a real fluid flows over a solid surface, the fluid particles directly in contact with the surface have zero velocity relative to the surface (the **no-slip condition**).
*   **The Consequence:** This no-slip condition creates a velocity gradient in the fluid adjacent to the surface. The velocity increases as we move away from the surface.
*   **Prandtl's Insight (1904):** Ludwig Prandtl introduced the concept of the boundary layer to simplify the analysis of viscous flow. He proposed that the viscous effects are confined to a thin layer near the surface, while the fluid outside this layer behaves almost like an inviscid fluid.

---

### 2. Growth of Boundary Layer Over a Flat Plate

*   **Scenario:** Consider a flat plate placed in a uniform flow of an incompressible, viscous fluid. The flow is assumed to be laminar initially.
*   **Leading Edge:** At the leading edge of the plate (x=0), there is no boundary layer. The fluid velocity is uniform.
*   **As Flow Progresses (increasing x):**
    *   **Viscous Effects Propagate:** Due to viscosity, the fluid particles next to the plate slow down. This retardation is then transmitted to adjacent layers of fluid through viscous shear.
    *   **Velocity Profile Development:** A velocity profile starts to develop. The velocity is zero at the wall and gradually increases with distance from the wall.
    *   **Boundary Layer Thickness (δ):** The region where these viscous effects are significant is called the **boundary layer**. The thickness of this layer, denoted by $\delta$, increases as the flow moves along the plate in the direction of flow (increasing x).
    *   **Free Stream Velocity (U∞):** Outside the boundary layer, the velocity of the fluid approaches the free stream velocity ($U_\infty$), which is the velocity of the fluid far away from the plate.

*   **Visual Representation:** Imagine a wedge-shaped region growing along the plate. The velocity within this wedge is less than $U_\infty$, and it increases from zero at the wall to $U_\infty$ at the outer edge of the boundary layer.

---

### 3. Definition of Boundary Layer Thickness ($\delta$)

The boundary layer thickness is not a precisely defined quantity with a sharp edge. Instead, it's a region where the velocity gradient is significant. Several definitions are used, each with its own practical implications:

*   **Definition 1: The Displacement Thickness ($\delta^*$ or $\delta_1$)**
    *   **Concept:** This represents the distance the outer streamlines have been displaced outward from the edge of the boundary layer due to the reduction in velocity within the boundary layer. It quantifies the "blockage" effect of the boundary layer on the inviscid flow.
    *   **Mathematical Definition:**
        $\delta^* = \int_{0}^{\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
        where:
        *   $u$ is the velocity of the fluid at a distance $y$ from the wall.
        *   $U_\infty$ is the free stream velocity.
        *   $y$ is the distance from the wall.
    *   **Meaning:** It's the thickness of the inviscid fluid layer that would have the same mass deficit as the actual viscous boundary layer.

*   **Definition 2: The Momentum Thickness ($\theta$ or $\delta_2$)**
    *   **Concept:** This represents the distance of the outer streamlines by which the momentum flux of the boundary layer is reduced compared to the momentum flux of an equivalent inviscid layer. It's important for analyzing drag and boundary layer separation.
    *   **Mathematical Definition:**
        $\theta = \int_{0}^{\infty} \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
    *   **Meaning:** It's the thickness of the inviscid fluid layer that would have the same momentum deficit as the actual viscous boundary layer.

*   **Definition 3: The Velocity Thickness ($\delta$ or $\delta_3$) - The Most Common Definition**
    *   **Concept:** This is the most commonly used definition. It is the distance from the wall to the point where the fluid velocity is a certain percentage (usually 99%) of the free stream velocity.
    *   **Mathematical Definition:**
        $\delta = y \quad \text{where} \quad u(y) = 0.99 U_\infty$
    *   **Interpretation:** While it's an approximation, it provides a practical measure of the extent of the viscous region.

**Important Relationship:** For typical velocity profiles in laminar boundary layers, the following approximate relationship holds:
$\delta^* \approx 0.33 \delta$
$\theta \approx 0.13 \delta$

---

### 4. Laminar Boundary Layer Growth on a Flat Plate

For laminar flow over a flat plate starting from the leading edge, we can derive an expression for the boundary layer thickness as a function of distance from the leading edge.

*   **Assumptions for Derivation (e.g., using Blasius Solution):**
    *   Steady, incompressible, laminar flow.
    *   Viscosity is constant.
    *   No pressure gradient in the direction of flow (dp/dx = 0).
    *   The flow is similar in different cross-sections perpendicular to the plate (similarity solution).

*   **Resulting Formula (for laminar flow):**
    The boundary layer thickness $\delta$ at a distance $x$ from the leading edge is given by:
    $\delta = \frac{5.0}{\sqrt{Re_x}}$
    where $Re_x$ is the local Reynolds number:
    $Re_x = \frac{\rho U_\infty x}{\mu}$
    *   $\rho$: Density of the fluid
    *   $U_\infty$: Free stream velocity
    *   $x$: Distance from the leading edge
    *   $\mu$: Dynamic viscosity of the fluid

*   **Key Observation:**
    *   The boundary layer thickness increases with the square root of the distance from the leading edge ($\delta \propto \sqrt{x}$).
    *   The boundary layer thickness decreases with increasing Reynolds number ($Re_x$). This means for higher velocities, higher densities, or lower viscosities, the boundary layer grows slower.

---

### 5. Turbulent Boundary Layer Growth on a Flat Plate

*   **Transition:** As the flow moves along the plate, the laminar boundary layer eventually becomes unstable and transitions to turbulent flow. This transition typically occurs at a critical Reynolds number ($Re_{x,crit}$), often around $5 \times 10^5$.
*   **Characteristics of Turbulent Boundary Layer:**
    *   **Thicker:** Turbulent boundary layers are generally thicker than laminar boundary layers at the same distance from the leading edge.
    *   **Higher Shear Stress:** They have higher skin friction drag due to more intense mixing and momentum transfer.
    *   **Flatter Velocity Profile:** The velocity profile is flatter in the outer part of the turbulent boundary layer and steeper near the wall compared to a laminar profile.

*   **Resulting Formula (for turbulent flow, empirical):**
    For a fully turbulent boundary layer over a smooth flat plate, the thickness $\delta$ at a distance $x$ from the leading edge is often approximated by:
    $\delta \approx \frac{0.37 x}{Re_x^{1/5}}$
    or a more common form derived from the $1/7$ power law velocity profile:
    $\delta = \frac{0.16 x}{Re_x^{1/7}}$
    or a more widely accepted empirical relation:
    $\delta = \frac{0.37 x}{(Re_x)^{1/5}}$
    *   **Key Observation:** The thickness grows less rapidly than laminar flow, as $\delta \propto x^{4/5}$.

*   **Mixed Boundary Layer:** In reality, flow over a flat plate often starts as laminar, transitions to turbulent, and then continues as turbulent. The total boundary layer thickness would be a combination of the laminar and turbulent portions.

---

### 6. Learning Outcomes Covered

*   **Understanding of the basic concept of boundary layer:** Yes, explained the origin and nature of the boundary layer.
*   **Knowledge of how the boundary layer grows over a flat plate:** Yes, described the development from the leading edge and the factors influencing growth.
*   **Definition of boundary layer thickness:** Yes, provided and explained the common definitions ($\delta^*$, $\theta$, and the velocity thickness $\delta$).
*   **Understanding of the difference between laminar and turbulent boundary layers:** Yes, contrasted their characteristics and growth.
*   **Awareness of the mathematical expressions for boundary layer thickness:** Yes, provided formulas for laminar flow and empirical approximations for turbulent flow.

---

### 7. Key Concepts and Definitions

*   **No-Slip Condition:** Velocity of fluid at the solid surface is zero relative to the surface.
*   **Boundary Layer:** A thin layer of fluid adjacent to a solid surface where viscous effects are significant, leading to a velocity gradient.
*   **Free Stream Velocity ($U_\infty$):** Velocity of the fluid far away from the solid surface.
*   **Velocity Profile:** Distribution of fluid velocity across the boundary layer, varying from zero at the wall to $U_\infty$ at the outer edge.
*   **Displacement Thickness ($\delta^*$):** The thickness of inviscid fluid that compensates for the mass deficit due to the boundary layer.
*   **Momentum Thickness ($\theta$):** The thickness of inviscid fluid that compensates for the momentum deficit due to the boundary layer.
*   **Velocity Thickness ($\delta$):** The distance from the wall where the velocity reaches 99% of $U_\infty$.
*   **Reynolds Number ($Re_x$):** Dimensionless parameter indicating the ratio of inertial forces to viscous forces ($Re_x = \rho U_\infty x / \mu$). Crucial for determining flow regime (laminar vs. turbulent).
*   **Laminar Flow:** Smooth, orderly flow with fluid particles moving in parallel layers.
*   **Turbulent Flow:** Chaotic, irregular flow with significant mixing and eddies.
*   **Transition:** The process by which laminar flow changes into turbulent flow.
*   **Critical Reynolds Number ($Re_{x,crit}$):** The Reynolds number at which transition from laminar to turbulent flow typically begins.

---

### 8. Examples

*   **Flow of Air Over an Airplane Wing:** The boundary layer is crucial for understanding lift and drag on the wing. The thickness and nature (laminar or turbulent) of the boundary layer significantly affect aerodynamic performance.
*   **Water Flow in a Pipe:** Although the geometry is different, the concept of a boundary layer forming at the pipe walls is analogous.
*   **Blood Flow in Arteries:** The viscous nature of blood and its flow near the artery walls create boundary layers that can influence physiological processes.

---

### 9. Practice Questions and Exercises

**Question 1:**
Define the "no-slip condition" in fluid mechanics.

**Question 2:**
What is a boundary layer, and why does it form?

**Question 3:**
Explain the difference between displacement thickness ($\delta^*$) and momentum thickness ($\theta$). Which one is generally larger?

**Question 4:**
For laminar flow over a flat plate, the boundary layer thickness $\delta$ is proportional to $x^n$. What is the value of $n$?

**Question 5:**
If the free stream velocity is doubled, how does the laminar boundary layer thickness at a given distance $x$ change?

**Question 6:**
Estimate the thickness of the laminar boundary layer at $x = 1$ m for water flowing at $20^\circ C$ ($U_\infty = 1 m/s$, $\rho = 998 kg/m^3$, $\mu = 1.00 \times 10^{-3} Pa.s$).

**Question 7:**
Compare the growth of a laminar boundary layer with a turbulent boundary layer on a flat plate. Which one is generally thicker at a given distance $x$, and why?

---

### 10. Answers to Practice Questions

**Answer 1:**
The no-slip condition states that the velocity of a viscous fluid at a solid boundary is zero relative to the boundary.

**Answer 2:**
A boundary layer is a thin region of fluid adjacent to a solid surface where viscous effects are significant, causing the fluid velocity to change from zero at the surface to the free stream velocity at the edge of the layer. It forms due to the viscosity of the fluid and the no-slip condition at the surface.

**Answer 3:**
Displacement thickness ($\delta^*$) represents the outward displacement of streamlines due to the velocity reduction in the boundary layer, effectively quantifying the "blockage" effect. Momentum thickness ($\theta$) represents the reduction in momentum flux due to the boundary layer. For typical profiles, $\delta^*$ is generally larger than $\theta$.

**Answer 4:**
For laminar flow over a flat plate, $\delta \propto \sqrt{x}$. Therefore, $n = 1/2$.

**Answer 5:**
The laminar boundary layer thickness formula is $\delta = \frac{5.0}{\sqrt{Re_x}} = \frac{5.0}{\sqrt{\frac{\rho U_\infty x}{\mu}}}$.
If $U_\infty$ is doubled, the Reynolds number $Re_x$ doubles.
The new thickness $\delta'$ would be:
$\delta' = \frac{5.0}{\sqrt{2 Re_x}} = \frac{1}{\sqrt{2}} \times \frac{5.0}{\sqrt{Re_x}} = \frac{\delta}{\sqrt{2}}$
So, the laminar boundary layer thickness decreases by a factor of $\sqrt{2}$ (approximately 1.414), meaning it becomes thinner.

**Answer 6:**
First, calculate the local Reynolds number ($Re_x$):
$\rho = 998 \, kg/m^3$
$U_\infty = 1 \, m/s$
$x = 1 \, m$
$\mu = 1.00 \times 10^{-3} \, Pa.s$

$Re_x = \frac{\rho U_\infty x}{\mu} = \frac{998 \, kg/m^3 \times 1 \, m/s \times 1 \, m}{1.00 \times 10^{-3} \, Pa.s} = 998,000 = 9.98 \times 10^5$

Now, use the laminar boundary layer thickness formula:
$\delta = \frac{5.0}{\sqrt{Re_x}} = \frac{5.0}{\sqrt{998,000}} \approx \frac{5.0}{999} \approx 0.005005 \, m$

So, the laminar boundary layer thickness is approximately $5.01 \, mm$.

**Answer 7:**
At a given distance $x$ from the leading edge, a turbulent boundary layer is generally **thicker** than a laminar boundary layer. This is because turbulent flow involves more vigorous mixing and momentum transfer from the free stream into the viscous region, extending the influence of viscosity further from the wall. The velocity profile in a turbulent boundary layer is also flatter, meaning it takes a larger distance from the wall to reach 99% of the free stream velocity.

---

### 10. Important Points to Remember

*   The boundary layer is a consequence of viscosity and the no-slip condition.
*   The boundary layer thickness increases with distance from the leading edge.
*   For laminar flow, $\delta \propto \sqrt{x}$.
*   For turbulent flow, $\delta \propto x^{4/5}$ (or similar power-law dependence).
*   Turbulent boundary layers are generally thicker and have higher skin friction than laminar ones.
*   Displacement and momentum thicknesses are important parameters for quantifying the effects of the boundary layer.
*   The Reynolds number dictates the transition from laminar to turbulent flow.

---
