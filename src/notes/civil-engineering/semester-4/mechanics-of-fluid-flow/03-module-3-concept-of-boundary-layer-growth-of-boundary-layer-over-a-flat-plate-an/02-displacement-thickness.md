---
title: "displacement thickness"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a75"
status: "completed"
scrapedAt: "2026-05-20T18:46:33.987Z"
---
# MECHANICS OF FLUID FLOW: Module 3 - Concept of Boundary Layer

## Topic: Displacement Thickness

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of displacement thickness in the context of boundary layers.
*   Define displacement thickness mathematically.
*   Explain the physical significance of displacement thickness.
*   Calculate displacement thickness for common flow profiles (e.g., laminar boundary layer over a flat plate).
*   Appreciate the importance of displacement thickness in fluid mechanics problems.

---

### 1. Introduction to Boundary Layers and Displacement

Recall from previous discussions that when a real fluid flows over a solid surface, a region near the surface where viscous effects are significant is developed. This region is known as the **boundary layer**.

Within the boundary layer, the fluid velocity gradually increases from zero at the surface (due to the no-slip condition) to the free-stream velocity ($U_\infty$) at the outer edge of the boundary layer.

The presence of the boundary layer causes a **retardation** of the fluid flow. This retardation means that the velocity within the boundary layer is always less than the free-stream velocity.

### 2. Concept of Displacement Thickness ($\delta^*$)

**Definition:**

Displacement thickness ($\delta^*$) is a concept introduced to quantify the **displacement** of the external flow due to the presence of the boundary layer. It represents the **distance** by which the external streamlines are pushed outwards from the actual surface of the body.

Imagine the boundary layer as a region of "slowed-down" fluid. If this slowed-down fluid were replaced by fluid moving at the free-stream velocity ($U_\infty$), the same *mass flow rate* reduction across the section would be achieved by moving the outer boundary outwards by a certain distance. This distance is the displacement thickness.

**Key Idea:** Displacement thickness is the distance the *ideal fluid* (inviscid) boundary would need to be moved to compensate for the mass flow deficit caused by the viscous boundary layer.

### 3. Mathematical Definition of Displacement Thickness

Consider a control volume extending from the surface (y=0) to the outer edge of the boundary layer (y=$\delta$). The free-stream velocity outside the boundary layer is $U_\infty$.

The mass flow rate per unit width through the boundary layer at a given axial position $x$ is:

$\dot{m}_{boundary\_layer} = \int_{0}^{\delta} \rho u(y) dy$

where:
*   $\rho$ is the fluid density.
*   $u(y)$ is the velocity profile within the boundary layer at a distance $y$ from the surface.
*   $\delta$ is the boundary layer thickness.

The mass flow rate per unit width if there were no boundary layer (i.e., if the fluid from y=0 to y=$\delta$ was moving at $U_\infty$) would be:

$\dot{m}_{ideal} = \int_{0}^{\delta} \rho U_\infty dy = \rho U_\infty \delta$

The **mass flow deficit** per unit width due to the boundary layer is the difference between the ideal mass flow rate and the actual mass flow rate:

Mass flow deficit $= \dot{m}_{ideal} - \dot{m}_{boundary\_layer} = \rho U_\infty \delta - \int_{0}^{\delta} \rho u(y) dy$

Now, according to the definition of displacement thickness, this mass flow deficit is equivalent to the mass flow of fluid moving at the free-stream velocity ($U_\infty$) over an additional thickness of $\delta^*$.

Mass flow deficit $= \rho U_\infty \delta^*$

Equating the two expressions for the mass flow deficit:

$\rho U_\infty \delta^* = \rho U_\infty \delta - \int_{0}^{\delta} \rho u(y) dy$

Assuming constant density ($\rho$):

$U_\infty \delta^* = U_\infty \delta - \int_{0}^{\delta} u(y) dy$

Rearranging to solve for $\delta^*$:

$U_\infty \delta^* = \int_{0}^{\delta} (U_\infty - u(y)) dy$

$\delta^* = \frac{1}{U_\infty} \int_{0}^{\delta} (U_\infty - u(y)) dy$

This is the fundamental definition of displacement thickness. It represents the integral of the velocity defect over the thickness of the boundary layer, normalized by the free-stream velocity.

### 4. Physical Significance of Displacement Thickness

*   **Streamline Displacement:** It quantifies how much the external flow streamlines are pushed away from the actual surface due to the viscous effects in the boundary layer.
*   **Effect on External Flow:** The presence of the boundary layer and its associated displacement thickness effectively alters the shape of the body seen by the outer, inviscid flow.
*   **Momentum Considerations:** Displacement thickness is directly related to the momentum deficit within the boundary layer.
*   **Drag Calculation:** It is a crucial parameter in estimating the drag on a body immersed in a viscous fluid. Specifically, it's used in calculating the momentum thickness, which is directly related to skin friction drag.

### 5. Calculation of Displacement Thickness for a Laminar Boundary Layer over a Flat Plate

Let's consider the well-known laminar boundary layer flow over an infinite flat plate aligned with the flow. The velocity profile for this case is often approximated by a polynomial. A common approximation for the laminar boundary layer velocity profile is:

$u(y) = U_\infty \left[ \frac{3}{2} \left( \frac{y}{\delta} \right) - \frac{1}{2} \left( \frac{y}{\delta} \right)^3 \right]$

where $\delta$ is the boundary layer thickness at a given axial position $x$.

Now, let's calculate the displacement thickness using this profile.

**Step 1: Substitute the velocity profile into the definition of $\delta^*$.**

$\delta^* = \frac{1}{U_\infty} \int_{0}^{\delta} \left( U_\infty - U_\infty \left[ \frac{3}{2} \left( \frac{y}{\delta} \right) - \frac{1}{2} \left( \frac{y}{\delta} \right)^3 \right] \right) dy$

**Step 2: Simplify the integrand.**

$\delta^* = \frac{1}{U_\infty} \int_{0}^{\delta} U_\infty \left[ 1 - \frac{3}{2} \left( \frac{y}{\delta} \right) + \frac{1}{2} \left( \frac{y}{\delta} \right)^3 \right] dy$

$\delta^* = \int_{0}^{\delta} \left[ 1 - \frac{3}{2} \left( \frac{y}{\delta} \right) + \frac{1}{2} \left( \frac{y}{\delta} \right)^3 \right] dy$

**Step 3: Perform the integration.**

$\delta^* = \left[ y - \frac{3}{2\delta} \left( \frac{y^2}{2} \right) + \frac{1}{2\delta^3} \left( \frac{y^4}{4} \right) \right]_{0}^{\delta}$

$\delta^* = \left[ y - \frac{3}{4\delta} y^2 + \frac{1}{8\delta^3} y^4 \right]_{0}^{\delta}$

**Step 4: Evaluate the integral at the limits.**

$\delta^* = \left( \delta - \frac{3}{4\delta} (\delta^2) + \frac{1}{8\delta^3} (\delta^4) \right) - (0 - 0 + 0)$

$\delta^* = \delta - \frac{3}{4}\delta + \frac{1}{8}\delta$

**Step 5: Simplify the expression for $\delta^*$.**

$\delta^* = \left( 1 - \frac{3}{4} + \frac{1}{8} \right) \delta$

$\delta^* = \left( \frac{8 - 6 + 1}{8} \right) \delta$

$\delta^* = \frac{3}{8}\delta$

**Result:** For a laminar boundary layer over a flat plate with the given polynomial velocity profile, the displacement thickness is $\delta^* = \frac{3}{8}\delta$.

**Important Note:** The actual value of $\delta^*$ depends on the specific velocity profile $u(y)$. Different approximations or exact solutions for the boundary layer profile will yield different numerical factors. For the Blasius solution for laminar flow over a flat plate, the displacement thickness is found to be $\delta^* \approx 1.72 \sqrt{\frac{\nu x}{U_\infty}}$.

### 6. Comparison with Boundary Layer Thickness ($\delta$)

*   **Boundary Layer Thickness ($\delta$):** The distance from the surface to the point where the velocity reaches approximately 99% of the free-stream velocity. It is a measure of the extent of viscous influence.
*   **Displacement Thickness ($\delta^*$):** The distance by which the external flow is displaced due to the velocity deficit within the boundary layer.
*   **Relationship:** $\delta^* < \delta$ because the velocity deficit $(U_\infty - u(y))$ is less than $U_\infty$ over most of the boundary layer. The ratio $\delta^*/\delta$ depends on the shape of the velocity profile. For the laminar flat plate case, $\delta^*/\delta = 3/8 = 0.375$.

### 7. Importance and Applications

*   **Aerodynamics:** Crucial for calculating the drag on aircraft wings and other aerodynamic bodies. The displacement thickness affects the pressure distribution around the body, which in turn influences the lift and drag.
*   **Internal Flows:** Understanding displacement thickness is important in designing pipes, channels, and diffusers, as it affects the effective cross-sectional area available for flow and thus the pressure drop and flow rate.
*   **Heat Transfer:** The displacement thickness is also related to the thermal boundary layer thickness, which is important for calculating heat transfer rates.
*   **Flow Separation:** In some adverse pressure gradient situations, the boundary layer can thicken significantly, and the displacement thickness can become substantial. This can lead to flow separation, which drastically alters the flow pattern and increases drag.

---

### Practice Questions/Exercises:

**Question 1:**
Define displacement thickness ($\delta^*$) in your own words. What physical phenomenon does it represent?

**Question 2:**
Derive the mathematical expression for displacement thickness ($\delta^*$).

**Question 3:**
For a hypothetical boundary layer, the velocity profile is given by $u(y) = U_\infty \left( \frac{y}{\delta} \right)^2$ for $0 \le y \le \delta$. Calculate the displacement thickness for this profile.

**Question 4:**
If the displacement thickness for a particular flow is 2 mm and the boundary layer thickness is 5 mm, what is the ratio $\delta^*/\delta$? What does this ratio tell you about the velocity profile?

---

### Answers to Practice Questions:

**Answer 1:**
Displacement thickness ($\delta^*$) is the distance by which the external streamlines of an inviscid flow are pushed outward from the actual surface of a body due to the presence of the viscous boundary layer. It quantifies the mass flow deficit caused by the reduced velocities within the boundary layer.

**Answer 2:**
The mathematical expression for displacement thickness is derived by equating the mass flow deficit due to the boundary layer to the mass flow of fluid at free-stream velocity that would occupy the displaced volume. This leads to:
$\delta^* = \frac{1}{U_\infty} \int_{0}^{\delta} (U_\infty - u(y)) dy$

**Answer 3:**
Given $u(y) = U_\infty \left( \frac{y}{\delta} \right)^2$:
$\delta^* = \frac{1}{U_\infty} \int_{0}^{\delta} \left( U_\infty - U_\infty \left( \frac{y}{\delta} \right)^2 \right) dy$
$\delta^* = \int_{0}^{\delta} \left( 1 - \left( \frac{y}{\delta} \right)^2 \right) dy$
$\delta^* = \left[ y - \frac{1}{\delta^2} \left( \frac{y^3}{3} \right) \right]_{0}^{\delta}$
$\delta^* = \left( \delta - \frac{1}{\delta^2} \frac{\delta^3}{3} \right) - (0)$
$\delta^* = \delta - \frac{1}{3}\delta = \frac{2}{3}\delta$

So, $\delta^* = \frac{2}{3}\delta$.

**Answer 4:**
The ratio $\delta^*/\delta = 2 \text{ mm} / 5 \text{ mm} = 0.4$.
A ratio of 0.4 indicates that the velocity deficit is not extremely large across the entire boundary layer. A lower ratio suggests a more "filled-out" velocity profile within the boundary layer (i.e., velocities closer to $U_\infty$ for a larger portion of the boundary layer thickness). For comparison, the laminar flat plate profile has a ratio of 0.375, while a more blunt profile would have a higher ratio.

---

### Important Points to Remember:

*   Displacement thickness ($\delta^*$) is a measure of the "effective thickening" of a body due to viscous effects.
*   It quantifies the displacement of external streamlines.
*   It is always less than the boundary layer thickness ($\delta$).
*   The calculation of $\delta^*$ is directly dependent on the velocity profile within the boundary layer.
*   Displacement thickness is a key parameter for calculating drag and understanding flow behavior near surfaces.
*   It is particularly important in external flows over airfoils, wings, and other bluff bodies.
