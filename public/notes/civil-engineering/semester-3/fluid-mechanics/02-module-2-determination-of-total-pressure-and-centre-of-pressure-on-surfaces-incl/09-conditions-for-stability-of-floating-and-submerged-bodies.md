---
title: "conditions for stability of floating and submerged bodies"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f0"
status: "completed"
scrapedAt: "2026-05-20T18:40:30.647Z"
---
# Fluid Mechanics: Module 2 - Stability of Floating and Submerged Bodies

## 1. Introduction to Stability

Stability is a fundamental concept in fluid mechanics that deals with the behavior of bodies when subjected to external disturbances. For a body immersed in a fluid, stability refers to its tendency to return to its original position after being tilted or displaced.

### 1.1. Key Concepts:

*   **Floating Bodies:** Bodies that are partially or fully submerged in a fluid and are supported by the buoyant force.
*   **Submerged Bodies:** Bodies that are completely immersed in a fluid.
*   **Equilibrium:** A state where the net force and net moment acting on a body are zero. Bodies can be in:
    *   **Stable Equilibrium:** If disturbed, it returns to its original position.
    *   **Unstable Equilibrium:** If disturbed, it moves further away from its original position.
    *   **Neutral Equilibrium:** If disturbed, it remains in its new position.
*   **Buoyant Force ($F_B$)**: The upward force exerted by a fluid on a submerged or floating body. It is equal to the weight of the fluid displaced by the body (Archimedes' Principle).
    *   $F_B = \rho_f \times g \times V_{sub}$
        *   $\rho_f$: Density of the fluid
        *   $g$: Acceleration due to gravity
        *   $V_{sub}$: Volume of the submerged part of the body

### 1.2. Importance of Stability:

Understanding the stability of floating and submerged bodies is crucial in various engineering applications, including:

*   **Shipbuilding:** Ensuring the stability of ships to prevent capsizing.
*   **Submarine Design:** Maintaining stability during submersion and surfacing.
*   **Buoys and Floating Structures:** Designing stable platforms for offshore operations.
*   **Dams and Hydraulic Structures:** Assessing the stability of structures against hydrostatic forces.

---

## 2. Stability of Submerged Bodies

For a submerged body, stability depends on the relative positions of its **center of gravity (CG)** and its **centroid of the displaced volume**.

### 2.1. Conditions for Stability:

A submerged body is in stable equilibrium if its **center of gravity (G)** is **below** its **center of buoyancy (B)**.

*   **Center of Buoyancy (B):** The point through which the buoyant force acts. It is the centroid of the volume of fluid displaced by the body.

**Why?**
When a submerged body is tilted, the shape of the submerged volume changes, causing the center of buoyancy to shift.

*   **If G is below B:** When tilted, the buoyant force and the weight of the body create a **restoring moment** that tends to bring the body back to its original position.
*   **If G is above B:** When tilted, the buoyant force and the weight of the body create an **overturning moment** that tends to move the body further away from its original position.
*   **If G coincides with B:** The body is in neutral equilibrium.

**Diagrammatic Representation:**

Imagine a submerged sphere.
*   **Stable:** G is below B. If tilted, the shift in the center of the displaced volume creates a moment that pulls it back.
*   **Unstable:** G is above B. If tilted, the shift in the center of the displaced volume creates a moment that pushes it further away.
*   **Neutral:** G and B are at the same point. Tilting doesn't create any restoring or overturning moment.

### 2.2. Numerical Problem (Submerged Bodies):

**Problem 1:** A solid cube of side 0.5 m and mass 100 kg is completely submerged in water. Determine if the cube is in stable, unstable, or neutral equilibrium. (Density of water = 1000 kg/m³)

**Solution:**

1.  **Calculate the volume of the cube:**
    $V = (\text{side})^3 = (0.5 \text{ m})^3 = 0.125 \text{ m}^3$

2.  **Calculate the mass of the displaced water (weight of the cube):**
    Mass of displaced water = Density of water $\times$ Volume of cube
    $m_{water} = 1000 \text{ kg/m}^3 \times 0.125 \text{ m}^3 = 125 \text{ kg}$

3.  **Calculate the buoyant force ($F_B$):**
    $F_B = m_{water} \times g = 125 \text{ kg} \times 9.81 \text{ m/s}^2 = 1226.25 \text{ N}$

4.  **Calculate the weight of the cube ($W$):**
    $W = \text{mass of cube} \times g = 100 \text{ kg} \times 9.81 \text{ m/s}^2 = 981 \text{ N}$

5.  **Determine the positions of G and B:**
    *   **Center of Gravity (G):** For a uniform solid cube, G is at its geometric center.
    *   **Center of Buoyancy (B):** Since the cube is fully submerged and the water is uniform, B is also at the geometric center of the displaced volume (which is the entire cube).
    *   Therefore, G and B coincide for a uniformly submerged cube.

**Conclusion:**
Since the center of gravity (G) and the center of buoyancy (B) coincide, the submerged cube is in **neutral equilibrium**.

---

## 3. Stability of Floating Bodies

The stability of floating bodies is more complex and involves the concept of the **metacenter (M)**.

### 3.1. Key Concepts for Floating Bodies:

*   **Center of Gravity (G):** The point through which the weight of the body acts.
*   **Center of Buoyancy (B):** The centroid of the submerged volume.
*   **Metacenter (M):** The point of intersection of the vertical line through the new center of buoyancy (B') and the original vertical line through the center of buoyancy (B) when the body is tilted by a small angle.
*   **Metacentric Height (GM):** The distance between the center of gravity (G) and the metacenter (M).
    *   $GM = BM - BG$
        *   $BM$: Metacentric radius, the distance from the center of buoyancy (B) to the metacenter (M).
        *   $BG$: The distance between the center of buoyancy (B) and the center of gravity (G).

### 3.2. Determining the Metacentric Radius (BM):

The metacentric radius ($BM$) is calculated using the formula:

$BM = \frac{I}{V_{sub}}$

Where:
*   $I$: The **second moment of area** (or moment of inertia) of the **waterplane area** about the **axis of tilt**. The waterplane area is the horizontal cross-section of the floating body at the fluid surface.
*   $V_{sub}$: The volume of the submerged part of the body.

**Important Notes on 'I':**
*   The axis of tilt is the longitudinal axis for rolling (side to side) and the transverse axis for pitching (front to back). Stability is generally considered with respect to the smaller $I$ value, which corresponds to the narrower dimension of the waterplane.
*   For a rectangular waterplane of width 'b' and length 'l', and tilting about the longitudinal axis (rolling), $I = \frac{l \times b^3}{12}$.

### 3.3. Conditions for Stability of Floating Bodies:

The stability of a floating body is determined by the metacentric height (GM):

*   **Stable Equilibrium:** If $GM > 0$ (i.e., $M$ is above $G$). A restoring couple is created when the body is tilted, bringing it back to its original position.
*   **Unstable Equilibrium:** If $GM < 0$ (i.e., $M$ is below $G$). An overturning couple is created when the body is tilted, causing it to capsize.
*   **Neutral Equilibrium:** If $GM = 0$ (i.e., $M$ coincides with $G$). The body remains in its tilted position.

**Diagrammatic Representation:**

Consider a ship.
*   **Stable:** When tilted, the buoyant force shifts. The new center of buoyancy (B') and the original center of buoyancy (B) define a point M. If M is above G, there's a restoring arm.
*   **Unstable:** If M is below G, tilting creates an overturning arm.
*   **Neutral:** If M is at G, there's no tilting moment.

### 3.4. Numerical Problems (Floating Bodies):

**Problem 2:** A solid cylinder of diameter 2 m and height 3 m floats vertically in water. The cylinder has a uniform density of 800 kg/m³. Calculate the metacentric height (GM) and determine the stability of the cylinder. (Density of water = 1000 kg/m³, g = 9.81 m/s²)

**Solution:**

1.  **Calculate the volume of the cylinder:**
    $V_{cylinder} = \frac{\pi}{4} d^2 h = \frac{\pi}{4} (2 \text{ m})^2 (3 \text{ m}) = 3\pi \text{ m}^3$

2.  **Calculate the mass of the cylinder:**
    $m_{cylinder} = \text{density}_{cylinder} \times V_{cylinder} = 800 \text{ kg/m}^3 \times 3\pi \text{ m}^3 = 2400\pi \text{ kg}$

3.  **Calculate the weight of the cylinder (W):**
    $W = m_{cylinder} \times g = 2400\pi \text{ kg} \times 9.81 \text{ m/s}^2 = 23544\pi \text{ N}$

4.  **Calculate the submerged depth ($h_{sub}$):**
    For a floating body, Weight = Buoyant Force
    $W = \rho_f \times g \times V_{sub}$
    $2400\pi \times g = 1000 \times g \times (\frac{\pi}{4} d^2 h_{sub})$
    $2400\pi = 1000 \times \frac{\pi}{4} (2)^2 h_{sub}$
    $2400\pi = 1000 \times \pi \times 1 \times h_{sub}$
    $h_{sub} = \frac{2400\pi}{1000\pi} = 2.4 \text{ m}$

5.  **Determine the position of the Center of Gravity (G):**
    Assuming the cylinder is uniform, G is at the center of its height.
    Distance of G from the base = $h/2 = 3 \text{ m} / 2 = 1.5 \text{ m}$

6.  **Determine the position of the Center of Buoyancy (B):**
    B is the centroid of the submerged volume. Since it's a vertical cylinder, B is at the center of the submerged depth.
    Distance of B from the base = $h_{sub}/2 = 2.4 \text{ m} / 2 = 1.2 \text{ m}$

7.  **Calculate BG:**
    $BG = \text{Distance of G from base} - \text{Distance of B from base}$
    $BG = 1.5 \text{ m} - 1.2 \text{ m} = 0.3 \text{ m}$

8.  **Calculate the moment of inertia of the waterplane area (I):**
    The waterplane area is a circle of diameter 2 m. The axis of tilt (for rolling) is a diameter.
    $I = \frac{\pi}{64} d^4 = \frac{\pi}{64} (2 \text{ m})^4 = \frac{\pi}{64} \times 16 \text{ m}^4 = \frac{\pi}{4} \text{ m}^4$

9.  **Calculate the submerged volume ($V_{sub}$):**
    $V_{sub} = \frac{\pi}{4} d^2 h_{sub} = \frac{\pi}{4} (2 \text{ m})^2 (2.4 \text{ m}) = 2.4\pi \text{ m}^3$

10. **Calculate the metacentric radius (BM):**
    $BM = \frac{I}{V_{sub}} = \frac{\pi/4 \text{ m}^4}{2.4\pi \text{ m}^3} = \frac{1/4}{2.4} \text{ m} = \frac{1}{9.6} \text{ m} \approx 0.104 \text{ m}$

11. **Calculate the metacentric height (GM):**
    $GM = BM - BG = 0.104 \text{ m} - 0.3 \text{ m} = -0.196 \text{ m}$

**Conclusion:**
Since the metacentric height (GM) is negative (-0.196 m), the cylinder is in **unstable equilibrium**.

**Problem 3:** A wooden block with a rectangular cross-section of 0.5 m x 0.4 m and a length of 1.2 m floats in water. The density of the wood is 600 kg/m³. If the block floats with the 0.5 m x 1.2 m side as the waterplane, determine if it is stable when tilted about the length axis. (Density of water = 1000 kg/m³, g = 9.81 m/s²)

**Solution:**

1.  **Calculate the volume of the block:**
    $V_{block} = 0.5 \text{ m} \times 0.4 \text{ m} \times 1.2 \text{ m} = 0.24 \text{ m}^3$

2.  **Calculate the mass of the block:**
    $m_{block} = \text{density}_{wood} \times V_{block} = 600 \text{ kg/m}^3 \times 0.24 \text{ m}^3 = 144 \text{ kg}$

3.  **Calculate the weight of the block (W):**
    $W = m_{block} \times g = 144 \text{ kg} \times 9.81 \text{ m/s}^2 = 1412.64 \text{ N}$

4.  **Calculate the submerged volume ($V_{sub}$):**
    For a floating block, $W = F_B$.
    $1412.64 \text{ N} = \rho_f \times g \times V_{sub}$
    $1412.64 \text{ N} = 1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times V_{sub}$
    $V_{sub} = \frac{1412.64}{9810} \text{ m}^3 = 0.144 \text{ m}^3$

5.  **Determine the submerged depth ($h_{sub}$):**
    The waterplane is 0.5 m x 1.2 m. The block is floating with a submerged depth $h_{sub}$ along the 0.4 m dimension.
    $V_{sub} = \text{length} \times \text{width}_{waterplane} \times h_{sub}$
    $0.144 \text{ m}^3 = 1.2 \text{ m} \times 0.5 \text{ m} \times h_{sub}$
    $0.144 \text{ m}^3 = 0.6 \text{ m}^2 \times h_{sub}$
    $h_{sub} = \frac{0.144}{0.6} \text{ m} = 0.24 \text{ m}$

6.  **Determine the position of the Center of Gravity (G):**
    Assuming the block is uniform, G is at the geometric center of the block.
    Distance of G from the bottom surface (0.5m x 1.2m) = $0.4 \text{ m} / 2 = 0.2 \text{ m}$

7.  **Determine the position of the Center of Buoyancy (B):**
    B is the centroid of the submerged volume.
    Distance of B from the bottom surface (0.5m x 1.2m) = $h_{sub} / 2 = 0.24 \text{ m} / 2 = 0.12 \text{ m}$

8.  **Calculate BG:**
    $BG = \text{Distance of G from bottom} - \text{Distance of B from bottom}$
    $BG = 0.2 \text{ m} - 0.12 \text{ m} = 0.08 \text{ m}$

9.  **Calculate the moment of inertia of the waterplane area (I) about the axis of tilt:**
    The waterplane area is 0.5 m x 1.2 m. The tilt is about the length axis (1.2 m). So, the width of the waterplane is 0.5 m.
    $I = \frac{\text{length} \times (\text{width})^3}{12} = \frac{1.2 \text{ m} \times (0.5 \text{ m})^3}{12} = \frac{1.2 \times 0.125}{12} \text{ m}^4 = \frac{0.15}{12} \text{ m}^4 = 0.0125 \text{ m}^4$

10. **Calculate the metacentric radius (BM):**
    $BM = \frac{I}{V_{sub}} = \frac{0.0125 \text{ m}^4}{0.144 \text{ m}^3} \approx 0.0868 \text{ m}$

11. **Calculate the metacentric height (GM):**
    $GM = BM - BG = 0.0868 \text{ m} - 0.08 \text{ m} = 0.0068 \text{ m}$

**Conclusion:**
Since the metacentric height (GM) is positive (0.0068 m), the wooden block is in **stable equilibrium** when tilted about the length axis.

---

## 4. Practice Questions

1.  A uniform sphere of radius 0.5 m is completely submerged in oil. If the density of the sphere is 1200 kg/m³ and the density of oil is 900 kg/m³, determine the stability of the sphere.
    *(Answer: The sphere is in unstable equilibrium because the buoyant force is less than its weight, causing it to sink and G to be effectively above B for stability analysis in a fluid.)* - **Correction:** For submerged bodies, stability is determined by the relative positions of G and B. Since the sphere is uniform and fully submerged, G and B are at the center. The sphere will sink if its density is greater than the fluid, but the question is about stability once submerged. If uniform, G and B coincide, leading to neutral equilibrium. Let's rephrase for clarity: If a uniform sphere is *placed* in oil and is fully submerged, its density (1200 kg/m³) is greater than the oil's density (900 kg/m³), so it will sink. However, if we consider its equilibrium *once submerged* without any external forces, and it's uniform, G and B are at the same point, implying neutral equilibrium. The initial sinking is a matter of net force. Let's assume the question implies equilibrium conditions once it's held submerged.
    *Revised Answer Rationale for Q1:* For a uniform submerged body, the center of gravity (G) and the center of buoyancy (B) coincide at the geometric center. Therefore, a uniform submerged body is always in neutral equilibrium, regardless of its density relative to the fluid.

2.  A rectangular pontoon 8 m long, 5 m wide, and 3 m high has a draught of 2 m when floating in fresh water. The center of gravity is 0.5 m above the bottom of the pontoon. Calculate the metacentric height of the pontoon for rolling. (Density of fresh water = 1000 kg/m³, g = 9.81 m/s²)
    *(Answer: GM ≈ 0.268 m. The pontoon is stable.)*

3.  A hollow steel cylinder with an outer diameter of 1 m and an inner diameter of 0.8 m floats in water with its axis vertical. The height of the cylinder is 2 m. If the weight of the cylinder is 3000 N, determine the submerged depth and the metacentric height. (Density of water = 1000 kg/m³, g = 9.81 m/s²)
    *(Answer: Submerged depth ≈ 0.153 m, BM ≈ 0.157 m. Assuming G is at the center of the cylinder's height (1m), BG = 1 - 0.153/2 = 0.9235 m. GM = BM - BG = 0.157 - 0.9235 = -0.7665 m. The cylinder is unstable.)*

---

## 5. Important Points to Remember

*   **Submerged Bodies:** Stability depends on the relative position of G and B. G below B is stable; G above B is unstable; G at B is neutral.
*   **Floating Bodies:** Stability depends on the metacentric height (GM). GM > 0 is stable; GM < 0 is unstable; GM = 0 is neutral.
*   **Metacentric Radius ($BM$):** $BM = \frac{I}{V_{sub}}$, where $I$ is the moment of inertia of the waterplane area about the axis of tilt, and $V_{sub}$ is the submerged volume.
*   **Metacentric Height ($GM$):** $GM = BM - BG$.
*   **Waterplane Area:** The horizontal cross-section of the floating body at the fluid surface.
*   **Moment of Inertia (I):** Calculated for the waterplane area about the axis of tilt. For rolling stability, it's usually about the shorter dimension of the waterplane.
*   **Center of Buoyancy (B):** Always the centroid of the submerged volume.
*   **Center of Gravity (G):** The center of mass of the body.

---
This concludes the notes on the stability of floating and submerged bodies. Remember to practice these concepts with various numerical problems to solidify your understanding.
