---
title: "Types of power quality disturbances  –Transients – classification and origin"
subject: "POWER QUALITY"
module: "Module 1: Power quality phenomenon  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3696c"
status: "completed"
scrapedAt: "2026-05-23T16:38:41.253Z"
---
# Power Quality: Module 1 - Power Quality Phenomena

## Topic: Types of Power Quality Disturbances - Transients: Classification and Origin

### Learning Outcomes Covered:

*   **Identify the sources and effects of power quality problems.** (CO1) - This topic directly addresses the identification of transient disturbances as a significant power quality problem and will explore their origins.
*   *(Implicitly contributes to understanding the fundamental nature of power quality issues, which underpins other COs.)*

### Key Concepts and Definitions:

*   **Power Quality:** A broad term that describes the deviation of voltage, current, or frequency from their ideal sinusoidal waveform. (Dugan et al., 2012)
*   **Power Quality Disturbances:** Temporary or permanent deviations from the ideal power waveform that can impact the performance of electrical equipment.
*   **Transients:** Short-duration, often high-magnitude variations in voltage or current that are superimposed on the fundamental power system waveform. They are characterized by rapid changes and are typically oscillatory or unidirectional. (Bollen, 1999)

### Introduction to Transients:

Transients are one of the most common and often problematic power quality disturbances. They represent a departure from the steady-state operation of the power system. Understanding their nature, classification, and origin is crucial for diagnosing and mitigating their adverse effects on sensitive equipment.

### Classification of Transients:

Transients can be classified based on several criteria, primarily their waveform shape, duration, and polarity.

#### 1. Classification by Waveform Shape:

*   **Impulsive Transients (or Surges):**
    *   **Definition:** Characterized by a rapid rise to a peak magnitude and then a decay, often back to zero, in a very short time. They are typically unidirectional (unipolar).
    *   **Duration:** Typically less than one cycle of the fundamental frequency (e.g., microseconds to milliseconds).
    *   **Waveform:** Can be approximated by various mathematical functions, such as double exponential or first-order pulse.
    *   **Origin:**
        *   **Lightning Strikes:** Direct or indirect lightning strikes to transmission lines, substations, or customer premises are a major cause. (Dugan et al., 2012)
        *   **Switching Operations:** Energizing or de-energizing of inductive or capacitive loads, switching of fuses, circuit breakers, or relays can create impulsive transients.
        *   **Electrostatic Discharge (ESD):** Static electricity discharge from personnel or machinery can also cause very fast impulsive transients.
    *   **Example:** Imagine a lightning strike near a power line. This injects a massive surge of energy, creating a very fast, high-voltage spike.

*   **Oscillatory Transients:**
    *   **Definition:** Characterized by a rise to a peak magnitude followed by a decay, often oscillating around the steady-state waveform. They can be uni-directional or bi-directional.
    *   **Duration:** Can range from a few cycles to several seconds.
    *   **Frequency:** The frequency of oscillation is typically higher than the fundamental power frequency, often in the kHz range.
    *   **Origin:**
        *   **Switching of Capacitors:** Energizing or de-energizing capacitor banks is a common cause of oscillatory transients. The interaction between the capacitor, system inductance, and circuit breaker characteristics can create a resonant circuit. (Sankaran, 2002)
        *   **Switching of Reactors:** Similar to capacitor switching, reactor switching can also induce oscillatory transients.
        *   **Fault Clearing:** The process of clearing a fault, especially by circuit breakers, can induce oscillations.
        *   **Inductive Load Switching:** Switching large inductive loads can also lead to oscillatory behavior.
    *   **Example:** When a capacitor bank is switched on to improve the power factor, the sudden change in impedance can cause the system to "ring" at its natural resonant frequency.

*   ** ini-directional Transients (or DC Offset):**
    *   **Definition:** Characterized by a unidirectional deviation from the normal AC waveform. The waveform might be displaced by a DC component for a short period.
    *   **Duration:** Can range from a few cycles to seconds.
    *   **Origin:**
        *   **Switching of Loads:** Particularly the energizing of large inductive loads, such as motors or transformers, can result in a DC offset due to the inductance's opposition to instantaneous current change. (Singh et al., 2015)
        *   **Faults:** The occurrence and clearing of faults can sometimes lead to DC offsets.
    *   **Example:** When a large motor is started, its large inductance causes the initial current to have a significant DC component that decays over a few cycles.

#### 2. Classification by Duration:

While waveform shape is primary, duration is also a key differentiator:

*   **Very Fast Transient Overvoltages (VFTOs):**
    *   **Duration:** Nanoseconds to microseconds.
    *   **Origin:** Primarily associated with high-speed switching operations of circuit breakers, especially in high-voltage DC (HVDC) systems and Vacuum Circuit Breakers (VCBs). These are a subset of impulsive transients.

*   **Fast Transient Overvoltages (FTOs):**
    *   **Duration:** Microseconds to milliseconds.
    *   **Origin:** Common from switching of loads, lightning, and ESD. This covers most impulsive transients.

*   **Switching Surges:**
    *   **Duration:** Milliseconds to seconds.
    *   **Origin:** Energizing of lines, transformers, and capacitor banks, leading to oscillatory or DC offset transients.

#### 3. Classification by Polarity:

*   **Unipolar Transients:** The transient deviation occurs on only one side of the AC waveform (e.g., a positive spike). Impulsive transients are often unipolar.
*   **Bipolar Transients:** The transient deviation occurs on both sides of the AC waveform (e.g., a positive spike followed by a negative spike of similar shape). Oscillatory transients are often bipolar.

### Origin of Transients in Detail:

Understanding the root causes of transients is essential for effective mitigation.

#### 1. Switching Operations:

*   **Energizing/De-energizing Loads:**
    *   **Inductive Loads (Motors, Transformers):** When an inductive circuit is opened, the stored magnetic energy must be dissipated. This can lead to voltage spikes and oscillatory transients as the energy is transferred between inductance and system capacitance. (Dugan et al., 2012)
    *   **Capacitive Loads (Capacitor Banks, UPS):** Energizing capacitor banks can cause high inrush currents and oscillatory transients due to the interaction with system inductance. De-energizing them can also induce transients. (Sankaran, 2002)
*   **Faults and Fault Clearing:**
    *   The sudden change in circuit impedance during a fault and the arc extinction process by circuit breakers inject significant energy, causing transients. High-speed switching operations in modern circuit breakers can generate very fast transients.
*   **Reclosing Operations:**
    *   Automatic reclosing of circuit breakers after a fault can cause transients, especially if the fault is intermittent or if there are capacitive or inductive elements involved.
*   **Switching of Non-Linear Loads:**
    *   Loads with power electronic converters (e.g., Variable Frequency Drives - VFDs, Switched-Mode Power Supplies - SMPS) can interact with the power system and cause transients when switched.

#### 2. Lightning Strikes:

*   **Direct Strikes:** A direct lightning strike to a power line or structure injects a massive amount of energy, causing extremely high-voltage, fast-rising transients (impulsive transients).
*   **Indirect Strikes (Coupling):** Lightning flashes nearby can induce voltages and currents in power lines through electromagnetic coupling. This is a more common cause of transients than direct strikes. (Bollen, 1999)

#### 3. Electrostatic Discharge (ESD):

*   **Definition:** The rapid release of stored electric charge from an object (often a person or a machine) to another object with a different electrical potential.
*   **Origin:** Common in environments with low humidity and when handling sensitive electronic components. The discharge can be very fast and have high-frequency components.

#### 4. Other Sources:

*   **Arc Furnaces:** The intermittent nature of arcs in electric arc furnaces can create significant disturbances, including transients.
*   **Welding Equipment:** Similar to arc furnaces, welding equipment can generate transient noise.

### Effects of Transients on Equipment:

Transients, especially high-magnitude ones, can have severe consequences:

*   **Damage to Insulation:** High-voltage transients can exceed the dielectric strength of insulation, leading to breakdown and equipment failure (e.g., motor windings, transformer insulation).
*   **Maloperation of Electronic Devices:** Sensitive electronic components in control systems, computers, and communication equipment can be upset or damaged by fast transients. This can lead to data corruption, incorrect readings, or system shutdowns. (Dugan et al., 2012)
*   **Premature Aging of Equipment:** Repeated exposure to moderate transients can degrade insulation over time, leading to premature equipment failure.
*   **Tripping of Protective Devices:** While designed to protect, some sensitive protective relays can be falsely triggered by transients, leading to unnecessary outages.

### Important Points to Remember:

*   **Transients are short-duration but high-impact.** Their rapid rise time and high peak values are their defining characteristics.
*   **Switching operations are the most common source of transients.** Understanding *what* is being switched and *how* is key.
*   **Lightning is a major cause of severe impulsive transients.**
*   **Capacitor bank switching is a significant contributor to oscillatory transients.**
*   **Transients can cause insulation breakdown and upset sensitive electronics.**
*   **The frequency of oscillation in oscillatory transients is often much higher than the fundamental power frequency.**

### Practice Questions:

1.  **Distinguish between impulsive and oscillatory transients. Provide one example of a cause for each.**
    *   **Answer:** Impulsive transients have a rapid rise and decay, typically unipolar (e.g., lightning strikes). Oscillatory transients have a decaying oscillating waveform, often bipolar (e.g., capacitor bank switching).

2.  **What is the primary characteristic that defines a transient disturbance?**
    *   **Answer:** Transients are characterized by short duration and rapid variations in voltage or current superimposed on the fundamental waveform.

3.  **Explain how switching a large inductive load can cause a transient.**
    *   **Answer:** When a large inductive load is switched off, the stored magnetic energy in the inductance tries to maintain the current flow. This can cause a voltage spike (transient) as the energy is dissipated across the switching contacts or through parasitic capacitances. It can also lead to a DC offset in the current waveform during energizing.

4.  **Which type of transient is most likely to be caused by a direct lightning strike?**
    *   **Answer:** Impulsive transient.

5.  **Give an example of a power quality problem that can be caused by transients.**
    *   **Answer:** Maloperation of electronic control systems, damage to motor insulation, or premature aging of power electronic components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Dugan, R. C., Me Granaghen, M. F., & Beaty, H. W. (2012).** *Electrical Power System Quality*. McGraw-Hill.
*   **Sankaran, C. (2002).** *Power Quality*. CRC Press.
*   **Bollen, M. H. (1999).** *Understanding Power Quality Problems*. Wiley-IEEE Press.
*   **Singh, B., Chandra, A., & Al-Haddad, K. (2015).** *Power Quality Problems and Mitigation Techniques*. John Wiley and Sons Ltd.