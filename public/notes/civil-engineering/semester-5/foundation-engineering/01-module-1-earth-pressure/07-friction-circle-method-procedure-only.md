---
title: "Friction circle method (Procedure only)"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e2e"
status: "completed"
scrapedAt: "2026-05-20T18:48:28.673Z"
---
# Foundation Engineering: Module 1 - Earth Pressure

## Topic: Friction Circle Method (Procedure Only)

This module focuses on understanding the principles of earth pressure and the methods used to calculate it for retaining structures. Specifically, this topic details the *procedure* for applying the Friction Circle Method to determine the active earth pressure.

---

### Learning Outcomes Covered:

*   Understanding the conceptual basis of the Friction Circle Method for calculating active earth pressure.
*   Outlining the step-by-step procedure for applying the Friction Circle Method.
*   Identifying the key parameters and geometric constructions involved in the method.
*   Recognizing the role of friction in stability analysis within the Friction Circle Method.

---

### 1. Introduction to the Friction Circle Method

The Friction Circle Method is a graphical method used to determine the active earth pressure acting on a retaining wall. It is an extension of the Rankine theory, incorporating the effect of wall friction.

*   **Key Concept:** The method assumes that the resultant force of the earth pressure acts at a distance of $\frac{2}{3}$ of the distance from the back of the wall to the point of application, measured from the **base of the failure wedge**. It also accounts for the mobilized friction along the failure plane.

*   **Advantage:** Unlike Coulomb's method, which requires assuming the angle of the failure plane, the Friction Circle Method directly derives the failure plane and the resultant force.

---

### 2. Underlying Principles

*   **Failure Wedge:** The soil mass behind the retaining wall is assumed to fail along a planar surface, forming a failure wedge.
*   **Resultant Force:** The resultant force of the active earth pressure on the wall is the vector sum of the forces acting on the failure wedge.
*   **Wall Friction:** The friction between the soil and the back of the retaining wall is a significant factor in reducing the lateral earth pressure.
*   **Critical Failure Plane:** The method aims to find the critical failure plane for which the active earth pressure is minimized.

---

### 3. Procedure for Applying the Friction Circle Method

The following steps outline the procedure for determining the active earth pressure using the Friction Circle Method. This is a graphical construction, so precise drawing is crucial.

#### Step 1: Define the Geometry of the Retaining Wall and Soil Mass

*   Draw the retaining wall profile to scale.
*   Define the backfill surface (horizontal or sloping).
*   Identify the properties of the soil:
    *   Unit weight ($\gamma$)
    *   Angle of internal friction ($\phi$)
    *   Cohesion ($c$) - *For simplicity in this procedure, we'll primarily focus on cohesionless soils ($c=0$). If cohesion is present, the procedure becomes more complex and often requires iterative solutions or modifications.*

#### Step 2: Construct the Friction Circle

*   **Friction Angle ($\phi$):** The angle of internal friction of the soil is critical.
*   **Friction Circle:** A circle is constructed with its center at the origin (point of intersection of the wall's base and the presumed failure plane) and a radius equal to $r \sin \phi$, where $r$ is the distance from the origin to the point of application of the resultant force on the failure plane. In the context of the Friction Circle method, $r$ is often taken as the height of the backfill for initial construction.

#### Step 3: Assume a Failure Plane and Construct the Resultant Force

*   **Assume a Failure Plane:** Start by assuming a plausible failure plane. This plane typically originates from the toe of the wall and extends upwards into the backfill. The angle of this plane with the vertical is generally between $45^\circ - \frac{\phi}{2}$ and $45^\circ + \frac{\phi}{2}$ (based on Rankine theory for a vertical wall and horizontal backfill).
*   **Construct the Resultant Force Vector:**
    *   Draw a line representing the assumed failure plane.
    *   From a point on the failure plane (e.g., the midpoint of the assumed wedge's base), draw a line representing the resultant force. This resultant force acts at an angle equal to the angle of friction ($\phi$) with the normal to the failure plane.
    *   **Crucially:** The resultant force must be tangent to the friction circle constructed in Step 2.

#### Step 4: Iterative Refinement of the Failure Plane

*   **Check for Tangency:** If the resultant force drawn in Step 3 is **not** tangent to the friction circle, adjust the assumed failure plane.
*   **Iterate:**
    *   **If the resultant passes outside the friction circle:** The assumed failure plane is too steep. Reduce the angle of the failure plane with the vertical.
    *   **If the resultant passes inside the friction circle:** The assumed failure plane is too shallow. Increase the angle of the failure plane with the vertical.
*   **Target Condition:** Continue adjusting the failure plane until the resultant force vector, drawn at an angle $\phi$ to the normal of the failure plane, is **tangent** to the friction circle. This tangent line represents the critical failure plane.

#### Step 5: Determine the Magnitude and Point of Application of the Active Earth Pressure

Once the critical failure plane is identified (i.e., the resultant force is tangent to the friction circle):

*   **Magnitude of Active Earth Pressure ($P_a$):** The magnitude of the active earth pressure is determined by analyzing the equilibrium of the failure wedge. This typically involves drawing force polygons.
    *   Forces acting on the wedge include:
        *   Weight of the wedge ($W$)
        *   Active earth pressure on the wall ($P_a$)
        *   Friction and normal forces on the failure plane ($F_f$, $F_n$)
        *   Cohesion along the failure plane (if applicable)
        *   Friction on the wall face ($\mu_w P_n'$, where $\mu_w$ is the coefficient of friction between soil and wall, and $P_n'$ is the normal component of pressure on the wall).
    *   By constructing a force polygon, the magnitude of $P_a$ can be determined graphically.

*   **Point of Application:** The point of application of the active earth pressure on the retaining wall is typically taken at a distance of $\frac{2}{3}H$ from the base of the wall, where $H$ is the height of the wall. This is a common assumption for simplified analyses, but in a rigorous application of the friction circle method, the resultant force acting on the wall face is derived from the force equilibrium of the wedge.

#### Summary of Graphical Construction (Simplified):

1.  Draw the wall and backfill.
2.  Assume a potential failure plane starting from the toe of the wall.
3.  Construct the friction circle with radius $r \sin \phi$ (where $r$ is a reference distance, often wall height $H$).
4.  Draw the resultant force acting on the assumed failure plane at an angle $\phi$ to the normal of the failure plane.
5.  Adjust the failure plane until the resultant force is tangent to the friction circle.
6.  Once the tangent failure plane is found, consider the equilibrium of the soil wedge.
7.  Construct a force polygon including the weight of the wedge, the earth pressure on the wall, and the forces on the failure plane. The earth pressure component acting on the wall is the active earth pressure.

---

### 4. Key Concepts and Definitions

*   **Failure Wedge:** The mass of soil that moves with the retaining wall as it fails.
*   **Friction Circle:** A circle with radius $r \sin \phi$ used in the graphical construction. It represents the locus of points where the resultant force acting on a failure plane can be tangent.
*   **Resultant Force:** The vector sum of all forces acting on the failure wedge.
*   **Angle of Internal Friction ($\phi$):** The angle of friction between soil particles.
*   **Angle of Wall Friction ($\delta$):** The angle of friction between the soil and the back of the retaining wall. This is implicitly considered in the friction circle method through the tangent condition.
*   **Active Earth Pressure:** The minimum lateral pressure exerted by the soil on a retaining structure when the structure moves away from the soil.

---

### 5. Example (Conceptual - Graphical Construction Requires Drawing Tools)

**Problem:** A retaining wall of height $H = 6$ m has a vertical back face and is backfilled with dry sand with a unit weight $\gamma = 18 \, \text{kN/m}^3$ and angle of internal friction $\phi = 30^\circ$. The coefficient of friction between the wall and soil is $\mu_w = \tan \delta = 0.5 \tan \phi = 0.5 \times \tan 30^\circ$. Determine the active earth pressure using the Friction Circle Method.

**Procedure Outline (Conceptual Steps):**

1.  **Draw the Wall:** Draw a vertical line representing the wall of height 6m.
2.  **Backfill:** Assume a horizontal backfill surface.
3.  **Friction Circle:** For initial construction, consider a reference distance $r = H = 6$ m. Construct a friction circle with radius $6 \sin 30^\circ = 6 \times 0.5 = 3$ m. The center of this circle is at the toe of the wall.
4.  **Assume Failure Plane:** Assume a failure plane originating from the toe. Let's say the first trial plane makes an angle $\alpha$ with the horizontal (e.g., $\alpha = 30^\circ$, corresponding to an angle of $60^\circ$ with the vertical).
5.  **Draw Resultant:** From a point on this assumed plane, draw a line representing the resultant force. This line should be at an angle $\phi = 30^\circ$ to the normal of the assumed failure plane.
6.  **Check Tangency:** See if this resultant line is tangent to the friction circle.
7.  **Iterate:** If not tangent, adjust the assumed failure plane. If the resultant cuts inside the circle, the plane is too shallow; if it cuts outside, the plane is too steep. Continue until the resultant is tangent.
8.  **Force Polygon:** Once the tangent failure plane is found, analyze the equilibrium of the soil wedge defined by the wall, the backfill surface, and the critical failure plane. Draw a force polygon with:
    *   Weight of the wedge ($W$)
    *   Active earth pressure ($P_a$) acting on the wall (at some angle $\delta$ to the normal if wall friction is explicitly considered in the polygon, though the friction circle implicitly handles this).
    *   Forces acting on the failure plane.
    *   From this force polygon, the magnitude of $P_a$ is determined.

**Result (Illustrative - actual value depends on precise graphical solution):**

For a vertical wall and horizontal backfill with $\phi = 30^\circ$, the critical failure plane inclination is approximately $60^\circ$ with the horizontal. The active earth pressure coefficient $K_a$ might be found to be around 0.29 to 0.33 (depending on the precise handling of the resultant and wall friction).

*   If $K_a \approx 0.33$, then $P_a = \frac{1}{2} \gamma H^2 K_a = \frac{1}{2} \times 18 \, \text{kN/m}^3 \times (6 \, \text{m})^2 \times 0.33 \approx 178 \, \text{kN/m}$.
*   Point of application: $\frac{2}{3}H = \frac{2}{3} \times 6 \, \text{m} = 4 \, \text{m}$ from the base.

**Important Note:** The exact calculation of $P_a$ from the force polygon is a critical part of the graphical solution. This example provides a conceptual understanding of the process.

---

### 6. Practice Questions

1.  **Conceptual Question:** Explain the fundamental difference in approach between the Friction Circle Method and Coulomb's theory for determining active earth pressure.
2.  **Procedural Question:** List the key steps involved in the graphical construction of the Friction Circle Method. What is the criterion for identifying the critical failure plane?
3.  **Parameter Identification:** What are the primary soil parameters required for applying the Friction Circle Method?
4.  **Application Scenario:** Briefly describe a situation where the Friction Circle Method might be preferred over simpler theories.
5.  **Visualization (No Drawing Tools):** Imagine a retaining wall with a steeply sloping backfill. How might this affect the initial assumption of the failure plane and the subsequent construction in the Friction Circle Method?

---

### 7. Answers to Practice Questions

1.  **Conceptual Question:**
    *   **Friction Circle Method:** It is a graphical method that *derives* the critical failure plane by ensuring the resultant force on the wedge is tangent to a friction circle. It implicitly accounts for wall friction.
    *   **Coulomb's Theory:** It is an analytical method that *assumes* a planar failure surface and uses force equilibrium equations. It requires the angle of wall friction ($\delta$) to be known or assumed.

2.  **Procedural Question:**
    *   Draw the wall and backfill geometry.
    *   Construct the friction circle (radius $r \sin \phi$).
    *   Assume a potential failure plane.
    *   Draw the resultant force at an angle $\phi$ to the normal of the assumed failure plane.
    *   Iteratively adjust the failure plane until the resultant force is tangent to the friction circle.
    *   Analyze the force equilibrium of the soil wedge defined by the critical failure plane to determine the magnitude of active earth pressure.
    *   **Criterion for critical failure plane:** The resultant force acting on the potential failure plane is tangent to the friction circle.

3.  **Parameter Identification:**
    *   Unit weight of the soil ($\gamma$)
    *   Angle of internal friction ($\phi$)
    *   (For cohesionless soils, cohesion $c=0$)
    *   (If wall friction is explicitly modeled in the force polygon, the angle of wall friction $\delta$ is needed, though the friction circle method inherently accounts for it).

4.  **Application Scenario:** The Friction Circle Method is particularly useful when dealing with:
    *   Retaining walls with non-vertical back faces.
    *   Walls with sloping backfills.
    *   Complex geometries where Coulomb's assumption of a single planar failure surface might be less accurate.
    *   Situations where a graphical determination of the critical failure plane is desired or convenient.

5.  **Visualization:** A steeply sloping backfill will mean the initial assumed failure plane will likely also be steeper (closer to the vertical). The friction circle construction remains the same, but the iteration process to find the tangent resultant might involve more adjustments to the failure plane angle to achieve the tangent condition. The weight of the wedge will also be different, impacting the force polygon.

---

### 8. Important Points to Remember

*   The Friction Circle Method is a **graphical technique**. Accuracy depends heavily on precise drawing.
*   The core principle is finding the **tangency** of the resultant force to the friction circle.
*   It implicitly considers the **effect of wall friction** by ensuring the resultant force direction is consistent with friction mobilized.
*   The method is an improvement over basic Rankine theory as it doesn't require assuming the failure plane inclination.
*   For cohesionless soils ($c=0$), the procedure is more straightforward. Cohesive soils introduce complexities requiring iterative adjustments or modified procedures.
*   The point of application of the resultant active earth pressure is conventionally taken at $\frac{2}{3}H$ from the base, but the method provides the means to derive the precise resultant force.

---
