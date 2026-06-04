---
title: "Determine the shear strength of a mild steel rod using a shear test."
subject: "MATERIALS TESTING LAB"
module: "Module 4: Determine the shear strength of a mild steel rod using a shear test."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e76"
status: "completed"
scrapedAt: "2026-05-20T17:50:20.894Z"
---
# MATERIALS TESTING LAB - Module 4: Shear Strength of Mild Steel Rod

## Topic: Determine the shear strength of a mild steel rod using a shear test.

---

### 1. Introduction and Background

This module focuses on understanding and experimentally determining the **shear strength** of a mild steel rod. Shear is a type of stress that occurs when a material is subjected to forces acting parallel to its cross-section. This is distinct from tensile or compressive forces, which act perpendicular to the cross-section.

**Key Concepts:**

*   **Shear Stress ($\tau$):** The intensity of internal forces acting parallel to a plane within a body. It is defined as the shear force ($V$) divided by the area ($A$) over which the force is acting.
    $$\tau = \frac{V}{A}$$
    *   **Units:** Pascals (Pa) or Megapascals (MPa) in SI units, or pounds per square inch (psi) in imperial units.

*   **Shear Strain ($\gamma$):** The deformation of a material in response to shear stress. It is defined as the change in angle between two originally perpendicular lines in the material.
    $$\gamma = \tan(\theta) \approx \theta \text{ (for small angles)}$$
    where $\theta$ is the change in angle in radians.

*   **Shear Modulus ($G$) / Modulus of Rigidity:** The ratio of shear stress to shear strain within the elastic limit. It is a measure of a material's resistance to shear deformation.
    $$G = \frac{\tau}{\gamma}$$
    *   **Relationship to Young's Modulus ($E$) and Poisson's Ratio ($\nu$):** For isotropic materials, $G$ is related to $E$ and $\nu$ by:
        $$G = \frac{E}{2(1 + \nu)}$$
        (Callister's, Chapter 6.5)

*   **Shear Strength:** The maximum shear stress a material can withstand before it fails (i.e., ruptures or undergoes significant plastic deformation) in shear.
    *   **Ultimate Shear Strength:** The maximum shear stress the material can sustain.
    *   **Yield Shear Strength:** The shear stress at which the material begins to deform plastically.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Directly addresses evaluating mechanical properties (shear strength) under a specific loading condition (shear).
*   **CO4 (K3):** Focuses on utilizing experimental techniques to determine material properties.
*   **CO5 (K3):** Involves applying engineering principles (stress, strain) to analyze material behavior under load.

**Textbook References:**

*   **Callister's Materials Science and Engineering:** While Callister's primarily focuses on broader material science concepts, it often touches upon mechanical properties like tensile strength, hardness, and ductility. Understanding these allows for comparison with shear strength and can help in relating microstructure to mechanical behavior (CO2). Chapter 6 (Mechanical Properties) is relevant.
*   **Mechanical Testing and Evaluation:** This textbook is highly relevant as it delves into the practical aspects of testing materials to determine their mechanical properties, including shear testing. It will provide detailed methodologies and interpretation of results.

---

### 2. Understanding Shear Testing

Shear tests are conducted to measure the shear strength of materials. Common methods include:

*   **Direct Shear Test:** A specimen is placed in a fixture and subjected to forces that cause one part of the specimen to slide relative to another.
*   **Torsion Test:** A specimen is subjected to a twisting moment, which induces shear stresses and strains. While this indirectly measures shear properties, direct shear tests are more common for determining ultimate shear strength in a straightforward manner.
*   **Punching Shear Test:** Used for sheet materials or plates, where a punch is forced through the material, causing shear failure along the circumference of the punch.

For a mild steel rod, a **single shear test** or a **double shear test** is typically performed.

**Types of Shear Tests for Rods:**

*   **Single Shear Test:**
    *   The rod is placed in a fixture such that the shear force is applied across a single cross-sectional area.
    *   Two opposing forces are applied, creating a shear force concentrated on one plane of the rod.
    *   **Diagram:** Imagine a rod supported at two points, with a force applied downwards in the middle, causing the rod to shear at the support points.

*   **Double Shear Test:**
    *   The rod passes through two supports, and the shear force is applied in the middle, causing failure across two cross-sectional areas simultaneously.
    *   This method generally provides more consistent results by distributing the load more evenly.
    *   **Diagram:** Imagine a rod passing through a hole in a fixture, and a force is applied to the fixture, pushing it downwards. The rod is sheared at the edges of the hole on both sides.

**Procedure for Direct Shear Test (Typical for a Rod):**

1.  **Specimen Preparation:** Obtain a mild steel rod of known diameter. Measure the diameter accurately using a vernier caliper or micrometer to determine the cross-sectional area.
    *   **Area ($A$) = $\frac{\pi d^2}{4}$**, where $d$ is the diameter.
2.  **Fixture Setup:** Secure the specimen in the shear testing apparatus. For a rod, this usually involves a fixture that holds the rod and applies the shear load.
3.  **Load Application:** Apply a gradually increasing shear force to the specimen using a universal testing machine (UTM) or a specialized shear testing machine.
4.  **Data Recording:** Record the applied shear force and the corresponding deformation (if displacement is measured). Monitor the specimen for signs of yielding and fracture.
5.  **Failure Observation:** Observe the mode of failure. Mild steel typically exhibits ductile shear failure, often characterized by a cup-and-cone fracture surface.
6.  **Data Analysis:**
    *   Plot the shear stress vs. shear strain (if strain is measured).
    *   Identify the shear stress at which yielding begins (yield shear strength).
    *   Identify the maximum shear stress achieved (ultimate shear strength).
    *   **Ultimate Shear Strength ($\tau_{ult}$) = $\frac{V_{max}}{A}$**, where $V_{max}$ is the maximum shear force recorded.
    *   **Yield Shear Strength ($\tau_{yield}$) = $\frac{V_{yield}}{A}$**, where $V_{yield}$ is the shear force at the yield point.

**Important Points to Remember:**

*   **Precise Measurement of Diameter:** Crucial for accurate calculation of cross-sectional area.
*   **Proper Fixturing:** Ensures the load is applied correctly to induce shear.
*   **Controlled Loading Rate:** Affects the observed strength, especially for ductile materials.
*   **Observation of Failure Mode:** Provides insights into the material's behavior.

**Textbook References:**

*   **Mechanical Testing and Evaluation (Volume 8):** This book will provide detailed schematics of shear test fixtures and procedures for various material forms, including rods. It will also discuss the interpretation of force-displacement curves obtained during shear testing.

---

### 3. Material Properties of Mild Steel

Mild steel is a common engineering material known for its **ductility**, **toughness**, and **weldability**. Its mechanical properties are significantly influenced by its microstructure, which typically consists of ferrite and pearlite.

*   **Ferrite ($\alpha$-iron):** A body-centered cubic (BCC) phase, relatively soft and ductile.
*   **Pearlite:** A lamellar structure of ferrite and cementite ($Fe_3C$), harder and stronger than ferrite.

**Relationship between Microstructure and Mechanical Properties (CO2):**

*   The presence and distribution of pearlite influence the strength and hardness of mild steel. More pearlite generally leads to higher strength but reduced ductility.
*   Grain size also plays a role. Finer grain sizes typically result in higher strength and toughness due to increased grain boundary area, which impedes dislocation movement. (Callister's, Chapter 9.4 – Grain Size Effect on Strength)

**Typical Mechanical Properties of Mild Steel (approximate values):**

*   **Tensile Yield Strength:** 250-350 MPa
*   **Tensile Ultimate Strength:** 400-550 MPa
*   **Ductility (Elongation):** 20-30%

**Shear Strength of Mild Steel:**

The shear strength of mild steel is generally lower than its tensile strength. A common rule of thumb is that the ultimate shear strength is approximately **60-80% of the ultimate tensile strength**.

*   $\tau_{ult} \approx (0.6 \text{ to } 0.8) \times \sigma_{ult}$
    (This is an empirical relationship and can vary depending on the specific grade of mild steel and the testing conditions.)

**Relevance to Course Outcomes:**

*   **CO2 (K4):** Understanding the microstructure of mild steel (ferrite, pearlite) and how it influences its mechanical properties, including shear strength, is a key aspect of this outcome.
*   **CO1 (K3):** Comparing the determined shear strength with known tensile strengths of mild steel helps evaluate its mechanical properties under different loading.

**Textbook References:**

*   **Callister's Materials Science and Engineering:** Chapter 6 (Mechanical Properties) will provide typical values and explanations of tensile properties for steels. Chapter 9 (Mechanical Behavior – Deformation) discusses dislocations and their role in deformation, which is fundamental to understanding yielding and fracture in shear.
*   **Introduction to Materials Science for Engineers:** This book will also offer insights into the structure-property relationships of common engineering materials like steel, including their mechanical behavior.

---

### 4. Experimental Setup and Procedure

**Objective:** To experimentally determine the ultimate shear strength of a mild steel rod.

**Apparatus:**

1.  **Universal Testing Machine (UTM):** Capable of applying controlled tensile or compressive loads, which can be adapted for shear testing.
2.  **Shear Test Fixture:** A specialized fixture designed to hold the mild steel rod and apply a shear force. This typically consists of:
    *   A base or chuck to hold one end of the rod.
    *   A die or collar that fits snugly around the rod, allowing the load to be applied to the fixture, which then shears the rod.
    *   A mechanism to apply the force, often through a punch that pushes against the rod within the fixture.
    *   **Example Fixture:** A common fixture involves a hardened steel block with a precisely sized hole through which the rod passes. A punch is then used to push the rod out of the hole, shearing it at the edges of the hole.
3.  **Micrometer/Vernier Caliper:** For accurate measurement of the rod's diameter.
4.  **Measuring Scale:** For measuring the length of the rod (if relevant for strain measurement).
5.  **Data Acquisition System:** To record the applied load (force) and displacement (if measured).

**Materials:**

*   Mild steel rod specimens (ensure consistency in diameter).
*   Lubricant (optional, to reduce friction between the rod and the fixture).

**Procedure:**

1.  **Specimen Measurement:**
    *   Using a micrometer or vernier caliper, carefully measure the diameter ($d$) of the mild steel rod at multiple points along its length.
    *   Calculate the average diameter and then the cross-sectional area ($A = \pi d^2 / 4$).
2.  **Fixture and UTM Setup:**
    *   Install the shear test fixture onto the UTM.
    *   Place the mild steel rod specimen into the fixture according to the manufacturer's instructions. Ensure it is properly seated and aligned.
3.  **Load Application:**
    *   Set the UTM to apply a controlled **displacement-controlled** test (this is generally preferred for ductile materials as it ensures continued deformation after yielding).
    *   Ensure the data acquisition system is ready to record load and displacement.
    *   Start the test and apply the load at a constant, slow rate.
    *   **Monitor the load-displacement curve.** You should observe an initial elastic region, followed by yielding, and then plastic deformation until fracture.
4.  **Data Recording:**
    *   Record the maximum load ($V_{max}$) applied before the rod fractures.
    *   If displacement is measured, record the displacement at the maximum load.
5.  **Failure Observation:**
    *   After the test, carefully remove the fractured specimen.
    *   Examine the fracture surface. For mild steel, a **dihedral fracture** (cup-and-cone) is common in ductile shear.
    *   Note any deformation or damage to the fixture.
6.  **Repeat Tests:** It is good practice to conduct multiple tests (e.g., 3-5 specimens) to ensure the reliability of the results and to calculate an average shear strength.

**Relevance to Course Outcomes:**

*   **CO4 (K3):** This entire section details the experimental techniques used to determine shear strength.
*   **CO1 (K3):** The measured shear strength directly contributes to evaluating the material's mechanical properties.

---

### 5. Data Analysis and Calculations

**1. Calculate Cross-Sectional Area:**
Given the average diameter $d$:
$$A = \frac{\pi d^2}{4}$$

**2. Calculate Shear Stress:**
The shear stress ($\tau$) at any point during the test is calculated as:
$$\tau = \frac{V}{A}$$
where $V$ is the applied shear force at that point.

**3. Determine Ultimate Shear Strength ($\tau_{ult}$):**
The ultimate shear strength is calculated using the maximum shear force ($V_{max}$) recorded during the test:
$$\tau_{ult} = \frac{V_{max}}{A}$$

**4. Determine Yield Shear Strength ($\tau_{yield}$):**
If a clear yield point is visible on the load-displacement curve, identify the corresponding force ($V_{yield}$). The yield shear strength is then:
$$\tau_{yield} = \frac{V_{yield}}{A}$$
For ductile materials like mild steel, the yield point might be less distinct, and it might be necessary to use an offset method (e.g., 0.2% offset) if a precise yield point is not apparent, though this is more common in tensile testing. For shear, visual observation of the initial significant deviation from linearity is often used.

**5. Calculate Average Shear Strength:**
If multiple specimens were tested, calculate the average ultimate shear strength:
$$\tau_{ult, avg} = \frac{\sum \tau_{ult, i}}{n}$$
where $n$ is the number of specimens tested.

**6. Calculate Standard Deviation and Coefficient of Variation (Optional but recommended):**
To assess the variability of the results.

**7. Relate Shear Strength to Tensile Strength (for CO1 and CO2):**
Compare the experimentally determined shear strength with the typical tensile strength values for mild steel.
*   Calculate the ratio: $\frac{\tau_{ult, avg}}{\sigma_{ult, typical}}$ and compare it to the expected range (0.6-0.8).
*   Discuss potential reasons for deviations, considering material variations, experimental errors, and the influence of microstructure.

**Example Calculation:**

Suppose a mild steel rod with a measured diameter of $d = 10 \text{ mm}$ is tested. The maximum shear force recorded by the UTM is $V_{max} = 50 \text{ kN}$.

1.  **Area Calculation:**
    $$A = \frac{\pi (10 \text{ mm})^2}{4} = \frac{\pi \times 100 \text{ mm}^2}{4} = 25\pi \text{ mm}^2 \approx 78.54 \text{ mm}^2$$
2.  **Ultimate Shear Strength Calculation:**
    $$V_{max} = 50 \text{ kN} = 50 \times 10^3 \text{ N}$$
    $$\tau_{ult} = \frac{50 \times 10^3 \text{ N}}{78.54 \text{ mm}^2} \approx 636.6 \text{ N/mm}^2$$
    Since $1 \text{ N/mm}^2 = 1 \text{ MPa}$,
    $$\tau_{ult} \approx 636.6 \text{ MPa}$$

**Important Points to Remember:**

*   **Units:** Be consistent with units (N, mm, MPa, kN, m, GPa).
*   **Significant Figures:** Report results with appropriate significant figures based on the precision of measurements.
*   **Assumptions:** Acknowledge any assumptions made, such as uniform material properties and perfect alignment.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Evaluation of mechanical properties through calculations and comparisons.
*   **CO5 (K3):** Application of fundamental engineering principles (stress calculation) to analyze behavior.

---

### 6. Analysis of Results and Discussion

This section is crucial for interpreting the experimental findings and connecting them to theoretical concepts.

**Key Discussion Points:**

1.  **Comparison with Literature Values:**
    *   Compare your experimentally determined shear strength (average $\tau_{ult}$) with typical literature values for mild steel.
    *   Is your value within the expected range? If not, why might there be a difference?
        *   **Material Variability:** Different grades of mild steel have varying mechanical properties.
        *   **Heat Treatment:** Any prior heat treatment can significantly alter strength.
        *   **Microstructural Differences:** Variations in grain size, ferrite/pearlite distribution.
        *   **Testing Conditions:** Loading rate, temperature.
2.  **Shear Strength to Tensile Strength Ratio:**
    *   Calculate the ratio $\frac{\tau_{ult}}{\sigma_{ult}}$ (using typical $\sigma_{ult}$ for mild steel).
    *   Does this ratio fall within the expected 0.6-0.8 range?
    *   **Connect to CO1 & CO2:** Discuss how this ratio reflects the material's response to shear loading compared to tensile loading, which is fundamentally linked to its crystal structure and deformation mechanisms (e.g., slip systems). (Callister's, Chapter 6.2 – Tensile Properties, Chapter 9.1 – Plastic Deformation)
3.  **Failure Mode:**
    *   Describe the observed fracture surface. Was it ductile (cup-and-cone) or brittle?
    *   **Connect to CO2:** Relate the ductile failure mode to the ability of mild steel's BCC structure to undergo extensive plastic deformation through slip. Explain how dislocations move along slip planes under shear stress.
    *   If brittle fracture occurred, discuss potential causes (e.g., impurities, stress concentrations, low testing temperature).
4.  **Experimental Errors and Limitations:**
    *   **Measurement Errors:** Inaccurate diameter measurement, calibration errors in the UTM.
    *   **Fixture Imperfections:** Misalignment, friction within the fixture, play in the loading mechanism.
    *   **Specimen Variability:** Inconsistent material properties across different specimens.
    *   **Loading Rate:** If the loading rate was too high, it might artificially increase the measured strength.
    *   **Definition of Yield:** Subjectivity in identifying the yield point from the load-displacement curve.
    *   **Connect to CO4:** Discuss how these factors affect the reliability and accuracy of the experimental determination.
5.  **Impact of Design Features (CO3):**
    *   While this specific test focuses on bulk material property, discuss how shear strength is critical in design.
    *   **Examples:**
        *   **Rivets and Bolts:** Shear failure of fasteners is a common failure mode. The shear strength of the bolt material is a key design parameter.
        *   **Shafts under Torsion:** Torsional loads induce shear stress in shafts. The shaft's resistance to shear (related to shear modulus) and its ultimate shear strength are critical for preventing failure.
        *   **Cutting Tools:** The shear strength of the material being cut and the cutting tool's material are important.
        *   **Gear Teeth:** Subjected to bending and shear stresses.
    *   **Connect to CO3:** Explain how knowing the shear strength of mild steel allows engineers to select appropriate materials and design components that can withstand expected shear loads without failing. For instance, if a bolt made of mild steel is used to join two plates, the design must ensure the shear force on the bolt is less than its shear yield strength.
6.  **Suggestions for Improvement:**
    *   How could the experimental procedure be improved to obtain more accurate or reliable results? (e.g., better calibration, more precise fixtures, use of extensometers for strain measurement, testing at different temperatures).

**Textbook References:**

*   **Mechanical Testing and Evaluation:** Will offer guidance on interpreting test results and common sources of error in shear testing.
*   **Mechanics of Materials (Gere & Goodno):** Provides a strong theoretical foundation for understanding shear stress, shear strain, and failure mechanisms in materials, allowing for a deeper analysis of the experimental results. Chapter 7 (Shear Forces and Bending Moments) and Chapter 12 (Shear Stresses in Beams) are relevant for context, while concepts of material failure under shear are broadly applicable.
*   **Introduction to Materials Science for Engineers:** Reinforces the link between microstructure and mechanical properties.

---

### 7. Practice Questions and Exercises

**Question 1:**
Define shear stress and shear strain. Write down the formula for calculating shear stress.
**Answer:**
Shear stress ($\tau$) is the internal resisting force per unit area acting parallel to a plane within a body. Shear strain ($\gamma$) is the angular deformation resulting from shear stress. The formula for shear stress is $\tau = \frac{V}{A}$, where $V$ is the shear force and $A$ is the cross-sectional area.

**Question 2:**
A mild steel rod with a diameter of 12 mm experiences a maximum shear force of 70 kN before fracturing. Calculate its ultimate shear strength in MPa.
**Answer:**
*   Diameter, $d = 12 \text{ mm}$
*   Cross-sectional Area, $A = \frac{\pi d^2}{4} = \frac{\pi (12 \text{ mm})^2}{4} = \frac{\pi \times 144 \text{ mm}^2}{4} = 36\pi \text{ mm}^2 \approx 113.1 \text{ mm}^2$
*   Maximum Shear Force, $V_{max} = 70 \text{ kN} = 70 \times 10^3 \text{ N}$
*   Ultimate Shear Strength, $\tau_{ult} = \frac{V_{max}}{A} = \frac{70 \times 10^3 \text{ N}}{113.1 \text{ mm}^2} \approx 619 \text{ N/mm}^2 = 619 \text{ MPa}$

**Question 3:**
What is the typical relationship between the ultimate shear strength and the ultimate tensile strength of mild steel?
**Answer:**
The ultimate shear strength of mild steel is generally about 60-80% of its ultimate tensile strength. $\tau_{ult} \approx (0.6 \text{ to } 0.8) \times \sigma_{ult}$.

**Question 4:**
Describe a typical failure mode for mild steel in a direct shear test. How does this relate to its microstructure? (Relates to CO2)
**Answer:**
Mild steel typically exhibits a ductile shear failure, characterized by a cup-and-cone fracture surface. This is related to its microstructure of ferrite and pearlite. The BCC structure of ferrite allows for significant plastic deformation through dislocation slip. Under shear stress, dislocations move along slip planes, leading to extensive yielding and deformation before fracture. The ductile failure mode indicates that the material absorbs a considerable amount of energy during fracture.

**Question 5:**
Name two engineering components where the shear strength of mild steel is a critical design consideration. (Relates to CO3)
**Answer:**
1.  **Rivets and Bolts:** When used to join components, they are often subjected to shear forces across their cross-section. The shear strength of the fastener material is crucial to prevent premature failure.
2.  **Shafts Subjected to Torsion:** Torsional loads induce shear stresses in shafts. The material's shear strength dictates its capacity to withstand these twisting forces without yielding or fracturing.

**Question 6:**
List at least three potential sources of experimental error in determining the shear strength of a mild steel rod. (Relates to CO4)
**Answer:**
1.  Inaccurate measurement of the rod's diameter.
2.  Misalignment of the specimen within the shear fixture.
3.  Friction between the rod and the shear fixture.
4.  Calibration errors in the Universal Testing Machine (UTM).
5.  Non-uniform material properties across different specimens.

---

### 8. Important Points to Remember

*   **Shear stress** acts parallel to the cross-section, unlike tensile stress which acts perpendicular.
*   The **cross-sectional area** of the rod must be accurately measured for accurate shear strength calculations.
*   Mild steel is a **ductile material**, and its shear failure is typically accompanied by significant plastic deformation.
*   The **shear strength to tensile strength ratio** for mild steel is approximately 0.6-0.8.
*   **Microstructure** (ferrite and pearlite) influences the shear strength and failure mode through dislocation movement.
*   **Experimental errors** can significantly impact the accuracy of the determined shear strength. Careful procedure and analysis are vital.
*   Understanding shear strength is critical for **safe and efficient engineering design**, particularly for components subjected to shear loads like fasteners and rotating shafts.

---

This comprehensive set of notes covers the determination of shear strength of a mild steel rod using a shear test, addressing all learning outcomes and aligning with the specified course outcomes. The inclusion of theoretical background, practical procedures, data analysis, and discussion points aims to provide a thorough understanding of the topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
