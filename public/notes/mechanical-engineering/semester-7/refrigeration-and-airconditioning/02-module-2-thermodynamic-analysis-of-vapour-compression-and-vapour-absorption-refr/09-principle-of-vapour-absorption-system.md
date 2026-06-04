---
title: "Principle of vapour absorption system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f69"
status: "completed"
scrapedAt: "2026-05-20T18:17:17.118Z"
---
# Refrigeration and Air Conditioning: Module 2 - Thermodynamic Analysis of Vapour Compression and Vapour Absorption Systems

## Topic: Principle of Vapour Absorption System

---

### **1. Introduction to Vapour Absorption Systems (VAS)**

Vapour absorption refrigeration systems (VAS) are refrigeration cycles that utilize a heat source, rather than mechanical work, to drive the refrigeration process. This makes them particularly attractive for applications where waste heat is available, such as from industrial processes, solar energy, or cogeneration plants.

*   **Core Principle:** The fundamental principle of VAS is to replace the mechanical compressor used in vapour compression systems (VCS) with an **absorption unit** and a **generator**. This substitution allows for the use of low-grade heat energy to drive the refrigeration cycle.
*   **Key Difference from VCS:**
    *   **VCS:** Relies on mechanical work input to the compressor.
    *   **VAS:** Relies on heat input to the generator.

---

### **2. Essential Components of a Basic Vapour Absorption System**

A simple VAS, typically using Ammonia-Water or Lithium Bromide-Water as the working fluid pair, consists of the following primary components:

*   **Evaporator:** Functions identically to the evaporator in a VCS. The refrigerant absorbs heat from the space to be cooled, causing it to vaporize.
    *   *Refrigerant:* Ammonia (in NH3-H2O system) or Water (in LiBr-H2O system)
    *   *Low Pressure, Low Temperature Vaporization:* Occurs at a low pressure and temperature, absorbing latent heat.
*   **Absorber:** In this component, the refrigerant vapor leaving the evaporator is absorbed by an absorbent solution. This is where the "absorption" process takes place.
    *   *Refrigerant:* Ammonia vapor
    *   *Absorbent:* Water (in NH3-H2O system)
    *   *Process:* Dissolution of refrigerant into the absorbent, releasing heat of absorption. This process is exothermic.
    *   *Pressure:* Operates at low pressure (same as evaporator).
*   **Generator (Boiler):** The strong absorbent solution from the absorber is pumped to the generator, where it is heated by an external heat source. This heat causes the refrigerant to vaporize and separate from the absorbent.
    *   *Heat Input:* From waste heat, solar energy, etc.
    *   *Process:* Heating the strong solution to boil off the refrigerant vapor.
    *   *Pressure:* Operates at higher pressure than the absorber.
*   **Rectifier (Optional but common):** Often included to remove any traces of absorbent vapor that might have been carried over with the refrigerant vapor from the generator, ensuring purity.
*   **Expansion Valve (Throttling Device):** Similar to VCS, it reduces the pressure and temperature of the liquid refrigerant before it enters the evaporator.
*   **Pump (Liquid Pump):** Circulates the absorbent solution between the absorber, generator, and often to the generator. This pump requires a small amount of work input, which is significantly less than the work required by a compressor in a VCS.
*   **Condenser:** Functions identically to the condenser in a VCS. The high-pressure refrigerant vapor from the generator (and rectifier) is cooled and condensed into a liquid.
*   **Refrigerant Receiver:** Stores the liquid refrigerant.

---

### **3. Working Principle - The Cycle Explained**

The VAS cycle can be understood by following the path of the refrigerant and the absorbent. We will use the **Ammonia-Water (NH3-H2O) system** as a primary example, as it is a classic and widely studied VAS. Lithium Bromide-Water (LiBr-H2O) systems are also common, but the roles of refrigerant and absorbent are reversed, with water acting as the absorbent and lithium bromide as the refrigerant.

**Working Fluid Pair:**
*   **Ammonia-Water System:**
    *   Refrigerant: Ammonia (NH3)
    *   Absorbent: Water (H2O)
*   **Lithium Bromide-Water System:**
    *   Refrigerant: Water (H2O)
    *   Absorbent: Lithium Bromide (LiBr)

**Cycle Steps (Ammonia-Water System):**

1.  **Evaporation:**
    *   Liquid ammonia (at low pressure and temperature) enters the **evaporator**.
    *   It absorbs heat from the refrigerated space, causing it to boil and turn into low-pressure ammonia vapor.
    *   This cools the refrigerated space.
    *   *(From Textbook: Arora C.P., 4th edition, Chapter 9)*

2.  **Absorption:**
    *   The low-pressure ammonia vapor flows to the **absorber**.
    *   In the absorber, it comes into contact with a weak ammonia solution (water with a low concentration of ammonia) which is at a lower temperature and pressure.
    *   Ammonia readily dissolves in water, forming a rich ammonia solution. This absorption process releases heat (heat of absorption), which is dissipated to the cooling water.
    *   *(From Textbook: Ramesh Chandra Arora, 4th Printing, Chapter 8)*

3.  **Pumping and Pressurization:**
    *   The rich ammonia solution (strong solution) from the absorber is pumped to a higher pressure by a **liquid pump**. The work done by the pump is negligible compared to a compressor.
    *   *(From Textbook: S. C. Arora and S. Domkundwar, 2018, Chapter 10)*

4.  **Generation:**
    *   The high-pressure rich ammonia solution enters the **generator (or generator/rectifier combination)**.
    *   Heat is supplied externally to the generator. This heat causes the ammonia to boil and vaporize, separating from the water.
    *   The ammonia vapor, now at high pressure, rises.
    *   The remaining liquid is a weak ammonia solution (water with a low concentration of ammonia).
    *   *(From Textbook: Ahamadul Ameen, 2020, Chapter 7)*

5.  **Rectification (Optional but common):**
    *   The ammonia vapor from the generator may contain some water vapor.
    *   In the **rectifier** (often integrated with the generator or a separate unit), further heating or a water wash might be used to remove most of the water vapor, producing nearly pure ammonia vapor.

6.  **Condensation:**
    *   The high-pressure, relatively pure ammonia vapor from the generator/rectifier enters the **condenser**.
    *   Cooling water flows through the condenser, removing heat from the ammonia vapor.
    *   The ammonia vapor condenses into high-pressure liquid ammonia.
    *   *(Reference Book: Stoecker & Jons, 2nd edition, Chapter 6)*

7.  **Expansion:**
    *   The high-pressure liquid ammonia from the condenser passes through an **expansion valve**.
    *   This throttles the liquid ammonia, reducing its pressure and temperature.
    *   The resulting low-pressure, low-temperature liquid-vapor mixture then enters the evaporator.

**The cycle then repeats.**

---

### **4. Thermodynamic Analysis and Performance Metrics**

The performance of a VAS is evaluated using different metrics than a VCS, primarily because of the heat input and the auxiliary work.

*   **Coefficient of Performance (COP):**
    *   Unlike VCS, where COP is defined as cooling effect divided by work input, VAS COP includes both cooling effect and heat input.
    *   **Definition:** $COP_{VAS} = \frac{\text{Cooling Effect (Evaporator Heat Load)}}{\text{Heat Input (Generator) + Net Work Input (Pump)}}$
    *   Since the work input to the pump is very small, it is often neglected, simplifying the formula to:
        $COP_{VAS} \approx \frac{\text{Cooling Effect}}{\text{Heat Input}}$
    *   **Typical Values:** COPs for VAS are generally lower than for VCS, typically ranging from 0.6 to 1.2, depending on the operating temperatures and the system design. LiBr-H2O systems can achieve higher COPs (around 1.0 to 1.2) than NH3-H2O systems (around 0.6 to 0.8) when operating at higher cooling temperatures.

*   **Heat Input:** The heat supplied to the generator is the primary energy input. This can be derived from various sources, making VAS attractive for energy recovery.

*   **Cooling Effect:** The useful refrigeration effect achieved in the evaporator.

*   **Heat Rejected:** Heat is rejected in two places:
    *   Absorber: Heat of absorption + latent heat of refrigerant vapor.
    *   Condenser: Latent heat of condensation.

---

### **5. Working Fluid Pairs in VAS**

The choice of working fluid pair is crucial for the performance and application of a VAS. The ideal pair should have:

*   **Ammonia-Water (NH3-H2O):**
    *   **Refrigerant:** Ammonia (NH3) - Low boiling point, good refrigerating properties.
    *   **Absorbent:** Water (H2O) - Non-toxic, non-flammable, readily available.
    *   **Characteristics:**
        *   Suitable for low-temperature refrigeration (below 0°C).
        *   Ammonia is toxic and corrosive, requiring careful material selection.
        *   Requires a rectifier due to the volatility of water with ammonia at higher temperatures.
        *   Lower COP compared to LiBr-H2O for comfort cooling.
    *   *(From Textbook: Refrigeration and air conditioning - by Ahamadul Ameen, 2020, Chapter 7)*
    *   *(Reference Book: Basic Refrigeration and Air Conditioning by P NAnanthanarayanan, 4th Edition 2013, Chapter 9)*

*   **Lithium Bromide-Water (LiBr-H2O):**
    *   **Refrigerant:** Water (H2O) - Non-toxic, environmentally friendly.
    *   **Absorbent:** Lithium Bromide (LiBr) - A salt that readily absorbs water vapor.
    *   **Characteristics:**
        *   Suitable for medium and high-temperature applications (above freezing point of water, typically used for air conditioning).
        *   Water as refrigerant means no low-temperature boiling issues.
        *   Lithium Bromide is corrosive and can crystallize if the concentration becomes too high or temperatures too low, requiring careful design.
        *   Higher COP compared to NH3-H2O systems for comfort cooling.
        *   Does not require a rectifier as LiBr has negligible vapor pressure.
    *   *(From Textbook: Arora C.P., 4th edition, Chapter 9)*
    *   *(Reference Book: ASHRAE Handbook, 2017 Fundamentals, Chapter 18)*

---

### **6. Advantages and Disadvantages of VAS**

**Advantages:**

*   **Utilizes Waste Heat:** Can be driven by low-grade heat sources (solar, geothermal, industrial waste heat), reducing electricity consumption.
*   **Lower Power Consumption:** The only significant power input is for the small liquid pump, making them suitable for areas with limited electricity or high electricity costs.
*   **Environmentally Friendly (LiBr-H2O):** Water as the refrigerant is completely non-toxic and ozone-friendly.
*   **Quiet Operation:** No noisy compressor.
*   **Flexibility in Heat Source:** Can be powered by various heat sources.

**Disadvantages:**

*   **Lower COP:** Generally lower COP compared to conventional VCS.
*   **Larger Size and Weight:** Components like the generator and absorber are often larger than a VCS compressor.
*   **Higher Initial Cost:** Can be more expensive initially due to specialized components.
*   **Corrosion Issues (LiBr-H2O):** Lithium bromide can be corrosive, requiring careful material selection and maintenance.
*   **Toxicity and Corrosivity (NH3-H2O):** Ammonia is toxic and corrosive, requiring safety precautions and specific materials.
*   **Limited to Higher Temperatures (LiBr-H2O):** Water as refrigerant cannot be used for sub-zero temperature applications.

---

### **7. Applications of Vapour Absorption Systems**

*   **Industrial Cooling:** Utilizing waste heat from manufacturing processes.
*   **Cogeneration Plants:** Using heat rejected from power generation.
*   **Solar Cooling:** Driven by solar thermal collectors.
*   **Comfort Air Conditioning:** Particularly in regions with abundant low-cost heat or where electricity is expensive.
*   **Refrigeration in Remote Areas:** Where electricity supply is unreliable.
*   **Specialized Low-Temperature Applications (NH3-H2O):** Ice making, food processing.

---

### **8. Important Points to Remember**

*   The primary driving force for a VAS is **heat**, not mechanical work.
*   The **generator** replaces the compressor in terms of function in the cycle's thermodynamic drive.
*   The **absorber** is a key component where the refrigerant vapor is dissolved in the absorbent.
*   **Ammonia-Water** systems are suitable for low-temperature applications, while **Lithium Bromide-Water** systems are preferred for comfort cooling.
*   The **COP of a VAS** is defined as cooling effect divided by the sum of heat input and work input.
*   The **liquid pump** requires minimal work input, making the system energy-efficient in terms of electrical power.

---

### **9. Practice Questions and Exercises**

**Question 1 (Knowledge Level: K2):**
What is the primary difference in the energy input required for a vapour compression system versus a vapour absorption system?

**Answer:** A vapour compression system requires mechanical work input to the compressor, while a vapour absorption system requires heat input to the generator.

**Question 2 (Knowledge Level: K3):**
List the main components of a basic vapour absorption refrigeration system using Ammonia-Water as the working fluid pair.

**Answer:** Evaporator, Absorber, Generator, Condenser, Expansion Valve, Pump. (Rectifier is often included).

**Question 3 (Knowledge Level: K4):**
Explain the role of the absorber in a vapour absorption refrigeration system.

**Answer:** In the absorber, the refrigerant vapor leaving the evaporator is dissolved into a weak absorbent solution. This process increases the concentration of the refrigerant in the absorbent, forming a strong solution, and releases heat.

**Question 4 (Knowledge Level: K4):**
Compare the typical applications of Ammonia-Water and Lithium Bromide-Water absorption systems.

**Answer:** Ammonia-Water systems are typically used for applications requiring sub-zero temperatures (e.g., ice making, food freezing) due to ammonia's low boiling point. Lithium Bromide-Water systems are generally used for comfort air conditioning and other applications where the cooling temperature is above freezing, as water is the refrigerant.

**Question 5 (Knowledge Level: K5 - Application/Analysis):**
A solar-powered vapour absorption system is being considered for air conditioning a building. The system uses a LiBr-H2O pair.
a) What are the advantages of using a VAS in this scenario?
b) What is a potential drawback of using water as the refrigerant in this system, considering typical ambient temperatures?

**Answer:**
a) Advantages include utilizing free solar energy (heat), reducing reliance on electricity (which might be more expensive or less available), and potentially lower operating costs.
b) A potential drawback is that if ambient temperatures are very high, it might be difficult to condense the water vapor effectively, or the system might not be able to achieve the desired low temperatures for cooling if the condenser temperature is too high. Also, if the system is shut down and ambient temperatures drop significantly, the water in the evaporator or piping could freeze, causing damage.

---

### **10. Alignment with Course Outcomes**

*   **CO1:** This topic directly addresses the basic concepts of VAS (Knowledge Level: K2) and their thermodynamic principles (Knowledge Level: K4).
*   **CO3:** The principles of operation, components, and performance metrics (COP) of VAS are covered, supporting the thermodynamic analysis of these systems (Knowledge Level: K3, K4).
*   **CO4:** The discussion on working fluid pairs (NH3-H2O, LiBr-H2O) and their characteristics directly relates to selecting appropriate refrigerants and understanding system components (Knowledge Level: K2, K3).

---

This detailed study note provides a comprehensive overview of the principle of vapour absorption systems, covering its working, components, performance, and applications, as per the learning objectives and course outcomes specified.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
