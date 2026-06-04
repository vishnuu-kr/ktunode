---
title: "Fermi level in semiconductors-intrinsic and extrinsic"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da218"
status: "completed"
scrapedAt: "2026-05-23T17:35:26.898Z"
---
# Physics for Electrical Science: Module 1 - Semiconductor Physics

## Topic: Fermi Level in Semiconductors: Intrinsic and Extrinsic

Hello everyone, and welcome to our journey into the fascinating world of semiconductor physics! In this module, we're laying the groundwork for understanding how these materials work, and today, we're diving deep into a concept that's absolutely crucial for comprehending semiconductor behavior: the **Fermi Level**.

Think of it as the energy "sea level" for electrons within a semiconductor. Understanding where this level lies tells us a lot about how many free electrons are available for conduction. This is fundamental to how diodes, transistors, and all the electronic wonders we use every day function. So, let's get started!

**(Course Outcome Connection:** This topic directly addresses **CO1: Explain the fundamentals of Semiconductor Physics** by delving into a core concept that governs charge carrier behavior. It also contributes to **CO2: Describe the behaviour of semiconductor materials in semiconductor devices** because the position of the Fermi level dictates the conductivity and type of conductivity.)

### Understanding Energy Bands and the Fermi-Dirac Distribution

Before we talk about the Fermi level itself, we need a quick recap of our energy band picture for solids. Remember how electrons in atoms occupy discrete energy levels? In a solid, these levels broaden into bands due to the interactions between many atoms. The two most important bands for us are the **valence band** (where electrons are normally bound to atoms) and the **conduction band** (where electrons are free to move and conduct electricity). The energy gap, $E_g$, is the forbidden region between these two bands.

Now, how are these energy levels filled with electrons? This is where the **Fermi-Dirac distribution function**, $f(E)$, comes in. This function tells us the probability that an available energy state at energy $E$ will be occupied by an electron. It's given by:

$$f(E) = \frac{1}{1 + e^{(E - E_F) / (k_B T)}}$$

Here:
*   $E$ is the energy of the state.
*   $E_F$ is the **Fermi level**, which we'll discuss more.
*   $k_B$ is the Boltzmann constant ($1.38 \times 10^{-23}$ J/K).
*   $T$ is the absolute temperature in Kelvin.

What does this function tell us?
*   **At absolute zero (T=0 K):** If $E < E_F$, the exponent $(E - E_F) / (k_B T)$ is negative and goes to $-\infty$. So, $e^{-\infty}$ is 0, and $f(E) = \frac{1}{1+0} = 1$. This means all states with energy below $E_F$ are *completely filled*. If $E > E_F$, the exponent is positive and goes to $+\infty$. So, $e^{+\infty}$ is $\infty$, and $f(E) = \frac{1}{1+\infty} = 0$. All states with energy above $E_F$ are *completely empty*. At 0 K, the Fermi level is essentially the highest energy occupied by an electron.
*   **At temperatures above absolute zero (T>0 K):** The distribution becomes "smudged." Electrons can gain enough thermal energy to jump from below $E_F$ to states above $E_F$. This means there's a small but significant probability that states just below $E_F$ are empty, and states just above $E_F$ are occupied. The "smudging" is governed by the term $k_B T$. A larger $k_B T$ means more smudging, more thermal excitation.

**(Key Concept Reminder:** The Fermi-Dirac distribution is the cornerstone for understanding electron occupancy in any material, especially semiconductors.)

### The Fermi Level ($E_F$)

So, what exactly *is* the Fermi level?

**Definition:** The Fermi level, $E_F$, is the energy level at which the probability of occupation by an electron is exactly 1/2, i.e., $f(E_F) = 1/2$.

Looking back at the Fermi-Dirac function, when $E = E_F$, the exponent $(E - E_F) / (k_B T)$ becomes $(E_F - E_F) / (k_B T) = 0$.
Then, $f(E_F) = \frac{1}{1 + e^0} = \frac{1}{1 + 1} = \frac{1}{2}$.

This definition is particularly insightful at $T = 0$ K, where $E_F$ marks the boundary between filled and empty states. At higher temperatures, it's still a crucial reference point that characterizes the "electron reservoir" of the material.

**(Relatable Analogy:** Imagine a hotel with a fixed number of rooms (energy states) and guests (electrons). The Fermi level is like the "check-in counter." At 0 K, all rooms below the counter are full, and all rooms above are empty. As the day progresses (temperature increases), some guests might get enough energy to move to slightly higher floors, blurring the sharp line between occupied and unoccupied rooms. The Fermi level remains the central reference point for this distribution.)

### Fermi Level in Intrinsic Semiconductors

An **intrinsic semiconductor** is a pure semiconductor material, like pure silicon (Si) or germanium (Ge), with no impurities added. In these materials, electrical conduction occurs solely due to electrons excited from the valence band to the conduction band.

Let's consider an intrinsic semiconductor. At absolute zero ($T=0$ K), the valence band is completely full, and the conduction band is completely empty. As the temperature increases, some electrons gain enough thermal energy ($E \geq E_g$) to jump from the valence band to the conduction band.

When an electron jumps to the conduction band, it leaves behind a vacant state in the valence band. This vacancy behaves like a positive charge carrier and is called a **hole**. So, in an intrinsic semiconductor, for every electron excited into the conduction band, a hole is created in the valence band.

In an intrinsic semiconductor, the number of free electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$). We call this concentration $n_i$ (intrinsic carrier concentration).

So, where does the Fermi level lie in an intrinsic semiconductor? Because the number of electrons in the conduction band is equal to the number of holes in the valence band, the Fermi level must lie exactly in the middle of the energy gap.

Let $E_C$ be the energy of the bottom of the conduction band and $E_V$ be the energy of the top of the valence band. The Fermi level $E_{Fi}$ for an intrinsic semiconductor is:

$$E_{Fi} = \frac{E_C + E_V}{2}$$

This position is also sometimes called the "intrinsic Fermi level."

**Why is it in the middle?** The Fermi-Dirac distribution tells us the probability of occupation. If the Fermi level were closer to the conduction band, there would be a higher probability of finding electrons in the conduction band than holes in the valence band (which are essentially "missing electrons"). If it were closer to the valence band, the opposite would be true. For equal numbers of electrons and holes, the Fermi level must be equidistant from the relevant energy levels in both bands.

**(Textbook Insight:** As discussed in Beiser's "Concepts of Modern Physics" and Kittel's "Introduction to Solid State Physics," the symmetrical nature of electron and hole generation in intrinsic semiconductors dictates this central position of the Fermi level. This is a direct consequence of the Fermi-Dirac statistics applied to the band structure.)

**(Exam Tip:** For intrinsic semiconductors, always remember the Fermi level is precisely at the midpoint of the energy gap. This is a foundational concept.)

### Fermi Level in Extrinsic Semiconductors

Now, let's move on to **extrinsic semiconductors**, which are semiconductors that have been intentionally doped with impurity atoms. This doping process dramatically changes the electrical properties.

There are two main types of extrinsic semiconductors:

1.  **N-type Semiconductors:** Doped with pentavalent impurities (e.g., Phosphorus, Arsenic in Silicon). These impurities have 5 valence electrons. When they substitute a Si atom (which has 4 valence electrons), 4 of their valence electrons form covalent bonds with neighboring Si atoms, and the fifth electron is loosely bound. This fifth electron requires very little energy to become free and move into the conduction band. These impurities are called **donor impurities** because they donate free electrons.

    In an n-type semiconductor, electrons are the majority charge carriers, and holes are the minority charge carriers. Consequently, the electron concentration ($n$) is much greater than the hole concentration ($p$), i.e., $n \gg p$.

    Where does the Fermi level ($E_{Fn}$) lie in an n-type semiconductor? Since there's an excess of electrons, the Fermi level must shift upwards, closer to the conduction band. This increased probability of occupation near the conduction band accounts for the higher electron concentration. The closer $E_{Fn}$ is to $E_C$, the higher the electron concentration.

    The position of the Fermi level in an n-type semiconductor depends on the doping concentration. For moderate doping levels, it lies within the band gap, but above the intrinsic Fermi level.

2.  **P-type Semiconductors:** Doped with trivalent impurities (e.g., Boron, Aluminum in Silicon). These impurities have 3 valence electrons. When they substitute a Si atom, they can form covalent bonds with only 3 neighboring Si atoms. This leaves one bond incomplete, creating a vacancy for an electron. An electron from a neighboring Si atom can easily jump into this vacancy, creating a hole in the valence band. These impurities are called **acceptor impurities** because they accept electrons from the valence band.

    In a p-type semiconductor, holes are the majority charge carriers, and electrons are the minority charge carriers, i.e., $p \gg n$.

    Where does the Fermi level ($E_{Fp}$) lie in a p-type semiconductor? With an abundance of holes (which are like vacant electron states), the Fermi level must shift downwards, closer to the valence band. This increased probability of *emptiness* near the valence band (or increased probability of occupation of states further down, "freeing up" valence band states) explains the higher hole concentration. The closer $E_{Fp}$ is to $E_V$, the higher the hole concentration.

    Similar to n-type semiconductors, for moderate doping, the Fermi level in a p-type semiconductor lies within the band gap, but below the intrinsic Fermi level.

**(Visualizing the Shift:**
*   **Intrinsic:** $E_{Fi}$ is in the middle of the gap.
*   **N-type:** $E_{Fn}$ moves UP towards $E_C$.
*   **P-type:** $E_{Fp}$ moves DOWN towards $E_V$.

**(Example/Analogy:** Think of our hotel again.
*   **Intrinsic:** The Fermi level (check-in counter) is exactly halfway between the lobby (valence band) and the penthouse (conduction band).
*   **N-type:** If we start adding extra guests (donors), the "crowd" effectively pushes the check-in counter upwards, closer to the penthouse. More rooms near the penthouse are now likely occupied.
*   **P-type:** If we start creating empty slots (acceptors), the counter effectively moves downwards, closer to the lobby. More rooms near the lobby are now effectively available for guests to move into, creating more "holes.")

### Quantitative Location of Fermi Level in Extrinsic Semiconductors

The exact position of the Fermi level in extrinsic semiconductors is determined by the doping concentration and temperature. The relationship between carrier concentrations, the Fermi level, and the intrinsic Fermi level can be derived from fundamental principles.

For an n-type semiconductor, the electron concentration ($n$) is approximately:

$$n \approx N_C e^{-(E_C - E_{Fn}) / (k_B T)}$$

where $N_C$ is the effective density of states in the conduction band.
From this, we can express the position of the Fermi level:

$$E_C - E_{Fn} \approx k_B T \ln\left(\frac{N_C}{n}\right)$$

Similarly, for a p-type semiconductor, the hole concentration ($p$) is approximately:

$$p \approx N_V e^{-(E_{Fp} - E_V) / (k_B T)}$$

where $N_V$ is the effective density of states in the valence band.
The position of the Fermi level is:

$$E_{Fp} - E_V \approx k_B T \ln\left(\frac{N_V}{p}\right)$$

**(Connecting to Textbooks:** These formulas are derived from integrating the Fermi-Dirac distribution function over the conduction and valence bands, as detailed in Streetman & Banerjee's "Solid State Electronic Devices" and Avadhanulu et al.'s "A Textbook of Engineering Physics." They highlight how temperature and carrier concentration directly influence the Fermi level's position.)

**Key Takeaways for Extrinsic Semiconductors:**

*   **Doping:** The type and concentration of dopants are critical.
*   **Majority Carriers:** The Fermi level shifts towards the band containing the majority carriers.
*   **Temperature:** Temperature plays a role. At very high temperatures, the semiconductor behaves more like an intrinsic one, and the Fermi level approaches the intrinsic level. At very low temperatures, the Fermi level will be very close to the donor or acceptor levels, depending on the doping.
*   **Carrier Concentration and Fermi Level:** There's an inverse relationship. Higher majority carrier concentration means the Fermi level is closer to that carrier's band.

### Importance of the Fermi Level in Device Physics

So, why do we spend so much time on the Fermi level?

1.  **Determining Carrier Concentrations:** As we saw, the Fermi level directly dictates the probability of finding electrons in the conduction band and holes in the valence band. This is essential for calculating conductivity ($\sigma = q(n\mu_n + p\mu_p)$).

2.  **Understanding PN Junctions:** When a p-type and an n-type semiconductor are brought together, they form a PN junction. At equilibrium, the Fermi levels on both sides must align. This alignment causes charge to flow until the Fermi levels match, leading to the formation of a depletion region and a built-in potential. This is the foundation of diodes and transistors. (This links directly to **CO2**).

3.  **Work Function:** The work function of a material (the minimum energy required to remove an electron from the surface to infinity) is related to the Fermi level and the vacuum level (the energy of an electron at rest outside the material). This is important for understanding electron emission and contact potentials.

4.  **Thermodynamic Equilibrium:** In any system containing semiconductors in thermal equilibrium, the Fermi level is constant throughout. If you connect different materials (e.g., a metal to a semiconductor), their Fermi levels must align at equilibrium.

**(Course Outcome Connection:** All these points directly relate to **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**. Understanding the Fermi level is key to understanding how a PN junction forms, how a transistor works, and how semiconductors interact with other materials in electronic circuits.)

### Summary and Common Pitfalls

Let's recap the key points about the Fermi level:

*   It's the energy level where the probability of electron occupation is 1/2.
*   In **intrinsic semiconductors**, it's located at the middle of the energy gap.
*   In **n-type semiconductors**, it shifts upwards towards the conduction band due to donor impurities.
*   In **p-type semiconductors**, it shifts downwards towards the valence band due to acceptor impurities.
*   The Fermi level's position is crucial for determining carrier concentrations and understanding semiconductor device behavior.

**Common Pitfalls to Avoid:**

*   **Confusing Fermi Level with Band Edges:** The Fermi level is a probability concept; it's not a physical boundary in the same way that $E_C$ and $E_V$ are.
*   **Forgetting Temperature Dependence:** While we often discuss the ideal case, remember that temperature does influence the precise location and "smudging" of the distribution.
*   **Assuming Fermi Level is Always in the Band Gap:** For very heavily doped semiconductors, the Fermi level can actually lie *within* the conduction band (for n-type) or *within* the valence band (for p-type), making them degenerate semiconductors.

**(Professor's Note:** Mastering the concept of the Fermi level is non-negotiable for anyone serious about understanding solid-state electronics. It's the "heartbeat" of semiconductor physics!)

---

### Sample Questions and Answers

**Q1. What is the physical significance of the Fermi level in a semiconductor?**

**Answer:** The Fermi level ($E_F$) represents the energy level at which the probability of an electron state being occupied by an electron is exactly 1/2, as described by the Fermi-Dirac distribution function $f(E) = \frac{1}{1 + e^{(E - E_F) / (k_B T)}}$. At absolute zero temperature (0 K), it marks the boundary between completely filled and completely empty energy states. At higher temperatures, it serves as a reference energy that indicates the "electron reservoir" characteristics of the material and directly influences the concentration of free charge carriers.

**(Reasoning:** This question tests the fundamental definition and interpretation of the Fermi level, linking it to the Fermi-Dirac statistics which is core to **CO1**.)

**Q2. Where is the Fermi level located in an intrinsic semiconductor, and why?**

**Answer:** In an intrinsic semiconductor, the Fermi level ($E_{Fi}$) is located precisely at the middle of the energy gap, halfway between the conduction band edge ($E_C$) and the valence band edge ($E_V$). This is because, in a pure semiconductor, charge transport occurs due to thermally excited electron-hole pairs. The number of free electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$). This equality of carrier concentrations implies a symmetrical distribution of electrons and holes relative to the Fermi level, placing it exactly in the center of the gap.

**(Reasoning:** This targets **CO1** and **CO2**. It requires understanding the definition of an intrinsic semiconductor and how it relates to carrier concentrations and Fermi level position.)

**Q3. How does the Fermi level shift when a pure semiconductor is doped with donor impurities (making it n-type)? Explain with reference to the Fermi-Dirac distribution.**

**Answer:** When a semiconductor is doped with donor impurities, these impurities donate free electrons into the conduction band. This significantly increases the concentration of electrons ($n$) compared to holes ($p$). According to the Fermi-Dirac distribution, for a higher concentration of electrons to exist in the conduction band, the Fermi level must shift upwards, closer to the conduction band edge ($E_C$). Mathematically, $f(E) = \frac{1}{1 + e^{(E - E_F) / (k_B T)}}$. If $E_F$ moves closer to $E_C$, the term $(E - E_F)$ becomes more negative for energies near $E_C$. This leads to a larger value of $e^{(E - E_F) / (k_B T)}$, making the denominator smaller and thus increasing $f(E)$ for states in the conduction band, which is consistent with a higher electron concentration. The Fermi level in an n-type semiconductor ($E_{Fn}$) will be above the intrinsic Fermi level ($E_{Fi}$).

**(Reasoning:** This question assesses **CO1** and **CO2**, specifically focusing on extrinsic semiconductors and the direct impact of doping on Fermi level position, with an explanation tied to the distribution function.)

**Q4. Consider a silicon semiconductor at room temperature (300 K). If the intrinsic Fermi level ($E_{Fi}$) is 0.56 eV below the conduction band edge ($E_C$), what can you say about the Fermi level ($E_{Fn}$) of an n-type silicon semiconductor doped with $10^{17}$ atoms/cm³ of phosphorus? (Assume $N_C \approx 2.8 \times 10^{19}$ cm⁻³ for Si at 300 K and $k_B = 8.62 \times 10^{-5}$ eV/K).**

**Answer:**
First, let's confirm the intrinsic Fermi level position. For Silicon, the band gap ($E_g$) is about 1.12 eV. So, $E_{Fi}$ is approximately $E_C - E_g/2 = E_C - 1.12/2 = E_C - 0.56$ eV, which matches the given information. This means $E_{Fi}$ is in the middle of the gap.

For the n-type semiconductor, the electron concentration $n$ is approximately equal to the donor concentration $N_D = 10^{17}$ cm⁻³ (assuming complete ionization at room temperature).

We can use the formula for the Fermi level position in an n-type semiconductor:
$E_C - E_{Fn} \approx k_B T \ln\left(\frac{N_C}{n}\right)$

Given:
$k_B T = (8.62 \times 10^{-5} \text{ eV/K}) \times (300 \text{ K}) \approx 0.0259$ eV
$N_C \approx 2.8 \times 10^{19}$ cm⁻³
$n \approx N_D = 10^{17}$ cm⁻³

$E_C - E_{Fn} \approx 0.0259 \text{ eV} \times \ln\left(\frac{2.8 \times 10^{19} \text{ cm}^{-3}}{10^{17} \text{ cm}^{-3}}\right)$
$E_C - E_{Fn} \approx 0.0259 \text{ eV} \times \ln(280)$
$E_C - E_{Fn} \approx 0.0259 \text{ eV} \times 5.635$
$E_C - E_{Fn} \approx 0.146$ eV

So, the Fermi level $E_{Fn}$ is approximately 0.146 eV below the conduction band edge ($E_C$).

Since $E_{Fi}$ is 0.56 eV below $E_C$, and $E_{Fn}$ is 0.146 eV below $E_C$, the Fermi level has shifted upwards by $0.56 - 0.146 = 0.414$ eV. This confirms that the Fermi level in the n-type semiconductor is indeed closer to the conduction band than in the intrinsic semiconductor.

**(Reasoning:** This is an application-based question (**CO1**, **CO2**, **CO5**). It requires students to apply the formula for Fermi level position and perform calculations using given parameters, demonstrating understanding of how doping concentration affects the Fermi level. It also reinforces the conceptual shift towards the conduction band.)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
