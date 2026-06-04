---
title: "Quantum Mechanical Tunnelling (Qualitative)"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 2: Quantum Mechanics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d7b"
status: "completed"
scrapedAt: "2026-05-20T16:41:21.453Z"
---
## Module 2: Quantum Mechanics

### Topic: Quantum Mechanical Tunnelling (Qualitative)

**Welcome, everyone!** Today, we embark on a fascinating journey into one of the most counter-intuitive yet fundamental phenomena of quantum mechanics: **Quantum Mechanical Tunnelling**. As we delve into the subatomic world, we'll see that the rules we're accustomed to from our everyday macroscopic experiences simply don't apply. This topic is crucial, especially for us in Information Science, as it forms the bedrock for many modern technologies, particularly in semiconductor devices.

Remember our Course Outcome 2: "Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics." Quantum tunnelling is a prime example of this, showcasing just how bizarre and wonderful the quantum realm is.

### 1. Classical Versus Quantum: The Barrier Problem

Let's start with a familiar analogy. Imagine you're pushing a ball up a hill. If the ball doesn't have enough energy to reach the top, it will simply roll back down. It's stuck on one side. This is the classical physics way of thinking – energy is a hard requirement. You either have enough to overcome a barrier, or you don't.

Now, let's shrink down to the quantum world, to electrons or protons. Consider an electron approaching an energy barrier, perhaps a region of higher potential energy. Classically, if the electron's energy is less than the height of this barrier, it should be reflected back, just like our ball rolling down the hill. It's an impassable obstacle.

**(Relating to CO2):** This is where quantum mechanics throws us a curveball. According to quantum theory, the electron doesn't just *stop* at the barrier. Instead, there's a **non-zero probability** that it can appear on the *other side* of the barrier, even if it doesn't have enough energy to "climb over" it in the classical sense. This is **Quantum Mechanical Tunnelling**.

Think of it like this: Imagine you're trying to throw a crumpled piece of paper through a solid wall. Classically, it's impossible. But in the quantum world, there's a tiny, tiny chance that the paper could just *appear* on the other side, without making a hole. It's not that it broke the wall; it's more like it phased through it. This is the essence of tunnelling.

**Key Concept: Probability Waves**

How is this possible? This is where the wave nature of particles, a cornerstone of quantum mechanics, comes into play. Remember De Broglie's hypothesis? Particles also exhibit wave-like properties.

When a quantum particle encounters a barrier, its associated wave function doesn't just abruptly drop to zero at the barrier. Instead, the wave function **decays exponentially** *inside* the barrier.

*   **Analogy:** Think of a sound wave hitting a thin, solid wall. While most of the sound is reflected, a faint sound can still be heard on the other side. The amplitude of the sound wave decreases as it passes through the wall, but it doesn't become zero immediately. Similarly, the wave function's amplitude decreases, but if the barrier is thin enough, it will still have a non-zero amplitude on the other side.

If the wave function has a non-zero amplitude on the other side of the barrier, it means there's a probability of finding the particle there. This probability is directly related to the square of the amplitude of the wave function. This is the probabilistic nature we discussed in our introductory quantum mechanics sessions.

**(Referencing Beiser, Chapter 4):** Beiser beautifully illustrates this using the concept of the wave function, $\psi(x)$. For a particle encountering a potential barrier, the wave function is non-zero in the classically forbidden region (inside the barrier), albeit decaying. If the barrier has a finite width, the wave function can emerge on the other side with a non-zero amplitude.

### 2. Factors Affecting Tunnelling Probability

So, what makes tunnelling more or less likely? It's not a random event governed by caprice, but by specific physical parameters. Understanding these factors is crucial for applications.

*   **Barrier Width (Thickness):** This is perhaps the most intuitive factor. The *thinner* the barrier, the *higher* the probability of tunnelling.
    *   **Explanation:** Imagine our sound wave analogy again. A thinner wall will allow more sound to pass through. In quantum terms, the wave function has less distance to decay before reaching the other side. The exponential decay means even a small increase in width can drastically reduce the tunnelling probability.
    *   **Exam Tip:** Questions often focus on the inverse relationship between barrier width and tunnelling probability. If you decrease the width by half, the probability doesn't necessarily double; it's an exponential relationship.

*   **Barrier Height (Potential Energy Difference):** The *lower* the barrier (meaning the smaller the difference between the particle's energy and the barrier height), the *higher* the probability of tunnelling.
    *   **Explanation:** If the barrier is only slightly higher than the particle's energy, it's "easier" for the particle to "borrow" energy for a short while (Heisenberg's Uncertainty Principle) and make it across. The wave function decays more slowly in this case.
    *   **Think of it like:** Trying to jump over a small fence versus a very high wall. The smaller the height difference, the more likely you are to succeed.

*   **Particle Mass:** This is a critical quantum mechanical aspect. The *lighter* the particle, the *higher* the probability of tunnelling.
    *   **Explanation:** The De Broglie wavelength ($\lambda = h/p$, where $p$ is momentum) is inversely proportional to mass. Lighter particles have longer wavelengths. A longer wavelength wave function decays less rapidly within the barrier, leading to a higher tunnelling probability.
    *   **Example:** Electrons, being very light, tunnel much more readily than protons. This is why electron tunnelling is so prevalent in semiconductor devices.

**(Referencing Avadhanulu, Kshirsagar, Murthy, Chapter 12):** This textbook often provides clear explanations of the exponential dependence of tunnelling probability on these parameters, often expressed mathematically in the form $e^{-2\alpha L}$, where $\alpha$ is related to the barrier height and particle energy, and $L$ is the barrier width. While we're focusing on qualitative understanding, remember this exponential form for quantitative problems.

### 3. Visualizing Tunnelling: Analogies and Examples

Let's solidify these ideas with some more relatable scenarios.

*   **The Ghost in the Machine (Analogy):** Imagine a ghost (our quantum particle) trying to get through a wall (the barrier). If the wall is thin and the ghost isn't too "dense" (low mass), it has a good chance of just appearing on the other side. If the wall is thick, or the ghost is somehow "heavier" or the wall is much "higher" in terms of its "impenetrability," the ghost is less likely to pass through.

*   **The "Quantum Leap" of an Electron:** While often misused, the idea of a quantum leap is somewhat related. An electron in an atom can absorb energy and jump to a higher energy level. Here, tunnelling is about an electron *passing through* an energy barrier, not jumping between discrete energy levels.

**Real-World Applications:** This is where things get exciting and connect directly to our field.

*   **Scanning Tunneling Microscope (STM):** This is a prime example. An STM uses the tunnelling current of electrons between a sharp metallic tip and a conducting surface to image surfaces at the atomic level.
    *   **How it works (simplified):** The tip is brought very close to the surface (a few angstroms). A small voltage is applied. Electrons tunnel across the tiny gap between the tip and the surface. The tunnelling current is extremely sensitive to the distance. As the tip scans across the surface, the microscope adjusts the tip's height to keep the tunnelling current constant, effectively mapping the atomic topography.
    *   **(Relating to CO3 & CO4):** The STM is a direct application of understanding electron behaviour at the quantum level, specifically tunnelling. It allows us to "see" the atoms that make up our materials, which is fundamental to semiconductor physics and device characterization. The gap is the barrier, and the electrons tunnel across it.

*   **Flash Memory (NAND Flash):** This is how we store data in USB drives, SSDs, and smartphones!
    *   **How it works (simplified):** In a flash memory cell, there's a "floating gate" isolated by a thin oxide layer (the barrier). To store a '0' or '1', electrons are forced to tunnel through this oxide layer onto or off the floating gate, changing its charge. The oxide layer is the barrier, and its thinness is critical.
    *   **(Relating to CO3 & CO4):** This is a direct technological application. The ability to control the tunnelling of electrons through a thin insulator allows us to store information. The thickness of that insulator is a design parameter directly related to tunnelling probability. If it's too thick, no tunnelling; if it's too thin, electrons might tunnel unintentionally, corrupting data.

*   **Tunnel Diodes:** These semiconductor devices exhibit negative differential resistance due to tunnelling. When the voltage across them increases, the current decreases over a certain range. This is a direct consequence of how tunnelling probability changes with applied voltage.

**(Referencing Pierret, Streetman & Banerjee, Kittel):** These excellent references on semiconductor physics and solid-state physics delve deeply into the quantum mechanical underpinnings of devices like tunnel diodes and the principles behind STM. They often introduce the concept of the potential barrier in a semiconductor junction and how carrier transport can occur via tunnelling under specific conditions. Kittel's "Introduction to Solid State Physics" is particularly good at linking fundamental quantum concepts to material properties relevant for devices.

### 4. Summary and Key Takeaways

Let's recap what we've learned about quantum mechanical tunnelling.

*   **The Core Idea:** Particles with insufficient classical energy can still pass through energy barriers due to their wave-like nature.
*   **The "How":** The particle's wave function decays exponentially *within* the barrier but can remain non-zero on the other side, indicating a probability of presence.
*   **Key Determinants:** Tunnelling probability is:
    *   **Inversely** related to barrier width (thinner = more tunnelling).
    *   **Inversely** related to barrier height (lower = more tunnelling).
    *   **Directly** related to particle mass (lighter = more tunnelling).
*   **Crucial for Technology:** This phenomenon is not just a theoretical curiosity; it's the working principle behind essential technologies like STMs and flash memory, making it highly relevant to Information Science.

**(Relating to CO2):** We've seen how quantum mechanics explains phenomena at the subatomic level that defy classical intuition. Tunnelling is a perfect illustration of this.

**(Relating to CO3 & CO4):** By understanding tunnelling, we grasp how semiconductor devices function at a fundamental level, which is exactly what CO3 and CO4 aim for. The ability of charge carriers (electrons and holes) to traverse barriers is central to the operation of many semiconductor devices.

**Remember this:** The probabilistic nature and the wave-particle duality are the keys to understanding tunnelling. Don't think of particles as tiny solid balls; think of them as spread-out probability waves.

---

### Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual to more application-oriented.

**Q1. Concept Check:** According to quantum mechanics, can a particle tunnel through an energy barrier if its energy is greater than the barrier height?

**Answer:** No. Tunnelling, in the context we've discussed, refers to particles passing through barriers *classically forbidden* – meaning their energy is *less* than the barrier height. If a particle's energy is greater than the barrier height, it will pass over or through the barrier without needing to tunnel; its wave function will not decay exponentially within the barrier in the same way.

**Q2. Application Scenario:** A researcher is designing a new type of non-volatile memory. They need electrons to tunnel through a very thin insulating layer (the barrier) to store data. If they want to *increase* the probability of tunnelling, which of the following changes would be most effective?
    a) Increase the thickness of the insulating layer.
    b) Decrease the thickness of the insulating layer.
    c) Increase the mass of the charge carriers.
    d) Increase the height of the insulating barrier.

**Answer:** **b) Decrease the thickness of the insulating layer.**
    **Reasoning:** As we discussed, tunnelling probability decreases exponentially with increasing barrier width. Therefore, decreasing the thickness of the insulating layer would significantly *increase* the probability of tunnelling. Increasing carrier mass or barrier height would decrease tunnelling probability, and increasing thickness would also decrease it. This directly relates to CO3 and CO4 as it touches upon semiconductor device design.

**Q3. Conceptual Analogy:** Explain why an electron is more likely to tunnel than a proton through the same barrier.

**Answer:** This is due to the difference in their masses. According to quantum mechanics, the tunnelling probability is inversely related to the particle's mass. Electrons are much lighter than protons. Lighter particles have longer De Broglie wavelengths. A longer wavelength wave function decays less rapidly within a potential barrier, meaning it will still have a significant amplitude on the other side, leading to a higher probability of tunnelling compared to a heavier particle like a proton. This connects to CO2.

**Q4. Device Relevance:** Briefly explain how quantum tunnelling is utilized in a Scanning Tunneling Microscope (STM).

**Answer:** In an STM, a very sharp conductive tip is brought extremely close (on the order of angstroms) to a conductive or semi-conductive surface. A small voltage is applied between the tip and the surface, creating an energy barrier (the vacuum or air gap). Electrons then tunnel across this gap. The tunnelling current is highly sensitive to the distance between the tip and the surface. By scanning the tip across the surface and maintaining a constant tunnelling current (by adjusting the tip's height), the STM can create a topographical map of the surface with atomic resolution. This highlights the application of quantum principles (tunnelling) to engineering (STM), linking to CO3 and CO5.
