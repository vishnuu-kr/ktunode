---
title: "inclined plane surface"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ea"
status: "completed"
scrapedAt: "2026-05-20T18:40:26.411Z"
---
# Module 2: Determination of Total Pressure and Centre of Pressure on Surfaces

## Topic: Inclined Plane Surfaces

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of hydrostatic pressure acting on an inclined plane surface.
*   Determine the total hydrostatic pressure acting on an inclined plane surface.
*   Locate the center of pressure on an inclined plane surface.
*   Apply these concepts to solve practical problems involving inclined surfaces submerged in fluids.

---

### 1. Introduction to Inclined Plane Surfaces

When a plane surface is submerged in a fluid and is *inclined* at an angle to the horizontal, the pressure distribution is no longer uniform across the entire surface, nor is it simply a rectangle or triangle as in the case of vertical surfaces. The pressure varies linearly with depth.

**Key Concept:** Hydrostatic pressure increases with depth.

*   **Pressure (P):** Force per unit area. In a fluid at rest, pressure at a point is equal in all directions.
*   **Hydrostatic Pressure:** Pressure exerted by a fluid at rest due to gravity. It is given by $P = \rho gh$, where:
    *   $\rho$ (rho) = density of the fluid (e.g., kg/m³)
    *   $g$ = acceleration due to gravity (approximately 9.81 m/s²)
    *   $h$ = depth of the fluid from the free surface to the point in question (m)

---

### 2. Total Hydrostatic Pressure on an Inclined Plane Surface

The total hydrostatic pressure ($F_T$) on an inclined plane surface is the sum of all the pressure forces acting on the surface. It can be calculated by integrating the pressure over the entire area.

**Formula:**

$F_T = P_{avg} \times A$

Where:
*   $F_T$ = Total hydrostatic pressure force (Newtons, N)
*   $P_{avg}$ = Average pressure on the surface (Pascals, Pa or N/m²)
*   $A$ = Total area of the inclined surface (m²)

**Determining Average Pressure ($P_{avg}$):**

The average pressure on an inclined plane surface occurs at the **centroid** of the surface. Therefore, the average pressure is given by:

$P_{avg} = \rho g h_c$

Where:
*   $h_c$ = vertical depth of the centroid of the inclined surface from the free surface of the fluid (m)

**Substituting $P_{avg}$ into the formula for $F_T$:**

$F_T = \rho g h_c A$

**Important Relationship:**

The product of the area of the inclined surface ($A$) and the vertical depth of its centroid ($h_c$) is equal to the **first moment of area** of the inclined surface about the free surface. This term, $A h_c$, is often referred to as the *moment of area about the free surface* or simply the *moment of area*.

So, the formula can also be written as:

$F_T = \rho g \times (\text{Moment of Area about Free Surface})$

---

### 3. Locating the Centre of Pressure ($y_p$)

The **centre of pressure ($C_p$)** is the point on the submerged surface where the total hydrostatic force is considered to act. It is generally located *below* the centroid of the surface because the pressure increases with depth.

**Key Concept:** The centre of pressure is the point where the resultant force of pressure acts.

**Formula for the distance of the centre of pressure from the free surface along the inclined plane ($y_p$):**

$y_p = y_c + \frac{I_{G}}{\text{A} y_c}$

Where:
*   $y_p$ = distance of the centre of pressure from the free surface along the inclined plane (m)
*   $y_c$ = distance of the centroid from the free surface along the inclined plane (m)
*   $I_{G}$ = Moment of inertia of the inclined surface about its centroidal axis parallel to the free surface (m⁴)
*   $A$ = Area of the inclined surface (m²)

**Relationship between $h_c$ and $y_c$:**

The vertical depth of the centroid ($h_c$) is related to the distance of the centroid along the inclined plane ($y_c$) by the sine of the angle of inclination ($\theta$):

$h_c = y_c \sin \theta$

**Substituting this into the formula for $F_T$:**

$F_T = \rho g (y_c \sin \theta) A$

**Therefore, the formula for $y_p$ can also be written as:**

$y_p = \frac{y_c^2 \sin \theta + I_G \sin \theta}{A y_c \sin \theta} = \frac{y_c^2 + I_G/A}{y_c}$

This is the most commonly used form of the centre of pressure equation.

---

### 4. Moments of Inertia for Common Geometric Shapes (about their Centroid)

To use the centre of pressure formula, you need to know the moment of inertia ($I_G$) of the submerged surface about its centroid. Here are some common ones:

| Shape        | Area (A)      | Centroidal Moment of Inertia ($I_G$) about axis parallel to base |
| :----------- | :------------ | :------------------------------------------------------------- |
| Rectangle    | $b \times d$  | $\frac{b d^3}{12}$                                             |
| Triangle     | $\frac{1}{2} b h_{triangle}$ | $\frac{b h_{triangle}^3}{36}$                                  |
| Circle       | $\pi r^2$     | $\frac{\pi r^4}{4}$                                            |
| Semicircle   | $\frac{1}{2} \pi r^2$ | $0.10975 \times r^4$ (about diameter)                          |

Where:
*   $b$ = width of the rectangle/triangle
*   $d$ = depth of the rectangle
*   $h_{triangle}$ = height of the triangle
*   $r$ = radius of the circle/semicircle

---

### 5. Practical Applications and Examples

**Example 1: Rectangular Gate Inclined in Water**

A rectangular gate, 2m wide and 3m high, is submerged in water and inclined at an angle of $60^\circ$ with the horizontal. The top edge of the gate is 4m below the free surface of the water. Calculate the total hydrostatic force acting on the gate and the position of the centre of pressure.

**Given:**
*   Width of gate, $b = 2$ m
*   Height of gate, $d = 3$ m
*   Angle of inclination, $\theta = 60^\circ$
*   Density of water, $\rho = 1000$ kg/m³
*   $g = 9.81$ m/s²
*   Distance of the top edge from the free surface = 4 m

**Calculations:**

1.  **Area of the gate (A):**
    $A = b \times d = 2 \text{ m} \times 3 \text{ m} = 6 \text{ m}^2$

2.  **Distance of the centroid from the top edge along the inclined plane ($y_c$):**
    The centroid of a rectangle is at its center. So, $y_c$ is half the height of the gate along the inclined plane.
    $y_c = \frac{d}{2} = \frac{3 \text{ m}}{2} = 1.5 \text{ m}$

3.  **Vertical depth of the centroid from the free surface ($h_c$):**
    $h_c = (\text{Distance of top edge}) + y_c \sin \theta$
    $h_c = 4 \text{ m} + 1.5 \text{ m} \times \sin 60^\circ$
    $h_c = 4 \text{ m} + 1.5 \text{ m} \times 0.866$
    $h_c = 4 \text{ m} + 1.299 \text{ m} = 5.299 \text{ m}$

4.  **Total Hydrostatic Force ($F_T$):**
    $F_T = \rho g h_c A$
    $F_T = 1000 \text{ kg/m³} \times 9.81 \text{ m/s²} \times 5.299 \text{ m} \times 6 \text{ m}^2$
    $F_T = 311958.39 \text{ N}$
    $F_T \approx 312$ kN

5.  **Moment of inertia of the rectangle about its centroidal axis parallel to the base ($I_G$):**
    $I_G = \frac{b d^3}{12} = \frac{2 \text{ m} \times (3 \text{ m})^3}{12} = \frac{2 \times 27}{12} = \frac{54}{12} = 4.5 \text{ m}^4$

6.  **Distance of the centre of pressure from the free surface along the inclined plane ($y_p$):**
    $y_p = y_c + \frac{I_G}{A y_c}$
    $y_p = 1.5 \text{ m} + \frac{4.5 \text{ m}^4}{(6 \text{ m}^2) \times (1.5 \text{ m})}$
    $y_p = 1.5 \text{ m} + \frac{4.5}{9} \text{ m}$
    $y_p = 1.5 \text{ m} + 0.5 \text{ m} = 2.0 \text{ m}$

**Answer:**
*   Total Hydrostatic Force ($F_T$) = 311.96 kN
*   The centre of pressure is located 2.0 m from the free surface of the water along the inclined plane of the gate.

---

**Example 2: Circular Opening in a Tank**

A circular opening of diameter 2m is situated in the side of a tank containing oil of specific gravity 0.8. The center of the opening is 5m below the free surface of the oil. The opening is inclined at an angle of $30^\circ$ to the horizontal. Calculate the hydrostatic force on the opening and the depth of the center of pressure from the free surface.

**Given:**
*   Diameter of opening, $D = 2$ m
*   Radius of opening, $r = D/2 = 1$ m
*   Specific gravity of oil, SG = 0.8
*   Density of water, $\rho_{water} = 1000$ kg/m³
*   Density of oil, $\rho_{oil} = SG \times \rho_{water} = 0.8 \times 1000 = 800$ kg/m³
*   Angle of inclination, $\theta = 30^\circ$
*   Vertical depth of the centroid from the free surface, $h_c = 5$ m
*   $g = 9.81$ m/s²

**Calculations:**

1.  **Area of the circular opening (A):**
    $A = \pi r^2 = \pi (1 \text{ m})^2 = \pi \text{ m}^2 \approx 3.1416 \text{ m}^2$

2.  **Distance of the centroid from the free surface along the inclined plane ($y_c$):**
    We are given $h_c$. We can find $y_c$ using the relation $h_c = y_c \sin \theta$.
    $y_c = \frac{h_c}{\sin \theta} = \frac{5 \text{ m}}{\sin 30^\circ} = \frac{5 \text{ m}}{0.5} = 10 \text{ m}$

3.  **Total Hydrostatic Force ($F_T$):**
    $F_T = \rho g h_c A$
    $F_T = 800 \text{ kg/m³} \times 9.81 \text{ m/s²} \times 5 \text{ m} \times \pi \text{ m}^2$
    $F_T = 123260.6 \text{ N} \approx 123.26$ kN

4.  **Moment of inertia of the circle about its centroidal axis ($I_G$):**
    $I_G = \frac{\pi r^4}{4} = \frac{\pi (1 \text{ m})^4}{4} = \frac{\pi}{4} \text{ m}^4 \approx 0.7854 \text{ m}^4$

5.  **Distance of the centre of pressure from the free surface along the inclined plane ($y_p$):**
    $y_p = y_c + \frac{I_G}{A y_c}$
    $y_p = 10 \text{ m} + \frac{\frac{\pi}{4} \text{ m}^4}{(\pi \text{ m}^2) \times (10 \text{ m})}$
    $y_p = 10 \text{ m} + \frac{1}{4 \times 10} \text{ m}$
    $y_p = 10 \text{ m} + \frac{1}{40} \text{ m}$
    $y_p = 10 \text{ m} + 0.025 \text{ m} = 10.025 \text{ m}$

**Answer:**
*   Total Hydrostatic Force ($F_T$) = 123.26 kN
*   The centre of pressure is located 10.025 m from the free surface of the oil along the inclined plane of the opening.

---

### 6. Important Points to Remember

*   **Pressure increases linearly with depth.**
*   The total hydrostatic force on an inclined surface is equal to the product of the area of the surface and the pressure at its centroid.
*   The centroid of the surface is always located at a *lesser* depth than the centre of pressure.
*   The centre of pressure is always located *below* the centroid along the inclined plane.
*   Ensure you use the correct units for all calculations.
*   For inclined surfaces, distinguish between the vertical depth ($h_c$) and the distance along the inclined plane ($y_c$). The relation $h_c = y_c \sin \theta$ is crucial.
*   The moment of inertia ($I_G$) is always calculated about the centroid of the surface and about an axis parallel to the free surface.

---

### 7. Practice Questions

**Question 1:**
A triangular lamina of base 2m and height 3m is immersed in water, with its base parallel to the water surface. The vertex of the triangle is 4m below the free surface. The lamina is inclined at $45^\circ$ to the horizontal. Calculate the total hydrostatic force on the lamina and the position of the centre of pressure.

**Answer:**
*   Area ($A$) = $0.5 \times 2 \times 3 = 3 \text{ m}^2$
*   Distance of centroid from vertex along inclined plane ($y_c$) = $2/3 \times \text{height of triangle} = 2/3 \times 3 = 2 \text{ m}$
*   Vertical depth of centroid ($h_c$) = $4 + 2 \sin 45^\circ = 4 + 2 \times 0.707 = 4 + 1.414 = 5.414 \text{ m}$
*   Total Force ($F_T$) = $1000 \times 9.81 \times 5.414 \times 3 \approx 159.32 \text{ kN}$
*   Moment of inertia of triangle about centroidal axis parallel to base ($I_G$) = $\frac{bh^3}{36} = \frac{2 \times 3^3}{36} = \frac{2 \times 27}{36} = \frac{54}{36} = 1.5 \text{ m}^4$
*   Distance of centre of pressure from vertex along inclined plane ($y_p$) = $y_c + \frac{I_G}{A y_c} = 2 + \frac{1.5}{3 \times 2} = 2 + \frac{1.5}{6} = 2 + 0.25 = 2.25 \text{ m}$

**Question 2:**
A circular plate of diameter 2.5m is placed in an oil tank such that its plane is inclined at $60^\circ$ to the vertical. The top edge of the plate is 3m below the free surface of the oil. The specific gravity of oil is 0.9. Calculate:
a) The total hydrostatic force on the plate.
b) The distance of the center of pressure from the free surface along the inclined plate.

**Answer:**
*   Radius ($r$) = $2.5 / 2 = 1.25$ m
*   Area ($A$) = $\pi r^2 = \pi (1.25)^2 = 1.5625\pi \approx 4.909 \text{ m}^2$
*   Distance of centroid from top edge along inclined plane ($y_c$) = Radius = $1.25$ m
*   Vertical depth of centroid ($h_c$) = $3 + 1.25 \cos 30^\circ = 3 + 1.25 \times 0.866 = 3 + 1.0825 = 4.0825 \text{ m}$ (Note: If inclined at 60 degrees to vertical, then it is 30 degrees to horizontal, so $\sin 30^\circ$ is used for vertical depth calculation of centroid along the plate. However, the question states $60^\circ$ to the vertical, which means $30^\circ$ to the horizontal. So, the depth of the centroid along the plate from the top edge is $y_c = 1.25 \text{m}$, and the vertical depth $h_c = 3 + y_c \sin 30^\circ = 3 + 1.25 \times 0.5 = 3.625 \text{ m}$)
*   Let's re-evaluate $y_c$ and $h_c$ based on the common interpretation. If the plate is inclined at $60^\circ$ to the *vertical*, it means the angle with the *horizontal* is $30^\circ$. The top edge is 3m below the free surface. The centroid is at a distance $y_c = 1.25$m from the top edge *along the plate*. The vertical depth of the centroid $h_c = 3 + y_c \sin 30^\circ = 3 + 1.25 \times 0.5 = 3.625$ m.
*   Density of oil ($\rho$) = $0.9 \times 1000 = 900$ kg/m³
*   a) Total Hydrostatic Force ($F_T$) = $\rho g h_c A = 900 \times 9.81 \times 3.625 \times 4.909 \approx 155445 \text{ N} \approx 155.45 \text{ kN}$
*   b) Moment of inertia of circle ($I_G$) = $\frac{\pi r^4}{4} = \frac{\pi (1.25)^4}{4} \approx 1.917 \text{ m}^4$
*   Distance of centre of pressure from the top edge along inclined plane ($y_p$) = $y_c + \frac{I_G}{A y_c} = 1.25 + \frac{1.917}{4.909 \times 1.25} = 1.25 + \frac{1.917}{6.136} = 1.25 + 0.312 = 1.562 \text{ m}$
*   The distance of the center of pressure from the free surface along the inclined plate is the distance from the top edge plus the top edge depth. Let's assume the question asks for the distance along the inclined plane from the *free surface*. This means we need to add the distance of the top edge from the free surface along the inclined plane.
    Distance of top edge from free surface along inclined plane = $3 / \sin 30^\circ = 3 / 0.5 = 6$ m.
    So, $y_p$ from free surface along inclined plane = $6 + 1.562 = 7.562$ m.

**(Self-correction for Question 2 interpretation):** The phrasing "distance of the center of pressure from the free surface along the inclined plate" typically refers to the distance from the point where the inclined plane intersects the free surface, measured along the inclined plane itself.

Revised calculation for Question 2b:
*   Distance of the top edge from the free surface along the inclined plane: $y_{top\_edge} = \frac{3}{\sin 30^\circ} = \frac{3}{0.5} = 6$ m.
*   Distance of the centroid from the free surface along the inclined plane: $y_c = y_{top\_edge} + 1.25 = 6 + 1.25 = 7.25$ m.
*   $h_c = y_c \sin 30^\circ = 7.25 \times 0.5 = 3.625$ m. This matches our previous $h_c$.
*   Distance of the centre of pressure from the free surface along the inclined plane ($y_p$): $y_p = y_c + \frac{I_G}{A y_c} = 7.25 + \frac{1.917}{4.909 \times 7.25} = 7.25 + \frac{1.917}{35.60} = 7.25 + 0.0538 \approx 7.304$ m.

**Corrected Answer for Question 2b:** The distance of the center of pressure from the free surface along the inclined plate is approximately 7.304 m.
