---
title: "Forging-Forging load, numerical problems, Various methods, applications, defects in forging -"
subject: "MANUFACTURING PROCESSES"
module: "Module 4: Forging"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d5e"
status: "completed"
scrapedAt: "2026-05-20T17:50:15.192Z"
---
# Manufacturing Processes - Module 4: Forging

---

## Topic: Forging - Forging Load, Numerical Problems, Various Methods, Applications, Defects in Forging

---

### **Learning Outcomes:**

Upon successful completion of this topic, students will be able to:

*   Understand the fundamental principles of forging.
*   Calculate the forging load required for various forging operations.
*   Solve numerical problems related to forging load calculations.
*   Differentiate between various forging methods.
*   Identify and explain the applications of forging.
*   Recognize and explain common defects encountered in forging and their causes.

---

### **1. Introduction to Forging**

Forging is a metal forming process where workpiece is shaped by localized compressive forces, usually applied with a hammer or die. It's one of the oldest metal working processes, dating back to ancient times. Forging refines the grain structure of the metal, leading to improved mechanical properties like strength, ductility, and toughness.

**Key Concepts:**

*   **Deformation:** The plastic deformation of the metal to achieve the desired shape.
*   **Hammering/Pressing:** The application of localized compressive forces.
*   **Dies:** Tools used to shape the workpiece during forging.
*   **Grain Flow:** The alignment of metal grains in the direction of deformation, which significantly influences the mechanical properties of the forged part.

---

### **2. Forging Load and Numerical Problems**

**Understanding Forging Load:**

The forging load is the force required to deform the workpiece plastically to the desired shape. It depends on several factors:

*   **Material Properties:** Yield strength, tensile strength, strain hardening characteristics of the workpiece material.
*   **Workpiece Geometry:** Shape, size, and complexity of the part being forged.
*   **Deformation Parameters:** Amount of reduction in cross-sectional area, speed of deformation.
*   **Friction:** Friction between the workpiece and the dies.
*   **Temperature:** Hot forging generally requires less load than cold forging due to lower yield strength at elevated temperatures.

**Methods for Estimating Forging Load:**

Estimating the forging load is crucial for selecting appropriate forging equipment (hammers, presses) and designing dies. Several approaches are used:

*   **Empirical Formulas:** Based on experimental data and observations. These are often simpler but less accurate.
*   **Work-Energy Principle:** Relates the work done in deformation to the forces applied.
*   **Squeeze Forging Theory:** Considers the flow of material under pressure in dies.
*   **Upper Bound Method:** A powerful analytical technique from plasticity theory that provides an upper estimate of the forging load. This method is extensively discussed in advanced texts like those by **Ghosh and Mallik (Manufacturing Science)** and **Kalpakjian and Schmid (Manufacturing Engineering and Technology)**.

**Formula for Forging Load (Simplified for a Single Operation, e.g., Compression of a Cylinder):**

A simplified approach often used to estimate the average forging pressure (stress) is:

$\bar{\sigma} = \int_0^{\epsilon_f} \sigma d\epsilon$

where:
*   $\bar{\sigma}$ is the average flow stress during deformation.
*   $\sigma$ is the flow stress of the material at a given strain $\epsilon$.
*   $\epsilon_f$ is the total true strain.

The flow stress ($\sigma$) is often represented by the power law: $\sigma = K\epsilon^n$, where $K$ is the strength coefficient and $n$ is the strain hardening exponent.

The forging load ($P$) can then be approximated as:

$P = \bar{\sigma} \times A_{contact}$

where $A_{contact}$ is the projected contact area between the workpiece and the die during the most critical stage of the forging operation.

**More Advanced Approaches (Refer to Ghosh and Mallik, Kalpakjian and Schmid):**

*   **Upper Bound Method:** This method involves dividing the deforming body into kinematically admissible velocity fields and calculating the energy dissipated due to plastic deformation and friction. The forging load is then determined by minimizing the total energy. This often leads to more realistic load predictions, especially for complex shapes.
*   **Finite Element Analysis (FEA):** Modern FEA software can simulate the forging process with high accuracy, considering complex geometries, material properties, friction, and temperature variations. This is the most sophisticated method for predicting forging load and is widely used in industry.

**Numerical Problems:**

**Problem 1: Simple Compression of a Cylindrical Slug**

A cylindrical slug of mild steel, with an initial diameter of 50 mm and height of 50 mm, is to be upset (flattened) to a height of 25 mm in an open-die forging operation. The average flow stress of the material during this deformation is 150 MPa. Calculate the forging load required.

**Solution:**

1.  **Calculate the initial and final areas:**
    *   Initial Area ($A_0$) = $\pi \times (D_0/2)^2 = \pi \times (50/2)^2 = 2500\pi \text{ mm}^2$
    *   Final Area ($A_f$) = $\pi \times (D_f/2)^2$. Since height is reduced, diameter increases. The volume is conserved.
    *   $V_0 = A_0 \times h_0 = (2500\pi) \times 50 = 125000\pi \text{ mm}^3$
    *   $V_f = A_f \times h_f \implies 125000\pi = A_f \times 25 \implies A_f = 5000\pi \text{ mm}^2$
    *   The contact area at the end of the operation is the final projected area.

2.  **Calculate the forging load:**
    *   Forging Load ($P$) = Average Flow Stress $\times$ Final Projected Area
    *   $P = 150 \text{ MPa} \times (5000\pi \text{ mm}^2)$
    *   Convert MPa to N/mm²: $150 \text{ MPa} = 150 \text{ N/mm}^2$
    *   $P = 150 \text{ N/mm}^2 \times 5000\pi \text{ mm}^2 = 750000\pi \text{ N}$
    *   $P \approx 2,356,194 \text{ N} \approx 2356 \text{ kN}$

**Problem 2: Upsetting with Friction Consideration (More Realistic)**

Consider the same problem as above. Assume a coefficient of friction ($\mu$) of 0.1 between the workpiece and the die. Use a simplified formula that accounts for friction, such as:

$P = \bar{\sigma} \times A \times (1 + \frac{\mu D}{3h})$ (This is a simplified King's formula approximation for cylinders)

where $D$ is the diameter and $h$ is the height at the current stage. We will use the final dimensions for this approximation.

**Solution:**

1.  **Final dimensions:** Height ($h$) = 25 mm. To find the final diameter ($D_f$), we use volume conservation:
    *   $A_0 \times h_0 = A_f \times h_f$
    *   $\frac{\pi D_0^2}{4} \times h_0 = \frac{\pi D_f^2}{4} \times h_f$
    *   $D_0^2 \times h_0 = D_f^2 \times h_f$
    *   $50^2 \times 50 = D_f^2 \times 25$
    *   $2500 \times 50 = D_f^2 \times 25$
    *   $125000 = D_f^2 \times 25$
    *   $D_f^2 = 5000 \implies D_f = \sqrt{5000} \approx 70.7 \text{ mm}$
    *   Final projected area ($A_f$) = $\frac{\pi D_f^2}{4} = \frac{\pi (70.7)^2}{4} \approx 3927 \text{ mm}^2$

2.  **Calculate forging load with friction:**
    *   $P = \bar{\sigma} \times A_f \times (1 + \frac{\mu D_f}{3h_f})$
    *   $P = 150 \text{ N/mm}^2 \times 3927 \text{ mm}^2 \times (1 + \frac{0.1 \times 70.7 \text{ mm}}{3 \times 25 \text{ mm}})$
    *   $P \approx 589050 \times (1 + \frac{7.07}{75})$
    *   $P \approx 589050 \times (1 + 0.0943)$
    *   $P \approx 589050 \times 1.0943 \approx 644687 \text{ N}$
    *   $P \approx 644.7 \text{ kN}$

**Important Note:** The friction factor calculation for forging load can be complex. Textbooks like **Ghosh and Mallik** and **Kalpakjian and Schmid** provide more detailed derivations and empirical factors for various shapes and conditions. The above is a simplified illustration.

---

### **3. Various Methods of Forging**

Forging methods can be broadly classified based on the temperature of the workpiece and the type of tooling used.

**A. Classification based on Temperature:**

1.  **Hot Forging:**
    *   **Definition:** Performed at temperatures above the recrystallization temperature of the metal.
    *   **Advantages:**
        *   Lower forging forces are required due to reduced yield strength.
        *   Greater ductility allows for larger deformations and more complex shapes.
        *   No strain hardening occurs as recrystallization eliminates it.
        *   Improved homogeneity of the workpiece.
    *   **Disadvantages:**
        *   Surface finish is generally poorer due to scale formation.
        *   Dimensional accuracy can be lower due to thermal contraction and distortion.
        *   Requires heating equipment, leading to higher energy costs.
        *   Limited die life due to high temperatures.
    *   **Examples:** Engine connecting rods, crankshafts, turbine blades.

2.  **Cold Forging:**
    *   **Definition:** Performed at or near room temperature, below the recrystallization temperature.
    *   **Advantages:**
        *   Excellent surface finish and dimensional accuracy.
        *   Increased strength and hardness due to strain hardening.
        *   No scaling or oxidation.
        *   Higher production rates possible in some cases.
    *   **Disadvantages:**
        *   Higher forging forces are required due to increased yield strength and strain hardening.
        *   Limited deformation per stage; multiple forging steps may be needed.
        *   Workpiece ductility limits the complexity of achievable shapes.
        *   Requires stronger tooling and more powerful machinery.
    *   **Examples:** Fasteners (bolts, nuts, screws), automotive parts, appliance components.

3.  **Warm Forging:**
    *   **Definition:** Performed at temperatures between cold and hot forging, typically between 500°C and 950°C for steel.
    *   **Advantages:**
        *   Balances some advantages of both hot and cold forging.
        *   Lower forces than cold forging.
        *   Better surface finish and accuracy than hot forging.
        *   Less scale formation than hot forging.
    *   **Disadvantages:**
        *   Still requires heating, but less than hot forging.
        *   Strain hardening can occur, but might be partially relieved by dynamic recovery.
    *   **Examples:** Gears, shafts, some automotive components.

**B. Classification based on Tooling and Operation:**

1.  **Open-Die Forging (Upsetting, Drawing Out, Bending):**
    *   **Description:** The simplest form of forging, where the workpiece is deformed between dies that are shaped to form only a small part of the final shape. The dies are typically flat or have shallow contours.
    *   **Process:** The workpiece is progressively shaped by repeated blows or pressure.
    *   **Advantages:** Versatile, suitable for a wide range of shapes and sizes, relatively simple tooling.
    *   **Disadvantages:** Lower dimensional accuracy, requires skilled labor, more manual manipulation.
    *   **Reference:** **P N Rao (Manufacturing Technology Vol-1)** provides detailed descriptions of these basic open-die operations.

2.  **Closed-Die Forging (Impression Die Forging):**
    *   **Description:** The workpiece is deformed between dies that contain a cavity or impression of the desired shape. The die halves enclose the workpiece, forcing it to fill the impression.
    *   **Process:** A pre-formed blank is placed between the upper and lower dies. The dies close, forcing the metal to flow and fill the cavity. Excess material, called flash, is squeezed out into a groove around the die cavity.
    *   **Advantages:** High dimensional accuracy, excellent surface finish, good grain flow, suitable for mass production.
    *   **Disadvantages:** High tooling cost, limited to specific shapes dictated by the dies, requires pre-forming operations.
    *   **Sub-types:**
        *   **Flash Forging:** Excess material forms a flash.
        *   **Draftless Forging (Impressionless Forging):** Designed to minimize or eliminate flash by precisely controlling the die cavity volume.
        *   **Blocking Forging:** Uses intermediate dies to bring the workpiece closer to the final shape before the final impression die.

3.  **Roll Forging:**
    *   **Description:** A type of forging where the workpiece is passed between two rotating rolls that have shaped grooves.
    *   **Process:** The rolls reduce the cross-section of the workpiece and shape it, similar to rolling processes but with the intent of forming specific shapes rather than continuous sheets.
    *   **Advantages:** High production rates, good for creating gradually changing cross-sections.
    *   **Disadvantages:** Limited to shapes that can be formed by rotating rolls.
    *   **Example:** Creating tapered shafts, tool shanks.

4.  **Orbital Forging (Rotary Forging):**
    *   **Description:** A precision forging process where the workpiece is deformed by a rotating conical or flat die that orbits around the workpiece.
    *   **Process:** The die moves eccentrically around the workpiece, applying localized pressure.
    *   **Advantages:** Low forces required, good for forging hollow parts and complex shapes with minimal draft, minimal flash.
    *   **Disadvantages:** Slower production rates compared to other methods.
    *   **Example:** Forging of caps, fittings, and hollow components.

5.  **Rotary Swaging:**
    *   **Description:** A cold or hot forming process that reduces the cross-section of a rod or tube by repeatedly striking it with multiple dies that are rapidly opened and closed by rotating cams or rings.
    *   **Process:** The workpiece is placed inside a die cage. As the cage rotates, reciprocating dies strike the workpiece, reducing its diameter.
    *   **Advantages:** Good surface finish, increased strength, good dimensional accuracy.
    *   **Disadvantages:** Limited to reducing cross-sections, not for creating complex 3D shapes.
    *   **Example:** Forming pointed ends on rods for drawing, reducing tube diameters.

---

### **4. Applications of Forging**

Forging is a widely used manufacturing process due to the excellent mechanical properties it imparts to the components.

**Key Industries and Applications:**

*   **Automotive Industry:**
    *   Crankshafts, connecting rods, camshafts
    *   Axle shafts, gears, steering components
    *   Wheel hubs, suspension parts
    *   **Reference:** **Taylan Altan et al. (Cold and Hot Forging Fundamentals and Applications)** discuss automotive applications extensively.

*   **Aerospace Industry:**
    *   Turbine disks, compressor blades
    *   Aircraft landing gear components
    *   Structural components requiring high strength and reliability.
    *   **Reason:** Forging provides superior fatigue strength and resistance to crack propagation, crucial for safety-critical aerospace applications.

*   **Oil and Gas Industry:**
    *   Valves, flanges, fittings
    *   Drilling equipment components
    *   Components for high-pressure environments.

*   **Power Generation:**
    *   Turbine shafts, rotor components
    *   High-strength bolts and fasteners.

*   **General Engineering:**
    *   Hand tools (wrenches, hammers, pliers)
    *   Industrial machinery components
    *   Fasteners (bolts, nuts, rivets)
    *   Medical instruments.

**Why is Forging Preferred for These Applications?**

*   **Superior Mechanical Properties:** Improved strength, toughness, ductility, fatigue strength, and impact resistance due to controlled grain flow and refinement.
*   **Grain Flow Control:** The forging process aligns the metal grains parallel to the contours of the part, enhancing strength and preventing stress concentrations. **Joseph R. Davis et al. (ASM Metals Handbook, Vol. 14)** elaborates on the importance of grain flow in forged components.
*   **Reliability and Durability:** Forged parts are inherently more reliable and durable, especially under cyclic loading conditions.
*   **Weight Reduction:** High strength-to-weight ratio can be achieved, allowing for lighter designs.

---

### **5. Defects in Forging**

Despite its advantages, forging can lead to various defects if not controlled properly.

**Common Defects and Their Causes:**

1.  **Cracks (Surface and Internal):**
    *   **Cause:**
        *   Excessive grain deformation during forging.
        *   Inadequate die lubrication.
        *   Sharp corners or abrupt changes in cross-section leading to stress concentrations.
        *   Inconsistent material properties.
        *   Overheating or underheating during hot forging.
        *   Improper pre-forming.
    *   **Mitigation:** Proper pre-forming, appropriate die design with generous radii, correct forging temperature and lubrication, controlled deformation rate.

2.  **Inclusions:**
    *   **Cause:**
        *   Entrapment of surface contaminants (scale, dirt) during forging, especially in closed-die forging where material flows around the impression.
        *   Presence of slag or impurities in the original raw material.
    *   **Mitigation:** Thorough cleaning of the workpiece before forging, controlled atmosphere or inert gas forging, using cleaner raw materials.

3.  **Underfilled Areas / Insufficient Flash:**
    *   **Cause:**
        *   Inadequate forging force or pressure.
        *   Insufficient pre-form volume.
        *   Dies not closing completely.
        *   Excessive friction.
    *   **Mitigation:** Increase forging force, ensure correct pre-form geometry, proper die setting, use adequate lubrication.

4.  **Overfilled Areas / Excess Flash:**
    *   **Cause:**
        *   Excessive pre-form volume.
        *   Die cavity too large or improperly matched.
        *   Lower than expected friction.
    *   **Mitigation:** Reduce pre-form volume, accurate die sinking and matching, adjust lubrication.

5.  **Surface Irregularities / Roughness:**
    *   **Cause:**
        *   Poor surface finish of the dies.
        *   Inadequate lubrication leading to sticking.
        *   Scale formation on the workpiece (hot forging).
        *   Wear on the dies.
    *   **Mitigation:** Use well-finished dies, apply proper lubrication, clean scale effectively, maintain dies.

6.  **Forging Laps:**
    *   **Cause:** Occur when the material does not flow properly and folds over on itself, creating a surface discontinuity. Often happens in operations like drawing out or upsetting if not controlled.
    *   **Mitigation:** Proper die design, controlled material flow, appropriate pre-forming.

7.  **Non-metallic inclusions at the surface (especially in hot forging):**
    *   **Cause:** Oxides and scale formed during heating are not removed before forging and are pressed into the surface of the workpiece.
    *   **Mitigation:** Efficient scale removal (e.g., shot blasting) between heating and forging steps.

**Reference for Defects:** **P N Rao (Manufacturing Technology Vol-1)** and **Taylan Altan et al. (Cold and Hot Forging Fundamentals and Applications)** provide detailed discussions on common forging defects and their remedies.

---

### **Practice Questions and Exercises:**

**Question 1 (CO4):**
A cylindrical billet of diameter 40 mm and height 60 mm is to be upset to a final height of 30 mm. The average flow stress of the material is 200 MPa. Calculate the forging load required, assuming no friction.

**Answer 1:**
1.  **Initial Volume:** $V_0 = \frac{\pi D_0^2}{4} h_0 = \frac{\pi (40)^2}{4} \times 60 = 75398 \text{ mm}^3$
2.  **Final Area:** Since volume is conserved, $V_f = V_0$. $A_f \times h_f = V_0$.
    $A_f \times 30 = 75398 \implies A_f = 2513.3 \text{ mm}^2$
3.  **Forging Load:** $P = \bar{\sigma} \times A_f = 200 \text{ N/mm}^2 \times 2513.3 \text{ mm}^2 = 502660 \text{ N} = 502.7 \text{ kN}$

**Question 2 (CO4):**
Explain the primary advantages of hot forging over cold forging for producing large, complex structural components.

**Answer 2:**
The primary advantages of hot forging for large, complex structural components are:
1.  **Lower Forging Forces:** The elevated temperature significantly reduces the yield strength of the material, requiring much less force to deform the metal. This allows for the use of less powerful machinery.
2.  **Greater Ductility:** At higher temperatures, metals are more ductile, enabling larger deformations in a single forging operation and facilitating the creation of more complex shapes without fracturing.
3.  **Elimination of Strain Hardening:** Recrystallization occurring simultaneously with deformation in hot forging prevents strain hardening, allowing for continuous and significant shaping.

**Question 3 (CO4):**
Describe the process of closed-die forging and identify two common defects associated with it.

**Answer 3:**
**Process of Closed-Die Forging:**
In closed-die forging, the workpiece is placed between two dies that contain a cavity or impression of the desired final shape. The dies are brought together under high pressure, forcing the metal to flow and fill the impression. Excess material is squeezed out as 'flash' into a gutter around the die cavity. This method is ideal for mass production of parts with high accuracy and good surface finish.

**Common Defects in Closed-Die Forging:**
1.  **Cracks:** Can occur due to overfilling, sharp corners in the die cavity, or insufficient lubrication leading to high tensile stresses during deformation.
2.  **Inclusions:** Surface scale or contaminants from the workpiece or die can be trapped within the metal as it fills the die cavity, especially if the pre-form is not clean or the lubrication is inadequate.

**Question 4 (CO5):**
Consider the manufacturing of a connecting rod for an engine. Why would forging be a preferred process compared to casting or machining for this component? Relate your answer to the required mechanical properties and grain flow.

**Answer 4:**
Forging is a preferred process for manufacturing engine connecting rods due to the following reasons:
1.  **Superior Mechanical Properties:** Connecting rods are subjected to high tensile and compressive stresses, as well as significant cyclic loading during engine operation. Forging refines the grain structure and aligns the grain flow parallel to the contours of the rod, significantly enhancing its strength, toughness, fatigue resistance, and impact strength. These properties are crucial for the reliability and longevity of the engine.
2.  **Grain Flow:** The inherent grain flow produced by forging follows the shape of the component. For a connecting rod, this means the grains are aligned along the length of the rod and around the bearing journals. This directional strength prevents premature failure under stress concentrations, especially at the rod-end and crankpin-end connections.
3.  **Reliability and Safety:** Given the critical nature of engine components, the high reliability and inherent defect-free nature (when properly controlled) of forged parts make them ideal for applications like connecting rods, where failure could be catastrophic. While casting can produce complex shapes, it often results in a more isotropic microstructure with potential porosity. Machining from a solid block would be highly inefficient and wasteful of material, and would sever the beneficial grain flow.

---

### **Important Points to Remember:**

*   **Forging refines grain structure and improves mechanical properties.**
*   **Hot forging requires less force but has poorer surface finish and accuracy.**
*   **Cold forging yields better surface finish and accuracy but requires higher forces and leads to strain hardening.**
*   **Open-die forging is versatile for basic shapes, while closed-die forging is for mass production of complex shapes.**
*   **Grain flow is a critical factor in the performance of forged components.**
*   **Defects like cracks, laps, and inclusions can be caused by improper process control, die design, or material handling.**
*   **Forging load calculations are essential for equipment selection and process design.** Consult advanced texts like **Ghosh and Mallik** and **Kalpakjian and Schmid** for detailed formulas and methods.
*   **ASM Metals Handbook Vol. 14** is an excellent resource for understanding the practical aspects and material behavior in forging.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
