---
title: "Instrumentation Amplifier"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 16: Instrumentation Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d65"
status: "completed"
scrapedAt: "2026-05-23T16:11:13.227Z"
---
# ANALOG ELECTRONICS LAB - Module 16: Instrumentation Amplifier

This module delves into the design, characteristics, and applications of Instrumentation Amplifiers (InAmps), crucial components for accurate measurement in various electronic systems.

## 1. Introduction to Instrumentation Amplifiers

An instrumentation amplifier is a specialized differential amplifier with very high common-mode rejection ratio (CMRR), high input impedance, and controlled gain, making it ideal for amplifying small differential signals in the presence of large common-mode noise.

### 1.1 Limitations of Standard Differential Amplifiers

While standard differential amplifiers (like those built with op-amps) can amplify differential signals, they suffer from several limitations when dealing with real-world measurement scenarios:

*   **Input Impedance:** Standard op-amp-based differential amplifiers have finite input impedance. If the source impedance is not negligible compared to the input impedance, it can affect the accuracy of the amplified signal. This is particularly problematic for sources with high impedance.
*   **Common-Mode Rejection Ratio (CMRR):** The CMRR of a basic differential amplifier is limited by the matching of its components (resistors and transistors). In the presence of significant common-mode noise (signals that appear on both inputs), this noise can be amplified along with the desired differential signal, degrading accuracy.
*   **Gain Adjustment:** Adjusting the gain of a standard differential amplifier often requires changing multiple resistor values, which can be cumbersome and compromise the CMRR if the resistor matching is disturbed.

### 1.2 Why Instrumentation Amplifiers?

Instrumentation amplifiers overcome these limitations by providing:

*   **Very High Input Impedance:** Typically in the mega-ohm range, ensuring minimal loading on the source signal.
*   **High CMRR:** Effectively rejects common-mode noise, allowing for amplification of small differential signals even in noisy environments.
*   **Precisely Controlled Gain:** Gain can be set with a single resistor, without affecting input impedance or CMRR.
*   **Low DC Offset:** Minimizes unwanted DC components in the amplified output.
*   **Low Noise:** Designed to introduce minimal additional noise to the signal.

## 2. Basic Structure and Operation of an Instrumentation Amplifier

A common and fundamental configuration of an instrumentation amplifier uses three operational amplifiers.

### 2.1 Three-Op-Amp Instrumentation Amplifier

This configuration provides the desired characteristics by combining the advantages of op-amps in a specific arrangement.

**Circuit Diagram:**

(Imagine a circuit diagram with:
*   Two op-amps (Op-amp 1 and Op-amp 2) configured as non-inverting amplifiers. Their non-inverting inputs are connected to the two input terminals ($V_{in1}$ and $V_{in2}$), respectively.
*   Resistors $R1$ are connected between the inverting input and output of each of these two op-amps.
*   A resistor $R_G$ is connected between the inverting inputs of Op-amp 1 and Op-amp 2.
*   The outputs of Op-amp 1 and Op-amp 2 are connected to the non-inverting and inverting inputs, respectively, of a third op-amp (Op-amp 3) configured as a differential amplifier.
*   The differential amplifier (Op-amp 3) has feedback resistors $R2$ and $R3$ such that the output of Op-amp 1 is connected to the non-inverting input of Op-amp 3 through $R2$, and the output of Op-amp 2 is connected to the inverting input of Op-amp 3 through $R3$.
*   A feedback resistor $R_f$ is connected between the output of Op-amp 3 and its inverting input. The non-inverting input of Op-amp 3 is connected to ground if we consider a basic configuration. For common-mode rejection, the non-inverting input of Op-amp 3 receives the amplified common-mode signal from the outputs of the first two stages.)

**Analysis:**

Let's analyze the operation of this circuit, assuming ideal op-amps and considering the role of each component.

*   **Stage 1 & 2 (Non-inverting Amplifiers):**
    *   Op-amp 1 and Op-amp 2 act as non-inverting amplifiers.
    *   The input voltage $V_{in1}$ is applied to the non-inverting input of Op-amp 1.
    *   The input voltage $V_{in2}$ is applied to the non-inverting input of Op-amp 2.
    *   The gain of Op-amp 1 and Op-amp 2 is determined by the resistors $R1$ and $R_G$.

    *   **Consider $V_{in1}$ and $V_{in2}$:**
        *   The output of Op-amp 1 ($V_{out1}$) is given by: $V_{out1} = V_{in1} \left(1 + \frac{R1}{R_G}\right)$ (assuming Op-amp 1 is configured as a non-inverting amplifier with gain $1 + R1/R_G$).
        *   The output of Op-amp 2 ($V_{out2}$) is given by: $V_{out2} = V_{in2} \left(1 + \frac{R1}{R_G}\right)$ (assuming Op-amp 2 is configured as a non-inverting amplifier with gain $1 + R1/R_G$).

    *   **Crucial Point:** Notice that the resistor $R_G$ is common to both stages. This is key to controlling the gain.

*   **Stage 3 (Differential Amplifier):**
    *   Op-amp 3 is configured as a standard differential amplifier.
    *   Its inputs are the outputs of the first two stages ($V_{out1}$ and $V_{out2}$).
    *   The output of the differential amplifier ($V_{out}$) is given by:
        $V_{out} = \frac{R_f}{R2} (V_{out1} - V_{out2})$ (assuming $R2 = R3$ and $R_f$ is the feedback resistor).

    *   **Substituting $V_{out1}$ and $V_{out2}$:**
        $V_{out} = \frac{R_f}{R2} \left[ V_{in1} \left(1 + \frac{R1}{R_G}\right) - V_{in2} \left(1 + \frac{R1}{R_G}\right) \right]$
        $V_{out} = \frac{R_f}{R2} (V_{in1} - V_{in2}) \left(1 + \frac{R1}{R_G}\right)$

*   **Instrumentation Amplifier Gain:**
    The overall differential gain ($A_d$) of the instrumentation amplifier is:
    $A_d = \frac{V_{out}}{V_{in1} - V_{in2}} = \frac{R_f}{R2} \left(1 + \frac{R1}{R_G}\right)$

    *   **Gain Setting:** The gain can be precisely controlled by adjusting the single resistor $R_G$. If we set $R_f = R2$, the gain simplifies to:
        $A_d = 1 + \frac{R1}{R_G}$

### 2.2 Key Characteristics and Design Equations

**1. Differential Gain ($A_d$):**
*   As derived above: $A_d = \frac{R_f}{R2} \left(1 + \frac{R1}{R_G}\right)$.
*   **To achieve a gain of $1 + R1/R_G$, set $R_f = R2$.** This is a common practice.

**2. Input Impedance ($Z_{in}$):**
*   The input impedance seen at $V_{in1}$ and $V_{in2}$ is very high because they are connected to the non-inverting inputs of the op-amps.
*   For the three-op-amp configuration, the input impedance at each input terminal is:
    $Z_{in} = R_G \parallel (R1 + R_{source1})$ and $Z_{in} = R_G \parallel (R1 + R_{source2})$.
*   In practice, $R_G$ is typically chosen to be much smaller than the source impedances, effectively making the input impedance very high. The dominant term is often considered as $R_G$ if $R1$ is small.
*   More precisely, due to the high input impedance of the op-amps themselves, the input impedance is essentially determined by the resistors connected to the non-inverting inputs.

**3. Common-Mode Rejection Ratio (CMRR):**
*   The CMRR is a measure of how well the amplifier rejects unwanted common-mode signals. A high CMRR is crucial.
*   The CMRR is primarily determined by the matching of resistors $R1$ and $R_G$, and $R2$ and $R_f$.
*   In the three-op-amp configuration, the first stage (non-inverting amplifiers) provides most of the CMRR. If $R1$ and $R_G$ are precisely matched, and $R2$ and $R_f$ are also precisely matched, the CMRR can be very high.
*   The CMRR can be expressed as:
    $CMRR = \frac{A_d}{A_{cm}}$, where $A_{cm}$ is the common-mode gain.
    The common-mode gain ($A_{cm}$) for the three-op-amp configuration is typically very low, leading to a high CMRR.

**4. Bandwidth:**
*   The bandwidth of the instrumentation amplifier is typically limited by the unity-gain bandwidth of the op-amps used and the gain setting. Higher gains generally lead to lower bandwidths.

### 2.3 Example: Calculating Gain

Let's design an instrumentation amplifier to provide a gain of 100.

*   **Given:** $A_d = 100$.
*   **Design Choices:**
    *   Let $R1 = 10k\Omega$.
    *   To simplify, let's set $R_f = R2 = 10k\Omega$.
*   **Calculate $R_G$:**
    $A_d = 1 + \frac{R1}{R_G}$
    $100 = 1 + \frac{10k\Omega}{R_G}$
    $99 = \frac{10k\Omega}{R_G}$
    $R_G = \frac{10k\Omega}{99} \approx 101\Omega$

**Important Point:** In practical designs, using precision resistors with low temperature coefficients and good matching is essential for achieving high CMRR.

## 3. Integrated Instrumentation Amplifiers

Many manufacturers offer dedicated instrumentation amplifier ICs, which integrate the three-op-amp structure (or variations) into a single chip. These offer superior performance and ease of use.

### 3.1 Advantages of Integrated InAmps

*   **Excellent CMRR:** Internal laser trimming and precision component matching result in very high CMRR (often > 100 dB).
*   **High Input Impedance:** Typically mega-ohms or giga-ohms.
*   **Easy Gain Setting:** A single external resistor (often called $R_{gain}$ or $R_G$) sets the gain.
*   **Low Offset Voltage and Drift:** Minimizes errors due to temperature variations.
*   **Low Noise:** Designed for low-noise amplification.
*   **Smaller Footprint:** Reduces circuit board space.

### 3.2 Common Integrated Instrumentation Amplifiers

Some popular integrated instrumentation amplifiers include:

*   **AD620 (Analog Devices):** A widely used, general-purpose InAmp known for its ease of use and good performance. It has a gain-setting resistor ($R_G$) and offers a wide range of gains.
*   **INA114, INA118, INA128 (Texas Instruments):** A family of InAmps with varying specifications, offering options for low power, high precision, and high speed.

### 3.3 Example: Using the AD620

The AD620 is a prime example of an integrated instrumentation amplifier.

**Key Features of AD620:**

*   **Gain Formula:** $Gain = 1 + \frac{49.4k\Omega}{R_G}$ (This formula is specific to the AD620; always refer to the datasheet).
*   **Input Impedance:** Typically 10MΩ.
*   **CMRR:** 100 dB minimum at DC.
*   **Bandwidth:** Varies with gain.

**Circuit Diagram (Conceptual AD620 application):**

(Imagine an IC package for AD620.
*   Input terminals $V_{in1}$ and $V_{in2}$ are connected to the differential inputs.
*   An output terminal $V_{out}$.
*   A gain-setting resistor $R_G$ connected between the pin labeled 'RG' and ground.)

**Example: Designing for a gain of 100 with AD620:**

*   **Given:** $A_d = 100$.
*   **Using the AD620 gain formula:**
    $100 = 1 + \frac{49.4k\Omega}{R_G}$
    $99 = \frac{49.4k\Omega}{R_G}$
    $R_G = \frac{49.4k\Omega}{99} \approx 499\Omega$

**Important Point:** Always consult the datasheet of the specific integrated instrumentation amplifier for its gain formula, pin configurations, and recommended external components.

## 4. Applications of Instrumentation Amplifiers

Instrumentation amplifiers are vital in many measurement and control systems where accurate amplification of small differential signals is required.

### 4.1 Biomedical Instrumentation

*   **ECG (Electrocardiogram):** Amplifying the tiny differential voltage signals from the heart.
*   **EEG (Electroencephalogram):** Amplifying brainwave signals.
*   **EMG (Electromyogram):** Amplifying muscle activity signals.
*   **Blood Pressure Monitoring:** Amplifying signals from pressure transducers.
*   **Strain Gauge Measurements:** Amplifying small resistance changes in strain gauges.

### 4.2 Industrial Measurement and Control

*   **Temperature Measurement:** Amplifying signals from thermocouples or RTDs.
*   **Pressure Measurement:** Amplifying signals from pressure sensors.
*   **Load Cells:** Measuring weight and force.
*   **Flow Measurement:** Amplifying signals from flow sensors.
*   **Position Sensing:** Amplifying signals from potentiometers or LVDTs.

### 4.3 Signal Conditioning

*   **Sensor Interfacing:** Providing a robust interface for various types of sensors.
*   **Data Acquisition Systems:** Pre-conditioning signals before they are converted by ADCs.
*   **Audio Amplification:** In high-fidelity systems where low noise and high CMRR are desired.

## 5. Practical Considerations in Lab Experiments

When working with instrumentation amplifiers in the lab, consider the following:

### 5.1 Component Selection

*   **Resistors:** Use precision resistors (1% tolerance or better) for gain setting and feedback networks to ensure accurate gain and high CMRR. Metal film resistors are generally preferred for their stability and low temperature coefficient.
*   **Operational Amplifiers (for discrete design):** Choose op-amps with high CMRR, low input bias current, low offset voltage, and sufficient bandwidth for your application.

### 5.2 Power Supply Decoupling

*   Always connect bypass capacitors (e.g., 0.1µF ceramic) close to the power supply pins of the op-amps/IC to filter out noise and ensure stable operation.

### 5.3 Breadboarding vs. PCB Layout

*   **Breadboarding:** Can be prone to noise pickup due to long traces and parasitic capacitances. Keep connections short and organized.
*   **PCB Layout:** For critical applications, a well-designed PCB with proper grounding and shielding is essential for achieving optimal performance, especially high CMRR.

### 5.4 Measurement Techniques

*   **Oscilloscope:** Use the oscilloscope to observe input and output waveforms, measure gain, and check for common-mode rejection.
*   **Multimeter:** Use to measure DC voltages and resistor values.
*   **Function Generator:** Use to provide input signals (sine, square, or triangle waves).

## 6. Practice Questions and Answers

**Question 1 (Conceptual):** What are the main advantages of an instrumentation amplifier over a basic differential amplifier?

**Answer:** The main advantages are:
*   Very high input impedance.
*   High Common-Mode Rejection Ratio (CMRR).
*   Gain can be set with a single resistor without affecting input impedance or CMRR.
*   Low DC offset and low noise.

---

**Question 2 (Design):** Design a three-op-amp instrumentation amplifier to achieve a differential gain of 50. Assume you have $10k\Omega$ precision resistors available.

**Answer:**
Let $R1 = 10k\Omega$.
Set $R_f = R2 = 10k\Omega$.
The gain formula is $A_d = \frac{R_f}{R2} \left(1 + \frac{R1}{R_G}\right)$.
Since $R_f = R2$, $A_d = 1 + \frac{R1}{R_G}$.
$50 = 1 + \frac{10k\Omega}{R_G}$
$49 = \frac{10k\Omega}{R_G}$
$R_G = \frac{10k\Omega}{49} \approx 204\Omega$.
You would need to use a precision resistor close to $204\Omega$.

---

**Question 3 (Integrated IC):** If you use an AD620 instrumentation amplifier to achieve a gain of 20, what value of $R_G$ should you use?

**Answer:**
The gain formula for AD620 is $Gain = 1 + \frac{49.4k\Omega}{R_G}$.
$20 = 1 + \frac{49.4k\Omega}{R_G}$
$19 = \frac{49.4k\Omega}{R_G}$
$R_G = \frac{49.4k\Omega}{19} \approx 2.6k\Omega$.
You should use a $2.6k\Omega$ precision resistor.

---

**Question 4 (Application):** In a strain gauge measurement system, the differential voltage change is very small (millivolts), and the system is subject to significant electromagnetic interference. Which amplifier would be most suitable and why?

**Answer:** An instrumentation amplifier would be most suitable. Its high CMRR will effectively reject the electromagnetic interference (common-mode noise), and its high input impedance will not load the strain gauge. The high gain capability will allow for amplification of the small differential voltage changes.

---

**Question 5 (Analysis):** What happens to the gain of a three-op-amp instrumentation amplifier if the value of $R_G$ is increased?

**Answer:** If $R_G$ is increased, the term $R1/R_G$ decreases, and therefore the overall gain $A_d = \frac{R_f}{R2} (1 + \frac{R1}{R_G})$ will decrease.

---

**Question 6 (Theory):** What is the primary function of the first two op-amps in the three-op-amp instrumentation amplifier configuration?

**Answer:** The primary function of the first two op-amps is to act as non-inverting amplifiers that buffer the input signals and provide the primary stage of differential gain, while also achieving high input impedance. They are configured such that the gain is set by the common resistor $R_G$.

## 7. Key Points to Remember

*   **Instrumentation amplifiers are designed for precise amplification of small differential signals in the presence of large common-mode noise.**
*   **High CMRR and high input impedance are their defining characteristics.**
*   **The three-op-amp configuration achieves these characteristics through a combination of non-inverting amplifiers and a differential amplifier.**
*   **The gain is controlled by a single external resistor ($R_G$).**
*   **Integrated instrumentation amplifiers (like AD620, INA series) offer superior performance and ease of use.**
*   **Accurate gain setting and high CMRR rely heavily on the precision and matching of external resistors.**
*   **Applications span from biomedical to industrial measurement and control.**
