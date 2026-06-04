---
title: "AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0d8"
status: "completed"
scrapedAt: "2026-05-23T17:34:22.057Z"
---
# Module 2: Electromagnetic Induction - AC Circuits: Phasor Representation of Sinusoidal Quantities

Welcome, everyone, to our dive into the fascinating world of AC circuits! We've already touched upon the basics of electromagnetism, and now we're going to see how those principles translate into how we generate, transmit, and utilize alternating current (AC) – the backbone of our modern electrical systems. Think about the power in your homes, the electricity that runs your phones, your laptops, your lights – it's all AC!

In this section, we're going to focus on a very powerful tool that engineers use to analyze these AC circuits: **phasor representation**. It's how we simplify complex AC waveforms and make them behave much like the DC circuits we're perhaps more familiar with.

### 1. Why AC? A Quick Recap

Before we jump into phasors, let's quickly remind ourselves why AC is so prevalent. Remember from our earlier discussions on electromagnetic induction (like in Faraday's Law), that rotating a coil in a magnetic field naturally produces a voltage that changes direction periodically. This is the essence of AC. The big advantage of AC, and why it won out for long-distance power transmission, is its ability to be easily stepped up or down in voltage using **transformers**. This allows us to send power over long distances at very high voltages (reducing current and thus losses) and then step it down to safer, usable levels for our homes. It’s a pretty elegant solution, wouldn’t you agree? (Connects to CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits).

### 2. The Sinusoidal Nature of AC

At its heart, AC voltage and current are **sinusoidal**. This means they vary smoothly and predictably over time, following a sine or cosine wave. A typical AC voltage waveform can be represented mathematically as:

$v(t) = V_m \sin(\omega t + \phi)$

Where:
*   $v(t)$: is the instantaneous voltage at time $t$.
*   $V_m$: is the **peak amplitude** or maximum voltage. This is the highest value the voltage reaches.
*   $\omega$: is the **angular frequency** in radians per second. It's related to the regular frequency ($f$) we often talk about (like 50 Hz or 60 Hz) by $\omega = 2\pi f$.
*   $t$: is time.
*   $\phi$: is the **phase angle** (or phase shift) in radians or degrees. This tells us where in its cycle the waveform is at $t=0$.

Similarly, AC current can be represented as:

$i(t) = I_m \sin(\omega t + \theta)$

Where $I_m$ is the peak current amplitude and $\theta$ is the phase angle for the current.

**Why is this important?** Well, these sinusoidal functions can be a bit cumbersome to work with directly when analyzing circuits with resistors, inductors, and capacitors, especially when dealing with multiple AC sources or components that shift the timing of the voltage and current. This is where our next tool comes in.

### 3. Introducing Phasors: Simplifying AC Analysis

Imagine you're trying to describe the motion of a pendulum. You could write down complex equations for its position and velocity at every instant. Or, you could simply describe its amplitude and how "out of sync" it is with another pendulum. Phasors are like that second approach for AC circuits.

A **phasor** is a rotating vector that represents a sinusoidal quantity. It captures both the magnitude (amplitude or RMS value) and the phase angle of the sinusoid. The key idea is that if we know the *magnitude* and *phase* of a sinusoidal voltage or current, we can represent it as a single complex number. Adding and subtracting these complex numbers is mathematically much simpler than adding and subtracting trigonometric functions.

This is a fundamental concept taught in many introductory electrical engineering texts, such as D. P. Kothari and I. J. Nagrath's "Basic Electrical Engineering," where they highlight how phasors transform differential equations into algebraic ones. (Reference: Kothari & Nagrath, Chapter on AC Circuits).

### 4. The Mathematical Forms of Phasors

Now, how do we actually write down these complex numbers that represent our sinusoids? There are several ways, and understanding each is crucial for tackling AC circuit problems.

#### 4.1. Trigonometric Form (Back to the Basics)

This is where we start, with the time-domain representation we saw earlier:

$v(t) = V_m \sin(\omega t + \phi)$

While this shows how the voltage changes with time, it’s not very convenient for circuit analysis directly. We need a snapshot that tells us about the amplitude and phase *at a glance*.

#### 4.2. Rectangular Form: The "Real" and "Imaginary" Parts

Think of a 2D plane, like a graph. We can represent a quantity using its horizontal (real) component and its vertical (imaginary) component. For phasors, we use **complex numbers** of the form:

$V = a + jb$

Where:
*   $a$ is the **real part**.
*   $b$ is the **imaginary part**.
*   $j$ is the imaginary unit, where $j^2 = -1$. (In electrical engineering, we use 'j' instead of 'i' to avoid confusion with current.)

How does this relate to our sinusoid? A sinusoid $V_m \sin(\omega t + \phi)$ can be related to the real or imaginary part of a complex exponential $V_m e^{j(\omega t + \phi)}$. However, for phasor analysis, we often simplify this. We can consider the phasor as representing the **amplitude and phase** at a specific reference time (often taken as $t=0$ or when the angle is zero).

If we have a sinusoid $V_m \sin(\omega t + \phi)$, we can represent its phasor in rectangular form as:

$V = V_m \cos(\phi) + j V_m \sin(\phi)$

Here, $V_m \cos(\phi)$ is the real part and $V_m \sin(\phi)$ is the imaginary part. This form is useful for adding or subtracting phasors algebraically, much like adding complex numbers in basic algebra.

**Example:** If a voltage is $v(t) = 10 \sin(\omega t + 30^\circ)$, its peak amplitude is $V_m = 10$ V and its phase is $\phi = 30^\circ$.
The rectangular form of its phasor would be:
$V = 10 \cos(30^\circ) + j 10 \sin(30^\circ)$
$V = 10 (\frac{\sqrt{3}}{2}) + j 10 (\frac{1}{2})$
$V = 8.66 + j 5$ V

This rectangular form helps us directly in circuit calculations. If you have two voltages, $V_1 = a_1 + jb_1$ and $V_2 = a_2 + jb_2$, their sum is simply $V_{total} = (a_1 + a_2) + j(b_1 + b_2)$. Easy, right? (Connects to CO1).

#### 4.3. Polar Form: Magnitude and Angle

This is often the most intuitive way to think about a phasor, as it directly represents the magnitude and phase angle. A phasor in polar form is written as:

$V = |V| \angle \theta$

Where:
*   $|V|$ is the **magnitude** of the phasor. This is usually the **RMS (Root Mean Square)** value of the voltage or current, *not* the peak value, unless specified otherwise. This is a common point of confusion, so remember: for AC circuit analysis, we typically use RMS values unless explicitly told to use peak values. The RMS value of a sinusoid $V_m \sin(\omega t + \phi)$ is $V_{rms} = \frac{V_m}{\sqrt{2}}$.
*   $\angle \theta$ indicates the **phase angle** of the phasor.

So, if our voltage was $v(t) = 10 \sin(\omega t + 30^\circ)$, the peak voltage is $V_m = 10$ V. The RMS voltage is $V_{rms} = \frac{10}{\sqrt{2}} \approx 7.07$ V. The phase angle is $\phi = 30^\circ$.

The phasor representation in polar form would be:

$V = 7.07 \angle 30^\circ$ V

Or, if the question uses peak values:

$V = 10 \angle 30^\circ$ V

It's critical to know whether you're working with peak or RMS values. Most circuit theorems and analysis techniques are derived using RMS values.

**Analogy:** Imagine describing a ship's position. You could give its coordinates (like rectangular form: "10 miles East, 5 miles North"). Or, you could say its distance and direction from a landmark ("7.07 miles away, at a bearing of 30 degrees"). Both describe the same position, but in different ways.

#### 4.4. Exponential Form: The "Rotation" Aspect

This form connects directly to Euler's formula and emphasizes the rotating nature of the phasor. Euler's formula states that $e^{j\theta} = \cos(\theta) + j \sin(\theta)$.

Using this, we can write the phasor for a sinusoid $V_m \cos(\omega t + \phi)$ as:

$V = V_m e^{j\phi}$

Or, for a sinusoid $V_m \sin(\omega t + \phi)$, if we consider the imaginary part of $V_m e^{j(\omega t + \phi)}$, the phasor can be represented as:

$V = V_m e^{j\phi}$ (where this $V_m$ and $\phi$ correspond to the sinusoid's peak and phase).

However, in standard AC circuit analysis, we often stick to representing the **magnitude and phase** of the sinusoid, usually using RMS values. So, the exponential form is often written as:

$V = V_{rms} e^{j\phi}$

Where $V_{rms}$ is the RMS magnitude and $\phi$ is the phase angle. This form is particularly useful in understanding AC power calculations and complex impedance.

#### 4.5. Converting Between Forms

The beauty of complex numbers is that we can easily convert between these forms:

*   **Rectangular to Polar:**
    Given $V = a + jb$
    Magnitude: $|V| = \sqrt{a^2 + b^2}$
    Phase Angle: $\theta = \arctan(\frac{b}{a})$ (Be careful with the quadrant here!)

*   **Polar to Rectangular:**
    Given $V = |V| \angle \theta$
    Real Part: $a = |V| \cos(\theta)$
    Imaginary Part: $b = |V| \sin(\theta)$

*   **Polar to Exponential:**
    Given $V = |V| \angle \theta$
    Exponential Form: $V = |V| e^{j\theta}$

*   **Exponential to Polar:**
    Given $V = |V| e^{j\theta}$
    Polar Form: $V = |V| \angle \theta$

*   **Exponential to Rectangular:**
    Given $V = |V| e^{j\theta}$
    Using Euler's formula: $V = |V| (\cos(\theta) + j \sin(\theta))$
    Which is $a = |V| \cos(\theta)$ and $b = |V| \sin(\theta)$

**Quick Recall Tip:** Think of the complex plane. The rectangular form $a+jb$ is like coordinates $(a, b)$. The polar form $|V| \angle \theta$ is like polar coordinates $(r, \alpha)$ where $r$ is the distance from the origin (magnitude) and $\alpha$ is the angle from the positive real axis (phase). The exponential form is just another way to write polar coordinates, emphasizing the $e^{j\theta}$ term which signifies rotation.

### 5. Phasors for AC Circuit Analysis

So, how do we *use* these phasors in a circuit?

1.  **Represent Voltages and Currents:** Convert all sinusoidal voltage and current sources into their phasor forms (usually RMS magnitude and phase angle).
2.  **Represent Impedances:** Resistors, inductors, and capacitors have specific phasor representations called **impedances**, denoted by $Z$.
    *   Resistor $R$: $Z_R = R$ (Impedance is purely real, same as resistance. Phase angle is 0.)
    *   Inductor $L$: $Z_L = j\omega L$ (Impedance is purely imaginary and positive. The voltage leads the current by 90°.)
    *   Capacitor $C$: $Z_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C}$ (Impedance is purely imaginary and negative. The current leads the voltage by 90°.)
3.  **Apply Circuit Laws:** Ohm's Law ($V=IR$) and Kirchhoff's Voltage Law (KVL) and Current Law (KCL) all apply directly to these phasors and impedances, just like they do for DC circuits with resistances!
    *   Ohm's Law in phasor form: $V = IZ$
    *   KVL: The sum of voltage phasors around a closed loop is zero.
    *   KCL: The sum of current phasors entering a node equals the sum of current phasors leaving it.

This is the magic! We turn differential equations involving sines and cosines into simple algebraic equations involving complex numbers. This makes analyzing series and parallel circuits, voltage dividers, current dividers, and more, incredibly manageable. This directly addresses CO1.

**Example:** Let's say we have a resistor $R=10\Omega$ in series with an inductor $L=0.05 H$ connected to an AC voltage source $v(t) = 141.4 \sin(377t + 45^\circ)$ V.

First, find the angular frequency: $\omega = 377$ rad/s.
Next, calculate the RMS voltage: $V_{rms} = \frac{141.4}{\sqrt{2}} \approx 100$ V.
The voltage phasor is $V = 100 \angle 45^\circ$ V.

Now, find the impedances:
$Z_R = R = 10 \Omega$ (or $10 \angle 0^\circ \Omega$)
$Z_L = j\omega L = j(377)(0.05) = j18.85 \Omega$ (or $18.85 \angle 90^\circ \Omega$)

The total impedance of the series circuit is $Z_{total} = Z_R + Z_L = 10 + j18.85 \Omega$.
To use this easily with the voltage phasor, let's convert $Z_{total}$ to polar form:
$|Z_{total}| = \sqrt{10^2 + 18.85^2} = \sqrt{100 + 355.32} = \sqrt{455.32} \approx 21.34 \Omega$
$\theta_Z = \arctan(\frac{18.85}{10}) = \arctan(1.885) \approx 62.05^\circ$
So, $Z_{total} = 21.34 \angle 62.05^\circ \Omega$.

Now, using Ohm's Law $I = V/Z$:
$I = \frac{100 \angle 45^\circ}{21.34 \angle 62.05^\circ} = \frac{100}{21.34} \angle (45^\circ - 62.05^\circ)$
$I \approx 4.686 \angle -17.05^\circ$ A

This current phasor tells us that the RMS current in the circuit is approximately 4.686 A, and it lags the voltage by 17.05 degrees. We can then convert this back to the time-domain if needed:
$i(t) \approx 4.686 \sqrt{2} \sin(377t - 17.05^\circ)$ V
$i(t) \approx 6.63 \sin(377t - 17.05^\circ)$ A

See how much cleaner that is than manipulating trigonometric functions throughout? This is a powerful technique that forms the basis for much of AC circuit analysis, from simple circuits to complex power systems.

### 6. Connecting to Course and Learning Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** This entire topic is geared towards achieving CO1. Phasors allow us to apply Ohm's Law and KVL/KCL directly to AC circuits, transforming them into algebraic problems with complex numbers. Understanding the different forms (trigonometric, rectangular, polar, exponential) is key to applying these laws correctly.
*   **Underlying Principles:** The representation of sinusoidal quantities in different forms stems from the fundamental nature of AC signals generated by induction, as discussed in the broader context of Module 2.

### 7. Common Pitfalls and Exam Focus

*   **RMS vs. Peak Values:** This is the most common mistake! Always check if the source values are given as peak or RMS and use the appropriate value for your phasor magnitude. If given peak, convert to RMS for calculations unless the problem specifically asks for peak results.
*   **Phase Angles:** Be meticulous with phase angles, especially during calculations involving addition/subtraction (rectangular form) or division/multiplication (polar/exponential form). Pay attention to the signs and quadrants when converting between forms.
*   **Impedance Formulas:** Memorize the impedance formulas for R, L, and C, and how to convert them between rectangular and polar forms.
*   **Conversions:** Practice converting between rectangular, polar, and exponential forms. You'll use these tools constantly.
*   **Trigonometric vs. Phasor Domain:** Understand that the trigonometric form describes the signal over time, while the phasor form is a "snapshot" representation of its magnitude and phase.

### Sample Questions with Answers

**Q1: A sinusoidal voltage is given by $v(t) = 200 \sin(1000t + 60^\circ)$ V. Represent this voltage as a phasor in (a) rectangular form and (b) polar form, using RMS values.**

**Answer:**
First, identify the peak voltage and phase: $V_m = 200$ V, $\phi = 60^\circ$.
The angular frequency is $\omega = 1000$ rad/s.

Calculate the RMS voltage: $V_{rms} = \frac{V_m}{\sqrt{2}} = \frac{200}{\sqrt{2}} \approx 141.4$ V.

(a) **Rectangular Form:**
We use $V = V_{rms} \cos(\phi) + j V_{rms} \sin(\phi)$.
$V = 141.4 \cos(60^\circ) + j 141.4 \sin(60^\circ)$
$V = 141.4 (0.5) + j 141.4 (0.866)$
$V = 70.7 + j122.4$ V

(b) **Polar Form:**
The magnitude is the RMS value, and the angle is the phase angle.
$V = V_{rms} \angle \phi$
$V = 141.4 \angle 60^\circ$ V

**Q2: A sinusoidal current is described by its phasor $I = 5 \angle -30^\circ$ A. If this current flows through a resistor of $R = 4 \Omega$, what is the voltage across the resistor in time-domain (trigonometric form)? Assume the current phasor uses RMS values.**

**Answer:**
We are given the current phasor $I = 5 \angle -30^\circ$ A (RMS).
The resistance is $R = 4 \Omega$. The impedance of a resistor is $Z_R = R = 4 \Omega$ (or $4 \angle 0^\circ \Omega$).

Using Ohm's Law for phasors, $V = I \times Z$.
$V = (5 \angle -30^\circ \text{ A}) \times (4 \angle 0^\circ \Omega)$
$V = (5 \times 4) \angle (-30^\circ + 0^\circ)$
$V = 20 \angle -30^\circ$ V

This is the voltage phasor in polar form (RMS magnitude and phase).
The RMS voltage is $V_{rms} = 20$ V.
The phase angle is $\phi = -30^\circ$.

To convert this to the time-domain trigonometric form $v(t) = V_m \sin(\omega t + \phi)$, we first need the peak voltage.
$V_m = V_{rms} \times \sqrt{2} = 20 \times \sqrt{2} \approx 28.28$ V.

Assuming a general angular frequency $\omega$ for the original sinusoidal current, the voltage will also have the same angular frequency.
So, $v(t) = V_m \sin(\omega t + \phi)$
$v(t) = 28.28 \sin(\omega t - 30^\circ)$ V

**Q3: Convert the complex number $Z = 3 + j4$ to polar form and exponential form.**

**Answer:**
We are given $Z = 3 + j4$. This is in rectangular form $a + jb$, where $a=3$ and $b=4$.

**Polar Form:**
Magnitude: $|Z| = \sqrt{a^2 + b^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
Phase Angle: $\theta = \arctan(\frac{b}{a}) = \arctan(\frac{4}{3})$.
Using a calculator, $\arctan(4/3) \approx 53.13^\circ$.
So, the polar form is $Z = 5 \angle 53.13^\circ$.

**Exponential Form:**
Using the polar form, the exponential form is $Z = |Z| e^{j\theta}$.
$Z = 5 e^{j53.13^\circ}$ (or $5 e^{j0.927 \text{ radians}}$).

This covers the core concepts of representing sinusoidal AC quantities using phasors in their various forms, which is fundamental for all subsequent AC circuit analysis. Keep practicing these conversions and applications!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
