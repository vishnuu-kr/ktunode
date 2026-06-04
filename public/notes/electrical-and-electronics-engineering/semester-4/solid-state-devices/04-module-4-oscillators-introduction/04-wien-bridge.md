---
title: "Wien bridge"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f99"
status: "completed"
scrapedAt: "2026-05-23T16:18:56.837Z"
---
# SOLID STATE DEVICES: Module 4: Oscillators: Introduction - Wien Bridge Oscillator

---

## 1. Introduction to Oscillators

**What is an Oscillator?**

An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangle wave. Unlike amplifiers, which amplify an input signal, oscillators generate an output signal without any explicit input signal. They are fundamental building blocks in many electronic systems, including radio transmitters and receivers, signal generators, and clock circuits.

**Key Concepts:**

*   **Feedback:** Oscillators rely on positive feedback, where a portion of the output signal is fed back to the input in such a way that it reinforces the input signal.
*   **Gain:** The amplifier section of an oscillator must provide sufficient gain to overcome the losses in the feedback network.
*   **Frequency Determination:** The frequency of oscillation is determined by the reactive components (capacitors and inductors) in the feedback network.
*   **Barkhausen Criterion:** For sustained oscillation, two conditions must be met:
    1.  The **total phase shift** around the feedback loop must be **0 degrees or an integer multiple of 360 degrees**.
    2.  The **magnitude of the loop gain** (product of amplifier gain and feedback network attenuation) must be **equal to or greater than unity (|Aβ| ≥ 1)**.

**Types of Oscillators:**

Oscillators can be broadly classified based on their waveform (sine, square, etc.) or the type of feedback network used. Common types include:

*   **RC Oscillators:** Use resistors and capacitors in the feedback network.
*   **LC Oscillators:** Use inductors and capacitors in the feedback network.
*   **Crystal Oscillators:** Use piezoelectric crystals for highly stable frequency generation.

---

## 2. The Wien Bridge Oscillator

The Wien bridge oscillator is a popular and widely used **RC oscillator** that generates a **sinusoidal output waveform**. It is particularly well-suited for audio frequencies and applications where a pure sine wave is required.

**Circuit Topology:**

The Wien bridge oscillator consists of two main stages:

1.  **Amplifier Stage:** Typically a non-inverting amplifier using an operational amplifier (Op-Amp) or a transistor.
2.  **Frequency-Selective Feedback Network:** A Wien bridge circuit composed of resistors and capacitors.

**The Wien Bridge Feedback Network:**

The core of the Wien bridge oscillator is the frequency-determining feedback network. It's a passive network consisting of two resistors ($R_1$, $R_2$) and two capacitors ($C_1$, $C_2$).

*   **Series Arm:** Composed of a resistor ($R$) and a capacitor ($C$) in series.
*   **Shunt Arm:** Composed of a resistor ($2R$) and a capacitor ($C/2$) in parallel. (Alternatively, and more commonly, a resistor $R$ in parallel with a capacitor $C/2$ or a resistor $R/2$ in parallel with a capacitor $C$.)

A common and simpler configuration uses equal values for resistors and capacitors:

*   **Series Arm:** $R$ and $C$ in series.
*   **Shunt Arm:** $R$ and $C$ in parallel.

For the purpose of analysis, let's consider the configuration with $R_1=R_2=R$ and $C_1=C_2=C$.

**Wien Bridge Circuit Diagram (Conceptual):**

```
      +-------- R --------+
      |                  |
      C                  C
      |                  |
Input O------- R --------O Output
      |                  |
      --------------------+
```

**Analysis of the Wien Bridge Feedback Network:**

The feedback network provides a specific amount of attenuation and phase shift to the output signal before it's fed back to the input of the amplifier.

Let $Z_1$ be the impedance of the series arm ($R$ and $C$) and $Z_2$ be the impedance of the parallel arm ($R$ and $C$). For the specific configuration of $R_1=R_2=R$ and $C_1=C_2=C$:

*   **Series Arm Impedance ($Z_1$):** $Z_1 = R + \frac{1}{j\omega C} = R \left(1 + \frac{1}{j\omega RC}\right)$
*   **Parallel Arm Impedance ($Z_2$):** $Z_2 = R \parallel \frac{1}{j\omega C} = \frac{R \cdot \frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = \frac{\frac{R}{j\omega C}}{\frac{j\omega RC + 1}{j\omega C}} = \frac{R}{1 + j\omega RC}$

The feedback factor $\beta$ is the ratio of the voltage at the junction of the parallel arm to the output voltage:

$\beta = \frac{Z_2}{Z_1 + Z_2}$

Substituting the expressions for $Z_1$ and $Z_2$:

$\beta = \frac{\frac{R}{1 + j\omega RC}}{\left(R \left(1 + \frac{1}{j\omega RC}\right)\right) + \frac{R}{1 + j\omega RC}}$

$\beta = \frac{\frac{R}{1 + j\omega RC}}{\frac{R(j\omega RC + 1)}{j\omega RC} + \frac{R}{1 + j\omega RC}}$

Let's simplify this by considering the voltage division between the series arm and the parallel arm. The voltage across the parallel arm ($V_{out}$) is applied to the feedback network. The feedback voltage ($V_{feedback}$) is taken from the point between the series and parallel arms.

The voltage division rule for the feedback network is:

$V_{feedback} = V_{out} \cdot \frac{Z_2}{Z_1 + Z_2}$

For oscillation, the frequency-selective network must have unity gain and zero phase shift at the oscillation frequency. This occurs when the impedance of the series arm equals the impedance of the parallel arm. However, the configuration of the Wien bridge is such that at a specific frequency, the feedback factor $\beta$ becomes real and equal to 1/3.

**Derivation of Oscillation Frequency and Condition:**

For the Wien bridge network, the transfer function from output to feedback is:

$\beta(\omega) = \frac{Z_p}{Z_s + Z_p}$

Where:
*   $Z_s = R + \frac{1}{j\omega C}$ (Series arm)
*   $Z_p = R \parallel \frac{1}{j\omega C} = \frac{R \cdot \frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = \frac{R}{1 + j\omega RC}$ (Parallel arm)

$\beta(\omega) = \frac{\frac{R}{1 + j\omega RC}}{\left(R + \frac{1}{j\omega C}\right) + \frac{R}{1 + j\omega RC}}$

Multiply numerator and denominator by $(1 + j\omega RC)$:

$\beta(\omega) = \frac{R}{\left(R + \frac{1}{j\omega C}\right)(1 + j\omega RC) + R}$

$\beta(\omega) = \frac{R}{R + j\omega R^2 C - \frac{j}{\omega C} - j\omega RC \cdot \frac{1}{j\omega C} + R}$

$\beta(\omega) = \frac{R}{R + j\omega R^2 C - \frac{j}{\omega C} - R + R}$

$\beta(\omega) = \frac{R}{R + j\omega R^2 C - \frac{j}{\omega C}}$

To make the impedance of the parallel arm equal to the impedance of the series arm in a balanced bridge configuration (which is not the case here for unity feedback), we'd set $Z_1 = Z_2$.

However, for the Wien bridge oscillator configuration, the feedback network is designed such that at a particular frequency, the phase shift is 0 degrees and the attenuation is 1/3.

Let's look at the $\beta$ expression again:

$\beta(\omega) = \frac{Z_p}{Z_s + Z_p} = \frac{\frac{R}{1 + j\omega RC}}{\left(R + \frac{1}{j\omega C}\right) + \frac{R}{1 + j\omega RC}}$

$\beta(\omega) = \frac{R}{\left(R + \frac{1}{j\omega C}\right)(1 + j\omega RC) + R}$

$\beta(\omega) = \frac{R}{R(1 + j\omega RC) + \frac{1}{j\omega C}(1 + j\omega RC) + R}$

$\beta(\omega) = \frac{R}{R + j\omega R^2 C + \frac{1}{j\omega C} + 1 + R}$

$\beta(\omega) = \frac{R}{2R + 1 + j\left(\omega R^2 C - \frac{1}{\omega C}\right)}$

**For zero phase shift, the imaginary part must be zero:**

$\omega R^2 C - \frac{1}{\omega C} = 0$
$\omega R^2 C = \frac{1}{\omega C}$
$\omega^2 R^2 C^2 = 1$
$\omega^2 = \frac{1}{R^2 C^2}$
$\omega_0 = \frac{1}{RC}$ (Angular frequency of oscillation)

**The frequency of oscillation ($f_0$) is:**

$f_0 = \frac{\omega_0}{2\pi} = \frac{1}{2\pi RC}$

**At this frequency ($\omega_0 = \frac{1}{RC}$), the feedback factor $\beta$ becomes:**

$\beta(\omega_0) = \frac{R}{2R + 1 + j\left(\omega_0 R^2 C - \frac{1}{\omega_0 C}\right)}$
Since $\omega_0 R^2 C = \frac{1}{\omega_0 C}$, the imaginary part is zero.
$\beta(\omega_0) = \frac{R}{2R + 1} = \frac{1}{3}$

**The Amplifier Stage:**

The amplifier stage provides the necessary gain and phase shift to satisfy Barkhausen's criterion. For a sinusoidal oscillator, the amplifier must provide a phase shift of 0 degrees. A non-inverting amplifier (like an Op-Amp configured as a non-inverting amplifier) provides a 0-degree phase shift.

**Barkhausen's Criterion for Wien Bridge Oscillator:**

1.  **Phase Shift:** The feedback network provides 0 degrees phase shift at $f_0$. The amplifier stage must also provide 0 degrees phase shift.
2.  **Gain:** The loop gain $|A\beta|$ must be $\ge 1$. Since $\beta = 1/3$, the amplifier gain ($A$) must satisfy:
    $|A| \cdot \frac{1}{3} \ge 1$
    $|A| \ge 3$

Therefore, the amplifier must have a voltage gain of at least 3 to sustain oscillation. In practice, the gain is set slightly above 3 to ensure starting oscillation and maintain stable amplitude.

**Circuit Implementation with Op-Amp:**

A common implementation uses an Op-Amp configured as a non-inverting amplifier. The feedback network is connected between the output and the non-inverting input of the Op-Amp. The inverting input is typically grounded.

```
        +Vcc
         |
         R_f
         |
         +------ Output (V_out)
         |
      .-.|
      |  >--------
      '-'|        |
     -   |        |
      +--+--------+
         |
      Non-Inverting Input
         |
  +------o------o-------- GND
  |      |      |
  R      R      C
  |      |      |
  +------o------o-------- GND
         |      |
         C      |
         |      |
        GND     |
                +-------- Output (V_out)
```

**Explanation:**

*   The Op-Amp is configured as a non-inverting amplifier.
*   The feedback network ($R-C$ series and $R-C$ parallel) is connected between the output ($V_{out}$) and the non-inverting input ($V_{in+}$).
*   The gain of the non-inverting amplifier is given by $A = 1 + \frac{R_f}{R_g}$, where $R_f$ is the feedback resistor and $R_g$ is the resistor connected from the inverting input to ground.
*   To ensure the gain is slightly greater than 3, we set $1 + \frac{R_f}{R_g} > 3$, which means $\frac{R_f}{R_g} > 2$. A common choice is $R_f = 2R_g$ or $R_f = 3R_g$.

**Starting and Amplitude Stabilization:**

*   **Starting Oscillation:** For oscillation to start, the loop gain must be slightly greater than 1. This means the gain of the amplifier must be slightly greater than 3. Random noise in the circuit provides the initial signal for oscillation to build up.
*   **Amplitude Stabilization:** As the oscillations build up, the amplifier might saturate, limiting the amplitude. To achieve a stable, non-distorted sine wave, methods are employed to keep the gain slightly above 3. Common techniques include:
    *   **Variable Resistance (Thermistor/Lamp):** A nonlinear element like a lamp filament or a thermistor can be used as $R_g$ (or part of $R_f$). As the output voltage increases, the resistance of the lamp/thermistor increases, reducing the amplifier gain. This self-limiting action stabilizes the amplitude.
    *   **Diode Clipper/Limiter:** Diodes can be used in the feedback path to limit the gain.

**Example: Designing a Wien Bridge Oscillator for 1 kHz**

**Objective:** Design a Wien bridge oscillator to produce a sine wave at 1 kHz.

**Steps:**

1.  **Choose RC values:**
    We need to select $R$ and $C$ such that $f_0 = \frac{1}{2\pi RC} = 1 \text{ kHz}$.
    Let's choose a standard capacitor value, say $C = 0.1 \mu F$.
    Then, $R = \frac{1}{2\pi f_0 C} = \frac{1}{2\pi \times 1000 \text{ Hz} \times 0.1 \times 10^{-6} \text{ F}}$
    $R = \frac{1}{2\pi \times 10^{-4}} = \frac{10^4}{2\pi} \approx \frac{10000}{6.283} \approx 1591.5 \Omega$
    We can use a standard resistor value close to this, like $1.6 \text{ k}\Omega$.
    So, $R = 1.6 \text{ k}\Omega$ and $C = 0.1 \mu F$.

2.  **Determine Amplifier Gain:**
    The amplifier gain must be slightly greater than 3. Let's aim for a gain of approximately 3.5.
    Using an Op-Amp as a non-inverting amplifier, $A = 1 + \frac{R_f}{R_g}$.
    We need $1 + \frac{R_f}{R_g} = 3.5$, so $\frac{R_f}{R_g} = 2.5$.
    We can choose $R_g = 10 \text{ k}\Omega$ and $R_f = 25 \text{ k}\Omega$.

3.  **Amplitude Stabilization (Optional but Recommended):**
    If a stable amplitude is required, we can replace $R_g$ with a thermistor or a lamp. For instance, if a lamp has a resistance of $10 \text{ k}\Omega$ when the output is at the desired amplitude and its resistance increases to $25 \text{ k}\Omega$ as the amplitude increases, it will help stabilize the gain.

**Circuit Diagram for the Example:**

```
        +Vcc
         |
      25kOhm (Rf)
         |
         +------ Output (V_out)
         |
      .-.|
      |  >--------
      '-'|        |
     -   |        |
      +--+--------+
         |
      Non-Inverting Input
         |
  +------o------o-------- GND
  |      |      |
1.6kOhm 1.6kOhm 0.1uF
  |      |      |
  +------o------o-------- GND
         |      |
       0.1uF    |
         |      |
        GND     |
                +-------- Output (V_out)
```

**Important Points to Remember:**

*   **Positive Feedback:** Essential for oscillation.
*   **Barkhausen Criterion:** Zero phase shift and loop gain $\ge 1$.
*   **Wien Bridge Frequency:** $f_0 = \frac{1}{2\pi RC}$ (for the equal R, equal C configuration).
*   **Amplifier Gain:** Must be greater than 3.
*   **Waveform:** Sinusoidal.
*   **Applications:** Audio oscillators, signal generators.
*   **Amplitude Stabilization:** Often required for clean sine waves.

---

## 3. Practice Questions and Exercises

**Question 1:**

What are the two conditions required for sustained oscillation according to Barkhausen's criterion?

**Answer:**
1.  The total phase shift around the feedback loop must be $0^\circ$ or an integer multiple of $360^\circ$.
2.  The magnitude of the loop gain ($|A\beta|$) must be equal to or greater than unity ($|A\beta| \ge 1$).

---

**Question 2:**

In a Wien bridge oscillator with the feedback network consisting of a series arm ($R, C$) and a parallel arm ($R, C$), at what frequency is the phase shift zero? What is the feedback factor $\beta$ at this frequency?

**Answer:**
The frequency at which the phase shift is zero is $f_0 = \frac{1}{2\pi RC}$. At this frequency, the feedback factor $\beta = \frac{1}{3}$.

---

**Question 3:**

If a Wien bridge oscillator uses an amplifier with a voltage gain of 4, what is the minimum attenuation required from the feedback network to sustain oscillation?

**Answer:**
For sustained oscillation, $|A\beta| \ge 1$.
Given $A=4$, we need $4 \cdot |\beta| \ge 1$, so $|\beta| \ge \frac{1}{4}$.
The attenuation of the feedback network is the reciprocal of $|\beta|$, so the minimum attenuation required is $4$.

---

**Question 4:**

Design a Wien bridge oscillator to produce a sinusoidal output at $10 \text{ kHz}$. Assume you are using an Op-Amp with a non-inverting gain of $3.5$.

**Solution:**

1.  **Determine $R$ and $C$ values:**
    We need $f_0 = 10 \text{ kHz} = 10^4 \text{ Hz}$.
    Let's choose $C = 0.01 \mu F = 10^{-8} \text{ F}$.
    $R = \frac{1}{2\pi f_0 C} = \frac{1}{2\pi \times 10^4 \text{ Hz} \times 10^{-8} \text{ F}}$
    $R = \frac{1}{2\pi \times 10^{-4}} = \frac{10^4}{2\pi} \approx 1591.5 \Omega$.
    Use standard resistor value $R = 1.6 \text{ k}\Omega$.
    So, $R = 1.6 \text{ k}\Omega$ and $C = 0.01 \mu F$.

2.  **Determine amplifier gain components:**
    The non-inverting gain is $A = 1 + \frac{R_f}{R_g} = 3.5$.
    This means $\frac{R_f}{R_g} = 2.5$.
    Choose $R_g = 10 \text{ k}\Omega$ and $R_f = 25 \text{ k}\Omega$.

**Circuit Configuration:**
The Op-Amp is configured as a non-inverting amplifier with $R_g = 10 \text{ k}\Omega$ connected from the inverting input to ground, and $R_f = 25 \text{ k}\Omega$ connected from the output to the inverting input. The Wien bridge network ($R=1.6 \text{ k}\Omega$, $C=0.01 \mu F$ for both arms) is connected between the output and the non-inverting input.

---

## 4. Alignment with Course Outcomes

*   **CO1: Design and analyze RC circuits and BJT biasing circuits (Knowledge Level: K4)**
    *   The Wien bridge oscillator utilizes RC networks for frequency determination. Understanding the behavior of these RC networks (impedance, phase shift) is crucial for designing and analyzing the oscillator. This relates to the analysis aspect of CO1. The design of the RC network to achieve a specific frequency falls under design.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3)**
    *   While this topic focuses on Op-Amps, the underlying principles of amplification and feedback are applicable. If a transistor is used as the amplifier, then CO2 would be directly relevant for analyzing the transistor's gain and phase response.
*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**
    *   Similar to CO2, if MOSFETs are used as amplifiers, their characteristics would be analyzed. The core concept of positive feedback for oscillation remains the same.
*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)**
    *   This is the *most directly aligned* course outcome. The Wien bridge oscillator is a prime example of a feedback oscillator. Designing it requires understanding feedback principles (positive feedback, gain, phase shift) and analyzing its operation to determine oscillation frequency and amplitude.
*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4)**
    *   While not directly about power amplifiers or voltage regulators, the concepts of gain and stable output are present. Understanding how to achieve a stable output amplitude (through amplitude stabilization techniques) has some conceptual overlap.

---
