---
title: "Single-phase induction motors – double revolving field theory – equivalent circuit – torque slip characteristics"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 4: Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dff"
status: "completed"
scrapedAt: "2026-05-23T16:19:20.435Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 4: Braking of Induction Motors & Single-Phase Induction Motors

## Module Overview

This module delves into the operation and characteristics of single-phase induction motors, focusing on the Double Revolving Field Theory, equivalent circuit analysis, and torque-slip characteristics. It also introduces the concepts of braking for induction motors, specifically plugging, dynamic braking, and regenerative braking.

---

## Topic 1: Single-Phase Induction Motors

**Course Outcome Alignment:** CO5 (Explain the construction details and working of various types of single-phase induction motors.) - Knowledge Level: K2

### 1.1 Introduction to Single-Phase Induction Motors

Single-phase induction motors are the most common type of electric motor used in domestic and light industrial applications due to their availability of single-phase power supply. Unlike three-phase induction motors, they do not inherently produce a rotating magnetic field, making them **not self-starting**. Therefore, special starting methods are employed to initiate rotation.

**Key Concepts:**

*   **Single-Phase Supply:** Power is supplied through two wires (one phase and one neutral).
*   **Stator Winding:** Typically consists of a main winding and an auxiliary winding.
*   **Rotor:** Usually a squirrel cage rotor.
*   **Not Self-Starting:** A single-phase AC supply applied to a single winding creates a pulsating magnetic field, not a rotating one, resulting in zero starting torque.

**Reference:**

*   **P.S. Bhimbra, "Electrical Machinery"**: Chapter on Single-Phase Induction Motors provides a detailed introduction.
*   **Kothari & Nagrath, "Electric Machines"**: Offers a fundamental understanding of single-phase induction motor principles.

### 1.2 Double Revolving Field Theory (DRFT)

The DRFT is a powerful analytical tool that explains the operation of a single-phase induction motor by decomposing the pulsating magnetic field of the stator into two oppositely rotating magnetic fields of equal magnitude, each rotating at synchronous speed ($N_s$).

**Key Concepts:**

*   **Pulsating Magnetic Field:** A magnetic field that varies in magnitude sinusoidally with time but remains along a fixed axis. This is produced by a single-phase AC supply in the stator winding.
*   **Two Revolving Fields:** The pulsating field can be resolved into:
    *   **Forward Field:** A field rotating in the direction of rotor rotation, with magnitude $B_f = \frac{B_m}{2}$, where $B_m$ is the maximum value of the pulsating field.
    *   **Backward Field:** A field rotating in the opposite direction of rotor rotation, with magnitude $B_b = \frac{B_m}{2}$.
*   **Torque Production:** Each of these revolving fields interacts with the rotor conductors to produce torque.
    *   **Forward Field Torque ($T_f$):** Produced by the interaction of the forward field with the rotor. This torque acts in the direction of rotation.
    *   **Backward Field Torque ($T_b$):** Produced by the interaction of the backward field with the rotor. This torque acts in the opposite direction of rotation.

**Mathematical Representation:**

Let the stator winding be placed along the x-axis. The flux produced can be represented as:
$\phi_s(t) = \phi_m \sin(\omega t)$

This pulsating flux can be represented by two rotating fluxes:
$\phi_f = \frac{\phi_m}{2} e^{j(\omega t)}$ (Forward rotating flux)
$\phi_b = \frac{\phi_m}{2} e^{-j(\omega t)}$ (Backward rotating flux)

**Important Points to Remember:**

*   The forward field produces torque that aids rotation.
*   The backward field produces torque that opposes rotation.
*   At standstill (s=1), the backward field induces currents in the rotor that create a torque opposing the forward field's torque.
*   As the motor speeds up, the slip relative to the forward field decreases, increasing the forward torque. Simultaneously, the slip relative to the backward field increases, decreasing the magnitude of the backward torque.

**Reference:**

*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Chapter on Single-Phase Induction Motors meticulously explains DRFT.
*   **K Murugesh Kumar, "Induction & Synchronous Machines"**: Provides a clear explanation of the concept and its implications.

### 1.3 Equivalent Circuit of a Single-Phase Induction Motor (Based on DRFT)

The DRFT allows us to represent the single-phase induction motor's behavior using an equivalent circuit that is analogous to the three-phase induction motor's equivalent circuit, but with modifications to account for the two revolving fields.

**Key Concepts:**

*   **Two Equivalent Circuits:** Based on the DRFT, we can split the single-phase induction motor into two equivalent circuits operating independently:
    1.  **Forward Circuit:** Represents the interaction of the forward rotating field. This circuit is similar to a standard induction motor equivalent circuit, but with slip $s$.
    2.  **Backward Circuit:** Represents the interaction of the backward rotating field. This circuit is also similar to a standard induction motor equivalent circuit, but with slip $(2-s)$.

**Equivalent Circuit Components:**

*   $R_1, X_1$: Resistance and leakage reactance of the stator winding.
*   $R_m, X_m$: Core loss resistance and magnetizing reactance.
*   $R'_2, X'_2$: Rotor resistance and leakage reactance referred to the stator.
*   $s$: Slip with respect to the forward field ($s = \frac{N_s - N_r}{N_s}$).
*   $(2-s)$: Slip with respect to the backward field ($2-s = \frac{N_s - (-N_r)}{N_s}$), where $N_r$ is the rotor speed and $-N_r$ is the speed of the backward field relative to the stator. Note that the backward field's speed is $-N_s$, so relative to the rotor at speed $N_r$, the slip is $s_b = \frac{(-N_s) - N_r}{(-N_s)} = \frac{N_s + N_r}{N_s} = 2 - \frac{N_s - N_r}{N_s} = 2-s$.

**Equivalent Circuit Diagram:**

The equivalent circuit consists of two identical induction motor equivalent circuits connected in parallel.

*   **Forward Circuit:**
    *   Stator impedance ($R_1 + jX_1$) in series.
    *   Magnetizing branch ($R_m || jX_m$) in parallel.
    *   Rotor impedance referred to stator for forward field: $R'_2/s + jX'_2$.

*   **Backward Circuit:**
    *   Stator impedance ($R_1 + jX_1$) in series.
    *   Magnetizing branch ($R_m || jX_m$) in parallel.
    *   Rotor impedance referred to stator for backward field: $R'_2/(2-s) + jX'_2$.

**Total Torque:** The total torque is the sum of the torques produced by the forward and backward fields:
$T_{total} = T_f + T_b$

$T_f = \frac{3}{\omega_s} \frac{V_1^2 (R'_2/s)}{(R_1 + R'_2/s)^2 + (X_1 + X'_2)^2}$  (This formula is for 3-phase, for single phase it would be: $T_f = \frac{k V_1^2 (R'_2/s)}{(R_1 + R'_2/s)^2 + (X_1 + X'_2)^2}$) where k is a proportionality constant. A more common form from DRFT: $T_f = \frac{3}{\omega_s} \frac{V_f^2 R'_2/s}{(R_1 + R'_2/s)^2 + (X_1 + X'_2)^2}$ where $V_f$ is the forward voltage. In DRFT, we consider $V_1$ to be split, so $V_f = V_b = V_1/2$. Therefore, $T_f = \frac{3}{\omega_s} \frac{(V_1/2)^2 R'_2/s}{(R_1 + R'_2/s)^2 + (X_1 + X'_2)^2}$

And $T_b = \frac{3}{\omega_s} \frac{V_b^2 (R'_2/(2-s))}{(R_1 + R'_2/(2-s))^2 + (X_1 + X'_2)^2}$ where $V_b$ is the backward voltage. Again, $V_b = V_1/2$. Therefore, $T_b = \frac{3}{\omega_s} \frac{(V_1/2)^2 R'_2/(2-s)}{(R_1 + R'_2/(2-s))^2 + (X_1 + X'_2)^2}$

**Simplified Torque Equation (for analysis):**
$T_{total} = K \left[ \frac{(R'_2/s)}{(R_1 + R'_2/s)^2 + (X_1 + X'_2)^2} - \frac{(R'_2/(2-s))}{(R_1 + R'_2/(2-s))^2 + (X_1 + X'_2)^2} \right]$
where K is a constant.

**Reference:**

*   **M.G. Say, "Performance & Design of AC Machines"**: Chapter on single-phase induction motors provides a detailed derivation of the equivalent circuit.
*   **P.S. Bhimbra, "Electrical Machinery"**: Offers a simplified representation of the equivalent circuit.

### 1.4 Torque Slip Characteristics

The torque-slip characteristic of a single-phase induction motor is obtained by plotting the total torque against slip. Due to the presence of both forward and backward torques, the characteristic is more complex than that of a three-phase motor.

**Key Features of Torque-Slip Curve:**

*   **Starting Torque (s=1):** The total starting torque is the difference between the backward torque and the forward torque at standstill. For most single-phase induction motors without starting mechanisms, this value is negative or very small, indicating they are not self-starting.
*   **Torque-Speed Curve:**
    *   The forward torque increases with decreasing slip (as speed increases) and reaches a maximum at some slip value (usually around 0.1-0.2).
    *   The backward torque increases with increasing slip (as speed increases from negative to positive, i.e., speed goes from $-N_s$ to $N_s$). The magnitude of the backward torque is generally smaller than the forward torque, especially at higher speeds.
    *   The net torque is the difference between the forward and backward torques.
*   **Synchronous Speed ($N_s$, s=0):** At synchronous speed, the forward torque becomes zero (as the denominator $s$ is zero), and the backward torque is significant and negative, tending to oppose rotation. This is why a single-phase induction motor cannot run at synchronous speed.
*   **Max Torque:** The maximum torque occurs at a slip value determined by the combined effect of forward and backward torques.
*   **Motor Operation:** The motor operates in the region where the net torque is positive.

**Effect of Starting Methods:**

The torque-slip characteristics are significantly influenced by the starting method employed, which effectively modifies the motor's parameters or introduces a phase shift to create a net starting torque.

**Reference:**

*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Presents detailed torque-slip curves and their analysis.
*   **K Murugesh Kumar, "Induction & Synchronous Machines"**: Illustrates the torque-slip characteristics with diagrams.

---

## Topic 2: Braking of Induction Motors (Concepts Only)

**Course Outcome Alignment:** CO4 (Analyse the various starting, braking and speed control methods of 3- phase induction motors.) - Knowledge Level: K3 (While this outcome specifies 3-phase, the concepts of braking are fundamental to AC motors and extend conceptually to single-phase motors for understanding motor control principles.)

Braking in electric motors refers to the process of reducing the speed of the motor to zero or to a very low speed. In induction motors, braking methods are used for controlled deceleration, rapid stopping, or holding the motor at rest.

### 2.1 Plugging (Reverse Current Braking)

Plugging is a method of rapid braking where the connections to the stator winding are reversed, effectively reversing the direction of the rotating magnetic field.

**Concept:**

*   When the motor is rotating in a particular direction, the stator winding connections are suddenly reversed.
*   This causes the rotating magnetic field to rotate in the opposite direction.
*   The motor then experiences a braking torque that opposes its original direction of motion.
*   The magnitude of the braking torque depends on the speed and the slip. When plugged, the slip becomes greater than 1 (e.g., if the motor is running at speed $N_r$ in the forward direction, and the field is reversed, the new synchronous speed is $-N_s$. The slip becomes $s' = \frac{-N_s - N_r}{-N_s} = 1 + \frac{N_r}{N_s} = 2-s$).
*   As the motor speed reduces, the torque also reduces.
*   To prevent the motor from accelerating in the reverse direction, the power supply must be disconnected when the motor reaches zero speed. This is typically done using a DC relay or timer.

**Characteristics:**

*   **Rapid Braking:** Provides very quick deceleration.
*   **High Current Draw:** Draws very high currents during the braking period, leading to increased heating of the windings.
*   **Mechanical Stress:** Can impose significant mechanical stress on the motor and driven load.

**Reference:**

*   **P.S. Bhimbra, "Electrical Machinery"**: Chapter on Braking of AC Motors.
*   **Kothari & Nagrath, "Electric Machines"**: Discusses the principle of plugging.

### 2.2 Dynamic Braking (Rheostatic Braking)

Dynamic braking involves disconnecting the motor from the AC supply and connecting it to a DC source or a resistor.

**Concept:**

*   The stator winding is disconnected from the AC supply.
*   The rotor is still rotating, inducing voltages and currents in the windings.
*   The stator windings are connected to a braking resistor or a DC supply.
    *   **Resistor Braking:** The stator windings are connected across an external resistor. The kinetic energy of the rotor is dissipated as heat in the resistor, causing deceleration. The connected stator winding acts as a generator.
    *   **DC Braking:** The stator windings are connected to a DC source. This creates a stationary magnetic field (in the case of DC excitation of the stator winding). The rotating rotor cuts this DC field, inducing currents that produce a torque opposing the motion.
*   The motor effectively acts as a generator, with the kinetic energy being converted into electrical energy, which is then dissipated in the resistor or fed back to the DC source.

**Characteristics:**

*   **Controlled Braking:** Provides smoother deceleration compared to plugging.
*   **Moderate Current:** The braking current is limited by the resistance or the DC source, reducing the risk of excessive current.
*   **Lower Heating:** Less heating in the stator windings compared to plugging.
*   **Less Rapid than Plugging:** Braking is not as rapid as plugging.

**Reference:**

*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Detailed explanation of dynamic braking.
*   **M.G. Say, "Performance & Design of AC Machines"**: Covers the principles of dynamic braking.

### 2.3 Regenerative Braking

Regenerative braking occurs when the motor operates as a generator and feeds the generated power back into the AC supply line.

**Concept:**

*   This happens when the rotor speed exceeds the synchronous speed of the rotating magnetic field.
*   For the motor to run faster than synchronous speed, the rotor conductors must cut the magnetic flux in such a direction that they generate a torque which opposes the mechanical driving torque, thereby acting as a brake.
*   In this condition, the motor's torque opposes its speed.
*   The excess energy (kinetic energy of the rotor plus any mechanical energy delivered by the load) is converted into electrical energy and fed back into the AC supply.
*   This typically occurs when a load on the motor tends to drive it at a speed higher than its normal operating speed (e.g., a hoist lowering a load).

**Characteristics:**

*   **Energy Efficient:** Recovers energy, making it an efficient braking method.
*   **No External Resistance:** Does not require external resistors.
*   **Limited Application:** Primarily applicable when the load is capable of driving the motor above synchronous speed.
*   **Requires Over-synchronous Speed:** The motor must operate above synchronous speed for regenerative braking to occur.

**Reference:**

*   **K Murugesh Kumar, "Induction & Synchronous Machines"**: Explains the concept of regenerative braking.
*   **P.S. Bhimbra, "Electrical Machinery"**: Provides insights into how regenerative braking works.

---

## Practice Questions & Exercises

**Instructions:** Answer the following questions based on the concepts learned in this module.

---

**Question 1: Single-Phase Induction Motors & DRFT**

A single-phase induction motor's pulsating stator flux can be analyzed using the Double Revolving Field Theory.

**(a)** What are the two components of the pulsating magnetic field according to DRFT?
**(b)** How does each of these components contribute to the total torque of the motor?
**(c)** What is the condition for a single-phase induction motor to be self-starting?

**Answer 1:**

**(a)** According to DRFT, the pulsating magnetic field of a single-phase induction motor can be resolved into two components of equal magnitude and opposite direction, each rotating at synchronous speed:
    *   **Forward Revolving Field:** Rotates in the same direction as the rotor.
    *   **Backward Revolving Field:** Rotates in the opposite direction to the rotor.

**(b)** The forward revolving field produces a forward torque that aids the rotation. The backward revolving field produces a backward torque that opposes the rotation. The total torque is the algebraic sum of the forward and backward torques.

**(c)** A single-phase induction motor is not self-starting because at standstill, the forward and backward torques are equal and opposite, resulting in zero net starting torque. To be self-starting, an auxiliary winding or some mechanism is required to create a phase difference between the flux produced by the main and auxiliary windings, thereby producing a rotating magnetic field at starting.

---

**Question 2: Equivalent Circuit**

Draw the equivalent circuit of a single-phase induction motor based on the Double Revolving Field Theory. Label all the components and indicate the slips for the forward and backward circuits.

**Answer 2:**

**(Diagram would be here if this were a visual medium. Description below.)**

The equivalent circuit consists of two parallel branches, each representing an induction motor.

*   **Branch 1 (Forward):**
    *   $R_1$ (Stator resistance) + $jX_1$ (Stator leakage reactance) in series.
    *   Parallel combination of $R_m$ (Core loss resistance) and $jX_m$ (Magnetizing reactance).
    *   Then, in series, the rotor impedance referred to stator for forward field: $\frac{R'_2}{s} + jX'_2$.

*   **Branch 2 (Backward):**
    *   $R_1$ (Stator resistance) + $jX_1$ (Stator leakage reactance) in series.
    *   Parallel combination of $R_m$ (Core loss resistance) and $jX_m$ (Magnetizing reactance).
    *   Then, in series, the rotor impedance referred to stator for backward field: $\frac{R'_2}{2-s} + jX'_2$.

---

**Question 3: Torque-Slip Characteristics**

Describe the general shape of the torque-slip characteristic of a single-phase induction motor (without starting mechanism) and explain why it is not self-starting.

**Answer 3:**

The torque-slip characteristic of a single-phase induction motor (without a starting mechanism) shows a net torque that is zero or slightly negative at starting (s=1). As the speed increases (slip decreases), the forward torque increases, while the backward torque also increases but generally remains smaller. The net torque is the difference between the forward and backward torques. The motor starts to accelerate only when the net torque becomes positive. It cannot start on its own because the forward and backward torques are equal and opposite at standstill, resulting in zero net starting torque.

---

**Question 4: Braking Methods**

Briefly explain the concept of each of the following braking methods for induction motors:

**(a)** Plugging
**(b)** Dynamic Braking
**(c)** Regenerative Braking

**Answer 4:**

**(a) Plugging:** The stator winding connections are reversed, causing the rotating magnetic field to oppose the direction of motor rotation. This creates a large braking torque, bringing the motor to a rapid stop. Power must be disconnected at zero speed to prevent reverse rotation.

**(b) Dynamic Braking:** The motor is disconnected from the AC supply and connected to a resistor (rheostatic braking) or a DC source. The motor acts as a generator, converting kinetic energy into electrical energy, which is dissipated in the resistor or fed to the DC source, causing deceleration.

**(c) Regenerative Braking:** Occurs when the rotor speed exceeds the synchronous speed. The motor operates as a generator, feeding electrical energy back into the AC supply line. This braking is inherent when the load drives the motor faster than its synchronous speed.

---

**Question 5: Application of Braking**

For each braking method, mention one specific application where it is commonly used:

**(a)** Plugging
**(b)** Dynamic Braking
**(c)** Regenerative Braking

**Answer 5:**

**(a) Plugging:** Elevators, machine tools where rapid stopping is required.
**(b) Dynamic Braking:** Electric vehicles (as a secondary braking system), cranes, conveyors for controlled stopping.
**(c) Regenerative Braking:** Hoists, escalators, electric trains where loads are lowered or the vehicle decelerates on a downward slope.

---

## Important Points to Remember

*   Single-phase induction motors require an auxiliary starting winding to create a rotating magnetic field for starting.
*   The Double Revolving Field Theory simplifies the analysis of single-phase induction motors by considering two oppositely rotating fields.
*   The total torque in a single-phase induction motor is the sum of the torques produced by the forward and backward revolving fields.
*   The equivalent circuit of a single-phase induction motor can be represented by two parallel induction motor equivalent circuits with slips $s$ and $(2-s)$.
*   Plugging provides rapid braking but draws high currents.
*   Dynamic braking offers controlled braking with moderate currents by dissipating energy in a resistor or using a DC source.
*   Regenerative braking is energy-efficient, returning power to the supply, and occurs when the motor speed exceeds synchronous speed.

---
This concludes the study notes for Module 4, covering single-phase induction motors and the concepts of braking. Remember to consult the referenced textbooks for more in-depth understanding and derivations.
