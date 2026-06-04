---
title: "Astable and Monostable multivibrator using Timer IC NE555"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 2: Astable and Monostable multivibrator using Timer IC NE555"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a9"
status: "completed"
scrapedAt: "2026-05-23T17:50:00.743Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 2: Astable and Monostable Multivibrator using Timer IC NE555

### Topic: Astable and Monostable Multivibrator using Timer IC NE555

---

### 1. Introduction to Timer IC NE555

The NE555 timer is a versatile and widely used integrated circuit (IC) that can function as a timer, a pulse generator, and an oscillator. It is a highly stable device for timing and pulse generation, with features such as high stability, adjustable duty cycle, and wide power supply range.

**Key Concepts:**

*   **Integrated Circuit (IC):** A miniaturized electronic circuit consisting of semiconductor devices, resistors, capacitors, etc., fabricated on a single semiconductor substrate (chip).
*   **Multivibrator:** A type of electronic circuit used to implement a variety of simple two-state systems, particularly for building oscillators, timers, and flip-flops.
*   **Astable Multivibrator:** A multivibrator that has no stable state and continuously oscillates between two unstable states. It is often used as a free-running oscillator or clock signal generator.
*   **Monostable Multivibrator:** A multivibrator that has only one stable state. It produces a single output pulse of a specific duration in response to a trigger input. It is often used as a pulse generator or timer.

**Reference:**

*   **Choudhary & Jain (2021), Chapter 10: Timer ICs:** This chapter provides a detailed introduction to the NE555 timer IC, its pin configuration, and internal block diagram.
*   **Gayakwad (2002), Chapter 7: Timer ICs:** This chapter also covers the NE555 timer, its applications, and basic circuit configurations.

---

### 2. NE555 Timer IC: Pin Configuration and Internal Block Diagram

**Pin Configuration (8-pin DIP package):**

| Pin No. | Name     | Description                                                                                             |
| :------ | :------- | :------------------------------------------------------------------------------------------------------ |
| 1       | GND      | Ground reference (0V).                                                                                  |
| 2       | TRIG     | Trigger input. A negative-going pulse to 1/3 Vcc triggers the output.                                   |
| 3       | OUT      | Output. The output is at a high level when the internal flip-flop is set and low when it is reset.      |
| 4       | RESET    | Reset input. A negative-going pulse to ground resets the internal flip-flop, forcing the output low.      |
| 5       | CTRL     | Control Voltage input. Allows external control of the threshold voltage (normally connected to 0.01µF capacitor to ground for noise immunity). |
| 6       | THRES    | Threshold input. When the voltage at this pin exceeds 2/3 Vcc, the internal flip-flop is reset.          |
| 7       | DISCH    | Discharge output. Used to discharge the external capacitor when the output is low.                    |
| 8       | Vcc      | Supply voltage (typically +5V to +15V).                                                               |

**Internal Block Diagram:**

The NE555 timer consists of:

*   **Two Comparators:** One compares the trigger input to 1/3 Vcc, and the other compares the threshold input to 2/3 Vcc.
*   **Flip-Flop:** A bistable latch that receives inputs from the comparators and controls the output and discharge transistor.
*   **Discharge Transistor:** A transistor that connects the DISCH pin to ground, used for discharging the timing capacitor.
*   **An Inverter:** To invert the output of the flip-flop.
*   **A Voltage Divider Network:** To provide reference voltages (1/3 Vcc and 2/3 Vcc) for the comparators.

**Highlight:** Understanding the function of each pin and the internal components is crucial for designing and analyzing NE555-based circuits.

**Reference:**

*   **Choudhary & Jain (2021), Chapter 10:** Detailed internal block diagram and explanation of each functional block.
*   **Rashid (2015), Chapter 12: Linear IC Applications:** While primarily focusing on Pspice, this chapter might offer insights into simulating timer ICs and their internal workings.

---

### 3. Astable Multivibrator using NE555

An astable multivibrator is a free-running oscillator that produces a continuous square wave output without any external triggering.

**Circuit Configuration:**

The NE555 in astable mode uses an external resistor ($R_A$), another external resistor ($R_B$), and an external capacitor ($C$).

*   **Vcc:** Connected to pin 8.
*   **GND:** Connected to pin 1.
*   **TRIG (Pin 2):** Connected to THRES (Pin 6) and also to the junction of $R_B$ and $C$.
*   **THRES (Pin 6):** Connected to the junction of $R_A$ and $R_B$, and also to the capacitor $C$.
*   **DISCH (Pin 7):** Connected to the junction of $R_A$ and $R_B$.
*   **CTRL (Pin 5):** Typically connected to ground via a small capacitor (0.01µF) for noise filtering.
*   **RESET (Pin 4):** Connected to Vcc to prevent accidental resetting.
*   **OUT (Pin 3):** The output terminal, which produces the square wave.

**Operation:**

1.  **Charging Cycle:** When power is applied, the capacitor $C$ begins to charge through $R_A$ and $R_B$ towards Vcc. The output (Pin 3) is HIGH.
2.  **Threshold Reached:** When the voltage across capacitor $C$ reaches 2/3 Vcc, the threshold comparator (connected to Pin 6) triggers the flip-flop.
3.  **Discharging Cycle:** The flip-flop resets, and the discharge transistor (connected to Pin 7) turns ON. This discharges the capacitor $C$ through $R_B$ towards ground. The output (Pin 3) becomes LOW.
4.  **Trigger Point Reached:** When the voltage across capacitor $C$ drops to 1/3 Vcc, the trigger comparator (connected to Pin 2) triggers the flip-flop.
5.  **Output Goes HIGH:** The flip-flop sets, and the discharge transistor turns OFF. The capacitor $C$ starts charging again through $R_A$ and $R_B$. The output (Pin 3) becomes HIGH.
6.  This cycle repeats, producing a continuous square wave.

**Formulas for Frequency and Duty Cycle:**

*   **Time for which output is HIGH ($T_{HIGH}$):** $T_{HIGH} = 0.693 \times (R_A + R_B) \times C$
*   **Time for which output is LOW ($T_{LOW}$):** $T_{LOW} = 0.693 \times R_B \times C$
*   **Total Time Period ($T$):** $T = T_{HIGH} + T_{LOW} = 0.693 \times (R_A + 2R_B) \times C$
*   **Frequency ($f$):** $f = \frac{1}{T} = \frac{1.44}{(R_A + 2R_B) \times C}$
*   **Duty Cycle (D):** $D = \frac{T_{HIGH}}{T} \times 100\% = \frac{R_A + R_B}{R_A + 2R_B} \times 100\%$

**Important Points to Remember:**

*   The duty cycle of a standard astable multivibrator using NE555 is always greater than 50% because the charging path ($R_A + R_B$) is always longer than the discharging path ($R_B$).
*   To achieve a 50% duty cycle, a diode can be added in parallel with $R_B$ to bypass $R_B$ during charging.
*   The minimum value of $R_A$ is typically 1 kΩ to avoid excessive current through the discharge transistor.
*   The minimum value of $C$ is typically 100 pF.

**Example Calculation:**

Let $R_A = 10$ kΩ, $R_B = 47$ kΩ, and $C = 0.1$ µF.
Calculate the frequency and duty cycle.

*   $T_{HIGH} = 0.693 \times (10 \times 10^3 + 47 \times 10^3) \times 0.1 \times 10^{-6} = 0.693 \times 57 \times 10^3 \times 0.1 \times 10^{-6} \approx 3.95$ ms
*   $T_{LOW} = 0.693 \times 47 \times 10^3 \times 0.1 \times 10^{-6} = 0.693 \times 4.7 \times 10^{-3} \approx 3.26$ ms
*   $T = 3.95 \text{ ms} + 3.26 \text{ ms} = 7.21$ ms
*   $f = \frac{1}{7.21 \times 10^{-3}} \approx 138.7$ Hz
*   $D = \frac{3.95}{7.21} \times 100\% \approx 54.8\%$

**Learning Outcomes Covered:**

*   **CO1, CO2:** Designing and implementing the astable multivibrator circuit.
*   **CO3:** Simulating the functioning of the astable multivibrator.
*   **CO4:** Troubleshooting and analyzing the circuit's performance based on component values.

---

### 4. Monostable Multivibrator using NE555

A monostable multivibrator, also known as a one-shot timer, produces a single output pulse of a specific duration in response to a trigger pulse.

**Circuit Configuration:**

*   **Vcc:** Connected to pin 8.
*   **GND:** Connected to pin 1.
*   **TRIG (Pin 2):** The trigger input. The circuit is triggered by a negative-going pulse on this pin. It is usually connected to a push-button switch to ground, with a pull-up resistor to Vcc.
*   **OUT (Pin 3):** The output terminal, which goes HIGH for the duration of the pulse and then LOW.
*   **RESET (Pin 4):** Connected to Vcc to prevent unwanted resets. If this pin is brought low, the monostable circuit is reset and the output goes low.
*   **CTRL (Pin 5):** Typically connected to ground via a small capacitor (0.01µF) for noise filtering.
*   **THRES (Pin 6):** Connected to the junction of the timing resistor ($R_T$) and timing capacitor ($C_T$).
*   **DISCH (Pin 7):** Connected to the junction of $R_T$ and $C_T$.
*   **External Components:** A timing resistor ($R_T$) and a timing capacitor ($C_T$) are used to set the pulse duration.

**Operation:**

1.  **Initial State:** The NE555 is in its stable state. The output (Pin 3) is LOW. The discharge transistor (Pin 7) is ON, keeping the capacitor $C_T$ discharged.
2.  **Triggering:** When a negative-going pulse is applied to the TRIG (Pin 2) that drops the voltage below 1/3 Vcc, the trigger comparator triggers the flip-flop.
3.  **Output Goes HIGH:** The flip-flop sets, the discharge transistor (Pin 7) turns OFF, and the output (Pin 3) goes HIGH.
4.  **Charging Cycle:** The capacitor $C_T$ begins to charge through the timing resistor $R_T$ towards Vcc.
5.  **Threshold Reached:** When the voltage across capacitor $C_T$ reaches 2/3 Vcc, the threshold comparator (connected to Pin 6) triggers the flip-flop.
6.  **Output Goes LOW:** The flip-flop resets, the discharge transistor (Pin 7) turns ON, discharging $C_T$ through $R_T$. The output (Pin 3) returns to its stable LOW state.
7.  The circuit remains in this stable state until another trigger pulse is received.

**Formula for Pulse Duration:**

*   **Pulse Duration ($T_{pulse}$):** $T_{pulse} = 1.1 \times R_T \times C_T$

**Important Points to Remember:**

*   The pulse duration is determined solely by $R_T$ and $C_T$.
*   The output pulse width is independent of the trigger pulse width, as long as the trigger pulse is shorter than the output pulse.
*   To prevent re-triggering before the end of the output pulse, the trigger input (Pin 2) should not be driven low again until the output pulse has finished. This can be achieved by using a Schmitt trigger in front of the NE555 trigger input or by ensuring the trigger source is a single pulse.
*   $R_T$ should be at least 1 kΩ.
*   The maximum value of $R_T$ is typically limited by the leakage current of the capacitor, usually around 10 MΩ.

**Example Calculation:**

Design a monostable multivibrator to produce an output pulse of 100 ms using a 0.1 µF capacitor.

*   $T_{pulse} = 1.1 \times R_T \times C_T$
*   $100 \times 10^{-3} \text{ s} = 1.1 \times R_T \times 0.1 \times 10^{-6} \text{ F}$
*   $R_T = \frac{100 \times 10^{-3}}{1.1 \times 0.1 \times 10^{-6}} = \frac{100 \times 10^{-3}}{0.11 \times 10^{-6}} = \frac{10^5}{0.11} \approx 909090 \text{ Ω}$
*   So, $R_T$ should be approximately 909 kΩ. A standard value like 910 kΩ can be used.

**Learning Outcomes Covered:**

*   **CO1, CO2:** Designing and implementing the monostable multivibrator circuit.
*   **CO3:** Simulating the functioning of the monostable multivibrator.
*   **CO4:** Troubleshooting and analyzing the circuit's pulse width based on component values.

---

### 5. Applications of Astable and Monostable Multivibrators

**Astable Multivibrator Applications:**

*   **Clock Signal Generator:** For digital circuits, microprocessors, and counters.
*   **Frequency Synthesizers:** Generating specific frequencies.
*   **Tone Generators:** Producing audible tones for alarms, buzzers, etc.
*   **Pulse Width Modulation (PWM):** Controlling the width of pulses for various applications like motor speed control or dimming LEDs.
*   **LED Flashing:** Creating blinking effects.

**Monostable Multivibrator Applications:**

*   **Timers:** Creating delays or timing events.
*   **Pulse Width Control:** Generating pulses of a specific duration.
*   **Bounce Elimination:** For mechanical switches to prevent multiple triggers from a single press.
*   **Frequency Division:** In conjunction with other circuits, to divide the frequency of an input signal.
*   **Signal Conditioning:** To convert a narrow pulse into a wider one or vice-versa.

**Reference:**

*   **Choudhary & Jain (2021), Chapter 10:** Discusses various applications of the NE555 in both astable and monostable modes.
*   **Gayakwad (2002), Chapter 7:** Provides examples of common applications for NE555 timers.

---

### 6. Simulation and Troubleshooting (Course Outcomes CO3 & CO4)

**Simulation Tools (CO3):**

*   **PSpice (or Orcad Capture with PSpice):** As mentioned in **Rashid (2015)**, PSpice is a powerful circuit simulator. You can draw the NE555 circuit, specify component values, and simulate its behavior.
    *   **Astable Simulation:** Observe the output waveform on an oscilloscope in the simulation to verify the frequency and duty cycle.
    *   **Monostable Simulation:** Apply a trigger pulse to the trigger input and observe the output pulse width.
*   **Other Simulators:** LTspice, Multisim, Proteus, etc., can also be used.

**Troubleshooting (CO4):**

*   **No Output / Incorrect Frequency (Astable):**
    *   **Check power supply connections:** Ensure Vcc and GND are correctly connected.
    *   **Check component values:** Verify $R_A$, $R_B$, and $C$ are correctly chosen and connected.
    *   **Check for open circuits:** Ensure all connections are proper.
    *   **Check for short circuits:** Especially between pins or components.
    *   **Check RESET pin:** Ensure it's tied to Vcc if not used for resetting.
    *   **Check CTRL pin:** Ensure the decoupling capacitor is present and correctly connected.
    *   **Component failure:** In rare cases, the IC itself might be faulty.

*   **No Output / Incorrect Pulse Width (Monostable):**
    *   **Check trigger input:** Ensure the trigger pulse is a valid negative-going edge and is reaching Pin 2.
    *   **Check RESET pin:** Ensure it's tied to Vcc.
    *   **Check timing components $R_T$ and $C_T$:** Verify their values and connections.
    *   **Check for re-triggering:** If the trigger is re-applied too soon, the timing cycle might be interrupted.
    *   **Check discharge pin connection:** Ensure Pin 7 is correctly connected to the junction of $R_T$ and $C_T$.

**Practical Tips:**

*   **Breadboarding:** Use a breadboard for quick prototyping and testing of circuits.
*   **Component Selection:** Use standard resistor and capacitor values that are close to your calculated values.
*   **Power Supply:** Use a stable and appropriate power supply.
*   **Oscilloscope:** Essential for visualizing the output waveforms of astable and monostable multivibrators.
*   **Multimeter:** Useful for checking DC voltages and resistances.

---

### 7. Practice Questions and Exercises

**Astable Multivibrator:**

1.  **Design Problem:** Design an astable multivibrator using the NE555 timer to produce a square wave of approximately 1 kHz with a duty cycle of 75%. Choose suitable values for $R_A$, $R_B$, and $C$.
    *   **Answer:**
        Let's aim for a duty cycle of 75%, so $\frac{R_A + R_B}{R_A + 2R_B} = 0.75$.
        $R_A + R_B = 0.75 (R_A + 2R_B)$
        $R_A + R_B = 0.75 R_A + 1.5 R_B$
        $0.25 R_A = 0.5 R_B \implies R_A = 2R_B$.

        Now for frequency: $f = \frac{1.44}{(R_A + 2R_B)C} = 1000$ Hz.
        Substitute $R_A = 2R_B$: $1000 = \frac{1.44}{(2R_B + 2R_B)C} = \frac{1.44}{4R_B C}$.
        $4R_B C = \frac{1.44}{1000} = 1.44 \times 10^{-3}$.

        Let's choose $C = 0.1 \mu F = 0.1 \times 10^{-6} F$.
        $4R_B (0.1 \times 10^{-6}) = 1.44 \times 10^{-3}$
        $0.4 R_B \times 10^{-6} = 1.44 \times 10^{-3}$
        $R_B = \frac{1.44 \times 10^{-3}}{0.4 \times 10^{-6}} = \frac{1.44}{0.4} \times 10^3 = 3.6 \times 10^3 \Omega = 3.6$ kΩ.
        Then $R_A = 2R_B = 2 \times 3.6$ kΩ = 7.2 kΩ.

        So, choose $C = 0.1 \mu F$, $R_B = 3.6$ kΩ, and $R_A = 7.2$ kΩ.
        (Practical values: $R_B = 3.9$ kΩ, $R_A = 7.5$ kΩ might be used to get close).

2.  **Calculation:** For an astable multivibrator with $R_A = 22$ kΩ, $R_B = 100$ kΩ, and $C = 0.01$ µF, calculate:
    a) The frequency of oscillation.
    b) The duty cycle.
    *   **Answer:**
        a) $f = \frac{1.44}{(R_A + 2R_B)C} = \frac{1.44}{(22 \times 10^3 + 2 \times 100 \times 10^3)(0.01 \times 10^{-6})}$
           $f = \frac{1.44}{(22 \times 10^3 + 200 \times 10^3)(0.01 \times 10^{-6})} = \frac{1.44}{(222 \times 10^3)(0.01 \times 10^{-6})} = \frac{1.44}{2220 \times 10^{-6}} = \frac{1.44}{2.22 \times 10^{-3}} \approx 648.6$ Hz.
        b) Duty Cycle $= \frac{R_A + R_B}{R_A + 2R_B} \times 100\% = \frac{22 \times 10^3 + 100 \times 10^3}{22 \times 10^3 + 2 \times 100 \times 10^3} \times 100\% = \frac{122 \times 10^3}{222 \times 10^3} \times 100\% \approx 55\%$.

**Monostable Multivibrator:**

3.  **Design Problem:** Design a monostable multivibrator using NE555 to provide a pulse width of 500 ms. Use a 0.1 µF capacitor.
    *   **Answer:**
        $T_{pulse} = 1.1 \times R_T \times C_T$
        $500 \times 10^{-3} = 1.1 \times R_T \times 0.1 \times 10^{-6}$
        $R_T = \frac{500 \times 10^{-3}}{1.1 \times 0.1 \times 10^{-6}} = \frac{0.5}{0.11 \times 10^{-6}} = \frac{5 \times 10^{-1}}{1.1 \times 10^{-7}} = \frac{5}{1.1} \times 10^6 \approx 4.545 \times 10^6 \Omega = 4.545$ MΩ.
        Choose $R_T = 4.7$ MΩ.

4.  **Troubleshooting Scenario:** A student builds an astable multivibrator and observes that the output LED connected to Pin 3 is always ON. What are the possible reasons for this behavior?
    *   **Answer:**
        *   **RESET Pin (Pin 4) is LOW:** If Pin 4 is connected to ground or a logic LOW, it will force the output to LOW. However, if the LED is always ON, this is not the case.
        *   **Discharge Transistor Faulty (Pin 7):** If the discharge transistor (Pin 7) is stuck in the OFF state, the capacitor will not discharge, and it will keep charging. When it reaches 2/3 Vcc, the output goes LOW. If the discharge transistor is permanently ON or shorted to ground, the output would be stuck LOW. However, if it's stuck OFF, the capacitor charges to Vcc, and the output remains HIGH.
        *   **Trigger/Threshold Not Reached:** If the capacitor is faulty (open) or the resistors are too large, the capacitor might not charge to 2/3 Vcc, leading to a continuously HIGH output if the flip-flop is initially set.
        *   **External components incorrectly wired:** A common mistake is wiring the discharge pin (Pin 7) incorrectly, which can prevent proper charging/discharging.
        *   **IC Fault:** The NE555 IC itself might be damaged.
        *   **Incorrect Capacitor Connection:** If the capacitor is connected between Pin 6/7 and Vcc instead of ground, it won't function correctly.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Design and implement basic linear integrated circuits using Op Amps):** While this module focuses on the NE555 timer, the principles of circuit design and implementation are directly applicable. The NE555 is a linear IC, and its application as a multivibrator is a fundamental linear circuit.
*   **CO2 (Design and implement basic linear integrated circuits using linear ICs):** This is the core outcome addressed by this module. Students will learn to design and build functional astable and monostable multivibrators using the NE555 timer IC.
*   **CO3 (Design and simulate the functioning of basic linear integrated circuits and linear ICs using simulation tools):** The notes emphasize the use of simulation tools like PSpice to verify the designed circuits and understand their behavior before physical implementation.
*   **CO4 (Effectively troubleshoot a given circuit and analyze it):** The troubleshooting section provides common issues and their solutions, enabling students to analyze why a circuit might not be working as expected and how to rectify it.

---

This comprehensive set of study notes covers the essential aspects of astable and monostable multivibrators using the NE555 timer IC, aligning with the learning objectives and course outcomes for the Linear Integrated Circuits Lab.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
