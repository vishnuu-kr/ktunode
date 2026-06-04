---
title: "Triangular and Sawtooth waveform generators, Astable and Monostable multivibrators."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 3: Oscillators and Multivibrators:  Phase Shift and Wien"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe573"
status: "completed"
scrapedAt: "2026-05-23T17:49:47.282Z"
---
# Linear Integrated Circuits: Module 3 - Oscillators and Multivibrators: Phase Shift and Wien (Part 2)

This module delves into waveform generation using operational amplifiers, focusing on triangular and sawtooth waveforms, and explores the fundamental building blocks of sequential logic: astable and monostable multivibrators.

**Learning Outcomes:**

*   Understand the principles of operation and design of triangular and sawtooth waveform generators.
*   Analyze the operation of astable multivibrators and design them for specific frequencies.
*   Analyze the operation of monostable multivibrators and design them for specific pulse widths.
*   Apply knowledge of multivibrator circuits in practical applications.

**Course Outcomes Addressed:**

*   **CO2 (K3):** Design operational amplifier circuits for various applications (specifically waveform generators and multivibrators).
*   **CO4 (K3):** Implement various applications using specific integrated circuit chips (implicitly, as waveform generators and multivibrators are core applications of ICs).

---

## 3.1 Triangular and Sawtooth Waveform Generators

These generators are crucial for applications like testing, sweep circuits, and signal simulation. They typically utilize an integrator circuit in conjunction with a comparator.

### 3.1.1 Basic Principle

The fundamental idea is to charge and discharge a capacitor linearly.

*   **Linear Charging/Discharging:** This is achieved using an integrator circuit. An integrator's output voltage is proportional to the integral of its input voltage. If a constant voltage is applied to the integrator, its output will change linearly, i.e., a ramp.
*   **Switching Mechanism:** A comparator is used to detect when the integrator's output reaches a predetermined upper or lower threshold voltage. Upon reaching a threshold, the comparator's output switches, altering the input to the integrator, causing it to charge or discharge in the opposite direction.

### 3.1.2 Triangular Waveform Generator

A common implementation uses an integrator and a Schmitt trigger (a comparator with hysteresis).

**Circuit Components:**

*   **Integrator:** Typically an op-amp with a capacitor in the feedback loop and a resistor at the input.
*   **Schmitt Trigger:** A comparator with positive feedback, creating hysteresis.

**Operation:**

1.  **Initial State:** Assume the Schmitt trigger output is at its positive saturation voltage ($+V_{sat}$). This positive voltage is applied to the integrator's input resistor.
2.  **Integration:** The integrator's output ($V_{out}$) starts decreasing linearly from its initial positive value.
3.  **Lower Threshold:** When $V_{out}$ reaches the lower threshold voltage ($V_{LT}$) of the Schmitt trigger, the Schmitt trigger's output switches to its negative saturation voltage ($-V_{sat}$).
4.  **Reverse Integration:** The negative voltage ($-V_{sat}$) is now applied to the integrator's input, causing its output to increase linearly from $V_{LT}$.
5.  **Upper Threshold:** When $V_{out}$ reaches the upper threshold voltage ($V_{UT}$) of the Schmitt trigger, the Schmitt trigger's output switches back to $+V_{sat}$.
6.  **Cycle Repeat:** The process repeats, generating a continuous triangular waveform at the integrator's output.

**Key Equations (Ideal Op-Amp):**

Let $R_1$ and $C_1$ be the input resistor and feedback capacitor of the integrator.
Let $R_2$ and $R_3$ be the feedback resistors of the Schmitt trigger (creating hysteresis).
The output voltage of the integrator is given by:
$V_{out}(t) = -\frac{1}{R_1 C_1} \int V_{in}(t) dt + V_{initial}$

For the Schmitt trigger, the thresholds are approximately:
$V_{UT} \approx +V_{sat} \frac{R_3}{R_2+R_3}$
$V_{LT} \approx -V_{sat} \frac{R_3}{R_2+R_3}$

**Frequency of Oscillation:**

The time taken for the integrator output to sweep from $V_{LT}$ to $V_{UT}$ (or vice versa) determines the period of oscillation.
Let the time taken to go from $V_{LT}$ to $V_{UT}$ be $T_{up}$ and from $V_{UT}$ to $V_{LT}$ be $T_{down}$.
If $V_{in} = +V_{sat}$ for $T_{down}$, the change in output is:
$V_{UT} - V_{LT} = \frac{V_{sat}}{R_1 C_1} T_{down}$
$T_{down} = \frac{(V_{UT} - V_{LT}) R_1 C_1}{V_{sat}} = \frac{2 V_{sat} \frac{R_3}{R_2+R_3} R_1 C_1}{V_{sat}} = \frac{2 R_1 C_1 R_3}{R_2+R_3}$

If $V_{in} = -V_{sat}$ for $T_{up}$, the change in output is:
$V_{LT} - V_{UT} = \frac{-V_{sat}}{R_1 C_1} T_{up}$
$T_{up} = \frac{(V_{LT} - V_{UT}) R_1 C_1}{-V_{sat}} = \frac{-(V_{UT} - V_{LT}) R_1 C_1}{-V_{sat}} = \frac{(V_{UT} - V_{LT}) R_1 C_1}{V_{sat}} = \frac{2 R_1 C_1 R_3}{R_2+R_3}$

The period of oscillation is $T = T_{up} + T_{down} = \frac{4 R_1 C_1 R_3}{R_2+R_3}$.
The frequency of oscillation is $f = \frac{1}{T} = \frac{R_2+R_3}{4 R_1 C_1 R_3}$.

**Design Considerations:**

*   **Amplitude:** The peak-to-peak amplitude of the triangular wave is $V_{UT} - V_{LT}$. This can be adjusted by changing the feedback resistors ($R_2, R_3$) of the Schmitt trigger or the saturation voltages of the op-amp.
*   **Frequency:** The frequency is set by $R_1, C_1, R_2, R_3$.
*   **Slew Rate:** The op-amp's slew rate can limit the maximum frequency of oscillation or distort the waveform.

**Example (Roy D. C. & S. B. Jain):**
The textbook provides detailed circuit diagrams and derivations for triangular waveform generators using op-amps. They emphasize the role of hysteresis in the comparator for stable oscillation.

---

### 3.1.3 Sawtooth Waveform Generator

A sawtooth waveform has a linearly increasing or decreasing output over time, followed by a rapid reset.

**Circuit Components:**

*   **Integrator:** Similar to the triangular wave generator.
*   **Comparator/Switching Mechanism:** To control the charging/discharging and reset. A common approach involves a unijunction transistor (UJT) or a second op-amp acting as a comparator.

**Operation (using a relaxation oscillator principle):**

1.  **Charging:** A capacitor ($C$) is charged through a resistor ($R$). The voltage across the capacitor increases linearly (or exponentially depending on the charging circuit).
2.  **Threshold Detection:** When the capacitor voltage reaches a certain threshold voltage ($V_{p}$ for UJT, or comparator threshold), a switching element (UJT, transistor, or comparator output) triggers.
3.  **Discharge/Reset:** The switching element rapidly discharges the capacitor.
4.  **Repeat:** Once discharged, the switching element turns off, and the capacitor begins charging again.

**Using Op-Amps for Sawtooth:**

A common op-amp based sawtooth generator uses an integrator and a comparator.

*   **Ramp Generation:** An integrator (op-amp, $R_{in}, C_f$) is fed with a constant input voltage ($V_{in}$). Its output is a ramp.
*   **Threshold Detection and Reset:** A comparator monitors the integrator's output. When it reaches a desired peak voltage, the comparator's output switches. This switch can:
    *   Reverse the polarity of the input to the integrator (for a symmetrical sawtooth).
    *   Trigger a circuit that rapidly discharges the capacitor of the integrator.

**Symmetrical Sawtooth Generator (using two op-amps):**

1.  **Op-amp 1 (Integrator):** Configured as an integrator. Its input is controlled by a comparator.
2.  **Op-amp 2 (Comparator):** Acts as a Schmitt trigger.

**Operation:**

*   The Schmitt trigger's output oscillates between $+V_{sat}$ and $-V_{sat}$.
*   This output is fed to the integrator.
*   When the Schmitt trigger output is $+V_{sat}$, the integrator's output ramps down.
*   When the integrator's output reaches the lower threshold of the Schmitt trigger, its output switches to $-V_{sat}$.
*   The integrator's output then ramps up.
*   When the integrator's output reaches the upper threshold of the Schmitt trigger, its output switches back to $+V_{sat}$, and the cycle repeats.

This configuration essentially generates a triangular wave. To get a sawtooth, we need a mechanism for a linear ramp followed by a rapid reset.

**Non-symmetrical Sawtooth Generator:**

A simple approach involves a capacitor charging through a resistor, and a comparator triggering a discharge path when a threshold is met.

*   **Circuit:** Op-amp as integrator, capacitor $C$, resistor $R$. A comparator monitors the capacitor voltage. When it reaches $V_{peak}$, the comparator triggers a transistor (e.g., NPN) connected across the capacitor to discharge it.

**Frequency of Oscillation:**

For a sawtooth generated by charging a capacitor through a resistor $R$ to a voltage $V_{peak}$ and then discharging:
The time to charge to $V_{peak}$ is approximately $T_{ramp} = -RC \ln(1 - \frac{V_{peak}}{V_{supply}})$.
The discharge time is very short.
The frequency $f = \frac{1}{T_{ramp}}$.

**Example (Sergio Franco):**
Sergio Franco's "Design with Operational Amplifiers and Analog Integrated Circuits" often details practical implementations of these waveform generators, discussing component selection and limitations. He might use a dedicated IC like the 555 timer for simpler sawtooth generation or illustrate op-amp-based solutions.

---

## 3.2 Astable Multivibrators

An astable multivibrator is a free-running oscillator, meaning it has no stable state and continuously oscillates between two quasi-stable states. It produces a continuous rectangular or square wave output.

**Key Concept:** The circuit has two unstable states, and it automatically switches from one state to the other, generating a periodic waveform.

**Operation:**

The operation relies on the charging and discharging of a capacitor through resistors, controlling the switching points of a comparator or a dedicated multivibrator IC (like the 555 timer).

### 3.2.1 Astable Multivibrator using Op-Amp (Comparator with Hysteresis)

This is similar to the Schmitt trigger circuit used in triangular wave generation, but without the integrator. The output is a square wave.

**Circuit Components:**

*   **Comparator (Schmitt Trigger):** Op-amp with positive feedback ($R_2, R_3$).
*   **Timing Components:** A capacitor ($C$) and resistors ($R_1, R_4$).

**Operation:**

1.  **Initial State:** Assume the comparator's output is at $+V_{sat}$. This positive voltage is applied to the non-inverting input of the comparator through the feedback network ($R_2, R_3$). The capacitor $C$ is connected to the inverting input and is charging through $R_1$ towards $+V_{sat}$.
2.  **Upper Threshold:** When the voltage across the capacitor ($V_C$) reaches the upper threshold voltage ($V_{UT}$) of the Schmitt trigger, the comparator's output switches to $-V_{sat}$.
3.  **Discharging:** The capacitor now starts discharging through $R_1$ (assuming $R_1$ is common for charging and discharging) towards $-V_{sat}$.
4.  **Lower Threshold:** When $V_C$ reaches the lower threshold voltage ($V_{LT}$) of the Schmitt trigger, the comparator's output switches back to $+V_{sat}$.
5.  **Cycle Repeat:** The capacitor starts charging again, and the cycle repeats, producing a square wave at the comparator's output.

**Key Equations:**

The thresholds are:
$V_{UT} = +V_{sat} \frac{R_3}{R_2+R_3}$
$V_{LT} = -V_{sat} \frac{R_3}{R_2+R_3}$

The time taken to charge from $V_{LT}$ to $V_{UT}$ is:
$T_{charge} = R_1 C \ln\left(\frac{V_{sat} - V_{LT}}{V_{sat} - V_{UT}}\right)$
Since $V_{UT} = -V_{LT}$, and assuming symmetrical saturation voltages ($V_{sat} = -V_{sat}$):
$T_{charge} = R_1 C \ln\left(\frac{V_{sat} - (-V_{UT})}{V_{sat} - V_{UT}}\right) = R_1 C \ln\left(\frac{V_{sat} + V_{UT}}{V_{sat} - V_{UT}}\right)$
Substituting $V_{UT} = V_{sat} \frac{R_3}{R_2+R_3}$:
$T_{charge} = R_1 C \ln\left(\frac{V_{sat} + V_{sat} \frac{R_3}{R_2+R_3}}{V_{sat} - V_{sat} \frac{R_3}{R_2+R_3}}\right) = R_1 C \ln\left(\frac{1 + \frac{R_3}{R_2+R_3}}{1 - \frac{R_3}{R_2+R_3}}\right)$
$T_{charge} = R_1 C \ln\left(\frac{R_2+R_3+R_3}{R_2+R_3-R_3}\right) = R_1 C \ln\left(\frac{R_2+2R_3}{R_2}\right)$

The time taken to discharge from $V_{UT}$ to $V_{LT}$ is:
$T_{discharge} = R_1 C \ln\left(\frac{V_{LT} - V_{sat}}{V_{LT} - V_{UT}}\right)$
Using symmetrical saturation and thresholds:
$T_{discharge} = R_1 C \ln\left(\frac{-V_{UT} - (-V_{sat})}{-V_{UT} - V_{UT}}\right) = R_1 C \ln\left(\frac{V_{sat} - V_{UT}}{-2V_{UT}}\right)$
This derivation becomes more complex without simplifying assumptions. A simpler, more common approach considers the time constants for charging and discharging.

**Simplified Frequency Calculation (Common Astable Multivibrator with Separate Charge/Discharge Paths):**

If the capacitor charges through $R_a$ and discharges through $R_b$:
$T_{high} \approx 0.693 R_a C$ (Time spent in high state)
$T_{low} \approx 0.693 R_b C$ (Time spent in low state)
Period $T = T_{high} + T_{low} \approx 0.693 (R_a + R_b) C$
Frequency $f = \frac{1}{T} \approx \frac{1}{0.693 (R_a + R_b) C}$

**Duty Cycle:**
Duty Cycle = $\frac{T_{high}}{T_{high} + T_{low}} = \frac{R_a}{R_a + R_b}$
For a square wave, $R_a = R_b$, resulting in a 50% duty cycle.

**Example (Gayakwad R. A.):**
Gayakwad's book likely provides a detailed explanation of the astable multivibrator using op-amps, possibly with design examples for setting frequency and duty cycle. He might also introduce astable multivibrators using other ICs like the 555 timer.

### 3.2.2 555 Timer as an Astable Multivibrator

The 555 timer IC is a versatile component that can be configured as an astable multivibrator.

**Internal Structure of 555 Timer:**

*   Two comparators
*   A flip-flop
*   A discharge transistor
*   An op-amp (often used for output stage)
*   Resistors ($R_1, R_2$) and a capacitor ($C$) determine timing.

**Circuit Configuration:**

*   Pin 1 (GND): Connected to ground.
*   Pin 2 (TRIG): Connected to the junction of $R_2$ and $C$.
*   Pin 3 (OUT): Output.
*   Pin 4 (RESET): To $+V_{CC}$ to prevent reset, or to a control signal.
*   Pin 5 (CTRL): Connected to ground via a 0.01µF capacitor for noise immunity.
*   Pin 6 (THRES): Connected to the junction of $R_2$ and $C$.
*   Pin 7 (DISCH): Connected to the junction of $R_1$ and $R_2$.
*   Pin 8 (VCC): Connected to the positive supply voltage.

**Operation:**

1.  **Initial State:** When power is applied, the capacitor $C$ is discharged. The voltage at the trigger input (Pin 2) is low, causing the internal flip-flop to set. The output (Pin 3) goes HIGH, and the discharge transistor (Pin 7) is OFF.
2.  **Charging:** Capacitor $C$ charges through $R_1$ and $R_2$ towards $V_{CC}$.
3.  **Threshold Reached:** When the voltage across $C$ reaches $2/3 V_{CC}$ (detected by the threshold input, Pin 6), the upper comparator triggers the flip-flop to reset. The output (Pin 3) goes LOW, and the discharge transistor (Pin 7) turns ON.
4.  **Discharging:** The capacitor $C$ now discharges through $R_2$ and the discharge transistor (Pin 7) towards ground.
5.  **Trigger Level Reached:** When the voltage across $C$ drops to $1/3 V_{CC}$ (detected by the trigger input, Pin 2), the lower comparator triggers the flip-flop to set again. The output goes HIGH, and the discharge transistor turns OFF.
6.  **Cycle Repeat:** The capacitor starts charging again, and the cycle repeats.

**Timing Equations for 555 Astable:**

*   **Time HIGH ($T_{high}$):** The time the output is HIGH, during which the capacitor charges from $1/3 V_{CC}$ to $2/3 V_{CC}$ through $R_1$ and $R_2$.
    $T_{high} = 0.693 (R_1 + R_2) C$
*   **Time LOW ($T_{low}$):** The time the output is LOW, during which the capacitor discharges from $2/3 V_{CC}$ to $1/3 V_{CC}$ through $R_2$ and the discharge transistor.
    $T_{low} = 0.693 R_2 C$
*   **Period ($T$):** $T = T_{high} + T_{low} = 0.693 (R_1 + 2R_2) C$
*   **Frequency ($f$):** $f = \frac{1}{T} = \frac{1}{0.693 (R_1 + 2R_2) C} \approx \frac{1.44}{(R_1 + 2R_2) C}$
*   **Duty Cycle:** $\text{Duty Cycle} = \frac{T_{high}}{T} = \frac{R_1 + R_2}{R_1 + 2R_2}$
    *   Note: The duty cycle can never be 50% in this standard configuration because $T_{high}$ always includes $R_1$. To achieve a 50% duty cycle, external diodes or modifications are needed.

**Design Example (555 Astable):**
Design a 555 timer astable multivibrator to produce a square wave of 1 kHz with a 50% duty cycle.
*   For a 50% duty cycle, $R_1$ needs to be much smaller than $R_2$. However, $R_1$ cannot be zero as it's used for charging. A common modification for a near 50% duty cycle involves placing a diode in parallel with $R_2$ during charging.
*   Let's aim for a frequency close to 1 kHz and a duty cycle as close to 50% as possible with the standard configuration.
    $f = \frac{1.44}{(R_1 + 2R_2) C}$
    Duty Cycle $= \frac{R_1 + R_2}{R_1 + 2R_2}$
    If we choose $R_1 = 10k\Omega$ and $R_2 = 100k\Omega$, duty cycle $\approx \frac{10+100}{10+200} = \frac{110}{210} \approx 52.3\%$.
    Let's pick $C = 0.01 \mu F$.
    $f = \frac{1.44}{(10k\Omega + 2 \times 100k\Omega) \times 0.01 \mu F} = \frac{1.44}{(10 \times 10^3 + 200 \times 10^3) \times 10 \times 10^{-9}} = \frac{1.44}{(210 \times 10^3) \times 10 \times 10^{-9}} = \frac{1.44}{2.1 \times 10^{-3}} \approx 685 Hz$. This is too low.

    Let's try to achieve 1 kHz:
    $1000 = \frac{1.44}{(R_1 + 2R_2) C}$
    $(R_1 + 2R_2)C = 1.44 \times 10^{-3}$
    Let's choose $C = 10nF = 10 \times 10^{-9} F$.
    $R_1 + 2R_2 = \frac{1.44 \times 10^{-3}}{10 \times 10^{-9}} = 144 \times 10^3 \Omega = 144 k\Omega$.
    For duty cycle close to 50%, let $R_1 = 10 k\Omega$.
    $10k\Omega + 2R_2 = 144 k\Omega$
    $2R_2 = 134 k\Omega$
    $R_2 = 67 k\Omega$. A standard value would be $68 k\Omega$.
    With $R_1 = 10k\Omega$, $R_2 = 68k\Omega$, $C = 10nF$:
    $T_{high} = 0.693 (10k\Omega + 68k\Omega) \times 10nF = 0.693 \times 78k\Omega \times 10nF \approx 0.54 ms$.
    $T_{low} = 0.693 \times 68k\Omega \times 10nF \approx 0.47 ms$.
    $T = 0.54 + 0.47 = 1.01 ms$.
    $f = 1/1.01ms \approx 990 Hz$.
    Duty Cycle = $0.54ms / 1.01ms \approx 53.5\%$.

**Important Note:** The 555 timer IC is a very common and important IC for multivibrator applications, and its operation as an astable multivibrator is a fundamental topic.

---

## 3.3 Monostable Multivibrators (One-Shot Multivibrators)

A monostable multivibrator has one stable state and one quasi-stable state. When a trigger pulse is applied, it transitions to the quasi-stable state for a specific duration (determined by external timing components) and then automatically returns to its stable state. It's used to generate pulses of a precise width.

**Key Concept:** A monostable multivibrator produces a single output pulse of a predetermined width in response to a trigger input.

### 3.3.1 Monostable Multivibrator using Op-Amp

This circuit typically uses a comparator and an integrator-like arrangement.

**Circuit Components:**

*   **Comparator:** With hysteresis (Schmitt trigger) or without, depending on the design.
*   **Timing Capacitor ($C$):** Determines the pulse width.
*   **Timing Resistor ($R$):** Works with $C$ to set the pulse width.
*   **Trigger Input:** To initiate the pulse.

**Operation (Example using a basic comparator and RC timing):**

1.  **Stable State:** The monostable is normally in a stable state. Assume the comparator output is LOW, and a capacitor is charged to a specific voltage (e.g., $V_{CC}$ through a resistor).
2.  **Trigger Pulse:** A negative-going trigger pulse is applied to the trigger input.
3.  **Transition to Quasi-Stable State:** The trigger pulse causes the comparator's output to switch to a HIGH state. Simultaneously, the capacitor starts discharging through a resistor ($R$) from its current voltage towards ground.
4.  **Pulse Width:** The output remains HIGH as long as the capacitor voltage is above a certain threshold (e.g., the trigger threshold of the comparator). The time it takes for the capacitor voltage to fall from its initial value to the threshold is the pulse width ($T_W$).
5.  **Return to Stable State:** When the capacitor voltage drops below the threshold, the comparator's output switches back to its stable LOW state, and the capacitor starts charging back to its original voltage, ready for the next trigger.

**Key Equation for Pulse Width ($T_W$):**

For a simple RC timing circuit where a capacitor charges or discharges exponentially:
$V(t) = V_{initial} e^{-t/RC}$ or $V(t) = V_{final} (1 - e^{-t/RC})$

A common monostable configuration using an op-amp involves a Schmitt trigger. The trigger pulse causes the output to go high. The capacitor charges through $R$ towards the positive supply. When the capacitor voltage reaches the upper threshold of the Schmitt trigger, the output goes low, and the capacitor discharges.

If the capacitor charges from $V_{LT}$ to $V_{UT}$ through resistance $R$:
$V_{UT} = V_{sat} \frac{R_3}{R_2+R_3}$ (assuming charging towards $+V_{sat}$)
$V_{LT}$ is the discharge voltage.
The pulse width $T_W$ is the time for the capacitor to charge from $V_{LT}$ to $V_{UT}$.

$V_C(t) = V_{sat} (1 - e^{-t/RC})$ (assuming charging from 0 towards $V_{sat}$)
If starting from $V_{LT}$ and charging towards $V_{UT}$ with input $+V_{sat}$:
$V_C(t) = V_{final} - (V_{final} - V_{initial}) e^{-t/RC}$
Let's consider a configuration where the capacitor discharges from a high voltage towards a lower threshold:
If the capacitor is initially charged to $V_0$ and discharges through $R$ to a threshold $V_{th}$:
$V(t) = V_0 e^{-t/RC}$
Setting $V(T_W) = V_{th}$:
$V_{th} = V_0 e^{-T_W/RC}$
$e^{T_W/RC} = V_0 / V_{th}$
$T_W/RC = \ln(V_0 / V_{th})$
$T_W = RC \ln(V_0 / V_{th})$

**Example (Roy D. C. & S. B. Jain):**
The textbook will likely present a standard monostable configuration using an op-amp, showing the trigger mechanism and the RC timing network that sets the pulse width. They will emphasize the importance of the trigger polarity and the external components.

### 3.3.2 555 Timer as a Monostable Multivibrator

The 555 timer is widely used as a monostable multivibrator.

**Circuit Configuration:**

*   Pin 1 (GND): To ground.
*   Pin 2 (TRIG): Connected to the trigger input (active low).
*   Pin 3 (OUT): Output pulse.
*   Pin 4 (RESET): Connected to $+V_{CC}$ to enable the circuit.
*   Pin 5 (CTRL): Connected to ground via a 0.01µF capacitor.
*   Pin 6 (THRES): Connected to the junction of $R$ and $C$.
*   Pin 7 (DISCH): Connected to the junction of $R$ and $C$.
*   Pin 8 (VCC): To $+V_{CC}$.
*   External Components: One resistor ($R$) and one capacitor ($C$).

**Operation:**

1.  **Stable State:** The output (Pin 3) is LOW. The discharge transistor (Pin 7) is ON, keeping the capacitor $C$ discharged (shorted to ground).
2.  **Trigger Pulse:** A negative-going trigger pulse (falling edge) is applied to Pin 2.
3.  **Transition to Quasi-Stable State:** The trigger pulse causes the internal flip-flop to set, making the output (Pin 3) go HIGH. The discharge transistor (Pin 7) turns OFF.
4.  **Capacitor Charging:** The capacitor $C$ starts charging through resistor $R$ towards $V_{CC}$.
5.  **Threshold Reached:** When the voltage across the capacitor $C$ reaches $2/3 V_{CC}$ (detected by the threshold input, Pin 6), the upper comparator triggers the flip-flop to reset.
6.  **Return to Stable State:** The output (Pin 3) goes LOW, and the discharge transistor (Pin 7) turns ON, discharging the capacitor. The circuit is now ready for another trigger.

**Timing Equation for 555 Monostable:**

The pulse width ($T_W$) is the time it takes for the capacitor to charge from 0V to $2/3 V_{CC}$ through resistor $R$.
$V_C(t) = V_{CC} (1 - e^{-t/RC})$
We need $V_C(T_W) = 2/3 V_{CC}$.
$2/3 V_{CC} = V_{CC} (1 - e^{-T_W/RC})$
$2/3 = 1 - e^{-T_W/RC}$
$e^{-T_W/RC} = 1 - 2/3 = 1/3$
$-T_W/RC = \ln(1/3) = -\ln(3)$
$T_W = RC \ln(3) \approx 1.1 RC$

**Design Example (555 Monostable):**
Design a 555 timer monostable multivibrator to produce an output pulse of 100 ms.
*   $T_W = 1.1 RC = 100 ms = 0.1 s$
*   Choose $C = 10 \mu F = 10 \times 10^{-6} F$.
*   $R = \frac{T_W}{1.1 C} = \frac{0.1 s}{1.1 \times 10 \times 10^{-6} F} = \frac{0.1}{11 \times 10^{-6}} = \frac{10^5}{11} \approx 9090 \Omega$.
*   A standard resistor value close to this is $9.1 k\Omega$.
    Let's check with $R = 9.1 k\Omega$ and $C = 10 \mu F$:
    $T_W = 1.1 \times 9.1 k\Omega \times 10 \mu F = 1.1 \times 9.1 \times 10^3 \times 10 \times 10^{-6} = 100.1 \times 10^{-3} s = 100.1 ms$. This is very close to the desired 100 ms.

**Important Considerations for Monostable:**

*   **Trigger Pulse Width:** The trigger pulse must be shorter than the output pulse width.
*   **Trigger Polarity:** The 555 timer trigger input (Pin 2) is active LOW.
*   **Component Stability:** The accuracy of the pulse width depends on the stability of the timing components $R$ and $C$.

---

## Practice Questions and Answers

**Question 1 (Conceptual):**
What is the primary difference in the output waveform between an astable multivibrator and a monostable multivibrator?

**Answer 1:**
An astable multivibrator produces a continuous, periodic waveform (e.g., square wave) without external triggering. A monostable multivibrator produces a single output pulse of a specific width in response to an external trigger pulse.

**Question 2 (Design - 555 Timer Astable):**
Design a 555 timer astable multivibrator to produce a square wave with a frequency of 500 Hz and a duty cycle of approximately 60%.

**Answer 2:**
We need $f = 500 Hz$ and Duty Cycle $\approx 60\%$.
$f = \frac{1.44}{(R_1 + 2R_2) C}$
Duty Cycle $= \frac{R_1 + R_2}{R_1 + 2R_2}$

Let Duty Cycle $= 0.6$:
$0.6 = \frac{R_1 + R_2}{R_1 + 2R_2}$
$0.6 R_1 + 1.2 R_2 = R_1 + R_2$
$0.2 R_2 = 0.4 R_1$
$R_2 = 2 R_1$

Now, let's set the frequency. Choose a capacitor, say $C = 0.1 \mu F = 100 nF$.
$500 Hz = \frac{1.44}{(R_1 + 2(2R_1)) \times 0.1 \times 10^{-6}}$
$500 = \frac{1.44}{(R_1 + 4R_1) \times 10^{-7}} = \frac{1.44}{5R_1 \times 10^{-7}}$
$5R_1 \times 10^{-7} = \frac{1.44}{500} = 0.00288$
$5R_1 = 0.00288 \times 10^7 = 28800$
$R_1 = \frac{28800}{5} = 5760 \Omega$
A standard value close to $5.76 k\Omega$ is $5.6 k\Omega$ or $6.2 k\Omega$. Let's use $R_1 = 5.6 k\Omega$.
Then $R_2 = 2 R_1 = 2 \times 5.6 k\Omega = 11.2 k\Omega$. A standard value is $11 k\Omega$ or $12 k\Omega$. Let's use $R_2 = 11 k\Omega$.

With $R_1 = 5.6 k\Omega$, $R_2 = 11 k\Omega$, $C = 0.1 \mu F$:
$T_{high} = 0.693 (5.6k\Omega + 11k\Omega) \times 0.1 \mu F = 0.693 \times 16.6k\Omega \times 0.1\mu F \approx 1.15 ms$
$T_{low} = 0.693 \times 11k\Omega \times 0.1\mu F \approx 0.76 ms$
$T = 1.15 ms + 0.76 ms = 1.91 ms$
$f = 1 / 1.91 ms \approx 523 Hz$
Duty Cycle $= 1.15 ms / 1.91 ms \approx 60.2\%$

**Components:** $R_1 = 5.6 k\Omega$, $R_2 = 11 k\Omega$, $C = 0.1 \mu F$.

**Question 3 (Design - Op-Amp Monostable):**
An op-amp monostable circuit uses an RC network with $R = 100 k\Omega$ and $C = 0.01 \mu F$. The output pulse width is determined by the time it takes for the capacitor voltage to discharge from $10V$ to $2V$. Calculate the expected pulse width.

**Answer 3:**
Using the formula $T_W = RC \ln(V_0 / V_{th})$:
$R = 100 k\Omega = 100 \times 10^3 \Omega$
$C = 0.01 \mu F = 0.01 \times 10^{-6} F = 10^{-8} F$
$V_0 = 10V$
$V_{th} = 2V$

$T_W = (100 \times 10^3 \Omega) \times (10^{-8} F) \times \ln(10V / 2V)$
$T_W = 10^{-3} \times \ln(5)$
$T_W = 10^{-3} \times 1.609$
$T_W = 1.609 ms$

---

## Important Points to Remember

*   **Triangular Waveform Generation:** Achieved by integrating a square wave (from a comparator/Schmitt trigger) and using the comparator's thresholds to switch the input polarity.
*   **Sawtooth Waveform Generation:** Involves linear charging/discharging of a capacitor with a rapid reset mechanism. Op-amps can implement this using integrators and comparators.
*   **Astable Multivibrator:** A free-running oscillator producing continuous periodic waveforms (square/rectangular). The 555 timer is a popular IC for this.
*   **Monostable Multivibrator:** Produces a single output pulse of a fixed duration upon receiving a trigger. The pulse width is determined by an RC time constant. The 555 timer is also very effective for monostable operation.
*   **Hysteresis:** Crucial in comparator-based oscillators (triangular wave, astable multivibrator) for stable switching and to avoid spurious oscillations.
*   **RC Time Constant:** The fundamental parameter for determining the frequency in astable multivibrators and the pulse width in monostable multivibrators.
*   **555 Timer:** A highly versatile IC, commonly used as both astable and monostable multivibrators, with easily calculable timing formulas.
*   **Duty Cycle:** The ratio of the ON time to the total period of a periodic waveform. In astable multivibrators, it's determined by the ratio of charging/discharging resistances.

---
This concludes the notes for Module 3, focusing on waveform generators and multivibrators. Remember to refer to your textbooks (Roy D. C. & S. B. Jain, Sergio Franco, etc.) for more in-depth circuit analysis, practical considerations, and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
