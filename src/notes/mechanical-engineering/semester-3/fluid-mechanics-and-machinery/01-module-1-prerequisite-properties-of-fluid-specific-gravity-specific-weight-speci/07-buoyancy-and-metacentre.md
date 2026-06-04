---
title: "Buoyancy and Metacentre."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d19"
status: "completed"
scrapedAt: "2026-05-20T17:49:22.161Z"
---
# Fluid Mechanics and Machinery - Module 1: Prerequisite: Properties of Fluid & Buoyancy and Metacentre

## Topic: Buoyancy and Metacentre

---

### 1. Introduction to Buoyancy

Buoyancy is the upward force exerted by a fluid that opposes the weight of an immersed object. When an object is placed in a fluid (liquid or gas), it experiences an upward force. This phenomenon is responsible for floating objects and the apparent loss of weight of submerged objects.

**Key Concepts:**

*   **Buoyant Force (F_B):** The upward force exerted by the fluid on the submerged or partially submerged object.
*   **Archimedes' Principle:** This fundamental principle states that a body wholly or partially immersed in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.

**Mathematical Formulation:**

According to Archimedes' Principle:

$F_B = \text{Weight of the fluid displaced}$

Let:
*   $V_{sub}$ be the volume of the submerged portion of the object.
*   $\rho_f$ be the density of the fluid.
*   $g$ be the acceleration due to gravity.

Then, the buoyant force can be expressed as:

$F_B = \rho_f \times V_{sub} \times g$

**Relationship to Course Outcomes:**

*   **CO1 (K3):** This section directly addresses identifying fluid properties (density) and applying them to estimate forces (buoyant force) on submerged bodies. The calculation of buoyant force involves the density of the fluid and the volume of the submerged body.

**Examples:**

*   **Floating of a Ship:** A ship floats because the weight of the water it displaces is equal to its own weight. By altering the cargo, the ship's overall weight changes, and the volume of displaced water adjusts to maintain equilibrium.
*   **Hot Air Balloon:** A hot air balloon floats because the density of the hot air inside the balloon is less than the density of the cooler surrounding air. The balloon displaces a volume of cooler air whose weight is greater than the weight of the balloon and its contents, resulting in an upward buoyant force.
*   **Submerged Objects:** An object submerged in water appears lighter because the upward buoyant force counteracts its weight. For example, a heavy rock feels lighter when lifted underwater.

**Important Points to Remember:**

*   The buoyant force always acts vertically upwards through the centroid of the displaced fluid volume.
*   The magnitude of the buoyant force depends on the density of the *fluid* and the volume of the *submerged portion* of the object, not on the density or weight of the object itself.

---

### 2. Stability of Submerged and Floating Bodies

The stability of a body in a fluid refers to its ability to return to its original position after being slightly disturbed. This is crucial for the design of ships, submarines, and other floating structures.

#### 2.1 Stability of Completely Submerged Bodies

For a completely submerged body, stability is determined by the relative positions of its **center of gravity (G)** and the **center of buoyancy (B)**.

*   **Center of Gravity (G):** The point where the entire weight of the body acts.
*   **Center of Buoyancy (B):** The centroid of the displaced volume of the fluid.

**Conditions for Stability:**

1.  **Stable Equilibrium:** The body returns to its original position after a slight disturbance. This occurs when the **center of gravity (G) is below the center of buoyancy (B)**. Any tilt will create a couple that restores the body to its upright position.
2.  **Unstable Equilibrium:** The body moves further away from its original position after a slight disturbance. This occurs when the **center of gravity (G) is above the center of buoyancy (B)**. Any tilt will create a couple that further displaces the body.
3.  **Neutral Equilibrium:** The body remains in its new position after a slight disturbance. This occurs when the **center of gravity (G) coincides with the center of buoyancy (B)**.

**Example:**

*   A perfectly uniform sphere submerged in water is in neutral equilibrium if its CG and CB coincide. If its CG is slightly below its CB, it's stable. If its CG is slightly above its CB, it's unstable.

**Important Points to Remember:**

*   For completely submerged bodies, the volume of displaced fluid is constant regardless of the orientation. Therefore, the center of buoyancy (B) remains fixed relative to the body. Stability depends solely on the relative positions of G and B.

#### 2.2 Stability of Partially Submerged (Floating) Bodies

For partially submerged bodies, the situation is more complex because the submerged volume changes when the body is tilted. The stability is determined by the position of the **metacentre (M)** relative to the center of gravity (G).

*   **Metacentre (M):** The point of intersection of the line of action of the buoyant force in the tilted position and the original vertical line passing through the center of buoyancy (B).

**Metacentric Height (GM):**

The metacentric height ($GM$) is the vertical distance between the center of gravity (G) and the metacentre (M).

$GM = BM - BG$

Where:
*   $BG$ is the vertical distance between the center of buoyancy (B) and the center of gravity (G).
*   $BM$ is the vertical distance between the center of buoyancy (B) and the metacentre (M). This is known as the metacentric radius.

**Calculation of Metacentric Radius (BM):**

The metacentric radius ($BM$) for a floating body can be calculated using the following formula:

$BM = \frac{I}{V_{sub}}$

Where:
*   $I$ is the **second moment of area (moment of inertia)** of the free surface of the waterplane of the floating body about the axis of tilt. The axis of tilt is perpendicular to the direction in which the tilting occurs.
*   $V_{sub}$ is the submerged volume of the body.

**Conditions for Stability for Floating Bodies:**

1.  **Stable Equilibrium:** The body is stable if the **metacentre (M) is above the center of gravity (G)**, meaning $GM > 0$. A positive metacentric height indicates that any tilt will create a restoring couple that brings the body back to its original position.
2.  **Unstable Equilibrium:** The body is unstable if the **metacentre (M) is below the center of gravity (G)**, meaning $GM < 0$. A negative metacentric height means any tilt will create an overturning couple that moves the body further from its equilibrium position.
3.  **Neutral Equilibrium:** The body is in neutral equilibrium if the **metacentre (M) coincides with the center of gravity (G)**, meaning $GM = 0$.

**The Metacentric Curve:**

The locus of the metacentre (M) as the floating body tilts to different angles is called the **evolute of the curve of buoyancy**. The locus of the center of buoyancy (B) as the body tilts is called the **curve of buoyancy**. The metacentre (M) is the center of curvature of the curve of buoyancy.

**Relationship to Course Outcomes:**

*   **CO1 (K3):** This section is heavily reliant on understanding fluid properties (density) and applying them to analyze forces and stability. Calculating $BM$ involves understanding geometric properties (second moment of area) of the fluid's free surface and the submerged volume, which are directly related to the displaced fluid. The stability conditions connect these calculations to the behavior of the body.

**Examples:**

*   **Ships:** Naval architects carefully design the hull of a ship to ensure a positive metacentric height. If a ship is too "tender" (large GM), it will return to upright very quickly, causing discomfort to passengers due to rapid oscillations. If it is too "stiff" (small GM), it might be prone to capsizing.
*   **Floating Docks:** The stability of a floating dock is crucial for its operation. It needs to remain stable even when heavy loads are placed on it.

**Important Points to Remember:**

*   The position of the metacentre (M) is crucial for the stability of floating bodies.
*   The second moment of area ($I$) of the waterplane is critical in determining $BM$. For rectangular waterplanes, $I$ is easily calculated.
*   The metacentric height ($GM$) is a direct measure of stability. A larger positive $GM$ generally means greater stability, but can lead to uncomfortable oscillations.

---

### 3. Practice Questions and Exercises

**Question 1:** A solid cube of side 0.1 m and density 800 kg/m³ is immersed in water (density 1000 kg/m³). Calculate the buoyant force acting on the cube.

**Answer:**
*   Volume of the cube ($V$) = $(0.1 \text{ m})^3 = 0.001 \text{ m}^3$
*   Density of the fluid ($\rho_f$) = 1000 kg/m³
*   Acceleration due to gravity ($g$) = 9.81 m/s²
*   Buoyant Force ($F_B$) = $\rho_f \times V \times g$
*   $F_B = 1000 \text{ kg/m}^3 \times 0.001 \text{ m}^3 \times 9.81 \text{ m/s}^2 = 9.81 \text{ N}$

**Question 2:** A wooden block of dimensions 0.5 m × 0.2 m × 0.1 m floats in water. The density of wood is 600 kg/m³. Determine the depth of the block submerged in water.

**Answer:**
*   Volume of the block ($V_{block}$) = 0.5 m × 0.2 m × 0.1 m = 0.01 m³
*   Density of wood ($\rho_{wood}$) = 600 kg/m³
*   Weight of the block ($W_{block}$) = $V_{block} \times \rho_{wood} \times g = 0.01 \text{ m}^3 \times 600 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 = 58.86 \text{ N}$
*   For floating, Weight of block = Buoyant Force
*   Buoyant Force ($F_B$) = $V_{sub} \times \rho_{water} \times g$
*   Let the submerged depth be $h$. The submerged volume $V_{sub} = 0.5 \text{ m} \times 0.2 \text{ m} \times h = 0.1h \text{ m}^3$
*   $58.86 \text{ N} = (0.1h \text{ m}^3) \times 1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2$
*   $58.86 = 981h$
*   $h = \frac{58.86}{981} \approx 0.06 \text{ m}$
*   The depth submerged is 0.06 m.

**Question 3:** A rectangular pontoon 10 m long, 6 m wide, and 2 m deep has a weight of 3924 kN. It floats in seawater of specific gravity 1.025. If the pontoon is tipped by 5° about its longitudinal axis, find the new position of the center of buoyancy. Also, calculate the metacentric height and state whether the equilibrium is stable.

**Answer:**
*   Weight of pontoon ($W$) = 3924 kN = $3924 \times 10^3$ N
*   Length (L) = 10 m, Width (B) = 6 m, Depth (D) = 2 m
*   Density of seawater ($\rho_{sw}$) = $1.025 \times 1000$ kg/m³ = 1025 kg/m³
*   Acceleration due to gravity ($g$) = 9.81 m/s²

1.  **Submerged Depth (d):**
    For equilibrium, $W = F_B = V_{sub} \times \rho_{sw} \times g$
    $3924 \times 10^3 \text{ N} = (L \times B \times d) \times \rho_{sw} \times g$
    $3924 \times 10^3 = (10 \times 6 \times d) \times 1025 \times 9.81$
    $3924 \times 10^3 = 60d \times 10055.25$
    $d = \frac{3924 \times 10^3}{60 \times 10055.25} \approx 6.50 \text{ m}$

    *Correction:* The depth of the pontoon is 2m. This means the pontoon is *not* completely submerged. The calculation of submerged depth for a pontoon of finite depth needs to be within the physical limits. Assuming the problem implies it *floats*, the submerged depth 'd' must be less than or equal to 2m. If the weight is 3924 kN, the required volume for it to float in seawater would be:
    $V_{sub} = \frac{W}{\rho_{sw} \times g} = \frac{3924 \times 10^3 \text{ N}}{1025 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2} \approx 386.9 \text{ m}^3$.
    However, the total volume of the pontoon is $10 \text{ m} \times 6 \text{ m} \times 2 \text{ m} = 120 \text{ m}^3$. This indicates an inconsistency in the problem statement as the weight is too high for it to float within its depth.

    Let's re-evaluate the question assuming a typical scenario where the pontoon *is* floating and within its physical dimensions. A more realistic weight would be required for a 2m deep pontoon.

    **Let's assume a corrected weight for illustration:** Suppose the pontoon has a weight of 588.6 kN (approx. 60 tonnes).
    $V_{sub} = \frac{588.6 \times 10^3 \text{ N}}{1025 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2} \approx 60 \text{ m}^3$.
    With $L=10$m and $B=6$m, $V_{sub} = 10 \times 6 \times d$.
    $60 \text{ m}^3 = 60 \text{ m}^2 \times d \implies d = 1 \text{ m}$.
    So, let's proceed with a submerged depth of 1 meter. The center of buoyancy (B) will be at the geometric center of the submerged portion, so its distance from the bottom is $d/2 = 1/2 = 0.5$ m.

2.  **Second Moment of Area of the Waterplane (I):**
    The waterplane is a rectangle of 10 m × 6 m. The axis of tilt is the longitudinal axis (along the length).
    $I = \frac{L \times B^3}{12} = \frac{10 \times 6^3}{12} = \frac{10 \times 216}{12} = 180 \text{ m}^4$.

3.  **Metacentric Radius (BM):**
    $BM = \frac{I}{V_{sub}} = \frac{180 \text{ m}^4}{60 \text{ m}^3} = 3 \text{ m}$.

4.  **Metacentric Height (GM):**
    We need the position of the center of gravity (G). Let's assume the pontoon is uniformly loaded, meaning G is at the geometric center of the pontoon, i.e., at a height of 1 m from the bottom.
    *   Distance of B from the bottom = 0.5 m.
    *   Distance of G from the bottom = 1.0 m.
    *   $BG = |\text{Position of G} - \text{Position of B}| = |1.0 - 0.5| = 0.5 \text{ m}$. (Assuming G is above B)
    *   $GM = BM - BG = 3 \text{ m} - 0.5 \text{ m} = 2.5 \text{ m}$.

5.  **New Position of Center of Buoyancy:**
    When tilted by 5°, the new center of buoyancy ($B'$) will be located at a distance $BM \times \sin(\theta)$ from the original center of buoyancy (B) along the line MB. The metacentric height ($GM$) is the distance from G to M. The new buoyant force acts vertically through $B'$. For a small angle $\theta$, the horizontal displacement of the center of buoyancy is approximately $BM \tan \theta$. The position relative to the pontoon's original centerline depends on the tilt.

    More precisely, the metacentre M is at a height $BM$ above B. The line of action of the buoyant force in the tilted position passes through M. For a small tilt $\theta$, the horizontal displacement of B is $BB' \approx BM \sin \theta$. The vertical position of M relative to B is $BM$.

    For a tilt of 5°:
    The metacentric height $GM = 2.5$ m.
    The metacentre M is $2.5$ m above G.
    Since $GM$ is positive, the equilibrium is **stable**.

    *(Note: The original question's weight was too high. The calculation above uses a hypothetical weight for demonstration.)*

**Important Considerations for Stability Calculations:**

*   The accuracy of stability calculations relies heavily on the correct determination of the center of gravity (G) and the metacentre (M).
*   The shape of the hull and the distribution of weight are critical factors.

---

### 4. Relation to Textbooks and Course Outcomes

*   **Textbook Content:**
    *   **Cengel & Cimbala:** Typically covers buoyancy, Archimedes' principle, stability of submerged and floating bodies, including the concepts of G, B, M, and GM. They often provide examples of ships and other floating structures.
    *   **Som & Sikdar:** Similar to Cengel & Cimbala, this textbook will delve into the theoretical basis of buoyancy, the conditions for equilibrium (stable, unstable, neutral), and the calculation of the metacentric height, emphasizing the role of the waterplane area and submerged volume.
    *   **Bansal R.K.:** This book is known for its comprehensive coverage of fluid mechanics and hydraulic machines. It will likely present detailed derivations of the metacentric radius formula and provide numerous examples related to naval architecture and the stability of floating bodies.
    *   **White F.M. (Reference):** Offers advanced treatment and theoretical rigor, potentially including detailed explanations of the geometric properties related to the metacentric radius and stability criteria for complex shapes.
    *   **Fisher & Henly (Reference):** Likely focuses on engineering applications, showcasing how buoyancy and stability principles are applied in real-world scenarios such as offshore structures, docks, and specialized vessels.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K3 - Identify fundamental fluid properties, their relationships and apply them to estimate fluid pressure and hydrostatic forces on bodies):** This topic directly aligns with CO1. Fluid properties like density are used to calculate buoyant force. The concept of hydrostatic pressure beneath the fluid surface is fundamental to understanding why a buoyant force exists. Estimating forces on bodies is a core application.
    *   **Other COs:** While not the primary focus of *this specific topic*, understanding buoyancy can be a precursor to some aspects of CO2 (fluid dynamics principles applied to submerged or floating bodies) and CO5 (understanding how buoyancy affects the performance of certain hydraulic machines, though less common).

---

### 5. Summary and Key Takeaways

*   **Buoyancy:** An upward force exerted by a fluid on a submerged or partially submerged object, equal to the weight of the fluid displaced (Archimedes' Principle).
*   **Buoyant Force ($F_B$):** $\rho_f \times V_{sub} \times g$
*   **Stability of Submerged Bodies:** Determined by the relative positions of the Center of Gravity (G) and Center of Buoyancy (B). G below B = Stable; G above B = Unstable; G coincides with B = Neutral.
*   **Stability of Floating Bodies:** Determined by the position of the Metacentre (M) relative to G. $GM > 0$ (M above G) = Stable; $GM < 0$ (M below G) = Unstable; $GM = 0$ (M coincides with G) = Neutral.
*   **Metacentric Radius ($BM$):** $I / V_{sub}$, where $I$ is the second moment of area of the waterplane about the axis of tilt.
*   **Metacentric Height ($GM$):** $BM - BG$, where $BG$ is the distance between the center of buoyancy and the center of gravity.

This topic is foundational for understanding why objects float and how to ensure their stability, with direct applications in naval architecture and other marine engineering fields.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
