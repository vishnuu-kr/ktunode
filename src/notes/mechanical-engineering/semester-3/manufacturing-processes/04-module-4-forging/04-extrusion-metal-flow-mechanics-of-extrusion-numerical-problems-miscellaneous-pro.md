---
title: "Extrusion- Metal flow, mechanics of extrusion, numerical problems, miscellaneous processes, defects in extrusion, applications"
subject: "MANUFACTURING PROCESSES"
module: "Module 4: Forging"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d61"
status: "completed"
scrapedAt: "2026-05-20T17:50:17.340Z"
---
# Manufacturing Processes - Module 4: Forging

## Topic: Extrusion

### 1. Introduction to Extrusion

Extrusion is a metal forming process in which a material is pushed through a die orifice of a desired cross-section. It is a versatile process used to produce both simple and complex shapes with good dimensional accuracy and surface finish. Extrusion can be performed at elevated temperatures (hot extrusion) or at room temperature (cold extrusion).

**Key Concepts:**
*   **Die:** A tool with a specific opening that shapes the material being extruded.
*   **Billet/Workpiece:** The raw material, typically a cylindrical bar, that is pushed through the die.
*   **Ram:** The component that applies force to the billet, forcing it through the die.
*   **Container/Chamber:** Holds the billet during the extrusion process.

**References:**
*   Ghosh & Mallik, "Manufacturing Science," Chapter on Extrusion.
*   Kalpakjian & Schmid, "Manufacturing Engineering and Technology," Chapter on Bulk Deformation Processes.
*   Rao, "Manufacturing Technology Volume -1," Chapter on Extrusion.

### 2. Metal Flow in Extrusion

The flow of metal during extrusion is crucial for achieving desired shapes and minimizing defects. The pattern of flow depends on factors such as die geometry, friction, and material properties.

**Types of Metal Flow:**
*   **Streamline Flow:** Ideal flow where metal particles move in smooth, parallel paths from the free surface of the billet to the exit of the die. This results in minimal deformation gradient and good product quality.
*   **Central Burst (Internal Defect):** Occurs due to tensile stresses at the center of the extrudate, especially in hot extrusion with high friction or poor lubrication. The material at the center flows slower, leading to void formation.
*   **Shear Deformation:** Significant deformation near the die wall due to friction, which is higher in cold extrusion.

**Factors Affecting Metal Flow:**
*   **Friction:** High friction between the billet and the container wall, and between the billet and the die, can impede flow and lead to non-uniform deformation.
*   **Lubrication:** Proper lubrication reduces friction, promoting smoother metal flow and preventing sticking.
*   **Die Angle/Bearing Length:** The angle of the die and its bearing length influence the pressure distribution and metal flow pattern.
*   **Temperature:** Higher temperatures generally lead to lower material strength and viscosity, facilitating flow.
*   **Billet Condition:** Surface defects or internal flaws in the billet can propagate into the extrudate.

**Diagrammatic Representation (Conceptual):**
Imagine a cylindrical billet being pushed through a die. The metal closest to the die wall experiences more shear deformation due to friction, while the metal at the center may flow more uniformly. However, under certain conditions, the center can lag, creating tensile stress that can lead to bursting.

**Important Point to Remember:** Understanding metal flow is key to controlling the deformation process and preventing defects.

### 3. Mechanics of Extrusion

The mechanics of extrusion involve analyzing the forces and pressures required to deform the material. This is typically analyzed using concepts from plasticity theory.

**Key Parameters:**
*   **Extrusion Pressure (P):** The pressure required to push the billet through the die.
*   **Extrusion Ratio (r):** The ratio of the initial cross-sectional area of the billet ($A_0$) to the final cross-sectional area of the extrudate ($A_f$): $r = A_0 / A_f$.
*   **Work Done/Energy:** The energy consumed in the extrusion process.

**Mathematical Models (Simplified):**
Several simplified models exist to estimate extrusion pressure. One common approach considers the work done in plastic deformation.

**Siebel's Equation (for cylindrical extrusion without friction):**
$P = Y_m \ln(A_0 / A_f)$, where $Y_m$ is the mean flow stress of the material.

**Considering Friction (Simplified approach):**
Pressure increases due to friction. The pressure at the die exit is lower than at the ram face.

**Hawkyard's Model (More Comprehensive):**
Considers the effect of friction and die geometry. It often involves integrals to account for pressure variations along the die.

**Types of Extrusion Processes:**
*   **Direct Extrusion:** The ram moves in the same direction as the extrusion. Friction between the billet and the container wall is a significant factor, leading to higher extrusion pressures and potential for surface defects.
*   **Indirect Extrusion:** The die is moved towards a stationary billet, or the ram pushes the billet from the opposite side while the die is attached to the ram. This reduces friction between the billet and the container wall, requiring lower extrusion pressures and producing cleaner extrudates. However, it is limited to simpler shapes and smaller billet lengths.
*   **Hydrostatic Extrusion:** The billet is surrounded by a fluid (e.g., oil, salt) at very high pressure. The fluid transmits pressure uniformly to the billet, acting as a lubricant and preventing deformation until it passes through the die. This allows for the extrusion of brittle materials and reduces die friction.

**References:**
*   Ghosh & Mallik, "Manufacturing Science," detailed derivations and models.
*   Kalpakjian & Schmid, "Manufacturing Engineering and Technology," covering mechanics and different extrusion types.
*   Rao, "Manufacturing Technology Volume -1," with theoretical background.

**Course Outcome Alignment:**
*   **CO4:** Determining forming load (extrusion pressure). The mechanics of extrusion directly relates to calculating the forces and pressures involved.

### 4. Numerical Problems

**Problem 1:**
A cylindrical billet of aluminum alloy with a diameter of 100 mm is to be extruded to a rod of 25 mm diameter. If the mean flow stress of the aluminum alloy is 150 MPa, calculate the extrusion pressure required assuming no friction and streamline flow.

**Solution:**
*   Initial Area ($A_0$) = $\pi * (100/2)^2 = \pi * 50^2 = 2500\pi$ mm$^2$
*   Final Area ($A_f$) = $\pi * (25/2)^2 = \pi * 12.5^2 = 156.25\pi$ mm$^2$
*   Extrusion Ratio ($r$) = $A_0 / A_f = (2500\pi) / (156.25\pi) = 16$
*   Using Siebel's equation: $P = Y_m \ln(r)$
*   $P = 150 \text{ MPa} * \ln(16)$
*   $P = 150 \text{ MPa} * 2.7726$
*   $P \approx 415.89 \text{ MPa}$

**Answer:** The extrusion pressure required is approximately 415.89 MPa.

**Problem 2:**
In a direct extrusion process, a 50 mm diameter steel billet is extruded into a 10 mm diameter rod. The extrusion pressure required is 800 MPa. If the mean flow stress of the steel is 400 MPa, estimate the friction factor 'm' in the equation $P_{ram} = Y_m \ln(A_0/A_f) + m Y_m (L/D_c)$, where $L$ is the length of the billet and $D_c$ is the container diameter. Assume a simplified friction model where friction pressure is proportional to flow stress. (Note: This problem requires making an assumption about the friction term or the relationship between $P_{ram}$ and the ideal pressure).

*Let's assume a simplified model where the total extrusion pressure is the ideal pressure plus a friction component. A more rigorous approach would involve specific friction models.*

**Simplified Approach for Friction:**
Let's consider a simplified representation where the total pressure is related to the ideal pressure and a friction term. A common way to represent friction pressure is as a fraction of the yield stress, or related to the length of deformation.

*   Ideal Pressure ($P_{ideal}$) = $Y_m \ln(r)$
*   Extrusion Ratio ($r$) = $(50/2)^2 / (10/2)^2 = 25^2 / 5^2 = 625 / 25 = 25$
*   $P_{ideal} = 400 \text{ MPa} * \ln(25) = 400 \text{ MPa} * 3.2189 = 1287.56 \text{ MPa}$

*This shows that the actual pressure (800 MPa) is significantly lower than the ideal pressure calculated without friction for this ratio. This suggests our simplified problem statement or assumption might be flawed or that the '800 MPa' is a specific pressure measured in a specific condition, perhaps with significant reduction or a very short billet.*

**Let's re-evaluate the problem statement with a common friction model:**
Consider pressure drop due to friction. For direct extrusion, the pressure at the ram face is higher.
A more practical approach for friction in direct extrusion is to consider the pressure loss due to friction along the container wall.

Let's consider the pressure required at the ram face: $P_{ram} = P_{die} + P_{friction}$
Where $P_{die}$ is the pressure at the die exit, and $P_{friction}$ is the pressure lost due to friction.

A common empirical model for the pressure loss due to friction is $P_{friction} = \mu \frac{L}{D_c} Y_m$, where $\mu$ is a friction coefficient and $L/D_c$ is the aspect ratio. However, this is a simplification.

**Let's assume the problem implies that the *total* measured extrusion pressure is 800 MPa.**
If $P_{ideal}$ without friction is 1287.56 MPa, and the actual pressure is 800 MPa, this suggests a very efficient lubrication and die design, or the problem intends for us to consider a scenario where the deformation is less severe or the material is softer.

**Alternative Interpretation for Problem 2:**
Let's assume the 800 MPa is the required ram pressure, and we need to find the friction effect.
If we use the ideal pressure of 1287.56 MPa as a reference, and the actual pressure is 800 MPa, it implies that the friction is reducing the overall effort, which is counterintuitive for direct extrusion.

**Let's consider a different perspective:** perhaps the problem is simplified to illustrate the components of pressure.
Assume $P_{required} = P_{ideal} + P_{friction\_term}$.

If we use a more standard friction model, $P_{ram} = Y_m \ln(A_0/A_f) + k Y_m (L/D_c)$, where $k$ is a factor related to friction and lubrication.
We have: $800 = 400 \ln(25) + k * 400 * (L/D_c)$.
$800 = 1287.56 + k * 400 * (L/D_c)$.
This equation leads to a negative friction term, indicating an issue with the problem statement or the assumed model for this specific value.

**Let's assume the problem implies a *reduction in required pressure due to lubrication*.**
This is often seen in indirect extrusion or hydrostatic extrusion. However, the problem doesn't specify the type.

**Let's stick to the first problem's structure and assume a simple friction pressure:**
Assume the required pressure is $P = Y_m \ln(r) + P_{friction}$.
If $P = 800$ MPa, $Y_m = 400$ MPa, $r = 25$.
$P_{ideal} = 400 \text{ MPa} * \ln(25) = 1287.56 \text{ MPa}$.
This again points to an issue where the actual pressure is less than the ideal pressure without friction.

**Revised Problem 2 for clarity:**
A 50 mm diameter steel billet is extruded to a 10 mm diameter rod. The mean flow stress is 400 MPa. The extrusion is performed with a die angle of 60 degrees and a bearing length of 5 mm in a 50 mm diameter container. If the measured ram pressure is 1500 MPa, estimate the average friction pressure.

**Solution (Revised Problem 2):**
*   Extrusion Ratio ($r$) = $(50/2)^2 / (10/2)^2 = 25^2 / 5^2 = 625 / 25 = 25$
*   Ideal Pressure ($P_{ideal}$) = $Y_m \ln(r) = 400 \text{ MPa} * \ln(25) = 400 \text{ MPa} * 3.2189 \approx 1287.56 \text{ MPa}$
*   Total Ram Pressure ($P_{ram}$) = 1500 MPa
*   Friction Pressure ($P_{friction}$) = $P_{ram} - P_{ideal}$ (assuming ideal pressure is the base for deformation)
*   $P_{friction} = 1500 \text{ MPa} - 1287.56 \text{ MPa} \approx 212.44 \text{ MPa}$

**Answer (Revised Problem 2):** The average friction pressure is approximately 212.44 MPa.

**Practice Question:**
A cylindrical copper billet of 120 mm diameter is extruded to a square bar of 30 mm side length. The mean flow stress of copper is 250 MPa.
(a) Calculate the extrusion ratio.
(b) Calculate the extrusion pressure required assuming no friction and streamline flow.
(c) If the extrusion is direct and the friction contributes an additional pressure of 80 MPa, what is the total extrusion pressure?

**Answers:**
(a) $A_0 = \pi (120/2)^2 = 3600\pi$ mm$^2$. $A_f = 30 \times 30 = 900$ mm$^2$. $r = A_0 / A_f = (3600\pi) / 900 \approx 12.57$.
(b) $P_{ideal} = 250 \text{ MPa} * \ln(12.57) \approx 250 \text{ MPa} * 2.5313 \approx 632.83 \text{ MPa}$.
(c) $P_{total} = P_{ideal} + P_{friction} = 632.83 \text{ MPa} + 80 \text{ MPa} = 712.83 \text{ MPa}$.

**Course Outcome Alignment:**
*   **CO4:** Numerical problems directly address the calculation of forming load (extrusion pressure).

### 5. Miscellaneous Extrusion Processes

Beyond the basic direct and indirect extrusion, several variations exist for specific applications.

*   **Hydrostatic Extrusion:** As mentioned earlier, this process uses a fluid medium to transmit pressure to the billet.
    *   **Advantages:** Can extrude brittle materials, excellent surface finish, reduced die friction, lower extrusion forces compared to direct extrusion.
    *   **Disadvantages:** Requires high-pressure equipment, sealing issues.
    *   **References:** Altan et al., "Cold and Hot Forging Fundamentals and Applications."
*   **Impact Extrusion:** A high-speed extrusion process where the punch strikes the billet, causing it to flow rapidly through the die. Often performed at room temperature.
    *   **Applications:** Cartridges, battery casings, toothpaste tubes.
    *   **References:** Kalpakjian & Schmid, "Manufacturing Engineering and Technology."
*   **Backward Extrusion:** The ram pushes the billet, but the material flows forward through the die, while the punch moves backward relative to the die. This is common for producing hollow parts.
*   **Forward Extrusion:** The ram pushes the billet, and the material flows through the die in the same direction as the ram. This is the most common type.
*   **Lateral Extrusion:** The material flows sideways through a die opening.

**References:**
*   Kalpakjian & Schmid, "Manufacturing Engineering and Technology."
*   Rao, "Manufacturing Technology Volume -1."

### 6. Defects in Extrusion

Several defects can occur during extrusion, affecting the quality and integrity of the product.

*   **Central Bursting (Internal Cavities):** Occurs due to tensile stresses at the center of the extrudate, especially at high extrusion ratios or with poor lubrication in hot extrusion. The core of the billet lags behind the outer layers.
    *   **Cause:** Tensile stresses at the center.
    *   **Mitigation:** Improved lubrication, reduced extrusion speed, optimized die geometry, preheating of the billet to a specific temperature range.
*   **Surface Cracking:** Cracks on the surface of the extrudate.
    *   **Cause:**
        *   **Friction:** Excessive friction between the billet and the container.
        *   **High Strain Rate:** In hot extrusion, if the extrusion speed is too high, the material may not have sufficient time to deform plastically, leading to cracking.
        *   **Adiabatic Heating:** High extrusion speeds can cause localized heating, leading to overheating and cracking.
        *   **Poor Lubrication:** Inadequate lubrication can cause sticking and tearing.
    *   **Mitigation:** Proper lubrication, controlled extrusion speed, optimized die design.
*   **Die Line/Tool Marks:** Fine lines or grooves on the surface of the extrudate.
    *   **Cause:** Imperfections on the die surface or pickup of material from the die.
    *   **Mitigation:** Polishing of the die, proper cleaning.
*   **Uneven Surface Roughness:** Variations in the surface finish along the length of the extrudate.
    *   **Cause:** Inconsistent lubrication, variations in billet temperature.
    *   **Mitigation:** Consistent lubrication, uniform billet heating.
*   **Brittleness:** Extrudates may become brittle under certain conditions, especially if cooled too rapidly or if specific alloying elements are present.
*   **Contamination:** Foreign particles or oxides from the billet surface can be incorporated into the extrudate.
    *   **Cause:** Dirty billet surface or container.
    *   **Mitigation:** Proper cleaning of billet and container.

**References:**
*   Ghosh & Mallik, "Manufacturing Science," section on defects.
*   Kalpakjian & Schmid, "Manufacturing Engineering and Technology," on extrusion defects.
*   ASM Handbook, Vol. 14, "Forming and Forging," detailed discussion on defects.

**Important Point to Remember:** Identifying and understanding the causes of defects is crucial for process optimization and producing high-quality products.

### 7. Applications of Extrusion

Extrusion is a highly versatile process used across various industries due to its ability to produce a wide range of shapes and materials.

*   **Aerospace Industry:** High-strength aluminum alloys for aircraft components, structural parts, and engine components.
*   **Automotive Industry:**
    *   Aluminum extrusions for car bodies, chassis, window frames, and heat exchangers.
    *   Steel extrusions for shafts, gears, and structural components.
    *   Copper and brass extrusions for electrical connectors and plumbing.
*   **Construction Industry:**
    *   Aluminum extrusions for window frames, door frames, curtain walls, and architectural elements.
    *   Pipes and tubes made from various metals.
*   **Electronics Industry:** Extruded components for heat sinks, casings, and electrical conductors.
*   **Consumer Goods:**
    *   Toothpaste tubes (impact extrusion).
    *   Appliance components.
    *   Tools and hardware.
*   **Specialty Applications:**
    *   Extrusion of refractory metals (e.g., tungsten, molybdenum) at high temperatures.
    *   Extrusion of polymers and composites.
    *   Production of seamless tubes and pipes.

**Examples:**
*   The aluminum frame of your laptop or smartphone is likely an extruded product.
*   Many plumbing pipes are extruded from copper or PVC.
*   The structural aluminum beams used in modern buildings are often produced by extrusion.

**References:**
*   Kalpakjian & Schmid, "Manufacturing Engineering and Technology."
*   Rao, "Manufacturing Technology Volume -1."
*   Altan et al., "Cold and Hot Forging Fundamentals and Applications."

**Course Outcome Alignment:**
*   **CO5:** Applications of extrusion in socially relevant sectors like construction, automotive, and aerospace demonstrate the development of processes for practical uses.

### 8. Summary and Key Takeaways

*   **Extrusion:** A deformation process where metal is pushed through a die of desired cross-section.
*   **Metal Flow:** Crucial for product quality; affected by friction, die geometry, and temperature. Central bursting is a common defect related to flow.
*   **Mechanics:** Involves calculating extrusion pressure, considering ideal deformation and friction. Direct, indirect, and hydrostatic extrusion are key variations.
*   **Defects:** Central bursting, surface cracking, die lines, etc., require careful control of process parameters.
*   **Applications:** Wide-ranging across aerospace, automotive, construction, and consumer goods industries.

**Important Points to Remember:**
*   Friction is a major factor influencing extrusion pressure, especially in direct extrusion.
*   Die design and lubrication are critical for minimizing defects and achieving desired shapes.
*   Understanding the material's flow stress at the extrusion temperature is essential for calculating forces.
*   Indirect and hydrostatic extrusion offer advantages in reducing friction and extruding difficult materials.

This comprehensive set of notes covers the topic of extrusion within Module 4 of Manufacturing Processes, aligning with the specified learning outcomes and course outcomes. The integration of concepts from the provided textbooks and references aims to provide a solid foundation for understanding this important manufacturing process.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
