---
title: "Single phase unidirectional/bidirectional interface – boost PWM rectifier"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 16: Single phase unidirectional/bidirectional interface – boost PWM rectifier"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36153"
status: "completed"
scrapedAt: "2026-05-23T16:18:13.811Z"
---
# Power Electronics and Drives Lab - Module 16: Single-Phase Unidirectional/Bidirectional Interface – Boost PWM Rectifier

## 1. Introduction to Rectifiers and the Need for Boost Rectifiers

Rectifiers are essential power electronic converters that convert AC voltage to DC voltage. Conventional uncontrolled rectifiers (e.g., half-wave, full-wave bridge) using diodes are simple but suffer from several drawbacks:

*   **Poor Power Factor:** They draw non-sinusoidal current from the AC source, leading to a low power factor and harmonic distortion.
*   **Harmonics Injection:** They inject significant current harmonics back into the AC supply, which can affect other connected loads and the grid quality.
*   **No Control over Output Voltage:** The output DC voltage is directly related to the AC input voltage and is not easily controllable without additional components.
*   **Susceptibility to Input Voltage Fluctuations:** The output voltage directly follows the input voltage variations.

To overcome these limitations, **controlled rectifiers** and **active front-end (AFE) rectifiers** are employed. Boost PWM rectifiers fall under the category of active front-end rectifiers, offering significant advantages.

**Key Concepts:**

*   **Rectifier:** A circuit that converts AC to DC.
*   **Harmonic Distortion:** The presence of unwanted frequencies in the AC current or voltage waveforms.
*   **Power Factor (PF):** The ratio of real power to apparent power, ideally close to unity. A low PF indicates inefficiency and poor quality power transfer.
*   **Active Front-End (AFE):** A rectifier that uses switching power electronic converters (like IGBTs, MOSFETs) and control algorithms to achieve high power quality (e.g., unity PF, low harmonics).

**Learning Outcome Coverage:**

*   **CO4 (K3):** Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface. Boost PWM rectifiers directly address improved load & source waveforms and improved utility interface.

**Referenced Concepts:**

*   **Mohan, Undeland, Robbins (Wiley India, 2022):** Discusses the limitations of conventional rectifiers and introduces the concept of AFE rectifiers for improved grid interface.
*   **Rashid (Pearson, 2014):** Provides a detailed analysis of harmonic distortion and power factor issues in uncontrolled rectifiers.

---

## 2. Understanding the Boost PWM Rectifier

A Boost PWM Rectifier is a type of active front-end rectifier that utilizes the principles of a boost converter to achieve several desirable characteristics, including:

*   **Unity Power Factor Operation:** It can draw sinusoidal current from the AC mains that is in phase with the input voltage.
*   **Bidirectional Power Flow (Optional):** Depending on the configuration, it can also transfer power from the DC side back to the AC grid, enabling regenerative braking.
*   **Controllable DC Output Voltage:** The DC output voltage can be regulated to a desired level, independent of the AC input voltage (as long as the AC input is sufficient to boost).
*   **Reduced Harmonic Distortion:** Both input current and output voltage waveforms are significantly improved.

**Two Main Configurations:**

### 2.1. Single-Phase Unidirectional Boost PWM Rectifier

This configuration allows power flow only from the AC source to the DC load.

**Circuit Topology:**

*   **Input Stage:** Connects to the single-phase AC mains (e.g., 230V, 50Hz).
*   **Switching Stage:** Typically consists of a **single controlled switch** (e.g., IGBT or MOSFET) and a **diode**. The switch is operated at high frequency (PWM switching).
*   **Inductor (L):** Placed in series with the AC source. This inductor is crucial for filtering the AC current and enabling the boost operation.
*   **Output Stage:** Consists of a DC-link capacitor and the DC load.

**Operating Principle (Simplified):**

The unidirectional boost PWM rectifier operates by controlling the duty cycle of the switching element. The switching is synchronized with the AC input voltage.

1.  **Switch ON State:** When the controlled switch is turned ON, the inductor current ramps up, storing energy from the AC source. The diode is reverse-biased. The DC link capacitor supplies the load.
2.  **Switch OFF State:** When the controlled switch is turned OFF, the inductor current continues to flow due to its inductance. This current now flows through the diode to the DC link capacitor and the load, increasing the DC output voltage. The inductor current ramps down.

By varying the ON-time and OFF-time (duty cycle) of the controlled switch at a high frequency, the rectifier effectively controls the energy transfer from the AC source to the DC output, achieving voltage boosting and current shaping.

**Key Components and Their Roles:**

*   **Controlled Switch (IGBT/MOSFET):** Used for high-frequency switching to control the energy flow.
*   **Diode:** Acts as a freewheeling path for the inductor current during the switch OFF state and allows unidirectional current flow.
*   **Inductor (L):** Essential for storing energy and shaping the input current waveform to be sinusoidal and in phase with the input voltage. It also limits the rate of change of current.
*   **DC-Link Capacitor (C):** Filters the pulsed current from the switching stage, providing a relatively smooth DC voltage to the load. It also absorbs energy during the switch OFF state.

**Control Strategy:**

The control strategy typically aims to:

1.  **Maintain a constant DC output voltage:** A voltage control loop (e.g., PI controller) adjusts the duty cycle based on the difference between the desired and actual DC voltage.
2.  **Achieve unity power factor:** A current control loop (e.g., PI controller) shapes the input current to be sinusoidal and in phase with the input voltage. This is often achieved by controlling the inductor current to follow a reference current that is in phase with the AC voltage.

**Example:** Consider a system where the AC input is 230V RMS, 50Hz, and the desired DC output is 300V. The boost rectifier can step up the voltage and draw a sinusoidal current from the mains, maintaining a constant 300V at the DC output, regardless of fluctuations in the AC input (within limits).

**Learning Outcome Coverage:**

*   **CO1 (K5):** Understanding the operation of modern power semiconductor devices (IGBT/MOSFET) and selecting suitable gate driver circuits and heatsinks (crucial for switching devices).
*   **CO2 (K4):** Analyzing the operation of switching regulators and phase-controlled rectifiers (boost rectifier is a form of controlled rectification and involves switching principles).
*   **CO4 (K3):** Understanding the need for improved load & source waveforms and improved utility interface.

**Referenced Concepts:**

*   **Umanand (John Wiley, 2009):** Discusses the operation of boost converters and their application in rectifiers, emphasizing PWM control.
*   **Hart (McGraw Hill, 2010):** Explains the fundamental principles of inductor current control and PWM techniques.
*   **Krein (Oxford, 2017):** Provides a comprehensive overview of converter topologies, including boost converters and their control.

---

### 2.2. Single-Phase Bidirectional Boost PWM Rectifier

This configuration allows power flow in both directions: from AC to DC (rectification) and from DC to AC (inversion). This is often referred to as a **single-phase four-quadrant converter** or an **active front-end converter**.

**Circuit Topology:**

A common topology for a bidirectional boost rectifier involves:

*   **Full-Bridge Converter:** Four controlled switches (e.g., IGBTs or MOSFETs) arranged in a full-bridge configuration.
*   **Inductor (L):** Connected in series with the AC source.
*   **DC-Link Capacitor (C):** On the DC side.

**Operating Principle:**

By appropriately controlling the switching of the four semiconductor switches, the converter can:

*   **Operate as a Rectifier (AC to DC):**
    *   Similar to the unidirectional case, but with more flexibility. The switches are controlled to draw sinusoidal AC current and boost the voltage to the DC link.
    *   By controlling the phase of the AC current relative to the AC voltage, unity power factor can be achieved.
    *   If the control is set to allow power flow from AC to DC, it acts as a rectifier.

*   **Operate as an Inverter (DC to AC):**
    *   When power needs to be returned to the AC grid (e.g., regenerative braking in a motor drive), the converter operates in inversion mode.
    *   The DC-link capacitor supplies energy, and the switches are controlled to inject a sinusoidal current into the AC mains, which is in phase with the AC voltage (for unity PF).
    *   This allows for controlled power export to the grid.

**Key Components and Their Roles:**

*   **Four Controlled Switches (IGBTs/MOSFETs):** Provide flexibility for bidirectional current flow and voltage control in both rectification and inversion.
*   **Inductor (L):** Acts as a current filter and energy storage element, essential for both directions of power flow.
*   **DC-Link Capacitor (C):** Stabilizes the DC voltage and provides a buffer for energy exchange.

**Control Strategy:**

The control strategy for a bidirectional converter is more complex and typically involves:

1.  **Outer Voltage Control Loop:** Maintains the DC-link voltage at a desired setpoint.
2.  **Inner Current Control Loops:** Control the AC input current to be sinusoidal and in phase with the AC voltage (for unity PF operation in both rectification and inversion). This involves controlling the switching of the bridge legs.
3.  **Mode Selection:** Logic to switch between rectification and inversion based on the system's requirements.

**Example:** In an electric vehicle regenerative braking system, a bidirectional boost rectifier can convert the kinetic energy of the vehicle into electrical energy (DC) and then invert it back to the AC grid.

**Learning Outcome Coverage:**

*   **CO1 (K5):** Understanding the operation of modern power semiconductor devices (IGBTs/MOSFETs) and selecting suitable gate driver circuits and heatsinks.
*   **CO2 (K4):** Analyzing the operation of phase-controlled rectifiers (boost rectifier is a type of controlled rectifier) and their ability to control power flow.
*   **CO4 (K3):** Understanding the need for improved load & source waveforms and improved utility interface, especially the ability to inject power back into the grid.

**Referenced Concepts:**

*   **Agrawal (Pearson, 2006):** Discusses the principles of bidirectional power flow and active front-end converters.
*   **Ned Mohan, Siddharth Raju (Wiley, 2023):** Likely covers simulation and laboratory implementation aspects of these converters, highlighting practical control strategies.
*   **Rashid (Pearson, 2014):** Provides detailed analysis of bridge converter topologies and PWM control for bidirectional operation.

---

## 3. Pulse Width Modulation (PWM) Techniques

PWM is a technique used to control the output voltage of power converters by switching the power devices at high frequencies. The width of the pulses applied to the switching devices is varied to control the average voltage and current delivered to the load.

**Key Concepts:**

*   **Switching Frequency (f_sw):** The frequency at which the power devices are switched on and off. Typically in the kHz range.
*   **Duty Cycle (D):** The ratio of the ON time of the switching device to the total switching period ($D = t_{on} / T_{sw}$).
*   **Carrier Signal:** A high-frequency signal, usually a triangle or sawtooth wave.
*   **Modulating Signal:** The reference waveform (e.g., a sine wave) that determines the desired output voltage or current.

**Common PWM Techniques for Boost Rectifiers:**

### 3.1. Sinusoidal PWM (SPWM)

SPWM is widely used for AC-side control to achieve sinusoidal input currents and unity power factor.

**Principle:**

*   The **modulating signal** is a sine wave (representing the desired AC input current reference, which should be in phase with the AC voltage).
*   The **carrier signal** is a high-frequency triangle or sawtooth wave.
*   The controlled switch is turned ON when the modulating signal is greater than the carrier signal, and OFF when it is less.

**How it works for Rectification:**

1.  **AC voltage sensing:** The AC input voltage is sensed.
2.  **Current reference generation:** A reference current waveform is generated that is sinusoidal and in phase with the AC voltage. This ensures unity power factor.
3.  **PWM generation:** The reference current (or a function of it) is compared with the carrier signal. The output of this comparison determines the switching pattern of the controlled switch (in the unidirectional case) or the bridge legs (in the bidirectional case).
4.  **Boost operation:** The PWM switching action controls the energy transfer through the inductor, allowing the output DC voltage to be boosted.

**For the Unidirectional Boost Rectifier:**

The switching of the main controlled switch is modulated by comparing a reference current (derived from the DC voltage error and the AC voltage signal) with a high-frequency triangle wave.

**For the Bidirectional Boost Rectifier (Full-Bridge):**

*   **Rectification Mode:** The switches are controlled to achieve a boost operation, drawing a sinusoidal current in phase with the input voltage.
*   **Inversion Mode:** The switches are controlled to inject a sinusoidal current into the AC mains, in phase with the AC voltage, thus returning power to the grid. This involves modulating the bridge leg switches based on the difference between the desired AC current and the actual AC current.

**Example:** To draw a sinusoidal current from the AC mains, the PWM modulator generates pulses whose width varies sinusoidally. This controls the average inductor current, making it follow the desired sinusoidal reference.

**Learning Outcome Coverage:**

*   **CO2 (K4):** Analyzing the operation of switching regulators, which heavily rely on PWM for voltage control.
*   **CO4 (K3):** Understanding how PWM contributes to improved load and source waveforms by generating high-quality output and input currents.

**Referenced Concepts:**

*   **Hart (McGraw Hill, 2010):** Provides in-depth explanations of various PWM techniques, including SPWM, and their implementation.
*   **Mohan, Undeland, Robbins (Wiley India, 2022):** Discusses PWM strategies for active rectifiers to achieve unity power factor and low harmonic distortion.
*   **Xiao (McGrawHill, 2021):** Offers step-by-step design and simulation of PWM control strategies for power converters.

---

## 4. Control Objectives and Implementation

The primary control objectives for a boost PWM rectifier are:

1.  **Regulation of DC-Link Voltage:** Maintaining the DC output voltage at a desired constant level, irrespective of load variations and AC input voltage fluctuations.
2.  **Unity Power Factor Operation:** Ensuring that the current drawn from the AC source is sinusoidal and in phase with the AC voltage. This maximizes power transfer efficiency and minimizes harmonics injected into the grid.
3.  **Line Current Harmonic Minimization:** Reducing the harmonic content of the AC input current.
4.  **Fast Dynamic Response:** The converter should respond quickly to changes in the load or AC input voltage.

**Control Architecture:**

A typical control structure involves cascaded control loops:

*   **Outer Voltage Control Loop:**
    *   Measures the DC-link voltage.
    *   Compares it with the reference DC voltage.
    *   A PI (Proportional-Integral) controller generates a reference for the AC current magnitude. This PI controller ensures zero steady-state error in the DC voltage.

*   **Inner Current Control Loop(s):**
    *   **For Unidirectional Boost:** A PI controller regulates the inductor current, which is shaped by the PWM to be in phase with the AC voltage. The output of the voltage loop provides the amplitude of this reference current.
    *   **For Bidirectional Boost (Full-Bridge):**
        *   Two current controllers (one for each AC current component, e.g., in a rotating reference frame, or direct PI controllers for in-phase and quadrature components in the stationary frame) regulate the AC input currents.
        *   One controller ensures the "d" component of current (in phase with voltage) is controlled for power transfer.
        *   The other controller ensures the "q" component of current (in quadrature with voltage) is controlled to zero for unity power factor.

*   **PWM Generator:** Takes the current references and the carrier signal to produce the switching signals for the power devices.

**Implementation Aspects:**

*   **Digital Signal Processors (DSPs) or Microcontrollers:** These are commonly used to implement the control algorithms due to their processing power and ability to handle real-time control.
*   **Sensors:** Voltage sensors (for AC input and DC output) and current sensors (for AC input and possibly DC link) are required to provide feedback to the controller.
*   **Gate Driver Circuits:** Essential to interface the low-power control signals from the DSP to the high-power switching devices (IGBTs/MOSFETs) with appropriate voltage and current levels, as well as protection.
*   **Synchronization:** The PWM generation must be synchronized with the AC input voltage waveform. This is typically achieved by using a phase-locked loop (PLL) or by sensing the zero-crossing of the AC voltage.

**Important Points to Remember:**

*   **Zero Crossing Detection:** Crucial for synchronizing the PWM with the AC line.
*   **PI Controller Tuning:** Proper tuning of PI controllers is essential for stable and fast response.
*   **Switching Frequency vs. Efficiency:** Higher switching frequencies lead to smaller passive components (inductor, capacitor) but increase switching losses. A trade-off is necessary.
*   **Dead Time Insertion:** Essential in bridge converters to prevent shoot-through (short-circuiting of a DC link capacitor through two switches in the same leg).

**Learning Outcome Coverage:**

*   **CO1 (K5):** Designing and selecting suitable gate driver circuits and understanding the characteristics of power semiconductor devices used in the control system.
*   **CO2 (K4):** Analyzing the operation of switching regulators and controllers for achieving desired output.
*   **CO4 (K3):** Understanding how control strategies improve source waveforms and utility interface.

**Referenced Concepts:**

*   **Umanand (John Wiley, 2009):** Discusses control strategies for active rectifiers, including voltage and current control loops.
*   **Agrawal (Pearson, 2006):** Covers various control techniques for power converters.
*   **Ned Mohan, Undeland, Robbins (Wiley India, 2022):** Provides detailed explanations of control systems for active rectifiers.
*   **Vithayathil (Tata McGraw Hill, 2010):** Explains the fundamental principles of feedback control applied to power converters.

---

## 5. Advantages and Disadvantages

**Advantages of Boost PWM Rectifiers:**

*   **Improved Power Quality:**
    *   **Unity Power Factor:** Draws sinusoidal current in phase with the voltage.
    *   **Low Input Current Harmonics:** Meets power quality standards (e.g., IEEE 519).
*   **Reduced Size of Passive Components:** Due to the high switching frequency, the required inductor and capacitor values are smaller compared to conventional rectifiers for the same performance.
*   **Voltage Boosting Capability:** Can provide an output DC voltage higher than the peak of the AC input voltage.
*   **Bidirectional Power Flow (for full-bridge type):** Enables regenerative braking and grid-connected operation.
*   **Input Voltage Regulation:** The output DC voltage can be regulated independently of the AC input voltage variations (within limits).

**Disadvantages of Boost PWM Rectifiers:**

*   **Complexity:** More complex control circuitry and higher number of components compared to uncontrolled rectifiers.
*   **Cost:** Higher cost due to the use of active switching devices, gate drivers, and sophisticated control.
*   **Switching Losses:** Switching losses in the power devices can impact efficiency, especially at higher switching frequencies and power levels.
*   **Electromagnetic Interference (EMI):** High-frequency switching can generate significant EMI, requiring careful design and filtering.

**Learning Outcome Coverage:**

*   **CO4 (K3):** Directly relates to the advantages of improved load & source waveforms and utility interface.

**Referenced Concepts:**

*   **Lander (McGrawHill, 1993):** Provides a broad overview of the pros and cons of different power electronic converter types.
*   **Rashid (Pearson, 2014):** Discusses the trade-offs in converter design, including efficiency, cost, and complexity.

---

## 6. Applications

Boost PWM rectifiers find applications in various fields where high power quality and controllability are essential:

*   **Adjustable Speed Drives (ASDs):** Used as the input stage for motor drives (e.g., induction motors, DC motors) to provide a regulated DC bus voltage and achieve high power factor. This directly relates to CO5.
*   **Uninterruptible Power Supplies (UPS):** As the rectifier front-end for high-performance UPS systems.
*   **Battery Chargers:** For electric vehicles and other battery storage systems, allowing efficient charging and potential grid interaction.
*   **Renewable Energy Systems:** In grid-connected solar inverters and wind turbine converters as the AC-DC interface.
*   **Power Factor Correction:** To improve the power factor of inductive loads.
*   **High-Quality DC Power Supplies:** Where a clean and stable DC voltage is required.

**Learning Outcome Coverage:**

*   **CO5 (K4):** Directly applicable to adjustable speed drives as the input stage for DC motor and Induction Motor drives.

**Referenced Concepts:**

*   **Mohan, Undeland, Robbins (Wiley India, 2022):** Discusses applications of active rectifiers in motor drives and other systems.
*   **Agrawal (Pearson, 2006):** Covers a wide range of applications for power electronic converters.

---

## 7. Practice Questions and Answers

**Question 1:** What is the primary advantage of using a Boost PWM rectifier over a conventional diode rectifier in terms of power quality?
    *   **Answer:** Improved power quality, specifically achieving unity power factor and significantly reducing input current harmonics.

**Question 2:** Explain the role of the inductor in a single-phase unidirectional boost PWM rectifier.
    *   **Answer:** The inductor is crucial for storing energy from the AC source and shaping the input current to be sinusoidal and in phase with the AC voltage. It also limits the rate of change of current.

**Question 3:** In a bidirectional boost PWM rectifier operating in inversion mode, what is the purpose of the DC-link capacitor?
    *   **Answer:** The DC-link capacitor supplies the energy to be inverted and returned to the AC grid. It also helps in filtering the pulsed currents generated during switching.

**Question 4:** What is the main difference in the switching stage topology between a unidirectional and a bidirectional boost PWM rectifier?
    *   **Answer:** A unidirectional boost rectifier typically uses a single controlled switch and a diode. A bidirectional boost rectifier (often a full-bridge type) uses four controlled switches to allow power flow in both directions.

**Question 5:** What are the two main control objectives for a boost PWM rectifier?
    *   **Answer:** Regulation of the DC-link voltage and achieving unity power factor operation with sinusoidal input currents.

**Question 6:** What is the most common type of controller used in the outer voltage control loop of a boost PWM rectifier, and why?
    *   **Answer:** A PI (Proportional-Integral) controller is commonly used because it can achieve zero steady-state error in the DC voltage regulation.

**Question 7:** What is a potential disadvantage of operating a boost PWM rectifier at very high switching frequencies?
    *   **Answer:** Increased switching losses in the power semiconductor devices, which can reduce overall efficiency.

**Question 8:** Briefly describe the principle of Sinusoidal PWM (SPWM) for current control.
    *   **Answer:** SPWM involves comparing a sinusoidal reference signal (e.g., current reference) with a high-frequency triangular carrier signal. The switching of the power device is controlled based on whether the reference signal is greater or less than the carrier signal.

**Question 9:** How does a boost PWM rectifier contribute to an improved utility interface?
    *   **Answer:** By drawing sinusoidal currents in phase with the voltage (unity power factor) and with low harmonic content, it minimizes disturbances to the AC grid, thereby improving the utility interface.

**Question 10:** For a DC motor drive, how would a bidirectional boost PWM rectifier typically be used?
    *   **Answer:** It would act as the front-end converter, drawing power from the AC mains and providing a regulated DC voltage to the motor drive's DC bus. In case of regenerative braking, it would invert the DC power back to the AC grid, enabling energy recovery. (Relates to CO5).

---

## 8. Important Points to Remember

*   **Boost rectifier:** Achieves voltage boosting and current shaping using PWM control.
*   **Unidirectional:** AC to DC power flow.
*   **Bidirectional:** AC to DC and DC to AC power flow (e.g., regenerative braking).
*   **Key components:** Inductor, controlled switches (IGBT/MOSFET), diode (for unidirectional), DC-link capacitor.
*   **Control objectives:** Unity power factor, regulated DC voltage, low harmonics.
*   **PWM:** Essential for controlling the switching devices and achieving desired output.
*   **Synchronization:** Critical for grid-connected operation.
*   **Advantages:** High power quality, compact size.
*   **Disadvantages:** Complexity, cost, switching losses.
*   **Applications:** Motor drives, UPS, battery chargers, renewable energy.
*   **CO4:** Focuses on the benefits of improved waveforms and utility interface, which are the hallmark of boost PWM rectifiers.
*   **CO5:** Directly relevant to applications in adjustable speed drives for DC and induction motors.

---
This comprehensive set of notes covers Module 16 on single-phase unidirectional/bidirectional interface – boost PWM rectifier, aligning with the provided learning outcomes and course outcomes, and referencing the specified textbooks.
