---
title: "Active Filters  – Butterworth, Chebyshev and Bessel Filters, Low pass filter – high pass filter -band pass and notch filters- Butterworth"
subject: "ANALOG ELECTRONICS"
module: "Module 4: Active Filters  – Butterworth, Chebyshev and Bessel Filters, Low pass filter – high pass filter "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b69"
status: "completed"
scrapedAt: "2026-05-23T16:10:59.095Z"
---
# ANALOG ELECTRONICS - Module 4: Active Filters

## Topic: Active Filters – Butterworth, Chebyshev and Bessel Filters, Low Pass Filter – High Pass Filter, Band Pass and Notch Filters

### Course Outcomes Addressed:
*   **CO4: Implementation of active filters (Knowledge Level: K4)** - This module directly deals with the design and implementation of various active filter types.
*   **CO3: Design and develop various OPAMP application circuits. (Knowledge Level: K3)** - Active filters are a core application of operational amplifiers (Op-Amps).

### Learning Outcomes:
Upon successful completion of this module, students will be able to:
*   Understand the fundamental principles of active filters.
*   Differentiate between Butterworth, Chebyshev, and Bessel filter characteristics.
*   Design and analyze basic active low-pass and high-pass filters.
*   Design and analyze active band-pass and notch filters.
*   Apply knowledge of active filters to practical circuit design.

---

## 1. Introduction to Active Filters

### 1.1 What are Filters?

*   **Definition:** Filters are electronic circuits that allow signals within a certain frequency range to pass through while attenuating (blocking) signals outside that range.
*   **Purpose:** They are used to remove unwanted frequencies, shape the frequency response of signals, and isolate specific frequency bands.

### 1.2 Passive vs. Active Filters

| Feature        | Passive Filters                                  | Active Filters                                      |
| :------------- | :----------------------------------------------- | :-------------------------------------------------- |
| **Components** | Resistors (R), Capacitors (C), Inductors (L)     | Resistors (R), Capacitors (C), Active elements (Op-Amps, Transistors) |
| **Gain**       | Always less than 1 (attenuation only)            | Can provide gain > 1                                |
| **Loading**    | Output impedance can be high, affecting subsequent stages | Op-Amps provide low output impedance, buffering from loading |
| **Inductors**  | Often require inductors, which are bulky, expensive, and non-ideal at low frequencies | Can synthesize inductive behavior using Op-Amps, avoiding inductors |
| **Frequency Range** | Generally better for very high frequencies      | Excellent for audio and lower radio frequencies; can be designed for higher frequencies with appropriate active components |
| **Power Supply** | No external power supply required                | Requires an external DC power supply                |

**Important Point:** Active filters offer advantages like gain, buffering, and the elimination of bulky inductors, making them popular for many applications, especially in audio and instrumentation. (Refer to Paynter, Chapter 9: Filters, and Boylestad, Chapter 12: Basic Filter Concepts).

### 1.3 Key Filter Parameters

*   **Passband:** The range of frequencies that are allowed to pass through the filter with minimal attenuation.
*   **Stopband:** The range of frequencies that are attenuated by the filter.
*   **Cutoff Frequency ($f_c$):** The frequency at which the filter's output power is reduced by half (or the voltage gain is reduced to $1/\sqrt{2}$ of its passband value, which corresponds to -3 dB).
*   **Roll-off:** The rate at which the filter's attenuation increases beyond the cutoff frequency, typically expressed in dB per decade or dB per octave.
*   **Bandwidth (BW):** For band-pass filters, the range of frequencies between the two cutoff frequencies. BW = $f_{H} - f_{L}$.
*   **Center Frequency ($f_0$):** For band-pass and notch filters, the frequency at the peak of the passband or the frequency of maximum attenuation, respectively.
*   **Quality Factor (Q):** A measure of the selectivity of a resonant circuit (band-pass/notch filters). $Q = f_0 / BW$. A higher Q means a narrower bandwidth and sharper resonance.

---

## 2. Types of Filters (Frequency Response)

Filters are classified based on the frequency ranges they pass:

### 2.1 Low-Pass Filter (LPF)

*   **Function:** Passes low frequencies and attenuates high frequencies.
*   **Frequency Response:** Passband from DC up to the cutoff frequency ($f_c$). Attenuation increases for frequencies above $f_c$.
*   **Applications:** Removing high-frequency noise, audio crossovers, smoothing DC power supplies.

### 2.2 High-Pass Filter (HPF)

*   **Function:** Passes high frequencies and attenuates low frequencies.
*   **Frequency Response:** Passband from the cutoff frequency ($f_c$) up to infinity. Attenuation occurs for frequencies below $f_c$.
*   **Applications:** Removing DC offset, audio crossovers, blocking low-frequency hum.

### 2.3 Band-Pass Filter (BPF)

*   **Function:** Passes frequencies within a specific band and attenuates frequencies outside that band.
*   **Frequency Response:** Passband between two cutoff frequencies ($f_L$ and $f_H$). Attenuation occurs below $f_L$ and above $f_H$.
*   **Applications:** Tuning into specific radio stations, audio equalizers, signal demodulation.

### 2.4 Band-Reject (Notch) Filter

*   **Function:** Attenuates frequencies within a specific band and passes frequencies outside that band.
*   **Frequency Response:** Stopband between two cutoff frequencies ($f_L$ and $f_H$). Passband occurs below $f_L$ and above $f_H$.
*   **Applications:** Removing specific interfering frequencies (e.g., 60 Hz hum from power lines), noise cancellation.

---

## 3. Active Filter Design using Op-Amps

Active filters utilize the gain and low output impedance of Op-Amps to implement the desired frequency response. They can achieve higher Q factors and gain compared to passive filters without inductors.

### 3.1 First-Order Filters (Roll-off of -20 dB/decade or -6 dB/octave)

#### 3.1.1 Active Low-Pass Filter (LPF)

*   **Circuit:** A basic active LPF can be formed by a non-inverting amplifier with an RC network. The capacitor is placed in the feedback path or in series with the input resistor. A simpler implementation uses an RC network followed by a voltage follower or non-inverting amplifier.

    **Circuit Diagram (Voltage Follower with RC LPF):**
    ```
       Vin ---- R ---- C ----+---- Vout
                            |
                           GND
                            |
                           Op-Amp (+) input
                           Op-Amp (-) input ---+---- Vout (Feedback)
    ```

*   **Cutoff Frequency:** $f_c = \frac{1}{2\pi RC}$
*   **Gain:** The gain in the passband is determined by the amplifier configuration. For a voltage follower, the gain is 1 (0 dB). For a non-inverting amplifier with gain $A_v = 1 + \frac{R_f}{R_i}$, the passband gain is $A_v$.
*   **Transfer Function (Voltage Follower Configuration):** $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{1 + sRC}$
*   **Roll-off:** -20 dB/decade.

#### 3.1.2 Active High-Pass Filter (HPF)

*   **Circuit:** Similar to the LPF, but the capacitor and resistor are interchanged or placed differently.

    **Circuit Diagram (Voltage Follower with RC HPF):**
    ```
       Vin ---- C ---- R ----+---- Vout
                            |
                           GND
                            |
                           Op-Amp (+) input
                           Op-Amp (-) input ---+---- Vout (Feedback)
    ```

*   **Cutoff Frequency:** $f_c = \frac{1}{2\pi RC}$
*   **Gain:** Passband gain is determined by the amplifier configuration (e.g., 1 for voltage follower).
*   **Transfer Function (Voltage Follower Configuration):** $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{sRC}{1 + sRC}$
*   **Roll-off:** -20 dB/decade (in the stopband).

**Example:** Design an active LPF with a cutoff frequency of 1 kHz using a voltage follower configuration.
*   Choose a capacitor, say $C = 0.1 \mu F$.
*   Calculate the required resistor: $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi (1000 Hz)(0.1 \times 10^{-6} F)} \approx 1.59 k\Omega$.

---

## 4. Second-Order Filters and Filter Topologies

Second-order filters provide a steeper roll-off (-40 dB/decade for LPF/HPF) and allow for more control over the filter characteristics.

### 4.1 Filter Design Approaches (for Butterworth, Chebyshev, Bessel)

These filter types are characterized by their **passband ripple** and **stopband attenuation**.

*   **Butterworth Filter:**
    *   **Characteristic:** Maximally flat passband response. No ripple in the passband.
    *   **Roll-off:** -20n dB/decade for an nth-order filter.
    *   **Transition Band:** Gradual transition from passband to stopband.
    *   **Q Factor:** Moderate.
    *   **Best for:** Applications where a flat passband is crucial.

*   **Chebyshev Filter:**
    *   **Characteristic:** Steeper roll-off than Butterworth for the same order.
    *   **Passband Ripple:** Has ripple in the passband. Type I has ripple in the passband and a monotonic stopband. Type II has a flat passband and ripple in the stopband. We usually refer to Type I.
    *   **Roll-off:** Steeper than Butterworth for the same order.
    *   **Transition Band:** Narrower transition band than Butterworth.
    *   **Q Factor:** Higher Q values generally, leading to potential ringing.
    *   **Best for:** Applications where sharp cutoff is more important than passband flatness.

*   **Bessel Filter:**
    *   **Characteristic:** Maximally flat group delay response. Excellent phase linearity.
    *   **Passband Ripple:** No ripple.
    *   **Roll-off:** Slowest roll-off among the three for the same order.
    *   **Transition Band:** Widest transition band.
    *   **Q Factor:** Lower Q values.
    *   **Best for:** Applications where preserving the shape of the waveform (no phase distortion) is critical, such as pulse or square wave transmission.

**Important Point:** The choice of filter type depends on the specific application requirements regarding passband flatness, transition steepness, and phase response. (Refer to Neaman, Chapter 7: Frequency Response and Bode Plots, and Floyd, Chapter 11: Filter Circuits).

### 4.2 Sallen-Key Topology

The Sallen-Key topology is a popular and simple method for implementing second-order active filters (LPF, HPF, BPF) using a single Op-Amp. It allows for gain and can achieve different filter characteristics by varying component values.

#### 4.2.1 Sallen-Key Low-Pass Filter (LPF)

*   **Circuit:** Consists of two resistors, two capacitors, and an Op-Amp configured as a non-inverting amplifier.

    **Circuit Diagram:**
    ```
           R1      R2
    Vin --/\/\/--+--/\/\/--+---------+-----------> Vout
                 |        |         |
                 C1       C2      Op-Amp (+) input
                 |        |         |
                GND      GND      Op-Amp (-) input ---+
                                                      |
                                                      +---- Vout (Feedback)
    ```
    *Note: The Op-Amp's negative feedback resistor $R_f$ and input resistor $R_i$ are typically set to create a specific gain $A_v = 1 + R_f/R_i$. For unity gain, $R_f=0$ (direct connection) or $R_i=\infty$ (open circuit).*

*   **Transfer Function (for $R1=R2=R$, $C1=C2=C$, unity gain Op-Amp):**
    $H(s) = \frac{1}{s^2(RC)^2 + 3sRC + 1}$
    This specific configuration is a **second-order Butterworth LPF**.

*   **General Design Considerations:**
    *   The ratio of resistors ($R_2/R_1$) and capacitors ($C_2/C_1$) along with the Op-Amp gain ($A_v$) determine the filter's cutoff frequency ($f_c$) and damping factor (which defines the filter type - Butterworth, Chebyshev, Bessel).
    *   **Cutoff Frequency ($f_c$):** Approximately $\frac{1}{2\pi\sqrt{R_1R_2C_1C_2}}$
    *   **Q Factor:** Depends on the component ratios and gain.
        *   For unity gain ($A_v=1$), the standard configuration with equal R and C values gives a Butterworth response.
        *   To achieve other filter types or specific Q values, component ratios need to be adjusted or a gain other than unity can be used.

**Example of Sallen-Key LPF Design:**
Design a second-order Butterworth LPF with a cutoff frequency of 1 kHz.
*   **Unity Gain:** Use a unity-gain buffer (Op-Amp voltage follower).
*   **Equal Resistors and Capacitors:** Set $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
*   **Cutoff Frequency Formula:** $f_c = \frac{1}{2\pi RC}$
*   Choose $C = 0.1 \mu F$.
*   Calculate $R$: $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi (1000 Hz)(0.1 \times 10^{-6} F)} \approx 1.59 k\Omega$.
*   So, use $R_1=R_2=1.59 k\Omega$ and $C_1=C_2=0.1 \mu F$ with a unity-gain Op-Amp.

#### 4.2.2 Sallen-Key High-Pass Filter (HPF)

*   **Circuit:** Similar to the LPF, but capacitors and resistors are interchanged.

    **Circuit Diagram:**
    ```
           C1      C2
    Vin --/ \-----+--/ \-----+---------+-----------> Vout
                 |        |         |
                 R1       R2      Op-Amp (+) input
                 |        |         |
                GND      GND      Op-Amp (-) input ---+
                                                      |
                                                      +---- Vout (Feedback)
    ```

*   **Transfer Function (for $R1=R2=R$, $C1=C2=C$, unity gain Op-Amp):**
    $H(s) = \frac{s^2(RC)^2}{s^2(RC)^2 + 3sRC + 1}$
    This configuration is a **second-order Butterworth HPF**.

*   **Cutoff Frequency:** Approximately $\frac{1}{2\pi\sqrt{R_1R_2C_1C_2}}$

---

## 5. Higher-Order Filters and Filter Characteristics

Higher-order filters (3rd order and above) are typically realized by cascading simpler filter sections (e.g., cascading a first-order filter with a second-order Sallen-Key filter for a third-order response). The specific component values for Butterworth, Chebyshev, and Bessel responses are usually found in filter design tables or calculated using specialized software.

**Key Filter Design Considerations:**

*   **Normalization:** Filter component values are often normalized to a cutoff frequency of 1 rad/s and a resistance of 1 ohm. These normalized values are then scaled for the desired frequency and impedance.
*   **Denormalization:**
    *   For LPF: $R_{norm} \rightarrow R_{norm} \times \frac{R_{desired}}{R_{norm}}$, $C_{norm} \rightarrow C_{norm} \times \frac{1}{\omega_c R_{desired}}$ where $\omega_c = 2\pi f_c$.
    *   For HPF: $C_{norm} \rightarrow C_{norm} \times \frac{1}{R_{desired}\omega_c}$, $R_{norm} \rightarrow R_{norm} \times R_{desired}$.
*   **Filter Tables:** Provide pre-calculated component values for standard filter types (Butterworth, Chebyshev, Bessel) for various orders and cutoff frequencies. These tables are invaluable for practical design. (Refer to Neaman and Floyd for examples of such tables).

---

## 6. Active Band-Pass Filters (BPF)

*   **Function:** Passes frequencies within a specific band.
*   **Implementation:** Can be realized by cascading an active LPF and an active HPF, where the cutoff frequency of the LPF is higher than the cutoff frequency of the HPF. The bandwidth is determined by the difference between these two cutoff frequencies.
*   **Alternative Implementations:**
    *   **Multiple Feedback (MFB) Band-Pass Filter:** Uses a single Op-Amp and provides a band-pass response. It allows for independent control of the center frequency, Q factor, and gain.

        **Circuit Diagram (MFB BPF):**
        ```
               R1
        Vin --/\/\/--+-----------------+------------> Vout
                    |                 |
                    C1              Op-Amp (+) input
                    |                 |
                   GND             Op-Amp (-) input --+-- R2 --+
                                                         |       |
                                                         C2     R3
                                                         |       |
                                                        GND     GND
        ```
        *Note: R2 and C2 form a feedback path, and R3 is the feedback resistor.*

    *   **State-Variable Filter:** A more complex but highly versatile active filter that can simultaneously provide LPF, HPF, and BPF outputs. It uses multiple Op-Amps.

*   **Key Parameters for BPF:**
    *   **Center Frequency ($f_0$):** The frequency at the peak of the passband.
    *   **Bandwidth (BW):** The difference between the upper and lower cutoff frequencies ($f_H - f_L$).
    *   **Quality Factor (Q):** $Q = f_0 / BW$. High Q means a narrow bandwidth and sharp peak.

**Design Example (Conceptual):** To design a BPF with a center frequency of 1 kHz and a bandwidth of 200 Hz, you would need a Q factor of $1000 / 200 = 5$. This would require a specific component selection for an MFB or other BPF circuit topology.

---

## 7. Active Notch Filters (Band-Reject Filters)

*   **Function:** Attenuates frequencies within a specific band while passing frequencies outside that band.
*   **Implementation:** Can be realized by summing the outputs of an active LPF and an active HPF, where the cutoff frequencies are the same. This creates a band-pass response when summed. To create a notch filter, the phase relationship is critical.
*   **Common Topology: Twin-T Notch Filter (Active Version)**
    *   A passive Twin-T notch filter uses resistors and capacitors in a specific configuration. When combined with an Op-Amp configured as a voltage follower (or with gain), it can create an effective active notch filter.

    **Circuit Diagram (Active Twin-T Notch Filter):**
    ```
       Vin --+-- R ----+---- R ----+---- C ----+---- Vout
             |       |          |          |
             C       R          C          Op-Amp (+) input
             |       |          |          |
            GND     GND        GND       Op-Amp (-) input ---+---- Vout (Feedback)
    ```
    *The Twin-T network consists of two T-networks: one with two resistors and one capacitor, and the other with two capacitors and one resistor.*

*   **Notch Frequency ($f_n$):** The frequency at which maximum attenuation occurs. For the standard Twin-T network with $R_1=R_2=R$, $C_1=C_2=C$ and $R_3=R/2$, $C_3=2C$:
    $f_n = \frac{1}{2\pi RC}$ (with the correct component ratios, it's typically $f_n = \frac{1}{2\pi R C}$)
*   **Quality Factor (Q):** The Q of a passive Twin-T is very low (around 0.25). Using an Op-Amp with feedback can increase the Q and improve the notch sharpness.

**Example:** To remove 60 Hz power line hum, you would design a notch filter with its notch frequency set to 60 Hz.

---

## 8. Practical Considerations and Op-Amp Selection

*   **Op-Amp Bandwidth (Gain-Bandwidth Product - GBWP):** The Op-Amp's GBWP must be significantly higher than the filter's cutoff frequency, especially for higher-order filters or filters with gain. A rule of thumb is GBWP > $100 \times f_c \times Gain$.
*   **Slew Rate:** Affects the Op-Amp's ability to reproduce large amplitude, high-frequency signals without distortion.
*   **Input Offset Voltage and Bias Current:** Can introduce DC errors, especially in first-order filters with high resistor values.
*   **Component Tolerances:** Resistors and capacitors have tolerances, which can affect the actual filter performance (cutoff frequency, Q factor). Using tighter tolerance components or providing for component adjustment can improve accuracy.
*   **Cascading Stages:** When cascading filter stages to achieve higher orders, ensure the loading effects are minimized. Op-Amps inherently provide buffering, which is a key advantage.

**Referencing Textbooks:**
*   **Paynter:** Provides a good introduction to filter concepts and basic active filter circuits, often using simpler topologies.
*   **Boylestad:** Offers a thorough treatment of filter theory, including mathematical derivations of transfer functions and design procedures for various filter types.
*   **Neaman:** Covers frequency response analysis in detail and provides comprehensive examples of filter design, including tables for Butterworth, Chebyshev, and Bessel responses.
*   **Floyd:** Presents practical aspects of electronic circuits and provides straightforward explanations of filter types and their applications.
*   **Gayakward & Choudhury:** Focus on Op-Amp applications and circuits, offering in-depth analysis of various active filter topologies like Sallen-Key and MFB.

---

## Practice Questions and Exercises

**Q1. (Multiple Choice)** Which of the following filter types has a maximally flat passband response?
    a) Chebyshev
    b) Bessel
    c) Butterworth
    d) All of the above

**Q2. (Short Answer)** What is the primary advantage of active filters over passive filters in many applications?

**Q3. (Design)** Design a first-order active low-pass filter using a voltage follower configuration with a cutoff frequency of 5 kHz. Select a capacitor value of $0.01 \mu F$ and calculate the required resistor value.

**Q4. (Design)** A second-order active high-pass filter using the Sallen-Key topology with unity gain is required to have a cutoff frequency of 2 kHz. If you choose $R_1 = R_2 = 10 k\Omega$, what capacitor values ($C_1 = C_2$) should you use?

**Q5. (Conceptual)** Explain the trade-offs between Butterworth, Chebyshev, and Bessel filters in terms of passband ripple and transition steepness.

**Q6. (Application)** You are designing an audio system and need to remove a 50 Hz hum from a signal. Which type of active filter would be most suitable, and what specific frequency would you target for its critical parameter?

---

## Answers to Practice Questions

**A1.** c) Butterworth

**A2.** The primary advantage of active filters is their ability to provide **gain** (amplification) and **buffering** (low output impedance), which prevents loading effects on subsequent stages. They also avoid the need for bulky and expensive inductors at lower frequencies.

**A3.** For a first-order active LPF with cutoff frequency $f_c = 5 kHz$ and $C = 0.01 \mu F$:
$f_c = \frac{1}{2\pi RC}$
$R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi (5 \times 10^3 Hz)(0.01 \times 10^{-6} F)}$
$R \approx \frac{1}{3.14159 \times 50000 \times 0.01 \times 10^{-6}} \approx \frac{1}{0.000314159} \approx 3183 \Omega$
A standard resistor value close to this is $3.3 k\Omega$.

**A4.** For a Sallen-Key HPF with unity gain and equal resistors ($R_1 = R_2 = 10 k\Omega$), the cutoff frequency is $f_c = \frac{1}{2\pi RC}$.
$R = 10 k\Omega = 10^4 \Omega$
$f_c = 2 kHz = 2 \times 10^3 Hz$
$C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (2 \times 10^3 Hz)(10 \times 10^3 \Omega)}$
$C \approx \frac{1}{125663.7} \approx 7.95 \times 10^{-9} F = 7.95 nF$
Standard capacitor values close to this are $8.2 nF$.

**A5.**
*   **Butterworth:** Maximally flat passband (no ripple), but has a more gradual transition from passband to stopband.
*   **Chebyshev:** Steeper transition (sharper cutoff) than Butterworth for the same order, but introduces ripple in the passband.
*   **Bessel:** Offers the best phase linearity (constant group delay), preserving waveform shape, but has the slowest transition from passband to stopband.

**A6.** To remove a 50 Hz hum, a **notch filter** would be most suitable. The notch frequency of the filter should be set to **50 Hz** to maximally attenuate this specific interfering frequency.

---

## Important Points to Remember

*   **Active filters offer gain and avoid inductors.**
*   **Butterworth = Flat passband; Chebyshev = Steep cutoff (with ripple); Bessel = Good phase response.**
*   **First-order filters have a -20 dB/decade roll-off.**
*   **Second-order filters (e.g., Sallen-Key) have a -40 dB/decade roll-off.**
*   **The cutoff frequency ($f_c$) is where the gain is -3 dB.**
*   **The Q factor indicates the selectivity of band-pass/notch filters.**
*   **Cascading filter stages is a common method to achieve higher orders.**
*   **Op-Amp selection (GBWP, slew rate) is crucial for proper filter performance.**
