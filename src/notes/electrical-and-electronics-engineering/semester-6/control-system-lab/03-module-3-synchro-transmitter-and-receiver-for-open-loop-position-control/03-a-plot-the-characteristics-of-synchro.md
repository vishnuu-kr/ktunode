---
title: "a) Plot the characteristics of synchro."
subject: "CONTROL SYSTEM LAB"
module: "Module 3: Synchro Transmitter and Receiver for open loop position control."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3675a"
status: "completed"
scrapedAt: "2026-05-23T16:25:05.980Z"
---
# CONTROL SYSTEM LAB: Module 3 - Synchro Transmitter and Receiver for Open Loop Position Control

## Topic: a) Plot the Characteristics of Synchro

### 1. Introduction to Synchros

Synchros are electromechanical devices used for transmitting angular position information. They consist of a rotor and a stator, similar in construction to a simple AC motor. When the rotor of a synchro transmitter is rotated, a corresponding AC voltage is induced in the stator windings of a synchro receiver, causing its rotor to move to the same angular position. This forms the basis of open-loop position control.

**Key Concepts:**

*   **Transmitter (TX):** The synchro that receives the input angular position. Its rotor is excited by an AC voltage, and the induced voltages in its stator windings vary with rotor angle.
*   **Receiver (RX):** The synchro that reproduces the angular position of the transmitter. Its stator windings are connected to the stator windings of the transmitter, and the induced voltages cause its rotor to align with the transmitter's rotor position.
*   **Control Transformer (CT):** A specific type of synchro receiver used for generating error signals in closed-loop systems. In this module, we are focusing on a standard synchro receiver for open-loop control.
*   **Excitation Voltage:** The AC voltage applied to the rotor of the synchro transmitter. Typically, this is a fixed frequency AC supply.
*   **Stator Windings:** Usually three windings, spaced 120 electrical degrees apart, whose induced voltages depend on the rotor angle and the excitation.
*   **Rotor Windings:** A single winding that is excited by the AC supply.

**Textbook References:**

*   **Ogata:** Discusses synchros as electromechanical transducers for transmitting angular position. (Likely in chapters related to practical control system components or transducers).
*   **Nise:** Explains synchros in the context of practical control system components and their applications in position control. (Likely in chapters on actuators or system components).
*   **Nagrath & Gopal:** Provides a detailed explanation of the construction and working principle of synchros and their use in transmitting angular data. (Likely in chapters on measurement and sensing devices).

### 2. Synchro Transmitter (TX) Characteristics

The primary characteristic to be plotted for a synchro transmitter relates the output voltages from its stator windings to the input rotor angle.

**Experimental Setup:**

1.  **Synchro Transmitter (TX):** Connect the rotor of the TX to an AC excitation source (e.g., 115V, 400Hz).
2.  **Synchro Receiver (RX) or Voltmeter:** Connect the stator windings of the TX to a voltmeter or to the stator windings of an RX (which will then indicate the transmitted angle). For characteristic plotting, a voltmeter is more direct for measuring stator voltages.
3.  **Angle Measurement:** A mechanism to precisely rotate the TX rotor and a method to measure the rotor angle (e.g., a calibrated dial, encoder).
4.  **Power Supply:** Stable AC excitation source.

**Procedure:**

1.  Excite the rotor of the synchro transmitter with the specified AC voltage.
2.  Set the rotor of the TX to a known angle, $\theta$. Start from a reference position (e.g., 0 degrees).
3.  Measure the voltages induced in each of the three stator windings (S1, S2, S3) of the TX using a sensitive AC voltmeter.
4.  Increment the rotor angle $\theta$ in small, uniform steps (e.g., every 5 or 10 degrees) from 0 to 360 degrees.
5.  At each angle, record the voltages $V_{S1}, V_{S2}, V_{S3}$.

**Theoretical Model (Nodal Analysis Approach/Equivalent Circuit):**

The voltage induced in the stator windings of a synchro transmitter is generally given by:

*   $V_{S1} = K \cdot \cos(\theta)$
*   $V_{S2} = K \cdot \cos(\theta - 120^\circ)$
*   $V_{S3} = K \cdot \cos(\theta + 120^\circ)$

Where:
*   $K$ is a constant proportional to the excitation voltage, number of turns, and magnetic coupling.
*   $\theta$ is the angular position of the rotor relative to a reference axis (e.g., the axis of S1 when the rotor is aligned with it).

**Characteristics to Plot:**

*   **Voltage vs. Angle for Stator Windings:**
    *   Plot $V_{S1}$ vs. $\theta$. This should ideally be a cosine wave.
    *   Plot $V_{S2}$ vs. $\theta$. This should be a cosine wave shifted by 120 degrees.
    *   Plot $V_{S3}$ vs. $\theta$. This should be a cosine wave shifted by -120 degrees.

**Example Plot Interpretation:**

*   At $\theta = 0^\circ$, $V_{S1}$ will be maximum positive, $V_{S2}$ and $V_{S3}$ will be negative (ideally half of $V_{S1}$).
*   At $\theta = 90^\circ$, $V_{S1}$ will be zero, $V_{S2}$ and $V_{S3}$ will have specific values.
*   At $\theta = 180^\circ$, $V_{S1}$ will be maximum negative, $V_{S2}$ and $V_{S3}$ will be positive.

**Ideal vs. Actual Characteristics:**

*   **Ideal:** Pure sinusoidal waveforms with precise phase shifts and amplitudes proportional to the cosine function. The sum of stator voltages should be zero.
*   **Actual:** May show slight deviations from pure sinusoids due to non-linear magnetic effects, winding imperfections, and finite rotor position. The amplitude $K$ represents the maximum induced voltage.

### 3. Synchro Receiver (RX) Characteristics

For an open-loop position control system, the synchro receiver will typically be driven by the stator voltages of the transmitter. Its characteristic relates the angle of its rotor to the voltages received from the transmitter. However, the more useful characteristic for understanding the system's behavior is the **torque-angle characteristic** of the receiver, which dictates how it responds to the transmitted signals.

**Experimental Setup:**

1.  **Synchro Transmitter (TX):** Connect the rotor of the TX to an AC excitation source.
2.  **Synchro Receiver (RX):** Connect the stator windings of the RX to the corresponding stator windings of the TX.
3.  **Torque Measurement:** A mechanism to apply an external torque to the RX rotor and a method to measure this torque (e.g., a spring balance attached to a lever arm on the RX shaft).
4.  **Angle Measurement:** A method to measure the angle of the RX rotor.
5.  **Power Supply:** Stable AC excitation source for the TX.

**Procedure:**

1.  Excite the rotor of the TX with the specified AC voltage.
2.  With the TX stator terminals connected to the RX stator terminals, allow the RX rotor to settle to its null position (e.g., when the TX rotor is at 0 degrees).
3.  Now, manually rotate the TX rotor to a specific angle, $\theta$. The RX rotor will follow this angle.
4.  **To plot torque-angle:**
    *   Keep the TX rotor at a fixed angle $\theta$.
    *   Apply a gradually increasing external torque to the RX rotor, opposing its alignment with the TX.
    *   Measure the external torque required to move the RX rotor away from its aligned position by a small amount (e.g., a few degrees). Record this torque and the corresponding TX rotor angle $\theta$.
    *   Alternatively, for a full characteristic, one can measure the torque produced by the RX rotor itself when the TX rotor is held at different angles without any external load. However, this requires a dynamometer setup or a precise torque measurement device.
    *   A more common characteristic plotting for the RX in this context is to observe its **dynamic response** (how quickly it settles and to what accuracy when the TX angle is changed) or the **torque produced by the RX at different angles of misalignment.**

**Torque-Angle Characteristic:**

The torque produced by a synchro receiver is proportional to the sine of the error angle between the transmitter and receiver rotors, and also depends on the stator voltages. For a synchro RX, when its stator is connected to a TX, the torque $T$ it exerts is approximately:

$T(\alpha) = K_{TX} K_{RX} \sin(\alpha)$

Where:
*   $K_{TX}$ is a constant related to the TX excitation and stator voltage magnitude.
*   $K_{RX}$ is a constant related to the RX design.
*   $\alpha$ is the angular error between the TX rotor and the RX rotor.

However, for plotting the characteristic of the RX **itself** when driven by the TX, we are interested in how the RX rotor position ($\theta_{RX}$) relates to the TX rotor position ($\theta_{TX}$). In an open-loop system, ideally, $\theta_{RX} = \theta_{TX}$.

A crucial characteristic related to the RX is its ** Torque-Angle Characteristic when the TX is at a fixed position and an external torque is applied to the RX.**

**Example Characteristic:**

*   **Torque vs. Error Angle:** When the TX rotor is at a fixed angle and an external torque is applied to the RX, you would observe that at zero error angle, the RX produces maximum torque to maintain its position. As the error angle increases, the torque produced by the RX decreases, eventually becoming zero at $\pm 90^\circ$ (where it's unstable) and then reversing its direction. However, this is more relevant for closed-loop systems.

For **open-loop position control**, the key characteristic you'd be observing and verifying is the **accuracy of position transfer**. You'd plot the RX rotor angle ($\theta_{RX}$) against the TX rotor angle ($\theta_{TX}$).

**Characteristic to Plot (Open Loop Transfer Accuracy):**

*   **RX Rotor Angle ($\theta_{RX}$) vs. TX Rotor Angle ($\theta_{TX}$):**
    *   Set the TX rotor to various angles $\theta_{TX}$.
    *   Observe and measure the corresponding angle $\theta_{RX}$ of the RX rotor.
    *   Plot $\theta_{RX}$ on the y-axis and $\theta_{TX}$ on the x-axis.

**Ideal vs. Actual Characteristics (Open Loop Transfer Accuracy):**

*   **Ideal:** A straight line with a slope of 1, passing through the origin ($\theta_{RX} = \theta_{TX}$). This signifies perfect position transfer.
*   **Actual:** May show deviations from the ideal line due to backlash in the gears, inertia of the RX rotor, friction, voltage regulation issues in the excitation source, and the inherent limitations of the synchro units. The accuracy of the transfer will depend on the specific synchro units used.

**Learning Outcomes Addressed:**

*   **CO1 (Identify and conduct experiments to determine parameters):**
    *   Plotting the stator voltage vs. rotor angle for the TX helps determine the constant $K$ and verify the sinusoidal nature of the output, which are parameters characterizing the transmitter's behavior.
    *   Plotting $\theta_{RX}$ vs. $\theta_{TX}$ for the RX helps determine the accuracy of position transfer, which is a system parameter.
*   **CO2 (Conduct experiments and determine performance specifications):**
    *   The accuracy of the plot $\theta_{RX}$ vs. $\theta_{TX}$ directly indicates the performance specification of position transfer accuracy in the open-loop system.
    *   The shape of the $V_{stator}$ vs. $\theta$ plot for the TX informs about its linearity and output voltage range, contributing to understanding system performance.
*   **CO3 (Analyze linear continuous time system model using simulation tools):**
    *   The characteristic equations derived (e.g., $V_{S1} = K \cos(\theta)$) can be used to build a simulation model of the synchro transmitter.
    *   The observed transfer characteristic ($\theta_{RX}$ vs. $\theta_{TX}$) can be used to validate a simulation model of the open-loop system.
*   **CO4 (Design suitable controllers/compensators):** While this topic is about open-loop, understanding these characteristics is foundational for closed-loop control where error signals are derived from synchro systems. The torque-angle characteristic of a synchro receiver (CT) is crucial for designing controllers to improve stability and response.

### 4. Plotting the Characteristics - Practical Considerations and Tips

*   **Excitation Voltage Stability:** Ensure the AC excitation voltage to the TX rotor is stable and at the rated value. Fluctuations will directly affect the stator voltages and thus the response of the RX.
*   **Frequency:** The excitation frequency (e.g., 400 Hz) is critical for the proper operation of synchros.
*   **Connection Polarity:** Correctly identify and connect the stator windings (S1, S2, S3) of the TX to the corresponding windings of the RX. Incorrect connections will lead to erroneous results or no operation.
*   **Zero Reference:** Clearly define your zero angle reference for both the TX and RX. Mark these positions clearly.
*   **Backlash:** Synchros often have gears to connect to shafts, which introduce backlash. This can affect the accuracy, especially when changing direction of rotation. Account for this when interpreting results.
*   **Measuring Instruments:** Use calibrated AC voltmeters with sufficient sensitivity for stator voltage measurements. Use accurate angular measurement devices.
*   **Repeatability:** Repeat measurements at each angle a few times to ensure consistency and reduce random errors.
*   **Range of Measurement:** Measure over the full 360 degrees to capture the complete sinusoidal behavior.

### 5. Practice Questions and Answers

**Question 1:**
What is the fundamental principle by which a synchro transmitter and receiver transfer angular information?

**Answer:**
A synchro transmitter's rotor is excited by an AC voltage. The interaction between the rotor's magnetic field and the stator windings induces voltages in the stator windings that vary sinusoidally with the rotor's angular position. These varying stator voltages are transmitted to the stator windings of a synchro receiver. The receiver's rotor, which is typically a permanent magnet or a wound rotor, experiences magnetic forces due to these induced voltages, causing it to align with the angular position dictated by the transmitter's stator voltages.

**Question 2:**
Describe the expected shape of the plot of stator voltage ($V_{S1}$) versus rotor angle ($\theta$) for a synchro transmitter.

**Answer:**
The plot of stator voltage ($V_{S1}$) versus rotor angle ($\theta$) for a synchro transmitter is expected to be a **cosine wave**. Specifically, $V_{S1} = K \cos(\theta)$, where $K$ is a constant proportional to the excitation voltage and $0^\circ$ is typically defined as the rotor position where $V_{S1}$ is maximum.

**Question 3:**
In an open-loop synchro system, what characteristic would you plot to assess the accuracy of position transfer?

**Answer:**
To assess the accuracy of position transfer in an open-loop synchro system, you would plot the **Synchro Receiver Rotor Angle ($\theta_{RX}$) versus the Synchro Transmitter Rotor Angle ($\theta_{TX}$)**. Ideally, this plot should be a straight line with a slope of 1, indicating that $\theta_{RX} = \theta_{TX}$.

**Question 4:**
What are the primary components of a synchro system used in angular position control?

**Answer:**
The primary components are a **Synchro Transmitter (TX)**, which senses the input angle and generates corresponding AC voltages, and a **Synchro Receiver (RX)**, which reproduces the transmitted angle. These are interconnected via their stator windings.

**Question 5:**
If you are plotting the characteristic $V_{S1}$ vs. $\theta$ for a synchro transmitter, what should be the ideal output at $\theta = 90^\circ$?

**Answer:**
Ideally, at $\theta = 90^\circ$, the stator voltage $V_{S1}$ should be **zero**. This is because the magnetic coupling between the rotor and the winding S1 is at its minimum when they are 90 degrees apart.

### 6. Important Points to Remember

*   Synchros are AC devices for angular position sensing and transmission.
*   The stator voltages of a synchro transmitter are sinusoidal functions of its rotor angle.
*   The relationship between rotor angle and stator voltage is crucial for understanding synchro behavior.
*   In open-loop control, the goal is to achieve a direct and accurate transfer of angular position from TX to RX.
*   Backlash and excitation stability are key factors affecting the accuracy of synchro systems.
*   Understanding synchro characteristics is foundational for designing more complex control systems that utilize synchros for feedback.

This comprehensive set of notes should provide a strong foundation for understanding and performing the experiment related to plotting synchro characteristics in your Control System Lab. Remember to consult your lab manual and instructor for specific experimental procedures and apparatus.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
