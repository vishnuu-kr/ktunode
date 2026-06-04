---
title: "Schmitt Trigger."
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f7f"
status: "completed"
scrapedAt: "2026-05-23T16:18:38.806Z"
---
# SOLID STATE DEVICES - Module 1: Wave Shaping Circuits

## Topic: Schmitt Trigger

**Course Outcomes Alignment:**

*   **CO1: Design and analyze RC circuits and BJT biasing circuits (Knowledge Level: K4)** - While not directly an RC circuit, understanding the switching behavior and hysteresis of a Schmitt Trigger is crucial for designing circuits that process signals. This topic builds upon the foundational understanding of signal behavior.
*   **General Relevance:** Schmitt triggers are fundamental building blocks in digital electronics and signal conditioning, which are often discussed in the context of solid-state devices. Their ability to clean up noisy signals and convert analog signals to digital pulses makes them essential.

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Define a Schmitt trigger and its purpose.
*   Explain the concept of hysteresis and its significance in Schmitt triggers.
*   Analyze the operation of a Schmitt trigger circuit.
*   Identify the key parameters of a Schmitt trigger, such as upper threshold voltage (VUT) and lower threshold voltage (VLT).
*   Understand the applications of Schmitt triggers in wave shaping and signal conditioning.
*   (Implicitly) Relate the switching behavior to the concepts of charging and discharging of capacitors in RC circuits, which are covered earlier in the module.

---

### 1. Introduction to Schmitt Triggers

A **Schmitt trigger** is a regenerative comparator circuit that converts a slowly changing or noisy analog input signal into a clean, sharp digital output signal. Its defining characteristic is **hysteresis**, which means it has two different switching thresholds: one for when the input is increasing and another for when it is decreasing.

**Key Concepts:**

*   **Comparator:** A circuit that compares two input voltages and outputs a digital signal (high or low) indicating which input is larger.
*   **Hysteresis:** The property of a system where its response depends not only on the current input but also on its past inputs. In Schmitt triggers, this manifests as two distinct threshold levels.
*   **Regenerative Feedback:** Positive feedback that causes the circuit to switch rapidly between its stable states once a threshold is crossed.

**Purpose:**

*   **Noise Immunity:** Hysteresis prevents spurious switching due to noise on the input signal.
*   **Wave Shaping:** Converts sine waves, ramp waves, or noisy pulses into clean square or rectangular waves.
*   **Level Shifting:** Adapts input signals to different logic levels.

---

### 2. The Concept of Hysteresis

Hysteresis is the core principle behind a Schmitt trigger's operation.

**Key Concepts:**

*   **Upper Threshold Voltage (VUT) / Trigger-On Voltage:** The voltage level the input signal must cross in the *rising* direction to switch the output from low to high.
*   **Lower Threshold Voltage (VLT) / Trigger-Off Voltage:** The voltage level the input signal must cross in the *falling* direction to switch the output from high to low.
*   **Hysteresis Voltage (VH):** The difference between the upper and lower threshold voltages ($V_H = V_{UT} - V_{LT}$). A larger hysteresis voltage means greater noise immunity.

**Analogy:** Imagine a thermostat. It doesn't turn the heating on exactly at 20°C and off exactly at 20°C. It might turn on at 19.5°C and off at 20.5°C. This difference in temperature is the hysteresis, which prevents the heater from rapidly cycling on and off due to minor temperature fluctuations.

---

### 3. Operation of a Basic Schmitt Trigger (e.g., using an Op-Amp)

While the module focuses on RC filters, Schmitt triggers are commonly implemented using operational amplifiers (Op-Amps) or transistors. Understanding the Op-Amp version provides a clear conceptual basis.

**Circuit Diagram (Conceptual using Op-Amp):**

```
       R1
 Vin ---/\/\/----(-)-----.
                  |       |
                  |       |  Op-Amp
      +-------/\/\/----+---(+)---- Vout
      |       R2      |
      |               |
     Vout ---------- Gnd
```

*   **R1 and R2:** Feedback resistors.
*   **Op-Amp:** Configured as a non-inverting comparator with positive feedback.

**Operation:**

1.  **Initial State:** Assume the output $V_{out}$ is low (e.g., near $V_{EE}$ for a bipolar Op-Amp or $0V$ for a CMOS Op-Amp). The input to the non-inverting terminal (+) is determined by the voltage divider formed by $R_1$ and $R_2$ using the output voltage.
    *   Voltage at non-inverting terminal: $V_+ = V_{out} \frac{R_1}{R_1 + R_2}$
2.  **Input Rising:** As $V_{in}$ increases, when $V_{in}$ crosses a certain threshold, the voltage at the non-inverting terminal will exceed the voltage at the inverting terminal (initially $0V$ if nothing is connected there, or a reference voltage). This causes the Op-Amp output $V_{out}$ to switch to its high state (e.g., near $V_{CC}$).
3.  **Threshold Calculation (When Output is High):** When $V_{out} = V_{High}$, the voltage at the non-inverting terminal is $V_+ = V_{High} \frac{R_1}{R_1 + R_2}$. This becomes the new **Upper Threshold Voltage ($V_{UT}$)**.
    *   $V_{UT} = V_{High} \frac{R_1}{R_1 + R_2}$
4.  **Input Falling:** As $V_{in}$ continues to decrease from $V_{High}$, the Op-Amp output remains high. For the output to switch back to low, $V_{in}$ must fall to a *lower* threshold.
5.  **Threshold Calculation (When Output is Low):** When $V_{out} = V_{Low}$ (e.g., near $0V$), the voltage at the non-inverting terminal is $V_+ = V_{Low} \frac{R_1}{R_1 + R_2}$. This becomes the new **Lower Threshold Voltage ($V_{LT}$)**.
    *   $V_{LT} = V_{Low} \frac{R_1}{R_1 + R_2}$
6.  **Hysteresis Voltage:** $V_H = V_{UT} - V_{LT} = (V_{High} - V_{Low}) \frac{R_1}{R_1 + R_2}$.

**Important Points to Remember (Op-Amp Schmitt Trigger):**

*   The positive feedback ($R_1$ and $R_2$) is crucial for regeneration and hysteresis.
*   The ratio of feedback resistors determines the width of the hysteresis loop.
*   The switching thresholds are relative to the Op-Amp's supply voltages ($V_{High}$ and $V_{Low}$).

---

### 4. Schmitt Triggers using Transistors (BJT)

Schmitt triggers can also be implemented using Bipolar Junction Transistors (BJTs). These circuits often use a specific configuration to achieve hysteresis.

**Common BJT Schmitt Trigger Configuration:**

A common implementation involves two BJTs, where one transistor's collector is directly connected to the other transistor's base. This creates a positive feedback loop.

**Circuit Diagram (Illustrative - often variations exist):**

```
      Vcc
       |
      R1
       |
 Vin --C1---> Base1 (Q1)
       |      |
      R2     Collector1 (Q1) --+---> Base2 (Q2)
       |      |                |
      Gnd    Emitter1 (Q1) ---+
              |
              Emitter2 (Q2) --- Gnd
              |
            Collector2 (Q2) ---> Vout
```

**(Note: This is a simplified representation. Actual circuits might involve additional resistors for proper biasing.)**

**Operation (Conceptual for BJT Schmitt Trigger):**

The operation is more complex than with Op-Amps due to the non-linear characteristics of BJTs. However, the core idea remains:

1.  **Positive Feedback:** The collector current of one transistor influences the base current (and thus the state) of the other, creating positive feedback.
2.  **Switching States:** When the input voltage ($V_{in}$) rises, it eventually turns on the first transistor (Q1). This causes a voltage drop across its collector resistor, which can then drive the base of the second transistor (Q2) towards conduction.
3.  **Hysteresis:** Due to the switching characteristics of the BJTs and the feedback network, distinct turn-on and turn-off voltages arise for the input signal. The current switching between the collectors of Q1 and Q2 creates the output signal.

**Analysis of BJT Schmitt Triggers (More complex):**

*   Analyzing BJT Schmitt triggers typically involves calculating the collector currents and base currents at the switching points.
*   The threshold voltages ($V_{UT}$ and $V_{LT}$) are dependent on the transistor parameters (hFE, Vbe(on)), resistor values, and supply voltage ($V_{CC}$).
*   Detailed analysis often involves applying KVL and KCL at the switching points, similar to BJT biasing analysis (CO1).

**Example from Textbooks:**

*   **Boylestad & Nashelsky:** Chapters on transistor switching circuits and digital logic gates often cover basic Schmitt trigger implementations using BJTs as an example of regenerative circuits. They would detail the DC analysis required to determine the threshold voltages.
*   **Sedra & Smith:** In their sections on CMOS logic gates and sequential circuits, they might illustrate Schmitt trigger behavior using CMOS inverters or NAND gates, highlighting the input-voltage transfer characteristic with hysteresis.

---

### 5. Applications of Schmitt Triggers

Schmitt triggers are versatile components used in various electronic circuits.

**Key Applications:**

*   **Debouncing Buttons:** Mechanical switches often "bounce" (make and break contact multiple times) when pressed or released. A Schmitt trigger connected to a button input filters out these rapid transitions, providing a clean single pulse.
*   **Oscillator Circuits (e.g., Relaxation Oscillators):** By combining a Schmitt trigger with an RC network, oscillators can be created. The capacitor charges and discharges through the resistor, and the Schmitt trigger's hysteresis causes it to oscillate between its high and low states. This is a direct link to the RC circuits in the module.
*   **Signal Conditioning:** Cleaning up noisy signals from sensors or other analog sources before they are fed into digital logic circuits.
*   **Frequency Division:** Can be used in conjunction with other logic gates to divide the frequency of a clock signal.
*   **Pulse Generation:** Creating pulses of a specific width and repetition rate.

---

### 6. Key Parameters and Design Considerations

When designing or analyzing a Schmitt trigger, several parameters are important.

**Key Parameters:**

*   **$V_{UT}$ (Upper Threshold Voltage):** Input voltage to switch output from LOW to HIGH.
*   **$V_{LT}$ (Lower Threshold Voltage):** Input voltage to switch output from HIGH to LOW.
*   **$V_H = V_{UT} - V_{LT}$ (Hysteresis Voltage):** The difference between the thresholds, indicating noise immunity.
*   **$V_{MT} = (V_{UT} + V_{LT}) / 2$ (Midpoint Threshold Voltage):** The center of the hysteresis loop.
*   **Slew Rate:** The rate at which the output voltage changes.
*   **Propagation Delay:** The time taken for the output to change after the input crosses a threshold.

**Design Considerations:**

*   **Noise Margin:** The hysteresis voltage ($V_H$) should be greater than the expected noise amplitude on the input signal.
*   **Speed:** The switching speed of the active components (Op-Amp, transistors) and the RC time constants affect the maximum operating frequency.
*   **Power Consumption:** The choice of active components and resistor values impacts power usage.
*   **Output Voltage Levels:** The output high and low voltage levels should be compatible with the subsequent logic circuits.
*   **Input Signal Characteristics:** The amplitude, frequency, and waveform of the input signal will influence the choice of circuit design.

---

### 7. Practice Questions and Exercises

**(Knowledge Level: K4 - Design and Analyze)**

**Question 1:**

A Schmitt trigger circuit using an Op-Amp has the following components: $V_{CC} = +15V$, $V_{EE} = -15V$, $R_1 = 10k\Omega$, $R_2 = 10k\Omega$. The Op-Amp's saturation output voltages are $V_{High} = +13V$ and $V_{Low} = -13V$. An input sine wave with an amplitude of $5V$ and a DC offset of $0V$ is applied to the circuit.

a) Calculate the Upper Threshold Voltage ($V_{UT}$) and Lower Threshold Voltage ($V_{LT}$).
b) Calculate the Hysteresis Voltage ($V_H$).
c) Sketch the input and output waveforms.

**Answer 1:**

a)
*   $V_{UT} = V_{High} \frac{R_1}{R_1 + R_2} = +13V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = +13V \times 0.5 = +6.5V$
*   $V_{LT} = V_{Low} \frac{R_1}{R_1 + R_2} = -13V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = -13V \times 0.5 = -6.5V$

b)
*   $V_H = V_{UT} - V_{LT} = +6.5V - (-6.5V) = 13V$

c)
*   **Input Waveform:** A sine wave oscillating between +5V and -5V.
*   **Output Waveform:** A square wave.
    *   When input rises from -5V and crosses +6.5V, output switches from -13V to +13V.
    *   When input falls from +5V and crosses -6.5V, output switches from +13V to -13V.
    *   Since the input only reaches +/-5V, and the thresholds are +/-6.5V, the output will remain at -13V for the given input. If the input amplitude was higher, say 8V, then it would switch. Let's re-evaluate assuming the input amplitude is sufficient for switching. If the input sine wave had an amplitude of 8V (oscillating between +8V and -8V):
        *   Input rises from -8V, crosses +6.5V: Output switches from -13V to +13V.
        *   Input falls from +8V, crosses -6.5V: Output switches from +13V to -13V.
        *   The output would be a square wave switching between +13V and -13V.

**Question 2:**

Explain why a Schmitt trigger is preferred over a simple comparator for cleaning up noisy signals.

**Answer 2:**

A simple comparator will switch its output every time the input signal crosses the single threshold voltage. If the input signal has noise, it can cross this threshold multiple times even if the underlying signal is not changing state. This leads to spurious output transitions. A Schmitt trigger, with its two threshold voltages ($V_{UT}$ and $V_{LT}$) and hysteresis, requires the input signal to move a significant amount beyond a threshold before switching. This "dead zone" (the hysteresis voltage $V_H$) effectively filters out small noise fluctuations, ensuring that the output only switches when the input signal has definitively crossed the intended threshold.

---

### 8. Important Points to Remember

*   **Hysteresis is Key:** The presence of two distinct switching thresholds is the defining characteristic of a Schmitt trigger.
*   **Noise Immunity:** Hysteresis directly provides noise immunity. The larger the hysteresis voltage ($V_H$), the more noise the circuit can tolerate.
*   **Wave Shaping Tool:** Schmitt triggers are excellent for converting non-rectangular waveforms into clean digital square waves.
*   **Positive Feedback:** Most Schmitt trigger implementations utilize positive feedback to achieve regeneration and hysteresis.
*   **Applications:** Remember common applications like debouncing, oscillators, and signal conditioning.
*   **BJT vs. Op-Amp:** While Op-Amps provide a more straightforward analysis, BJT implementations are common in discrete and integrated circuits, requiring more detailed DC analysis.

---
