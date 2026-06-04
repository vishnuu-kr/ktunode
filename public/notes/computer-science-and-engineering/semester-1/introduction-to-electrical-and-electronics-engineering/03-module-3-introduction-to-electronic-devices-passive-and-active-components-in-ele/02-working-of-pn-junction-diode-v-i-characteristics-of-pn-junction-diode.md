---
title: "Working of PN junction diode, V-I characteristics of PN Junction diode"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Electronic devices: Passive and active components in electronics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c72"
status: "completed"
scrapedAt: "2026-05-20T16:39:11.423Z"
---
## Module 3: Introduction to Electronic Devices - Passive and Active Components in Electronics

### Topic: Working of PN Junction Diode and its V-I Characteristics

**(Course Outcome Alignment: CO4 - Explain the fundamental concepts of electronic components and devices)**

Hello everyone, and welcome back! Today, we're diving into one of the most fundamental building blocks of modern electronics: the **PN Junction Diode**. Understanding this little device is crucial because it's the gateway to a whole world of electronic circuits, from simple rectifiers to complex integrated circuits. Think of it as the basic "on-off" switch for electricity, but with a bit more finesse!

We've talked about passive components like resistors, capacitors, and inductors, which store or dissipate energy. Now, we're moving to **active components**, which can amplify or control the flow of electricity. The PN junction diode is our first foray into this exciting territory.

#### What Exactly is a PN Junction Diode?

At its core, a PN junction diode is formed by joining two types of semiconductor materials: one that's been treated to have an excess of free electrons (an **n-type** semiconductor) and another that's been treated to have a deficiency of electrons, meaning it has more "holes" (an **p-type** semiconductor). Imagine you have a box of red marbles (electrons) and another box of empty spaces where marbles should be (holes). When you bring these two materials together, something magical happens at the boundary, the **PN junction**.

##### The Magic at the PN Junction: The Depletion Region

When we bring the n-type and p-type materials together, the free electrons from the n-side, being abundant and mobile, tend to diffuse across the junction into the p-side where there are fewer electrons. Similarly, the holes from the p-side, which are essentially positive charge carriers, diffuse across the junction into the n-side where they are scarce.

Now, here's the key: when an electron diffuses from the n-side to the p-side, it leaves behind a positively charged "donor" ion in the n-material. And when a hole diffuses from the p-side to the n-side, it leaves behind a negatively charged "acceptor" ion in the p-material. These ions are fixed; they can't move.

So, what happens is that right at the junction, we get a region where the mobile charge carriers (electrons and holes) have "canceled each other out" or moved away. This region is called the **depletion region** or **space charge region**. It's depleted of free mobile charge carriers and is instead filled with these immobile, charged ions.

This depletion region creates an **internal electric field** across the junction, with the positive ions on the n-side and negative ions on the p-side. This electric field acts like a barrier, opposing further diffusion of electrons from the n-side to the p-side and holes from the p-side to the n-side. Eventually, an equilibrium is reached where the diffusion force is balanced by this internal electric field.

This internal electric field is incredibly important. It dictates how the diode behaves when we apply an external voltage.

#### Applying External Voltage: Forward Bias and Reverse Bias

This is where we start to see the diode's directional behavior. We can apply an external voltage in two primary ways:

1.  **Forward Bias:**
    Think of this as "helping" the flow of current. In forward bias, we connect the positive terminal of a voltage source to the p-type material (the anode) and the negative terminal to the n-type material (the cathode).
    What happens? The applied positive voltage pushes the holes in the p-side towards the junction, and the applied negative voltage pushes the electrons in the n-side towards the junction. This "shrinks" the depletion region. If the applied voltage is large enough to overcome the internal barrier potential (known as the **barrier potential** or **knee voltage**, which is around 0.7V for silicon and 0.3V for germanium), then majority carriers can easily cross the junction, and a significant current flows. It’s like opening a gate wider to let a crowd through.

2.  **Reverse Bias:**
    This is like "blocking" the flow of current. In reverse bias, we connect the negative terminal of the voltage source to the p-type material (anode) and the positive terminal to the n-type material (cathode).
    Now, the applied negative voltage pulls the holes in the p-side away from the junction, and the applied positive voltage pulls the electrons in the n-side away from the junction. This *widens* the depletion region, making the barrier even stronger. Ideally, very little current flows in this condition because the majority carriers are blocked. It's like closing the gate tightly.

    However, there's a small current that *does* flow in reverse bias, called the **reverse saturation current**. This current is due to the few **minority carriers** (electrons in the p-side and holes in the n-side) that are present. These minority carriers are swept across the junction by the electric field. This current is typically very small (in microamperes or nanoamperes) and is relatively independent of the applied reverse voltage until breakdown.

#### The V-I Characteristics of a PN Junction Diode

This is a graphical representation of how the diode behaves with applied voltage and the resulting current. It’s like charting the relationship between how hard you push a door open and how much the door actually opens.

We plot **Voltage (V)** on the horizontal axis and **Current (I)** on the vertical axis.

**(Imagine a graph here, with voltage on the x-axis and current on the y-axis)**

Let’s break down the characteristic curve into its different regions:

**1. Forward Bias Region:**

*   **Zero Voltage:** When no voltage is applied, there's no external current (except for that tiny reverse saturation current which is negligible here).
*   **Low Forward Voltage (below Knee Voltage):** As we start applying a small forward voltage (e.g., 0.1V, 0.2V), the depletion region shrinks slightly, but it's still too wide to allow significant charge carrier flow. So, the forward current is very, very small, almost negligible. It's like pushing a heavy door with very little force – it doesn't move much.
*   **Knee Voltage (Cut-in Voltage) (Vγ):** This is the point where the applied voltage is just enough to overcome the barrier potential. For silicon diodes, this is around 0.7V, and for germanium diodes, it's around 0.3V. Once the voltage reaches this level, the depletion region becomes very thin, allowing majority carriers to cross the junction easily.
*   **Beyond Knee Voltage:** Once we exceed the knee voltage, even a small increase in forward voltage causes a dramatic increase in forward current. The diode starts conducting heavily. This is where our door suddenly swings open wide with just a little more push. This region is characterized by an exponential rise in current with voltage.
    *   **Key takeaway for exams:** The forward voltage drop across a conducting diode is approximately constant (around 0.7V for Si, 0.3V for Ge). This is a very important practical point in circuit analysis.

**2. Reverse Bias Region:**

*   **Applying Reverse Voltage:** When we apply a reverse voltage, the depletion region widens, and the majority carriers are pulled away from the junction.
*   **Reverse Saturation Current (I_s):** As we discussed, only minority carriers can cross the junction. These are very few, so the reverse current is tiny, typically in the microampere (µA) or nanoampere (nA) range. This current remains almost constant regardless of the applied reverse voltage. It’s like a tiny trickle of water that can’t be stopped easily by a wall, but it’s still a trickle.
*   **Breakdown Region:** If we keep increasing the reverse voltage, eventually, we reach a point called the **breakdown voltage (V_BR)**. At this voltage, something significant happens. There are two main mechanisms for breakdown:
    *   **Zener Breakdown:** This occurs in heavily doped diodes. The strong electric field across the narrow depletion region becomes so intense that it directly pulls electrons out of their covalent bonds.
    *   **Avalanche Breakdown:** This occurs in lightly doped diodes. A few initial minority carriers, accelerated by the strong electric field, collide with atoms in the semiconductor lattice, creating more electron-hole pairs. These new carriers are also accelerated and cause further collisions, leading to a rapid multiplication of carriers – an "avalanche" effect.
    When breakdown occurs, the reverse current increases very sharply and can potentially damage the diode if not limited by an external resistor. It’s like pushing a door so hard it breaks off its hinges.
    *   **Key takeaway for exams:** Breakdown voltage is a critical parameter. Diodes designed to operate in the breakdown region are called **Zener diodes**, and they are used for voltage regulation.

#### Symbol and Terminology

*   **Diode Symbol:** The symbol for a diode clearly shows its polarity. The arrow points in the direction of conventional current flow (from p-type to n-type).
    (Draw a simple diode symbol: a triangle with a line across its tip).
    The flat end of the symbol is the **cathode** (n-type), and the pointy end (where the arrow originates) is the **anode** (p-type).
*   **Forward Voltage Drop (V_F):** The voltage across the diode when it is forward biased and conducting.
*   **Reverse Saturation Current (I_R or I_s):** The small leakage current that flows in reverse bias.
*   **Breakdown Voltage (V_BR):** The reverse voltage at which rapid current increase occurs.

#### Practical Examples and Analogies

*   **Analogy for Forward Bias:** Imagine a one-way street. In forward bias, the street is open, and cars (electrons and holes) can flow freely in the intended direction. The knee voltage is like the toll booth that needs to be cleared before the highway opens up.
*   **Analogy for Reverse Bias:** The street is now blocked by a barrier. Very few cars might accidentally sneak through, but the main flow is stopped.
*   **Real-world application:** A diode acts like a check valve in a water pipe, allowing water to flow in only one direction. In electronics, this is fundamental for converting AC to DC in rectifiers. Think of your phone charger – it has diodes to make sure the AC power from the wall is converted to the DC power your phone needs.

#### Linking to Course Outcomes

This topic directly addresses **CO4: Explain the fundamental concepts of electronic components and devices**. The PN junction diode is a prime example of an electronic device. Understanding its internal structure (PN junction, depletion region) and its external behavior (forward/reverse bias, V-I characteristics) is essential for grasping how more complex electronic circuits function. This knowledge also lays the groundwork for understanding how semiconductors enable the "electronics" part of our field.

#### Summary – Key Points to Remember!

*   A PN junction diode is formed by joining p-type and n-type semiconductors.
*   At the junction, a depletion region with an internal electric field forms.
*   **Forward Bias:** Connect positive to p-side, negative to n-side. Shrinks depletion region, allows current flow when voltage > knee voltage (0.7V for Si).
*   **Reverse Bias:** Connect negative to p-side, positive to n-side. Widens depletion region, blocks current flow (except small reverse saturation current) until breakdown voltage is reached.
*   The V-I characteristic shows a sharp increase in current after the knee voltage in forward bias and a very small current in reverse bias until breakdown.
*   Breakdown occurs due to Zener or Avalanche effects.

Understanding these characteristics is fundamental for analyzing circuits containing diodes, which are everywhere in electronics!

---

### Sample Questions with Answers

**Q1. What is the approximate knee voltage for a silicon PN junction diode?**

**Answer:** The approximate knee voltage (or cut-in voltage) for a silicon PN junction diode is **0.7 Volts**. This is the minimum forward voltage required for the diode to start conducting significant current.

**Q2. Describe the behavior of a PN junction diode when it is reverse-biased.**

**Answer:** When a PN junction diode is reverse-biased, the positive terminal of the voltage source is connected to the n-type material (cathode), and the negative terminal is connected to the p-type material (anode). This applied voltage pulls the majority charge carriers (electrons in n-type, holes in p-type) away from the junction, causing the depletion region to widen. As a result, the internal electric field strengthens, effectively blocking the flow of majority carriers across the junction. Only a very small current, known as the **reverse saturation current**, flows. This current is due to the minority charge carriers and remains relatively constant with increasing reverse voltage until the breakdown voltage is reached.

**Q3. Explain why the reverse saturation current in a diode is typically very small.**

**Answer:** The reverse saturation current flows due to minority charge carriers. In an n-type semiconductor, holes are the minority carriers, and in a p-type semiconductor, electrons are the minority carriers. The concentration of minority carriers is significantly lower than that of majority carriers (typically by several orders of magnitude). When reverse bias is applied, these few minority carriers are swept across the junction by the electric field. Because their numbers are so small, the resulting current is also very small, usually in the microampere (µA) or nanoampere (nA) range.

**Q4. What happens to the depletion region when a PN junction diode is forward-biased?**

**Answer:** When a PN junction diode is forward-biased, the external voltage opposes the internal electric field across the junction. The positive terminal of the voltage source (connected to the p-side) pushes the holes towards the junction, and the negative terminal (connected to the n-side) pushes the electrons towards the junction. This results in a **shrinking** or **narrowing** of the depletion region. If the forward voltage exceeds the knee voltage, the depletion region becomes narrow enough for majority carriers to cross the junction freely, allowing significant current flow.

**Q5. If a diode has a forward voltage drop of 0.7V when conducting, and it's connected in a series circuit with a 5V battery and a 1kΩ resistor, what is the current flowing through the resistor?**

**Answer:**
Here, we can apply Ohm's Law. The total voltage available for current flow is the battery voltage minus the diode's forward voltage drop.

*   Battery Voltage ($V_{battery}$) = 5V
*   Diode Forward Voltage Drop ($V_F$) = 0.7V
*   Resistance ($R$) = 1 kΩ = 1000 Ω

The voltage across the resistor ($V_R$) is $V_{battery} - V_F$.
$V_R = 5V - 0.7V = 4.3V$

Using Ohm's Law ($I = V/R$):
Current ($I$) = $V_R / R$
$I = 4.3V / 1000Ω$
$I = 0.0043 Amperes$
$I = 4.3 mA$

So, the current flowing through the resistor is 4.3 milliamperes. This is a common type of calculation you'll encounter when working with diode circuits!
