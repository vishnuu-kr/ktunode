---
title: "Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits; Inductive and capacitive reactance, concept of impedance - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction : Faraday's laws, Lenz's law"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c6d"
status: "completed"
scrapedAt: "2026-05-20T16:39:05.657Z"
---
This is a fantastic request! It requires me to embody the role of an engaging professor, weaving together theoretical concepts with practical understanding and exam preparation. Let's dive into Module 2, focusing on AC circuits.

---

## **Module 2: Electromagnetic Induction - Analysis of Simple AC Circuits**

Welcome, everyone! In our previous discussions, we've touched upon the fascinating world of electromagnetism and how changing magnetic fields can induce currents. Today, we're going to build upon that foundation and explore how these principles manifest in **Alternating Current (AC) circuits**. Specifically, we'll be analyzing the behavior of AC when it flows through circuits containing only resistors, inductors, or capacitors. This is a crucial step in understanding more complex electrical systems.

Our aim today, as outlined by **Course Outcome 1 (CO1)**, is to **apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. By the end of this session, you should be comfortable analyzing these basic AC circuits and understand the key factors that govern their behavior.

Think about your home. The electricity that powers your lights, appliances, and gadgets is AC. While DC (Direct Current) is like a steady river flowing in one direction, AC is more like a tide, constantly changing its direction and magnitude. Understanding how AC interacts with different circuit components is fundamental to electrical engineering.

### **1. Purely Resistive AC Circuits**

Let's start with the simplest case: a circuit containing only a **resistor** connected to an AC voltage source.

**What is a Resistor?** You already know resistors from DC circuits. They oppose the flow of current. Their opposition is measured in Ohms ($\Omega$).

When an AC voltage, let's say $v(t) = V_m \sin(\omega t)$, is applied across a resistor $R$, what happens to the current $i(t)$?

Using Ohm's Law, which we know is fundamental ($V = IR$ in DC), we can apply it here too. The instantaneous voltage across the resistor is $v(t)$, and the instantaneous current through it is $i(t)$. So, $v(t) = i(t)R$.

Rearranging this, we get $i(t) = \frac{v(t)}{R} = \frac{V_m \sin(\omega t)}{R} = \left(\frac{V_m}{R}\right) \sin(\omega t)$.

What does this tell us?
*   The maximum current, $I_m$, will be $V_m/R$.
*   The current waveform is also a sine wave.
*   Crucially, the current waveform is **in phase** with the voltage waveform. This means that when the voltage is at its peak, the current is also at its peak, and when the voltage is zero, the current is also zero. They rise and fall together.

Imagine a simple seesaw. When one end goes up, the other end goes up at the same time. That's like the voltage and current in a purely resistive circuit – they move in lockstep.

**For your exams:** Remember this in-phase relationship. It's the baseline against which we compare other AC circuits.

### **2. Purely Inductive AC Circuits**

Now, let's introduce an **inductor**. An inductor is typically a coil of wire. Its ability to store energy in a magnetic field is key here. We measure inductance in Henries (H).

When an AC voltage $v(t) = V_m \sin(\omega t)$ is applied across an inductor $L$, the inductor opposes the *change* in current. This opposition isn't constant like resistance; it depends on how fast the current is changing and the inductance value.

This opposition is called **Inductive Reactance**, denoted by $X_L$.
Inductive reactance is calculated as:
$X_L = \omega L$

where:
*   $\omega$ is the angular frequency of the AC voltage, in radians per second (rad/s).
*   $L$ is the inductance in Henries (H).

We also know that $\omega = 2\pi f$, where $f$ is the frequency in Hertz (Hz). So, $X_L = 2\pi f L$.

**What does this formula tell us?**
*   The higher the frequency ($f$), the higher the inductive reactance ($X_L$). This means an inductor opposes high-frequency AC more strongly.
*   The larger the inductance ($L$), the higher the inductive reactance ($X_L$). A coil with more turns or a larger core will have greater opposition to AC.

**So, how does this affect the current?**
In an inductive circuit, the voltage *leads* the current by **90 degrees (or $\pi/2$ radians)**. This is a vital concept!

Why does this happen? Think about Faraday's Law of Induction. The voltage induced in an inductor is proportional to the rate of change of current ($v_L = -L \frac{di}{dt}$). When the current is changing most rapidly (crossing zero), the induced voltage is maximum. When the current is at its peak (rate of change is zero), the induced voltage is zero. This delay or "lead" is fundamental to inductive circuits.

**Analogy:** Imagine trying to push a heavy flywheel. It takes effort to get it moving (initial current change), but once it's spinning, it wants to keep spinning. If you try to stop it suddenly, it resists that change. In an AC circuit, the current is constantly trying to change direction. The inductor, through its magnetic field, resists these changes, causing the current to "lag" behind the applied voltage.

**For your exams:** The key takeaway is that voltage leads current by 90 degrees in a purely inductive circuit. This is often tested conceptually and in calculations.

### **3. Purely Capacitive AC Circuits**

Finally, let's consider a **capacitor**. A capacitor stores energy in an electric field. It consists of two conductive plates separated by an insulating dielectric material. Capacitance is measured in Farads (F).

When an AC voltage $v(t) = V_m \sin(\omega t)$ is applied across a capacitor $C$, the capacitor opposes the *change* in voltage across it. This opposition is called **Capacitive Reactance**, denoted by $X_C$.

Capacitive reactance is calculated as:
$X_C = \frac{1}{\omega C}$

where:
*   $\omega$ is the angular frequency of the AC voltage, in radians per second (rad/s).
*   $C$ is the capacitance in Farads (F).

As before, $\omega = 2\pi f$, so $X_C = \frac{1}{2\pi f C}$.

**What does this formula tell us?**
*   The higher the frequency ($f$), the *lower* the capacitive reactance ($X_C$). This means a capacitor passes high-frequency AC more easily.
*   The larger the capacitance ($C$), the *lower* the capacitive reactance ($X_C$). A capacitor with larger plates or a thinner dielectric will have less opposition to AC.

**How does this affect the current?**
In a capacitive circuit, the current *leads* the voltage by **90 degrees (or $\pi/2$ radians)**. This is the opposite of the inductive circuit!

Why? The current through a capacitor is related to the rate of change of voltage across it ($i_C = C \frac{dv}{dt}$). When the voltage is changing most rapidly (crossing zero), the current is maximum. When the voltage is at its peak (rate of change is zero), the current is zero. This causes the current to "get ahead" of the voltage.

**Analogy:** Think of charging and discharging a bucket with water. If you're pouring water in quickly (high rate of change of voltage), the bucket fills up fast, and you're essentially pushing a lot of water in (current). If you just hold the water level constant, no water flows in or out. In an AC circuit, the voltage is constantly changing, so the capacitor is constantly being charged and discharged, leading to a continuous flow of current, with the current leading the voltage.

**For your exams:** The key takeaway is that current leads voltage by 90 degrees in a purely capacitive circuit. This is another fundamental concept that requires careful memorization and understanding.

### **4. Concept of Impedance ($Z$)**

So far, we've looked at circuits with only one type of component: R, L, or C. What happens when we have circuits with combinations of these? Or even when we just want a single term to describe the *total opposition* to AC flow, considering both resistance and reactance? That's where **Impedance** comes in.

Impedance ($Z$) is the **total opposition** that a circuit presents to the flow of alternating current. It's analogous to resistance in DC circuits, but it's a more complex quantity because it takes into account not only the magnitude of opposition but also the phase shifts introduced by reactances.

Impedance is a **complex quantity** because it has both a real part (resistance) and an imaginary part (reactance). We represent it as:

$Z = R + jX$

where:
*   $R$ is the **resistance** (measured in Ohms, $\Omega$). This is the opposition that doesn't cause a phase shift.
*   $X$ is the **total reactance** (measured in Ohms, $\Omega$). This is the combination of inductive ($X_L$) and capacitive ($X_C$) reactances.
    *   $X = X_L - X_C$ (Inductive reactance is usually considered positive, and capacitive reactance is considered negative, or we can subtract $X_C$ from $X_L$).
*   $j$ is the imaginary unit ($\sqrt{-1}$).

The **magnitude of impedance**, denoted by $|Z|$, is what we often use to relate voltage and current magnitudes, similar to Ohm's Law:

$|V| = |I| |Z|$  or  $|Z| = \frac{|V|}{|I|}$

where $|V|$ and $|I|$ are the RMS (Root Mean Square) values of voltage and current, respectively.
The magnitude of impedance is calculated using the Pythagorean theorem:

$|Z| = \sqrt{R^2 + X^2} = \sqrt{R^2 + (X_L - X_C)^2}$

The **phase angle** of impedance, $\phi$, tells us the phase difference between the voltage and current in the circuit:

$\tan(\phi) = \frac{X}{R} = \frac{X_L - X_C}{R}$

*   If $X_L > X_C$ (circuit is inductive), $\phi$ is positive, meaning voltage leads current.
*   If $X_C > X_L$ (circuit is capacitive), $\phi$ is negative, meaning current leads voltage.
*   If $X_L = X_C$ (circuit is purely resistive, or in resonance), $\phi = 0$, and voltage and current are in phase.

**Why do we use complex numbers for impedance?** Complex numbers elegantly capture both the magnitude of opposition and the phase shift. When we do calculations with AC circuits, using impedance in complex form simplifies things greatly, especially for series and parallel combinations.

**Think of it like this:** Impedance is the overall "difficulty" for AC to flow. Resistance is like friction on a road – it always opposes movement. Reactance is like a hill you have to climb or descend. Inductive reactance is like climbing a hill (voltage leads current), and capacitive reactance is like descending a hill (current leads voltage). Impedance combines both effects.

**From the textbooks:** Both Kothari & Nagrath and Cathay & Nasar extensively cover impedance. Kothari & Nagrath (4th/2nd ed.) provides excellent explanations of phasors and impedance in their chapters on AC steady-state analysis. Schaum's Outlines is particularly good for numerical problem-solving and breaking down complex calculations.

### **5. Numerical Problems**

Let's solidify these concepts with some practice. These are the kinds of problems you'll encounter in exams, testing your understanding of reactance, impedance, and phase.

**Problem 1: Purely Resistive Circuit**
A resistor of $50 \Omega$ is connected to an AC voltage source $v(t) = 200 \sin(120\pi t)$ V. Find the RMS voltage, RMS current, and the frequency.

*   **Solution:**
    *   The general form of AC voltage is $v(t) = V_m \sin(\omega t)$.
    *   Comparing, $V_m = 200$ V and $\omega = 120\pi$ rad/s.
    *   RMS voltage, $V_{rms} = \frac{V_m}{\sqrt{2}} = \frac{200}{\sqrt{2}} \approx 141.4$ V.
    *   Frequency, $f = \frac{\omega}{2\pi} = \frac{120\pi}{2\pi} = 60$ Hz.
    *   RMS current, $I_{rms} = \frac{V_{rms}}{R} = \frac{141.4}{50} = 2.828$ A.
    *   The current and voltage are in phase.

**Problem 2: Purely Inductive Circuit**
An inductor of $0.5$ H is connected to an AC voltage source $v(t) = 100 \sin(60t)$ V. Calculate the inductive reactance and the RMS current.

*   **Solution:**
    *   $L = 0.5$ H.
    *   $\omega = 60$ rad/s.
    *   Inductive Reactance, $X_L = \omega L = (60 \, \text{rad/s}) \times (0.5 \, \text{H}) = 30 \, \Omega$.
    *   $V_m = 100$ V, so $V_{rms} = \frac{100}{\sqrt{2}} \approx 70.7$ V.
    *   RMS current, $I_{rms} = \frac{V_{rms}}{X_L} = \frac{70.7}{30} \approx 2.36$ A.
    *   In this circuit, the current lags the voltage by 90 degrees.

**Problem 3: Purely Capacitive Circuit**
A capacitor of $100 \, \mu F$ is connected to an AC voltage source with a frequency of $60$ Hz and a RMS voltage of $240$ V. Find the capacitive reactance and the RMS current.

*   **Solution:**
    *   $C = 100 \, \mu F = 100 \times 10^{-6}$ F.
    *   Frequency, $f = 60$ Hz.
    *   Angular frequency, $\omega = 2\pi f = 2\pi (60) = 120\pi$ rad/s.
    *   Capacitive Reactance, $X_C = \frac{1}{\omega C} = \frac{1}{(120\pi) \times (100 \times 10^{-6})} = \frac{1}{0.012\pi} \approx \frac{1}{0.0377} \approx 26.53 \, \Omega$.
    *   $V_{rms} = 240$ V.
    *   RMS current, $I_{rms} = \frac{V_{rms}}{X_C} = \frac{240}{26.53} \approx 9.05$ A.
    *   In this circuit, the current leads the voltage by 90 degrees.

**Problem 4: Series RL Circuit (Introduction to Impedance)**
A resistor of $30 \Omega$ and an inductor of $0.15$ H are connected in series to an AC voltage source $v(t) = 150 \sin(377t)$ V. Calculate the impedance of the circuit and the RMS current.

*   **Solution:**
    *   $R = 30 \, \Omega$.
    *   $L = 0.15$ H.
    *   $\omega = 377$ rad/s.
    *   First, calculate inductive reactance: $X_L = \omega L = (377) \times (0.15) = 56.55 \, \Omega$.
    *   The total reactance in this series circuit is just $X = X_L = 56.55 \, \Omega$ (since there's no capacitor).
    *   Now, calculate impedance:
        $Z = R + jX_L = 30 + j56.55 \, \Omega$.
    *   Magnitude of impedance: $|Z| = \sqrt{R^2 + X_L^2} = \sqrt{30^2 + 56.55^2} = \sqrt{900 + 3197.9} = \sqrt{4097.9} \approx 64.02 \, \Omega$.
    *   $V_m = 150$ V, so $V_{rms} = \frac{150}{\sqrt{2}} \approx 106.1$ V.
    *   RMS current: $I_{rms} = \frac{V_{rms}}{|Z|} = \frac{106.1}{64.02} \approx 1.66$ A.
    *   Phase angle: $\tan(\phi) = \frac{X_L}{R} = \frac{56.55}{30} \approx 1.885$. So, $\phi = \arctan(1.885) \approx 62.08$ degrees.
    *   Since $X_L > 0$, this is an inductive circuit, and the current lags the voltage by approximately 62.08 degrees.

**Problem 5: Series RC Circuit (Introduction to Impedance)**
A resistor of $40 \Omega$ and a capacitor of $50 \, \mu F$ are connected in series to an AC voltage source with a frequency of $60$ Hz and an RMS voltage of $120$ V. Calculate the impedance of the circuit and the RMS current.

*   **Solution:**
    *   $R = 40 \, \Omega$.
    *   $C = 50 \, \mu F = 50 \times 10^{-6}$ F.
    *   $f = 60$ Hz, so $\omega = 2\pi f = 120\pi$ rad/s.
    *   Calculate capacitive reactance: $X_C = \frac{1}{\omega C} = \frac{1}{(120\pi) \times (50 \times 10^{-6})} = \frac{1}{0.006\pi} \approx \frac{1}{0.01885} \approx 53.05 \, \Omega$.
    *   Total reactance in this series circuit is $X = -X_C = -53.05 \, \Omega$ (using the convention that capacitive reactance is negative in the complex impedance $R + j(X_L - X_C)$).
    *   Impedance: $Z = R - jX_C = 40 - j53.05 \, \Omega$.
    *   Magnitude of impedance: $|Z| = \sqrt{R^2 + X_C^2} = \sqrt{40^2 + (-53.05)^2} = \sqrt{1600 + 2814.3} = \sqrt{4414.3} \approx 66.44 \, \Omega$.
    *   $V_{rms} = 120$ V.
    *   RMS current: $I_{rms} = \frac{V_{rms}}{|Z|} = \frac{120}{66.44} \approx 1.81$ A.
    *   Phase angle: $\tan(\phi) = \frac{-X_C}{R} = \frac{-53.05}{40} \approx -1.326$. So, $\phi = \arctan(-1.326) \approx -52.97$ degrees.
    *   Since $\phi$ is negative, this is a capacitive circuit, and the current leads the voltage by approximately 52.97 degrees.

**Remember this:** When dealing with series circuits, you add impedances *vectorially* (or using complex numbers). For purely resistive, inductive, and capacitive circuits, the phase shifts are always $\pm 90^\circ$. In combined circuits (like RL or RC), the phase shift will be somewhere between $0^\circ$ and $\pm 90^\circ$.

### **Connection to Course Outcomes**

*   **CO1 (Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits):** Today's session is directly aimed at this. We've used Ohm's Law, definitions of resistance, inductance, capacitance, and the derived concepts of reactance and impedance to solve problems. The ability to calculate $X_L$, $X_C$, $|Z|$, and the phase angle is critical for applying these concepts.

### **Summary and Key Takeaways**

*   **Purely Resistive AC Circuit:** Current is in phase with voltage. $X_L=0$, $X_C=0$, $Z=R$.
*   **Purely Inductive AC Circuit:** Voltage leads current by $90^\circ$. Opposition is Inductive Reactance, $X_L = \omega L$. $Z = jX_L$.
*   **Purely Capacitive AC Circuit:** Current leads voltage by $90^\circ$. Opposition is Capacitive Reactance, $X_C = 1/(\omega C)$. $Z = -jX_C$.
*   **Impedance ($Z$):** Total opposition in AC circuits, a complex quantity $Z = R + j(X_L - X_C)$. Its magnitude $|Z| = \sqrt{R^2 + (X_L - X_C)^2}$.
*   **Phase Angle ($\phi$):** Indicates the phase difference between voltage and current, given by $\tan(\phi) = (X_L - X_C) / R$.

Understanding these basic building blocks is essential before we move on to circuits containing combinations of R, L, and C, or more complex AC network analysis. Keep practicing these calculations!

---

### **Sample Questions with Answers**

**1. Conceptual Question:**
In a purely inductive AC circuit, does the voltage lead the current or lag the current? By how much?

*   **Answer:** In a purely inductive AC circuit, the voltage **leads** the current by **90 degrees ($\pi/2$ radians)**. This is because the voltage across an inductor is proportional to the rate of change of current ($v_L = -L \frac{di}{dt}$). The current reaches its peak when the rate of change is zero, which is when the voltage is zero, hence the lead.

**2. Calculation Question:**
An AC voltage of $230$ V RMS at $50$ Hz is applied across a capacitor of $100 \, \mu F$. Calculate the capacitive reactance and the RMS current.

*   **Answer:**
    *   $V_{rms} = 230$ V
    *   $f = 50$ Hz
    *   $C = 100 \, \mu F = 100 \times 10^{-6}$ F
    *   $\omega = 2\pi f = 2\pi(50) = 100\pi$ rad/s.
    *   $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(100 \times 10^{-6})} = \frac{1}{0.01\pi} \approx \frac{1}{0.0314} \approx 31.83 \, \Omega$.
    *   $I_{rms} = \frac{V_{rms}}{X_C} = \frac{230}{31.83} \approx 7.22$ A.

**3. Conceptual/Calculation Question:**
An AC circuit consists of a resistor of $20 \Omega$ and an inductor of $0.05$ H connected in series. If the RMS voltage across the combination is $100$ V and the frequency is $60$ Hz, calculate the impedance of the circuit and the phase angle between voltage and current.

*   **Answer:**
    *   $R = 20 \, \Omega$
    *   $L = 0.05$ H
    *   $f = 60$ Hz, so $\omega = 2\pi f = 120\pi$ rad/s.
    *   $X_L = \omega L = (120\pi)(0.05) = 6\pi \approx 18.85 \, \Omega$.
    *   Impedance magnitude: $|Z| = \sqrt{R^2 + X_L^2} = \sqrt{20^2 + (18.85)^2} = \sqrt{400 + 355.32} = \sqrt{755.32} \approx 27.48 \, \Omega$.
    *   Phase angle: $\tan(\phi) = \frac{X_L}{R} = \frac{18.85}{20} \approx 0.9425$.
    *   $\phi = \arctan(0.9425) \approx 43.3^\circ$.
    *   The impedance is $27.48 \, \Omega$ and the phase angle is approximately $43.3^\circ$, with the current lagging the voltage.

---
