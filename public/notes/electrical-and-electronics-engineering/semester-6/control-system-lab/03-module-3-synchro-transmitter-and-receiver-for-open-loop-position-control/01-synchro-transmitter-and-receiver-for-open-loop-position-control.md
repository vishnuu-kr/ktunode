---
title: "Synchro Transmitter and Receiver for open loop position control."
subject: "CONTROL SYSTEM LAB"
module: "Module 3: Synchro Transmitter and Receiver for open loop position control."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36758"
status: "completed"
scrapedAt: "2026-05-23T16:25:04.498Z"
---
# CONTROL SYSTEM LAB

## Module 3: Synchro Transmitter and Receiver for Open Loop Position Control

### Topic: Synchro Transmitter and Receiver for Open Loop Position Control

---

### 1. Introduction to Synchros

Synchros are electromechanical devices used for **angular position sensing and transmission**. They operate on the principle of electromagnetic induction and are commonly used in control systems for tasks like:

*   **Remote indication of angular position:** Transmitting the angle of a shaft from one location to another.
*   **Position control:** Enabling a system to move to a specific angular position.
*   **Alignment of mechanical components.**

**Key Concept:** Synchros are essentially **transponders** that convert an input angular position into an electrical signal and vice-versa.

---

### 2. Synchro Components and Working Principle

A synchro system typically consists of two main components:

*   **Synchro Transmitter (TX):** The sensing element. Its rotor is coupled to the mechanical input shaft whose angle needs to be measured.
*   **Synchro Receiver (RX):** The indicating or actuating element. Its rotor indicates or controls the angular position.

#### 2.1. Synchro Transmitter (TX)

*   **Construction:**
    *   **Stator:** Has three windings placed 120 electrical degrees apart. These are typically designated as S1, S2, and S3.
    *   **Rotor:** A wound rotor with a single coil, connected to an AC excitation voltage (e.g., 115V, 60Hz). The rotor can be of salient pole or dumbbell type.
*   **Working:**
    1.  When an AC voltage ($V_{exc}$) is applied to the rotor, it produces a rotating magnetic field.
    2.  This magnetic field induces voltages in the stator windings.
    3.  The magnitude and polarity of the induced voltages in the stator windings are **dependent on the angular position of the rotor**.
    4.  For a rotor at angle $\theta$ with respect to a reference axis (e.g., the axis of winding S1), the voltages induced in the stator windings are approximately:
        *   $V_{S1-S2} \approx K \cdot V_{exc} \cdot \cos(\theta)$
        *   $V_{S2-S3} \approx K \cdot V_{exc} \cdot \cos(\theta - 120^\circ)$
        *   $V_{S3-S1} \approx K \cdot V_{exc} \cdot \cos(\theta - 240^\circ)$
        where $K$ is a constant related to the synchro design.

#### 2.2. Synchro Receiver (RX)

*   **Construction:** Similar to the transmitter, with a stator having three windings (S1, S2, S3) and a rotor. The rotor is often designed to be mechanically free to rotate.
*   **Working:**
    1.  The stator windings of the RX are connected to the corresponding stator windings of the TX through connecting wires.
    2.  The voltages applied to the RX stator windings are proportional to the rotor angle of the TX.
    3.  These voltages create a magnetic field in the RX stator.
    4.  The **rotor of the RX will align itself such that the magnetic flux linkage between the rotor and the stator is maximized**. This means the rotor of the RX will attempt to follow the angular position of the TX rotor.
    5.  The RX rotor is typically damped to prevent oscillations and provide smooth response.

**Reference:** Ogata, "Modern Control Engineering" (5th ed.), Chapter 11, discusses principles of synchros and their applications in control systems. Nise, "Control Systems Engineering" (5th ed.), Chapter 3, might touch upon synchros as sensors or actuators in system modeling.

---

### 3. Open Loop Position Control Using Synchros

In an open-loop system, the output is not fed back to the input for comparison. For position control using synchros:

*   **The Synchro Transmitter (TX)** is mechanically coupled to a **desired input position**.
*   **The Synchro Receiver (RX)** is mechanically coupled to an **actuator** (e.g., a motor) that drives the output shaft.
*   The TX and RX are wired together such that their stator windings are interconnected.

#### 3.1. System Configuration

```
+-------------------+       +-------------------+       +--------------------+       +--------------------+
| Desired Angle     |------>| Synchro Transmitter |------>| Connecting Wires   |------>| Synchro Receiver   |------> Output Shaft (e.g., driven by motor)
| (e.g., Potentiometer|       | (TX)              |       |                    |       | (RX)               |
| or Digital Encoder)|       +-------------------+       +--------------------+       +--------------------+
+-------------------+
```

**Explanation:**

1.  A desired angular position is set by positioning the rotor of the TX.
2.  The TX converts this angular position into a set of AC voltages applied to its stator windings.
3.  These AC voltages are transmitted via connecting wires to the stator windings of the RX.
4.  The RX, receiving these voltages, develops a magnetic field that causes its rotor to align with the angle represented by these voltages.
5.  The RX rotor's movement is used to directly drive or control an actuator (like a motor) to position the output shaft.

**Important Point:** In this open-loop configuration, there is **no feedback mechanism**. The system assumes that the RX will accurately follow the TX's position. Any external disturbances or inaccuracies in the actuator will not be corrected.

#### 3.2. Error Signal (Implicitly Handled by Synchro Interaction)

While not explicitly a separate block in an open-loop diagram, the "error" in a synchro pair is inherently managed by the RX's response.

*   If the TX rotor is at angle $\theta_{TX}$ and the RX rotor is at angle $\theta_{RX}$:
    *   The voltages applied to the RX stator are proportional to $\theta_{TX}$.
    *   The RX rotor will experience a torque that tries to align $\theta_{RX}$ with $\theta_{TX}$.
    *   The driving torque on the RX rotor is proportional to the difference ($\theta_{TX} - \theta_{RX}$).

**Mathematical Representation (Simplified):**

Let the voltages from the TX stator be:
$V_{S1} = K V_{exc} \cos(\theta_{TX})$
$V_{S2} = K V_{exc} \cos(\theta_{TX} - 120^\circ)$
$V_{S3} = K V_{exc} \cos(\theta_{TX} - 240^\circ)$

These voltages are applied to the RX stator windings. Assuming the RX rotor is at angle $\theta_{RX}$ and its voltage output is proportional to $\cos(\theta_{RX})$, the net torque on the RX rotor can be approximated as:

$T \propto \sum_{i=1}^3 V_{Si} \cdot V_{rotor,i}$

Where $V_{rotor,i}$ is the voltage induced in the RX rotor from stator winding $i$. This results in a torque proportional to $K' (\theta_{TX} - \theta_{RX})$.

**Reference:** Nagrath & Gopal, "Control Systems Engineering" (5th ed.), Chapter 1, introduces basic concepts of open-loop and closed-loop systems. While they may not detail synchros specifically in this chapter, the principle of open-loop control without feedback is clearly explained.

---

### 4. Lab Experiment: Synchro Transmitter and Receiver for Open Loop Position Control

#### 4.1. Objective

To demonstrate and analyze the operation of a synchro transmitter-receiver pair for open-loop angular position control.

#### 4.2. Equipment Required

*   Synchro Transmitter (TX) unit
*   Synchro Receiver (RX) unit
*   AC power supply (e.g., 115V, 60Hz)
*   Connecting wires
*   Protractor or angle measurement device
*   Variable AC voltage source (for RX excitation, if applicable)
*   Optional: Motor and gearbox to couple to the RX rotor.

#### 4.3. Procedure

1.  **Connections:**
    *   Connect the AC excitation supply to the rotor of the Synchro Transmitter (TX).
    *   Connect the stator windings (S1, S2, S3) of the TX to the corresponding stator windings of the Synchro Receiver (RX) using connecting wires.
    *   Ensure the RX rotor is free to rotate.
2.  **Initial Setup:**
    *   Set the TX rotor to a known initial position (e.g., 0 degrees).
    *   Note the initial position of the RX rotor.
3.  **Observation and Data Collection:**
    *   **Vary the angle of the TX rotor** from $0^\circ$ to $360^\circ$ in steps (e.g., $15^\circ$ or $30^\circ$).
    *   For each TX angle, **record the corresponding angle of the RX rotor**.
    *   **Optional:** If a motor is coupled to the RX, observe how the motor's position changes as the TX angle is varied.
4.  **Data Analysis:**
    *   Plot the RX rotor angle versus the TX rotor angle.

#### 4.3. Expected Results and Analysis

*   A plot of RX angle vs. TX angle should ideally show a near-linear relationship with a slope close to 1.
*   The RX rotor should follow the TX rotor's position with minimal lag or error, assuming ideal conditions.
*   Any deviation from a $1:1$ correspondence indicates system limitations or inaccuracies.

**Learning Outcome Mapping:**

*   **CO1 (Identify and conduct suitable experiments to determine the parameters to model a physical system):** By conducting this experiment, students can identify the synchro pair as a system and observe its input-output relationship (angle in vs. angle out). The slope of the recorded data can be considered a parameter representing the system's gain.
*   **CO2 (Conduct suitable experiments and determine the performance specifications):** The experiment helps determine the **tracking accuracy** of the synchro pair. Performance specifications like **resolution** (smallest detectable angle change) and **steady-state error** (difference between TX and RX angles at a steady position) can be inferred.
*   **CO3 (Analyse a linear continuous time system model using simulation tools):** While this experiment is physical, the data collected can be used to create a simplified model (e.g., a gain block representing the synchro pair) for simulation. The observed linearity can help justify a linear model.
*   **CO4 (Design suitable controllers/compensators to meet the performance requirements using simulation tools):** Although this module focuses on open-loop, understanding the inherent behavior of the synchro pair is the first step towards designing a closed-loop system. For example, if the open-loop system doesn't meet performance, one might later simulate adding a controller.

---

### 5. Key Concepts and Definitions

*   **Synchro:** Electromechanical device for transmitting angular position.
*   **Synchro Transmitter (TX):** Sensing synchro whose rotor position is controlled.
*   **Synchro Receiver (RX):** Indicating or actuating synchro whose rotor follows the TX.
*   **Open-Loop Control:** A control system where the output is not fed back to influence the input. The system operates based on a pre-determined input without knowledge of the actual output.
*   **Rotor Excitation:** AC voltage applied to the TX rotor.
*   **Stator Windings:** Three windings on the synchro's stationary part, typically 120 electrical degrees apart.
*   **Angular Position:** The angle of the mechanical shaft coupled to the synchro rotor.
*   **Torque:** The rotational force generated by the synchro receiver to align its rotor.

---

### 6. Potential Issues and Considerations

*   **Mismatch in Excitation Voltage:** Incorrect AC excitation voltage can affect the strength of the magnetic field and thus the torque and accuracy.
*   **Wire Resistance/Impedance:** Long connecting wires can introduce voltage drops and phase shifts, affecting accuracy.
*   **Friction and Inertia:** Mechanical friction in the RX rotor and coupled load, as well as inertia, can limit the system's response speed and accuracy.
*   **Stray Magnetic Fields:** External magnetic fields can interfere with the synchro's operation.
*   **Harmonics in AC Supply:** Can introduce non-linearities.
*   **Backlash:** Mechanical play in gears coupled to the RX rotor.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle of operation of a synchro transmitter and receiver. How does the voltage induced in the stator windings of a transmitter vary with the rotor position?

**Answer:**
A synchro transmitter (TX) has a wound rotor that is excited by an AC voltage. This creates a rotating magnetic field. The stator of the TX has three windings placed 120 electrical degrees apart. The magnetic field induces voltages in these stator windings, with the magnitude and polarity of these voltages being directly dependent on the angular position of the rotor. For a rotor at angle $\theta$, the voltages in the stator windings are approximately proportional to $\cos(\theta)$, $\cos(\theta - 120^\circ)$, and $\cos(\theta - 240^\circ)$.

A synchro receiver (RX) has a similar stator, and its stator windings are connected to the TX's stator windings. The voltages received by the RX stator create a magnetic field, and the RX rotor aligns itself to maximize magnetic flux linkage, thus following the angular position of the TX rotor.

**Question 2:**
In an open-loop position control system using a synchro pair, what is the role of the synchro transmitter and the synchro receiver?

**Answer:**
In an open-loop position control system:
*   The **Synchro Transmitter (TX)** is mechanically coupled to the **desired input position**. It acts as the sensor, converting the desired angular position into a set of electrical signals (voltages).
*   The **Synchro Receiver (RX)** is mechanically coupled to the **output shaft** (often through an actuator like a motor). It receives the electrical signals from the TX and converts them back into an angular position, driving the output shaft to match the desired input position.

**Question 3:**
If the TX rotor is set to $90^\circ$ and the RX rotor is at $85^\circ$, what would be the primary force acting on the RX rotor in a synchro system?

**Answer:**
The primary force acting on the RX rotor would be a **torque** that attempts to align it with the TX rotor's position. This torque is proportional to the angular difference between the transmitter and the receiver (i.e., $\theta_{TX} - \theta_{RX}$). Since $\theta_{TX} > \theta_{RX}$, the torque would be in a direction to increase $\theta_{RX}$ to match $\theta_{TX}$.

**Question 4:**
What is the main disadvantage of an open-loop position control system compared to a closed-loop system?

**Answer:**
The main disadvantage of an open-loop system is its **lack of feedback**. It cannot detect or correct for errors caused by external disturbances (like load variations, friction, or inaccuracies in the actuator). If the RX or its driven mechanism doesn't move exactly as intended, the system has no way of knowing and correcting this deviation.

**Exercise:**
Imagine you perform the experiment and collect the following data:

| TX Angle (degrees) | RX Angle (degrees) |
| :----------------- | :----------------- |
| 0                  | 1                  |
| 45                 | 44                 |
| 90                 | 92                 |
| 135                | 133                |
| 180                | 181                |
| 225                | 224                |
| 270                | 273                |
| 315                | 314                |
| 360                | 1                  |

Plot this data. What can you infer about the accuracy and linearity of the synchro pair from this data?

**Answer (for Exercise):**
Plotting this data would show a relationship that is very close to linear, with the RX angle closely tracking the TX angle. The errors observed (1, -1, 2, -2, 1, -1, 3, -1 degrees) are relatively small, indicating good accuracy. The deviation at $360^\circ$ to $1^\circ$ is expected due to the cyclic nature of angular measurements. The data suggests a system with a gain close to 1 and good linearity over the observed range. The accuracy is within a few degrees, which might be acceptable for some applications but would require further analysis or compensation for high-precision tasks.

---

### 8. Important Points to Remember

*   Synchros convert angular position to electrical signals and vice-versa using AC excitation.
*   Open-loop control means no feedback. The output is not monitored to correct errors.
*   In a synchro pair, the RX rotor attempts to follow the TX rotor's position.
*   The effectiveness of open-loop synchro control relies heavily on the inherent accuracy and stability of the synchro pair and the driven mechanism.
*   Understand the limitations of open-loop systems for applications requiring high precision or robustness to disturbances.

---

This module provides a foundational understanding of synchros and their application in a simple open-loop configuration. It lays the groundwork for more complex control system analyses and designs in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
