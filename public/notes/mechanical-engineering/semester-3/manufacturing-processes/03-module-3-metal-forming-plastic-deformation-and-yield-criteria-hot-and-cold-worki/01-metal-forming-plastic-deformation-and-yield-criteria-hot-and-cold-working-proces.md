---
title: "Metal Forming: Plastic deformation and yield criteria − hot and cold working processes"
subject: "MANUFACTURING PROCESSES"
module: "Module 3: Metal Forming: Plastic deformation and yield criteria − hot and cold working processes"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d59"
status: "completed"
scrapedAt: "2026-05-20T17:50:12.330Z"
---
# Manufacturing Processes: Module 3 - Metal Forming

## Topic: Plastic Deformation and Yield Criteria - Hot and Cold Working Processes

---

### **Introduction to Metal Forming**

Metal forming is a manufacturing process that shapes metal by plastic deformation. This means applying forces that cause the material to permanently change its shape without fracturing. It's a fundamental process in manufacturing for creating a wide range of products, from simple components to complex machinery parts.

**Key Concepts:**

*   **Plastic Deformation:** The permanent change in shape of a material when subjected to stresses exceeding its yield strength.
*   **Yield Strength ($\sigma_y$):** The stress at which a material begins to deform plastically.
*   **Stress ($\sigma$):** Force per unit area.
*   **Strain ($\epsilon$):** The measure of deformation representing the change in length divided by the original length.

---

### **1. Plastic Deformation and Yield Criteria**

Understanding how metals deform plastically is crucial for controlling forming processes. This section introduces the fundamental concepts governing this deformation.

**1.1 Stress-Strain Behavior of Metals**

*   **Elastic Region:** Within this region, the material deforms elastically. When the stress is removed, the material returns to its original shape. This is characterized by a linear relationship between stress and strain (Hooke's Law).
    *   **Hooke's Law:** $\sigma = E\epsilon$, where $E$ is the Young's Modulus (modulus of elasticity).
*   **Yield Point:** The stress at which plastic deformation begins. For some materials (like mild steel), there's a distinct yield point. For others, it's defined as the stress at which a small, specified amount of plastic strain (e.g., 0.2%) occurs.
*   **Plastic Region:** Beyond the yield point, the material undergoes permanent deformation.
    *   **Work Hardening (Strain Hardening):** As a metal is plastically deformed, its yield strength increases. This phenomenon is crucial in cold working processes.
    *   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before necking (localized reduction in cross-sectional area) begins.
    *   **Fracture Strength:** The stress at which the material breaks.

**1.2 Yield Criteria**

Yield criteria are mathematical models that predict when yielding will occur in a material under multiaxial stress conditions.

*   **Tresca Yield Criterion (Maximum Shear Stress Criterion):**
    *   **Concept:** Yielding occurs when the maximum shear stress in the material reaches a critical value, which is half the yield strength in uniaxial tension.
    *   **Formula:** $\sigma_{max\_shear} = \frac{\sigma_1 - \sigma_3}{2} = \frac{\sigma_y}{2}$ (where $\sigma_1$ is the maximum principal stress and $\sigma_3$ is the minimum principal stress).
    *   **Application:** Often used for ductile materials, especially in situations involving high hydrostatic pressure or complex stress states.

*   **Von Mises Yield Criterion (Distortion Energy Criterion):**
    *   **Concept:** Yielding occurs when the distortion energy per unit volume reaches a critical value. This criterion is based on the principle that plastic deformation is primarily due to changes in shape, not volume.
    *   **Formula:** $\sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{2}} = \sigma_y$
    *   **Application:** Generally considered more accurate for ductile metals, particularly under multiaxial stress conditions. It is widely used in finite element analysis (FEA) for metal forming simulations.

**Important Points to Remember (Yield Criteria):**

*   Both criteria reduce to $\sigma = \sigma_y$ in uniaxial tension.
*   Von Mises criterion predicts higher stresses for yielding than Tresca for most multiaxial stress states.
*   The choice of criterion can significantly impact the accuracy of simulations and predictions in metal forming.

---

### **2. Hot Working Processes**

Hot working is performed at temperatures above the recrystallization temperature of the metal.

**2.1 Definition and Characteristics:**

*   **Temperature:** Typically above the recrystallization temperature ($T_{recrystallization}$). This temperature varies for different metals (e.g., ~450°C for steel, ~200°C for aluminum).
*   **Advantages:**
    *   **Lower forces required:** Reduced yield strength at elevated temperatures means less force is needed for deformation.
    *   **Higher ductility:** Metals are more ductile at higher temperatures, allowing for larger deformations without fracturing.
    *   **Eliminates work hardening:** Recrystallization occurs simultaneously with deformation, preventing the buildup of internal stresses and maintaining ductility.
    *   **Improves grain structure:** Can refine grain size and eliminate internal defects.
    *   **Can produce complex shapes:** Easier to achieve intricate geometries.
*   **Disadvantages:**
    *   **Surface finish:** Often results in poorer surface finish due to oxidation and scaling.
    *   **Dimensional accuracy:** Can have lower dimensional accuracy due to thermal expansion and contraction.
    *   **Material properties:** Some properties might be altered, and there's a risk of grain growth if held at high temperatures for too long.
    *   **Higher energy consumption:** Furnaces are required to heat the metal.

**2.2 Common Hot Working Processes:**

*   **Hot Rolling:**
    *   **Description:** Metal is passed between two or more rollers to reduce its thickness and/or change its cross-section.
    *   **Applications:** Production of sheets, plates, structural shapes (I-beams, channels), rails, and bars.
    *   **Reference:** Ghosh & Mallik, Chapter 12; Kalpakjian & Schmid, Chapter 6.
*   **Hot Forging:**
    *   **Description:** Metal is shaped by compressive forces applied between dies.
    *   **Types:**
        *   **Open-Die Forging:** Simple shapes, often pre-forming operations like upsetting and drawing out. The workpiece is not completely enclosed by the dies. (e.g., forging shafts, large discs).
        *   **Closed-Die Forging (Impression Die Forging):** The workpiece is shaped within cavities in the dies, resulting in more complex shapes and better accuracy. (e.g., connecting rods, crankshafts, automotive parts).
    *   **Applications:** Automotive parts, aerospace components, tools, machinery parts.
    *   **Reference:** Ghosh & Mallik, Chapter 13; Kalpakjian & Schmid, Chapter 6; Altan et al., Chapters 3 & 4.
*   **Hot Extrusion:**
    *   **Description:** Metal is forced through a die opening to create a desired cross-sectional shape.
    *   **Types:**
        *   **Forward Extrusion:** Ram and die are on the same side of the workpiece.
        *   **Backward Extrusion:** Ram moves in the opposite direction of the workpiece.
    *   **Applications:** Production of seamless tubes, rods, structural shapes (e.g., aluminum extrusions for windows, door frames).
    *   **Reference:** Ghosh & Mallik, Chapter 11; Kalpakjian & Schmid, Chapter 6.
*   **Hot Spinning:**
    *   **Description:** A rotating metal disc or tube is formed over a mandrel by applying force with a roller.
    *   **Applications:** Conical, cylindrical, or other shapes like tanks, jet engine components, cookware.
    *   **Reference:** Kalpakjian & Schmid, Chapter 6.

---

### **3. Cold Working Processes**

Cold working is performed at temperatures below the recrystallization temperature of the metal, often at room temperature.

**3.1 Definition and Characteristics:**

*   **Temperature:** Performed below the recrystallization temperature.
*   **Advantages:**
    *   **Improved surface finish:** No oxidation or scaling occurs.
    *   **Better dimensional accuracy:** Less thermal distortion.
    *   **Increased strength and hardness:** Due to work hardening.
    *   **No need for heating:** Reduces energy costs and complexity.
    *   **Can produce intricate shapes:** Especially in sheet metal forming.
*   **Disadvantages:**
    *   **Higher forces required:** Increased yield strength due to work hardening demands higher tooling forces.
    *   **Reduced ductility:** Work hardening makes the material brittle and prone to fracture if deformed too much in one step.
    *   **Work hardening limits:** Requires intermediate annealing steps for significant deformations.
    *   **Residual stresses:** Can introduce residual stresses in the material.

**3.2 Common Cold Working Processes:**

*   **Cold Rolling:**
    *   **Description:** Similar to hot rolling but performed at room temperature.
    *   **Applications:** Production of sheets, strips, bars, and foils with good surface finish and dimensional accuracy.
    *   **Reference:** Ghosh & Mallik, Chapter 12; Kalpakjian & Schmid, Chapter 6.
*   **Cold Forging:**
    *   **Description:** Forging at room temperature. This often involves processes like heading (bolt and screw manufacturing) and coining.
    *   **Applications:** Fasteners (screws, bolts, nuts), small precision parts.
    *   **Reference:** Ghosh & Mallik, Chapter 13; Kalpakjian & Schmid, Chapter 6; Altan et al., Chapters 3 & 4.
*   **Cold Drawing:**
    *   **Description:** Pulling a rod, wire, or tube through a die to reduce its diameter or change its cross-section.
    *   **Applications:** Production of wires, rods, tubes with precise dimensions and improved surface finish.
    *   **Reference:** Ghosh & Mallik, Chapter 11; Kalpakjian & Schmid, Chapter 6.
*   **Cold Extrusion:**
    *   **Description:** Extrusion at room temperature. Often used for producing hollow parts and cans.
    *   **Types:** Forward and backward cold extrusion.
    *   **Applications:** Pistons, cans, battery casings, spark plug bodies.
    *   **Reference:** Ghosh & Mallik, Chapter 11; Kalpakjian & Schmid, Chapter 6.
*   **Sheet Metal Forming:**
    *   **Description:** Processes that shape thin sheets of metal, typically below 6mm thickness.
    *   **Processes:**
        *   **Bending:** Forming a straight line in the metal.
        *   **Stretching:** Elongating the metal.
        *   **Drawing:** Forming a hollow shape from a flat sheet (e.g., cups, shells).
        *   **Punching:** Creating holes.
        *   **Blanking:** Cutting a shape from a sheet.
    *   **Applications:** Automotive body panels, appliance casings, aircraft skins, cookware.
    *   **Reference:** Kalpakjian & Schmid, Chapter 7; Ghosh & Mallik, Chapter 10.
*   **Heading (or Upsetting):**
    *   **Description:** A form of forging where the workpiece is upset, increasing its diameter. Commonly used to form the heads of bolts and screws.
    *   **Applications:** Fasteners.
    *   **Reference:** Kalpakjian & Schmid, Chapter 6.

---

### **4. Effect of Temperature on Metal Forming**

The choice between hot and cold working depends heavily on the desired outcome and the properties of the metal.

| Feature             | Hot Working                                   | Cold Working                                    |
| :------------------ | :-------------------------------------------- | :---------------------------------------------- |
| **Temperature**     | Above recrystallization temperature           | Below recrystallization temperature             |
| **Yield Strength**  | Low                                           | High (due to work hardening)                    |
| **Ductility**       | High                                          | Low (decreases with work hardening)             |
| **Deformation Limit** | Large                                         | Limited (requires annealing)                    |
| **Work Hardening**  | Eliminated by recrystallization               | Significant, increases strength                 |
| **Forces Required** | Lower                                         | Higher                                          |
| **Surface Finish**  | Poorer (scale, oxidation)                     | Better (no scale)                               |
| **Dimensional Accuracy** | Lower                                         | Higher                                          |
| **Grain Structure** | Can be refined, but risk of coarsening        | Grains elongate in the direction of deformation |
| **Residual Stresses** | Low                                           | Significant                                     |
| **Energy Input**    | Higher (heating)                              | Lower (no heating)                              |
| **Cost**            | Can be higher due to tooling and heating      | Can be higher due to tooling and annealing      |
| **Applications**    | Large deformations, complex shapes, primary processing | High precision, good surface finish, finishing operations |

---

### **5. Work Hardening and Annealing in Cold Working**

**5.1 Work Hardening (Strain Hardening)**

*   **Mechanism:** During cold deformation, dislocations (line defects in the crystal lattice) move and interact. As deformation increases, more dislocations are created, and they impede each other's motion, leading to increased resistance to further deformation.
*   **Effect:** Increases yield strength, tensile strength, and hardness; decreases ductility and toughness.
*   **Reference:** Ghosh & Mallik, Chapter 9; Kalpakjian & Schmid, Chapter 4.

**5.2 Annealing**

*   **Purpose:** To restore ductility and reduce hardness after cold working.
*   **Process:** Heating the metal to a specific temperature, holding it for a period, and then cooling it. This allows for:
    *   **Recovery:** Relief of internal stresses.
    *   **Recrystallization:** Formation of new, strain-free grains.
    *   **Grain Growth:** If held too long at high temperatures, grains can grow larger, potentially reducing strength.
*   **Reference:** Ghosh & Mallik, Chapter 9; Kalpakjian & Schmid, Chapter 4.

---

### **Alignment with Course Outcomes (COs)**

This module directly contributes to several course outcomes:

*   **CO1: Classify different techniques of casting (Knowledge Level: K2)**
    *   While this module focuses on forming, understanding casting is foundational for knowing the starting material shapes that might be further processed by forming.
*   **CO2: Summarize powder metallurgy processes (Knowledge Level: K2)**
    *   Similar to CO1, understanding other forming processes provides a broader manufacturing context.
*   **CO3: Categorize welding processes according to welding principles and materials. (Knowledge Level: K2)**
    *   Again, this provides a comparative understanding of different material joining and shaping techniques.
*   **CO4: Determine forming load associated with rolling, forging, drawing, extrusion, and sheet metal forming (Knowledge Level: K3)**
    *   This module lays the groundwork for CO4 by explaining the principles of plastic deformation and the processes involved. Understanding yield criteria and the effects of temperature and work hardening is essential for calculating forming loads.
*   **CO5: Develop products, processes or technologies for socially relevant applications. (Knowledge Level: K3, K4, K5)**
    *   The knowledge gained in metal forming is directly applicable to designing and optimizing manufacturing processes for various products, many of which have social relevance (e.g., automotive parts for safety and efficiency, aerospace components for transportation, construction materials).

---

### **Examples**

*   **Hot Rolling:** Used to produce large steel plates for shipbuilding.
*   **Hot Forging:** Manufacturing engine crankshafts for automobiles to withstand high stresses.
*   **Cold Rolling:** Producing razor blades with a sharp edge and good surface finish.
*   **Cold Drawing:** Creating strong and thin wires for electrical applications.
*   **Cold Extrusion:** Manufacturing aluminum cans for beverages.
*   **Sheet Metal Forming:** Stamping car body panels.

---

### **Practice Questions and Answers**

**Question 1:** Define recrystallization temperature and explain its significance in hot and cold working processes.
**Answer:** Recrystallization temperature is the temperature above which a metal can be plastically deformed without work hardening because new, strain-free grains form simultaneously with deformation. Its significance is that hot working occurs above this temperature (allowing large deformations and eliminating work hardening), while cold working occurs below it (resulting in work hardening and increased strength).

**Question 2:** Compare and contrast the Tresca and Von Mises yield criteria. Which one is generally preferred for metal forming simulations and why?
**Answer:**
*   **Tresca:** Based on maximum shear stress. Yields when $\frac{\sigma_1 - \sigma_3}{2} \ge \frac{\sigma_y}{2}$.
*   **Von Mises:** Based on distortion energy. Yields when $\sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{2}} \ge \sigma_y$.
*   **Comparison:** Both reduce to $\sigma = \sigma_y$ in uniaxial tension. Von Mises is generally more accurate for ductile materials under multiaxial stress.
*   **Preference:** Von Mises is often preferred for metal forming simulations because it better reflects the yielding behavior of most ductile metals.

**Question 3:** List two advantages and two disadvantages of hot working compared to cold working.
**Answer:**
*   **Advantages of Hot Working:** Lower forces required, higher ductility allowing larger deformations, elimination of work hardening.
*   **Disadvantages of Hot Working:** Poorer surface finish, lower dimensional accuracy.

**Question 4:** What is work hardening, and how can its effects be reversed?
**Answer:** Work hardening (or strain hardening) is the process where a metal becomes stronger and harder as it is plastically deformed. This is due to the accumulation of dislocations within the material, which impede further dislocation movement. The effects of work hardening can be reversed by annealing, which involves heating the metal to a specific temperature followed by controlled cooling, allowing for recovery and recrystallization.

**Question 5:** Provide an example of a product manufactured using cold forging and explain why cold forging is suitable for this product.
**Answer:** A common example of a product manufactured using cold forging is a bolt or screw. Cold forging is suitable because it allows for high-volume production with excellent dimensional accuracy and surface finish. The process of heading, a type of cold forging, efficiently forms the head of the bolt with minimal material waste and good strength properties due to work hardening.

---

### **Important Points to Remember**

*   The **recrystallization temperature** is the critical factor distinguishing hot and cold working.
*   **Work hardening** is a key phenomenon in cold working, increasing strength and hardness but reducing ductility.
*   **Yield criteria** (Tresca, Von Mises) predict the onset of plastic deformation.
*   Hot working generally requires **lower forces** and allows for **larger deformations** due to higher ductility and lower yield strength at elevated temperatures.
*   Cold working results in **better surface finish** and **higher dimensional accuracy** but requires **higher forces** and can lead to **embrittlement** due to work hardening.
*   The choice of process depends on the desired material properties, shape complexity, production volume, and cost.

---
This comprehensive set of notes covers the essential aspects of plastic deformation, yield criteria, and the fundamental hot and cold working processes in metal forming, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
