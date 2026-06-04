---
title: "Applications of Zener and Tunnel diodes."
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 2: Semiconductor Devices"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9564"
status: "completed"
scrapedAt: "2026-05-23T16:03:46.422Z"
---
# Module 2: Semiconductor Devices - Applications of Zener and Tunnel Diodes

Welcome back, everyone! In our previous sessions, we delved deep into the fundamental physics of semiconductors and understood how PN junctions behave. Today, we're going to build upon that knowledge and explore some incredibly useful applications of two very special types of diodes: the **Zener Diode** and the **Tunnel Diode**. These aren't your everyday rectifying diodes; they have unique characteristics that make them indispensable in modern electronics.

Before we dive into the applications, let's quickly recap what makes these diodes so special. This will help us connect our understanding to the **Course Outcomes**, particularly **CO1: Explain the fundamentals of Semiconductor Physics** and **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**.

## 1. Zener Diode: The Voltage Regulator's Best Friend

We've all seen how a regular PN junction diode breaks down when subjected to a reverse voltage exceeding its breakdown voltage. For most diodes, this breakdown is destructive. However, the Zener diode is designed *specifically* to operate safely in the reverse breakdown region.

### 1.1 What Makes a Zener Diode Special?

A Zener diode is heavily doped on both the P and N sides. This heavy doping results in a very narrow depletion region. When a reverse voltage is applied, this narrow depletion region means that charge carriers (electrons and holes) can easily tunnel through the potential barrier. This tunneling phenomenon is called **Zener breakdown**, and it occurs at a precisely defined reverse voltage, known as the **Zener voltage ($V_Z$)**.

Think of it like this: Imagine a very, very narrow bridge over a raging river. If you try to cross it with a lot of force (high voltage), the bridge (depletion region) might collapse. But if the bridge is designed to be strong *at a specific point* and allows you to cross *safely* under specific conditions, that's what a Zener diode does. It allows current to flow in reverse at a specific voltage, and crucially, it can handle this current without being damaged.

According to Beiser's "Concepts of Modern Physics" and Streetman's "Solid State Electronic Devices," this controlled breakdown is key. The Zener diode exhibits a very sharp and nearly constant voltage drop once it reaches its Zener voltage, even if the current changes significantly. This is its superpower!

### 1.2 Key Applications of the Zener Diode

Because of this constant voltage characteristic in reverse breakdown, the Zener diode is primarily used for **voltage regulation**.

#### 1.2.1 Voltage Regulation

Have you ever noticed how your phone charger has a bulky adapter? Part of that adapter's job is to ensure that a stable voltage is delivered to your phone, regardless of fluctuations in the mains supply. Zener diodes are fundamental components in many simpler voltage regulator circuits.

**How it works:**
Imagine a circuit where you need a constant 5V supply, but the input voltage might fluctuate between 8V and 12V. We can use a Zener diode to "clip" this excess voltage.

*   **Circuit Setup:** We place a Zener diode in reverse bias, in parallel with the load resistor (the device we want to power). A series resistor ($R_S$) is placed between the unregulated DC supply and the Zener diode.
*   **Operation:** When the input voltage is low (e.g., 8V), the Zener diode might not even be in breakdown, or it's just entering it. The voltage across the load will be less than the Zener voltage. However, as the input voltage increases (e.g., to 10V), the Zener diode goes into breakdown. The voltage across the Zener diode (and thus across the parallel load resistor) is held constant at its Zener voltage ($V_Z$). Any voltage above $V_Z$ is dropped across the series resistor ($R_S$).

**Analogy:** Think of a water tank with an overflow pipe. If the water level in the tank (input voltage) rises too high, the excess water flows out through the overflow pipe (Zener diode conducting in breakdown), keeping the water level in the tank itself constant (voltage across the load). The series resistor is like a flow restrictor to control how much water goes into the tank initially.

**Example:** Let's say we have a variable input voltage (say, 10V to 15V) and we want to power a device that needs exactly 9.1V. We can use a 9.1V Zener diode. If the input is 10V, the Zener conducts and keeps the output at 9.1V. If the input rises to 15V, the Zener still conducts, and the extra voltage (15V - 9.1V = 5.9V) is dropped across the series resistor, while the output remains a steady 9.1V. This is a direct manifestation of **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**.

*   **Key takeaway for exams:** Zener diodes are primarily used for **voltage regulation** due to their stable reverse breakdown voltage. You'll often see questions asking you to design a simple Zener regulator circuit. Remember the role of the series resistor.

#### 1.2.2 Voltage Limiting (Clipping)

Zener diodes can also be used to clip or limit voltage signals to a specific level. If you have a signal that can go too high, a Zener diode can protect sensitive circuitry.

**How it works:**
In a clipping circuit, a Zener diode is connected in series or parallel with the signal path, usually in combination with a regular diode or another Zener diode to achieve positive and negative clipping. When the signal voltage reaches the Zener voltage (in the reverse direction), the Zener diode starts conducting and shunts the excess voltage to ground, effectively "clipping" the waveform at $V_Z$.

**Analogy:** Imagine a conveyor belt carrying boxes. If a box is too tall, it hits a mechanism that stops it from going any higher. The Zener diode acts like that mechanism, preventing the voltage from exceeding a certain level.

This application directly relates to **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications**, as voltage regulation and clipping are foundational techniques used in many electronic systems that interface with optical devices or systems.

## 2. Tunnel Diode: The Quantum Leap in Electronics

Now, let's move on to the Tunnel Diode. This is where things get really interesting, involving quantum mechanical effects. Tunnel diodes are fascinating because they exhibit a unique characteristic: **negative differential resistance**. This is not something you see in ordinary resistors or diodes.

### 2.1 What Makes a Tunnel Diode Special?

A tunnel diode is also heavily doped, even more so than a Zener diode. This extreme doping creates a very, very narrow depletion region, typically on the order of 100 Angstroms ($10^{-8}$ meters). At such small dimensions, quantum mechanical tunneling becomes a dominant effect.

**The Mechanism:**
When a small forward voltage is applied, electrons can "tunnel" directly from the conduction band of the N-side to the valence band of the P-side. As the forward voltage increases, more and more electrons are available to tunnel. However, at a certain point, the energy bands start to misalign. The conduction band electrons on the N-side are now opposite the forbidden gap on the P-side. This causes the current to *decrease* as the voltage *increases*. This is the **negative differential resistance (NDR)** region. As the voltage is increased further, the normal diode forward conduction eventually takes over, and the current starts to rise again.

**Analogy:** Imagine trying to push a ball over a hill. Normally, the higher you push (voltage), the faster it rolls down the other side (current increases). With a tunnel diode, it's like the hill suddenly becomes a bit of a dip or a plateau where pushing harder makes it go *slower* for a while, before it hits another slope and starts going faster again. This "slowing down" as you push harder is the negative resistance.

This phenomenon is explained by the quantum mechanical tunneling effect, a core concept in **CO1: Explain the fundamentals of Semiconductor Physics**. The behavior of charge carriers in this extremely narrow depletion region is what defines the tunnel diode's utility, linking back to **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**.

### 2.2 Key Applications of the Tunnel Diode

The negative differential resistance characteristic makes tunnel diodes incredibly useful in high-frequency and oscillator circuits.

#### 2.2.1 High-Frequency Oscillators

Oscillators are circuits that generate repetitive electronic signals, like sine waves. Tunnel diodes are excellent for creating high-frequency oscillators because their negative resistance can cancel out the positive resistance of other components in the circuit, allowing oscillations to build up and sustain themselves.

**How it works:**
A tunnel diode is placed in a resonant circuit (typically an LC tank circuit – an inductor and capacitor). The negative resistance of the tunnel diode effectively compensates for the energy losses in the resonant circuit, preventing the oscillations from dying out. Because the tunneling process is very fast, tunnel diode oscillators can operate at very high frequencies, even into the microwave range.

**Example:** Think of pushing a swing. If you push at just the right moment (the resonant frequency), each small push adds energy to the swing, making it go higher. The tunnel diode acts like that precisely timed push, feeding energy into the oscillating circuit.

This is a direct application where understanding semiconductor behavior (**CO2**) is crucial for designing functional electronic circuits.

#### 2.2.2 High-Speed Switching

The rapid switching speed of the tunnel diode, due to the quick tunneling process, makes it suitable for high-speed digital switching applications.

**How it works:**
The tunnel diode can be switched between two stable states (representing 0 and 1 in digital logic) very rapidly by changing the applied voltage. This rapid transition is much faster than many other semiconductor switching devices.

**Analogy:** Imagine a light switch that you can flip on and off extremely quickly. A tunnel diode can do this at speeds that are essential for modern high-speed computing.

This capability highlights the advanced behavior of semiconductor materials and devices (**CO2**) enabling sophisticated engineering applications.

#### 2.2.3 Amplifiers

Tunnel diodes can also be used as amplifiers, particularly for very weak signals at high frequencies. Their negative resistance can be used to amplify a signal by adding energy to it.

**How it works:**
By carefully biasing the tunnel diode and connecting it to a resonant circuit, a small input signal can be amplified as it passes through the negative resistance region.

This application ties into **CO4** as amplification is a fundamental process in many electronic systems that might interact with optical signals or be part of communication systems.

## 3. Connecting to Course Outcomes and Exam Preparation

Let's consolidate how these diodes relate to our course objectives:

*   **CO1: Fundamentals of Semiconductor Physics:** The very existence of Zener breakdown (tunneling due to high electric field) and tunnel diode negative differential resistance (quantum tunneling between energy bands) are direct consequences of the quantum mechanics and solid-state physics we study.
*   **CO2: Behavior of Semiconductor Materials:** Understanding how heavy doping affects the depletion region width, leading to different breakdown mechanisms and negative resistance, is key to describing semiconductor device behavior.
*   **CO4: Applications in Engineering:** Voltage regulators and high-frequency oscillators are critical building blocks in countless engineering systems, from power supplies to communication equipment. While CO4 specifically mentions lasers and fiber optics, the underlying principles of signal conditioning (regulation, amplification, oscillation) are universal in electronics that interface with such systems.

**Exam Focus:**
For your exams, be prepared to:

1.  **Explain the operating principle** of both Zener and Tunnel diodes, highlighting their unique characteristics (Zener breakdown vs. Negative Differential Resistance).
2.  **Draw and explain the V-I characteristics** for both. For the tunnel diode, make sure to clearly mark the different regions: normal forward conduction, negative resistance, and peak/valley points.
3.  **Describe the primary applications:** Zener for voltage regulation and clipping, Tunnel diode for high-frequency oscillators and switching.
4.  **Sketch simple circuits** demonstrating these applications, like a basic Zener voltage regulator.
5.  **Discuss the underlying physics** (e.g., heavy doping, narrow depletion region, quantum tunneling) that lead to these behaviors.

**Common Pitfalls:**
*   Confusing Zener breakdown with avalanche breakdown (though both can occur, Zener is dominant in heavily doped diodes at lower voltages).
*   Forgetting the series resistor in Zener regulator circuits and its role.
*   Not clearly explaining *why* negative differential resistance occurs in tunnel diodes.
*   Assuming tunnel diodes only work at high frequencies; they can be used at lower frequencies too, but their unique benefit is at high speeds.

**Quick Recall Tips:**
*   **Zener = Stable Voltage Regulator.**
*   **Tunnel = Negative Resistance = Oscillators/Fast Switching.**
*   **Heavy Doping = Narrow Depletion Width = Key to both.**

Remember, the beauty of these devices lies in exploiting normally undesirable breakdown or quantum effects to achieve useful functions. It's a testament to how deeply we can understand and manipulate materials at the atomic level.

## 4. Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and application-based aspects:

---

**Q1: A 5.6V Zener diode is used for voltage regulation. If the unregulated input voltage varies from 10V to 15V, and the load resistance requires a current of 10mA, what should be the value of the series resistor ($R_S$) if the Zener diode requires a minimum current of 5mA to maintain regulation?**

**Answer:**

**Understanding the Concept:** This question tests the understanding of Zener voltage regulation and circuit analysis. We need to ensure the Zener diode is always in breakdown and the total current through $R_S$ is sufficient.

**Step-by-step Solution:**

1.  **Zener Voltage ($V_Z$):** The Zener diode has a breakdown voltage of 5.6V. This will be the regulated output voltage.
2.  **Load Current ($I_L$):** The load requires $I_L = 10mA = 0.01A$.
3.  **Minimum Zener Current ($I_{ZK}$):** The Zener diode needs a minimum current of $I_{ZK} = 5mA = 0.005A$ to maintain regulation.
4.  **Total Minimum Current from Supply:** The total current that must flow through the series resistor ($R_S$) must be at least the sum of the load current and the minimum Zener current.
    $I_{Total(min)} = I_L + I_{ZK} = 10mA + 5mA = 15mA = 0.015A$.
5.  **Maximum Voltage Drop across $R_S$:** This occurs when the input voltage is maximum ($V_{in(max)} = 15V$). The voltage across the Zener diode is always $V_Z = 5.6V$. Therefore, the maximum voltage across $R_S$ is:
    $V_{RS(max)} = V_{in(max)} - V_Z = 15V - 5.6V = 9.4V$.
6.  **Calculate $R_S$:** Using Ohm's Law ($R = V/I$), we can calculate $R_S$. We use the maximum voltage across $R_S$ and the *total minimum current* flowing through it.
    $R_S = V_{RS(max)} / I_{Total(min)} = 9.4V / 0.015A = 626.67\Omega$.

    *Self-Correction/Verification:* What if we used the minimum input voltage? If $V_{in(min)} = 10V$, then $V_{RS(min)} = 10V - 5.6V = 4.4V$. The total current required is $15mA$. If we use $R_S = 626.67\Omega$, the current through $R_S$ at $V_{in} = 10V$ would be $4.4V / 626.67\Omega \approx 7mA$. This is less than the required $15mA$. This means our initial calculation of $I_{Total(min)}$ wasn't the limiting factor for $R_S$. The limiting factor for $R_S$ is ensuring that even at the *lowest* input voltage, there is *enough* current for the Zener diode to regulate.

    Let's re-evaluate. The current through $R_S$ is given by $I_{RS} = (V_{in} - V_Z) / R_S$. This current splits into $I_L$ and $I_Z$. So, $I_{RS} = I_L + I_Z$.
    We need $I_Z \ge I_{ZK} = 5mA$.
    Thus, $I_{RS} = I_L + I_Z = 10mA + I_Z$. Since $I_Z \ge 5mA$, $I_{RS} \ge 10mA + 5mA = 15mA$.

    Now, consider the minimum input voltage:
    $V_{in(min)} = 10V$.
    $V_{RS(min)} = V_{in(min)} - V_Z = 10V - 5.6V = 4.4V$.
    The current through $R_S$ at minimum input voltage is $I_{RS(min)} = V_{RS(min)} / R_S = 4.4V / R_S$.
    We also know that $I_{RS(min)} = I_L + I_{Z(min)}$, where $I_{Z(min)}$ is the Zener current at minimum input. We need $I_{Z(min)} \ge 5mA$.
    So, $4.4V / R_S \ge 10mA + 5mA = 15mA$.
    $R_S \le 4.4V / 15mA = 4.4V / 0.015A = 293.33\Omega$.

    Now consider the maximum input voltage:
    $V_{in(max)} = 15V$.
    $V_{RS(max)} = V_{in(max)} - V_Z = 15V - 5.6V = 9.4V$.
    The current through $R_S$ at maximum input voltage is $I_{RS(max)} = 9.4V / R_S$.
    This current is $I_{RS(max)} = I_L + I_{Z(max)} = 10mA + I_{Z(max)}$.
    The Zener diode can handle significant current, so the maximum current limit isn't usually the primary constraint for choosing $R_S$, but rather ensuring the minimum current. However, we must ensure that the Zener itself doesn't exceed its power rating. Assuming a typical Zener power rating of 400mW, the maximum Zener current $I_{Z(max)}$ would be $400mW / 5.6V \approx 71.4mA$.
    So, $I_{RS(max)} = 10mA + I_{Z(max)}$.
    $9.4V / R_S \ge 10mA + \text{some } I_Z$. The primary constraint is on $R_S$ to ensure minimum Zener current.

    The critical condition is ensuring the minimum Zener current at the lowest input voltage.
    $I_{RS} = I_L + I_Z$.
    When $V_{in} = 10V$, $I_{RS} = (10 - 5.6) / R_S = 4.4 / R_S$.
    We need $I_Z \ge 5mA$.
    So, $I_{RS} = 10mA + I_Z \ge 10mA + 5mA = 15mA$.
    Therefore, $4.4 / R_S \ge 0.015$.
    $R_S \le 4.4 / 0.015 = 293.33\Omega$.

    Now, we also need to consider that $R_S$ must be chosen such that the Zener diode can operate. If $R_S$ is too small, the current through the Zener might exceed its power rating at maximum input voltage.
    Let's assume a Zener power rating of $P_Z = 400mW$. The maximum Zener current $I_{Z(max)}$ is $P_Z / V_Z = 400mW / 5.6V \approx 71.4mA$.
    At $V_{in(max)} = 15V$, the current through $R_S$ is $I_{RS(max)} = (15 - 5.6) / R_S = 9.4 / R_S$.
    The Zener current would be $I_Z = I_{RS(max)} - I_L = (9.4 / R_S) - 0.010A$.
    We need $I_Z \le 71.4mA$.
    $(9.4 / R_S) - 0.010 \le 0.0714$.
    $9.4 / R_S \le 0.0814$.
    $R_S \ge 9.4 / 0.0814 \approx 115.48\Omega$.

    So, we have two constraints on $R_S$:
    1.  $R_S \le 293.33\Omega$ (to ensure minimum Zener current at minimum input voltage)
    2.  $R_S \ge 115.48\Omega$ (to ensure Zener does not overheat at maximum input voltage)

    A common practice is to select a standard resistor value within this range. Let's pick a value to satisfy the most critical condition, which is maintaining regulation. Typically, you'd select a value that comfortably meets the minimum Zener current requirement. A value like **270$\Omega$** would work, as it's less than $293.33\Omega$ and greater than $115.48\Omega$.

    If the question implies finding *a* suitable value and doesn't specify power ratings, the most direct interpretation often focuses on ensuring the Zener is in regulation. However, the calculation involving the minimum current at minimum input voltage is key. Let's stick to the constraint derived from ensuring minimum Zener current: $R_S \le 293.33\Omega$. To be safe and ensure enough current, a value like **270$\Omega$** is a good choice. If the question asked for the *maximum* value of $R_S$, it would be $293.33\Omega$. If it asked for the *minimum* value of $R_S$ to protect the Zener (assuming 400mW rating), it would be $115.48\Omega$. Without further constraints on $R_S$, we often aim for the lower end of the possible range for robustness. Let's use the value that ensures the minimum current condition.

    **Revised Answer based on common exam interpretation:** The question is typically asking for the value that ensures regulation under all conditions. The critical condition is the minimum input voltage, where the current through $R_S$ must be enough to supply the load and the minimum Zener current.

    At $V_{in(min)} = 10V$, the voltage across $R_S$ is $V_{RS(min)} = 10V - 5.6V = 4.4V$.
    The total current required through $R_S$ is $I_{RS} = I_L + I_Z$.
    We need $I_Z \ge 5mA$. So, $I_{RS} \ge 10mA + 5mA = 15mA$.
    Using Ohm's law for $R_S$: $R_S = V_{RS(min)} / I_{RS}$. To ensure $I_{RS} \ge 15mA$, we must choose $R_S$ such that it *allows* at least $15mA$ when the voltage is $4.4V$.
    So, $R_S = 4.4V / 0.015A = 293.33\Omega$.
    If we choose $R_S = 293.33\Omega$, then at $V_{in(min)}=10V$, $I_{RS} = 4.4V / 293.33\Omega = 15mA$. This current splits into $10mA$ for the load and $5mA$ for the Zener, meeting the minimum Zener current requirement.
    For safety margin and standard resistor values, a **270$\Omega$** resistor would be a practical choice. However, if asked for the calculated value, **293.33$\Omega$** is derived from the minimum current condition. Let's assume the question seeks the boundary value to meet the minimum Zener current.

    **Final Calculated Value:** $R_S = 293.33\Omega$. (Often a standard value like 270$\Omega$ or 330$\Omega$ would be chosen in practice, but $293.33\Omega$ is the derived value).

---

**Q2: Explain the phenomenon of negative differential resistance in a tunnel diode and list two key applications resulting from this property.**

**Answer:**

**Understanding the Concept:** This question probes the fundamental characteristic of tunnel diodes and its practical implications. It tests **CO1** and **CO2**.

**Explanation of Negative Differential Resistance (NDR):**

A tunnel diode is heavily doped, leading to a very narrow depletion region (around 100 Angstroms). Due to this extreme narrowness, quantum mechanical tunneling of electrons across the PN junction becomes significant even at low forward bias voltages.

1.  **Initial Forward Bias:** At zero or very low forward voltage, the energy bands are such that tunneling is minimal.
2.  **Increasing Forward Bias (Peak Voltage, $V_P$):** As the forward voltage increases, the conduction band electrons on the N-side align with the valence band holes on the P-side. This allows a significant number of electrons to tunnel across the junction, causing the forward current to rise sharply. This is the region up to the **peak point** ($I_P, V_P$).
3.  **Negative Differential Resistance Region:** As the forward voltage is increased further beyond $V_P$, the alignment between the conduction band on the N-side and the valence band on the P-side begins to decrease. The conduction band electrons on the N-side now face the forbidden energy gap on the P-side. Consequently, the probability of tunneling decreases, and the current starts to *fall* even though the voltage is *increasing*. This region, between the peak point ($V_P, I_P$) and the valley point ($V_V, I_V$), is characterized by **negative differential resistance**. Mathematically, $dV/dI < 0$ in this region.
4.  **Normal Forward Conduction:** Beyond the valley point ($V_V$), the applied voltage is large enough that the normal diode forward conduction mechanism (diffusion of majority carriers over the potential barrier) dominates. In this region, the current rises again as the voltage increases, exhibiting positive differential resistance.

**Key Applications due to NDR:**

1.  **High-Frequency Oscillators:** The negative resistance of the tunnel diode can be used to cancel out the resistive losses in a resonant circuit (like an LC tank circuit). This allows oscillations to build up and sustain at very high frequencies (microwave frequencies) where conventional oscillators might struggle due to parasitic resistances.
2.  **High-Speed Switching Circuits:** The extremely fast switching speed of the tunnel diode, attributed to the rapid tunneling process, makes it suitable for high-speed logic circuits and digital applications where rapid transitions between 'on' and 'off' states are required.

---

**Q3: Compare and contrast Zener diodes and Tunnel diodes in terms of their doping levels, operating breakdown mechanism, and primary applications.**

**Answer:**

**Understanding the Concept:** This question requires a comparative analysis of the two diodes, touching upon their physical construction, operational principles, and functional uses. This tests **CO1**, **CO2**, and understanding of applications (**CO4** contextually).

| Feature             | Zener Diode                                     | Tunnel Diode                                     |
| :------------------ | :---------------------------------------------- | :----------------------------------------------- |
| **Doping Level**    | Heavily doped (e.g., $10^{17} - 10^{18}$ cm$^{-3}$) | Very heavily doped (e.g., $10^{18} - 10^{19}$ cm$^{-3}$ or higher) |
| **Depletion Region**| Narrow (e.g., $10^{-6}$ m)                       | Extremely narrow (e.g., $10^{-8}$ m, ~100 Angstroms) |
| **Breakdown Mechanism** | Primarily **Zener Breakdown** (field ionization/tunneling) due to high electric field in a narrow depletion region. Avalanche breakdown can also occur at higher voltages. | **Quantum Mechanical Tunneling** between conduction and valence bands. Exhibits **Negative Differential Resistance (NDR)**. |
| **Operating Region**| Reverse breakdown region.                        | Forward bias region (specifically, the NDR region). |
| **V-I Characteristic** | Sharp current increase at $V_Z$ in reverse bias. | Sharp current increase in forward bias, followed by a region where current decreases with increasing voltage (NDR), and then normal forward conduction. |
| **Primary Applications** | **Voltage Regulation**, Voltage Limiting (Clipping). | **High-Frequency Oscillators**, High-Speed Switching Circuits, Amplifiers. |
| **Speed**           | Relatively fast, but limited by junction capacitance. | Extremely fast due to tunneling mechanism.      |
| **Power Handling**  | Can be designed for moderate to high power.     | Generally low power devices.                    |

**Key Contrasts:**

*   **Operating Mode:** Zener diodes are used in reverse bias breakdown, while tunnel diodes are used in forward bias and exploit their negative differential resistance.
*   **Fundamental Phenomenon:** Zener breakdown is a form of tunneling driven by a high electric field. Tunnel diode operation relies on quantum tunneling between energy bands in a specific forward bias alignment, leading to NDR.
*   **Primary Function:** Zener diodes provide a stable voltage reference. Tunnel diodes enable oscillation and very high-speed switching.

**Similarities:**

*   Both rely on heavy doping.
*   Both utilize quantum mechanical tunneling as a significant factor in their operation (though the context and consequence differ).
*   Both have a very narrow depletion region.

---
