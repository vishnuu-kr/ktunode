---
title: "Switching converter type Series Compensators-(SSSC) (Principle of operation and schematic)"
subject: "HVDC AND FACTS"
module: "Module 3: Shunt and Series Facts Devices: Static shunt Compensator "
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b79"
status: "completed"
scrapedAt: "2026-05-23T16:41:06.306Z"
---
# HVDC AND FACTS - Module 3: Shunt and Series FACTS Devices: Static Shunt Compensator

## Topic: Switching Converter Type Series Compensators - Static Synchronous Series Compensator (SSSC)

### 1. Introduction and Need for Series Compensation (CO3, CO5)

*   **What are FACTS Devices?**
    *   Flexible AC Transmission Systems (FACTS) are power electronic-based systems that enable dynamic control of power flow, voltage, and impedance in AC transmission networks.
    *   They enhance the capacity and reliability of existing transmission infrastructure.
    *   **Key Reference:** Hingorani & Gyugyi, "Understanding FACTS," Chapter 1.
*   **Why Series Compensation?**
    *   **Power Flow Control:** AC transmission lines inherently have inductive reactance ($X_L$). This limits the maximum power transfer capability, especially for long lines. Power flow is inversely proportional to the line impedance ($P \propto \frac{1}{X_L}$).
    *   **Angle Stability:** Large phase angles between sending and receiving end voltages can lead to instability. Series compensation reduces the effective line impedance, thus reducing the required phase angle for a given power transfer, improving stability.
    *   **Sub-synchronous Resonance (SSR):** Series capacitors can, under certain conditions, interact with the mechanical structure of synchronous generators, leading to SSR, which can damage the generator. This is a limitation of traditional fixed or mechanically switched series capacitors.
    *   **SSSC as an advanced solution:** SSSC offers dynamic and controllable series compensation, overcoming the limitations of fixed series capacitors and providing superior performance.
    *   **Key Reference:** Padiyar, "FACTS Controllers in Power Transmission and distribution," Chapter 6.

### 2. Static Synchronous Series Compensator (SSSC) - Principle of Operation (CO5, CO1)

*   **Definition:** The SSSC is a FACTS controller that injects a voltage in series with the transmission line. This injected voltage is controlled in magnitude and phase angle relative to the line current.
*   **Primary Function:** To improve the stability and controllability of the AC power system by dynamically adjusting the effective series impedance of the transmission line.
*   **How it works:**
    *   The SSSC uses a voltage source converter (VSC) to generate a fundamental frequency voltage ($V_{sSSC}$) that is injected in series with the transmission line.
    *   The VSC is typically connected to the AC line via a series transformer.
    *   The VSC is connected to a DC capacitor, which acts as the energy storage element.
    *   The DC capacitor is charged by the power system via a converter, or it can be a standalone DC source. For most SSSC applications, the DC capacitor is *not* actively charged from the AC system; it primarily provides a DC voltage for the VSC to synthesize the AC voltage. The active power exchange with the line is ideally zero when operating purely for reactive compensation.
    *   The injected voltage $V_{sSSC}$ can be:
        *   **Inductive:** Leading the line current by 90 degrees. This effectively increases the line reactance, reducing power transfer.
        *   **Capacitive:** Lagging the line current by 90 degrees. This effectively cancels the line reactance, increasing power transfer.
        *   **Resistive:** In phase with the line current. This injects active power into the line, which is usually avoided in pure reactive compensation modes.
    *   **Mechanism of Compensation:** By injecting a voltage $V_{sSSC}$ in series, the SSSC modifies the effective impedance of the line. If the injected voltage $V_{sSSC}$ is in phase opposition to the voltage drop across the line impedance ($I \cdot jX_L$), it effectively cancels the line reactance, increasing power transfer.
    *   **Mathematical Representation:**
        Consider a transmission line with series reactance $X_L$. The power transfer is $P = \frac{V_s V_r}{X_L} \sin(\delta)$, where $V_s$ and $V_r$ are sending and receiving end voltages, and $\delta$ is the phase angle difference.
        When an SSSC injects a voltage $V_{sSSC}$ in series, the new effective impedance becomes $X_{eff} = X_L - X_{sSSC}$, where $X_{sSSC}$ is the effective series compensation provided by SSSC.
        The power transfer equation becomes $P = \frac{V_s V_r}{X_L - X_{sSSC}} \sin(\delta)$.
        If $X_{sSSC}$ is positive (inductive injection), power transfer decreases. If $X_{sSSC}$ is negative (capacitive injection), power transfer increases. SSSC typically operates to *cancel* the line reactance, meaning $X_{sSSC}$ is negative in effect.
    *   **Key Reference:** Sood, "HVDC and FACTS Controllers," Chapter 7.
    *   **Key Reference:** Song & Jones, "Flexible AC Transmission systems (FACTS)," Chapter 5.

### 3. Schematic of a Switching Converter Type SSSC (CO5, CO1)

*   **Basic Configuration:**
    *   **Voltage Source Converter (VSC):** Typically a 12-pulse or 24-pulse converter using Insulated Gate Bipolar Transistors (IGBTs) or similar power electronic switches. These converters generate a controllable AC voltage from a DC input.
    *   **DC Capacitor ($C_d$):** Stores DC energy and provides the DC voltage for the VSC. It's the primary DC side element.
    *   **Series Transformer ($T_s$):** A coupling transformer that connects the VSC output to the transmission line. Its primary winding is connected to the VSC output, and its secondary winding is connected in series with the transmission line. The transformer's design is crucial for isolating the VSC from the AC line transients and for providing the necessary voltage injection capability. It also allows for voltage matching and control.
    *   **Harmonic Filters:** May be used at the VSC output terminals to filter out switching harmonics generated by the VSC, ensuring a clean sinusoidal voltage injection into the line.
    *   **DC Source/Energy Storage (Optional/Implicit):** While not always explicitly shown for basic principle, the DC capacitor needs to be kept charged. In some configurations, it's charged by a separate converter from the AC system or a dedicated DC source. However, for *series compensation*, the SSSC aims to inject a voltage with minimal active power exchange. If the SSSC is only compensating reactance, the DC capacitor voltage will remain relatively constant, assuming losses are negligible and the VSC switches are ideal. In reality, small active power injections are needed to compensate for converter losses and DC capacitor leakage.

*   **Diagrammatic Representation:**

    ```
    +-----------------+     +---------------+     +----------+     +-----------------+
    |                 |     |               |     |          |     |                 |
    |  Transmission   |-----| Series        |-----|  VSC     |-----|  DC Capacitor   |
    |     Line        |     | Transformer   |     | (IGBTs)  |     |      (Cd)       |
    |                 |     |   (Ts)        |     |          |     |                 |
    +-----------------+     +---------------+     +----------+     +-----------------+
           |                                           ^
           |                                           |
           ---------------------------------------------
                  (AC connection to the line via transformer)
    ```

    *   **Explanation of connections:**
        *   The secondary winding of the Series Transformer ($T_s$) is connected in series with the transmission line.
        *   The primary winding of $T_s$ is connected to the output of the Voltage Source Converter (VSC).
        *   The VSC is connected to the DC Capacitor ($C_d$).
        *   The DC capacitor provides the DC bus voltage for the VSC.

*   **Types of VSC Configurations:**
    *   **Multi-level Converters (e.g., Cascaded H-bridge, NPC):** Used to generate a smoother AC voltage waveform with fewer harmonics, reducing the need for large harmonic filters.
    *   **PWM (Pulse Width Modulation) VSC:** The VSC switches at high frequencies to synthesize the desired fundamental frequency voltage. The switching pattern is controlled by PWM techniques.
    *   **Key Reference:** Padiyar, "HVDC and FACTS Controllers," Chapter 3 (for VSC principles).

### 4. Switching Converter Type SSSC - Control Aspects (CO2, CO5)

*   **Objective of Control:**
    *   To dynamically inject a series voltage of controlled magnitude and phase to achieve the desired compensation.
    *   To maintain the DC capacitor voltage within acceptable limits.
    *   To ensure stable operation and rapid response to system disturbances.
*   **Control Strategies:**
    *   **Voltage Magnitude Control:** The SSSC can be controlled to inject a voltage whose magnitude is a certain percentage of the line voltage or a fixed value. This directly influences the effective line reactance.
    *   **Phase Angle Control:** The phase angle of the injected voltage relative to the line current determines whether the compensation is primarily inductive, capacitive, or a combination.
    *   **Current Magnitude Control:** The magnitude of the injected current can also be controlled.
    *   **Constant Impedance/Reactance Compensation:** The SSSC injects a voltage to cancel a fixed portion of the line's series reactance ($V_{sSSC} = -j k X_L I$, where $k$ is the compensation degree and $I$ is the line current). This is the most common mode.
    *   **Constant Power Transfer:** The SSSC can regulate the power flow through the line to a pre-set value by adjusting its injected voltage.
    *   **Voltage Support:** The SSSC can inject voltage to support the voltage profile of the transmission line.
*   **Control Loops:**
    *   **Outer Control Loop:** Sets the desired operating point (e.g., desired power flow, desired voltage magnitude, desired compensation degree).
    *   **Inner Control Loop (VSC Control):**
        *   **Current Control:** Regulates the AC current injected by the VSC.
        *   **Voltage Control:** Regulates the DC capacitor voltage ($V_d$). This is crucial for maintaining the DC bus voltage. A proportional-integral (PI) controller is commonly used.
        *   **PWM Generator:** Generates the switching signals for the VSC switches based on the reference voltages from the current and voltage control loops.
*   **Example Control Strategy (Constant Reactance Compensation):**
    1.  Measure the line current ($I_{line}$).
    2.  Calculate the required voltage injection to cancel a percentage ($k$) of the line reactance: $V_{sSSC\_ref} = -j k X_L I_{line}$. This translates to a desired voltage vector.
    3.  Use a VSC control strategy (e.g., based on dq transformation) to generate the necessary switching commands for the IGBTs to produce $V_{sSSC}$ with the correct magnitude and phase.
    4.  A DC voltage controller ensures the DC capacitor voltage is maintained constant by adjusting the active power flow from the AC system to the DC capacitor to cover converter losses.
*   **Key Reference:** Sood, "HVDC and FACTS Controllers," Chapter 7.
*   **Key Reference:** Hingorani & Gyugyi, "Understanding FACTS," Chapter 8.

### 5. Advantages of SSSC (CO3, CO5)

*   **Dynamic and Rapid Response:** Compared to traditional fixed or mechanically switched series capacitors, SSSC offers near-instantaneous response to system disturbances.
*   **Controllable Compensation:** Allows for precise control of the series compensation level, enabling optimal power flow and voltage regulation.
*   **Elimination of Sub-synchronous Resonance (SSR):** SSSC can be controlled to actively damp SSR oscillations, a significant advantage over traditional series capacitors.
*   **Increased Transmission Capacity:** Enhances the power transfer capability of existing lines.
*   **Improved System Stability:** Enhances transient and steady-state stability.
*   **Reduced Power Oscillation Damping:** Can actively damp power oscillations between interconnected systems.

### 6. Disadvantages of SSSC (CO3, CO5)

*   **Cost:** Generally more expensive than fixed or thyristor-controlled series capacitors (TCSC) due to the complexity of VSCs.
*   **Losses:** Power electronic converters introduce some conduction and switching losses.
*   **Harmonics:** The VSC generates harmonics that require filtering.
*   **DC Side Energy Storage:** The DC capacitor requires careful voltage management and can be a point of failure.
*   **Series Connection Challenges:** The series connection of power electronic equipment into a high voltage AC line requires robust insulation and handling of AC line transients.

### 7. Comparison with other Series FACTS Devices (CO5)

*   **Thyristor Controlled Series Capacitor (TCSC):**
    *   Uses thyristors to switch in or bypass capacitor banks, effectively controlling the equivalent series reactance.
    *   Less expensive than SSSC.
    *   Slower response than SSSC.
    *   Can be susceptible to SSR under certain control modes.
    *   Injects significant harmonics.
*   **GTO Controlled Series Capacitor (GCSC):**
    *   Similar principle to TCSC but uses Gate Turn-Off (GTO) thyristors, allowing for more control over the switching instants.
    *   More control than TCSC but still less sophisticated than SSSC.
*   **SSSC vs. TCSC:** SSSC offers superior performance in terms of response speed, controllability, and SSR mitigation, but at a higher cost.

### 8. Summary and Key Points to Remember (All COs)

*   **SSSC:** A voltage source converter (VSC) based FACTS device that injects a controllable voltage in series with the transmission line.
*   **Primary Function:** To dynamically control the effective series reactance of the line for power flow and stability enhancement.
*   **Mechanism:** Synthesizes a fundamental frequency AC voltage using a VSC, which is then injected via a series transformer.
*   **Key Components:** VSC, DC Capacitor, Series Transformer.
*   **Control:** Magnitude and phase of injected voltage are controlled to achieve desired compensation.
*   **Advantages:** Dynamic response, SSR mitigation, improved stability and power transfer.
*   **Disadvantages:** Cost, losses, harmonics.
*   **CO Alignment:**
    *   **CO1 (VSC Analysis):** Understanding the VSC is central to SSSC operation.
    *   **CO2 (Control Schemes):** SSSC requires sophisticated control for dynamic operation.
    *   **CO3 (Need for FACTS):** SSSC addresses limitations of traditional compensation methods.
    *   **CO4 (Reactive Power Compensators):** SSSC is a series reactive power compensator.
    *   **CO5 (Series FACTS):** SSSC is a prime example of a series FACTS device.
    *   **CO6 (Dynamic Interconnection):** SSSC dynamically interconnects with the AC system to modify its electrical characteristics.
*   **Textbook References:** Ensure to consult Sood, Hingorani & Gyugyi, Padiyar, and Song & Jones for detailed explanations and specific circuit diagrams.

### 9. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle of operation of a Static Synchronous Series Compensator (SSSC). How does it differ from a fixed series capacitor?
**Answer:** The SSSC injects a controllable voltage in series with the transmission line using a voltage source converter (VSC). This injected voltage, by varying its magnitude and phase, can effectively change the line's series reactance. Unlike a fixed series capacitor, which provides a constant capacitive reactance compensation, the SSSC offers dynamic and controllable compensation, allowing it to respond to changing system conditions and mitigate issues like sub-synchronous resonance.

**Question 2:**
Draw a schematic diagram of a basic SSSC and label its key components. What is the role of the DC capacitor in the SSSC?
**Answer:**
*   **Schematic:** (Refer to the diagram in Section 3). Key components: Transmission Line, Series Transformer, Voltage Source Converter (VSC), DC Capacitor.
*   **Role of DC Capacitor:** The DC capacitor provides the DC voltage source for the VSC to generate the AC voltage. It stores energy for the VSC's operation. In steady-state operation for pure reactive compensation, its voltage is ideally constant, but a control loop is needed to manage its voltage by supplying active power to compensate for converter losses.

**Question 3:**
Discuss two advantages of using an SSSC over a Thyristor Controlled Series Capacitor (TCSC) for series compensation.
**Answer:**
1.  **Faster Response:** SSSCs utilize power electronic switching with PWM, allowing for near-instantaneous response to system disturbances, whereas TCSCs have a slightly slower response due to the thyristor firing control.
2.  **SSR Mitigation:** SSSCs can be controlled to actively damp Sub-synchronous Resonance (SSR) oscillations, a capability that TCSCs may have limitations with depending on their control strategy.

**Question 4:**
What is the main purpose of the series transformer in an SSSC?
**Answer:** The series transformer in an SSSC serves multiple purposes:
1.  **Voltage Injection:** It provides a means to inject the voltage synthesized by the VSC into the transmission line at the required voltage level.
2.  **Isolation:** It electrically isolates the high-voltage AC transmission line from the lower-voltage DC side and the VSC.
3.  **Harmonic Filtering:** It can contribute to filtering certain harmonics.
4.  **Impedance Matching:** It can help match the impedance of the VSC output to the transmission line impedance.

**Question 5:**
If an SSSC is operating to increase power transfer on a transmission line, will it inject a voltage that leads or lags the line current by approximately 90 degrees?
**Answer:** To increase power transfer, the SSSC needs to effectively reduce the line's inductive reactance. This is achieved by injecting a voltage that is approximately 90 degrees out of phase with the line current, specifically lagging the line current by 90 degrees (acting capacitively). This effectively cancels out a portion of the line's natural inductive reactance.

---
These notes provide a comprehensive overview of switching converter type series compensators (SSSC) based on the specified learning outcomes and textbook references. Remember to cross-reference with the provided textbooks for detailed mathematical derivations, specific circuit designs, and advanced control strategies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
