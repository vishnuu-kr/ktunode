---
title: "Familiarization of Operational amplifiers - Inverting and Non inverting amplifiers, Integrator, Differentiator - frequency response, Adder, Comparators"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe89d"
status: "completed"
scrapedAt: "2026-05-23T17:49:52.924Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 1: Familiarization of Operational Amplifiers

### Topic: Familiarization of Operational Amplifiers - Inverting and Non-inverting Amplifiers, Integrator, Differentiator - Frequency Response, Adder, Comparators

---

### 1. Introduction to Operational Amplifiers (Op-Amps)

**Definition:** An operational amplifier (Op-Amp) is a high-gain, direct-coupled, differential amplifier with a single ended output. It is a versatile building block for a wide range of analog circuits.

**Key Characteristics (Ideal Op-Amp):**

*   **Infinite Open-loop Gain ($A_{OL}$):** The output voltage is infinitely amplified with respect to the differential input voltage.
*   **Infinite Input Impedance ($Z_{in}$):** No current flows into the input terminals.
*   **Zero Output Impedance ($Z_{out}$):** The output voltage is independent of the load.
*   **Infinite Bandwidth:** The op-amp can amplify signals of all frequencies.
*   **Zero Input Offset Voltage:** When the differential input voltage is zero, the output voltage is also zero.
*   **Infinite Common-Mode Rejection Ratio (CMRR):** The op-amp amplifies only the difference between the input signals, rejecting any common signals.
*   **Infinite Slew Rate:** The output voltage can change instantaneously.

**Practical Op-Amp vs. Ideal Op-Amp:**

*   **Finite Gain:** Practical op-amps have very high but finite open-loop gain.
*   **Finite Input Impedance:** Practical op-amps have high but finite input impedance.
*   **Non-zero Output Impedance:** Practical op-amps have low but non-zero output impedance.
*   **Limited Bandwidth:** Practical op-amps have limited bandwidth.
*   **Input Offset Voltage:** Practical op-amps have a small input offset voltage.
*   **Finite CMRR:** Practical op-amps have high but finite CMRR.
*   **Finite Slew Rate:** Practical op-amps have a finite slew rate.

**Basic Op-Amp Symbol and Terminals:**

*   **Inverting Input (-):** When a signal is applied to this terminal, the output is inverted (180-degree phase shift).
*   **Non-inverting Input (+):** When a signal is applied to this terminal, the output is in phase with the input.
*   **Output:** The amplified differential input voltage.
*   **Power Supply Terminals ($+V_{CC}$ and $-V_{EE}$):** Required for operation.

**Virtual Short Concept (for Negative Feedback configurations):**

When an op-amp is used in a negative feedback configuration, the op-amp tries to maintain the voltage difference between its inverting and non-inverting inputs at zero. This means:

*   $V_+ \approx V_-$

This is called the **virtual short** or **virtual ground** (if the non-inverting input is grounded).

**Virtual Ground Concept:**

If the non-inverting input ($V_+$) is connected to ground ($V_+ = 0$), and the op-amp is in a negative feedback configuration, then the inverting input ($V_-$) will also be at approximately 0V, acting as a virtual ground.

---

### 2. Inverting Amplifier

**Circuit Configuration:** The output signal is 180 degrees out of phase with the input signal. The input signal is applied to the inverting input terminal.

**Circuit Diagram:**

```
      Rin
Vin ----/\/\/\----(-)------ Vout
               |  (+)------ GND
               |
              Rf
               |
               ---
```

**Derivation of Gain:**

Using the virtual short concept ($V_- \approx V_+$) and assuming $V_+ = 0$ (grounded non-inverting input):

1.  $V_- = 0$
2.  Current through $R_{in}$ ($I_{in}$): $I_{in} = \frac{V_{in} - V_-}{R_{in}} = \frac{V_{in}}{R_{in}}$
3.  Current through $R_f$ ($I_f$): $I_f = \frac{V_- - V_{out}}{R_f} = \frac{0 - V_{out}}{R_f} = \frac{-V_{out}}{R_f}$
4.  Since the input impedance of the op-amp is ideally infinite, no current flows into the op-amp's inverting input. Therefore, by Kirchhoff's Current Law (KCL) at the inverting input node: $I_{in} = I_f$
5.  $\frac{V_{in}}{R_{in}} = \frac{-V_{out}}{R_f}$
6.  **Voltage Gain ($A_v$) = $\frac{V_{out}}{V_{in}} = -\frac{R_f}{R_{in}}$**

**Key Features:**

*   **Inverting Gain:** The output voltage is inverted with respect to the input.
*   **Gain Control:** The gain is determined by the ratio of feedback resistor ($R_f$) to input resistor ($R_{in}$).
*   **Input Impedance:** The input impedance of the circuit is approximately equal to $R_{in}$ because the inverting input is a virtual ground.
*   **Bandwidth:** The bandwidth is inversely proportional to the gain. Higher gain means lower bandwidth.

**Textbook Reference:** Choudhary & Jain, Chapter 3, Section 3.2.1 (Inverting Amplifier).

---

### 3. Non-Inverting Amplifier

**Circuit Configuration:** The output signal is in phase with the input signal. The input signal is applied to the non-inverting input terminal.

**Circuit Diagram:**

```
      Rin
GND ---/\/\/\----(-)------ Vout
               |  (+)------ Vin
               |
              Rf
               |
               ---
```

**Derivation of Gain:**

Using the virtual short concept ($V_- \approx V_+$):

1.  $V_+ = V_{in}$
2.  Therefore, $V_- = V_{in}$
3.  Current through $R_f$ ($I_f$): $I_f = \frac{V_- - V_{out}}{R_f} = \frac{V_{in} - V_{out}}{R_f}$
4.  Current through $R_{in}$ ($I_{in}$): $I_{in} = \frac{V_- - GND}{R_{in}} = \frac{V_{in}}{R_{in}}$
5.  Since the input impedance of the op-amp is ideally infinite, no current flows into the op-amp's inverting input. Therefore, by KCL at the inverting input node: $I_f = I_{in}$
6.  $\frac{V_{in} - V_{out}}{R_f} = \frac{V_{in}}{R_{in}}$
7.  $V_{in} - V_{out} = V_{in} \frac{R_f}{R_{in}}$
8.  $V_{out} = V_{in} - V_{in} \frac{R_f}{R_{in}} = V_{in} \left(1 - \frac{R_f}{R_{in}}\right)$
    *   Wait, this isn't right. Let's re-evaluate step 5. The current flows *from* $V_-$ *through* $R_{in}$ to ground.
    *   Correct KCL at the inverting input node: The current flowing *out* of the node through $R_f$ and $R_{in}$ must sum to zero (or the current flowing *into* the node through $R_f$ and $R_{in}$ equals current flowing *out* through the op-amp input, which is zero).
    *   Let's consider the current flowing from the output through $R_f$ to $V_-$, and then from $V_-$ through $R_{in}$ to ground.
    *   Current through $R_f$ ($I_{Rf}$) = $\frac{V_{out} - V_-}{R_f}$
    *   Current through $R_{in}$ ($I_{Rin}$) = $\frac{V_- - 0}{R_{in}}$
    *   Since no current enters the op-amp input ($V_-$), $I_{Rf} = I_{Rin}$
    *   $\frac{V_{out} - V_-}{R_f} = \frac{V_-}{R_{in}}$
    *   Substitute $V_- = V_{in}$: $\frac{V_{out} - V_{in}}{R_f} = \frac{V_{in}}{R_{in}}$
    *   $V_{out} - V_{in} = V_{in} \frac{R_f}{R_{in}}$
    *   $V_{out} = V_{in} + V_{in} \frac{R_f}{R_{in}} = V_{in} \left(1 + \frac{R_f}{R_{in}}\right)$
9.  **Voltage Gain ($A_v$) = $\frac{V_{out}}{V_{in}} = 1 + \frac{R_f}{R_{in}}$**

**Key Features:**

*   **Non-inverting Gain:** The output voltage is in phase with the input.
*   **Gain Control:** The gain is determined by the ratio of feedback resistor ($R_f$) to input resistor ($R_{in}$). The gain is always greater than or equal to 1.
*   **Input Impedance:** The input impedance of the circuit is very high, ideally infinite, because the input signal is directly connected to the non-inverting input of the op-amp.
*   **Bandwidth:** Similar to the inverting amplifier, bandwidth is inversely proportional to gain.

**Textbook Reference:** Choudhary & Jain, Chapter 3, Section 3.2.2 (Non-Inverting Amplifier).

---

### 4. Integrator

**Circuit Configuration:** The output voltage is proportional to the integral of the input voltage with respect to time. The feedback element is a capacitor.

**Circuit Diagram:**

```
      Rin
Vin ----/\/\/\----(-)------ Vout
               |  (+)------ GND
               |
               ---||--- C
               ---
```

**Derivation of Output Voltage:**

Using the virtual short concept ($V_- \approx V_+$) and assuming $V_+ = 0$:

1.  $V_- = 0$
2.  Current through $R_{in}$ ($I_{in}$): $I_{in} = \frac{V_{in} - V_-}{R_{in}} = \frac{V_{in}}{R_{in}}$
3.  The current through the capacitor ($I_C$) is given by $I_C = C \frac{dV_{C}}{dt}$. The voltage across the capacitor is $V_C = V_- - V_{out} = 0 - V_{out} = -V_{out}$.
4.  So, $I_C = C \frac{d(-V_{out})}{dt} = -C \frac{dV_{out}}{dt}$.
5.  Since no current enters the op-amp's inverting input, $I_{in} = I_C$.
6.  $\frac{V_{in}}{R_{in}} = -C \frac{dV_{out}}{dt}$
7.  $\frac{dV_{out}}{dt} = -\frac{1}{R_{in}C} V_{in}$
8.  Integrating both sides with respect to time: $V_{out}(t) = -\frac{1}{R_{in}C} \int V_{in}(t) dt + K$
    *   $K$ is the initial condition or initial output voltage. If the capacitor is initially uncharged and the output is 0 at t=0, then $K=0$.

**Transfer Function in Laplace Domain:**

*   $V_{in}(s) = R_{in} I(s)$
*   $V_{out}(s) = -\frac{1}{sC} I(s)$
*   $I(s) = \frac{V_{in}(s)}{R_{in}}$
*   $V_{out}(s) = -\frac{1}{sC} \frac{V_{in}(s)}{R_{in}} = -\frac{1}{sR_{in}C} V_{in}(s)$
*   **Transfer Function ($H(s)$) = $\frac{V_{out}(s)}{V_{in}(s)} = -\frac{1}{sR_{in}C}$**

**Key Features:**

*   **Integration:** The output is the integral of the input.
*   **Gain:** The gain is inversely proportional to frequency. At DC (s=0), the gain is infinite, which is a problem.
*   **Frequency Response:** The magnitude of the gain $|H(j\omega)| = \frac{1}{\omega R_{in}C}$. As frequency increases, the gain decreases (roll-off of -20 dB/decade).
*   **Practical Integrator Limitation:** The infinite gain at DC causes the op-amp to saturate, meaning the output goes to the positive or negative power supply rail. This is because any small DC offset voltage at the input will be integrated and amplified, driving the output to its limit.
*   **Practical Implementation:** To overcome the DC saturation issue, a large resistor ($R_f$) is usually placed in parallel with the feedback capacitor ($C$). This limits the DC gain to $-\frac{R_f}{R_{in}}$ and prevents saturation.

**Textbook Reference:** Choudhary & Jain, Chapter 6, Section 6.2.1 (Basic Integrator).

---

### 5. Differentiator

**Circuit Configuration:** The output voltage is proportional to the derivative of the input voltage with respect to time. The input element is a capacitor.

**Circuit Diagram:**

```
       C
Vin ----||----(-)------ Vout
              |  (+)------ GND
              |
             Rf
              |
              ---
```

**Derivation of Output Voltage:**

Using the virtual short concept ($V_- \approx V_+$) and assuming $V_+ = 0$:

1.  $V_- = 0$
2.  Current through the capacitor ($I_C$): $I_C = C \frac{dV_{in}}{dt}$
3.  Current through $R_f$ ($I_{Rf}$): $I_{Rf} = \frac{V_- - V_{out}}{R_f} = \frac{0 - V_{out}}{R_f} = -\frac{V_{out}}{R_f}$
4.  Since no current enters the op-amp's inverting input, $I_C = I_{Rf}$.
5.  $C \frac{dV_{in}}{dt} = -\frac{V_{out}}{R_f}$
6.  $V_{out}(t) = -R_f C \frac{dV_{in}}{dt}$

**Transfer Function in Laplace Domain:**

*   $V_{in}(s)$ is the input voltage.
*   $I(s) = sC V_{in}(s)$
*   $V_{out}(s) = -R_f I(s)$
*   $V_{out}(s) = -R_f (sC V_{in}(s)) = -sR_f C V_{in}(s)$
*   **Transfer Function ($H(s)$) = $\frac{V_{out}(s)}{V_{in}(s)} = -sR_f C$**

**Key Features:**

*   **Differentiation:** The output is the derivative of the input.
*   **Gain:** The gain is proportional to frequency. At high frequencies, the gain can become very large.
*   **Frequency Response:** The magnitude of the gain $|H(j\omega)| = \omega R_f C$. As frequency increases, the gain increases (slope of +20 dB/decade).
*   **Practical Differentiator Limitation:** The increasing gain at high frequencies makes the circuit very sensitive to high-frequency noise. This noise can be amplified significantly, overwhelming the desired signal.
*   **Practical Implementation:** To reduce high-frequency gain and noise sensitivity, a small resistor ($R_{in}$) is added in series with the input capacitor ($C$). This limits the gain at high frequencies. A capacitor ($C_f$) can also be added in parallel with $R_f$ to further reduce high-frequency gain.

**Textbook Reference:** Choudhary & Jain, Chapter 6, Section 6.2.2 (Basic Differentiator).

---

### 6. Frequency Response of Integrator and Differentiator

**Integrator Frequency Response:**

*   **Transfer Function:** $H(s) = -\frac{1}{sR_{in}C}$
*   **For sinusoidal input (s = jω):** $H(j\omega) = -\frac{1}{j\omega R_{in}C} = \frac{j}{\omega R_{in}C}$
*   **Magnitude of Gain:** $|A_v(\omega)| = \frac{1}{\omega R_{in}C}$
*   **Phase Shift:** The phase shift is +90 degrees (output leads input by 90 degrees).
*   **Behavior:** The gain is inversely proportional to frequency. At low frequencies (especially DC), the gain is very high. At high frequencies, the gain is low.

**Differentiator Frequency Response:**

*   **Transfer Function:** $H(s) = -sR_f C$
*   **For sinusoidal input (s = jω):** $H(j\omega) = -j\omega R_f C$
*   **Magnitude of Gain:** $|A_v(\omega)| = \omega R_f C$
*   **Phase Shift:** The phase shift is -90 degrees (output lags input by 90 degrees).
*   **Behavior:** The gain is directly proportional to frequency. At low frequencies, the gain is very low. At high frequencies, the gain is very high.

**Bode Plots (Conceptual):**

*   **Integrator:** Magnitude plot starts high and rolls off at -20 dB/decade. Phase plot is +90 degrees.
*   **Differentiator:** Magnitude plot starts low and rolls off at +20 dB/decade. Phase plot is -90 degrees.

**Impact on Lab Experiments:**

*   When building an integrator, observe the output for DC input (saturation) and AC inputs of varying frequencies.
*   When building a differentiator, observe its sensitivity to noise. Try applying a clean sine wave and then introduce some high-frequency noise to see its effect.

---

### 7. Adder (Summing Amplifier)

**Circuit Configuration:** An inverting configuration where multiple input signals are summed. The output voltage is proportional to the negative sum of the input voltages.

**Circuit Diagram:**

```
      R1
Vin1 ----/\/\/\----(-)------ Vout
               |  (+)------ GND
Vin2 ----/\/\/\----|
               |
      R2       |
               |
      Rn       Rf
VinN----/\/\/\----|
               |
               ---
```

**Derivation of Output Voltage:**

Using the virtual short concept ($V_- \approx V_+$) and assuming $V_+ = 0$:

1.  $V_- = 0$
2.  Current through $R_1$ ($I_1$): $I_1 = \frac{V_{in1} - V_-}{R_1} = \frac{V_{in1}}{R_1}$
3.  Current through $R_2$ ($I_2$): $I_2 = \frac{V_{in2} - V_-}{R_2} = \frac{V_{in2}}{R_2}$
4.  Current through $R_n$ ($I_n$): $I_n = \frac{V_{inN} - V_-}{R_N} = \frac{V_{inN}}{R_N}$
5.  Current through $R_f$ ($I_f$): $I_f = \frac{V_- - V_{out}}{R_f} = \frac{0 - V_{out}}{R_f} = -\frac{V_{out}}{R_f}$
6.  By KCL at the inverting input node: $I_1 + I_2 + ... + I_n = I_f$
7.  $\frac{V_{in1}}{R_1} + \frac{V_{in2}}{R_2} + ... + \frac{V_{inN}}{R_N} = -\frac{V_{out}}{R_f}$
8.  $V_{out}(t) = -R_f \left( \frac{V_{in1}}{R_1} + \frac{V_{in2}}{R_2} + ... + \frac{V_{inN}}{R_N} \right)$

**Special Case: Equal Input Resistors ($R_1 = R_2 = ... = R_n = R$)**

*   $V_{out} = -R_f \left( \frac{V_{in1}}{R} + \frac{V_{in2}}{R} + ... + \frac{V_{inN}}{R} \right)$
*   $V_{out} = -\frac{R_f}{R} (V_{in1} + V_{in2} + ... + V_{inN})$
*   The output is the negative sum of the inputs, scaled by the ratio $\frac{R_f}{R}$.

**Gain:** Each input has its own gain, which is $-\frac{R_f}{R_i}$.

**Textbook Reference:** Choudhary & Jain, Chapter 3, Section 3.3.1 (Summing Amplifier).

---

### 8. Comparator

**Circuit Configuration:** A circuit that compares two input voltages and produces an output that indicates which input is larger. It typically operates in the open-loop configuration with no feedback, causing it to have very high gain and operate in saturation.

**Circuit Diagram (Non-inverting Comparator):**

```
       (+)------ Vin1
       (-)------ Vin2
      |
      |
     Vout
```

**Circuit Diagram (Inverting Comparator):**

```
       (+)------ Vin2
       (-)------ Vin1
      |
      |
     Vout
```

**Operation:**

*   **Non-inverting Comparator:**
    *   If $V_{in1} > V_{in2}$, then $V_{out}$ is driven to the positive saturation voltage ($+V_{sat}$ or $+V_{CC}$).
    *   If $V_{in1} < V_{in2}$, then $V_{out}$ is driven to the negative saturation voltage ($-V_{sat}$ or $-V_{EE}$).
*   **Inverting Comparator:**
    *   If $V_{in1} > V_{in2}$, then $V_{out}$ is driven to the negative saturation voltage ($-V_{sat}$ or $-V_{EE}$).
    *   If $V_{in1} < V_{in2}$, then $V_{out}$ is driven to the positive saturation voltage ($+V_{sat}$ or $+V_{CC}$).

**Key Features:**

*   **Open-Loop Operation:** No feedback is used.
*   **Saturation:** Due to very high open-loop gain, the output quickly saturates at the power supply limits.
*   **Applications:**
    *   Converting analog signals to digital signals.
    *   Zero-crossing detector.
    *   Window detector.
    *   Schmitt trigger (for hysteresis).

**Practical Comparator Limitation: Noise and Hysteresis:**

*   **Noise:** If the input signals are close to each other, especially if one is changing slowly, noise can cause the output to oscillate rapidly between its saturation levels.
*   **Hysteresis:** To overcome the noise problem and provide a more stable output, a Schmitt trigger circuit is used. This involves adding positive feedback, which creates two different switching thresholds depending on whether the input is increasing or decreasing.

**Textbook Reference:** Choudhary & Jain, Chapter 9, Section 9.1 (Introduction to Comparators).

---

### 9. Practical Considerations for Op-Amp Circuits in the Lab

*   **Power Supply:** Ensure correct polarity and voltage levels for the op-amp. Use bypass capacitors (e.g., 0.1µF ceramic) close to the op-amp's power supply pins to filter out noise.
*   **Component Selection:**
    *   **Resistors:** Use standard values. For precise gain, use precision resistors (1% tolerance).
    *   **Capacitors:** For integrators/differentiators, consider the type of capacitor. For example, film capacitors are often preferred for their stability.
*   **Input Impedance:** Be aware of the input impedance of the circuit you are building. If the source impedance is comparable to the circuit's input impedance, it can affect the gain.
*   **Output Voltage Swing:** The output voltage of a practical op-amp cannot reach the full power supply voltages. It is limited to a range slightly within the supply rails.
*   **Bandwidth Limitations:** Real op-amps have finite bandwidth. This will affect the performance of circuits at higher frequencies, especially amplifiers with high gain.
*   **Slew Rate:** The slew rate limits how fast the output voltage can change. If the input signal is a large amplitude, high-frequency sine wave, the output may appear distorted (triangular instead of sinusoidal) if the slew rate is exceeded.
*   **Component Tolerances:** Real components have tolerances, which will affect the actual gain, frequency response, etc., compared to theoretical calculations.

---

### 10. Simulation using PSPICE (as per Rashid's book)

*   **Learning Outcome:** CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools. (Knowledge Level: K4)
*   **Relevance:** PSPICE (or similar simulation software like LTspice) is crucial for verifying circuit designs before building them physically. It helps in understanding theoretical concepts and identifying potential issues.
*   **Key Aspects Covered in Rashid's Book (Introduction to Pspice):**
    *   **Netlist:** Understanding how to describe a circuit using a text-based netlist.
    *   **Component Models:** Using pre-defined models for op-amps (e.g., µA741, LM358) or creating custom models.
    *   **Analysis Types:**
        *   **DC Operating Point Analysis:** To find quiescent values.
        *   **AC Sweep Analysis:** To plot frequency response (gain and phase) of amplifiers, integrators, and differentiators.
        *   **Transient Analysis:** To observe time-domain behavior, such as the output waveform of an amplifier, integrator, or differentiator for a given input signal.
    *   **Probe:** Visualizing simulation results (waveforms, plots).
    *   **Design Entry:** Using graphical schematics to build circuits in simulation software.

**Example Simulation Tasks:**

*   **Inverting/Non-inverting Amplifier:** Simulate to verify the gain by applying a sine wave and observing the output amplitude. Perform AC sweep to plot the frequency response.
*   **Integrator/Differentiator:** Simulate with sinusoidal or ramp inputs to observe the integration/differentiation action. Observe the effect of noise in transient analysis. Perform AC sweep for frequency response.
*   **Adder:** Simulate by applying multiple sine waves and verifying that the output is the negative sum.

---

### 11. Practice Questions & Exercises

**Instructions:** Solve the following problems. Assume ideal op-amps unless stated otherwise. You can use typical values for resistors and capacitors.

1.  **Inverting Amplifier:**
    *   Design an inverting amplifier with a voltage gain of -10. If you use $R_{in} = 1k\Omega$, what value of $R_f$ would you use?
    *   What is the input impedance of this circuit?
    *   If you use a TL081 op-amp, which has a bandwidth-gain product of 3 MHz, what is the approximate bandwidth of your amplifier?

2.  **Non-Inverting Amplifier:**
    *   Design a non-inverting amplifier with a voltage gain of +20. If you use $R_{in} = 1k\Omega$, what value of $R_f$ would you use?
    *   What is the input impedance of this circuit?

3.  **Integrator:**
    *   Design an integrator circuit with a time constant $R_{in}C = 1ms$. If you choose $C = 0.1\mu F$, what value of $R_{in}$ do you need?
    *   What would happen if you applied a DC voltage of 10mV to this circuit?
    *   How would you modify the circuit to prevent saturation due to DC offsets? What would be the DC gain of the modified circuit?

4.  **Differentiator:**
    *   Design a differentiator circuit with a time constant $R_fC = 2ms$. If you choose $C = 0.01\mu F$, what value of $R_f$ do you need?
    *   What is the main problem with a basic differentiator circuit, and how can it be mitigated?

5.  **Adder:**
    *   Design a summing amplifier to produce an output voltage $V_{out} = -(V_{in1} + 2V_{in2})$. Use $R_f = 10k\Omega$. What values of $R_1$ and $R_2$ would you select?
    *   What is the input impedance for $V_{in1}$ and $V_{in2}$?

6.  **Comparator:**
    *   You are given a sine wave $V_{in} = 5 \sin(\omega t)$ and a reference voltage $V_{ref} = 2V$. Describe the output waveform when $V_{in}$ is connected to the non-inverting input of a comparator and $V_{ref}$ to the inverting input. Assume the op-amp saturates at $\pm 12V$.

---

### 12. Answers to Practice Questions

1.  **Inverting Amplifier:**
    *   $A_v = -\frac{R_f}{R_{in}} \implies -10 = -\frac{R_f}{1k\Omega} \implies R_f = 10k\Omega$.
    *   Input impedance $\approx R_{in} = 1k\Omega$.
    *   Bandwidth $\approx \frac{3MHz}{|A_v|} = \frac{3MHz}{10} = 300kHz$.

2.  **Non-Inverting Amplifier:**
    *   $A_v = 1 + \frac{R_f}{R_{in}} \implies 20 = 1 + \frac{R_f}{1k\Omega} \implies 19 = \frac{R_f}{1k\Omega} \implies R_f = 19k\Omega$.
    *   Input impedance is very high (ideally infinite).

3.  **Integrator:**
    *   $R_{in}C = 1ms$. With $C = 0.1\mu F = 0.1 \times 10^{-6} F$, $R_{in} = \frac{1 \times 10^{-3}}{0.1 \times 10^{-6}} = 10 \times 10^3 \Omega = 10k\Omega$.
    *   A DC voltage of 10mV will be integrated, causing the output to ramp up or down towards saturation. $V_{out}(t) = -\frac{1}{10k\Omega \times 0.1\mu F} \times 10mV \times t = -1000 \times 10 \times 10^{-3} t = -10t$ (assuming $V_{out}(0)=0$).
    *   Add a large resistor ($R_f$) in parallel with the capacitor. The DC gain would be $-\frac{R_f}{R_{in}}$.

4.  **Differentiator:**
    *   $R_fC = 2ms$. With $C = 0.01\mu F = 0.01 \times 10^{-6} F$, $R_f = \frac{2 \times 10^{-3}}{0.01 \times 10^{-6}} = 200 \times 10^3 \Omega = 200k\Omega$.
    *   The main problem is its high sensitivity to high-frequency noise. This can be mitigated by adding a small resistor ($R_{in}$) in series with the input capacitor, or a small capacitor ($C_f$) in parallel with the feedback resistor.

5.  **Adder:**
    *   We want $V_{out} = -(V_{in1} + 2V_{in2})$.
    *   $V_{out} = -R_f (\frac{V_{in1}}{R_1} + \frac{V_{in2}}{R_2})$.
    *   We need $\frac{R_f}{R_1} = 1$ and $\frac{R_f}{R_2} = 2$.
    *   With $R_f = 10k\Omega$:
        *   $R_1 = \frac{10k\Omega}{1} = 10k\Omega$.
        *   $R_2 = \frac{10k\Omega}{2} = 5k\Omega$.
    *   Input impedance for $V_{in1}$ is $R_1 = 10k\Omega$.
    *   Input impedance for $V_{in2}$ is $R_2 = 5k\Omega$.

6.  **Comparator:**
    *   $V_{in1} = 5 \sin(\omega t)$, $V_{in2} = 2V$.
    *   When $5 \sin(\omega t) > 2V$ (i.e., $\sin(\omega t) > 2/5 = 0.4$), the output will be at $+V_{sat}$ (+12V). This occurs for a portion of the sine wave where its amplitude exceeds 2V.
    *   When $5 \sin(\omega t) < 2V$ (i.e., $\sin(\omega t) < 0.4$), the output will be at $-V_{sat}$ (-12V).
    *   The output will be a square wave switching between +12V and -12V at the zero crossings of the sine wave (relative to the 2V threshold). It will be high when the sine wave is above 2V and low when it is below 2V.

---

### 13. Important Points to Remember

*   **Virtual Short:** For op-amps in negative feedback, $V_+ \approx V_-$.
*   **Virtual Ground:** If $V_+$ is grounded, then $V_-$ is a virtual ground.
*   **Input Impedance:** Non-inverting configuration has very high input impedance. Inverting configuration's input impedance is determined by the input resistor.
*   **Gain Formulas:** Remember the gain formulas for inverting ($A_v = -R_f/R_{in}$) and non-inverting ($A_v = 1 + R_f/R_{in}$) amplifiers.
*   **Integrator & Differentiator:** Understand their basic operations and the frequency-dependent nature of their gains.
*   **Practical Issues:** Be aware of DC saturation in integrators and noise sensitivity in differentiators.
*   **Comparator Behavior:** Comparators operate in open-loop and saturate, making decisions based on the relative magnitudes of their inputs.
*   **PSPICE:** Essential for verifying designs and understanding circuit behavior.

---

### 14. Alignment with Course Outcomes (COs)

*   **CO1: Design and implement basic linear integrated circuits using Op Amps.**
    *   This module directly addresses CO1 by teaching the design principles and circuits for inverting/non-inverting amplifiers, integrators, differentiators, adders, and comparators. Lab experiments will involve implementing these.
*   **CO2: Design and implement basic linear integrated circuits using linear ICs.**
    *   While this module focuses on Op-Amps (which are linear ICs), the fundamental design principles learned here are transferable to other linear ICs. The experiments will use actual linear ICs (e.g., IC 741).
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools.**
    *   This module emphasizes the importance of simulation tools like PSPICE for understanding and verifying these basic Op-Amp circuits, as highlighted in Section 10.
*   **CO4: Effectively troubleshoot a given circuit and analyze it.**
    *   By understanding the theoretical behavior, frequency response, and practical limitations (saturation, noise), students will be better equipped to analyze why a circuit might not be working as expected and to troubleshoot it. This includes understanding how component tolerances or noise affect performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
