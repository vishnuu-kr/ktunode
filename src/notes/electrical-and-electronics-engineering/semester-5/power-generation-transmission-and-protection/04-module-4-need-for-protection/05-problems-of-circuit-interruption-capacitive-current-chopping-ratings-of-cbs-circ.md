---
title: "Problems of circuit interruption – capacitive current chopping – ratings of CBs Circuit breaker classification based on medium of arc extinction – SF6 & VCB Introduction to GIS"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 4: Need for protection"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36195"
status: "completed"
scrapedAt: "2026-05-23T16:23:37.305Z"
---
# Module 4: Need for Protection - Problems of Circuit Interruption, Capacitive Current Chopping, Ratings of CBs, Classification of CBs, SF6 & VCB, Introduction to GIS

## 1. Problems of Circuit Interruption

When a circuit breaker (CB) operates to interrupt a fault current, a significant challenge arises in extinguishing the arc that forms between the opening contacts. This arc is a plasma column that continues to conduct current. The difficulty in interrupting the circuit depends on several factors related to the circuit itself and the design of the CB.

### 1.1. Arc Extinction Challenges

*   **Re-striking Voltage (RV):** When the CB contacts separate, the circuit impedance tends to drive a recovery voltage across the opening contacts. This voltage can cause the arc to re-ignite or "re-strike."
    *   **Definition:** The voltage that appears across the breaker contacts immediately after the current has been interrupted.
    *   **Factors Influencing RV:**
        *   Inductance (L) and capacitance (C) of the circuit.
        *   Rate of rise of Restriking Voltage (RRRV).
        *   Current being interrupted.
        *   Characteristics of the arc.
    *   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers).

*   **Recovery Voltage (RV'):** This is the normal system voltage that appears across the breaker contacts after the transient restriking voltage has died down. The CB must be able to withstand this voltage without re-striking.
    *   **Definition:** The steady-state voltage across the breaker contacts after the arc has been extinguished and transient oscillations have subsided.

*   **Re-illumination:** Even after the arc is seemingly extinguished, a faint glow of ionized particles may persist between the contacts. If the restriking voltage is high enough, these particles can become conductive, leading to a re-establishment of the arc.

### 1.2. Current Chopping

This phenomenon occurs when a circuit breaker interrupts a very small inductive current, such as the magnetizing current of a transformer or a long unloaded transmission line. In such cases, the arc might be extinguished prematurely by the CB before the current naturally passes through a zero.

*   **Definition:** The phenomenon where a circuit breaker extinguishes a current at a point other than the natural current zero, typically for very low inductive currents.
*   **Mechanism:**
    1.  The CB contacts separate, and an arc forms.
    2.  The arc is being extinguished by the cooling medium.
    3.  The inductive circuit attempts to maintain current flow.
    4.  If the CB's arc extinction capability is very high (e.g., in air-blast breakers with rapid arc cooling), the arc can be quenched at a point where the current is not zero.
    5.  The interruption of inductive current causes a sudden change in magnetic flux, inducing a very high voltage across the breaker contacts according to Faraday's law ($V = -L \frac{di}{dt}$).
*   **Consequences:** This high induced voltage can be several times the normal system voltage, leading to severe overvoltages and potential damage to connected equipment.
*   **Mitigation:**
    *   **Capacitive circuits:** Often connected in parallel with the inductive load to "take over" the current when the CB contacts open, thus smoothing the current interruption and preventing chopping. (This is more relevant to capacitive current switching).
    *   **Non-linear resistors:** Employed across the CB contacts to limit the voltage rise during chopping.
    *   **Specific CB designs:** Some CBs are designed to avoid current chopping for low inductive currents.
*   **Reference:** Mehta, V. K. & Mehta, R., *Principles of Power System*, Chapter 10 (Circuit Breakers).

### 1.3. Capacitive Current Switching

This refers to the interruption of currents flowing through long unloaded transmission lines or the charging current of cables. These currents are capacitive in nature and are relatively small.

*   **Problem:** When a CB interrupts a capacitive current, it can lead to voltage escalation due to current chopping. The CB contacts may separate at a point where the capacitive current is small. If the CB has a high dielectric strength recovery rate, it can extinguish the arc before the current naturally reaches zero. The subsequent rapid change in current ($di/dt$) across the line's inductance ($L$) causes a transient overvoltage ($V = L \frac{di}{dt}$). This overvoltage can then cause the line capacitance to recharge, leading to re-strikes. If this process repeats, the voltage across the CB can rise to dangerous levels, potentially exceeding the insulation strength of the system.
*   **Example:** Imagine switching off a long, unloaded overhead line. The line acts as a capacitor. When the breaker opens, it tries to interrupt the charging current. If it chops this small current, a high voltage can appear. This voltage can cause the breaker to re-strike. The re-strike will occur at a different point on the voltage wave, and if the breaker again chops the current, the cumulative effect of these switching surges can lead to very high voltages.
*   **Mitigation:**
    *   **Pre-insertion resistors:** Resistors are inserted in series with the CB contacts before the main contacts close, and in parallel with the main contacts before they open. When opening, these resistors are engaged to provide a path for the capacitive current, thereby reducing the rate of change of current and preventing chopping.
    *   **Synchronous closing:** For switching on, the breaker is closed when the voltage is zero to avoid surges.
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers).

## 2. Ratings of Circuit Breakers (CBs)

Circuit breakers are rated based on their ability to interrupt fault currents and their capacity to withstand system voltages.

### 2.1. Breaking Capacity (kA)

*   **Definition:** The maximum fault current that a circuit breaker is capable of interrupting under specified conditions without sustaining damage. It is usually expressed in kiloamperes (kA).
*   **Types of Breaking Capacity:**
    *   **Symmetrical Breaking Current:** The RMS value of the AC component of the fault current at the instant of contact separation.
    *   **Asymmetrical Breaking Current:** Includes the DC component of the fault current, which is present during the initial stages of a fault due to stored energy in inductance.
*   **Importance:** Ensures that the CB can safely interrupt the largest possible fault current that can occur in the system where it is installed.

### 2.2. Making Capacity (kA)

*   **Definition:** The maximum fault current that a circuit breaker is capable of carrying momentarily without damage when closing in on a fault. It is usually higher than the breaking capacity due to the presence of the DC offset.
*   **Importance:** Ensures the CB can withstand the mechanical and thermal stresses when closing into a short circuit.

### 2.3. Short-Time Current Rating (kA for x seconds)

*   **Definition:** The current that a circuit breaker can carry for a specified short duration (e.g., 1 second or 3 seconds) without damage. This is important for the CB to withstand fault currents during the operation of protective relays and other circuit breakers in the system to isolate the fault.
*   **Importance:** Allows the system to clear faults without tripping all upstream breakers.

### 2.4. Rated Service Voltage (kV)

*   **Definition:** The maximum voltage at which the circuit breaker is designed to operate.

### 2.5. Rated Frequency (Hz)

*   **Definition:** The frequency of the power system in which the circuit breaker is intended to operate (typically 50 Hz or 60 Hz).

### 2.6. Rated Breaking Current at Rated Service Voltage

*   **Definition:** This is the primary rating, combining the voltage and current interruption capabilities. It signifies the maximum fault current (RMS symmetrical) the CB can interrupt at its rated voltage.
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers).

## 3. Circuit Breaker Classification Based on Medium of Arc Extinction

The primary function of a circuit breaker is to extinguish the electric arc that forms between its contacts when they open under load. The medium used to quench this arc is a key factor in its classification and performance.

### 3.1. Oil Circuit Breakers (OCBs)

*   **Princ:** The contacts separate in a tank filled with insulating oil. The oil, when subjected to the heat of the arc, vaporizes and produces gas bubbles that surround the arc, cooling it and increasing its resistance.
*   **Types:** Bulk Oil CB, Minimum Oil CB.
*   **Advantages:** Good dielectric strength, effective arc quenching.
*   **Disadvantages:** Fire hazard due to oil, maintenance intensive (oil contamination), explosive gases produced.
*   **Current Status:** Largely replaced by SF6 and Vacuum circuit breakers for modern applications.
*   **Reference:** Mehta, V. K. & Mehta, R., *Principles of Power System*, Chapter 10 (Circuit Breakers).

### 3.2. Air Circuit Breakers (ACBs)

*   **Princ:** The arc is extinguished in atmospheric air. Various methods are used to cool and lengthen the arc, such as using arc chutes with insulating baffles or magnetic blow-out coils.
*   **Types:** Non-vented, Vented, Magnetic Blow-out.
*   **Advantages:** Simple construction, low cost for low voltage applications.
*   **Disadvantages:** Arc quenching less efficient for high voltages and currents, large size, noise during operation.
*   **Current Status:** Primarily used in low-voltage applications (e.g., distribution boards, industrial switchgear).
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers).

### 3.3. Air Blast Circuit Breakers (ABCBs)

*   **Princ:** A high-pressure jet of air is directed across the arc at the instant of contact separation. This rapidly cools the arc and blows it away from the contacts, thus extinguishing it.
*   **Advantages:** Rapid arc extinction, suitable for high voltage and high current applications, good for frequent switching operations.
*   **Disadvantages:** Requires a high-pressure air system (compressors, storage tanks), noisy operation, susceptible to moisture in the air.
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers).

### 3.4. SF6 Circuit Breakers (Sulfur Hexafluoride)

*   **Princ:** Sulfur hexafluoride (SF6) gas is used as the arc quenching medium. SF6 has excellent dielectric strength and arc extinguishing properties. When subjected to the arc, it decomposes into less electronegative species, which then absorb energy from the arc, cooling and de-ionizing it.
*   **Mechanism of Arc Quenching:**
    1.  **Cooling:** SF6 gas has a high thermal conductivity, effectively drawing heat from the arc column.
    2.  **De-ionization:** SF6 molecules are electronegative and readily capture free electrons from the arc plasma, forming heavier negative ions. These heavier ions move slower and have a lower mobility, increasing the resistance of the arc column.
    3.  **Recombination:** The de-ionizing agents promote the recombination of free electrons and ions.
*   **Advantages:**
    *   Excellent dielectric strength (about 2.5 times that of air).
    *   Highly effective arc quenching, leading to rapid current interruption.
    *   Non-flammable and non-toxic.
    *   Compact design compared to other types for the same voltage/current rating.
    *   Low maintenance.
    *   Minimal noise and environmental impact (when properly contained).
*   **Disadvantages:**
    *   SF6 gas is expensive.
    *   Potential environmental concerns if released (potent greenhouse gas).
    *   Requires careful handling and sealing to prevent leakage.
    *   Decomposition products can be corrosive if moisture is present.
*   **Types:** Single break, double break, puffer type.
*   **Applications:** Widely used in medium and high voltage switchgear (up to ultra-high voltages).
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers), and Mehta, V. K. & Mehta, R., *Principles of Power System*, Chapter 10 (Circuit Breakers).

### 3.5. Vacuum Circuit Breakers (VCBs)

*   **Princ:** The arc is extinguished in a vacuum. The space between the contacts is evacuated to a very high vacuum. When the contacts separate, the arc is formed in a plasma of metal vapor from the vaporized contact material.
*   **Mechanism of Arc Quenching:**
    1.  **High Dielectric Strength:** Vacuum offers the highest known dielectric strength.
    2.  **Rapid De-ionization:** The charge carriers (electrons and ions) in the arc plasma diffuse rapidly across the vacuum gap, leading to very quick de-ionization and arc extinction.
    3.  **Minimal Arc Energy:** The arc energy is much lower, and the rate of recovery of dielectric strength is very high.
*   **Advantages:**
    *   Excellent arc extinguishing capability.
    *   High dielectric strength.
    *   Long service life and high reliability.
    *   Low maintenance.
    *   Environmentally friendly (no harmful gases).
    *   Compact and lightweight.
    *   No fire hazard.
*   **Disadvantages:**
    *   More expensive than some other types, especially for higher voltages.
    *   Can be susceptible to electrical breakdown at very high switching frequencies if not designed properly.
    *   Contact material selection is critical for arc extinction and contact life.
*   **Applications:** Predominantly used in medium voltage switchgear (e.g., 11kV, 33kV) for industrial and utility applications. Their use in higher voltages is growing with advancements in technology.
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 18 (Circuit Breakers), and Mehta, V. K. & Mehta, R., *Principles of Power System*, Chapter 10 (Circuit Breakers).

## 4. Introduction to GIS (Gas Insulated Switchgear)

### 4.1. What is GIS?

Gas Insulated Switchgear (GIS) is a compact, enclosed electrical substation in which all the live parts are enclosed within earthed metallic enclosures filled with an insulating gas, most commonly SF6. It integrates circuit breakers, disconnectors, earthing switches, busbars, and current/voltage transformers within sealed compartments.

### 4.2. Components of GIS

*   **Enclosures:** Earthed metallic enclosures (usually aluminum or steel) that house the live parts.
*   **Insulating Gas:** SF6 gas, known for its excellent dielectric properties and arc quenching ability, is used as the primary insulating medium.
*   **Conducting Parts:** Busbars, circuit breakers, disconnectors, etc., made of highly conductive materials.
*   **Insulators:** Supporting insulators made of epoxy resin or similar materials to keep the conducting parts insulated from the enclosures.

### 4.3. Advantages of GIS

*   **Compactness:** Significantly smaller footprint compared to conventional air-insulated switchgear (AIS). This is a major advantage in urban areas or locations with limited space.
*   **High Reliability:** The sealed environment protects components from external environmental factors like moisture, dust, pollution, and salt spray, leading to higher reliability and reduced maintenance.
*   **Enhanced Safety:** All live parts are enclosed, reducing the risk of accidental contact and electrical hazards.
*   **Improved Electrical Performance:** Higher dielectric strength of SF6 allows for higher voltage gradients, leading to reduced clearances and more compact designs.
*   **Reduced Maintenance:** Minimal maintenance required due to the protected environment.
*   **Environmental Resistance:** Immune to atmospheric pollution and weather conditions.
*   **Lower Noise Levels:** Compared to some air-insulated switchgear.
*   **Reference:** Badri Ram and D.N. Viswakarma, *Power System Protection and Switchgear*, Chapter 19 (Gas Insulated Switchgear).

### 4.4. Disadvantages of GIS

*   **Higher Initial Cost:** Generally more expensive than conventional AIS.
*   **Maintenance Complexity:** While maintenance is infrequent, it requires specialized knowledge and equipment for gas handling and leak detection.
*   **Fault Location:** Locating a fault within a GIS can be more challenging than in AIS.
*   **SF6 Handling:** Requires careful management due to its cost and environmental impact.

### 4.5. Applications of GIS

*   Indoor substations in urban areas.
*   High-voltage applications where space is limited.
*   Substations in harsh environmental conditions (e.g., coastal areas, industrial zones).
*   Underground substations.
*   Offshore platforms.
*   **Reference:** Wadhwa, C. L., *Electrical Power Systems*, Chapter 19 (Switchgear and Protection).

## 5. Alignment with Course Outcomes (COs)

*   **CO1: Learn different types of power generating systems and schedule generation appropriate for a given area. (Knowledge Level: K3)**
    *   While this module focuses on protection, understanding the need for protection (faults, interruptions) is crucial for reliable power generation and scheduling. The types of circuit breakers discussed are part of the infrastructure that ensures reliable power delivery, which is a prerequisite for generation scheduling. (Indirectly addressed)

*   **CO2: Evaluate the electrical performance of any transmission line. (Knowledge Level: K3)**
    *   Understanding capacitive current switching is directly related to the performance of transmission lines, especially long ones. The problems associated with interrupting capacitive currents directly impact the voltage profiles and switching transients on transmission lines. (Directly addressed)

*   **CO3: Compute various physical characteristics of overhead and underground transmission systems. (Knowledge Level: K3)**
    *   The discussion on capacitive current switching directly relates to the capacitance of transmission lines (both overhead and underground cables). The rating of CBs is also critical for the design and operation of transmission systems. (Directly addressed)

*   **CO4: Demonstrate the working of relays and switch gear for protection schemes. (Knowledge Level: K2)**
    *   This module introduces circuit breakers, which are the primary switchgear used in protection schemes. Understanding the problems of circuit interruption and the capabilities of different CB types (SF6, VCB) is fundamental to demonstrating how switchgear operates to protect the system. (Directly addressed)

*   **CO5: Design a simple AC electrical distribution system as per the standards. (Knowledge Level: K3)**
    *   The selection of appropriate circuit breakers and their ratings (breaking capacity, service voltage) is a critical aspect of designing any electrical distribution system. The understanding of CB classification and technologies (SF6, VCB) helps in making informed design choices for reliability and safety. (Directly addressed)

## 6. Important Points to Remember

*   **Circuit interruption is challenging** due to arc formation, re-striking voltage, and current chopping.
*   **Current chopping** is a problem mainly with interrupting **low inductive currents**, leading to high overvoltages.
*   **Capacitive current switching** is a problem mainly with interrupting **charging currents of lines/cables**, leading to potential re-strikes and voltage escalation.
*   **SF6 and Vacuum CBs** are the dominant technologies for medium to high voltage applications due to their excellent arc quenching and dielectric properties.
*   **SF6** offers superior dielectric strength and arc quenching but is expensive and has environmental concerns if leaked.
*   **Vacuum** offers a clean, environmentally friendly, and reliable solution, especially for medium voltage.
*   **GIS** offers significant space savings, improved reliability, and enhanced safety by enclosing all live parts in SF6 gas within metallic enclosures.
*   CB ratings (breaking capacity, service voltage) are crucial for selecting the correct breaker for a given system.

## 7. Practice Questions and Answers

**Question 1:** Explain the phenomenon of current chopping in circuit breakers and its consequences. How can it be mitigated?

**Answer:**
Current chopping occurs when a circuit breaker interrupts a low inductive current at a point other than natural current zero. This happens due to the rapid cooling and de-ionization of the arc by the quenching medium. The sudden interruption of inductive current causes a high rate of change of current ($di/dt$). According to Faraday's law ($V = -L \frac{di}{dt}$), this induces a large transient overvoltage across the breaker contacts.
**Consequences:** These overvoltages can be several times the normal system voltage, potentially damaging connected equipment like transformers and causing insulation failure.
**Mitigation:**
*   Using non-linear resistors in parallel with the breaker contacts to limit the voltage rise.
*   Employing CB designs that are less prone to chopping low inductive currents.
*   In some cases, parallel capacitor banks can help manage these transients.

**Question 2:** Differentiate between restriking voltage and recovery voltage.

**Answer:**
*   **Restriking Voltage (RV):** The transient voltage that appears across the breaker contacts immediately after the current has been interrupted, oscillating due to the circuit's inductance and capacitance. Its rate of rise is known as RRRV.
*   **Recovery Voltage (RV'):** The steady-state voltage that appears across the breaker contacts after the transient restriking voltage has subsided and the system has settled to its normal operating voltage. The breaker must be able to withstand this voltage without re-striking.

**Question 3:** What are the main advantages of using SF6 gas as an arc quenching medium in circuit breakers?

**Answer:**
The main advantages of SF6 gas are:
1.  **High Dielectric Strength:** About 2.5 times that of air at the same pressure, allowing for compact designs.
2.  **Excellent Arc Quenching Ability:** It is an electronegative gas that efficiently cools and de-ionizes the arc plasma.
3.  **Non-Flammable and Non-toxic:** Safe to handle and use.
4.  **Low Maintenance:** Due to its stability and effectiveness.
5.  **Environmentally Friendly (when contained):** Does not produce harmful decomposition products unless there is moisture.

**Question 4:** Briefly describe the working principle of a Vacuum Circuit Breaker (VCB).

**Answer:**
In a VCB, the arc is extinguished in a vacuum. When the contacts separate under load, an arc is formed. This arc consists of metal vapor from the contacts. The high vacuum environment allows for very rapid diffusion of charge carriers (ions and electrons) away from the arc column. This rapid diffusion leads to quick de-ionization and extinguishes the arc. The vacuum itself provides a very high dielectric strength, preventing re-ignition.

**Question 5:** What is GIS and what are its primary benefits over conventional Air Insulated Switchgear (AIS)?

**Answer:**
GIS (Gas Insulated Switchgear) is a type of electrical substation where all live parts are enclosed within earthed metallic enclosures filled with SF6 gas.
**Primary Benefits over AIS:**
1.  **Compactness:** Significantly smaller footprint, ideal for space-constrained urban areas.
2.  **High Reliability:** Protected from environmental factors like pollution, moisture, and dust.
3.  **Enhanced Safety:** Enclosed live parts reduce the risk of accidental contact.
4.  **Reduced Maintenance:** Less susceptible to environmental degradation.
5.  **Improved Electrical Performance:** Higher dielectric strength of SF6 allows for closer clearances.

**Question 6:** A long unloaded transmission line is being switched off by a circuit breaker. What is the potential problem, and how is it typically managed?

**Answer:**
The potential problem is **capacitive current switching**. The long unloaded transmission line acts like a capacitor. When the circuit breaker opens, it interrupts the charging current. If the breaker chops this small capacitive current, it can lead to a very high transient overvoltage due to the inductance of the line ($V = L \frac{di}{dt}$). This overvoltage can cause re-strikes.
**Management:** This is typically managed by using **pre-insertion resistors** in series with the circuit breaker. These resistors are engaged before the main contacts part, providing a path for the capacitive current and reducing the rate of change of current, thereby preventing chopping and subsequent overvoltages.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
