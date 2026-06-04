---
title: "Introduction to FACTS:  Power flow in Power Systems – Voltage regulation and reactive power flow control in Power Systems - Power flow control -Constraints of maximum transmission line loading - Needs and emergence of FACTS - Types of FACTS controllers-Advantages and disadvantages"
subject: "HVDC AND FACTS"
module: "Module 2: Introduction to FACTS:  Power flow in Power Systems – Voltage regulation and reactive power flow control in Power Systems "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b74"
status: "completed"
scrapedAt: "2026-05-23T16:41:00.980Z"
---
# HVDC and FACTS: Module 2 - Introduction to FACTS

## Topic: Power Flow Control, Constraints, Needs, Types, Advantages & Disadvantages of FACTS

This module introduces the fundamental concepts of Flexible AC Transmission Systems (FACTS), focusing on their role in managing power flow, voltage, and reactive power within power systems. We will explore the limitations of conventional transmission lines and the driving forces behind the development of FACTS devices.

---

### 1. Power Flow in Power Systems

**Key Concepts:**

*   **Power Flow:** The movement of electrical energy from generating sources to loads through transmission and distribution networks.
*   **Real Power (P):** The power that performs useful work (e.g., rotating motors, lighting). Measured in Watts (W) or Kilowatts (kW), Megawatts (MW).
*   **Reactive Power (Q):** The power that establishes and maintains electric and magnetic fields. Essential for voltage support and for the operation of inductive and capacitive loads. Measured in Volt-Amperes Reactive (VAR), KiloVAR (kVAR), MegaVAR (MVAR).
*   **Apparent Power (S):** The vector sum of real and reactive power. It represents the total power that must be transmitted. $S = P + jQ$. Measured in Volt-Amperes (VA), KiloVolt-Amperes (kVA), MegaVolt-Amperes (MVA).
*   **Power Factor (PF):** The cosine of the angle between voltage and current. A low power factor indicates a significant amount of reactive power is being drawn. $PF = \cos(\theta) = P/S$.

**How Power Flows:**

Power flows from areas of higher voltage magnitude to lower voltage magnitude, and from areas of higher phase angle to lower phase angle. The magnitude of power flow is directly proportional to the voltage magnitudes and the sine of the angle difference between the buses, and inversely proportional to the line impedance.

The simplified power flow equation for a transmission line between two buses $i$ and $j$ is:

$P_{ij} = \frac{|V_i||V_j|}{X_{ij}} \sin(\delta_i - \delta_j)$

Where:
*   $P_{ij}$: Real power flow from bus $i$ to bus $j$.
*   $|V_i|, |V_j|$: Voltage magnitudes at buses $i$ and $j$.
*   $X_{ij}$: Reactance of the transmission line between $i$ and $j$.
*   $\delta_i, \delta_j$: Voltage phase angles at buses $i$ and $j$.

**Learning Outcome Addressed:** Implicitly covered as the foundation for why FACTS devices are needed.

**Course Outcome Alignment:** CO1, CO2, CO3, CO4, CO5, CO6 (all foundational to understanding the application of FACTS).

---

### 2. Voltage Regulation and Reactive Power Flow Control in Power Systems

**Key Concepts:**

*   **Voltage Regulation:** The ability of the power system to maintain voltage magnitudes within acceptable limits at all buses. Poor voltage regulation can lead to reduced system performance, equipment damage, and instability.
*   **Reactive Power Flow Control:** Managing the flow of reactive power in the system is crucial for voltage control.
    *   **Inductive loads (motors, transformers)** consume reactive power ($Q$ is negative for the load, positive for the source). This causes voltage to drop.
    *   **Capacitive loads (many electronic devices)** supply reactive power ($Q$ is positive for the load, negative for the source). This can cause voltage to rise.
*   **Voltage Drop:** In AC systems, voltage drop occurs due to the impedance of transmission lines and transformers. This drop is influenced by both real and reactive power flow.
*   **Reactive Power Compensation:** Injecting or absorbing reactive power at strategic locations in the system to maintain voltage levels.

**How Voltage and Reactive Power are Related:**

*   **Increasing reactive power injection** generally leads to an **increase in voltage magnitude**.
*   **Decreasing reactive power injection** (or increasing absorption) generally leads to a **decrease in voltage magnitude**.

**Example:**
Consider a transmission line carrying a significant amount of real power. If the line is lightly loaded in terms of reactive power, the voltage at the receiving end might be lower than desired due to line inductance. Injecting capacitive reactive power at the receiving end can improve the voltage profile.

**Learning Outcome Addressed:** This section directly addresses the core concepts of voltage regulation and reactive power control, forming the basis for understanding FACTS.

**Course Outcome Alignment:** CO3 (Explain the need for FACTS devices), CO4 (Classify reactive power compensators), CO5 (Interpret series and shunt connected FACTS devices).

---

### 3. Power Flow Control

**Key Concepts:**

*   **Power Flow Control:** The ability to regulate the amount of real power flowing through a transmission line.
*   **Control Parameters:**
    *   **Voltage Magnitude:** By controlling voltage at the ends of a line, the real power flow can be influenced.
    *   **Phase Angle Difference:** By controlling the phase angle difference between buses, the real power flow can be significantly altered (refer to the power flow equation $P_{ij} \propto \sin(\delta_i - \delta_j)$).
    *   **Line Impedance:** By effectively varying the series impedance of the line, the power flow can be controlled.

**Methods of Power Flow Control:**

1.  **Conventional Methods:**
    *   **Tap-changing Transformers:** Adjust voltage magnitudes at busbars, indirectly affecting power flow.
    *   **Phase Shifting Transformers (PSTs):** Directly control the phase angle difference between two buses, allowing for precise real power flow control. However, they are bulky, expensive, and introduce losses.
    *   **Switched Capacitor Banks & Reactors:** Provide discrete steps of reactive power compensation, impacting voltage and thus indirectly influencing power flow.

2.  **FACTS Devices:**
    *   Provide **continuous and rapid control** over voltage magnitude, phase angle, and/or line impedance.

**Learning Outcome Addressed:** Focuses on the objective of power flow control, which FACTS devices aim to achieve.

**Course Outcome Alignment:** CO3 (Explain the need for FACTS devices), CO5 (Interpret series and shunt connected FACTS devices).

---

### 4. Constraints of Maximum Transmission Line Loading

**Key Concepts:**

*   **Thermal Limit:** The maximum current a transmission line conductor can carry without exceeding its temperature rating. Exceeding this limit can cause conductor sag, damage to insulation, and potential conductor failure.
*   **Voltage Limit:** Maintaining voltage within acceptable operational ranges. If voltage drops too low, it can lead to instability and equipment malfunction. If it rises too high, it can damage equipment.
*   **Stability Limit:**
    *   **Steady-State Stability:** The ability of the system to remain in equilibrium after a small disturbance. Limited by the maximum power transfer capability of the system.
    *   **Transient Stability:** The ability of the system to remain in synchronism after a large disturbance (e.g., a fault). Determined by the inertia of the machines and the impedance of the network.
*   **Short-Circuit Limit:** The ability of the system to withstand and clear fault currents. High power flow can increase short-circuit levels.

**Why these are Constraints:**

*   **Thermal Limit:** Directly limits the current carrying capacity.
*   **Voltage Limit:** Affects the ability to deliver power efficiently and reliably.
*   **Stability Limit:** Crucial for maintaining system integrity. Exceeding the stability limit can lead to cascading failures and blackouts.

**How Constraints Affect Power Flow:**

In a conventional power system, the actual power flow on a transmission line is often limited by these constraints, even if the line itself is physically capable of carrying more power. For example, a line might have a thermal capacity of 500 MW, but due to voltage limitations or stability concerns, it might only be operated at 300 MW. This leads to underutilization of the transmission infrastructure.

**Example:**
A long, lightly loaded transmission line can experience voltage rise at the receiving end due to line capacitance. This voltage rise can be problematic and limit the power transfer. Similarly, a line heavily loaded with real power might have a large phase angle difference, pushing it towards its stability limit.

**Learning Outcome Addressed:** This section explains the limitations that necessitate the use of advanced control technologies like FACTS.

**Course Outcome Alignment:** CO3 (Explain the need for FACTS devices).

---

### 5. Needs and Emergence of FACTS

**Needs Driving FACTS Development:**

*   **Increased Load Growth:** Demand for electricity continues to rise, straining existing transmission infrastructure.
*   **Untransmittable Power:** The inability to transfer power from available generation sources (e.g., remote hydro or wind farms) to load centers due to transmission network limitations.
*   **Aging Infrastructure:** Conventional transmission lines have limitations that are difficult and expensive to overcome with traditional upgrades (e.g., building new lines).
*   **Deregulation and Competition:** Power markets require more flexible and efficient operation of the grid. Utilities need to be able to dispatch power from the most economical sources, irrespective of traditional network constraints.
*   **Integration of Renewable Energy Sources:** Intermittent and distributed nature of renewables (wind, solar) requires enhanced grid controllability.
*   **Improved System Stability and Reliability:** Ability to prevent voltage collapse, power oscillations, and cascading failures.
*   **Reduction of Transmission Losses:** Optimizing power flow can minimize $I^2R$ losses.
*   **Efficient Utilization of Existing Assets:** FACTS devices allow for "upgrading" existing lines without physically replacing them, making better use of invested capital.

**Emergence of FACTS:**

The concept of FACTS was first introduced by Dr. Eric Uhlmann in 1971 and further developed by the IEEE Power Engineering Society. The core idea was to use power electronics to provide dynamic and flexible control of transmission lines, overcoming the limitations of fixed or mechanically switched devices. The advent of high-power semiconductor devices (like GTOs, IGBTs) made these advanced controllers technically and economically feasible.

**Key Milestones:**

*   **1970s-1980s:** Initial research and development of static var compensators (SVCs) – considered the first generation of FACTS. SVCs primarily control reactive power and voltage.
*   **1990s onwards:** Development of more advanced FACTS controllers that can control both real and reactive power, offering much greater flexibility. These include STATCOMs, SSSCs, and UPFCs.

**Learning Outcome Addressed:** This section directly addresses the "why" behind FACTS.

**Course Outcome Alignment:** CO3 (Explain the need for FACTS devices).

---

### 6. Types of FACTS Controllers

FACTS controllers are broadly categorized based on their connection to the transmission line:

**A. Shunt Connected FACTS Controllers:**

These devices are connected in parallel with the transmission line. They primarily inject or absorb reactive power, thereby controlling the voltage at their connection point.

1.  **Static Var Compensator (SVC):**
    *   **Description:** The earliest form of FACTS. Consists of thyristor-controlled reactors (TCRs), thyristor-switched capacitors (TSCs), and/or fixed capacitors/reactors.
    *   **Function:** Provides variable reactive power compensation, typically inductive or capacitive.
    *   **Control:** Thyristor firing angle control for TCRs and switching for TSCs.
    *   **Characteristics:** Provides stepped or continuous reactive power compensation.
    *   **Referenced in:** Sood (Chapter 3), Miller (Chapter 4), Hingorani & Gyugyi (Chapter 2).

2.  **STATCOM (Static Synchronous Compensator):**
    *   **Description:** A voltage source converter (VSC) based device. It generates a sinusoidal voltage at the fundamental frequency with controllable magnitude and phase.
    *   **Function:** Generates or absorbs reactive power by controlling the magnitude of its output voltage relative to the bus voltage. Can also inject real power for dynamic voltage control during transients.
    *   **Control:** Pulse Width Modulation (PWM) control of the VSC.
    *   **Characteristics:** Faster response, wider operating range, and lower harmonic generation compared to SVCs. Can provide voltage support even under weak grid conditions.
    *   **Referenced in:** Sood (Chapter 4), Hingorani & Gyugyi (Chapter 3), Song & Jones (Chapter 6).

**B. Series Connected FACTS Controllers:**

These devices are inserted in series with the transmission line. They primarily inject a voltage or control the series impedance of the line, thereby controlling real power flow.

1.  **Thyristor Controlled Series Capacitor (TCSC):**
    *   **Description:** A modified series capacitor bank where the capacitor is shunted by a thyristor-controlled reactor.
    *   **Function:** Provides variable series compensation. It can be used to regulate power flow and improve stability.
    *   **Control:** Thyristor firing angle control. By varying the firing angle, the effective inductive reactance of the parallel combination can be controlled, thus varying the net capacitive reactance.
    *   **Characteristics:** Offers a range of capacitive reactance from fixed capacitor to inductive reactance.
    *   **Referenced in:** Sood (Chapter 5), Hingorani & Gyugyi (Chapter 4), Song & Jones (Chapter 4).

2.  **Static Synchronous Series Compensator (SSSC):**
    *   **Description:** A VSC-based FACTS device connected in series with the line. It injects a voltage magnitude and phase-shifted relative to the line current.
    *   **Function:** Primarily controls real power flow by injecting a voltage in series. It can also provide voltage support.
    *   **Control:** VSC control to generate the required series voltage.
    *   **Characteristics:** Provides rapid and continuous control of series impedance and power flow. Can be operated to inject leading or lagging reactive power.
    *   **Referenced in:** Sood (Chapter 6), Hingorani & Gyugyi (Chapter 5), Song & Jones (Chapter 7).

**C. Combined Shunt and Series Connected FACTS Controllers:**

These devices combine the capabilities of both shunt and series controllers, offering more comprehensive control.

1.  **Unified Power Flow Controller (UPFC):**
    *   **Description:** The most versatile FACTS device. Consists of a STATCOM and an SSSC connected by a common DC link. The STATCOM provides shunt compensation, and the SSSC provides series compensation.
    *   **Function:** Can independently control voltage magnitude, phase angle, and line impedance. This allows for simultaneous control of real and reactive power flow.
    *   **Control:** Coordinated control of the shunt and series converters.
    *   **Characteristics:** Offers the highest degree of flexibility and control over power system parameters.
    *   **Referenced in:** Sood (Chapter 8), Hingorani & Gyugyi (Chapter 6), Song & Jones (Chapter 9).

2.  **Interline Power Flow Controller (IPFC):**
    *   **Description:** A generalization of the SSSC. It comprises multiple SSSC units operating with a common DC link, connected to different lines of a multi-line system.
    *   **Function:** Can inject series voltage into multiple lines to balance power flow or manage congestion.
    *   **Control:** Coordinated control of multiple SSSC units.
    *   **Characteristics:** Enables optimal power flow across multiple interconnected lines.
    *   **Referenced in:** Sood (Chapter 9), Hingorani & Gyugyi (Chapter 7).

**Learning Outcome Addressed:** Classifying and understanding the different types of FACTS devices.

**Course Outcome Alignment:** CO4 (Classify reactive power compensators in power system - SVC, STATCOM are primarily reactive), CO5 (Interpret series and shunt connected FACTS devices for power system applications - TCSC, SSSC, STATCOM, UPFC).

---

### 7. Advantages and Disadvantages of FACTS

**Advantages:**

*   **Enhanced Power Transfer Capability:** Can increase the amount of power that can be transmitted through existing lines, often closer to their thermal limits.
*   **Improved Voltage Stability:** Provides rapid voltage support and can prevent voltage collapse.
*   **Increased System Stability:** Dampens power oscillations and improves transient stability.
*   **Controllable Power Flow:** Enables dynamic and precise control of real power flow, optimizing network utilization and dispatch.
*   **Reduced Transmission Losses:** By facilitating optimal power flow, FACTS can minimize $I^2R$ losses.
*   **Flexibility and Dynamic Response:** React quickly to system disturbances, unlike traditional devices.
*   **Congestion Management:** Can reroute power to avoid overloaded lines.
*   **Integration of Renewables:** Facilitates the integration of intermittent renewable energy sources by improving grid flexibility and control.
*   **Minimal Environmental Impact (compared to new lines):** Upgrading existing lines with FACTS is often less disruptive than building new transmission corridors.
*   **Reduced need for staged upgrades:** Dynamic control means the system can adapt as load and generation patterns change.

**Disadvantages:**

*   **Cost:** FACTS devices, especially advanced ones like UPFC and SSSC, can be expensive to install.
*   **Complexity:** Require sophisticated control systems and specialized maintenance.
*   **Harmonics:** Power electronic converters can generate harmonic currents, requiring filtering.
*   **Losses:** While they can reduce system losses, FACTS devices themselves introduce some losses in their power electronic converters.
*   **Reliability and Maintenance:** Power electronic components have a finite lifespan and require regular maintenance. Failures can impact system operation.
*   **Control System Tuning:** Proper tuning of control parameters is critical for optimal performance and to avoid instability.
*   **Potential for Interactions:** Interaction between multiple FACTS devices or with other control systems needs careful consideration.

**Learning Outcome Addressed:** Provides a balanced view of the benefits and drawbacks of adopting FACTS technology.

**Course Outcome Alignment:** CO3 (Explain the need for FACTS devices - the advantages justify the need), CO5 (Interpret series and shunt connected FACTS devices for power system applications - understanding advantages/disadvantages is part of interpretation).

---

### Important Points to Remember

*   **Reactive Power is Key to Voltage:** Controlling reactive power is the primary mechanism for controlling voltage in AC systems.
*   **Phase Angle Controls Real Power:** Manipulating the phase angle difference between buses is a direct way to control real power flow.
*   **FACTS Bridge the Gap:** FACTS devices use power electronics to provide dynamic control that was not possible with conventional passive or mechanically switched equipment.
*   **SVC vs. STATCOM:** SVCs are thyristristor-controlled reactive power compensators, while STATCOMs are VSC-based and can provide faster, more flexible reactive and even some real power support.
*   **Series FACTS Control Impedance/Voltage:** TCSC and SSSC control the effective impedance of a line, thereby influencing power flow and stability.
*   **UPFC is the Ultimate Controller:** The UPFC offers combined shunt and series compensation, providing comprehensive control over voltage, real power, and reactive power.
*   **FACTS are Enablers:** They enable greater utilization of the existing grid, integration of renewables, and improved system reliability.

---

### Practice Questions and Answers

**Question 1:**
Explain the relationship between real power flow, voltage magnitude difference, phase angle difference, and transmission line reactance. (K2)

**Answer:**
Real power flow ($P_{ij}$) in a transmission line is directly proportional to the product of the voltage magnitudes at the sending ($|V_i|$) and receiving ($|V_j|$) ends, the sine of the phase angle difference ($\sin(\delta_i - \delta_j)$), and inversely proportional to the line reactance ($X_{ij}$). The simplified equation is $P_{ij} = \frac{|V_i||V_j|}{X_{ij}} \sin(\delta_i - \delta_j)$. This means that increasing the voltage difference or phase angle difference (within limits) increases real power flow, while higher reactance reduces it.

**Question 2:**
What are the main limitations that prevent conventional transmission lines from being fully utilized? (K2)

**Answer:**
The main limitations are:
*   **Thermal Limit:** The maximum current the conductor can carry without overheating.
*   **Voltage Limit:** Maintaining voltage within acceptable operating ranges at all buses.
*   **Stability Limit:** The maximum power transfer capability before the system loses synchronism, particularly transient stability after disturbances.
*   **Short-circuit Limit:** The system's ability to handle fault currents.

**Question 3:**
Describe the primary function of a STATCOM and how it differs from an SVC. (K2)

**Answer:**
A STATCOM (Static Synchronous Compensator) is a VSC-based FACTS device that generates a controllable voltage in phase with the bus voltage. It primarily injects or absorbs reactive power to regulate bus voltage. It differs from an SVC (Static Var Compensator), which is a thyristor-controlled reactive power compensator using TCRs and TSCs. STATCOMs offer a faster response, a wider operating range, and better performance under weak grid conditions compared to SVCs.

**Question 4:**
What is the main purpose of a series-connected FACTS device like an SSSC? (K2)

**Answer:**
The main purpose of an SSSC (Static Synchronous Series Compensator) is to control the real power flow through a transmission line by injecting a controllable voltage in series with the line. This is achieved by effectively varying the line's impedance. It can also contribute to voltage support.

**Question 5:**
List three significant advantages of using FACTS devices in a power system. (K2)

**Answer:**
Three significant advantages are:
1.  **Enhanced Power Transfer Capability:** Allows transmission lines to carry more power closer to their thermal limits.
2.  **Improved System Stability:** Damps oscillations and enhances transient stability.
3.  **Controllable Power Flow:** Enables precise and dynamic control of real power, improving network utilization and congestion management.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading/References

*   **HVDC and FACTS Controllers by Vijay K Sood (Springer, 2004):** Excellent coverage of FACTS principles, types, and applications.
*   **Understanding FACTS by N.G. Hingorani and L.Gyugyi (IEEE Press, 2000):** A foundational text providing a clear understanding of the concepts behind FACTS.
*   **Flexible AC Transmission systems (FACTS) by Y.H. Song and A.T.Jones (IEEE Press, 1999):** Detailed treatment of various FACTS devices and their control.
*   **Reactive Power control in Power systems by T.J.E. Miller (John Wiley, 1982):** Provides historical context and fundamental principles of reactive power compensation, leading into the need for FACTS.
*   **FACTS Controllers in Power Transmission and distribution by K.R.Padiyar (New age international Publishers, 2007):** Comprehensive coverage with a focus on controller design and applications.

This concludes the notes for Module 2, Topic 1. The next modules will delve deeper into specific FACTS device configurations and their control strategies.