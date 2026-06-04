---
title: "Design of Compensators:"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 2: Design of Compensators:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368cf"
status: "completed"
scrapedAt: "2026-05-23T16:36:10.222Z"
---
# Module 2: Design of Compensators in Discrete-Time Control Systems

This module focuses on the design of digital compensators to meet specific performance requirements for discrete-time control systems. We will explore various methods and techniques to shape the system's transient and steady-state response.

**Course Outcomes Addressed:**
*   **CO2:** Design digital compensators for linear systems. (Knowledge Level: K3)

**Learning Outcomes Covered:**
*   Understand the need for compensators in discrete-time systems.
*   Explore different types of digital compensators (lead, lag, lead-lag).
*   Learn methods for designing compensators in the z-domain.
*   Understand the impact of compensators on system performance (stability, transient response, steady-state error).
*   Relate compensator design to root locus and frequency response techniques.

---

## 2.1 Introduction to Compensator Design

### 2.1.1 Why Compensate?

In many practical discrete-time control systems, the uncompensated system's performance might be unsatisfactory. Common issues include:

*   **Slow transient response:** The system takes too long to settle to its desired state after a disturbance or change in reference.
*   **Excessive overshoot and oscillations:** The system's output overshoots the target value and oscillates before settling.
*   **Poor steady-state accuracy:** The system's output does not reach the desired steady-state value due to system imperfections or disturbances.
*   **Instability:** The system's response grows unbounded.

Compensators are designed to modify the system's dynamics to achieve the desired performance specifications.

### 2.1.2 Types of Digital Compensators

Digital compensators are typically implemented as digital filters or algorithms within a digital controller. Their transfer functions are rational functions of $z$, the unit delay operator.

*   **Lead Compensator:**
    *   **Purpose:** Improves transient response by increasing the system's speed and phase margin, thus enhancing stability. It has a zero-pole pair where the zero is closer to the origin than the pole.
    *   **Typical Transfer Function Form:**
        $$D(z) = K_c \frac{1 + \alpha z^{-1}}{1 + \beta z^{-1}} \text{ or } D(z) = K_c \frac{z + a}{z + b}$$
        where $a < b$ and $K_c > 0$.
    *   **Effect:** Introduces a phase lead in the frequency response, particularly beneficial at higher frequencies.

*   **Lag Compensator:**
    *   **Purpose:** Improves steady-state accuracy by increasing the system's DC gain without significantly affecting the transient response. It has a zero-pole pair where the pole is closer to the origin than the zero.
    *   **Typical Transfer Function Form:**
        $$D(z) = K_c \frac{1 + \alpha z^{-1}}{1 + \beta z^{-1}} \text{ or } D(z) = K_c \frac{z + a}{z + b}$$
        where $a > b$ and $K_c > 0$.
    *   **Effect:** Introduces a phase lag at higher frequencies, which can reduce bandwidth and slow down the transient response if not carefully designed. However, it significantly increases the low-frequency gain.

*   **Lead-Lag Compensator:**
    *   **Purpose:** Combines the benefits of both lead and lag compensators. It can improve both transient response and steady-state accuracy.
    *   **Typical Transfer Function Form:**
        $$D(z) = K_c \frac{(z + a)(z + c)}{(z + b)(z + d)}$$
        where the relative positions of $a, b, c, d$ determine whether it acts primarily as a lead or lag compensator, or a combination.
    *   **Effect:** Offers flexibility in shaping the system's frequency response.

**(Refer to Ogata, Chapter 8: Design of Digital Control Systems, for detailed discussions on compensator types and their general characteristics.)**

---

## 2.2 Compensator Design in the z-Domain

### 2.2.1 Design via Pole-Zero Placement (Root Locus Method)

The root locus method, traditionally used in continuous-time systems, can be adapted for discrete-time systems in the z-plane. The goal is to place the closed-loop poles in desired locations to achieve specific transient response characteristics (e.g., damping ratio, natural frequency).

**Steps:**

1.  **Define Performance Specifications:** Translate desired transient response (e.g., settling time, overshoot) into desired closed-loop pole locations in the z-plane.
    *   For a desired damping ratio $\zeta$ and undamped natural frequency $\omega_n$ in the *equivalent continuous-time system*, the desired pole location in the s-plane is $\sigma \pm j\omega_d$, where $\sigma = -\zeta \omega_n$ and $\omega_d = \omega_n \sqrt{1-\zeta^2}$.
    *   The corresponding desired pole location in the z-plane is $z = e^{sT} = e^{-\zeta \omega_n T} e^{j\omega_d T}$.
    *   This is equivalent to placing poles on a circle of radius $r = e^{-\zeta \omega_n T}$ and at an angle $\theta = \omega_d T$.

2.  **Identify Uncompensated System Poles and Zeros:** Determine the open-loop poles and zeros of the uncompensated system $G(z)D_{PID}(z)$ (where $D_{PID}$ is the basic PID controller, if used).

3.  **Choose Compensator Structure:** Select a compensator structure (lead, lag, etc.) that is likely to achieve the desired pole placement.

4.  **Add Compensator Poles and Zeros:**
    *   **Lead Compensator:** Adds a zero and a pole, with the zero closer to the origin. This typically moves the root locus away from the imaginary axis and towards the desired pole location. The additional phase lead is crucial.
    *   **Lag Compensator:** Adds a zero and a pole, with the pole closer to the origin. This increases the DC gain and can improve steady-state error. The phase lag introduced needs to be managed.

5.  **Determine Compensator Parameters:** Adjust the compensator's pole, zero, and gain to ensure the closed-loop poles lie at the desired locations.
    *   The magnitude condition: $|D(z)G(z)|_{z=z_p} = 1$ where $z_p$ is the desired closed-loop pole location.
    *   The angle condition: $\angle D(z)G(z)|_{z=z_p} = (2k+1)180^\circ$, where $k$ is an integer. The compensator is designed to satisfy this angle condition at the desired pole location, and the gain $K_c$ is then adjusted to satisfy the magnitude condition.

**(Refer to Philips and Nagle, Chapter 7: Design Techniques for Digital Control Systems, for detailed procedures on root locus design in the z-plane.)**

---

### 2.2.2 Design via Frequency Response Methods (Bode/Nyquist)

Frequency response methods are also widely used for compensator design in discrete-time systems. These methods analyze the system's behavior in response to sinusoidal inputs.

*   **Bode Plot Design:**
    *   **Goal:** Shape the magnitude and phase response of the open-loop system to meet performance specifications, such as phase margin and gain margin.
    *   **Procedure:**
        1.  **Evaluate Uncompensated System:** Obtain the Bode plot of the open-loop system $G(z)D_{PID}(z)$.
        2.  **Determine Requirements:** Translate performance specifications (e.g., desired phase margin, bandwidth) into Bode plot requirements.
        3.  **Design Compensator:**
            *   **Lead Compensator:** Introduces maximum phase lead at a specific frequency (geometrical mean of zero and pole frequencies). It is used to increase phase margin at a frequency where the uncompensated system has insufficient phase.
            *   **Lag Compensator:** Reduces the gain at higher frequencies while maintaining or increasing the gain at lower frequencies. This improves steady-state error without significantly degrading stability.
            *   **Lead-Lag Compensator:** Combines the effects of both.
        4.  **Adjust Gain:** The controller gain is adjusted to meet the gain crossover frequency requirement.

*   **Nyquist Plot Design:**
    *   **Goal:** Ensure stability and sufficient gain/phase margins by examining the open-loop frequency response in the Nyquist plane.
    *   **Procedure:** Similar to Bode plot design, but uses the Nyquist contour. Compensators are designed to "push" the Nyquist curve away from the critical point $(-1, 0)$ to achieve desired stability margins.

**(Refer to Ogata, Chapter 8, and Kuo, Chapter 7, for detailed explanations of frequency response design techniques using Bode and Nyquist plots for discrete-time systems.)**

---

## 2.3 Designing Specific Compensator Types

### 2.3.1 Digital Lead Compensator Design

*   **Purpose:** To increase the phase margin and speed up the response.
*   **Transfer Function Form:** $D(z) = K_c \frac{z + a}{z + b}$, where $0 < b < a < 1$ (for a typical implementation in the first quadrant). Or, in negative exponent form: $D(z) = K_c \frac{1 + az^{-1}}{1 + bz^{-1}}$, where $0 < b < a < 1$.
*   **Key Parameters:**
    *   $\alpha = a/b$: The ratio of zero to pole magnitudes. A larger $\alpha$ provides more phase lead.
    *   $1/\alpha T \approx \omega_{max}$: The frequency at which maximum phase lead occurs.
    *   $K_c$: The overall gain.

**Design Steps (Frequency Response Method):**

1.  **Evaluate the uncompensated system:** Obtain the frequency response $G(e^{j\omega T})$ of the plant $G(z)$.
2.  **Determine the crossover frequency:** From the desired transient response (e.g., settling time), estimate the required bandwidth or crossover frequency $\omega_{gc}$.
3.  **Calculate required phase lead:** At $\omega_{gc}$, determine the phase margin of the uncompensated system and calculate the required additional phase lead, $\phi_m$, from the compensator.
4.  **Determine $\alpha$ and $\omega_{max}$:** The maximum phase lead $\phi_{m,max}$ introduced by a lead compensator is given by:
    $$\sin \phi_{m,max} = \frac{\alpha - 1}{\alpha + 1}$$
    This equation is used to find $\alpha$. The frequency at which this maximum phase lead occurs is $\omega_{max} = \sqrt{ab}/T$. This $\omega_{max}$ should ideally be close to the desired crossover frequency $\omega_{gc}$.
5.  **Determine pole and zero locations:**
    *   $\omega_{max} = \sqrt{ab}/T \implies \omega_{max}^2 T^2 = ab$
    *   $\alpha = a/b$
    *   From these two equations, we can find $a$ and $b$.
6.  **Adjust the gain $K_c$:** After adding the compensator poles and zeros, the gain $K_c$ is adjusted so that the magnitude $|G(e^{j\omega_{gc}T})D(e^{j\omega_{gc}T})|$ is unity at the desired crossover frequency $\omega_{gc}$.

**Example (Conceptual):**
Suppose an uncompensated system $G(z)$ has a phase margin of $20^\circ$ at a crossover frequency of $0.5$ rad/sample. We desire a phase margin of $50^\circ$. The lead compensator needs to provide $30^\circ$ of additional phase lead at $0.5$ rad/sample. Using the formula, we can find $\alpha$ for $30^\circ$ phase lead. Then, we set $\omega_{max} = 0.5$ rad/sample and calculate $a$ and $b$. Finally, we adjust $K_c$.

**(Refer to Philips and Nagle, Section 7.3, for detailed examples of lead compensator design.)**

---

### 2.3.2 Digital Lag Compensator Design

*   **Purpose:** To improve steady-state accuracy.
*   **Transfer Function Form:** $D(z) = K_c \frac{z + a}{z + b}$, where $0 < a < b < 1$. Or, in negative exponent form: $D(z) = K_c \frac{1 + az^{-1}}{1 + bz^{-1}}$, where $0 < a < b < 1$.
*   **Key Parameters:**
    *   $a$ and $b$: Locations of the zero and pole. The zero is placed near the dominant closed-loop pole of the uncompensated system to minimize transient response degradation. The pole is placed at a lower frequency than the zero.
    *   $K_c$: The overall gain, adjusted to achieve the desired steady-state error coefficient.

**Design Steps (Frequency Response Method):**

1.  **Determine the steady-state error requirement:** This dictates the required DC gain of the open-loop system. For Type 1 systems, the steady-state error to a ramp input is $1/K_v$, where $K_v = \lim_{z \to 1} (z-1)G_{OL}(z)$. For Type 0 systems, the steady-state error to a step input is $1/(1+K_p)$, where $K_p = \lim_{z \to 1} G_{OL}(z)$.
2.  **Design the lag compensator to provide DC gain:**
    *   The lag compensator introduces a zero at $z = -a$ and a pole at $z = -b$. For a lag compensator, $a < b$.
    *   The low-frequency gain of the compensator is $K_c$. The additional DC gain needed is provided by $K_c$.
    *   The ratio $a/b$ should be chosen such that the lag compensator introduces minimal phase lag at the desired crossover frequency. A common choice is $a/b \approx 0.1$.
3.  **Place pole and zero:**
    *   The zero ($z=-a$) is placed close to $z=1$ (e.g., $a$ is close to 1).
    *   The pole ($z=-b$) is placed at a lower frequency than the zero (i.e., $b<a$).
    *   The pole must be located such that it does not cause instability.
4.  **Adjust the gain $K_c$:** The gain $K_c$ is adjusted to satisfy the steady-state error requirement. This typically involves increasing the gain at low frequencies. The lag compensator can be designed to provide the necessary DC gain boost.
5.  **Check phase margin:** After adding the lag compensator, the crossover frequency will likely shift. The phase margin at the *new* crossover frequency must be checked to ensure it meets specifications. If not, the ratio $a/b$ and the placement of the pole and zero might need adjustment.

**Example (Conceptual):**
Suppose we need to improve the steady-state error of a system. A lag compensator with a zero near $z=1$ and a pole further from $z=1$ can increase the low-frequency gain. The gain $K_c$ is chosen to meet the steady-state error requirement. The zero and pole are placed such that the phase lag introduced at the crossover frequency is minimal.

**(Refer to Ogata, Section 8.4, for detailed design procedures for lag compensators.)**

---

### 2.3.3 Digital Lead-Lag Compensator Design

*   **Purpose:** To improve both transient response and steady-state accuracy.
*   **Transfer Function Form:** $D(z) = K_c \frac{z + a}{z + b} \frac{z + c}{z + d}$

**Design Approach:**

*   The design can be performed sequentially. First, design a lag compensator to improve steady-state error. Then, design a lead compensator to improve transient response, or vice versa.
*   Alternatively, design the lag section to provide the required DC gain and then design the lead section to shape the frequency response for transient improvement.
*   A common strategy is to place the lag zero and pole to provide the DC gain boost, and the lead zero and pole to provide phase lead at the desired crossover frequency. The poles and zeros are typically placed to minimize their impact on the transient response while achieving the desired steady-state and stability margins.

**(Refer to Gopal, Chapter 4: Design of Digital Control Systems, for alternative perspectives and design methodologies for lead-lag compensators.)**

---

## 2.4 Digital PID Controller Tuning

While not strictly a "compensator" in the sense of a separate block with specific pole-zero configurations, the tuning of a PID controller in discrete-time is a crucial design aspect that achieves similar performance objectives.

*   **Discrete-time PID Transfer Function:**
    $$D(z) = K_p + K_i \frac{T}{z-1} + K_d \frac{z-1}{Tz}$$
    This can be rewritten in various forms, such as the velocity form or position form, and implemented using difference equations.

*   **Tuning Methods:**
    *   **Ziegler-Nichols Methods (Discrete-time adaptation):** These methods are heuristic but provide a starting point for tuning. They involve finding the ultimate gain and ultimate period of the system.
    *   **Root Locus and Frequency Response Methods:** Similar to compensator design, these methods can be used to tune the $K_p, K_i, K_d$ gains to place closed-loop poles or achieve desired frequency response characteristics (phase margin, gain margin).
    *   **Pole Placement:** Directly determining $K_p, K_i, K_d$ to place closed-loop poles at desired locations.

**(Refer to Franklin, Powell, and Workman, Chapter 9: Controllers, for a comprehensive treatment of discrete-time PID controllers, including implementation and tuning.)**

---

## 2.5 Impact of Compensators on System Performance

| Compensator Type | Primary Goal(s)                                   | Effect on Transient Response                                                                      | Effect on Steady-State Error                                                        | Effect on Stability                                                                |
| :--------------- | :------------------------------------------------ | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Lead**         | Improve transient speed, phase margin             | Speeds up response, reduces overshoot, increases damping. Can reduce settling time.             | May slightly worsen steady-state error due to reduced DC gain (if not compensated). | Increases phase margin, enhancing stability.                                       |
| **Lag**          | Improve steady-state accuracy                     | Can slow down response if bandwidth is reduced. Minimal impact on transient if pole/zero are close. | Significantly improves steady-state error by increasing DC gain.                  | Can reduce phase margin if not carefully designed, potentially reducing stability. |
| **Lead-Lag**     | Improve transient & steady-state accuracy, stability | Combines benefits of lead and lag for improved transient response.                                | Improves steady-state error.                                                        | Offers flexibility to maintain or improve stability margins.                       |

**Important to Remember:**

*   **Sampling Time (T):** The sampling time is critical in discrete-time design. It affects the mapping from the s-plane to the z-plane and the interpretation of frequency response.
*   **$z$-Plane Pole Locations:** Closed-loop poles must lie *inside* the unit circle for stability.
*   **Phase Margin:** A key indicator of relative stability. Higher phase margin generally implies a more robust and well-damped system.
*   **Gain Margin:** Another measure of stability.
*   **Steady-State Error Coefficients:** $K_p$ (position), $K_v$ (velocity), $K_a$ (acceleration) quantify steady-state performance for step, ramp, and parabolic inputs, respectively.
*   **Trade-offs:** Compensator design often involves trade-offs between transient response, steady-state error, and bandwidth.

**(Refer to Isermann, Volume I, Chapter 5: Design of Digital Control Systems, for a thorough overview of performance criteria and how compensators affect them.)**

---

## 2.6 Practice Questions and Exercises

**Q1:** A digital control system has an open-loop transfer function $G(z) = \frac{0.5z + 0.2}{z^2 - 0.8z + 0.15}$ and a sampling period $T = 0.1$ s. We want to add a digital lead compensator of the form $D(z) = K_c \frac{z + a}{z + b}$ to improve the phase margin.

a)  Sketch the root locus of the uncompensated system.
b)  If the desired dominant closed-loop poles are to be located at $z = 0.4 e^{\pm j0.4\pi}$, determine the required phase lead from the compensator at this location.
c)  Design a lead compensator by choosing appropriate values for $a$, $b$, and $K_c$ to place the dominant closed-loop poles at the desired locations.
    *(Hint: You will need to use the angle and magnitude conditions in the z-plane.)*

**Answer Outline:**
a) Identify poles at $z=0.5$ and $z=0.3$. Zeros at $z=-0.4$. Sketch the locus.
b) Calculate the angle of $G(z)$ at the desired pole location. The total angle from the compensator must be $180^\circ$.
c) Determine $a$ and $b$ by satisfying the angle condition for the compensator. Then, use the magnitude condition to find $K_c$.

---

**Q2:** Consider a discrete-time system with open-loop transfer function $G(z) = \frac{1}{z-0.5}$. The sampling period is $T=0.5$ s. We want to add a digital lag compensator $D(z) = K_c \frac{z + a}{z + b}$ ($a<b$) to improve the steady-state error for a step input.

a)  What is the steady-state error of the uncompensated system for a unit step input?
b)  Design a lag compensator to reduce the steady-state error to less than 5% of the step amplitude.
c)  Choose the compensator parameters ($a$, $b$, $K_c$) such that the zero is at $z = 0.9$ and the pole is at $z = 0.95$. Verify if the phase margin is still acceptable (assume the crossover frequency remains roughly the same).

**Answer Outline:**
a) Calculate $K_p = \lim_{z \to 1} G(z) = \frac{1}{1-0.5} = 2$. Steady-state error is $1/(1+K_p) = 1/3$.
b) To reduce error to 5%, we need $K_p' \ge 19$. The lag compensator adds a gain of $K_c$. The zero at $z=-a$ and pole at $z=-b$ should have $a<b$. The low-frequency gain is $K_c$.
c) With $z=-0.9$ and $z=-0.95$, the transfer function is $D(z) = K_c \frac{z+0.9}{z+0.95}$. The low-frequency gain is $K_c$. To achieve $K_p' = 19$, we need $K_c \times \lim_{z \to 1} G(z) \ge 19$. So, $K_c \times 2 \ge 19 \implies K_c \ge 9.5$. Let's choose $K_c=10$. Check the phase margin at the crossover frequency of the uncompensated system.

---

**Q3:** Explain the fundamental difference in the pole-zero configurations of lead and lag compensators in the z-plane and how these configurations affect the system's frequency response.

**Answer Outline:**
*   **Lead:** Zero closer to the origin ($|a|<|b|$ in $D(z) = K_c \frac{z+a}{z+b}$) or ($a<b$ in $D(z) = K_c \frac{1+az^{-1}}{1+bz^{-1}}$). Introduces phase lead, useful for improving stability margins. Magnitude response increases at higher frequencies.
*   **Lag:** Pole closer to the origin ($|b|<|a|$ in $D(z) = K_c \frac{z+a}{z+b}$) or ($b<a$ in $D(z) = K_c \frac{1+az^{-1}}{1+bz^{-1}}$). Introduces phase lag, useful for improving steady-state error by increasing DC gain. Magnitude response decreases at higher frequencies.

---

## 2.7 Summary and Key Takeaways

*   Compensators are essential for improving the performance of discrete-time control systems by addressing issues like slow response, oscillations, and poor steady-state accuracy.
*   Digital compensators are designed as digital filters with transfer functions in the z-domain.
*   Lead compensators improve transient response and stability by introducing phase lead.
*   Lag compensators improve steady-state accuracy by increasing the DC gain.
*   Lead-lag compensators combine the benefits of both.
*   Design methods include pole-zero placement (root locus) and frequency response techniques (Bode/Nyquist plots).
*   The sampling period $T$ plays a crucial role in discrete-time compensator design.
*   Tuning PID controllers in discrete-time is a practical way to achieve desired system performance.

---
This module provides a foundation for understanding how to shape the behavior of discrete-time control systems by strategically adding digital compensators. Mastering these design techniques is crucial for achieving robust and high-performing control solutions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
