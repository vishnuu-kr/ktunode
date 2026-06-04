---
title: "centre of buoyancy"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ed"
status: "completed"
scrapedAt: "2026-05-20T18:40:28.492Z"
---
# Fluid Mechanics: Module 2 - Determination of Total Pressure and Centre of Pressure on Surfaces

## Topic: Centre of Buoyancy (CB)

### Learning Outcomes:

*   **Understand the concept of buoyancy:** Define buoyancy and the principle governing it.
*   **Locate the centre of buoyancy:** Understand how to determine the position of the centre of buoyancy for submerged surfaces.
*   **Distinguish between centre of gravity and centre of buoyancy:** Highlight the fundamental differences and their significance.
*   **Apply principles to solve problems:** Solve numerical problems related to the centre of buoyancy for submerged surfaces.

---

### 1. Understanding the Concept of Buoyancy

#### 1.1. Introduction to Buoyancy

When an object is immersed in a fluid (either partially or fully), it experiences an upward force exerted by the fluid. This upward force is known as the **buoyant force** or **buoyancy**.

#### 1.2. Archimedes' Principle

Archimedes' Principle states that:

> **"Any body wholly or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body."**

*   **Buoyant Force ($F_B$)**: The upward force exerted by the fluid.
*   **Weight of Displaced Fluid ($W_{fluid}$)**: The weight of the fluid that the submerged object pushes out of the way.

Mathematically, this can be expressed as:

$F_B = \rho_{fluid} \times g \times V_{submerged}$

Where:
*   $\rho_{fluid}$: Density of the fluid (e.g., kg/m³).
*   $g$: Acceleration due to gravity (approximately 9.81 m/s²).
*   $V_{submerged}$: Volume of the fluid displaced by the submerged part of the object (which is equal to the submerged volume of the object itself).

#### 1.3. Conditions of Floating, Sinking, and Neutral Equilibrium

The behavior of an object in a fluid depends on the comparison between its weight and the buoyant force:

*   **Floating**: If the buoyant force is equal to the weight of the object ($F_B = W_{object}$), the object will float. This typically occurs when the object is partially submerged, and the weight of the displaced fluid equals the object's total weight.
*   **Sinking**: If the buoyant force is less than the weight of the object ($F_B < W_{object}$), the object will sink. This happens when the object's average density is greater than the fluid's density.
*   **Neutral Equilibrium**: If the buoyant force is equal to the weight of the object and the object remains at any submerged level without sinking or rising, it is in neutral equilibrium. This occurs when the object's average density is equal to the fluid's density.

---

### 2. Locating the Centre of Buoyancy (CB)

#### 2.1. Definition of Centre of Buoyancy

The **centre of buoyancy (CB)** is the **centroid of the displaced volume of the fluid**. It is the point where the entire buoyant force can be considered to act.

#### 2.2. Relationship with Submerged Area

The centre of buoyancy is the geometric centre of the submerged portion of the body. For a submerged plane surface, the centre of buoyancy is located at the centroid of that submerged plane area.

#### 2.3. Importance of Centre of Buoyancy

The centre of buoyancy is crucial for stability analysis of floating bodies. Its position relative to the centre of gravity (CG) determines whether a floating body will return to its original position after being slightly tilted.

---

### 3. Distinguishing Between Centre of Gravity (CG) and Centre of Buoyancy (CB)

| Feature                 | Centre of Gravity (CG)                                      | Centre of Buoyancy (CB)                                         |
| :---------------------- | :---------------------------------------------------------- | :-------------------------------------------------------------- |
| **Definition**          | The point where the entire weight of the body is considered to act. | The point where the entire buoyant force is considered to act.  |
| **Basis of Location**   | Centroid of the **mass** of the object.                     | Centroid of the **volume of fluid displaced** by the object.    |
| **Dependence on Fluid** | Independent of the fluid in which the object is placed.   | Depends on the shape and extent of the submerged part of the object (i.e., the displaced volume). |
| **Movement**            | Remains fixed relative to the object's body.                | Can shift its position relative to the object if the object is tilted or submerged to a different extent. |
| **Significance**        | Determines the weight force acting on the body.             | Determines the buoyant force acting on the body.                |

**Important Note:** For a *fully submerged* object with a *uniform density*, the CG and CB will coincide. However, for partially submerged objects or objects with non-uniform density, they are generally at different locations.

---

### 4. Application to Vertical Plane Surfaces (Submerged)

When a vertical plane surface is submerged in a fluid, the buoyant force acts at the centroid of the submerged area.

**Key Concept:** The centre of buoyancy for a submerged vertical plane surface is located at the **centroid of the submerged portion of that plane surface**.

#### 4.1. Determining the Centroid of Common Shapes

To find the CB on a vertical plane surface, we need to find the centroid of the submerged geometric shape.

*   **Rectangle (width $b$, height $h$, submerged to depth $H$)**:
    *   Area ($A$) = $b \times h$
    *   Centroid is at the geometric centre: $h/2$ from the bottom edge, or $H - h/2$ from the free surface if the top edge is at depth $H$.
    *   Depth of CB ($y_{CB}$) from the free surface = Depth of centroid.

*   **Triangle (base $b$, height $h$, submerged with base at the free surface)**:
    *   Area ($A$) = $\frac{1}{2} \times b \times h$
    *   Centroid is at $h/3$ from the base.
    *   Depth of CB ($y_{CB}$) from the free surface = $h/3$.

*   **Triangle (base $b$, height $h$, submerged with vertex at the free surface)**:
    *   Area ($A$) = $\frac{1}{2} \times b \times h$
    *   Centroid is at $2h/3$ from the vertex.
    *   Depth of CB ($y_{CB}$) from the free surface = $2h/3$.

*   **Circle (radius $r$, submerged such that its centre is at depth $H$)**:
    *   Area ($A$) = $\pi r^2$
    *   Centroid is at the geometric centre.
    *   Depth of CB ($y_{CB}$) from the free surface = $H$.

**General Formula for Depth of CB ($y_{CB}$):**

For a submerged plane area, the depth of the centre of buoyancy from the free surface is the depth of the centroid of the submerged area.

$y_{CB} = \bar{y}$ (where $\bar{y}$ is the vertical distance from the free surface to the centroid of the submerged area).

#### 4.2. Calculation of Buoyant Force

The buoyant force ($F_B$) acting on a submerged vertical plane surface is the weight of the fluid displaced. If the surface is fully submerged, the displaced volume is the area of the surface multiplied by its thickness (which is usually negligible for a plane, so we consider the volume as area * unit depth if it's a thin plate, or more generally, it's the volume of the fluid body corresponding to the submerged surface).

For a submerged plane surface:

$F_B = \rho_{fluid} \times g \times A_{submerged} \times \text{thickness (if solid object)}$
or, if we're considering the force on a surface like a gate:
$F_B = \rho_{fluid} \times g \times A_{submerged}$ (where $A_{submerged}$ is the area of the surface itself, and the fluid depth is accounted for in pressure calculation).

**Clarification:** The topic "Centre of Buoyancy on Surfaces" is slightly misleading. Buoyancy is about the force exerted by a fluid on a *submerged body*. When we talk about "surfaces" in this context, we are usually referring to submerged plane surfaces like dam gates, tank walls, etc. The *buoyant force* acts on the *volume of fluid displaced by the submerged portion of the body*. The *centre of buoyancy* is the centroid of this *displaced volume*.

For a vertically submerged plane surface (like a thin gate), the buoyant force is often conceptualized differently in the context of total pressure. The hydrostatic force on the submerged surface is primarily what's calculated. However, if we are considering an object *with* a surface that is submerged, the buoyant force acts at the CB of the *displaced volume*.

Let's re-focus on the common interpretation within this module: The **buoyant force on a plane surface** is often treated as the **net upward hydrostatic force**. When the entire surface is submerged, this force acts at the centroid of the submerged area.

**Therefore, for a submerged vertical plane surface:**

*   The **Magnitude of the Buoyant Force ($F_B$)** is often considered as the total hydrostatic force if the fluid is on one side only.
    $F_B = P_{avg} \times A_{submerged}$
    $F_B = (\rho_{fluid} \times g \times y_{CB}) \times A_{submerged}$
    Where $y_{CB}$ is the depth of the centroid of the submerged area from the free surface.

*   The **Centre of Buoyancy (CB)** is the centroid of the submerged area of the plane surface.

---

### 5. Numerical Problems

**Problem 1: Rectangular Gate**

A rectangular gate, 2 m wide and 3 m high, is placed in a vertical plane. The top edge of the gate is at a depth of 4 m below the free surface of water. Calculate the magnitude of the buoyant force and the position of the centre of buoyancy.

**Given:**
*   Width of gate ($b$) = 2 m
*   Height of gate ($h$) = 3 m
*   Depth of top edge from free surface ($H$) = 4 m
*   Fluid: Water ($\rho_{fluid} = 1000$ kg/m³)
*   $g = 9.81$ m/s²

**Solution:**

1.  **Area of the submerged gate ($A$)**:
    $A = b \times h = 2 \text{ m} \times 3 \text{ m} = 6 \text{ m}^2$

2.  **Position of the centroid of the submerged gate**:
    The centroid of a rectangle is at its geometric centre.
    The distance of the centroid from the top edge of the gate is $h/2$.
    Distance of centroid from top edge = $3 \text{ m} / 2 = 1.5 \text{ m}$.

3.  **Depth of the centre of buoyancy ($y_{CB}$) from the free surface**:
    $y_{CB} = \text{Depth of top edge} + \text{Distance of centroid from top edge}$
    $y_{CB} = H + h/2$
    $y_{CB} = 4 \text{ m} + 1.5 \text{ m} = 5.5 \text{ m}$

4.  **Magnitude of the Buoyant Force ($F_B$)**:
    $F_B = \rho_{fluid} \times g \times y_{CB} \times A$
    $F_B = 1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 5.5 \text{ m} \times 6 \text{ m}^2$
    $F_B = 323730 \text{ N}$ or $323.73$ kN

**Answer:**
*   The magnitude of the buoyant force is $323.73$ kN.
*   The centre of buoyancy is located at a depth of 5.5 m from the free surface.

---

**Problem 2: Triangular Gate**

A vertical triangular gate is submerged in oil. The base of the triangle is 2 m long and the height is 3 m. The base of the triangle coincides with the free surface of the oil. Calculate the buoyant force and the location of the centre of buoyancy.

**Given:**
*   Base of triangle ($b$) = 2 m
*   Height of triangle ($h$) = 3 m
*   Fluid: Oil ($\rho_{oil} = 900$ kg/m³)
*   $g = 9.81$ m/s²
*   Base of triangle is at the free surface.

**Solution:**

1.  **Area of the submerged triangle ($A$)**:
    $A = \frac{1}{2} \times b \times h = \frac{1}{2} \times 2 \text{ m} \times 3 \text{ m} = 3 \text{ m}^2$

2.  **Position of the centroid of the submerged triangle**:
    For a triangle with its base at the free surface, the centroid is located at a distance of $h/3$ from the base.
    Distance of centroid from the base = $3 \text{ m} / 3 = 1 \text{ m}$.

3.  **Depth of the centre of buoyancy ($y_{CB}$) from the free surface**:
    Since the base is at the free surface, the depth of the centroid from the free surface is simply the distance of the centroid from the base.
    $y_{CB} = h/3 = 1 \text{ m}$.

4.  **Magnitude of the Buoyant Force ($F_B$)**:
    $F_B = \rho_{fluid} \times g \times y_{CB} \times A$
    $F_B = 900 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 1 \text{ m} \times 3 \text{ m}^2$
    $F_B = 26487 \text{ N}$ or $26.49$ kN

**Answer:**
*   The magnitude of the buoyant force is $26.49$ kN.
*   The centre of buoyancy is located at a depth of 1 m from the free surface.

---

**Problem 3: Circular Opening**

A circular opening of 1.5 m diameter is situated in a vertical wall of a tank. The centre of the opening is 3 m below the free surface of water. Determine the buoyant force and the position of the centre of buoyancy.

**Given:**
*   Diameter of circular opening ($d$) = 1.5 m
*   Radius of circular opening ($r$) = $d/2 = 0.75$ m
*   Depth of the centre of the opening from the free surface ($H$) = 3 m
*   Fluid: Water ($\rho_{fluid} = 1000$ kg/m³)
*   $g = 9.81$ m/s²

**Solution:**

1.  **Area of the submerged circular opening ($A$)**:
    $A = \pi r^2 = \pi \times (0.75 \text{ m})^2 = \pi \times 0.5625 \text{ m}^2 \approx 1.767 \text{ m}^2$

2.  **Position of the centroid of the submerged circular opening**:
    The centroid of a circle is at its geometric centre.

3.  **Depth of the centre of buoyancy ($y_{CB}$) from the free surface**:
    Since the circular opening is fully submerged and we are calculating the force/buoyancy on this surface, the centre of buoyancy for this plane area is its centroid. The problem states the centre of the opening is 3 m below the free surface.
    $y_{CB} = H = 3 \text{ m}$.

4.  **Magnitude of the Buoyant Force ($F_B$)**:
    $F_B = \rho_{fluid} \times g \times y_{CB} \times A$
    $F_B = 1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 3 \text{ m} \times 1.767 \text{ m}^2$
    $F_B = 52036.11 \text{ N}$ or $52.04$ kN

**Answer:**
*   The magnitude of the buoyant force is $52.04$ kN.
*   The centre of buoyancy is located at a depth of 3 m from the free surface.

---

### 6. Important Points to Remember

*   **Buoyancy** is the upward force exerted by a fluid on a submerged object.
*   **Archimedes' Principle** quantifies the buoyant force: equal to the weight of the displaced fluid.
*   The **Centre of Buoyancy (CB)** is the centroid of the *displaced volume* of fluid.
*   For a **submerged vertical plane surface**, the CB coincides with the **centroid of the submerged area** of that plane.
*   The buoyant force acts at the CB.
*   The depth of the CB from the free surface is the vertical distance to the centroid of the submerged area.
*   The buoyant force on a plane surface is calculated as $F_B = \rho_{fluid} \times g \times A \times y_{CB}$ (where $y_{CB}$ is the depth of the centroid). This formula is derived from $F_B = P_{avg} \times A$ and $P_{avg} = \rho g y_{CB}$.
*   Distinguish clearly between the Centre of Gravity (CG) of the object and the Centre of Buoyancy (CB).

---

### Practice Questions

**Question 1:**
A square gate of side 2 m is placed vertically in a tank of oil. The top edge of the gate is 5 m below the free surface. Calculate the buoyant force acting on the gate and the depth of the centre of buoyancy from the free surface.
(Density of oil = 850 kg/m³)

**Question 2:**
A vertical isosceles triangular plate with base 3 m and height 4 m is submerged in water such that its vertex is downwards and the base is parallel to the water surface and 2 m above the vertex. Determine the position of the centre of buoyancy relative to the vertex.
(Density of water = 1000 kg/m³)

**Question 3:**
A circular plate of diameter 2 m is placed in a vertical plane, submerged in water. The bottom edge of the plate is at the free surface. Calculate the buoyant force and the depth of the centre of buoyancy from the free surface.

---

### Answers to Practice Questions

**Answer 1:**
*   Area ($A$) = $2 \text{ m} \times 2 \text{ m} = 4 \text{ m}^2$.
*   Depth of centroid from top edge = $2 \text{ m} / 2 = 1 \text{ m}$.
*   Depth of CB ($y_{CB}$) = $5 \text{ m} + 1 \text{ m} = 6 \text{ m}$.
*   Buoyant Force ($F_B$) = $850 \times 9.81 \times 6 \times 4 = 198114$ N or $198.11$ kN.
*   Depth of CB = 6 m.

**Answer 2:**
*   Area ($A$) = $\frac{1}{2} \times 3 \text{ m} \times 4 \text{ m} = 6 \text{ m}^2$.
*   The vertex is 2 m below the free surface.
*   The centroid of a triangle is $2h/3$ from the vertex.
*   Distance of centroid from vertex = $(2/3) \times 4 \text{ m} = 8/3 \text{ m} \approx 2.67 \text{ m}$.
*   Depth of CB from free surface ($y_{CB}$) = Depth of vertex + Distance of centroid from vertex = $2 \text{ m} + 2.67 \text{ m} = 4.67 \text{ m}$.
*   Buoyant Force ($F_B$) = $1000 \times 9.81 \times 4.67 \times 6 = 273018.6$ N or $273.02$ kN.
*   Position of CB relative to the vertex is $2.67$ m downwards from the vertex. (The question asks for position relative to vertex).

**Answer 3:**
*   Radius ($r$) = $2 \text{ m} / 2 = 1 \text{ m}$.
*   Area ($A$) = $\pi r^2 = \pi \times (1 \text{ m})^2 = \pi \text{ m}^2 \approx 3.142 \text{ m}^2$.
*   Bottom edge is at the free surface.
*   Depth of CB ($y_{CB}$) = Depth of centroid from the free surface. For a circle with bottom edge at free surface, the centroid is at a distance equal to its radius from the bottom edge.
*   $y_{CB} = \text{radius} = 1 \text{ m}$.
*   Buoyant Force ($F_B$) = $1000 \times 9.81 \times 1 \times \pi = 30832.8$ N or $30.83$ kN.
*   Depth of CB = 1 m.
