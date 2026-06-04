---
title: "Error study of the synchro transmitter and receiver pair as a simple open loop position control in Direct mode and Differential mode."
subject: "CONTROL SYSTEM LAB"
module: "Module 3: Synchro Transmitter and Receiver for open loop position control."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3675b"
status: "completed"
scrapedAt: "2026-05-23T16:25:06.734Z"
---
# CONTROL SYSTEM LAB - Module 3: Synchro Transmitter and Receiver for Open Loop Position Control

## Topic: Error Study of Synchro Transmitter and Receiver Pair in Direct and Differential Modes

This module focuses on understanding the performance of synchro systems as simple open-loop position controllers. We will conduct an error study in both Direct and Differential modes to analyze their behavior and identify their limitations.

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   **Understand the basic principles of synchro transmitter and receiver operation.** (Relates to CO1)
*   **Implement synchro systems in both direct and differential modes for open-loop position control.** (Relates to CO1, CO2)
*   **Analyze the output error of the synchro pair under varying input conditions.** (Relates to CO2)
*   **Compare the performance of synchro systems in direct and differential modes.** (Relates to CO2)
*   **Identify factors affecting the accuracy and performance of synchro-based position control.** (Relates to CO2)
*   **Relate the experimental findings to the theoretical concepts discussed in control system literature.** (Relates to CO1, CO2)

---

### 1. Introduction to Synchros

Synchros are electromechanical devices used for angular position sensing and transmission. They operate on the principle of electromagnetic induction and are commonly used in control systems for remote indication of angular position.

*   **Key Components:**
    *   **Synchro Transmitter (TX):** The input device that converts an angular position into an electrical signal.
    *   **Synchro Receiver (TR):** The output device that converts the electrical signal back into an angular position.
    *   **Synchro Control Transformer (TC):** Similar to a receiver but with a different winding configuration, often used for error detection.

*   **Working Principle:**
    *   The **Primary Winding (Stator)** of the TX is connected to an AC excitation voltage.
    *   The **Secondary Windings (Stator)** of both TX and TR are connected to each other via three wires.
    *   The **Rotor Winding (Rotor)** of the TR is connected to the output shaft.
    *   When the TX rotor is at a specific angle, it induces voltages in its stator windings. These voltages are transmitted to the TR stator windings.
    *   The relative orientation between the TX rotor and TR rotor determines the voltage difference across the TR windings, which in turn drives the TR rotor to align with the TX rotor's position.

*   **Reference:** Ogata, "Modern Control Engineering," Chapter 2 (System modeling) might indirectly touch upon electromechanical transducers and their role in representing physical systems, which synchros are. Nise, "Control Systems Engineering," Chapter 1 (Introduction to Control Systems) will likely cover basic sensor concepts.

---

### 2. Synchro Operation Modes for Position Control

Synchro pairs can be configured in two primary modes for position control:

#### 2.1. Direct Mode

In this mode, the synchro transmitter (TX) directly controls the synchro receiver (TR). The output of the TX is used to drive the TR to the same angular position. This forms a simple open-loop position control system.

*   **System Configuration:**
    *   TX rotor is driven to a desired angle (setpoint).
    *   TX stator windings are connected to TR stator windings.
    *   TR rotor is coupled to an output mechanism.
    *   The TR rotor will attempt to follow the angular position of the TX rotor.

*   **Open-Loop Control:** There is no feedback from the output shaft of the TR back to the TX or any controller. The system relies solely on the inherent behavior of the synchro pair to achieve the desired position.

*   **Example Application:** Indicating a remote angle on a display. If you rotate the shaft of a synchro transmitter, the shaft of a synchro receiver will rotate to the same angle.

*   **Reference:** While specific sections on synchro modes might not be prominent, concepts of open-loop control and electromechanical transducers are covered in introductory chapters of all listed textbooks.

#### 2.2. Differential Mode

In differential mode, a synchro transmitter (TX) and a synchro control transformer (TC) are used together to generate an error signal. This error signal is then typically used to drive a motor that controls a second synchro transmitter (TX2), which then drives a receiver (TR). However, for a *simple open-loop position control* error study, we can simplify this by considering the difference in angles between two synchro transmitters and observing the output of a receiver driven by one of them. A more direct application for error study in an open-loop setting involves understanding how the difference between the input angle and the output angle arises.

Let's consider a scenario where we use two synchro transmitters:
*   **TX1:** Represents the desired position (setpoint).
*   **TX2:** Represents the actual position, which we want to control.

For a basic error study in an open-loop context, we'll focus on the inherent error of a TX-TR pair in direct mode. The "differential mode" in this context might refer to how errors can be *derived* by comparing two synchro outputs, or more commonly, how a control transformer is used in conjunction with a transmitter to produce an error signal for closed-loop control. For the purpose of *error study of the synchro transmitter and receiver pair as a simple open loop position control*, the "differential mode" aspect is likely referring to situations where you are interested in the *difference* between the input angle and the output angle, and how this difference (the error) behaves.

**A more practical interpretation for an open-loop error study in "differential mode" without a full closed-loop system:**

*   **System Configuration:**
    *   **TX1 (Setpoint):** Rotor driven to a desired angle $\theta_{ref}$.
    *   **TR (Output):** Connected to the stator windings of TX1. Its rotor's angle is $\theta_{out}$.
    *   **Error Measurement:** The error is the difference between the angle of TX1 and the angle of TR: $\theta_{error} = \theta_{ref} - \theta_{out}$. In an open-loop system, this error is not actively corrected. We are studying how this error arises due to the characteristics of the synchro pair.

*   **How "Differential" Aspect Comes In (Simplified for Open Loop Study):** The fundamental output of a synchro pair is a voltage that is proportional to the sine of the angular difference between the transmitter and receiver rotors. This voltage itself represents the "error" or deviation.
    *   When the TX rotor is at angle $\theta_{TX}$ and the TR rotor is at angle $\theta_{TR}$, the voltage induced in one of the TR stator windings (relative to the reference winding) is approximately proportional to $\sin(\theta_{TX} - \theta_{TR})$.
    *   This voltage is the error signal that would normally drive a motor to reduce the difference. In our open-loop study, we are measuring and analyzing this signal.

*   **Reference:** Nagrath & Gopal, "Control Systems Engineering," may have sections on transducers and their limitations, including error sources. Dorf & Bishop, "Modern Control Systems," also provides a broad overview of system components.

---

### 3. Error Study Methodology

The core of this topic is to quantify the "error" in the synchro pair's ability to reproduce the transmitted angle.

#### 3.1. Defining Error

In an open-loop synchro system, the primary error is the **angular error** between the position indicated by the transmitter and the position indicated by the receiver.

*   **Angular Error ($\theta_{error}$):** The difference between the input shaft angle ($\theta_{in}$) of the transmitter and the output shaft angle ($\theta_{out}$) of the receiver.
    *   $\theta_{error} = \theta_{in} - \theta_{out}$

#### 3.2. Experimental Setup

1.  **Synchro Pair:** A synchro transmitter (TX) and a synchro receiver (TR).
2.  **Excitation Source:** An AC voltage source to excite the TX primary winding.
3.  **Angular Measurement Devices:**
    *   For TX input: A protractor or rotary encoder attached to the TX shaft.
    *   For TR output: A protractor or rotary encoder attached to the TR shaft.
4.  **Error Measurement Device:** A voltmeter to measure the voltage output from the TR, which is proportional to the error, or by directly comparing the angular readings of the TX and TR shafts.

#### 3.3. Procedure

**A. Direct Mode Error Study:**

1.  **Connect the Synchro Pair:** Connect the stator windings of the TX to the stator windings of the TR. Connect the AC excitation source to the TX primary winding.
2.  **Set Initial Conditions:** Ensure both TX and TR shafts are at their zero-degree position (reference).
3.  **Vary Input Angle ($\theta_{in}$):**
    *   Manually rotate the TX shaft to various known angles ($\theta_{in}$), e.g., 0°, 15°, 30°, 45°, 60°, 90°, 120°, 180°, etc.
    *   For each input angle, allow the TR to settle.
4.  **Measure Output Angle ($\theta_{out}$):** Record the corresponding angle of the TR shaft ($\theta_{out}$).
5.  **Calculate Angular Error:** For each input angle, calculate the error: $\theta_{error} = \theta_{in} - \theta_{out}$.
6.  **Optional: Measure Error Voltage:** The TR has a voltage output that is proportional to the error. Measure this voltage using a voltmeter. This voltage is often proportional to $\sin(\theta_{error})$.

**B. Differential Mode (Conceptual for Open Loop Error Study):**

As discussed, in a simple open-loop error study, "differential mode" focuses on the inherent error signal generated. The procedure is essentially the same as the Direct Mode, but the *interpretation* shifts to analyzing the error voltage.

1.  **Same Setup:** Use the TX-TR pair as in Direct Mode.
2.  **Vary Input Angle ($\theta_{in}$):** Rotate the TX shaft to various angles.
3.  **Measure Error Voltage:** Instead of (or in addition to) measuring $\theta_{out}$ directly, measure the AC voltage output from the TR's rotor or a specific pair of stator windings. This voltage is proportional to the sine of the angular error.
4.  **Calculate Angular Error (from voltage):** If the relationship between error voltage and angular error is known (e.g., $V_{error} = K_E \sin(\theta_{error})$), calculate the angular error from the measured voltage.
5.  **Plotting:** Plot the measured $\theta_{error}$ (or $\theta_{out}$) against $\theta_{in}$. Also, plot $V_{error}$ against $\theta_{in}$.

#### 3.4. Sources of Error in Synchros

Understanding these sources is crucial for the "error study."

*   **Rotor Windings Mismatch:** Imperfections in the winding distribution of the TX and TR rotors can lead to variations in the induced voltages.
*   **Stator Windings Mismatch:** Non-uniform distribution of windings on the stator can cause inaccuracies.
*   **Harmonics:** The AC excitation voltage might contain harmonics, which can affect the linearity of the synchro output.
*   **Friction and Inertia:** Mechanical friction in the TR rotor and its coupling, as well as its inertia, can cause the TR to lag behind the TX, especially at higher speeds or with varying loads.
*   **Excitation Voltage Variations:** Changes in the AC excitation voltage amplitude or frequency can alter the induced voltages and thus the accuracy.
*   **Temperature Effects:** Variations in ambient temperature can affect the resistance and magnetic properties of the synchro components.
*   **Loading Effects:** If the TR rotor is coupled to a significant load, it can affect its ability to track the TX position accurately. In an open-loop system, this is a significant factor.
*   **Internal Damping:** Some synchros have internal damping mechanisms, which, while reducing oscillations, can also introduce some lag.

*   **Reference:** Ogata and Nise will likely discuss these limitations in the context of electromechanical systems and transducers.

---

### 4. Performance Analysis and Interpretation

#### 4.1. Plotting and Analyzing Results

*   **$\theta_{out}$ vs. $\theta_{in}$ Plot (Direct Mode):**
    *   Ideally, this plot should be a straight line with a slope of 1, passing through the origin.
    *   Deviations from this line indicate the presence of errors. The vertical distance from the ideal line to the actual plot at any given $\theta_{in}$ represents the angular error $\theta_{error}$.
*   **$\theta_{error}$ vs. $\theta_{in}$ Plot:**
    *   This plot directly shows how the angular error changes with the input angle.
    *   We expect to see the error varying throughout the range of motion.
*   **$V_{error}$ vs. $\theta_{in}$ Plot (Differential Mode Focus):**
    *   This plot shows the error voltage as a function of the input angle.
    *   The voltage will typically be close to zero at 0°, 180°, 360° (when rotors are aligned or opposing).
    *   The voltage will peak around 90°, 270°, etc. (when the angular difference is 90 degrees).
    *   The sign of the voltage indicates the direction of the error (e.g., if TR leads TX or lags TX).

#### 4.2. Key Performance Metrics

*   **Accuracy:** How closely the output angle matches the input angle. This is determined by the magnitude of $\theta_{error}$.
*   **Sensitivity:** The rate of change of output voltage with respect to angular error ($K_E$). A higher sensitivity means a smaller angular error produces a larger error voltage, which is desirable for control.
*   **Linearity:** The extent to which the error voltage is proportional to the angular error. Ideally, it's proportional to $\sin(\theta_{error})$.
*   **Dead Zone:** Small angular displacements for which no significant output voltage is produced. This can be due to friction or resolver windings.
*   **Hysteresis:** The difference in output for the same input when approached from different directions, usually due to friction.

#### 4.3. Comparing Direct and Differential Modes (for Error Study)

In the context of an open-loop error study:

*   **Direct Mode:** Focuses on the *angular* difference between the TX and TR. The error is observed as a discrepancy in the shaft positions.
*   **Differential Mode (Error Voltage):** Focuses on the *electrical signal* that represents the angular difference. The error is observed as a voltage output from the TR. This voltage is the raw signal that would be used in a closed-loop system to drive a controller. Studying this voltage helps understand the fundamental error-generating mechanism of the synchro pair.

**Key takeaway:** The fundamental physics of the synchro pair's error generation are the same in both modes. The distinction is in what we measure: raw angular difference versus the derived error voltage. For an open-loop position control, we are essentially observing the inherent limitations of the TX-TR transfer without any corrective action.

*   **Reference:** Nise's "Control Systems Engineering" has excellent sections on performance specifications (Chapter 4: Time Response) and stability, which indirectly relate to how well a system tracks its input and the magnitude of errors.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary function of a synchro transmitter (TX) in a position control system?
**Answer:** The primary function of a synchro transmitter is to convert an angular position into an electrical signal that can be transmitted over a distance.

**Question 2:** In a direct mode open-loop synchro system, what is the ideal relationship between the input angle of the TX and the output angle of the TR?
**Answer:** Ideally, the output angle of the TR should be exactly equal to the input angle of the TX ($\theta_{out} = \theta_{in}$).

**Question 3:** List at least three sources of error in a synchro transmitter-receiver pair.
**Answer:** Possible answers include: rotor winding mismatch, stator winding mismatch, friction, inertia, harmonics in excitation, temperature effects.

**Question 4:** How is the error typically represented electrically by a synchro receiver when its rotor is not aligned with the transmitter's rotor?
**Answer:** The synchro receiver produces an AC voltage output that is proportional to the sine of the angular difference between the transmitter and receiver rotors.

**Question 5:** You are conducting an error study of a synchro pair. You input an angle of 45° to the TX and observe the TR shaft at 43°. What is the angular error?
**Answer:** Angular Error = Input Angle - Output Angle = 45° - 43° = 2°.

**Question 6:** If the error voltage from a synchro receiver is measured to be 0.5V at an input angle of 30°, and you know the synchro's error constant is $K_E = 1 \text{ V/radian}$, what is the approximate angular error in radians?
**Answer:** Assuming $V_{error} \approx K_E \theta_{error}$ for small angles (or $V_{error} = K_E \sin(\theta_{error})$), and given $K_E = 1$, then $0.5 \text{ V} = 1 \text{ V/radian} \times \theta_{error}$. Therefore, $\theta_{error} \approx 0.5$ radians.
*(Note: In a real experiment, you'd use the $\sin(\theta_{error})$ relationship or the calibrated $K_E$ value for the specific synchro)*.

---

### 6. Important Points to Remember

*   **Open-Loop Nature:** In this experiment, the synchro pair acts as an open-loop controller. There is no feedback mechanism to correct the observed errors.
*   **Error is Inherent:** Synchro systems are not perfect. Errors are introduced by the electromechanical nature of the devices.
*   **Direct vs. Differential Mode Interpretation:** Understand that "differential mode" in this context often refers to the generation of an error voltage that is proportional to the angular difference.
*   **Accuracy vs. Linearity:** While aiming for accuracy (small angular error), also observe the linearity of the error signal (especially voltage output vs. angle) for understanding control behavior.
*   **Practical Limitations:** Be aware of friction, inertia, and electrical imperfections that contribute to errors.
*   **Voltage Output:** The AC voltage output of the synchro receiver is a key indicator of the system's error. Its magnitude and phase (relative to excitation) indicate the error's size and direction.

---

### 7. Alignment with Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   This module directly involves conducting experiments with synchro pairs, allowing you to observe their behavior and identify parameters like accuracy and sensitivity (implicitly, through error voltage). You are essentially gathering data to understand the transfer characteristics of this electromechanical system.
*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   The core of this module is the "error study," which directly leads to determining performance specifications like accuracy, linearity, and the nature of the error signal. You are quantifying how well the synchro pair performs as a position transmitter.
*   **CO3: Analyse a linear continuous time system model using simulation tools.**
    *   While this lab focuses on experimental study, the understanding of the synchro's behavior (e.g., the relationship between input angle and output angle, or input angle and error voltage) provides the foundation for creating a mathematical model (even if simplified) that could be simulated. For instance, you could model the error as a non-linear function or a gain with inherent limitations.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   Understanding the inherent errors and limitations of the synchro pair (as studied in this module) is the crucial first step before designing any controller. You would learn *why* a controller is needed and what characteristics of the error signal it needs to handle. For example, if you find a significant lag due to inertia in the TR, you might consider a lead compensator in a subsequent closed-loop design.

---

This comprehensive set of notes should provide a solid foundation for understanding and performing the error study of synchro transmitter and receiver pairs in open-loop position control. Remember to consult your textbooks for deeper theoretical insights and specific equations related to synchro operation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
