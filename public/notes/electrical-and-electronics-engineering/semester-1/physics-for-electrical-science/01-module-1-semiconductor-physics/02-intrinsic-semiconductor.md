---
title: "Intrinsic semiconductor"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9556"
status: "completed"
scrapedAt: "2026-05-23T16:03:35.596Z"
---
# Physics for Electrical Science

## Module 1: Semiconductor Physics

### Topic: Intrinsic Semiconductors

**(Connecting with Course Outcomes: This topic directly addresses **CO1: Explain the fundamentals of Semiconductor Physics** and lays the groundwork for **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**. Understanding intrinsic semiconductors is the absolute first step to comprehending how devices like diodes and transistors work, which is the heart of electrical science applications.)**

Alright everyone, welcome back! Today, we're diving into the very foundation of modern electronics: **Semiconductor Physics**. And to truly grasp how all those amazing electronic devices function, we must start at the beginning with a special kind of material called an **Intrinsic Semiconductor**.

Think of it this way: If we're building a city of electronic components, intrinsic semiconductors are the raw, unadulterated building blocks. They haven't been "touched" or modified yet. We'll build upon this understanding to see how we can engineer these materials for specific purposes later on.

### What Exactly is a Semiconductor?

Before we get to "intrinsic," let's quickly recap what makes a material a semiconductor. You've likely encountered conductors (like copper, which lets electricity flow easily) and insulators (like rubber, which blocks electricity). Semiconductors fall somewhere in between. Their ability to conduct electricity can be finely controlled, which is why they are so crucial in electronics.

The electrical conductivity of materials is largely determined by the availability of free charge carriers – primarily electrons – that can move and carry current.

*   **Conductors:** Have a very large number of free electrons even at room temperature. Their valence band (where electrons are bound to atoms) and conduction band (where electrons can move freely) overlap, or the energy gap between them is negligible.
*   **Insulators:** Have a very large energy gap between the valence and conduction bands. Electrons are tightly bound to their atoms and require a huge amount of energy to jump into the conduction band.
*   **Semiconductors:** Have a moderately sized energy gap. At absolute zero temperature (0 Kelvin), they behave like insulators. However, as the temperature increases, some electrons gain enough thermal energy to jump the gap and become free carriers.

### Introducing the Intrinsic Semiconductor

Now, an **intrinsic semiconductor** is a semiconductor material in its purest form. It hasn't been intentionally altered or "doped" with any impurities. The only charge carriers present are those generated inherently by the material itself due to thermal excitation.

The most common examples of intrinsic semiconductors are **Silicon (Si)** and **Germanium (Ge)**. These are elements from Group 14 of the periodic table, meaning they have four valence electrons.

#### The Covalent Bond Picture

To understand how these materials work, we need to visualize their atomic structure. In Silicon, each silicon atom has four valence electrons in its outermost shell. In a solid crystal of silicon, these atoms arrange themselves in a very specific, ordered lattice structure.

Here's where it gets interesting: Each silicon atom forms **covalent bonds** with its four nearest neighbors. In a covalent bond, two atoms share a pair of electrons. So, each silicon atom shares one of its valence electrons with each of its four neighbors, and in return, receives one valence electron from each neighbor. This creates a stable structure where all eight electrons (four from the atom, four shared) are involved in bonding.

**(Analogy time!)** Imagine a group of friends (silicon atoms) who all have four special marbles (valence electrons). To feel secure and complete, each friend decides to form a "sharing circle" with four other friends. Each friend gives one marble to each of their four circle-mates and receives one marble from each of them. Now, everyone feels like they have eight marbles, even though they only originally contributed four. This shared-marble arrangement is like the covalent bond in a silicon crystal.

At absolute zero temperature (0 K), all these valence electrons are locked up in these strong covalent bonds. They are not free to move. Therefore, at 0 K, an intrinsic semiconductor acts like a perfect insulator. No current flows.

#### Thermal Excitation: The Birth of Charge Carriers

What happens when we heat this crystal up? As the temperature rises, the atoms in the lattice vibrate more vigorously. Some of this vibrational energy (thermal energy) can be absorbed by a valence electron.

If an electron absorbs enough thermal energy, it can break free from its covalent bond. When this happens:

1.  **A Free Electron is Created:** This electron is now no longer tied to a specific atom. It's a mobile negative charge carrier that can move through the crystal lattice. This is an electron in the **conduction band**.
2.  **A Vacancy is Left Behind:** When the electron breaks free, it leaves behind a "missing electron" in the covalent bond. This vacancy is called a **hole**.

**(Remember this!)** The key concept here is that in intrinsic semiconductors, **electrons and holes are always created in pairs**. For every free electron that jumps into the conduction band, a hole is created in the valence band.

### Holes as Charge Carriers

Now, you might think, "Okay, so we have a free electron. What about the hole?" This is where things get really clever. The hole isn't just an empty space; it acts as a **positive charge carrier**.

Imagine our friend who shared marbles. If one marble is suddenly removed from a sharing circle, the space where that marble should be is now available. Another friend whose marble is currently in that spot might find it easier to "shift" their marble into the vacant spot. This effectively means the "empty spot" has moved.

In the semiconductor crystal:
A valence electron from a nearby covalent bond can jump into the hole, filling it. When this happens, the original hole is destroyed, but a new hole is created in the location from which the electron jumped. This process repeats, and the hole effectively "moves" through the valence band in the opposite direction of the electron's movement.

So, both **free electrons** in the conduction band and **holes** in the valence band act as charge carriers, contributing to electrical conductivity.

### Intrinsic Carrier Concentration (ni)

The number of free electrons and holes in an intrinsic semiconductor depends heavily on temperature. As temperature increases, more thermal energy is available, leading to more electron-hole pairs being generated.

The concentration of these charge carriers (number of electrons or holes per unit volume) is called the **carrier concentration**. In an intrinsic semiconductor, the concentration of free electrons ($n$) is equal to the concentration of holes ($p$). We denote this intrinsic carrier concentration as $n_i$.

So, for an intrinsic semiconductor:
$n = p = n_i$

This $n_i$ value is a crucial property of the material and is highly temperature-dependent. As we'll see in later modules, this temperature dependence is a significant factor in the performance of semiconductor devices.

**(Exam Tip!)** You'll often be asked about the relationship between temperature and intrinsic carrier concentration. Remember, it's an exponential relationship. Higher temperature means higher $n_i$.

### Conductivity of Intrinsic Semiconductors

The electrical conductivity ($\sigma$) of a material is given by the sum of the contributions from all charge carriers. For an intrinsic semiconductor, this is:

$\sigma = n q \mu_n + p q \mu_p$

where:
*   $n$ is the electron concentration
*   $p$ is the hole concentration
*   $q$ is the magnitude of the electronic charge (approximately $1.602 \times 10^{-19}$ Coulombs)
*   $\mu_n$ is the electron mobility (how easily electrons move)
*   $\mu_p$ is the hole mobility (how easily holes move)

Since, in an intrinsic semiconductor, $n = p = n_i$, the formula simplifies to:

$\sigma = n_i q (\mu_n + \mu_p)$

**(Understanding the Equation!)** This equation tells us that the conductivity of a pure semiconductor depends on three main things:
1.  **Intrinsic Carrier Concentration ($n_i$):** How many charge carriers we have. This is heavily dependent on temperature.
2.  **Charge of the Carrier ($q$):** A fundamental constant.
3.  **Mobility of the Carriers ($\mu_n, \mu_p$):** How easily they move. Mobility is also affected by temperature (generally decreases with increasing temperature due to more scattering) and crystal imperfections.

Because $n_i$ increases exponentially with temperature, the overall conductivity of an intrinsic semiconductor also increases significantly with temperature. This is a key distinguishing feature from conductors, whose conductivity generally decreases with temperature due to increased scattering.

**(Relatable Example!)** Think of a very quiet library at night (0 K). No one is moving around. As the day progresses and more people enter (temperature increases), more people start walking around (charge carriers), and the overall "activity" (conductivity) of the library increases.

### Energy Band Diagram of Intrinsic Semiconductors

Let's visualize this using the energy band diagram, a concept from quantum mechanics that helps us understand electron behavior in solids.

In a semiconductor, we have:
*   **Valence Band:** The energy levels where valence electrons are bound to atoms.
*   **Conduction Band:** The higher energy levels where electrons are free to move and conduct electricity.
*   **Energy Band Gap ($E_g$):** The forbidden region of energy between the valence band and the conduction band. Electrons cannot exist with energies within this gap.

For an intrinsic semiconductor at 0 K:
The valence band is completely filled with electrons.
The conduction band is completely empty.
The band gap ($E_g$) is non-zero.

As the temperature increases:
Thermal energy allows some electrons to gain enough energy to jump from the top of the valence band to the bottom of the conduction band, crossing the band gap $E_g$.
This creates a free electron in the conduction band and leaves a hole in the valence band.

The energy required for this transition is approximately equal to the band gap energy, $E_g$.

**(Key Point!)** The number of electrons in the conduction band and holes in the valence band is directly related to the probability of an electron gaining enough thermal energy to overcome the band gap. This probability is strongly dependent on temperature.

### Properties of Intrinsic Semiconductors: Summary

To recap the key characteristics of intrinsic semiconductors:

*   They are **pure** semiconductor materials (e.g., Silicon, Germanium).
*   Charge carriers are **thermally generated electron-hole pairs**.
*   At 0 K, they behave as **insulators**.
*   As temperature increases, their conductivity **increases** significantly due to the exponential rise in carrier concentration ($n_i$).
*   The electron concentration ($n$) equals the hole concentration ($p$), i.e., $n = p = n_i$.
*   Their conductivity is generally **lower** than doped (extrinsic) semiconductors.

**(Connecting back to COs!)** We've now covered the fundamental characteristics of these materials, which is essential for CO1. Understanding that conductivity depends on thermally generated carriers and their mobility directly supports CO2 when we later discuss how these properties change in devices.

### Why Are They Important?

You might wonder, if their conductivity is low and highly temperature-dependent, why do we even bother with intrinsic semiconductors?

Well, they are the **starting point**. Most practical semiconductor devices, like diodes and transistors, rely on **extrinsic semiconductors**, which are created by intentionally adding impurities (a process called doping). Doping allows us to control the type and number of charge carriers precisely.

However, the behavior of these doped materials is understood by first knowing the behavior of the pure, intrinsic material. The intrinsic properties form the baseline against which the effects of doping are measured. Understanding intrinsic semiconductors is like learning the alphabet before you can write words and sentences.

### Sample Questions with Answers

Here are a few questions to test your understanding, framed in a way you might see in an exam:

**Q1. Define an intrinsic semiconductor and list its primary charge carriers.**

**Answer:**
An intrinsic semiconductor is a semiconductor material in its pure form, without any intentionally added impurities. Its primary charge carriers are **thermally generated electrons** (in the conduction band) and **holes** (in the valence band), which are always created in pairs.

**Q2. How does the conductivity of an intrinsic semiconductor change with increasing temperature? Explain the underlying reason.**

**Answer:**
The conductivity of an intrinsic semiconductor **increases** with increasing temperature. This is because, as temperature rises, more thermal energy is available. This energy allows a greater number of valence electrons to break free from their covalent bonds and jump across the band gap into the conduction band, creating electron-hole pairs. Consequently, the intrinsic carrier concentration ($n_i$) increases exponentially with temperature, leading to a significant rise in conductivity according to the relation $\sigma = n_i q (\mu_n + \mu_p)$.

**Q3. At absolute zero temperature (0 K), what is the conductivity of an intrinsic semiconductor, and why?**

**Answer:**
At absolute zero temperature (0 K), an intrinsic semiconductor behaves like a perfect insulator, meaning its conductivity is virtually **zero**. This is because at 0 K, there is insufficient thermal energy to break any covalent bonds. All valence electrons remain bound to their respective atoms in the valence band, and there are no free electrons in the conduction band or holes in the valence band to carry current.

**Q4. For an intrinsic semiconductor, if the electron concentration is $n$ and the hole concentration is $p$, what is the relationship between $n$ and $p$?**

**Answer:**
For an intrinsic semiconductor, the number of free electrons and holes generated by thermal excitation is equal. Therefore, the electron concentration ($n$) is always equal to the hole concentration ($p$). This is denoted by $n = p = n_i$, where $n_i$ is the intrinsic carrier concentration.

**Q5. (Conceptual) Imagine you have two identical intrinsic semiconductor samples, one at 300 K and another at 400 K. Which sample will have higher electrical conductivity, and why?**

**Answer:**
The sample at 400 K will have higher electrical conductivity. As explained earlier, the conductivity of an intrinsic semiconductor is strongly dependent on temperature. The higher temperature (400 K) provides more thermal energy, leading to a significantly higher intrinsic carrier concentration ($n_i$) compared to the sample at 300 K. This increased number of charge carriers directly results in higher conductivity.

---
This concludes our introduction to intrinsic semiconductors. Remember these fundamental concepts as we move forward to explore how we manipulate these materials to create the electronic devices we use every day!
