---
title: "Regulated power supplies: Load and line regulation"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fa1"
status: "completed"
scrapedAt: "2026-05-23T16:19:02.991Z"
---
# SOLID STATE DEVICES - Module 4: Oscillators: Introduction

## Topic: Regulated Power Supplies: Load and Line Regulation

This topic delves into the crucial aspects of regulated power supplies, focusing on their ability to maintain a stable output voltage under varying conditions. We will explore the concepts of load regulation and line regulation, understanding what they are, why they are important, and how they are quantified.

---

### 1. Introduction to Regulated Power Supplies

A power supply converts AC mains voltage into a stable DC voltage required by electronic circuits. An **unregulated power supply** (like a simple diode rectifier followed by a capacitor filter) exhibits significant voltage variations with changes in the load current or the input AC voltage.

A **regulated power supply** incorporates a voltage regulator circuit to maintain a constant output voltage regardless of these variations. This stability is paramount for the proper functioning and reliability of sensitive electronic components.

**Why Regulation is Necessary:**

*   **Component Sensitivity:** Many semiconductor devices (e.g., ICs, transistors) require a specific, stable DC supply voltage to operate correctly. Fluctuations can lead to malfunction, performance degradation, or even permanent damage.
*   **Noise Reduction:** Regulation helps filter out noise and ripple present in the unregulated DC supply, providing a cleaner DC output.
*   **Predictable Performance:** A regulated supply ensures consistent performance of circuits over a range of operating conditions.

---

### 2. Key Concepts and Definitions

#### 2.1 Load Regulation

**Definition:** Load regulation refers to the ability of a regulated power supply to maintain a constant output voltage as the load current changes.

**Concept:** When the load connected to the power supply changes (e.g., more components are turned on or off), the current drawn from the supply also changes. Without proper regulation, this change in load current would cause a corresponding change in the output voltage.

**Quantification:** Load regulation is typically expressed as a percentage and is defined as the change in output voltage from no-load to full-load, divided by the output voltage at full-load, multiplied by 100.

$$ \text{Load Regulation (\%)} = \frac{V_{\text{NL}} - V_{\text{FL}}}{V_{\text{FL}}} \times 100\% $$

Where:
*   $V_{\text{NL}}$ = Output voltage at no-load (i.e., when no load is connected, or load resistance is infinite).
*   $V_{\text{FL}}$ = Output voltage at full-load (i.e., when the maximum specified load current is drawn).

**Ideal vs. Real Load Regulation:**
*   An **ideal** regulated power supply would have a load regulation of **0%**, meaning the output voltage remains perfectly constant irrespective of the load current.
*   **Real** power supplies have a non-zero load regulation, meaning there is a small variation in output voltage with load current. The lower the percentage, the better the load regulation.

**Example:**
Consider a regulated power supply with a nominal output voltage of 5V.
*   At no-load, the output voltage is $V_{\text{NL}} = 5.1\text{V}$.
*   At full-load, the output voltage is $V_{\text{FL}} = 5.0\text{V}$.

Load Regulation = $\frac{5.1\text{V} - 5.0\text{V}}{5.0\text{V}} \times 100\% = \frac{0.1\text{V}}{5.0\text{V}} \times 100\% = 2\%$

This indicates that the output voltage varies by 2% as the load current changes from no-load to full-load.

#### 2.2 Line Regulation

**Definition:** Line regulation refers to the ability of a regulated power supply to maintain a constant output voltage as the input AC voltage (or the unregulated DC input voltage) changes.

**Concept:** The input AC voltage from the mains can fluctuate due to various reasons (e.g., power grid load variations, voltage sag). These fluctuations are usually rectified and filtered to produce an unregulated DC voltage that is fed to the regulator. Line regulation ensures that these input voltage variations do not significantly affect the final DC output voltage.

**Quantification:** Line regulation is typically expressed in terms of millivolts per volt (mV/V) or as a percentage of the output voltage per volt of input change. A common definition is the change in output voltage for a 1-volt change in the unregulated input voltage.

$$ \text{Line Regulation} = \frac{\Delta V_{\text{out}}}{\Delta V_{\text{in(unregulated)}}} $$

Alternatively, it can be expressed as a percentage:

$$ \text{Line Regulation (\%)} = \frac{V_{\text{out(high input)}} - V_{\text{out(low input)}}}{V_{\text{out(nominal input)}}} \times \frac{1}{\Delta V_{\text{in(unregulated)}}} \times 100\% $$

Where:
*   $V_{\text{out(high input)}}$ = Output voltage when the unregulated input voltage is at its maximum specified value.
*   $V_{\text{out(low input)}}$ = Output voltage when the unregulated input voltage is at its minimum specified value.
*   $V_{\text{out(nominal input)}}$ = Output voltage when the unregulated input voltage is at its nominal or typical value.
*   $\Delta V_{\text{in(unregulated)}}$ = The change in the unregulated input voltage (e.g., $V_{\text{in(high input)}} - V_{\text{in(low input)}}$).

**Ideal vs. Real Line Regulation:**
*   An **ideal** regulated power supply would have a line regulation of **0 mV/V** (or 0%), meaning the output voltage is completely independent of the input voltage.
*   **Real** power supplies have a non-zero line regulation. Lower values indicate better performance.

**Example:**
Consider a regulated power supply with a nominal output of 5V. The unregulated DC input can vary between 9V and 12V.
*   When the unregulated input is 9V, the output voltage is $V_{\text{out(low input)}} = 5.05\text{V}$.
*   When the unregulated input is 12V, the output voltage is $V_{\text{out(high input)}} = 5.15\text{V}$.
*   The change in unregulated input is $\Delta V_{\text{in(unregulated)}} = 12\text{V} - 9\text{V} = 3\text{V}$.

Line Regulation = $\frac{5.15\text{V} - 5.05\text{V}}{3\text{V}} = \frac{0.1\text{V}}{3\text{V}} \approx 0.033\text{V/V}$

This means for every 1-volt change in the unregulated input, the output voltage changes by approximately 0.033V (or 33mV).

---

### 3. Types of Voltage Regulators and Their Impact on Regulation

The performance of a regulated power supply in terms of load and line regulation is heavily dependent on the type of voltage regulator used.

#### 3.1 Series Regulators (e.g., Zener Diode, Transistor Pass Regulator)

**Concept:** In a series regulator, a control element (like a transistor) is placed in series with the load. The regulator varies its resistance to maintain a constant output voltage.

**Zener Diode Regulator:**
*   **Operation:** A Zener diode is used to provide a stable reference voltage. A series resistor drops the excess voltage, and a transistor (if used for higher current) acts as a pass element.
*   **Load Regulation:** Generally good, but depends on the Zener diode's characteristics and the transistor's $V_{\text{BE}}$ variation.
*   **Line Regulation:** Also good, as the Zener diode's voltage is relatively constant.
*   **Textbook Reference:** Boylested & Nashelsky (11/e, 2017), Chapter 9 (Voltage Regulation), discusses Zener diode applications.

**Transistor Pass Regulator (e.g., Single-Transistor Regulator):**
*   **Operation:** A transistor (BJT or MOSFET) is used as a variable resistor in series with the load. Its base/gate voltage is controlled by a reference circuit to maintain a constant output voltage.
*   **Load Regulation:** Improved over simple Zener regulators. The transistor's characteristics, particularly its $V_{\text{BE}}$ (for BJTs) or $V_{\text{GS}}$ (for MOSFETs), and its output impedance affect load regulation.
*   **Line Regulation:** Good, as the control voltage is derived from a stable reference.
*   **Textbook Reference:** Sedra & Smith (6/e, 2013), Chapter 9 (Integrated Biopolar Transistor Circuits), likely covers basic discrete regulator designs. Bell (5/e, 2008), Chapter 9 (Voltage Regulators), provides detailed coverage.

#### 3.2 Shunt Regulators (e.g., Zener Diode Regulator)

**Concept:** In a shunt regulator, a control element is placed in parallel with the load. It diverts excess current from the load to maintain a constant voltage across it.

**Zener Diode Regulator (as a Shunt Regulator):**
*   **Operation:** A series resistor is followed by a Zener diode connected in parallel with the load. The Zener diode maintains a constant voltage across itself and the load.
*   **Load Regulation:** Moderate. As the load current increases, the current through the Zener diode decreases, and vice-versa. The Zener diode's dynamic resistance ($r_z$) limits regulation.
    *   $\Delta V_{\text{out}} \approx I_{\text{load_change}} \times r_z$
*   **Line Regulation:** Moderate. Similar to load regulation, changes in input voltage affect the current division between the Zener and the load.
*   **Textbook Reference:** Bell (5/e, 2008), Chapter 9, covers Zener shunt regulators.

#### 3.3 Integrated Circuit (IC) Voltage Regulators (e.g., 78xx, LM317)

**Concept:** These are pre-built monolithic ICs that provide a regulated output voltage with excellent performance. They typically use internal bandgap references and feedback loops to achieve high regulation.

*   **Operation:** They contain a voltage reference, error amplifier, pass transistor, and protective circuitry. The output voltage is usually fixed (e.g., 7805 for 5V, 7812 for 12V) or adjustable (e.g., LM317).
*   **Load Regulation:** Typically very good, often in the range of 0.1% to 0.3%.
*   **Line Regulation:** Also very good, often in the range of 0.05% to 0.1%.
*   **Textbook Reference:** Many textbooks cover IC regulators. Boylested & Nashelsky (11/e, 2017), Chapter 9, likely discusses these. Sedra & Smith (6/e, 2013), Chapter 9, might also cover them as part of integrated circuit applications. Razavi (2015) would likely have detailed discussions on internal regulator architectures.

---

### 4. Factors Affecting Load and Line Regulation

Several design parameters and device characteristics influence the load and line regulation of a power supply.

#### 4.1 For Series Regulators:

*   **Voltage Reference Stability:** The stability of the voltage reference (e.g., Zener diode, bandgap reference) directly impacts both line and load regulation. A reference with a low temperature coefficient and low noise is crucial.
*   **Error Amplifier Gain:** A higher gain in the error amplifier leads to better regulation. The error amplifier senses the difference between the output voltage and the reference voltage and adjusts the pass element accordingly.
*   **Pass Transistor Characteristics:**
    *   **Output Impedance:** A lower output impedance of the pass transistor (especially for BJTs in common-collector configuration) contributes to better load regulation.
    *   **Beta (β) Variation (for BJTs):** Variations in $\beta$ with collector current can affect load regulation.
*   **Feedback Network:** The resistors in the feedback voltage divider (for adjustable regulators) and their tolerances influence the precision of the output voltage and regulation.
*   **Minimum Load:** For series regulators, a minimum load current is often required to ensure proper operation of the regulator and to achieve the specified load regulation. Without a minimum load, the output voltage might rise uncontrollably.

#### 4.2 For Shunt Regulators:

*   **Zener Diode Dynamic Resistance ($r_z$):** This is the most significant factor for Zener shunt regulators. A lower $r_z$ leads to better regulation. Zener diodes with higher breakdown voltages generally have lower dynamic resistances.
*   **Series Resistor ($R_s$):** The value of the series resistor affects the quiescent current available to the Zener diode and the voltage drop across it.
*   **Minimum Zener Current:** Sufficient current must flow through the Zener diode even at maximum load and minimum input voltage to keep it in the breakdown region.

---

### 5. Importance and Practical Considerations

*   **Performance Specifications:** Manufacturers of power supplies and voltage regulator ICs provide specifications for load and line regulation. These are key parameters for selecting the right component for a specific application.
*   **Impact on Circuit Design:** Poor load or line regulation can lead to unpredictable circuit behavior, affecting the performance of sensitive analog circuits (amplifiers, sensors) and digital circuits (microprocessors, memory).
*   **Trade-offs:** Achieving extremely tight load and line regulation often involves more complex circuitry, higher cost, and potentially lower efficiency. Designers must balance performance requirements with economic and practical constraints.
*   **Temperature Effects:** Device characteristics (like Zener voltage, transistor parameters) can change with temperature, affecting regulation. Temperature compensation techniques or regulators with low temperature coefficients are used to mitigate this.

---

### 6. Practice Questions and Exercises

**Question 1:**
A regulated power supply has an output voltage of 12V. At no load, the output voltage is 12.05V, and at full load, it is 11.98V. Calculate the load regulation.

**Answer 1:**
$$ \text{Load Regulation (\%)} = \frac{V_{\text{NL}} - V_{\text{FL}}}{V_{\text{FL}}} \times 100\% = \frac{12.05\text{V} - 11.98\text{V}}{11.98\text{V}} \times 100\% = \frac{0.07\text{V}}{11.98\text{V}} \times 100\% \approx 0.58\% $$

**Question 2:**
A linear voltage regulator IC has the following specifications:
*   Output Voltage ($V_{\text{out}}$): 5V
*   Input Voltage Range: 7V to 15V
*   Output Voltage at 7V input: 5.02V
*   Output Voltage at 15V input: 5.06V

Calculate the line regulation in mV/V.

**Answer 2:**
$$ \text{Line Regulation} = \frac{\Delta V_{\text{out}}}{\Delta V_{\text{in(unregulated)}}} = \frac{V_{\text{out(high input)}} - V_{\text{out(low input)}}}{V_{\text{in(high)}}-V_{\text{in(low)}}} = \frac{5.06\text{V} - 5.02\text{V}}{15\text{V}-7\text{V}} = \frac{0.04\text{V}}{8\text{V}} = 0.005\text{ V/V} $$
Converting to mV/V: $0.005 \text{ V/V} \times 1000 \text{ mV/V} = 5 \text{ mV/V}$.

**Question 3:**
Explain the difference between load regulation and line regulation. Which is typically better for a high-quality IC voltage regulator (e.g., a 78xx series)?

**Answer 3:**
*   **Load Regulation:** Measures how well the output voltage stays constant when the load current changes.
*   **Line Regulation:** Measures how well the output voltage stays constant when the input DC voltage changes.

High-quality IC voltage regulators like the 78xx series typically have **better line regulation** than load regulation, although both are generally very good. For instance, line regulation might be specified as 0.05% (or 50mV/V for 10V input variation), while load regulation might be 0.1% (or 5mV change for full load current swing). The architecture of these regulators is often optimized to reject input voltage variations more effectively.

**Exercise 1:**
A simple Zener diode shunt regulator uses a 5.1V Zener diode with a dynamic resistance of 10$\Omega$. A series resistor of 270$\Omega$ is used with an input voltage of 12V. The load resistance can vary from 500$\Omega$ to 1$\text{k}\Omega$.
(a) Calculate the output voltage at no load (infinite load resistance).
(b) Calculate the output voltage at a load resistance of 500$\Omega$.
(c) Calculate the load regulation for this regulator.

**Exercise 1: Solution**
First, calculate the series resistance $R_s$ and the Zener diode's quiescent current.
Input Voltage $V_{in} = 12\text{V}$
Series Resistor $R_s = 270\Omega$
Zener Voltage $V_Z = 5.1\text{V}$
Zener Dynamic Resistance $r_z = 10\Omega$

The current through the series resistor when the Zener diode is at 5.1V is:
$I_{Rs} = \frac{V_{in} - V_Z}{R_s} = \frac{12\text{V} - 5.1\text{V}}{270\Omega} = \frac{6.9\text{V}}{270\Omega} \approx 25.56\text{mA}$

(a) **Output voltage at no load ($R_L = \infty$)**:
At no load, all the current $I_{Rs}$ flows through the Zener diode.
The output voltage $V_{out}$ will be approximately $V_Z + I_{Rs} \times r_z$ (considering the Zener's dynamic resistance).
$V_{NL} \approx V_Z + I_{Rs} \times r_z = 5.1\text{V} + 25.56\text{mA} \times 10\Omega = 5.1\text{V} + 0.2556\text{V} \approx 5.356\text{V}$.
(Note: This is an approximation. A more rigorous analysis would involve solving simultaneous equations for the parallel combination of Zener and load.)

(b) **Output voltage at a load resistance of 500$\Omega$ ($R_L = 500\Omega$)**:
The total current from the source $I_{Rs}$ is divided between the Zener diode ($I_Z$) and the load resistor ($I_L$).
The voltage across the load and Zener is $V_{out}$.
$I_L = \frac{V_{out}}{R_L}$
$I_Z = I_{Rs} - I_L = I_{Rs} - \frac{V_{out}}{R_L}$
The Zener voltage is $V_{out} = V_Z + I_Z \times r_z$.
Substitute $I_Z$:
$V_{out} = V_Z + (I_{Rs} - \frac{V_{out}}{R_L}) \times r_z$
$V_{out} = V_Z + I_{Rs} \times r_z - \frac{V_{out} \times r_z}{R_L}$
$V_{out} (1 + \frac{r_z}{R_L}) = V_Z + I_{Rs} \times r_z$
$V_{out} = \frac{V_Z + I_{Rs} \times r_z}{1 + \frac{r_z}{R_L}}$
Using values from (a):
$V_{out} = \frac{5.1\text{V} + 0.2556\text{V}}{1 + \frac{10\Omega}{500\Omega}} = \frac{5.3556\text{V}}{1 + 0.02} = \frac{5.3556\text{V}}{1.02} \approx 5.251\text{V}$.
This is $V_{FL}$ for the range given.

(c) **Load Regulation**:
$V_{NL} \approx 5.356\text{V}$
$V_{FL} \approx 5.251\text{V}$
$$ \text{Load Regulation (\%)} = \frac{V_{\text{NL}} - V_{\text{FL}}}{V_{\text{FL}}} \times 100\% = \frac{5.356\text{V} - 5.251\text{V}}{5.251\text{V}} \times 100\% = \frac{0.105\text{V}}{5.251\text{V}} \times 100\% \approx 2.0\% $$

---

### 7. Important Points to Remember

*   **Purpose of Regulation:** To provide a stable DC output voltage despite variations in load current and input voltage.
*   **Load Regulation:** How output voltage changes with load current. Lower percentage is better.
*   **Line Regulation:** How output voltage changes with input DC voltage. Lower mV/V or percentage is better.
*   **Ideal Regulator:** 0% load regulation and 0 mV/V line regulation.
*   **Series Regulators:** Control element in series with the load. Generally better regulation than simple shunt regulators.
*   **Shunt Regulators:** Control element in parallel with the load. Zener diodes are common examples.
*   **IC Regulators:** Offer excellent load and line regulation due to sophisticated internal circuitry.
*   **Key Factors for Regulation:** Stability of voltage reference, gain of error amplifier, output impedance of pass element, dynamic resistance of Zener.
*   **Minimum Load:** Crucial for series regulators to maintain proper operation.

---

### 8. Alignment with Course Outcomes

*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4)**
    *   This topic directly addresses the **design and analysis of voltage regulator circuits**. Understanding load and line regulation is fundamental to designing a stable and reliable power supply. By studying these concepts, students gain the knowledge to select appropriate regulator types and components to meet specific regulation requirements.
*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)**
    *   Most voltage regulators employ feedback mechanisms to achieve their regulation. The error amplifier, which is a key component in many regulators, functions as a feedback amplifier. Analyzing how feedback contributes to stable output voltage under varying conditions is an integral part of understanding regulator design, linking it to the broader concept of feedback circuits.

---
