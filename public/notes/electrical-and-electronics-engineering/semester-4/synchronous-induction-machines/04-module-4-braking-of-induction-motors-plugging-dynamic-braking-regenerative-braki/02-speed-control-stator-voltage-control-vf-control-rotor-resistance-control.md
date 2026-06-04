---
title: "Speed control – stator voltage control, V/f control, rotor resistance control"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 4: Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dfd"
status: "completed"
scrapedAt: "2026-05-23T16:19:18.887Z"
---
# SYNCHRONOUS & INDUCTION MACHINES: Module 4 - Speed Control of Induction Motors

This module delves into various methods for controlling the speed of three-phase induction motors. We will focus on three key techniques: stator voltage control, V/f control, and rotor resistance control.

**Course Outcomes Addressed:**

*   **CO4: Analyse the various starting, braking and speed control methods of 3- phase induction motors. (Knowledge Level: K3)** - This module directly addresses the speed control aspect of this outcome.

**Learning Outcomes:**

*   Understand the principles of stator voltage control for induction motors.
*   Comprehend the concept and application of V/f control in induction motors.
*   Explain the mechanism of rotor resistance control for induction motors.
*   Analyse the impact of these speed control methods on motor performance.

---

## 1. Speed Control of Induction Motors

Induction motors are widely used due to their robustness, reliability, and relatively low cost. However, their inherent speed is dependent on the supply frequency and the number of poles. For applications requiring variable speed operation, specific control methods are employed.

---

### 2. Stator Voltage Control

**Concept:**
Stator voltage control is a method of varying the speed of an induction motor by adjusting the magnitude of the voltage applied to the stator terminals.

**Principle:**
The torque developed by an induction motor is approximately proportional to the square of the applied stator voltage. By reducing the stator voltage, the developed torque is reduced. To maintain the same load torque, the motor speed will decrease.

**Mathematical Relationship (Approximate):**
From the torque-speed characteristic, the maximum torque ($T_{max}$) is proportional to the square of the applied voltage ($V_s$).
$T_{max} \propto V_s^2$

The starting torque ($T_{start}$) is also proportional to the square of the applied voltage.
$T_{start} \propto V_s^2$

**Mechanism:**
This method is typically implemented using a variable autotransformer or solid-state voltage controllers (like thyristor-based systems) to vary the stator voltage.

**Advantages:**
*   Simple to implement.
*   Relatively inexpensive for lower power ratings.
*   Provides smooth speed control.

**Disadvantages:**
*   **Reduced Torque:** The torque capability of the motor decreases significantly as voltage is reduced, limiting the speed range. At very low voltages, the motor may not be able to develop sufficient torque to overcome even light loads.
*   **Reduced Power Output:** The maximum power output is proportional to the square of the voltage.
*   **Lower Efficiency:** Efficiency tends to decrease at lower speeds due to increased slip relative to the reduced voltage.
*   **Harmonics (with solid-state controllers):** Electronic voltage controllers can introduce voltage harmonics, which can lead to increased motor losses and noise.

**Application:**
This method is best suited for applications where only a small reduction in speed is required, or for lightly loaded motors. Examples include variable speed fans and pumps where the load torque is also reduced with speed.

**Reference Insight:**
*   **P.S. Bhimbra (2021):** Emphasizes that stator voltage control is a simple method but its effectiveness is limited by the significant reduction in torque capability.
*   **M.G. Say (2002):** Discusses the impact of voltage reduction on the torque-speed curve, showing a family of curves for different voltages, with each curve shifted to the left.
*   **Kothari & Nagrath (2017):** Explains that the reduced torque at lower voltages can lead to instability and breakdown.

---

### 3. V/f Control (Constant Volts per Hertz Control)

**Concept:**
V/f control is a widely used method for speed control of induction motors that aims to maintain a constant ratio of stator voltage to stator frequency.

**Principle:**
The magnetic flux in the air gap of an induction motor is approximately proportional to the ratio of applied voltage to frequency ($V_s/f_s$). To maintain the flux constant, this ratio should be kept constant. By varying both the voltage and frequency while keeping their ratio constant, the motor's torque-producing capability can be maintained over a wide speed range.

**Mathematical Relationship:**
Flux per pole, $\phi \propto \frac{V_s}{f_s}$

To maintain constant flux, $\frac{V_s}{f_s} = \text{constant}$.

The torque developed by an induction motor is proportional to the square of the flux and inversely proportional to the rotor resistance. If the flux is kept constant, the torque can be controlled by adjusting the slip.

**Mechanism:**
V/f control is typically achieved using Variable Frequency Drives (VFDs). A VFD first converts the AC supply to DC (using a rectifier) and then converts the DC back to a variable frequency, variable voltage AC output (using an inverter). The inverter can precisely control both the frequency and voltage applied to the motor.

**Operation:**
*   **Starting:** The frequency is initially set low with a proportionally low voltage. As the motor accelerates, both voltage and frequency are increased at the same rate to maintain the constant V/f ratio.
*   **Full Speed:** At the rated frequency and voltage, the motor operates at its nominal performance.
*   **Reduced Speed:** To reduce speed, both voltage and frequency are reduced proportionally.

**Advantages:**
*   **Constant Torque Operation:** Maintains near-constant torque capability across a wide speed range (down to about 10-20% of base speed).
*   **Good Efficiency:** Generally maintains good efficiency over the operating range.
*   **Smooth Speed Control:** Provides smooth and precise speed adjustment.
*   **Reduced Starting Current:** The reduced voltage at start limits the inrush current.

**Disadvantages:**
*   **Torque Reduction at Low Frequencies:** Below a certain frequency (typically around 10-20 Hz), the voltage becomes limited by the rated voltage. If the V/f ratio is maintained, the voltage would become too low to produce sufficient torque. To compensate, a "boost voltage" is often added at low frequencies, or the V/f ratio is allowed to increase. This can lead to saturation and higher magnetizing current.
*   **Complexity and Cost:** Requires a VFD, which adds complexity and cost compared to simple stator voltage control.
*   **Harmonics:** VFDs can generate voltage and current harmonics, requiring filtering in some sensitive applications.

**Application:**
V/f control is the most popular method for speed control of induction motors in a wide range of industrial applications, including:
*   Pumps and fans (HVAC systems)
*   Conveyors
*   Machine tools
*   Textile machinery
*   Elevators

**Reference Insight:**
*   **K Murugesh Kumar (2000):** Provides a detailed explanation of how the V/f ratio maintains the air-gap flux, which is crucial for constant torque operation.
*   **J.B. Gupta (2022):** Discusses the practical implementation of V/f control using PWM (Pulse Width Modulation) in inverters, which allows for precise voltage and frequency control.
*   **M.G. Say (2002):** Illustrates the effect of V/f control on the torque-speed curves, showing how the motor can operate at different speeds with similar torque characteristics.

**Example:**
A 400V, 50Hz, 4-pole induction motor has a base speed of 1500 rpm.
*   To operate at 25 Hz (half speed), the voltage is reduced to 200V (V/f = 400/50 = 200/25 = 8 V/Hz). The motor can still produce nearly rated torque.
*   To operate at 10 Hz, the voltage might be set to 80V (V/f = 8 V/Hz). However, if the voltage is limited to 80V, the motor might not be able to achieve rated torque. A boost voltage might be added to compensate.

---

### 4. Rotor Resistance Control (for Wound Rotor Induction Motors)

**Concept:**
Rotor resistance control is a speed control method applicable *only* to wound rotor induction motors (also known as slip-ring induction motors). It involves adding external resistance to the rotor circuit to vary the speed.

**Principle:**
The torque developed by an induction motor depends on the rotor resistance. By increasing the rotor resistance, the slip at which maximum torque occurs is increased, allowing the motor to operate at a lower speed for a given load torque.

**Mathematical Relationship:**
The torque developed by an induction motor is given by:
$T = \frac{3}{\omega_s} \frac{s E_2^2 R_2'}{R_2'^2 + (sX_2')^2}$
where:
*   $T$ is the torque
*   $\omega_s$ is the synchronous angular speed
*   $s$ is the slip
*   $E_2$ is the induced voltage in the rotor at standstill
*   $R_2'$ is the equivalent rotor resistance referred to the stator
*   $X_2'$ is the equivalent rotor leakage reactance referred to the stator at standstill

The starting torque is proportional to $R_2'/(R_2'^2 + X_2'^2)$. Maximum torque occurs when $R_2' = sX_2'$.
Therefore, increasing $R_2'$ shifts the point of maximum torque to a higher slip value, thus lowering the operating speed.

**Mechanism:**
External resistors are connected to the rotor terminals via slip rings and brushes. The value of this external resistance can be varied to control the speed.
*   **Low Speed:** High external resistance is added.
*   **High Speed:** External resistance is gradually reduced.
*   **Full Speed (no external resistance):** The rotor circuit is short-circuited, and the motor operates at its natural speed.

**Advantages:**
*   **Good Starting Torque:** Can achieve high starting torque by adding resistance.
*   **Smooth Speed Control:** Provides relatively smooth speed control.
*   **High Efficiency at Low Speeds:** Compared to stator voltage control at reduced speed, rotor resistance control can be more efficient because the power dissipated in the external resistors is the slip power, which is the extra power being converted from electrical to mechanical form.

**Disadvantages:**
*   **Requires Wound Rotor Motor:** Only applicable to wound rotor induction motors, which are more expensive and require more maintenance (slip rings and brushes).
*   **Reduced Torque at Lower Speeds:** Similar to stator voltage control, the maximum torque capability decreases with the addition of external resistance.
*   **Low Efficiency at Reduced Speeds:** Significant power is dissipated as heat in the external resistors, especially at low speeds and high slip, leading to poor overall efficiency.
*   **Limited Speed Range:** The practical speed reduction is limited to about 50% of the rated speed.

**Application:**
This method is used in applications where:
*   High starting torque is required.
*   Variable speed operation is needed, but only over a limited range.
*   The motor operates at reduced speeds for a significant portion of the time, justifying the higher initial cost and maintenance of a wound rotor motor.
*   Examples include cranes, hoists, and large industrial fans where smooth acceleration and variable speed are needed.

**Reference Insight:**
*   **Kothari & Nagrath (2017):** Highlights that rotor resistance control is a classic method but suffers from poor efficiency due to energy dissipation in external resistors.
*   **P.S. Bhimbra (2021):** Explains the use of a rheostatic brake in conjunction with speed control for wound rotor motors.
*   **J.B. Gupta (2022):** Provides detailed equivalent circuit analysis showing how varying rotor resistance affects the torque-speed curve.

**Example:**
Consider a wound rotor induction motor. To start it with high torque, a significant amount of external resistance is added to the rotor. As the motor accelerates, this resistance is progressively reduced. At rated speed, the external resistance is shorted out. If the motor needs to operate at a speed below its rated speed, some external resistance is maintained in the rotor circuit. The lower the desired speed, the higher the resistance will be, but this will also reduce the maximum torque the motor can produce.

---

## 5. Comparison of Speed Control Methods

| Feature            | Stator Voltage Control                      | V/f Control (VFD)                             | Rotor Resistance Control (Wound Rotor)        |
| :----------------- | :------------------------------------------ | :-------------------------------------------- | :-------------------------------------------- |
| **Motor Type**     | Squirrel Cage & Wound Rotor                 | Squirrel Cage & Wound Rotor                   | **Wound Rotor only**                          |
| **Speed Range**    | Limited (slight reduction)                  | Wide (near full range)                        | Moderate (up to 50% reduction)                |
| **Torque Capability**| Decreases significantly with speed reduction| Near constant torque over wide range          | Decreases with speed reduction                |
| **Efficiency**     | Poor at reduced speeds                     | Good over wide range                          | Poor at reduced speeds (high slip)            |
| **Starting Torque**| Decreases significantly with voltage reduction| High (can be controlled)                      | High (by adding resistance)                   |
| **Complexity/Cost**| Low                                         | High (VFD required)                           | Moderate (motor cost, slip rings)             |
| **Applications**   | Lightly loaded, small speed variations      | General purpose, pumps, fans, conveyors       | Cranes, hoists, high starting torque needs    |

---

## 6. Practice Questions and Answers

**Question 1:** Which speed control method is suitable for both squirrel cage and wound rotor induction motors and offers near-constant torque over a wide speed range?

**Answer:** V/f control (Variable Frequency Drive).

**Question 2:** What is the primary limitation of stator voltage control for speed reduction?

**Answer:** Significant reduction in torque capability at lower speeds.

**Question 3:** Explain why rotor resistance control is only applicable to wound rotor induction motors.

**Answer:** It requires access to the rotor windings via slip rings and brushes to add external resistance. Squirrel cage rotors have short-circuited bars and cannot have external resistance added.

**Question 4:** If a 400V, 50Hz induction motor is operated at 400V and 25Hz using V/f control, what will be the approximate speed of the motor if its base speed is 1500 rpm?

**Answer:**
The V/f ratio is 400V/50Hz = 8 V/Hz.
When the frequency is 25Hz, the voltage is adjusted to maintain the V/f ratio: $V = 8 \text{ V/Hz} \times 25 \text{ Hz} = 200 \text{ V}$.
The motor speed is directly proportional to the frequency.
New speed = (New Frequency / Base Frequency) $\times$ Base Speed
New speed = (25 Hz / 50 Hz) $\times$ 1500 rpm = 0.5 $\times$ 1500 rpm = 750 rpm.
*(Note: This assumes no slip for approximation, actual speed will be slightly less than synchronous speed).*

**Question 5:** Which method leads to the most significant power loss at reduced speeds?

**Answer:** Rotor resistance control, as the slip power is dissipated in the external resistors.

---

## 7. Important Points to Remember

*   **Torque-Speed Curve:** Understand how each method affects the torque-speed characteristics of the induction motor.
*   **Flux:** V/f control is paramount for maintaining air-gap flux, which is key to torque production.
*   **Motor Type:** Rotor resistance control is exclusive to wound rotor motors.
*   **Efficiency:** Stator voltage and rotor resistance control methods suffer from reduced efficiency at lower speeds due to voltage reduction or power dissipation. V/f control generally maintains better efficiency.
*   **Applications:** Choose the speed control method based on the specific requirements of the application, such as speed range, torque demand, efficiency, and cost.
*   **VFDs:** Variable Frequency Drives are the enabling technology for V/f control and are crucial for modern industrial speed control.

---

This concludes the study notes for the speed control methods of induction motors. Refer to the mentioned textbooks for more in-depth theoretical derivations and practical considerations.
