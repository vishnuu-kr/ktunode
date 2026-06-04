---
title: "Timer555 IC : Internal diagram of 555 IC– Astable and Monostable multi-vibrators using 555 IC"
subject: "ANALOG ELECTRONICS"
module: "Module 4: Active Filters  – Butterworth, Chebyshev and Bessel Filters, Low pass filter – high pass filter "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b6b"
status: "completed"
scrapedAt: "2026-05-23T16:11:00.585Z"
---
# ANALOG ELECTRONICS: Module 4 - Active Filters & Timer ICs

## Topic: Timer 555 IC: Internal Diagram, Astable and Monostable Multivibrators

This topic focuses on the versatile 555 Timer IC, a fundamental building block in many electronic circuits. We will explore its internal architecture and its applications in creating timing circuits like astable and monostable multivibrators. While the module title mentions active filters, this specific topic delves into timer ICs, which are distinct but often used in conjunction with filter designs for generating specific frequencies or timing signals.

---

### Learning Outcomes:

*   **Understand the internal architecture of the 555 Timer IC:** Gain a detailed understanding of the functional blocks and their interconnections within the 555 Timer.
*   **Explain the operation of the 555 Timer in Astable Mode:** Learn how to configure the 555 Timer to produce a continuous stream of rectangular pulses (oscillation).
*   **Explain the operation of the 555 Timer in Monostable Mode:** Learn how to configure the 555 Timer to produce a single output pulse of a predetermined duration in response to a trigger input.
*   **Design and analyze astable multivibrator circuits using the 555 Timer:** Apply the knowledge of astable operation to calculate and select components for desired frequencies and duty cycles.
*   **Design and analyze monostable multivibrator circuits using the 555 Timer:** Apply the knowledge of monostable operation to calculate and select components for desired pulse widths.

---

### Introduction to the 555 Timer IC

The 555 timer is an integrated circuit used in a variety of timer applications. Its low cost, ease of use, and versatility have made it one of the most popular ICs ever produced. It can operate in three distinct modes: monostable, astable, and bistable.

**Key Concept:** The 555 timer IC is a highly stable device for generating accurate time delays or oscillations. Its operation relies on the comparison of input voltages with precisely set voltage levels by internal comparators.

---

### Internal Diagram of the 555 Timer IC

The 555 timer IC is a complex circuit that can be broken down into several functional blocks. Understanding these blocks is crucial for grasping its operation.

**(Refer to your textbooks for detailed internal schematics. Key components and their functions are outlined below):**

*   **Voltage Divider Network:**
    *   Consists of three identical resistors (typically 5kΩ each, hence the name "555").
    *   Divides the supply voltage (Vcc) into three equal parts: 2/3 Vcc, 1/2 Vcc, and 1/3 Vcc.
    *   These voltage levels serve as reference voltages for the comparators.
    *   *Textbook Reference:* Paynter, Chapter on Linear ICs; Boylestad & Nashelsky, Chapter on IC Timer Circuits.

*   **Two Comparators:**
    *   **Upper Comparator:** Compares the input voltage at the **Threshold (THRES)** pin (pin 6) with the 2/3 Vcc reference voltage.
        *   If THRES > 2/3 Vcc, the output of the upper comparator goes low.
    *   **Lower Comparator:** Compares the input voltage at the **Trigger (TRIG)** pin (pin 2) with the 1/3 Vcc reference voltage.
        *   If TRIG < 1/3 Vcc, the output of the lower comparator goes high.

*   **Flip-Flop (SR Latch):**
    *   A bistable multivibrator that receives inputs from both comparators.
    *   Its output determines the state of the internal discharge transistor and the output pin.
    *   The flip-flop is set (Q=high, $\overline{Q}$=low) by the lower comparator output going high (triggering).
    *   The flip-flop is reset (Q=low, $\overline{Q}$=high) by the upper comparator output going low (threshold reached).

*   **Discharge Transistor (NPN):**
    *   Connected to the **Discharge (DISCH)** pin (pin 7).
    *   When the flip-flop's Q output is low ($\overline{Q}$ is high), the discharge transistor is OFF, and pin 7 is effectively open-circuited, allowing external capacitors to charge.
    *   When the flip-flop's Q output is high (Q is high, $\overline{Q}$ is low), the discharge transistor is ON, and pin 7 is connected to ground, discharging any external capacitor.

*   **Output Stage:**
    *   Driven by the flip-flop's Q output.
    *   When Q is high, the output (pin 3) is high (close to Vcc).
    *   When Q is low, the output (pin 3) is low (close to 0V or ground).
    *   The output can sink or source current.

*   **Control Voltage (CONT) Pin (pin 5):**
    *   Allows external modification of the upper comparator's threshold voltage (normally 2/3 Vcc).
    *   Typically connected to a small capacitor (0.01µF to 0.1µF) to ground for noise filtering and stability. This capacitor bypasses any AC noise from the voltage divider to ground.

**Pin Configuration (Standard 8-pin DIP Package):**

| Pin Number | Pin Name     | Description                                                    |
| :--------- | :----------- | :------------------------------------------------------------- |
| 1          | GND          | Ground (0V)                                                    |
| 2          | TRIG         | Trigger input. A negative-going pulse below 1/3 Vcc resets the flip-flop. |
| 3          | OUT          | Output. Can be high or low.                                    |
| 4          | RESET        | Active-low reset input. If pulled below 0.4V, resets the timer. |
| 5          | CONT         | Control voltage input. Affects the threshold voltage (usually bypassed). |
| 6          | THRES        | Threshold input. If voltage exceeds 2/3 Vcc, resets the flip-flop. |
| 7          | DISCH        | Discharge output. Connects to ground when the output is high. |
| 8          | Vcc          | Positive power supply (typically 4.5V to 15V).                 |

**Important Point to Remember:** The operation of the 555 timer is fundamentally controlled by the voltage levels at the TRIG and THRES pins relative to the internal 1/3 Vcc and 2/3 Vcc reference voltages.

---

### Mode 1: Monostable Multivibrator (One-Shot Timer)

In monostable mode, the 555 timer produces a single output pulse of a fixed duration when it receives a trigger pulse. After the pulse is generated, the circuit returns to its stable state and waits for the next trigger.

**Circuit Configuration:**

*   Connect Vcc (pin 8) and GND (pin 1).
*   Connect RESET (pin 4) to Vcc to prevent accidental resets.
*   Connect THRES (pin 6) and TRIG (pin 2) together.
*   Connect a timing resistor (R) between Vcc and pins 2 & 6.
*   Connect a timing capacitor (C) between pins 2 & 6 and GND.
*   Connect the output (pin 3) to the desired load.
*   Connect CONT (pin 5) to GND via a small capacitor (typically 0.01µF) for noise immunity.

**Operation:**

1.  **Stable State:** In its stable state, the output (pin 3) is LOW. The discharge transistor (pin 7) is ON, keeping the capacitor C discharged. The voltage across C is approximately 0V.
2.  **Triggering:** When a negative-going trigger pulse (less than 1/3 Vcc) is applied to pin 2, the lower comparator output goes HIGH, and the flip-flop is set. This causes:
    *   The output (pin 3) to go HIGH.
    *   The discharge transistor (pin 7) to turn OFF.
3.  **Timing Interval:** With the discharge transistor OFF, the timing capacitor C begins to charge through resistor R towards Vcc. The voltage across C ($V_C$) follows the equation:
    $V_C(t) = V_{CC} \times (1 - e^{-t/RC})$
4.  **Pulse Termination:** When the voltage across capacitor C reaches 2/3 Vcc, the upper comparator output goes LOW. This resets the flip-flop, causing:
    *   The output (pin 3) to return to LOW.
    *   The discharge transistor (pin 7) to turn ON, rapidly discharging capacitor C.
5.  **Return to Stable State:** The circuit is now back in its stable state, ready for the next trigger.

**Pulse Width Calculation:**

The duration of the output pulse ($T$) is determined by the time it takes for the capacitor to charge from 0V to 2/3 Vcc. This is given by:

$T = 1.1 \times R \times C$

Where:
*   $T$ is the pulse width in seconds.
*   $R$ is the timing resistance in Ohms.
*   $C$ is the timing capacitance in Farads.

**Design Example:** Design a monostable multivibrator using a 555 timer to produce an output pulse of 100 ms.

*   Let's choose a capacitor $C = 1 \mu F$.
*   We need to find $R$.
*   $100 ms = 1.1 \times R \times 1 \mu F$
*   $0.1 s = 1.1 \times R \times 1 \times 10^{-6} s$
*   $R = \frac{0.1}{1.1 \times 10^{-6}} \approx 90.9 k\Omega$

A standard resistor value close to this is 91kΩ.

**Important Points to Remember for Monostable Mode:**

*   The output pulse width is directly proportional to R and C.
*   The trigger input requires a negative-going pulse.
*   The RESET pin (pin 4) must be held HIGH (connected to Vcc) for normal operation.
*   The CONT pin (pin 5) should be bypassed with a small capacitor (0.01µF) to ground.

---

### Mode 2: Astable Multivibrator (Free-Running Oscillator)

In astable mode, the 555 timer acts as a free-running oscillator, producing a continuous stream of rectangular pulses at the output without any external trigger.

**Circuit Configuration:**

*   Connect Vcc (pin 8) and GND (pin 1).
*   Connect RESET (pin 4) to Vcc.
*   Connect THRES (pin 6) and TRIG (pin 2) together.
*   Connect resistor R1 between Vcc and pin 7.
*   Connect resistor R2 between pin 7 and pins 2 & 6.
*   Connect capacitor C between pins 2 & 6 and GND.
*   Connect the output (pin 3) to the desired load.
*   Connect CONT (pin 5) to GND via a small capacitor (0.01µF).

**Operation:**

1.  **Initial State:** Assume the capacitor C is discharged (0V). The voltage at TRIG (pin 2) is 0V. Since TRIG < 1/3 Vcc, the lower comparator output is HIGH, setting the flip-flop. This makes the output (pin 3) HIGH and turns the discharge transistor (pin 7) OFF.
2.  **Charging Phase:** With the discharge transistor OFF, capacitor C begins to charge towards Vcc through resistors R1 and R2. The voltage across C ($V_C$) increases exponentially.
    $V_C(t) = V_{CC} \times (1 - e^{-(t/(\text{R1}+\text{R2}))C})$
3.  **Threshold Reached:** When the voltage across C reaches 2/3 Vcc, the upper comparator output goes LOW. This resets the flip-flop, causing:
    *   The output (pin 3) to go LOW.
    *   The discharge transistor (pin 7) to turn ON, connecting pin 7 to ground.
4.  **Discharging Phase:** With the discharge transistor ON, capacitor C rapidly discharges through resistor R2 towards ground. The voltage across C ($V_C$) decreases exponentially.
    $V_C(t) = (2/3 V_{CC}) \times e^{-(t/\text{R2}C)}$ (starting from 2/3 Vcc)
5.  **Trigger Condition Met:** When the voltage across C drops below 1/3 Vcc, the lower comparator output goes HIGH again. This sets the flip-flop, returning the circuit to the state described in step 1.
6.  **Continuous Oscillation:** The cycle of charging and discharging repeats, resulting in a continuous rectangular waveform at the output.

**Frequency and Duty Cycle Calculation:**

*   **Time High ($T_{high}$):** The time the output is HIGH, during which capacitor C charges through R1 and R2.
    $T_{high} = 0.693 \times (R1 + R2) \times C$
*   **Time Low ($T_{low}$):** The time the output is LOW, during which capacitor C discharges through R2.
    $T_{low} = 0.693 \times R2 \times C$
*   **Time Period ($T$):** The total time for one cycle.
    $T = T_{high} + T_{low} = 0.693 \times (R1 + 2 \times R2) \times C$
*   **Frequency ($f$):** The reciprocal of the period.
    $f = \frac{1}{T} = \frac{1}{0.693 \times (R1 + 2 \times R2) \times C} \approx \frac{1.44}{(R1 + 2 \times R2) \times C}$
*   **Duty Cycle ($D$):** The ratio of the time the output is HIGH to the total period.
    $D = \frac{T_{high}}{T} \times 100\% = \frac{R1 + R2}{R1 + 2 \times R2} \times 100\%$

**Important Observation:** In the standard astable configuration, the duty cycle will always be greater than 50% because the charging path (R1+R2) is always longer than the discharging path (R2).

**To achieve a duty cycle of 50%:** A common modification is to use a diode (e.g., 1N4148) in parallel with R2, with the anode connected to pin 7 and the cathode connected to the junction of R2 and the capacitor. This allows the capacitor to charge through R1 and the diode, and discharge through R2. In this case:
    *   $T_{high} \approx 0.693 \times R1 \times C$
    *   $T_{low} \approx 0.693 \times R2 \times C$
    *   To get 50% duty cycle, R1 = R2.

**Design Example:** Design an astable multivibrator using a 555 timer to produce a square wave with a frequency of 1 kHz and approximately 50% duty cycle.

*   Let $C = 0.1 \mu F$.
*   We need $R1$ and $R2$.
*   For 50% duty cycle, we'll use the diode modification, so $R1 = R2$.
*   $f = 1 kHz = 1000 Hz$
*   $T = 1/f = 1 ms = 0.001 s$
*   $T_{high} = T_{low} = T/2 = 0.5 ms = 0.0005 s$

Using $T_{high} = 0.693 \times R1 \times C$:
*   $0.0005 s = 0.693 \times R1 \times 0.1 \times 10^{-6} s$
*   $R1 = \frac{0.0005}{0.693 \times 0.1 \times 10^{-6}} \approx 7.2 k\Omega$

Since $R1 = R2$ for a 50% duty cycle, $R2 \approx 7.2 k\Omega$.
Standard values like 7.5kΩ would be suitable for both R1 and R2.

**Important Points to Remember for Astable Mode:**

*   The frequency and duty cycle are determined by R1, R2, and C.
*   The output waveform is a continuous rectangular wave.
*   RESET pin (pin 4) must be tied to Vcc.
*   CONT pin (pin 5) should be bypassed with a capacitor.

---

### Relation to Course Outcomes

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3)**
    *   While this topic doesn't directly cover BJT/FET amplifiers, the understanding of electronic components and their behavior is foundational. The 555 timer itself contains internal transistors and comparators, which are fundamental building blocks.
*   **CO2: Design Oscillator circuits (Knowledge Level: K3)**
    *   The astable multivibrator configuration of the 555 timer is a prime example of an oscillator circuit. This topic directly addresses the design and analysis of such oscillators.
*   **CO3: Design and develop various OPAMP application circuits. (Knowledge Level: K3)**
    *   Similar to CO1, understanding the 555 timer, which relies on internal comparators, builds a foundation for understanding more complex ICs like operational amplifiers.
*   **CO4: Implementation of active filters (Knowledge Level: K4)**
    *   The 555 timer, particularly in astable mode, can be used to generate clock signals or carrier frequencies for modulating signals in filter applications. For example, it can generate a square wave that is then filtered to create specific frequencies or pulse shapes. This topic provides the signal generation capability for advanced filter designs.
*   **CO5: Implement an electronic hardware circuit for the solution of a real time problem (Knowledge Level: K4)**
    *   Both monostable (e.g., delay timers, one-shot triggers) and astable (e.g., blinking LEDs, audio tone generators, frequency synthesis) modes of the 555 timer are directly applicable to real-time problem-solving in electronics. This topic equips students with the skills to implement such circuits.

---

### Practice Questions and Exercises

1.  **Identify the primary function of each of the following pins on the 555 Timer IC:**
    *   Pin 2 (TRIG)
    *   Pin 3 (OUT)
    *   Pin 6 (THRES)
    *   Pin 7 (DISCH)

    **Answer:**
    *   Pin 2 (TRIG): Trigger input, initiating the timing cycle when voltage drops below 1/3 Vcc.
    *   Pin 3 (OUT): Output pin, provides the timing pulse.
    *   Pin 6 (THRES): Threshold input, ends the timing cycle when voltage exceeds 2/3 Vcc.
    *   Pin 7 (DISCH): Discharge pin, connects to ground to discharge the timing capacitor when the output is HIGH.

2.  **In a monostable multivibrator circuit using a 555 timer, what is the relationship between the output pulse width ($T$) and the timing components $R$ and $C$?**

    **Answer:** The output pulse width is directly proportional to the product of the timing resistance ($R$) and capacitance ($C$), given by the formula $T = 1.1 \times R \times C$.

3.  **For an astable multivibrator with $R1 = 10k\Omega$, $R2 = 47k\Omega$, and $C = 0.1\mu F$, calculate:**
    *   $T_{high}$
    *   $T_{low}$
    *   $T$
    *   $f$
    *   Duty Cycle

    **Answer:**
    *   $T_{high} = 0.693 \times (10k\Omega + 47k\Omega) \times 0.1\mu F = 0.693 \times 57 \times 10^3 \times 0.1 \times 10^{-6} \approx 3.95 ms$
    *   $T_{low} = 0.693 \times 47k\Omega \times 0.1\mu F = 0.693 \times 47 \times 10^3 \times 0.1 \times 10^{-6} \approx 3.26 ms$
    *   $T = T_{high} + T_{low} \approx 3.95 ms + 3.26 ms \approx 7.21 ms$
    *   $f = 1/T \approx 1 / 7.21 ms \approx 138.7 Hz$
    *   Duty Cycle $= \frac{T_{high}}{T} \times 100\% = \frac{3.95 ms}{7.21 ms} \times 100\% \approx 54.8\%$

4.  **Explain why the duty cycle in the standard astable configuration of the 555 timer is always greater than 50%.**

    **Answer:** The duty cycle is greater than 50% because the capacitor charges through a larger resistance ($R1 + R2$) than it discharges through ($R2$). Therefore, the charging time ($T_{high}$) is longer than the discharging time ($T_{low}$).

5.  **Design a 555 timer circuit to create a blinking LED at approximately 2 Hz. The LED is connected to the output, and the duty cycle should be around 50%.**

    **Solution Outline:**
    *   Use astable mode.
    *   For ~50% duty cycle, use the diode modification with $R1 \approx R2$.
    *   Frequency $f = 2 Hz$.
    *   Period $T = 1/f = 0.5 s$.
    *   $T_{high} \approx T_{low} \approx T/2 = 0.25 s$.
    *   Choose a capacitor $C$, e.g., $C = 10 \mu F$.
    *   Calculate $R1$ (and thus $R2$) using $T_{high} = 0.693 \times R1 \times C$.
    *   $0.25 s = 0.693 \times R1 \times 10 \times 10^{-6} s$
    *   $R1 = \frac{0.25}{0.693 \times 10 \times 10^{-6}} \approx 36.1 k\Omega$.
    *   Choose $R1 = R2 \approx 36k\Omega$ or a standard value close to it.

---

### Summary and Key Takeaways

*   The 555 Timer IC is a versatile component with internal blocks including a voltage divider, two comparators, a flip-flop, and a discharge transistor.
*   **Monostable Mode:** Creates a single output pulse of duration $T = 1.1 \times R \times C$ in response to a trigger.
*   **Astable Mode:** Acts as a free-running oscillator producing a continuous waveform.
    *   $T_{high} = 0.693 \times (R1 + R2) \times C$
    *   $T_{low} = 0.693 \times R2 \times C$
    *   $f \approx \frac{1.44}{(R1 + 2 \times R2) \times C}$
    *   Duty Cycle $> 50\%$ in standard configuration.
*   The RESET pin (4) is active-low and should be tied to Vcc for normal operation.
*   The CONTROL pin (5) is typically bypassed with a small capacitor to ground for stability.

---
This comprehensive set of notes covers the internal workings of the 555 Timer IC and its applications in monostable and astable modes, aligning with the learning outcomes and course objectives. Remember to consult your textbooks for detailed diagrams and further examples.
