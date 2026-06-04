---
title: "Switching Circuits: Astable"
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f7d"
status: "completed"
scrapedAt: "2026-05-23T16:18:37.247Z"
---
# SOLID STATE DEVICES: Module 1: Wave Shaping Circuits

## Topic: Switching Circuits: Astable

### Introduction to Astable Multivibrators

Astable multivibrators are a type of electronic circuit that does not have a stable state. They continuously oscillate between two unstable states, generating a repetitive waveform, typically a square or rectangular wave. This makes them fundamental building blocks for oscillators and timing circuits in digital electronics and other applications.

While this topic falls under "Wave Shaping Circuits," the specific focus on astable circuits often involves transistor-based switching action rather than purely RC filtering. However, the timing of these circuits is heavily influenced by RC time constants, thus linking it to the broader module.

### Learning Outcomes Covered in this Topic:

*   Understanding the operation of astable multivibrator circuits.
*   Analyzing the timing characteristics (frequency, duty cycle) of astable multivibrators.
*   Designing astable multivibrator circuits for specific applications.
*   (Implicitly related to CO1 and CO4): Designing and analyzing circuits that generate specific waveforms, which can be used in timing and oscillation contexts.

### Key Concepts and Definitions:

*   **Multivibrator:** An electronic circuit that generates non-sinusoidal waveforms (square, rectangular, pulse). It has two states, which can be stable, quasi-stable, or unstable.
*   **Astable Multivibrator:** A multivibrator with no stable states. It continuously switches between two quasi-stable states, acting as an oscillator.
*   **Quasi-stable State:** A state that a circuit occupies for a finite period before transitioning to another state.
*   **Switching Action:** The process by which active components (like transistors) turn ON and OFF rapidly, creating distinct voltage levels.
*   **RC Time Constant ($\tau$):** The time it takes for the voltage across a capacitor in an RC circuit to reach approximately 63.2% of the difference between its initial and final voltage. This is a crucial parameter in determining the oscillation frequency of astable multivibrators. $\tau = R \times C$.
*   **Duty Cycle:** The ratio of the ON time (or high output time) to the total period of a periodic waveform. Expressed as a percentage.
*   **Frequency:** The number of complete cycles of the waveform that occur in one second. $f = 1/T$, where $T$ is the period.

### Astable Multivibrator Circuit (BJT-based)

The most common implementation of an astable multivibrator uses two bipolar junction transistors (BJTs) in a cross-coupled configuration.

**Circuit Diagram (Typical):**

[Imagine a circuit diagram with two NPN transistors (Q1 and Q2). The collector of Q1 is coupled to the base of Q2 through a capacitor (C1) and a base resistor (R2). Similarly, the collector of Q2 is coupled to the base of Q1 through a capacitor (C2) and a base resistor (R1). Both emitters are connected to ground, and the collectors are connected to the positive supply voltage ($V_{CC}$) through collector resistors (R_C1 and R_C2). The bases are biased through resistors R1 and R2 respectively.]

**Components:**

*   Two identical transistors (e.g., NPN type like BC547, 2N2222).
*   Two collector resistors ($R_{C1}$, $R_{C2}$).
*   Two base resistors ($R_1$, $R_2$).
*   Two coupling capacitors ($C_1$, $C_2$).
*   Power supply ($V_{CC}$).

**Operation:**

The astable multivibrator operates by alternately switching the two transistors ON and OFF. The timing of these transitions is determined by the charging and discharging of the coupling capacitors through the base resistors.

**Step-by-Step Operation (Assuming Q1 turns ON first):**

1.  **Initial State (Assume Q1 turns ON):** When power is applied, due to component variations, one transistor will turn ON slightly faster than the other. Let's assume Q1 turns ON first.
    *   Q1 turns ON: Its collector voltage ($V_{C1}$) drops rapidly from $V_{CC}$ towards ground (saturation voltage, $V_{CE(sat)}$).
    *   This sudden drop in $V_{C1}$ is coupled through capacitor $C_1$ to the base of Q2.

2.  **Q2 Turns OFF:** The negative-going pulse from $V_{C1}$ to the base of Q2 drives Q2 into cutoff (OFF state).
    *   When Q2 is OFF, its collector voltage ($V_{C2}$) rises from $V_{CE(sat)}$ towards $V_{CC}$.

3.  **Capacitor C2 Charging:** The collector voltage $V_{C2}$ (which is now rising towards $V_{CC}$) is coupled through capacitor $C_2$ to the base of Q1. This positive-going signal helps keep Q1 in saturation.

4.  **Capacitor C1 Discharging and Recharging:**
    *   While Q1 is ON (saturated) and Q2 is OFF (cutoff), capacitor $C_1$ (connected between $V_{C1}$ and base of Q2) begins to recharge.
    *   The voltage across $C_1$ was initially roughly $V_{CC}$ (when Q2 was ON and Q1 was OFF). Now, as Q1 turns ON, $V_{C1}$ drops to $V_{CE(sat)}$. This causes a large negative-going swing at the base of Q2.
    *   The capacitor $C_1$ now starts charging from $V_{CE(sat)}$ (at Q1's collector) through resistor $R_2$ towards $V_{CC}$ (at the base of Q2, which is being held at some positive voltage by the charging $C_2$).
    *   The voltage at the base of Q2 ($V_{B2}$) rises exponentially according to the RC time constant $\tau_1 = R_2 \times C_1$.

5.  **Transition to the Next State:**
    *   As $C_1$ charges, the voltage at the base of Q2 ($V_{B2}$) increases.
    *   When $V_{B2}$ reaches the turn-on voltage of Q2 (approximately 0.7V for silicon BJTs), Q2 begins to turn ON.
    *   As Q2 starts to turn ON, its collector voltage ($V_{C2}$) begins to drop rapidly.

6.  **Q1 Turns OFF:** This sudden drop in $V_{C2}$ is coupled through $C_2$ to the base of Q1, driving Q1 into cutoff (OFF state).
    *   When Q1 is OFF, its collector voltage ($V_{C1}$) rises from $V_{CE(sat)}$ towards $V_{CC}$.

7.  **Capacitor C1 Charging and Recharging:**
    *   Now, $C_2$ (connected between $V_{C2}$ and base of Q1) begins to recharge. The voltage at the base of Q1 ($V_{B1}$) rises exponentially according to the RC time constant $\tau_2 = R_1 \times C_2$.
    *   Simultaneously, $C_1$ is now charging from Q2's collector (which is falling from $V_{CC}$) through $R_2$ to the base of Q2. The role of $C_1$ and $R_2$ is to determine the ON time of Q2.

8.  **Cycle Repeats:** The circuit has now switched states. Q2 is ON, and Q1 is OFF. The process will continue with $C_2$ charging through $R_1$ to turn Q1 ON, leading to Q2 turning OFF, and so on.

**Key to Operation:** The timing of the circuit is dictated by how long it takes for each capacitor to charge through its associated base resistor until the base voltage of the OFF transistor reaches approximately 0.7V.

### Timing Calculations:

For a symmetric astable multivibrator where $R_{C1} = R_{C2} = R_C$, $R_1 = R_2 = R_B$, and $C_1 = C_2 = C$:

*   **Time Q1 is ON (and Q2 is OFF):** This period ($T_1$) is determined by the charging of $C_1$ through $R_2$. Q2 turns ON when $V_{B2}$ reaches approximately 0.7V.
    *   The capacitor $C_1$ charges from an initial voltage (approximately $V_{CC}$ when Q2 was ON) towards $V_{CC}$ via $R_2$.
    *   The collector voltage $V_{C1}$ drops to $V_{CE(sat)}$ when Q1 is ON.
    *   The base voltage of Q2, $V_{B2}(t)$, can be described by:
        $V_{B2}(t) = V_{CC} - (V_{CC} - V_{BE(sat)}) e^{-t/R_2C_1}$  (This is a simplified view; more accurately, it's charging from a negative voltage to 0.7V relative to ground).
    *   A more precise analysis (often found in textbooks like Boylested & Nashelsky or Sedra & Smith) shows that the time $T_1$ for Q2 to turn ON (i.e., $V_{B2}$ to reach $V_{BE(sat)}$ ≈ 0.7V) is given by:
        $T_1 \approx 0.693 R_2 C_1$
    *   This is the time Q1 stays ON.

*   **Time Q2 is ON (and Q1 is OFF):** Similarly, this period ($T_2$) is determined by the charging of $C_2$ through $R_1$. Q1 turns ON when $V_{B1}$ reaches approximately 0.7V.
    *   $T_2 \approx 0.693 R_1 C_2$
    *   This is the time Q2 stays ON.

*   **Total Period (T):** $T = T_1 + T_2$
*   **Frequency (f):** $f = \frac{1}{T} = \frac{1}{T_1 + T_2}$

**For a Symmetric Astable Multivibrator ($R_1=R_2=R_B$, $C_1=C_2=C$):**
*   $T_1 = T_2 = 0.693 R_B C$
*   $T = 2 \times 0.693 R_B C = 1.386 R_B C$
*   $f = \frac{1}{1.386 R_B C} \approx \frac{0.72}{R_B C}$

**Duty Cycle:**
*   For a symmetric astable, the ON time is equal to the OFF time, so the duty cycle is 50%.
*   For an asymmetric astable ($R_1 \neq R_2$ or $C_1 \neq C_2$), the duty cycle will be different from 50%.
    *   Duty Cycle (%) = $\frac{T_{ON}}{T} \times 100\%$
    *   If Q1 is ON for $T_1$ and Q2 is ON for $T_2$, then Duty Cycle = $\frac{T_1}{T_1 + T_2} \times 100\%$ (assuming output is taken from collector of Q1 or Q2).

**Important Note on Calculations:** The factor 0.693 arises from the natural logarithm of 2 (ln(2)), which is involved in the exponential charging equation. Textbooks often present this simplified form. For detailed derivations, refer to chapter 11 of Boylested & Nashelsky or chapter 11 of Sedra & Smith.

### Design Considerations and Examples:

**Objective:** Design an astable multivibrator to produce a square wave with a frequency of 1 kHz and a 50% duty cycle.

**Solution Approach:**
1.  **Symmetry:** For a 50% duty cycle, we need a symmetric astable, meaning $T_1 = T_2$.
2.  **Frequency:** $f = 1 \text{ kHz}$, so $T = 1/1000 \text{ s} = 1 \text{ ms}$.
3.  **Individual ON times:** $T_1 = T_2 = T/2 = 1 \text{ ms} / 2 = 0.5 \text{ ms}$.
4.  **Component Selection:**
    *   Let's assume symmetric component values: $R_1 = R_2 = R_B$ and $C_1 = C_2 = C$.
    *   Using the formula $T_1 \approx 0.693 R_B C$:
        $0.5 \times 10^{-3} \text{ s} \approx 0.693 \times R_B \times C$
    *   We have one equation with two unknowns ($R_B$ and $C$). We need to choose one and calculate the other.
    *   **Choosing C:** Capacitors come in standard values. Let's choose $C = 0.1 \mu F$ (a common value).
    *   **Calculating R_B:**
        $R_B \approx \frac{0.5 \times 10^{-3}}{0.693 \times 0.1 \times 10^{-6}} = \frac{0.5 \times 10^{-3}}{0.0693 \times 10^{-6}} \approx \frac{0.5}{0.0693} \times 10^3 \approx 7.215 \times 10^3 \Omega = 7.215 k\Omega$.
    *   The nearest standard resistor value is $7.5 k\Omega$. Let's use $R_B = 7.5 k\Omega$.
    *   Recalculating the period with $R_B = 7.5 k\Omega$ and $C = 0.1 \mu F$:
        $T_1 = 0.693 \times 7.5 \times 10^3 \times 0.1 \times 10^{-6} = 0.693 \times 0.75 \times 10^{-3} \approx 0.51975 \text{ ms}$.
        $T = 2 \times T_1 \approx 1.0395 \text{ ms}$.
        $f = 1/T \approx 1/1.0395 \times 10^{-3} \approx 962 \text{ Hz}$.
    *   This is close to 1 kHz. If more accuracy is needed, we can adjust $R_B$ or $C$. For example, if we used $R_B = 7.2 k\Omega$, we'd get closer.

5.  **Collector Resistors ($R_C$):** The value of $R_C$ affects the collector current and the speed at which the collector voltage swings.
    *   $R_C$ must be small enough to allow the transistor to saturate. A common rule of thumb is $R_C \leq R_B/10$.
    *   Also, $R_C$ and the supply voltage $V_{CC}$ determine the collector current ($I_C \approx V_{CC}/R_C$). This current should be within the transistor's capabilities and provide enough drive for the next stage.
    *   Let's choose $V_{CC} = 12V$. If we choose $R_C = 1 k\Omega$, then $I_C \approx 12mA$ (when saturated). This is a reasonable value.
    *   If $R_C = 1 k\Omega$, then $R_C < R_B/10$ ($1k\Omega < 7.5k\Omega/10 = 0.75k\Omega$). This condition is NOT met.
    *   Let's choose $R_C = 4.7 k\Omega$. Then $I_C \approx 12V/4.7k\Omega \approx 2.55mA$. This is also reasonable. The condition $R_C \leq R_B/10$ becomes $4.7k\Omega \leq 0.75k\Omega$, still not met.
    *   **Crucial Point:** The choice of $R_C$ *must* ensure the transistor saturates when ON. The base current ($I_B$) must be sufficient to drive the collector current ($I_C$) into saturation ($I_C(sat) = \beta_{min} I_B$).
    *   When Q2 is OFF, $V_{C1} \approx V_{CE(sat)}$. $C_1$ charges through $R_2$. The base voltage of Q2 ($V_{B2}$) rises from a negative value.
    *   When Q1 is ON, $V_{C1} \approx V_{CE(sat)}$. The base current for Q1 is provided by $R_1$ charging $C_2$.
    *   The collector resistor $R_C$ should be chosen such that $V_{CC} - I_C R_C$ is close to $V_{CE(sat)}$ when the transistor is saturated. If $R_C$ is too large, the output voltage swing will be reduced. If $R_C$ is too small, it might draw excessive current.
    *   **Practical Rule of Thumb:** Choose $R_C$ such that $V_{CC}/R_C$ is in the milliampere range, and ensure $R_B$ is sufficiently larger than $R_C$ to guarantee saturation. Let's try $R_C = 4.7 k\Omega$ and $R_B = 47 k\Omega$ for our 1kHz design.
        *   $T_1 \approx 0.693 \times 47 k\Omega \times 0.1 \mu F = 0.693 \times 4.7 \times 10^{-3} \approx 3.25 \text{ ms}$. This is too long for 1kHz.
    *   Let's re-evaluate the $R_B$ calculation for 1kHz, 50% duty cycle, with $C=0.1\mu F$. We need $T_1 = 0.5 \text{ ms}$.
        $R_B = \frac{0.5 \times 10^{-3}}{0.693 \times 0.1 \times 10^{-6}} \approx 7.215 k\Omega$. Let's use $R_B = 7.2 k\Omega$.
    *   Now, let's choose $R_C$. If we want $I_C \approx 5mA$ at saturation with $V_{CC}=10V$, then $R_C = 10V/5mA = 2 k\Omega$.
    *   Check saturation: Base current required for $I_C = 5mA$ with $\beta_{min}=50$ is $I_B = I_C/\beta_{min} = 5mA/50 = 0.1mA$.
    *   The base current available when Q2 is ON is roughly $(V_{CC} - V_{BE(sat)}) / R_B = (10V - 0.7V) / 7.2 k\Omega = 9.3V / 7.2 k\Omega \approx 1.29mA$. This is much larger than 0.1mA, so saturation is guaranteed.
    *   **Final Design Example:** $V_{CC}=10V$, $Q_1, Q_2 = 2N2222$, $R_{C1}=R_{C2}=2 k\Omega$, $R_1=R_2=7.2 k\Omega$, $C_1=C_2=0.1 \mu F$. This design should yield approximately 1kHz frequency with a 50% duty cycle.

**Designing for Asymmetric Duty Cycle:**

**Objective:** Design an astable multivibrator with $f \approx 2 \text{ kHz}$ and a duty cycle of approximately 75% (output high for 75% of the period).

**Solution Approach:**
1.  **Period:** $f = 2 \text{ kHz} \Rightarrow T = 1/2000 \text{ s} = 0.5 \text{ ms}$.
2.  **ON/OFF Times:** For 75% duty cycle, the ON time is $0.75 \times T = 0.75 \times 0.5 \text{ ms} = 0.375 \text{ ms}$, and the OFF time is $0.25 \times T = 0.25 \times 0.5 \text{ ms} = 0.125 \text{ ms}$.
3.  **Assigning ON/OFF:** Let's say Q1 is ON for $T_1 = 0.375 \text{ ms}$ and Q2 is ON for $T_2 = 0.125 \text{ ms}$.
4.  **Component Selection:**
    *   $T_1 \approx 0.693 R_2 C_1$
    *   $T_2 \approx 0.693 R_1 C_2$
    *   We have two equations and four unknowns ($R_1, R_2, C_1, C_2$). We need to make some assumptions or choose values.
    *   Let's keep the capacitors equal: $C_1 = C_2 = C = 0.01 \mu F$ (a smaller capacitor for a higher frequency).
    *   Calculate $R_2$ for $T_1$:
        $R_2 = \frac{T_1}{0.693 C_1} = \frac{0.375 \times 10^{-3}}{0.693 \times 0.01 \times 10^{-6}} = \frac{0.375}{0.00693} \approx 54.1 k\Omega$.
        Let's use a standard value of $R_2 = 56 k\Omega$.
    *   Calculate $R_1$ for $T_2$:
        $R_1 = \frac{T_2}{0.693 C_2} = \frac{0.125 \times 10^{-3}}{0.693 \times 0.01 \times 10^{-6}} = \frac{0.125}{0.00693} \approx 18.0 k\Omega$.
        Let's use a standard value of $R_1 = 18 k\Omega$.
    *   **Duty Cycle Check:**
        $T_1 \approx 0.693 \times 56 k\Omega \times 0.01 \mu F \approx 0.388 \text{ ms}$.
        $T_2 \approx 0.693 \times 18 k\Omega \times 0.01 \mu F \approx 0.125 \text{ ms}$.
        $T = T_1 + T_2 \approx 0.388 + 0.125 = 0.513 \text{ ms}$.
        $f = 1/T \approx 1/0.513 \text{ ms} \approx 1.95 \text{ kHz}$.
        Duty Cycle = $(T_1 / T) \times 100\% = (0.388 / 0.513) \times 100\% \approx 75.6 \%$.
    *   This is a good approximation.

5.  **Collector Resistors ($R_C$):** Let $V_{CC}=12V$. If we choose $R_C = 3.3 k\Omega$, then $I_C \approx 12V / 3.3 k\Omega \approx 3.6mA$.
    *   Saturation check: $I_B = I_C/\beta_{min} = 3.6mA/50 = 0.072mA$.
    *   Base current for Q1 when ON (from $R_1$): $(12V - 0.7V) / 18k\Omega = 11.3V / 18k\Omega \approx 0.628mA$. This is sufficient for saturation.
    *   Base current for Q2 when ON (from $R_2$): $(12V - 0.7V) / 56k\Omega = 11.3V / 56k\Omega \approx 0.202mA$. This is also sufficient for saturation.

**Final Design Example (Asymmetric):** $V_{CC}=12V$, $Q_1, Q_2 = 2N2222$, $R_{C1}=R_{C2}=3.3 k\Omega$, $R_1=18 k\Omega$, $R_2=56 k\Omega$, $C_1=C_2=0.01 \mu F$.

### Waveforms:

*   **Collector Waveforms:** Approximately square waves. When one transistor is ON (saturated), its collector voltage is low ($V_{CE(sat)}$). When it's OFF (cutoff), its collector voltage is high ($V_{CC}$).
*   **Base Waveforms:** Non-sinusoidal. They show exponential charging/discharging behavior. When the transistor is ON, its base voltage is clamped around 0.7V. When it's OFF, the base voltage rises exponentially until it reaches 0.7V, triggering the transition.

### Applications of Astable Multivibrators:

*   **Oscillators:** Generating clock signals for digital circuits.
*   **Timers:** Creating delays or pulse durations.
*   **Pulse Generators:** Producing square or rectangular pulses.
*   **Frequency Dividers:** (When combined with other logic).
*   **Flicker Circuits:** In older display technologies.

### Other Implementations:

While BJT-based circuits are common, astable multivibrators can also be implemented using:

*   **555 Timer IC:** A highly versatile IC that can be configured as an astable multivibrator with simple external RC components. Offers greater stability and ease of use.
*   **Op-Amps:** Using positive feedback to create oscillation.
*   **CMOS Inverters:** Cascading inverters to form oscillators.

### Important Points to Remember:

*   **Two transistors switch alternately.**
*   **Capacitors charge through base resistors to set timing.**
*   **The time constant $\tau = RC$ is key to frequency calculation.**
*   **For symmetric astable, $T \approx 1.386 R_B C$ and duty cycle is 50%.**
*   **Asymmetric values of R or C lead to duty cycles other than 50%.**
*   **Collector resistors ($R_C$) determine collector current and output swing; ensure transistor saturation.**
*   **Base resistor ($R_B$) must be significantly larger than $R_C$ to guarantee saturation.**
*   **The 0.693 factor comes from ln(2).**
*   **The 555 timer IC is a popular and easier alternative for many applications.**

### Practice Questions:

1.  What is the primary characteristic of an astable multivibrator?
2.  In a BJT-based astable multivibrator, which components primarily determine the frequency of oscillation?
3.  If $R_1 = R_2 = 100 k\Omega$ and $C_1 = C_2 = 0.01 \mu F$ in a symmetric astable multivibrator, calculate its approximate frequency.
4.  Design an astable multivibrator using BJTs to produce a continuous square wave with a frequency of 500 Hz and a duty cycle of 60%. Specify component values (choose a common capacitor value and then calculate resistors). Assume $V_{CC} = 9V$ and use general-purpose NPN transistors.
5.  Explain why the base resistor ($R_B$) is generally chosen to be much larger than the collector resistor ($R_C$) in a BJT astable multivibrator.

### Answers:

1.  An astable multivibrator has no stable states; it continuously oscillates between two quasi-stable states.
2.  The base resistors ($R_1, R_2$) and coupling capacitors ($C_1, C_2$) primarily determine the frequency.
3.  $T \approx 1.386 R_B C = 1.386 \times (100 \times 10^3 \Omega) \times (0.01 \times 10^{-6} F) = 1.386 \times 10^{-3} s = 1.386 ms$.
    $f = 1/T \approx 1 / (1.386 \times 10^{-3} s) \approx 721.5 Hz$.
4.  **Design for 500 Hz, 60% Duty Cycle:**
    *   $f = 500 Hz \Rightarrow T = 1/500 s = 2 ms$.
    *   For 60% duty cycle, ON time $T_{ON} = 0.60 \times 2 ms = 1.2 ms$.
    *   OFF time $T_{OFF} = 0.40 \times 2 ms = 0.8 ms$.
    *   Let's assign $T_1$ (time Q1 is ON) = 1.2 ms and $T_2$ (time Q2 is ON) = 0.8 ms.
    *   Choose $C_1 = C_2 = C = 0.1 \mu F$.
    *   Calculate $R_2$ for $T_1$: $R_2 = T_1 / (0.693 C_1) = (1.2 \times 10^{-3} s) / (0.693 \times 0.1 \times 10^{-6} F) \approx 17.3 k\Omega$. Use $R_2 = 18 k\Omega$.
    *   Calculate $R_1$ for $T_2$: $R_1 = T_2 / (0.693 C_2) = (0.8 \times 10^{-3} s) / (0.693 \times 0.1 \times 10^{-6} F) \approx 11.5 k\Omega$. Use $R_1 = 12 k\Omega$.
    *   Check:
        $T_1 \approx 0.693 \times 18 k\Omega \times 0.1 \mu F \approx 1.25 ms$.
        $T_2 \approx 0.693 \times 12 k\Omega \times 0.1 \mu F \approx 0.83 ms$.
        $T = T_1 + T_2 \approx 1.25 + 0.83 = 2.08 ms$.
        $f = 1/T \approx 1/2.08 ms \approx 480 Hz$.
        Duty Cycle = $(T_1 / T) \times 100\% = (1.25 / 2.08) \times 100\% \approx 60.1 \%$.
    *   Choose $R_{C1} = R_{C2}$. For $V_{CC}=9V$, if we want $I_C \approx 3mA$, $R_C = 9V/3mA = 3 k\Omega$. Use $R_C = 3.3 k\Omega$.
    *   **Final Components:** $Q_1, Q_2 = NPN$ general purpose (e.g., BC547), $V_{CC} = 9V$, $R_{C1}=R_{C2}=3.3 k\Omega$, $R_1=12 k\Omega$, $R_2=18 k\Omega$, $C_1=C_2=0.1 \mu F$.
5.  The base resistor ($R_B$) is chosen to be larger than the collector resistor ($R_C$) to ensure that the base current ($I_B$) is always sufficient to drive the transistor into saturation, regardless of the capacitor charging state. If $R_B$ is too small relative to $R_C$, the base current might not reach the required level for saturation when the capacitor is at its lowest charging voltage, leading to improper switching and potential failure to oscillate or unstable operation. Specifically, the base current drawn when the transistor is ON is approximately $(V_{CC} - V_{BE(sat)})/R_B$. This current must be greater than $I_C(sat)/\beta_{min}$, where $I_C(sat) \approx V_{CC}/R_C$. A common guideline is $R_B \gg R_C$ or $R_B \geq 10 \times R_C$.
