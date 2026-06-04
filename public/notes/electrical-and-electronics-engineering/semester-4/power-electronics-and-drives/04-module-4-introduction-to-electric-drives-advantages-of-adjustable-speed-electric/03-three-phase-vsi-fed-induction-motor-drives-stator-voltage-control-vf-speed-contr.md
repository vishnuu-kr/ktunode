---
title: "Three-phase VSI fed induction motor drives: Stator Voltage control - V/F speed control– Speed-Torque characteristics- Speed control – operation below and above base speed – Braking: dynamic and regenerative"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 4: Introduction to Electric Drives– Advantages of adjustable speed electric drives –Block diagram, Types of loads – Classification of load torque"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e2f"
status: "completed"
scrapedAt: "2026-05-23T16:17:57.013Z"
---
# Module 4: Introduction to Electric Drives – Three-Phase VSI Fed Induction Motor Drives

This module introduces the fundamental concepts of electric drives and focuses on **three-phase Voltage Source Inverter (VSI) fed induction motor drives**. We will explore various speed control techniques, the resulting speed-torque characteristics, and braking methods.

---

## 1. Introduction to Electric Drives

### 1.1 Definition of Electric Drive
An electric drive is a system that uses an electric motor to provide mechanical power for motion. It typically consists of:
*   **Electric Motor:** The prime mover converting electrical energy into mechanical energy.
*   **Power Converter:** Controls the electrical input to the motor (e.g., voltage, frequency, current).
*   **Control System:** Regulates the motor's speed, torque, and position.
*   **Load:** The mechanical equipment being driven.

### 1.2 Advantages of Adjustable Speed Electric Drives (ASDs)
Compared to fixed-speed drives (like direct-on-line starting), ASDs offer significant benefits:

*   **Energy Savings:** By matching motor speed to load requirements, energy consumption is significantly reduced, especially in variable torque loads (e.g., fans, pumps).
    *   **Example:** A fan running at half speed can consume only 1/8th of the power.
*   **Improved Process Control:** Precise control over speed, torque, and acceleration allows for better product quality and efficiency in manufacturing processes.
*   **Reduced Mechanical Stress:** Smooth starting and stopping (soft start/stop) minimizes mechanical shock on the motor, driven equipment, and transmission systems, leading to increased lifespan.
*   **Wider Operating Range:** ASDs enable operation at speeds above and below the motor's base speed.
*   **Reduced Starting Current:** Soft starting reduces the high inrush current associated with direct-on-line starting, which is beneficial for the power supply and motor windings.
*   **Flexibility:** Allows for easy adjustment of operating parameters without mechanical modifications.

### 1.3 Block Diagram of a Typical Electric Drive System

```
+-----------------+      +-----------------+      +-----------------+      +----------+
|                 |      |                 |      |                 |      |          |
|   Power Source  |----->|  Power Converter|----->|  Electric Motor |----->|   Load   |
| (AC/DC Supply)  |      | (e.g., VSI, CSI)|      |                 |      |          |
|                 |      |                 |      |                 |      |          |
+-----------------+      +-----------------+      +-----------------+      +----------+
         ^                                                                          |
         |                                                                          |
+-----------------+                                                                 |
|                 |                                                                 |
|  Control System |-----------------------------------------------------------------+
| (Speed, Torque, |
|   Position)     |
+-----------------+
```

*   **Power Source:** Typically the utility grid (AC) or a DC source.
*   **Power Converter:** The heart of the drive, conditioning the power from the source to suit the motor. For VSI-fed induction motors, this is a Voltage Source Inverter.
*   **Electric Motor:** The induction motor in this context.
*   **Load:** The mechanical system being driven.
*   **Control System:** Provides command signals to the power converter to regulate the motor's performance. This often involves feedback from the motor (e.g., speed sensors, current sensors).

### 1.4 Types of Loads

Loads can be broadly classified based on their power-speed characteristics:

*   **Constant Torque (Tc) Loads:** The torque required by the load remains constant irrespective of the speed.
    *   **Examples:** Conveyor belts, reciprocating compressors, printing presses, mixers.
    *   **Power-Speed Relationship:** $P \propto \omega$ (Power is directly proportional to speed).
*   **Constant Power (Pc) Loads:** The power required by the load remains constant irrespective of the speed. This implies the torque is inversely proportional to speed.
    *   **Examples:** Machine tools (lathes, milling machines) during cutting operations, certain types of winding machines.
    *   **Power-Speed Relationship:** $P = constant$, so $T \propto 1/\omega$ (Torque is inversely proportional to speed).
*   **Variable Torque Loads:** The torque varies with speed, often following a power-speed relationship.
    *   **Constant Speed Torque ($T \propto \omega^0$):** Not a common load type.
    *   **Linear Torque Loads ($T \propto \omega^1$):** Torque increases linearly with speed.
        *   **Examples:** Some types of centrifugal pumps and fans at very low speeds.
    *   **Quadratic Torque Loads ($T \propto \omega^2$):** Torque increases with the square of speed.
        *   **Examples:** Most centrifugal pumps and fans, propeller-driven loads.
        *   **Power-Speed Relationship:** $P \propto \omega^3$ (Power is proportional to the cube of speed).

### 1.5 Classification of Load Torque

Load torque can be classified based on its nature and behavior:

*   **Static Torque:** The torque required to overcome static friction, inertia, and other mechanical resistances that are independent of speed.
    *   **Friction Torque ($T_f$):**
        *   **Coulomb Friction:** Constant torque opposing motion, regardless of speed.
        *   **Viscous Friction:** Torque proportional to speed ($T_f \propto \omega$).
    *   **Windage Torque ($T_w$):** Torque due to air resistance, typically proportional to the square of speed ($T_w \propto \omega^2$).
    *   **Spring Torque ($T_s$):** Torque related to elastic forces, usually proportional to displacement (and hence speed when rotating) ($T_s \propto \theta$, so in dynamic cases $T_s \propto \omega$).
*   **Dynamic Torque:** Torque that depends on the motion of the load.
    *   **Inertial Torque ($T_i$):** Torque required to accelerate or decelerate the rotor. $T_i = J \frac{d\omega}{dt}$, where $J$ is the moment of inertia. This torque is present only during speed changes.
    *   **Load Torque ($T_L$):** The torque exerted by the driven machinery. This is the sum of various static and dynamic torque components as discussed above.

The total torque an electric motor must produce is the sum of the inertial torque and the load torque:
$T_m = T_i + T_L = J \frac{d\omega}{dt} + T_L$

---

## 2. Three-Phase VSI Fed Induction Motor Drives

A Voltage Source Inverter (VSI) converts a DC input voltage into a variable voltage and variable frequency AC output. This AC output is used to control the speed of an induction motor.

### 2.1 Block Diagram of a VSI Fed Induction Motor Drive

```
+----------+      +-----------------+      +-----------------+      +------------------+      +----------+
|          |      |                 |      |                 |      |                  |      |          |
| DC Input |----->|   DC Link       |----->|     VSI         |----->|  Induction Motor |----->|   Load   |
| (from   |      |   Capacitor     |      | (Switching      |      | (3-Phase)        |      |          |
| Rectifier/|      |                 |      | Devices: IGBTs, |      |                  |      |          |
|  DC Source)|      |                 |      | MOSFETs)        |      |                  |      |          |
+----------+      +-----------------+      +-----------------+      +------------------+      +----------+
       ^                                                                          |
       |                                                                          |
+-----------------+                                                                 |
|                 |                                                                 |
| Control Unit    |-----------------------------------------------------------------+
| (PWM Generator, |
| Speed/Torque    |
| Controller)     |
+-----------------+
```

*   **DC Input:** Typically obtained from a controlled or uncontrolled rectifier fed from the AC mains, or from a DC source. A DC link capacitor is used to smooth the DC voltage and provide reactive power to the inverter.
*   **VSI:** Consists of power semiconductor switches (like IGBTs or MOSFETs) arranged in a bridge configuration. By controlling the switching of these devices, a variable voltage, variable frequency AC output is generated.
*   **Induction Motor:** The driven machine.
*   **Load:** The mechanical system connected to the motor shaft.
*   **Control Unit:** Generates the switching signals for the VSI. This unit typically implements a Pulse Width Modulation (PWM) strategy to synthesize the desired output voltage and frequency. It also contains the speed and torque control loops.

### 2.2 Stator Voltage Control (Limited Application for Induction Motors)

While controlling the stator voltage can influence the speed of an induction motor, it's a less efficient and less common method for precise speed control compared to V/F control.

*   **Principle:** The torque produced by an induction motor is approximately proportional to the square of the stator voltage ($T \propto V_s^2$). By reducing the stator voltage, the torque capability of the motor is reduced.
*   **Method:** A variable voltage can be applied using a variable transformer (Variac) or a controlled AC voltage controller (e.g., using back-to-back thyristors).
*   **Limitations:**
    *   **Poor Torque Control at Low Speeds:** As voltage decreases, the motor's starting torque and low-speed torque capability significantly reduce, leading to poor performance and potential stalling.
    *   **Reduced Magnetic Flux:** Lowering voltage also reduces the magnetic flux, which can increase the magnetizing current and affect the power factor.
    *   **Inefficient:** Voltage controllers like Variacs or phase-controlled rectifiers (for AC voltage control) introduce losses.
    *   **Not suitable for wide speed range control.**

**Important Point:** Stator voltage control alone is generally not used for modern ASDs of induction motors due to its limitations, especially at low speeds.

### 2.3 V/F Speed Control (Constant Volts per Hertz)

V/F control is the most widely used and simplest method for speed control of induction motors using a VSI. It aims to maintain a constant ratio of stator voltage to frequency.

#### 2.3.1 Principle of V/F Control

The torque-producing capability of an induction motor is primarily governed by the air-gap flux. The air-gap flux is proportional to the ratio of the applied stator voltage ($V_s$) to the stator frequency ($f_s$).

*   **From motor equations:** The approximate relationship for air-gap flux is proportional to $V_s/f_s$.
*   **Torque:** The maximum torque an induction motor can produce is approximately proportional to the square of the air-gap flux. Therefore, $T_{max} \propto (V_s/f_s)^2$.
*   **V/F Control Strategy:** To maintain constant torque capability across different speeds, the stator voltage ($V_s$) is varied proportionally to the desired stator frequency ($f_s$).

$V_s/f_s = Constant$

#### 2.3.2 V/F Control Characteristics

*   **Below Base Speed (constant V/f region):**
    *   The motor operates with a constant air-gap flux.
    *   The required stator voltage is increased linearly with frequency.
    *   **Speed-Torque Characteristic:** For a given frequency, the motor can produce a relatively constant maximum torque (within its thermal limits). The torque-speed curves are scaled versions of the base speed curve, shifted horizontally.
*   **Above Base Speed (constant voltage region):**
    *   The stator voltage is kept at its maximum rated value.
    *   The frequency is increased beyond the base frequency.
    *   **Flux Weakening:** As frequency increases above the base value, the applied voltage remains constant, leading to a decrease in air-gap flux ($V_s/f_s$ decreases).
    *   **Speed-Torque Characteristic:** The maximum torque capability decreases inversely with the speed ($T_{max} \propto 1/f_s^2$ or $T_{max} \propto 1/\omega^2$). This is called **flux weakening**.

#### 2.3.3 V/F Control Operation

*   **Desired Speed Input:** The control system receives a desired speed command.
*   **Frequency Calculation:** The desired speed is converted into a desired stator frequency based on the motor's pole count and synchronous speed formula ($\omega_s = 120f_s/P$, where $\omega_s$ is synchronous speed in RPM and $P$ is the number of poles).
*   **Voltage Calculation:** Based on the desired frequency, the required stator voltage is calculated using the V/f ratio.
    *   If $f_s \le f_{base}$, then $V_s = k \cdot f_s$ (where $k = V_{base}/f_{base}$)
    *   If $f_s > f_{base}$, then $V_s = V_{base}$ (maximum voltage)
*   **PWM Generation:** The control unit generates PWM signals for the VSI switches to produce an output voltage with the calculated magnitude and frequency.

#### 2.3.4 Speed-Torque Characteristics of V/F Control

*   **Base Speed:** The speed at which the motor operates with rated voltage and rated frequency.
*   **Region 1: Constant V/f (Below Base Speed):**
    *   As frequency (and thus speed) is reduced, the voltage is also reduced proportionally.
    *   The shape of the torque-speed curve remains similar to the rated voltage curve, but it's scaled down with frequency.
    *   The maximum torque capability is approximately constant.
    *   However, at very low frequencies, the stator resistance voltage drop becomes significant ($V_s = IR_s + j\omega L_m I_m + ...$). To compensate for this and maintain sufficient flux, the voltage is often boosted slightly above the linear V/f line at very low frequencies (e.g., 5-10 Hz). This is known as **voltage boosting**.
*   **Region 2: Constant Voltage (Above Base Speed):**
    *   The stator voltage is held constant at its rated value.
    *   As frequency increases, the voltage-to-frequency ratio decreases, causing flux weakening.
    *   The maximum torque capability falls rapidly as speed increases, approximately as $1/f_s^2$.

**Diagrammatic Representation of Speed-Torque Characteristics:**

```
       ^ Torque (T)
       |
       |          Region 2 (Constant V, Flux Weakening)
       |         /
       |        /
       |-------/----------  Constant Torque Capability (approx.)
       |      / \
       |     /   \
       |    /     \ Region 1 (Constant V/f)
       |   /       \
       |--/---------\----------  (Base Torque at Base Speed)
       | /           \
       |/             \
       +-----------------------------------> Speed (ω)
       0       ω_base
```

**Important Point:** The V/f control strategy aims to keep the air-gap flux approximately constant below base speed, thereby providing a relatively constant torque capability. Above base speed, it operates in flux weakening mode, reducing the torque capability.

---

## 3. Speed Control in V/F Fed Induction Motor Drives

### 3.1 Operation Below Base Speed (Constant V/f Region)

*   **Mechanism:** The control system adjusts both the output frequency ($f_s$) and output voltage ($V_s$) of the VSI. The ratio $V_s/f_s$ is kept constant.
*   **Speed Range:** Typically from zero to the motor's base (rated) speed.
*   **Torque Capability:** Approximately constant torque can be delivered across this speed range.
*   **Control:** The desired speed is set, which dictates the desired output frequency. The corresponding voltage is calculated using the V/f ratio.
*   **Example:** To reduce speed from rated to half speed, both frequency and voltage are halved.

### 3.2 Operation Above Base Speed (Constant Voltage Region)

*   **Mechanism:** The VSI output frequency is increased beyond the base frequency, while the output voltage is held at its rated maximum value.
*   **Speed Range:** From the motor's base speed up to a higher speed limited by the motor's mechanical strength and the VSI's voltage capability.
*   **Flux Weakening:** As frequency increases, the $V_s/f_s$ ratio decreases, leading to a reduction in the air-gap magnetic flux.
*   **Torque Capability:** The maximum torque capability reduces significantly with increasing speed, generally proportional to $1/f_s^2$. This means the drive can only deliver a reduced torque at speeds above base speed.
*   **Control:** The desired speed is set, which dictates a higher output frequency. The VSI output voltage remains at its maximum.
*   **Example:** To operate at 1.2 times the base speed, the frequency is increased by 20%, while the voltage is kept at its rated value. The torque capability will be reduced.

**Important Point:** Operation above base speed is primarily used for applications requiring higher speeds, where reduced torque capability is acceptable.

---

## 4. Braking of Induction Motors

Braking in electric drives refers to the process of decelerating the motor and its load. For induction motors, several braking methods can be employed using VSI drives.

### 4.1 Dynamic Braking (Rheostatic Braking)

*   **Concept:** The stator windings of the induction motor are disconnected from the AC supply and connected to a resistor. The rotor windings (or stator in this case, as it's connected to the VSI) are excited by a DC voltage or DC current, or by the back EMF generated by the spinning rotor.
*   **VSI Implementation:**
    1.  The AC supply to the VSI is switched off.
    2.  The motor is disconnected from the VSI.
    3.  The motor's stator terminals are connected to a braking resistor through a switch or by reconfiguring the VSI output stage.
    4.  The VSI is used to supply a DC voltage to the stator windings (or the stator is connected to a DC source or resistor).
    5.  As the motor rotor spins, it acts like a generator, inducing currents in the stator. These currents flow through the braking resistor, dissipating energy as heat, thus slowing down the motor.

*   **How it works:**
    *   When the motor is disconnected from the AC supply and connected to a resistor (or the VSI is reconfigured to act as a DC source feeding the resistor), the motor acts as a self-excited generator if there's residual flux.
    *   Alternatively, if the VSI is used to provide a DC excitation to the stator terminals (effectively acting as a DC source connected to the resistor), the kinetic energy of the rotor is converted into electrical energy, which is then dissipated as heat in the resistor.
    *   The torque produced opposes the direction of rotation.
*   **Characteristics:**
    *   **Energy Dissipation:** Energy is dissipated as heat in the external resistor.
    *   **Braking Torque:** The braking torque is proportional to the square of the rotor speed and the resistance value.
    *   **Efficiency:** Not energy efficient as energy is wasted as heat.
    *   **Applications:** Used for stopping the motor quickly or holding a load.

### 4.2 Regenerative Braking

*   **Concept:** When the motor is driven at a speed higher than its synchronous speed corresponding to the applied stator voltage and frequency, it acts as a generator. The kinetic energy of the rotor is converted into electrical energy. In regenerative braking, this generated electrical energy is returned to the DC source.
*   **VSI Implementation:**
    1.  The VSI control is adjusted to operate the motor in the region where its speed exceeds the synchronous speed for the given voltage and frequency (e.g., by reducing the output frequency while the load tries to maintain speed, or by increasing the load torque).
    2.  The motor now acts as a generator, producing power.
    3.  The VSI, which has bidirectional switching capability (e.g., using IGBTs with anti-parallel diodes), allows this generated power to flow back from the motor terminals to the DC link capacitor.
    4.  If the DC link is connected to a suitable source (like a regenerative converter or a resistor) that can absorb this energy, the energy is fed back.
    5.  The braking torque is produced because the motor is generating power, which opposes its rotation.

*   **How it works:**
    *   When the motor speed $\omega_m$ is greater than the synchronous speed $\omega_s$ for the applied stator voltage and frequency, the slip becomes negative.
    *   Negative slip indicates that the rotor is rotating faster than the magnetic field, causing it to act as a generator.
    *   The VSI, when configured appropriately, allows this generated power to flow back to the DC link.
    *   The torque produced opposes the rotation, thus causing deceleration.
*   **Characteristics:**
    *   **Energy Recovery:** The generated energy is fed back to the source, making it an energy-efficient braking method.
    *   **Braking Torque:** The braking torque is proportional to the slip (negative slip) and the voltage.
    *   **DC Link Control:** Requires a DC link that can handle the regenerated energy. If the DC link is a passive capacitor, it will charge up, and if not controlled, it can lead to overvoltage. Therefore, an active front-end converter or a braking chopper with a resistor is often used to manage the regenerated energy.
    *   **Applications:** Applications where frequent deceleration is required and energy recovery is desirable (e.g., elevators, cranes, electric vehicles).

---

## 5. Important Points to Remember

*   **VSI:** Converts DC to variable voltage, variable frequency AC.
*   **V/F Control:** Maintains $V_s/f_s$ constant below base speed for constant torque capability.
*   **Flux Weakening:** Above base speed, voltage is constant, and flux decreases as frequency increases, reducing torque capability.
*   **Voltage Boosting:** Slight increase in voltage at very low frequencies to compensate for stator resistance drop.
*   **Dynamic Braking:** Dissipates braking energy as heat in an external resistor. Motor acts as a generator, fed into a resistor.
*   **Regenerative Braking:** Returns braking energy to the DC source. Motor acts as a generator, feeding power back to the DC link. Requires appropriate DC link management.
*   **Load Torque Classification:** Constant Torque, Constant Power, Variable Torque ($T \propto \omega^2$ for fans/pumps).
*   **ASDs Advantages:** Energy saving, better control, reduced stress, wider speed range.

---

## 6. Practice Questions and Exercises

**Question 1:** Explain the principle of V/F control for an induction motor drive. How does it achieve speed control?
**Answer:** V/F control aims to maintain a constant ratio of stator voltage to stator frequency ($V_s/f_s$). This is because the air-gap flux, which determines the torque-producing capability, is proportional to this ratio. By varying the output frequency and voltage of the VSI proportionally, the motor's speed is controlled, and its torque capability is kept relatively constant below the base speed.

**Question 2:** Describe the difference between operation below and above base speed in a V/F controlled induction motor drive. What happens to the flux and torque capability in each region?
**Answer:**
*   **Below Base Speed:** The drive operates in the constant $V/f$ region. Voltage is proportional to frequency. The air-gap flux is maintained nearly constant, allowing for approximately constant torque capability.
*   **Above Base Speed:** The drive operates in the constant voltage region. The frequency is increased while the voltage remains at its rated maximum. This leads to flux weakening ($V_s/f_s$ decreases), and the maximum torque capability decreases rapidly, typically proportional to $1/f_s^2$.

**Question 3:** A 4-pole, 400V, 50Hz induction motor has a base speed of 1500 RPM (synchronous speed). If you want to run the motor at 750 RPM using V/F control, what should be the approximate output voltage and frequency from the VSI? (Assume no voltage boosting is needed.)
**Answer:**
*   Base frequency $f_{base} = 50$ Hz.
*   Base voltage $V_{base} = 400$ V.
*   Desired speed $\omega_{desired} = 750$ RPM.
*   Synchronous speed $\omega_{sync} = 1500$ RPM.
*   The ratio of desired speed to synchronous speed is $750/1500 = 0.5$.
*   Since the desired speed (750 RPM) is below the base synchronous speed (1500 RPM), we are in the constant $V/f$ region.
*   Desired frequency $f_{desired} = 0.5 \times f_{base} = 0.5 \times 50$ Hz $= 25$ Hz.
*   The V/f ratio is $400V / 50Hz = 8$ V/Hz.
*   Desired voltage $V_{desired} = 8$ V/Hz $\times f_{desired} = 8$ V/Hz $\times 25$ Hz $= 200$ V.
*   So, the VSI should output approximately 200V and 25Hz.

**Question 4:** Compare dynamic braking and regenerative braking in terms of energy efficiency and how braking torque is achieved.
**Answer:**
*   **Energy Efficiency:**
    *   **Dynamic Braking:** Inefficient, as braking energy is dissipated as heat in an external resistor.
    *   **Regenerative Braking:** Energy efficient, as braking energy is returned to the DC source.
*   **Braking Torque Mechanism:**
    *   **Dynamic Braking:** Achieved by connecting the motor terminals to a resistor. The motor acts as a generator, and the energy is dissipated as heat, creating a braking torque.
    *   **Regenerative Braking:** Achieved by operating the motor at a speed greater than synchronous speed. The motor acts as a generator, and the generated energy is fed back to the DC source, producing a braking torque.

**Question 5:** What is the purpose of the DC link capacitor in a VSI fed drive?
**Answer:** The DC link capacitor filters the DC voltage from the rectifier or DC source and provides a stable DC voltage to the VSI. It also supplies the reactive power required by the inverter operation and can temporarily absorb energy during load transients.

---

## 7. Alignment with Course Outcomes

*   **CO1 (Understand power semiconductor devices):** Implicitly addressed as the VSI uses these devices.
*   **CO2 (Understand rectifiers, AC voltage controllers, switching regulators):** Rectifier is a precursor to the DC link.
*   **CO3 (Understand Inverters):** The VSI is a type of switch-mode DC-AC inverter, and its operation in speed control is detailed.
*   **CO4 (Need for improved efficiency, reliability, waveforms):** Advantages of ASDs highlight improved efficiency and reliability. V/F control offers better control than older methods.
*   **CO5 (Features of ASDs, analyze basic drive schemes):** This module directly addresses the features of ASDs and analyzes the basic scheme of a VSI fed induction motor drive, including speed-torque characteristics and braking.

---
