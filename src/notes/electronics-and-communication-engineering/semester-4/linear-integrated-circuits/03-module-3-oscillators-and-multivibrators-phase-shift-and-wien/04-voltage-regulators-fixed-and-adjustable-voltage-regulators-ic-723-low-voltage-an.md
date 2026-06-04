---
title: "Voltage Regulators:  Fixed and Adjustable voltage regulators, IC 723 – Low voltage and High voltage configurations, Current boosting, Current limiting, Short circuit and Fold-back protection."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 3: Oscillators and Multivibrators:  Phase Shift and Wien"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe575"
status: "completed"
scrapedAt: "2026-05-23T17:49:48.694Z"
---
# LINEAR INTEGRATED CIRCUITS - Module 3: Oscillators and Multivibrators: Phase Shift and Wien Bridge Oscillators

## Topic: Voltage Regulators

**Course Outcomes Addressed:**
*   **CO3:** Choose integrated circuit chips for various linear circuit applications. (Knowledge Level: K2) - *Understanding the types and functionalities of voltage regulators helps in selecting the appropriate IC for a given application.*
*   **CO4:** Implement various applications using specific integrated circuit chips. (Knowledge Level: K3) - *This section provides the foundation for implementing power supply circuits using voltage regulator ICs.*

**Learning Outcomes:**
*   Understand the need for voltage regulation in electronic circuits.
*   Differentiate between fixed and adjustable voltage regulators.
*   Study the functionality and configurations of the IC 723 voltage regulator.
*   Analyze techniques for current boosting in voltage regulator circuits.
*   Understand the principles and implementation of current limiting.
*   Explore short circuit and fold-back protection mechanisms.

**1. Introduction to Voltage Regulators**

*   **Definition:** A voltage regulator is a circuit that maintains a constant output voltage regardless of variations in the input voltage or the load current.
*   **Importance:**
    *   Ensures stable operation of electronic components (e.g., ICs, microprocessors) which are sensitive to voltage fluctuations.
    *   Protects sensitive circuits from over-voltage conditions.
    *   Provides a reliable power source for various electronic devices.
*   **Basic Principle:** Voltage regulators typically operate by sensing the output voltage and adjusting a series-pass element (like a transistor) to maintain the desired voltage. This is often achieved through a feedback mechanism.

**2. Types of Voltage Regulators**

Voltage regulators can be broadly classified into two main categories:

### 2.1. Fixed Voltage Regulators

*   **Description:** These ICs provide a single, pre-determined output voltage. The output voltage is internally set and cannot be changed by external components.
*   **Common Examples (Referencing Jain, 5/e):**
    *   **Series 78xx (Positive Voltage Regulators):**
        *   Provide fixed positive output voltages (e.g., 7805 for +5V, 7812 for +12V).
        *   Require a minimum input voltage higher than the output voltage.
        *   Typically have three terminals: Input, Ground, and Output.
        *   **Example Application:** Powering logic circuits, operational amplifiers.
        *   **Circuit Diagram (Simplified):**
            ```
            Vin -----+-------+----- Vout
                   |       |
                   |       o-------> Output Terminal
                   |       |
            Ground --+-------o-------> Ground Terminal
                   |       |
                   |       o-------> Input Terminal
                   |       |
            Unregulated Input
            ```
    *   **Series 79xx (Negative Voltage Regulators):**
        *   Provide fixed negative output voltages (e.g., 7905 for -5V, 7912 for -12V).
        *   Require a minimum input voltage (more negative) lower than the output voltage.
        *   Also typically have three terminals: Input, Ground, and Output.
        *   **Example Application:** Powering op-amps that require a negative supply.
    *   **Series 78Lxx/79Lxx (Low Power):** Similar to the above but designed for lower current applications.
    *   **Series LM317 (Adjustable Positive Voltage Regulator):** (Discussed in the next section, but important to note it's often categorized alongside fixed regulators due to its common use)

### 2.2. Adjustable Voltage Regulators

*   **Description:** These ICs allow the user to set the output voltage to a desired level using external resistors. This offers greater flexibility.
*   **Common Examples (Referencing Jain, 5/e; Franco, 3/e):**
    *   **LM317 (Positive Adjustable Regulator):**
        *   Provides an output voltage adjustable from 1.25V to 37V.
        *   Requires a minimum input-output differential voltage (typically 3V).
        *   **Key Pins:** Input (Vin), Output (Vout), Adjust (ADJ).
        *   **Basic Circuit:** The output voltage is determined by the ratio of two external resistors (R1 and R2) connected between Vout, ADJ, and ground. The internal reference voltage is 1.25V, and this is applied across R1. The current through R1 ($I_{ADJ}$) is also fed into the ADJ pin. The output voltage is given by:
            $V_{out} = V_{ref} + I_{ADJ} \times R2$
            $V_{out} = 1.25V \times (1 + \frac{R2}{R1})$
        *   **Important Note:** A minimum load current is required to keep the regulator in regulation. A resistor (R_load) is often placed in parallel with R2 to ensure this.
        *   **Example Application:** Building adjustable power supplies, charging batteries.
    *   **LM337 (Negative Adjustable Regulator):** Similar to LM317 but provides adjustable negative output voltages.
    *   **LM350, LM351, LM317HVA:** Higher current and higher voltage versions.

**3. IC 723 - General Purpose Voltage Regulator**

*   **Description:** The IC 723 is a versatile and widely used integrated circuit voltage regulator that can be configured for various output voltages and current capabilities. It's particularly useful for designing regulated power supplies with both positive and negative outputs, and it offers excellent regulation characteristics. (Referencing Jain, 5/e; Botkar, 10/e).
*   **Key Features:**
    *   Internal voltage reference (7.15V).
    *   Internal current limiting.
    *   Internal current-limiting resistor.
    *   Internal temperature compensation.
    *   Can be used as either a positive or negative regulator.
    *   Can be operated in a non-regulated configuration.
*   **Internal Block Diagram (Conceptual):**
    *   **Voltage Reference:** Provides a stable 7.15V reference.
    *   **Error Amplifier:** Compares the output voltage (scaled down) with the reference voltage and generates an error signal.
    *   **Current Limiting Circuit:** Monitors the output current and limits it to a safe value.
    *   **Pass Transistor(s):** Control the flow of current from the input to the output based on the error amplifier's output.
    *   **Frequency Compensation:** Ensures stability of the feedback loop.
*   **Key Pins (Commonly used):**
    *   **Vcc:** Positive supply voltage input.
    *   **Vee:** Negative supply voltage input (for negative regulation or specific configurations).
    *   **Vout:** Output terminal.
    *   **Vs:** Sensing terminal (connected to Vout for improved regulation).
    *   **R1, R2:** External resistors for voltage setting.
    *   **C1, C2, C3, C4:** External capacitors for frequency compensation and filtering.
    *   **Current Limit (CL):** Input for setting the current limit.
    *   **Base of Output Transistor (B):** For external pass transistor control (current boosting).

### 3.1. IC 723 - Low Voltage Configuration (e.g., 5V)

*   **Objective:** To provide a stable 5V output from a higher unregulated input voltage.
*   **Circuit Configuration:**
    *   The IC 723 acts as the control circuitry.
    *   An external pass transistor (e.g., NPN power transistor like 2N3055) is often used to handle the bulk of the load current, as the internal pass transistor in the 723 has limited current capacity.
    *   The output voltage is set using external resistors R1 and R2 connected to the ADJ terminals (which are internally tied to the error amplifier's input).
    *   The "Vs" (Sense) terminal is connected directly to the output terminal to ensure excellent load regulation.
    *   Capacitors are used for frequency compensation and filtering.
    *   The current limit is set by connecting a resistor to the CL terminal.
*   **Formula for Output Voltage:**
    *   The output voltage is determined by the ratio of external resistors (R1 and R2) connected to the internal reference.
    *   $V_{out} = V_{ref} \times (1 + \frac{R2}{R1})$ where $V_{ref}$ is the voltage at the reference input of the error amplifier (typically derived from the internal 7.15V reference). The exact formula depends on the specific configuration and pin connections used for voltage setting. A common setup involves connecting R1 between the output and the adjust pin, and R2 between the adjust pin and ground, with the reference derived from the internal 7.15V.
    *   A more precise formula for a typical configuration (where the reference is 7.15V and fed to the non-inverting input, and the feedback network is connected to the inverting input):
        $V_{out} = V_{ref} \times \frac{R1 + R2}{R1}$
        To get a specific voltage (e.g., 5V), the ratio of R1 and R2 is chosen accordingly.

### 3.2. IC 723 - High Voltage Configuration

*   **Objective:** To generate higher output voltages than what is possible with just the internal pass transistor.
*   **Method:**
    *   An external series pass transistor (often a higher voltage rated NPN transistor) is used.
    *   The IC 723's output is used to drive the base of this external pass transistor.
    *   The feedback loop is configured to set the desired high output voltage. This often involves a voltage divider network from the output to the error amplifier's input.
    *   The 723 can be configured to operate with a higher input voltage range by using appropriate external components.
*   **Circuit Considerations:**
    *   **Base Drive:** Ensure adequate base current for the external pass transistor from the 723's output. If not, an intermediate driver transistor might be needed.
    *   **Voltage Rating:** Select an external pass transistor with a breakdown voltage (Vceo) significantly higher than the unregulated input voltage.
    *   **Heat Dissipation:** High voltage and high current operation will lead to significant power dissipation in the external pass transistor. Proper heatsinking is crucial.
    *   **Stability:** Frequency compensation might need to be adjusted for higher voltage/current configurations.

**4. Current Boosting (Improving Output Current Capability)**

*   **Problem:** The internal pass transistor in many regulator ICs (including the 723's internal capability) has a limited current handling capacity.
*   **Solution:** Use an external transistor (typically an NPN or PNP power transistor) as a "pass transistor" to handle the majority of the load current. The regulator IC then acts as a control circuit for this external transistor.
*   **Methods:**
    *   **Using an External NPN Pass Transistor (Common for Positive Regulators):**
        *   The output of the regulator IC (which drives its internal pass transistor) is used to drive the base of an external NPN power transistor.
        *   The emitter of the NPN transistor is connected to the output terminal.
        *   The collector of the NPN transistor is connected to the unregulated input supply.
        *   The regulator IC senses the output voltage and adjusts the base drive to the external transistor to maintain the desired output.
        *   **Example Circuit (Conceptual):**
            ```
            Vin ----+----------+---- Collector (NPN) ----+---- Vout
                  |          |                       |
                  |          |                       |
                  |          |                       R1
                  |          |                       |
            Regulator IC ----> Base (NPN) --------->+
                  |          |                       |
                  |          |                       R2 (to ground)
                  |          |                       |
            Ground -----+-----+-----------------------+---- Ground
            ```
            *Note: This is a simplified representation. Actual circuits involve feedback networks and current sensing.*
    *   **Using an External PNP Pass Transistor (Common for Negative Regulators or specific configurations):** Similar principle, but the polarity of the transistor and connections are reversed.
    *   **Multiple Transistors:** For very high currents, multiple power transistors can be paralleled. Equalization resistors are usually placed in series with the base or emitter of each transistor to ensure current sharing.

**5. Current Limiting**

*   **Purpose:** To protect the regulator IC and the load from excessive current flow, which can cause overheating and damage.
*   **Principle:** A circuit that senses the output current and reduces the output voltage or shuts down the regulator when the current exceeds a preset limit.
*   **Methods:**
    *   **Shunt Current Limiting:** A current sensing resistor ($R_{sense}$) is placed in series with the output. The voltage drop across this resistor is proportional to the output current. This voltage drop is used to control a transistor that diverts some of the current or signals the regulator to reduce its output.
    *   **Series Current Limiting:** The regulator's internal circuitry directly limits the current.
    *   **IC 723 Implementation:** The IC 723 has an internal current limiting feature. A resistor ($R_{CL}$) is connected between the "CL" (Current Limit) pin and ground. The voltage drop across an internal series resistor ($R_{CS}$) is compared with the voltage across $R_{CL}$. When $V_{CS} > V_{CL}$, the current limiting circuit activates. The value of $R_{CL}$ determines the current limit ($I_{limit} \approx \frac{V_{CL}}{R_{CL}}$).

**6. Short Circuit Protection**

*   **Problem:** If the output terminals of the regulator are accidentally shorted to ground, a very high current can flow, potentially damaging the regulator and other components.
*   **Mechanism:** Most modern regulators have built-in short circuit protection. This is an extension of the current limiting feature. When a short circuit is detected (extremely high current), the regulator will:
    *   **Hiccup Mode (Pulse-Shik):** The regulator repeatedly turns on and off. It detects the overcurrent, shuts down, cools down, and then tries to turn on again. This cycle repeats, limiting the average power dissipation and preventing catastrophic failure.
    *   **Constant Current Limiting:** The regulator limits the output current to a safe level, even under a short circuit condition. The output voltage will drop to near zero, but the current remains within limits.
*   **Referencing Gayakwad, 4/e:** Discusses how the current limiting circuitry can be designed to transition into a safe operating area or a shutdown mode under short-circuit conditions.

**7. Fold-Back Protection**

*   **Description:** A more sophisticated form of current limiting that reduces the output current significantly when an overcurrent or short circuit condition occurs. This offers better protection and reduces power dissipation during fault conditions.
*   **Principle:** The current limit threshold is decreased as the output voltage drops.
*   **How it Works:**
    *   A voltage divider network is used, which is sensitive to both output voltage and output current.
    *   When a fault occurs, the output voltage starts to drop. This change in output voltage, combined with the current sensing, causes the current limit to decrease proportionally.
    *   As the output current increases (due to a fault), the voltage drop across the current sensing resistor increases. This increased voltage drop is fed back in such a way that it reduces the voltage required to maintain the current limit, effectively reducing the maximum allowable current.
*   **Circuit Configuration:** Typically involves connecting a resistor from the output voltage to the current sensing point, in addition to the current sensing resistor itself.
*   **Advantages:**
    *   Lower power dissipation in the pass transistor during fault conditions.
    *   Better protection against overcurrent and short circuits.
    *   Allows the regulator to recover more gracefully once the fault is removed.
*   **Referencing Franco, 3/e; Bell, 3/e:** These texts often detail the design and analysis of fold-back current limiting circuits for power supplies.

---

## Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding of voltage regulators.

**Question 1 (CO3 - K2):**
What is the primary function of a voltage regulator in an electronic circuit?
a) To increase the AC amplitude
b) To maintain a constant output voltage
c) To filter out high-frequency noise
d) To amplify the input signal

**Question 2 (CO3 - K2):**
Which of the following is a characteristic of a fixed voltage regulator?
a) Output voltage can be adjusted using external resistors.
b) Provides a single, pre-determined output voltage.
c) Requires a complex external circuitry for operation.
d) Typically offers a wide range of output voltages.

**Question 3 (CO4 - K3):**
If you need to design a power supply that provides an adjustable output voltage between 3.3V and 12V, which type of voltage regulator IC would be most suitable?
a) LM7805
b) LM7912
c) LM317
d) LM723

**Question 4 (CO4 - K3):**
Consider an LM317 adjustable voltage regulator circuit where R1 = 240Ω. If you want to set the output voltage to 9V, what should be the value of R2? (Assume $V_{ref} = 1.25V$)
Formula: $V_{out} = 1.25V \times (1 + \frac{R2}{R1})$

**Question 5 (CO3 - K2):**
What is the main advantage of using an external pass transistor with a regulator IC like the 723?
a) To decrease the output voltage
b) To increase the output current capability
c) To improve the ripple rejection
d) To reduce the input voltage requirement

**Question 6 (CO4 - K3):**
Explain the concept of "fold-back protection" in voltage regulators. Why is it considered a superior protection mechanism compared to simple current limiting?

**Question 7 (CO4 - K3):**
In the IC 723, how is the current limit typically set? What is the role of the "CL" pin?

---

## Answers to Practice Questions

**Answer 1:**
b) To maintain a constant output voltage

**Answer 2:**
b) Provides a single, pre-determined output voltage.

**Answer 3:**
c) LM317 (It's an adjustable regulator suitable for a range of voltages)

**Answer 4:**
Using the formula: $V_{out} = 1.25V \times (1 + \frac{R2}{R1})$
$9V = 1.25V \times (1 + \frac{R2}{240Ω})$
$\frac{9}{1.25} = 1 + \frac{R2}{240Ω}$
$7.2 = 1 + \frac{R2}{240Ω}$
$6.2 = \frac{R2}{240Ω}$
$R2 = 6.2 \times 240Ω = 1488Ω$
Therefore, R2 should be approximately **1.5 kΩ** (standard resistor values may be used).

**Answer 5:**
b) To increase the output current capability

**Answer 6:**
Fold-back protection is a method to limit the output current of a voltage regulator during overcurrent or short-circuit conditions. It works by reducing the current limit threshold as the output voltage drops. This means that as a fault occurs and the output voltage decreases, the maximum allowable current also decreases significantly. This is superior to simple current limiting because it greatly reduces the power dissipation in the pass transistor during fault conditions, preventing it from overheating and potentially failing. It also allows the regulator to recover more gracefully once the fault is removed.

**Answer 7:**
In the IC 723, the current limit is typically set by connecting an external resistor ($R_{CL}$) between the "CL" (Current Limit) pin and ground. The "CL" pin is connected internally to the output of a current sensing circuit. When the voltage drop across an internal sense resistor (used to monitor output current) exceeds the voltage set by $R_{CL}$, the current limiting circuit activates. The value of $R_{CL}$ determines the maximum output current the regulator will allow.

---

## Important Points to Remember

*   **Dropout Voltage:** The minimum difference between the input and output voltage required for a linear regulator to maintain regulation. This is a crucial parameter for power supply design.
*   **Power Dissipation:** Linear regulators dissipate the excess voltage difference between input and output as heat ($P_d = (V_{in} - V_{out}) \times I_{out}$). This is a major consideration, especially at high currents or large voltage differentials. Heatsinking is often necessary.
*   **Load Regulation:** The change in output voltage for a change in load current.
*   **Line Regulation:** The change in output voltage for a change in input voltage.
*   **Stability:** Regulators use feedback loops, which need to be stable. External capacitors are often required for frequency compensation to prevent oscillations.
*   **Minimum Load Current:** Some regulators require a minimum load current to operate correctly. This is often achieved by connecting a resistor from the output to ground.
*   **IC 723 Versatility:** Its internal components and flexible pin connections make it suitable for a wide range of positive and negative voltage regulation applications, including those requiring high current or wide input voltage ranges by using external components.
*   **Protection Circuits:** Current limiting, short-circuit protection, and fold-back protection are essential features for reliable operation and longevity of both the regulator and the connected load.

---

This comprehensive study note covers the core concepts of voltage regulators, including fixed and adjustable types, the versatile IC 723, and essential protection mechanisms. The provided examples, questions, and important points aim to reinforce understanding and aid in applying these concepts in practical circuit design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
