---
title: "Three-phase IGBT/MOSFET inverter feeding RL Load"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 14: Three"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3614f"
status: "completed"
scrapedAt: "2026-05-23T16:18:12.229Z"
---
# Power Electronics and Drives Lab: Module 14 - Three-phase IGBT/MOSFET Inverter Feeding RL Load

## Introduction to Three-Phase Inverters

Three-phase inverters are fundamental building blocks in power electronics, converting DC power into variable-frequency, variable-voltage three-phase AC power. This is crucial for applications like motor drives, uninterruptible power supplies (UPS), and grid-connected systems. This module focuses on the operation of three-phase inverters using IGBTs or MOSFETs, specifically when feeding a common RL load.

**Key Concepts:**

*   **Inverter:** A power electronic converter that transforms DC power into AC power.
*   **Three-Phase System:** An AC power system that utilizes three alternating currents, offset in phase by 120 electrical degrees.
*   **IGBT (Insulated Gate Bipolar Transistor):** A widely used power semiconductor switch combining the high input impedance of a MOSFET with the high current handling capability of a bipolar transistor.
*   **MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** Another popular power semiconductor switch, known for its fast switching speeds and low on-state voltage drop, especially at lower power levels.
*   **RL Load:** A load consisting of both resistive (R) and inductive (L) components. In three-phase systems, this typically represents the windings of a motor.

**Relevance to Course Outcomes:**

*   **CO3 (Understand the features of different types of switch mode DC-AC Inverters and Analyse the operation - Knowledge Level: K3):** This module directly addresses the understanding and analysis of a specific type of switch-mode DC-AC inverter.
*   **CO1 (Understand the operation of modern power semiconductor devices, its characteristics and Design & Select suitable gate driver circuits & heatsinks - Knowledge Level: K5):** While the focus is on the inverter's operation with an RL load, understanding the characteristics of IGBTs/MOSFETs (as mentioned in CO1) is crucial for their effective switching and control.

---

## 1. Basic Structure and Operation of a Three-Phase Voltage Source Inverter (VSI)

A three-phase VSI is typically constructed using six semiconductor switches (IGBTs or MOSFETs) arranged in a bridge configuration. Each leg of the bridge controls one phase of the AC output.

**Structure:**

*   A DC source (e.g., battery, DC link capacitor).
*   Six power switches (IGBTs or MOSFETs) configured as three legs.
*   Each leg consists of two switches connected in series across the DC source. A freewheeling diode is connected in antiparallel with each switch to provide a path for inductive current reversal.

**Operation Principle:**

The inverter operates by switching the semiconductor devices in a specific sequence to generate a three-phase AC voltage. The switching pattern determines the output voltage waveform and frequency.

*   **Switching States:** At any instant, each leg can be in one of two states:
    *   **Upper switch ON, Lower switch OFF:** The output terminal of that leg is connected to the positive DC bus.
    *   **Upper switch OFF, Lower switch ON:** The output terminal of that leg is connected to the negative DC bus.
*   **Output Voltage:** The line-to-line voltages are the difference between the phase voltages. The phase voltages are determined by the switching states of the respective legs.
*   **Switching Frequency:** The rate at which the switches are turned ON and OFF. Higher switching frequencies generally result in smoother output waveforms but also increase switching losses.

**Example (Simplified for one leg):**

Consider a single leg with an IGBT ($Q_1$) and a diode ($D_1$) in series across the DC source.

*   If $Q_1$ is ON and $D_1$ is OFF, the output terminal is at $+V_{dc}/2$ (assuming a split DC bus for simplicity of illustration).
*   If $Q_1$ is OFF and $D_1$ is ON, the output terminal is at $-V_{dc}/2$.

**Referencing Textbooks:**

*   **Ned Mohan, Undeland, Robbins (3e):** Chapter 7 covers inverters and their various configurations, including the six-step and PWM methods.
*   **Muhammad H. Rashid:** Chapter 10 discusses DC-AC converters, with detailed explanations of three-phase bridge configurations and PWM techniques.

---

## 2. Switching Strategies for Three-Phase Inverters

To synthesize AC waveforms, various switching strategies are employed. The most common ones for three-phase inverters are:

### 2.1. Six-Step (180-Degree) Commutation

This is a fundamental switching scheme where each IGBT/MOSFET is switched ON and OFF for 180 degrees of the fundamental output cycle.

**Operation:**

*   The switching sequence ensures that at any instant, two switches are ON, and two are OFF across the three phases.
*   This results in a quasi-square wave output voltage waveform for each phase.
*   The output line-to-line voltages are approximately sinusoidal, but contain significant harmonic content, particularly the 5th and 7th harmonics, which can be eliminated by specific switching sequences.

**Advantage:**

*   Simple control logic.
*   Lower switching losses as switches are turned ON and OFF only once per half cycle.

**Disadvantage:**

*   Poor harmonic content in the phase voltages, requiring filtering if smooth sinusoidal output is needed.
*   Limited controllability of the fundamental output voltage magnitude.

**Referencing Textbooks:**

*   **L. Umanand:** Chapter 8 discusses different inverter switching strategies, including the 180-degree conduction mode.
*   **Jai P Agrawal:** Chapter 5 provides a detailed analysis of PWM inverters and discusses simpler switching schemes.

### 2.2. Pulse Width Modulation (PWM) Techniques

PWM techniques involve rapidly switching the devices ON and OFF within each half cycle to approximate a sinusoidal output voltage. This offers better control over the fundamental output voltage and reduces harmonic content.

**Common PWM Techniques:**

*   **Sinusoidal PWM (SPWM):**
    *   **Principle:** Compares a sinusoidal reference waveform for each phase with a high-frequency triangular carrier wave.
    *   **Switching Logic:** The upper switch of a leg is turned ON when the reference voltage is greater than the carrier, and the lower switch is turned ON when the reference is less than the carrier.
    *   **Output:** Generates a fundamental frequency sinusoidal output voltage with reduced harmonic distortion.
    *   **Modulation Index (m):** The ratio of the amplitude of the reference sinusoidal voltage to the amplitude of the carrier wave. It controls the magnitude of the fundamental output voltage.
        *   $m < 1$: Linear modulation, output voltage is proportional to $m$.
        *   $m = 1$: Normal PWM, maximum fundamental voltage is achieved without over-modulation.
        *   $m > 1$: Over-modulation, can increase fundamental output voltage but distorts the waveform.

*   **Space Vector PWM (SVPWM):**
    *   **Principle:** Directly controls the voltage vector in the complex plane formed by the three phase voltages.
    *   **Advantage:** Achieves higher fundamental voltage utilization (up to $2/\sqrt{3}$ times the DC link voltage) compared to SPWM before over-modulation.
    *   **Complexity:** More complex control algorithm.

**Example (SPWM):**

For phase 'a', if the sinusoidal reference voltage $V_{ref,a}$ is greater than the triangular carrier $V_{carrier}$, the upper IGBT $Q_{a1}$ is ON and the lower IGBT $Q_{a2}$ is OFF. If $V_{ref,a} < V_{carrier}$, then $Q_{a1}$ is OFF and $Q_{a2}$ is ON. The same logic applies to phases 'b' and 'c' with their respective reference voltages, which are phase-shifted by 120 degrees.

**Referencing Textbooks:**

*   **Ned Mohan, Siddharth Raju:** Chapter 5 extensively covers PWM techniques, including SPWM, and their implementation.
*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju:** This reference is excellent for practical understanding and simulation aspects of PWM strategies.
*   **Joseph Vithayathil:** Chapter 10 details PWM techniques and their applications in inverters.

---

## 3. Feeding an RL Load

When a three-phase inverter feeds an RL load, the inductive component of the load plays a significant role in the current waveform and the need for freewheeling diodes.

**Characteristics of RL Load:**

*   **Resistive Component (R):** Causes current to flow in phase with the voltage.
*   **Inductive Component (L):** Causes current to lag behind the voltage. The inductive nature stores energy in its magnetic field.

**Current Behavior:**

*   Due to the inductance, the current cannot change instantaneously. When a switch is turned OFF, the inductive current will continue to flow.
*   **Freewheeling Diodes:** These diodes are essential. When an IGBT/MOSFET is turned OFF, and there is a current flowing through the inductor, the diode antiparallel to that switch provides a path for the current to continue flowing, thus protecting the switch from overvoltage.

**Effect of Switching Strategy on RL Load:**

*   **Six-Step Inverter:** The quasi-square wave voltage will result in a current waveform that is more distorted than the voltage due to the lagging nature of the inductive current. The current will tend to be more trapezoidal.
*   **PWM Inverter:** The PWM voltage, which is closer to sinusoidal, will result in a current waveform that is also closer to sinusoidal, albeit lagging the voltage due to the inductive load. The amplitude of the fundamental current is determined by the fundamental output voltage and the impedance of the RL load at the fundamental frequency.

**Harmonic Currents:**

Even with PWM, the output current will contain harmonics. The inductive nature of the load influences how these harmonics manifest. The impedance of the load is frequency-dependent ($Z = R + j\omega L$). For higher-order harmonics, the inductive reactance ($ \omega L $) becomes dominant, causing the current amplitude to decrease as frequency increases.

**Example (Idealized Current Path):**

Consider a single phase connected to an RL load. If the upper switch is ON, the voltage is $V_{dc}$, and current flows through the switch and the RL load. If the upper switch is turned OFF and the lower switch is turned ON, the voltage becomes 0 (or $-V_{dc}$ depending on configuration), and the inductive current now flows through the lower switch and the RL load. If the lower switch is also turned OFF, the current would naturally flow through the freewheeling diode and the RL load, dissipating energy in the resistor.

**Referencing Textbooks:**

*   **D.W. Hart:** Chapter 7 discusses the behavior of inductive loads with inverters and the role of freewheeling diodes.
*   **Cyril W Lander:** Chapter 12 covers AC voltage controllers and inverters feeding inductive loads.

---

## 4. Gate Driver Circuits and Protection

For proper operation and to prevent damage to the IGBTs/MOSFETs, appropriate gate driver circuits are essential.

**Gate Driver Functions:**

*   **Signal Amplification:** The low-power control signals from a microcontroller are not sufficient to drive the gates of power semiconductor devices. Gate drivers provide the necessary voltage and current amplification.
*   **Isolation:** Often, the control circuit (low voltage) is isolated from the power circuit (high voltage) for safety and to prevent noise coupling. This is achieved using optocouplers or transformers.
*   **Level Shifting:** To interface with different voltage levels between the control signal and the gate terminal.
*   **Protection:**
    *   **Overcurrent Protection:** Detecting excessive current and shutting down the switches.
    *   **Overvoltage Protection:** Protecting against voltage spikes.
    *   **Shoot-through Prevention:** Preventing both switches in a leg from being ON simultaneously, which would short-circuit the DC link.

**Heatsinks:**

Power semiconductor devices generate heat due to conduction losses (on-state voltage drop) and switching losses. Heatsinks are used to dissipate this heat into the surrounding environment, maintaining the device temperature within its safe operating limits.

*   **Heatsink Selection:** Depends on the power dissipation of the device, the ambient temperature, and the desired junction temperature. Thermal resistance is a key parameter.

**Referencing Textbooks:**

*   **CO1 (Understand the operation of modern power semiconductor devices, its characteristics and Design & Select suitable gate driver circuits & heatsinks - Knowledge Level: K5):** This section directly aligns with the design and selection aspects mentioned in CO1.
*   **Power Electronics- Essentials and Applications by L. Umanand:** Chapter 5 discusses gate driver circuits and protection mechanisms.
*   **Power Electronic Systems- Theory and Design by Jai P Agrawal:** Chapter 7 covers gate drive requirements and thermal management.

---

## 5. Practical Considerations and Lab Experiment

In a lab setting, implementing and observing the behavior of a three-phase inverter feeding an RL load involves several practical aspects.

**Typical Lab Setup:**

*   **DC Power Source:** A variable DC voltage source.
*   **Three-Phase Inverter Module:** Pre-built or custom-built inverter board with IGBTs or MOSFETs.
*   **Gate Driver ICs:** To drive the switches.
*   **Microcontroller/DSP:** To generate PWM signals.
*   **RL Load:** Typically composed of resistors and inductors, often representing a small three-phase motor.
*   **Measurement Equipment:** Oscilloscope, current probes, voltage probes, power meter.

**Key Measurements and Observations:**

*   **Switch Voltages:** Observe the voltage across individual switches ($V_{CE}$ for IGBT, $V_{DS}$ for MOSFET).
*   **Switch Currents:** Observe the current through individual switches and their freewheeling diodes.
*   **Phase Voltages:** Measure the output voltage waveform for each phase.
*   **Line-to-Line Voltages:** Measure the voltage between two phases.
*   **Phase Currents:** Measure the current drawn by the RL load for each phase.
*   **DC Link Voltage:** Monitor the input DC voltage.
*   **Effect of Modulation Index:** Observe how changing the modulation index affects the amplitude of the output fundamental voltage.
*   **Effect of Load:** Observe the behavior with different RL load values.

**Lab Exercises/Questions:**

1.  **Six-Step Inverter Output:**
    *   **Question:** Connect a three-phase inverter to an RL load and generate a six-step output. Observe the phase voltage and phase current waveforms on an oscilloscope. Sketch the waveforms and explain the shape of the current waveform in relation to the voltage waveform, considering the inductive nature of the load.
    *   **Answer Hint:** The phase voltage will be a quasi-square wave. The phase current will lag the voltage due to the inductance. The lagging effect will be more pronounced at lower frequencies and less pronounced at higher frequencies. The current waveform will appear more rounded than the voltage.

2.  **SPWM Inverter Output:**
    *   **Question:** Configure the inverter to operate using SPWM. Set the modulation index ($m$) to 0.8 and observe the phase voltage and phase current waveforms. How do these waveforms compare to the six-step operation? Explain the role of the modulation index in controlling the output voltage.
    *   **Answer Hint:** The phase voltage will be much closer to a sinusoidal waveform. The phase current will also be closer to sinusoidal and lagging the voltage. Increasing $m$ (within the linear range) increases the amplitude of the fundamental output voltage.

3.  **Harmonic Analysis:**
    *   **Question:** Using the FFT (Fast Fourier Transform) function on your oscilloscope or a dedicated spectrum analyzer, analyze the harmonic content of the phase current waveform under SPWM operation. Identify the dominant harmonics. How does the inductive load affect the amplitude of these harmonics compared to a purely resistive load?
    *   **Answer Hint:** The dominant harmonics in SPWM are typically the switching frequency sidebands and their multiples. For an RL load, the magnitude of current harmonics will generally decrease with increasing harmonic order due to the increasing inductive reactance ($Z_{RL} = R + j\omega L$). This is a significant advantage over a resistive load, where harmonic currents would be less attenuated.

4.  **Freewheeling Diode Operation:**
    *   **Question:** Observe the voltage across one of the IGBTs/MOSFETs in a leg when it is turned OFF while current is still flowing through the load. What is the role of the antiparallel freewheeling diode in this scenario?
    *   **Answer Hint:** When the switch turns OFF, the inductive current cannot change instantaneously. The freewheeling diode provides a path for this current to circulate, preventing a large inductive voltage spike across the open switch, which could damage the device. The current then decays through the load resistance and the diode.

5.  **Gate Driver Functionality:**
    *   **Question:** Explain the key components and functions of a typical gate driver circuit for an IGBT. Why is isolation crucial? What is a common method to prevent shoot-through in an inverter leg?
    *   **Answer Hint:** Key components include buffer amplifiers, level shifters, and isolation circuits (e.g., optocouplers). Isolation is crucial for safety and noise immunity. Shoot-through is prevented by implementing dead-time control, ensuring that before the lower switch turns ON, the upper switch is fully OFF, and vice-versa.

---

## Summary and Important Points to Remember

*   Three-phase inverters are crucial for AC power control.
*   IGBTs and MOSFETs are common semiconductor switches used in these inverters.
*   An RL load causes the current to lag the voltage due to the inductive component.
*   Freewheeling diodes are essential to handle inductive current reversal and protect the switches.
*   **Six-Step Commutation:** Simple, low switching frequency, but produces quasi-square wave outputs with significant harmonics.
*   **PWM Techniques (SPWM, SVPWM):** Provide better waveform quality and control by rapidly switching devices. SPWM is widely used for its balance of performance and complexity.
*   **Modulation Index (m):** Controls the fundamental output voltage magnitude in PWM techniques.
*   Gate driver circuits are necessary for proper switching of power devices, providing amplification, isolation, and protection.
*   Heatsinks are vital for thermal management of power devices.
*   The inductive nature of the load affects current waveforms and harmonic content. The impedance of the RL load increases with frequency, attenuating higher-order harmonics.

---
This comprehensive study note covers the essential aspects of Module 14, focusing on three-phase IGBT/MOSFET inverters feeding RL loads. It aims to align with the provided learning outcomes and course outcomes, offering theoretical background, practical considerations, and self-assessment questions. Remember to consult the specified textbooks for deeper insights and detailed derivations.
