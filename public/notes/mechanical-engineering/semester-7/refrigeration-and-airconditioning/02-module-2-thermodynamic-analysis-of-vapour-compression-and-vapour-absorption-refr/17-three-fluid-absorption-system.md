---
title: "Three fluid absorption system."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f71"
status: "completed"
scrapedAt: "2026-05-20T18:17:23.364Z"
---
# REFRIGERATION AND AIR CONDITIONING

## Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

### Topic: Three Fluid Absorption System

---

### 1. Introduction to Absorption Refrigeration Systems

Absorption refrigeration systems (ARS) are thermally driven refrigeration cycles that utilize a heat source to produce cooling. Unlike vapour compression systems that rely on mechanical work, ARS uses thermal energy (e.g., waste heat, solar energy) to drive the refrigeration process. This makes them attractive for applications where waste heat is available or when electricity is expensive or limited.

**Key Concepts:**

*   **Refrigerant:** The substance that undergoes phase changes to absorb heat from the cooled space. Common refrigerants in absorption systems include ammonia (NH₃) and water (H₂O).
*   **Absorbent:** A substance that readily absorbs the refrigerant. Common absorbents include water for ammonia and lithium bromide (LiBr) for water.
*   **Generator (or Desorber):** Where the refrigerant is separated from the absorbent by applying heat.
*   **Condenser:** Where the refrigerant vapor is condensed into a liquid.
*   **Evaporator:** Where the liquid refrigerant evaporates, absorbing heat from the chilled space.
*   **Absorber:** Where the refrigerant vapor is absorbed by the absorbent.
*   **Expansion Valve (or Throttling Device):** Reduces the pressure of the liquid refrigerant before it enters the evaporator.

**CO Alignment:** CO1 (Define and describe basic concepts and applications of refrigeration and air conditioning), CO3 (Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems).

**Textbook References:**

*   Arora, C.P. (2021). *Refrigeration and Air Conditioning*. Chapter on Absorption Refrigeration Systems.
*   Ahamadul Ameen. (2020). *Refrigeration and air conditioning*. Chapter on Absorption Refrigeration Systems.

---

### 2. Basic Two-Fluid Absorption System

The most common absorption systems are two-fluid systems, typically using **Ammonia-Water** or **Lithium Bromide-Water**.

#### 2.1 Ammonia-Water System

*   **Refrigerant:** Ammonia (NH₃)
*   **Absorbent:** Water (H₂O)

**Working Principle:**
Ammonia vapor, after evaporating in the evaporator and absorbing heat, enters the absorber where it is absorbed by weak aqua (water containing less ammonia). This process releases heat. The strong aqua (water with high concentration of ammonia) is then pumped to the generator, where it is heated by an external heat source. This heat drives off the ammonia vapor from the water. The ammonia vapor then passes through a condenser, liquefies, and expands before entering the evaporator to repeat the cycle.

**Advantages:**
*   Can produce very low temperatures, suitable for ice making and food preservation.
*   Ammonia is environmentally friendly (ODP = 0, GWP = 0).

**Disadvantages:**
*   Ammonia is toxic and corrosive, requiring careful handling and material selection.
*   Water is used as the absorbent, and its freezing point limits the minimum evaporator temperature.

#### 2.2 Lithium Bromide-Water System

*   **Refrigerant:** Water (H₂O)
*   **Absorbent:** Lithium Bromide (LiBr)

**Working Principle:**
Water vapor, after evaporating in the evaporator and absorbing heat, enters the absorber where it is absorbed by a LiBr solution. This process releases heat. The LiBr solution, now rich in water, is pumped to the generator. Here, heat is applied to boil off the water vapor from the LiBr. The water vapor is then condensed and returned to the evaporator. The LiBr solution, now concentrated, is returned to the absorber.

**Advantages:**
*   Non-toxic and non-corrosive.
*   Can be used for air conditioning applications where chilled water temperatures are around 4-7°C.

**Disadvantages:**
*   Water is the refrigerant, so it cannot be used for sub-zero temperature applications due to its freezing point.
*   Lithium Bromide can crystallize if the concentration becomes too high, requiring careful operating conditions.

**CO Alignment:** CO1 (Define and describe basic concepts and applications of refrigeration and air conditioning), CO3 (Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems).

**Textbook References:**

*   Arora, S. C., & Domkundwar, S. (2018). *A Course in Refrigeration and Air Conditioning*. Chapter on Absorption Refrigeration.
*   Stoecker & Jons. (2nd edition). *Refrigeration & Air-conditioning*. Chapter on Absorption Refrigeration.

---

### 3. The Three-Fluid Absorption System

A three-fluid absorption system is an extension of the basic absorption refrigeration cycle, involving an additional working fluid to improve the overall performance, particularly in terms of temperature lift or efficiency. These systems are often designed to achieve lower temperatures than achievable with standard two-fluid systems or to enhance the heat transfer characteristics.

The most common type of three-fluid absorption system utilizes:

1.  **Refrigerant:** A low-boiling point substance.
2.  **Absorbent:** A substance that absorbs the refrigerant.
3.  **Secondary Refrigerant (or Carrier Fluid):** A fluid that acts as a heat transfer medium and often helps in separating components or improving performance.

#### 3.1 Example: Ammonia-Methanol-Water System

One well-known example of a three-fluid system is the **Ammonia-Methanol-Water** system.

*   **Primary Refrigerant:** Ammonia (NH₃)
*   **Primary Absorbent:** Water (H₂O)
*   **Tertiary Component:** Methanol (CH₃OH)

**Purpose of Methanol:**
In the standard Ammonia-Water system, the rectification process (separating pure ammonia from water vapor) can be challenging at low evaporator temperatures. Methanol is introduced to improve the rectification process and allow for lower operating temperatures.

**Working Principle (Simplified):**

1.  **Evaporator:** Ammonia evaporates at low pressure, absorbing heat and producing cooling. The ammonia vapor mixes with the absorbent solution.
2.  **Absorber:** Ammonia vapor is absorbed by the strong absorbent solution (often a mixture of water and methanol).
3.  **Pumping:** The rich solution is pumped to the generator.
4.  **Generator:** Heat is applied to the rich solution to drive off the ammonia vapor. The presence of methanol affects the vapor-liquid equilibrium, helping to achieve a purer ammonia vapor.
5.  **Rectifier:** This is where the three-fluid nature becomes crucial. The vapor leaving the generator is a mixture of ammonia, water, and methanol. The rectifier is designed to separate the ammonia from the water and methanol. Methanol has a lower boiling point than water but a higher boiling point than ammonia. It can form azeotropes with ammonia and water, which can be manipulated to achieve better separation.
    *   **Rectification Process:** The vapor mixture is passed through a rectifying column. A temperature gradient is maintained in the column. Ammonia, being the most volatile, rises to the top and is condensed. Water and methanol, being less volatile, tend to condense and flow down. The presence of methanol can help "strip" water from the ammonia vapor by forming azeotropes, thus improving the purity of the ammonia returning to the condenser.
6.  **Condenser:** Pure ammonia vapor is condensed into liquid ammonia.
7.  **Expansion Valve:** Liquid ammonia expands to low pressure before entering the evaporator.

**Key Components and their Function in a Three-Fluid System:**

*   **Generator:** Heats the rich solution to vaporize the refrigerant (ammonia).
*   **Rectifier:** Separates the refrigerant (ammonia) from the absorbent (water) and the tertiary component (methanol). This is a critical component in multi-fluid systems.
*   **Absorber:** Absorbs the refrigerant vapor into the absorbent solution.
*   **Condenser:** Condenses the pure refrigerant vapor.
*   **Evaporator:** Vaporizes the refrigerant to produce cooling.
*   **Pumps:** Circulate the liquid solutions.
*   **Heat Exchangers:** Used to pre-cool the rich solution and pre-heat the weak solution for energy efficiency.

**Advantages of Three-Fluid Systems (e.g., Ammonia-Methanol-Water):**

*   **Lower Evaporating Temperatures:** Can achieve lower temperatures compared to basic two-fluid ammonia-water systems, making them suitable for refrigeration applications requiring very low temperatures.
*   **Improved Rectification:** The addition of a tertiary fluid like methanol can significantly improve the purity of the refrigerant vapor leaving the generator, leading to better system performance.
*   **Reduced Pumping Load:** In some configurations, the tertiary fluid can help reduce the amount of absorbent pumped.

**Disadvantages:**

*   **Increased Complexity:** The system is more complex with additional components (rectifier) and working fluids, leading to higher initial cost and maintenance.
*   **Corrosion and Material Compatibility:** Careful selection of materials is required due to the presence of ammonia and potentially corrosive mixtures.
*   **Thermodynamic Analysis Complexity:** Analyzing the performance of such systems requires detailed thermodynamic property data for the mixture and a thorough understanding of phase equilibria.

**CO Alignment:** CO1 (Define and describe basic concepts and applications of refrigeration and air conditioning), CO3 (Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems).

**Textbook References:**

*   Arora, C.P. (2021). *Refrigeration and Air Conditioning*. May discuss advanced absorption cycles.
*   Ahamadul Ameen. (2020). *Refrigeration and air conditioning*. May discuss variations in absorption systems.
*   Stoecker & Jons. (2nd edition). *Refrigeration & Air-conditioning*. May have sections on multi-component absorption cycles.

**Reference Book References:**

*   ASHRAE Handbook. Relevant chapters on absorption refrigeration and refrigerants might provide insights into multi-component systems.

---

### 4. Thermodynamic Analysis of Three-Fluid Absorption Systems

The thermodynamic analysis of a three-fluid absorption system is more complex than that of a two-fluid system due to the presence of multiple components and the non-ideal behavior of mixtures.

**Key Performance Indicators:**

*   **Coefficient of Performance (COP):**
    $COP = \frac{\text{Cooling Effect}}{\text{Heat Input to Generator}}$

    The cooling effect is the latent heat absorbed by the refrigerant in the evaporator. The heat input is the heat supplied to the generator.

*   **Mass Flow Rates:** The analysis involves tracking the mass flow rates of each component (refrigerant, absorbent, tertiary fluid) through the cycle.

*   **Enthalpy and Entropy:** Calculating the enthalpy and entropy of the mixtures at various states is crucial for determining the energy transfers and losses. This requires thermodynamic property data or correlations for the specific mixture (e.g., Ammonia-Methanol-Water).

**Analytical Approach:**

1.  **Define System States:** Identify all the key state points in the cycle (e.g., evaporator outlet, absorber inlet, generator outlet, condenser outlet).
2.  **Energy Balance:** Apply the first law of thermodynamics (energy balance) to each component (generator, evaporator, condenser, absorber, pumps, rectifier, heat exchangers).
3.  **Mass Balance:** Apply mass balance for each component, considering all the components in the mixture.
4.  **Phase Equilibrium:** Utilize vapor-liquid equilibrium (VLE) data or models for the multi-component mixture to determine the composition and thermodynamic properties of the vapor and liquid phases at different pressures and temperatures.
5.  **Heat Transfer:** Account for heat transfer in all components, including heat losses or gains to the surroundings.
6.  **Pump Work:** Calculate the work done by pumps, which is typically small but needs to be considered.
7.  **Rectifier Analysis:** The rectifier's performance is critical. It's often analyzed as a distillation column, where vapor and liquid streams are in equilibrium. This involves calculating the separation efficiency.

**Challenges in Analysis:**

*   **Property Data:** Obtaining accurate thermodynamic property data (enthalpy, entropy, VLE data) for ternary mixtures can be difficult. Specialized software or empirical correlations are often required.
*   **Rectifier Design and Performance:** The design and operating conditions of the rectifier significantly impact the overall system performance. Analyzing it accurately requires understanding distillation principles.
*   **Complexity of Calculations:** The analysis involves solving a system of simultaneous equations for mass and energy balances, incorporating VLE data.

**CO Alignment:** CO3 (Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems).

**Textbook References:**

*   Arora, C.P. (2021). *Refrigeration and Air Conditioning*. Chapters on performance analysis and advanced cycles.
*   Ramesh Cahndra Arora. (2015). *Refrigeration and Air Conditioning*. May provide detailed analytical methods.
*   Kothandaraman, C.P. (2023). *Data book- Refrigeration tables and charts including air conditioning data*. While primarily for single substances, it might contain some mixture data or provide a basis for understanding thermodynamic properties.

---

### 5. Applications of Three-Fluid Absorption Systems

Three-fluid absorption systems are typically employed in niche applications where their specific advantages are beneficial.

*   **Low-Temperature Refrigeration:** Applications requiring temperatures below -20°C, such as industrial process cooling, food freezing, and specialized scientific applications.
*   **Combined Cooling and Heating:** Absorption systems can be configured for combined heat and power (CHP) or trigeneration, where waste heat is utilized to produce cooling, heating, and electricity.
*   **Solar-Assisted Refrigeration:** In regions with abundant solar energy, three-fluid systems can be designed to operate effectively with solar collectors as the heat source, reducing reliance on electricity.

**CO Alignment:** CO1 (Define and describe basic concepts and applications of refrigeration and air conditioning).

**Textbook References:**

*   Jones, W. P. (2001). *Air Conditioning Engineering*. May discuss various refrigeration system applications.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the primary role of the tertiary fluid in a three-fluid absorption refrigeration system like Ammonia-Methanol-Water. What advantage does it offer over a standard two-fluid Ammonia-Water system?

**Answer:**
The tertiary fluid, such as methanol in the Ammonia-Methanol-Water system, primarily enhances the rectification process. It helps in separating the refrigerant (ammonia) from the absorbent (water) more effectively. This is achieved by forming azeotropes and manipulating vapor-liquid equilibrium. The advantage offered is the ability to achieve lower evaporating temperatures than possible with a two-fluid Ammonia-Water system and a purer refrigerant vapor leaving the generator.

**Question 2 (Conceptual/CO Alignment):**
Compare and contrast the working principle of a LiBr-Water absorption system with a conceptual three-fluid system that uses ammonia as the refrigerant.

**Answer:**
*   **LiBr-Water:** Uses water as the refrigerant and LiBr as the absorbent. It's suitable for air conditioning (chilled water production). Water evaporates and is absorbed by LiBr. Heat is supplied to the generator to separate water from LiBr.
*   **Ammonia-based Three-fluid (e.g., Ammonia-Methanol-Water):** Uses ammonia as the refrigerant and a mixture (often water and methanol) as the absorbent. It's capable of producing lower temperatures. Ammonia evaporates and is absorbed. Heat is supplied to the generator to vaporize ammonia. A rectifier is crucial to separate pure ammonia from the mixture of ammonia, water, and methanol vapor leaving the generator.

**Key Differences:**
    *   **Refrigerant:** Water vs. Ammonia
    *   **Temperature Capability:** Moderate (AC) vs. Low-temperature refrigeration
    *   **System Complexity:** Two-fluid vs. Three-fluid (with rectifier)
    *   **Working Fluids:** LiBr is a salt, while water and methanol are liquids.

**Question 3 (Thermodynamic Analysis - Conceptual):**
When performing a thermodynamic analysis of a three-fluid absorption system, why is the accurate determination of vapor-liquid equilibrium (VLE) data for the mixture critical?

**Answer:**
Accurate VLE data is critical because it governs the composition of the vapor and liquid phases at different temperatures and pressures within the system, especially in the generator and rectifier. This data directly influences:
    *   The purity of the refrigerant vapor leaving the rectifier.
    *   The concentration of the solutions entering and leaving various components.
    *   The enthalpy and entropy of the streams, which are essential for performing energy balances.
    *   The efficiency of the separation process.
Without accurate VLE data, the COP and the overall performance of the system cannot be reliably calculated.

**Question 4 (CO Alignment):**
A three-fluid absorption system is being considered for a process that requires a chilling temperature of -30°C. Which type of two-fluid absorption system would be unsuitable for this application, and why?

**Answer:**
A LiBr-Water absorption system would be unsuitable for a chilling temperature of -30°C. This is because the refrigerant used in a LiBr-Water system is water. Water freezes at 0°C, making it impossible to achieve temperatures significantly below its freezing point in the evaporator. A three-fluid system (or a two-fluid Ammonia-Water system) capable of operating with a refrigerant like ammonia is necessary for such low-temperature applications.

---

### 7. Important Points to Remember

*   **Three-fluid systems** are designed to overcome limitations of two-fluid systems, often for achieving lower temperatures or improving separation efficiency.
*   The **rectifier** is a key component in many three-fluid systems, facilitating the separation of the refrigerant from other components.
*   **Thermodynamic analysis** is significantly more complex due to the multi-component nature of the working fluids and the need for VLE data.
*   The **COP** of absorption systems is generally lower than that of vapor compression systems, but they are attractive when waste heat is available.
*   **Ammonia-Water** systems are suitable for low temperatures, while **LiBr-Water** systems are for moderate temperatures (air conditioning). Three-fluid systems often extend the capabilities of ammonia-based cycles.
*   Careful **material selection** and understanding of **corrosion and safety** are crucial for systems using ammonia.

---

### 8. Alignment with Course Outcomes

*   **CO1:** This topic directly addresses the definition and description of absorption refrigeration systems, including the concept of three-fluid systems and their applications.
*   **CO3:** The discussion on thermodynamic analysis, including COP calculation, mass/energy balances, and the importance of VLE data, directly aligns with performing thermodynamic analysis of absorption systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
