---
title: "Synchronous motor – rotating magnetic field - principle of operation – starting methods"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 2: Power flow equations in cylindrical"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df2"
status: "completed"
scrapedAt: "2026-05-23T16:19:11.862Z"
---
# SYNCHRONOUS & INDUCTION MACHINES

## Module 2: Power Flow Equations in Cylindrical Coordinates

### Topic: Synchronous Motor – Rotating Magnetic Field – Principle of Operation – Starting Methods

---

**Module Goal:** To understand the fundamental principles behind synchronous machines, particularly synchronous motors, including the creation of a rotating magnetic field, their working principle, and the various methods employed to start them.

**Course Outcomes Addressed:**
*   **CO2:** Analyze the performance of synchronous motors under various load conditions (Knowledge Level: K3) - *This topic lays the foundation for understanding the performance by explaining the core working principle.*
*   **CO4:** Analyze the various starting, braking and speed control methods of 3- phase induction motors. (Knowledge Level: K3) - *While CO4 focuses on induction motors, understanding the starting methods of synchronous motors provides a comparative basis and highlights different design considerations.*

**Learning Outcomes for this Topic:**
*   Explain the concept of a rotating magnetic field (RMF) in AC machines.
*   Describe the construction of a synchronous motor.
*   Elucidate the principle of operation of a synchronous motor.
*   Analyze the behavior of a synchronous motor under different excitation conditions.
*   Discuss various methods for starting synchronous motors.

---

### 1. Rotating Magnetic Field (RMF)

The concept of a rotating magnetic field is fundamental to the operation of both synchronous and induction motors. It's the magnetic field that rotates at synchronous speed within the stator of the machine.

#### 1.1. Production of RMF by Two-Phase Supply

*   **Concept:** A rotating magnetic field can be produced by energizing two stator windings placed 90 electrical degrees apart with two-phase alternating currents that are also 90 degrees out of phase.
*   **Stator Windings:**
    *   Two identical windings, physically displaced by 90 degrees in space.
    *   Let these windings be $W_1$ and $W_2$.
*   **Two-Phase Supply:**
    *   Let the currents be $i_1 = I_m \sin(\omega t)$ and $i_2 = I_m \sin(\omega t - 90^\circ) = I_m \cos(\omega t)$.
*   **Magnetic Flux:**
    *   The magnetic flux produced by each winding is proportional to the current flowing through it.
    *   Flux due to $W_1$: $\phi_1 = \Phi_m \sin(\omega t)$
    *   Flux due to $W_2$: $\phi_2 = \Phi_m \sin(\omega t - 90^\circ) = \Phi_m \cos(\omega t)$
*   **Resultant Flux:**
    *   The resultant magnetic field is the vector sum of the fluxes produced by the two windings.
    *   At any instant $t$, the resultant flux $\vec{\phi}_{res}$ is the phasor sum of $\phi_1$ (along the axis of $W_1$) and $\phi_2$ (along the axis of $W_2$, 90 degrees from $W_1$).
    *   If we assume $W_1$ is along the x-axis and $W_2$ is along the y-axis:
        *   $\vec{\phi}_{res}(t) = \phi_1 \hat{i} + \phi_2 \hat{j}$
        *   $\vec{\phi}_{res}(t) = (\Phi_m \sin(\omega t)) \hat{i} + (\Phi_m \cos(\omega t)) \hat{j}$
    *   This equation represents a rotating vector whose magnitude is constant ($\Phi_m$) and whose direction rotates at an angular velocity $\omega$.

#### 1.2. Production of RMF by Three-Phase Supply

*   **Concept:** This is the most common method used in synchronous and induction motors. It involves three stator windings, physically displaced by 120 electrical degrees, and supplied by a three-phase balanced voltage/current system which is also 120 degrees out of phase.
*   **Stator Windings:**
    *   Three identical windings, physically displaced by 120 degrees in space.
    *   Let these windings be $W_a$, $W_b$, and $W_c$, with their axes at $0^\circ$, $120^\circ$, and $240^\circ$ respectively.
*   **Three-Phase Supply:**
    *   Let the currents be:
        *   $i_a = I_m \sin(\omega t)$
        *   $i_b = I_m \sin(\omega t - 120^\circ)$
        *   $i_c = I_m \sin(\omega t - 240^\circ)$
*   **Magnetic Flux:**
    *   Flux due to $W_a$: $\phi_a = \Phi_m \sin(\omega t)$
    *   Flux due to $W_b$: $\phi_b = \Phi_m \sin(\omega t - 120^\circ)$
    *   Flux due to $W_c$: $\phi_c = \Phi_m \sin(\omega t - 240^\circ)$
*   **Resultant Flux:**
    *   At any instant $t$, the resultant magnetic field is the vector sum of the fluxes produced by the three windings, considering their spatial displacement.
    *   Flux along the axis of $W_a$ is $\phi_a$.
    *   Flux along the axis of $W_b$ is $\phi_b$ at $120^\circ$ spatial displacement.
    *   Flux along the axis of $W_c$ is $\phi_c$ at $240^\circ$ spatial displacement.
    *   The resultant magnetic field $B_{res}$ can be represented as:
        $B_{res} = B_a \cos(0^\circ) + B_b \cos(120^\circ) + B_c \cos(240^\circ)$ (assuming flux is proportional to field strength and direction aligns with the axis)
    *   Using phasor representation for flux:
        $\vec{\phi}_a = \Phi_m \sin(\omega t) \angle 0^\circ$
        $\vec{\phi}_b = \Phi_m \sin(\omega t - 120^\circ) \angle 120^\circ$
        $\vec{\phi}_c = \Phi_m \sin(\omega t - 240^\circ) \angle 240^\circ$
    *   This vector sum results in a resultant magnetic field of constant magnitude $\frac{3}{2}\Phi_m$ rotating at angular velocity $\omega$.
*   **Synchronous Speed ($N_s$):** The speed at which the RMF rotates is called the synchronous speed.
    *   $N_s = \frac{120 f}{P}$ rpm
    *   Where $f$ is the supply frequency (Hz) and $P$ is the number of poles.
    *   Angular synchronous speed: $\omega_s = 2 \pi f$ rad/sec.

**Important Point:** The RMF is crucial because it establishes the fundamental interaction mechanism for torque production in AC motors. It acts as a rotating magnet that the rotor attempts to follow.

---

### 2. Construction of a Synchronous Motor

A synchronous motor is essentially a synchronous generator operated in reverse. It consists of two main parts:

#### 2.1. Stator

*   **Construction:** Similar to an induction motor stator.
    *   It is a laminated steel cylinder with slots on its inner periphery.
    *   The slots house the stator windings, which are typically three-phase distributed windings.
    *   These windings are connected to a three-phase AC supply, and when energized, they produce the rotating magnetic field (RMF).
*   **Windings:** Usually made of insulated copper conductors.

#### 2.2. Rotor

The rotor of a synchronous motor is the rotating part and carries the DC excitation winding. There are two main types of rotors:

##### 2.2.1. Salient Pole Rotor

*   **Construction:**
    *   The poles are projected or salient (stick out) from the rotor surface.
    *   It is constructed from a solid piece of steel or laminations.
    *   The poles are bolted or dovetailed to the rotor rim.
    *   Field windings are wound around the pole cores and are placed in slots on the poles.
*   **Excitation:** DC current is supplied to the field windings through slip rings and brushes. This creates a fixed magnetic field on the rotor.
*   **Applications:** Used for low and medium speed machines (e.g., hydro-generators, some older synchronous motors) where the number of poles is large. The salient poles reduce windage losses at lower speeds.

##### 2.2.2. Cylindrical Rotor (or Non-Salient Pole Rotor)**

*   **Construction:**
    *   The rotor is a smooth cylinder, made of solid steel forgings or laminations.
    *   Field windings are embedded in slots machined into the rotor surface.
    *   There are no projected poles. The magnetic poles are created by the current flowing in the field windings.
*   **Excitation:** DC current is supplied to the field windings through slip rings and brushes.
*   **Applications:** Used for high-speed machines (e.g., turbo-generators, large synchronous motors) where the peripheral speed is high. The smooth cylindrical shape reduces windage and mechanical stresses at high speeds.

#### 2.3. Excitation System

*   **DC Supply:** A DC source (e.g., a DC generator called an exciter, or static excitation systems) is used to energize the rotor field winding.
*   **Slip Rings and Brushes:** A common method to transfer DC power to the rotating field winding.
*   **Brushless Excitation:** Modern synchronous machines often use brushless exciters, where a small AC exciter generator mounted on the same shaft produces AC, which is then rectified to DC and fed to the main field winding via a rotating rectifier. This eliminates the need for brushes and slip rings, reducing maintenance.

**Important Point:** The synchronous motor has no inherent starting torque because its rotor is not directly influenced by the stator's rotating magnetic field until it is brought close to synchronous speed.

---

### 3. Principle of Operation of a Synchronous Motor

The operation of a synchronous motor relies on the interaction between the stator's rotating magnetic field (RMF) and the magnetic field produced by the DC-excited rotor.

#### 3.1. Stator Field and Rotor Field Interaction

1.  **RMF Production:** When the stator windings are supplied with a three-phase AC voltage, a rotating magnetic field (RMF) is produced in the air gap, rotating at synchronous speed ($N_s$).
2.  **Rotor Field Creation:** DC current is supplied to the rotor winding. This creates a stationary magnetic field on the rotor (relative to the rotor itself).
3.  **Locking Mechanism:** When the rotor is brought to near synchronous speed (by some starting method), the magnetic poles of the rotor are attracted by the rotating magnetic poles of the stator's RMF. If the rotor speed is close enough to synchronous speed, these magnetic poles "lock" together.
4.  **Synchronous Operation:** Once locked, the rotor rotates at exactly the same speed as the stator's RMF – the synchronous speed ($N_s$). The rotor essentially "chases" the rotating magnetic field.

#### 3.2. Torque Production

*   The torque produced in a synchronous motor is due to the magnetic attraction between the stator poles and the rotor poles.
*   The rotor's magnetic field is established by the DC excitation.
*   The stator's RMF exerts a torque on the rotor, trying to align its magnetic poles with the stator poles.

#### 3.3. Starting Requirement

*   **No Self-Starting Torque:** A synchronous motor cannot start from rest on its own. This is because at zero speed, the stator RMF is rotating rapidly, while the rotor's magnetic field is stationary. There is no attraction or alignment between them. The rotor will just experience rapidly alternating poles, leading to no net starting torque and a humming sound.
*   **Need for Auxiliary Starting:** To start a synchronous motor, the rotor must first be brought up to a speed close to synchronous speed using an auxiliary starting mechanism. Once close to synchronous speed, the DC excitation is applied to the rotor, and the rotor poles "pull into synchronism" with the stator's RMF.

#### 3.4. Effect of Load

*   **Load Angle ($\delta$):** The angle between the stator's RMF and the rotor's magnetic field is called the load angle or torque angle ($\delta$).
*   **Torque Variation:** The torque developed by the motor is approximately proportional to $\sin(\delta)$.
    *   $T \propto \Phi_s \Phi_r \sin(\delta)$, where $\Phi_s$ is the stator RMF flux and $\Phi_r$ is the rotor flux.
*   **Power Input:** $P_{in} = 3 V_L I_L \cos(\phi)$
*   **Power Developed:** $P_{dev} = P_{in} - \text{Stator Losses}$
*   **Torque Developed:** $T_{dev} = \frac{P_{dev}}{\omega_s}$
*   **Pull-out Torque:** As the load increases, the load angle $\delta$ increases. The maximum torque the motor can develop before losing synchronism is called the pull-out torque, which occurs at $\delta = 90^\circ$. Beyond this point, if the load is further increased, the rotor will slip out of synchronism and stop.

#### 3.5. V-Curves and Power Factor Control

*   **Excitation Control:** The DC excitation current to the rotor field winding can be varied. This affects the motor's power factor.
*   **V-Curves:** Plots of armature current ($I_a$) versus field current ($I_f$) for a constant load are known as V-curves.
    *   **Under-excitation ($I_f$ low):** Motor operates at a lagging power factor.
    *   **Normal excitation ($I_f$ normal):** Motor operates at unity power factor (minimum armature current).
    *   **Over-excitation ($I_f$ high):** Motor operates at a leading power factor.
*   **Advantages:** Synchronous motors can be used for power factor correction of the system by over-exciting them.

**Reference from Textbooks:**
*   **P.S. Bhimbra, Chapter 11 (Synchronous Motors):** Discusses the principle of operation, production of RMF, and the concept of torque angle.
*   **Kothari & Nagrath, Chapter 11 (Synchronous Machines):** Explains the synchronous motor principle, V-curves, and their application in power factor correction.
*   **M.G. Say, Chapter 8 (Synchronous Motors):** Details the operational characteristics, including the effect of excitation on power factor.

---

### 4. Starting Methods of Synchronous Motors

Since synchronous motors are not self-starting, various methods are employed to bring them up to near synchronous speed before applying DC excitation to the rotor.

#### 4.1. Using the Stator Winding as a Squirrel Cage (Damper Windings/Amortisseur Windings)

*   **Concept:** This is the most common and practical starting method. The rotor is fitted with damper windings, similar to the rotor bars of an induction motor. These windings are short-circuited through end rings, just like in a squirrel cage rotor.
*   **Mechanism:**
    1.  **Starting:** When the three-phase AC supply is connected to the stator, the stator produces an RMF. At this point, the rotor is stationary, and the DC excitation is *not* applied.
    2.  **Induction Motor Action:** The relative speed between the stator RMF and the stationary rotor (with damper windings) induces voltages and currents in the damper windings. These currents, interacting with the stator RMF, produce a starting torque, causing the rotor to accelerate like an induction motor.
    3.  **Acceleration to Near Synchronous Speed:** The motor accelerates as an induction motor, using the damper windings for torque production.
    4.  **Pulling into Synchronism:** Once the rotor speed reaches close to synchronous speed (typically 90-95% of $N_s$), the DC excitation is applied to the rotor field winding. The magnetic field of the excited rotor poles is then attracted by the stator's RMF, and the rotor pulls into synchronism.
    5.  **Operation as Synchronous Motor:** Once synchronized, the damper windings carry very little current (as the slip is near zero), and the motor operates as a synchronous motor.
*   **Advantages:** Simple, effective, and uses the stator winding itself for starting. No external starting equipment needed other than the DC exciter.
*   **Disadvantages:** The starting torque and current depend on the design of the damper windings. There can be a tendency for the motor to oscillate or hunt around synchronous speed during the transition from induction motor operation to synchronous motor operation.

**Reference from Textbooks:**
*   **K. Murugesh Kumar, Chapter 7 (Starting of Synchronous Motors):** Provides a detailed explanation of the amortisseur winding starting method.
*   **J.B. Gupta, Chapter 17 (Synchronous Motor):** Discusses the construction and use of damper windings for starting.

#### 4.2. Using a Separate Starting Motor

*   **Concept:** An external auxiliary motor (often a three-phase induction motor or a DC motor) is used to bring the synchronous motor's rotor up to synchronous speed.
*   **Mechanism:**
    1.  **Coupling:** The auxiliary motor is coupled to the shaft of the synchronous motor.
    2.  **Starting Auxiliary:** The auxiliary motor is started and brings the synchronous motor rotor up to synchronous speed.
    3.  **DC Excitation:** Once synchronous speed is reached, the DC excitation is applied to the synchronous motor's rotor.
    4.  **Synchronization and Disconnection:** The synchronous motor pulls into synchronism. The auxiliary motor is then de-coupled and switched off.
*   **Advantages:** Can provide a smooth and controlled acceleration.
*   **Disadvantages:** Requires an additional motor and starting equipment, increasing cost and complexity. Not very common for larger machines.

#### 4.3. Using a Pony Motor

*   **Concept:** Similar to using a separate starting motor, but the auxiliary motor (pony motor) is of a smaller size and is directly coupled to the main synchronous motor.
*   **Mechanism:**
    1.  The pony motor (usually an induction motor) starts the synchronous motor.
    2.  Once the synchronous motor is brought close to synchronous speed, it pulls into synchronism.
    3.  The pony motor is then switched off.
*   **Advantages:** Simple and reliable for smaller synchronous motors.
*   **Disadvantages:** The pony motor is a continuous power loss when the main motor is running if not properly disconnected. Still adds complexity.

#### 4.4. Reduced Voltage Starting (for Induction Motor starting method)

*   **Concept:** While not a primary starting method *for* the synchronous motor's inherent torque, if damper windings are used, the starting sequence is like an induction motor. Therefore, reduced voltage starting methods (like star-delta starters or auto-transformers) can be applied to limit the high starting current drawn by the stator during the induction motor phase of starting.
*   **Mechanism:**
    *   **Reduced Voltage:** The stator voltage is initially reduced (e.g., by using an auto-transformer or star-delta connection). This limits the initial starting current.
    *   **Acceleration:** The motor accelerates as an induction motor with damper windings.
    *   **Full Voltage:** Once the motor speed increases, the full stator voltage is applied, and DC excitation is provided to pull it into synchronism.
*   **Advantages:** Reduces the high inrush current during the induction motor starting phase, which can be beneficial for the power supply system.
*   **Disadvantages:** Reduced voltage results in reduced starting torque.

**Reference from Textbooks:**
*   **P.S. Bhimbra, Chapter 11:** Discusses the starting of synchronous motors with emphasis on damper windings.
*   **Kothari & Nagrath, Chapter 11:** Explains starting methods and the role of damper windings.

---

### 5. Summary of Key Concepts

*   **Rotating Magnetic Field (RMF):** Produced by three-phase currents in spatially displaced stator windings, rotating at synchronous speed ($N_s = 120f/P$).
*   **Synchronous Motor Construction:** Stator (windings for RMF) and Rotor (DC-excited field winding, either salient pole or cylindrical).
*   **Princ of Operation:** Rotor magnetic field locks with the stator RMF, causing the rotor to rotate at synchronous speed. Requires DC excitation of the rotor.
*   **Load Angle ($\delta$):** Angle between stator RMF and rotor field. Torque $\propto \sin(\delta)$.
*   **Pull-out Torque:** Maximum torque before loss of synchronism, occurs at $\delta = 90^\circ$.
*   **V-Curves:** Show relation between armature current and field current, illustrating power factor control (leading, unity, lagging) via excitation.
*   **Starting:** Synchronous motors are not self-starting. They require an auxiliary method to reach near synchronous speed.
*   **Damper Windings:** Most common starting method; rotor windings act like a squirrel cage during startup, allowing acceleration as an induction motor. DC excitation is applied to pull into synchronism.
*   **Other Starting Methods:** Separate starting motor, pony motor. Reduced voltage starting can be used in conjunction with damper windings.

---

### 6. Practice Questions and Answers

**Question 1:** What is the synchronous speed of a 4-pole synchronous motor supplied from a 50 Hz supply?
**Answer:**
$N_s = \frac{120f}{P} = \frac{120 \times 50}{4} = 3000$ rpm.

**Question 2:** Why is a synchronous motor not self-starting?
**Answer:** At standstill, the stator produces a rotating magnetic field, but the rotor's magnetic field (from DC excitation) is stationary. There's no mechanism for the rotor to lock onto the fast-moving stator field from rest, resulting in zero net starting torque.

**Question 3:** Describe the role of damper windings in a synchronous motor.
**Answer:** Damper (or amortisseur) windings, embedded in the rotor pole faces, are short-circuited. During starting, they allow the synchronous motor to behave like an induction motor, producing starting torque and accelerating the rotor to near synchronous speed. They also help to dampen oscillations (hunting) once the motor is running synchronously.

**Question 4:** Explain the concept of a "V-curve" for a synchronous motor and its significance.
**Answer:** A V-curve plots the armature current against the field current for a synchronous motor operating at a constant load. It shows that as field excitation is increased from a very low value, the armature current decreases, reaches a minimum at unity power factor (normal excitation), and then increases again as the power factor becomes leading (over-excitation). This demonstrates the synchronous motor's ability to operate at leading, lagging, or unity power factor by adjusting its excitation, making it useful for power factor correction.

**Question 5:** A 6-pole synchronous motor is operating at 1000 rpm. What is the frequency of the AC supply?
**Answer:**
We know $N_s = \frac{120f}{P}$.
Here, $N_s = 1000$ rpm and $P = 6$ poles.
$1000 = \frac{120f}{6}$
$1000 = 20f$
$f = \frac{1000}{20} = 50$ Hz.

---

### 7. Important Points to Remember

*   The RMF speed is determined by supply frequency and number of poles, *not* by the rotor speed or load.
*   Synchronous motors always run at synchronous speed under steady-state conditions, provided they are not overloaded.
*   DC excitation of the rotor is essential for synchronous operation and torque production.
*   Damper windings are vital for starting and for damping oscillations.
*   Power factor control is a major advantage of synchronous motors.
*   Overloading leads to loss of synchronism (pull-out).

---
This comprehensive set of notes covers the fundamental aspects of the synchronous motor, including the crucial concept of the rotating magnetic field, its construction, the principle of operation, and the various methods to start this unique type of electric machine. The inclusion of textbook references and practice questions aims to facilitate a deeper understanding and knowledge retention.
