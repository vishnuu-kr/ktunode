---
title: "Long duration voltage variation, voltage unbalance, waveform distortion - notching, harmonics and voltage flicker"
subject: "POWER QUALITY"
module: "Module 1: Power quality phenomenon  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3696e"
status: "completed"
scrapedAt: "2026-05-23T16:38:43.991Z"
---
# Power Quality: Module 1 - Power Quality Phenomena

## Introduction to Power Quality

Power quality is a broad term that refers to the characteristics of electrical power that determines the suitability of that power for use by various electrical and electronic equipment. It encompasses the deviations from the ideal sinusoidal voltage waveform at the fundamental frequency. Poor power quality can lead to a wide range of problems, from minor equipment malfunctions to catastrophic failures.

**Key Concept:** Power quality is about the *quality* of the voltage supplied to the end-user.

### Learning Outcomes Addressed:

*   **LO1:** Understand fundamental power quality phenomena.
*   **LO2:** Recognize the importance of a stable and clean power supply.

### Course Outcomes Alignment:

*   **CO1:** Identify the sources and effects of power quality problems. (Knowledge Level: K2) - This module lays the foundation for identifying problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textual References:

*   **Dugan et al., 2012:** Chapter 1: Introduction to Power Quality, Chapter 2: Voltage sags, swells and interruptions.
*   **Sankaran, 2002:** Chapter 1: Introduction to Power Quality, Chapter 2: Voltage Quality Parameters.
*   **Bollen, 1999:** Chapter 1: Introduction, Chapter 2: Voltage Sags and Swells.
*   **Singh et al., 2015:** Chapter 1: Introduction, Chapter 2: Voltage Variations.

---

## 1. Long Duration Voltage Variations

Long duration voltage variations are sustained deviations of the RMS voltage magnitude from its nominal value for periods longer than one minute. These are typically caused by changes in load or generation, and can lead to equipment malfunction or failure.

### 1.1. Under-voltages (Sags/Dips)

An under-voltage is a sustained RMS voltage reduction below the nominal value.

*   **Definition:** A temporary reduction of the RMS voltage between 0.1 and 0.9 per unit (pu) of the nominal voltage, lasting from 0.5 cycles to 1 minute. (IEEE Std 1159-2019)
*   **Sources:**
    *   **Large motor starting:** The inrush current drawn by a motor during starting significantly reduces the voltage in its vicinity.
    *   **Faults on the power system:** Short circuits and ground faults draw large currents, causing voltage dips.
    *   **Overload conditions:** When the load exceeds the capacity of the system, voltage can drop.
    *   **Transformer tap changes:** Automatic tap changers adjust voltage, and this process can cause temporary dips.
*   **Effects:**
    *   **Malfunction of sensitive electronic equipment:** Computers, PLCs, and adjustable speed drives can reset or malfunction.
    *   **Reduced efficiency of induction motors:** Torque is proportional to the square of the voltage, so reduced voltage leads to reduced torque and potential stalling.
    *   **Dimming of incandescent lights:** Visually noticeable and can affect operations.
*   **Classification (based on duration):**
    *   **Sags/Dips:** Typically from 0.5 cycles to 1 minute.
    *   **Undervoltages:** Typically longer than 1 minute.

### 1.2. Over-voltages

An over-voltage is a sustained RMS voltage increase above the nominal value.

*   **Definition:** A temporary increase of the RMS voltage between 1.1 and 1.8 pu of the nominal voltage, lasting from 0.5 cycles to 1 minute. (IEEE Std 1159-2019)
*   **Sources:**
    *   **Load shedding:** When large loads are suddenly disconnected, the voltage can rise if generation is not immediately reduced.
    *   **Transformer tap changer operation:** Similar to undervoltages, tap changes can cause temporary over-voltages.
    *   **Switching of large capacitor banks:** These are often used for power factor correction, and their sudden energization can cause voltage transients and sustained over-voltages.
    *   **Faults on adjacent circuits:** Unbalanced faults can lead to voltage rise on unfaulted phases.
*   **Effects:**
    *   **Overheating and insulation breakdown:** Prolonged over-voltages stress insulation, leading to premature failure.
    *   **Damage to electronic components:** Semiconductors and other sensitive components can be damaged by over-voltage stress.
    *   **Reduced equipment lifespan:** Even if not immediately damaged, operating at elevated voltages reduces the expected life of many devices.

### 1.3. Sustained Undervoltages and Overvoltages

These are variations that persist for longer than one minute.

*   **Causes:** System design issues, inadequate voltage regulation, prolonged heavy loading, or persistent faults.
*   **Effects:** Similar to temporary variations but more detrimental due to the prolonged exposure.

**Key Point:** Long duration voltage variations affect the RMS magnitude of the voltage waveform.

**Practice Question:** A large industrial motor draws a significant current upon starting, causing the voltage at a nearby manufacturing plant to drop from 480V to 400V for 5 seconds. Classify this event and describe two potential effects on the plant's equipment.

**Answer:** This is classified as a **voltage sag/dip**. Potential effects include:
1.  **Malfunction of sensitive equipment:** Programmable Logic Controllers (PLCs) or computers could reset or cease operation.
2.  **Reduced motor performance:** If other motors are operating, their torque will be significantly reduced (torque is proportional to voltage squared), potentially causing them to stall.

---

## 2. Voltage Unbalance

Voltage unbalance occurs when the RMS voltage magnitudes of the three phases in a three-phase system are not equal.

*   **Definition:** A condition in a three-phase system where the RMS voltage of any phase is different from the others. It is typically expressed as a percentage of the average voltage.
    *   **Unbalance Factor (UF):**
        *   **Percentage Voltage Unbalance:**
            $$ \%UV = \frac{V_{max} - V_{min}}{V_{avg}} \times 100 $$
            where $V_{max}$, $V_{min}$, and $V_{avg}$ are the maximum, minimum, and average of the three phase voltages.
*   **Sources:**
    *   **Single-phase loads connected to a three-phase system:** Uneven distribution of single-phase loads across the three phases is a very common cause.
    *   **Faults in the power system:** Unbalanced faults (e.g., single line-to-ground) can cause voltage unbalance.
    *   **Improperly connected three-phase loads:** For example, a three-phase motor connected to only two phases.
    *   **Failure of a capacitor bank or reactor:** A blown fuse in a three-phase capacitor bank can lead to unbalance.
*   **Effects:**
    *   **Overheating of three-phase motors:** This is the most significant effect. Unbalance causes negative sequence currents which induce rotor currents that lead to eddy losses, resulting in increased motor temperature and reduced efficiency.
        *   For every 1% of voltage unbalance, motor temperature can increase by approximately 5-10%.
    *   **Reduced torque and efficiency of motors:** Similar to heating, the motor output power is also affected.
    *   **Vibration and noise in motors.**
    *   **Malfunction of electronic equipment:** Particularly those with three-phase inputs or that are sensitive to voltage variations.

**Key Concept:** Voltage unbalance is characterized by unequal RMS voltage magnitudes across the three phases. It's often quantified by the unbalance factor.

**Textual References:**

*   **Dugan et al., 2012:** Chapter 3: Voltage Unbalance.
*   **Sankaran, 2002:** Chapter 3: Voltage Unbalance.
*   **Bollen, 1999:** Chapter 5: Voltage Unbalance.
*   **Singh et al., 2015:** Chapter 3: Voltage Unbalance.

**Practice Question:** In a three-phase system, the phase voltages are measured as $V_A = 470V$, $V_B = 460V$, and $V_C = 475V$. Calculate the percentage voltage unbalance.

**Answer:**
1.  **Calculate the average voltage:**
    $V_{avg} = \frac{470V + 460V + 475V}{3} = \frac{1405V}{3} \approx 468.33V$
2.  **Identify maximum and minimum voltages:**
    $V_{max} = 475V$
    $V_{min} = 460V$
3.  **Calculate percentage voltage unbalance:**
    $\%UV = \frac{475V - 460V}{468.33V} \times 100 = \frac{15V}{468.33V} \times 100 \approx 3.20\%$

**Highlight:** Even small percentages of voltage unbalance can significantly impact three-phase motors.

---

## 3. Waveform Distortion

Waveform distortion refers to any deviation of the voltage or current waveform from a pure sinusoidal shape at the fundamental frequency.

### 3.1. Notching

Notching is a repetitive disturbance characterized by brief, irregular intrusions into the waveform. It is typically caused by the rapid switching of power electronic devices (like thyristors or diodes) in converter circuits.

*   **Definition:** A transient reduction in voltage that occurs during the switching process of power electronic devices. These are often caused by the commutation of current between devices within a converter.
*   **Sources:**
    *   **Phase-controlled rectifiers/converters:** When a thyristor (SCR) turns on, it diverts current from another SCR that is turning off. This process can momentarily short a portion of the AC voltage, creating a notch.
    *   **Inverters:** Similar switching processes in inverters can also cause notching.
*   **Effects:**
    *   **Interference with sensitive electronics:** The high-frequency components in notches can interfere with communication signals or control systems.
    *   **Malfunction of electronic equipment:** Particularly sensitive microprocessors or control circuits.
    *   **Increased EMI/RFI:** Notching contributes to electromagnetic interference.
*   **Characteristics:** Notches are typically sharp and narrow. The depth and width of the notch depend on the switching characteristics of the power electronic devices and the inductance of the system.

**Key Concept:** Notching is caused by the switching actions of power electronic converters and appears as short, localized dips in the waveform.

**Textual References:**

*   **Dugan et al., 2012:** Chapter 4: Voltage sags, swells and interruptions, and chapter on Waveform Distortion.
*   **Sankaran, 2002:** Chapter 4: Waveform Distortion.
*   **Bollen, 1999:** Chapter 6: Waveform Distortion.
*   **Singh et al., 2015:** Chapter 4: Waveform Distortion.

---

### 3.2. Harmonics

Harmonics are sinusoidal components of a periodic waveform that have frequencies that are integer multiples of the fundamental frequency.

*   **Definition:** If the fundamental frequency is $f$, then the harmonic frequencies are $2f, 3f, 4f, \ldots, nf$, where $n$ is the harmonic order.
*   **Sources:**
    *   **Non-linear loads:** These are the primary sources of harmonics. Any device that draws current that is not sinusoidal in response to a sinusoidal voltage is a non-linear load. Examples include:
        *   **Power electronic converters:** Rectifiers (AC-DC), inverters (DC-AC), choppers (DC-DC). Used in Variable Frequency Drives (VFDs), Uninterruptible Power Supplies (UPS), battery chargers, switch-mode power supplies (SMPS).
        *   **Electric arc furnaces.**
        *   **Incandescent lamps:** While not a major source, they have a non-linear resistance characteristic due to temperature changes.
        *   **Discharge lighting:** Fluorescent lamps with ballasts, HID lamps.
        *   **Computers and electronic devices:** SMPS are ubiquitous.
*   **Effects:**
    *   **Overheating of transformers and conductors:** Harmonic currents cause increased RMS values and additional losses (e.g., eddy current losses, dielectric losses).
    *   **Reduced efficiency of motors and generators.**
    *   **Malfunction of electronic equipment:** Sensitive electronics can be affected by harmonic distortion, leading to malfunctions or premature failure.
    *   **Triplen harmonics (3rd, 9th, 15th, etc.) in three-phase systems:** These harmonics are in phase in all three phases. In a four-wire system, they sum up in the neutral conductor, potentially causing severe overheating if the neutral conductor is not adequately sized.
    *   **Capacitor bank failure:** Resonant conditions can occur between system inductance and capacitance at harmonic frequencies, leading to excessive harmonic currents and voltages, and potentially blowing fuses or destroying capacitors.
    *   **Increased noise in communication systems.**
*   **Quantification:**
    *   **Total Harmonic Distortion (THD):** The ratio of the RMS value of all harmonic components to the RMS value of the fundamental component.
        $$ THD_V = \frac{\sqrt{\sum_{n=2}^{\infty} V_n^2}}{V_1} \times 100\% $$
        where $V_n$ is the RMS voltage of the $n$-th harmonic and $V_1$ is the RMS voltage of the fundamental.
    *   **Total Demand Distortion (TDD):** Similar to THD but the denominator is the RMS value of the fundamental component of the *load current* (or voltage). This is often used for compliance with standards like IEEE 519.
        $$ TDD = \frac{\sqrt{\sum_{n=2}^{\infty} I_n^2}}{I_1} \times 100\% $$
        where $I_n$ is the RMS current of the $n$-th harmonic and $I_1$ is the RMS current of the fundamental.

**Key Concept:** Harmonics are integer multiples of the fundamental frequency present in the waveform, primarily caused by non-linear loads. THD and TDD are key metrics for quantifying harmonic distortion.

**Textual References:**

*   **Dugan et al., 2012:** Chapter 5: Harmonics.
*   **Sankaran, 2002:** Chapter 4: Waveform Distortion, Harmonic Analysis.
*   **Bollen, 1999:** Chapter 3: Harmonics, Chapter 4: Harmonic Distortion.
*   **Singh et al., 2015:** Chapter 5: Harmonics, Chapter 6: Harmonic Mitigation.

**Practice Question:** A single-phase half-wave rectifier with a purely resistive load produces a current waveform. Describe the nature of this waveform and its harmonic content. What is a key characteristic of the harmonic spectrum for such a device?

**Answer:**
The current waveform from a single-phase half-wave rectifier with a resistive load is a pulsed DC waveform. Only the positive half-cycles of the input voltage pass through, resulting in current pulses.
This waveform is highly non-sinusoidal and contains:
*   The fundamental frequency component (1f).
*   Even harmonics (2f, 4f, 6f, etc.).
*   Odd harmonics (3f, 5f, 7f, etc.).
A key characteristic is that for half-wave rectified signals, the even harmonics are absent. The fundamental component is often smaller than the DC component. The harmonic spectrum is continuous and extends to very high frequencies.

**Highlight:** The presence of third harmonic (triplen) currents in the neutral wire of a three-phase system is a critical concern for safety and equipment integrity.

---

### 3.3. Voltage Flicker

Voltage flicker is the rapid fluctuation of voltage magnitude within a specific range, causing visible changes in the intensity of illumination from lighting equipment.

*   **Definition:** A periodic or random variation in voltage that causes variations in the luminous flux of lamps.
*   **Sources:**
    *   **Loads with rapidly changing current demands:**
        *   **Arc furnaces:** Particularly those used in steelmaking, where the arc length and current fluctuate rapidly.
        *   **Welding machines.**
        *   **Large motor loads starting and stopping frequently.**
        *   **Equipment with thyristor control:** Some variable speed drives or induction furnaces.
*   **Effects:**
    *   **Annoyance to users:** The visible flickering of lights is highly disturbing.
    *   **Malfunction of sensitive equipment:** Some electronic devices can be affected by rapid voltage fluctuations.
    *   **Reduced productivity and discomfort in workplaces.**
*   **Characteristics:**
    *   Flicker is often characterized by its frequency and amplitude.
    *   The sensitivity of the human eye to flicker varies with frequency. Humans are most sensitive to flicker frequencies in the range of 7-10 Hz.
    *   Flicker is often caused by voltage dips that occur repeatedly at a certain frequency.
*   **Quantification:**
    *   Flicker is typically described by a flicker severity index. Standards like IEC 61000-3-7 define measures such as Pst (short-term flicker severity) and Plt (long-term flicker severity).
        *   **Pst (Short-Term Flicker Severity):** Evaluates flicker over a 10-minute period. A Pst value of 1 is generally considered the threshold of perception.
        *   **Plt (Long-Term Flicker Severity):** Evaluates flicker over a 2-hour period (typically 12 consecutive 10-minute periods). A Plt value of 1 is considered acceptable for typical residential and commercial environments.

**Key Concept:** Voltage flicker is caused by rapid variations in load current, leading to visible fluctuations in light output and potential issues for other equipment. Flicker severity is often measured using Pst and Plt indices.

**Textual References:**

*   **Dugan et al., 2012:** Chapter 6: Voltage Flicker.
*   **Sankaran, 2002:** Chapter 5: Voltage Flicker.
*   **Bollen, 1999:** Chapter 7: Voltage Fluctuations and Flicker.
*   **Singh et al., 2015:** Chapter 7: Voltage Flicker.

**Practice Question:** A steel mill operating an arc furnace is known to cause noticeable flickering of lights in nearby commercial buildings. What specific characteristic of the arc furnace operation causes this flicker, and how is the severity of this phenomenon typically quantified for regulatory purposes?

**Answer:**
The flickering is caused by the **rapid and significant fluctuations in the current drawn by the arc furnace** as the arc length and plasma conditions change. These current variations lead to voltage drops across the system impedance, causing rapid variations in the supply voltage.
The severity of this phenomenon is typically quantified using **flicker indices**, such as the **short-term flicker severity (Pst)** and **long-term flicker severity (Plt)**, as defined by standards like IEC 61000-3-7. These indices provide a measure of the perceptibility and annoyance of the flickering lights.

**Highlight:** Flicker is a phenomenon that directly impacts human perception and comfort, in addition to potentially affecting equipment.

---

## Summary of Key Power Quality Phenomena (Module 1)

| Phenomenon                      | Description                                                                                             | Primary Cause(s)                                           | Key Effect(s)                                                                 | Quantification Metric(s)              |
| :------------------------------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------- | :---------------------------------------------------------------------------- | :-------------------------------------- |
| **Long Duration Voltage Variations** | Sustained deviations of RMS voltage (under- or over-voltage) for >1 minute.                           | Load changes, generation changes, system design issues.    | Equipment malfunction, overheating, reduced lifespan.                         | Per unit (pu) deviation from nominal.   |
| **Voltage Unbalance**           | Unequal RMS voltage magnitudes across the three phases in a three-phase system.                         | Uneven single-phase load distribution, system faults.      | Motor overheating, reduced motor efficiency/torque, equipment malfunction.      | Percentage Voltage Unbalance (%UV).     |
| **Notching**                    | Brief, irregular intrusions into the waveform, usually caused by power electronic switching.            | Commutation of power electronic devices.                   | Interference with sensitive electronics, EMI/RFI.                             | Depth and width of the notch.           |
| **Harmonics**                   | Sinusoidal components at integer multiples of the fundamental frequency.                                | Non-linear loads (VFDs, SMPS, converters, arc furnaces).   | Overheating of equipment, reduced efficiency, resonance, neutral conductor issues. | Total Harmonic Distortion (THD), TDD.   |
| **Voltage Flicker**             | Rapid fluctuations in voltage magnitude causing visible changes in light intensity.                     | Loads with rapidly varying current demands (arc furnaces). | Annoyance, equipment malfunction, reduced productivity.                       | Pst (short-term), Plt (long-term).      |

---

## Practice Questions for Module 1

**Question 1:**
A manufacturing plant experiences intermittent stoppages of its CNC machines. Investigation reveals that during the startup of a large air compressor motor, the plant's internal voltage drops from 480V to 430V for about 3 seconds.
(a) Classify this power quality event.
(b) What is the percentage voltage dip during this event?
(c) What are two likely reasons for this voltage dip to affect the CNC machines?

**Answer 1:**
(a) This event is classified as a **voltage sag (or dip)**. It is a reduction in RMS voltage that lasts for a short duration (between 0.5 cycles and 1 minute).
(b) Percentage voltage dip is calculated relative to the nominal voltage. Assuming the nominal voltage is 480V:
    Percentage Dip = $\frac{Nominal Voltage - Sag Voltage}{Nominal Voltage} \times 100$
    Percentage Dip = $\frac{480V - 430V}{480V} \times 100 = \frac{50V}{480V} \times 100 \approx 10.4\%$
(c) Two likely reasons for this voltage dip to affect the CNC machines:
    1.  **Low Voltage Trip/Reset:** CNC machines often have sensitive control systems and power supplies that may shut down or reset if the supply voltage drops below a critical threshold.
    2.  **Reduced Power Availability:** If the CNC machines are heavily loaded, the reduced voltage may not provide sufficient power for their operation, leading to performance degradation or shutdown.

**Question 2:**
In a three-phase, 400V distribution system, the measured phase voltages are $V_a = 405V$, $V_b = 390V$, and $V_c = 400V$.
(a) Calculate the percentage voltage unbalance.
(b) Explain the primary concern with voltage unbalance for three-phase induction motors.

**Answer 2:**
(a)
1.  **Average Voltage:** $V_{avg} = \frac{405V + 390V + 400V}{3} = \frac{1195V}{3} \approx 398.33V$
2.  **Max and Min Voltages:** $V_{max} = 405V$, $V_{min} = 390V$
3.  **Percentage Voltage Unbalance:**
    $\%UV = \frac{V_{max} - V_{min}}{V_{avg}} \times 100 = \frac{405V - 390V}{398.33V} \times 100 = \frac{15V}{398.33V} \times 100 \approx 3.77\%$
(b) The primary concern with voltage unbalance for three-phase induction motors is **overheating and reduced efficiency**. Voltage unbalance creates negative sequence currents which induce additional rotor currents that cause extra eddy current losses in the rotor. This leads to a significant increase in motor temperature and can reduce the motor's lifespan and output power.

**Question 3:**
A modern office building is experiencing issues with its computer systems and sensitive laboratory equipment. Measurements indicate the presence of significant third and fifth harmonic currents and voltages.
(a) What type of load is most likely responsible for generating these harmonic currents?
(b) Briefly explain two adverse effects of significant third and fifth harmonic content on the power system and connected equipment.

**Answer 3:**
(a) Loads that are most likely responsible for generating significant third and fifth harmonic currents are **non-linear loads**, particularly those employing **power electronic converters** such as:
    *   Switch-Mode Power Supplies (SMPS) found in computers, monitors, and many office electronics.
    *   Variable Frequency Drives (VFDs) used for motor control.
    *   Uninterruptible Power Supplies (UPS).
    *   Battery chargers.
(b) Two adverse effects of significant third and fifth harmonic content:
    1.  **Overheating of Neutral Conductors (for third harmonics):** Third harmonics are triplen harmonics. In a three-phase, four-wire system, third harmonic currents from different phases add up in the neutral conductor. This can cause severe overheating and potentially fire hazards if the neutral conductor is not adequately sized to carry this sum of harmonic currents.
    2.  **Resonance and Capacitor Failure (for both):** If the harmonic frequencies coincide with the natural resonant frequencies of the system (e.g., due to the presence of capacitor banks for power factor correction), very high harmonic currents and voltages can occur. This can lead to excessive heating and premature failure of capacitor banks and other equipment, and can also amplify the harmonic distortion throughout the system.

**Question 4:**
A heavy industrial facility utilizes large induction furnaces that cause the lights in a nearby residential area to visibly dim and brighten in a cyclical manner.
(a) Identify the power quality phenomenon being described.
(b) What aspect of the induction furnace operation is causing this phenomenon?
(c) How is the severity of this phenomenon typically assessed for compliance with power quality standards?

**Answer 4:**
(a) The power quality phenomenon being described is **voltage flicker**.
(b) The **rapid and large fluctuations in the current drawn by the induction furnaces** as they operate is causing this phenomenon. These current variations create voltage drops across the system impedance, resulting in rapid variations in the supply voltage perceived as flickering lights.
(c) The severity of voltage flicker is typically assessed using **flicker indices**, such as the **short-term flicker severity (Pst)** and **long-term flicker severity (Plt)**. These indices are defined in international standards (e.g., IEC 61000-3-7) and provide a quantitative measure of the flicker's impact on light perception and potential annoyance.

---

## Learning Outcomes Addressed in this Module:

*   **LO1:** Understand fundamental power quality phenomena. (Covered extensively)
*   **LO2:** Recognize the importance of a stable and clean power supply. (Underpinned by the effects of the phenomena discussed)

## Course Outcomes Addressed in this Module:

*   **CO1: Identify the sources and effects of power quality problems. (Knowledge Level: K2)**
    *   This module directly addresses CO1 by detailing the nature, sources, and impacts of long duration voltage variations, voltage unbalance, notching, harmonics, and voltage flicker.

---

This concludes Module 1, providing a foundational understanding of key power quality phenomena. The subsequent modules will build upon this knowledge to explore monitoring, analysis, and mitigation techniques.