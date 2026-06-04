---
title: "Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits; Inductive and capacitive reactance, concept of impedance - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0d9"
status: "completed"
scrapedAt: "2026-05-23T17:34:22.788Z"
---
# Module 2: Electromagnetic Induction - Analysis of Simple AC Circuits

Welcome, everyone, to our dive into AC circuits! This module, building on our understanding of electromagnetic induction, is crucial for grasping how electrical energy is delivered and utilized in our everyday lives. We'll be looking at the behaviour of circuits when powered by Alternating Current (AC), which is quite different from the Direct Current (DC) we might have initially explored. Think about the power outlets in your homes – that's AC at work!

Our learning outcomes for this topic are:
*   **CO1 (K2):** Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.

This means we need to understand *how* these AC circuits behave and be able to predict their performance. We'll be focusing on circuits containing only resistors, only inductors, or only capacitors.

---

## 1. The Nature of Alternating Current (AC)

Before we analyze circuits, let's quickly recap what AC is. Unlike DC, which flows in a constant direction, AC voltage and current continuously change in magnitude and direction. They typically follow a sinusoidal pattern.

A sinusoidal voltage can be represented as:
$v(t) = V_m \sin(\omega t + \phi)$

Where:
*   $v(t)$ is the instantaneous voltage at time $t$.
*   $V_m$ is the **peak voltage** (the maximum value the voltage reaches).
*   $\omega$ is the **angular frequency** (in radians per second). It's related to the regular frequency $f$ (in Hertz) by $\omega = 2\pi f$.
*   $t$ is time.
*   $\phi$ is the **phase angle**, which indicates the voltage's position within its cycle at $t=0$.

Similarly, current can be represented as:
$i(t) = I_m \sin(\omega t + \phi_i)$

When we talk about AC values in practice, we often use **RMS (Root Mean Square)** values. For a sinusoidal waveform, the RMS value is $0.707$ times the peak value ($V_{rms} = V_m / \sqrt{2}$). This is important because the heating effect of AC is equivalent to that of a DC voltage of the same RMS value. So, when we say a mains voltage is 230V, we mean 230V RMS.

---

## 2. Purely Resistive Circuits

Let's start with the simplest AC circuit: a voltage source connected to a resistor.

**Concept:** A resistor opposes the flow of current by dissipating electrical energy as heat. In an AC circuit, this opposition is constant regardless of the direction of current.

**Analogy:** Imagine pushing a box across a rough floor. The friction (like resistance) always opposes your motion, no matter which way you push.

Consider a voltage source $v(t) = V_m \sin(\omega t)$ connected to a resistor $R$.
According to Ohm's Law, $i(t) = v(t) / R$.
So, $i(t) = (V_m / R) \sin(\omega t)$.
Let $I_m = V_m / R$. Then, $i(t) = I_m \sin(\omega t)$.

**Key Observation:** The current through a purely resistive circuit is *in phase* with the applied voltage. This means the voltage and current reach their maximum positive and negative values, and their zero crossings, at the exact same time.

**Visualization:** If you were to plot voltage and current against time, the two sinusoidal curves would align perfectly.

**Relation to Course Outcomes:** This directly relates to **CO1 (K2)** as we're applying Ohm's Law (a fundamental circuit law) to an AC circuit. It's a foundational concept for building more complex AC circuit analysis.

**Exam Tip:** Questions on purely resistive circuits are usually straightforward. Remember that in AC, just like DC, $V = IR$ holds true, and voltage and current are in phase.

---

## 3. Purely Inductive Circuits

Now, let's introduce an inductor ($L$) into our AC circuit. An inductor is typically a coil of wire.

**Concept:** An inductor resists changes in current. When AC current flows through an inductor, it creates a continuously changing magnetic field. This changing magnetic field, according to Faraday's Law of Induction (which we studied in Module 2!), induces a voltage *back* across the inductor that opposes the *change* in current. This opposition to AC flow is called **inductive reactance**.

**Analogy:** Think of a heavy flywheel. It takes effort to get it spinning, and once it's spinning, it resists changes in its speed. Similarly, an inductor resists changes in current. It "lags behind" in its response to the applied voltage.

The opposition offered by an inductor to AC current is given by **Inductive Reactance ($X_L$)**.
$X_L = \omega L$

Where:
*   $X_L$ is the inductive reactance, measured in Ohms ($\Omega$).
*   $\omega$ is the angular frequency (in rad/s).
*   $L$ is the inductance, measured in Henrys (H).

Notice that inductive reactance is directly proportional to frequency and inductance. If the frequency is higher, the magnetic field changes faster, leading to a greater opposing voltage. If the inductance is larger, the magnetic field is stronger, also leading to greater opposition.

**The Crucial Phase Relationship:** In a purely inductive circuit, the current *lags behind* the applied voltage by **90 degrees** (or $\pi/2$ radians).

**Why?** Imagine trying to push that flywheel. You have to apply voltage (your push) *before* the flywheel starts to move with a certain speed (current). The faster you try to change your push, the more the flywheel resists. The voltage has to "lead" the current to make it change.

**Visualization:** If you plot voltage and current against time, the current waveform will be shifted 90 degrees *later* than the voltage waveform. The voltage peaks where the current is zero and changing fastest, and the current peaks where the voltage is zero.

**Relation to Course Outcomes:** This is again tied to **CO1 (K2)**. We're introducing a new component (inductor) and a new concept (reactance) that affects AC circuit behaviour. Understanding this phase shift is vital for AC analysis.

**Exam Tip:** Remember the phrase "ELI the ICE man".
*   **E** (Voltage) leads **I** (Current) in an **L** (Inductor) circuit.
*   **I** (Current) leads **E** (Voltage) in a **C** (Capacitor) circuit.

---

## 4. Purely Capacitive Circuits

Finally, let's consider a capacitor ($C$) in an AC circuit. A capacitor is essentially two conductive plates separated by an insulating material (dielectric).

**Concept:** A capacitor stores electrical energy in an electric field. When AC voltage is applied, the capacitor charges and discharges continuously. It opposes changes in voltage. In AC circuits, this opposition is called **capacitive reactance**.

**Analogy:** Think of a spring-loaded diaphragm in a pipe. It can push back against the flow of water. When you try to push water through, the diaphragm compresses, storing energy. When you stop pushing, it expands. A capacitor "allows" current to flow by charging and discharging, but it resists *sudden changes* in voltage across it.

The opposition offered by a capacitor to AC current is given by **Capacitive Reactance ($X_C$)**.
$X_C = \frac{1}{\omega C}$

Where:
*   $X_C$ is the capacitive reactance, measured in Ohms ($\Omega$).
*   $\omega$ is the angular frequency (in rad/s).
*   $C$ is the capacitance, measured in Farads (F).

Notice that capacitive reactance is inversely proportional to frequency and capacitance. If the frequency is higher, the capacitor has less time to charge and discharge, so it offers less opposition. If the capacitance is larger, it can store more charge for a given voltage, meaning it offers less opposition.

**The Crucial Phase Relationship:** In a purely capacitive circuit, the current *leads* the applied voltage by **90 degrees** (or $\pi/2$ radians).

**Why?** To get current flowing into a capacitor, you need to apply a voltage. However, the current flows *first* to charge the plates. The voltage across the capacitor builds up only *after* current has flowed. So, the current "leads" the voltage. Using our "ELI the ICE man" mnemonic, **I** (Current) leads **E** (Voltage) in a **C** (Capacitor) circuit.

**Visualization:** If you plot voltage and current against time, the current waveform will be shifted 90 degrees *ahead* of the voltage waveform. The current peaks where the voltage is zero and changing fastest, and the voltage peaks where the current is zero.

**Relation to Course Outcomes:** Again, this is key for **CO1 (K2)**. We're analyzing another fundamental AC circuit element and its unique behaviour, particularly the phase shift.

**Exam Tip:** Always remember the phase relationship: current leads voltage in capacitive circuits, and voltage leads current in inductive circuits. This is a common area for mistakes.

---

## 5. Impedance (Z) - The Total Opposition

In real-world AC circuits, we often have combinations of resistors, inductors, and capacitors. Each component offers opposition to current, but in different ways. Resistance ($R$) opposes current and dissipates energy as heat, with no phase shift. Inductive reactance ($X_L$) opposes changes in current and causes current to lag voltage by 90 degrees. Capacitive reactance ($X_C$) opposes changes in voltage and causes current to lead voltage by 90 degrees.

**Concept:** **Impedance (Z)** is the *total* opposition to current flow in an AC circuit, taking into account both resistance and reactance, and crucially, their phase differences. It's the AC equivalent of resistance in DC circuits. Impedance is a complex quantity because it has both magnitude and phase.

**Analogy:** Imagine trying to walk through a busy marketplace. You have to navigate through people (resistance) and also deal with the flow of traffic or crowds moving in different directions (reactance). Your total effort to move through is like impedance.

In AC circuits, resistance is represented by a real number ($R$), while reactance is represented by an imaginary number. Inductive reactance ($X_L$) is considered positive (+j$X_L$), and capacitive reactance ($X_C$) is considered negative (-j$X_C$), based on their phase relationships relative to voltage.

Therefore, impedance ($Z$) can be expressed in complex form:
$Z = R + j(X_L - X_C)$

Where:
*   $R$ is the resistance (in Ohms).
*   $X_L = \omega L$ is the inductive reactance (in Ohms).
*   $X_C = \frac{1}{\omega C}$ is the capacitive reactance (in Ohms).
*   $j$ is the imaginary unit ($\sqrt{-1}$).

The magnitude of the impedance, $|Z|$, tells us the overall opposition to current flow and is calculated as:
$|Z| = \sqrt{R^2 + (X_L - X_C)^2}$

The **phase angle of the impedance**, $\theta$, tells us the phase difference between the voltage and current for the entire circuit:
$\theta = \arctan\left(\frac{X_L - X_C}{R}\right)$

If $X_L > X_C$, the circuit is predominantly inductive, and the current lags the voltage ($\theta$ is positive).
If $X_C > X_L$, the circuit is predominantly capacitive, and the current leads the voltage ($\theta$ is negative).
If $X_L = X_C$, the circuit is purely resistive (or resonant), and the impedance is just $R$. The current and voltage are in phase ($\theta = 0$).

We can also express impedance in polar form: $Z = |Z| \angle \theta$.

**Ohm's Law in AC:** The relationship between voltage, current, and impedance in AC circuits is similar to Ohm's Law:
$\mathbf{V} = \mathbf{I} \cdot \mathbf{Z}$

Where $\mathbf{V}$ and $\mathbf{I}$ are phasor representations of voltage and current, and $\mathbf{Z}$ is the complex impedance. Phasors are a way to represent AC quantities with both magnitude and phase.

**Relation to Course Outcomes:** This is the culmination of **CO1 (K2)** for this topic. Understanding impedance allows us to analyze any simple AC circuit (resistive, inductive, capacitive, or combinations) by considering the total opposition and the phase shift. This is a fundamental skill in electrical engineering.

**Exam Tip:** Mastering impedance calculations is key. Pay close attention to the signs of reactances and how they combine. Also, ensure you can calculate both the magnitude and the phase angle of the impedance.

---

## 6. Numerical Problems

Let's work through some examples to solidify our understanding.

**Problem 1: Purely Resistive Circuit**
A 100 $\Omega$ resistor is connected to an AC voltage source $v(t) = 200 \sin(314t)$ V. Calculate the RMS current and state the phase relationship.

**Solution:**
*   The voltage is $v(t) = 200 \sin(314t)$ V.
*   The peak voltage $V_m = 200$ V.
*   The RMS voltage $V_{rms} = V_m / \sqrt{2} = 200 / \sqrt{2} \approx 141.4$ V.
*   The resistance $R = 100$ $\Omega$.
*   Using Ohm's Law for RMS values: $I_{rms} = V_{rms} / R$.
*   $I_{rms} = 141.4 \text{ V} / 100 \text{ } \Omega = 1.414$ A.
*   The angular frequency $\omega = 314$ rad/s. The frequency $f = \omega / (2\pi) = 314 / (2 \times 3.14) = 50$ Hz.
*   **Phase Relationship:** Since it's a purely resistive circuit, the current is **in phase** with the voltage.

**Problem 2: Purely Inductive Circuit**
An inductor of 0.1 H is connected to an AC voltage source of 240 V RMS at 50 Hz. Calculate the inductive reactance and the RMS current. What is the phase difference?

**Solution:**
*   Voltage $V_{rms} = 240$ V.
*   Frequency $f = 50$ Hz.
*   Inductance $L = 0.1$ H.
*   Angular frequency $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s.
*   Inductive Reactance: $X_L = \omega L = (100\pi) \times 0.1 = 10\pi$ $\Omega$.
*   $X_L \approx 10 \times 3.14159 \approx 31.42$ $\Omega$.
*   Now we can use Ohm's Law with RMS values, treating $X_L$ as the "resistance" in this purely inductive circuit:
    $I_{rms} = V_{rms} / X_L$.
*   $I_{rms} = 240 \text{ V} / 31.42 \text{ } \Omega \approx 7.64$ A.
*   **Phase Difference:** In a purely inductive circuit, the current **lags** the voltage by **90 degrees**.

**Problem 3: Purely Capacitive Circuit**
A capacitor of 100 $\mu$F is connected to an AC voltage source of 120 V RMS at 60 Hz. Calculate the capacitive reactance and the RMS current. What is the phase difference?

**Solution:**
*   Voltage $V_{rms} = 120$ V.
*   Frequency $f = 60$ Hz.
*   Capacitance $C = 100 \text{ } \mu\text{F} = 100 \times 10^{-6}$ F $= 0.0001$ F.
*   Angular frequency $\omega = 2\pi f = 2\pi \times 60 = 120\pi$ rad/s.
*   Capacitive Reactance: $X_C = \frac{1}{\omega C} = \frac{1}{120\pi \times 0.0001}$.
*   $X_C = \frac{1}{0.012\pi} \approx \frac{1}{0.0377} \approx 26.53$ $\Omega$.
*   Using Ohm's Law with RMS values, treating $X_C$ as the "resistance" in this purely capacitive circuit:
    $I_{rms} = V_{rms} / X_C$.
*   $I_{rms} = 120 \text{ V} / 26.53 \text{ } \Omega \approx 4.52$ A.
*   **Phase Difference:** In a purely capacitive circuit, the current **leads** the voltage by **90 degrees**.

**Problem 4: Series RL Circuit (Introducing Impedance)**
A resistor of 30 $\Omega$ is connected in series with an inductor of 0.1 H to an AC voltage source of 200 V RMS at 50 Hz. Calculate the impedance of the circuit and the total RMS current. Determine the phase angle between voltage and current.

**Solution:**
*   Resistance $R = 30$ $\Omega$.
*   Inductance $L = 0.1$ H.
*   Frequency $f = 50$ Hz.
*   Voltage $V_{rms} = 200$ V.
*   Angular frequency $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s.
*   Calculate Inductive Reactance: $X_L = \omega L = (100\pi) \times 0.1 = 10\pi$ $\Omega \approx 31.42$ $\Omega$.
*   Since there's no capacitor, $X_C = 0$.
*   Calculate Impedance:
    $Z = R + j(X_L - X_C) = 30 + j(31.42 - 0) = 30 + j31.42$ $\Omega$.
*   Magnitude of Impedance: $|Z| = \sqrt{R^2 + X_L^2} = \sqrt{30^2 + 31.42^2}$.
*   $|Z| = \sqrt{900 + 987.2} = \sqrt{1887.2} \approx 43.44$ $\Omega$.
*   Total RMS Current: $I_{rms} = V_{rms} / |Z| = 200 \text{ V} / 43.44 \text{ } \Omega \approx 4.60$ A.
*   Phase Angle: $\theta = \arctan\left(\frac{X_L}{R}\right) = \arctan\left(\frac{31.42}{30}\right)$.
*   $\theta \approx \arctan(1.047) \approx 46.3$ degrees.
*   **Phase Relationship:** Since $X_L > X_C$ (or $X_L$ is positive), the circuit is inductive, and the current **lags** the voltage by approximately 46.3 degrees.

---

This concludes our analysis of simple AC circuits. Remember, the key takeaways are the concepts of inductive and capacitive reactance and how they, along with resistance, combine to form impedance. The phase relationships are also critically important. Keep practicing these calculations, and you'll be well-prepared to tackle more complex AC circuits!

---

## Sample Questions with Answers

**Q1. Define Impedance and explain its significance in AC circuits.**
**Answer:** Impedance (Z) is the total opposition that a circuit presents to alternating current. It is a complex quantity that includes both resistance (which causes energy dissipation) and reactance (which causes energy storage and phase shifts). Its significance lies in its ability to combine the effects of resistors, inductors, and capacitors to predict the total current magnitude and its phase relationship with the applied voltage in any AC circuit. It is the AC equivalent of resistance in DC circuits.

**Q2. In a purely inductive AC circuit, what is the phase relationship between voltage and current?**
**Answer:** In a purely inductive AC circuit, the current **lags** the applied voltage by **90 degrees** (or $\pi/2$ radians). This is because the inductor opposes the *change* in current, and the voltage induced across the inductor is proportional to the rate of change of current.

**Q3. Calculate the inductive reactance of a 50 mH inductor when connected to a 60 Hz AC supply.**
**Answer:**
Given:
Inductance $L = 50 \text{ mH} = 50 \times 10^{-3}$ H
Frequency $f = 60$ Hz
Angular frequency $\omega = 2\pi f = 2\pi \times 60 = 120\pi$ rad/s

Inductive Reactance $X_L = \omega L$
$X_L = (120\pi) \times (50 \times 10^{-3})$
$X_L = 6\pi \text{ } \Omega$
$X_L \approx 18.85 \text{ } \Omega$

**Q4. A circuit consists of a 20 $\Omega$ resistor and a capacitor of 30 $\mu$F in series, connected to a 240 V, 50 Hz AC supply. Calculate the impedance of the circuit and the RMS current.**
**Answer:**
Given:
Resistance $R = 20 \text{ } \Omega$
Capacitance $C = 30 \text{ } \mu\text{F} = 30 \times 10^{-6}$ F
Voltage $V_{rms} = 240$ V
Frequency $f = 50$ Hz

Angular frequency $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s

Capacitive Reactance $X_C = \frac{1}{\omega C} = \frac{1}{100\pi \times 30 \times 10^{-6}}$
$X_C = \frac{1}{3000\pi \times 10^{-6}} = \frac{10^6}{3000\pi} = \frac{1000}{3\pi} \text{ } \Omega$
$X_C \approx \frac{1000}{9.42} \approx 106.1 \text{ } \Omega$

Impedance $Z = R - jX_C$ (since it's capacitive)
Magnitude of Impedance $|Z| = \sqrt{R^2 + X_C^2}$
$|Z| = \sqrt{20^2 + (106.1)^2} = \sqrt{400 + 11257.21}$
$|Z| = \sqrt{11657.21} \approx 107.97 \text{ } \Omega$

RMS Current $I_{rms} = \frac{V_{rms}}{|Z|} = \frac{240 \text{ V}}{107.97 \text{ } \Omega} \approx 2.22 \text{ A}$

The impedance is approximately $107.97 \text{ } \Omega$ and the RMS current is approximately $2.22 \text{ A}$. The circuit is capacitive, so the current leads the voltage.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
