---
title: "Schmitt trigger circuit"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a0"
status: "completed"
scrapedAt: "2026-05-23T17:49:55.053Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 1: Familiarization of Operational Amplifiers

### Topic: Schmitt Trigger Circuit

---

### 1. Introduction to Schmitt Trigger Circuits

The Schmitt trigger is a type of **regenerative comparator**, meaning it has positive feedback. This positive feedback causes the circuit to exhibit **hysteresis**, a property that makes it insensitive to noise. Unlike a standard comparator, which changes its output state whenever the input crosses a single threshold, a Schmitt trigger has two distinct switching thresholds: an **upper threshold voltage ($V_{UT}$)** and a **lower threshold voltage ($V_{LT}$)**. The output changes state only when the input voltage crosses these respective thresholds.

**Key Concept:** Hysteresis - The phenomenon where the output of a circuit depends not only on the present input but also on its past history of inputs. In Schmitt triggers, this is manifested as two distinct switching thresholds.

**Importance:** Schmitt triggers are crucial in applications where noisy or slow-changing input signals need to be converted into clean, crisp digital signals. They are commonly used in signal conditioning, waveform shaping, and debouncing mechanical switches.

**Textbook/Reference Alignment:** This foundational understanding of hysteresis and switching thresholds is consistently presented in chapters related to comparators and their applications in both Choudhury & Jain and Gayakwad.

---

### 2. Types of Schmitt Trigger Circuits

Schmitt triggers can be implemented using operational amplifiers (op-amps) in two primary configurations:

*   **Non-inverting Schmitt Trigger:** The input signal is applied to the non-inverting terminal of the op-amp.
*   **Inverting Schmitt Trigger:** The input signal is applied to the inverting terminal of the op-amp.

**Textbook/Reference Alignment:** Both Choudhury & Jain and Gayakwad provide detailed schematics and analyses for both non-inverting and inverting configurations. Rashid's book, while focused on PSpice, would also illustrate these configurations for simulation.

---

### 3. Non-Inverting Schmitt Trigger Circuit

#### 3.1 Circuit Diagram and Operation

**Circuit Diagram:**

```
      +Vcc
       |
       R1
       |
     -----
     |   |
Vin ---|>o----- Vout
     |   |
     -----
       |
       R2
       |
      GND
```

*   **Op-Amp:** A general-purpose op-amp (e.g., 741) is used.
*   **Feedback Resistor (R2):** Connects the output of the op-amp to its non-inverting input, providing positive feedback.
*   **Input Resistor (R1):** Connects the input voltage ($V_{in}$) to the non-inverting input.
*   **Output ($V_{out}$):** Connected to the output terminal of the op-amp.

**Operation:**

1.  **Initial State:** Assume $V_{out}$ is at its positive saturation voltage, $+V_{sat}$ (approximately $+V_{cc}$).
2.  **Input Increasing:** As $V_{in}$ increases, the voltage at the non-inverting input ($V_+$) also increases due to the voltage divider formed by $R1$ and $R2$. The voltage at the non-inverting input is given by:
    $V_+ = V_{out} \times \frac{R1}{R1 + R2}$
3.  **Upper Threshold ($V_{UT}$):** The output switches from $+V_{sat}$ to $-V_{sat}$ (approximately $-V_{cc}$) when $V_{in}$ crosses the **upper threshold voltage ($V_{UT}$)**. At this point, $V_+$ becomes equal to the voltage at the inverting input (which is connected to $V_{in}$ through $R1$).
    When $V_{out} = +V_{sat}$, $V_+ = +V_{sat} \times \frac{R1}{R1 + R2}$.
    The threshold is reached when $V_{in} = V_+$. Thus:
    $V_{UT} = +V_{sat} \times \frac{R1}{R1 + R2}$
4.  **Output Switched to $-V_{sat}$:** Once $V_{in}$ exceeds $V_{UT}$, the op-amp output switches to $-V_{sat}$.
5.  **Input Decreasing:** As $V_{in}$ now decreases from a value greater than $V_{UT}$, the voltage at the non-inverting input ($V_+$) also decreases. However, the output remains at $-V_{sat}$ due to the positive feedback.
6.  **Lower Threshold ($V_{LT}$):** The output switches back from $-V_{sat}$ to $+V_{sat}$ when $V_{in}$ crosses the **lower threshold voltage ($V_{LT}$)**.
    When $V_{out} = -V_{sat}$, $V_+ = -V_{sat} \times \frac{R1}{R1 + R2}$.
    The threshold is reached when $V_{in} = V_+$. Thus:
    $V_{LT} = -V_{sat} \times \frac{R1}{R1 + R2}$
7.  **Hysteresis Voltage ($V_H$):** The difference between the upper and lower threshold voltages is the hysteresis voltage.
    $V_H = V_{UT} - V_{LT} = (+V_{sat} \times \frac{R1}{R1 + R2}) - (-V_{sat} \times \frac{R1}{R1 + R2})$
    $V_H = 2 \times V_{sat} \times \frac{R1}{R1 + R2}$

**Key Concept:** The ratio $R1/(R1+R2)$ determines the voltage at the non-inverting input, which is directly influenced by the output voltage. This feedback creates the two thresholds.

**Textbook/Reference Alignment:** Choudhury & Jain (Chapter on Comparators) and Gayakwad (Chapter on Applications of Op-Amps) thoroughly explain the derivation of $V_{UT}$ and $V_{LT}$ for the non-inverting Schmitt trigger.

**Example Calculation:**
Let $V_{sat} = 12V$, $R1 = 10k\Omega$, $R2 = 10k\Omega$.
$V_{UT} = +12V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = +12V \times \frac{1}{2} = +6V$
$V_{LT} = -12V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = -12V \times \frac{1}{2} = -6V$
$V_H = 6V - (-6V) = 12V$

#### 3.2 Design Considerations

*   **Choosing $R1$ and $R2$:** The ratio of $R1$ to $R2$ determines the hysteresis width ($V_H$). A larger ratio ($R1 >> R2$) leads to wider hysteresis, while a smaller ratio leads to narrower hysteresis.
*   **Input Impedance:** The input impedance of this circuit is approximately $R1$.
*   **Saturation Voltages:** The actual saturation voltages ($+V_{sat}$ and $-V_{sat}$) depend on the op-amp used and the power supply voltages. For practical calculations, it's important to use the op-amp's specified saturation limits, which are usually slightly less than the supply voltages.
*   **Component Selection:** Use resistors with appropriate power ratings.

**Textbook/Reference Alignment:** Gayakwad often provides practical design tips and component selection guidelines. Choudhury & Jain will offer the theoretical basis for these choices.

---

### 4. Inverting Schmitt Trigger Circuit

#### 4.1 Circuit Diagram and Operation

**Circuit Diagram:**

```
      +Vcc
       |
       R1
       |
     -----
     |   |
Vin ---|>o----- Vout
     |   |
     -----
       |
       R2
       |
      GND
```

*   **Op-Amp:** A general-purpose op-amp.
*   **Feedback Resistor (R2):** Connects the output of the op-amp to its **inverting terminal**, providing positive feedback.
*   **Input Resistor (R1):** Connects the input voltage ($V_{in}$) to the **non-inverting terminal**.
*   **Ground Connection:** The inverting terminal is initially connected to ground through $R1$. However, in the standard inverting Schmitt trigger, the input resistor ($R1$) connects to the inverting terminal, and the feedback resistor ($R2$) connects from the output to the inverting terminal. The non-inverting terminal is usually connected to a reference voltage or ground.

Let's consider the more common implementation where $V_{in}$ is applied to the inverting terminal:

**Circuit Diagram (More Common Implementation):**

```
      +Vcc
       |
       R2 (Feedback)
       |
     -----
     |   |
Vin ---|>o----- Vout
     |   |
     -----
       |
       R1
       |
      GND
```

*   **Op-Amp:** General-purpose op-amp.
*   **Feedback Resistor (R2):** Connects the output ($V_{out}$) to the **inverting terminal**.
*   **Input Resistor (R1):** Connects the input voltage ($V_{in}$) to the **inverting terminal**.
*   **Non-inverting Input:** Connected to a reference voltage ($V_{ref}$). Often, $V_{ref}$ is 0V (ground).

**Operation (with $V_{ref} = 0V$):**

1.  **Initial State:** Assume $V_{out}$ is at its positive saturation voltage, $+V_{sat}$.
2.  **Input Increasing:** As $V_{in}$ increases from a low value, the voltage at the inverting input ($V_-$) is determined by the voltage divider formed by $R1$ and $R2$ with the output.
    The voltage at the inverting terminal is given by:
    $V_- = V_{out} \times \frac{R1}{R1 + R2}$
    The non-inverting input is at $V_{ref} = 0V$.
3.  **Lower Threshold ($V_{LT}$):** The output switches from $+V_{sat}$ to $-V_{sat}$ when the voltage at the inverting input ($V_-$) exceeds the voltage at the non-inverting input (0V).
    This occurs when $V_{in} \times \frac{R2}{R1 + R2}$ becomes positive enough to make $V_-$ equal to 0V.
    The output switches when $V_- = V_{ref} = 0V$.
    When $V_{out} = +V_{sat}$:
    $0V = +V_{sat} \times \frac{R1}{R1 + R2}$ (This implies $R1/(R1+R2)$ is not the only factor, the input voltage also matters)

    Let's re-evaluate the voltage at the inverting input:
    $V_- = V_{in} \times \frac{R2}{R1+R2} + V_{out} \times \frac{R1}{R1+R2}$

    The op-amp output will invert when $V_- > V_{ref}$. With $V_{ref}=0$:
    $V_{in} \times \frac{R2}{R1+R2} + V_{out} \times \frac{R1}{R1+R2} > 0$

    *   **When $V_{out} = +V_{sat}$:** The switching occurs when $V_{in} \times \frac{R2}{R1+R2} + (+V_{sat}) \times \frac{R1}{R1+R2} = 0$.
        This gives us the **Lower Threshold ($V_{LT}$)** for the input voltage:
        $V_{LT} = -\frac{R1}{R2} V_{sat}$

    *   **When $V_{out} = -V_{sat}$:** The output switches back when $V_{in} \times \frac{R2}{R1+R2} + (-V_{sat}) \times \frac{R1}{R1+R2} = 0$.
        This gives us the **Upper Threshold ($V_{UT}$)** for the input voltage:
        $V_{UT} = +\frac{R1}{R2} V_{sat}$

4.  **Hysteresis Voltage ($V_H$):**
    $V_H = V_{UT} - V_{LT} = (\frac{R1}{R2} V_{sat}) - (-\frac{R1}{R2} V_{sat})$
    $V_H = 2 \times \frac{R1}{R2} V_{sat}$

**Key Concept:** The gain of the feedback loop is determined by the ratio $R1/R2$. This ratio directly sets the magnitude of the switching thresholds.

**Textbook/Reference Alignment:** Choudhury & Jain and Gayakwad provide the derivation for the inverting Schmitt trigger, including the threshold equations. The reference voltage at the non-inverting terminal can be any value, allowing for asymmetric hysteresis if desired.

**Example Calculation:**
Let $V_{sat} = 12V$, $R1 = 10k\Omega$, $R2 = 10k\Omega$.
$V_{LT} = -\frac{10k\Omega}{10k\Omega} \times 12V = -12V$
$V_{UT} = +\frac{10k\Omega}{10k\Omega} \times 12V = +12V$
$V_H = 12V - (-12V) = 24V$

**Note:** In this specific case ($R1=R2$), the thresholds are symmetric around 0V. By changing the reference voltage at the non-inverting input, the thresholds can be shifted.

#### 4.2 Design Considerations

*   **Choosing $R1$ and $R2$:** The ratio $R1/R2$ determines the hysteresis width. To achieve wider hysteresis, increase $R1$ relative to $R2$.
*   **Input Impedance:** The input impedance is approximately $R1$.
*   **Reference Voltage ($V_{ref}$):** By connecting the non-inverting input to a voltage other than ground, the thresholds can be shifted. For example, if $V_{ref}$ is connected, the thresholds become:
    $V_{LT} = V_{ref} - \frac{R1}{R2} V_{sat}$
    $V_{UT} = V_{ref} + \frac{R1}{R2} V_{sat}$
*   **Component Selection:** Similar to the non-inverting Schmitt trigger, select resistors with appropriate power ratings.

**Textbook/Reference Alignment:** This section elaborates on the practical aspects of designing the inverting Schmitt trigger, drawing from the analytical methods presented in the textbooks.

---

### 5. Applications of Schmitt Trigger Circuits

Schmitt triggers are versatile and find applications in various electronic systems:

*   **Debouncing Mechanical Switches:** Mechanical switches often produce multiple transitions (bounces) when actuated. A Schmitt trigger converts these noisy pulses into a single clean output pulse, preventing false triggering in digital circuits.
*   **Signal Conditioning/Restoration:** Schmitt triggers can clean up noisy or distorted sine waves, converting them into square waves. This is useful for clock generation or signal transmission where sharp transitions are required.
*   **Oscillator Circuits:** When combined with a capacitor, a Schmitt trigger can form a **relaxation oscillator**, producing a periodic square wave output. The frequency of oscillation is determined by the RC time constant and the hysteresis levels.
*   **Hysteresis in Digital Systems:** Used in level translators and voltage comparators to provide noise immunity.

**Textbook/Reference Alignment:** The applications section is a key part of the op-amp applications chapters in both Choudhury & Jain and Gayakwad. The relaxation oscillator is a classic example discussed in detail.

---

### 6. Simulation with PSpice (Introduction)

The `Introduction to PSpice Using Orcad for Circuits and Electronics` by M. H. Rashid provides a strong foundation for simulating these circuits.

**Simulation Steps (General):**

1.  **Create the Schematic:** Draw the circuit diagram of either the non-inverting or inverting Schmitt trigger using the op-amp model, resistors, and voltage sources in the PSpice schematic editor (Orcad Capture).
2.  **Set up Analysis:**
    *   **DC Sweep:** To determine the switching thresholds ($V_{UT}$, $V_{LT}$), perform a DC sweep on the input voltage source ($V_{in}$) and plot the output voltage ($V_{out}$) against $V_{in}$. This will reveal the hysteresis loop.
    *   **Transient Analysis:** To observe the output waveform for a given input waveform (e.g., sine wave, square wave), perform a transient analysis. This will show how the Schmitt trigger converts the input signal into a square wave.
3.  **Run Simulation:** Execute the simulation and analyze the output plots.

**Key Concepts for Simulation:**

*   **Op-Amp Model:** Use a suitable op-amp model (e.g., `NE5534`, `LM741`). Ensure its parameters (e.g., gain, saturation voltages) are reasonably set.
*   **Voltage Sources:** Use DC sources for power supplies and AC/pulse sources for input signals.
*   **Probe Tool:** Use the probe tool in the PSpice A/D (Analog-to-Digital) simulator to view voltage and current waveforms.

**Textbook/Reference Alignment:** Rashid's book is the primary resource for this section, offering step-by-step guides and examples of circuit simulation using PSpice. This directly addresses CO3.

---

### 7. Laboratory Exercises and Practice Questions

These questions are designed to reinforce the understanding of Schmitt trigger circuits and align with the Course Outcomes (CO1, CO2, CO3, CO4).

**Exercise 1: Design and Build a Non-Inverting Schmitt Trigger**

**Objective:** To design and implement a non-inverting Schmitt trigger circuit that converts a sine wave into a square wave.

**Components:**
*   Op-amp (e.g., LM741)
*   Resistors (e.g., 10kΩ, 10kΩ for R1 and R2)
*   Capacitor (optional, for relaxation oscillator)
*   Function generator
*   Oscilloscope
*   Breadboard and connecting wires

**Procedure:**
1.  **Design:**
    *   Choose $V_{sat}$ to be approximately $\pm 12V$ (assuming $\pm 15V$ power supply).
    *   Select $R1$ and $R2$ to achieve desired threshold voltages. For instance, let $R1 = 10k\Omega$ and $R2 = 10k\Omega$.
    *   Calculate $V_{UT}$ and $V_{LT}$ for the chosen component values.
    *   Calculate the expected hysteresis voltage $V_H$.
2.  **Implementation:**
    *   Connect the circuit on a breadboard according to the non-inverting Schmitt trigger diagram.
    *   Provide appropriate power supply to the op-amp.
3.  **Testing:**
    *   Apply a sine wave input (e.g., 1V amplitude, 1kHz frequency) from the function generator.
    *   Observe the input and output waveforms on the oscilloscope.
    *   Verify that the output is a square wave.
    *   Measure the amplitude of the output square wave (should be close to $\pm V_{sat}$).
    *   Measure the upper and lower threshold voltages on the oscilloscope by adjusting the input voltage and observing when the output switches. Compare these measured values with the calculated values.
    *   Observe the effect of noise on the input signal and how the Schmitt trigger eliminates it.

**CO Alignment:** CO1 (Design and implement), CO4 (Troubleshoot and analyze).

**Question 1:** For a non-inverting Schmitt trigger with $V_{sat} = \pm 13V$, $R1 = 20k\Omega$, and $R2 = 10k\Omega$, calculate:
    a) Upper Threshold Voltage ($V_{UT}$)
    b) Lower Threshold Voltage ($V_{LT}$)
    c) Hysteresis Voltage ($V_H$)

**Answer 1:**
Given $V_{sat} = 13V$, $R1 = 20k\Omega$, $R2 = 10k\Omega$.
a) $V_{UT} = +V_{sat} \times \frac{R1}{R1 + R2} = +13V \times \frac{20k\Omega}{20k\Omega + 10k\Omega} = +13V \times \frac{20}{30} = +13V \times \frac{2}{3} \approx +8.67V$
b) $V_{LT} = -V_{sat} \times \frac{R1}{R1 + R2} = -13V \times \frac{20k\Omega}{20k\Omega + 10k\Omega} = -13V \times \frac{20}{30} = -13V \times \frac{2}{3} \approx -8.67V$
c) $V_H = V_{UT} - V_{LT} = 8.67V - (-8.67V) = 17.34V$

**Exercise 2: Design and Build an Inverting Schmitt Trigger**

**Objective:** To design and implement an inverting Schmitt trigger circuit with asymmetric thresholds.

**Components:** Same as Exercise 1, plus an additional DC voltage source.

**Procedure:**
1.  **Design:**
    *   Choose $V_{sat}$ to be approximately $\pm 12V$.
    *   Select $R1$ and $R2$ to achieve desired hysteresis width. Let $R1 = 10k\Omega$ and $R2 = 20k\Omega$.
    *   Connect the non-inverting input to a reference voltage $V_{ref} = +5V$.
    *   Calculate $V_{LT}$ and $V_{UT}$ for the chosen component values and $V_{ref}$.
2.  **Implementation:**
    *   Connect the circuit on a breadboard, ensuring the non-inverting input is connected to $+5V$.
    *   Provide appropriate power supply to the op-amp.
3.  **Testing:**
    *   Apply a sine wave input (e.g., 2V amplitude, 1kHz frequency) from the function generator.
    *   Observe the input and output waveforms on the oscilloscope.
    *   Measure the upper and lower threshold voltages on the oscilloscope and compare with calculated values.
    *   Observe how the asymmetric threshold affects the output square wave's symmetry relative to the input signal's zero crossing.

**CO Alignment:** CO1 (Design and implement), CO4 (Troubleshoot and analyze).

**Question 2:** For an inverting Schmitt trigger with $V_{sat} = \pm 10V$, $R1 = 10k\Omega$, $R2 = 20k\Omega$, and $V_{ref} = +3V$, calculate:
    a) Upper Threshold Voltage ($V_{UT}$)
    b) Lower Threshold Voltage ($V_{LT}$)
    c) Hysteresis Voltage ($V_H$)

**Answer 2:**
Given $V_{sat} = 10V$, $R1 = 10k\Omega$, $R2 = 20k\Omega$, $V_{ref} = 3V$.
The threshold equations are:
$V_{LT} = V_{ref} - \frac{R1}{R2} V_{sat}$
$V_{UT} = V_{ref} + \frac{R1}{R2} V_{sat}$

a) $V_{UT} = +3V + \frac{10k\Omega}{20k\Omega} \times 10V = +3V + \frac{1}{2} \times 10V = +3V + 5V = +8V$
b) $V_{LT} = +3V - \frac{10k\Omega}{20k\Omega} \times 10V = +3V - \frac{1}{2} \times 10V = +3V - 5V = -2V$
c) $V_H = V_{UT} - V_{LT} = 8V - (-2V) = 10V$

**Question 3 (Simulation):** Using PSpice, simulate a non-inverting Schmitt trigger with $V_{sat} \approx \pm 12V$, $R1=10k\Omega$, $R2=10k\Omega$. Apply a sine wave input of 2V amplitude and 1kHz frequency. Plot $V_{in}$ vs $V_{out}$ to observe the hysteresis loop and plot $V_{out}$ vs time to observe the square wave output.

**CO Alignment:** CO3 (Design and simulate).

---

### 8. Important Points to Remember

*   **Positive Feedback:** The hallmark of a Schmitt trigger is positive feedback, which creates hysteresis.
*   **Two Thresholds:** $V_{UT}$ and $V_{LT}$ are crucial for its operation.
*   **Hysteresis Voltage:** $V_H = V_{UT} - V_{LT}$, determines noise immunity.
*   **Non-inverting vs. Inverting:** Understand the differences in their threshold equations and circuit configurations.
*   **Applications:** Signal conditioning, debouncing, oscillators are key uses.
*   **Saturation Voltages:** Actual thresholds depend on the op-amp's saturation limits, not just the power supply voltages.
*   **Simulation:** PSpice is a powerful tool for verifying the design and understanding the behavior of Schmitt triggers.

**Textbook/Reference Alignment:** These points are synthesized from the core principles discussed throughout the recommended texts.

---

This comprehensive set of study notes covers the fundamental aspects of Schmitt trigger circuits, their design, operation, applications, and simulation, directly addressing the learning outcomes and course objectives for the Linear Integrated Circuits Lab.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
