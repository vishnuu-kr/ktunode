---
title: "Introduction to design loads and load combinations, limit state design concepts."
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 1: Introduction to steel and steel structures, properties of steel, structural steel sections."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110b1"
status: "completed"
scrapedAt: "2026-05-20T18:52:42.343Z"
---
# DESIGN OF STEEL STRUCTURES - Module 1: Introduction to Steel and Steel Structures

## Topic: Introduction to Design Loads and Load Combinations, Limit State Design Concepts

---

### Learning Outcomes:

*   Understand the concept of design loads and their various types.
*   Familiarize with the principles of load combinations and their application in design.
*   Grasp the fundamental concepts of Limit State Design (LSD).
*   Understand the different limit states in the design of steel structures.
*   Recognize the importance of safety factors and material properties in LSD.

---

### 1. Introduction to Design Loads and Load Combinations

#### 1.1 What are Design Loads?

Design loads are the forces and effects that a structure is expected to withstand during its lifetime. These loads are estimated based on various factors and are applied to the structure in a standardized manner to ensure its safety and serviceability.

*   **Definition:** Loads are external agencies that cause stresses, strains, or deformations in a structure.
*   **Purpose:** To simulate the real-world forces the structure will experience, ensuring it can safely resist them without failure or excessive deformation.
*   **Source of Information:** Primarily from building codes and standards (e.g., IS 800, Eurocode, AISC).

#### 1.2 Types of Loads

Loads are broadly classified based on their nature, application, and duration.

**1.2.1 Based on Nature:**

*   **Dead Loads (DL):**
    *   **Definition:** Permanent loads arising from the self-weight of structural and non-structural components of the building.
    *   **Includes:** Weight of beams, columns, slabs, walls, finishes (plaster, tiles), permanent partitions.
    *   **Characteristics:** Constant in magnitude and position throughout the life of the structure.
    *   **Example:** A concrete slab weighing 25 kN/m³ will contribute a dead load to the supporting beam based on its area and thickness.

*   **Live Loads (LL) / Imposed Loads:**
    *   **Definition:** Temporary loads due to the occupancy and use of the building.
    *   **Includes:** People, furniture, movable partitions, equipment, vehicles.
    *   **Characteristics:** Variable in magnitude and position. Usually specified by building codes based on the intended use of the building.
    *   **Example:** For an office floor, the live load might be 4 kN/m²; for a residential floor, it might be 2 kN/m².

*   **Wind Loads (WL):**
    *   **Definition:** Lateral loads acting on the structure due to wind pressure.
    *   **Characteristics:** Highly variable in magnitude, direction, and distribution, depending on wind speed, building shape, location, and surrounding topography.
    *   **Example:** Tall buildings and structures in exposed areas are significantly affected by wind loads, which can cause overturning and swaying.

*   **Snow Loads (SL):**
    *   **Definition:** Loads due to accumulated snow on roofs and other surfaces.
    *   **Characteristics:** Relevant in regions with snowfall. Variable in magnitude and distribution.
    *   **Example:** Roofs in hilly areas need to be designed for snow accumulation, which can be substantial.

*   **Seismic Loads (EQ) / Earthquake Loads:**
    *   **Definition:** Inertial forces generated in the structure due to ground motion during an earthquake.
    *   **Characteristics:** Dynamic and often complex. Depends on the seismic zone, soil conditions, building mass, and stiffness.
    *   **Example:** Structures in earthquake-prone regions are designed to withstand seismic forces, which act horizontally and vertically.

*   **Other Loads:**
    *   **Thermal Loads:** Due to temperature variations causing expansion or contraction.
    *   **Hydrostatic Pressure:** Pressure exerted by water or other fluids.
    *   **Soil Pressure:** Pressure exerted by soil on retaining walls or foundations.
    *   **Impact Loads:** Sudden application of loads (e.g., moving machinery).
    *   **Blast Loads:** Forces from explosions.

**1.2.2 Based on Application/Duration:**

*   **Steady Loads:** Loads that are constant with time (e.g., Dead Load).
*   **Imposed Loads:** Loads that vary in magnitude and position (e.g., Live Load, Wind Load).
*   **Sudden Loads:** Loads applied rapidly (e.g., Impact Load).

#### 1.3 Load Combinations

Structures rarely experience only one type of load at a time. They are subjected to a combination of different loads simultaneously. Load combinations are used to determine the worst-case scenario for the structure's design.

*   **Purpose:** To ensure that the structure is safe under the most probable and critical combinations of loads that are likely to occur during its lifetime.
*   **Governing Principles:** Building codes (e.g., IS 800:2007, Eurocode 0) provide specific load combinations with associated load factors.
*   **Load Factors:** These are multipliers applied to the characteristic values of loads to account for the uncertainty in load estimation and the probability of simultaneous occurrence of loads. They are typically greater than 1.0.

**Common Load Combinations (as per IS 800:2007, Clause 5.3.2):**

These are simplified examples, and specific codes should always be consulted.

| Combination No. | Load Combination                   | Load Factor |
| :-------------- | :--------------------------------- | :---------- |
| 1               | $1.5 \times DL + 1.5 \times LL$      | 1.5         |
| 2               | $1.5 \times DL + 1.5 \times WL$      | 1.5         |
| 3               | $1.5 \times DL + 1.5 \times EQ$      | 1.5         |
| 4               | $1.2 \times DL + 1.2 \times LL + 1.2 \times WL$ | 1.2         |
| 5               | $1.2 \times DL + 1.2 \times LL + 1.2 \times EQ$ | 1.2         |
| 6               | $1.2 \times DL + 1.2 \times WL + 1.2 \times EQ$ | 1.2         |
| 7               | $1.2 \times DL + 1.0 \times LL + 1.0 \times WL$ | 1.2, 1.0    |
| 8               | $1.2 \times DL + 1.0 \times LL + 1.0 \times EQ$ | 1.2, 1.0    |
| 9               | $1.2 \times DL + 1.0 \times WL + 1.0 \times EQ$ | 1.2, 1.0    |
| 10              | $0.9 \times DL + 1.5 \times WL$      | 0.9, 1.5    |
| 11              | $0.9 \times DL + 1.5 \times EQ$      | 0.9, 1.5    |

*   **Note:** Combinations involving LL and WL/EQ have different load factors for DL depending on whether LL or WL/EQ is the dominant load.
*   **Important:** Always refer to the latest edition of the relevant national building code for the definitive load combinations and factors.

---

### 2. Limit State Design (LSD) Concepts

#### 2.1 What is Limit State Design?

Limit State Design (LSD), also known as Load and Resistance Factor Design (LRFD) in some contexts, is a modern approach to structural design that focuses on ensuring the structure remains fit for its intended purpose throughout its service life. It contrasts with older "Working Stress Design" methods.

*   **Core Idea:** To design structures such that they do not reach any "limit state" under the most unfavorable combination of loads and material properties.
*   **"Limit State":** A condition beyond which the structure or its components cease to perform their intended function.

#### 2.2 Philosophy of Limit State Design

LSD is based on the probability theory and aims to achieve a desired level of safety and serviceability by considering the uncertainties in loads, material strengths, and construction practices.

*   **Probabilistic Approach:** Acknowledges that both loads and material strengths are not precisely known but can be represented by statistical distributions.
*   **Safety and Serviceability:** Ensures the structure is safe from collapse (ultimate limit states) and performs satisfactorily under normal use (serviceability limit states).

#### 2.3 Types of Limit States

LSD classifies potential failure conditions into two main categories:

**2.3.1 Ultimate Limit States (ULS):**

These relate to the collapse or failure of the structure or its components. Failure can occur in various ways.

*   **Definition:** Conditions where the structure or its components are no longer capable of carrying the applied loads.
*   **Key ULS to Consider for Steel Structures:**
    *   **Loss of Equilibrium:** The structure becomes unstable and topples or slides (e.g., a column under heavy axial load and lateral wind load).
        *   **Example:** A tall, slender column with inadequate bracing might buckle globally and lose equilibrium.
    *   **Loss of Strength (Plasticity/Yielding):** Material yields or ruptures due to excessive stresses.
        *   **Example:** A beam experiences excessive bending moment, causing its cross-section to yield and deform plastically.
    *   **Loss of Stability (Buckling):** Structural elements become unstable and buckle under compressive forces. This is a critical consideration for steel structures due to steel's relatively low slenderness ratio.
        *   **Types of Buckling:**
            *   **Flexural Buckling:** Buckling of a column or beam in its plane due to axial compression.
            *   **Lateral-Torsional Buckling (LTB):** Buckling of a beam subjected to bending, where the compression flange buckles sideways and twists.
            *   **Local Buckling:** Buckling of thin plate elements within a structural section (e.g., flange or web of an I-beam) under compressive stress.
        *   **Example:** A long, unbraced steel column under compression will likely buckle.
    *   **Progressive Collapse:** Failure of one structural element triggers the failure of adjacent elements, leading to the collapse of a significant portion or the entire structure.
        *   **Example:** If a key supporting column in a multi-story building fails, it can overload adjacent columns and beams, leading to a chain reaction.

**2.3.2 Serviceability Limit States (SLS):**

These relate to the performance of the structure under normal service conditions, focusing on user comfort and functionality.

*   **Definition:** Conditions where the structure or its components are no longer considered satisfactory for their intended use, even if they haven't collapsed.
*   **Key SLS to Consider for Steel Structures:**
    *   **Deflection:** Excessive sagging or bending of beams, slabs, or floors.
        *   **Example:** A floor beam might deflect excessively under live load, causing cracking of finishes or a feeling of unease for occupants. Codes specify deflection limits (e.g., L/300, L/350).
    *   **Vibration:** Undesirable oscillations or shaking of the structure, often caused by dynamic loads like foot traffic, machinery, or wind.
        *   **Example:** A lightly loaded floor in a gymnasium might vibrate uncomfortably when people jump or dance.
    *   **Cracking:** Formation of cracks in structural elements (more relevant for concrete, but can occur in steel connections or due to fatigue).
    *   **Fatigue:** Failure due to repeated application of fluctuating loads over time. This is crucial for structures subjected to cyclic loading, like bridges or offshore structures.
        *   **Example:** Welded connections in bridges subjected to thousands of vehicle passages can develop fatigue cracks over time.
    *   **Corrosion:** Degradation of steel due to environmental factors, reducing its effective cross-section and strength.
        *   **Example:** Steel structures exposed to humid or corrosive environments require protective coatings to prevent rust.

#### 2.4 Design Procedure in LSD

The fundamental equation in LSD can be expressed as:

$$ \gamma_f \times \text{Design Load Effect} \le \frac{1}{\gamma_m} \times \text{Design Resistance} $$

Or, more commonly:

$$ \text{Design Load Effect} \le \text{Design Resistance} $$

where:
*   **Design Load Effect:** The effect of factored loads (characteristic loads multiplied by load factors).
*   **Design Resistance:** The factored resistance of the member (characteristic resistance divided by material factor of safety).

This can be rewritten as:

$$ \sum \gamma_{fi} F_{ki} \le R_d $$

where:
*   $\gamma_{fi}$ = Load factor for load $F_{ki}$
*   $F_{ki}$ = Characteristic value of load
*   $R_d$ = Design resistance (which is $R_k / \gamma_m$)

**2.4.1 Load Factors ($\gamma_f$):**

*   **Definition:** Factors applied to characteristic loads to account for uncertainties in load estimation, variations during construction, and the probability of simultaneous occurrence of loads.
*   **Purpose:** To ensure that the structure is subjected to a sufficiently high design load effect.
*   **Values:** Typically greater than 1.0 (e.g., 1.5, 1.2, 1.0 as seen in load combinations).

**2.4.2 Material Factors of Safety ($\gamma_m$):**

*   **Definition:** Factors applied to characteristic material strengths to account for variations in material properties, deviations in workmanship, and approximations in the design theory.
*   **Purpose:** To ensure that the design resistance is conservative and accounts for material uncertainties.
*   **Values:** Typically greater than 1.0 (e.g., for steel, $\gamma_m$ is often around 1.10 or 1.15 for ULS, and 1.0 for SLS).

**2.4.3 Characteristic Loads ($F_k$) and Resistances ($R_k$):**

*   **Characteristic Loads:** The nominal values of loads specified in codes (e.g., characteristic live load, characteristic wind pressure).
*   **Characteristic Resistance:** The nominal value of the strength or resistance of a member or connection, determined based on material properties and section geometry (e.g., yield strength of steel, buckling strength).

**2.4.4 Design Loads and Design Resistance:**

*   **Design Load:** Characteristic Load $\times$ Load Factor ($F_d = \gamma_f F_k$).
*   **Design Resistance:** Characteristic Resistance / Material Factor of Safety ($R_d = R_k / \gamma_m$).

**2.5 Advantages of Limit State Design:**

*   **More Realistic:** Accounts for uncertainties in loads and material strengths more realistically.
*   **Consistent Safety Levels:** Provides a more uniform level of safety across different types of structures and load conditions.
*   **Economical:** Can lead to more efficient use of materials compared to older methods.
*   **Serviceability Considered:** Explicitly addresses serviceability requirements, leading to more comfortable and functional structures.

---

### 3. Practice Questions and Exercises

**Question 1:**
Define dead load and live load. Provide two examples for each in the context of a steel building.

**Answer 1:**
*   **Dead Load:** Permanent loads due to the self-weight of structural and non-structural elements.
    *   **Example 1:** Self-weight of a steel beam supporting a floor slab.
    *   **Example 2:** Weight of steel purlins supporting a roof sheeting.
*   **Live Load:** Temporary loads due to occupancy and use.
    *   **Example 1:** Weight of people and furniture on a steel floor.
    *   **Example 2:** Weight of stored materials in a steel warehouse.

**Question 2:**
Explain the purpose of load combinations in structural design. State one common load combination equation (mentioning the relevant loads and load factors).

**Answer 2:**
The purpose of load combinations is to ensure that a structure is designed to withstand the most critical and probable simultaneous effects of various loads that it might encounter during its lifetime, thereby ensuring its safety and serviceability.
One common load combination (from IS 800:2007) is: $1.5 \times DL + 1.5 \times LL$.
Here, DL represents Dead Load and LL represents Live Load. The load factor of 1.5 accounts for the uncertainties in these loads and their likelihood of occurring together.

**Question 3:**
What is a "Limit State"? Differentiate between Ultimate Limit States (ULS) and Serviceability Limit States (SLS) with examples relevant to steel structures.

**Answer 3:**
A "Limit State" is a condition beyond which a structure or its components cease to perform their intended function.

*   **Ultimate Limit States (ULS):** These relate to the collapse or failure of the structure.
    *   **Example:** **Lateral-torsional buckling** of a steel beam under bending, leading to its failure.
    *   **Example:** **Yielding** of a steel column under excessive axial load, causing permanent deformation and potential collapse.
*   **Serviceability Limit States (SLS):** These relate to the satisfactory performance of the structure under normal service conditions, focusing on user comfort and functionality.
    *   **Example:** **Excessive deflection** of a steel floor beam under live load, causing discomfort to occupants or damage to finishes.
    *   **Example:** **Vibrations** in a steel structure due to foot traffic, making the environment uncomfortable.

**Question 4:**
Explain the roles of load factors ($\gamma_f$) and material factors of safety ($\gamma_m$) in the Limit State Design approach.

**Answer 4:**
*   **Load Factors ($\gamma_f$):** These factors are applied to the characteristic values of loads. They account for uncertainties in load estimation, variations in load magnitudes, and the probability of simultaneous occurrence of different loads. They increase the design load effect to ensure a higher margin of safety against the load.
*   **Material Factors of Safety ($\gamma_m$):** These factors are applied to the characteristic material strengths. They account for variations in material properties (e.g., yield strength, ultimate strength), uncertainties in material quality control, and approximations in design calculations. They reduce the design resistance to ensure that the material strength is not overestimated.

**Question 5:**
A steel beam is subjected to a dead load of 10 kN/m and a live load of 20 kN/m. Using the load combination $1.5 \times DL + 1.5 \times LL$, calculate the design load for the beam.

**Answer 5:**
Given:
*   Dead Load ($DL$) = 10 kN/m
*   Live Load ($LL$) = 20 kN/m
*   Load Combination = $1.5 \times DL + 1.5 \times LL$

Design Load = $1.5 \times (10 \text{ kN/m}) + 1.5 \times (20 \text{ kN/m})$
Design Load = $15 \text{ kN/m} + 30 \text{ kN/m}$
Design Load = $45 \text{ kN/m}$

---

### 4. Important Points to Remember

*   **Safety is Paramount:** Structural design fundamentally aims to ensure safety under all credible load conditions.
*   **Loads are Uncertain:** Always account for the variability and uncertainty in loads.
*   **Material Properties Vary:** Always account for the variability in material strengths.
*   **LSD is a Probabilistic Approach:** It balances the uncertainties in loads and resistances.
*   **Two Main Limit States:** ULS (collapse/failure) and SLS (serviceability/performance).
*   **Load Factors > 1:** Increase the effect of loads.
*   **Material Factors > 1:** Reduce the resistance of materials.
*   **Codes are Essential:** Always refer to the relevant national building codes (like IS 800, Eurocodes, AISC) for specific load values, load combinations, load factors, and material factors.
*   **Buckling is Critical for Steel:** Steel's slenderness makes it susceptible to various forms of buckling, which must be carefully addressed in design.
*   **Serviceability Checks are Crucial:** Even if a structure is safe from collapse, excessive deflection or vibration can render it unusable or unacceptable.

---
