---
title: "Automatic Generation Control –  Single Area, Two Area"
subject: "POWER SYSTEM LAB"
module: "Module 7: Automatic Generation Control –  Single Area, Two Area"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367ef"
status: "completed"
scrapedAt: "2026-05-23T16:31:00.375Z"
---
# Power System Lab: Module 7 - Automatic Generation Control (AGC)

## 1. Introduction to Automatic Generation Control (AGC)

**What is AGC?**

Automatic Generation Control (AGC), also known as Economic Dispatch Control (EDC) when considering cost, is a fundamental control system in power systems designed to maintain the desired system frequency and tie-line power flow. It automatically adjusts the output of generators in response to changes in load demand or disturbances.

**Why is AGC Necessary?**

*   **Frequency Stability:** Maintaining a stable frequency (typically 50 Hz or 60 Hz) is crucial for the reliable operation of interconnected power systems and the proper functioning of connected equipment. Deviations from the nominal frequency can lead to:
    *   Reduced efficiency of rotating machinery.
    *   Damage to sensitive equipment.
    *   System instability and potential blackouts.
*   **Tie-Line Power Flow Control:** In an interconnected power system (multiple areas), AGC is used to control the power flow between these areas. This is important for:
    *   **Economic Dispatch:** Distributing generation based on cost-effectiveness across different areas.
    *   **Inter-Area Stability:** Preventing oscillations and maintaining stability of the interconnected system.
    *   **Maintaining Agreement:** Adhering to pre-defined agreements on power exchange between utilities.

**Key Objectives of AGC:**

1.  **Maintain system frequency at its nominal value.**
2.  **Maintain scheduled tie-line power flows between interconnected areas.**
3.  **Distribute the load changes economically among generating units.**

**Types of AGC:**

This module focuses on two main scenarios:

*   **Single Area AGC:** Controlling frequency and generation within a single, isolated power system.
*   **Two Area AGC:** Controlling frequency and tie-line power flow between two interconnected power systems.

---

## 2. Single Area Automatic Generation Control (AGC)

In a single area system, AGC is primarily concerned with maintaining the system frequency.

### 2.1. System Model

A simplified model of a single area power system for AGC analysis includes:

*   **Load:** Represents the total demand on the system.
*   **Generating Unit:** Represents the turbine-governor system controlling the generator output.
*   **Transfer Function:** Represents the dynamics of the synchronous generator and the power system itself.

**Key Components and Their Mathematical Representation:**

1.  **Generating Unit (Turbine-Governor System):**
    *   **Governor:** Senses changes in frequency and adjusts the steam/water flow to the turbine. Its primary characteristic is the **speed droop** ($R$).
        *   **Speed Droop (R):** The change in steady-state generator speed required to achieve a change in generator power output from zero to its maximum rated value.
        *   **Relationship:** $\Delta P_g = -\frac{1}{R} \Delta f$ (for a droop characteristic)
    *   **Turbine:** Converts the energy from steam/water into mechanical power. It has its own dynamics, often represented by a first-order lag.
        *   Transfer Function: $G_T(s) = \frac{K_T}{1 + s T_T}$
        *   $K_T$: Turbine gain
        *   $T_T$: Turbine time constant

2.  **Synchronous Generator and Power System:**
    *   Represents the inertia of the rotating masses and the electrical characteristics of the system.
    *   **Inertia Constant (H):** A measure of the energy stored in the rotating masses of synchronous generators.
    *   **System Inertia:** $J = \frac{2H}{\omega_s}$, where $\omega_s$ is the synchronous angular speed.
    *   **Mechanical Power Input:** $P_m$
    *   **Electrical Power Output:** $P_e$
    *   **Frequency Deviation:** $\Delta f$
    *   **Relationship (Swing Equation):** $J \frac{d\omega}{dt} = P_m - P_e$
        *   $\frac{2H}{\omega_s} \frac{d\omega_s(1+\Delta f/f_s)}{dt} = P_m - P_e$
        *   Assuming small deviations: $\frac{2H}{f_s} \frac{df}{dt} = \Delta P_m - \Delta P_e$
        *   This leads to the transfer function: $G_p(s) = \frac{\Delta P_e(s)}{\Delta P_m(s)} = \frac{1}{1+sT_{sys}}$
        *   $T_{sys}$: System time constant, related to generator inertia and regulation. $T_{sys} = \frac{2H}{f_s R_{eq}}$, where $R_{eq}$ is the equivalent speed regulation of all online generators.

3.  **Load:**
    *   Represents the total power demand. Changes in load are the primary disturbances AGC needs to counteract.
    *   **Load Frequency Sensitivity ($\beta$):** Represents how the load power consumption changes with frequency.
        *   $\Delta P_L = \beta \Delta f$
        *   A positive $\beta$ indicates that load increases with frequency, providing a natural damping effect.

**Block Diagram of Single Area AGC:**

A typical block diagram for single area AGC includes:

*   **Reference Load Change ($\Delta P_{ref}$):** The desired change in load.
*   **Frequency Bias (B):** A gain factor for AGC, often related to the inherent load frequency sensitivity.
*   **Load Frequency Controller (LFC) / ACE (Area Control Error):** This is the core of AGC. It calculates the deviation from the desired state and generates a control signal.
    *   **ACE = $\Delta P_{tie}$ + B $\Delta f$** (In a single area, $\Delta P_{tie}$ is zero, so ACE = B $\Delta f$)
*   **Governor:** Controls turbine mechanical power based on frequency deviation.
*   **Turbine:** Converts mechanical power.
*   **Generator/System:** Produces electrical power and influences frequency.
*   **Load:** Consumes electrical power.

**Simplified Closed-Loop Block Diagram (Single Area):**

```
          +-----------------+      +---------+      +-----------+
Delta P_ref --> | Summing Point   | --> | LFC     | --> | Governor  |
          ^       +-----------------+      +---------+      +-----------+
          |                                                     |
          | Delta f                                             | Delta P_m
          |                                                     v
          +---------------------------------------+<--+  +-------+     +-------+
                                                  |   |  |Turbine| --> |Gen/Sys| --> Delta P_e
                                                  |   |  +-------+     +-------+
                                                  |   |                    |
                                                  |   |                    v
                                                  |   +----------------+ Delta f
                                                  |                    |
                                                  |  +----------------+
                                                  |  |     Load       |
                                                  +--|     (beta)     |
                                                     +----------------+
```

**Explanation of the Control Loop:**

1.  **Disturbance:** A load change ($\Delta P_L$) or a generator outage causes a frequency deviation ($\Delta f$).
2.  **Governor Response:** The governor senses the $\Delta f$ and adjusts the turbine mechanical power output ($\Delta P_m$) based on its speed droop characteristic. This provides a first level of automatic frequency regulation.
3.  **LFC (ACE) Calculation:** The LFC calculates the Area Control Error (ACE). In a single area, this is typically proportional to the frequency deviation: $ACE = B \Delta f$.
4.  **AGC Signal:** The ACE signal is used to adjust the setpoint of the governor, thereby further modulating the turbine mechanical power output ($\Delta P_m$) to bring the frequency back to its nominal value and achieve zero ACE.

**Key Parameters and Their Impact:**

*   **Speed Droop (R):** A lower droop (steeper characteristic) means a larger change in generator output for a given frequency deviation, leading to faster frequency recovery. However, it also means more variation in generator terminal frequency with load.
*   **Inertia Constant (H):** Higher inertia leads to slower frequency deviations, providing more time for AGC to respond.
*   **Load Frequency Sensitivity ($\beta$):** Higher sensitivity (larger $\beta$) provides more natural damping, helping to stabilize frequency faster.
*   **Governor and Turbine Time Constants ($T_T$):** Smaller time constants lead to quicker responses from the governor and turbine, improving AGC performance.
*   **LFC Gain (B):** The frequency bias setting. An appropriate bias is crucial for effective ACE calculation and control.

---

## 3. Two Area Automatic Generation Control (AGC)

In an interconnected power system, AGC must not only control frequency but also regulate the power flow across the tie-lines connecting different control areas.

### 3.1. System Model

A two-area system consists of two interconnected power systems (Area 1 and Area 2), each with its own generating units, loads, and AGC control. The connection is via tie-lines.

**Key Components and Concepts:**

1.  **Control Area:** A geographical region of the power system that is under the control of a single entity (e.g., an electric utility). Each control area has its own generators and loads.
2.  **Tie-Line:** A transmission line connecting two control areas, allowing power to flow between them.
3.  **Tie-Line Power Flow ($\Delta P_{tie}$):** The change in power flow across the tie-line.
4.  **Scheduled Tie-Line Flow ($P_{tie, scheduled}$):** The pre-determined amount of power that should flow across the tie-line between two areas, often based on economic considerations or contractual agreements.
5.  **Area Control Error (ACE):** The primary signal used by the AGC system in each area.
    *   **ACE = $\Delta P_{tie}$ + B $\Delta f$**
    *   $\Delta P_{tie}$: Deviation of the actual tie-line power flow from its scheduled value.
    *   B: Frequency bias for the area.
    *   $\Delta f$: Deviation of the system frequency from its nominal value.

**Block Diagram of Two Area AGC:**

This is more complex than the single-area model.

*   **Area 1:**
    *   Load Change ($\Delta P_{L1}$)
    *   Generator Output Change ($\Delta P_{g1}$)
    *   Frequency Deviation ($\Delta f_1$)
    *   Tie-Line Power Flow Change ($\Delta P_{tie}$) - Power flowing *from* Area 1 *to* Area 2.
    *   AGC Controller for Area 1 calculating $ACE_1 = \Delta P_{tie} + B_1 \Delta f_1$.
    *   Generator-Governor-Turbine dynamics.
*   **Area 2:**
    *   Load Change ($\Delta P_{L2}$)
    *   Generator Output Change ($\Delta P_{g2}$)
    *   Frequency Deviation ($\Delta f_2$)
    *   Tie-Line Power Flow Change ($\Delta P_{tie}$) - Power flowing *from* Area 2 *to* Area 1 (which is $-\Delta P_{tie}$ from Area 1's perspective).
    *   AGC Controller for Area 2 calculating $ACE_2 = -\Delta P_{tie} + B_2 \Delta f_2$.
    *   Generator-Governor-Turbine dynamics.

**Interconnection Dynamics:**

*   **Tie-Line Power Flow:** The power flow on the tie-line is primarily determined by the phase angle difference between the two areas.
    *   $\Delta P_{tie} = T_{12} (\delta_1 - \delta_2)$
    *   $T_{12}$: Tie-line characteristic constant (related to line impedance and voltage).
    *   $\delta_1, \delta_2$: Phase angles of the voltage phasors at the bus connecting to the tie-line in Area 1 and Area 2, respectively.
*   **Frequency and Angle Relationship:** The rate of change of phase angle is proportional to the frequency deviation.
    *   $\frac{d\delta_1}{dt} = \omega_s \Delta f_1$
    *   $\frac{d\delta_2}{dt} = \omega_s \Delta f_2$

**Coupled Dynamics:**

The frequency deviations in the two areas are coupled through the tie-line power flow. A change in load in Area 1 will not only affect $\Delta f_1$ but also cause a change in $\Delta P_{tie}$, which in turn affects $\Delta f_2$.

**AGC Control in Two Areas:**

The goal of AGC in a two-area system is:

1.  **Maintain system frequency in both areas at the nominal value.** ($\Delta f_1 \approx 0$, $\Delta f_2 \approx 0$)
2.  **Maintain the tie-line power flow at its scheduled value.** ($\Delta P_{tie} \approx 0$, if scheduled flow is zero)

**How the ACE Signal Works:**

*   **Area 1's ACE:** $ACE_1 = \Delta P_{tie12} + B_1 \Delta f_1$
    *   If $\Delta f_1 > 0$ (frequency too high), $\Delta P_{tie12}$ is typically positive if Area 1 is supplying Area 2. If the AGC controller in Area 1 increases generation, this further increases $\Delta P_{tie12}$ and helps bring $\Delta f_1$ down.
    *   If $\Delta P_{tie12} < 0$ (less power flowing to Area 2 than scheduled), the $ACE_1$ becomes negative. The AGC in Area 1 will then reduce generation to bring $ACE_1$ towards zero.

*   **Area 2's ACE:** $ACE_2 = \Delta P_{tie21} + B_2 \Delta f_2 = -\Delta P_{tie12} + B_2 \Delta f_2$
    *   If $\Delta f_2 > 0$, the AGC in Area 2 increases generation. This will reduce the tie-line flow from Area 1 (making $\Delta P_{tie12}$ more negative), thus affecting Area 1's ACE.

**Interaction and Coordination:**

*   **Frequency Response:** When a load disturbance occurs in Area 1, $\Delta f_1$ decreases. The governor in Area 1 increases generation. Simultaneously, the AGC in Area 1 will increase generation (if ACE is negative). This increased generation in Area 1 might lead to increased tie-line flow from Area 1 to Area 2 ($\Delta P_{tie12} > 0$).
*   **Tie-Line Response:** The increased tie-line flow from Area 1 will affect Area 2. If Area 2's frequency is also falling, the increased tie-line power helps Area 2.
*   **AGC Compensation:** The AGC controller in Area 1 will adjust its output based on $ACE_1$. Similarly, the AGC in Area 2 will adjust based on $ACE_2$. The goal is that the combined actions bring both frequencies and the tie-line flow to their desired values.

**Example Scenario (Two Areas):**

Consider a sudden load increase ($\Delta P_{L1}$) in Area 1.

1.  **Initial Response:**
    *   $\Delta f_1$ drops.
    *   Turbine-governors in Area 1 increase generation ($\Delta P_{g1}$).
    *   $\Delta P_{tie12}$ might slightly increase or decrease depending on initial conditions and tie-line dynamics.
    *   $\Delta f_2$ might also drop or increase slightly due to the change in $\Delta P_{tie12}$.

2.  **AGC Action (Area 1):**
    *   $ACE_1 = \Delta P_{tie12} + B_1 \Delta f_1$. Since $\Delta f_1$ is negative and $\Delta P_{tie12}$ might be slightly positive (if Area 1 was supplying Area 2 and now increases supply), $ACE_1$ becomes more negative.
    *   The AGC in Area 1 acts to increase generation ($\Delta P_{g1}$) to reduce $ACE_1$.

3.  **AGC Action (Area 2):**
    *   If $\Delta f_2$ dropped, $ACE_2 = -\Delta P_{tie12} + B_2 \Delta f_2$ would be negative.
    *   The AGC in Area 2 acts to increase generation ($\Delta P_{g2}$) to reduce $ACE_2$.

**Effect of Frequency Bias (B):**

*   **Higher B:** A higher frequency bias in an area means that a given frequency deviation will result in a larger ACE signal. This leads to a more aggressive response from the AGC in that area to correct frequency deviations. It also implies that the area is willing to accept more changes in tie-line flow for a given frequency deviation, reducing the burden on its own generators to correct frequency.
*   **Inter-Area Dynamics:** The values of $B_1$ and $B_2$ and the tie-line characteristics determine the speed and stability of the inter-area frequency response and tie-line flow regulation.

---

## 4. Lab Experiments and Practical Aspects

The experiments in this module typically involve simulating these AGC systems using software like MATLAB/Simulink, PSCAD, or PSS/E.

### 4.1. Experiment Setup and Procedure

**Objective:** To study the transient response of a power system to load disturbances under AGC control and to observe the effects of changing AGC parameters.

**Typical Experiment Steps:**

1.  **Model Development:**
    *   **Single Area:** Develop a block diagram model representing the generating unit, governor, turbine, load, and LFC (ACE) controller.
    *   **Two Area:** Develop a model of two interconnected areas, including tie-line dynamics, individual AGC controllers for each area, and generator-governor-turbine models.

2.  **Parameter Setting:**
    *   Define nominal system parameters: base power, base frequency, generator inertia, turbine gains/time constants, governor droop characteristics, load frequency sensitivity ($\beta$).
    *   Set the scheduled tie-line flow (often zero for simplification).
    *   Configure the AGC parameters: frequency bias (B) for each area.

3.  **Simulation:**
    *   **Disturbance:** Introduce a step change in load demand in one or both areas.
    *   **Control Action:** Ensure AGC is enabled.
    *   **Run Simulation:** Simulate the system response over a period (e.g., 30-60 seconds).

4.  **Data Acquisition:**
    *   Record key variables: system frequency ($\Delta f$), tie-line power flow ($\Delta P_{tie}$), generator output ($\Delta P_g$), governor setpoint.

5.  **Parameter Variation:**
    *   Repeat the simulation with different values of:
        *   Speed droop (R)
        *   Inertia (H)
        *   Load frequency sensitivity ($\beta$)
        *   Governor/Turbine time constants ($T_T$)
        *   Frequency bias (B)
        *   Tie-line constants ($T_{12}$)

6.  **Analysis:**
    *   Analyze the transient response characteristics:
        *   Settling time for frequency.
        *   Overshoot/undershoot of frequency.
        *   Steady-state error for frequency.
        *   Speed of tie-line power flow regulation.
        *   Interaction between areas in the two-area case.

### 4.2. Key Aspects to Observe and Analyze

*   **Effect of Load Change:** How does the system frequency and tie-line flow respond to a sudden load change when AGC is active?
*   **Role of Governor:** How does the governor's droop characteristic affect the initial frequency recovery?
*   **Role of AGC:** How does the AGC (ACE signal) further improve the frequency and tie-line flow regulation compared to just governor action?
*   **Single Area vs. Two Area:** Compare the complexity and interdependencies in the responses.
*   **Parameter Tuning:**
    *   How does changing `B` affect the response? (Is there an optimal `B`?)
    *   How does changing `R` affect the response?
    *   How does changing `H` affect the response?
    *   How do tie-line constants affect inter-area dynamics?

---

## 5. Practice Questions and Exercises

These questions are designed to test your understanding of the concepts covered.

**Single Area AGC:**

1.  **Question:** What are the two primary objectives of AGC in a single control area?
    **Answer:** To maintain system frequency at its nominal value and to restore generator outputs to their scheduled levels after a disturbance.

2.  **Question:** Define the Area Control Error (ACE) for a single control area, assuming no tie-lines.
    **Answer:** $ACE = B \Delta f$, where B is the frequency bias and $\Delta f$ is the system frequency deviation.

3.  **Question:** Explain the concept of speed droop ($R$) for a governor. How does a smaller droop value affect the system's frequency response?
    **Answer:** Speed droop ($R$) is the change in steady-state generator speed required to change the generator power output from zero to its maximum value. A smaller droop means a larger change in generator output for a given frequency deviation, leading to faster frequency recovery but potentially larger variations in terminal frequency with load.

4.  **Question:** A single area system has a frequency deviation of -0.1 Hz and a frequency bias of 100 MW/Hz. Calculate the ACE.
    **Answer:** $ACE = B \Delta f = 100 \, \text{MW/Hz} \times (-0.1 \, \text{Hz}) = -10 \, \text{MW}$.

**Two Area AGC:**

5.  **Question:** What is the formula for ACE in a two-area interconnected system? Define each term.
    **Answer:** $ACE_i = \Delta P_{tie, i} + B_i \Delta f_i$.
    *   $ACE_i$: Area Control Error for Area i.
    *   $\Delta P_{tie, i}$: Change in tie-line power flow for Area i (positive flowing out of the area).
    *   $B_i$: Frequency bias for Area i.
    *   $\Delta f_i$: Frequency deviation for Area i.

6.  **Question:** If Area 1's scheduled tie-line flow to Area 2 is 50 MW, and the actual flow is 60 MW, what is the $\Delta P_{tie}$ term for Area 1's ACE calculation?
    **Answer:** $\Delta P_{tie}$ for Area 1 is the change from the schedule. If the scheduled flow is 50 MW and actual is 60 MW, then $\Delta P_{tie} = 60 \, \text{MW} - 50 \, \text{MW} = 10 \, \text{MW}$.

7.  **Question:** Consider two areas connected by a tie-line. A load increase occurs in Area 1. How will this disturbance affect the frequency in Area 2, assuming no AGC action initially?
    **Answer:** The load increase in Area 1 causes its frequency to drop. This frequency drop will likely lead to a change in the tie-line power flow. If Area 1 was supplying power to Area 2, its frequency drop might cause it to draw power from Area 2, or reduce the power supplied to Area 2. This change in tie-line flow will then affect the frequency in Area 2, causing it to drop as well, but typically by a smaller amount than in Area 1.

8.  **Question:** In a two-area system, if $B_1 = 150 \, \text{MW/Hz}$, $B_2 = 120 \, \text{MW/Hz}$, $\Delta f_1 = 0.05 \, \text{Hz}$, $\Delta f_2 = -0.02 \, \text{Hz}$, and the tie-line flow from Area 1 to Area 2 is $\Delta P_{tie12} = 20 \, \text{MW}$. Calculate $ACE_1$ and $ACE_2$.
    **Answer:**
    *   For Area 1: $\Delta P_{tie1}$ (power flowing *out* of Area 1) = $\Delta P_{tie12} = 20 \, \text{MW}$.
        $ACE_1 = \Delta P_{tie1} + B_1 \Delta f_1 = 20 \, \text{MW} + (150 \, \text{MW/Hz} \times 0.05 \, \text{Hz}) = 20 \, \text{MW} + 7.5 \, \text{MW} = 27.5 \, \text{MW}$.
    *   For Area 2: $\Delta P_{tie2}$ (power flowing *out* of Area 2) = $-\Delta P_{tie12} = -20 \, \text{MW}$.
        $ACE_2 = \Delta P_{tie2} + B_2 \Delta f_2 = -20 \, \text{MW} + (120 \, \text{MW/Hz} \times -0.02 \, \text{Hz}) = -20 \, \text{MW} - 2.4 \, \text{MW} = -22.4 \, \text{MW}$.

---

## 6. Important Points to Remember

*   **AGC is a secondary control system:** It operates after primary frequency control (governor action) has responded to a disturbance.
*   **ACE is the key signal:** It incorporates both frequency deviation and tie-line deviation from schedule.
*   **Frequency Bias (B) is critical:** It determines how much an area relies on its own generation versus tie-line power to correct frequency.
*   **Interconnected systems have coupled dynamics:** A disturbance in one area affects all connected areas through tie-lines.
*   **Lab experiments focus on transient response:** Observing how AGC parameters affect settling time, overshoot, and steady-state error.
*   **Economic Dispatch:** While this module focuses on frequency and tie-line control, AGC systems are often integrated with economic dispatch logic to allocate load changes cost-effectively among generators.
*   **CO1 (Modeling):** Understanding the transfer functions of turbines, governors, generators, and tie-lines is essential for building simulation models.
*   **CO2 (Testing/Analysis):** The lab experiments are essentially tests to analyze the performance of the AGC system under various conditions and parameter settings.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. References and Textbooks

*   **Glover, Sarma, & Overbye, "Power System Analysis and Design"**: This textbook provides foundational knowledge on power system modeling, stability, and control, including details on governor models and frequency response. Chapters related to system dynamics and control would be relevant.
*   **Grainger & Stevenson, "Power System Analysis"**: Another standard text covering synchronous machine modeling, power system stability, and the concepts of frequency regulation.
*   **Kundur, "Power System Stability and Control"**: A comprehensive reference that delves deeply into all aspects of power system stability, including detailed coverage of Automatic Generation Control, tie-line control, and the mathematical formulations behind them. Chapters on Load Frequency Control and Interconnected System Control are particularly relevant.
*   **Lab Manual:** The specific lab manual provided for the Power System Lab course will contain detailed experimental procedures, simulation setup guides, and specific parameters to be used.

This comprehensive set of notes should provide a strong foundation for understanding Automatic Generation Control in both single and two-area power systems for your Power System Lab module. Remember to consult your lab manual and textbooks for specific details and experimental procedures.