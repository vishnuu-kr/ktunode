---
title: "Waveform generators using Op Amps - Triangular and Sawtooth"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a2"
status: "completed"
scrapedAt: "2026-05-23T17:49:56.475Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 1: Familiarization of Operational Amplifiers

### Topic: Waveform Generators using Op Amps - Triangular and Sawtooth

This module focuses on understanding and implementing waveform generators, specifically triangular and sawtooth waveforms, using operational amplifiers (Op-Amps).

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles behind generating triangular and sawtooth waveforms using Op-Amps.
*   Design and analyze circuits for generating triangular and sawtooth waveforms.
*   Implement these waveform generators in a lab setting.
*   Simulate the behavior of these waveform generators using simulation tools.
*   Troubleshoot and analyze common issues that may arise in these circuits.

---

### Key Concepts and Definitions:

*   **Operational Amplifier (Op-Amp):** A high-gain, direct-coupled differential amplifier with two inputs (inverting and non-inverting) and one output. Op-amps are the fundamental building blocks for most analog circuits.
    *   *Refer to: Choudhary & Jain, Chapter 2: Operational Amplifier Characteristics and Configurations.*
*   **Waveform Generator:** An electronic circuit that produces a periodic electrical signal in the form of a wave.
*   **Triangular Waveform:** A periodic waveform characterized by a linear rise and a linear fall, creating a triangular shape when plotted against time.
*   **Sawtooth Waveform:** A periodic waveform characterized by a linear ramp up (or down) followed by a sudden drop (or rise) back to the starting point.
*   **Comparator:** A circuit that compares two input voltages and produces an output that is either high or low, depending on which input is larger. Op-amps can be configured as comparators.
    *   *Refer to: Choudhary & Jain, Chapter 3: Applications of Operational Amplifiers (Comparator circuits).*
*   **Integrator:** A circuit where the output voltage is proportional to the integral of the input voltage over time. Op-amps are commonly used to build integrators.
    *   *Refer to: Choudhary & Jain, Chapter 3: Applications of Operational Amplifiers (Integrator circuits).*
*   **Positive Feedback:** A feedback mechanism where a portion of the output signal is fed back to the input in the same phase, leading to amplification or oscillation.
*   **Schmitt Trigger:** A comparator circuit with hysteresis. It has two different threshold voltages (upper threshold and lower threshold) for switching the output. This is crucial for creating relaxation oscillators.
    *   *Refer to: Choudhary & Jain, Chapter 3: Applications of Operational Amplifiers (Schmitt Trigger circuits).*
*   **Hysteresis:** The property of a system where its response depends on its history. In a Schmitt trigger, hysteresis is achieved by using positive feedback, which creates two switching thresholds.

---

### Triangular Waveform Generation:

A common method for generating triangular waveforms involves using an **integrator** and a **Schmitt trigger**. The Schmitt trigger provides the switching action to control the integrator's input, and the integrator produces the ramp-like output.

#### Circuit Configuration:

The basic circuit consists of:

1.  **An Integrator:** Typically built with an Op-Amp, a resistor at the input, and a capacitor in the feedback path. The output of the integrator is proportional to the integral of its input.
2.  **A Schmitt Trigger:** Used to provide the switching action. The output of the Schmitt trigger is connected to the input of the integrator. The Schmitt trigger's positive feedback (through a resistor network) creates hysteresis.

#### Working Principle:

1.  **Initial State:** Assume the output of the Schmitt trigger is high (e.g., +Vsat). This positive voltage is fed to the inverting input of the integrator. The integrator's output will start to decrease linearly (as it's integrating a negative input).
2.  **Reaching Lower Threshold:** As the integrator's output decreases, it is also fed back to the non-inverting input of the Schmitt trigger. When the integrator's output reaches the lower threshold voltage ($V_{LT}$) of the Schmitt trigger, the Schmitt trigger's output flips to the negative saturation voltage (-Vsat).
3.  **Ramping Down:** Now, -Vsat is fed to the integrator's inverting input. The integrator's output will start to increase linearly.
4.  **Reaching Upper Threshold:** As the integrator's output increases, it is again fed back to the non-inverting input of the Schmitt trigger. When the integrator's output reaches the upper threshold voltage ($V_{UT}$) of the Schmitt trigger, the Schmitt trigger's output flips back to +Vsat.
5.  **Cycle Repeats:** This process repeats, creating a continuous triangular waveform at the output of the integrator.

#### Design Equations (Example using Op-Amp as Integrator and Schmitt Trigger):

Let's consider a common configuration:

*   **Schmitt Trigger Thresholds:**
    For a Schmitt trigger with feedback resistor $R_f$ from output to non-inverting input and voltage divider resistors $R_1$ and $R_2$ from the output to the non-inverting input (connected to ground):
    $V_{UT} = V_{sat} \frac{R_2}{R_1 + R_2}$
    $V_{LT} = -V_{sat} \frac{R_2}{R_1 + R_2}$
    where $V_{sat}$ is the saturation voltage of the Op-Amp.

*   **Integrator Time Constant and Frequency:**
    If the integrator has an input resistor $R$ and feedback capacitor $C$, and the Schmitt trigger switches between $+V_{sat}$ and $-V_{sat}$, the rate of change of the integrator's output voltage is given by:
    $\frac{dV_{out}}{dt} = -\frac{V_{in}}{RC}$
    When $V_{in} = V_{sat}$ (or $-V_{sat}$), the rate of change is constant. The time taken for the output to ramp from one threshold to another determines the period of the waveform.
    Let the amplitude of the triangular wave be $A$.
    $A = |V_{UT} - V_{LT}| / 2$ (assuming symmetrical thresholds for simplicity, though the integrator output will swing between approximately $V_{LT}$ and $V_{UT}$)
    The time to ramp from $V_{LT}$ to $V_{UT}$ (or vice versa) is:
    $T_{rise} = \frac{(V_{UT} - V_{LT}) RC}{V_{sat}}$
    The period of the triangular wave is $T = 2 \times T_{rise}$ (for a symmetric waveform with equal ramp times).
    The frequency is $f = 1/T$.

    *   *Reference: Gayakwad, Chapter 6: Oscillators (Square wave and Triangular wave generators).*
    *   *Reference: Rashid, Chapter 12: Oscillators (Op-Amp based oscillators).*

#### Example: Designing a Triangular Waveform Generator

**Objective:** Generate a triangular wave with a frequency of approximately 1 kHz and an amplitude of +/- 3V.

**Component Selection Strategy:**

1.  **Schmitt Trigger Thresholds:** Let's choose $V_{sat} \approx \pm 12V$ (for a typical $\pm 15V$ supply). We want the triangular wave to swing between approximately +/- 3V. This means the integrator output should trigger the Schmitt trigger at these levels.
    Let $V_{UT} = 3V$ and $V_{LT} = -3V$.
    Using the Schmitt trigger threshold equation: $V_{UT} = V_{sat} \frac{R_2}{R_1 + R_2}$.
    $3V = 12V \frac{R_2}{R_1 + R_2}$
    $0.25 = \frac{R_2}{R_1 + R_2}$
    $0.25(R_1 + R_2) = R_2$
    $0.25R_1 + 0.25R_2 = R_2$
    $0.25R_1 = 0.75R_2$
    $R_1 = 3R_2$.
    Let $R_2 = 10k\Omega$, then $R_1 = 30k\Omega$.

2.  **Integrator Frequency:** We need a frequency of 1 kHz. The period $T = 1/1000 s = 1ms$.
    The time to ramp from -3V to +3V (or vice versa) is $T_{rise} = T/2 = 0.5ms = 5 \times 10^{-4} s$.
    Using $T_{rise} = \frac{(V_{UT} - V_{LT}) RC}{V_{sat}}$
    $5 \times 10^{-4} s = \frac{(3V - (-3V)) RC}{12V}$
    $5 \times 10^{-4} s = \frac{6V \times RC}{12V}$
    $5 \times 10^{-4} s = 0.5 \times RC$
    $RC = 10 \times 10^{-4} s = 1 ms$.
    Let $C = 0.1 \mu F$. Then $R = \frac{1ms}{0.1 \mu F} = \frac{1 \times 10^{-3}}{0.1 \times 10^{-6}} = 10 \times 10^3 \Omega = 10k\Omega$.

**Final Component Values:**

*   **Schmitt Trigger:** Op-Amp (e.g., LM741), $R_1 = 30k\Omega$, $R_2 = 10k\Omega$.
*   **Integrator:** Op-Amp (e.g., LM741), Input Resistor $R = 10k\Omega$, Feedback Capacitor $C = 0.1\mu F$.

---

### Sawtooth Waveform Generation:

Sawtooth waveforms can be generated using circuits that involve charging and discharging a capacitor through a constant current source or a variable resistance, controlled by a switching mechanism. A common approach utilizes a **Miller integrator** and a **comparator** (or Schmitt trigger).

#### Circuit Configuration (using Miller Integrator and Comparator):

A typical sawtooth generator circuit includes:

1.  **Miller Integrator:** This is a variation of the standard integrator. It uses an Op-Amp with a capacitor in the feedback path and a resistor at the input. The term "Miller" often refers to a circuit where the input impedance seen by the source is significantly increased. In some configurations, a transistor (like a PUT or UJT) is used in conjunction with an Op-Amp for the switching.
2.  **Constant Current Source:** To achieve a linear ramp, the capacitor needs to be charged/discharged by a constant current. This can be implemented using a transistor-based constant current source.
3.  **Comparator/Schmitt Trigger:** To control the charging and discharging cycle of the capacitor.

#### Working Principle (Conceptual):

A simplified approach:

1.  **Capacitor Charging:** A constant current source charges a capacitor. This charging action creates a linear increase in the voltage across the capacitor.
2.  **Upper Threshold Trigger:** A comparator monitors the capacitor voltage. When the voltage reaches an upper threshold, the comparator's output changes state.
3.  **Discharge/Reset:** This change in the comparator's output triggers a mechanism to rapidly discharge the capacitor (e.g., by turning on a transistor in parallel with the capacitor) or to switch the current source to discharge it.
4.  **Lower Threshold Trigger:** Once the capacitor is discharged to a lower threshold, another comparator (or the same one with different thresholds) triggers the restart of the charging process.

#### Using Op-Amps for Sawtooth (Conceptual Example with a Transistor Switch):

A common implementation involves using an Op-Amp integrator configured to integrate a constant voltage, and a switching circuit to reset the integrator.

*   **Circuit:** An Op-Amp integrator with input resistor $R$ and feedback capacitor $C$. The input to the integrator is a constant voltage (e.g., $V_{ref}$). The output voltage of the integrator will be $V_{out}(t) = -\frac{1}{RC} \int V_{ref} dt = -\frac{V_{ref}}{RC} t + V_{initial}$. This creates a negative ramp.
*   **Switching:** A transistor (like a BJT or FET) is placed in parallel with the feedback capacitor $C$. When the transistor is turned ON, it rapidly discharges the capacitor, resetting the integrator's output.
*   **Control:** A comparator monitors the integrator's output. When the integrator's output reaches a predefined negative voltage (lower threshold), the comparator turns ON the transistor, discharging the capacitor. Once the capacitor is discharged, the integrator's output starts ramping up (if the input voltage was positive, or it will continue ramping down if the input was negative and the initial ramp was negative, but the reset logic ensures the cycle).

A more robust sawtooth generator often uses a **UJT (Unijunction Transistor)** or a **PUT (Programmable Unijunction Transistor)** in relaxation oscillator configuration, where the capacitor charges through a resistor until the UJT/PUT fires, discharging the capacitor. Op-Amps can be used to create the constant current source or to shape the output.

*   *Reference: Choudhary & Jain, Chapter 3: Applications of Operational Amplifiers (Integrator circuits).*
*   *Reference: Gayakwad, Chapter 6: Oscillators (Sawtooth wave generators).*

#### Example: Designing a Sawtooth Waveform Generator (Conceptual)

**Objective:** Generate a sawtooth wave.

**Approach:** A simple approach involves charging a capacitor with a constant current source and using a comparator to trigger a reset.

*   **Constant Current Source:** Implement a simple BJT-based constant current source. For instance, a current mirror or a basic current source using a transistor, Zener diode, and resistor.
*   **Capacitor Charging:** A capacitor $C$ is charged by this constant current source, resulting in a linear voltage ramp: $V_C(t) = \frac{I_{source}}{C} t$.
*   **Comparator:** An Op-Amp configured as a comparator compares $V_C(t)$ with an upper threshold voltage $V_{UT}$.
*   **Reset Mechanism:** When $V_C(t)$ reaches $V_{UT}$, the comparator output goes high. This high output can trigger a transistor switch (e.g., a BJT) connected in parallel with the capacitor, which rapidly discharges $C$.
*   **Lower Threshold:** As $C$ discharges, its voltage $V_C(t)$ drops. When it reaches a lower threshold $V_{LT}$ (or the transistor turns off due to insufficient current), the charging process restarts.

**Design Considerations for Linear Ramp:**

The linearity of the sawtooth ramp is directly dependent on the quality of the constant current source. Any variation in the current source will lead to a non-linear ramp.

*   *Reference: Choudhary & Jain, Chapter 3: Applications of Operational Amplifiers (Constant current sources).*

---

### Lab Implementation and Simulation:

*   **Circuit Construction:** Carefully build the designed circuits on a breadboard, ensuring correct connections, component values, and power supply.
*   **Component Selection:** Use appropriate Op-Amps (e.g., LM741, LM358) and ensure power supply voltages are within the Op-Amp's limits. Use accurate resistor and capacitor values.
*   **Testing:**
    *   Use an oscilloscope to observe the generated waveforms.
    *   Verify the frequency and amplitude of the triangular and sawtooth waveforms by adjusting component values.
    *   Check for any distortions or oscillations.
*   **Simulation (using PSpice or similar tools):**
    *   Create the circuit schematic in the simulation software.
    *   Set up the simulation parameters (e.g., transient analysis for time-domain waveforms).
    *   Analyze the output waveforms to confirm the circuit's functionality.
    *   *Reference: Rashid, Chapter 4: Basic DC and AC Analysis, Chapter 12: Oscillators (for simulation examples).*
    *   *Reference: Rashid, Chapter 10: Operational Amplifier Circuits (for Op-Amp models).*

---

### Troubleshooting and Analysis:

*   **No Output or Constant Output:**
    *   Check power supply connections to the Op-Amp.
    *   Verify Op-Amp is not saturated due to incorrect feedback or input voltages.
    *   Ensure all connections are secure and components are not faulty.
    *   For waveform generators, ensure the feedback loops (positive for Schmitt trigger, integrator feedback) are correctly wired.
*   **Distorted Waveforms:**
    *   **Non-linear Ramps:** Indicates a non-ideal constant current source (for sawtooth) or non-linear charging/discharging. Check component values and ensure the Op-Amp is operating within its linear region.
    *   **Rounded Corners (Triangular):** May indicate slow switching of the Schmitt trigger or limitations in the Op-Amp's slew rate.
    *   **Frequency too low/high:** Adjust resistor and capacitor values in the timing circuits.
*   **Unstable Output:**
    *   Ensure proper grounding and decoupling capacitors are used on the power supply pins.
    *   Check for parasitic oscillations, which might occur at high frequencies.

#### Common Pitfalls:

*   **Incorrect Op-Amp Configuration:** Ensure the integrator and comparator/Schmitt trigger circuits are wired according to their standard configurations.
*   **Component Tolerance:** Resistor and capacitor tolerances can affect the exact frequency and amplitude. Use components with tighter tolerances for more precise results.
*   **Op-Amp Limitations:** Slew rate, bandwidth, and output voltage swing limitations of the Op-Amp can affect the performance, especially at higher frequencies or amplitudes.

---

### Practice Questions:

1.  **Explain the principle of operation of a triangular waveform generator using an Op-Amp integrator and a Schmitt trigger.**
    *   **Answer:** The circuit uses a Schmitt trigger to provide switching voltages to an integrator. The integrator produces a linear ramp. When the integrator's output reaches the upper threshold of the Schmitt trigger, the Schmitt trigger's output flips, causing the integrator to ramp in the opposite direction. This cycle repeats, generating a triangular waveform.

2.  **A triangular waveform generator uses an Op-Amp with $\pm 15V$ power supplies. The Schmitt trigger has feedback resistors $R_1=20k\Omega$ and $R_2=10k\Omega$. Calculate the upper and lower threshold voltages for the Schmitt trigger, assuming $V_{sat} \approx \pm 13V$.**
    *   **Answer:**
        $V_{UT} = V_{sat} \frac{R_2}{R_1 + R_2} = 13V \frac{10k\Omega}{20k\Omega + 10k\Omega} = 13V \frac{10}{30} = 13V \times \frac{1}{3} \approx 4.33V$.
        $V_{LT} = -V_{sat} \frac{R_2}{R_1 + R_2} = -13V \frac{10k\Omega}{20k\Omega + 10k\Omega} = -13V \times \frac{1}{3} \approx -4.33V$.

3.  **If the integrator in Question 2 has an input resistor $R=10k\Omega$ and a feedback capacitor $C=0.01\mu F$, calculate the frequency of the generated triangular wave. Assume the integrator output ramps between $\pm 4.33V$.**
    *   **Answer:**
        The rate of change of the integrator output is $\frac{dV_{out}}{dt} = -\frac{V_{in}}{RC}$.
        When the Schmitt trigger output is $+13V$, the integrator ramps down. The time to ramp from $4.33V$ to $-4.33V$ is:
        $T_{rise} = \frac{\Delta V_{out} \times RC}{V_{in}} = \frac{(4.33V - (-4.33V)) \times (10k\Omega \times 0.01\mu F)}{13V}$
        $T_{rise} = \frac{8.66V \times (10 \times 10^3 \Omega \times 0.01 \times 10^{-6} F)}{13V} = \frac{8.66V \times 0.1 \times 10^{-3} s}{13V}$
        $T_{rise} = \frac{0.866 \times 10^{-3} s}{13} \approx 0.0666 \times 10^{-3} s = 66.6 \mu s$.
        Since the ramp is symmetrical, the period $T = 2 \times T_{rise} \approx 2 \times 66.6 \mu s = 133.2 \mu s$.
        Frequency $f = 1/T = 1 / (133.2 \times 10^{-6} s) \approx 7500 Hz = 7.5 kHz$.
        *(Self-correction: Let's recheck the calculation, as the values might lead to a higher frequency than typically expected for these components. Ah, the question asks for the frequency of the *generated* triangular wave, which means the integrator output is the triangular wave. The Schmitt trigger output is a square wave that drives the integrator. The period of the triangular wave is indeed twice the time it takes to ramp between thresholds.)*

4.  **What is the primary requirement for generating a linear ramp in a sawtooth waveform generator?**
    *   **Answer:** A constant current source to charge or discharge the capacitor.

5.  **How can you adjust the frequency of a triangular waveform generated using an Op-Amp integrator and Schmitt trigger?**
    *   **Answer:**
        *   Change the values of the input resistor ($R$) or feedback capacitor ($C$) of the integrator. Increasing $R$ or $C$ will decrease the frequency.
        *   Change the values of the resistors ($R_1, R_2$) in the Schmitt trigger's feedback network. This changes the threshold voltages, which affects the ramp time and thus the frequency.

---

### Important Points to Remember:

*   **Triangular Wave:** Integrator + Schmitt Trigger.
*   **Sawtooth Wave:** Constant current charging/discharging of a capacitor, controlled by a comparator/switch.
*   **Linearity:** For sawtooth, the linearity of the ramp depends on the constant current source. For triangular, the linearity depends on the integrator and the Op-Amp's ability to operate in its linear region.
*   **Frequency Control:** Adjusting RC time constants and feedback resistor ratios.
*   **Amplitude Control:** Directly related to the Op-Amp's saturation voltages and the Schmitt trigger's threshold voltages.
*   **Simulation:** A crucial tool for verifying designs before hardware implementation.

---

This module provides a hands-on understanding of how Op-Amps can be used to create fundamental waveforms essential in many electronic systems. By carefully designing, implementing, and simulating these circuits, you will gain practical experience in analog circuit design and troubleshooting.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
