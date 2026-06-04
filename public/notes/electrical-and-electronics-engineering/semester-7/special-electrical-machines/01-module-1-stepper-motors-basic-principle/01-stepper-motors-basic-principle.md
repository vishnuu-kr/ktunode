---
title: "Stepper motors – basic principle"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3689a"
status: "completed"
scrapedAt: "2026-05-23T16:39:22.236Z"
---
# Module 1: Stepper Motors – Basic Principle

## 1.1 Introduction to Stepper Motors

Stepper motors are a type of brushless DC electric motor that divides a full rotation into a number of equal steps. The motor has no brushes, which makes it more reliable than brushed DC motors. They are used in applications where precise positioning and speed control are required.

**Key Concepts:**

*   **Brushless DC Motor:** A DC motor that uses electronic commutation instead of mechanical brushes.
*   **Precise Positioning:** The ability to move to and hold specific angular positions.
*   **Speed Control:** The ability to vary the rotational speed of the motor.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Introduction to Stepper Motors)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Stepper Motors - Introduction)

---

## 1.2 Working Principle of Stepper Motors

The fundamental principle of operation of a stepper motor is based on **electromagnetic attraction**. The stator of a stepper motor consists of a series of windings (coils) that are energized in a specific sequence. The rotor is typically a permanent magnet or a piece of ferromagnetic material with teeth.

When a specific stator winding is energized, it creates a magnetic field that attracts the nearest pole of the rotor (either a permanent magnet pole or a salient pole). This attraction causes the rotor to align itself with the energized stator winding.

By sequentially energizing different stator windings, the rotor is forced to rotate in discrete steps, following the shifting magnetic field. The step angle, which is the angle the rotor moves for each step, depends on the number of stator phases and the number of rotor poles.

**Key Concepts:**

*   **Stator:** The stationary part of the motor, containing windings.
*   **Rotor:** The rotating part of the motor.
*   **Electromagnetic Attraction:** The force that moves the rotor.
*   **Sequential Energization:** The controlled activation of stator windings in a specific order.
*   **Step Angle:** The angle through which the rotor rotates for each step.

**How it works (step-by-step example):**

Imagine a simple 2-phase stepper motor with a 4-pole rotor (North-South-North-South). The stator has two phases, each with two windings (one for N and one for S attraction).

1.  **Phase A energized:** The magnetic field from Phase A aligns with the closest rotor poles. Let's say the rotor's North pole aligns with the North-seeking pole of Phase A.
2.  **Phase A de-energized, Phase B energized:** The magnetic field from Phase B now attracts the rotor poles. The rotor will rotate by a specific angle (step angle) to align with Phase B's magnetic field.
3.  **Phase B de-energized, Phase A energized (polarity reversed):** By reversing the polarity of Phase A, the magnetic field shifts, and the rotor rotates another step to align.
4.  **Phase A de-energized, Phase B energized (polarity reversed):** This continues the rotation.

**Important Point to Remember:** The direction of rotation is determined by the sequence in which the stator windings are energized.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Working Principle)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Working Principle)
*   Vedanarayanan, V. (2021). *A detailed study on Special Electrical Machines*. Notion Press. (Chapter 3, Stepper Motor Fundamentals)

---

## 1.3 Types of Stepper Motors

Stepper motors are primarily classified based on their rotor construction and working principle. The main types are:

### 1.3.1 Permanent Magnet (PM) Stepper Motors

*   **Construction:** The rotor is made of permanent magnets, typically arranged with alternating North and South poles around its circumference. The stator also has poles (teeth) with windings.
*   **Working:** Energizing stator windings creates magnetic fields that attract or repel the permanent magnet poles of the rotor, causing it to step.
*   **Characteristics:** High torque, good holding torque, and relatively simple construction.
*   **Sub-types:**
    *   **Two-Phase PM Stepper Motors:** Have two phases on the stator.
    *   **VR (Variable Reluctance) Reluctance Stepper Motors:** Rotor is made of a soft ferromagnetic material with teeth. The stator has windings. The rotor aligns itself to minimize the reluctance path between the stator poles.
*   **Reference:**
    *   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Permanent Magnet Stepper Motors)
    *   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Permanent Magnet Stepper Motors)

### 1.3.2 Variable Reluctance (VR) Stepper Motors

*   **Construction:** The rotor is made of a soft ferromagnetic material with salient poles (teeth). It does not have permanent magnets. The stator also has poles with windings.
*   **Working:** The rotor aligns itself with the energized stator poles to minimize the magnetic reluctance of the flux path. When a stator winding is energized, it magnetizes the rotor teeth, and the rotor rotates to align itself with the lowest reluctance path.
*   **Characteristics:** Lower torque compared to PM motors, simpler rotor construction, and generally less expensive.
*   **Reference:**
    *   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Variable Reluctance Stepper Motors)
    *   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Variable Reluctance Stepper Motors)

### 1.3.3 Hybrid Stepper Motors

*   **Construction:** This is a combination of PM and VR stepper motors. The rotor has permanent magnets axially magnetized (North and South poles on opposite faces) and also has teeth made of a soft ferromagnetic material. The stator also has poles with windings.
*   **Working:** The rotor's permanent magnets provide the primary attraction, while the teeth enhance the resolution and torque by creating finer incremental movements due to the reluctance principle.
*   **Characteristics:** High torque, high resolution (small step angles), good speed capabilities, and a good balance of features. They are the most popular type of stepper motor.
*   **Reference:**
    *   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Hybrid Stepper Motors)
    *   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Hybrid Stepper Motors)
    *   Vedanarayanan, V. (2021). *A detailed study on Special Electrical Machines*. Notion Press. (Chapter 3, Hybrid Stepper Motors)
    *   Miller, T. J. E. (1989). *Brushless PM and Reluctance Motor Drives*. Clarendon Press, Oxford. (Covers related principles of PM and reluctance motors).

---

## 1.4 Motor Parameters and Performance Characteristics

Understanding key motor parameters is crucial for selecting and operating stepper motors effectively.

### 1.4.1 Key Parameters

*   **Step Angle ($\theta_s$):** The smallest angle the rotor moves for each step.
    *   Formula: $\theta_s = \frac{360^\circ}{N_s \times N_r}$ (for hybrid motors, where $N_s$ is the number of stator phases and $N_r$ is the number of rotor teeth)
    *   Common step angles include 1.8°, 7.5°, 15°, etc.
*   **Number of Phases:** The number of independent windings on the stator. Common configurations are 2-phase, 4-phase, etc.
*   **Number of Rotor Teeth/Poles:** Determines the step resolution and torque.
*   **Holding Torque:** The maximum torque that can be applied to the rotor shaft without causing it to move from its position when the windings are energized but not stepping.
*   **Pull-in Torque:** The maximum torque at which the motor can start stepping without losing synchronism.
*   **Pull-out Torque:** The maximum torque at which the motor can run at a given stepping rate without losing synchronism.
*   **Slew Rate:** The maximum stepping rate at which the motor can operate without losing steps when starting from rest or changing speed.
*   **Resistive Torque:** The torque due to friction, windage, and the load.

**Important Point to Remember:** Higher holding torque and pull-out torque generally indicate a more capable motor for its size.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Motor Parameters)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Performance Characteristics)

### 1.4.2 Performance Characteristics

*   **Torque-Speed Curve:** Plots the torque a stepper motor can produce against its stepping speed. Pull-out torque typically decreases as speed increases.
*   **Step Response:** The transient behavior of the rotor when stepping. This includes settling time, overshoot, and oscillation.
*   **Resonance:** At certain stepping frequencies, stepper motors can exhibit excessive vibration and oscillations due to mechanical resonance.

**Reference:**
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Torque-Speed Characteristics)

---

## 1.5 Excitation Modes (Stepping Sequences)

The way the stator windings are energized determines the motor's movement and performance.

### 1.5.1 Full Stepping

*   **Description:** In full stepping, two windings are energized at a time (either sequentially or with overlapping currents). This provides a strong magnetic field and good torque.
*   **Sequences:**
    *   **Wave Drive (1-phase ON):** Only one winding is energized at a time. This provides the maximum number of possible steps per revolution for a given motor but results in lower torque and higher current consumption for the same torque.
        *   Example Sequence (2-phase motor): A, B, $\bar{A}$, $\bar{B}$
    *   **Two-Phase ON (2-phase ON):** Two adjacent windings are energized simultaneously. This provides higher torque and smoother operation compared to wave drive.
        *   Example Sequence (2-phase motor): AB, BC, CD, DA (where A, B, C, D are windings) or A+B, B+C, C+D, D+A.
*   **Step Angle:** Determined by the motor's construction.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Full Stepping Modes)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Full Stepping)

### 1.5.2 Half Stepping

*   **Description:** Half stepping alternates between energizing one winding and energizing two adjacent windings. This effectively halves the step angle, resulting in smoother rotation and double the resolution of full stepping.
*   **Sequence:**
    *   Example Sequence (2-phase motor): A, A+B, B, B+C, C, C+D, D, D+A
*   **Step Angle:** Half the step angle of full stepping.
*   **Advantages:** Smoother operation, double the resolution.
*   **Disadvantages:** Requires more complex driving circuitry.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Half Stepping)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Half Stepping)

### 1.5.3 Microstepping

*   **Description:** Microstepping involves controlling the current in the stator windings with precise analog values, rather than just ON/OFF or full current. This allows the rotor to move in very small increments between the full steps, resulting in extremely smooth operation and very high resolution.
*   **Mechanism:** Typically achieved by using sinusoidal current waveforms for the windings.
*   **Advantages:** Very smooth rotation, significantly reduced vibration and resonance, high resolution, improved torque control.
*   **Disadvantages:** Requires more sophisticated driver electronics and control algorithms.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Microstepping)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Microstepping)
*   Vedanarayanan, V. (2021). *A detailed study on Special Electrical Machines*. Notion Press. (Chapter 3, Microstepping Techniques)

---

## 1.6 Applications of Stepper Motors

Stepper motors are widely used in various applications due to their precise positional control and open-loop operation (no feedback required for basic positioning).

*   **Printers:** Moving the print head and paper.
*   **Scanners:** Moving the scanning element.
*   **Robotics:** Positioning robotic arms and grippers.
*   **CNC Machines:** Precisely controlling the movement of cutting tools.
*   **Medical Equipment:** Positioning in diagnostic and treatment devices.
*   **Disk Drives:** Positioning read/write heads (though less common now with linear motors).
*   **Cameras:** Zoom and focus control.
*   **Automotive:** Dashboard instrumentation, idle speed control.

**Reference:**
*   Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited. (Chapter 1, Applications)
*   Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press. (Chapter 2, Applications)
*   Vedanarayanan, V. (2021). *A detailed study on Special Electrical Machines*. Notion Press. (Chapter 3, Industrial Applications)

---

## 1.7 Addressing Course Outcomes

This module directly contributes to the following course outcomes:

*   **CO1: Explain the constructional details, working and drive circuits for various types of stepper motor. (Knowledge Level: K2)**
    *   **Constructional Details:** Covered in Section 1.3 (Types of Stepper Motors), detailing PM, VR, and Hybrid motors.
    *   **Working:** Explained in Section 1.2 (Working Principle) and elaborated in the context of different types.
    *   **Drive Circuits:** While not detailed in this introductory module, the understanding of excitation modes (Section 1.5) lays the groundwork for understanding drive circuits.

---

## Practice Questions and Exercises

**Multiple Choice Questions:**

1.  What is the primary principle of operation for a stepper motor?
    a) Electromagnetic induction
    b) Electromagnetic attraction
    c) Electrostatic force
    d) Magnetic repulsion

2.  Which type of stepper motor has a rotor made of permanent magnets?
    a) Variable Reluctance (VR)
    b) Hybrid
    c) Permanent Magnet (PM)
    d) Synchronous

3.  Which stepping mode offers the smoothest operation and highest resolution?
    a) Full Stepping (Wave Drive)
    b) Full Stepping (2-Phase ON)
    c) Half Stepping
    d) Microstepping

4.  The maximum torque at which a stepper motor can start stepping without losing synchronism is called:
    a) Holding Torque
    b) Pull-out Torque
    c) Pull-in Torque
    d) Breakaway Torque

5.  A stepper motor with a step angle of 1.8° completes how many steps for one full revolution?
    a) 100 steps
    b) 200 steps
    c) 180 steps
    d) 360 steps

**Short Answer Questions:**

1.  Briefly explain the difference between a Permanent Magnet (PM) stepper motor and a Variable Reluctance (VR) stepper motor in terms of their rotor construction.
2.  What is the advantage of using half stepping over full stepping?
3.  What is holding torque in a stepper motor?
4.  Why are hybrid stepper motors popular?
5.  List three common applications of stepper motors.

**Calculations:**

1.  A hybrid stepper motor has 50 teeth on the rotor and the stator has 4 phases. If each phase has 4 poles, calculate the step angle for full stepping.
2.  If a stepper motor has a step angle of 7.5°, how many steps are required to rotate the shaft by 90°?

---

## Answers to Practice Questions

**Multiple Choice Questions:**

1.  **b) Electromagnetic attraction**
2.  **c) Permanent Magnet (PM)**
3.  **d) Microstepping**
4.  **c) Pull-in Torque**
5.  **b) 200 steps** (360° / 1.8° = 200 steps)

**Short Answer Questions:**

1.  **PM stepper motors** have rotors made of permanent magnets with alternating poles. **VR stepper motors** have rotors made of soft ferromagnetic material with teeth and no permanent magnets; they align to minimize magnetic reluctance.
2.  Half stepping offers **double the resolution** and **smoother operation** compared to full stepping because it alternates between energizing one and two windings, effectively halving the step angle.
3.  **Holding torque** is the maximum external torque that can be applied to the rotor shaft without causing it to move from its current position when the stator windings are energized.
4.  Hybrid stepper motors are popular because they combine the high torque of permanent magnet motors with the good resolution and speed of variable reluctance motors, offering a good balance of performance characteristics.
5.  Three common applications are: Printers, CNC machines, and Robotics.

**Calculations:**

1.  **Step Angle Calculation:**
    For hybrid stepper motors, the step angle is often related to the number of rotor teeth and the number of stator phases. A common formula for calculating step angle is:
    $\theta_s = \frac{360^\circ}{\text{Number of rotor teeth} \times \text{Number of stator phases}}$
    However, this formula is a simplification and can vary based on the specific pole and tooth arrangements. A more general understanding is that the number of rotor teeth is directly proportional to the resolution. If the rotor has 50 teeth and the stator has 4 phases, the number of steps per revolution is often determined by the number of rotor teeth multiplied by the number of phases in a specific sequence (e.g., for a 4-phase motor, you might have 400 steps per revolution for a 50-tooth rotor if it's designed appropriately).

    Let's re-evaluate the common formula for hybrid motors:
    For a hybrid stepper motor with $N_r$ rotor teeth and $N_p$ stator poles (or phase groups), the step angle is often given by:
    $\theta_s = \frac{360^\circ}{N_r \times N_p}$
    Where $N_p$ here refers to the number of times the rotor poles align with stator poles per full revolution of the stator's magnetic field. For a 2-phase motor, the number of stator poles is often considered to be 4 (two for each phase, in opposition).

    Let's assume a common design where the number of steps per revolution is directly proportional to the number of rotor teeth. If a motor has 50 rotor teeth, and a common step angle is 1.8 degrees (which corresponds to 200 steps/rev for a 50-tooth rotor), and the question mentions 4 phases, this suggests a higher resolution.

    A more accurate general formula for hybrid stepper motors relating step angle to rotor teeth ($N_r$) and stator phases ($N_{ph}$) is:
    Number of steps per revolution = $N_{ph} \times N_r$
    Step Angle ($\theta_s$) = $\frac{360^\circ}{N_{ph} \times N_r}$
    Given $N_r = 50$ and $N_{ph} = 4$ (assuming 4 distinct excitation states for a 4-phase motor),
    Step Angle ($\theta_s$) = $\frac{360^\circ}{4 \times 50} = \frac{360^\circ}{200} = 1.8^\circ$

    *Correction:* The wording "4 phases" might imply a 4-phase motor structure. However, the calculation of step angle for hybrid motors primarily depends on the number of rotor teeth and the number of rotor poles interacting with the stator poles at any given step. A common simplification for hybrid motors is to consider the effective number of stator poles created by the phases.

    Let's use the most common definition for hybrid stepper motors:
    $\theta_s = \frac{360^\circ}{N_r \times N_{stator\_poles}}$
    Where $N_{stator\_poles}$ is the effective number of stator poles. For a 2-phase motor, this is often 4. For a 4-phase motor, it can be higher.

    A typical hybrid motor with 50 rotor teeth often has a base step angle of 1.8 degrees (200 steps/rev). If the question implies a higher resolution due to 4 phases, it might be referring to a motor that achieves this by having more effective stator poles or a different internal configuration.

    Let's consider the typical calculation for a 2-phase hybrid motor:
    If $N_r = 50$, then Steps/rev = $N_r \times N_{stator\_poles}$. For a 2-phase motor, $N_{stator\_poles}$ is usually 4.
    Steps/rev = $50 \times 4 = 200$.
    $\theta_s = 360^\circ / 200 = 1.8^\circ$.

    If the question implies a 4-phase motor *design* where each phase has distinct poles, and assuming a standard relationship:
    Let's assume the number of steps per revolution is directly related to the number of rotor teeth, and the number of phases dictates the sequencing. For a typical 4-phase hybrid motor with 50 rotor teeth, the resolution is often 1.8 degrees. The "4 phases" usually refer to the number of windings that are sequentially energized or controlled.

    Let's assume the question implies that the motor has a structure that provides 4 distinct magnetic positions per rotor tooth, which would be the case if the number of stator poles is 4 times the number of phases, or if the phase arrangement itself leads to this. However, without more context on the "4 phases" in relation to pole count, using the standard formula for hybrid motors with rotor teeth is common.

    **Revised Calculation Approach (Common Hybrid Motor Formula):**
    Number of rotor teeth ($N_r$) = 50.
    For a typical hybrid stepper motor, the number of stator poles ($N_s$) is related to the number of phases and the rotor teeth. A common formula that yields standard step angles is:
    Number of steps per revolution = $N_r \times (\text{effective stator poles per phase})$
    And often, for a 2-phase motor, the effective stator poles is 4. If the motor is explicitly stated as 4-phase, and assuming the "4 phases" refer to distinct sets of windings that create 4 distinct positions for each rotor tooth, the calculation could be:
    Steps per revolution = $N_r \times N_{stator\_poles}$. If the "4 phases" implies 4 *effective* stator poles for the purpose of step calculation (which is common in 2-phase systems and can be extended conceptually), then:
    Steps per revolution = $50 \times 4 = 200$.
    Step Angle ($\theta_s$) = $\frac{360^\circ}{200} = 1.8^\circ$.

    If the question implies that the number of phases *directly* multiplies the rotor teeth for steps per revolution (which is less standard for basic step angle calculation but might be implied by "4 phases"), then:
    Steps per revolution = $N_r \times N_{phases}$ = $50 \times 4 = 200$.
    Step Angle ($\theta_s$) = $\frac{360^\circ}{200} = 1.8^\circ$.

    *Conclusion on Q1:* The most standard interpretation for a hybrid stepper motor with 50 rotor teeth, regardless of the number of phases (which primarily dictates the driving sequence and resolution enhancement like microstepping), leads to a step angle of 1.8°. The presence of "4 phases" is more relevant to the drive sequence and potential microstepping capabilities. If the question intended a different calculation, it would require a more specific definition of how "phases" affect the step angle in this context. Sticking to the common 1.8° for a 50-tooth rotor is the most likely correct answer based on industry standards.

    **Answer for Q1:** Step Angle = **1.8°**

2.  **Steps per 90° rotation:**
    Step Angle ($\theta_s$) = 7.5°
    Angle to rotate = 90°
    Number of steps = $\frac{\text{Angle to rotate}}{\text{Step Angle}}$
    Number of steps = $\frac{90^\circ}{7.5^\circ} = 12 \text{ steps}$

    **Answer for Q2:** **12 steps**

---

## Important Points to Remember

*   Stepper motors are **brushless** and rotate in **discrete steps**.
*   The working principle is based on **electromagnetic attraction** and **reluctance**.
*   The main types are **Permanent Magnet (PM)**, **Variable Reluctance (VR)**, and **Hybrid**.
*   **Hybrid stepper motors** offer the best combination of torque and resolution.
*   **Step angle** determines the resolution of the motor.
*   **Holding torque**, **pull-in torque**, and **pull-out torque** are critical performance parameters.
*   **Full stepping**, **half stepping**, and **microstepping** are different excitation modes that affect smoothness and resolution.
*   Stepper motors are ideal for applications requiring **precise positioning** in an **open-loop system**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
