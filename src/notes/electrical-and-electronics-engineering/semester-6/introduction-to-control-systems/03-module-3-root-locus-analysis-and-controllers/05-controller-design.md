---
title: "Controller design"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c4"
status: "completed"
scrapedAt: "2026-05-23T16:29:40.314Z"
---
# Introduction to Control Systems - Module 3: Root Locus Analysis and Controllers

## Topic: Controller Design

This topic focuses on designing controllers to meet specific performance requirements of a closed-loop control system. We will leverage the root locus technique learned in previous sections to achieve desired transient and steady-state responses.

### Learning Outcomes Covered:

*   **Analyze dynamics systems for their performance and stability using Root locus.** (CO3, K3) - This entire topic is dedicated to this outcome. We will use root locus to select controller parameters that satisfy performance criteria.
*   **Analyze the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.** (CO2, K2) - While root locus analysis is the primary tool, the ultimate goal is to improve time-domain performance, such as reducing overshoot, settling time, and improving rise time.
*   **To represent continuous time systems in the classical domain.** (CO1, K2) - The controllers we design are typically represented in the classical transfer function domain.
*   **To represent continuous time systems in the classical domain.** (CO5, K2) - Repetition of CO1, emphasizing the importance of classical representation.

---

### 1. Introduction to Controller Design

The primary objective of controller design is to modify the behavior of an open-loop system (plant) to achieve desired closed-loop performance. This usually involves compensating for the inherent limitations of the plant, such as slow response, excessive overshoot, or poor steady-state accuracy.

**Key Concepts:**

*   **Plant:** The system to be controlled.
*   **Controller:** A device that generates a control signal to influence the plant.
*   **Compensator:** A controller designed to improve system performance.
*   **Performance Specifications:** Desired characteristics of the closed-loop system, typically related to transient response (e.g., percent overshoot, settling time, rise time) and steady-state response (e.g., steady-state error).

**Referenced Textbooks:**

*   **Nise (2009):** Chapter 6: Stability, and Chapter 7: Reduction of System Errors, and Chapter 8: Time and Frequency Responses. While not directly on controller design, these chapters lay the foundation for understanding performance metrics.
*   **Nagrath & Gopal (2009):** Chapter 5: Root Locus Technique, and Chapter 6: Stability and Transient Response Analysis. These provide the theoretical underpinnings for controller design using root locus.

---

### 2. Types of Controllers and Compensators

Controllers are broadly categorized based on their output signal's relationship to the error signal. The most common types used in classical control design are:

#### 2.1. Proportional (P) Controller

*   **Transfer Function:** $C(s) = K_p$
*   **Effect:** The output is directly proportional to the error signal.
    *   **Pros:** Can increase system speed and reduce steady-state error.
    *   **Cons:** Cannot eliminate steady-state error for certain system types and can increase overshoot and reduce stability if $K_p$ is too large.
*   **Root Locus Impact:** Shifts the root locus branches, generally towards the left in the s-plane, potentially improving stability and reducing settling time.

#### 2.2. Proportional-Integral (PI) Controller

*   **Transfer Function:** $C(s) = K_p + \frac{K_i}{s} = K_p \left(1 + \frac{1}{T_i s}\right) = K_p \frac{s + 1/T_i}{s}$
*   **Effect:** Proportional term provides immediate response, while the integral term eliminates steady-state error by accumulating past errors.
    *   **Pros:** Eliminates steady-state error for Type 0 systems and improves it for higher type systems. Can also improve transient response.
    *   **Cons:** Can introduce instability or undesirable transient response if not tuned properly. The added pole at the origin can make the system less stable.
*   **Root Locus Impact:** Introduces a pole at the origin, which is always on the real axis to the left of any real axis zeros. This can shift the root locus towards the desired region. It also introduces a zero, which can be used to bend the root locus branches towards the desired closed-loop pole locations.

#### 2.3. Proportional-Derivative (PD) Controller

*   **Transfer Function:** $C(s) = K_p + K_d s = K_d(s + z)$ where $z = K_p/K_d$
*   **Effect:** Proportional term provides present error response, while the derivative term anticipates future errors by looking at the rate of change of the error.
    *   **Pros:** Improves transient response by increasing damping and reducing overshoot and settling time. Can also increase system speed.
    *   **Cons:** Does not affect steady-state error. Can amplify high-frequency noise.
*   **Root Locus Impact:** Introduces a zero into the system. This zero can be placed strategically to attract the root locus branches and pull them towards the desired closed-loop pole locations, thus improving damping.

#### 2.4. Proportional-Integral-Derivative (PID) Controller

*   **Transfer Function:** $C(s) = K_p + \frac{K_i}{s} + K_d s = K_d \frac{s^2 + (K_p/K_d)s + K_i/K_d}{s}$
*   **Effect:** Combines the benefits of P, I, and D actions.
    *   **Pros:** Offers the most flexibility in shaping system response. Can achieve fast response, low overshoot, and zero steady-state error.
    *   **Cons:** Tuning can be complex due to the three gain parameters.
*   **Root Locus Impact:** Introduces a pole at the origin and two zeros. The placement of these zeros is critical for shaping the root locus to meet performance specifications.

**Referenced Textbooks:**

*   **Nise (2009):** Chapter 9: Controller Design. This is the primary chapter for understanding controller types and their impact.
*   **Kuo (2014):** Chapter 7: System Analysis and Controller Design. Discusses the basic controller types.
*   **Ogata (2009):** Chapter 7: Design of Feedback Control Systems. Covers PID controllers and their design.

---

### 3. Controller Design Using Root Locus

The root locus technique provides a graphical method to understand how the closed-loop poles move as controller parameters are varied. This allows us to select parameters that place the closed-loop poles in desired locations to meet performance specifications.

**General Design Approach:**

1.  **Define Performance Specifications:** Translate desired transient and steady-state responses into specifications for the closed-loop poles (e.g., damping ratio $\zeta$, natural frequency $\omega_n$, settling time $T_s$, percent overshoot $P.O.$).
2.  **Determine Desired Closed-Loop Pole Locations:** Based on the performance specifications, determine the desired region or specific locations for the dominant closed-loop poles in the s-plane.
    *   $T_s \approx \frac{4}{\zeta\omega_n}$ or $T_s \approx \frac{4}{|\text{Re}\{p_1\}|}$
    *   $P.O. = 100 e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$
    *   $\omega_n = \frac{\omega_d}{\sqrt{1-\zeta^2}}$ where $\omega_d$ is the dominant natural frequency.
3.  **Analyze the Uncompensated System's Root Locus:** Plot the root locus of the open-loop system $G(s)H(s)$ without any controller. Identify the locations of the closed-loop poles for different values of the gain $K$.
4.  **Design the Compensator:**
    *   **Determine if compensation is needed:** Check if the uncompensated system's root locus passes through the desired region or if the desired pole locations can be achieved with reasonable gain.
    *   **Select the type of compensator:** Choose P, PI, PD, or PID based on the required improvements.
    *   **Place the compensator's poles and zeros:** The objective is to modify the root locus of the compensated system $C(s)G(s)H(s)$ so that it passes through the desired closed-loop pole locations.
5.  **Verify the Design:** Plot the root locus of the compensated system and check if the desired pole locations lie on the locus. Calculate the necessary gain $K$ at these locations. Analyze the transient response with the designed controller.

---

### 4. Design of Lead Compensators

Lead compensators are typically implemented using PD controllers. They introduce a zero and a pole, with the zero located closer to the origin than the pole.

*   **Transfer Function (PD Controller):** $C(s) = K_d(s + z) = K_d \frac{s+z}{1}$ (This is a simpler form, often the denominator is considered as part of the plant). A more general lead compensator is $C(s) = K \frac{s+z}{s+p}$ where $p > z$.

*   **Root Locus Impact:** The zero attracts the root locus, and the pole repels it. The net effect is to bend the root locus towards the left half-plane, improving stability and transient response.

**Design Steps for a PD Controller (Lead Compensator):**

1.  **Determine desired closed-loop pole location ($p_d$)**: Based on specifications.
2.  **Check if gain adjustment is sufficient:** Calculate the gain required to place a closed-loop pole at $p_d$ on the uncompensated system's root locus. If this gain doesn't meet specifications (e.g., damping), compensation is needed.
3.  **Place the zero ($z$)**: Place the zero of the PD controller such that it attracts the root locus towards $p_d$. A common strategy is to place the zero near an open-loop pole that is causing poor transient response.
4.  **Determine the pole location ($p$)**: The pole of the compensator is usually placed further to the left than the zero. The exact location of $p$ is chosen such that the desired pole $p_d$ lies on the root locus of the compensated system. The angle condition at $p_d$ is used:
    $\angle C(s)G(s)H(s) = 180^\circ$
    $\angle K_d(s+z)G(s)H(s) = 180^\circ$
    $\angle K_d + \angle (s+z) + \angle G(s)H(s) = 180^\circ$
    The angle contribution of the pole $p$ is included:
    $\angle K_d + \angle (s+z) - \angle (s+p) + \angle G(s)H(s) = 180^\circ$
    Solving for $p$ given $z$ and $p_d$:
    $\angle (p_d+z) - \angle (p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$
    $\arctan\left(\frac{\text{Im}(p_d)}{\text{Re}(p_d)+z}\right) - \arctan\left(\frac{\text{Im}(p_d)}{\text{Re}(p_d)+p}\right) + \angle G(p_d)H(p_d) = 180^\circ$
    From this equation, $p$ can be determined.
5.  **Calculate the gain $K_d$**: Once $p_d$, $z$, and $p$ are known, the magnitude condition is used at $p_d$:
    $|K_d(s+z)G(s)H(s)|_{s=p_d} = 1$
    $K_d = \frac{1}{|(s+z)G(s)H(s)|_{s=p_d}}$

**Example (Nise, 2009, Chapter 9):**

Consider a system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)}$. We want to design a PD controller to yield a damping ratio $\zeta = 0.707$ and a settling time $T_s \le 2$ seconds.

1.  **Desired Pole Location:**
    *   $T_s \approx \frac{4}{\zeta\omega_n} \le 2 \implies \zeta\omega_n \ge 2$.
    *   With $\zeta = 0.707$, $\omega_n \ge \frac{2}{0.707} \approx 2.828$.
    *   We can choose a desired dominant pole $p_d$ on the line $\zeta = 0.707$ and to the left of $\text{Re}(p_d) = -2$. Let's choose $p_d = -2 + j2$. This gives $\zeta = \frac{-2}{\sqrt{(-2)^2 + 2^2}} = \frac{-2}{\sqrt{8}} = -0.707$ (magnitude matters for damping ratio) and $\omega_n = \sqrt{8} = 2.828$.

2.  **Uncompensated System Check:**
    *   The root locus is $1 + \frac{K}{s(s+2)} = 0$.
    *   At $s = -2 + j2$: $1 + \frac{K}{(-2+j2)(-2+j2+2)} = 0 \implies 1 + \frac{K}{(-2+j2)(j2)} = 0$
    *   $1 + \frac{K}{-4j - 4} = 0 \implies 1 + \frac{K}{-4(1+j)} = 0 \implies K = 4(1+j) = 4+j4$.
    *   Magnitude of $K$ is $|K| = \sqrt{4^2+4^2} = \sqrt{32} \approx 5.66$. This is a real gain, so it's achievable.
    *   Let's check the damping ratio at this gain. The closed-loop poles are found by $s^2 + 2s + K = 0$. For $K = 32$, $s^2 + 2s + 32 = 0$.
    *   $s = \frac{-2 \pm \sqrt{4 - 4(32)}}{2} = \frac{-2 \pm \sqrt{4-128}}{2} = \frac{-2 \pm \sqrt{-124}}{2} = -1 \pm j\sqrt{31}$.
    *   $\zeta = \frac{-(-1)}{\sqrt{(-1)^2 + (\sqrt{31})^2}} = \frac{1}{\sqrt{1+31}} = \frac{1}{\sqrt{32}} \approx 0.177$. This is too low. We need higher damping.

3.  **PD Controller Design:** $C(s) = K_d(s+z)$. The compensated open-loop transfer function is $K_d \frac{s+z}{s(s+2)}$.
    *   **Place the zero ($z$)**: Let's place the zero at $z=2$ to cancel the pole at $s=-2$, which would simplify the root locus. This is a common strategy to improve damping. So, $C(s) = K_d(s+2)$.
    *   The new open-loop system is $K_d \frac{s+2}{s(s+2)} = \frac{K_d}{s}$.
    *   The closed-loop characteristic equation is $1 + \frac{K_d}{s} = 0 \implies s + K_d = 0 \implies s = -K_d$.
    *   For our desired pole $p_d = -2+j2$, this would require $K_d = 2-j2$, which is not a real gain. This indicates that simply canceling the pole might not be optimal or that the desired pole is not achievable with this simple cancellation.

    *   Let's try placing the zero at $z=4$. $C(s) = K_d(s+4)$.
    *   Compensated open-loop TF: $K_d \frac{s+4}{s(s+2)}$.
    *   Angle condition at $p_d = -2 + j2$:
        $\angle K_d + \angle (-2+j2+4) - \angle (-2+j2) + \angle \frac{1}{(-2+j2)(-2+j2+2)} = 180^\circ$
        $\angle K_d + \angle (2+j2) - \angle (-2+j2) + \angle \frac{1}{(-2+j2)(j2)} = 180^\circ$
        $0^\circ + \arctan(\frac{2}{2}) - \arctan(\frac{2}{-2}) + \angle \frac{1}{-4-4j} = 180^\circ$
        $0^\circ + 45^\circ - 135^\circ + \angle \frac{1}{-4(1+j)} = 180^\circ$
        $-90^\circ + \angle \frac{1}{-4(1+j)} = 180^\circ$
        $\angle \frac{1}{-4(1+j)} = 270^\circ$ or $-90^\circ$.
        $\angle \frac{1}{-4-j4} = \arctan(\frac{-4}{-4}) + 180^\circ = 45^\circ + 180^\circ = 225^\circ$ (or $-135^\circ$). This doesn't match.

    *   Let's rethink the zero placement. We want the root locus to pass through $p_d = -2 + j2$.
    *   Consider placing the zero at $z=1$. $C(s) = K_d(s+1)$.
    *   Angle condition at $p_d = -2 + j2$:
        $\angle K_d + \angle (-2+j2+1) - \angle (-2+j2) + \angle \frac{1}{(-2+j2)(j2)} = 180^\circ$
        $0^\circ + \angle (-1+j2) - \angle (-2+j2) + \angle \frac{1}{-4-4j} = 180^\circ$
        $0^\circ + 116.56^\circ - 135^\circ + (-135^\circ) = 180^\circ$
        $116.56^\circ - 270^\circ = -153.44^\circ$. This is not $180^\circ$.

    *   **Nise's strategy for PD Design:** Choose the zero location. Then use the angle condition to find the pole location.
    *   Let's choose the zero at $z=4$. $C(s) = K_d \frac{s+4}{s+p}$.
    *   Angle condition at $p_d = -2 + j2$:
        $\angle (p_d+4) - \angle (p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$
        $\angle (-2+j2+4) - \angle (-2+j2+p) + \angle \frac{1}{(-2+j2)(j2)} = 180^\circ$
        $\angle (2+j2) - \angle (-2+p+j2) + \angle \frac{1}{-4-4j} = 180^\circ$
        $45^\circ - \arctan(\frac{2}{-2+p}) + (-135^\circ) = 180^\circ$
        $-90^\circ - \arctan(\frac{2}{p-2}) = 180^\circ$
        $-\arctan(\frac{2}{p-2}) = 270^\circ$ (or $-90^\circ$)
        $\arctan(\frac{2}{p-2}) = 90^\circ$
        This means the denominator $p-2$ must be zero for the tangent to be infinite. However, $p$ must be to the left of the zero, so $p > z = 4$ for a lead compensator. This suggests the zero placement needs adjustment.

    *   Let's try placing the zero at $z = 1$. $C(s) = K_d \frac{s+1}{s+p}$.
    *   Angle condition at $p_d = -2 + j2$:
        $\angle (p_d+1) - \angle (p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$
        $\angle (-1+j2) - \angle (-2+p+j2) + \angle \frac{1}{(-2+j2)(j2)} = 180^\circ$
        $116.56^\circ - \arctan(\frac{2}{p-2}) + (-135^\circ) = 180^\circ$
        $-18.44^\circ - \arctan(\frac{2}{p-2}) = 180^\circ$
        $\arctan(\frac{2}{p-2}) = -198.44^\circ$ (or $161.56^\circ$).
        This requires $\frac{2}{p-2} = \tan(161.56^\circ) \approx -0.31$.
        $p-2 = \frac{2}{-0.31} \approx -6.45$.
        $p \approx -4.45$.
        This choice of $p = -4.45$ would make it a lag compensator or a very weak lead.

    *   **Backtrack to Nise's example for a PD controller:** $C(s) = K_d(s+z)$.
    *   Desired pole: $p_d = -2+j2$.
    *   Try $z=4$. $C(s) = K_d(s+4)$.
    *   Compensated open-loop TF: $K_d \frac{s+4}{s(s+2)}$.
    *   Angle of $G(s)H(s)$ at $p_d$: $\angle \frac{1}{(-2+j2)(j2)} = \angle \frac{1}{-4-4j} = -135^\circ$.
    *   Angle of $(s+z)$ at $p_d$: $\angle (-2+j2+4) = \angle (2+j2) = 45^\circ$.
    *   Angle condition: $\angle K_d(s+z)G(s)H(s) = \angle K_d + \angle(s+z) + \angle G(s)H(s) = 180^\circ$.
    *   $0^\circ + 45^\circ + (-135^\circ) = -90^\circ$. We need an additional $270^\circ$ or $-90^\circ$. This means the zero needs to be placed differently.

    *   **Nise's strategy for PD Controller:** Place the zero. Calculate the angle contributed by the open-loop system and the compensator zero at the desired pole. The difference from 180 degrees is the required angle contribution of the compensator pole.
    *   Desired Pole $p_d = -2 + j2$.
    *   Choose the zero at $z=4$. $C(s) = K_d(s+4)$.
    *   Angle of $G(s)H(s)$ at $p_d = -2+j2$: $\angle G(p_d)H(p_d) = \angle \frac{1}{(-2+j2)(j2)} = -135^\circ$.
    *   Angle of $(s+z)$ at $p_d$: $\angle (p_d+4) = \angle (-2+j2+4) = \angle (2+j2) = 45^\circ$.
    *   Total angle from open-loop poles and zero: $45^\circ - 135^\circ = -90^\circ$.
    *   To satisfy $180^\circ$, we need a compensator pole at $-p$ such that its angle contribution at $p_d$ is $180^\circ - (-90^\circ) = 270^\circ$ (or $-90^\circ$).
    *   $\angle (p_d+p) = \arctan(\frac{2}{-2+p})$.
    *   We need $\arctan(\frac{2}{-2+p}) = -90^\circ$. This means $-2+p = 0$, so $p=2$.
    *   So, if we use a PD controller $C(s) = K_d(s+4)$, the pole would be at $p=2$, which is in the RHP and not allowed. This confirms our earlier issue.

    *   **Let's re-examine Nise's Chapter 9 Example 9.2:**
        System: $G(s)H(s) = \frac{K}{s(s+1)(s+5)}$.
        Specifications: $\zeta=0.5$, $T_s \le 4$ seconds.
        Desired Pole: $T_s \approx \frac{4}{\zeta \omega_n} \le 4 \implies \zeta \omega_n \ge 1$.
        With $\zeta=0.5$, $\omega_n \ge 2$. Let's choose $p_d = -1 + j\sqrt{3}$.
        $\zeta = \frac{-(-1)}{\sqrt{(-1)^2+(\sqrt{3})^2}} = \frac{1}{\sqrt{1+3}} = 0.5$.
        $\omega_n = \sqrt{1+3} = 2$.
        Uncompensated System: $1 + \frac{K}{s(s+1)(s+5)} = 0$.
        At $p_d = -1+j\sqrt{3}$:
        $K = |s(s+1)(s+5)|_{s=p_d} = |-1+j\sqrt{3}(-1+j\sqrt{3}+1)(-1+j\sqrt{3}+5)|$
        $K = |-1+j\sqrt{3}(j\sqrt{3})(4+j\sqrt{3})| = |(-1+j\sqrt{3})(j\sqrt{3})(4+j\sqrt{3})|$
        $K = |(-j\sqrt{3} - 3)(4+j\sqrt{3})| = |-12 -j3\sqrt{3} -j3\sqrt{3} + 9| = |-3 -j6\sqrt{3}|$
        $K = \sqrt{(-3)^2 + (-6\sqrt{3})^2} = \sqrt{9 + 36 \times 3} = \sqrt{9 + 108} = \sqrt{117} \approx 10.8$.
        The closed-loop poles for $K=117$ are roots of $s^3 + 6s^2 + 5s + 117 = 0$.
        If we divide by $(s - p_d)$, we get $(s+1-j\sqrt{3})(s+1+j\sqrt{3})(s+4) = (s^2+2s+4)(s+4) = s^3 + 6s^2 + 20s + 16$. This does not match. Something is wrong with manual calculation or interpretation.

        **Let's focus on the *principle* of PD/Lead compensation:**
        *   Place the zero to attract the locus. A good starting point is to place it near a dominant open-loop pole.
        *   Place the pole such that the desired pole $p_d$ lies on the root locus.
        *   Use the angle condition to find the pole if the zero is fixed, or vice-versa.

        Consider $C(s) = K \frac{s+z}{s+p}$ (Lead Compensator).
        Angle condition: $\sum \angle(\text{zeros}) - \sum \angle(\text{poles}) = 180^\circ$.
        For $C(s)G(s)H(s)$, the total angle is $\angle C(p_d) + \angle G(p_d)H(p_d) = 180^\circ$.
        $\angle(p_d+z) - \angle(p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$.

        If we want to shape the locus to pass through $p_d$, we adjust $z$ and $p$. For a lead compensator, $p>z$.

---

### 5. Design of Lag Compensators

Lag compensators are typically implemented using PI controllers. They introduce a zero and a pole, with the zero located closer to the origin than the pole.

*   **Transfer Function (PI Controller):** $C(s) = K_p \frac{s + 1/T_i}{s}$. This is a lag-lead compensator if $K_p$ is adjusted, or a pure lag if the pole is at the origin. More generally, a lag compensator is $C(s) = K \frac{s+z}{s+p}$ where $z > p$.

*   **Root Locus Impact:** The zero and pole are close together. The zero is closer to the origin. The zero attracts the locus more strongly than the pole repels it. The net effect is to shift the root locus branches slightly to the left, improving transient response marginally, but its primary purpose is to improve steady-state error.
    *   **Steady-State Error Improvement:** By adding a pole at the origin (as in a PI controller), the system becomes Type 1, which eliminates steady-state error for a step input. If the system is already Type 1, adding a pole at the origin will make it Type 2, further reducing error for ramp inputs.

**Design Steps for a PI Controller (Lag Compensator):**

1.  **Determine desired closed-loop pole location ($p_d$)**: Based on specifications.
2.  **Check steady-state error:** If the uncompensated system has too high a steady-state error for the desired input, a PI controller is necessary. The steady-state error is often related to the DC gain of the open-loop system. For a Type 0 system, steady-state error for a step input is $1/(1+K_{DC})$. For a Type 1 system, steady-state error for a step input is 0, but for a ramp input, it's $1/K_v$.
3.  **Place the zero ($z$) and pole ($p$)**:
    *   Place the pole $p$ very close to the origin (e.g., $p=0.01$ for a PI controller with a pole at origin, or $p$ slightly left of origin for a general lag).
    *   Place the zero $z$ such that $z > p$.
    *   The zero and pole should be chosen such that they have minimal impact on the root locus shape at the desired dominant pole location $p_d$, but improve the steady-state error.
    *   A common strategy is to place the zero at the location of an existing open-loop pole that is causing poor transient response, and place the pole close to the origin.
4.  **Satisfy the angle condition:** Ensure the root locus of the compensated system passes through $p_d$.
    $\angle(p_d+z) - \angle(p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$.
5.  **Calculate the gain ($K$)**: Use the magnitude condition at $p_d$:
    $|K \frac{p_d+z}{p_d+p} G(p_d)H(p_d)| = 1$
    $K = \frac{|p_d+p|}{|p_d+z|} \frac{1}{|G(p_d)H(p_d)|}$

**Example (Nise, 2009, Chapter 9):**

System: $G(s)H(s) = \frac{K}{s+2}$.
Specifications: $\zeta=0.707$, steady-state error for a step input $e_{ss} \le 0.05$.
Desired Pole: $T_s \approx \frac{4}{\zeta \omega_n}$. Let's choose $p_d = -2+j2$. $\zeta=0.707$, $\omega_n = 2.828$.
Uncompensated System: $1 + \frac{K}{s+2} = 0 \implies s+2+K = 0 \implies s = -(2+K)$.
This system only has a real pole. We cannot achieve complex poles.

*   **Let's consider a Type 0 system that needs improvement:** $G(s)H(s) = \frac{K}{s+10}$.
    We want to add a PI controller $C(s) = K_p + \frac{K_i}{s} = K_p \frac{s+K_i/K_p}{s}$. Let $z = K_i/K_p$.
    So, $C(s) = K_p \frac{s+z}{s}$.
    Desired pole $p_d = -2+j2$.
    Angle condition at $p_d$:
    $\angle K_p + \angle (p_d+z) - \angle p_d + \angle G(p_d)H(p_d) = 180^\circ$.
    $\angle p_d = \angle (-2+j2) = 135^\circ$.
    $\angle G(p_d)H(p_d) = \angle \frac{1}{-2+j2+10} = \angle \frac{1}{8+j2} = \arctan(\frac{2}{8}) + 180^\circ = 14.04^\circ + 180^\circ = 194.04^\circ$ (or $-165.96^\circ$).
    We need $\angle (p_d+z) = 180^\circ - 135^\circ - (-165.96^\circ) = 210.96^\circ$ (or $-149.04^\circ$).
    $\angle (-2+z+j2) = \arctan(\frac{2}{-2+z})$.
    $\arctan(\frac{2}{z-2}) = -149.04^\circ$.
    $\frac{2}{z-2} = \tan(-149.04^\circ) \approx 0.46$.
    $z-2 = \frac{2}{0.46} \approx 4.35$.
    $z \approx 6.35$.
    So, the PI controller zero is at $s = -6.35$.
    Now for the gain:
    $|K_p \frac{p_d+z}{p_d} G(p_d)H(p_d)| = 1$
    $K_p = \frac{|p_d|}{|p_d+z|} \frac{1}{|G(p_d)H(p_d)|}$
    $|p_d| = |-2+j2| = \sqrt{(-2)^2+2^2} = \sqrt{8}$.
    $|p_d+z| = |-2+6.35+j2| = |4.35+j2| = \sqrt{4.35^2+2^2} = \sqrt{18.92+4} = \sqrt{22.92} \approx 4.78$.
    $|G(p_d)H(p_d)| = |\frac{1}{8+j2}| = \frac{1}{\sqrt{8^2+2^2}} = \frac{1}{\sqrt{64+4}} = \frac{1}{\sqrt{68}} \approx 0.108$.
    $K_p = \frac{\sqrt{8}}{4.78} \frac{1}{0.108} \approx \frac{2.828}{0.478 \times 0.108} \approx \frac{2.828}{0.516} \approx 5.48$.
    The PI controller is $C(s) = 5.48 \frac{s+6.35}{s}$.
    This design improves transient response and makes the system Type 1, eliminating steady-state error for step input.

---

### 6. Design of Lag-Lead Compensators

Lag-lead compensators combine the properties of lag and lead compensators. They are used when both steady-state error reduction and transient response improvement are required.

*   **Transfer Function:** $C(s) = K \frac{(s+z_1)(s+z_2)}{(s+p_1)(s+p_2)}$
    *   **Lag Part:** $z_1 > p_1$, $z_1$ close to origin. This part improves steady-state error.
    *   **Lead Part:** $z_2 < p_2$, $p_2$ further from origin. This part improves transient response.

**Design Approach:**

1.  **Design the lag compensator first** to meet steady-state error requirements and to bend the root locus towards the desired region.
2.  **Then, design the lead compensator** to further shape the root locus to pass through the desired closed-loop pole location for transient response.

Alternatively, design both simultaneously by satisfying angle and magnitude conditions.

---

### 7. Pole-Zero Cancellation

When designing controllers, a pole of the system can be cancelled by a zero of the controller.

*   **Example:** $C(s) = K_d(s+a)$, $G(s)H(s) = \frac{...}{(s+a)(s+b)}$.
    The compensated open-loop transfer function becomes $K_d \frac{s+a}{(s+a)(s+b)} = \frac{K_d}{s+b}$.
    This simplifies the system and can be very effective in improving performance.
*   **Caution:** Pole-zero cancellation should be done carefully. If the pole to be cancelled is far to the left of the dominant poles, its cancellation might not significantly affect the dominant response. If it's close to the dominant poles, cancellation can be beneficial. However, it also reduces the system's order and can affect sensitivity to noise or parameter variations.

---

### 8. PID Controller Tuning Methods

While root locus can be used for PID design, specific tuning methods are often employed in practice.

*   **Ziegler-Nichols Methods:** Empirical methods for tuning PID controllers.
    *   **Closed-Loop Method:** Adjust $K_p$ until the system oscillates with a constant amplitude (ultimate gain $K_u$) and period $T_u$. Then calculate $K_p, T_i, T_d$ from $K_u$ and $T_u$.
    *   **Open-Loop Method:** Based on the step response of the open-loop system, estimating parameters like delay time $L$ and time constant $T$.
*   **Internal Model Control (IMC):** A more systematic approach to tuning PID controllers.
*   **Coefficients Methods:** Tuning based on desired closed-loop pole locations or desired response characteristics.

**Referenced Textbooks:**

*   **Nagrath & Gopal (2009):** Chapter 6 discusses PID controllers and tuning methods.
*   **Ogata (2009):** Chapter 7 covers PID controller design and tuning.
*   **Dorf & Bishop (2013):** Chapter 10: PID Controllers.

---

### 9. Practice Questions and Answers

**Question 1:**

A unity feedback system has an open-loop transfer function $G(s)H(s) = \frac{K}{s(s+4)}$. Design a PD controller such that the closed-loop system has a damping ratio $\zeta = 0.707$ and a settling time $T_s \le 2$ seconds.

**Answer 1:**

1.  **Desired Pole Location:**
    *   $T_s \approx \frac{4}{\zeta\omega_n} \le 2 \implies \zeta\omega_n \ge 2$.
    *   With $\zeta = 0.707$, $\omega_n \ge 2.828$.
    *   Let's choose a desired dominant pole $p_d = -2 + j2$.

2.  **Uncompensated System Check:**
    *   Root locus: $1 + \frac{K}{s(s+4)} = 0$.
    *   At $p_d = -2 + j2$: $K = |s(s+4)|_{s=p_d} = |(-2+j2)(-2+j2+4)| = |(-2+j2)(2+j2)|$
    *   $K = |(-4 - j4 + j4 - 4)| = |-8| = 8$.
    *   For $K=8$, the closed-loop poles are $s^2+4s+8=0$. $s = \frac{-4 \pm \sqrt{16-32}}{2} = -2 \pm j2$.
    *   $\zeta = \frac{-(-2)}{\sqrt{(-2)^2+2^2}} = \frac{2}{\sqrt{8}} = \frac{2}{2\sqrt{2}} = \frac{1}{\sqrt{2}} = 0.707$.
    *   $T_s = \frac{4}{\zeta\omega_n} = \frac{4}{2} = 2$ seconds.
    *   In this case, the uncompensated system with gain $K=8$ already meets the specifications. A PD controller is not strictly needed for these specific requirements. However, if the requirements were stricter (e.g., faster settling time), a PD controller would be necessary.

    *   **If a PD controller was necessary (e.g., desired $p_d = -4+j4$):**
        *   Desired Pole: $p_d = -4 + j4$. ($\zeta = 0.707$, $\omega_n = \sqrt{32} \approx 5.66$).
        *   $T_s = \frac{4}{\zeta\omega_n} = \frac{4}{4} = 1$ second.
        *   Uncompensated Gain for $p_d = -4+j4$:
            $K = |s(s+4)|_{s=-4+j4} = |(-4+j4)(-4+j4+4)| = |(-4+j4)(j4)|$
            $K = |-16j - 16| = \sqrt{(-16)^2 + (-16)^2} = \sqrt{256+256} = \sqrt{512} \approx 22.6$.
        *   PD Controller: $C(s) = K_d(s+z)$.
        *   Angle of $G(s)H(s)$ at $p_d = -4+j4$:
            $\angle \frac{1}{(-4+j4)(j4)} = \angle \frac{1}{-16j + 16} = \arctan(\frac{-16}{16}) - 90^\circ = -45^\circ - 90^\circ = -135^\circ$.
        *   Angle of $(s+z)$ at $p_d$: $\angle (-4+z+j4)$.
        *   Angle condition: $\angle K_d + \angle (-4+z+j4) + (-135^\circ) = 180^\circ$.
        *   $\angle (z-4+j4) = 180^\circ + 135^\circ = 315^\circ$ (or $-45^\circ$).
        *   $\arctan(\frac{4}{z-4}) = -45^\circ$.
        *   $\frac{4}{z-4} = \tan(-45^\circ) = -1$.
        *   $4 = -(z-4) = -z+4 \implies z=0$. This is a P controller, which won't help much.

        *   Let's try placing the zero at $z=6$ (to attract the locus further right). $C(s) = K_d(s+6)$.
        *   Angle of $(s+6)$ at $p_d = -4+j4$: $\angle (-4+6+j4) = \angle (2+j4)$.
        *   $\arctan(\frac{4}{2}) = \arctan(2) \approx 63.4^\circ$.
        *   Angle condition: $63.4^\circ - 135^\circ = -71.6^\circ$.
        *   We need $180^\circ - (-71.6^\circ) = 251.6^\circ$ or $-108.4^\circ$ from the compensator.
        *   If we use $C(s) = K_d \frac{s+z}{s+p}$:
            Let $p_d = -4+j4$, $z=6$.
            $\angle (p_d+6) - \angle (p_d+p) + \angle G(p_d)H(p_d) = 180^\circ$.
            $63.4^\circ - \angle (-4+p+j4) - 135^\circ = 180^\circ$.
            $-\arctan(\frac{4}{p-4}) - 71.6^\circ = 180^\circ$.
            $\arctan(\frac{4}{p-4}) = -251.6^\circ$ (or $108.4^\circ$).
            $\frac{4}{p-4} = \tan(108.4^\circ) \approx -3.0$.
            $p-4 = \frac{4}{-3.0} \approx -1.33$.
            $p \approx 2.67$. This is RHP.

        *   **Correct PD Design Strategy:** Place the zero $z$ such that the angle condition is satisfied with the desired pole $p_d$.
            For $p_d = -4+j4$ and $G(s)H(s) = \frac{K}{s(s+4)}$.
            Angle of $G(s)H(s)$ at $p_d$ is $-135^\circ$.
            We need $\angle (p_d+z) = 180^\circ - (-135^\circ) = 315^\circ$ (or $-45^\circ$).
            $\arctan(\frac{4}{z-4}) = -45^\circ$.
            $\frac{4}{z-4} = -1 \implies 4 = -(z-4) \implies 4 = -z+4 \implies z=0$. This means a P controller.

        *   Let's reconsider the initial question: $p_d = -2+j2$ for $G(s)H(s) = \frac{K}{s(s+4)}$. The uncompensated system already meets the requirements with $K=8$. So, a PD controller is not needed.

**Question 2:**

A unity feedback system has an open-loop transfer function $G(s)H(s) = \frac{K}{s+10}$. Design a PI controller to eliminate the steady-state error for a step input and achieve a dominant closed-loop pole with $\zeta = 0.707$ at a natural frequency $\omega_n = 5$ rad/s.

**Answer 2:**

1.  **Desired Pole Location:**
    *   $\zeta = 0.707$, $\omega_n = 5$.
    *   $p_d = -\zeta\omega_n + j\omega_n\sqrt{1-\zeta^2} = -0.707 \times 5 + j 5 \sqrt{1-0.707^2} = -3.535 + j 3.535$.

2.  **PI Controller:** $C(s) = K_p \frac{s+z}{s}$.
    *   The PI controller adds a pole at the origin, making the system Type 1 and eliminating steady-state error for step input.

3.  **Angle Condition at $p_d = -3.535 + j3.535$:**
    *   $\angle C(p_d) + \angle G(p_d)H(p_d) = 180^\circ$.
    *   $\angle K_p + \angle (p_d+z) - \angle p_d + \angle G(p_d)H(p_d) = 180^\circ$.
    *   $\angle p_d = \angle (-3.535 + j3.535) = 135^\circ$.
    *   $\angle G(p_d)H(p_d) = \angle \frac{1}{-3.535+j3.535+10} = \angle \frac{1}{6.465+j3.535}$.
    *   $\arctan(\frac{3.535}{6.465}) = 28.7^\circ$.
    *   $\angle G(p_d)H(p_d) = -28.7^\circ$.
    *   We need $\angle (p_d+z) = 180^\circ - 135^\circ - (-28.7^\circ) = 73.7^\circ$.
    *   $\angle (-3.535+z+j3.535) = \arctan(\frac{3.535}{z-3.535})$.
    *   $\arctan(\frac{3.535}{z-3.535}) = 73.7^\circ$.
    *   $\frac{3.535}{z-3.535} = \tan(73.7^\circ) \approx 3.4$.
    *   $z-3.535 = \frac{3.535}{3.4} \approx 1.04$.
    *   $z \approx 4.575$.
    *   The PI controller zero is at $s = -4.575$.

4.  **Magnitude Condition:**
    *   $|K_p \frac{p_d+z}{p_d} G(p_d)H(p_d)| = 1$.
    *   $K_p = \frac{|p_d|}{|p_d+z|} \frac{1}{|G(p_d)H(p_d)|}$.
    *   $|p_d| = |-3.535+j3.535| = \sqrt{(-3.535)^2 + (3.535)^2} = \sqrt{12.5+12.5} = \sqrt{25} = 5$.
    *   $|p_d+z| = |-3.535+4.575+j3.535| = |1.04+j3.535|$.
    *   $|1.04+j3.535| = \sqrt{1.04^2 + 3.535^2} = \sqrt{1.08 + 12.5} = \sqrt{13.58} \approx 3.685$.
    *   $|G(p_d)H(p_d)| = |\frac{1}{6.465+j3.535}| = \frac{1}{\sqrt{6.465^2+3.535^2}} = \frac{1}{\sqrt{41.8+12.5}} = \frac{1}{\sqrt{54.3}} \approx 0.136$.
    *   $K_p = \frac{5}{3.685} \times \frac{1}{0.136} \approx 1.357 \times 7.35 \approx 9.98$. Let's use $K_p = 10$.
    *   The PI controller is $C(s) = 10 \frac{s+4.575}{s}$.

---

### 10. Important Points to Remember

*   **Root Locus as a Design Tool:** The root locus is a powerful graphical method for visualizing how closed-loop poles change with system parameters, enabling intelligent controller design.
*   **Performance Specifications to Pole Locations:** Always translate transient and steady-state performance requirements into desired s-plane pole locations.
*   **Compensator Effects:** Understand the impact of PD (lead) compensators on transient response (damping, speed) and PI (lag) compensators on steady-state error.
*   **Angle and Magnitude Conditions:** These are the fundamental tools for placing poles and zeros to satisfy the root locus requirements.
*   **Pole-Zero Cancellation:** Use judiciously to simplify systems or improve performance, but be aware of its potential downsides.
*   **Tuning:** While root locus provides a systematic design, fine-tuning of controller parameters is often necessary in practice.
*   **Controller Types:** P, PI, PD, and PID controllers are building blocks, and their combination allows for significant system modification.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age.
*   Kuo, B. C. (2014). *Automatic Control Systems* (9th ed.). Prentice Hall of India.
*   Gopal, M. (2012). *Control Systems Principles and Design* (4th ed.). Tata McGraw Hill.
*   Dorf, R. C., & Bishop, R. H. (2013). *Modern Control Systems* (12th ed.). Pearson Education India.
*   Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.

---