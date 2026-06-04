---
title: "Aim: To implement Automatic Voltage Regulator in MATLAB Simulink."
subject: "POWER SYSTEM LAB"
module: "Module 8: Automatic Voltage Regulator"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367f3"
status: "completed"
scrapedAt: "2026-05-23T16:31:05.030Z"
---
# Power System Lab: Module 8 - Automatic Voltage Regulator (AVR)

## Topic: Implementation of Automatic Voltage Regulator in MATLAB Simulink

### 1. Introduction to Automatic Voltage Regulators (AVR)

**1.1 What is an AVR?**

An Automatic Voltage Regulator (AVR) is a crucial component in power systems responsible for maintaining the terminal voltage of a synchronous generator within acceptable limits, despite variations in load and excitation. It ensures stable operation and good power quality.

**1.2 Why is AVR important?**

*   **Voltage Stability:** Prevents large voltage fluctuations that can cause equipment damage or system instability.
*   **Power Quality:** Ensures a consistent and high-quality voltage supply to consumers.
*   **Economic Operation:** Allows generators to operate efficiently over a wider range of loads.
*   **Grid Interconnection:** Facilitates the stable connection and power transfer between generators and the grid.

**1.3 Basic AVR System Components**

A typical AVR system comprises the following main blocks:

*   **Sensor (G):** Measures the generator's terminal voltage.
*   **Amplifier (A):** Amplifies the error signal between the reference voltage and the measured voltage.
*   **Exciter (E):** Provides the DC excitation current to the generator's field winding.
*   **Generator (G):** The synchronous machine itself, whose terminal voltage is being regulated.
*   **Limiter:** Protects the generator from over-excitation (leading to field winding overheating) and under-excitation (leading to instability).

**1.4 Block Diagram of a Basic AVR System**

```
      +--------------------+     +-------------------+     +-----------------+     +-----------------+
      | Reference Voltage  | --> |     Summation     | --> | Amplifier (A)   | --> | Exciter (E)     |
      +--------------------+     +-------------------+     +-----------------+     +-----------------+
              ^                                                    |                       |
              |                                                    |                       |
      +--------------------+                                       |                       |
      | Sensor (G)         | -------------------------------------|-----------------------|--> Terminal Voltage (Vt) of Generator
      +--------------------+                                                               |
                                                                                             |
                                                                                             V
                                                                                      +-----------------+
                                                                                      | Generator (G)   |
                                                                                      +-----------------+
```

**1.5 Key Concepts and Definitions**

*   **Terminal Voltage (Vt):** The voltage measured at the terminals of the synchronous generator.
*   **Reference Voltage (Vref):** The desired or setpoint voltage for the generator.
*   **Error Signal (ΔV):** The difference between the reference voltage and the measured terminal voltage (Vref - Vt).
*   **Excitation Voltage (Efd):** The DC voltage applied to the generator's field winding, which controls the magnetic flux and hence the generated voltage.
*   **Gain (Ka) and Time Constant (Ta):** Parameters characterizing the amplifier.
*   **Exciter Gain (Ke) and Time Constant (Te):** Parameters characterizing the exciter.
*   **Generator Gain (Kg) and Time Constant (Tg):** Parameters characterizing the synchronous generator's response to excitation changes.
*   **Damping Signal:** A signal, often derived from the generator's speed or power, used to improve the transient stability of the system.

### 2. Modeling Components for MATLAB Simulink

To implement an AVR in Simulink, we need to create mathematical models for each component. These models are typically represented by transfer functions.

**2.1 Sensor (G)**

The sensor's function is to measure the voltage. In a simplified model, it's often assumed to have a fast response and can be represented by a gain of 1, or a small time delay.

*   **Transfer Function (Simplified):**
    $G_s(s) = 1$ (Assuming instantaneous and accurate measurement)
    Alternatively, a small time constant can be included: $G_s(s) = \frac{1}{T_s s + 1}$

**2.2 Amplifier (A)**

The amplifier provides the gain to the error signal. It's usually modeled as a first-order system.

*   **Transfer Function:**
    $A(s) = \frac{K_A}{T_A s + 1}$
    Where:
    *   $K_A$: Amplifier gain
    *   $T_A$: Amplifier time constant

**2.3 Exciter (E)**

The exciter's role is to boost the amplified signal and provide the excitation voltage. It's also modeled as a first-order system.

*   **Transfer Function:**
    $E(s) = \frac{K_E}{T_E s + 1}$
    Where:
    *   $K_E$: Exciter gain
    *   $T_E$: Exciter time constant

**2.4 Synchronous Generator (G)**

The generator's response to changes in excitation voltage is complex. A simplified model often represents it as a first-order system relating the field voltage to the generated internal voltage.

*   **Transfer Function:**
    $G(s) = \frac{K_G}{T_G s + 1}$
    Where:
    *   $K_G$: Generator gain (ratio of change in internal voltage to change in field voltage)
    *   $T_G$: Generator time constant

**2.5 Limiter**

Limiters are essential for protecting the AVR and the generator. They prevent the excitation voltage from exceeding predefined maximum or minimum values. These are typically implemented using "Saturation" blocks in Simulink.

*   **Maximum Excitation Voltage (Efd_max)**
*   **Minimum Excitation Voltage (Efd_min)**

### 3. Implementing AVR in MATLAB Simulink

**3.1 Building the Simulink Model**

**Objective:** To create a Simulink model of a basic AVR system.

**Steps:**

1.  **Open MATLAB and Start Simulink:**
    *   Type `simulink` in the MATLAB Command Window and press Enter.
    *   Click on "Blank Model" to create a new model.

2.  **Add Necessary Blocks:**
    *   From the "Sources" library:
        *   `Constant` (for Reference Voltage)
        *   `Step` (to simulate load changes or disturbances)
    *   From the "Math Operations" library:
        *   `Sum` (for summing the reference and feedback signals)
        *   `Gain` (for implementing the gains $K_A, K_E, K_G$)
    *   From the "Continuous" library:
        *   `Transfer Fcn` (for modeling the amplifier, exciter, and generator dynamics)
    *   From the "Discontinuities" library:
        *   `Saturation` (for implementing excitation voltage limits)
    *   From the "Sinks" library:
        *   `Scope` (to visualize the terminal voltage, reference voltage, and excitation voltage)

3.  **Connect the Blocks as per the AVR Block Diagram:**

    *   **Reference Voltage:** Use a `Constant` block for `Vref`.
    *   **Summation:**
        *   Connect the `Constant` block (Vref) to the positive input of a `Sum` block.
        *   Connect the output of the generator's terminal voltage feedback to the negative input of the `Sum` block. This creates the error signal.
    *   **Amplifier:** Connect the output of the `Sum` block to the input of a `Transfer Fcn` block representing the amplifier ($A(s) = \frac{K_A}{T_A s + 1}$).
    *   **Exciter:** Connect the output of the amplifier to the input of another `Transfer Fcn` block representing the exciter ($E(s) = \frac{K_E}{T_E s + 1}$).
    *   **Limiter:** Connect the output of the exciter to a `Saturation` block. Set the Upper Limit to `Efd_max` and the Lower Limit to `Efd_min`.
    *   **Generator:** Connect the output of the `Saturation` block (which is the controlled excitation voltage, Efd) to the input of a `Transfer Fcn` block representing the generator ($G(s) = \frac{K_G}{T_G s + 1}$).
    *   **Feedback:** Connect the output of the generator (which represents the terminal voltage, Vt) to a `Scope` block for observation.
    *   **Feedback for Summation:** Connect the output of the generator (Vt) back to the negative input of the `Sum` block.

4.  **Configure Block Parameters:**

    *   **Constant (Vref):** Set the value to the desired reference voltage (e.g., 1.0 p.u.).
    *   **Transfer Fcn blocks:**
        *   **Amplifier:** Set Numerator to `[KA]` and Denominator to `[TA 1]`.
        *   **Exciter:** Set Numerator to `[KE]` and Denominator to `[TE 1]`.
        *   **Generator:** Set Numerator to `[KG]` and Denominator to `[TG 1]`.
    *   **Saturation:** Set Upper Limit to `Efd_max` and Lower Limit to `Efd_min`.

5.  **Add a Disturbance (Optional but Recommended):**
    *   To test the AVR's performance, introduce a disturbance. A common method is to use a `Step` block to simulate a sudden change in load or a change in the reference voltage.
    *   Connect a `Step` block to the input of the `Sum` block (parallel to Vref) or as a change in the `Constant` block's value.

6.  **Set Simulation Parameters:**
    *   Go to "Simulation" > "Model Configuration Parameters".
    *   Set the "Stop time" to a suitable value (e.g., 5-10 seconds) to observe the transient response.
    *   Select an appropriate solver (e.g., 'ode45' or 'ode23t').

7.  **Run the Simulation:**
    *   Click the "Run" button.

8.  **Analyze the Results:**
    *   Double-click the `Scope` block to view the plots of the terminal voltage and reference voltage. Observe how the terminal voltage settles to the reference value after a disturbance.

**Example Parameters for a Basic AVR:**

*   $K_A = 20$
*   $T_A = 0.05$ s
*   $K_E = 1$
*   $T_E = 0.5$ s
*   $K_G = 1$
*   $T_G = 1.0$ s
*   $V_{ref} = 1.0$ p.u.
*   $E_{fd\_max} = 5.0$ p.u.
*   $E_{fd\_min} = -5.0$ p.u.

**(Refer to the provided textbook/reference material for standard values of AVR and generator parameters if available.)**

### 4. Incorporating Additional Features (Advanced)

**4.1 Derivative Feedback (Lead-Lag Compensator)**

To improve the transient response and damping, a derivative term (or a lead-lag network) can be added to the AVR's control loop, often in parallel with the main amplifier path. This helps to anticipate future voltage changes.

*   **Simulink Implementation:** Add a `Transfer Fcn` block representing a lead-lag compensator and sum its output with the output of the amplifier before the exciter.
*   **Transfer Function (Example of Lead-Lag):** $D(s) = \frac{K_D (T_{d1} s + 1)}{(T_{d2} s + 1)}$

**4.2 PID Controller**

A Proportional-Integral-Derivative (PID) controller is a common and effective controller for AVRs. It offers more flexibility in tuning the system's response.

*   **PID Controller Transfer Function:**
    $C(s) = K_p + \frac{K_i}{s} + K_d s = \frac{K_d s^2 + K_p s + K_i}{s}$
*   **Simulink Implementation:** Use the built-in "PID Controller" block. Configure the $K_p, K_i, K_d$ gains.

**4.3 Load Disturbances**

Simulating load changes is crucial for testing the AVR's effectiveness.

*   **Simulink Implementation:** Use a `Step` block or a `Sine Wave` block to represent a change in the load connected to the generator. This change needs to be modeled to affect the generator's terminal voltage in the simulation. This often requires a more complex power system model that includes the generator, transformer, and load. For a simplified AVR model, you might directly inject a disturbance that affects the feedback signal or the generator output.

### 5. Analysis of AVR Performance

**5.1 Key Performance Metrics**

*   **Settling Time ($T_s$):** The time taken for the terminal voltage to settle within a specified tolerance band of the reference voltage after a disturbance.
*   **Rise Time ($T_r$):** The time taken for the terminal voltage to rise from 10% to 90% of its final value.
*   **Overshoot (%OS):** The maximum percentage by which the terminal voltage exceeds the reference voltage during the transient response.
*   **Steady-State Error:** The difference between the reference voltage and the final settled terminal voltage. An ideal AVR should have zero steady-state error.

**5.2 How to Analyze using Simulink:**

1.  **Observe the Scope:** Visually inspect the plots of the terminal voltage and reference voltage.
2.  **Use Simulation Data Inspector:** For more precise measurements, use the "Simulation Data Inspector" to zoom into specific regions of the response and measure time and amplitude values.
3.  **Parameter Tuning:** Experiment with different values of $K_A, T_A, K_E, T_E$ to observe their impact on the transient response (settling time, overshoot).
    *   **Increasing Gain ($K_A$):** Generally reduces settling time but can increase overshoot.
    *   **Decreasing Time Constants ($T_A, T_E$):** Also tends to reduce settling time and improve response speed, but can also lead to instability or excessive overshoot if too small.

### 6. Practical Considerations and Limitations

*   **Non-linearities:** Real-world AVRs and generators exhibit non-linear behavior (e.g., saturation of magnetic circuits, exciter saturation) that are not captured in simplified linear models.
*   **Excitation Limits:** The `Saturation` block is a simplified representation. Real limits involve thermal considerations and control logic.
*   **Damping:** Simple AVRs may not provide sufficient damping, leading to oscillations. This is addressed by adding derivative or power system stabilizer (PSS) signals.
*   **System Dynamics:** The AVR's performance is heavily influenced by the dynamics of the synchronous generator and the connected power system.
*   **Parameter Variations:** The parameters of the generator and exciter can change with operating conditions.

### 7. Connecting to Course Outcomes

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.**
    *   This entire module focuses on developing mathematical models (transfer functions) of AVR components and implementing them in MATLAB Simulink (dedicated software).
    *   By simulating the system and observing the transient response to disturbances, we are conducting a transient analysis. Steady-state analysis can be performed by observing the final settled value of the terminal voltage.
    *   **Knowledge Level (K3):** Applying knowledge to perform this task aligns with K3 (Application).

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.**
    *   While we are not conducting physical tests, the simulation acts as a virtual testing environment.
    *   Introducing disturbances (like load changes simulated by step inputs) and observing the AVR's response (e.g., settling time, overshoot) is analogous to performing tests like step response tests to analyze the performance of the AVR system.
    *   Tuning parameters and observing the impact is a form of performance analysis.
    *   **Knowledge Level (K3):** Analyzing the performance through simulations and parameter variations aligns with K3 (Application).

### 8. Practice Questions and Exercises

**Exercise 1: Basic AVR Simulation**

1.  **Objective:** Implement a basic AVR as described in Section 3.1 in Simulink.
2.  **Parameters:** Use the example parameters provided in Section 3.1.
3.  **Task:**
    *   Simulate the system for 5 seconds with no disturbance. Observe the initial response.
    *   Introduce a step change in the reference voltage from 1.0 p.u. to 1.1 p.u. at t = 1 second.
    *   Observe and record the terminal voltage response.
4.  **Analysis:**
    *   What is the steady-state error?
    *   Estimate the settling time and overshoot of the terminal voltage.

**Exercise 2: Effect of Gain ($K_A$)**

1.  **Objective:** Understand the impact of AVR amplifier gain on performance.
2.  **Task:**
    *   Using the same basic AVR model and the reference voltage step change from Exercise 1.
    *   Run simulations with $K_A = 10$, $K_A = 20$ (as before), and $K_A = 40$.
    *   Compare the terminal voltage responses in terms of settling time and overshoot.
3.  **Analysis:** Describe the relationship between $K_A$ and the system's transient response.

**Exercise 3: Effect of Time Constants ($T_A, T_E$)**

1.  **Objective:** Understand the impact of AVR time constants on performance.
2.  **Task:**
    *   Using the basic AVR model with $K_A = 20$.
    *   Run simulations with:
        *   $T_A = 0.1$ s (increased)
        *   $T_E = 0.1$ s (decreased)
    *   Compare these responses to the baseline response ($T_A = 0.05, T_E = 0.5$).
3.  **Analysis:** Describe the impact of decreasing or increasing these time constants.

**Exercise 4: Excitation Voltage Limiting**

1.  **Objective:** Observe the effect of excitation voltage limits.
2.  **Task:**
    *   Modify the AVR model by setting the excitation limits ($E_{fd\_max}, E_{fd\_min}$) to a much lower value, e.g., $E_{fd\_max} = 1.5$ p.u. and $E_{fd\_min} = -1.5$ p.u.
    *   Introduce a step change in reference voltage from 1.0 p.u. to 1.2 p.u.
    *   Observe the terminal voltage response and the excitation voltage signal (you might need another Scope block for Efd).
3.  **Analysis:**
    *   Does the excitation voltage reach its limit?
    *   How does the limitation affect the terminal voltage response?

---

**Answers to Exercises (Illustrative - actual values may vary slightly based on simulation setup):**

**Exercise 1:**

*   **Steady-State Error:** Ideally 0 p.u. (terminal voltage should match reference).
*   **Settling Time:** Approximately 1-2 seconds (for 2% tolerance).
*   **Overshoot:** Approximately 10-20%.

**Exercise 2:**

*   **$K_A = 10$:** Slower response, longer settling time, less overshoot.
*   **$K_A = 20$:** Moderate response.
*   **$K_A = 40$:** Faster response (shorter settling time), but significantly increased overshoot, potentially leading to instability.
*   **Relationship:** Higher $K_A$ leads to faster response but can worsen overshoot and stability.

**Exercise 3:**

*   **Increasing $T_A$ (e.g., to 0.1s):** Slows down the amplifier response, leading to a slower overall terminal voltage response and potentially more overshoot.
*   **Decreasing $T_E$ (e.g., to 0.1s):** Speeds up the exciter response, making the system more sensitive to changes. This can reduce settling time but might also increase overshoot or cause oscillations.
*   **Impact:** Time constants dictate the speed of response of the respective components. Smaller time constants mean faster components.

**Exercise 4:**

*   **Excitation Voltage Limit:** When the reference voltage is increased, the AVR will try to increase the excitation voltage. If the required excitation voltage exceeds $E_{fd\_max}$, the saturation block will limit it.
*   **Effect of Limitation:** The terminal voltage will not be able to reach the desired reference voltage as quickly, or at all, if the limit is encountered for an extended period. The response will be slower, and there might be a sustained steady-state error if the system cannot reach the reference even with maximum excitation.

---

### 9. Important Points to Remember

*   **Transfer Functions:** AVR components are often modeled as first-order systems (transfer functions).
*   **Simulink Blocks:** Understand the function of key blocks like `Sum`, `Gain`, `Transfer Fcn`, `Saturation`, and `Scope`.
*   **Feedback Loop:** The AVR operates on a negative feedback principle.
*   **Transient Response:** AVR performance is evaluated based on its transient response (settling time, overshoot).
*   **Parameter Tuning:** Gains and time constants are critical tuning parameters.
*   **Limits:** Excitation limits are crucial for safe generator operation.
*   **Disturbances:** Always test the AVR's response to realistic disturbances (e.g., load changes, reference voltage changes).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 10. References

**(Please refer to your specific course textbooks and reference books for detailed formulas, parameter values, and theoretical background. The following are common references for Power System Labs.)**

1.  **"Power System Analysis and Design"** by J. Duncan Glover, Mulukutla S. Sarma, and Openshaw.
2.  **"Power System Control and Stability"** by P. W. Sauer and M. A. Pai.
3.  **"Modern Power Systems Analysis"** by D. P. Kothari and I. J. Nagrath.
4.  **MATLAB/Simulink Documentation:** Official documentation for Simulink blocks and features related to control systems and power systems.

**(Ensure you consult your instructor or course syllabus for the officially recommended textbooks and any specific chapters or sections relevant to AVRs.)**