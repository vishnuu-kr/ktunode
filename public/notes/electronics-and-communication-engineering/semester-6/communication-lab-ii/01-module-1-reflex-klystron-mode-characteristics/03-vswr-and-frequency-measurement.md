---
title: "VSWR and Frequency measurement."
subject: "COMMUNICATION LAB II"
module: "Module 1: Reflex Klystron Mode Characteristics."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff0b3"
status: "completed"
scrapedAt: "2026-05-23T17:59:37.198Z"
---
# COMMUNICATION LAB II - Module 1: Reflex Klystron Mode Characteristics

## Topic: VSWR and Frequency Measurement

---

### 1. Introduction to VSWR and Frequency Measurement in Microwave Systems

This section introduces the fundamental concepts of Voltage Standing Wave Ratio (VSWR) and frequency measurement, which are crucial for characterizing the performance of microwave components, particularly the Reflex Klystron, in Communication Lab II. Understanding these parameters is directly related to **CO1: Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. (Knowledge Level: K4)**.

*   **What are VSWR and Frequency Measurement?**
    *   **VSWR (Voltage Standing Wave Ratio):** A dimensionless quantity that describes how well a load is matched to a transmission line. It represents the ratio of the maximum amplitude to the minimum amplitude of the voltage standing wave along the transmission line. A low VSWR indicates a good impedance match, minimizing reflections and maximizing power transfer.
    *   **Frequency Measurement:** Determining the operating frequency of a microwave signal, which is critical for ensuring proper operation of microwave circuits and systems, especially with resonant devices like the Reflex Klystron.

*   **Importance in Reflex Klystron Operation:**
    *   The Reflex Klystron is a negative-resistance oscillator used as a tunable microwave source. Its efficiency and output power are highly dependent on the impedance match to the load and its operating frequency.
    *   Measuring VSWR helps in understanding the quality of the match between the Klystron's output cavity and the transmission line/load.
    *   Measuring the frequency of oscillation is essential to verify its tuning range and ensure it operates at the desired frequency for a given application.

*   **Textbook References:**
    *   **Microwave Devices and Circuits by Samuel Y. Liao:** This textbook provides a foundational understanding of microwave components and measurements, including VSWR and its significance. Liao's book is likely to cover the principles of impedance matching and the impact of reflections on system performance.
    *   **Principles of Electromagnetics by N.O. Sadiku and S.V. Kulkarni:** While broader in scope, this reference book will offer the underlying electromagnetic principles that govern wave propagation, reflections, and standing waves on transmission lines, which are the basis for VSWR.

---

### 2. Understanding Voltage Standing Wave Ratio (VSWR)

This section delves deeper into the concept of VSWR, its derivation, and its implications for microwave systems.

#### 2.1. Reflection Coefficient and VSWR

*   **Concept of Reflection:** When a microwave signal encounters a discontinuity or an impedance mismatch in a transmission line, a portion of the incident power is reflected back towards the source.
    *   **Incident Wave:** The wave traveling from the source towards the load.
    *   **Reflected Wave:** The wave traveling back from the load towards the source due to mismatch.
    *   **Transmitted Wave:** The wave that successfully passes through the discontinuity and reaches the load.

*   **Reflection Coefficient ($\Gamma$):**
    *   Defined as the ratio of the reflected voltage wave to the incident voltage wave at the point of mismatch.
    *   $\Gamma = \frac{V_{reflected}}{V_{incident}}$
    *   For a transmission line with characteristic impedance $Z_0$ and a load impedance $Z_L$, the reflection coefficient at the load is:
        $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$
    *   The magnitude of the reflection coefficient, $|\Gamma|$, ranges from 0 (perfect match) to 1 (total reflection).

*   **Standing Waves:** The superposition of the incident and reflected waves along the transmission line creates a pattern of stationary waves, known as standing waves.
    *   **Nodes:** Points of minimum voltage amplitude.
    *   **Antinodes (or Loops):** Points of maximum voltage amplitude.

*   **Derivation of VSWR:**
    *   The total voltage along the transmission line is the phasor sum of the incident and reflected waves: $V(z) = V_{incident} e^{-j\beta z} + V_{reflected} e^{j\beta z}$.
    *   At points of constructive interference (antinodes), the voltage is maximum: $|V_{max}| = |V_{incident}| + |V_{reflected}| = |V_{incident}|(1 + |\Gamma|)$.
    *   At points of destructive interference (nodes), the voltage is minimum: $|V_{min}| = |V_{incident}| - |V_{reflected}| = |V_{incident}|(1 - |\Gamma|)$.
    *   VSWR is defined as the ratio of the maximum voltage to the minimum voltage:
        $VSWR = \frac{|V_{max}|}{|V_{min}|} = \frac{|V_{incident}|(1 + |\Gamma|)}{|V_{incident}|(1 - |\Gamma|)} = \frac{1 + |\Gamma|}{1 - |\Gamma|}$

*   **Relationship between VSWR and Reflection Coefficient Magnitude:**
    *   If $|\Gamma| = 0$ (perfect match), $VSWR = \frac{1+0}{1-0} = 1$.
    *   If $|\Gamma| = 0.5$, $VSWR = \frac{1+0.5}{1-0.5} = \frac{1.5}{0.5} = 3$.
    *   If $|\Gamma| = 1$ (total reflection), $VSWR \to \infty$.

*   **Importance of VSWR:**
    *   **Impedance Matching:** A VSWR of 1:1 (or simply 1) signifies a perfect impedance match, meaning all incident power is delivered to the load.
    *   **Power Transfer:** High VSWR indicates reflections, leading to reduced power transfer to the load and potentially overheating of the source due to reflected power.
    *   **Signal Distortion:** Reflections can cause signal distortion by introducing phase shifts and amplitude variations, especially in broadband systems.
    *   **Component Degradation:** Excessive reflected power can damage sensitive microwave components.

*   **Example:** If a load has a reflection coefficient of magnitude 0.2, the VSWR is $\frac{1+0.2}{1-0.2} = \frac{1.2}{0.8} = 1.5$. This means the voltage at the antinodes is 1.5 times greater than the voltage at the nodes.

*   **Textbook References:**
    *   **Microwave Devices and Circuits by Samuel Y. Liao:** Liao's book will have detailed explanations and derivations of VSWR from fundamental principles of transmission lines and wave propagation.

---

#### 2.2. Measuring VSWR using a Slotted Section and VSWR Meter

This section outlines the practical method of measuring VSWR in a lab setting, often using a slotted section of waveguide or coaxial line. This directly addresses **CO1: Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. (Knowledge Level: K4)**.

*   **Components of the Measurement Setup:**
    *   **Microwave Source:** Typically a Reflex Klystron or a Gunn diode.
    *   **Variable Attenuator:** To control the power level.
    *   **Frequency Meter:** To measure the operating frequency (discussed later).
    *   **Slotted Section:** A section of waveguide or coaxial line with a longitudinal slot. The slot allows a probe to scan the electric field distribution along the line.
    *   **Probe:** A small antenna (dipole or loop) mounted on a carriage that moves along the slot.
    *   **Crystal Detector (or Diode Detector):** Converts the microwave signal picked up by the probe into a DC voltage proportional to the power.
    *   **VSWR Meter (or DC Voltmeter/Microammeter):** Amplifies and displays the output of the crystal detector.
    *   **Matched Load:** Used to terminate the transmission line to represent a specific load condition.

*   **Measurement Procedure:**
    1.  **Setup:** Assemble the microwave bench. Connect the source, attenuator, frequency meter, and the slotted section. Connect the probe of the slotted section to the crystal detector, and the detector output to the VSWR meter. Terminate the far end of the slotted section with a matched load.
    2.  **Tuning and Frequency Setting:** Set the source to the desired operating frequency.
    3.  **Initial Reading:** Move the probe along the slotted section and observe the output on the VSWR meter. Due to the matched load, the voltage should be relatively constant, indicating a low VSWR.
    4.  **Identifying Nodes and Antinodes:** Introduce a mismatch (e.g., by replacing the matched load with a short circuit, open circuit, or a mismatched load). Slowly move the probe along the slotted section. The VSWR meter will show variations in the detected voltage. Identify the positions of maximum voltage (antinodes) and minimum voltage (nodes).
    5.  **Determining VSWR:**
        *   **Method 1: Ratio of Max/Min Voltages:**
            *   Set the probe at a position of maximum voltage and record the reading on the VSWR meter ($V_{max}$).
            *   Move the probe to a position of minimum voltage and record the reading ($V_{min}$).
            *   Calculate VSWR: $VSWR = \frac{V_{max}}{V_{min}}$. *Note: The VSWR meter often has a scale that directly displays VSWR after calibration.*
        *   **Method 2: 3 dB Method (if applicable):** This method is more accurate. Find the point of maximum voltage ($V_{max}$). Then, move the probe away from this point in either direction until the voltage drops to $\frac{V_{max}}{\sqrt{2}}$ (which corresponds to a power drop of half, or -3 dB). The distance between these two points is half a wavelength ($\lambda_g/2$) of the standing wave. The distance between two consecutive nodes or antinodes is $\lambda_g/2$.
    6.  **Calibration:** Before measurement, the VSWR meter is usually calibrated with the attenuator set to give a full-scale deflection (representing maximum voltage) when the probe is at an antinode. Then, the minimum is read.

*   **Practical Considerations:**
    *   **Probe Depth:** The depth of the probe into the slotted section affects the amount of power coupled to the detector. It should be set to avoid disturbing the standing wave pattern significantly and to get a readable signal without overloading the detector.
    *   **VSWR Meter Sensitivity:** Adjust the sensitivity of the VSWR meter for clear readings of both maximum and minimum voltages.
    *   **Slotted Section Quality:** The accuracy of the measurement depends on the straightness of the slot and the proper functioning of the probe carriage.
    *   **Detector Law:** Crystal detectors have a non-linear response. The VSWR meter often incorporates a correction for this detector law, or the measurement might be done under conditions where the response is approximately square-law (low power) or linear (high power).

*   **Example:** In a measurement, $V_{max}$ is read as 10 units and $V_{min}$ is read as 2 units. The VSWR is $10/2 = 5$.

*   **Textbook References:**
    *   **Microwave Devices and Circuits by Samuel Y. Liao:** Liao's book will provide detailed schematics and explanations of the slotted section and the measurement setup.

---

### 3. Frequency Measurement in Microwave Systems

This section focuses on the methods and importance of measuring the frequency of microwave signals, again aligning with **CO1: Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. (Knowledge Level: K4)**.

#### 3.1. Importance of Frequency Measurement

*   **Resonant Devices:** The Reflex Klystron is a resonant device. Its oscillation frequency is determined by the resonant frequency of its cavity, which is tunable by adjusting the repeller voltage.
*   **System Tuning:** Microwave systems are often designed to operate at specific frequencies. Accurate frequency measurement ensures that components like filters, antennas, and mixers are operating at their intended frequencies.
*   **Verification of Klystron Performance:** Confirming that the Reflex Klystron is oscillating at the expected frequency for a given repeller voltage.
*   **Bandwidth Analysis:** Understanding the operating frequency range of a device or system.

#### 3.2. Methods of Frequency Measurement

There are several methods to measure microwave frequencies, ranging from direct reading to indirect methods.

*   **Wavemeters:**
    *   **Princ:** A wavemeter is a resonant circuit tuned to the unknown frequency. When the wavemeter is tuned to match the frequency of the signal, maximum energy is absorbed or coupled, indicated by a dip in power or a peak in a detected signal.
    *   **Types:**
        *   **Absorption Wavemeter:** A tuned cavity or a resonant stub that absorbs maximum power at its resonant frequency. The resonance is indicated by a dip in the power delivered to the load (read on a power meter or observed on the VSWR meter).
        *   **Transmission Wavemeter:** A resonant cavity that allows maximum transmission of energy when tuned to the signal frequency.
        *   **Dielectric Wavemeter:** Uses a dielectric material to tune the resonance.
        *   **Microwave Spectrum Analyzer:** A sophisticated instrument that displays the signal's power as a function of frequency, allowing direct reading of the frequency.

*   **Frequency Counter:**
    *   **Princ:** Directly counts the cycles of the microwave signal. High-frequency signals require specialized techniques like heterodyning or frequency division to bring them within the range of standard counters.
    *   **Heterodyning:** The unknown microwave frequency ($f_{RF}$) is mixed with a known local oscillator (LO) frequency ($f_{LO}$) to produce a difference frequency ($|f_{RF} - f_{LO}|$) or sum frequency ($f_{RF} + f_{LO}$). This difference or sum frequency, which is lower, is then measured by a standard frequency counter. The unknown frequency is calculated as $f_{RF} = f_{LO} \pm f_{IF}$ (where $f_{IF}$ is the intermediate frequency measured by the counter).

*   **Using the Slotted Section (Indirect Method):**
    *   **Princ:** The wavelength of the standing wave pattern in the slotted section is related to the signal frequency. The relationship between the wavelength in the transmission line ($\lambda_g$) and free-space wavelength ($\lambda$) depends on the propagation mode and the medium. For lossless lines: $\lambda_g = \frac{\lambda}{\sqrt{1-\epsilon_r}}$ for dielectrically filled lines, and for a dominant mode in a waveguide, $\lambda_g = \frac{\lambda}{\sqrt{1 - (\lambda/\lambda_c)^2}}$, where $\lambda_c$ is the cutoff wavelength.
    *   **Procedure:**
        1.  Measure the distance between two consecutive nodes or antinodes in the slotted section. This distance is half the guide wavelength: $d = \lambda_g / 2$. Therefore, $\lambda_g = 2d$.
        2.  Know or determine the cutoff wavelength ($\lambda_c$) of the transmission line (e.g., for a specific waveguide size or coaxial cable geometry).
        3.  Calculate the free-space wavelength ($\lambda$) using the appropriate formula: $\lambda = \frac{\lambda_g}{\sqrt{1 - (\lambda/\lambda_c)^2}}$ (for waveguides). This equation is implicit in $\lambda$. It's easier to rearrange to find frequency:
            $\lambda_g^2 = \frac{\lambda^2}{1 - (\lambda/\lambda_c)^2}$
            $\lambda_g^2 (1 - (\lambda/\lambda_c)^2) = \lambda^2$
            $\lambda_g^2 - \lambda_g^2 \frac{\lambda^2}{\lambda_c^2} = \lambda^2$
            $\lambda_g^2 = \lambda^2 (1 + \frac{\lambda_g^2}{\lambda_c^2})$
            $\frac{\lambda_g^2}{\lambda^2} = 1 + \frac{\lambda_g^2}{\lambda_c^2}$
            $\lambda^2 = \frac{\lambda_g^2}{1 + \frac{\lambda_g^2}{\lambda_c^2}} = \frac{\lambda_g^2 \lambda_c^2}{\lambda_c^2 + \lambda_g^2}$
            $\lambda = \frac{\lambda_g \lambda_c}{\sqrt{\lambda_c^2 + \lambda_g^2}}$
        4.  Once $\lambda$ is known, the frequency $f$ can be calculated using the relation $c = f\lambda$, where $c$ is the speed of light in vacuum (approximately $3 \times 10^8$ m/s).
            $f = \frac{c}{\lambda} = \frac{c \sqrt{\lambda_c^2 + \lambda_g^2}}{\lambda_g \lambda_c}$
            Or, using the waveguide dispersion relation:
            $f = \sqrt{f_c^2 + (\frac{c}{\lambda_g})^2}$, where $f_c = c/\lambda_c$ is the cutoff frequency.

*   **Example:**
    *   In a waveguide with a cutoff frequency $f_c = 4$ GHz, the measured distance between nodes is 4 cm (so $\lambda_g = 8$ cm = 0.08 m).
    *   Using $f = \sqrt{f_c^2 + (\frac{c}{\lambda_g})^2}$:
        $f_c = 4 \times 10^9$ Hz
        $c = 3 \times 10^8$ m/s
        $\lambda_g = 0.08$ m
        $f = \sqrt{(4 \times 10^9)^2 + (\frac{3 \times 10^8}{0.08})^2}$
        $f = \sqrt{16 \times 10^{18} + (3.75 \times 10^9)^2}$
        $f = \sqrt{16 \times 10^{18} + 14.0625 \times 10^{18}}$
        $f = \sqrt{30.0625 \times 10^{18}} \approx 5.48 \times 10^9$ Hz = 5.48 GHz.

*   **Textbook References:**
    *   **Microwave Devices and Circuits by Samuel Y. Liao:** Liao will likely cover wavemeters and the principles of frequency measurement using them.
    *   **Principles of Electromagnetics by N.O. Sadiku and S.V. Kulkarni:** Sadiku and Kulkarni's book is crucial for understanding the dispersion relations in waveguides and transmission lines, which are essential for indirect frequency measurements.

---

### 4. Measuring Reflex Klystron Mode Characteristics (Relating VSWR and Frequency)

This section connects the measurement techniques to the specific context of the Reflex Klystron, fulfilling the core objective of the module and supporting **CO1: Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. (Knowledge Level: K4)**.

*   **Objective:** To understand how the output characteristics (VSWR and frequency) of a Reflex Klystron change with its operating parameters, particularly the repeller voltage.

*   **Experiment Setup:**
    *   Reflex Klystron
    *   Klystron power supply (providing beam voltage, filament voltage, and repeller voltage)
    *   Slotted section
    *   VSWR meter
    *   Frequency meter (e.g., wavemeter)
    *   Matched load
    *   Variable attenuator

*   **Procedure:**
    1.  **Initial Settings:** Set the Klystron's filament voltage and beam voltage to the recommended values. Connect the output of the Klystron to the slotted section.
    2.  **Repeller Voltage Scan:**
        *   Start with a low repeller voltage.
        *   Tune the wavemeter to find the operating frequency of the Klystron. Record the frequency.
        *   In the slotted section, with a matched load at the end, adjust the probe position and VSWR meter sensitivity to get a reading. While the matched load should give a low VSWR, the Klystron output itself might have some inherent mismatch. Measure the VSWR.
        *   Increment the repeller voltage in small steps.
        *   At each repeller voltage, measure and record:
            *   The operating frequency using the wavemeter.
            *   The VSWR at the output of the Klystron (by probing the standing wave pattern and calculating $V_{max}/V_{min}$).
    3.  **Data Collection:** Continue this process over the expected tuning range of the Klystron.
    4.  **Analysis:**
        *   Plot the operating frequency versus repeller voltage. This shows the tuning characteristic of the Klystron.
        *   Plot the VSWR versus repeller voltage. This shows how the impedance match of the Klystron varies with repeller voltage.
        *   Plot the output power (related to $V_{max}$ in the slotted section) versus repeller voltage. This helps identify the Klystron modes.

*   **Klystron Modes and Their Relation to VSWR/Frequency:**
    *   **Modes of Operation:** The Reflex Klystron exhibits distinct "modes" of oscillation, which are regions of operation where the Klystron efficiently generates power. These modes occur at specific repeller voltages for a given beam voltage.
    *   **Mode Jumps:** As the repeller voltage is changed, the Klystron can "jump" from one mode to another.
    *   **VSWR Variations:** The impedance presented by the Klystron's output cavity to the transmission line is not constant. It varies with the repeller voltage and the operating mode. This variation leads to changes in the VSWR. Typically, the Klystron is designed to have a reasonably low VSWR over its tuning range within a mode, but it can be high at the boundaries between modes or when operating inefficiently.
    *   **Frequency Tuning within a Mode:** Within a specific mode, the operating frequency can be tuned by adjusting the repeller voltage. This tuning is generally monotonic (either increasing or decreasing) within the mode. The frequency change per unit change in repeller voltage is the frequency pulling characteristic.

*   **Connecting to Course Outcomes:**
    *   This entire section directly addresses **CO1 (K4)** by providing a practical analysis of microwave measurements (VSWR and frequency) applied to a fundamental microwave component (Reflex Klystron).

*   **Highlight Important Points:**
    *   The repeller voltage is the primary control for both frequency tuning and mode selection in a Reflex Klystron.
    *   VSWR measurements reveal the impedance matching characteristics of the Klystron output.
    *   Frequency measurements confirm the Klystron's operating frequency and its tunability.
    *   Plotting these parameters versus repeller voltage provides a comprehensive understanding of the Klystron's performance map.

---

### 5. Practice Questions and Answers

**Question 1:** Define VSWR and explain its significance in microwave systems. What is the relationship between VSWR and the reflection coefficient magnitude?

**Answer:**
VSWR (Voltage Standing Wave Ratio) is a dimensionless parameter that quantifies the degree of mismatch between a transmission line and its load. It is defined as the ratio of the maximum voltage amplitude to the minimum voltage amplitude of the standing wave pattern on the line.
Significance:
*   **Impedance Matching:** A low VSWR (ideally 1) indicates a good impedance match, maximizing power transfer from the source to the load.
*   **Power Loss:** High VSWR signifies reflections, leading to reduced power delivery and potential damage to components from reflected power.
*   **Signal Integrity:** Reflections can cause signal distortion.
Relationship with Reflection Coefficient Magnitude ($|\Gamma|$):
$VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$

**Question 2:** Describe the basic setup for measuring VSWR using a slotted section. How do you determine the VSWR from the readings?

**Answer:**
The setup includes a microwave source, an attenuator, a slotted section with a probe and carriage, a crystal detector, and a VSWR meter.
Procedure:
1.  Connect the source to the slotted section and terminate the end with a load.
2.  Introduce a mismatch (e.g., short circuit).
3.  Move the probe along the slot and observe the voltage readings on the VSWR meter.
4.  Identify the position of maximum voltage ($V_{max}$) and minimum voltage ($V_{min}$).
5.  VSWR is calculated as the ratio $VSWR = V_{max} / V_{min}$. Often, the VSWR meter is calibrated to display this ratio directly.

**Question 3:** Explain how the wavelength measured in a slotted section of a waveguide can be used to determine the frequency of the signal, given the cutoff frequency of the waveguide.

**Answer:**
The guide wavelength ($\lambda_g$) measured from the distance between nodes or antinodes in the slotted section, and the cutoff wavelength ($\lambda_c$) (related to the cutoff frequency $f_c = c/\lambda_c$), can be used to determine the signal frequency ($f$). The relationship for a waveguide is $f = \sqrt{f_c^2 + (c/\lambda_g)^2}$, where $c$ is the speed of light. By measuring $\lambda_g$ and knowing $f_c$, the frequency $f$ can be calculated.

**Question 4:** For a Reflex Klystron, what parameter is primarily varied to achieve frequency tuning and how does this affect the VSWR?

**Answer:**
The repeller voltage is the primary parameter varied for frequency tuning in a Reflex Klystron. As the repeller voltage is changed, the Klystron operates in different modes or tunes within a mode. This variation in repeller voltage also affects the impedance match of the Klystron's output cavity, leading to changes in the VSWR. The VSWR is generally expected to be lowest in the center of an efficient operating mode and may increase at the mode boundaries.

**Question 5:** (Practical Application) If you measure a $V_{max}$ of 15 units and a $V_{min}$ of 3 units on a VSWR meter when measuring the output of a Klystron into a mismatched load, what is the VSWR? What does this imply about the impedance match?

**Answer:**
$VSWR = V_{max} / V_{min} = 15 / 3 = 5$.
This VSWR of 5 indicates a significant impedance mismatch. It implies that the load impedance is far from being matched to the transmission line impedance ($Z_0$). A large portion of the power incident on the load will be reflected back.

---

### 6. Important Points to Remember

*   **VSWR = 1:** Perfect impedance match, no reflections.
*   **VSWR > 1:** Impedance mismatch, reflections present.
*   **VSWR tends to infinity:** Total reflection.
*   **Frequency measurement is crucial** for resonant devices like Reflex Klystrons and for overall system tuning.
*   **Slotted sections** are common tools for measuring standing wave patterns to determine VSWR and guide wavelength.
*   **The repeller voltage** in a Reflex Klystron controls both its operating frequency and the mode of oscillation.
*   **The relationship between frequency, guide wavelength, and cutoff frequency** is fundamental for frequency measurements in waveguides.
*   **Accurate measurements** require careful setup, calibration, and understanding of the limitations of the measuring instruments.

---

This comprehensive study note covers the essential aspects of VSWR and frequency measurement in the context of Communication Lab II, specifically focusing on Reflex Klystron mode characteristics. It draws upon the principles outlined in the referenced textbooks and aligns with the course outcomes by focusing on practical analysis of microwave measurements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
