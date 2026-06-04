---
title: "RL, RC and RLC series circuits- power factor, active, reactive and apparent power. Simple numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94aa"
status: "completed"
scrapedAt: "2026-05-23T16:02:32.279Z"
---
Absolutely! Here are the comprehensive study notes for your topic, designed to be engaging and informative, just like a real lecture.

---

## Module 2: Electromagnetic Induction - Series RL, RC, and RLC Circuits and Power Concepts

Welcome back, everyone! In our previous sessions, we explored the foundational principles of electromagnetic induction – how changing magnetic fields can induce voltages and currents. Today, we're going to dive deeper into AC circuits, specifically focusing on series combinations of resistors (R), inductors (L), and capacitors (C). These circuits are absolutely fundamental to understanding how electrical energy is delivered and utilized, and they form the backbone of countless electronic devices.

We'll be looking at **Series RL, RC, and RLC Circuits**. Think of these as the building blocks. When you have a circuit with multiple components, how do they behave together when we apply an alternating voltage (AC)? This is where things get really interesting, because inductors and capacitors don't behave like simple resistors. They introduce something called **reactance**, which affects the current flow in ways that depend on the *frequency* of the AC supply.

As we explore these circuits, we'll also unravel some crucial concepts related to how power is managed in AC systems: **power factor, active power, reactive power, and apparent power**. Understanding these is vital for efficient power delivery and for designing systems that don't waste energy.

Let's get started!

### 1. Understanding Impedance in AC Circuits

Before we look at the specific circuits, we need to talk about **impedance**. You're all familiar with **resistance (R)** from DC circuits, which opposes current flow. In AC circuits, inductors and capacitors also oppose current flow, but their opposition is frequency-dependent and is called **reactance**.

*   **Inductive Reactance ($X_L$)**: An inductor resists changes in current. The faster the current changes (i.e., the higher the frequency), the more it resists. This opposition is called inductive reactance. The formula is:
    $X_L = 2\pi fL$
    where:
    *   $f$ is the frequency of the AC supply (in Hertz, Hz).
    *   $L$ is the inductance (in Henries, H).
    Think of it like this: imagine trying to push a ball through a pipe. If you push it slowly, it's easy. If you try to rapidly jiggle it back and forth, it's much harder. The inductor is like that pipe, and the faster the jiggling (frequency), the harder it is to push the ball (current) through.

*   **Capacitive Reactance ($X_C$)**: A capacitor opposes changes in voltage. The faster the voltage changes (i.e., the higher the frequency), the more easily it allows current to flow. This opposition is called capacitive reactance. The formula is:
    $X_C = \frac{1}{2\pi fC}$
    where:
    *   $f$ is the frequency of the AC supply (in Hertz, Hz).
    *   $C$ is the capacitance (in Farads, F).
    Here's an analogy: Imagine a flexible membrane separating two chambers. If you slowly change the pressure on one side, the membrane moves a little. If you rapidly fluctuate the pressure, the membrane can move a lot, allowing more "flow" across it. The capacitor is like that membrane, and the faster the pressure changes (voltage changes), the more "flow" (current) it allows.

Now, in an AC circuit, we have resistance *and* reactance. Since these are different types of opposition, we can't just add them up like we do in DC. We need to combine them using vector addition, considering their phase relationships. This total opposition to AC current is called **impedance (Z)**, measured in Ohms ($\Omega$).

Impedance ($Z$) is often represented as a complex number: $Z = R + jX$, where $X$ is the net reactance ($X_L - X_C$) and $j$ is the imaginary unit. The magnitude of impedance is calculated using the Pythagorean theorem:

$|Z| = \sqrt{R^2 + (X_L - X_C)^2}$

This impedance $Z$ determines the relationship between the total voltage ($V$) and the total current ($I$) in the circuit, much like resistance does in DC:

$V = IZ$

This equation tells us that the current ($I$) will be $V/Z$.

**Connecting to Course Outcomes:** This directly relates to **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. Understanding impedance is key to solving AC circuits, and it's a direct application of Ohm's Law ($V=IZ$) in the AC domain.

### 2. Series RL Circuits

Let's start with a simple combination: a resistor (R) in series with an inductor (L). When an AC voltage is applied, both components will oppose the current.

*   **The Circuit:** Imagine a light bulb (resistor) connected in series with an electric motor (inductor). When you turn on the AC power, the motor tries to resist the change in current because of its magnetic field.
*   **Impedance:** In a series RL circuit, the total impedance is the vector sum of the resistance and the inductive reactance.
    $Z_{RL} = R + jX_L$
    The magnitude of the impedance is:
    $|Z_{RL}| = \sqrt{R^2 + X_L^2}$
*   **Phase Relationship:** Here's a crucial point: in an inductor, the voltage *leads* the current by 90 degrees. In a resistor, voltage and current are in phase. So, in a series RL circuit, the total voltage will lead the current by some angle $\phi$, which is between 0 and 90 degrees.
    The angle $\phi$ can be found using:
    $\cos(\phi) = \frac{R}{|Z_{RL}|}$
    $\sin(\phi) = \frac{X_L}{|Z_{RL}|}$
    $\tan(\phi) = \frac{X_L}{R}$

**Think about it:** Why does the voltage lead the current in an RL circuit? The inductor stores energy in its magnetic field. To build up this magnetic field (and thus, the current), a voltage is required. The voltage is "ahead" of the current because it's what's driving the current and creating the magnetic effect.

**Connecting to Course Outcomes:** This builds on **CO1** by showing how components with different behaviors (R and L) combine to affect circuit response.

### 3. Series RC Circuits

Now, let's swap the inductor for a capacitor: a resistor (R) in series with a capacitor (C).

*   **The Circuit:** Consider a dimmer switch for a light (resistor) connected to a capacitor. Capacitors store electrical energy in an electric field.
*   **Impedance:** In a series RC circuit, the total impedance is the vector sum of the resistance and the capacitive reactance. Remember, capacitive reactance ($X_C$) is often treated as negative in phasor diagrams because it causes current to lead voltage.
    $Z_{RC} = R - jX_C$
    The magnitude of the impedance is:
    $|Z_{RC}| = \sqrt{R^2 + X_C^2}$
*   **Phase Relationship:** In a capacitor, the current *leads* the voltage by 90 degrees. In a resistor, voltage and current are in phase. Therefore, in a series RC circuit, the total voltage will lag the current by some angle $\phi$, which is between 0 and 90 degrees (or equivalently, the current leads the voltage by $\phi$).
    The angle $\phi$ can be found using:
    $\cos(\phi) = \frac{R}{|Z_{RC}|}$
    $\sin(\phi) = \frac{X_C}{|Z_{RC}|}$ (Note: we use $X_C$ here, not $-X_C$, for the angle calculation magnitude)
    $\tan(\phi) = \frac{X_C}{R}$

**Think about it:** Why does the current lead the voltage in an RC circuit? The capacitor resists voltage changes. To increase the voltage across the capacitor, charge must flow onto its plates, which means current must flow. So, the current is "ahead" of the voltage because it's what's filling up the capacitor and establishing the voltage.

**Connecting to Course Outcomes:** Again, this reinforces **CO1** by demonstrating the combined effects of resistance and reactance in a different configuration.

### 4. Series RLC Circuits

Finally, let's put all three together: a resistor (R), an inductor (L), and a capacitor (C) in series. This is a very common and important circuit configuration.

*   **The Circuit:** Imagine a tuning circuit in a radio receiver or a filter network in an audio system. These often involve combinations of R, L, and C.
*   **Impedance:** In a series RLC circuit, the total impedance is the vector sum of the resistance, inductive reactance, and capacitive reactance.
    $Z_{RLC} = R + j(X_L - X_C)$
    The magnitude of the impedance is:
    $|Z_{RLC}| = \sqrt{R^2 + (X_L - X_C)^2}$
*   **Phase Relationship:** The phase angle $\phi$ between the total voltage and current depends on the relative values of $X_L$ and $X_C$.
    *   If $X_L > X_C$: The circuit is predominantly inductive. Voltage leads current.
    *   If $X_C > X_L$: The circuit is predominantly capacitive. Current leads voltage (or voltage lags current).
    *   If $X_L = X_C$: This is a special condition called **resonance**. The reactances cancel each other out ($X_L - X_C = 0$), and the impedance of the circuit becomes purely resistive ($Z_{RLC} = R$). In this case, the voltage and current are in phase ($\phi = 0^\circ$), and the impedance is at its minimum. This is why tuning circuits work – they are designed to resonate at a specific frequency.

The phase angle $\phi$ can be found using:
$\cos(\phi) = \frac{R}{|Z_{RLC}|}$
$\sin(\phi) = \frac{X_L - X_C}{|Z_{RLC}|}$
$\tan(\phi) = \frac{X_L - X_C}{R}$

**Connecting to Course Outcomes:** This is a direct application of **CO1**, combining multiple circuit elements and analyzing their behavior, including the critical concept of resonance which is fundamental to many electronic systems.

### 5. Power in AC Circuits: The Big Picture

Now that we understand how R, L, and C components affect current and voltage, let's talk about power. In AC circuits, power isn't as straightforward as in DC. We have three types of power:

**a) Apparent Power (S)**

*   **What it is:** Apparent power is simply the product of the RMS (Root Mean Square) voltage and the RMS current in the circuit. It's what the power source *appears* to be supplying. It's called "apparent" because it doesn't account for the phase difference between voltage and current.
*   **Formula:**
    $S = V_{rms} \times I_{rms}$
    or, using impedance: $S = I_{rms}^2 \times |Z|$
*   **Units:** Volt-Amperes (VA).
*   **Analogy:** Think of a beer mug. The entire mug, including the foam and the liquid, represents apparent power. You're paying for the whole mug, but only the liquid is useful.

**b) Active Power (P) or True Power or Real Power**

*   **What it is:** This is the *actual* power that is dissipated by the resistive components of the circuit, doing useful work. It's the power that gets converted into heat, light, or mechanical energy. In our series RL, RC, or RLC circuits, only the resistor dissipates active power. Inductors and capacitors *store* energy during one part of the AC cycle and *return* it to the circuit during another part; they don't dissipate it as heat.
*   **Formula:**
    $P = V_{rms} \times I_{rms} \times \cos(\phi)$
    where $\cos(\phi)$ is the power factor.
    Or, using resistance: $P = I_{rms}^2 \times R$
*   **Units:** Watts (W).
*   **Analogy:** In our beer mug analogy, active power is the actual beer – the part that quenches your thirst.

**c) Reactive Power (Q)**

*   **What it is:** This is the power that oscillates back and forth between the source and the reactive components (inductors and capacitors). It's the power associated with the energy stored in the magnetic fields of inductors and the electric fields of capacitors. It doesn't do any useful work but is necessary for the operation of inductive and capacitive loads.
*   **Formula:**
    $Q = V_{rms} \times I_{rms} \times \sin(\phi)$
    or, using reactances: $Q = I_{rms}^2 \times (X_L - X_C)$ (Note the sign convention for inductive vs. capacitive reactive power)
*   **Units:** Volt-Amperes Reactive (VAR).
*   **Analogy:** In the beer mug, reactive power is the foam. It takes up space in the mug (uses VA) but doesn't contribute to quenching thirst (doesn't do real work).

**The Power Triangle:**

These three types of power are related by the **power triangle**, which is a right-angled triangle where:
*   Apparent Power (S) is the hypotenuse.
*   Active Power (P) is the adjacent side.
*   Reactive Power (Q) is the opposite side.
*   The angle between S and P is the phase angle $\phi$.

From this triangle, we can see:
$S^2 = P^2 + Q^2$

This makes perfect sense! The total power supplied (apparent) is made up of the power that does useful work (active) and the power that just goes back and forth (reactive).

**Connecting to Course Outcomes:** This section is crucial for **CO1**. Understanding these power concepts is essential for analyzing AC circuits and ensuring efficient power transfer. It explains *how* power is used and what factors influence it.

### 6. Power Factor ($\cos(\phi)$)

*   **What it is:** The power factor (PF) is the cosine of the phase angle ($\phi$) between the voltage and current in an AC circuit. It's a measure of how effectively the electrical power is being used.
*   **Formula:**
    $PF = \cos(\phi) = \frac{P}{S} = \frac{R}{|Z|}$
*   **Values:**
    *   **$PF = 1$ (Unity Power Factor):** This occurs in a purely resistive circuit ($\phi = 0^\circ$). All the apparent power is active power. This is ideal.
    *   **$PF < 1$ (Lagging):** Occurs in inductive circuits ($X_L > X_C$). Current lags voltage. For example, motors, transformers, and fluorescent lights have inductive loads.
    *   **$PF < 1$ (Leading):** Occurs in capacitive circuits ($X_C > X_L$). Current leads voltage. For example, capacitor banks.
*   **Why is it Important?**
    *   **Efficiency:** Low power factor means more apparent power (VA) is needed to deliver the same amount of active power (W). This requires larger generators, transformers, and transmission lines, increasing costs and losses.
    *   **Utilities:** Electricity companies often penalize industrial customers for low power factors because it increases the load on their infrastructure.
    *   **Motor Performance:** Inductive loads, like motors, typically have lagging power factors. To improve this, capacitors are often added in parallel with the motors to counteract the inductive effect.

**Think about it:** Imagine you're pulling a wagon. If you pull straight ahead (unity PF), all your effort (apparent power) moves the wagon (active power). If you pull at an angle, some of your effort is wasted in a sideways direction (reactive power), and you have to pull harder overall (higher apparent power) to achieve the same forward motion.

**Connecting to Course Outcomes:** This directly addresses **CO1** by providing a critical parameter for evaluating AC circuit performance. It's a practical concept that explains real-world power system issues.

### 7. Simple Numerical Problems

Let's work through some examples to solidify these concepts. Remember your formulas and the power triangle!

**Problem 1: Series RL Circuit**
A resistor of $10 \Omega$ is connected in series with an inductor of $50 \text{ mH}$ across a $230\text{ V}, 50\text{ Hz}$ AC supply. Calculate:
(a) The inductive reactance ($X_L$).
(b) The impedance ($Z$) of the circuit.
(c) The current ($I$) drawn from the supply.
(d) The power factor.
(e) The active power (P), reactive power (Q), and apparent power (S).

**Solution:**

Given: $R = 10 \Omega$, $L = 50 \text{ mH} = 0.050 \text{ H}$, $V_{rms} = 230 \text{ V}$, $f = 50 \text{ Hz}$.

(a) **Inductive Reactance ($X_L$):**
$X_L = 2\pi fL = 2 \times \pi \times 50 \times 0.050$
$X_L = 5\pi \approx 15.71 \Omega$

(b) **Impedance ($Z$):**
$|Z| = \sqrt{R^2 + X_L^2} = \sqrt{(10 \Omega)^2 + (15.71 \Omega)^2}$
$|Z| = \sqrt{100 + 246.81} = \sqrt{346.81} \approx 18.62 \Omega$

(c) **Current ($I$):**
$I_{rms} = \frac{V_{rms}}{|Z|} = \frac{230 \text{ V}}{18.62 \Omega} \approx 12.35 \text{ A}$

(d) **Power Factor (PF):**
$PF = \cos(\phi) = \frac{R}{|Z|} = \frac{10 \Omega}{18.62 \Omega} \approx 0.537$
Since $X_L$ is present, this is a lagging power factor. So, $PF = 0.537 \text{ lagging}$.

(e) **Active Power (P), Reactive Power (Q), and Apparent Power (S):**
*   **Apparent Power (S):**
    $S = V_{rms} \times I_{rms} = 230 \text{ V} \times 12.35 \text{ A} \approx 2840.5 \text{ VA}$
*   **Active Power (P):**
    $P = V_{rms} \times I_{rms} \times PF = 230 \text{ V} \times 12.35 \text{ A} \times 0.537 \approx 1525.4 \text{ W}$
    Alternatively, $P = I_{rms}^2 \times R = (12.35 \text{ A})^2 \times 10 \Omega \approx 1525.2 \text{ W}$
*   **Reactive Power (Q):**
    First, find the angle $\phi$: $\phi = \arccos(0.537) \approx 57.5^\circ$.
    $Q = V_{rms} \times I_{rms} \times \sin(\phi) = 230 \text{ V} \times 12.35 \text{ A} \times \sin(57.5^\circ)$
    $Q \approx 2840.5 \text{ VA} \times 0.843 \approx 2395.5 \text{ VAR}$
    Alternatively, $Q = I_{rms}^2 \times X_L = (12.35 \text{ A})^2 \times 15.71 \Omega \approx 2396.2 \text{ VAR}$.
    We can also verify using the power triangle: $S^2 = P^2 + Q^2$.
    $(2840.5)^2 \approx (1525.4)^2 + (2395.5)^2$
    $8068482 \approx 2326857 + 5738400$ (approximately equal due to rounding).

**Problem 2: Series RC Circuit**
A resistor of $25 \Omega$ is connected in series with a capacitor of $100 \mu\text{F}$ across a $200\text{ V}, 60\text{ Hz}$ AC supply. Calculate:
(a) The capacitive reactance ($X_C$).
(b) The impedance ($Z$) of the circuit.
(c) The current ($I$) drawn from the supply.
(d) The power factor.
(e) The active power (P), reactive power (Q), and apparent power (S).

**Solution:**

Given: $R = 25 \Omega$, $C = 100 \mu\text{F} = 100 \times 10^{-6} \text{ F}$, $V_{rms} = 200 \text{ V}$, $f = 60 \text{ Hz}$.

(a) **Capacitive Reactance ($X_C$):**
$X_C = \frac{1}{2\pi fC} = \frac{1}{2 \times \pi \times 60 \times 100 \times 10^{-6}}$
$X_C = \frac{1}{0.0377} \approx 26.53 \Omega$

(b) **Impedance ($Z$):**
$|Z| = \sqrt{R^2 + X_C^2} = \sqrt{(25 \Omega)^2 + (26.53 \Omega)^2}$
$|Z| = \sqrt{625 + 703.84} = \sqrt{1328.84} \approx 36.45 \Omega$

(c) **Current ($I$):**
$I_{rms} = \frac{V_{rms}}{|Z|} = \frac{200 \text{ V}}{36.45 \Omega} \approx 5.49 \text{ A}$

(d) **Power Factor (PF):**
$PF = \cos(\phi) = \frac{R}{|Z|} = \frac{25 \Omega}{36.45 \Omega} \approx 0.686$
Since $X_C$ is present, this is a leading power factor. So, $PF = 0.686 \text{ leading}$.

(e) **Active Power (P), Reactive Power (Q), and Apparent Power (S):**
*   **Apparent Power (S):**
    $S = V_{rms} \times I_{rms} = 200 \text{ V} \times 5.49 \text{ A} \approx 1098 \text{ VA}$
*   **Active Power (P):**
    $P = V_{rms} \times I_{rms} \times PF = 200 \text{ V} \times 5.49 \text{ A} \times 0.686 \approx 753.5 \text{ W}$
    Alternatively, $P = I_{rms}^2 \times R = (5.49 \text{ A})^2 \times 25 \Omega \approx 753.5 \text{ W}$
*   **Reactive Power (Q):**
    First, find the angle $\phi$: $\phi = \arccos(0.686) \approx 46.7^\circ$.
    $Q = V_{rms} \times I_{rms} \times \sin(\phi) = 200 \text{ V} \times 5.49 \text{ A} \times \sin(46.7^\circ)$
    $Q \approx 1098 \text{ VA} \times 0.728 \approx 800.8 \text{ VAR}$
    Alternatively, $Q = I_{rms}^2 \times X_C = (5.49 \text{ A})^2 \times 26.53 \Omega \approx 800.7 \text{ VAR}$.
    This is capacitive reactive power.

**Problem 3: Series RLC Circuit (Resonance)**
A series circuit consists of a $20 \Omega$ resistor, a $0.1 \text{ H}$ inductor, and a $50 \mu\text{F}$ capacitor. It is connected to a $240\text{ V}$ AC supply.
(a) At what frequency will the circuit resonate?
(b) What is the impedance at resonance?
(c) What is the current at resonance?
(d) What is the power factor at resonance?

**Solution:**

Given: $R = 20 \Omega$, $L = 0.1 \text{ H}$, $C = 50 \mu\text{F} = 50 \times 10^{-6} \text{ F}$, $V_{rms} = 240 \text{ V}$.

(a) **Resonant Frequency ($f_r$):**
Resonance occurs when $X_L = X_C$.
$2\pi f_r L = \frac{1}{2\pi f_r C}$
$f_r^2 = \frac{1}{(2\pi)^2 LC}$
$f_r = \frac{1}{2\pi \sqrt{LC}} = \frac{1}{2\pi \sqrt{0.1 \text{ H} \times 50 \times 10^{-6} \text{ F}}}$
$f_r = \frac{1}{2\pi \sqrt{5 \times 10^{-6}}} = \frac{1}{2\pi \times 2.236 \times 10^{-3}}$
$f_r = \frac{1}{0.01405} \approx 71.19 \text{ Hz}$

(b) **Impedance at Resonance ($Z_r$):**
At resonance, $X_L - X_C = 0$.
$|Z_r| = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + 0^2} = R$
$|Z_r| = 20 \Omega$

(c) **Current at Resonance ($I_r$):**
$I_{r, rms} = \frac{V_{rms}}{|Z_r|} = \frac{240 \text{ V}}{20 \Omega} = 12 \text{ A}$
This is the maximum current for a given voltage in this circuit, as the impedance is minimum at resonance.

(d) **Power Factor at Resonance:**
At resonance, the circuit behaves purely resistively, so $\phi = 0^\circ$.
$PF = \cos(0^\circ) = 1$ (Unity Power Factor).

**Connecting to Course Outcomes:** These problems directly apply **CO1**, requiring students to calculate impedance, current, and power factor for various AC circuits, demonstrating their ability to use circuit laws and fundamental concepts.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain the difference between apparent power, active power, and reactive power. Use an analogy to illustrate your explanation. What is the significance of the power factor in AC systems?

**Answer:**
*   **Apparent Power (S):** The product of RMS voltage and RMS current ($S = V_{rms}I_{rms}$). It's the total power that the supply must be capable of delivering. Units: VA.
*   **Active Power (P):** The power that actually does useful work or is dissipated as heat. It is the product of RMS voltage, RMS current, and the power factor ($P = V_{rms}I_{rms}\cos\phi$). Units: Watts (W).
*   **Reactive Power (Q):** The power that oscillates between the source and reactive components (inductors and capacitors) and is stored in their electric and magnetic fields. It does not perform useful work. It is the product of RMS voltage, RMS current, and the sine of the phase angle ($Q = V_{rms}I_{rms}\sin\phi$). Units: VAR.

**Analogy:** Imagine a beer mug. The entire mug, including the beer and foam, represents apparent power (VA). The actual beer is the active power (W) – what you get for your money and what is useful. The foam is the reactive power (VAR) – it takes up space and contributes to the overall volume (VA) but isn't the useful part.

**Significance of Power Factor:** The power factor indicates how effectively electrical power is being used. A power factor close to 1 (unity) means most of the apparent power is being converted into active power, signifying efficient usage. A low power factor (lagging or leading) means a large portion of the power is reactive, leading to wasted energy, lower system efficiency, and increased costs for utilities and consumers.

---

**Question 2 (Exam-Oriented/Calculation):**
A series circuit contains a resistor of $60 \Omega$, an inductor of $0.2 \text{ H}$, and a capacitor of $30 \mu\text{F}$. If it is connected to a $250\text{ V}, 50\text{ Hz}$ AC supply, calculate:
(a) The impedance of the circuit.
(b) The current flowing in the circuit.
(c) The phase angle and power factor.
(d) The active power dissipated by the resistor.

**Answer:**

Given: $R = 60 \Omega$, $L = 0.2 \text{ H}$, $C = 30 \mu\text{F} = 30 \times 10^{-6} \text{ F}$, $V_{rms} = 250 \text{ V}$, $f = 50 \text{ Hz}$.

First, calculate reactances:
$X_L = 2\pi fL = 2 \times \pi \times 50 \times 0.2 = 20\pi \approx 62.83 \Omega$
$X_C = \frac{1}{2\pi fC} = \frac{1}{2 \times \pi \times 50 \times 30 \times 10^{-6}} = \frac{1}{0.0094247} \approx 106.1 \Omega$

(a) **Impedance ($Z$):**
The net reactance is $X = X_L - X_C = 62.83 \Omega - 106.1 \Omega = -43.27 \Omega$.
$|Z| = \sqrt{R^2 + X^2} = \sqrt{(60 \Omega)^2 + (-43.27 \Omega)^2}$
$|Z| = \sqrt{3600 + 1872.29} = \sqrt{5472.29} \approx 73.97 \Omega$

(b) **Current ($I$):**
$I_{rms} = \frac{V_{rms}}{|Z|} = \frac{250 \text{ V}}{73.97 \Omega} \approx 3.38 \text{ A}$

(c) **Phase Angle ($\phi$) and Power Factor (PF):**
$\tan(\phi) = \frac{X_L - X_C}{R} = \frac{-43.27 \Omega}{60 \Omega} \approx -0.721$
$\phi = \arctan(-0.721) \approx -35.8^\circ$
The negative angle indicates that the circuit is capacitive, and the current leads the voltage.
$PF = \cos(\phi) = \cos(-35.8^\circ) \approx 0.811$
Since the current leads the voltage, the power factor is **0.811 leading**.

(d) **Active Power ($P$):**
$P = V_{rms} \times I_{rms} \times PF = 250 \text{ V} \times 3.38 \text{ A} \times 0.811$
$P \approx 683.7 \text{ W}$
Alternatively, $P = I_{rms}^2 \times R = (3.38 \text{ A})^2 \times 60 \Omega \approx 684.2 \text{ W}$. (Slight difference due to rounding).

---

Keep practicing these types of problems! Remember to always calculate reactances first, then impedance, then current, and finally power and power factor. Pay close attention to whether the circuit is inductive or capacitive by comparing $X_L$ and $X_C$. This will help you immensely with **CO1**. Good luck!
