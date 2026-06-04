---
title: "switched reluctance motors (SRM)"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464455"
status: "completed"
scrapedAt: "2026-05-20T18:21:05.320Z"
---
# HYBRID AND ELECTRIC VEHICLES - Module 3: Electric Propulsion System – Electric Motors

## Topic: Switched Reluctance Motors (SRM)

---

### **1. Introduction to Switched Reluctance Motors (SRMs)**

*   **Definition:** A Switched Reluctance Motor (SRM) is a type of brushless DC electric motor that relies on the principle of reluctance torque. It works by aligning the magnetic poles of the stator and rotor to minimize the magnetic reluctance of the flux path.
    *   *Reference: Husain, "Electric and Hybrid Vehicles”: Design Fundamentals*, Chapter 6.
    *   *Reference: Ehsani, Gao, Gay, Emadi, "Modern Electric, Hybrid Electric and Fuel Cell Vehicles"*, Chapter 6.
*   **Working Principle:**
    *   The motor has salient poles on both the stator and the rotor.
    *   The stator has windings (coils), while the rotor has no windings or magnets.
    *   Torque is produced by sequentially energizing the stator coils.
    *   When a stator coil is energized, it creates a magnetic field that attracts the nearest rotor poles, causing the rotor to move to a position of minimum reluctance (alignment).
    *   As the rotor moves, the magnetic path reluctance increases. The coil is then de-energized, and the next stator coil in sequence is energized, pulling the rotor further.
*   **Key Characteristic:** SRMs are known for their simple and robust construction, making them potentially cost-effective and reliable.

---

### **2. Construction of Switched Reluctance Motors (SRMs)**

*   **Stator:**
    *   Consists of a laminated iron core with salient poles.
    *   Each stator pole has a concentrated winding (coil) around it.
    *   The stator windings are typically connected in series or parallel.
    *   The number of stator poles ($N_s$) is usually greater than the number of rotor poles ($N_r$).
    *   *Example: A common configuration is 8 stator poles and 6 rotor poles (8/6 SRM).*
    *   *Reference: Larminie & Lowry, "Electric Vehicle Technology Explained"*, Chapter 4.
*   **Rotor:**
    *   Consists of a laminated iron core with salient poles.
    *   **Crucially, the rotor has no windings or permanent magnets.** This is a major distinguishing feature.
    *   The rotor poles are designed to align with the stator poles when the magnetic flux path has minimum reluctance.
*   **Windings:**
    *   Stator windings are typically wound around the stator poles.
    *   These windings are connected to a DC power source through electronic switches.
*   **Housing:** Encloses the stator and rotor, providing mechanical support and protection.

---

### **3. Operating Principle and Torque Production**

*   **Reluctance Torque:** The torque produced in an SRM is directly proportional to the rate of change of inductance with respect to rotor position. Torque is generated when the rotor tries to move to a position where the inductance of the energized stator phase is maximized.
    *   $T \propto \frac{1}{2} i^2 \frac{dL(\theta)}{d\theta}$
        *   $T$: Torque
        *   $i$: Current in the stator winding
        *   $L(\theta)$: Inductance of the stator winding as a function of rotor position $\theta$
*   **Phased Energization:**
    *   SRMs operate based on the sequential energization of stator phases.
    *   Each stator phase winding is energized only when the corresponding rotor poles are in a position to be attracted, creating positive torque.
    *   The phases are switched on and off at specific rotor positions to maintain continuous rotation.
*   **Inductance Profile:**
    *   The inductance of a stator phase winding varies significantly with the rotor position.
    *   **Aligned Position:** When a stator pole is directly opposite a rotor pole, the magnetic flux path has minimum reluctance, resulting in maximum inductance ($L_{max}$).
    *   **Unaligned Position:** When a stator pole is positioned between two rotor poles, the magnetic flux path has maximum reluctance, resulting in minimum inductance ($L_{min}$).
    *   **Torque Generation:**
        *   When $dL(\theta)/d\theta > 0$, the motor produces positive torque (acceleration). This occurs when the phase is energized as the rotor is moving from the unaligned to the aligned position.
        *   When $dL(\theta)/d\theta < 0$, the motor produces negative torque (braking or deceleration). This occurs when the phase is still energized as the rotor is moving from the aligned to the unaligned position. To maintain positive torque, the phase must be switched off before this point.
*   **Control Strategy:**
    *   Requires precise control of the stator phase energization timing and duration, which depends on the rotor position.
    *   This is typically achieved using a **rotor position sensor** (e.g., Hall effect sensors, encoders) or **sensorless control algorithms**.
    *   The switching pattern ensures that each phase is energized only during its positive torque production region.

---

### **4. Advantages of SRMs**

*   **Robust Construction:** No windings or magnets on the rotor, making it highly resistant to centrifugal forces and thermal stress. This leads to increased reliability and longer lifespan.
    *   *Reference: Husain, "Electric and Hybrid Vehicles”: Design Fundamentals*, Chapter 6.
*   **High-Temperature Operation:** The absence of rotor winding insulation allows for operation at higher temperatures.
*   **Cost-Effectiveness:** Simpler rotor construction can lead to lower manufacturing costs.
*   **High Power Density:** Can achieve good power density, especially at higher speeds.
*   **High Torque-to-Inertia Ratio:** Can provide rapid acceleration.
*   **Fault Tolerance:** If one phase winding fails, the motor can often continue to operate, albeit with reduced performance.

---

### **5. Disadvantages of SRMs**

*   **Torque Ripple:** SRMs inherently produce significant torque ripple due to the pulsating nature of reluctance torque. This can lead to vibration and acoustic noise.
    *   *Reference: Ehsani, Gao, Gay, Emadi, "Modern Electric, Hybrid Electric and Fuel Cell Vehicles"*, Chapter 6.
*   **Complex Control:** Requires sophisticated electronic control systems to manage phase switching and minimize torque ripple.
*   **Low Power Factor:** Typically have a poor power factor compared to other motor types.
*   **Lower Efficiency:** Generally less efficient than permanent magnet synchronous motors (PMSMs) or induction motors, especially at lower speeds.
*   **Requires Rotor Position Sensing:** Precise control demands accurate knowledge of rotor position.
*   **Higher Starting Torque Issues:** Achieving smooth starting torque can be challenging.

---

### **6. Applications in Hybrid and Electric Vehicles**

*   **Auxiliary Systems:** Due to their robustness and cost-effectiveness, SRMs are well-suited for auxiliary applications in EVs and HEVs, such as:
    *   Cooling fans
    *   Water pumps
    *   Power steering pumps
    *   HVAC systems
*   **Traction Motors (Emerging):** While not as prevalent as PMSMs or induction motors for primary traction, SRMs are being explored and used in niche traction applications due to their cost and reliability advantages.
    *   *Reference: Denton, "Electric and hybrid vehicles"*, Chapter 5.
*   **Examples:**
    *   Some early hybrid vehicles used SRMs.
    *   Research is ongoing to improve SRM control strategies to mitigate torque ripple and enhance efficiency for traction applications.

---

### **7. Control of Switched Reluctance Motors**

*   **Basic Control:**
    *   **Rotor Position Sensor:** Hall effect sensors or encoders detect the rotor's angular position.
    *   **Controller (Microcontroller/DSP):** Processes the position information and controls the switching of power electronic converters.
    *   **Power Electronic Converter (Inverter):** Typically a **chop-chop converter** or **asymmetric bridge converter** is used to switch the stator phases on and off.
*   **Switching Strategy:**
    *   **Phase Firing Angle:** The angle at which a phase is switched ON.
    *   **Phase Extinction Angle:** The angle at which a phase is switched OFF.
    *   These angles are critical for producing continuous positive torque and minimizing torque ripple.
*   **Improving Performance:**
    *   **Current Control:** Regulating the current in each phase can help reduce torque ripple and improve efficiency.
    *   **Advanced Control Algorithms:** Techniques like predictive control, fuzzy logic control, and neural network control are employed to optimize switching angles and improve torque ripple and efficiency.
    *   **Sensorless Control:** Algorithms that estimate rotor position based on motor back EMF or inductance variations are used to eliminate the need for a physical sensor, further reducing cost and complexity.
        *   *Reference: Ehsani, Gao, Gay, Emadi, "Modern Electric, Hybrid Electric and Fuel Cell Vehicles"*, Chapter 6.
*   **Asymmetric Bridge Converter:** A common converter topology for SRMs. Each phase winding is connected to a pair of controlled switches (e.g., MOSFETs or IGBTs). The converter allows for bidirectional current flow but typically only positive current is allowed to flow to produce torque.

---

### **8. Practice Questions and Answers**

**Question 1:** What is the fundamental principle behind the operation of a Switched Reluctance Motor (SRM)?
**Answer 1:** SRMs operate based on the principle of reluctance torque, where the rotor attempts to align itself with the energized stator poles to minimize the magnetic reluctance of the flux path.

**Question 2:** What is a key distinguishing feature of the SRM rotor compared to other electric motors?
**Answer 2:** The rotor of an SRM has no windings or permanent magnets; it is made of a laminated iron core with salient poles.

**Question 3:** Which of the following statements about SRMs is TRUE?
    a) They offer very smooth torque production.
    b) They are typically less reliable than PMSMs.
    c) Their rotor construction is simpler and more robust.
    d) They require external magnets for operation.
**Answer 3:** c) Their rotor construction is simpler and more robust.

**Question 4:** Explain the relationship between the inductance of a stator winding and the torque produced in an SRM.
**Answer 4:** Torque is produced when the inductance of an energized stator winding is changing with respect to the rotor position ($dL/d\theta$). Positive torque is generated when the inductance is increasing ($dL/d\theta > 0$) as the rotor moves towards alignment.

**Question 5:** List two advantages and two disadvantages of using SRMs in electric vehicles.
**Answer 5:**
    *   **Advantages:** Robust construction, high-temperature operation, cost-effectiveness, fault tolerance.
    *   **Disadvantages:** Torque ripple, complex control, low power factor, lower efficiency compared to some other motor types.

---

### **9. Important Points to Remember**

*   **Reluctance Torque:** The core principle of SRM operation.
*   **No Rotor Windings/Magnets:** A defining characteristic of SRM rotor construction.
*   **Phase Sequencing:** SRMs require sequential energization of stator phases based on rotor position.
*   **Torque Ripple:** A significant challenge in SRM design and control, leading to vibration and noise.
*   **Control Complexity:** Sophisticated controllers and precise timing are essential for efficient and smooth operation.
*   **Robustness & Cost:** Key advantages that make SRMs attractive for certain applications, especially auxiliary systems.
*   **Applications:** While not yet dominant for traction, SRMs are valuable for auxiliary functions and are being researched for wider EV use.

---

### **10. Alignment with Course Outcomes**

*   **CO1: Explain the general architecture of Electric vehicles.** (K2)
    *   This topic contributes by explaining a key component (electric motor) within the EV powertrain architecture.
*   **CO2: Describe various battery, charging types and battery management of Electric vehicles.** (K2)
    *   While not directly covered, understanding the motor type influences power draw from the battery, indirectly relating to battery management.
*   **CO3: Describe various motors and drives of Electric vehicles.** (K2)
    *   This topic directly addresses the description of a specific type of electric motor (SRM) and its drive requirements, fulfilling this CO.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** (K3)
    *   Understanding the characteristics (torque ripple, efficiency, robustness) of SRMs allows for an informed selection of motor types based on specific vehicle requirements, supporting this CO.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
