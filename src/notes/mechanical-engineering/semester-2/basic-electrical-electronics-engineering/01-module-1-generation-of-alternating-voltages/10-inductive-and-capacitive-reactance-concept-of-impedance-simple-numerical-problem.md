---
title: "Inductive and capacitive reactance, concept of impedance. (Simple numerical problems)"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e8367f"
status: "completed"
scrapedAt: "2026-05-20T17:41:14.405Z"
---
Absolutely! Here are comprehensive study notes on Inductive and Capacitive Reactance, and the Concept of Impedance, tailored to your specifications.

---

## Module 1: Generation of Alternating Voltages

### Topic: Inductive and Capacitive Reactance, Concept of Impedance

Welcome, everyone! Today, we're diving into a crucial aspect of AC circuits: how components like inductors and capacitors behave when an alternating voltage is applied. This behavior is fundamentally different from their DC counterparts, and it's key to understanding AC circuit analysis. We'll explore **Inductive Reactance**, **Capacitive Reactance**, and then tie it all together with the **Concept of Impedance**. This is vital for our **Course Outcome 1 (CO1)** – applying fundamental concepts to solve AC electric circuits.

#### The Nature of AC Circuits: Beyond Simple Resistance

Remember in DC circuits, the only thing that limited current flow was resistance? An AC circuit is a bit more complex. When an alternating voltage is applied to a circuit containing inductors or capacitors, these components oppose the *change* in current or voltage, respectively. This opposition is not a dissipation of energy like in a resistor (where energy turns into heat); instead, it's a storage and release of energy. This opposition in AC circuits is called **reactance**.

Think of it like this: Imagine pushing a swing. With a DC voltage, it's like giving the swing a constant push – it might move, but it's a steady force. With an AC voltage, it's like you're continuously pushing and pulling the swing, trying to get it to move back and forth. The swing itself resists this rapid change in motion, and that resistance is analogous to reactance.

##### Inductive Reactance (X<sub>L</sub>)

When an alternating voltage is applied to an inductor, the continuously changing current through the coil creates a continuously changing magnetic field. According to Faraday's law of electromagnetic induction, this changing magnetic field induces a voltage across the inductor itself, which opposes the applied voltage. This opposition is called **Inductive Reactance**.

*   **What is it?** It's the opposition offered by an inductor to the flow of alternating current due to the energy stored in its magnetic field.
*   **How is it measured?** Inductive reactance is measured in Ohms (Ω), just like resistance.
*   **What determines its value?** Inductive reactance depends on two main factors:
    1.  **The Inductance (L) of the coil:** A coil with a higher inductance will create a stronger magnetic field for a given current, and thus a larger opposing voltage. So, more inductance means more inductive reactance.
    2.  **The Frequency (f) of the alternating voltage:** This is the really important part for AC. As the frequency of the AC voltage increases, the current changes more rapidly. This faster change in current leads to a more rapid change in the magnetic field, which in turn induces a larger opposing voltage. So, inductive reactance increases directly with frequency.

The formula that captures this relationship is:

$$X_L = 2 \pi f L$$

Where:
*   $X_L$ is the inductive reactance in Ohms (Ω).
*   $f$ is the frequency of the AC supply in Hertz (Hz).
*   $L$ is the inductance of the coil in Henries (H).

**Think about it:** If you double the frequency, you double the inductive reactance. If you double the inductance, you also double the inductive reactance. This makes intuitive sense, doesn't it? More rapid changes or a stronger inherent ability to store magnetic energy both lead to greater opposition.

**Real-world example:** Inductors are often used in power filters, radio circuits, and transformers. In a filter, for instance, you might use an inductor to "choke off" high-frequency signals while letting lower-frequency ones pass.

##### Capacitive Reactance (X<sub>C</sub>)

Now, let's consider a capacitor. When an alternating voltage is applied to a capacitor, the capacitor plates are continuously being charged and discharged. This process of charging and discharging involves the movement of charge, which constitutes current. However, the capacitor itself, due to the dielectric material between its plates, does not allow a continuous flow of current. It opposes the *change* in voltage across it. This opposition is called **Capacitive Reactance**.

*   **What is it?** It's the opposition offered by a capacitor to the flow of alternating current due to the energy stored in its electric field.
*   **How is it measured?** Capacitive reactance is also measured in Ohms (Ω).
*   **What determines its value?** Capacitive reactance depends on:
    1.  **The Capacitance (C) of the capacitor:** A capacitor with a larger capacitance can store more charge for a given voltage. This means it can handle more current for a given rate of voltage change. So, more capacitance means less capacitive reactance.
    2.  **The Frequency (f) of the alternating voltage:** This is where it's different from inductive reactance. As the frequency of the AC voltage increases, the capacitor plates are charged and discharged more rapidly. This means the current flow through the circuit (charging and discharging current) is larger for a given voltage. So, capacitive reactance *decreases* as frequency increases.

The formula for capacitive reactance is:

$$X_C = \frac{1}{2 \pi f C}$$

Where:
*   $X_C$ is the capacitive reactance in Ohms (Ω).
*   $f$ is the frequency of the AC supply in Hertz (Hz).
*   $C$ is the capacitance of the capacitor in Farads (F).

**Key takeaway:** Notice the inverse relationship with frequency and capacitance. This is very important! At very low frequencies (approaching DC), $X_C$ becomes very large, essentially acting like an open circuit. At very high frequencies, $X_C$ becomes very small, acting almost like a short circuit.

**Real-world example:** Capacitors are used in smoothing power supplies, tuning radio receivers, and in filters. A capacitor in a power supply helps to "smooth out" the ripples in rectified AC voltage, acting like a buffer.

##### The Phase Relationship: A Crucial Distinction

It's not just the magnitude of opposition that matters in AC circuits; the *timing* of the current and voltage is also critical. This is called the **phase relationship**.

*   **In an Inductor:** The current *lags* the voltage by 90 degrees (or $\pi/2$ radians). Why? Because the inductor tries to oppose changes in current. As the voltage starts to increase, the current is still trying to catch up and build up its magnetic field. It reaches its peak *after* the voltage has already passed its peak. Think of it as inertia in motion.
*   **In a Capacitor:** The current *leads* the voltage by 90 degrees (or $\pi/2$ radians). Why? Because the capacitor opposes changes in voltage. As the voltage starts to increase, charge begins to flow immediately onto the plates, and this flow of charge is the current. The current peaks when the rate of change of voltage is maximum, which happens before the voltage itself reaches its peak. Think of it as a spring: you apply force (voltage), and the deformation (charge) happens quickly, leading the force if you were to think about it in a certain way.

This phase difference is very important and is represented using vectors or complex numbers, which we'll touch upon when we discuss impedance.

#### The Concept of Impedance (Z)

Now, what happens when a circuit has *both* resistance and reactance (either inductive or capacitive, or both)? Or when it has both inductance and capacitance? We need a single term to describe the total opposition to AC current flow. This total opposition is called **Impedance**.

*   **What is it?** Impedance ($Z$) is the total opposition that a circuit presents to the flow of alternating current. It includes the opposition due to resistance (R) and the opposition due to reactance ($X_L$ and $X_C$).
*   **How is it measured?** Impedance is also measured in Ohms (Ω).
*   **It's more than just adding up values:** Because reactance also involves a phase difference relative to resistance, we can't simply add resistance and reactance arithmetically. Impedance is a **phasor** quantity, meaning it has both magnitude and phase.

We represent impedance using complex numbers, which is a powerful mathematical tool for dealing with AC circuits.

##### Combining Resistance and Reactance

Let's consider a simple AC circuit with a resistor ($R$) and an inductor ($L$) in series.
*   The resistor opposes current, and the voltage across it is *in phase* with the current.
*   The inductor opposes current with inductive reactance ($X_L$), and the voltage across it *leads* the current by 90 degrees.

If we were to draw these as vectors (phasors):
*   Resistance is a horizontal vector (0-degree phase).
*   Inductive reactance is a vertical vector pointing upwards (90-degree phase ahead of resistance).

To find the total opposition (impedance), we combine these using vector addition, which in the complex plane is adding complex numbers. The impedance ($Z$) is then the hypotenuse of a right-angled triangle where:
*   The base is Resistance ($R$).
*   The height is Inductive Reactance ($X_L$).

Using the Pythagorean theorem, the **magnitude** of the impedance is:

$$|Z| = \sqrt{R^2 + X_L^2}$$

And we can express impedance in rectangular form as:

$$Z = R + jX_L$$

Where 'j' is the imaginary unit, indicating a 90-degree lead.

Now, what if we have a resistor ($R$) and a capacitor ($C$) in series?
*   The resistor opposes current in phase.
*   The capacitor opposes current with capacitive reactance ($X_C$), and the voltage across it *lags* the current by 90 degrees. This means the current *leads* the voltage by 90 degrees, or the voltage lags the current by 90 degrees. In our phasor representation, this means capacitive reactance acts in the *opposite* direction to inductive reactance.

So, the impedance ($Z$) for a series RL circuit is $Z = R + jX_L$.
For a series RC circuit, the impedance is:

$$Z = R - jX_C$$

Notice the minus sign for capacitive reactance because it opposes inductive reactance in terms of phase. The magnitude of impedance for an RC circuit is:

$$|Z| = \sqrt{R^2 + X_C^2}$$

**Phase Angle (Φ):** Impedance also has a phase angle, often denoted by $\phi$. This angle represents the phase difference between the total voltage across the circuit and the total current flowing through it.
*   For an RL circuit: $\tan(\phi) = \frac{X_L}{R}$. The current lags the voltage.
*   For an RC circuit: $\tan(\phi) = \frac{-X_C}{R}$. The current leads the voltage.

**In general, for a circuit with resistance R, inductive reactance $X_L$, and capacitive reactance $X_C$ in series:**

The total reactance is $X = X_L - X_C$.
The impedance is given by:

$$Z = R + j(X_L - X_C)$$

And its magnitude is:

$$|Z| = \sqrt{R^2 + (X_L - X_C)^2}$$

The phase angle $\phi$ is given by:

$$\tan(\phi) = \frac{X_L - X_C}{R}$$

**This is a crucial concept that directly links to CO1!** When you're asked to solve an AC circuit problem (like finding current in a series RLC circuit), you first need to calculate the impedance.

**Analogy for Impedance:** Imagine walking uphill (resistance), but there's also a strong wind pushing you sideways (reactance). Your total effort to move forward isn't just the uphill climb; it's the combination of resisting the slope and resisting the wind. Impedance is that combined resistance to your overall movement.

**Textbook Connection:** D. P. Kothari and I. J. Nagrath's "Basic Electrical Engineering" extensively covers these concepts, particularly in chapters dealing with AC circuits and series/parallel combinations. They emphasize the phasor representation and the mathematical tools needed to calculate impedance and phase angles. Similarly, Schaum's Outlines provides numerous solved problems that illustrate these calculations.

#### Simple Numerical Problems

Let's solidify these ideas with some simple numerical examples. These are the types of questions you'll often see in exams to test your understanding.

**Problem 1: Inductive Reactance**
An inductor of 50 mH is connected to a 230 V, 50 Hz AC supply. Calculate the inductive reactance and the current flowing through the inductor.

**Solution:**
First, let's identify what we are given:
*   Inductance, $L = 50 \text{ mH} = 50 \times 10^{-3} \text{ H}$
*   Voltage, $V = 230 \text{ V}$
*   Frequency, $f = 50 \text{ Hz}$

We need to find:
1.  Inductive Reactance, $X_L$
2.  Current, $I$

**Step 1: Calculate Inductive Reactance ($X_L$)**
Using the formula $X_L = 2 \pi f L$:
$X_L = 2 \times \pi \times 50 \text{ Hz} \times (50 \times 10^{-3} \text{ H})$
$X_L = 100 \pi \times 50 \times 10^{-3} \Omega$
$X_L = 5 \pi \Omega$
Using $\pi \approx 3.14159$:
$X_L \approx 5 \times 3.14159 \Omega$
$X_L \approx 15.708 \Omega$

**Step 2: Calculate the Current ($I$)**
In an AC circuit with only an inductor, Ohm's Law applies using reactance instead of resistance: $V = I \times X_L$.
So, $I = \frac{V}{X_L}$
$I = \frac{230 \text{ V}}{15.708 \Omega}$
$I \approx 14.64 \text{ A}$

**Remember this:** The current will lag the voltage by 90 degrees.

**Problem 2: Capacitive Reactance**
A capacitor of 100 $\mu$F is connected to a 120 V, 60 Hz AC supply. Calculate the capacitive reactance and the current flowing through the capacitor.

**Solution:**
Given:
*   Capacitance, $C = 100 \mu\text{F} = 100 \times 10^{-6} \text{ F}$
*   Voltage, $V = 120 \text{ V}$
*   Frequency, $f = 60 \text{ Hz}$

We need to find:
1.  Capacitive Reactance, $X_C$
2.  Current, $I$

**Step 1: Calculate Capacitive Reactance ($X_C$)**
Using the formula $X_C = \frac{1}{2 \pi f C}$:
$X_C = \frac{1}{2 \times \pi \times 60 \text{ Hz} \times (100 \times 10^{-6} \text{ F})}$
$X_C = \frac{1}{120 \pi \times 100 \times 10^{-6}} \Omega$
$X_C = \frac{1}{12000 \pi \times 10^{-6}} \Omega$
$X_C = \frac{10^6}{12000 \pi} \Omega$
$X_C = \frac{1000}{12 \pi} \Omega = \frac{250}{3 \pi} \Omega$
Using $\pi \approx 3.14159$:
$X_C \approx \frac{250}{3 \times 3.14159} \Omega$
$X_C \approx \frac{250}{9.42477} \Omega$
$X_C \approx 26.53 \Omega$

**Step 2: Calculate the Current ($I$)**
Using Ohm's Law for AC with reactance: $V = I \times X_C$.
So, $I = \frac{V}{X_C}$
$I = \frac{120 \text{ V}}{26.53 \Omega}$
$I \approx 4.52 \text{ A}$

**Remember this:** The current will lead the voltage by 90 degrees.

**Problem 3: Impedance of a Series RL Circuit**
A resistor of 30 Ω is connected in series with an inductor of 0.1 H. The circuit is connected to a 230 V, 50 Hz AC supply. Calculate the impedance of the circuit and the total current drawn.

**Solution:**
Given:
*   Resistance, $R = 30 \Omega$
*   Inductance, $L = 0.1 \text{ H}$
*   Voltage, $V = 230 \text{ V}$
*   Frequency, $f = 50 \text{ Hz}$

We need to find:
1.  Impedance, $Z$
2.  Current, $I$

**Step 1: Calculate Inductive Reactance ($X_L$)**
$X_L = 2 \pi f L$
$X_L = 2 \times \pi \times 50 \text{ Hz} \times 0.1 \text{ H}$
$X_L = 10 \pi \Omega$
$X_L \approx 10 \times 3.14159 \Omega$
$X_L \approx 31.42 \Omega$

**Step 2: Calculate Impedance ($Z$)**
Since it's a series RL circuit, the impedance is $Z = R + jX_L$. We need the magnitude of impedance for calculating the total current using Ohm's Law ($V = I \times Z$).
$|Z| = \sqrt{R^2 + X_L^2}$
$|Z| = \sqrt{(30 \Omega)^2 + (31.42 \Omega)^2}$
$|Z| = \sqrt{900 + 987.2164} \Omega$
$|Z| = \sqrt{1887.2164} \Omega$
$|Z| \approx 43.44 \Omega$

**Step 3: Calculate the Total Current ($I$)**
Using Ohm's Law: $I = \frac{V}{|Z|}$
$I = \frac{230 \text{ V}}{43.44 \Omega}$
$I \approx 5.29 \text{ A}$

**Additional Calculation: Phase Angle (Φ)**
The phase angle $\phi$ is the angle by which the current lags the voltage in an RL circuit.
$\tan(\phi) = \frac{X_L}{R}$
$\tan(\phi) = \frac{31.42}{30} \approx 1.0473$
$\phi = \arctan(1.0473)$
$\phi \approx 46.32^\circ$

So, the current lags the voltage by approximately 46.32 degrees. This information is crucial for understanding power factor, a topic we'll cover later.

**Problem 4: Impedance of a Series RC Circuit**
A resistor of 100 Ω is connected in series with a capacitor of 20 $\mu$F. The circuit is powered by a 240 V, 50 Hz AC source. Determine the impedance and the current.

**Solution:**
Given:
*   Resistance, $R = 100 \Omega$
*   Capacitance, $C = 20 \mu\text{F} = 20 \times 10^{-6} \text{ F}$
*   Voltage, $V = 240 \text{ V}$
*   Frequency, $f = 50 \text{ Hz}$

We need to find:
1.  Impedance, $Z$
2.  Current, $I$

**Step 1: Calculate Capacitive Reactance ($X_C$)**
$X_C = \frac{1}{2 \pi f C}$
$X_C = \frac{1}{2 \times \pi \times 50 \text{ Hz} \times (20 \times 10^{-6} \text{ F})}$
$X_C = \frac{1}{100 \pi \times 20 \times 10^{-6}} \Omega$
$X_C = \frac{1}{2000 \pi \times 10^{-6}} \Omega$
$X_C = \frac{10^6}{2000 \pi} \Omega = \frac{1000}{2 \pi} \Omega = \frac{500}{\pi} \Omega$
Using $\pi \approx 3.14159$:
$X_C \approx \frac{500}{3.14159} \Omega$
$X_C \approx 159.15 \Omega$

**Step 2: Calculate Impedance ($Z$)**
For a series RC circuit, $Z = R - jX_C$. We need the magnitude:
$|Z| = \sqrt{R^2 + X_C^2}$
$|Z| = \sqrt{(100 \Omega)^2 + (159.15 \Omega)^2}$
$|Z| = \sqrt{10000 + 25328.72} \Omega$
$|Z| = \sqrt{35328.72} \Omega$
$|Z| \approx 187.96 \Omega$

**Step 3: Calculate the Total Current ($I$)**
$I = \frac{V}{|Z|}$
$I = \frac{240 \text{ V}}{187.96 \Omega}$
$I \approx 1.28 \text{ A}$

**Additional Calculation: Phase Angle (Φ)**
The phase angle $\phi$ is the angle by which the current leads the voltage in an RC circuit.
$\tan(\phi) = \frac{-X_C}{R}$
$\tan(\phi) = \frac{-159.15}{100} = -1.5915$
$\phi = \arctan(-1.5915)$
$\phi \approx -57.82^\circ$

The negative sign indicates that the current leads the voltage. So, the current leads the voltage by approximately 57.82 degrees.

#### Connection to Course Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1. We've learned how to calculate inductive reactance ($X_L$), capacitive reactance ($X_C$), and impedance ($Z$), which are fundamental concepts in AC circuits. The numerical problems demonstrate how to apply Ohm's Law in AC circuits using these values to find current, a core skill for solving AC circuits. Understanding phase relationships is also key to fully solving AC circuit problems.

*   **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution (Knowledge Level: K3)**
    *   While this topic focuses on circuit analysis, the concepts of reactance and impedance are fundamental to understanding how AC power systems operate. For instance, the inductance of transmission lines and the capacitance of cables contribute to the overall impedance of the power grid, affecting voltage regulation and power factor.

*   **CO4: Describe the fundamental concepts of electronic components and devices (Knowledge Level: K2)**
    *   We've explored the intrinsic behavior of two key passive electronic components: inductors and capacitors, when subjected to AC signals. Understanding their reactive properties is essential for describing their function in electronic circuits.

By mastering inductive reactance, capacitive reactance, and impedance, you build a strong foundation for analyzing more complex AC circuits, which is a prerequisite for many other topics in electrical and electronics engineering. Remember, AC circuit analysis is all about combining resistance (energy dissipation) with reactance (energy storage and phase shift) to understand the overall behavior.

---

### Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** What is the primary difference between resistance and reactance in an AC circuit?
    **Answer:** Resistance is the opposition to current flow that dissipates energy as heat. Reactance is the opposition to current flow due to energy storage in electric (capacitors) or magnetic (inductors) fields, and it involves a phase shift between voltage and current. Reactance is also frequency-dependent.

2.  **Question:** How does inductive reactance change with an increase in frequency? Explain why.
    **Answer:** Inductive reactance ($X_L = 2 \pi f L$) increases linearly with an increase in frequency. This is because at higher frequencies, the current changes more rapidly, leading to a faster rate of change of magnetic flux in the inductor, which induces a larger back EMF (voltage) opposing the applied voltage.

3.  **Question:** How does capacitive reactance change with an increase in capacitance? Explain why.
    **Answer:** Capacitive reactance ($X_C = \frac{1}{2 \pi f C}$) decreases with an increase in capacitance. A larger capacitor can store more charge for a given voltage, meaning more current needs to flow to change the voltage across it. Therefore, for a given frequency, a larger capacitance offers less opposition to current flow.

4.  **Question:** What is impedance in an AC circuit, and what are its components?
    **Answer:** Impedance ($Z$) is the total opposition to alternating current flow in a circuit. It is the vector sum of resistance ($R$) and reactance ($X$). In a series circuit, $Z = R + j(X_L - X_C)$, where $R$ is resistance, $X_L$ is inductive reactance, and $X_C$ is capacitive reactance.

**Exam-Oriented (Numerical) Questions:**

5.  **Question:** A 20 Ω resistor is connected in series with a capacitor of 50 $\mu$F to a 200 V, 50 Hz AC supply. Calculate the capacitive reactance and the impedance of the circuit.
    **Solution:**
    Given: $R = 20 \Omega$, $C = 50 \mu\text{F} = 50 \times 10^{-6} \text{ F}$, $V = 200 \text{ V}$, $f = 50 \text{ Hz}$.
    **Capacitive Reactance ($X_C$):**
    $X_C = \frac{1}{2 \pi f C} = \frac{1}{2 \pi (50)(50 \times 10^{-6})} = \frac{1}{5000 \pi \times 10^{-6}} = \frac{10^6}{5000 \pi} = \frac{1000}{5 \pi} = \frac{200}{\pi} \Omega$
    $X_C \approx 63.66 \Omega$
    **Impedance ($Z$):**
    $|Z| = \sqrt{R^2 + X_C^2} = \sqrt{(20)^2 + (63.66)^2} = \sqrt{400 + 4052.5956} = \sqrt{4452.5956} \approx 66.73 \Omega$
    **Answer:** Capacitive reactance is approximately $63.66 \Omega$, and the impedance is approximately $66.73 \Omega$.

6.  **Question:** An inductor with inductance 0.2 H is connected in series with a resistor of 15 Ω. If the supply voltage is 240 V at 60 Hz, find the inductive reactance, impedance, and the current in the circuit.
    **Solution:**
    Given: $L = 0.2 \text{ H}$, $R = 15 \Omega$, $V = 240 \text{ V}$, $f = 60 \text{ Hz}$.
    **Inductive Reactance ($X_L$):**
    $X_L = 2 \pi f L = 2 \pi (60)(0.2) = 24 \pi \Omega \approx 75.40 \Omega$
    **Impedance ($Z$):**
    $|Z| = \sqrt{R^2 + X_L^2} = \sqrt{(15)^2 + (75.40)^2} = \sqrt{225 + 5685.16} = \sqrt{5910.16} \approx 76.88 \Omega$
    **Current ($I$):**
    $I = \frac{V}{|Z|} = \frac{240}{76.88} \approx 3.12 \text{ A}$
    **Answer:** Inductive reactance is approximately $75.40 \Omega$, impedance is approximately $76.88 \Omega$, and the current is approximately $3.12 \text{ A}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
