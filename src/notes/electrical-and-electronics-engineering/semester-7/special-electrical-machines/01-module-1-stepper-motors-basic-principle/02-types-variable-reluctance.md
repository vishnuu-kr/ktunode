---
title: "types - variable reluctance"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3689b"
status: "completed"
scrapedAt: "2026-05-23T16:39:23.590Z"
---
# Special Electrical Machines

## Module 1: Stepper Motors – Basic Principle

### Topic: Types - Variable Reluctance (VR) Stepper Motors

---

### 1. Introduction to Variable Reluctance (VR) Stepper Motors

Variable Reluctance (VR) stepper motors are one of the oldest and simplest types of stepper motors. Their operation is based on the principle of **reluctance minimization**. They achieve rotation by sequentially energizing stator windings, causing the rotor to align itself with the lowest reluctance path.

**Key Concept:** Reluctance is the magnetic equivalent of resistance in an electrical circuit. A path of lower reluctance offers less opposition to magnetic flux.

---

### 2. Constructional Details of VR Stepper Motors

**(Learning Outcome 1: Explain the constructional details, working and drive circuits for various types of stepper motor.)**

VR stepper motors consist of two main parts:

*   **Stator:**
    *   Stationary part of the motor.
    *   Consists of two concentric or adjacent stator poles.
    *   Each stator pole is wound with coils (windings).
    *   The number of stator poles is typically even.
    *   The stator windings are arranged in phases. Common configurations include 2-phase or 3-phase.

*   **Rotor:**
    *   Rotating part of the motor.
    *   Made of a ferromagnetic material (e.g., soft iron).
    *   **Crucially, it has no windings, permanent magnets, or commutators.** This makes them robust and cost-effective.
    *   It has teeth or salient poles on its periphery.
    *   The number of rotor teeth is usually less than the number of stator poles.
    *   The teeth are designed to provide varying air gaps between the rotor and stator poles as the rotor rotates.

**Example Construction:**

Consider a 2-phase VR stepper motor with:
*   **Stator:** 4 poles (2 poles per phase). Let's call them Phase A (A1, A2) and Phase B (B1, B2). Poles A1 and B1 are adjacent, then A2 and B2 are adjacent, with a phase shift.
*   **Rotor:** 4 teeth.

When a phase winding is energized, it creates a magnetic flux. The rotor, being made of a ferromagnetic material, will attempt to align itself to minimize the magnetic reluctance between the energized stator poles and the rotor teeth.

**Textbook Reference:**
*   Janardhan, E. G. (2014), Chapter 2, "Stepper Motors". This chapter would detail the constructional aspects of different stepper motor types, including VR motors.
*   Venkataratnam, K. (2008), Chapter 1, "Stepper Motors". Similar to Janardhan, this section will cover the fundamental construction of VR motors.

---

### 3. Working Principle of VR Stepper Motors

**(Learning Outcome 1: Explain the constructional details, working and drive circuits for various types of stepper motor.)**

The operation of a VR stepper motor is based on the principle of **reluctance torque**.

*   **Reluctance Torque:** When a stator winding is energized, it creates a magnetic field. The rotor, with its teeth, will move to a position where the air gap between the stator pole and the rotor tooth is minimized, thereby minimizing the magnetic reluctance. This movement creates a torque that aligns the rotor with the energized stator pole.
*   **Stepping Action:** The motor rotates in discrete steps. Each step is achieved by sequentially energizing the stator windings in a specific pattern.
    *   When Phase A is energized, the rotor aligns with the poles of Phase A.
    *   When Phase B is energized (with a specific phase shift), the rotor moves to align with the poles of Phase B.
    *   By switching between phases and possibly energizing multiple phases simultaneously, the rotor can be made to step from one position to another.

**Step Sequence Example (2-phase motor):**

Let's assume a 2-phase motor with 4 stator poles and 4 rotor teeth. The phases are A and B. The stepping sequence can be:

1.  **Energize Phase A:** Rotor aligns with Phase A poles.
2.  **Energize Phase B:** Rotor moves to align with Phase B poles.
3.  **De-energize Phase A, Energize Phase A (next pole pair):** Rotor moves to the next position.
4.  **De-energize Phase B, Energize Phase B (next pole pair):** Rotor moves again.

This sequential energization, often referred to as **phasing**, controls the direction and magnitude of rotation.

**Types of Excitation (Phasing):**

*   **1-Phase (Wave/Single Phase ON):** Only one phase is energized at a time. This provides the lowest step resolution and torque.
*   **2-Phase (Two Phase ON):** Two phases are energized simultaneously. This provides higher torque and smoother operation than 1-phase excitation.
*   **1-2 Phase (Half-Stepping):** Alternates between energizing one phase and then two phases. This effectively doubles the step resolution compared to 2-phase excitation and provides smoother motion.
*   **2-2 Phase (Microstepping):** (While not strictly a VR-specific feature, VR motors can be microstepped with appropriate drive circuitry). Involves controlling the current in the windings to create intermediate positions.

**Textbook Reference:**
*   Vedanarayanan, V. (2021), Chapter 1, "Stepper Motors". This chapter would elaborate on the working principle, including reluctance torque and different excitation modes.
*   Miller, T. J. E. (1989), Chapter 3, "Reluctance Motors". This foundational text provides an in-depth analysis of reluctance motor principles, which directly applies to VR stepper motors.

---

### 4. Performance Characteristics of VR Stepper Motors

*   **Step Angle:** The angle of rotation for each discrete step. It is determined by the number of stator poles and rotor teeth.
    *   Formula: Step Angle $(\theta_s) = 360^\circ / (N_r \times N_s)$
        *   $N_s$: Number of stator phases
        *   $N_r$: Number of rotor teeth
        *   *(Note: This formula is a simplification. A more accurate formula considers the relative alignment of stator and rotor poles. Generally, Step Angle = 360 / (Number of Stator Poles per Phase * Number of Rotor Teeth) or 360 / (Total Number of Stator Poles * Number of Rotor Teeth) depends on the configuration.)*
        *   A more general and accurate way to think about it is: Step Angle = 360 / (Number of storable positions). For a VR motor, the number of storable positions is directly related to the alignment possibilities between stator and rotor poles.
*   **Torque:** VR motors generate reluctance torque, which is generally lower than Permanent Magnet (PM) stepper motors. Torque is dependent on the current in the windings and the geometry of the motor.
*   **Speed:** The maximum speed is limited by the motor's ability to switch between phases and overcome inertia.
*   **Efficiency:** Generally lower compared to PM stepper motors due to the absence of permanent magnets contributing to flux.
*   **Cost:** VR stepper motors are typically the most cost-effective due to their simple construction (no magnets).

---

### 5. Advantages and Disadvantages of VR Stepper Motors

**Advantages:**

*   **Low Cost:** Simple construction without permanent magnets makes them inexpensive.
*   **High Speed Capability:** Can operate at higher speeds compared to some other stepper motor types when driven appropriately.
*   **Good Durability:** No brushes to wear out, making them reliable.
*   **High Torque-to-Inertia Ratio (for some designs):** Can offer good dynamic performance.

**Disadvantages:**

*   **Lower Torque:** Generally produce lower torque compared to PM stepper motors.
*   **Lower Resolution:** Step angles are typically larger, resulting in lower resolution.
*   **Lower Efficiency:** Significant power is lost in the windings.
*   **No Holding Torque when Unenergized:** Unlike PM motors, VR motors have no holding torque when all windings are de-energized, as there are no permanent magnets to hold the rotor in place.
*   **Noisy Operation:** Can be noisy due to the impact of rotor teeth on stator poles and the switching of magnetic fields.

---

### 6. Drive Circuits for VR Stepper Motors

**(Learning Outcome 1: Explain the constructional details, working and drive circuits for various types of stepper motor.)**

Driving a VR stepper motor involves sequentially switching DC voltage or current to the stator windings. The complexity of the drive circuit depends on the desired excitation mode (e.g., 1-phase, 2-phase, half-stepping).

**Basic Components:**

*   **Power Supply:** Provides the necessary voltage and current.
*   **Switches/Drivers:** Typically MOSFETs or BJTs, controlled by a logic signal, to switch the current to the windings.
*   **Controller:** A microcontroller (e.g., Arduino, Raspberry Pi) or dedicated stepper motor driver IC that generates the switching sequence.

**Drive Circuit Configuration:**

*   **Half-H-Bridge (or Full-H-Bridge):** Used to control the direction of current in a winding, which is sometimes necessary for advanced control or to achieve bidirectional operation without reversing polarity of the main supply. For basic VR motors, a simple unipolar drive (switching to ground) is often sufficient.

**Example Drive Logic (for 2-phase, 4-step sequence):**

| Step | Phase A | Phase B |
| :--- | :------ | :------ |
| 1    | ON      | OFF     |
| 2    | OFF     | ON      |
| 3    | ON      | OFF     |
| 4    | OFF     | ON      |

This sequence would be implemented using transistors controlled by a microcontroller.

**Modern Driver ICs:** Many integrated circuits (ICs) are available that simplify the drive circuit design by incorporating the switching logic, current control, and protection features. Examples include Allegro A4988, DRV8825, etc. These ICs can accept step and direction signals.

**Textbook Reference:**
*   Krishnan, R. (2016), Chapter 3, "Stepper Motor Drives". While this book focuses on PM and BLDC, the fundamental drive principles for switching DC currents to windings are relevant and will discuss driver topologies.
*   Miller, T. J. E. (1989), Chapter 4, "Control of Reluctance Motors". This chapter would delve into the drive circuits and control strategies for reluctance motors.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the fundamental operating principle of a Variable Reluctance (VR) stepper motor?
a) Reluctance torque minimization
b) Electromagnetic induction
c) Lorentz force
d) Eddy current effects

**Answer:** a) Reluctance torque minimization

---

**Question 2:**
Name two key constructional features of a VR stepper motor that distinguish it from other types of stepper motors.

**Answer:**
1.  Rotor is made of ferromagnetic material and has no windings or permanent magnets.
2.  Stator has windings arranged in phases, and the rotor has teeth to vary the air gap.

---

**Question 3:**
If a VR stepper motor has 6 stator poles and 4 rotor teeth, what is the minimum step angle of this motor (assuming a simple 1-phase ON excitation)?
a) 15 degrees
b) 30 degrees
c) 22.5 degrees
d) 45 degrees

**Answer:**
The number of storable positions is directly related to the alignment possibilities. For a VR motor, the step angle can be calculated based on the relative alignment of stator and rotor poles. A common calculation for the smallest step angle is $360^\circ / (\text{Number of stator poles} \times \text{Number of rotor teeth})$.
However, a more precise understanding is that the number of stable positions is the least common multiple of the number of rotor teeth and stator poles, or it's related to the phase switching.

Let's reconsider the basic principle: the rotor moves to align with the energized stator poles.
If we have N_r rotor teeth and N_s stator poles, the number of positions per revolution is often related to $N_r \times N_s$.
For a simple VR motor, the number of steps per revolution is commonly given by $N_r \times \text{number of phases}$. Or, a more robust formula is $360 / (N_s \times N_r)$ where $N_s$ is the total number of stator poles.

Let's use the formula: Step Angle $(\theta_s) = 360^\circ / (\text{Number of stator poles} \times \text{Number of rotor teeth})$.
Here, number of stator poles = 6, number of rotor teeth = 4.
Step Angle = $360^\circ / (6 \times 4) = 360^\circ / 24 = 15^\circ$.
*This calculation is a common simplification. For VR motors, the actual number of steps per revolution is determined by the phasing sequence and the tooth alignment. A more accurate approach considers the number of rotor teeth and the number of stator pole groups.*

Let's verify with another common formula for VR motors:
Step Angle = $360^\circ / (\text{number of rotor teeth} \times \text{number of stator phases})$ for basic 2-phase.
If we have 6 stator poles, it implies 3 poles per phase for a 2-phase system.
Then steps per revolution = $N_r \times \text{number of phases} = 4 \times 2 = 8$.
Step Angle = $360^\circ / 8 = 45^\circ$.

However, the standard way to determine the step angle is by considering the total number of stable positions.
The total number of rotor teeth is 4. The total number of stator poles is 6.
The number of steps per revolution is often equal to the number of rotor teeth multiplied by the number of phases for basic excitation, or more fundamentally, it's the number of stable alignment positions.
For a VR motor with $N_s$ stator poles and $N_r$ rotor teeth, the minimum step angle is $360 / (N_s \times N_r)$ if $N_s$ and $N_r$ are coprime. If not, it's more complex.

A common rule of thumb for VR motors is that the number of steps per revolution is $N_r \times N_{ph}$, where $N_{ph}$ is the number of phases.
Here, $N_r = 4$. If it's a 2-phase motor, $N_{ph} = 2$, giving 8 steps per revolution and a step angle of $45^\circ$.
If it's a 3-phase motor, $N_{ph} = 3$, giving 12 steps per revolution and a step angle of $30^\circ$.

Given the options, let's assume the question implies a standard configuration.
The most common VR motor construction is 2-phase. If it has 6 stator poles, it's likely 3 poles per phase.
The number of rotor teeth is 4.
The number of stable positions is often related to $N_r$ and the phase switching.
Let's use the formula: Step Angle $= 360^\circ / (N_r \times \text{number of phase changes per revolution})$.
The number of phase changes per revolution for a VR motor is generally $N_r \times (\text{number of phases})$.
For a 2-phase VR motor with 4 rotor teeth, steps per revolution = $4 \times 2 = 8$. Step angle = $45^\circ$.
If it's a 3-phase VR motor with 4 rotor teeth, steps per revolution = $4 \times 3 = 12$. Step angle = $30^\circ$.

The presence of 6 stator poles is confusing without more context on the phase arrangement.
Let's re-examine the fundamental step angle calculation which is often $360 / (\text{Number of rotor teeth} \times \text{Number of stator poles})$. This assumes a direct relationship.
$360 / (4 \times 6) = 360 / 24 = 15^\circ$. This is option (a).

Let's check if the problem description implies something specific about the relationship between stator and rotor poles.
"If a VR stepper motor has 6 stator poles and 4 rotor teeth..."
This implies a direct interaction. The minimum step angle is achieved by aligning the rotor teeth with stator poles.
Consider the number of rotor teeth ($N_r = 4$) and stator poles ($N_s = 6$).
The number of steps per revolution is usually determined by the number of times a rotor tooth can align with a stator pole as the phases are switched.
For VR motors, the number of stable positions is often related to $N_r \times \text{phases}$.
However, the $360/(N_s \times N_r)$ formula appears in some contexts, relating to the fundamental flux path.

Let's assume the question refers to a specific alignment possibility.
If we have 4 rotor teeth and 6 stator poles, the most common VR construction is where the number of stator poles is greater than the number of rotor teeth.
The number of stable positions is the number of rotor teeth multiplied by the number of phases.
If it's a 2-phase motor, steps/rev = $4 \times 2 = 8$. Step angle = $45^\circ$.
If it's a 3-phase motor, steps/rev = $4 \times 3 = 12$. Step angle = $30^\circ$.

Given the options, $30^\circ$ and $45^\circ$ are common step angles. $15^\circ$ would imply a very high resolution for a VR motor of this size.

Let's reconsider the formula $360^\circ / (N_r \times N_s)$. This is more for synchronous motors or specific reluctance motor calculations.
For VR stepper motors, the step angle is directly tied to the phasing and rotor tooth alignment.
A typical 2-phase VR motor with 4 poles per phase (8 stator poles total) and 4 rotor teeth would have a step angle of $45^\circ$ ($360^\circ / (4 \times 2)$).
If it's a 2-phase motor with 2 poles per phase (4 stator poles total) and 4 rotor teeth, it would be $360^\circ / (4 \times 2) = 45^\circ$.

Let's assume the question implies a basic 2-phase VR motor with 4 rotor teeth. The number of stator poles (6) might be distributed across these phases.
If we have 4 rotor teeth and 2 phases, the step angle is commonly $360^\circ / (4 \times 2) = 45^\circ$.
If the stator had 4 poles, then it would be $360/(4 \times 2) = 45$.
If the stator had 8 poles, then it would be $360/(4 \times 2) = 45$.

The question states "6 stator poles". This could mean 6 poles total, or 3 poles per phase for a 2-phase motor.
If it's 3 poles per phase, then total stator poles = 6.
Number of rotor teeth = 4.
The number of steps per revolution is typically $N_r \times \text{number of phases}$.
If it's a 2-phase motor, steps/rev = $4 \times 2 = 8$. Step angle = $45^\circ$.
If it's a 3-phase motor, steps/rev = $4 \times 3 = 12$. Step angle = $30^\circ$.

Let's assume the most common scenario of a 2-phase VR motor. The number of stator poles given (6) should relate to the phases.
If it's a 2-phase motor, there could be 3 poles per phase.
The interaction between 4 rotor teeth and the 6 stator poles (3 per phase) will lead to alignment positions.
The number of steps per revolution for a VR stepper motor is equal to the number of rotor teeth multiplied by the number of phases.
So, steps/rev = $4 \times 2 = 8$.
Step angle = $360^\circ / 8 = 45^\circ$.

However, some literature uses the formula: $360 / (N_r \times N_s)$ which leads to $15^\circ$.
Let's reconsider the fundamental principle: the rotor moves to minimize reluctance.
With 4 rotor teeth and 6 stator poles, if we energize one phase (e.g., 3 poles), the rotor will align. Then, switching to the next phase (the other 3 poles) will cause it to move.
The number of distinct alignments is often the key.

Let's assume the formula $360 / (N_r \times N_s)$ is intended here, as it yields one of the options.
$360 / (4 \times 6) = 15^\circ$.
This implies that for every alignment change involving rotor teeth and stator poles, a step occurs.

**Let's stick with the most common simplified formula for VR stepper motors:**
Steps per revolution = $N_r \times \text{Number of Phases}$
If we assume it's a 2-phase motor, Steps/rev = $4 \times 2 = 8$. Step angle = $45^\circ$.
If we assume it's a 3-phase motor, Steps/rev = $4 \times 3 = 12$. Step angle = $30^\circ$.

Since $30^\circ$ is an option, and VR motors can be 3-phase, let's consider this.
If the 6 stator poles are distributed as 2 poles per phase for a 3-phase motor, then:
Steps per revolution = $N_r \times \text{Number of Phases} = 4 \times 3 = 12$.
Step Angle = $360^\circ / 12 = 30^\circ$.

This seems the most plausible interpretation given the options and typical VR motor construction.

**Final Answer based on common VR motor conventions:** b) 30 degrees (assuming a 3-phase motor with 2 poles per phase).

---

**Question 4:**
What is a significant disadvantage of VR stepper motors compared to permanent magnet stepper motors?

**Answer:** Lower torque generation and no holding torque when unenergized.

---

**Question 5:**
Describe the basic operation of a half-stepping drive for a VR stepper motor.

**Answer:** In half-stepping, the motor alternates between energizing one phase and then energizing two adjacent phases. This effectively doubles the number of steps per revolution compared to full stepping, resulting in smoother operation and higher resolution. For example, a sequence might be: Phase A ON, Phase A & B ON, Phase B ON, Phase B & C ON, etc.

---

### 8. Important Points to Remember

*   **Reluctance Principle:** VR motors operate on the principle of minimizing magnetic reluctance.
*   **No Rotor Windings/Magnets:** This is a key distinguishing feature of VR motors.
*   **Torque Generation:** Reluctance torque is generated by the tendency of the rotor to align with the magnetic field of the energized stator poles to provide the path of least magnetic resistance.
*   **Construction Simplicity:** Makes them cost-effective and durable.
*   **Step Angle:** Depends on rotor teeth and stator pole configuration and the phasing sequence.
*   **Driving Circuits:** Sequential switching of stator windings using transistors and controlled by logic circuits.
*   **Holding Torque:** VR motors have no inherent holding torque when unenergized, unlike PM stepper motors.

---

### 9. Course Outcome Alignment

*   **CO1:** This topic directly addresses the constructional details, working principle, and drive circuits of a specific type of stepper motor (VR). The information provided covers the necessary knowledge for achieving this outcome at a K2 level (understanding and explaining).

---

This concludes the study notes for Variable Reluctance (VR) Stepper Motors. Ensure you review the construction diagrams and step sequences in your textbooks for a clearer visualization.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
