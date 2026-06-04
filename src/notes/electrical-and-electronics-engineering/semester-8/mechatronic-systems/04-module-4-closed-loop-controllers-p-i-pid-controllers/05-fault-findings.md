---
title: "Fault findings"
subject: "MECHATRONIC SYSTEMS"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bb5"
status: "completed"
scrapedAt: "2026-05-23T16:42:54.736Z"
---
# MECHATRONIC SYSTEMS: Module 4 - Closed Loop Controllers: P, I, PID Controllers - Fault Finding

## Introduction

This module focuses on **fault finding** within closed-loop control systems, specifically those employing **Proportional (P)**, **Integral (I)**, and **Proportional-Integral-Derivative (PID)** controllers. Understanding how to diagnose and resolve issues in these fundamental control structures is crucial for ensuring the reliable and efficient operation of mechatronic systems. Faults can arise from various sources, including sensor inaccuracies, actuator malfunctions, controller parameter misconfigurations, or even environmental disturbances.

## Learning Outcomes

By the end of this topic, you will be able to:

*   **LO1: Identify common faults in P, I, and PID control loops.** (Relates to CO1, CO2, CO4 - understanding system components and responses)
*   **LO2: Analyze the symptoms of specific faults in closed-loop systems.** (Relates to CO4 - analyzing system responses)
*   **LO3: Apply systematic troubleshooting methodologies to diagnose faults.** (Relates to all COs by ensuring system functionality)
*   **LO4: Propose corrective actions for identified faults.** (Relates to all COs by ensuring proper system operation)
*   **LO5: Understand the impact of different controller types (P, I, PID) on fault behavior.** (Relates to CO4 - analyzing system responses with different controllers)

## Key Concepts and Definitions

*   **Closed-Loop Control System:** A system where the output is measured and compared to a desired setpoint, and the error signal is used to adjust the system's input to reduce the error.
*   **Proportional (P) Controller:** Generates an output signal that is proportional to the error signal. $Output = K_p \times Error$.
    *   **Gain ($K_p$):** The proportionality constant.
*   **Integral (I) Controller:** Generates an output signal that is proportional to the integral of the error signal over time. $Output = K_i \int Error \, dt$.
    *   **Integral Gain ($K_i$):** The proportionality constant for the integral term. Eliminates steady-state error.
*   **Derivative (D) Controller:** Generates an output signal that is proportional to the rate of change of the error signal. $Output = K_d \frac{d Error}{dt}$.
    *   **Derivative Gain ($K_d$):** The proportionality constant for the derivative term. Damps oscillations.
*   **PID Controller:** Combines P, I, and D control actions: $Output = K_p \times Error + K_i \int Error \, dt + K_d \frac{d Error}{dt}$.
*   **Fault:** An unintended deviation from the expected behavior of a system or its components.
*   **Troubleshooting:** The systematic process of identifying and resolving faults.
*   **Symptoms:** Observable effects or indicators of a fault.
*   **Setpoint (SP):** The desired value for the controlled variable.
*   **Process Variable (PV):** The actual measured value of the controlled variable.
*   **Error (e):** The difference between the setpoint and the process variable ($e = SP - PV$).
*   **Actuator:** The component that manipulates the system to affect the process variable.
*   **Sensor:** The component that measures the process variable.
*   **Steady-State Error:** The persistent difference between the setpoint and the process variable after the system has settled.
*   **Overshoot:** The amount by which the process variable exceeds the setpoint before settling.
*   **Oscillation:** The repetitive variation of the process variable around the setpoint.
*   **Rise Time:** The time it takes for the process variable to go from a specified low percentage to a specified high percentage of its final value.
*   **Settling Time:** The time it takes for the process variable to reach and stay within a specified tolerance band around the setpoint.

## Common Faults in Closed-Loop Control Systems

Faults can be broadly categorized into hardware failures and software/parameter misconfigurations.

### 1. Sensor Faults (LO1, LO2)

Sensors are critical for providing feedback in closed-loop systems. Their failure or inaccurate readings directly impact the controller's ability to regulate the system.

*   **Zero Drift/Bias:** The sensor consistently outputs a non-zero value even when the actual input is zero.
    *   **Symptoms:**
        *   The system never reaches the setpoint or stabilizes at a value offset from the setpoint.
        *   For a P controller, this will manifest as a steady-state error that is *constant* and *independent* of the setpoint value.
        *   For an I controller, the integral term will continuously accumulate the error, leading to wind-up (discussed later) and potentially driving the actuator to its limit.
        *   For a PID controller, all terms will be affected, leading to an offset or instability depending on the controller gains.
    *   **Examples:**
        *   A temperature sensor that always reads 5°C higher than the actual temperature.
        *   A position sensor with a constant offset in its reading.
    *   **Fault Finding:**
        *   Compare sensor output with a known calibrated instrument or a manually verified state.
        *   Check sensor calibration procedures.
        *   Inspect wiring and connections for damage or corrosion.
    *   **Corrective Actions:**
        *   Recalibrate the sensor.
        *   Replace the sensor if calibration is not possible or effective.
        *   Implement software compensation for known biases (use with caution, as it masks underlying issues).

*   **Gain Drift/Scale Factor Error:** The sensor's output is proportional to the input but with an incorrect scaling factor.
    *   **Symptoms:**
        *   The system's response is consistently too large or too small, even at steady-state.
        *   The overshoot or undershoot might be exaggerated or diminished.
        *   The response might appear sluggish or overly aggressive.
    *   **Examples:**
        *   A speed sensor that reports speeds twice as fast as they actually are.
        *   A pressure sensor that underestimates the pressure by 20%.
    *   **Fault Finding:**
        *   Apply known inputs and compare sensor output with expected values.
        *   Check the sensor's datasheet for expected sensitivity.
    *   **Corrective Actions:**
        *   Recalibrate the sensor.
        *   Adjust the scaling factor in the controller software if the sensor itself cannot be recalibrated.

*   **Sensor Saturation:** The sensor output reaches its maximum or minimum limit and stops changing, even if the input continues to change.
    *   **Symptoms:**
        *   The process variable appears to "flatline" at an extreme value.
        *   The controller might behave erratically as it receives a constant, incorrect error signal.
        *   If saturation occurs at zero, it's similar to a "stuck at zero" fault.
    *   **Examples:**
        *   A force sensor that can only measure up to 100 N, and the system is experiencing 120 N of force.
        *   A position encoder that has a limited range and is being driven beyond it.
    *   **Fault Finding:**
        *   Monitor sensor output while forcing the system to exceed expected ranges.
        *   Check sensor specifications for its operating limits.
    *   **Corrective Actions:**
        *   Ensure the system operates within the sensor's range.
        *   Replace the sensor with one that has a wider operating range.
        *   Implement software checks to detect saturation and flag an error.

*   **Sensor Failure (Open Circuit/Short Circuit):** The sensor stops transmitting any data or transmits a constant erroneous value due to electrical faults.
    *   **Symptoms:**
        *   The process variable reading is "stuck" at a particular value (often zero, maximum, or a default error code).
        *   The system might become unstable or stop functioning entirely.
        *   The controller will receive a constant error signal, leading to aggressive control action or no control action at all.
    *   **Examples:**
        *   A broken wire in a temperature sensor circuit.
        *   A short circuit in a motor encoder.
    *   **Fault Finding:**
        *   Check sensor output with a multimeter for continuity or expected voltage/current signals.
        *   Inspect wiring and connectors for physical damage.
    *   **Corrective Actions:**
        *   Repair or replace faulty wiring and connections.
        *   Replace the sensor.

### 2. Actuator Faults (LO1, LO2)

Actuators are responsible for implementing the control commands. Their failure to respond or respond incorrectly leads to a breakdown in the control loop.

*   **Actuator Saturation/Sticking:** The actuator reaches its physical limits or becomes mechanically jammed, preventing it from moving further or responding to commands.
    *   **Symptoms:**
        *   The process variable stops changing, even though the controller is issuing commands.
        *   The error signal might continue to grow if the integral term is active.
        *   The system might experience significant overshoot or undershoot, followed by a lack of response.
    *   **Examples:**
        *   A hydraulic cylinder that reaches its end-of-travel and cannot move further.
        *   A valve that is stuck partially open due to debris.
    *   **Fault Finding:**
        *   Manually command the actuator to move and observe its behavior.
        *   Check for mechanical obstructions or binding.
        *   Monitor the actuator's input signal to ensure it's receiving the correct command.
    *   **Corrective Actions:**
        *   Clear obstructions and lubricate moving parts.
        *   Repair or replace the actuator.
        *   Ensure the controller commands do not exceed actuator limits.

*   **Actuator Nonlinearity:** The actuator's response is not linear with respect to the input command.
    *   **Symptoms:**
        *   The system might exhibit different levels of responsiveness at different operating points.
        *   Performance might degrade significantly at higher or lower setpoints.
        *   Tuning a PID controller can become very difficult.
    *   **Examples:**
        *   A DC motor with significant friction at low speeds.
        *   A valve that has a non-uniform flow rate over its travel.
    *   **Fault Finding:**
        *   Apply a range of commands and plot actuator output against input.
        *   Identify regions of poor linearity.
    *   **Corrective Actions:**
        *   Implement gain scheduling in the controller to compensate for nonlinearity.
        *   Replace the actuator with a more linear one.
        *   Modify the system to reduce the source of nonlinearity (e.g., reduce friction).

*   **Actuator Failure (Loss of Power/Signal):** The actuator is not receiving the necessary power or control signal.
    *   **Symptoms:**
        *   No response from the actuator, regardless of controller commands.
        *   The process variable remains at its current value or drifts due to external forces.
        *   The system may halt or become unstable.
    *   **Examples:**
        *   A blown fuse for a motor.
        *   A broken wire in the control signal line to a solenoid valve.
    *   **Fault Finding:**
        *   Check power supply to the actuator.
        *   Verify control signal presence and level at the actuator's input.
        *   Inspect wiring and connections.
    *   **Corrective Actions:**
        *   Restore power supply.
        *   Repair or replace faulty wiring and connections.

### 3. Controller Parameter Faults and Misconfigurations (LO1, LO2, LO5)

Incorrectly tuned or configured controller parameters can lead to poor performance or instability.

*   **Incorrect $K_p$ (Proportional Gain):**
    *   **Too low $K_p$:**
        *   **Symptoms:** Slow response, large steady-state error. The system might eventually reach the setpoint, but it takes a long time.
        *   **Impact on PID:** The system will be sluggish and may not effectively correct for disturbances.
    *   **Too high $K_p$:**
        *   **Symptoms:** Fast initial response, but often leads to oscillation and overshoot. Can cause instability.
        *   **Impact on PID:** The P term contributes to aggressive control, potentially making the system unstable if too high.
    *   **Fault Finding:** Observe the system's response to setpoint changes or disturbances.
    *   **Corrective Actions:** Tune $K_p$ to achieve a balance between response speed and stability.

*   **Incorrect $K_i$ (Integral Gain):**
    *   **Too low $K_i$:**
        *   **Symptoms:** Slow elimination of steady-state error. The system may settle close to the setpoint but with a persistent offset for a longer duration.
        *   **Impact on PID:** The I term's effectiveness in removing steady-state error is reduced.
    *   **Too high $K_i$:**
        *   **Symptoms:** Fast elimination of steady-state error, but can cause overshoot, oscillations, and integrator wind-up (discussed below).
        *   **Impact on PID:** Aggressive integral action can destabilize the system.
    *   **Fault Finding:** Monitor the system's steady-state performance and the rate at which any offset is eliminated.
    *   **Corrective Actions:** Tune $K_i$ to eliminate steady-state error within an acceptable time without causing excessive overshoot or oscillations.

*   **Incorrect $K_d$ (Derivative Gain):**
    *   **Too low $K_d$:**
        *   **Symptoms:** Insufficient damping of oscillations. The system might still exhibit overshoot and ringing after disturbances.
        *   **Impact on PID:** The damping effect of the D term is weak.
    *   **Too high $K_d$:**
        *   **Symptoms:** Amplifies high-frequency noise in the sensor signal, leading to jerky actuator movement and potential instability. Very sensitive to noise.
        *   **Impact on PID:** Excessive derivative action can make the controller overly sensitive to noise and potentially unstable.
    *   **Fault Finding:** Observe the system's response to disturbances, particularly the presence and duration of oscillations. Also, monitor actuator behavior for erratic movements.
    *   **Corrective Actions:** Tune $K_d$ to provide adequate damping without amplifying noise. Often, a filtered derivative is used to mitigate noise sensitivity.

*   **Integral Wind-up:** This is a common problem with integral controllers when the actuator is saturated.
    *   **Description:** When the actuator is at its limit (e.g., valve fully open or motor at maximum speed), the error may still be large. The integral term will continue to accumulate this error, causing its output to become very large (it "winds up"). When the error eventually reduces, the large accumulated integral term can take a significant amount of time to decrease, causing prolonged overshoot and sluggish recovery once the actuator is no longer saturated.
    *   **Symptoms:**
        *   Large and sustained overshoot after a setpoint change or disturbance, especially when the actuator was previously saturated.
        *   Slow return to the setpoint after saturation is removed.
    *   **Examples:**
        *   A motor driven to its maximum speed for an extended period due to a large error. When the error decreases, the motor continues to run at max speed for a while before slowing down.
    *   **Fault Finding:** Observe the controller output and actuator state when the system is at its limits.
    *   **Corrective Actions:**
        *   **Anti-windup strategies:**
            *   **Clamping:** Stop accumulating the integral term when the controller output reaches actuator limits.
            *   **Back-calculation:** Reduce the integral term based on the difference between the saturated controller output and the unsaturated one.
            *   **Conditional Integration:** Only integrate when the error is reducing or when the actuator is not saturated.
        *   Bolton, Chapter 5 (Fifth Edition, 2015) discusses controller tuning and the issue of integral wind-up in detail. Histand & Alciatore, Chapter 10 (2nd Edition, 2005) also covers PID controller implementation and practical considerations like wind-up.

*   **Incorrect Controller Type/Configuration:** Using a P controller for a system that requires integral action to eliminate steady-state error, or misconfiguring PID parameters.
    *   **Symptoms:**
        *   Persistent steady-state error with a P controller.
        *   Over-aggressive or sluggish response with inappropriate PID tuning.
        *   Instability due to incorrect parameter values.
    *   **Fault Finding:** Analyze the system's performance characteristics and compare them to the expected behavior of different controller types.
    *   **Corrective Actions:**
        *   Select the appropriate controller type (P, PI, or PID) based on system requirements.
        *   Retune the controller parameters.

### 4. System Dynamics Faults (LO1, LO2, LO4)

These faults relate to changes in the behavior of the physical system being controlled, often due to wear, damage, or environmental changes.

*   **Changes in System Inertia/Resistance:**
    *   **Description:** The physical properties of the system that affect its response change over time.
    *   **Symptoms:**
        *   The system becomes slower or faster to respond to control signals.
        *   Overshoot or oscillation patterns change.
        *   Tuning parameters that worked previously may no longer be effective.
    *   **Examples:**
        *   Increased friction in a mechanical system due to wear.
        *   Reduced mass in a robot arm due to removal of a payload.
    *   **Fault Finding:** Compare current system response to baseline performance.
    *   **Corrective Actions:**
        *   Retune the controller.
        *   Investigate and address the underlying physical cause (e.g., lubrication, repair).

*   **Dead Zone:** A range of input to the actuator where there is no response.
    *   **Description:** A small band of error where the controller output does not cause any change in the actuator's position or output.
    *   **Symptoms:**
        *   Small errors are ignored, leading to a small but persistent deadband around the setpoint.
        *   The system might "hunt" or oscillate with small amplitudes as the controller tries to overcome the dead zone.
    *   **Examples:**
        *   Backlash in a gear train.
        *   A small gap in a hydraulic valve that needs to be overcome before flow starts.
    *   **Fault Finding:** Apply small, incremental changes to the controller output and observe actuator response.
    *   **Corrective Actions:**
        *   Increase the P-gain to overcome the dead zone (but this can lead to instability).
        *   Implement a deadband compensation in the controller logic (e.g., only activate integration when the error is outside the deadband).
        *   Mechanical adjustment or repair to reduce backlash.

### 5. Noise in Measurement or Control Signals (LO1, LO2)

Noise can corrupt sensor readings or controller outputs, leading to erratic behavior.

*   **Sensor Noise:** Random fluctuations in the sensor output.
    *   **Symptoms:**
        *   The process variable fluctuates around the setpoint even when the system is stable.
        *   The derivative term in a PID controller can amplify this noise, causing jerky actuator movements.
    *   **Fault Finding:** Observe the raw sensor data.
    *   **Corrective Actions:**
        *   **Filtering:** Implement digital filters (e.g., moving average, Kalman filter) in the sensor signal processing.
        *   **Reduce noise source:** Shielding, proper grounding, using differential signaling.
        *   **Lower Kd:** If using a PID, reducing the derivative gain can help, but it will also reduce the damping effect.

*   **Actuator Command Noise:** Random fluctuations in the signal sent to the actuator.
    *   **Symptoms:**
        *   The actuator jitters or moves erratically.
        *   The process variable might become unstable.
    *   **Fault Finding:** Monitor the control signal going to the actuator.
    *   **Corrective Actions:**
        *   Filter the controller output signal.
        *   Check for noise in the control signal generation path (e.g., PWM generation, DAC output).

## Troubleshooting Methodologies (LO3)

A systematic approach is crucial for efficient fault finding.

1.  **Define the Problem:** Clearly articulate what is going wrong. What are the symptoms? When did it start?
2.  **Gather Information:**
    *   **Observe:** Watch the system's behavior. Note any unusual sounds, vibrations, or visual indicators.
    *   **Monitor:** Use diagnostic tools (e.g., oscilloscopes, data loggers, control system software) to view sensor readings, actuator commands, and controller outputs in real-time.
    *   **Review:** Check system logs, previous maintenance records, and design documentation.
3.  **Formulate Hypotheses:** Based on the symptoms, brainstorm possible causes of the fault.
4.  **Test Hypotheses (Isolate the Fault):**
    *   **Divide and Conquer:** Break the system down into subsystems (sensor, controller, actuator, process). Test each subsystem independently.
    *   **Isolation:** Can you temporarily disable parts of the loop to see if the problem persists? For example, temporarily switch to manual mode to see if the controller is the issue.
    *   **Substitution:** If a component is suspected, can it be replaced with a known working one?
    *   **Check Inputs and Outputs:** Verify that the inputs to a component are correct and that its output is as expected.
5.  **Identify the Root Cause:** Once the faulty component or parameter is found, determine why it failed.
6.  **Implement Corrective Actions:** Fix the fault. This might involve repairing or replacing components, adjusting parameters, or modifying software.
7.  **Verify the Solution:** Test the system to ensure the fault is resolved and no new problems have been introduced.
8.  **Document:** Record the fault, the troubleshooting steps, the root cause, and the corrective actions taken. This is invaluable for future maintenance and troubleshooting.

**Example Scenario:** A robotic arm is not reaching its target position.

*   **Problem:** Robotic arm fails to reach target position. Symptoms: arm stops short, might exhibit oscillations.
*   **Information Gathering:** Monitor motor encoder (position feedback), motor driver current, and controller output.
*   **Hypotheses:**
    *   Encoder fault (incorrect position reading).
    *   Motor driver fault (insufficient torque).
    *   Controller tuning issue (too low gain).
    *   Mechanical issue (friction, binding).
*   **Testing:**
    *   Manually move the arm: if smooth, mechanical issue is less likely.
    *   Check encoder readings with arm held stationary: If readings are unstable or jumpy, encoder might be faulty.
    *   Check motor driver current: If current is very high but no movement, motor or driver might be saturated or jammed. If current is low, controller might not be commanding enough.
    *   Temporarily increase P-gain in the controller: If response improves significantly, tuning was the issue.
*   **Root Cause Identification:** Suppose encoder readings are found to be erratic.
*   **Corrective Action:** Replace the encoder.
*   **Verification:** Test the robotic arm's movement after replacement.

## Impact of Controller Type on Fault Behavior (LO5)

*   **P Controller:**
    *   **Steady-state error:** Inherently has steady-state error for many systems. If this error is unacceptable, it can be considered a "fault" in performance.
    *   **Disturbances:** Reacts to disturbances but may not fully eliminate them due to steady-state error.
    *   **Noise:** Can be sensitive to noise, especially with higher $K_p$.

*   **PI Controller:**
    *   **Steady-state error:** Eliminates steady-state error, which is a benefit. However, too high $K_i$ can lead to overshoot and oscillations.
    *   **Integral Wind-up:** Highly susceptible to integral wind-up if actuator saturation occurs. This is a critical fault to manage.

*   **PID Controller:**
    *   **Damping:** The D term adds damping, reducing overshoot and oscillations, improving transient response.
    *   **Noise Amplification:** The D term is highly sensitive to measurement noise. If sensor noise is high, the D term can cause significant problems.
    *   **Tuning Complexity:** More parameters to tune ($K_p$, $K_i$, $K_d$), increasing the potential for misconfiguration.

## Key Points to Remember (Highlighting Important Information)

*   **Systematic Troubleshooting:** Always follow a structured approach to diagnose faults. Don't guess!
*   **Sensor Integrity is Paramount:** A faulty sensor provides incorrect information, leading the controller to make wrong decisions.
*   **Actuator Limitations:** Understand the physical limits of your actuators. Saturation is a common issue that can lead to other problems like integral wind-up.
*   **PID Tuning is Crucial:** Incorrect PID gains can lead to sluggishness, instability, or oscillations.
*   **Integral Wind-up:** Implement anti-windup mechanisms for systems with integral action to prevent performance degradation when actuators saturate.
*   **Noise Management:** Be aware of noise in your system and implement filtering or other strategies to mitigate its impact, especially on the derivative term.
*   **Documentation:** Keep thorough records of faults and fixes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Practical Considerations and Textbook References

*   **Bolton, W. (4th Edition 2010):**
    *   **Chapter 5 (Digital Control Systems):** Discusses the implementation of digital controllers, including sampling rates and quantization, which can impact fault detection. It also touches upon controller tuning methods.
    *   **Chapter 6 (Microprocessor-based controllers):** Details how controllers are implemented in microcontrollers, highlighting potential software bugs or hardware interface issues that can act as faults.

*   **Histand, M. B., & Alciatore, D. G. (2003):**
    *   **Chapter 8 (Digital Control):** Covers digital PID controller implementation, including discrete-time formulation and practical aspects.
    *   **Chapter 10 (Introduction to Control Systems):** Provides a good overview of feedback control, including concepts like stability, transient response, and steady-state error, which are all affected by faults. It often implicitly assumes ideal components.

*   **Shetty, D., & Kolk, R. A. (2010):**
    *   **Chapter 6 (Feedback Control Systems):** Discusses various control strategies and their performance characteristics. Understanding these helps in identifying deviations caused by faults.
    *   **Chapter 7 (Digital Control Systems):** Covers digital implementations, control design techniques, and the challenges of real-world systems.

*   **Bishop, R. H. (2017):**
    *   **Chapter 5 (Controllers):** Likely covers different controller types and their tuning, essential for understanding what correct behavior looks like.
    *   **Chapter 6 (System Identification and Control Design):** Might touch upon adaptive control or robust control, which are designed to handle some level of parameter variation or uncertainty (which can be considered minor faults).

*   **Merzouki, R. et al. (2003):**
    *   **Chapter 4 (Fault Diagnosis and Fault-Tolerant Control):** This book directly addresses fault diagnosis and fault-tolerant control. It will provide deeper insights into advanced fault detection methods and strategies for maintaining system operation despite faults. Concepts like model-based fault detection are likely covered here.

## Practice Questions and Exercises

**Question 1:**
A temperature control system uses a PID controller. The system exhibits a constant offset of 5°C from the setpoint, and the offset is not decreasing over time. Which controller term is most likely misconfigured or absent, and what is the likely fault?

**Answer:**
The **Integral (I) term** is likely misconfigured (too low gain, $K_i$) or the integral action is disabled. The absence or insufficiency of the integral term prevents the controller from eliminating steady-state error, leading to a persistent offset.

**Question 2:**
In a motor speed control system using a PID controller, the motor suddenly starts vibrating erratically and the speed fluctuates wildly around the setpoint, even though the setpoint hasn't changed. What is a probable cause, considering the PID controller's sensitivity?

**Answer:**
This behavior strongly suggests that the **Derivative (D) term** is excessively sensitive to noise in the speed sensor signal. The noise is being amplified by the derivative calculation, causing jerky control commands to the motor driver, resulting in vibration and speed fluctuations. Alternatively, there might be a sudden increase in sensor noise.

**Question 3:**
You are troubleshooting a system where the actuator is commanded to move but doesn't. Upon checking the controller output, it is at its maximum value, and the system is also at its physical limit. However, the desired setpoint is still far from being reached. What fault is likely occurring, and what specific problem related to the integral term might arise?

**Answer:**
The actuator is likely **saturated** or **stuck**. If the controller uses an integral term ($K_i$), and the error persists while the actuator is saturated, **integral wind-up** will occur. The integral term's output will accumulate to a very large value, and once the actuator can move again, this large integral output will cause prolonged overshoot and slow recovery.

**Question 4:**
A system with a P controller is sluggish and has a large, constant steady-state error. What would be the initial step to improve its performance, and why?

**Answer:**
The initial step would be to **increase the Proportional Gain ($K_p$)**. A low $K_p$ results in a small controller output for a given error, leading to a slow response and a significant steady-state error. Increasing $K_p$ provides a larger controller output for the same error, which helps the system reach the setpoint faster and reduces the steady-state error. However, one must be cautious not to increase $K_p$ too much, as it can lead to oscillations and instability.

**Question 5:**
Describe a scenario where a sensor gain drift could cause a system to appear "over-sensitive" to setpoint changes.

**Answer:**
If a sensor's gain is incorrectly higher than it should be (e.g., it reports a higher temperature for a given input), the controller will perceive a larger error than actually exists. For a PID controller, this means:
*   The $K_p$ term will produce a larger control output.
*   The $K_i$ term will integrate a larger error.
*   The $K_d$ term will differentiate a larger (and potentially noisier) error.
All these factors can lead to an exaggerated response to setpoint changes, resulting in significant overshoot, oscillations, and a faster but less stable transient behavior, making the system appear "over-sensitive."

---