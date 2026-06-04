---
title: "time constant"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad0"
status: "completed"
scrapedAt: "2026-05-23T16:11:35.462Z"
---
# CIRCUITS & NETWORKS: Module 3: Laplace Transforms (Review) - Time Constant

This module review focuses on the **Time Constant**, a fundamental concept that describes the transient behavior of first-order RC and RL circuits. Understanding the time constant is crucial for analyzing how these circuits respond to changes in voltage or current.

## 1. Introduction to Time Constant

The time constant, denoted by the Greek letter **tau ($\tau$)**, is a characteristic parameter of first-order linear time-invariant (LTI) circuits. It quantifies the time it takes for the transient response of the circuit (voltage across a capacitor or current through an inductor) to reach approximately **63.2%** of its final steady-state value when subjected to a step input.

**Key Concepts:**

*   **Transient Response:** The behavior of a circuit immediately after a change in input or circuit conditions, before it settles to a steady state.
*   **Steady-State Response:** The behavior of a circuit after the transient effects have died out and the circuit has reached a stable condition.
*   **First-Order Circuits:** Circuits containing only one reactive element (either a capacitor or an inductor) that can be reduced to a single equivalent resistance and a single equivalent reactive element.

**Textbook Reference:**

*   **Van Valkenburg, Network Analysis (3rd Ed., 2019):** Chapter 6, "First-Order Circuits," extensively discusses the time constant in the context of RC and RL circuit responses.
*   **Ravish R Singh, Network Analysis and Synthesis (2nd Ed., 2019):** Chapter 7, "Transient Analysis," provides a thorough treatment of the time constant and its significance.
*   **Suresh Kumar, Electric Circuits & Networks (1st Ed., 2008):** Chapter 5, "Transient Analysis of DC circuits," and Chapter 7, "Transient Analysis of AC circuits," will cover the time constant for RC and RL circuits.
*   **A Sudhakar, Shyammohan S Palli, Circuits and Networks, Analysis and Synthesis (5th Ed., 2017):** Chapter 7, "Transient Analysis of DC and AC Circuits," dedicates significant attention to the time constant.

## 2. Time Constant in RC Circuits

In a series RC circuit, the time constant is defined as the product of the equivalent resistance (R) and the capacitance (C).

**Definition:**

$$ \tau_{RC} = R \times C $$

**Explanation:**

*   **R:** Represents the equivalent resistance seen by the capacitor when the voltage source is short-circuited.
*   **C:** Represents the capacitance of the capacitor.

**Unit:**

*   The time constant ($\tau$) is measured in **seconds (s)**.
*   If R is in Ohms ($\Omega$) and C is in Farads (F), then $\tau$ is in seconds.

**Transient Response of an RC Circuit (Charging):**

When a DC voltage source ($V_s$) is suddenly applied to an uncharged series RC circuit, the voltage across the capacitor ($v_C(t)$) as a function of time is given by:

$$ v_C(t) = V_s (1 - e^{-t/\tau_{RC}}) $$

**Key Observations for RC Charging:**

*   **At t = 0:** $v_C(0) = V_s (1 - e^0) = V_s (1 - 1) = 0$ (Initially, the capacitor is uncharged).
*   **At t = $\tau_{RC}$:** $v_C(\tau_{RC}) = V_s (1 - e^{-1}) \approx V_s (1 - 0.368) = 0.632 V_s$. The capacitor voltage reaches 63.2% of the final voltage ($V_s$).
*   **At t = 5$\tau_{RC}$:** $v_C(5\tau_{RC}) = V_s (1 - e^{-5}) \approx V_s (1 - 0.0067) \approx 0.993 V_s$. The capacitor is considered fully charged (approximately 99.3% of $V_s$).

**Transient Response of an RC Circuit (Discharging):**

When a charged capacitor in a series RC circuit is discharged through a resistor, the voltage across the capacitor ($v_C(t)$) as a function of time is given by:

$$ v_C(t) = V_0 e^{-t/\tau_{RC}} $$

Where $V_0$ is the initial voltage across the capacitor at t=0.

**Key Observations for RC Discharging:**

*   **At t = 0:** $v_C(0) = V_0 e^0 = V_0$ (The initial voltage).
*   **At t = $\tau_{RC}$:** $v_C(\tau_{RC}) = V_0 e^{-1} \approx 0.368 V_0$. The capacitor voltage drops to 36.8% of its initial voltage.
*   **At t = 5$\tau_{RC}$:** $v_C(5\tau_{RC}) = V_0 e^{-5} \approx 0.0067 V_0$. The capacitor is considered fully discharged (approximately 0.7% of $V_0$).

**Course Outcome Alignment:**

*   **CO2 (Apply transformation from time domain to s-domain, solve dynamic electric circuits):** The transient behavior described by the time constant is a core aspect of dynamic circuit analysis, which can be facilitated by Laplace transforms. The time constant helps predict the circuit's response in the time domain.

## 3. Time Constant in RL Circuits

In a series RL circuit, the time constant is defined as the ratio of the equivalent inductance (L) to the equivalent resistance (R).

**Definition:**

$$ \tau_{RL} = \frac{L}{R} $$

**Explanation:**

*   **L:** Represents the inductance of the inductor.
*   **R:** Represents the equivalent resistance seen by the inductor when the current source is short-circuited (or voltage source is open-circuited).

**Unit:**

*   The time constant ($\tau$) is measured in **seconds (s)**.
*   If L is in Henries (H) and R is in Ohms ($\Omega$), then $\tau$ is in seconds.

**Transient Response of an RL Circuit (Energizing):**

When a DC voltage source ($V_s$) is suddenly applied to an unenergized series RL circuit, the current through the inductor ($i_L(t)$) as a function of time is given by:

$$ i_L(t) = \frac{V_s}{R} (1 - e^{-t/\tau_{RL}}) $$

**Key Observations for RL Energizing:**

*   **At t = 0:** $i_L(0) = \frac{V_s}{R} (1 - e^0) = \frac{V_s}{R} (1 - 1) = 0$ (Initially, no current flows through the inductor).
*   **At t = $\tau_{RL}$:** $i_L(\tau_{RL}) = \frac{V_s}{R} (1 - e^{-1}) \approx \frac{V_s}{R} (1 - 0.368) = 0.632 \frac{V_s}{R}$. The inductor current reaches 63.2% of its final steady-state value ($\frac{V_s}{R}$).
*   **At t = 5$\tau_{RL}$:** $i_L(5\tau_{RL}) = \frac{V_s}{R} (1 - e^{-5}) \approx \frac{V_s}{R} (1 - 0.0067) \approx 0.993 \frac{V_s}{R}$. The inductor current is considered to have reached its steady-state value.

**Transient Response of an RL Circuit (De-energizing):**

When the current through an inductor in a series RL circuit is suddenly interrupted (e.g., by opening a switch in series with the voltage source, leaving only the resistor), the current through the inductor ($i_L(t)$) as a function of time is given by:

$$ i_L(t) = I_0 e^{-t/\tau_{RL}} $$

Where $I_0$ is the initial current through the inductor at t=0.

**Key Observations for RL De-energizing:**

*   **At t = 0:** $i_L(0) = I_0 e^0 = I_0$ (The initial current).
*   **At t = $\tau_{RL}$:** $i_L(\tau_{RL}) = I_0 e^{-1} \approx 0.368 I_0$. The inductor current drops to 36.8% of its initial value.
*   **At t = 5$\tau_{RL}$:** $i_L(5\tau_{RL}) = I_0 e^{-5} \approx 0.0067 I_0$. The inductor current is considered to have decayed to zero.

**Course Outcome Alignment:**

*   **CO2 (Apply transformation from time domain to s-domain, solve dynamic electric circuits):** Similar to RC circuits, the time constant in RL circuits is vital for understanding and predicting the transient behavior of these dynamic circuits, complementing Laplace transform analysis.

## 4. Calculating the Time Constant

To calculate the time constant ($\tau$) for a first-order circuit, follow these general steps:

1.  **Identify the reactive element:** Determine if the circuit contains a capacitor or an inductor.
2.  **Simplify the circuit:**
    *   **For RC circuits:** Short-circuit all voltage sources and open-circuit all current sources. Then, find the equivalent resistance ($R_{eq}$) seen by the capacitor.
    *   **For RL circuits:** Open-circuit all voltage sources and short-circuit all current sources. Then, find the equivalent resistance ($R_{eq}$) seen by the inductor.
3.  **Calculate $\tau$:**
    *   **RC circuit:** $\tau = R_{eq} \times C$
    *   **RL circuit:** $\tau = \frac{L}{R_{eq}}$

**Important Note:** If the circuit has multiple resistors in series or parallel, simplify them to a single equivalent resistance before calculating the time constant.

**Example 1: RC Circuit Time Constant Calculation**

Consider a circuit with a capacitor of 10 $\mu$F in series with a 5 k$\Omega$ resistor and a DC voltage source.

1.  **Reactive Element:** Capacitor (C = 10 $\mu$F)
2.  **Simplify:** Short-circuit the voltage source. The equivalent resistance seen by the capacitor is $R_{eq} = 5$ k$\Omega$.
3.  **Calculate $\tau$:**
    $$ \tau = R_{eq} \times C = (5 \times 10^3 \Omega) \times (10 \times 10^{-6} F) $$
    $$ \tau = 50 \times 10^{-3} s = 50 \, ms $$

**Example 2: RL Circuit Time Constant Calculation**

Consider a circuit with an inductor of 2 H in series with a 100 $\Omega$ resistor and a DC voltage source.

1.  **Reactive Element:** Inductor (L = 2 H)
2.  **Simplify:** Short-circuit the voltage source. The equivalent resistance seen by the inductor is $R_{eq} = 100 \, \Omega$.
3.  **Calculate $\tau$:**
    $$ \tau = \frac{L}{R_{eq}} = \frac{2 \, H}{100 \, \Omega} $$
    $$ \tau = 0.02 \, s = 20 \, ms $$

**Course Outcome Alignment:**

*   **CO1 (Apply circuit theorems to solve complex DC and AC electric networks):** Calculating equivalent resistance involves applying series/parallel resistor combinations, which are fundamental circuit theorems.
*   **CO2 (Apply transformation from time domain to s-domain, solve dynamic electric circuits):** Understanding how to calculate $\tau$ is essential for solving transient analysis problems, which are directly related to dynamic circuits.

## 5. Significance of the Time Constant in Circuit Analysis

The time constant is a powerful tool for predicting and understanding the transient behavior of first-order circuits.

*   **Speed of Response:** A smaller time constant indicates a faster response (the circuit reaches its steady state more quickly). A larger time constant indicates a slower response.
*   **Transient Duration:** The time constant effectively defines the duration of the transient period. For practical purposes, the transient response is considered to have ended after approximately $5\tau$.
*   **Characterizing Energy Storage:** In RC circuits, $\tau$ relates to how quickly a capacitor charges or discharges. In RL circuits, it relates to how quickly an inductor builds up or dissipates magnetic energy.
*   **Laplace Transform Connection:** While this is a review, it's important to remember that the $e^{-st}$ term in the Laplace transform of a decaying exponential function has a direct relationship with the time constant. For a decaying exponential $e^{-at}$, its Laplace transform is $\frac{1}{s+a}$, where $a = 1/\tau$. This connection reinforces the importance of $\tau$ in the s-domain analysis.

**Textbook Reference:**

*   **Van Valkenburg, Network Analysis (3rd Ed., 2019):** Emphasizes that $\tau$ is a key parameter in describing the natural response of first-order circuits.
*   **A Sudhakar, Shyammohan S Palli, Circuits and Networks, Analysis and Synthesis (5th Ed., 2017):** Highlights the role of $\tau$ in determining the time required for transients to decay to negligible values.

**Course Outcome Alignment:**

*   **CO2 (Apply transformation from time domain to s-domain, solve dynamic electric circuits):** Understanding the physical significance of $\tau$ in the time domain directly aids in interpreting the s-domain solutions obtained through Laplace transforms.

## 6. Practice Questions and Exercises

**Question 1:**
A $0.5 \, \mu$F capacitor is connected in series with a 10 k$\Omega$ resistor. What is the time constant of this RC circuit?

**Answer:**
$$ \tau = R \times C = (10 \times 10^3 \Omega) \times (0.5 \times 10^{-6} F) = 5 \times 10^{-3} s = 5 \, ms $$

**Question 2:**
An inductor of 50 mH is in series with a 25 $\Omega$ resistor. Calculate the time constant of this RL circuit.

**Answer:**
$$ \tau = \frac{L}{R} = \frac{50 \times 10^{-3} H}{25 \Omega} = 2 \times 10^{-3} s = 2 \, ms $$

**Question 3:**
In a series RC circuit, a voltage step of 10V is applied. The capacitance is 2 $\mu$F and the resistance is 1 M$\Omega$.
a) Calculate the time constant.
b) What is the voltage across the capacitor after 1 time constant?
c) Approximately how long will it take for the capacitor to be considered fully charged?

**Answer:**
a) $$ \tau = R \times C = (1 \times 10^6 \Omega) \times (2 \times 10^{-6} F) = 2 \, s $$
b) After 1 time constant, the voltage across the capacitor is 63.2% of the final voltage:
   $$ v_C(\tau) = 10 \, V \times (1 - e^{-1}) \approx 10 \times 0.632 = 6.32 \, V $$
c) The capacitor is considered fully charged after approximately 5 time constants:
   $$ Time \approx 5 \times \tau = 5 \times 2 \, s = 10 \, s $$

**Question 4:**
An inductor of 100 mH is connected in series with a 50 $\Omega$ resistor. A DC voltage of 20V is applied.
a) Calculate the time constant.
b) What is the current through the inductor after 1 time constant?
c) What is the final steady-state current?

**Answer:**
a) $$ \tau = \frac{L}{R} = \frac{100 \times 10^{-3} H}{50 \Omega} = 2 \times 10^{-3} s = 2 \, ms $$
b) The final steady-state current is $I_{ss} = \frac{V_s}{R} = \frac{20\,V}{50\,\Omega} = 0.4\,A$.
   After 1 time constant, the current is 63.2% of the final current:
   $$ i_L(\tau) = I_{ss} (1 - e^{-1}) \approx 0.4 \, A \times 0.632 = 0.2528 \, A $$
c) The final steady-state current is:
   $$ I_{ss} = \frac{V_s}{R} = \frac{20 \, V}{50 \, \Omega} = 0.4 \, A $$

**Course Outcome Alignment:**

*   **All COs:** These questions test the ability to apply the definitions of time constants (CO2), perform calculations involving circuit components (CO1), and understand the transient response characteristics that are key to dynamic circuit analysis.

## 7. Important Points to Remember

*   **$\tau$ is a measure of time:** It dictates how quickly a first-order circuit responds to a change.
*   **63.2% Rule:** In charging/energizing, the voltage/current reaches 63.2% of its final value after one time constant. In discharging/de-energizing, it drops to 36.8% of its initial value.
*   **"Fully Charged/Discharged" is approximate:** For practical purposes, a first-order circuit is considered to have reached its steady state or to have fully dissipated its energy after $5\tau$.
*   **Circuit Simplification is Key:** Always find the equivalent resistance seen by the reactive element.
*   **Units Matter:** Ensure consistent units (Ohms, Farads, Henries) when calculating $\tau$.
*   **Time Constant is Fundamental:** It's a cornerstone for understanding transient analysis, which is a precursor to more complex circuit analysis techniques, including those using Laplace transforms.

This review of the time constant provides a strong foundation for understanding the dynamic behavior of circuits, directly supporting the learning outcomes of this module and the broader course objectives.
