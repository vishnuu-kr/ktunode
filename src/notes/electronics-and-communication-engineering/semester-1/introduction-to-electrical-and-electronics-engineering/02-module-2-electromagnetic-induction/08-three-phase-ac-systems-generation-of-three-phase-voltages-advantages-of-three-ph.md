---
title: "Three phase AC systems: Generation of three phase voltages, advantages of three phase systems, star and delta connections (balanced only), relation between line and phase voltages, line and phase currents- numerical problems"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0db"
status: "completed"
scrapedAt: "2026-05-23T17:34:24.244Z"
---
# Module 2: Electromagnetic Induction - Three-Phase AC Systems

Welcome everyone! In our journey through the fascinating world of electrical and electronics engineering, we've already touched upon the basics of AC circuits. Today, we're diving deep into a concept that is absolutely fundamental to how our modern electrical world operates: **Three-Phase AC Systems**. You see them everywhere, from the power grid supplying your homes and industries to the massive motors that drive machinery. Understanding these systems is crucial, and it directly relates to our **CO3: Understand three phase AC systems**.

Think about it for a moment. Why do we need three phases? Couldn't one AC waveform suffice? Well, as we'll see, the advantages are immense, particularly when it comes to efficiently transmitting and utilizing electrical power.

## Generation of Three-Phase Voltages

So, how do we actually create these three-phase voltages? The principle is beautifully simple and builds directly upon our understanding of electromagnetic induction from generators. Remember Faraday's Law? A changing magnetic flux induces an electromotive force (EMF).

Imagine a single-phase generator. It typically has a stationary magnetic field (stator) and a rotating coil (rotor), or vice versa. As the coil rotates within the magnetic field, the flux linking with it changes sinusoidally, producing a sinusoidal AC voltage.

Now, for three-phase generation, we essentially take this concept and expand it. Instead of just one coil, we have **three** coils, placed physically apart from each other. These coils are arranged in a specific geometrical configuration, typically 120 degrees apart in space. As a single magnetic field (or a set of rotating magnetic fields) sweeps across these three stationary coils, it induces voltages in each one.

Because the coils are spaced 120 degrees apart, the magnetic flux linking with each coil reaches its maximum at different times. This results in three sinusoidal voltages that are identical in magnitude and frequency, but are **displaced in phase by 120 electrical degrees** from each other.

Let's represent these voltages mathematically. If the voltage in the first phase (let's call it phase 'a') is given by:
$v_a(t) = V_m \sin(\omega t)$

Then, the voltages in the other two phases (phase 'b' and phase 'c') will be:
$v_b(t) = V_m \sin(\omega t - 120^\circ)$
$v_c(t) = V_m \sin(\omega t - 240^\circ)$ (or equivalently, $V_m \sin(\omega t + 120^\circ)$)

Here, $V_m$ is the maximum amplitude of each voltage, and $\omega$ is the angular frequency. The $-120^\circ$ and $-240^\circ$ terms represent the phase lag of voltages 'b' and 'c' with respect to 'a'. This spatial displacement in the physical coils directly translates into a temporal phase displacement in the generated voltages.

**Think of it like this:** Imagine three musicians playing the same note, but each starts their note slightly after the previous one, with a consistent delay. They're producing the same sound (frequency and amplitude), but their sound waves are out of sync. That's essentially what's happening with three-phase voltages.

This synchronized, yet phase-shifted, generation is the heart of three-phase power. It's this precise 120-degree phase separation that unlocks all the major advantages.

## Advantages of Three-Phase Systems

Why go through the trouble of generating and distributing three separate AC voltages? The benefits are significant and touch upon efficiency, power delivery, and motor operation. These advantages are key to understanding why three-phase systems dominate industrial power.

1.  **More Efficient Power Transmission:** For the same amount of power transmitted, a three-phase system requires less conductor material than three separate single-phase systems. This is a huge cost saving, especially over long distances where copper or aluminum wiring is expensive. Intuitively, the three phases work together to deliver power more smoothly and efficiently.

2.  **Constant Power Delivery:** Unlike a single-phase system where the instantaneous power pulsates (going to zero twice per cycle), a balanced three-phase system delivers a *constant* instantaneous power. This is a critical point! Imagine trying to run a heavy machine on a power source that's constantly dipping to zero power – it would be jerky and inefficient. A constant power delivery means smoother operation for machinery, especially motors. This directly supports our **CO3: Understand three phase AC systems**.

3.  **Self-Starting Three-Phase Motors:** This is perhaps the most significant advantage. Three-phase induction motors are inherently self-starting, meaning they don't need any special starting mechanisms. The rotating magnetic field created by the three-phase currents in the stator coils directly pulls the rotor along. Single-phase motors, on the other hand, often require auxiliary windings or capacitors to get them started. This makes three-phase motors simpler, more robust, and generally more efficient for a given power rating.

4.  **Economical for High Power Applications:** For generating and distributing large amounts of power, three-phase systems are far more economical than single-phase systems. The efficiency gains in transmission and the robustness of three-phase machinery make them the go-to choice for factories, large buildings, and the entire power grid.

5.  **Flexibility:** A three-phase system can also easily provide single-phase power. By tapping between one phase and the neutral (in a star connection), you get a single-phase supply, just like what you have at home. So, you get the benefits of three-phase for heavy loads and the convenience of single-phase for lighter loads, all from one system.

These advantages are not just academic; they are the practical reasons why three-phase AC is the backbone of modern electrical infrastructure.

## Star and Delta Connections (Balanced Only)

Now that we know how three-phase voltages are generated and why they're so useful, let's look at how these three individual voltage sources (or loads) are connected together. The two fundamental ways to connect them are called **Star (or Wye)** and **Delta (or Mesh)** connections. We'll focus on balanced systems, meaning all three phases have identical impedances.

### Star Connection

In a star connection, the three voltage sources (or loads) are connected at one common point, called the **neutral point**. The other ends of the three sources are connected to the three output lines, typically labelled L1, L2, and L3 (or R, Y, B for Red, Yellow, Blue phases).

```
     L1 ---- Source A -----\
                           |
     L2 ---- Source B ------ Neutral Point ------
                           |
     L3 ---- Source C -----/
```

(Visual representation would be a "Y" shape where the three sources connect at the center)

**Key Characteristics of Star Connection:**

*   **Phase Voltage ($V_p$):** This is the voltage across each individual source (or load) connected between a line and the neutral.
*   **Line Voltage ($V_L$):** This is the voltage measured between any two lines (e.g., L1 and L2).
*   **Phase Current ($I_p$):** This is the current flowing through each individual source (or load).
*   **Line Current ($I_L$):** This is the current flowing in each line conductor.

In a star connection, the current flowing *through* an individual phase winding is the same as the current flowing *in* the line connected to that winding. So, for a star connection:

*   **Line Current ($I_L$) = Phase Current ($I_p$)**

This is a fundamental relationship, and it's important to remember!

Now, what about the voltages? The line voltage is not the same as the phase voltage. Due to the 120-degree phase difference between the phase voltages, the voltage between any two lines is the vector sum of the two phase voltages.

If $v_{an}$ is the voltage of phase 'a' with respect to neutral, and $v_{bn}$ is the voltage of phase 'b' with respect to neutral, then the line voltage $v_{ab}$ is $v_{an} - v_{bn}$.

When you perform this vector subtraction for voltages that are 120 degrees apart, you find that the magnitude of the line voltage is $\sqrt{3}$ times the magnitude of the phase voltage.

So, for a balanced star connection:

*   **Line Voltage ($V_L$) = $\sqrt{3}$ Phase Voltage ($V_p$)**

Or, put another way:
*   **Phase Voltage ($V_p$) = $V_L / \sqrt{3}$**

This relationship is extremely important for calculations and is often tested in exams. Don't forget that $\sqrt{3}$ is approximately 1.732.

**Analogy:** Think of a three-pronged fork (the star connection). The prongs are the lines (L1, L2, L3). The center where they all meet is the neutral. The voltage from one prong to the center is the phase voltage. The voltage between any two prongs is the line voltage.

### Delta Connection

In a delta connection, the three voltage sources (or loads) are connected end-to-end to form a closed triangle or a mesh. The lines are then connected to the vertices of this triangle.

```
     L1 ---- Source A ---- Source B ---- L2
                 |                     |
                 |                     |
                 +------ Source C ------+
```

(Visual representation would be a triangle where the sources connect at the corners)

**Key Characteristics of Delta Connection:**

*   **Phase Voltage ($V_p$):** This is the voltage across each individual source (or load) connected between two vertices of the triangle.
*   **Line Voltage ($V_L$):** This is the voltage measured between any two lines connected to the vertices.
*   **Phase Current ($I_p$):** This is the current flowing through each individual source (or load).
*   **Line Current ($I_L$):** This is the current flowing in each line conductor connected to a vertex.

In a delta connection, each line is directly connected to the terminals of one of the phase windings. Therefore, the voltage across any line is the same as the voltage across the phase winding connected to it.

So, for a balanced delta connection:

*   **Line Voltage ($V_L$) = Phase Voltage ($V_p$)**

This is a key difference from the star connection!

Now, what about the currents? In a delta connection, the line current splits and flows through two different phase windings. Applying Kirchhoff's Current Law at each vertex, we find that the line current is the vector difference of the two phase currents flowing into or out of that vertex.

Similar to the voltage relationship in a star connection, this current relationship in delta results in the line current being $\sqrt{3}$ times the phase current.

So, for a balanced delta connection:

*   **Line Current ($I_L$) = $\sqrt{3}$ Phase Current ($I_p$)**

Or, put another way:
*   **Phase Current ($I_p$) = $I_L / \sqrt{3}$**

**Analogy:** Imagine three people holding hands in a circle, forming a triangle. Each person represents a phase. The current flowing through each person's arms is the phase current. The total current entering the circle from an external point (a line) is the line current. The current splits between two people.

**Summary Table for Balanced Systems:**

| Connection | Relation between Line & Phase Voltage | Relation between Line & Phase Current |
| :--------- | :------------------------------------ | :------------------------------------ |
| **Star**   | $V_L = \sqrt{3} V_p$                  | $I_L = I_p$                           |
| **Delta**  | $V_L = V_p$                           | $I_L = \sqrt{3} I_p$                  |

**Crucial Point for Exams:** Be very careful when you see a problem to identify whether it's a star or delta connection, and whether you're given phase or line values. Getting these relationships wrong is a common mistake. Always sketch the connection and think about the voltage/current paths.

## Numerical Problems

Let's solidify our understanding with some practice problems. These are typical questions you might encounter. Remember to draw a diagram and write down the given values and what you need to find.

**Problem 1: Star Connected Load**

A balanced three-phase star connected load has a resistance of $10\ \Omega$ and a reactance of $10\ \Omega$ in each phase. The line voltage is $400\ V$. Calculate the phase voltage, phase current, line current, and total power consumed.

*   **Given:**
    *   Connection: Star
    *   Load per phase: $R = 10\ \Omega$, $X_L = 10\ \Omega$
    *   Line Voltage ($V_L$) = $400\ V$

*   **To find:**
    *   Phase Voltage ($V_p$)
    *   Phase Current ($I_p$)
    *   Line Current ($I_L$)
    *   Total Power ($P_{total}$)

*   **Solution:**

    1.  **Phase Voltage ($V_p$):**
        For a star connection, $V_p = V_L / \sqrt{3}$.
        $V_p = 400\ V / \sqrt{3} \approx 400 / 1.732 \approx 230.9\ V$.

    2.  **Impedance per phase ($Z_p$):**
        The impedance in each phase is $Z_p = R + jX_L = 10 + j10\ \Omega$.
        The magnitude of the impedance is $|Z_p| = \sqrt{R^2 + X_L^2} = \sqrt{10^2 + 10^2} = \sqrt{100 + 100} = \sqrt{200} = 10\sqrt{2}\ \Omega \approx 14.14\ \Omega$.

    3.  **Phase Current ($I_p$):**
        Using Ohm's Law for one phase: $I_p = V_p / Z_p$. We use the magnitude of voltage and impedance.
        $|I_p| = V_p / |Z_p| \approx 230.9\ V / 14.14\ \Omega \approx 16.33\ A$.
        Since the load has resistance and reactance, the current will lag the voltage by the power factor angle.
        Power factor angle, $\phi = \arctan(X_L/R) = \arctan(10/10) = \arctan(1) = 45^\circ$.
        So, $I_p = 16.33 \angle -45^\circ\ A$ (assuming $V_p$ is at $0^\circ$).

    4.  **Line Current ($I_L$):**
        For a star connection, $I_L = I_p$.
        So, $|I_L| \approx 16.33\ A$.

    5.  **Total Power ($P_{total}$):**
        The power consumed in each phase is $P_{phase} = V_p \times I_p \times \cos(\phi)$, where $\phi$ is the power factor angle.
        $\cos(\phi) = \cos(45^\circ) = 1/\sqrt{2} \approx 0.707$.
        $P_{phase} = 230.9\ V \times 16.33\ A \times 0.707 \approx 2667\ W$.
        The total power is three times the power in one phase for a balanced system.
        $P_{total} = 3 \times P_{phase} \approx 3 \times 2667\ W = 8001\ W$ or $8.001\ kW$.

        Alternatively, we can use the formula for total power in a three-phase system: $P_{total} = \sqrt{3} V_L I_L \cos(\phi)$.
        $P_{total} = \sqrt{3} \times 400\ V \times 16.33\ A \times 0.707 \approx 1.732 \times 400 \times 16.33 \times 0.707 \approx 8000\ W$ or $8.0\ kW$. (Slight difference due to rounding).

    **Remember this:** Always calculate the impedance magnitude first, then find the phase current. Then use the star/delta relationships for line current and voltage. For power, use $P = VI\cos\phi$ per phase or $\sqrt{3}V_L I_L \cos\phi$ total.

**Problem 2: Delta Connected Load**

A balanced three-phase delta connected load has an impedance of $15 + j20\ \Omega$ per phase. If the line voltage is $440\ V$, calculate the phase voltage, line current, phase current, and total power.

*   **Given:**
    *   Connection: Delta
    *   Load per phase: $Z_p = 15 + j20\ \Omega$
    *   Line Voltage ($V_L$) = $440\ V$

*   **To find:**
    *   Phase Voltage ($V_p$)
    *   Line Current ($I_L$)
    *   Phase Current ($I_p$)
    *   Total Power ($P_{total}$)

*   **Solution:**

    1.  **Phase Voltage ($V_p$):**
        For a delta connection, $V_p = V_L$.
        $V_p = 440\ V$.

    2.  **Impedance per phase ($Z_p$):**
        $Z_p = 15 + j20\ \Omega$.
        Magnitude of impedance, $|Z_p| = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25\ \Omega$.
        Power factor angle, $\phi = \arctan(20/15) = \arctan(4/3) \approx 53.13^\circ$.

    3.  **Phase Current ($I_p$):**
        Using Ohm's Law for one phase: $I_p = V_p / Z_p$.
        $|I_p| = V_p / |Z_p| = 440\ V / 25\ \Omega = 17.6\ A$.
        The current lags the voltage by $53.13^\circ$.
        $I_p = 17.6 \angle -53.13^\circ\ A$ (assuming $V_p$ is at $0^\circ$).

    4.  **Line Current ($I_L$):**
        For a delta connection, $I_L = \sqrt{3} I_p$.
        $|I_L| = \sqrt{3} \times 17.6\ A \approx 1.732 \times 17.6\ A \approx 30.48\ A$.

    5.  **Total Power ($P_{total}$):**
        The power factor is $\cos(\phi) = \cos(53.13^\circ) \approx 0.6$.
        Using the total power formula: $P_{total} = \sqrt{3} V_L I_L \cos(\phi)$.
        $P_{total} = \sqrt{3} \times 440\ V \times 30.48\ A \times 0.6 \approx 1.732 \times 440 \times 30.48 \times 0.6 \approx 14520\ W$ or $14.52\ kW$.

        Alternatively, calculate power per phase:
        $P_{phase} = V_p \times I_p \times \cos(\phi) = 440\ V \times 17.6\ A \times 0.6 = 4646.4\ W$.
        $P_{total} = 3 \times P_{phase} = 3 \times 4646.4\ W = 13939.2\ W$.
        (Again, slight differences due to rounding in intermediate steps and use of approximate values. The $\sqrt{3}V_L I_L \cos\phi$ formula is often more direct and less prone to intermediate rounding errors.) Let's re-calculate using more precise values:
        $V_p = 440\ V$
        $|Z_p| = 25\ \Omega$
        $|I_p| = 440 / 25 = 17.6\ A$
        $\cos\phi = 15/25 = 0.6$
        $P_{phase} = V_p I_p \cos\phi = 440 \times 17.6 \times 0.6 = 4646.4\ W$
        $P_{total} = 3 \times P_{phase} = 3 \times 4646.4 = 13939.2\ W$
        $|I_L| = \sqrt{3} \times 17.6 = 30.47\ A$ (approx)
        $P_{total} = \sqrt{3} V_L I_L \cos\phi = \sqrt{3} \times 440 \times 30.47 \times 0.6 \approx 13939\ W$.
        So, $13.94\ kW$ is the more accurate answer.

    **Key Takeaway:** Always be systematic. Identify the connection type first. Then apply the correct voltage and current relationships, and finally, the power formulas.

---

## Sample Questions with Answers

**Question 1 (Conceptual):** What is the primary advantage of three-phase power transmission over single-phase power for high power applications?

*   **Answer:** The primary advantage is **efficiency in power transmission**, requiring less conductor material for the same power delivery compared to three separate single-phase systems. Also, three-phase systems deliver constant power, leading to smoother operation of machinery.

**Question 2 (Conceptual):** In a balanced three-phase star-connected system, if the phase voltage is $230\ V$, what is the line voltage?

*   **Answer:** For a star connection, $V_L = \sqrt{3} V_p$.
    $V_L = \sqrt{3} \times 230\ V \approx 1.732 \times 230\ V \approx 398.4\ V$.
    So, the line voltage is approximately $398.4\ V$.

**Question 3 (Conceptual):** For a balanced three-phase delta-connected system, if the line current is $50\ A$, what is the phase current?

*   **Answer:** For a delta connection, $I_L = \sqrt{3} I_p$.
    Therefore, $I_p = I_L / \sqrt{3} = 50\ A / \sqrt{3} \approx 50\ A / 1.732 \approx 28.87\ A$.
    The phase current is approximately $28.87\ A$.

**Question 4 (Problem Solving):** A 415V, three-phase, star-connected motor has a power factor of 0.85 lagging. The motor draws a line current of 30A. Calculate:
    (a) Phase voltage
    (b) Phase current
    (c) Total power consumed by the motor

*   **Answer:**
    *   Given: $V_L = 415\ V$, $I_L = 30\ A$, Power Factor (PF) = 0.85 lagging, Connection = Star.

    *   **(a) Phase Voltage ($V_p$):**
        For star connection, $V_p = V_L / \sqrt{3} = 415\ V / \sqrt{3} \approx 239.6\ V$.

    *   **(b) Phase Current ($I_p$):**
        For star connection, $I_p = I_L$.
        So, $I_p = 30\ A$.

    *   **(c) Total Power Consumed ($P_{total}$):**
        The total power in a three-phase system is $P_{total} = \sqrt{3} V_L I_L \cos(\phi)$.
        $P_{total} = \sqrt{3} \times 415\ V \times 30\ A \times 0.85$
        $P_{total} \approx 1.732 \times 415 \times 30 \times 0.85 \approx 18298\ W$ or $18.3\ kW$.

**Question 5 (Problem Solving):** A balanced three-phase load is connected in delta across a 208V, 50Hz supply. Each phase of the load has an impedance of $12\ \Omega$ resistance and $16\ \Omega$ inductive reactance. Calculate:
    (a) Line current
    (b) Phase current
    (c) Total power factor

*   **Answer:**
    *   Given: $V_L = 208\ V$, $R_p = 12\ \Omega$, $X_{Lp} = 16\ \Omega$, Connection = Delta.

    *   **(a) Line Current ($I_L$):**
        First, find phase impedance: $Z_p = R_p + jX_{Lp} = 12 + j16\ \Omega$.
        Magnitude of phase impedance: $|Z_p| = \sqrt{12^2 + 16^2} = \sqrt{144 + 256} = \sqrt{400} = 20\ \Omega$.
        Power factor angle: $\phi_p = \arctan(16/12) = \arctan(4/3) \approx 53.13^\circ$.
        Phase voltage: For delta, $V_p = V_L = 208\ V$.
        Phase current: $|I_p| = V_p / |Z_p| = 208\ V / 20\ \Omega = 10.4\ A$.
        Line current: For delta, $I_L = \sqrt{3} I_p = \sqrt{3} \times 10.4\ A \approx 1.732 \times 10.4\ A \approx 18.0\ A$.

    *   **(b) Phase Current ($I_p$):**
        As calculated above, $|I_p| = 10.4\ A$.

    *   **(c) Total Power Factor:**
        The power factor for the load is the same as the power factor angle of the individual phase impedances, which we calculated as $\phi_p \approx 53.13^\circ$.
        Therefore, the total power factor (PF) is $\cos(\phi_p) = \cos(53.13^\circ) \approx 0.6$ lagging (since the reactance is inductive).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
