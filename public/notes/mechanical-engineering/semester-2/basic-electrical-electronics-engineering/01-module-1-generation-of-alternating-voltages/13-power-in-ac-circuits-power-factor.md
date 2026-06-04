---
title: "Power in AC circuits – Power factor"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e83682"
status: "completed"
scrapedAt: "2026-05-20T17:41:16.645Z"
---
## Module 1: Generation of Alternating Voltages

### Topic: Power in AC Circuits – Power Factor

**(Corresponds to CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits; CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution)**

Welcome, everyone! In our journey through the fascinating world of electrical engineering, we've touched upon the generation of alternating voltages. Today, we're going to dive deep into a crucial aspect of AC circuits: **Power** and its companion, the **Power Factor**. Think of power as the "work done" by electricity, and power factor as how efficiently that work is being done. Understanding this is vital, not just for solving circuit problems, but also for appreciating how our power systems operate from generation all the way to your doorstep.

#### Understanding Power in AC Circuits: More Than Just Voltage Times Current

You're probably familiar with the basic power formula from DC circuits: $P = V \times I$. Simple enough, right? However, in AC circuits, things get a little more interesting because both voltage and current are continuously changing with time, and they might not be perfectly in sync. This leads us to different types of power that we need to understand.

Let's consider an AC circuit with a sinusoidal voltage and current.
*   **Instantaneous Power ($p(t)$):** This is the power at any given moment in time. It's simply the product of the instantaneous voltage ($v(t)$) and instantaneous current ($i(t)$).
    $p(t) = v(t) \times i(t)$
    If $v(t) = V_m \sin(\omega t)$ and $i(t) = I_m \sin(\omega t - \phi)$, then $p(t) = V_m I_m \sin(\omega t) \sin(\omega t - \phi)$. This instantaneous power fluctuates rapidly.

*   **Average Power ($P$):** This is what we usually mean when we talk about "power" in AC circuits – the average rate at which energy is delivered to the circuit. It's the power that actually does useful work, like lighting up a bulb or running a motor. This average power is what your electricity meter measures and bills you for.
    Mathematically, the average power delivered to an AC circuit over a complete cycle is given by:
    $P = V_{rms} \times I_{rms} \times \cos(\phi)$
    Here, $V_{rms}$ and $I_{rms}$ are the Root Mean Square values of voltage and current, respectively. And $\cos(\phi)$? That's our power factor, which we'll get to in just a moment.

*   **Apparent Power ($S$):** This is a bit of a conceptual term. It's the product of the RMS voltage and RMS current, regardless of their phase relationship.
    $S = V_{rms} \times I_{rms}$
    The unit for apparent power is Volt-Amperes (VA). Think of it as the "total capacity" of power that the circuit can handle if everything were perfectly aligned.

*   **Reactive Power ($Q$):** Now, this is where AC circuits get their unique character. In circuits with inductors (like motors or transformers) or capacitors (like in power factor correction systems), energy is stored and released cyclically. This energy exchange doesn't contribute to useful work, but it's essential for the operation of these components. This is reactive power.
    $Q = V_{rms} \times I_{rms} \times \sin(\phi)$
    The unit for reactive power is Volt-Amperes Reactive (VAR).

#### The Power Triangle: Visualizing Power Components

These three types of power – Average Power ($P$), Apparent Power ($S$), and Reactive Power ($Q$) – are related by a convenient visual tool called the **Power Triangle**.

Imagine a right-angled triangle where:
*   The **adjacent side** represents **Average Power ($P$)** (the real power that does work).
*   The **opposite side** represents **Reactive Power ($Q$)** (the power that oscillates back and forth).
*   The **hypotenuse** represents **Apparent Power ($S$)** (the total power supplied).

The angle between the apparent power ($S$) and the average power ($P$) is our phase angle, $\phi$. This visualization helps us understand their relationships:
*   By Pythagoras theorem: $S^2 = P^2 + Q^2$
*   And from trigonometry: $P = S \cos(\phi)$ and $Q = S \sin(\phi)$.

This is why understanding the phase difference is so critical!

#### Power Factor ($\cos(\phi)$): The Efficiency of AC Power

So, what exactly is **Power Factor (PF)**?
As we saw in the average power formula, $P = V_{rms} \times I_{rms} \times \cos(\phi)$, the $\cos(\phi)$ term essentially tells us how much of the total apparent power ($V_{rms} \times I_{rms}$) is actually contributing to real work.

**Definition:** The power factor is defined as the cosine of the phase angle ($\phi$) between the voltage and current waveforms in an AC circuit.
**PF = $\cos(\phi)$**

*   **What does a high power factor mean?** A power factor close to 1 (or 100%) means that the voltage and current are nearly in phase. Most of the power supplied is being used for useful work. This is the ideal scenario.
*   **What does a low power factor mean?** A power factor less than 1 means there's a significant phase difference between voltage and current. This indicates that a large portion of the supplied power is reactive power, which doesn't perform useful work but still requires the flow of current.

**Analogy Time!**
Let's think about a **beer mug**.
*   The **total volume of the mug** is like **Apparent Power ($S$)**. It's the total capacity.
*   The **beer itself** is like **Average Power ($P$)**. This is what you actually want and consume.
*   The **foam on top** is like **Reactive Power ($Q$)**. It takes up space in the mug, but you don't really want it.
*   The **power factor** is like the **ratio of beer to the total volume**. A good beer has lots of beer and very little foam (high PF). A poorly poured beer has lots of foam and little beer (low PF).

Just like you'd want more beer and less foam, electricity providers want consumers to have a high power factor so that the supplied power is used efficiently.

#### Why is Power Factor Important? (Connecting to CO2)

This is where the rubber meets the road, especially for our second learning outcome about power generation and distribution.

1.  **Efficient Use of Resources:** Power plants generate electricity. For a given amount of real power ($P$) delivered to consumers, a lower power factor (meaning higher reactive power $Q$) requires a larger apparent power ($S$) to be transmitted. Since $S = \sqrt{P^2 + Q^2}$, a higher $Q$ leads to a higher $S$.
    *   **Transmission Lines and Transformers:** These components are rated in terms of apparent power (kVA or MVA). If you have a low power factor, you need larger, more expensive transformers and thicker cables to carry the same amount of useful power ($P$).
    *   **Increased Losses:** Higher current means higher $I^2R$ losses in the transmission lines. Even though this current is partly reactive, it still flows and generates heat, wasting energy.

2.  **Penalties from Electricity Providers:** Utility companies often impose penalties on industrial and commercial customers who maintain a consistently low power factor. Why? Because they have to supply the larger apparent power and bear the increased losses in their infrastructure, even though the consumer isn't using the extra "oomph" efficiently. They want you to use the power cleanly and efficiently.

3.  **Voltage Regulation:** Low power factors can also lead to poor voltage regulation. The voltage drop across transmission lines and transformers is proportional to the current. Since a low power factor means higher current for the same real power, it results in a larger voltage drop, meaning the voltage at the consumer's end might be lower than intended.

#### Types of Power Factor

The power factor can be described based on the phase relationship:

*   **Leading Power Factor:** This occurs in circuits where the current **leads** the voltage. This is characteristic of circuits with a dominant capacitive load (e.g., long transmission lines, capacitor banks). For a leading PF, the phase angle $\phi$ is negative (or we consider it as $\cos(-\phi) = \cos(\phi)$).
*   **Lagging Power Factor:** This occurs in circuits where the current **lags** the voltage. This is characteristic of circuits with a dominant inductive load (e.g., motors, transformers, induction furnaces). For a lagging PF, the phase angle $\phi$ is positive.

In most industrial and commercial applications, loads tend to be inductive (motors are everywhere!), so we most commonly encounter **lagging power factors**.

#### How to Improve Power Factor (Power Factor Correction)

Since a low power factor is undesirable, we often need to improve it. The most common method is **Power Factor Correction**, particularly for lagging power factors caused by inductive loads.

How do we do this? By adding **capacitors** to the circuit.

Remember our beer mug analogy? Adding capacitors is like skimming off the foam.
*   Inductive loads (motors) consume lagging reactive power.
*   Capacitors supply leading reactive power.

By strategically placing capacitor banks in parallel with inductive loads, the capacitors can supply the reactive power needed by the inductive loads, thus reducing the amount of lagging reactive power drawn from the supply. This brings the overall phase angle closer to zero, improving the power factor.

**Example:** Consider a factory with many induction motors. These motors draw lagging reactive power. Without correction, the factory might have a power factor of, say, 0.7 lagging. If the utility company requires a power factor of 0.95, the factory might need to install capacitor banks sized to compensate for the reactive power consumed by the motors.

This is a direct application of CO1 (solving AC circuits) and CO2 (understanding power transmission efficiency). You're applying circuit principles to solve a real-world problem of efficient power utilization.

#### Quick Recap and Exam Focus

*   **Three types of power:** Real ($P$), Apparent ($S$), Reactive ($Q$). Remember their units: Watts (W), Volt-Amperes (VA), Volt-Amperes Reactive (VAR).
*   **Power Factor (PF):** $\cos(\phi)$, where $\phi$ is the phase angle between voltage and current. It's the ratio of real power to apparent power.
*   **Ideal PF is 1:** This means voltage and current are in phase, and all power is real power.
*   **Lagging PF:** Caused by inductive loads (motors). Current lags voltage.
*   **Leading PF:** Caused by capacitive loads. Current leads voltage.
*   **Why is PF important?** Efficiency of transmission, reduced losses ($I^2R$), lower utility bills, better voltage regulation. Utility companies often penalize low PF.
*   **How to improve PF:** Add capacitors (especially for lagging PF). This is called power factor correction.

**Exam Tip:** Be ready to define the different types of power, explain power factor, state its importance, and perhaps even do simple calculations involving the power triangle or power factor correction. Always remember the beer mug analogy – it's surprisingly effective!

Let's solidify this with a few examples.

---

### Sample Questions with Answers

**Q1. Define apparent power, real power, and reactive power. State their respective units.**

**Answer:**
*   **Apparent Power ($S$)**: It is the product of the RMS voltage and RMS current in an AC circuit. It represents the total power that appears to be delivered by the source. Its unit is Volt-Amperes (VA).
*   **Real Power ($P$)**: Also known as active or true power, it is the average power delivered to the circuit that performs useful work. Its unit is Watts (W). It is given by $P = V_{rms} \times I_{rms} \times \cos(\phi)$.
*   **Reactive Power ($Q$)**: It is the power that oscillates between the source and the reactive components (inductors and capacitors) of the circuit. It does not perform any useful work but is necessary for the operation of devices like motors and transformers. Its unit is Volt-Amperes Reactive (VAR). It is given by $Q = V_{rms} \times I_{rms} \times \sin(\phi)$.

**(Connects to CO1: Understanding fundamental concepts of AC circuits.)**

**Q2. What is power factor? Explain why a low power factor is undesirable for a power utility company.**

**Answer:**
Power factor (PF) is the cosine of the phase angle ($\phi$) between the voltage and current waveforms in an AC circuit ($\text{PF} = \cos(\phi)$). It represents the ratio of real power (power doing useful work) to apparent power (total power delivered).

A low power factor is undesirable for a utility company for several reasons:
*   **Increased Conductor Size:** For a given amount of real power, a low power factor means higher current is required ($S = P/\text{PF}$). This necessitates the use of thicker, more expensive conductors and larger transformers to handle the higher apparent power ($S = V_{rms} \times I_{rms}$).
*   **Higher Transmission Losses:** The $I^2R$ losses in transmission lines are proportional to the square of the current. Higher currents due to a low power factor lead to increased energy losses as heat during transmission.
*   **Reduced System Capacity:** The capacity of power generation plants and transmission infrastructure is limited by apparent power (kVA/MVA). If consumers draw power at a low power factor, a larger portion of the system's capacity is consumed by reactive power, leaving less capacity for delivering real power.
*   **Voltage Regulation Issues:** Higher currents associated with low power factors can cause larger voltage drops across lines and transformers, leading to poor voltage regulation at the consumer end.
*   **Penalties:** Utility companies often impose financial penalties on industrial and commercial customers whose power factor falls below a certain stipulated limit (e.g., 0.9 lagging).

**(Connects to CO2: Awareness on fundamentals of electric power generation, transmission, and distribution.)**

**Q3. A single-phase AC motor draws 5 kW of real power at a power factor of 0.8 lagging. Calculate the apparent power and the reactive power drawn by the motor.**

**Solution:**
Given:
Real Power, $P = 5 \text{ kW} = 5000 \text{ W}$
Power Factor, $\text{PF} = 0.8$ lagging

We know that $\text{PF} = \cos(\phi)$. So, $\cos(\phi) = 0.8$.
We can find $\sin(\phi)$ using the identity $\sin^2(\phi) + \cos^2(\phi) = 1$.
$\sin^2(\phi) = 1 - \cos^2(\phi) = 1 - (0.8)^2 = 1 - 0.64 = 0.36$
Since the power factor is lagging, $\phi$ is in the first quadrant, so $\sin(\phi)$ is positive.
$\sin(\phi) = \sqrt{0.36} = 0.6$

Now we can calculate Apparent Power ($S$):
$P = S \times \cos(\phi)$
$S = \frac{P}{\cos(\phi)} = \frac{5000 \text{ W}}{0.8} = 6250 \text{ VA}$

Next, we calculate Reactive Power ($Q$):
$Q = S \times \sin(\phi) = 6250 \text{ VA} \times 0.6 = 3750 \text{ VAR}$

Alternatively, using the power triangle $S^2 = P^2 + Q^2$:
$Q = \sqrt{S^2 - P^2} = \sqrt{(6250)^2 - (5000)^2} = \sqrt{39062500 - 25000000} = \sqrt{14062500} = 3750 \text{ VAR}$

**Answer:** The apparent power drawn by the motor is 6250 VA, and the reactive power drawn is 3750 VAR lagging.

**(Connects to CO1: Applying circuit laws to solve AC circuits.)**

**Q4. Explain the role of capacitors in power factor correction for inductive loads.**

**Answer:**
Inductive loads, such as electric motors, transformers, and induction furnaces, inherently cause the current to lag behind the voltage. This lagging current contributes to a lagging power factor. Reactive power ($Q_L$) is required by these inductive loads to establish and maintain magnetic fields.

Capacitors, on the other hand, are loads that cause the current to lead the voltage. They supply leading reactive power ($Q_C$). When capacitors are connected in parallel with inductive loads, they can supply the reactive power needed by the inductors. This reduces the amount of lagging reactive power that the overall system must draw from the source.

By selecting the appropriate capacitance value, the leading reactive power supplied by the capacitors can effectively cancel out a significant portion of the lagging reactive power drawn by the inductive loads. This brings the net reactive power closer to zero, thereby reducing the phase angle ($\phi$) between the source voltage and the total current. As a result, the power factor of the combined load (inductive load + capacitors) is improved, moving closer to unity (1). This is essentially a form of reactive power compensation.

**(Connects to CO1 and CO2: Applying circuit concepts and understanding power system efficiency.)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
