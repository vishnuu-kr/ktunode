---
title: "Earthing and Soil Resistivity calculation– Earth electrodes. Methods of earthing - Plate earthing - Pipe earthing - Rod earthing. Methods of improving earth resistance - Size of earth continuity conductor"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 4: Standby DG Systems with AMF panel – Essential protections. UPS system and its design for residential application"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36556"
status: "completed"
scrapedAt: "2026-05-23T16:27:24.070Z"
---
# Module 4: Standby DG Systems with AMF Panel – Essential Protections, UPS System Design for Residential Applications

## Topic: Earthing and Soil Resistivity Calculation – Earth Electrodes, Methods of Earthing, Methods of Improving Earth Resistance, Size of Earth Continuity Conductor

---

### 1. Introduction to Earthing and its Importance (CO1, CO5: K2, K3)

**Earthing** is the process of connecting the non-current carrying metallic parts of an electrical installation to the earth (ground). This connection is made through a low resistance path.

**Key Concepts:**

*   **Purpose of Earthing:**
    *   **Safety:** Prevents electric shock to personnel by providing a low-resistance path for fault current to flow to the earth, tripping protective devices.
    *   **Equipment Protection:** Protects electrical equipment from damage due to overvoltages (e.g., lightning strikes, switching surges) by providing a path for these surges to dissipate into the earth.
    *   **System Stability:** Helps in stabilizing the voltage of the electrical system, especially during faults.
    *   **Noise Reduction:** Minimizes electromagnetic interference and noise in sensitive electronic equipment.

*   **Types of Earthing:**
    *   **Protective Earthing:** Connecting the metallic enclosures of electrical equipment and installations to earth for safety. This is the most common type.
    *   **System Earthing (Neutral Earthing):** Connecting the neutral point of a power system (e.g., transformer secondary) to earth for system stability and fault current limitation.
    *   **Lightning Earthing:** Providing a low-resistance path for lightning current to flow into the earth.

**Textbook References:**

*   **NEC (BIS):** Specifies safety requirements for earthing in electrical installations.
*   **Electrical Systems Design by M. K. Giridharan:** Explains the fundamental principles and design considerations for earthing.
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya:** Covers the practical aspects of earthing system design and cost estimation.

**Important Point to Remember:** A properly designed earthing system is crucial for both personnel safety and the reliable operation of electrical equipment.

---

### 2. Soil Resistivity and its Measurement (CO1, CO5: K2, K3)

**Soil Resistivity ($\rho$)** is a measure of the resistance of a given volume of soil to the passage of electric current. It is a critical parameter in designing an effective earthing system.

**Key Concepts:**

*   **Factors Affecting Soil Resistivity:**
    *   **Moisture Content:** Higher moisture content generally leads to lower resistivity.
    *   **Temperature:** Lower temperatures increase resistivity.
    *   **Soil Composition:** Soils with a high salt content, clay, and organic matter tend to have lower resistivity than sandy or rocky soils.
    *   **Compaction:** Densely compacted soil offers lower resistivity.

*   **Methods of Measuring Soil Resistivity:**
    *   **Four-Electrode Method (Wenner Array):** This is the most common and accurate method. Four electrodes are driven into the ground at equal spacing ($a$). The resistivity is calculated using a formula based on the measured resistance between the outer electrodes and the current injected through them.
        *   **Formula:** $\rho = 2 \pi a R$
            *   Where:
                *   $\rho$ = Soil resistivity (in Ohm-meters, $\Omega \cdot m$)
                *   $a$ = Spacing between electrodes (in meters, $m$)
                *   $R$ = Measured resistance between the outer electrodes (in Ohms, $\Omega$)

    *   **Two-Electrode Method:** Less accurate, used for initial estimations or when only two electrodes can be used.

**Example:**
If the spacing ($a$) between electrodes is 5 meters and the measured resistance ($R$) is 10 Ohms, then the soil resistivity would be:
$\rho = 2 \pi \times 5 \, m \times 10 \, \Omega = 100 \pi \, \Omega \cdot m \approx 314.16 \, \Omega \cdot m$.

**Textbook References:**

*   **Electrical Systems Design by M. K. Giridharan:** Details the principles and methods for measuring soil resistivity.
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya:** Discusses the practical implications of soil resistivity in cost estimation.

**Important Point to Remember:** Soil resistivity varies significantly with location and environmental conditions. Regular measurement might be necessary for critical installations.

---

### 3. Earth Electrodes and Their Types (CO1, CO5: K2, K3)

**Earth Electrodes** are conductive components buried in the earth to provide the connection between the electrical installation and the ground.

**Key Concepts:**

*   **Requirements of an Earth Electrode:**
    *   **Low Resistance:** To ensure effective dissipation of fault currents.
    *   **Durability:** Resistance to corrosion and physical damage.
    *   **Good Electrical Contact:** With the surrounding soil.

*   **Types of Earth Electrodes:**

    1.  **Plate Earthing:**
        *   **Description:** A metal plate (usually GI or Copper) buried vertically in the earth at a depth of at least 0.75 meters (as per NBC 2016). The plate is surrounded by charcoal and salt to improve conductivity.
        *   **Advantages:** Simple to install, relatively inexpensive for moderate soil conditions.
        *   **Disadvantages:** Requires a large area, effectiveness can be reduced by drying out of the soil around the plate.
        *   **IS Code/NBC Reference:** NBC 2016 (Part VIII - Building Services, Section 3 - Electrical Installations) provides guidelines for earthing electrodes.

    2.  **Pipe Earthing:**
        *   **Description:** A GI or Copper pipe, perforated with holes, is buried vertically in the earth. The depth depends on the soil resistivity and required resistance, typically 3 meters or more. The pipe is surrounded by gravel and sand for better contact and drainage.
        *   **Advantages:** Cost-effective, good surface area for contact, easy to maintain by watering the pipe.
        *   **Disadvantages:** Susceptible to corrosion over time, especially GI pipes.
        *   **IS Code/NBC Reference:** NBC 2016 provides recommendations for pipe earthing.

    3.  **Rod Earthing:**
        *   **Description:** Solid or hollow rods made of copper or GI are driven vertically into the ground. Multiple rods can be used in parallel, connected by a suitable conductor.
        *   **Advantages:** Simple installation, requires less space than plates, good for high fault current dissipation.
        *   **Disadvantages:** May require specialized driving equipment for hard soil, effectiveness can be reduced by soil drying.
        *   **IS Code/NBC Reference:** NBC 2016 covers rod earthing as a primary method.

    4.  **Strip Earthing:**
        *   **Description:** A bare copper or GI strip buried horizontally in trenches at a specified depth.
        *   **Advantages:** Suitable for large areas and high fault currents.
        *   **Disadvantages:** Requires significant trenching work.

    5.  **Wire or Conductor Earthing:**
        *   **Description:** A run of galvanized iron or copper wire buried in trenches.
        *   **Advantages:** Simple and cheap.
        *   **Disadvantages:** Not suitable for high fault currents or where very low earth resistance is required.

**Textbook References:**

*   **National Electrical Code (BIS):** Provides specific clauses and standards for different types of earth electrodes.
*   **Residential Commercial and Industrial Systems by H. Joshi:** Discusses the selection and application of various earthing electrodes in different building types.
*   **A Course in Electrical Installation Estimating and Costing by J. B. Gupta:** Details the cost implications and material selection for different earthing electrodes.

**Important Point to Remember:** The choice of earth electrode depends on soil resistivity, required earth resistance value, space availability, and cost.

---

### 4. Methods of Improving Earth Resistance (CO1, CO5: K2, K3)

When the measured soil resistivity is high, or the initial earth resistance is not within the acceptable limits, methods are employed to reduce the earth resistance.

**Key Concepts:**

*   **Increasing Electrode Surface Area:**
    *   Using a larger plate or a longer/thicker pipe or rod.
    *   Installing multiple electrodes in parallel, spaced at least twice the depth of the electrodes apart, and connecting them with a suitable conductor.

*   **Improving Soil Conductivity:**
    *   **Charcoal and Salt Treatment:** Burying the earth electrode with a mixture of charcoal (crushed, preferably porous) and common salt (NaCl). Charcoal provides a conductive medium and helps retain moisture, while salt dissolves to increase soil conductivity.
        *   **Procedure:** The electrode is placed in a pit, and layers of charcoal and salt mixture are packed around it. The proportion is typically 1:1 by volume.
    *   **Using Bentonite Clay:** Bentonite clay, when mixed with water, swells and forms a conductive slurry that surrounds the electrode, improving contact and retaining moisture.
    *   **Using Electrically Conductive Backfill:** Specialized conductive backfill materials can be used for enhanced conductivity.

*   **Increasing Electrode Depth:** Driving rods deeper or burying plates deeper generally leads to lower resistance, as deeper soil layers often have higher moisture content and better conductivity.

*   **Increasing Electrode Spacing (for multiple electrodes):** Ensure adequate spacing between parallel electrodes to avoid their "resistance zones" overlapping, which would reduce the overall effectiveness.

**Example:**
If a single rod earthing system yields a resistance of 50 $\Omega$, and the required resistance is 5 $\Omega$ (typical for sensitive equipment or lightning protection), one might consider using:
*   **Multiple Rods:** Install, say, 5 rods in parallel. If the resistance of each rod is 50 $\Omega$, the combined resistance (ideally, assuming perfect conditions and sufficient spacing) would be $50 \Omega / 5 = 10 \Omega$. Further reducing the resistance would involve more rods or improving soil conductivity.
*   **Charcoal and Salt Treatment:** Surrounding the existing rod with a mixture of charcoal and salt can significantly lower its individual resistance, thus reducing the overall system resistance.

**Textbook References:**

*   **Electrical Systems Design by M. K. Giridharan:** Explains the theoretical basis for improving earth resistance.
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya:** Discusses the cost-effectiveness of different methods for improving earth resistance.
*   **Residential Commercial and Industrial Systems by H. Joshi:** Provides practical tips for improving earthing in residential and industrial setups.

**Important Point to Remember:** The goal is to achieve a low and stable earth resistance value as specified by relevant codes (e.g., 5 $\Omega$ for specific applications, or 8 $\Omega$ for general safety as per NBC).

---

### 5. Size of Earth Continuity Conductor (CO1, CO5: K2, K3)

The **Earth Continuity Conductor (ECC)**, also known as the protective conductor (PE), connects the metallic enclosures of electrical equipment and the earthing terminal of the installation to the main earthing terminal.

**Key Concepts:**

*   **Purpose:** To provide a low-impedance path for fault current from the equipment chassis to the earth, ensuring the operation of protective devices (fuses or circuit breakers).
*   **Sizing Criteria:** The size of the ECC is determined by the capacity of the protective device installed upstream and the expected fault current it needs to carry. It should be able to carry fault current without overheating to a dangerous level.
*   **Cross-sectional Area:**
    *   **As per NEC (BIS):** The cross-sectional area of the ECC should be at least half the cross-sectional area of the phase conductor for conductors up to 16 mm², and half the cross-sectional area of the phase conductor or 8 mm² (whichever is greater) for conductors between 16 mm² and 35 mm². For phase conductors larger than 35 mm², the ECC cross-sectional area should be at least half the phase conductor's cross-sectional area.
    *   **General Guideline (Referencing IS 3043):**
        *   For phase conductors up to 16 sq. mm: ECC cross-sectional area is at least half of the phase conductor.
        *   For phase conductors between 16 sq. mm and 35 sq. mm: ECC cross-sectional area is at least 16 sq. mm. (Note: Some interpretations may still use half of the phase conductor, but 16 sq.mm is a common minimum for this range.)
        *   For phase conductors above 35 sq. mm: ECC cross-sectional area is at least half of the phase conductor's cross-sectional area.

*   **Material:** Typically copper, due to its excellent conductivity and low resistance. GI wire can also be used in some applications, but copper is preferred for better performance.

**Example:**
If a circuit uses a 4 sq. mm copper conductor for the phase wire, the minimum size of the Earth Continuity Conductor would be:
Minimum ECC size = 0.5 * (Phase conductor size) = 0.5 * 4 sq. mm = 2 sq. mm.

If a circuit uses a 25 sq. mm copper conductor for the phase wire, the minimum size of the Earth Continuity Conductor would be:
Minimum ECC size = 0.5 * (Phase conductor size) = 0.5 * 25 sq. mm = 12.5 sq. mm. However, as per IS 3043 guidelines for phase conductors between 16 and 35 sq.mm, a minimum ECC of 16 sq.mm is often specified. So, 16 sq.mm would be the appropriate choice.

**Textbook References:**

*   **National Electrical Code (BIS):** Contains specific tables and regulations for conductor sizing, including ECC.
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya:** Provides practical data and calculation methods for ECC sizing.
*   **A Course in Electrical Installation Estimating and Costing by J. B. Gupta:** Offers detailed examples and guidelines for estimating ECC sizes.

**Important Point to Remember:** The ECC must be continuous and properly terminated at both ends to ensure effective earthing protection. Its size is critical for the proper functioning of safety devices.

---

### 6. Practice Questions and Exercises

**Question 1:**
What are the primary purposes of earthing in an electrical installation? (CO1, CO5: K2)
**Answer:** The primary purposes are personnel safety (preventing electric shock), equipment protection (against overvoltages and faults), system stability, and noise reduction.

**Question 2:**
Explain the four-electrode method for measuring soil resistivity. What is the formula used? (CO1, CO5: K2)
**Answer:** The four-electrode method uses four electrodes driven into the soil at equal spacing ($a$). Current is passed between the outer electrodes, and the voltage drop between the inner electrodes is measured. The soil resistivity ($\rho$) is calculated using the formula $\rho = 2 \pi a R$, where $R$ is the measured resistance.

**Question 3:**
List three types of earth electrodes and their advantages and disadvantages. (CO1, CO5: K3)
**Answer:**
*   **Plate Earthing:**
    *   Adv: Simple, inexpensive for moderate soil.
    *   Disadv: Large area, sensitive to soil drying.
*   **Pipe Earthing:**
    *   Adv: Cost-effective, good contact area, easy to maintain.
    *   Disadv: Susceptible to corrosion.
*   **Rod Earthing:**
    *   Adv: Simple, less space, good for high fault currents.
    *   Disadv: May need driving equipment, sensitive to soil drying.

**Question 4:**
A client has a property with very dry and sandy soil, resulting in high earth resistance. Suggest two methods to improve the earth resistance and explain how they work. (CO1, CO5: K3)
**Answer:**
1.  **Charcoal and Salt Treatment:** Burying the earth electrode with a mixture of charcoal and salt. Charcoal retains moisture and provides a conductive path, while salt increases the ionic concentration in the soil, lowering its resistivity.
2.  **Using Multiple Electrodes in Parallel:** Installing several earth rods or plates spaced sufficiently apart and connected in parallel. This increases the total surface area in contact with the soil, thereby reducing the overall resistance.

**Question 5:**
For a circuit protected by a 32A MCB and using 6 sq. mm copper conductor for the phase wire, what is the minimum size of the Earth Continuity Conductor (ECC) as per IS 3043 guidelines? (CO1, CO5: K3)
**Answer:** According to IS 3043 guidelines, for phase conductors up to 16 sq. mm, the ECC cross-sectional area should be at least half of the phase conductor.
Minimum ECC size = 0.5 * (Phase conductor size) = 0.5 * 6 sq. mm = 3 sq. mm.

---

### 7. Summary and Key Takeaways (CO1, CO5: K2)

*   **Earthing is fundamental for safety and system reliability.** It provides a path for fault currents and overvoltages.
*   **Soil resistivity is a critical factor in earthing design.** It needs to be measured and considered for effective earthing.
*   **Various earth electrodes exist (plates, pipes, rods),** each with its own advantages and suitability based on soil conditions and requirements.
*   **Soil conductivity can be improved using charcoal, salt, or bentonite clay** to achieve lower earth resistance.
*   **The Earth Continuity Conductor (ECC) must be correctly sized** to safely carry fault current and ensure protective devices operate. Sizing is based on the phase conductor size and the rating of the protective device.
*   **Adherence to Indian Standards (NEC, NBC) and BIS codes is mandatory** for designing safe and compliant electrical installations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
