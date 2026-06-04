---
title: "Horizontal plane surface"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e9"
status: "completed"
scrapedAt: "2026-05-20T18:40:25.719Z"
---
# Fluid Mechanics: Module 2 - Determination of Total Pressure and Centre of Pressure on Surfaces

## Topic: Horizontal Plane Surface

---

### 1. Introduction

This section focuses on understanding and calculating the **total pressure** and the **centre of pressure** acting on a **horizontal plane surface** submerged in a fluid.

### 2. Key Concepts and Definitions

*   **Pressure:** The force exerted by a fluid per unit area. It acts perpendicular to the surface.
*   **Hydrostatic Pressure:** The pressure exerted by a fluid at rest due to the force of gravity.
*   **Total Pressure (P):** The total force exerted by a fluid on a submerged surface.
*   **Centre of Pressure (y_p or h_p):** The point on a submerged surface where the total hydrostatic force can be considered to act.
*   **Horizontal Plane Surface:** A flat surface oriented parallel to the free surface of the fluid.

### 3. Pressure Distribution on a Horizontal Plane Surface

**Crucial Observation:** For a horizontal plane surface submerged in a fluid, the depth of the fluid above *every point* on the surface is the same.

*   **Constant Depth:** Let the depth of the fluid surface from the free surface be $h$. Since the surface is horizontal, every point on the surface is at a depth of $h$ from the free surface.
*   **Uniform Pressure:** According to the hydrostatic pressure formula, $p = \rho \cdot g \cdot h$, where:
    *   $p$ is the pressure
    *   $\rho$ is the density of the fluid
    *   $g$ is the acceleration due to gravity
    *   $h$ is the depth
    Since $\rho$, $g$, and $h$ are constant for all points on the horizontal surface, the **pressure is uniform across the entire horizontal plane surface**.

### 4. Determination of Total Pressure on a Horizontal Plane Surface

Since the pressure is uniform across the entire surface, the total pressure is simply the product of the uniform pressure and the area of the surface.

*   **Formula:**
    $$ P = p \cdot A $$
    Where:
    *   $P$ = Total Pressure (in Newtons, N)
    *   $p$ = Uniform Pressure at depth $h$ ($p = \rho \cdot g \cdot h$)
    *   $A$ = Area of the horizontal surface (in square meters, $m^2$)

*   **Substituting the pressure formula:**
    $$ P = (\rho \cdot g \cdot h) \cdot A $$

### 5. Determination of Centre of Pressure on a Horizontal Plane Surface

The centre of pressure is the point where the total force acts. For a horizontal plane surface, due to the uniform distribution of pressure, the **total force acts at the geometric centroid of the surface**.

*   **Key Principle:** The centre of pressure for a horizontal surface coincides with its geometric centre.
*   **Location:** The centre of pressure is located at the geometric centre of the horizontal surface.
*   **Depth of Centre of Pressure ($h_p$):** The depth of the centre of pressure from the free surface is equal to the depth of the fluid above the surface, which is $h$.
    $$ h_p = h $$

### 6. Examples and Numerical Problems

**Example 1:**
A rectangular plate of dimensions 2 m x 3 m is immersed horizontally in water. The depth of the water surface from the free surface is 5 m. Calculate the total pressure on the plate and the location of the centre of pressure.
(Density of water, $\rho = 1000 \, kg/m^3$, $g = 9.81 \, m/s^2$)

**Solution:**
1.  **Given:**
    *   Length of plate = 3 m
    *   Width of plate = 2 m
    *   Depth of immersion, $h = 5 \, m$
    *   $\rho = 1000 \, kg/m^3$
    *   $g = 9.81 \, m/s^2$

2.  **Calculate the Area (A):**
    $A = \text{Length} \times \text{Width} = 3 \, m \times 2 \, m = 6 \, m^2$

3.  **Calculate the Uniform Pressure (p):**
    $p = \rho \cdot g \cdot h$
    $p = 1000 \, kg/m^3 \times 9.81 \, m/s^2 \times 5 \, m$
    $p = 49050 \, N/m^2$ (or Pascals, Pa)

4.  **Calculate the Total Pressure (P):**
    $P = p \cdot A$
    $P = 49050 \, N/m^2 \times 6 \, m^2$
    $P = 294300 \, N$

5.  **Locate the Centre of Pressure:**
    Since the surface is horizontal, the centre of pressure is at the geometric centroid. The depth of the centre of pressure ($h_p$) is equal to the depth of the fluid ($h$).
    $h_p = h = 5 \, m$
    The centre of pressure is at the geometric centre of the rectangular plate, which is 5 m below the free surface.

**Answer:**
*   Total Pressure = 294300 N
*   Centre of Pressure is at a depth of 5 m from the free surface, at the geometric centre of the plate.

---

**Example 2:**
A circular plate of diameter 4 m is placed horizontally in a tank of oil. The depth of the oil surface from the free surface is 10 m. The specific gravity of oil is 0.85. Determine the total pressure on the plate and the position of the centre of pressure.
($g = 9.81 \, m/s^2$)

**Solution:**
1.  **Given:**
    *   Diameter of circular plate, $D = 4 \, m$
    *   Depth of immersion, $h = 10 \, m$
    *   Specific Gravity of oil, $S.G. = 0.85$
    *   $g = 9.81 \, m/s^2$

2.  **Calculate the Density of Oil ($\rho_{oil}$):**
    Density of water, $\rho_{water} = 1000 \, kg/m^3$
    $\rho_{oil} = S.G. \times \rho_{water}$
    $\rho_{oil} = 0.85 \times 1000 \, kg/m^3 = 850 \, kg/m^3$

3.  **Calculate the Area (A) of the circular plate:**
    Radius of plate, $r = D/2 = 4 \, m / 2 = 2 \, m$
    $A = \pi \cdot r^2$
    $A = \pi \times (2 \, m)^2 = 4\pi \, m^2 \approx 12.566 \, m^2$

4.  **Calculate the Uniform Pressure (p):**
    $p = \rho_{oil} \cdot g \cdot h$
    $p = 850 \, kg/m^3 \times 9.81 \, m/s^2 \times 10 \, m$
    $p = 83385 \, N/m^2$

5.  **Calculate the Total Pressure (P):**
    $P = p \cdot A$
    $P = 83385 \, N/m^2 \times 4\pi \, m^2$
    $P \approx 83385 \, N/m^2 \times 12.566 \, m^2$
    $P \approx 1047787 \, N$

6.  **Locate the Centre of Pressure:**
    For a horizontal circular plate, the centre of pressure is at the geometric centre. The depth of the centre of pressure ($h_p$) is equal to the depth of the fluid ($h$).
    $h_p = h = 10 \, m$
    The centre of pressure is at the geometric centre of the circular plate, which is 10 m below the free surface.

**Answer:**
*   Total Pressure $\approx$ 1047787 N
*   Centre of Pressure is at a depth of 10 m from the free surface, at the geometric centre of the circular plate.

---

### 7. Practice Questions

1.  A square plate of side 1.5 m is placed horizontally in diesel fuel. The top surface of the plate is at a depth of 8 m from the free surface. The specific gravity of diesel fuel is 0.82. Calculate the total hydrostatic force on the plate and the depth of the centre of pressure. (Use $g = 9.81 \, m/s^2$)

2.  A horizontal circular plate of 5 m diameter is submerged in water at a depth of 15 m. Determine the total pressure acting on the plate and the location of the centre of pressure. (Density of water = $1000 \, kg/m^3$, $g = 9.81 \, m/s^2$)

3.  A horizontal plane surface of area $10 \, m^2$ is submerged in a liquid of density $1200 \, kg/m^3$ at a depth of 6 m. Calculate the total pressure on the surface and the depth of the centre of pressure.

---

### 8. Answers to Practice Questions

1.  **Given:**
    *   Side of square plate, $s = 1.5 \, m$
    *   Depth of immersion, $h = 8 \, m$
    *   $S.G._{diesel} = 0.82$
    *   $g = 9.81 \, m/s^2$

    **Calculations:**
    *   $\rho_{diesel} = 0.82 \times 1000 = 820 \, kg/m^3$
    *   $A = s^2 = (1.5 \, m)^2 = 2.25 \, m^2$
    *   $p = \rho_{diesel} \cdot g \cdot h = 820 \times 9.81 \times 8 = 64425.6 \, N/m^2$
    *   $P = p \cdot A = 64425.6 \, N/m^2 \times 2.25 \, m^2 = 144957.6 \, N$
    *   $h_p = h = 8 \, m$

    **Answer:**
    *   Total Pressure = 144957.6 N
    *   Depth of Centre of Pressure = 8 m

2.  **Given:**
    *   Diameter of circular plate, $D = 5 \, m$
    *   Depth of immersion, $h = 15 \, m$
    *   $\rho_{water} = 1000 \, kg/m^3$
    *   $g = 9.81 \, m/s^2$

    **Calculations:**
    *   Radius of plate, $r = D/2 = 2.5 \, m$
    *   $A = \pi r^2 = \pi (2.5)^2 = 6.25\pi \, m^2 \approx 19.635 \, m^2$
    *   $p = \rho_{water} \cdot g \cdot h = 1000 \times 9.81 \times 15 = 147150 \, N/m^2$
    *   $P = p \cdot A = 147150 \, N/m^2 \times 6.25\pi \, m^2 \approx 2879778 \, N$
    *   $h_p = h = 15 \, m$

    **Answer:**
    *   Total Pressure $\approx$ 2879778 N
    *   Depth of Centre of Pressure = 15 m

3.  **Given:**
    *   Area of surface, $A = 10 \, m^2$
    *   $\rho = 1200 \, kg/m^3$
    *   Depth of immersion, $h = 6 \, m$

    **Calculations:**
    *   $p = \rho \cdot g \cdot h = 1200 \times 9.81 \times 6 = 70632 \, N/m^2$
    *   $P = p \cdot A = 70632 \, N/m^2 \times 10 \, m^2 = 706320 \, N$
    *   $h_p = h = 6 \, m$

    **Answer:**
    *   Total Pressure = 706320 N
    *   Depth of Centre of Pressure = 6 m

---

### 9. Important Points to Remember

*   **Horizontal surfaces are simpler:** For horizontal plane surfaces, the pressure is uniform across the entire area.
*   **Centroid matters for location:** The centre of pressure for a horizontal surface is always at its geometric centroid.
*   **Depth is key:** The depth of the fluid ($h$) directly determines the uniform pressure and therefore the total pressure.
*   **Total Pressure = Pressure x Area:** This is the fundamental formula for horizontal surfaces.
*   **Centre of Pressure Depth = Fluid Depth:** For horizontal surfaces, $h_p = h$.

---

This concludes the notes for the topic of horizontal plane surfaces in Module 2 of Fluid Mechanics. Remember to practice these concepts with various shapes and fluids to solidify your understanding.
