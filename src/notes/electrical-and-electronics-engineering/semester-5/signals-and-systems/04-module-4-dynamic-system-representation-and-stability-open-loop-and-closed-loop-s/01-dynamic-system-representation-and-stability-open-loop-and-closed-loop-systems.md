---
title: "Dynamic System Representation and Stability: Open loop and closed loop systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e2"
status: "completed"
scrapedAt: "2026-05-23T16:23:53.309Z"
---
# Signals and Systems: Module 4 - Dynamic System Representation and Stability

This module delves into the crucial aspects of understanding and controlling dynamic systems, focusing on their representation and stability. We will explore the fundamental differences and operational characteristics of open-loop and closed-loop systems, which are foundational concepts in both signals and control theory.

---

## Module Objectives:

Upon successful completion of this module, you will be able to:

*   Understand and differentiate between open-loop and closed-loop system configurations.
*   Represent dynamic systems using various mathematical tools, including differential equations and transfer functions.
*   Analyze the concept of stability in dynamic systems and identify factors affecting it.
*   Apply knowledge of system representation to analyze the behavior and stability of both open-loop and closed-loop systems.

---

## Course Outcomes Addressed:

*   **CO1 (K2):** To represent continuous and discrete time signals in time domain and perform various mathematical operations. (While this module primarily focuses on systems, understanding signal representation is a prerequisite for analyzing system responses).
*   **CO2 (K3):** To represent continuous time signals and systems in frequency domain. (Transfer functions, a key tool for system representation and analysis, are inherently linked to frequency domain analysis).
*   **CO3 (K3):** To represent discrete time signals and systems in Z-domain. (Similar to CO2, Z-domain representation is crucial for discrete-time systems, and the concepts of stability apply analogously).
*   **CO4 (K3):** To analyse the stability of continuous time dynamical systems. (This is a core focus of this module).

---

## 1. Introduction to Dynamic Systems

A **dynamic system** is a system whose state changes over time. Its behavior at any given time depends on its previous states and the inputs applied. Understanding how these systems respond to inputs and disturbances is critical for their design, analysis, and control.

**Key Concepts:**

*   **State:** The minimum set of variables that fully describe the condition of a system at any given time.
*   **Input:** External signals or forces applied to the system.
*   **Output:** The measured response of the system to the input.
*   **Dynamics:** The characteristic behavior of the system over time, often described by differential equations (for continuous-time systems) or difference equations (for discrete-time systems).

**Textbook Reference:**

*   **Haykin & Van Veen:** Chapters often introduce system representation using differential equations and impulse responses.
*   **Ogata:** Focuses on discrete-time systems, utilizing difference equations and the Z-transform.
*   **Nise:** Provides a comprehensive overview of continuous-time systems, emphasizing state-space and transfer function representations.

---

## 2. Open-Loop Systems

An **open-loop system** is a system where the output has no influence on the control action. The control action is independent of the system's output. The system operates based on a predetermined sequence of operations or a pre-set control signal.

**Key Characteristics:**

*   **No Feedback:** The defining feature is the absence of a feedback path.
*   **Simplicity:** Generally simpler in design and implementation.
*   **Less Accurate:** Highly susceptible to disturbances and variations in system parameters. Accuracy depends heavily on calibration and predictable operating conditions.
*   **No Self-Correction:** Cannot compensate for unexpected changes or errors.

**Mathematical Representation:**

The relationship between input and output can often be represented by:

*   **Differential Equations (Continuous-Time):**
    $\frac{d^n y(t)}{dt^n} + a_{n-1}\frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_0 y(t) = b_m\frac{d^m x(t)}{dt^m} + \dots + b_0 x(t)$
    Where:
    *   $y(t)$ is the output signal.
    *   $x(t)$ is the input signal.
    *   $a_i$ and $b_i$ are system coefficients.

*   **Transfer Functions (Continuous-Time):** Obtained by taking the Laplace Transform of the differential equation, assuming zero initial conditions.
    $H(s) = \frac{Y(s)}{X(s)} = \frac{b_m s^m + \dots + b_0}{s^n + a_{n-1} s^{n-1} + \dots + a_0}$
    The transfer function provides a complete description of the system's input-output relationship in the frequency domain.

*   **Difference Equations (Discrete-Time):**
    $y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

*   **Transfer Functions (Discrete-Time - Z-domain):** Obtained by taking the Z-transform of the difference equation.
    $H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + \dots + a_N z^{-N}}$

**Examples:**

*   **Automatic Toaster:** The toaster heats bread for a predetermined time, regardless of how toasted the bread actually is. Disturbances like voltage fluctuations or bread type variations will affect the outcome, but the toaster won't adjust.
*   **Washing Machine (with fixed timer):** It follows a pre-programmed cycle (wash, rinse, spin) for fixed durations. It doesn't check how clean the clothes are.
*   **Sprinkler System with a Timer:** Turns on at a set time for a set duration, irrespective of whether it has rained recently or if the soil is already saturated.

**Textbook Reference:**

*   **Nise:** Chapter 1 provides an excellent introduction to control system classification, including open-loop systems, with numerous examples.
*   **Haykin & Van Veen:** Discusses system modeling using differential equations and their Laplace transforms, which are fundamental to open-loop system representation.

---

## 3. Closed-Loop Systems (Feedback Systems)

A **closed-loop system**, also known as a feedback system, is a system where the output is measured and compared to a desired reference input. The difference (error signal) is then used to adjust the control action. This feedback mechanism allows the system to self-correct and maintain the output closer to the desired value.

**Key Characteristics:**

*   **Feedback Path:** The output is fed back and compared to the reference input.
*   **Error Detection:** The difference between the reference and the actual output is the error signal.
*   **Improved Accuracy:** Significantly reduces the effects of disturbances and parameter variations.
*   **Stability Concerns:** Can introduce instability if not designed properly.
*   **Complexity:** Generally more complex to design and implement due to the feedback controller and sensor.

**Components of a Basic Closed-Loop System:**

1.  **Controller:** Processes the error signal and generates a control signal.
2.  **Actuator:** Converts the control signal into a physical action that affects the system.
3.  **System (Plant):** The actual process or device being controlled.
4.  **Sensor:** Measures the output of the system.
5.  **Summing Junction:** Compares the reference input with the measured output (feedback signal) to generate the error signal.

**Block Diagram Representation:**

```
       +------+      +--------+      +-------+      +-------+
r(t) -->| Sum  |----->| Control|----->| Actua |----->| Plant |-----> y(t)
       |      |      | Signal |      | tor   |      |       |
       +------+      +--------+      +-------+      +-------+
          ^                                                |
          |                                                |
          +------------------------------------------------+
                                     Sensor
```

*   $r(t)$: Reference input (desired output).
*   $e(t) = r(t) - y_f(t)$: Error signal.
*   $y_f(t)$: Feedback signal (measured output).
*   $u(t)$: Control signal.
*   $y(t)$: System output.

**Mathematical Representation (using Transfer Functions):**

Let $G_c(s)$ be the controller transfer function, $G_a(s)$ be the actuator transfer function, $G_p(s)$ be the plant transfer function, and $H(s)$ be the sensor transfer function. The overall system transfer function $T(s)$ for a closed-loop system is:

$T(s) = \frac{Y(s)}{R(s)} = \frac{G_c(s)G_a(s)G_p(s)}{1 + G_c(s)G_a(s)G_p(s)H(s)}$

**Important Note:** For simplicity, often the controller, actuator, and plant are combined into a single forward path transfer function $G(s) = G_c(s)G_a(s)G_p(s)$. The sensor transfer function $H(s)$ represents the feedback path.

$T(s) = \frac{G(s)}{1 + G(s)H(s)}$

The term **$1 + G(s)H(s)$** is known as the **characteristic polynomial** of the closed-loop system. Its roots (poles) determine the system's stability.

**Examples:**

*   **Thermostat-Controlled Heater:** A thermostat measures the room temperature (output), compares it to the desired temperature (reference), and turns the heater on or off accordingly.
*   **Cruise Control in a Car:** Measures the car's speed (output), compares it to the set speed (reference), and adjusts the engine throttle to maintain the desired speed.
*   **Human Body Temperature Regulation:** The body senses its temperature and initiates actions like sweating or shivering to maintain a stable internal temperature.

**Textbook Reference:**

*   **Nise:** Chapters 1 and 2 extensively cover feedback control systems, block diagram reduction, and the derivation of closed-loop transfer functions.
*   **Haykin & Van Veen:** Discusses feedback control from a signal processing perspective, emphasizing the impact of feedback on system performance and stability.
*   **Ogata:** For discrete-time systems, it covers feedback control using difference equations and Z-transforms.

---

## 4. Stability Analysis

**Stability** is a fundamental property of dynamic systems. A system is considered **stable** if its output remains bounded for all bounded inputs and if, when disturbed from equilibrium, it eventually returns to equilibrium. Conversely, an unstable system's output grows without bound, even for small disturbances or inputs.

**Key Concepts:**

*   **Bounded-Input, Bounded-Output (BIBO) Stability:** A system is BIBO stable if every bounded input produces a bounded output. This is the most common definition of stability used in practice.
*   **Internal Stability:** Refers to the behavior of the system's internal states when no input is applied. For linear time-invariant (LTI) systems, BIBO stability implies internal stability.
*   **Poles of the System:** The roots of the denominator of the system's transfer function (the characteristic polynomial) are called the poles. The location of these poles in the complex plane dictates the system's stability.

**Stability Criteria for LTI Systems (Continuous-Time):**

For a continuous-time LTI system with transfer function $H(s) = \frac{N(s)}{D(s)}$, where $D(s)$ is the denominator polynomial (characteristic polynomial), the system is BIBO stable if and only if **all the poles of $H(s)$ lie in the left half of the s-plane**.

*   **Poles on the imaginary axis (jω-axis):** Lead to marginally stable systems. The output is bounded but oscillates indefinitely or grows linearly. These are often considered unstable in practical applications.
*   **Poles in the right half of the s-plane:** Lead to unstable systems. The output grows exponentially.

**Methods for Stability Analysis:**

1.  **Pole Location:**
    *   Find the roots of the characteristic polynomial $1 + G(s)H(s) = 0$ for closed-loop systems or the denominator of $H(s)$ for open-loop systems.
    *   Check if all roots have negative real parts.

2.  **Routh-Hurwitz Criterion:**
    *   A purely algebraic method to determine if all roots of a polynomial have negative real parts without actually calculating the roots.
    *   Involves constructing a Routh array from the coefficients of the characteristic polynomial.
    *   **Key Rule:** For a polynomial with real coefficients, all roots lie in the left half-plane if and only if all the entries in the **first column of the Routh array have the same sign (and are non-zero)**, assuming the leading coefficient is positive.

    **Textbook Reference (Routh-Hurwitz):**
    *   **Nise:** Chapter 4 provides a detailed explanation and application of the Routh-Hurwitz criterion.
    *   **Haykin & Van Veen:** May cover this in advanced chapters related to control system analysis.

3.  **Root Locus:**
    *   A graphical method that shows how the poles of a closed-loop system change as a system parameter (typically the gain) is varied.
    *   Helps in understanding the impact of gain on stability and performance.

    **Textbook Reference (Root Locus):**
    *   **Nise:** Chapter 8 is dedicated to the root locus technique.

4.  **Nyquist Stability Criterion:**
    *   A frequency-domain method that relates the stability of a closed-loop system to the open-loop transfer function.
    *   Involves plotting the Nyquist contour of $G(s)H(s)$ in the complex plane.
    *   **Key Idea:** Relates the number of encirclements of the critical point (-1, 0) to the number of unstable poles in the closed-loop system.

    **Textbook Reference (Nyquist):**
    *   **Nise:** Chapter 10 covers the Nyquist stability criterion.
    *   **Haykin & Van Veen:** Discusses frequency-domain analysis and stability.

5.  **Bode Plots:**
    *   Graphical representations of the magnitude and phase of the open-loop transfer function versus frequency.
    *   Used to determine stability margins (gain margin and phase margin), which indicate how close the system is to becoming unstable.

    **Textbook Reference (Bode Plots):**
    *   **Nise:** Chapter 9 explains the use of Bode plots for stability analysis.
    *   **Haykin & Van Veen:** Covers frequency response analysis extensively.

**Stability Criteria for LTI Systems (Discrete-Time):**

For a discrete-time LTI system with transfer function $H(z) = \frac{N(z)}{D(z)}$, the system is BIBO stable if and only if **all the poles of $H(z)$ lie inside the unit circle** in the z-plane.

*   **Poles on the unit circle:** Marginally stable.
*   **Poles outside the unit circle:** Unstable.

**Methods for Stability Analysis (Discrete-Time):**

1.  **Pole Location:**
    *   Find the roots of the characteristic polynomial $1 + G(z)H(z) = 0$ for closed-loop systems or the denominator of $H(z)$ for open-loop systems.
    *   Check if all roots are within the unit circle ($|z| < 1$).

2.  **Jury Stability Test:**
    *   An algebraic method similar to Routh-Hurwitz, but for discrete-time systems.
    *   Determines if all roots of a polynomial lie inside the unit circle.

    **Textbook Reference (Jury Test):**
    *   **Ogata:** Chapter 6 provides a detailed explanation of the Jury stability test.

3.  **Bilinear Transformation and Routh-Hurwitz:**
    *   The bilinear transformation can convert a discrete-time system into a continuous-time system.
    *   $z = \frac{1+s}{1-s}$. Substituting this into the discrete-time characteristic polynomial allows the Routh-Hurwitz criterion to be applied to assess stability.

    **Textbook Reference (Bilinear Transformation):**
    *   **Ogata:** Chapter 6 discusses this transformation.

---

## 5. Comparison: Open-Loop vs. Closed-Loop Systems

| Feature             | Open-Loop System                                | Closed-Loop System                                     |
| :------------------ | :---------------------------------------------- | :----------------------------------------------------- |
| **Feedback**        | No feedback                                     | Feedback path exists                                   |
| **Accuracy**        | Lower, sensitive to disturbances and parameter variations | Higher, less sensitive to disturbances and variations |
| **Complexity**      | Simpler design, fewer components                | More complex design, requires sensors and controllers  |
| **Cost**            | Generally lower                                 | Generally higher                                       |
| **Stability**       | Generally stable (unless system itself is unstable) | Can become unstable if not designed properly           |
| **Reliability**     | Can be unreliable if operating conditions change | More reliable due to self-correction                   |
| **Performance**     | Performance can degrade with external factors   | Performance is generally more consistent and predictable |
| **Examples**        | Toaster, simple washing machine                 | Thermostat, cruise control, robotic arm                |

---

## 6. Practice Questions and Exercises

**Question 1 (Conceptual):**

Explain the fundamental difference between an open-loop and a closed-loop system. Provide a real-world example for each.

**Answer:**

*   **Open-loop:** The control action is independent of the output. Example: A simple toaster that toasts bread for a fixed duration.
*   **Closed-loop:** The control action is based on the measured output (feedback). Example: A thermostat that controls room temperature by sensing the actual temperature and adjusting the heating/cooling accordingly.

---

**Question 2 (Transfer Function Analysis):**

Consider a continuous-time open-loop system with the transfer function:
$H(s) = \frac{s+2}{(s-1)(s+3)}$
Determine if this system is stable. Justify your answer.

**Answer:**

The poles of the system are the roots of the denominator polynomial $(s-1)(s+3) = 0$. The poles are $s = 1$ and $s = -3$.
Since one of the poles ($s=1$) is in the right half of the s-plane (positive real part), the system is **unstable**.

---

**Question 3 (Closed-Loop Transfer Function):**

A closed-loop system has a forward path transfer function $G(s) = \frac{10}{s+2}$ and a unity feedback path ($H(s) = 1$).
Derive the closed-loop transfer function $T(s)$.

**Answer:**

The closed-loop transfer function is given by $T(s) = \frac{G(s)}{1 + G(s)H(s)}$.
Substituting the given functions:
$T(s) = \frac{\frac{10}{s+2}}{1 + \frac{10}{s+2} \cdot 1}$
$T(s) = \frac{\frac{10}{s+2}}{\frac{s+2 + 10}{s+2}}$
$T(s) = \frac{10}{s+12}$

---

**Question 4 (Stability of Closed-Loop System):**

For the closed-loop system in Question 3, determine if the system is stable.

**Answer:**

The closed-loop transfer function is $T(s) = \frac{10}{s+12}$.
The denominator polynomial is $s+12$. The pole is at $s = -12$.
Since the pole is in the left half of the s-plane (negative real part), the system is **stable**.

---

**Question 5 (Discrete-Time Stability):**

A discrete-time open-loop system has a transfer function:
$H(z) = \frac{z}{2z-1}$
Determine if this system is stable.

**Answer:**

To find the poles, we look at the denominator: $2z-1 = 0$.
The pole is at $z = 1/2$.
Since $|1/2| < 1$, the pole lies inside the unit circle. Therefore, the system is **stable**.

---

**Question 6 (Routh-Hurwitz Criterion - Application):**

Consider a closed-loop system with a characteristic polynomial $s^3 + 2s^2 + 3s + 4 = 0$. Use the Routh-Hurwitz criterion to determine if the system is stable.

**Answer:**

Construct the Routh array:

| Row | $s^3$ | $s^1$ |
| :-- | :---- | :---- |
| 1   | 1     | 3     |
| 2   | 2     | 4     |

Now, calculate the elements for $s^1$ and $s^0$:

$b_1 = \frac{(2)(3) - (1)(4)}{2} = \frac{6-4}{2} = \frac{2}{2} = 1$
$b_2 = \frac{(2)(0) - (1)(0)}{2} = 0$ (if there are more columns, continue)

The array becomes:

| Row | $s^3$ | $s^1$ |
| :-- | :---- | :---- |
| 1   | 1     | 3     |
| 2   | 2     | 4     |
| 3   | 1     | 0     |

Now, calculate the element for $s^0$:

$c_1 = \frac{(1)(4) - (2)(0)}{1} = \frac{4-0}{1} = 4$

The complete Routh array:

| Row | $s^3$ | $s^1$ | $s^{-1}$ |
| :-- | :---- | :---- | :------- |
| 1   | 1     | 3     | 0        |
| 2   | 2     | 4     | 0        |
| 3   | 1     | 0     | 0        |
| 4   | 4     | 0     | 0        |

The first column entries are 1, 2, 1, 4. All entries are positive and non-zero.
Therefore, according to the Routh-Hurwitz criterion, all the roots of the characteristic polynomial lie in the left half of the s-plane, and the system is **stable**.

---

## 7. Important Points to Remember

*   **Open-loop systems** are simple but less accurate and more susceptible to disturbances.
*   **Closed-loop systems** offer higher accuracy and robustness but are more complex and can introduce instability.
*   **Stability** is determined by the location of the system's poles.
    *   Continuous-time: Poles must be in the left half of the s-plane.
    *   Discrete-time: Poles must be inside the unit circle.
*   The **characteristic polynomial** ($1 + G(s)H(s)$ for closed-loop) is key to stability analysis.
*   The **Routh-Hurwitz criterion** is a powerful algebraic tool for determining stability without finding the poles.
*   Frequency-domain methods (Nyquist, Bode plots) provide insights into stability margins for closed-loop systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. Further Reading and Textbook References

*   **Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007):** Excellent for understanding system representation, impulse response, and frequency-domain analysis, which are foundational to system stability.
*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009):** The definitive text for control system analysis and design. Covers open-loop and closed-loop systems, transfer functions, and all major stability analysis techniques (Routh-Hurwitz, Root Locus, Nyquist, Bode) in detail.
*   **Discrete Time Control Systems by Katsuhiko Ogata (Pearson, 2nd Edition, 2006):** Essential for understanding discrete-time systems, difference equations, Z-transforms, and stability analysis methods specific to discrete-time domains (Jury test, bilinear transformation).
*   **Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Prentice Hall, 2nd Edition, 2015):** Provides a strong signal-processing perspective on system analysis, including LTI systems and their properties.
*   **Modern Control Systems by Dorf R. C., (Bishop R. H Pearson Education India, 12th Edition, 2013):** Another comprehensive resource for control theory, including system modeling and stability.

---