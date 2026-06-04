---
title: "Thyristor controlled Voltage and Phase angle Regulators (Principle of operation and schematic)"
subject: "HVDC AND FACTS"
module: "Module 4: UPFC AND IPFC: Unified Power Flow Controller: Circuit Arrangement, Operation of UPFC"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b7d"
status: "completed"
scrapedAt: "2026-05-23T16:41:10.337Z"
---
# HVDC AND FACTS: Module 4 - UPFC AND IPFC

## Topic: Thyristor Controlled Voltage and Phase Angle Regulators (Principle of Operation and Schematic)

---

### **1. Introduction to Thyristor Controlled Regulators**

This topic focuses on the fundamental building blocks that enable precise control of voltage and phase angle in AC power systems, which are crucial for the operation of advanced Flexible AC Transmission Systems (FACTS) devices like the Unified Power Flow Controller (UPFC). Thyristors, as controllable semiconductor switches, play a pivotal role in achieving this control.

**Key Concepts:**

*   **Power Flow Control:** The ability to regulate the amount of active and reactive power flowing through a transmission line. This is essential for maintaining system stability, reducing losses, and optimizing resource utilization.
*   **Voltage Regulation:** Maintaining the voltage magnitude at a desired level at a specific point in the power system.
*   **Phase Angle Control:** Adjusting the phase difference between voltage waveforms at different points in the power system. This directly influences power flow.
*   **Thyristors (SCRs - Silicon Controlled Rectifiers):** A type of semiconductor device that can be switched on by a gate pulse but can only be switched off by the current falling below a certain level or by external circuitry. They act as switches to connect or disconnect portions of impedance or inject voltage.

**Learning Outcomes Covered:**

*   **CO3: Explain the need for FACTS devices (Knowledge Level: K2)** - Understanding these regulators highlights the limitations of conventional systems and the necessity for dynamic control offered by FACTS.
*   **CO5: Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)** - These regulators are the core components of series and shunt FACTS controllers.

**References:**

*   "HVDC and FACTS Controllers" by Vijay K Sood (Springer, 2004) - Chapter on SVCs and TSSC.
*   "Understanding FACTS" by N.G. Hingorani and L.Gyugyi (IEEE Press, 2000) - Chapter on Thyristor Controlled Series Compensators and Shunt Compensators.
*   "Reactive Power control in Power systems" by T.J.E. Miller (John Wiley, 1982) - Focus on thyristor-based reactive power compensation.

---

### **2. Thyristor Controlled Series Compensator (TCSC) - Voltage and Phase Angle Control Principle**

The Thyristor Controlled Series Compensator (TCSC) is a primary example of a thyristor-controlled device used for series compensation. It can dynamically control the effective series reactance of a transmission line, thereby influencing voltage profile and power flow.

**2.1. Basic TCSC Circuit Arrangement**

A TCSC essentially consists of a fixed series capacitor (C) in combination with a thyristor-controlled reactor (TCR) or a thyristor-controlled variable reactor. The most common configuration is the **series capacitor with a parallel thyristor-controlled inductor (TCL)**.

*   **Circuit Schematic:**

    ```
    Transmission Line ----[  Thyristor-Controlled Inductor (L)  ]---- Transmission Line
                                       |
                                       [  Fixed Capacitor (C)    ]
                                       |
                                       [  Thyristor Switch (TS)  ]
                                       |
                                    (Ground)
    ```

    *   **Thyristor Switch (TS):** Typically consists of series-connected thyristors to handle the high voltage of the transmission line.
    *   **Fixed Capacitor (C):** Provides a base level of capacitive compensation.
    *   **Thyristor-Controlled Inductor (L):** This is the key element for dynamic control. It is usually composed of a fixed inductor in parallel with a back-to-back thyristor valve. By controlling the firing angle of the thyristors, the effective inductance can be varied.

**2.2. Principle of Operation (TCSC)**

The TCSC operates by controlling the firing angle ($\alpha$) of the thyristors. The thyristors effectively bypass a portion of the fixed capacitor, thereby changing the overall series reactance.

*   **Zero Impedance/Inductive Mode:** When the thyristors are triggered to conduct, the current flows through the inductor (L). The impedance seen by the line is effectively inductive.
*   **Capacitive Mode:** When the thyristors are blocked, the current flows through the capacitor (C). The impedance seen by the line is capacitive.
*   **Controlled Capacitive Mode:** By controlling the firing angle $\alpha$, a portion of the capacitor can be switched into or out of the circuit. The thyristors are typically fired at an angle $\alpha$ after the capacitor voltage reaches its peak. The current through the series combination of L and C is controlled by the firing angle.
    *   The fundamental component of the current through the TCSC is a function of the firing angle $\alpha$.
    *   By varying $\alpha$, the equivalent series capacitive reactance ($X_{eq}$) can be varied.

**2.3. Control of Voltage and Phase Angle**

*   **Voltage Control:** By varying the equivalent series capacitive reactance ($X_{eq}$) of the TCSC, the voltage drop across the line can be controlled.
    *   Increasing capacitive compensation (decreasing $X_{eq}$) leads to a higher voltage at the receiving end for a given sending end voltage and power.
    *   Decreasing capacitive compensation (increasing $X_{eq}$) leads to a lower voltage at the receiving end.
*   **Phase Angle Control:** The change in series impedance directly affects the power flow equation:
    $P = (V_s V_r / X_L) \sin(\delta)$
    Where $X_L$ is the total line reactance, including the TCSC. By varying $X_{eq}$ (which modifies $X_L$), the phase angle difference ($\delta$) can be controlled to achieve the desired power flow.

**Important Point to Remember:**

*   The TCSC can operate in inductive, capacitive, and resonant modes. Careful control is needed to avoid resonance with the power system.
*   The firing angle control of thyristors dictates the fundamental component of the current and thus the equivalent reactance.

**Textbook Reference:**

*   Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer. Chapter 5: Thyristor Controlled Series Compensators (TCSC).
*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. Chapter 3: Thyristor-Controlled Series Compensation.

---

### **3. Thyristor Controlled Shunt Compensator (STATCOM/SVC) - Voltage Control Principle**

Thyristor-controlled shunt compensators are used to control the voltage at a bus by injecting or absorbing reactive power. The most prominent examples are the Static Synchronous Compensator (STATCOM) and the earlier Static VAR Compensator (SVC), both of which utilize thyristor control.

**3.1. Basic SVC Circuit Arrangement**

The Static VAR Compensator (SVC) is the most common thyristor-based shunt reactive power compensator. It consists of a combination of fixed capacitors (FC), thyristor-controlled reactors (TCR), and sometimes thyristor-switched capacitors (TSC).

*   **Circuit Schematic (Simplified SVC):**

    ```
    Bus Voltage (V) ----[ Thyristor-Controlled Reactor (TCR) ]----
                      |
                      [ Fixed Capacitor Bank (FC)           ]
                      |
                      [ Thyristor Switched Capacitor (TSC)  ]
                      |
                   (Ground)
    ```

    *   **Thyristor-Controlled Reactor (TCR):** A reactor (inductor) connected in series with a back-to-back thyristor valve. By controlling the firing angle of the thyristors, the magnitude of the fundamental inductive current is varied. This is the primary means of continuous reactive power absorption.
    *   **Fixed Capacitor Bank (FC):** Provides a fixed amount of capacitive reactive power.
    *   **Thyristor Switched Capacitor (TSC):** A capacitor bank switched into or out of the circuit by thyristors. This provides discrete steps of capacitive reactive power.

**3.2. Principle of Operation (SVC)**

The SVC's ability to control voltage relies on its ability to dynamically inject or absorb reactive power.

*   **TCR Operation:**
    *   The TCR consists of a reactor $L$ connected in series with a pair of anti-parallel thyristors.
    *   The firing angle $\alpha$ of the thyristors controls the magnitude of the fundamental inductive current ($I_{L1}$).
    *   The reactive power absorbed by the TCR is $Q_{TCR} = -V^2 / X_L(\alpha)$, where $X_L(\alpha)$ is the effective inductive reactance, which varies with $\alpha$.
    *   As $\alpha$ increases from $90^{\circ}$ to $180^{\circ}$, the inductive current decreases, and thus the reactive power absorption decreases (becomes less inductive).
*   **FC Operation:**
    *   Provides a constant capacitive reactive power $Q_{FC} = V^2 / X_C$.
*   **TSC Operation:**
    *   When switched on, it provides a step of capacitive reactive power $Q_{TSC} = V^2 / X_{CTSC}$.
    *   By selectively switching TSCs and controlling the TCR, the SVC can provide a wide range of reactive power output.

**3.3. Control of Voltage**

The primary function of an SVC is to regulate bus voltage.

*   **Voltage Regulation Strategy:** The SVC maintains a target voltage by adjusting its reactive power output.
    *   If the bus voltage drops below the target, the SVC increases its capacitive output (by reducing inductive output from TCR and switching in TSCs).
    *   If the bus voltage rises above the target, the SVC increases its inductive output (by increasing inductive output from TCR and switching out TSCs).
*   **Control Loop:** A voltage controller (often a PID controller) monitors the bus voltage and generates a control signal to adjust the firing angle of the TCR and the switching of TSCs.

**Important Point to Remember:**

*   SVCs are thyristor-controlled to provide *stepped* or *continuous* reactive power compensation.
*   The TCR provides continuous inductive compensation, while TSCs provide discrete capacitive compensation.
*   The primary application of SVCs is voltage support and improvement of transient stability.

**Textbook Reference:**

*   Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer. Chapter 4: Thyristor Controlled Shunt Compensators (SVC).
*   Miller, T.J.E. (1982). *Reactive Power control in Power systems*. John Wiley. Chapter 6: Thyristor Converters for Reactive Power Compensation.
*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. Chapter 2: Thyristor-based Shunt Compensation.

---

### **4. Thyristor Controlled Phase Angle Regulator (PAR)**

A Thyristor Controlled Phase Angle Regulator (PAR) is a device used to control power flow by altering the phase angle between the voltages at the sending and receiving ends of a transmission line. This is fundamentally different from reactance control.

**4.1. Basic PAR Circuit Arrangement**

A PAR typically employs a tap-changing transformer with thyristor-controlled tap changers, or it can be implemented using a combination of series converters. A common implementation involves a series converter (like a STATCOM) that injects a voltage in quadrature with the line current.

*   **Circuit Schematic (Conceptual using series converter):**

    ```
    Transmission Line ----[ Series Converter ]---- Transmission Line
                                    |
                                (Control Signals)
    ```

    *   **Series Converter:** Typically a voltage-source converter (VSC) capable of generating a variable voltage with controllable magnitude and phase. For phase angle regulation, it injects a voltage that is primarily in quadrature with the line current.
    *   **Control System:** The control system monitors power flow and adjusts the injected voltage's phase and magnitude.

**4.2. Principle of Operation (PAR)**

The PAR works by injecting a series voltage into the transmission line. The angle of this injected voltage relative to the line current determines its effect on power flow.

*   **Power Flow Equation:**
    $P = (V_s V_r / X_L) \sin(\delta)$
*   **Effect of Injected Voltage ($V_{inj}$):**
    If a voltage $V_{inj}$ is injected in series with the line, the total voltage across the line becomes $V_s' = V_s + V_{inj}$. The power flow can then be expressed as a function of the impedance and the phase difference between the terminal voltages.
*   **Phase Angle Control:**
    By injecting a voltage that is approximately in quadrature with the line current, the PAR effectively alters the phase angle difference between the sending and receiving end voltages, thereby controlling power flow.
    *   If $V_{inj}$ is injected in phase with $V_s$, it acts as a series voltage source, changing the voltage magnitude.
    *   If $V_{inj}$ is injected in quadrature with the line current, it effectively changes the phase angle across the line impedance, thus controlling power flow without significantly affecting the voltage magnitudes.

**Important Point to Remember:**

*   PARs directly control the phase angle of the voltage, thereby regulating power flow.
*   They are crucial components in devices like the UPFC, where simultaneous control of voltage magnitude and phase angle is required.

**Textbook Reference:**

*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. Chapter 4: Unified Power Flow Control. (While not exclusively PAR, it explains the concept of series voltage injection).
*   Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer. While the term "PAR" might not be used extensively, the principles of series voltage injection for power flow control are discussed in sections related to TSSC and UPFC.

---

### **5. Relationship to UPFC and IPFC**

The concepts of thyristor-controlled voltage and phase angle regulators are fundamental to understanding the operation of advanced FACTS devices like the Unified Power Flow Controller (UPFC) and Interline Power Flow Controller (IPFC).

*   **UPFC:** The UPFC combines a STATCOM (for shunt reactive power control and voltage regulation) with a series converter that acts as a phase angle regulator and voltage regulator. The series component of the UPFC is capable of injecting a voltage of variable magnitude and phase angle, effectively controlling both voltage and phase angle across the line.
    *   **Learning Outcome Alignment:** CO5 (Interpreting series and shunt connected FACTS devices), CO6 (Explaining dynamic interconnection mechanisms).
*   **IPFC:** The IPFC uses multiple series converters connected to different parallel lines. Each series converter can inject a voltage to control the power flow on its respective line, and importantly, it can also inject a voltage that is in phase with the current of another line to provide dynamic compensation for series impedance.
    *   **Learning Outcome Alignment:** CO5 (Interpreting series and shunt connected FACTS devices), CO6 (Explaining dynamic interconnection mechanisms).

**Key Concepts:**

*   **Simultaneous Control:** UPFC is unique in its ability to simultaneously control voltage magnitude, phase angle, and series reactance, offering unparalleled flexibility in power flow management.
*   **Series Compensation with Voltage Injection:** Thyristor-controlled series converters are the backbone of phase angle and some voltage control aspects in FACTS devices.

---

### **6. Practice Questions and Answers**

**Question 1:** What is the primary principle behind the operation of a Thyristor Controlled Series Compensator (TCSC)?

**Answer:** The TCSC operates by dynamically controlling the equivalent series capacitive reactance of a transmission line. This is achieved by using thyristors to bypass a portion of a fixed series capacitor, thereby varying the effective impedance presented to the line. By controlling the firing angle of the thyristors, the TCSC can effectively vary its series reactance.

**Question 2:** How does a Static VAR Compensator (SVC) regulate bus voltage?

**Answer:** An SVC regulates bus voltage by dynamically injecting or absorbing reactive power. It achieves this through a combination of thyristor-controlled reactors (TCRs) to absorb reactive power continuously and thyristor-switched capacitors (TSCs) and/or fixed capacitors to inject reactive power in steps. A voltage controller adjusts the TCR's firing angle and the switching of TSCs to match the required reactive power output to maintain the desired bus voltage.

**Question 3:** Differentiate between the fundamental control mechanisms of a TCSC and a Phase Angle Regulator (PAR) in terms of power flow control.

**Answer:**
*   **TCSC:** Controls power flow by varying the *series reactance* of the transmission line. Changing the reactance alters the impedance component in the power flow equation ($P = (V_s V_r / X_L) \sin(\delta)$), thereby influencing the phase angle $\delta$ required for a given power transfer.
*   **PAR:** Controls power flow by directly injecting a series voltage with a controllable *phase angle* relative to the line current. This injected voltage effectively modifies the voltage difference across the line impedance, directly controlling the phase angle between the terminal voltages and thus the power flow.

**Question 4:** What is the key advantage of using thyristors in SVCs and TCSCs compared to mechanical switches?

**Answer:** The key advantage is their ability to switch rapidly and with precise timing (via firing angle control). This allows for dynamic and continuous adjustment of reactive power and impedance, which is essential for fast voltage support and damping of system oscillations. Mechanical switches are slow and provide only discrete changes.

---

### **7. Important Points to Remember**

*   **Thyristors as Switches:** Thyristors are the core switching elements in many FACTS devices, enabling dynamic control of impedance and reactive power.
*   **TCSC:** Controls series reactance, impacting voltage profile and power flow.
*   **SVC:** Controls shunt reactive power, primarily for voltage regulation.
*   **PAR:** Controls power flow by directly injecting a series voltage to adjust the phase angle.
*   **UPFC/IPFC:** These advanced FACTS devices integrate principles of series and shunt compensation, often utilizing thyristor-controlled series converters (similar to PARs) for sophisticated power flow control.
*   **Firing Angle Control:** Crucial for regulating the fundamental component of current in TCRs and thus the amount of reactive power or impedance controlled.
*   **Resonance:** Care must be taken in designing and controlling thyristor-based compensators to avoid resonance with the power system.

---

This comprehensive set of notes covers the fundamental principles of thyristor-controlled voltage and phase angle regulators, their circuit arrangements, operational principles, and their crucial role as building blocks for advanced FACTS devices like UPFC and IPFC, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
