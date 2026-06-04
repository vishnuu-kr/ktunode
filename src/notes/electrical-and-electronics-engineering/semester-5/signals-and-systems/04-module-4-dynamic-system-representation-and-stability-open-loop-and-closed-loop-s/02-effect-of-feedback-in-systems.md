---
title: "Effect of feedback in  systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e3"
status: "completed"
scrapedAt: "2026-05-23T16:23:54.015Z"
---
# Signals and Systems: Module 4 - Dynamic System Representation and Stability: Open-loop and Closed-loop Systems

## Topic: Effect of Feedback in Systems

---

### 1. Introduction to Feedback

Feedback is a fundamental concept in the study of systems, particularly in control systems. It involves using the output of a system to influence its input. This creates a closed loop where the system's behavior is continuously monitored and adjusted.

**Key Concept:** Feedback is the process of comparing the system's output with a desired reference input and using the difference (error) to adjust the system's input to achieve the desired output.

**Types of Feedback:**

*   **Negative Feedback:** The output is subtracted from the reference input. This typically leads to improved stability, accuracy, and robustness.
*   **Positive Feedback:** The output is added to the reference input. This can lead to instability and oscillations.

**Textbook Reference:**
*   **Haykin & Van Veen:** Discusses feedback in the context of control systems and its role in shaping system behavior. (Chapter on Feedback Systems)
*   **Nise:** Provides a detailed treatment of feedback control systems, including negative feedback as the dominant type. (Chapter 1: Introduction to Control Systems)

---

### 2. Open-Loop vs. Closed-Loop Systems

Understanding the fundamental difference between open-loop and closed-loop systems is crucial to appreciating the effect of feedback.

**2.1. Open-Loop Systems**

*   **Definition:** In an open-loop system, the control action is independent of the system's output. The input is applied without considering the actual output.
*   **Characteristics:**
    *   Simpler structure and lower cost.
    *   Less accurate, as they are susceptible to disturbances and variations in system parameters.
    *   No inherent stability mechanism.
    *   Examples: Toaster (time-based operation), simple light switch, uncalibrated sprinkler system.

*   **Block Diagram:**
    ```
    +-------+     +--------+     +-------+
    | Input | --> | System | --> | Output|
    +-------+     +--------+     +-------+
    ```

**2.2. Closed-Loop Systems (Feedback Systems)**

*   **Definition:** In a closed-loop system, the control action is dependent on the system's output. The output is measured, compared to the desired input, and the error is used to adjust the input.
*   **Characteristics:**
    *   More complex structure and higher cost.
    *   More accurate and less susceptible to disturbances and parameter variations.
    *   Can achieve and maintain desired performance.
    *   Often inherently more stable due to the stabilizing effect of negative feedback.
    *   Examples: Thermostat controlling room temperature, cruise control in a car, human body temperature regulation.

*   **Block Diagram (with Negative Feedback):**
    ```
    +-------+     +-------+     +--------+     +-------+
    | Ref.  | --> | Summi | --> | System | --> | Output|
    | Input |     | ng    |     |        |     |       |
    +-------+     | Node  |     +--------+     +-------+
                  ^       |
                  |       |
                  |       |
                  +-------+
                    Output
                    (Measured)
    ```
    *   **Summing Node:** Typically subtracts the feedback signal from the reference input to generate the error signal.
    *   **Error Signal:** The difference between the reference input and the feedback signal.

**Course Outcome Alignment:**
*   **CO1, CO2, CO3:** Understanding these system types is foundational for representing signals and systems in different domains.
*   **CO4:** Stability is a core focus when comparing open-loop and closed-loop systems.

**Textbook Reference:**
*   **Nise:** Chapter 1, "Introduction to Control Systems," extensively contrasts open-loop and closed-loop systems.
*   **Ogata:** Chapter 1, "Introduction to Control Systems," covers the basic definitions and structures of feedback control systems.

---

### 3. Effects of Negative Feedback

Negative feedback is the primary mechanism that provides significant advantages in control systems.

**3.1. Reduction of Sensitivity to Parameter Variations**

*   **Concept:** Changes in the parameters of the forward-path system (e.g., due to aging, temperature changes) have a reduced effect on the overall system output when negative feedback is applied.
*   **Explanation:** The feedback loop continuously corrects for deviations caused by parameter changes.
*   **Mathematical Insight (Simplified):**
    Consider a simple closed-loop system with forward-path transfer function $G(s)$ and feedback path transfer function $H(s)$. The closed-loop transfer function is:
    $$T(s) = \frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)}$$
    If $G(s)$ changes to $G'(s)$, the new transfer function is:
    $$T'(s) = \frac{G'(s)}{1 + G'(s)H(s)}$$
    The change in output is influenced by the term $1 + G(s)H(s)$, often called the *open-loop gain* or *loop gain*. If the loop gain is much greater than 1 ($|G(s)H(s)| \gg 1$), then:
    $$T(s) \approx \frac{G(s)}{G(s)H(s)} = \frac{1}{H(s)}$$
    This shows that the closed-loop transfer function becomes largely independent of $G(s)$ and only dependent on the feedback path $H(s)$.

**3.2. Reduction of Sensitivity to Disturbances**

*   **Concept:** External disturbances that affect the system's output are also attenuated by negative feedback.
*   **Explanation:** Disturbances typically enter at some point in the forward path. The feedback loop detects the resulting change in output and generates an error signal that counteracts the disturbance.
*   **Mathematical Insight (Simplified):**
    Consider a disturbance $D(s)$ added to the output of the forward path:
    $$Y(s) = G(s)E(s) + D(s)$$
    where $E(s) = R(s) - H(s)Y(s)$. Substituting $E(s)$:
    $$Y(s) = G(s)(R(s) - H(s)Y(s)) + D(s)$$
    $$Y(s)(1 + G(s)H(s)) = G(s)R(s) + D(s)$$
    $$Y(s) = \frac{G(s)}{1 + G(s)H(s)}R(s) + \frac{1}{1 + G(s)H(s)}D(s)$$
    The term $\frac{1}{1 + G(s)H(s)}$ represents the attenuation factor for the disturbance. If the loop gain $|G(s)H(s)| \gg 1$, the disturbance's effect on the output is significantly reduced.

**3.3. Improvement of Transient Response**

*   **Concept:** Negative feedback can be used to shape the transient behavior of a system, making it respond faster and with less overshoot or oscillation.
*   **Explanation:** By introducing appropriate feedback elements (e.g., controllers like PID), the system's poles can be moved to locations that yield a more desirable transient response.
*   **Example:** A simple system might exhibit slow response and large oscillations. Adding a derivative controller in the feedback path can dampen oscillations and speed up the response.

**3.4. Increase in Bandwidth**

*   **Concept:** For control systems, bandwidth is often related to the speed of response. Negative feedback can increase the bandwidth of the system.
*   **Explanation:** As the loop gain increases, the frequencies at which the system can effectively track inputs also increase.

**3.5. Tendency to Cause Instability**

*   **Concept:** While beneficial, feedback (especially negative feedback) can also introduce instability if not properly designed.
*   **Explanation:** If the phase shift introduced by the system and feedback elements becomes significant at high frequencies, the negative feedback can effectively turn into positive feedback, leading to unbounded oscillations and instability. This is a critical aspect of stability analysis (covered in later modules).

**Course Outcome Alignment:**
*   **CO4:** This entire section directly addresses the stability of systems and how feedback influences it.
*   **CO1, CO2, CO3:** Understanding these effects is crucial for analyzing system behavior in time and frequency domains.

**Textbook Reference:**
*   **Nise:** Chapter 5, "Reduction of System Effects on System Performance," and Chapter 6, "Root Locus Techniques," detail how feedback affects system dynamics and stability.
*   **Haykin & Van Veen:** Chapter on Feedback Systems discusses these effects in detail, often with mathematical derivations.
*   **Ogata:** Chapter 5, "Root Locus Analysis," and Chapter 7, "Frequency Response Analysis," explain the impact of feedback on transient and steady-state responses.

---

### 4. Transfer Function of Closed-Loop Systems

The transfer function of a closed-loop system encapsulates its input-output relationship and is key to analyzing its behavior.

**4.1. Unity Feedback System**

*   **Definition:** A system where the feedback signal is directly compared to the reference input without any pre-processing in the feedback path. $H(s) = 1$.
*   **Closed-Loop Transfer Function:**
    $$T(s) = \frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)}$$
*   **Example:** A simple motor control system where the motor's speed is directly measured and fed back.

**4.2. Non-Unity Feedback System**

*   **Definition:** A system where the feedback path includes a transfer function $H(s) \neq 1$.
*   **Closed-Loop Transfer Function:**
    $$T(s) = \frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)}$$
    *   $G(s)$: Forward-path transfer function.
    *   $H(s)$: Feedback-path transfer function.
    *   $G(s)H(s)$: Loop gain.
    *   $1 + G(s)H(s)$: Characteristic equation denominator.

**4.3. Block Diagram Reduction**

*   To derive the closed-loop transfer function for more complex systems, block diagram reduction techniques are employed. These involve manipulating cascaded, parallel, and feedback loops.

**Example of Block Diagram Reduction:**
Consider a system with a disturbance $D(s)$ entering after $G_1(s)$ and a feedback loop:

```
+-------+     +--------+     +--------+     +-------+
| Ref.  | --> | Summi  | --> |  G1(s) | --> |  G2(s)| --> | Output|
| Input |     | ng     |     +--------+     +--------+     +-------+
+-------+     | Node   |           |                          ^
              +-------+           |                          |
                    ^             +--------------------------+
                    |
                    |  +-------+
                    +--|  H(s) |
                       +-------+
```

1.  **Combine Forward Paths:** $G(s) = G_1(s)G_2(s)$
2.  **Apply Closed-Loop Formula:**
    $$T(s) = \frac{G_1(s)G_2(s)}{1 + G_1(s)G_2(s)H(s)}$$

The effect of disturbance $D(s)$ can be analyzed similarly by considering it as a separate input.

**Course Outcome Alignment:**
*   **CO1, CO2, CO3:** Deriving transfer functions is fundamental to representing systems in time and frequency (or Z) domains.
*   **CO4:** The denominator of the closed-loop transfer function, $1 + G(s)H(s)$, is crucial for stability analysis (poles of the closed-loop system).

**Textbook Reference:**
*   **Nise:** Chapter 2, "Block Diagram Algebra and Transfer Functions," covers block diagram reduction. Chapter 4, "State-Space Analysis," also presents system representations.
*   **Ogata:** Chapter 2, "Mathematical Modeling of Dynamic Systems," and Chapter 3, "Block Diagrams and Signal Flow Graphs," are relevant.
*   **Haykin & Van Veen:** Chapter on Control Systems provides derivations for various feedback configurations.

---

### 5. Stability Analysis with Feedback

Feedback significantly impacts the stability of a system. The stability of a closed-loop system is determined by the location of its poles.

**5.1. Stability Definition**

*   **Bounded-Input, Bounded-Output (BIBO) Stability:** A system is BIBO stable if for every bounded input, the output is also bounded.
*   **Mathematical Condition:** For a Linear Time-Invariant (LTI) system, BIBO stability is achieved if and only if all the poles of its transfer function lie in the left half of the s-plane (for continuous-time systems) or inside the unit circle (for discrete-time systems).

**5.2. Characteristic Equation**

*   **Definition:** The characteristic equation of a closed-loop system is obtained by setting the denominator of its closed-loop transfer function to zero:
    $$1 + G(s)H(s) = 0$$
    or
    $$G(s)H(s) = -1$$
*   **Significance:** The roots of the characteristic equation are the *closed-loop poles* of the system. The location of these poles dictates the system's stability and transient response.

**5.3. Methods for Stability Analysis (with Feedback)**

*   **Root Locus:** A graphical technique that shows how the closed-loop poles move as a parameter (usually gain K) in the open-loop transfer function $G(s)H(s)$ is varied. This helps identify the range of K for stability.
    *   **Textbook Reference:** Nise (Chapter 6), Ogata (Chapter 5).
*   **Routh-Hurwitz Criterion:** An analytical method that determines the number of roots of the characteristic equation that lie in the right half of the s-plane without explicitly calculating the roots. It involves constructing a Routh array from the coefficients of the characteristic polynomial.
    *   **Textbook Reference:** Nise (Chapter 4), Ogata (Chapter 6).
*   **Nyquist Criterion:** A frequency-domain method used to determine stability by analyzing the open-loop frequency response $G(j\omega)H(j\omega)$. It relates the encirclements of the critical point (-1, 0) in the Nyquist plot to the number of unstable closed-loop poles.
    *   **Textbook Reference:** Nise (Chapter 9), Haykin & Van Veen (Chapter on Frequency-Domain Analysis).
*   **Bode Plots:** Another frequency-domain tool that visualizes the magnitude and phase of the open-loop transfer function $G(j\omega)H(j\omega)$ versus frequency. Gain margin and phase margin, derived from Bode plots, provide measures of relative stability.
    *   **Textbook Reference:** Nise (Chapter 8), Haykin & Van Veen (Chapter on Frequency-Domain Analysis).

**Course Outcome Alignment:**
*   **CO4:** This entire section is dedicated to analyzing the stability of continuous-time dynamical systems, directly addressing this outcome.
*   **CO2:** Frequency-domain methods (Nyquist, Bode) are heavily reliant on representing systems in the frequency domain.

**Important Point to Remember:**
The stability of a closed-loop system is determined by the roots of $1 + G(s)H(s) = 0$, not $G(s) = 0$. This means a stable open-loop system can become unstable with feedback, and vice-versa.

---

### 6. Examples of Feedback in Systems

Let's illustrate the concepts with examples.

**Example 1: Temperature Control System (Thermostat)**

*   **Objective:** Maintain a room at a desired temperature.
*   **Open-Loop:** Imagine a heater that runs for a fixed time regardless of room temperature. This is inefficient and inaccurate.
*   **Closed-Loop (with Negative Feedback):**
    *   **Reference Input:** Desired temperature (setpoint).
    *   **System:** Heater, room air, sensor. $G(s)$ represents the thermal dynamics.
    *   **Output:** Actual room temperature.
    *   **Feedback:** Temperature sensor measures the actual temperature.
    *   **Summing Node:** Compares desired temp with actual temp to produce an error signal (e.g., if actual temp < desired temp, error is positive, turn on heater).
    *   **Controller:** Uses the error to activate/deactivate the heater.
    *   **Effect of Feedback:** If the room cools down due to an open window (disturbance), the sensor detects it, generates an error, and the heater turns on to compensate, maintaining the desired temperature.

**Example 2: Cruise Control in a Car**

*   **Objective:** Maintain a constant vehicle speed.
*   **Open-Loop:** Pressing the accelerator to a fixed position. Speed will vary with road gradient and wind.
*   **Closed-Loop (with Negative Feedback):**
    *   **Reference Input:** Desired speed.
    *   **System:** Engine, drivetrain, vehicle dynamics. $G(s)$ represents how engine torque translates to speed.
    *   **Output:** Actual vehicle speed.
    *   **Feedback:** Speed sensor measures actual speed.
    *   **Summing Node:** Compares desired speed with actual speed to generate an error.
    *   **Controller:** Adjusts throttle position (engine input) based on the error.
    *   **Effect of Feedback:** If the car encounters an uphill gradient (disturbance), its speed tends to drop. The feedback system detects this speed reduction, calculates an error, and increases the throttle to maintain the desired speed.

**Example 3: Inverting Operational Amplifier (Op-Amp) Circuit**

*   **Concept:** Op-amps are fundamental building blocks in electronics, and feedback is crucial for their stable and predictable operation.
*   **Open-Loop Op-Amp:** Has extremely high gain, making it unsuitable for linear amplification due to saturation.
*   **Closed-Loop Op-Amp (Inverting Amplifier):**
    *   **System:** The op-amp itself with a very high open-loop gain $A$.
    *   **Feedback:** A resistor $R_f$ connects the output to the inverting input.
    *   **Input:** Applied through a resistor $R_1$ to the inverting input.
    *   **Non-inverting input:** Connected to ground.
    *   **Transfer Function Derivation:**
        Let $V_o$ be the output voltage, $V^-$ be the voltage at the inverting input, and $V^+$ be the voltage at the non-inverting input.
        $V^+ = 0$ (connected to ground).
        The op-amp amplifies the difference between its inputs: $V_o = A(V^+ - V^-) = A(0 - V^-) = -AV^-$.
        Due to the virtual short concept in ideal op-amps with negative feedback, $V^- \approx V^+ = 0$.
        Applying Kirchhoff's Current Law at the inverting node:
        $\frac{V_{in} - V^-}{R_1} + \frac{V_o - V^-}{R_f} = 0$
        Substituting $V^- = 0$:
        $\frac{V_{in}}{R_1} + \frac{V_o}{R_f} = 0$
        $\frac{V_o}{R_f} = -\frac{V_{in}}{R_1}$
        $\frac{V_o}{V_{in}} = -\frac{R_f}{R_1}$
        This is the closed-loop transfer function (in this case, just a gain). The very high gain $A$ of the op-amp is made irrelevant by the feedback network, making the gain dependent only on the external resistors.
    *   **Effect of Feedback:** Reduces the overall gain from infinity to a stable, predictable value determined by external resistors, and significantly reduces distortion and sensitivity to variations in the op-amp's open-loop gain.

**Course Outcome Alignment:**
*   **CO1, CO2, CO3:** Understanding these examples helps in formulating mathematical models (transfer functions) for real-world systems.

---

### 7. Practice Questions and Answers

**Question 1:**
A system has an open-loop transfer function $G(s) = \frac{10}{s+1}$. If this system is placed in a unity negative feedback configuration, what is the closed-loop transfer function?
**(CO1, CO2, CO3, CO4)**

**Answer 1:**
For a unity negative feedback system, the closed-loop transfer function is $T(s) = \frac{G(s)}{1 + G(s)}$.
Substituting $G(s) = \frac{10}{s+1}$:
$T(s) = \frac{\frac{10}{s+1}}{1 + \frac{10}{s+1}} = \frac{\frac{10}{s+1}}{\frac{s+1+10}{s+1}} = \frac{10}{s+11}$.

**Question 2:**
Consider a closed-loop system with $G(s) = \frac{K}{s(s+2)}$ and $H(s) = 1$. For what range of $K$ is the system stable?
**(CO4)**

**Answer 2:**
The characteristic equation is $1 + G(s)H(s) = 0$.
$1 + \frac{K}{s(s+2)} \cdot 1 = 0$
$s(s+2) + K = 0$
$s^2 + 2s + K = 0$
This is a second-order polynomial. For stability, all coefficients must be positive. Here, the coefficients of $s^2$ (1) and $s$ (2) are positive. The constant term is $K$.
For stability, $K > 0$.
Using Routh-Hurwitz criterion:
Characteristic polynomial: $P(s) = s^2 + 2s + K$
Routh Array:
$s^2$: 1  $K$
$s^1$: 2  0
$s^0$: $K$ (calculated as $\frac{(2)(0) - (1)(K)}{2} = -K/2$. Correction needed, the calculation is $\frac{(2)(K) - (1)(0)}{2} = K$)

Corrected Routh Array:
$s^2$: 1  $K$
$s^1$: 2  0
$s^0$: $K$ (calculated as $\frac{(2)(K) - (1)(0)}{2} = K$)

For stability, all elements in the first column must be positive.
1 > 0 (true)
2 > 0 (true)
$K > 0$ (required)
Therefore, the system is stable for $0 < K$.

**Question 3:**
What is the primary advantage of using negative feedback in control systems?
**(CO1, CO2, CO3, CO4)**

**Answer 3:**
The primary advantage of negative feedback is its ability to reduce sensitivity to parameter variations and external disturbances, thereby improving the accuracy and robustness of the system. It also helps in shaping the transient response and increasing bandwidth.

**Question 4:**
An open-loop system is generally more or less accurate than a closed-loop system? Explain why.
**(CO1, CO2, CO3, CO4)**

**Answer 4:**
An open-loop system is generally less accurate than a closed-loop system. This is because the open-loop system's control action is not dependent on the actual output. Any inaccuracies in the system itself or external disturbances that affect the output will not be corrected, leading to a deviation from the desired outcome. In contrast, a closed-loop system continuously monitors its output, compares it to the desired input, and uses the error to adjust the control action, thus compensating for inaccuracies and disturbances.

---

### 8. Important Points to Remember

*   **Feedback:** Using the system's output to influence its input.
*   **Open-Loop:** Control action is independent of the output. Simpler, less accurate.
*   **Closed-Loop:** Control action depends on the output. More complex, more accurate, robust.
*   **Negative Feedback:** Primary type used for control. Improves accuracy, reduces sensitivity to disturbances/parameter variations, can improve transient response, but can also lead to instability if not designed correctly.
*   **Closed-Loop Transfer Function:** $T(s) = \frac{G(s)}{1 + G(s)H(s)}$ for a general feedback system.
*   **Characteristic Equation:** $1 + G(s)H(s) = 0$. Its roots (closed-loop poles) determine stability.
*   **Stability:** Determined by the location of closed-loop poles (left-half s-plane for continuous-time).
*   **Feedback Impact:** Can make a stable open-loop system unstable, and an unstable open-loop system stable.
*   **Key Stability Analysis Tools:** Root Locus, Routh-Hurwitz, Nyquist Criterion, Bode Plots.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
