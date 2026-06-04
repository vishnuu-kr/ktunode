---
title: "Electrical system model"
subject: "MECHATRONIC SYSTEMS"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bac"
status: "completed"
scrapedAt: "2026-05-23T16:42:41.893Z"
---
# MECHATRONIC SYSTEMS - Module 3: Microprocessors and Microcontrollers: Digital Circuits

## Topic: Electrical System Model

This topic delves into the fundamental electrical principles that underpin the behavior of mechatronic systems, particularly as they relate to the digital circuits controlled by microprocessors and microcontrollers. Understanding these models is crucial for analyzing system responses, selecting appropriate components, and ensuring proper operation.

---

### 1. Learning Outcomes Covered in this Topic:

*   **Analysis of the fundamental electrical models used to represent simple electrical components and systems.** (This is the core of this topic.)
*   **Understanding how these models can be used to predict the behavior of electrical circuits in mechatronic systems.** (Directly relates to CO4.)
*   **Appreciation of the role of electrical signals and their behavior in mechatronic systems.** (Underpins CO1 and CO2 by providing the context for sensors and actuators.)
*   **Familiarity with basic electrical concepts like voltage, current, resistance, capacitance, and inductance.** (Essential for understanding how digital circuits interact with the physical world.)

---

### 2. Key Concepts and Definitions:

#### 2.1. Fundamental Electrical Components and their Models:

Mechatronic systems rely on the interaction of various electrical components. Their behavior can be modeled using fundamental electrical laws.

*   **Resistor (R):**
    *   **Definition:** A component that opposes the flow of electric current.
    *   **Model:** Ohm's Law: **V = I * R**
        *   *V*: Voltage across the resistor (Volts, V)
        *   *I*: Current flowing through the resistor (Amperes, A)
        *   *R*: Resistance of the resistor (Ohms, Ω)
    *   **Behavior:** Dissipates energy as heat. The current is directly proportional to the applied voltage and inversely proportional to the resistance.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** Current limiting in LED circuits, voltage division for sensor signal conditioning.

*   **Capacitor (C):**
    *   **Definition:** A component that stores electrical energy in an electric field.
    *   **Model:**
        *   Charge (Q): **Q = C * V**
            *   *Q*: Charge stored (Coulombs, C)
            *   *C*: Capacitance (Farads, F)
        *   Current (I) through a capacitor: **I = C * (dV/dt)**
            *   *dV/dt*: Rate of change of voltage across the capacitor.
    *   **Behavior:** Opposes changes in voltage. It allows AC current to pass but blocks DC current once charged.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** Smoothing power supplies (filtering), timing circuits, decoupling noise from power rails.

*   **Inductor (L):**
    *   **Definition:** A component that stores electrical energy in a magnetic field.
    *   **Model:**
        *   Voltage (V) across an inductor: **V = L * (dI/dt)**
            *   *dI/dt*: Rate of change of current through the inductor.
    *   **Behavior:** Opposes changes in current. It allows DC current to pass but impedes AC current, with the impedance increasing with frequency.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** Used in switching power supplies, filters, and electromagnetic actuators (e.g., solenoids, relays).

#### 2.2. Basic Electrical Circuit Laws:

These laws are fundamental to analyzing how electrical components interact within a circuit.

*   **Kirchhoff's Voltage Law (KVL):**
    *   **Statement:** The sum of the voltage drops around any closed loop in a circuit is equal to the sum of the voltage sources in that loop.
    *   **Mathematical Representation:** ΣV = 0
    *   **Application:** Used to analyze voltage distribution in series circuits and complex networks.

*   **Kirchhoff's Current Law (KCL):**
    *   **Statement:** The sum of currents entering a junction (node) is equal to the sum of currents leaving that junction.
    *   **Mathematical Representation:** ΣI_in = ΣI_out
    *   **Application:** Used to analyze current distribution in parallel circuits and complex networks.

#### 2.3. Series and Parallel Circuits:

Understanding how components are connected is crucial for predicting overall circuit behavior.

*   **Series Circuit:**
    *   **Description:** Components are connected end-to-end, forming a single path for current.
    *   **Key Characteristics:**
        *   Current is the same through all components.
        *   Total resistance (R_total) is the sum of individual resistances: **R_total = R1 + R2 + ... + Rn**.
        *   Voltage divides among the components based on their resistance.
    *   **Example:** Multiple resistors connected in a line.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.

*   **Parallel Circuit:**
    *   **Description:** Components are connected across the same two points, providing multiple paths for current.
    *   **Key Characteristics:**
        *   Voltage is the same across all components.
        *   Total current is the sum of currents through individual branches.
        *   The reciprocal of total resistance (1/R_total) is the sum of the reciprocals of individual resistances: **1/R_total = 1/R1 + 1/R2 + ... + 1/Rn**.
    *   **Example:** Multiple resistors connected side-by-side.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.

#### 2.4. AC vs. DC Signals and their Modeling:

Mechatronic systems often deal with both direct current (DC) and alternating current (AC) signals.

*   **DC (Direct Current):**
    *   **Description:** Current flows in only one direction.
    *   **Model:** Represented by constant voltage and current values (though these can change over time in a controlled manner, e.g., PWM).
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles.
    *   **Mechatronic Application:** Powering digital circuits, controlling DC motors.

*   **AC (Alternating Current):**
    *   **Description:** Current periodically reverses direction.
    *   **Model:** Often represented by sinusoidal waveforms (e.g., voltage $V(t) = V_{peak} \sin(\omega t + \phi)$).
    *   **Key Concepts:**
        *   **Frequency (f):** Number of cycles per second (Hertz, Hz).
        *   **Angular Frequency (ω):** Related to frequency by $\omega = 2\pi f$.
        *   **Amplitude/Peak Voltage ($V_{peak}$):** Maximum voltage value.
        *   **RMS Voltage ($V_{rms}$):** Root Mean Square voltage, which is the equivalent DC voltage that would produce the same amount of power. For a sine wave, $V_{rms} = V_{peak} / \sqrt{2}$.
        *   **Phase ($\phi$):** The shift in the waveform relative to a reference.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** AC motors, power supply conditioning (transformers), audio signals from sensors.

#### 2.5. Impedance (Z):

Impedance is the generalization of resistance for AC circuits, accounting for the effects of capacitance and inductance.

*   **Definition:** The total opposition to the flow of alternating current. It is a complex quantity.
*   **Components of Impedance:**
    *   **Resistance (R):** Real part, due to resistors.
    *   **Reactance (X):** Imaginary part, due to capacitors and inductors.
        *   Capacitive Reactance ($X_C$): **$X_C = 1 / (\omega C)$** (opposes voltage changes)
        *   Inductive Reactance ($X_L$): **$X_L = \omega L$** (opposes current changes)
*   **Total Impedance (Z):**
    *   For a series circuit: **$Z = R + j(X_L - X_C)$** (where 'j' is the imaginary unit)
    *   The magnitude of impedance is $|Z| = \sqrt{R^2 + (X_L - X_C)^2}$.
*   **Ohm's Law for AC Circuits:** **$V = I * Z$** (where V and I are complex phasors)
*   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
*   **Mechatronic Application:** Analyzing the behavior of circuits with reactive components (e.g., filters, motor drivers).

#### 2.6. Time Constants (τ):

Time constants are crucial for understanding the transient response of circuits with capacitors and resistors (RC circuits) or inductors and resistors (RL circuits).

*   **RC Circuit Time Constant (τ):**
    *   **Definition:** The time it takes for the voltage across a capacitor to reach approximately 63.2% of its final value when charging, or to decay to approximately 36.8% of its initial value when discharging.
    *   **Formula:** **τ = R * C**
    *   **Significance:** A smaller time constant means the circuit responds faster.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** Designing delay circuits, signal filtering, understanding sensor response times.

*   **RL Circuit Time Constant (τ):**
    *   **Definition:** The time it takes for the current through an inductor to reach approximately 63.2% of its final value when energized, or to decay to approximately 36.8% of its initial value when de-energized.
    *   **Formula:** **τ = L / R**
    *   **Significance:** Similar to RC circuits, a smaller time constant indicates a faster response.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 2: Basic Electronic Principles; Histand & Alciatore, Chapter 3: Basic Electrical Circuits.
    *   **Mechatronic Application:** Understanding the response of inductive loads like solenoids and motors.

---

### 3. How Models Predict System Behavior:

Electrical system models allow us to predict how a circuit will behave under various conditions. This is essential for:

*   **Simulation:** Using software to model circuits and test different scenarios without building physical prototypes.
*   **Analysis:** Applying circuit laws to calculate voltage, current, and power levels, ensuring components operate within their specifications.
*   **Design:** Selecting appropriate component values (R, C, L) to achieve desired circuit performance (e.g., filtering characteristics, response times).
*   **Troubleshooting:** Identifying the cause of circuit malfunctions by comparing actual behavior to predicted behavior based on the models.

**Alignment with Course Outcomes:**

*   **CO4 (Analyze the models and responses of different systems):** This topic directly provides the foundational models (Ohm's Law, KVL, KCL, RC/RL transients) that are used to analyze the electrical subsystem of a mechatronic system. Understanding how voltage, current, and time constants affect circuit behavior allows for the prediction of system responses.

---

### 4. Examples in Mechatronic Systems:

*   **Voltage Divider for Sensor Reading:**
    *   **Scenario:** A thermistor's resistance changes with temperature. To read this change with a microcontroller (which typically expects a voltage input), a voltage divider circuit is used.
    *   **Model Application:** Two resistors ($R_1$ and $R_2$) are connected in series across a supply voltage ($V_{in}$). The thermistor ($R_{therm}$) is placed in series with a fixed resistor ($R_{fixed}$). The output voltage ($V_{out}$) is taken across either the fixed resistor or the thermistor.
    *   **Formula:** $V_{out} = V_{in} \times \frac{R_{series}}{R_{total}}$. If the thermistor is $R_2$, then $V_{out} = V_{in} \times \frac{R_1}{R_1 + R_{therm}}$.
    *   **Behavior Prediction:** As the thermistor's resistance changes, $V_{out}$ changes, providing an analog voltage signal proportional to temperature that the microcontroller can digitize.
    *   **Textbook Reference:** Histand & Alciatore, Chapter 4: Signal Conditioning.

*   **RC Filter for Noise Reduction:**
    *   **Scenario:** A sensor might produce noisy electrical signals. A low-pass filter can be used to remove high-frequency noise.
    *   **Model Application:** A resistor (R) in series with the signal and a capacitor (C) from the signal line to ground forms a simple RC low-pass filter.
    *   **Behavior Prediction:** The time constant $\tau = RC$ determines the cutoff frequency ($f_c = 1/(2\pi RC)$). Frequencies significantly above $f_c$ are attenuated, smoothing the signal.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 6: Analogue to Digital Conversion; Histand & Alciatore, Chapter 4: Signal Conditioning.

*   **Inductor in a Solenoid Actuator:**
    *   **Scenario:** A solenoid is an electromagnetic actuator that uses a coil of wire (an inductor) to create a magnetic field and move a plunger.
    *   **Model Application:** When current is switched on, the voltage across the inductor is $V = L(dI/dt)$. Initially, $dI/dt$ is high, allowing current to build up. As current increases, $dI/dt$ decreases, and the voltage across the inductor drops. The time constant $\tau = L/R$ (where R is the coil resistance) dictates how quickly the current and magnetic field reach their steady state.
    *   **Behavior Prediction:** This model helps predict the speed at which the solenoid engages and disengages.
    *   **Textbook Reference:** Bolton (4th Ed.), Chapter 8: Actuators.

---

### 5. Practice Questions and Exercises:

**Question 1:**
A simple circuit consists of a 12V DC source connected to a series combination of a 100Ω resistor and a 220Ω resistor.
a) What is the total resistance of the circuit?
b) What is the current flowing through the circuit?
c) What is the voltage drop across the 100Ω resistor?

**Answer 1:**
a) Total resistance $R_{total} = R_1 + R_2 = 100Ω + 220Ω = 320Ω$.
b) Current $I = V / R_{total} = 12V / 320Ω = 0.0375 A$ or $37.5 mA$.
c) Voltage drop across 100Ω resistor $V_{100Ω} = I \times R_{100Ω} = 0.0375A \times 100Ω = 3.75V$.

**Question 2:**
A capacitor of 10μF is connected to a 5V DC source through a 1kΩ resistor.
a) Calculate the time constant (τ) of this RC circuit.
b) After how long will the capacitor voltage reach approximately 3.16V (63.2% of 5V)?

**Answer 2:**
a) Time constant $\tau = R \times C = 1kΩ \times 10μF = 1000Ω \times 10 \times 10^{-6} F = 10 \times 10^{-3} s$ or $10 ms$.
b) The capacitor voltage reaches 63.2% of its final value after one time constant. Therefore, the time is equal to τ, which is 10 ms.

**Question 3:**
An AC voltage of $V(t) = 10 \sin(1000t)$ V is applied to a series circuit consisting of a 100Ω resistor and a capacitor of 10μF.
a) What is the angular frequency (ω) of the AC signal?
b) Calculate the capacitive reactance ($X_C$) at this frequency.
c) Calculate the total impedance (Z) of the circuit.

**Answer 3:**
a) From the equation $V(t) = V_{peak} \sin(\omega t)$, the angular frequency $\omega = 1000$ rad/s.
b) Capacitive reactance $X_C = 1 / (\omega C) = 1 / (1000 \, \text{rad/s} \times 10 \times 10^{-6} F) = 1 / (10 \times 10^{-3}) Ω = 100 Ω$.
c) The total impedance $Z = R - jX_C = 100Ω - j100Ω$. The magnitude of the impedance is $|Z| = \sqrt{R^2 + X_C^2} = \sqrt{100^2 + 100^2} = \sqrt{20000} = 100\sqrt{2} ≈ 141.4Ω$.

---

### 6. Important Points to Remember:

*   **Ohm's Law (V=IR) is the cornerstone of DC circuit analysis.**
*   **Capacitors oppose voltage changes; Inductors oppose current changes.**
*   **Series circuits share current; Parallel circuits share voltage.**
*   **Time constants (τ = RC or τ = L/R) define the speed of transient response in RC and RL circuits.**
*   **Impedance (Z) is the AC equivalent of resistance and includes reactive components (reactance).**
*   **Understanding these electrical models is fundamental to analyzing the behavior of sensors, actuators, and the internal workings of microcontrollers in mechatronic systems.**
*   **The choice of components and their configuration significantly impacts the system's performance and response characteristics.**

---

### 7. Alignment with Course Outcomes:

*   **CO1 (Comprehend the importance of sensors and actuators with application to mechatronic systems):** While this topic focuses on electrical models, understanding these models is crucial for comprehending how sensors (which generate electrical signals based on physical phenomena) and actuators (which convert electrical signals into physical actions) function within a mechatronic system. The electrical behavior of these devices is governed by the principles discussed here.
*   **CO2 (Identify actuator mechanisms and signal conditioning processes):** The electrical models directly inform how actuators (e.g., solenoids, motors) respond to electrical inputs, and how sensor signals are processed (e.g., filtering, amplification) using passive electrical components.
*   **CO3 (Select microprocessors and microcontrollers for the implementation in mechatronic system):** Knowing the electrical characteristics of the system (e.g., voltage levels, signal frequencies, noise) helps in selecting microcontrollers with appropriate input/output capabilities, analog-to-digital converters (ADCs), and power handling.
*   **CO4 (Analyse the models and responses of different systems):** This is the primary outcome addressed. The topic provides the basic electrical models and laws required to analyze the electrical subsystems of mechatronic systems, predict their transient and steady-state responses, and understand how they interact with other system components.

---

This concludes the notes for the "Electrical System Model" topic within Module 3. A solid understanding of these electrical fundamentals is essential for progressing to more complex mechatronic system analysis and design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
