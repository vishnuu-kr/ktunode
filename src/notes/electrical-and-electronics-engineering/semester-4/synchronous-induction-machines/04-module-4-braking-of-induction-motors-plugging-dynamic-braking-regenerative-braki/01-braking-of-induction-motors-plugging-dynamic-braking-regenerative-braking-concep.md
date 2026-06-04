---
title: "Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 4: Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dfc"
status: "completed"
scrapedAt: "2026-05-23T16:19:18.118Z"
---
# SYNCHRONOUS & INDUCTION MACHINES

## Module 4: Braking of Induction Motors

### Topic: Braking of Induction Motors – Plugging, Dynamic Braking, Regenerative Braking (Concepts Only)

---

### **Introduction to Braking**

Braking in electric motors refers to the process of reducing the speed of the motor to a standstill or a very low speed in a controlled manner. This is essential in many industrial applications where quick stopping is required for safety, operational efficiency, or to prevent damage to machinery. Induction motors, due to their robust nature and wide applicability, often require effective braking mechanisms.

---

### **Relevance to Course Outcomes**

*   **CO4: Analyse the various starting, braking and speed control methods of 3- phase induction motors.** This module directly addresses the "braking" aspect of this course outcome, providing the foundational concepts necessary for analysis.

---

### **Key Concepts and Definitions**

*   **Torque-Speed Characteristic:** The fundamental relationship between the motor's torque output and its speed. Braking methods alter this characteristic to bring the motor to a stop.
*   **Slip:** In an induction motor, slip ($s$) is the difference between the synchronous speed ($N_s$) and the rotor speed ($N_r$), expressed as a fraction of synchronous speed: $s = (N_s - N_r) / N_s$. During normal operation, slip is positive. Braking often involves operating with negative slip.
*   **Synchronous Speed ($N_s$):** The speed of the rotating magnetic field, determined by the supply frequency ($f$) and the number of poles ($P$): $N_s = (120f) / P$ (in RPM).
*   **Rotor Speed ($N_r$):** The actual speed of the motor's rotor.
*   **Negative Slip:** Occurs when the rotor speed is greater than the synchronous speed. In this state, the motor acts as a generator, producing a braking torque.

---

### **Types of Braking**

#### 1. Plugging (Reverse Current Braking)

**Concept:**
Plugging is a rapid braking method where the connections to the motor windings are reversed. This causes the motor to experience a torque in the opposite direction to its rotation, rapidly decelerating it. Essentially, the motor is momentarily connected to the supply as if it were to run in the reverse direction.

**How it Works:**
1.  **Normal Operation:** The stator windings are connected to the AC supply in a specific phase sequence (e.g., R-Y-B). This creates a rotating magnetic field in one direction, and the motor develops torque in that direction.
2.  **Initiating Plugging:** The supply is disconnected. Immediately after disconnection, the stator winding connections are reversed (e.g., R-B-Y).
3.  **Reversal of Field:** The reversed connections cause the rotating magnetic field to reverse its direction.
4.  **Braking Torque:** Since the rotor is still rotating in the original direction, it is now moving faster than the reversed rotating magnetic field. This means the slip becomes negative ($s = (N_s_{reverse} - N_r) / N_s_{reverse}$). With negative slip, the motor produces a braking torque (acting in the opposite direction of rotation) and also generates power.
5.  **Stopping:** The motor decelerates rapidly. When the rotor speed approaches zero (or slightly below, depending on the control), the supply is disconnected again to prevent the motor from accelerating in the reverse direction.

**Key Characteristics:**
*   **Rapid Deceleration:** Provides a very quick stop.
*   **High Starting Torque:** The braking torque during plugging is often comparable to the starting torque, meaning it can be very high.
*   **High Current Draw:** Significant current flows through the motor during the plugging process, which can lead to overheating if not managed carefully.
*   **Mechanical Stress:** The rapid deceleration can induce considerable mechanical stress on the motor and the driven load.
*   **Application:** Used when a quick stop is absolutely essential, like in elevators, presses, and machine tools.

**Textbook Reference:**
*   **Bhimbhura, P.S. (2021) - Electrical Machinery:** Discusses plugging as a method of rapid deceleration by reversing the phase sequence of the stator winding.
*   **Kothari & Nagrath (2017) - Electric Machines:** Explains plugging by switching the supply to two phases, effectively reversing the phase sequence and creating a strong braking torque.

**Example:** Imagine a conveyor belt moving a heavy object. If the belt needs to stop quickly, plugging can be used to achieve this. The motor, while running forward, has its connections reversed. This causes a strong backward torque, slowing the belt down rapidly.

---

#### 2. Dynamic Braking (Rheostatic Braking)

**Concept:**
In dynamic braking, the stator winding is disconnected from the AC supply and connected across a DC source or a resistor. The kinetic energy of the rotor is dissipated as heat in the resistor, causing deceleration.

**How it Works:**
1.  **Normal Operation:** The motor runs connected to the AC supply.
2.  **Initiating Dynamic Braking:** The stator windings are disconnected from the AC supply.
3.  **Connection to DC Source or Resistor:**
    *   **DC Dynamic Braking:** Two phases of the stator winding are connected to a DC supply. This creates a stationary magnetic field. As the rotor continues to spin, it cuts across this stationary field, inducing a torque that opposes its motion. The induced currents flow in a closed circuit through the DC source.
    *   **Resistive Dynamic Braking:** The stator windings (often two phases) are connected across a suitable resistor. The kinetic energy of the rotor causes it to act as a self-excited generator, inducing voltages and currents in the stator windings. These currents flow through the external resistor, dissipating energy as heat and producing a braking torque. The excitation of the stator field depends on the residual magnetism in the stator poles (if DC is used) or the induced currents due to rotor motion (if connected to a resistor).
4.  **Braking Torque:** The induced currents in the stator winding, flowing through the external resistance or DC source, create a torque that opposes the rotor's rotation.
5.  **Stopping:** The motor speed decreases as the kinetic energy is dissipated. The braking torque diminishes as the speed reduces. The motor eventually comes to a standstill or a very low speed.

**Key Characteristics:**
*   **Smooth Deceleration:** Generally provides a smoother deceleration compared to plugging.
*   **Lower Braking Torque:** The braking torque is typically lower than that produced by plugging.
*   **Lower Current Draw:** The current drawn during dynamic braking is usually less than during plugging, reducing the risk of overheating.
*   **Energy Dissipation:** The kinetic energy is dissipated as heat in an external resistor or consumed by the DC source.
*   **Application:** Suitable for applications where a reasonably quick but not excessively rapid stop is required, such as cranes, hoists, and some machine tools.

**Textbook Reference:**
*   **Gupta, J.B. (2022) - Theory & Performance of Electrical Machines:** Details dynamic braking by connecting the stator to a DC voltage or a resistance, leading to braking torque due to induced currents.
*   **Murugesh Kumar, K. (2000) - Induction & Synchronous Machines:** Explains how dynamic braking utilizes the energy stored in the rotor to create a braking torque through external resistance.

**Example:** Consider a hoist used to lift heavy loads. When lowering a load and needing to stop it at a specific height, dynamic braking can be employed. The motor is disconnected from the AC supply and connected to a resistor, allowing it to slow down smoothly without overshooting.

---

#### 3. Regenerative Braking

**Concept:**
Regenerative braking occurs when the induction motor, instead of consuming power from the supply, returns power back to the supply. This happens when the rotor speed exceeds the synchronous speed, causing the motor to operate in the generator mode.

**How it Works:**
1.  **Normal Operation:** The motor runs at a speed less than synchronous speed ($N_r < N_s$), with positive slip.
2.  **Initiating Regenerative Braking:** The rotor speed is increased beyond the synchronous speed ($N_r > N_s$). This can be achieved by an external force acting on the motor shaft, such as a descending load in a hoist or a downhill slope for a vehicle.
3.  **Negative Slip:** When $N_r > N_s$, the slip becomes negative ($s = (N_s - N_r) / N_s < 0$).
4.  **Generator Mode:** With negative slip, the motor's torque direction reverses, and it starts acting as a generator. It converts mechanical energy into electrical energy.
5.  **Power Return:** The generated electrical energy is fed back to the AC supply line.
6.  **Braking Torque:** The machine produces a torque that opposes the mechanical force causing it to over-speed. This torque acts as a braking torque, slowing down the motor.

**Key Characteristics:**
*   **Energy Recovery:** The most significant advantage is the ability to recover energy that would otherwise be dissipated as heat.
*   **Smooth Braking:** Provides very smooth deceleration.
*   **Limited Braking Torque:** The braking torque is limited by the motor's ability to generate power, which is generally lower than plugging.
*   **Requires Over-speeding:** To initiate regenerative braking, the motor's rotor must be driven at a speed greater than the synchronous speed.
*   **Requires a Suitable Supply:** The AC supply must be able to accept the power fed back from the motor.
*   **Application:** Commonly used in electric vehicles, elevators, and applications where loads might drive the motor.

**Textbook Reference:**
*   **Say, M.G. (2002) - Performance & Design of AC Machines:** Explains that when an induction motor is driven above synchronous speed, it acts as a generator, feeding power back to the line and producing a braking torque.
*   **Kothari & Nagrath (2017) - Electric Machines:** Describes regenerative braking as operating the motor in the asynchronous generator region, where rotor speed exceeds synchronous speed.

**Example:** Consider an elevator. When a heavy load is being lowered, it can drive the elevator motor at a speed greater than its synchronous speed. The motor then acts as a generator, feeding power back to the grid and slowing down the descent in a controlled manner.

---

### **Important Points to Remember**

*   **Braking Torque vs. Rotor Speed:** All braking methods are characterized by a torque-speed curve that opposes the direction of rotation, bringing the motor to a halt.
*   **Plugging:** High braking torque, high current, rapid stop, phase reversal.
*   **Dynamic Braking:** Moderate braking torque, lower current, smooth stop, connection to DC or resistance.
*   **Regenerative Braking:** Energy recovery, smooth braking, requires over-speeding, operates as a generator.
*   **Safety:** Overheating and excessive mechanical stress are key considerations when choosing and implementing braking methods.
*   **Control:** The selection and control of braking are crucial to prevent damage to the motor and the driven load.

---

### **Practice Questions and Exercises**

**Question 1:**
Which braking method provides the most rapid deceleration for an induction motor?
(a) Dynamic Braking
(b) Regenerative Braking
(c) Plugging
(d) All braking methods are equally rapid.

**Question 2:**
In dynamic braking, where is the kinetic energy of the induction motor dissipated?
(a) Back into the AC supply
(b) As heat in an external resistor or consumed by a DC source
(c) Through electromagnetic radiation
(d) It is stored within the motor windings

**Question 3:**
Under what condition does an induction motor exhibit regenerative braking?
(a) When the rotor speed is less than synchronous speed.
(b) When the rotor speed is greater than synchronous speed.
(c) When the stator windings are connected to a DC supply.
(d) When the stator windings are connected to a resistor.

**Question 4:**
Explain the fundamental principle behind plugging an induction motor. How does reversing the phase sequence lead to braking?

**Question 5:**
Compare and contrast dynamic braking and regenerative braking in terms of energy dissipation/recovery and braking torque characteristics.

---

### **Answers to Practice Questions**

**Answer 1:**
(c) Plugging

**Answer 2:**
(b) As heat in an external resistor or consumed by a DC source

**Answer 3:**
(b) When the rotor speed is greater than synchronous speed.

**Answer 4:**
When the phase sequence of the stator winding is reversed, the direction of the rotating magnetic field is also reversed. If the motor is still rotating in the original direction, the rotor speed becomes greater than the (reversed) synchronous speed, resulting in negative slip. This negative slip causes the motor to develop a torque in the opposite direction of rotation, thus providing a braking effect. The magnitude of this torque is often comparable to the starting torque.

**Answer 5:**
*   **Energy Dissipation/Recovery:**
    *   **Dynamic Braking:** The kinetic energy of the rotor is dissipated as heat in an external resistor connected to the stator winding, or consumed by a DC source if DC dynamic braking is used. Energy is lost.
    *   **Regenerative Braking:** The kinetic energy is converted into electrical energy and fed back into the AC supply line. Energy is recovered.
*   **Braking Torque Characteristics:**
    *   **Dynamic Braking:** Provides a moderate braking torque, which is generally smooth but may decrease significantly as the speed drops.
    *   **Regenerative Braking:** Provides a smooth braking torque that is proportional to the amount the motor speed exceeds the synchronous speed. The braking torque is generally lower than that achieved by plugging and depends on the magnitude of over-speed.

---
