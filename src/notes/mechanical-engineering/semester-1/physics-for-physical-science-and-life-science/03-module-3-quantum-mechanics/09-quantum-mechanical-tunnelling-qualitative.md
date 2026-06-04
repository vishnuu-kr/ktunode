---
title: "Quantum Mechanical Tunnelling  (qualitative)"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 3: Quantum Mechanics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835c2"
status: "completed"
scrapedAt: "2026-05-20T17:40:09.439Z"
---
# Module 3: Quantum Mechanics - Quantum Mechanical Tunnelling (Qualitative)

Welcome, everyone, to our journey into the fascinating world of Quantum Mechanics! In this module, we're exploring the fundamental principles that govern the behavior of matter at the atomic and subatomic levels. Today, we're going to tackle a concept that, frankly, sounds like something out of science fiction, but it's a very real and crucial phenomenon: **Quantum Mechanical Tunnelling**.

You've probably heard of barriers – walls, fences, even just a steep hill. In our everyday classical world, if you don't have enough energy to go *over* a barrier, you're simply stuck. You can't get to the other side. But in the quantum realm, things are… different. And this difference is what makes tunnelling so intriguing and important.

Before we dive into tunnelling, let's quickly recap what we've learned about the quantum nature of particles. Remember the wave-particle duality? Particles like electrons, protons, and even atoms don't just behave like tiny little balls; they also exhibit wave-like properties. This wave nature is described by something called the **wave function**, often denoted by the Greek letter psi ($\psi$). The square of the wave function, $|\psi|^2$, tells us the *probability* of finding the particle at a particular location. This is a core idea in quantum mechanics – we often talk about probabilities, not certainties.

***

## 1. The Classical Picture vs. The Quantum Reality: Understanding the Barrier

Let's set the stage with a simple analogy. Imagine you have a ball, and it's at the bottom of a valley. To get the ball to the other side of the valley, you need to give it enough energy to roll *over* the highest point, the peak of the hill. If you don't push it hard enough, it will roll back down. Simple, right? This is our **classical intuition**.

**Figure 1: Classical Particle Encountering a Potential Energy Barrier**

*(Imagine a simple diagram here: A horizontal axis representing distance, and a vertical axis representing potential energy. A curve shows a "barrier" – a region where the potential energy is high. A small ball is shown on the left side of the barrier, with its kinetic energy represented by a horizontal line below the barrier's peak. This line indicates the classical particle doesn't have enough energy to overcome the barrier.)*

In classical physics, a particle with energy $E$ encountering a potential energy barrier of height $V_0$ (where $V_0 > E$) is simply reflected back. It cannot penetrate the barrier, let alone pass through it. The particle is fundamentally **forbidden** from being in the region where its kinetic energy would be negative (which is what happens if $E < V_0$ classically).

Now, let's switch to the quantum world. Our "particle" is now described by a wave function, $\psi$. When this wave encounters a potential energy barrier, its wave function doesn't just stop abruptly at the barrier's edge like our classical ball. Because it's a wave, it has a certain **extent**.

**Figure 2: Quantum Mechanical Wave Function Encountering a Potential Energy Barrier**

*(Imagine a similar diagram to Figure 1, but now show a wave function $\psi$. On the left side of the barrier, the wave is significant. As it hits the barrier, the wave function doesn't immediately drop to zero. Instead, it *decays exponentially* within the barrier. Crucially, there's a small but non-zero amplitude of the wave function on the *right side* of the barrier. This implies a non-zero probability of finding the particle beyond the barrier, even though it classically lacks the energy.)*

What happens? The wave function, $\psi$, penetrates the barrier. While its amplitude decreases exponentially as it moves into the barrier, it doesn't necessarily become zero immediately. If the barrier is not infinitely wide or infinitely high, there's a **non-zero probability** that the wave function will extend to the other side of the barrier. And where the wave function has a non-zero amplitude, there's a non-zero probability of finding the particle.

This is **Quantum Mechanical Tunnelling**: a quantum particle, with insufficient energy to overcome a potential energy barrier, can pass through it. It's like our classical ball suddenly appearing on the other side of the hill without ever having rolled over the top!

This phenomenon directly relates to **Course Outcome 3 (CO3)**: "Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics." Tunnelling is a quintessential example of how quantum particles behave in ways that defy our everyday classical understanding.

***

## 2. Key Concepts and Definitions in Tunnelling

Let's formalize what we've just discussed.

*   **Potential Energy Barrier ($V_0$)**: A region in space where the potential energy of a particle is higher than its total energy ($E$). Classically, a particle with $E < V_0$ cannot enter or cross this region.
*   **Wave Function ($\psi$)**: The mathematical description of a quantum particle, whose square ($|\psi|^2$) gives the probability density of finding the particle at a given point.
*   **Transmission Probability (or Tunneling Probability, $T$)**: The probability that a quantum particle will successfully tunnel through a potential energy barrier. This probability depends on several factors.

We often describe the wave function inside a barrier of constant potential $V_0$ (where $V_0 > E$) with a form that resembles $e^{-\kappa x}$, where $\kappa$ is a positive constant related to the barrier's properties and the particle's energy. This exponential decay is why the amplitude decreases within the barrier. If the barrier has a finite width, say $L$, the amplitude on the other side will be proportional to $e^{-\kappa L}$. The transmission probability $T$ is then roughly proportional to the square of this amplitude, so $T \propto e^{-2\kappa L}$.

***

## 3. Factors Affecting Tunneling Probability

So, what makes tunnelling more or less likely? Think back to that decaying wave function.

*   **Barrier Height ($V_0$)**: The *higher* the barrier (i.e., the larger the difference $V_0 - E$), the more rapidly the wave function decays inside the barrier. This means a *lower* transmission probability. It's harder to tunnel through a taller wall.
*   **Barrier Width ($L$)**: The *wider* the barrier, the further the wave function has to "travel" while decaying. A larger width means more decay, and thus a *lower* transmission probability. It's harder to tunnel through a thicker wall.
*   **Particle Mass ($m$)**: Lighter particles have wave-like properties that are more pronounced (think de Broglie wavelength, $\lambda = h/p$). Quantum effects, including tunnelling, are more significant for lighter particles. A heavier particle will have a *lower* transmission probability compared to a lighter particle of the same energy encountering the same barrier.
*   **Particle Energy ($E$)**: While the particle has less energy than the barrier height ($E < V_0$), the *closer* $E$ is to $V_0$, the less steep the exponential decay within the barrier. This means a *higher* transmission probability. It's easier to tunnel if you're "almost" energetic enough to go over the barrier.

**Quick Recall Tip**: Think of it as a "haze" or "leakage." The thicker and taller the haze-generating source (barrier) and the further you are from it (width), the less haze you'll see. Lighter things "haze" more easily.

### Analogy: Radio Waves Through Walls

Think about radio waves. They are electromagnetic waves. When they hit a wall, most of the wave is reflected, but a small portion can penetrate and diffract. Similarly, in tunnelling, the particle's wave nature allows a small part of its "wave presence" to cross the barrier. The effectiveness depends on the wall's material and thickness (barrier properties) and the frequency of the radio wave (related to particle energy and mass).

***

## 4. Real-World Applications and Examples

This isn't just theoretical physics; tunnelling has profound implications in several fields, especially those relevant to physical and life sciences.

### a) Nuclear Fusion in Stars (Including Our Sun)

This is a classic and vital example, directly impacting life science through the energy that sustains life on Earth.

*   **The Problem:** The Sun is powered by nuclear fusion, primarily the fusion of hydrogen nuclei (protons) into helium. Protons are positively charged, and they repel each other very strongly due to the electrostatic force (Coulomb repulsion). To overcome this repulsion and get close enough for the strong nuclear force to bind them together, they need to have extremely high kinetic energy.
*   **The Sun's Temperature:** The temperature at the Sun's core is about 15 million Kelvin. While this is incredibly hot, the average kinetic energy of protons is *still not enough* to overcome the Coulomb barrier classically. If it were purely classical, the Sun wouldn't shine!
*   **The Quantum Solution: Tunnelling!** Quantum mechanical tunnelling allows some protons, even with insufficient kinetic energy, to tunnel through the Coulomb barrier. This significantly increases the rate of fusion reactions, making the Sun's energy output possible.

Remember this: **Without quantum tunnelling, stars like our Sun would not ignite and produce the energy that ultimately supports life on Earth.** This connects directly to **CO3**.

### b) Scanning Tunneling Microscope (STM)

This is a marvel of modern technology that allows us to "see" individual atoms.

*   **The Principle:** An STM uses an extremely sharp conducting tip (ideally just one atom wide) that is brought very close to a conducting surface. A small voltage is applied between the tip and the surface.
*   **Tunnelling Current:** Electrons can tunnel across the tiny gap (a vacuum or air gap, which acts as a potential energy barrier) between the tip and the surface. This creates a measurable electrical current, called the **tunneling current**.
*   **Imaging Atoms:** The tunneling current is extremely sensitive to the distance between the tip and the surface. Even a change of a fraction of an atomic diameter dramatically alters the current. By scanning the tip across the surface and keeping the tunneling current constant (by adjusting the tip's height with a piezoelectric scanner), the STM can map out the surface topography with atomic resolution.

This is a powerful application of quantum mechanics in technology and materials science, contributing to our understanding of matter at the nanoscale. It shows how we can *exploit* quantum phenomena.

### c) Radioactive Alpha Decay

Some radioactive nuclei emit alpha particles (consisting of two protons and two neutrons).

*   **The Barrier:** Inside the nucleus, the alpha particle is held together by the strong nuclear force, but as it tries to escape, it encounters the electrostatic repulsion from the remaining protons in the nucleus. This repulsion creates a potential energy barrier.
*   **The Tunnelling:** The alpha particle, even though it may not have enough energy to classically overcome this Coulomb barrier, can tunnel through it. The probability of tunnelling determines the half-life of the radioactive isotope. For elements with very long half-lives, the tunnelling probability is very low, meaning the barrier is effectively quite large or the particle energy is very low relative to the barrier.

This example directly illustrates the probabilistic nature of quantum mechanics and its role in nuclear physics, again linking to **CO3**.

### d) Semiconductor Devices

Many modern electronic devices, like diodes and transistors, rely on quantum mechanical effects, including tunnelling, although often in more subtle ways than the examples above. In certain specialized devices like tunnel diodes, tunnelling is the primary mechanism for current conduction.

***

## 5. Connection to Course Outcomes

Let's explicitly tie this back to our Course Outcomes:

*   **CO3: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics. (Knowledge Level: K2)**
    *   Quantum tunnelling is a prime example of this! It's a phenomenon that is utterly impossible to explain using classical physics. Understanding tunnelling requires grasping the wave nature of particles, the concept of probability, and the nature of potential energy barriers in the quantum context. We've seen how electrons tunnel through barriers in STMs, how protons tunnel in stars, and how alpha particles tunnel out of nuclei. These are all behaviours at the atomic and subatomic level explained by quantum mechanics.

*   **CO1: Explain the basic principles and properties of laser and optic fibers. (Knowledge Level: K2)**
    *   While tunnelling isn't the *primary* principle behind lasers or optical fibers, the underlying quantum mechanics that describes light and matter interactions (which are essential for understanding lasers and how light propagates in fibers) is the same framework. For example, in the context of lasers, stimulated emission relies on quantized energy levels of atoms, a concept deeply intertwined with quantum mechanics. Understanding the wave nature of particles (as in tunnelling) helps build a broader intuition for wave phenomena in general, which is crucial for optics.

*   **CO2: Describe the phenomena of interference and diffraction of light. (Knowledge Level: K2)**
    *   Interference and diffraction are also wave phenomena. While tunnelling is about particles behaving like waves and penetrating barriers, interference and diffraction are about waves interacting with each other or obstacles. The mathematical tools and conceptual framework (like wave functions and probability amplitudes) used in tunnelling are part of the broader quantum mechanical wave theory, which also underpins the understanding of light's wave behaviour in interference and diffraction.

*   **CO4: Apply the knowledge of waves and acoustics in non-destructive testing and in acoustic design of buildings. (Knowledge Level: K3)**
    *   This outcome focuses on classical waves (sound waves). However, the fundamental understanding of wave propagation, reflection, and interaction with barriers that you develop from studying quantum waves can provide a conceptual foundation for how classical waves behave. For instance, the idea that waves can penetrate or be partially transmitted through materials is common to both quantum tunnelling and the behaviour of sound waves interacting with building materials.

*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments. (Knowledge Level: K3)**
    *   The Scanning Tunneling Microscope (STM) is a perfect example of applying the principle of quantum tunnelling to conduct experiments and make observations at the atomic level. Understanding tunnelling allows scientists to design and operate instruments like the STM to probe matter with unprecedented detail.

***

## 6. Summary and Key Takeaways

Quantum Mechanical Tunnelling is a counter-intuitive but fundamental quantum phenomenon where a particle can pass through a potential energy barrier, even if its energy is less than the barrier height. This is possible because particles at the quantum level exhibit wave-like properties, and their wave functions can penetrate and, under certain conditions, extend beyond the barrier.

**Remember this:**
*   Tunnelling is a **wave phenomenon**.
*   The **probability** of tunnelling depends on barrier height, barrier width, particle mass, and particle energy.
*   It is crucial for processes like **nuclear fusion in stars**, **alpha decay**, and technologies like the **Scanning Tunneling Microscope (STM)**.

Understanding tunnelling gives you a glimpse into the truly strange and wonderful rules that govern the universe at its smallest scales. It’s a concept that bridges the gap between abstract quantum theory and tangible real-world applications, impacting everything from the energy source of our sun to our ability to image individual atoms.

***

## Sample Questions with Answers

**1. Conceptual Question:**
Explain why quantum mechanical tunnelling is impossible in classical physics.

**Answer:**
In classical physics, particles are treated as localized objects with definite positions and trajectories. A particle's motion is governed by its total energy and the potential energy landscape. If a classical particle encounters a potential energy barrier that is higher than its total energy, it simply does not have enough energy to overcome the barrier. It will be reflected back. There is no mechanism within classical mechanics for a particle to "pass through" such a barrier. The concept of a particle existing in a region where its potential energy is greater than its total energy is forbidden classically.

**2. Conceptual Question:**
List the key factors that influence the probability of quantum mechanical tunnelling and briefly explain how each factor affects the probability.

**Answer:**
The probability of quantum mechanical tunnelling (often denoted by $T$) is influenced by:
*   **Barrier Height ($V_0$) and Particle Energy ($E$)**: The greater the difference ($V_0 - E$), the lower the tunnelling probability. This is because the particle's wave function decays more rapidly within a higher or more imposing barrier.
*   **Barrier Width ($L$)**: The wider the barrier, the lower the tunnelling probability. A larger width means the wave function has to propagate further while decaying, leading to a much smaller amplitude on the other side.
*   **Particle Mass ($m$)**: Lighter particles have a higher tunnelling probability. This is related to their more pronounced wave-like nature; their wave functions are less localized and decay less steeply in the barrier compared to heavier particles.

**3. Application-Oriented Question:**
The Sun generates energy through nuclear fusion. Explain the role of quantum mechanical tunnelling in enabling this process, and why classical physics alone cannot explain the Sun's energy output.

**Answer:**
Nuclear fusion in the Sun involves the merging of positively charged atomic nuclei (protons). Due to their electrical charge, these protons experience a strong electrostatic repulsion, forming a potential energy barrier (the Coulomb barrier). For fusion to occur, protons must get close enough for the attractive strong nuclear force to overcome this repulsion. The temperatures in the Sun's core, while extremely high, are not sufficient for a significant number of protons to classically overcome this Coulomb barrier. Quantum mechanical tunnelling is crucial because it allows protons, with kinetic energies less than the barrier height, to tunnel through this electrostatic repulsion. This significantly increases the rate of fusion reactions, providing the energy that powers the Sun and sustains life on Earth. Without tunnelling, the Sun would not be hot enough to fuse hydrogen at the observed rate.

**4. Exam-Oriented Question (Multiple Choice Style):**
Which of the following phenomena is a direct consequence of quantum mechanical tunnelling?
(a) The photoelectric effect
(b) Compton scattering
(c) Alpha decay of radioactive nuclei
(d) Electron diffraction

**Answer:**
(c) Alpha decay of radioactive nuclei

**Reasoning:**
*   **(a) Photoelectric Effect:** This is explained by the particle nature of light (photons) interacting with electrons, and is not a tunnelling phenomenon.
*   **(b) Compton Scattering:** This involves the scattering of photons by charged particles, demonstrating the particle nature of light and conservation of momentum and energy, not tunnelling.
*   **(c) Alpha Decay:** An alpha particle tunnels out of the nucleus through the Coulomb barrier, which is a classic example of quantum mechanical tunnelling.
*   **(d) Electron Diffraction:** This demonstrates the wave nature of electrons, but it's about the diffraction pattern formed when electrons pass through a crystal lattice or slit, not tunnelling through an energy barrier.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
