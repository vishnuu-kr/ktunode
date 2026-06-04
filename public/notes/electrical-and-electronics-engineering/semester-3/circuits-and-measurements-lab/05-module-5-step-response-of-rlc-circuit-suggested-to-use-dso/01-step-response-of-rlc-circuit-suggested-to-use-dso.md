---
title: "Step response of RLC circuit (suggested to use DSO)."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 5: Step response of RLC circuit (suggested to use DSO)."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ceb"
status: "completed"
scrapedAt: "2026-05-23T16:11:56.172Z"
---
# CIRCUITS AND MEASUREMENTS LAB: Module 5 - Step Response of RLC Circuits

## Introduction to RLC Circuits and Step Response

This module focuses on understanding and observing the **step response** of RLC circuits. The step response is the output of a circuit when a **step input** is applied. A step input is a sudden change from one constant value to another, most commonly from 0V to a specific DC voltage. This abrupt change excites the circuit's natural tendency to respond based on its passive components (resistor, inductor, capacitor).

**Key Concepts:**

*   **RLC Circuit:** A circuit containing a resistor (R), inductor (L), and capacitor (C). These circuits exhibit dynamic behavior due to energy storage in the inductor and capacitor.
*   **Step Input:** A signal that instantaneously changes from one level to another. Mathematically, it's represented by the Heaviside step function, u(t).
*   **Transient Response:** The behavior of a circuit immediately after a change in input, before it settles to a steady state. This is what we'll be observing.
*   **Steady-State Response:** The behavior of a circuit after the transient effects have died out and the circuit has reached a constant or periodic behavior determined by the input.
*   **Time Constant ($\tau$):** A measure of how quickly a circuit responds to a change. For an RL circuit, $\tau = L/R$. For an RC circuit, $\tau = RC$. For RLC circuits, the concept is more complex and involves damping.
*   **Damping:** The reduction in amplitude of oscillations in a circuit.

**Relevance to Course Outcomes:**

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3)**: While this module primarily deals with time-domain analysis of the step response, understanding the impedance of R, L, and C in the frequency domain is crucial for understanding their behavior in transient states and how they contribute to the overall response. The transient response is a direct consequence of the circuit's frequency-dependent characteristics.
*   **CO8: Develop simulation models of electric circuits using modern simulation tools (Knowledge Level: K3)**: The step response of RLC circuits is a fundamental concept that can be effectively demonstrated and analyzed using simulation tools like MATLAB/Simulink, LTspice, or Multisim. This module provides a practical application for these tools.

## Types of RLC Circuits and Their Step Response

RLC circuits can be configured in series or parallel. We will primarily focus on the **series RLC circuit** for this module due to its commonality and direct application of the concepts.

### Series RLC Circuit

A series RLC circuit consists of a resistor, inductor, and capacitor connected in series, driven by a voltage source. When a step voltage is applied, the initial current and capacitor voltage will depend on the initial conditions of the circuit.

**The governing differential equation for a series RLC circuit with a step voltage input $V_s$ is:**

$L\frac{d^2i(t)}{dt^2} + R\frac{di(t)}{dt} + \frac{1}{C}i(t) = V_s$  (for $t \ge 0$)

If we consider the voltage across the capacitor, $v_C(t)$, the equation becomes:

$\frac{d^2v_C(t)}{dt^2} + \frac{R}{L}\frac{dv_C(t)}{dt} + \frac{1}{LC}v_C(t) = \frac{V_s}{LC}$

This is a second-order linear non-homogeneous differential equation. The nature of its solution (and thus the circuit's response) depends on the relationship between the damping factor and the natural frequency.

### Classification of Damping

The behavior of the RLC circuit's response to a step input is determined by the damping factor ($\alpha$) and the undamped natural frequency ($\omega_0$).

*   **Undamped Natural Frequency ($\omega_0$):** The frequency at which the circuit would oscillate if there were no resistance.
    $\omega_0 = \frac{1}{\sqrt{LC}}$

*   **Damping Factor ($\alpha$):** Related to the rate at which oscillations decay.
    $\alpha = \frac{R}{2L}$

Based on the relationship between $\alpha$ and $\omega_0$, the step response can be classified into three types:

1.  **Underdamped Response ($\alpha < \omega_0$):**
    *   The circuit exhibits **oscillations** that gradually decay over time.
    *   The response overshoots the final steady-state value and oscillates around it before settling.
    *   **Characteristics:**
        *   **Overshoot:** The maximum percentage by which the response exceeds the final value.
        *   **Rise Time:** The time taken for the response to rise from 10% to 90% of its final value.
        *   **Settling Time:** The time taken for the response to settle within a certain percentage (e.g., 2% or 5%) of its final value.
        *   **Peak Time:** The time taken to reach the first peak overshoot.
        *   **Damping Ratio ($\zeta$):** Often used in control systems, $\zeta = \frac{\alpha}{\omega_0}$. For underdamped, $\zeta < 1$.

2.  **Critically Damped Response ($\alpha = \omega_0$):**
    *   The circuit returns to its steady-state value as **quickly as possible without any oscillation**.
    *   This is often the desired response in many applications for fast settling without overshoot.
    *   **Characteristics:** Fastest possible settling time without overshoot.
    *   **Damping Ratio ($\zeta = 1$):**

3.  **Overdamped Response ($\alpha > \omega_0$):**
    *   The circuit returns to its steady-state value **slowly and without any oscillation**.
    *   The response is sluggish and takes a longer time to reach the final value.
    *   **Characteristics:** Slowest settling time without overshoot.
    *   **Damping Ratio ($\zeta > 1$):**

**Important Point:** The type of damping is determined by the ratio $R^2/(4L^2)$ compared to $1/(LC)$.
*   Underdamped: $R^2/(4L^2) < 1/(LC) \implies R^2C < 4L$
*   Critically Damped: $R^2/(4L^2) = 1/(LC) \implies R^2C = 4L$
*   Overdamped: $R^2/(4L^2) > 1/(LC) \implies R^2C > 4L$

### Analyzing Step Response with a DSO (Digital Storage Oscilloscope)

The Digital Storage Oscilloscope (DSO) is an essential tool for visualizing and measuring the transient behavior of circuits.

**How to use DSO for Step Response:**

1.  **Circuit Setup:** Construct a series RLC circuit on a breadboard or protoboard.
    *   Connect a resistor (R), an inductor (L), and a capacitor (C) in series.
    *   Connect a function generator in series with the RLC components.
2.  **Function Generator Settings:**
    *   **Waveform:** Set to **Square Wave**. A square wave is ideal for applying a step input.
    *   **Amplitude:** Set to the desired DC voltage level for the step (e.g., 5V).
    *   **Offset:** Set to ensure the signal goes from 0V to the desired amplitude (e.g., if Amplitude is 5V, Offset can be 0V for a 0-5V step, or if Amplitude is 10V, Offset can be -5V for a -5V to +5V step).
    *   **Frequency:** Set to a **low frequency** (e.g., 100 Hz to 1 kHz). This ensures enough time for the transient response to be observed on the oscilloscope screen before the next step transition.
    *   **Duty Cycle:** Set to approximately 50% for a clear observation of both rising and falling edges.
3.  **Oscilloscope Setup:**
    *   **Channel Selection:** Use one channel (e.g., Channel 1) to monitor the input voltage from the function generator. Use another channel (e.g., Channel 2) to monitor the voltage across one of the components (typically the capacitor voltage, $v_C(t)$, as it directly reflects the energy storage and settling behavior).
    *   **Triggering:**
        *   **Trigger Source:** Select the channel connected to the function generator (input voltage).
        *   **Trigger Mode:** Use **Normal** or **Single Shot** mode. Single Shot is useful to capture a single event.
        *   **Trigger Level:** Set the trigger level to a voltage just above the initial voltage of the step (e.g., if the step goes from 0V to 5V, set the trigger level to 1V or 2V) to capture the rising edge.
        *   **Trigger Slope:** Select the **rising edge** to trigger when the input voltage starts its upward step.
    *   **Timebase (Horizontal Scale):** Adjust the timebase (e.g., milliseconds per division) to visually capture the entire transient response.
    *   **Vertical Scale (Volts/Division):** Adjust the vertical scale for both channels to display the waveforms clearly on the screen.
4.  **Observation and Measurement:**
    *   Observe the waveform on the DSO screen. You should see the square wave from the function generator and the response of the RLC circuit (e.g., capacitor voltage).
    *   **Identify the damping type:** Look for oscillations, overshoot, and the speed of settling.
    *   **Measure key parameters:** Use the DSO's built-in measurement functions to determine:
        *   **Rise Time**
        *   **Overshoot (%)**
        *   **Settling Time**
        *   **Peak Time**
        *   **Final Value (Steady State Value)**

**Textbook References:**

*   **Sawhney, A. K. (Chapter 10: Oscillographs):** Sawhney provides detailed information on the working principles and applications of oscilloscopes, including their use in analyzing transient phenomena. He discusses triggering mechanisms and waveform measurements, which are directly applicable here.
*   **Gupta, J. B. (Chapter 12: Cathode Ray Oscilloscope and its Applications):** Similar to Sawhney, Gupta's text covers the fundamental aspects of CRTs and DSOs, explaining how to use them for waveform analysis, including measuring time and amplitude parameters of dynamic signals.
*   **Kalsi, H. S. (Chapter 8: Oscilloscopes and Spectrum Analyzers):** Kalsi's book offers insights into the operational modes of oscilloscopes, signal triggering, and the interpretation of waveforms, which are crucial for understanding the step response of RLC circuits. He emphasizes the practical aspects of using these instruments in measurement.

## Practical Considerations and Lab Procedure

### Objective

To experimentally determine the step response of a series RLC circuit and observe different damping behaviors using a DSO.

### Materials Required

1.  Function Generator
2.  Digital Storage Oscilloscope (DSO)
3.  Resistors (various values)
4.  Inductors (various values)
5.  Capacitors (various values)
6.  Connecting Wires
7.  Breadboard or Protoboard

### Procedure

1.  **Circuit Assembly:** Assemble a series RLC circuit on the breadboard. Connect the components in series: Function Generator -> Resistor (R) -> Inductor (L) -> Capacitor (C) -> Ground. Ensure correct polarity for the capacitor if it's an electrolytic type (though for transient response, ceramic or film capacitors are often preferred to avoid non-ideal behavior).
2.  **Component Selection:** Choose R, L, and C values such that you can potentially observe all three damping conditions by varying the resistance.
    *   **Example:** Start with L = 10 mH, C = 100 µF.
        *   $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{10 \times 10^{-3} \times 100 \times 10^{-6}}} = \frac{1}{\sqrt{1000 \times 10^{-9}}} = \frac{1}{\sqrt{10^{-6}}} = 1000$ rad/s.
        *   Calculate the critical resistance: $R_c = 2\sqrt{\frac{L}{C}} = 2\sqrt{\frac{10 \times 10^{-3}}{100 \times 10^{-6}}} = 2\sqrt{\frac{10^{-2}}{10^{-4}}} = 2\sqrt{100} = 2 \times 10 = 20 \Omega$.
        *   **To get underdamped:** Choose R < 20 $\Omega$ (e.g., 5 $\Omega$).
        *   **To get critically damped:** Choose R = 20 $\Omega$.
        *   **To get overdamped:** Choose R > 20 $\Omega$ (e.g., 50 $\Omega$).
3.  **Function Generator Setup:** Connect the function generator output to the series RLC circuit. Set the function generator to produce a square wave with an amplitude of 5V (or as specified), 0V offset, and a frequency of 1 kHz.
4.  **DSO Setup:**
    *   Connect Channel 1 of the DSO to the input of the RLC circuit (function generator output).
    *   Connect Channel 2 of the DSO to measure the voltage across the capacitor ($v_C(t)$).
    *   Set the trigger source to Channel 1, trigger mode to Normal, trigger level appropriately for the rising edge of the square wave, and trigger slope to rising.
    *   Adjust the timebase and vertical scales to clearly view the waveforms.
5.  **Observation and Recording:**
    *   Observe the transient response of $v_C(t)$ for different values of R.
    *   **Underdamped:** Note the overshoot, oscillations, rise time, and settling time. Record the values of R, L, C, and the measured parameters.
    *   **Critically Damped:** Adjust R to achieve a response that settles quickly without oscillation. Record the values and observed behavior.
    *   **Overdamped:** Increase R to observe a slow, non-oscillatory response. Record the values and observed behavior.
    *   Take screenshots or draw sketches of the observed waveforms for each damping condition.

## Mathematical Analysis and Predictions (for K3 Level Understanding)

While direct mathematical derivation of the step response equations might be complex for every lab session, understanding the relationship between component values and the resulting response is key for K3 understanding.

**For a series RLC circuit with a step voltage input $V_s$ (assuming zero initial conditions $i(0)=0$, $v_C(0)=0$):**

The Laplace transform of the differential equation yields the system's transfer function. The voltage across the capacitor, $V_c(s)$, can be found.

The characteristic equation is $s^2 + \frac{R}{L}s + \frac{1}{LC} = 0$.

Comparing this to the standard second-order system equation $s^2 + 2\zeta\omega_0s + \omega_0^2 = 0$, we have:

*   $\omega_0 = \frac{1}{\sqrt{LC}}$
*   $2\zeta\omega_0 = \frac{R}{L} \implies \zeta = \frac{R}{2L\omega_0} = \frac{R}{2L} \sqrt{LC} = \frac{R}{2} \sqrt{\frac{C}{L}}$

The step response for the capacitor voltage, $v_C(t)$, for each damping case is:

*   **Underdamped ($\zeta < 1$):**
    $v_C(t) = V_s \left( 1 - e^{-\alpha t} \left( \cos(\omega_d t) + \frac{\alpha}{\omega_d} \sin(\omega_d t) \right) \right)$
    where $\omega_d = \omega_0 \sqrt{1-\zeta^2}$ is the damped frequency.

*   **Critically Damped ($\zeta = 1$):**
    $v_C(t) = V_s (1 - e^{-\omega_0 t} (1 + \omega_0 t))$

*   **Overdamped ($\zeta > 1$):**
    $v_C(t) = V_s \left( 1 - \frac{\omega_1}{\omega_1 - \omega_2} e^{-\omega_2 t} + \frac{\omega_2}{\omega_1 - \omega_2} e^{-\omega_1 t} \right)$
    where $\omega_1 = \alpha + \sqrt{\alpha^2 - \omega_0^2}$ and $\omega_2 = \alpha - \sqrt{\alpha^2 - \omega_0^2}$ are the roots of the characteristic equation.

**Example of applying K3 to the lab:**

If you select R=10 $\Omega$, L=10 mH, C=100 µF:
*   $\omega_0 = 1000$ rad/s
*   $\alpha = \frac{R}{2L} = \frac{10}{2 \times 10 \times 10^{-3}} = \frac{10}{20 \times 10^{-3}} = 500$ s⁻¹.
*   $\zeta = \frac{\alpha}{\omega_0} = \frac{500}{1000} = 0.5$.
Since $\zeta < 1$, this configuration should result in an underdamped response. You would then predict that the DSO trace of the capacitor voltage should show oscillations that decay.

## Practice Questions and Exercises

**Question 1:**
A series RLC circuit has R = 50 $\Omega$, L = 20 mH, and C = 10 µF. Calculate the undamped natural frequency ($\omega_0$) and the damping factor ($\alpha$). Determine the type of damping (underdamped, critically damped, or overdamped) and briefly describe the expected step response of the capacitor voltage.

**Answer 1:**
*   $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{20 \times 10^{-3} \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{200 \times 10^{-9}}} = \frac{1}{\sqrt{2 \times 10^{-7}}} \approx \frac{1}{1.414 \times 10^{-3.5}} \approx 707$ rad/s.
*   $\alpha = \frac{R}{2L} = \frac{50}{2 \times 20 \times 10^{-3}} = \frac{50}{40 \times 10^{-3}} = \frac{50}{0.04} = 1250$ s⁻¹.
*   Comparing $\alpha$ and $\omega_0$: $\alpha (1250 \text{ s⁻¹}) > \omega_0 (707 \text{ rad/s})$.
*   **Type of Damping:** Overdamped.
*   **Expected Step Response:** The capacitor voltage will rise slowly towards the final DC value without any oscillation or overshoot.

**Question 2:**
When observing the step response of a series RLC circuit on a DSO, what specific features of the waveform indicate an underdamped response?

**Answer 2:**
An underdamped response is indicated by:
*   **Overshoot:** The voltage across the capacitor exceeding the final steady-state value before settling.
*   **Ringing/Oscillations:** The waveform oscillating back and forth around the final steady-state value. These oscillations gradually decrease in amplitude.

**Question 3:**
You are given a series RLC circuit with fixed L and C values. You want to achieve the fastest possible response without any overshoot. What type of damping should you aim for, and what condition must be met for this damping?

**Answer 3:**
You should aim for **critically damped** response.
The condition for critical damping is $\alpha = \omega_0$, or equivalently, $R^2 = \frac{4L}{C}$. This means the resistance value must be specifically set to $R = 2\sqrt{\frac{L}{C}}$.

**Question 4:**
In a lab experiment, you set up a series RLC circuit with a square wave input. You observe that the capacitor voltage rises to the final value very slowly and does not oscillate. What can you infer about the circuit's damping characteristics and the component values relative to the critical resistance?

**Answer 4:**
You can infer that the circuit is **overdamped**. This means that the damping factor ($\alpha$) is greater than the undamped natural frequency ($\omega_0$) (i.e., $\alpha > \omega_0$), or equivalently, the resistance (R) is greater than the critical resistance ($R_c = 2\sqrt{\frac{L}{C}}$). The slow, non-oscillatory response is characteristic of overdamping.

## Important Points to Remember

*   **DSO as a primary tool:** The DSO is crucial for visualizing and measuring the transient behavior of RLC circuits.
*   **Square Wave for Step Input:** Use a square wave from a function generator to simulate a step input.
*   **Frequency of Input:** Set the function generator frequency low enough to observe the entire transient response.
*   **Triggering is Key:** Proper DSO triggering on the rising edge of the input step is essential for stable waveform observation.
*   **Component Values Matter:** Small changes in R, L, or C can significantly alter the damping characteristics of the circuit.
*   **Relationship between $\alpha$ and $\omega_0$:** Understanding these parameters is fundamental to predicting and identifying the type of damping.
*   **Practical Component Non-idealities:** Be aware that real inductors have resistance, and real capacitors have equivalent series resistance (ESR) and leakage, which can affect the observed response.

## Conclusion

This module provides a hands-on experience in understanding and analyzing the dynamic behavior of RLC circuits. By using a DSO, students can directly observe and measure the transient step response, correlating theoretical concepts of damping with practical observations. This experience is foundational for understanding more complex circuit dynamics and control systems, and it directly supports the objective of analyzing circuit behavior under various input conditions, contributing to CO1 and CO8.
