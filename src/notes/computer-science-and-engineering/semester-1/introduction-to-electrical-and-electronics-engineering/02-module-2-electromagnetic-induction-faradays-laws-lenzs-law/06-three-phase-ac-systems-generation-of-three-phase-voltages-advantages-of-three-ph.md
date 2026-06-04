---
title: "Three phase AC systems: Generation of three phase voltages, advantages of three phase systems, star and delta connections (balanced only), relation between line and phase voltages, line and phase currents- numerical problems"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction : Faraday's laws, Lenz's law"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c6f"
status: "completed"
scrapedAt: "2026-05-20T16:39:08.706Z"
---
# Introduction to Electrical and Electronics Engineering - Module 2: Electromagnetic Induction

## Topic: Three-Phase AC Systems

Welcome, everyone, to our deep dive into the fascinating world of three-phase AC systems! This is a cornerstone of modern electrical engineering, powering so much of our world, from the hum of a factory to the lights in our homes. Understanding how these systems work is crucial, and it builds directly upon our earlier discussions on electromagnetic induction and AC fundamentals. Remember Faraday's Law? The principle of generating voltage through changing magnetic fields is exactly what we'll leverage here, but on a grander, more efficient scale.

Our journey today will cover how these three-phase voltages are generated, why they are so incredibly advantageous, and the two fundamental ways we connect these systems: star and delta. We'll also explore the important relationships between line and phase voltages and currents, and then, of course, we'll tackle some numerical problems to solidify our understanding. This topic is directly linked to **Course Outcome CO3: Understand three phase AC systems**, and by the end of this session, you'll have a solid grasp of the "what" and "why" of three-phase power.

---

### 1. Generation of Three-Phase Voltages: The Heartbeat of Power

Imagine the simple AC generator we might have discussed earlier, a single coil rotating in a magnetic field. This produces a single sinusoidal voltage waveform, what we call a single-phase system. Now, what if we could create not one, but *three* such voltages, all related to each other in a very specific way? That's the essence of three-phase generation.

Think of it like this: instead of one person clapping in rhythm, we have three people clapping, but their claps are slightly staggered. Each clap is a "phase."

In a three-phase AC generator, we don't just have one coil. Instead, we have **three separate coils (or windings)**, spatially displaced from each other by **120 electrical degrees**. These coils are typically placed around a stationary magnetic field (in the stator) or a rotating magnetic field (in the rotor). For simplicity and as is common in power generation, let's consider a rotating magnetic field (rotor) and stationary windings (stator).

As the rotor, with its magnetic poles, spins, it cuts across these three stator windings. Because the windings are physically spaced 120 degrees apart, the voltage induced in each winding by the rotating magnetic field will also be **120 degrees out of phase** with the voltages in the other two windings.

So, if we represent the voltage in the first winding as $v_1(t) = V_m \sin(\omega t)$, then the voltages in the other two windings will be:

*   $v_2(t) = V_m \sin(\omega t - 120^\circ)$
*   $v_3(t) = V_m \sin(\omega t - 240^\circ)$ or equivalently $v_3(t) = V_m \sin(\omega t + 120^\circ)$

Here:
*   $V_m$ is the maximum amplitude (peak voltage) of each phase.
*   $\omega$ is the angular frequency, related to the mechanical speed of rotation.
*   The $-120^\circ$ and $-240^\circ$ represent the phase difference.

This symmetrical arrangement and phase displacement are key. It's like having three synchronized waves that are "out of step" with each other. This is the fundamental principle, and it's elegantly explained in texts like **D. P. Kothari and I. J. Nagrath's "Basic Electrical Engineering"**. They emphasize how this spatial displacement directly translates to temporal (time) phase displacement in the induced voltages.

---

### 2. Advantages of Three-Phase Systems: Why So Dominant?

You might wonder, why go through the trouble of generating three separate voltages when a single one works? The advantages are substantial and are why three-phase systems are the backbone of power generation, transmission, and heavy industrial loads.

Let's consider the key benefits:

*   **More Efficient Power Transmission:** This is perhaps the most significant advantage. For the same amount of power delivered, a three-phase system requires less copper (or aluminum) for conductors compared to three separate single-phase systems carrying the same total power. This is because the currents in the three phases tend to cancel each other out to some extent, reducing the overall current flow in any return path. Think of it as sharing the load more effectively, reducing the stress on the wires. This is a crucial economic and practical consideration in long-distance power transmission.

*   **More Constant Power Delivery:** While a single-phase AC supply has power that pulsates (varying between zero and a maximum twice per cycle), a balanced three-phase supply delivers a **constant amount of power**. This is a huge advantage for rotating machinery like motors, as it leads to smoother operation and less vibration. Imagine trying to push a merry-go-round with one person pushing intermittently versus three people pushing in sequence – the three-person push results in much smoother, continuous motion. This is elaborated upon in **"Electrical Engineering Fundamentals" by Del Toro**, highlighting the constant power aspect and its impact on mechanical systems.

*   **Self-Starting Three-Phase Motors:** Three-phase induction motors are inherently self-starting. The rotating magnetic field produced by the stator windings (due to the three-phase currents) is what initiates the rotation of the rotor. Single-phase motors often require additional starting mechanisms (like capacitors) because a single pulsating field doesn't create a naturally rotating field. This simplicity and robustness make three-phase motors ideal for industrial applications.

*   **Flexibility in Voltage and Load Connections:** Three-phase systems can be configured in different ways (star and delta, which we'll discuss next) to provide different voltage levels and to handle various types of loads. You can easily derive single-phase power from a three-phase system, making it very versatile.

*   **Reduced Conductor Material for the Same Power:** As mentioned earlier, for transmitting the same amount of power, a three-phase system uses less conductor material than three separate single-phase systems. This translates to significant cost savings in infrastructure.

These are the core reasons why, whenever you see power lines or talk about industrial power, you're almost certainly dealing with a three-phase system. It’s simply more efficient and effective.

---

### 3. Star and Delta Connections (Balanced Only)

Now that we understand *why* three-phase systems are great, let's look at *how* we connect them. The three individual voltage sources (or loads) can be connected in two primary configurations: **Star (or Wye)** and **Delta (or Mesh)**. We'll focus on *balanced* systems, meaning all three phases have the same voltage, current, and impedance.

#### 3.1 Star Connection

In a star connection, one end of each of the three windings (or loads) is connected together at a common point called the **neutral point**. The other ends of the windings are connected to the three line conductors (usually labeled R, Y, B for Red, Yellow, Blue, or L1, L2, L3).

**Visualisation:** Imagine the three phases as three arms of a star, all meeting at the center (the neutral point).

```
      Line R --- Phase 1 ---*
                           |
      Line Y --- Phase 2 ---* --- Neutral Point (N)
                           |
      Line B --- Phase 3 ---*
```

The voltage across each individual winding is called the **phase voltage ($V_p$)**, and the current flowing through each winding is called the **phase current ($I_p$)**. The voltage measured between any two line conductors is called the **line voltage ($V_L$)**, and the current flowing in each line conductor is called the **line current ($I_L$)**.

#### 3.2 Delta Connection

In a delta connection, the three windings (or loads) are connected end-to-end to form a closed loop, resembling the Greek letter delta ($\Delta$). Each connection point between two windings is then connected to a line conductor.

**Visualisation:** Imagine forming a triangle with the three phases, and tapping the lines at each vertex of the triangle.

```
      Line R --- Phase 1 --- Line Y
                   / \
                  /   \
                 /     \
      Line B --- Phase 3 --- Phase 2 --- Line Y (or R, depending on connection point)
```

*(Note: The schematic for delta can be drawn in several ways to show the loop. The key is that each phase is connected between two line conductors, and there is no common neutral point unless one is created by the load itself.)*

In a delta connection, there is no inherent neutral point derived from the source windings themselves.

---

### 4. Relationships Between Line and Phase Voltages and Currents (Balanced Systems)

Understanding these relationships is absolutely crucial for calculations and is a frequent exam topic. It all stems from the 120-degree phase shift and the geometry of the connections.

#### 4.1 Star Connection Relationships

*   **Line Voltage ($V_L$) and Phase Voltage ($V_p$):**
    In a star connection, the line voltage is the phasor difference between two phase voltages. Since the phase voltages are 120 degrees apart, this phasor difference results in the line voltage being **$\sqrt{3}$ times** the phase voltage and **leading or lagging by 30 degrees**.

    Mathematically:
    $V_L = \sqrt{3} V_p$

    And the phase relationship is:
    $V_{LR} = V_{R} - V_{Y}$ (where $V_R$ and $V_Y$ are phase voltages)
    If $V_R = V_p \angle 0^\circ$, $V_Y = V_p \angle -120^\circ$, then
    $V_{LR} = V_p \angle 0^\circ - V_p \angle -120^\circ$
    $V_{LR} = V_p(1 - (\cos(-120^\circ) + j \sin(-120^\circ)))$
    $V_{LR} = V_p(1 - (-0.5 - j 0.866))$
    $V_{LR} = V_p(1.5 + j 0.866)$
    The magnitude is $V_p \sqrt{1.5^2 + 0.866^2} = V_p \sqrt{2.25 + 0.75} = V_p \sqrt{3}$.
    The angle is $\arctan(0.866/1.5) = \arctan(0.577) \approx 30^\circ$.
    So, $V_{LR} \approx \sqrt{3} V_p \angle 30^\circ$.
    If we consider $V_Y = V_p \angle 0^\circ$ and $V_B = V_p \angle -120^\circ$, then $V_{LB} = V_Y - V_B$, which will have a different phase. The key is that *any* line voltage will be $\sqrt{3}$ times the phase voltage.

*   **Line Current ($I_L$) and Phase Current ($I_p$):**
    In a star connection, the current flowing in each line conductor is the same as the current flowing through the corresponding phase winding.
    $I_L = I_p$

    This is a critical simplification. Whatever current flows into the winding flows out of the line.

#### 4.2 Delta Connection Relationships

*   **Line Current ($I_L$) and Phase Current ($I_p$):**
    In a delta connection, the line current is the phasor difference between two phase currents. Similar to the voltage relationship in a star connection, this phasor difference results in the line current being **$\sqrt{3}$ times** the phase current and **displaced by 30 degrees**.

    Mathematically:
    $I_L = \sqrt{3} I_p$

    And the phase relationship is:
    $I_{LR} = I_{RY} - I_{YB}$ (where $I_{RY}$ and $I_{YB}$ are phase currents flowing in windings RY and YB respectively).
    If $I_{RY} = I_p \angle 0^\circ$ and $I_{YB} = I_p \angle -120^\circ$, then
    $I_{LR} = I_p \angle 0^\circ - I_p \angle -120^\circ$.
    Using similar phasor mathematics as above, we find:
    $I_{LR} \approx \sqrt{3} I_p \angle 30^\circ$.

*   **Line Voltage ($V_L$) and Phase Voltage ($V_p$):**
    In a delta connection, each phase winding is directly connected across two line conductors. Therefore, the voltage across each phase winding is equal to the voltage between the corresponding line conductors.
    $V_L = V_p$

    This is another critical simplification for delta connections.

**Summary Table for Balanced Systems:**

| Parameter       | Star Connection         | Delta Connection        |
| :-------------- | :---------------------- | :---------------------- |
| Voltage         | $V_L = \sqrt{3} V_p$    | $V_L = V_p$             |
| Current         | $I_L = I_p$             | $I_L = \sqrt{3} I_p$    |
| Neutral Point   | Present (can be used)   | Not inherently present  |

**Key Takeaway for Exams:** Always remember these $\sqrt{3}$ and 30-degree phase shifts. Most problems hinge on correctly applying these formulas. The relationship between line and phase currents in delta is the inverse of the voltage relationship in star, and vice-versa. This symmetry is something to look for.

---

### 5. Power in Three-Phase Systems

The total power in a balanced three-phase system is the sum of the power in each phase.

*   **For Star Connection:**
    Total Power ($P$) = $3 \times V_p \times I_p \times \cos(\phi)$, where $\cos(\phi)$ is the power factor.
    Since $V_p = V_L / \sqrt{3}$ and $I_p = I_L$, we can rewrite this as:
    $P = 3 \times \frac{V_L}{\sqrt{3}} \times I_L \times \cos(\phi)$
    $P = \sqrt{3} V_L I_L \cos(\phi)$

*   **For Delta Connection:**
    Total Power ($P$) = $3 \times V_p \times I_p \times \cos(\phi)$.
    Since $V_p = V_L$ and $I_p = I_L / \sqrt{3}$, we can rewrite this as:
    $P = 3 \times V_L \times \frac{I_L}{\sqrt{3}} \times \cos(\phi)$
    $P = \sqrt{3} V_L I_L \cos(\phi)$

Notice that the formula for total power is the same for both balanced star and delta connections: **$P = \sqrt{3} V_L I_L \cos(\phi)$**. This is a very important and useful formula.

Similarly, apparent power ($S$) is $S = \sqrt{3} V_L I_L$, and reactive power ($Q$) is $Q = \sqrt{3} V_L I_L \sin(\phi)$.

---

### 6. Numerical Problems

Let's put these concepts into practice with some examples. These are the types of questions that often appear on exams, so pay close attention to the setup and application of the formulas.

**Problem 1: Balanced Star Connected Load**

A balanced three-phase star-connected load has a phase impedance of $Z_p = (8 + j6) \ \Omega$. The line voltage is $400 \ V$. Calculate:
(a) Phase voltage
(b) Phase current
(c) Line current
(d) Total power consumed if the supply frequency is 50 Hz.

**Solution:**

Given: $V_L = 400 \ V$, $Z_p = (8 + j6) \ \Omega$.

(a) **Phase Voltage ($V_p$)**: For a star connection, $V_L = \sqrt{3} V_p$.
    $V_p = \frac{V_L}{\sqrt{3}} = \frac{400}{\sqrt{3}} \approx 230.94 \ V$.

(b) **Phase Current ($I_p$)**: Using Ohm's Law for the phase impedance. First, find the magnitude of the phase impedance:
    $|Z_p| = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10 \ \Omega$.
    The angle of the impedance is $\phi = \arctan(\frac{6}{8}) = \arctan(0.75) \approx 36.87^\circ$.
    So, $Z_p = 10 \angle 36.87^\circ \ \Omega$.

    $I_p = \frac{V_p}{|Z_p|} = \frac{230.94}{10} \approx 23.09 \ A$.
    *(Note: If phase voltage is taken as $230.94 \angle 0^\circ$, then phase current would be $23.09 \angle -36.87^\circ$ A)*.

(c) **Line Current ($I_L$)**: For a star connection, $I_L = I_p$.
    $I_L \approx 23.09 \ A$.

(d) **Total Power Consumed ($P$)**: We can use the formula $P = \sqrt{3} V_L I_L \cos(\phi)$.
    Here, $\cos(\phi)$ is the power factor of the load, which is the cosine of the impedance angle.
    $\cos(\phi) = \cos(36.87^\circ) \approx 0.8$ (lagging, since the impedance is inductive).

    $P = \sqrt{3} \times 400 \ V \times 23.09 \ A \times 0.8$
    $P \approx 1.732 \times 400 \times 23.09 \times 0.8$
    $P \approx 12865.5 \ W$ or $12.87 \ kW$.

    Alternatively, using $P = 3 \times V_p \times I_p \times \cos(\phi)$:
    $P = 3 \times 230.94 \ V \times 23.09 \ A \times 0.8 \approx 12865.5 \ W$. Both yield the same result.

---

**Problem 2: Balanced Delta Connected Load**

A balanced three-phase delta-connected load has a phase impedance of $Z_p = (10 + j0) \ \Omega$ (a purely resistive load). The line voltage is $440 \ V$. Calculate:
(a) Phase voltage
(b) Phase current
(c) Line current
(d) Total power consumed.

**Solution:**

Given: $V_L = 440 \ V$, $Z_p = 10 \ \Omega$ (purely resistive).

(a) **Phase Voltage ($V_p$)**: For a delta connection, $V_L = V_p$.
    $V_p = 440 \ V$.

(b) **Phase Current ($I_p$)**: Using Ohm's Law for the phase impedance.
    $|Z_p| = 10 \ \Omega$. The angle is $0^\circ$ since it's resistive.
    $I_p = \frac{V_p}{|Z_p|} = \frac{440}{10} = 44 \ A$.
    *(The phase current is $44 \angle 0^\circ$ A if phase voltage is $440 \angle 0^\circ$ V)*.

(c) **Line Current ($I_L$)**: For a delta connection, $I_L = \sqrt{3} I_p$.
    $I_L = \sqrt{3} \times 44 \ A \approx 1.732 \times 44 \approx 76.21 \ A$.

(d) **Total Power Consumed ($P$)**: We use $P = \sqrt{3} V_L I_L \cos(\phi)$.
    Since the load is purely resistive, the power factor $\cos(\phi) = \cos(0^\circ) = 1$.
    $P = \sqrt{3} \times 440 \ V \times 76.21 \ A \times 1$
    $P \approx 1.732 \times 440 \times 76.21$
    $P \approx 58080 \ W$ or $58.08 \ kW$.

    Alternatively, using $P = 3 \times V_p \times I_p \times \cos(\phi)$:
    $P = 3 \times 440 \ V \times 44 \ A \times 1 = 58080 \ W$. Both are consistent.

---

**Problem 3: Connecting a Load**

A single-phase load of $10 \ kW$ at $0.8$ lagging power factor is to be connected to a $400 \ V$ three-phase supply. What should be the impedance of a purely resistive load if connected in:
(a) Star
(b) Delta

**Solution:**

First, we need to find the line current if this single-phase load were connected to a single phase of the three-phase system.
Given: $P_{load} = 10 \ kW = 10000 \ W$, $V_{line} = 400 \ V$, $\cos(\phi) = 0.8$ (lagging).

Let's assume the $10 \ kW$ load is connected between one line and neutral (if neutral were available) or across two lines. For simplicity in this problem, let's assume it's a balanced load where we need to find the equivalent impedance per phase for the overall three-phase system to draw $10 \ kW$ total.

Total power $P = \sqrt{3} V_L I_L \cos(\phi)$.
$10000 = \sqrt{3} \times 400 \times I_L \times 0.8$
$I_L = \frac{10000}{\sqrt{3} \times 400 \times 0.8} = \frac{10000}{554.26} \approx 18.04 \ A$.

Now we need to find the per-phase impedance.

(a) **Star Connection**:
In a star connection, $I_L = I_p$, and $V_p = V_L / \sqrt{3}$.
$V_p = 400 / \sqrt{3} \approx 230.94 \ V$.
$I_p = I_L \approx 18.04 \ A$.
Since the load is purely resistive, the impedance angle $\phi = 0^\circ$.
$Z_p = \frac{V_p}{I_p} = \frac{230.94 \ V}{18.04 \ A} \approx 12.8 \ \Omega$.
So, the phase impedance $Z_p = 12.8 \ \Omega$ (purely resistive).

(b) **Delta Connection**:
In a delta connection, $V_L = V_p$, and $I_L = \sqrt{3} I_p$.
$V_p = V_L = 400 \ V$.
$I_p = I_L / \sqrt{3} = 18.04 / \sqrt{3} \approx 10.41 \ A$.
Since the load is purely resistive, the impedance angle $\phi = 0^\circ$.
$Z_p = \frac{V_p}{I_p} = \frac{400 \ V}{10.41 \ A} \approx 38.42 \ \Omega$.
So, the phase impedance $Z_p = 38.42 \ \Omega$ (purely resistive).

**Common Pitfall:** When asked about connecting a single-phase load to a three-phase system, sometimes it implies connecting the load across *one* phase and neutral, or across two lines. However, the phrasing "balanced three-phase supply" and asking for impedance in star/delta suggests we are designing a *balanced three-phase load* that draws the specified total power. This is how we've approached it. Always clarify the exact load connection if unsure.

---

### Conclusion and Recall

We've covered the generation, advantages, and connection methods of three-phase AC systems. Remember these key points:

*   Three-phase voltages are generated by spatially displacing windings by 120 electrical degrees.
*   Three-phase systems offer significant advantages in power transmission efficiency, constant power delivery, and motor starting.
*   The two primary balanced connections are Star and Delta.
*   **In Star:** $V_L = \sqrt{3} V_p$, $I_L = I_p$.
*   **In Delta:** $V_L = V_p$, $I_L = \sqrt{3} I_p$.
*   The total power formula is universally **$P = \sqrt{3} V_L I_L \cos(\phi)$** for balanced systems.

Mastering these relationships and formulas will equip you to solve a wide range of problems. This knowledge forms the basis for understanding power systems and is a direct link to **CO3**.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain why three-phase motors are generally self-starting, while single-phase motors often require additional starting mechanisms.
**Answer:** Three-phase AC currents flowing through spatially displaced stator windings create a **rotating magnetic field (RMF)**. This RMF naturally induces currents in the rotor and interacts with it to produce torque, causing the rotor to spin. A single-phase AC current, on the other hand, produces a pulsating magnetic field, not a rotating one. This pulsating field does not inherently create a starting torque, hence the need for auxiliary starting methods (like capacitor start or shaded pole designs) in single-phase motors. This relates to the advantage of three-phase systems.

**Question 2 (Numerical):** A balanced star-connected load draws $10 \ A$ line current when connected to a $400 \ V$ three-phase supply. The load has a power factor of $0.85$ lagging. Calculate the phase voltage, phase current, and total power consumed.
**Answer:**
Given: $I_L = 10 \ A$, $V_L = 400 \ V$, $\cos(\phi) = 0.85$.
*   **Phase Voltage ($V_p$)**: For star connection, $V_p = V_L / \sqrt{3} = 400 / \sqrt{3} \approx 230.94 \ V$.
*   **Phase Current ($I_p$)**: For star connection, $I_p = I_L = 10 \ A$.
*   **Total Power ($P$)**: $P = \sqrt{3} V_L I_L \cos(\phi) = \sqrt{3} \times 400 \times 10 \times 0.85 = 5887.45 \ W$ or $5.89 \ kW$.
This directly tests understanding of star connection relationships and the power formula.

**Question 3 (Numerical):** A $415 \ V$ three-phase supply is connected to a balanced delta-connected load with a phase impedance of $30 \ \Omega$ resistance in series with $40 \ \Omega$ inductive reactance. Calculate the line current and the total power.
**Answer:**
Given: $V_L = 415 \ V$, $Z_p = 30 + j40 \ \Omega$.
*   **Phase Voltage ($V_p$)**: For delta connection, $V_p = V_L = 415 \ V$.
*   **Phase Impedance Magnitude**: $|Z_p| = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50 \ \Omega$.
*   **Phase Power Factor**: $\cos(\phi) = \frac{R}{|Z_p|} = \frac{30}{50} = 0.6$ (lagging).
*   **Phase Current ($I_p$)**: $I_p = V_p / |Z_p| = 415 / 50 = 8.3 \ A$.
*   **Line Current ($I_L$)**: For delta connection, $I_L = \sqrt{3} I_p = \sqrt{3} \times 8.3 \approx 14.38 \ A$.
*   **Total Power ($P$)**: $P = \sqrt{3} V_L I_L \cos(\phi) = \sqrt{3} \times 415 \times 14.38 \times 0.6 \approx 6134.8 \ W$ or $6.13 \ kW$.
This question tests the delta connection relationships, impedance calculation, and power calculation.

---
These notes should provide a solid foundation for understanding three-phase AC systems. Keep practicing the numerical problems, as they are excellent for reinforcing the concepts. Good luck!
