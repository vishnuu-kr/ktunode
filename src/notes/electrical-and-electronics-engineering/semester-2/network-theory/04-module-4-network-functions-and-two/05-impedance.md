---
title: "Impedance"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9889"
status: "completed"
scrapedAt: "2026-05-23T16:08:46.064Z"
---
# Network Theory: Module 4 - Network Functions and Two-Port Networks
## Topic: Impedance

Welcome, everyone, to Module 4 of Network Theory! Today, we're diving into a fundamental concept that is absolutely crucial for understanding how electrical circuits behave, especially when we move beyond simple DC analysis into the realm of AC circuits and, importantly, **network functions**. This topic, **Impedance**, is your gateway to analyzing circuits in the frequency domain. It's a concept that will serve you well not just in this course, but in virtually any area of electrical engineering you choose to pursue.

Think of impedance as the AC equivalent of resistance. While resistance tells us how much a material opposes the flow of direct current, impedance generalizes this idea to encompass the opposition to alternating current, taking into account not just resistance but also the effects of **reactance** – which arises from inductors and capacitors.

### 1. What is Impedance?

Let's start with the basics. In a DC circuit, Ohm's Law is simple: $V = IR$, where $V$ is voltage, $I$ is current, and $R$ is resistance. Resistance is a real number, always positive.

Now, when we introduce alternating current (AC), things get a bit more complex. AC signals are typically sinusoidal, meaning they vary sinusoidally with time, like $v(t) = V_m \cos(\omega t + \phi)$. These signals have a magnitude and a phase.

To analyze these AC circuits efficiently, we often use the concept of **phasors**. A phasor is a complex number that represents the magnitude and phase of a sinusoidal signal. If $v(t) = V_m \cos(\omega t + \phi)$, its phasor representation is $\mathbf{V} = V_m e^{j\phi}$, where $V_m$ is the phasor's magnitude and $\phi$ is its phase. Similarly, current can be represented by a phasor $\mathbf{I} = I_m e^{j\theta}$.

The relationship between voltage and current in an AC circuit, analogous to Ohm's Law, is expressed using **impedance**, denoted by the symbol $\mathbf{Z}$. It's also a complex quantity.

So, in AC circuits, Ohm's Law becomes:
$$ \mathbf{V} = \mathbf{Z} \mathbf{I} $$

Here's where it gets interesting. What exactly *is* $\mathbf{Z}$? It's a measure of the total opposition to current flow in an AC circuit, and it's a function of frequency ($\omega$). It's a complex number, meaning it has both a magnitude and a phase.

The **magnitude** of impedance, $|\mathbf{Z}|$, tells us the ratio of the voltage amplitude to the current amplitude: $|\mathbf{Z}| = \frac{|\mathbf{V}|}{|\mathbf{I}|}$. This is often what we intuitively think of when we talk about "opposition" to current.

The **phase** of impedance, $\angle \mathbf{Z}$, tells us the phase difference between the voltage and the current. If $\angle \mathbf{Z} = \phi$, it means the voltage phasor leads the current phasor by $\phi$ radians (or degrees).

**Connecting to Course Outcomes:**
This concept of impedance as a complex ratio of voltage to current phasors directly relates to **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2)**. Impedance is the most fundamental parameter for a single-port network (like a simple resistor, inductor, or capacitor) and forms the basis for many parameters used in two-port networks. Understanding impedance is the first step to defining transfer functions, which are key network functions.

### 2. Impedance of Basic Circuit Elements

Let's look at the impedance of the three fundamental passive circuit elements: the resistor, the inductor, and the capacitor. This is where the complex nature of impedance truly emerges.

#### 2.1 Resistor

For a resistor, the voltage and current are always in phase. If $v(t) = R i(t)$, then $\mathbf{V} = R \mathbf{I}$. The impedance of a resistor is simply its resistance:
$$ \mathbf{Z}_R = R $$
Here, $\mathbf{Z}_R$ is a purely real number. The magnitude is $R$, and the phase is $0^\circ$. This makes sense – a resistor's opposition doesn't change with frequency, and it doesn't introduce any phase shift.

#### 2.2 Inductor

Now, for an inductor. We know that the voltage across an inductor is given by $v(t) = L \frac{di(t)}{dt}$. If we represent the current as a phasor $\mathbf{I} = I_m e^{j\omega t}$, then the voltage phasor $\mathbf{V}$ is related. Using the phasor relationship, $j\omega$ corresponds to differentiation with respect to time. So, the impedance of an inductor is:
$$ \mathbf{Z}_L = j\omega L $$
This is a purely imaginary number. The magnitude is $|\mathbf{Z}_L| = \omega L$, which we call the **inductive reactance** ($X_L$). The phase is $+90^\circ$ (or $+\frac{\pi}{2}$ radians). What does this $+90^\circ$ phase mean? It means the voltage across an inductor *leads* the current through it by $90^\circ$. Think of it this way: when the current is changing fastest (crossing zero), the voltage is at its peak. This is a crucial characteristic of inductors.

*   **Analogy:** Imagine pushing a heavy swing. To get it moving fastest, you need to apply your maximum force when it's at its center position (where velocity is max). The force (voltage) leads the movement (current).

*   **Exam Tip:** Always remember that for an inductor, $\mathbf{Z}_L = j\omega L$. A common mistake is to forget the 'j' or confuse it with the capacitor.

#### 2.3 Capacitor

For a capacitor, the relationship is $i(t) = C \frac{dv(t)}{dt}$. To find the impedance, we're looking for $\frac{\mathbf{V}}{\mathbf{I}}$. Rearranging the formula, $\frac{dv}{dt} = \frac{i}{C}$. In phasor form, this means $j\omega \mathbf{V} = \frac{\mathbf{I}}{C}$. Solving for $\mathbf{V}/\mathbf{I}$:
$$ \mathbf{Z}_C = \frac{1}{j\omega C} $$
We can rewrite this by multiplying the numerator and denominator by $-j$:
$$ \mathbf{Z}_C = \frac{-j}{\omega C} $$
This is also a purely imaginary number. The magnitude is $|\mathbf{Z}_C| = \frac{1}{\omega C}$, which we call the **capacitive reactance** ($X_C$). The phase is $-90^\circ$ (or $-\frac{\pi}{2}$ radians). This means the voltage across a capacitor *lags* the current through it by $90^\circ$. Why? The current is maximum when the voltage is zero (when the capacitor is charging most rapidly).

*   **Analogy:** Imagine filling a balloon with water. The fastest you can fill it (maximum current) is when the balloon is empty (zero voltage). As it fills up, the pressure (voltage) builds, and you have to push harder, slowing down the flow rate. The flow (current) leads the pressure (voltage).

*   **Exam Tip:** Remember $\mathbf{Z}_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C}$. The negative sign and the 'j' are key. Capacitive reactance ($X_C$) is usually written as positive $\frac{1}{\omega C}$, but the impedance has the $-j$.

**Important Note on Reactance:**
We often refer to the imaginary part of impedance as reactance.
*   Inductive Reactance: $X_L = \omega L$
*   Capacitive Reactance: $X_C = \frac{1}{\omega C}$
So, $\mathbf{Z}_L = jX_L$ and $\mathbf{Z}_C = -jX_C$.

### 3. Impedance in Series and Parallel

Just like resistances, impedances can be combined in series and parallel. This is a powerful tool for simplifying complex circuits.

#### 3.1 Series Impedances

When impedances $\mathbf{Z}_1, \mathbf{Z}_2, \dots, \mathbf{Z}_n$ are connected in series, the total equivalent impedance $\mathbf{Z}_{eq}$ is simply the sum of the individual impedances:
$$ \mathbf{Z}_{eq} = \mathbf{Z}_1 + \mathbf{Z}_2 + \dots + \mathbf{Z}_n $$
This is directly analogous to resistors in series. If you have a resistor and an inductor in series, the total impedance is $\mathbf{Z}_{eq} = R + j\omega L$. This is a complex number with a positive imaginary part, indicating that the circuit's overall behavior is **inductive**.

#### 3.2 Parallel Impedances

When impedances $\mathbf{Z}_1, \mathbf{Z}_2, \dots, \mathbf{Z}_n$ are connected in parallel, the equivalent impedance is found using the reciprocal relationship, just like parallel resistors. For two impedances in parallel:
$$ \mathbf{Z}_{eq} = \frac{\mathbf{Z}_1 \mathbf{Z}_2}{\mathbf{Z}_1 + \mathbf{Z}_2} $$
For multiple impedances in parallel, it's often easier to work with admittances.

**Admittance (Y):** Admittance is the reciprocal of impedance. $\mathbf{Y} = \frac{1}{\mathbf{Z}}$. It represents how easily current flows. The unit of admittance is Siemens (S).
*   For a resistor: $\mathbf{Y}_R = \frac{1}{R}$
*   For an inductor: $\mathbf{Y}_L = \frac{1}{j\omega L} = -j\frac{1}{\omega L} = -j\frac{1}{X_L}$
*   For a capacitor: $\mathbf{Y}_C = \frac{1}{-j\omega C} = j\omega C = j\frac{1}{X_C}$

When impedances are in parallel, their admittances add up to give the total equivalent admittance:
$$ \mathbf{Y}_{eq} = \mathbf{Y}_1 + \mathbf{Y}_2 + \dots + \mathbf{Y}_n $$
Then, $\mathbf{Z}_{eq} = \frac{1}{\mathbf{Y}_{eq}}$.

**Connecting to Course Outcomes:**
Combining impedances in series and parallel is a direct application of circuit analysis techniques that helps us simplify networks. This relates to **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4)**, as these methods often require finding equivalent impedances of series and parallel combinations. It also supports **CO2: Apply network theorems to analyze electrical networks (Knowledge Level: K3)**, as simplification using impedance combination is a prerequisite for applying theorems like superposition or Thevenin's/Norton's in AC circuits.

### 4. Impedance and Network Functions

Now, let's bridge impedance to the broader concept of **network functions**, which is central to Module 4. A network function is essentially a ratio of output to input, often expressed in the frequency domain using complex impedance.

A common network function is the **transfer impedance** between two ports (or terminals) of a network. If we apply a voltage $\mathbf{V}_1$ at port 1 and measure the current $\mathbf{I}_2$ flowing *into* port 2, the transfer impedance $\mathbf{Z}_{12}$ is defined as:
$$ \mathbf{Z}_{12} = \frac{\mathbf{V}_1}{\mathbf{I}_2} $$
(with all other ports terminated or open-circuited as specified).

Another important network function is the **driving-point impedance**, which is the impedance seen looking into a single port of a network. If we apply a voltage $\mathbf{V}_1$ to a port and measure the current $\mathbf{I}_1$ flowing into that port, the driving-point impedance $\mathbf{Z}_{11}$ is:
$$ \mathbf{Z}_{11} = \frac{\mathbf{V}_1}{\mathbf{I}_1} $$
This is what we've been discussing – the impedance of a single component or a combination of components connected to a single pair of terminals.

**Connecting to Course Outcomes:**
This is precisely where **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2)** comes into play. Impedance is the fundamental building block for defining many of these network functions, especially transfer and driving-point impedances. For instance, in two-port network analysis, the Z-parameters are defined using impedances:
*   $\mathbf{V}_1 = \mathbf{Z}_{11} \mathbf{I}_1 + \mathbf{Z}_{12} \mathbf{I}_2$
*   $\mathbf{V}_2 = \mathbf{Z}_{21} \mathbf{I}_1 + \mathbf{Z}_{22} \mathbf{I}_2$
Here, $\mathbf{Z}_{11}$ and $\mathbf{Z}_{22}$ are driving-point impedances, and $\mathbf{Z}_{12}$ and $\mathbf{Z}_{21}$ are transfer impedances. Understanding how to calculate these impedances is key to characterizing any two-port network.

### 5. Impedance in the s-Domain (Laplace Transforms)

When we deal with transient analysis or more general frequency responses, we often use the Laplace transform. The Laplace transform converts differential equations into algebraic equations in the complex frequency variable 's'.

The Laplace transform of $e^{at}$ is $\frac{1}{s-a}$. The Laplace transform of a constant is $\frac{1}{s}$. The Laplace transform of $\cos(\omega t)$ is $\frac{s}{s^2 + \omega^2}$, and $\sin(\omega t)$ is $\frac{\omega}{s^2 + \omega^2}$.

The impedance of circuit elements in the s-domain are:
*   **Resistor:** $\mathbf{Z}_R(s) = R$ (remains the same as the resistance value)
*   **Inductor:** If $v(t) = L \frac{di(t)}{dt}$, taking the Laplace transform (assuming zero initial conditions): $\mathbf{V}(s) = L(s\mathbf{I}(s) - i(0^-))$. If $i(0^-) = 0$, then $\mathbf{V}(s) = sL \mathbf{I}(s)$. Thus, $\mathbf{Z}_L(s) = sL$.
    *   Notice that when $s = j\omega$, $\mathbf{Z}_L(j\omega) = j\omega L$, which is our familiar AC impedance.
*   **Capacitor:** If $i(t) = C \frac{dv(t)}{dt}$, taking the Laplace transform (assuming zero initial conditions): $\mathbf{I}(s) = C(s\mathbf{V}(s) - v(0^-))$. If $v(0^-) = 0$, then $\mathbf{I}(s) = sC \mathbf{V}(s)$. Thus, $\mathbf{Z}_C(s) = \frac{1}{sC}$.
    *   Again, when $s = j\omega$, $\mathbf{Z}_C(j\omega) = \frac{1}{j\omega C}$, our AC impedance.

The initial conditions of inductors (initial current) and capacitors (initial voltage) are represented by equivalent voltage or current sources in the s-domain, which modify the impedance calculation slightly if they are non-zero. For example, a capacitor with an initial voltage $v(0^-)$ is equivalent to an impedance of $\frac{1}{sC}$ in series with a voltage source of $\frac{v(0^-)}{s}$. An inductor with an initial current $i(0^-)$ is equivalent to an impedance of $sL$ in series with a voltage source of $Li(0^-)$.

**Connecting to Course Outcomes:**
This is crucial for **CO3: Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4)**. By converting circuit elements to their s-domain impedances, we can use algebraic methods (like mesh or nodal analysis) in the s-domain to solve for the network's response, including transient states. The concept of network functions in the s-domain, such as $\frac{\mathbf{V}_2(s)}{\mathbf{V}_1(s)}$ or $\frac{\mathbf{I}_2(s)}{\mathbf{V}_1(s)}$, directly arises from these s-domain impedances.

### 6. Practical Implications and Examples

Let's try to make this more concrete with some everyday examples.

**Example 1: A Simple RL Circuit (like a speaker crossover)**
Imagine a simple circuit with a resistor (representing a speaker's resistance) and an inductor (which might be part of a crossover circuit to direct certain frequencies to specific speakers).
*   $\mathbf{Z}_{total} = R + j\omega L$.
*   As frequency $\omega$ increases, the impedance $j\omega L$ increases. This means the inductor "blocks" higher frequencies more effectively. In a speaker system, this might mean this RL combination passes lower frequencies to a woofer.
*   The **magnitude** of the impedance is $|\mathbf{Z}_{total}| = \sqrt{R^2 + (\omega L)^2}$. This magnitude determines how much current flows for a given voltage amplitude.

**Example 2: An RC Circuit (like a tone control)**
Consider a resistor and a capacitor.
*   $\mathbf{Z}_{total} = R + \frac{1}{j\omega C} = R - j\frac{1}{\omega C}$.
*   As frequency $\omega$ increases, the term $\frac{1}{\omega C}$ decreases. This means the capacitor "passes" higher frequencies more easily. In a tone control circuit, this could be used to boost or cut treble.
*   The **magnitude** is $|\mathbf{Z}_{total}| = \sqrt{R^2 + (\frac{1}{\omega C})^2}$.

**Example 3: Resonance (LC Circuit)**
What happens if you put an inductor and a capacitor in series or parallel and vary the frequency? You get **resonance**.
*   In a series LC circuit, $\mathbf{Z}_{series} = j\omega L + \frac{1}{j\omega C} = j(\omega L - \frac{1}{\omega C})$.
    *   At resonance, the inductive reactance equals the capacitive reactance: $\omega L = \frac{1}{\omega C}$.
    *   This means $\omega^2 = \frac{1}{LC}$, so $\omega_0 = \frac{1}{\sqrt{LC}}$ (the resonant frequency).
    *   At resonance, $\mathbf{Z}_{series} = 0$. The impedance is minimum! This circuit acts like a short circuit at its resonant frequency, allowing maximum current.
*   In a parallel LC circuit, $\mathbf{Y}_{parallel} = \frac{1}{j\omega L} + j\omega C = j(\omega C - \frac{1}{\omega L})$.
    *   At resonance, $\omega C = \frac{1}{\omega L}$, so $\omega_0 = \frac{1}{\sqrt{LC}}$.
    *   At resonance, $\mathbf{Y}_{parallel} = 0$, which means $\mathbf{Z}_{parallel} = \infty$. The impedance is maximum! This circuit acts like an open circuit at its resonant frequency.

These resonant phenomena are fundamental in tuning circuits, oscillators, and filters. They are direct consequences of how impedance varies with frequency.

**Connecting to Course Outcomes:**
The concept of resonance and how it arises from the frequency dependence of impedance is a key analytical skill, supporting **CO1 (K4)** and **CO3 (K4)** when applied to transient or AC steady-state analysis. Understanding impedance is also fundamental to **CO4 (K2)**, as it's how we define the behaviors of filters and tuned circuits.

### Summary and Key Takeaways

*   **Impedance ($\mathbf{Z}$)** is the generalized opposition to AC current, a complex quantity that includes resistance and reactance.
*   Ohm's Law in AC circuits: $\mathbf{V} = \mathbf{Z} \mathbf{I}$.
*   **Resistor Impedance:** $\mathbf{Z}_R = R$ (real, phase 0°)
*   **Inductor Impedance:** $\mathbf{Z}_L = j\omega L = jX_L$ (imaginary, phase +90°). Reactance $X_L$ increases with frequency.
*   **Capacitor Impedance:** $\mathbf{Z}_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C} = -jX_C$ (imaginary, phase -90°). Reactance $X_C$ decreases with frequency.
*   Impedances combine in **series by addition** and in **parallel using reciprocal sums (or adding admittances)**.
*   Impedance is the basis for defining **network functions** like driving-point and transfer impedances, crucial for characterizing circuits, especially two-port networks.
*   In the **s-domain**, impedances are $\mathbf{Z}_R(s) = R$, $\mathbf{Z}_L(s) = sL$, and $\mathbf{Z}_C(s) = \frac{1}{sC}$. This is vital for transient analysis.
*   The frequency dependence of impedance explains phenomena like **resonance**.

Remember, impedance is not just a mathematical tool; it's a physical property of circuit elements that dictates how they interact with AC signals at different frequencies. Master this, and you're well on your way to mastering network analysis!

---

### Sample Questions with Answers

**Q1. What is the impedance of a 100 mH inductor at a frequency of 60 Hz?**

**Answer:**
We need to use the formula $\mathbf{Z}_L = j\omega L$.
First, convert the inductance from millihenries to henries: $L = 100 \text{ mH} = 0.1 \text{ H}$.
Next, calculate the angular frequency $\omega$:
$\omega = 2\pi f = 2\pi (60 \text{ Hz}) = 120\pi \text{ rad/s}$.

Now, calculate the impedance:
$\mathbf{Z}_L = j \omega L = j (120\pi \text{ rad/s}) (0.1 \text{ H}) = j 12\pi \text{ } \Omega$.

Numerically, this is approximately $j 37.7 \text{ } \Omega$.
*   **Conceptual Link:** This question tests the understanding of the basic impedance of an inductor and its dependence on frequency (CO4).
*   **Exam Focus:** Calculation of inductive reactance and expressing it as an impedance ($jX_L$).

**Q2. A voltage of $v(t) = 10 \cos(2000t + 30^\circ) \text{ V}$ is applied to a circuit consisting of a 100 } \Omega \text{ resistor in series with a 20 } \mu\text{F capacitor. Find the phasor current in the circuit.**

**Answer:**
First, let's find the impedances of the components in the s-domain (or j$\omega$ domain).
The angular frequency is $\omega = 2000$ rad/s.
The resistor impedance is $\mathbf{Z}_R = 100 \text{ } \Omega$.
The capacitor impedance is $\mathbf{Z}_C = \frac{1}{j\omega C} = \frac{1}{j(2000)(20 \times 10^{-6})} = \frac{1}{j0.04}$.
$\mathbf{Z}_C = \frac{1}{j0.04} = \frac{-j}{0.04} = -j25 \text{ } \Omega$.

The total series impedance is:
$\mathbf{Z}_{total} = \mathbf{Z}_R + \mathbf{Z}_C = 100 - j25 \text{ } \Omega$.

Now, let's find the phasor representation of the voltage:
$\mathbf{V} = 10 \angle 30^\circ \text{ V}$.

Using Ohm's Law for phasors, $\mathbf{I} = \frac{\mathbf{V}}{\mathbf{Z}_{total}}$.
To perform the division, it's best to convert the impedance to polar form.
Magnitude of $\mathbf{Z}_{total}$: $|\mathbf{Z}_{total}| = \sqrt{100^2 + (-25)^2} = \sqrt{10000 + 625} = \sqrt{10625} \approx 103.08 \text{ } \Omega$.
Phase of $\mathbf{Z}_{total}$: $\phi_Z = \arctan\left(\frac{-25}{100}\right) = \arctan(-0.25) \approx -14.04^\circ$.
So, $\mathbf{Z}_{total} \approx 103.08 \angle -14.04^\circ \text{ } \Omega$.

Now divide the phasors:
$\mathbf{I} = \frac{10 \angle 30^\circ \text{ V}}{103.08 \angle -14.04^\circ \text{ } \Omega} = \left(\frac{10}{103.08}\right) \angle (30^\circ - (-14.04^\circ))$.
$\mathbf{I} \approx 0.097 \angle 44.04^\circ \text{ A}$.

The phasor current is approximately $0.097 \angle 44.04^\circ \text{ A}$.
*   **Conceptual Link:** This question involves combining impedances, calculating total impedance, and then applying Ohm's law in phasor form, demonstrating both series impedance combination (CO1, CO2) and AC circuit analysis (CO4).
*   **Exam Focus:** Correctly calculating capacitor impedance, adding complex numbers, converting to polar form for division, and performing phasor division.

**Q3. Explain how the impedance of an inductor and a capacitor differ with respect to frequency and phase.**

**Answer:**
The impedance of an inductor is $\mathbf{Z}_L = j\omega L$.
*   **Frequency Dependence:** The magnitude of inductive impedance, $X_L = \omega L$, is directly proportional to the frequency $\omega$. As frequency increases, the impedance of an inductor increases.
*   **Phase:** The impedance is purely positive imaginary, meaning the voltage across an inductor leads the current through it by $90^\circ$.

The impedance of a capacitor is $\mathbf{Z}_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C}$.
*   **Frequency Dependence:** The magnitude of capacitive impedance, $X_C = \frac{1}{\omega C}$, is inversely proportional to the frequency $\omega$. As frequency increases, the impedance of a capacitor decreases.
*   **Phase:** The impedance is purely negative imaginary, meaning the voltage across a capacitor lags the current through it by $90^\circ$.

**Key Difference:** Inductors "resist" higher frequencies more (impedance increases with frequency), while capacitors "pass" higher frequencies more easily (impedance decreases with frequency). The phase relationship between voltage and current is also opposite: voltage leads current in an inductor, while voltage lags current in a capacitor.

*   **Conceptual Link:** This question focuses on the fundamental properties of inductor and capacitor impedances and their frequency dependence (CO4).
*   **Exam Focus:** Clearly articulating the proportional/inversely proportional relationship with frequency and the $90^\circ$ phase shift for both elements.

**Q4. What is the impedance of a series RLC circuit at resonance?**

**Answer:**
For a series RLC circuit, the total impedance is $\mathbf{Z}_{series} = R + j\omega L + \frac{1}{j\omega C} = R + j(\omega L - \frac{1}{\omega C})$.
Resonance occurs when the inductive reactance equals the capacitive reactance: $\omega L = \frac{1}{\omega C}$.
At this resonant frequency, the term $(\omega L - \frac{1}{\omega C})$ becomes zero.
Therefore, the impedance at resonance is $\mathbf{Z}_{series, resonance} = R$.

Since $R$ is typically a positive real number, the impedance at resonance is minimized and is purely resistive. This means the circuit behaves like a simple resistor at its resonant frequency, allowing maximum current flow for a given voltage.

*   **Conceptual Link:** This question connects impedance to the phenomenon of resonance, a key aspect of AC circuit behavior (CO1, CO4).
*   **Exam Focus:** Understanding the condition for resonance and its effect on the total impedance of a series RLC circuit.

**Q5. A circuit element has an impedance $\mathbf{Z}(s) = \frac{s+2}{s+5}$. What is this element?**

**Answer:**
We need to recognize what common circuit element or combination of elements would result in such an s-domain impedance.
Let's test combinations:
*   A resistor $R$ has $\mathbf{Z}(s) = R$. Not this.
*   An inductor $L$ has $\mathbf{Z}(s) = sL$. Not this.
*   A capacitor $C$ has $\mathbf{Z}(s) = \frac{1}{sC}$. Not this.

Let's consider series combinations:
*   $R+sL$: $\frac{sL+R}{1}$. Not this.
*   $R+\frac{1}{sC}$: $\frac{sRC+1}{sC}$. Not this.
*   $sL+\frac{1}{sC}$: $\frac{s^2L+1}{sC}$. Not this.

What about a parallel combination?
Consider a resistor $R_1$ in parallel with a series combination of a resistor $R_2$ and an inductor $L$.
$\mathbf{Z} = \frac{R_1(R_2+sL)}{R_1 + R_2+sL} = \frac{R_1R_2+sR_1L}{R_1+R_2+sL}$. This also doesn't match the structure.

Let's re-examine the structure $\frac{s+2}{s+5}$. This looks like a ratio of two linear terms in 's'. This is characteristic of first-order filters.
Consider a circuit with a resistor $R_1$ in series with a parallel combination of a resistor $R_2$ and a capacitor $C$.
The parallel impedance is $\mathbf{Z}_{p} = \frac{R_2 \frac{1}{sC}}{R_2 + \frac{1}{sC}} = \frac{R_2}{sCR_2 + 1}$.
The total impedance is $\mathbf{Z} = R_1 + \mathbf{Z}_{p} = R_1 + \frac{R_2}{sCR_2 + 1} = \frac{R_1(sCR_2+1) + R_2}{sCR_2 + 1} = \frac{sCR_1R_2 + R_1 + R_2}{sCR_2 + 1}$.

Comparing this to $\frac{s+2}{s+5}$, we can match coefficients.
Let $C=1$ F for simplicity. Then we need:
$\frac{sR_1R_2 + R_1 + R_2}{sR_2 + 1}$.
To match the denominator $s+5$, we need $R_2=1$.
Then the numerator becomes $sR_1 + R_1 + 1$.
We need this to be $s+2$.
So, $R_1 = 1$ (matching the 's' coefficient).
And $R_1+1 = 2$, which means $R_1=1$.

This matches! So, the circuit element is a resistor $R_1=1\Omega$ in series with a parallel combination of a resistor $R_2=1\Omega$ and a capacitor $C=1F$. This is a first-order low-pass filter.

Alternatively, consider a series RL circuit with a voltage divider setup that produces this.
Let's rethink the form $\frac{s+2}{s+5}$. This can be seen as a scaled and shifted version of a basic pole or zero.
It's actually simpler than the complex circuit derived above.
Consider a circuit with impedance $\frac{s+a}{s+b}$. This is generally a combination of R, L, C.
If we consider a series combination of an inductor $L$ and a series combination of a resistor $R_1$ and a capacitor $C$.
$\mathbf{Z} = sL + R_1 + \frac{1}{sC} = \frac{s^2L + sR_1C + 1}{sC}$. Doesn't match.

Let's go back to the simple case of RL or RC combinations.
If it were a single component, its impedance would be $sL$ or $1/sC$. This is not.
If it were an RL series: $R+sL$. If we divide by $sL$: $\frac{R}{sL}+1$. Still not matching the form $\frac{s+2}{s+5}$.

The expression $\frac{s+2}{s+5}$ implies a zero at $s=-2$ and a pole at $s=-5$.
This form arises from circuits involving both inductors and capacitors. For example, consider a series RLC circuit's input impedance: $\mathbf{Z}_{in}(s) = R + sL + \frac{1}{sC} = \frac{s^2LC + sRC + 1}{sC}$. This is a second-order function.

The given impedance $\mathbf{Z}(s) = \frac{s+2}{s+5}$ is a first-order rational function.
This implies a circuit with one energy storage element.
Let's consider a series connection of a resistor $R$ and a capacitor $C$: $\mathbf{Z}(s) = R + \frac{1}{sC} = \frac{sRC+1}{sC}$.
To match $\frac{s+2}{s+5}$, we can set $C=1/5$ and $RC=2/5$.
If $C=1/5$, then $R(1/5) = 2/5$, so $R=2$.
So, a series combination of a $2\Omega$ resistor and a $1/5$ F capacitor has impedance:
$\mathbf{Z}(s) = 2 + \frac{1}{s(1/5)} = 2 + \frac{5}{s} = \frac{2s+5}{s}$. This doesn't match.

Let's try a parallel RC circuit.
$\mathbf{Z}(s) = \frac{R \frac{1}{sC}}{R + \frac{1}{sC}} = \frac{R}{sCR + 1}$.
If we set $CR=1/5$ and $R=2$, then $C(2)=1/5$, so $C=1/10$.
$\mathbf{Z}(s) = \frac{2}{s(1/10)(2) + 1} = \frac{2}{s/5 + 1} = \frac{10}{s+5}$. This doesn't match.

Let's consider an RL circuit. Series RL: $R+sL$. Parallel RL: $\frac{RLs}{R+sL}$.
If we consider $\frac{s+2}{s+5}$, it can be rewritten as $\frac{1}{5} \frac{s+2}{1/5 s + 1}$.

The simplest first-order impedance functions are $R$, $sL$, and $1/sC$. Rational functions of 's' of order higher than 1 are combinations.
The expression $\frac{s+2}{s+5}$ is a **rational function** of 's'. It can be realized by various combinations of R, L, and C. The simplest realization for this specific form might involve an active circuit (with op-amps), or a passive circuit with specific component values.

However, if we are restricted to passive RLC networks, $\mathbf{Z}(s) = \frac{s+2}{s+5}$ can be realized by a ladder network.
A simple passive realization can be found by continued fraction expansion or by equating coefficients.
Consider a parallel combination of a resistor $R_1$ and a series branch of a capacitor $C$ and a resistor $R_2$.
$\mathbf{Z}_{parallel} = \frac{R_1(R_2+1/sC)}{R_1+R_2+1/sC} = \frac{R_1(sR_2C+1)}{sC(R_1+R_2)+1}$. This yields a second-order function if $R_1 \neq 0$.

Let's reconsider the original interpretation of $\mathbf{Z}(s) = \frac{s+2}{s+5}$.
This function has a **zero** at $s=-2$ and a **pole** at $s=-5$.
Such a response occurs in **passive networks**. One way to realize this is a specific configuration of R, L, C elements.

A simpler interpretation may be intended for introductory purposes:
If we consider the impedance of a circuit that could be an electrical filter. For example, a lead network (which provides a phase lead at higher frequencies) can have an impedance of the form $R \frac{1+s\tau_1}{1+s\tau_2}$.
If $\tau_1 > \tau_2$, it's a lead network.
$\mathbf{Z}(s) = \frac{s+2}{s+5}$. We can rewrite this as $1 \cdot \frac{s+2}{s+5}$.
This can be realized as a passive network. For example, a series combination of a resistor $R_1$ and a parallel combination of a capacitor $C$ and a resistor $R_2$.
The impedance is $\mathbf{Z} = R_1 + \frac{R_2 \cdot \frac{1}{sC}}{R_2 + \frac{1}{sC}} = R_1 + \frac{R_2}{sCR_2 + 1} = \frac{R_1(sCR_2+1) + R_2}{sCR_2 + 1} = \frac{sCR_1R_2 + R_1+R_2}{sCR_2+1}$.
Comparing $\frac{sCR_1R_2 + R_1+R_2}{sCR_2+1}$ with $\frac{s+2}{s+5}$:
$CR_2 = 1/5$ and $R_1+R_2=2$ and $CR_1R_2=1$.
From $CR_2=1/5$, we get $C = 1/(5R_2)$.
Substitute this into $CR_1R_2=1$: $(1/(5R_2)) R_1R_2 = 1$, which means $R_1/5 = 1$, so $R_1=5$.
But we need $R_1+R_2=2$. If $R_1=5$, then $5+R_2=2$, so $R_2=-3$.
Resistance cannot be negative in a passive component. This indicates that this specific configuration doesn't directly yield the positive coefficients.

However, impedance functions of this form $\frac{s+a}{s+b}$ are characteristic of **first-order filters**. The simplest passive realization of such an impedance function is a combination of resistors, inductors, and capacitors. Without further context or constraints (like "passive network only"), it's difficult to pinpoint a *unique* single element or simple combination. But if the context implies a simple network function, it's likely a representation of a basic RLC filter circuit.

Given the context of learning impedance, the question is likely testing recognition of the form of impedance in the s-domain. Without a specific prescribed set of building blocks, this is more about the *mathematical form* of impedance.
The form $\frac{s+a}{s+b}$ is a rational function with a single zero and a single pole. This is characteristic of a **first-order network**. It could be realized by various passive circuits.

A common realization for such impedance is a **passive filter circuit**. For example, a lead or lag network.
Specifically, if we consider a circuit that provides a phase lead at higher frequencies (a lead network), its impedance could be in this form.

**Revised Answer for Q5 (Focus on the *nature* of the impedance):**
The impedance $\mathbf{Z}(s) = \frac{s+2}{s+5}$ is a **rational function** of the complex frequency 's'. It is characterized by a **single zero** at $s=-2$ and a **single pole** at $s=-5$. This type of impedance function is typical of **first-order linear time-invariant (LTI) circuits**. It signifies a circuit with one energy storage element (either an inductor or a capacitor) combined with resistors. Such an impedance function is fundamental to understanding **filter circuits**, where the ratio of output voltage to input voltage, or other transfer functions, often take this rational polynomial form in 's'.

*   **Conceptual Link:** This question tests the understanding of impedance in the s-domain and its relationship to network functions and circuit types (CO3, CO4).
*   **Exam Focus:** Recognizing that impedance functions in the s-domain are rational polynomials and that their order and location of poles/zeros dictate the circuit's behavior (e.g., first-order response). The question might be designed to see if students can identify that this is not a simple R, L, or C element, but a combination.
