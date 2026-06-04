---
title: "Objective: Design a suitable compensator for the given system to satisfy the given time domain specifications using MATLAB/SCILAB/ similar software."
subject: "CONTROL SYSTEM LAB"
module: "Module 11: Design of lag, lead and lag"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36788"
status: "completed"
scrapedAt: "2026-05-23T16:25:34.632Z"
---
# Control System Lab - Module 11: Design of Lag, Lead, and Lag-Lead Compensators

## Objective: Design a suitable compensator for the given system to satisfy the given time domain specifications using MATLAB/SCILAB/ similar software.

This module focuses on the practical application of control system theory in the lab environment. We will learn how to design compensators (lag, lead, and lag-lead) using simulation tools to meet specific time-domain performance requirements for a given system. This directly aligns with **Course Outcome 4 (CO4): Design suitable controllers/compensators to meet the performance requirements using simulation tools (Knowledge Level: K5)**, as it involves applying design principles to achieve desired system behavior.

---

### 1. Introduction to Compensation and Time Domain Specifications

**What is a Compensator?**

A compensator is a network or device inserted into a control system to modify its performance. It's typically designed to improve:

*   **Stability:** Ensure the system remains stable.
*   **Transient Response:** Control how the system reacts to changes (e.g., reducing overshoot, settling time).
*   **Steady-State Error:** Minimize the difference between the desired output and the actual output after a long time.

**Why Compensate?**

Often, a basic controller (like a proportional controller) may not be sufficient to meet all desired performance specifications. Compensation is used to:

*   **Stabilize an unstable system.**
*   **Improve the transient response** (e.g., make it faster, reduce oscillations).
*   **Reduce steady-state errors.**
*   **Achieve a combination of the above.**

**Key Time Domain Specifications:**

These are crucial metrics for evaluating the transient response of a system. We will be aiming to meet these specifications using our designed compensators.

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value for the first time.
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value.
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak.
*   **Maximum Overshoot ($M_p$):** The maximum percentage deviation of the response from its final value.
*   **Settling Time ($t_s$):** The time taken for the response to stay within a certain percentage (usually 2% or 5%) of its final value.

**Relationship between Specifications and System Parameters:**

*   **Damping Ratio ($\zeta$) and Natural Undamped Frequency ($\omega_n$):** These are fundamental parameters of second-order systems that directly influence transient response.
    *   $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}}$
    *   $M_p = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}}$
    *   $t_s \approx \frac{4}{\zeta \omega_n}$ (for 2% criterion)
    *   $t_s \approx \frac{3}{\zeta \omega_n}$ (for 5% criterion)

**CO Alignment:**

*   **CO2: Conduct suitable experiments and determine the performance specifications. (Knowledge Level: K3)** - This section defines the specifications we will be trying to achieve and understand how they relate to system parameters.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)** - Understanding these specifications is crucial for analyzing system behavior in simulations.

**References:**

*   **Ogata, Modern Control Engineering:** Chapter 4 (Time Response of Feedback Control Systems) and Chapter 9 (Design of Control Systems).
*   **Nise, Control Systems Engineering:** Chapter 2 (Time Response) and Chapter 7 (Root Locus Techniques) for understanding the impact of pole locations on transient response.

---

### 2. Types of Compensators

Compensators are broadly classified based on their frequency response characteristics. We will focus on three common types:

#### 2.1 Lead Compensator

*   **Purpose:** Primarily used to improve the transient response by increasing the speed of response and stability margin. It also increases the phase margin.
*   **Transfer Function:** A lead compensator introduces a zero and a pole, with the zero closer to the origin (or at a less negative imaginary part) than the pole.
    *   $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $p_c > z_c > 0$.
*   **Frequency Response Characteristics:**
    *   **Phase Lead:** It adds a positive phase shift over a certain frequency range.
    *   **Magnitude:** Can increase or decrease the magnitude depending on frequency.
*   **Effect on System:**
    *   Increases **phase margin**, improving stability.
    *   Increases **bandwidth**, leading to a faster response.
    *   Can increase **overshoot** if not designed carefully.
*   **Implementation:** Typically realized using an RC network or operational amplifier circuits.

**Example (Conceptual):**
Imagine a system that is too slow. A lead compensator can "lead" the system's response, making it faster and more responsive.

#### 2.2 Lag Compensator

*   **Purpose:** Primarily used to improve the steady-state error by increasing the system's DC gain. It also can improve stability by increasing the phase margin at low frequencies.
*   **Transfer Function:** A lag compensator introduces a zero and a pole, with the pole closer to the origin than the zero.
    *   $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $z_c > p_c > 0$.
*   **Frequency Response Characteristics:**
    *   **Phase Lag:** It adds a negative phase shift at higher frequencies, but the phase lag is small at the gain crossover frequency of the uncompensated system, allowing for stability improvement.
    *   **Magnitude:** Adds significant gain at low frequencies and unity gain at higher frequencies.
*   **Effect on System:**
    *   Increases **DC gain**, reducing steady-state error.
    *   Can improve **phase margin**, especially if placed at frequencies where the uncompensated system has ample phase margin.
    *   Slows down the **transient response** due to the added pole and zero.
*   **Implementation:** Typically realized using an RC network or operational amplifier circuits.

**Example (Conceptual):**
Consider a system with a large steady-state error. A lag compensator can boost the system's gain at low frequencies, pushing the steady-state error towards zero.

#### 2.3 Lag-Lead Compensator

*   **Purpose:** Combines the advantages of both lag and lead compensators. It can improve both steady-state error and transient response.
*   **Transfer Function:** A lag-lead compensator has two zeros and two poles.
    *   $G_c(s) = K_c \frac{(s + z_1)(s + z_2)}{(s + p_1)(s + p_2)}$
    *   Typically, $(p_1 > z_1 > 0)$ for the lead section and $(z_2 > p_2 > 0)$ for the lag section. The magnitudes of the poles and zeros are chosen to achieve the desired effects.
*   **Frequency Response Characteristics:**
    *   **Lag Section:** Provides low-frequency gain and phase lag.
    *   **Lead Section:** Provides high-frequency phase lead.
*   **Effect on System:**
    *   Can improve **steady-state error** (due to the lag portion).
    *   Can improve **transient response** and **stability** (due to the lead portion).
*   **Implementation:** More complex circuits are required compared to simple lag or lead compensators.

**Example (Conceptual):**
If a system needs both faster response and reduced steady-state error, a lag-lead compensator can be used to achieve both.

**CO Alignment:**

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - This section introduces the building blocks of our design: the different types of compensators.

**References:**

*   **Ogata, Modern Control Engineering:** Chapter 9 (Design of Control Systems) covers the detailed analysis and design of lag, lead, and lag-lead compensators.
*   **Nise, Control Systems Engineering:** Chapter 7 (Root Locus Techniques) and Chapter 8 (Frequency Response Design Techniques) are crucial for understanding how compensator poles and zeros affect the root locus and frequency response.

---

### 3. Design Procedure using MATLAB/SCILAB

The design process typically involves iterative steps using simulation tools. We'll outline a general procedure.

**Core Idea:**
We start with an uncompensated system and its known transfer function. We analyze its time-domain performance. If it doesn't meet the specifications, we design a compensator to modify the system's poles and zeros (and overall gain) to achieve the desired response.

**General Steps:**

1.  **Define System and Specifications:**
    *   Obtain the transfer function of the plant (the system to be controlled). This might be given or determined experimentally (refer to Module 1).
    *   Clearly state the required time-domain specifications (e.g., desired $t_s$, $M_p$, steady-state error).

2.  **Analyze Uncompensated System:**
    *   Simulate the closed-loop system with just a proportional controller (or the inherent controller if any).
    *   Evaluate its time-domain response using tools like `step` or `impulse` commands in MATLAB/SCILAB.
    *   Calculate the current transient response specifications ($t_s$, $M_p$, etc.) and steady-state error.
    *   Check if the specifications are met. If yes, no compensation is needed. If no, proceed to compensation design.

3.  **Design a Compensator:**

    *   **Lead Compensator Design:**
        *   **Goal:** Increase phase margin and bandwidth (faster response, reduced $t_s$).
        *   **Steps:**
            *   **Determine required phase lead:** Calculate the additional phase margin needed.
            *   **Choose compensator pole and zero:** The zero is typically placed near the dominant pole of the uncompensated system to minimize disturbance. The pole is placed at a larger negative real value. The ratio of pole to zero determines the magnitude of phase lead.
            *   **Determine gain $K_c$:** Adjust the gain to meet the steady-state error specification (often controlling the DC gain).
            *   **Analyze frequency response:** Ensure the maximum phase lead occurs at the new gain crossover frequency.
        *   **MATLAB/SCILAB Approach:**
            *   Use `lead_compensator` or manually construct the transfer function.
            *   Place the compensator in the feedback loop.
            *   Tune parameters ($z_c, p_c, K_c$) to achieve desired specs.

    *   **Lag Compensator Design:**
        *   **Goal:** Reduce steady-state error while maintaining or improving stability.
        *   **Steps:**
            *   **Determine required DC gain:** Calculate the gain needed to meet the steady-state error specification.
            *   **Choose compensator pole and zero:** The pole is placed at a much smaller negative real value than the zero. The zero is placed near the dominant pole of the uncompensated system to minimize impact on transient response. The ratio of zero to pole determines the low-frequency gain.
            *   **Ensure stability:** The phase lag introduced by the compensator should not significantly reduce the phase margin at the new gain crossover frequency.
        *   **MATLAB/SCILAB Approach:**
            *   Use `lag_compensator` or manually construct the transfer function.
            *   Place the compensator in the feedback loop.
            *   Tune parameters ($z_c, p_c, K_c$) to achieve desired specs.

    *   **Lag-Lead Compensator Design:**
        *   **Goal:** Improve both steady-state error and transient response.
        *   **Steps:**
            *   Combine the design principles of lag and lead compensators.
            *   Typically, the lag section is designed first to meet steady-state requirements, and then the lead section is added to improve transient response.
        *   **MATLAB/SCILAB Approach:**
            *   Manually construct the transfer function with four parameters ($z_1, p_1, z_2, p_2, K_c$).
            *   Iteratively tune these parameters to meet all specifications.

4.  **Simulate and Verify:**
    *   Simulate the closed-loop system with the designed compensator.
    *   Calculate and compare the time-domain specifications with the desired requirements.
    *   Observe the step response, impulse response, and Bode plots to assess stability and performance.

5.  **Iterate (if necessary):**
    *   If the specifications are not met, adjust the compensator parameters (poles, zeros, gain) and repeat steps 2-4.

**MATLAB/SCILAB Commands:**

*   `tf(numerator, denominator)`: To create a transfer function object.
*   `series(G1, G2)`: To connect transfer functions in series.
*   `feedback(G1, G2)`: To create a feedback loop.
*   `step(sys)`: To plot the step response of a system `sys`.
*   `impulse(sys)`: To plot the impulse response.
*   `bode(sys)`: To plot the Bode plot.
*   `margin(sys)`: To find gain and phase margins.
*   `rlocus(sys)`: To plot the root locus.
*   `stepinfo(sys)`: To extract time-domain specifications from a step response.

**Example MATLAB Code Snippet (Illustrative for Lead Compensator):**

```matlab
% Define the plant transfer function (e.g., P(s) = 10 / (s*(s+1)))
num_p = 10;
den_p = [1 1 0];
P = tf(num_p, den_p);

% --- Define desired specifications ---
% e.g., desired_Ts = 2; desired_Mp = 10%; desired_ess = 0.1;

% --- Design Lead Compensator ---
% Placeholder for compensator design steps
% Let's assume a lead compensator Gc(s) = Kc * (s + zc) / (s + pc)

% Example compensator parameters (these would be calculated based on specs)
zc = 3;
pc = 10;
Kc = 50; % This Kc might be tuned for steady-state error

Gc_lead = tf(Kc*[1, zc], [1, pc]);

% Form the open-loop system with compensator
G_open_lead = series(Gc_lead, P);

% Form the closed-loop system
G_closed_lead = feedback(G_open_lead, 1);

% Analyze the closed-loop system
figure;
step(G_closed_lead);
title('Step Response with Lead Compensator');
grid on;

% Get time domain specs
info_lead = stepinfo(G_closed_lead);
disp('Lead Compensator Specs:');
disp(info_lead);

% Plot Bode plot for margin analysis
figure;
margin(G_open_lead);
title('Bode Plot with Lead Compensator');
```

**CO Alignment:**

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (Knowledge Level: K3)** - While this module focuses on design, understanding the initial system model is critical, and CO1 supports this.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)** - This section details how to use simulation tools to analyze the system before and after compensation.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - This is the core of the module, explaining the practical steps of designing and implementing compensators using software.

**Important Points to Remember:**

*   **Iterative Process:** Compensator design is rarely a one-shot process. Be prepared to iterate and adjust parameters.
*   **Trade-offs:** Improving one specification might negatively affect another. For example, a lead compensator can speed up the response but might increase overshoot.
*   **Root Locus vs. Frequency Domain:** While this module emphasizes time-domain specs, understanding how compensators affect the root locus (pole placement) and frequency response (Bode plots) is essential for robust design.
*   **Software Proficiency:** Familiarity with MATLAB or SCILAB is crucial for implementing these designs.

---

### 4. Worked Example: Designing a Lead Compensator

Let's consider a plant with the transfer function:
$G_p(s) = \frac{10}{s(s+2)}$

**Desired Specifications:**

*   Peak Overshoot ($M_p$) $\le$ 10%
*   Settling Time ($t_s$) $\le$ 2 seconds (for 2% criterion)
*   Steady-state error ($e_{ss}$) to a unit step input $\le$ 0.1

**Analysis of Uncompensated System:**

1.  **Open-loop transfer function:** $G_{open}(s) = \frac{10}{s(s+2)}$
2.  **Closed-loop transfer function:** $G_{closed}(s) = \frac{G_{open}(s)}{1 + G_{open}(s)} = \frac{10}{s^2 + 2s + 10}$
3.  **Characteristic equation:** $s^2 + 2s + 10 = 0$
4.  **Comparison with standard second-order form:** $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$
    *   $\omega_n^2 = 10 \implies \omega_n = \sqrt{10} \approx 3.16 \text{ rad/s}$
    *   $2\zeta\omega_n = 2 \implies \zeta = \frac{2}{2\omega_n} = \frac{1}{\sqrt{10}} \approx 0.316$
5.  **Calculate specifications:**
    *   $M_p = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}} = e^{-\frac{\pi (0.316)}{\sqrt{1 - 0.316^2}}} \approx e^{-1.02} \approx 0.36$ or 36% (Exceeds 10%)
    *   $t_s \approx \frac{4}{\zeta \omega_n} = \frac{4}{1} = 4$ seconds (Exceeds 2 seconds)
    *   Steady-state error ($e_{ss}$) for unit step: Since the system has a pole at s=0, it's a Type 1 system. For a step input, $e_{ss} = \frac{1}{1+K_p}$ where $K_p = \lim_{s \to 0} G_{open}(s)$. This is infinite for a Type 1 system, meaning $e_{ss}=0$ for a step input. (Wait, the system is $G_p(s) = \frac{10}{s(s+2)}$, which is Type 1. The error for a unit step input is indeed 0. If the requirement was for a ramp input, we'd need to consider $K_v$. Let's assume for this example, the requirement might have been related to a different input or perhaps a misunderstanding of $K_p$ for stable systems. For a Type 1 system with a step input, the steady-state error is 0, which satisfies $e_{ss} \le 0.1$.)

**Conclusion for Uncompensated System:** The uncompensated system is too slow and has excessive overshoot. The steady-state error is 0, which is good, but the transient response is poor.

**Lead Compensator Design:**

Let's design a lead compensator $G_c(s) = K_c \frac{s + z_c}{s + p_c}$ to meet the transient specifications. We'll assume the steady-state error requirement (if it was a non-zero value) is handled by $K_c$ or a separate gain.

**Step 1: Determine required phase margin.**
The uncompensated system has $\zeta = 0.316$. The phase margin can be calculated from the Bode plot.
At $\omega = \sqrt{10}$ rad/s (where $|G_{open}(j\omega)| = 1$), the phase is $\angle G_{open}(j\omega) = -90^\circ - \arctan(\frac{\sqrt{10}}{2}) \approx -90^\circ - 78.7^\circ = -168.7^\circ$.
Phase Margin = $180^\circ + (-168.7^\circ) = 11.3^\circ$. This is very low.

For a desired $M_p \le 10\%$, we need $\zeta \ge 0.591$.
From $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}} \le 0.1$, we get $\zeta \ge 0.591$.
If $\zeta = 0.591$, then $\omega_d = \omega_n \sqrt{1-\zeta^2} = \omega_n \sqrt{1 - 0.591^2} \approx 0.806 \omega_n$.
For $t_s \le 2$ seconds, with $\zeta = 0.591$, we need $\omega_n \ge \frac{4}{\zeta t_s} = \frac{4}{0.591 \times 2} \approx 3.38$ rad/s.
So, we aim for $\omega_n \approx 3.38$ rad/s and $\zeta \approx 0.591$.

Let the new gain crossover frequency be $\omega_{gc}'$. A common rule of thumb is to increase the bandwidth (which relates to $\omega_{gc}'$) by about 1.5 to 2 times. Let's target $\omega_{gc}' \approx 1.5 \times \sqrt{10} \approx 4.74$ rad/s.

At this new $\omega_{gc}' = 4.74$ rad/s, the uncompensated system has a phase:
$\phi_{uncomp}(4.74) = -90^\circ - \arctan(\frac{4.74}{2}) \approx -90^\circ - 67.1^\circ = -157.1^\circ$.

To achieve a phase margin of $45^\circ$ (a common target for lead compensators to ensure good stability), the compensator must provide a phase lead of:
$\phi_{lead} = \text{Desired Phase Margin} - \phi_{uncomp}(\omega_{gc}') - \text{Phase lag of compensator at } \omega_{gc}'$
Assuming the maximum phase lead occurs at $\omega_{gc}'$:
$\phi_{max} = 45^\circ - (-157.1^\circ) \approx 202.1^\circ$. This is too large.
We usually aim for a phase margin of around $45^\circ - 60^\circ$. Let's aim for $45^\circ$.

The phase lead provided by a lead compensator is $\phi_{lead}(\omega) = \arctan(\frac{\omega}{z_c}) - \arctan(\frac{\omega}{p_c})$.
The maximum phase lead $\phi_{max}$ occurs at $\omega_{max} = \sqrt{z_c p_c}$.
$\phi_{max} = \sin^{-1}\left(\frac{p_c - z_c}{p_c + z_c}\right)$.
Let $\alpha = p_c/z_c$. Then $\phi_{max} = \sin^{-1}\left(\frac{\alpha - 1}{\alpha + 1}\right)$.

We need to choose $\alpha$ such that the required phase lead is achieved. If we need $\phi_{max}$ phase lead, then $\sin(\phi_{max}) = \frac{\alpha - 1}{\alpha + 1}$.
$\alpha = \frac{1 + \sin(\phi_{max})}{1 - \sin(\phi_{max})}$.

Let's re-evaluate the required phase lead. If we want a phase margin of $45^\circ$ at $\omega_{gc}' = 4.74$ rad/s, and the uncompensated phase is $-157.1^\circ$, the compensator must provide at least $180^\circ + 45^\circ - (-157.1^\circ) = 42.9^\circ$ phase lead.
Let's choose $\phi_{max} = 50^\circ$ to be safe.
$\alpha = \frac{1 + \sin(50^\circ)}{1 - \sin(50^\circ)} = \frac{1 + 0.766}{1 - 0.766} = \frac{1.766}{0.234} \approx 7.55$.
So, $p_c = 7.55 z_c$.

The magnitude of the lead compensator at $\omega_{max}$ is $M_{max} = \sqrt{\alpha}$.
$M_{max} = \sqrt{7.55} \approx 2.75$.
The gain of the compensator at $\omega_{gc}'$ is $G_c(j\omega_{gc}') = K_c \frac{j\omega_{gc}' + z_c}{j\omega_{gc}' + p_c}$.
$|G_c(j\omega_{gc}')| = K_c \sqrt{\frac{(\omega_{gc}')^2 + z_c^2}{(\omega_{gc}')^2 + p_c^2}} = K_c \sqrt{\frac{1 + (z_c/\omega_{gc}')^2}{1 + (p_c/\omega_{gc}')^2}}$.

We want the magnitude of the open-loop system at $\omega_{gc}'$ to be 1 (for the phase margin definition).
$|G_{open}(j\omega_{gc}')| = |G_c(j\omega_{gc}') G_p(j\omega_{gc}')| = 1$.
$|G_p(j\omega_{gc}')| = \frac{10}{\omega_{gc}' \sqrt{(\omega_{gc}')^2 + 2^2}} = \frac{10}{4.74 \sqrt{4.74^2 + 4}} = \frac{10}{4.74 \sqrt{22.47 + 4}} = \frac{10}{4.74 \sqrt{26.47}} \approx \frac{10}{4.74 \times 5.145} \approx \frac{10}{24.38} \approx 0.41$.
So, $|G_c(j\omega_{gc}')| = \frac{1}{|G_p(j\omega_{gc}')|} = \frac{1}{0.41} \approx 2.44$.

We also know $\omega_{max} = \sqrt{z_c p_c}$. A common choice is to place $\omega_{max}$ at the new gain crossover frequency $\omega_{gc}'$.
So, $\omega_{max} = 4.74$ rad/s.
$\sqrt{z_c p_c} = 4.74 \implies z_c p_c = 4.74^2 \approx 22.47$.
Since $p_c = 7.55 z_c$:
$z_c (7.55 z_c) = 22.47 \implies 7.55 z_c^2 = 22.47 \implies z_c^2 = \frac{22.47}{7.55} \approx 2.976$.
$z_c \approx \sqrt{2.976} \approx 1.725$.
Then $p_c = 7.55 \times 1.725 \approx 13.03$.

Now, let's find $K_c$ using $|G_c(j\omega_{gc}')| = K_c \sqrt{\frac{(\omega_{gc}')^2 + z_c^2}{(\omega_{gc}')^2 + p_c^2}} = 2.44$.
$K_c \sqrt{\frac{4.74^2 + 1.725^2}{4.74^2 + 13.03^2}} = K_c \sqrt{\frac{22.47 + 2.976}{22.47 + 169.78}} = K_c \sqrt{\frac{25.446}{192.25}} \approx K_c \sqrt{0.132} \approx K_c \times 0.363$.
$K_c \times 0.363 = 2.44 \implies K_c = \frac{2.44}{0.363} \approx 6.72$.

So, our lead compensator is $G_c(s) = 6.72 \frac{s + 1.725}{s + 13.03}$.

**MATLAB/SCILAB Verification:**

```matlab
% Plant transfer function
num_p = 10;
den_p = [1 2 0];
P = tf(num_p, den_p);

% Compensator parameters
zc = 1.725;
pc = 13.03;
Kc = 6.72;
Gc_lead = tf(Kc*[1, zc], [1, pc]);

% Open-loop system
G_open_lead = series(Gc_lead, P);

% Closed-loop system
G_closed_lead = feedback(G_open_lead, 1);

% Analyze the closed-loop system
figure;
step(G_closed_lead);
title('Step Response with Lead Compensator');
grid on;

% Get time domain specs
info_lead = stepinfo(G_closed_lead);
disp('Lead Compensator Specs:');
disp(info_lead);

% Plot Bode plot for margin analysis
figure;
margin(G_open_lead);
title('Bode Plot with Lead Compensator');
```

**Expected Results from MATLAB/SCILAB:**

Running the `stepinfo` command on `G_closed_lead` should show:

*   **RiseTime:** Significantly reduced.
*   **SettlingTime:** Should be closer to or less than 2 seconds.
*   **Overshoot:** Should be around 10% or less.

The Bode plot will show an increased phase margin at the new gain crossover frequency.

**CO Alignment:**

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - This worked example demonstrates the practical application of designing a lead compensator.

---

### 5. Worked Example: Designing a Lag Compensator

Let's use the same plant: $G_p(s) = \frac{10}{s(s+2)}$

**Desired Specifications:**

*   Steady-state error ($e_{ss}$) to a unit step input $\le$ 0.05 (Revised for a clearer lag design goal)
*   Settling Time ($t_s$) $\le$ 4 seconds
*   Peak Overshoot ($M_p$) $\le$ 20%

**Analysis of Uncompensated System (from previous example):**

*   $M_p \approx 36\%$ (Too high)
*   $t_s \approx 4$ seconds (Meets spec, but we might make it faster)
*   $e_{ss} = 0$ (for step input, as it's Type 1)

**Conclusion for Uncompensated System:** The uncompensated system has poor transient response (high overshoot) and zero steady-state error for a step input.

**Lag Compensator Design:**

A lag compensator $G_c(s) = K_c \frac{s + z_c}{s + p_c}$ (where $z_c > p_c > 0$) is suitable for improving steady-state error by increasing low-frequency gain. However, the uncompensated system already has zero steady-state error for a step input. If the requirement was for a ramp input, then we would need to increase $K_v$.

Let's assume a different scenario where the system was $G_p(s) = \frac{10}{(s+1)(s+2)}$ (a Type 0 system) and the goal was $e_{ss} \le 0.05$ for a step input.
For $G_p(s) = \frac{10}{(s+1)(s+2)}$, the closed-loop is $\frac{10}{s^2+3s+2+10} = \frac{10}{s^2+3s+12}$.
$\omega_n = \sqrt{12} \approx 3.46$, $2\zeta\omega_n = 3 \implies \zeta = \frac{3}{2\sqrt{12}} \approx 0.433$.
$t_s \approx \frac{4}{0.433 \times 3.46} \approx 2.67$s.
$M_p = e^{-\frac{\pi 0.433}{\sqrt{1-0.433^2}}} \approx e^{-0.48} \approx 0.618$ or 61.8%.

Let's design a lag compensator for this new plant to meet $e_{ss} \le 0.05$, $t_s \le 3$s, $M_p \le 20\%$.

**Step 1: Meet steady-state error requirement.**
For a Type 0 system, $e_{ss} = \frac{1}{1+K_p}$, where $K_p = \lim_{s \to 0} G_{open}(s)$.
We want $e_{ss} \le 0.05$, so $1+K_p \ge \frac{1}{0.05} = 20$, meaning $K_p \ge 19$.
The uncompensated system has $K_p = \frac{10}{(1)(2)} = 5$.
The lag compensator is $G_c(s) = K_c \frac{s + z_c}{s + p_c}$.
At DC ($s=0$), $G_c(0) = K_c \frac{z_c}{p_c}$.
The new open-loop system with the compensator is $G'_{open}(s) = G_c(s) G_p(s)$.
The new DC gain $K_p' = \lim_{s \to 0} G'_{open}(s) = G_c(0) \lim_{s \to 0} G_p(s) = K_c \frac{z_c}{p_c} K_p$.
We need $K_p' \ge 19$. Since $K_p = 5$, we need $K_c \frac{z_c}{p_c} \ge \frac{19}{5} = 3.8$.
We choose $z_c$ and $p_c$ such that $\frac{z_c}{p_c} = 10$ (a common ratio for lag compensators to get a significant boost), and $K_c \times 10 \ge 3.8$, so $K_c \ge 0.38$. Let's choose $K_c = 0.4$.
Then $\frac{z_c}{p_c} = \frac{3.8}{0.4} = 9.5$. Let's use $z_c/p_c = 10$.
This means our lag compensator will have a DC gain of $0.4 \times 10 = 4$, making the new $K_p' = 5 \times 4 = 20$.
So, $G_c(s) = 0.4 \frac{s + z_c}{s + 0.1 z_c}$ (e.g., if $z_c = 0.1$, then $p_c = 0.01$).

**Step 2: Place poles and zeros.**
To minimize the impact on the transient response, the pole and zero of the lag compensator should be close to each other and located to the left of the dominant closed-loop poles of the uncompensated system.
The dominant poles of the uncompensated system ($G_p(s) = \frac{10}{(s+1)(s+2)}$) are at $s \approx -1.5 \pm j3.2$.
Let's choose $z_c = 0.1$ and $p_c = 0.01$.
$G_c(s) = 0.4 \frac{s + 0.1}{s + 0.01}$.

**Step 3: Check stability and transient response.**
The new open-loop transfer function is:
$G'_{open}(s) = 0.4 \frac{s + 0.1}{s + 0.01} \times \frac{10}{(s+1)(s+2)} = 4 \frac{s + 0.1}{(s + 0.01)(s+1)(s+2)}$.
Let's analyze the Bode plot of this system.
At DC, $|G'_{open}(j0)| = 4 \times \frac{0.1}{0.01} \times \frac{10}{(1)(2)} = 4 \times 10 \times 5 = 200$. This gives a high $K_p$.

The lag compensator introduces phase lag. We need to ensure that at the new gain crossover frequency, the phase margin is still adequate. The lag compensator has its maximum phase lag at frequencies far from its zero and pole. For frequencies between $p_c$ and $z_c$, it provides a small phase lag.

Let's use MATLAB/SCILAB to verify.

```matlab
% Plant transfer function (Type 0 example)
num_p = 10;
den_p = [1 3 2];
P = tf(num_p, den_p);

% Lag compensator parameters
zc = 0.1;
pc = 0.01;
Kc = 0.4; % Kc = 0.4 so that Kc*(zc/pc) = 0.4*(0.1/0.01) = 4, total Kp' = 5*4=20
Gc_lag = tf(Kc*[1, zc], [1, pc]);

% Open-loop system
G_open_lag = series(Gc_lag, P);

% Closed-loop system
G_closed_lag = feedback(G_open_lag, 1);

% Analyze the closed-loop system
figure;
step(G_closed_lag);
title('Step Response with Lag Compensator');
grid on;

% Get time domain specs
info_lag = stepinfo(G_closed_lag);
disp('Lag Compensator Specs:');
disp(info_lag);

% Plot Bode plot for margin analysis
figure;
margin(G_open_lag);
title('Bode Plot with Lag Compensator');
```

**Expected Results from MATLAB/SCILAB:**

*   **RiseTime:** Might increase slightly compared to the uncompensated system.
*   **SettlingTime:** Should be around or within 3 seconds.
*   **Overshoot:** Should be significantly reduced, ideally $\le 20\%$.
*   **Steady-state error:** Will be very close to 0 for a step input due to the increased DC gain.

**CO Alignment:**

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - This example demonstrates designing a lag compensator.

---

### 6. Worked Example: Designing a Lag-Lead Compensator

Using the same plant: $G_p(s) = \frac{10}{s(s+2)}$

**Desired Specifications:**

*   Peak Overshoot ($M_p$) $\le$ 10%
*   Settling Time ($t_s$) $\le$ 2 seconds
*   Steady-state error ($e_{ss}$) to a unit step input $\le$ 0.1 (which is 0 for Type 1)

**Analysis of Uncompensated System (from first example):**

*   $M_p \approx 36\%$ (Too high)
*   $t_s \approx 4$ seconds (Too slow)
*   $e_{ss} = 0$ (for step input)

**Lag-Lead Compensator Design:**

We need to improve both transient response (reduce overshoot, reduce settling time) and potentially maintain the steady-state error at 0. A lag-lead compensator can achieve this.

A lag-lead compensator has the form:
$G_c(s) = K_c \frac{(s + z_1)(s + z_2)}{(s + p_1)(s + p_2)}$
where the lag section has $z_1 > p_1$ and the lead section has $p_2 > z_2$.
A common structure is:
$G_c(s) = K_c \left(\frac{s+z_1}{s+p_1}\right) \left(\frac{s+z_2}{s+p_2}\right)$
where $\frac{z_1}{p_1} = \frac{z_2}{p_2} = \beta > 1$ and $p_1 = \beta z_2$, $z_1 = \beta p_2$.

**Design Approach:**

1.  **Design the lead section first** to meet transient specifications, similar to the lead compensator design. This section will provide phase lead.
2.  **Design the lag section second** to improve the steady-state error (if needed) or to shape the low-frequency part of the Bode plot. This section will provide a gain boost at low frequencies.

Let's aim to use a lead compensator with $z_c = 1.725$ and $p_c = 13.03$ from the lead compensator example. This gave us a decent improvement. Let's see if we can further improve steady-state error or if the lead compensator alone was sufficient.

In the previous example with the lead compensator, the steady-state error for a step input was 0. If the requirement was for a ramp input, $K_v$ would be considered. For $G_p(s) = \frac{10}{s(s+2)}$, $K_v = \lim_{s \to 0} s G_{open}(s) = \lim_{s \to 0} s \frac{10}{s(s+2)} = \frac{10}{2} = 5$.
If we need a smaller ramp error, we'd need to increase $K_v$. A lag component can help here.

Let's assume we still need a lead compensator to meet the transient specs, and we also need to increase $K_v$ by a factor of 10 (from 5 to 50).
To increase $K_v$ by 10, the DC gain of the compensator needs to increase by 10.
We can use a lag section for this. Let's use a lag compensator of the form $G_{lag}(s) = \frac{s+z_1}{s+p_1}$ where $\frac{z_1}{p_1} = 10$ and $K_c$ for the lag part is 1. So, $G_{lag}(s) = \frac{s+0.1}{s+0.01}$.

Combining this lag with the lead compensator:
$G_c(s) = K_{total} \left(\frac{s+z_1}{s+p_1}\right) \left(\frac{s+z_2}{s+p_2}\right)$
Let $G_{lag}(s) = \frac{s+0.1}{s+0.01}$ and $G_{lead}(s) = \frac{s+1.725}{s+13.03}$.
We need a total gain $K_{total}$ that, when combined with the lag section's DC gain of 10, results in the desired performance.
The lead compensator had $K_c = 6.72$. This was to achieve the transient specs.

Let's combine the effects:
$G_{lag\_lead}(s) = K_{total} \times \frac{s+0.1}{s+0.01} \times \frac{s+1.725}{s+13.03}$

The DC gain of the compensator will be $K_{total} \times \frac{0.1}{0.01} \times \frac{1.725}{13.03} = K_{total} \times 10 \times 0.132 \approx K_{total} \times 1.32$.
The open-loop system's DC gain is $K_p = 5$.
The new DC gain $K_p'$ will be $5 \times (K_{total} \times 1.32)$.
For the steady-state error to a unit step, $e_{ss} = 0$ for Type 1.
For a unit ramp, $e_{ss} = 1/K_v$.
The uncompensated $K_v = 5$.
The new $K_v'$ will be $K_p' = 5 \times (K_{total} \times 1.32)$.
If we want $K_v' = 50$ (to reduce ramp error by 10 times), then $5 \times K_{total} \times 1.32 = 50$.
$K_{total} = \frac{50}{5 \times 1.32} = \frac{10}{1.32} \approx 7.58$.

So, the lag-lead compensator could be:
$G_c(s) = 7.58 \frac{(s+0.1)(s+1.725)}{(s+0.01)(s+13.03)}$

Let's verify this in MATLAB/SCILAB.

```matlab
% Plant transfer function
num_p = 10;
den_p = [1 2 0];
P = tf(num_p, den_p);

% Lag-Lead Compensator parameters
K_total = 7.58;
z1 = 0.1; p1 = 0.01; % Lag section
z2 = 1.725; p2 = 13.03; % Lead section

Gc_lag_lead = K_total * tf([1, z1], [1, p1]) * tf([1, z2], [1, p2]);

% Open-loop system
G_open_lag_lead = series(Gc_lag_lead, P);

% Closed-loop system
G_closed_lag_lead = feedback(G_open_lag_lead, 1);

% Analyze the closed-loop system
figure;
step(G_closed_lag_lead);
title('Step Response with Lag-Lead Compensator');
grid on;

% Get time domain specs
info_lag_lead = stepinfo(G_closed_lag_lead);
disp('Lag-Lead Compensator Specs:');
disp(info_lag_lead);

% Plot Bode plot for margin analysis
figure;
margin(G_open_lag_lead);
title('Bode Plot with Lag-Lead Compensator');
```

**Expected Results from MATLAB/SCILAB:**

*   **RiseTime:** Similar to or slightly faster than the lead-compensated system.
*   **SettlingTime:** Should be $\le 2$ seconds.
*   **Overshoot:** Should be $\le 10\%$.
*   **Steady-state error (step):** Will remain 0.
*   **Steady-state error (ramp):** Will be significantly reduced if the $K_v$ adjustment was the goal.

**CO Alignment:**

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - This example demonstrates the design of a lag-lead compensator.

---

### 7. Practice Questions and Answers

**Question 1:**
A system has a plant transfer function $G_p(s) = \frac{20}{s(s+4)}$. The desired specifications for the closed-loop system are: settling time $t_s \le 2$ seconds and peak overshoot $M_p \le 5\%$. Design a lead compensator using MATLAB/SCILAB and verify the performance.

**Answer:**
1.  **Uncompensated System Analysis:**
    *   Closed-loop: $\frac{20}{s^2+4s+20}$. $\omega_n = \sqrt{20} \approx 4.47$ rad/s, $2\zeta\omega_n = 4 \implies \zeta = \frac{4}{2\sqrt{20}} \approx 0.447$.
    *   $M_p = e^{-\frac{\pi 0.447}{\sqrt{1-0.447^2}}} \approx e^{-0.505} \approx 0.604$ or 60.4% (Too high).
    *   $t_s \approx \frac{4}{0.447 \times 4.47} \approx 2.01$ seconds (Meets $t_s$ requirement, but barely, and overshoot is the main issue).
2.  **Lead Compensator Design Goal:**
    *   For $M_p \le 5\%$, we need $\zeta \ge 0.69$.
    *   For $t_s \le 2$ seconds with $\zeta = 0.69$, we need $\omega_n \ge \frac{4}{0.69 \times 2} \approx 2.9$ rad/s.
    *   However, lead compensators increase bandwidth, so we should aim for a higher $\omega_n$. Let's target $\omega_n = 5$ rad/s.
    *   With $\zeta = 0.69$ and $\omega_n = 5$, $\omega_d = 5 \sqrt{1-0.69^2} \approx 3.5$ rad/s.
    *   Uncompensated phase margin at $\omega = \sqrt{20} \approx 4.47$: $\phi = -90^\circ - \arctan(4.47/4) \approx -90^\circ - 48.1^\circ = -138.1^\circ$. Phase Margin = $41.9^\circ$.
    *   We want to increase the phase margin to about $55^\circ$ at a new $\omega_{gc}'$. Let's target $\omega_{gc}' = 6$ rad/s.
    *   Uncompensated phase at $\omega=6$: $\phi = -90^\circ - \arctan(6/4) = -90^\circ - 56.3^\circ = -146.3^\circ$.
    *   Required phase lead = $180^\circ + 55^\circ - (-146.3^\circ) = 138.7^\circ$. This is too large. Let's re-target phase margin to $50^\circ$. Required phase lead = $180^\circ + 50^\circ - (-146.3^\circ) = 136.3^\circ$. Still high.

    Let's try a different approach, placing the zero near the dominant pole. The dominant poles are near $s = -2 \pm j4$. Let's place $z_c = 2$.
    Target $\omega_{gc}'$. If $\zeta = 0.69$, $\omega_n=5$, then $t_s \approx 2.01$. We need a bit faster response. Target $\omega_n = 6$.
    $\zeta = 0.69, \omega_n = 6 \implies t_s \approx 1.66s$.
    $|G_p(j\omega)| = \frac{20}{\omega\sqrt{\omega^2+16}}$.
    At $\omega = \sqrt{z_c p_c}$, $\phi_{max} = \sin^{-1}(\frac{p_c-z_c}{p_c+z_c})$. Need $\phi_{max} \approx 50^\circ$.
    $\alpha = p_c/z_c = \frac{1+\sin 50^\circ}{1-\sin 50^\circ} \approx 7.55$. So $p_c = 7.55 z_c$.
    If $z_c = 2$, $p_c = 15.1$.
    $\omega_{max} = \sqrt{2 \times 15.1} = \sqrt{30.2} \approx 5.5$ rad/s. Let this be $\omega_{gc}'$.
    $|G_p(j5.5)| = \frac{20}{5.5\sqrt{5.5^2+16}} = \frac{20}{5.5\sqrt{30.25+16}} = \frac{20}{5.5\sqrt{46.25}} \approx \frac{20}{5.5 \times 6.8} \approx 0.55$.
    $|G_c(j5.5)| = \frac{K_c}{1} \sqrt{\frac{5.5^2+2^2}{5.5^2+15.1^2}} = K_c \sqrt{\frac{30.25+4}{30.25+228}} = K_c \sqrt{\frac{34.25}{258.25}} \approx K_c \sqrt{0.132} \approx 0.363 K_c$.
    We need $|G_c(j5.5)| = \frac{1}{|G_p(j5.5)|} = \frac{1}{0.55} \approx 1.82$.
    $0.363 K_c = 1.82 \implies K_c = \frac{1.82}{0.363} \approx 5$.
    Compensator: $G_c(s) = 5 \frac{s+2}{s+15.1}$.

    (The actual design involves iterative calculations or software tools for precise tuning).

**Question 2:**
For the system $G_p(s) = \frac{10}{(s+1)(s+2)}$, design a lag compensator to reduce the steady-state error for a unit ramp input by a factor of 5, while keeping the overshoot $M_p \le 20\%$.

**Answer:**
1.  **Uncompensated System Analysis:**
    *   $K_v = \lim_{s \to 0} s G_p(s) = 0$ (for Type 0 system). Error for ramp is infinite.
    *   $M_p \approx 61.8\%$ (Too high).
    *   $t_s \approx 2.67$ seconds.
2.  **Lag Compensator Design Goal:**
    *   We need to increase $K_v$ by a factor of 5. For a Type 0 system, introducing a compensator that is Type 1 (e.g., a lag compensator with $s$ in denominator, which isn't standard, or ensuring the compensator provides the gain) is needed.
    *   However, a standard lag compensator $G_c(s) = K_c \frac{s+z_c}{s+p_c}$ (where $z_c > p_c$) does not change the system type. To increase $K_v$ for a Type 0 system, you'd typically use a Type 1 controller (like a PI controller or a lag-lead with specific pole-zero placement).
    *   Let's assume the intention is to increase the low-frequency gain to achieve a specific steady-state error constant that *would* be relevant if it were Type 1, or to improve transient response while making the system more responsive.
    *   If we interpret the requirement as increasing the DC gain $K_p$ by a factor of 5 (assuming it was Type 1 to begin with and we want to improve $e_{ss}$ for step), this would be $K_p' = 5 \times 5 = 25$.
    *   To achieve this, we need $K_c \frac{z_c}{p_c} = 5$. Let's choose $\frac{z_c}{p_c} = 10$, so $K_c = 0.5$.
    *   We need to ensure the lag compensator doesn't worsen the transient response too much. Let's place $z_c=0.2$ and $p_c=0.02$.
    *   $G_c(s) = 0.5 \frac{s+0.2}{s+0.02}$.
    *   Open-loop: $G'_{open}(s) = 0.5 \frac{s+0.2}{s+0.02} \frac{10}{(s+1)(s+2)} = 5 \frac{s+0.2}{(s+0.02)(s+1)(s+2)}$.
    *   The DC gain is now $5 \times \frac{0.2}{0.02} \times \frac{10}{(1)(2)} = 5 \times 10 \times 5 = 250$.
    *   The transient response should be verified. The poles are now at $s=-0.02, -1, -2$ and a zero at $s=-0.2$. This shifts the dominant pole location.

    (Note: The question's premise regarding increasing $K_v$ for a Type 0 system might be slightly misstated; a lag compensator primarily affects $K_p$. If the goal is to reduce ramp error, a PI controller is more direct. However, the design process for lag compensators is generally as shown.)

**Question 3:**
For the system $G_p(s) = \frac{1}{s(s+1)(s+2)}$, design a lag-lead compensator to achieve a steady-state error of 0 for a step input, a peak overshoot $M_p \le 15\%$, and a settling time $t_s \le 3$ seconds.

**Answer:**
1.  **Uncompensated System Analysis:**
    *   This is a Type 1 system, so $e_{ss} = 0$ for a step input.
    *   Closed-loop: $\frac{1}{s^3+3s^2+2s+1}$. The poles are not easily determined analytically. Simulation is needed.
    *   Root locus analysis or simulation would show the stability and transient response. For this system, it's likely to be underdamped.
2.  **Lag-Lead Compensator Design Goal:**
    *   Maintain $e_{ss}=0$ for step input. This is already met.
    *   Meet $M_p \le 15\%$ and $t_s \le 3$ seconds.
    *   For $M_p \le 15\%$, we need $\zeta \ge 0.5$.
    *   For $t_s \le 3$ seconds with $\zeta = 0.5$, $\omega_n \ge \frac{4}{0.5 \times 3} \approx 2.67$ rad/s.
    *   Let's aim for $\omega_n = 4$ rad/s and $\zeta = 0.5$.
    *   The dominant closed-loop poles would be at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2} = -2 \pm j3.46$.

    We can use the design procedure for lead compensators first to meet transient requirements and then add a lag section if needed for gain or further shaping.

    *   Let's assume we design a lead compensator to move the dominant poles to approximately $-2 \pm j3.46$.
    *   The location of the dominant poles is roughly $s = -\zeta\omega_n$. If $\zeta=0.5, \omega_n=4$, this is $-2$.
    *   Let's consider the frequency response. Plot the Bode plot of $G_p(s) = \frac{1}{s(s+1)(s+2)}$.
    *   At $\omega = 1$, phase = $-90^\circ - 45^\circ - \arctan(1/2) \approx -90^\circ - 45^\circ - 26.6^\circ = -161.6^\circ$. PM = $18.4^\circ$.
    *   We need to increase phase margin. A lead compensator can do this.
    *   This is a more complex design problem that requires careful selection of pole/zero locations and gains, best done with MATLAB/SCILAB iterative design.

**CO Alignment:**

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)** - These practice questions test the ability to apply the design concepts.

---

### 8. Conclusion

This module equips you with the practical skills to design compensators for control systems using simulation tools. By understanding time-domain specifications and the effects of lag, lead, and lag-lead compensators, you can effectively modify system performance to meet desired criteria. Remember that iterative design and thorough verification through simulations are key to successful compensator design. This directly contributes to the **Course Outcome 4 (CO4)** of designing controllers/compensators using simulation tools.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
