---
title: "Astable and Monostable circuit using 555IC."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 17: Astable and Monostable circuit using 555IC."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d67"
status: "completed"
scrapedAt: "2026-05-23T16:11:13.972Z"
---
# ANALOG ELECTRONICS LAB: Module 17 - Astable and Monostable Circuits using 555 IC

## 1. Introduction to the 555 Timer IC

The 555 timer IC is a versatile integrated circuit widely used in a variety of timing and oscillation applications. It's a highly stable and inexpensive device that can generate precise time delays or oscillations. This module will focus on two fundamental configurations: the astable (free-running oscillator) and monostable (one-shot pulse generator) circuits.

**Key Concept:** The 555 timer operates by comparing input voltages to internal reference voltages (typically 2/3 Vcc and 1/3 Vcc) using comparators. The output state of the 555 timer is controlled by these comparators and an internal flip-flop.

**Reference:**
*   **Paynter, R. T. (n.d.).** *Introductory Electronic Devices and Circuits*. Pearson Education. (Likely covers basic IC operation and applications.)
*   **Boylestad, R. L., & Nashelsky, L. (n.d.).** *Electronic Devices and Circuit Theory*. Pearson Education. (Provides detailed analysis of semiconductor devices and IC building blocks.)
*   **Neaman, D. A. (n.d.).** *Electronic Circuits: Analysis and Design*. McGraw Hill Companies. (Offers in-depth circuit analysis and design principles.)

**Important Point to Remember:** The 555 timer has 8 pins, each with a specific function. Understanding these pin functions is crucial for designing and implementing the circuits.

### 1.1. Pin Configuration of the 555 Timer IC

| Pin Number | Pin Name | Description                                                                |
| :--------- | :------- | :------------------------------------------------------------------------- |
| 1          | GND      | Ground (0V)                                                                |
| 2          | TRIG     | Trigger Input: A negative-going pulse below 1/3 Vcc triggers the output high. |
| 3          | OUT      | Output: The output of the timer. Can be high or low.                      |
| 4          | RESET    | Reset Input: A low level on this pin resets the output to low.           |
| 5          | CTRL     | Control Voltage Input: Allows external control of the threshold voltage.   |
| 6          | THRES    | Threshold Input: A positive-going voltage above 2/3 Vcc triggers the output low. |
| 7          | DISCH    | Discharge Output: Connects to the collector of an internal NPN transistor. |
| 8          | VCC      | Power Supply Voltage (+4.5V to +16V typical)                               |

**Example:** For a typical 555 timer circuit, Pin 1 is connected to ground, Pin 8 is connected to the positive supply voltage (Vcc).

## 2. Astable Multivibrator Circuit

The astable multivibrator circuit using a 555 timer IC is a free-running oscillator that continuously switches between its two output states (high and low) without any external triggering. It generates a continuous square wave output.

**Key Concept:** In the astable configuration, the 555 timer is configured to oscillate by using its internal comparators and a capacitor that charges and discharges through external resistors.

**Course Outcome Alignment:**
*   **CO4:** Design and implement basic circuits using IC (OPAMP and 555 timers). (Knowledge Level: K3) - This section directly addresses the design and implementation of an astable circuit.

### 2.1. Circuit Diagram and Operation

**Circuit Diagram:**

```
     VCC
      |
     [R1]
      |-------+
      |       |
      C1      +-------+------- Pin 7 (DISCH)
      |       |       |
  Pin 6 (THRES) +       +------- Pin 2 (TRIG)
      |       |
     GND     GND
```

**Operation:**

1.  **Charging Phase:** When the circuit is powered on, the capacitor C1 begins to charge through resistors R1 and R2 towards Vcc.
2.  **Triggering Threshold:** When the voltage across C1 reaches 2/3 Vcc, the upper comparator triggers, causing the internal flip-flop to change state. This makes the output (Pin 3) go low, and the discharge transistor (Pin 7) turns ON.
3.  **Discharging Phase:** The discharge transistor (Pin 7) connects the capacitor C1 to ground. C1 now discharges through resistor R2.
4.  **Resetting Threshold:** When the voltage across C1 drops to 1/3 Vcc, the lower comparator triggers, causing the internal flip-flop to reset. This makes the output (Pin 3) go high, and the discharge transistor (Pin 7) turns OFF.
5.  **Cycle Repeats:** The capacitor C1 begins to charge again through R1 and R2, and the cycle repeats, generating a continuous square wave.

**Important Point to Remember:** The frequency and duty cycle of the output waveform are determined by the values of R1, R2, and C1.

### 2.2. Calculation of Frequency and Duty Cycle

**Charging Time (t_high):** The time during which the output is HIGH is determined by the charging of C1 from 1/3 Vcc to 2/3 Vcc through R1 and R2.
*   Formula: $t_{high} \approx 0.693 \times (R1 + R2) \times C1$

**Discharging Time (t_low):** The time during which the output is LOW is determined by the discharging of C1 from 2/3 Vcc to 1/3 Vcc through R2 only.
*   Formula: $t_{low} \approx 0.693 \times R2 \times C1$

**Total Time Period (T):** The sum of charging and discharging times.
*   Formula: $T = t_{high} + t_{low} \approx 0.693 \times (R1 + 2 \times R2) \times C1$

**Frequency (f):** The reciprocal of the total time period.
*   Formula: $f = 1/T \approx \frac{1}{0.693 \times (R1 + 2 \times R2) \times C1} \approx \frac{1.44}{(R1 + 2 \times R2) \times C1}$

**Duty Cycle:** The ratio of the time the output is HIGH to the total period.
*   Formula: Duty Cycle $(\%) = \frac{t_{high}}{T} \times 100 = \frac{R1 + R2}{R1 + 2 \times R2} \times 100$

**Important Point to Remember:** In a standard astable configuration, the duty cycle is always greater than 50% because the charging time (through R1 + R2) is longer than the discharging time (through R2). To achieve a 50% duty cycle, a modification is required (e.g., using a diode in parallel with R2).

**Reference:**
*   **Paynter, R. T.** (n.d.) likely provides simplified explanations of RC charging/discharging which are fundamental to understanding these calculations.
*   **Boylestad, R. L., & Nashelsky, L.** (n.d.) would offer a more rigorous mathematical derivation of these time constants using differential equations for RC circuits.

### 2.3. Practical Considerations and Design Example

**Choosing Components:**
*   **Capacitor (C1):** Typically electrolytic capacitors are used for larger timing values. Ensure the capacitor's voltage rating is higher than Vcc.
*   **Resistors (R1, R2):** Choose resistor values that provide the desired timing and are not excessively large to avoid noise issues or too small to draw excessive current. Values in the kΩ to MΩ range are common.

**Design Example:** Design an astable multivibrator to produce a square wave with a frequency of approximately 1 kHz and a duty cycle of about 75%.

**Given:**
*   $f = 1000$ Hz
*   Duty Cycle $\approx 75\%$

**Calculations:**
*   Let's assume a capacitor value, say $C1 = 0.1 \mu F = 100 \times 10^{-9}$ F.
*   We need $\frac{R1 + R2}{R1 + 2 \times R2} = 0.75$
    *   $R1 + R2 = 0.75 \times (R1 + 2 \times R2)$
    *   $R1 + R2 = 0.75 R1 + 1.5 R2$
    *   $0.25 R1 = 0.5 R2$
    *   $R1 = 2 \times R2$
*   Now, let's use the frequency formula: $f = \frac{1.44}{(R1 + 2 \times R2) \times C1}$
    *   $1000 = \frac{1.44}{(2 \times R2 + 2 \times R2) \times 100 \times 10^{-9}}$
    *   $1000 = \frac{1.44}{4 \times R2 \times 100 \times 10^{-9}}$
    *   $4000 \times R2 \times 100 \times 10^{-9} = 1.44$
    *   $4 \times R2 \times 10^{-6} = 1.44$
    *   $R2 = \frac{1.44}{4 \times 10^{-6}} = 0.36 \times 10^{6} = 360 \ k\Omega$
*   Now, calculate R1:
    *   $R1 = 2 \times R2 = 2 \times 360 \ k\Omega = 720 \ k\Omega$

**Chosen Components:**
*   $R1 = 750 \ k\Omega$ (Standard value close to 720 kΩ)
*   $R2 = 330 \ k\Omega$ (Standard value close to 360 kΩ - we will recalculate duty cycle with these values)
*   $C1 = 0.1 \mu F$

**Recalculating Duty Cycle and Frequency with standard values:**
*   $t_{high} \approx 0.693 \times (750 \times 10^3 + 330 \times 10^3) \times 0.1 \times 10^{-6} \approx 0.693 \times 1.08 \times 10^6 \times 0.1 \times 10^{-6} \approx 0.748$ seconds
*   $t_{low} \approx 0.693 \times 330 \times 10^3 \times 0.1 \times 10^{-6} \approx 0.693 \times 0.33 \times 10^6 \times 0.1 \times 10^{-6} \approx 0.229$ seconds
*   $T = t_{high} + t_{low} \approx 0.748 + 0.229 = 0.977$ seconds
*   $f = 1/T \approx 1/0.977 \approx 1.02$ kHz
*   Duty Cycle $(\%) = \frac{0.748}{0.977} \times 100 \approx 76.5\%$

This provides a frequency close to 1 kHz and a duty cycle close to 75%.

**Course Outcome Alignment:**
*   **CO2:** Design and develop various electronic circuits. (Knowledge Level: K3) - This example demonstrates the design process.
*   **CO5:** Simulate electronic circuits using any circuit simulation software. (Knowledge Level: K3) - You can verify these calculations by simulating the circuit.

### 2.4. Practice Questions (Astable)

1.  In an astable multivibrator using a 555 timer, if $R1 = 100 \ k\Omega$, $R2 = 220 \ k\Omega$, and $C1 = 0.01 \mu F$, calculate the output frequency and duty cycle.
    *   **Answer:**
        *   $t_{high} \approx 0.693 \times (100 \times 10^3 + 220 \times 10^3) \times 0.01 \times 10^{-6} \approx 2.18 \ ms$
        *   $t_{low} \approx 0.693 \times 220 \times 10^3 \times 0.01 \times 10^{-6} \approx 1.52 \ ms$
        *   $T = t_{high} + t_{low} \approx 2.18 + 1.52 = 3.7 \ ms$
        *   $f = 1/T \approx 1/3.7 \times 10^{-3} \approx 270 \ Hz$
        *   Duty Cycle $(\%) = \frac{2.18}{3.7} \times 100 \approx 58.9\%$

2.  You need to generate a clock signal at 500 Hz with a duty cycle of 50% using a 555 timer in astable mode. What values of R1, R2, and C1 would you choose? (Hint: For a 50% duty cycle, you need to modify the circuit or use specific R/C values. For this question, assume you are aiming for as close to 50% as possible with the standard astable configuration and then briefly mention how to achieve a true 50% duty cycle).
    *   **Answer:** To achieve close to 50% duty cycle in a standard astable circuit, you'd make R2 much larger than R1, or ideally, R1 << R2. However, it will never be exactly 50% due to the charging path ($R1+R2$) vs. discharging path ($R2$).
    *   Let's aim for $f = 500 \ Hz$ and $R1 = 1 \ k\Omega$. We need $R1+R2 \approx R2$.
    *   $T = 1/f = 1/500 = 2 \ ms$
    *   $2 \ ms \approx 0.693 \times (R1 + 2 \times R2) \times C1$
    *   Let's choose $C1 = 0.1 \mu F$.
    *   $2 \times 10^{-3} \approx 0.693 \times (1 \times 10^3 + 2 \times R2) \times 0.1 \times 10^{-6}$
    *   $2 \times 10^{-3} \approx 0.0693 \times (1000 + 2 \times R2)$
    *   $28.86 \approx 1000 + 2 \times R2$
    *   $2 \times R2 \approx 27.86$
    *   $R2 \approx 13.93 \ k\Omega$
    *   So, $R1 = 1 \ k\Omega$, $R2 = 14 \ k\Omega$, $C1 = 0.1 \mu F$ would give a frequency close to 500 Hz with a duty cycle slightly above 50%.
    *   **To achieve a true 50% duty cycle:** A common method is to place a diode (e.g., 1N4148) in parallel with R2. During charging, the diode is reverse-biased, and C1 charges through R1 and the diode. During discharging, the diode is forward-biased, and C1 discharges only through R2. The formulas then become $t_{high} \approx 0.693 \times R1 \times C1$ and $t_{low} \approx 0.693 \times R2 \times C1$. For a 50% duty cycle, R1 = R2.

## 3. Monostable Multivibrator Circuit

The monostable multivibrator, also known as a "one-shot" or "single-shot" circuit, produces a single output pulse of a specific duration in response to a triggering input pulse. Once triggered, the output remains in its temporary state for a predetermined time and then returns to its stable state.

**Key Concept:** The monostable configuration uses the 555 timer to generate a single pulse of a defined width controlled by an external resistor and capacitor. The circuit requires a trigger pulse to initiate the output pulse.

**Course Outcome Alignment:**
*   **CO4:** Design and implement basic circuits using IC (OPAMP and 555 timers). (Knowledge Level: K3) - This section covers the design and implementation of a monostable circuit.

### 3.1. Circuit Diagram and Operation

**Circuit Diagram:**

```
     VCC
      |
     [R1]
      |-------+
      |       |
      C1      +-------+------- Pin 7 (DISCH)
      |       |       |
  Pin 6 (THRES) +-------+------- Pin 2 (TRIG)
      |       |
     GND     GND
```

*(Note: The diagram is identical to the astable, but the input and RESET pins are connected differently.)*

**Connection for Monostable Operation:**
*   **Pin 2 (TRIG):** Connected to the trigger source, which is usually a momentary push-button switch to ground.
*   **Pin 6 (THRES):** Connected to the junction of R1 and C1.
*   **Pin 7 (DISCH):** Connected to the junction of R1 and C1.
*   **Pin 4 (RESET):** Connected to Vcc to prevent accidental resets.
*   **Pin 5 (CTRL):** Typically connected to ground through a small capacitor (e.g., 0.01 $\mu$F) to filter out noise.

**Operation:**

1.  **Stable State:** In the stable state, the output (Pin 3) is LOW, and the discharge transistor (Pin 7) is ON, keeping C1 discharged. The trigger input (Pin 2) is held above 1/3 Vcc (e.g., by a pull-up resistor, or left open if the trigger source is push-to-make to Vcc).
2.  **Triggering:** When a negative-going trigger pulse (falling below 1/3 Vcc) is applied to Pin 2, the lower comparator triggers.
3.  **Unstable State (Pulse Generation):** The internal flip-flop changes state. This makes the output (Pin 3) go HIGH, and the discharge transistor (Pin 7) turns OFF. Capacitor C1 begins to charge from 0V towards Vcc through resistor R1.
4.  **Pulse Termination:** When the voltage across C1 reaches 2/3 Vcc, the upper comparator triggers. This resets the flip-flop, causing the output (Pin 3) to go LOW, and the discharge transistor (Pin 7) turns ON again, quickly discharging C1.
5.  **Return to Stable State:** The circuit returns to its stable state, ready for the next trigger pulse.

**Important Point to Remember:** The duration of the output pulse is determined solely by the values of R1 and C1, and is independent of the trigger pulse's width or amplitude (as long as it's a valid trigger).

### 3.2. Calculation of Output Pulse Width

The duration of the output pulse ($t_{pulse}$ or $t_{high}$) is the time it takes for capacitor C1 to charge from 0V to 2/3 Vcc through resistor R1.

*   **Formula:** $t_{pulse} \approx 1.1 \times R1 \times C1$

**Explanation of 1.1:** This factor comes from the natural logarithm of 2 ($ln(2) \approx 0.693$) which arises from the RC charging equation. The charging is from 0V to 2/3 Vcc, which is a charging to a fraction of $2/3$ of the total voltage swing. The charging equation is $V(t) = V_{final}(1 - e^{-t/RC})$. Here, $V_{final} = Vcc$. We are looking for the time when $V(t) = (2/3)Vcc$.
*   $(2/3)Vcc = Vcc(1 - e^{-t/RC})$
*   $2/3 = 1 - e^{-t/RC}$
*   $e^{-t/RC} = 1 - 2/3 = 1/3$
*   $-t/RC = ln(1/3) = -ln(3)$
*   $t = RC \times ln(3) \approx 1.0986 \times RC \approx 1.1 \times RC$

**Reference:**
*   **Neaman, D. A.** (n.d.) is particularly useful for deriving this time constant from first principles of RC circuits and exponential behavior.

### 3.3. Practical Considerations and Design Example

**Choosing Components:**
*   **Resistor (R1):** This determines the pulse width. Larger values of R1 will result in longer pulse durations. Minimum resistance is typically around 1 kΩ to prevent excessive discharge current through Pin 7.
*   **Capacitor (C1):** Similar to the astable configuration, electrolytic capacitors are used for longer time delays. Ensure the voltage rating is appropriate.
*   **Trigger Input:** The trigger pulse must be a negative-going edge and fall below 1/3 Vcc. A simple push-button to ground is a common way to achieve this.
*   **Reset Pin:** Ensure the RESET pin (Pin 4) is tied to Vcc to prevent unwanted resets.

**Design Example:** Design a monostable multivibrator to produce an output pulse of 10 milliseconds when triggered.

**Given:**
*   $t_{pulse} = 10 \ ms = 10 \times 10^{-3} \ s$

**Calculations:**
*   We need to find R1 and C1 such that $1.1 \times R1 \times C1 = 10 \times 10^{-3}$.
*   Let's choose a capacitor value, say $C1 = 1 \mu F = 1 \times 10^{-6} \ F$.
*   $1.1 \times R1 \times (1 \times 10^{-6}) = 10 \times 10^{-3}$
*   $R1 = \frac{10 \times 10^{-3}}{1.1 \times 1 \times 10^{-6}} = \frac{10^{-2}}{1.1 \times 10^{-6}} = \frac{10^4}{1.1} \approx 9090 \ \Omega$

**Chosen Components:**
*   $R1 = 10 \ k\Omega$ (A standard value close to 9090 Ω)
*   $C1 = 1 \mu F$

**Recalculating Pulse Width with standard values:**
*   $t_{pulse} \approx 1.1 \times 10 \times 10^3 \ \Omega \times 1 \times 10^{-6} \ F = 1.1 \times 10^{-2} \ s = 11 \ ms$

This will provide a pulse width very close to the desired 10 ms.

**Course Outcome Alignment:**
*   **CO2:** Design and develop various electronic circuits. (Knowledge Level: K3) - This example demonstrates the design process.
*   **CO5:** Simulate electronic circuits using any circuit simulation software. (Knowledge Level: K3) - You can verify these calculations by simulating the circuit.

### 3.4. Practice Questions (Monostable)

1.  In a monostable multivibrator, you need to generate an output pulse of 100 ms. If you use a capacitor $C1 = 10 \mu F$, what value of resistor R1 should you use?
    *   **Answer:**
        *   $t_{pulse} \approx 1.1 \times R1 \times C1$
        *   $100 \times 10^{-3} \ s \approx 1.1 \times R1 \times 10 \times 10^{-6} \ F$
        *   $R1 = \frac{100 \times 10^{-3}}{1.1 \times 10 \times 10^{-6}} = \frac{10^{-1}}{1.1 \times 10^{-5}} = \frac{10^4}{1.1} \approx 90.9 \ k\Omega$
        *   You would choose a standard value like $91 \ k\Omega$ or $100 \ k\Omega$.

2.  What is the purpose of connecting a small capacitor (e.g., 0.01 $\mu$F) from Pin 5 (CTRL) to ground in a 555 timer circuit?
    *   **Answer:** This capacitor is used to filter out any noise or voltage spikes on the control voltage input. The control voltage sets the threshold for the upper comparator (2/3 Vcc). Filtering this voltage prevents false triggering of the timer due to noise, ensuring stable operation.

3.  If the RESET pin (Pin 4) of a 555 timer in monostable mode is left floating, what might happen?
    *   **Answer:** If the RESET pin is left floating, it can be susceptible to picking up stray noise or voltage transients, which could cause the 555 timer to reset unexpectedly, interrupting the output pulse or causing it to behave erratically. It is best practice to tie the RESET pin to Vcc in monostable applications to keep it in an enabled state.

## 4. Advanced Topics and Considerations

### 4.1. Improving Duty Cycle in Astable Mode

As mentioned earlier, the standard astable configuration results in a duty cycle greater than 50%. To achieve a 50% duty cycle (or close to it), you can use a diode in parallel with R2.

**Circuit Modification:** Place a diode (e.g., 1N4148) in parallel with R2, with the anode connected to the junction of R1 and R2, and the cathode connected to Pin 7.

**Operation with Diode:**
*   **Charging:** When C1 charges, the diode is reverse-biased, and charging occurs through R1 and the diode. The effective resistance for charging is R1.
*   **Discharging:** When C1 discharges, the diode is forward-biased, and discharge occurs through R2.

**New Formulas:**
*   $t_{high} \approx 0.693 \times R1 \times C1$
*   $t_{low} \approx 0.693 \times R2 \times C1$
*   For a 50% duty cycle, $t_{high} = t_{low}$, which means $R1 = R2$.

### 4.2. Controlling Pulse Width in Monostable Mode with Variable Resistance

To create a variable-duration pulse, you can replace R1 in the monostable circuit with a potentiometer.

**Circuit Modification:** Use a potentiometer for R1. The wiper of the potentiometer will be connected to Pin 7 (DISCH) and one end to Vcc, with the other end to Pin 6 (THRES).

**Important Point to Remember:** When using a potentiometer, ensure that the total resistance of the potentiometer is within the recommended range for the 555 timer to ensure proper operation and to avoid damaging the IC.

### 4.3. Resetting the Monostable Pulse

The RESET pin (Pin 4) can be used to terminate the output pulse prematurely. If a LOW signal is applied to the RESET pin while the monostable is in its unstable state, the output will immediately go LOW, and the capacitor will discharge, returning the circuit to its stable state.

**Course Outcome Alignment:**
*   **CO1:** Use the various electronic instruments and for conducting experiments. (Knowledge Level: K1) - Understanding how to use oscilloscopes to view the output waveforms and multimeters to measure resistance/voltage are essential for these experiments.
*   **CO6:** Use PCB layout software for circuit design (Knowledge Level: K2) - Students might be asked to design a PCB for these circuits, requiring an understanding of component placement and routing.

## 5. Conclusion and Lab Preparation

This module introduces you to the fundamental astable and monostable circuits using the versatile 555 timer IC. You will gain practical experience in designing, building, and testing these circuits.

**Key Takeaways:**
*   The 555 timer is a flexible IC for timing and oscillation.
*   Astable circuits produce continuous square waves, with frequency and duty cycle controlled by R1, R2, and C1.
*   Monostable circuits produce a single pulse of a fixed duration triggered by an input.
*   Component selection is crucial for achieving desired timing characteristics.

**Lab Preparation:**
*   Review the pin functions of the 555 timer IC.
*   Understand the calculation formulas for frequency, duty cycle, and pulse width.
*   Familiarize yourself with the components you will be using (resistors, capacitors, breadboard, power supply, oscilloscope, signal generator).
*   Be prepared to discuss your circuit designs and the results you obtain.

This comprehensive set of notes covers the essential aspects of astable and monostable circuits using the 555 timer IC, aligning with the provided learning and course outcomes and drawing upon the principles found in the referenced textbooks.
