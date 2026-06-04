---
title: "Simulation of any three circuits from experiments 3, 5, 6, 7, 8, 9, 10 and 11 of section I"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 3: Simulation of any three circuits from experiments 3, 5, 6, 7, 8, 9, 10 and 11 of section I"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8af"
status: "completed"
scrapedAt: "2026-05-23T17:50:04.434Z"
---
# Linear Integrated Circuits Lab: Module 3 - Simulation of Op-Amp Circuits

## Introduction

This module focuses on simulating the operation of various fundamental circuits built using operational amplifiers (Op-Amps). We will be selecting and simulating three circuits from a list of experiments (3, 5, 6, 7, 8, 9, 10, and 11) within Section I of your lab manual. This hands-on simulation experience is crucial for understanding the theoretical concepts and developing practical skills in circuit analysis and design, directly contributing to **Course Outcome CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs using simulation tools.** (Knowledge Level: K4).

**Textbook Reference:**
*   **Linear Integrated Circuits by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021):** This textbook will be our primary resource for understanding the theoretical underpinnings of the Op-Amp circuits we will simulate.
*   **Introduction to Pspice Using Orcad for Circuits and Electronics by M. H. Rashid (Pearson, 3rd edition, 2015):** This book will guide us in using the simulation software, likely PSpice or a similar tool, to model and analyze these circuits.

**Reference Book Reference:**
*   **Op-Amps And Linear Integrated Circuits by Gayakwad (PHI, 2002):** This reference provides supplementary information and alternative perspectives on Op-Amp circuit design and analysis.

## Learning Outcomes for this Module

By the end of this module, you should be able to:

*   **Select and understand the circuit diagrams** of at least three Op-Amp circuits from the specified experiments.
*   **Identify the components** required for each selected circuit and their typical values or ranges.
*   **Build the selected circuits in a simulation environment** (e.g., PSpice, LTspice).
*   **Set up appropriate input signals and simulation parameters** for each circuit.
*   **Analyze the output waveforms** obtained from the simulations.
*   **Compare simulated results with theoretical calculations** and explain any discrepancies.
*   **Troubleshoot common simulation issues** and refine circuit parameters for desired performance.
*   **Document the simulation setup, results, and analysis** for each of the three chosen circuits.

## Key Concepts and Definitions

Before diving into specific circuits, let's refresh some fundamental Op-Amp concepts:

*   **Operational Amplifier (Op-Amp):** A high-gain, direct-coupled, differential amplifier. It has two inputs: an inverting input (-) and a non-inverting input (+), and one output.
    *   **Ideal Op-Amp Characteristics:**
        *   Infinite open-loop gain ($A_{OL} \rightarrow \infty$)
        *   Infinite input impedance ($Z_{in} \rightarrow \infty$)
        *   Zero output impedance ($Z_{out} \rightarrow 0$)
        *   Infinite bandwidth ($BW \rightarrow \infty$)
        *   Zero input offset voltage ($V_{os} = 0$)
        *   Zero input bias current ($I_{B} = 0$)
        *   Infinite common-mode rejection ratio (CMRR $\rightarrow \infty$)
*   **Virtual Short (or Virtual Ground):** In an Op-Amp circuit with negative feedback, if the Op-Amp is operating in its linear region, the voltage difference between the inverting and non-inverting inputs is virtually zero ($V_+ - V_- \approx 0$). If the non-inverting input is grounded ($V_+ = 0$), then the inverting input is also effectively at ground potential ($V_- \approx 0$), but it is not physically connected to ground.
*   **Negative Feedback:** A technique where a portion of the output signal is fed back to the inverting input of the Op-Amp. This is crucial for stabilizing the amplifier's operation and controlling its gain.
*   **Simulation Software:** Tools like PSpice, LTspice, Multisim, etc., that allow us to model electronic circuits and predict their behavior without building them physically. This aids in design, analysis, and troubleshooting.

## Circuit Selection and Simulation Strategy

You need to choose **any three** circuits from experiments 3, 5, 6, 7, 8, 9, 10, and 11. Here are some likely candidates and what you'll need to focus on for each:

**General Simulation Steps (applicable to all circuits):**

1.  **Understand the Circuit Operation:** Study the theoretical operation of the selected circuit using your textbooks. Calculate expected gains, bandwidths, or output characteristics.
2.  **Choose a Simulation Software:** Familiarize yourself with the interface and basic commands of your chosen software (e.g., PSpice, LTspice).
3.  **Place Components:** Select and place the necessary Op-Amp model (e.g., a generic Op-Amp like uA741 or a more advanced model if available) and other passive components (resistors, capacitors, voltage sources) from the software's library.
4.  **Wire the Circuit:** Connect the components according to the circuit diagram. Pay close attention to polarity of voltage sources and Op-Amp inputs.
5.  **Configure Input Sources:** Set the parameters for your input voltage sources (e.g., DC voltage, AC sinusoidal voltage with specific amplitude and frequency, pulse input).
6.  **Set Up Simulation Type:** Choose the appropriate simulation analysis:
    *   **DC Analysis:** For analyzing DC operating points and voltage levels.
    *   **AC Analysis (Frequency Domain):** To observe the circuit's response to AC signals at different frequencies (e.g., gain vs. frequency, phase shift).
    *   **Transient Analysis (Time Domain):** To observe how the circuit responds to time-varying signals like sine waves, square waves, or pulses. This is often the most insightful for Op-Amp circuits.
7.  **Run the Simulation:** Execute the simulation.
8.  **Analyze Results:** Examine the output waveforms (voltage, current) using the software's plotting tools. Measure key parameters like peak voltage, frequency, rise/fall times, rise time, etc.
9.  **Compare and Document:** Compare your simulated results with your theoretical calculations. Document your circuit schematic, input/output waveforms, and your analysis.

---

### Example Circuits and their Simulation Focus

Let's assume you might choose circuits related to the following common Op-Amp applications. The specific experiment numbers might vary slightly depending on your lab manual's exact numbering.

#### **Circuit 1: Inverting Amplifier (Likely Experiment 3 or similar)**

*   **Circuit Diagram:** A resistor connected between the output and the inverting input (feedback resistor, $R_f$), and an input resistor ($R_{in}$) connected from the input signal to the inverting input. The non-inverting input is typically grounded.
*   **Theoretical Gain:** $A_v = -\frac{R_f}{R_{in}}$
*   **Simulation Focus:**
    *   **Input:** Apply a sinusoidal AC voltage signal to $R_{in}$.
    *   **Output:** Observe the output voltage. You should see an amplified and inverted version of the input signal.
    *   **Analysis:** Verify the gain magnitude matches the theoretical value. Check for any clipping if the output voltage exceeds the Op-Amp's supply rails.
*   **Textbook Reference (Choudhary & Jain):** Chapter 3 discusses amplifier configurations.

#### **Circuit 2: Non-Inverting Amplifier (Likely Experiment 5 or similar)**

*   **Circuit Diagram:** Resistors $R_1$ connected from the inverting input to ground and $R_f$ connected between the output and the inverting input. The input signal is applied to the non-inverting input.
*   **Theoretical Gain:** $A_v = 1 + \frac{R_f}{R_1}$
*   **Simulation Focus:**
    *   **Input:** Apply a sinusoidal AC voltage signal to the non-inverting input.
    *   **Output:** Observe the output voltage. You should see an amplified version of the input signal with no phase inversion.
    *   **Analysis:** Verify the gain magnitude matches the theoretical value. Compare the output signal's phase with the input signal's phase.
*   **Textbook Reference (Choudhary & Jain):** Chapter 3 also covers the non-inverting amplifier.

#### **Circuit 3: Summing Amplifier (Likely Experiment 6 or similar)**

*   **Circuit Diagram:** Multiple input resistors connected to the inverting input. A feedback resistor connects the output to the inverting input. The non-inverting input is grounded.
*   **Theoretical Output (for two inputs $V_1, V_2$ and corresponding resistors $R_{in1}, R_{in2}$):** $V_{out} = -R_f \left(\frac{V_1}{R_{in1}} + \frac{V_2}{R_{in2}}\right)$
*   **Simulation Focus:**
    *   **Input:** Apply DC or AC voltage sources to the different input resistors.
    *   **Output:** Observe the output voltage, which is a scaled and inverted sum of the input voltages.
    *   **Analysis:** Verify that the output is the weighted sum of the inputs as predicted by the formula.
*   **Textbook Reference (Choudhary & Jain):** Chapter 3 covers summing amplifiers.

#### **Circuit 4: Integrator (Likely Experiment 7 or similar)**

*   **Circuit Diagram:** A capacitor connected between the output and the inverting input. An input resistor connects the input signal to the inverting input. The non-inverting input is grounded.
*   **Theoretical Output:** For a DC input voltage $V_{in}$, $V_{out}(t) = -\frac{1}{R_{in}C_f} \int_0^t V_{in} dt = -\frac{V_{in}}{R_{in}C_f}t$. For an AC input, the output will be a differentiated version of the input.
*   **Simulation Focus:**
    *   **Input:** Apply a step voltage or a square wave.
    *   **Output:** Observe the output. For a step input, it should be a ramp. For a square wave, it should be a triangular wave.
    *   **Analysis:** Observe how the capacitor charges/discharges and how the output voltage changes linearly with time for a constant input. Pay attention to saturation if the input is applied for too long.
*   **Textbook Reference (Choudhary & Jain):** Chapter 4 on Integrator and Differentiator circuits.

#### **Circuit 5: Differentiator (Likely Experiment 8 or similar)**

*   **Circuit Diagram:** A capacitor connected from the input signal to the inverting input. An input resistor connects the capacitor to ground. A feedback resistor connects the output to the inverting input. The non-inverting input is grounded.
*   **Theoretical Output:** $V_{out}(t) = -R_f C_{in} \frac{dV_{in}}{dt}$
*   **Simulation Focus:**
    *   **Input:** Apply a ramp or a sine wave.
    *   **Output:** Observe the output. For a ramp input, it should be a constant voltage. For a sine wave, it should be a cosine wave (phase shifted).
    *   **Analysis:** Verify that the output is proportional to the rate of change of the input. Be aware of noise amplification at high frequencies, which can be a limitation.
*   **Textbook Reference (Choudhary & Jain):** Chapter 4 on Integrator and Differentiator circuits.

#### **Circuit 6: Wien Bridge Oscillator (Likely Experiment 9 or 10 or similar)**

*   **Circuit Diagram:** Typically involves an Op-Amp configured as a non-inverting amplifier with a frequency-sensitive feedback network (Wien bridge consisting of R-C series and parallel combinations). Usually uses a second gain control mechanism or a variable resistor to sustain oscillations.
*   **Theoretical Output:** Generates a sinusoidal output waveform at a specific frequency determined by the RC components.
*   **Simulation Focus:**
    *   **Input:** No explicit input signal is usually applied for oscillation, but the circuit needs a starting point (e.g., a small initial voltage or a DC offset).
    *   **Output:** Observe the output voltage as a function of time. It should start small and grow into a stable sine wave.
    *   **Analysis:** Measure the frequency of oscillation. Verify it matches the theoretical frequency ($f_0 = \frac{1}{2\pi RC}$). Check the purity of the sinusoidal waveform.
*   **Textbook Reference (Choudhary & Jain):** Chapter 11 on Oscillators.

#### **Circuit 7: Schmitt Trigger (Likely Experiment 11 or similar)**

*   **Circuit Diagram:** Uses positive feedback. A resistor connects the output to the non-inverting input. The input signal is applied to the inverting input through an input resistor.
*   **Theoretical Operation:** Acts as a comparator with hysteresis. It switches between two output states (high and low) based on two threshold voltages (Upper Threshold Point - UTP and Lower Threshold Point - LTP).
*   **Simulation Focus:**
    *   **Input:** Apply a slow-moving sine wave or a triangle wave.
    *   **Output:** Observe the output. It should be a square wave.
    *   **Analysis:** Measure the UTP and LTP. Verify that the output switches state only when the input crosses these threshold levels. Observe the hysteresis loop (output vs. input) if plotting is available.
*   **Textbook Reference (Choudhary & Jain):** Chapter 5 on Multivibrators and Oscillators.

---

## Detailed Notes for Three Selected Circuits

For this module, you will select **any three** circuits from the list. The following notes provide a template for how you should approach each one. **Choose three circuits that interest you most and cover different operational aspects.**

**To make these notes comprehensive, I will provide detailed notes for three common and representative circuits: Inverting Amplifier, Integrator, and Schmitt Trigger.**

---

### **Circuit 1: Inverting Amplifier**

*   **Experiment Relevance:** Demonstrates basic amplification and signal inversion.
*   **Theoretical Background (Choudhary & Jain, Chapter 3):**
    *   The inverting amplifier configuration utilizes negative feedback.
    *   Due to the virtual short at the Op-Amp's input terminals ($V_+ \approx V_-$), and $V_+$ is grounded, the inverting input ($V_-$) acts as a virtual ground.
    *   Current through the input resistor $R_{in}$ is $I_{in} = \frac{V_{in} - V_-}{R_{in}} = \frac{V_{in}}{R_{in}}$ (since $V_- \approx 0$).
    *   This current flows through the feedback resistor $R_f$ as there's no current into the Op-Amp's input terminal (infinite input impedance).
    *   Therefore, $I_f = I_{in}$.
    *   The output voltage is given by $V_{out} - V_- = -I_f R_f$.
    *   Substituting $V_- \approx 0$ and $I_f = \frac{V_{in}}{R_{in}}$: $V_{out} = - \left(\frac{V_{in}}{R_{in}}\right) R_f$.
    *   **Voltage Gain ($A_v$)**: $A_v = \frac{V_{out}}{V_{in}} = -\frac{R_f}{R_{in}}$. The negative sign indicates phase inversion.
*   **Key Concepts for Simulation:**
    *   **Gain:** The ratio of output voltage to input voltage. Expected to be negative and its magnitude is set by the resistor ratio.
    *   **Phase Inversion:** The output signal is 180 degrees out of phase with the input signal.
    *   **Input Impedance:** The effective impedance seen by the input source is approximately equal to $R_{in}$.
    *   **Output Impedance:** Ideally zero.
    *   **Bandwidth:** Limited by the Op-Amp's characteristics and the gain-bandwidth product.
    *   **Clipping:** If the output voltage swing exceeds the Op-Amp's supply voltage limits, the output will be clipped.
*   **Simulation Setup (Example using PSpice/LTspice):**
    *   **Op-Amp Model:** Use a generic Op-Amp model (e.g., uA741, LM358). Ensure its supply voltages ($V_{CC}$ and $V_{EE}$) are set appropriately (e.g., +15V and -15V).
    *   **Resistors:** Choose values for $R_{in}$ and $R_f$. For example, $R_{in} = 1k\Omega$, $R_f = 10k\Omega$. This gives a theoretical gain of $-10$.
    *   **Input Source:** A sinusoidal voltage source (VPULSE or VSIN) with amplitude, say 1V, and frequency 1kHz.
    *   **Simulation Type:** Transient analysis.
    *   **Outputs to Plot:** Input voltage and output voltage.
*   **Expected Simulation Results:**
    *   The output sine wave should have an amplitude of approximately $1V \times 10 = 10V$.
    *   The output waveform will be inverted (peak of input corresponds to trough of output).
    *   If the supply voltages are $\pm 15V$, the output should not be clipped for a 1V input amplitude and gain of 10 (max output $\approx \pm 10V$).
*   **Troubleshooting:**
    *   **No output or very small output:** Check Op-Amp connections, supply voltages, input source. Ensure the Op-Amp is operating in its linear region.
    *   **Distorted output (clipped):** Reduce input signal amplitude or increase supply voltages if possible.
    *   **Output not inverted:** Double-check connections to the inverting and non-inverting inputs.
*   **Practice Question 1:**
    An inverting amplifier is built with $R_{in} = 10k\Omega$ and $R_f = 50k\Omega$. If the input signal is a sine wave with peak amplitude of 0.5V and frequency 2kHz, and the Op-Amp is powered by $\pm 12V$ supplies, what is the expected peak amplitude and phase relationship of the output signal? What is the approximate input impedance of this circuit?
    **Answer:**
    *   Expected gain $A_v = -\frac{50k\Omega}{10k\Omega} = -5$.
    *   Expected peak output amplitude = $0.5V \times |-5| = 2.5V$.
    *   The output signal is 180 degrees out of phase with the input signal.
    *   Approximate input impedance is $R_{in} = 10k\Omega$.

---

### **Circuit 2: Integrator**

*   **Experiment Relevance:** Demonstrates integration of input signals, useful in control systems and waveform generation.
*   **Theoretical Background (Choudhary & Jain, Chapter 4):**
    *   The integrator circuit uses a capacitor in the feedback path.
    *   Again, $V_- \approx 0$ (virtual ground).
    *   Current through $R_{in}$ is $I_{in} = \frac{V_{in}}{R_{in}}$.
    *   This current charges/discharges the capacitor $C_f$. The current through the capacitor is $I_f = C_f \frac{d(V_- - V_{out})}{dt} = C_f \frac{d(-V_{out})}{dt} = -C_f \frac{dV_{out}}{dt}$.
    *   Since $I_f = I_{in}$, we have $\frac{V_{in}}{R_{in}} = -C_f \frac{dV_{out}}{dt}$.
    *   Rearranging: $\frac{dV_{out}}{dt} = -\frac{1}{R_{in}C_f} V_{in}$.
    *   Integrating both sides: $V_{out}(t) = -\frac{1}{R_{in}C_f} \int V_{in}(t) dt + V_{out}(0)$.
    *   The output voltage is proportional to the integral of the input voltage.
*   **Key Concepts for Simulation:**
    *   **Integration:** The output voltage's rate of change is proportional to the input voltage.
    *   **Ramp Output:** For a constant DC input, the output will be a ramp (linear increase or decrease in voltage).
    *   **Triangular Wave Output:** For a square wave input, the output will be a triangular wave.
    *   **Saturation:** If the input is applied for an extended period, the output ramp will eventually reach the Op-Amp's supply rails, causing saturation. A resistor in series with the feedback capacitor ($R_f$ in parallel with $C_f$, effectively creating a leaky integrator) or a DC offset adjustment is often used to prevent this in practical circuits.
    *   **Frequency Response:** The integrator's gain increases with frequency ($|A_v(\omega)| = \frac{1}{\omega R_{in}C_f}$). This makes it susceptible to high-frequency noise and can lead to instability.
*   **Simulation Setup (Example):**
    *   **Op-Amp Model:** Generic Op-Amp (uA741, etc.) with proper supply voltages.
    *   **Components:** $R_{in}$ and $C_f$. For example, $R_{in} = 10k\Omega$, $C_f = 0.1\mu F$.
    *   **Input Source:**
        *   **Option A (Step Input):** A pulse voltage source transitioning from 0V to 5V at time t=0, held for a duration, then returning to 0V.
        *   **Option B (Square Wave Input):** A pulse source with appropriate amplitude and frequency.
    *   **Simulation Type:** Transient analysis.
    *   **Outputs to Plot:** Input voltage and output voltage.
*   **Expected Simulation Results:**
    *   **For Step Input (0V to 5V at t=0):** The output should start from its initial value (e.g., 0V) and decrease linearly with a slope of $-\frac{5V}{10k\Omega \times 0.1\mu F} = -\frac{5V}{1ms} = -5000 V/s$. It will eventually hit the negative saturation limit.
    *   **For Square Wave Input:** The output will be a triangular wave, smoothly rising and falling. The slope of the rising/falling edges will depend on the input voltage magnitude and the $R_{in}C_f$ time constant.
*   **Troubleshooting:**
    *   **Output is not a ramp/triangle:** Check the capacitor and resistor values and their connections. Ensure the input is a step or square wave.
    *   **Output reaches saturation too quickly:** Consider using a smaller input voltage, a larger $R_{in}$, or a smaller $C_f$. Or, introduce a "leaky integrator" by adding a large resistor in series with the capacitor.
    *   **Output is noisy/oscillates:** This can happen due to the integrator's high-frequency gain. Ensure the Op-Amp model has adequate slew rate and bandwidth, and consider a small series resistor in the feedback path.
*   **Practice Question 2:**
    A practical integrator circuit is built using an Op-Amp, $R_{in} = 20k\Omega$, and $C_f = 0.01\mu F$. The input signal is a square wave switching between 0V and +4V with a period of 1ms. Assuming the Op-Amp has $\pm 15V$ supplies and starts at $V_{out}=0V$, what is the approximate output voltage at $t=0.5ms$? What is the output waveform shape?
    **Answer:**
    *   The input is +4V for the first 0.5ms.
    *   The integral of the input voltage from 0 to 0.5ms is $\int_0^{0.5ms} 4V dt = 4V \times 0.5ms = 2V \cdot ms$.
    *   $R_{in}C_f = 20k\Omega \times 0.01\mu F = 20 \times 10^3 \times 0.01 \times 10^{-6} = 0.2ms$.
    *   $V_{out}(0.5ms) = -\frac{1}{R_{in}C_f} \int_0^{0.5ms} V_{in}(t) dt = -\frac{1}{0.2ms} (2V \cdot ms) = -10V$.
    *   The output waveform will be a triangular wave.

---

### **Circuit 3: Schmitt Trigger (Non-Inverting Configuration)**

*   **Experiment Relevance:** Converts analog signals to digital pulses, used in waveform shaping and threshold detection.
*   **Theoretical Background (Choudhary & Jain, Chapter 5):**
    *   The Schmitt trigger utilizes **positive feedback**, where a portion of the output is fed back to the non-inverting input.
    *   This positive feedback creates **hysteresis**, meaning the switching threshold of the circuit depends on the previous state of the output.
    *   Let's consider a non-inverting Schmitt trigger with:
        *   Input voltage $V_{in}$ applied to $R_1$ connected to the inverting input (-).
        *   Feedback resistors $R_f$ and $R_1$ connected from output to non-inverting input (+) such that $R_f$ is in series with $R_1$. The junction of $R_f$ and $R_1$ is the non-inverting input.
        *   Let $V_{out}$ be the output voltage.
    *   **Threshold Calculation:** The voltage at the non-inverting input ($V_+$) is determined by a voltage divider formed by $R_f$ and $R_1$ connected to the output.
        *   When $V_{out} = +V_{sat}$ (positive saturation, typically close to $+V_{CC}$): $V_+ = V_{sat} \left(\frac{R_1}{R_f + R_1}\right)$. Let this be the Upper Threshold Point ($V_{UTP}$).
        *   When $V_{out} = -V_{sat}$ (negative saturation, typically close to $-V_{EE}$): $V_+ = -V_{sat} \left(\frac{R_1}{R_f + R_1}\right)$. Let this be the Lower Threshold Point ($V_{LTP}$).
    *   **Operation:**
        *   If the input $V_{in}$ is increasing and $V_{out}$ is in the low state (e.g., $-V_{sat}$), $V_+$ is negative. When $V_{in}$ exceeds $V_{LTP}$, the Op-Amp flips state, and $V_{out}$ switches to $+V_{sat}$.
        *   If $V_{in}$ is decreasing and $V_{out}$ is in the high state (e.g., $+V_{sat}$), $V_+$ is positive. When $V_{in}$ drops below $V_{UTP}$, the Op-Amp flips state, and $V_{out}$ switches to $-V_{sat}$.
*   **Key Concepts for Simulation:**
    *   **Hysteresis:** The difference between the upper and lower threshold voltages ($V_{hysteresis} = V_{UTP} - V_{LTP}$).
    *   **Threshold Voltages:** The critical input voltages at which the output switches state.
    *   **Square Wave Output:** Converts a slow-moving analog input (sine, triangle) into a clean square wave.
    *   **Noise Immunity:** Hysteresis provides immunity to noise that might otherwise cause spurious switching.
*   **Simulation Setup (Example):**
    *   **Op-Amp Model:** Generic Op-Amp with $\pm 15V$ supplies.
    *   **Components:** Input resistor $R_1$. Feedback resistors $R_f$ and $R_1$ (same value for $R_1$ as the input resistor). Let's choose $R_1 = 10k\Omega$ and $R_f = 10k\Omega$.
    *   **Input Source:** A sinusoidal voltage source (e.g., 1V amplitude, 1kHz frequency) or a triangle wave source.
    *   **Simulation Type:** Transient analysis.
    *   **Outputs to Plot:** Input voltage and output voltage.
*   **Expected Simulation Results:**
    *   The output will be a square wave oscillating between $+V_{sat}$ and $-V_{sat}$.
    *   The transitions of the output square wave will occur when the input sine wave crosses the calculated $V_{UTP}$ and $V_{LTP}$.
    *   For $R_1 = R_f = 10k\Omega$ and $V_{sat} \approx 15V$:
        *   $V_{UTP} = 15V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = 15V \times 0.5 = 7.5V$.
        *   $V_{LTP} = -15V \times \frac{10k\Omega}{10k\Omega + 10k\Omega} = -15V \times 0.5 = -7.5V$.
        *   *Note:* The actual $V_{sat}$ may be lower than the supply voltage due to voltage drops within the Op-Amp.
*   **Troubleshooting:**
    *   **No switching or continuous oscillation:** Check the positive feedback path. Ensure the input signal is slow enough for the Op-Amp to track the threshold changes.
    *   **Output not a clean square wave:** The input might be too fast, or the Op-Amp's slew rate is insufficient.
    *   **Thresholds are incorrect:** Verify the resistor values and the Op-Amp's saturation voltage ($V_{sat}$) used in calculations. Ensure the Op-Amp is not saturated all the time.
*   **Practice Question 3:**
    A non-inverting Schmitt trigger is configured with $R_1 = 10k\Omega$ (input resistor) and feedback resistors $R_f = 20k\Omega$ and $R_{1'} = 10k\Omega$ connected in series from output to non-inverting input. The Op-Amp saturates at $\pm 13V$. If a sine wave of 1V amplitude is applied as input, what are the UTP and LTP? Will the circuit switch?
    **Answer:**
    *   The non-inverting input voltage is determined by the voltage divider formed by $R_f$ and $R_{1'}$.
    *   When $V_{out} = +13V$: $V_+ = 13V \times \frac{R_{1'}}{R_f + R_{1'}} = 13V \times \frac{10k\Omega}{20k\Omega + 10k\Omega} = 13V \times \frac{10}{30} = 13V \times \frac{1}{3} \approx 4.33V$. So, $V_{UTP} \approx 4.33V$.
    *   When $V_{out} = -13V$: $V_+ = -13V \times \frac{R_{1'}}{R_f + R_{1'}} = -13V \times \frac{10k\Omega}{20k\Omega + 10k\Omega} = -13V \times \frac{1}{3} \approx -4.33V$. So, $V_{LTP} \approx -4.33V$.
    *   The input sine wave has an amplitude of 1V, meaning it varies between +1V and -1V. Since the input range ([-1V, 1V]) is completely outside the switching thresholds ([-4.33V, 4.33V]), the circuit will not switch its output state. The Op-Amp will remain in one of its saturation states (likely the negative state if no initial offset is considered).

---

## Important Points to Remember

*   **Op-Amp Models:** Always use appropriate Op-Amp models in your simulations. Pay attention to their parameters like slew rate, gain-bandwidth product, and supply voltages.
*   **Supply Voltages:** Ensure your Op-Amp is powered correctly with both positive ($V_{CC}$) and negative ($V_{EE}$) supply voltages. These define the output voltage swing limits.
*   **Ground Reference:** Establish a clear ground reference in your simulation schematic.
*   **Simulation Types:** Understand the difference between DC, AC, and Transient analyses and choose the most suitable one for your circuit's behavior.
*   **Component Values:** Start with realistic component values. If you encounter issues, try adjusting them.
*   **Input Signals:** Use appropriate input signals (DC, AC sine, pulse, triangle) to test the specific function of each circuit.
*   **Theoretical vs. Simulated:** Always compare your simulation results with theoretical calculations. Analyze any discrepancies.
*   **Documentation:** Keep detailed records of your circuit schematics, simulation setups, parameters, and results. This is crucial for understanding and reporting your work.
*   **Lab Manual:** Refer to your specific lab manual for the exact circuit diagrams and expected experiments.

## Connecting to Course Outcomes

*   **CO1 & CO2 (Design and Implement):** While this module is simulation-focused, the process of selecting components, understanding circuit topology, and predicting behavior directly supports the design and implementation aspects of these outcomes.
*   **CO3 (Design and Simulate):** This module is *entirely* dedicated to CO3, providing hands-on experience with simulation tools and the functioning of basic linear ICs (Op-Amps) in various configurations.
*   **CO4 (Troubleshoot and Analyze):** By encountering and resolving simulation issues, you are practicing troubleshooting. Analyzing the output waveforms and comparing them to theory also directly addresses the analysis component of CO4.

---

This comprehensive set of notes provides a strong foundation for Module 3. Remember to actively engage with your chosen simulation software and the concepts presented here. Good luck!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
