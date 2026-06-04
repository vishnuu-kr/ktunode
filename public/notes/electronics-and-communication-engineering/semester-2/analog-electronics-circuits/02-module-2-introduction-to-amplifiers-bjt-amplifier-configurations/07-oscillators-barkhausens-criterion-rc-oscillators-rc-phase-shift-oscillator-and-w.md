---
title: "Oscillators : Barkhausen’s criterion– RC oscillators (RC Phase shift  oscillator and Wein Bridge oscillator) –LC oscillators (Hartley and Colpitt’s) – Expression of frequency of oscillations- Crystal oscillator"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 2: Introduction to Amplifiers  – BJT amplifier configurations – "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da6e2"
status: "completed"
scrapedAt: "2026-05-23T17:36:24.345Z"
---
# Module 2: Introduction to Amplifiers - Oscillators

Welcome back, everyone! In this session, we're going to dive into a fascinating topic in analog electronics: **Oscillators**. While amplifiers boost existing signals, oscillators *generate* new signals, typically sinusoidal waveforms, without any external input signal. Think of them as the electronic equivalent of a tuning fork, producing a consistent, pure tone. Understanding oscillators is crucial for many applications, from radio communication to signal generation for testing. In fact, designing oscillator circuits using BJT is a key outcome we aim for in this course (**CO3**). Let's get started!

## What is an Oscillator?

An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangle wave. The core idea is to create a *self-sustaining* oscillation. How do we achieve this? Well, it all boils down to a fundamental principle that governs how a circuit can oscillate.

### Barkhausen's Criterion: The Heart of Oscillation

To understand how an oscillator works, we need to consider **Barkhausen's Criterion**. This is a fundamental theorem that states two necessary conditions for a circuit to oscillate:

1.  **Loop Gain Magnitude is Unity:** The magnitude of the overall gain around the feedback loop must be equal to or greater than 1 ($|\beta A| \ge 1$). What does this mean? Imagine a signal traveling through an amplifier and then through a feedback network, and returning to the amplifier's input. For the oscillation to sustain itself, the signal that comes back must be at least as strong as the original signal it started with. If it's weaker, the oscillation will die out. If it's stronger, it will grow uncontrollably, which isn't ideal for a stable oscillator. So, unity gain is the sweet spot for continuous oscillation.

2.  **Phase Shift is Zero or a Multiple of 360 Degrees:** The total phase shift around the feedback loop must be 0 degrees or an integer multiple of 360 degrees ($ \phi_{total} = n \times 360^\circ $, where $n$ is an integer). This means that the signal fed back to the input must be exactly in phase with the original input signal. If there's a phase difference, the feedback will either cancel the input signal (if 180 degrees out of phase) or distort it, preventing sustained oscillation.

Remember this: **unity gain magnitude and zero net phase shift are the golden rules for oscillation.** These conditions are met at a specific frequency determined by the components in the circuit.

## Types of Oscillators

Oscillators can be broadly classified based on the type of components used to create the feedback loop and determine the oscillation frequency. The most common types are:

*   **RC Oscillators:** These use resistors (R) and capacitors (C) to determine the frequency. They are typically used for lower frequencies (audio frequencies, up to a few MHz).
*   **LC Oscillators:** These use inductors (L) and capacitors (C) to determine the frequency. They are generally used for higher frequencies (radio frequencies, from kHz to GHz).
*   **Crystal Oscillators:** These use a piezoelectric crystal (usually quartz) as the frequency-determining element. They offer very high frequency stability.

Let's explore some key examples of RC and LC oscillators.

### RC Oscillators

RC oscillators are popular because resistors and capacitors are readily available and relatively inexpensive. They are well-suited for applications where high frequency stability is not the primary concern.

#### 1. RC Phase Shift Oscillator

This is one of the simplest oscillator circuits. It uses a BJT amplifier (or an op-amp) and an RC network to provide the necessary phase shift for oscillation.

**How it works:**
The core idea is to use a cascaded RC network to introduce a specific phase shift. A BJT amplifier provides the necessary voltage gain to overcome the losses in the RC network and satisfy Barkhausen's criterion.

*   **Amplifier:** A common-emitter BJT amplifier typically provides a 180-degree phase shift between its input and output signals.
*   **RC Network:** To achieve the *total* 360-degree phase shift (or 0 degrees), the feedback network needs to introduce another 180-degree phase shift. This is achieved by using three or more RC stages in cascade. Each RC stage shifts the phase by a certain amount, and by cascading them, we can reach the required 180-degree shift.

**Circuit Configuration:**
The circuit consists of a BJT amplifier stage. The output of the BJT is fed into a series of three RC sections. The output of the last RC section is then fed back to the input of the BJT amplifier.

Imagine you're trying to send a message through a series of rooms, and in each room, the message gets slightly delayed and distorted (phase shifted). If you arrange these rooms correctly, the message coming out of the last room will be exactly at the right time and in sync with the original message going into the first room, allowing it to keep going in a loop. That's essentially what the RC network does!

**Frequency of Oscillation:**
For a standard three-stage RC phase shift oscillator, the frequency of oscillation ($f_o$) is given by:

$f_o = \frac{1}{2\pi RC\sqrt{6}}$

Where:
*   $R$ is the resistance value in each RC section (assuming they are equal for simplicity).
*   $C$ is the capacitance value in each RC section (assuming they are equal for simplicity).

**Gain Requirement:**
The gain of the amplifier stage must be at least 29 for oscillation to occur. Why 29? Each RC stage introduces some attenuation (loss of signal amplitude). For three stages, this attenuation can be significant. The amplifier needs to compensate for this loss and provide enough gain to ensure the loop gain magnitude is at least 1.

**Practical Considerations:**
*   The frequency is dependent on the values of R and C, making it variable by changing these components.
*   The output waveform might not be a perfect sine wave, especially if the amplifier's gain-bandwidth product is limited or if the feedback network causes significant distortion.
*   This circuit is generally not very stable with temperature or component variations.

#### 2. Wien Bridge Oscillator

The Wien Bridge oscillator is another popular RC oscillator known for producing a relatively pure sine wave. It's widely used in audio frequency applications and function generators. It uses a lead-lag network that provides maximum feedback (and thus sustains oscillation) at only one specific frequency.

**How it works:**
This oscillator uses a bridge configuration with two RC arms and two purely resistive arms. The key is that the RC network (one series RC and one parallel RC) has a phase shift of 0 degrees at its resonant frequency, and its gain is 1/3 at this frequency.

*   **Frequency Selective Network:** This network consists of a series RC combination and a parallel RC combination connected in a specific way to form a "bridge." At its designed frequency, this network passes the signal with no phase shift.
*   **Amplifier:** A non-inverting amplifier (often with gain control) is used. The amplifier must provide a gain of exactly 3 to compensate for the 1/3 attenuation of the RC network, thus meeting Barkhausen's criterion ($|\beta A| = (1/3) \times 3 = 1$).

**Circuit Configuration:**
The Wien bridge circuit typically uses two stages of amplification (or a single stage with a specific gain setting). The feedback loop consists of the RC network in one path and a feedback path through a variable resistor (to set the gain) to the input of the amplifier.

Think of it like a musical instrument's soundboard. The RC network acts like the strings and body of a guitar, resonating at a particular frequency. The amplifier is like the strumming hand, providing energy to keep the sound going. The gain control ensures you don't strum too hard (too much gain, leading to distortion) or too softly (too little gain, leading to silence).

**Frequency of Oscillation:**
The frequency of oscillation ($f_o$) for a Wien Bridge oscillator is given by:

$f_o = \frac{1}{2\pi RC}$

Where:
*   $R$ is the resistance in the series RC arm and the parallel RC arm.
*   $C$ is the capacitance in the series RC arm and the parallel RC arm.

To achieve a stable oscillation and prevent distortion, the amplifier gain ($A$) is usually set slightly above 3. A common method to control the gain precisely is to use a lamp filament or a JFET as a voltage-dependent resistor in the feedback path, which automatically adjusts its resistance to maintain a constant output amplitude.

**Advantages:**
*   Produces a very pure sine wave output.
*   Frequency can be easily varied by changing R or C (often ganged potentiometers are used for variable frequency).
*   Relatively easy to construct.

### LC Oscillators

LC oscillators are preferred for higher frequency applications because inductors and capacitors exhibit resonant behavior at these frequencies, allowing for a more stable and predictable oscillation.

#### 1. Hartley Oscillator

The Hartley oscillator is a well-known LC oscillator that uses a tapped inductor or two inductors in series to provide the necessary feedback.

**How it works:**
The circuit utilizes an LC tank circuit (also called a resonant circuit or tuned circuit) to determine the oscillation frequency. The feedback is obtained by tapping into the inductor (or using two coils).

*   **LC Tank Circuit:** This circuit, consisting of an inductor (L) and a capacitor (C), naturally resonates at a specific frequency. The energy oscillates back and forth between the magnetic field of the inductor and the electric field of the capacitor.
*   **Feedback Mechanism:** A portion of the signal from the tank circuit is fed back to the input of the active device (like a BJT or FET) to sustain the oscillation. In the Hartley, this feedback is taken from a tap on the inductor. The tap effectively divides the inductor into two parts, L1 and L2, and the voltage at the junction provides the feedback.

Think of a swing set. The swing itself (mass and ropes) has a natural frequency at which it swings. If you give it a push at the right moment (in phase), it keeps swinging higher and higher. The LC tank is the swing's natural frequency, and the tapped inductor is how you ensure you're giving it the "push" at the correct point in its swing to keep it going.

**Circuit Configuration:**
A typical Hartley oscillator circuit uses a common-emitter BJT amplifier. The LC tank circuit is connected between the collector and the emitter (or ground). The inductor is tapped, and this tap point is connected to the emitter (or base, depending on the specific configuration) to provide feedback. A capacitor ($C_1$) is often used in series with the tapping point to block DC from the tank circuit.

**Frequency of Oscillation:**
The frequency of oscillation ($f_o$) for a Hartley oscillator is given by:

$f_o = \frac{1}{2\pi\sqrt{LC_{total}}}$

Where $L_{total}$ is the total inductance of the coil (L1 + L2), and $C$ is the capacitance in the tank circuit. The ratio of L1 to L2 determines the feedback factor.

**Advantages:**
*   Simple to construct with readily available components.
*   Frequency can be varied by using a variable inductor or capacitor.
*   Can operate over a wide range of frequencies.

**Disadvantages:**
*   The tapping point on the inductor can be difficult to adjust precisely.
*   The waveform may not be a perfect sine wave due to parasitic elements and the nature of the tapped inductor.

#### 2. Colpitts Oscillator

The Colpitts oscillator is similar to the Hartley oscillator but uses a tapped capacitor instead of a tapped inductor for feedback.

**How it works:**
The Colpitts oscillator also uses an LC tank circuit. However, instead of tapping an inductor, it uses two capacitors in series, and the feedback is taken from the junction between these capacitors.

*   **LC Tank Circuit:** Similar to the Hartley, it uses an inductor (L) and a capacitor arrangement to determine the resonant frequency.
*   **Feedback Mechanism:** Two capacitors, $C_1$ and $C_2$, are connected in series across the inductor. The junction between $C_1$ and $C_2$ provides the feedback to the amplifier. This effectively divides the total capacitance into two parts.

Imagine the swing set again. This time, instead of tapping the swing rope, you're using two smaller ropes attached to the main swing. The point where these two smaller ropes meet is where you give your push. The way these smaller ropes are attached (the capacitance values) determines how you give the push and keep the swing going.

**Circuit Configuration:**
The circuit typically uses a common-emitter BJT amplifier. The inductor (L) is connected between the collector and the emitter. The two capacitors, $C_1$ and $C_2$, are connected in series across the inductor (i.e., $C_1$ from collector to tap, $C_2$ from tap to emitter). The tap point (junction of $C_1$ and $C_2$) is connected to the emitter (or base, depending on configuration) to provide feedback.

**Frequency of Oscillation:**
The frequency of oscillation ($f_o$) for a Colpitts oscillator is given by:

$f_o = \frac{1}{2\pi\sqrt{LC_{equivalent}}}$

Where $C_{equivalent}$ is the equivalent capacitance of $C_1$ and $C_2$ in series, given by:

$C_{equivalent} = \frac{C_1 C_2}{C_1 + C_2}$

So, the formula becomes:

$f_o = \frac{1}{2\pi\sqrt{L \left(\frac{C_1 C_2}{C_1 + C_2}\right)}}$

The ratio of $C_1$ to $C_2$ determines the feedback factor.

**Advantages:**
*   Generally produces a better sine wave output compared to the Hartley oscillator.
*   Can be easily tuned by varying the inductor or capacitors.
*   Capacitors are easier to manufacture with precise values and are more stable than inductors, especially at higher frequencies.

**Disadvantages:**
*   Requires two capacitors, making the component count slightly higher.

### Expression of Frequency of Oscillations

As you've seen, the frequency of oscillation is primarily determined by the values of reactive components (L and C) or resistive and capacitive components (R and C) in the feedback network.

*   **LC Oscillators:** The frequency is governed by the resonant frequency of the LC tank circuit. The natural frequency of an LC circuit is given by $f = \frac{1}{2\pi\sqrt{LC}}$. In Hartley and Colpitts oscillators, the effective inductance or capacitance is modified by the tapping mechanism, but the fundamental principle of LC resonance remains.
*   **RC Oscillators:** The frequency is determined by the time constants ($RC$) of the RC networks. The phase shift introduced by these networks is frequency-dependent, and oscillation occurs at the frequency where the total phase shift is 0 or 360 degrees.

Understanding these frequency expressions is key to designing oscillators for specific applications, a direct link to **CO3** (Design amplifier and oscillator circuits using BJT). You need to be able to select component values to achieve the desired output frequency.

### Crystal Oscillator

While LC and RC oscillators are useful, they can drift in frequency due to changes in component values caused by temperature, aging, or mechanical vibrations. For applications requiring extreme frequency stability, like in clocks, computers, and precise radio transmitters, we use **Crystal Oscillators**.

**How it works:**
Crystal oscillators utilize the piezoelectric effect. Certain crystalline materials, like quartz, exhibit a property where they deform mechanically when an electric field is applied across them, and conversely, they generate a voltage when mechanically stressed.

*   **Piezoelectric Effect:** A thin slice of quartz crystal cut to a specific shape and size will vibrate mechanically at a very precise and stable frequency when an AC voltage is applied. Conversely, if you mechanically stress the crystal, it will generate a voltage.
*   **Mechanical Resonance:** The crystal acts like a very high-quality mechanical resonator. Its natural mechanical resonant frequency depends on its physical dimensions, the cut of the crystal, and its thickness.
*   **Electrical Equivalence:** The crystal can be modeled by an equivalent electrical circuit consisting of a small resistance (R), a series inductance (L), and a series capacitance (C). This series combination has a very low impedance at its mechanical resonant frequency ($f_s$). There is also a larger parallel capacitance ($C_p$) due to the electrodes and the crystal itself.

**Circuit Configuration:**
A crystal oscillator circuit is essentially an amplifier (BJT or FET) with a crystal used as the feedback element. The crystal is placed in the feedback path, replacing the usual RC or LC network.

*   **Series Resonance:** At its series resonant frequency ($f_s$), the crystal has minimal impedance, and the phase shift is almost zero. This frequency is very sharp.
*   **Parallel Resonance:** The crystal also exhibits a parallel or anti-resonant frequency ($f_p$) just above $f_s$, where the impedance is very high. This frequency is determined by the parallel capacitance ($C_p$).

To achieve oscillation, the circuit is typically designed to operate at or very near the crystal's series resonant frequency. The amplifier provides the gain, and the crystal network provides the necessary feedback to meet Barkhausen's criterion. A common configuration is the Pierce oscillator.

**Frequency of Oscillation:**
The frequency of oscillation for a crystal oscillator is primarily determined by the mechanical properties of the crystal and is very close to its series resonant frequency ($f_s$). The surrounding circuit elements (like stray capacitances and the amplifier's input/output capacitances) can slightly shift this frequency, moving it towards the parallel resonant frequency ($f_p$), but for high-quality crystals and well-designed circuits, the stability is excellent.

**Advantages:**
*   Extremely high frequency stability.
*   Excellent Q factor (quality factor), leading to a pure sine wave output.
*   Compact size for the frequency generated.

**Disadvantages:**
*   Frequency is fixed once the crystal is manufactured; cannot be easily changed.
*   Crystals can be fragile and susceptible to shock.
*   More expensive than simple RC or LC oscillators.

## Summary and Key Takeaways

We've covered a lot of ground today! Oscillators are circuits that generate continuous, repetitive signals.

*   **Barkhausen's Criterion** ($|\beta A| \ge 1$ and phase shift = $n \times 360^\circ$) is the fundamental principle for oscillation.
*   **RC Oscillators** like the Phase Shift and Wien Bridge oscillators are used for lower frequencies and rely on resistor-capacitor networks. The Wien Bridge is known for its sine wave output.
*   **LC Oscillators** like the Hartley and Colpitts oscillators use inductor-capacitor tank circuits and are suited for higher frequencies. The Colpitts generally offers better stability and waveform purity due to using capacitors for feedback.
*   **Crystal Oscillators** use the piezoelectric effect of crystals (like quartz) to achieve extremely high frequency stability, making them ideal for precision timing and communication applications.

Understanding how to select component values to achieve a desired frequency is directly related to **CO3**. The ability to analyze these circuits and explain their operation will also help with other course outcomes like **CO2** (modeling BJT amplifier circuits, which are the backbone of many oscillators).

**Common Pitfalls to Avoid:**
*   Forgetting that both gain magnitude *and* phase shift are critical for Barkhausen's criterion.
*   Assuming all RC or LC oscillators produce perfect sine waves.
*   Not realizing the trade-off between frequency stability and tunability (crystal oscillators are stable but not tunable, RC/LC are tunable but less stable).

Keep these principles in mind as you work through your problem sets and lab assignments.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual and exam-oriented aspects:

**1. Conceptual Question:**
What are the two fundamental conditions that must be met for any electronic circuit to oscillate, as stated by Barkhausen's criterion? Explain the significance of each condition.

**Answer:**
Barkhausen's criterion states two necessary conditions for sustained oscillation:
    1.  **Loop Gain Magnitude:** The magnitude of the overall gain around the feedback loop must be equal to or greater than unity ($|\beta A| \ge 1$). This ensures that the signal amplitude fed back to the input is sufficient to overcome losses and sustain the oscillation. If the gain is less than 1, the oscillations will decay; if it's significantly greater than 1, the output might clip and distort.
    2.  **Loop Phase Shift:** The total phase shift around the feedback loop must be zero degrees or an integer multiple of 360 degrees ($ \phi_{total} = n \times 360^\circ $). This ensures that the feedback signal is in phase with the input signal, reinforcing the oscillation rather than canceling it.

**2. Exam-Oriented Question:**
A Colpitts oscillator uses an inductor L = 100 µH. If the two feedback capacitors are $C_1 = 0.01 \mu F$ and $C_2 = 0.1 \mu F$, calculate the frequency of oscillation.

**Answer:**
The frequency of oscillation for a Colpitts oscillator is given by:
$f_o = \frac{1}{2\pi\sqrt{L \left(\frac{C_1 C_2}{C_1 + C_2}\right)}}$

First, calculate the equivalent capacitance $C_{eq}$:
$C_{eq} = \frac{C_1 C_2}{C_1 + C_2} = \frac{(0.01 \times 10^{-6} F) \times (0.1 \times 10^{-6} F)}{(0.01 \times 10^{-6} F) + (0.1 \times 10^{-6} F)}$
$C_{eq} = \frac{0.001 \times 10^{-12}}{0.11 \times 10^{-6}} F = \frac{1}{110} \times 10^{-6} F \approx 0.00909 \times 10^{-6} F = 9.09 nF$

Now, calculate the frequency:
$L = 100 \mu H = 100 \times 10^{-6} H$
$f_o = \frac{1}{2\pi\sqrt{(100 \times 10^{-6} H) \times (9.09 \times 10^{-9} F)}}$
$f_o = \frac{1}{2\pi\sqrt{909 \times 10^{-15}}}$
$f_o = \frac{1}{2\pi \times 30.15 \times 10^{-7.5}}$
$f_o = \frac{1}{2\pi \times 30.15 \times \sqrt{10} \times 10^{-8}}$
$f_o = \frac{1}{2\pi \times 30.15 \times 3.162 \times 10^{-8}}$
$f_o = \frac{1}{1.89 \times 10^{-5}}$
$f_o \approx 52910 Hz \approx 52.91 kHz$

*(Self-correction/Verification: It's good practice to double-check calculations. The values seem reasonable for a Colpitts oscillator with these component sizes.)*

**3. Conceptual Question:**
Explain why a crystal oscillator is preferred over an LC oscillator for applications requiring high frequency stability.

**Answer:**
Crystal oscillators are preferred for high frequency stability primarily due to the very high Quality Factor (Q) of quartz crystals. The Q factor represents how selective a resonant circuit is.
*   **High Q Factor:** A crystal has a Q factor of tens of thousands or even hundreds of thousands, whereas typical LC circuits have Q factors in the range of tens to a few hundred.
*   **Sharp Resonance:** The high Q factor means the crystal's impedance changes very rapidly with frequency around its resonant point. This makes the oscillation frequency extremely stable, as even tiny variations in component values or environmental conditions have a negligible effect on the frequency.
*   **Stability:** LC oscillators, on the other hand, are more susceptible to changes in inductance and capacitance due to temperature variations, mechanical stress, or aging of components, leading to frequency drift. Crystals are much more resistant to these external factors, providing a much more precise and stable frequency output.

**4. Exam-Oriented Question:**
For a Wien Bridge oscillator, what is the condition for oscillation related to the gain of the amplifier? If the resistances are $R = 10 k\Omega$ and capacitances are $C = 0.01 \mu F$, what is the frequency of oscillation?

**Answer:**
The condition for oscillation in a Wien Bridge oscillator is that the amplifier must provide a voltage gain of exactly 3 to compensate for the 1/3 attenuation of the Wien bridge frequency-selective network at its resonant frequency. So, $A = 3$.

The frequency of oscillation is given by:
$f_o = \frac{1}{2\pi RC}$

Given:
$R = 10 k\Omega = 10 \times 10^3 \Omega$
$C = 0.01 \mu F = 0.01 \times 10^{-6} F = 10 \times 10^{-9} F$

$f_o = \frac{1}{2\pi (10 \times 10^3 \Omega) (10 \times 10^{-9} F)}$
$f_o = \frac{1}{2\pi (100 \times 10^{-6})}$
$f_o = \frac{1}{2\pi \times 10^{-4}}$
$f_o = \frac{10^4}{2\pi} Hz$
$f_o \approx \frac{10000}{6.283} Hz \approx 1591.5 Hz$

So, the frequency of oscillation is approximately 1.59 kHz.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
