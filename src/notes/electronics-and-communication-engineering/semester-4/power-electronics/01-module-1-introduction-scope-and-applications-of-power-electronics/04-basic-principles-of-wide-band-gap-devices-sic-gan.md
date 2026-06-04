---
title: "Basic principles of wide band gap devices – SiC & GaN."
subject: "POWER ELECTRONICS"
module: "Module 1: Introduction:  Scope and applications of Power Electronics"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5f5"
status: "completed"
scrapedAt: "2026-05-23T17:52:07.767Z"
---
# Power Electronics: Module 1 - Introduction: Scope and Applications

## Topic: Basic Principles of Wide Bandgap Devices - SiC & GaN

This topic introduces you to the fundamental principles behind Wide Bandgap (WBG) semiconductor devices, specifically Silicon Carbide (SiC) and Gallium Nitride (GaN). We will explore why these materials are gaining prominence in power electronics and their key advantages over traditional Silicon (Si) devices.

---

### **1. Introduction to Wide Bandgap (WBG) Semiconductors**

**Key Concept:** A semiconductor's "bandgap" is the energy difference between the valence band and the conduction band. A larger bandgap generally leads to materials that can withstand higher voltages and temperatures and operate at higher frequencies.

*   **Traditional Semiconductors:** Silicon (Si) has been the workhorse of the semiconductor industry due to its abundance, mature processing technology, and good electrical properties. However, it has limitations.
*   **WBG Semiconductors:** Materials like Silicon Carbide (SiC) and Gallium Nitride (GaN) possess significantly larger bandgaps compared to Silicon.

**1.1 Why WBG Devices? The Need for Advancement**

*   **Limitations of Silicon:**
    *   **Voltage Breakdown:** Si devices have a lower critical electric field, limiting their ability to handle high voltages without significant on-resistance and power loss.
    *   **Switching Frequency:** The switching speed of Si devices is often limited by switching losses, especially at higher voltages.
    *   **Operating Temperature:** Si devices have a lower maximum operating temperature, requiring bulky thermal management systems.
*   **WBG Advantages:**
    *   **Higher Breakdown Voltage:** Larger bandgap allows for thinner drift regions, leading to lower on-resistance for a given voltage rating.
    *   **Higher Switching Frequency:** Lower switching losses enable operation at much higher frequencies, allowing for smaller and lighter passive components (inductors, capacitors).
    *   **Higher Operating Temperature:** Increased thermal conductivity and higher intrinsic carrier concentration allow for operation at elevated temperatures, reducing the need for extensive cooling.
    *   **Lower Conduction Losses:** Reduced on-resistance leads to less power dissipation during conduction.
    *   **Lower Switching Losses:** Faster switching speeds and reduced parasitic capacitances result in lower energy loss during switching transitions.

**References:**
*   *Power Electronics Essentials & Applications* by L Umanand (Chapter on Power Semiconductor Devices)
*   *Power Electronics Circuits, Devices, and Applications* by Muhammad H Rashid (Chapter on Power Semiconductor Devices)

---

### **2. Silicon Carbide (SiC) Devices**

**Key Concept:** SiC is a compound semiconductor with a bandgap of approximately 3.2 eV (for the 4H-SiC polytype), compared to Si's 1.1 eV. This larger bandgap offers significant advantages.

**2.1 Properties of SiC**

| Property                     | Silicon (Si)         | Silicon Carbide (SiC) (4H-SiC) |
| :--------------------------- | :------------------- | :----------------------------- |
| Bandgap (eV)                 | 1.1                  | 3.2                            |
| Critical Electric Field (MV/cm) | 0.3                  | 2.5 - 3.0                      |
| Electron Mobility (cm²/V·s)  | ~1400                | ~900-1000                      |
| Thermal Conductivity (W/cm·K) | ~1.5                 | ~4.9                           |
| Intrinsic Carrier Conc.      | High                 | Low                            |
| Dielectric Constant          | Moderate             | Higher                         |

**2.2 Advantages of SiC**

*   **Higher Voltage Capability:** Due to its significantly higher critical electric field, SiC devices can block much higher voltages with thinner drift layers, leading to lower on-resistance.
*   **Lower On-Resistance:** For the same voltage rating, SiC devices can achieve significantly lower specific on-resistance (R_on * Area), reducing conduction losses.
*   **Higher Temperature Operation:** SiC's excellent thermal conductivity and wider bandgap allow for higher junction temperatures, simplifying thermal management.
*   **Faster Switching:** SiC MOSFETs exhibit lower parasitic capacitances, enabling faster switching speeds and reduced switching losses.

**2.3 Common SiC Power Devices**

*   **SiC Schottky Barrier Diodes (SBDs):**
    *   **Principle:** These are rectifying diodes formed by a metal-semiconductor junction, rather than a p-n junction. The metal contact has a work function that creates a Schottky barrier with the n-type SiC semiconductor.
    *   **Advantages:** Very fast switching speed (no minority carrier reverse recovery), low forward voltage drop (compared to Si PiN diodes for the same voltage rating), and high-temperature capability.
    *   **Application:** High-frequency power supplies, boost converters, PFC circuits.
*   **SiC MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors):**
    *   **Principle:** Similar to Si MOSFETs, a gate voltage controls the conductivity of a channel. However, SiC MOSFETs are designed to handle much higher voltages and currents.
    *   **Advantages:** Low on-resistance, fast switching, high temperature operation, high voltage blocking capability.
    *   **Application:** Electric vehicles (EVs), solar inverters, industrial motor drives, power supplies.
*   **SiC JFETs (Junction Field-Effect Transistors):**
    *   **Principle:** The gate voltage modulates the width of a depletion region in a p-n junction, controlling the current flow in a channel.
    *   **Advantages:** Normally-off operation is easier to achieve than with SiC MOSFETs, potentially lower on-resistance for certain voltage classes, high temperature capability.
    *   **Application:** High-voltage DC-DC converters, motor drives.

**Examples:**
*   A 1200V SiC MOSFET can have an on-resistance comparable to a much lower voltage-rated Si IGBT, enabling smaller and more efficient converters.
*   SiC SBDs in a PFC circuit significantly reduce switching losses compared to Si PiN diodes, leading to higher efficiency.

**References:**
*   *SiC and GaN Wide Bandgap Device Technology Overview* by Milligan et al. (Provides detailed device characteristics).
*   *Power Electronics Principles and Applications* by Joseph Vithayathil (Discusses diode and transistor principles).

---

### **3. Gallium Nitride (GaN) Devices**

**Key Concept:** GaN is another WBG semiconductor material known for its very high electron mobility and breakdown electric field, especially in its heterostructures.

**3.1 Properties of GaN**

| Property                     | Silicon (Si)         | Gallium Nitride (GaN) (AlGaN/GaN HEMT) |
| :--------------------------- | :------------------- | :------------------------------------- |
| Bandgap (eV)                 | 1.1                  | ~3.4 (GaN)                             |
| Critical Electric Field (MV/cm) | 0.3                  | ~3.3 - 3.5                             |
| Electron Mobility (cm²/V·s)  | ~1400                | ~1500-2500+ (in 2DEG)                  |
| Thermal Conductivity (W/cm·K) | ~1.5                 | ~1.3 (on Si/SiC substrate)             |
| Dielectric Constant          | Moderate             | Lower                                  |

**3.2 Advantages of GaN**

*   **Extremely High Switching Frequency:** GaN HEMTs (High Electron Mobility Transistors) offer very fast switching speeds due to their high electron mobility and low parasitic capacitances. This allows for operation in the hundreds of MHz range.
*   **High Voltage Capability:** GaN devices can achieve high voltage ratings.
*   **Lower On-Resistance:** For similar voltage ratings, GaN can achieve very low on-resistance.
*   **High Power Density:** The combination of high switching frequency and efficiency allows for much smaller and lighter power electronic systems.

**3.3 Common GaN Power Devices**

*   **GaN HEMTs (High Electron Mobility Transistors):**
    *   **Principle:** These devices utilize a heterojunction between two different semiconductor materials (typically AlGaN and GaN). This junction creates a 2-dimensional electron gas (2DEG) channel with very high electron mobility. A gate electrode controls the conductivity of this 2DEG channel.
    *   **Types:**
        *   **Normally-Off (Enhancement Mode):** The device is off by default and turns on when a positive gate voltage is applied. This is the preferred mode for power electronics for safety reasons.
        *   **Normally-On (Depletion Mode):** The device is on by default and requires a negative gate voltage to turn off. These are less common in mainstream power applications due to safety concerns.
    *   **Advantages:** Extremely fast switching, very low on-resistance for their size, high frequency operation, good temperature performance.
    *   **Application:** High-frequency power adapters (laptops, chargers), consumer electronics, data centers, power factor correction (PFC), DC-DC converters, high-frequency inverters.
*   **GaN e-mode HEMT:** This is a common type of GaN HEMT designed for normally-off operation, making it safer and easier to integrate into existing power circuits.

**Examples:**
*   GaN chargers for laptops and mobile devices are significantly smaller and lighter than their Si-based counterparts due to the ability to operate at much higher frequencies, reducing the size of transformers and capacitors.
*   GaN HEMTs are used in RF power amplifiers for telecommunications due to their high efficiency and frequency response.

**Important Note:** While GaN has excellent thermal properties in bulk, current GaN power devices are often grown on substrates like Silicon, SiC, or Sapphire. The thermal conductivity of these substrates can limit the overall thermal performance compared to bulk GaN. However, GaN-on-SiC substrates offer better thermal management.

**References:**
*   *SiC and GaN Wide Bandgap Device Technology Overview* by Milligan et al. (Crucial for understanding the device structures and performance).
*   *Power Electronics Circuits, Devices, and Applications* by Muhammad H Rashid (Provides background on transistor operation).

---

### **4. Comparison of Si, SiC, and GaN**

| Feature                        | Silicon (Si) | Silicon Carbide (SiC) | Gallium Nitride (GaN) |
| :----------------------------- | :----------- | :-------------------- | :-------------------- |
| **Breakdown Voltage**          | Moderate     | Very High             | High                  |
| **Switching Frequency**        | Low-Moderate | High                  | Very High             |
| **On-Resistance**              | Moderate     | Very Low              | Very Low              |
| **Conduction Losses**          | Moderate     | Low                   | Very Low              |
| **Switching Losses**           | Moderate     | Low                   | Very Low              |
| **Operating Temperature**      | Moderate     | High                  | Moderate-High         |
| **Power Density**              | Low          | High                  | Very High             |
| **Cost (per device)**          | Low          | High                  | High                  |
| **Maturity of Technology**     | Very High    | Growing               | Growing               |
| **Typical Devices**            | MOSFET, IGBT, Diodes | MOSFET, SBD, JFET     | HEMT (e-mode)         |

**Important Point to Remember:** The choice between Si, SiC, and GaN depends on the specific application requirements (voltage, current, frequency, efficiency, cost, size, and thermal management).

---

### **5. Alignment with Course Outcomes**

*   **CO1: Outline the operation of power semiconductor devices and its characteristics. (Knowledge Level: K2)**
    *   This module introduces the basic operating principles of SiC and GaN devices (MOSFETs, HEMTs, SBDs), their bandgap properties, and how these properties influence their characteristics (voltage, current, switching speed, temperature).
*   **CO2, CO3, CO4:** While this specific topic focuses on the devices themselves, understanding their superior characteristics (lower losses, higher frequency) is foundational for analyzing and designing rectifier, converter, and inverter circuits in subsequent modules. For example, using SiC or GaN will directly impact the efficiency and size of these circuits.

---

### **6. Practice Questions**

1.  What is the primary advantage of using wide bandgap (WBG) semiconductors like SiC and GaN over traditional Silicon (Si) in power electronics?
2.  Explain the significance of the "bandgap" of a semiconductor material in determining its power handling capabilities.
3.  List at least three key advantages of Silicon Carbide (SiC) devices compared to Silicon (Si) devices.
4.  Describe the basic operating principle of a Gallium Nitride (GaN) High Electron Mobility Transistor (HEMT).
5.  For a given voltage rating, which type of device (Si, SiC, or GaN) is likely to have the lowest on-resistance, and why?
6.  In which application would you consider using GaN devices over SiC devices, and why? (Hint: Think about operating frequency).
7.  Which SiC power device is known for its extremely fast switching speed and lack of minority carrier reverse recovery?

---

### **7. Answers to Practice Questions**

1.  The primary advantage is their ability to operate at higher voltages, higher switching frequencies, and higher temperatures with lower losses, leading to more efficient and compact power electronic systems.
2.  A larger bandgap means a higher critical electric field. This allows the semiconductor to withstand a greater voltage difference across a given thickness or, conversely, to achieve the same voltage blocking capability with a thinner drift region, which reduces on-resistance and conduction losses.
3.  Three key advantages of SiC over Si are:
    *   Higher breakdown voltage.
    *   Lower on-resistance for the same voltage rating.
    *   Higher operating temperature capability.
    *   Faster switching speeds (lower parasitic capacitances).
4.  A GaN HEMT utilizes a heterojunction between two different semiconductor materials (e.g., AlGaN and GaN) to create a 2-dimensional electron gas (2DEG) channel with very high electron mobility. A gate voltage controls the conductivity of this 2DEG channel, allowing for fast switching.
5.  Gallium Nitride (GaN) devices are likely to have the lowest on-resistance for a given voltage rating due to their extremely high electron mobility, allowing for very low channel resistance.
6.  GaN devices would be preferred for applications requiring extremely high switching frequencies, such as high-frequency power adapters for consumer electronics (e.g., laptop chargers) where size reduction is critical. SiC is often preferred for higher voltage and higher power applications where thermal management is a primary concern.
7.  Silicon Carbide (SiC) Schottky Barrier Diodes (SBDs) are known for their extremely fast switching speed and lack of minority carrier reverse recovery.

---

### **8. Important Points to Remember**

*   **Bandgap is Key:** The larger the bandgap, the higher the critical electric field and operating temperature possible.
*   **SiC Strengths:** High voltage, good efficiency across various power levels, excellent thermal performance.
*   **GaN Strengths:** Ultra-high frequency operation, very low on-resistance, high power density.
*   **Trade-offs Exist:** Cost, maturity, and specific device structures influence the selection between Si, SiC, and GaN.
*   **Device Structures Matter:** The specific design (e.g., MOSFET vs. HEMT, heterojunction design) significantly impacts performance.

---
This concludes the notes for the topic "Basic principles of wide band gap devices – SiC & GaN." Remember to refer to the specified textbooks for more in-depth explanations and circuit examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
