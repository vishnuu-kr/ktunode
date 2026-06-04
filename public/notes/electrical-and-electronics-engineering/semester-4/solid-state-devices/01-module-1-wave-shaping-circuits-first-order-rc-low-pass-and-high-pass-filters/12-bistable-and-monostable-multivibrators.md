---
title: "Bistable and Monostable multivibrators"
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f7e"
status: "completed"
scrapedAt: "2026-05-23T16:18:38.018Z"
---
# SOLID STATE DEVICES - Module 1: Wave Shaping Circuits

## Topic: Bistable and Monostable Multivibrators

---

### **Introduction to Multivibrators**

Multivibrators are electronic circuits that generate non-sinusoidal waveforms, typically square or rectangular waves. They are characterized by having two distinct states, and they can transition between these states based on input signals or internal feedback. They are fundamental building blocks in digital electronics for timing, counting, and memory applications.

While the initial topic description mentions RC low-pass and high-pass filters, this section focuses on multivibrators, which are often discussed in conjunction with wave shaping as they create specific waveform shapes.

---

### **1. Bistable Multivibrators (Flip-Flops)**

**1.1 Key Concepts and Definitions**

*   **Bistable:** Means having two stable states. A bistable multivibrator remains in its current state indefinitely until an external trigger (input pulse) causes it to switch to the other stable state. Once switched, it stays in the new state until another trigger arrives.
*   **Memory Element:** Due to their ability to hold one of two states, bistable multivibrators act as basic memory elements in digital systems.
*   **Triggering:** The process of applying a signal to switch the multivibrator from one stable state to another.
*   **States:** Typically represented as HIGH (logic 1) and LOW (logic 0) or ON and OFF.

**1.2 Types of Bistable Multivibrators**

Bistable multivibrators can be implemented using various active components, including transistors (BJT or FET) or integrated circuits (ICs). The core principle involves positive feedback and switching behavior.

**1.2.1 Transistorized Bistable Multivibrator (Common Emitter Configuration)**

This is a classic implementation often found in introductory solid-state device courses.

*   **Circuit Configuration:** Typically uses two NPN transistors, cross-coupled. One transistor's collector is connected to the base of the other through a resistor, and vice versa.

*   **Operation:**
    *   **State 1:** One transistor (e.g., Q1) is ON (saturated), and the other (Q2) is OFF (cut-off).
    *   **State 2:** Q2 is ON (saturated), and Q1 is OFF (cut-off).
    *   **Switching:** A trigger pulse applied to the base of either transistor can force it to turn ON, which in turn forces the other transistor OFF, thus switching the state.

*   **Triggering Mechanisms:**
    *   **Edge Triggering:** The circuit changes state on the rising or falling edge of the trigger pulse.
    *   **Level Triggering:** The circuit changes state when the trigger pulse reaches a certain voltage level.

**1.3 Analysis and Design Considerations**

*   **Stability:** Ensuring that the circuit reliably stays in one state until triggered.
*   **Switching Speed:** The time it takes for the circuit to transition from one state to another. This is influenced by transistor characteristics, parasitic capacitances, and load.
*   **Trigger Sensitivity:** The amplitude and shape of the trigger pulse required for reliable switching.
*   **Fan-out:** The number of similar circuits that can be driven by the output of the multivibrator.

**1.4 Examples and Applications**

*   **Memory Latches:** Storing a single bit of information.
*   **Frequency Division:** By feeding a clock signal and triggering appropriately, a bistable multivibrator can divide the input frequency by 2.
*   **Digital Counters:** As the fundamental element in sequential logic circuits.

**1.5 Textbook References:**

*   **Boylested & Nashelsky (11/e):** Often covers flip-flops and their basic operation as memory elements within digital logic sections.
*   **Sedra & Smith (6/e):** Might discuss transistor-level implementations or the use of logic gates to build bistable elements.
*   **Bell (5/e):** Likely provides clear explanations of transistor-based multivibrator circuits.

---

### **2. Monostable Multivibrators (One-Shot Multivibrators)**

**2.1 Key Concepts and Definitions**

*   **Monostable:** Means having only one stable state. The other state is temporary or "quasi-stable."
*   **One-Shot:** The circuit produces a single output pulse of a predetermined duration when triggered. After the pulse, it automatically returns to its stable state.
*   **Pulse Width (T):** The duration of the temporary output pulse. This is a critical design parameter.
*   **Quasi-stable State:** The temporary state where the circuit remains for a specific period after triggering.
*   **Stable State:** The state the circuit returns to after the quasi-stable period.

**2.2 Circuit Configuration (RC Triggered Monostable Multivibrator)**

A common implementation uses two transistors and an RC timing network.

*   **Circuit Components:** Two transistors (e.g., Q1 and Q2), resistors, capacitors, and usually a base resistor for the quasi-stable state transistor.

*   **Operation:**
    1.  **Stable State:** Q1 is ON (saturated), and Q2 is OFF (cut-off).
    2.  **Triggering:** A trigger pulse (often negative) is applied to the base of Q1, forcing it OFF.
    3.  **Quasi-stable State:** This turn-off of Q1 causes Q2 to turn ON. The capacitor, which was previously charged to a voltage that kept Q2 OFF, now starts to discharge through Q2 and the timing resistor (R).
    4.  **Pulse Generation:** The output voltage is typically taken from the collector of Q2. As Q2 turns ON, the collector voltage drops, creating the output pulse.
    5.  **Return to Stable State:** When the voltage across the capacitor falls to a level that allows Q1 to turn ON again, the circuit snaps back to its stable state. Q2 turns OFF, and the capacitor recharges to its initial state.

**2.3 Pulse Width Calculation (RC Timing)**

The duration of the quasi-stable state (pulse width, T) is primarily determined by the RC time constant. For a typical transistor monostable multivibrator, the pulse width is approximately:

$T \approx RC \times \ln(\frac{V_{BB} + V_{BE(sat)}}{V_{BE(sat)}})$

Where:
*   $R$ is the timing resistor connected to the base of the quasi-stable transistor.
*   $C$ is the timing capacitor.
*   $V_{BB}$ is the supply voltage for the base circuit.
*   $V_{BE(sat)}$ is the base-emitter voltage when the transistor is saturated.

**Important Note:** For simplicity in many introductory analyses, if the trigger level for turning Q1 ON is very low (e.g., close to 0V), the pulse width can be approximated as $T \approx RC \times \ln(2) \approx 0.693RC$. This approximation is valid when $V_{BB} \gg V_{BE(sat)}$.

**2.4 Triggering Mechanisms**

*   **Edge Triggering:** The circuit triggers on a specific edge (usually negative-going) of the input pulse.
*   **Level Triggering:** The circuit triggers when the input signal crosses a certain voltage threshold.

**2.5 Design Considerations**

*   **Pulse Width Accuracy:** The stability and accuracy of the output pulse width depend on the tolerance of R and C, and the stability of the supply voltages.
*   **Triggering Reliability:** Ensuring that the circuit triggers reliably with the desired input signal.
*   **Recovery Time:** The time it takes for the capacitor to recharge to its initial state after the quasi-stable period. This limits the maximum repetition rate of triggered pulses.
*   **Component Selection:** Choosing appropriate transistors with sufficient speed and gain, and selecting R and C values that provide the desired pulse width.

**2.6 Examples and Applications**

*   **Pulse Generation:** Creating pulses of specific durations for various electronic systems.
*   **Time Delay Circuits:** Introducing a delay before an action occurs.
*   **Debouncing Switches:** Generating a single clean pulse from a mechanical switch that can bounce.
*   **Waveform Conversion:** Converting other waveforms into a fixed-width pulse.

**2.7 Textbook References:**

*   **Boylested & Nashelsky (11/e):** Provides detailed analysis of transistorized multivibrators and their RC timing mechanisms.
*   **Sedra & Smith (6/e):** Might discuss monostable circuits in the context of IC design or as a precursor to more complex sequential logic.
*   **Bell (5/e):** Offers clear explanations of the operating principles and calculations for pulse width.
*   **Millman & Halkias (2/e):** A classic reference that thoroughly covers multivibrator circuits.

---

### **3. Relationship to First-Order RC Filters**

While bistable and monostable multivibrators are not direct implementations of first-order RC low-pass or high-pass filters, the **RC timing networks** used in monostable multivibrators are directly related to the transient response of first-order RC circuits.

*   **Capacitor Charging/Discharging:** The core of the monostable multivibrator's timing mechanism relies on the charging and discharging of a capacitor through a resistor. This is the fundamental behavior of a first-order RC circuit.
*   **Time Constant (τ = RC):** The time constant dictates how quickly the capacitor charges or discharges, and thus, the duration of the monostable pulse. This is analogous to how the time constant affects the rise and fall times of signals in RC filters.
*   **Trigger Level:** The point at which the capacitor voltage crosses a specific threshold (e.g., to turn on a transistor) is akin to how a signal's amplitude changes over time in an RC circuit.

**Important Point:** The multivibrator circuit uses the RC charging/discharging characteristic to control the *duration* of a state, whereas RC filters use it to *shape the frequency response* of continuous signals. However, the underlying physics of the RC time constant is the same.

---

### **Course Outcome Alignment**

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)**
    *   This topic directly aligns with analyzing and designing circuits that use RC timing networks (related to RC circuits) and often employ BJT biasing for their operation. Understanding the transient behavior of RC circuits is crucial for calculating the pulse width of monostable multivibrators.

---

### **Practice Questions and Exercises**

**Question 1:**
A monostable multivibrator uses a timing resistor $R = 100 \, k\Omega$ and a timing capacitor $C = 0.01 \, \mu F$. If the supply voltage $V_{BB}$ is 12V and $V_{BE(sat)}$ is approximately 0.7V, calculate the approximate pulse width generated by the circuit.

**Answer 1:**
Using the formula $T \approx RC \times \ln(\frac{V_{BB} + V_{BE(sat)}}{V_{BE(sat)}})$:
$R = 100 \times 10^3 \, \Omega$
$C = 0.01 \times 10^{-6} \, F$
$V_{BB} = 12 \, V$
$V_{BE(sat)} = 0.7 \, V$

$T \approx (100 \times 10^3 \, \Omega) \times (0.01 \times 10^{-6} \, F) \times \ln(\frac{12 \, V + 0.7 \, V}{0.7 \, V})$
$T \approx (1 \times 10^{-3} \, s) \times \ln(\frac{12.7}{0.7})$
$T \approx 1 \, ms \times \ln(18.14)$
$T \approx 1 \, ms \times 2.898$
$T \approx 2.898 \, ms$

Alternatively, using the simplified approximation $T \approx 0.693RC$ (if we assume $V_{BB} \gg V_{BE(sat)}$):
$T \approx 0.693 \times (100 \times 10^3 \, \Omega) \times (0.01 \times 10^{-6} \, F)$
$T \approx 0.693 \times 10^{-3} \, s$
$T \approx 0.693 \, ms$

*Note: The simplified approximation gives a significantly different answer because $V_{BB}$ is not much larger than $V_{BE(sat)}$ in this case. The more accurate formula should be used.*

**Question 2:**
What is the primary difference between a bistable and a monostable multivibrator in terms of their stable states?

**Answer 2:**
A **bistable** multivibrator has **two stable states** and will remain in its current state indefinitely until triggered to switch to the other state.
A **monostable** multivibrator has only **one stable state** and a temporary, quasi-stable state. It returns to its stable state automatically after a predetermined time interval following a trigger.

**Question 3:**
Describe the function of the RC timing network in a monostable multivibrator.

**Answer 3:**
The RC timing network (resistor and capacitor) in a monostable multivibrator is responsible for determining the duration of the quasi-stable state, which is the width of the output pulse. After triggering, the capacitor discharges through the resistor, and the time it takes for the capacitor voltage to fall to a specific threshold determines when the circuit reverts to its stable state. This timing is governed by the RC time constant.

**Question 4:**
If you need a circuit that acts as a memory element, which type of multivibrator would you choose and why?

**Answer 4:**
You would choose a **bistable multivibrator**. This is because bistable multivibrators have two stable states and can hold a particular state (representing a '0' or '1') until an external signal changes it. This "holding" capability is the essence of memory.

---

### **Important Points to Remember**

*   **Bistable:** Two stable states, acts as a memory element, triggered to change states.
*   **Monostable:** One stable state, one quasi-stable state, produces a timed pulse upon triggering.
*   **Pulse Width (Monostable):** Primarily determined by the RC time constant, $T \approx RC \times \ln(\frac{V_{supply} + V_{BE(sat)}}{V_{BE(sat)}})$.
*   **Positive Feedback:** Essential for the rapid switching and latching behavior in both types of multivibrators.
*   **Applications:** Timing, counting, memory, pulse generation, delay circuits.
*   **RC Timing in Monostable:** Directly utilizes the transient response characteristics of first-order RC circuits.

---
