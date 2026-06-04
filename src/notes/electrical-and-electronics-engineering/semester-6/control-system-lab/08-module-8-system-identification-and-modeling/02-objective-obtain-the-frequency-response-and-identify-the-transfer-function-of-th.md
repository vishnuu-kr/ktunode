---
title: "Objective: Obtain the frequency response  and identify the transfer function of the given system(black box),"
subject: "CONTROL SYSTEM LAB"
module: "Module 8: System Identification and Modeling"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3676f"
status: "completed"
scrapedAt: "2026-05-23T16:25:18.163Z"
---
# Control System Lab: Module 8 - System Identification and Modeling

## Topic: Obtain the Frequency Response and Identify the Transfer Function of a Given System (Black Box)

### **Objective:**

The primary objective of this experiment is to characterize an unknown "black box" system by determining its frequency response and subsequently identifying its transfer function. This process is crucial for understanding the behavior of physical systems and designing appropriate controllers.

### **Learning Outcomes:**

Upon successful completion of this module, you will be able to:

*   **LO1: Understand the concept of frequency response.** This includes comprehending how a system's output changes in amplitude and phase as a function of the input signal's frequency.
*   **LO2: Apply sinusoidal input signals to the black box system.** This involves generating and applying sinusoidal signals of varying frequencies to the unknown system.
*   **LO3: Measure and record the output signal's amplitude and phase shift.** This requires accurate measurement techniques for both amplitude and phase differences between the input and output signals.
*   **LO4: Construct Bode plots from the experimental data.** This involves plotting the magnitude (in dB) and phase (in degrees) of the system's response against the logarithm of the frequency.
*   **LO5: Determine the transfer function of the system from its frequency response.** This is the core outcome, involving various graphical and analytical methods to derive a mathematical model.
*   **LO6: Validate the identified transfer function.** This includes comparing the predicted frequency response of the identified model with the experimental data.

### **Key Concepts and Definitions:**

*   **System Identification:** The process of determining a mathematical model of a system based on its input and output data. This is particularly useful when the underlying physics of the system is unknown or too complex to model analytically.
    *   *(Referenced from Ogata, Chapter 12: State-Space Analysis of Discrete-Time Systems - though the principles of modeling from data apply across continuous and discrete systems)*
*   **Black Box System:** A system whose internal workings are unknown or not to be considered during the analysis. We only have access to its input and output terminals.
*   **Frequency Response:** The steady-state response of a system to sinusoidal inputs of varying frequencies. It is characterized by the **magnitude ratio** (gain) and **phase shift** between the input and output sinusoids.
    *   **Magnitude Ratio (Gain):** The ratio of the output amplitude to the input amplitude.
        *   $|G(j\omega)| = \frac{|Y(j\omega)|}{|U(j\omega)|}$
        *   Often expressed in decibels (dB): $20 \log_{10}(|G(j\omega)|)$
    *   **Phase Shift:** The angular difference between the output sinusoid and the input sinusoid, measured in degrees or radians.
        *   $\angle G(j\omega) = \angle Y(j\omega) - \angle U(j\omega)$
*   **Transfer Function, $G(s)$:** A mathematical representation of a linear, time-invariant (LTI) system in the Laplace domain. It relates the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
    *   $G(s) = \frac{Y(s)}{U(s)}$
*   **Frequency Domain Transfer Function, $G(j\omega)$:** The transfer function evaluated with $s = j\omega$. This directly represents the system's response to sinusoidal inputs.
    *   $G(j\omega) = |G(j\omega)| e^{j\angle G(j\omega)}$
*   **Bode Plot:** A graphical representation of the frequency response of a system. It consists of two plots:
    *   **Magnitude Plot:** $20 \log_{10}(|G(j\omega)|)$ versus $\log_{10}(\omega)$.
    *   **Phase Plot:** $\angle G(j\omega)$ versus $\log_{10}(\omega)$.
    *   *(Nise, Chapter 7: Frequency Response Analysis)*
*   **Asymptotic Approximation:** Straight-line approximations used to sketch Bode plots, which simplify the analysis of system poles and zeros.
*   **Corner Frequency:** The frequency at which the slope of the asymptotic Bode plot changes. This typically corresponds to the magnitude of poles or zeros.
*   **System Order:** The highest power of 's' in the denominator of the transfer function, indicating the complexity of the system.

### **Experimental Procedure:**

1.  **System Setup:**
    *   Connect the function generator (to provide sinusoidal input) to the input of the black box system.
    *   Connect the output of the black box system to an oscilloscope or data acquisition system to measure the output signal.
    *   Ensure proper grounding and signal connections.

2.  **Sinusoidal Input Generation:**
    *   Set the function generator to produce a sinusoidal waveform.
    *   Start with a low-frequency input signal.
    *   Maintain a constant amplitude for the input signal across all frequencies unless specified otherwise.

3.  **Data Acquisition:**
    *   For each chosen frequency ($\omega$):
        *   Apply the sinusoidal input.
        *   Allow the system to reach steady-state. This means the output signal should also be a sinusoid of the same frequency but with a different amplitude and phase.
        *   Measure the amplitude of the input signal ($A_{in}$).
        *   Measure the amplitude of the output signal ($A_{out}$).
        *   Measure the phase difference ($\Delta\phi$) between the input and output signals. This can be done by observing the time delay between corresponding peaks or zero crossings on the oscilloscope.
        *   Record the frequency ($\omega$) and the measured values ($A_{in}$, $A_{out}$, $\Delta\phi$).

4.  **Frequency Sweep:**
    *   Increment the input frequency systematically, covering a wide range from low to high frequencies.
    *   It's generally recommended to use a logarithmic scale for frequency increments to capture the system's behavior across different decades.

5.  **Data Tabulation:**
    *   Organize the collected data in a table with columns for:
        *   Frequency ($\omega$) (e.g., rad/s or Hz)
        *   Input Amplitude ($A_{in}$)
        *   Output Amplitude ($A_{out}$)
        *   Phase Shift ($\Delta\phi$) (degrees or radians)
        *   Magnitude Ratio ($|G(j\omega)| = A_{out} / A_{in}$)
        *   Magnitude in dB ($20 \log_{10}(|G(j\omega)|)$)

### **Identifying the Transfer Function from Frequency Response:**

Once you have the frequency response data, you can identify the transfer function using several methods:

#### **Method 1: Asymptotic Bode Plot Approximation (Graphical Method)**

This method is particularly useful for identifying transfer functions of rational form (ratios of polynomials in 's').

1.  **Plot the Data:** Plot the experimentally obtained magnitude (in dB) and phase shift (in degrees) against the logarithm of frequency.
2.  **Sketch the Asymptotic Magnitude Plot:**
    *   **Identify Dominant Features:** Look for changes in the slope of the magnitude plot. These changes typically occur at corner frequencies.
    *   **Approximate Slopes:** Assume the magnitude plot is composed of straight line segments with slopes corresponding to integer multiples of 20 dB/decade.
        *   A pole at the origin ($1/s$) contributes a slope of -20 dB/decade.
        *   A zero at the origin ($s$) contributes a slope of +20 dB/decade.
        *   A pole at $s = -a$ contributes a slope change of -20 dB/decade starting at $\omega = a$.
        *   A zero at $s = -z$ contributes a slope change of +20 dB/decade starting at $\omega = z$.
    *   **Identify Corner Frequencies:** The frequencies where the slope changes are the corner frequencies. These are typically the magnitudes of the poles and zeros.
    *   **Determine the Gain Constant (K):** Estimate the DC gain (gain at very low frequencies). The DC gain is often represented by a constant gain factor $K$ in the transfer function. The magnitude at low frequencies, before any poles are encountered, should approximate $20 \log_{10}(K)$.
3.  **Sketch the Asymptotic Phase Plot:**
    *   **Starting Phase:** The initial phase at low frequencies depends on the number of poles and zeros at the origin and the gain constant.
    *   **Phase Contributions:** For each pole or zero, estimate its phase contribution:
        *   Pole at $s=-a$: Phase lag of -90 degrees, starting at $\omega=0.1a$ and ending at $\omega=10a$.
        *   Zero at $s=-z$: Phase lead of +90 degrees, starting at $\omega=0.1z$ and ending at $\omega=10z$.
    *   **Combine Contributions:** Sum the phase contributions from all identified poles and zeros.
4.  **Compare and Refine:** Compare the sketched asymptotic Bode plots with the experimental data. Adjust corner frequencies and gain constant to best fit the experimental points.
5.  **Formulate the Transfer Function:** Based on the identified corner frequencies and gain constant, construct the transfer function $G(s)$.
    *   For poles at $s = -p_i$: Include terms $(s + p_i)$ in the denominator.
    *   For zeros at $s = -z_i$: Include terms $(s + z_i)$ in the numerator.
    *   For poles at the origin: Include terms $s^n$ in the denominator.
    *   For zeros at the origin: Include terms $s^m$ in the numerator.
    *   The gain constant $K$ will be the numerator constant.

    *Example of transfer function from corner frequencies:*
    If you identify poles at $\omega_p1$, $\omega_p2$ and zeros at $\omega_z1$, with a gain $K$, the transfer function might look like:
    $G(s) = K \frac{(s + \omega_{z1})}{(s + \omega_{p1})(s + \omega_{p2})}$

#### **Method 2: Peak Fitting (More Accurate)**

This method involves fitting actual Bode plot curves to known standard shapes, rather than just asymptotic lines. It can provide more accurate corner frequencies.

*   *(Nise, Chapter 7 discusses various frequency response plot interpretations)*

#### **Method 3: Analytical Methods (e.g., Least Squares)**

For more precise identification, especially with noisy data, analytical methods like least-squares fitting can be employed using software tools (e.g., MATLAB's System Identification Toolbox). These methods directly minimize the error between the system's actual response and the response of the identified model.

*   *(Ogata, Chapter 12 indirectly relates to system identification through modeling of physical systems from their input-output behavior, albeit in a discrete-time context for some examples. The core idea of deriving a model from data is consistent.)*

### **Validation of the Identified Transfer Function:**

After obtaining a candidate transfer function, it's crucial to validate its accuracy.

1.  **Generate Predicted Frequency Response:** Use the identified transfer function $G(s)$ to calculate its theoretical frequency response $G(j\omega)$.
2.  **Compare Predicted vs. Experimental:**
    *   Plot the calculated magnitude and phase responses on the same graph as the experimental data.
    *   Visually assess the agreement between the predicted and experimental curves.
    *   Quantify the error using metrics like Mean Squared Error (MSE) if using simulation tools.
3.  **Time-Domain Comparison (Optional but Recommended):**
    *   Apply the same input signal (e.g., a step or impulse) to both the actual black box system and the simulation model of the identified transfer function.
    *   Compare the output responses in the time domain. A good match indicates a valid model.

### **Examples:**

**Example 1: Identifying a First-Order System**

Suppose you apply sinusoidal inputs and obtain the following data:

| Frequency (rad/s) | Magnitude Ratio ($|G(j\omega)|$) | Phase Shift ($\Delta\phi$) (degrees) |
| :---------------- | :------------------------------ | :--------------------------------- |
| 0.1               | 0.99                            | -5.7                               |
| 1                 | 0.95                            | -31.9                              |
| 10                | 0.32                            | -84.3                              |
| 100               | 0.03                            | -89.4                              |

**Analysis:**

*   **Low Frequency:** The magnitude ratio is close to 1, and the phase shift is close to 0 degrees. This suggests the DC gain $K$ is approximately 1.
*   **High Frequency:** The phase shift approaches -90 degrees, indicating a single pole. The magnitude ratio decreases significantly as frequency increases.
*   **Corner Frequency:** The phase shift is around -45 degrees at $\omega = 1$ rad/s. For a first-order system $G(s) = \frac{K}{s+a}$, the phase shift is $- \arctan(\omega/a)$. Setting $\omega = 1$ and phase = -45 degrees, we get $-45 = -\arctan(1/a)$, which implies $a=1$.
*   **Magnitude Check:** For $G(s) = \frac{1}{s+1}$, the magnitude is $|G(j\omega)| = \frac{1}{\sqrt{1+\omega^2}}$.
    *   At $\omega=1$, $|G(j1)| = \frac{1}{\sqrt{1+1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$. This doesn't match the experimental 0.95 perfectly. Let's re-evaluate the corner frequency by looking at where the magnitude starts to significantly roll off.
    *   At $\omega=10$, the magnitude is 0.32. For $G(s) = \frac{1}{s+1}$, $|G(j10)| = \frac{1}{\sqrt{1+10^2}} = \frac{1}{\sqrt{101}} \approx 0.099$. This also doesn't match.

Let's try to estimate the corner frequency from the magnitude plot's slope. The magnitude drops from ~0.95 at $\omega=1$ to ~0.32 at $\omega=10$. This is a drop of about 0.63 over a decade, which is steeper than a typical first-order rolloff.

Let's assume the corner frequency is around $\omega_c = 1$. The magnitude at $\omega=1$ is approximately $K/\sqrt{1+(\omega/\omega_c)^2} = K/\sqrt{2}$. If $K=1$, magnitude is $0.707$.

Let's consider the phase shift of -31.9 degrees at $\omega=1$. The phase of $G(s) = \frac{K}{s+p}$ is $-\arctan(\omega/p)$.
$-31.9 = -\arctan(1/p) \implies \tan(31.9) \approx 0.622 = 1/p \implies p \approx 1/0.622 \approx 1.6$.

Now let's use $K=1$ and $p=1.6$ and check the magnitudes.
$G(s) = \frac{1}{s+1.6}$.
At $\omega=1$, $|G(j1)| = \frac{1}{\sqrt{1^2+1.6^2}} = \frac{1}{\sqrt{1+2.56}} = \frac{1}{\sqrt{3.56}} \approx 0.53$. Still not matching.

**Let's revisit the asymptotic method with the provided data:**

*   **Low Frequency (0.1 rad/s):** Magnitude $\approx 1$. Phase $\approx 0^\circ$. This suggests $K \approx 1$.
*   **Mid Frequency (1 rad/s):** Magnitude $\approx 0.95$. Phase $\approx -32^\circ$. The phase is approaching the -45 degree mark for a corner frequency at 1 rad/s.
*   **Higher Frequency (10 rad/s):** Magnitude $\approx 0.32$. Phase $\approx -84^\circ$. The phase is nearing -90 degrees, consistent with a single pole.
*   **Very High Frequency (100 rad/s):** Magnitude $\approx 0.03$. Phase $\approx -89^\circ$. Confirms the single pole behavior.

Let's assume a transfer function of the form $G(s) = \frac{K}{s+p}$.

From the low frequency data, $K \approx 1$.
From the phase shift at $\omega=1$ rad/s, which is -31.9 degrees, we can estimate the corner frequency. For a first-order system, the phase is $-\arctan(\omega/p)$. If the corner frequency were exactly at 1 rad/s, the phase would be -45 degrees. Since it's -31.9 degrees, the corner frequency is likely lower than 1 rad/s.

Let's try to estimate the corner frequency $\omega_c$ from the magnitude at $\omega=10$ rad/s. The magnitude ratio is 0.32. For $G(s) = \frac{1}{s+p}$, $|G(j10)| = \frac{1}{\sqrt{100+p^2}} = 0.32$.
$\sqrt{100+p^2} = 1/0.32 \approx 3.125$.
$100 + p^2 = (3.125)^2 \approx 9.76$.
$p^2 \approx 9.76 - 100 = -90.24$. This gives an imaginary value for $p$, which is incorrect. This indicates the simple first-order model might not be perfectly fitting or there are other effects.

**Let's reconsider the asymptotic approach and typical Bode plot features:**

*   **Magnitude Plot:**
    *   Start with a flat line at $20 \log_{10}(K)$. From $\omega=0.1$, $K \approx 1$, so the line is at 0 dB.
    *   At $\omega=1$ rad/s, the magnitude is -0.2 dB (0.95). This is very close to the asymptotic line, suggesting the corner frequency is *after* 1 rad/s.
    *   At $\omega=10$ rad/s, the magnitude is -9.9 dB (0.32). This is a drop of almost 10 dB from the assumed 0 dB line, indicating a corner frequency *before* 10 rad/s.
    *   The phase plot at $\omega=10$ rad/s is -84.3 degrees, which is very close to -90 degrees. This implies the dominant pole is at a frequency *below* 10 rad/s.

    Let's assume a corner frequency of $\omega_c = 3$ rad/s (a guess).
    *   For $\omega < 3$, slope is 0 dB/decade.
    *   For $\omega > 3$, slope is -20 dB/decade.
    *   At $\omega = 0.3$, magnitude $\approx 0$.
    *   At $\omega = 1$, magnitude $\approx 0 + (-20 \log_{10}(1/0.3)) = -20 \log_{10}(3.33) \approx -10.4$ dB. This is too low.

    Let's try a corner frequency closer to 1, say $\omega_c = 1.5$ rad/s.
    *   At $\omega = 0.15$, magnitude $\approx 0$.
    *   At $\omega = 1.5$, magnitude $\approx 0$.
    *   At $\omega = 15$, magnitude $\approx -20$ dB.

    Consider the phase shift at $\omega=1$ rad/s is $-31.9^\circ$. The phase of $\frac{1}{s+p}$ is $-\arctan(\omega/p)$.
    $-31.9 = -\arctan(1/p) \implies \tan(31.9) = 1/p \implies p \approx 1/0.622 \approx 1.6$.
    So, the corner frequency is approximately 1.6 rad/s.
    Let's use $K=1$ and $p=1.6$.
    $G(s) = \frac{1}{s+1.6}$

    Check magnitudes:
    *   $\omega=0.1$: $|G(j0.1)| = \frac{1}{\sqrt{1+0.016^2}} \approx 0.999$. Good.
    *   $\omega=1$: $|G(j1)| = \frac{1}{\sqrt{1+1.6^2}} = \frac{1}{\sqrt{1+2.56}} = \frac{1}{\sqrt{3.56}} \approx 0.53$. Still not matching 0.95.

    The experimental data suggests a system that is less sensitive to frequency changes than a simple first-order system with a single pole at 1.6 rad/s.

    **What if the DC gain is not exactly 1?**
    Let's assume a corner frequency at $\omega_c = 1$ rad/s (based on the phase being close to -45 degrees).
    $G(s) = \frac{K}{s+1}$.
    At $\omega=1$, $|G(j1)| = \frac{K}{\sqrt{1+1^2}} = \frac{K}{\sqrt{2}}$.
    Experimental magnitude at $\omega=1$ is 0.95. So, $0.95 = K/\sqrt{2} \implies K = 0.95 \times \sqrt{2} \approx 1.34$.

    Now let's use $G(s) = \frac{1.34}{s+1}$ and check other frequencies.
    *   $\omega=0.1$: $|G(j0.1)| = \frac{1.34}{\sqrt{1+0.01}} \approx 1.34$. Experimental is 0.99. Not good.

    **Let's try fitting the asymptotic magnitude plot:**
    Assume $K=1$.
    Low frequency: 0 dB.
    At $\omega=10$, magnitude is -9.9 dB. This means the rolloff started *before* 10 rad/s.
    Let's assume a corner frequency $\omega_c = 5$ rad/s.
    *   $\omega < 5$: 0 dB.
    *   $\omega > 5$: slope -20 dB/decade.
    *   At $\omega=1$, magnitude $\approx 0$. Experimental is -0.2 dB.
    *   At $\omega=10$, magnitude $\approx 0 + (-20 \log_{10}(10/5)) = -20 \log_{10}(2) \approx -6$ dB. Experimental is -9.9 dB.

    The experimental data suggests a system whose magnitude drops off more slowly than a simple first-order system at low frequencies and then faster at higher frequencies. This could indicate a more complex system, or that the asymptotic approximation isn't perfectly applicable here.

    **A more direct fitting approach:**
    Let's assume $G(s) = \frac{K}{s+p}$ and try to fit the experimental points using non-linear least squares. However, for a manual exercise, we can try to pinpoint the corner frequency.

    Phase at $\omega=10$ is $-84.3^\circ$, very close to $-90^\circ$. This implies the pole's magnitude $p$ is significantly less than 10.
    Phase at $\omega=1$ is $-31.9^\circ$. For $-\arctan(\omega/p) = -31.9^\circ$, with $\omega=1$, we get $p = 1/\tan(31.9^\circ) \approx 1.6$.

    Let's test $G(s) = \frac{K}{s+1.6}$.
    *   $\omega=0.1$: $|G(j0.1)| = \frac{K}{\sqrt{1+0.016^2}} \approx K$. Experimental is 0.99. So $K \approx 0.99$.
    *   $\omega=1$: $|G(j1)| = \frac{0.99}{\sqrt{1+1.6^2}} = \frac{0.99}{\sqrt{3.56}} \approx \frac{0.99}{1.88} \approx 0.52$. Experimental is 0.95. Still a large discrepancy.

    **Conclusion for Example 1:** The experimental data does not perfectly fit a simple first-order system. However, the phase response strongly suggests a dominant pole. The discrepancy in magnitude might be due to measurement noise, or the system might have additional, less dominant dynamics or a different form. For a typical lab scenario, one might be asked to find the "best fit" first-order system. In that case, we'd choose parameters that balance the fit across frequencies. Using the phase at $\omega=1$ to estimate $p \approx 1.6$, and the DC gain to estimate $K \approx 1$, gives $G(s) = \frac{1}{s+1.6}$. This is a reasonable first approximation despite the magnitude mismatch.

**Example 2: Identifying a Second-Order System**

Consider a system with a transfer function $G(s) = \frac{10}{(s+2)(s+5)}$.

*   **Corner Frequencies:** $s=-2$ and $s=-5$. So, $\omega_{c1} = 2$ rad/s and $\omega_{c2} = 5$ rad/s.
*   **DC Gain:** $K = 10/(2 \times 5) = 1$.

**Bode Plot Sketch (Asymptotic):**

1.  **Magnitude Plot:**
    *   Start at 0 dB (for $K=1$) for $\omega < 2$.
    *   At $\omega=2$, the pole $(s+2)$ introduces a slope change of -20 dB/decade. The asymptotic slope becomes -20 dB/decade.
    *   At $\omega=5$, the pole $(s+5)$ introduces another slope change of -20 dB/decade. The asymptotic slope becomes -40 dB/decade.

    *Asymptotic Magnitude:*
    *   $\omega < 2$: 0 dB
    *   $2 < \omega < 5$: $-20 \log_{10}(\omega/2)$
    *   $\omega > 5$: $-20 \log_{10}(\omega/2) - 20 \log_{10}(\omega/5) = -20 \log_{10}((\omega/2)(\omega/5)) = -20 \log_{10}(\omega^2/10) = -40 \log_{10}(\omega) + 20 \log_{10}(10) = -40 \log_{10}(\omega) + 20$

    Let's evaluate at some points:
    *   $\omega=1$: 0 dB
    *   $\omega=2$: 0 dB (asymptotic value just before corner)
    *   $\omega=5$: $-20 \log_{10}(5/2) = -20 \log_{10}(2.5) \approx -7.96$ dB
    *   $\omega=10$: $-40 \log_{10}(10/2) = -40 \log_{10}(5) \approx -27.9$ dB (using the $-40 \log_{10}(\omega/2)$ part)
    The actual magnitude at $\omega=5$ will have peaking due to the second-order nature, and at $\omega=10$ it will be closer to the $-40$ dB/decade slope.

2.  **Phase Plot:**
    *   Initial phase at very low frequencies is $0^\circ$ (for $K=1$ and no poles/zeros at origin).
    *   Pole at $\omega_c=2$: Phase lag of -90 degrees, with the transition centered around $\omega=2$. From $\omega=0.2$ to $\omega=20$.
        *   $\omega=0.2$: $0^\circ$
        *   $\omega=2$: $-45^\circ$
        *   $\omega=20$: $-90^\circ$
    *   Pole at $\omega_c=5$: Phase lag of -90 degrees, with the transition centered around $\omega=5$. From $\omega=0.5$ to $\omega=50$.
        *   $\omega=0.5$: $0^\circ$
        *   $\omega=5$: $-45^\circ$
        *   $\omega=50$: $-90^\circ$

    *Combined Phase:*
    *   $\omega < 0.2$: $0^\circ$
    *   $0.2 < \omega < 2$: Phase from first pole. At $\omega=1$, phase $\approx -26.6^\circ$.
    *   $2 < \omega < 5$: Sum of phases from both poles. At $\omega=3$, phase $\approx -26.6^\circ + (-26.6^\circ) = -53.2^\circ$.
    *   $5 < \omega < 20$: Sum of phases. At $\omega=10$, phase $\approx -26.6^\circ + (-45^\circ) = -71.6^\circ$.
    *   $20 < \omega < 50$: Sum of phases. At $\omega=20$, phase $\approx -90^\circ + (-45^\circ) = -135^\circ$.
    *   $\omega > 50$: $-180^\circ$.

    *Note: These are approximations. Actual phase transitions are smoother.*

You would then compare the experimental Bode plot with this sketch to identify the corner frequencies and the gain.

### **Practice Questions:**

1.  **What is the primary goal of system identification in the context of control systems lab?**
    *   **Answer:** To determine a mathematical model (transfer function) of an unknown system from its input-output behavior, typically by analyzing its frequency response.

2.  **If a system's output magnitude is 0.5 times its input magnitude at a specific frequency, what is the magnitude ratio $|G(j\omega)|$ and the gain in decibels?**
    *   **Answer:**
        *   Magnitude Ratio $|G(j\omega)| = 0.5$
        *   Gain in dB = $20 \log_{10}(0.5) = 20 \times (-0.301) \approx -6.02$ dB.

3.  **A system exhibits a phase lag of -60 degrees at 10 rad/s. If this is the only dynamic element and it's a simple pole, estimate the corner frequency.**
    *   **Answer:** For a single pole $G(s) = \frac{K}{s+p}$, the phase is $-\arctan(\omega/p)$.
        $-60^\circ = -\arctan(10/p)$
        $\tan(60^\circ) = \sqrt{3} \approx 1.732 = 10/p$
        $p = 10 / 1.732 \approx 5.77$ rad/s.
        The corner frequency is approximately 5.77 rad/s.

4.  **Describe how you would experimentally determine the phase shift between an input sine wave and an output sine wave using an oscilloscope.**
    *   **Answer:**
        *   Display both the input and output signals on the oscilloscope.
        *   Trigger the oscilloscope on the input signal.
        *   Measure the time difference ($\Delta t$) between corresponding points (e.g., positive zero crossings, peaks) of the input and output waveforms.
        *   Calculate the phase shift using the formula: Phase Shift (degrees) = $(\Delta t / T) \times 360^\circ$, where $T$ is the period of the input signal ($T = 1/\omega$).

5.  **Given the following Bode plot data for a black box system, sketch the asymptotic magnitude and phase plots and propose a possible transfer function.**

    | Frequency (rad/s) | Magnitude (dB) | Phase (degrees) |
    | :---------------- | :------------- | :-------------- |
    | 0.1               | 0              | 0               |
    | 1                 | -2             | -30             |
    | 10                | -22            | -70             |
    | 100               | -42            | -85             |

    *   **Sketching:**
        *   **Magnitude:** Starts at 0 dB. At 1 rad/s, it's -2 dB. At 10 rad/s, it's -22 dB (a drop of 20 dB in one decade after 1 rad/s). At 100 rad/s, it's -42 dB (a drop of 20 dB in one decade after 10 rad/s). This suggests a corner frequency around 1 rad/s and a change to -40 dB/decade after some point. The phase at 10 rad/s is -70 degrees, which is close to -90 degrees, but not quite there yet.
        *   **Phase:** Starts at 0. At 1 rad/s, it's -30 degrees. At 10 rad/s, it's -70 degrees. At 100 rad/s, it's -85 degrees.
        *   The phase at 10 rad/s is -70 degrees, and at 100 rad/s is -85 degrees. This indicates the dominant pole is at a frequency *below* 10 rad/s.
        *   Let's consider the corner frequency to be around 1 rad/s.
        *   The drop from 1 rad/s to 10 rad/s is 20 dB. This is consistent with a single pole whose corner frequency is at or around 1 rad/s.
        *   The phase at 1 rad/s is -30 degrees. For $-\arctan(\omega/p) = -30^\circ$, with $\omega=1$, we get $\tan(30^\circ) = 1/\sqrt{3} \approx 0.577 = 1/p$, so $p \approx 1/0.577 \approx 1.73$.
        *   Let's assume the corner frequency is $\omega_c = 1.73$ rad/s.
        *   DC gain at $\omega=0.1$ is 0 dB, so $K=1$.
        *   **Proposed Transfer Function:** $G(s) = \frac{1}{s + 1.73}$
        *   Let's check the phase at $\omega=10$: $G(j10) = \frac{1}{j10 + 1.73}$. Phase $= -\arctan(10/1.73) = -\arctan(5.78) \approx -80.2^\circ$. The experimental value is -70 degrees. This suggests the corner frequency might be slightly higher.
        *   If we assume a corner frequency of $\omega_c = 3$ rad/s:
            *   $G(s) = \frac{1}{s+3}$.
            *   Phase at $\omega=1$: $-\arctan(1/3) \approx -18.4^\circ$. Experimental is -30.
            *   Phase at $\omega=10$: $-\arctan(10/3) \approx -73.3^\circ$. Experimental is -70. This is a better fit.
            *   Magnitude at $\omega=1$: $|G(j1)| = \frac{1}{\sqrt{1+3^2}} = \frac{1}{\sqrt{10}} \approx 0.316$. Magnitude in dB is $-10$ dB. Experimental is -2 dB.

        *   The data is tricky. The phase at $\omega=10$ is closer to the case with a pole at $\omega_c=3$. The magnitude at $\omega=1$ is better explained by a pole closer to $\omega_c=1.73$.
        *   Given the data, a reasonable attempt would be to choose parameters that best fit the majority of points. The phase progression is more indicative of the pole locations than the magnitude. The jump from -30 deg at 1 rad/s to -70 deg at 10 rad/s suggests a pole whose corner frequency is somewhere between 1 and 10.

        *   Let's try to fit the phase data at $\omega=1$ and $\omega=10$ simultaneously for $G(s) = \frac{K}{s+p}$.
            *   $K=1$ (from 0 dB at 0.1 rad/s).
            *   At $\omega=1$: $-\arctan(1/p) = -30^\circ \implies p = 1/\tan(30^\circ) \approx 1.73$.
            *   At $\omega=10$: $-\arctan(10/p) = -70^\circ \implies p = 10/\tan(70^\circ) \approx 10/2.747 \approx 3.64$.
            *   These give conflicting values for $p$. This implies the system might not be a simple first-order system, or there's significant experimental error.

        *   **If forced to choose a single first-order transfer function:** A common approach is to find the pole that best represents the overall phase transition. Averaging the estimated $p$ values: $(1.73 + 3.64)/2 \approx 2.68$.
        *   Let's try $G(s) = \frac{1}{s+2.7}$.
            *   Phase at $\omega=1$: $-\arctan(1/2.7) \approx -20.3^\circ$. (Experimental: -30)
            *   Phase at $\omega=10$: $-\arctan(10/2.7) \approx -74.8^\circ$. (Experimental: -70)
            *   Magnitude at $\omega=1$: $|G(j1)| = \frac{1}{\sqrt{1+2.7^2}} = \frac{1}{\sqrt{1+7.29}} = \frac{1}{\sqrt{8.29}} \approx 0.347$. (-9.2 dB) (Experimental: -2 dB)

        *   **A more likely scenario given the data:** The phase progression suggests a pole located around 2-3 rad/s. The magnitude drop between 1 and 10 rad/s of 20 dB implies the dominant rolloff starts around 1 rad/s. The discrepancy suggests the system might be more complex or the data is noisy. For this exercise, a common approach is to identify the corner frequency from the phase plot. The phase goes from -30 to -70 degrees between 1 and 10 rad/s. If we approximate this as the transition zone for a pole, the effective corner frequency might be around $\sqrt{1 \times 10} = 3.16$ rad/s.

        *   **Final Possible Answer (based on a best effort to fit):** Let's assume a pole at $\omega_c = 3$ rad/s and DC gain $K=1$.
            **Possible Transfer Function:** $G(s) = \frac{1}{s+3}$.
            *   *Verification:* Magnitude at $\omega=1$: -10 dB (experimental -2 dB). Phase at $\omega=1$: -18.4 deg (experimental -30 deg). Magnitude at $\omega=10$: -21.6 dB (experimental -22 dB). Phase at $\omega=10$: -73.3 deg (experimental -70 deg). The fit is imperfect, but captures the general trend.

### **Important Points to Remember:**

*   **Steady-State Response:** Ensure you are measuring the steady-state output after the transient response has died out.
*   **Accurate Measurement:** Precision in measuring amplitudes and phase differences is critical for accurate transfer function identification.
*   **Frequency Range:** Cover a sufficiently wide range of frequencies to observe the system's behavior at low, mid, and high frequencies.
*   **Noise Filtering:** Be aware that experimental data can be noisy. If using simulation tools, noise filtering techniques might be necessary.
*   **Asymptotic Approximation Limitations:** Asymptotic Bode plots are approximations. For systems with low damping ratios or complex poles/zeros, the actual plots can deviate significantly from the asymptotes, especially around corner frequencies.
*   **Multiple Methods:** Employ multiple methods (graphical, analytical) and cross-validate your identified transfer function.
*   **System Order:** The complexity of the system (e.g., first-order, second-order, higher-order) will dictate the shape of the frequency response and the methods used for identification.

### **Alignment with Course Outcomes:**

*   **CO1 (Identify and conduct suitable experiments to determine the parameters to model a physical system):** This module directly addresses CO1 by performing experiments to obtain frequency response data, which are then used to derive system parameters (poles, zeros, gain) for modeling. (K3)
*   **CO2 (Conduct suitable experiments and determine the performance specifications):** While not explicitly calculating performance specs like settling time, the frequency response (e.g., bandwidth, resonant frequency from Bode plots) provides insights into system performance. (K3)
*   **CO3 (Analyse a linear continuous time system model using simulation tools):** The process of identifying a transfer function and then simulating its response to compare with experimental data is a core part of analyzing an LTI system model. (K3)
*   **CO4 (Design suitable controllers/compensators to meet the performance requirements using simulation tools):** Understanding the system's frequency response and having an accurate model (identified transfer function) is a prerequisite for designing effective controllers (e.g., using Bode plots for controller design). (K5 - the ability to use the identified model for design comes in later modules).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
