---
title: "Energy band diagram of p-n junction - Qualitative description of charge flow across a p-n junction - Forward and reverse biased p-n junctions"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f955d"
status: "completed"
scrapedAt: "2026-05-23T16:03:40.999Z"
---
# Physics for Electrical Science: Module 1 - Semiconductor Physics

## Topic: Energy Band Diagram of a p-n Junction and Charge Flow

Welcome, everyone, to our exploration of semiconductor physics! In this crucial module, we're going to build a foundational understanding of how semiconductor devices, the very heart of modern electronics, actually work. Today, we're diving into one of the most fundamental building blocks: the **p-n junction**. Understanding this junction is key to understanding diodes, transistors, and virtually every other semiconductor device you'll encounter.

Our learning objectives for today are to grasp the **energy band diagram of a p-n junction**, understand the **qualitative description of charge flow** across it, and crucially, analyze what happens when we apply external voltages – the **forward and reverse biased p-n junctions**. These concepts directly tie into **Course Outcome 1 (CO1): Explain the fundamentals of Semiconductor Physics** and **Course Outcome 2 (CO2): Describe the behaviour of semiconductor materials in semiconductor devices**.

Think about it: without understanding the p-n junction, we can't explain how a simple LED lights up or how a transistor switches a signal. That's the power of what we're about to learn!

### 1. The p-n Junction: Bringing P and N Together

Before we even talk about the junction, let's quickly recap what we mean by p-type and n-type semiconductors.

*   **n-type semiconductor:** We dope intrinsic silicon or germanium with pentavalent impurities (like Phosphorus or Arsenic). These impurities have five valence electrons. Four bond with silicon atoms, but the fifth is loosely bound and easily becomes a free electron. So, in n-type materials, **electrons** are the majority charge carriers, and they contribute to electrical conductivity. Think of these as the "negative" carriers.
*   **p-type semiconductor:** Here, we dope with trivalent impurities (like Boron or Gallium). These have only three valence electrons. They form bonds with silicon, but there's a "missing" electron in one of the covalent bonds. This missing electron is called a **hole**, and it behaves like a positive charge. Holes are the majority charge carriers in p-type materials. Think of these as the "positive" carriers.

Now, what happens when we bring a piece of p-type semiconductor into intimate contact with a piece of n-type semiconductor? This intimate contact, achieved through fabrication processes, is what we call a **p-n junction**.

### 2. The Formation of the Depletion Region and Built-in Potential

When the p-type and n-type materials are brought together, something fascinating happens at the interface.

*   **Diffusion:** Due to the concentration gradient, majority carriers from each side start to diffuse across the junction. Electrons from the n-side (where they are abundant) diffuse into the p-side (where they are scarce). Similarly, holes from the p-side diffuse into the n-side.
*   **Recombination:** As these diffusing electrons meet holes in the p-region, they recombine. Likewise, holes diffusing into the n-region recombine with the few free electrons there.
*   **Creation of Ions:** When an electron diffuses from the n-side, it leaves behind a positively charged donor atom (which has lost its free electron). Similarly, when a hole diffuses from the p-side, it leaves behind a negatively charged acceptor atom (which has gained an electron to fill the hole).
*   **The Depletion Region:** This process of diffusion and recombination doesn't continue indefinitely. As electrons leave the n-side, a region near the junction on the n-side becomes depleted of free electrons, but positively charged (due to the exposed donor ions). Similarly, as holes leave the p-side, a region near the junction on the p-side becomes depleted of holes, but negatively charged (due to the exposed acceptor ions). This region, devoid of mobile charge carriers, is called the **depletion region** or **space charge region**.

Imagine it like two groups of people, one with lots of bread (electrons) and the other with lots of butter (holes). If they come together, some bread will naturally move to the butter side, and some butter will move to the bread side. Where the bread and butter meet, they get used up (recombine), leaving behind empty plates (ions) on each side. This empty zone is our depletion region.

*   **Built-in Potential (V<sub>bi</sub>):** The accumulation of positive charges on the n-side and negative charges on the p-side within the depletion region creates an **electric field** pointing from the n-side to the p-side. This electric field opposes further diffusion of majority carriers. This electric field also establishes a potential difference across the depletion region, known as the **built-in potential** or **barrier potential (V<sub>bi</sub>)**. This potential barrier prevents further net movement of charge carriers across the junction.

### 3. Energy Band Diagram of an Unbiased p-n Junction

Now, let's visualize this using the **energy band diagram**. This diagram plots the energy of electrons against their position. Remember that in semiconductors, we have the valence band (where electrons are bound to atoms) and the conduction band (where electrons are free to move and conduct electricity). The energy gap (E<sub>g</sub>) separates these two bands.

*   **Fermilevel (Fermi Energy, E<sub>F</sub>):** At absolute zero temperature, the Fermi level represents the highest energy level occupied by electrons. In thermal equilibrium, the Fermi level must be constant throughout the system.

When we join a p-type and an n-type semiconductor, to achieve equilibrium (i.e., constant Fermi level across the junction), the energy bands must bend.

*   **In the n-type material:** The conduction band is relatively lower in energy, and the Fermi level is closer to the conduction band.
*   **In the p-type material:** The valence band is relatively higher in energy, and the Fermi level is closer to the valence band.

When joined, the Fermi levels align. This alignment causes the conduction band of the n-type material to bend *downwards* as it approaches the junction, and the valence band of the p-type material to bend *upwards*.

**Key Features of the Unbiased p-n Junction Energy Band Diagram:**

1.  **Fermi Level is constant:** The most critical point is that the Fermi level (E<sub>F</sub>) is a horizontal line across the entire diagram, indicating thermal equilibrium.
2.  **Bending of Bands:** The conduction band and valence band edges of the n-type material bend downwards towards the junction, while those of the p-type material bend upwards.
3.  **Depletion Region:** The region where the bands are bent corresponds to the depletion region. The energy difference between the conduction band and the Fermi level (or valence band and Fermi level) is larger in the depletion region compared to the bulk material.
4.  **Built-in Potential Barrier:** The energy difference between the conduction band edge on the n-side and the conduction band edge on the p-side (or similarly for the valence bands) represents the **potential barrier**. This is directly related to the built-in potential (V<sub>bi</sub>). Electrons need to overcome this energy barrier to move from the n-side to the p-side, and holes need to overcome it to move from the p-side to the n-side.

**(Imagine drawing this on the board: a horizontal line for E<sub>F</sub>. On the left (n-side), draw the conduction band (Ec_n) and valence band (Ev_n) relatively low. On the right (p-side), draw Ec_p and Ev_p higher. Then, draw Ec_n and Ev_n bending upwards as they approach the junction, and Ec_p and Ev_p bending downwards. The space between the bent bands is the depletion region.)**

This bending is crucial. It signifies the presence of the internal electric field that prevents the free flow of majority carriers.

### 4. Qualitative Description of Charge Flow Across a p-n Junction

Even in equilibrium, there's a constant subtle dance of charges:

*   **Drift Current:** The built-in electric field in the depletion region exerts a force on any free minority carriers present. Electrons in the depletion region (minority carriers on the p-side) are swept across to the n-side. Holes in the depletion region (minority carriers on the n-side) are swept across to the p-side. This constitutes a **drift current**. This current flows from p to n.
*   **Diffusion Current:** As we saw, due to the concentration difference, majority carriers do diffuse across the junction. Electrons from the n-side diffuse into the p-side, and holes from the p-side diffuse into the n-side. These diffusing carriers then become minority carriers on the other side and eventually recombine. This constitutes a **diffusion current**. This current flows from n to p.

**In equilibrium, the diffusion current due to majority carriers is exactly balanced by the drift current due to minority carriers.** The net current across the junction is zero. This is a fundamental concept – equilibrium means no net flow of charge.

### 5. The p-n Junction Under Applied Bias

The magic of semiconductor devices comes alive when we apply an external voltage across the p-n junction. This is called biasing. We have two main types of bias:

#### 5.1 Forward Bias

*   **Connection:** We connect the positive terminal of a voltage source to the p-type material and the negative terminal to the n-type material. This is like pushing charges in the direction that aids their natural flow.
*   **Effect on Depletion Region:** The applied external electric field is in the opposite direction to the built-in electric field. This *reduces* the effective electric field in the depletion region and also *narrows* the depletion region. Imagine weakening the barrier that was holding things back.
*   **Effect on Barrier Potential:** The applied external voltage (V<sub>applied</sub>) *subtracts* from the built-in potential (V<sub>bi</sub>). The effective barrier height becomes (V<sub>bi</sub> - V<sub>applied</sub>).
*   **Charge Flow:** With a reduced barrier, the diffusion of majority carriers (electrons from n to p, holes from p to n) is greatly enhanced. Since the external voltage is pushing the majority carriers towards the junction, they can now easily overcome the reduced barrier.
    *   A large number of electrons from the n-side inject into the p-side, becoming minority carriers there.
    *   A large number of holes from the p-side inject into the n-side, becoming minority carriers there.
    *   These injected minority carriers then diffuse away from the junction and eventually recombine.
*   **Current:** This enhanced diffusion of majority carriers leads to a significant **forward current** flowing through the junction. This current is primarily carried by the majority carriers.
*   **Energy Band Diagram (Forward Bias):** The Fermi level remains constant, but the bands bend *less* than in the unbiased case. The gap between the conduction band of the n-side and the conduction band of the p-side is reduced.

**(Analogy: Imagine a dam holding back water. Forward bias is like lowering the water level on the side you're pushing from, making it easier for water to flow over.)**

**Key takeaway for forward bias:** It *reduces* the barrier, *narrows* the depletion region, and results in a large **forward current**. This is how a diode "turns on" and conducts current. Typically, a certain "turn-on voltage" (e.g., ~0.7V for silicon, ~0.3V for germanium) is required to overcome the built-in potential significantly.

#### 5.2 Reverse Bias

*   **Connection:** We connect the negative terminal of a voltage source to the p-type material and the positive terminal to the n-type material. This is like pushing charges in the direction that opposes their natural flow.
*   **Effect on Depletion Region:** The applied external electric field is in the same direction as the built-in electric field. This *increases* the effective electric field in the depletion region and also *widens* the depletion region. The external voltage pulls majority carriers away from the junction.
*   **Effect on Barrier Potential:** The applied external voltage (V<sub>applied</sub>) *adds* to the built-in potential (V<sub>bi</sub>). The effective barrier height becomes (V<sub>bi</sub> + V<sub>applied</sub>).
*   **Charge Flow:** The increased barrier height makes it extremely difficult for majority carriers to diffuse across the junction. Their movement is effectively blocked.
    *   However, the increased electric field is very effective at sweeping the *minority* carriers across the junction. Electrons on the p-side are swept to the n-side, and holes on the n-side are swept to the p-side.
*   **Current:** This movement of minority carriers constitutes a small **reverse current**, also known as the **leakage current** or **saturation current**. This current is very small because it's carried by the limited number of minority carriers and is largely independent of the reverse voltage (until breakdown occurs).
*   **Energy Band Diagram (Reverse Bias):** The Fermi level remains constant, but the bands bend *more* than in the unbiased case. The gap between the conduction band of the n-side and the conduction band of the p-side is increased, representing the larger barrier.

**(Analogy: Using the dam example again, reverse bias is like raising the water level on the side you're pushing from, making it even harder for water to flow over.)**

**Key takeaway for reverse bias:** It *increases* the barrier, *widens* the depletion region, and results in a very small **reverse leakage current**. This is the "off" state for a diode.

### 6. Breakdown (A Quick Mention)

While we are focusing on the qualitative aspects, it's worth noting that if we increase the reverse bias voltage sufficiently, a phenomenon called **breakdown** occurs. The depletion region becomes very wide, and the electric field becomes so strong that it can actually rip electrons out of their covalent bonds, creating a large number of electron-hole pairs. This leads to a sudden, large increase in reverse current. There are two main mechanisms for this: Zener breakdown and Avalanche breakdown. We'll delve deeper into this in later topics, but it's important to know that reverse bias doesn't block current infinitely.

### 7. Connection to Course Outcomes

*   **CO1: Explain the fundamentals of Semiconductor Physics.** Our entire discussion on p-n junctions, energy bands, diffusion, drift, and the formation of the depletion region directly addresses these fundamentals. We've seen how the intrinsic properties of semiconductors lead to these junction phenomena.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices.** By explaining forward and reverse bias, we've described how semiconductor materials (as part of a p-n junction) behave under external electrical influence. This is the core behaviour that allows devices like diodes to function as rectifiers or switches.

### Summary and Exam Tips

*   **p-n Junction:** Formed by joining p-type and n-type semiconductors.
*   **Equilibrium:** Diffusion of majority carriers leads to recombination, creating a **depletion region** and a **built-in potential (V<sub>bi</sub>)**.
*   **Energy Band Diagram:** Shows constant Fermi level, bending bands, and the barrier height equivalent to V<sub>bi</sub>.
*   **Forward Bias:** Positive to p, negative to n. *Reduces* barrier, *narrows* depletion region. Leads to large **forward current** due to enhanced majority carrier diffusion.
*   **Reverse Bias:** Negative to p, positive to n. *Increases* barrier, *widens* depletion region. Leads to small **reverse leakage current** due to minority carrier drift.
*   **Exam Focus:** Be prepared to draw and explain the energy band diagrams for unbiased, forward-biased, and reverse-biased junctions. Understand the effect on the depletion region width and the barrier potential for each bias. Explain *why* the current flows in each case.

Remember this: The behaviour of the p-n junction under forward and reverse bias is the bedrock of understanding all semiconductor devices. Get this right, and the rest will follow much more easily!

---

## Sample Questions and Answers

**Q1. Describe the formation of the depletion region at a p-n junction and explain why it is called "depletion."**

**Answer:**
When a p-type semiconductor is brought into intimate contact with an n-type semiconductor, a concentration gradient of charge carriers exists across the junction. Majority carriers diffuse across the junction: electrons from the n-side diffuse into the p-side, and holes from the p-side diffuse into the n-side. As electrons diffuse from the n-side, they leave behind positively charged immobile donor ions. Similarly, as holes diffuse from the p-side, they leave behind negatively charged immobile acceptor ions. This diffusion and subsequent recombination of mobile carriers near the junction results in a region that is depleted of free mobile charge carriers (electrons and holes). It is called the "depletion region" because the mobile carriers are removed (depleted) from this zone, leaving only immobile ionized dopant atoms.

**Q2. Draw and explain the energy band diagram of a forward-biased p-n junction.**

**Answer:**
**Diagram:** (A sketch would show the Fermi level horizontal. The conduction and valence bands on the p-side are positioned higher than those on the n-side. The bands bend downwards on the n-side and upwards on the p-side as they approach the junction, but the extent of bending is *less* than in an unbiased junction. The energy gap between the conduction band edge on the n-side and the p-side is reduced.)

**Explanation:** In forward bias, the positive terminal of the external voltage source is connected to the p-type material, and the negative terminal to the n-type material. This applied voltage opposes the built-in potential, effectively lowering the potential barrier at the junction. The energy bands bend less than in the unbiased case. The reduced barrier allows a large number of majority carriers (holes from p, electrons from n) to diffuse across the junction. This results in a significant forward current. The depletion region also narrows because the external field pulls majority carriers towards the junction, reducing the space charge region.

**Q3. What is the primary difference in charge carrier movement between a forward-biased and a reverse-biased p-n junction?**

**Answer:**
The primary difference lies in which charge carriers dominate the current flow and the magnitude of that current.

*   In a **forward-biased** junction, the applied voltage reduces the barrier, allowing **majority carriers** (electrons from n, holes from p) to diffuse in large numbers across the junction. This leads to a significant **forward current**.
*   In a **reverse-biased** junction, the applied voltage increases the barrier, effectively blocking the diffusion of majority carriers. The current is carried by the few **minority carriers** that drift across the junction due to the increased electric field. This results in a very small **reverse leakage current**.

**Q4. Explain the concept of built-in potential (V<sub>bi</sub>) and its role in an unbiased p-n junction.**

**Answer:**
When a p-n junction is formed, the diffusion of majority carriers across the junction leaves behind immobile ionized dopant atoms (positive donors on the n-side and negative acceptors on the p-side) in the depletion region. This charge separation creates an internal electric field directed from the n-side to the p-side. This electric field, in turn, creates a potential difference across the depletion region, which is called the built-in potential (V<sub>bi</sub>) or barrier potential. Its role in an unbiased junction is crucial: it opposes further diffusion of majority carriers, thereby establishing thermal equilibrium. In equilibrium, the diffusion current of majority carriers is exactly balanced by the drift current of minority carriers, resulting in zero net current. The energy band diagram visually represents this barrier as an energy difference that carriers must overcome to cross the junction.

**Q5. What happens to the width of the depletion region in forward and reverse bias, and why?**

**Answer:**
*   **Forward Bias:** The width of the depletion region **decreases** (narrows). This happens because the applied external voltage has a polarity opposite to the built-in electric field. The external voltage effectively reduces the strength of the built-in field, pulling majority carriers towards the junction and reducing the extent of the region depleted of mobile charges.
*   **Reverse Bias:** The width of the depletion region **increases** (widens). This occurs because the applied external voltage has the same polarity as the built-in electric field. The external voltage reinforces the built-in field, pushing majority carriers further away from the junction and extending the region depleted of mobile charges.
