---
title: "Principle of laser - conditions for sustained lasing – Population inversion"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 4: Laser & Fiber Optics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f957f"
status: "completed"
scrapedAt: "2026-05-23T16:04:07.378Z"
---
# Physics for Electrical Science: Module 4 - Laser & Fiber Optics

## Topic: Principle of Laser, Conditions for Sustained Lasing & Population Inversion

Welcome, everyone! In this session, we're going to dive deep into the fascinating world of lasers, a technology that has revolutionized countless fields, from telecommunications to medicine and even our everyday barcode scanners. We're specifically focusing on the fundamental principles that make a laser work, the conditions necessary for it to produce that coherent, intense beam of light, and the crucial concept of population inversion.

Think about a regular light bulb. It produces light through a process called incandescence – heating a filament until it glows. This light is scattered in all directions, with a wide range of wavelengths (colors) and phases. A laser, on the other hand, is fundamentally different. It produces a highly directional, monochromatic (single wavelength), and coherent beam of light. How does it achieve this extraordinary feat? That’s what we’re going to unravel today.

### 1. The Fundamental Principle of Laser Action: Stimulated Emission

At the heart of any laser lies a specific quantum mechanical phenomenon: **stimulated emission**. To understand this, we first need to recall the basics of atomic energy levels. As discussed in earlier modules, electrons in atoms can only exist in discrete energy states. They can absorb energy and move to a higher energy level, or they can emit energy and drop to a lower energy level.

When an atom is in an excited state (a higher energy level), it can return to a lower energy state in one of two ways:

*   **Spontaneous Emission:** The atom, in its excited state, can randomly and spontaneously jump to a lower energy level, emitting a photon of energy corresponding to the energy difference between the two levels. This is like a firefly flashing its light – it happens without any external trigger, and the emitted photons have random phases and directions. This is the primary mechanism for light emission in conventional sources like LEDs and incandescent bulbs. (Refer to Beiser, Chapter 6 on Atomic Structure and Spectra for a detailed discussion on atomic energy levels).

*   **Stimulated Emission:** This is where the magic of lasers happens! Imagine an atom is already in an excited state. Now, if a photon with energy exactly equal to the energy difference between the excited state and a lower energy state passes by this excited atom, it can *stimulate* the atom to drop to the lower energy level. Crucially, this process results in the emission of a *second photon*. And here’s the kicker: this *newly emitted photon* is identical to the stimulating photon in *every way*. It has the same energy (and thus wavelength), the same direction, and the same phase.

    Think of it like this: You have a person humming a specific tune. If another person, who knows that same tune, walks by and hums it, it doesn't just add to the noise; it reinforces the original tune, making it stronger and more coherent. Similarly, stimulated emission creates a cascade of identical photons, all traveling in the same direction and in phase. This is the origin of the laser beam's coherence and directionality. (Avadhanulu, Kshirsagar, Murthy, Chapter 30, “Lasers” provides an excellent explanation of stimulated emission).

The word LASER itself is an acronym for **L**ight **A**mplification by **S**timulated **E**mission of **R**adiation. This name perfectly encapsulates the core principle: we are amplifying light through the process of stimulated emission.

### 2. Conditions for Sustained Lasing: Making Stimulated Emission Dominant

For a laser to produce a continuous, powerful beam, stimulated emission must be the dominant process. Spontaneous emission is always happening, but we want stimulated emission to outshine it. This requires a specific set of conditions to be met.

#### a) Population Inversion: The Key Ingredient

This is arguably the most critical condition. In a typical material at thermal equilibrium, most atoms are in their ground state (lowest energy level). As temperature increases, some atoms get excited, but there are still far more atoms in lower energy states than in higher ones.

**Population inversion** is a non-equilibrium state where a higher energy level has *more* atoms than a lower energy level.

Imagine a stadium: Normally, the lower rows (ground state) are packed with people, and the higher rows (excited states) are mostly empty. Population inversion is like having the upper tiers filled with people and the lower tiers almost empty.

Why is this so important?
*   If we have more atoms in a lower state than an upper state, an incoming photon of the correct energy is more likely to be absorbed by an atom in the ground state (moving it to the excited state) than to stimulate an emission from an atom in the excited state. Absorption wins, and there's no net amplification.
*   However, if we achieve population inversion, meaning more atoms are in the excited state than in the lower state, an incoming photon of the right energy is more likely to *stimulate* an emission from an excited atom. This leads to a net increase in the number of photons of that specific energy. Absorption is still possible, but stimulated emission becomes the dominant process.

(Beiser, Chapter 6, touches upon statistical mechanics and the distribution of atoms in energy levels, which is foundational to understanding population inversion. Malik & Singh, Chapter 12, “Lasers,” explicitly details the requirement of population inversion for laser action).

#### b) Pumping Mechanism: Creating the Inversion

How do we create this unnatural state of population inversion? We need to "pump" energy into the laser medium. This is done using a **pumping mechanism**. The goal of pumping is to excite a significant number of atoms to a specific higher energy level, creating the population inversion relative to a lower energy level.

Common pumping methods include:

*   **Optical Pumping:** Using light (from a flashlamp, another laser, or the sun) to excite the atoms. This is like using a powerful spotlight to move people from the lower stadium seats to the upper ones.
*   **Electrical Pumping:** Using an electrical discharge (like in gas lasers, e.g., Helium-Neon laser) or passing a current through a semiconductor junction (as in semiconductor lasers or diodes). This is like providing a crowd with tickets and directions to the upper levels.
*   **Chemical Pumping:** Using energy released from a chemical reaction.

The choice of pumping mechanism depends on the laser medium and the desired output.

#### c) Resonant Cavity (Optical Resonator): Amplifying and Selecting Photons

Once we have stimulated emission happening, we need a way to amplify it effectively and ensure we get a narrow, directional beam. This is where the **resonant cavity** or **optical resonator** comes in.

A typical resonant cavity consists of two mirrors placed at either end of the laser medium.
*   One mirror is **highly reflective** (reflectivity close to 100%).
*   The other mirror is **partially reflective** (e.g., 95-99% reflective), acting as the output coupler.

Here’s how it works:
1.  A few initial photons are emitted spontaneously.
2.  If these photons have the right wavelength and direction, they travel through the laser medium.
3.  As they pass through the medium, they stimulate more emission, producing more identical photons.
4.  These photons reach the highly reflective mirror and are reflected back into the medium.
5.  As they travel back, they stimulate even more emission, further amplifying the light.
6.  This process of reflection and amplification continues back and forth.
7.  Photons that are not traveling perfectly parallel to the axis of the cavity will escape the sides of the medium and the cavity and are lost. This ensures that only photons traveling along the desired direction are amplified.
8.  A small fraction of these amplified photons, traveling along the axis, passes through the partially reflective mirror, forming the laser beam.

This resonant cavity acts like an echo chamber for light. It builds up the intensity of the light that is traveling in the correct direction and at the specific wavelength determined by the cavity length and the atomic transitions. It also helps in achieving monochromaticity and directionality. (Streetman & Banerjee, Chapter 14 on Lasers, beautifully explains the role of the optical cavity in achieving laser action).

### 3. Population Inversion in Detail: Achieving the Non-Equilibrium State

Let's delve a bit deeper into population inversion, as it's a concept that students often need to grasp thoroughly. As mentioned, it's about having more particles in a higher energy state ($E_2$) than in a lower energy state ($E_1$). Mathematically, this means $N_2 > N_1$, where $N_1$ and $N_2$ are the populations of the lower and upper energy levels, respectively.

Under normal thermal equilibrium conditions, the population of energy levels is described by the Boltzmann distribution:
$N_i = N_0 \frac{g_i e^{-E_i/kT}}{Z}$
where:
*   $N_i$ is the population of state $i$
*   $N_0$ is the total number of particles
*   $g_i$ is the degeneracy of the energy level $i$
*   $E_i$ is the energy of the level $i$
*   $k$ is the Boltzmann constant
*   $T$ is the absolute temperature
*   $Z$ is the partition function

For two levels $E_1$ and $E_2$ ($E_2 > E_1$), at thermal equilibrium:
$N_2 = N_1 e^{-(E_2 - E_1)/kT}$
Since $(E_2 - E_1) > 0$ and $kT > 0$, the exponential term is less than 1, meaning $N_2 < N_1$. This is the typical scenario where absorption is favored.

To achieve population inversion ($N_2 > N_1$), we need to force atoms into the higher energy level $E_2$ faster than they decay or transition to $E_1$. This requires continuous energy input through pumping.

#### Three-Level and Four-Level Laser Systems

To efficiently achieve population inversion, especially for optical pumping, specific energy level schemes are used:

*   **Three-Level Laser:** In this scheme, the pumping excites atoms from the ground state (Level 1) to a higher excited state (Level 3). The atoms then rapidly decay (non-radiatively, meaning without emitting photons) to a metastable state (Level 2). The laser transition then occurs between Level 2 and Level 1.
    *   **Problem:** Level 1 is the ground state, so a large population is always present there. To achieve population inversion between Level 2 and Level 1 ($N_2 > N_1$), we need to pump a significant fraction of the total atoms into Level 2. This requires a lot of pumping energy and is less efficient. Most atoms are still in Level 1, so absorption from Level 1 to Level 3 will compete with pumping. The Ruby laser is a classic example of a three-level system. (Malik & Singh, Chapter 12, illustrates these systems with diagrams).

*   **Four-Level Laser:** This is a more efficient scheme. Pumping excites atoms from the ground state (Level 1) to a short-lived high-energy state (Level 4). Atoms quickly decay non-radiatively to a metastable state (Level 2). The laser transition then occurs between Level 2 and Level 3. Finally, atoms in Level 3 decay rapidly (non-radiatively) to the ground state (Level 1).
    *   **Advantage:** The crucial population inversion is achieved between Level 2 and Level 3. Since Level 3 is also a short-lived state, once atoms transition from Level 2 to Level 3, they quickly leave Level 3 and go to the ground state (Level 1). This means that even with moderate pumping, it's easier to achieve $N_2 > N_3$. A small number of photons are needed to initiate lasing, and the process is more efficient. Most common lasers, like He-Ne, Nd:YAG, and semiconductor lasers, operate on four-level systems. (Beiser, Chapter 6, and Avadhanulu, Kshirsagar, Murthy, Chapter 30, both have excellent diagrams comparing three-level and four-level systems, which are highly recommended for exam preparation).

**Remember this:** Four-level lasers are generally preferred for their efficiency in achieving population inversion.

#### Other Conditions for Sustained Lasing:

While population inversion is paramount, other factors contribute to sustained lasing:

*   **Gain Medium:** The material (solid, liquid, gas, or semiconductor) where population inversion is achieved and stimulated emission occurs. The properties of the gain medium determine the wavelength and power of the laser.
*   **Sufficient Pumping Rate:** The pumping rate must be high enough to overcome losses (e.g., absorption, scattering, non-radiative decay) and maintain population inversion.
*   **Threshold Condition:** For lasing to begin and be sustained, the optical gain (amplification due to stimulated emission) must be greater than the total losses in the cavity. The point where gain equals loss is called the **threshold condition**. If pumping is increased beyond this point, the gain exceeds the loss, and lasing starts and continues.

### Connecting to Course Outcomes:

Let's see how this topic directly relates to our course outcomes:

*   **CO1: Explain the fundamentals of Semiconductor Physics.** Understanding atomic energy levels, absorption, spontaneous emission, and stimulated emission are fundamental to semiconductor physics. The operation of semiconductor lasers directly relies on these quantum principles within the band structure of semiconductors.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices.** Semiconductor lasers, a major class of lasers, are fabricated from semiconductor materials. Their lasing action is a direct consequence of the electronic behavior within the semiconductor's energy bands, particularly the population inversion achieved through carrier injection.
*   **CO3: Explain Superconductivity and basic theory of dielectrics.** While not directly covered in this specific topic, the understanding of quantum mechanics and energy levels that underpins laser principles is also crucial for understanding superconductivity and dielectric properties.
*   **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications.** This topic provides the foundational understanding required for CO4. Knowing how lasers work allows us to understand their applications in telecommunications (fiber optics), data storage, medicine, manufacturing, and more. The principles discussed here are what make these applications possible.
*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments.** Understanding stimulated emission, population inversion, and resonant cavities helps in designing and interpreting experiments involving lasers, whether in a laboratory setting or in the context of device characterization.

### Summary of Key Takeaways:

*   **LASER** stands for Light Amplification by Stimulated Emission of Radiation.
*   The core principle is **stimulated emission**, where an incoming photon triggers an excited atom to emit an identical photon.
*   Three essential conditions for sustained lasing are:
    1.  **Population Inversion:** More atoms in a higher energy state than a lower one ($N_2 > N_1$).
    2.  **Pumping Mechanism:** Energy input to create population inversion (optical, electrical, etc.).
    3.  **Resonant Cavity:** Mirrors to reflect photons back and forth, amplifying the beam and ensuring directionality.
*   **Four-level laser systems** are generally more efficient than three-level systems for achieving population inversion.
*   Lasing starts when the **gain exceeds the losses** in the cavity (threshold condition).

Understanding these principles is fundamental to appreciating the power and versatility of laser technology.

---

## Sample Questions and Answers:

**Q1. What is the fundamental process responsible for the amplification of light in a laser?**
**Answer:** The fundamental process is **stimulated emission**. An incoming photon with energy matching an atomic transition causes an atom in an excited state to emit a second photon that is identical to the first in energy, direction, and phase. This leads to an amplification of light at that specific wavelength and direction.

**Q2. Explain why population inversion is essential for laser action. Is it possible to have a laser without population inversion?**
**Answer:** Population inversion is essential because it ensures that stimulated emission dominates over absorption. In a normal state, there are more atoms in lower energy levels, meaning an incoming photon is more likely to be absorbed than to cause stimulated emission. With population inversion ($N_2 > N_1$), an incoming photon is more likely to stimulate emission from an excited atom, leading to a net increase in photons and thus light amplification. Without population inversion, absorption would be the dominant process, and light would be attenuated, not amplified. Therefore, a laser cannot operate without population inversion.

**Q3. Compare and contrast three-level and four-level laser systems in terms of achieving population inversion.**
**Answer:**
*   **Three-Level System:** Pumping excites atoms from ground state (1) to a high state (3). Atoms rapidly decay to a metastable state (2). Laser transition is from (2) to (1). Population inversion between (2) and (1) requires a large fraction of atoms to be pumped to (2), as (1) is the ground state with a large population. This is inefficient and requires high pumping power.
*   **Four-Level System:** Pumping excites atoms from ground state (1) to a high state (4). Atoms decay to a metastable state (2). Laser transition is from (2) to a short-lived state (3). Atoms in (3) rapidly decay to ground state (1). Population inversion is between (2) and (3). Since (3) is a short-lived state, atoms quickly leave it, making it easier to achieve $N_2 > N_3$ with less pumping energy compared to a three-level system. This makes four-level systems more efficient.

**Q4. What role does the resonant cavity play in a laser? Name the two types of mirrors typically used.**
**Answer:** The resonant cavity, formed by two mirrors, plays a crucial role in:
    a) **Amplifying the light:** It reflects photons back and forth through the gain medium, allowing multiple passes and thus significant amplification via stimulated emission.
    b) **Ensuring directionality:** Only photons traveling parallel to the cavity axis are efficiently reflected and amplified, leading to a highly directional beam.
    c) **Improving monochromaticity:** The cavity selects specific wavelengths that constructively interfere within it, leading to a narrow spectral output.

The two types of mirrors are:
    1.  **High reflector:** Nearly 100% reflective.
    2.  **Output coupler:** Partially reflective (e.g., 95-99% reflective), allowing a portion of the amplified light to exit as the laser beam.

**Q5. If the pumping rate in a laser is reduced below the threshold, what happens to the laser output? Explain your reasoning.**
**Answer:** If the pumping rate is reduced below the threshold, the gain provided by stimulated emission will become less than the total losses within the resonant cavity (e.g., absorption, scattering, transmission through the output coupler). Consequently, the amplified light intensity will decrease, and **lasing will stop**. The output will revert to spontaneous emission, which is much weaker and less coherent. The threshold condition is met when gain equals loss; operating below it means loss exceeds gain.
