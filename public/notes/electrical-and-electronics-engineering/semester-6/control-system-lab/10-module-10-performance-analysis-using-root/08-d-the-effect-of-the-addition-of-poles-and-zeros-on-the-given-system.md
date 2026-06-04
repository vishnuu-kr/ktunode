---
title: "d. The effect of the addition of poles and zeros on the given system."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677f"
status: "completed"
scrapedAt: "2026-05-23T16:25:28.607Z"
---
## Control System Lab: Module 10 - Performance Analysis using Root Locus

### Topic: d. The Effect of the Addition of Poles and Zeros on the Given System

---

### **1. Introduction**

This topic explores how introducing new poles and zeros into a control system's open-loop transfer function (G(s)H(s)) influences its closed-loop behavior, particularly as visualized by the **root locus**. Understanding these effects is crucial for system analysis and controller design, allowing us to shape the transient and steady-state responses to meet performance specifications.

---

### **2. Key Concepts and Definitions**

*   **Open-Loop Transfer Function (G(s)H(s))**: The product of the transfer functions of the forward path and the feedback path in a closed-loop system.
*   **Closed-Loop Transfer Function (T(s))**: The ratio of the output to the input of a closed-loop system, typically given by $T(s) = \frac{G(s)}{1+G(s)H(s)}$.
*   **Poles**: The roots of the denominator of the open-loop transfer function, $1+G(s)H(s) = 0$. These are the poles of the closed-loop system.
*   **Zeros**: The roots of the numerator of the open-loop transfer function, $G(s)H(s)$.
*   **Root Locus**: A plot showing the movement of the closed-loop poles as a system parameter (usually the gain, K) is varied from 0 to infinity.
*   **Dominant Closed-Loop Poles**: The closed-loop poles that have the most significant impact on the transient response. These are typically the poles closest to the imaginary axis.
*   **Transient Response**: The behavior of a system as it transitions from an initial state to a steady state. Key metrics include rise time, settling time, and overshoot.
*   **Steady-State Response**: The behavior of a system after the transient response has died out.

---

### **3. The Fundamental Relationship: Root Locus**

The **root locus** is the primary tool for understanding the effect of system parameters and added poles/zeros. The fundamental equation governing the root locus is:

$1 + G(s)H(s) = 0$

When we add a pole or a zero, we are essentially modifying $G(s)H(s)$. Let's consider a base system with $G_0(s)H_0(s)$.

*   **Adding a Pole**: If we add a pole at $-p_{new}$, the new open-loop transfer function becomes $G_{new}(s)H_{new}(s) = \frac{G_0(s)H_0(s)}{s+p_{new}}$. The root locus equation changes to $1 + \frac{G_0(s)H_0(s)}{s+p_{new}} = 0$, which is $(s+p_{new}) + G_0(s)H_0(s) = 0$.
*   **Adding a Zero**: If we add a zero at $-z_{new}$, the new open-loop transfer function becomes $G_{new}(s)H_{new}(s) = G_0(s)H_0(s)(s+z_{new})$. The root locus equation changes to $1 + G_0(s)H_0(s)(s+z_{new}) = 0$.

These modifications change the location of the closed-loop poles for a given gain $K$, thus altering the system's performance.

---

### **4. Effect of Adding Poles**

**Key Concept**: Adding a pole to the open-loop transfer function generally tends to **destabilize** the system and **degrade** its transient response.

*   **Movement of Root Locus**:
    *   New asymptotes are introduced, pointing towards infinity, with angles $\frac{(2k+1)180^\circ}{n-m+1}$, where $n$ is the total number of poles (including the new one) and $m$ is the total number of zeros (including the new one).
    *   The "center of asymptotes" shifts.
    *   **Crucially, the root locus branches generally move towards the newly added pole.**

*   **Impact on Performance**:
    *   **Increased Settling Time ($T_s$)**: As poles move further to the left (more negative real part), the system becomes more stable. However, adding a pole typically shifts dominant poles closer to the imaginary axis or into the right-half plane, increasing the settling time (unless the new pole is significantly far to the left).
    *   **Increased Rise Time ($T_r$)**: Similar to settling time, poles closer to the imaginary axis lead to slower responses, thus increasing the rise time.
    *   **Increased Overshoot (%OS)**: Adding a pole can move the dominant closed-loop poles closer to the $j\omega$ axis or cause them to move into the right-half plane, leading to more oscillatory behavior and higher overshoot.
    *   **Reduced Stability Margin**: The addition of poles can reduce the phase margin and gain margin, making the system less robust to parameter variations and potentially unstable.

*   **Example**:
    Consider a system with $G(s)H(s) = \frac{K}{s(s+2)}$. Its root locus starts at $s=0$ and $s=-2$.
    Now, add a pole at $s=-4$, so $G_{new}(s)H_{new}(s) = \frac{K}{s(s+2)(s+4)}$.
    The original dominant poles were on the real axis or approaching the complex plane. Adding a pole at $s=-4$ will pull the root locus branches towards $s=-4$. This might move the dominant poles further left initially, potentially improving stability for some gain values. However, as the gain $K$ increases, the branches will approach the asymptotes, and the presence of the new pole generally leads to more complex behavior and potentially degraded transient response compared to a simpler system. (A more detailed analysis requires sketching the root locus).

*   **Reference**: Ogata (5th ed., Section 7.8 - Effects of Pole and Zero Locations on the Root Locus) elaborates on how the movement of loci is influenced by the number and locations of poles and zeros.

---

### **5. Effect of Adding Zeros**

**Key Concept**: Adding a zero to the open-loop transfer function generally tends to **improve** the transient response and **increase** the stability of the system.

*   **Movement of Root Locus**:
    *   The number of asymptotes might change, and the angles are calculated based on the new pole-zero configuration.
    *   **Crucially, the root locus branches are attracted towards the newly added zero.**
    *   Adding a zero can "bend" the root locus away from the real axis and towards the complex plane, or move it further into the left-half plane.

*   **Impact on Performance**:
    *   **Decreased Settling Time ($T_s$)**: By attracting the dominant poles further to the left, adding a zero can speed up the system's response, reducing the settling time.
    *   **Decreased Rise Time ($T_r$)**: Similarly, the faster response leads to a reduced rise time.
    *   **Decreased Overshoot (%OS)**: Moving the dominant poles away from the imaginary axis (more negative real part) generally reduces oscillations and thus the overshoot.
    *   **Increased Stability Margin**: Adding zeros can improve the phase margin and gain margin, making the system more stable and robust.

*   **Example**:
    Consider a system with $G(s)H(s) = \frac{K}{s(s+2)}$.
    Now, add a zero at $s=-5$, so $G_{new}(s)H_{new}(s) = \frac{K(s+5)}{s(s+2)}$.
    The original root locus branches would eventually enter the complex plane. Adding the zero at $s=-5$ will attract the root locus branches towards it. This can cause the dominant poles to remain on the real axis for larger $K$ values or move into the complex plane with a more favorable damping ratio, leading to a faster, less oscillatory response.

*   **Reference**: Nise (5th ed., Chapter 6 - Root Locus Techniques) provides detailed rules for sketching root loci, including the effect of adding poles and zeros. The rule about loci terminating on zeros is particularly relevant here.

---

### **6. Combined Effects and Design Considerations**

*   **Adding a pole and a zero simultaneously**: The effect depends on the relative locations.
    *   If the added pole is far to the left of the added zero, it acts like adding a distant pole, potentially improving stability.
    *   If the added zero is far to the left of the added pole, it acts like adding a distant zero, generally improving transient response.
    *   The interaction is complex and best visualized through root locus sketching.

*   **Controller Design**: The principles of adding poles and zeros are fundamental to **compensator design**.
    *   **Lead Compensator**: Introduces a zero and a pole, with the zero being closer to the origin than the pole. This is typically used to increase the system's bandwidth, speed up the response, and improve stability (by effectively adding a zero to the open-loop transfer function). This is directly related to the beneficial effects of adding a zero.
    *   **Lag Compensator**: Introduces a pole and a zero, with the pole being closer to the origin than the zero. This is used to improve steady-state error without significantly affecting the transient response (though it can slightly slow it down).
    *   **Lag-Lead Compensator**: Combines the characteristics of both lag and lead compensators.

*   **Reference**: Nagrath & Gopal (5th ed., Chapters 10 & 11) thoroughly cover compensator design using root locus, explaining how adding poles and zeros via compensators shape the closed-loop poles to achieve desired performance.

---

### **7. Impact on Performance Specifications**

| Feature Affected        | Adding a Pole (generally)                                      | Adding a Zero (generally)                                     |
| :---------------------- | :------------------------------------------------------------- | :------------------------------------------------------------ |
| **Transient Response**  | Degraded (slower, more overshoot)                              | Improved (faster, less overshoot)                             |
| **Settling Time ($T_s$)** | Increases (moves poles closer to $j\omega$ or RHP)           | Decreases (moves poles further left)                          |
| **Rise Time ($T_r$)**    | Increases                                                      | Decreases                                                     |
| **Overshoot (%OS)**     | Increases                                                      | Decreases                                                     |
| **Stability Margin**    | Decreases (less robust)                                        | Increases (more robust)                                       |
| **System Bandwidth**    | Tends to decrease                                              | Tends to increase                                             |
| **Steady-State Error**  | Can be affected, especially if it introduces an integrator or pole at the origin. | Can be affected, especially if it cancels an integrator or shifts pole locations. |

---

### **8. Learning Outcomes Alignment**

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   While this topic focuses on analysis, understanding how poles/zeros affect system behavior informs the choice of models and the interpretation of experimental data. For example, observing sluggishness might suggest the need to model an additional pole or a zero placement that can be addressed by a controller.
*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   Experiments can reveal the transient response characteristics (overshoot, settling time). This topic explains *why* these specifications change when system parameters (effectively poles and zeros) are altered. For instance, experimental results showing high overshoot can be directly linked to the location of dominant closed-loop poles, which are influenced by the open-loop pole-zero configuration.
*   **CO3: Analyse a linear continuous time system model using simulation tools.**
    *   This topic is fundamental to analyzing systems using simulation tools (like MATLAB's Control System Toolbox). By modifying the open-loop transfer function with added poles/zeros and observing the root locus and time-domain responses, students gain insights into system behavior.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   This is a direct application. Compensator design (lead, lag, lag-lead) inherently involves adding poles and zeros to the open-loop transfer function to reshape the root locus and achieve desired performance specifications like reduced overshoot, faster settling time, or improved stability.

---

### **9. Practice Questions and Exercises**

**Question 1:**
Consider a unity feedback system with an open-loop transfer function $G(s) = \frac{K}{s(s+1)}$.
a) Sketch the root locus for this system.
b) If a zero is added at $s=-3$, how will the root locus change? What is the likely effect on the transient response (overshoot, settling time)?
c) If a pole is added at $s=-4$, how will the root locus change? What is the likely effect on the transient response?

**Question 2:**
Explain the primary difference in the effect of adding a pole versus adding a zero to the open-loop transfer function of a typical control system, in terms of transient response characteristics.

**Question 3:**
A system exhibits excessive overshoot and a slow settling time. Based on the principles discussed, what type of compensator (lead or lag) would likely be beneficial, and why? (Relate this to adding poles/zeros).

---

### **10. Answers to Practice Questions**

**Answer 1:**
a) **Root Locus Sketch for $G(s) = \frac{K}{s(s+1)}$**:
    *   Poles at $s=0$ and $s=-1$.
    *   No zeros.
    *   Number of asymptotes = $n-m = 2-0 = 2$. Angles: $\pm 90^\circ$.
    *   Center of asymptotes: $\frac{0 + (-1)}{2} = -0.5$.
    *   Breakaway points exist on the real axis between $0$ and $-1$.
    *   The locus starts at $0$ and $-1$, moves along the real axis, breaks away, and approaches the asymptotes at $\pm 90^\circ$.

b) **Adding a zero at $s=-3$**: $G_{new}(s) = \frac{K(s+3)}{s(s+2)}$.
    *   The root locus branches will be attracted towards the new zero at $s=-3$.
    *   The asymptote angles will change (now $n-m=3-1=2$, angles $\pm 90^\circ$, center $\frac{0-1-3}{2}=-2$).
    *   **Likely effect on transient response**: Reduced overshoot and a faster settling time. The branches will tend to stay on the real axis for longer, or enter the complex plane with a better damping ratio, due to the "pull" of the zero.

c) **Adding a pole at $s=-4$**: $G_{new}(s) = \frac{K}{s(s+1)(s+4)}$.
    *   The root locus branches will be attracted towards the new pole at $s=-4$.
    *   The asymptote angles will change (now $n-m=3-0=3$, angles $\pm 60^\circ, 180^\circ$, center $\frac{0-1-4}{3}=-5/3 \approx -1.67$).
    *   **Likely effect on transient response**: Increased overshoot and a slower settling time. The dominant poles might move closer to the imaginary axis or towards the new pole, leading to more oscillatory behavior and a longer response time.

**Answer 2:**
The primary difference is that adding a **pole** generally **degrades** the transient response by making it slower (increasing settling and rise times) and more oscillatory (increasing overshoot). Conversely, adding a **zero** generally **improves** the transient response by making it faster (decreasing settling and rise times) and less oscillatory (decreasing overshoot). This is because poles represent natural frequencies of the system, and adding more poles can introduce slower modes. Zeros, on the other hand, can influence the system's dynamics in a way that cancels out undesirable modes or speeds up the response.

**Answer 3:**
If a system exhibits excessive overshoot and a slow settling time, a **lead compensator** would likely be beneficial. A lead compensator introduces a zero and a pole into the open-loop transfer function, with the zero typically located closer to the origin than the pole. This configuration effectively adds a zero to the dominant part of the root locus, attracting the closed-loop poles towards the left-half plane and towards the zero. This movement generally results in a more stable system with reduced overshoot and a faster settling time, directly addressing the observed performance issues.

---

### **11. Important Points to Remember**

*   **Root locus is dynamic**: It shows how closed-loop poles move as gain $K$ varies.
*   **Poles attract, Zeros repel (for root locus branches)**: Root locus branches tend to move towards added poles and away from added zeros in the *open-loop* transfer function. (Corrected: Branches are attracted towards zeros and move towards the infinite plane along asymptotes determined by pole-zero excess). More accurately, the root locus **terminates** on zeros or at infinity. The presence of a zero "pulls" the locus towards it.
*   **General Tendencies**: Adding poles generally destabilizes and slows down the system, increasing overshoot. Adding zeros generally stabilizes and speeds up the system, reducing overshoot.
*   **Dominant Poles**: The impact of added poles/zeros is most significant on the dominant closed-loop poles.
*   **Compensator Design**: The process of adding poles and zeros to the open-loop transfer function is the core of designing lead, lag, and lag-lead compensators to meet performance requirements.
*   **Visualization is Key**: Always sketch the root locus or use simulation tools to confirm the exact effects of adding poles and zeros. General trends are helpful, but the precise location matters.

---
This concludes the study notes for the effect of adding poles and zeros on a given system within the context of Control System Lab's performance analysis using root locus.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
