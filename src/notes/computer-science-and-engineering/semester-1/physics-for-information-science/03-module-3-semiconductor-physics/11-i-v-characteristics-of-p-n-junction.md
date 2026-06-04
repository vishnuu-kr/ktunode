---
title: "I-V Characteristics of p-n junction"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d87"
status: "completed"
scrapedAt: "2026-05-20T16:41:41.771Z"
---
Alright class, welcome back to Physics for Information Science! Today, we're diving into a crucial topic in our Semiconductor Physics module: the **I-V Characteristics of a p-n Junction**. This is where we start to see how these fundamental semiconductor building blocks, the p-n junctions, actually *work* when we apply a voltage to them. Understanding this is absolutely key to grasping how diodes, transistors, and all the sophisticated electronic devices that underpin our information technology function.

You'll recall from our previous discussions that a p-n junction is formed by bringing together a p-type semiconductor and an n-type semiconductor. This creates a depletion region at the interface, a region devoid of free charge carriers, and an internal electric field. Now, what happens when we connect this junction to an external circuit and vary the voltage? That's precisely what the I-V characteristics will show us.

This topic directly ties into **Course Outcome 3 (CO3)**: "Apply the fundamentals of Semiconductor Physics in engineering." Because, you see, these I-V characteristics are the "fingerprint" of a diode. They tell us exactly how much current will flow for a given voltage, and this predictable behavior is what engineers exploit to design circuits. It also helps us understand **Course Outcome 4 (CO4)**: "Describe the behaviour of semiconductor materials in semiconductor devices," as we're observing the collective behavior of electrons and holes at the junction.

### The I-V Curve: A Story of Current and Voltage

The I-V characteristic is essentially a graph plotting the current ($I$) flowing through the p-n junction as a function of the applied voltage ($V$) across it. We'll be looking at three distinct regions of operation: **forward bias**, **reverse bias**, and the **zero bias** condition.

Let's break this down step-by-step, just as we would do on a whiteboard in class.

#### 1. Zero Bias Condition

When no external voltage is applied ($V=0$), the p-n junction is in its natural state. At the junction, due to the concentration gradient, majority carriers diffuse across the junction (electrons from n-side to p-side, holes from p-side to n-side). This diffusion creates the depletion region and a built-in potential barrier (often denoted as $V_{bi}$).

However, there's also a drift current due to minority carriers being swept across the junction by the internal electric field. In the zero bias state, the diffusion current and the drift current are equal in magnitude and opposite in direction. This means there is **no net current** flowing through the junction. It's like a still lake – no overall flow, even though molecules are moving around.

This initial state is the baseline from which we observe the effects of applied voltage.

#### 2. Forward Bias: Opening the Floodgates

Now, let's apply an external voltage in a way that *reduces* the potential barrier at the junction. This is called **forward bias**. To achieve forward bias, we connect the positive terminal of the voltage source to the p-type material and the negative terminal to the n-type material.

What happens? The applied positive voltage on the p-side repels the holes (majority carriers in p-type) towards the junction. Similarly, the applied negative voltage on the n-side repels the electrons (majority carriers in n-type) towards the junction. This applied external electric field opposes the internal electric field.

Think of it like pushing a door open that's already slightly ajar. The external push helps the door open further. The applied voltage effectively *lowers* the potential barrier. As the potential barrier is lowered, the diffusion of majority carriers across the junction increases dramatically.

*   **Effect on Depletion Region:** The depletion region narrows. Why? Because the applied voltage is pushing the majority carriers *towards* the junction, replenishing the ions in the depletion region and thus shrinking its width. This is a crucial point to remember!
*   **Current Flow:** With the barrier significantly reduced, a large number of majority carriers can now diffuse across the junction. This results in a substantial **forward current**. The current is primarily due to the diffusion of holes from the p-side to the n-side and electrons from the n-side to the p-side.
*   **The I-V Relationship in Forward Bias:** Initially, as we increase the forward voltage, the current increases slowly. However, once the applied voltage is large enough to overcome the built-in potential barrier (typically around 0.7V for silicon and 0.3V for germanium, values you'll see mentioned in texts like Avadhanulu et al.), the current starts to increase very rapidly, almost exponentially.

    This rapid increase is often described by the diode equation. While you don't always need to memorize the exact form for every exam, understanding the exponential nature is vital. The equation, as you might find in Beiser or Pierret, looks something like:

    $I = I_0 \left( e^{\frac{qV}{nkT}} - 1 \right)$

    Where:
    *   $I$ is the diode current.
    *   $I_0$ is the reverse saturation current (which we'll discuss next).
    *   $q$ is the electronic charge.
    *   $V$ is the applied voltage.
    *   $n$ is the ideality factor (typically between 1 and 2, a measure of how ideal the diode is).
    *   $k$ is Boltzmann's constant.
    *   $T$ is the absolute temperature.

    The $e^{\frac{qV}{nkT}}$ term is what gives us that sharp upward curve in the forward bias region. Remember this exponential dependence – it's fundamental to how diodes switch on!

*   **Practical Analogy:** Imagine a water dam. In forward bias, we're lowering the water level in the reservoir on one side, making it easier for water to flow over the dam to the other side. As we lower the water level more (increase forward voltage), a lot more water starts to flow.

#### 3. Reverse Bias: Blocking the Flow

Now, let's reverse the polarity of the applied voltage. This is **reverse bias**. Here, we connect the negative terminal of the voltage source to the p-type material and the positive terminal to the n-type material.

What does this do to the junction? The applied positive voltage on the n-side attracts the electrons (majority carriers in n-type) away from the junction. Similarly, the applied negative voltage on the p-side attracts the holes (majority carriers in p-type) away from the junction. This applied external electric field *reinforces* the internal electric field.

This is like pushing a door closed that's already slightly closed. The external push makes it harder for the door to open. The applied voltage *increases* the potential barrier.

*   **Effect on Depletion Region:** The depletion region widens. Why? Because the applied voltage is pulling the majority carriers *away* from the junction, leaving behind more uncovered ionized acceptor and donor atoms. This widening of the depletion region creates a larger barrier for majority carriers.
*   **Current Flow:** Since the potential barrier is increased and the depletion region is wider, it becomes very difficult for majority carriers to cross the junction. Therefore, the forward current (due to majority carriers) becomes negligible.

    However, there are minority carriers present. In the p-type material, there are a few free electrons, and in the n-type material, there are a few free holes. The strong electric field across the widened depletion region readily sweeps these minority carriers across the junction. Electrons from the p-side are pulled to the n-side, and holes from the n-side are pulled to the p-side.

    This movement of minority carriers constitutes a small **reverse current**, often called the **reverse saturation current** ($I_0$). This current is very small because it depends on the concentration of minority carriers, which is generally low. Crucially, this reverse current is largely *independent of the applied reverse voltage*, as long as the electric field is strong enough to sweep all available minority carriers. This is why it's called "saturation" current – the current has saturated to its maximum possible value, determined by the number of minority carriers. You'll see this represented as a nearly flat, low current in the reverse bias region of the I-V curve.

*   **The I-V Relationship in Reverse Bias:** The graph shows a very small, nearly constant current flowing in the opposite direction (conventionally negative current). This is the reverse saturation current.

    If we go back to the diode equation: $I = I_0 \left( e^{\frac{qV}{nkT}} - 1 \right)$. When $V$ is negative and large in magnitude, the exponential term $e^{\frac{qV}{nkT}}$ becomes very small (approaching zero). So, $I \approx I_0 (0 - 1) = -I_0$. This confirms our observation of a small, constant reverse current.

*   **Practical Analogy:** Continuing the dam analogy, in reverse bias, we're effectively raising the water level on both sides of the dam, making it much harder for water to flow over. Only a tiny trickle might get through (the minority carriers).

#### 4. Breakdown Region (Reverse Bias)

What happens if we keep increasing the reverse voltage? Eventually, the electric field in the depletion region becomes so strong that it can rip electrons out of their covalent bonds in the semiconductor material. This process is called **avalanche breakdown** or **Zener breakdown** (depending on the underlying mechanism, but for our purposes, we can consider them as leading to a similar effect on the I-V curve).

*   **Avalanche Breakdown:** The strong electric field accelerates minority carriers to very high kinetic energies. These high-energy carriers collide with atoms in the lattice, generating more electron-hole pairs. These newly generated carriers are also accelerated and cause further collisions, leading to a rapid multiplication of charge carriers – an avalanche effect. This results in a sudden, very large increase in reverse current.
*   **Zener Breakdown:** This occurs in heavily doped junctions where the depletion region is very narrow. The electric field is so intense that electrons can tunnel directly from the valence band on the p-side to the conduction band on the n-side, even without gaining enough energy to overcome the barrier. This tunneling also leads to a sharp increase in reverse current.

*   **Effect on I-V Curve:** In the I-V graph, this manifests as a very steep, almost vertical rise in current in the negative voltage region (the breakdown region).

*   **Importance:** While breakdown is often undesirable and can damage a device, it's harnessed in specific components like Zener diodes, which are designed to operate in the breakdown region to provide stable voltage regulation.

### Visualizing the I-V Curve

Let's sketch this out, as you would see it on an exam question.

Imagine a graph with voltage ($V$) on the horizontal axis and current ($I$) on the vertical axis.

*   **Quadrant 1 (V > 0, I > 0):** This is the **Forward Bias** region. Starting from the origin (0,0), the curve is almost flat near the origin, then it starts to rise slowly, and then, beyond a certain "knee" voltage (around 0.7V for Si), it shoots up sharply and exponentially.
*   **Quadrant 3 (V < 0, I < 0):** This is the **Reverse Bias** region. The curve stays very close to the horizontal axis (meaning $I$ is small and negative) for most negative voltages. Then, at a specific negative voltage (the breakdown voltage, $V_{BR}$), it plunges downwards very steeply, indicating a large reverse current.

This entire curve, with its distinct forward and reverse characteristics, is the hallmark of a **diode**. It's what makes it a unidirectional conductor of electricity. This understanding is directly related to **CO3** and **CO4**.

### Key Takeaways for Exams

*   **Forward Bias:** Lowers barrier, narrows depletion region, high forward current, exponential increase in current with voltage.
*   **Reverse Bias:** Increases barrier, widens depletion region, very small reverse saturation current (due to minority carriers), largely independent of voltage.
*   **Breakdown:** Sudden large increase in reverse current due to avalanche or Zener effect.
*   **Diode Equation:** Understand the exponential term ($e^{qV/nkT}$) governs forward bias behavior.
*   **Knee Voltage/Cut-in Voltage:** The voltage at which significant forward current starts to flow (e.g., ~0.7V for Si, ~0.3V for Ge).
*   **Reverse Saturation Current ($I_0$):** Very small, temperature-dependent, represents minority carrier current.

### Connecting to Textbooks

You'll find detailed explanations and derivations in all the listed textbooks.
*   **Malik and Singh** and **Avadhanulu et al.** provide excellent foundational coverage of the basics, often with clear diagrams of the junction under different biases.
*   **Beiser's** "Concepts of Modern Physics" is great for the underlying physics principles, including quantum mechanical aspects that can lead to breakdown.
*   For deeper dives into the device physics, **Pierret's** books and **Streetman and Banerjee** are considered authoritative. They go into the mathematical rigor behind the I-V characteristics.

### Sample Questions and Answers

Let's test your understanding with a couple of questions, the kind you might encounter.

**Question 1 (Conceptual):** "Explain why the depletion region narrows in forward bias and widens in reverse bias."

**Answer:**
In **forward bias**, the applied voltage opposes the internal electric field at the junction. The positive terminal on the p-side repels holes towards the junction, and the negative terminal on the n-side repels electrons towards the junction. These injected majority carriers neutralize some of the exposed immobile ions in the depletion region, effectively reducing its width.

In **reverse bias**, the applied voltage reinforces the internal electric field. The negative terminal on the p-side attracts holes away from the junction, and the positive terminal on the n-side attracts electrons away from the junction. This movement of majority carriers away from the junction leaves more uncovered immobile ions, thus widening the depletion region.

**Question 2 (Exam-Oriented):** "A silicon p-n junction diode has a reverse saturation current of $10^{-12}$ A at room temperature (300 K). Calculate the forward current when a voltage of 0.7 V is applied. Assume the ideality factor $n=1$ and $kT/q = 26$ mV."

**Answer:**
We use the diode equation: $I = I_0 \left( e^{\frac{qV}{nkT}} - 1 \right)$

Given:
*   $I_0 = 10^{-12}$ A
*   $V = 0.7$ V
*   $n = 1$
*   $kT/q = 26 \times 10^{-3}$ V

First, calculate the exponent:
$\frac{qV}{nkT} = \frac{V}{n(kT/q)} = \frac{0.7 \text{ V}}{1 \times (26 \times 10^{-3} \text{ V})} = \frac{0.7}{0.026} \approx 26.92$

Now, calculate $e^{\frac{qV}{nkT}}$:
$e^{26.92} \approx 1.08 \times 10^{11}$

Substitute into the diode equation:
$I = 10^{-12} \text{ A} \left( 1.08 \times 10^{11} - 1 \right)$

Since $1.08 \times 10^{11}$ is much larger than 1, we can approximate:
$I \approx 10^{-12} \text{ A} \times 1.08 \times 10^{11} \approx 0.108 \text{ A} = 108 \text{ mA}$

**Therefore, the forward current is approximately 108 mA.**

*   **Exam Tip:** Notice how quickly the current jumps from nanoamperes (in reverse) to milliamperes (in forward bias) once the voltage reaches the "knee." This is the power of exponential relationships!

I hope this has clarified the I-V characteristics for you. It’s a fundamental concept, and once you grasp it, many other semiconductor devices will make a lot more sense. Keep practicing, visualize the current flow, and you'll master it!
