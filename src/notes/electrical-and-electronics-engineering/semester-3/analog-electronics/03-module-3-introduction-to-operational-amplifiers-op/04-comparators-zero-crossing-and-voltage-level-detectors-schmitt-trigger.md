---
title: "Comparators: Zero crossing and voltage level detectors, Schmitt trigger."
subject: "ANALOG ELECTRONICS"
module: "Module 3: Introduction to Operational Amplifiers (Op"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b67"
status: "completed"
scrapedAt: "2026-05-23T16:10:58.342Z"
---
# ANALOG ELECTRONICS - Module 3: Introduction to Operational Amplifiers (Op-Amps)

## Topic: Comparators: Zero Crossing and Voltage Level Detectors, Schmitt Trigger

---

### Learning Outcomes Covered:

*   **Understanding Comparator Functionality:** Explain the basic operating principle of an op-amp as a comparator.
*   **Zero Crossing Detector:** Analyze and design a simple zero crossing detector circuit.
*   **Voltage Level Detector:** Analyze and design voltage level detector circuits with and without hysteresis.
*   **Schmitt Trigger:** Understand the concept of hysteresis and its application in Schmitt trigger circuits, including designing and analyzing Schmitt trigger circuits.
*   **Applications:** Identify and describe typical applications of comparators in electronic systems.

---

### 1. Introduction to Comparators

**Key Concept:** A comparator is a circuit that compares two input voltages and produces an output that is indicative of their relative magnitudes. Op-amps, with their high open-loop gain and fast switching speeds, are ideally suited for use as comparators.

**1.1 Op-Amp as a Comparator:**

*   **Princ of Operation:** When an op-amp is used as a comparator, it operates in its non-linear region. The feedback loop is usually absent or is open.
*   **Input Stages:**
    *   When the non-inverting input voltage ($V^+$) is greater than the inverting input voltage ($V^-$), the output voltage ($V_{out}$) drives towards the positive saturation voltage ($+V_{sat}$).
    *   When the inverting input voltage ($V^-$) is greater than the non-inverting input voltage ($V^+$), the output voltage ($V_{out}$) drives towards the negative saturation voltage ($-V_{sat}$ or close to ground if a single supply is used).
*   **Ideal vs. Real Op-Amp:**
    *   **Ideal Op-Amp:** The output is either $+V_{sat}$ or $-V_{sat}$ (ideally $\pm\infty$).
    *   **Real Op-Amp:** The output saturates at voltages close to the power supply rails ($+V_{CC}$ and $-V_{EE}$ or ground). The switching speed (response time) is also a crucial parameter for real op-amps.

**Reference:**
*   *Electronic Devices and Circuits* by David A Bell (Oxford Higher Education) extensively discusses the non-linear operation of op-amps in comparator applications.
*   *Op-Amps and Linear Integrated Circuits* by Gayakward R. A. (PHI Learning Pvt. Ltd.) provides a detailed explanation of op-amp characteristics relevant to comparator usage.

---

### 2. Zero Crossing Detector

**Key Concept:** A zero crossing detector (ZCD) is a circuit that outputs a signal (usually a square wave) when an AC input signal crosses the zero voltage level.

**2.1 Basic Zero Crossing Detector:**

*   **Circuit Configuration:** The op-amp is configured with the input AC signal applied to one terminal and a reference voltage (often 0V) applied to the other.
*   **Operation:**
    *   When the input AC voltage is positive ($V_{in} > 0$), and assuming the AC signal is applied to the non-inverting input and 0V to the inverting input, the op-amp output saturates at $+V_{sat}$.
    *   When the input AC voltage is negative ($V_{in} < 0$), the op-amp output saturates at $-V_{sat}$.
*   **Output:** The output is a square wave that is synchronized with the zero crossings of the input sine wave.

**Circuit Diagram (Conceptual):**

```
      +Vcc
       |
       _
      | | R1 (optional)
      |_|
       |
   +---| Vout
   |   |
   |   o----- Op-Amp Output
   |   / \
Vin o--|-  \
      |    >------
      +--| +     |
         |-------|
         |       |
         o-------+------ 0V (Reference)
         |
        -Vee (or Ground)
```

**Example:** If a sine wave with amplitude 5V is applied to the non-inverting input and 0V to the inverting input, the output will be a square wave switching between $+V_{sat}$ (e.g., +13V) when the sine wave is positive, and $-V_{sat}$ (e.g., -13V) when the sine wave is negative.

**Important Point to Remember:** The output of a simple ZCD is sensitive to noise. Small voltage fluctuations around the zero crossing point can cause the output to switch rapidly, leading to erroneous triggering.

**Reference:**
*   *Introductory Electronic Devices and Circuits* by Robert T Paynter (Pearson Education) illustrates basic comparator circuits, including ZCDs.

---

### 3. Voltage Level Detectors

**Key Concept:** A voltage level detector (VLD) circuit identifies when an input voltage crosses a predefined threshold voltage.

**3.1 Voltage Level Detector (Without Hysteresis):**

*   **Circuit Configuration:** The op-amp compares the input voltage ($V_{in}$) with a fixed reference voltage ($V_{ref}$).
    *   **Case 1: $V_{in} > V_{ref}$:** Output is at $+V_{sat}$.
    *   **Case 2: $V_{in} < V_{ref}$:** Output is at $-V_{sat}$.
*   **Circuit Diagram:** Similar to the ZCD, but $V_{ref}$ can be any voltage level, not necessarily 0V. The reference voltage is often generated using a voltage divider or a Zener diode.

**Example:** A circuit to detect when a battery voltage ($V_{in}$) exceeds 12V. $V_{ref}$ would be set to 12V. When $V_{in} > 12V$, the output is high; otherwise, it's low.

**Limitations:** This simple circuit is also susceptible to noise. If the input signal hovers around the threshold voltage, the output will oscillate erratically, causing false triggering.

**Reference:**
*   *Electronic Circuits: Analysis and Design* by Donald A Neaman (McGraw Hill Companies) details the analysis of circuits with threshold detection.

---

### 4. Schmitt Trigger

**Key Concept:** A Schmitt trigger is a comparator circuit with hysteresis. Hysteresis is a phenomenon where the switching threshold of the circuit depends on the direction of change of the input voltage. This prevents erratic switching due to noise.

**4.1 Hysteresis:**

*   **Definition:** Hysteresis means the output's transition from one state to another occurs at different input voltage levels depending on whether the input is rising or falling.
*   **Purpose:** To provide noise immunity. The input must cross a higher threshold (Upper Threshold Point - UTP) to switch the output from low to high, and a lower threshold (Lower Threshold Point - LTP) to switch from high to low.

**4.2 Regenerative Comparator (Schmitt Trigger) Circuit:**

*   **Configuration:** Typically uses positive feedback. A portion of the output voltage is fed back to the non-inverting input via a resistor network.
*   **Circuit Diagram:**

```
      +Vcc
       |
       _
      | | R1 (feedback resistor)
      |_|
       |      +---| Vout
   +---| Vout  |   |
   |   |       |   o----- Op-Amp Output
   |   / \     |   / \
Vin o--|-  \    |  |-  \
      |    >----o--| +  \
      +--| +     |     >------
         |-------|     |-------|
         |       |     |       |
         o-------+-----o-------+------ Ref (e.g., 0V)
         |
        -Vee (or Ground)

    Note: R2 is connected from the non-inverting input to the reference voltage.
    The feedback resistor R1 connects the output back to the non-inverting input.
```

**4.3 Operation of a Schmitt Trigger:**

Let's assume the reference voltage $V_{ref} = 0V$.

*   **Initial State:** Assume the output is at $-V_{sat}$. The voltage at the non-inverting input ($V^+$) is determined by the voltage divider formed by $R_{in}$ (connected to $V_{in}$) and $R_1$ (connected to $V_{out}$), and the reference resistor $R_2$ connected to $0V$.
*   **Switching from Low to High:**
    *   As $V_{in}$ increases, $V^+$ increases.
    *   The output switches from $-V_{sat}$ to $+V_{sat}$ when $V_{in}$ reaches the **Upper Threshold Point (UTP)**.
    *   At UTP, the voltage at the non-inverting input becomes positive enough to cause the switch.
    *   The UTP is calculated when the output is at $-V_{sat}$.
        $V_{UTP} = \frac{R_2}{R_1 + R_2} V_{ref} + \frac{R_1}{R_1 + R_2} (-V_{sat})$
        If $V_{ref} = 0V$, then $V_{UTP} = \frac{R_1}{R_1 + R_2} (-V_{sat})$. This seems counterintuitive as UTP should be positive. Let's re-evaluate the circuit.

    **Corrected Circuit Diagram and Analysis:**

    A common Schmitt trigger uses positive feedback to the non-inverting input.

    ```
          +Vcc
           |
           _
          | | R1 (feedback)
          |_|
           |
    Vin o--/\/\/--+------ Op-Amp Output
                  |   / \
                  +--| +
                     |
                     |
                 +---| -
                 |   / \
     Vref o------/\/\/-----
                 |   |
                R2   Ground/ -Vee

    ```
    In this configuration:
    *   The non-inverting input $V^+$ is connected to $V_{ref}$ through $R_2$.
    *   A portion of the output voltage is fed back to $V^+$ through $R_1$.

    **Let's assume the input is connected to the non-inverting input and the reference to the inverting input for simpler explanation of general comparator idea, then we'll refine to a common Schmitt trigger implementation.**

    **Standard Schmitt Trigger Implementation (Input to Non-Inverting Terminal):**

    ```
          +Vcc
           |
           _
          | | R1 (feedback)
          |_|
           |
    Vin o--/\/\/--+------ Op-Amp Output
                  |   / \
                  +--| +
                     |
                     |
                 +---| -
                 |   / \
     Vref o------/\/\/-----
                 |   |
                R2   Ground/ -Vee
    ```

    *   **When $V_{out} = +V_{sat}$:**
        The voltage at the non-inverting input ($V^+$) is a weighted average of $V_{in}$ and $V_{sat}$.
        $V^+ = V_{in} \frac{R_2}{R_1+R_2} + V_{sat} \frac{R_1}{R_1+R_2}$
        The op-amp will switch to $-V_{sat}$ when $V^+$ (at non-inverting input) is less than $V^-$ (at inverting input, which is $V_{ref}$ in this case, or derived from a voltage divider).

    Let's consider a common implementation where $V_{in}$ is applied to the non-inverting input, and a reference voltage $V_{ref}$ is applied to the inverting input, with positive feedback from the output to the non-inverting input.

    **Common Schmitt Trigger Circuit:**

    ```
               +Vcc
                |
                _
               | | R1 (feedback)
               |_|
                |
       Vin o----+------ Op-Amp Output
                |   / \
                +--| +
                   |
                   |
               +---| -
               |   / \
    Vref o-----+--/\/\/-----
               |      R2
               |
              -Vee (or Ground)
    ```
    Here, $V_{ref}$ is connected to the inverting input, and $V_{in}$ is applied to the non-inverting input, with feedback from output to non-inverting input.

    *   **When the output is HIGH ($+V_{sat}$):**
        The voltage at the non-inverting input ($V^+$) is determined by the voltage divider action of $R_1$ and $R_2$ fed by $V_{in}$ and $V_{sat}$:
        $V^+ = \frac{R_2}{R_1 + R_2} V_{in} + \frac{R_1}{R_1 + R_2} V_{sat}$
        The circuit switches to the LOW state when $V^+$ drops below $V_{ref}$ (inverting input).
        So, switching occurs when:
        $\frac{R_2}{R_1 + R_2} V_{in} + \frac{R_1}{R_1 + R_2} V_{sat} < V_{ref}$
        This implies $V_{in}$ must decrease to a certain level. Let's find the threshold when $V_{in}$ is *at* the threshold and $V_{out}$ is $+V_{sat}$.
        $V_{UTP} = \frac{R_1 + R_2}{R_2} V_{ref} - \frac{R_1}{R_2} V_{sat}$ (This is incorrect, it should be derived from the current)

    Let's use nodal analysis at the non-inverting input ($V^+$):
    $\frac{V_{in} - V^+}{R_1} + \frac{V_{out} - V^+}{R_2} = 0$
    $V_{in} R_2 + V_{out} R_1 = V^+ (R_1 + R_2)$
    $V^+ = \frac{R_2 V_{in} + R_1 V_{out}}{R_1 + R_2}$

    *   **Switching from HIGH to LOW:**
        The output is HIGH ($V_{out} = +V_{sat}$). Switching occurs when $V^+$ becomes less than $V_{ref}$ (assuming $V_{ref}$ is at the inverting input).
        Let's consider the moment of switching. At this point, $V^+ \approx V_{ref}$.
        $\frac{R_2 V_{in} + R_1 (+V_{sat})}{R_1 + R_2} = V_{ref}$
        $R_2 V_{in} + R_1 V_{sat} = V_{ref} (R_1 + R_2)$
        $R_2 V_{in} = V_{ref} (R_1 + R_2) - R_1 V_{sat}$
        $V_{in} = \frac{R_1 + R_2}{R_2} V_{ref} - \frac{R_1}{R_2} V_{sat}$
        This threshold is called the **Lower Threshold Point (LTP)** because the input needs to drop to this level to trigger the switch from HIGH to LOW.

    *   **Switching from LOW to HIGH:**
        The output is LOW ($V_{out} = -V_{sat}$). Switching occurs when $V^+$ becomes greater than $V_{ref}$.
        Let's consider the moment of switching. At this point, $V^+ \approx V_{ref}$.
        $\frac{R_2 V_{in} + R_1 (-V_{sat})}{R_1 + R_2} = V_{ref}$
        $R_2 V_{in} - R_1 V_{sat} = V_{ref} (R_1 + R_2)$
        $R_2 V_{in} = V_{ref} (R_1 + R_2) + R_1 V_{sat}$
        $V_{in} = \frac{R_1 + R_2}{R_2} V_{ref} + \frac{R_1}{R_2} V_{sat}$
        This threshold is called the **Upper Threshold Point (UTP)** because the input needs to rise to this level to trigger the switch from LOW to HIGH.

    **Hysteresis Voltage ($V_H$):**
    $V_H = UTP - LTP = \left( \frac{R_1 + R_2}{R_2} V_{ref} + \frac{R_1}{R_2} V_{sat} \right) - \left( \frac{R_1 + R_2}{R_2} V_{ref} - \frac{R_1}{R_2} V_{sat} \right)$
    $V_H = \frac{2 R_1}{R_2} V_{sat}$

    **Important Points to Remember about Schmitt Trigger:**
    *   The UTP is always higher than the LTP.
    *   The difference between UTP and LTP is the hysteresis voltage.
    *   The ratio $R_1/R_2$ determines the amount of hysteresis. A larger ratio leads to larger hysteresis.
    *   The midpoint of the hysteresis levels is approximately $V_{ref}$.
    *   Schmitt triggers are essential for converting noisy or slow-rising/falling signals into clean square waves.

**Example:** Design a Schmitt trigger with $V_{ref} = 0V$, $V_{sat} = \pm 12V$. Let $R_1 = 10k\Omega$, $R_2 = 10k\Omega$.
*   $V_{UTP} = \frac{10k+10k}{10k} (0V) + \frac{10k}{10k} (12V) = 0 + 12V = +12V$
*   $V_{LTP} = \frac{10k+10k}{10k} (0V) - \frac{10k}{10k} (12V) = 0 - 12V = -12V$
*   $V_H = 12V - (-12V) = 24V$ (or $2 \times 12V = 24V$ using the formula if $V_{ref}=0$)

If a sine wave of amplitude 15V is applied:
*   When $V_{in}$ rises from -15V to +12V, the output remains LOW.
*   When $V_{in}$ crosses +12V, the output switches to HIGH.
*   When $V_{in}$ falls from +15V to -12V, the output remains HIGH.
*   When $V_{in}$ crosses -12V, the output switches to LOW.

**Reference:**
*   *Fundamentals of Analog Circuits* by Floyd T.L. (Pearson Education) provides excellent diagrams and explanations of Schmitt trigger operation and design.
*   *Op-Amps and Linear Integrated Circuits* by Gayakward R. A. (PHI Learning Pvt. Ltd.) offers detailed mathematical derivations for threshold levels.
*   *Electronic devices and Circuit Theory* by Boylestad R. L. and L. Nashelsky (Pearson Education) also covers comparator circuits and their applications.

---

### 5. Applications of Comparators

**Key Concept:** Comparators have a wide range of applications in signal processing and control systems due to their ability to detect voltage levels and convert analog signals to digital-like outputs.

**5.1 Common Applications:**

*   **Zero Crossing Detectors:** For AC to DC conversion, frequency counters, and phase detectors.
*   **Voltage Level Detectors:** To indicate when a signal exceeds or falls below a specific voltage threshold, e.g., battery level indicators, over/under voltage protection circuits.
*   **Schmitt Triggers:**
    *   **Signal Conditioning:** Converting noisy or distorted waveforms into clean square waves. This is crucial for digital interfaces and microcontrollers.
    *   **Oscillators:** Implementing relaxation oscillators (like the astable multivibrator using an op-amp).
    *   **Pulse Generation:** Creating specific pulse widths.
*   **Window Detectors:** A combination of two voltage level detectors to detect if a voltage falls within a specific range (window). This requires two reference voltages and can be implemented using two comparators or one dual-comparator IC.
*   **Analog-to-Digital Converters (ADCs):** Comparators are fundamental building blocks in many ADC architectures, such as flash converters.

**Reference:**
*   *Op-Amps and Linear Integrated Circuits* by Gayakward R. A. (PHI Learning Pvt. Ltd.) covers various applications in detail.
*   *Fundamentals of Analog Circuits* by Floyd T.L. (Pearson Education) also discusses practical applications.

---

### Practice Questions and Exercises

**Question 1 (Zero Crossing Detector):**
A sine wave with a peak voltage of 10V is applied to the non-inverting input of an op-amp configured as a zero crossing detector (0V at the inverting input). Assuming an op-amp with saturation voltages of $\pm 13V$, what will be the output waveform when the input sine wave is $V_{in}(t) = 10 \sin(2\pi f t)$?

**Answer 1:**
The output will be a square wave.
When $V_{in}(t) > 0$ (i.e., $10 \sin(2\pi f t) > 0$), the non-inverting input is positive, and the output will saturate at $+V_{sat} = +13V$.
When $V_{in}(t) < 0$ (i.e., $10 \sin(2\pi f t) < 0$), the inverting input is effectively higher, and the output will saturate at $-V_{sat} = -13V$.
The output will switch polarity precisely at the points where $V_{in}(t) = 0$.

**Question 2 (Voltage Level Detector):**
Design a voltage level detector circuit using an op-amp that outputs a HIGH signal when an input voltage ($V_{in}$) exceeds 5V and a LOW signal otherwise. Assume the op-amp has supply rails of +12V and -12V. You can use a voltage divider to set the reference voltage.

**Answer 2:**
1.  **Op-amp configuration:** Use the op-amp as a non-inverting comparator with the input signal $V_{in}$ connected to the non-inverting input.
2.  **Reference voltage:** Set the inverting input to a reference voltage $V_{ref} = 5V$. This can be achieved using a voltage divider. For example, a 10k$\Omega$ resistor from +12V to the inverting input, and another 10k$\Omega$ resistor from the inverting input to ground. This would provide $V_{ref} = \frac{10k}{10k+10k} \times 12V = 6V$. To get exactly 5V, you would need to adjust the resistor values or use a Zener diode reference. A simple voltage divider using two resistors $R_A$ and $R_B$ such that $V_{ref} = \frac{R_B}{R_A+R_B} V_{supply}$ or a more stable reference using a Zener diode would be appropriate.
3.  **Operation:**
    *   When $V_{in} > 5V$, the non-inverting input is greater than the inverting input, so $V_{out}$ will be $+V_{sat}$ (close to +12V).
    *   When $V_{in} < 5V$, the non-inverting input is less than the inverting input, so $V_{out}$ will be $-V_{sat}$ (close to -12V).
    *   If the op-amp needs to output a HIGH signal (e.g., +5V logic level), a voltage divider or a Zener diode clamping circuit at the output might be needed, or a comparator IC designed for logic levels. For this question, assuming "HIGH" means positive saturation.

**Question 3 (Schmitt Trigger):**
For the Schmitt trigger circuit shown below, with $V_{ref} = 0V$, $V_{sat} = \pm 13V$, $R_1 = 20k\Omega$, and $R_2 = 10k\Omega$. Calculate the UTP and LTP. If a sinusoidal input voltage of amplitude 20V is applied, what will be the output waveform?

```
               +Vcc
                |
                _
               | | R1 (feedback)
               |_|
                |
       Vin o----+------ Op-Amp Output
                |   / \
                +--| +
                   |
                   |
               +---| -
               |   / \
    Vref o-----+--/\/\/-----
               |      R2
               |
              -Vee (or Ground)
```

**Answer 3:**
Using the formulas derived:
*   $V_{UTP} = \frac{R_1 + R_2}{R_2} V_{ref} + \frac{R_1}{R_2} V_{sat}$
*   $V_{LTP} = \frac{R_1 + R_2}{R_2} V_{ref} - \frac{R_1}{R_2} V_{sat}$

Given: $V_{ref} = 0V$, $V_{sat} = 13V$, $R_1 = 20k\Omega$, $R_2 = 10k\Omega$.

*   $V_{UTP} = \frac{20k + 10k}{10k} (0V) + \frac{20k}{10k} (13V) = 0 + 2 \times 13V = +26V$
*   $V_{LTP} = \frac{20k + 10k}{10k} (0V) - \frac{20k}{10k} (13V) = 0 - 2 \times 13V = -26V$

**Hysteresis Voltage ($V_H$):**
$V_H = UTP - LTP = 26V - (-26V) = 52V$.
Alternatively, $V_H = \frac{2 R_1}{R_2} V_{sat} = \frac{2 \times 20k}{10k} \times 13V = 4 \times 13V = 52V$.

**Output Waveform for $V_{in}(t) = 20 \sin(2\pi f t)$:**
The input voltage $V_{in}$ ranges from -20V to +20V.
*   When $V_{in}$ is rising from -20V, the output remains LOW (at $-V_{sat} = -13V$) because $V_{in}$ does not reach the UTP of +26V.
*   When $V_{in}$ reaches its peak of +20V and starts falling, the output remains HIGH (at $+V_{sat} = +13V$) because $V_{in}$ does not drop below the LTP of -26V.
*   The input voltage only swings between -20V and +20V. Since both these limits are within the hysteresis range (-26V to +26V), the output will **never switch**. It will remain stuck at either $+V_{sat}$ or $-V_{sat}$ depending on its initial state.

**Correction/Clarification:** The scenario described above implies the input signal is entirely within the hysteresis band. For a practical input signal that *crosses* the thresholds:
If $V_{in}$ starts at 0V and rises:
*   When $V_{in}$ crosses UTP (+26V), the output switches from LOW to HIGH.
*   When $V_{in}$ falls and crosses LTP (-26V), the output switches from HIGH to LOW.

In this specific case with a 20V amplitude sine wave, the input voltage never reaches +26V or drops below -26V. Therefore, if the circuit starts with the output HIGH, it will stay HIGH. If it starts LOW, it will stay LOW. This indicates that a 20V amplitude input is insufficient to trigger switching in this specific Schmitt trigger configuration. The input needs to reach at least +26V for the first switch and drop to -26V for the second switch.

**Let's consider a different input for better demonstration:** $V_{in}(t) = 30 \sin(2\pi f t)$.
*   When $V_{in}$ rises from -30V, it will cross the LTP (-26V) at some point, causing the output to switch from HIGH to LOW.
*   As $V_{in}$ continues to rise and reaches +30V, it does not cross the UTP (+26V) while rising from a low state to a high state.
*   As $V_{in}$ falls from +30V, it will cross the UTP (+26V) while falling from a high state, causing the output to switch from LOW to HIGH.
*   As $V_{in}$ continues to fall to -30V, it does not cross the LTP (-26V).

This demonstrates the hysteresis. The output will be a square wave, but its transitions will occur at different input voltage levels depending on the direction of the input voltage change.

---

### Important Points to Remember:

*   **Op-amp saturation:** Op-amps used as comparators operate in their saturation regions.
*   **Noise Immunity:** Schmitt triggers provide crucial noise immunity by introducing hysteresis.
*   **Hysteresis:** The difference between the upper and lower threshold points in a Schmitt trigger.
*   **Positive Feedback:** The key element for creating hysteresis in a Schmitt trigger circuit.
*   **Applications:** Comparators are used in signal conditioning, level detection, oscillators, and ADCs.
*   **Slew Rate:** For fast-changing signals, the slew rate of the op-amp affects the accuracy and speed of the comparator's response.

---

### Course Outcome Alignment:

*   **CO3: Design and develop various OPAMP application circuits. (Knowledge Level: K3)**
    *   This entire topic directly addresses CO3. We have designed and analyzed zero crossing detectors, voltage level detectors, and Schmitt triggers, all of which are op-amp application circuits. The calculation of threshold levels and hysteresis voltage for the Schmitt trigger exemplifies the design aspect.

---
