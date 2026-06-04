---
title: "Aim: To conduct transient stability analysis of a given system and plot suitable graphs using MATLAB Simulink or dedicated software (if available)"
subject: "POWER SYSTEM LAB"
module: "Module 6: Transient Stability Analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367ed"
status: "completed"
scrapedAt: "2026-05-23T16:30:58.979Z"
---
# Power System Lab: Module 6 - Transient Stability Analysis

## Topic: Transient Stability Analysis of a Given System

**Aim:** To conduct transient stability analysis of a given system and plot suitable graphs using MATLAB Simulink or dedicated software.

**Course Outcomes Addressed:**
*   **CO1:** Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)
*   **CO2:** Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3)

---

### 1. Introduction to Transient Stability

**Definition:** Transient stability refers to the ability of a power system to maintain synchronism when subjected to a large disturbance, such as a short circuit or loss of a generator. It involves the dynamic behavior of synchronous machines and the interconnected network over a short period (typically milliseconds to a few seconds) following the disturbance.

**Importance:** Maintaining transient stability is crucial for reliable power system operation. Instability can lead to loss of synchronism, tripping of generators, cascading outages, and widespread blackouts.

**Key Concepts:**

*   **Synchronous Machine:** The core component whose dynamic behavior is studied. Its rotor angle ($\delta$) relative to a synchronously rotating reference frame is a critical parameter.
*   **Rotor Angle ($\delta$):** The angle between the rotor's magnetic field axis and the synchronously rotating reference axis. For stability, all generators in an interconnected system must maintain their relative rotor angles within acceptable limits.
*   **Power Angle Curve:** A curve showing the electrical power output of a synchronous machine as a function of its rotor angle ($\delta$). The steady-state operating point is usually on this curve.
*   **Swing Equation:** The fundamental equation describing the dynamic motion of a synchronous machine's rotor under the influence of mechanical torque, electrical torque, and damping.
    *   $J \frac{d^2\delta}{dt^2} = T_m - T_e - T_d$
    *   Where:
        *   $J$ is the moment of inertia of the rotor.
        *   $\delta$ is the rotor angle.
        *   $T_m$ is the mechanical torque.
        *   $T_e$ is the electrical torque.
        *   $T_d$ is the damping torque.
*   **Inertia Constant (H):** A parameter related to the stored kinetic energy of the rotor.
    *   $H = \frac{KE_{stored}}{S_{base}}$
    *   $J = \frac{2H S_{base}}{\omega_s}$ (where $\omega_s$ is the synchronous angular speed)
*   **Mechanical Power ($P_m$):** The power supplied to the synchronous machine rotor by the prime mover.
*   **Electrical Power ($P_e$):** The electrical power delivered by the synchronous machine to the network.
*   **Damping Torque ($T_d$):** Represents losses and damping effects within the machine and connected circuit. It is often proportional to the speed deviation ($\frac{d\delta}{dt}$).
    *   $T_d = D \frac{d\delta}{dt}$ (where $D$ is the damping coefficient)
*   **Critical Clearing Time (CCT):** The maximum duration a fault can persist before the system loses synchronism. Clearing the fault within the CCT is essential for maintaining stability.
*   **First Swing Stability:** The most critical part of transient stability analysis, focusing on the rotor angle's behavior during the first swing after a disturbance.

---

### 2. Mathematical Modeling for Transient Stability Analysis

To perform transient stability analysis, we need mathematical models of the power system components.

**2.1 Synchronous Machine Model:**

*   **The Swing Equation (Simplified Model - Classical Model):**
    *   $\frac{2H}{\omega_s} \frac{d^2\delta}{dt^2} = P_m - P_e$
    *   Assumptions:
        *   Infinite bus assumption: The network is represented by an infinite bus (constant voltage magnitude and frequency).
        *   Constant mechanical power ($P_m$): The prime mover's power output remains constant during the transient period.
        *   Negligible electrical network impedance: Only the synchronous machine reactance ($X_d'$) is considered.
        *   No saliency: The synchronous machine is represented as a salient pole machine.
    *   Electrical power output: $P_e = \frac{E' V}{X_d'} \sin(\delta)$, where $E'$ is the internal voltage behind transient reactance, $V$ is the infinite bus voltage, and $X_d'$ is the synchronous machine's transient reactance.

*   **Classical Model Example:**
    Consider a synchronous generator connected to an infinite bus through a reactance $X_{total}$.
    $P_e = \frac{E' V}{X_{total}} \sin(\delta)$
    Swing Equation: $\frac{2H}{\omega_s} \frac{d^2\delta}{dt^2} = P_m - \frac{E' V}{X_{total}} \sin(\delta)$

*   **More Advanced Models (Higher Order Models):**
    *   Include effects of saliency (d-axis and q-axis reactances).
    *   Model of excitation systems (AVRs).
    *   Model of prime movers and governors.
    *   Modeling of electrical transients in the network (transmission lines, transformers).
    *   **Two-Axis Model (Park's Transformation):** This is the standard approach for representing synchronous machines accurately. It transforms stator variables into a rotating reference frame (d-q frame). This leads to a set of differential equations describing the machine's electrical and mechanical dynamics.

**2.2 Network Model:**

*   **Load Flow Equations:** The network is typically represented by its admittance matrix (Ybus) or impedance matrix (Zbus). Load flow studies are performed to determine the pre-disturbance operating point (voltages, angles).
*   **Fault Modeling:** During a fault, the network configuration changes, affecting the electrical power transferred. Faults are modeled by injecting currents or modifying the network admittance/impedance.

**2.3 Excitation System and Governor Models:**

*   **Automatic Voltage Regulator (AVR):** Controls the field voltage to maintain terminal voltage. Its dynamics can significantly affect transient stability.
*   **Governor:** Controls the mechanical power input from the prime mover in response to speed variations. Its response is also crucial.

---

### 3. Transient Stability Analysis Procedure

The goal is to simulate the system's response to a fault and determine if it recovers to a stable operating condition.

**3.1 Steps for Transient Stability Analysis:**

1.  **Pre-disturbance Analysis (Steady State):**
    *   Perform a load flow analysis to obtain initial operating conditions (voltage magnitudes and angles at all buses).
    *   Determine the initial rotor angle ($\delta_0$) for each synchronous machine.
    *   Calculate the initial electrical power output ($P_{e0}$) for each machine.

2.  **System Modeling for Simulation:**
    *   Represent synchronous machines using appropriate models (Classical, Park's model).
    *   Model the network, including transmission lines, transformers, and loads.
    *   Include models for excitation systems and governors if higher-order analysis is performed.
    *   Define the fault: Type of fault (three-phase, single-line-to-ground), location, and duration.

3.  **Fault Application and Simulation:**
    *   Apply the fault at a specified time ($t=0$).
    *   Simulate the system's dynamic behavior using numerical integration methods (e.g., Euler method, Runge-Kutta methods).
    *   The simulation progresses in discrete time steps.

4.  **Fault Clearing:**
    *   At the specified fault clearing time ($t_{clearing}$), the fault is removed. This usually involves changing the network configuration (e.g., opening circuit breakers to remove faulted lines).

5.  **Post-clearing Analysis:**
    *   Continue the simulation to observe the system's response after the fault is cleared.
    *   Monitor key parameters: rotor angles, rotor speeds, electrical power output, mechanical power.

6.  **Stability Assessment:**
    *   **Synchronism:** The system is considered stable if all synchronous machines remain in synchronism (i.e., their rotor angles do not deviate uncontrollably from each other).
    *   **First Swing Stability:** The critical check is whether the rotor angle of any machine swings too far during the first swing after fault clearing. If the angle reaches a maximum and starts returning, stability is likely maintained. If it continues to increase indefinitely, the machine loses synchronism.

**3.2 Methods for Transient Stability Analysis:**

*   **Direct Methods (Lyapunov's Second Method):** Provides a theoretical framework to assess stability without explicit time simulation. However, obtaining the Lyapunov function can be challenging for complex systems.
*   **Transient Energy Function (TEF):** A specific application of Lyapunov's method.
*   **Numerical Integration (Time Domain Simulation):** The most common method for transient stability analysis, involving solving the system's differential and algebraic equations numerically over time. This is what is typically done using MATLAB Simulink.

---

### 4. MATLAB Simulink Implementation

MATLAB Simulink is a powerful graphical environment for modeling and simulating dynamic systems.

**4.1 Setting up the Simulink Model:**

1.  **Power System Blockset:** Simulink has a dedicated Power System Blockset (or Simscape Electrical) that provides pre-built blocks for power system components.
2.  **Synchronous Machine Block:** Select an appropriate model (e.g., Synchronous Machine). You'll need to configure its parameters (inertia, reactances, etc.).
3.  **Electrical Network Blocks:** Use blocks for transmission lines, transformers, loads, and RLC series/parallel elements to build the network.
4.  **Electrical Sources:** Voltage sources or infinite bus blocks.
5.  **Fault Introduction:**
    *   Use a **Series Branch** block to represent a line.
    *   To simulate a fault, insert a **Controlled Current Source** or a **Series Resistor/Impedance** in parallel with the line impedance.
    *   Control the fault using a **Pulse Generator** or a **Step Function** to turn the fault on and off at specific times.
    *   Alternatively, use the **Fault** block available in Simscape Electrical.
6.  **Control System Blocks:** Add blocks for AVRs and governors if needed.
7.  **Measurement Blocks:** Use **Scope** blocks to visualize time-domain signals (rotor angle, speed, power, voltage, current).
8.  **Simulation Configuration:**
    *   Set the simulation stop time.
    *   Choose an appropriate solver (e.g., `ode23t`, `ode45` for stiff/non-stiff problems). The choice of solver can significantly impact accuracy and simulation time.
    *   Configure the **Powergui** block (essential for power system simulations) to select the simulation mode (phasor or fundamental frequency) and solver settings.

**4.2 Example Simulink Model Structure (Simplified):**

```
[Synchronous Machine] --- [Transmission Line] --- [Infinite Bus]
       |                       |
       |                       |
   [AVR/Governor]        [Fault Mechanism]
```

**4.3 Parameters to Configure:**

*   **Synchronous Machine:**
    *   Inertia constant (H)
    *   Transient reactance ($X_d'$)
    *   Rated power and voltage
    *   Initial rotor angle and speed
*   **Transmission Line:**
    *   Resistance (R) and Reactance (X)
    *   Line length
*   **Infinite Bus:**
    *   Voltage magnitude and angle
*   **Fault:**
    *   Location (which line)
    *   Type (e.g., 3-phase)
    *   Duration (fault-on time, fault-off time)

**4.4 Simulation Execution:**

*   Run the Simulink simulation.
*   Observe the plots on the Scope blocks.

---

### 5. Plotting Suitable Graphs for Analysis

The quality of the output graphs directly impacts the ability to assess transient stability.

**5.1 Essential Graphs:**

*   **Rotor Angle vs. Time ($\delta(t)$):** This is the most critical plot.
    *   Shows the swing of the rotor angle after the disturbance.
    *   Stable system: Angle oscillates and settles to a new steady-state value or returns to the original value.
    *   Unstable system: Angle increases continuously or oscillates with increasing amplitude.
    *   **Key Observation:** The peak value of the rotor angle during the first swing.

*   **Rotor Speed vs. Time ($\omega(t)$):**
    *   Shows the variation in rotor speed relative to synchronous speed.
    *   Indicates how the machine's acceleration/deceleration is changing.

*   **Electrical Power vs. Time ($P_e(t)$):**
    *   Shows how the electrical power output changes during the disturbance and post-disturbance period.
    *   The "power dip" during the fault and the subsequent recovery are important.

*   **Mechanical Power vs. Time ($P_m(t)$):**
    *   Shows the mechanical power input. If a governor is modeled, its response will be visible.

*   **Voltage at Key Buses vs. Time ($V(t)$):**
    *   Shows the impact of the disturbance and fault clearing on voltage levels.

**5.2 Interpreting the Graphs:**

*   **Angle Trajectories:** For a stable system, the rotor angle differences between machines should oscillate and eventually settle. If the angles continue to diverge after fault clearing, the system is unstable.
*   **First Swing Peak:** A common criterion is that if the rotor angle does not exceed a certain limit (e.g., 90-120 degrees, depending on the system) during the first swing, the system is likely stable. This limit is related to the critical clearing angle.
*   **Rate of Change of Angle:** A high rate of change of angle indicates strong acceleration or deceleration.

---

### 6. Critical Clearing Time (CCT) Calculation

The CCT is a fundamental parameter for transient stability.

**Definition:** The maximum time a fault can persist before the system loses synchronism.

**Procedure for finding CCT:**

1.  **Select a Fault Scenario:** Choose the fault location and type.
2.  **Perform Simulations with Varying Fault Durations:**
    *   Simulate the system response for a fault duration $t_1$. If stable, increase the duration to $t_2$.
    *   Continue increasing the fault duration until instability is observed.
    *   The CCT is the time at which the system transitions from stable to unstable.
3.  **Binary Search (Efficient Method):**
    *   Start with a broad range of fault durations (e.g., 0.1s to 1.0s).
    *   Test a midpoint $t_{mid}$. If stable, the CCT is greater than $t_{mid}$. If unstable, the CCT is less than $t_{mid}$.
    *   Refine the search range iteratively until the CCT is found within a desired accuracy.

**Factors affecting CCT:**

*   Fault location (closer faults generally have shorter CCTs).
*   Fault type (3-phase faults are the most severe, leading to shortest CCTs).
*   System loading (higher loading reduces CCT).
*   Inertia of generators (higher inertia can increase CCT).
*   Action of protective relays and breakers.
*   Operation of AVRs and governors.

---

### 7. Practice Questions and Exercises

**Question 1:**
A synchronous generator with inertia constant $H = 4$ pu is connected to an infinite bus of voltage $V = 1.0$ pu through a total reactance of $X_{total} = 0.5$ pu. The mechanical power input is $P_m = 1.0$ pu. The open-circuit voltage of the generator is $E' = 1.1$ pu.
a) Calculate the steady-state rotor angle $\delta_0$ when $P_m = 1.0$ pu.
b) If a three-phase fault occurs at the infinite bus, write down the swing equation for the generator. Assume the fault causes $P_e$ to become zero.
c) If the fault is cleared after some time $\Delta t$, and the post-fault system is represented by a total reactance of $X_{total\_post} = 0.8$ pu, write down the swing equation for the post-fault condition.
d) If the generator's rotor angle reaches $130^\circ$ at the end of the first swing, and the system is stable, sketch the $\delta(t)$ waveform.

**Answer 1:**
a) $P_e = \frac{E' V}{X_{total}} \sin(\delta)$
   $1.0 = \frac{1.1 \times 1.0}{0.5} \sin(\delta_0)$
   $1.0 = 2.2 \sin(\delta_0)$
   $\sin(\delta_0) = \frac{1.0}{2.2} \approx 0.4545$
   $\delta_0 = \arcsin(0.4545) \approx 27.04^\circ$ or $152.96^\circ$. The stable operating point is usually assumed to be the smaller angle, so $\delta_0 \approx 27.04^\circ$.

b) Swing Equation during fault ($P_e = 0$):
   $\frac{2H}{\omega_s} \frac{d^2\delta}{dt^2} = P_m - P_e$
   Assuming $\omega_s = 1$ pu (for simplicity in this example, or use $2\pi f_s$), and converting H to J:
   $J = \frac{2H}{\omega_s} = \frac{2 \times 4}{1} = 8$
   $8 \frac{d^2\delta}{dt^2} = 1.0 - 0$
   $\frac{d^2\delta}{dt^2} = \frac{1}{8} = 0.125$

c) Post-fault Swing Equation:
   $P_{e\_post} = \frac{E' V}{X_{total\_post}} \sin(\delta) = \frac{1.1 \times 1.0}{0.8} \sin(\delta) = 1.375 \sin(\delta)$
   $8 \frac{d^2\delta}{dt^2} = 1.0 - 1.375 \sin(\delta)$

d) Sketch of $\delta(t)$: The initial angle is $\delta_0 \approx 27.04^\circ$. After the fault is cleared, the system starts to recover. If the peak angle is $130^\circ$, the waveform will rise from $27.04^\circ$ to a peak of $130^\circ$ and then start to fall, oscillating around the new steady-state angle.

---

**Question 2:**
Explain the concept of the "critical clearing angle" and its relation to transient stability. How would you use MATLAB Simulink to estimate the critical clearing time for a specific fault scenario?

**Answer 2:**
*   **Critical Clearing Angle ($\delta_{cr}$):** This is the maximum rotor angle that a synchronous machine can reach at the instant a fault is cleared, and the system still remains stable. It represents the boundary between stable and unstable operation for a given fault.
*   **Relation to Transient Stability:** If a fault is cleared when the rotor angle is less than $\delta_{cr}$ at the instant of clearing, the machine will likely return to synchronism. If it is cleared when the rotor angle is greater than $\delta_{cr}$, the machine will lose synchronism.
*   **Estimating CCT using Simulink:**
    1.  **Model the System:** Create a Simulink model of the power system including the synchronous machine, network, and fault location.
    2.  **Define Fault Scenario:** Specify the fault type and location.
    3.  **Iterative Simulation:**
        *   Set a specific fault duration (e.g., $t_{fault} = 0.1$ s). Run the simulation and observe the rotor angle response. Check if the system is stable.
        *   Increase the fault duration (e.g., $t_{fault} = 0.2$ s). Run again.
        *   Continue increasing the fault duration incrementally.
        *   Identify the fault duration at which the rotor angle starts to diverge after fault clearing.
    4.  **Refine the Estimate:** Once an unstable duration is found, reduce the fault duration to a value just below it to find the maximum stable duration. This transition point is the Critical Clearing Time (CCT). A more systematic approach involves using a loop in MATLAB to control the fault duration parameter in Simulink and record stability results.

---

### 8. Important Points to Remember

*   **Transient stability is a *time-domain* phenomenon.** It's about how the system behaves dynamically *after* a disturbance.
*   **The swing equation is the core equation for simplified transient stability.**
*   **Rotor angle difference is the key indicator of stability.** Divergence implies instability.
*   **Fault clearing time is critical.** Clearing faults faster generally leads to better transient stability.
*   **Simulink is a powerful tool for simulating these dynamic behaviors.**
*   **Higher-order models (including AVRs and governors) provide more realistic results** but are more complex to implement.
*   **The first swing is the most critical.** If the system survives the first swing, it's often stable.
*   **Understanding the power-angle curve** helps in visualizing the initial operating point and the impact of disturbances.
*   **Always check your Simulink model parameters carefully.** Incorrect parameters will lead to incorrect results.
*   **Experiment with different fault locations and types** to understand their impact on stability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Textbooks

*   **"Power System Analysis and Design" by J. Duncan Glover, Mulukutla S. Sarma, and Hasken K. Sarma:** Provides foundational knowledge on power system modeling and analysis. Chapters on synchronous machines and power system stability are relevant.
*   **"Power System Stability and Control" by P. M. Anderson and A. A. Fouad:** A classic and comprehensive text specifically dedicated to power system stability, covering various aspects including transient stability analysis in detail.
*   **"Electric Power Systems" by W. D. Stevenson Jr.:** Another widely used textbook covering power system analysis, including stability.
*   **MATLAB Simulink Documentation:** The official MATLAB documentation for Simscape Electrical (formerly Power System Blockset) is invaluable for learning how to build and simulate power system models.

---
This detailed study note covers the core concepts, procedures, and tools for transient stability analysis, directly addressing the learning outcomes and course outcomes. The inclusion of questions and references aims to provide a comprehensive learning experience.