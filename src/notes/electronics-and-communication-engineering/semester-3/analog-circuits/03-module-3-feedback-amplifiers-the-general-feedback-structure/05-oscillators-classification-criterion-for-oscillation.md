---
title: "Oscillators: Classification, criterion for oscillation"
subject: "ANALOG CIRCUITS"
module: "Module 3: Feedback amplifiers: The general feedback structure"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f4"
status: "completed"
scrapedAt: "2026-05-23T17:44:20.392Z"
---
# ANALOG CIRCUITS - Module 3: Feedback Amplifiers: The General Feedback Structure

## Topic: Oscillators: Classification, Criterion for Oscillation

### 1. Introduction to Oscillators

Oscillators are electronic circuits that produce a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangular wave. Unlike amplifiers that amplify an input signal, oscillators generate their own output signal without any external input signal (other than the DC power supply). They are fundamental building blocks in many electronic systems, including radio transmitters and receivers, clock generation circuits in digital systems, signal generators, and frequency synthesizers.

### 2. Relationship to Feedback Amplifiers

Oscillators are closely related to feedback amplifiers. In fact, an oscillator can be viewed as a feedback amplifier where the feedback loop is designed to provide positive feedback at a specific frequency, leading to self-sustained oscillations.

**Key Concept:** An amplifier with **positive feedback** around a suitable frequency-selective network can become an oscillator.

### 3. Classification of Oscillators

Oscillators can be broadly classified based on several criteria:

#### 3.1. Based on the Output Signal Waveform:

*   **Sinusoidal Oscillators:** Produce a sinusoidal output waveform. These are the most common type and are often designed to be highly linear.
    *   Examples: LC Oscillators (Hartley, Colpitts), RC Oscillators (Phase-Shift, Wien Bridge), Crystal Oscillators.
*   **Non-sinusoidal Oscillators:** Produce waveforms other than sine waves.
    *   **Square Wave Oscillators:** Produce a square or rectangular waveform.
        *   Examples: Astable Multivibrators.
    *   **Triangular/Sawtooth Wave Oscillators:** Produce triangular or sawtooth waveforms.
        *   Examples: Ramp generators.

#### 3.2. Based on the Components Used:

*   **LC Oscillators:** Utilize inductors (L) and capacitors (C) in their frequency-determining networks. These are typically used for higher frequencies (RF range).
    *   Examples: Hartley Oscillator, Colpitts Oscillator, Clapp Oscillator.
*   **RC Oscillators:** Utilize resistors (R) and capacitors (C) in their frequency-determining networks. These are typically used for lower frequencies (audio range).
    *   Examples: Phase-Shift Oscillator, Wien Bridge Oscillator, Twin-T Oscillator.
*   **Crystal Oscillators:** Utilize piezoelectric crystals (usually quartz) as their frequency-determining element. These offer very high frequency stability and accuracy.
    *   Examples: Pierce Oscillator, Colpitts Oscillator with crystal.

#### 3.3. Based on the Tank Circuit (for Sinusoidal Oscillators):

*   **Resonant Circuit Oscillators:** Employ a resonant LC circuit (tank circuit) to determine the oscillation frequency.
    *   Examples: Hartley, Colpitts, Clapp.
*   **Phase Shift Oscillators:** Rely on the phase shift introduced by RC networks to achieve the necessary positive feedback.

#### 3.4. Based on the Feedback Mechanism:

*   **Negative Resistance Oscillators:** Utilize devices exhibiting negative differential resistance characteristics to sustain oscillations.
    *   Examples: Tunnel Diode Oscillator, Gunn Diode Oscillator.
*   **Feedback-Controlled Oscillators:** Rely on the principles of positive feedback in an amplifier circuit.

### 4. Criterion for Oscillation (Barkhausen Criterion)

For a feedback circuit to oscillate, two conditions must be met, as famously stated by Harold Barkhausen. These conditions ensure that the circuit can generate and sustain a periodic signal.

**The Barkhausen Criterion states that:**

1.  **Loop Gain Magnitude:** The magnitude of the total loop gain must be equal to unity ($|A\beta| = 1$).
    *   $A$ is the gain of the active amplifying device (e.g., transistor).
    *   $\beta$ is the feedback factor (the fraction of the output signal fed back to the input).
2.  **Loop Phase Shift:** The total phase shift around the feedback loop must be an integer multiple of $360^\circ$ ($0^\circ$, $360^\circ$, $720^\circ$, etc.). This ensures that the feedback signal is in phase with the input signal, resulting in positive feedback.

**Mathematical Representation:**

The loop gain is given by $A\beta$. For oscillation:

*   $|A\beta| \ge 1$ (Often, for sustained oscillations, it's considered $|A\beta| = 1$ at the oscillation frequency. If $|A\beta| > 1$, oscillations grow exponentially until limited by non-linearity. If $|A\beta| < 1$, oscillations decay.)
*   $\angle A\beta = n \cdot 360^\circ$, where $n$ is an integer.

**Explanation of the Conditions:**

*   **Magnitude Condition ($|A\beta| = 1$):** If the loop gain magnitude is less than 1, any small disturbance in the circuit will eventually die out. If it's greater than 1, the amplitude of oscillations will grow uncontrollably until limited by the non-linear characteristics of the active device (e.g., saturation or cutoff in a transistor). Therefore, for stable, sustained oscillations, the magnitude of the loop gain must be exactly 1 at the desired oscillation frequency.

*   **Phase Condition ($\angle A\beta = n \cdot 360^\circ$):** This condition ensures that the feedback signal, when returned to the input of the amplifier, reinforces the original signal. A $360^\circ$ phase shift means the signal is effectively unchanged in phase. Since amplifiers themselves introduce some phase shift, the feedback network must compensate for this to achieve a total phase shift of $0^\circ$ or $360^\circ$.

**Practical Consideration:**

In practical oscillators, the gain of the amplifier ($A$) often varies with frequency. The feedback network ($\beta$) is designed to have a specific phase shift at a particular frequency, and its magnitude also varies with frequency. The combination of $A$ and $\beta$ creates a condition where $|A\beta|=1$ and $\angle A\beta = n \cdot 360^\circ$ at a specific frequency, which then becomes the oscillation frequency.

### 5. Role of Frequency Selective Networks

The frequency-selective network (e.g., LC tank circuit or RC phase-shift network) is crucial in an oscillator. It plays a dual role:

1.  **Provides the necessary phase shift** at a specific frequency to satisfy the phase criterion.
2.  **Determines the oscillation frequency** by resonating or exhibiting maximum/minimum impedance at that frequency.

### 6. Overcoming the "Start-up" Problem

The Barkhausen criterion $|A\beta| = 1$ describes sustained oscillations. However, to start oscillations, the loop gain must be slightly greater than 1 ($|A\beta| > 1$) initially. This allows any small noise voltage present in the circuit to be amplified and fed back. As the oscillations build up, the effective gain of the circuit (due to non-linearity of the active device) decreases until the condition $|A\beta| = 1$ is met, leading to stable, sustained oscillations.

**How amplitude stabilization occurs:**
When oscillations start, the amplifier's active device enters its non-linear region. For example, in a BJT amplifier, the base-emitter junction might be driven into forward bias, or the collector current might be limited by saturation. This non-linearity effectively reduces the amplifier's gain ($A$). The feedback network's gain ($\beta$) is generally independent of amplitude. Thus, as the amplitude increases, the product $|A\beta|$ decreases. Oscillation amplitude stabilizes when $|A\beta|$ reaches unity.

### 7. Importance of Negative Feedback (Indirectly)

While oscillators rely on positive feedback to oscillate, the design of the feedback network often draws from principles of negative feedback amplifier analysis. For instance, understanding how to achieve a desired phase shift or gain at a particular frequency is derived from feedback theory.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Textual References and Key Takeaways:

*   **Boylestad & Nashelsky (11th Ed.):** May discuss oscillators in the context of resonant circuits and their applications. Chapter 16 (Oscillators) is likely to cover the fundamental concepts of sinusoidal oscillators, including LC and RC types, and the conditions for oscillation.
*   **Sedra & Smith (6th Ed.):** Known for its detailed analysis of feedback circuits. Chapter 14 (Feedback) would establish the groundwork. Chapter 15 (Oscillators) will delve into the Barkhausen criterion, phase-shift and frequency-response characteristics of oscillators, and specific oscillator circuits like LC and RC oscillators, and crystal oscillators. They emphasize the stability of oscillation frequency.
*   **Bogart, Beasley, & Rico (6th Ed.):** Likely to provide a practical approach to oscillator circuits, explaining their operation and design considerations. Chapters on feedback and amplifier stabilization would be relevant, followed by dedicated sections on various oscillator types.

**Key Points to Remember:**

*   Oscillators generate signals without an external input.
*   They are essentially feedback amplifiers with positive feedback at a specific frequency.
*   **Barkhausen Criterion:** $|A\beta|=1$ and $\angle A\beta = n \cdot 360^\circ$.
*   The frequency-selective network determines the oscillation frequency and provides the necessary phase shift.
*   Non-linearity in the active device is crucial for amplitude stabilization.
*   Classification helps understand their characteristics and applications (sinusoidal vs. non-sinusoidal, LC vs. RC vs. Crystal).
*   **CO3: Apply the principles of feedback in the design of oscillators.** This topic directly addresses CO3 by demonstrating how feedback is manipulated to achieve oscillation.

### 9. Practice Questions and Exercises:

**Question 1:**
State the two conditions required for a feedback circuit to oscillate, as per the Barkhausen criterion.

**Answer:**
1.  The magnitude of the loop gain must be equal to unity ($|A\beta| = 1$).
2.  The total phase shift around the feedback loop must be an integer multiple of $360^\circ$ ($\angle A\beta = n \cdot 360^\circ$, where $n$ is an integer).

**Question 2:**
Explain why the loop gain must be *slightly greater than* unity initially for oscillations to start. How is amplitude stabilization achieved in practice?

**Answer:**
For oscillations to start, the loop gain must be slightly greater than unity ($|A\beta| > 1$) to amplify any small noise present in the circuit and build up the oscillation amplitude. Amplitude stabilization is achieved due to the non-linear characteristics of the active amplifying device. As the oscillation amplitude increases, the device enters its non-linear operating regions (e.g., saturation or cutoff), which effectively reduces the amplifier's gain. This reduction in gain counteracts the initial $|A\beta| > 1$ condition, bringing the loop gain back to unity, thus stabilizing the oscillation amplitude.

**Question 3:**
Differentiate between sinusoidal and non-sinusoidal oscillators. Give one example of each.

**Answer:**
*   **Sinusoidal Oscillators:** Produce an output waveform that closely resembles a sine wave. Example: Wien Bridge Oscillator, Colpitts Oscillator.
*   **Non-sinusoidal Oscillators:** Produce output waveforms that are not sinusoidal, such as square waves, triangular waves, or sawtooth waves. Example: Astable Multivibrator (produces a square wave).

**Question 4:**
What is the primary function of the frequency-selective network in an oscillator circuit?

**Answer:**
The primary function of the frequency-selective network is to determine the frequency at which oscillations occur by exhibiting a specific phase shift (to meet the Barkhausen criterion) and a resonant or peak response at that particular frequency.

---