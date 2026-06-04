---
title: "AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction : Faraday's laws, Lenz's law"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c6c"
status: "completed"
scrapedAt: "2026-05-20T16:39:04.205Z"
---
## Introduction to Electrical and Electronics Engineering

### Module 2: Electromagnetic Induction: Faraday's Laws, Lenz's Law

#### Topic: AC Circuits: Phasor Representation of Sinusoidal Quantities

Hello everyone! Welcome back to our journey into the fascinating world of Electrical and Electronics Engineering. In Module 2, we've been exploring the fundamental principles of electromagnetic induction – how changing magnetic fields can create electric currents, and vice-versa. This understanding is crucial for almost everything we do in electrical engineering, from generating power to designing communication systems.

Today, we're going to shift our focus slightly to **AC circuits** and a very powerful tool for analyzing them: **phasor representation**. You might have encountered DC circuits where voltage and current are constant. But in the real world, much of the electricity we use, from the lights in your home to the signal coming from your phone, is alternating current (AC). AC signals constantly change their magnitude and direction over time. Trying to analyze these changing quantities using just their time-dependent equations can get complicated very quickly. That's where phasors come to our rescue!

**Why do we need a special way to represent AC quantities?**

Think about a simple AC voltage source. It might be described by a function like $v(t) = V_m \sin(\omega t + \phi)$. Here, $V_m$ is the peak voltage, $\omega$ is the angular frequency (how fast it's changing), $t$ is time, and $\phi$ is the phase angle (the starting point of the sine wave). To analyze circuits with multiple such sources and components like resistors, capacitors, and inductors, we'd have to work with these trigonometric functions and their derivatives/integrals all the time. It's like trying to describe the motion of a Ferris wheel by constantly tracking the height of each passenger with a trigonometric formula. It’s accurate, but cumbersome.

**Introducing the Phasor: A Smarter Way to See AC**

A phasor is essentially a **complex number** that represents the **amplitude** and **phase** of a sinusoidal quantity (like voltage or current) at a specific frequency. It allows us to convert complex differential equations in the time domain into simpler algebraic equations in the *phasor domain* (or frequency domain). This is a game-changer for circuit analysis.

Remember how Course Outcome 1 (CO1) states we need to "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits"? Phasors are one of the most fundamental and powerful tools for achieving this for AC circuits. They help us understand how different components affect AC signals and how these signals behave when combined.

So, how do we represent these sinusoidal quantities using phasors? We can look at them in a few different ways, all of which are connected. Let's start with the most basic form.

### 1. Trigonometric Form

This is the form we're most familiar with when describing a sine wave. For a voltage $v(t)$ or a current $i(t)$, it looks like this:

*   **Voltage:** $v(t) = V_m \cos(\omega t + \theta)$ or $v(t) = V_m \sin(\omega t + \phi)$
*   **Current:** $i(t) = I_m \cos(\omega t + \alpha)$ or $i(t) = I_m \sin(\omega t + \beta)$

Here:
*   $V_m$ or $I_m$ is the **amplitude** (peak value) of the voltage or current.
*   $\omega$ is the **angular frequency** in radians per second (rad/s). Remember that $\omega = 2\pi f$, where $f$ is the frequency in Hertz (Hz).
*   $t$ is **time**.
*   $\theta$, $\phi$, $\alpha$, $\beta$ are **phase angles**, indicating the starting position of the waveform at $t=0$.

**Think of it like this:** Imagine two people starting their jog on a circular track. Both jog at the same speed (same $\omega$). Person A starts exactly at the starting line ($\phi = 0$). Person B starts a little bit ahead of the line ($\phi = \pi/4$ or 45 degrees). The trigonometric form describes their position on the track at any given time $t$.

A crucial point to note here: the choice between sine and cosine depends on how we define our reference. Often, when dealing with AC power systems, cosine is used as the reference for voltage. However, sine is equally valid. The phase difference between two signals matters, not their absolute form (sine vs. cosine), as long as we are consistent.

### 2. Phasor Representation: Bridging Trigonometry and Complex Numbers

The phasor is derived from the trigonometric form. We can represent a sinusoidal quantity, say $v(t) = V_m \cos(\omega t + \phi)$, as a rotating vector in a complex plane. The length of this vector is the amplitude ($V_m$), and its angle with the positive real axis at any time $t$ is $(\omega t + \phi)$.

However, for circuit analysis, we're usually interested in the *state* of the circuit at a specific instant or, more importantly, the *relationships* between different sinusoidal quantities at the same frequency. So, we "freeze" this rotating vector at a reference time, typically when $\omega t = 0$. At this point, the angle becomes just $\phi$.

Therefore, a sinusoidal quantity like $v(t) = V_m \cos(\omega t + \phi)$ can be represented by a phasor $\mathbf{V}$ whose magnitude is $V_m$ and whose angle is $\phi$.

**Crucial Convention:** For circuit analysis, we usually drop the $\omega t$ term. We represent a sinusoidal voltage $v(t) = V_m \cos(\omega t + \phi)$ by a phasor $\mathbf{V}$ with magnitude $V_m$ and phase $\phi$. Similarly, $i(t) = I_m \cos(\omega t + \alpha)$ is represented by $\mathbf{I}$ with magnitude $I_m$ and phase $\alpha$.

**Remember this:** The phasor itself doesn't change with time. It captures the amplitude and phase *information* of the sinusoid at a given frequency. When we perform calculations with phasors, we're essentially working with the peak values and the phase differences. After calculations, we convert the phasor back to the time domain to get the actual time-varying voltage or current.

### 3. Complex Forms of Phasors

Phasors are complex numbers. Complex numbers can be expressed in several ways, each useful for different types of calculations. For phasors, the most common forms are:

#### a) Polar Form

This form directly reflects the magnitude and angle of the phasor.
*   **Voltage Phasor:** $\mathbf{V} = V_m \angle \phi$ (where $V_m$ is the magnitude and $\phi$ is the angle in radians or degrees)
*   **Current Phasor:** $\mathbf{I} = I_m \angle \alpha$

**Example:** If a voltage is $v(t) = 10 \cos(100t + 30^\circ)$, its phasor is $\mathbf{V} = 10 \angle 30^\circ$ V.
If a current is $i(t) = 5 \sin(100t - 45^\circ)$, we first need to convert the sine to cosine. Since $\sin(\theta) = \cos(\theta - 90^\circ)$, we have $i(t) = 5 \cos(100t - 45^\circ - 90^\circ) = 5 \cos(100t - 135^\circ)$. The phasor is $\mathbf{I} = 5 \angle -135^\circ$ A. Notice the phase difference of $90^\circ$ between sine and cosine. Keeping track of this is important.

**Why use polar form?** It's very intuitive. You immediately see the "strength" (amplitude) and "timing" (phase) of the signal. Multiplication and division of phasors are simplest in polar form:
*   $(\text{R}_1 \angle \theta_1) \times (\text{R}_2 \angle \theta_2) = (\text{R}_1 \text{R}_2) \angle (\theta_1 + \theta_2)$
*   $(\text{R}_1 \angle \theta_1) / (\text{R}_2 \angle \theta_2) = (\text{R}_1 / \text{R}_2) \angle (\theta_1 - \theta_2)$

This is incredibly useful for analyzing how components like inductors and capacitors affect AC signals, as we'll see later.

#### b) Rectangular Form (Cartesian Form)

This form expresses the complex number in terms of its real and imaginary parts, using the imaginary unit $j$ (where $j^2 = -1$).
*   $\mathbf{V} = V_{re} + j V_{im}$
*   $\mathbf{I} = I_{re} + j I_{im}$

To convert between polar and rectangular forms, we use basic trigonometry:
*   **From Polar to Rectangular:**
    *   Real part ($V_{re}$) = Magnitude $\times \cos(\text{Angle})$
    *   Imaginary part ($V_{im}$) = Magnitude $\times \sin(\text{Angle})$
    *   So, $\mathbf{V} = (V_m \cos \phi) + j (V_m \sin \phi)$

*   **From Rectangular to Polar:**
    *   Magnitude ($V_m$) = $\sqrt{V_{re}^2 + V_{im}^2}$
    *   Angle ($\phi$) = $\arctan(V_{im} / V_{re})$ (Be careful with the quadrant here!)

**Example:** For $\mathbf{V} = 10 \angle 30^\circ$:
*   $V_{re} = 10 \cos(30^\circ) = 10 \times (\sqrt{3}/2) \approx 8.66$
*   $V_{im} = 10 \sin(30^\circ) = 10 \times (1/2) = 5$
*   So, $\mathbf{V} = 8.66 + j5$ V.

**Why use rectangular form?** Addition and subtraction of phasors are easiest in rectangular form. This is vital when you have multiple voltage or current sources in a circuit, or when you're summing voltage drops across different components.
*   $(\text{R}_1 + j\text{I}_1) + (\text{R}_2 + j\text{I}_2) = (\text{R}_1 + \text{R}_2) + j(\text{I}_1 + \text{I}_2)$
*   $(\text{R}_1 + j\text{I}_1) - (\text{R}_2 + j\text{I}_2) = (\text{R}_1 - \text{R}_2) + j(\text{I}_1 - \text{I}_2)$

**Common Pitfall:** When calculating the angle using $\arctan(V_{im} / V_{re})$, always check which quadrant the complex number lies in. For example, $1+j1$ and $-1-j1$ both have a ratio of $1/1=1$. $\arctan(1)$ is $45^\circ$. But $1+j1$ is in the first quadrant (angle $45^\circ$), while $-1-j1$ is in the third quadrant (angle $225^\circ$ or $-135^\circ$).

#### c) Exponential Form (Euler's Form)

This form is derived from Euler's formula, which beautifully connects exponentials with trigonometric functions: $e^{j\phi} = \cos \phi + j \sin \phi$.
Using this, we can write a phasor $\mathbf{V}$ as:
*   $\mathbf{V} = V_m e^{j\phi}$

This form is closely related to the polar form, as you can see: $V_m e^{j\phi}$ is the same as $V_m \angle \phi$.

**Why use exponential form?** It's particularly elegant for understanding concepts like impedance in AC circuits, where we often deal with terms like $e^{j\omega t}$. It also makes some calculus operations (differentiation and integration) very straightforward, as they just involve multiplying or dividing by $j\omega$.

**Let's summarize the connection:**

| Form          | Notation                     | Key Features                                    | Best for...                                |
| :------------ | :--------------------------- | :---------------------------------------------- | :----------------------------------------- |
| **Trigonometric** | $V_m \cos(\omega t + \phi)$  | Time-varying amplitude and phase.               | Understanding the waveform itself.         |
| **Phasor**    | $V_m \angle \phi$            | Peak amplitude and fixed phase.                 | Visualizing the signal's state at a point. |
| **Polar (Complex)** | $V_m e^{j\phi}$ or $V_m \angle \phi$ | Magnitude and angle directly.                   | Multiplication, division, rotation.        |
| **Rectangular (Complex)** | $V_{re} + j V_{im}$          | Real and imaginary components.                  | Addition, subtraction.                     |

These different forms are all just different ways of describing the *same* underlying sinusoidal quantity. The choice of form depends on the specific operation you need to perform. Mastering the conversions between them is key, as highlighted in CO1 – applying these to solve circuits means being able to use the most convenient representation for each step.

### Relating to Course Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.**
    This entire topic is directly about enabling CO1 for AC circuits. Phasors simplify AC circuit analysis by allowing us to use Kirchhoff's laws and Ohm's law in a much more manageable form, treating AC circuits algebraically rather than with differential equations. Understanding these representations is the first step in applying circuit laws to AC.

*   **CO4: Explain the fundamental concepts of electronic components and devices.**
    While this topic focuses on circuit representation, the behavior of components like capacitors and inductors in AC circuits is described by their *impedance*, which is a complex quantity. Phasors are the language used to describe these complex impedances and how they interact with sinusoidal voltages and currents. So, understanding phasors is foundational for explaining component behavior in AC.

*   **CO5: Outline the principles of communication systems.**
    Communication systems rely heavily on AC signals, often modulated sine waves. To understand how signals are transmitted, received, amplified, and processed, engineers must be able to analyze these AC signals. Phasors provide the mathematical framework for this analysis, allowing engineers to predict how signals will behave and how to design systems to manipulate them effectively.

### Examples and Analogies for Visualization

Let's make this a bit more concrete.

**Analogy: A Ship's Navigation**

Imagine a ship at sea.
*   The **position** of the ship can be described by its coordinates (like rectangular form: Easting and Northing).
*   The ship's **speed and direction** of travel can be described by a vector.
*   The **amplitude** of a phasor is like the magnitude of this vector (how fast it's going).
*   The **phase angle** is like the direction the ship is heading.
*   If the ship is sailing on a sinusoidal path (e.g., following a curved coastline), the phasor representing its motion at any point in time captures its instantaneous speed and direction.

**Relatable Example: Your Home's AC Power**

Your home appliances are powered by AC from the grid. This AC voltage has a specific frequency (50 Hz or 60 Hz depending on your region) and a peak voltage (e.g., 120V or 240V). The voltage from the wall socket isn't just a number; it's a sine wave.
*   **$v(t) = 170 \cos(120\pi t)$ V** for a 120V RMS system (peak voltage $120 \times \sqrt{2} \approx 170$ V, frequency $60$ Hz, so $\omega = 2\pi \times 60 = 120\pi$ rad/s).
*   The phasor for this voltage is $\mathbf{V} = 170 \angle 0^\circ$ V (assuming we take the wall voltage as our reference phase).

Now, if you plug in a resistive load like a simple incandescent light bulb, the current through it will be in phase with the voltage.
*   If the bulb has resistance R, $i(t) = (170/R) \cos(120\pi t)$.
*   The current phasor would be $\mathbf{I} = (170/R) \angle 0^\circ$ A.

If you plug in a motor (which has inductance), the current will *lag* behind the voltage. This lag is a phase difference.
*   The current might be $i(t) = I_m \cos(120\pi t - 30^\circ)$.
*   The current phasor would be $\mathbf{I} = I_m \angle -30^\circ$ A.

By using phasors, we can easily represent these signals and analyze how they interact in a circuit. We can add up voltages or currents (in rectangular form), or multiply/divide them (in polar form), which is how we calculate things like power or voltage drops across components.

### Summary of Key Takeaways

*   AC quantities (voltage, current) vary sinusoidally with time.
*   Phasors are complex numbers that represent the amplitude and phase of these sinusoidal quantities at a given frequency.
*   They convert time-domain differential equations into simpler algebraic equations.
*   The three main forms are **polar** ($V_m \angle \phi$ or $V_m e^{j\phi}$) and **rectangular** ($V_{re} + j V_{im}$).
*   **Polar form** is best for multiplication and division.
*   **Rectangular form** is best for addition and subtraction.
*   Mastering the conversions between these forms is crucial for AC circuit analysis.
*   This topic is fundamental to meeting CO1 and is essential for understanding AC systems and electronic components in AC circuits.

### Sample Questions and Answers

**Question 1 (Conceptual):**
Why do we use phasors to represent AC quantities instead of just using their trigonometric time-domain equations?

**Answer:**
Using trigonometric time-domain equations for AC circuit analysis involves dealing with differential equations, which can be mathematically complex and tedious, especially in circuits with multiple components and sources. Phasors simplify this by converting these differential equations into algebraic equations in the frequency domain. This makes it much easier to perform operations like addition, subtraction, multiplication, and division, thereby simplifying circuit analysis significantly. It allows us to focus on the amplitude and phase relationships between different quantities without getting bogged down in continuous time variations.

**Question 2 (Conversion):**
A voltage is given by $v(t) = 50 \sin(314t + 60^\circ)$ V. Represent this voltage as a phasor in polar and rectangular forms.

**Answer:**
First, we need to convert the sine function to a cosine function, as the cosine is typically used as the reference for phasor representation.
We know that $\sin(\theta) = \cos(\theta - 90^\circ)$.
So, $v(t) = 50 \cos(314t + 60^\circ - 90^\circ) = 50 \cos(314t - 30^\circ)$ V.

The angular frequency $\omega = 314$ rad/s (which corresponds to $f = 314 / (2\pi) \approx 50$ Hz).
The amplitude $V_m = 50$ V.
The phase angle $\phi = -30^\circ$.

*   **Polar Form:**
    $\mathbf{V} = V_m \angle \phi = 50 \angle -30^\circ$ V.

*   **Rectangular Form:**
    To convert from polar to rectangular form, we use:
    $V_{re} = V_m \cos \phi = 50 \cos(-30^\circ) = 50 \times (\sqrt{3}/2) \approx 43.30$ V.
    $V_{im} = V_m \sin \phi = 50 \sin(-30^\circ) = 50 \times (-1/2) = -25$ V.

    So, $\mathbf{V} = V_{re} + j V_{im} = 43.30 - j25$ V.

**Question 3 (Exam-Oriented):**
Which form of complex number representation is most suitable for adding voltage drops across resistors and capacitors in series in an AC circuit? Explain why.

**Answer:**
The **rectangular form** ($V_{re} + j V_{im}$) is most suitable for adding voltage drops across components in series. This is because Kirchhoff's Voltage Law (KVL) states that the sum of voltage drops around a closed loop is zero. When dealing with AC circuits, voltage drops across different components will generally have different magnitudes and phases. To sum these complex voltage drops, we need to add their real parts and their imaginary parts separately. The rectangular form directly provides these real and imaginary components, making addition straightforward: $(R_1 + jX_1) + (R_2 + jX_2) = (R_1+R_2) + j(X_1+X_2)$. The polar form is more convenient for multiplication and division, which are typically used for current calculations or power analysis involving impedances.

---
I hope this detailed explanation helps you grasp the concept of phasor representation for AC quantities. It's a foundational tool that will serve you well throughout your studies in electrical and electronics engineering. Keep practicing the conversions and applying these ideas to simple circuit examples. We'll build upon this in our next session!
