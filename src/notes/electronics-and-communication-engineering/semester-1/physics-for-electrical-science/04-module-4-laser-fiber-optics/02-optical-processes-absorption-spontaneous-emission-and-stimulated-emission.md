---
title: "Optical processes - Absorption, Spontaneous emission and stimulated emission"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 4: Laser & Fiber Optics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da23c"
status: "completed"
scrapedAt: "2026-05-23T17:35:59.958Z"
---
Absolutely! Here are comprehensive study notes on "Optical Processes: Absorption, Spontaneous Emission, and Stimulated Emission" for your "Physics for Electrical Science" course.

---

## Module 4: Laser & Fiber Optics - Optical Processes

Welcome, everyone, to Module 4! Today, we're diving into the heart of how light interacts with matter at a fundamental level. Understanding these interactions – absorption, spontaneous emission, and stimulated emission – is absolutely crucial, not just for grasping the principles behind lasers and fiber optics, which we'll cover later, but also for a deep understanding of semiconductor devices, which you've explored in earlier modules. This knowledge directly links to **CO1** (explaining semiconductor physics fundamentals) and **CO2** (describing semiconductor material behavior). It also lays the groundwork for **CO4** (applying laser and fiber optics knowledge).

### 1. The Quantum Dance: Energy Levels in Atoms and Molecules

Before we talk about light interacting with matter, we need to remember that matter isn't just a blob of stuff. At the atomic and molecular level, electrons in atoms can't just have any old energy. They exist in specific, discrete energy levels, much like steps on a ladder. You can't stand between two steps, can you? Similarly, an electron can only occupy these allowed energy states.

Let's represent these energy levels. We often denote the lower energy level as $E_1$ and a higher energy level as $E_2$. An electron naturally prefers to be in the lowest possible energy state, the "ground state." However, it can be excited to a higher energy level, an "excited state," if it gains enough energy.

**(Relatable Analogy):** Think of a ball on a staircase. It's naturally at the bottom (ground state). If you lift it up, you're giving it potential energy, and it can rest on a higher step (excited state). It won't float between steps.

### 2. Absorption: The Matter's Hunger for Light

So, how does an electron get to that higher energy level? One very common way is through **absorption**. When light, which is essentially a stream of energy packets called photons, encounters an atom or molecule, it can transfer its energy to an electron.

**The Key Condition for Absorption:** For absorption to happen, the energy of the incoming photon ($E_{photon}$) must be *exactly* equal to the energy difference between the initial (lower) energy level ($E_1$) and the final (higher) energy level ($E_2$).

Mathematically, this is expressed as:

$E_{photon} = E_2 - E_1$

Since we know that the energy of a photon is also given by $E_{photon} = h\nu$, where '$h$' is Planck's constant and '$\nu$' (nu) is the frequency of the light, we can write:

$h\nu = E_2 - E_1$

**(Classroom Explanation):** Imagine shining a beam of white light onto a colored glass. The glass appears a certain color because it absorbs specific frequencies (or wavelengths) of light and transmits others. The atoms in the glass have specific energy level differences that precisely match the energy of the absorbed photons. Those photons are absorbed, and the electrons jump to higher energy states. The light that gets through is the light that couldn't be absorbed. This is a direct manifestation of absorption and links to **CO1** and **CO2** as it explains how materials interact with electromagnetic radiation.

**(Textbook Connection):** Beiser's "Concepts of Modern Physics" extensively covers the quantum mechanical basis of these energy level transitions, which is the foundation for understanding absorption.

### 3. Spontaneous Emission: The Natural Glow

Now, what happens to an electron that has been excited to a higher energy level? These excited states are generally unstable. The electron doesn't want to stay there for long; it wants to return to its lower, more stable energy level.

When an excited electron drops back down to a lower energy level *on its own*, without any external influence triggering it, this process is called **spontaneous emission**. As the electron transitions from the higher energy state ($E_2$) to the lower energy state ($E_1$), it releases the excess energy in the form of a photon.

**The Energy of the Emitted Photon:** The energy of this spontaneously emitted photon is precisely the energy difference between the two levels:

$E_{photon} = E_2 - E_1$

And, again, $E_{photon} = h\nu$.

**(Classroom Explanation & Analogy):** Think of a firefly. It emits light spontaneously. The chemical reactions inside the firefly excite electrons to higher energy levels. When these electrons naturally fall back down, they emit photons, making the firefly glow. This glow isn't coordinated or directional; it's just a natural decay. The light emitted is incoherent – photons are emitted in random directions and at random times. This is a crucial point for later!

**(Exam Tip):** Spontaneous emission is the dominant emission process in ordinary light sources like incandescent bulbs or LEDs (though stimulated emission plays a role in some LEDs too). The light produced is isotropic (emitted in all directions) and has a broad spectrum of wavelengths because many different energy transitions can occur.

### 4. Stimulated Emission: The Coherent Amplifier

This is where things get really interesting and directly lead to lasers! **Stimulated emission** is a process where an incoming photon *causes* an excited electron to drop to a lower energy level, emitting a second photon.

**The Crucial Condition for Stimulated Emission:** For stimulated emission to occur, the incident photon must have an energy *exactly* equal to the energy difference between the two levels ($E_2 - E_1$). That is, $E_{photon} = E_2 - E_1$.

When this condition is met, and the photon encounters an atom with an electron already in the excited state $E_2$, the photon acts as a catalyst. It stimulates the electron to jump down to the lower level $E_1$. In doing so, the atom emits a new photon.

**The "Twin" Photon:** Here’s the magic: the newly emitted photon is identical to the incident photon in *every* way. It has the same:
*   **Energy** (and thus, the same frequency/wavelength)
*   **Direction of travel**
*   **Phase**
*   **Polarization**

**(Classroom Explanation & Analogy):** Imagine you have a perfectly synchronized marching band. One person with a specific drum beat (the incident photon) walks past another person who is already about to strike their drum with that exact beat (the excited electron). The first person's beat *triggers* the second person to strike their drum, producing an identical beat. Now you have two identical beats, in sync. If this happens repeatedly, you get a powerful, coordinated sound. This is analogous to stimulated emission amplifying light coherently.

This amplification of light by stimulated emission is the fundamental principle behind lasers. For a laser to work, we need more atoms in the excited state than in the ground state – a condition called **population inversion**. Without population inversion, absorption would typically dominate over stimulated emission.

**(Textbook Connection):** Avadhanulu, Kshirsagar, and Arun Murthy's "A Textbook of Engineering Physics" often provides detailed explanations of these emission processes and their role in laser operation, directly addressing **CO4**.

### 5. Comparing the Processes: A Summary Table

Let's quickly summarize the differences between spontaneous and stimulated emission, as this is a common exam question.

| Feature           | Spontaneous Emission                                       | Stimulated Emission                                         |
| :---------------- | :--------------------------------------------------------- | :---------------------------------------------------------- |
| **Trigger**       | None (natural decay)                                       | Incident photon of specific energy                          |
| **Emitted Photon**| One photon emitted per event                               | Two photons emitted per event (incident + emitted)        |
| **Photon Identity**| Different from incident photon (if any)                   | Identical to incident photon (energy, direction, phase, polarization) |
| **Direction**     | Random                                                     | Same as incident photon                                     |
| **Phase**         | Random                                                     | Same as incident photon                                     |
| **Coherence**     | Incoherent                                                 | Coherent                                                    |
| **Application**   | Ordinary light sources (LEDs, incandescent bulbs)          | Lasers, optical amplifiers                                  |

**(Exam Tip):** Always remember that stimulated emission is the key to coherent light amplification. If a question asks about how lasers produce coherent light, stimulated emission is your primary answer.

### 6. Einstein's A and B Coefficients: A Deeper Dive (Optional but Good to Know!)

Albert Einstein, back in 1917, was one of the first to predict stimulated emission. He introduced coefficients, known as Einstein's A and B coefficients, to describe these processes quantitatively. While we won't go into the full derivation, understanding their meaning is insightful.

*   **$A_{21}$ (Einstein's A coefficient):** Represents the probability per unit time for an atom in the upper state $E_2$ to spontaneously emit a photon and transition to the lower state $E_1$. This is an intrinsic property of the atomic system.
*   **$B_{12}$ (Einstein's B coefficient):** Represents the probability per unit time per unit energy density of radiation for an atom in the lower state $E_1$ to absorb a photon and transition to the upper state $E_2$.
*   **$B_{21}$ (Einstein's B coefficient):** Represents the probability per unit time per unit energy density of radiation for an atom in the upper state $E_2$ to be stimulated by a photon to transition to the lower state $E_1$, emitting an identical photon.

Einstein showed that for thermal equilibrium, the rate of absorption must equal the rate of emission (both spontaneous and stimulated). This leads to relationships between these coefficients, specifically that $A_{21}$ is proportional to $\nu^3$ and $B_{12}$ is equal to $B_{21}$.

**(Textbook Connection):** For a rigorous treatment and derivations, you can refer to Beiser's "Concepts of Modern Physics" or the more advanced texts like Pierret's "Semiconductor Devices Fundamentals" if you want to see how these apply to semiconductor transitions. Understanding these coefficients helps in **CO1** and **CO2** by providing a theoretical framework for light-matter interaction in semiconductors.

### 7. Linking to Semiconductor Devices (CO1, CO2)

These three optical processes are not just theoretical concepts; they are fundamental to the operation of many semiconductor devices that are vital in electrical science.

*   **Light Emitting Diodes (LEDs):** LEDs work primarily on the principle of **spontaneous emission** in a forward-biased p-n junction. When electrons and holes recombine across the junction, energy is released, often as photons. This is how the light is generated. The color of the LED depends on the band gap energy of the semiconductor material, which dictates the energy difference ($E_2 - E_1$) for recombination.
*   **Laser Diodes:** These devices use **stimulated emission** to produce coherent, monochromatic light. They require a p-n junction with a specific structure (often a double heterostructure) and are operated under conditions that achieve population inversion within the active region. The emitted photons are reflected back and forth by mirrors, causing more stimulated emission and amplifying the light. This directly relates to **CO4**.
*   **Photodiodes and Solar Cells:** These devices operate on the principle of **absorption**. When photons with energy greater than or equal to the semiconductor's band gap energy strike the device, they are absorbed, creating electron-hole pairs. These charge carriers are then separated by the internal electric field, generating a current or voltage. This is a direct application of **CO1** and **CO2**.

**(Remember this…):** The efficiency and type of light interaction in a semiconductor device are dictated by whether absorption, spontaneous emission, or stimulated emission is the dominant process, which in turn depends on the material properties and operating conditions.

---

### Sample Questions and Answers

Here are some sample questions to help you solidify your understanding and prepare for exams:

**Q1. What is the fundamental condition for absorption of a photon by an atom?**

**Answer:** The energy of the incident photon must be exactly equal to the energy difference between the initial lower energy level and the final higher energy level of the electron in the atom. Mathematically, $h\nu = E_2 - E_1$.

**Q2. Explain the difference between spontaneous and stimulated emission in terms of the emitted photons.**

**Answer:**
*   **Spontaneous Emission:** The emitted photon is independent of any external influence. Its direction, phase, and polarization are random. It's a natural decay process.
*   **Stimulated Emission:** The emitted photon is a "clone" of the incident photon that triggered the emission. It has the same energy, direction of travel, phase, and polarization. This process amplifies light coherently.

**Q3. Why is stimulated emission crucial for the operation of a laser?**

**Answer:** Lasers produce highly monochromatic, coherent, and directional light. Stimulated emission is the only process that can amplify light while maintaining these properties. By stimulating excited atoms to emit identical photons, the light beam is amplified and becomes more coherent. Spontaneous emission, on the other hand, produces incoherent light emitted in random directions, which is not characteristic of laser output. This relates directly to **CO4**.

**Q4. Consider an LED that emits red light (wavelength $\approx$ 650 nm). What does this tell you about the energy difference involved in the emission process within the semiconductor material? (Assume $c \approx 3 \times 10^8$ m/s and $h \approx 6.63 \times 10^{-34}$ J·s).**

**Answer:**
The LED emits red light, which means that during the recombination process (a form of emission), photons with an energy corresponding to red light are produced. This implies that the energy difference between the states involved in the recombination ($\Delta E = E_2 - E_1$) is approximately equal to the energy of a red photon.

We can calculate this energy:
$E_{photon} = h\nu = \frac{hc}{\lambda}$
$E_{photon} = \frac{(6.63 \times 10^{-34} \text{ J·s})(3 \times 10^8 \text{ m/s})}{650 \times 10^{-9} \text{ m}}$
$E_{photon} \approx \frac{1.989 \times 10^{-25}}{6.50 \times 10^{-7}} \text{ J}$
$E_{photon} \approx 3.06 \times 10^{-19} \text{ J}$

To convert this to electron volts (eV), we divide by the charge of an electron ($e \approx 1.602 \times 10^{-19}$ C):
$E_{photon} \approx \frac{3.06 \times 10^{-19} \text{ J}}{1.602 \times 10^{-19} \text{ J/eV}} \approx 1.91 \text{ eV}$

So, the energy difference between the recombining electron and hole states in the semiconductor is approximately 1.91 eV. This is a direct application of **CO1** and **CO2**, linking material properties (band gap energy) to optical output.

---
I hope these notes provide a clear and comprehensive understanding of these fundamental optical processes! Let me know if you have any questions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
