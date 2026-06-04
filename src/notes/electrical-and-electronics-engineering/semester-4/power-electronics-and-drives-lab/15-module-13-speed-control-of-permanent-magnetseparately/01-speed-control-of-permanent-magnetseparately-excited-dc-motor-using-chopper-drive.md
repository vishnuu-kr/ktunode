---
title: "Speed control of Permanent Magnet/Separately-Excited DC motor using chopper drive"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 13: Speed control of Permanent Magnet/Separately"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3614d"
status: "completed"
scrapedAt: "2026-05-23T16:18:11.427Z"
---
# POWER ELECTRONICS AND DRIVES LAB - Module 13: Speed Control of DC Motors

## Topic: Speed Control of Permanent Magnet/Separately-Excited DC Motor using Chopper Drive

---

### 1. Introduction to DC Motor Speed Control

**Objective:** To understand and implement methods for controlling the speed of Permanent Magnet (PM) and Separately-Excited DC motors in a laboratory setting.

**Importance:** DC motors are widely used due to their simple and efficient speed control. Chopper drives are a popular and efficient method for achieving this control.

**Course Outcome Alignment:**
*   **CO5 (Knowledge Level: K4):** Understand the features of adjustable speed drives and analyze the basic drive schemes for DC motors. This topic directly addresses the analysis of a basic DC motor drive scheme using a chopper.

**Key Concepts:**
*   **DC Motor Speed:** The speed ($N$) of a DC motor is directly proportional to the back EMF ($E_b$) and inversely proportional to the field flux ($\Phi$).
    *   $N \propto E_b$
    *   $E_b = k \Phi N$ (where $k$ is motor constant)
*   **Back EMF:** Generated voltage opposing the applied armature voltage, proportional to speed and flux.
*   **Torque:** For DC motors, torque ($T$) is proportional to the product of armature current ($I_a$) and field flux ($\Phi$).
    *   $T \propto I_a \Phi$
*   **Chopper:** A DC-to-DC converter that switches a DC input voltage on and off to produce a variable DC output voltage. It's an efficient way to control the average DC voltage supplied to a load.

**Textbook References:**
*   **L. Umanand:** "Power Electronics- Essentials and Applications" - Likely covers DC-DC converters (choppers) and their application in motor drives.
*   **Ned Mohan, Undeland, Robbins:** "Power Electronics- Converters, Applications and Design, 3e" - Excellent resource for chopper topologies and control strategies.
*   **D.W. Hart:** "Power Electronics" - Provides fundamental understanding of switching circuits and DC-DC conversion.
*   **Muhammad H. Rashid:** "Power Electronics- Devices, Circuits and Applications" - Detailed coverage of semiconductor devices used in choppers and their applications.
*   **Joseph Vithayathil:** "Power electronics: principles and applications" - May offer practical insights into motor drive control using choppers.

---

### 2. DC Motor Speed Control Principles

The speed of a DC motor can be controlled by varying:
1.  **Applied Armature Voltage ($V_a$):** This is the most common and effective method.
2.  **Field Flux ($\Phi$):** Achieved by varying the field current.
3.  **Armature Resistance ($R_a$):** Less efficient as it dissipates power.

**Focus of this Topic: Control via Applied Armature Voltage using a Chopper Drive.**

**How Chopper Controls Armature Voltage:**
A chopper essentially acts as a fast-acting switch. By controlling the *duty cycle* of the switch, the average DC voltage delivered to the motor armature can be varied.

*   **Duty Cycle ($\alpha$):** The ratio of the ON time ($T_{on}$) to the total switching period ($T_s$).
    *   $\alpha = \frac{T_{on}}{T_s} = \frac{T_{on}}{T_{on} + T_{off}}$
*   **Average Output Voltage ($V_{o,avg}$):** For a step-up chopper, $V_{o,avg} = V_{in} \times M$, where $M$ is the conversion ratio. For a step-down chopper (most relevant here), $V_{o,avg} = V_{in} \times \alpha$.
    *   If the input voltage is the supply voltage ($V_s$), then the average armature voltage is $V_{a,avg} = V_s \times \alpha$.

**Important Point:** By controlling the duty cycle of the chopper, we directly control the average armature voltage, which in turn controls the motor speed.

---

### 3. Chopper Drive for DC Motor

**3.1. Basic Chopper Topology (Step-Down)**

The most common chopper used for DC motor speed control is the **step-down chopper** (also known as a buck converter).

**Circuit Diagram:**

```
      +----[ L_motor ]----[ R_motor ]----+----( Motor Armature )----+
      |                                 |                            |
Vs --+--[ Switch (e.g., MOSFET/IGBT) ]---+                            |
      |                                 |                            |
      +----[ Diode (Freewheeling) ]-----+----------------------------+
      |                                 |
      ----------------------------------+----( Ground )------------
```

*   **Power Switch (e.g., MOSFET, IGBT):** Controlled to turn ON and OFF.
*   **Diode (Freewheeling Diode):** Provides a path for the inductive current to flow when the switch turns OFF, preventing excessive voltage spikes across the switch.
*   **Load (DC Motor):** Represented by armature inductance ($L_a$), armature resistance ($R_a$), and back EMF ($E_b$).

**3.2. Operation of the Step-Down Chopper**

**Mode 1: Switch ON**
*   The switch is closed (ON).
*   Current flows from the supply voltage ($V_s$) through the switch to the motor armature.
*   The armature voltage is $V_a = V_s$.
*   The armature current ($I_a$) increases.
*   The equation for armature voltage is: $V_s = I_a R_a + L_a \frac{dI_a}{dt} + E_b$.

**Mode 2: Switch OFF**
*   The switch is opened (OFF).
*   The supply voltage is disconnected from the armature.
*   Due to the inductance of the motor armature, the current cannot change instantaneously.
*   The freewheeling diode conducts, providing a path for the current.
*   The armature voltage is now approximately determined by the back EMF and the voltage drop across the armature resistance and inductance: $0 \approx I_a R_a + L_a \frac{dI_a}{dt} + E_b$.
*   The armature current ($I_a$) decreases.
*   The freewheeling diode helps to dissipate the energy stored in the motor inductance.

**3.3. Modes of Operation Based on Current**

*   **Continuous Conduction Mode (CCM):** The armature current remains positive throughout the switching cycle. This is the desired mode for smooth motor operation.
*   **Discontinuous Conduction Mode (DCM):** The armature current drops to zero before the end of the switching cycle. This can lead to torque ripple and less efficient operation at very low speeds or light loads.

**3.4. Duty Cycle Control and Speed Variation**

*   By adjusting the duty cycle ($\alpha$), the average armature voltage ($V_{a,avg}$) is controlled.
*   $V_{a,avg} = \alpha V_s$.
*   Since motor speed ($N$) is proportional to armature voltage (assuming constant flux), varying $\alpha$ allows for speed control.
    *   $N \propto V_{a,avg} \propto \alpha V_s$.

**Example:**
If $V_s = 120$V:
*   If $\alpha = 0.8$, $V_{a,avg} = 0.8 \times 120V = 96V$. The motor runs at a speed corresponding to 96V.
*   If $\alpha = 0.5$, $V_{a,avg} = 0.5 \times 120V = 60V$. The motor runs at a slower speed.
*   If $\alpha = 1.0$, $V_{a,avg} = 1.0 \times 120V = 120V$. The motor runs at its maximum speed for the given load.

**Textbook References:**
*   **Ned Mohan, Siddharth Raju:** "Power Electronics- A first course: Simulations and Laboratory Implementations" - Likely provides practical examples and simulations of chopper circuits.
*   **Jai P Agrawal:** "Power Electronic Systems- Theory and Design" - May detail the analysis of chopper circuits in CCM and DCM.

---

### 4. Control Strategies

**4.1. Pulse Width Modulation (PWM)**

*   PWM is the most common method for controlling the duty cycle ($\alpha$) of the chopper.
*   A high-frequency carrier signal (e.g., a sawtooth or triangular wave) is compared with a low-frequency control signal (which represents the desired armature voltage or speed).
*   When the control signal is greater than the carrier signal, the power switch is turned ON. Otherwise, it is turned OFF.
*   The frequency of the carrier signal determines the switching frequency of the chopper. Higher switching frequencies generally result in smoother armature current and less ripple, but increase switching losses.

**Block Diagram of a PWM Controller:**

```
Desired Speed -> Speed Controller -> Voltage Reference -> Comparator
                                                        /
                                                       /
                                                    Carrier Signal
                                                        |
                                                        V
                                                    Gate Driver -> Power Switch (Chopper) -> DC Motor
```

**4.2. Type A Chopper (Buck Converter) for DC Motor Control**

*   The basic step-down chopper described earlier is often referred to as a **Type A chopper** when used in this configuration.

**Course Outcome Alignment:**
*   **CO2 (Knowledge Level: K4):** Analyze the operation of switching regulators (choppers are a type of switching regulator). This section details the operational analysis.

---

### 5. Design and Selection Considerations

*   **Power Semiconductor Switch:** Selection of MOSFETs or IGBTs depends on voltage, current ratings, switching frequency, and efficiency requirements.
    *   **CO1 (Knowledge Level: K5):** Understand the operation of modern power semiconductor devices, its characteristics and Design & Select suitable gate driver circuits & heatsinks. This is crucial for choosing the right switch and its driving circuitry.
*   **Freewheeling Diode:** Must be a fast-recovery diode capable of handling the peak armature current.
*   **Inductor ($L_a$):** The inherent inductance of the motor armature plays a role. External inductance might be added to ensure continuous conduction at low speeds.
*   **Capacitor (Optional):** A capacitor might be placed in parallel with the motor terminals to filter voltage ripple, although the motor's inductance often suffices.
*   **Gate Driver Circuit:** Essential for properly switching power semiconductor devices (MOSFETs/IGBTs), providing isolation and sufficient gate drive voltage/current.

**Important Point to Remember:** The switching frequency of the chopper should be significantly higher than the fundamental frequency of the motor's rotation to ensure smooth torque and speed.

---

### 6. Experimental Setup and Procedure (Typical Lab Experiment)

**Components:**
*   Permanent Magnet DC Motor or Separately Excited DC Motor
*   DC Power Supply (e.g., 120V, 240V)
*   Chopper Circuit Module (containing power switch, diode, heatsink)
*   PWM Signal Generator/Controller
*   Ammeter (for armature current)
*   Voltmeter (for armature voltage)
*   Tachometer (for speed measurement)
*   Potentiometer (to vary the control signal for PWM)

**Procedure:**
1.  **Circuit Connection:** Connect the DC supply to the chopper input. Connect the chopper output to the DC motor armature. Ensure correct polarity. Connect the ammeter in series with the armature and the voltmeter in parallel.
2.  **PWM Signal Generation:** Set up the PWM signal generator. Connect a potentiometer to vary the duty cycle.
3.  **Initial Setup:** Set the duty cycle to minimum (e.g., 0%) and ensure the motor is stationary or running at its minimum speed.
4.  **Speed Control:** Gradually increase the duty cycle using the potentiometer. Observe the increase in armature voltage and motor speed. Measure corresponding values of $V_a$, $I_a$, and $N$.
5.  **Data Recording:** Record data for various duty cycle settings.
6.  **Load Variation (Optional):** If a load mechanism (e.g., eddy current brake or mechanical load) is available, apply a load and repeat steps 4-5 to observe the effect of load on speed and current at different duty cycles.
7.  **Analysis:** Plot speed vs. duty cycle, armature voltage vs. duty cycle, and armature current vs. duty cycle.

**Important Point to Remember:** Always start with the lowest duty cycle and gradually increase it to avoid sudden acceleration and potential damage.

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary parameter of a chopper that is varied to control the speed of a DC motor?
a) Switching frequency
b) Duty cycle
c) Input voltage
d) Motor inductance

**Answer:** b) Duty cycle

**Question 2:**
In a step-down chopper circuit for a DC motor, what component provides a path for the armature current when the main power switch is turned OFF?
a) Resistor
b) Capacitor
c) Inductor
d) Freewheeling diode

**Answer:** d) Freewheeling diode

**Question 3:**
If a DC motor is operated with a chopper from a 200V DC supply and the chopper's duty cycle is set to 0.6, what is the average armature voltage?
a) 120V
b) 80V
c) 200V
d) 333.3V

**Answer:** a) 120V (Average armature voltage = $V_s \times \alpha = 200V \times 0.6 = 120V$)

**Question 4:**
Which of the following control strategies is most commonly used to vary the duty cycle of a chopper for DC motor speed control?
a) Phase Control
b) Amplitude Modulation
c) Pulse Width Modulation (PWM)
d) Frequency Modulation

**Answer:** c) Pulse Width Modulation (PWM)

**Question 5 (Conceptual):**
Explain why a higher switching frequency in a chopper drive generally leads to smoother armature current and reduced torque ripple. What are the potential drawbacks of very high switching frequencies?

**Answer:**
A higher switching frequency means the ON and OFF cycles of the chopper are shorter and occur more rapidly. This reduces the time interval over which the armature current can significantly change during each cycle. The motor's inductance and back EMF then have more opportunities to smooth out the current pulsations, resulting in a more continuous and smoother armature current waveform. This smoother current leads to more consistent torque production, reducing torque ripple and providing smoother motor operation.

**Drawbacks of very high switching frequencies:**
*   **Increased Switching Losses:** Power semiconductor switches (like MOSFETs and IGBTs) consume energy during the transitions (turn-on and turn-off). With higher frequencies, these transitions occur more often, leading to higher overall switching losses, reducing the efficiency of the drive.
*   **EMI Issues:** Higher switching frequencies can generate more electromagnetic interference (EMI), which may require additional filtering and shielding.
*   **Device Limitations:** Not all power semiconductor devices are designed to operate efficiently at very high switching frequencies.

---

### 8. Important Points to Remember

*   **Speed is Proportional to Duty Cycle:** For a given supply voltage, motor speed is directly proportional to the chopper's duty cycle.
*   **Chopper Acts as a Variable Resistor:** Effectively, a chopper controls the average voltage without the power loss associated with a series resistor.
*   **Freewheeling Diode is Crucial:** Prevents damage to the switching element by providing a path for inductive current when the switch is off.
*   **PWM Control:** The standard method for generating the variable duty cycle signal for the chopper.
*   **Continuous Conduction:** Desirable for smooth motor operation. Factors like motor inductance and supply voltage relative to motor back EMF influence whether conduction is continuous or discontinuous.
*   **Component Selection:** Proper selection of the power switch, diode, and gate driver is vital for performance and reliability, aligning with CO1.
*   **Efficiency:** Chopper drives are generally more efficient than older methods like rheostatic control.

---

This comprehensive set of notes covers the theoretical aspects, operational principles, control strategies, and practical considerations for controlling the speed of Permanent Magnet/Separately-Excited DC motors using chopper drives, aligning with the specified learning and course outcomes.
