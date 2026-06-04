---
title: "Objective:"
subject: "CONTROL SYSTEM LAB"
module: "Module 3: Synchro Transmitter and Receiver for open loop position control."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36759"
status: "completed"
scrapedAt: "2026-05-23T16:25:05.240Z"
---
# CONTROL SYSTEM LAB: Module 3 - Synchro Transmitter and Receiver for Open Loop Position Control

## Topic Objective:

The primary objective of this experiment is to understand and implement an open-loop position control system using a Synchro Transmitter (TX) and Synchro Receiver (TR) pair. This involves exploring the fundamental principles of synchro operation, their application in transmitting angular position information, and how this information can be used to achieve open-loop control of a mechanical system.

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **Understand the basic principle of operation of synchro devices (TX and TR).**
*   **Explain how synchros are used to transmit angular position data.**
*   **Set up an open-loop position control system using a synchro TX-TR pair.**
*   **Observe and demonstrate the open-loop response of the system to changes in the transmitter's angular position.**
*   **Identify the limitations and potential applications of synchro-based open-loop control.**
*   **Relate the experimental observations to theoretical concepts of electromechanical systems and open-loop control.**

## 1. Introduction to Synchros

Synchros are electromechanical devices that act as rotary transducers. They are primarily used to transmit angular position information between two points, often over significant distances, without the need for mechanical linkages. They are essentially rotary transformers that operate on the principle of electromagnetic induction.

### Key Concepts and Definitions:

*   **Synchro:** An electromechanical device used for transmitting angular position information.
*   **Synchro Transmitter (TX):** The input device that converts an angular mechanical input into an electrical signal proportional to that angle.
*   **Synchro Receiver (TR):** The output device that converts the electrical signal received from the TX into a corresponding angular mechanical output.
*   **Open-Loop Control:** A control system where the output has no effect on the control action. The system operates based on a predefined input without feedback.
*   **Angular Position:** The rotational orientation of a shaft or object.

### Principle of Operation:

A synchro system typically consists of a TX and a TR, both constructed similarly with stator and rotor windings.

*   **Stator:** Has three windings placed symmetrically around the rotor, 120 electrical degrees apart. These are the Control Windings (C1, C2, C3) in the TX and the Reference Windings (R1, R2, R3) in the TR.
*   **Rotor:** Has a single winding, the Excitation Winding, which is supplied with an AC voltage.

**How it works:**

1.  **Excitation:** An AC voltage (excitation voltage, often a sine wave) is applied to the rotor winding of the TX.
2.  **Induced Voltages:** This AC voltage induces voltages in the three stator windings of the TX. The magnitude and polarity of these induced voltages depend on the angular position of the TX rotor.
    *   When the TX rotor is aligned with a stator winding, the voltage in that winding is maximum.
    *   When the TX rotor is perpendicular to a stator winding, the voltage in that winding is zero.
    *   The voltages in the three stator windings vary sinusoidally with the rotor angle.
3.  **Transmission:** The three stator windings of the TX are connected to the three corresponding stator windings of the TR via transmission lines.
4.  **Reception:** The AC voltages from the TX stator are applied to the TR stator windings. These voltages, varying based on the TX rotor angle, induce a voltage in the TR rotor.
5.  **Torque Production:** The induced voltage in the TR rotor creates a torque that attempts to align the TR rotor with the angular position represented by the voltages received from the TX.

**Mathematical Representation (Simplified):**

Let the excitation voltage be $V_{exc} \sin(\omega t)$.
Let the angular position of the TX rotor be $\theta_{TX}$.
The voltages induced in the TX stator windings can be approximated as:
*   $V_{C1} = K_1 \cos(\theta_{TX}) V_{exc} \sin(\omega t)$
*   $V_{C2} = K_1 \cos(\theta_{TX} - 120^\circ) V_{exc} \sin(\omega t)$
*   $V_{C3} = K_1 \cos(\theta_{TX} - 240^\circ) V_{exc} \sin(\omega t)$
where $K_1$ is a constant related to the synchro's construction.

These voltages are transmitted to the TR stator windings. The TR rotor will experience a torque proportional to the sine of the difference between the TX angle and the TR angle.

**Reference:**

*   **Ogata, Modern Control Engineering:** Chapter 2 (Modeling in the time domain) might touch upon electromechanical devices, though synchros might be in a more specialized section or an appendix. However, the fundamental principles of system modeling are relevant.
*   **Nise, Control Systems Engineering:** Chapter 2 (Modeling in the time domain) is highly relevant for understanding how physical components like synchros can be mathematically represented, even if synchros are not explicitly detailed.

## 2. Synchro Transmitter (TX)

The Synchro Transmitter is the sensing element that converts a mechanical angular input into an electrical signal.

### Key Components and Functionality:

*   **Rotor:** A salient pole rotor with a single winding. It's mechanically coupled to the input shaft whose angle needs to be transmitted.
*   **Stator:** Contains three phase windings (control windings), arranged physically 120 degrees apart.
*   **Excitation:** An AC voltage is applied to the rotor winding.

### Input-Output Relationship:

The AC voltages induced in the three stator windings are dependent on the rotor's angular position ($\theta_{TX}$). These voltages are typically measured relative to a reference, and their magnitudes and phase relationships encode the rotor's angular position.

**Example:**

Imagine a TX with its rotor at 0 degrees. The voltage in one stator winding might be at its peak positive value, while the other two are lower. As the rotor rotates, these voltages change. For instance, at 90 degrees, the voltages might be such that they represent a different angular position.

## 3. Synchro Receiver (TR)

The Synchro Receiver is the output device that receives the electrical signals from the TX and converts them back into a mechanical angular output, attempting to match the TX's position.

### Key Components and Functionality:

*   **Rotor:** A salient pole rotor with a single winding. It is mechanically coupled to the load or indicator.
*   **Stator:** Contains three phase windings (reference windings), arranged physically 120 degrees apart, connected to the TX stator windings.
*   **Output Torque:** The interaction between the voltages in the TR stator windings and the induced voltage in the TR rotor produces a torque that drives the TR rotor.

### Input-Output Relationship:

The TR rotor will attempt to align itself with the angular position represented by the electrical signals received from the TX. In an ideal scenario, the TR rotor's angular position ($\theta_{TR}$) would precisely follow the TX rotor's angular position ($\theta_{TX}$).

**Example:**

If the TX rotor is set to 30 degrees, the electrical signals transmitted to the TR will cause the TR rotor to rotate to 30 degrees. If the TX rotor is then moved to 60 degrees, the TR rotor will also move to 60 degrees.

**Reference:**

*   **Nagrath & Gopal, Control Systems Engineering:** Might contain specific details on electromechanical transducers like synchros in sections dealing with system modeling or specific control applications.
*   **Kuo, Automatic Control Systems:** Likely to have detailed explanations of synchros and their use in control systems, including diagrams and operational principles.

## 4. Open Loop Position Control System Setup

This experiment utilizes the synchro TX-TR pair to create an open-loop position control system.

### System Configuration:

*   **Synchro Transmitter (TX):**
    *   Rotor winding is connected to an AC excitation source.
    *   Stator windings are connected to the stator windings of the Synchro Receiver.
    *   The TX rotor is mechanically driven to a desired angular position (e.g., using a handwheel or a calibrated dial).
*   **Synchro Receiver (TR):**
    *   Stator windings are connected to the TX stator windings.
    *   TR rotor is mechanically coupled to an indicator or a load.
*   **Load/Indicator:** A mechanism that visually displays the angular position of the TR rotor.

### Block Diagram of the Open-Loop System:

```
+----------------+       +-------------------+       +-------------------+       +----------------+
| AC Excitation  | ----> | Synchro           | ----> | Synchro           | ----> | Load/Indicator |
| Source         |       | Transmitter (TX)  |       | Receiver (TR)     |       |                |
+----------------+       +-------------------+       +-------------------+       +----------------+
                                     ^                                                |
                                     | Mechanical Input (Desired Angle)             | Mechanical Output (Actual Angle)
                                     |                                                |
                                     +------------------------------------------------+
```

**Explanation:**

1.  The **AC Excitation Source** provides the power for the synchro system.
2.  The **Synchro Transmitter (TX)** senses the desired angular position.
3.  The electrical signals representing this position are transmitted to the **Synchro Receiver (TR)**.
4.  The **Synchro Receiver (TR)** converts these electrical signals back into a mechanical angle, driving the **Load/Indicator** to match the TX's position.

**Important Note:** In this open-loop configuration, there is no feedback from the TR's actual position back to the TX or control input. The system simply attempts to make the TR follow the TX's mechanical input.

**Reference:**

*   **Nise, Control Systems Engineering:** Chapter 1 (Introduction to Control Systems) provides a general overview of open-loop systems and their characteristics, which is relevant to understanding the system being built.
*   **Gopal, Control Systems Principles and Design:** Similar to Nise, this book will offer foundational understanding of open-loop control principles.

## 5. Conducting the Experiment and Observations

The experiment involves setting the TX to various angular positions and observing the corresponding response of the TR.

### Experimental Procedure:

1.  **Setup:** Connect the synchro TX and TR as per the system configuration. Ensure the AC excitation source is correctly connected. Connect the load or indicator to the TR rotor.
2.  **Power On:** Turn on the AC excitation source.
3.  **Zero Position:** Set the TX rotor to 0 degrees. Observe and record the position of the TR rotor.
4.  **Vary TX Angle:** Incrementally change the angular position of the TX rotor (e.g., every 10 or 20 degrees) from 0 to 360 degrees.
5.  **Record Observations:** For each TX angle, carefully observe and record the angular position of the TR rotor. Note any discrepancies, lag, or oscillations.
6.  **Repeat:** If possible, repeat the procedure with different excitation frequencies or voltage levels to observe their effects (though this might be outside the scope of a basic experiment).

### Expected Observations and Analysis:

*   **Tracking:** Ideally, the TR rotor should follow the TX rotor's position accurately.
*   **Error:** In a real system, there will be a small static error between the TX and TR positions due to friction, stator winding inaccuracies, and other non-ideal factors.
*   **Dynamic Response:** Observe how quickly the TR responds to changes in the TX position. Are there any delays or overshoot?
*   **Torque:** The TR rotor will be driven by the torque generated from the electrical signals.

**Example Observation Table:**

| TX Angle (Degrees) | TR Angle (Degrees) | Error (TX - TR) (Degrees) | Qualitative Observation (e.g., smooth, jerky) |
| :----------------- | :----------------- | :------------------------ | :-------------------------------------------- |
| 0                  | 0                  | 0                         | Stable                                        |
| 30                 | 29                 | 1                         | Smooth tracking                               |
| 60                 | 58                 | 2                         | Smooth tracking                               |
| ...                | ...                | ...                       | ...                                           |
| 360                | 359                | 1                         | Stable                                        |

**Reference:**

*   **Ogata, Modern Control Engineering:** Chapter 5 (Root Locus Techniques) and Chapter 6 (Frequency Response) could be used for analyzing the dynamic behavior of the system if a transfer function can be derived.
*   **Nise, Control Systems Engineering:** Chapter 4 (State-Space Analysis) and Chapter 7 (Stability) can be used to analyze the stability and performance of the system if modeled appropriately.

## 6. Synchro Applications and Limitations in Open-Loop Control

Synchros are well-suited for certain applications, but their limitations need to be understood, especially in an open-loop context.

### Applications:

*   **Angular Position Indicators:** Displaying the position of a remote shaft (e.g., aircraft rudder position, antenna direction).
*   **Remote Control Systems:** In simple systems where high accuracy or dynamic response is not critical.
*   **Data Transmission:** As a means to transmit angular data in industrial automation.

### Limitations of Open-Loop Synchro Control:

*   **Accuracy:** Open-loop systems are susceptible to external disturbances and internal variations. They cannot compensate for errors. The accuracy is limited by the inherent accuracy of the synchro pair and the mechanical components.
*   **No Feedback:** The primary limitation is the absence of feedback. If the TR rotor encounters resistance or slips, the system will not know and cannot correct the error.
*   **Disturbances:** External forces or torques acting on the TR rotor or its load will cause deviations from the desired position without correction.
*   **Dynamic Response:** Synchros have inherent mechanical and electrical inertia and friction, which limit their speed and responsiveness. They are generally not suitable for high-speed or highly dynamic control applications.
*   **Susceptibility to Noise:** The AC signals transmitted can be susceptible to noise, which can affect the accuracy of position transmission.

**Comparison to Closed-Loop Control:**

In a closed-loop system, the output (TR position) is measured and fed back to a comparator. The difference between the desired and actual position (error signal) is then used to adjust the control action. This feedback mechanism significantly improves accuracy, robustness to disturbances, and dynamic performance.

**Reference:**

*   **Dorf & Bishop, Modern Control Systems:** Chapters on feedback control and system limitations are highly relevant for understanding why open-loop systems are less preferred for precise control.
*   **All Textbooks:** Chapters discussing the advantages and disadvantages of open-loop versus closed-loop control will provide the context for understanding synchro limitations.

## 7. Aligning with Course Outcomes

This module directly addresses several course outcomes:

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3)**
    *   **How:** By setting up the synchro system and observing its behavior, students gather data that could be used to derive simplified transfer functions or model parameters (e.g., constants related to torque, friction) if a more detailed analysis were performed. The experiment itself is the "suitable experiment."
*   **CO2: Conduct suitable experiments and determine the performance specifications. (K3)**
    *   **How:** The experiment involves observing the tracking accuracy (static error), and qualitative observations about the speed of response and smoothness can be considered basic performance specifications in an open-loop context.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (K3)**
    *   **How:** While this module focuses on the physical experiment, the understanding gained about synchro operation and open-loop control can be a precursor to simulating such systems in tools like MATLAB/Simulink. The observed behavior can be compared to simulation results.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (K5)**
    *   **How:** Understanding the limitations of the open-loop synchro system (lack of accuracy, susceptibility to disturbances) highlights the need for feedback and potentially controllers (like PID) to improve performance. This experiment serves as a foundational step to appreciate the need for such controllers in more advanced modules.

## Practice Questions and Answers

1.  **What is the primary function of a synchro system in a control application?**
    *   **Answer:** To transmit angular position information accurately from one point to another without mechanical linkages.

2.  **Explain the difference between a Synchro Transmitter (TX) and a Synchro Receiver (TR).**
    *   **Answer:** The TX converts a mechanical angle into an electrical signal, while the TR converts an electrical signal back into a mechanical angle.

3.  **Why is the system described in this module considered an "open-loop" system?**
    *   **Answer:** Because the output of the system (the position of the TR rotor) is not measured and fed back to influence the control action. The system operates solely based on the input provided to the TX.

4.  **List two advantages of using synchros for transmitting angular position.**
    *   **Answer:**
        *   Can transmit over long distances.
        *   No need for physical shafts or gears between transmitter and receiver.
        *   Relatively robust.

5.  **What is a potential disadvantage of this open-loop synchro system in terms of accuracy?**
    *   **Answer:** The system is susceptible to external disturbances and internal errors. It cannot correct for inaccuracies or unexpected loads because there is no feedback.

6.  **If the TX rotor is rotated at a constant speed, what would you expect to observe about the TR rotor's motion?**
    *   **Answer:** The TR rotor should also rotate at the same constant speed, attempting to follow the TX rotor's position. However, there might be a slight lag or static error.

7.  **How could you improve the accuracy and disturbance rejection of a synchro-based position control system?**
    *   **Answer:** By implementing a closed-loop system where the TR's actual position is measured and compared to the desired position, with the error signal used to control the TR's movement. This would typically involve a feedback sensor and a control loop.

## Important Points to Remember

*   Synchros transmit angular position using AC signals.
*   The TX is the input transducer, and the TR is the output transducer.
*   An open-loop system lacks feedback, making it simpler but less accurate and more susceptible to disturbances.
*   The ideal behavior of a synchro system is for the TR to precisely mimic the TX's angular position.
*   Real synchro systems will exhibit some static error and limitations in dynamic response due to physical factors.
*   Understanding open-loop systems is crucial before moving to more sophisticated closed-loop control designs.

This comprehensive set of notes covers the essential aspects of Module 3, focusing on the Synchro Transmitter and Receiver for open-loop position control, aligning with the provided learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
