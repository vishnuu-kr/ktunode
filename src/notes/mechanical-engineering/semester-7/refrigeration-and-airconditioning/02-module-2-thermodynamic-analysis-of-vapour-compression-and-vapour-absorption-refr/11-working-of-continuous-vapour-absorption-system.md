---
title: "Working of continuous vapour absorption system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f6b"
status: "completed"
scrapedAt: "2026-05-20T18:17:18.566Z"
---
# Refrigeration and Air Conditioning: Module 2 - Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Working of Continuous Vapour Absorption System

This topic delves into the fundamental principles and operational aspects of continuous vapour absorption refrigeration (VAR) systems, a crucial alternative to vapour compression systems, particularly when waste heat is available.

---

### **1. Introduction to Vapour Absorption Refrigeration (VAR) Systems**

*   **Definition:** A VAR system is a refrigeration system that utilizes a thermal compressor (usually a generator or rectifier) to absorb refrigerant vapour from the evaporator and deliver it to the condenser. Unlike vapour compression systems that use a mechanical compressor, VAR systems rely on the absorption and desorption of a refrigerant by an absorbent liquid.
*   **Key Principle:** The system leverages the property that certain substances readily absorb refrigerant vapour at low temperatures and pressures and release it at higher temperatures and pressures when heat is applied.
*   **Applications:**
    *   Utilizing waste heat from industrial processes, power plants, or solar energy.
    *   Where electricity is scarce or expensive.
    *   In applications requiring quiet operation (no noisy compressor).
    *   Domestic refrigerators (e.g., RV refrigerators).
*   **Comparison with Vapour Compression Systems:**
    *   **Energy Source:** VAR systems use heat energy, while Vapour Compression systems use electrical energy for the compressor.
    *   **Compressor:** VAR systems use a thermal compressor (generator), while Vapour Compression systems use a mechanical compressor.
    *   **COP:** VAR systems generally have lower Coefficients of Performance (COP) compared to Vapour Compression systems, but this is offset by the utilization of readily available waste heat.
    *   **Complexity:** VAR systems are typically more complex with more components.

---

### **2. Essential Components of a Continuous Vapour Absorption System**

A typical continuous VAR system consists of the following key components:

*   **Evaporator:**
    *   **Function:** Absorbs heat from the refrigerated space, causing the refrigerant to vaporize at low pressure and temperature.
    *   **Refrigerant:** Typically ammonia (NH3).
    *   **Absorbent:** Typically water (H2O).
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9; Domkundwar S.C., 2018, Chapter 11)**

*   **Generator (Thermal Compressor):**
    *   **Function:** Heats the strong absorbent-refrigerant solution, causing the refrigerant to vaporize and separate from the absorbent. This is where the "compression" effect is achieved thermally.
    *   **Heat Input:** Supplied by a heat source (e.g., steam, hot water, direct flame, solar energy).
    *   **Output:** Refrigerant vapour at higher pressure and temperature, and a weak absorbent solution.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9; Domkundwar S.C., 2018, Chapter 11)**

*   **Rectifier/Analyser (Optional but common):**
    *   **Function:** Removes any remaining absorbent liquid from the refrigerant vapour leaving the generator, ensuring pure refrigerant vapour enters the condenser. This improves efficiency and prevents liquid carryover.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9)**

*   **Condenser:**
    *   **Function:** Condenses the high-pressure refrigerant vapour into a liquid by rejecting heat to the cooling medium (usually ambient air or water).
    *   **Process:** Phase change from vapour to liquid at high pressure.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9)**

*   **Expansion Valve (Throttling Device):**
    *   **Function:** Reduces the pressure and temperature of the liquid refrigerant before it enters the evaporator.
    *   **Process:** Isenthalpic (constant enthalpy) expansion.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9)**

*   **Absorber:**
    *   **Function:** Absorbs the low-pressure refrigerant vapour from the evaporator into a weak absorbent solution, creating a strong absorbent-refrigerant solution. This process releases heat.
    *   **Heat Rejection:** Heat is rejected to the cooling medium.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9; Domkundwar S.C., 2018, Chapter 11)**

*   **Pump:**
    *   **Function:** Pumps the weak absorbent solution from the absorber back to the generator. This requires a small amount of work, usually supplied by an electric motor.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9)**

*   **Liquid-to-Liquid Heat Exchanger (Solution Heat Exchanger):**
    *   **Function:** Preheats the weak absorbent solution flowing from the absorber to the generator using the heat from the strong absorbent solution flowing from the generator to the absorber. This improves overall efficiency.
    *   **(Ref: Arora C.P., 4th edition/2021, Chapter 9)**

---

### **3. Working Principle of a Continuous Vapour Absorption System (Ammonia-Water System)**

Let's trace the cycle using the common Ammonia-Water (NH3-H2O) system as an example.

1.  **Evaporation:**
    *   Liquid ammonia (low pressure, low temperature) from the expansion valve enters the **evaporator**.
    *   It absorbs heat from the refrigerated space, causing it to boil and turn into low-pressure ammonia vapour.
    *   **State:** Low-pressure, low-temperature ammonia vapour.

2.  **Absorption:**
    *   The low-pressure ammonia vapour from the evaporator flows to the **absorber**.
    *   A weak ammonia solution (meaning it has a lower concentration of ammonia) is pumped from the absorber to the generator.
    *   In the absorber, the low-pressure ammonia vapour is absorbed by the weak solution. This process is exothermic (releases heat) and is usually cooled by a cooling medium.
    *   This forms a strong ammonia solution (higher concentration of ammonia).
    *   **State:** Weak ammonia solution + low-pressure ammonia vapour -> Strong ammonia solution (at low pressure).

3.  **Pumping:**
    *   The strong ammonia solution is pumped by a **pump** to the generator. This is the only component requiring external work input (typically electrical).

4.  **Generation:**
    *   The strong ammonia solution enters the **generator**.
    *   Heat is supplied to the generator (e.g., from steam).
    *   This heat causes the ammonia to vaporize and separate from the water. The ammonia leaves as high-pressure ammonia vapour.
    *   The remaining solution, now a weak ammonia solution, exits the generator.
    *   **State:** Strong ammonia solution + Heat -> High-pressure ammonia vapour + Weak ammonia solution.

5.  **Rectification (Optional):**
    *   The high-pressure ammonia vapour from the generator passes through a **rectifier**.
    *   This removes any entrained water vapour, ensuring only pure ammonia vapour moves to the condenser.

6.  **Condensation:**
    *   The high-pressure ammonia vapour from the rectifier enters the **condenser**.
    *   It is cooled by a cooling medium (air or water), causing it to condense into high-pressure liquid ammonia.
    *   **State:** High-pressure ammonia vapour -> High-pressure liquid ammonia.

7.  **Expansion:**
    *   The high-pressure liquid ammonia from the condenser passes through an **expansion valve**.
    *   This is a throttling process that reduces the pressure and temperature of the liquid ammonia.
    *   **State:** High-pressure liquid ammonia -> Low-pressure, low-temperature liquid ammonia.

8.  **Heat Exchanger (Solution Preheating):**
    *   The hot weak solution leaving the generator flows through a **liquid-to-liquid heat exchanger**.
    *   It preheats the cooler weak solution coming from the absorber before it enters the generator.
    *   This recovered heat improves the overall thermal efficiency of the system.

*   **(Ref: Arora C.P., 4th edition/2021, Chapter 9, Figure 9.1; Domkundwar S.C., 2018, Chapter 11, Figure 11.2; Jones W P, 5th edition/2001, Chapter 8)**

---

### **4. Thermodynamic Analysis and Performance Evaluation**

*   **Coefficient of Performance (COP):**
    *   The COP of a VAR system is defined as the ratio of the desired cooling effect to the total heat input.
    *   $COP_{VAR} = \frac{\text{Cooling Effect (Evaporator Heat Input)}}{\text{Heat Input to Generator} + \text{Work Input to Pump}}$
    *   Since the work input to the pump is generally negligible compared to the heat input, it is often ignored:
    *   $COP_{VAR} \approx \frac{Q_e}{Q_g}$
        *   $Q_e$: Heat absorbed in the evaporator (kJ/kg of refrigerant)
        *   $Q_g$: Heat supplied to the generator (kJ/kg of refrigerant)

*   **Factors Affecting COP:**
    *   **Temperature Differences:** Higher generator temperature and lower evaporator temperature generally decrease COP.
    *   **Condenser Temperature:** Higher condenser temperature also decreases COP.
    *   **Heat Exchanger Effectiveness:** Higher effectiveness of the solution heat exchanger improves COP.
    *   **Pump Efficiency:** Though small, pump efficiency can have a minor impact.
    *   **Concentration of Solutions:** The concentration of the refrigerant in the absorbent solution plays a crucial role.

*   **Common Refrigerant-Absorbent Pairs:**
    *   **Ammonia (NH3) - Water (H2O):**
        *   **Advantages:** High refrigerating effect per unit mass of refrigerant, good thermodynamic properties for refrigeration.
        *   **Disadvantages:** Ammonia is toxic and corrosive, requiring specialized materials and handling.
        *   **(Ref: Arora C.P., 4th edition/2021, Table 9.1)**
    *   **Water (H2O) - Lithium Bromide (LiBr):**
        *   **Advantages:** Non-toxic, suitable for high-temperature cooling (e.g., air conditioning), LiBr is a good absorbent for water.
        *   **Disadvantages:** Water is the refrigerant, so it cannot be used for temperatures below its freezing point (0°C). Crystallization of LiBr can occur if concentrations are too high or temperatures too low.
        *   **(Ref: Arora C.P., 4th edition/2021, Table 9.1)**

*   **Thermodynamic Cycles and Analysis:**
    *   The cycle can be analyzed using enthalpy-concentration diagrams for the specific refrigerant-absorbent pair.
    *   The process states are determined based on pressure, temperature, and concentration.
    *   The COP is calculated by summing the energy transfers at each component.

*   **(Ref: Arora C.P., 4th edition/2021, Chapter 9; Domkundwar S.C., 2018, Chapter 11; Stoecker & Jons, 2nd edition, Chapter on Absorption Refrigeration)**

---

### **5. Important Points to Remember**

*   VAR systems are **heat-driven** refrigeration systems.
*   The **generator** acts as the thermal compressor.
*   The **absorber** is where the refrigerant vapour is absorbed into the liquid absorbent.
*   The **pump** is the only component requiring external work.
*   The **COP** of VAR systems is typically lower than VCR systems but is advantageous when waste heat is available.
*   The most common pairs are **Ammonia-Water** and **Water-Lithium Bromide**.
*   **Ammonia-Water** is suitable for sub-zero temperatures, while **Water-Lithium Bromide** is not.
*   The **solution heat exchanger** is crucial for improving the system's efficiency.
*   Consider **toxicity** and **corrosion** when selecting refrigerant-absorbent pairs.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Explain the role of the generator and absorber in a continuous vapour absorption refrigeration system. How do they replace the function of the mechanical compressor in a vapour compression system?

**Answer 1:**
The **generator** in a VAR system uses heat to vaporize the refrigerant from the absorbent solution, effectively increasing the pressure of the refrigerant vapour. This is analogous to the compressor in a VCR system, which mechanically compresses the refrigerant vapour. The **absorber** in a VAR system absorbs the low-pressure refrigerant vapour from the evaporator into the absorbent solution, reducing the refrigerant's partial pressure in the evaporator and thus facilitating evaporation at a lower temperature. This also prepares the refrigerant for the next cycle.

**Question 2:**
What are the advantages and disadvantages of using an Ammonia-Water system compared to a Water-Lithium Bromide system for refrigeration?

**Answer 2:**
**Ammonia-Water:**
*   **Advantages:** Can achieve sub-zero temperatures, high refrigerating effect per unit mass.
*   **Disadvantages:** Ammonia is toxic and corrosive, requiring special materials and safety precautions.

**Water-Lithium Bromide:**
*   **Advantages:** Non-toxic refrigerant (water), suitable for air conditioning (cooling above 0°C), LiBr is a good absorbent.
*   **Disadvantages:** Cannot achieve sub-zero temperatures due to water's freezing point. Risk of crystallization of LiBr at certain conditions.

**Question 3:**
How does the presence of a solution heat exchanger affect the performance (COP) of a continuous vapour absorption system?

**Answer 3:**
The solution heat exchanger preheats the weak absorbent solution going to the generator by utilizing the heat from the strong absorbent solution coming from the generator. This preheating reduces the amount of external heat (e.g., from steam) required in the generator to vaporize the refrigerant. By reducing the heat input to the generator for the same cooling effect, the COP of the system is increased.

**Question 4 (Conceptual):**
If the heat source supplying the generator of a VAR system becomes unavailable, what will happen to the refrigeration effect and the COP of the system?

**Answer 4:**
If the heat source to the generator is lost, the generator will stop producing refrigerant vapour at high pressure. Consequently, the entire refrigeration cycle will stop. There will be no refrigerant flowing from the condenser to the evaporator, and thus no heat absorption in the evaporator. The refrigeration effect will become zero, and since the heat input is also zero (or very low, only pump work), the COP will effectively be zero or undefined.

---

### **7. Alignment with Course Outcomes**

*   **CO1:** This topic helps in defining the basic concepts (VAR systems, components) and analyzing their performance (COP calculation) (K2, K4).
*   **CO3:** The core of this topic is the thermodynamic analysis of the vapour absorption system, enabling students to perform this analysis (K3, K4).
*   **CO4:** Understanding the working of these systems involves selecting appropriate refrigerants (NH3, H2O) and absorbent pairs, and identifying system components (K2, K3).

---
This comprehensive study note covers the working of a continuous vapour absorption system, its components, thermodynamic principles, performance evaluation, and key considerations, aligning with the specified learning and course outcomes. Remember to refer to the provided textbooks for detailed diagrams and specific property data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
