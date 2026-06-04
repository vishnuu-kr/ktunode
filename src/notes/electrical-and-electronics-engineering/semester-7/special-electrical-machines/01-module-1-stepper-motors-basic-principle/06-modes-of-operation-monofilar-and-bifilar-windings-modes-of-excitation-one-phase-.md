---
title: "modes of operation – monofilar and bifilar windings – modes of excitation – one phase ON mode"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3689f"
status: "completed"
scrapedAt: "2026-05-23T16:39:29.096Z"
---
# Special Electrical Machines: Stepper Motors - Basic Principle

## Module 1: Stepper Motors – Basic Principle

### Topic: Modes of Operation, Windings, Excitation Modes, and One-Phase ON Mode

This module introduces the fundamental concepts of stepper motors, focusing on their operating principles, winding configurations, and different excitation strategies, with a particular emphasis on the one-phase ON mode.

---

### 1. Introduction to Stepper Motors

Stepper motors are a type of brushless DC electric motor that divides a full rotation into a number of equal steps. The motor has no internal feedback mechanisms to confirm whether it reached its position. Therefore, external counting circuitry is necessary to control its position precisely. They are also known as **digital motors** because they move in discrete steps.

**Key Concepts:**

*   **Discrete Steps:** The motor rotates in fixed angular increments.
*   **Open-loop Control:** Position is controlled by counting the number of pulses sent to the motor, without feedback.
*   **Holding Torque:** The ability of the motor to resist external torque when stationary.
*   **Synchronous Operation:** The motor rotates in synchronism with the input pulse train.

**Applications:**
Stepper motors are widely used in applications requiring precise positioning and controlled movement, such as:
*   Printers (paper feed, print head movement)
*   Robotics
*   CNC machines
*   Scanners
*   Disk drives
*   Camera lens focusing and zooming

---

### 2. Modes of Operation

Stepper motors can operate in different modes, primarily distinguished by how the stator windings are energized. These modes affect the stepping resolution, torque, and speed characteristics of the motor. The main modes of operation are:

#### 2.1. Full-Step Mode

In this mode, two stator phases are energized simultaneously, resulting in the highest torque and speed for the motor. This mode provides the highest resolution for a given motor construction.

*   **How it works:** Energizing two adjacent phases creates a magnetic field that aligns the rotor with the intermediate position between the two energized phases.
*   **Advantages:** Highest torque, highest speed, simpler drive circuitry.
*   **Disadvantages:** Can lead to vibrations and resonance at certain speeds.

#### 2.2. Half-Step Mode

This mode provides double the resolution of full-step mode by energizing one phase at a time, then two phases, and so on.

*   **How it works:** The rotor moves to the position aligned with the energized phase, then to the position midway between two energized phases. This alternates between single-phase and two-phase excitation.
*   **Advantages:** Double the resolution, smoother rotation compared to full-step, reduced resonance issues.
*   **Disadvantages:** Lower torque compared to full-step mode.

#### 2.3. Microstepping Mode

This is an advanced mode where the current in the stator phases is controlled to produce a sinusoidal or quasi-sinusoidal current waveform. This allows the rotor to move to positions between the discrete steps defined by the motor's physical construction.

*   **How it works:** By varying the current in each phase proportionally to the sine and cosine of the desired rotor position, the magnetic field can be rotated smoothly, effectively dividing each step into many smaller microsteps.
*   **Advantages:** Very smooth operation, high resolution, reduced noise and vibration, improved torque linearity.
*   **Disadvantages:** Requires more complex drive circuitry and microcontrollers.

---

### 3. Monofilar and Bifilar Windings

The winding configuration of a stepper motor significantly influences its operation, particularly in terms of power dissipation and driving requirements.

#### 3.1. Monofilar Windings

*   **Description:** In a monofilar winding, each phase winding consists of a single set of wires. Each end of the winding is brought out for connection to the drive circuit.
*   **Construction:** A single coil is wound for each phase.
*   **Driving:** To reverse the direction of magnetic flux in a phase, the polarity of the voltage applied to the winding needs to be reversed. This requires an H-bridge driver for each phase.
*   **Power Dissipation:** Generally higher power dissipation as the current must be switched off completely and then reversed.
*   **Reference:** Discussed in detail in *Special Electrical Machines* by K. Venkataratnam.

#### 3.2. Bifilar Windings

*   **Description:** In a bifilar winding, each phase winding consists of two separate, identical coils wound side-by-side on the same stator pole. Each coil has its own two terminals.
*   **Construction:** Two coils per phase, wound together.
*   **Driving:** The two coils of a bifilar winding are connected in series or parallel. For a simple two-wire per phase drive, the two coils of a phase are connected in series, but with opposite polarity. This means that to reverse the flux, one simply reverses the voltage across the entire winding. However, for driving with an H-bridge, the two coils can be used independently. A common method is to connect the two coils in series with opposite polarity. This allows for simpler drive circuits (e.g., unipolar drives) where current switching to zero and then to the opposite polarity is not required; instead, the voltage is simply reversed.
    *   **Unipolar Drive:** One common application where bifilar windings simplify the drive. One coil of the phase is energized in one direction, and the other coil is energized in the opposite direction.
    *   **Bipolar Drive:** Bifilar windings can also be used in bipolar drives, offering more flexibility.
*   **Power Dissipation:** Can potentially have lower power dissipation in unipolar drive configurations compared to monofilar drives due to simpler current control.
*   **Reference:** Discussed in *Brushless PM and Reluctance Motor Drives* by T. J. E. Miller, highlighting their suitability for simpler drive circuits. Also covered in *Special Electrical Machines* by E. G. Janardhan.

**Example:**
Consider a four-phase stepper motor.
*   **Monofilar:** Each phase has one coil. To reverse the magnetic field of phase A, the current direction in its single coil must be reversed.
*   **Bifilar:** Each phase has two coils (A1, A2). In a unipolar drive configuration, if A1 is energized with current flowing from terminal 1 to 2, then A2 might be energized from terminal 4 to 3 (if terminals are 1-2 for A1 and 3-4 for A2). This effectively creates opposing magnetic fields within the same pole.

---

### 4. Modes of Excitation

The way the stator windings are energized is referred to as the mode of excitation. This directly impacts how the rotor aligns and therefore how the motor steps. The primary modes of excitation are:

#### 4.1. Unipolar Excitation

*   **Description:** In unipolar excitation, the current flows in only one direction through each phase winding. To reverse the magnetic polarity of a phase, the current is switched off and then switched on in the opposite direction in the *other* coil of a bifilar winding or by reversing the voltage across a monofilar winding by means of a full H-bridge. For a bifilar winding, the two coils of a phase are connected such that when current flows through one coil, it creates a magnetic field, and when current flows through the other coil (in the same direction in terms of polarity, but through the opposite coil), it creates a magnetic field in the same direction.
*   **How it works (Bifilar):** The two coils of a phase are connected in series and configured so that energizing one coil generates a magnetic field. Energizing the second coil generates a magnetic field in the same direction. This requires simple switching from one coil to another.
*   **How it works (Monofilar):** Requires an H-bridge to reverse the current direction.
*   **Advantages:** Simpler drive electronics (e.g., using simpler switching transistors like MOSFETs or BJTs).
*   **Disadvantages:** Lower torque compared to bipolar excitation because only half of the winding's magnetomotive force (MMF) is utilized at any given time (when using bifilar windings with a specific connection). Or, if using monofilar, the complexity of an H-bridge is needed.
*   **Reference:** *Special Electrical Machines* by E. G. Janardhan and *Permanent magnet synchronous and Brushless DC motor Drives* by R. Krishnan cover unipolar drives.

#### 4.2. Bipolar Excitation

*   **Description:** In bipolar excitation, the current can flow in both directions through each phase winding. This allows for maximum utilization of the winding's MMF.
*   **How it works:** Each phase winding is driven by an H-bridge. The H-bridge allows the current to be switched on in one direction, switched off, and then switched on in the opposite direction.
*   **Advantages:** Higher torque and efficiency compared to unipolar excitation because the full MMF of the winding is utilized.
*   **Disadvantages:** Requires more complex drive electronics (full H-bridges for each phase).
*   **Reference:** This is a common mode covered in all the mentioned textbooks, including *Brushless PM and Reluctance Motor Drives* by T. J. E. Miller.

---

### 5. One-Phase ON Mode

This is a specific type of excitation mode, typically implemented within the full-step or half-step operating modes. It refers to a sequence where only one stator phase winding is energized at any given moment to move the rotor.

*   **Description:** In this mode, the motor advances one step by energizing one stator phase winding at a time.
*   **How it works:**
    1.  Phase A is energized, aligning the rotor.
    2.  Phase A is de-energized, and Phase B is energized, causing the rotor to move to the next position.
    3.  Phase B is de-energized, and Phase C is energized, and so on.
*   **Stepping Sequence (Example for a 4-phase motor):**
    *   Step 1: Energize Phase A
    *   Step 2: Energize Phase B
    *   Step 3: Energize Phase C
    *   Step 4: Energize Phase D
    *   Repeat sequence A, B, C, D...
*   **Resolution:** This mode typically corresponds to the lower resolution stepping found in simpler applications or basic stepper motor configurations. For a motor with 50 poles, this mode would result in $360^\circ / 50 = 7.2^\circ$ per step.
*   **Torque:** Generally produces the lowest torque among the common stepping modes because only one phase's magnetic field is actively pulling the rotor at any point.
*   **Advantages:** Simplest drive circuit requirement, as only one phase needs to be switched at a time.
*   **Disadvantages:** Lowest torque, lowest resolution for a given motor.
*   **Relation to other modes:** The "one-phase ON" strategy is a fundamental stepping sequence. Full-step and half-step modes build upon this by energizing multiple phases simultaneously or in specific combinations to achieve higher torque and resolution. For example, full-step mode usually involves energizing two phases simultaneously, and half-step alternates between one-phase ON and two-phase ON.

**Important Point to Remember:** The "One-Phase ON" mode is a *driving strategy* that can be applied within broader operational modes like full-step or half-step, but it is most distinctly characterized by energizing only one phase at a time.

**Reference:** This mode is fundamental to understanding the basic stepping sequence of stepper motors and is implicitly or explicitly discussed in the context of starting sequences in books like *Special Electrical Machines* by K. Venkataratnam.

---

### 6. Alignment with Course Outcomes (COs)

*   **CO1: Explain the constructional details, working and drive circuits for various types of stepper motor.**
    *   This topic directly addresses the "working" and "drive circuits" aspects by explaining modes of operation (full-step, half-step, microstepping) and excitation modes (unipolar, bipolar). The discussion on monofilar and bifilar windings also touches upon constructional details and how they influence drive circuits. The "one-phase ON" mode explains a basic working principle and drive sequence.
*   **CO2: Explain the constructional details, working and drive circuits for switched and synchronous reluctance motor.**
    *   While this topic is primarily about stepper motors, the understanding of basic magnetic principles and excitation modes (like energizing phases to create magnetic fields) is foundational and can be related to reluctance motors. However, the direct focus is stepper motors.
*   **CO3: Explain the constructional details, working and drive circuits for brushless DC motor and permanent magnet synchronous motor.**
    *   Stepper motors are a type of brushless DC motor. The concepts of phase energization, commutation (albeit electronic in stepper motors), and magnetic field generation are common to these motor types. Understanding stepper motor operation provides a basis for understanding PMDC and PMSM drives.
*   **CO4: Explain the constructional details and working of linear induction motor.**
    *   The principles of creating travelling magnetic fields by sequential phase energization are common to both rotary and linear motors.
*   **CO5: Explain the constructional details and working of single-phase special electrical machines.**
    *   Stepper motors are a type of special electrical machine. Understanding their single-phase operation (in terms of energizing one phase at a time) and winding types (monofilar/bifilar) contributes to this broader CO.

---

### 7. Key Points to Remember

*   Stepper motors move in discrete steps, controlled by pulse sequences.
*   **Full-step mode:** High torque/speed, simpler, can cause vibration.
*   **Half-step mode:** Double resolution, smoother, lower torque than full-step.
*   **Microstepping:** Very smooth, high resolution, complex drive.
*   **Monofilar windings:** Single coil per phase, requires polarity reversal for flux change.
*   **Bifilar windings:** Two coils per phase, can simplify unipolar drives.
*   **Unipolar excitation:** Current in one direction per phase, simpler drive, lower torque.
*   **Bipolar excitation:** Current in both directions per phase, complex drive, higher torque.
*   **One-Phase ON mode:** Basic stepping sequence energizing only one phase at a time, lowest torque and resolution.
*   The choice of winding type and excitation mode impacts the required drive circuit complexity and motor performance.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary characteristic that distinguishes a stepper motor from a DC motor?
**Answer:** The ability of a stepper motor to divide a full rotation into a number of equal discrete steps, allowing for precise open-loop positional control.

**Question 2:** In which mode of operation would you expect the stepper motor to produce the highest torque?
**Answer:** Full-step mode.

**Question 3:** How does a bifilar winding differ from a monofilar winding in a stepper motor?
**Answer:** A monofilar winding has a single coil per phase, while a bifilar winding has two coils wound side-by-side on each stator pole for that phase.

**Question 4:** What is a key advantage of bipolar excitation over unipolar excitation?
**Answer:** Bipolar excitation utilizes both directions of current flow in the phase windings, leading to higher torque and efficiency.

**Question 5:** If a stepper motor has a step angle of $7.5^\circ$ in full-step mode, how many steps would it take to complete one revolution? What would be the step angle in half-step mode?
**Answer:**
*   To complete one revolution ($360^\circ$): $360^\circ / 7.5^\circ/\text{step} = 48$ steps.
*   In half-step mode, the resolution doubles, so the step angle would be half of the full-step angle: $7.5^\circ / 2 = 3.75^\circ$.

**Question 6:** Briefly explain the "one-phase ON" mode of operation. What are its main advantages and disadvantages?
**Answer:** In the one-phase ON mode, only one stator phase winding is energized at any given time to move the rotor to the next step position.
*   **Advantages:** Simplest drive circuit.
*   **Disadvantages:** Lowest torque and lowest resolution for a given motor construction compared to other modes like full-step or half-step.

---

This concludes Module 1: Stepper Motors – Basic Principle, covering modes of operation, winding types, excitation modes, and the one-phase ON mode.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
