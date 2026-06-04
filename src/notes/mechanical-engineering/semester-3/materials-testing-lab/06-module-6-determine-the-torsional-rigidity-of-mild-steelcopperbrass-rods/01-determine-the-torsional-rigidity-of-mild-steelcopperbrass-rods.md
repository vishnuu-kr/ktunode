---
title: "Determine the torsional rigidity of mild steel/copper/brass rods."
subject: "MATERIALS TESTING LAB"
module: "Module 6: Determine the torsional rigidity of mild steel/copper/brass rods."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e7a"
status: "completed"
scrapedAt: "2026-05-20T17:50:22.325Z"
---
# MATERIALS TESTING LAB - Module 6: Torsional Rigidity of Mild Steel/Copper/Brass Rods

## 1. Introduction to Torsion and Torsional Rigidity

### 1.1 What is Torsion?

Torsion is a type of deformation that occurs when an object is twisted or subjected to a twisting force. This force is called a **torque**, which is a rotational force applied about an axis.

*   **Definition:** Torque ($T$) is the product of a force ($F$) and the perpendicular distance ($r$) from the axis of rotation to the line of action of the force. Mathematically, $T = F \times r$.
*   **Units:** Torque is typically measured in Newton-meters (Nm) or pound-feet (lb-ft).

### 1.2 Torsional Rigidity (Modulus of Rigidity)

Torsional rigidity, also known as the **modulus of rigidity** ($G$) or shear modulus, is a material property that quantifies its resistance to angular deformation under torsion. It relates the applied torque to the resulting angle of twist.

*   **Definition:** The modulus of rigidity is defined as the ratio of shear stress ($\tau$) to shear strain ($\gamma$) within the elastic limit of the material.
    $$ G = \frac{\tau}{\gamma} $$
*   **Units:** The modulus of rigidity has units of stress (e.g., Pascals (Pa) or psi).
*   **Significance:** A higher modulus of rigidity indicates that the material is stiffer and will deform less under a given torque.

**(Refer to Callister's Materials Science and Engineering, Chapter 6: Mechanical Properties for definitions of stress and strain. Kuhn & Medlin, Volume 8, Chapter 2: Mechanical Testing: Principles discusses fundamental deformation concepts.)**

## 2. Theoretical Background and Governing Equations

### 2.1 Shear Stress and Shear Strain in a Circular Shaft

When a circular rod is subjected to a torque, it experiences shear stresses and shear strains.

*   **Shear Stress ($\tau$):** The shear stress is not uniform across the cross-section of the rod. It is zero at the center and maximum at the outer surface. For a circular shaft of radius $R$ subjected to a torque $T$, the shear stress at a radial distance $\rho$ from the center is given by:
    $$ \tau = \frac{T \rho}{J} $$
    where:
    *   $T$ is the applied torque.
    *   $\rho$ is the radial distance from the center of the shaft.
    *   $J$ is the **polar moment of inertia** of the cross-section. For a solid circular shaft of radius $R$, $J = \frac{\pi R^4}{2}$. For a hollow shaft with outer radius $R_o$ and inner radius $R_i$, $J = \frac{\pi}{2}(R_o^4 - R_i^4)$.

*   **Shear Strain ($\gamma$):** The shear strain is also not uniform. It is proportional to the radial distance from the center. The maximum shear strain occurs at the outer surface.
    $$ \gamma = \frac{\rho \phi}{L} $$
    where:
    *   $\phi$ is the total angle of twist (in radians) over the length $L$.
    *   $L$ is the length of the shaft.

**(Refer to Gere & Goodno, Chapter 7: Torsion for detailed derivation of stress and strain distribution in shafts.)**

### 2.2 Relationship between Torque, Angle of Twist, and Modulus of Rigidity

Combining the definitions of shear stress, shear strain, and the modulus of rigidity, we can derive the fundamental equation for the angle of twist:

*   From $G = \frac{\tau}{\gamma}$, we have $\tau = G \gamma$.
*   Substituting the expressions for $\tau$ and $\gamma$:
    $$ G \left(\frac{\rho \phi}{L}\right) = \frac{T \rho}{J} $$
*   Simplifying and solving for the angle of twist $\phi$:
    $$ \phi = \frac{T L}{G J} $$
*   Rearranging to find the modulus of rigidity $G$:
    $$ G = \frac{T L}{J \phi} $$

**Important Note:** The angle of twist $\phi$ must be in radians for this formula to be valid.

### 2.3 Calculating Torsional Rigidity from Experimental Data

In a torsional testing machine, we apply a torque ($T$) and measure the corresponding angle of twist ($\phi$) over a known length ($L$) of the specimen. We also know the geometry of the specimen (diameter or radius $R$, to calculate $J$).

1.  **Calculate the Polar Moment of Inertia ($J$):** For a solid circular rod of diameter $D$, $R = D/2$.
    $$ J = \frac{\pi (D/2)^4}{2} = \frac{\pi D^4}{32} $$
2.  **Determine the Torque-Angle of Twist Relationship:** Plot the applied torque ($T$) against the measured angle of twist ($\phi$). This plot should be linear within the elastic limit.
3.  **Calculate the Slope of the T- $\phi$ Curve:** The slope of this linear portion is $\frac{\Delta T}{\Delta \phi}$.
4.  **Calculate the Modulus of Rigidity ($G$):** From the equation $\phi = \frac{T L}{G J}$, we can see that $\frac{\Delta T}{\Delta \phi} = \frac{G J}{L}$. Therefore,
    $$ G = \frac{(\text{Slope of T- $\phi$ curve}) \times L}{J} $$

**(Refer to Kuhn & Medlin, Volume 8, Chapter 4: Torsion Testing for experimental procedures and data analysis.)**

## 3. Experimental Setup and Procedure

### 3.1 Materials to be Tested

*   Mild Steel Rod
*   Copper Rod
*   Brass Rod

**(These materials are chosen for their common use in engineering applications and their distinct mechanical properties.)**

### 3.2 Equipment

*   **Torsion Testing Machine:** A universal testing machine or a dedicated torsion testing machine capable of applying controlled torque and measuring the angle of twist.
*   **Specimen Grips:** Fixtures to securely hold the ends of the rod specimen in the testing machine.
*   **Torque Transducer:** Measures the applied torque.
*   **Angular Displacement Sensor (Torsion Angle Sensor):** Measures the angle of twist.
*   **Measuring Instruments:** Vernier caliper or micrometer to accurately measure the diameter of the specimen.

### 3.3 Specimen Preparation

1.  **Dimensions:** Obtain cylindrical rod specimens of specified length ($L$) and diameter ($D$). Ensure the diameter is uniform along the gauge length.
2.  **Marking:** Mark a gauge length ($L$) on the specimen where the angle of twist will be measured. This ensures that the measured twist is over a consistent length.
3.  **Surface Finish:** Ensure the surface of the specimen is relatively smooth to avoid stress concentrations.

### 3.4 Experimental Procedure

1.  **Measure Dimensions:** Accurately measure the diameter ($D$) of the specimen at multiple points along the gauge length and calculate the average diameter. Measure the gauge length ($L$).
2.  **Install Specimen:** Securely mount one end of the specimen in the fixed grip of the torsion testing machine and the other end in the rotating grip. Ensure the marked gauge length is within the grips or clearly visible.
3.  **Zero Instruments:** Zero the torque and angular displacement readings.
4.  **Apply Torque:** Apply torque to the specimen at a controlled rate.
5.  **Record Data:** Continuously record the applied torque ($T$) and the corresponding angle of twist ($\phi$) as the torque is increased. Continue until the elastic limit is approached or exceeded (depending on the experiment's scope).
6.  **Repeat:** Repeat the procedure for each material (mild steel, copper, brass).

**(Important Point to Remember:** Ensure the specimen is properly gripped to prevent slippage, which can lead to inaccurate measurements. Apply torque gradually to observe the linear region of the T- $\phi$ curve.)

## 4. Data Analysis and Calculations

### 4.1 Data Tabulation

Create a table to record the measured torque and angle of twist for each specimen.

| Specimen Material | Diameter (D) (mm) | Gauge Length (L) (mm) | Applied Torque (T) (Nm) | Angle of Twist ($\phi$) (degrees) | Angle of Twist ($\phi$) (radians) |
| :---------------- | :---------------- | :-------------------- | :---------------------- | :-------------------------------- | :-------------------------------- |
| Mild Steel        |                   |                       | ...                     | ...                               | ...                               |
| Copper            |                   |                       | ...                     | ...                               | ...                               |
| Brass             |                   |                       | ...                     | ...                               | ...                               |

### 4.2 Calculations

For each material:

1.  **Convert Angle of Twist to Radians:** If the angle of twist is measured in degrees, convert it to radians using the formula: $\phi_{\text{radians}} = \phi_{\text{degrees}} \times \frac{\pi}{180}$.
2.  **Calculate Polar Moment of Inertia ($J$):**
    $$ J = \frac{\pi D^4}{32} $$
    (Ensure $D$ is in meters for consistent units with torque in Nm.)
3.  **Plot Torque vs. Angle of Twist:** Plot $T$ on the y-axis and $\phi$ (in radians) on the x-axis.
4.  **Determine the Slope:** Identify the linear (elastic) region of the T- $\phi$ plot and calculate its slope ($\frac{\Delta T}{\Delta \phi}$).
5.  **Calculate Modulus of Rigidity ($G$):**
    $$ G = \frac{(\text{Slope of T- $\phi$ curve}) \times L}{J} $$
    (Ensure $L$ is in meters and $J$ is in m$^4$ for $G$ in Pa.)

### 4.3 Expected Results and Interpretation

*   **Mild Steel:** Generally has a higher modulus of rigidity compared to copper and brass.
*   **Copper:** Softer and more ductile, expected to have a lower modulus of rigidity.
*   **Brass:** An alloy of copper and zinc, its properties can vary, but typically falls between steel and pure copper in terms of stiffness.

**(CO1: Evaluate the mechanical properties... You will evaluate the torsional rigidity (a mechanical property) of different materials. CO4: Utilize experimental techniques... This involves applying the experimental procedure and analyzing the data.)**

## 5. Relating Microstructure to Torsional Rigidity (CO2)

The modulus of rigidity ($G$) is primarily an intrinsic material property related to the atomic bonding between atoms.

*   **Atomic Bonding:** Materials with stronger interatomic bonds (e.g., metallic bonds with more delocalized electrons) tend to have higher moduli of rigidity. The resistance to shear deformation is directly linked to the force required to slide atomic planes past each other.
*   **Crystal Structure:** While less dominant than atomic bonding, crystal structure can influence $G$. For metals, face-centered cubic (FCC) and body-centered cubic (BCC) structures have different slip systems, which can affect shear resistance.
*   **Alloying:** Alloying elements can alter the interatomic forces and introduce dislocations and grain boundaries.
    *   **Solid Solution Strengthening:** Solute atoms distort the crystal lattice, hindering the movement of dislocations and increasing the resistance to shear, thus potentially increasing $G$. Brass, being an alloy of copper, exhibits this.
    *   **Grain Boundaries:** Fine grain sizes can increase strength and stiffness by impeding dislocation motion.

**(Refer to Callister's Materials Science and Engineering, Chapter 6: Mechanical Properties and Chapter 11: Mechanical Behavior – Microstructural Influences for detailed explanations on bonding and microstructure-property relationships.)**

## 6. Application of Torsional Rigidity in Design (CO3 & CO5)

The torsional rigidity of a material is a crucial parameter in the design of components subjected to twisting loads.

*   **Shafts in Power Transmission:** Axles, drive shafts in vehicles, propeller shafts in ships, and shafts in rotating machinery (e.g., motors, turbines) are designed to transmit torque. Their torsional rigidity determines how much they twist under load, which can affect the alignment of connected components and the efficiency of power transmission.
    *   **Example:** A stiff driveshaft (high $G$) will twist less under torque, leading to more precise power delivery and potentially less vibration.
*   **Springs:** Torsion springs (e.g., in door hinges, vehicle suspensions) are designed to store energy through twisting. Their stiffness (torsional spring constant) is directly related to the modulus of rigidity of the material.
*   **Structural Beams:** While primarily designed for bending, some structural elements may also experience torsional loads. The torsional rigidity of these elements influences their overall stability and response to complex loading conditions.

**(CO3: Analyse the effect of design features... The choice of material with a specific $G$ is a key design feature. CO5: Apply fundamental engineering principles... Understanding the T- $\phi$ relationship allows engineers to predict component behavior.)**

## 7. Practice Questions and Exercises

**Question 1:** A solid steel rod of diameter 20 mm and gauge length 500 mm is subjected to a torque of 100 Nm. If the modulus of rigidity of steel is 80 GPa, calculate the angle of twist in degrees.

**Answer 1:**
*   $D = 20 \text{ mm} = 0.020 \text{ m}$
*   $L = 500 \text{ mm} = 0.500 \text{ m}$
*   $T = 100 \text{ Nm}$
*   $G = 80 \text{ GPa} = 80 \times 10^9 \text{ Pa}$

First, calculate the polar moment of inertia ($J$):
$$ J = \frac{\pi D^4}{32} = \frac{\pi (0.020 \text{ m})^4}{32} = 1.57 \times 10^{-8} \text{ m}^4 $$

Now, calculate the angle of twist ($\phi$) in radians:
$$ \phi = \frac{T L}{G J} = \frac{(100 \text{ Nm}) \times (0.500 \text{ m})}{(80 \times 10^9 \text{ Pa}) \times (1.57 \times 10^{-8} \text{ m}^4)} = \frac{50}{1256} \text{ radians} \approx 0.0398 \text{ radians} $$

Convert to degrees:
$$ \phi_{\text{degrees}} = 0.0398 \text{ radians} \times \frac{180}{\pi} \approx 2.28^\circ $$

**Question 2:** From a torsion test, the following data was obtained for a copper rod:
*   Diameter $D = 15$ mm
*   Gauge Length $L = 300$ mm
*   Slope of the Torque vs. Angle of Twist (in radians) curve = $75 \text{ Nm/radian}$

Calculate the modulus of rigidity ($G$) for copper.

**Answer 2:**
*   $D = 15 \text{ mm} = 0.015 \text{ m}$
*   $L = 300 \text{ mm} = 0.300 \text{ m}$
*   Slope $\frac{\Delta T}{\Delta \phi} = 75 \text{ Nm/radian}$

First, calculate the polar moment of inertia ($J$):
$$ J = \frac{\pi D^4}{32} = \frac{\pi (0.015 \text{ m})^4}{32} = 4.97 \times 10^{-9} \text{ m}^4 $$

Now, use the relationship: Slope $= \frac{G J}{L}$
Rearranging for $G$:
$$ G = \frac{\text{Slope} \times L}{J} = \frac{(75 \text{ Nm/radian}) \times (0.300 \text{ m})}{4.97 \times 10^{-9} \text{ m}^4} $$
$$ G \approx 4.53 \times 10^9 \text{ Pa} = 4.53 \text{ GPa} $$

**Question 3:** Why is the modulus of rigidity a more fundamental material property than, for example, yield strength? (Hint: Consider the atomic-level behavior and the nature of the deformation.)

**Answer 3:** The modulus of rigidity ($G$) represents the elastic stiffness of a material, which is directly related to the strength of interatomic bonds. Within the elastic limit, deformation is a reversible stretching and bending of these bonds. Yield strength, on the other hand, relates to the onset of permanent plastic deformation, which involves the movement of dislocations. Dislocation motion is influenced by microstructure, defects, and processing history, making yield strength more sensitive to these factors than the intrinsic elastic modulus. Therefore, $G$ is considered a more fundamental property tied to the nature of the atomic bonding itself.

## 8. Important Points to Remember

*   **Units:** Maintain consistent units throughout your calculations (e.g., meters for length and diameter, Pascals for stress, Newton-meters for torque, radians for angle of twist).
*   **Elastic Limit:** The derived formulas for stress and strain distribution are valid only within the elastic region of the material's behavior. Experimental data for calculating $G$ must be taken from the linear portion of the T- $\phi$ graph.
*   **Polar Moment of Inertia ($J$):** This is a geometric property of the cross-section and is crucial for torsional calculations.
*   **Angle of Twist:** Always convert the measured angle of twist to radians for use in the standard formulas.
*   **Microstructure-Property Relationship:** Understand that while atomic bonding dictates the fundamental $G$, alloying and processing can modify it by influencing dislocation mobility and lattice structure.
*   **Design Implications:** The torsional rigidity of a material directly impacts the performance of components subjected to torque, influencing their stiffness, deformation, and suitability for specific applications.

This comprehensive set of notes covers the theoretical aspects, experimental procedures, data analysis, and practical implications of determining the torsional rigidity of mild steel, copper, and brass rods, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
