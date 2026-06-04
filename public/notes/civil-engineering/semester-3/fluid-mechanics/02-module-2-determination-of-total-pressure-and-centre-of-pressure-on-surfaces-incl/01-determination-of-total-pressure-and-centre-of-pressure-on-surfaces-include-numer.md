---
title: "Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e8"
status: "completed"
scrapedAt: "2026-05-20T18:40:25.081Z"
---
# Module 2: Total Pressure and Centre of Pressure on Surfaces - Vertical Plane Surfaces

## 1. Introduction to Pressure and Hydrostatic Force

Pressure is defined as the force exerted per unit area. In fluids at rest, pressure acts perpendicular to any surface it contacts.

*   **Pressure (p):** Force per unit area. Units: Pascals (Pa), N/m², psi.
*   **Pressure Intensity:** The pressure at a specific point.
*   **Hydrostatic Force:** The total force exerted by a fluid on a submerged surface due to its weight.

## 2. Total Pressure and Centre of Pressure

When a surface is submerged in a fluid, the pressure varies with depth. This variation leads to a distributed force acting on the surface.

*   **Total Pressure (F):** The resultant hydrostatic force acting on the entire submerged surface. It's the integral of pressure over the area.
*   **Centre of Pressure (h_p or y_p):** The point on the submerged surface where the total hydrostatic force is considered to act. This is important for calculating moments and stability.

**Key Principle:** The total pressure on a submerged surface is equal to the product of the pressure at the centroid of the surface and the area of the surface.

*   **F = p_c * A**
    *   Where:
        *   **F** = Total Hydrostatic Force
        *   **p_c** = Pressure at the centroid of the submerged surface
        *   **A** = Area of the submerged surface

## 3. Determination of Total Pressure on Vertical Plane Surfaces

For a vertical plane surface submerged in a homogeneous liquid, the pressure varies linearly with depth.

*   **Pressure at Depth (h):** `p = ρ * g * h`
    *   Where:
        *   `ρ` (rho) = Density of the fluid (kg/m³)
        *   `g` = Acceleration due to gravity (m/s²)
        *   `h` = Depth from the free surface (m)

*   **Pressure at the Centroid (p_c):** The centroid of a plane surface is the geometric center. If the surface is vertical, the depth of the centroid (`h_c`) is the vertical distance from the free surface to the centroid.
    *   **p_c = ρ * g * h_c**

*   **Total Pressure (F) for a Vertical Plane Surface:**
    *   **F = (ρ * g * h_c) * A**
    *   **F = ρ * g * A * h_c**

This formula is fundamental for calculating the total hydrostatic force on vertical plane surfaces.

## 4. Determination of Centre of Pressure on Vertical Plane Surfaces

The centre of pressure is the point where the resultant hydrostatic force acts. For a vertical plane surface, the centre of pressure is always deeper than the centroid.

*   **Depth of Centre of Pressure (h_p):** The vertical distance from the free surface to the centre of pressure.
*   **Formula for h_p:**
    *   **h_p = h_c + (I_G / (A * h_c))**
    *   Where:
        *   `h_p` = Depth of the centre of pressure
        *   `h_c` = Depth of the centroid of the surface
        *   `I_G` = Moment of inertia of the submerged surface about its centroidal axis (parallel to the free surface)
        *   `A` = Area of the submerged surface

**Understanding `I_G`:** This term accounts for the distribution of the area around the centroid. A larger `I_G` means the area is more spread out, leading to a deeper centre of pressure.

### Common Shapes and their `I_G` values:

| Shape          | Area (A)        | Centroid Location (from one edge) | `I_G` (Moment of Inertia about Centroid) |
| :------------- | :-------------- | :-------------------------------- | :--------------------------------------- |
| Rectangle      | `b * d`         | `d/2`                             | `(b * d³) / 12`                          |
| Triangle       | `(1/2) * b * d` | `d/3` (from base), `2d/3` (from vertex) | `(b * d³) / 36`                          |
| Circle         | `π * r²`        | Center of the circle              | `(π * r⁴) / 4`                           |
| Semicircle     | `(π * r²) / 2`  | `4r / (3π)` (from diameter)       | `(π * r⁴) / 4 - (π * r²) * (4r / (3π))²` |

*   **Note:** Ensure `I_G` is calculated about the centroidal axis *parallel to the free surface*.

## 5. Examples and Numerical Problems

Let's work through some examples to solidify the concepts.

### Example 1: Rectangular Gate

A rectangular gate of width 2 m and height 3 m is submerged vertically in water. The top edge of the gate is at the free surface of the water. Determine the total pressure on the gate and the depth of the centre of pressure.

**Given:**
*   Width of the gate, `b = 2 m`
*   Height of the gate, `d = 3 m`
*   Fluid = Water (assume `ρ = 1000 kg/m³`)
*   `g = 9.81 m/s²`

**Solution:**

1.  **Calculate the Area (A):**
    *   `A = b * d = 2 m * 3 m = 6 m²`

2.  **Determine the Depth of the Centroid (h_c):**
    *   For a rectangle, the centroid is at half the height.
    *   `h_c = d / 2 = 3 m / 2 = 1.5 m`

3.  **Calculate the Total Pressure (F):**
    *   `F = ρ * g * A * h_c`
    *   `F = 1000 kg/m³ * 9.81 m/s² * 6 m² * 1.5 m`
    *   `F = 88,290 N = 88.29 kN`

4.  **Calculate the Moment of Inertia of the Centroid (I_G) for a Rectangle:**
    *   `I_G = (b * d³) / 12`
    *   `I_G = (2 m * (3 m)³) / 12`
    *   `I_G = (2 * 27) / 12 m⁴ = 54 / 12 m⁴ = 4.5 m⁴`

5.  **Calculate the Depth of the Centre of Pressure (h_p):**
    *   `h_p = h_c + (I_G / (A * h_c))`
    *   `h_p = 1.5 m + (4.5 m⁴ / (6 m² * 1.5 m))`
    *   `h_p = 1.5 m + (4.5 m⁴ / 9 m³)`
    *   `h_p = 1.5 m + 0.5 m`
    *   `h_p = 2.0 m`

**Answer:**
*   Total Pressure (F) = 88.29 kN
*   Depth of Centre of Pressure (h_p) = 2.0 m

### Example 2: Triangular Gate

A triangular gate is submerged in water with its base horizontal and at a depth of 2 m from the free surface. The base of the triangle is 1.5 m and its height is 2 m. The vertex is upwards. Calculate the total pressure and the depth of the centre of pressure.

**Given:**
*   Base of triangle, `b = 1.5 m`
*   Height of triangle, `d = 2 m`
*   Depth of base from free surface = 2 m
*   Fluid = Water (`ρ = 1000 kg/m³`)
*   `g = 9.81 m/s²`

**Solution:**

1.  **Calculate the Area (A):**
    *   `A = (1/2) * b * d = (1/2) * 1.5 m * 2 m = 1.5 m²`

2.  **Determine the Depth of the Centroid (h_c):**
    *   The centroid of a triangle is located at 1/3 of its height from the base.
    *   The base is at a depth of 2 m.
    *   Distance of centroid from the base = `d / 3 = 2 m / 3 = 0.67 m`
    *   Therefore, the depth of the centroid from the free surface:
    *   `h_c = Depth of base + Distance of centroid from base`
    *   `h_c = 2 m + 0.67 m = 2.67 m`

3.  **Calculate the Total Pressure (F):**
    *   `F = ρ * g * A * h_c`
    *   `F = 1000 kg/m³ * 9.81 m/s² * 1.5 m² * 2.67 m`
    *   `F = 39,267.15 N = 39.27 kN`

4.  **Calculate the Moment of Inertia of the Centroid (I_G) for a Triangle:**
    *   `I_G = (b * d³) / 36`
    *   `I_G = (1.5 m * (2 m)³) / 36`
    *   `I_G = (1.5 * 8) / 36 m⁴ = 12 / 36 m⁴ = 0.333 m⁴`

5.  **Calculate the Depth of the Centre of Pressure (h_p):**
    *   `h_p = h_c + (I_G / (A * h_c))`
    *   `h_p = 2.67 m + (0.333 m⁴ / (1.5 m² * 2.67 m))`
    *   `h_p = 2.67 m + (0.333 m⁴ / 4.005 m³)`
    *   `h_p = 2.67 m + 0.083 m`
    *   `h_p = 2.753 m`

**Answer:**
*   Total Pressure (F) = 39.27 kN
*   Depth of Centre of Pressure (h_p) = 2.753 m

### Example 3: Circular Gate

A circular gate of diameter 2 m is submerged vertically in oil. The top of the gate is 1 m below the free surface of the oil. The specific gravity of the oil is 0.85. Calculate the total hydrostatic force and the position of the centre of pressure.

**Given:**
*   Diameter of gate, `D = 2 m`, so radius `r = 1 m`
*   Depth of top of the gate from free surface = 1 m
*   Specific Gravity of oil, `S_oil = 0.85`
*   `g = 9.81 m/s²`
*   Density of water, `ρ_water = 1000 kg/m³`

**Solution:**

1.  **Calculate the Density of Oil (ρ_oil):**
    *   `ρ_oil = S_oil * ρ_water = 0.85 * 1000 kg/m³ = 850 kg/m³`

2.  **Calculate the Area (A):**
    *   `A = π * r² = π * (1 m)² = π m² ≈ 3.1416 m²`

3.  **Determine the Depth of the Centroid (h_c):**
    *   For a circular gate, the centroid is at the center of the circle.
    *   The center of the circle is at a distance equal to the radius from the top edge.
    *   `h_c = Depth of top edge + radius`
    *   `h_c = 1 m + 1 m = 2 m`

4.  **Calculate the Total Pressure (F):**
    *   `F = ρ_oil * g * A * h_c`
    *   `F = 850 kg/m³ * 9.81 m/s² * π m² * 2 m`
    *   `F = 52,331.8 N = 52.33 kN`

5.  **Calculate the Moment of Inertia of the Centroid (I_G) for a Circle:**
    *   `I_G = (π * r⁴) / 4`
    *   `I_G = (π * (1 m)⁴) / 4`
    *   `I_G = π / 4 m⁴ ≈ 0.7854 m⁴`

6.  **Calculate the Depth of the Centre of Pressure (h_p):**
    *   `h_p = h_c + (I_G / (A * h_c))`
    *   `h_p = 2 m + (0.7854 m⁴ / (π m² * 2 m))`
    *   `h_p = 2 m + (0.7854 m⁴ / (2π m³))`
    *   `h_p = 2 m + (0.7854 / 6.2832) m`
    *   `h_p = 2 m + 0.125 m`
    *   `h_p = 2.125 m`

**Answer:**
*   Total Pressure (F) = 52.33 kN
*   Depth of Centre of Pressure (h_p) = 2.125 m

## 6. Important Points to Remember

*   **Pressure increases with depth:** `p = ρgh`.
*   **Total Pressure (F) = Pressure at Centroid * Area:** `F = p_c * A = ρgh_c * A`.
*   **Centre of Pressure is always below the Centroid:** For vertical surfaces.
*   **Moment of Inertia (`I_G`) is crucial:** It depends on the shape of the surface and its orientation. Always ensure it's about the centroidal axis parallel to the free surface.
*   **Units:** Be consistent with units throughout your calculations.
*   **Specific Gravity:** If a fluid other than water is involved, use its specific gravity to find its density.
*   **Free Surface:** The reference point for depth measurements is the free surface of the liquid.

## 7. Practice Questions

1.  A rectangular plate of width 3 m and depth 4 m is held vertically in water. The top edge of the plate is 2 m below the free surface. Calculate:
    *   The total hydrostatic force acting on the plate.
    *   The depth of the centre of pressure from the free surface.
    *(Assume ρ = 1000 kg/m³ and g = 9.81 m/s²)*

2.  A triangular plate with a base of 2 m and a height of 3 m is placed vertically in a tank of oil. The base is at the free surface of the oil. If the specific gravity of the oil is 0.9, determine:
    *   The total force on the plate.
    *   The depth of the centre of pressure.
    *(Assume g = 9.81 m/s²)*

3.  A circular plate of diameter 4 m is immersed vertically in water. The centre of the plate is 3 m below the free surface. Find:
    *   The total pressure on the plate.
    *   The position of the centre of pressure.
    *(Assume ρ = 1000 kg/m³ and g = 9.81 m/s²)*

---

## Answers to Practice Questions

**Question 1:**
*   Width, `b = 3 m`
*   Depth, `d = 4 m`
*   Depth of top edge = 2 m
*   `A = 3 * 4 = 12 m²`
*   `h_c = 2 m + (4/2) m = 2 m + 2 m = 4 m`
*   `F = 1000 * 9.81 * 12 * 4 = 470,880 N = 470.88 kN`
*   `I_G = (3 * 4³) / 12 = (3 * 64) / 12 = 192 / 12 = 16 m⁴`
*   `h_p = 4 + (16 / (12 * 4)) = 4 + (16 / 48) = 4 + 0.333 = 4.333 m`

**Answer 1:**
*   Total hydrostatic force = 470.88 kN
*   Depth of centre of pressure = 4.333 m

**Question 2:**
*   Base, `b = 2 m`
*   Height, `d = 3 m`
*   Specific Gravity, `S_oil = 0.9`
*   `ρ_oil = 0.9 * 1000 = 900 kg/m³`
*   `A = (1/2) * 2 * 3 = 3 m²`
*   `h_c = 0 + (3/3) m = 1 m` (Centroid is 1/3 from the base, and base is at free surface)
*   `F = 900 * 9.81 * 3 * 1 = 26,487 N = 26.49 kN`
*   `I_G = (2 * 3³) / 36 = (2 * 27) / 36 = 54 / 36 = 1.5 m⁴`
*   `h_p = 1 + (1.5 / (3 * 1)) = 1 + (1.5 / 3) = 1 + 0.5 = 1.5 m`

**Answer 2:**
*   Total force on the plate = 26.49 kN
*   Depth of the centre of pressure = 1.5 m

**Question 3:**
*   Diameter, `D = 4 m`, radius, `r = 2 m`
*   Depth of center of plate = 3 m
*   `A = π * 2² = 4π m² ≈ 12.566 m²`
*   `h_c = 3 m` (Since the center of the plate is the centroid)
*   `F = 1000 * 9.81 * 4π * 3 = 369,591.5 N = 369.59 kN`
*   `I_G = (π * 2⁴) / 4 = (π * 16) / 4 = 4π m⁴ ≈ 12.566 m⁴`
*   `h_p = 3 + (4π / (4π * 3)) = 3 + (4π / 12π) = 3 + (1/3) = 3 + 0.333 = 3.333 m`

**Answer 3:**
*   Total pressure on the plate = 369.59 kN
*   Position of the centre of pressure = 3.333 m below the free surface.
