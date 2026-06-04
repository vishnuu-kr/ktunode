---
title: "Active Filters (High Pass and Low pass-one each)"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 15: Active Filters (High Pass and Low pass"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d63"
status: "completed"
scrapedAt: "2026-05-23T16:11:12.485Z"
---
# ANALOG ELECTRONICS LAB: Module 15 - Active Filters (High Pass and Low Pass)

## Topic: Active Filters (High Pass and Low Pass - One Each)

### 1. Introduction to Filters

Filters are circuits that allow signals within a certain frequency range to pass through while attenuating (blocking) signals outside that range.

*   **Passive Filters:** Use only passive components like resistors (R), capacitors (C), and inductors (L). They can attenuate signals but cannot amplify them.
*   **Active Filters:** Utilize active components (like operational amplifiers - op-amps) in addition to passive components. This allows for amplification and provides more flexibility in filter design, such as sharper roll-offs and easier cascading.

**Relevance to Course Outcomes:** This topic directly contributes to **CO4** (Design and implement basic circuits using IC (OPAMP and 555 timers)) as it involves designing circuits using op-amps. **CO5** (Simulate electronic circuits using any circuit simulation software) is also directly applicable as simulating active filters is a common lab exercise.

**Textbook References:**
*   **Paynter (Introductory Electronic Devices and Circuits):** Likely covers basic filter concepts and the role of capacitors and inductors in frequency response.
*   **Boylestad & Nashelsky (Electronic Devices and Circuit Theory):** Provides a solid foundation in circuit analysis, which is crucial for understanding filter behavior. Chapters on AC analysis and frequency response would be relevant.
*   **Neaman (Electronic Circuits: Analysis and Design):** Offers in-depth analysis of active circuits, including active filters, with detailed mathematical derivations and design methodologies.

### 2. Active Low-Pass Filter (LPF)

An active low-pass filter allows frequencies below a certain cutoff frequency ($f_c$) to pass through with minimal attenuation and attenuates frequencies above $f_c$.

#### 2.1. Basic First-Order Active LPF

A simple first-order active LPF can be implemented using an op-amp in a non-inverting configuration with a single RC network.

**Circuit Diagram:**

```
      Vin ----- R -----+----- Vout
                     |
                     C
                     |
                    GND
```

*The op-amp is typically configured as a voltage follower (gain of 1) or a non-inverting amplifier to buffer the output and provide gain.*

**Circuit with Op-Amp (Non-inverting Configuration):**

```
      Vin ----- R -----+----- (+) Op-Amp ----- Vout
                     |                          |
                     C                          (Feedback)
                     |                          |
                    GND ----------------------- (-) Op-Amp
```
*For a voltage follower, the output is directly fed back to the inverting input.*

**Key Concepts:**

*   **Cutoff Frequency ($f_c$):** The frequency at which the output voltage is reduced by 3 dB (or the power is halved). For an RC filter, $f_c = \frac{1}{2\pi RC}$.
*   **Gain:** In an ideal op-amp, the gain in the passband (frequencies below $f_c$) is determined by the op-amp configuration. For a voltage follower, the passband gain is 1 (0 dB). For a non-inverting amplifier with gain $A_v = 1 + \frac{R_f}{R_i}$, the passband gain is $A_v$.
*   **Roll-off:** The rate at which the filter attenuates frequencies above the cutoff frequency. For a first-order filter, the roll-off is -20 dB/decade or -6 dB/octave.
*   **Operational Amplifier (Op-Amp):** A high-gain differential amplifier that is the core active component. Its high input impedance prevents loading of the RC network, and its low output impedance allows it to drive subsequent stages or loads.

**Mathematical Analysis (for a voltage follower configuration):**

The transfer function $H(j\omega)$ is given by:
$H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)}$

For the RC network, the impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$.
The voltage at the junction of R and C is:
$V_{junction} = V_{in} \frac{Z_C}{R + Z_C} = V_{in} \frac{\frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = V_{in} \frac{1}{1 + j\omega RC}$

In a voltage follower configuration, $V_{out} = V_{junction}$.
Therefore, the transfer function is:
$H(j\omega) = \frac{1}{1 + j\omega RC}$

The cutoff frequency $\omega_c = \frac{1}{RC}$. At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}}$.
This corresponds to a voltage gain of $\frac{V_{out}}{V_{in}} = \frac{1}{\sqrt{2}} \approx 0.707$, which is -3 dB.

**Design Example:**

Design an active low-pass filter with a cutoff frequency of 1 kHz.

*   Let's choose $C = 0.1 \mu F$.
*   We need to find $R$ such that $f_c = \frac{1}{2\pi RC} = 1 \text{ kHz}$.
*   $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} = \frac{1}{2\pi \times 10^{-4}} \approx 1591.5 \Omega$.
*   A standard resistor value close to this is $1.6 k\Omega$.

**Experiment Steps (General):**

1.  **Component Selection:** Choose values for R and C to achieve the desired cutoff frequency. Select an op-amp (e.g., LM741, TL072).
2.  **Circuit Assembly:** Build the circuit on a breadboard according to the chosen configuration. Ensure proper power supply connections to the op-amp.
3.  **Input Signal:** Apply a sine wave input signal from a function generator.
4.  **Frequency Sweep:** Vary the input frequency and measure the output voltage using an oscilloscope or spectrum analyzer.
5.  **Data Collection:** Record input voltage, output voltage, and frequency.
6.  **Analysis:**
    *   Determine the passband gain.
    *   Identify the cutoff frequency by observing where the output voltage drops to approximately 70.7% of the passband voltage.
    *   Plot the frequency response (gain vs. frequency) on a log-log scale (Bode plot).

**Important Points to Remember:**

*   The op-amp's input impedance is very high, preventing it from loading the RC network, which is crucial for the filter to perform as designed.
*   The op-amp's low output impedance allows it to drive loads without significant signal loss.
*   For higher-order filters, multiple RC networks and op-amps are cascaded.

#### 2.2. Second-Order Active LPF (Sallen-Key Topology)

A second-order filter provides a steeper roll-off of -40 dB/decade. The Sallen-Key topology is a common and simple way to implement it using an op-amp.

**Circuit Diagram (Sallen-Key LPF):**

```
      Vin ----- R1 -----+----- R2 -----+----- (+) Op-Amp ----- Vout
                     |              |                          |
                     C1             C2                         (Feedback)
                     |              |                          |
                    GND            GND ----------------------- (-) Op-Amp
```
*In this version, R1=R2=R, and C1=C2=C for a unity-gain Butterworth filter.*

**Key Concepts:**

*   **Order of the Filter:** Determines the steepness of the roll-off. A second-order filter has a roll-off of -40 dB/decade.
*   **Quality Factor (Q):** Affects the shape of the frequency response near the cutoff frequency. Higher Q values lead to a peak in the response before the cutoff.
*   **Damping Factor ($\zeta$):** Related to Q, it determines the filter's response to a step input (e.g., overdamped, critically damped, underdamped).
*   **Butterworth Filter:** Provides a maximally flat passband response. For a Butterworth filter, $\zeta = \frac{1}{\sqrt{2}}$ and Q = $\frac{1}{\sqrt{2}}$.
*   **Chebyshev Filter:** Offers a sharper roll-off than Butterworth but has ripple in the passband.
*   **Bessel Filter:** Provides the best phase response but has a slower roll-off.

**Mathematical Analysis (Simplified for unity-gain Sallen-Key):**

For a unity-gain Sallen-Key LPF with $R_1 = R_2 = R$ and $C_1 = C_2 = C$, the transfer function is:
$H(s) = \frac{1}{s^2 (\frac{1}{\omega_0^2}) + s (\frac{2-A_v}{\omega_0 Q}) + 1}$
where $A_v$ is the op-amp gain, $\omega_0 = \frac{1}{RC}$ is the natural frequency, and $Q = \frac{1}{2}$ for this specific configuration.

For a unity-gain ($A_v=1$) Sallen-Key filter with equal resistors and capacitors, the natural frequency is $\omega_0 = \frac{1}{RC}$. The cutoff frequency is often considered to be $\omega_0$. The damping factor is $\zeta = \frac{1}{2}$. This is a Butterworth characteristic for a second-order filter where the natural frequency is the cutoff frequency.

**Design Example:**

Design a unity-gain second-order active low-pass filter with a cutoff frequency of 1 kHz.

*   Let $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
*   We need $f_c = \frac{1}{2\pi RC} = 1 \text{ kHz}$.
*   Let $C = 0.1 \mu F$.
*   $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} \approx 1.59 k\Omega$.
*   Use $R_1 = R_2 = 1.6 k\Omega$ and $C_1 = C_2 = 0.1 \mu F$.

**Experiment Steps (General):**

1.  **Circuit Assembly:** Build the second-order Sallen-Key LPF circuit.
2.  **Input Signal:** Apply a sine wave input.
3.  **Frequency Sweep:** Vary the input frequency and measure the output voltage.
4.  **Data Analysis:**
    *   Determine the passband gain.
    *   Identify the cutoff frequency.
    *   Observe the shape of the frequency response. If using the standard equal R and C values for Butterworth, there should be no peak.

### 3. Active High-Pass Filter (HPF)

An active high-pass filter allows frequencies above a certain cutoff frequency ($f_c$) to pass through with minimal attenuation and attenuates frequencies below $f_c$.

#### 3.1. Basic First-Order Active HPF

A simple first-order active HPF can be implemented using an op-amp in a non-inverting configuration with a capacitor in series with the input resistor.

**Circuit Diagram:**

```
      Vin ----- C -----+----- R ----- Vout
                     |
                    GND
```

*The op-amp is typically configured as a voltage follower or a non-inverting amplifier.*

**Circuit with Op-Amp (Non-inverting Configuration):**

```
      Vin ----- C -----+----- (+) Op-Amp ----- Vout
                     |                          |
                     R                          (Feedback)
                     |                          |
                    GND ----------------------- (-) Op-Amp
```
*For a voltage follower, the output is directly fed back to the inverting input.*

**Key Concepts:**

*   **Cutoff Frequency ($f_c$):** The frequency at which the output voltage is reduced by 3 dB. For a CR filter, $f_c = \frac{1}{2\pi RC}$.
*   **Gain:** Similar to the LPF, the passband gain is determined by the op-amp configuration.
*   **Roll-off:** For a first-order HPF, the roll-off in the stopband (frequencies below $f_c$) is +20 dB/decade or +6 dB/octave.

**Mathematical Analysis (for a voltage follower configuration):**

The impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$.
The voltage at the junction of C and R is:
$V_{junction} = V_{in} \frac{R}{R + Z_C} = V_{in} \frac{R}{R + \frac{1}{j\omega C}} = V_{in} \frac{j\omega RC}{1 + j\omega RC}$

In a voltage follower configuration, $V_{out} = V_{junction}$.
Therefore, the transfer function is:
$H(j\omega) = \frac{j\omega RC}{1 + j\omega RC}$

The cutoff frequency $\omega_c = \frac{1}{RC}$. At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{|j\omega_c RC|}{|1 + j\omega_c RC|} = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}}$.
This corresponds to a voltage gain of $\frac{V_{out}}{V_{in}} = \frac{1}{\sqrt{2}} \approx 0.707$, which is -3 dB.

**Design Example:**

Design an active high-pass filter with a cutoff frequency of 1 kHz.

*   Let's choose $C = 0.1 \mu F$.
*   We need to find $R$ such that $f_c = \frac{1}{2\pi RC} = 1 \text{ kHz}$.
*   $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} \approx 1591.5 \Omega$.
*   A standard resistor value close to this is $1.6 k\Omega$.

**Experiment Steps (General):**

1.  **Component Selection:** Choose values for R and C. Select an op-amp.
2.  **Circuit Assembly:** Build the HPF circuit on a breadboard.
3.  **Input Signal:** Apply a sine wave input.
4.  **Frequency Sweep:** Vary the input frequency and measure the output voltage.
5.  **Data Collection:** Record input voltage, output voltage, and frequency.
6.  **Analysis:**
    *   Determine the passband gain.
    *   Identify the cutoff frequency.
    *   Plot the frequency response (gain vs. frequency). Observe the roll-off in the stopband.

**Important Points to Remember:**

*   At very low frequencies, the capacitor's impedance is high, blocking the signal.
*   As frequency increases, the capacitor's impedance decreases, allowing the signal to pass.

#### 3.2. Second-Order Active HPF (Sallen-Key Topology)

A second-order HPF also provides a steeper roll-off of -40 dB/decade in the stopband.

**Circuit Diagram (Sallen-Key HPF):**

```
      Vin ----- C1 -----+----- C2 -----+----- (+) Op-Amp ----- Vout
                     |              |                          |
                     R1             R2                         (Feedback)
                     |              |                          |
                    GND            GND ----------------------- (-) Op-Amp
```
*For a unity-gain Butterworth filter, $C_1 = C_2 = C$ and $R_1 = R_2 = R$.*

**Key Concepts:**

*   **Roll-off:** -40 dB/decade in the stopband.
*   **Q Factor and Damping:** Similar to the LPF, these parameters influence the filter's shape.

**Mathematical Analysis (Simplified for unity-gain Sallen-Key HPF):**

For a unity-gain Sallen-Key HPF with $C_1 = C_2 = C$ and $R_1 = R_2 = R$, the natural frequency is $\omega_0 = \frac{1}{RC}$. The cutoff frequency is often considered to be $\omega_0$. The damping factor is $\zeta = \frac{1}{2}$. This configuration provides a Butterworth response.

**Design Example:**

Design a unity-gain second-order active high-pass filter with a cutoff frequency of 1 kHz.

*   Let $C_1 = C_2 = C$ and $R_1 = R_2 = R$.
*   We need $f_c = \frac{1}{2\pi RC} = 1 \text{ kHz}$.
*   Let $C = 0.1 \mu F$.
*   $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} \approx 1.59 k\Omega$.
*   Use $R_1 = R_2 = 1.6 k\Omega$ and $C_1 = C_2 = 0.1 \mu F$.

**Experiment Steps (General):**

1.  **Circuit Assembly:** Build the second-order Sallen-Key HPF circuit.
2.  **Input Signal:** Apply a sine wave input.
3.  **Frequency Sweep:** Vary the input frequency and measure the output voltage.
4.  **Data Analysis:**
    *   Determine the passband gain.
    *   Identify the cutoff frequency.
    *   Observe the shape of the frequency response.

### 4. Practical Considerations and Implementation

*   **Op-Amp Selection:** Choose an op-amp suitable for the desired frequency range and signal levels. For higher frequencies, consider op-amps with higher slew rates and wider bandwidth. Examples: TL07x, NE5532, OP07.
*   **Component Tolerances:** Real resistors and capacitors have tolerances (e.g., 5% or 10%). This can cause the actual cutoff frequency to deviate from the calculated value.
*   **Power Supply:** Ensure the op-amp is powered with appropriate positive and negative DC voltages.
*   **Grounding:** Proper grounding is essential to avoid noise and oscillations.
*   **Loading Effects:** While active filters minimize loading, the load connected to the output can still affect performance, especially if the load impedance is low.
*   **Higher-Order Filters:** For steeper roll-offs (e.g., 4th order, 6th order), multiple filter stages are cascaded. Each stage contributes to the overall filtering characteristic.

### 5. Practice Questions and Answers

**Question 1:**
Design a first-order active low-pass filter using a voltage follower configuration with a cutoff frequency of 500 Hz. Assume you have a $0.22 \mu F$ capacitor available.
**(CO4, CO5)**

**Answer 1:**
*   We need to find the resistor R.
*   Cutoff frequency $f_c = \frac{1}{2\pi RC}$.
*   $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 500 \times 0.22 \times 10^{-6}} = \frac{1}{2\pi \times 1.1 \times 10^{-4}} \approx 1444 \Omega$.
*   A standard resistor value close to this is $1.5 k\Omega$.
*   **Design:** Use a $1.5 k\Omega$ resistor and a $0.22 \mu F$ capacitor in series with the input to the non-inverting terminal of an op-amp configured as a voltage follower.

**Question 2:**
What is the approximate roll-off rate of a first-order active filter?
**(K1 level, related to understanding filter characteristics)**

**Answer 2:**
The roll-off rate of a first-order active filter is **-20 dB per decade** (or -6 dB per octave) in the stopband.

**Question 3:**
You are designing a second-order Sallen-Key active low-pass filter for a cutoff frequency of 2 kHz. If you choose $R_1 = R_2 = 10 k\Omega$, what value of capacitor should you use for $C_1$ and $C_2$ to achieve a Butterworth response?
**(CO4, CO5)**

**Answer 3:**
*   For a unity-gain Sallen-Key filter, $f_c = \frac{1}{2\pi RC}$.
*   We have $f_c = 2 \text{ kHz}$ and $R = 10 k\Omega$.
*   $C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi \times 2000 \times 10 \times 10^3} = \frac{1}{4\pi \times 10^7} \approx 7.96 \times 10^{-9} F$.
*   So, $C_1 = C_2 \approx 8.2 nF$ (using a standard capacitor value close to the calculated value).

**Question 4:**
Explain the advantage of using an active filter over a passive filter.
**(K1 level, related to understanding filter concepts)**

**Answer 4:**
The main advantages of active filters over passive filters are:
1.  **Gain:** Active filters can provide amplification (gain) in the passband, whereas passive filters can only attenuate signals.
2.  **Buffering:** The op-amp's high input impedance prevents it from loading the preceding stage, and its low output impedance prevents it from being loaded by the subsequent stage, allowing for better isolation and cascading.
3.  **No Inductors:** Active filters can achieve sharp roll-offs without using bulky and expensive inductors, especially at lower frequencies.
4.  **Design Flexibility:** Active filters offer more flexibility in tuning the filter characteristics (e.g., Q factor, cutoff frequency) independently.

**Question 5:**
What happens to the output signal of a first-order active high-pass filter at very low frequencies (approaching 0 Hz)?
**(K1 level, related to understanding filter behavior)**

**Answer 5:**
At very low frequencies, the impedance of the capacitor in a high-pass filter is very high. This high impedance acts as an open circuit, blocking the input signal from passing through to the output. Therefore, the output signal amplitude becomes very small, approaching zero.

### 6. Summary of Key Concepts

*   **Filters:** Circuits that pass specific frequency ranges and block others.
*   **Active Filters:** Utilize op-amps for gain and isolation.
*   **Low-Pass Filter (LPF):** Passes low frequencies, attenuates high frequencies.
*   **High-Pass Filter (HPF):** Passes high frequencies, attenuates low frequencies.
*   **Cutoff Frequency ($f_c$):** The -3 dB point in the frequency response.
*   **First-Order Filters:** Have a roll-off of -20 dB/decade.
*   **Second-Order Filters:** Have a roll-off of -40 dB/decade.
*   **Sallen-Key Topology:** A common circuit for implementing second-order active filters.
*   **Butterworth Response:** Maximally flat passband.
*   **Op-Amp Advantages:** Gain, buffering, no inductors.

This module provides hands-on experience in designing and testing fundamental active filter circuits, directly contributing to your ability to work with analog signal processing using op-amps.
