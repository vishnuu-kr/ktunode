---
title: "Hydrostatic force and pressure on plane and inclined surfaces, Centre of pressure."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d18"
status: "completed"
scrapedAt: "2026-05-20T17:49:21.449Z"
---
# Fluid Mechanics and Machinery - Module 1: Hydrostatic Force and Pressure on Plane and Inclined Surfaces, Center of Pressure

This module focuses on understanding how fluids exert pressure and the forces generated on submerged surfaces. This is a foundational concept in fluid mechanics, essential for analyzing structures like dams, gates, and tanks.

**Course Outcomes Addressed:**

*   **CO1:** Identify the fundamental fluid properties, their relationships and apply them to estimate the fluid pressure and hydrostatic forces on bodies (Knowledge Level: K3).

---

## 1. Introduction to Hydrostatics

Hydrostatics is the study of fluids at rest. In a fluid at rest, the only forces acting are surface forces (pressure) and body forces (gravity). Understanding pressure distribution is crucial for calculating forces.

**Key Concepts:**

*   **Pressure (P):** The force exerted by a fluid per unit area.
    *   **Units:** Pascal (Pa), kPa, MPa, psi (pounds per square inch), bar, atm.
    *   **Relationship:** $P = F/A$
*   **Hydrostatic Pressure:** The pressure exerted by a fluid due to its weight. It increases with depth.
*   **Pascal's Law:** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.
    *   *Refer to Cengel & Cimbala, Chapter 3 for detailed explanation.*
    *   *Refer to Som & Sengupta, Chapter 2 for principles of hydrostatics.*

---

## 2. Pressure Variation in a Fluid at Rest

In a static fluid, pressure varies only with depth.

**Key Concepts:**

*   **Density ($\rho$):** Mass per unit volume ($kg/m^3$).
*   **Specific Weight ($\gamma$):** Weight per unit volume ($\gamma = \rho g$, where $g$ is acceleration due to gravity).
    *   **Units:** N/m³
*   **Pressure Head (h):** The height of a column of fluid that would produce a given pressure. $P = \gamma h$ or $P = \rho g h$.
*   **Absolute Pressure:** The actual pressure at a point.
*   **Gauge Pressure:** The pressure relative to atmospheric pressure.
    *   Gauge Pressure = Absolute Pressure - Atmospheric Pressure
*   **Vacuum Pressure:** Gauge pressure that is below atmospheric pressure.
*   **Manometers:** Devices used to measure pressure differences, often using columns of liquids.
    *   *Refer to Cengel & Cimbala, Chapter 3 for manometer applications.*

**Mathematical Derivation (Pressure Variation):**

Consider a small rectangular fluid element of height $dh$ and area $A$. The forces acting on the element in the vertical direction are:

*   Pressure at the bottom: $P_{bottom} \times A$
*   Pressure at the top: $P_{top} \times A$
*   Weight of the fluid element: $(\rho g A dh)$

For equilibrium:
$P_{bottom} A - P_{top} A - \rho g A dh = 0$
$(P_{bottom} - P_{top}) A = \rho g A dh$
$P_{bottom} - P_{top} = \rho g dh$
$dP = \rho g dh$

Integrating from depth $h_1$ to $h_2$:
$\int_{P_1}^{P_2} dP = \int_{h_1}^{h_2} \rho g dh$

For a homogeneous fluid where $\rho$ and $g$ are constant:
$P_2 - P_1 = \rho g (h_2 - h_1)$

If we consider $h$ as depth measured downwards from the free surface, and $P_1$ is the pressure at the free surface (usually atmospheric $P_{atm}$), then $P$ at depth $h$ is:
$P = P_{atm} + \rho g h$

In most engineering problems involving submerged surfaces, we are concerned with the **gauge pressure** ($P_g = P - P_{atm}$). Therefore, the gauge pressure at depth $h$ is:
$P_g = \rho g h$

**Example:**
What is the gauge pressure at a depth of 10 meters in water? (Density of water $\rho = 1000 kg/m^3$, $g = 9.81 m/s^2$)
$P_g = \rho g h = (1000 kg/m^3) \times (9.81 m/s^2) \times (10 m) = 98100 Pa = 98.1 kPa$

---

## 3. Hydrostatic Force on Plane Surfaces

The force exerted by a fluid on a submerged plane surface is due to the pressure distribution over that surface.

**Key Concepts:**

*   **Magnitude of Force (F):** The total force is the integral of pressure over the area.
*   **Direction of Force:** Perpendicular to the surface.

**3.1 Horizontal Plane Surfaces:**

For a horizontal plane surface submerged in a fluid, the depth is constant across the entire surface.

*   **Pressure:** $P = \rho g h$ (constant)
*   **Hydrostatic Force (F):** $F = P \times A$
    $F = (\rho g h) \times A$
    Where:
    *   $\rho$ = density of the fluid
    *   $g$ = acceleration due to gravity
    *   $h$ = depth of the horizontal surface from the free surface
    *   $A$ = area of the horizontal surface

*   **Refer to Bansal R.K., Chapter 3 for calculations on horizontal surfaces.*

**Example:**
A circular plate of diameter 2m is placed horizontally at a depth of 3m in oil of specific gravity 0.8. Calculate the hydrostatic force on the plate.
*   Density of oil: $\rho = 0.8 \times 1000 kg/m^3 = 800 kg/m^3$
*   Depth: $h = 3 m$
*   Area of the circular plate: $A = \pi (D/2)^2 = \pi (2m/2)^2 = \pi m^2$
*   Force: $F = \rho g h A = (800 kg/m^3) \times (9.81 m/s^2) \times (3 m) \times (\pi m^2) \approx 73890 N$

**3.2 Vertical Plane Surfaces:**

For a vertical plane surface, the depth varies across the surface. The pressure is not uniform.

*   **Force Calculation:** We need to integrate the pressure over the submerged area.
    Consider a small horizontal strip of area $dA$ at a depth $h$ from the free surface.
    *   Pressure on the strip: $P = \rho g h$
    *   Force on the strip: $dF = P \times dA = (\rho g h) dA$
    *   Total Force: $F = \int_{A} dF = \int_{A} \rho g h dA$

**Key Concept: Center of Pressure ($C_p$)**

The point where the resultant hydrostatic force acts on a submerged surface is called the center of pressure.

*   **Location of $C_p$:** The resultant force acts at the centroid of the pressure prism.
*   **Relationship to Centroid ($C$):** The center of pressure is always below the centroid of the submerged area for a vertical or inclined plane surface.

**Formula for Hydrostatic Force on a Vertical Plane Surface:**

$F = \rho g h_c A$

Where:
*   $\rho$ = density of the fluid
*   $g$ = acceleration due to gravity
*   $h_c$ = depth of the **centroid** of the submerged area from the free surface
*   $A$ = total submerged area of the plane surface

*   **Refer to White F.M., Chapter 4 for detailed derivation and examples on plane surfaces.*

**Example:**
A rectangular gate 2m wide and 3m high is vertically immersed in water. The top edge of the gate is flush with the water surface. Calculate the hydrostatic force on the gate and the location of the center of pressure.
*   Density of water: $\rho = 1000 kg/m^3$
*   Width of gate: $b = 2 m$
*   Height of gate: $H = 3 m$
*   Area of gate: $A = b \times H = 2m \times 3m = 6 m^2$
*   Depth of centroid ($h_c$): For a rectangle with the top edge at the surface, the centroid is at $H/2$. So, $h_c = 3m / 2 = 1.5 m$.

*   **Hydrostatic Force (F):**
    $F = \rho g h_c A = (1000 kg/m^3) \times (9.81 m/s^2) \times (1.5 m) \times (6 m^2) = 88290 N$

---

## 4. Center of Pressure ($C_p$) for Vertical Plane Surfaces

The center of pressure is the point where the resultant hydrostatic force acts.

**Key Concept:**

*   **Moment of Area:** The calculation of the center of pressure involves taking moments of the elemental areas with respect to the free surface.

**Formula for the distance of $C_p$ from the free surface ($h_{cp}$):**

$h_{cp} = h_c + \frac{I_{xc}}{A h_c}$

Where:
*   $h_{cp}$ = vertical distance of the center of pressure from the free surface
*   $h_c$ = vertical distance of the centroid from the free surface
*   $I_{xc}$ = **Moment of inertia** of the submerged area about the horizontal axis passing through its centroid (parallel to the free surface)
*   $A$ = total submerged area

**Common Moments of Inertia ($I_{xc}$):**

*   **Rectangle (base b, height H) about centroidal axis parallel to base:** $I_{xc} = \frac{b H^3}{12}$
*   **Circle (radius r) about centroidal axis:** $I_{xc} = \frac{\pi r^4}{4}$
*   **Triangle (base b, height h) about centroidal axis parallel to base:** $I_{xc} = \frac{b h^3}{36}$

**Continuing the Example (Vertical Rectangular Gate):**

*   $h_c = 1.5 m$
*   $A = 6 m^2$
*   $I_{xc}$ for the rectangle about its centroid: $I_{xc} = \frac{b H^3}{12} = \frac{(2m)(3m)^3}{12} = \frac{2 \times 27}{12} = \frac{54}{12} = 4.5 m^4$

*   **Location of Center of Pressure ($h_{cp}$):**
    $h_{cp} = h_c + \frac{I_{xc}}{A h_c} = 1.5 m + \frac{4.5 m^4}{(6 m^2)(1.5 m)} = 1.5 m + \frac{4.5}{9} m = 1.5 m + 0.5 m = 2.0 m$

The center of pressure is 2.0 meters from the free surface.

**Important Point to Remember:** For a vertical plane surface, the center of pressure is always *below* the centroid. The deeper the surface, the closer $C_p$ is to the centroid.

---

## 5. Hydrostatic Force on Inclined Plane Surfaces

For inclined plane surfaces, we need to consider the geometry of the inclination.

**Key Concepts:**

*   **Inclined Angle ($\theta$):** The angle the plane surface makes with the horizontal.
*   **Perpendicular Distance ($h$):** The vertical distance from the free surface to an elemental area.
*   **Normal Distance ($s$):** The distance along the plane from the free surface to an elemental area.
*   **Relationship:** $h = s \sin \theta$

**Formula for Hydrostatic Force (F):**

The magnitude of the hydrostatic force on an inclined plane surface is given by:

$F = \rho g h_{c, \text{inclined}} A$

Where:
*   $\rho$ = density of the fluid
*   $g$ = acceleration due to gravity
*   $h_{c, \text{inclined}}$ = vertical distance of the **centroid** of the submerged area from the free surface
*   $A$ = total submerged area

**Formula for the location of the Center of Pressure ($C_p$) on an Inclined Plane Surface:**

The center of pressure can be located by finding its distance along the inclined plane from the free surface, denoted as $s_{cp}$.

$s_{cp} = s_c + \frac{I_{xc}}{A s_c}$

Where:
*   $s_{cp}$ = distance of the center of pressure along the inclined plane from the free surface
*   $s_c$ = distance of the centroid along the inclined plane from the free surface
*   $I_{xc}$ = Moment of inertia of the submerged area about the centroidal axis parallel to the free surface (this is the same $I_{xc}$ as for the vertical case).

**Relationship between $h_c$ and $s_c$:**

$h_{c, \text{inclined}} = s_c \sin \theta$

Therefore, we can also write the force as:
$F = \rho g (s_c \sin \theta) A$

*   **Refer to Som & Sengupta, Chapter 2 for detailed examples of inclined surfaces.*
*   **Refer to Cengel & Cimbala, Chapter 3 for calculations involving submerged surfaces.*

**Example:**
A triangular plate with base 2m and height 3m is immersed in water such that its base is horizontal and its vertex is 1m below the water surface. The plane of the triangle makes an angle of 60 degrees with the horizontal. Calculate the hydrostatic force and the location of the center of pressure.

*   Fluid: Water ($\rho = 1000 kg/m^3$)
*   Base of triangle: $b = 2 m$
*   Height of triangle: $H = 3 m$
*   Area of triangle: $A = \frac{1}{2} b H = \frac{1}{2} (2m)(3m) = 3 m^2$
*   Inclination angle: $\theta = 60^\circ$

*   **Location of the Centroid:** For a triangle, the centroid is located at $2/3$ of the height from the base, or $1/3$ of the height from the vertex.
    Since the vertex is given relative to the surface, let's find the centroid's distance from the vertex.
    Distance of centroid from vertex along the height: $\frac{2}{3} H = \frac{2}{3} (3m) = 2m$.

*   **Distance of Centroid from Free Surface ($s_c$):**
    The vertex is at a distance of 1m from the free surface.
    So, $s_c = 1 m + 2 m = 3 m$.

*   **Vertical depth of Centroid ($h_{c, \text{inclined}}$):**
    $h_{c, \text{inclined}} = s_c \sin \theta = 3 m \times \sin 60^\circ = 3 m \times \frac{\sqrt{3}}{2} \approx 2.598 m$

*   **Hydrostatic Force (F):**
    $F = \rho g h_{c, \text{inclined}} A = (1000 kg/m^3) \times (9.81 m/s^2) \times (2.598 m) \times (3 m^2) \approx 76460 N$

*   **Moment of Inertia ($I_{xc}$) about centroidal axis parallel to the base:**
    For a triangle, $I_{xc} = \frac{b H^3}{36} = \frac{(2m)(3m)^3}{36} = \frac{2 \times 27}{36} = \frac{54}{36} = 1.5 m^4$.

*   **Location of Center of Pressure ($s_{cp}$):**
    $s_{cp} = s_c + \frac{I_{xc}}{A s_c} = 3 m + \frac{1.5 m^4}{(3 m^2)(3 m)} = 3 m + \frac{1.5}{9} m = 3 m + 0.1667 m = 3.1667 m$

The center of pressure is located 3.1667 meters along the inclined plane from the free surface.

**Important Point to Remember:** The center of pressure on an inclined plane is also always below the centroid, and the distance from the centroid to the center of pressure depends on the shape of the area and its distance from the free surface.

---

## 6. Hydrostatic Force on Curved Surfaces

Calculating hydrostatic forces on curved surfaces is more complex than on plane surfaces because the pressure varies in both magnitude and direction.

**Key Concepts:**

*   **Resolution of Forces:** The resultant force on a curved surface is found by considering the horizontal and vertical components separately.
*   **Horizontal Component ($F_H$):** Acts perpendicular to the plane of projection. It is equal to the hydrostatic force on the projected area of the curved surface onto a vertical plane.
    *   $F_H = \rho g h_c A_{proj}$, where $A_{proj}$ is the projected area and $h_c$ is the depth of the centroid of the projected area.
*   **Vertical Component ($F_V$):** Acts vertically upwards or downwards. It is equal to the weight of the fluid supported by the curved surface.
    *   If the curved surface is convex outwards, the force acts downwards (weight of fluid above).
    *   If the curved surface is concave outwards, the force acts upwards (buoyant force, weight of fluid missing).
    *   $F_V = \text{Weight of fluid column} = (\rho g V)$, where $V$ is the volume of fluid supported by the curved surface.

*   **Refer to Cengel & Cimbala, Chapter 3 for comprehensive treatment of forces on curved surfaces.*
*   **Refer to White F.M., Chapter 4 for practical applications and examples.**

**Example:**
Consider a quarter-circular gate of radius 2m, placed in a vertical plane, with the center of the circle at the water surface. Calculate the hydrostatic force on the curved surface.

*   Fluid: Water ($\rho = 1000 kg/m^3$)
*   Radius of the quarter-circular gate: $R = 2 m$
*   The quarter-circle is in the first quadrant, with the origin at the water surface.

*   **Horizontal Component ($F_H$):**
    The projected area onto the vertical plane (y-axis) is a rectangle of width $R$ and height $R$.
    $A_{proj} = R \times R = 2m \times 2m = 4 m^2$.
    The centroid of this rectangle is at a depth of $R/2 = 2m/2 = 1m$.
    $h_c = 1m$.
    $F_H = \rho g h_c A_{proj} = (1000 kg/m^3) \times (9.81 m/s^2) \times (1m) \times (4 m^2) = 39240 N$.
    This force acts horizontally.

*   **Vertical Component ($F_V$):**
    The volume of the fluid supported by the curved surface is the volume of a quarter cylinder with radius $R$ and unit width (if considering per unit width) or just the volume of the quarter circle (area).
    The volume of the fluid column is the area of the quarter circle multiplied by the width (assume unit width for simplicity, or consider the cross-sectional area).
    Volume $V = (\text{Area of quarter circle}) \times \text{Width} = (\frac{1}{4} \pi R^2) \times 1 = \frac{1}{4} \pi (2m)^2 \times 1 = \pi m^3$.
    $F_V = \rho g V = (1000 kg/m^3) \times (9.81 m/s^2) \times (\pi m^3) \approx 30830 N$.
    This force acts vertically downwards (as the surface is convex outwards).

*   **Resultant Force (F):**
    $F = \sqrt{F_H^2 + F_V^2} = \sqrt{(39240 N)^2 + (30830 N)^2} \approx 49880 N$

**Important Point to Remember:** For curved surfaces, always break down the force into horizontal and vertical components. The horizontal component depends on the projected area, and the vertical component depends on the volume of the fluid.

---

## 7. Buoyancy and Archimedes' Principle

**Key Concepts:**

*   **Buoyant Force ($F_B$):** An upward force exerted by a fluid that opposes the weight of an immersed object.
*   **Archimedes' Principle:** A body wholly or partially immersed in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.
    *   $F_B = \text{Weight of displaced fluid} = \rho_{fluid} g V_{submerged}$
    *   Where $\rho_{fluid}$ is the density of the fluid and $V_{submerged}$ is the volume of the submerged part of the object.

*   **Stability of Floating Bodies:** An object floats in stable equilibrium if its center of gravity is below the metacenter.
    *   **Metacenter (M):** The point where the vertical line through the center of buoyancy intersects the original vertical line through the center of gravity for a small angular displacement.
    *   **Metacentric Height (GM):** The distance between the center of gravity (G) and the metacenter (M). For stable equilibrium, $GM > 0$.

*   **Refer to Cengel & Cimbala, Chapter 7 for a detailed discussion on buoyancy and stability.*
*   **Refer to Som & Sengupta, Chapter 2 for introductory concepts on buoyancy.*

**Example:**
A wooden block of dimensions $0.5m \times 0.5m \times 1m$ floats in water. The specific gravity of the wood is 0.7. Calculate the submerged depth of the block.

*   Density of wood: $\rho_{wood} = 0.7 \times \rho_{water} = 0.7 \times 1000 kg/m^3 = 700 kg/m^3$.
*   Volume of the block: $V_{block} = 0.5m \times 0.5m \times 1m = 0.25 m^3$.
*   Weight of the block: $W_{block} = \rho_{wood} g V_{block} = (700 kg/m^3) \times (9.81 m/s^2) \times (0.25 m^3) \approx 1716.75 N$.

For a floating body, the buoyant force equals the weight of the body.
$F_B = W_{block}$
$\rho_{water} g V_{submerged} = W_{block}$
$(1000 kg/m^3) \times (9.81 m/s^2) \times V_{submerged} = 1716.75 N$
$V_{submerged} = \frac{1716.75}{1000 \times 9.81} \approx 0.175 m^3$.

Let the submerged depth be $h_{sub}$. The submerged volume is $(0.5m \times 0.5m \times h_{sub})$.
$0.25 m^2 \times h_{sub} = 0.175 m^3$
$h_{sub} = \frac{0.175 m^3}{0.25 m^2} = 0.7 m$.

The submerged depth of the block is 0.7 meters.

---

## 8. Practice Questions and Exercises

**Question 1:**
A rectangular tank filled with oil has dimensions 3m long, 2m wide, and 4m deep. If the oil has a specific gravity of 0.85, calculate the hydrostatic force on one of the 3m x 4m vertical side walls. Also, determine the location of the center of pressure.
*(Answers: Force = 209988 N, $h_{cp}$ = 2.58 m from the top)*

**Question 2:**
A circular gate of diameter 4m is placed vertically in a dam. The top of the gate is 5m below the free surface of the water. Determine the hydrostatic force on the gate and the position of the center of pressure.
*(Answers: Force = 483473 N, $h_{cp}$ = 5.26 m from the top)*

**Question 3:**
An inclined plane is in the shape of an isosceles triangle with base 4m and height 5m. It is submerged in water such that the base is horizontal and at a depth of 2m from the free surface. The plane of the triangle makes an angle of 45 degrees with the horizontal. Calculate the hydrostatic force on the triangle and the position of the center of pressure along the inclined plane.
*(Answers: Force = 368350 N, $s_{cp}$ = 2.74 m from the free surface)*

**Question 4:**
A cylindrical tank of radius 1m and height 2m is filled with water. It is open at the top. If there is a semicircular opening at the bottom with radius 0.5m, calculate the hydrostatic force on this opening.
*(Answers: $F_H = 4905 N$, $F_V = 641 N$, $F = 4950 N$)*

**Question 5:**
A sphere of diameter 1m floats in water with half of its volume submerged. If the sphere is made of a material with specific gravity 0.5, what is the density of the fluid?
*(Answer: $\rho_{fluid} = 1000 kg/m^3$)*

---

## 9. Key Points to Remember

*   **Pressure increases linearly with depth:** $P = \rho g h$.
*   **Hydrostatic force on a plane surface:** $F = \rho g h_c A$.
*   **Center of Pressure ($C_p$) is always below the centroid** for vertical and inclined surfaces.
*   **Location of $C_p$:** $h_{cp} = h_c + \frac{I_{xc}}{A h_c}$ (for vertical) or $s_{cp} = s_c + \frac{I_{xc}}{A s_c}$ (for inclined).
*   **For curved surfaces, resolve forces into horizontal and vertical components.**
    *   $F_H$ = Force on projected area.
    *   $F_V$ = Weight of fluid supported.
*   **Archimedes' Principle:** Buoyant force equals the weight of displaced fluid.
*   **Stable floating requires $GM > 0$.**

---

This module provides the fundamental tools for analyzing how fluids at rest exert forces on submerged surfaces. These principles are critical for designing hydraulic structures, analyzing buoyancy, and understanding the behavior of submerged objects.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
