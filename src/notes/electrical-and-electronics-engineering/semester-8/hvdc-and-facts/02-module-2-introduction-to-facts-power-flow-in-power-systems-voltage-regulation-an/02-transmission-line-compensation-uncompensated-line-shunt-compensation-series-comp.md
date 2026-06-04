---
title: "Transmission line compensation- Uncompensated line -shunt compensation - Series compensation -Phase angle control."
subject: "HVDC AND FACTS"
module: "Module 2: Introduction to FACTS:  Power flow in Power Systems – Voltage regulation and reactive power flow control in Power Systems "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b75"
status: "completed"
scrapedAt: "2026-05-23T16:41:02.400Z"
---
# Module 2: Introduction to FACTS - Power Flow, Voltage Regulation, and Reactive Power Control

This module introduces the fundamental concepts of power flow in power systems, the importance of voltage regulation, and the control of reactive power. We will explore how these aspects are influenced by transmission line characteristics and how Flexible AC Transmission Systems (FACTS) devices are employed to enhance power system performance.

---

## Topic 1: Transmission Line Compensation

### 1.1 Introduction to Power Flow in Power Systems

Power flow in a power system refers to the movement of electrical energy from generating stations to loads. Efficient power flow is crucial for maintaining system stability, reliability, and economic operation.

*   **Key Concepts:**
    *   **Active Power (P):** The power that performs useful work (measured in Watts, W, or Kilowatts, kW, Megawatts, MW).
    *   **Reactive Power (Q):** The power required to establish and maintain magnetic fields in inductive loads (like motors and transformers) and electric fields in capacitive loads. It does not perform useful work but is essential for the operation of AC circuits (measured in Volt-Amperes Reactive, VAR, or KiloVAR, kVAR, MegaVAR, MVAR).
    *   **Apparent Power (S):** The vector sum of active and reactive power (measured in Volt-Amperes, VA, or KiloVA, kVA, MegaVA, MVA). $S = P + jQ$.
    *   **Power Factor:** The cosine of the angle between voltage and current, indicating the efficiency of power utilization. A low power factor signifies high reactive power demand.

*   **Factors Affecting Power Flow:**
    *   **Transmission Line Impedance:** Primarily resistance (R), inductance (L), and capacitance (C). Inductance and capacitance are responsible for reactive power flow and voltage drop.
    *   **Voltage Levels:** Higher voltages lead to lower current for the same power, reducing $I^2R$ losses.
    *   **Load Characteristics:** Inductive loads require lagging reactive power, while capacitive loads provide leading reactive power.
    *   **Generator Excitation:** Controls the voltage and reactive power output of generators.
    *   **System Configuration:** The arrangement of transmission lines and substations.

*   **Importance of Voltage Regulation:**
    *   Maintaining voltage within acceptable limits is critical for the proper functioning of connected equipment (motors, lighting, electronics).
    *   Poor voltage regulation can lead to motor stalling, reduced efficiency, and equipment damage.
    *   Voltage is directly related to reactive power.

*   **Importance of Reactive Power Flow Control:**
    *   Reactive power flow determines the voltage profile of the system.
    *   Controlling reactive power allows for better voltage regulation.
    *   Minimizing reactive power flow reduces $I^2X$ losses in transmission lines.
    *   Ensuring sufficient reactive power is available to meet load demands.

*   **Reference:**
    *   *Understanding FACTS* by Hingorani and Gyugyi (Chapter 1: Introduction)
    *   *Reactive Power Control in Power systems* by T.J.E. Miller (Chapter 1: Introduction to Reactive Power)

### 1.2 Uncompensated Line

An uncompensated transmission line transmits power based on its inherent impedance (resistance and inductance).

*   **Characteristics:**
    *   **Inductive Reactance ($X_L$):** Dominant reactive component, causing a voltage drop and requiring lagging reactive power from the system.
    *   **Capacitance (C):** Present due to the electric field between conductors and between conductors and earth. At higher voltages and longer lines, its effect becomes significant, contributing to leading reactive power.
    *   **Resistance (R):** Causes active power loss ($I^2R$).

*   **Power Transfer Capability:**
    *   The maximum power that can be transmitted is limited by the line's impedance and the sending and receiving end voltages.
    *   For a purely inductive line (ignoring resistance), the maximum power transfer occurs when the phase difference between sending and receiving end voltages is 90 degrees.
    *   $P_{max} = \frac{V_S V_R}{X_L}$ (for a lossless, purely reactive line)
    *   As the line length increases, $X_L$ increases, reducing the maximum power transfer capability and causing a larger voltage drop.

*   **Voltage Profile:**
    *   Under heavy load conditions, the receiving end voltage is significantly lower than the sending end voltage. This is known as voltage drop.
    *   The voltage profile is typically a downward sloping curve from the sending end to the receiving end.

*   **Reactive Power Flow:**
    *   The line itself consumes reactive power due to its inductance.
    *   The reactive power supplied by the line capacitance can sometimes offset the inductive reactive power consumption, especially on long, lightly loaded lines (leading to a phenomenon called Ferranti effect, where the receiving end voltage can be higher than the sending end voltage).

*   **Limitations:**
    *   Limited power transfer capability.
    *   Poor voltage regulation, especially under heavy loads or long lines.
    *   High reactive power losses.
    *   Reduced system stability margins.

*   **Example:** A typical $400 \text{ kV}$ transmission line carrying $1000 \text{ MW}$ at a power factor of $0.9$ lagging. The inductance of the line will cause a voltage drop and consume reactive power.

*   **Highlight:** Uncompensated lines are simple but inefficient for transmitting large amounts of power over long distances due to their inherent impedance limitations.

---

## Topic 2: Shunt Compensation

Shunt compensation involves connecting reactive power compensation devices in parallel with the transmission line, typically at substations. These devices inject or absorb reactive power to control voltage and improve power transfer.

### 2.1 Purpose and Principle

*   **Purpose:**
    *   To improve voltage regulation by injecting reactive power near the load or absorbing excess reactive power.
    *   To increase the power transfer capability of the line.
    *   To enhance system stability.
    *   To reduce reactive power flow on the transmission lines, thereby reducing losses.

*   **Principle:**
    *   Shunt compensators act as controllable sources or sinks of reactive power.
    *   By injecting reactive power (e.g., using capacitors), the voltage at the busbar is boosted.
    *   By absorbing reactive power (e.g., using reactors), the voltage at the busbar is reduced.
    *   For power transfer improvement, compensation is typically applied at the midpoint of a long line to reduce the effective impedance.

### 2.2 Types of Shunt Compensators

#### 2.2.1 Shunt Capacitors

*   **Description:** Fixed capacitors connected in parallel to the line. They provide a constant amount of leading reactive power (or absorb lagging reactive power).
*   **Operation:** When connected, they inject reactive power, tending to increase the voltage.
*   **Advantages:** Simple, inexpensive, low losses.
*   **Disadvantages:** Provide fixed compensation, not controllable. Can lead to over-voltage at light load conditions. Can cause transient over-voltages and harmonic resonance.
*   **Application:** Used to improve power factor at the load end and to provide voltage support.

#### 2.2.2 Shunt Reactors

*   **Description:** Inductors connected in parallel to the line. They absorb reactive power, tending to decrease the voltage.
*   **Operation:** When connected, they absorb lagging reactive power.
*   **Advantages:** Simple, effective in controlling over-voltages.
*   **Disadvantages:** Absorb some active power loss, increase system inductance, not useful for voltage support under heavy load conditions.
*   **Application:** Used to compensate for line capacitance, especially on lightly loaded long lines to prevent the Ferranti effect and control over-voltages.

#### 2.2.3 Thyristor Controlled Reactor (TCR)

*   **Description:** A reactor whose inductive current is controlled by thyristors. Thyristors are switched on and off at specific points in the AC cycle, effectively controlling the amount of reactive power absorbed.
*   **Operation:** Offers continuously variable inductive compensation. By controlling the firing angle of the thyristors, the reactive power absorbed by the reactor can be varied.
*   **Advantages:** Fast and continuous control of reactive power, improved voltage regulation.
*   **Disadvantages:** Generates harmonics that require filtering, has some switching losses.
*   **Reference:** *HVDC and FACTS Controllers* by Vijay K Sood (Chapter 4: Thyristor Controlled Series Compensators - TCR section)

#### 2.2.4 Thyristor Switched Capacitor (TSC)

*   **Description:** A capacitor bank whose connection to the line is controlled by thyristor switches.
*   **Operation:** Provides stepped control of capacitive reactive power. Thyristors switch the capacitor bank ON or OFF instantaneously without generating harmonics.
*   **Advantages:** Fast switching, no harmonics generated, efficient.
*   **Disadvantages:** Provides discrete levels of compensation, not continuous.
*   **Reference:** *HVDC and FACTS Controllers* by Vijay K Sood (Chapter 4: Thyristor Controlled Series Compensators - TSC section)

#### 2.2.5 Static Var Compensator (SVC)

*   **Description:** A FACTS device that uses thyristor-controlled reactors (TCR) and/or thyristor-switched capacitors (TSC) to provide variable shunt compensation.
*   **Operation:** By combining TCRs and TSCs, SVCs can provide both inductive and capacitive compensation in a controlled manner.
*   **Advantages:** Fast response, continuous reactive power control, improved voltage regulation, increased power transfer capability, enhanced system stability.
*   **Disadvantages:** Harmonics generated by TCRs require filters, relatively complex.
*   **Example:** An SVC installed at the midpoint of a long transmission line can inject reactive power during heavy load conditions to support the voltage and reduce reactive power flow, thereby increasing the line's power transfer capacity.
*   **Reference:** *Understanding FACTS* by Hingorani and Gyugyi (Chapter 3: SVC)
*   **Course Outcome Alignment:** CO4, CO5

### 2.3 Application in Power Flow and Voltage Regulation

*   **Voltage Support:** SVCs can maintain the voltage at a specific busbar within a narrow range by adjusting their reactive power output in response to voltage variations.
*   **Power Transfer Enhancement:** By compensating for line reactance, SVCs effectively reduce the line's impedance, allowing more power to be transmitted.
*   **Stability Improvement:** By controlling voltage and reactive power, SVCs can improve the transient stability of the power system, allowing it to withstand disturbances.
*   **Load Balancing:** SVCs can help balance reactive power demand across different parts of the network.

---

## Topic 3: Series Compensation

Series compensation involves connecting reactive power compensation devices in series with the transmission line. These devices aim to reduce the effective series impedance of the line.

### 3.1 Purpose and Principle

*   **Purpose:**
    *   To increase the power transfer capability of a transmission line by reducing its effective reactance.
    *   To improve the stability of the power system by increasing the natural power transfer limit.
    *   To improve voltage regulation by reducing voltage drop due to line reactance.

*   **Principle:**
    *   Series compensation is achieved by inserting series capacitors in the transmission line.
    *   Capacitors introduce a leading reactance ($X_C$), which cancels out a portion of the line's inductive reactance ($X_L$).
    *   The effective series reactance of the compensated line becomes $X_{eff} = X_L - X_C$.
    *   For a line with series compensation $C$, the maximum power transfer capability becomes $P_{max} = \frac{V_S V_R}{X_L - X_C}$. This value is higher than that of an uncompensated line.

### 3.2 Types of Series Compensators

#### 3.2.1 Fixed Series Capacitors (FSC)

*   **Description:** Capacitor banks connected in series with the transmission line.
*   **Operation:** Provide a fixed amount of series capacitive compensation.
*   **Advantages:** Simple, low cost, no active control losses.
*   **Disadvantages:** Fixed compensation, cannot adapt to changing system conditions. Can cause sub-synchronous resonance (SSR) if not carefully designed. Can lead to over-voltages across the capacitor terminals during light load conditions.
*   **Application:** Used for improving power transfer on lines where load conditions are relatively stable.

#### 3.2.2 Thyristor Controlled Series Capacitor (TCSC)

*   **Description:** A series capacitor bank whose capacitive reactance is controlled by thyristor-switched inductors and/or by varying the conduction angle of thyristors to bypass parts of the capacitor.
*   **Operation:** Offers a continuously variable range of series compensation. By controlling the thyristor firing angles, the effective capacitive reactance can be adjusted.
*   **Advantages:** Rapid and continuous control of series compensation, improved power transfer, enhanced stability, voltage regulation. Can be used to damp power oscillations and provide protection against line faults.
*   **Disadvantages:** Complex control, generation of harmonics, potential for SSR.
*   **Example:** A TCSC installed on a long transmission line can increase its power transfer capacity and improve its transient stability by quickly adjusting the compensation level during disturbances.
*   **Reference:** *HVDC and FACTS Controllers* by Vijay K Sood (Chapter 4: Thyristor Controlled Series Compensators)
*   **Course Outcome Alignment:** CO3, CO5

#### 3.2.3 Thyristor Controlled Power Switches (TCPS)

*   **Description:** Devices that can switch a series capacitor into or out of the circuit very rapidly using thyristors.
*   **Operation:** Provides switched compensation.
*   **Advantages:** Fast switching, can be used for protection.
*   **Disadvantages:** Not continuously variable.

#### 3.2.4 Unified Power Flow Controller (UPFC)

*   **Description:** A more advanced FACTS device that combines both series and shunt compensation capabilities using voltage-source converters (VSCs). The series converter injects a controllable voltage and reactive power in series with the line, while the shunt converter injects controllable current into the shunt bus.
*   **Operation:** The UPFC can control voltage, impedance, and phase angle, thereby independently controlling active and reactive power flow through a transmission line.
*   **Advantages:** The most versatile FACTS device, capable of controlling all three parameters of power flow (voltage, impedance, and phase angle).
*   **Disadvantages:** Very complex and expensive.
*   **Reference:** *Understanding FACTS* by Hingorani and Gyugyi (Chapter 5: Unified Power Flow Controller)
*   **Course Outcome Alignment:** CO3, CO5, CO6

### 3.3 Application in Power Flow and Voltage Regulation

*   **Power Transfer Enhancement:** Series capacitors reduce the effective line impedance, increasing the maximum power that can be transmitted.
*   **Stability Improvement:** By increasing the power transfer capability and reducing the impedance, series compensation improves the system's ability to withstand disturbances and remain stable.
*   **Voltage Drop Reduction:** The reduction in effective line reactance leads to a smaller voltage drop for a given amount of power transfer.
*   **Load Flow Control:** By varying the series compensation, the power flow through different parallel lines can be balanced.

---

## Topic 4: Phase Angle Control

Phase angle control is a method used to regulate power flow by altering the phase angle difference between the voltage at the sending end and the receiving end of a transmission line.

### 4.1 Purpose and Principle

*   **Purpose:**
    *   To control the magnitude and direction of active power flow in a transmission line.
    *   To balance power flow in parallel transmission paths.
    *   To improve system stability.

*   **Principle:**
    *   The active power flow in a transmission line is primarily determined by the voltage magnitudes and the phase angle difference between the sending and receiving end voltages.
    *   For a line with impedance $Z = R + jX$, the active power transferred is approximately $P = \frac{V_S V_R}{Z} \cos(\theta - \phi) - \frac{V_S^2}{Z} \cos(\phi)$, where $\theta$ is the phase angle difference and $\phi$ is the impedance angle.
    *   By controlling the phase angle difference $\theta$, the active power flow can be regulated.
    *   Phase angle controllers inject a voltage that is phase-shifted with respect to the line voltage, effectively altering the phase angle difference between the busbars.

### 4.2 Devices for Phase Angle Control

#### 4.2.1 Phase Shifting Transformers (PST)

*   **Description:** Conventional transformers with tap-changing and phase-shifting capabilities. They are connected in series with the transmission line.
*   **Operation:** PSTs can change the voltage magnitude and introduce a phase shift between the primary and secondary voltages. This phase shift directly influences the power flow.
*   **Advantages:** Relatively simple and well-established technology.
*   **Disadvantages:** Mechanical tap changing is slow and can cause disturbances. Large losses. Limited phase shift capability.
*   **Reference:** *HVDC and FACTS Controllers* by Vijay K Sood (Chapter 5: Phase Shifting Transformers)

#### 4.2.2 Thyristor Controlled Phase Shifting Transformers (TCPST)

*   **Description:** PSTs with their tap changers replaced by thyristor switches. This allows for rapid and continuous control of phase shift.
*   **Operation:** Thyristors control the voltage and phase angle injected into the line.
*   **Advantages:** Fast response, continuous control of phase angle, improved power flow control, enhanced stability.
*   **Disadvantages:** Higher cost and complexity compared to conventional PSTs.
*   **Reference:** *HVDC and FACTS Controllers* by Vijay K Sood (Chapter 5: Thyristor Controlled Phase Shifting Transformers)

#### 4.2.3 Unified Power Flow Controller (UPFC)

*   **Description:** As mentioned earlier, UPFC is a versatile FACTS device that can control voltage, impedance, and phase angle. The series converter of UPFC directly injects a controllable voltage with variable magnitude and phase angle, thus providing precise phase angle control and direct active power flow regulation.
*   **Advantages:** Unprecedented control over power flow.
*   **Reference:** *Understanding FACTS* by Hingorani and Gyugyi (Chapter 5: Unified Power Flow Controller)
*   **Course Outcome Alignment:** CO5, CO6

### 4.3 Application in Power Flow and Voltage Regulation

*   **Power Flow Regulation:** TCPSTs and UPFCs can precisely control the amount of active power flowing through a specific line, allowing for efficient utilization of transmission corridors and optimal dispatch of generation.
*   **Loop Flow Control:** In networks with multiple parallel paths, TCPSTs can be used to prevent or control undesirable loop flows, improving system efficiency and stability.
*   **Stability Enhancement:** By actively controlling power flow during transient disturbances, phase angle controllers can help maintain system synchronism and improve transient stability.

---

## Summary of Learning Outcomes and Course Outcomes Alignment

This module has covered:

*   **Learning Outcomes:**
    *   **Transmission line compensation:** Understanding the need and methods.
    *   **Uncompensated line:** Characteristics and limitations.
    *   **Shunt compensation:** Principles, types (SVCs), and applications in voltage regulation and power flow.
    *   **Series compensation:** Principles, types (TCSC), and applications in power transfer and stability.
    *   **Phase angle control:** Principles, devices (PST, TCPST, UPFC), and applications in power flow regulation.

*   **Course Outcomes Alignment:**
    *   **CO1: Analyse current source and voltage source converters for HVDC systems (Knowledge Level: K4)** - While this module focuses on FACTS, the underlying converter technologies (VSC in UPFC) are shared with HVDC. Further modules will elaborate.
    *   **CO2: Describe the control schemes for HVDC systems (Knowledge Level: K2)** - Concepts of reactive power control and voltage regulation discussed here are fundamental to HVDC control.
    *   **CO3: Explain the need for FACTS devices (Knowledge Level: K2)** - The limitations of uncompensated lines and the benefits of compensation (voltage support, power transfer, stability) clearly highlight the need for FACTS.
    *   **CO4: Classify reactive power compensators in power system (Knowledge Level: K2)** - Shunt compensators like SVCs, and their components TSC and TCR, have been classified.
    *   **CO5: Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)** - SVCs (shunt) and TCSC/UPFC (series) have been discussed in terms of their applications.
    *   **CO6: Explain the dynamic interconnection mechanisms of FACTS devices (Knowledge Level: K2)** - The controlled nature of devices like SVC, TCSC, TCPST, and UPFC, and their interaction with the power system, touch upon dynamic interconnection.

---

## Important Points to Remember

*   **Reactive Power is Key to Voltage:** Voltage levels in AC systems are intrinsically linked to the flow of reactive power.
*   **Uncompensated Lines Have Limits:** Their power transfer capability and voltage regulation are limited by their inherent impedance.
*   **Compensation Enhances Performance:** Both shunt and series compensation improve voltage, power transfer, and stability.
*   **SVCs for Voltage Control:** Shunt compensation, particularly SVCs, excel at dynamic voltage support.
*   **Series Compensation for Reactance Reduction:** Series compensation, like TCSC, directly reduces line reactance for increased power transfer.
*   **Phase Angle Control for Power Flow Management:** Devices like TCPST and UPFC offer precise control over active power flow.
*   **FACTS Devices Offer Flexibility:** They provide dynamic, controllable compensation, overcoming the limitations of passive compensation methods.
*   **Harmonics are a Concern:** Thyristor-controlled devices can generate harmonics, requiring filtering.
*   **UPFC is the Most Advanced:** It offers simultaneous control of voltage, impedance, and phase angle.

---

## Practice Questions

**Short Answer Questions:**

1.  What is the primary role of reactive power in an AC power system? (CO4)
2.  List two limitations of an uncompensated transmission line. (CO3)
3.  Differentiate between shunt and series compensation in terms of their primary objective. (CO5)
4.  What is the fundamental principle behind phase angle control for power flow regulation? (CO3)
5.  Name one type of shunt FACTS device used for voltage regulation. (CO4)

**Numerical/Application Questions:**

6.  A transmission line has a reactance of $X_L = 50 \Omega$. If a fixed series capacitor of $X_C = 20 \Omega$ is installed, what is the new effective reactance of the line? If the sending and receiving end voltages are $400 \text{ kV}$ and $380 \text{ kV}$ respectively, how does the maximum power transfer capability change compared to an uncompensated line (assuming $V_S \approx V_R$ and neglecting resistance)? (CO5)

    *   **Answer:**
        *   Effective reactance $X_{eff} = X_L - X_C = 50 \Omega - 20 \Omega = 30 \Omega$.
        *   For an uncompensated line (approx): $P_{max,uncomp} \approx \frac{V_S V_R}{X_L} = \frac{400 \times 380}{50} \times 10^6 = 3.04 \text{ GW}$.
        *   For a compensated line (approx): $P_{max,comp} \approx \frac{V_S V_R}{X_{eff}} = \frac{400 \times 380}{30} \times 10^6 = 5.067 \text{ GW}$.
        *   The maximum power transfer capability increases by approximately $67\%$.

7.  Explain how a Thyristor Controlled Reactor (TCR) can be used to maintain the voltage at a substation busbar during fluctuations in load. (CO4, CO3)

    *   **Answer:** A TCR absorbs reactive power. When the voltage at the busbar starts to drop (due to increased load demanding more reactive power), the TCR's firing angle can be adjusted to reduce its reactive power absorption (or even inject reactive power if a capacitive component is added, like in an SVC). Conversely, if the voltage rises (due to light load conditions), the TCR's firing angle is advanced to absorb more reactive power, thus lowering the voltage. This dynamic control helps maintain the voltage within a desired range.

8.  Describe the role of a Unified Power Flow Controller (UPFC) in managing power flow in a meshed network with multiple parallel lines. (CO5, CO6)

    *   **Answer:** A UPFC can independently control the voltage at its terminal bus, the series impedance of the line it's connected to, and the phase angle between the sending and receiving ends. In a meshed network, this allows the UPFC to:
        *   **Balance Power Flow:** Shift power from heavily loaded lines to underutilized lines, improving overall network efficiency and preventing overloads.
        *   **Enhance Stability:** By rapidly adjusting power flow during disturbances, it can help maintain system synchronism.
        *   **Control Voltage:** Maintain voltage profiles at specific substations.
        *   **Damp Oscillations:** Its dynamic control can help suppress power system oscillations.

---
This module provides a foundational understanding of the challenges in power transmission and how FACTS devices offer flexible solutions. The following modules will delve deeper into specific FACTS controllers and their converter technologies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
