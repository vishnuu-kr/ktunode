---
title: "Working of PN junction diode, V-I characteristics of PN Junction diode"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Electronic devices:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94ae"
status: "completed"
scrapedAt: "2026-05-23T16:02:38.162Z"
---
# Module 3: Introduction to Electronic Devices - The PN Junction Diode

Welcome, everyone! In our journey through the fascinating world of electrical and electronics engineering, we've laid the groundwork with basic circuit laws and AC/DC systems. Now, we're stepping into the realm of *electronic devices*, the building blocks of all modern technology, from your smartphone to the complex systems that power our cities.

This module, "Introduction to Electronic Devices," is crucial. It's where we start understanding how semiconductor materials, when carefully engineered, can perform incredible functions. And to start, there's no better place to begin than with the **PN Junction Diode**. This unassuming little component is the grandfather of many electronic innovations, and understanding it thoroughly is key to unlocking much of what we'll learn later.

Our focus today is on two fundamental aspects: **the working of a PN junction diode** and **its characteristic V-I behavior**. By the end of this session, you should not only grasp how this device functions but also appreciate its practical implications, directly linking to **Course Outcome 4 (CO4): Describe the fundamental concepts of electronic components and devices**.

---

## Understanding Semiconductors: The Foundation of the Diode

Before we dive into the diode itself, let's quickly revisit what makes semiconductors special. Materials like silicon (Si) and germanium (Ge) are the workhorses of electronics. What's unique about them? Their conductivity lies somewhere between that of a conductor (like copper) and an insulator (like rubber).

In their pure form, these semiconductor crystals have a very regular atomic structure. Each silicon atom, for instance, has four valence electrons, which it shares with its neighbors, forming strong covalent bonds. At absolute zero temperature, all these electrons are tightly bound, and the material acts as an insulator. However, as temperature increases, some electrons gain enough thermal energy to break free from their bonds, becoming **free electrons**. This allows for a small but significant amount of current to flow.

But pure semiconductors are not very useful on their own. Their conductivity is too low for most practical applications. This is where the magic of **doping** comes in.

### Doping: Creating N-type and P-type Semiconductors

Doping is the process of intentionally introducing impurities into a pure semiconductor crystal to alter its electrical properties. Think of it like adding a tiny pinch of a special ingredient to a basic recipe to change its flavor or texture dramatically.

1.  **N-type Semiconductor:**
    When we dope silicon with an element that has **five valence electrons**, like phosphorus or arsenic, these extra electrons have nowhere to go in the silicon crystal lattice. Four of the impurity atom's valence electrons form covalent bonds with neighboring silicon atoms, but the fifth electron is weakly bound and can easily break free and become a mobile charge carrier.
    *   **Key Concept:** In an N-type semiconductor, the majority charge carriers are **electrons** (which are negatively charged, hence "N"). The impurity atoms that donate these extra electrons are called **donor impurities**.
    *   **Analogy:** Imagine a room with exactly enough chairs for everyone. Now, you add an extra chair. That extra chair is like the extra electron – it's available and not strictly needed for the basic structure.

2.  **P-type Semiconductor:**
    Conversely, if we dope silicon with an element that has **three valence electrons**, like boron or gallium, each impurity atom fits into the silicon lattice but leaves a "gap" or a missing electron in the covalent bond structure with its neighbors. This missing electron is called a **hole**. A nearby electron can jump into this hole, effectively making the hole appear to move. Holes act as positively charged charge carriers.
    *   **Key Concept:** In a P-type semiconductor, the majority charge carriers are **holes** (which behave like positive charges, hence "P"). The impurity atoms that create these holes are called **acceptor impurities**.
    *   **Analogy:** Imagine a parking lot with just enough spots for all the cars. Now, one car leaves, creating an empty spot. If another car wants to park, it can move into that empty spot, and the "empty spot" appears to have moved to where the new car parked.

This distinction between N-type and P-type semiconductors is absolutely fundamental. It's the basis for creating most semiconductor devices, including our PN junction diode.

---

## The PN Junction: Where Two Worlds Meet

Now, let's put these two types of materials together. What happens when we bring a piece of P-type semiconductor material into intimate contact with a piece of N-type semiconductor material? This is the heart of the PN junction.

When these two materials are joined, something fascinating occurs at the interface, the **PN junction**.

### The Formation of the Depletion Region and Built-in Potential

1.  **Diffusion:** Due to the concentration difference, free electrons from the N-side will diffuse across the junction into the P-side, where there are far fewer free electrons. Simultaneously, holes from the P-side will diffuse across the junction into the N-side, where there are far fewer holes.
2.  **Recombination:** When an electron from the N-side meets a hole on the P-side near the junction, they can recombine. The electron fills the hole, and both charge carriers are annihilated.
3.  **Formation of the Depletion Region:** As electrons move from N to P and holes move from P to N, they leave behind their ionized impurity atoms. On the N-side, the donor atoms that lost their free electrons become positively charged ions. On the P-side, the acceptor atoms that accepted electrons (filling holes) become negatively charged ions.
    These immobile charged ions accumulate on either side of the junction. This region, now depleted of free charge carriers (electrons and holes), is called the **depletion region** or **space-charge region**.
4.  **Built-in Electric Field and Potential:** The presence of positive ions on the N-side and negative ions on the P-side creates an electric field across the junction, directed from the positive N-side to the negative P-side. This electric field opposes further diffusion of majority carriers.
    This electric field also results in a potential difference across the junction, known as the **built-in potential** or **barrier potential** ($V_{bi}$). For silicon, this barrier potential is typically around 0.7V, and for germanium, it's about 0.3V.

So, at the PN junction, we have a barrier! This barrier prevents the unrestricted flow of charge carriers. This is precisely what makes the diode a directional device – it allows current to flow more easily in one direction than the other.

---

## Working of a PN Junction Diode: Biasing

The behavior of a PN junction diode is critically dependent on how we connect it to an external voltage source, a process called **biasing**. We can bias the diode in two primary ways: forward bias and reverse bias.

### 1. Forward Bias

When we connect the positive terminal of an external voltage source ($V$) to the P-side (anode) and the negative terminal to the N-side (cathode), the diode is said to be **forward biased**.

*   **How it works:**
    *   The applied external voltage ($V$) opposes the built-in potential ($V_{bi}$) across the junction.
    *   The external electric field is in the opposite direction to the internal electric field.
    *   This effectively reduces the width of the depletion region.
    *   If the applied voltage $V$ is greater than the built-in potential ($V_{bi}$), the barrier is overcome.
    *   Majority carriers (holes from P, electrons from N) now have enough energy to cross the junction.
    *   Electrons from the N-side are injected into the P-side, and holes from the P-side are injected into the N-side. These become minority carriers in the other region.
    *   Once they cross the junction and enter the region where they are minority carriers, they can move freely under the influence of the applied voltage and diffuse towards the contacts, constituting a significant **forward current**.
*   **Analogy:** Imagine a hill (the built-in potential barrier). When you push a ball uphill, it's hard. But if you provide a strong push from the other side (forward bias), the ball can easily roll down the other side. The stronger your push (higher applied voltage), the easier it is for the ball to cross.
*   **Key Takeaway:** In forward bias, current flows easily once the applied voltage exceeds the barrier potential.

### 2. Reverse Bias

When we connect the negative terminal of an external voltage source ($V$) to the P-side (anode) and the positive terminal to the N-side (cathode), the diode is said to be **reverse biased**.

*   **How it works:**
    *   The applied external voltage ($V$) adds to the built-in potential ($V_{bi}$) across the junction.
    *   The external electric field is in the same direction as the internal electric field.
    *   This widens the depletion region and increases the barrier height.
    *   The majority carriers (holes from P, electrons from N) are pulled away from the junction by the external field.
    *   This prevents the majority carriers from crossing the junction.
    *   However, there are still a small number of minority carriers present in both regions (due to thermal generation). These minority carriers are swept across the junction by the strong electric field.
    *   This flow of minority carriers constitutes a very small **reverse saturation current** ($I_s$), which is largely independent of the applied reverse voltage (until breakdown occurs).
*   **Analogy:** Continuing the hill analogy, in reverse bias, you're essentially making the hill even steeper. It becomes much harder for the ball (majority carriers) to get over. However, a few tiny pebbles (minority carriers) that are already near the top might still roll down the other side.
*   **Key Takeaway:** In reverse bias, very little current flows, only a tiny reverse saturation current.

---

## V-I Characteristics of a PN Junction Diode

The V-I (Voltage-Current) characteristic curve is a graphical representation of how a diode behaves under different biasing conditions. It's like the diode's "fingerprint" and is incredibly important for analyzing circuits. Let's sketch it out mentally, or better yet, imagine drawing it on a graph with voltage on the horizontal axis (V) and current on the vertical axis (I).

### The Forward Bias Region

*   **Initial State (V < 0.7V for Si):** When a small forward voltage is applied, the depletion region is only slightly reduced, and the barrier potential is not fully overcome. Only a very small forward current flows. This is often negligible.
*   **Knee Voltage/Cut-in Voltage ($V_\gamma$):** As the forward voltage increases and approaches the barrier potential (around 0.7V for silicon, 0.3V for germanium), the depletion region shrinks significantly, and the barrier is overcome. This voltage is called the **knee voltage** or **cut-in voltage**.
*   **Forward Current:** Once the applied voltage exceeds the knee voltage ($V > V_\gamma$), the depletion region is effectively eliminated for practical purposes, and a substantial forward current flows. This current increases exponentially with voltage.
    *   *Mathematical Note:* The forward current $I_F$ can be approximated by the Shockley diode equation: $I_F \approx I_s (e^{V_F / (n V_T)} - 1)$, where $I_s$ is the reverse saturation current, $V_F$ is the forward voltage, $V_T$ is the thermal voltage, and $n$ is the ideality factor. For $V_F \gg V_T$, the $-1$ term is negligible, and the current grows exponentially.
*   **Dynamic Resistance:** In the forward bias region, the diode exhibits a **dynamic resistance** or **AC resistance** ($r_d = dV/dI$). This resistance is not constant but decreases as the forward current increases. This is because the exponential rise in current means a small change in voltage produces a large change in current.
*   **Exam Tip:** Remember that the knee voltage is a key parameter. For silicon diodes, assume 0.7V unless otherwise specified, and for germanium, assume 0.3V. This is a common simplification used in many circuit analysis problems.

### The Reverse Bias Region

*   **Initial State (V < 0):** When a reverse voltage is applied, the depletion region widens, and the barrier potential increases.
*   **Reverse Saturation Current ($I_s$):** As discussed, only minority carriers can cross the junction, resulting in a very small, almost constant current called the **reverse saturation current** ($I_s$). This current is typically in the order of nanoamperes ($nA$) to microamperes ($\mu A$). It's called "saturation" because it doesn't increase significantly with the reverse voltage.
    *   *Important Point:* The reverse saturation current is highly temperature-dependent. As temperature increases, more electron-hole pairs are generated, leading to a larger $I_s$. This is a critical factor in many electronic circuits.
*   **Breakdown Region:** If the reverse voltage is increased too much, a point is reached where the electric field in the depletion region becomes extremely strong. This leads to a sudden, sharp increase in reverse current. This phenomenon is called **breakdown**. There are two main mechanisms for breakdown:
    1.  **Zener Breakdown:** Occurs in heavily doped diodes at relatively low reverse voltages. The strong electric field directly pulls electrons from their covalent bonds.
    2.  **Avalanche Breakdown:** Occurs in lightly doped diodes at higher reverse voltages. The few minority carriers are accelerated by the strong field, gain enough kinetic energy, and collide with atoms in the crystal lattice, creating more electron-hole pairs. These newly created carriers are also accelerated and cause further collisions, leading to a chain reaction or avalanche.
*   **Reverse Breakdown Voltage ($V_{BR}$):** The specific reverse voltage at which breakdown occurs is called the **reverse breakdown voltage**. Operating a diode in the breakdown region can permanently damage it unless it's specifically designed to operate there (like a Zener diode).
*   **Exam Tip:** The reverse region is characterized by a very small, nearly constant current ($I_s$). The breakdown voltage is the critical point where this current increases dramatically.

### The V-I Characteristic Curve Visualized

If we plot these characteristics, we'll see:

*   **Third Quadrant (Reverse Bias):** A thin line along the negative V-axis with a very small negative current ($I_s$), until the breakdown voltage is reached, after which the current sharply increases negatively.
*   **First Quadrant (Forward Bias):** Initially, very little current for small positive voltages. Then, around the knee voltage, the current starts to increase rapidly, exhibiting an almost exponential rise.

---

## Applications and Importance (Connecting to CO4 & CO6)

The PN junction diode, with its ability to conduct current primarily in one direction, is a fundamental component in countless electronic applications. Understanding its V-I characteristics allows us to use it effectively.

*   **Rectification:** This is perhaps the most classic application. Diodes convert AC (alternating current) to DC (direct current) by allowing current to flow only during the positive half-cycle of an AC waveform. This is the basis of power supplies for almost all electronic devices. (Relates to CO4)
*   **Switching:** In digital circuits, a diode can act as a fast switch. When forward biased, it conducts (ON state); when reverse biased, it blocks current (OFF state). (Relates to CO4)
*   **Signal Demodulation:** Diodes are used in radio receivers to extract the audio signal from a modulated radio wave. (Relates to CO5 & CO6)
*   **Voltage Regulation (Zener Diodes):** While a standard diode breaks down destructively, Zener diodes are specifically designed to operate reliably in the reverse breakdown region. They maintain a constant voltage across themselves once breakdown is reached, making them excellent voltage regulators. (Relates to CO4 & CO6)
*   **Protection Circuits:** Diodes can protect sensitive electronic components from voltage spikes or reverse polarity connections. (Relates to CO6)

The PN junction diode is more than just a component; it's a demonstration of how manipulating the properties of materials at an atomic level can lead to devices with sophisticated behavior, forming the bedrock of modern electronics and enabling many of the "smart" technologies we encounter daily.

---

## Summary and Key Takeaways

Let's quickly recap what we've covered. This is important for your understanding and for tackling exam questions:

*   **Semiconductors:** Pure silicon/germanium are doped to create N-type (excess electrons) and P-type (excess holes) materials.
*   **PN Junction:** Joining P and N materials creates a depletion region and a built-in potential barrier, which is the core of diode operation.
*   **Forward Bias:** Applying voltage with positive to P and negative to N. Reduces the barrier, allows significant current flow once the knee voltage (0.7V for Si) is exceeded.
*   **Reverse Bias:** Applying voltage with negative to P and positive to N. Increases the barrier, severely restricts current flow to a small reverse saturation current ($I_s$).
*   **V-I Characteristics:** The graphical plot showing these behaviors. Key features are the knee voltage in forward bias and the reverse saturation current and breakdown voltage in reverse bias.
*   **Applications:** Rectification, switching, signal demodulation, voltage regulation, and protection circuits all rely on the diode's unique directional conductivity.

Understanding the PN junction diode is like learning the alphabet before reading a book. It’s foundational. Keep these concepts clear, and you’ll find the rest of your electronics journey much smoother!

---

## Sample Questions with Answers

Let's test our understanding with a few questions, similar to what you might encounter.

**Q1. What are the majority charge carriers in an N-type semiconductor?**
**Answer:** The majority charge carriers in an N-type semiconductor are **electrons**. This is because the doping impurity (donor) has more valence electrons than silicon, and these extra electrons are free to move.

**Q2. Explain why a depletion region forms at a PN junction.**
**Answer:** A depletion region forms due to the diffusion of majority charge carriers across the junction. Electrons from the N-side diffuse into the P-side, and holes from the P-side diffuse into the N-side. When these carriers meet, they recombine. This leaves behind fixed, ionized donor atoms (positive charge) on the N-side and fixed, ionized acceptor atoms (negative charge) on the P-side, creating a region devoid of free mobile charge carriers – the depletion region.

**Q3. A silicon PN junction diode is forward biased with a voltage of 0.6V. Will a significant current flow? Explain why or why not.**
**Answer:** No, a significant current will likely not flow. For a silicon diode, the knee voltage (or cut-in voltage) is approximately 0.7V. The applied forward bias of 0.6V is below this threshold. Therefore, the potential barrier at the junction is not sufficiently overcome to allow a large flow of majority charge carriers. Only a very small leakage current would be present.

**Q4. Describe the behavior of a PN junction diode when subjected to reverse bias. What is the typical magnitude of the current that flows?**
**Answer:** When a PN junction diode is reverse biased, the applied voltage opposes the built-in potential, widening the depletion region and increasing the potential barrier. This prevents the flow of majority charge carriers across the junction. However, a small number of minority charge carriers are present in both regions, and these are swept across the junction by the strong electric field. This flow constitutes the reverse saturation current ($I_s$). The typical magnitude of this current is very small, usually in the range of **nanoamperes (nA) to microamperes ($\mu$A)**.

**Q5. What are the two primary mechanisms responsible for breakdown in a reverse-biased diode?**
**Answer:** The two primary mechanisms for breakdown in a reverse-biased diode are:
1.  **Zener Breakdown:** Occurs in heavily doped diodes where the strong electric field directly pulls electrons from covalent bonds.
2.  **Avalanche Breakdown:** Occurs in lightly doped diodes where accelerated minority carriers collide with lattice atoms, creating more carriers in a chain reaction.

**Q6. Relate the operation of a PN junction diode to Course Outcome 4 (CO4).**
**Answer:** Course Outcome 4 states: "Describe the fundamental concepts of electronic components and devices." The PN junction diode is a fundamental electronic device. Its working principle, based on the behavior of charge carriers (electrons and holes) under different biasing conditions (forward and reverse bias), and its characteristic V-I curve are core concepts that directly address CO4. Understanding how the diode allows current flow in one direction and blocks it in the other, due to the creation and manipulation of the depletion region, is a key descriptor of this electronic component.

---

Keep reviewing these notes and the V-I curves. Practice sketching them from memory! It will serve you extremely well.
