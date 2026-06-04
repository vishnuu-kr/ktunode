---
title: "battery technologies - Lead-Acid Battery"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464435"
status: "completed"
scrapedAt: "2026-05-20T18:20:43.164Z"
---
# HYBRID AND ELECTRIC VEHICLES - Module 2: Energy Storage – Battery Basics

## Topic: Battery Technologies - Lead-Acid Battery

---

### **1. Introduction to Lead-Acid Batteries in the Context of HEVs/EVs**

**Key Concepts:**

*   **Electrochemical Energy Storage:** Batteries store chemical energy and convert it into electrical energy through electrochemical reactions.
*   **Secondary Cell:** Lead-acid batteries are rechargeable, meaning the electrochemical reaction can be reversed by applying an external electrical current.
*   **Historical Significance:** Lead-acid batteries are one of the oldest and most established rechargeable battery technologies. They were the primary power source for early electric vehicles.
*   **Current Role in HEVs/EVs:** While not the primary traction battery for most modern long-range EVs, lead-acid batteries still play a crucial role in Hybrid Electric Vehicles (HEVs) as auxiliary batteries.

**From Textbooks:**

*   **Husain (2010):** Mentions lead-acid batteries as a mature technology with high power capability, making them suitable for starting internal combustion engines (ICE) in HEVs.
*   **Ehsani, Gao, Gay, Emadi (2018):** Discusses the use of lead-acid batteries in HEVs for starting the ICE, powering auxiliary systems (lights, radio, etc.), and for regenerative braking energy buffering in certain configurations.
*   **Larminie & Lowry (2012):** Highlights the cost-effectiveness and robustness of lead-acid batteries, while also noting their limitations in terms of energy density and lifespan for pure EV applications.

---

### **2. Construction and Working Principle**

**Key Concepts:**

*   **Electrodes:**
    *   **Positive Electrode (Cathode):** Composed of lead dioxide (PbO₂).
    *   **Negative Electrode (Anode):** Composed of spongy lead (Pb).
*   **Electrolyte:** Dilute sulfuric acid (H₂SO₄) solution.
*   **Separator:** Porous material (e.g., fiberglass, polyethylene) preventing short circuits between electrodes.
*   **Cell Configuration:** Typically, multiple cells are connected in series within a battery to achieve the desired voltage. A single lead-acid cell produces approximately 2 volts. A 12V battery typically consists of six cells in series.
*   **Discharge Process (Electrochemical Reactions):**
    *   **At the Negative Electrode (Anode):** Pb(s) + SO₄²⁻(aq) → PbSO₄(s) + 2e⁻
    *   **At the Positive Electrode (Cathode):** PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻ → PbSO₄(s) + 2H₂O(l)
    *   **Overall Reaction:** Pb(s) + PbO₂(s) + 2H₂SO₄(aq) → 2PbSO₄(s) + 2H₂O(l)
        *   During discharge, both electrodes are converted to lead sulfate (PbSO₄), and the concentration of sulfuric acid decreases, while water is formed.
*   **Charge Process (Reversal of Reactions):**
    *   **At the Positive Electrode (now the cathode):** PbSO₄(s) + 2H₂O(l) → PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻
    *   **At the Negative Electrode (now the anode):** PbSO₄(s) + 2e⁻ → Pb(s) + SO₄²⁻(aq)
    *   **Overall Reaction:** 2PbSO₄(s) + 2H₂O(l) → Pb(s) + PbO₂(s) + 2H₂SO₄(aq)
        *   During charging, lead sulfate is converted back to lead and lead dioxide, and sulfuric acid is regenerated.

**Diagrammatic Representation (Conceptual):**

```
       +-----------------+
       |   Positive      |
       |   Electrode     |
       |   (PbO₂)        |
       +-------+---------+
               |
       +-------+---------+
       |   Separator     |
       +-------+---------+
               |
       +-------+---------+
       |   Negative      |
       |   Electrode     |
       |   (Pb)          |
       +-----------------+
               |
       ------------------- Electrolyte (H₂SO₄)
```

**From Textbooks:**

*   **Husain (2010):** Provides detailed electrochemical reactions for charge and discharge, emphasizing the role of lead sulfate formation and decomposition.
*   **Ehsani, Gao, Gay, Emadi (2018):** Explains the series connection of cells to achieve higher voltages and the concept of a "plate" structure where electrodes are immersed in the electrolyte.
*   **Larminie & Lowry (2012):** Illustrates the layered construction of lead-acid cells and the process of sulfation and desulfation during operation.

---

### **3. Types of Lead-Acid Batteries Relevant to HEVs/EVs**

**Key Concepts:**

*   **Flooded Lead-Acid (FLA):**
    *   **Construction:** The electrolyte is a liquid solution, and there is generally some free space above the plates for gas recombination.
    *   **Maintenance:** Requires periodic topping up with distilled water due to electrolyte loss through gassing during charging.
    *   **Application in HEVs:** Used as auxiliary batteries for starting the ICE, powering accessories, and supporting regenerative braking.
*   **Valve-Regulated Lead-Acid (VRLA):**
    *   **Types:**
        *   **Absorbent Glass Mat (AGM):** The electrolyte is absorbed in a fiberglass mat. The cells are sealed, with safety vents that release pressure in case of overcharging.
        *   **Gel:** The electrolyte is immobilized in a gel-like form, offering better vibration resistance and a wider operating temperature range.
    *   **Maintenance:** Virtually maintenance-free as there is no need to add water.
    *   **Application in HEVs:** Preferred for auxiliary batteries due to their sealed nature, lower gassing, and resistance to vibration. AGM is often favored for its ability to handle higher discharge rates.
*   **Start-Stop Batteries (Enhanced Lead-Acid):**
    *   **Design:** These are specifically designed for vehicles with start-stop systems, which involve frequent engine start-stop cycles and deeper discharges than traditional SLI (Starting, Lighting, Ignition) batteries.
    *   **Enhancements:** Often incorporate features like carbon additives for improved charge acceptance and deeper cycle life, and robust construction.
    *   **Application in HEVs:** Crucial for the auxiliary battery function in modern HEVs to manage the frequent demands of starting the ICE.

**From Textbooks:**

*   **Husain (2010):** Differentiates between flooded and VRLA types, highlighting the benefits of VRLA for reduced maintenance and safety.
*   **Ehsani, Gao, Gay, Emadi (2018):** Focuses on the performance requirements of auxiliary batteries in HEVs and how VRLA (especially AGM) batteries are better suited for these demanding applications than conventional SLI batteries.
*   **Larminie & Lowry (2012):** Provides a good overview of the trade-offs between FLA and VRLA, including cost, maintenance, and performance characteristics.

---

### **4. Performance Characteristics and Metrics**

**Key Concepts:**

*   **Nominal Voltage:** The average voltage per cell (2V) or battery pack (e.g., 12V).
*   **Capacity (Ampere-hours, Ah):** The amount of electrical charge a battery can deliver over a specified period. Typically rated at the C/20 discharge rate (discharging the full capacity in 20 hours).
    *   *Example:* A 100Ah battery can theoretically deliver 5A for 20 hours.
*   **Peukert's Law:** States that the effective capacity of a lead-acid battery decreases as the discharge rate increases.
    *   $C_{eff} = C_{rated} \times (\frac{t_{rated}}{t_{discharge}})^{k}$
    *   Where $C_{eff}$ is the effective capacity, $C_{rated}$ is the rated capacity (at $t_{rated}$), $t_{discharge}$ is the actual discharge time, and $k$ is the Peukert exponent (typically between 1.1 and 1.3 for lead-acid).
*   **Energy Density (Wh/kg or Wh/L):** The amount of energy stored per unit of mass or volume. Lead-acid batteries have relatively low energy density compared to other technologies like Li-ion.
*   **Power Density (W/kg or W/L):** The amount of power a battery can deliver per unit of mass or volume. Lead-acid batteries generally have good power density, making them suitable for high-current applications like starting an engine.
*   **Cycle Life:** The number of charge-discharge cycles a battery can undergo before its capacity degrades to a specified level (e.g., 80% of its initial capacity).
*   **Depth of Discharge (DoD):** The percentage of the battery's capacity that has been discharged. Deeper DoD cycles significantly reduce the cycle life of lead-acid batteries.
*   **Charge Acceptance:** The rate at which a battery can accept charge current. Crucial for regenerative braking in HEVs.
*   **Internal Resistance:** The resistance within the battery that opposes the flow of current. Higher internal resistance leads to voltage drop and heat generation during discharge.

**From Textbooks:**

*   **Husain (2010):** Discusses the importance of capacity rating and how it is affected by discharge rates, referencing Peukert's Law.
*   **Ehsani, Gao, Gay, Emadi (2018):** Compares the energy and power densities of lead-acid batteries with other technologies and explains the impact of DoD on cycle life, particularly in the context of HEV operation.
*   **Larminie & Lowry (2012):** Provides detailed explanations of internal resistance and its impact on performance, as well as the factors affecting cycle life.

---

### **5. Advantages and Disadvantages for HEV/EV Applications**

**Key Advantages:**

*   **Cost-Effective:** Relatively low manufacturing cost compared to advanced battery technologies.
*   **High Power Capability:** Can deliver high currents for engine starting and short bursts of acceleration.
*   **Mature Technology:** Well-understood manufacturing processes and extensive field experience.
*   **Good Cold-Weather Performance (for starting):** Can still crank an engine in moderately cold temperatures.
*   **Recyclability:** High recycling rates make them environmentally friendlier at the end of their life.

**Key Disadvantages:**

*   **Low Energy Density:** Limits their suitability as primary traction batteries for long-range EVs due to weight and volume penalties.
*   **Limited Cycle Life:** Especially sensitive to deep discharges, which reduces their lifespan.
*   **Slower Charging:** Relatively slow charge acceptance compared to Li-ion batteries, which can impact the effectiveness of regenerative braking.
*   **Environmental Concerns:** Contain lead, a toxic heavy metal, requiring careful handling and disposal.
*   **Maintenance (for flooded types):** Requires periodic topping up of electrolyte.
*   **Gassing:** Can produce hydrogen gas during charging, requiring ventilation and posing a safety hazard if not managed.

**From Textbooks:**

*   **Husain (2010):** Summarizes the pros and cons, emphasizing the cost advantage and power capability but also the energy density limitation.
*   **Ehsani, Gao, Gay, Emadi (2018):** Elaborates on the trade-offs for HEV applications, highlighting how their disadvantages (low energy density, limited cycle life) lead to their use as auxiliary rather than primary batteries.
*   **Larminie & Lowry (2012):** Offers a comprehensive comparison with other battery types, clearly outlining the niche where lead-acid batteries excel (e.g., auxiliary power) and where they fall short (e.g., primary EV power).

---

### **6. Role in Hybrid Electric Vehicles (HEVs)**

**Key Functions:**

*   **Starting the Internal Combustion Engine (ICE):** The primary role, requiring high cranking power.
*   **Powering Auxiliary Systems:** Lights, infotainment, climate control, power windows, control electronics, etc., when the ICE is off or when the main traction battery is low.
*   **Buffering Regenerative Braking Energy:** In some HEV architectures, the lead-acid battery can absorb some of the energy generated during regenerative braking before it is transferred to the main traction battery. This can improve charge acceptance and reduce stress on the main battery.
*   **Voltage Stabilization:** Can help stabilize the overall electrical system voltage.
*   **Cold Start Assist:** Provides supplementary power during cold starts when the main battery might be less effective.

**Example Scenario (HEV):**

When a hybrid vehicle comes to a stop, the ICE shuts off. The lead-acid auxiliary battery takes over to power the headlights, radio, and cabin ventilation. When the driver accelerates or the battery needs charging, the ICE starts, drawing power from the lead-acid battery for the initial crank. During braking, regenerative energy is captured, partially absorbed by the lead-acid battery and then transferred to the main lithium-ion or NiMH traction battery.

**From Textbooks:**

*   **Husain (2010):** Focuses on the "12V" system in HEVs and the role of the auxiliary battery, often a lead-acid type, in managing these loads.
*   **Ehsani, Gao, Gay, Emadi (2018):** Provides detailed analysis of HEV architectures and the specific functions of the auxiliary battery, emphasizing its importance for the reliable operation of the entire vehicle, particularly the starting and auxiliary loads. They often refer to the lead-acid battery as the "low-voltage battery" or "auxiliary battery."
*   **Larminie & Lowry (2012):** Explains how the lead-acid battery acts as a bridge between the ICE and the electrical systems, ensuring smooth transitions and operation.

---

### **7. Maintenance and End-of-Life Considerations**

**Key Maintenance Practices:**

*   **For Flooded Lead-Acid:**
    *   **Electrolyte Level Check:** Regularly inspect and top up with distilled water to keep plates submerged.
    *   **Terminal Cleaning:** Keep terminals clean and free from corrosion.
    *   **Ventilation:** Ensure adequate ventilation, especially during charging.
    *   **Avoid Deep Discharges:** Minimize prolonged periods at low states of charge.
*   **For VRLA (AGM/Gel):**
    *   **No Electrolyte Topping:** These are sealed and do not require water.
    *   **Terminal Cleaning:** Essential to ensure good contact.
    *   **Avoid Overcharging:** Can cause irreversible damage and reduce lifespan.
    *   **Temperature Management:** Operate within recommended temperature ranges for optimal life.

**End-of-Life Considerations:**

*   **Capacity Degradation:** Batteries are replaced when their capacity falls below a usable threshold (often around 80% of original capacity).
*   **Internal Short Circuits:** Can occur due to plate degradation, leading to rapid self-discharge or failure.
*   **Sulfation:** Excessive formation of lead sulfate crystals, especially from undercharging or deep discharges, which can become hard and non-reactive.
*   **Recycling:** Lead-acid batteries are among the most recycled products. Recycling processes recover lead, plastic, and sulfuric acid. Proper disposal is crucial to prevent environmental contamination.

**From Textbooks:**

*   **Husain (2010):** Discusses battery health monitoring and the factors contributing to battery degradation.
*   **Ehsani, Gao, Gay, Emadi (2018):** Highlights the importance of a Battery Management System (BMS) for monitoring and controlling charging/discharging cycles, which indirectly extends the life of the auxiliary lead-acid battery. They also touch upon the end-of-life disposal and recycling.
*   **Larminie & Lowry (2012):** Provides a good overview of common failure modes and the importance of proper maintenance for maximizing battery life.

---

### **8. Practice Questions with Answers**

**Question 1:**
What are the primary active materials for the positive and negative electrodes in a lead-acid battery?

**Answer:**
The positive electrode is made of lead dioxide (PbO₂) and the negative electrode is made of spongy lead (Pb).

**Question 2:**
Explain the role of the electrolyte in a lead-acid battery.

**Answer:**
The electrolyte, a dilute sulfuric acid (H₂SO₄) solution, serves as the medium for ion transport between the electrodes during charge and discharge. Sulfuric acid provides sulfate ions (SO₄²⁻) for the electrochemical reactions at both electrodes.

**Question 3:**
What is Peukert's Law, and why is it important for understanding lead-acid battery performance in HEVs?

**Answer:**
Peukert's Law describes how the effective capacity of a lead-acid battery decreases as the discharge rate increases. This is important in HEVs because the auxiliary lead-acid battery might experience high-current draws for engine starting or rapid energy absorption during regenerative braking, meaning its actual available capacity will be less than its rated capacity.

**Question 4:**
List two key advantages and two key disadvantages of using lead-acid batteries as auxiliary batteries in HEVs.

**Answer:**
*   **Advantages:** Cost-effective, high power capability (good for starting).
*   **Disadvantages:** Low energy density (not suitable for traction), limited cycle life (especially with deep discharges).

**Question 5:**
Differentiate between Flooded Lead-Acid (FLA) and Valve-Regulated Lead-Acid (VRLA) batteries in terms of maintenance and application in HEVs.

**Answer:**
*   **FLA:** Requires periodic topping up with distilled water due to electrolyte loss. Used in older HEVs or for less demanding auxiliary roles.
*   **VRLA (AGM/Gel):** Sealed and maintenance-free. Preferred for modern HEVs due to better vibration resistance, lower gassing, and suitability for start-stop operation.

---

### **9. Important Points to Remember**

*   **Auxiliary Role in HEVs:** Lead-acid batteries primarily serve as *auxiliary* batteries in HEVs, not as the main traction power source.
*   **Electrochemical Reactions:** Understand the formation of lead sulfate (PbSO₄) on both electrodes during discharge and its reversal during charging.
*   **Key Performance Metrics:** Capacity (Ah) is rate-dependent (Peukert's Law). Energy density is low; power density is relatively high.
*   **Depth of Discharge (DoD):** Crucial for cycle life; avoid deep discharges for longevity.
*   **VRLA is Preferred:** For modern HEVs, VRLA types (especially AGM) are generally preferred over flooded types for auxiliary functions.
*   **Cost vs. Performance:** Their low cost and high power make them suitable for auxiliary roles, despite limitations in energy density and cycle life.
*   **Recycling:** High recyclability is a significant environmental advantage.

---

### **10. Alignment with Course Outcomes (COs) and Knowledge Levels (K)**

*   **CO1 (General architecture of Electric vehicles):** Understanding the auxiliary battery system of an HEV contributes to understanding its overall architecture (K2).
*   **CO2 (Battery, charging types and battery management):** This entire topic directly addresses battery technologies (Lead-Acid), their types (FLA, VRLA), and indirectly relates to charging characteristics and the need for management systems to optimize their performance and lifespan (K2).
*   **CO3 (Motors and drives):** Not directly covered by this topic.
*   **CO4 (Power transmission and component selection):** Understanding the role and limitations of the lead-acid auxiliary battery informs the selection of appropriate auxiliary power components in HEV design (K3).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
