---
title: "Investigate the effect of coil type (close-coiled vs. open-coiled) and arrangement (series vs. parallel) on spring stiffness."
subject: "MATERIALS TESTING LAB"
module: "Module 9: Investigate the effect of coil type (close"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e80"
status: "completed"
scrapedAt: "2026-05-20T17:50:24.463Z"
---
# Materials Testing Lab: Module 9 - Spring Stiffness Investigation

## Topic: Investigating the Effect of Coil Type (Close-Coiled vs. Open-Coiled) and Arrangement (Series vs. Parallel) on Spring Stiffness

This module aims to experimentally investigate how different coil types and their arrangements impact the stiffness of a spring system. By understanding these relationships, we can better select and design springs for various engineering applications.

---

### 1. Introduction to Springs and Stiffness

**Key Concepts:**

*   **Spring:** An elastic mechanical device that stores mechanical energy and releases it when appropriate. Springs are typically made from coiled wire or other resilient materials.
*   **Stiffness (Spring Constant, k):** A measure of a spring's resistance to deformation. It is defined as the ratio of the applied force (F) to the resulting displacement (x):
    $k = F/x$
    *   A higher stiffness value indicates that more force is required to produce a given amount of deformation.
    *   Units of stiffness are typically Newtons per meter (N/m) or pounds per inch (lb/in).

**Relevant Textbooks:**

*   **Callister's Materials Science and Engineering:** Provides foundational understanding of material properties and how they influence mechanical behavior. While not directly focused on springs, it establishes the principles of elasticity and deformation relevant to spring performance.
*   **Mechanical Testing and Evaluation:** (Volume 8) This text is highly relevant, likely covering the principles of mechanical testing, including methods for characterizing the behavior of components like springs.

**Course Outcome Alignment:**

*   **CO1 (K3):** Evaluate the mechanical properties of different materials under various loading conditions. (Understanding the relationship between force and displacement directly relates to evaluating a material's elastic properties in a spring application.)

---

### 2. Spring Coil Types and Their Impact on Stiffness

**2.1 Close-Coiled Helical Springs**

**Key Concepts:**

*   **Definition:** A spring where adjacent coils are in close contact or very nearly touching. The wire is typically wound around a cylindrical or conical mandrel.
*   **Loading:** Primarily subjected to axial loads, causing torsional stress in the wire.
*   **Stiffness Formula (Simplified for axial load and torsional stress):**
    For a close-coiled helical spring subjected to axial load P, the deflection $\delta$ is given by:
    $\delta = (8FD^3n) / (Gd^4)$
    Where:
    *   F = Applied axial force
    *   D = Mean coil diameter
    *   n = Number of active coils
    *   G = Shear modulus of the spring material
    *   d = Wire diameter
    From $k = F/\delta$, we can derive:
    $k_{close-coiled} = (Gd^4) / (8D^3n)$
*   **Factors Affecting Stiffness:**
    *   **Shear Modulus (G):** Higher G leads to higher stiffness (e.g., steel has a higher G than aluminum).
    *   **Wire Diameter (d):** Stiffness increases significantly with wire diameter ($d^4$ dependence).
    *   **Mean Coil Diameter (D):** Stiffness decreases significantly with mean coil diameter ($D^3$ dependence).
    *   **Number of Active Coils (n):** Stiffness decreases with an increase in the number of coils.

**Example:**

A close-coiled helical spring made of steel with a certain number of coils, wire diameter, and mean diameter will have a specific stiffness. If we double the wire diameter, the stiffness will increase by a factor of 16 (2^4). If we double the mean coil diameter, the stiffness will decrease by a factor of 8 (2^3).

**Relevant Textbooks:**

*   **Mechanics of Materials by Gere and Goodno:** This is a primary resource for understanding the mechanics of materials under stress and strain, including torsional stresses in helical springs. The derivation of the stiffness formula will be detailed here.
*   **Mechanical Testing and Evaluation:** Will provide practical insights into testing methods for such springs.

**Course Outcome Alignment:**

*   **CO1 (K3):** Evaluate the mechanical properties of different materials under various loading conditions. (Directly relates to how the material's shear modulus influences the spring's stiffness under torsional loading.)
*   **CO3 (K4):** Analyse the effect of design features on the performance of mechanical components. (Investigating the impact of d, D, and n on stiffness is a direct analysis of design features.)

**2.2 Open-Coiled Helical Springs**

**Key Concepts:**

*   **Definition:** A spring where there is a significant gap between adjacent coils.
*   **Loading:** Can be subjected to axial loads, but also bending and shear stresses, depending on the helix angle.
*   **Stiffness Formula (Simplified for axial load, considering helix angle $\alpha$):**
    The deflection $\delta$ is more complex and depends on the helix angle. A simplified expression for stiffness considering torsional and bending effects can be:
    $k_{open-coiled} \approx (Gd^4) / (8D^3n) * [1 / (1 + (4\gamma / (1 + \nu)))]$
    Where:
    *   $\gamma$ is related to the helix angle.
    *   $\nu$ is Poisson's ratio.
    *   The term involving $\gamma$ and $\nu$ indicates that open-coiled springs are generally less stiff than close-coiled springs for the same parameters, due to the additional bending stresses.
*   **Factors Affecting Stiffness:**
    *   Similar dependencies on G, d, D, and n as close-coiled springs.
    *   **Helix Angle ($\alpha$):** A larger helix angle (more "open" coils) generally leads to lower stiffness due to the introduction of bending stress and reduced torsional effectiveness.

**Example:**

A valve spring in an engine is typically an open-coiled spring. It needs to provide a specific force over a certain displacement to operate the valve, but also needs to be light and allow for some compression without the coils binding.

**Relevant Textbooks:**

*   **Mechanics of Materials by Gere and Goodno:** Crucial for understanding the combined stresses (torsion and bending) experienced by open-coiled springs, which is essential for deriving their stiffness.
*   **Introduction to Materials Science for Engineers by Shackelford:** Provides context on how material properties (like shear modulus and Poisson's ratio) are fundamental to calculating these stresses and resulting deflections.

**Course Outcome Alignment:**

*   **CO1 (K3):** Evaluate the mechanical properties of different materials under various loading conditions. (Extends to evaluating how material properties influence behavior under combined stress states.)
*   **CO3 (K4):** Analyse the effect of design features on the performance of mechanical components. (The helix angle is a significant design feature that directly affects stiffness.)

**Important Point to Remember:** For the same wire diameter, mean coil diameter, and number of coils, close-coiled springs are generally stiffer than open-coiled springs due to the dominant torsional stress.

---

### 3. Spring Arrangements and Their Impact on Stiffness

**3.1 Springs in Series**

**Key Concepts:**

*   **Definition:** Springs are connected end-to-end, so the applied force is transmitted through each spring sequentially.
*   **Stiffness Relationship:** The total deflection ($\delta_{total}$) is the sum of the deflections of individual springs ($\delta_1, \delta_2, ..., \delta_n$):
    $\delta_{total} = \delta_1 + \delta_2 + ... + \delta_n$
    Since $F = k\delta$, we have $\delta = F/k$. Therefore:
    $(F / k_{series}) = (F / k_1) + (F / k_2) + ... + (F / k_n)$
    Dividing by F (since the force is the same for all springs in series):
    $1 / k_{series} = 1 / k_1 + 1 / k_2 + ... + 1 / k_n$
    **For identical springs in series (k1 = k2 = ... = kn = k):**
    $1 / k_{series} = n / k$
    $k_{series} = k / n$
*   **Effect on Stiffness:** Connecting springs in series **reduces** the overall stiffness of the system.

**Example:**

Imagine a heavy-duty suspension system. To achieve a softer ride (lower stiffness), engineers might use multiple springs in series. If each spring has a stiffness of 1000 N/m, and two are used in series, the combined stiffness is $1000 / 2 = 500$ N/m.

**Relevant Textbooks:**

*   **Mechanics of Materials by Gere and Goodno:** This text will detail how forces and displacements are combined in series and parallel systems, analogous to electrical circuits.
*   **Introduction to Materials Science for Engineers by Shackelford:** Provides fundamental principles of how composite systems behave based on the properties of their constituents.

**Course Outcome Alignment:**

*   **CO3 (K4):** Analyse the effect of design features on the performance of mechanical components. (Analyzing how arranging springs in series impacts the overall system's performance, i.e., its stiffness.)
*   **CO5 (K3):** Apply fundamental engineering principles to analyse the behaviour of structures under load. (The concept of analyzing combined mechanical systems is directly applicable here.)

**3.2 Springs in Parallel**

**Key Concepts:**

*   **Definition:** Springs are arranged side-by-side, so they share the applied force. The total deflection is the same for all springs.
*   **Stiffness Relationship:** The total force ($F_{total}$) is the sum of the forces supported by each spring ($F_1, F_2, ..., F_n$):
    $F_{total} = F_1 + F_2 + ... + F_n$
    Since $F = k\delta$, we have:
    $(k_{parallel} * \delta) = (k_1 * \delta) + (k_2 * \delta) + ... + (k_n * \delta)$
    Dividing by $\delta$ (since the deflection is the same for all springs in parallel):
    $k_{parallel} = k_1 + k_2 + ... + k_n$
    **For identical springs in parallel (k1 = k2 = ... = kn = k):**
    $k_{parallel} = n * k$
*   **Effect on Stiffness:** Connecting springs in parallel **increases** the overall stiffness of the system.

**Example:**

Consider a vehicle suspension that needs to support a heavy load and provide a firm ride. Multiple coil springs might be used in parallel to achieve a higher combined stiffness. If each spring has a stiffness of 1000 N/m, and two are used in parallel, the combined stiffness is $1000 + 1000 = 2000$ N/m.

**Relevant Textbooks:**

*   **Mechanics of Materials by Gere and Goodno:** As with series arrangements, this text will be essential for understanding the force distribution and deformation in parallel systems.
*   **Mechanical Testing and Evaluation:** May describe experimental setups where multiple springs are used in parallel to achieve specific load capacities and stiffness requirements.

**Course Outcome Alignment:**

*   **CO3 (K4):** Analyse the effect of design features on the performance of mechanical components. (Analyzing how arranging springs in parallel impacts the overall system's performance, i.e., its stiffness.)
*   **CO5 (K3):** Apply fundamental engineering principles to analyse the behaviour of structures under load. (Similar to series, this involves applying principles to analyze combined mechanical systems.)

**Important Point to Remember:** Connecting springs in series reduces stiffness, while connecting them in parallel increases stiffness.

---

### 4. Experimental Investigation of Spring Stiffness

This section outlines the practical aspects of the laboratory experiment.

**Objective:** To experimentally determine the stiffness of close-coiled and open-coiled springs, and to verify the stiffness of spring combinations arranged in series and parallel.

**Materials:**

*   Close-coiled helical springs (various sizes/materials if possible)
*   Open-coiled helical springs (various helix angles if possible)
*   Spring testing rig (e.g., a load frame with a mechanism to apply and measure force, and a displacement transducer or scale)
*   Weights or force application mechanism (e.g., dead weights, calibrated force gauge)
*   Measuring instruments (e.g., ruler, caliper for measuring spring dimensions)

**Procedure (General Outline):**

1.  **Measure Spring Parameters:** For each spring, carefully measure:
    *   Wire diameter (d)
    *   Mean coil diameter (D)
    *   Number of active coils (n)
    *   Free length (L0)
    *   Helix angle (for open-coiled springs)

2.  **Test Single Springs:**
    *   Mount a single spring in the testing rig.
    *   Apply incremental loads (weights) and measure the corresponding extension (x) of the spring. Ensure the spring is compressed sufficiently to engage the desired number of active coils.
    *   Repeat for a range of loads to obtain multiple data points.
    *   Remove the load and measure the spring's free length to check for permanent deformation.

3.  **Test Springs in Series:**
    *   Connect two identical springs end-to-end.
    *   Mount the series combination in the testing rig.
    *   Apply incremental loads and measure the total extension.
    *   Repeat for a range of loads.

4.  **Test Springs in Parallel:**
    *   Arrange two identical springs side-by-side, ensuring they share the load evenly.
    *   Mount the parallel combination in the testing rig.
    *   Apply incremental loads and measure the total extension.
    *   Repeat for a range of loads.

**Data Analysis:**

1.  **Plot Force vs. Extension:** For each test (single springs, series, parallel), plot the applied force (y-axis) against the measured extension (x-axis).
2.  **Determine Experimental Stiffness:** Calculate the slope of the linear portion of each Force-Extension graph. This slope represents the experimental stiffness (k) of that spring or spring combination.
3.  **Calculate Theoretical Stiffness:** Using the measured spring parameters (d, D, n, G for the material), calculate the theoretical stiffness for each single spring using the appropriate formulas (close-coiled or open-coiled).
4.  **Calculate Theoretical Series/Parallel Stiffness:**
    *   For series, calculate $k_{series} = (k_1 * k_2) / (k_1 + k_2)$ (or $k/n$ for identical springs).
    *   For parallel, calculate $k_{parallel} = k_1 + k_2$ (or $n*k$ for identical springs).
5.  **Compare Experimental and Theoretical Values:** Compare the experimental stiffness values with the calculated theoretical values. Calculate percentage error.

**Course Outcome Alignment:**

*   **CO2 (K4):** Relate material microstructure to its mechanical behaviour. (The shear modulus (G) is a material property derived from its microstructure. Comparing experimental results to theoretical values that depend on G helps in this relation.)
*   **CO4 (K3):** Utilize experimental techniques to determine material properties. (This entire section is about utilizing experimental techniques to determine spring stiffness, which is a mechanical property.)

---

### 5. Key Concepts and Definitions Recap

*   **Stiffness (k):** Force per unit displacement.
*   **Close-coiled helical spring:** Adjacent coils touch; primarily torsional stress under axial load.
*   **Open-coiled helical spring:** Gaps between coils; torsional and bending stresses under axial load.
*   **Series arrangement:** Springs connected end-to-end; reduced stiffness ($1/k_{series} = \Sigma 1/k_i$).
*   **Parallel arrangement:** Springs connected side-by-side; increased stiffness ($k_{parallel} = \Sigma k_i$).
*   **Shear Modulus (G):** Material property related to resistance to shear deformation.
*   **Helix Angle ($\alpha$):** Angle of the wire relative to the spring axis; affects stiffness in open-coiled springs.

---

### 6. Practice Questions and Exercises

**Question 1:**
A close-coiled helical spring has the following properties: Mean coil diameter (D) = 50 mm, wire diameter (d) = 5 mm, number of active coils (n) = 10. The shear modulus (G) of the spring material (steel) is approximately 80 GPa.
Calculate the theoretical stiffness of this spring.

**Answer 1:**
First, convert all units to meters:
D = 50 mm = 0.050 m
d = 5 mm = 0.005 m
G = 80 GPa = $80 \times 10^9$ N/m²

The stiffness formula for a close-coiled helical spring is:
$k = (Gd^4) / (8D^3n)$

Substitute the values:
$k = (80 \times 10^9 \, \text{N/m²} \times (0.005 \, \text{m})^4) / (8 \times (0.050 \, \text{m})^3 \times 10)$
$k = (80 \times 10^9 \times 6.25 \times 10^{-10}) / (8 \times 0.000125 \times 10)$
$k = (50) / (0.01)$
$k = 5000 \, \text{N/m}$

**Question 2:**
If two identical springs with a stiffness of 2500 N/m each are connected in series, what is the combined stiffness? If they are connected in parallel, what is the combined stiffness?

**Answer 2:**
*   **Series:**
    For identical springs in series, $k_{series} = k / n$.
    Here, k = 2500 N/m and n = 2.
    $k_{series} = 2500 \, \text{N/m} / 2 = 1250 \, \text{N/m}$

*   **Parallel:**
    For identical springs in parallel, $k_{parallel} = n * k$.
    Here, k = 2500 N/m and n = 2.
    $k_{parallel} = 2 \times 2500 \, \text{N/m} = 5000 \, \text{N/m}$

**Question 3:**
How would the stiffness of a close-coiled helical spring change if:
a) The wire diameter is doubled?
b) The mean coil diameter is doubled?
c) The number of active coils is doubled?

**Answer 3:**
The stiffness of a close-coiled helical spring is given by $k = (Gd^4) / (8D^3n)$.

a) If the wire diameter (d) is doubled, the stiffness changes by a factor of $2^4 = 16$. The stiffness would **increase by a factor of 16**.
b) If the mean coil diameter (D) is doubled, the stiffness changes by a factor of $1/2^3 = 1/8$. The stiffness would **decrease by a factor of 8**.
c) If the number of active coils (n) is doubled, the stiffness changes by a factor of $1/2$. The stiffness would **decrease by a factor of 2**.

**Question 4 (Conceptual):**
Which type of spring is generally stiffer for the same wire diameter, mean coil diameter, and number of coils: a close-coiled helical spring or an open-coiled helical spring with a significant helix angle? Explain why.

**Answer 4:**
A **close-coiled helical spring** is generally stiffer. This is because the primary mode of deformation in a close-coiled spring under axial load is torsion of the wire. In an open-coiled spring with a significant helix angle, the deformation is a combination of torsion and bending. Bending stresses in the wire are typically less efficient in resisting axial deflection compared to torsional stresses, leading to lower overall stiffness for the same geometric parameters.

---

### 7. Important Points to Remember

*   **Stiffness is a fundamental property** that dictates a spring's response to load.
*   **Close-coiled springs are generally stiffer** than open-coiled springs for equivalent dimensions, due to the dominant torsional stress.
*   **Springs in series decrease overall stiffness**, while springs in parallel increase it.
*   **Wire diameter (d) has a fourth-power effect** on stiffness, making it the most influential geometric parameter.
*   **Mean coil diameter (D) has a third-power effect** on stiffness.
*   **Material properties (Shear Modulus G)** are critical for determining theoretical stiffness.
*   **Experimental verification is essential** to validate theoretical calculations and understand real-world performance.

---

This comprehensive study guide covers the core concepts, theoretical underpinnings, practical experimental considerations, and analytical methods for investigating the effect of coil type and arrangement on spring stiffness. Remember to consult the specified textbooks for deeper theoretical derivations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
