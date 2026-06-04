---
title: "Voltage Source Converters (VSC) - VSC with AC current control and VSC with AC voltage control"
subject: "HVDC AND FACTS"
module: "Module 1: Introduction to HVDC System: Comparison of AC and DC Transmission "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b71"
status: "completed"
scrapedAt: "2026-05-23T16:40:56.766Z"
---
# HVDC and FACTS: Module 1 - Introduction to HVDC Systems

## Topic: Voltage Source Converters (VSC) - VSC with AC Current Control and VSC with AC Voltage Control

**Course Outcomes Addressed:**
*   **CO1:** Analyse current source and voltage source converters for HVDC systems (Knowledge Level: K4)
*   **CO2:** Describe the control schemes for HVDC systems (Knowledge Level: K2)

**Learning Outcomes:**
*   Understand the fundamental operation of Voltage Source Converters (VSC).
*   Differentiate between VSC with AC current control and VSC with AC voltage control.
*   Analyze the control strategies for achieving AC current and AC voltage control in VSC-HVDC systems.
*   Discuss the advantages and applications of VSC-HVDC with different control schemes.

**Reference Textbooks:**
*   **[Sood, 2004]** HVDC and FACTS Controllers by Vijay K Sood
*   **[Hingorani & Gyugyi, 2000]** Understanding FACTS by N.G. Hingorani and L.Gyugyi
*   **[Padiyar, 1993]** High Voltage DC Transmission by K.R.Padiyar
*   **[Padiyar, 2007]** FACTS Controllers in Power Transmission and distribution by K.R.Padiyar
*   **[Song & Jones, 1999]** Flexible AC Transmission systems (FACTS) by Y.H. Song and A.T.Jones
*   **[Miller, 1982]** Reactive Power control in Power systems by T.J.E. Miller

---

### 1. Introduction to Voltage Source Converters (VSC)

Voltage Source Converters (VSCs) are a fundamental component in modern HVDC transmission systems, particularly in the context of **LCC-HVDC (Line-Commutated Converter HVDC)**. Unlike LCCs which rely on the AC system voltage for commutation, VSCs utilize fully controllable switching devices (like IGBTs - Insulated Gate Bipolar Transistors) to synthesize the DC voltage from the DC side and then control the AC voltage waveform.

*   **Key Concept:** VSCs are capable of converting a DC voltage source into a variable frequency and variable voltage AC output.
*   **Core Principle:** The switching action of the semiconductor devices (e.g., IGBTs) is controlled using pulse-width modulation (PWM) techniques to generate the desired AC voltage waveform.
*   **Advantage over LCC-HVDC:**
    *   **Independent AC Voltage Control:** VSCs can control the magnitude and phase of the AC voltage injected into the AC system, irrespective of the AC system voltage. This is a significant advantage for weak AC systems or systems with limited fault current capacity.
    *   **Black Start Capability:** VSCs can energize a de-energized AC system, providing black start capability.
    *   **Controllable Reactive Power:** VSCs can absorb or inject reactive power independently, offering flexible reactive power compensation.

*   **Reference:** **[Hingorani & Gyugyi, 2000]** provides a detailed explanation of VSC operation and their advantages in FACTS and HVDC applications. **[Padiyar, 2007]** also delves into the semiconductor switches and PWM control strategies.

### 2. VSC with AC Current Control

In this control scheme, the primary objective is to regulate the AC current flowing through the converter. This is particularly useful when the VSC needs to inject a specific amount of active and/or reactive current into the AC grid.

#### 2.1. Control Strategy

The control of AC current in a VSC typically involves a current controller that regulates the voltage-source converter's output voltage (magnitude and phase) to achieve the desired AC current.

*   **Inner Current Control Loop:** A fundamental aspect of VSC control is the use of an inner current control loop. This loop typically uses PI (Proportional-Integral) controllers to regulate the d-q components of the AC current.
    *   **dq Transformation:** The AC currents (ia, ib, ic) are transformed into a rotating reference frame (d-q frame) using Park's transformation. The d-axis is usually aligned with the grid voltage vector, and the q-axis is 90 degrees ahead.
    *   **Current Regulation:** The PI controllers in the d-q frame adjust the d-axis current (Id) and q-axis current (Iq) references.
        *   **Id Reference:** Typically controlled to regulate the DC side voltage or the power transfer.
        *   **Iq Reference:** Directly controls the reactive power injected or absorbed by the VSC. A positive Iq corresponds to reactive power absorption, and a negative Iq corresponds to reactive power injection.
*   **Outer Voltage/Power Control Loop:** An outer loop generates the reference for the inner current control loop. This outer loop can be designed to:
    *   **Regulate DC Voltage:** The DC voltage on the converter side is regulated by controlling the active power flow.
    *   **Regulate AC Voltage:** The AC voltage at the converter bus is controlled by adjusting the reactive power.
    *   **Regulate Active/Reactive Power:** Direct control of active (P) and reactive (Q) power transferred.

*   **Modulation Strategy:** The output of the current controller (which dictates the required AC voltage components) is then used by a PWM modulator to control the switching of the converter's semiconductor switches. Common modulation techniques include Space Vector PWM (SVPWM).

*   **Example:** In a VSC-HVDC link connecting two AC systems, the sending-end converter might control the DC voltage, while the receiving-end converter might control the AC voltage of the receiving AC system. If the receiving-end VSC needs to provide voltage support, its outer loop would be a voltage controller, and its inner current loop would regulate the reactive current (Iq) to achieve the desired voltage.

*   **Reference:** **[Padiyar, 1993]** discusses control techniques for HVDC, and **[Sood, 2004]** provides detailed chapters on VSC control for HVDC and FACTS. **[Song & Jones, 1999]** also offers insights into control strategies for FACTS devices that utilize VSC principles.

#### 2.2. Advantages and Applications of AC Current Control

*   **Precise Power Flow Control:** Allows for accurate control of active and reactive power injected into the AC grid.
*   **Stable Operation in Weak Grids:** By controlling current, the VSC can operate reliably even in AC systems with low fault levels or high impedance.
*   **Dynamic Response:** Fast response to changes in AC current demands.
*   **Applications:**
    *   **Grid Connection of Renewable Energy Sources (e.g., Wind Farms):** VSCs with current control are essential for connecting large-scale wind farms to the grid, ensuring smooth power injection and grid stability.
    *   **Interconnecting AC Systems with Different Frequencies:** Though less common in traditional HVDC, VSCs can facilitate such connections by controlling the AC current at both ends.
    *   **Asynchronous Grids:** Connecting grids that are not synchronized.

### 3. VSC with AC Voltage Control

In this control scheme, the VSC's primary function is to regulate the AC voltage at its connection point to the AC grid. This is achieved by controlling the reactive power flow.

#### 3.1. Control Strategy

The control strategy for AC voltage control in a VSC is focused on maintaining the AC bus voltage within desired limits.

*   **Outer Voltage Control Loop:** The primary control loop is a voltage controller (often a PI controller) that compares the actual AC bus voltage with the desired reference voltage.
    *   **Output of Voltage Controller:** The output of this controller is the reference for the reactive current (Iq_ref).
*   **Inner Current Control Loop:** This loop operates similarly to the AC current control scheme, but the d-axis current (Id_ref) is typically controlled to maintain a specific DC voltage or active power transfer.
    *   **Id Reference:** Often set to zero for pure reactive power compensation or to a value required to maintain DC bus voltage.
    *   **Iq Reference:** Dictated by the outer voltage control loop.
*   **Relationship between Voltage, Current, and Reactive Power:** The AC voltage control is fundamentally achieved by regulating the reactive power.
    *   For a stiff AC system, the relationship between AC voltage, injected reactive power (Q), and system impedance (X) is roughly $V_{ac} \approx V_{grid} + Q \cdot X$. By controlling Q, the VSC influences the AC bus voltage.
    *   The reactive power (Q) injected by the VSC is directly proportional to the q-axis current ($I_q$) and the AC voltage magnitude ($V_{ac}$): $Q = V_{ac} \cdot I_q$.

*   **Example:** A STATCOM (Static Synchronous Compensator) is a classic example of a VSC used for AC voltage control. It injects or absorbs reactive power by controlling the magnitude and phase of the voltage generated by the VSC, thereby regulating the AC bus voltage. In HVDC, a receiving-end converter could be configured for AC voltage control to stabilize the AC grid it is connected to.

*   **Reference:** **[Miller, 1982]** discusses the fundamental principles of reactive power compensation, which are directly relevant to VSC-based voltage control. **[Hingorani & Gyugyi, 2000]** and **[Song & Jones, 1999]** extensively cover VSC applications in FACTS devices like STATCOMs, which are excellent examples of AC voltage control.

#### 3.2. Advantages and Applications of AC Voltage Control

*   **AC System Voltage Support:** The primary advantage is the ability to dynamically regulate AC bus voltage.
*   **Improved System Stability:** Enhances the transient and steady-state stability of the AC power system.
*   **Reduced Voltage Fluctuations:** Mitigates voltage sags and swells caused by load changes or disturbances.
*   **Increased Power Transfer Capability:** By controlling voltage, the VSC can help maintain voltage profiles, allowing for higher power transfer.
*   **Applications:**
    *   **STATCOMs:** Used for voltage support and reactive power compensation in AC systems.
    *   **DVS (Dynamic Voltage Stabilizer):** Similar to STATCOMs, providing rapid voltage regulation.
    *   **Grid Interconnection of Weak AC Systems:** Crucial for stabilizing voltages when connecting to AC systems with limited fault current.
    *   **Controlling AC Bus Voltage in VSC-HVDC:** The receiving end converter in a VSC-HVDC link can be configured for AC voltage control.

---

### 4. Comparison: VSC with AC Current Control vs. VSC with AC Voltage Control

| Feature             | VSC with AC Current Control                 | VSC with AC Voltage Control                   |
| :------------------ | :------------------------------------------ | :-------------------------------------------- |
| **Primary Objective** | Regulate AC current (active & reactive)     | Regulate AC voltage at the converter bus      |
| **Control Mechanism** | Inner current control loops (PI for Id, Iq) | Outer voltage control loop (PI for V_ref), Inner current control loop (PI for Id, Iq) |
| **Controlled Variable** | AC current magnitude and phase            | AC voltage magnitude                          |
| **Reactive Power Role** | Controlled by Iq reference to achieve desired Q | Controlled by Iq reference (via voltage controller) to achieve desired V |
| **DC Side Control** | Can be controlled by Id reference (power transfer) | Can be controlled by Id reference (power transfer) |
| **Typical Application** | Grid connection of renewables, active power transfer control | Voltage support, stabilization, STATCOMs      |
| **Sensitivity to Grid** | Less sensitive to AC system stiffness for current control | More dependent on AC system for voltage regulation (relationship $V \approx V_{grid} + IX$) |
| **Reference Books** | **[Sood, 2004]**, **[Padiyar, 2007]**           | **[Hingorani & Gyugyi, 2000]**, **[Song & Jones, 1999]**, **[Miller, 1982]** |

---

### 5. Important Points to Remember

*   **VSC Fundamentals:** VSCs use fully controllable switches (IGBTs) and PWM to synthesize AC voltages from a DC source.
*   **dq Transformation:** Crucial for analyzing and controlling AC currents and voltages in a synchronous reference frame.
*   **Inner Current Control:** A fundamental building block for both AC current and AC voltage control strategies in VSCs.
*   **Outer Control Loops:** Determine the reference values for the inner current controllers, enabling voltage, power, or current regulation.
*   **Reactive Power and Voltage:** There's a direct link between reactive power flow and AC voltage levels in AC systems. VSCs leverage this to control voltage.
*   **VSC-HVDC vs. LCC-HVDC:** VSCs offer advantages like black start capability and independent AC voltage control, making them suitable for new applications like grid connection of renewables.

---

### 6. Practice Questions and Answers

**Question 1:** In a VSC with AC current control, what is the primary role of the 'q'-axis current (Iq) reference?
    A. To control active power transfer.
    B. To control reactive power transfer.
    C. To maintain the DC link voltage.
    D. To regulate the switching frequency.

**Answer 1:**
    **B. To control reactive power transfer.**
    *Explanation:* In the dq transformation, the q-axis current is directly associated with the reactive power injected or absorbed by the VSC.

**Question 2:** Which of the following is a significant advantage of VSC-HVDC over LCC-HVDC in weak AC systems?
    A. Higher commutation voltage requirement.
    B. Inability to provide black start capability.
    C. Independent control of AC voltage and reactive power.
    D. Reliance on AC system voltage for commutation.

**Answer 2:**
    **C. Independent control of AC voltage and reactive power.**
    *Explanation:* VSCs can control their output voltage magnitude and phase, allowing them to stabilize weak AC grids, which LCCs cannot do effectively.

**Question 3:** A STATCOM is an example of a FACTS device that primarily uses VSC technology for:
    A. Active power compensation.
    B. Harmonic filtering.
    C. AC voltage control and reactive power compensation.
    D. Frequency regulation.

**Answer 3:**
    **C. AC voltage control and reactive power compensation.**
    *Explanation:* STATCOMs are designed to inject or absorb reactive power dynamically to maintain AC bus voltage levels.

**Question 4:** Describe the basic control structure for a VSC-HVDC converter when configured for AC voltage control.
    **Answer:** The control structure typically involves an outer voltage control loop that generates a reference for the reactive current (Iq_ref). This Iq_ref is then fed into an inner current control loop, which also takes a reference for the direct current (Id_ref) – usually set for DC voltage regulation or zero power transfer. The inner current controller outputs voltage commands (Vd_ref, Vq_ref) which are then modulated to control the VSC's switching.

**Question 5:** Explain the significance of the dq transformation in VSC control.
    **Answer:** The dq transformation converts the time-varying AC quantities (currents, voltages) into a rotating reference frame, usually aligned with the grid voltage vector. In this frame, the AC quantities become DC quantities, which are much easier to control using standard PI controllers. This allows for independent control of active power (Id) and reactive power (Iq).

---
This concludes Module 1, Topic: Voltage Source Converters (VSC) - VSC with AC Current Control and VSC with AC Voltage Control. These notes provide a foundation for understanding the operational principles and control strategies of VSCs in HVDC systems, aligning with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
