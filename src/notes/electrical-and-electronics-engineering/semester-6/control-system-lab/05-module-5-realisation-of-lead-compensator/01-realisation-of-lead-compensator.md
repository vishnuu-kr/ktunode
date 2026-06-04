---
title: "Realisation of lead compensator."
subject: "CONTROL SYSTEM LAB"
module: "Module 5: Realisation of lead compensator."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36764"
status: "completed"
scrapedAt: "2026-05-23T16:25:12.014Z"
---
## CONTROL SYSTEM LAB: Module 5 - Realisation of Lead Compensator

This module focuses on the practical implementation and understanding of lead compensators in control systems. We will explore their function, design principles, and how to realize them in a laboratory setting, often utilizing simulation tools.

### **1. Introduction to Lead Compensators**

**Key Concepts:**

*   **Compensator:** A device or circuit inserted into a control system to improve its performance (e.g., stability, transient response, steady-state accuracy).
*   **Lead Compensator:** A type of compensator that introduces a phase lead to the system's frequency response over a specific frequency range. This is beneficial for improving transient response, increasing system bandwidth, and enhancing stability.
*   **Phase Lead:** An advancement in the phase angle of the system's output relative to its input.
*   **Why Lead Compensators?**
    *   Improve transient response (reduce rise time, overshoot).
    *   Increase system bandwidth, leading to faster response.
    *   Enhance system stability by increasing phase margin.
    *   Can be used to shift dominant closed-loop poles to improve performance.

**Textbook References:**

*   **Ogata:** Chapter 8: Control System Design
*   **Nise:** Chapter 7: Stability and Design; Chapter 8: Control System Design

**Course Outcome Alignment:**

*   **CO4 (K5):** This topic directly addresses the design and realization of compensators to meet performance requirements.

### **2. Transfer Function of a Lead Compensator**

**Key Concepts:**

*   **Lead Compensator Transfer Function:** A standard form for a lead compensator is given by:
    $$G_c(s) = K_c \frac{s + \frac{1}{\alpha T}}{s + \frac{1}{T}}$$
    where:
    *   $K_c$ is a gain constant.
    *   $T$ and $\alpha$ are positive constants with $\alpha < 1$.
    *   $\frac{1}{T}$ is the zero location.
    *   $\frac{1}{\alpha T}$ is the pole location.

*   **Characteristics of the Transfer Function:**
    *   The pole is located closer to the origin than the zero ($1/\alpha T > 1/T$ since $\alpha < 1$).
    *   This pole-zero configuration results in a net positive phase shift (phase lead) in the frequency range between the pole and zero.
    *   The magnitude response is generally increased over the range where phase lead is introduced.

*   **Alternative Form:**
    $$G_c(s) = K_c \frac{\alpha \tau s + 1}{\tau s + 1}$$
    where $\tau = T$ and $\alpha$ is defined as before. This form is often used in practical circuit implementations.

**Example:**

Consider a lead compensator with the transfer function $G_c(s) = K_c \frac{s + 2}{s + 10}$.
Here, $\frac{1}{T} = 2$ and $\frac{1}{\alpha T} = 10$.
From $\frac{1}{T} = 2$, we get $T = 0.5$.
From $\frac{1}{\alpha T} = 10$, we get $\alpha = \frac{1}{10T} = \frac{1}{10 \times 0.5} = \frac{1}{5} = 0.2$.
So, $\alpha = 0.2 < 1$.

**Textbook References:**

*   **Ogata:** Chapter 8.2: Lead Compensators
*   **Nise:** Chapter 8.2: Lead Compensator Design

**Course Outcome Alignment:**

*   **CO3 (K3):** Understanding the transfer function is crucial for simulating system behavior.
*   **CO4 (K5):** The transfer function is the basis for designing the compensator.

### **3. Design Procedure for Lead Compensator (Frequency Domain)**

**Key Concepts:**

The goal is to design a lead compensator $G_c(s)$ to be placed in series with a plant $G_p(s)$ such that the closed-loop system meets desired performance specifications (e.g., phase margin, gain margin, damping ratio, settling time).

**Typical Design Steps (using Frequency Response methods):**

1.  **Analyze the Uncompensated System:** Obtain the Bode plot of the uncompensated system $G_p(j\omega)$. Determine its current phase margin and gain margin. Identify any deficiencies in transient response.

2.  **Determine the Required Phase Lead:** Based on the desired performance (e.g., desired phase margin), calculate the additional phase lead ($\phi_m$) required from the compensator.
    *   If the desired phase margin is $PM_{desired}$ and the uncompensated phase margin is $PM_{uncompensated}$, then the compensator needs to provide approximately $\phi_m \approx PM_{desired} - PM_{uncompensated} + \text{some margin (e.g., 5-10 degrees)}$.

3.  **Determine the Compensator Gain ($K_c$):**
    *   Identify the frequency ($\omega_m$) at which the compensator will provide the maximum phase lead. This frequency is typically chosen near the gain crossover frequency of the compensated system.
    *   The maximum phase lead $\phi_{max}$ provided by a lead compensator is given by:
        $$\sin(\phi_{max}) = \frac{1 - \alpha}{1 + \alpha}$$
        From this, $\alpha$ can be calculated.
    *   The frequency at which this maximum phase occurs is:
        $$\omega_m = \frac{1}{T\sqrt{\alpha}}$$
    *   At this frequency $\omega_m$, the compensator transfer function is $G_c(j\omega_m) = K_c \frac{1 + j\omega_m T}{1 + j\omega_m \alpha T}$. The magnitude of this is $|G_c(j\omega_m)| = K_c \frac{\sqrt{1+(\omega_m T)^2}}{\sqrt{1+(\omega_m \alpha T)^2}}$.
    *   The gain crossover frequency of the *compensated* system should be at $\omega_m$. This means that the magnitude of the *open-loop* compensated system $G_c(j\omega)G_p(j\omega)$ at $\omega_m$ should be 0 dB (or 1).
    *   Therefore, at $\omega_m$:
        $$|G_c(j\omega_m)| |G_p(j\omega_m)| = 1$$
        $$K_c \left| \frac{j\omega_m + \frac{1}{\alpha T}}{j\omega_m + \frac{1}{T}} \right| |G_p(j\omega_m)| = 1$$
        Once $\omega_m$ and $\alpha$ are known, and $|G_p(j\omega_m)|$ is found from the Bode plot, $K_c$ can be determined. Often, the gain $K_c$ is adjusted to set the gain crossover frequency at $\omega_m$. The new gain crossover frequency of the uncompensated system $G_p(j\omega)$ is found where $|G_p(j\omega)| = \frac{1}{K_c}$. Then, $\omega_m$ is chosen at this frequency.

4.  **Determine the Compensator Pole and Zero Locations:**
    *   Once $\omega_m$ and $\alpha$ are known, the pole and zero locations are determined:
        $$ \frac{1}{T} = \omega_m \sqrt{\alpha} $$
        $$ \frac{1}{\alpha T} = \omega_m / \sqrt{\alpha} $$

5.  **Verify the Design:**
    *   Construct the Bode plot of the compensated system $G_c(j\omega)G_p(j\omega)$.
    *   Check if the desired phase margin and gain crossover frequency are achieved.
    *   Evaluate the transient response (e.g., rise time, settling time, overshoot) using simulation or by estimating from the Bode plot. If specifications are not met, adjust $\phi_m$, $\omega_m$, and re-iterate the design.

**Textbook References:**

*   **Ogata:** Chapter 8.2: Lead Compensators (Design Procedure)
*   **Nise:** Chapter 8.2: Lead Compensator Design

**Course Outcome Alignment:**

*   **CO4 (K5):** This entire section is dedicated to the design process of a lead compensator.

### **4. Realisation of Lead Compensator (Circuit Implementation)**

**Key Concepts:**

*   **Passive Lead Compensator:** Typically implemented using an RC network. The transfer function of a passive lead network is of the form:
    $$G_c(s) = \frac{R_2 C s + 1}{R_1 C s + 1}$$
    To match this with the standard lead compensator form $K_c \frac{\alpha \tau s + 1}{\tau s + 1}$, we can set:
    *   $\tau = R_2 C$
    *   $\alpha = \frac{R_1}{R_2}$
    *   The gain $K_c$ would be 1 if the compensator is connected in series with a unity gain feedback. If not, additional gain might be needed from a separate amplifier stage.
    *   Since $\alpha < 1$, we must have $R_1 < R_2$.

*   **Active Lead Compensator:** Utilizes operational amplifiers (op-amps) to provide gain and buffer the compensator from the plant. This allows for independent adjustment of gain and the lead network characteristics. A common active lead compensator circuit is based on the non-inverting amplifier configuration.

    *   **Lag-Lead Compensator Circuit (a common implementation that can be adapted for lead only):** A simpler approach to realizing a lead compensator is using a simple passive RC network followed by an amplifier if needed.

    *   **Example of a passive RC lead compensator:**
        Consider a compensator with transfer function $G_c(s) = \frac{s+2}{s+10}$.
        Here, $\tau = 1/2$ and $\alpha = 2/10 = 0.2$.
        We need $\tau = R_2 C = 1/2$ and $\alpha = R_1/R_2 = 0.2$.
        Let $C = 1 \mu F$. Then $R_2 = \frac{1/2}{1 \times 10^{-6}} = 500 k\Omega$.
        Then $R_1 = 0.2 \times R_2 = 0.2 \times 500 k\Omega = 100 k\Omega$.
        The compensator would be implemented with these resistor and capacitor values.

**Textbook References:**

*   **Ogata:** Chapter 8.2: Lead Compensators (Physical Realization)
*   **Nise:** Chapter 8.2: Lead Compensator Design (Practical Considerations)
*   **Kuo:** Chapter 4: Compensation Techniques

**Course Outcome Alignment:**

*   **CO1 (K3):** Understanding the components and circuits used for realization.
*   **CO2 (K3):** Identifying parameters like R and C values which define performance.
*   **CO3 (K3):** Simulating the behavior of these circuits.

### **5. Simulation of Lead Compensator Design**

**Key Concepts:**

*   **Software Tools:** MATLAB/Simulink, Python (with libraries like SciPy, Control Systems Library) are commonly used for simulating control systems.
*   **Steps in Simulation:**
    1.  **Define the Plant Model:** Obtain the transfer function of the system to be controlled ($G_p(s)$). This might involve experimental identification (CO1).
    2.  **Design the Compensator:** Using design techniques (e.g., frequency domain as described above), determine the compensator's transfer function $G_c(s)$.
    3.  **Create the Closed-Loop System:** Connect the compensator and the plant in a closed-loop configuration in the simulation environment.
    4.  **Analyze Performance:**
        *   **Step Response:** Simulate the system's response to a unit step input and analyze parameters like rise time, peak overshoot, settling time, and steady-state error.
        *   **Frequency Response:** Analyze Bode plots, Nyquist plots, and Nichols charts to verify phase margin, gain margin, and bandwidth.
    5.  **Iterate:** If the performance specifications are not met, adjust the compensator parameters ($K_c, \alpha, T$) and re-simulate.

**Example (MATLAB/Simulink):**

Let's say your plant is $G_p(s) = \frac{10}{s(s+2)}$. You want to design a lead compensator to achieve a phase margin of 50 degrees.

1.  **Uncompensated System Analysis:**
    *   Bode plot of $G_p(j\omega)$: Find the gain crossover frequency and phase margin. Let's assume for illustration, the uncompensated phase margin is 10 degrees.
    *   Required phase lead $\phi_m \approx 50^\circ - 10^\circ + 10^\circ = 50^\circ$.

2.  **Compensator Design:**
    *   From $\sin(\phi_{max}) = \frac{1-\alpha}{1+\alpha}$, with $\phi_{max} = 50^\circ$, we get $\alpha \approx 0.156$.
    *   $\omega_m = \frac{1}{T\sqrt{\alpha}}$.
    *   Find the frequency $\omega_c$ where the phase of $G_p(j\omega)$ is approximately $PM_{uncompensated} - \phi_m = 10^\circ - 50^\circ = -40^\circ$. Let's assume this frequency is $\omega_c = 3$ rad/sec.
    *   Set $\omega_m = \omega_c = 3$ rad/sec.
    *   Calculate $T = \frac{1}{\omega_m \sqrt{\alpha}} = \frac{1}{3 \sqrt{0.156}} \approx \frac{1}{3 \times 0.395} \approx 0.845$.
    *   Compensator zero: $1/T = 1/0.845 \approx 1.18$.
    *   Compensator pole: $1/(\alpha T) = 1/(0.156 \times 0.845) \approx 7.63$.
    *   $G_c(s) = K_c \frac{s + 1.18}{s + 7.63}$.

3.  **Adjusting $K_c$:**
    *   At $\omega_m = 3$ rad/sec, $|G_p(j3)| = |\frac{10}{j3(j3+2)}| = |\frac{10}{-9+j6}| = \frac{10}{\sqrt{81+36}} \approx \frac{10}{\sqrt{117}} \approx \frac{10}{10.8} \approx 0.926$.
    *   For the compensated system gain crossover at $\omega_m=3$ to be 0 dB (magnitude 1), we need $|G_c(j3)| |G_p(j3)| = 1$.
    *   $K_c |\frac{j3+1.18}{j3+7.63}| \times 0.926 = 1$.
    *   $K_c |\frac{\sqrt{9+1.18^2}}{\sqrt{9+7.63^2}}| \times 0.926 = 1$.
    *   $K_c |\frac{\sqrt{9+1.39}}{\sqrt{9+58.2}}| \times 0.926 = 1$.
    *   $K_c |\frac{\sqrt{10.39}}{\sqrt{67.2}}| \times 0.926 = 1$.
    *   $K_c |\frac{3.22}{8.2}| \times 0.926 = 1$.
    *   $K_c \times 0.392 \times 0.926 = 1$.
    *   $K_c \times 0.363 \approx 1 \Rightarrow K_c \approx 2.75$.
    *   So, $G_c(s) = 2.75 \frac{s + 1.18}{s + 7.63}$.

4.  **Simulation in MATLAB:**
    *   Define $G_p(s)$ and $G_c(s)$ using `tf` command.
    *   Create the closed-loop system: `sys_cl = feedback(G_p*G_c, 1);`
    *   Plot step response: `step(sys_cl);`
    *   Plot Bode: `bode(sys_cl);`
    *   Check performance metrics using `stepinfo(sys_cl)` and `margin(G_p*G_c)`.

**Textbook References:**

*   **Ogata:** Chapter 8: Control System Design (Simulation Examples)
*   **Nise:** Chapter 8: Control System Design (Computer-Aided Design)
*   **Dorf & Bishop:** Chapter 6: Root Locus Design; Chapter 7: Frequency Response Design and Bode Diagrams (Simulation Applications)

**Course Outcome Alignment:**

*   **CO3 (K3):** Directly applies to analyzing systems using simulation tools.
*   **CO4 (K5):** Designing and verifying compensators using simulation is a core aspect.

### **6. Practical Considerations and Troubleshooting**

**Key Concepts:**

*   **Component Tolerances:** Real-world resistors and capacitors have tolerances, which can affect the actual performance of the implemented compensator.
*   **Parasitic Elements:** Inductances and capacitances of wires and components can become significant at higher frequencies.
*   **Op-Amp Limitations:** Finite bandwidth, slew rate, and input/output voltage range of op-amps can limit the effectiveness of active compensators.
*   **Loading Effects:** The compensator can load the plant, and vice-versa, especially if impedance matching is not considered. Buffering (using op-amps) can mitigate this.
*   **Gain Adjustment:** The $K_c$ term is crucial for meeting steady-state and transient requirements. It might need to be implemented with a separate amplifier.
*   **Tuning:** In practice, it's often necessary to fine-tune the compensator parameters after initial implementation based on observed system behavior.

**Troubleshooting:**

*   **Incorrect Phase Margin:** Double-check calculations for $\alpha$, $T$, and $\omega_m$. Ensure correct Bode plot interpretation.
*   **Unstable System:** May indicate insufficient phase margin or incorrect compensator design. Review the entire design process.
*   **Poor Transient Response:** Verify step response characteristics against specifications. Adjust compensator parameters if needed.
*   **DC Offset Issues:** If using active circuits, ensure proper biasing and that op-amp characteristics don't introduce significant DC errors.

**Textbook References:**

*   **Nise:** Chapter 8.7: Tuning of PID Controllers (Relevant to practical adjustment)
*   **Gopal (M.):** Chapter 5: Compensation Techniques (Practical Aspects)

**Course Outcome Alignment:**

*   **CO1 (K3):** Identifying issues related to component realization.
*   **CO2 (K3):** Understanding how practical issues affect performance specifications.

### **7. Practice Questions and Exercises**

**Question 1:**
A unity feedback system has a plant transfer function $G_p(s) = \frac{4}{s(s+1)}$. Design a lead compensator such that the phase margin is $50^\circ$ and the gain crossover frequency is $4$ rad/sec.

**Answer 1:**
1.  **Uncompensated System Analysis:**
    *   Bode plot of $G_p(j\omega) = \frac{4}{j\omega(j\omega+1)}$.
    *   Gain crossover frequency $\omega_{gc}$ is where $|G_p(j\omega_{gc})|=1$. $|\frac{4}{j\omega_{gc}(j\omega_{gc}+1)}| = \frac{4}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1$. Solving this, $\omega_{gc} \approx 1.8$ rad/sec.
    *   Phase at $\omega_{gc}=1.8$: $\angle G_p(j1.8) = -90^\circ - \arctan(\frac{1.8}{1}) = -90^\circ - 60.9^\circ = -150.9^\circ$.
    *   Uncompensated Phase Margin $PM_{uncomp} = 180^\circ + (-150.9^\circ) = 29.1^\circ$.

2.  **Compensator Design:**
    *   Desired $PM = 50^\circ$.
    *   Required phase lead $\phi_m = PM_{desired} - PM_{uncomp} + \text{margin} = 50^\circ - 29.1^\circ + 10^\circ = 30.9^\circ$.
    *   $\sin(\phi_{max}) = \frac{1-\alpha}{1+\alpha} \implies \sin(30.9^\circ) \approx 0.5136$.
    *   $0.5136 = \frac{1-\alpha}{1+\alpha} \implies 0.5136 + 0.5136\alpha = 1-\alpha \implies 1.5136\alpha = 0.4864 \implies \alpha \approx 0.321$.
    *   Desired gain crossover frequency $\omega_m = 4$ rad/sec.
    *   $\omega_m = \frac{1}{T\sqrt{\alpha}} \implies T = \frac{1}{\omega_m \sqrt{\alpha}} = \frac{1}{4 \sqrt{0.321}} \approx \frac{1}{4 \times 0.567} \approx 0.441$.
    *   Compensator zero: $1/T = 1/0.441 \approx 2.27$.
    *   Compensator pole: $1/(\alpha T) = 1/(0.321 \times 0.441) \approx 6.97$.
    *   $G_c(s) = K_c \frac{s + 2.27}{s + 6.97}$.

3.  **Determine $K_c$:**
    *   At $\omega_m = 4$ rad/sec, $|G_p(j4)| = |\frac{4}{j4(j4+1)}| = |\frac{4}{-16+j4}| = \frac{4}{\sqrt{16^2+4^2}} = \frac{4}{\sqrt{256+16}} = \frac{4}{\sqrt{272}} \approx \frac{4}{16.49} \approx 0.243$.
    *   We need $|G_c(j4)| |G_p(j4)| = 1$.
    *   $K_c |\frac{j4+2.27}{j4+6.97}| \times 0.243 = 1$.
    *   $K_c |\frac{\sqrt{4^2+2.27^2}}{\sqrt{4^2+6.97^2}}| \times 0.243 = 1$.
    *   $K_c |\frac{\sqrt{16+5.15}}{\sqrt{16+48.58}}| \times 0.243 = 1$.
    *   $K_c |\frac{\sqrt{21.15}}{\sqrt{64.58}}| \times 0.243 = 1$.
    *   $K_c |\frac{4.6}{\sqrt{64.58}}| \times 0.243 = 1$.
    *   $K_c \times \frac{4.6}{8.03} \times 0.243 = 1$.
    *   $K_c \times 0.573 \times 0.243 = 1$.
    *   $K_c \times 0.139 \approx 1 \implies K_c \approx 7.19$.
    *   Compensator transfer function: $G_c(s) = 7.19 \frac{s + 2.27}{s + 6.97}$.

**Question 2:**
Describe the typical circuit configuration for a passive lead compensator and explain how the component values determine the compensator's characteristics.

**Answer 2:**
A typical passive lead compensator circuit consists of a resistor $R_1$ in series with a capacitor $C$, and this series combination is in parallel with another resistor $R_2$. The input is applied across $R_1$ and $C$, and the output is taken across $R_2$. The transfer function of this circuit is:
$$G_c(s) = \frac{R_2 C s + 1}{R_1 C s + 1}$$
To match this with the standard form $K_c \frac{\alpha \tau s + 1}{\tau s + 1}$:
*   The ratio of the time constants determines $\alpha$: $\alpha = \frac{R_1}{R_2}$.
*   For a lead compensator, we need $\alpha < 1$, which implies $R_1 < R_2$.
*   The time constant $\tau$ is determined by the product of one of the resistors and the capacitor. Typically, we set $\tau = R_2 C$.
*   The gain $K_c$ of this passive network is 1. If additional gain is required, it must be provided by an amplifier.

By selecting appropriate values for $R_1$, $R_2$, and $C$, we can achieve the desired pole-zero configuration and thus the phase lead characteristics of the lead compensator. For example, if we need $\alpha=0.2$ and $\tau=0.5$ seconds, we can choose $C=1 \mu F$, then $R_2 = \tau/C = 0.5 / 10^{-6} = 500 k\Omega$, and $R_1 = \alpha R_2 = 0.2 \times 500 k\Omega = 100 k\Omega$.

**Important Points to Remember:**

*   Lead compensators improve **transient response** and **stability** by adding phase lead.
*   The **zero** is always located **closer to the imaginary axis** than the **pole** in the s-plane.
*   The design process often involves **iterative adjustments** based on Bode plot analysis and desired performance metrics.
*   **Simulation** is a crucial tool for verifying the design and analyzing the system's behavior.
*   **Passive RC circuits** are common for realization, but **active circuits** using op-amps can provide more flexibility and gain.
*   Be mindful of **practical limitations** such as component tolerances and parasitic effects.

This concludes Module 5 on the Realisation of Lead Compensators. The next modules will build upon these concepts to explore other compensation techniques and advanced control system design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
