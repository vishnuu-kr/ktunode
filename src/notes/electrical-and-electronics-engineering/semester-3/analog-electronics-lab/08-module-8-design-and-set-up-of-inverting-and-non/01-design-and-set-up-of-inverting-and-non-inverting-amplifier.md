---
title: "Design and set up of inverting and non-inverting amplifier."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 8: Design and set up of inverting and non"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d55"
status: "completed"
scrapedAt: "2026-05-23T16:11:07.283Z"
---
# ANALOG ELECTRONICS LAB - Module 8: Design and Set Up of Inverting and Non-Inverting Amplifiers

## 1. Introduction to Amplifiers and Operational Amplifiers (Op-Amps)

This module focuses on the practical implementation of two fundamental amplifier configurations using operational amplifiers (Op-Amps): the **inverting amplifier** and the **non-inverting amplifier**. Amplifiers are circuits that increase the amplitude of an electrical signal. Op-Amps are versatile integrated circuits that, when used with external components like resistors and capacitors, can perform a wide range of analog signal processing functions, including amplification.

**Key Concept:** An amplifier's primary function is to produce a larger version of an input signal at its output. The ratio of the output signal amplitude to the input signal amplitude is called the **gain**.

**Referenced Textbooks:**

*   **Paynter, R. T. (Year). *Introductory Electronic Devices and Circuits*. Pearson Education.** (Likely covers basic amplifier principles and Op-Amp characteristics.)
*   **Boylestad, R. L., & Nashelsky, L. (Year). *Electronic Devices and Circuit Theory*. Pearson Education.** (Expected to provide detailed analysis of Op-Amp circuits and their applications.)
*   **Neaman, D. A. (Year). *Electronic Circuits: Analysis and Design*. McGraw Hill Companies.** (Will offer in-depth design considerations and analysis techniques for amplifier circuits.)

**Course Outcome Alignment:**

*   **CO1: Use the various electronic instruments and for conducting experiments. (K1)** - This module will involve using oscilloscopes, function generators, multimeters, and breadboards to build and test these amplifier circuits.
*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)** - This module directly addresses the design and implementation of Op-Amp based circuits.

---

## 2. The Ideal Operational Amplifier (Op-Amp)

To understand the behavior of inverting and non-inverting amplifiers, it's crucial to understand the characteristics of an **ideal Op-Amp**. While real Op-Amps have non-ideal characteristics, the ideal model simplifies analysis and design.

**Key Concepts & Definitions:**

*   **Differential Input:** An Op-Amp has two input terminals: the non-inverting input (+) and the inverting input (-). The output is proportional to the difference between the voltages at these two inputs.
*   **Output:** The Op-Amp produces an output voltage ($V_{out}$) that is a function of the differential input voltage ($V_{id} = V_+ - V_-$).
*   **Open-Loop Gain ($A_{OL}$):** The gain of the Op-Amp without any external feedback. In an ideal Op-Amp, $A_{OL}$ is considered infinite.
*   **Input Impedance ($Z_{in}$):** The impedance seen by the input signal source. In an ideal Op-Amp, $Z_{in}$ is infinite. This means no current flows into the input terminals.
*   **Output Impedance ($Z_{out}$):** The impedance seen by the load connected to the output. In an ideal Op-Amp, $Z_{out}$ is zero. This means the Op-Amp can drive any load without its output voltage dropping.
*   **Bandwidth:** The range of frequencies over which the Op-Amp can amplify. In an ideal Op-Amp, bandwidth is infinite.
*   **Common-Mode Rejection Ratio (CMRR):** The ability of the Op-Amp to reject signals that are common to both inputs. In an ideal Op-Amp, CMRR is infinite.

**Ideal Op-Amp Rules for Analysis (with negative feedback):**

1.  **The voltage difference between the inverting and non-inverting inputs is zero ($V_+ = V_-$).** This is often called the "virtual short" or "virtual ground" concept when one of the inputs is grounded.
2.  **No current flows into the input terminals ($I_+ = I_- = 0$).**

**Referenced Textbooks:**

*   **Boylestad & Nashelsky:** Likely provides a thorough explanation of ideal Op-Amp characteristics and their implications.
*   **Neaman:** Will delve deeper into the mathematical analysis of Op-Amp circuits using these ideal properties.

**Important Point to Remember:** The virtual short and zero input current are powerful tools for simplifying the analysis of Op-Amp circuits, especially when negative feedback is employed.

---

## 3. The Inverting Amplifier

The inverting amplifier configuration produces an output signal that is an amplified version of the input signal but is **180 degrees out of phase**.

**Circuit Diagram:**

```
      R1
Vin ----/\/\/\----(-)---- Vout
                |
                |     Op-Amp
                | (+)-----
                |
               GND
```

*   $V_{in}$: Input voltage signal.
*   $R_1$: Input resistor.
*   $R_f$: Feedback resistor.
*   $V_{out}$: Output voltage.
*   The inverting input (-) of the Op-Amp is connected to the junction of $R_1$ and $R_f$.
*   The non-inverting input (+) is connected to ground (0V).

**Design and Analysis:**

Using the ideal Op-Amp rules:

1.  **Virtual Ground:** Since the non-inverting input (+) is at 0V, the inverting input (-) will also be at 0V ($V_- = V_+ = 0V$). This creates a "virtual ground" at the inverting input.
2.  **No Input Current:** No current flows into the inverting input terminal of the Op-Amp ($I_- = 0$).

Now, let's analyze the currents:

*   **Current through $R_1$ ($I_1$):**
    $I_1 = \frac{V_{in} - V_-}{R_1} = \frac{V_{in} - 0}{R_1} = \frac{V_{in}}{R_1}$

*   **Current through $R_f$ ($I_f$):**
    The current $I_f$ flows from the virtual ground towards the output.
    $I_f = \frac{V_- - V_{out}}{R_f} = \frac{0 - V_{out}}{R_f} = -\frac{V_{out}}{R_f}$

Since no current flows into the Op-Amp's input ($I_- = 0$), the current flowing through $R_1$ must flow through $R_f$:

$I_1 = I_f$

$\frac{V_{in}}{R_1} = -\frac{V_{out}}{R_f}$

Rearranging for $V_{out}$:

$V_{out} = -\frac{R_f}{R_1} V_{in}$

**Key Concepts & Definitions:**

*   **Voltage Gain ($A_v$):** The ratio of the output voltage to the input voltage.
    $A_v = \frac{V_{out}}{V_{in}} = -\frac{R_f}{R_1}$
    The negative sign indicates the 180-degree phase inversion.
*   **Input Impedance ($Z_{in}$):** The impedance seen by the input signal source. In this configuration, the input signal sees $R_1$ connected to the virtual ground.
    $Z_{in} = R_1$
*   **Output Impedance ($Z_{out}$):** Ideally zero, as per the ideal Op-Amp.

**Design Example:** Design an inverting amplifier with a voltage gain of -10.

*   Choose $R_1$. A common starting point is $R_1 = 10 \text{ k}\Omega$.
*   Calculate $R_f$:
    $A_v = -\frac{R_f}{R_1}$
    $-10 = -\frac{R_f}{10 \text{ k}\Omega}$
    $R_f = 10 \times 10 \text{ k}\Omega = 100 \text{ k}\Omega$

**Important Points to Remember:**

*   The gain is determined solely by the ratio of feedback resistor to input resistor ($R_f/R_1$).
*   The input impedance is equal to the value of the input resistor ($R_1$).
*   The output is inverted relative to the input.
*   For stability and proper operation, ensure the Op-Amp is powered correctly with appropriate positive and negative supply voltages.

**Referenced Textbooks:**

*   **Paynter:** Likely covers the basic inverting amplifier configuration and its gain calculation.
*   **Boylestad & Nashelsky:** Will provide detailed mathematical derivations and practical considerations for this circuit.
*   **Neaman:** Focuses on the design process and analysis of this fundamental amplifier.

**Course Outcome Alignment:**

*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)** - Directly relates to designing and implementing this Op-Amp circuit.

---

## 4. The Non-Inverting Amplifier

The non-inverting amplifier configuration produces an output signal that is an amplified version of the input signal and is **in phase** with the input.

**Circuit Diagram:**

```
      R1
GND --/\/\/\----(-)---- Vout
              |
              |     Op-Amp
         Vin --(+)-----
              |
              Rf
              |
              |----(-)---- Vout
```

*   $V_{in}$: Input voltage signal.
*   $R_1$: Resistor connected from inverting input to ground.
*   $R_f$: Feedback resistor connected from output to inverting input.
*   $V_{out}$: Output voltage.
*   The non-inverting input (+) of the Op-Amp is directly connected to the input signal $V_{in}$.
*   The inverting input (-) is connected to a voltage divider formed by $R_1$ and $R_f$.

**Design and Analysis:**

Using the ideal Op-Amp rules:

1.  **Equal Input Voltages:** Since the non-inverting input (+) is at $V_{in}$, the inverting input (-) will also be at $V_{in}$ ($V_- = V_+ = V_{in}$).
2.  **No Input Current:** No current flows into the input terminals of the Op-Amp ($I_+ = I_- = 0$).

Let's analyze the currents:

*   **Current through $R_f$ ($I_f$):**
    $I_f = \frac{V_{out} - V_-}{R_f} = \frac{V_{out} - V_{in}}{R_f}$

*   **Current through $R_1$ ($I_1$):**
    This current flows from the inverting input (-) to ground.
    $I_1 = \frac{V_- - 0}{R_1} = \frac{V_{in}}{R_1}$

Since no current flows into the Op-Amp's input ($I_- = 0$), the current flowing through $R_f$ must also flow through $R_1$:

$I_f = I_1$

$\frac{V_{out} - V_{in}}{R_f} = \frac{V_{in}}{R_1}$

Rearranging for $V_{out}$:

$V_{out} - V_{in} = \frac{R_f}{R_1} V_{in}$

$V_{out} = V_{in} + \frac{R_f}{R_1} V_{in}$

$V_{out} = \left(1 + \frac{R_f}{R_1}\right) V_{in}$

**Key Concepts & Definitions:**

*   **Voltage Gain ($A_v$):**
    $A_v = \frac{V_{out}}{V_{in}} = 1 + \frac{R_f}{R_1}$
    The gain is always greater than or equal to 1.
*   **Input Impedance ($Z_{in}$):** The input signal sees the very high input impedance of the Op-Amp directly.
    $Z_{in} = \infty$ (ideally)
    In reality, it's very high, typically in the megaohms.
*   **Output Impedance ($Z_{out}$):** Ideally zero.

**Design Example:** Design a non-inverting amplifier with a voltage gain of 11.

*   Choose $R_1$. Let $R_1 = 10 \text{ k}\Omega$.
*   Calculate $R_f$:
    $A_v = 1 + \frac{R_f}{R_1}$
    $11 = 1 + \frac{R_f}{10 \text{ k}\Omega}$
    $10 = \frac{R_f}{10 \text{ k}\Omega}$
    $R_f = 10 \times 10 \text{ k}\Omega = 100 \text{ k}\Omega$

**Important Points to Remember:**

*   The gain is always positive (no phase inversion) and is greater than or equal to 1.
*   The input impedance is extremely high, making it ideal for amplifying signals from sources with high output impedance.
*   The gain is set by the ratio of $R_f/R_1$ plus 1.
*   The Op-Amp requires dual power supplies (e.g., +15V and -15V) for proper operation, and the output voltage swing is limited by these supply voltages.

**Referenced Textbooks:**

*   **Paynter:** Will introduce the non-inverting amplifier configuration and its gain formula.
*   **Boylestad & Nashelsky:** Offers a comprehensive analysis, including derivations and practical considerations.
*   **Neaman:** Provides design methodologies and analysis techniques for this circuit.

**Course Outcome Alignment:**

*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)** - Directly relates to designing and implementing this Op-Amp circuit.

---

## 5. Experimental Setup and Procedures

This section outlines the practical aspects of setting up and testing inverting and non-inverting amplifier circuits in the lab.

**Key Concepts & Definitions:**

*   **Breadboard:** A solderless prototyping board used to build and test electronic circuits.
*   **Function Generator:** An instrument that generates various types of electrical waveforms (sine, square, triangle) at adjustable frequencies and amplitudes.
*   **Oscilloscope:** An instrument that displays the voltage of a signal as a function of time, allowing visualization of input and output waveforms and measurement of amplitude, frequency, and phase.
*   **Multimeter:** Used to measure voltage, current, and resistance.

**Instruments Required (CO1 Alignment):**

1.  **Operational Amplifier IC (e.g., LM741, TL072):** A common and readily available Op-Amp.
2.  **Resistors:** Various values as per design calculations (e.g., 1k$\Omega$, 10k$\Omega$, 100k$\Omega$).
3.  **Breadboard:** For circuit construction.
4.  **Connecting Wires:** For making connections on the breadboard.
5.  **DC Power Supply (Dual Output):** Required to power the Op-Amp (e.g., +15V and -15V).
6.  **Function Generator:** To provide the input signal.
7.  **Oscilloscope:** To observe and measure input and output waveforms.
8.  **Multimeter:** To check resistor values and DC supply voltages.

**General Procedure:**

1.  **Circuit Design:** Based on the desired gain, calculate the resistor values ($R_1$ and $R_f$).
2.  **Component Selection:** Select resistors of appropriate values. Ensure they are within tolerance.
3.  **Breadboard Setup:**
    *   Identify the power supply pins and input/output pins of the chosen Op-Amp IC.
    *   Connect the Op-Amp to the breadboard.
    *   Connect the power supply to the Op-Amp's power pins (+Vcc and -Vee). **Crucially, ensure correct polarity.**
    *   Wire the external components ($R_1$, $R_f$) according to the chosen configuration (inverting or non-inverting).
    *   Connect the input signal from the function generator to the appropriate input terminal.
    *   Connect the oscilloscope probes to the input and output terminals to observe waveforms.
4.  **Power On:** Turn on the DC power supply.
5.  **Function Generator Setup:**
    *   Set the function generator to produce a suitable input waveform (e.g., a sine wave).
    *   Set an appropriate frequency (e.g., 1kHz) and amplitude for the input signal. Avoid very high frequencies initially, as they can reveal non-ideal Op-Amp behavior.
6.  **Observation and Measurement:**
    *   **Inverting Amplifier:** Observe the output waveform on the oscilloscope. Verify that it's amplified and inverted (180 degrees out of phase) compared to the input. Measure the peak-to-peak voltage of both input and output.
    *   **Non-Inverting Amplifier:** Observe the output waveform. Verify that it's amplified and in phase with the input. Measure the peak-to-peak voltage of both input and output.
7.  **Gain Calculation:** Calculate the actual gain from the measured input and output voltages and compare it with the theoretically calculated gain.
8.  **Frequency Response (Optional but recommended):** Vary the frequency of the input signal and observe how the gain changes. This will demonstrate the bandwidth limitations of the Op-Amp.

**Important Considerations for Practical Setup:**

*   **Power Supply:** Ensure the Op-Amp is powered correctly with bipolar supplies (+Vcc and -Vee). Most Op-Amps require this.
*   **Grounding:** Proper grounding is essential to avoid ground loops and noise.
*   **Decoupling Capacitors:** For high-frequency applications or to improve stability, small ceramic capacitors (e.g., 0.1$\mu$F) should be placed close to the Op-Amp's power supply pins and connected to ground. This helps to filter out power supply noise.
*   **Input Signal Amplitude:** Do not apply input signals that are too large, as this can cause the Op-Amp output to "clip" (saturate) at the power supply rails, distorting the output.
*   **Resistor Tolerances:** Real resistors have tolerances (e.g., 5% or 1%). This will cause a slight deviation between the calculated and actual gain.

**Referenced Textbooks:**

*   **Paynter:** Likely includes chapters on practical Op-Amp circuits and laboratory procedures.
*   **Boylestad & Nashelsky:** Will provide detailed instructions and expected results for experimental verification.
*   **Neaman:** May discuss experimental validation and error analysis.

**Course Outcome Alignment:**

*   **CO1: Use the various electronic instruments and for conducting experiments. (K1)** - This section is directly about the practical use of lab instruments.
*   **CO5: Simulate electronic circuits using any circuit simulation software. (K3)** - While not explicitly stated in the procedure, simulation can be a valuable pre-lab activity to verify calculations and understand circuit behavior before building it.

---

## 6. Practice Questions and Exercises

**Question 1 (Inverting Amplifier):**
Design an inverting amplifier using an Op-Amp (LM741) to achieve a voltage gain of -20. If you use an input resistor $R_1 = 10 \text{ k}\Omega$, what value of feedback resistor $R_f$ would you need?
**Answer:** $A_v = -R_f/R_1 \implies -20 = -R_f/10k\Omega \implies R_f = 200k\Omega$.

**Question 2 (Non-Inverting Amplifier):**
Design a non-inverting amplifier using an Op-Amp to achieve a voltage gain of +5. If you choose $R_1 = 1 \text{ k}\Omega$, what value of $R_f$ is required?
**Answer:** $A_v = 1 + R_f/R_1 \implies 5 = 1 + R_f/1k\Omega \implies 4 = R_f/1k\Omega \implies R_f = 4k\Omega$.

**Question 3 (Inverting Amplifier - Input Impedance):**
What is the input impedance of an inverting amplifier with $R_1 = 10 \text{ k}\Omega$ and $R_f = 100 \text{ k}\Omega$?
**Answer:** The input impedance of an inverting amplifier is equal to the input resistor, $R_1$. So, $Z_{in} = 10 \text{ k}\Omega$.

**Question 4 (Non-Inverting Amplifier - Input Impedance):**
What is the input impedance of a non-inverting amplifier?
**Answer:** Ideally, the input impedance of a non-inverting amplifier is infinite, as it is determined by the Op-Amp's intrinsic input impedance.

**Question 5 (Practical Considerations):**
When building an Op-Amp circuit, what is the purpose of decoupling capacitors placed near the power supply pins?
**Answer:** Decoupling capacitors help to filter out high-frequency noise from the power supply and improve the stability of the Op-Amp by providing a local reservoir of charge.

**Course Outcome Alignment:**

*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)** - These questions directly test the understanding of designing and analyzing these circuits.

---

## 7. Conclusion and Further Exploration

By successfully designing and setting up inverting and non-inverting amplifier circuits, you have gained practical experience with fundamental Op-Amp applications. These configurations are building blocks for more complex analog circuits.

**Further Exploration:**

*   **Inverting Summing Amplifier:** Combine multiple input signals that are summed at the inverting input.
*   **Non-Inverting Summing Amplifier:** Similar to the inverting summing amplifier but with a non-inverting configuration.
*   **Voltage Follower (Unity Gain Buffer):** A special case of the non-inverting amplifier where $R_f = 0$ and $R_1 = \infty$ (or $R_f = R_1$, setting gain to 2, then using a feedback resistor from the output to the inverting input of value $R_1$ such that $1+R_f/R_1 = 1$. This requires $R_f=0$). It has a gain of +1 and is used for impedance matching.
*   **Difference Amplifier:** Amplifies the difference between two input signals.
*   **Frequency Response Analysis:** Investigate how the gain of these amplifiers changes with varying input signal frequencies. This will highlight concepts like bandwidth and slew rate.
*   **Non-Ideal Op-Amp Effects:** Research and experiment with non-ideal Op-Amp characteristics like finite gain, input bias current, input offset voltage, and slew rate, and how they affect circuit performance.

**Referenced Textbooks:**

*   All three textbooks will likely offer sections on these more advanced Op-Amp circuits and Op-Amp limitations.

**Course Outcome Alignment:**

*   **CO3: Design and implement amplifier and oscillator circuits using BJT and JFET. (K3)** - While this module focuses on Op-Amps, understanding amplifier principles is transferable.
*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)** - Encourages further exploration of Op-Amp capabilities.
*   **CO5: Simulate electronic circuits using any circuit simulation software. (K3)** - Simulation is excellent for exploring frequency response and non-ideal effects.

---
