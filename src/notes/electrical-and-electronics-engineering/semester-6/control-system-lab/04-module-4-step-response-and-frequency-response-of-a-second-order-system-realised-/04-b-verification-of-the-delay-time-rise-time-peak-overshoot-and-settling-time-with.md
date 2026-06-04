---
title: "b. Verification of the delay time, rise time, peak overshoot and settling time with the theoretical values for 0<ξ <1."
subject: "CONTROL SYSTEM LAB"
module: "Module 4: Step response and frequency response of a second order system realised using passive components"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36760"
status: "completed"
scrapedAt: "2026-05-23T16:25:09.756Z"
---
# Control System Lab: Module 4 - Second-Order System Response

## Topic: b. Verification of Delay Time, Rise Time, Peak Overshoot, and Settling Time for 0 < ξ < 1

This module focuses on understanding and experimentally verifying the transient response characteristics of a second-order system in its underdamped condition (0 < ξ < 1). We will be comparing experimental results obtained from a system realized using passive components with their theoretically derived values.

---

### 1. Key Concepts and Definitions

#### 1.1 Second-Order System Standard Form

A general second-order system can be represented in its standard transfer function form:

$G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$

Where:
*   $\omega_n$: **Natural frequency** (radians per second) - The frequency of oscillation of the system if there were no damping. (Ogata, Nise)
*   $\xi$: **Damping ratio** - A dimensionless parameter that describes how oscillations in a system decay after a disturbance. (Ogata, Nise)

#### 1.2 Underdamped Condition (0 < ξ < 1)

In the underdamped condition, the system's response to a step input will exhibit oscillations that gradually decay to the steady-state value. This is the most common scenario studied for transient response analysis.

#### 1.3 Transient Response Specifications

These are key parameters that define the behavior of a system's output when subjected to a step input.

*   **Delay Time ($t_d$)**: The time required for the response to reach 50% of its final steady-state value for the first time. (Nise, Ogata)

    *   **Theoretical Formula for Underdamped System (0 < ξ < 1):**
        $t_d = \frac{1 + 0.7\xi\omega_n}{\omega_n}$
        *(Note: Some texts may use slightly different approximations, but this is a common one)*

*   **Rise Time ($t_r$)**: The time required for the response to rise from 10% to 90% of its final steady-state value. (Nise, Ogata)

    *   **Theoretical Formula for Underdamped System (0 < ξ < 1):**
        $t_r = \frac{\pi - \cos^{-1}(\xi)}{\omega_d}$
        Where $\omega_d = \omega_n\sqrt{1 - \xi^2}$ is the **damped natural frequency**.

*   **Peak Overshoot ($M_p$)**: The maximum value of the response curve measured from the final steady-state value, expressed as a percentage of the steady-state value. (Nise, Ogata)

    *   **Theoretical Formula for Underdamped System (0 < ξ < 1):**
        $M_p = e^{-\frac{\xi\pi}{\sqrt{1-\xi^2}}}$
        **Peak Overshoot (%)**: $M_p \times 100\%$

*   **Settling Time ($t_s$)**: The time required for the response to reach and stay within a specified tolerance band (usually ±2% or ±5%) of the final steady-state value. (Nise, Ogata)

    *   **Theoretical Formula for 2% Settling Time (Underdamped System, 0 < ξ < 1):**
        $t_s \approx \frac{4}{\xi\omega_n}$
    *   **Theoretical Formula for 5% Settling Time (Underdamped System, 0 < ξ < 1):**
        $t_s \approx \frac{3}{\xi\omega_n}$

#### 1.4 Realizing a Second-Order System with Passive Components

A common way to realize a second-order system in the lab using passive components is through an **RLC circuit**. The transfer function of such a circuit can be derived to match the standard second-order form.

*   **Series RLC Circuit:**
    Consider a series RLC circuit with a voltage input $V_{in}(s)$ and output voltage $V_o(s)$ across the capacitor. The transfer function is:
    $G(s) = \frac{V_o(s)}{V_{in}(s)} = \frac{1/LC}{s^2 + (R/L)s + 1/LC}$

    By comparing this with the standard form $\frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$:
    *   $\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$
    *   $2\xi\omega_n = \frac{R}{L} \implies \xi = \frac{R}{2L\omega_n} = \frac{R}{2L} \sqrt{LC} = \frac{R}{2}\sqrt{\frac{C}{L}}$

    To achieve an underdamped response (0 < ξ < 1), the resistance R must be within a certain range for given L and C values.

    *   **Critical Damping (ξ = 1):** $R_c = 2\sqrt{\frac{L}{C}}$
    *   **Underdamped (0 < ξ < 1):** $R < R_c$, i.e., $R < 2\sqrt{\frac{L}{C}}$

    *(Reference: Kuo, B.C. - Automatic Control Systems, Chapter on Second-Order Systems)*

---

### 2. Learning Outcomes Addressed

This topic directly addresses the following learning outcomes:

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (Knowledge Level: K3)**
    *   In this context, we identify the components (R, L, C) of the passive circuit to determine $\omega_n$ and $\xi$. We then experimentally apply a step input and observe the output.

*   **CO2: Conduct suitable experiments and determine the performance specifications. (Knowledge Level: K3)**
    *   This is the core of the topic. We will experimentally measure $t_d$, $t_r$, $M_p$, and $t_s$ from the observed step response.

*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)**
    *   While the topic focuses on physical realization, comparison with theoretical values implicitly requires understanding the analytical model. Simulation tools (like MATLAB/Simulink) can be used to predict these theoretical values for direct comparison.

---

### 3. Experimental Verification Procedure

**Objective:** To verify the theoretical values of delay time, rise time, peak overshoot, and settling time for a second-order system (realized using passive components) in the underdamped region (0 < ξ < 1) by comparing them with experimentally obtained values.

**Materials:**
*   Passive components: Resistor (R), Inductor (L), Capacitor (C)
*   Signal generator (to provide a step input)
*   Oscilloscope or Data Acquisition System (to observe and measure the output response)
*   Connecting wires and breadboard

**Steps:**

1.  **Circuit Construction:**
    *   Construct a series RLC circuit on a breadboard.
    *   Select values for R, L, and C such that the circuit operates in the underdamped region (0 < ξ < 1). Calculate the critical resistance $R_c = 2\sqrt{L/C}$. Choose R < $R_c$.
    *   **Example:** Let L = 100 mH and C = 10 µF.
        *   $\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.1 \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-6}}} = 1000$ rad/s.
        *   $R_c = 2\sqrt{\frac{0.1}{10 \times 10^{-6}}} = 2\sqrt{10^4} = 2 \times 100 = 200 \Omega$.
        *   To ensure underdamping, choose R < 200 $\Omega$. Let's pick R = 100 $\Omega$.
        *   Calculate $\xi = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{100}{2}\sqrt{\frac{10 \times 10^{-6}}{0.1}} = 50\sqrt{10^{-5}} = 50 \times 3.16 \times 10^{-3} \approx 0.158$. This is indeed between 0 and 1.

2.  **Parameter Calculation (Theoretical):**
    *   Calculate the theoretical values of $\omega_n$ and $\xi$ using the chosen component values.
    *   Using the calculated $\omega_n$ and $\xi$, compute the theoretical values for $t_d$, $t_r$, $M_p$, and $t_s$.

3.  **Step Input Application:**
    *   Connect the signal generator to the input of the RLC circuit.
    *   Configure the signal generator to produce a step voltage input. A unit step (0V to 1V) is typically used.
    *   Set the rise time of the input step to be significantly faster than the expected system response time to approximate an ideal step.

4.  **Output Observation:**
    *   Connect the oscilloscope to observe the output voltage across the capacitor ($V_o(t)$).
    *   Trigger the oscilloscope appropriately to capture the step response.

5.  **Measurement of Transient Specifications (Experimental):**
    *   From the oscilloscope display, carefully measure the following:
        *   **Steady-state value:** The final value the output settles to.
        *   **Delay Time ($t_d$):** Time from the start of the step input to when the output first reaches 50% of its steady-state value.
        *   **Rise Time ($t_r$):** Time from when the output reaches 10% of its steady-state value to when it reaches 90% of its steady-state value.
        *   **Peak Overshoot ($M_p$):** The difference between the peak output value and the steady-state value, divided by the steady-state value. Express as a percentage.
        *   **Settling Time ($t_s$):** Time from the start of the step input until the output remains within a ±2% (or ±5%) band around the steady-state value.

6.  **Data Comparison:**
    *   Create a table comparing the theoretically calculated values with the experimentally measured values for $t_d$, $t_r$, $M_p$, and $t_s$.
    *   Calculate the percentage error between the theoretical and experimental values for each specification.

7.  **Analysis and Discussion:**
    *   Analyze the percentage errors. Discuss potential reasons for discrepancies (e.g., component tolerances, non-ideal components, oscilloscope measurement accuracy, non-ideal step input).
    *   Discuss how well the experimental results verify the theoretical formulas for the underdamped case.

---

### 4. Examples and Calculations

**Scenario:**
Let's use the example component values from Step 1: R = 100 $\Omega$, L = 100 mH (0.1 H), C = 10 µF ($10 \times 10^{-6}$ F).

**Theoretical Calculations:**

1.  **Natural Frequency ($\omega_n$):**
    $\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.1 \times 10 \times 10^{-6}}} = 1000$ rad/s.

2.  **Damping Ratio ($\xi$):**
    $\xi = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{100}{2}\sqrt{\frac{10 \times 10^{-6}}{0.1}} = 50\sqrt{10^{-5}} \approx 0.158$

    Since $0 < 0.158 < 1$, the system is underdamped, as expected.

3.  **Damped Natural Frequency ($\omega_d$):**
    $\omega_d = \omega_n\sqrt{1 - \xi^2} = 1000\sqrt{1 - (0.158)^2} \approx 1000\sqrt{1 - 0.02496} \approx 1000\sqrt{0.975} \approx 1000 \times 0.987 \approx 987$ rad/s.

4.  **Transient Specifications:**
    *   **Delay Time ($t_d$):**
        $t_d = \frac{1 + 0.7\xi\omega_n}{\omega_n} = \frac{1 + 0.7 \times 0.158 \times 1000}{1000} = \frac{1 + 0.7 \times 158}{1000} = \frac{1 + 110.6}{1000} = \frac{111.6}{1000} = 0.1116$ s (or 111.6 ms)

    *   **Rise Time ($t_r$):**
        $t_r = \frac{\pi - \cos^{-1}(\xi)}{\omega_d} = \frac{\pi - \cos^{-1}(0.158)}{987}$
        $\cos^{-1}(0.158)$ in radians $\approx 1.411$ radians.
        $t_r = \frac{3.1416 - 1.411}{987} = \frac{1.7306}{987} \approx 0.00175$ s (or 1.75 ms)
        *(Note: A small rise time for a low damping ratio is expected. If the experimental value is much larger, check the oscilloscope settings and input step.)*

    *   **Peak Overshoot ($M_p$):**
        $M_p = e^{-\frac{\xi\pi}{\sqrt{1-\xi^2}}} = e^{-\frac{0.158 \times \pi}{\sqrt{1-(0.158)^2}}} \approx e^{-\frac{0.496}{0.987}} \approx e^{-0.5025} \approx 0.605$
        **Peak Overshoot (%)**: $0.605 \times 100\% = 60.5\%$

    *   **Settling Time ($t_s$, 2% criterion):**
        $t_s \approx \frac{4}{\xi\omega_n} = \frac{4}{0.158 \times 1000} = \frac{4}{158} \approx 0.0253$ s (or 25.3 ms)

**Hypothetical Experimental Results:**
After performing the experiment, suppose the following values were measured from the oscilloscope:
*   Steady-state value: 1.0 V (assuming a unit step input)
*   $t_d \approx 115$ ms
*   $t_r \approx 1.9$ ms
*   $M_p \approx 58\%$
*   $t_s \approx 28$ ms

**Comparison Table:**

| Specification        | Theoretical Value     | Experimental Value    | Percentage Error (%)                                     |
| :------------------- | :-------------------- | :-------------------- | :------------------------------------------------------- |
| Delay Time ($t_d$)   | 111.6 ms              | 115 ms                | $|\frac{115 - 111.6}{111.6}| \times 100\% \approx 3.0\%$    |
| Rise Time ($t_r$)    | 1.75 ms               | 1.9 ms                | $|\frac{1.9 - 1.75}{1.75}| \times 100\% \approx 8.6\%$     |
| Peak Overshoot ($M_p$) | 60.5 %                | 58 %                  | $|\frac{58 - 60.5}{60.5}| \times 100\% \approx 4.1\%$      |
| Settling Time ($t_s$) | 25.3 ms               | 28 ms                 | $|\frac{28 - 25.3}{25.3}| \times 100\% \approx 10.7\%$     |

**Analysis Notes:**
The experimental values are reasonably close to the theoretical values, with errors generally within acceptable limits for a lab experiment involving passive components. The small discrepancies can be attributed to:
*   **Component Tolerances:** Actual R, L, and C values might differ from their marked values. For instance, inductors often have significant parasitic resistance.
*   **Non-Ideal Components:** Inductors are not purely inductive; they have series resistance. Capacitors have equivalent series resistance (ESR) and equivalent series inductance (ESL).
*   **Oscilloscope Accuracy:** Reading values from an oscilloscope screen, especially for small time intervals, involves some inherent error.
*   **Input Step Imperfection:** The signal generator might not produce a perfectly instantaneous step.

---

### 5. Important Points to Remember

*   **Underdamped Condition:** Ensure that the chosen component values (specifically resistance) result in $\xi < 1$ to observe the characteristic oscillatory response.
*   **Component Selection:** Use components with reasonably tight tolerances. Be aware of parasitic elements, especially the internal resistance of the inductor.
*   **Oscilloscope Settings:** Use appropriate time scales and voltage scales on the oscilloscope to clearly observe the response. Zooming in on the critical parts of the waveform is crucial for accurate measurements of $t_d$ and $t_r$.
*   **Definition Consistency:** Stick to the specific definitions of $t_d$ (50% first time), $t_r$ (10%-90%), $M_p$ (peak vs steady-state), and $t_s$ (within tolerance band) when measuring.
*   **Steady-State Value:** Accurately identify the final steady-state value of the output, as all other transient specifications are referenced from it.
*   **Theoretical Calculation Accuracy:** Double-check your theoretical calculations for $\omega_n$, $\xi$, and the transient specifications.
*   **Percentage Error Interpretation:** A small percentage error indicates good agreement, while a large error warrants investigation into experimental setup or component issues.

---

### 6. Practice Questions and Exercises

**Question 1:**
A series RLC circuit has R = 50 $\Omega$, L = 20 mH, and C = 10 µF.
a) Calculate the natural frequency ($\omega_n$) and the damping ratio ($\xi$).
b) Is the system underdamped, critically damped, or overdamped?
c) Calculate the theoretical values for delay time ($t_d$), rise time ($t_r$), peak overshoot ($M_p$), and settling time ($t_s$ for 2% criterion).

**Answer 1:**
a) $\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.02 \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{200 \times 10^{-9}}} = \frac{1}{1.414 \times 10^{-4}} \approx 7071$ rad/s.
   $\xi = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{50}{2}\sqrt{\frac{10 \times 10^{-6}}{0.02}} = 25\sqrt{500 \times 10^{-6}} = 25\sqrt{5 \times 10^{-4}} = 25 \times 2.236 \times 10^{-2} \approx 0.559$
b) Since $0 < \xi = 0.559 < 1$, the system is **underdamped**.
c) $\omega_d = \omega_n\sqrt{1 - \xi^2} = 7071\sqrt{1 - (0.559)^2} \approx 7071\sqrt{1 - 0.3125} \approx 7071\sqrt{0.6875} \approx 7071 \times 0.829 \approx 5863$ rad/s.
   $t_d = \frac{1 + 0.7\xi\omega_n}{\omega_n} = \frac{1 + 0.7 \times 0.559 \times 7071}{7071} \approx \frac{1 + 0.7 \times 3951}{7071} \approx \frac{1 + 2766}{7071} \approx \frac{2767}{7071} \approx 0.391$ ms.
   $t_r = \frac{\pi - \cos^{-1}(\xi)}{\omega_d} = \frac{\pi - \cos^{-1}(0.559)}{5863} = \frac{3.1416 - 0.975}{5863} = \frac{2.1666}{5863} \approx 0.369$ ms.
   $M_p = e^{-\frac{\xi\pi}{\sqrt{1-\xi^2}}} = e^{-\frac{0.559 \times \pi}{0.829}} \approx e^{-\frac{1.756}{0.829}} \approx e^{-2.118} \approx 0.1205$. So, $M_p \approx 12.05\%$.
   $t_s \approx \frac{4}{\xi\omega_n} = \frac{4}{0.559 \times 7071} \approx \frac{4}{3951} \approx 1.01$ ms.

**Question 2:**
When performing the experiment for verification, what are the two most critical factors that can lead to significant errors in the measured transient response specifications compared to the theoretical values? Justify your answer.

**Answer 2:**
The two most critical factors that can lead to significant errors are:

1.  **Component Tolerances and Non-Idealities:**
    *   **Justification:** The theoretical calculations assume ideal components with exact values. In reality, resistors have tolerances (e.g., ±5% or ±10%), inductors have parasitic series resistance and core losses, and capacitors have ESR and ESL. These deviations directly affect the calculated $\omega_n$ and $\xi$, leading to a mismatch between theoretical predictions and actual circuit behavior. For instance, the inductor's internal resistance adds to the overall damping, potentially shifting the system towards critical damping or overdamping unexpectedly, or altering the calculated damping ratio.

2.  **Accuracy of Measurement Instruments and Techniques:**
    *   **Justification:** The transient response parameters like rise time, delay time, and settling time are measured from the output waveform displayed on an oscilloscope. Reading these values from the screen involves inherent inaccuracies due to:
        *   **Oscilloscope resolution and accuracy:** The vertical and horizontal accuracy of the oscilloscope itself.
        *   **Measurement resolution:** The ability to precisely identify the 10%, 50%, 90%, and steady-state levels.
        *   **Triggering stability:** Inconsistent triggering can lead to slight shifts in the captured waveform.
        *   **Human error:** Subjective judgment in identifying precise points on the curve, especially for rapid changes or noise. For example, accurately measuring a 1.0 ms rise time on a screen can be challenging.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References

*   **Modern Control Engineering** by Katsuhiko Ogata (Pearson, 5th edition, 2009) - Chapters on transient response analysis of second-order systems.
*   **Control Systems Engineering** by Norman S. Nise (Wiley, 5th edition, 2009) - Chapters on transient response analysis and time-domain specifications.
*   **Control Systems Engineering** by I. J. Nagrath, M. Gopal (New Age, 5th edition, 2009) - Chapters covering second-order system response.
*   **Automatic Control Systems** by Kuo B. C. (Prentice Hall of India) - Provides foundational knowledge on RLC circuit realization of transfer functions.

---