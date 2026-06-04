---
title: "two phase ON mode"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368a0"
status: "completed"
scrapedAt: "2026-05-23T16:39:30.567Z"
---
# Special Electrical Machines - Module 1: Stepper Motors – Basic Principle

## Topic: Two-Phase ON Mode

This document provides comprehensive study notes on the **Two-Phase ON Mode** of stepper motors, focusing on the fundamental principles as covered in Module 1 of Special Electrical Machines.

### 1. Introduction to Stepper Motors

Stepper motors are electromechanical devices that convert electrical pulses into discrete mechanical movements. They are known for their ability to rotate in precise, fixed angular steps, making them ideal for applications requiring accurate positioning and speed control.

**Key Concepts:**

*   **Stator:** The stationary part of the motor, typically containing windings that are energized sequentially.
*   **Rotor:** The rotating part of the motor, which can be a permanent magnet, a variable reluctance structure, or a hybrid of both.
*   **Steps:** The discrete angular increments through which the rotor moves upon energization of a specific winding.
*   **Step Angle:** The angle of rotation for each step. It is determined by the number of stator poles and rotor poles.
*   **Excitation Modes:** Different ways of energizing the stator windings to produce rotation. This topic focuses on the "Two-Phase ON" mode.

**Textbook References:**

*   **Janardhan, E. G. (2014).** *Special Electrical Machines*. PHI Learning Private Limited. (Likely covers basic stepper motor principles and excitation modes).
*   **Venkataratnam, K. (2008).** *Special Electrical Machines*. Universities Press. (Expected to detail different types and working principles, including excitation modes).

### 2. Understanding Two-Phase Stepper Motors

Two-phase stepper motors are a common type. They have two independent phases (sets of windings) on the stator. The operation of these motors relies on the sequential energization of these phases.

**Key Concepts:**

*   **Two-Phase Stator:** The stator consists of two distinct sets of coils, usually placed 90 electrical degrees apart.
*   **Rotor Alignment:** The rotor, with its magnetic poles (either permanent magnet or saliency poles), aligns itself with the magnetic field produced by the energized stator phases.

### 3. Two-Phase ON Mode of Operation

In the Two-Phase ON mode, **both phases of the stepper motor are energized simultaneously** to produce a specific rotor position. This mode aims to achieve a stronger magnetic torque and potentially higher holding torque compared to single-phase excitation.

**Working Principle:**

1.  **Phase A Energized:** The rotor aligns with the magnetic field produced by Phase A.
2.  **Phase B Energized:** The rotor aligns with the magnetic field produced by Phase B.
3.  **Phases A & B Energized (Two-Phase ON):** When both Phase A and Phase B are energized simultaneously, the stator produces a resultant magnetic field. The rotor will align itself to minimize the reluctance path or to align its poles with the net magnetic field. This typically results in the rotor being positioned at an angle that is a combination of the alignment positions for each phase individually.

**Illustration (Conceptual):**

Imagine a four-pole rotor and a stator with two phases, each having multiple poles.

*   **Step 1 (Phase A ON):** Rotor poles align with Phase A's magnetic field.
*   **Step 2 (Phase B ON):** Rotor poles align with Phase B's magnetic field.
*   **Step 3 (Phase A & B ON):** The rotor moves to a position where it is influenced by the combined magnetic fields of both phases. This position is often halfway between the positions achieved when only one phase is energized.

**Sequence of Energization for Rotation:**

To achieve continuous rotation, the phases are switched ON and OFF in a specific sequence. For a two-phase stepper motor operating in the Two-Phase ON mode, a typical sequence for one full step might involve:

*   **State 1:** Phase A ON, Phase B OFF (Rotor in position 1)
*   **State 2:** Phase A OFF, Phase B ON (Rotor in position 2)
*   **State 3:** Phase A ON, Phase B OFF (Rotor in position 3 - different polarity or winding)
*   **State 4:** Phase A OFF, Phase B ON (Rotor in position 4 - different polarity or winding)

However, the **Two-Phase ON mode refers to energizing BOTH phases simultaneously** for a particular step. This means the sequence will involve states where both phases have current flowing.

**Example Sequence for Two-Phase ON (often called "Full Stepping" or "Two-Phase ON"):**

Consider a simple two-phase motor with four stator poles per phase and a two-pole rotor.

| Step | Phase A | Phase B | Rotor Position (Example) |
| :--- | :------ | :------ | :----------------------- |
| 1    | ON (+ve) | OFF     | Aligned with A+          |
| 2    | ON (+ve) | ON (+ve) | Aligned between A+ and B+ |
| 3    | OFF     | ON (+ve) | Aligned with B+          |
| 4    | ON (-ve) | ON (+ve) | Aligned between B+ and A- |
| 5    | ON (-ve) | OFF     | Aligned with A-          |
| 6    | ON (-ve) | ON (-ve) | Aligned between A- and B- |
| 7    | OFF     | ON (-ve) | Aligned with B-          |
| 8    | ON (+ve) | ON (-ve) | Aligned between B- and A+ |

*   **Note:** The specific sequence and number of steps per revolution depend on the number of stator phases, the number of stator poles per phase, and the rotor construction. The terms "Phase A ON" or "Phase B ON" implies a specific polarity of current.

**Step Angle in Two-Phase ON Mode:**

When operating in Two-Phase ON mode, the rotor settles at a position that is typically halfway between the positions it would occupy if only one phase were energized. This means that if the step angle in the "one-phase ON" mode is $\alpha$, the step angle in the "two-phase ON" mode (achieved by switching between states where one phase is ON and states where both phases are ON) will also be $\alpha$. The "two-phase ON" state simply represents a different intermediate alignment position.

**CO Alignment:**

*   **CO1: Explain the constructional details, working and drive circuits for various types of stepper motor.**
    *   This section directly addresses the working principle of a specific type of stepper motor (two-phase) and a particular mode of operation (Two-Phase ON). While constructional details and drive circuits are not elaborated here, they are foundational to understanding this mode.

**Textbook References:**

*   **Miller, T. J. E. (1989).** *Brushless PM and Reluctance Motor Drives*. Clarendon Press, Oxford. (This book is highly likely to detail various stepping sequences and modes of operation for different stepper motor types, including the two-phase configuration).
*   **Krishnan, R. (2016).** *Permanent magnet synchronous and Brushless DC motor Drives*. CRC Press. (While focused on PMSM and BLDC, it might touch upon stepper motor principles as a related technology, especially for PM stepper motors).
*   **Vedanarayanan, V. (2021).** *A detailed study on Special Electrical Machines*. Notion Press. (Given its comprehensive title, it's expected to cover various stepper motor types and their operational modes in detail).

### 4. Advantages and Disadvantages of Two-Phase ON Mode

**Advantages:**

*   **Higher Torque:** Energizing both phases creates a stronger magnetic field, generally resulting in higher holding torque (the torque when the motor is stationary and energized) and detent torque (torque without excitation).
*   **Improved Stiffness:** The motor is more resistant to external forces trying to move it from its current position.
*   **Smoother Rotation (potentially):** Depending on the microstepping sequence, switching between one-phase ON and two-phase ON states can lead to smoother apparent rotation.

**Disadvantages:**

*   **Higher Power Consumption:** With both phases energized, the motor draws more current, leading to increased power consumption and heat generation.
*   **Reduced Efficiency:** The higher power consumption can lead to lower overall efficiency compared to single-phase ON modes, especially when the motor is lightly loaded.
*   **Complexity in Drive Circuits:** Drive circuits for switching between single-phase and two-phase ON states require more complex control logic.

### 5. Drive Circuits for Two-Phase ON Mode

The drive circuit's primary role is to control the current flowing into each phase winding in the correct sequence. For the Two-Phase ON mode, the drive circuit needs to be capable of:

*   Switching current ON and OFF to individual phases.
*   Controlling the polarity of the current in each phase (e.g., using H-bridges).
*   Sequencing the ON/OFF states of both phases to achieve the desired stepping motion.

**Typical Drive Circuit Components:**

*   **Microcontroller/Logic Controller:** Generates the pulse sequences to control the power switches.
*   **Power Transistors (e.g., MOSFETs, BJTs):** Act as electronic switches to direct current to the windings.
*   **H-Bridges:** A common configuration for controlling both the magnitude and direction of current in a winding. A two-phase stepper motor typically uses two H-bridges.
*   **Current Limiting Resistors (optional):** To protect windings from excessive current.

**Example Drive Sequence (Simplified):**

Let's consider a step sequence where we alternate between one-phase ON and two-phase ON for smoother motion (though the core of "two-phase ON mode" is having both phases active).

| State | Phase A Current | Phase B Current | Description        |
| :---- | :-------------- | :-------------- | :----------------- |
| 1     | +I              | 0               | Phase A ON         |
| 2     | +I              | +I              | **Phase A & B ON** |
| 3     | 0               | +I              | Phase B ON         |
| 4     | -I              | +I              | **Phase A & B ON** |
| 5     | -I              | 0               | Phase A ON         |
| 6     | -I              | -I              | **Phase A & B ON** |
| 7     | 0               | -I              | Phase B ON         |
| 8     | +I              | -I              | **Phase A & B ON** |

*   '+I' indicates current flowing in one direction, '-I' in the opposite.
*   '0' indicates no current.

The specific sequence depends on the number of phases and the desired step resolution. The key takeaway for **Two-Phase ON mode** is the presence of states where both phases are energized simultaneously.

**CO Alignment:**

*   **CO1: Explain the constructional details, working and drive circuits for various types of stepper motor.**
    *   This section highlights the importance of drive circuits and provides a conceptual understanding of how they enable the Two-Phase ON mode.

**Textbook References:**

*   **Janardhan, E. G. (2014).** *Special Electrical Machines*. PHI Learning Private Limited. (Likely has sections on drive circuits for stepper motors).
*   **Krishnan, R. (2016).** *Permanent magnet synchronous and Brushless DC motor Drives*. CRC Press. (While focusing on other types, the fundamental principles of driving brushless motors with H-bridges are relevant and may be discussed).

### 6. Key Points to Remember

*   **Two-Phase ON mode involves energizing both stator phases simultaneously.**
*   This mode generally provides **higher torque and stiffness** compared to single-phase excitation.
*   The primary **disadvantage is increased power consumption and heat generation.**
*   The rotor position in Two-Phase ON mode is typically an **intermediate alignment** between the positions achieved when individual phases are energized.
*   Drive circuits utilize **H-bridges** and appropriate control logic to switch phases ON and OFF with controlled polarity.
*   The sequence of energization determines the step angle and direction of rotation.

### 7. Practice Questions and Exercises

**Question 1:**

In the Two-Phase ON mode of a stepper motor, what is the primary characteristic of the stator winding excitation?

**Answer:** In the Two-Phase ON mode, both stator phases are energized simultaneously.

**Question 2:**

What are the main advantages of operating a stepper motor in the Two-Phase ON mode compared to a single-phase ON mode?

**Answer:** The main advantages are higher holding torque, improved stiffness, and potentially smoother operation when used in a stepping sequence.

**Question 3:**

What is a potential drawback of the Two-Phase ON mode of operation?

**Answer:** A significant drawback is increased power consumption and heat generation due to both phases being energized.

**Question 4:**

If a stepper motor has a step angle of 1.8 degrees in a "one-phase ON" stepping sequence, what would be the apparent step angle if we consider the switching between "one-phase ON" and "two-phase ON" states in a full-step sequence?

**Answer:** The apparent step angle would remain 1.8 degrees. The "two-phase ON" state provides an intermediate alignment position, but the fundamental step size dictated by the motor's pole configuration does not change.

**Exercise:**

Sketch a simple drive circuit for a two-phase stepper motor using H-bridges. Show how the microcontroller output signals would control the switches to achieve the "Phase A ON, Phase B ON" state.

**Answer Guidance:**

*   The sketch should depict two H-bridges, one for each phase winding.
*   Each H-bridge consists of four switches (e.g., MOSFETs).
*   The microcontroller would output signals to control the gate of these MOSFETs.
*   To achieve "Phase A ON, Phase B ON" with positive current (+I), the microcontroller would signal the switches to allow current to flow from left to right through both Phase A and Phase B windings. This involves turning ON the top-left and bottom-right switches of the Phase A H-bridge, and similarly for the Phase B H-bridge.

### 8. Conclusion

The Two-Phase ON mode is a crucial operational mode for stepper motors, offering enhanced torque and holding capabilities by simultaneously energizing both stator phases. While it leads to higher power consumption, understanding this mode is essential for selecting and implementing stepper motors in applications requiring precise positioning and robust torque performance. The correct design of drive circuits is paramount to effectively utilize this mode.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
