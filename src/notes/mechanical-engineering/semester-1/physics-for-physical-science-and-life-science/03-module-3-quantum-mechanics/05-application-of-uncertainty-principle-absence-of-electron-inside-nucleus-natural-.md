---
title: "Application of uncertainty principle- Absence of electron inside nucleus - Natural line broadening"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 3: Quantum Mechanics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835be"
status: "completed"
scrapedAt: "2026-05-20T17:40:06.540Z"
---
# Module 3: Quantum Mechanics - Applications of the Uncertainty Principle

Welcome, everyone, to another exciting session in our journey through Quantum Mechanics! Today, we're going to dive into some really fascinating and, dare I say, counter-intuitive applications of the Heisenberg Uncertainty Principle. Remember how we learned that we can't simultaneously know both the exact position and exact momentum of a particle? Well, that principle isn't just some abstract mathematical concept; it has profound implications for how we understand the very nature of matter, especially at the atomic and subatomic levels.

We'll be exploring two key areas today: **why electrons cannot exist inside the nucleus** and the phenomenon of **natural line broadening** in atomic spectra. These might seem like very different topics, but you'll see how the Uncertainty Principle acts as the unifying thread, explaining phenomena that classical physics simply cannot.

Throughout this module, our goal, as outlined in the course outcomes, is to understand the behaviour of matter at the atomic and subatomic level (CO3). By the end of this session, you should be able to explain *why* certain things happen based on quantum mechanical principles.

***

## 1. Absence of the Electron Inside the Nucleus

This is a classic and incredibly important application of the Uncertainty Principle. Let's set the scene.

### The Classical Picture vs. The Quantum Reality

Classically, the atom was envisioned as a miniature solar system, with electrons orbiting a nucleus. If we think about the nucleus itself, it's incredibly tiny. The radius of a nucleus is on the order of $10^{-15}$ meters (a femtometer). Now, imagine for a moment that electrons *were* confined within this tiny nucleus. What would that imply, and what problems would it lead to?

From Avadhanulu, Kshirsagar & Murthy's *A Textbook of Engineering Physics*, we know that quantum mechanics dictates that if we try to confine a particle to a very small region of space, its momentum (and therefore its kinetic energy) must become very large. Let's see why using the Uncertainty Principle.

### Applying the Uncertainty Principle

The Heisenberg Uncertainty Principle in its position-momentum form states:

$$ \Delta x \Delta p_x \geq \frac{\hbar}{2} $$

where:
*   $\Delta x$ is the uncertainty in the position along the x-axis.
*   $\Delta p_x$ is the uncertainty in the momentum along the x-axis.
*   $\hbar$ is the reduced Planck constant ($\frac{h}{2\pi}$), a very small number (approximately $1.05 \times 10^{-34} \, \text{Joule-seconds}$).

**Think of it this way:** If we want to know the position of something very precisely, our uncertainty in position ($\Delta x$) must be very small. To satisfy the inequality, if $\Delta x$ gets smaller, then $\Delta p_x$ *must* get larger. A larger $\Delta p_x$ means a greater uncertainty in momentum. This uncertainty in momentum translates directly to a minimum possible momentum that the particle must have. It's not that we *don't know* its momentum; it's that the particle *inherently cannot have* a momentum with less spread than this limit.

### The Nucleus as a Confinement Region

Let's consider the nucleus as our "region of confinement." The diameter of the nucleus is roughly $2 \times 10^{-15}$ meters. If an electron were to be inside the nucleus, its position uncertainty ($\Delta x$) would be at most comparable to the size of the nucleus. Let's take $\Delta x \approx 2 \times 10^{-15}$ m as an upper bound for the uncertainty in the electron's position within the nucleus.

Now, let's calculate the *minimum* uncertainty in the electron's momentum using the Uncertainty Principle:

$$ \Delta p_x \geq \frac{\hbar}{2 \Delta x} $$

Plugging in the values:

$$ \Delta p_x \geq \frac{1.05 \times 10^{-34} \, \text{J s}}{2 \times (2 \times 10^{-15} \, \text{m})} $$

$$ \Delta p_x \geq \frac{1.05 \times 10^{-34}}{4 \times 10^{-15}} \, \text{kg m/s} $$

$$ \Delta p_x \geq 0.2625 \times 10^{-19} \, \text{kg m/s} $$

This $\Delta p_x$ represents the minimum uncertainty in the electron's momentum. This means the electron *must* possess a momentum of at least this magnitude. In fact, we often approximate the minimum momentum itself, $p_{min}$, as being on the order of $\Delta p_x$.

So, the minimum momentum an electron confined within the nucleus would have is roughly $p_{min} \approx 0.26 \times 10^{-19}$ kg m/s.

### Calculating the Kinetic Energy

Now, let's see what kinetic energy this momentum corresponds to. The kinetic energy ($K$) is given by $K = \frac{p^2}{2m}$, where $p$ is the momentum and $m$ is the mass of the electron ($m_e \approx 9.11 \times 10^{-31}$ kg).

Let's calculate the minimum kinetic energy ($K_{min}$) corresponding to our minimum momentum:

$$ K_{min} = \frac{p_{min}^2}{2m_e} $$

$$ K_{min} \approx \frac{(0.26 \times 10^{-19} \, \text{kg m/s})^2}{2 \times (9.11 \times 10^{-31} \, \text{kg})} $$

$$ K_{min} \approx \frac{0.0676 \times 10^{-38}}{18.22 \times 10^{-31}} \, \text{J} $$

$$ K_{min} \approx 0.0037 \times 10^{-7} \, \text{J} $$

To make this more relatable, let's convert it to electron volts (eV), knowing that $1 \, \text{eV} = 1.602 \times 10^{-19} \, \text{J}$.

$$ K_{min} \approx \frac{0.0037 \times 10^{-7} \, \text{J}}{1.602 \times 10^{-19} \, \text{J/eV}} $$

$$ K_{min} \approx 2.3 \times 10^{11} \, \text{eV} $$

This is a colossal amount of energy! $2.3 \times 10^{11}$ eV is 230 Giga-electron Volts (GeV)!

### The Contradiction

Now, let's compare this required kinetic energy with the *binding energy* of electrons in atoms, or the energy of electrons that are *observed* to be emitted from nuclei in certain radioactive decay processes like beta decay.

*   The energy levels of electrons in atoms are typically in the range of a few electron volts (eV) to a few kilo-electron volts (keV) for inner shell electrons.
*   In beta decay, electrons are emitted from the nucleus, and their energies are typically in the range of a few mega-electron volts (MeV).

The calculated minimum kinetic energy of an electron confined within the nucleus, approximately 230 GeV, is *orders of magnitude larger* than the energies involved in atomic electron shells or even the energies of beta-decay electrons.

**So, here's the crucial point, and this is often asked in exams:** If an electron were to exist inside the nucleus, its kinetic energy would have to be enormously high due to the Uncertainty Principle. This high kinetic energy would mean it would escape the nucleus very quickly, or its presence would be detected through its high-energy interactions, which is not observed. The nucleus is a stable entity, and electrons are observed to orbit *outside* it. Therefore, the existence of electrons *within* the nucleus is not possible.

**Remember this:** The Uncertainty Principle dictates a minimum energy for confined particles. For the tiny confines of the nucleus, this minimum energy for an electron is far too high to be consistent with observations.

This concept is beautifully explained by Arthur Beiser in *Concepts of Modern Physics*, highlighting how quantum principles explain what classical physics cannot.

***

## 2. Natural Line Broadening

Now, let's shift our focus to light and atomic spectra. When atoms emit or absorb light, they do so at very specific frequencies (or wavelengths), corresponding to the energy differences between their quantum states. Ideally, these spectral lines would be infinitely sharp, like a single, perfect note from a musical instrument. However, in reality, these lines are always a little "fuzzy" or broadened. One of the reasons for this broadening is a direct consequence of quantum mechanics, specifically related to the finite lifetime of excited states.

### The Lifetime of Excited States

Atoms don't stay in excited states forever. After an electron jumps to a higher energy level, it will eventually fall back down to a lower energy level, emitting a photon in the process. This process takes time. The average time an atom spends in an excited state before emitting a photon is called its **lifetime** ($\tau$). This lifetime is typically very short, on the order of $10^{-8}$ seconds for many atomic transitions.

### Energy-Time Uncertainty

Just as there's an uncertainty relation between position and momentum, there's also an uncertainty relation between **energy** and **time**:

$$ \Delta E \Delta t \geq \frac{\hbar}{2} $$

where:
*   $\Delta E$ is the uncertainty in the energy of a state.
*   $\Delta t$ is the uncertainty in the time over which the energy is measured or the duration of the state.

**What does this mean?** If a system (like an atom in an excited state) exists for only a very short period of time ($\Delta t$ is small), then the energy of that state ($\Delta E$) *must* be uncertain. It's not that the energy is ill-defined in principle, but rather that the *measurement* or the *definition* of that energy is inherently limited by the state's brief existence.

### Connecting Lifetime to Line Broadening

When an atom is in an excited state with a finite lifetime $\tau$, the uncertainty in the energy of that excited state is approximately:

$$ \Delta E \approx \frac{\hbar}{2\tau} $$

This uncertainty in the energy of the excited state directly translates into an uncertainty in the energy of the emitted photon. Since the energy of a photon is related to its frequency ($\nu$) and wavelength ($\lambda$) by $E = h\nu = \frac{hc}{\lambda}$, an uncertainty in energy leads to an uncertainty in frequency and wavelength.

$$ \Delta E = h \Delta \nu $$

So, the uncertainty in frequency is:

$$ \Delta \nu \approx \frac{\Delta E}{h} = \frac{\hbar}{2h\tau} = \frac{1}{4\pi\tau} $$

This uncertainty in frequency is called the **natural linewidth**.

### Relatability and Examples

Imagine you're listening to a singer hold a note. If they hold the note for a long time, you can clearly discern the pitch. But if they sing a very short, sharp note, it's harder to pinpoint the exact pitch; the sound itself has a certain "fuzziness." This is analogous to the natural line broadening.

*   **A very short-lived excited state** is like that very short, sharp note. The atom quickly transitions, meaning its energy is only "defined" for a short time. This short time leads to a larger uncertainty in energy, and thus a broader spectral line (a range of frequencies).
*   **A long-lived excited state** is like a sustained note. The atom stays in the excited state for a longer duration, leading to a more precise energy value and a narrower spectral line.

This concept is fundamental to understanding atomic spectra and is discussed in various optics and modern physics texts, including Ajoy Ghatak's *Optics*.

### Significance for Physical and Life Sciences

Why is this important for us?

*   **Spectroscopy:** In many analytical techniques used in chemistry and biology (like atomic emission spectroscopy or atomic absorption spectroscopy), we analyze the light emitted or absorbed by atoms to identify and quantify substances. Understanding natural line broadening helps us interpret these spectra accurately. If lines are too broad due to short lifetimes, it can be challenging to distinguish between closely spaced spectral lines.
*   **Lasers:** As we'll see in later modules (CO1), lasers rely on stimulated emission from excited states. The properties of these excited states, including their lifetimes, influence the coherence and linewidth of the laser output.

**Remember this:** The finite lifetime of excited atomic states, coupled with the energy-time uncertainty principle, is the fundamental reason for natural line broadening in atomic spectra. Shorter lifetimes lead to broader lines.

***

## Summary and Key Takeaways

Today we've seen how the Heisenberg Uncertainty Principle isn't just a theoretical curiosity but a powerful tool for explaining real-world physical phenomena:

1.  **Absence of Electrons in Nuclei:** The extreme confinement required for an electron to be inside the nucleus would necessitate an energy so high, due to the position-momentum uncertainty, that it contradicts experimental observations of nuclear stability and electron energies. Therefore, electrons reside outside the nucleus.
2.  **Natural Line Broadening:** The finite lifetime ($\tau$) of excited atomic states implies an inherent uncertainty in their energy ($\Delta E \approx \frac{\hbar}{2\tau}$). This energy uncertainty leads to a corresponding uncertainty in the frequency/wavelength of emitted photons, causing spectral lines to be broadened. This is a fundamental quantum effect, often referred to as **lifetime broadening**.

These applications directly connect to **CO3: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics**. We've seen how quantum rules govern particle behaviour at scales far removed from our everyday experience.

***

## Sample Questions and Answers

Here are a few questions to test your understanding, framed in a way you might encounter in exams:

**Question 1 (Conceptual):** Briefly explain why the uncertainty principle prevents electrons from existing within the atomic nucleus.

**Answer:** The uncertainty principle states $\Delta x \Delta p_x \geq \frac{\hbar}{2}$. If an electron were confined within the nucleus, the uncertainty in its position ($\Delta x$) would be very small (on the order of the nuclear diameter, $\sim 10^{-15}$ m). This small $\Delta x$ implies a large uncertainty in momentum ($\Delta p_x$), which means the electron must have a very high momentum. This high momentum corresponds to a very high kinetic energy ($K = p^2/2m_e$), far exceeding typical nuclear binding energies or observed electron energies in nuclear processes like beta decay. Thus, electrons cannot be stably confined within the nucleus.

**Question 2 (Numerical Application):** Calculate the minimum kinetic energy of an electron confined to a region of size $5 \times 10^{-15}$ m. Use $\hbar = 1.05 \times 10^{-34}$ J s and $m_e = 9.11 \times 10^{-31}$ kg.

**Answer:**
Given $\Delta x = 5 \times 10^{-15}$ m.
From the uncertainty principle, $\Delta p_x \geq \frac{\hbar}{2 \Delta x}$.
$\Delta p_x \geq \frac{1.05 \times 10^{-34} \, \text{J s}}{2 \times (5 \times 10^{-15} \, \text{m})} = \frac{1.05 \times 10^{-34}}{10 \times 10^{-15}} \, \text{kg m/s}$
$\Delta p_x \geq 0.105 \times 10^{-19} \, \text{kg m/s}$

The minimum momentum $p_{min}$ is approximately equal to $\Delta p_x$.
$p_{min} \approx 0.105 \times 10^{-19} \, \text{kg m/s}$.

The minimum kinetic energy $K_{min}$ is given by $K_{min} = \frac{p_{min}^2}{2m_e}$.
$K_{min} \approx \frac{(0.105 \times 10^{-19} \, \text{kg m/s})^2}{2 \times (9.11 \times 10^{-31} \, \text{kg})} = \frac{0.011025 \times 10^{-38}}{18.22 \times 10^{-31}} \, \text{J}$
$K_{min} \approx 0.000605 \times 10^{-7} \, \text{J} \approx 6.05 \times 10^{-11} \, \text{J}$.

Converting to eV:
$K_{min} \approx \frac{6.05 \times 10^{-11} \, \text{J}}{1.602 \times 10^{-19} \, \text{J/eV}} \approx 3.78 \times 10^8 \, \text{eV} = 378 \, \text{MeV}$.

This result (378 MeV) is still very high compared to typical nuclear energies, reinforcing the argument against electron confinement in the nucleus.

**Question 3 (Conceptual):** What is natural line broadening, and what quantum mechanical principle is responsible for it?

**Answer:** Natural line broadening, also known as lifetime broadening, is the broadening of spectral lines that occurs because atomic energy states have a finite lifetime. The quantum mechanical principle responsible is the energy-time uncertainty principle ($\Delta E \Delta t \geq \frac{\hbar}{2}$). Since excited states have a finite lifetime ($\tau$), there is an inherent uncertainty in their energy ($\Delta E \approx \frac{\hbar}{2\tau}$). This energy uncertainty leads to a spread in the frequencies of photons emitted or absorbed during transitions to or from these states, resulting in broader spectral lines. Shorter lifetimes lead to wider spectral lines.

**Question 4 (Relation to Course Outcomes):** How does the concept of natural line broadening relate to the understanding of matter at the atomic level (CO3)?

**Answer:** Natural line broadening directly illustrates the quantum mechanical behaviour of matter at the atomic level by showing that even seemingly stable properties like energy levels are subject to fundamental uncertainties. The finite lifetime of excited states, which is an intrinsic property of atomic transitions, means that the energy of these states cannot be known with perfect precision over time, as dictated by the energy-time uncertainty principle. This deviation from classical precision highlights the wave-particle duality and probabilistic nature of quantum systems, which are central to understanding atomic behaviour.

***

Keep these concepts sharp in your minds! They form the bedrock for understanding many more advanced quantum phenomena. See you in the next session!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
