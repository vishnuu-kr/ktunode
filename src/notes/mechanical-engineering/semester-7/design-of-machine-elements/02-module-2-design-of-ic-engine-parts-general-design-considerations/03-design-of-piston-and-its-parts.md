---
title: "Design of piston and its parts"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 2: Design of IC Engine parts: General design considerations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d61"
status: "completed"
scrapedAt: "2026-05-20T18:10:50.437Z"
---
# DESIGN OF MACHINE ELEMENTS: Module 2: Design of IC Engine Parts: General Design Considerations

## Topic: Design of Piston and its Parts

This module focuses on the design of critical components within Internal Combustion (IC) engines. We will begin by understanding the general design considerations applicable to IC engine parts and then delve into the specifics of piston design.

---

### Learning Outcomes:

*   Understand the general design considerations for IC engine components.
*   Analyze the functional requirements and operating conditions of a piston.
*   Identify the various forces acting on a piston.
*   Determine the material selection criteria for pistons.
*   Design the piston crown, piston skirt, and piston rings.
*   Understand the design considerations for the piston pin (gudgeon pin).
*   Analyze the stresses and deformations in the piston.
*   Select appropriate materials and manufacturing processes for piston components.

---

### Course Outcomes Alignment:

*   **CO2: Make use of the design procedure for I C engine components (Knowledge Level: K3)**
    *   This topic directly contributes to CO2 by outlining the design procedure for a fundamental IC engine component – the piston. Students will learn to apply design principles and calculations specific to pistons.

---

### 1. Introduction to IC Engines and General Design Considerations

#### 1.1 Function of IC Engines

Internal Combustion engines convert chemical energy stored in fuel into mechanical energy through the controlled combustion of fuel within a confined space. This mechanical energy is then used to drive various machinery.

#### 1.2 Key Components of an IC Engine

*   Cylinder Block
*   Cylinder Liner
*   Piston
*   Piston Rings
*   Connecting Rod
*   Crankshaft
*   Valves (Intake and Exhaust)
*   Camshaft
*   Flywheel
*   Cooling System
*   Lubrication System

#### 1.3 General Design Considerations for IC Engine Components

When designing any IC engine component, several factors must be considered:

*   **Functional Requirements:** What is the primary role of the component? (e.g., piston transmits combustion pressure, connects to the connecting rod).
*   **Operating Conditions:**
    *   **Temperature:** High temperatures due to combustion (can reach 2000°C locally).
    *   **Pressure:** High combustion pressures (up to 150 bar or more).
    *   **Speed:** Engine speed (RPM) influences inertial forces and lubrication.
    *   **Lubrication:** Presence and effectiveness of lubrication.
    *   **Vibrations and Noise:** Engine operation generates vibrations.
*   **Material Selection:** Must withstand high temperatures, pressures, wear, and corrosive environments. Common materials include cast iron, aluminum alloys, and steel.
*   **Stresses and Strains:** Components are subjected to thermal stresses, mechanical stresses (gas pressure, inertial forces), and fatigue.
*   **Wear:** Moving parts in contact experience wear (e.g., piston skirt on cylinder liner, piston rings in grooves).
*   **Heat Transfer:** Efficient heat transfer is crucial for performance and durability.
*   **Manufacturing Processes:** Design must be feasible for manufacturing methods like casting, forging, machining.
*   **Cost:** Balancing performance and durability with manufacturing cost.
*   **Weight:** Especially critical for performance engines (lighter components mean less inertia).
*   **Reliability and Durability:** Ensuring the engine operates for a specified lifespan.
*   **Sealing:** Effective sealing is required to prevent leakage (e.g., piston rings sealing combustion gases).

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13: Design of IC Engine Components.*

---

### 2. Design of Piston

The piston is a reciprocating component that transmits force from the expanding gas in the cylinder to the connecting rod. It also acts as a pump for the lubricating oil and provides a seal against gas leakage.

#### 2.1 Functional Requirements of a Piston

*   Transmit the force from combustion gases to the connecting rod.
*   Seal the combustion chamber against leakage of gases.
*   Transfer heat from the combustion chamber to the cylinder walls for cooling.
*   Support the piston rings.
*   Act as a crosshead in a double-acting engine or in some single-acting engines to guide the connecting rod.

#### 2.2 Forces Acting on a Piston

The forces acting on a piston during its operation are:

*   **Gas Force ($F_g$):** This is the force due to the pressure of the expanding gases in the combustion chamber acting on the piston crown.
    *   $F_g = P_g \times A_p$
    where $P_g$ is the effective gas pressure and $A_p$ is the projected area of the piston crown (bore area, $\pi D^2/4$).
*   **Inertial Force ($F_i$):** This is the force required to accelerate and decelerate the reciprocating mass of the piston assembly (piston, piston rings, gudgeon pin, and a portion of the connecting rod).
    *   $F_i = m_p \times a_p$
    where $m_p$ is the reciprocating mass and $a_p$ is the acceleration of the piston.
    *   Piston acceleration ($a_p$) can be approximated by: $a_p = \omega^2 r (\cos \theta + \frac{r}{l} \cos 2\theta)$
    where $\omega$ is the angular velocity of the crankshaft, $r$ is the crank radius, $l$ is the connecting rod length, and $\theta$ is the crank angle.
*   **Side Thrust Force ($F_s$):** This is the force exerted by the piston on the cylinder walls. It arises from the obliquity of the connecting rod.
    *   $F_s = F_g \tan \phi$
    where $\phi$ is the angle of obliquity of the connecting rod, given by $\tan \phi = \frac{r \sin \theta}{l - r \cos \theta}$.
    *   This force is responsible for wear on the piston skirt and cylinder liner.

**Important Note:** The resultant force acting on the piston crown and transferred to the connecting rod is the vector sum of the gas force and the inertial force acting along the cylinder axis.

#### 2.3 Piston Materials

The choice of piston material is critical due to the extreme operating conditions.

*   **Cast Iron:**
    *   **Pros:** High strength, good wear resistance, lower cost.
    *   **Cons:** Heavier, poorer thermal conductivity, lower tensile strength at high temperatures.
    *   **Applications:** Diesel engines, low-speed gasoline engines, heavy-duty applications.
*   **Aluminum Alloys:**
    *   **Pros:** Lightweight (reduces inertial forces), excellent thermal conductivity (better heat dissipation), good strength at moderate temperatures.
    *   **Cons:** Lower tensile strength at high temperatures, higher thermal expansion (requires larger clearances), prone to scuffing.
    *   **Common Alloys:** Y-alloys (Al-Cu-Ni), Lo-Ex alloys (Al-Si-Ni), Silumin (Al-Si).
    *   **Applications:** Most gasoline engines, high-performance engines.
*   **Forged Aluminum Alloys:** Offer higher strength and fatigue resistance compared to cast aluminum.
*   **Steel:** Used in some very high-stress applications, especially in diesel engines, for higher strength and temperature resistance, but heavier and more expensive.

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13.2: Piston.*
**Reference:** *Machine Design – An Integrated Approach by R. L. Norton, Chapter 11: Mechanical Behavior of Materials - Thermal Properties.*

#### 2.4 Piston Design

A piston can be broadly divided into three parts:
1.  Piston Crown
2.  Piston Skirt
3.  Piston Rings and Ring Grooves

##### 2.4.1 Piston Crown

The piston crown is the upper surface of the piston exposed to combustion gases. Its design is crucial for efficient combustion and heat dissipation.

*   **Shape:**
    *   **Flat Top:** Simple, used in many gasoline engines with pre-combustion chambers or specific combustion chamber designs.
    *   **Domed Top:** Increases compression ratio but can lead to hot spots.
    *   **Recessed Top:** Commonly used to provide clearance for valves in overhead valve engines. The shape of the recess is critical for swirl and combustion.
    *   **Shaped Tops:** Designed to optimize air-fuel mixing and flame propagation.
*   **Heat Dissipation:** The crown must efficiently transfer heat from the combustion gases to the cylinder walls through the piston rings.
*   **Strength:** Must withstand high gas pressures and thermal stresses. The thickness is determined by the gas pressure and material strength.
*   **Ignition:** In spark-ignition engines, the spark plug placement is considered in the crown design.

##### 2.4.2 Piston Skirt

The piston skirt is the lower part of the piston that slides against the cylinder liner.

*   **Function:** Guides the piston, absorbs side thrust, and helps seal the combustion chamber.
*   **Design Features:**
    *   **Barrel Shape:** The skirt is often slightly elliptical or barrel-shaped in cross-section (diameter at the skirt is slightly less than at the piston crown) to allow for thermal expansion and maintain contact with the cylinder wall under load.
    *   **Taper:** Some pistons have a slight taper on the skirt for better sealing and reduced friction.
    *   **Reliefs/Cutouts:** Grooves or cutouts can be made in the skirt to reduce the bearing area, minimize friction, and accommodate thermal expansion or distortion.
    *   **Offset Gudgeon Pin:** The gudgeon pin axis is often offset from the cylinder axis by a small amount (typically 1-2 mm). This offset is usually towards the major thrust side (the side where the connecting rod exerts maximum force) to reduce noise during the reversal of motion.
*   **Clearance:** A specific clearance is maintained between the piston skirt and the cylinder wall to allow for thermal expansion, lubrication, and to prevent seizing. This clearance is typically larger than that at the piston crown.

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13.2.2: Piston Skirt.*
**Reference:** *Machine Design Data Book by V. B. Bhandari, Section 12: IC Engine Components.*

##### 2.4.3 Piston Rings

Pistons are equipped with two or more compression rings and one or more oil control rings.

*   **Compression Rings:**
    *   **Function:** Seal the combustion chamber, preventing leakage of combustion gases into the crankcase and oil into the combustion chamber. They also transfer heat from the piston to the cylinder walls.
    *   **Types:**
        *   **Top Ring:** Usually has a special profile (e.g., tapered or barrel-shaped) for better sealing and to resist the highest temperatures and pressures.
        *   **Second Ring:** Often has a tapered or chamfered lower edge to help scrape oil from the cylinder walls and assist the top ring in sealing.
    *   **Material:** High-strength cast iron, sometimes with chromium plating on the rubbing surfaces for improved wear resistance.
    *   **Cross-section:** Rectangular, but can have various profiles.
*   **Oil Control Rings:**
    *   **Function:** Scrape excess lubricating oil from the cylinder walls back into the crankcase, preventing it from entering the combustion chamber.
    *   **Types:**
        *   **Slotted/Scraper Rings:** Have slots or holes through the ring body or a rail that scrapes oil.
        *   **Multi-piece Oil Rings:** Consist of two thin steel rails and an expander spring to control oil flow.
    *   **Material:** Cast iron, steel.
*   **Ring Grooves:**
    *   **Design:** Grooves are machined into the piston to house the rings. The dimensions and tolerances of these grooves are critical for proper ring operation.
    *   **Back Clearance:** Space behind the ring in the groove for oil to pass.
    *   **Side Clearance:** Clearance between the side of the ring and the groove.
    *   **Ring Tension:** The inherent spring force of the ring itself provides sealing.
*   **Ring Materials:**
    *   **Cast Iron:** Grey cast iron (e.g., Meehanite) is common due to its good wear resistance and ability to embed foreign particles.
    *   **Steel:** Spring steel for oil control rings.
    *   **Surface Treatments:** Chromium plating, molybdenum coating, or nitrocarburizing are used on the piston ring faces to improve wear resistance and reduce scuffing.

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13.2.3: Piston Rings.*
**Reference:** *PSG Design Data, Section 7.1: Piston Rings.*

##### 2.4.4 Piston Pin (Gudgeon Pin)

The piston pin connects the piston to the connecting rod. It is subjected to bending stresses and shear stresses.

*   **Function:** Transmits the load from the piston to the connecting rod.
*   **Types of Fit:**
    *   **Fully Floating:** The pin is loose in both the piston bosses and the connecting rod small-end bush. It is retained by circlips or other means. This allows for differential expansion.
    *   **Semi-Floating:** The pin is a tight fit in one component (usually the connecting rod small-end) and floating in the other.
    *   **Fixed:** The pin is a tight fit in both. This is less common due to expansion issues.
*   **Material:** High-carbon steel, alloy steel, case-hardened steel.
*   **Design:** Typically hollow and has a larger diameter at the center than at the ends to resist bending. The inner diameter is chosen based on the shear stress, and the outer diameter is determined by bending stress and bearing pressure.

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13.3: Design of Gudgeon Pin.*
**Reference:** *Machine Design Data Book by V. B. Bhandari, Section 12.4: Gudgeon Pin.*

#### 2.5 Stresses in a Piston

The piston is subjected to various stresses:

*   **Gas Pressure Stress:** Compressive stress on the piston crown due to combustion pressure.
*   **Thermal Stress:** Due to temperature gradients across the piston. The crown is hotter than the skirt.
*   **Bending Stress:** Due to the side thrust and the reaction forces at the piston bosses. The piston crown can bend inwards or outwards.
*   **Shear Stress:** In the piston bosses and the piston pin.
*   **Stress Concentration:** Occurs at the edges of ring grooves, pin bosses, and under the crown.

#### 2.6 Design Procedure for a Piston (Summary)

1.  **Determine Piston Dimensions:** Bore diameter (from engine specifications), stroke, compression ratio.
2.  **Calculate Forces:** Gas force, inertial force, side thrust.
3.  **Select Material:** Based on temperature, pressure, strength, weight, and cost.
4.  **Design Piston Crown:** Determine shape and thickness to withstand gas pressure and thermal loads. Consider valve cutouts if necessary.
5.  **Design Piston Skirt:** Determine skirt length, diameter, and profile (barrel shape/taper) to ensure proper guidance and minimize friction. Calculate clearances.
6.  **Design Ring Grooves:** Determine the number and dimensions of grooves for compression and oil rings. Consider ring material and surface finish.
7.  **Design Piston Pin:** Determine diameter and length based on gas pressure, inertial forces, and bearing pressures in the bosses and connecting rod. Check for bending and shear stresses.
8.  **Stress Analysis:** Analyze the stresses in critical areas using analytical methods or FEA. Ensure stresses are within material limits (including fatigue).
9.  **Heat Transfer Analysis:** Ensure adequate heat dissipation to prevent overheating.
10. **Manufacturing Considerations:** Select appropriate manufacturing processes (casting, forging, machining).

**Example:** Calculating the maximum gas pressure for a given engine type. For a typical petrol engine, maximum gas pressure can be around 50-70 bar. For a diesel engine, it can be 100-150 bar. This pressure is used to calculate the gas force.

**Reference:** *Design of Machine Elements by V. B. Bhandari, Chapter 13.4: Design Procedure for Piston.*
**Reference:** *Machine Design by Dr P.C. Sharma, Dr D.K. Agarwal, Chapter 12: Design of Piston.*

---

### 3. Practice Questions and Exercises

**Question 1:**
A single-cylinder, four-stroke diesel engine has the following specifications:
Bore diameter, D = 100 mm
Stroke, L = 120 mm
Maximum gas pressure, $P_{max}$ = 70 bar
Engine speed, N = 2000 rpm
Connecting rod length, l = 240 mm

Estimate the maximum gas force and the maximum piston speed.

**Answer:**
*   **Maximum Gas Force ($F_g$):**
    *   Piston Area, $A_p = \frac{\pi D^2}{4} = \frac{\pi (100)^2}{4} = 7854 \, mm^2 = 0.007854 \, m^2$
    *   Maximum Gas Pressure, $P_{max}$ = 70 bar = $70 \times 10^5 \, N/m^2$
    *   $F_g = P_{max} \times A_p = (70 \times 10^5 \, N/m^2) \times (0.007854 \, m^2) = 54978 \, N \approx 55 \, kN$

*   **Maximum Piston Speed:**
    *   Crank radius, $r = L/2 = 120/2 = 60 \, mm = 0.06 \, m$
    *   Angular velocity, $\omega = \frac{2\pi N}{60} = \frac{2\pi \times 2000}{60} = 209.44 \, rad/s$
    *   Maximum piston speed occurs when $\theta = 0^\circ$ or $180^\circ$ (at Top Dead Center - TDC and Bottom Dead Center - BDC).
    *   Maximum piston speed $v_{max} = \omega \times r = 209.44 \, rad/s \times 0.06 \, m = 12.57 \, m/s$

**Question 2:**
What are the primary functions of the piston rings in an IC engine? Differentiate between compression rings and oil control rings.

**Answer:**
*   **Primary Functions of Piston Rings:**
    1.  **Sealing:** Prevent leakage of combustion gases from the combustion chamber to the crankcase (compression rings).
    2.  **Heat Transfer:** Transfer heat from the piston to the cylinder walls for cooling (compression rings).
    3.  **Oil Control:** Scrape excess lubricating oil from the cylinder walls back into the crankcase (oil control rings).
    4.  **Piston Guidance:** Assist in guiding the piston within the cylinder.

*   **Compression Rings:**
    *   Located at the top of the piston.
    *   Primarily responsible for sealing the combustion chamber.
    *   Withstand high temperatures and pressures.
    *   Typically have a rectangular cross-section, but can have special profiles for better sealing.
    *   Made of materials like cast iron with wear-resistant coatings.

*   **Oil Control Rings:**
    *   Located below the compression rings.
    *   Their main function is to regulate the amount of lubricating oil on the cylinder walls.
    *   They scrape excess oil off the cylinder walls.
    *   Often have slots or holes to allow scraped oil to return to the crankcase.
    *   Made of materials that can withstand oil and have good scraping action.

**Question 3:**
Discuss the advantages and disadvantages of using aluminum alloys compared to cast iron for piston construction.

**Answer:**
| Feature          | Aluminum Alloys                                     | Cast Iron                                           |
| :--------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| **Advantages**   | **Lightweight:** Reduces reciprocating mass, lowers inertial forces, improves engine performance and fuel efficiency. | **Higher Strength at High Temperatures:** Retains strength better at elevated temperatures. |
|                  | **Excellent Thermal Conductivity:** Dissipates heat efficiently, reducing the risk of overheating. | **Lower Thermal Expansion:** Requires smaller clearances, potentially leading to less oil consumption and noise. |
|                  | **Good machinability.**                             | **Good Wear Resistance:** Generally more durable against abrasion. |
|                  |                                                     | **Lower Cost:** Typically less expensive to produce. |
| **Disadvantages**| **Lower Strength at High Temperatures:** Strength decreases significantly at very high temperatures. | **Heavier:** Increases reciprocating mass, leading to higher inertial forces. |
|                  | **Higher Thermal Expansion:** Requires larger clearances, which can lead to increased oil consumption and noise, especially during cold starts. | **Poor Thermal Conductivity:** Less efficient at dissipating heat. |
|                  | **Prone to Scuffing/Galling:** Can be more susceptible to seizure with cylinder walls if lubrication is inadequate. | **Lower Tensile Strength:** Can be a limitation in very high-pressure applications. |
|                  | **Higher Cost** (for some advanced alloys).        |                                                     |

---

### 4. Important Points to Remember

*   The piston is a highly stressed component subjected to high gas pressures, temperatures, and inertial forces.
*   Material selection for pistons is a compromise between weight, strength at high temperatures, thermal conductivity, wear resistance, and cost. Aluminum alloys are common for gasoline engines, while cast iron and sometimes steel are used for diesel engines.
*   The piston crown design is critical for combustion efficiency and heat transfer.
*   The piston skirt's shape and clearance are designed to guide the piston, absorb side thrust, and accommodate thermal expansion while minimizing friction and noise.
*   Piston rings are essential for sealing, heat transfer, and oil control. Their design and material are crucial for engine performance and durability.
*   The gudgeon pin connects the piston to the connecting rod and is designed to withstand bending and shear stresses.
*   Offsetting the gudgeon pin can reduce noise generated by the piston slap.
*   Fatigue strength is a critical consideration in piston design due to the cyclic nature of loading.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 5. References

*   **Textbooks:**
    *   Design of Machine Elements by V. B. Bhandari (McGraw Hill Education (India), 5th Edition, 2020) - Chapters 13.
    *   Machine Design – An Integrated Approach by R. L. Norton (Pearson Education, 5th Edition, 2018)
    *   Design of Machine Elements II by Raghavendra K (CBS Publishers and Distributors Pvt Ltd, 1st Edition 2019)
    *   Machine Design by Dr P.C. Sharma, Dr D.K. Agarwal (S.K. Kataria& Sons, 2017) - Chapter 12.
    *   Machine Design Data Book by V. B. Bhandari (McGraw Hill Education (India) Private Limited, 2nd edition 2019) - Section 12.
    *   Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy (CBS Publishers & Distributors, 4th Edition, 2019)
    *   PSG Design Data by PSG Tech (DPV Printers, Coimbatore, 2022) - Section 7.1.

*   **Reference Books:**
    *   Mechanical Engineering Design by J. E. Shigley (McGraw Hill, 2003)
    *   Fundamentals of Machine Design, Volume 1, 2 by Ajeet Singh (Cambridge University Press, 1, 2022)
    *   Fundamentals of Machine Component Design by Juvinall R.C, Marshek K.M. (John Wiley, 5th Edition 2011)
    *   Design of Machine Elements by M. F. Spotts, T. E. Shoup (Pearson Education, 8th Edition 2019)
    *   Machine Elements: Life and Design by Boris M. Klebanov, David M. Barlam, Frederic E. Nystrom (CRC Press, 2019)

---
**End of Topic Notes**