---
title: "Simulation of experiments 3 or 4 from section II"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 3: Simulation of any three circuits from experiments 3, 5, 6, 7, 8, 9, 10 and 11 of section I"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8b0"
status: "completed"
scrapedAt: "2026-05-23T17:50:05.144Z"
---
# Linear Integrated Circuits Lab: Module 3 - Simulation of Experiments (Section II)

## Module 3 Overview

This module focuses on simulating circuits from **Section I** of your Linear Integrated Circuits Lab manual, specifically selecting any three experiments from numbers 3, 5, 6, 7, 8, 9, 10, and 11. However, the *topic* we are specifically focusing on for these study notes is the simulation of **Experiments 3 or 4 from Section II**. This means we'll be using simulation tools to verify the theoretical understanding of circuits covered in those experiments.

**Key Goal:** To gain hands-on experience in simulating the behavior of fundamental linear integrated circuits and linear ICs using software tools, thus achieving **CO3 (Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools. - Knowledge Level: K4)**.

---

## Section II: Experiments 3 & 4 - Simulation Focus

While Module 3 requires simulating circuits from Section I, this section of the notes dives into the simulation aspects of **Experiment 3 or 4 from Section II**. This will likely involve concepts related to op-amp applications not explicitly covered in Section I, but the simulation methodology is transferable.

**Important Note:** The specific content of Experiments 3 and 4 in Section II will depend on your lab manual. However, the general principles of simulation and the expected learning outcomes remain consistent. We will assume these experiments involve common op-amp configurations.

---

## Learning Outcomes Addressed

*   **Design and simulate the functioning of basic linear integrated circuits and linear ICs using simulation tools.** (CO3, K4) - This is the primary learning outcome for this topic. We will focus on setting up simulations, analyzing results, and understanding how op-amps behave in various configurations.
*   **Design and implement basic linear integrated circuits using Op Amps.** (CO1, K4) - While we are simulating, the process of setting up the circuit for simulation is akin to designing it. Understanding the expected output informs the design process.
*   **Design and implement basic linear integrated circuits using linear ICs.** (CO2, K4) - Similar to CO1, simulating circuits with ICs like the op-amp helps in understanding their practical implementation and behavior.
*   **Effectively troubleshoot a given circuit and analyze it.** (CO4, K4) - Simulation is a powerful troubleshooting tool. By observing unexpected simulation results, we can identify potential design flaws or incorrect component values, thereby enhancing our troubleshooting skills.

---

## Key Concepts and Definitions

### 1. Op-Amp (Operational Amplifier)

*   **Definition:** An operational amplifier (op-amp) is a high-gain, direct-coupled, differential voltage amplifier that has a single common control signal. It is used in a wide variety of applications, from signal amplification and filtering to oscillators and voltage regulation.
*   **Ideal Op-Amp Characteristics:**
    *   Infinite open-loop gain ($A_{OL} = \infty$)
    *   Infinite input impedance ($Z_{in} = \infty$)
    *   Zero output impedance ($Z_{out} = 0$)
    *   Infinite bandwidth ($\text{BW} = \infty$)
    *   Zero input offset voltage ($V_{os} = 0$)
    *   Zero input bias current ($I_B = 0$)
    *   Infinite Common-Mode Rejection Ratio (CMRR)
*   **Practical Op-Amp:** Real op-amps approximate these ideal characteristics but have limitations. Understanding these limitations is crucial for accurate simulation and design.

### 2. Simulation Tools

*   **Purpose:** Simulation tools allow us to model electronic circuits virtually before building them physically. This saves time, cost, and allows for experimentation with different parameters and circuit configurations.
*   **Common Tools:**
    *   **ORCAD PSpice:** A widely used circuit simulation software based on the SPICE (Simulation Program with Integrated Circuit Emphasis) engine. It's powerful and industry-standard. (Refer to Rashid's "Introduction to Pspice Using Orcad for Circuits and Electronics" for detailed usage.)
    *   **LTspice:** Another popular, free, and powerful SPICE simulator known for its ease of use and efficiency.
    *   **Multisim:** A widely used circuit simulation and design tool, often preferred in educational settings.

### 3. Simulation Process in SPICE-based Tools (e.g., ORCAD PSpice)

*   **Schematic Capture:** Drawing the circuit diagram using the software's graphical interface. This involves placing components (resistors, capacitors, op-amps, voltage sources, etc.) and connecting them with wires.
*   **Component Selection:** Choosing the correct op-amp model (e.g., LM741, TL072) and other components with appropriate values.
*   **Netlisting:** The schematic capture tool automatically generates a netlist, which is a text-based description of the circuit and its connections. This is what the SPICE engine reads.
*   **Simulation Type:** Selecting the type of analysis to perform:
    *   **DC Analysis:** Determines the DC operating point of the circuit.
    *   **AC Analysis (Small Signal Analysis):** Analyzes the circuit's frequency response to small sinusoidal inputs. This is crucial for understanding filters, amplifiers, etc.
    *   **Transient Analysis:** Analyzes the circuit's behavior over time in response to time-varying inputs (e.g., square waves, sine waves). This is used for oscillators, waveform generators, etc.
*   **Running the Simulation:** Executing the chosen analysis.
*   **Viewing Results:** Analyzing the output waveforms or data generated by the simulator using graphical tools (e.g., plotting voltage vs. time, gain vs. frequency).

### 4. Common Op-Amp Configurations (Likely encountered in Section II, Experiments 3 & 4)

*   **Inverting Amplifier:**
    *   **Circuit:** Input signal applied to the inverting terminal through a resistor ($R_{in}$). Feedback resistor ($R_f$) connects output to the inverting terminal. Non-inverting terminal is grounded.
    *   **Gain:** $A_v = -\frac{R_f}{R_{in}}$
    *   **Phase Shift:** 180 degrees.
    *   **Simulation Goal:** Verify the gain and phase shift. Observe the effect of input signal amplitude and frequency.
*   **Non-Inverting Amplifier:**
    *   **Circuit:** Input signal applied to the non-inverting terminal. Feedback network ($R_f$ and $R_1$) connects output to the inverting terminal. Inverting terminal is connected to ground through $R_1$.
    *   **Gain:** $A_v = 1 + \frac{R_f}{R_1}$
    *   **Phase Shift:** 0 degrees.
    *   **Simulation Goal:** Verify the gain and phase shift. Observe the effect of input signal amplitude and frequency.
*   **Voltage Follower (Buffer):**
    *   **Circuit:** Output is directly connected to the inverting terminal. Input signal applied to the non-inverting terminal.
    *   **Gain:** $A_v = 1$
    *   **Use:** Impedance matching, isolating stages.
    *   **Simulation Goal:** Verify the unity gain and observe its buffering effect (e.g., driving a low-impedance load without significant signal loss).
*   **Summing Amplifier:**
    *   **Circuit:** Multiple input signals are applied to the inverting terminal through individual input resistors ($R_{in1}, R_{in2}, ...$). A feedback resistor ($R_f$) connects the output to the inverting terminal.
    *   **Output Voltage:** $V_{out} = -\frac{R_f}{R_{in1}}V_{in1} - \frac{R_f}{R_{in2}}V_{in2} - ...$
    *   **Simulation Goal:** Verify the weighted sum of input voltages. Observe the effect of different input resistor values.
*   **Difference Amplifier:**
    *   **Circuit:** Two input signals ($V_{in1}$, $V_{in2}$) are applied to the non-inverting and inverting terminals respectively through respective resistor networks.
    *   **Output Voltage:** $V_{out} = \frac{R_f}{R_{in1}}(V_{in2} - V_{in1})$ (with appropriate resistor matching).
    *   **Simulation Goal:** Verify the subtraction of input voltages and the gain.

---

## Practical Examples and Simulation Steps (Using ORCAD PSpice as an example)

Let's consider simulating an **Inverting Amplifier** using ORCAD PSpice.

### Experiment Simulation Example: Inverting Amplifier

**Objective:** To simulate an inverting amplifier with a specific gain and analyze its output waveform.

**Circuit Diagram:**
(Imagine a schematic: Op-amp with power supply pins, non-inverting input grounded, $R_{in}$ from input voltage source to inverting input, $R_f$ from output to inverting input.)

**Component Values (Example):**
*   Op-amp: LM741
*   $R_{in} = 10 \text{ k}\Omega$
*   $R_f = 100 \text{ k}\Omega$
*   Input Voltage Source ($V_{in}$): Sine wave, $1 \text{ V}$ amplitude, $1 \text{ kHz}$ frequency.
*   Power Supplies: $\pm 15 \text{ V}$ to op-amp.

**Simulation Steps in ORCAD PSpice:**

1.  **Create a New Project:** Start PSpice, create a new project, and select "Schematic Capture".
2.  **Place Components:**
    *   From the "PSpice" or "Simulation" menu, select "Add Library" and add "analog.slb" and "Source.slb" (or similar, depending on your PSpice version).
    *   Place the Op-amp (e.g., LM741) from the library.
    *   Place Resistors ($R$).
    *   Place Voltage Sources ($V_{AC}$ for sine wave, $V_{DC}$ for power supplies).
    *   Place Ground.
3.  **Wire Components:** Connect the components according to the inverting amplifier circuit diagram.
    *   Connect the non-inverting input of the op-amp to ground.
    *   Connect $R_{in}$ between the input voltage source and the inverting input.
    *   Connect $R_f$ between the output of the op-amp and the inverting input.
    *   Connect the positive power supply ($\text{+Vcc}$) to the op-amp's positive power pin and the negative power supply ($\text{-Vee}$) to the negative power pin.
    *   Connect the input voltage source to $R_{in}$.
4.  **Configure Components:**
    *   **Resistors:** Double-click on each resistor to set its value ($R_{in}=10k$, $R_f=100k$).
    *   **Voltage Source ($V_{in}$):** Double-click on the AC voltage source. Select "SIN" as the waveform. Set Amplitude = 1V, Frequency = 1kHz, VDC = 0V.
    *   **Power Supplies:** Set the DC voltage sources to +15V and -15V.
5.  **Create Simulation Profile:**
    *   Go to "PSpice" -> "New Simulation Profile".
    *   Give it a name (e.g., "Inverting_Amp_Sim").
    *   Select the "Analysis Type" as **Transient**.
    *   Set the "Run Time" to simulate at least two full cycles of the input signal. For a 1kHz signal, a run time of 2ms or 3ms would be appropriate. You can also set "Time to Start Saving Data" to 0s.
6.  **Run Simulation:** Go to "PSpice" -> "Run".
7.  **Analyze Results:**
    *   A plot window will appear.
    *   **Add Traces:** Click "Add Trace" and select the voltage at the output node (e.g., `V(out)` or the name of the node connected to the op-amp's output) and the input node (e.g., `V(in)` or the name of the node connected to the input voltage source).
    *   **Observe Waveforms:** You should see the output waveform as a sine wave with an amplitude of approximately 10V (gain of -10) and a 180-degree phase shift relative to the input.
    *   **Measure Values:** Use the cursor tools in the plot window to measure peak-to-peak voltages and confirm the gain.

**Expected Simulation Outcome:** The output voltage waveform should be an inverted sine wave with an amplitude of approximately 10V.

**For Section II, Experiment 3 or 4, you would follow similar steps, adapting the circuit diagram, component values, and simulation type (e.g., AC analysis to check frequency response, or transient for non-sinusoidal inputs).**

---

## Practice Questions and Exercises

**(Answers provided at the end)**

**Question 1:**
You are simulating a non-inverting amplifier with $R_1 = 10 \text{ k}\Omega$ and $R_f = 50 \text{ k}\Omega$. What is the expected voltage gain in your simulation?
a) 5
b) 6
c) -5
d) -6

**Question 2:**
When simulating an inverting amplifier, if you observe an output that is in phase with the input and has a gain of 1, what could be a possible mistake in your simulation setup?
a) Incorrect resistor values.
b) Wrong op-amp model.
c) Input signal is connected to the non-inverting terminal instead of the inverting terminal.
d) Incorrect power supply voltages.

**Question 3:**
Which type of analysis would you primarily use to observe the frequency response of an op-amp filter circuit?
a) Transient Analysis
b) DC Analysis
c) AC Analysis (Small Signal Analysis)
d) Noise Analysis

**Question 4:**
Describe the expected output waveform when simulating a summing amplifier with two input voltages: $V_{in1} = 1\text{V}$ (sine, 1kHz) and $V_{in2} = 0.5\text{V}$ (sine, 1kHz) with $R_{in1} = R_{in2} = 10\text{k}\Omega$ and $R_f = 20\text{k}\Omega$.

---

## Important Points to Remember

*   **Op-Amp Models:** Always select an appropriate op-amp model for your simulation. The LM741 is a classic but has limitations. Newer op-amps like TL072 or LM358 have different characteristics (e.g., lower noise, higher slew rate, rail-to-rail output). Refer to the datasheets if possible.
*   **Power Supplies:** Op-amps require DC power supplies ($\text{+Vcc}$ and $\text{-Vee}$). Ensure these are connected correctly to the op-amp in your schematic and set to appropriate voltage levels. The output swing of the op-amp is limited by these supply voltages.
*   **Ground Connections:** Proper grounding is critical for any circuit, including simulations. Ensure all ground references are connected correctly.
*   **Input Signals:** Use appropriate input signals for the type of circuit and analysis. Sine waves are common for AC analysis, while square waves or pulses are used for transient analysis.
*   **Simulation Time:** For transient analysis, ensure the simulation time is long enough to observe several cycles of the input waveform and for the circuit to settle into its steady-state behavior.
*   **Understanding Output:** Always compare your simulation results with theoretical calculations. Discrepancies can highlight errors in your setup, component values, or understanding of the circuit's behavior.
*   **Gain Calculation:** Remember that ideal op-amp formulas provide a good starting point. Practical op-amps have finite gain, bandwidth limitations, and slew rate limitations that can affect the output, especially at higher frequencies or amplitudes.
*   **Textbook References:**
    *   D. Roy Choudhary and Shail B Jain's "Linear Integrated Circuits" will provide the theoretical background for the circuits you are simulating. Understanding the derivations and expected behaviors from this book is crucial.
    *   M. H. Rashid's "Introduction to Pspice Using Orcad for Circuits and Electronics" is your primary guide for the simulation software itself. Familiarize yourself with its chapters on schematic capture, component placement, simulation types, and result analysis.

---

## Answers to Practice Questions

**Answer 1:**
The gain of a non-inverting amplifier is given by $A_v = 1 + \frac{R_f}{R_1}$.
With $R_f = 50 \text{ k}\Omega$ and $R_1 = 10 \text{ k}\Omega$, $A_v = 1 + \frac{50k}{10k} = 1 + 5 = 6$.
**Correct Answer: b) 6**

**Answer 2:**
An inverting amplifier produces a 180-degree phase shift. A gain of 1 with no phase shift and the input connected to the non-inverting terminal is characteristic of a voltage follower (or a non-inverting amplifier with $R_f = 0$ or $R_1 = \infty$). Connecting the input signal to the non-inverting terminal of an op-amp circuit designed for inversion would lead to such behavior.
**Correct Answer: c) Input signal is connected to the non-inverting terminal instead of the inverting terminal.**

**Answer 3:**
AC analysis (also known as small-signal analysis) is used to determine how a circuit responds to sinusoidal inputs of varying frequencies, which is essential for understanding frequency response, bandwidth, and filtering characteristics.
**Correct Answer: c) AC Analysis (Small Signal Analysis)**

**Answer 4:**
For a summing amplifier with $R_{in1} = R_{in2} = 10\text{k}\Omega$ and $R_f = 20\text{k}\Omega$, the output voltage is given by:
$V_{out} = -\frac{R_f}{R_{in1}}V_{in1} - \frac{R_f}{R_{in2}}V_{in2}$
$V_{out} = -\frac{20k}{10k}(1\text{V}) - \frac{20k}{10k}(0.5\text{V})$
$V_{out} = -2(1\text{V}) - 2(0.5\text{V})$
$V_{out} = -2\text{V} - 1\text{V}$
$V_{out} = -3\text{V}$

The output waveform will be a sine wave with an amplitude of 3V, and it will be inverted relative to the sum of the individual input signals (if we considered them as positive). Since both inputs are sine waves of the same frequency (1kHz), the output will also be a sine wave at 1kHz, with an amplitude of 3V and a 180-degree phase shift compared to a hypothetical positive sum of the inputs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
