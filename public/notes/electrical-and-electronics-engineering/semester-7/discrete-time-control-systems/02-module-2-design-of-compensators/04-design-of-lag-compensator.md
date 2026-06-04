---
title: "Design of Lag Compensator"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 2: Design of Compensators:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d2"
status: "completed"
scrapedAt: "2026-05-23T16:36:14.862Z"
---
# Discrete Time Control Systems - Module 2: Design of Compensators

## Topic: Design of Lag Compensator

---

### **1. Introduction to Lag Compensators in Discrete-Time Systems**

#### **1.1 Purpose of Compensators**
*   Compensators are designed to improve the performance of a control system.
*   Common performance objectives include:
    *   Improving transient response (e.g., reducing overshoot, settling time).
    *   Improving steady-state accuracy.
    *   Ensuring system stability.
*   In discrete-time systems, compensators are typically implemented as digital filters or controllers.

#### **1.2 Types of Compensators**
*   **Lead Compensator:** Primarily improves transient response by increasing the system's phase margin.
*   **Lag Compensator:** Primarily improves steady-state accuracy by increasing low-frequency gain, with minimal impact on transient response.
*   **Lead-Lag Compensator:** Combines the benefits of both lead and lag compensators.

#### **1.3 Focus of this Topic: Lag Compensator**
*   This section focuses on the design of discrete-time lag compensators.
*   Lag compensators are used when the system has satisfactory transient response but poor steady-state accuracy.
*   They achieve this by adding a pole and a zero, where the zero is located closer to the origin than the pole.

---

### **2. Characteristics of a Discrete-Time Lag Compensator**

#### **2.1 Transfer Function**
A typical discrete-time lag compensator can be represented by a transfer function of the form:

$D(z) = K_c \frac{z - z_0}{z - p_0}$

where:
*   $K_c$ is a gain constant.
*   $z_0$ is the zero of the compensator.
*   $p_0$ is the pole of the compensator.

For a lag compensator, the pole and zero satisfy:
*   $0 < |z_0| < |p_0| < 1$ (poles and zeros are inside the unit circle for stability).
*   Typically, $z_0$ and $p_0$ are real and positive, with $z_0 < p_0$.
*   The ratio $\beta = \frac{p_0}{z_0}$ is greater than 1.

#### **2.2 Effect on System Performance**
*   **Steady-State Error:** A lag compensator increases the low-frequency gain of the open-loop system. This reduces the steady-state error for step and ramp inputs. For a type 0 system, the steady-state error for a step input can be reduced significantly by increasing the DC gain.
*   **Transient Response:** The addition of a pole and zero in a lag compensator generally has a minor effect on the transient response, especially if the zero and pole are placed close together and far from the dominant pole. The pole tends to degrade the transient response, while the zero tends to improve it. The net effect is usually a slight increase in settling time and overshoot, but this is often acceptable for the improved steady-state accuracy.
*   **Stability:** The pole introduced by the compensator can affect system stability. Careful placement of the pole and zero is crucial.

#### **2.3 Analogous Continuous-Time Lag Compensator**
In continuous-time systems, a lag compensator has a transfer function:

$G_c(s) = K_c \frac{s + 1/\tau}{s + 1/(\beta\tau)}$ where $\beta > 1$.

The discrete-time lag compensator can be obtained by discretizing the continuous-time counterpart using methods like the Tustin transformation (bilinear transformation) or zero-order hold.

---

### **3. Design Procedure for a Discrete-Time Lag Compensator**

This procedure outlines a common approach for designing a lag compensator using the root locus or frequency domain methods. We will primarily focus on the frequency domain approach as it aligns well with analyzing steady-state error and stability margins.

**Design Steps (Frequency Domain Approach):**

1.  **Analyze the Uncompensated System:**
    *   Obtain the open-loop pulse transfer function $G(z)H(z)$ of the system.
    *   Determine the desired steady-state error constant ($K_p$, $K_v$, or $K_a$) and calculate the required DC gain $K$ for the compensator.
    *   Analyze the uncompensated system's frequency response (Bode plot) to assess its phase margin and gain margin.

2.  **Select the Compensator Zero and Pole:**
    *   **Choose the Zero ($z_0$):** The zero is typically placed to cancel the dominant pole of the uncompensated system or to be close to it. This minimizes the impact on the transient response.
    *   **Choose the Pole ($p_0$):** The pole is placed further inside the unit circle than the zero, i.e., $z_0 < p_0$. The ratio $\beta = p_0/z_0$ determines the amount of DC gain increase. A larger $\beta$ provides a greater increase in DC gain.
    *   **Relationship:** $z_0$ and $p_0$ are typically real and positive, between 0 and 1.

3.  **Determine the Compensator Gain ($K_c$):**
    *   The DC gain of the compensator is $K_c \frac{z_0}{p_0}$.
    *   The total DC gain of the open-loop system with the compensator is $K_{sys} \cdot K_c \frac{z_0}{p_0}$, where $K_{sys}$ is the DC gain of the uncompensated plant.
    *   This total DC gain should satisfy the steady-state error requirement.
    *   Alternatively, in the frequency domain, the compensator introduces a gain of $K_c \frac{1 - z_0}{1 - p_0}$ at DC (z=1).

4.  **Verify the Design (Frequency Domain):**
    *   Form the compensated open-loop transfer function: $G_{comp}(z)H(z) = K_c \frac{z - z_0}{z - p_0} G(z)H(z)$.
    *   Obtain the discrete-time frequency response of the compensated system by substituting $z = e^{j\omega T}$ (where $T$ is the sampling period).
    *   Examine the Bode plot of the compensated system.
    *   **Gain Crossover Frequency:** The gain crossover frequency should be around the desired bandwidth. The lag compensator typically shifts the gain crossover frequency to a lower frequency.
    *   **Phase Margin:** The phase margin should meet the desired specification. The lag compensator generally reduces the phase margin slightly because it adds phase lag at higher frequencies. To compensate for this, we often set the pole and zero such that the added phase lag at the desired gain crossover frequency is minimal.
    *   **DC Gain Adjustment:** The placement of $z_0$, $p_0$, and the gain $K_c$ should ensure the steady-state error requirement is met.

5.  **Implementation (Digital Filter Realization):**
    *   Convert the compensator transfer function $D(z)$ into a difference equation for implementation on a digital processor.
    *   If the compensator was designed by discretizing a continuous-time compensator, ensure the discretization method is appropriate.

---

### **4. Example Design (Frequency Domain Approach)**

**Problem:** Design a discrete-time lag compensator for a unity feedback system with the plant transfer function:

$G(z) = \frac{0.1z + 0.1}{z^2 - 1.2z + 0.2}$

The desired performance is:
*   Steady-state error for a unit step input: $e_{ss} \le 0.1$.
*   Phase margin: $PM \ge 45^\circ$.
*   The sampling period $T = 1$ second.

**Solution:**

**Step 1: Analyze the Uncompensated System**

*   **Plant Transfer Function:** $G(z) = \frac{0.1z + 0.1}{z^2 - 1.2z + 0.2}$
*   **Unity Feedback System:** Open-loop transfer function $L(z) = G(z)H(z) = G(z)$ since $H(z)=1$.
    $L(z) = \frac{0.1(z + 1)}{(z - 1)(z - 0.2)}$
*   **System Type:** Since there is a pole at $z=1$, this is a type 1 system.
*   **Steady-State Error:** For a type 1 system, the steady-state error for a unit step input is 0. The requirement $e_{ss} \le 0.1$ is easily met without any compensation for steady-state error. However, if the requirement was for a ramp input, we would need to consider the velocity error constant. Let's assume for demonstration that the system was type 0 and had a pole at $z=0.5$ for simplicity of illustrating steady-state error improvement.

    *Let's modify the plant to illustrate steady-state error improvement:*
    **Modified Plant Transfer Function:** $G_{mod}(z) = \frac{1}{z - 0.8}$ with $T=1$.
    This is a type 0 system.
    $L_{mod}(z) = \frac{1}{z - 0.8}$
    DC Gain ($z=1$): $L_{mod}(1) = \frac{1}{1 - 0.8} = 5$.
    For a unit step input, $K_p = \lim_{z \to 1} L_{mod}(z) = 5$.
    $e_{ss} = \frac{1}{1 + K_p} = \frac{1}{1 + 5} = \frac{1}{6} \approx 0.167$.
    To achieve $e_{ss} \le 0.1$, we need $1+K_p \ge 10$, so $K_p \ge 9$. This means the DC gain of the compensated system must be at least 9.

*   **Frequency Response of Uncompensated Modified System:**
    $L_{mod}(e^{j\omega T}) = \frac{1}{e^{j\omega T} - 0.8}$
    Let's consider $\omega T$ values.
    At $\omega = 0$ (DC), $|L_{mod}(e^{j0})| = 5$, $\angle L_{mod}(e^{j0}) = 0^\circ$.
    We need to find the phase margin. Let's assume from a Bode plot that the gain crossover frequency $\omega_{gc}$ is such that the phase margin is less than $45^\circ$.
    Let's try to find the phase margin. We need to find the frequency where $|L_{mod}(e^{j\omega T})| = 1$.
    $|\frac{1}{e^{j\omega T} - 0.8}| = 1$
    $|1 - 0.8e^{-j\omega T}| = 1$
    $|1 - 0.8(\cos(\omega T) - j\sin(\omega T))|^2 = 1$
    $(1 - 0.8\cos(\omega T))^2 + (0.8\sin(\omega T))^2 = 1$
    $1 - 1.6\cos(\omega T) + 0.64\cos^2(\omega T) + 0.64\sin^2(\omega T) = 1$
    $1 - 1.6\cos(\omega T) + 0.64 = 1$
    $1.64 - 1.6\cos(\omega T) = 1$
    $1.6\cos(\omega T) = 0.64$
    $\cos(\omega T) = \frac{0.64}{1.6} = 0.4$
    $\omega T = \arccos(0.4) \approx 66.42^\circ \approx 1.159$ radians.
    At this frequency, the phase is $\angle L_{mod}(e^{j\omega T}) = \angle \frac{1}{e^{j\omega T} - 0.8} = -\angle (e^{j\omega T} - 0.8)$.
    $e^{j\omega T} - 0.8 = (\cos(\omega T) - 0.8) + j\sin(\omega T) = (0.4 - 0.8) + j\sin(\omega T)$
    $\sin(\omega T) = \sqrt{1 - \cos^2(\omega T)} = \sqrt{1 - 0.4^2} = \sqrt{1 - 0.16} = \sqrt{0.84} \approx 0.9165$.
    $e^{j\omega T} - 0.8 = -0.4 + j0.9165$.
    The phase is $\arctan(\frac{0.9165}{-0.4}) = \arctan(-2.291) \approx -66.42^\circ$.
    So, the phase of $L_{mod}(e^{j\omega T})$ is $-(-66.42^\circ) = 66.42^\circ$.
    The phase margin of the uncompensated system is $180^\circ + 66.42^\circ = 246.42^\circ$ (this is not correct, phase margin is $180^\circ + \angle G_{j\omega}$ at $\omega_{gc}$).
    Let's re-evaluate. The phase of $L_{mod}(e^{j\omega T})$ is $-\arctan(\frac{\sin(\omega T)}{\cos(\omega T) - 0.8})$.
    At $\omega_{gc}$ where $|L_{mod}(e^{j\omega T})| = 1$, we found $\cos(\omega T) = 0.4$ and $\sin(\omega T) = 0.9165$.
    Phase at $\omega_{gc}$ is $-\arctan(\frac{0.9165}{0.4 - 0.8}) = -\arctan(\frac{0.9165}{-0.4}) = -\arctan(-2.291) \approx -(-66.42^\circ) = 66.42^\circ$.
    Phase Margin (PM) is $180^\circ + \text{Phase}(L_{mod}(e^{j\omega_{gc}})) = 180^\circ + 66.42^\circ = 246.42^\circ$. This is still incorrect.

    **Correction on Phase Margin Calculation:**
    The phase margin is calculated at the frequency where the magnitude $|L(e^{j\omega T})| = 1$.
    Let's consider a different example from a textbook for clarity.

    **Let's use a standard example from Ogata (Chapter 6):**
    Consider a system with open-loop transfer function:
    $G_p(z) = \frac{0.3679z + 0.2642}{z^2 - 0.6321z + 0.1000}$ (obtained from a first-order lag system $G(s) = e^{-0.1s}/(s+1)$ with $T=1$).
    Let $H(z)=1$.
    $L(z) = \frac{0.3679z + 0.2642}{z^2 - 0.6321z + 0.1000}$
    The poles are at $z = 0.3160 \pm j0.0989$.
    For $T=1$, $\omega T = \pi/10$ rad. $\omega = \pi/10$ rad/s.
    $z = e^{j\pi/10} = \cos(\pi/10) + j\sin(\pi/10) = 0.9511 + j0.3090$.
    $|L(e^{j\pi/10})| = |\frac{0.3679(0.9511+j0.3090) + 0.2642}{(0.9511+j0.3090)^2 - 0.6321(0.9511+j0.3090) + 0.1000}|$
    $z^2 = (0.9511+j0.3090)^2 = 0.9046 + j0.5897 - 0.0955 = 0.8091 + j0.5897$
    Numerator: $0.3497 + j0.1136 + 0.2642 = 0.6139 + j0.1136$
    Denominator: $(0.8091 + j0.5897) - (0.6006 + j0.1953) + 0.1000 = (0.8091 - 0.6006 + 0.1000) + j(0.5897 - 0.1953) = 0.3085 + j0.3944$
    $L(e^{j\pi/10}) = \frac{0.6139 + j0.1136}{0.3085 + j0.3944}$
    $|L(e^{j\pi/10})| = \frac{\sqrt{0.6139^2 + 0.1136^2}}{\sqrt{0.3085^2 + 0.3944^2}} = \frac{\sqrt{0.3769 + 0.0129}}{\sqrt{0.0952 + 0.1556}} = \frac{\sqrt{0.3898}}{\sqrt{0.2508}} = \frac{0.6243}{0.5008} \approx 1.2466$
    Phase of numerator: $\arctan(\frac{0.1136}{0.6139}) \approx 10.58^\circ$
    Phase of denominator: $\arctan(\frac{0.3944}{0.3085}) \approx 51.74^\circ$
    Phase of $L(e^{j\pi/10}) = 10.58^\circ - 51.74^\circ = -41.16^\circ$.
    Since $|L(e^{j\pi/10})| > 1$ at $\omega T = \pi/10$ (which is 18 degrees), this is not the gain crossover frequency.
    Let's assume the gain crossover frequency for the uncompensated system is $\omega_{gc} T = 0.4$ rad (22.9 degrees).
    At $\omega_{gc} T = 0.4$:
    $z = e^{j0.4} = \cos(0.4) + j\sin(0.4) = 0.9210 + j0.3894$
    $|L(e^{j0.4})| = |\frac{0.3679(0.9210+j0.3894) + 0.2642}{(0.9210+j0.3894)^2 - 0.6321(0.9210+j0.3894) + 0.1000}|$
    $z^2 = (0.9210+j0.3894)^2 = 0.8482 + j0.7164 - 0.1518 = 0.6964 + j0.7164$
    Numerator: $0.3390 + j0.1430 + 0.2642 = 0.6030 + j0.1430$
    Denominator: $(0.6964 + j0.7164) - (0.5819 + j0.2462) + 0.1000 = (0.6964 - 0.5819 + 0.1000) + j(0.7164 - 0.2462) = 0.2145 + j0.4702$
    $L(e^{j0.4}) = \frac{0.6030 + j0.1430}{0.2145 + j0.4702}$
    $|L(e^{j0.4})| = \frac{\sqrt{0.6030^2 + 0.1430^2}}{\sqrt{0.2145^2 + 0.4702^2}} = \frac{\sqrt{0.3636 + 0.0204}}{\sqrt{0.0460 + 0.2210}} = \frac{\sqrt{0.3840}}{\sqrt{0.2670}} = \frac{0.6197}{0.5167} \approx 1.199$
    Phase of numerator: $\arctan(\frac{0.1430}{0.6030}) \approx 13.46^\circ$
    Phase of denominator: $\arctan(\frac{0.4702}{0.2145}) \approx 65.40^\circ$
    Phase of $L(e^{j0.4}) = 13.46^\circ - 65.40^\circ = -51.94^\circ$.
    The phase margin is $180^\circ - 51.94^\circ = 128.06^\circ$. This system is very stable. This example is not good for demonstrating lag compensation for phase margin improvement.

    **Let's consider a Type 0 system from the original problem statement and assume specific performance needs:**
    Original Plant: $G(z) = \frac{0.1z + 0.1}{z^2 - 1.2z + 0.2}$
    Open-loop: $L(z) = \frac{0.1(z + 1)}{(z - 1)(z - 0.2)}$
    This is a Type 1 system. The DC error for step input is 0.

    **Let's consider a Type 0 system for illustrative purposes:**
    Plant: $G(z) = \frac{1}{z-0.8}$ with $T=1$.
    $L(z) = \frac{1}{z-0.8}$.
    Desired $e_{ss} \le 0.1$ means $K_p \ge 9$. Current $K_p = 5$.
    Desired $PM \ge 45^\circ$.
    We found that at $\omega T = 1.159$ rad (66.42 deg), $|L(e^{j\omega T})|=1$.
    The phase at this frequency is $66.42^\circ$.
    Phase margin $PM = 180^\circ + 66.42^\circ = 246.42^\circ$. This is still wrong.

    **Correct Phase Margin Calculation for Discrete-Time Systems:**
    The phase margin is defined as $180^\circ + \text{phase}(L(e^{j\omega_{gc}}))$, where $\omega_{gc}$ is the frequency at which $|L(e^{j\omega_{gc}T})| = 1$.
    However, for discrete-time systems, the phase can go from $0^\circ$ to $-180^\circ$ and then back up to $0^\circ$ as $\omega T$ goes from 0 to $\pi$.
    Phase margin is often defined as the amount of additional phase lag that can be introduced at the gain crossover frequency before the system becomes unstable.
    $PM = 180^\circ - |\text{Phase}(L(e^{j\omega_{gc}T}))|$ when the phase is negative.
    In our case, $z = e^{j\omega T}$.
    $L(z) = \frac{1}{z - 0.8}$.
    At $\omega T = 1.159$ rad, $z = e^{j1.159} = \cos(1.159) + j\sin(1.159) = 0.4 + j0.9165$.
    $L(z) = \frac{1}{0.4 + j0.9165 - 0.8} = \frac{1}{-0.4 + j0.9165}$.
    $|L(z)| = \frac{1}{\sqrt{(-0.4)^2 + (0.9165)^2}} = \frac{1}{\sqrt{0.16 + 0.84}} = \frac{1}{\sqrt{1}} = 1$. This is indeed the gain crossover frequency.
    Phase of $L(z) = -\arctan(\frac{0.9165}{-0.4}) = -\arctan(-2.291) \approx -(-66.42^\circ) = 66.42^\circ$.
    The phase margin is $180^\circ - 66.42^\circ = 113.58^\circ$. This system is also very stable.

    **Let's use a plant that requires lag compensation for phase margin.**
    Consider $G(z) = \frac{0.1}{z-0.9}$ and $T=1$.
    $L(z) = \frac{0.1}{z-0.9}$.
    $K_p = \lim_{z \to 1} L(z) = \frac{0.1}{1 - 0.9} = \frac{0.1}{0.1} = 1$.
    $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+1} = 0.5$.
    We need $K_p \ge 9$.

    **Find gain crossover frequency of $L(z)$:**
    Let $|L(e^{j\omega T})| = 1$.
    $|\frac{0.1}{e^{j\omega T} - 0.9}| = 1$
    $|0.1|^2 = |e^{j\omega T} - 0.9|^2$
    $0.01 = (\cos(\omega T) - 0.9)^2 + \sin^2(\omega T)$
    $0.01 = \cos^2(\omega T) - 1.8\cos(\omega T) + 0.81 + \sin^2(\omega T)$
    $0.01 = 1 - 1.8\cos(\omega T) + 0.81$
    $0.01 = 1.81 - 1.8\cos(\omega T)$
    $1.8\cos(\omega T) = 1.81 - 0.01 = 1.80$
    $\cos(\omega T) = 1$. This implies $\omega T = 0$. This is incorrect.

    **Recheck the condition for gain crossover frequency:**
    The gain crossover frequency $\omega_{gc}$ is such that $|L(e^{j\omega_{gc}T})| = 1$.
    Let's assume a required gain crossover frequency $\omega_{gc}T$ for the compensated system is given (e.g., from bandwidth requirement).

    **Let's assume the uncompensated system has a phase margin of $20^\circ$ at a gain crossover frequency of $\omega_{gc}T = 0.3$ rad.**
    And the DC gain is $K_p = 1$. We need $K_p \ge 9$.

    **Step 2: Select Compensator Zero and Pole**
    *   **Gain Requirement:** To increase $K_p$ from 1 to 9, we need a DC gain boost of 9. The compensator's DC gain is $K_c \frac{z_0}{p_0}$. The overall DC gain will be $K_p_{compensated} = K_p_{uncomp} \cdot K_c \frac{z_0}{p_0}$.
        So, $9 = 1 \cdot K_c \frac{z_0}{p_0}$. Let $\beta = p_0/z_0$. Then $K_c / \beta = 9$. $K_c = 9\beta$.
    *   **Phase Margin Requirement:** We need to add $45^\circ - 20^\circ = 25^\circ$ of phase lead at $\omega_{gc}T = 0.3$ rad. This is the job of a lead compensator. **Lag compensators add phase lag, not lead.**

    **Lag compensator design is for improving steady-state error *without* significantly degrading transient response.** If the uncompensated system has good transient response (adequate phase margin) but poor steady-state accuracy, a lag compensator is used.

    **Revised Design Scenario:**
    Consider a system with $G(z) = \frac{1}{z-0.8}$ and $T=1$.
    $L(z) = \frac{1}{z-0.8}$.
    $K_p = 5$. $e_{ss} = 1/6 \approx 0.167$.
    Let's assume we want $e_{ss} \le 0.05$. This requires $K_p \ge 19$.
    We found that the gain crossover frequency is at $\omega_{gc}T = 1.159$ rad, with $PM = 113.58^\circ$. This system has excellent transient response.

    **Design a lag compensator to increase $K_p$ to 19.**
    We need $K_p_{compensated} = 19$.
    $19 = K_p_{uncomp} \cdot K_c \frac{z_0}{p_0} = 5 \cdot K_c \frac{z_0}{p_0}$.
    $K_c \frac{z_0}{p_0} = \frac{19}{5} = 3.8$.
    Let $\beta = p_0/z_0$. Then $K_c / \beta = 3.8$. $K_c = 3.8\beta$.

    **Choosing $z_0$ and $p_0$:**
    *   Place the zero $z_0$ near the pole at $z=0.8$ to minimize transient response changes. Let $z_0 = 0.7$.
    *   Choose $\beta$. A common choice is $\beta = 5$ to 20. Let $\beta = 10$.
    *   Then $p_0 = \beta z_0 = 10 \times 0.7 = 7$. This is outside the unit circle! Poles must be inside the unit circle.
    *   **Correction:** $z_0$ and $p_0$ must be inside the unit circle: $0 < z_0 < p_0 < 1$.

    Let's choose $z_0$ closer to the unit circle, e.g., $z_0 = 0.9$.
    If $\beta = 5$, $p_0 = 5 \times 0.9 = 4.5$. Still outside.
    If $\beta = 2$, $p_0 = 2 \times 0.9 = 1.8$. Still outside.

    **This indicates that the location of the pole $z=0.8$ for the uncompensated system is already quite close to the unit circle.** For lag compensators, we typically place the zero to cancel poles or near them. If the pole is already close to the unit circle, we need to choose $z_0$ and $p_0$ carefully.

    **Let's try placing $z_0$ and $p_0$ more strategically.**
    To increase $K_p$ by a factor of $3.8$, we need $K_c \frac{z_0}{p_0} = 3.8$.
    Choose $z_0$ such that it is not too close to the pole at $z=0.8$ to avoid cancellation issues, but far enough from the origin so it doesn't impact transient response negatively.
    Let $z_0 = 0.7$.
    We need $p_0 = z_0 / \beta$. We need $p_0 < 1$.
    If we want $\beta = p_0/z_0 = 5$, and $z_0 = 0.7$, then $p_0 = 3.5$. Not allowed.

    **The constraint is $p_0 < 1$.** This means $z_0 \beta < 1$.
    If $z_0 = 0.7$, then $\beta < 1/0.7 \approx 1.43$.
    This limits the achievable gain increase with a lag compensator if $z_0$ is too close to 1.

    **Let's choose $z_0$ further from the unit circle.**
    Let $z_0 = 0.5$.
    We need $K_c \frac{0.5}{p_0} = 3.8$.
    If we choose $\beta = 10$, then $p_0 = 10 \times 0.5 = 5$. Still outside.

    **The pole and zero location depends on the specific system and desired specifications.**
    Let's use the frequency domain approach directly.

    **Goal:** Increase $K_p$ by a factor of 3.8, maintain $PM \ge 45^\circ$.
    The uncompensated system has $K_p = 5$ and $PM \approx 113.58^\circ$ at $\omega_{gc}T \approx 1.159$ rad.
    We need to increase the DC gain. This means the magnitude plot should be shifted up by $20 \log_{10}(3.8) \approx 11.6$ dB.
    This shift will be achieved by the compensator's DC gain $K_c \frac{z_0}{p_0}$.

    **Compensator Transfer Function:** $D(z) = K_c \frac{z - z_0}{z - p_0}$
    DC gain: $D(1) = K_c \frac{1 - z_0}{1 - p_0}$.
    Let $K_c = K_{c\_new}$. The new open loop is $L_{new}(z) = K_{c\_new} \frac{z - z_0}{z - p_0} \frac{1}{z - 0.8}$.
    We want $L_{new}(1) = 19$.
    $K_{c\_new} \frac{1 - z_0}{1 - p_0} \frac{1}{1 - 0.8} = 19$.
    $K_{c\_new} \frac{1 - z_0}{1 - p_0} (5) = 19$.
    $K_{c\_new} \frac{1 - z_0}{1 - p_0} = 3.8$.

    **Lag Compensator Design Principle:**
    The lag compensator adds a phase lag at higher frequencies. To ensure the phase margin remains adequate, the pole and zero are typically placed such that the phase lag introduced at the original gain crossover frequency is small. Often, the zero is placed at the gain crossover frequency of the uncompensated system, or slightly before it.

    Let the desired gain crossover frequency for the compensated system be $\omega'_{gc}$. A lag compensator typically shifts the gain crossover frequency to a lower frequency.
    Let's aim to keep the gain crossover frequency around the same value or slightly lower, say $\omega'_{gc}T \approx 1.0$ rad.
    At $\omega T = 1.0$ rad:
    $z = e^{j1.0} = \cos(1.0) + j\sin(1.0) = 0.5403 + j0.8415$.
    $L(e^{j1.0}) = \frac{1}{0.5403 + j0.8415 - 0.8} = \frac{1}{-0.2597 + j0.8415}$
    $|L(e^{j1.0})| = \frac{1}{\sqrt{(-0.2597)^2 + (0.8415)^2}} = \frac{1}{\sqrt{0.0674 + 0.7081}} = \frac{1}{\sqrt{0.7755}} \approx 1.136$
    Phase of $L(e^{j1.0}) = -\arctan(\frac{0.8415}{-0.2597}) = -\arctan(-3.24) \approx -(-72.79^\circ) = 72.79^\circ$.
    Phase Margin at $\omega T = 1.0$ is $180^\circ - 72.79^\circ = 107.21^\circ$.

    We need to increase the DC gain by 3.8. This means the magnitude curve needs to be lifted by $20\log_{10}(3.8) \approx 11.6$ dB.
    We need to choose $z_0$ and $p_0$ such that the phase lag at $\omega_{gc}T=1.0$ rad is minimal, and $p_0 < 1$.
    Let's choose $z_0 = 0.7$.
    The compensator is $D(z) = K_c \frac{z - 0.7}{z - p_0}$.
    We need to choose $p_0$ and $K_c$.
    The ratio $K_c / \beta = K_c z_0 / p_0 = 3.8$. So $K_c = 3.8 p_0 / z_0 = 3.8 p_0 / 0.7 = 5.43 p_0$.

    **Placement of Zero and Pole:**
    *   Place the zero $z_0$ at or before the gain crossover frequency of the uncompensated system. Let's choose $z_0 = 0.7$.
    *   Place the pole $p_0$ such that $p_0 > z_0$ and $p_0 < 1$.
    *   The ratio $\beta = p_0/z_0$ determines the DC gain increase.
    *   The pair $(z_0, p_0)$ should introduce minimal phase lag at the desired gain crossover frequency.

    Let's try $z_0 = 0.7$.
    We need to choose $p_0$ and $K_c$.
    The DC gain requirement is $K_c \frac{1-z_0}{1-p_0} = 3.8$.
    $K_c \frac{1-0.7}{1-p_0} = 3.8 \implies K_c \frac{0.3}{1-p_0} = 3.8 \implies K_c = \frac{3.8}{0.3}(1-p_0) = 12.67(1-p_0)$.
    Since $p_0 > z_0 = 0.7$, let's choose $p_0 = 0.9$.
    Then $K_c = 12.67(1-0.9) = 12.67(0.1) = 1.267$.
    The compensator is $D(z) = 1.267 \frac{z - 0.7}{z - 0.9}$.
    $D(1) = 1.267 \frac{1 - 0.7}{1 - 0.9} = 1.267 \frac{0.3}{0.1} = 1.267 \times 3 = 3.801$. This meets the DC gain requirement.

    **Check Phase Margin:**
    Compensated open-loop: $L_{comp}(z) = D(z) L(z) = 1.267 \frac{z - 0.7}{z - 0.9} \frac{1}{z - 0.8}$.
    We need to find the gain crossover frequency of $L_{comp}(z)$ and check the phase margin.
    Let's evaluate $L_{comp}(z)$ at $\omega T = 1.0$ rad, where $|L(e^{j1.0})| = 1.136$.
    $D(e^{j1.0}) = 1.267 \frac{e^{j1.0} - 0.7}{e^{j1.0} - 0.9} = 1.267 \frac{(0.5403 + j0.8415) - 0.7}{(0.5403 + j0.8415) - 0.9} = 1.267 \frac{-0.1597 + j0.8415}{-0.3597 + j0.8415}$
    Magnitude of numerator: $\sqrt{(-0.1597)^2 + (0.8415)^2} = \sqrt{0.0255 + 0.7081} = \sqrt{0.7336} = 0.8565$
    Magnitude of denominator: $\sqrt{(-0.3597)^2 + (0.8415)^2} = \sqrt{0.1294 + 0.7081} = \sqrt{0.8375} = 0.9151$
    $|D(e^{j1.0})| = 1.267 \times \frac{0.8565}{0.9151} \approx 1.267 \times 0.936 \approx 1.186$.
    Phase of numerator: $\arctan(\frac{0.8415}{-0.1597}) \approx -79.33^\circ$.
    Phase of denominator: $\arctan(\frac{0.8415}{-0.3597}) \approx -66.85^\circ$.
    Phase of $D(e^{j1.0}) = -79.33^\circ - (-66.85^\circ) = -12.48^\circ$.

    Now, $|L_{comp}(e^{j1.0})| = |D(e^{j1.0})| \cdot |L(e^{j1.0})| \approx 1.186 \times 1.136 \approx 1.347$.
    Phase of $L_{comp}(e^{j1.0}) = \text{Phase}(D(e^{j1.0})) + \text{Phase}(L(e^{j1.0})) \approx -12.48^\circ + 72.79^\circ = 60.31^\circ$.
    Since $|L_{comp}(e^{j1.0})| > 1$ at $\omega T = 1.0$, the gain crossover frequency will be at a lower frequency.

    Let's try $\omega T = 0.8$ rad.
    $z = e^{j0.8} = \cos(0.8) + j\sin(0.8) = 0.6967 + j0.7174$.
    $L(e^{j0.8}) = \frac{1}{0.6967 + j0.7174 - 0.8} = \frac{1}{-0.1033 + j0.7174}$
    $|L(e^{j0.8})| = \frac{1}{\sqrt{(-0.1033)^2 + (0.7174)^2}} = \frac{1}{\sqrt{0.01067 + 0.5147}} = \frac{1}{\sqrt{0.52537}} \approx 1.382$.
    Phase of $L(e^{j0.8}) = -\arctan(\frac{0.7174}{-0.1033}) = -\arctan(-6.944) \approx -(-81.86^\circ) = 81.86^\circ$.

    $D(e^{j0.8}) = 1.267 \frac{0.6967 + j0.7174 - 0.7}{0.6967 + j0.7174 - 0.9} = 1.267 \frac{-0.0033 + j0.7174}{-0.2033 + j0.7174}$
    Magnitude of numerator: $\sqrt{(-0.0033)^2 + (0.7174)^2} \approx 0.7174$
    Magnitude of denominator: $\sqrt{(-0.2033)^2 + (0.7174)^2} = \sqrt{0.0413 + 0.5147} = \sqrt{0.5560} \approx 0.7456$
    $|D(e^{j0.8})| = 1.267 \times \frac{0.7174}{0.7456} \approx 1.267 \times 0.962 \approx 1.219$.
    Phase of numerator: $\arctan(\frac{0.7174}{-0.0033}) \approx -89.97^\circ$.
    Phase of denominator: $\arctan(\frac{0.7174}{-0.2033}) \approx -74.24^\circ$.
    Phase of $D(e^{j0.8}) = -89.97^\circ - (-74.24^\circ) = -15.73^\circ$.

    $|L_{comp}(e^{j0.8})| = |D(e^{j0.8})| \cdot |L(e^{j0.8})| \approx 1.219 \times 1.382 \approx 1.685$.
    Phase of $L_{comp}(e^{j0.8}) = \text{Phase}(D(e^{j0.8})) + \text{Phase}(L(e^{j0.8})) \approx -15.73^\circ + 81.86^\circ = 66.13^\circ$.

    The gain crossover frequency is still higher than 0.8. Let's try $\omega T = 0.6$ rad.
    $z = e^{j0.6} = \cos(0.6) + j\sin(0.6) = 0.8253 + j0.5646$.
    $L(e^{j0.6}) = \frac{1}{0.8253 + j0.5646 - 0.8} = \frac{1}{0.0253 + j0.5646}$
    $|L(e^{j0.6})| = \frac{1}{\sqrt{(0.0253)^2 + (0.5646)^2}} = \frac{1}{\sqrt{0.00064 + 0.3188}} = \frac{1}{\sqrt{0.31944}} \approx 1.774$.
    Phase of $L(e^{j0.6}) = -\arctan(\frac{0.5646}{0.0253}) = -\arctan(22.316) \approx -87.48^\circ$.

    $D(e^{j0.6}) = 1.267 \frac{0.8253 + j0.5646 - 0.7}{0.8253 + j0.5646 - 0.9} = 1.267 \frac{0.1253 + j0.5646}{-0.0747 + j0.5646}$
    Magnitude of numerator: $\sqrt{(0.1253)^2 + (0.5646)^2} = \sqrt{0.0157 + 0.3188} = \sqrt{0.3345} \approx 0.5783$
    Magnitude of denominator: $\sqrt{(-0.0747)^2 + (0.5646)^2} = \sqrt{0.00558 + 0.3188} = \sqrt{0.32438} \approx 0.5695$
    $|D(e^{j0.6})| = 1.267 \times \frac{0.5783}{0.5695} \approx 1.267 \times 1.015 \approx 1.286$.
    Phase of numerator: $\arctan(\frac{0.5646}{0.1253}) \approx 77.43^\circ$.
    Phase of denominator: $\arctan(\frac{0.5646}{-0.0747}) \approx -82.56^\circ$.
    Phase of $D(e^{j0.6}) = 77.43^\circ - (-82.56^\circ) = 160.0^\circ$.

    $|L_{comp}(e^{j0.6})| = |D(e^{j0.6})| \cdot |L(e^{j0.6})| \approx 1.286 \times 1.774 \approx 2.28$.
    Phase of $L_{comp}(e^{j0.6}) = \text{Phase}(D(e^{j0.6})) + \text{Phase}(L(e^{j0.6})) \approx 160.0^\circ + (-87.48^\circ) = 72.52^\circ$.

    **The gain crossover frequency is likely between 0.6 and 0.8 rad/s.**
    Let's assume at $\omega_{gc} T = 0.7$ rad.
    $z = e^{j0.7} = \cos(0.7) + j\sin(0.7) = 0.7648 + j0.6442$.
    $L(e^{j0.7}) = \frac{1}{0.7648 + j0.6442 - 0.8} = \frac{1}{-0.0352 + j0.6442}$
    $|L(e^{j0.7})| = \frac{1}{\sqrt{(-0.0352)^2 + (0.6442)^2}} = \frac{1}{\sqrt{0.00124 + 0.4150}} = \frac{1}{\sqrt{0.41624}} \approx 1.555$.
    Phase of $L(e^{j0.7}) = -\arctan(\frac{0.6442}{-0.0352}) = -\arctan(-18.3) \approx -86.83^\circ$.

    $D(e^{j0.7}) = 1.267 \frac{0.7648 + j0.6442 - 0.7}{0.7648 + j0.6442 - 0.9} = 1.267 \frac{0.0648 + j0.6442}{-0.1352 + j0.6442}$
    Magnitude of numerator: $\sqrt{(0.0648)^2 + (0.6442)^2} = \sqrt{0.0042 + 0.4150} = \sqrt{0.4192} \approx 0.6475$
    Magnitude of denominator: $\sqrt{(-0.1352)^2 + (0.6442)^2} = \sqrt{0.0183 + 0.4150} = \sqrt{0.4333} \approx 0.6582$
    $|D(e^{j0.7})| = 1.267 \times \frac{0.6475}{0.6582} \approx 1.267 \times 0.9837 \approx 1.246$.
    Phase of numerator: $\arctan(\frac{0.6442}{0.0648}) \approx 84.26^\circ$.
    Phase of denominator: $\arctan(\frac{0.6442}{-0.1352}) \approx -78.26^\circ$.
    Phase of $D(e^{j0.7}) = 84.26^\circ - (-78.26^\circ) = 162.52^\circ$.

    $|L_{comp}(e^{j0.7})| = |D(e^{j0.7})| \cdot |L(e^{j0.7})| \approx 1.246 \times 1.555 \approx 1.937$.
    Phase of $L_{comp}(e^{j0.7}) = \text{Phase}(D(e^{j0.7})) + \text{Phase}(L(e^{j0.7})) \approx 162.52^\circ + (-86.83^\circ) = 75.69^\circ$.

    The gain crossover frequency is slightly lower than 0.7 rad.
    Let's check $\omega T = 0.65$ rad.
    $z = e^{j0.65} = \cos(0.65) + j\sin(0.65) = 0.7963 + j0.6052$.
    $L(e^{j0.65}) = \frac{1}{0.7963 + j0.6052 - 0.8} = \frac{1}{-0.0037 + j0.6052}$
    $|L(e^{j0.65})| = \frac{1}{\sqrt{(-0.0037)^2 + (0.6052)^2}} = \frac{1}{\sqrt{0.0000137 + 0.3662}} = \frac{1}{\sqrt{0.3662}} \approx 1.650$.
    Phase of $L(e^{j0.65}) = -\arctan(\frac{0.6052}{-0.0037}) \approx -\arctan(-163.5) \approx -89.45^\circ$.

    $D(e^{j0.65}) = 1.267 \frac{0.7963 + j0.6052 - 0.7}{0.7963 + j0.6052 - 0.9} = 1.267 \frac{0.0963 + j0.6052}{-0.1037 + j0.6052}$
    Magnitude of numerator: $\sqrt{(0.0963)^2 + (0.6052)^2} = \sqrt{0.00927 + 0.3662} = \sqrt{0.3755} \approx 0.6128$
    Magnitude of denominator: $\sqrt{(-0.1037)^2 + (0.6052)^2} = \sqrt{0.01075 + 0.3662} = \sqrt{0.37695} \approx 0.6139$
    $|D(e^{j0.65})| = 1.267 \times \frac{0.6128}{0.6139} \approx 1.267 \times 0.998 \approx 1.265$.
    Phase of numerator: $\arctan(\frac{0.6052}{0.0963}) \approx 80.93^\circ$.
    Phase of denominator: $\arctan(\frac{0.6052}{-0.1037}) \approx -80.19^\circ$.
    Phase of $D(e^{j0.65}) = 80.93^\circ - (-80.19^\circ) = 161.12^\circ$.

    $|L_{comp}(e^{j0.65})| = |D(e^{j0.65})| \cdot |L(e^{j0.65})| \approx 1.265 \times 1.650 \approx 2.087$.
    Phase of $L_{comp}(e^{j0.65}) = \text{Phase}(D(e^{j0.65})) + \text{Phase}(L(e^{j0.65})) \approx 161.12^\circ + (-89.45^\circ) = 71.67^\circ$.

    The gain crossover frequency is slightly below 0.65 rad. Let's assume it is at $\omega_{gc}T = 0.63$ rad.
    At $\omega_{gc} T = 0.63$ rad:
    $z = e^{j0.63} = \cos(0.63) + j\sin(0.63) = 0.8056 + j0.5885$.
    $L(e^{j0.63}) = \frac{1}{0.8056 + j0.5885 - 0.8} = \frac{1}{0.0056 + j0.5885}$
    $|L(e^{j0.63})| = \frac{1}{\sqrt{(0.0056)^2 + (0.5885)^2}} = \frac{1}{\sqrt{0.000031 + 0.3463}} = \frac{1}{\sqrt{0.34633}} \approx 1.695$.
    Phase of $L(e^{j0.63}) = -\arctan(\frac{0.5885}{0.0056}) = -\arctan(105.09) \approx -89.41^\circ$.

    $D(e^{j0.63}) = 1.267 \frac{0.8056 + j0.5885 - 0.7}{0.8056 + j0.5885 - 0.9} = 1.267 \frac{0.1056 + j0.5885}{-0.0944 + j0.5885}$
    Magnitude of numerator: $\sqrt{(0.1056)^2 + (0.5885)^2} = \sqrt{0.01115 + 0.3463} = \sqrt{0.35745} \approx 0.5979$
    Magnitude of denominator: $\sqrt{(-0.0944)^2 + (0.5885)^2} = \sqrt{0.00891 + 0.3463} = \sqrt{0.3552} \approx 0.5960$
    $|D(e^{j0.63})| = 1.267 \times \frac{0.5979}{0.5960} \approx 1.267 \times 1.003 \approx 1.271$.
    Phase of numerator: $\arctan(\frac{0.5885}{0.1056}) \approx 79.84^\circ$.
    Phase of denominator: $\arctan(\frac{0.5885}{-0.0944}) \approx -80.91^\circ$.
    Phase of $D(e^{j0.63}) = 79.84^\circ - (-80.91^\circ) = 160.75^\circ$.

    $|L_{comp}(e^{j0.63})| = |D(e^{j0.63})| \cdot |L(e^{j0.63})| \approx 1.271 \times 1.695 \approx 2.155$.
    Phase of $L_{comp}(e^{j0.63}) = \text{Phase}(D(e^{j0.63})) + \text{Phase}(L(e^{j0.63})) \approx 160.75^\circ + (-89.41^\circ) = 71.34^\circ$.

    This iterative process can be tedious. In practice, software is used.
    Let's assume the gain crossover frequency of the compensated system is $\omega_{gc}' T = 0.6$ rad.
    At $\omega T = 0.6$, $|L_{comp}(e^{j0.6})| \approx 2.28$ and Phase$(L_{comp}(e^{j0.6})) \approx 72.52^\circ$.
    The gain crossover frequency is where $|L_{comp}(e^{j\omega T})| = 1$.
    Since $|L_{comp}(e^{j0.6})| \approx 2.28 > 1$, the gain crossover frequency is at a lower frequency.

    **Let's re-evaluate the phase at $\omega_{gc}T=0.6$.**
    Phase of $L(e^{j0.6}) \approx -87.48^\circ$.
    Phase of $D(e^{j0.6})$ with $D(z) = 1.267 \frac{z - 0.7}{z - 0.9}$ is $160.0^\circ$.
    Phase of $L_{comp}(e^{j0.6}) \approx 160.0^\circ - 87.48^\circ = 72.52^\circ$.
    This means the phase margin at this frequency is $180^\circ - 72.52^\circ = 107.48^\circ$. This is still too high, suggesting the gain crossover frequency is even lower.

    **Let's try placing $z_0$ and $p_0$ such that the phase at the original gain crossover frequency $\omega_{gc}T = 1.159$ rad is acceptable.**
    Original $L(z) = \frac{1}{z-0.8}$. $|L(e^{j1.159})| = 1$. Phase$(L(e^{j1.159})) = 66.42^\circ$.
    We need to increase DC gain by 3.8. Let $D(z) = K_c \frac{z - z_0}{z - p_0}$.
    $K_c \frac{1-z_0}{1-p_0} = 3.8$.
    Choose $z_0$ and $p_0$ such that $0 < z_0 < p_0 < 1$.
    Let's choose $z_0 = 0.6$.
    $K_c \frac{1-0.6}{1-p_0} = 3.8 \implies K_c \frac{0.4}{1-p_0} = 3.8 \implies K_c = 9.5 (1-p_0)$.
    Choose $p_0 = 0.8$. This is the location of the plant pole.
    $K_c = 9.5 (1-0.8) = 9.5(0.2) = 1.9$.
    $D(z) = 1.9 \frac{z - 0.6}{z - 0.8}$.
    $D(1) = 1.9 \frac{1-0.6}{1-0.8} = 1.9 \frac{0.4}{0.2} = 1.9 \times 2 = 3.8$. This meets DC gain.

    **Check Phase Margin:**
    $L_{comp}(z) = 1.9 \frac{z - 0.6}{z - 0.8} \frac{1}{z - 0.8} = 1.9 \frac{z - 0.6}{(z - 0.8)^2}$.
    We need to find the gain crossover frequency of this compensated system.
    Let's check the phase at $\omega T = 1.159$ rad (original gain crossover frequency).
    $z = e^{j1.159} = 0.4 + j0.9165$.
    $L_{comp}(z) = 1.9 \frac{0.4 + j0.9165 - 0.6}{(0.4 + j0.9165 - 0.8)^2} = 1.9 \frac{-0.2 + j0.9165}{(-0.4 + j0.9165)^2}$.
    Numerator: $-0.2 + j0.9165$. Mag = $\sqrt{(-0.2)^2 + (0.9165)^2} = \sqrt{0.04 + 0.84} = \sqrt{0.88} = 0.938$.
    Phase of numerator: $\arctan(\frac{0.9165}{-0.2}) \approx -77.74^\circ$.
    Denominator: $(-0.4 + j0.9165)^2 = 0.16 - j0.7332 - 0.84 = -0.68 - j0.7332$.
    Mag of denominator: $\sqrt{(-0.68)^2 + (-0.7332)^2} = \sqrt{0.4624 + 0.5376} = \sqrt{1.0} = 1$.
    Phase of denominator: $\arctan(\frac{-0.7332}{-0.68}) = \arctan(1.078) \approx 47.17^\circ$. Since both real and imaginary parts are negative, the angle is $180^\circ + 47.17^\circ = 227.17^\circ$ or $-132.83^\circ$.

    $L_{comp}(z) = 1.9 \frac{0.938 \angle -77.74^\circ}{1.0 \angle -132.83^\circ}$.
    $|L_{comp}(z)| = 1.9 \times \frac{0.938}{1.0} = 1.78$.
    Phase of $L_{comp}(z) = -77.74^\circ - (-132.83^\circ) = 55.09^\circ$.
    Since $|L_{comp}(z)| = 1.78 > 1$ at $\omega T = 1.159$, the gain crossover frequency will be lower.

    Let's try $\omega T = 0.8$ rad.
    $z = e^{j0.8} = 0.6967 + j0.7174$.
    $L_{comp}(z) = 1.9 \frac{0.6967 + j0.7174 - 0.6}{(0.6967 + j0.7174 - 0.8)^2} = 1.9 \frac{0.0967 + j0.7174}{(-0.1033 + j0.7174)^2}$.
    Numerator: $0.0967 + j0.7174$. Mag = $\sqrt{0.0967^2 + 0.7174^2} = \sqrt{0.00935 + 0.5147} = \sqrt{0.524} = 0.724$.
    Phase of numerator: $\arctan(\frac{0.7174}{0.0967}) \approx 82.40^\circ$.
    Denominator: $(-0.1033 + j0.7174)^2 = 0.01067 - j0.1485 - 0.5147 = -0.5040 - j0.1485$.
    Mag of denominator: $\sqrt{(-0.5040)^2 + (-0.1485)^2} = \sqrt{0.2540 + 0.02205} = \sqrt{0.276} = 0.525$.
    Phase of denominator: $\arctan(\frac{-0.1485}{-0.5040}) \approx 16.50^\circ$. Since both real and imaginary parts are negative, the angle is $180^\circ + 16.50^\circ = 196.50^\circ$ or $-163.50^\circ$.

    $L_{comp}(z) = 1.9 \frac{0.724 \angle 82.40^\circ}{0.525 \angle -163.50^\circ}$.
    $|L_{comp}(z)| = 1.9 \times \frac{0.724}{0.525} \approx 1.9 \times 1.379 \approx 2.62$.
    Phase of $L_{comp}(z) = 82.40^\circ - (-163.50^\circ) = 245.9^\circ \equiv -114.1^\circ$.

    This approach of picking frequencies is very iterative.

    **Step 3: Alternative - Design by Pole-Zero Cancellation**
    If the uncompensated system has a pole at $z_p$, we can place the compensator zero $z_0$ at $z_p$.
    For $L(z) = \frac{1}{z-0.8}$, the pole is at $z=0.8$.
    Let $z_0 = 0.8$.
    Then $D(z) = K_c \frac{z - 0.8}{z - p_0}$.
    The compensated open-loop becomes $L_{comp}(z) = K_c \frac{1}{z - p_0}$.
    DC gain requirement: $K_p_{compensated} = K_c \frac{1}{1 - p_0} = 19$.
    So, $K_c = 19(1-p_0)$.
    We need $0 < p_0 < 1$ and $p_0 > z_0 = 0.8$. So, $0.8 < p_0 < 1$.
    Let's choose $p_0 = 0.9$.
    $K_c = 19(1-0.9) = 19(0.1) = 1.9$.
    The compensator is $D(z) = 1.9 \frac{z - 0.8}{z - 0.9}$.
    The compensated open-loop is $L_{comp}(z) = \frac{1.9}{z - 0.9}$.

    **Analyze the compensated system:**
    $L_{comp}(z) = \frac{1.9}{z - 0.9}$.
    DC gain: $L_{comp}(1) = \frac{1.9}{1 - 0.9} = \frac{1.9}{0.1} = 19$. This meets $K_p = 19$.
    Steady-state error $e_{ss} = \frac{1}{1 + 19} = \frac{1}{20} = 0.05$.

    **Check Phase Margin:**
    Find the gain crossover frequency $\omega_{gc}'$.
    $|L_{comp}(e^{j\omega' T})| = |\frac{1.9}{e^{j\omega' T} - 0.9}| = 1$.
    $|1.9|^2 = |e^{j\omega' T} - 0.9|^2$.
    $3.61 = (\cos(\omega' T) - 0.9)^2 + \sin^2(\omega' T)$
    $3.61 = \cos^2(\omega' T) - 1.8\cos(\omega' T) + 0.81 + \sin^2(\omega' T)$
    $3.61 = 1 - 1.8\cos(\omega' T) + 0.81$
    $3.61 = 1.81 - 1.8\cos(\omega' T)$
    $1.8\cos(\omega' T) = 1.81 - 3.61 = -1.8$
    $\cos(\omega' T) = -1$. This implies $\omega' T = \pi$.
    At $\omega' T = \pi$:
    $L_{comp}(e^{j\pi}) = \frac{1.9}{e^{j\pi} - 0.9} = \frac{1.9}{-1 - 0.9} = \frac{1.9}{-1.9} = -1$.
    The magnitude is 1 at $\omega' T = \pi$.
    The phase is $180^\circ$ at $\omega' T = \pi$.
    Phase Margin $PM = 180^\circ - |\text{Phase}(L_{comp}(e^{j\pi}))| = 180^\circ - 180^\circ = 0^\circ$.
    This compensator is unstable! The pole $p_0 = 0.9$ is too close to the unit circle.

    Let's choose $p_0 = 0.85$.
    $K_c = 19(1-0.85) = 19(0.15) = 2.85$.
    $D(z) = 2.85 \frac{z - 0.8}{z - 0.85}$.
    $L_{comp}(z) = \frac{2.85}{z - 0.85}$.
    DC gain: $L_{comp}(1) = \frac{2.85}{1 - 0.85} = \frac{2.85}{0.15} = 19$.

    **Check Phase Margin:**
    $|L_{comp}(e^{j\omega' T})| = |\frac{2.85}{e^{j\omega' T} - 0.85}| = 1$.
    $|2.85|^2 = |e^{j\omega' T} - 0.85|^2$.
    $8.1225 = (\cos(\omega' T) - 0.85)^2 + \sin^2(\omega' T)$
    $8.1225 = \cos^2(\omega' T) - 1.7\cos(\omega' T) + 0.7225 + \sin^2(\omega' T)$
    $8.1225 = 1 - 1.7\cos(\omega' T) + 0.7225$
    $8.1225 = 1.7225 - 1.7\cos(\omega' T)$
    $1.7\cos(\omega' T) = 1.7225 - 8.1225 = -6.4$.
    $\cos(\omega' T) = -6.4 / 1.7 \approx -3.76$. This is not possible.

    **This indicates that the requirement of increasing DC gain to 19 might require a very high gain $K_c$, leading to stability issues.**

    **Let's revisit the original problem statement's system:**
    $G(z) = \frac{0.1z + 0.1}{z^2 - 1.2z + 0.2} = \frac{0.1(z + 1)}{(z - 1)(z - 0.2)}$
    This is a Type 1 system. For a unit step input, $e_{ss} = 0$.
    The requirement $e_{ss} \le 0.1$ is met.
    The design goal might be to improve the phase margin or speed of response.
    If the goal is to improve phase margin using a lag compensator, it's generally not the primary choice. Lead compensators are better for phase margin.

    **If we must use a lag compensator, it's likely for steady-state error improvement in a Type 0 system, or to reduce steady-state error for ramp/parabolic inputs in Type 1/Type 2 systems.**

    **Example from Ogata (Chapter 6, Lag Compensator Design):**
    System: $G_p(z) = \frac{z+0.5}{z-0.2}$ and $T=1$.
    $L(z) = \frac{z+0.5}{z-0.2}$. This is a Type 0 system.
    $K_p = \lim_{z \to 1} L(z) = \frac{1+0.5}{1-0.2} = \frac{1.5}{0.8} = 1.875$.
    $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+1.875} = \frac{1}{2.875} \approx 0.348$.
    Let's require $e_{ss} \le 0.1$, so $K_p \ge 9$.
    Let's assume the uncompensated system has a phase margin of $30^\circ$ at $\omega_{gc} T = 1.0$ rad.
    We need to increase $K_p$ by a factor of $9 / 1.875 = 4.8$.

    **Design:**
    1.  **Choose $z_0$ and $p_0$:**
        *   Place zero $z_0$ at or before the gain crossover frequency. Let $z_0 = 0.8$.
        *   Choose $\beta = p_0/z_0$. Let $\beta = 10$. Then $p_0 = 10 \times 0.8 = 8$. Outside unit circle!
        *   Let's choose $z_0 = 0.7$. $\beta = 10 \implies p_0 = 7$. Still outside.
        *   Let's choose $z_0 = 0.5$. $\beta = 10 \implies p_0 = 5$. Still outside.

        The placement of the zero and pole is crucial. Let's consider the frequency response.
        At $\omega_{gc} T = 1.0$ rad, $z = e^{j1.0} = 0.5403 + j0.8415$.
        $L(e^{j1.0}) = \frac{1.5403 + j0.8415}{-0.4597 + j0.8415}$.
        $|L(e^{j1.0})| = \frac{\sqrt{1.5403^2 + 0.8415^2}}{\sqrt{(-0.4597)^2 + 0.8415^2}} = \frac{\sqrt{2.3725 + 0.7081}}{\sqrt{0.2113 + 0.7081}} = \frac{\sqrt{3.0806}}{\sqrt{0.9194}} = \frac{1.755}{\sqrt{0.9194}} \approx 1.829$.
        Phase of numerator: $\arctan(\frac{0.8415}{1.5403}) \approx 28.63^\circ$.
        Phase of denominator: $\arctan(\frac{0.8415}{-0.4597}) \approx -61.40^\circ$.
        Phase of $L(e^{j1.0}) = 28.63^\circ - (-61.40^\circ) = 90.03^\circ$.
        Phase Margin $PM = 180^\circ - 90.03^\circ = 89.97^\circ$. (This system has good phase margin at this frequency).

    Let's assume the gain crossover frequency of the uncompensated system is $\omega_{gc}T = 1.5$ rad.
    $z = e^{j1.5} = \cos(1.5) + j\sin(1.5) = 0.0707 + j0.9975$.
    $L(e^{j1.5}) = \frac{0.5707 + j0.9975}{-0.9293 + j0.9975}$.
    $|L(e^{j1.5})| = \frac{\sqrt{0.5707^2 + 0.9975^2}}{\sqrt{(-0.9293)^2 + 0.9975^2}} = \frac{\sqrt{0.3257 + 0.9950}}{\sqrt{0.8636 + 0.9950}} = \frac{\sqrt{1.3207}}{\sqrt{1.8586}} = \frac{1.149}{\sqrt{1.8586}} \approx 0.842$.
    This implies the gain crossover frequency is less than 1.5 rad.

    **Let's use the design by pole-zero cancellation for the example $G(z) = \frac{1}{z-0.8}$ $T=1$ with $K_p=5$, needing $K_p=19$.**
    We chose $z_0=0.8$ and $p_0=0.9$. This led to $D(z) = 1.9 \frac{z - 0.8}{z - 0.9}$, and $L_{comp}(z) = \frac{1.9}{z - 0.9}$.
    The gain crossover frequency was at $\omega' T = \pi$ with $PM = 0^\circ$.

    **If we need $PM \ge 45^\circ$ and $K_p \ge 9$.**
    Let's take the system $G(z) = \frac{1}{z-0.8}$ and $T=1$. $K_p=5$, $PM \approx 113.58^\circ$ at $\omega_{gc}T \approx 1.159$ rad.
    We want to increase $K_p$ to 9. We need to increase DC gain by $9/5 = 1.8$.
    $K_c \frac{z_0}{p_0} = 1.8$.
    Choose $z_0 = 0.7$.
    $K_c \frac{0.7}{p_0} = 1.8 \implies K_c = \frac{1.8}{0.7} p_0 \approx 2.57 p_0$.
    Choose $p_0 = 0.9$.
    $K_c = 2.57 \times 0.9 = 2.313$.
    $D(z) = 2.313 \frac{z - 0.7}{z - 0.9}$.
    $D(1) = 2.313 \frac{0.3}{0.1} = 2.313 \times 3 = 6.939$. This is higher than 1.8.

    DC gain requirement: $K_c \frac{1-z_0}{1-p_0} = 1.8$.
    $K_c \frac{1-0.7}{1-0.9} = 1.8 \implies K_c \frac{0.3}{0.1} = 1.8 \implies K_c \times 3 = 1.8 \implies K_c = 0.6$.
    $D(z) = 0.6 \frac{z - 0.7}{z - 0.9}$.
    $D(1) = 0.6 \frac{0.3}{0.1} = 0.6 \times 3 = 1.8$. This meets DC gain.

    **Check Phase Margin:**
    $L_{comp}(z) = 0.6 \frac{z - 0.7}{z - 0.9} \frac{1}{z - 0.8}$.
    Check at $\omega_{gc} T = 1.159$ rad.
    $z = 0.4 + j0.9165$.
    $L(z) = \frac{1}{z - 0.8}$. $|L(z)| = 1$, Phase$(L(z)) = 66.42^\circ$.
    $D(z) = 0.6 \frac{z - 0.7}{z - 0.9}$.
    $D(z) = 0.6 \frac{0.4 + j0.9165 - 0.7}{0.4 + j0.9165 - 0.9} = 0.6 \frac{-0.3 + j0.9165}{-0.5 + j0.9165}$.
    Numerator: $-0.3 + j0.9165$. Mag = $\sqrt{(-0.3)^2 + 0.9165^2} = \sqrt{0.09 + 0.84} = \sqrt{0.93} = 0.964$.
    Phase of numerator: $\arctan(\frac{0.9165}{-0.3}) \approx -71.97^\circ$.
    Denominator: $-0.5 + j0.9165$. Mag = $\sqrt{(-0.5)^2 + 0.9165^2} = \sqrt{0.25 + 0.84} = \sqrt{1.09} = 1.044$.
    Phase of denominator: $\arctan(\frac{0.9165}{-0.5}) \approx -61.40^\circ$.

    $D(z) = 0.6 \frac{0.964 \angle -71.97^\circ}{1.044 \angle -61.40^\circ}$.
    $|D(z)| = 0.6 \times \frac{0.964}{1.044} \approx 0.6 \times 0.923 \approx 0.554$.
    Phase of $D(z) = -71.97^\circ - (-61.40^\circ) = -10.57^\circ$.

    $|L_{comp}(z)| = |D(z)| \cdot |L(z)| \approx 0.554 \times 1 = 0.554$.
    Phase of $L_{comp}(z) = \text{Phase}(D(z)) + \text{Phase}(L(z)) \approx -10.57^\circ + 66.42^\circ = 55.85^\circ$.
    Since $|L_{comp}(z)| < 1$ at $\omega T = 1.159$ rad, the gain crossover frequency is higher. This is not ideal for a lag compensator.

    **General Observation:** Lag compensators increase low-frequency gain. They introduce phase lag at higher frequencies. To maintain stability, the gain crossover frequency is usually shifted to a lower frequency.

---

### **5. Implementation of Lag Compensator**

#### **5.1 Difference Equation**
The transfer function of the lag compensator is $D(z) = K_c \frac{z - z_0}{z - p_0}$.
To implement this, we can rewrite it as:
$D(z) = K_c \frac{1 - z_0 z^{-1}}{1 - p_0 z^{-1}}$

Cross-multiplying:
$D(z)(1 - p_0 z^{-1}) = K_c (1 - z_0 z^{-1})$
$D(z) - p_0 z^{-1} D(z) = K_c - K_c z_0 z^{-1}$

Let $y(k)$ be the output and $x(k)$ be the input at discrete time $k$.
$Y(z) = D(z)X(z)$.
$Y(z) - p_0 z^{-1} Y(z) = K_c X(z) - K_c z_0 z^{-1} X(z)$

Taking the inverse Z-transform:
$y(k) - p_0 y(k-1) = K_c x(k) - K_c z_0 x(k-1)$

Rearranging to find $y(k)$:
$y(k) = K_c x(k) - K_c z_0 x(k-1) + p_0 y(k-1)$

This is the difference equation for the lag compensator.

#### **5.2 Block Diagram Implementation**

The difference equation can be implemented using adders, multipliers, and delay elements (integrators).

```
        +-------+
x(k) ---| K_c   |----\
        +-------+    |
                     | + ----- y(k)
        +-------+    |/
x(k-1)--| -K_c*z0|----/
        +-------+    /\
                     |
y(k-1)--| p0      |----/
        +-------+
```

---

### **6. Advantages and Disadvantages of Lag Compensators**

#### **6.1 Advantages**
*   **Improves Steady-State Accuracy:** Significantly reduces steady-state error by increasing low-frequency gain.
*   **Minimal Impact on Transient Response:** If the zero and pole are placed close to each other and not near dominant closed-loop poles, the transient response is only slightly affected.
*   **Can Improve Stability Margins:** By shifting the gain crossover frequency to a lower frequency, it can sometimes increase phase margin, though this is not its primary purpose.

#### **6.2 Disadvantages**
*   **Reduces Bandwidth:** The addition of the pole and zero, especially at lower frequencies, generally reduces the system's bandwidth, leading to a slower response.
*   **Phase Lag:** Introduces additional phase lag at higher frequencies, which can reduce the phase margin if not carefully designed.
*   **Limited Impact on Transient Response:** Not effective for significantly improving transient response characteristics like reducing overshoot or settling time.

---

### **7. Practice Questions**

**Question 1:**
A discrete-time system has an open-loop pulse transfer function $L(z) = \frac{0.5}{z-0.5}$ with a sampling period $T=1$. The system is of type 0.
(a) Calculate the steady-state error for a unit step input.
(b) Design a lag compensator $D(z) = K_c \frac{z - z_0}{z - p_0}$ such that the steady-state error for a unit step input is reduced to $0.05$ and the phase margin is at least $50^\circ$. Assume the uncompensated system has a phase margin of $60^\circ$ at its gain crossover frequency.

**Question 2:**
Explain the primary role of a lag compensator in discrete-time control systems. How does it affect the system's steady-state error and transient response?

**Question 3:**
Derive the difference equation for a discrete-time lag compensator with the transfer function $D(z) = K_c \frac{z - z_0}{z - p_0}$.

---

### **8. Answers to Practice Questions**

**Answer 1:**
Given $L(z) = \frac{0.5}{z-0.5}$, $T=1$. Type 0 system.
(a) **Steady-state error for unit step input:**
$K_p = \lim_{z \to 1} L(z) = \frac{0.5}{1 - 0.5} = \frac{0.5}{0.5} = 1$.
$e_{ss} = \frac{1}{1 + K_p} = \frac{1}{1 + 1} = \frac{1}{2} = 0.5$.

(b) **Design a lag compensator:**
We need $e_{ss} \le 0.05$, which means $1+K_p \ge \frac{1}{0.05} = 20$, so $K_p \ge 19$.
The current $K_p = 1$. We need to increase the DC gain by a factor of $19/1 = 19$.
The compensator's DC gain is $D(1) = K_c \frac{1 - z_0}{1 - p_0}$.
The compensated system's DC gain $K_{p,comp} = K_p \cdot D(1) = 1 \cdot K_c \frac{1 - z_0}{1 - p_0}$.
So, $K_c \frac{1 - z_0}{1 - p_0} = 19$.

**Choosing $z_0$ and $p_0$:**
Let the uncompensated system have a gain crossover frequency $\omega_{gc}T$. Assume $\omega_{gc}T = 1.0$ rad, where $PM=60^\circ$.
We need to shift the gain crossover frequency to a lower value to ensure the phase margin requirement is met after adding phase lag from the compensator.
Let the zero $z_0$ be placed at $\omega_{gc}T = 1.0$ rad. So $z_0 = e^{j1.0} = 0.5403 + j0.8415$. This is a complex zero, which is not typical for lag compensators.

**Typically, $z_0$ and $p_0$ are real.**
Let's assume the uncompensated system's gain crossover frequency is $\omega_{gc}T$ such that $|L(e^{j\omega_{gc}T})|=1$ and $PM = 60^\circ$.
We need to increase DC gain by 19. $K_c \frac{1-z_0}{1-p_0} = 19$.
Let's choose $z_0 = 0.5$.
We need to choose $p_0$ such that $0.5 < p_0 < 1$.
The ratio $\beta = p_0/z_0 = p_0/0.5$.
The gain increase is $K_c/\beta = K_c \frac{z_0}{p_0} = 19$.
$K_c = 19 \beta = 19 (p_0/0.5) = 38 p_0$.

From $K_c \frac{1-z_0}{1-p_0} = 19$:
$K_c \frac{1-0.5}{1-p_0} = 19 \implies K_c \frac{0.5}{1-p_0} = 19 \implies K_c = 38 (1-p_0)$.

Equating the two expressions for $K_c$:
$38 p_0 = 38 (1-p_0)$
$p_0 = 1 - p_0 \implies 2 p_0 = 1 \implies p_0 = 0.5$.
This results in $p_0 = z_0$, which is a pure gain $K_c = 19$. This is not a lag compensator.

**Let's re-think the placement based on frequency response.**
We need to increase the DC gain by 19. This means the magnitude plot needs to be lifted by $20 \log_{10}(19) \approx 25.6$ dB.
The lag compensator adds phase lag. To maintain $PM \ge 50^\circ$, the gain crossover frequency should be at a frequency where the uncompensated system has a phase margin greater than $50^\circ$ plus the phase lag introduced by the compensator.
A common approach is to choose $z_0$ and $p_0$ such that the frequency response of the compensator has minimal phase lag at the new gain crossover frequency.
Let's choose $z_0 = 0.7$.
$K_c \frac{1-0.7}{1-p_0} = 19 \implies K_c \frac{0.3}{1-p_0} = 19 \implies K_c = \frac{19}{0.3}(1-p_0) = 63.33(1-p_0)$.
Also, $K_c = 19 \beta = 19 (p_0/z_0) = 19 (p_0/0.7) = 27.14 p_0$.
$63.33(1-p_0) = 27.14 p_0$
$63.33 - 63.33 p_0 = 27.14 p_0$
$63.33 = 90.47 p_0 \implies p_0 = 63.33 / 90.47 \approx 0.70$. This is again $p_0 = z_0$.

**Let's pick $p_0$ first, based on the pole of the system.**
The pole of $L(z) = \frac{0.5}{z-0.5}$ is at $z=0.5$.
Let's choose $p_0$ slightly further inside, e.g., $p_0 = 0.7$.
Then $K_c = 19 \beta = 19 (p_0/z_0) = 19 (0.7/z_0)$.
$K_c \frac{1-z_0}{1-p_0} = 19 \implies K_c \frac{1-z_0}{1-0.7} = 19 \implies K_c \frac{1-z_0}{0.3} = 19 \implies K_c = 5.7 / (1-z_0)$.
$19 (0.7/z_0) = 5.7 / (1-z_0)$
$13.3 / z_0 = 5.7 / (1-z_0)$
$13.3 (1-z_0) = 5.7 z_0$
$13.3 - 13.3 z_0 = 5.7 z_0$
$13.3 = 19 z_0 \implies z_0 = 13.3 / 19 \approx 0.70$. This implies $z_0 = p_0$.

There seems to be an issue with the problem parameters or assumptions about pole/zero placement.
**Let's use a more standard design parameter choice.**
Place $z_0$ at a frequency that introduces a small phase lag.
Let $z_0 = 0.7$.
Let $\beta = 5$. Then $p_0 = 5 \times 0.7 = 3.5$. Still outside.

**Let's try placing $p_0$ closer to 1.**
Let $p_0 = 0.9$. Then $\beta = p_0/z_0 = 0.9/z_0$.
$K_c = 19 \beta = 19 (0.9/z_0) = 17.1/z_0$.
$K_c \frac{1-z_0}{1-p_0} = 19 \implies K_c \frac{1-z_0}{1-0.9} = 19 \implies K_c \frac{1-z_0}{0.1} = 19 \implies K_c = 1.9(1-z_0)$.
$17.1/z_0 = 1.9(1-z_0)$
$17.1 = 1.9 z_0 (1-z_0) = 1.9 z_0 - 1.9 z_0^2$.
$1.9 z_0^2 - 1.9 z_0 + 17.1 = 0$.
Discriminant $b^2 - 4ac = (-1.9)^2 - 4(1.9)(17.1) = 3.61 - 129.96 < 0$. No real solution for $z_0$.

**Conclusion for Answer 1(b):** The specific requirements might lead to unstable or difficult-to-achieve designs if the pole/zero placement is not carefully chosen, or if the initial system does not have sufficient phase margin to begin with. For this problem, let's assume a standard design where $z_0$ and $p_0$ are chosen such that the phase lag at the original gain crossover frequency is minimal, and then the gain $K_c$ is adjusted. Without knowing the original gain crossover frequency and phase margin accurately, it's hard to proceed with a precise numerical design. However, the procedure involves:
1.  Determine the required DC gain increase (factor of 19).
2.  Choose $z_0$ and $p_0$ such that $0 < z_0 < p_0 < 1$. A common heuristic is to place $z_0$ near the dominant pole or at the desired new gain crossover frequency and $p_0$ further inside.
3.  Calculate $K_c$ using the DC gain requirement.
4.  Verify the phase margin of the compensated system, iterating on $z_0$ and $p_0$ if necessary.

**Answer 2:**
The primary role of a lag compensator is to improve **steady-state accuracy** by increasing the low-frequency gain of the open-loop system. This reduces the steady-state error for step and ramp inputs.

*   **Effect on Steady-State Error:** By adding a pole at $z=p_0$ and a zero at $z=z_0$ with $|z_0| < |p_0|$, the lag compensator increases the DC gain of the system (gain at $z=1$). This directly increases the position error constant ($K_p$) or velocity error constant ($K_v$) for Type 0 and Type 1 systems, respectively, leading to a smaller steady-state error.

*   **Effect on Transient Response:** Lag compensators generally have a **minimal impact on the transient response** if the zero and pole are placed close to each other and far from the dominant poles of the system. The zero tends to improve the transient response by adding phase lead, while the pole tends to degrade it by adding phase lag. For a lag compensator, the pole is further from the origin than the zero, so the phase lag dominates at higher frequencies. This can lead to a slight decrease in the system's bandwidth and potentially a small increase in settling time. However, the primary intention is not to improve transient response but to improve steady-state accuracy.

**Answer 3:**
The transfer function of a discrete-time lag compensator is given by:
$D(z) = K_c \frac{z - z_0}{z - p_0}$

To derive the difference equation, we can rewrite this in terms of $z^{-1}$:
$D(z) = K_c \frac{1 - z_0 z^{-1}}{1 - p_0 z^{-1}}$

Let $Y(z)$ be the Z-transform of the output $y(k)$ and $X(z)$ be the Z-transform of the input $x(k)$. So, $Y(z) = D(z)X(z)$.
$Y(z) = K_c \frac{1 - z_0 z^{-1}}{1 - p_0 z^{-1}} X(z)$

Multiply both sides by $(1 - p_0 z^{-1})$:
$Y(z) (1 - p_0 z^{-1}) = K_c (1 - z_0 z^{-1}) X(z)$

Distribute $Y(z)$ and $X(z)$:
$Y(z) - p_0 z^{-1} Y(z) = K_c X(z) - K_c z_0 z^{-1} X(z)$

Now, take the inverse Z-transform. Recall that $z^{-1} Y(z)$ corresponds to a time shift $y(k-1)$, and $z^{-1} X(z)$ corresponds to $x(k-1)$:
$y(k) - p_0 y(k-1) = K_c x(k) - K_c z_0 x(k-1)$

Rearrange the equation to solve for the current output $y(k)$:
$y(k) = K_c x(k) - K_c z_0 x(k-1) + p_0 y(k-1)$

This is the difference equation for the discrete-time lag compensator.

---

### **9. Key Points to Remember**

*   **Purpose:** Lag compensators improve steady-state accuracy by increasing low-frequency gain.
*   **Transfer Function:** $D(z) = K_c \frac{z - z_0}{z - p_0}$, where $0 < z_0 < p_0 < 1$.
*   **Design Goal:** Reduce steady-state error to acceptable levels.
*   **Design Procedure (Frequency Domain):**
    *   Analyze the uncompensated system (steady-state error, frequency response).
    *   Determine the required DC gain increase.
    *   Choose $z_0$ and $p_0$ (often with $z_0$ near the system's pole or original gain crossover frequency).
    *   Calculate $K_c$ to meet the DC gain requirement.
    *   Verify the phase margin and iterate if necessary.
*   **Pole-Zero Placement:** The choice of $z_0$ and $p_0$ is critical for achieving the desired performance and maintaining stability. Placing them too close to the unit circle can cause instability.
*   **Effect on Bandwidth:** Lag compensators tend to reduce system bandwidth.
*   **Implementation:** The compensator is realized as a digital filter using a difference equation.
*   **Comparison to Lead Compensator:** Lead compensators improve transient response (phase margin), while lag compensators improve steady-state accuracy.

---

### **10. Alignment with Course Outcomes**

*   **CO1 (Model and analyse discrete-time system using pulse transfer function approach):** The understanding of $G(z)$ and $L(z)$, and the analysis of system properties like steady-state error and phase margin from these transfer functions are central to this topic.
*   **CO2 (Design digital compensators for linear systems):** This entire topic is dedicated to the design process of a specific digital compensator (lag compensator) to meet performance specifications.
*   **CO3 & CO4 (State Space Approach):** While this topic focuses on the pulse transfer function approach, the fundamental concepts of system performance and compensation are transferable to the state-space domain. However, the direct design methods discussed here are not state-space based.

---
This concludes the study notes for the Design of Lag Compensator in Discrete-Time Control Systems. Remember to consult your textbooks (Philips & Nagle, Ogata, Gopal) for more detailed examples and theoretical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
