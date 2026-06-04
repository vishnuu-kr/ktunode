---
title: "Coulomb’s theory [concept only]"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e2c"
status: "completed"
scrapedAt: "2026-05-20T18:48:27.129Z"
---
# FOUNDATION ENGINEERING: Module 1 - Earth Pressure

## Topic: Coulomb's Theory (Concept Only)

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental assumptions of Coulomb's theory for calculating earth pressure.
*   Explain the concept of the "active earth pressure" and "passive earth pressure" as defined by Coulomb.
*   Identify the forces acting on the potential failure wedge in Coulomb's theory.
*   Describe the relationship between the angle of internal friction, the angle of wall friction, and the backfill properties in Coulomb's theory.
*   Recognize the limitations of Coulomb's theory.

---

### 1. Introduction to Earth Pressure

*   **Definition:** Earth pressure is the pressure exerted by soil on a retaining structure (e.g., retaining wall, basement wall).
*   **Importance:** Understanding earth pressure is crucial for designing stable retaining structures that can withstand the lateral forces from the soil and prevent failure.
*   **Types of Earth Pressure:**
    *   **At-rest Earth Pressure:** The pressure exerted by the soil when the retaining structure is neither moving nor yielding.
    *   **Active Earth Pressure:** The pressure exerted when the retaining structure moves away from the soil, causing the soil to expand and a failure wedge to form. This is the minimum lateral pressure the soil exerts.
    *   **Passive Earth Pressure:** The pressure exerted when the retaining structure moves into the soil, causing the soil to be compressed and a failure wedge to form. This is the maximum lateral pressure the soil exerts.

---

### 2. Coulomb's Theory of Earth Pressure

Coulomb's theory is one of the earliest and most fundamental theories used to calculate active and passive earth pressures. It's based on the concept of a **limiting equilibrium** of a soil wedge.

#### 2.1. Key Concepts and Assumptions

Coulomb's theory makes several simplifying assumptions to analyze the forces acting on a potential failure surface.

*   **Failure Wedge:** Assumes that the soil mass behind the retaining wall fails along a single, planar surface. This plane is called the **surface of rupture** or **failure plane**.
*   **Rigid Wedge:** The soil mass behind the wall is considered a rigid, triangular wedge.
*   **Smooth Wall:** Initially, Coulomb assumed the retaining wall surface is smooth, meaning there is no friction between the wall and the soil. (Later extensions consider wall friction).
*   **Cohesionless Soil:** The theory is primarily developed for cohesionless soils (like sands and gravels) where the soil's strength is primarily due to its internal friction.
*   **Backfill Properties:**
    *   **Uniformity:** The backfill material is assumed to be homogeneous and isotropic (properties are the same in all directions).
    *   **Plane Backfill:** The backfill surface is assumed to be either horizontal or uniformly sloped.
*   **Limiting Equilibrium:** The theory analyzes the wedge when it is on the verge of failure, meaning the forces are in equilibrium.
*   **Resultant Force:** The resultant force of the earth pressure on the wall is assumed to act at a specific point and have a specific inclination.

#### 2.2. Forces Acting on the Failure Wedge (Active State Example)

Consider a retaining wall of height *H* with a backfill. When the wall moves away from the soil (active state), a failure wedge forms. The forces acting on this wedge are:

1.  **Weight of the Wedge (W):** The gravitational force acting vertically downwards through the centroid of the wedge.
2.  **Earth Pressure (P<sub>a</sub>):** The resultant force exerted by the soil on the retaining wall. This is the force we want to determine. It acts at the base of the wall.
3.  **Wall Friction (F<sub>w</sub>):** If wall friction is considered, this force acts along the face of the wall. Its direction opposes the relative motion between the soil and the wall (acting upwards for active pressure).
4.  **Cohesion (C):** If the soil has cohesion (e.g., clays), a cohesive force would act along the failure plane. For cohesionless soils, C=0.
5.  **Backfill Surface Force (F<sub>b</sub>):** If the backfill surface is inclined, a force acts along the backfill surface.

*   **Diagrammatic Representation:** A free-body diagram of the soil wedge is crucial for visualizing these forces. The diagram shows the triangular wedge, the forces acting on its three sides (wall, backfill surface, and failure plane).

#### 2.3. Coulomb's Equation for Active Earth Pressure Coefficient (k<sub>a</sub>)

Coulomb's theory, through geometrical analysis of the forces, leads to an equation for the active earth pressure coefficient ($k_a$), which is the ratio of active earth pressure to the vertical overburden pressure.

*   **Key Parameters:**
    *   **$\phi$ (Phi):** Angle of internal friction of the soil. This represents the shear strength of the soil due to friction.
    *   **$\beta$ (Beta):** Angle of inclination of the backfill surface with the horizontal.
    *   **$\alpha$ (Alpha):** Angle of inclination of the retaining wall with the vertical.
    *   **$\delta$ (Delta) or $\phi_{w}$:** Angle of wall friction. This is the angle between the resultant earth pressure on the wall and the normal to the wall. It's typically less than or equal to $\phi$.

*   **Coulomb's Formula for $k_a$ (for a smooth wall, $\delta = 0$):**
    $$k_a = \frac{1 - \sin\phi}{1 + \sin\phi}$$
    This simplified formula assumes a vertical wall ($\alpha = 90^\circ$) and a horizontal backfill ($\beta = 0^\circ$).

*   **Coulomb's General Formula for $k_a$ (considering wall friction, inclined backfill, and inclined wall):**
    The general formula is more complex and involves several trigonometric terms. A common form is:
    $$k_a = \frac{\sin^2(\alpha + \phi)}{\sin^2(\alpha) \sin(\alpha - \delta) \left[ 1 + \sqrt{\frac{\sin(\phi + \delta) \sin(\phi - \beta)}{\sin(\alpha - \delta) \sin(\alpha + \beta)}}\right]^2}$$
    *(Note: For conceptual understanding, focus on the parameters and their influence rather than memorizing this complex formula. Understanding how $\phi$, $\delta$, $\beta$, and $\alpha$ affect $k_a$ is key.)*

#### 2.4. Coulomb's Equation for Passive Earth Pressure Coefficient (k<sub>p</sub>)

Similar analysis can be done for the passive state where the wall moves into the soil. The resultant force on the wall will act in the opposite direction.

*   **Coulomb's General Formula for $k_p$:**
    $$k_p = \frac{\sin^2(\alpha - \phi)}{\sin^2(\alpha) \sin(\alpha + \delta) \left[ 1 - \sqrt{\frac{\sin(\phi + \delta) \sin(\phi + \beta)}{\sin(\alpha + \delta) \sin(\alpha + \beta)}}\right]^2}$$
    *(Again, focus on the conceptual understanding of parameters.)*

#### 2.5. Active and Passive Earth Pressure Calculation

*   **Active Earth Pressure ($P_a$):**
    *   The active earth pressure at a depth *z* is given by: $p_a(z) = k_a \gamma z$
    *   Where:
        *   $k_a$ is the active earth pressure coefficient.
        *   $\gamma$ is the unit weight of the soil.
        *   $z$ is the depth from the backfill surface.
    *   The total active force ($P_a$) is the integral of this pressure distribution over the height of the wall, which for a simple case (vertical wall, horizontal backfill) results in a triangular distribution.
    *   $P_a = \frac{1}{2} k_a \gamma H^2$
    *   This resultant force acts at a height of $H/3$ from the base of the wall.

*   **Passive Earth Pressure ($P_p$):**
    *   The passive earth pressure at a depth *z* is given by: $p_p(z) = k_p \gamma z$
    *   The total passive force ($P_p$) is similarly: $P_p = \frac{1}{2} k_p \gamma H^2$

#### 2.6. Influence of Parameters on Earth Pressure

*   **Angle of Internal Friction ($\phi$):**
    *   **Higher $\phi$ $\implies$ Lower $k_a$ (less active pressure), Higher $k_p$ (more passive pressure).** This is because a higher internal friction means the soil is more resistant to shearing.
*   **Angle of Wall Friction ($\delta$):**
    *   **Higher $\delta$ $\implies$ Lower $k_a$ (less active pressure), Higher $k_p$ (more passive pressure).** Wall friction helps mobilize the soil's strength, reducing the force on the wall.
*   **Inclination of Backfill Surface ($\beta$):**
    *   **Positive $\beta$ (sloping up away from wall) $\implies$ Higher $k_a$.** An upward sloping backfill increases the overburden pressure and thus the force on the wall.
    *   **Negative $\beta$ (sloping down away from wall) $\implies$ Lower $k_a$.**
*   **Inclination of Wall ($\alpha$):**
    *   The effect of wall inclination is more complex and depends on the other parameters. However, generally, a batter (inward lean) of the wall can reduce active pressure, while an outward lean can increase it.

#### 2.7. Examples

**Example 1: Calculating Active Earth Pressure Coefficient**

A retaining wall supports a cohesionless backfill with:
*   Angle of internal friction ($\phi$) = 30°
*   Unit weight of soil ($\gamma$) = 18 kN/m³
*   Height of wall (H) = 5 m
*   Assume a vertical wall ($\alpha = 90^\circ$), horizontal backfill ($\beta = 0^\circ$), and smooth wall ($\delta = 0^\circ$).

**Solution:**
Using the simplified Coulomb's formula for a smooth wall and horizontal backfill:
$$k_a = \frac{1 - \sin\phi}{1 + \sin\phi} = \frac{1 - \sin(30^\circ)}{1 + \sin(30^\circ)} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} \approx 0.333$$

Now, calculate the total active force:
$$P_a = \frac{1}{2} k_a \gamma H^2 = \frac{1}{2} \times \frac{1}{3} \times 18 \text{ kN/m³} \times (5 \text{ m})^2$$
$$P_a = \frac{1}{6} \times 18 \times 25 = 3 \times 25 = 75 \text{ kN}$$
The resultant active force is 75 kN, acting at $H/3 = 5/3 \approx 1.67$ m from the base of the wall.

**Example 2: Influence of Wall Friction**

Consider the same wall and backfill as Example 1, but now assume the angle of wall friction ($\delta$) is 15°.

*   **How does this affect $k_a$ and $P_a$?**
    *(Without the full general formula, we can conceptually say that $k_a$ will be *lower* than 0.333, and therefore $P_a$ will also be *lower*. This is because the wall friction helps the soil wedge to slide up the wall, reducing the net horizontal force.)*

#### 2.8. Limitations of Coulomb's Theory

Despite its usefulness, Coulomb's theory has several limitations:

*   **Planar Failure Surface:** Assumes a single, planar failure surface, which may not always be the case in reality, especially for cohesive soils or complex wall geometries.
*   **Rigid Wedge Assumption:** Treats the soil as a rigid body, neglecting deformation and strain within the soil mass.
*   **Smooth Wall Assumption (Original):** The initial formulation assumes a smooth wall, which is not realistic. While extensions include wall friction, accurately determining $\delta$ can be challenging.
*   **Cohesionless Soils:** Primarily applicable to cohesionless soils. Modifying it for cohesive soils requires significant adjustments.
*   **Homogeneous and Isotropic Soil:** Assumes uniform soil properties throughout, which is often not true in field conditions.
*   **Single Failure Plane:** Does not account for arching effects or the development of multiple failure surfaces.
*   **Dynamic Conditions:** Not suitable for seismic or dynamic loading conditions.

---

### 3. Practice Questions/Exercises

**Question 1:**
Which of the following is a primary assumption of Coulomb's theory for earth pressure?
a) Soil behaves as a fluid.
b) The failure surface is curved.
c) The soil mass is treated as a rigid wedge.
d) The wall is infinitely flexible.

**Question 2:**
In Coulomb's theory, what is the effect of increasing the angle of internal friction ($\phi$) of the soil on the active earth pressure coefficient ($k_a$)?
a) $k_a$ increases.
b) $k_a$ decreases.
c) $k_a$ remains unchanged.
d) The effect is unpredictable.

**Question 3:**
For a vertical retaining wall with a horizontal backfill and a smooth wall face, Coulomb's theory assumes the resultant active earth pressure acts at a height of:
a) $H/2$ from the base.
b) $H/3$ from the base.
c) $2H/3$ from the base.
d) $H$ from the base.

**Question 4:**
A retaining wall supports a cohesionless backfill with $\phi = 35^\circ$. If the wall moves away from the soil, the earth pressure exerted is considered:
a) At-rest earth pressure.
b) Active earth pressure.
c) Passive earth pressure.
d) Hydrostatic pressure.

**Question 5:**
Calculate the active earth pressure coefficient ($k_a$) using Coulomb's theory for a vertical wall, horizontal backfill, and a smooth wall with $\phi = 30^\circ$. If the soil unit weight is 16 kN/m³ and the wall height is 6m, what is the total active force ($P_a$)?

---

### 4. Answers to Practice Questions

**Answer 1:**
c) The soil mass is treated as a rigid wedge.

**Answer 2:**
b) $k_a$ decreases. (Higher friction means more resistance to movement).

**Answer 3:**
b) $H/3$ from the base. (This is a consequence of the triangular pressure distribution).

**Answer 4:**
b) Active earth pressure. (Movement away from the soil leads to active pressure).

**Answer 5:**
*   **Calculate $k_a$:**
    $$k_a = \frac{1 - \sin\phi}{1 + \sin\phi} = \frac{1 - \sin(30^\circ)}{1 + \sin(30^\circ)} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} \approx 0.333$$
*   **Calculate $P_a$:**
    $$P_a = \frac{1}{2} k_a \gamma H^2 = \frac{1}{2} \times \frac{1}{3} \times 16 \text{ kN/m³} \times (6 \text{ m})^2$$
    $$P_a = \frac{1}{6} \times 16 \times 36 = 16 \times 6 = 96 \text{ kN}$$
    The total active force is 96 kN.

---

### 5. Important Points to Remember

*   **Coulomb's theory is a limit equilibrium method.** It assumes the soil wedge is on the verge of failure.
*   The core idea is analyzing the **forces acting on a rigid soil wedge** failure plane.
*   **Active pressure** occurs when the wall moves away from the soil (minimum pressure).
*   **Passive pressure** occurs when the wall moves into the soil (maximum pressure).
*   **Key parameters influencing earth pressure coefficients ($k_a$, $k_p$) are $\phi$, $\delta$, $\beta$, and $\alpha$.**
*   **Higher $\phi$ and $\delta$ reduce active pressure and increase passive pressure.**
*   **Coulomb's theory is most applicable to cohesionless soils with planar failure surfaces.**
*   **Limitations** regarding rigid body assumption and simplified failure surface are crucial to remember.
*   For practical design, **Rankine's theory** and **numerical methods** are often preferred due to their ability to handle more complex conditions.

---
