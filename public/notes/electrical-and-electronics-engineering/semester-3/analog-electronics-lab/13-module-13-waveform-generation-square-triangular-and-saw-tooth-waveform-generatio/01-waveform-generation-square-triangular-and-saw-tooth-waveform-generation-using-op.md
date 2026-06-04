---
title: "Waveform generation– Square, triangular and saw tooth waveform generation using OPAMPs."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 13: Waveform generation– Square, triangular and saw tooth waveform generation using OPAMPs."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d5f"
status: "completed"
scrapedAt: "2026-05-23T16:11:10.998Z"
---
# ANALOG ELECTRONICS LAB: Module 13 - Waveform Generation using Op-Amps

## 13.1 Introduction to Waveform Generation

Waveform generation is a fundamental aspect of analog electronics, enabling the creation of signals with specific shapes and characteristics. These generated waveforms are crucial for various applications, including testing, signal processing, communication systems, and control systems. Operational Amplifiers (Op-Amps) are versatile active components that can be configured to generate a wide range of waveforms. This module focuses on the generation of square, triangular, and sawtooth waveforms using Op-Amps.

**Key Concepts:**

*   **Waveform:** A graphical representation of a signal's amplitude as it varies over time.
*   **Oscillator:** An electronic circuit that produces a periodic, oscillating electronic signal, often a sine wave.
*   **Op-Amp:** A high-gain, direct-coupled, differential voltage amplifier with a single output. It is characterized by its high input impedance, low output impedance, and high open-loop gain.

**Textbook References:**

*   **Paynter, R. T. (Pearson Education):** Chapters related to Op-amp applications, oscillators, and active filters.
*   **Boylestad, R. L., & Nashelsky, L. (Pearson Education):** Chapters covering Op-amp circuits, oscillators, and waveform shaping.
*   **Neaman, D. A. (McGraw Hill Companies):** Sections discussing feedback circuits, oscillators, and signal generation.

**Course Outcome Alignment:**

*   **CO1 (K1):** Understanding the basic principles of waveform generation and the role of Op-Amps.
*   **CO4 (K3):** Designing and implementing circuits for generating specific waveforms.
*   **CO5 (K3):** Simulating these waveform generation circuits to verify their functionality.

## 13.2 Square Waveform Generation (Astable Multivibrator)

A square wave is characterized by its abrupt transitions between two distinct voltage levels, typically the positive and negative saturation voltages of the Op-Amp. An astable multivibrator using an Op-Amp is a common method for generating square waves. It operates by using positive feedback to create regenerative switching.

**Circuit Configuration:**

The circuit typically employs an Op-Amp with positive feedback configured as a Schmitt trigger, and a capacitor connected to the inverting input through a resistor.

**Working Principle:**

1.  **Positive Feedback:** A voltage divider network with resistors $R_1$ and $R_2$ connected to the output provides positive feedback to the non-inverting input ($V_+$). This creates hysteresis.
2.  **Triggering Levels:** The positive feedback establishes two distinct threshold voltages at the non-inverting input:
    *   **Upper Threshold Voltage ($V_{UT}$):** The voltage level at $V_+$ that causes the output to switch from positive to negative saturation.
    *   **Lower Threshold Voltage ($V_{LT}$):** The voltage level at $V_+$ that causes the output to switch from negative to positive saturation.
3.  **Charging/Discharging of Capacitor:** The capacitor ($C$) connected to the inverting input ($V_-$) charges and discharges through resistor ($R$). The rate of charging/discharging is determined by the time constant $RC$.
4.  **Switching Action:**
    *   When the output is at positive saturation ($+V_{sat}$), the capacitor charges towards $+V_{sat}$ through $R$.
    *   When the capacitor voltage ($V_C$) reaches $V_{UT}$ (which is proportional to $+V_{sat}$), the Op-Amp output flips to negative saturation ($-V_{sat}$).
    *   Now, the capacitor discharges towards $-V_{sat}$ through $R$.
    *   When $V_C$ reaches $V_{LT}$ (which is proportional to $-V_{sat}$), the Op-Amp output flips back to positive saturation.
    *   This cycle repeats, generating a square wave at the output.

**Key Formulas:**

*   **Threshold Voltages:**
    $V_{UT} = \beta V_{sat}$
    $V_{LT} = -\beta V_{sat}$
    where $\beta = \frac{R_2}{R_1 + R_2}$ is the feedback fraction, and $V_{sat}$ is the saturation voltage of the Op-Amp (approximately $\pm V_{CC}$ depending on the Op-Amp and load).

*   **Time Period (T):** The time taken for the capacitor to charge from $V_{LT}$ to $V_{UT}$ (or discharge from $V_{UT}$ to $V_{LT}$) determines the period. The capacitor voltage $V_C(t)$ during charging/discharging is given by:
    $V_C(t) = V_{final} + (V_{initial} - V_{final}) e^{-t/RC}$

    For charging from $V_{LT}$ to $V_{UT}$ when output is $+V_{sat}$:
    $V_{UT} = V_{sat} + (V_{LT} - V_{sat}) e^{-T_{high}/RC}$
    $\beta V_{sat} = V_{sat} + (-\beta V_{sat} - V_{sat}) e^{-T_{high}/RC}$
    $\beta V_{sat} - V_{sat} = -(\beta V_{sat} + V_{sat}) e^{-T_{high}/RC}$
    $V_{sat}(\beta - 1) = -V_{sat}(\beta + 1) e^{-T_{high}/RC}$
    $\frac{1-\beta}{1+\beta} = e^{-T_{high}/RC}$
    $T_{high} = -RC \ln\left(\frac{1-\beta}{1+\beta}\right) = RC \ln\left(\frac{1+\beta}{1-\beta}\right)$

    Similarly, for discharging from $V_{UT}$ to $V_{LT}$ when output is $-V_{sat}$:
    $V_{LT} = -V_{sat} + (V_{UT} - (-V_{sat})) e^{-T_{low}/RC}$
    $-\beta V_{sat} = -V_{sat} + (\beta V_{sat} + V_{sat}) e^{-T_{low}/RC}$
    $V_{sat}(1-\beta) = V_{sat}(1+\beta) e^{-T_{low}/RC}$
    $\frac{1-\beta}{1+\beta} = e^{-T_{low}/RC}$
    $T_{low} = RC \ln\left(\frac{1+\beta}{1-\beta}\right)$

    Therefore, $T_{high} = T_{low}$, and the total period is:
    $T = T_{high} + T_{low} = 2RC \ln\left(\frac{1+\beta}{1-\beta}\right)$

*   **Frequency (f):** $f = \frac{1}{T} = \frac{1}{2RC \ln\left(\frac{1+\beta}{1-\beta}\right)}$

**Important Points to Remember:**

*   The symmetry of the square wave depends on the Op-Amp's saturation voltages being symmetrical about 0V.
*   The duty cycle is typically 50% if $V_{UT}$ and $V_{LT}$ are symmetrical.
*   The frequency can be adjusted by changing $R$, $C$, or the feedback resistors $R_1$ and $R_2$.

**Example:**

Design a square wave generator with a frequency of approximately 1 kHz using an Op-Amp (assume $\pm V_{sat} \approx \pm 12V$). Let $R_1 = 10k\Omega$ and $R_2 = 10k\Omega$.

*   $\beta = \frac{10k}{10k + 10k} = 0.5$
*   $T = 2RC \ln\left(\frac{1+0.5}{1-0.5}\right) = 2RC \ln\left(\frac{1.5}{0.5}\right) = 2RC \ln(3)$
*   $T \approx 2RC \times 1.0986$
*   For $f = 1kHz$, $T = 1ms = 0.001s$.
*   $0.001 = 2RC \times 1.0986$
*   $RC = \frac{0.001}{2 \times 1.0986} \approx 0.000455 s = 455 \mu s$
*   If we choose $C = 0.1 \mu F$, then $R = \frac{455 \mu s}{0.1 \mu F} = 4.55 M\Omega$.

**Practice Question 1:**

A square wave generator circuit uses an Op-Amp with $R_1 = 20k\Omega$, $R_2 = 10k\Omega$, $R = 100k\Omega$, and $C = 0.01\mu F$. Calculate the frequency of the generated square wave. Assume $\beta$ is the feedback fraction.

**Answer 1:**

*   $\beta = \frac{R_2}{R_1 + R_2} = \frac{10k\Omega}{20k\Omega + 10k\Omega} = \frac{10}{30} = \frac{1}{3}$
*   $T = 2RC \ln\left(\frac{1+\beta}{1-\beta}\right) = 2(100k\Omega)(0.01\mu F) \ln\left(\frac{1+1/3}{1-1/3}\right)$
*   $T = 2(100 \times 10^3)(0.01 \times 10^{-6}) \ln\left(\frac{4/3}{2/3}\right) = 2 \times 10^{-3} \ln(2)$
*   $T \approx 2 \times 10^{-3} \times 0.693 = 1.386 \times 10^{-3} s = 1.386 ms$
*   $f = \frac{1}{T} = \frac{1}{1.386 \times 10^{-3}} \approx 721.5 Hz$

## 13.3 Triangular Waveform Generation

A triangular wave consists of two ramps, one increasing and one decreasing, that repeat periodically. This waveform can be generated by integrating a square wave. An Op-Amp integrator circuit is ideal for this purpose.

**Circuit Configuration:**

The circuit comprises two main stages:

1.  **Square Wave Generator:** An astable multivibrator (as discussed in Section 13.2) to provide the input square wave.
2.  **Integrator:** An Op-Amp configured as a basic integrator, with a resistor ($R$) at the input and a capacitor ($C$) in the feedback loop.

**Working Principle:**

1.  **Square Wave Input:** The square wave generated by the first stage is fed to the input of the integrator.
2.  **Integrator Action:** The integrator circuit's output voltage ($V_{out}$) is proportional to the integral of its input voltage ($V_{in}$).
    *   When the input square wave is positive, the integrator's output ramps downwards (since the input is applied to the inverting terminal). The rate of change is proportional to the input voltage and the $RC$ product.
    *   When the input square wave is negative, the integrator's output ramps upwards.
3.  **Symmetry:** If the input square wave is symmetrical (50% duty cycle), the upward and downward ramps of the triangular wave will have equal slopes and durations, resulting in a symmetrical triangular wave.

**Key Formulas:**

*   **Integrator Output:** For a triangular wave, the integrator output voltage $V_{out}(t)$ is:
    $V_{out}(t) = -\frac{1}{RC} \int V_{in}(t) dt$

    If $V_{in}(t)$ is a square wave with amplitude $A_{sq}$ and period $T_{sq}$, then for a positive half-cycle of duration $T_{sq}/2$:
    $V_{out}(t) = V_{out}(0) - \frac{1}{RC} A_{sq} t$ (for $0 \le t \le T_{sq}/2$)

    And for a negative half-cycle of duration $T_{sq}/2$:
    $V_{out}(t) = V_{out}(T_{sq}/2) - \frac{1}{RC} (-A_{sq}) t'$ (where $t'$ is time from the start of the negative half-cycle)

*   **Amplitude of Triangular Wave ($A_{tri}$):** The peak-to-peak amplitude of the triangular wave is determined by how much the integrator output ramps before the square wave flips. If the integrator starts at 0V and the input square wave is $+A_{sq}$ for $T_{sq}/2$, the output drops to:
    $V_{out}(T_{sq}/2) = -\frac{1}{RC} A_{sq} \frac{T_{sq}}{2}$
    The amplitude of the triangular wave is $|V_{out}(T_{sq}/2)| = \frac{A_{sq} T_{sq}}{2RC}$.

*   **Frequency of Triangular Wave ($f_{tri}$):** The frequency of the triangular wave is the same as the frequency of the input square wave ($f_{tri} = f_{sq}$).

**Important Points to Remember:**

*   **Ideal Integrator:** An ideal integrator has infinite DC gain, meaning any small DC offset in the input can cause the output to drift to saturation. In practice, a small resistor ($R_f$) is often placed in series with the feedback capacitor to limit the DC gain and prevent saturation. This converts it into a practical or lossy integrator.
*   **Slew Rate:** The Op-Amp's slew rate can limit the maximum frequency at which a triangular wave can be generated without distortion. The output slew rate must be sufficient to track the ramp.
*   **Amplitude Control:** The amplitude of the triangular wave can be adjusted by changing the input square wave amplitude ($A_{sq}$) or by altering the $RC$ values of the integrator.

**Example:**

Consider a square wave generator producing a $\pm 5V$ square wave at 1kHz. If this is fed into an integrator with $R = 10k\Omega$ and $C = 0.1\mu F$, what will be the approximate amplitude of the resulting triangular wave?

*   $A_{sq} = 5V$
*   $f_{sq} = 1kHz$, so $T_{sq} = 1ms$. The duration of each half-cycle is $T_{sq}/2 = 0.5ms = 0.5 \times 10^{-3} s$.
*   $RC = (10k\Omega)(0.1\mu F) = (10 \times 10^3)(0.1 \times 10^{-6}) = 1 \times 10^{-3} s = 1ms$.
*   Amplitude of triangular wave $A_{tri} = \frac{A_{sq} T_{sq}}{2RC} = \frac{5V \times 1 \times 10^{-3} s}{2 \times 1 \times 10^{-3} s} = \frac{5V}{2} = 2.5V$.
    The peak-to-peak amplitude will be $2 \times 2.5V = 5V$.

**Practice Question 2:**

A square wave generator with a frequency of 500 Hz and an amplitude of $\pm 10V$ is connected to an Op-Amp integrator with $R = 20k\Omega$ and $C = 0.02\mu F$. Calculate the frequency and peak-to-peak amplitude of the generated triangular wave.

**Answer 2:**

*   **Frequency:** The frequency of the triangular wave will be the same as the input square wave, so $f_{tri} = 500 Hz$.
*   **Amplitude:**
    *   $A_{sq} = 10V$
    *   $f_{sq} = 500 Hz$, so $T_{sq} = \frac{1}{500 Hz} = 2ms = 2 \times 10^{-3} s$.
    *   Duration of each half-cycle $T_{sq}/2 = 1ms = 1 \times 10^{-3} s$.
    *   $RC = (20k\Omega)(0.02\mu F) = (20 \times 10^3)(0.02 \times 10^{-6}) = 0.4 \times 10^{-3} s = 0.4ms$.
    *   Peak amplitude $A_{tri} = \frac{A_{sq} T_{sq}}{2RC} = \frac{10V \times 2 \times 10^{-3} s}{2 \times 0.4 \times 10^{-3} s} = \frac{10V \times 2}{0.8} = \frac{20V}{0.8} = 25V$.
    *   The peak-to-peak amplitude will be $2 \times 25V = 50V$.

## 13.4 Sawtooth Waveform Generation

A sawtooth wave is characterized by a linear ramp that rises or falls from one voltage level to another, followed by a rapid flyback to the starting voltage. This rapid flyback is a key differentiator from the triangular wave. Sawtooth generators are often implemented using a relaxation oscillator concept involving a capacitor charging through a resistor and then being rapidly discharged by a switching element.

**Common Implementation using Op-Amp and a Comparator/Switch:**

A common method involves using an Op-Amp as a comparator and another Op-Amp as an integrator, along with a transistor as a switch for fast discharge.

**Circuit Configuration:**

1.  **Integrator:** An Op-Amp integrator circuit similar to the one used for triangular wave generation.
2.  **Comparator:** Another Op-Amp (or the same Op-Amp configured as a comparator) to detect when the integrator's output reaches a certain threshold.
3.  **Switching Element:** A transistor (e.g., NPN bipolar junction transistor) controlled by the comparator's output to rapidly discharge the capacitor in the integrator.

**Working Principle:**

1.  **Capacitor Charging:** The capacitor ($C$) in the integrator charges linearly through a resistor ($R$) from a constant voltage source or another part of the circuit (often the output of a constant current source for a more linear ramp). For simpler Op-Amp based generators, the input to the integrator is a square wave.
2.  **Threshold Detection:** The output of the integrator (which is a triangular wave if the input is a square wave) is fed to the input of a comparator. The comparator's reference voltage is set to a specific level.
3.  **Triggering the Discharge:** When the integrator's output reaches the comparator's threshold voltage, the comparator's output changes state. This output change is used to turn on the transistor.
4.  **Rapid Discharge (Flyback):** When the transistor turns on, it provides a low-resistance path for the capacitor to discharge rapidly. This rapid discharge creates the "flyback" or "retrace" portion of the sawtooth waveform.
5.  **Reset:** Once the capacitor is discharged to a certain level (e.g., close to zero or a negative threshold), the comparator's output changes back, turning off the transistor. The capacitor then begins to charge again, restarting the cycle.

**Variations for Sawtooth Generation:**

*   **Constant Current Charging:** For a more linear ramp, the capacitor should be charged by a constant current rather than a constant voltage through a resistor. This can be achieved using a current source circuit.
*   **Op-Amp as a Sawtooth Generator Directly:** Some configurations use a single Op-Amp in a relaxation oscillator setup. In these circuits, positive feedback is used to create hysteresis, and the capacitor charges through a resistor. The switching action of the Op-Amp, coupled with the capacitor's charging, naturally produces a sawtooth-like waveform at the output. The linearity of the ramp depends on the Op-Amp's characteristics and the circuit design.

**Circuit Example (Simplified Op-Amp Relaxation Oscillator):**

A basic relaxation oscillator for generating a sawtooth-like waveform can be built with an Op-Amp, resistor ($R$), and capacitor ($C$).

1.  The non-inverting input ($V_+$) is connected to the output through a voltage divider ($R_1, R_2$) providing positive feedback, creating hysteresis.
2.  The inverting input ($V_-$) is connected to the capacitor ($C$), which charges through a resistor ($R$) from a power supply.
3.  When the capacitor voltage reaches the upper threshold ($V_{UT}$) at $V_-$, the output switches to negative saturation.
4.  The capacitor now discharges towards the negative supply.
5.  When the capacitor voltage reaches the lower threshold ($V_{LT}$) at $V_-$, the output switches to positive saturation, and the cycle repeats.

The output waveform is often a near-sawtooth or a distorted sine wave depending on the precise values and Op-Amp characteristics. For a true linear sawtooth, more complex circuits are required.

**Key Concepts for True Sawtooth:**

*   **Linear Ramp:** Achieved by charging the capacitor with a constant current.
*   **Fast Flyback:** Achieved by rapidly discharging the capacitor using a switching device.

**Textbook References for Sawtooth:**

*   **Boylestad & Nashelsky:** Chapters on oscillators and signal generation might cover relaxation oscillators.
*   **Neaman:** Might discuss circuits with transistors for switching and discharge.

**Important Points to Remember:**

*   The linearity of the sawtooth ramp is critical. Constant current charging is preferred for linear ramps.
*   The flyback time should be significantly shorter than the ramp time for a classic sawtooth shape.
*   The frequency and amplitude can be adjusted by changing the $RC$ values and the threshold voltages.

**Practice Question 3:**

Describe the key difference between a triangular wave generator and a basic sawtooth wave generator in terms of their waveform characteristics and how this difference is achieved in circuit design.

**Answer 3:**

The key difference lies in the **flyback** or **retrace** portion of the waveform.

*   **Triangular Wave:** Has two linear ramps, one increasing and one decreasing, with smooth transitions between them. The output voltage changes polarity.
*   **Sawtooth Wave:** Has one linear ramp (either increasing or decreasing) followed by a very rapid, almost instantaneous transition back to the starting voltage of the ramp. This rapid transition is called the flyback or retrace.

This difference is achieved in circuit design by:

*   **Triangular Wave:** Typically generated by integrating a square wave. The integrator output naturally ramps up and down.
*   **Sawtooth Wave:** While it might also involve an integrator, it requires a mechanism for **rapid discharge** of the integrating capacitor. This is usually accomplished by a switching element (like a transistor) that is activated when the capacitor voltage reaches a certain threshold, quickly draining the charge and causing the fast flyback. For a true linear sawtooth, the capacitor is ideally charged by a constant current source.

## 13.5 Practical Considerations and Circuit Improvements

### 13.5.1 Op-Amp Selection

*   **Bandwidth:** The Op-Amp's bandwidth should be sufficient to handle the desired frequencies of operation. Higher frequencies require Op-Amps with higher unity-gain bandwidth.
*   **Slew Rate:** For generating faster waveforms or waveforms with steeper slopes (like sawtooth), a higher slew rate Op-Amp is necessary to avoid distortion. Slew rate ($SR$) limitations can cause triangular waves to become rounded at the peaks and sawtooth ramps to deviate from linearity. The minimum required slew rate for a triangular wave of amplitude $A_{tri}$ and frequency $f_{tri}$ is $SR_{min} = 2\pi f_{tri} A_{tri}$.
*   **Output Voltage Swing:** The Op-Amp's output voltage swing should be close to the power supply rails for maximum amplitude of the generated waveforms.
*   **Input Bias Current and Offset Voltage:** These can affect the linearity of the integrator and the stability of the oscillators. Using Op-Amps with low bias current and offset voltage, or incorporating compensation techniques, can improve performance.

### 13.5.2 Improving Linearity in Integrators

*   **Constant Current Source:** For accurate sawtooth or triangular waveforms, charging the capacitor with a constant current is crucial for linearity. A constant current source circuit can be built using an Op-Amp and a transistor.
*   **Limiting Resistor ($R_f$) in Integrator:** As mentioned earlier, a small resistor ($R_f$) in series with the feedback capacitor ($C$) in an integrator limits the DC gain and prevents output saturation due to small DC offsets or leakage currents. This effectively makes it a "lossy" integrator, introducing a slight exponential curvature to the ramps.

### 13.5.3 Frequency Stability

*   **Component Tolerance:** The frequency of Op-Amp based oscillators is sensitive to the tolerance of resistors and capacitors. Using components with tighter tolerances will result in more stable frequencies.
*   **Temperature:** Changes in temperature can affect the values of resistors and capacitors, leading to frequency drift.

### 13.5.4 Generating Different Waveform Shapes

*   **Adjusting Feedback Resistors:** Changing $R_1$ and $R_2$ in the astable multivibrator alters the hysteresis levels, which affects the switching thresholds and consequently the frequency and amplitude of the square wave.
*   **Adjusting Integrator Components:** Modifying $R$ and $C$ in the integrator circuit directly impacts the slope of the ramps and thus the frequency and amplitude of the triangular wave.
*   **Wave Shaping Circuits:** Post-processing of generated waveforms using diode-based clipper or clamper circuits can further shape the output.

**Textbook References:**

*   **Neaman, D. A.:** Chapters on Op-amp limitations, slew rate, and practical circuit design considerations.
*   **Paynter, R. T. & Boylestad & Nashelsky:** Sections on practical Op-amp applications and oscillator design.

**Course Outcome Alignment:**

*   **CO1 (K1):** Understanding the practical limitations of Op-Amps and components.
*   **CO4 (K3):** Designing circuits that incorporate these practical considerations for better performance.
*   **CO5 (K3):** Simulating circuits to observe the effects of slew rate, component tolerances, etc.

**Practice Question 4:**

What is the primary reason for incorporating a small resistor in series with the feedback capacitor of an Op-Amp integrator circuit, and what effect does this have on the output waveform?

**Answer 4:**

The primary reason for incorporating a small resistor ($R_f$) in series with the feedback capacitor ($C$) of an Op-Amp integrator is to **limit the DC gain** of the integrator.

The effect of this resistor is:

*   **Prevents Output Saturation:** An ideal integrator has infinite DC gain. Any small DC offset voltage at the input or due to Op-Amp imperfections (like input bias currents or offset voltage) will be amplified over time, causing the integrator's output to drift towards its saturation limits. The added resistor makes the circuit a "lossy" integrator, reducing the DC gain and making the output more stable.
*   **Introduces a Slight Exponential Curvature:** While the ramps are still approximately linear, the presence of $R_f$ means the capacitor is not charged/discharged solely by the input signal. This can introduce a slight exponential curvature to the ramps, making them slightly less linear than an ideal integrator. The effect is more pronounced when $R_f$ is large relative to the input resistor $R$.

## 13.6 Summary and Key Takeaways

This module has explored the fundamental principles and practical implementation of generating square, triangular, and sawtooth waveforms using Op-Amps.

**Key Concepts Recap:**

*   **Square Wave:** Generated using an astable multivibrator with positive feedback and hysteresis, relying on the Op-Amp's switching action between saturation levels.
    *   Frequency depends on $RC$ and feedback resistor ratios.
*   **Triangular Wave:** Generated by integrating a square wave. The integrator's output ramps linearly up and down.
    *   Frequency is the same as the input square wave.
    *   Amplitude is determined by the square wave amplitude and the integrator's $RC$ product.
*   **Sawtooth Wave:** Characterized by a linear ramp followed by a rapid flyback.
    *   Achieved through capacitor charging (ideally constant current) and rapid discharge via a switching element.
    *   Linearity is a key consideration.

**Practical Considerations:**

*   Op-Amp slew rate and bandwidth are critical for high-frequency operation and waveform fidelity.
*   Component tolerances affect frequency stability.
*   Practical integrators often include a feedback resistor to prevent saturation.
*   Constant current sources improve the linearity of sawtooth ramps.

**Course Outcome Alignment:**

*   This module directly addresses **CO4 (K3)** by enabling the design and implementation of these waveform generation circuits.
*   It also supports **CO1 (K1)** through understanding Op-Amp limitations and **CO5 (K3)** through circuit simulation.

---
**End of Module 13 Notes**
