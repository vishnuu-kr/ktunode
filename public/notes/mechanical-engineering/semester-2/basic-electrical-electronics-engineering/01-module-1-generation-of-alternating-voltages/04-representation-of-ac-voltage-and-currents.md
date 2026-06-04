---
title: "Representation of ac voltage and currents"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e83679"
status: "completed"
scrapedAt: "2026-05-20T17:41:09.685Z"
---
# Module 1: Generation of Alternating Voltages

## Topic: Representation of AC Voltage and Currents

Welcome, everyone! Today, we embark on our journey into the fascinating world of alternating voltages and currents, or AC as we commonly call it. You've likely encountered AC all around you – it's what powers your lights, your fans, and most of your household appliances. Unlike direct current (DC), which flows in a constant direction (think of a battery), AC voltage and current continuously change their magnitude and direction. This constant change is what makes AC so useful for power transmission over long distances, but it also means we need specific ways to represent and analyze it.

Our primary goal today is to understand *how* we represent these changing AC voltages and currents. This is crucial for everything we'll do later in circuit analysis, power generation, and understanding electronic devices.

***

### Why AC? A Quick Revisit

Before we dive into the "how," let's quickly touch upon the "why." Remember how we generate AC voltage, perhaps using a rotating coil in a magnetic field? This inherent rotation means the voltage or current produced is sinusoidal. This sinusoidal nature is key.

Think about it: when a coil spins, the rate at which it cuts magnetic flux lines changes. It's zero when the coil is parallel to the flux, and maximum when it's perpendicular. This cyclical change naturally produces a waveform that rises, falls, reverses, and repeats – a sine wave. This is the fundamental building block of AC.

This understanding directly relates to **Course Outcome 2 (CO2): Develop an awareness on the fundamentals of electric power generation, transmission and distribution**. AC's ability to be stepped up and down efficiently using transformers (which we'll discuss later) makes it ideal for transmitting power over vast distances, minimizing losses. DC, on the other hand, is much harder to transform, making long-distance transmission inefficient.

***

### The Sinusoidal Nature: The Heart of AC

So, the most common form of AC we encounter is **sinusoidal**. This means the voltage or current can be described using a sine function, or sometimes a cosine function, which is just a sine wave shifted by 90 degrees.

Let's represent an AC voltage. We can write it as:

$v(t) = V_m \sin(\omega t + \phi)$

Where:

*   $v(t)$: This is the instantaneous voltage at any given time $t$. It's a function of time, signifying that the voltage is constantly changing.
*   $V_m$: This is the **peak value** or **amplitude** of the voltage. It’s the maximum positive or negative voltage the AC waveform reaches. Imagine the highest point your hand reaches when you wave it up and down – that's analogous to $V_m$. It's often measured in Volts (V).
*   $\omega$: This is the **angular frequency** of the waveform. It tells us how fast the voltage is oscillating. It's measured in radians per second (rad/s). We'll often relate this to frequency ($f$) in Hertz (Hz) using the fundamental relationship: $\omega = 2\pi f$. If you think of the wave as a spinning wheel, $\omega$ is how fast that wheel is spinning in terms of angles per second.
*   $t$: This is simply **time**.
*   $\phi$: This is the **phase angle** or **phase shift**. This is a very important concept! It tells us where the waveform starts its cycle relative to a reference point. Think of it like starting a song not exactly at the beginning, but a little bit into the melody. A phase angle of zero means the waveform starts at zero and is increasing. A positive phase angle means it starts at a point ahead of zero, and a negative phase angle means it starts behind zero. This is crucial when we compare two AC signals.

Similarly, for AC current, we can write:

$i(t) = I_m \sin(\omega t + \phi)$

Where $I_m$ is the peak value of the current.

This fundamental representation connects to **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. Understanding these parameters ($V_m$, $\omega$, $\phi$) is the very first step in analyzing any AC circuit. Without this, we're just looking at squiggly lines!

***

### Visualizing the Sinusoidal Waveform

Let's visualize this. Imagine plotting $v(t)$ against $t$.

*   **The Sine Wave:** It looks like a smooth, repeating "S" shape. It starts at zero, goes up to a maximum positive value ($V_m$), comes back down through zero to a maximum negative value ($-V_m$), and then returns to zero. This complete up-and-down cycle is one **period**.
*   **Peak Value ($V_m$):** The highest point on the graph.
*   **Time Period ($T$):** The time it takes for one complete cycle. It's related to frequency by $T = 1/f$. So, if the frequency is 50 Hz (like in India), it takes 1/50th of a second for one complete cycle.
*   **Frequency ($f$):** The number of cycles that occur in one second. Measured in Hertz (Hz). A 50 Hz AC supply means the voltage goes through 50 complete cycles every second.
*   **Angular Frequency ($\omega$):** As mentioned, $\omega = 2\pi f$. For 50 Hz, $\omega = 2\pi \times 50 = 100\pi$ rad/s.
*   **Phase Angle ($\phi$):** This is where things get interesting when we compare signals.

**Analogy for Phase:** Imagine two people walking on treadmills.
*   If they are in sync, their movements are identical, and their phase difference is zero.
*   If one person starts walking a step ahead of the other, they are "in phase."
*   If one person is already a few steps into their walk when the other starts, the second person is "behind" or has a negative phase shift relative to the first.
*   If the second person is already further along their walk when the first person starts, the second person is "ahead" or has a positive phase shift.

In AC circuits, when we have multiple AC voltages or currents, their phase relationships are critical for determining the overall behavior of the circuit. For example, in a circuit with a resistor and an inductor, the current will *lag* behind the voltage across the inductor. This means the current waveform reaches its peak *after* the voltage waveform reaches its peak. This lag is represented by a negative phase angle for the current relative to the voltage.

***

### Other Important Values to Represent AC

While the instantaneous value $v(t)$ gives us the complete picture over time, for practical analysis and comparison, we often use specific representative values. These are particularly important when dealing with power calculations and circuit behavior.

#### 1. Peak-to-Peak Value ($V_{pp}$ or $v_{pp}$)

This is simply the difference between the maximum positive peak and the maximum negative peak.

$V_{pp} = V_m - (-V_m) = 2V_m$

So, if the peak voltage is 10V, the peak-to-peak voltage is 20V. It tells you the total vertical span of the waveform.

#### 2. RMS Value (Root Mean Square)

This is arguably the *most important* value used to represent AC voltage and current for practical purposes, especially when dealing with power. The RMS value is the equivalent DC value that would produce the same amount of heat (power dissipation) in a resistor.

Let's break down the name:
*   **Root:** We take the square root of the mean of the squared values.
*   **Mean:** We average the squared values over a complete cycle.
*   **Square:** We first square the instantaneous values.

For a sinusoidal waveform like $v(t) = V_m \sin(\omega t)$, the RMS value, denoted as $V_{rms}$, is calculated as:

$V_{rms} = \frac{V_m}{\sqrt{2}}$

Similarly, for current:

$I_{rms} = \frac{I_m}{\sqrt{2}}$

**Why is RMS so important?** Think about powering a light bulb. If you have a 120V AC supply, this 120V is actually the RMS value. The actual instantaneous voltage is higher, reaching a peak of $120 \times \sqrt{2} \approx 170$V. But when we talk about the "voltage" of the supply, or when we calculate power, we use the RMS value because it directly relates to the power delivered.

**Power Connection:** The power dissipated in a resistor $R$ by an AC current $i(t)$ is given by $p(t) = i(t)^2 R$. If we average this over a cycle, the average power is $P_{avg} = I_{rms}^2 R$. Similarly, for voltage, $P_{avg} = \frac{V_{rms}^2}{R}$. This makes RMS values directly comparable to DC values in terms of power.

This concept is foundational for **CO1** and **CO2**. When we talk about a 230V AC supply, we mean 230V RMS. This RMS value is what engineers use for calculations involving power consumption and system design.

**Quick Recall Tip:** For sinusoidal AC, always remember the relationship: $V_{rms} = V_m / \sqrt{2}$ and $V_m = V_{rms} \times \sqrt{2}$. Or, approximately, $V_m \approx 1.414 \times V_{rms}$.

#### 3. Average Value (or Mean Value)

The average value of a sinusoidal waveform over a complete cycle is zero because the positive half-cycle exactly cancels out the negative half-cycle.

$V_{avg} = \frac{1}{T} \int_{0}^{T} v(t) dt$

For $v(t) = V_m \sin(\omega t)$, integrating over a full period gives zero.

However, sometimes we are interested in the average value of the *rectified* waveform, or the average of only the positive half-cycle. This is often called the **mean absolute value**. For a sine wave:

$V_{avg} = \frac{2}{\pi} V_m$

This value is roughly $0.637 V_m$. While less commonly used in general power analysis than RMS, it's important in specific applications, such as analyzing the output of half-wave or full-wave rectifiers (which you'll study later).

#### 4. Form Factor and Crest Factor

These are dimensionless ratios that describe the shape of the waveform.

*   **Form Factor (F):** The ratio of the RMS value to the average value.
    $F = \frac{V_{rms}}{V_{avg}}$
    For a sinusoidal waveform, $F = \frac{V_m/\sqrt{2}}{2V_m/\pi} = \frac{\pi}{2\sqrt{2}} \approx 1.11$.

*   **Crest Factor (C):** The ratio of the peak value to the RMS value.
    $C = \frac{V_m}{V_{rms}}$
    For a sinusoidal waveform, $C = \frac{V_m}{V_m/\sqrt{2}} = \sqrt{2} \approx 1.414$.

These factors help characterize the waveform's shape and are important when comparing different AC signals. For instance, a triangular wave will have different form and crest factors than a sinusoidal wave. This relates to **CO1** as understanding these factors helps in more advanced AC circuit analysis.

***

### Representing AC Quantities in Phasor Form

While the sinusoidal equations $v(t) = V_m \sin(\omega t + \phi)$ are comprehensive, they can be cumbersome for circuit analysis involving multiple components and phases. This is where the concept of **phasors** comes in, a powerful tool introduced by Charles Proteus Steinmetz.

A phasor is a rotating vector. For a sinusoidal quantity, we can represent it by a vector whose length is proportional to the quantity's RMS (or peak) value, and whose angle with a reference axis represents its phase angle.

*   **Phasor Representation:** A phasor can be represented in several ways:
    *   **Rectangular Form:** $V = a + jb$, where $a$ is the real part and $b$ is the imaginary part.
    *   **Polar Form:** $V = |V| \angle \theta$, where $|V|$ is the magnitude (usually RMS or peak value) and $\theta$ is the phase angle.
    *   **Exponential Form:** $V = |V| e^{j\theta}$

For AC circuit analysis, we typically use the RMS value for the magnitude and express the phase angle. So, a voltage $v(t) = V_m \sin(\omega t + \phi)$ can be represented by a phasor:

$V = \frac{V_m}{\sqrt{2}} \angle \phi = V_{rms} \angle \phi$

Similarly, current $i(t) = I_m \sin(\omega t + \phi)$ is represented by:

$I = \frac{I_m}{\sqrt{2}} \angle \phi = I_{rms} \angle \phi$

**Why Phasors?**
Phasors transform AC circuit analysis from dealing with differential equations (working with $v(t)$ and $i(t)$) into algebraic equations. This is a monumental simplification! When we add or subtract AC quantities with the same frequency, we can simply add or subtract their phasors. This is incredibly useful for calculating voltages and currents in complex circuits.

**Example:** Suppose we have two voltages:
$v_1(t) = 10 \sin(\omega t + 30^\circ)$
$v_2(t) = 8 \sin(\omega t - 15^\circ)$

Their phasor representations (using RMS values) would be:
$V_1 = \frac{10}{\sqrt{2}} \angle 30^\circ$
$V_2 = \frac{8}{\sqrt{2}} \angle -15^\circ$

If we needed to find the resultant voltage $v_3(t) = v_1(t) + v_2(t)$, we would first find the resultant phasor $V_3 = V_1 + V_2$ by performing vector addition on $V_1$ and $V_2$ in their rectangular forms. Then, we would convert $V_3$ back to polar form to get the RMS value and phase of $v_3(t)$, and from that, we can reconstruct the instantaneous form.

This phasor representation is a core concept for **CO1**. It's the gateway to solving AC circuits efficiently. You'll see how this simplifies calculations involving resistors, inductors, and capacitors.

***

### Representing AC Quantities with Waveforms (Beyond Pure Sine)

While sinusoidal AC is the most common, what if the waveform isn't a pure sine wave? Many electronic circuits, especially those dealing with digital signals or switching power supplies, produce non-sinusoidal waveforms like square waves, triangular waves, or sawtooth waves.

According to **Fourier's Theorem**, any periodic waveform can be represented as a sum of a fundamental sinusoidal frequency and its harmonics (integer multiples of the fundamental frequency).

$v(t) = A_0 + A_1 \sin(\omega t + \phi_1) + B_1 \cos(\omega t + \theta_1) + A_2 \sin(2\omega t + \phi_2) + \dots$

*   $A_0$: The DC component or average value.
*   $A_1 \sin(\omega t + \phi_1)$: The fundamental frequency component.
*   Higher terms ($A_n, B_n$): Harmonics, which are sinusoidal components at multiples of the fundamental frequency ($2\omega, 3\omega, 4\omega$, etc.).

For example, a **square wave** can be approximated by the sum of its fundamental sine wave and all its odd harmonics (sine and cosine terms). A **triangular wave** is composed of the fundamental and its odd harmonics, but with different amplitudes and phase relationships compared to a square wave.

**Why is this important?**
The harmonic content of a waveform affects its behavior in circuits. For instance, harmonics can cause extra heating in conductors and can interfere with sensitive electronic equipment. Understanding these representations is crucial for designing and troubleshooting systems that generate or process non-sinusoidal signals. This ties into **CO1** and also hints at aspects of **CO4** and **CO5** when considering signal processing.

**Visualizing Non-Sinusoidal:**
Imagine a pure sine wave as a perfectly smooth, gentle oscillation. A square wave is like switching abruptly from a high value to a low value and back, with instantaneous transitions. A triangular wave is like a smooth ramp up and then a smooth ramp down, repeating.

For these non-sinusoidal waveforms, we can still talk about:
*   **Peak Value:** The highest instantaneous value.
*   **Peak-to-Peak Value:** The difference between the highest and lowest instantaneous values.
*   **Average Value:** The true average over a cycle (could be non-zero if there's a DC offset).
*   **RMS Value:** Calculated by squaring the instantaneous values, averaging them over a cycle, and taking the square root. The formula $V_{rms} = V_m/\sqrt{2}$ is *only* for pure sine waves. For other waveforms, the RMS value needs to be calculated based on their specific mathematical expression.

**Example: Square Wave**
A symmetrical square wave that alternates between $+V_m$ and $-V_m$ has a peak value of $V_m$, peak-to-peak of $2V_m$, and an average value of 0. Its RMS value is simply $V_m$. Notice how different this is from a sine wave of the same peak value!

***

### Connecting to Course Outcomes

Let's explicitly link today's topic to our course objectives:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**
    *   Today we learned the basic mathematical representations ($v(t)$, $i(t)$) and key values (peak, RMS, average) that are essential for applying Kirchhoff's laws, Ohm's law, and power formulas in AC circuits. The phasor concept is the direct tool that enables solving complex AC circuits algebraically.
*   **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution**
    *   Understanding the RMS value is paramount here. It's the standard for AC power ratings and allows us to compare the heating effect of AC with DC. The sinusoidal nature of generated AC also explains why transformers work efficiently for voltage step-up/down for transmission.
*   **CO4: Describe the fundamental concepts of electronic components and devices**
    *   While we haven't discussed components yet, their behavior (e.g., how a capacitor or inductor reacts to AC) is fundamentally tied to the AC voltage and current waveforms they experience. The frequency of the AC signal (represented by $\omega$) is a critical parameter for component behavior.
*   **CO6: Identify important applications of modern electronics in the contemporary world**
    *   From the power grid to the signals in your smartphone, AC voltage and current, and their representations, are everywhere. Understanding these basic representations is the first step to appreciating how these modern systems function.

***

### Summary of Key Takeaways

*   AC voltage and current vary sinusoidally with time, described by $v(t) = V_m \sin(\omega t + \phi)$ and $i(t) = I_m \sin(\omega t + \phi)$.
*   Key parameters are peak value ($V_m, I_m$), angular frequency ($\omega$), and phase angle ($\phi$).
*   The **RMS value** is the most important for power calculations and representing the "effective" value of AC ($V_{rms} = V_m / \sqrt{2}$ for sine waves).
*   **Phasors** are rotating vectors that simplify AC circuit analysis by converting differential equations into algebraic ones, using RMS magnitude and phase angle.
*   Non-sinusoidal waveforms can be analyzed using Fourier series as a sum of sinusoids.

Remember, mastering these representations is like learning the alphabet before you can read a book. It’s the foundation upon which all further AC circuit theory is built.

***

### Sample Questions and Answers

**1. Question:** A sinusoidal AC voltage is given by $v(t) = 150 \sin(314t + 45^\circ)$ Volts. What are the peak voltage, frequency, and phase angle?

**Answer:**
*   **Peak Voltage ($V_m$):** This is the amplitude of the sine function, which is 150 V.
*   **Frequency ($f$):** The term inside the sine function is $\omega t$. So, $\omega = 314$ rad/s. Since $\omega = 2\pi f$, we have $f = \omega / (2\pi) = 314 / (2 \times 3.14159) \approx 314 / 6.283 \approx 50$ Hz.
*   **Phase Angle ($\phi$):** This is the constant added to $\omega t$ inside the sine function, which is $+45^\circ$ (or $\pi/4$ radians).

**Reasoning:** This question tests the direct understanding of the parameters in the sinusoidal voltage equation. Identifying $V_m$, $\omega$, and $\phi$ from the standard form $V_m \sin(\omega t + \phi)$ is straightforward. The calculation of frequency from angular frequency is a key relationship.

**2. Question:** For a sinusoidal AC voltage, if the RMS value is 230 V, what is its peak voltage?

**Answer:**
The relationship between RMS voltage ($V_{rms}$) and peak voltage ($V_m$) for a sinusoidal waveform is $V_{rms} = V_m / \sqrt{2}$.
Therefore, $V_m = V_{rms} \times \sqrt{2}$.
Given $V_{rms} = 230$ V,
$V_m = 230 \times \sqrt{2} \approx 230 \times 1.414 = 325.22$ V.

**Reasoning:** This is a direct application of the RMS to peak conversion formula. It highlights the practical significance of RMS values in everyday AC supplies (like mains voltage). Common pitfall: confusing RMS and peak values or using the wrong conversion factor.

**3. Question:** Explain why the RMS value is used for AC power calculations instead of the peak value.

**Answer:**
The RMS (Root Mean Square) value of an AC voltage or current is defined as the equivalent DC value that would produce the same amount of heat (power dissipation) in a given resistor. Power dissipated in a resistor is proportional to the square of the current ($P = I^2R$) or the square of the voltage ($P = V^2/R$). For AC, the instantaneous power $p(t) = v(t)^2/R$ or $p(t) = i(t)^2R$ fluctuates continuously. When we average this instantaneous power over a complete cycle, we find that the average power is $P_{avg} = V_{rms}^2/R = I_{rms}^2R$. This means that $V_{rms}$ and $I_{rms}$ directly relate to the power delivered by the AC source, making them the effective values for power calculations and comparisons with DC systems. Using the peak value would lead to an overestimation of the power.

**Reasoning:** This question probes the fundamental concept behind RMS values and their physical meaning in terms of power. It tests understanding of power dissipation and the averaging process for AC. Connecting RMS to the 'effective' value for heating effect is key.

**4. Question:** A sinusoidal voltage has a peak value of 300 V. If this voltage is applied to a resistor of 100 Ohms, calculate the RMS current and the average power dissipated.

**Answer:**
First, find the RMS voltage:
$V_{rms} = \frac{V_m}{\sqrt{2}} = \frac{300 \text{ V}}{\sqrt{2}} \approx 212.13 \text{ V}$

Next, calculate the RMS current using Ohm's Law (which applies to RMS values in AC circuits for resistive loads):
$I_{rms} = \frac{V_{rms}}{R} = \frac{212.13 \text{ V}}{100 \text{ } \Omega} \approx 2.121 \text{ A}$

Finally, calculate the average power dissipated:
$P_{avg} = V_{rms} \times I_{rms} = 212.13 \text{ V} \times 2.121 \text{ A} \approx 450 \text{ W}$
Alternatively, $P_{avg} = \frac{V_{rms}^2}{R} = \frac{(212.13 \text{ V})^2}{100 \text{ } \Omega} \approx \frac{45000}{100} \approx 450 \text{ W}$

**Reasoning:** This question combines multiple concepts: converting peak to RMS voltage and then applying Ohm's law for AC circuits (using RMS values) to find RMS current. It then requires calculating average power using the RMS values. This is a typical exam-style question that tests practical application of the concepts. It's important to use the RMS voltage, not the peak voltage, for these calculations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
