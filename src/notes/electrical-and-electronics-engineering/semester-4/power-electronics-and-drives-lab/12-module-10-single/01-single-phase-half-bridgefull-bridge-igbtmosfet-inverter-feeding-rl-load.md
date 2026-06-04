---
title: "Single-phase half-bridge/full-bridge IGBT/MOSFET inverter feeding RL load"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 10: Single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36147"
status: "completed"
scrapedAt: "2026-05-23T16:18:09.055Z"
---
# POWER ELECTRONICS AND DRIVES LAB

## Module 10: Single-Phase Inverters

### Topic: Single-Phase Half-Bridge/Full-Bridge IGBT/MOSFET Inverter Feeding RL Load

---

### 1. Introduction to Single-Phase Inverters

An inverter is a power electronic converter that converts a DC input voltage to an AC output voltage. Single-phase inverters are used in applications where a single-phase AC output is required, such as uninterruptible power supplies (UPS), AC voltage controllers, and variable frequency drives (VFDs) for single-phase loads.

**Key Concept:** Inverters are fundamental building blocks for AC power generation and control.

**Learning Outcome Alignment:** This section helps understand the basic function of inverters, aligning with CO3 and CO4.

**Textbook Reference:**
*   **Hart (2010), Chapter 8: DC-to-AC Converters:** Provides a foundational understanding of inverter operation.
*   **Mohan, Undeland, Robbins (2022), Chapter 7: DC-to-AC Conversion (Inverters):** Offers detailed explanations of various inverter configurations.

---

### 2. Single-Phase Half-Bridge Inverter

#### 2.1. Circuit Configuration

A single-phase half-bridge inverter uses two power switches (IGBTs or MOSFETs) and two capacitors to generate a quasi-square wave output voltage.

**Circuit Diagram:**

```
      +Vdc
       |
      ---
      | |  C1
      ---
       |
     SW1 (IGBT/MOSFET) ----> Load
       |
       |
      ---
      | |  C2
      ---
       |
      GND
```

**Components:**
*   **DC Source ($V_{dc}$):** The input DC voltage.
*   **Switches (SW1, SW2):** Typically IGBTs or MOSFETs, controlled by gate drive signals. In a half-bridge, only one switch is conducting at a time (ideally).
*   **Capacitors (C1, C2):** Used to split the DC bus voltage, providing two output voltage levels. In a common configuration, C1 and C2 are equal, splitting $V_{dc}$ into $V_{dc}/2$ across each capacitor.
*   **Load:** An RL load, representing a typical inductive load with some resistance.

#### 2.2. Operating Principle

The half-bridge inverter operates by switching the power devices in a sequential manner.

1.  **Switch 1 ON, Switch 2 OFF:** The output voltage is connected to the positive DC bus, resulting in $V_{out} = +V_{dc}/2$ (assuming equal capacitors). Current flows through the RL load.
2.  **Switch 1 OFF, Switch 2 ON:** The output voltage is connected to the negative DC bus (or ground through the lower capacitor), resulting in $V_{out} = -V_{dc}/2$. Current continues to flow in the same direction through the RL load due to inductance, but it starts to decay.

**Switching Strategy:** The switches are typically controlled using a PWM (Pulse Width Modulation) or square wave switching strategy. For a fundamental output, a square wave switching is used.

**Example:**
*   **Switching Pattern:** SW1 ON for $0$ to $T/2$, SW2 ON for $T/2$ to $T$, where $T$ is the period of the output waveform.
*   **Output Voltage ($v_{out}$):** $+V_{dc}/2$ for $0$ to $T/2$, $-V_{dc}/2$ for $T/2$ to $T$.

**Key Concept:** The half-bridge inverter produces a bipolar output voltage waveform.

**Learning Outcome Alignment:** This section directly addresses CO3 by analyzing the operation of a type of switch-mode DC-AC inverter.

**Textbook Reference:**
*   **Rashid (2014), Chapter 9: Inverters:** Discusses the half-bridge inverter topology.
*   **Vithayathil (2010), Chapter 7: Inverters:** Explains the working principle of half-bridge inverters.

---

### 3. Single-Phase Full-Bridge Inverter

#### 3.1. Circuit Configuration

A single-phase full-bridge inverter uses four power switches (IGBTs or MOSFETs) and diodes to generate a bipolar output voltage waveform. It is more common than the half-bridge for producing a symmetrical bipolar output.

**Circuit Diagram:**

```
      +Vdc
       |
      ---
      | |  C
      ---
       |
     SW1 ----> Load ----> SW2
       |       RL        |
      SW3 ----> Load ----> SW4
       |                 |
      GND
```
*(Note: The above diagram is a simplified representation. In reality, each switch (SW1-SW4) will have an antiparallel diode across it for freewheeling current.)*

**Components:**
*   **DC Source ($V_{dc}$):** The input DC voltage.
*   **Switches (SW1, SW2, SW3, SW4):** Typically IGBTs or MOSFETs.
*   **Antiparallel Diodes:** Connected across each switch to provide a path for inductive current when the switches are turned OFF.
*   **Load:** An RL load.

#### 3.2. Operating Principle

The full-bridge inverter generates an AC output voltage by switching the pairs of switches in sequence.

**Operation Modes:**

1.  **SW1 ON, SW4 ON (SW2 OFF, SW3 OFF):** The output voltage is connected across the DC source, $v_{out} = +V_{dc}$. Current flows from the DC source, through SW1, RL load, and SW4 back to the DC source.
2.  **SW2 ON, SW3 ON (SW1 OFF, SW4 OFF):** The output voltage is reversed, $v_{out} = -V_{dc}$. Current flows from the DC source, through SW3, RL load, and SW2 back to the DC source (in the opposite direction of the load current in mode 1).
3.  **Freewheeling Modes:** When SW1 and SW4 are turned OFF, the inductive current from the RL load will continue to flow through the antiparallel diodes (diode across SW3 and diode across SW2). Similarly, when SW2 and SW3 are turned OFF, the current flows through the antiparallel diodes across SW1 and SW4.

**Switching Strategy:**
*   **Square Wave Operation:**
    *   SW1 and SW4 ON for $0$ to $T/2$.
    *   SW2 and SW3 ON for $T/2$ to $T$.
*   **PWM Operation:** More sophisticated switching patterns are used to control the output voltage magnitude and frequency, producing a quasi-square wave or sinusoidal PWM output.

**Key Concept:** The full-bridge inverter can produce a symmetrical bipolar output voltage ($+V_{dc}$ and $-V_{dc}$).

**Learning Outcome Alignment:** This section further elaborates on CO3 by analyzing another important inverter topology.

**Textbook Reference:**
*   **Umanand (2009), Chapter 8: DC to AC Converters:** Provides a detailed analysis of the full-bridge inverter.
*   **Agrawal (2006), Chapter 11: Inverters:** Explains the operation and applications of full-bridge inverters.

---

### 4. IGBT/MOSFET Switches

Power semiconductor devices like IGBTs (Insulated Gate Bipolar Transistors) and MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) are commonly used as switches in inverters due to their fast switching speeds, low conduction losses, and ease of control.

#### 4.1. IGBT (Insulated Gate Bipolar Transistor)

*   **Characteristics:** Combines the high input impedance of a MOSFET with the low on-state voltage drop of a bipolar transistor. Suitable for high-voltage and high-current applications.
*   **Switching Speed:** Faster than SCRs but slower than MOSFETs.
*   **Gate Drive:** Requires a specific gate drive voltage to turn ON.

**Learning Outcome Alignment:** This section directly addresses CO1: Understanding the operation of modern power semiconductor devices.

**Textbook Reference:**
*   **Hart (2010), Chapter 2: Power Semiconductor Devices:** Details the characteristics of IGBTs.
*   **Rashid (2014), Chapter 3: Power Semiconductor Devices:** Provides a comprehensive overview of IGBTs.

#### 4.2. MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)

*   **Characteristics:** Voltage-controlled device with a very high input impedance. Low on-state resistance ($R_{DS(on)}$) for a given size, leading to low conduction losses. Excellent for high-frequency switching.
*   **Switching Speed:** Very fast switching speeds.
*   **Gate Drive:** Requires a gate-to-source voltage ($V_{GS}$) to turn ON.

**Learning Outcome Alignment:** This section directly addresses CO1: Understanding the operation of modern power semiconductor devices.

**Textbook Reference:**
*   **Umanand (2009), Chapter 2: Power Semiconductor Devices:** Explains the working and characteristics of MOSFETs.
*   **Vithayathil (2010), Chapter 2: Power Semiconductor Devices:** Covers MOSFET devices and their applications.

#### 4.3. Gate Driver Circuits

IGBTs and MOSFETs require specialized gate driver circuits to switch them ON and OFF effectively. These circuits provide:
*   **Voltage Amplification:** To drive the gate capacitance.
*   **Current Drive:** To charge and discharge the gate capacitance quickly, enabling fast switching.
*   **Isolation:** Often required between the low-voltage control circuitry and the high-voltage power switches.
*   **Protection:** Over-current, over-voltage, and shoot-through protection.

**Learning Outcome Alignment:** This section directly addresses CO1: Design & Select suitable gate driver circuits.

**Textbook Reference:**
*   **Hart (2010), Chapter 7: Gate Drive Circuits:** Crucial for understanding the design of gate drivers.
*   **Mohan, Undeland, Robbins (2022), Chapter 6: Gate-Drive Circuits:** Provides practical design considerations.

#### 4.4. Heatsinks

Power electronic switches generate heat during operation due to conduction and switching losses. Heatsinks are essential for dissipating this heat and maintaining the device temperature within its safe operating limits, ensuring reliability and longevity.

**Selection Criteria:**
*   **Thermal Resistance:** The heatsink's ability to dissipate heat, measured in °C/W.
*   **Mounting:** Proper mounting to ensure good thermal contact between the device and the heatsink.
*   **Airflow:** Natural convection or forced air cooling (fan).

**Learning Outcome Alignment:** This section directly addresses CO1: Design & Select suitable gate driver circuits & heatsinks.

**Textbook Reference:**
*   **Hart (2010), Chapter 12: Thermal Management:** Covers heatsink selection and thermal design.
*   **Mohan, Undeland, Robbins (2022), Chapter 12: Thermal Design:** Discusses thermal considerations in power electronic systems.

---

### 5. Feeding RL Load

#### 5.1. Characteristics of RL Load

An RL load consists of a resistor (R) in series with an inductor (L).
*   **Resistor (R):** Dissipates energy as heat. The current is in phase with the voltage across it.
*   **Inductor (L):** Stores energy in its magnetic field. It opposes changes in current. The current lags the voltage across it by 90 degrees.

**Key Concept:** The inductor in an RL load causes the current to lag the voltage. This requires freewheeling paths for the current when the switches are turned off to prevent voltage spikes across the switches.

**Learning Outcome Alignment:** This section is directly relevant to understanding the behavior of the load, which is crucial for analyzing inverter operation, aligning with CO3.

**Textbook Reference:**
*   **Hart (2010), Chapter 1: Basic Circuit Theory:** Reviews RL circuit behavior.
*   **Rashid (2014), Chapter 1: Introduction to Power Electronics:** Briefly touches upon load characteristics.

#### 5.2. Output Voltage and Current Waveforms (Square Wave Operation with RL Load)

**Half-Bridge Inverter with RL Load (Square Wave):**
*   **Voltage:** A symmetrical square wave ($+V_{dc}/2$ and $-V_{dc}/2$).
*   **Current:** The current will be a decaying exponential during the ON time of each switch and a decaying exponential through the freewheeling diodes during the OFF time. The current waveform will be phase-shifted with respect to the voltage.
    *   When $v_{out} = +V_{dc}/2$, the current rises exponentially and then decays.
    *   When $v_{out}$ switches to $-V_{dc}/2$, the current continues to flow in the same direction but decays through the freewheeling path.

**Full-Bridge Inverter with RL Load (Square Wave):**
*   **Voltage:** A symmetrical square wave ($+V_{dc}$ and $-V_{dc}$).
*   **Current:** Similar to the half-bridge, the current will be a decaying exponential during the ON time of each pair of switches and a decaying exponential through the freewheeling diodes during the OFF time. The current will lag the voltage due to the inductance.

**Key Concept:** The presence of inductance leads to a lagging current and requires freewheeling paths. The output current is not a pure sine wave and contains harmonics.

**Learning Outcome Alignment:** This section helps in analyzing the inverter's operation with a specific load, aligning with CO3 and CO4 (improving load waveforms).

**Textbook Reference:**
*   **Umanand (2009), Chapter 8: DC to AC Converters:** Provides detailed waveforms for RL loads.
*   **Mohan, Undeland, Robbins (2022), Chapter 7: DC-to-AC Conversion (Inverters):** Illustrates current and voltage waveforms with inductive loads.

#### 5.3. Harmonic Analysis

The output voltage and current waveforms of square wave inverters are not pure sinusoids but contain harmonics.
*   **Harmonics:** Odd harmonics (3rd, 5th, 7th, etc.) are present in the square wave voltage.
*   **Current Harmonics:** The inductor acts as a filter, reducing the magnitude of higher-frequency harmonics in the current compared to the voltage.
*   **Total Harmonic Distortion (THD):** A measure of the overall harmonic content.

**Improving Load Waveforms:**
*   **PWM Techniques:** Using PWM switching strategies can significantly reduce the harmonic content of the output voltage and, consequently, the current.
*   **Filters:** LC filters can be added to the output to further smooth the waveform and reduce harmonics, approaching a sinusoidal output.

**Learning Outcome Alignment:** This section directly addresses CO4: Understanding the need for improved efficiency, improved reliability, improved load & source waveforms.

**Textbook Reference:**
*   **Agrawal (2006), Chapter 11: Inverters:** Discusses harmonic analysis of inverter output.
*   **Rashid (2014), Chapter 9: Inverters:** Covers harmonic analysis and reduction techniques.

---

### 6. Control Strategies

#### 6.1. Square Wave Control

*   **Operation:** The switches are turned ON and OFF at fundamental frequency, producing a square wave output voltage.
*   **Pros:** Simple control.
*   **Cons:** High harmonic distortion in the output voltage and current.

#### 6.2. Pulse Width Modulation (PWM) Control

*   **Operation:** The switching frequency is much higher than the fundamental output frequency. The width of the pulses is modulated to control the fundamental component of the output voltage.
*   **Types:**
    *   **Sinusoidal PWM (SPWM):** Compares a sinusoidal reference waveform with a triangular carrier waveform.
    *   **Trapezoidal PWM:** Similar to SPWM but uses a trapezoidal reference.
    *   **Space Vector PWM (SVPWM):** More complex but offers better DC bus voltage utilization and lower harmonics, especially for three-phase systems. For single-phase, SPWM is more common.
*   **Pros:** Reduced harmonic distortion, better control over output voltage magnitude and frequency.
*   **Cons:** Requires more complex control circuitry and generates high-frequency switching losses.

**Learning Outcome Alignment:** This section relates to CO2 (Analyze the operation of switching regulators, which are closely related to PWM inverters) and CO4 (improved load & source waveforms).

**Textbook Reference:**
*   **Hart (2010), Chapter 9: PWM Inverters:** Provides a thorough treatment of PWM control.
*   **Mohan, Undeland, Robbins (2022), Chapter 7: DC-to-AC Conversion (Inverters):** Explains various PWM techniques.

---

### 7. Practical Considerations and Design Aspects

#### 7.1. Switching Losses

When the power switches (IGBTs/MOSFETs) transition from ON to OFF or vice-versa, there are transient periods where both voltage and current are present across the device, leading to power dissipation (switching losses). These losses increase with switching frequency and depend on the device's switching characteristics.

**Learning Outcome Alignment:** This relates to CO4 (improved efficiency).

**Textbook Reference:**
*   **Hart (2010), Chapter 10: Switching Losses:** Detailed analysis of switching losses.
*   **Rashid (2014), Chapter 7: Switching Losses and Protection:** Covers the causes and minimization of switching losses.

#### 7.2. Conduction Losses

When a power switch is ON, there is a voltage drop across it ($V_{CE(sat)}$ for IGBT, $V_{DS(on)}$ for MOSFET), leading to power dissipation ($P_{cond} = V_{CE(sat)} \times I_C$ or $P_{cond} = I_D^2 \times R_{DS(on)}$). These losses are proportional to the average current flowing through the device.

**Learning Outcome Alignment:** This relates to CO4 (improved efficiency).

**Textbook Reference:**
*   **Hart (2010), Chapter 9: Conduction Losses:** Explains conduction losses in power devices.

#### 7.3. Dead Time

When switching complementary switches (e.g., SW1 and SW3 in a full-bridge), a small delay called "dead time" must be introduced between turning OFF one switch and turning ON the other. This prevents a shoot-through condition where both switches in a leg are simultaneously ON, which would short-circuit the DC supply and likely destroy the devices.

**Learning Outcome Alignment:** This relates to CO1 (understanding device characteristics and protection) and CO4 (improved reliability).

**Textbook Reference:**
*   **Hart (2010), Chapter 7: Gate Drive Circuits:** Discusses dead-time generation.
*   **Mohan, Undeland, Robbins (2022), Chapter 7: DC-to-AC Conversion (Inverters):** Explains the necessity of dead time.

#### 7.4. Output Filter Design (Optional)

To obtain a more sinusoidal output waveform from a PWM inverter, an output filter, typically an LC filter, can be used.
*   **Inductor (L):** Placed in series with the load to filter out high-frequency PWM switching components.
*   **Capacitor (C):** Placed in parallel with the load to bypass high-frequency components.

**Learning Outcome Alignment:** This relates to CO4 (improved load & source waveforms).

**Textbook Reference:**
*   **Hart (2010), Chapter 11: Filters:** Discusses output filter design for inverters.
*   **Mohan, Undeland, Robbins (2022), Chapter 7: DC-to-AC Conversion (Inverters):** Covers output filter design for reducing harmonics.

---

### 8. Applications

Single-phase inverters feeding RL loads find applications in:
*   **Uninterruptible Power Supplies (UPS):** Providing backup AC power from a DC source (battery).
*   **AC Voltage Controllers:** Varying the AC voltage supplied to a load, often using PWM techniques.
*   **Variable Frequency Drives (VFDs):** Controlling the speed of single-phase AC motors (though less common than three-phase VFDs).
*   **Induction Heating Systems:** Generating high-frequency AC power for heating.

**Learning Outcome Alignment:** This section provides context for the practical use of these inverters, aligning with all COs implicitly by showcasing their importance.

---

### 9. Practice Questions and Answers

**Question 1:**
Explain the operation of a single-phase full-bridge inverter feeding an RL load. Draw the circuit diagram and typical voltage and current waveforms. What is the role of antiparallel diodes?
**(Knowledge Level: K3 - CO3)**

**Answer:**
*   **Circuit Diagram:** (Refer to Section 3.1)
*   **Operation:** The full-bridge inverter uses four switches arranged in two legs. By switching pairs of switches (e.g., SW1 & SW4, then SW2 & SW3) ON and OFF, a bipolar voltage ($+V_{dc}$ and $-V_{dc}$) is applied across the RL load.
*   **Waveforms:** The output voltage is a square wave. Due to the inductor, the current lags the voltage and exhibits a decaying exponential pattern when the switches are ON and continues to decay through freewheeling diodes when the switches are OFF.
*   **Antiparallel Diodes:** These diodes are connected in reverse-parallel across each switch. They provide a path for the inductive current to freewheel when the corresponding switch is turned OFF. This prevents excessive voltage spikes across the switches due to the stored energy in the inductor and ensures continuous current flow.

**Question 2:**
What are the advantages of using IGBTs over MOSFETs in certain inverter applications? How would you select an appropriate heatsink for an IGBT?
**(Knowledge Level: K5 - CO1)**

**Answer:**
*   **Advantages of IGBTs over MOSFETs:**
    *   **Higher Voltage and Current Ratings:** IGBTs generally handle higher voltages and currents more efficiently than MOSFETs of comparable size.
    *   **Lower On-State Voltage Drop:** For high-current applications, IGBTs often have a lower $V_{CE(sat)}$ compared to the $V_{DS(on)}$ of MOSFETs, leading to lower conduction losses.
    *   **Good Switching Characteristics:** While MOSFETs are faster, IGBTs offer a good balance of switching speed and power handling capability for many inverter applications.
*   **Heatsink Selection for IGBT:**
    1.  **Calculate Power Losses:** Determine the total power losses ($P_{loss}$) of the IGBT, which include conduction losses ($P_{cond}$) and switching losses ($P_{sw}$). $P_{loss} = P_{cond} + P_{sw}$.
    2.  **Determine Maximum Junction Temperature:** Refer to the IGBT datasheet for the maximum allowable junction temperature ($T_J(max)$), typically 150-175°C.
    3.  **Determine Ambient Temperature:** The maximum expected ambient temperature ($T_A(max)$).
    4.  **Calculate Required Thermal Resistance:** The maximum allowable total thermal resistance from junction to ambient is given by:
        $R_{TH(J-A)} = \frac{T_J(max) - T_A(max)}{P_{loss}}$
    5.  **Account for IGBT Thermal Resistance:** The IGBT itself has an internal thermal resistance from junction to case ($R_{TH(J-C)}$). This must be subtracted from the total required thermal resistance to find the maximum allowable thermal resistance of the heatsink ($R_{TH(S-A)}$):
        $R_{TH(S-A)} \le R_{TH(J-A)} - R_{TH(J-C)}$
    6.  **Select Heatsink:** Choose a heatsink from manufacturer catalogs whose thermal resistance ($R_{TH(S-A)}$) is less than or equal to the calculated maximum allowable value, considering the cooling method (natural convection or forced air).

**Question 3:**
What is "dead time" in the context of a full-bridge inverter, and why is it necessary?
**(Knowledge Level: K3 - CO3, CO4)**

**Answer:**
Dead time is a short interval introduced between the turn-off of a power switch and the turn-on of its complementary switch within the same leg of the inverter. For example, in a full-bridge inverter, when SW1 is turned OFF, there is a small delay before SW3 is turned ON. This is necessary to prevent a **shoot-through** condition. Shoot-through occurs when both switches in a leg are ON simultaneously, creating a direct short circuit across the DC supply, leading to excessive current, device failure, and potential damage to the power supply. Dead time ensures that one switch is fully OFF before the other begins to conduct, providing a safe switching transition.

**Question 4:**
Describe the purpose of output filtering in PWM inverters. What components are typically used, and why?
**(Knowledge Level: K3 - CO4)**

**Answer:**
The purpose of output filtering in PWM inverters is to reduce the harmonic content of the output voltage and current, making them closer to a pure sinusoid. PWM switching, while allowing voltage control, inherently generates a waveform rich in high-frequency switching harmonics. These harmonics can cause problems such as increased losses in inductive loads, electromagnetic interference (EMI), and distorted motor performance.
Typically, an **LC filter** is used.
*   The **inductor (L)** is placed in series with the load. It opposes the rapid changes in current associated with the high-frequency switching pulses, effectively smoothing out the current waveform.
*   The **capacitor (C)** is placed in parallel with the load. It provides a low-impedance path for the high-frequency harmonic currents generated by the PWM switching, diverting them away from the load.
The combination of L and C forms a second-order low-pass filter that significantly attenuates the switching frequency components while allowing the fundamental frequency component to pass through to the load.

---

### 10. Important Points to Remember

*   **Half-bridge vs. Full-bridge:** Half-bridge uses fewer components but produces a bipolar output voltage with half the DC bus voltage. Full-bridge uses more components but provides a bipolar output voltage equal to the full DC bus voltage, with better utilization of the DC source.
*   **RL Load:** The inductor in an RL load causes the current to lag the voltage and necessitates freewheeling paths (antiparallel diodes) in the inverter switches.
*   **IGBTs and MOSFETs:** These are voltage-controlled semiconductor switches widely used in inverters. Their selection depends on the voltage, current, and switching frequency requirements.
*   **Gate Drivers and Heatsinks:** Essential for proper and safe operation of IGBTs/MOSFETs. Gate drivers ensure fast and clean switching, while heatsinks prevent overheating.
*   **Dead Time:** Crucial to prevent shoot-through in bridge configurations.
*   **Harmonics:** Square wave inverters produce significant harmonics. PWM techniques are used to reduce harmonic distortion and improve output waveform quality.
*   **Efficiency:** Conduction and switching losses reduce the efficiency of the inverter. Minimizing these losses is important for performance.

---
This comprehensive set of study notes covers the key aspects of single-phase half-bridge/full-bridge IGBT/MOSFET inverters feeding RL loads, aligning with the provided learning outcomes and course outcomes, and referencing the specified textbooks.
