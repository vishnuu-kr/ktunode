---
title: "Single Phase Special Electrical Machines- AC series Motor, Repulsion Motor, Hysteresis Motor, Universal Motor- Construction - principle of operation - applications."
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 4: Linear Electric Machines: Linear motors – different types – linear reluctance motor "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368ab"
status: "completed"
scrapedAt: "2026-05-23T16:39:46.708Z"
---
# Special Electrical Machines: Module 4 - Single-Phase Special Electrical Machines

This module delves into the fascinating world of single-phase special electrical machines, exploring their construction, operating principles, and diverse applications. We will focus on the AC series motor, repulsion motor, hysteresis motor, and universal motor.

**Course Outcomes Addressed:**

*   **CO5: Explain the constructional details and working of single-phase special electrical machines. (Knowledge Level: K2)**

---

## 1. Introduction to Single-Phase Special Electrical Machines

Single-phase AC motors are ubiquitous in household appliances and many industrial applications due to the widespread availability of single-phase power. While standard single-phase induction motors are common, special single-phase machines offer unique advantages in terms of starting torque, speed control, and efficiency for specific applications. This module focuses on four such important machines.

**Key Concept:** Single-phase AC power supply, while readily available, inherently poses a challenge for starting rotating magnetic fields in simple AC motor designs. Special starting mechanisms or inherent operating principles are often employed to overcome this.

---

## 2. AC Series Motor

The AC series motor is essentially a DC series motor adapted to operate on AC supply. It's a versatile motor known for its high starting torque and ability to operate on both AC and DC.

### 2.1. Construction

*   **Stator:** Similar to a DC series motor's field winding. It consists of laminated poles to reduce eddy current losses. The field winding is connected in series with the armature winding.
*   **Armature:** Contains a drum-type armature with a commutator and brushes, identical to a DC motor. The armature winding is connected to the commutator.
*   **Commutator and Brushes:** Essential for DC motor operation, they are also present in AC series motors to ensure proper current reversal in the armature winding.
*   **Compensation Winding (Optional but Recommended):** To improve performance and reduce the effects of armature reaction and inductive voltage drop, a compensating winding can be embedded in the stator slots and connected in series with the armature and field windings. This winding is arranged to produce a magnetomotive force (MMF) that opposes the armature MMF.

**Key Components and their Function:**

*   **Laminated Core:** Reduces eddy currents caused by the alternating flux.
*   **Series Connection:** Ensures armature and field currents are in phase, contributing to torque production.
*   **Commutator:** Reverses the current direction in armature coils as they move past the neutral axis.

### 2.2. Principle of Operation

1.  **Current Flow:** When connected to a single-phase AC supply, current flows through both the field winding and the armature winding in series.
2.  **Magnetic Field Production:** The field winding produces an alternating magnetic field.
3.  **Torque Production:** The current flowing in the armature conductors, situated within this magnetic field, experiences a force given by Fleming's Left-Hand Rule. This force produces a torque that causes the armature to rotate.
4.  **Commutation:** The commutator ensures that the current in the armature coils is reversed at the appropriate time, allowing for continuous rotation in the same direction, irrespective of the AC supply's polarity.
5.  **Power Factor:** The AC series motor suffers from a poor power factor at light loads due to the significant inductance of the field winding. The power factor improves with increasing load.
6.  **Speed-Torque Characteristic:** Exhibits a characteristic similar to a DC series motor, with high starting torque and speed varying inversely with load.

**Mathematical Representation (Simplified):**

Torque (T) $\propto \Phi \times I_a$
Where $\Phi$ is the flux per pole and $I_a$ is the armature current.
Since both $\Phi$ and $I_a$ are proportional to the supply voltage (approximately), the torque is roughly proportional to the square of the voltage.

### 2.3. Applications

*   **Traction:** Used in electric locomotives and tramways where high starting torque is essential.
*   **Drills, Saws, and Grinders:** Portable power tools that require high torque and variable speed.
*   **Fans and Blowers:** Especially those requiring high starting torque.
*   **Domestic Appliances:** Mixers, vacuum cleaners, sewing machines.

**Important Point to Remember:** The AC series motor is the only common type of single-phase AC motor that has the series characteristics of a DC series motor (high starting torque, speed inversely proportional to load).

---

## 3. Repulsion Motor

The repulsion motor is another type of AC motor that utilizes the principle of electromagnetic repulsion between the stator field and the armature currents. It's known for its high starting torque and good speed regulation.

### 3.1. Construction

*   **Stator:** Consists of a laminated stator core with salient poles. Each pole is wound with a field winding, which is connected to the single-phase AC supply.
*   **Armature:** Similar to a DC motor armature, it has a drum-type winding with a commutator. However, the brushes are *not* connected to the supply. Instead, the brushes are connected to each other, either directly or through a starting winding.
*   **Commutator:** Similar to a DC motor commutator.
*   **Brushes:** Crucially, the brushes are **short-circuited** externally. They are also **shiftable** to change the position of the brushes relative to the stator pole axis, which affects the starting torque and running characteristics.
*   **Starter Resistance (for some types):** In some designs, a resistance is incorporated in series with the brush circuit for starting.

**Key Components and their Function:**

*   **Stator Winding:** Creates the rotating magnetic field.
*   **Armature Winding:** Is dynamically motional, and currents are induced in it by the stator field.
*   **Short-circuited Brushes:** Induces currents in the armature winding and allows them to flow in a specific direction to create a strong repulsion torque.
*   **Brush Shifting:** Adjusts the phase difference between the stator flux and the induced armature current, thus controlling starting torque and direction.

### 3.2. Principle of Operation

1.  **Stator Field:** The stator winding, connected to the AC supply, produces an alternating magnetic field.
2.  **Induced Armature Currents:** This alternating stator flux cuts the armature conductors. According to Faraday's law of electromagnetic induction, an electromotive force (EMF) is induced in the armature winding.
3.  **Short-Circuit Current Flow:** Since the armature brushes are short-circuited, a large current flows through the armature winding.
4.  **Repulsion Torque:** The interaction between the stator magnetic field and the armature current produces a torque. The direction of this torque depends on the relative position of the brushes to the stator poles. By adjusting the brush position, the armature current is caused to be in a position of repulsion relative to the stator field, causing the motor to rotate.
5.  **Starting Torque:** Repulsion motors exhibit very high starting torque.
6.  **Speed Regulation:** The speed generally decreases with an increase in load, but it's better than that of a DC series motor.
7.  **Starting Methods:**
    *   **Variable Brush Position:** The most common method. Shifting brushes from the interpolar axis causes repulsion torque. For starting, brushes are set at an angle that provides maximum starting torque. As the motor speeds up, brushes are shifted towards the interpolar axis for efficient running.
    *   **Starter Resistance:** In some designs, resistance is added to the armature circuit during starting to limit starting current and improve starting torque. This resistance is bypassed once the motor attains speed.

### 3.3. Types of Repulsion Motors

*   **Plain Repulsion Motor:** Brushes are shifted to obtain starting torque.
*   **Repulsion-Start Induction-Run Motor:** Initially operates as a repulsion motor. At a certain speed, a centrifugal switch or a relay shorts the commutator segments, converting it into a squirrel-cage induction motor for running. This offers the high starting torque of a repulsion motor and the simple, robust operation of an induction motor.
*   **Repulsion-Induction Motor:** Has a special winding arrangement in the armature with both commutator and squirrel-cage bars. It operates as a repulsion motor at low speeds and as an induction motor at higher speeds.

### 3.4. Applications

*   **Elevators and Lifts:** Require high starting torque.
*   **Compressors:** Where starting under load is common.
*   **Industrial Equipment:** Cranes, hoists, pumps.
*   **Refrigeration:** Particularly in older systems.

**Important Point to Remember:** The key distinguishing feature of a repulsion motor is the use of short-circuited brushes on the armature, allowing for induced currents and torque generation through repulsion. Brush shifting is crucial for its operation.

---

## 4. Hysteresis Motor

The hysteresis motor is a synchronous motor that utilizes the hysteresis loss in a permanently magnetized rotor material. It's known for its silent operation and constant speed.

### 4.1. Construction

*   **Stator:** Similar to that of a single-phase induction motor, containing a main winding and an auxiliary winding (for starting). The stator produces a rotating magnetic field.
*   **Rotor:** The rotor is a hollow cylinder made of a hard magnetic material with a high retentivity and coercivity (e.g., Alnico). It is not wound but is a solid, cylindrical mass of this magnetic material. It is magnetized during operation but has no windings or squirrel cage.

**Key Components and their Function:**

*   **Stator Winding:** Creates a rotating magnetic field (or a pulsating field that is made to rotate by auxiliary winding).
*   **Hysteresis Rotor:** The rotor material experiences magnetic hysteresis. When the stator field rotates, the magnetic poles in the rotor lag behind the stator field by an angle dependent on the hysteresis loop. This lag creates a torque.

### 4.2. Principle of Operation

1.  **Stator Field Production:** The stator winding, with the help of the auxiliary winding (often using a capacitor for phase shifting), produces a rotating magnetic field.
2.  **Rotor Magnetization:** As the rotating magnetic field sweeps across the rotor, it magnetizes the rotor material. Due to the hysteresis property of the rotor material, the magnetic poles in the rotor lag behind the corresponding stator poles by a constant angle, irrespective of the rotor speed.
3.  **Torque Production:** This constant lag between the rotor magnetic poles and the stator magnetic field creates a torque that pulls the rotor along with the rotating field.
4.  **Synchronous Operation:** Once the rotor reaches synchronous speed, it remains locked with the rotating magnetic field, operating as a synchronous motor.
5.  **Starting Torque:** The starting torque is developed due to hysteresis. As the stator field rotates, it constantly attempts to align the magnetized regions of the rotor.
6.  **Silent Operation:** Because there are no brushes or commutator, and the rotor is a solid mass, hysteresis motors operate very silently.
7.  **Constant Speed:** They run at a constant synchronous speed.

**Mathematical Representation (Simplified):**

Torque (T) $\propto$ Volume of Rotor $\times$ Hysteresis Loss per Cycle $\times$ Frequency
The hysteresis loss per cycle is the area of the B-H loop.

### 4.3. Applications

*   **Phonograph Turntables:** For constant speed.
*   **Tape Recorders:** For precise speed control.
*   **Clocks and Timers:** Where silent and accurate operation is needed.
*   **Gyroscopes:** For maintaining stable orientation.
*   **Record Players:** Due to their silent and smooth operation.

**Important Point to Remember:** The hysteresis motor is a synchronous motor that uses the magnetic hysteresis property of its rotor material to produce torque, leading to silent and constant speed operation.

---

## 5. Universal Motor

The universal motor is a special type of AC series motor that can operate on both AC and DC supplies. It's characterized by its high speed and high starting torque.

### 5.1. Construction

*   **Stator:** Similar to a DC series motor, with salient poles wound with field coils. The stator is laminated to reduce eddy current losses.
*   **Rotor (Armature):** Identical to a DC motor armature, consisting of a drum-type winding with a commutator and brushes.
*   **Commutator and Brushes:** Essential for current reversal in the armature coils. The brushes are typically made of carbon.

**Key Components and their Function:**

*   **Stator Field Winding:** Produces the magnetic field.
*   **Armature Winding:** Carries the current and interacts with the field.
*   **Series Connection:** Ensures that the field flux and armature current are in phase for torque production on both AC and DC.
*   **Lamination:** Crucial for AC operation to minimize eddy currents in the stator core and armature core.

### 5.2. Principle of Operation

1.  **DC Operation:** When connected to a DC supply, it functions exactly like a DC series motor. Current flows through the field and armature windings in series, producing torque. The speed-torque characteristic is similar to that of a DC series motor.
2.  **AC Operation:** When connected to a single-phase AC supply:
    *   Current flows through the field and armature windings in series.
    *   The field winding produces an alternating magnetic flux.
    *   The armature current, also alternating, interacts with this flux to produce torque.
    *   The commutator ensures that the direction of current in the armature coils is reversed at the correct time, so the torque is always in the same direction, regardless of the polarity of the AC supply.
    *   Crucially, since both the field flux and armature current alternate simultaneously, the resulting torque is unidirectional and pulsating. However, the inertia of the rotor smooths out these pulsations, resulting in continuous rotation.
3.  **Speed and Torque:** Universal motors operate at high speeds, especially at light loads, and have high starting torque. Their speed decreases with increasing load.
4.  **Power Factor:** The power factor is generally poor at light loads due to the high inductance of the field winding. It improves with increasing load.

**Important Considerations for AC Operation:**

*   **Armature Reaction:** Significant armature reaction occurs, and its effect is more pronounced in AC operation.
*   **Commutation:** Commutation can be a problem due to inductive voltage drop in the armature coils, especially at higher speeds. Compensating windings are often used to improve commutation.
*   **Speed-Torque Ripple:** The torque produced is pulsating, leading to a slight ripple in speed.

### 5.3. Applications

*   **Household Appliances:** Blenders, vacuum cleaners, electric drills, sewing machines, food mixers, hair dryers, electric shavers.
*   **Power Tools:** Saws, sanders, grinders.
*   **Portable Appliances:** Where high speed and torque are required from a compact motor.

**Important Point to Remember:** The universal motor is its ability to run on both AC and DC supplies, making it incredibly versatile. Its high speed and torque make it ideal for portable tools and appliances.

---

## 6. Comparison of Single-Phase Special Machines

| Feature           | AC Series Motor                               | Repulsion Motor                                | Hysteresis Motor                                  | Universal Motor                                      |
| :---------------- | :-------------------------------------------- | :--------------------------------------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **Rotor Type**    | Wound with commutator and brushes             | Wound with commutator and brushes (short-circuited) | Solid, magnetized material (no windings)          | Wound with commutator and brushes                    |
| **Starting Torque** | High                                          | Very High                                      | Moderate to High                                  | High                                                 |
| **Speed**         | Varies with load, can be high                 | Varies with load, can be high                  | Constant (synchronous)                            | Very high, varies with load                          |
| **Operation**     | AC or DC series operation                     | AC only (repulsion principle)                  | AC only (synchronous, hysteresis principle)       | AC and DC series operation                           |
| **Noise**         | Moderate to High                              | Moderate to High                               | Very Low (silent)                                 | Moderate to High                                     |
| **Power Factor**  | Poor at light loads, improves with load       | Good starting, varies with load                | Good                                              | Poor at light loads, improves with load              |
| **Complexity**    | Moderate                                      | Moderate to High                               | Simple rotor, complex stator for field creation   | Moderate                                             |
| **Key Principle** | DC Series motor adapted for AC                | Electromagnetic repulsion                      | Magnetic hysteresis                               | DC Series motor adapted for AC                       |
| **Applications**  | Traction, heavy tools                         | Lifts, compressors                             | Clocks, timers, turntables                        | Household appliances, power tools                    |

---

## 7. Practice Questions and Answers

**Question 1:** Which single-phase AC motor operates on the principle of electromagnetic repulsion?
    *   a) AC Series Motor
    *   b) Repulsion Motor
    *   c) Hysteresis Motor
    *   d) Universal Motor

**Answer 1:** b) Repulsion Motor

**Explanation:** Repulsion motors utilize the repulsion between the stator field and the induced armature currents, controlled by short-circuited brushes.

**Question 2:** What is the primary characteristic that makes a hysteresis motor suitable for applications like phonograph turntables?
    *   a) High starting torque
    *   b) Ability to run on DC
    *   c) Silent and constant speed operation
    *   d) Low power factor

**Answer 2:** c) Silent and constant speed operation

**Explanation:** The absence of brushes and commutators, along with the inherent synchronous operation due to rotor hysteresis, makes it silent and maintain a constant speed.

**Question 3:** A universal motor can operate on both AC and DC supplies because:
    *   a) Its armature winding is not connected to the supply.
    *   b) Its field and armature windings are connected in series.
    *   c) It uses a capacitor for starting.
    *   d) It has a solid magnetic rotor.

**Answer 3:** b) Its field and armature windings are connected in series.

**Explanation:** The series connection ensures that both the field flux and armature current reverse polarity simultaneously with the AC supply, maintaining a unidirectional torque, and also allows it to function as a DC series motor.

**Question 4:** In a repulsion motor, what is the primary function of shifting the brushes?
    *   a) To connect the armature to the DC supply.
    *   b) To reduce eddy current losses.
    *   c) To control starting torque and direction of rotation.
    *   d) To convert it into a synchronous motor.

**Answer 4:** c) To control starting torque and direction of rotation.

**Explanation:** The brush position relative to the stator poles determines the phase of the induced armature current, thereby controlling the repulsion torque and its direction.

**Question 5:** True or False: The AC series motor has a poor power factor at heavy loads.

**Answer 5:** False.

**Explanation:** The AC series motor has a poor power factor at light loads due to the inductive reactance of the field winding. The power factor improves as the load increases and the current increases.

---

## 8. Important Points to Remember

*   **AC Series Motor:** High starting torque, speed varies with load. Essentially a DC series motor adapted for AC. Needs laminated core.
*   **Repulsion Motor:** Very high starting torque. Brush shifting is crucial for operation and torque control. Repulsion-start induction-run offers the best of both worlds.
*   **Hysteresis Motor:** Silent operation, constant synchronous speed. Uses hysteresis loss in the rotor. Ideal for precision timing and audio applications.
*   **Universal Motor:** Can run on AC and DC. High speed and high starting torque. Widely used in portable appliances and power tools.
*   **Lamination:** Critical for reducing eddy current losses in AC motors, especially in the stator and armature cores of series and universal motors.
*   **Power Factor:** Most AC motors, especially series and universal motors, have a lower power factor at light loads.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 9. Textbook References

*   **Special Electrical Machines by E. G. Janardhan (PHI Learning Private Limited, Ist edition 2014):** Provides foundational knowledge on various special machines, including AC series, repulsion, hysteresis, and universal motors, with details on their construction and operating principles.
*   **Special Electrical Machines by K. Venkataratnam (Universities Press, Ist edition, 2008):** Offers comprehensive coverage of single-phase AC motors, with in-depth analysis of their working principles, starting methods, and performance characteristics.
*   **A detailed study on Special Electrical Machines by V. Vedanarayanan (Notion Press, Ist edition, 2021):** This book likely provides contemporary insights and perhaps advanced topics related to these machines, including practical considerations and drive techniques.
*   **Brushless PM and Reluctance Motor Drives by T. J. E. Miller (Clarendon Press, Oxford, 1989):** While focusing on PM and reluctance drives, the foundational principles of AC motor operation discussed here can be indirectly relevant for understanding torque production mechanisms in other AC machines.
*   **Permanent magnet synchronous and Brushless DC motor Drives by R. Krishnan (CRC Press., Ist edition 2016):** Similar to Miller's book, this reference focuses on specific types of motors but offers a deep understanding of electromagnetic principles that underpin motor operation generally.

*(Note: Direct content from Miller and Krishnan might be less directly applicable to these specific single-phase AC machines but provides a strong theoretical background in motor drives and electromagnetics.)*

---
This concludes the study notes for single-phase special electrical machines. Thoroughly understanding the construction, operating principles, and applications of these motors is crucial for mastering this topic.