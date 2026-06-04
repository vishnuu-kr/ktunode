---
title: "Active filters:  Comparison with passive filters, First and Second order Low pass, High pass, Band pass and Band Reject active filters, State Variable filters."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 3: Oscillators and Multivibrators:  Phase Shift and Wien"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe574"
status: "completed"
scrapedAt: "2026-05-23T17:49:47.988Z"
---
# LINEAR INTEGRATED CIRCUITS - Module 3: Oscillators and Multivibrators (Focus: Active Filters)

## Topic: Active Filters

This module focuses on active filters, their advantages over passive filters, and the design and characteristics of various types of active filters, including first and second-order low-pass, high-pass, band-pass, and band-reject filters, as well as state-variable filters.

---

### 1. Active Filters: Comparison with Passive Filters

**Definition:**
*   **Passive Filters:** Circuits that use only passive components like resistors (R), capacitors (C), and inductors (L) to shape the frequency response of a signal. They do not require an external power source.
*   **Active Filters:** Circuits that use active components such as operational amplifiers (op-amps) or transistors in addition to passive components (R and C). They require an external power source to operate.

**Comparison Table:**

| Feature             | Passive Filters                                   | Active Filters                                                                 |
| :------------------ | :------------------------------------------------ | :----------------------------------------------------------------------------- |
| **Components**      | Resistors (R), Capacitors (C), Inductors (L)      | Op-amps (or transistors), Resistors (R), Capacitors (C)                        |
| **Power Supply**    | Not required                                      | Required                                                                       |
| **Gain**            | Always ≤ 1 (attenuation only)                     | Can provide gain > 1 (amplification)                                         |
| **Loading Effect**  | Output impedance can be high, affecting subsequent stages. | High input impedance and low output impedance of op-amps minimize loading effects. |
| **Inductor Usage**  | Often require bulky, expensive, and non-ideal inductors. | Inductors can be simulated using R and C components with op-amps, avoiding physical inductors. |
| **Frequency Range** | More suitable for high frequencies where inductor behavior is predictable. | Well-suited for audio and lower frequencies where inductors are problematic. |
| **Size & Weight**   | Can be bulky and heavy due to inductors.         | Generally smaller and lighter, especially at lower frequencies.                |
| **Cost**            | Inductors can be expensive.                       | Cost can be higher due to active components, but can be lower than passive filters with inductors. |
| **Flexibility**     | Limited flexibility in tuning and cascading.     | High flexibility in tuning and cascading to achieve complex filter responses. |
| **Noise**           | Generally lower intrinsic noise.                  | Active components can introduce noise.                                         |

**Key Takeaway:** Active filters offer advantages in terms of gain, isolation, reduced loading, and avoidance of inductors, making them popular for signal processing applications, particularly at lower frequencies.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16: Filters (general discussion on active filters).
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12: Active Filters.

---

### 2. First-Order Active Filters

First-order filters have a single reactive component (capacitor or inductor) and provide a rolloff of 20 dB per decade (or 6 dB per octave) in the stopband.

#### 2.1. First-Order Low-Pass Filter (LPF)

**Concept:** Allows low frequencies to pass through while attenuating high frequencies.

**Circuit Configuration (Using Op-amp):**
*   An op-amp configured as a voltage follower.
*   A capacitor (C) in series with the input signal.
*   A resistor (R) connected from the input terminal of the capacitor to ground.
*   The output is taken from the op-amp output.

```
      Vin -- R --+-- C --+-- Op-amp (+) --> Output
                 |      |
                 +------+
                 |
                GND
```

**Explanation:**
*   At low frequencies, the impedance of the capacitor ($Z_C = 1/(j\omega C)$) is very high, so the signal passes through R to the op-amp input.
*   At high frequencies, the impedance of the capacitor becomes very low, effectively shunting the signal to ground, thus attenuating it.

**Transfer Function (Approximation, assuming ideal op-amp and R connected before C):**
$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{1 + sRC}$

**Cutoff Frequency ($f_c$ or $\omega_c$):** The frequency at which the output power is half the input power, or the voltage gain is $1/\sqrt{2}$ (approximately -3 dB).
$\omega_c = \frac{1}{RC}$
$f_c = \frac{1}{2\pi RC}$

**Gain:**
*   DC gain (at $\omega = 0$): $A_v = 1$ (unity gain)
*   At cutoff frequency: $A_v = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (-3 dB)
*   As $\omega \to \infty$: $A_v \to 0$

**Behavior:**
*   Passband: Flat response up to $f_c$.
*   Stopband: Attenuation of 20 dB/decade for frequencies above $f_c$.

**Design Example:** Design a first-order LPF with a cutoff frequency of 1 kHz.
Let $R = 10 \text{ k}\Omega$.
$f_c = \frac{1}{2\pi RC}$
$1000 = \frac{1}{2\pi (10 \times 10^3) C}$
$C = \frac{1}{2\pi \times 1000 \times 10 \times 10^3} = \frac{1}{20\pi \times 10^6} \approx 7.95 \text{ nF}$

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.

#### 2.2. First-Order High-Pass Filter (HPF)

**Concept:** Allows high frequencies to pass through while attenuating low frequencies.

**Circuit Configuration (Using Op-amp):**
*   An op-amp configured as a voltage follower.
*   A capacitor (C) in series with the input signal.
*   A resistor (R) connected from the input terminal of the capacitor to ground.
*   The output is taken from the op-amp output.

```
      Vin -- C --+-- R --+-- Op-amp (+) --> Output
                 |      |
                 +------+
                 |
                GND
```

**Explanation:**
*   At low frequencies, the impedance of the capacitor ($Z_C = 1/(j\omega C)$) is very high, blocking the signal.
*   At high frequencies, the impedance of the capacitor becomes very low, allowing the signal to pass through R to the op-amp input.

**Transfer Function (Approximation):**
$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{sRC}{1 + sRC}$

**Cutoff Frequency ($f_c$ or $\omega_c$):**
$\omega_c = \frac{1}{RC}$
$f_c = \frac{1}{2\pi RC}$

**Gain:**
*   DC gain (at $\omega = 0$): $A_v = 0$
*   At cutoff frequency: $A_v = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (-3 dB)
*   As $\omega \to \infty$: $A_v \to 1$ (unity gain)

**Behavior:**
*   Passband: Flat response for frequencies above $f_c$.
*   Stopband: Attenuation of 20 dB/decade for frequencies below $f_c$.

**Design Example:** Design a first-order HPF with a cutoff frequency of 1 kHz.
Let $R = 10 \text{ k}\Omega$.
$f_c = \frac{1}{2\pi RC}$
$1000 = \frac{1}{2\pi (10 \times 10^3) C}$
$C = \frac{1}{2\pi \times 1000 \times 10 \times 10^3} \approx 7.95 \text{ nF}$

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.

---

### 3. Second-Order Active Filters

Second-order filters have two reactive components and provide a rolloff of 40 dB per decade (or 12 dB per octave) in the stopband. They offer a sharper cutoff than first-order filters. We'll primarily focus on Sallen-Key and Multiple Feedback (MFB) topologies.

#### 3.1. Second-Order Low-Pass Filter (LPF)

**Concept:** Allows low frequencies to pass while attenuating high frequencies with a steeper rolloff.

**3.1.1. Sallen-Key Topology**

**Circuit Configuration:**
*   Two RC sections feeding into an op-amp (often unity-gain buffer or amplifier).
*   Typically uses two capacitors and two resistors in the passive network, with the op-amp providing the gain and buffering.

```
      Vin -- R1 --+-- C1 --+-- R2 --+-- Op-amp (+) --> Output
                 |        |        |
                C2       GND      R_feedback (optional for gain)
                 |
                GND
```

**Simplified Unity-Gain Sallen-Key LPF:**
```
      Vin -- R --+-- C --+-- Op-amp (+) --> Output
                 |      |
                 +-- R--+
                 |
                C
                 |
                GND
```
**Transfer Function (for unity-gain buffer):**
$H(s) = \frac{1}{s^2 R_1 R_2 C_1 C_2 + s(R_1(C_1+C_2) + R_2C_2) + 1}$

For a standard normalized second-order response, we often set $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
$H(s) = \frac{1}{s^2 R^2 C^2 + 3sRC + 1}$

**Key Parameters:**
*   **Characteristic Equation:** $s^2 + \frac{1}{RC}s + \frac{1}{R^2 C^2} = 0$
*   **Natural Frequency ($\omega_n$):** The undamped natural frequency. In the normalized case, $\omega_n = 1/RC$.
*   **Damping Ratio ($\zeta$):** Determines the shape of the response (Butterworth, Chebyshev, Bessel). For the normalized case, $\zeta = 3/2 = 1.5$. This corresponds to a maximally flat magnitude response (Butterworth) for a different design.

**Designing for Butterworth Response ($\zeta = 1/\sqrt{2}$):**
For a unity-gain Sallen-Key LPF, to achieve a Butterworth response, component values need to be adjusted.
A common approach is to set $R_1 = R_2 = R$ and $C_2 = 2C_1$.
Then $\omega_n = \frac{1}{RC}\sqrt{\frac{1}{2}}$ and $\zeta = \frac{3}{2\sqrt{2}}$.
To achieve a specific $\omega_c$ and $\zeta$, specific values of R and C need to be calculated.

**Gain:** The unity-gain version has a DC gain of 1 and a cutoff frequency ($f_c$) where the gain is -3 dB. The stopband rolloff is 40 dB/decade.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16.

#### 3.1.2. Multiple Feedback (MFB) Topology

**Circuit Configuration:**
*   Uses an op-amp in an inverting configuration.
*   Requires one capacitor and two resistors for the basic topology, plus feedback resistors.

```
      Vin -- R1 --+-- Op-amp (-) --+-- R2 --+-- Output
                 |                |        |
                 +-- C ----------+-- R3 --+
                 |
                GND
```

**Transfer Function:**
$H(s) = \frac{-1/R_1R_3C}{s^2 + s(\frac{1}{R_1C} + \frac{1}{R_3C} + \frac{1}{R_2C}) + \frac{1}{R_2R_3C^2}}$
(Note: The negative sign indicates an inverting filter)

**Key Parameters (for unity inverting gain, |G| = 1):**
*   $\omega_n = \frac{1}{C}\sqrt{\frac{R_1+R_2}{R_1R_2R_3}}$
*   $\zeta = \frac{1}{2}\left(\frac{R_1+R_2}{R_1R_2R_3}\right)^{1/2} C R_1 R_3 \omega_n$

**Designing for Butterworth Response ($\zeta = 1/\sqrt{2}$):**
For a common MFB LPF design, set $R_1 = R_3 = R$ and $R_2 = R/2$.
$H(s) = \frac{-1/R^2C}{s^2 + s(3/RC) + 1/R^2C^2}$
Here, $\omega_n = 1/RC$ and $\zeta = 3/2 = 1.5$. This doesn't directly yield Butterworth for unity gain.

A more general design approach for MFB LPF:
Set $R_1 = R_3 = R$.
Then $\omega_n = \frac{1}{C}\sqrt{\frac{2}{R \cdot R_2}}$ and $\zeta = \frac{R}{2}\sqrt{\frac{2}{R \cdot R_2}} C = \frac{1}{2}\sqrt{\frac{2RC^2}{R_2}}$.
To achieve a Butterworth response $\zeta = 1/\sqrt{2}$, we need:
$\frac{1}{\sqrt{2}} = \frac{1}{2}\sqrt{\frac{2RC^2}{R_2}} \Rightarrow 2 = \frac{2RC^2}{R_2} \Rightarrow R_2 = RC^2$.

**Gain:** MFB filters have inherent gain, typically designed for unity or higher gain.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.

---

#### 3.2. Second-Order High-Pass Filter (HPF)

**Concept:** Allows high frequencies to pass while attenuating low frequencies with a steeper rolloff.

**3.2.1. Sallen-Key Topology**

**Circuit Configuration:** Similar to LPF, but with components swapped.

```
      Vin -- C --+-- R --+-- Op-amp (+) --> Output
                 |      |
                 +-- C--+
                 |
                R
                 |
                GND
```

**Transfer Function (for unity-gain buffer):**
$H(s) = \frac{s^2 R_1 R_2 C_1 C_2}{s^2 R_1 R_2 C_1 C_2 + s(R_1(C_1+C_2) + R_2C_2) + 1}$

For a standard normalized second-order response, set $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
$H(s) = \frac{s^2 R^2 C^2}{s^2 R^2 C^2 + 3sRC + 1}$

**Key Parameters:**
*   **Natural Frequency ($\omega_n$):** $\omega_n = 1/RC$.
*   **Damping Ratio ($\zeta$):** $\zeta = 3/2 = 1.5$.

**Designing for Butterworth Response ($\zeta = 1/\sqrt{2}$):**
Similar to LPF, adjust component values. For unity-gain Sallen-Key HPF, set $R_2 = R_1 = R$ and $C_2 = 2C_1$.

**Gain:** DC gain is 0, cutoff frequency has -3 dB gain, and stopband rolloff is 40 dB/decade.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.

#### 3.2.2. Multiple Feedback (MFB) Topology

**Circuit Configuration:**

```
      Vin -- C1 --+-- Op-amp (-) --+-- R2 --+-- Output
                 |                |        |
                 +-- R1 ----------+-- C2 --+
                 |
                GND
```

**Transfer Function:**
$H(s) = \frac{s^2 C_1 C_2 R_1 R_2}{s^2 C_1 C_2 R_1 R_2 + s(\frac{R_1}{R_2}C_1 + C_2) + \frac{1}{R_2}}$

**Key Parameters:**
*   $\omega_n = \frac{1}{C_1 C_2 R_1 R_2} (R_1+R_2)$
*   $\zeta = \frac{1}{2} C_2 \left( \frac{R_1}{R_2} C_1 + C_2 \right) R_2 \omega_n$

**Designing for Butterworth:** Requires careful selection of component values.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.

---

#### 3.3. Second-Order Band-Pass Filter (BPF)

**Concept:** Allows a specific range of frequencies to pass while attenuating frequencies above and below this range.

**3.3.1. Sallen-Key Topology (Less common for BPF due to poor Q factor)**

**3.3.2. Multiple Feedback (MFB) Topology**

**Circuit Configuration:**

```
      Vin -- R1 --+-- Op-amp (-) --+-- R2 --+-- Output
                 |                |        |
                 +-- C1 ----------+-- C2 --+
                 |                |
                 +-- R3 ----------+
                 |
                GND
```

**Transfer Function:**
$H(s) = \frac{s(\frac{1}{R_1 C_1})}{s^2 + s(\frac{1}{C_1}(\frac{1}{R_1}+\frac{1}{R_3}) + \frac{1}{C_2 R_2}) + \frac{1}{C_1 C_2 R_3 R_2}}$

**Key Parameters:**
*   **Center Frequency ($\omega_0$):** The frequency of maximum gain.
*   **Quality Factor (Q):** A measure of the filter's selectivity. Higher Q means a narrower bandwidth.
*   **Gain at Center Frequency ($A_0$):** The peak gain.

For a common MFB BPF design:
Let $R_1=R_2=R$, $C_1=C_2=C$.
$H(s) = \frac{s(1/RC)}{s^2 + s(3/RC) + 1/R^2C^2}$
Here, $\omega_0 = 1/RC$ and $Q = \omega_0/\Delta\omega = (1/RC) / (3/RC) = 1/3$. This has a very wide bandwidth.

To achieve a higher Q and a narrower bandwidth, component values must be adjusted.
For a unity gain MFB BPF, a common design is:
Let $R_2 = R_3 = R$ and $R_1 = R/2$. Let $C_1 = C_2 = C$.
$H(s) = \frac{s(2/RC)}{s^2 + s(3/RC) + 2/R^2C^2}$
Here, $\omega_0 = \sqrt{2}/RC$ and $Q = \sqrt{2}/3 \approx 0.47$.

A more general approach to design for specific $\omega_0$, $Q$, and $A_0$:
*   Choose $Q$ and $\omega_0$.
*   Select $C_1 = C_2 = C$.
*   Calculate $R_3 = R_2 = R$.
*   Calculate $R_1 = R$.
*   Then $\omega_0 = \frac{1}{C}\sqrt{\frac{2}{R \cdot R_2}}$ and $Q = \frac{1}{2}\sqrt{\frac{2 R_2}{R}} C$.
*   The gain at $\omega_0$ is $A_0 = \frac{R_2}{2R_1}$.

**Design Example:** Design an MFB BPF with $\omega_0 = 1000 \text{ rad/s}$, $Q=1$, and unity gain.
1.  Choose $C = 0.1 \mu\text{F}$.
2.  Set $R_2 = R_3 = R = 10 \text{ k}\Omega$.
3.  $\omega_0 = \frac{1}{C}\sqrt{\frac{2}{R \cdot R_2}} \Rightarrow 1000 = \frac{1}{0.1 \times 10^{-6}}\sqrt{\frac{2}{10 \times 10^3 \times 10 \times 10^3}} = 10^7 \sqrt{2 \times 10^{-10}} = 10^7 \times \sqrt{2} \times 10^{-5} = 100\sqrt{2} \approx 141.4$ (This formula isn't directly applicable for unity gain design. Let's use a common design method).

**Common MFB BPF Design:**
Choose $R_1=R_2=R_3=R$ and $C_1=C_2=C$.
$\omega_0 = 1/RC$.
$Q = 1/3$.
$A_0 = -1/2$ (inverting gain).

To achieve a specific $\omega_0$, $Q$, and $A_0$, we can use these relationships for the MFB BPF:
*   $\omega_0 = \frac{1}{C}\sqrt{\frac{R_1+R_3}{R_1R_2R_3}}$
*   $Q = \frac{1}{R_1C}(\frac{R_1+R_3}{R_1R_2R_3})^{1/2}$
*   $A_0 = \frac{R_2}{R_1}$ (magnitude)

Let $R_1=R$, $R_2=R$, $R_3=R$.
$\omega_0 = \frac{\sqrt{2}}{RC}$
$Q = \frac{R}{C} \frac{\sqrt{2}}{R^2} = \frac{\sqrt{2}}{R}$
$A_0 = 1$.

If $Q = \frac{1}{2RC} (\frac{R_1+R_3}{R_1 R_2 R_3})^{1/2}$ and $\omega_0 = \frac{1}{C} (\frac{R_1+R_3}{R_1 R_2 R_3})^{1/2}$.
Let $R_1 = R$, $R_2 = R$, $R_3 = R$.
$\omega_0 = \frac{1}{C} (\frac{2R}{R^3})^{1/2} = \frac{\sqrt{2}}{RC}$.
$Q = \frac{1}{RC} (\frac{2R}{R^3})^{1/2} = \frac{\sqrt{2}}{RC} \cdot \frac{RC}{\sqrt{2}} = 1$.
$A_0 = \frac{R_2}{R_1} = 1$.

So, if we set $R_1=R_2=R_3=R$ and $C_1=C_2=C$, we get $\omega_0 = \sqrt{2}/RC$ and $Q=1$.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.

---

#### 3.4. Second-Order Band-Reject Filter (Notch Filter)

**Concept:** Attenuates a specific range of frequencies while allowing others to pass.

**3.4.1. Multiple Feedback (MFB) Topology**

**Circuit Configuration:** Similar to BPF, but with component values adjusted.

**3.4.2. Twin-T Notch Filter (with Op-amp)**

**Concept:** A passive Twin-T network can be used to create a notch filter. When combined with an op-amp (usually in a voltage follower configuration), it provides a deeper and sharper notch.

**Passive Twin-T Network:**
Consists of two T-sections: one with resistors and one with capacitors.
For a notch at $\omega_0$:
*   Resistor T-section: $R, R, R/2$
*   Capacitor T-section: $C, C, 2C$

**Circuit Configuration with Op-amp Buffer:**
```
      Vin --+-- R --+-- C --+-- Op-amp (+) --> Output
            |      |      |
            +-- R--+-- C--+
            |      |      |
            +-- R/2+-- 2C--+
            |
           GND
```
(The op-amp is typically used to buffer the Twin-T network, or it can be part of a feedback loop for a tunable notch).

**Transfer Function:** The passive Twin-T has a transfer function that is zero at $\omega_0 = 1/RC$. When buffered by a unity-gain amplifier, the output remains zero at $\omega_0$.

**Gain:**
*   DC gain: 1
*   Gain at notch frequency ($\omega_0$): 0 (or very low, depending on component matching)
*   Infinite Q is theoretically possible, but practically limited by component tolerances and op-amp characteristics.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.

---

### 4. State Variable Filters

**Concept:**
State variable filters are versatile active filters that can simultaneously provide low-pass, high-pass, and band-pass outputs from a single circuit. They are also easily tunable for center frequency and Q factor. They achieve this by using multiple op-amps configured as integrators and summers.

**Block Diagram:**
The core of a state variable filter involves two integrators and one summer. The outputs of the integrators are the "state variables."

```
Input  --- Summing Amp ----> Integrator 1 ----> Integrator 2 ---->
              |                                      |
              +------------------------------------->
```

**Circuit Configuration (using three op-amps):**

*   **Op-amp 1 (Summer/Inverter):** Sums the input signal and the band-pass output (inverted).
*   **Op-amp 2 (Integrator):** Integrates the output of Op-amp 1. This output is the low-pass response.
*   **Op-amp 3 (Integrator):** Integrates the output of Op-amp 2. This output is the high-pass response.
*   **Op-amp 4 (Summing Amp/BPF):** Sums the low-pass and high-pass outputs to create the band-pass response.

Let $R_1=R_2=R_3=R$ and $C_1=C_2=C$.
Let the input be $V_{in}$.
Let the feedback resistor for the summer be $R_f$.

*   **Summer Output (Summing Amplifier 1):** $V_1 = - (\frac{R_f}{R}) V_{in} - (\frac{R_f}{R}) V_{BPF}$
*   **Integrator 1 Output (Low-Pass):** $V_{LPF}(s) = - V_1(s) \frac{1}{sRC} = - (-\frac{R_f}{R} V_{in} - \frac{R_f}{R} V_{BPF}) \frac{1}{sRC} = \frac{R_f}{R^2C} (\frac{V_{in}}{s} + \frac{V_{BPF}}{s})$
*   **Integrator 2 Output (High-Pass):** $V_{HPF}(s) = - V_{LPF}(s) \frac{1}{sRC} = - \frac{R_f}{R^2C} (\frac{V_{in}}{s} + \frac{V_{BPF}}{s}) \frac{1}{sRC}$
*   **Band-Pass Output:** $V_{BPF}(s) = V_{LPF}(s) + V_{HPF}(s) = - \frac{R_f}{R^2C} (\frac{V_{in}}{s} + \frac{V_{BPF}}{s}) \frac{1}{sRC}$

This is a simplified representation. A common implementation uses specific relationships between resistors and capacitors to define the filter parameters.

**Key Parameters:**
*   **Center Frequency ($\omega_0$):** Determined by the integrator time constants ($RC$).
*   **Q Factor:** Determined by the feedback paths and summing coefficients.
*   **Gain:** Can be set independently for each output.

**Tuning:**
*   $\omega_0$ can be tuned by varying R or C in the integrators.
*   Q can be tuned by adjusting the feedback resistors in the summing stages.

**Advantages:**
*   Simultaneous LPF, HPF, and BPF outputs.
*   Independent tuning of $\omega_0$ and Q.
*   Can achieve high Q values.
*   Can be cascaded to create higher-order filters.

**Disadvantages:**
*   Requires multiple op-amps (typically 3 or 4).
*   More complex to design and implement than simple first or second-order filters.

**References:**
*   Sergio Franco, "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 12.
*   R. A. Gayakwad, "Op-Amps and Linear Integrated Circuits," Chapter 10.
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 16.

---

### Important Points to Remember

*   **Active filters use op-amps to provide gain and isolation**, overcoming limitations of passive filters.
*   **First-order filters have a 20 dB/decade rolloff**, while **second-order filters have a 40 dB/decade rolloff**.
*   **Sallen-Key and Multiple Feedback (MFB)** are common topologies for second-order filters.
*   **Butterworth response** provides a maximally flat passband.
*   **State Variable Filters** are versatile, offering multiple outputs (LPF, HPF, BPF) and independent tuning of frequency and Q.
*   The **cutoff frequency** for first-order filters is $f_c = 1/(2\pi RC)$.
*   For second-order filters, **natural frequency ($\omega_n$) and damping ratio ($\zeta$)** define the filter's characteristics.

---

### Practice Questions and Answers

**Q1. What is the primary advantage of active filters over passive filters?**
*   **Answer:** Active filters can provide gain (amplification), whereas passive filters can only attenuate the signal (gain ≤ 1). Active filters also offer better isolation between stages due to the high input impedance and low output impedance of op-amps.

**Q2. What is the rolloff rate of a first-order filter in the stopband?**
*   **Answer:** 20 dB per decade (or 6 dB per octave).

**Q3. What is the cutoff frequency ($f_c$) for a first-order LPF with $R = 5 \text{ k}\Omega$ and $C = 0.01 \mu\text{F}$?**
*   **Answer:**
    $f_c = \frac{1}{2\pi RC}$
    $f_c = \frac{1}{2\pi \times (5 \times 10^3 \Omega) \times (0.01 \times 10^{-6} F)}$
    $f_c = \frac{1}{2\pi \times 5 \times 10^{-5}} = \frac{10^5}{10\pi} = \frac{10^4}{\pi} \approx 3183 \text{ Hz}$

**Q4. Name two common topologies for second-order active filters.**
*   **Answer:** Sallen-Key and Multiple Feedback (MFB).

**Q5. A State Variable Filter can simultaneously provide which types of filtered outputs?**
*   **Answer:** Low-Pass, High-Pass, and Band-Pass.

**Q6. For a unity-gain Sallen-Key LPF, if $R_1=R_2=10 \text{ k}\Omega$ and $C_1=C_2=0.1 \mu\text{F}$, what is the approximate natural frequency ($\omega_n$)?**
*   **Answer:**
    For $R_1=R_2=R$ and $C_1=C_2=C$, $\omega_n = 1/RC$.
    $\omega_n = \frac{1}{(10 \times 10^3 \Omega) \times (0.1 \times 10^{-6} F)}$
    $\omega_n = \frac{1}{10^4 \times 10^{-7}} = \frac{1}{10^{-3}} = 1000 \text{ rad/s}$.

**Q7. What is the main advantage of using an active filter for a notch filter compared to a passive Twin-T network alone?**
*   **Answer:** The op-amp in an active notch filter configuration can provide a deeper and sharper notch (higher Q factor) and buffer the circuit, preventing loading effects.

---

### Alignment with Course Outcomes (CO)

*   **CO1: Summarize the concepts of operational amplifiers and differential amplifier configurations (Knowledge Level: K2)**
    *   This module implicitly uses the understanding of op-amp basic configurations (voltage follower, inverting amplifier, non-inverting amplifier, summing amplifier) which are foundational to building these filters.
*   **CO2: Design operational amplifier circuits for various applications. (Knowledge Level: K3)**
    *   This topic directly addresses the design of filters for specific applications (LPF, HPF, BPF, Notch) by calculating component values based on desired performance characteristics (cutoff frequency, center frequency, Q factor, gain).
*   **CO3: Choose integrated circuit chips for various linear circuit applications. (Knowledge Level: K2)**
    *   Understanding the requirements of active filters (e.g., bandwidth, slew rate, input impedance) helps in selecting appropriate op-amp ICs (e.g., LM741, TL08x, NE5532) for filter implementations.
*   **CO4: Implement various applications using specific integrated circuit chips (Knowledge Level: K3)**
    *   The practical implementation of these filters requires selecting an IC and appropriate passive components, which is a direct application of the knowledge gained.

---
This comprehensive study note covers the key aspects of active filters, their comparison with passive filters, and the design principles of various types of active filters, including first and second-order LPF, HPF, BPF, Band-Reject, and State Variable filters, as required by the learning outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
