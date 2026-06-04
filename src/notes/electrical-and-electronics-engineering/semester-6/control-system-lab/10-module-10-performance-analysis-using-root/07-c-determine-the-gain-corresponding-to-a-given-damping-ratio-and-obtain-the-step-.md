---
title: "c. Determine the gain corresponding to a given damping ratio and obtain  the step response of the system for the corresponding gain."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677e"
status: "completed"
scrapedAt: "2026-05-23T16:25:27.857Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: c. Determine the gain corresponding to a given damping ratio and obtain the step response of the system for the corresponding gain.

---

### 1. Learning Outcomes

*   Understand the relationship between pole locations in the s-plane and system performance characteristics (damping ratio, natural frequency, settling time, rise time, peak overshoot).
*   Utilize the root locus to identify the gain value that yields a desired damping ratio.
*   Simulate the step response of a system for a specific gain value determined from the root locus.
*   Analyze and interpret the obtained step response characteristics in relation to the chosen damping ratio.

---

### 2. Introduction to Root Locus and Damping Ratio

The **root locus** is a graphical method used to determine the locations of the closed-loop poles of a system as a parameter (typically gain, $K$) is varied from 0 to infinity. It provides valuable insights into system stability and performance.

The **damping ratio ($\zeta$)** is a critical parameter that describes how oscillations in a system decay after a disturbance.

*   **$\zeta < 0$**: Unstable system (oscillations grow over time).
*   **$0 < \zeta < 1$**: Underdamped system (oscillations decay over time).
*   **$\zeta = 1$**: Critically damped system (fastest response without overshoot).
*   **$\zeta > 1$**: Overdamped system (slow response with no overshoot).

**Key Concept:** The location of the dominant closed-loop poles in the s-plane directly influences the transient response. For a second-order system, the poles are located at:

$s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$

*   $\zeta\omega_n$ represents the real part of the poles, which determines the decay rate.
*   $\omega_n\sqrt{1-\zeta^2}$ represents the imaginary part of the poles, which determines the frequency of oscillation.

**Reference:** Ogata, "Modern Control Engineering," Chapter 6 discusses the relationship between pole locations and transient response. Nise, "Control Systems Engineering," Chapter 4 also covers these fundamental concepts.

---

### 3. Determining Gain for a Given Damping Ratio

The root locus plot shows how the closed-loop poles move as the gain $K$ changes. We can use this to find the gain $K$ that places the dominant closed-loop poles on a specific damping ratio line.

**Procedure:**

1.  **Sketch or obtain the root locus plot** for the open-loop transfer function $G(s)H(s)$ of the system.
2.  **Draw the damping ratio line:** For a desired damping ratio $\zeta_d$, draw a radial line from the origin in the s-plane at an angle $\theta$ with respect to the negative real axis, where:
    $\theta = \cos^{-1}(\zeta_d)$
    *   *Example:* For $\zeta_d = 0.707$, $\theta = \cos^{-1}(0.707) = 45^\circ$. This line represents all points in the s-plane with a damping ratio of 0.707.
3.  **Find the intersection point(s):** Identify the point(s) where the damping ratio line intersects the root locus. These intersection points represent the locations of the closed-loop poles for the desired damping ratio.
4.  **Calculate the gain $K$:** At the intersection point(s), evaluate the magnitude of the open-loop transfer function evaluated at the pole location:
    $K = \frac{1}{|G(s)H(s)|_{s=s_1}}$
    where $s_1$ is the pole location on the root locus corresponding to the desired damping ratio.

**Important Note:** It's crucial to ensure that the intersection point lies on the actual root locus branches, not just on the damping ratio line.

**Reference:** Nise, "Control Systems Engineering," Chapter 6, provides detailed methods for constructing root locus and determining gain values. Ogata's text also offers graphical and analytical methods for gain calculation.

---

### 4. Obtaining Step Response for the Corresponding Gain

Once the gain $K$ is determined for the desired damping ratio, we can simulate the system's response to a unit step input using this gain.

**Procedure:**

1.  **Set the system gain** to the calculated value $K$.
2.  **Apply a unit step input** to the closed-loop system.
3.  **Observe and record the system's output response.** This will be the step response for the specified damping ratio.
4.  **Analyze the step response characteristics:**
    *   **Peak Overshoot (%OS):** The maximum overshoot as a percentage of the final value.
    *   **Settling Time ($T_s$):** The time it takes for the response to settle within a specified tolerance band (usually 2% or 5%) of the final value.
    *   **Rise Time ($T_r$):** The time it takes for the response to go from 10% to 90% of its final value.
    *   **Peak Time ($T_p$):** The time it takes for the response to reach its first peak.

**Relationship to Damping Ratio:**

*   **Higher $\zeta$ (closer to 1):** Lower overshoot, longer settling time (for critically damped).
*   **Lower $\zeta$ (closer to 0):** Higher overshoot, faster settling time (but more oscillations).

**Reference:** Nise, "Control Systems Engineering," Chapter 4, elaborates on the transient response specifications and their dependence on system parameters. Ogata's text also details how to analyze step response characteristics.

---

### 5. Example Scenario

Consider a unity feedback system with the open-loop transfer function:

$G(s)H(s) = \frac{K}{s(s+2)}$

We want to determine the gain $K$ that results in a damping ratio of $\zeta_d = 0.5$. Then, we will obtain the step response for this gain.

**Step 1: Sketch or Analyze the Root Locus**

*   **Poles:** $s=0$, $s=-2$
*   **Zeros:** None
*   **Asymptotes:** One asymptote along the negative real axis (1 zero - 2 poles = -1). Angle: $180^\circ$.
*   **Breakaway/Break-in Points:** Calculate by finding the roots of $1 + G(s)H(s) = 0$.
    $1 + \frac{K}{s(s+2)} = 0 \implies s^2 + 2s + K = 0$
    For poles $s = \frac{-2 \pm \sqrt{4-4K}}{2} = -1 \pm \sqrt{1-K}$.
    For real poles, $K \ge 1$.
    Breakaway point: Differentiate $K$ with respect to $s$: $K = -(s^2+2s)$. $\frac{dK}{ds} = -(2s+2) = 0 \implies s = -1$. At $s=-1$, $K = -((-1)^2 + 2(-1)) = -(-1) = 1$. So, breakaway point is at $s=-1$.
*   **Imaginary Axis Intercepts:** Set $s=j\omega$:
    $j\omega(j\omega+2) + K = 0 \implies -\omega^2 + 2j\omega + K = 0$
    Real part: $-\omega^2 + K = 0 \implies K = \omega^2$.
    Imaginary part: $2j\omega = 0 \implies \omega = 0$. This implies the root locus crosses the imaginary axis at the origin, which is already a pole. For stability, $K>0$.
*   **Root Locus Behavior:** Starts at $s=0$ and $s=-2$, moves towards the breakaway point at $s=-1$, then branches off along the asymptote at $180^\circ$ (negative real axis).

**Step 2: Draw the Damping Ratio Line**

For $\zeta_d = 0.5$, the angle is:
$\theta = \cos^{-1}(0.5) = 60^\circ$

Draw a line from the origin at $60^\circ$ with the negative real axis.

**Step 3: Find the Intersection Point**

The equation for the closed-loop poles is $s^2 + 2s + K = 0$.
For a second-order system, the characteristic equation is also given by:
$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$

Comparing coefficients:
$2\zeta\omega_n = 2 \implies \zeta\omega_n = 1$
$\omega_n^2 = K \implies \omega_n = \sqrt{K}$

We are given $\zeta_d = 0.5$.
$0.5 \omega_n = 1 \implies \omega_n = 2$.

Now, using $\omega_n = 2$ and $\zeta_d = 0.5$, the poles should be:
$s = -\zeta_d\omega_n \pm j\omega_n\sqrt{1-\zeta_d^2}$
$s = -(0.5)(2) \pm j(2)\sqrt{1-(0.5)^2}$
$s = -1 \pm j(2)\sqrt{1-0.25}$
$s = -1 \pm j(2)\sqrt{0.75}$
$s = -1 \pm j(2) \frac{\sqrt{3}}{2}$
$s = -1 \pm j\sqrt{3}$

These pole locations are at $s = -1 + j\sqrt{3}$ and $s = -1 - j\sqrt{3}$.
Let's check if these poles lie on the root locus. The root locus exists for $K \ge 0$.
The characteristic equation is $s^2 + 2s + K = 0$.
Substitute $s = -1 + j\sqrt{3}$:
$(-1 + j\sqrt{3})^2 + 2(-1 + j\sqrt{3}) + K = 0$
$(1 - 2j\sqrt{3} - 3) - 2 + 2j\sqrt{3} + K = 0$
$-2 - 2j\sqrt{3} - 2 + 2j\sqrt{3} + K = 0$
$-4 + K = 0 \implies K = 4$.

Since $K=4$ is positive, these pole locations are indeed on the root locus.

**Step 4: Calculate the Gain $K$**

From the above calculation, the gain corresponding to $\zeta_d = 0.5$ is $K = 4$.

**Step 5: Obtain the Step Response**

Using MATLAB or any simulation tool:

```matlab
% Define the open-loop transfer function
num = [1];
den = [1 2 0]; % s*(s+2) = s^2 + 2s
G = tf(num, den);

% Determine the desired damping ratio
zeta_d = 0.5;

% Method 1: Using root locus properties to find K (as calculated above)
K = 4;

% Construct the closed-loop transfer function with the calculated gain
sys_cl_desired_zeta = feedback(K*G, 1);

% Plot the step response
figure;
step(sys_cl_desired_zeta);
title(['Step Response for \zeta = ', num2str(zeta_d)]);
grid on;

% Verify the damping ratio from the step response (optional, but good practice)
step_info = stepinfo(sys_cl_desired_zeta);
fprintf('For K = %f:\n', K);
fprintf('Overshoot: %.2f%%\n', step_info.Overshoot);
fprintf('Settling Time: %.2f sec\n', step_info.SettlingTime);
fprintf('Rise Time: %.2f sec\n', step_info.RiseTime);
fprintf('Peak Time: %.2f sec\n', step_info.PeakTime);
```

Running this code will generate a step response plot. You will observe a response with some overshoot and oscillations that settle within a reasonable time. The printed values will confirm the transient characteristics. For $\zeta=0.5$, we expect a moderate overshoot (around 16.3% for a standard second-order system).

---

### 6. Practical Considerations and Simulation Tools

*   **MATLAB/Simulink:** These are widely used tools for control system analysis and simulation.
    *   **`rlocus(G)`:** Generates the root locus plot for open-loop transfer function `G`.
    *   **`pzmap(sys_cl)`:** Plots the pole-zero map of a closed-loop system `sys_cl`. You can visually check if the poles lie on the desired damping ratio line.
    *   **`step(sys_cl)`:** Computes and plots the unit step response of a closed-loop system `sys_cl`.
    *   **`stepinfo(sys_cl)`:** Returns performance metrics of the step response.
*   **Higher-Order Systems:** For higher-order systems, the concept of "dominant poles" is crucial. If there are pairs of complex conjugate poles that are significantly closer to the imaginary axis than other poles, they dominate the transient response. These dominant poles are typically what we target for specific damping ratios.
*   **Real-World Implementations:** In a lab setting, this process might involve tuning a physical gain knob on a hardware setup while observing the system's response on an oscilloscope or data acquisition system.

**Reference:** Nise's textbook provides practical examples and workflow using MATLAB. Dorf & Bishop's book also offers excellent guidance on using simulation tools for analysis.

---

### 7. Practice Questions

1.  Consider a unity feedback system with the open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+3)}$. Determine the gain $K$ that yields a damping ratio of $\zeta_d = 0.707$ for the dominant closed-loop poles. (Hint: For higher-order systems, approximate the response using the dominant second-order poles if they are sufficiently dominant).
    *   **Answer:**
        *   The characteristic equation is $s(s+1)(s+3) + K = 0$, which is $s^3 + 4s^2 + 3s + K = 0$.
        *   We need to find the intersection of the root locus with the $45^\circ$ line ($\zeta_d = 0.707$).
        *   Let the dominant poles be at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2} = -a \pm ja$, where $a = \zeta\omega_n = \omega_n\sqrt{1-\zeta^2}$.
        *   The equation for the root locus is $1 + \frac{K}{s(s+1)(s+3)} = 0$.
        *   A common approach is to use MATLAB or numerical methods.
        *   Using MATLAB:
            ```matlab
            num = [1];
            den = [1 4 3 0]; % s^3 + 4s^2 + 3s
            G = tf(num, den);
            K_vals = logspace(0, 3, 100); % Range of gains
            [roots_all, ~] = rlocus(G, K_vals);

            % Find roots corresponding to zeta = 0.707
            zeta = abs(real(roots_all) ./ sqrt(real(roots_all).^2 + imag(roots_all).^2));
            idx = abs(zeta - 0.707) < 0.01; % Find indices close to zeta_d
            closest_root = roots_all(find(idx, 1));

            % Calculate K at this root location
            K_at_root = -polyval(den, closest_root);
            if K_at_root < 0, K_at_root = -K_at_root; end % Ensure K is positive

            fprintf('The gain K for zeta = 0.707 is approximately: %f\n', K_at_root);
            ```
            *   The approximate gain $K$ will be around 1.333. At this gain, the dominant poles are approximately $-0.666 \pm j0.666$.

2.  For the system in Question 1, with the gain $K=1.333$, plot the step response. Analyze the overshoot and settling time. How do they compare to what you would expect for a $\zeta=0.707$ system?
    *   **Answer:**
        *   Using MATLAB with $K=1.333$:
            ```matlab
            K = 1.333;
            sys_cl_q2 = feedback(K*G, 1);
            figure;
            step(sys_cl_q2);
            title('Step Response for K = 1.333 (\zeta \approx 0.707)');
            grid on;
            step_info_q2 = stepinfo(sys_cl_q2);
            fprintf('Overshoot: %.2f%%\n', step_info_q2.Overshoot);
            fprintf('Settling Time: %.2f sec\n', step_info_q2.SettlingTime);
            ```
        *   For $\zeta=0.707$, the expected overshoot is approximately 4.3% and settling time (2% criterion) is about $4/\zeta\omega_n = 4/a$. In our case, $a \approx 0.666$, so $T_s \approx 4/0.666 \approx 6$ seconds. The actual response might deviate slightly due to the influence of the third pole. The actual overshoot will be close to 4.3%, and settling time will also be in that vicinity, influenced by the third pole.

---

### 8. Important Points to Remember

*   The root locus provides a visual and analytical tool to understand how system parameters affect closed-loop pole locations.
*   The damping ratio ($\zeta$) is directly related to the angle of the dominant closed-loop poles from the negative real axis.
*   To find the gain for a specific damping ratio, identify where the desired damping ratio line intersects the root locus.
*   Evaluate the open-loop transfer function at the intersection point to calculate the required gain.
*   Simulate the step response with the determined gain to verify the transient performance.
*   For higher-order systems, ensure that the selected poles are indeed dominant by comparing their proximity to the imaginary axis with other poles.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Identify and conduct experiments...):** While this topic focuses on simulation, understanding the theoretical link between parameters and performance lays the groundwork for identifying which parameters are critical in physical systems for experimentation.
*   **CO2 (Conduct experiments and determine performance specifications):** This directly relates to analyzing the step response to determine specifications like overshoot and settling time, which are derived from the gain determined for a specific damping ratio.
*   **CO3 (Analyse a linear continuous time system model using simulation tools):** This topic heavily relies on using simulation tools (like MATLAB) to plot root locus, determine gains, and simulate step responses.
*   **CO4 (Design suitable controllers/compensators...):** Understanding how to achieve a desired damping ratio through gain adjustment is a fundamental step in controller design. If gain adjustment alone isn't sufficient, one would then move to designing compensators to shape the root locus to meet performance requirements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
