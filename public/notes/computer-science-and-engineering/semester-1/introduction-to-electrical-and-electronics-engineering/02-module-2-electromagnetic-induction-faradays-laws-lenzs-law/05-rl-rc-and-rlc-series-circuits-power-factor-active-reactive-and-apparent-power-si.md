---
title: "RL, RC and RLC series circuits- power factor, active, reactive and apparent power. Simple numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction : Faraday's laws, Lenz's law"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c6e"
status: "completed"
scrapedAt: "2026-05-20T16:39:07.181Z"
---
Here are your comprehensive study notes for Module 2: Electromagnetic Induction, focusing on RL, RC, and RLC series circuits, power concepts, and simple numerical problems.

***

# Module 2: Electromagnetic Induction - AC Circuits and Power Concepts

Welcome back, everyone! In our previous sessions, we've explored the fascinating world of electromagnetic induction, understanding how changing magnetic fields can induce voltages. Today, we're going to build upon that foundation and dive into the behavior of AC circuits when they contain not just resistors, but also inductors and capacitors. These circuits, known as RL, RC, and RLC circuits, are fundamental to so many electrical and electronic applications, from simple radios to complex power systems. We'll also uncover the crucial concepts of power in AC circuits, which are often a point of confusion but are absolutely vital for understanding how energy is used and managed.

Our goal today is to understand how inductors (L) and capacitors (C), when combined with resistors (R) in series, affect the flow of alternating current (AC) and how we quantify the power involved. By the end of this session, you should be able to explain these concepts clearly and even tackle some basic problems related to them. This directly links to our **Course Outcome 1 (CO1)**, where we aim to apply fundamental concepts to solve simple AC circuits.

## Understanding AC Circuits with Reactance: The Impedance Concept

So, we know that a resistor simply opposes the flow of current, and its opposition is independent of the frequency of the AC supply. But what about inductors and capacitors? These are our dynamic players.

### The Inductor's Opposition: Inductive Reactance ($X_L$)

Remember the inductor from our discussion on Faraday's Law? It's essentially a coil of wire. When an AC voltage is applied across it, the current is constantly changing, which in turn creates a constantly changing magnetic field. This changing magnetic field induces a voltage *back* in the coil that opposes the applied voltage – this is the self-induced emf. This opposition to AC current flow by an inductor is called **inductive reactance**.

Think of it like a person pushing against a swinging door. The faster you push (higher frequency), the harder it is to push against the door's momentum. Similarly, the higher the frequency of the AC supply, the more the inductor opposes the current. This opposition is directly proportional to both the frequency ($f$) and the inductance ($L$) of the coil.

The formula for inductive reactance is:
$$X_L = 2 \pi f L$$
Where:
*   $X_L$ is the inductive reactance, measured in Ohms ($\Omega$).
*   $f$ is the frequency of the AC supply, in Hertz (Hz).
*   $L$ is the inductance, in Henrys (H).

### The Capacitor's Opposition: Capacitive Reactance ($X_C$)

Now, let's consider the capacitor. A capacitor consists of two conductive plates separated by an insulating dielectric. When an AC voltage is applied, the capacitor continuously charges and discharges. The opposition it offers to the flow of AC current is called **capacitive reactance**.

Imagine filling a bucket with water and then emptying it, and repeating this action with a pump. If you try to pump water in and out very rapidly (high frequency), it becomes difficult because the bucket is always close to being full or empty, and the water has very little time to flow. The capacitor offers less opposition at lower frequencies, allowing charge to build up and flow more easily. So, capacitive reactance is *inversely* proportional to both the frequency and the capacitance ($C$).

The formula for capacitive reactance is:
$$X_C = \frac{1}{2 \pi f C}$$
Where:
*   $X_C$ is the capacitive reactance, measured in Ohms ($\Omega$).
*   $f$ is the frequency of the AC supply, in Hertz (Hz).
*   $C$ is the capacitance, in Farads (F).

### Combining Opposition: Impedance ($Z$)

In AC circuits, we can't just add resistances and reactances directly like we do in DC circuits. Why? Because voltage and current in inductors and capacitors don't behave in sync with the applied voltage – they have a phase difference. To account for both the resistance (which we call **impedance** in AC circuits) and the reactance, we use a concept called **impedance ($Z$)**.

Impedance is the total opposition to current flow in an AC circuit. It's a complex quantity because it includes both the resistive component (R) and the reactive component ($X_L$ or $X_C$).

#### RL Series Circuit

In an RL series circuit, we have a resistor and an inductor in series. The impedance ($Z$) is the vector sum of the resistance (R) and the inductive reactance ($X_L$). We can visualize this using a phasor diagram. Resistance is along the positive real axis, and inductive reactance is along the positive imaginary axis (because the voltage across an inductor leads the current by 90 degrees).

So, the impedance of an RL series circuit is given by:
$$Z_{RL} = R + jX_L$$
The magnitude of the impedance, which determines the total opposition to current, is:
$$|Z_{RL}| = \sqrt{R^2 + X_L^2}$$
And the phase angle ($\phi$) by which the voltage leads the current is:
$$\phi = \arctan\left(\frac{X_L}{R}\right)$$

**Analogy Time:** Imagine you're trying to walk through a windy field. The wind (reactance) tries to push you sideways, while the uneven ground (resistance) slows you down. Your total difficulty in moving forward is a combination of both. In an RL circuit, the inductor's opposition is like a "sideways" push that's out of sync with your forward motion.

#### RC Series Circuit

Similarly, in an RC series circuit, with a resistor and a capacitor in series, the impedance ($Z$) is the vector sum of the resistance (R) and the capacitive reactance ($X_C$). In the phasor diagram, capacitive reactance is along the negative imaginary axis (because the voltage across a capacitor lags the current by 90 degrees).

The impedance of an RC series circuit is:
$$Z_{RC} = R - jX_C$$
The magnitude of the impedance is:
$$|Z_{RC}| = \sqrt{R^2 + X_C^2}$$
And the phase angle ($\phi$) by which the voltage lags the current is:
$$\phi = \arctan\left(-\frac{X_C}{R}\right)$$

**Analogy Time:** Now, imagine you're trying to swim across a river. The current of the river (reactance) tries to push you downstream, while the resistance of the water (resistance) slows your forward progress. In an RC circuit, the capacitor's opposition is like a "pulling back" effect that's out of sync with your intended direction.

#### RLC Series Circuit

When we combine all three – a resistor, an inductor, and a capacitor – in series, we get an RLC series circuit. The total reactance is the difference between inductive reactance and capacitive reactance: $X = X_L - X_C$.

The impedance of an RLC series circuit is:
$$Z_{RLC} = R + j(X_L - X_C)$$
The magnitude of the impedance is:
$$|Z_{RLC}| = \sqrt{R^2 + (X_L - X_C)^2}$$
And the phase angle ($\phi$) is:
$$\phi = \arctan\left(\frac{X_L - X_C}{R}\right)$$

A really important phenomenon occurs in RLC circuits when $X_L = X_C$. This is called **resonance**, and at this point, the impedance is purely resistive ($Z = R$), and the circuit draws maximum current for a given voltage. We'll explore resonance more in later modules, but it's good to be aware of it!

**Connecting to Course Outcomes:** Understanding impedance and how it's calculated for RL, RC, and RLC circuits directly helps us fulfill **CO1**. This is about applying circuit laws and concepts to find current, voltage drops, and understand circuit behavior.

## Power in AC Circuits: Beyond Simple Voltage x Current

In DC circuits, power is straightforward: $P = V \times I$. But in AC circuits, because of the phase difference between voltage and current, it gets a bit more nuanced. We need to distinguish between different types of power.

### Apparent Power ($S$)

Apparent power is simply the product of the RMS (Root Mean Square) voltage and the RMS current in the circuit, regardless of the phase angle. It's what the power supply "sees" as the total power flowing.

$$S = V_{rms} \times I_{rms}$$
Apparent power is measured in Volt-Amperes (VA). It represents the total power that must be delivered, including both the useful power and the power that's "wasted" or exchanged between the source and the reactive components.

### Active Power (Real Power, $P$)

Active power, also known as real power, is the actual power that is dissipated by the resistive components of the circuit and is converted into useful work (like heat in a resistor, light in a bulb, or mechanical work in a motor). This is the power that truly does work for us.

In an AC circuit, the active power is the product of RMS voltage, RMS current, and the cosine of the phase angle between them.

$$P = V_{rms} \times I_{rms} \times \cos(\phi)$$
Alternatively, since $I_{rms} = V_{rms} / |Z|$, we can also write:
$$P = I_{rms}^2 \times R$$
Active power is measured in Watts (W).

### Reactive Power ($Q$)

Reactive power is the power that is exchanged between the source and the reactive components (inductors and capacitors). It doesn't perform any useful work but is necessary for the operation of inductive and capacitive devices. Inductors store energy in their magnetic fields, and capacitors store energy in their electric fields. This energy is cycled back and forth between the source and these components.

Reactive power is calculated as the product of RMS voltage, RMS current, and the sine of the phase angle.

$$Q = V_{rms} \times I_{rms} \times \sin(\phi)$$
Or,
$$Q = I_{rms}^2 \times X$$
Where $X = X_L - X_C$.
Reactive power is measured in Volt-Amperes Reactive (VAR).
*   **Inductive loads** (like motors) consume reactive power, meaning $X_L > X_C$ (or $X_C=0$), and $Q$ is positive. The voltage across the inductor leads the current.
*   **Capacitive loads** (like some power factor correction circuits) generate reactive power, meaning $X_C > X_L$ (or $X_L=0$), and $Q$ is negative. The voltage across the capacitor lags the current.

**The Power Triangle:**
These three types of power – Apparent, Active, and Reactive – are related by a right-angled triangle, often called the **power triangle**.
*   The **adjacent** side represents Active Power ($P$).
*   The **opposite** side represents Reactive Power ($Q$).
*   The **hypotenuse** represents Apparent Power ($S$).
The angle between $P$ and $S$ is the phase angle $\phi$.

From this triangle, we can see the relationship:
$$S^2 = P^2 + Q^2$$
And also,
$$P = S \cos(\phi)$$
$$Q = S \sin(\phi)$$

This visual representation is extremely helpful for understanding how these powers relate.

### Power Factor (pf)

The **power factor (pf)** is the cosine of the phase angle ($\phi$) between the voltage and current in an AC circuit.

$$pf = \cos(\phi)$$
The power factor tells us how effectively the electrical power is being used.
*   A power factor of **1** (or unity) means the voltage and current are in phase ($\phi = 0^\circ$), which happens in a purely resistive circuit. In this ideal case, apparent power ($S$) is equal to active power ($P$), and all the power delivered is doing useful work.
*   A power factor **less than 1** indicates that some power is reactive power, and not all the power delivered is doing useful work.

Power factor is typically expressed as a decimal (e.g., 0.8) or as a percentage (e.g., 80%). It's also often described as "leading" or "lagging."
*   **Lagging Power Factor:** Occurs in inductive circuits (like motors), where current lags voltage. This is common in industry.
*   **Leading Power Factor:** Occurs in capacitive circuits, where current leads voltage.

**Why is Power Factor Important?**
A low power factor is undesirable for several reasons:
1.  **Increased Current:** For the same amount of active power ($P$), a lower power factor means higher apparent power ($S = P/pf$) and thus higher RMS current ($I_{rms} = S/V_{rms}$). This higher current leads to:
    *   Greater $I^2R$ losses (heat) in transmission lines and equipment.
    *   Larger conductor sizes are required, increasing costs.
    *   Voltage drops are more significant.
2.  **Reduced System Capacity:** The utility company must generate and transmit apparent power ($S$), not just active power ($P$). A low power factor means a larger portion of the system's capacity is used for reactive power, reducing the amount of active power that can be delivered.
3.  **Penalties:** Industrial customers with consistently low power factors are often penalized by utility companies because they draw more current and place a greater burden on the power infrastructure.

This understanding of power is crucial for many applications and is often tested in exams, so pay close attention to the distinctions between S, P, and Q, and how power factor influences them. This directly ties into **CO1** as well, as analyzing power is a key part of understanding AC circuits.

## Simple Numerical Problems

Let's work through a few examples to solidify these concepts. Remember to draw phasor diagrams or power triangles if it helps you visualize!

---

**Example 1: RL Series Circuit**

A resistor of $10 \Omega$ is connected in series with an inductor of $20$ mH across a $230$ V, $50$ Hz AC supply. Calculate:
a) Inductive Reactance ($X_L$)
b) Impedance ($Z$)
c) Current ($I_{rms}$)
d) Phase angle ($\phi$)
e) Apparent Power ($S$)
f) Active Power ($P$)
g) Reactive Power ($Q$)
h) Power Factor (pf)

**Solution:**

Given:
$R = 10 \Omega$
$L = 20 \text{ mH} = 20 \times 10^{-3} \text{ H}$
$V_{rms} = 230 \text{ V}$
$f = 50 \text{ Hz}$

a) **Inductive Reactance ($X_L$):**
$X_L = 2 \pi f L = 2 \pi \times 50 \times (20 \times 10^{-3})$
$X_L = 100 \pi \times 20 \times 10^{-3} = 2 \pi \Omega$
$X_L \approx 6.283 \Omega$

b) **Impedance ($Z$):**
$Z = \sqrt{R^2 + X_L^2} = \sqrt{10^2 + (6.283)^2}$
$Z = \sqrt{100 + 39.48} = \sqrt{139.48}$
$Z \approx 11.81 \Omega$

c) **Current ($I_{rms}$):**
$I_{rms} = \frac{V_{rms}}{Z} = \frac{230}{11.81}$
$I_{rms} \approx 19.48 \text{ A}$

d) **Phase angle ($\phi$):**
$\phi = \arctan\left(\frac{X_L}{R}\right) = \arctan\left(\frac{6.283}{10}\right)$
$\phi = \arctan(0.6283)$
$\phi \approx 32.13^\circ$
Since $X_L > 0$, this is a lagging power factor.

e) **Apparent Power ($S$):**
$S = V_{rms} \times I_{rms} = 230 \times 19.48$
$S \approx 4480.4 \text{ VA}$

f) **Active Power ($P$):**
$P = V_{rms} \times I_{rms} \times \cos(\phi) = 230 \times 19.48 \times \cos(32.13^\circ)$
$P = 4480.4 \times 0.847$
$P \approx 3795.9 \text{ W}$
Alternatively, $P = I_{rms}^2 \times R = (19.48)^2 \times 10 = 379.45 \times 10 = 3794.5 \text{ W}$ (Slight difference due to rounding).

g) **Reactive Power ($Q$):**
$Q = V_{rms} \times I_{rms} \times \sin(\phi) = 230 \times 19.48 \times \sin(32.13^\circ)$
$Q = 4480.4 \times 0.5317$
$Q \approx 2381.3 \text{ VAR}$
Alternatively, $Q = I_{rms}^2 \times X_L = (19.48)^2 \times 6.283 = 379.45 \times 6.283 \approx 2385.4 \text{ VAR}$ (Slight difference due to rounding).

h) **Power Factor (pf):**
$pf = \cos(\phi) = \cos(32.13^\circ)$
$pf \approx 0.847 \text{ lagging}$

**Quick Check:** Does $S^2 = P^2 + Q^2$?
$(4480.4)^2 \approx (3795.9)^2 + (2381.3)^2$
$20073992 \approx 14408860 + 5670599 \approx 20079459$. Yes, it checks out within rounding.

---

**Example 2: RC Series Circuit**

A capacitor of $50 \mu$F is connected in series with a resistor of $25 \Omega$ across a $240$ V, $60$ Hz AC supply. Calculate:
a) Capacitive Reactance ($X_C$)
b) Impedance ($Z$)
c) Current ($I_{rms}$)
d) Phase angle ($\phi$)
e) Power Factor (pf)
f) Active Power ($P$)
g) Reactive Power ($Q$)

**Solution:**

Given:
$R = 25 \Omega$
$C = 50 \mu\text{F} = 50 \times 10^{-6} \text{ F}$
$V_{rms} = 240 \text{ V}$
$f = 60 \text{ Hz}$

a) **Capacitive Reactance ($X_C$):**
$X_C = \frac{1}{2 \pi f C} = \frac{1}{2 \pi \times 60 \times (50 \times 10^{-6})}$
$X_C = \frac{1}{2 \pi \times 60 \times 50 \times 10^{-6}} = \frac{1}{0.01885}$
$X_C \approx 53.05 \Omega$

b) **Impedance ($Z$):**
$Z = \sqrt{R^2 + X_C^2} = \sqrt{25^2 + (53.05)^2}$
$Z = \sqrt{625 + 2814.30} = \sqrt{3439.30}$
$Z \approx 58.65 \Omega$

c) **Current ($I_{rms}$):**
$I_{rms} = \frac{V_{rms}}{Z} = \frac{240}{58.65}$
$I_{rms} \approx 4.09 \text{ A}$

d) **Phase angle ($\phi$):**
$\phi = \arctan\left(\frac{X_C}{R}\right) = \arctan\left(\frac{53.05}{25}\right)$
$\phi = \arctan(2.122)$
$\phi \approx 64.78^\circ$
Since $X_C > 0$ (and we take the magnitude for the angle calculation, but remember current leads voltage in a capacitor), the voltage lags the current by this angle, so the phase angle of voltage with respect to current is approximately $-64.78^\circ$. However, when we refer to the phase angle of the circuit, it's usually the angle of impedance.

e) **Power Factor (pf):**
$pf = \cos(\phi) = \cos(64.78^\circ)$
$pf \approx 0.426 \text{ leading}$
The term "leading" indicates that the current leads the voltage, which is characteristic of a capacitive circuit.

f) **Active Power ($P$):**
$P = V_{rms} \times I_{rms} \times \cos(\phi) = 240 \times 4.09 \times 0.426$
$P \approx 417.5 \text{ W}$
Alternatively, $P = I_{rms}^2 \times R = (4.09)^2 \times 25 = 16.73 \times 25 \approx 418.25 \text{ W}$.

g) **Reactive Power ($Q$):**
$Q = V_{rms} \times I_{rms} \times \sin(\phi) = 240 \times 4.09 \times \sin(64.78^\circ)$
$Q = 981.6 \times 0.9048$
$Q \approx 888.2 \text{ VAR}$
Alternatively, $Q = I_{rms}^2 \times X_C = (4.09)^2 \times 53.05 = 16.73 \times 53.05 \approx 887.2 \text{ VAR}$.
Since it's a capacitive circuit, this is capacitive reactive power.

**Important Note for Exams:** When asked for the phase angle, be mindful if the question asks for the angle of voltage with respect to current or vice versa. For impedance, the angle is $\arctan((X_L-X_C)/R)$. For a capacitive circuit, $X_L=0$, so it's $\arctan(-X_C/R)$, which is negative. A negative angle for impedance means current leads voltage.

---

**Example 3: RLC Series Circuit (Resonance Consideration)**

An RLC series circuit consists of a $5 \Omega$ resistor, a $20$ mH inductor, and a $200 \mu$F capacitor. If the RMS voltage across the series combination is $100$ V at a frequency of $50$ Hz, calculate:
a) $X_L$
b) $X_C$
c) Impedance ($Z$)
d) Current ($I_{rms}$)
e) Power Factor (pf)
f) Active Power ($P$)

**Solution:**

Given:
$R = 5 \Omega$
$L = 20 \text{ mH} = 20 \times 10^{-3} \text{ H}$
$C = 200 \mu\text{F} = 200 \times 10^{-6} \text{ F}$
$V_{rms} = 100 \text{ V}$
$f = 50 \text{ Hz}$

a) **Inductive Reactance ($X_L$):**
$X_L = 2 \pi f L = 2 \pi \times 50 \times (20 \times 10^{-3})$
$X_L = 100 \pi \times 20 \times 10^{-3} = 2 \pi \Omega$
$X_L \approx 6.283 \Omega$

b) **Capacitive Reactance ($X_C$):**
$X_C = \frac{1}{2 \pi f C} = \frac{1}{2 \pi \times 50 \times (200 \times 10^{-6})}$
$X_C = \frac{1}{100 \pi \times 200 \times 10^{-6}} = \frac{1}{0.06283}$
$X_C \approx 15.915 \Omega$

c) **Impedance ($Z$):**
$Z = \sqrt{R^2 + (X_L - X_C)^2}$
$Z = \sqrt{5^2 + (6.283 - 15.915)^2}$
$Z = \sqrt{25 + (-9.632)^2}$
$Z = \sqrt{25 + 92.776}$
$Z = \sqrt{117.776}$
$Z \approx 10.85 \Omega$

d) **Current ($I_{rms}$):**
$I_{rms} = \frac{V_{rms}}{Z} = \frac{100}{10.85}$
$I_{rms} \approx 9.216 \text{ A}$

e) **Power Factor (pf):**
The phase angle $\phi$ is given by $\arctan\left(\frac{X_L - X_C}{R}\right)$.
$\phi = \arctan\left(\frac{6.283 - 15.915}{5}\right) = \arctan\left(\frac{-9.632}{5}\right)$
$\phi = \arctan(-1.9264)$
$\phi \approx -62.57^\circ$
The power factor is $pf = \cos(\phi) = \cos(-62.57^\circ)$
$pf \approx 0.461$
Since the angle is negative ($X_C > X_L$), the power factor is **leading**.

f) **Active Power ($P$):**
$P = V_{rms} \times I_{rms} \times \cos(\phi) = 100 \times 9.216 \times 0.461$
$P \approx 425.0 \text{ W}$
Alternatively, $P = I_{rms}^2 \times R = (9.216)^2 \times 5 = 84.93 \times 5 \approx 424.65 \text{ W}$.

Notice that in this case, $X_C > X_L$, so the circuit behaves predominantly like a capacitive circuit. The total reactance $X = X_L - X_C$ is negative, meaning the current leads the voltage.

---

**Key Takeaways for Exams:**

*   **Know your formulas:** Ensure you can recall and apply the formulas for $X_L$, $X_C$, $Z$, $P$, $Q$, $S$, and $pf$.
*   **Phase angle significance:** Understand that a positive phase angle (or positive reactance) means inductive (lagging), and a negative phase angle (or negative reactance) means capacitive (leading).
*   **Power triangle:** Be able to draw and use the power triangle to relate $P$, $Q$, and $S$.
*   **Power Factor Correction:** While not explicitly covered in detail here, understand *why* power factor is important (efficiency, system capacity) – this is a common conceptual question.
*   **Units:** Always pay attention to units (H, F, $\Omega$, Hz, V, A, VA, W, VAR) and convert them correctly (e.g., mH to H, $\mu$F to F).

This covers the core concepts of RL, RC, and RLC series circuits and power in AC systems. Keep practicing these types of problems, and you'll build a strong understanding of how these circuits function.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the difference between resistance and reactance in an AC circuit?
    **Answer:** Resistance ($R$) is the opposition to current flow in an AC circuit that dissipates energy as heat. It is independent of frequency. Reactance ($X_L$ or $X_C$) is the opposition to current flow offered by inductors and capacitors, which is due to energy storage and release (magnetic or electric fields) and is dependent on the frequency of the AC supply. Reactance does not dissipate energy; it stores and returns it to the circuit.

2.  **Question:** Explain why a low power factor is undesirable in an AC power system.
    **Answer:** A low power factor indicates that a significant portion of the apparent power supplied is reactive power, which does not perform useful work. This leads to higher RMS currents for the same amount of active power. Higher currents result in increased $I^2R$ losses in transmission lines and equipment, require larger conductor sizes (increasing cost), cause greater voltage drops, and reduce the overall capacity of the power system to deliver useful work. Utility companies may also penalize customers with low power factors.

3.  **Question:** In an AC circuit, if the voltage and current are in phase, what is the power factor, and what type of circuit is it likely to be?
    **Answer:** If voltage and current are in phase, the phase angle $\phi = 0^\circ$. The power factor is $pf = \cos(0^\circ) = 1$ (or unity). This typically occurs in a purely resistive circuit.

**Numerical Questions:**

4.  **Question:** A $20 \Omega$ resistor and a capacitor of $100 \mu$F are connected in series to a $220$ V, $50$ Hz supply. Calculate the impedance of the circuit.
    **Answer:**
    $R = 20 \Omega$
    $C = 100 \mu\text{F} = 100 \times 10^{-6} \text{ F}$
    $f = 50 \text{ Hz}$
    First, calculate capacitive reactance:
    $X_C = \frac{1}{2 \pi f C} = \frac{1}{2 \pi \times 50 \times 100 \times 10^{-6}} = \frac{1}{0.0314159} \approx 31.83 \Omega$
    Now, calculate impedance:
    $Z = \sqrt{R^2 + X_C^2} = \sqrt{20^2 + (31.83)^2} = \sqrt{400 + 1013.15} = \sqrt{1413.15} \approx 37.60 \Omega$

5.  **Question:** An inductor has a resistance of $15 \Omega$ and an inductive reactance of $25 \Omega$ at $60$ Hz. If it is connected to a $120$ V, $60$ Hz supply, what is the power factor of the inductor?
    **Answer:**
    $R = 15 \Omega$
    $X_L = 25 \Omega$
    $V_{rms} = 120 \text{ V}$
    $f = 60 \text{ Hz}$
    First, calculate the impedance:
    $Z = \sqrt{R^2 + X_L^2} = \sqrt{15^2 + 25^2} = \sqrt{225 + 625} = \sqrt{850} \approx 29.15 \Omega$
    The phase angle $\phi$ is:
    $\phi = \arctan\left(\frac{X_L}{R}\right) = \arctan\left(\frac{25}{15}\right) = \arctan(1.6667) \approx 59.04^\circ$
    The power factor is:
    $pf = \cos(\phi) = \cos(59.04^\circ) \approx 0.515$
    Since $X_L > 0$, it's a lagging power factor.

***
I hope these notes provide you with a solid understanding of AC circuits and power concepts. Remember, practice is key to mastering these topics! If anything is unclear, please don't hesitate to ask.
