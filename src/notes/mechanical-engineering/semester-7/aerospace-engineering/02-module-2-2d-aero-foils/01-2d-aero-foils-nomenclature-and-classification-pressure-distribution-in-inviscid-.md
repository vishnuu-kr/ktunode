---
title: "2D aero foils -Nomenclature and classification- pressure distribution in inviscid and real flows"
subject: "AEROSPACE ENGINEERING"
module: "Module 2: 2D aero foils "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464056"
status: "completed"
scrapedAt: "2026-05-20T18:10:07.831Z"
---
# AEROSPACE ENGINEERING: Module 2 - 2D Aerofoils

## Topic: Nomenclature and Classification, Pressure Distribution in Inviscid and Real Flows

### Learning Outcomes:

*   Understand the basic nomenclature used to describe a 2D aerofoil.
*   Classify different types of 2D aerofoils based on their characteristics.
*   Comprehend the concept of pressure distribution over an aerofoil.
*   Analyze the pressure distribution in inviscid flow and its implications for lift generation.
*   Understand the differences and implications of pressure distribution in real (viscous) flows, including the phenomenon of boundary layer separation.

### Course Outcomes Alignment:

*   **CO1 (K2):** This topic directly contributes to understanding the "Theory of 2D Aerofoils" by defining its fundamental components and how flow interacts with them, leading to lift.

---

## 1. 2D Aerofoil Nomenclature

The shape of a 2D aerofoil is crucial for its aerodynamic performance. Specific terms are used to define its geometry.

### Key Concepts and Definitions:

*   **Chord Line:** An imaginary straight line connecting the leading edge to the trailing edge of the aerofoil. It's a reference line for defining other geometric properties.
    *   **Chord Length (c):** The length of the chord line.
*   **Leading Edge:** The foremost point of the aerofoil that first encounters the airflow.
*   **Trailing Edge:** The rearmost point of the aerofoil where the airflow separates and rejoins.
*   **Mean Camber Line:** A line drawn midway between the upper and lower surfaces of the aerofoil.
*   **Camber:** The maximum distance between the chord line and the mean camber line. It dictates the basic curvature of the aerofoil.
    *   **Maximum Camber (y_c_max):** The largest distance between the chord line and the mean camber line.
    *   **Location of Maximum Camber (x_c):** The position of the maximum camber along the chord, usually expressed as a fraction of the chord length (e.g., 40% c).
*   **Thickness:** The maximum distance between the upper and lower surfaces, measured perpendicular to the chord line.
    *   **Maximum Thickness (t_max):** The largest distance between the upper and lower surfaces.
    *   **Location of Maximum Thickness (x_t):** The position of the maximum thickness along the chord, usually expressed as a fraction of the chord length (e.g., 30% c).
*   **Aerofoil Profile Thickness Distribution:** How the thickness varies along the chord line.

### Important Points to Remember:

*   The chord line is fundamental for defining angles of attack and locating features.
*   Camber is a primary determinant of lift characteristics, especially at zero angle of attack.
*   Thickness affects drag and the stall characteristics.

### Referencing:

*   **Kermode, Barnard & Philpott:** Likely covers basic aerodynamic shapes and their definitions in early chapters.
*   **Anderson (Fundamentals of Aerodynamics):** Provides detailed geometric descriptions and standard conventions for aerofoil parameters.

---

## 2. Classification of 2D Aerofoils

Aerofoils can be classified in several ways, broadly based on their shape and intended application.

### Key Concepts and Definitions:

*   **Symmetrical Aerofoils:** Mean camber line coincides with the chord line (zero camber). They produce no lift at zero angle of attack. Useful for high-speed applications where zero lift drag is important.
*   **Cambered Aerofoils:** Have a non-zero camber, meaning the mean camber line is curved. They can generate lift even at zero angle of attack.
*   **NACA Aerofoils:** A widely used classification system developed by the National Advisory Committee for Aeronautics (NACA). It uses a numerical code to describe aerofoil geometry.
    *   **NACA Four-Digit Series:**
        *   First digit: Maximum camber (as % of chord).
        *   Second digit: Location of maximum camber (as % of chord).
        *   Last two digits: Maximum thickness (as % of chord).
        *   *Example: NACA 2412 - 2% camber, located at 40% chord, 12% maximum thickness.*
    *   **NACA Six-Series:** Designed for laminar flow at specific Reynolds numbers, characterized by a broader region of low pressure.
    *   **NACA Airfoil Series (e.g., NACA 00xx):** Symmetrical aerofoils where the first two digits are zero.
*   **Laminar Flow Aerofoils:** Designed to maintain laminar flow over a larger portion of the surface, reducing skin friction drag. Often have very smooth profiles and a wider, flatter chordwise pressure distribution.
*   **Supercritical Aerofoils:** Designed for efficient operation at transonic speeds (Mach numbers near 1). They are typically asymmetrical with a flattened upper surface and a reflexed trailing edge to delay the formation of shock waves.

### Important Points to Remember:

*   Aerofoil classification helps in selecting the appropriate aerofoil for a given flight condition.
*   NACA nomenclature is a standardized system for describing aerofoil shapes.
*   The choice of aerofoil significantly impacts lift, drag, and stall characteristics.

### Referencing:

*   **Anderson (Fundamentals of Aerodynamics):** Extensive discussion on aerofoil series and their design principles.
*   **Kermode, Barnard & Philpott:** May introduce early classifications and concepts of camber and thickness.
*   **Houghton, Carpenter, Collicott, Valentine:** Likely provides a comprehensive overview of various aerofoil families and their historical development.

### Practice Question 1:

An aircraft wing uses an NACA 4415 aerofoil. Describe the key geometric features of this aerofoil based on its NACA designation.

**Answer:**
The NACA 4415 aerofoil has:
*   Maximum camber of 4% of the chord length.
*   The maximum camber is located at 40% of the chord length from the leading edge.
*   The maximum thickness is 15% of the chord length.

---

## 3. Pressure Distribution in Inviscid Flow

In inviscid flow (where viscosity is neglected), the fluid particles flow smoothly over the aerofoil without friction. The pressure distribution is governed by Bernoulli's principle and the continuity equation.

### Key Concepts and Definitions:

*   **Bernoulli's Principle:** For a steady, incompressible, inviscid flow, the sum of static pressure, dynamic pressure, and potential energy per unit volume is constant along a streamline.
    *   $P + \frac{1}{2} \rho V^2 + \rho g h = \text{constant}$
    *   For aerodynamic analysis at a constant altitude, we focus on $P + \frac{1}{2} \rho V^2 = \text{constant}$.
*   **Continuity Equation:** For incompressible flow, the mass flow rate is constant. $A_1 V_1 = A_2 V_2$.
*   **Flow Acceleration and Deceleration:** As the cross-sectional area available to the flow changes (due to the aerofoil's shape), the flow velocity changes.
    *   Where the area decreases (constriction), velocity increases (as per continuity).
    *   Where the area increases (expansion), velocity decreases.
*   **Pressure Coefficient (C_p):** A dimensionless quantity representing the pressure at a point on the aerofoil surface relative to the freestream static pressure.
    *   $C_p = \frac{P - P_\infty}{\frac{1}{2} \rho_\infty V_\infty^2}$
    *   $P$: Static pressure at the point.
    *   $P_\infty$: Freestream static pressure.
    *   $\rho_\infty$: Freestream density.
    *   $V_\infty$: Freestream velocity.
*   **Lift:** The net force acting perpendicular to the direction of the freestream. In inviscid flow, lift is generated due to a difference in pressure between the upper and lower surfaces.
    *   Higher velocity on the upper surface leads to lower static pressure (Bernoulli's principle).
    *   Lower velocity on the lower surface leads to higher static pressure.
    *   This pressure difference creates an upward force (lift).
*   **Circulation ($\Gamma$):** A key concept in inviscid, potential flow theory (e.g., Kutta-Joukowski theorem). It's a measure of the net rotation of the fluid around the aerofoil. Circulation is directly related to lift.
    *   Lift per unit span ($L'$) is given by $L' = \rho_\infty V_\infty \Gamma$.
*   **Kutta Condition:** In inviscid flow, for a finite lift to be generated, the flow must leave the trailing edge smoothly. This implies that the velocity at the trailing edge must be finite, not infinite, and the circulation around the aerofoil must adjust to satisfy this.

### Pressure Distribution Characteristics (Inviscid Flow):

*   **Upper Surface:** The upper surface of a cambered aerofoil is generally more curved. This causes the airflow to accelerate more, resulting in a significant decrease in static pressure (low pressure region). The $C_p$ values are typically negative and large in magnitude.
*   **Lower Surface:** The lower surface is less curved or even curved in the opposite direction. This leads to less acceleration or even deceleration of the airflow, resulting in higher static pressure (positive $C_p$ values).
*   **Leading Edge:** High velocity and very low pressure (most negative $C_p$). This point is called the stagnation point if the flow has zero velocity.
*   **Trailing Edge:** In ideal inviscid flow, the streamlines meet at the trailing edge, and the pressure should theoretically recover to the freestream static pressure.

### Visualizing Pressure Distribution:

*   Pressure distribution is often plotted as $C_p$ versus the chordwise position ($x/c$).
*   A typical $C_p$ plot for a cambered aerofoil at a positive angle of attack shows a deep "scoop" (very negative $C_p$) on the upper surface and a shallower, less negative, or even positive region on the lower surface.

### Important Points to Remember:

*   Inviscid flow theory provides a fundamental understanding of lift generation due to pressure differences.
*   Bernoulli's principle is central to relating velocity and pressure changes.
*   The Kutta condition ensures realistic flow behavior at the trailing edge.
*   The $C_p$ distribution directly indicates where high and low pressure regions exist.

### Referencing:

*   **Anderson (Introduction to Flight):** Excellent explanation of Bernoulli's principle and its application to lift.
*   **Anderson (Fundamentals of Aerodynamics):** Detailed mathematical treatment of potential flow and circulation.
*   **Kermode, Barnard & Philpott:** Introduces basic aerodynamic forces and their relation to pressure.

---

## 4. Pressure Distribution in Real Flows (Viscous Flows)

Real flows are affected by viscosity, which introduces phenomena like the boundary layer and flow separation, significantly altering the pressure distribution compared to inviscid flow.

### Key Concepts and Definitions:

*   **Viscosity:** The internal friction within a fluid that resists relative motion between adjacent layers.
*   **Boundary Layer:** A thin layer of fluid near the aerofoil surface where viscous effects are significant. Within the boundary layer, the fluid velocity changes from zero at the surface (no-slip condition) to the freestream velocity outside the boundary layer.
*   **No-Slip Condition:** At the surface of an object, the fluid velocity is zero.
*   **Types of Boundary Layers:**
    *   **Laminar Boundary Layer:** Fluid particles move in smooth, orderly layers. Lower skin friction drag.
    *   **Turbulent Boundary Layer:** Fluid particles move in a chaotic, randomized manner, with eddies and mixing. Higher skin friction drag but more resistant to separation.
*   **Skin Friction Drag:** Drag due to the shear stress exerted by the fluid on the aerofoil surface.
*   **Flow Separation:** The detachment of the boundary layer from the aerofoil surface. This occurs when the boundary layer encounters an adverse pressure gradient (pressure increasing in the direction of flow), causing the velocity in the boundary layer to decrease to zero or even reverse.
    *   **Adverse Pressure Gradient:** Occurs where the flow decelerates, typically on the rearward portions of an aerofoil.
*   **Stall:** A condition where the angle of attack is increased beyond a critical point, leading to significant flow separation over a large portion of the aerofoil, resulting in a dramatic loss of lift and a sharp increase in drag.
*   **Wake:** The region of disturbed flow behind the aerofoil after separation.

### Pressure Distribution Characteristics (Real Flows):

*   **Upper Surface (Forward part):** Similar to inviscid flow, the boundary layer is generally thin, and the pressure distribution is characterized by acceleration and low pressure.
*   **Upper Surface (Rearward part):** As the flow moves towards the trailing edge, the cross-sectional area effectively increases (relative to the accelerating flow), creating an adverse pressure gradient.
    *   The boundary layer, being a region of slower-moving fluid, is highly susceptible to this adverse pressure gradient.
    *   If the adverse pressure gradient is strong enough, the boundary layer can separate.
*   **Effect of Separation on Pressure Distribution:**
    *   **Reduced Lift:** Separation causes the low pressure region on the upper surface to become less intense because the fluid is no longer effectively "attached" to the surface to maintain high velocities and low pressures.
    *   **Increased Drag:** The separated flow creates a larger wake region with lower momentum, leading to a significant increase in pressure drag (also known as form drag or profile drag).
    *   **Pressure Recovery:** The pressure on the aft part of the aerofoil does not recover to the freestream static pressure as predicted by inviscid theory. Instead, the pressure remains relatively low due to the separated flow.
*   **Turbulent vs. Laminar Boundary Layers:**
    *   A turbulent boundary layer has more momentum than a laminar one and is therefore more resistant to separation. This is why aerofoils designed for higher Reynolds numbers often have turbulent boundary layers over a significant portion of their chord.
    *   Laminar separation typically occurs earlier (at a lower angle of attack) and at a point of milder adverse pressure gradient compared to turbulent separation.
*   **Re-attachment:** Sometimes, separated flow can re-attach downstream, forming a region of recirculation. This is seen in "bubble" separation.

### Visualizing Pressure Distribution (Real Flows):

*   The $C_p$ plot for a real flow will show:
    *   Similar low $C_p$ values on the forward upper surface as inviscid flow.
    *   A more gradual decrease in $C_p$ or even a leveling off as the adverse pressure gradient increases.
    *   A point where the $C_p$ begins to rise more rapidly (or less rapidly depending on the separation type) as separation occurs, indicating reduced pressure recovery compared to inviscid flow.
    *   The overall lift-curve slope (slope of $C_l$ vs $\alpha$ plot) is reduced.
    *   At stall, the $C_p$ distribution changes dramatically.

### Important Points to Remember:

*   Viscosity is the primary cause of boundary layer formation and flow separation.
*   Flow separation significantly degrades aerodynamic performance, reducing lift and increasing drag.
*   The nature of the boundary layer (laminar vs. turbulent) affects its susceptibility to separation.
*   Understanding pressure distribution in real flows is crucial for predicting stall and other performance limitations.

### Referencing:

*   **Anderson (Fundamentals of Aerodynamics):** Chapters on boundary layers, viscous effects, drag, and stall are highly relevant.
*   **Houghton, Carpenter, Collicott, Valentine:** Provides in-depth treatment of viscous flow phenomena and their impact on aerofoil performance.
*   **Kermode, Barnard & Philpott:** May introduce concepts of drag and stall in a more introductory manner.

### Practice Question 2:

Explain why a turbulent boundary layer is generally more resistant to flow separation than a laminar boundary layer.

**Answer:**
A turbulent boundary layer has more kinetic energy due to the mixing of faster-moving fluid from outside the boundary layer into the slower-moving fluid near the surface. This higher momentum within the turbulent boundary layer allows it to overcome a stronger adverse pressure gradient before it separates from the surface, unlike a laminar boundary layer which has a lower momentum and separates more easily.

---

## Summary and Key Takeaways:

*   **Nomenclature:** Precise definitions of terms like chord, camber, and thickness are essential for describing aerofoils.
*   **Classification:** Aerofoils are categorized to suit various flight regimes and performance requirements, with NACA designations providing a standard.
*   **Inviscid Flow:**
    *   Lift is generated by pressure differences arising from velocity variations predicted by Bernoulli's principle.
    *   $C_p$ distribution shows low pressure on the upper surface and higher pressure on the lower surface.
    *   Idealized flow with no friction or separation.
*   **Real Flows (Viscous Flow):**
    *   Viscosity creates a boundary layer where flow is slower.
    *   Adverse pressure gradients on the aft portion of the aerofoil can cause the boundary layer to separate.
    *   Separation leads to reduced lift and increased drag, significantly altering the actual pressure distribution compared to inviscid predictions.
    *   The type of boundary layer (laminar vs. turbulent) impacts separation characteristics.

---

This set of notes covers the fundamental aspects of 2D aerofoil nomenclature, classification, and the critical differences in pressure distribution between inviscid and real flows, directly addressing CO1. The explanations provide the knowledge base (K2) required to understand the behavior of aerofoils in various conditions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
