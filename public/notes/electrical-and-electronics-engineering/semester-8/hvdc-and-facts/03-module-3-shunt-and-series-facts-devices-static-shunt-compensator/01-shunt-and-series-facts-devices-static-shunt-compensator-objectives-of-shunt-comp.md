---
title: "Shunt and Series Facts Devices: Static shunt Compensator - Objectives of shunt compensations - Variable impedance type VAR Generators -TCR, TSR, TSC, FC-TCR (Principle of operation and schematic) and - STATCOM (Principle of operation and schematic)."
subject: "HVDC AND FACTS"
module: "Module 3: Shunt and Series Facts Devices: Static shunt Compensator "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b77"
status: "completed"
scrapedAt: "2026-05-23T16:41:03.763Z"
---
# Module 3: Shunt and Series FACTS Devices: Static Shunt Compensators

## Introduction to FACTS Devices and Shunt Compensation

**What are FACTS Devices?**
Flexible AC Transmission Systems (FACTS) are defined by IEEE as "a power electronic-based system or equipment that provides control of power flow, voltage, and impedance in AC transmission systems." They enhance the stability, controllability, and capability of existing transmission networks.

**Why FACTS Devices?**
As power systems grow and face challenges like:
*   Increased power demand
*   Integration of renewable energy sources (often intermittent)
*   Need for efficient utilization of existing transmission infrastructure
*   Maintaining power quality and stability

FACTS devices offer a solution by providing fast and precise control of power flow, voltage support, and transient stability improvement.

**Course Outcome Alignment:**
*   **CO3:** Explain the need for FACTS devices (Knowledge Level: K2) - This section directly addresses this.
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2) - We will introduce the shunt connection here.

**Key Concepts:**
*   **Real Power (P):** The power that does useful work.
*   **Reactive Power (Q):** The power that magnetizes machines and builds up electric and magnetic fields. It is essential for voltage maintenance.
*   **Apparent Power (S):** The phasor sum of real and reactive power, S = P + jQ.

**Reference:**
*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. (Chapter 1, Introduction)

## Objectives of Shunt Compensation

Shunt compensation is employed to inject or absorb reactive power at specific points in the transmission system. The primary objectives are:

1.  **Voltage Support/Regulation:**
    *   **Problem:** Transmission lines experience voltage drops due to line impedance and reactive power consumption. Heavily loaded lines can lead to low voltages at the receiving end, hindering power transfer and potentially causing instability.
    *   **Objective:** Inject reactive power at the midpoint of a line or at the receiving end to raise and maintain the voltage profile. This improves voltage stability.
    *   **Example:** In a long transmission line, the receiving end voltage might be significantly lower than the sending end voltage. Shunt compensation at the receiving end can boost this voltage.
    *   **Reference:** Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer. (Chapter 4, Shunt Compensators)

2.  **Power Flow Control:**
    *   **Problem:** The power carrying capability of a transmission line is limited by its impedance. If a line is heavily loaded, its voltage drop can become excessive, limiting further power transfer.
    *   **Objective:** By controlling the reactive power injected or absorbed, the effective impedance of the system can be modified, thereby controlling the power flow along the line.
    *   **Example:** To reroute power from a congested line to an underutilized one, shunt compensation can be used to "attract" more power to the underutilized line by controlling its terminal voltage.
    *   **Reference:** Miller, T.J.E. (1982). *Reactive Power Control in Power Systems*. John Wiley. (Chapter 5, Shunt Compensation)

3.  **Improve Transient Stability:**
    *   **Problem:** During disturbances (e.g., faults), the rotor angle of generators can change rapidly. If the angle difference exceeds a critical limit, the generator may fall out of synchronism.
    *   **Objective:** Shunt compensators, particularly fast-acting ones like STATCOM, can rapidly inject reactive power during disturbances, thus limiting the voltage dip and improving the damping of oscillations, which enhances transient stability.
    *   **Reference:** Song, Y.H., & Jones, A.T. (1999). *Flexible AC Transmission systems (FACTS)*. IEEE Press. (Chapter 6, Transient Stability Improvement)

4.  **Improve System Damping:**
    *   **Problem:** Power systems can experience poorly damped oscillations following disturbances.
    *   **Objective:** By precisely controlling reactive power, shunt compensators can provide damping signals that counteract these oscillations.

5.  **Reduce System Losses:**
    *   **Problem:** Higher current flow due to voltage drops can lead to increased $I^2R$ losses in transmission lines.
    *   **Objective:** By improving voltage profiles and optimizing power flow, shunt compensation can reduce overall system losses.

**Course Outcome Alignment:**
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2) - This section lays the groundwork for classification.
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2) - Highlights the applications of shunt compensation.

**Highlight:** The primary goal of shunt compensation is to manage reactive power to achieve voltage control and influence power flow.

---

## Variable Impedance Type VAR Generators

These are traditional and some advanced FACTS devices that achieve reactive power control by switching or varying the impedance of passive components (like reactors and capacitors) or by using controlled switching of power electronics.

**Types of Variable Impedance Shunt Compensators:**

### 1. Thyristor Controlled Reactor (TCR)

*   **Purpose:** Continuously variable inductive reactive power generation.
*   **Principle of Operation:**
    *   Consists of a fixed capacitor bank (which generates fixed capacitive reactive power) in parallel with a thyristor-controlled reactor (TCR).
    *   The TCR is an inductor whose effective inductance is controlled by **angular control of the thyristors**.
    *   Thyristors are used to switch the inductor on and off during each half-cycle.
    *   By delaying the firing angle ($\alpha$) of the thyristors from the point of natural commutation (0 degrees), the conduction period of the inductor is reduced.
    *   This reduction in conduction period effectively increases the inductive reactance ($X_L$), thus absorbing more reactive power.
    *   The net reactive power injected by the compensation scheme ($Q_{comp}$) is $Q_C - Q_L$. As $Q_L$ (inductive absorption) increases, $Q_{comp}$ decreases (less capacitive).
*   **Control Mechanism:** The firing angle $\alpha$ is varied to control the inductive reactive power.
    *   $\alpha = 90^\circ$: Inductor is switched on at the peak of the voltage wave. Only the positive half-cycle of the current flows through the inductor, and it behaves like a saturated reactor, producing maximum fundamental inductive reactive power.
    *   $\alpha \to 180^\circ$: Inductor is switched on later in the cycle, reducing the conduction time. This increases the fundamental inductive reactance and reduces the absorbed reactive power.
    *   For $\alpha > 90^\circ$, the fundamental component of the reactor current is proportional to $\cos(\alpha)$.
*   **Harmonics:** TCRs generate significant odd-order harmonics (primarily 3rd, 5th, 7th, etc.) in the current waveform due to the non-sinusoidal switching. These harmonics are often mitigated by series-connected tuning or filter circuits.
*   **Schematic:**
    ```
    +---------------------+
    |                     |
    |  Transmission Line  | ----- o ------
    |                     |               |
    +---------------------+               |
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Capacitor| (Cc)
                                    |           |
                                    +-----+-----+
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Thyristor|
                                    |  Controlled|
                                    |  Reactor  | (Ls)
                                    |           |
                                    +-----------+
                                          |
                                        Ground
    ```
    *   The TCR consists of anti-parallel thyristor valves connected across an inductor ($L_s$).
    *   The capacitor ($C_c$) is fixed.

**Course Outcome Alignment:**
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2) - TCR is a type of controlled reactive power compensator.
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2) - TCR is a shunt FACTS device.

**Highlight:** TCR offers continuously variable inductive compensation, but generates harmonics.

**Reference:**
*   Padiyar, K.R. (2007). *FACTS Controllers in Power Transmission and Distribution*. New Age International. (Chapter 4, Static Shunt Compensators)
*   Miller, T.J.E. (1982). *Reactive Power Control in Power Systems*. John Wiley. (Chapter 8, Thyristor Controlled Reactors)

---

### 2. Thyristor Switched Reactor (TSR)

*   **Purpose:** Step-wise variable inductive reactive power generation.
*   **Principle of Operation:**
    *   Similar to TCR, it uses a capacitor bank in parallel with an inductor controlled by thyristors.
    *   However, in TSR, the thyristors are used to **switch the entire reactor on or off**.
    *   When the thyristors are turned on at the zero-crossing of voltage, the reactor is fully connected. When they are turned off at the zero-crossing, the reactor is disconnected.
    *   This results in discrete steps of inductive reactive power, rather than continuous control.
*   **Control Mechanism:** The number of reactor branches switched in or out determines the inductive reactive power.
*   **Harmonics:** Since the switching is at zero-crossing, TSRs produce significantly lower harmonics compared to TCRs when fully on or off. However, switching operations can still inject transient harmonics.
*   **Schematic:** Similar to TCR, but the thyristors are used for full ON/OFF switching of the inductor.

**Course Outcome Alignment:**
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2)
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)

**Highlight:** TSR offers step-wise control and lower harmonics than TCR.

**Reference:**
*   Sood, V.K. (2004). *HVDC and FACTS Controllers*. Springer. (Chapter 4, Shunt Compensators)

---

### 3. Thyristor Switched Capacitor (TSC)

*   **Purpose:** Step-wise variable capacitive reactive power generation.
*   **Principle of Operation:**
    *   Consists of a fixed inductive reactor (which limits the inrush current) in series with a capacitor bank, controlled by thyristor switches.
    *   The thyristor switch is turned on at voltage zero-crossing to connect the capacitor bank.
    *   To disconnect the capacitor bank, the thyristors are turned off at the current zero-crossing.
    *   This results in discrete steps of capacitive reactive power.
*   **Control Mechanism:** The number of capacitor banks switched in or out determines the capacitive reactive power.
*   **Harmonics:** Similar to TSR, TSCs produce low harmonics when switched. The series reactor helps in tuning for specific harmonic suppression.
*   **Schematic:**
    ```
    +---------------------+
    |                     |
    |  Transmission Line  | ----- o ------
    |                     |               |
    +---------------------+               |
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Thyristor|
                                    |  Switched |
                                    |  Capacitor| (Cc)
                                    |           |
                                    +-----+-----+
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Reactor  | (Ls)
                                    |           |
                                    +-----+-----+
                                          |
                                        Ground
    ```
    *   The Thyristor Switched Capacitor (TSC) consists of a capacitor bank ($C_c$) in series with a reactor ($L_s$), with thyristor valves in parallel with the series combination to bypass it, or in series with the capacitor bank to connect/disconnect it. The more common configuration for TSC is the one shown: series reactor and capacitor, controlled by thyristor valves in parallel with the series combination. A more precise schematic shows the thyristor valve controlling the connection of the capacitor bank.
    *   **Corrected Schematic Concept for TSC:**
        ```
        +---------------------+
        |                     |
        |  Transmission Line  | ----- o ------
        |                     |               |
        +---------------------+               |
                                              |
                                        +-----+-----+
                                        |           |
                                        |  Thyristor|
                                        |  Controlled|
                                        |  Capacitor| (Cc)
                                        |           |
                                        +-----+-----+
                                              |
                                        +-----+-----+
                                        |           |
                                        |  Reactor  | (Ls)
                                        |           |
                                        +-----+-----+
                                              |
                                            Ground
        ```
        *Note: The schematic usually shows the thyristor valve controlling the connection of the capacitor bank itself.*

**Course Outcome Alignment:**
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2)
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)

**Highlight:** TSC provides step-wise capacitive compensation and low harmonics.

**Reference:**
*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. (Chapter 4, Shunt Compensators)

---

### 4. Thyristor Controlled Series Capacitor (TCSC) - *Note: This is a series device, but its operation is related.*

*   **Purpose:** Continuously variable series compensation (insertion of variable impedance in series). While this module focuses on shunt, understanding related devices is useful.
*   **Principle of Operation:**
    *   A capacitor bank ($C$) is placed in series with the transmission line.
    *   A thyristor-controlled reactor ($L$) and thyristor valves are connected in parallel with the capacitor bank.
    *   By controlling the firing angle of the thyristors, the effective reactance of the combination can be varied.
    *   When the thyristors are fired at a specific angle, the capacitor is bypassed for a portion of the cycle, reducing its effective capacitive reactance. This increases the inductive component of the parallel combination, thus reducing the overall series reactance.
    *   This allows for continuous adjustment of the line's series impedance, thereby controlling power flow.
*   **Harmonics:** Generates harmonics, similar to TCR.

**Course Outcome Alignment:**
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2) - While this is a series device, understanding its principles alongside shunt devices provides a broader view of FACTS.

**Highlight:** TCSC controls series impedance, enabling continuous power flow control.

**Reference:**
*   Padiyar, K.R. (2007). *FACTS Controllers in Power Transmission and Distribution*. New Age International. (Chapter 5, Static Series Compensators)

---

### 5. Filtered Capacitive Reactor (FCR) - *Often combined with TCR for better harmonic performance.*

*   **Purpose:** To provide reactive power compensation and mitigate harmonics generated by controlled devices.
*   **Principle of Operation:**
    *   Combines a fixed capacitor bank ($C_c$) with a thyristor-controlled reactor ($L_s$).
    *   In addition, it includes passive filters (tuned L-C circuits) connected to the bus.
    *   These filters are designed to shunt specific harmonic currents (e.g., 3rd, 5th) away from the transmission system.
*   **Schematic:** Similar to TCR, but with added filter branches.

**Course Outcome Alignment:**
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2)
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)

**Highlight:** FCR offers controlled reactive power and harmonic mitigation.

---

### 6. Feed-Forward Controlled TCR (FC-TCR) - *Advanced TCR variant*

*   **Purpose:** To improve the dynamic response and transient performance of a TCR by using a predictive control strategy.
*   **Principle of Operation:**
    *   It's a TCR with an additional control loop that **predicts** the required change in inductive reactive power based on measured system variables (e.g., voltage, power flow).
    *   Instead of solely relying on the error between the actual and desired state (as in a feedback loop), the feed-forward component anticipates the change and adjusts the TCR's firing angle proactively.
    *   This reduces the response time and improves the damping of oscillations compared to a standard TCR.
*   **Schematic:** A TCR circuit with an added sophisticated control system that incorporates feed-forward signals derived from system measurements.
    ```
    +---------------------+
    |                     |
    |  Transmission Line  | ----- o ------
    |                     |               |
    +---------------------+               |
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Capacitor| (Cc)
                                    |           |
                                    +-----+-----+
                                          |
                                    +-----+-----+
                                    |           |
                                    |  Thyristor|
                                    |  Controlled|
                                    |  Reactor  | (Ls)
                                    |           |
                                    +-----------+
                                          |
                                        Ground
                                          ^
                                          |
                                    +-----------------+
                                    | Feed-Forward    |
                                    | Control Logic   |
                                    | (Predictive)    |
                                    +-----------------+
                                          ^       ^
                                          |       |
                                      System    Desired
                                      Meas.     State
    ```

**Course Outcome Alignment:**
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)
*   **CO6:** Explain the dynamic interconnection mechanisms of FACTS devices (Knowledge Level: K2) - This advanced control scheme relates to dynamic interconnection.

**Highlight:** FC-TCR provides faster and more stable response by anticipating control needs.

**Reference:**
*   Padiyar, K.R. (2007). *FACTS Controllers in Power Transmission and Distribution*. New Age International. (Chapter 4, discusses advanced TCR control)

---

## STATCOM (Static Synchronous Compensator)

*   **Purpose:** Provides rapidly controllable voltage support and reactive power compensation using voltage-source converters. It's a modern, highly responsive FACTS device.
*   **Principle of Operation:**
    *   A STATCOM is essentially a **voltage-source converter (VSC)** connected to the transmission grid through a coupling transformer and a line reactor ($L_s$).
    *   The VSC generates a controllable AC voltage ($V_c$) that is in phase with or offset from the grid voltage ($V_g$).
    *   The STATCOM's terminal voltage is controlled by adjusting the magnitude and phase of the generated voltage $V_c$.
    *   **Reactive Power Exchange:** The reactive power ($Q$) flowing from the STATCOM to the grid is determined by the difference between the STATCOM's generated voltage ($V_c$) and the grid voltage ($V_g$), and the line impedance: $Q = \frac{V_c(V_c - V_g)}{X_s}$, where $X_s$ is the reactance of the coupling reactor and transformer.
        *   If $V_c > V_g$, the STATCOM injects capacitive reactive power (acts as a capacitor).
        *   If $V_c < V_g$, the STATCOM absorbs inductive reactive power (acts as a reactor).
        *   If $V_c = V_g$, no reactive power is exchanged.
    *   **Controllability:** By controlling the magnitude of $V_c$, STATCOM can provide continuously variable capacitive and inductive reactive power, similar to a synchronous condenser but without the inertia. By controlling the phase of $V_c$ relative to $V_g$, it can also influence real power flow (though its primary purpose is reactive power).
    *   **Key Advantage:** STATCOM offers **very fast response** (milliseconds) and can operate in both capacitive and inductive modes, covering a wide range of reactive power. It can also contribute to damping of power system oscillations.
*   **Types of VSCs used in STATCOM:**
    *   **Voltage Source Converter (VSC) with Pulse Width Modulation (PWM):** This is the most common type. Thyristors or IGBTs are used as switching elements. PWM technique allows the converter to synthesize a sinusoidal voltage waveform with controllable magnitude and phase from a DC voltage source. Harmonics are also generated, which are mitigated by filters.
    *   **Cascaded Multilevel Converter (CMC):** Uses multiple series-connected converter cells, each producing a few voltage levels. This approach generates a more sinusoidal output voltage with lower switching frequencies and reduced harmonic content.
*   **Schematic (using PWM VSC):**

    ```
    +---------------------+
    |                     |
    |  Transmission Line  | ----- o ------
    |                     |               |
    +---------------------+               |
                                          |
                                    +-----+-----+
                                    |           |
                                    | Coupling  |
                                    | Reactor   | (Ls)
                                    | Transformer|
                                    |           |
                                    +-----+-----+
                                          |
                                    +-----+-----+
                                    |           |
                                    |  VSC      |
                                    | (e.g.,    |
                                    | PWM       |
                                    | IGBTs)    |
                                    |           |
                                    +-----+-----+
                                          |
                                    +-----+-----+
                                    |           |
                                    |  DC Link  |
                                    |  Capacitor| (Cd)
                                    |           |
                                    +-----------+
                                          |
                                        Ground
    ```
    *   The VSC synthesizes the required voltage.
    *   The DC link capacitor provides the DC voltage for the converter.
    *   The coupling reactor and transformer provide the impedance for reactive power exchange.
    *   Filters are typically used at the AC side of the VSC to remove switching harmonics.

**Course Outcome Alignment:**
*   **CO1:** Analyse current source and voltage source converters for HVDC systems (Knowledge Level: K4) - STATCOM uses VSCs, so understanding VSC operation is crucial.
*   **CO4:** Classify reactive power compensators in power system (Knowledge Level: K2)
*   **CO5:** Interpret series and shunt connected FACTS devices for power system applications (Knowledge Level: K2)

**Highlight:** STATCOM offers very fast, continuous, and bidirectional reactive power control using VSCs.

**Reference:**
*   Hingorani, N.G., & Gyugyi, L. (2000). *Understanding FACTS*. IEEE Press. (Chapter 5, STATCOM)
*   Padiyar, K.R. (2007). *FACTS Controllers in Power Transmission and Distribution*. New Age International. (Chapter 4, STATCOM)

---

## Practice Questions and Answers

**Question 1:** What are the primary objectives of shunt compensation in a power system?
**Answer:** The primary objectives are voltage support/regulation, power flow control, and improvement of transient stability and system damping.

**Question 2:** Explain the working principle of a Thyristor Controlled Reactor (TCR). How does it control inductive reactive power?
**Answer:** A TCR consists of a fixed capacitor bank in parallel with a thyristor-controlled inductor. The inductor's inductive reactive power is varied by controlling the firing angle ($\alpha$) of the anti-parallel thyristors. Delaying the firing angle from 90 degrees reduces the inductor's conduction period, effectively increasing its inductive reactance and thus absorbing more reactive power.

**Question 3:** What is the main difference between a TCR and a TSR?
**Answer:** A TCR provides continuously variable inductive compensation by controlling the firing angle, while a TSR provides step-wise inductive compensation by switching the entire reactor on or off.

**Question 4:** How does a STATCOM achieve reactive power control? What is its main advantage over TCRs?
**Answer:** A STATCOM uses a voltage-source converter (VSC) to generate a controllable AC voltage. By controlling the magnitude and phase of this generated voltage relative to the grid voltage, it can inject or absorb reactive power. Its main advantage is its very fast response time (milliseconds) and continuous, bidirectional reactive power capability.

**Question 5:** What is the role of the DC link capacitor in a STATCOM?
**Answer:** The DC link capacitor provides the necessary DC voltage source for the voltage-source converter (VSC) to synthesize the AC output voltage.

**Question 6:** A STATCOM can operate in both capacitive and inductive modes. How is this achieved?
**Answer:** By controlling the magnitude of the STATCOM's generated voltage ($V_c$). If $V_c$ is made higher than the grid voltage ($V_g$), it injects capacitive reactive power. If $V_c$ is made lower than $V_g$, it absorbs inductive reactive power.

---

## Summary and Key Points to Remember

*   **Shunt compensation** aims to inject or absorb reactive power at specific busbars to improve voltage, control power flow, and enhance stability.
*   **TCR:** Continuously variable inductive compensation using thyristor firing angle control; generates harmonics.
*   **TSR:** Step-wise inductive compensation by switching reactors; lower harmonics.
*   **TSC:** Step-wise capacitive compensation using thyristor switches; low harmonics.
*   **STATCOM:** Modern shunt compensator using VSCs; provides very fast, continuous, and bidirectional reactive power control, improving voltage stability and system damping. It is based on power electronic switching and voltage synthesis.
*   **VSCs** are the heart of STATCOMs, synthesizing AC voltages from DC sources using techniques like PWM.
*   The control of STATCOM reactive power is achieved by varying the magnitude of the AC voltage generated by the VSC.

---

This comprehensive set of notes covers the key aspects of Shunt and Series FACTS Devices, focusing on Static Shunt Compensators as per your request. It aligns with the provided course outcomes and references the suggested textbooks where appropriate.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
