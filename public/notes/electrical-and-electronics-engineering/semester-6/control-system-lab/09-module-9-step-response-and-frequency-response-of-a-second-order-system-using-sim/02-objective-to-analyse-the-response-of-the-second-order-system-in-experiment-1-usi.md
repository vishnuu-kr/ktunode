---
title: "Objective:  To analyse the response of  the second order system (in experiment 1) using (MATLAB/SCILAB/similar softwares)"
subject: "CONTROL SYSTEM LAB"
module: "Module 9: Step response and frequency response of a second order system using simulation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36772"
status: "completed"
scrapedAt: "2026-05-23T16:25:19.659Z"
---
# Control System Lab: Module 9 - Step Response and Frequency Response of a Second-Order System using Simulation

## Objective:
To analyze the response of the second-order system (from experiment 1) using MATLAB/SCILAB/similar software.

## Introduction:
This module focuses on understanding the behavior of a second-order linear time-invariant (LTI) system through simulation. We will explore how this system responds to a standard input, the step input, and also investigate its steady-state behavior through frequency response analysis. The ability to simulate and analyze system responses is crucial for understanding system dynamics, predicting performance, and designing controllers, aligning with Course Outcomes CO1, CO2, and CO3.

## Key Concepts and Definitions:

### 1. Second-Order System:
A system whose behavior can be described by a second-order differential equation. In the Laplace domain, its standard transfer function is represented as:

$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

Where:
*   $\omega_n$: **Natural Frequency** - The frequency at which the system would oscillate if there were no damping. It represents the speed of the response. (Nise, 2009)
*   $\zeta$: **Damping Ratio** - A dimensionless parameter that characterizes how oscillations decay after a disturbance. It dictates the system's stability and transient response characteristics. (Ogata, 2009)

### 2. Types of Second-Order System Responses based on Damping Ratio ($\zeta$):

*   **Undamped ($\zeta = 0$):** The system oscillates indefinitely with constant amplitude.
*   **Underdamped ($0 < \zeta < 1$):** The system oscillates with decreasing amplitude before settling to its steady-state value. This is the most common scenario in practical control systems.
*   **Critically Damped ($\zeta = 1$):** The system returns to its steady-state value as quickly as possible without oscillating. This provides the fastest response without overshoot.
*   **Overdamped ($\zeta > 1$):** The system returns to its steady-state value slowly without oscillating. The response is sluggish.

### 3. Step Response Characteristics (for Underdamped Systems):
When a unit step input $R(s) = 1/s$ is applied to a standard second-order system, its transient response can be characterized by several performance indices:

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value for the first time.
    $t_d = \frac{1 + 0.7\zeta\omega_n}{\omega_n}$
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value.
    $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak.
    $t_p = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   **Maximum Overshoot ($M_p$):** The maximum percentage by which the response exceeds its final value.
    $M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}}$
    Percentage Overshoot $= M_p \times 100\%$
*   **Settling Time ($t_s$):** The time taken for the response to stay within a specified percentage (typically 2% or 5%) of its final value.
    For 2% settling time: $t_s \approx \frac{4}{\zeta\omega_n}$
    For 5% settling time: $t_s \approx \frac{3}{\zeta\omega_n}$

(Ogata, 2009; Nise, 2009; Nagrath & Gopal, 2009)

### 4. Frequency Response:
This analysis examines how a system responds to sinusoidal inputs of varying frequencies. For a stable LTI system, the frequency response is the steady-state output when the input is a sinusoid.

*   **Transfer Function in the Frequency Domain:** Replace $s$ with $j\omega$ in the transfer function $G(s)$ to get $G(j\omega)$.
    $G(j\omega) = \frac{\omega_n^2}{(j\omega)^2 + 2\zeta\omega_n (j\omega) + \omega_n^2} = \frac{\omega_n^2}{-\omega^2 + j2\zeta\omega_n\omega + \omega_n^2}$
    $G(j\omega) = \frac{\omega_n^2}{\omega_n^2 - \omega^2 + j2\zeta\omega_n\omega}$

*   **Magnitude and Phase:**
    $|G(j\omega)| = \frac{\omega_n^2}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$
    $\angle G(j\omega) = \arctan\left(\frac{-2\zeta\omega_n\omega}{\omega_n^2 - \omega^2}\right)$

*   **Bode Plot:** A graphical representation of the magnitude (in dB) and phase (in degrees or radians) of $G(j\omega)$ as a function of the logarithm of frequency ($\omega$). It's a powerful tool for analyzing system stability and performance. (Ogata, 2009; Dorf & Bishop, 2009)
    *   **Magnitude Plot:** Shows $|G(j\omega)|$ vs. $\log(\omega)$.
    *   **Phase Plot:** Shows $\angle G(j\omega)$ vs. $\log(\omega)$.

*   **Key Frequency Response Metrics:**
    *   **Bandwidth ($\omega_b$):** The range of frequencies over which the system can effectively operate. It is often defined as the frequency at which the magnitude drops to -3 dB (i.e., $1/\sqrt{2}$ of its DC gain). For a second-order system, the bandwidth is approximately related to $\omega_n$ and $\zeta$. (Nise, 2009)
    *   **Resonant Peak ($M_r$):** The maximum value of the magnitude response $|G(j\omega)|$. It indicates how much the system amplifies sinusoidal inputs at certain frequencies. This peak occurs at the resonant frequency ($\omega_r$).
        $M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$ (for $0 < \zeta < 1/\sqrt{2}$)
    *   **Resonant Frequency ($\omega_r$):** The frequency at which the resonant peak occurs.
        $\omega_r = \omega_n \sqrt{1 - 2\zeta^2}$ (for $0 < \zeta < 1/\sqrt{2}$)

(Gopal, 2009)

## Learning Outcomes Coverage:

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   While this module focuses on simulation, understanding the theoretical parameters ($\omega_n$, $\zeta$) is crucial. In a practical lab setting, you would first identify a physical system (e.g., a mechanical or electrical system) and then conduct experiments (like step response tests) to obtain data. This data would then be used to estimate the $\omega_n$ and $\zeta$ values that best model the system's behavior. This simulation exercise allows us to see the *effect* of these parameters.

*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   This module directly addresses determining performance specifications like rise time, settling time, and overshoot *through simulation*. By applying a step input in MATLAB/SCILAB, we can visually and numerically extract these specifications, mirroring what would be done with experimental data. We also analyze frequency response metrics that relate to system performance.

*   **CO3: Analyze a linear continuous time system model using simulation tools.**
    *   This is the core objective of Module 9. We will be using simulation tools (MATLAB/SCILAB) to analyze the step response and frequency response of a second-order LTI system model, understanding how changes in $\omega_n$ and $\zeta$ affect these responses.

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   While this module doesn't explicitly cover controller design, the analysis performed here is foundational. By understanding how a second-order system behaves, you can then design controllers (e.g., lead, lag, PID) to modify its response characteristics (reduce overshoot, speed up settling time) to meet desired performance requirements. The simulation tools are essential for testing these designed controllers.

## Simulation with MATLAB/SCILAB:

We will use MATLAB (or SCILAB, which has similar syntax for control system tasks) to simulate the step response and frequency response.

### Experiment 1: Step Response Analysis

**Objective:** To observe and analyze the step response of a second-order system for different values of damping ratio ($\zeta$) and natural frequency ($\omega_n$).

**Procedure:**

1.  **Define the Second-Order Transfer Function:**
    Use the `tf` command in MATLAB (or equivalent in SCILAB) to create the transfer function.
    For $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:

    *   **MATLAB Example:**
        ```matlab
        % Define parameters
        wn = 10; % Natural frequency (rad/s)
        zeta = 0.5; % Damping ratio

        % Create the transfer function
        num = [wn^2];
        den = [1, 2*zeta*wn, wn^2];
        sys = tf(num, den);

        % Display the transfer function
        disp(sys);
        ```

    *   **SCILAB Example:**
        ```scilab
        // Define parameters
        wn = 10; // Natural frequency (rad/s)
        zeta = 0.5; // Damping ratio

        // Create the transfer function
        num = [wn^2];
        den = [1, 2*zeta*wn, wn^2];
        sys = syslin('c', num, den);

        // Display the transfer function
        disp(sys);
        ```

2.  **Simulate the Step Response:**
    Use the `step` command in MATLAB or SCILAB.

    *   **MATLAB Example:**
        ```matlab
        % Plot the step response
        figure;
        step(sys);
        title('Step Response of a Second-Order System');
        grid on;
        ```

    *   **SCILAB Example:**
        ```scilab
        // Plot the step response
        figure(1);
        plot(sys);
        title('Step Response of a Second-Order System');
        xlabel('Time (s)');
        ylabel('Amplitude');
        grid on;
        ```

3.  **Analyze the Step Response:**
    *   **Vary $\zeta$:** Keep $\omega_n$ constant (e.g., $\omega_n = 10$) and simulate for different values of $\zeta$:
        *   $\zeta = 0.1$ (Underdamped, low damping)
        *   $\zeta = 0.5$ (Underdamped, moderate damping)
        *   $\zeta = 0.707$ (Underdamped, common value)
        *   $\zeta = 1.0$ (Critically damped)
        *   $\zeta = 2.0$ (Overdamped)
    *   **Vary $\omega_n$:** Keep $\zeta$ constant (e.g., $\zeta = 0.5$) and simulate for different values of $\omega_n$:
        *   $\omega_n = 5$
        *   $\omega_n = 10$
        *   $\omega_n = 20$
    *   **Observe and compare:**
        *   How does increasing $\zeta$ affect overshoot, settling time, and rise time?
        *   How does increasing $\omega_n$ affect the speed of the response (rise time, settling time)?
        *   Note the absence of oscillation in critically damped and overdamped cases.

4.  **Extract Performance Specifications (MATLAB):**
    The `stepinfo` function in MATLAB can automatically calculate these metrics.

    ```matlab
    % For a specific system 'sys' defined earlier
    info = stepinfo(sys);
    disp(info);

    % Access specific values
    disp(['Rise Time: ', num2str(info.RiseTime)]);
    disp(['Settling Time (2%): ', num2str(info.SettlingTime)]);
    disp(['Peak: ', num2str(info.Peak)]);
    disp(['Overshoot (%): ', num2str(info.Overshoot)]);
    ```

### Experiment 2: Frequency Response Analysis

**Objective:** To analyze the frequency response of a second-order system and observe the effects of $\zeta$ and $\omega_n$.

**Procedure:**

1.  **Use the Same Transfer Function:** Ensure your `sys` transfer function is defined as in Experiment 1.

2.  **Generate Bode Plot:** Use the `bode` command in MATLAB or SCILAB.

    *   **MATLAB Example:**
        ```matlab
        % Plot the Bode diagram
        figure;
        bode(sys);
        title('Bode Plot of a Second-Order System');
        % Optional: Add grid
        grid on;
        ```

    *   **SCILAB Example:**
        ```scilab
        // Plot the Bode diagram
        figure(2);
        bode(sys);
        title('Bode Plot of a Second-Order System');
        // Optional: Add grid
        grid on;
        ```

3.  **Analyze the Bode Plot:**
    *   **Vary $\zeta$ (e.g., $\omega_n = 10$):**
        *   $\zeta = 0.1$: Expect a significant resonant peak in the magnitude plot and a sharp change in phase around $\omega_r$.
        *   $\zeta = 0.5$: Expect a noticeable but smaller resonant peak.
        *   $\zeta = 0.707$: Expect a small resonant peak.
        *   $\zeta = 1.0$: No resonant peak.
        *   $\zeta = 2.0$: No resonant peak, slower roll-off.
    *   **Vary $\omega_n$ (e.g., $\zeta = 0.5$):**
        *   Increasing $\omega_n$ shifts the entire Bode plot to the right (higher frequencies). The shape remains similar, but the transition frequencies are higher.
    *   **Observe:**
        *   **Magnitude Plot:** The low-frequency gain is typically 0 dB (if $\omega_n^2$ is the numerator). The plot rolls off at -40 dB/decade after the poles. The resonant peak indicates amplification at certain frequencies.
        *   **Phase Plot:** The phase starts at 0 degrees, drops to -180 degrees, and approaches -180 degrees asymptotically. The rate of phase change is steeper for lower $\zeta$.

4.  **Extract Frequency Response Metrics (MATLAB):**
    While `bode` plots the response, extracting specific metrics like bandwidth or resonant peak directly might require custom calculations or using the `freqs` command and analyzing the results. For simple second-order systems, the analytical formulas are often sufficient for understanding.

    *   **Calculating Resonant Frequency and Peak:**
        ```matlab
        % Assuming sys is defined and has wn and zeta from parameters
        % You might need to extract these from the transfer function polynomial coefficients
        % Or if you know them from setting up sys:
        current_wn = wn; % From previous definition
        current_zeta = zeta; % From previous definition

        if current_zeta > 0 && current_zeta < 1/sqrt(2)
            omega_r = current_wn * sqrt(1 - 2*current_zeta^2);
            Mr = 1 / (2 * current_zeta * sqrt(1 - current_zeta^2));
            disp(['Resonant Frequency (rad/s): ', num2str(omega_r)]);
            disp(['Resonant Peak (Magnitude): ', num2str(Mr)]);
            disp(['Resonant Peak (dB): ', num2str(20*log10(Mr))]);
        else
            disp('No resonant peak for the given damping ratio.');
        end
        ```

    *   **Bandwidth:** Estimating bandwidth often involves finding the frequency where the magnitude is -3 dB. You can do this by sampling the magnitude response and searching.

        ```matlab
        % Get frequency and magnitude data from Bode plot
        [mag, phase, wout] = bode(sys);
        mag_dB = 20*log10(squeeze(mag)); % Magnitude in dB

        % Find bandwidth (frequency where magnitude is -3 dB)
        % Assuming DC gain is 0 dB (for the standard form)
        % Find the index where mag_dB crosses -3 dB
        [~, idx] = min(abs(mag_dB + 3));
        bandwidth = wout(idx);
        disp(['Approximate Bandwidth (rad/s): ', num2str(bandwidth)]);
        ```

**Important Notes:**
*   The `stepinfo` function in MATLAB is a very convenient way to get transient response specifications.
*   When analyzing Bode plots, pay close attention to the frequency where the resonant peak occurs and its magnitude, as these directly relate to system stability and potential for oscillation under closed-loop control.
*   Ensure your simulation time for the step response is long enough to observe the settling behavior.
*   For frequency response, the range of frequencies simulated should cover the critical transition regions.

## Practice Questions:

1.  **MATLAB/SCILAB Question:** Consider a second-order system with the transfer function $G(s) = \frac{25}{s^2 + 6s + 25}$.
    a) Determine the natural frequency ($\omega_n$) and damping ratio ($\zeta$).
    b) Classify the system's response type (underdamped, critically damped, etc.).
    c) Use MATLAB/SCILAB to simulate the unit step response of this system.
    d) From the simulation output, list the delay time, rise time, peak time, maximum overshoot (%), and 2% settling time.
    e) Generate the Bode plot for this system and comment on the presence and location of any resonant peak.

    **Answer:**
    a) $G(s) = \frac{25}{s^2 + 6s + 25}$
       Comparing with $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
       $\omega_n^2 = 25 \implies \omega_n = 5$ rad/s
       $2\zeta\omega_n = 6 \implies 2\zeta(5) = 6 \implies 10\zeta = 6 \implies \zeta = 0.6$

    b) Since $0 < \zeta < 1$, the system is **underdamped**.

    c) (Simulation required. Code would be similar to examples above with `wn=5`, `zeta=0.6`)

    d) **Expected approximate values (calculated/simulated):**
       *   $\omega_n = 5$, $\zeta = 0.6$
       *   $t_d \approx \frac{1 + 0.7(0.6)}{5} = \frac{1.42}{5} \approx 0.284$ s
       *   $t_r = \frac{\pi - \cos^{-1}(0.6)}{5\sqrt{1-0.6^2}} = \frac{3.1416 - 0.9273}{5 \times 0.8} = \frac{2.2143}{4} \approx 0.554$ s
       *   $t_p = \frac{\pi}{5\sqrt{1-0.6^2}} = \frac{3.1416}{5 \times 0.8} = \frac{3.1416}{4} \approx 0.785$ s
       *   $M_p = e^{\frac{-0.6\pi}{\sqrt{1-0.6^2}}} = e^{\frac{-1.885}{0.8}} = e^{-2.356} \approx 0.0946$
       *   Percentage Overshoot $\approx 9.46\%$
       *   $t_s \approx \frac{4}{0.6 \times 5} = \frac{4}{3} \approx 1.33$ s (for 2% settling time)
       *(Note: MATLAB's `stepinfo` might provide slightly different values due to numerical approximations).*

    e) The Bode plot will show a magnitude starting at 0 dB, then rolling off at -40 dB/decade. For $\zeta = 0.6$, there will be a small resonant peak.
       *   Resonant Frequency: $\omega_r = 5 \sqrt{1 - 2(0.6)^2} = 5 \sqrt{1 - 0.72} = 5 \sqrt{0.28} \approx 5 \times 0.529 \approx 2.65$ rad/s.
       *   Resonant Peak Magnitude: $M_r = \frac{1}{2(0.6)\sqrt{1-0.6^2}} = \frac{1}{1.2 \times 0.8} = \frac{1}{0.96} \approx 1.04$.
       *   Resonant Peak (dB): $20 \log_{10}(1.04) \approx 0.34$ dB.

2.  **Conceptual Question:** How does the damping ratio ($\zeta$) of a second-order system influence its bandwidth? Explain your reasoning, potentially referring to the Bode plot.

    **Answer:** As the damping ratio ($\zeta$) *increases* (moving from underdamped towards critically damped and overdamped), the bandwidth of the second-order system generally *decreases*. This is because higher damping ratios reduce the tendency of the system to exhibit resonance. A higher damping ratio means the system is less "peaky" in its frequency response, and the magnitude starts to drop off earlier as frequency increases. A lower damping ratio, conversely, leads to a higher resonant peak at a specific frequency ($\omega_r$) and typically a wider bandwidth, allowing the system to respond effectively to a broader range of input frequencies before its gain significantly attenuates.

## Conclusion:
By simulating the step and frequency responses of second-order systems in MATLAB/SCILAB, we gain a deep understanding of how parameters like natural frequency ($\omega_n$) and damping ratio ($\zeta$) dictate system performance. This knowledge is fundamental for analyzing existing systems and designing effective controllers to meet desired specifications, directly contributing to the achievement of CO1, CO2, and CO3. The skills acquired are a stepping stone for controller design (CO4).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
