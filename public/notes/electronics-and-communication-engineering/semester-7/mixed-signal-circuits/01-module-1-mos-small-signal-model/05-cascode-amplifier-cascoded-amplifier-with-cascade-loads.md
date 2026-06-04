---
title: "Cascode Amplifier:  Cascoded amplifier with cascade loads"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41e"
status: "completed"
scrapedAt: "2026-05-23T18:08:05.745Z"
---
# Mixed Signal Circuits: Module 1: MOS Small Signal Model - Cascode Amplifier with Cascode Loads

---

## Introduction to Cascode Amplifiers

The cascode amplifier is a fundamental building block in analog integrated circuit design. It combines a common-source (CS) amplifier with a common-gate (CG) amplifier. This arrangement significantly improves voltage gain and output impedance compared to a single-stage CS amplifier. This module focuses on the cascode amplifier configuration where both stages utilize cascode loads.

---

## Learning Outcomes (LO) and Course Outcomes (CO) Alignment

This module aims to equip students with the understanding of the cascode amplifier with cascode loads, directly contributing to the following:

*   **LO: Understand the basic structure and operation of a cascode amplifier.**
    *   **CO1:** Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2) - This LO directly supports CO1 by explaining a specific single-stage amplifier configuration with a complex load.
*   **LO: Analyze the small-signal behavior of a cascode amplifier with cascode loads, including voltage gain, input impedance, and output impedance.**
    *   **CO1:** Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2) - This LO supports CO1 by requiring the analysis of a cascode amplifier's AC characteristics.
*   **LO: Identify the advantages and disadvantages of using cascode loads in a cascode amplifier.**
    *   **CO1:** Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2) - This LO aligns with CO1 by exploring the impact of load choices on amplifier performance.
*   **LO: Relate the small-signal model of transistors to the analysis of the cascode amplifier circuit.**
    *   **CO1:** Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2) - This LO is foundational to CO1, emphasizing the application of the MOS small-signal model.

---

## 1. Basic Cascode Amplifier Structure

### 1.1. Common-Source (CS) Amplifier

*   **Structure:** A transistor (M1) in common-source configuration with its gate connected to an input signal ($V_{in}$), drain connected to a load, and source connected to ground (or a reference voltage).
*   **Function:** Provides voltage gain but has a relatively low output impedance, limiting its applicability in circuits requiring high gain.
*   **Small-Signal Model:** The CS amplifier can be modeled using the common-source small-signal model, which includes $g_m$ and $r_o$.

### 1.2. Common-Gate (CG) Amplifier

*   **Structure:** A transistor (M2) in common-gate configuration with its gate connected to a fixed voltage (bias voltage), drain connected to the output, and source connected to the output of another amplifier stage.
*   **Function:** Provides current gain (effectively unity gain for voltage) and has a very low input impedance. Its primary role in a cascode is to improve the output impedance of the preceding CS stage.
*   **Small-Signal Model:** The CG amplifier can be modeled using the common-gate small-signal model.

### 1.3. Cascode Amplifier Configuration

*   **Structure:** A CS amplifier (M1) followed by a CG amplifier (M2). The output of M1 is connected to the source of M2. A bias voltage ($V_B$) is applied to the gate of M2. The load is connected to the drain of M2.
*   **Diagram:**

    ```
          Vdd
           |
           RL (or load circuit)
           |
     o-----D2 -----o Vout
           G2    S2
           |     |
           VB    D1     M1
           |     G1 -----o Vin
           S1    |
           |     S
           |     |
          GND   GND
    ```

    *   M1: Common-Source Transistor
    *   M2: Common-Gate Transistor
    *   $V_{in}$: Input Voltage
    *   $V_{out}$: Output Voltage
    *   $V_B$: Bias Voltage for the gate of M2
    *   $R_L$: Load Resistance

*   **Operation:**
    *   M1 acts as a voltage amplifier.
    *   M2 is driven by the output of M1 at its source.
    *   The gate of M2 is held at a constant bias voltage ($V_B$), forcing M2 to operate in common-gate mode.
    *   The output is taken from the drain of M2.

---

## 2. Cascode Amplifier with Cascode Loads

This is an advanced configuration where the load of the cascode amplifier itself is implemented using a cascode structure. This further enhances the output impedance, leading to higher voltage gain.

### 2.1. Structure of Cascode Amplifier with Cascode Loads

Consider a cascode amplifier where the load connected to the drain of the second-stage transistor (M2, the common-gate transistor) is replaced by another cascode circuit. Let's denote the cascode load as consisting of transistors M3 and M4.

*   **Diagram:**

    ```
          Vdd
           |
     o-----D4 -----o Vout
           G4    S4
           |     |
           VB1   D3     M3 (CG)
           |     G3    S3
           |     |     |
           D2    M2 (CG) S1
           |     G2    |
           VB2   |     D1     M1 (CS)
           |     S2    G1 -----o Vin
           |     |     |
          GND   GND   S
                      |
                     GND
    ```

    *   M1: Common-Source Transistor (Input Stage)
    *   M2: Common-Gate Transistor (First Cascode Stage)
    *   M3: Common-Gate Transistor (Load Cascode Stage)
    *   M4: Common-Source Transistor (Load Cascode Stage)
    *   $V_{in}$: Input Voltage
    *   $V_{out}$: Output Voltage
    *   $V_{B1}$, $V_{B2}$: Bias Voltages

*   **Operation:**
    *   M1 and M2 form the primary cascode amplifier.
    *   M3 and M4 are configured as a cascode load. M3 is in common-gate mode, and M4 is in common-source mode, with the output taken from M4's drain. The source of M3 is connected to the drain of M2. The gate of M3 is biased at $V_{B1}$. The gate of M4 is biased at $V_{B2}$.

---

## 3. Small-Signal Analysis of Cascode Amplifier with Cascode Loads

The small-signal analysis is crucial for understanding the performance characteristics like voltage gain, input impedance, and output impedance. We will use the standard MOS small-signal model:

*   **Model Elements:**
    *   $g_m$: Transconductance of a transistor.
    *   $r_o$: Output resistance of a transistor ($r_o = 1 / g_{ds}$).
    *   $r_{ds} \approx \frac{V_A}{I_D}$ where $V_A$ is the Early voltage.

**Assumptions:**

*   All transistors are in saturation.
*   The gate voltages $V_{B1}$ and $V_{B2}$ are DC bias voltages.
*   The input signal $v_{in}$ is small.
*   The small-signal output resistance of the cascode load is being analyzed.

### 3.1. Voltage Gain ($A_v = \frac{v_{out}}{v_{in}}$)

The voltage gain can be broken down into the gain of the first stage (CS) and the gain of the second stage (CG), multiplied by the gain of the load.

Let's analyze the amplifier without the cascode load first, using a simple load $R_L$.

**Cascode Amplifier with a simple Load $R_L$ (for context):**

*   **Stage 1 (CS):** Input to the drain of M1.
    *   The output of M1 ($v_{d1}$) is connected to the source of M2.
    *   The output impedance seen by M1's drain is the input impedance of the CG stage (M2), which is very low.
    *   $v_{d1} \approx -g_{m1} v_{in} (r_{o1} || r_{in, M2})$.
    *   $r_{in, M2} \approx \frac{1}{g_{m2}}$. This is very small.
    *   So, $v_{d1} \approx -g_{m1} v_{in} (r_{o1} || \frac{1}{g_{m2}})$.
    *   **Important Point:** Because $1/g_{m2}$ is much smaller than $r_{o1}$, the term $(r_{o1} || \frac{1}{g_{m2}}) \approx \frac{1}{g_{m2}}$.
    *   Therefore, $v_{d1} \approx -g_{m1} v_{in} \frac{1}{g_{m2}}$.

*   **Stage 2 (CG):** Input to the source of M2.
    *   The output of M2 is $v_{out}$.
    *   $v_{out} = v_{d2} = i_{d2} (R_L || r_{o2})$.
    *   The current $i_{d2}$ is the current flowing through M2, which is approximately the current through M1 ($i_{d1}$).
    *   $i_{d1} \approx g_{m1} v_{in}$ (assuming $r_{o1} || \frac{1}{g_{m2}} \approx \frac{1}{g_{m2}}$).
    *   So, $v_{out} \approx (g_{m1} v_{in}) (R_L || r_{o2})$.

*   **Overall Gain (Cascode with $R_L$):**
    *   $A_v = \frac{v_{out}}{v_{in}} \approx g_{m1} (R_L || r_{o2})$.
    *   **Key Takeaway:** The gain is roughly the transconductance of the first stage multiplied by the load resistance.

Now, let's consider the **cascode load** with transistors M3 and M4. The load $R_L$ is replaced by the effective output resistance of the cascode load, $R_{out, cascode\_load}$.

*   **Cascode Load Structure:** M4 (CS) connected to M3 (CG). M3's gate is biased at $V_{B1}$, and M4's gate is biased at $V_{B2}$. The output is taken from M4's drain. This configuration acts as a current source with very high output resistance.

*   **Output Resistance of the Cascode Load ($R_{out, cascode\_load}$):**
    *   This is equivalent to finding the resistance seen looking into the drain of M4 when M3 is connected to the drain of M2.
    *   Let's analyze the cascode load in isolation. Consider a current source $I_{in}$ injected into the drain of M3. M3 is in CG configuration, and M4 is in CS configuration.
    *   The small-signal circuit for the cascode load (when M2 is replaced by a signal source):
        *   The output of M2 is connected to the source of M3.
        *   The gate of M3 is at $V_{B1}$ (AC ground).
        *   The drain of M3 is connected to the source of M4.
        *   The gate of M4 is at $V_{B2}$ (AC ground).
        *   The drain of M4 is $V_{out}$.

    *   **Analysis of Cascode Load Output Resistance:**
        *   The output resistance of a cascode structure (like M3-M4) is approximately $r_{o3} g_{m4} r_{o4}$.
        *   This is because the current from the input (drain of M2) flows through M3. The output resistance seen at the drain of M4 is the output resistance of M4 ($r_{o4}$) in series with the input impedance of M3 ($1/g_{m3}$). However, the current is gained by $g_{m4}$ at the drain of M4, and this current then faces the output resistance of M3 ($r_{o3}$).
        *   $R_{out, cascode\_load} \approx r_{o3} g_{m4} r_{o4}$. This value is significantly higher than $r_o$ of a single transistor or a simple resistor.

*   **Overall Voltage Gain of Cascode Amplifier with Cascode Load:**
    *   The gain of the first stage (M1-M2) is approximately $g_{m1} (r_{o1} || \frac{1}{g_{m2}})$. As before, this is approximately $g_{m1}/g_{m2}$.
    *   The "load" the first stage sees is the input impedance of the cascode load, which is very low.
    *   The output of M2 is connected to the source of M3. The voltage at this node is $v_{d1}$.
    *   The current flowing out of the drain of M2 is $i_{d2} \approx g_{m1} v_{in}$.
    *   This current flows into the cascode load. The voltage gain from the drain of M2 to the output is the gain provided by the cascode load.
    *   The cascode load effectively acts as a current source with resistance $R_{out, cascode\_load}$.
    *   $v_{out} = i_{d2} \times R_{out, cascode\_load} = (g_{m1} v_{in}) \times (r_{o3} g_{m4} r_{o4})$.
    *   **Overall Gain:** $A_v = \frac{v_{out}}{v_{in}} \approx g_{m1} (r_{o3} g_{m4} r_{o4})$.

    **Refined Analysis (Considering $r_{o1}$ and $1/g_{m2}$ more precisely):**
    The voltage at the drain of M1 (source of M2) is:
    $v_{d1} = -g_{m1} v_{in} (r_{o1} || \frac{1}{g_{m2}})$.

    The current flowing into the cascode load (from drain of M2) is $i_{d2} = g_{m1} v_{in} \frac{r_{o1}}{r_{o1} + 1/g_{m2}}$.

    The output voltage is $v_{out} = i_{d2} R_{out, cascode\_load} = i_{d2} (r_{o3} g_{m4} r_{o4})$.

    $A_v = \frac{v_{out}}{v_{in}} = \left(g_{m1} \frac{r_{o1}}{r_{o1} + 1/g_{m2}}\right) (r_{o3} g_{m4} r_{o4})$.

    If $g_{m2} r_{o1} \gg 1$ (typical for cascodes), then $\frac{r_{o1}}{r_{o1} + 1/g_{m2}} \approx 1$.
    So, $A_v \approx g_{m1} g_{m4} r_{o3} r_{o4}$.

    **Textbook Reference:**
    *   **Razavi (2/e), Chapter 7 (Cascode and Folded Cascode Amplifiers):** Discusses the basic cascode and its gain. The analysis of cascode *loads* often builds upon the principles of cascoded current sources, which are inherently high output impedance structures. The concept of multiplying resistances ($r_o \cdot g_m \cdot r_o$) for cascode output impedance is a key takeaway.
    *   **Sedra & Smith (6/e), Chapter 4 (MOSFETs and related devices) and Chapter 8 (MOS Amplifiers):** Provides detailed small-signal models and analysis techniques applicable to cascode configurations and high-impedance loads. They emphasize how the cascode connection "shields" the drain of the first transistor from the output, preventing Miller effect and reducing the load seen by the first stage.

### 3.2. Input Impedance ($Z_{in}$)

*   The input impedance is seen looking into the gate of M1.
*   Since it's the gate of a MOS transistor, the small-signal input impedance is ideally infinite, as no current flows into the gate terminal.
*   $Z_{in} = \infty$ (ideally).

### 3.3. Output Impedance ($Z_{out}$)

*   The output impedance is seen looking into the drain of M4 (the top transistor of the cascode load).
*   We deactivate all independent sources ($v_{in}=0$). This means M1 is driven by a short circuit (since $v_{in}=0$).
*   The output impedance of the cascode load (M3-M4) is what determines the overall output impedance of the amplifier.
*   As derived earlier, $Z_{out} = R_{out, cascode\_load} \approx r_{o3} g_{m4} r_{o4}$.

*   **Comparison:** This output impedance is significantly higher than that of a simple CS amplifier ($r_{o1}$) or a cascode amplifier with a simple resistive load ($r_{o2}$).

---

## 4. Advantages and Disadvantages of Cascode Loads

### 4.1. Advantages

*   **Very High Output Impedance:** This is the primary advantage. The cascode load provides an output impedance that is the product of three resistances ($r_{o3} g_{m4} r_{o4}$), making it extremely high.
*   **High Voltage Gain:** A higher output impedance, when used in conjunction with a transconductance stage (like M1-M2), leads to a significantly higher overall voltage gain. This is critical for applications requiring high amplification.
*   **Improved Linearity:** By providing a high impedance load, the voltage swing at the output is less sensitive to variations in the load characteristics, potentially leading to better linearity.
*   **Reduced Voltage Swing at the Output of the First Stage:** The low input impedance of the CG stage (M2) absorbs most of the signal swing, preventing large voltage variations at the drain of M1. This is beneficial for the operation of M1.

### 4.2. Disadvantages

*   **Increased Number of Transistors:** Requires more transistors than a simple CS amplifier, leading to larger area and potentially higher power consumption.
*   **Increased Voltage Headroom Requirement:** The stacked nature of cascode amplifiers (M1, M2, M3, M4) requires more voltage headroom from the power supply ($V_{dd}$) to ensure all transistors remain in saturation. The bias voltages $V_{B1}$ and $V_{B2}$ also need to be carefully chosen.
*   **DC Bias Complexity:** Designing the bias network for all transistors (M1, M2, M3, M4) and their respective gates can be more complex.
*   **Reduced Bandwidth:** While voltage gain is improved, the increased number of parasitic capacitances in the cascaded structure can lead to a reduction in bandwidth. The interaction between the stages and the cascode load's parasitics needs careful consideration.

---

## 5. Design Considerations and Biasing

*   **Transistor Sizing ($W/L$):** The aspect ratios of the transistors are chosen to set the bias currents ($I_D$) and achieve the desired transconductances ($g_m$) and output resistances ($r_o$).
*   **Bias Voltages ($V_{B1}, V_{B2}$):** These voltages are critical for keeping all transistors in saturation and for setting the operating points. Typically, these are generated using current mirrors or other biasing circuits.
    *   For M2 to be in saturation, $V_{DS2} = V_{GS2} - V_{GS2} \ge V_{th2}$. The source of M2 is at $v_{d1}$, which varies. Therefore, a stable bias for $V_{B2}$ is crucial.
    *   For M3 to be in saturation, $V_{DS3} = V_{GS3} - V_{GS3} \ge V_{th3}$.
    *   For M4 to be in saturation, $V_{DS4} = V_{GS4} - V_{GS4} \ge V_{th4}$.
*   **Current Mirrors:** Often used to bias the cascode stages and to create the high-impedance current sources that form the cascode load.
*   **Early Voltage ($V_A$):** The output resistance ($r_o$) is directly proportional to $V_A$. Higher $V_A$ (often achieved with longer channel lengths) leads to higher output impedance and gain.

---

## 6. Examples and Applications

*   **High-Gain Amplifiers:** Cascode amplifiers with cascode loads are used in applications where very high voltage gain is required, such as pre-amplifiers in instrumentation or sensor interfaces.
*   **Output Stages of Op-Amps:** While not the primary focus of this topic, the *principle* of cascoding is fundamental to achieving high output impedance in the output stages of operational amplifiers (as seen in common-collector or common-emitter stages with cascode loads).
*   **Current Sources:** Cascode current sources are widely used to provide high output impedance and stable bias currents.

---

## 7. Practice Questions and Exercises

**Question 1:**
Consider a cascode amplifier with a cascode load consisting of transistors M1, M2 (cascode amplifier), M3, M4 (cascode load). M1 and M3 are common-gate transistors, and M2 and M4 are common-source transistors.
(a) Draw the small-signal equivalent circuit of this configuration.
(b) Derive the expression for the voltage gain $A_v = \frac{v_{out}}{v_{in}}$.
(c) Derive the expression for the output impedance $Z_{out}$.
(d) What is the primary advantage of using a cascode load compared to a simple resistive load?

**Answer 1:**
(a) The small-signal equivalent circuit would involve $g_{m1}v_{in}$ driving the source of M2 (CG), with M1's drain resistance $r_{o1}$ in parallel. M2's drain connects to M3's source. M3's gate is at AC ground. M3's drain connects to M4's source. M4's gate is at AC ground. The output is taken from M4's drain. Each transistor is represented by its $g_m$, $r_o$, and the signal voltage.
(b) $A_v \approx g_{m1} g_{m4} r_{o3} r_{o4}$ (assuming $g_{m2}r_{o1} \gg 1$ and $g_{m3}r_{o2} \gg 1$).
(c) $Z_{out} \approx r_{o3} g_{m4} r_{o4}$.
(d) The primary advantage is a significantly higher output impedance, leading to a much higher voltage gain.

**Question 2:**
If a cascode amplifier has a simple resistive load $R_L$, its voltage gain is approximately $g_{m1}R_L$. If we replace $R_L$ with a cascode load, how does the voltage gain change, and why?

**Answer 2:**
When replacing a resistive load $R_L$ with a cascode load, the voltage gain of the cascode amplifier (M1-M2) changes from approximately $g_{m1}R_L$ to $g_{m1} (r_{o3} g_{m4} r_{o4})$. Since $r_{o3} g_{m4} r_{o4}$ is typically much larger than $R_L$, the voltage gain increases substantially. This is because the cascode load provides a much higher effective resistance, amplifying the current from the M1-M2 stage more effectively.

**Question 3:**
What are the main drawbacks of using a cascode load in a cascode amplifier?

**Answer 3:**
The main drawbacks are:
1.  **Increased complexity:** More transistors and bias circuitry.
2.  **Higher voltage headroom requirement:** More voltage drops across the stacked transistors, limiting the $V_{dd}$ budget.
3.  **Potential reduction in bandwidth:** Due to increased parasitic capacitances.

---

## 8. Important Points to Remember

*   The cascode configuration essentially adds a common-gate stage to a common-source stage.
*   The primary purpose of the common-gate stage is to boost the output impedance of the common-source stage and reduce the Miller effect.
*   A cascode amplifier with a cascode load achieves extremely high output impedance ($r_{o3}g_{m4}r_{o4}$).
*   This high output impedance results in very high voltage gain, roughly proportional to $g_{m1} \times R_{out,load}$.
*   The trade-off for high gain and output impedance includes increased transistor count, voltage headroom, and bias complexity.
*   Always ensure all transistors are biased in the saturation region for proper operation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 9. Further Reading and References

*   **Behzad Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapters 7 and 8 are highly relevant for cascode structures, common-gate amplifiers, and their applications in achieving high gain and impedance.
*   **Sedra & Smith, "Microelectronic Circuits" (6/e):** Chapters on MOSFET amplifiers and multi-stage amplifiers will provide a strong foundation for understanding the analysis techniques and the benefits of cascoded structures.
*   **Phillip E. Allen, Douglas R. Holbery, "CMOS Analog Circuit Design" (3/e):** Offers practical design perspectives on cascode circuits and their use in various analog blocks.

---