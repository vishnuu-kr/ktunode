---
title: "Difference Amplifier and Instrumentation amplifier"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe89f"
status: "completed"
scrapedAt: "2026-05-23T17:49:54.347Z"
---
# LINEAR INTEGRATED CIRCUITS LAB - Module 1: Familiarization of Operational Amplifiers

## Topic: Difference Amplifier and Instrumentation Amplifier

### 1. Introduction to Operational Amplifiers (Op-Amps)

*   **Definition:** An operational amplifier (op-amp) is a high-gain, direct-coupled, high-impedance, differential voltage amplifier with a single output. It is characterized by its ability to amplify both AC and DC input signals.
*   **Key Characteristics (Ideal Op-Amp):**
    *   Infinite Open-loop gain ($A_{OL} = \infty$)
    *   Infinite input impedance ($Z_{in} = \infty$)
    *   Zero output impedance ($Z_{out} = 0$)
    *   Infinite bandwidth ($\text{BW} = \infty$)
    *   Zero input offset voltage ($V_{os} = 0$)
    *   Zero input bias current ($I_B = 0$)
    *   Infinite Common-Mode Rejection Ratio (CMRR)
*   **Practical Op-Amp Characteristics:** Real op-amps have finite values for these parameters, which are important to consider in circuit design and analysis.
*   **References:** Choudhary & Jain (6th ed., 2021), Chapter 2: Operational Amplifiers - Characteristics and Applications.

### 2. Difference Amplifier

#### 2.1. Concept and Purpose

*   **Definition:** A difference amplifier is a circuit that amplifies the *difference* between two input voltages. It is designed to reject signals that are common to both inputs (common-mode signals).
*   **Purpose:**
    *   To amplify the difference between two signals while rejecting noise or interference that affects both signals equally.
    *   Used in many applications like signal conditioning, measurement, and control systems.
*   **References:** Choudhary & Jain (6th ed., 2021), Chapter 3: Linear Op-Amp Circuits – Differentiators and Integrators (Though difference amplifiers are often covered as a key application, this chapter might have foundational concepts). Gayakwad (2002), Chapter 3: Linear Op-Amp Circuits.

#### 2.2. Basic Difference Amplifier Circuit

*   **Circuit Diagram:**
    ```
           +Vcc
             |
             R2
             |
    Vin1 --/\/\/\--+------ Vout
                   |      |
                   R1    C1
                   |      |
    GND ---------+      .-.
                  |     |   | Op-Amp (-)
                  |     '-'
                  |       |
    Vin2 --/\/\/\--+------
             R3     |
                    C2
                    |
                   GND
            +----(+Vcc)
            |
          .-.
          | | Op-Amp (+)
          '-'
            |
           GND
    ```
    *Note: This is a simplified representation. A typical difference amplifier uses four resistors. The diagram above shows a single-ended output with two inputs.*

*   **Standard Configuration (Four Resistors):**
    ```
          R2
        +------/\/\/\------+------ Vout
        |                 |
    Vin1 --/\/\/\--+       .-.
              R1   |       |   | Op-Amp (-)
                   |       '-'
                   |         |
    Vin2 --/\/\/\--+---------+
              R3     |
                     .-.
                     |   | Op-Amp (+)
                     '-'
                       |
                      GND
    ```
    *This diagram assumes a non-inverting input is grounded for simplicity in explaining the core difference amplification.*

*   **Ideal Voltage Transfer Function:**
    *   For the standard configuration with $R1 = R3$ and $R2 = R4$:
        $$V_{out} = \frac{R2}{R1} (V_{in2} - V_{in1})$$
    *   **Derivation (briefly):**
        *   Apply superposition or nodal analysis.
        *   Consider $V_{in1}$ with $V_{in2}$ grounded: This acts as an inverting amplifier for $V_{in1}$.
        *   Consider $V_{in2}$ with $V_{in1}$ grounded: This acts as a non-inverting amplifier for $V_{in2}$ (using the inverting input as a virtual ground with appropriate voltage division).
        *   Summing these contributions leads to the difference output.

#### 2.3. Key Parameters and Performance

*   **Differential Gain ($A_d$):** The gain for the difference between the two inputs.
    $$A_d = \frac{R2}{R1} = \frac{R4}{R3}$$
*   **Common-Mode Gain ($A_{cm}$):** The gain for signals that are common to both inputs. In an ideal difference amplifier with perfectly matched resistors, $A_{cm} = 0$.
*   **Common-Mode Rejection Ratio (CMRR):** A measure of how well the amplifier rejects common-mode signals. Higher CMRR means better rejection.
    $$\text{CMRR} = \left| \frac{A_d}{A_{cm}} \right|$$
    *   In dB: $\text{CMRR (dB)} = 20 \log_{10} \left| \frac{A_d}{A_{cm}} \right|$
    *   **Practical Consideration:** Mismatched resistors lead to a non-zero $A_{cm}$ and a finite CMRR.
*   **Bandwidth:** The range of frequencies over which the amplifier operates with acceptable gain. This is usually limited by the op-amp's open-loop bandwidth.
*   **References:** Choudhary & Jain (6th ed., 2021), Chapter 4: Linear Op-Amp Circuits – Filters, etc. (Chapter 3 also covers basic circuits). Gayakwad (2002), Chapter 3. Rashid (2015) might provide insights into PSpice simulation of these circuits.

#### 2.4. Practical Implementation and Simulation (CO1, CO3)

*   **Lab Setup:**
    *   Use a general-purpose op-amp IC like the LM741 or TL084.
    *   Connect power supplies ($+V_{cc}$ and $-V_{cc}$).
    *   Use precise resistors for good performance.
    *   Apply input signals ($V_{in1}$, $V_{in2}$) using function generators.
    *   Measure the output voltage ($V_{out}$) using an oscilloscope or multimeter.
*   **Simulation (PSpice):**
    *   Create the circuit in Orcad Capture.
    *   Place the op-amp model (e.g., `opamp` library).
    *   Connect resistors and input voltage sources.
    *   Perform transient analysis to observe the output waveform for different input combinations.
    *   Perform AC analysis to determine the bandwidth and gain.
    *   **Example Simulation Task:** Apply sinusoidal inputs to $V_{in1}$ and $V_{in2}$ with different amplitudes and phases to observe the difference amplification and common-mode rejection.
*   **Troubleshooting (CO4):**
    *   **No output or incorrect output:** Check power supply connections, resistor values, input signal presence, and op-amp connections (especially feedback and ground).
    *   **Low gain:** Verify resistor ratios.
    *   **High common-mode gain:** Check for mismatched resistors or faulty op-amp.
*   **References:** Rashid (2015) is crucial for PSpice simulation techniques.

#### 2.5. Practice Questions and Exercises

1.  **Design a difference amplifier with a differential gain of 10. Assume $R1 = 10k\Omega$. What should be the value of $R2$?**
    *   **Answer:** $R2 = A_d \times R1 = 10 \times 10k\Omega = 100k\Omega$. For best performance, $R3$ should also be $10k\Omega$ and $R4$ should be $100k\Omega$.
2.  **If $V_{in1} = 2V$ and $V_{in2} = 1V$, and the difference amplifier has a gain of 5, what is the output voltage $V_{out}$?**
    *   **Answer:** $V_{out} = 5 \times (V_{in2} - V_{in1}) = 5 \times (1V - 2V) = 5 \times (-1V) = -5V$.
3.  **Consider a difference amplifier with $R1=R3=1k\Omega$ and $R2=R4=10k\Omega$. If $V_{in1} = 2V + 0.1V_{cm}$ and $V_{in2} = 1V + 0.1V_{cm}$, where $V_{cm}$ is a common-mode voltage. Calculate $A_d$, $V_{out}$ due to differential input, and $V_{out}$ due to common-mode input (assuming ideal op-amp for now).**
    *   **Answer:**
        *   $A_d = R2/R1 = 10k\Omega / 1k\Omega = 10$.
        *   Differential input voltage: $V_{in2} - V_{in1} = (1V + 0.1V_{cm}) - (2V + 0.1V_{cm}) = -1V$.
        *   $V_{out}$ due to differential input = $A_d \times (-1V) = 10 \times (-1V) = -10V$.
        *   Common-mode input voltage: $V_{cm\_input} = 0.1V_{cm}$.
        *   Ideal $A_{cm} = 0$. So, $V_{out}$ due to common-mode input = $0 \times 0.1V_{cm} = 0V$.
        *   Total $V_{out} = -10V$.

### 3. Instrumentation Amplifier

#### 3.1. Concept and Purpose

*   **Definition:** An instrumentation amplifier (IA) is a type of differential amplifier that amplifies the difference between two input signals with very high common-mode rejection. It is typically built using three op-amps.
*   **Purpose:**
    *   To amplify small differential signals in the presence of large common-mode signals.
    *   Ideal for amplifying signals from transducers like strain gauges, thermocouples, and medical sensors, which often have low signal levels and are susceptible to noise.
    *   Provides high input impedance, which prevents loading the source.
*   **Key Advantages over Basic Difference Amplifier:**
    *   Much higher input impedance.
    *   Much higher CMRR.
    *   Easier to set a precise and stable gain.
*   **References:** Choudhary & Jain (6th ed., 2021), Chapter 4: Linear Op-Amp Circuits – Filters, etc. (Often includes IAs as advanced circuits). Gayakwad (2002), Chapter 3.

#### 3.2. Circuit Configuration (Three Op-Amp)

*   **Circuit Diagram:**
    ```
                       R2
                     +------/\/\/\------+
                     |                 |
    Vin1 --+-------(+) Op-Amp 1 ------(+) Op-Amp 3 ----- Vout
           |         |                 |        |
           R1        (-)               (-)      R4
           |         |                 |        |
          GND       R_G --------------/\/\/\--+------
                     |                 |      |
                     |                 R3     .-.
                     |                 |      |   | Op-Amp 2 (+)
    Vin2 --+-------(+) Op-Amp 2 ------(-) Op-Amp 3   '-'
           |         |                 |        |
           R1        (-)               (+)      R4
           |         |                 |
          GND       R_G --------------/\/\/\--+
                     |
                    GND
    ```
    *Note: This diagram shows the core structure. $R_G$ is the gain-setting resistor.*

*   **Operation:**
    *   **Stage 1 (Op-Amp 1 & 2):** These are non-inverting amplifiers. They amplify the differential input signal and isolate the inputs, providing high input impedance. The common-mode signals are rejected by these stages. The feedback for these stages is through resistors $R2$ and $R_G$.
    *   **Stage 2 (Op-Amp 3):** This is a basic difference amplifier. It takes the outputs from the first two stages and amplifies the difference, while rejecting any common-mode component that might have passed through the first stage (though ideally, it's minimal).

#### 3.3. Voltage Transfer Function and Gain Setting

*   **Ideal Voltage Transfer Function:**
    $$V_{out} = \left(1 + \frac{2R1}{R_G}\right) (V_{in2} - V_{in1})$$
    Where:
    *   $R2 = R3$ (matched)
    *   $R1$ (on both inputs) are matched.
    *   $R_G$ is the gain-setting resistor.
*   **Differential Gain ($A_d$):**
    $$A_d = 1 + \frac{2R1}{R_G}$$
    *   **Gain Adjustment:** The gain can be precisely adjusted by changing the value of $R_G$. Doubling $R_G$ halves the gain, and vice-versa.
*   **Common-Mode Rejection Ratio (CMRR):**
    *   The three-op-amp configuration offers very high CMRR, typically in the order of 80-100 dB or more, due to the excellent matching of resistors in the first stage and the differential amplifier action of the second stage.
    *   **Practical CMRR:** Highly dependent on the matching of $R1$ and $R2/R3$.
*   **Input Impedance ($Z_{in}$):**
    *   The input impedance seen by each input terminal is very high, approaching infinity, because the inputs are connected to the non-inverting terminals of the first two op-amps.
*   **References:** Choudhary & Jain (6th ed., 2021), Chapter 4. Gayakwad (2002), Chapter 3.

#### 3.4. Practical Implementation and Simulation (CO1, CO3)

*   **Lab Setup:**
    *   Use three op-amps, possibly from a quad op-amp IC like TL084.
    *   Use precision resistors for $R1$ and $R2/R3$. $R_G$ can be a potentiometer for adjustable gain.
    *   Connect power supplies.
    *   Apply input signals ($V_{in1}$, $V_{in2}$) and measure $V_{out}$.
    *   Use low-level differential signals (e.g., from a differential microphone or a strain gauge) and a large common-mode signal (e.g., 50/60 Hz mains hum).
*   **Simulation (PSpice):**
    *   Construct the three-op-amp IA circuit.
    *   Use appropriate op-amp models.
    *   Set up input signals: a small differential sine wave and a large common-mode sine wave (out of phase for one input, in phase for the other to simulate the difference and common-mode components).
    *   Perform transient analysis to observe the output.
    *   Perform AC analysis to find the bandwidth and verify the gain formula.
    *   **Example Simulation Task:** Simulate a strain gauge bridge where the differential output is millivolts, but the common-mode voltage is several volts. Measure the IA's output and verify the CMRR.
*   **Troubleshooting (CO4):**
    *   **No output or incorrect gain:** Check resistor values, op-amp connections, and feedback paths. Ensure $R1$ resistors are matched and $R2, R3$ are matched.
    *   **Poor CMRR:** Resistor matching is critical. If using a potentiometer for $R_G$, ensure smooth adjustment without noise.
    *   **Output clipping:** Input differential voltage is too large for the chosen gain and op-amp supply voltages.
*   **References:** Rashid (2015) for simulation.

#### 3.5. Practice Questions and Exercises

1.  **Design an instrumentation amplifier with a differential gain of 50. You have $R1 = 10k\Omega$ resistors available. What value of $R_G$ should be used?**
    *   **Answer:** $A_d = 1 + \frac{2R1}{R_G} \implies 50 = 1 + \frac{2 \times 10k\Omega}{R_G}$
        $49 = \frac{20k\Omega}{R_G}$
        $R_G = \frac{20k\Omega}{49} \approx 408\Omega$.
2.  **An instrumentation amplifier has $R1 = 5k\Omega$ and $R_G = 100\Omega$. What is its differential gain?**
    *   **Answer:** $A_d = 1 + \frac{2R1}{R_G} = 1 + \frac{2 \times 5k\Omega}{100\Omega} = 1 + \frac{10k\Omega}{100\Omega} = 1 + 100 = 101$.
3.  **If $V_{in1} = 3mV$ and $V_{in2} = 2mV$, and the IA has a gain of 100, what is the output voltage $V_{out}$?**
    *   **Answer:** $V_{out} = A_d \times (V_{in2} - V_{in1}) = 100 \times (2mV - 3mV) = 100 \times (-1mV) = -100mV$.
4.  **Consider an instrumentation amplifier with $R1=R2=R3=10k\Omega$ and $R_G = 200\Omega$. If $V_{in1} = 5mV + 1V_{cm}$ and $V_{in2} = 4mV + 1V_{cm}$. Calculate $A_d$ and the output voltage $V_{out}$. What would be the output if $V_{cm}$ were removed and only the differential signal remained?**
    *   **Answer:**
        *   $A_d = 1 + \frac{2R1}{R_G} = 1 + \frac{2 \times 10k\Omega}{200\Omega} = 1 + \frac{20k\Omega}{200\Omega} = 1 + 100 = 101$.
        *   Differential input voltage: $V_{in2} - V_{in1} = (4mV + 1V_{cm}) - (5mV + 1V_{cm}) = -1mV$.
        *   $V_{out} = A_d \times (-1mV) = 101 \times (-1mV) = -101mV$.
        *   If only the differential signal remained (i.e., $V_{in1}=5mV$, $V_{in2}=4mV$), the output would be the same: $-101mV$. This shows the CMRR in action.

### 4. Alignment with Course Outcomes

*   **CO1: Design and implement basic linear integrated circuits using Op Amps (K4):** Students will design the circuits for difference and instrumentation amplifiers by selecting appropriate resistor values for desired gains. They will then implement these circuits on a breadboard, connecting op-amps, resistors, and power supplies.
*   **CO2: Design and implement basic linear integrated circuits using linear ICs (K4):** This directly applies as difference and instrumentation amplifiers are core examples of circuits built using operational amplifier ICs.
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools (K4):** Students will use PSpice to model these amplifier configurations, apply various input conditions, and analyze the output waveforms and frequency response. This verifies their design before physical implementation and helps understand their behavior.
*   **CO4: Effectively troubleshoot a given circuit and analyze it (K4):** Lab work involves identifying and rectifying issues in the implemented circuits (e.g., incorrect output, low gain, noise). This requires analyzing the circuit's expected behavior and comparing it with the measured results.

### 5. Important Points to Remember

*   **Resistor Matching:** Crucial for both difference and instrumentation amplifiers, especially for achieving high CMRR. In difference amplifiers, $R1=R3$ and $R2=R4$. In instrumentation amplifiers, $R1$ values must be closely matched, and $R2, R3$ must also be closely matched.
*   **Gain Setting:** The differential gain is primarily set by resistor ratios. For instrumentation amplifiers, $R_G$ provides a convenient way to adjust gain without affecting input impedance.
*   **Input Impedance:** Instrumentation amplifiers offer significantly higher input impedance than basic difference amplifiers, making them superior for interfacing with high-impedance sources.
*   **CMRR:** The primary advantage of instrumentation amplifiers is their superior CMRR, enabling amplification of small differential signals in noisy environments.
*   **PSpice Simulation:** A valuable tool to predict circuit behavior, experiment with different component values, and understand the impact of non-ideal op-amp characteristics.

This comprehensive set of notes covers the fundamental concepts, practical aspects, and simulation techniques for difference and instrumentation amplifiers, aligning with the learning and course outcomes for Module 1 of your Linear Integrated Circuits Lab. Remember to refer to your textbooks for detailed derivations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
