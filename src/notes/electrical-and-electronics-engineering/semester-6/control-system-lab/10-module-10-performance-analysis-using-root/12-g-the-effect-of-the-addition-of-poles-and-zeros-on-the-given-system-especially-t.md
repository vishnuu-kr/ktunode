---
title: "g. The effect of the addition of poles and zeros on the given system (especially the poles at origin)."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36783"
status: "completed"
scrapedAt: "2026-05-23T16:25:31.573Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: g. The Effect of the Addition of Poles and Zeros on the Given System (Especially the Poles at Origin)

---

### 1. Introduction

This section delves into how the placement of poles and zeros in a control system's transfer function impacts its overall performance. Understanding these effects is crucial for designing stable and well-performing systems. We will focus on the fundamental concepts of poles and zeros, their influence on transient and steady-state responses, and specifically the implications of adding poles and zeros, with a particular emphasis on poles located at the origin. This aligns with **CO1 (K3)** by identifying how system parameters (poles/zeros) affect modeling and **CO3 (K3)** by analyzing system behavior through simulation tools (which is often how these effects are visualized).

---

### 2. Key Concepts and Definitions

*   **Transfer Function:** A mathematical representation of the relationship between the output and input of a linear time-invariant (LTI) system in the Laplace domain. It is typically expressed as a ratio of polynomials in 's', $G(s) = \frac{Y(s)}{U(s)}$.

*   **Poles:** The roots of the denominator polynomial of the transfer function. They are the values of 's' for which the transfer function becomes infinite. Poles determine the system's natural response characteristics, including stability and the type of transient response (e.g., oscillatory, overdamped).
    *   **Location:** Poles in the left-half of the s-plane ($Re(s) < 0$) result in a stable system. Poles in the right-half of the s-plane ($Re(s) > 0$) result in an unstable system. Poles on the imaginary axis ($Re(s) = 0$) lead to marginal stability (oscillatory response).
    *   **From Textbooks:** Ogata (5th Ed., Chapter 6) extensively discusses poles and zeros in relation to system stability and transient response. Nise (5th Ed., Chapter 4) also provides a thorough treatment of pole-zero locations and their impact on system behavior.

*   **Zeros:** The roots of the numerator polynomial of the transfer function. They are the values of 's' for which the transfer function becomes zero. Zeros influence the transient response by affecting the magnitude of the response and can cause zeros in the frequency response.
    *   **Location:** Zeros in the left-half plane generally do not cause instability, but they can affect the transient response by causing overshoot or undershoot. Zeros in the right-half plane can lead to inverse responses (initial response opposite to the final steady-state response) and can degrade stability.
    *   **From Textbooks:** Nagrath & Gopal (5th Ed., Chapter 4) emphasize the role of zeros in shaping the transient response, particularly in relation to overshoot.

*   **Root Locus:** A plot that shows the trajectories of the closed-loop poles as a system parameter (typically the gain 'K') varies from zero to infinity. It is a powerful graphical tool for analyzing the effect of parameter variations on system stability and transient response.
    *   **From Textbooks:** All primary textbooks (Ogata, Nise, Nagrath & Gopal) have dedicated chapters to Root Locus analysis. This topic is central to Module 10.

---

### 3. Effect of Adding Poles

Adding poles to a system's open-loop transfer function can significantly alter its closed-loop behavior.

#### 3.1. General Effects of Adding Poles

*   **Stability:** Adding poles generally tends to make the system less stable. If the open-loop poles are in the left-half plane, adding more poles in the left-half plane will likely move the closed-loop poles towards the right-half plane, potentially leading to instability.
*   **Transient Response:**
    *   **Damping:** Adding poles often reduces the damping ratio, leading to increased overshoot and longer settling times.
    *   **Speed of Response:** Adding poles can slow down the system's response.
    *   **Oscillations:** Systems with added poles are more likely to exhibit oscillatory behavior.
*   **Steady-State Error:** Adding poles in the open-loop transfer function (especially at the origin) can improve the steady-state accuracy of the system.
    *   **From Textbooks:** Ogata (5th Ed., Chapter 7) discusses the impact of pole addition on steady-state error and system type. Nise (5th Ed., Chapter 6) explains how pole-zero cancellations or additions affect performance.

#### 3.2. Special Case: Adding Poles at the Origin

The addition of poles at the origin ($s=0$) is a common technique used to improve the steady-state error of a system.

*   **Impact on Steady-State Error:**
    *   A system with an integrator (a pole at the origin) is a Type 1 system. Type 1 systems have zero steady-state error for a step input.
    *   A system with two integrators (poles at the origin) is a Type 2 system. Type 2 systems have zero steady-state error for both step and ramp inputs.
    *   Adding poles at the origin increases the system type and therefore reduces the steady-state error for certain types of inputs.
    *   **From Textbooks:** Nagrath & Gopal (5th Ed., Chapter 9) provides a detailed explanation of system types and their corresponding steady-state errors for various input signals, highlighting the benefit of poles at the origin.

*   **Impact on Transient Response and Stability:**
    *   **Degradation of Transient Response:** While improving steady-state error, adding poles at the origin generally degrades the transient response. It can lead to increased overshoot, longer settling times, and more oscillations.
    *   **Potential Instability:** The addition of poles at the origin can shift the root locus branches into the right-half plane, leading to instability. This is a critical trade-off to consider.
    *   **From Textbooks:** Ogata (5th Ed., Chapter 6 and 7) demonstrates examples where adding an integrator improves steady-state error but can cause instability or poor transient response, necessitating compensation. Nise (5th Ed., Chapter 6) discusses the concept of the "cost of adding poles" in terms of transient performance.

**Example Scenario:**

Consider a system with open-loop transfer function $G(s) = \frac{1}{s+1}$.
Adding a pole at the origin: $G_{new}(s) = \frac{1}{s(s+1)}$.

*   **Original System:**
    *   Steady-state error for a step input: $\frac{1}{1+K}$ (for unity feedback, if K is the gain). For large K, error is small.
    *   Transient response: Relatively fast, no steady-state error for step input (if unity feedback with DC gain $\neq 0$).

*   **System with Pole at Origin:**
    *   Steady-state error for a step input: 0 (system is now Type 1).
    *   Transient response: Likely to have increased overshoot and settling time due to the added pole. The root locus will be influenced by the pole at $s=0$.

**Visualizing with Root Locus (Conceptual):**

If we were to plot the root locus of a system with an added pole at the origin, we would observe how the closed-loop poles move as the gain 'K' increases. The presence of the pole at $s=0$ will attract root locus branches, potentially leading them into the RHP.

---

### 4. Effect of Adding Zeros

Adding zeros to a system's open-loop transfer function also has significant implications for its performance.

#### 4.1. General Effects of Adding Zeros

*   **Stability:** Adding zeros generally tends to improve stability by pulling the root locus branches away from the imaginary axis and towards the zeros.
*   **Transient Response:**
    *   **Overshoot:** Adding zeros can reduce overshoot. If a zero is placed close to a dominant closed-loop pole, it can effectively cancel out the pole's contribution to overshoot.
    *   **Settling Time:** Zeros can also help reduce the settling time.
    *   **Speed of Response:** The effect on the speed of response is more complex and depends on the zero's location relative to the poles.
    *   **From Textbooks:** Nise (5th Ed., Chapter 4) extensively details how zeros influence overshoot and settling time. Ogata (5th Ed., Chapter 6) shows how zero placement can shape the transient response.

#### 4.2. Specific Effects of Adding Zeros

*   **Pulling Root Locus Branches:** Zeros attract the root locus branches. By strategically placing zeros, we can shape the root locus to achieve desired closed-loop pole locations.
*   **Cancellation of Pole Effects:** A zero can sometimes "cancel out" the effect of a nearby pole, especially in the closed-loop system. If a zero is very close to a pole, their effects can be significantly reduced.
*   **Inverse Response (Right-Half Plane Zeros):** If a zero is added in the right-half of the s-plane, it can cause an "inverse response" or "overshoot reversal," where the initial direction of the output is opposite to the final direction. This often leads to poor performance and can destabilize the system.
    *   **From Textbooks:** Ogata (5th Ed., Chapter 6) provides examples of systems with RHP zeros and their adverse effects on transient response.

**Example Scenario:**

Consider a system with open-loop transfer function $G(s) = \frac{1}{s^2+2s+2}$ (poles at $-1 \pm j$).
Adding a zero at $s=-3$: $G_{new}(s) = \frac{s+3}{s^2+2s+2}$.

*   **Original System:** The closed-loop poles are determined by $1+G(s) = 0$. These poles are in the LHP, leading to a stable, damped oscillatory response.
*   **System with Zero at $s=-3$:**
    *   The zero at $s=-3$ will tend to pull the root locus branches towards it. This can potentially move the closed-loop poles to a more stable region or modify the damping and natural frequency.
    *   The addition of a zero can reduce overshoot compared to the original system, especially if it's placed strategically.

---

### 5. Trade-offs and Design Considerations

The addition of poles and zeros is a powerful design tool, but it involves critical trade-offs:

*   **Steady-State Error vs. Transient Performance:** Adding poles (especially at the origin) improves steady-state accuracy but often degrades transient response (increased overshoot, settling time).
*   **Stability vs. Performance:** While zeros often improve stability and transient response, adding too many poles can lead to instability.
*   **System Complexity:** Adding poles and zeros can increase the order of the system, making it more complex to analyze and control.

**From Textbooks:** Nise (5th Ed., Chapter 6) and Ogata (5th Ed., Chapter 7) dedicate sections to controller design (like lead and lag compensators), which inherently involve adding poles and zeros to the open-loop system to meet performance specifications. This highlights the practical application of understanding these effects.

---

### 6. Learning Outcome Alignment

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (Knowledge Level: K3)**
    *   Understanding the effect of poles and zeros helps identify which parameters in a physical system (e.g., mass, damping, stiffness, integrator gains) correspond to poles and zeros and how their changes will affect the system's behavior. Experiments can be designed to introduce these elements.

*   **CO2: Conduct suitable experiments and determine the performance specifications. (Knowledge Level: K3)**
    *   By observing the system's response (e.g., overshoot, settling time, steady-state error) during experiments, we can directly relate these specifications to the presence and location of poles and zeros.

*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)**
    *   Simulation tools (like MATLAB/Simulink) are essential for visualizing the impact of adding poles and zeros on the root locus, step response, and frequency response. This module directly supports this outcome by providing the theoretical basis for interpreting simulation results.

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)**
    *   The knowledge of how poles and zeros affect performance is fundamental to designing controllers (e.g., PID, lead, lag compensators) that add poles and zeros to the open-loop system to achieve desired stability and transient response characteristics. For example, a lag compensator adds a pole and a zero, typically with the pole closer to the origin, to improve steady-state error while minimally affecting transient response. A lead compensator adds a pole and a zero, with the zero further from the origin, to improve transient response and stability.

---

### 7. Practice Questions and Answers

**Question 1:**
A unity feedback system has an open-loop transfer function $G(s) = \frac{K}{s(s+2)}$.
(a) What type of system is this?
(b) What is its steady-state error for a unit step input?
(c) If we add another pole at the origin, what happens to the system type and steady-state error for a unit step input?
(d) What is the likely impact on the transient response (overshoot and settling time) when a pole is added at the origin?

**Answer 1:**
(a) This is a Type 1 system due to the pole at $s=0$.
(b) For a Type 1 system with a step input, the steady-state error is 0.
(c) Adding another pole at the origin makes it a Type 2 system. The steady-state error for a unit step input remains 0.
(d) Adding a pole at the origin generally degrades the transient response. It will likely lead to increased overshoot and a longer settling time. The system becomes more oscillatory.

**Question 2:**
A system has an open-loop transfer function $G(s) = \frac{K}{s+1}$. If we want to reduce the system's steady-state error for a ramp input, what should we do? If this modification leads to undesirable transient behavior, what type of component might we add to improve the transient response?

**Answer 2:**
To reduce the steady-state error for a ramp input, we need to increase the system type. Adding a pole at the origin to $G(s)$ would achieve this, making it $G_{new}(s) = \frac{K}{s(s+1)}$. This makes the system Type 2, resulting in zero steady-state error for a ramp input.

If this modification (adding a pole at the origin) leads to undesirable transient behavior (e.g., increased overshoot, longer settling time), we could add a **lead compensator**. A lead compensator adds a zero and a pole to the open-loop system, with the zero generally located closer to the origin than the pole. This combination typically improves stability and transient response (reduces overshoot, increases bandwidth).

**Question 3:**
True or False: Adding a zero in the right-half of the s-plane generally improves the transient response of a system.

**Answer 3:**
False. Adding a zero in the right-half of the s-plane can lead to an inverse response, where the initial output is in the opposite direction of the final steady-state output, and it can degrade stability and transient performance.

**Question 4:**
Consider the effect of adding a zero at $s = -p_0$ to a system with an open-loop pole at $s = -p_1$, where $p_0 > p_1 > 0$. How would this generally affect the transient response?

**Answer 4:**
Adding a zero at $s = -p_0$ where $p_0 > p_1$ (meaning the zero is further left than the pole) will tend to pull the root locus branches towards the zero. This generally results in:
*   Reduced overshoot.
*   A faster response (potentially shorter settling time, though the exact effect depends on the overall system dynamics).
*   An improvement in the damping ratio of the dominant closed-loop poles.

---

### 8. Important Points to Remember

*   **Poles dictate stability and transient response characteristics.**
*   **Zeros influence the transient response, particularly overshoot and zero-input response.**
*   **Adding poles generally makes a system less stable and can increase overshoot and settling time.**
*   **Adding zeros generally improves stability and can reduce overshoot and settling time.**
*   **Poles at the origin (integrators) are crucial for improving steady-state accuracy, but they often come at the cost of degraded transient performance and potential instability.**
*   **Zeros in the right-half plane are generally undesirable and can lead to inverse response and instability.**
*   **The relative locations of poles and zeros are critical in determining the overall system behavior.**
*   **Root locus plots are essential tools for visualizing the impact of adding poles and zeros as a parameter (like gain) varies.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. Further Reading and Resources

*   **Ogata, K. (5th ed., 2009).** Chapters 6 and 7 on transient and steady-state error analysis, and controller design.
*   **Nise, N. S. (5th ed., 2009).** Chapters 4 and 6 on time response and the root locus, respectively.
*   **Nagrath, I. J., & Gopal, M. (5th ed., 2009).** Chapters 4 and 9 on time domain specifications and steady-state error analysis.
*   **MATLAB/Simulink:** Use `rlocus` command and simulate step responses to observe the effects of adding poles and zeros in your own systems.

---