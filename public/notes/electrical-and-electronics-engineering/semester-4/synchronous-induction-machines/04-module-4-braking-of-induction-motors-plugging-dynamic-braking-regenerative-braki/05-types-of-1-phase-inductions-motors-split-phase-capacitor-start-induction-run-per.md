---
title: "Types of 1-phase inductions motors – split-phase, capacitor-start induction-run, permanent capacitor types – applications"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 4: Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e00"
status: "completed"
scrapedAt: "2026-05-23T16:19:21.201Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 4: Single-Phase Induction Motors

## Topic: Types of 1-Phase Induction Motors – Split-Phase, Capacitor-Start Induction-Run, Permanent Capacitor Types – Applications

**Module Context:** This topic delves into the workings and applications of various single-phase induction motors, which are ubiquitous in everyday appliances. While the module title mentions braking, this specific topic focuses on the motor types themselves, providing foundational knowledge crucial for understanding their behavior and control.

**Course Outcomes Alignment:**

*   **CO5: Explain the construction details and working of various types of single-phase induction motors. (Knowledge Level: K2)** - This topic directly addresses this outcome by explaining the construction and operating principles of split-phase, capacitor-start induction-run, and permanent capacitor motors.

---

### 1. Introduction to Single-Phase Induction Motors

Single-phase induction motors are the workhorses of many household and light industrial applications due to the widespread availability of single-phase power. However, a single-phase winding in the stator produces a pulsating magnetic field, not a rotating one. This pulsating field cannot inherently produce starting torque. Therefore, single-phase induction motors require special starting mechanisms to create a rotating magnetic field to initiate rotation.

**Key Concept:** **Pulsating vs. Rotating Magnetic Field**
A single-phase AC supply creates a magnetic field that alternates in polarity and strength but does not rotate. To start an induction motor, a rotating magnetic field is needed.

**Reference:**
*   **P.S. Bhimbra, "Electrical Machinery"**: Discusses the fundamental issue of starting torque in single-phase motors due to the pulsating nature of the stator field.
*   **Kothari & Nagrath, "Electric Machines"**: Provides a detailed explanation of why a single-phase stator winding alone cannot produce a rotating magnetic field.

---

### 2. Need for Starting Mechanisms

To overcome the inability of a single-phase winding to produce a starting torque, single-phase induction motors employ a second winding (auxiliary winding or starting winding) in the stator, displaced spatially from the main winding. By introducing a phase difference between the currents in the main and auxiliary windings, a semblance of a rotating magnetic field is created, allowing the motor to start.

**Key Concept:** **Phase Splitting**
The core principle behind starting single-phase induction motors is to create a phase shift between the currents in the main and auxiliary windings. This phase shift, combined with the spatial displacement of the windings, produces a resultant rotating magnetic field.

---

### 3. Types of Single-Phase Induction Motors

#### 3.1 Split-Phase Induction Motor

**Construction:**
*   **Stator:** Two windings are present:
    *   **Main Winding (Running Winding):** Placed in the stator slots, typically made of copper wire with low resistance and high reactance.
    *   **Auxiliary Winding (Starting Winding):** Placed in the stator slots, displaced by 90 electrical degrees from the main winding. It is made of thinner wire, resulting in higher resistance and lower reactance compared to the main winding.
*   **Rotor:** Squirrel cage rotor, similar to that of three-phase induction motors.
*   **Starting Mechanism:** A **centrifugal switch** is connected in series with the auxiliary winding.

**Working Principle:**
1.  When the motor is energized, current flows through both the main and auxiliary windings.
2.  Due to the difference in winding construction (resistance and reactance), the current in the auxiliary winding lags behind the voltage to a lesser extent than the current in the main winding. This creates a phase difference between the two currents.
3.  The spatial displacement of the windings (90 electrical degrees) and the phase difference in their currents produce a weak rotating magnetic field.
4.  This rotating field induces currents in the rotor bars, creating a starting torque that causes the motor to rotate.
5.  As the motor speed approaches about 75-80% of its synchronous speed, the centrifugal switch disconnects the auxiliary winding and the starting switch from the circuit.
6.  The motor then continues to run solely on the main winding.

**Vector Diagram (Conceptual):**
*   The current in the auxiliary winding ($I_a$) leads the current in the main winding ($I_m$).
*   The phase difference ($\alpha$) between $I_a$ and $I_m$ is typically around 30-40 degrees.
*   The resultant magnetic field is approximately elliptical.

**Performance Characteristics:**
*   **Starting Torque:** Low to moderate (typically 1.5 to 2 times the full-load torque).
*   **Power Factor:** Low at starting and at light loads.
*   **Efficiency:** Relatively low.

**Applications:**
*   Small fans
*   Blowers
*   Washing machines
*   Office equipment
*   Small pumps

**Important Points to Remember:**
*   The centrifugal switch is crucial for operation and must reliably disconnect the auxiliary winding.
*   The starting torque is limited by the phase angle achieved between the winding currents.

**Reference:**
*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Provides a detailed analysis of the split-phase motor's starting torque and the role of the centrifugal switch.
*   **K Murugesh Kumar, "Induction & Synchronous Machines"**: Explains the concept of phase displacement and its impact on the starting torque.

#### 3.2 Capacitor-Start Induction-Run Motor

**Construction:**
*   **Stator:** Two windings:
    *   **Main Winding (Running Winding):** Similar to the split-phase motor.
    *   **Auxiliary Winding (Starting Winding):** Placed spatially displaced from the main winding.
*   **Rotor:** Squirrel cage rotor.
*   **Starting Mechanism:**
    *   A **starting capacitor** is connected in series with the auxiliary winding.
    *   A **centrifugal switch** is connected in series with the capacitor and auxiliary winding.

**Working Principle:**
1.  When the motor is energized, the auxiliary winding, capacitor, and centrifugal switch are connected in series.
2.  The capacitor is chosen such that it causes the current in the auxiliary winding ($I_a$) to lead the voltage by a larger angle (closer to 90 degrees) than in the split-phase motor. This creates a phase difference between $I_a$ and the main winding current ($I_m$).
3.  The spatial displacement (90 electrical degrees) and the improved phase difference produce a nearly balanced rotating magnetic field, resulting in a significantly higher starting torque.
4.  As the motor accelerates to about 75-80% of its synchronous speed, the centrifugal switch disconnects the auxiliary winding and the starting capacitor.
5.  The motor then continues to run on the main winding alone, similar to a single-phase induction motor.

**Vector Diagram (Conceptual):**
*   The current in the auxiliary winding ($I_a$) leads the current in the main winding ($I_m$).
*   The phase difference ($\alpha$) between $I_a$ and $I_m$ is typically around 75-85 degrees, which is much larger than in the split-phase motor.
*   The resultant magnetic field is more nearly circular.

**Performance Characteristics:**
*   **Starting Torque:** High (typically 2.5 to 4 times the full-load torque).
*   **Power Factor:** Improved at starting and at full load compared to split-phase motors.
*   **Efficiency:** Better than split-phase motors.

**Applications:**
*   Refrigerators
*   Air conditioners
*   Pumps
*   Conveyors
*   Machine tools requiring higher starting torque

**Important Points to Remember:**
*   The starting capacitor is rated for intermittent duty (only during starting).
*   The centrifugal switch is essential for disconnecting the starting circuit to prevent damage to the capacitor and auxiliary winding.

**Reference:**
*   **M.G. Say, "Performance & Design of AC Machines"**: Provides theoretical basis for the use of capacitors to improve phase displacement and starting torque.
*   **P.S. Bhimbra, "Electrical Machinery"**: Details the construction and operation, highlighting the role of the capacitor and centrifugal switch.

#### 3.3 Permanent Capacitor (P.C.) Motor

**Construction:**
*   **Stator:** Two windings:
    *   **Main Winding (Running Winding):** Similar to other types.
    *   **Auxiliary Winding (Starting Winding):** Placed spatially displaced from the main winding.
*   **Rotor:** Squirrel cage rotor.
*   **Starting Mechanism:**
    *   A **start/run capacitor** is connected in series with the auxiliary winding.
    *   This capacitor is designed for continuous operation and remains in the circuit at all times.
    *   No centrifugal switch is used in this type.

**Working Principle:**
1.  When the motor is energized, the capacitor, auxiliary winding, and main winding are connected in the circuit.
2.  The capacitor provides a phase shift to the auxiliary winding current, creating a rotating magnetic field.
3.  The capacitor is selected to provide a favorable phase difference for both starting and running conditions.
4.  Since the capacitor is permanently connected, the motor operates with two windings energized throughout. The combined effect of the main winding and the capacitor-assisted auxiliary winding produces a rotating magnetic field that drives the motor.

**Types based on Capacitor Usage:**

*   **Permanent Capacitor Motor (Single Capacitor):** Uses a single capacitor which is a compromise for both starting and running. It results in moderate starting torque and power factor.
*   **Capacitor-Start Capacitor-Run Motor (Two-Capacitor Motor):** This is an improvement over the single-capacitor type.
    *   **Construction:** Uses two capacitors:
        *   A small starting capacitor connected in series with the auxiliary winding and a centrifugal switch.
        *   A larger run capacitor permanently connected in series with the auxiliary winding.
    *   **Working:** The starting capacitor provides a high starting torque. Once the motor reaches a certain speed, the centrifugal switch disconnects the starting capacitor, leaving only the run capacitor in the circuit to improve the running performance (power factor and efficiency).

**Performance Characteristics (Permanent Capacitor Motor - single capacitor):**
*   **Starting Torque:** Moderate (typically 1.5 to 2 times the full-load torque).
*   **Power Factor:** Improved at running conditions compared to split-phase motors.
*   **Efficiency:** Improved at running conditions.
*   **Simplicity:** No centrifugal switch, making it more reliable and less prone to mechanical failure.

**Performance Characteristics (Capacitor-Start Capacitor-Run Motor):**
*   **Starting Torque:** High (comparable to or better than capacitor-start induction-run).
*   **Power Factor:** Excellent at running conditions.
*   **Efficiency:** High.

**Applications:**
*   **Permanent Capacitor Motors (Single Capacitor):**
    *   Ceiling fans
    *   Small desk fans
    *   Ventilation fans
    *   Water coolers
*   **Capacitor-Start Capacitor-Run Motors:**
    *   Washing machines (higher torque requirements)
    *   Air conditioners
    *   Refrigerators
    *   Pumps
    *   Machine tools

**Important Points to Remember:**
*   The absence of a centrifugal switch in the P.C. motor makes it more reliable.
*   The selection of capacitor value is critical for optimal performance.
*   The two-capacitor motor offers the best of both worlds (high starting torque and good running performance).

**Reference:**
*   **Kothari & Nagrath, "Electric Machines"**: Explains the operating principle of permanent capacitor motors and the advantages of the two-capacitor design.
*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Provides detailed analysis of the phasor diagrams for permanent capacitor motors and their performance.

---

### 4. Summary of Single-Phase Induction Motor Types

| Feature               | Split-Phase Motor                   | Capacitor-Start Induction-Run Motor | Permanent Capacitor Motor (Single Cap.) | Capacitor-Start Capacitor-Run Motor |
| :-------------------- | :---------------------------------- | :---------------------------------- | :-------------------------------------- | :---------------------------------- |
| **Auxiliary Winding** | Higher R, lower X                   | Higher R, lower X                   | Optimized for running                   | Optimized for starting & running    |
| **Capacitor**         | None                                | Starting capacitor (intermittent)   | Run capacitor (continuous)              | Starting & Run capacitors           |
| **Starting Switch**   | Centrifugal switch required         | Centrifugal switch required         | None                                    | Centrifugal switch required         |
| **Starting Torque**   | Low/Moderate                        | High                                | Moderate                                | High                                |
| **Running Perf.**     | Fair                                | Good                                | Good                                    | Excellent                           |
| **Cost**              | Low                                 | Moderate                            | Moderate                                | Higher                              |
| **Reliability**       | Moderate (switch failure risk)      | Moderate (switch failure risk)      | High (no switch)                        | Moderate (switch failure risk)      |
| **Typical Apps**      | Small fans, blowers                 | Refrigerators, ACs, pumps           | Ceiling fans, small fans                | Washing machines, ACs, pumps        |

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary reason why single-phase induction motors require a starting mechanism?

**Answer:** A single-phase stator winding produces a pulsating magnetic field, which cannot inherently produce a rotating magnetic field necessary for starting torque.

**Question 2:** How does a capacitor-start induction-run motor achieve a higher starting torque compared to a split-phase motor?

**Answer:** The capacitor in series with the auxiliary winding creates a larger phase difference between the currents in the main and auxiliary windings. This, along with the spatial displacement, produces a more balanced, rotating magnetic field, leading to higher starting torque.

**Question 3:** What is the advantage of a permanent capacitor motor over a split-phase motor, considering reliability?

**Answer:** A permanent capacitor motor does not use a centrifugal switch, which is a common point of failure in split-phase motors. This makes the permanent capacitor motor more reliable.

**Question 4:** In a capacitor-start capacitor-run motor, what is the role of the starting capacitor?

**Answer:** The starting capacitor provides a large phase shift to the auxiliary winding current, creating a high starting torque. It is designed for intermittent duty and is disconnected by a centrifugal switch once the motor reaches a certain speed.

**Question 5:** Name three applications where a capacitor-start induction-run motor would be preferred over a split-phase motor.

**Answer:** Refrigerators, air conditioners, and pumps are good examples because they require higher starting torque to overcome inertia and load.

---

### 6. Key Points to Remember

*   Single-phase induction motors cannot self-start due to the pulsating nature of the magnetic field produced by a single stator winding.
*   Starting mechanisms (split-phase, capacitor-start, permanent capacitor) are used to create a rotating magnetic field by introducing a phase difference between currents in the main and auxiliary windings.
*   The **phase difference** between the currents in the main and auxiliary windings, combined with their spatial displacement, determines the starting torque and the shape of the resultant magnetic field (elliptical for split-phase, more circular for capacitor types).
*   **Centrifugal switches** are used in split-phase and capacitor-start motors to disconnect the auxiliary winding/starting circuit once the motor has gained sufficient speed.
*   **Capacitors** are used to improve the phase angle between the winding currents, thereby increasing starting torque and/or running power factor.
*   **Permanent capacitor motors** are more reliable due to the absence of a centrifugal switch.
*   The **capacitor-start capacitor-run motor** offers the best performance in terms of both starting torque and running efficiency.
*   Capacitors used for starting are rated for intermittent duty, while those for running are rated for continuous duty.

---

This comprehensive study note covers the construction, working principles, performance characteristics, and applications of split-phase, capacitor-start induction-run, and permanent capacitor single-phase induction motors, aligning with the specified learning and course outcomes.
