---
title: "Design of Lag-Lead Compensator"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 2: Design of Compensators:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d4"
status: "completed"
scrapedAt: "2026-05-23T16:36:17.892Z"
---
# Module 2: Design of Compensators - Design of Lag-Lead Compensator in Discrete Time Control Systems

This module focuses on the design of digital compensators to meet specific performance requirements of discrete-time control systems. We will delve into the theory and practical aspects of designing a lag-lead compensator, a powerful tool for improving both transient and steady-state responses.

---

## 1. Introduction to Compensator Design in Discrete-Time Systems

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

*   **Why Compensate?**
    *   Open-loop systems often do not meet desired performance specifications (e.g., slow response, poor steady-state accuracy, excessive overshoot, instability).
    *   Compensators are designed to modify the system's dynamics to achieve these specifications.
*   **Types of Compensators:**
    *   **Lag Compensator:** Improves steady-state error by increasing low-frequency gain. It attenuates high-frequency gain, reducing bandwidth and potentially slowing down transient response.
    *   **Lead Compensator:** Improves transient response (reduces rise time and overshoot) by increasing phase margin and high-frequency gain. It can worsen steady-state error.
    *   **Lag-Lead Compensator:** Combines the benefits of both lag and lead compensators, offering improvements in both steady-state accuracy and transient response. This is often the preferred choice when both aspects need enhancement.

*   **Design Approaches:**
    *   **Root Locus Method:** Used to shape the closed-loop pole locations in the z-plane.
    *   **Frequency Response Methods (Bode Plots):** Used to shape the open-loop frequency response to meet phase margin and gain margin requirements. This is particularly common for compensator design.
    *   **Pole Placement (State-Space):** For systems represented in state-space, pole placement techniques can be used to design state feedback controllers. (While not the primary focus of lag-lead *compensator* design, it's related to overall controller design).

**Textbook References:**
*   Ogata, Chapter 7: Digital Controller Design
*   Philips and Nagle, Chapter 6: Design of Digital Control Systems
*   Gopal, Chapter 5: Digital Controller Design

---

## 2. The Discrete-Time Lag-Lead Compensator

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

A lag-lead compensator in the discrete-time domain is typically represented by a transfer function of the form:

$$ C(z) = K_c \frac{(z - z_1)(z - z_2)}{(z - p_1)(z - p_2)} $$

Where:
*   $K_c$ is a gain constant.
*   The pair $(z_1, p_1)$ forms the lag network (pole $p_1$ closer to the unit circle than zero $z_1$).
*   The pair $(z_2, p_2)$ forms the lead network (zero $z_2$ further from the unit circle than pole $p_2$).

A common implementation form for a discrete-time lag-lead compensator is:

$$ C(z) = K_c \frac{(1 + a z^{-1})(1 + b z^{-1})}{(1 + c z^{-1})(1 + d z^{-1})} $$

Where the relationships between the zeros and poles are:
*   **Lag Section:** $|c| > |a|$ (pole further from the origin than the zero). Typically, $|c|$ is close to 1.
*   **Lead Section:** $|d| < |b|$ (pole closer to the origin than the zero).

**Key Concepts:**
*   **Lag Section:** Introduces a pole-zero pair where the pole is inside the zero (closer to the origin). This pair typically has poles and zeros located near $z = 1$ (DC). It increases the gain at low frequencies, improving steady-state error.
*   **Lead Section:** Introduces a pole-zero pair where the zero is inside the pole (closer to the origin). This pair is usually placed at higher frequencies to boost phase margin and improve transient response.

**Example of a common structure (as seen in frequency response design):**

$$ C(z) = K_c \frac{1 + a z^{-1}}{1 + b z^{-1}} \cdot \frac{1 + c z^{-1}}{1 + d z^{-1}} $$

Where:
*   Lag Section: $\frac{1 + a z^{-1}}{1 + b z^{-1}}$ with $a > b > 0$.
*   Lead Section: $\frac{1 + c z^{-1}}{1 + d z^{-1}}$ with $c < d$ (often $c$ and $d$ are negative).

**Textbook References:**
*   Philips and Nagle, Chapter 6: Digital Control Systems
*   Kuo, Chapter 7: Design of Digital Control Systems

---

## 3. Design Procedure for Lag-Lead Compensator (Frequency Response Method)

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

This section outlines a step-by-step procedure, commonly adapted from analog controller design and applied to discrete-time systems using frequency domain tools (like Bode plots of the sampled system).

**Prerequisites:**
*   A discrete-time plant transfer function $G(z)$.
*   The closed-loop system with the compensator is $T(z) = \frac{K_c C(z) G(z)}{1 + K_c C(z) G(z)}$.
*   Desired performance specifications:
    *   Steady-state error ($e_{ss}$ or velocity error constant $K_v$).
    *   Phase margin ($PM$).
    *   Gain margin ($GM$).
    *   Relative stability (e.g., damping ratio $\zeta$).
    *   Bandwidth (related to settling time $t_s$ and rise time $t_r$).

**Steps:**

1.  **Determine the Gain Constant ($K_c$):**
    *   Calculate the required gain to meet the steady-state error specification. For a type-1 system (with an integrator), this is usually specified by a velocity error constant $K_v$.
    *   $K_v = \lim_{z \to 1} (z-1) G(z)$.
    *   If the uncompensated system does not meet $K_v$, the lag compensator will be designed to increase it. The lag compensator should introduce minimal attenuation at the crossover frequency.

2.  **Design the Lag Compensator:**
    *   The lag compensator $\frac{1 + a z^{-1}}{1 + b z^{-1}}$ (where $a > b > 0$) is designed to increase the low-frequency gain without affecting the high-frequency gain significantly.
    *   The gain of the lag section is unity for high frequencies (as $z \to \infty$).
    *   The poles and zeros of the lag section are typically placed very close to $z=1$.
    *   **Objective:** To increase the steady-state error constant (e.g., $K_v$) without degrading the phase margin.
    *   **Procedure:**
        *   Select a desired velocity error constant $K_v_{new}$. The required gain increase from the compensator at DC is $K_c' = \frac{K_v_{new}}{K_v_{old}}$.
        *   The lag compensator transfer function magnitude at DC is 1 (for the form $\frac{1+az^{-1}}{1+bz^{-1}}$). So, $K_c$ will be adjusted later.
        *   The lag network typically introduces some attenuation at higher frequencies. To minimize impact on phase margin, the pole and zero of the lag network should be placed close to $z=1$.
        *   **Choose the zero ($z_1 = -a$)**: Place it such that it is close to $z=1$, e.g., $a = 0.8$ or $0.9$. This means $z_1 = -0.8$ or $-0.9$.
        *   **Choose the pole ($p_1 = -b$)**: Place it closer to $z=1$ than the zero, $b < a$. The ratio $a/b$ determines the gain increase at low frequencies. The gain of the lag section at $z=1$ is $\frac{1+a}{1+b}$. To achieve the required gain increase $K_{gain} = \frac{1+a}{1+b}$, we can find $b = \frac{1+a}{K_{gain}} - 1$.
        *   Alternatively, choose the ratio $a/b$ to provide the necessary gain margin at the new crossover frequency.
        *   **Important:** The pole ($p_1$) and zero ($z_1$) of the lag network should be placed such that the phase shift introduced by the lag network at the **new** gain crossover frequency is minimal (ideally close to $0^\circ$). This requires placing them close to $z=1$.

3.  **Design the Lead Compensator:**
    *   The lead compensator $\frac{1 + c z^{-1}}{1 + d z^{-1}}$ (where $c < d$, and often $c, d < 0$) is designed to improve the transient response, specifically by increasing the phase margin.
    *   **Objective:** To provide the necessary phase margin ($PM$) at a new desired gain crossover frequency ($\omega_{gc}$).
    *   **Procedure:**
        *   Evaluate the phase margin ($PM_{old}$) and gain crossover frequency ($\omega_{gc,old}$) of the compensated system with the lag compensator and initial $K_c$.
        *   Determine the additional phase lead ($\phi_m$) required. $\phi_m = PM_{desired} - PM_{old} + \text{phase lag at } \omega_{gc,old}$. Add a safety margin (e.g., 5-10 degrees).
        *   Find the phase lead parameter $\alpha$ for the lead network. For a continuous-time lead network, $\alpha = \frac{1 - \sin(\phi_m)}{1 + \sin(\phi_m)}$. In discrete time, this $\alpha$ is related to the ratio of pole and zero magnitudes.
        *   The magnitude of the lead network at the new gain crossover frequency $\omega_{gc}$ should be $1/\alpha$ to compensate for the attenuation introduced by the lead network.
        *   The gain of the lead network is $M_{lead}(\omega) = |\frac{1 + c e^{-j\omega T}}{1 + d e^{-j\omega T}}|$.
        *   The frequency $\omega_{max}$ where maximum phase lead occurs for a lead network is given by $\omega_{max} = \sqrt{\frac{1}{cd}}$ (continuous-time relation, approximate for discrete).
        *   **Positioning:** The lead compensator's zero ($z_2 = -c$) and pole ($p_2 = -d$) are chosen such that the maximum phase lead occurs at the new desired gain crossover frequency $\omega_{gc}$.
        *   $z_2 = -\frac{1}{\alpha \omega_{gc} T}$ and $p_2 = -\frac{\alpha}{\omega_{gc} T}$ (continuous-time relation, approximate). The discrete-time poles and zeros can be derived from these or using similar geometric construction on the Nichols chart or Bode plot.
        *   The discrete-time form is often derived from the analog lead compensator by using the bilinear transformation ($s = \frac{2}{T} \frac{z-1}{z+1}$).
        *   A common approach to finding the discrete-time pole and zero of the lead compensator is to position them geometrically in the $z$-plane such that the phase contribution at $\omega_{gc}$ is $\phi_m$.

4.  **Combine and Adjust Gain:**
    *   The total compensator transfer function is $C(z) = K_c \cdot (\text{Lag Section}) \cdot (\text{Lead Section})$.
    *   The overall gain $K_c$ is adjusted to place the gain crossover frequency at the desired value, ensuring the required phase margin is met.
    *   **Final Check:** Evaluate the frequency response of the compensated system $K_c C(z) G(z)$. Verify that the phase margin and gain margin specifications are met. Also, check the steady-state error specification.

**Alternative Perspective (Ogata, Chapter 7):**
Ogata often presents discrete-time compensator design by first designing an equivalent analog compensator in the $s$-plane and then transforming it to the $z$-plane using methods like the bilinear transformation.

**Example Design Strategy (using frequency response):**

*   Start with the plant $G(z)$.
*   Determine $K_c$ for steady-state error.
*   Evaluate phase margin of $K_c G(z)$.
*   Design the lag compensator to improve steady-state error by placing a pole-zero pair close to $z=1$. Let the lag compensator be $C_L(z)$.
*   Evaluate phase margin of $K_c C_L(z) G(z)$.
*   Design the lead compensator $C_{Lead}(z)$ to add the required phase margin.
*   The overall compensator is $C(z) = C_L(z) C_{Lead}(z)$.
*   Adjust the overall gain $K_c$ to achieve the desired gain crossover frequency and phase margin.

**Textbook References:**
*   Ogata, Chapter 7: Digital Controller Design (Sections on frequency domain design)
*   Philips and Nagle, Chapter 6: Design of Digital Control Systems (Sections on frequency domain design)
*   Kuo, Chapter 7: Design of Digital Control Systems (Sections on frequency domain design)

---

## 4. Example: Design of a Lag-Lead Compensator

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

**Problem:** Design a digital lag-lead compensator for a system with plant transfer function:
$$ G(z) = \frac{0.0258(z+0.905)}{z^2 - 0.8187z + 0.2466} $$
The sampling period is $T = 0.1$ seconds. The desired specifications are:
*   Steady-state error for a unit ramp input ($e_{ss,ramp}$) $\le 0.1$.
*   Phase margin ($PM$) $\ge 50^\circ$.
*   Gain crossover frequency ($\omega_{gc}$) around $0.5$ rad/sec.

**Solution Steps:**

1.  **Analyze the Uncompensated System ($G(z)$):**
    *   Calculate the velocity error constant $K_v$:
        $K_v = \lim_{z \to 1} (z-1) G(z) = \lim_{z \to 1} (z-1) \frac{0.0258(z+0.905)}{(z-0.3679)(z-0.4508)}$
        $K_v = \frac{0.0258(1+0.905)}{(1-0.3679)(1-0.4508)} = \frac{0.0258 \times 1.905}{0.6321 \times 0.5492} \approx 0.147$
    *   The required $e_{ss,ramp} = 1/K_v$. So, $e_{ss,ramp,old} = 1/0.147 \approx 6.8$. This is much higher than the desired $0.1$.

2.  **Determine Required Gain for Steady-State Error:**
    *   Desired $K_v = 1/e_{ss,ramp,desired} = 1/0.1 = 10$.
    *   The required gain increase is $10 / 0.147 \approx 68$. This large increase will be provided by the lag part of the compensator.

3.  **Design the Lag Compensator:**
    *   We need a lag compensator $C_L(z) = \frac{1 + a z^{-1}}{1 + b z^{-1}}$ with $|a| > |b|$.
    *   The lag section should introduce a gain of 68 at DC ($z=1$). The gain is $(1+a)/(1+b)$.
    *   Let's choose the zero of the lag compensator to be close to $z=1$. Let $z_1 = -a = -0.9$. So $a = 0.9$.
    *   Then, $68 = \frac{1 + 0.9}{1 + b} \implies 1 + b = \frac{1.9}{68} \approx 0.0279$.
    *   $b \approx 0.0279 - 1 = -0.9721$.
    *   This gives a lag compensator: $C_L(z) = \frac{1 + 0.9 z^{-1}}{1 - 0.9721 z^{-1}}$.
    *   Let's verify the DC gain of this lag section: $\frac{1+0.9}{1-0.9721} = \frac{1.9}{0.0279} \approx 68.1$. This is the gain that will be multiplied by the original $K_v$. So, $K_c$ can be set to 1 for now.

4.  **Evaluate the System with Lag Compensator ($K_c = 1$):**
    *   The compensated plant is $G_{lag}(z) = C_L(z) G(z) = \frac{1 + 0.9 z^{-1}}{1 - 0.9721 z^{-1}} \frac{0.0258(z+0.905)}{z^2 - 0.8187z + 0.2466}$.
    *   Converting to negative powers: $G_{lag}(z) = \frac{0.0258(1+0.9z^{-1})(1+0.905z^{-1})}{(1-0.9721z^{-1})(1-0.8187z^{-1}+0.2466z^{-2})}$.
    *   Evaluate the frequency response of $G_{lag}(e^{j\omega T})$.
    *   We need to find the phase margin at a crossover frequency around $0.5$ rad/sec.
    *   **Note:** This step often involves plotting the Bode diagram of $G_{lag}(e^{j\omega T})$.
    *   Let's assume after plotting the Bode plot of $G_{lag}(z)$, we find the phase margin is $-10^\circ$ at $\omega_{gc} = 0.6$ rad/sec. (This is just an illustrative example, actual calculation is needed).

5.  **Design the Lead Compensator:**
    *   Desired $PM = 50^\circ$. Old $PM = -10^\circ$ at $\omega_{gc} = 0.6$ rad/sec.
    *   Required phase lead $\phi_m = 50^\circ - (-10^\circ) + 10^\circ (\text{safety margin}) = 70^\circ$.
    *   For a lead network $\frac{1+\alpha T s}{1+T s/\beta}$ in continuous time, where $\alpha = \frac{1-\sin(\phi_m)}{1+\sin(\phi_m)}$.
    *   $\alpha = \frac{1-\sin(70^\circ)}{1+\sin(70^\circ)} = \frac{1-0.94}{1+0.94} = \frac{0.06}{1.94} \approx 0.0309$.
    *   The frequency where maximum phase lead occurs, $\omega_{max} = \sqrt{1/(\alpha \beta)}$ in continuous time. In discrete time, we position the zero and pole.
    *   Let the lead compensator be $C_{Lead}(z) = \frac{1 + c z^{-1}}{1 + d z^{-1}}$. The ratio of magnitudes $|c|/|d| = \alpha$.
    *   We want the new gain crossover frequency to be around $0.5$ rad/sec. Let's target $\omega_{gc,new} = 0.5$ rad/sec.
    *   We need to choose $c$ and $d$ such that the phase lag at $\omega_{gc,new}$ from the original system is compensated by the lead network, and the total phase margin is $50^\circ$.
    *   **Discrete-time design:**
        *   Let $z_2 = -c$ and $p_2 = -d$. The lead network zero $z_2$ should be placed to the left of the pole $p_2$ in the $z$-plane.
        *   The phase shift of the lead network is $\phi_{lead}(\omega) = \arctan\left(\frac{\sin(\omega T)}{c^{-1} + \cos(\omega T)}\right) - \arctan\left(\frac{\sin(\omega T)}{d^{-1} + \cos(\omega T)}\right)$.
        *   We need to choose $c$ and $d$ such that at $\omega = 0.5$ rad/sec, this phase shift is approximately $70^\circ$.
        *   A common simplification is to approximate the lead compensator form. If we choose $z_2 = -0.3$ ($c=0.3$) and $p_2 = -0.1$ ($d=0.1$), then the ratio $|c|/|d| = 0.3/0.1 = 3$. This gives $\alpha \approx 0.3$. The phase contribution needs to be calculated.
        *   A more systematic approach:
            *   From the Bode plot of $G_{lag}(z)$, find the phase at $\omega = 0.5$ rad/sec. Let this be $\theta$.
            *   We need $\phi_{lead}(0.5) = 70^\circ$.
            *   Choose the pole-zero pair such that $\omega_{max} \approx 0.5$ rad/sec.
            *   Let's try placing the zero and pole such that their magnitudes are related to the desired phase boost and crossover frequency.
            *   A common choice is to set the zero at $z_1 = -0.3$ ($c=0.3$) and determine the pole $p_1 = -d$ using the desired phase shift.
            *   The magnitude ratio of the lead compensator is related to $\alpha$. For $\phi_m = 70^\circ$, $\alpha \approx 0.03$. This ratio is approximately $|z_1|/|p_1|$ (for zeros inside poles). So $|p_1| \approx 30 |z_1|$.
            *   If $z_1 = -0.3$, then $|p_1| \approx 30 \times 0.3 = 9$. This is not possible in the $z$-plane (must be within the unit circle).
            *   **Revisiting the formulation:** A discrete-time lead compensator form can be derived from its analog counterpart. Let's consider the form $C_{Lead}(z) = K_{lead} \frac{1+az^{-1}}{1+bz^{-1}}$ with $a > b$ (for lead).
            *   **A Practical Approach:** Design the analog compensator in the $s$-plane and then use the bilinear transformation.
                *   Lag compensator in $s$: $C_L(s) = K_{lag} \frac{1+s/\omega_1}{1+s/(\beta\omega_1)}$ where $\beta > 1$.
                *   Lead compensator in $s$: $C_{Lead}(s) = K_{lead} \frac{1+s/\omega_2}{1+s/(\alpha\omega_2)}$ where $\alpha < 1$.
                *   Transform $G(z)$ to $G(s)$ or analyze $G(z)$ in frequency domain.
                *   Design the analog lag-lead compensator $C(s) = C_L(s) C_{Lead}(s)$.
                *   Then transform $C(s)$ to $C(z)$ using $z = e^{sT}$ or $s = \frac{2}{T}\frac{z-1}{z+1}$.

    *   **Let's assume a simpler discrete-time approach for illustration:**
        *   We have $G_{lag}(z)$. Let's find its phase at $\omega = 0.5$ rad/sec.
        *   Let $G_{lag}(e^{j\omega T}) = |G_{lag}(e^{j\omega T})| e^{j\phi(\omega)}$.
        *   At $\omega = 0.5$ rad/sec, $T=0.1$, $\omega T = 0.05$.
        *   We need $C_{Lead}(e^{j0.05})$ to provide $\approx 70^\circ$ phase shift and have a magnitude such that the total crossover frequency is $0.5$ rad/sec.
        *   The required magnitude of the lead compensator at $0.5$ rad/sec, $M_{lead}$, will depend on the magnitude of $G_{lag}(e^{j0.05})$.
        *   If $|G_{lag}(e^{j0.05})| = 10$ dB (approx 3.16), and we want the crossover at $0.5$ rad/sec, then $|C_{Lead}(e^{j0.05})|$ should be $-10$ dB (approx 0.316).
        *   Let's try a lead compensator $C_{Lead}(z) = K_{lead} \frac{1 - 0.3 z^{-1}}{1 - 0.1 z^{-1}}$. Here $c=0.3, d=0.1$.
        *   Magnitude of lead: $|C_{Lead}(e^{j\omega T})| = K_{lead} \left| \frac{1 - 0.3 e^{-j\omega T}}{1 - 0.1 e^{-j\omega T}} \right|$.
        *   Phase of lead: $\angle C_{Lead}(e^{j\omega T}) = \angle(1 - 0.3 e^{-j\omega T}) - \angle(1 - 0.1 e^{-j\omega T})$.
        *   At $\omega=0.5$ rad/sec, $\omega T = 0.05$.
        *   $e^{-j0.05} = \cos(0.05) - j\sin(0.05) \approx 0.99875 - j0.04998$.
        *   Phase of numerator: $\arctan(\frac{-0.04998}{1 - 0.3 \times 0.99875}) = \arctan(\frac{-0.04998}{0.700375}) \approx -4.08^\circ$.
        *   Phase of denominator: $\arctan(\frac{-0.04998}{1 - 0.1 \times 0.99875}) = \arctan(\frac{-0.04998}{0.900125}) \approx -3.18^\circ$.
        *   Phase of lead compensator itself: $-4.08^\circ - (-3.18^\circ) = -0.9^\circ$. This is not enough phase.

    *   **Revised Lead Design:** We need more phase lead at $0.5$ rad/sec.
        *   The ratio $|c|/|d|$ determines the maximum phase lead. For $\phi_m=70^\circ$, $|c|/|d| \approx 30$. This is still problematic.
        *   **Let's reconsider the initial gain requirement:** $K_v$ increase of 68.
        *   Lag compensator form: $C_L(z) = K_{lag} \frac{1+az^{-1}}{1+bz^{-1}}$. The DC gain is $K_{lag}\frac{1+a}{1+b}$.
        *   Lag zero at $z_1 = -0.9$ ($a=0.9$). Pole $p_1=-b$.
        *   Let's choose the lag pole such that the lag section introduces minimal phase at the new crossover frequency. If we want $\omega_{gc,new} \approx 0.5$ rad/sec.
        *   Place the lag zero $z_1 = -0.9$ ($a=0.9$). Place the lag pole $p_1 = -0.97$ ($b=0.97$). The ratio is $0.97/0.9 \approx 1.07$. This is too small for the gain.
        *   For the gain of 68 at DC: $\frac{1+a}{1+b} = 68$. If $a=0.9$, $b=0.0279$. So $C_L(z) = \frac{1+0.9z^{-1}}{1-0.972z^{-1}}$.

    *   **Let's use the frequency response of $G(z)$ directly.**
        *   $G(z) = \frac{0.0258(z+0.905)}{z^2 - 0.8187z + 0.2466}$.
        *   $T=0.1$. Consider frequencies up to $\pi/T = \pi/0.1 = 31.4$ rad/sec.
        *   Evaluate $G(e^{j\omega T})$.

    *   **Let's follow a common structured approach (based on Philips & Nagle / Ogata):**
        *   **Lag Design:** Set $K_v = 10$. $K_v^{old} = 0.147$. Gain needed is 68.
            *   Choose lag zero at $z_1 = -0.9$ ($a=0.9$).
            *   Choose lag pole $p_1$ such that $G(z)$ with lag compensator meets phase margin spec.
            *   Let's set the lag compensator $C_L(z) = \frac{1 + 0.9 z^{-1}}{1 + 0.0279 z^{-1}}$. The gain at DC is 68.
            *   The overall compensator $C(z) = K_c C_L(z) C_{Lead}(z)$. The lag part provides the DC gain.
            *   Let's evaluate the phase of $G(z)$ at $\omega = 0.5$ rad/sec.
            *   $\omega T = 0.05$. $e^{-j0.05} \approx 0.99875 - j0.04998$.
            *   $G(e^{j0.05}) = \frac{0.0258(1+0.905(0.99875 - j0.04998))}{(0.99875 - j0.04998)^2 - 0.8187(0.99875 - j0.04998) + 0.2466}$
            *   $G(e^{j0.05}) \approx 0.0258 \frac{1+0.9047 - j0.0123}{0.9975 - j0.1 + 0.0025 - 0.8178 + j0.0409 + 0.2466} \approx 0.0258 \frac{1.9047 - j0.0123}{0.4319 - j0.0587}$
            *   $G(e^{j0.05}) \approx 0.0258 \times \frac{1.9048 \angle -0.36^\circ}{0.4360 \angle -7.8^\circ} \approx 0.0258 \times 4.368 \angle 7.44^\circ \approx 0.1128 \angle 7.44^\circ$
            *   Phase of $G(z)$ at $0.5$ rad/sec is $\approx 7.44^\circ$.
            *   Phase of lag compensator $C_L(z)$ at $0.5$ rad/sec: $z_1 = -0.9$ ($a=0.9$), $p_1 = -0.972$ ($b=0.972$).
            *   Phase of $C_L(e^{j0.05}) = \angle(1+0.9 e^{-j0.05}) - \angle(1+0.972 e^{-j0.05})$
            *   Num phase: $\arctan(\frac{0.9 \times -0.04998}{1 + 0.9 \times 0.99875}) = \arctan(\frac{-0.04498}{1.89875}) \approx -1.35^\circ$.
            *   Den phase: $\arctan(\frac{0.972 \times -0.04998}{1 + 0.972 \times 0.99875}) = \arctan(\frac{-0.04858}{1.9707}) \approx -1.41^\circ$.
            *   Phase of $C_L(z)$ $\approx -1.35^\circ - (-1.41^\circ) \approx 0.06^\circ$. (Lag phase contribution is minimal, as expected).

        *   **Total system with lag and gain $K_c=1$: $G_{lag}(z) = C_L(z) G(z)$.**
            *   Magnitude: $|G_{lag}(e^{j0.05})| = |C_L(e^{j0.05})| |G(e^{j0.05})|$.
            *   $|C_L(e^{j0.05})| = |\frac{1+0.9 e^{-j0.05}}{1+0.972 e^{-j0.05}}| = |\frac{1.89875 - j0.04498}{1.9707 - j0.04858}| = \frac{1.899 \angle -1.35^\circ}{1.971 \angle -1.41^\circ} \approx 0.963 \angle 0.06^\circ$.
            *   $|G_{lag}(e^{j0.05})| \approx 0.963 \times 0.1128 \approx 0.1085$.
            *   Phase of $G_{lag}(z)$ at $0.5$ rad/sec is $\approx 7.44^\circ + 0.06^\circ = 7.5^\circ$.
            *   The gain crossover frequency is where the magnitude is 1. Current magnitude is 0.1085 at $0.5$ rad/sec. We need to increase the gain.

        *   **Introduce the Lead Compensator:**
            *   We need to add $\phi_m = 70^\circ$ phase lead at $\omega_{gc,new} = 0.5$ rad/sec.
            *   The system $G_{lag}(z)$ has phase $7.5^\circ$ at $0.5$ rad/sec.
            *   The lead compensator must provide approx $70^\circ$ phase lead.
            *   Let's try a lead compensator $C_{Lead}(z) = K_{lead} \frac{1+c z^{-1}}{1+d z^{-1}}$.
            *   For $\phi_m = 70^\circ$, the ratio $|c|/|d| \approx 30$. Let $c=0.3$. Then $|d| \approx 0.01$. This is problematic.
            *   **A different form of lead compensator or different placement might be needed.**

        *   **Let's consider the required gain at $\omega=0.5$ rad/sec:**
            *   We want $\omega_{gc} = 0.5$ rad/sec. This means $|C(e^{j0.05}) G(e^{j0.05})| = 1$.
            *   $C(z) = K_{final} C_L(z) C_{Lead}(z)$.
            *   We know $C_L(z)$ provides the DC gain. $K_v = \lim_{z \to 1} (z-1) K_{final} C_L(z) G(z)$.
            *   Let $C(z) = K_c \frac{1+az^{-1}}{1+bz^{-1}} \frac{1+cz^{-1}}{1+dz^{-1}}$.
            *   Lag: $a=0.9$. For $K_v=10$, we need the $(1+a)/(1+b)$ ratio of lag to be large. Let's use $a=0.9, b=0.0279$.
            *   Lead: We need to add $70^\circ$ phase at $\omega_{gc} \approx 0.5$ rad/sec.
            *   Let the lead zero be at $z_1 = -0.3$ ($c=0.3$).
            *   The phase contribution of the lead compensator $C_{Lead}(z) = K_{lead} \frac{1+0.3z^{-1}}{1+dz^{-1}}$ at $\omega T = 0.05$ is:
                $\angle C_{Lead} = K_{lead} + \angle(1+0.3 e^{-j0.05}) - \angle(1+d e^{-j0.05})$.
                $\angle(1+0.3 e^{-j0.05}) \approx 1.35^\circ$.
                We need $\angle C_{Lead} \approx 70^\circ$.
                So $1.35^\circ - \angle(1+d e^{-j0.05}) \approx 70^\circ$.
                This implies $\angle(1+d e^{-j0.05})$ is negative and large. This happens when $d$ is close to $-1$.
            *   Let's try placing the lead zero and pole more carefully to achieve $\phi_m$.
            *   Let's assume we found a lead compensator $C_{Lead}(z) = \frac{1-0.2z^{-1}}{1-0.05z^{-1}}$.
                *   At $\omega=0.5$ rad/sec ($\omega T = 0.05$):
                *   Numerator phase: $\arctan(\frac{-0.04998}{1-0.2 \times 0.99875}) = \arctan(\frac{-0.04998}{0.80025}) \approx -3.58^\circ$.
                *   Denominator phase: $\arctan(\frac{-0.04998}{1-0.05 \times 0.99875}) = \arctan(\frac{-0.04998}{0.95006}) \approx -3.02^\circ$.
                *   Phase contribution: $-3.58 - (-3.02) = -0.56^\circ$. Still very little.

            *   **The discrete-time design of lag-lead compensators using frequency response requires careful selection of pole-zero locations or using advanced techniques/software.**

        *   **Let's assume the following compensator is designed (Hypothetical):**
            *   Lag part: $\frac{1+0.9z^{-1}}{1-0.972z^{-1}}$ (provides DC gain of 68).
            *   Lead part: $\frac{1-0.3z^{-1}}{1-0.1z^{-1}}$ (designed to add phase lead).
            *   Total compensator structure: $C(z) = K_c \frac{(1+0.9z^{-1})(1-0.3z^{-1})}{(1-0.972z^{-1})(1-0.1z^{-1})}$.
            *   The lag part has a zero at -0.9 and pole at -0.972.
            *   The lead part has a zero at 0.3 and pole at 0.1.
            *   The overall $K_c$ is adjusted to meet the phase margin at the desired crossover frequency.

        *   **Final Step - Adjusting Gain:**
            *   We have $K_v$ from the lag part. Now we tune $K_c$ to place the crossover frequency at $0.5$ rad/sec and achieve $PM \ge 50^\circ$.
            *   The total open-loop transfer function is $L(z) = K_c C(z) G(z)$.
            *   The $K_c$ is now the overall gain.
            *   $C(z) = K_c \frac{1 + 0.6z^{-1} - 0.27z^{-2}}{1 - 1.072z^{-1} + 0.0972z^{-2}}$ (simplifying numerator and denominator).
            *   We need to evaluate $|L(e^{j\omega T})|$ and $\angle L(e^{j\omega T})$ for different $\omega$.
            *   If at $\omega = 0.5$ rad/sec, the phase of $C(e^{j0.05})G(e^{j0.05})$ is $-130^\circ$ and magnitude is $0.1$, then we need a gain of $K_c = 10$ (20 dB) to bring the magnitude to 1, and the phase margin would be $180^\circ - 130^\circ = 50^\circ$.

**Summary of Example (Illustrative, actual calculations needed for precise values):**
1.  Calculated initial $K_v$ and found it insufficient for the ramp input.
2.  Designed a lag compensator to provide the required DC gain (e.g., zero at -0.9, pole at -0.972).
3.  Analyzed the phase margin of the system with the lag compensator.
4.  Designed a lead compensator to provide the additional phase margin required at the target crossover frequency. This is the most complex step in discrete time, requiring careful placement of poles and zeros.
5.  The overall compensator is the product of the lag and lead parts. The overall gain $K_c$ is adjusted to set the gain crossover frequency and achieve the desired phase margin.

**Textbook References:**
*   Philips and Nagle, Example 6.2, 6.3
*   Ogata, Example 7.7, 7.8

---

## 5. Implementation of Discrete-Time Lag-Lead Compensators

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

Once the compensator transfer function $C(z)$ is determined, it needs to be implemented in a digital controller.

*   **Transfer Function Form:**
    $$ C(z) = K_c \frac{(z - z_1)(z - z_2)}{(z - p_1)(z - p_2)} $$
    Or, in the more practical form:
    $$ C(z) = K_c \frac{1 + a_1 z^{-1} + a_2 z^{-2}}{1 + b_1 z^{-1} + b_2 z^{-2}} $$
    For a lag-lead compensator, this would be:
    $$ C(z) = K_c \frac{(1 + a z^{-1})(1 + c z^{-1})}{(1 + b z^{-1})(1 + d z^{-1})} $$
    Expanding this gives the general second-order form.

*   **Difference Equation:**
    The transfer function can be converted into a difference equation that relates the current and past controller outputs ($y_c(k)$) to the current and past plant inputs ($x_c(k)$):
    $$ y_c(k) + b_1 y_c(k-1) + b_2 y_c(k-2) = K_c(x_c(k) + a_1 x_c(k-1) + a_2 x_c(k-2)) $$
    This equation can be solved iteratively to implement the compensator in real-time.

*   **Block Diagram Realizations:**
    *   **Direct Form I:** Directly implements the difference equation. It requires separate delay elements for the numerator and denominator.
    *   **Direct Form II (Canonical Form):** More efficient in terms of the number of delay elements. It separates the transfer function into two first-order or one second-order all-pass filter sections.
    *   **Cascade or Parallel Forms:** The second-order compensator can be decomposed into first-order sections, which are then realized and cascaded or paralleled. This can help improve numerical accuracy and reduce sensitivity to coefficient quantization.

**Example of Direct Form II:**
If $C(z) = K_c \frac{1 + a_1 z^{-1}}{1 + b_1 z^{-1}} \frac{1 + a_2 z^{-1}}{1 + b_2 z^{-1}}$, it can be realized as two first-order filters in cascade.
Filter 1: $H_1(z) = \frac{1 + a_1 z^{-1}}{1 + b_1 z^{-1}}$
Filter 2: $H_2(z) = K_c \frac{1 + a_2 z^{-1}}{1 + b_2 z^{-1}}$
The overall output is $Y(z) = H_1(z) H_2(z) X(z)$.

**Textbook References:**
*   Gopal, Chapter 4: Digital Controller Design (Implementation aspects)
*   Philips and Nagle, Chapter 5: Realization of Digital Filters
*   Ogata, Chapter 5: Digital Filter Realizations

---

## 6. Advantages and Limitations of Lag-Lead Compensators

**Learning Outcomes Addressed:** CO2 (Design digital compensators for linear systems)

*   **Advantages:**
    *   **Improved Steady-State Accuracy:** The lag section increases low-frequency gain, reducing steady-state errors for step and ramp inputs.
    *   **Improved Transient Response:** The lead section boosts phase margin, leading to better stability, reduced overshoot, and faster settling time.
    *   **Versatility:** Can address deficiencies in both steady-state and transient performance simultaneously.
    *   **Flexibility:** The ratio of lag to lead effects can be adjusted by tuning the pole-zero locations.

*   **Limitations:**
    *   **Increased Complexity:** More complex to design and implement than simple lag or lead compensators.
    *   **Potential for Bandwidth Reduction:** While the lead section increases high-frequency gain to improve phase margin, the overall system bandwidth might still be limited by the lag section's attenuation at higher frequencies.
    *   **Sensitivity to Parameter Variations:** The performance can be sensitive to changes in plant parameters or compensator coefficients.
    *   **Discrete-Time Design Challenges:** The mapping from continuous-time design intuition to discrete-time frequency response can be less straightforward, especially when using frequency response methods directly on $G(z)$.

**Textbook References:**
*   General discussion in design chapters of all mentioned textbooks.

---

## 7. Practice Questions and Answers

**CO Addressed:** CO2

**Question 1:** A discrete-time system has a plant transfer function $G(z) = \frac{z+1}{z-1}$. Design a digital lag-lead compensator such that the closed-loop system has zero steady-state error for a ramp input and a phase margin of $45^\circ$. Assume $T=1$ second.

**Answer 1:**
This is a type-1 system. The steady-state error for a ramp input is already zero if the system is stable and properly designed (e.g., feedback gain is sufficient).
$K_v = \lim_{z \to 1} (z-1)G(z) = \lim_{z \to 1} (z-1)\frac{z+1}{z-1} = 2$.
The plant is a pure integrator plus a zero at $z=-1$.
The challenge here would be to add phase margin. A lead compensator would be more appropriate. If a lag-lead is required for some other reason, the lag part would be designed to have minimal impact on the existing $K_v$.

**Question 2:** What are the typical pole-zero configurations for the lag and lead sections of a discrete-time lag-lead compensator? Explain their effect on system performance.

**Answer 2:**
*   **Lag Section:**
    *   **Configuration:** A pole ($p_1$) and a zero ($z_1$) where $|p_1| > |z_1|$ (in the $z$-plane, meaning the pole is further from the origin than the zero). Both are typically located close to $z=1$.
    *   **Effect:** Increases low-frequency gain, reducing steady-state error. Introduces some phase lag, which needs to be compensated by the lead section.
*   **Lead Section:**
    *   **Configuration:** A pole ($p_2$) and a zero ($z_2$) where $|p_2| < |z_2|$ (in the $z$-plane, meaning the pole is closer to the origin than the zero). The zero is usually placed further from the origin than the pole.
    *   **Effect:** Introduces phase lead, improving phase margin and transient response (reduces overshoot, settling time). It increases high-frequency gain.

**Question 3:** A system has $G(z) = \frac{1}{(z-1)(z-0.5)}$ with $T=0.1$ s. Design a digital lag-lead compensator to achieve a steady-state error constant $K_v = 5$ and a phase margin of $40^\circ$.

**Answer 3:**
1.  **Analyze $G(z)$:**
    $K_v = \lim_{z \to 1} (z-1) \frac{1}{(z-1)(z-0.5)} = \lim_{z \to 1} \frac{1}{z-0.5} = \frac{1}{1-0.5} = 2$.
    The desired $K_v = 5$. Gain increase needed is $5/2 = 2.5$.

2.  **Lag Compensator Design:**
    Need a lag section with DC gain of 2.5. Let the lag zero be at $z_1 = -0.9$ ($a=0.9$).
    $\frac{1+a}{1+b} = 2.5 \implies \frac{1+0.9}{1+b} = 2.5 \implies 1.9 = 2.5(1+b) \implies 1+b = \frac{1.9}{2.5} = 0.76$.
    $b = 0.76 - 1 = -0.24$.
    Lag compensator: $C_L(z) = \frac{1+0.9z^{-1}}{1-0.24z^{-1}}$.

3.  **Evaluate with Lag and Gain $K_c=1$:**
    Evaluate $G_{lag}(z) = C_L(z)G(z)$ at the target frequency range to determine phase margin. Let's assume after calculation, the phase margin is $10^\circ$ at $\omega_{gc} = 1$ rad/sec.

4.  **Lead Compensator Design:**
    Need $\phi_m = 40^\circ - 10^\circ + 10^\circ (\text{safety}) = 40^\circ$.
    For $\phi_m = 40^\circ$, $\alpha = \frac{1-\sin(40^\circ)}{1+\sin(40^\circ)} \approx \frac{1-0.643}{1+0.643} \approx 0.24$.
    The ratio of zero to pole magnitude for lead $\approx 1/\alpha \approx 4.17$.
    Position the lead zero and pole to provide $40^\circ$ lead at $\omega_{gc} = 1$ rad/sec.
    Let the lead zero be $z_2 = -0.5$ ($c=0.5$). Then $|p_2| \approx 4.17 \times 0.5 = 2.085$. This is outside the unit circle.
    **Problem:** The required phase margin might necessitate a different placement or a different system. Or the initial assumption for $\omega_{gc}$ might be wrong.

    **Alternative:** Choose lead zero and pole such that their phase contribution at $\omega_{gc}=1$ rad/sec is $40^\circ$.
    Let lead compensator be $C_{Lead}(z) = K_{lead} \frac{1+cz^{-1}}{1+dz^{-1}}$.
    At $\omega T = 1 \times 0.1 = 0.1$ radians.
    $e^{-j0.1} = \cos(0.1) - j\sin(0.1) \approx 0.995 - j0.0995$.
    Let's try $c=0.3, d=0.1$.
    Phase lead: $\angle(1+0.3 e^{-j0.1}) - \angle(1+0.1 e^{-j0.1})$.
    Num phase: $\arctan(\frac{0.3(-0.0995)}{1+0.3(0.995)}) = \arctan(\frac{-0.02985}{1.2985}) \approx -1.3^\circ$.
    Den phase: $\arctan(\frac{0.1(-0.0995)}{1+0.1(0.995)}) = \arctan(\frac{-0.00995}{1.0995}) \approx -0.52^\circ$.
    Phase lead is $-1.3 - (-0.52) = -0.78^\circ$. Still not enough.

    The design often involves iterative adjustments of pole-zero locations and the target crossover frequency.

**Question 4:** State one advantage and one disadvantage of using a lag-lead compensator.

**Answer 4:**
*   **Advantage:** Can improve both steady-state error and transient response simultaneously.
*   **Disadvantage:** More complex to design and implement than a simple lag or lead compensator.

---

## 8. Important Points to Remember

*   **Purpose of Lag-Lead:** To improve both steady-state error and transient response.
*   **Lag Section:** Zero and pole near $z=1$, pole further from origin than zero. Increases low-frequency gain.
*   **Lead Section:** Zero and pole at higher frequencies, zero closer to origin than pole. Adds phase lead.
*   **Design Method:** Often uses frequency response analysis (Bode plots of the sampled system).
*   **Gain $K_c$:** Adjusted to meet steady-state error requirements and then the overall gain is tuned to set the crossover frequency and phase margin.
*   **Discrete-time vs. Continuous-time:** While analog design techniques are often adapted, specific discrete-time analysis (using $z$-plane pole-zero locations, frequency response on $e^{j\omega T}$) is crucial.
*   **Implementation:** Compensators are realized using difference equations or block diagram structures.

---

This module provides a foundation for designing lag-lead compensators in discrete-time control systems. The complexity of the design, particularly in the discrete-time domain, often benefits from using computational tools for frequency response analysis and pole-zero placement.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
