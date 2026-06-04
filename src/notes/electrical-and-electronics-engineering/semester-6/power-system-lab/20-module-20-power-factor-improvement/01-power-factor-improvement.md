---
title: "Power factor improvement"
subject: "POWER SYSTEM LAB"
module: "Module 20: Power factor improvement"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36815"
status: "completed"
scrapedAt: "2026-05-23T16:31:38.814Z"
---
# POWER SYSTEM LAB: Module 20 - Power Factor Improvement

## Topic: Power Factor Improvement

### 1. Introduction and Importance of Power Factor

**Definition:**
Power factor (PF) is the ratio of real power (kW) consumed by a load to the apparent power (kVA) supplied to it. It represents the efficiency of power utilization.

Mathematically:
$$
\text{Power Factor (PF)} = \frac{\text{Real Power (kW)}}{\text{Apparent Power (kVA)}} = \cos(\phi)
$$
where $\phi$ is the phase difference between voltage and current.

**Types of Power:**
*   **Real Power (P):** The actual power consumed by the load to perform useful work (measured in kW).
*   **Reactive Power (Q):** The power that oscillates between the source and the load, required to establish and maintain magnetic fields (for inductive loads) or electric fields (for capacitive loads) (measured in kVAR).
*   **Apparent Power (S):** The vector sum of real and reactive power, which is the total power that needs to be supplied by the source (measured in kVA).

**Power Triangle:**
The relationship between these powers can be visualized using the power triangle:
$$
S^2 = P^2 + Q^2
$$
$$
S = \sqrt{P^2 + Q^2}
$$

**Ideal Power Factor:**
An ideal power factor is 1 (unity PF), where the current and voltage are in phase, and all supplied power is real power.

**Consequences of Low Power Factor:**
*   **Increased Current:** For a given real power, a lower PF means a higher apparent power, leading to higher current in the system.
*   **Increased Losses:** Higher current results in increased $I^2R$ losses (copper losses) in transmission lines, transformers, and other electrical equipment.
*   **Reduced System Capacity:** Higher current reduces the effective capacity of existing equipment (transformers, generators, cables) as they are rated in kVA.
*   **Voltage Drop:** Increased current leads to a greater voltage drop across the lines, affecting the voltage at the load terminals.
*   **Penalties from Utilities:** Electricity utilities often impose penalties on consumers for operating at a low power factor to recover costs associated with supplying reactive power and managing system capacity.
*   **Inefficient Equipment Operation:** Motors and other inductive loads may not operate at their peak efficiency with a low power factor.

### 2. Causes of Low Power Factor

Low power factor is predominantly caused by **inductive loads**.
*   **Induction Motors:** These are the most common culprits. They require reactive power to establish the rotating magnetic field necessary for operation. When lightly loaded, induction motors draw a significant amount of reactive power relative to their real power consumption, resulting in a low PF.
*   **Transformers:** Similar to induction motors, transformers also require magnetizing reactive power to establish their magnetic flux.
*   **Inductive Loads:** Other inductive loads include induction furnaces, arc furnaces, welding equipment, fluorescent lighting ballasts, and solenoid coils.

**Capacitive loads** (e.g., synchronous condensers, capacitors, long transmission lines under light load) can cause a high leading power factor.

### 3. Methods of Power Factor Improvement

The goal of power factor improvement is to reduce the reactive power component drawn from the supply, thereby increasing the power factor closer to unity. This is typically achieved by adding **capacitive reactive power** to the system to compensate for the inductive reactive power consumed by the loads.

#### 3.1. Static Capacitors (Capacitor Banks)

*   **Princ:** Static capacitors provide leading reactive power to the system, counteracting the lagging reactive power drawn by inductive loads. They are connected in parallel with the inductive load.
*   **Types:**
    *   **Fixed Capacitor Banks:** Permanently connected to the load or bus.
    *   **Switchable Capacitor Banks:** Connected through switches (contactors or circuit breakers) and switched automatically or manually based on load conditions. This is preferred to avoid over-correction or leading PF at light loads.
*   **Location:**
    *   **Near the Load:** Most effective as they compensate for reactive power at the point of generation, reducing losses in the distribution system.
    *   **At the Bus Bar:** Can improve the PF of the entire bus.
    *   **At the Point of Common Coupling (PCC):** To meet utility power factor requirements.
*   **Sizing:** The required capacitance ($C$) is determined based on the existing low PF, the desired improved PF, and the real power of the load.
    $$
    Q_{required} = P (\tan \phi_1 - \tan \phi_2)
    $$
    where $\phi_1$ is the angle of the low PF and $\phi_2$ is the angle of the desired PF.
    The capacitance in Farads is then calculated using:
    $$
    C = \frac{Q_{required}}{2 \pi f V^2}
    $$
    where $f$ is the supply frequency and $V$ is the line-to-neutral voltage.
    Alternatively, in terms of kVAR:
    $$
    \text{Capacitance (in } \mu F) = \frac{\text{kVAR} \times 10^6}{2 \pi f V^2}
    $$
    where $V$ is in Volts.
    If $V$ is in kV, and kVAR is in kVAR:
    $$
    \text{Capacitance (in } \mu F) = \frac{\text{kVAR} \times 10^6}{2 \pi f (V_{line-line} \times \sqrt{3})^2} = \frac{\text{kVAR} \times 10^6}{2 \pi f \times 3 \times V_{line-line}^2}
    $$
    A more practical formula using kVAR and kV is:
    $$
    \text{Capacitance (in } \mu F) = \frac{\text{kVAR} \times 10^6}{2 \pi f (V_{kV} \times 1000)^2} = \frac{\text{kVAR} \times 10^6}{2 \pi f \times 10^6 \times V_{kV}^2} = \frac{\text{kVAR}}{2 \pi f V_{kV}^2}
    $$
    For a three-phase system, the kVAR of a capacitor bank is:
    $$
    \text{kVAR} = \frac{3 \omega C V_{phase}^2}{1000} = \frac{3 (2 \pi f) C (V_{line-line}/\sqrt{3})^2}{1000} = \frac{2 \pi f C V_{line-line}^2}{1000}
    $$
    where $C$ is the capacitance per phase in Farads, and $V_{line-line}$ is the line-to-line voltage in kV.
    From this, the capacitance per phase ($C_{phase}$ in $\mu F$) can be calculated:
    $$
    C_{phase} (\mu F) = \frac{\text{kVAR} \times 1000}{2 \pi f V_{line-line}^2}
    $$
*   **Advantages:**
    *   Low cost.
    *   Low maintenance.
    *   Easy to install and switch.
    *   Low losses.
    *   Compact size.
*   **Disadvantages:**
    *   Can cause over-voltage and resonance issues if not properly managed.
    *   Degradation over time.
    *   Susceptible to switching surges and harmonics.

#### 3.2. Synchronous Condensers

*   **Princ:** A synchronous motor running at synchronous speed without any mechanical load. It can be over-excited or under-excited.
    *   **Over-excited:** Draws leading reactive power from the supply and supplies lagging reactive power to the system (acts as a capacitor).
    *   **Under-excited:** Draws lagging reactive power from the supply (acts as an inductor).
*   **Operation for PF Improvement:** When over-excited, it provides leading reactive power to compensate for inductive loads, thereby improving the system's power factor.
*   **Advantages:**
    *   Can provide both leading and lagging reactive power, offering flexibility.
    *   Helps in voltage regulation.
    *   Can absorb or supply reactive power as needed.
*   **Disadvantages:**
    *   High initial cost.
    *   Requires excitation control.
    *   Higher maintenance compared to static capacitors.
    *   Lower efficiency than static capacitors.
    *   Can cause harmonics if not designed properly.
    *   Requires starting mechanism.

#### 3.3. Phase Advancers

*   **Princ:** Used primarily for improving the power factor of **induction motors**, especially large ones. It is connected in series with the rotor slip rings of a wound-rotor induction motor. It provides the necessary excitation current to the rotor, reducing the reactive power drawn from the stator.
*   **Operation:** It acts as a reactive kVA generator, supplying leading kVAR to the rotor circuit.
*   **Advantages:**
    *   Improves the power factor of induction motors specifically.
    *   Can improve the starting torque of the motor.
*   **Disadvantages:**
    *   Applicable only to wound-rotor induction motors.
    *   Adds complexity to the motor system.
    *   Can be bulky and requires maintenance.

### 4. Power Factor Correction in Practice

*   **Automatic Power Factor Controllers (APFC):** These are sophisticated devices that monitor the system's power factor and automatically switch capacitor banks in or out of the circuit to maintain the desired power factor. They are essential for systems with fluctuating loads.
*   **Harmonic Considerations:** Modern industrial loads often contain non-linear elements (rectifiers, VFDs, etc.) that generate harmonics. These harmonics can interact with capacitor banks, leading to resonance and amplified harmonic currents. To mitigate this, **detuned or tuned filter circuits** are used, which involve series inductors with capacitor banks to shift the resonant frequency away from the dominant harmonic frequencies.

### 5. Learning Outcomes Addressed

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)**
    *   **Mathematical Modeling:** The formulas for calculating required reactive power and capacitance are essential for developing mathematical models. The power triangle and power factor definitions are foundational.
    *   **Steady State Analysis:** Analyzing the power flow before and after PF correction requires steady-state calculations. This involves calculating real and reactive power consumption, apparent power, current, and voltage drops. Software simulations (like PSS/E, ETAP, PSCAD/EMTDC) can be used to model a power system with inductive loads and then introduce capacitor banks to observe the steady-state improvement in PF, line current, and voltage.
    *   **Transient Analysis:** While PF improvement is primarily a steady-state concern, transient analysis becomes relevant when considering the switching of capacitor banks. Switching operations can cause transient overvoltages and inrush currents. Understanding the behavior of capacitor banks during switching requires transient analysis techniques.

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3)**
    *   **Testing of Capacitors:** In a lab setting, students would typically test capacitor banks to verify their capacitance value, insulation resistance, and dielectric strength according to relevant standards (e.g., IEEE, IEC).
    *   **Measurement of Power System Parameters:** To assess power factor and its improvement, one needs to conduct tests to measure voltage, current, real power (kW), reactive power (kVAR), and apparent power (kVA) using power analyzers or multimeters. These measurements are critical for analyzing the performance of loads and the effectiveness of PF correction equipment.
    *   **Motor Performance Tests:** Testing induction motors at different load levels to observe their power factor variation is a key practical aspect. This can be done in the lab using dynamometers and power measurement instruments.

### 6. Key Concepts and Definitions

*   **Power Factor (PF):** $\cos(\phi)$
*   **Real Power (kW):** Useful power.
*   **Reactive Power (kVAR):** Power for magnetic/electric fields.
*   **Apparent Power (kVA):** Total power supplied.
*   **Lagging PF:** Current lags voltage (inductive loads).
*   **Leading PF:** Current leads voltage (capacitive loads).
*   **Unity PF:** Current and voltage in phase.
*   **Capacitor Bank:** Device to supply leading reactive power.
*   **Synchronous Condenser:** Synchronous motor over-excited to supply reactive power.
*   **Phase Advancer:** Device to improve PF of induction motors.
*   **Harmonics:** Multiples of the fundamental frequency, generated by non-linear loads.
*   **Resonance:** Undesirable condition where inductive and capacitive reactances cancel out at a specific frequency, leading to magnified currents/voltages.

### 7. Important Points to Remember

*   **Low PF is primarily due to inductive loads.**
*   **Capacitors are the most common solution for PF improvement.**
*   **Capacitors should be located as close to the inductive loads as possible.**
*   **Over-correction can lead to leading PF, causing voltage rise and potential issues.**
*   **Harmonics can cause resonance with capacitor banks, necessitating filter circuits.**
*   **Automatic Power Factor Controllers are crucial for systems with varying loads.**
*   **Utilities penalize low PF to offset increased system costs.**
*   **Improving PF reduces losses and increases system capacity.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbooks and Reference Books

This section assumes typical Power System Lab textbooks. Specific references would depend on the curriculum. Common references include:

*   **"Power System Analysis and Design" by J. Duncan Glover, Thomas J. Overbye, Mulukutla S. Sarma.** (Provides good theoretical background on power flow, voltage regulation, and reactive power compensation.)
*   **"Electrical Power Systems" by W. D. Stevenson Jr.** (A classic text covering fundamental concepts of AC power systems, including power factor and its improvement.)
*   **"Power System Engineering" by D. P. Kothari & I. J. Nagrath.** (Covers various aspects of power systems, including reactive power compensation and voltage control.)
*   **Lab Manual for Power System Lab:** Specific to your institution, this will detail the experimental procedures and equipment used.

### 9. Practice Questions and Exercises

**Question 1:**
A factory has a total load of 500 kW at a power factor of 0.7 lagging. The supply voltage is 400 V, 50 Hz.
(a) Calculate the apparent power drawn by the factory.
(b) Calculate the reactive power drawn by the factory.
(c) If capacitor banks are installed to improve the power factor to 0.95 lagging, calculate the required reactive power compensation in kVAR.
(d) Calculate the capacitance required per phase in microfarads ($\mu F$).

**Solution 1:**
Given:
Real Power (P) = 500 kW
Initial Power Factor ($\cos \phi_1$) = 0.7 (lagging)
Supply Voltage ($V_{line-line}$) = 400 V = 0.4 kV
Frequency (f) = 50 Hz

(a) **Apparent Power (S):**
$$
S = \frac{P}{\cos \phi_1} = \frac{500 \text{ kW}}{0.7} = 714.29 \text{ kVA}
$$

(b) **Reactive Power (Q):**
First, find the initial angle $\phi_1$:
$$
\phi_1 = \arccos(0.7) \approx 45.57^\circ
$$
$$
\tan \phi_1 = \tan(45.57^\circ) \approx 1.02
$$
$$
Q_1 = P \tan \phi_1 = 500 \text{ kW} \times 1.02 = 510 \text{ kVAR}
$$
(Using power triangle: $Q_1 = \sqrt{S^2 - P^2} = \sqrt{(714.29)^2 - (500)^2} \approx 510.3 \text{ kVAR}$)

(c) **Required Reactive Power Compensation (kVAR):**
Desired Power Factor ($\cos \phi_2$) = 0.95 (lagging)
Find the new angle $\phi_2$:
$$
\phi_2 = \arccos(0.95) \approx 18.19^\circ
$$
$$
\tan \phi_2 = \tan(18.19^\circ) \approx 0.329
$$
The new reactive power ($Q_2$) will be:
$$
Q_2 = P \tan \phi_2 = 500 \text{ kW} \times 0.329 = 164.5 \text{ kVAR}
$$
The required reactive power compensation is the difference between the initial and final reactive power:
$$
\text{Reactive Power Compensation (kVAR)} = Q_1 - Q_2 = 510 \text{ kVAR} - 164.5 \text{ kVAR} = 345.5 \text{ kVAR}
$$
So, a capacitor bank of approximately 345.5 kVAR is needed.

(d) **Capacitance Required per Phase ($\mu F$):**
Using the formula:
$$
C_{phase} (\mu F) = \frac{\text{kVAR} \times 1000}{2 \pi f V_{line-line}^2}
$$
Where kVAR = 345.5, f = 50 Hz, $V_{line-line}$ = 0.4 kV.
$$
C_{phase} (\mu F) = \frac{345.5 \times 1000}{2 \pi \times 50 \times (0.4)^2} = \frac{345500}{100 \pi \times 0.16} = \frac{345500}{16 \pi} \approx \frac{345500}{50.265} \approx 6874 \mu F
$$
*Note: In practice, standard capacitor bank sizes are used, and sometimes multiple stages of capacitors are switched to achieve the desired PF.*

**Question 2:**
What are the primary disadvantages of using synchronous condensers for power factor improvement compared to static capacitor banks? (Relates to CO2 - analyzing performance)

**Answer 2:**
The primary disadvantages of synchronous condensers compared to static capacitor banks are:
*   **Higher Initial Cost:** Synchronous condensers are significantly more expensive to purchase and install.
*   **Higher Maintenance:** They are rotating machines requiring more maintenance (bearings, lubrication, excitation system) than static capacitors.
*   **Lower Efficiency:** They have higher operational losses due to motor action and excitation compared to static capacitors.
*   **Requires Starting Mechanism:** Synchronous motors need a starting method.
*   **Fixed Location:** While they can be moved, they are generally installed in fixed locations, unlike smaller capacitor banks that can be distributed.
*   **Mechanical Complexity:** Rotating machinery is inherently more complex and prone to mechanical failures.

**Question 3:**
Explain how a lightly loaded induction motor contributes to a low power factor. How can this be mitigated? (Relates to CO1 & CO2 - modeling load behavior and testing performance)

**Answer 3:**
An induction motor requires a certain amount of magnetizing reactive power to establish the rotating magnetic field in the stator, which is essential for inducing current in the rotor and producing torque. This magnetizing current is relatively constant regardless of the mechanical load.
When the motor is lightly loaded, the real power output (kW) is low. However, the magnetizing current (which contributes significantly to the reactive power) remains nearly the same. Therefore, the ratio of real power to apparent power (power factor) becomes very low.

**Mitigation:**
1.  **Capacitor Banks:** The most common mitigation is to install capacitor banks in parallel with the motor, ideally at the motor terminals. The capacitors supply the required reactive power locally, reducing the reactive power drawn from the supply and thus improving the motor's power factor.
2.  **Reducing Load:** Operating induction motors closer to their rated load improves their power factor. Therefore, correct sizing of motors for the driven load is crucial.
3.  **High Efficiency/High Power Factor Motors:** Using motors designed for higher efficiency and inherently better power factor characteristics.
4.  **Phase Advancers:** For large wound-rotor induction motors, phase advancers can be used.

This concludes the study notes for Power Factor Improvement in Power System Lab. Remember to refer to your specific lab manual for practical procedures and equipment details.