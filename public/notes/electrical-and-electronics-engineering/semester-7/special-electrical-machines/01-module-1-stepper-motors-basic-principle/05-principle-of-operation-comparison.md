---
title: "principle of operation – comparison"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3689e"
status: "completed"
scrapedAt: "2026-05-23T16:39:27.277Z"
---
# Special Electrical Machines: Stepper Motors – Basic Principle

## Module 1: Stepper Motors – Basic Principle
### Topic: Principle of Operation – Comparison

**Learning Outcomes:**

*   Understand the fundamental principle of operation of stepper motors.
*   Differentiate between various types of stepper motors based on their construction and operation.
*   Appreciate the role of excitation and rotor movement in achieving precise angular steps.

**Course Outcomes Alignment:**

*   **CO1:** Explain the constructional details, working and drive circuits for various types of stepper motor. (Knowledge Level: K2) - This topic directly contributes to understanding the "working" aspect of various stepper motor types.

---

### 1. Introduction to Stepper Motors

Stepper motors are a type of brushless DC electric motor that divides a full rotation into a number of equal steps. The motor has no inherent "running" speed, but rather it "steps" from one position to the next. This characteristic makes them ideal for applications requiring precise positioning and speed control without the need for feedback sensors (open-loop control).

**Key Concepts:**

*   **Step Angle:** The angular displacement of the rotor for each step. It is calculated as:
    $$ \text{Step Angle} = \frac{360^\circ}{\text{Number of Steps per Revolution}} $$
*   **Steps per Revolution:** The total number of discrete positions the rotor can move to in one complete revolution.
*   **Holding Torque:** The torque exerted by the motor when it is stationary and energized, preventing the rotor from rotating unintentionally.
*   **Pull-in Torque:** The maximum torque at which the motor can start, stop, and reverse without losing steps at a given stepping rate.
*   **Pull-out Torque:** The maximum torque at which the motor can operate at a given stepping rate without losing steps.

---

### 2. Basic Principle of Operation

The operation of a stepper motor relies on the principle of **magnetic locking** and **sequential energization of stator windings**.

*   **Stator:** Contains multiple windings (phases) arranged around its periphery.
*   **Rotor:** Typically made of permanent magnets or ferromagnetic material with saliency (projecting poles).
*   **Mechanism:** When stator windings are energized in a specific sequence, they create magnetic poles. The rotor, being either a permanent magnet or a magnetically attracted structure, aligns itself with these stator poles to minimize the reluctance path or to align its magnetic poles. By sequentially switching the energization of the stator windings, the rotor is forced to move in discrete angular steps to follow the shifting magnetic field.

**Analogy:** Imagine a group of people holding hands in a circle, and a single person outside the circle wants to walk around. If the people in the circle sequentially let go and grab the hand of the person next to them, the person outside can be pulled along step by step.

---

### 3. Types of Stepper Motors and Their Principles of Operation

The classification of stepper motors is primarily based on the rotor construction and the method of excitation. We will compare the principles of operation of the most common types.

#### 3.1. Permanent Magnet (PM) Stepper Motors

*   **Construction:** The rotor is made of permanent magnets with alternating polarities arranged on its periphery. The stator has multiple windings.
*   **Principle of Operation:**
    *   The stator windings are energized sequentially.
    *   The magnetic field produced by the energized stator windings attracts or repels the permanent magnets on the rotor.
    *   The rotor moves to align its magnetic poles with the energized stator poles.
    *   By changing the sequence of stator winding energization, the rotor can be moved in precise angular steps.
*   **Example:** A simple 2-phase PM stepper motor. When Phase A is energized North-South, the rotor aligns. Then, if Phase B is energized North-South, the rotor moves to align with the new field.
*   **Textbook Reference:** Janardhan, E. G. (2014) discusses PM stepper motors in detail, focusing on their construction and the basic stepping action. Krishnan, R. (2016) also covers permanent magnet motor principles which are fundamental to PM steppers.

#### 3.2. Variable Reluctance (VR) Stepper Motors

*   **Construction:** The rotor is made of a ferromagnetic material (like soft iron) with teeth or salient poles. It is not magnetized. The stator also has salient poles with windings.
*   **Principle of Operation:**
    *   The rotor is designed such that its reluctance (magnetic resistance) varies with its angular position relative to the stator poles.
    *   When a stator winding is energized, it creates a magnetic field.
    *   The rotor, being made of ferromagnetic material, will move to a position where the magnetic flux path has the minimum reluctance. This means the rotor teeth align with the energized stator poles.
    *   By sequentially energizing different stator windings, the rotor is stepped from one minimum reluctance position to the next.
*   **Example:** Consider a VR motor with a 4-pole stator and a 4-tooth rotor. When a pair of stator poles is energized, the rotor aligns its teeth with these poles. Energizing an adjacent pair of stator poles then causes the rotor to step to align with the new poles.
*   **Textbook Reference:** Miller, T. J. E. (1989) provides extensive coverage of reluctance motors, including Variable Reluctance types, emphasizing the principle of minimizing reluctance. Janardhan, E. G. (2014) and Venkataratnam, K. (2008) also cover VR motors.

#### 3.3. Hybrid Stepper Motors

*   **Construction:** This is the most popular type of stepper motor. It combines features of both PM and VR motors.
    *   **Rotor:** Consists of a permanent magnet, magnetized along its axis to have north and south poles on opposite faces. Teeth are cut into the rotor pole faces, with each half of the rotor having a different tooth pattern. This creates two axially offset sets of teeth, corresponding to two phases.
    *   **Stator:** Has two or more phases, each with salient poles, and teeth are also cut into the stator poles.
*   **Principle of Operation:**
    *   The permanent magnet rotor provides a constant magnetic field.
    *   The stator windings create magnetic fields that interact with the rotor's permanent magnet.
    *   The teeth on the rotor and stator poles enhance the magnetic attraction and provide finer step angles. The rotor aligns itself to a position of minimum reluctance, and the permanent magnet contributes to holding torque and improved performance.
    *   Sequential energization of stator phases causes the rotor to step. The hybrid design allows for both high torque and small step angles.
*   **Example:** A common hybrid motor might have a 200-step per revolution resolution, meaning a step angle of $360^\circ / 200 = 1.8^\circ$. This is achieved through the combination of stator and rotor teeth and the permanent magnet.
*   **Textbook Reference:** All the textbooks (Janardhan, Venkataratnam, Vedanarayanan, Krishnan) provide significant detail on hybrid stepper motors as they are widely used. Vedanarayanan, V. (2021) likely offers a modern perspective on their drives.

#### 3.4. Synchronous Reluctance (SynRM) Motors (as a comparison point for understanding reluctance principles)

While not strictly stepper motors in the traditional sense of discrete stepping, understanding SynRM helps clarify the reluctance principle.

*   **Construction:** The rotor has no windings or permanent magnets. It is made of a laminated steel core with shaped air gaps (flux barriers) that create saliency. The stator windings are similar to those of an induction motor.
*   **Principle of Operation:**
    *   The stator produces a rotating magnetic field.
    *   The rotor, due to its saliency, aligns itself with the rotating magnetic field to achieve minimum reluctance.
    *   The rotor "locks" onto the rotating magnetic field and rotates at synchronous speed.
*   **Comparison to Stepper Motors:** SynRMs operate at synchronous speed and require AC excitation. Stepper motors operate in discrete steps and are typically driven by DC pulse sequences. However, the underlying principle of the rotor aligning to minimize reluctance is common to VR and Hybrid stepper motors and SynRMs.
*   **Textbook Reference:** Venkataratnam, K. (2008) and Miller, T. J. E. (1989) are key references for reluctance motors, including SynRM. CO2 specifically mentions synchronous reluctance motors.

---

### 4. Comparison of Stepper Motor Types

| Feature           | Permanent Magnet (PM) Stepper Motor | Variable Reluctance (VR) Stepper Motor | Hybrid Stepper Motor                                  |
| :---------------- | :---------------------------------- | :------------------------------------- | :---------------------------------------------------- |
| **Rotor Construction** | Permanent magnets with alternating poles | Ferromagnetic material with teeth/salient poles (no magnets) | Permanent magnet with axially offset teeth on pole faces |
| **Principle**     | Magnetic attraction/repulsion between stator poles and rotor magnets | Rotor aligns to minimize magnetic reluctance path      | Combination of magnetic attraction and reluctance alignment |
| **Torque**        | Moderate to high                    | Low to moderate                        | High (often the highest among the three)              |
| **Step Angle**    | Larger (e.g., $7.5^\circ$, $15^\circ$) | Smaller (e.g., $15^\circ$, $7.5^\circ$) | Smallest (e.g., $1.8^\circ$, $0.9^\circ$)             |
| **Efficiency**    | Moderate                            | Moderate                               | High                                                  |
| **Cost**          | Moderate                            | Low                                    | High                                                  |
| **Complexity**    | Moderate                            | Simple                                 | Complex                                               |
| **Holding Torque** | Good                                | Poor                                   | Excellent                                             |
| **Applications**  | Low-cost positioning, printers, scanners | Low-cost applications, where precision is not critical | High-precision positioning, CNC machines, robotics, automation |

**Important Points to Remember:**

*   **Rotor Type is Key:** The fundamental difference lies in the rotor construction: permanent magnets (PM), salient poles (VR), or a combination with permanent magnets and teeth (Hybrid).
*   **Reluctance Minimization:** The VR and Hybrid motors leverage the principle of aligning to a position of minimum magnetic reluctance.
*   **Step Angle:** Hybrid motors generally offer the smallest step angles, leading to higher resolution and smoother motion.
*   **Torque Characteristics:** Hybrid motors typically offer the best torque performance, especially at higher speeds.

---

### 5. Practice Questions and Exercises

**Question 1:** What is the primary distinguishing factor between a Permanent Magnet stepper motor and a Variable Reluctance stepper motor?

**Answer:** The primary distinguishing factor is the rotor construction. A PM stepper motor has a rotor made of permanent magnets, while a VR stepper motor has a rotor made of a toothed ferromagnetic material without permanent magnets.

**Question 2:** Explain the basic principle of operation of a hybrid stepper motor.

**Answer:** A hybrid stepper motor operates by sequentially energizing stator windings. The rotor, which has permanent magnets and teeth, aligns itself with the magnetic field produced by the stator. The interaction between the stator's magnetic field, the rotor's permanent magnet, and the toothed structure minimizes reluctance and ensures precise stepping.

**Question 3:** If a stepper motor has 50 steps per revolution, what is its step angle?

**Answer:**
Step Angle = $360^\circ$ / (Number of Steps per Revolution)
Step Angle = $360^\circ$ / 50
Step Angle = $7.2^\circ$

**Question 4:** Which type of stepper motor typically offers the highest torque and the smallest step angle?
    a) Permanent Magnet Stepper Motor
    b) Variable Reluctance Stepper Motor
    c) Hybrid Stepper Motor
    d) Synchronous Reluctance Motor

**Answer:** c) Hybrid Stepper Motor

**Question 5:** Describe how the rotor of a Variable Reluctance stepper motor moves.

**Answer:** The rotor of a VR stepper motor moves by aligning itself to a position where the magnetic flux path from the energized stator poles to the rotor has the minimum reluctance. This occurs when the rotor teeth align with the stator poles. By sequentially energizing different stator poles, the rotor is stepped to successive minimum reluctance positions.

---

This concludes the study notes for the "Principle of Operation – Comparison" topic in Module 1 of Special Electrical Machines. The focus has been on understanding the fundamental working principles and differentiating between the major types of stepper motors.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
