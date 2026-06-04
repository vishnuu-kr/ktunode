---
title: "Cascode amplifier - Design for a specific voltage gain and plot frequency response characteristics"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe42a"
status: "completed"
scrapedAt: "2026-05-23T17:44:31.746Z"
---
# ANALOG CIRCUITS LAB: Module 1 - RC Circuits & Frequency Response

## Topic: Cascode Amplifier - Design for Specific Voltage Gain and Frequency Response Characteristics

This module explores the fundamental behavior of RC circuits and their applications. We will delve into transient analysis with various inputs and understand their frequency response. This specific topic focuses on the Cascode amplifier, a crucial building block in analog circuit design, and how to design it for a desired voltage gain and analyze its frequency response.

---

### 1. Introduction to Amplifiers and the Need for Cascode Configuration

#### 1.1 What is an Amplifier?
An amplifier is an electronic circuit that increases the amplitude of a signal (voltage, current, or power) without significantly changing its shape.

#### 1.2 Basic Amplifier Configurations
*   **Common Emitter (CE):** High voltage gain, moderate output impedance, low input impedance. Prone to Miller effect.
*   **Common Collector (CC) / Emitter Follower:** Low voltage gain (close to 1), high input impedance, low output impedance.
*   **Common Base (CB):** High voltage gain, high output impedance, low input impedance.

#### 1.3 Limitations of Single-Stage Amplifiers (e.g., Common Emitter)
*   **Miller Effect:** The parasitic capacitance between the input and output terminals of a transistor (Cgd for FETs, Cbc for BJTs) appears magnified at the input due to the voltage gain. This significantly reduces the high-frequency response.
*   **Limited Voltage Gain:** Achieving very high voltage gain with a single stage can be challenging without sacrificing bandwidth or introducing distortion.

#### 1.4 The Cascode Amplifier: A Solution
The Cascode amplifier is a two-stage amplifier configuration that combines a common-emitter (or common-source) stage with a common-base (or common-gate) stage. This arrangement overcomes the limitations of a single-stage amplifier, particularly the Miller effect, leading to improved high-frequency performance and higher voltage gain.

---

### 2. Cascode Amplifier Configurations and Operation

#### 2.1 BJT Cascode Amplifier
*   **Structure:** A common-emitter (CE) stage followed by a common-base (CB) stage. The collector of the CE stage is connected to the emitter of the CB stage.
*   **Bias:** The CB stage is typically biased to maintain a constant voltage at the collector of the CE stage, thus minimizing the voltage swing across the Miller capacitance of the CE transistor.

**(Refer to David A. Bell, Chapter 8: "Common-Base and Common-Collector Amplifiers", for detailed explanation of CB operation. Meganathan, Chapter 5: "Bipolar Junction Transistor (BJT) Amplifiers", can also provide foundational concepts.)**

**Diagram (Conceptual - BJTs):**

```
        Vcc
         |
        Rc1
         |
   Vin ---B1 C1---B2---- Vout
         |   E1|   E2
         Re1   |   Rc2
         |     |    |
        GND   GND  GND
```

*   Q1: Common-Emitter Stage
*   Q2: Common-Base Stage

#### 2.2 FET Cascode Amplifier
*   **Structure:** A common-source (CS) stage followed by a common-gate (CG) stage. The drain of the CS stage is connected to the source of the CG stage.
*   **Bias:** Similar to the BJT cascode, the CG stage helps to isolate the output from the drain of the CS transistor, minimizing the Miller effect.

**(Refer to David A. Bell, Chapter 9: "Field-Effect Transistor Amplifiers", for detailed explanation of CG operation. Meganathan, Chapter 6: "Field-Effect Transistor (FET) Amplifiers", provides relevant information.)**

**Diagram (Conceptual - FETs):**

```
        Vdd
         |
        Rd1
         |
   Vin ---G1 D1---G2---- Vout
         |   S1|   S2
         Rs1   |   Rd2
         |     |    |
        GND   GND  GND
```

*   M1: Common-Source Stage
*   M2: Common-Gate Stage

#### 2.3 Key Advantages of Cascode Amplifier
*   **Reduced Miller Effect:** The common-base/gate stage acts as a buffer for the output signal, presenting a low impedance to the drain/collector of the first stage. This significantly reduces the effective capacitance seen at the input of the first stage, improving high-frequency response.
*   **Higher Voltage Gain:** The voltage gain of the cascode amplifier is approximately the product of the voltage gains of the individual stages, leading to a higher overall gain compared to a single-stage amplifier.
*   **Improved Output Impedance:** The output impedance of a cascode amplifier is generally higher than that of a single common-emitter/source stage, which can be beneficial in certain applications.

---

### 3. Design for a Specific Voltage Gain

**Goal:** To design a cascode amplifier circuit that achieves a target voltage gain ($A_v$).

#### 3.1 BJT Cascode Gain Calculation
The mid-band voltage gain ($A_v$) of a BJT cascode amplifier can be approximated as:

$A_v \approx - \frac{r_{c1}}{r_{e1}} \times \frac{R_{c2}}{r_{e2}}$

Where:
*   $r_{c1}$: AC collector resistance of Q1 ($R_{C1} || R_L$)
*   $r_{e1}$: Small-signal emitter resistance of Q1 ($r_{e1} = \frac{V_T}{I_{E1}}$ where $V_T$ is the thermal voltage and $I_{E1}$ is the emitter current of Q1)
*   $R_{C2}$: Collector resistor of Q2 ($R_{C2}$)
*   $r_{e2}$: Small-signal emitter resistance of Q2 ($r_{e2} = \frac{V_T}{I_{E2}}$ where $I_{E2}$ is the emitter current of Q2)

**Simplified Gain Formula:**
If $R_{C1} \gg r_{b1}$ and $R_{C2} \gg r_{b2}$, and assuming identical transistors:
$A_v \approx - \frac{R_{C1}}{r_{e1}} \times \frac{R_{C2}}{r_{e2}}$

**(Refer to Meganathan, Chapter 5, Section 5.5: "Cascaded Transistor Amplifiers" for detailed derivation.)**

#### 3.2 FET Cascode Gain Calculation
The mid-band voltage gain ($A_v$) of an FET cascode amplifier can be approximated as:

$A_v \approx - (g_{m1} R_{d1}) \times (g_{m2} R_{d2})$

Where:
*   $g_{m1}$: Transconductance of M1
*   $R_{d1}$: AC drain resistance of M1 ($R_{D1} || r_{d1}$)
*   $g_{m2}$: Transconductance of M2
*   $R_{d2}$: AC drain resistance of M2 ($R_{D2} || r_{d2}$)

If the output resistance of the transistors ($r_d$) is large compared to the drain resistors ($R_{D1}, R_{D2}$):
$A_v \approx - g_{m1} R_{D1} \times g_{m2} R_{D2}$

**(Refer to David A. Bell, Chapter 9, Section 9.7: "The FET Cascode Amplifier" for detailed derivation.)**

#### 3.3 Design Steps for a Specific Voltage Gain

**Example: Designing a BJT Cascode for a Voltage Gain of -100**

**Objective:** Design a BJT cascode amplifier with $A_v \approx -100$.

**Assumptions:**
*   Use NPN transistors (e.g., 2N3904).
*   Assume DC biasing to achieve specific emitter currents.
*   Target a specific quiescent operating point (Q-point) for each transistor.

**Design Process (Conceptual):**

1.  **Determine Target Emitter Currents ($I_{E1}, I_{E2}$):**
    *   Higher emitter current leads to lower $r_e$ and thus higher gain per stage.
    *   Consider power dissipation and transistor limitations. Let's assume we want $I_{E1} \approx 1 \text{ mA}$ and $I_{E2} \approx 1 \text{ mA}$.
    *   This gives $r_{e1} \approx \frac{26 \text{ mV}}{1 \text{ mA}} = 26 \Omega$ and $r_{e2} \approx 26 \Omega$.

2.  **Distribute the Gain:**
    *   We need a total gain of approximately -100. We can split this between the two stages. For instance, let the CE stage have a gain of approximately -10 and the CB stage have a gain of approximately -10.
    *   $A_{v1} = - \frac{R_{C1}}{r_{e1}} \approx -10$
    *   $A_{v2} = \frac{R_{C2}}{r_{e2}} \approx 10$ (Note: CB stage has positive gain in this formula, but the overall cascode is negative due to the CE stage).

3.  **Calculate Collector Resistors:**
    *   From $A_{v1} \approx -10$ and $r_{e1} = 26 \Omega$:
        $R_{C1} = -A_{v1} \times r_{e1} \approx 10 \times 26 \Omega = 260 \Omega$.
    *   From $A_{v2} \approx 10$ and $r_{e2} = 26 \Omega$:
        $R_{C2} = A_{v2} \times r_{e2} \approx 10 \times 26 \Omega = 260 \Omega$.

4.  **Biasing Network Design:**
    *   **For Q1 (CE Stage):**
        *   Choose a voltage divider bias for the base of Q1 to set the desired base voltage ($V_{B1}$).
        *   $V_{CC} - V_{BE(on)} - V_{R1} = V_{B1}$ (where $V_{R1}$ is the voltage drop across $R_{E1}$).
        *   $I_{E1} = (V_{B1} - V_{BE(on)}) / R_{E1}$.
        *   $R_{C1}$ is already determined. The collector voltage $V_{C1}$ should be set such that Q2 can be properly biased.
    *   **For Q2 (CB Stage):**
        *   The emitter of Q2 is connected to the collector of Q1 ($V_{E2} = V_{C1}$).
        *   The base of Q2 needs to be biased to a stable voltage ($V_{B2}$) that sets the desired emitter current for Q2 and allows for proper output voltage swing. A voltage divider can be used.
        *   $V_{C2} = V_{CC} - I_{C2} R_{C2} \approx V_{CC} - I_{E2} R_{C2}$ (assuming $\beta$ is large).
        *   Ensure that Q2 is biased in the active region ($V_{CE2} > V_{CE(sat)}$).

5.  **Load Resistor ($R_L$):** If there's a load connected to the output, it acts in parallel with $R_{C2}$ for AC analysis. The voltage gain calculation should include $R_L$.
    $A_v \approx - \frac{R_{C1} || r_{c1}}{r_{e1}} \times \frac{R_{C2} || R_L || r_{c2}}{r_{e2}}$

6.  **Input and Output Coupling Capacitors:** Add capacitors to block DC from the input and output.

**Important Considerations for Design:**
*   **Q-point Stability:** Ensure that the bias currents are stable against variations in transistor parameters (e.g., $\beta$).
*   **Output Voltage Swing:** Ensure that both transistors remain in the active region over the desired output voltage range.
*   **Transistor Specifications:** Use datasheets to select appropriate transistors and understand their limitations (e.g., maximum collector current, maximum voltage, transition frequency $f_T$).
*   **Unity Gain Frequency ($f_T$):** The $f_T$ of the transistors significantly impacts the high-frequency response.

---

### 4. Frequency Response Characteristics

#### 4.1 Introduction to Frequency Response
Frequency response describes how a circuit's gain and phase shift vary with the frequency of the input signal.

*   **Mid-band Region:** The frequency range where the gain is relatively constant and at its maximum value.
*   **Low-frequency Roll-off:** Caused by coupling and bypass capacitors. As frequency decreases, these capacitors have higher impedance, reducing the signal transfer.
*   **High-frequency Roll-off:** Caused by parasitic capacitances within the transistors (e.g., $C_{be}, C_{bc}, C_{gd}, C_{gs}$) and stray capacitances. As frequency increases, these capacitances offer a low impedance path, bypassing the signal and reducing gain.

#### 4.2 Sources of Capacitance in a Cascode Amplifier
*   **Internal Transistor Capacitances:**
    *   BJT: $C_{be}, C_{bc}$ (Miller capacitance), $C_{ce}$
    *   FET: $C_{gs}, C_{gd}, C_{ds}$
*   **External Capacitances:**
    *   Coupling capacitors ($C_{in}, C_{out}$)
    *   Bypass capacitors ($C_{E}, C_{S}$)
    *   Stray/Stripe capacitances on the PCB

#### 4.3 Frequency Response of a Cascode Amplifier
*   **Low-Frequency Response:** Determined by the coupling and bypass capacitors. The cutoff frequency ($f_L$) is the frequency at which the gain drops by 3 dB from the mid-band gain.
    $f_L \propto \frac{1}{RC}$ (where R and C are related to the coupling/bypass components).
*   **High-Frequency Response:** Significantly improved compared to a single CE/CS stage due to the reduction in the effective Miller capacitance. The dominant high-frequency pole is often related to the output capacitance of the first stage combined with the input impedance of the second stage.
    *   The gain typically rolls off at a rate of -20 dB/decade (for a single pole) or -40 dB/decade (if the output node has two dominant poles).
    *   The **unity-gain frequency** ($f_T$) is the frequency at which the open-loop gain drops to unity (0 dB). The cascode amplifier generally has a higher $f_T$ than a single-stage amplifier using the same transistors.

**(Refer to David A. Bell, Chapter 13: "Frequency Response of Amplifiers", for detailed analysis of low-frequency and high-frequency poles and their effect on gain and phase.)**

#### 4.4 Plotting Frequency Response Characteristics
1.  **Mid-band Gain ($A_{v(mid)}$):** Calculate or measure the gain at a frequency where all capacitors behave as either shorts (coupling/bypass) or opens (parasitic).
2.  **Low-Frequency Cutoff ($f_L$):**
    *   Identify the dominant low-frequency poles associated with coupling and bypass capacitors.
    *   Calculate the corresponding cutoff frequencies for each pole. The overall $f_L$ is the highest of these individual cutoff frequencies.
    *   **Example:** For an input coupling capacitor $C_{in}$ and the input resistance $R_{in}$ seen by $C_{in}$, the cutoff frequency is $f_{L1} = \frac{1}{2\pi R_{in} C_{in}}$.
3.  **High-Frequency Cutoff ($f_H$):**
    *   Identify the dominant high-frequency poles. In a cascode, the primary limitation often comes from the output node of the first stage and the input impedance of the second stage, influenced by the parasitic capacitances of the first transistor.
    *   The $f_H$ is the frequency at which the gain drops by 3 dB from the mid-band gain.
    *   **Approximation:** For a cascode, the unity-gain frequency ($f_{\alpha}$) is often related to the $f_T$ of the transistors. The bandwidth ($BW = f_H - f_L$) is approximately $f_H$ if $f_L \ll f_H$.
4.  **Plotting:**
    *   **Gain Plot (Bode Plot - Magnitude):** Plot the voltage gain (in dB) versus frequency (on a logarithmic scale).
        *   Mid-band gain: Flat region.
        *   Low-frequency rolloff: Slope of +20 dB/decade for each dominant low-frequency pole.
        *   High-frequency rolloff: Slope of -20 dB/decade (for one dominant pole) or -40 dB/decade (for two dominant poles).
    *   **Phase Plot (Bode Plot - Phase):** Plot the phase shift (in degrees) versus frequency (on a logarithmic scale).

**Tools for Analysis:**
*   **SPICE Simulation:** Use circuit simulation software (like LTspice, PSpice) to perform AC analysis and generate Bode plots. This is invaluable for verifying design and understanding complex frequency responses.
*   **Lab Measurements:** Using a signal generator and oscilloscope to measure gain and phase shift at different frequencies.

---

### 5. Lab Experiment: Cascode Amplifier Design and Analysis

**Objective:** Design, build, and test a cascode amplifier to achieve a specific voltage gain and characterize its frequency response.

**(This section directly relates to CO1 and CO2)**

#### 5.1 Design Phase (Pre-Lab)
1.  **Specify Target Voltage Gain:** Choose a desired mid-band voltage gain (e.g., $A_v = -50$).
2.  **Select Transistors:** Choose appropriate BJT or FET transistors (e.g., 2N3904 for BJT, 2N3819 for JFET, BS170 for MOSFET). Obtain their datasheets.
3.  **Determine Biasing Conditions:**
    *   Choose supply voltages ($V_{CC}$ or $V_{DD}$).
    *   Select quiescent operating points (e.g., desired collector/drain currents).
    *   Calculate biasing resistors ($R_{B1}, R_{B2}, R_{E1}, R_{E2}$ for BJT; $R_{G1}, R_{G2}, R_{S1}, R_{S2}$ for FET).
4.  **Calculate Amplifier Components:**
    *   Determine collector/drain resistors ($R_{C1}, R_{C2}$ or $R_{D1}, R_{D2}$) to achieve the target voltage gain.
    *   Select coupling ($C_{in}, C_{out}$) and bypass ($C_{E}, C_{S}$) capacitors to ensure they act as shorts at the desired operating frequencies. Typically, choose them such that their reactance is at least 10 times smaller than the associated resistance at the lowest frequency of interest.
        *   $X_C \le 0.1 \times R$
        *   $\frac{1}{2\pi f_{min} C} \le 0.1 \times R \implies C \ge \frac{10}{2\pi f_{min} R}$
5.  **Draw the Schematic:** Create a detailed schematic with all component values.

#### 5.2 Simulation Phase (Pre-Lab/Lab)
1.  **Build the Circuit in a Simulator:** Use a SPICE simulator to build the designed circuit.
2.  **Perform DC Analysis:** Verify that the Q-points are as intended.
3.  **Perform AC Analysis:**
    *   Sweep frequency from a low value (e.g., 10 Hz) to a high value (e.g., 1 MHz).
    *   Plot the voltage gain ($V_{out}/V_{in}$) in dB versus frequency.
    *   Plot the phase shift versus frequency.
    *   Identify the mid-band gain, low-frequency cutoff ($f_L$), and high-frequency cutoff ($f_H$).
    *   Calculate the bandwidth ($BW = f_H - f_L$).

**(This section directly relates to CO2)**

#### 5.3 Build and Test Phase (Lab)
1.  **Component Selection:** Gather all the calculated components.
2.  **Circuit Assembly:** Build the circuit on a breadboard or PCB.
3.  **Probing and Measurement:**
    *   **DC Measurements:** Measure DC voltages at various points to verify biasing.
    *   **AC Measurements:**
        *   Connect a signal generator to the input and an oscilloscope to the output.
        *   Set the input signal frequency to the mid-band region and adjust the amplitude to avoid clipping.
        *   Measure the output voltage amplitude. Calculate the gain: $A_v = V_{out} / V_{in}$.
        *   To plot the frequency response:
            *   Keep the input voltage amplitude constant.
            *   Vary the input signal frequency from low to high.
            *   Record the output voltage amplitude at each frequency.
            *   Calculate the gain ($|A_v| = V_{out}/V_{in}$) in dB: $Gain_{dB} = 20 \log_{10}(|A_v|)$.
            *   If using a dual-channel oscilloscope or network analyzer, measure the phase difference between input and output signals at each frequency.
4.  **Analysis and Comparison:**
    *   Compare the measured mid-band gain with the designed and simulated gain.
    *   Compare the measured frequency response plot with the simulated plot.
    *   Analyze any discrepancies and identify potential causes (e.g., component tolerances, parasitic effects, measurement errors).

**(This section directly relates to CO1 and CO3)**

---

### 6. Troubleshooting Common Issues

**(This section directly relates to CO3)**

*   **No Output or Very Low Gain:**
    *   Check DC biasing: Are transistors in the active region?
    *   Check connections: Loose wires, incorrect component placement.
    *   Component failure: Test individual components.
    *   Incorrect capacitor polarity (for electrolytic capacitors).
*   **Distorted Output:**
    *   Input signal amplitude too high, causing clipping.
    *   Incorrect biasing, pushing transistors into saturation or cutoff.
*   **Frequency Response Not as Expected:**
    *   Coupling/bypass capacitors too small, limiting low-frequency response.
    *   Parasitic capacitances becoming dominant at higher frequencies (especially if transistors are not high-frequency rated).
    *   Incorrect component values.
*   **Instability/Oscillation:**
    *   Poor grounding.
    *   Unwanted feedback paths.
    *   Improper bypassing.

---

### 7. Key Points to Remember

*   **Cascode Advantage:** The cascode amplifier significantly reduces the Miller effect, improving high-frequency performance.
*   **Gain Calculation:** Gain is approximately the product of the gains of the individual CE/CS and CB/CG stages.
*   **Frequency Response:** Characterized by low-frequency rolloff (due to coupling/bypass capacitors) and high-frequency rolloff (due to parasitic capacitances).
*   **Design Process:** Involves determining biasing, selecting component values for desired gain, and choosing coupling/bypass capacitors for appropriate frequency response.
*   **Simulation is Crucial:** SPICE simulation is a powerful tool for verifying designs and predicting performance before building.
*   **Lab Validation:** Always compare experimental results with theoretical calculations and simulations.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary advantage of using a cascode amplifier over a single common-emitter amplifier?
**Answer:** The primary advantage is the significant reduction of the Miller effect, which leads to improved high-frequency response (wider bandwidth).

**Question 2:** For a BJT cascode amplifier, the voltage gain is approximately given by $A_v \approx - \frac{r_{c1}}{r_{e1}} \times \frac{R_{C2}}{r_{e2}}$. If we want to double the voltage gain, what parameter(s) can we adjust?
**Answer:** To double the voltage gain, we can:
*   Increase $r_{c1}$ (increase $R_{C1}$ or $R_L$).
*   Decrease $r_{e1}$ (increase emitter current $I_{E1}$).
*   Increase $R_{C2}$.
*   Decrease $r_{e2}$ (increase emitter current $I_{E2}$).

**Question 3:** In an FET cascode amplifier, what component causes the high-frequency rolloff?
**Answer:** High-frequency rolloff is primarily caused by parasitic capacitances within the transistors, such as $C_{gs}, C_{gd}, C_{ds}$, and stray capacitances. The $C_{gd}$ of the first stage (CS transistor), though reduced in effect compared to a single CS stage, still contributes.

**Question 4:** If you are designing a cascode amplifier for audio frequencies (e.g., up to 20 kHz), what should be the approximate value of the input coupling capacitor ($C_{in}$) if the input resistance seen by the capacitor is $1 k\Omega$ and the lowest frequency of interest is 20 Hz?
**Answer:**
We need $X_{C_{in}} \le 0.1 \times R_{in}$ at $f_{min} = 20$ Hz.
$X_{C_{in}} \le 0.1 \times 1 k\Omega = 100 \Omega$.
The formula for capacitive reactance is $X_C = \frac{1}{2\pi f C}$.
So, $\frac{1}{2\pi (20 \text{ Hz}) C_{in}} \le 100 \Omega$.
$C_{in} \ge \frac{1}{2\pi (20 \text{ Hz}) (100 \Omega)}$
$C_{in} \ge \frac{1}{12566} \approx 0.00007957 \text{ F} = 79.57 \mu\text{F}$.
Therefore, a coupling capacitor of at least $100 \mu\text{F}$ would be suitable.

**Question 5:** Draw a simplified schematic of a BJT cascode amplifier and identify the components responsible for the low-frequency response and high-frequency response.
**Answer:**
**(Refer to the schematic in Section 2.1)**
*   **Low-frequency response:** Input coupling capacitor ($C_{in}$), output coupling capacitor ($C_{out}$), emitter bypass capacitor ($C_{E1}$), and potentially bypass capacitor for the base of Q2.
*   **High-frequency response:** Internal parasitic capacitances of Q1 ($C_{be1}, C_{bc1}$) and Q2 ($C_{be2}, C_{bc2}$), as well as external stray capacitances. $C_{bc1}$ is the most critical due to the Miller effect, which is minimized in the cascode.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Textbook References and Further Reading

*   **Electronic Devices and Circuits by David A. Bell (Oxford University Press, 2008, 5th edition):**
    *   Chapter 8: Common-Base and Common-Collector Amplifiers (for understanding the CB stage operation).
    *   Chapter 9: Field-Effect Transistor Amplifiers (for understanding the CG stage operation and FET cascode).
    *   Chapter 13: Frequency Response of Amplifiers (crucial for understanding the Bode plots and frequency limitations).
*   **Electronic Circuits Analysis and Design 1 by D. Meganathan (Yes Dee Publishing, 2023, 1st edition):**
    *   Chapter 5: Bipolar Junction Transistor (BJT) Amplifiers (covers CE, CB, CC, and cascaded BJT amplifiers).
    *   Chapter 6: Field-Effect Transistor (FET) Amplifiers (covers CS, CG, CD, and cascaded FET amplifiers).

**(These references are integral to understanding the theoretical underpinnings and derivations of the concepts discussed.)**

---