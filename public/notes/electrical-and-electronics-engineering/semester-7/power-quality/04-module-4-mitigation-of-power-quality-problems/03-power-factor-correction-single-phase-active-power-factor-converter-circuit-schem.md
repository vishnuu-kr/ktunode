---
title: "Power factor correction  – Single phase active power factor converter – circuit schematic and control block diagram"
subject: "POWER QUALITY"
module: "Module 4: Mitigation of Power quality problems  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3697e"
status: "completed"
scrapedAt: "2026-05-23T16:39:02.418Z"
---
# POWER QUALITY - Module 4: Mitigation of Power Quality Problems

## Topic: Power Factor Correction – Single-Phase Active Power Factor Converter

### 1. Introduction to Power Factor

#### 1.1. What is Power Factor?

*   **Definition:** Power factor (PF) is the ratio of real power (kW) to apparent power (kVA). It represents how effectively electrical power is being used in a system.
*   **Formula:** PF = Real Power (kW) / Apparent Power (kVA)
*   **Importance:** A higher power factor indicates more efficient use of electrical energy. A low power factor means that a larger amount of apparent power is required to deliver the same amount of real power, leading to inefficiencies.

#### 1.2. Types of Power Factor

*   **Leading Power Factor:** Occurs when the current leads the voltage (typical of capacitive loads).
*   **Lagging Power Factor:** Occurs when the current lags the voltage (typical of inductive loads). Most industrial loads are inductive.
*   **Unity Power Factor:** Occurs when current and voltage are in phase (ideal scenario).

#### 1.3. Causes of Low Power Factor

*   **Inductive Loads:** Motors, transformers, induction furnaces, fluorescent lighting ballasts. These loads require reactive power (kVAr) to establish and maintain magnetic fields.
*   **Non-linear Loads:** Electronic devices like rectifiers, variable speed drives, and switching power supplies draw non-sinusoidal currents, which contribute to poor power factor.

#### 1.4. Consequences of Low Power Factor

*   **Increased Current:** For the same amount of real power, a lower PF means higher current is drawn. This can overload transformers, cables, and switchgear.
*   **Increased Losses:** Higher currents lead to increased $I^2R$ losses in conductors and equipment, resulting in energy waste.
*   **Voltage Drop:** Higher currents cause greater voltage drops along transmission and distribution lines, potentially affecting the performance of sensitive equipment.
*   **Penalties from Utilities:** Many utilities impose penalties on consumers with a low power factor to encourage efficient power usage.
*   **Reduced System Capacity:** A low power factor effectively reduces the capacity of the existing electrical infrastructure.

### 2. Power Factor Correction (PFC)

#### 2.1. Objectives of PFC

*   **Improve Efficiency:** Reduce energy losses.
*   **Reduce Electricity Bills:** Avoid utility penalties.
*   **Increase System Capacity:** Allow more real power to be delivered without upgrading infrastructure.
*   **Improve Voltage Regulation:** Reduce voltage drops.
*   **Reduce Harmonics:** While not the primary goal, some PFC methods can help mitigate harmonics.

#### 2.2. Traditional PFC Methods (Passive)

*   **Capacitor Banks:** Capacitors supply leading reactive power to compensate for the lagging reactive power demanded by inductive loads.
    *   **Application:** Typically installed in parallel with inductive loads.
    *   **Advantages:** Simple, inexpensive, low losses.
    *   **Disadvantages:**
        *   Can cause over-correction (leading PF) if not properly sized or if loads fluctuate significantly.
        *   Can lead to resonance with harmonics in the system, exacerbating harmonic distortion.
        *   Not effective for non-linear loads that draw harmonic currents.
*   **Synchronous Condensers:** Over-excited synchronous motors can provide leading reactive power.
    *   **Advantages:** Can provide dynamic and stepless reactive power compensation, can also control voltage.
    *   **Disadvantages:** Expensive, requires maintenance, losses are higher than capacitors.

#### 2.3. Active Power Factor Correction (APFC)

*   **Concept:** APFC uses electronic power converters to actively shape the input current drawn by a load to be sinusoidal and in phase with the voltage, effectively achieving a unity power factor.
*   **Advantages over Passive PFC:**
    *   **Handles Non-linear Loads:** Actively shapes the input current, mitigating harmonic distortion.
    *   **Dynamic Compensation:** Responds quickly to changes in load conditions.
    *   **Precise Control:** Can achieve near-unity power factor over a wide range of operating conditions.
    *   **Eliminates Resonance Issues:** Does not suffer from resonance with system harmonics.
*   **Disadvantages:**
    *   More complex and expensive than passive methods.
    *   Introduces switching losses.
    *   Requires a control system.

### 3. Single-Phase Active Power Factor Converter

#### 3.1. Need for APFC in Single-Phase Systems

Many modern single-phase electronic loads, such as:
*   Switching Mode Power Supplies (SMPS) in computers, TVs, chargers.
*   Variable speed drives for fans and pumps.
*   Battery chargers.
*   LED drivers.

These loads often draw pulsed currents from the AC mains, leading to:
*   Poor power factor.
*   Significant harmonic distortion of the input current.

APFC is crucial to make these single-phase loads comply with power quality standards like IEC 61000-3-2, which limits the harmonic content of currents drawn by such equipment.

#### 3.2. Circuit Schematic of a Single-Phase Active Power Factor Converter

The most common topology for single-phase APFC is the **boost converter** used in conjunction with a rectifier.

**Basic Structure:**

1.  **Input AC Source:** The single-phase AC mains.
2.  **Rectifier:** Typically a diode bridge rectifier (DBR) to convert AC to pulsating DC.
3.  **Inductor (L):** Acts as a current-smoothing element and energy storage. It's crucial for shaping the input current.
4.  **Switching Element:** A high-frequency power switch, usually a MOSFET or IGBT, controlled by a PWM (Pulse Width Modulation) signal.
5.  **Diode (D):** A free-wheeling diode across the switch.
6.  **Output Capacitor (Cout):** Filters the pulsating DC output to provide a stable DC voltage to the load.
7.  **Load:** The electronic device being powered.

**Circuit Diagram:**

```
      AC Input ---|>|--- L --- S ---|>|---
      (Phase)     / \      ---      / \    |
                 /   \            /   \   |
                /     \          /     \  |
               |-------|--------|-------|---- Cout ----> Load
              /|\     /|\        / \     /|\
             / | \   / | \      /   \   / | \
           D1  D2  D3  D4       D     Vce  D_free   D_output
            \/  \/  \/  \/      /\      /\       \/
             |   |   |   |      | |     | |       |
      AC Input -------------------|-----|-------|---- GND/Return
      (Neutral)
```

**Explanation of Components:**

*   **AC Input:** Represents the single-phase AC voltage source ($V_{ac}$).
*   **Diode Bridge Rectifier (DBR):** Diodes D1-D4 convert the AC input voltage into a pulsating DC voltage. The current flows through the inductor (L) and the switching element (S) or the free-wheeling diode ($D_{free}$) depending on the state of S.
*   **Inductor (L):** Connected in series with the switching element and the rectifier. Its primary role is to limit the rate of change of current, allowing the switching action to shape the input current into a sinusoidal waveform that is in phase with the AC input voltage.
*   **Switch (S):** Typically a MOSFET or IGBT, switched ON and OFF at a high frequency (e.g., 20-100 kHz). The duty cycle of this switch is modulated to control the current flowing through the inductor and thus the input current.
*   **Free-wheeling Diode ($D_{free}$):** Placed in parallel with the switch (S). When S is turned OFF, current stored in the inductor circulates through $D_{free}$ and the load.
*   **Output Capacitor ($C_{out}$):** Smooths the pulsating DC output from the rectifier and boost stage, providing a regulated DC voltage to the load.

**Operation Principle:**

The core idea is to control the current flowing through the inductor (which is the input current drawn from the AC mains after rectification) to be proportional to the instantaneous input voltage. This is achieved by carefully controlling the switching of the MOSFET (S) using PWM.

1.  **Switch S ON:** The inductor is connected to the input AC source (after rectification). Current through the inductor increases linearly. The energy is stored in the inductor.
2.  **Switch S OFF:** The inductor is disconnected from the AC source. The current continues to flow due to the stored energy, but now it flows through the free-wheeling diode ($D_{free}$) and towards the output capacitor and load. The output voltage is boosted.

By adjusting the ON and OFF times (duty cycle) of the switch S, the average inductor current can be controlled. The control system ensures that this average inductor current follows the rectified AC input voltage waveform, resulting in a sinusoidal input current that is in phase with the voltage, thus achieving unity power factor.

#### 3.3. Control Block Diagram

The control system for a single-phase APFC converter is responsible for generating the PWM signal that drives the switching element (S) to achieve the desired input current waveform and output voltage regulation.

**Key Components of the Control System:**

1.  **Voltage Sensing:** Measures the output DC voltage ($V_{out}$) and often the input AC voltage ($V_{ac}$).
2.  **Current Sensing:** Measures the input inductor current ($I_L$) which is also the input current to the rectifier.
3.  **Voltage Control Loop:** A controller (e.g., PID controller) that compares the sensed output voltage with a reference voltage ($V_{ref}$) and generates an error signal. This error signal is used to adjust the duty cycle of the PWM signal.
4.  **Current Shaping/Reference Generation:** This is the core of APFC. The goal is to make the input current ($I_{in}$) follow the input voltage ($V_{ac}$). This is typically achieved by making $I_{in}$ proportional to $V_{ac}$ (i.e., $I_{in}(t) = k \cdot V_{ac}(t)$), where $k$ is adjusted by the voltage control loop.
    *   **Method 1: Average Current Mode Control:** The sensed input current is averaged (or filtered) and then used as the command for the PWM generator. The voltage loop output adjusts the amplitude of the current command.
    *   **Method 2: Peak Current Mode Control:** The peak current in the inductor is sensed and compared to a reference waveform. This is less ideal for pure PFC but often used.
    *   **Method 3: Multiplier-Based:** $I_{ref}(t) = V_{ac}(t) / R_{sense}$, where $R_{sense}$ is an effective resistance determined by the voltage loop. The output of the voltage loop determines $R_{sense}$.
5.  **PWM Generator:** Takes the current reference signal and a high-frequency sawtooth or triangular carrier wave to generate the PWM pulses for the switching element (S).

**Control Block Diagram:**

```
                                  +-------------------+
                                  | Voltage Reference |
                                  |    (V_ref)        |
                                  +-------------------+
                                           |
                                           v
                                  +-------------------+
                                  | Voltage Sensing   |
                                  | (V_out_sensed)    |
                                  +-------------------+
                                           | Error (V_err)
                                           v
+---------+   +-------------------+   +-------------------+   +-------------------+
| AC Input|-->| Rectifier &       |-->| Current Sensing   |-->| Current Control/  |
| (V_ac)  |   | Inductor (L)      |   | (I_L_sensed)      |   | Reference Gen.    |
+---------+   +-------------------+   +-------------------+   +-------------------+
                                                                      |
                                                                      v
                                                               +-------------------+
                                                               | PWM Generator     |
                                                               | (with Carrier)    |
                                                               +-------------------+
                                                                      | PWM Signal
                                                                      v
                                                               +-------------------+
                                                               | Power Stage       |
                                                               | (Switch S, Diode) |
                                                               +-------------------+
                                                                      |
                                                                      v
                                                               +-------------------+
                                                               | Output Capacitor  |
                                                               | & Load            |
                                                               +-------------------+
                                                                      | Output DC Voltage (V_out)
```

**Simplified Control Logic (Average Current Mode Control Example):**

1.  **Voltage Loop:**
    *   $V_{error} = V_{ref} - V_{out\_sensed}$
    *   $I_{command} = PID(V_{error})$  (This $I_{command}$ represents the desired *amplitude* of the input current).
2.  **Current Reference Generation:**
    *   $I_{ref}(t) = I_{command} \times \text{Normalized}(V_{ac}(t))$
    *   Where $\text{Normalized}(V_{ac}(t))$ is the input voltage waveform scaled to have a peak value of 1. This ensures the current follows the voltage shape.
3.  **PWM Generation:**
    *   The $I_{ref}(t)$ signal is compared with the sensed inductor current ($I_{L\_sensed}$) within a PWM controller. The output of the PWM controller drives the switch S. A common approach is to compare $I_{ref}(t)$ with the inductor current and turn the switch ON when $I_{L\_sensed} < I_{ref}(t)$ and OFF when $I_{L\_sensed} \ge I_{ref}(t)$. Or, more commonly, $I_{ref}(t)$ is compared with a high-frequency sawtooth wave to produce the PWM signal.

**Reference to Textbooks:**

*   **Dugan et al., Chapter 7 (Power Conditioning):** Discusses various converters and mitigation techniques, including APFC. They explain the principles of shaping input currents.
*   **Sankaran, Chapter 5 (Power Factor Correction):** Explains the limitations of passive PFC and introduces active PFC techniques, including the boost topology for single-phase applications.
*   **Bhim Singh et al., Chapter 5 (Active Power Filters) and Chapter 6 (Power Factor Correction):** Provides detailed analysis of APFC circuits and control strategies, including average current mode control and its implementation. They highlight the importance of input current shaping for harmonic mitigation and PF improvement.
*   **Bollen, Chapter 6 (Harmonic Distortion):** While focusing on distortion, Bollen's discussion on sources of harmonics (like non-linear loads) implicitly points to the need for APFC.

### 4. Learning Outcomes Covered

*   **CO1: Identify the sources and effects of power quality problems. (K2)**
    *   *Covered in: Section 1.3 (Causes of Low PF), Section 1.4 (Consequences of Low PF), Section 3.1 (Need for APFC).*
    *   Non-linear loads (SMPS, VFDs) are identified as sources of poor PF and harmonics. Consequences include increased current, losses, and voltage drops.
*   **CO2: Apply Fourier concepts for harmonic analysis. (K3)**
    *   *Implicitly covered through the need for APFC to reduce harmonic currents.* The goal of APFC is to make the input current sinusoidal, which, in Fourier terms, means having only the fundamental frequency component and eliminating all harmonic components. While this section doesn't perform Fourier analysis, it explains *why* harmonic elimination is desired.
*   **CO3: Explain the important aspects of power quality monitoring. (K2)**
    *   *Not directly covered in this specific topic.* Power factor measurement and harmonic analysis (part of monitoring) are implied requirements that necessitate PFC.
*   **CO4: Examine power quality mitigation techniques. (K2)**
    *   *Covered extensively in: Section 2 (PFC), Section 3 (APFC).* This section focuses specifically on APFC as a mitigation technique, detailing its circuit and control.
*   **CO5: Discuss power quality issues in grid connected renewable energy systems. (K2)**
    *   *Not directly covered in this specific topic.* While renewable energy systems (like solar PV inverters) often use APFC, this topic is focused on general single-phase loads.

### 5. Key Concepts and Definitions

*   **Power Factor (PF):** Ratio of real power to apparent power.
*   **Reactive Power (kVAr):** Power required by inductive loads for magnetic fields.
*   **Apparent Power (kVA):** Vector sum of real and reactive power.
*   **Harmonics:** Integer multiples of the fundamental frequency present in non-sinusoidal waveforms.
*   **Passive PFC:** Using capacitors or synchronous condensers to improve PF.
*   **Active PFC (APFC):** Using electronic converters to actively shape input current for unity PF and harmonic reduction.
*   **Boost Converter:** A DC-DC converter that outputs a voltage higher than its input voltage. Used as the core APFC circuit.
*   **PWM (Pulse Width Modulation):** A technique to control the average value of a signal by varying the width of its pulses.
*   **Average Current Mode Control:** A control strategy that directly regulates the average inductor current to follow a desired reference waveform.
*   **Switching Mode Power Supply (SMPS):** A common type of power supply that uses a switching regulator to convert electrical power efficiently.

### 6. Examples

*   **Computer Power Supply:** Most modern computer power supplies have an APFC circuit to meet regulatory requirements for harmonic emissions and power factor. Without APFC, the computer would draw a highly distorted current.
*   **LED Drivers:** High-power LED lighting systems use APFC to ensure they draw a clean sinusoidal current from the mains, improving efficiency and reducing grid disturbances.
*   **Variable Speed Drives (VSDs) for Fans:** Small VSDs used for domestic or commercial fans often incorporate APFC to improve their power factor and reduce harmonic injection into the building's electrical system.

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary disadvantage of using passive capacitor banks for power factor correction in systems with significant harmonic distortion from non-linear loads?
**Answer:**
Passive capacitor banks can lead to resonance with the system harmonics, amplifying the harmonic distortion and potentially causing equipment failure. They also do not actively shape the current waveform, so they don't inherently improve the power factor of non-linear loads.

**Question 2:**
Explain the role of the inductor (L) in a single-phase boost APFC converter.
**Answer:**
The inductor (L) is crucial for shaping the input current. By controlling the switching of the MOSFET, the inductor current is made to rise and fall in a controlled manner. When connected to the AC source, the inductor limits the rate of change of current, allowing the PWM control to force the average inductor current to follow the rectified AC voltage waveform. This results in a sinusoidal input current that is in phase with the voltage, achieving unity power factor.

**Question 3:**
Describe the fundamental principle behind achieving unity power factor using an active power factor corrector.
**Answer:**
The fundamental principle is to force the input current drawn from the AC mains to be sinusoidal and in phase with the AC voltage. This is achieved by using a power electronic converter controlled by a sophisticated feedback loop that shapes the input current based on the instantaneous input voltage and a desired output voltage regulation.

**Question 4:**
What is the main function of the voltage control loop in the APFC control block diagram?
**Answer:**
The voltage control loop (typically a PID controller) regulates the output DC voltage by comparing the sensed output voltage with a reference voltage. The error signal from this comparison is used to adjust the overall current drawn by the converter, ensuring that the load receives the required DC voltage, and also influencing the amplitude of the input current waveform.

**Question 5:**
If the input AC voltage is $V_{ac}(t) = 120 \sqrt{2} \sin(\omega t)$ V, and the APFC is designed to achieve a unity power factor, what should the fundamental component of the input current be (assuming the load requires 200 W)?
**Answer:**
For unity power factor, the input current should be in phase with the voltage.
Real Power (P) = 200 W
RMS Voltage ($V_{rms}$) = 120 V
For unity PF, P = $V_{rms} \times I_{rms}$
$I_{rms}$ = P / $V_{rms}$ = 200 W / 120 V = 1.67 A
So, the fundamental component of the input current should be approximately $1.67 \sqrt{2} \sin(\omega t)$ A.

### 8. Important Points to Remember

*   **APFC is essential for modern electronic loads** that would otherwise draw distorted currents, leading to poor power factor and harmonic issues.
*   The **boost converter topology** is commonly used for single-phase APFC.
*   The **inductor is critical** for current shaping in APFC.
*   **PWM control** is used to manipulate the switching of the power semiconductor.
*   The control objective is to make the **input current sinusoidal and in phase with the input voltage**.
*   APFC not only improves power factor but also **mitigates current harmonics**.
*   **Average current mode control** is a popular and effective control strategy for APFC.

This concludes the study notes for Power Factor Correction – Single-Phase Active Power Factor Converter.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
