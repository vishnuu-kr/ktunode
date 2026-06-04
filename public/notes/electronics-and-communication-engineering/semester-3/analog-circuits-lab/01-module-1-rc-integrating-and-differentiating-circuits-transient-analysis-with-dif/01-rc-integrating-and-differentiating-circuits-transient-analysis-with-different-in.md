---
title: "RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe425"
status: "completed"
scrapedAt: "2026-05-23T17:44:27.595Z"
---
# ANALOG CIRCUITS LAB - Module 1: RC Integrating and Differentiating Circuits

## Topic: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)

---

### **1. Introduction to RC Circuits**

*   **Definition:** RC circuits are fundamental electronic circuits consisting of a resistor (R) and a capacitor (C). They are used for filtering, timing, and shaping signals.
*   **Key Components:**
    *   **Resistor (R):** Resists the flow of current. Measured in Ohms ($\Omega$).
    *   **Capacitor (C):** Stores electrical energy in an electric field. Measured in Farads (F).
*   **Time Constant ($\tau$):** A critical parameter for RC circuits, representing the time it takes for the capacitor to charge or discharge to approximately 63.2% of its final value.
    *   Formula: $\tau = R \times C$
    *   **Significance:** A smaller time constant means faster charging/discharging, while a larger time constant means slower charging/discharging.

---

### **2. RC Differentiating Circuit**

*   **Circuit Configuration:** The output is taken across the resistor.

    ```
    Vin ---| |----- Vout
           C
           |
           ---[ R ]--- GND
    ```

*   **Behavior:** This circuit approximates differentiation of the input voltage if the time constant ($\tau = RC$) is much smaller than the time duration of significant changes in the input signal ($RC \ll T$).
*   **Mathematical Derivation:**
    *   By Kirchhoff's Voltage Law (KVL): $V_{in} = V_C + V_R$
    *   Current through the circuit: $I = \frac{V_R}{R}$
    *   Current through the capacitor: $I = C \frac{dV_C}{dt}$
    *   Therefore, $V_R = R \times I = RC \frac{dV_C}{dt}$
    *   Substituting back into KVL: $V_{in} = V_C + RC \frac{dV_C}{dt}$
    *   If $RC \ll T$, the capacitor voltage ($V_C$) changes very little during the time the input voltage changes significantly. Thus, $V_C \approx constant$, and $\frac{dV_C}{dt} \approx 0$.
    *   This simplifies to $V_{in} \approx V_R$.
    *   Since $V_{out} = V_R$, we have $V_{out} \approx V_{in}$.
    *   However, the current is what is primarily affected by the differentiator. The current is $I = C \frac{dV_C}{dt}$.
    *   And the output voltage is $V_{out} = I \times R = R \times C \frac{dV_C}{dt}$.
    *   If the input is applied across the series combination of R and C, with output across R:
        *   $V_{in} = V_R + V_C$
        *   $I = \frac{V_{in} - V_C}{R}$
        *   $I = C \frac{dV_C}{dt}$
        *   $V_{out} = V_R = I \times R$
        *   If $RC \ll T$, $V_C$ is nearly constant during rapid changes. This means that the change in $V_C$ is much smaller than the change in $V_{in}$.
        *   Thus, $V_{in} \approx V_R$ for instantaneous changes.
        *   The current is $I = C \frac{dV_{in}}{dt}$ (approximating $V_C$ as constant during rapid changes).
        *   And $V_{out} = I \times R = RC \frac{dV_{in}}{dt}$.
    *   **Correct Derivation for Differentiator (output across R):**
        *   $V_{in} = V_C + V_{out}$
        *   $I = \frac{V_{out}}{R}$
        *   $I = C \frac{dV_C}{dt}$
        *   $V_{in} = V_C + IR$
        *   $V_C = V_{in} - IR$
        *   Substituting $I = \frac{V_{out}}{R}$ into the capacitor current equation: $\frac{V_{out}}{R} = C \frac{d}{dt}(V_{in} - IR)$
        *   $\frac{V_{out}}{R} = C \frac{dV_{in}}{dt} - CR \frac{dI}{dt}$
        *   $\frac{V_{out}}{R} = C \frac{dV_{in}}{dt} - CR \frac{d}{dt}(\frac{V_{out}}{R})$
        *   $\frac{V_{out}}{R} = C \frac{dV_{in}}{dt} - C \frac{dV_{out}}{dt}$
        *   $V_{out} + C \frac{dV_{out}}{dt} = RC \frac{dV_{in}}{dt}$
        *   For $RC \ll T$, the $C \frac{dV_{out}}{dt}$ term is small.
        *   Therefore, $V_{out} \approx RC \frac{dV_{in}}{dt}$.

*   **Transient Analysis with Different Inputs:**
    *   **Step Input:**
        *   Input: $V_{in}(t) = A$ for $t \ge 0$.
        *   Output: $V_{out}(t) \approx RC \frac{d(A)}{dt} = 0$.
        *   **Practical Observation:** A sharp, short pulse or spike output. The faster the rise of the step, the higher the spike. For an ideal step, the output is an impulse.
        *   **From Bell (p. 224):** "The output voltage is proportional to the rate of change of the input voltage. For a step input, the rate of change is infinite at the step, so the output is an impulse."
    *   **Square Wave Input:**
        *   Input: A series of alternating positive and negative steps.
        *   Output: A series of positive and negative spikes. The width of the spikes is inversely proportional to the time constant and the duration of the square wave's pulse.
        *   **From Meganathan (p. 315):** "When a square wave is applied to a differentiator, the output is a train of positive and negative spikes at the edges of the input waveform."
    *   **Pulse Input:**
        *   Input: A pulse with a rapid rise and fall.
        *   Output: Positive spikes at the leading edge and negative spikes at the trailing edge of the pulse.
    *   **Ramp Input:**
        *   Input: $V_{in}(t) = mt$ for $t \ge 0$.
        *   Output: $V_{out}(t) \approx RC \frac{d(mt)}{dt} = RCm$.
        *   **Practical Observation:** A constant DC voltage output proportional to the slope of the ramp.

*   **Frequency Response:**
    *   **Behavior:** Differentiators pass high frequencies more effectively than low frequencies. They act as a **high-pass filter**.
    *   **Transfer Function:** $H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{j\omega RC}{1 + j\omega RC}$
    *   For $RC \ll T$ (or $\omega RC \ll 1$): $H(j\omega) \approx j\omega RC$.
    *   **Magnitude Response:** $|H(j\omega)| \approx \omega RC$. The magnitude increases linearly with frequency.
    *   **Phase Response:** $\angle H(j\omega) \approx 90^\circ$.
    *   **Cutoff Frequency ($f_c$ or $\omega_c$):** The frequency at which the output is $1/\sqrt{2}$ (or -3dB) of the low-frequency asymptote.
        *   For a perfect differentiator, the cutoff frequency is ideally very low or undefined in this simplified model. However, in a practical circuit, the point where it starts deviating from the ideal differentiator behavior is considered. The transfer function for a practical differentiator is $H(j\omega) = \frac{j\omega RC}{1 + j\omega RC}$. The corner frequency where $|H(j\omega)| = 1/\sqrt{2}$ is when $|j\omega RC| = 1$, so $\omega_c RC = 1$, or $f_c = \frac{1}{2\pi RC}$.
        *   **Important Point:** For proper differentiation, the operating frequency range should be *above* this cutoff frequency.

*   **Limitations/Practical Considerations:**
    *   **Amplitude Distortion:** For large amplitude inputs or inputs with fast transitions, the output voltage can exceed the supply voltage, leading to clipping.
    *   **Noise Amplification:** Differentiators amplify high-frequency noise, as noise often has high-frequency components.
    *   **Non-ideal behavior:** At low frequencies or for slow input changes, the capacitor voltage is no longer negligible, and the circuit acts more like a simple voltage divider.

---

### **3. RC Integrating Circuit**

*   **Circuit Configuration:** The output is taken across the capacitor.

    ```
    Vin ---[ R ]-----| |----- Vout
                   C
                   |
                   --- GND
    ```

*   **Behavior:** This circuit approximates integration of the input voltage if the time constant ($\tau = RC$) is much larger than the time duration of significant changes in the input signal ($RC \gg T$).
*   **Mathematical Derivation:**
    *   By Kirchhoff's Voltage Law (KVL): $V_{in} = V_R + V_C$
    *   Current through the circuit: $I = \frac{V_{in} - V_C}{R}$
    *   Current through the capacitor: $I = C \frac{dV_C}{dt}$
    *   Therefore, $V_{out} = V_C = \frac{1}{C} \int I dt$.
    *   Substituting $I$: $V_{out}(t) = \frac{1}{C} \int \frac{V_{in}(t) - V_C(t)}{R} dt$
    *   $V_{out}(t) = \frac{1}{RC} \int (V_{in}(t) - V_{out}(t)) dt$
    *   For $RC \gg T$, the capacitor voltage ($V_C = V_{out}$) changes very slowly during the time the input voltage changes. Thus, $V_{out}(t) \approx constant$ during the rapid input changes, and the integral of $(V_{in}(t) - V_{out}(t))$ is approximately the integral of $V_{in}(t)$.
    *   So, $V_{out}(t) \approx \frac{1}{RC} \int V_{in}(t) dt$.
    *   **From Bell (p. 223):** "The output voltage is proportional to the integral of the input voltage. For a step input, the output is a ramp."

*   **Transient Analysis with Different Inputs:**
    *   **Step Input:**
        *   Input: $V_{in}(t) = A$ for $t \ge 0$.
        *   Output: $V_{out}(t) \approx \frac{1}{RC} \int A dt = \frac{At}{RC}$.
        *   **Practical Observation:** A linearly increasing ramp voltage. The slope is $\frac{A}{RC}$. The ramp continues until the capacitor charges to the input voltage, at which point the current becomes negligible.
        *   **From Meganathan (p. 314):** "For a step voltage input to an integrator, the output is a ramp whose slope is determined by the input voltage and the time constant."
    *   **Square Wave Input:**
        *   Input: A series of alternating positive and negative steps.
        *   Output: A series of ramps, increasing during the positive pulse and decreasing during the negative pulse. The output will resemble a triangular wave if the pulses are of equal duration and amplitude.
        *   **From Bell (p. 223):** "When a square wave is applied to an integrator, the output is a triangular wave."
    *   **Pulse Input:**
        *   Input: A pulse with a rapid rise and fall.
        *   Output: A ramp during the pulse duration (charging) and a negative ramp after the pulse ends (discharging if there's a path for discharge or if the input goes to zero).
    *   **Ramp Input:**
        *   Input: $V_{in}(t) = mt$ for $t \ge 0$.
        *   Output: $V_{out}(t) \approx \frac{1}{RC} \int mt dt = \frac{mt^2}{2RC}$.
        *   **Practical Observation:** A parabolic voltage output.

*   **Frequency Response:**
    *   **Behavior:** Integrators pass low frequencies more effectively than high frequencies. They act as a **low-pass filter**.
    *   **Transfer Function:** $H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{1}{1 + j\omega RC}$
    *   For $RC \gg T$ (or $\omega RC \gg 1$): $H(j\omega) \approx \frac{1}{j\omega RC}$.
    *   **Magnitude Response:** $|H(j\omega)| \approx \frac{1}{\omega RC}$. The magnitude decreases linearly with frequency.
    *   **Phase Response:** $\angle H(j\omega) \approx -90^\circ$.
    *   **Cutoff Frequency ($f_c$ or $\omega_c$):** The frequency at which the output is $1/\sqrt{2}$ (or -3dB) of the high-frequency asymptote.
        *   For a practical integrator, the corner frequency is when $|j\omega RC| = 1$, so $\omega_c RC = 1$, or $f_c = \frac{1}{2\pi RC}$.
        *   **Important Point:** For proper integration, the operating frequency range should be *below* this cutoff frequency.

*   **Limitations/Practical Considerations:**
    *   **DC Offset:** Any DC component in the input signal will be integrated, leading to a ramp that can cause saturation of the output.
    *   **Drift:** Small DC offsets or noise can be integrated, causing the output voltage to drift over time.
    *   **Non-ideal behavior:** At high frequencies or for fast input changes, the circuit's behavior deviates from ideal integration.

---

### **4. Laboratory Experiments and Design Considerations**

**Objective (CO1, CO2, CO3):** To design, build, simulate, and analyze RC integrating and differentiating circuits with different input waveforms and study their transient and frequency response.

**Design Steps:**

1.  **Choose Time Constant ($\tau$):** Decide on the desired time constant based on the expected input signal frequencies or the duration of input events.
    *   For differentiators, $\tau$ should be small compared to the input signal's characteristic time.
    *   For integrators, $\tau$ should be large compared to the input signal's characteristic time.
2.  **Select Component Values:**
    *   Choose a capacitor value that is readily available and suitable for the application (e.g., ceramic, polyester).
    *   Calculate the required resistor value using $\tau = RC$.
    *   **Example:** To differentiate a signal with a rise time of 1ms, choose $\tau = 0.1 \times 1ms = 0.1ms$. If C = 0.1$\mu$F, then $R = \tau/C = 0.1 \times 10^{-3} / (0.1 \times 10^{-6}) = 1k\Omega$.
    *   **Example:** To integrate a signal with a period of 10ms, choose $\tau = 10 \times 10ms = 100ms$. If C = 1$\mu$F, then $R = \tau/C = 100 \times 10^{-3} / (1 \times 10^{-6}) = 100k\Omega$.
3.  **Choose Input Signal:** Select appropriate input signals for testing (e.g., sine wave, square wave, pulse, step).
4.  **Determine Operating Frequency Range:** Identify the range of frequencies relevant to the application.

**Simulation (CO2):**

*   Use circuit simulation software (e.g., LTspice, Proteus, Multisim) to build the circuit.
*   Apply various input waveforms (sine, square, pulse) with different frequencies and amplitudes.
*   Observe the output waveforms (transient response).
*   Perform AC analysis to obtain the frequency response (Bode plots for magnitude and phase).

**Hardware Implementation (CO1):**

*   Breadboard the circuit using chosen resistor and capacitor values.
*   Use a function generator to provide the input signals.
*   Use an oscilloscope to visualize the input and output waveforms.
*   Compare the observed waveforms with simulated results and theoretical expectations.

**Troubleshooting (CO3):**

*   **Incorrect Output:**
    *   **Differentiator:** If the output is not a spike for a step input, check if $RC$ is too large or the input rise time is too slow. Check connections and component values.
    *   **Integrator:** If the output is not a ramp for a step input, check if $RC$ is too small or the input pulse duration is too short. Check connections and component values.
*   **Output Clipping:** The output voltage might be exceeding the limits of the signal source or the measurement device.
*   **Excessive Noise:** Ensure the circuit is properly shielded and powered. Consider adding a low-pass filter to the input if high-frequency noise is a problem (which would alter the differentiation/integration characteristics).

---

### **5. Key Concepts and Important Points to Remember**

*   **Time Constant ($\tau = RC$):** The fundamental parameter determining the circuit's behavior.
*   **Differentiator Condition:** $RC \ll T$ (time constant much smaller than the input signal's significant change duration). Output is proportional to the derivative of the input. Acts as a **high-pass filter**.
*   **Integrator Condition:** $RC \gg T$ (time constant much larger than the input signal's significant change duration). Output is proportional to the integral of the input. Acts as a **low-pass filter**.
*   **Input Waveforms and Outputs:**
    *   **Step Input:** Differentiator -> Spike; Integrator -> Ramp.
    *   **Square Wave Input:** Differentiator -> Spikes; Integrator -> Triangular wave.
*   **Frequency Response:**
    *   Differentiator: Amplifies high frequencies, attenuates low frequencies.
    *   Integrator: Amplifies low frequencies, attenuates high frequencies.
*   **Limitations:** Noise amplification in differentiators, drift in integrators, non-ideal behavior at frequencies/durations where the conditions $RC \ll T$ or $RC \gg T$ are not met.
*   **Design:** The choice of $R$ and $C$ is crucial and depends on the specific application's input signal characteristics.

---

### **6. Practice Questions and Exercises**

**Question 1: Differentiating Circuit Analysis**
A resistor of 10 k$\Omega$ and a capacitor of 0.01 $\mu$F are connected in series, with the output taken across the resistor.
a) Calculate the time constant ($\tau$) of the circuit.
b) If a step voltage of 5V is applied, what is the approximate output voltage immediately after the step? Explain why.
c) If a square wave with a frequency of 1 kHz and an amplitude of 10V (from -5V to +5V) is applied, what would you expect the output waveform to look like?
d) What type of filter is this circuit, and what is its approximate cutoff frequency?

**Answer 1:**
a) $\tau = RC = (10 \times 10^3 \, \Omega) \times (0.01 \times 10^{-6} \, F) = 0.1 \times 10^{-3} \, s = 0.1 \, ms$.
b) For a step input, the rate of change is infinite. Therefore, the output voltage $V_{out} \approx RC \frac{dV_{in}}{dt}$ is approximately a sharp spike. The magnitude of the spike is proportional to the amplitude of the step and inversely proportional to the time constant. For an ideal step, the output is an impulse.
c) The period of the square wave is $T = 1/f = 1/1000 \, Hz = 1 \, ms$. Since $\tau = 0.1 \, ms$ is much smaller than the pulse duration of the square wave (which is $0.5 \, ms$), the circuit will act as a differentiator. You would expect a series of positive and negative spikes at the leading and trailing edges of the square wave, respectively.
d) This circuit is a **high-pass filter**. The cutoff frequency is $f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi (0.1 \times 10^{-3} \, s)} \approx 1.59 \, kHz$. For proper differentiation, the operating frequencies should be significantly *above* this value.

---

**Question 2: Integrating Circuit Analysis**
A resistor of 100 k$\Omega$ and a capacitor of 1 $\mu$F are connected in series, with the output taken across the capacitor.
a) Calculate the time constant ($\tau$) of the circuit.
b) If a step voltage of 5V is applied at $t=0$, and the capacitor is initially uncharged, what is the output voltage at $t=1 \, ms$?
c) If a square wave with a frequency of 50 Hz and an amplitude of 10V (from -5V to +5V) is applied, what would you expect the output waveform to look like?
d) What type of filter is this circuit, and what is its approximate cutoff frequency?

**Answer 2:**
a) $\tau = RC = (100 \times 10^3 \, \Omega) \times (1 \times 10^{-6} \, F) = 0.1 \, s = 100 \, ms$.
b) The period of the square wave is $T = 1/f = 1/50 \, Hz = 20 \, ms$. Since $\tau = 100 \, ms$ is much larger than the pulse duration of the square wave (which is $10 \, ms$), the circuit will act as an integrator. The output voltage is approximately $V_{out}(t) \approx \frac{1}{RC} \int V_{in}(t) dt$. For a step of 5V, $V_{out}(t) \approx \frac{5V}{100 \, ms} \times t$. At $t = 1 \, ms$, $V_{out}(1 \, ms) \approx \frac{5V}{0.1 \, s} \times (1 \times 10^{-3} \, s) = 50 \, V/s \times 1 \times 10^{-3} \, s = 0.05 \, V = 50 \, mV$.
c) Since $\tau = 100 \, ms$ is much larger than the pulse duration of the square wave ($10 \, ms$), the output will be a series of ramps. During the positive half-cycle, the output will ramp up linearly, and during the negative half-cycle, it will ramp down linearly. The resulting waveform will approximate a triangular wave.
d) This circuit is a **low-pass filter**. The cutoff frequency is $f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi (0.1 \, s)} \approx 1.59 \, Hz$. For proper integration, the operating frequencies should be significantly *below* this value.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. Textbooks and References**

*   **Electronic Devices and Circuits by David A Bell (Oxford University Press, 2008, 5th edition):** This textbook provides foundational knowledge on circuits, including detailed explanations of RC circuits, their transient analysis, and frequency response. Chapters discussing filters and transient analysis would be particularly relevant (e.g., Chapter 5 on Transient Analysis, Chapter 6 on Frequency Response of Amplifiers and Filters).
*   **Electronic Circuits Analysis and Design 1 by D. Meganathan (Yes Dee Publishing, 2023, 1st edition):** This reference will offer a modern perspective and potentially different examples and design approaches for RC circuits. Its chapters on basic circuit analysis and filters will be directly applicable.

---

### **8. Alignment with Course Outcomes**

*   **CO1: Design and demonstrate the functioning of basic analog circuits using discrete components.**
    *   This module directly addresses CO1 by requiring students to design (select R and C based on $\tau$) and build (breadboard) RC integrating and differentiating circuits. The experiments involve demonstrating their functioning by observing outputs with different inputs.
*   **CO2: Design and simulate the functioning of basic analog circuits using simulation tools.**
    *   This module supports CO2 by emphasizing the use of simulation tools to predict and analyze the behavior of these circuits before hardware implementation. Students learn to set up simulations for transient and AC analysis.
*   **CO3: Conduct troubleshooting of a given circuit and to analyze it.**
    *   The limitations and practical considerations discussed, along with the troubleshooting section, directly aid in developing the skills required for CO3. Students will learn to identify why a circuit might not be behaving as expected and how to analyze the causes.

---