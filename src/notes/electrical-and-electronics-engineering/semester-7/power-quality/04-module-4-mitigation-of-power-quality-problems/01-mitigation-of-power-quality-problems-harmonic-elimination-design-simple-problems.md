---
title: "Mitigation of Power quality problems  - Harmonic elimination - Design simple problems and analysis of passive filters to reduce harmonic distortion – demerits of passive filters – description of active filters - shunt, series, hybrid filters, sag and swell correction using DVR"
subject: "POWER QUALITY"
module: "Module 4: Mitigation of Power quality problems  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3697c"
status: "completed"
scrapedAt: "2026-05-23T16:38:59.633Z"
---
# POWER QUALITY - Module 4: Mitigation of Power Quality Problems

This module delves into the crucial aspect of addressing and rectifying power quality issues. We will explore various mitigation techniques, focusing on harmonic reduction and solutions for voltage sags and swells, building upon the knowledge gained in previous modules.

**Learning Outcomes:**

*   Understand the principles and design of passive filters for harmonic reduction.
*   Analyze the limitations and demerits of passive filters.
*   Describe the operation and types of active filters (shunt, series, hybrid).
*   Explain the function of Dynamic Voltage Restorers (DVRs) in mitigating voltage sags and swells.

**Course Outcomes Alignment:**

*   **CO4: Examine power quality mitigation techniques.** (Knowledge Level: K2) - This entire module directly addresses this outcome by detailing various mitigation strategies.

---

## 1. Harmonic Elimination and Filtration

Harmonics are sinusoidal components of a periodic waveform having frequencies that are integer multiples of the fundamental frequency. They are a significant power quality problem caused by non-linear loads. Mitigation primarily involves filtering these unwanted harmonic frequencies.

### 1.1. Passive Filters

Passive filters are the most common and cost-effective method for harmonic mitigation. They consist of passive components: resistors (R), inductors (L), and capacitors (C).

#### 1.1.1. Types of Passive Filters

*   **Single-Tuned Filters:** These are designed to resonate at a specific harmonic frequency, effectively creating a low impedance path for that harmonic to be shunted to ground.
    *   **Series Resonant Filter:** An inductor and capacitor in series. This creates a high impedance at the resonant frequency, blocking the specific harmonic. However, this is less common for harmonic *elimination* and more for blocking specific frequencies from passing through.
    *   **Parallel Resonant Filter (Shunt Filter):** An inductor and capacitor in parallel. This is the most common type for harmonic current suppression. At the resonant frequency, the impedance becomes very high for the fundamental frequency and very low for the specific harmonic frequency it's tuned to.

*   **High-Pass Filters:** These allow frequencies above a certain cutoff frequency to pass and attenuate frequencies below it. They are useful for removing lower-order harmonics.
    *   **Simple RC or RL:** These provide a gradual attenuation.
    *   **Second-Order High-Pass Filter:** Consists of an inductor and capacitor, offering a sharper cutoff.

*   **Band-Pass Filters:** These attenuate frequencies above and below a specific band. They are effective for targeting a range of harmonics.
    *   **Second-Order Band-Pass Filter:** Typically involves an inductor, capacitor, and resistor.

*   **Band-Stop (Notch) Filters:** These attenuate frequencies within a specific band and allow frequencies outside of it to pass. They are used to block specific harmonics.
    *   **LC Notch Filter:** An inductor and capacitor in series, placed in parallel with the source to shunt the harmonic.

#### 1.1.2. Design of Simple Passive Filters (Single-Tuned Shunt Filter)

**Objective:** To design a shunt passive filter to reduce the distortion caused by a specific harmonic, typically the 5th harmonic in many systems.

**Key Concepts:**

*   **Resonant Frequency ($\omega_r$):** The frequency at which the inductive reactance ($X_L$) equals the capacitive reactance ($X_C$).
    *   $\omega_r = \frac{1}{\sqrt{LC}}$
*   **Tuning Frequency:** The harmonic frequency the filter is designed to resonate with. For a 5th harmonic filter, $\omega_r = 5 \omega_1$, where $\omega_1$ is the fundamental angular frequency.
*   **Impedance:** The opposition to current flow.
    *   $X_L = \omega L$
    *   $X_C = \frac{1}{\omega C}$
*   **Quality Factor (Q):** A measure of the sharpness of the resonance. A higher Q means a narrower bandwidth and better attenuation of the targeted harmonic.
    *   $Q = \frac{X_L}{R}$ (for series RLC) or $Q = \frac{R}{X_L}$ (for parallel RLC, with R being the parallel resistance). For a simple LC filter, the resistance of the inductor and any added resistor determines Q.
*   **Harmonic Current Absorption Capability:** The filter's ability to shunt a significant portion of the harmonic current. This is determined by the impedance of the filter at the harmonic frequency and the source impedance.

**Design Steps (Simplified):**

1.  **Identify the Dominant Harmonic:** Determine which harmonic frequency needs to be filtered (e.g., 5th harmonic).
2.  **Determine the Tuning Frequency:** $\omega_{tune} = h \omega_1$, where 'h' is the harmonic number.
3.  **Select the Capacitor Value (C):** This is often chosen based on voltage ratings and availability. A common starting point is to size the capacitor bank to provide a certain percentage of the fundamental reactive power required by the system.
4.  **Calculate the Required Inductor Value (L):** Using the tuning frequency, calculate L:
    *   $L = \frac{1}{\omega_{tune}^2 C}$
5.  **Calculate the Resistor Value (R) (for Q Factor):** If a specific Q is desired for a sharper response, a resistor can be added in series with the LC components or the capacitor can be chosen to have a specific internal resistance. For a series LC circuit tuned to resonance, $Q = \frac{\omega_r L}{R_{series}}$.
6.  **Calculate Reactances at Fundamental Frequency:**
    *   $X_{L1} = \omega_1 L$
    *   $X_{C1} = \frac{1}{\omega_1 C}$
7.  **Calculate Reactances at Tuning Frequency:**
    *   $X_{Lh} = h \omega_1 L$
    *   $X_{Ch} = \frac{1}{h \omega_1 C}$

**Example Problem 1: Design a single-tuned passive filter to shunt the 5th harmonic in a 60 Hz system.**

*   **System Voltage:** Assume 480 V.
*   **Target Harmonic:** 5th harmonic (300 Hz).
*   **Capacitor Selection:** Let's choose a capacitor bank of 10 kVAR at 480 V.
    *   $Q_{cap} = \frac{V^2}{X_C}$
    *   $X_C = \frac{V^2}{Q_{cap}} = \frac{(480 \text{ V})^2}{10 \times 10^3 \text{ VAR}} = 23.04 \Omega$
    *   $C = \frac{1}{\omega_1 X_C} = \frac{1}{(2\pi \times 60 \text{ Hz}) \times 23.04 \Omega} \approx 115.5 \mu F$

*   **Calculate Inductor for 5th Harmonic Tuning:**
    *   $\omega_{tune} = 5 \times 2\pi \times 60 \text{ Hz} = 1885 \text{ rad/s}$
    *   $L = \frac{1}{\omega_{tune}^2 C} = \frac{1}{(1885 \text{ rad/s})^2 \times 115.5 \times 10^{-6} \text{ F}} \approx 2.50 \text{ mH}$

*   **Calculate Reactances:**
    *   At fundamental frequency (60 Hz, $\omega_1 = 377$ rad/s):
        *   $X_{C1} = 23.04 \Omega$
        *   $X_{L1} = \omega_1 L = 377 \text{ rad/s} \times 2.50 \times 10^{-3} \text{ H} = 0.9425 \Omega$
    *   At 5th harmonic frequency (300 Hz, $\omega_5 = 1885$ rad/s):
        *   $X_{C5} = \frac{1}{\omega_5 C} = \frac{1}{1885 \text{ rad/s} \times 115.5 \times 10^{-6} \text{ F}} = 4.608 \Omega$
        *   $X_{L5} = \omega_5 L = 1885 \text{ rad/s} \times 2.50 \times 10^{-3} \text{ H} = 4.7125 \Omega$

*   **Analysis:** At the 5th harmonic, $X_{L5} \approx X_{C5}$. The impedance of the LC parallel combination at resonance is theoretically infinite, but in practice, it's limited by the resistance of the components. The filter presents a low impedance path for the 5th harmonic current, diverting it from the power system. The impedance at the fundamental frequency is high ($X_{C1} >> X_{L1}$), ensuring minimal shunting of the fundamental current.

#### 1.1.3. Demerits of Passive Filters

Passive filters are widely used but have significant drawbacks:

*   **Detuning:** Their performance is sensitive to changes in system frequency and component values.
    *   **Temperature Variations:** Component resistance and capacitance can change with temperature.
    *   **System Frequency Fluctuations:** If the system frequency deviates from the nominal value, the filter's tuning frequency will also shift, reducing its effectiveness.
    *   **Capacitor Aging:** Capacitors can degrade over time, changing their capacitance.
*   **Resonance Issues:**
    *   **Series Resonance:** If the filter is tuned to a harmonic (e.g., 5th), it can also resonate with other system components (source impedance, other filters) at different frequencies. This can lead to **parallel resonance**, which can amplify certain harmonics, exacerbating the power quality problem. This is particularly problematic if the filter impedance at the fundamental frequency is close to zero (e.g., a series LC filter).
    *   **Sub-synchronous Resonance:** Can occur if the filter's resonant frequency is below the fundamental.
*   **Oversized and Heavy:** Inductors, especially for low-frequency harmonics and higher currents, can be bulky and heavy, leading to higher installation costs and space requirements.
*   **Limited Flexibility:** Once designed for a specific harmonic, they cannot easily adapt to changes in the harmonic spectrum of the load.
*   **Energy Dissipation:** Resistors added for damping (to improve Q and prevent parallel resonance) dissipate energy as heat, leading to reduced system efficiency.
*   **Over-voltage Risk:** In some configurations, a passive filter might draw excessive reactive power at the fundamental frequency, leading to over-voltage conditions.
*   **Failure Modes:** Capacitor banks can fail short or open circuit, leading to different power quality issues. Inductors can also fail.

**Important Point to Remember:** The primary challenge with passive filters is their susceptibility to detuning and the potential for creating new resonance problems. Careful design and consideration of system impedance are crucial.

---

## 2. Active Harmonic Filters (AHFs)

Active filters are power electronic devices that actively inject compensating currents to cancel out harmonic currents generated by non-linear loads. They offer superior performance and flexibility compared to passive filters.

### 2.1. Description of Active Filters

AHFs work by sensing the harmonic currents in the system and generating equal and opposite "anti-harmonic" currents. These compensating currents are injected into the system, effectively canceling out the harmonics. They typically employ Voltage Source Inverters (VSIs) controlled by sophisticated algorithms.

**Key Components:**

*   **Voltage Source Inverter (VSI):** The core of the AHF, capable of generating controlled AC voltages/currents.
*   **DC Capacitor:** Stores energy for the inverter operation.
*   **Control Circuitry:** Uses PWM (Pulse Width Modulation) or other switching techniques to generate the required compensating currents.
*   **Sensors:** Current transformers (CTs) to measure harmonic currents and voltage sensors to monitor system voltage.

**Working Principle:**

1.  **Sensing:** The control system continuously monitors the current drawn by the non-linear load.
2.  **Harmonic Extraction:** Digital signal processing (DSP) techniques (like Fast Fourier Transform - FFT) or adaptive filters are used to extract the harmonic components from the measured current.
3.  **Compensation Current Generation:** The VSI, based on the extracted harmonic information, generates a compensating current that is equal in magnitude and opposite in phase to the harmonic currents.
4.  **Injection:** This compensating current is injected into the system, usually in parallel with the non-linear load.

### 2.2. Types of Active Filters

Based on their connection to the power system, AHFs are classified into three main types:

#### 2.2.1. Shunt Active Filters (SAFs)

*   **Connection:** Connected in parallel with the non-linear load.
*   **Function:** They inject compensating currents to cancel the harmonic currents generated by the load. They effectively act as current sources to inject the "negative" harmonics.
*   **Advantages:**
    *   Excellent for mitigating current harmonics injected by non-linear loads.
    *   Can also compensate for reactive power.
    *   Flexible and can adapt to changing harmonic spectra.
*   **Disadvantages:**
    *   Require a stable DC source (DC capacitor).
    *   The effectiveness depends on the source impedance. If the source impedance is very low, the harmonic currents will largely flow through the source rather than the SAF.
*   **Diagrammatic Representation:** Non-linear Load || SAF connected to the power grid.

#### 2.2.2. Series Active Filters (SAFs)

*   **Connection:** Connected in series with the load.
*   **Function:** They inject a voltage component to compensate for voltage distortions present in the supply line, thereby providing a clean voltage to the load. They act as voltage sources injecting "negative" voltage harmonics.
*   **Advantages:**
    *   Effective in mitigating voltage distortions (harmonics, sags, swells) originating from the supply side.
    *   Not dependent on source impedance for harmonic voltage compensation.
*   **Disadvantages:**
    *   Cannot mitigate current harmonics generated by the load itself, only those present in the supply.
    *   Require a DC energy source.
    *   The rating of the series active filter depends on the voltage it needs to inject, which can be substantial for large voltage deviations.
*   **Diagrammatic Representation:** Power Grid --- SAF --- Non-linear Load.

#### 2.2.3. Hybrid Active Filters

*   **Connection:** Combine the strengths of both shunt and series active filters, often with passive filters.
*   **Function:** Can mitigate both current and voltage harmonics, as well as reactive power.
*   **Types:**
    *   **Series-Shunt Hybrid:** A series active filter combined with a shunt passive filter. The shunt passive filter takes care of major harmonic currents, while the series active filter corrects voltage distortions and residual current harmonics.
    *   **Shunt Active Filter with Passive Filter:** A shunt active filter connected in series with a passive filter. This configuration can leverage the cost-effectiveness of passive filters for specific harmonics while using the active filter for dynamic compensation and other harmonics.
    *   **Series Active Filter with Passive Filter:** A series active filter to correct voltage and a shunt passive filter to shunt current harmonics.

*   **Advantages:**
    *   More effective and efficient than standalone active or passive filters.
    *   Can achieve higher levels of power quality improvement.
    *   Potentially lower cost than a full active filter system for certain applications.
*   **Disadvantages:**
    *   More complex control and design.
    *   Higher overall cost than individual filter types.

---

## 3. Sag and Swell Correction using Dynamic Voltage Restorer (DVR)

Voltage sags (dips) and swells are significant power quality issues characterized by a temporary decrease or increase in RMS voltage, respectively. Dynamic Voltage Restorers (DVRs) are custom power devices designed to protect sensitive loads from these voltage disturbances.

### 3.1. Description of DVR

A DVR is a series-connected custom power device that injects a voltage into the distribution network in series with the load voltage. This injected voltage is precisely controlled to compensate for voltage sags and swells, ensuring the load receives a stable and regulated voltage.

**Key Components of a DVR:**

1.  **Voltage Source Converter (VSC):** Usually a PWM voltage source inverter. This is the core of the DVR, responsible for generating the compensating voltage.
2.  **DC Energy Storage:** Typically a DC capacitor, but can also include batteries or other energy storage systems. This provides the energy required for the VSC to generate the compensating voltage.
3.  **Harmonic Filter:** A filter (usually passive LC) is connected at the output of the VSC to filter out switching harmonics and ensure a clean sinusoidal voltage injection.
4.  **Injection Transformer:** This transformer is connected in series with the distribution line and the DVR's harmonic filter. It injects the generated compensating voltage into the line.
5.  **Control System:** This is the brain of the DVR. It monitors the grid voltage and load current, determines the required compensation, and controls the VSC to inject the appropriate voltage.

**Working Principle:**

1.  **Monitoring:** The control system constantly monitors the RMS voltage of the incoming supply.
2.  **Detection:** When a voltage sag or swell is detected (deviation from the nominal voltage), the control system immediately determines the magnitude and phase of the voltage deviation.
3.  **Compensation Voltage Generation:** The VSC, based on the control signals, generates a compensating voltage that is added in series to the incoming supply voltage.
    *   **For Voltage Sag:** The DVR injects a voltage that is in phase with the distorted supply voltage and has a magnitude equal to the difference between the nominal voltage and the sagged voltage. This effectively "boosts" the voltage to the nominal level.
    *   **For Voltage Swell:** The DVR injects a voltage that is 180 degrees out of phase with the distorted supply voltage and has a magnitude equal to the difference between the swollen voltage and the nominal voltage. This effectively "boosts" the voltage to the nominal level.
4.  **Injection:** The injected voltage is passed through a harmonic filter and then through the injection transformer, which adds it in series with the supply voltage to the load.

**Mathematical Representation:**

*   Let $V_{supply}$ be the measured supply voltage.
*   Let $V_{load}$ be the desired load voltage (nominal voltage).
*   The DVR injects a voltage $V_{DVR}$.
*   The relationship is: $V_{supply} + V_{DVR} = V_{load}$
*   Therefore, $V_{DVR} = V_{load} - V_{supply}$

**Example Application:**

Consider a factory with sensitive CNC machines. If the supply voltage experiences a sag of 20% for 0.5 seconds, the CNC machines might malfunction or shut down. A DVR installed in series with the supply can detect this sag and inject a compensating voltage to maintain the voltage at the CNC machines at the nominal level, preventing the disruption.

**Advantages of DVRs:**

*   **Excellent Sag and Swell Mitigation:** They are highly effective in restoring the voltage to the nominal level during sags and swells.
*   **Fast Response:** They can respond to voltage disturbances in milliseconds.
*   **Precise Voltage Control:** Can precisely regulate the load voltage.
*   **Can Mitigate Other Disturbances:** Some advanced DVRs can also compensate for voltage unbalance and harmonics.
*   **Reduced Downtime:** Protects sensitive equipment from voltage variations, reducing costly downtime.

**Disadvantages of DVRs:**

*   **Cost:** DVRs are relatively expensive custom power devices, especially for high-power applications.
*   **DC Energy Storage Requirement:** The capacity of the DC energy storage determines the duration and depth of voltage disturbances that can be corrected.
*   **Complexity:** Requires sophisticated control systems and power electronics.
*   **Series Connection:** Being in series, any failure in the DVR can disrupt the power supply to the load. Thus, a bypass arrangement is usually included.

---

## Practice Questions and Answers

**Q1. Explain the principle of operation of a single-tuned passive filter.**

**Answer:** A single-tuned passive filter consists of an inductor (L) and a capacitor (C) connected in parallel. It is designed to resonate at a specific harmonic frequency. At this resonant frequency, the impedance of the parallel LC combination becomes very high, effectively blocking the flow of that harmonic current from the load into the power system. The filter also presents a low impedance path at the harmonic frequency, shunting the harmonic current to ground, thereby reducing harmonic distortion in the system. The Q factor of the filter determines the sharpness of the resonance.

**Q2. What are the main demerits of using passive filters for harmonic mitigation?**

**Answer:** The main demerits of passive filters include:
*   **Detuning:** Susceptibility to changes in system frequency, temperature, and component aging.
*   **Resonance Issues:** Potential for parallel resonance with system impedance, which can amplify other harmonics.
*   **Oversized and Heavy:** Particularly inductors for low harmonics can be bulky.
*   **Limited Flexibility:** Cannot adapt to changing harmonic spectra.
*   **Energy Dissipation:** Resistors added for damping dissipate power.
*   **Over-voltage Risk:** Can draw excessive reactive power.

**Q3. Differentiate between shunt and series active filters in terms of their function and connection.**

**Answer:**
*   **Shunt Active Filters (SAFs):** Connected in parallel with the non-linear load. Their primary function is to inject compensating currents to cancel out harmonic currents generated by the load. They act as current sources.
*   **Series Active Filters (SAFs):** Connected in series with the load. Their primary function is to inject compensating voltages to correct voltage distortions present in the supply, thereby providing a clean voltage to the load. They act as voltage sources.

**Q4. A 5th harmonic is dominant in a 400V, 50Hz system. Design a single-tuned passive filter to shunt this harmonic. Assume a capacitor of $20 \mu F$.**

**Answer:**
*   **System Voltage:** $V_{rms} = 400$ V
*   **System Frequency:** $f_1 = 50$ Hz, $\omega_1 = 2\pi \times 50 = 314.16$ rad/s
*   **Target Harmonic:** 5th harmonic, $h=5$
*   **Tuning Frequency:** $f_{tune} = 5 \times 50 = 250$ Hz, $\omega_{tune} = 5 \times \omega_1 = 5 \times 314.16 = 1570.8$ rad/s
*   **Capacitance:** $C = 20 \mu F = 20 \times 10^{-6}$ F

1.  **Calculate the Inductor (L):**
    $L = \frac{1}{\omega_{tune}^2 C} = \frac{1}{(1570.8 \text{ rad/s})^2 \times (20 \times 10^{-6} \text{ F})} = \frac{1}{2.467 \times 10^6 \times 20 \times 10^{-6}} = \frac{1}{49.34} \approx 0.02027$ H = 20.27 mH

2.  **Calculate Reactances at Fundamental Frequency (50 Hz):**
    $X_{C1} = \frac{1}{\omega_1 C} = \frac{1}{314.16 \times 20 \times 10^{-6}} = \frac{1}{6.283 \times 10^{-3}} \approx 159.15 \Omega$
    $X_{L1} = \omega_1 L = 314.16 \times 0.02027 \approx 6.37 \Omega$
    At fundamental frequency, $X_{C1} >> X_{L1}$, so the filter presents a high impedance.

3.  **Calculate Reactances at 5th Harmonic Frequency (250 Hz):**
    $X_{C5} = \frac{1}{\omega_{tune} C} = \frac{1}{1570.8 \times 20 \times 10^{-6}} = \frac{1}{0.031416} \approx 31.83 \Omega$
    $X_{L5} = \omega_{tune} L = 1570.8 \times 0.02027 \approx 31.83 \Omega$
    At the 5th harmonic frequency, $X_{L5} \approx X_{C5}$, confirming resonance. The filter will shunt the 5th harmonic current.

**Q5. How does a Dynamic Voltage Restorer (DVR) correct voltage sags and swells?**

**Answer:** A DVR is a series-connected custom power device that injects a compensating voltage into the distribution line.
*   **For Voltage Sags:** The DVR detects the sag and injects a voltage that is in phase with the supply voltage. The magnitude of this injected voltage is equal to the difference between the nominal voltage and the sagged voltage. This addition restores the voltage to the nominal level for the load.
*   **For Voltage Swells:** The DVR detects the swell and injects a voltage that is 180 degrees out of phase with the supply voltage. The magnitude of this injected voltage is equal to the difference between the swollen voltage and the nominal voltage. This subtraction effectively reduces the voltage to the nominal level for the load.

---

## Important Points to Remember

*   **Passive filters are cost-effective but suffer from detuning and resonance issues.**
*   **Active filters offer superior performance and flexibility but are more expensive.**
*   **Shunt active filters mitigate current harmonics; Series active filters mitigate voltage distortions.**
*   **Hybrid filters combine the benefits of active and passive filters.**
*   **DVRs are series-connected devices specifically designed to mitigate voltage sags and swells by injecting a compensating voltage.**
*   **The choice of mitigation technique depends on the nature of the power quality problem, the sensitivity of the load, and economic considerations.**
*   **Understanding system impedance is crucial for designing effective passive filters and analyzing the performance of active filters.**

---

**Textbook References:**

*   **Electrical Power System Quality by R. C. Dugan, M. F. Me Granaghen, H. W. Beaty:** Provides detailed explanations of harmonic phenomena, filter design principles (Chapter 6), and custom power devices like DVRs (Chapter 7).
*   **Power Quality by C. Sankaran:** Covers harmonic mitigation techniques extensively, including passive and active filters (Chapter 5), and DVRs for voltage sag/swell compensation (Chapter 6).
*   **Understanding Power Quality Problems by Math H. Bollen:** Offers a deep dive into the theory of harmonics, resonance phenomena, and a comprehensive overview of mitigation strategies, including active filters and DVRs.
*   **Power Quality problems and mitigation techniques by Bhim Singh, Ambrish Chandra and Kamal Al-Haddad:** Provides practical design considerations for passive and active filters, and detailed analysis of DVRs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
