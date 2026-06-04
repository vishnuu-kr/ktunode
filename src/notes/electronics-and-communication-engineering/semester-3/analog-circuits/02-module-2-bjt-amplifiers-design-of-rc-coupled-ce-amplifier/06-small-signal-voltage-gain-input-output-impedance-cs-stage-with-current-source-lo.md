---
title: "Small signal voltage gain, input & output impedance, CS stage with current source load and diode connected load"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2eb"
status: "completed"
scrapedAt: "2026-05-23T17:44:13.934Z"
---
# ANALOG CIRCUITS - Module 2: BJT Amplifiers: Design of RC coupled CE amplifier

## Topic: Small Signal Voltage Gain, Input & Output Impedance, CS Stage with Current Source Load and Diode Connected Load

This module delves into the analysis and design of a fundamental Bipolar Junction Transistor (BJT) amplifier configuration: the Common-Emitter (CE) amplifier, specifically focusing on its RC-coupled implementation. We will analyze its small-signal performance metrics such as voltage gain, input impedance, and output impedance, and then explore variations of the CE stage with different active loads.

---

### 1. Introduction to RC Coupled CE Amplifier

The RC-coupled CE amplifier is a widely used circuit configuration that provides voltage amplification. The "RC-coupled" aspect refers to the use of coupling capacitors to block DC bias voltages from passing between amplifier stages, while allowing AC signals to pass.

*   **Purpose:** To amplify small AC signals.
*   **Configuration:** The input signal is applied to the base, the output is taken from the collector, and the emitter is common to both the input and output circuits.

---

### 2. Small-Signal Analysis of CE Amplifier

To analyze the AC behavior of a BJT amplifier, we use the **small-signal equivalent circuit**. This model represents the BJT as a controlled current source and resistances, valid for small input signals where the transistor operates in its active region.

#### 2.1 Hybrid-π Model

The hybrid-π model is a common small-signal model for the BJT.

*   **Key Components:**
    *   **$r_{\pi}$ (or $\beta r_o$)**: Input resistance between base and emitter. $r_{\pi} = \frac{\beta}{g_m}$.
    *   **$g_m v_{be}$**: Transconductance, representing the controlled current source. $g_m = \frac{I_C}{V_T}$, where $I_C$ is the DC collector current and $V_T \approx 26mV$ at room temperature.
    *   **$r_o$**: Output resistance (early effect). $r_o = \frac{V_A}{I_C}$, where $V_A$ is the Early voltage.
    *   **$v_{be}$**: Small-signal voltage between base and emitter.

#### 2.2 CE Amplifier with Resistive Load (Recap for context)

Before moving to active loads, let's quickly recall the analysis with a simple resistive collector load ($R_C$).

*   **Circuit Diagram:** (Refer to standard textbook diagrams for RC-coupled CE amplifier with $R_C$).
*   **Small-Signal Equivalent Circuit:**
    *   Input: $v_{in}$ connected to the base, with coupling capacitor $C_1$ (acts as open circuit for DC, short for AC). Base resistor $R_B$ is often used for biasing and appears in parallel with $r_{\pi}$ for input impedance.
    *   Transistor: Hybrid-π model ($r_{\pi}$, $g_m v_{be}$, $r_o$).
    *   Collector Load: $R_C$ is replaced by itself.
    *   Emitter: Emitter resistor $R_E$ is bypassed by capacitor $C_E$ for AC (acts as short for AC), so effectively connected to ground.
    *   Output: Taken from the collector, with coupling capacitor $C_2$.

*   **Small-Signal Voltage Gain ($A_v$):**
    *   $A_v = \frac{v_{out}}{v_{in}} = -g_m (R_C || r_o)$
    *   When $r_o \gg R_C$, $A_v \approx -g_m R_C$.
    *   **Significance:** Negative sign indicates a 180-degree phase shift between input and output.

*   **Input Impedance ($Z_{in}$):**
    *   $Z_{in} \approx R_1 || R_2 || r_{\pi}$ (where $R_1$ and $R_2$ are biasing resistors)
    *   If biasing resistors are not present or considered very large, $Z_{in} \approx r_{\pi} = \frac{\beta}{g_m}$.
    *   **Note:** Coupling capacitors are shorts for AC, so they don't affect AC input impedance.

*   **Output Impedance ($Z_{out}$):**
    *   $Z_{out} = R_C || r_o$
    *   When $r_o \gg R_C$, $Z_{out} \approx R_C$.
    *   **Note:** For calculating output impedance, the input signal is set to zero (short circuit), and the controlled current source is replaced by an open circuit.

**Key Point (Boylestad & Nashelsky):** The small-signal voltage gain is primarily determined by the transconductance of the transistor and the parallel combination of the collector resistor and the transistor's output resistance.

**Key Point (Sedra & Smith):** The input impedance of a CE amplifier is mainly determined by the parallel combination of the biasing resistors and the transistor's input resistance $r_{\pi}$. The output impedance is the parallel combination of the collector resistor and the transistor's output resistance $r_o$.

---

### 3. CE Stage with Current Source Load

Using a current source as a load offers significant advantages over a simple resistor, particularly in achieving higher voltage gain and better output impedance.

#### 3.1 What is a Current Source Load?

A current source load is an active circuit that behaves like a very high resistance, providing a constant current that is independent of the voltage across it (within its operating limits). In BJT circuits, this is typically implemented using another BJT biased appropriately.

#### 3.2 Ideal Current Source Load

*   **Characteristics:** Infinite output resistance ($R_{out} \rightarrow \infty$), constant current ($I_{out}$) irrespective of voltage.
*   **Advantage:** Leads to theoretically infinite voltage gain.

#### 3.3 Practical Current Source Load using a BJT (e.g., Current Mirror)

A common way to implement a current source load for a CE amplifier is by using a current mirror.

*   **Circuit Diagram:** (Refer to textbook diagrams for a CE amplifier with a current mirror as the collector load). The output transistor of the current mirror acts as the load for the CE amplifier's main transistor.
*   **Analysis:**
    *   The current source load provides a very high effective resistance ($R_L$) to the collector of the main CE amplifier transistor.
    *   The effective resistance of a simple current mirror load is related to the output resistance of the transistor forming the current source and its biasing resistors. For a simple BJT current source, $R_L \approx r_o$ of the current source transistor.

*   **Small-Signal Voltage Gain ($A_v$):**
    *   $A_v = -g_m (R_L || r_o)$
    *   Where $R_L$ is the output resistance of the current source load (e.g., $r_o$ of the load transistor).
    *   Since $R_L$ is typically much larger than $r_o$ of the main transistor, $A_v \approx -g_m r_o$. This is a significantly higher gain compared to a resistive load because $g_m r_o = \beta$.
    *   **Example (Boylestad & Nashelsky):** Consider a CE amplifier with a current mirror load. The gain calculation will involve the $g_m$ of the CE transistor and the $r_o$ of the load transistor.

*   **Input Impedance ($Z_{in}$):**
    *   Similar to the resistive load case, if the base biasing is done with resistors, $Z_{in} \approx R_1 || R_2 || r_{\pi}$.
    *   The current source load itself doesn't directly impact the AC input impedance as it's connected to the collector.

*   **Output Impedance ($Z_{out}$):**
    *   $Z_{out} = R_L || r_o$
    *   Where $R_L$ is the output resistance of the current source load.
    *   Since $R_L$ is typically designed to be very high, $Z_{out}$ is also very high. This is a major advantage of current source loads.
    *   **Example:** If $R_L$ is the output resistance of a current mirror ($r_{o2}$ of the load transistor), then $Z_{out} = r_{o2} || r_{o1}$ (where $r_{o1}$ is the output resistance of the CE transistor). This is much higher than a simple $R_C$.

**Key Point (Razavi):** Current source loads are preferred in high-gain amplifier designs because they offer a much higher output resistance than passive resistors, leading to a larger voltage gain.

**Course Outcome Alignment:**
*   **CO2 (Analyze single stage and multistage BJT amplifier circuits using equivalent models):** This section directly applies the small-signal equivalent model to analyze a CE stage with an active load, demonstrating understanding of transistor behavior in amplifier circuits.

---

### 4. CE Stage with Diode-Connected Load

A diode-connected load is another form of active load, where a BJT is configured as a diode by connecting its collector to its base.

#### 4.1 Diode-Connected BJT

*   **Configuration:** The base and collector terminals of a BJT are connected together.
*   **Behavior:** The device behaves like a diode, where the current through it is approximately exponential with the base-emitter voltage ($V_{BE}$).
*   **Small-Signal Resistance:** The AC resistance of a diode-connected BJT is characterized by its small-signal resistance, which is $r_o = \frac{V_A}{I_C}$. This is the same output resistance as a BJT in its active region.

#### 4.2 CE Amplifier with Diode-Connected Load

*   **Circuit Diagram:** (Refer to textbook diagrams for a CE amplifier with a diode-connected BJT in the collector). The diode-connected BJT acts as the collector load for the main CE amplifier transistor.

*   **Analysis:**
    *   The diode-connected BJT acts as a load that provides a very high resistance, equal to its output resistance $r_o$.
    *   **Bias Considerations:** The biasing of the diode-connected load needs to be carefully chosen so that it operates in its active region and the main CE transistor is also in its active region.

*   **Small-Signal Voltage Gain ($A_v$):**
    *   $A_v = -g_m (r_o || r_o)$
    *   Where the first $r_o$ is the output resistance of the CE transistor, and the second $r_o$ is the resistance of the diode-connected load.
    *   Therefore, $A_v = -g_m (\frac{r_o}{2})$.
    *   This gain is lower than that with a current source load (which ideally has infinite resistance) or a simple resistive load (if $R_C$ is small). However, it's still higher than what a small $R_C$ could provide if the transistor's $r_o$ is large.

*   **Input Impedance ($Z_{in}$):**
    *   Similar to other CE configurations with base biasing resistors, $Z_{in} \approx R_1 || R_2 || r_{\pi}$.
    *   The diode-connected load does not affect the AC input impedance.

*   **Output Impedance ($Z_{out}$):**
    *   $Z_{out} = r_o || r_o$ (where the first $r_o$ is of the CE transistor and the second $r_o$ is of the diode-connected load).
    *   $Z_{out} = \frac{r_o}{2}$.
    *   This output impedance is high, comparable to a current source load (which has $Z_{out} \approx r_o$), but typically lower than a well-designed current mirror.

**Key Point (Bogart & Beasley):** A diode-connected BJT is used as an active load to achieve higher output impedance compared to a simple resistor. The effective load resistance is the output resistance of the diode-connected BJT.

**Key Point (Bell):** The voltage gain of a CE amplifier with a diode-connected load is limited by the fact that the load itself has a finite, though large, output resistance ($r_o$).

**Course Outcome Alignment:**
*   **CO2 (Analyze single stage and multistage BJT amplifier circuits using equivalent models):** This section extends the analysis to another active load configuration, reinforcing the application of small-signal models for understanding amplifier performance.

---

### 5. Comparison of Loads (Resistive vs. Current Source vs. Diode-Connected)

| Feature               | Resistive Load ($R_C$) | Current Source Load | Diode-Connected Load |
| :-------------------- | :--------------------- | :------------------ | :------------------- |
| **Voltage Gain ($A_v$)** | $-g_m R_C$ (if $r_o \gg R_C$) | $-g_m (R_L || r_o)$ (High $R_L$, close to $-g_m r_o$) | $-g_m (r_o || r_o) = -g_m r_o / 2$ |
| **Output Impedance ($Z_{out}$)** | $R_C || r_o$ (Moderate) | $R_L || r_o$ (Very High) | $r_o || r_o = r_o / 2$ (High) |
| **Complexity**        | Simple                 | Moderate/Complex    | Moderate             |
| **Bias Stability**    | Good                   | Can be sensitive to variations | Can be sensitive to variations |
| **Gain Magnitude**    | Moderate               | High                | Moderate             |

---

### 6. Design Considerations

*   **Biasing:** Proper DC biasing is crucial for all configurations to ensure the BJT operates in the active region. This involves setting up appropriate base and collector currents.
*   **Gain vs. Impedance:** The choice of load heavily influences the trade-off between voltage gain and output impedance.
*   **Frequency Response:** While not explicitly covered in this topic, coupling and bypass capacitors have their own frequency-dependent behavior that affects the overall amplifier performance.
*   **Power Consumption:** Active loads generally lead to higher quiescent power consumption compared to resistive loads.

---

### 7. Practice Questions and Answers

**Question 1:**
A CE amplifier uses a simple resistive collector load $R_C = 5k\Omega$. The transistor has $\beta = 100$ and $V_A = 100V$. The DC collector current is $I_C = 1mA$. Calculate the small-signal voltage gain, input impedance (assume $R_B = 50k\Omega || 50k\Omega$), and output impedance.

**Solution 1:**
*   **Transconductance ($g_m$):**
    $g_m = \frac{I_C}{V_T} = \frac{1mA}{26mV} \approx 38.46 mS$
*   **Output Resistance ($r_o$):**
    $r_o = \frac{V_A}{I_C} = \frac{100V}{1mA} = 100k\Omega$
*   **Input Resistance ($r_{\pi}$):**
    $r_{\pi} = \frac{\beta}{g_m} = \frac{100}{38.46 mS} \approx 2.6k\Omega$
*   **Voltage Gain ($A_v$):**
    $A_v = -g_m (R_C || r_o) = -38.46 mS (5k\Omega || 100k\Omega)$
    $R_C || r_o = \frac{5k\Omega \times 100k\Omega}{5k\Omega + 100k\Omega} = \frac{500}{105} k\Omega \approx 4.76k\Omega$
    $A_v = -38.46 mS \times 4.76k\Omega \approx -183.1$
*   **Input Impedance ($Z_{in}$):**
    $Z_{in} = R_B || r_{\pi} = (50k\Omega || 50k\Omega) || 2.6k\Omega$
    $R_B = 25k\Omega$
    $Z_{in} = 25k\Omega || 2.6k\Omega = \frac{25k\Omega \times 2.6k\Omega}{25k\Omega + 2.6k\Omega} = \frac{65}{27.6} k\Omega \approx 2.36k\Omega$
*   **Output Impedance ($Z_{out}$):**
    $Z_{out} = R_C || r_o = 5k\Omega || 100k\Omega \approx 4.76k\Omega$

**Question 2:**
Consider a CE amplifier with a diode-connected load. The main transistor has $I_C = 0.5mA$ and $V_A = 80V$. The diode-connected load transistor also has $V_A = 80V$ and is biased to operate with $I_C = 0.5mA$. Calculate the small-signal voltage gain and output impedance.

**Solution 2:**
*   **Transconductance ($g_m$):**
    $g_m = \frac{I_C}{V_T} = \frac{0.5mA}{26mV} \approx 19.23 mS$
*   **Output Resistance ($r_o$) of the main transistor:**
    $r_o = \frac{V_A}{I_C} = \frac{80V}{0.5mA} = 160k\Omega$
*   **Output Resistance ($r_o$) of the diode-connected load:**
    The diode-connected load also has an output resistance of $r_o = 160k\Omega$ (assuming same $V_A$ and biased at the same current).
*   **Voltage Gain ($A_v$):**
    $A_v = -g_m (r_o || r_o) = -19.23 mS (160k\Omega || 160k\Omega)$
    $A_v = -19.23 mS (\frac{160k\Omega}{2}) = -19.23 mS \times 80k\Omega \approx -1538.4$
*   **Output Impedance ($Z_{out}$):**
    $Z_{out} = r_o || r_o = 160k\Omega || 160k\Omega = 80k\Omega$

**Question 3 (Conceptual):**
Why is a current source load generally preferred over a simple resistive load in high-gain CE amplifier designs?

**Solution 3:**
A current source load provides a much higher effective resistance at the collector compared to a passive resistor. This high resistance, approaching infinity for an ideal current source, leads to a significantly higher voltage gain ($A_v = -g_m R_{load}$) and a higher output impedance ($Z_{out} = R_{load} || r_o$), which are desirable characteristics for many amplifier applications.

---

### 8. Important Points to Remember

*   **Small-Signal Model:** Always use the hybrid-π model for AC analysis of BJT amplifiers.
*   **Active Loads:** Current source and diode-connected loads are active loads that utilize transistors to achieve higher output resistance and thus higher voltage gain compared to passive resistive loads.
*   **Diode-Connected BJT:** A BJT with its base and collector shorted together acts as a diode with an AC resistance of $r_o$.
*   **Output Impedance:** Active loads significantly increase the output impedance of the CE amplifier.
*   **Gain Dependence:** Voltage gain is directly proportional to transconductance ($g_m$) and the effective load resistance.
*   **Phase Inversion:** The CE amplifier exhibits a 180-degree phase shift between input and output signals.
*   **Input Impedance:** The input impedance is primarily determined by the parallel combination of base biasing resistors and $r_{\pi}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Textbook References and Further Reading

*   **Boylestad & Nashelsky:** Chapter 12 (Small-Signal Low-Frequency Amplifier Models), specifically sections on CE amplifier analysis and active loads.
*   **Sedra & Smith:** Chapter 5 (BJT Amplifiers), focusing on the small-signal analysis and the different amplifier configurations, including discussions on active loads.
*   **Bogart & Beasley:** Chapter 8 (Small-Signal Analysis of BJT Amplifiers), which covers the equivalent circuits and the calculation of various amplifier parameters.
*   **Razavi:** Chapter 4 (Single-Stage Amplifiers), provides a good understanding of the benefits of active loads and their implementation.

---