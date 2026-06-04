---
title: "Objective : Design a second order   (RLC network)  system to analyse the following:"
subject: "CONTROL SYSTEM LAB"
module: "Module 4: Step response and frequency response of a second order system realised using passive components"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3675e"
status: "completed"
scrapedAt: "2026-05-23T16:25:08.253Z"
---
# Control System Lab: Module 4 - Step Response and Frequency Response of a Second-Order System (RLC Network)

## Topic Objective:

To design and analyze a second-order RLC network to investigate its step response and frequency response characteristics. This involves understanding how the system's parameters (R, L, C) influence its transient and steady-state behavior.

## 1. Introduction to Second-Order Systems

Second-order systems are fundamental in control systems engineering as they represent a broad class of dynamic behavior. Many physical systems, including mechanical, electrical, and thermal systems, can be approximated as second-order.

*   **Definition:** A second-order system is characterized by a transfer function that has a denominator polynomial of degree two.
*   **General Form of Transfer Function:**
    $$ G(s) = \frac{K \omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
    Where:
    *   $K$: System gain
    *   $\omega_n$: Natural frequency (undamped natural frequency) - the frequency at which the system would oscillate if there were no damping.
    *   $\zeta$: Damping ratio - determines the nature of the system's response (underdamped, critically damped, overdamped, undamped).

## 2. Realizing a Second-Order System using Passive RLC Components

An RLC network is a natural choice for implementing a second-order system using passive components (Resistors, Inductors, Capacitors).

### 2.1 Series RLC Circuit

Consider a series RLC circuit with a voltage source $V_{in}(t)$ and the output voltage measured across the capacitor, $V_c(t)$.

*   **Circuit Diagram:**
    ```
    Vin(t) ---- R ---- L ---- C ---- Ground
                 |
                 +---- Vc(t)
    ```
*   **Differential Equation:** Applying Kirchhoff's Voltage Law:
    $$ V_{in}(t) = Ri(t) + L\frac{di(t)}{dt} + \frac{1}{C}\int i(t) dt $$
    Since $i(t) = C\frac{dV_c(t)}{dt}$, we can substitute this into the equation:
    $$ V_{in}(t) = RC\frac{dV_c(t)}{dt} + LC\frac{d^2V_c(t)}{dt^2} + V_c(t) $$
*   **Transfer Function (Output across Capacitor):** Taking the Laplace Transform (assuming zero initial conditions):
    $$ V_{in}(s) = RCI(s) + LsI(s) + \frac{1}{Cs}I(s) $$
    And $I(s) = Cs V_c(s)$. Substituting $I(s)$:
    $$ V_{in}(s) = RC(Cs V_c(s)) + Ls(Cs V_c(s)) + \frac{1}{Cs}(Cs V_c(s)) $$
    $$ V_{in}(s) = (RCs + Ls^2 + 1) V_c(s) $$
    $$ V_c(s) = \frac{1}{Ls^2 + RCs + 1} V_{in}(s) $$
    To match the general second-order form, we can divide the numerator and denominator by $LC$:
    $$ \frac{V_c(s)}{V_{in}(s)} = \frac{1/LC}{s^2 + (R/L)s + 1/LC} $$
*   **Comparing with the General Form:**
    *   $K = 1$ (for this configuration)
    *   $\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$
    *   $2\zeta\omega_n = \frac{R}{L} \implies \zeta = \frac{R}{L} \cdot \frac{1}{2\omega_n} = \frac{R}{L} \cdot \frac{\sqrt{LC}}{2} = \frac{R}{2} \sqrt{\frac{C}{L}}$

### 2.2 Parallel RLC Circuit

Consider a parallel RLC circuit with a current source $I_{in}(t)$ and the output voltage measured across the parallel combination, $V_{out}(t)$.

*   **Circuit Diagram:**
    ```
         +---- R ----+
         |          |
    Iin(t) ---- L ----+---- C ----+---- Ground
                  |          |
                  +---- Vout(t)
    ```
*   **Admittance Approach:**
    The admittances of the components are: $Y_R = \frac{1}{R}$, $Y_L = \frac{1}{Ls}$, $Y_C = Cs$.
    The total admittance is $Y_{total} = Y_R + Y_L + Y_C = \frac{1}{R} + \frac{1}{Ls} + Cs$.
    The transfer function $V_{out}(s)/I_{in}(s)$ is the inverse of the total admittance:
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{1}{Y_{total}} = \frac{1}{\frac{1}{R} + \frac{1}{Ls} + Cs} $$
    Multiplying numerator and denominator by $RLCs$:
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{RLs}{LCs^2 + R s + RL} $$
    Divide by $RL$:
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{s}{LCs^2/RL + s/L + 1/R} $$
    Wait, this doesn't look like the standard form directly. Let's try another approach.

*   **Using KCL at the top node:**
    $$ I_{in}(t) = i_R(t) + i_L(t) + i_C(t) $$
    Where:
    *   $i_R(t) = \frac{V_{out}(t)}{R}$
    *   $i_L(t) = \frac{1}{L}\int V_{out}(t) dt$
    *   $i_C(t) = C\frac{dV_{out}(t)}{dt}$

    Taking Laplace transform:
    $$ I_{in}(s) = \frac{V_{out}(s)}{R} + \frac{1}{Ls}V_{out}(s) + CsV_{out}(s) $$
    $$ I_{in}(s) = V_{out}(s) \left( \frac{1}{R} + \frac{1}{Ls} + Cs \right) $$
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{1}{\frac{1}{R} + \frac{1}{Ls} + Cs} $$
    Multiply numerator and denominator by $RLCs$:
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{RLs}{LCs^2 + Rs + RL} $$
    Divide numerator and denominator by $LC$:
    $$ \frac{V_{out}(s)}{I_{in}(s)} = \frac{\frac{R}{LC}s}{s^2 + \frac{R}{LC}s + \frac{1}{LC}} $$
    Wait, there's an $s$ in the numerator here. This is a first-order lead compensator in disguise, not a standard second-order lag system if we want to directly relate to the step response of a standard second-order transfer function.

    Let's re-evaluate the standard forms. Often, the goal is to achieve a transfer function of the form $\frac{Y(s)}{U(s)} = \frac{b_1s + b_0}{a_2s^2 + a_1s + a_0}$.

    A common realization of a second-order system that directly maps to the standard form is the voltage across the resistor in a series RLC circuit, or the voltage across the inductor.

### 2.3 Series RLC Circuit - Output across Resistor ($V_R(t)$)

*   **Circuit Diagram:** (Same as 2.1)
*   **Transfer Function (Output across Resistor):**
    $I(s) = \frac{V_{in}(s)}{Ls^2 + RCs + 1}$
    $V_R(s) = R \cdot I(s) = \frac{RR C s}{Ls^2 + RCs + 1} V_{in}(s)$
    Dividing by $LC$:
    $$ \frac{V_R(s)}{V_{in}(s)} = \frac{\frac{R}{L}s}{s^2 + \frac{R}{L}s + \frac{1}{LC}} $$
    This also has an 's' in the numerator.

### 2.4 Series RLC Circuit - Output across Inductor ($V_L(t)$)

*   **Circuit Diagram:** (Same as 2.1)
*   **Transfer Function (Output across Inductor):**
    $V_L(s) = Ls \cdot I(s) = Ls \cdot \frac{V_{in}(s)}{Ls^2 + RCs + 1}$
    $$ \frac{V_L(s)}{V_{in}(s)} = \frac{Ls}{Ls^2 + RCs + 1} $$
    Dividing by $LC$:
    $$ \frac{V_L(s)}{V_{in}(s)} = \frac{\frac{1}{C}s}{s^2 + \frac{R}{L}s + \frac{1}{LC}} $$
    Again, an 's' in the numerator.

**Key Observation:** For a pure RLC circuit, when the input is a voltage or current source, the resulting transfer functions often have an 's' in the numerator if the output is taken across R or L. This is because the differential equations involve derivatives of the input signal.

**To achieve the standard second-order form (without 's' in the numerator), we often use an operational amplifier (op-amp) circuit which essentially adds a gain and potentially shifts the poles/zeros.** However, the question specifies "passive components." This implies we should focus on the RLC network itself and understand its behavior, even if the direct mapping to the *standard closed-loop system* transfer function is indirect without an active element.

**Let's assume the purpose is to analyze the RLC circuit's natural response to an input and relate it to second-order system parameters.** The most common representation for step response analysis is the voltage across the capacitor, as it directly integrates the current.

For this module, let's focus on the series RLC circuit with output across the capacitor as our model:
$$ \frac{V_c(s)}{V_{in}(s)} = \frac{1/LC}{s^2 + (R/L)s + 1/LC} $$

**Design Goal:** Choose values of R, L, and C to achieve specific $\zeta$ and $\omega_n$ values for analysis.

## 3. Step Response Analysis

The step response of a system is its output when the input is a unit step function ($u(t)$, which is 0 for $t<0$ and 1 for $t \geq 0$).

*   **Input:** $V_{in}(s) = \frac{1}{s}$ (for a unit step input voltage)
*   **Output (Voltage across Capacitor):**
    $$ V_c(s) = \frac{1}{s} \cdot \frac{1/LC}{s^2 + (R/L)s + 1/LC} $$
    $$ V_c(s) = \frac{1/LC}{s(s^2 + (R/L)s + 1/LC)} $$
*   **Inverse Laplace Transform:** The inverse Laplace transform of $V_c(s)$ will give $v_c(t)$, the step response. The form of $v_c(t)$ depends on the damping ratio $\zeta$.

### 3.1 Classification of Damping Ratio ($\zeta$)

*   **Undamped ($\zeta = 0$):** The system oscillates indefinitely with constant amplitude.
    $$ v_c(t) = 1 - \cos(\omega_n t) $$
*   **Underdamped ($0 < \zeta < 1$):** The system oscillates with decreasing amplitude, eventually settling to the steady-state value.
    $$ v_c(t) = 1 - e^{-\zeta\omega_n t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}}\sin(\omega_d t) \right) $$
    Where $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is the damped natural frequency.
*   **Critically Damped ($\zeta = 1$):** The system returns to the steady-state value as quickly as possible without oscillating.
    $$ v_c(t) = 1 - e^{-\omega_n t}(1 + \omega_n t) $$
*   **Overdamped ($\zeta > 1$):** The system returns to the steady-state value slowly without oscillating.
    $$ v_c(t) = 1 - \frac{1}{2\beta}(\beta + \alpha)e^{-(\alpha - \beta)t} - \frac{1}{2\beta}(\beta - \alpha)e^{-(\alpha + \beta)t} $$
    Where $\alpha = \zeta\omega_n$ and $\beta = \omega_n\sqrt{\zeta^2-1}$.

### 3.2 Key Step Response Performance Specifications

These specifications quantify how well a system meets performance requirements in the transient phase.

*   **Delay Time ($t_d$):** Time taken for the response to reach 50% of its final value for the first time.
    $$ t_d \approx \frac{1 + 0.7\zeta}{\omega_n} \quad (\text{for } \zeta < 0.8) $$
*   **Rise Time ($t_r$):** Time taken for the response to rise from 10% to 90% of its final value.
    *   For $0 < \zeta < 1$: $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d} = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
    *   A common approximation: $t_r \approx \frac{1.8}{\omega_n}$ for $\zeta=0.5$
*   **Peak Time ($t_p$):** Time taken for the response to reach its first peak.
    $$ t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} $$
*   **Maximum Overshoot ($M_p$):** The maximum amount by which the response exceeds the final value, expressed as a percentage of the final value.
    $$ M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% $$
*   **Settling Time ($t_s$):** Time taken for the response to stay within a certain percentage (usually 2% or 5%) of the final value.
    *   For 2% criterion: $t_s \approx \frac{4}{\zeta\omega_n}$
    *   For 5% criterion: $t_s \approx \frac{3}{\zeta\omega_n}$

**Learning Outcome 1 (CO1): Identify and conduct suitable experiments to determine the parameters to model a physical system.**

*   **Experiment:**
    1.  Assemble a series RLC circuit on a breadboard.
    2.  Select values for R, L, and C that are readily available and allow for varying $\zeta$ and $\omega_n$. For instance, to achieve different damping ratios, you might keep L and C constant and vary R.
    3.  Use a function generator to provide a step input voltage.
    4.  Use an oscilloscope to measure the output voltage across the capacitor ($v_c(t)$).
    5.  Record the values of R, L, and C used.
    6.  From the measured R, L, C values, calculate the theoretical $\omega_n$ and $\zeta$.
    7.  Analyze the oscilloscope trace to determine the step response performance specifications (rise time, peak time, maximum overshoot, settling time).
    8.  Compare the experimentally observed performance specifications with the theoretical predictions based on the chosen R, L, C values.

**Learning Outcome 2 (CO2): Conduct suitable experiments and determine the performance specifications.**

*   **Experiment (continued from CO1):**
    *   Capture the step response waveform on the oscilloscope.
    *   Use the oscilloscope's built-in measurement functions (or manually measure from the screen) to determine $t_r$, $t_p$, $M_p$, and $t_s$.
    *   Repeat the experiment for different combinations of R, L, and C to observe how these parameters affect the performance specifications. For example:
        *   Keep R and L constant, vary C to change $\omega_n$.
        *   Keep L and C constant, vary R to change $\zeta$.

**Learning Outcome 3 (CO3): Analyse a linear continuous time system model using simulation tools.**

*   **Simulation:**
    1.  **MATLAB/Simulink:**
        *   Define the transfer function: $G(s) = \frac{1/LC}{s^2 + (R/L)s + 1/LC}$.
        *   Use the `tf` command to create the transfer function object. For example, if $R=10\Omega$, $L=10mH$, $C=1\mu F$:
            ```matlab
            R = 10; L = 10e-3; C = 1e-6;
            num = 1/(L*C);
            den = [1, R/L, 1/(L*C)];
            G = tf(num, den);
            disp(G);
            ```
        *   Use the `step` command to simulate the step response:
            ```matlab
            step(G);
            title('Step Response of Series RLC Circuit (Vo across C)');
            xlabel('Time (s)');
            ylabel('Voltage (V)');
            grid on;
            ```
        *   Use the `stepinfo` command to extract performance specifications:
            ```matlab
            info = stepinfo(G);
            disp(info);
            ```
        *   **Simulink Model:** Create a Simulink model with a Step Input block, a Transfer Fcn block (configured with your RLC transfer function), and a Scope block to visualize the output.
    2.  **Python (SciPy):**
        *   Use `scipy.signal.TransferFunction` to define the system.
        *   Use `scipy.signal.step` to get the time and output values for a step response.
        *   Analyze the output data to calculate performance metrics.

**Learning Outcome 4 (CO4): Design suitable controllers/compensators to meet the performance requirements using simulation tools.**

*   **Design:** While this module focuses on analyzing the *plant* (RLC network), understanding how to *design* a controller often builds upon this. If the RLC network's step response does not meet desired specifications (e.g., too much overshoot, too slow), a controller would be designed to modify the overall system's behavior.
    *   **Example Scenario:** Suppose the RLC network has excessive overshoot. A lead compensator could be designed (often using an op-amp circuit) to add a zero and a pole to the system's transfer function, effectively increasing the damping ratio and reducing overshoot.
    *   **Simulation for Design:**
        1.  Define the desired performance specifications (e.g., max overshoot < 5%, settling time < 10ms).
        2.  Model the RLC network in simulation.
        3.  If the RLC network alone doesn't meet the specs, design a compensator (e.g., a lead or lag compensator) and combine its transfer function with the RLC network's transfer function.
        4.  Simulate the step response of the *compensated* system.
        5.  Iterate on the compensator design until the performance requirements are met.
    *   **Note:** For this specific module, the focus is primarily on the analysis of the RLC system itself. CO4 might be more relevant in later modules where controller design is explicitly covered. However, the understanding gained here about performance specifications is crucial for any controller design.

## 4. Frequency Response Analysis

Frequency response describes how a system responds to sinusoidal inputs of varying frequencies.

*   **Input:** $v_{in}(t) = A \sin(\omega t)$
*   **Output:** For a stable linear time-invariant (LTI) system, the output will eventually be a sinusoid of the same frequency but with a different amplitude and phase: $v_c(t) = B \sin(\omega t + \phi)$.
*   **Transfer Function in Frequency Domain:** Substitute $s = j\omega$ into the system's transfer function:
    $$ G(j\omega) = \frac{1/LC}{(j\omega)^2 + (R/L)(j\omega) + 1/LC} $$
    $$ G(j\omega) = \frac{1/LC}{-\omega^2 + j\frac{R}{L}\omega + \frac{1}{LC}} $$
    $$ G(j\omega) = \frac{1/LC}{(\frac{1}{LC} - \omega^2) + j\frac{R}{L}\omega} $$

### 4.1 Key Frequency Response Characteristics

*   **Magnitude Response $|G(j\omega)|$**: The ratio of the output amplitude to the input amplitude ($B/A$).
    $$ |G(j\omega)| = \frac{|1/LC|}{\sqrt{(\frac{1}{LC} - \omega^2)^2 + (\frac{R}{L}\omega)^2}} $$
*   **Phase Response $\angle G(j\omega)$**: The phase shift between the output and input sinusoids ($\phi$).
    $$ \angle G(j\omega) = \angle(1/LC) - \angle\left((\frac{1}{LC} - \omega^2) + j\frac{R}{L}\omega\right) $$
    Since $1/LC$ is a positive real number, $\angle(1/LC) = 0$.
    $$ \angle G(j\omega) = -\arctan\left(\frac{\frac{R}{L}\omega}{\frac{1}{LC} - \omega^2}\right) $$
    The sign of the denominator term matters for the arctan calculation.

### 4.2 Bode Plots

Bode plots are graphical representations of the magnitude and phase response as a function of frequency (typically on a logarithmic scale).

*   **Magnitude Plot:** $|G(j\omega)|$ vs. $\log_{10}(\omega)$. Usually plotted in decibels (dB): $20 \log_{10} |G(j\omega)|$.
*   **Phase Plot:** $\angle G(j\omega)$ vs. $\log_{10}(\omega)$.

**For the series RLC circuit (output across C):**
$$ G(j\omega) = \frac{1/LC}{(\frac{1}{LC} - \omega^2) + j\frac{R}{L}\omega} $$
Let $\omega_n^2 = 1/LC$ and $2\zeta\omega_n = R/L$.
$$ G(j\omega) = \frac{\omega_n^2}{(\omega_n^2 - \omega^2) + j2\zeta\omega_n\omega} $$
Divide by $\omega_n^2$:
$$ G(j\omega) = \frac{1}{(1 - (\omega/\omega_n)^2) + j2\zeta(\omega/\omega_n)} $$
Let $\mu = \omega/\omega_n$ (normalization of frequency).
$$ G(j\mu) = \frac{1}{(1 - \mu^2) + j2\zeta\mu} $$

*   **Magnitude:**
    $$ |G(j\mu)| = \frac{1}{\sqrt{(1-\mu^2)^2 + (2\zeta\mu)^2}} $$
*   **Phase:**
    $$ \angle G(j\mu) = -\arctan\left(\frac{2\zeta\mu}{1-\mu^2}\right) $$

**Observations from Bode Plots:**

*   **Low Frequencies ($\omega \ll \omega_n$ or $\mu \ll 1$):**
    *   Magnitude: $|G(j\omega)| \approx 1$. The circuit acts like a capacitor, and at very low frequencies, its impedance is very high, so the capacitor voltage is close to the input voltage (assuming input voltage is the source).
    *   Phase: $\angle G(j\omega) \approx 0^\circ$.
*   **High Frequencies ($\omega \gg \omega_n$ or $\mu \gg 1$):**
    *   Magnitude: $|G(j\omega)| \approx \frac{1}{\omega^2} \cdot \omega_n^2 = \frac{1}{\omega^2 LC}$. The magnitude drops at $40$ dB/decade. The circuit acts like an inductor (or resistance if R dominates) for large frequencies. The impedance of the capacitor becomes very low, so the voltage across it approaches zero.
    *   Phase: $\angle G(j\omega) \approx -180^\circ$.
*   **Resonant Frequency ($\omega_r$):** For underdamped systems ($0 < \zeta < 1/\sqrt{2}$), there is a peak in the magnitude response at the resonant frequency $\omega_r < \omega_n$.
    $$ \omega_r = \omega_n \sqrt{1-2\zeta^2} $$
    The peak magnitude is:
    $$ |G(j\omega_r)| = \frac{1}{2\zeta\sqrt{1-\zeta^2}} $$
*   **At $\omega = \omega_n$:**
    *   Magnitude: $|G(j\omega_n)| = \frac{1}{2\zeta}$.
    *   Phase: $\angle G(j\omega_n) = -90^\circ$.

**Bandwidth:** The frequency at which the magnitude drops to $1/\sqrt{2}$ (or -3 dB) of its maximum value. For a standard second-order system of the form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, the 3-dB bandwidth is approximately $BW \approx \omega_n (1 - 2\zeta + \sqrt{2-4\zeta+2\zeta^2})$.

**Learning Outcome 1 (CO1) & 2 (CO2) for Frequency Response:**

*   **Experiment:**
    1.  Keep the RLC circuit connected as before.
    2.  Use a function generator capable of sweeping through a range of frequencies.
    3.  Measure the input voltage ($V_{in}$) and the output voltage ($V_{out}$) across the capacitor for various input frequencies.
    4.  Calculate the magnitude $|G(j\omega)| = V_{out}/V_{in}$ for each frequency.
    5.  Measure the phase shift ($\phi$) between the input and output signals using the oscilloscope's phase measurement capabilities or by observing the time shift between zero crossings.
    6.  Plot the magnitude (in dB) and phase (in degrees) versus frequency (on a log scale) to obtain experimental Bode plots.
    7.  Compare the experimental Bode plots with the theoretical plots generated from the known R, L, C values.

**Learning Outcome 3 (CO3) for Frequency Response:**

*   **Simulation:**
    1.  **MATLAB:**
        *   Use the `freqs` command or the `bode` command with the transfer function.
        ```matlab
        R = 10; L = 10e-3; C = 1e-6;
        num = 1/(L*C);
        den = [1, R/L, 1/(L*C)];
        G = tf(num, den);

        % Using freqs to get magnitude and phase at specific frequencies
        freqs_rad = logspace(-1, 5, 200); % Frequency range in rad/sec
        [mag, phase, wout] = freqs(num, den, freqs_rad);

        % Convert magnitude to dB and phase to degrees
        mag_dB = 20*log10(mag);
        phase_deg = rad2deg(phase);

        % Plotting
        figure;
        subplot(2,1,1);
        semilogx(wout, mag_dB);
        grid on;
        title('Bode Magnitude Plot');
        xlabel('Frequency (rad/s)');
        ylabel('Magnitude (dB)');

        subplot(2,1,2);
        semilogx(wout, phase_deg);
        grid on;
        title('Bode Phase Plot');
        xlabel('Frequency (rad/s)');
        ylabel('Phase (degrees)');
        ```
        *   **Simulink:** Use the "Linear Analysis" tools in Simulink. You can get the Bode plot directly from your Simulink model by linearizing it and using the analysis tools.

## 5. Practical Considerations and Design Choices

*   **Component Selection:**
    *   **Resistors:** Standard carbon composition or metal film resistors are usually suitable. Their inductance and capacitance are typically negligible for lower frequencies.
    *   **Inductors:** Real inductors have internal resistance (ESR - Equivalent Series Resistance). This ESR contributes to the damping ($\zeta$) of the system. The inductance value can also vary slightly with the current flowing through it (especially for iron-core inductors).
    *   **Capacitors:** Real capacitors have equivalent series resistance (ESR) and equivalent series inductance (ESL). ESR contributes to damping. ESL can affect the high-frequency response, potentially introducing unwanted resonant peaks. For precision, ceramic or film capacitors are often preferred over electrolytic capacitors for stability and low ESR.
*   **Achieving Target $\zeta$ and $\omega_n$:**
    *   The formulas $\omega_n = 1/\sqrt{LC}$ and $\zeta = \frac{R}{2}\sqrt{\frac{C}{L}}$ are derived assuming ideal components.
    *   When using real components, the actual $\zeta$ will be influenced by the ESR of the inductor and capacitor.
    *   To achieve a specific $\zeta$, you might need to add an external resistor in series with the RLC network if the internal resistance is too low, or select components with appropriate internal resistances.
    *   To achieve a specific $\omega_n$, you select L and C values according to $LC = 1/\omega_n^2$.

**Example Design Scenario:**
Design a second-order system using an RLC network with $\omega_n = 1000$ rad/s and $\zeta = 0.5$ (underdamped, moderate overshoot).
Let's choose $L = 10$ mH.
1.  **Calculate C:**
    $\omega_n = \frac{1}{\sqrt{LC}}$
    $C = \frac{1}{\omega_n^2 L} = \frac{1}{(1000)^2 \cdot 10 \times 10^{-3}} = \frac{1}{10^6 \cdot 10^{-2}} = \frac{1}{10^4} = 100 \times 10^{-6} F = 100 \mu F$.
2.  **Calculate R:**
    $\zeta = \frac{R}{2}\sqrt{\frac{C}{L}}$
    $R = \frac{2\zeta}{\sqrt{C/L}} = \frac{2 \times 0.5}{\sqrt{100 \times 10^{-6} / (10 \times 10^{-3})}} = \frac{1}{\sqrt{10 \times 10^{-3}}} = \frac{1}{\sqrt{10^{-2}}} = \frac{1}{0.1} = 10 \Omega$.

So, an RLC network with $R=10\Omega$, $L=10$mH, and $C=100\mu F$ (output across C) should approximate the desired system.

## 6. Practice Questions and Exercises

**Question 1:**
A series RLC circuit with output taken across the capacitor has the following component values: $R = 20 \Omega$, $L = 50$ mH, $C = 10 \mu F$.
a) Calculate the natural frequency ($\omega_n$) and the damping ratio ($\zeta$).
b) Classify the system's damping.
c) Determine the rise time ($t_r$) and maximum overshoot ($M_p$) for a unit step input.
d) If the input is $V_{in}(t) = 5 \sin(500t)$, what will be the steady-state output voltage $v_c(t)$ in terms of amplitude and phase?

**Answer 1:**
a)
$\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{50 \times 10^{-3} \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{500 \times 10^{-9}}} = \frac{1}{\sqrt{5 \times 10^{-7}}} \approx \frac{1}{7.07 \times 10^{-4}} \approx 1414$ rad/s.
$\zeta = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{20}{2}\sqrt{\frac{10 \times 10^{-6}}{50 \times 10^{-3}}} = 10\sqrt{\frac{10^{-5}}{5 \times 10^{-2}}} = 10\sqrt{2 \times 10^{-4}} = 10 \times 0.01414 \approx 0.1414$.

b) Since $0 < \zeta < 1$, the system is **underdamped**.

c)
$t_r \approx \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}} = \frac{\pi - \cos^{-1}(0.1414)}{1414\sqrt{1-(0.1414)^2}} = \frac{3.1416 - 1.429}{1414\sqrt{1-0.02}} \approx \frac{1.7126}{1414 \times 0.99} \approx \frac{1.7126}{1399.86} \approx 0.00122$ s or 1.22 ms.

$M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.1414\pi}{\sqrt{1-(0.1414)^2}}} \times 100\% = e^{-\frac{0.444}{0.99}} \times 100\% = e^{-0.448} \times 100\% \approx 0.639 \times 100\% = 63.9\%$.

d)
The transfer function is $G(j\omega) = \frac{1/LC}{(\frac{1}{LC} - \omega^2) + j\frac{R}{L}\omega}$.
$\omega_n^2 = 1/LC \approx 2 \times 10^6$ (from calculation in 'a').
$R/L = 20 / (50 \times 10^{-3}) = 400$.
Input frequency $\omega = 500$ rad/s.

$G(j500) = \frac{2 \times 10^6}{(2 \times 10^6 - 500^2) + j 400 \times 500} = \frac{2 \times 10^6}{(2 \times 10^6 - 0.25 \times 10^6) + j 200000}$
$G(j500) = \frac{2 \times 10^6}{1.75 \times 10^6 + j 0.2 \times 10^6}$

Magnitude: $|G(j500)| = \frac{2 \times 10^6}{\sqrt{(1.75 \times 10^6)^2 + (0.2 \times 10^6)^2}} = \frac{2}{\sqrt{1.75^2 + 0.2^2}} = \frac{2}{\sqrt{3.0625 + 0.04}} = \frac{2}{\sqrt{3.1025}} \approx \frac{2}{1.76} \approx 1.136$.

Phase: $\angle G(j500) = -\arctan\left(\frac{0.2 \times 10^6}{1.75 \times 10^6}\right) = -\arctan\left(\frac{0.2}{1.75}\right) = -\arctan(0.114) \approx -6.5^\circ$.

The input is $5 \sin(500t)$. The output will be $5 \times |G(j500)| \sin(500t + \angle G(j500))$.
$v_c(t) \approx 5 \times 1.136 \sin(500t - 6.5^\circ) \approx 5.68 \sin(500t - 6.5^\circ)$.

**Question 2:**
Consider a second-order system with the transfer function $G(s) = \frac{25}{s^2 + 6s + 25}$.
a) Identify $\omega_n$ and $\zeta$.
b) Calculate the peak time ($t_p$) and maximum overshoot ($M_p$).
c) If this transfer function represents the voltage across the capacitor of a series RLC circuit with $L=10$ mH, what would be the values of R and C?

**Answer 2:**
a) The general form is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing coefficients:
$\omega_n^2 = 25 \implies \omega_n = 5$ rad/s.
$2\zeta\omega_n = 6 \implies 2\zeta(5) = 6 \implies 10\zeta = 6 \implies \zeta = 0.6$.

b)
$t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} = \frac{\pi}{5\sqrt{1-(0.6)^2}} = \frac{\pi}{5\sqrt{1-0.36}} = \frac{\pi}{5\sqrt{0.64}} = \frac{\pi}{5 \times 0.8} = \frac{\pi}{4} \approx 0.785$ s.

$M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.6\pi}{\sqrt{1-(0.6)^2}}} \times 100\% = e^{-\frac{1.885}{0.8}} \times 100\% = e^{-2.356} \times 100\% \approx 0.0948 \times 100\% = 9.48\%$.

c) For a series RLC circuit with output across the capacitor, the transfer function is $\frac{1/LC}{s^2 + (R/L)s + 1/LC}$.
Comparing this with $G(s) = \frac{25}{s^2 + 6s + 25}$:
$\omega_n^2 = 1/LC = 25 \implies LC = 1/25 = 0.04$.
$2\zeta\omega_n = R/L = 6$.

Given $L = 10$ mH $= 0.01$ H.
From $LC = 0.04$:
$C = \frac{0.04}{L} = \frac{0.04}{0.01} = 4$ F. (This is a very large capacitor for typical lab experiments. Likely a typo in the question or a conceptual exercise).

From $R/L = 6$:
$R = 6 \times L = 6 \times 0.01 = 0.06 \Omega$. (This is a very low resistance, suggesting the ESR of the inductor would be critical).

Let's assume $L$ was meant to be larger, e.g., $L=0.1$ H for more practical component values.
If $L = 0.1$ H:
$C = \frac{0.04}{0.1} = 0.4$ F.
$R = 6 \times 0.1 = 0.6 \Omega$.

If we stick to the original values: $R=0.06 \Omega$, $L=0.01$ H, $C=4$ F.

## 7. Important Points to Remember

*   **RLC Circuit as a Second-Order System:** The series RLC circuit (output across C) directly corresponds to the standard second-order system form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
*   **Parameter Relationships:** Understand how R, L, and C determine $\omega_n$ and $\zeta$.
    *   $\omega_n = 1/\sqrt{LC}$
    *   $\zeta = \frac{R}{2}\sqrt{\frac{C}{L}}$
*   **Damping Ratio is Key:** The value of $\zeta$ dictates the system's transient response (underdamped, critically damped, overdamped).
*   **Performance Specifications:** Be able to define, calculate, and measure rise time, peak time, maximum overshoot, and settling time.
*   **Frequency Response:** Understand how the system's gain and phase change with input frequency. Bode plots are essential tools.
*   **Ideal vs. Real Components:** Remember that real inductors and capacitors have ESR, which affects the damping ratio.
*   **Simulation is Powerful:** Use tools like MATLAB/Simulink to verify experimental results and to design systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 8. Textbook References

*   **Katsuhiko Ogata (Modern Control Engineering):** Chapters on modeling, transient response, and frequency response of second-order systems. Provides detailed derivations and examples.
*   **Norman S. Nise (Control Systems Engineering):** Excellent coverage of performance specifications, root locus, time response, and frequency response analysis.
*   **Nagrath & Gopal (Control Systems Engineering):** Comprehensive treatment of system modeling, time-domain analysis, and frequency-domain analysis.

This study material aims to provide a comprehensive understanding of Module 4, covering the theoretical aspects, experimental procedures, and simulation techniques for analyzing second-order RLC systems.