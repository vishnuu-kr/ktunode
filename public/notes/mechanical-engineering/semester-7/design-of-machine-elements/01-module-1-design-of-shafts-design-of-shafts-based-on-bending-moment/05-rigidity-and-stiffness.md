---
title: "Rigidity and Stiffness"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 1: Design of Shafts: Design of Shafts Based on Bending Moment"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d5d"
status: "completed"
scrapedAt: "2026-05-20T18:10:48.350Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 1: Design of Shafts: Design of Shafts Based on Bending Moment

### Topic: Rigidity and Stiffness

---

### 1. Introduction to Rigidity and Stiffness in Shaft Design

Shafts are critical components in power transmission systems. While strength is paramount to prevent failure under stress, **rigidity** and **stiffness** are equally important to ensure proper functioning and prevent excessive deformation that can lead to operational issues or premature failure. This topic focuses on how bending moments affect the rigidity and stiffness of shafts.

**Key Concepts:**

*   **Rigidity:** The ability of a component to resist deformation under load. A rigid shaft deforms very little.
*   **Stiffness:** A measure of the resistance to elastic deformation. It is often quantified by the relationship between load and deflection. For a shaft, stiffness is inversely proportional to deflection under a given load.
*   **Deflection:** The displacement of a shaft from its original position under the action of applied loads.

**Importance:**

*   **Preventing Interference:** Excessive deflection can cause mating components (like gears, pulleys, or bearings) to disengage or interfere, leading to misalignment and increased wear.
*   **Maintaining Accuracy:** In precision machinery, maintaining accurate alignment is crucial. Shaft stiffness ensures this accuracy.
*   **Avoiding Vibrations:** While not directly a measure of stiffness, excessive deflection can contribute to vibrations by changing the natural frequencies of the system.
*   **Bearing Performance:** Proper shaft stiffness is essential for the correct functioning of bearings. Excessive deflection can lead to uneven load distribution on bearing elements.

---

### 2. Understanding Bending Moment and its Effect on Shaft Deflection

As discussed in previous sections on shaft design based on bending moment, applied forces (e.g., from gears, pulleys, flywheels) create bending moments along the shaft. These bending moments cause the shaft to bend, resulting in deflection.

**Relationship between Bending Moment and Deflection:**

The curvature of a bent beam (and a shaft is a type of beam) is directly related to the bending moment and the material's properties and cross-sectional geometry. The fundamental relationship is given by the **Euler-Bernoulli beam theory**:

$$ \frac{M}{I} = E \frac{d^2y}{dx^2} $$

Where:
*   $M$ is the bending moment at a cross-section.
*   $I$ is the moment of inertia (second moment of area) of the shaft's cross-section about the neutral axis.
*   $E$ is the Young's Modulus of the shaft material.
*   $\frac{d^2y}{dx^2}$ is the curvature of the deflected shaft.

**Key Insights:**

*   A higher bending moment ($M$) leads to greater curvature and thus greater deflection.
*   A larger moment of inertia ($I$) for the shaft's cross-section results in less curvature and deflection. This is why shafts are typically made with circular cross-sections, which offer a good strength-to-weight ratio and efficient use of material for resisting bending.
*   A higher Young's Modulus ($E$) for the material means the shaft is stiffer, resulting in less deflection for a given bending moment.

**Derivation of Deflection Formulas:**

By integrating the above equation twice, we can obtain expressions for the slope ($\frac{dy}{dx}$) and the deflection ($y$) along the shaft's length. The specific formulas for deflection depend on the type of loading and support conditions.

**Example:**

Consider a simply supported shaft with a concentrated load $W$ at its center. The maximum bending moment occurs at the center and is $M_{max} = \frac{WL}{4}$, where $L$ is the span between supports. The maximum deflection at the center for a solid circular shaft of diameter $d$ is given by:

$$ \delta_{max} = \frac{WL^3}{48EI} $$

For a solid circular shaft, $I = \frac{\pi d^4}{64}$. Substituting this, we get:

$$ \delta_{max} = \frac{WL^3}{48E(\frac{\pi d^4}{64})} = \frac{16WL^3}{3\pi Ed^4} $$

This formula clearly shows how deflection increases with load ($W$) and span ($L$) and decreases with Young's Modulus ($E$) and the fourth power of the diameter ($d$).

---

### 3. Design Criteria for Rigidity and Stiffness

When designing shafts, engineers must ensure that the deflections are within acceptable limits to guarantee proper operation.

**Acceptable Deflection Limits:**

These limits are typically specified as a fraction of the span length or in absolute units, depending on the application. Common guidelines, often found in design handbooks and textbooks, suggest:

*   **General Applications:** Deflection should not exceed $1/400$ to $1/500$ of the span.
*   **Precision Machinery (e.g., with gears):** Deflection should be limited to $1/1000$ of the span to prevent gear meshing issues.
*   **Bearings:** Deflection at bearing locations should be minimal to ensure proper load distribution.

**(Refer to Bhandari, Chapter on Shafts; Norton, Chapter on Shafts for specific guidelines and examples.)**

**Design Procedure for Stiffness:**

1.  **Determine Loads and Supports:** Identify all applied forces (transverse and axial) and their locations, as well as the shaft's support conditions (e.g., simply supported, fixed, overhanging).
2.  **Calculate Bending Moments:** Determine the bending moment diagram for the shaft, considering all loads. This is crucial for identifying critical deflection points.
3.  **Assume a Shaft Diameter (Initial Guess):** Based on strength calculations or preliminary estimates, assume an initial diameter ($d$).
4.  **Calculate Maximum Deflection:** Using appropriate deflection formulas for the governing loading and support conditions, calculate the maximum expected deflection of the shaft. The choice of formula depends on the configuration (e.g., cantilever, simply supported, etc.) and loading (e.g., point load, distributed load).
5.  **Compare with Allowable Limit:** Compare the calculated deflection with the pre-defined acceptable deflection limit for the application.
6.  **Iterate if Necessary:**
    *   If the calculated deflection exceeds the allowable limit, the shaft is not stiff enough. Increase the shaft diameter or consider using a material with a higher Young's Modulus.
    *   If the calculated deflection is significantly less than the allowable limit, the shaft may be over-designed for stiffness, and the diameter could be reduced to save weight and cost, provided strength requirements are still met.
7.  **Consider Other Design Factors:** Remember that stiffness is only one aspect. The shaft must also be designed for strength (tensile, compressive, torsional, and combined stresses), rigidity (resistance to twisting), and fatigue.

---

### 4. Influence of Material Properties and Cross-Sectional Geometry

The stiffness of a shaft is significantly influenced by its material properties and the shape of its cross-section.

**Material Properties:**

*   **Young's Modulus (E):** This is the primary material property that dictates stiffness in bending. Materials with higher Young's Modulus (e.g., steel alloys) will be stiffer than those with lower values (e.g., aluminum alloys).
    *   **Examples of E values:**
        *   Steel: $\approx 200 \times 10^9 \, N/m^2$ (or 200 GPa)
        *   Aluminum Alloys: $\approx 70 \times 10^9 \, N/m^2$ (or 70 GPa)
        *   Cast Iron: $\approx 100 \times 10^9 \, N/m^2$ (or 100 GPa)

**Cross-Sectional Geometry:**

*   **Moment of Inertia (I):** This geometric property describes how the area of the cross-section is distributed with respect to the neutral axis. For bending, a larger moment of inertia means greater stiffness.
    *   **Solid Circular Shaft (diameter d):** $I = \frac{\pi d^4}{64}$
    *   **Hollow Circular Shaft (outer diameter $d_o$, inner diameter $d_i$):** $I = \frac{\pi}{64}(d_o^4 - d_i^4)$
    *   **Solid Square Shaft (side a):** $I = \frac{a^4}{12}$

**Comparison of Cross-Sections:**

For a given area, a hollow circular shaft is generally stiffer and stronger in bending than a solid circular shaft because the material is distributed further from the neutral axis. This is why hollow shafts are often preferred in high-performance applications where weight saving is critical.

**(Refer to Bhandari, Chapter on Shafts; Norton, Chapter on Shafts; PSG Design Data for formulas and material properties.)**

---

### 5. Torsional Rigidity and Stiffness

While this topic specifically focuses on bending, it's important to acknowledge that shafts also experience torsional loads, which cause twisting. Torsional rigidity relates to the resistance to twisting.

*   **Torsional Rigidity:** Measured by the **Polar Moment of Inertia (J)** of the cross-section and the **Shear Modulus (G)** of the material.
*   **Twisting Angle ($\phi$):** For a given torque $T$ applied over a length $L$, the angle of twist is given by:
    $$ \phi = \frac{TL}{JG} $$

Just as bending deflection needs to be limited, excessive twisting can also lead to operational problems and misalignment. The design for torsional rigidity is often considered alongside bending rigidity.

---

### 6. Practical Considerations and Design Examples

**Case Study:** Designing a drive shaft for a conveyor belt system.

*   **Loads:** Torque from the motor, weight of the belt, and potentially impact loads from materials being conveyed. These loads translate into bending moments due to pulleys and potential torsional moments.
*   **Supports:** Typically supported by bearings at several points along its length.
*   **Stiffness Requirement:** To ensure smooth operation of the conveyor belt and prevent excessive sagging of the belt between support points, the shaft's deflection must be limited.

**Design Process Outline (for Stiffness):**

1.  **Calculate Maximum Bending Moment:** Analyze the forces acting on the shaft (e.g., weight of pulleys, tension in the belt, weight of the shaft itself) to construct a bending moment diagram.
2.  **Assume a Material:** Select a suitable material, e.g., AISI 1045 steel (E = 200 GPa).
3.  **Assume an Initial Diameter:** Based on strength requirements, a diameter of, say, 50 mm might be chosen.
4.  **Calculate Maximum Deflection:** Use the appropriate deflection formula for the critical section and support conditions. For a simply supported shaft with a uniform distributed load (due to its own weight and belt load), the deflection might be calculated.
5.  **Check Against Limit:** If the calculated deflection (e.g., $\delta_{max}$) is greater than $L/400$ (where $L$ is the span between supports), increase the diameter. For instance, increasing the diameter from 50 mm to 60 mm will significantly reduce deflection (as it's proportional to $1/d^4$).
6.  **Reiterate:** Continue adjusting the diameter until both strength and stiffness requirements are met.

**(Refer to Bhandari, Chapter on Shafts for detailed solved examples on shaft design considering both strength and stiffness.)**

---

### 7. Important Points to Remember

*   **Stiffness is inversely proportional to deflection.**
*   **Key factors affecting bending stiffness are Young's Modulus (E) and Moment of Inertia (I).**
*   **Higher E and higher I lead to greater stiffness and less deflection.**
*   **Moment of Inertia (I) is highly dependent on the cross-sectional shape and size (especially the fourth power of diameter/radius).**
*   **Deflection limits are crucial for the proper functioning of mating components and overall machine accuracy.**
*   **Shaft design must consider both strength (failure under stress) and stiffness (excessive deformation).**
*   **Hollow shafts are generally stiffer and lighter for the same strength compared to solid shafts.**
*   **Always refer to design handbooks (Bhandari, PSG, Mahadevan) for standard deflection limits and formulas.**

---

### 8. Alignment with Course Outcomes (COs)

This topic directly contributes to the understanding of shaft design, which is fundamental for modeling transmission systems (CO1). While not directly about specific components like engines or bearings, the principles of load analysis, stress, and deformation are universally applicable in machine element design. The ability to select appropriate materials and geometries based on performance criteria like stiffness is a core aspect of the design process.

*   **CO1: Model suitable transmission system for the stated conditions:** Understanding shaft stiffness is vital for designing the shafts within a transmission system to ensure proper alignment and operation of gears, pulleys, and other components.
*   **(Indirectly supports other COs):** The principles of bending, material properties, and deformation analysis are foundational for designing other machine elements as well.

---

### 9. Practice Questions and Exercises

**Question 1:** A steel shaft is subjected to a bending moment of 2000 Nm. If the shaft is solid circular with a diameter of 60 mm, calculate the maximum bending stress and the radius of curvature. Assume Young's Modulus for steel is 200 GPa.

**Answer:**
*   **Bending Stress ($\sigma_b$):**
    $M = 2000 \, Nm = 2 \times 10^6 \, Nmm$
    $d = 60 \, mm$, so $y_{max} = d/2 = 30 \, mm$
    $I = \frac{\pi d^4}{64} = \frac{\pi (60)^4}{64} \approx 1001.2 \times 10^4 \, mm^4$
    $\sigma_b = \frac{My_{max}}{I} = \frac{(2 \times 10^6 \, Nmm)(30 \, mm)}{1001.2 \times 10^4 \, mm^4} \approx 6 \, N/mm^2 = 6 \, MPa$

*   **Radius of Curvature (R):**
    $R = \frac{EI}{M}$
    $E = 200 \, GPa = 200 \times 10^3 \, N/mm^2$
    $R = \frac{(200 \times 10^3 \, N/mm^2)(1001.2 \times 10^4 \, mm^4)}{2 \times 10^6 \, Nmm} \approx 1001.2 \, m$

**Question 2:** A simply supported shaft of span 2 meters is subjected to a concentrated load of 5 kN at its center. If the allowable deflection is $L/500$, determine the minimum diameter required for a solid circular steel shaft. Assume $E = 200 \, GPa$.

**Answer:**
*   **Given:** $L = 2 \, m = 2000 \, mm$, $W = 5 \, kN = 5000 \, N$.
*   **Allowable deflection:** $\delta_{allow} = \frac{L}{500} = \frac{2000 \, mm}{500} = 4 \, mm$.
*   **Maximum deflection formula for simply supported beam with center load:** $\delta_{max} = \frac{WL^3}{48EI}$
*   **Moment of Inertia for solid circular shaft:** $I = \frac{\pi d^4}{64}$
*   **Substitute and solve for d:**
    $4 \, mm = \frac{(5000 \, N)(2000 \, mm)^3}{48 (200 \times 10^3 \, N/mm^2) (\frac{\pi d^4}{64})}$
    $4 = \frac{5 \times 10^3 \times 8 \times 10^9}{48 \times 200 \times 10^3 \times \frac{\pi d^4}{64}}$
    $4 = \frac{40 \times 10^{12}}{6.137 \times 10^{11} \times d^4}$
    $d^4 = \frac{40 \times 10^{12} \times 6.137 \times 10^{11}}{6.137 \times 10^{11} \times 4}$  (This simplification is incorrect)

    Let's redo the calculation more carefully:
    $4 = \frac{5000 \times (2000)^3}{48 \times 200 \times 10^3 \times \frac{\pi d^4}{64}}$
    $4 = \frac{5000 \times 8 \times 10^9}{9.6 \times 10^6 \times \frac{\pi d^4}{64}}$
    $4 = \frac{40 \times 10^{12}}{150 \times 10^3 \times \pi d^4}$
    $4 = \frac{40 \times 10^{12}}{471.238 \times 10^3 \times d^4}$
    $d^4 = \frac{40 \times 10^{12}}{471.238 \times 10^3 \times 4}$
    $d^4 = \frac{40 \times 10^{12}}{1884.95 \times 10^3}$
    $d^4 = 21.22 \times 10^9 \, mm^4$
    $d = (21.22 \times 10^9)^{1/4} \, mm$
    $d \approx 68.1 \, mm$

    **Minimum required diameter is approximately 68.1 mm.** A standard size slightly larger, like 70 mm, would be chosen.

---

This concludes the notes on Rigidity and Stiffness in Shaft Design, focusing on their relation to bending moments. Remember to consult the specified textbooks for detailed derivations, additional examples, and more comprehensive design guidelines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
