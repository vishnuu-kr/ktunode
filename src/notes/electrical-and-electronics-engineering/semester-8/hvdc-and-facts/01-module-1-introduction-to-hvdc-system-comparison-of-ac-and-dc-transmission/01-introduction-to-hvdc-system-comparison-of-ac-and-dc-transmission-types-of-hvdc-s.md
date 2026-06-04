---
title: "Introduction to HVDC System: Comparison of AC and DC Transmission - Types of HVDC system - Current Source Converters - Analysis without and with overlap period."
subject: "HVDC AND FACTS"
module: "Module 1: Introduction to HVDC System: Comparison of AC and DC Transmission "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b70"
status: "completed"
scrapedAt: "2026-05-23T16:40:55.009Z"
---
# HVDC AND FACTS: Module 1 - Introduction to HVDC System: Comparison of AC and DC Transmission

## Topic: Introduction to HVDC System: Comparison of AC and DC Transmission, Types of HVDC System, Current Source Converters (CSCs), Analysis without and with Overlap Period

---

### **1. Introduction to HVDC Systems**

**1.1. What is HVDC Transmission?**

High Voltage Direct Current (HVDC) transmission is a method of transmitting electricity using direct current (DC) at high voltage. It involves converting AC power to DC power at the sending end and then converting it back to AC power at the receiving end.

**1.2. Why HVDC? (Comparison with AC Transmission)**

While AC transmission is dominant, HVDC offers significant advantages in specific scenarios, making it a crucial technology in modern power systems.

**Key Advantages of HVDC over AC Transmission:**

*   **Lower Transmission Losses:**
    *   **No Reactive Power Flow:** In DC transmission, there are no reactive power losses (I²X losses) associated with line inductance. This leads to significantly lower energy losses, especially over long distances.
    *   **Reduced Corona Losses:** Corona discharge (ionization of air around conductors) causes energy loss and radio interference. For the same amount of power transmitted, DC conductors can be spaced further apart, reducing corona losses.
    *   **No Skin Effect:** In AC, the current tends to flow on the surface of conductors (skin effect), increasing effective resistance. This is absent in DC.

*   **Increased Power Transfer Capability:**
    *   **Higher Voltage Limits:** For a given insulation level, DC transmission can handle higher voltages than AC transmission.
    *   **No Synchronous Power Limit:** AC transmission is limited by the synchronous power limit (related to the angle between sending and receiving end voltages). HVDC does not have this limitation.

*   **Overcoming Limitations of AC Systems:**
    *   **Long Distance Transmission:** For distances exceeding approximately 600-800 km, HVDC becomes more economical than AC due to lower losses and lower cost of DC lines (fewer conductors).
    *   **Undersea/Underground Cables:** DC cables have significantly lower capacitive charging current compared to AC cables. This allows for longer cable lengths and eliminates the need for intermediate compensation. The dielectric losses are also lower in DC cables.
    *   **Asynchronous Interconnection:** HVDC links can connect two AC systems operating at different frequencies or asynchronously. This is a major advantage for interconnecting independent power grids, enhancing stability and load sharing.
    *   **System Stability Improvement:** HVDC links can be controlled to provide damping and improve the stability of interconnected AC systems. They can rapidly change power flow to mitigate disturbances.
    *   **Reduced Short Circuit Levels:** HVDC stations act as buffers, and their connection to AC systems can help reduce fault current levels in those systems, simplifying switchgear design.
    *   **Lower Right-of-Way (ROW):** For the same power transfer capacity, HVDC requires fewer conductors (typically two, compared to three for AC) and can be operated at higher voltage gradients, potentially reducing the width of the transmission corridor.

**Key Disadvantages of HVDC:**

*   **Complexity and Cost of Converter Stations:** The AC-DC-AC conversion process requires sophisticated and expensive converter stations employing thyristor or IGBT-based switching devices.
*   **Harmonics:** The conversion process generates harmonic currents and voltages, which require filtering in both AC and DC sides, adding to the cost and complexity.
*   **DC Circuit Breakers:** Developing reliable and cost-effective DC circuit breakers for high voltage, high power applications is challenging. This limits the ability to sectionalize DC lines in case of faults.
*   **Limited Voltage Source Converter (VSC) Development (historically):** Initially, most HVDC systems were based on Current Source Converters (CSCs), which had their own limitations. While VSCs are now widely used, CSCs are still relevant.

**Summary of Comparison (AC vs. DC Transmission):**

| Feature                 | AC Transmission                               | HVDC Transmission                                      |
| :---------------------- | :-------------------------------------------- | :----------------------------------------------------- |
| **Losses**              | Higher (reactive power, skin effect)          | Lower (no reactive power, no skin effect)              |
| **Power Transfer**      | Limited by synchronous power limit            | No synchronous power limit, higher capability          |
| **Distance**            | Economical for shorter distances (< 600-800 km) | Economical for long distances (> 600-800 km)           |
| **Cables**              | High charging current, limited length         | Low charging current, longer lengths possible          |
| **Interconnection**     | Synchronous interconnection                   | Asynchronous interconnection                           |
| **Stability**           | Can be an issue                               | Can improve stability                                  |
| **Short Circuit Level** | Increases fault current                       | Can reduce fault current                               |
| **Equipment Cost**      | Lower per MW for transmission itself          | Higher due to converter stations                       |
| **Harmonics**           | Generally less of an issue (fundamental)      | Significant issue, requires filtering                  |
| **Circuit Breakers**    | Readily available                             | Challenging to develop for high voltage/power          |
| **Right-of-Way**        | Typically wider                               | Potentially narrower                                   |

**Reference:**
*   *High Voltage DC Transmission* by K.R.Padiyar (Wiley, 1993) - Chapters on advantages and disadvantages of HVDC.
*   *HVDC and FACTS Controllers* by Vijay K Sood (Springer, 2004) - Chapter 1.

---

### **2. Types of HVDC Systems**

HVDC systems can be broadly classified based on the type of converter technology used.

**2.1. L-Converter (Line-Commutated Converter) based HVDC:**

These are the most common and older type of HVDC systems. They utilize **Line-Commutated Converters (LCCs)**, also known as **Current Source Converters (CSCs)** or **Thyristor-based converters**.

*   **Commutation:** Commutation (transfer of current from one switching device to another) is naturally achieved by the AC system voltage.
*   **Operation:** Requires a reliable AC system with sufficient short-circuit ratio (SCR) for commutation.
*   **Power Factor:** Lagging power factor at the AC terminals, requiring compensation.
*   **Control:** Thyristors are used as switching elements, offering controllable turn-on but requiring natural commutation.
*   **Example:** Most bulk power transmission HVDC links are LCC-based.

**2.2. V-Converter (Voltage-Commutated Converter) based HVDC:**

These systems utilize **Voltage Source Converters (VSCs)**, also known as **IGBT-based converters** or **Force-Commutated Converters**.

*   **Commutation:** Commutation is achieved by actively switching the valves using control signals and auxiliary commutation circuits or by using self-commutating devices like IGBTs.
*   **Operation:** Does not require a strong AC system for commutation. Can be used for weak AC systems or grid connection.
*   **Power Factor:** Can operate at unity or even leading power factor.
*   **Control:** IGBTs or other self-commutating devices are used, allowing for precise control of voltage and current.
*   **Applications:** Primarily used for:
    *   Grid interconnection where AC systems are weak.
    *   Renewable energy integration (wind farms, solar farms).
    *   Back-to-back HVDC links.
    *   Submarine cable transmission.

**Important Distinction:** The term "L-Converter" refers to the line-commutation principle, while "V-Converter" refers to the voltage-commutation principle. Historically, LCC-based systems were also called CSC-based systems, and VSC-based systems were called voltage-sourced converters.

**Reference:**
*   *HVDC and FACTS Controllers* by Vijay K Sood (Springer, 2004) - Chapter 2.
*   *Understanding FACTS* by N.G. Hingorani and L.Gyugyi (IEEE Press, 2000) - Chapters on converter types.

---

### **3. Current Source Converters (CSCs) / L-Converters**

Current Source Converters are the basis of traditional HVDC systems. They are characterized by their ability to deliver or accept a constant DC current from a DC link.

**3.1. Basic Principle of CSC Operation:**

A CSC typically uses thyristors as switching elements. These thyristors are arranged in a modular structure. The DC current is unidirectional, but the voltage can be both positive and negative.

*   **Key Components:**
    *   **Thyristors:** Act as switches that can be turned ON by a gate signal but require external means to turn OFF (commutation).
    *   **Diodes:** Used in anti-parallel connection with thyristors for bidirectional current flow in some configurations, or as free-wheeling diodes.
    *   **Capacitors:** Used for commutation (in naturally commutated converters) or filtering.
    *   **Inductors:** Used on the DC side to smooth current and on the AC side for filtering.

**3.2. Six-Pulse Converter Bridge (Basic Building Block):**

The fundamental building block of an LCC-based HVDC system is the six-pulse converter bridge, which consists of six thyristors (or thyristors and diodes).

*   **Arrangement:** The six thyristors are arranged in a full-bridge configuration.
*   **Operation:** By sequentially firing the thyristors at specific firing angles (α), the AC voltage is effectively converted to a pulsating DC voltage.
*   **DC Output:** The DC output is a pulsating waveform. An AC side harmonic filter is required to remove the 3rd, 5th, 7th, etc., harmonics. A DC side smoothing reactor (inductor) is used to reduce voltage ripple and control current.

**3.3. Twelve-Pulse Converter:**

To reduce harmonics and improve the quality of DC power, two six-pulse bridges are connected in series, with each bridge fed from a different phase-shifted AC source (typically 30 degrees).

*   **Phase Shift:** Achieved by using two sets of transformers: one with a star-star connection and another with a star-delta connection.
*   **Harmonic Reduction:** The combination of phase-shifted outputs cancels out many of the characteristic harmonics (e.g., 11th and 13th order), reducing the required filter capacity.

**3.4. Converter Control:**

The primary control parameter for a CSC is the **firing angle (α)**.

*   **Firing Angle (α):** The delay in firing the thyristor after the AC voltage crosses zero.
*   **Rectifier Operation:** α is typically between 0° and 90°. A smaller α results in higher DC voltage.
*   **Inverter Operation:** α is typically between 90° and 180°. To sustain inversion, the thyristors must be turned off before the AC voltage reverses, requiring a **commutation margin (γ)**. The inverter operates with a control angle or extinction angle (γ) to ensure reliable turn-off.

**Reference:**
*   *HVDC and FACTS Controllers* by Vijay K Sood (Springer, 2004) - Chapter 2.
*   *High Voltage DC Transmission* by K.R.Padiyar (Wiley, 1993) - Chapters on converter circuits.

---

### **4. Analysis of CSCs without and with Overlap Period**

The behavior of CSCs can be analyzed by considering the switching instants of the thyristors and the resulting current and voltage waveforms. A crucial aspect is the **overlap period**.

**4.1. Analysis Without Overlap Period (Idealized Case)**

This simplified analysis assumes that the commutation from one thyristor to the next is instantaneous. This is a theoretical idealization and not practical.

*   **Assumptions:**
    *   Instantaneous commutation.
    *   No AC source impedance (reactance).
    *   No DC side smoothing reactor.
    *   No valve voltage drops.

*   **DC Voltage:** The DC output voltage waveform is a series of pulses of the AC phase-to-phase voltages.
*   **Harmonics:** This ideal case would still produce significant harmonics.

**This simplified analysis is generally not used for practical design but helps in understanding the basic conversion process.**

**4.2. Analysis With Overlap Period (Practical Case)**

In a practical CSC, the AC source has inductance (reactance), which plays a crucial role in the commutation process. The overlap period is the time during which two or more thyristors conduct simultaneously.

*   **Commutation Process:** When a thyristor is fired, it takes over the current from the previously conducting thyristor. However, due to the AC source inductance (X_L), the current cannot switch instantaneously. Instead, the current freewheels through the inductive path, causing the current to transfer gradually.
*   **Overlap Angle (u):** This is the angle (in electrical degrees) during which commutation occurs. It depends on the AC source reactance (X_L) and the DC current (I_d).
*   **Effect of Overlap:**
    *   **Reduced DC Voltage:** The overlap period effectively "chokes off" the DC voltage for a portion of the cycle, leading to a reduction in the average DC voltage compared to the idealized case.
    *   **Harmonic Reduction:** While overlap introduces its own harmonics, it also helps to smooth the DC output and reduces certain characteristic harmonics.

**Mathematical Derivation (Simplified for a 6-pulse bridge):**

Consider the commutation from thyristor T1 to T2. When T2 is fired, T1 is still conducting (due to X_L), and T2 starts conducting. The voltage across the commutating inductance causes the current to shift from T1 to T2.

*   **During Overlap (u):** The AC line voltage connected to the conducting valves is involved in charging the inductance, leading to a reduction in the effective DC voltage.
*   **DC Voltage Equation (with overlap):** The average DC voltage of a 6-pulse rectifier with overlap angle 'u' is given by:

    $V_{d} = \frac{3 V_{ml}}{\pi} \cos(\alpha) - \frac{3 X_c}{\pi} I_d$

    where:
    *   $V_{ml}$ is the peak phase-to-neutral AC voltage.
    *   $X_c$ is the commutating reactance per phase of the AC source.
    *   $I_d$ is the DC current.

    The term $\frac{3 X_c}{\pi} I_d$ represents the voltage drop due to commutation.

*   **Inverter Operation:** For an inverter, the firing angle $\alpha$ is greater than 90°. For reliable commutation, the firing must occur sufficiently late to allow enough time for the current to transfer before the AC voltage reverses. This is related to the **extinction angle (γ)**.
    *   $V_d = \frac{3 V_{ml}}{\pi} \cos(\alpha) - \frac{3 X_c}{\pi} I_d$ (Rectifier)
    *   $V_d = \frac{3 V_{ml}}{\pi} \cos(\alpha) - \frac{3 X_c}{\pi} I_d$ (Inverter, where $\alpha$ is typically $>90^\circ$)
    *   More accurately for inverter, the average DC voltage is expressed in terms of $\gamma$:
        $V_{d} = \frac{3 V_{ml}}{\pi} \cos(\gamma + \beta) - \frac{3 X_c}{\pi} I_d$
        where $\beta$ is the angle of commutation. In rectifier operation, $\alpha = \beta$. In inverter operation, the control is often on $\gamma$.

**Important Note on Control Angles:**

*   **Rectifier:** Controlled by firing angle $\alpha$ (0° to 90°).
*   **Inverter:** Controlled by extinction angle $\gamma$ (15° to 25° typically). The firing angle $\alpha$ is then $\alpha = 180^\circ - \gamma - \text{overlap angle}$.

**Reference:**
*   *HVDC and FACTS Controllers* by Vijay K Sood (Springer, 2004) - Chapter 2.
*   *High Voltage DC Transmission* by K.R.Padiyar (Wiley, 1993) - Chapters on converter analysis.

---

### **5. Learning Outcomes Addressed**

*   **CO1: Analyse current source and voltage source converters for HVDC systems (Knowledge Level: K4)**
    *   This module provides the foundation for CSCs, including their basic operation, components, and the impact of overlap. The comparison with AC also sets the stage for understanding the need for converter technology. (VSC analysis will be in subsequent modules).
*   **CO2: Describe the control schemes for HVDC systems (Knowledge Level: K2)**
    *   Introduction to the concept of firing angle ($\alpha$) for CSCs as a control parameter. The role of extinction angle ($\gamma$) for inverters is also touched upon.
*   **CO3: Explain the need for FACTS devices (Knowledge Level: K2)**
    *   The comparison of AC and DC transmission implicitly highlights the limitations of AC systems (reactive power, stability, distance) that FACTS devices aim to address by improving AC system performance.
*   **CO4: Classify reactive power compensators in power system (Knowledge Level: K2)**
    *   While not directly covered, the discussion on AC vs. DC highlights that AC systems inherently involve reactive power, and the need for compensation (which FACTS devices provide) is implied. The lagging power factor of LCCs necessitates reactive power compensation.
*   **CO5: Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)**
    *   Not directly covered in this introductory module.
*   **CO6: Explain the dynamic interconnection mechanisms of FACTS devices (Knowledge Level: K2)**
    *   Not directly covered in this introductory module.

---

### **6. Important Points to Remember**

*   HVDC is advantageous for **long distances**, **undersea/underground cables**, and **asynchronous interconnections**.
*   **No reactive power flow** is a key benefit of DC transmission, reducing losses.
*   LCC-based HVDC uses **thyristors** and relies on **line commutation**.
*   VSC-based HVDC uses **IGBTs** and relies on **voltage commutation**.
*   The **overlap period** in CSCs is due to AC source inductance and causes a reduction in DC voltage.
*   The **firing angle ($\alpha$)** is the primary control parameter for CSC rectifiers, while the **extinction angle ($\gamma$)** is key for inverters.
*   Harmonics are a major concern in HVDC, requiring **filters** and **multi-pulse converters** (like 12-pulse).
*   DC circuit breakers are a significant challenge for HVDC systems.

---

### **7. Practice Questions & Exercises**

**Question 1:**
List and briefly explain three main advantages of HVDC transmission over AC transmission for long-distance power transfer.

**Answer:**
1.  **Lower Transmission Losses:** Absence of reactive power flow and skin effect reduces I²R and I²X losses.
2.  **Higher Power Transfer Capability:** Can transmit more power for a given conductor size and voltage rating due to no synchronous power limit.
3.  **Asynchronous Interconnection:** Ability to connect AC systems with different frequencies or operating without synchronization.

**Question 2:**
What is the primary difference in commutation mechanism between LCC-based HVDC and VSC-based HVDC?

**Answer:**
LCC-based HVDC uses **line commutation**, where the AC system voltage naturally commutates the current from one thyristor to another. VSC-based HVDC uses **voltage commutation** (or forced commutation) facilitated by self-commutating devices like IGBTs or active switching circuits.

**Question 3:**
Explain the concept of "overlap angle" (u) in a Current Source Converter. What factors influence its value, and what is its effect on the DC output voltage?

**Answer:**
The overlap angle (u) is the period during which two thyristors conduct simultaneously in a CSC due to the inductance of the AC source. It occurs during the commutation process. The overlap angle is influenced by the AC source reactance ($X_c$) and the DC current ($I_d$). Its effect is to reduce the average DC output voltage compared to an ideal converter without overlap.

**Question 4:**
A 12-pulse HVDC converter uses two 6-pulse bridges. What is the primary advantage of using a 12-pulse converter over a single 6-pulse converter?

**Answer:**
The primary advantage of a 12-pulse converter is the **reduction of characteristic harmonics**. By using two 6-pulse bridges fed from AC sources phase-shifted by 30 degrees, the 5th and 7th harmonics (from one bridge) and the 11th and 13th harmonics (from the other bridge) combine in a way that cancels out or significantly reduces the overall harmonic content on the AC and DC sides, thus reducing the size and cost of harmonic filters.

**Question 5:**
For a DC transmission system, discuss the challenges associated with DC circuit breakers.

**Answer:**
Developing reliable DC circuit breakers for high voltage and high power is challenging because:
*   **No natural zero crossings:** Unlike AC, DC current is constant and does not naturally pass through zero, which is required for thyristor turn-off.
*   **High di/dt and dv/dt:** Rapid switching can lead to high rates of change of current and voltage, stressing the breaker components.
*   **Arc Extinction:** Extinguishing the DC arc is more difficult than in AC systems. Special techniques like forced current zero or using series capacitors are often required.
*   **Stored Energy:** Inductors in the DC circuit store energy that must be dissipated during interruption.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
