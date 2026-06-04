---
title: "Intrinsic semiconductor"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d7e"
status: "completed"
scrapedAt: "2026-05-20T16:41:24.812Z"
---
# Physics for Information Science: Module 3 - Semiconductor Physics

## Topic: Intrinsic Semiconductors

Welcome, everyone! Today, we embark on a fascinating journey into the heart of **semiconductor physics**, specifically focusing on **intrinsic semiconductors**. This is a foundational topic, and understanding it well will unlock our ability to comprehend how countless electronic devices, the very bedrock of our information-driven world, actually work. So, let's dive in!

### 1. What Exactly is a Semiconductor?

Before we talk about "intrinsic," let's get clear on what a "semiconductor" is. You've probably heard this term a lot, right? Think about electrical conductors like copper wire, which let electricity flow through them very easily. Then you have insulators like rubber or glass, which resist the flow of electricity. Semiconductors, as the name suggests, are somewhere in between. They don't conduct electricity as well as conductors, but they aren't completely resistant like insulators either. They have this amazing ability to *control* the flow of electricity, which is precisely why they are so vital for electronics.

Our textbooks, like **H.K. Malik and A.K. Singh's "Engineering Physics"**, describe semiconductors based on their electrical conductivity, which falls between that of conductors and insulators. This "in-between" nature is not accidental; it's deeply rooted in their atomic structure and the way their electrons behave.

### 2. The Atomic Dance: Covalent Bonds and the Valence Band

Let's think about the materials we're talking about, like Silicon (Si) and Germanium (Ge). These are the stars of the show in the semiconductor world. Why? Because of how their atoms are arranged and how their electrons are held.

Imagine a silicon atom. It has 14 electrons, arranged in shells. The crucial ones for electrical conductivity are the **valence electrons** – those in the outermost shell. Silicon has four valence electrons. Now, these atoms don't just float around randomly. In a solid semiconductor crystal, they arrange themselves in a highly ordered, three-dimensional lattice structure.

Here's where it gets really interesting: each silicon atom shares its four valence electrons with its four neighboring silicon atoms. This sharing creates what we call **covalent bonds**. Think of it like a group of friends holding hands, with each person holding hands with four others. This sharing is very stable.

This brings us to the concept of **energy bands**. According to quantum mechanics, electrons in an atom don't have just any energy; they exist in specific energy levels. When these atoms come together in a crystal, these discrete energy levels broaden into **energy bands**.

In a semiconductor, we are particularly interested in two main bands:

*   **Valence Band:** This is the band where all the valence electrons reside, tightly bound by the covalent bonds. In a pure, perfectly structured crystal at absolute zero temperature (0 Kelvin), all valence electrons are locked in these bonds.
*   **Conduction Band:** This is a higher energy band, just above the valence band. For an electron to contribute to electrical conductivity, it needs to be free to move. If an electron gains enough energy to break free from its covalent bond and jump into the conduction band, it becomes a **free electron** and can move around in the crystal, carrying an electrical current.

The gap between the top of the valence band and the bottom of the conduction band is called the **band gap** (often denoted as $E_g$). This band gap is a critical parameter that defines whether a material is a conductor, insulator, or semiconductor.

*   **Conductors:** Have overlapping valence and conduction bands, or a very small band gap, meaning electrons can easily move into the conduction band.
*   **Insulators:** Have a very large band gap, meaning a huge amount of energy is required to free an electron, so very few electrons ever reach the conduction band.
*   **Semiconductors:** Have a moderate band gap. This is their defining characteristic! It's not so large that no one can jump, and not so small that everyone is already jumping.

This understanding of energy bands and the band gap is absolutely crucial for explaining the behavior of semiconductors. It directly relates to **Course Outcome 2 (CO2): Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.**

### 3. The "Intrinsic" Nature: Pure Perfection (Almost!)

Now, what makes a semiconductor "intrinsic"? The term "intrinsic" essentially means "pure" or "unadulterated." An intrinsic semiconductor is a semiconductor material in its purest form, without any impurity atoms deliberately added to it.

Think of it like a perfectly clean glass of water. It's just H₂O. In our case, an intrinsic semiconductor crystal, like pure silicon, is just silicon atoms bonded together.

In this pure state, at absolute zero temperature (0 Kelvin), the valence band is completely filled with electrons, and the conduction band is completely empty. So, at 0 K, an intrinsic semiconductor behaves like an **insulator** because there are no free charge carriers to conduct electricity.

### 4. The Magic of Temperature: Breaking Bonds and Creating Carriers

But what happens when we introduce temperature? Remember our analogy of friends holding hands? If those friends start wiggling and getting more energetic, eventually, some might let go of hands. Similarly, as the temperature of an intrinsic semiconductor increases, the atoms in the crystal lattice vibrate more vigorously.

This thermal energy can be absorbed by the valence electrons. If a valence electron gains enough thermal energy to overcome the band gap ($E_g$), it can break free from its covalent bond and jump into the conduction band.

This process is called **thermal generation of electron-hole pairs**. When an electron leaves a covalent bond and moves into the conduction band, it leaves behind a vacancy in the bond. This vacancy is called a **hole**.

So, in the conduction band, we have a **free electron**. And in the valence band, we have a **hole**. What's a hole, really? It's not a physical particle, but rather the *absence* of an electron where one *should* be. This absence acts like a positive charge. Imagine a row of empty seats in a theatre. If someone from the back moves to an empty seat closer to the front, it's like the "empty seat" has moved forward. A hole behaves similarly – it can move through the valence band as electrons jump into vacant spots.

This is a fundamental concept for **Course Outcome 4 (CO4): Describe the behaviour of semiconductor materials in semiconductor devices.** The creation of both free electrons and holes as charge carriers is the hallmark of semiconductor conductivity.

**Remember this:** In an intrinsic semiconductor, electrical conduction occurs due to the movement of *both* free electrons (in the conduction band) and holes (in the valence band). These are created in pairs by thermal energy.

### 5. Conductivity in Intrinsic Semiconductors

The electrical conductivity ($\sigma$) of a material is a measure of how easily it conducts electricity. It depends on the number of charge carriers per unit volume (carrier concentration, $n$ for electrons and $p$ for holes) and their respective mobilities ($\mu_n$ for electrons and $\mu_p$ for holes). Mobility is a measure of how easily a charge carrier can move through the material under an electric field.

For an intrinsic semiconductor, the number of electrons in the conduction band ($n_i$) is equal to the number of holes in the valence band ($p_i$). This is why they are called intrinsic carriers. So, $n_i = p_i$. Let's call this intrinsic carrier concentration $n_i$.

The conductivity of an intrinsic semiconductor is given by the formula:

$\sigma = n_i e (\mu_n + \mu_p)$

where $e$ is the elementary charge (the magnitude of the charge of an electron).

Notice how conductivity depends on:

*   **Intrinsic Carrier Concentration ($n_i$):** This is highly dependent on temperature. As temperature increases, more electron-hole pairs are generated, so $n_i$ increases significantly. This leads to an increase in conductivity. This is a key point that distinguishes semiconductors from metals. In metals, conductivity generally *decreases* with increasing temperature due to increased scattering of electrons by vibrating atoms.
*   **Mobility ($\mu_n$, $\mu_p$):** These are properties of the material and are generally reduced at higher temperatures due to increased scattering of carriers by lattice vibrations.

**Think of it this way:** Imagine you're trying to move through a crowded room. At higher temperatures, there are more people (carriers), which *could* mean more traffic. However, the people are also bumping into each other and the furniture (lattice vibrations) more, which makes it harder to move quickly (lower mobility). In semiconductors, the increase in carrier concentration with temperature usually dominates over the decrease in mobility, leading to an overall increase in conductivity.

This temperature dependence is a critical characteristic of intrinsic semiconductors and is vital for understanding their use in electronic circuits. **This relates directly to Course Outcome 1 (CO1): Explain electrical conductivity.**

### 6. Visualizing the Process: The Role of Energy and Temperature

Let's use an analogy to solidify this. Imagine a perfectly clean, well-organized library at midnight (absolute zero). All the books (electrons) are neatly placed on their shelves (valence band). The aisles between shelves (conduction band) are completely empty. No one can move around.

Now, as the morning comes (increasing temperature), people start coming into the library. If someone gets enough energy (thermal energy), they might leave their designated reading desk (covalent bond) and go to an empty floor (conduction band). When they leave their desk, they leave an empty chair (a hole).

Now, you have people moving around on the floors (electrons in the conduction band) and empty chairs appearing and disappearing on the desks (holes in the valence band). Both are capable of "moving" and contributing to the activity in the library. The more energetic people get, the more empty chairs and wandering readers you have, and the more "activity" (conductivity) you observe.

The band gap ($E_g$) is like the height of the steps to get from the reading desk to the empty floor. For Silicon, this height is about 1.1 eV (electron-volts), and for Germanium, it's about 0.67 eV. Germanium has a smaller "step," so it requires less energy to free up its electrons, meaning it will have higher conductivity at a given temperature compared to silicon.

**Common Pitfall:** Students sometimes think only electrons move. It's crucial to remember that holes also contribute to conductivity.

### 7. Band Gap Energy and Material Properties

The band gap energy ($E_g$) is a fundamental property that dictates the semiconductor's behavior.

*   **Silicon (Si):** $E_g \approx 1.1$ eV at room temperature. Silicon is the workhorse of the semiconductor industry due to its abundance, stability, and the fact that its native oxide (SiO₂) is an excellent insulator, which is crucial for device fabrication.
*   **Germanium (Ge):** $E_g \approx 0.67$ eV at room temperature. Germanium has a smaller band gap, meaning it conducts more easily at lower temperatures. However, it's also more sensitive to temperature variations and has a higher leakage current than silicon at room temperature, limiting its use in high-performance applications.
*   **Gallium Arsenide (GaAs):** $E_g \approx 1.42$ eV. GaAs is a compound semiconductor with a larger band gap than Si and Ge. It has higher electron mobility than silicon, making it suitable for high-frequency applications like microwave devices and optical devices like LEDs and lasers.

Understanding these band gaps helps us in **Course Outcome 3 (CO3): Apply the fundamentals of Semiconductor Physics in engineering.** For instance, knowing the band gap helps engineers select the right material for a specific application, like optoelectronics where the band gap determines the wavelength of light emitted or absorbed.

### 8. Summary: The Essence of Intrinsic Semiconductors

Let's quickly recap the key takeaways about intrinsic semiconductors:

*   **Pure Form:** They are semiconductor materials in their naturally pure state, without any intentional impurities.
*   **Covalent Bonding:** Atoms are held together by covalent bonds, with valence electrons participating in sharing.
*   **Energy Bands:** The valence band (filled with bound electrons) and the conduction band (empty at 0 K) are separated by a band gap ($E_g$).
*   **Thermal Generation:** At temperatures above absolute zero, thermal energy breaks covalent bonds, generating electron-hole pairs.
*   **Charge Carriers:** Conduction is due to the movement of both free electrons in the conduction band and holes in the valence band.
*   **Temperature Dependence:** Conductivity increases significantly with temperature due to the exponential increase in carrier concentration.

### 9. Sample Questions with Answers

Let's test your understanding with a few questions, like you might see in an exam.

**Question 1:** What is the primary difference in conductivity behavior between an intrinsic semiconductor and a metal as temperature increases?

**Answer:** In an intrinsic semiconductor, conductivity *increases* with increasing temperature because the thermal generation of electron-hole pairs dominates, leading to a significant increase in carrier concentration. In contrast, in a metal, conductivity generally *decreases* with increasing temperature due to increased scattering of free electrons by lattice vibrations, which reduces their mobility.

**Question 2:** Explain why an intrinsic semiconductor acts as an insulator at absolute zero temperature (0 K).

**Answer:** At absolute zero temperature, all valence electrons in an intrinsic semiconductor are tightly bound in their covalent bonds within the valence band. The conduction band is completely empty. Since there are no free charge carriers (electrons or holes) available to move and carry current, the material exhibits insulating behavior.

**Question 3:** For an intrinsic semiconductor, if the intrinsic carrier concentration is $n_i$, what is the concentration of holes ($p$) and electrons ($n$) respectively?

**Answer:** In an intrinsic semiconductor, the number of electrons generated in the conduction band is equal to the number of holes generated in the valence band. Therefore, the concentration of electrons ($n$) is equal to the concentration of holes ($p$), and both are equal to the intrinsic carrier concentration ($n_i$). So, $n = p = n_i$.

**Question 4:** How does the band gap energy ($E_g$) influence the choice of semiconductor material for optoelectronic applications?

**Answer:** The band gap energy ($E_g$) of a semiconductor determines the energy of photons that can be absorbed or emitted. For light emission (like in LEDs or lasers), the energy of the emitted photon is approximately equal to the band gap energy ($E_{photon} \approx E_g$). Therefore, a semiconductor with a specific band gap can be chosen to emit light of a particular color (wavelength). Similarly, for light absorption (like in solar cells), the semiconductor will efficiently absorb photons with energy equal to or greater than its band gap. For example, silicon with $E_g \approx 1.1$ eV is suitable for absorbing sunlight, while materials with larger band gaps are used for emitting blue light.

Keep these concepts sharp, as they form the bedrock for understanding all other semiconductor devices we will discuss!
