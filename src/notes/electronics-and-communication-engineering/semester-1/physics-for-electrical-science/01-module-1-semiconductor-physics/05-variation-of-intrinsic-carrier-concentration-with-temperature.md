---
title: "Variation of Intrinsic carrier concentration with temperature"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da215"
status: "completed"
scrapedAt: "2026-05-23T17:35:24.242Z"
---
# Module 1: Semiconductor Physics
## Topic: Variation of Intrinsic Carrier Concentration with Temperature

Hello everyone! Welcome back to our journey into the fascinating world of semiconductor physics. Today, we're going to delve into a crucial aspect that dictates how our semiconductor devices behave: the **variation of intrinsic carrier concentration with temperature**. Understanding this relationship is fundamental to grasping the core principles of semiconductor operation. This is directly linked to our **Course Outcome 1 (CO1): Explain the fundamentals of Semiconductor Physics**, and as we progress, you'll see how it builds towards **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**.

Think of a semiconductor as a material that's neither a perfect conductor like copper nor a perfect insulator like glass. Its conductivity lies somewhere in between, and that's precisely what makes it so useful. At the heart of this unique behavior are its charge carriers – electrons in the conduction band and holes in the valence band. In an *intrinsic* semiconductor (meaning it's pure, without any added impurities), the number of electrons in the conduction band must *always* equal the number of holes in the valence band. This number is what we call the intrinsic carrier concentration, denoted by $n_i$.

### The Energetic Dance: Electrons, Holes, and Thermal Energy

So, what exactly causes these electrons to jump from the valence band to the conduction band, creating both an electron and a hole? It's all about energy. For an electron to become a free charge carrier, it needs to gain enough energy to overcome the energy gap, or band gap ($E_g$), which separates the valence band from the conduction band.

Where does this energy come from? Primarily, it comes from **thermal energy**. Imagine a material at absolute zero temperature (0 Kelvin). In this ideal state, all electrons are happily settled in their respective energy levels within the valence band. There's no thermal agitation, no energy to push them across the gap. So, at 0 K, an intrinsic semiconductor acts like a perfect insulator – no free carriers, no conductivity.

However, as we start heating up the material, things begin to change. The atoms within the crystal lattice start vibrating more vigorously. This vibrational energy, known as thermal energy, is transferred to the electrons. If an electron in the valence band receives enough thermal energy, it can break free from its atomic bond and jump across the band gap into the conduction band. When this happens, we create two charge carriers:
1.  An **electron** in the conduction band, which is now free to move and contribute to current.
2.  A **hole** in the valence band, which represents the absence of an electron and also acts as a mobile charge carrier, effectively moving in the opposite direction of electron flow.

### The Mathematical Foundation: Unveiling the Relationship

The intrinsic carrier concentration ($n_i$) is fundamentally determined by the number of electrons in the conduction band ($n$) and the number of holes in the valence band ($p$). For an intrinsic semiconductor, $n = p = n_i$.

The concentration of electrons in the conduction band is governed by the product of two key factors:
*   **The density of states in the conduction band ($N_c$):** This represents the total number of available energy levels in the conduction band that electrons can occupy. It's a property of the semiconductor material and its band structure.
*   **The Fermi-Dirac distribution function ($f(E)$):** This function tells us the probability that an energy level $E$ is occupied by an electron. Specifically, it's $f(E) = 1 / (1 + e^{(E - E_F) / k_B T})$, where $E_F$ is the Fermi level, $k_B$ is the Boltzmann constant, and $T$ is the absolute temperature.

The concentration of holes in the valence band depends on:
*   **The density of states in the valence band ($N_v$):** This represents the total number of available energy levels in the valence band that can be *unoccupied* by electrons (i.e., where holes can exist).
*   **The probability of a state being *unoccupied*:** This is given by $(1 - f(E))$. For holes, we often consider the function $(1 - f(E))$, which is approximately $e^{-(E_F - E) / k_B T}$ when $E$ is much lower than $E_F$.

The intrinsic carrier concentration, $n_i$, can be expressed as:

$n_i^2 = n \cdot p$

By integrating the density of states multiplied by the probability functions over the respective bands, we arrive at a crucial relationship (as discussed in texts like Beiser's "Concepts of Modern Physics" and Malik & Singh's "Engineering Physics"):

$n_i = \sqrt{N_c N_v} \cdot e^{-E_g / (2k_B T)}$

Let's break down this equation, because it tells us *everything* about the temperature dependence.

*   **$N_c$ and $N_v$:** These terms are proportional to $T^{3/2}$ (you can find this derivation in more advanced solid-state physics texts like Kittel's "Introduction to Solid State Physics"). So, as temperature increases, the density of states also increases slightly.
*   **$e^{-E_g / (2k_B T)}$:** This is the **exponential term**, and it's the *dominant* factor determining $n_i$'s temperature dependence. This term represents the probability that an electron has enough thermal energy ($k_B T$) to overcome the band gap ($E_g$).

### The Dominant Exponential: Why Temperature is King!

Look closely at that exponential term: $e^{-E_g / (2k_B T)}$. The band gap energy ($E_g$) is a positive, significant value for semiconductors. The temperature ($T$) is in the denominator of the exponent. This means that as **temperature ($T$) increases, the value of $E_g / (2k_B T)$ decreases**.

Since $E_g / (2k_B T)$ is in the *numerator* of a *negative* exponent, a decrease in $E_g / (2k_B T)$ leads to an **increase in the value of $e^{-E_g / (2k_B T)}$**.

Therefore, even though $N_c$ and $N_v$ increase slightly with temperature, the **exponential term increases much, much faster**. This makes the exponential term the driving force behind the rise in intrinsic carrier concentration as temperature goes up.

**Remember this:** For intrinsic semiconductors, the intrinsic carrier concentration ($n_i$) **increases exponentially with temperature**.

### An Everyday Analogy: A Crowded Concert Hall

Let's try to visualize this. Imagine a huge concert hall representing the valence band, filled with people (electrons) sitting in their assigned seats. The stage area, representing the conduction band, is currently empty. The energy gap ($E_g$) is like the effort required to climb from your seat to the stage.

*   **At 0 Kelvin (Absolute Zero):** Everyone is seated, calm, no one wants to move. The stage is empty. No carriers.
*   **At Room Temperature:** Some people are getting restless. They're clapping, talking, and a few adventurous souls might even try to get up and go to the stage, perhaps because they see a better view or have more energy from the music. These are the electrons jumping to the conduction band, creating electrons and holes. The number of people on stage is $n_i$.
*   **At Higher Temperatures:** The music gets louder, the hall gets warmer, and people become much more energetic! Now, a *lot* more people are willing and able to leave their seats and go to the stage. The stage gets much more crowded. This represents the exponential increase in $n_i$ with temperature.

The key here is that the *willingness* of people to move to the stage is directly related to the overall energy (temperature) in the hall. A small increase in energy can cause a few people to move, but a larger increase in energy causes a disproportionately *larger* number to move. That's the essence of the exponential relationship.

### Practical Implications: Why This Matters

This exponential increase in $n_i$ with temperature is critical for understanding several phenomena:

*   **Semiconductor Device Behavior:** As temperature increases, $n_i$ increases, leading to a higher concentration of charge carriers. This generally increases the conductivity of the semiconductor. For intrinsic semiconductors, this effect is very pronounced.
*   **Thermal Runaway:** In some doped semiconductors (extrinsic semiconductors), if the temperature rises too high, the intrinsic carrier concentration can become comparable to or even exceed the doping concentration. This can lead to uncontrolled increases in current, potentially damaging the device. This is a concept you'll explore further when discussing doped semiconductors and device limitations.
*   **Device Design and Operation:** Engineers must account for temperature variations when designing semiconductor circuits. Components that operate at higher temperatures will have different electrical characteristics than those operating at lower temperatures. This is why cooling mechanisms (like heat sinks or fans) are crucial for many electronic devices.

### Connecting to Course Outcomes:

*   **CO1 (Fundamentals of Semiconductor Physics):** We've just explained the fundamental mechanism of carrier generation in intrinsic semiconductors (thermal excitation across the band gap) and derived the equation governing intrinsic carrier concentration. This is as fundamental as it gets!
*   **CO2 (Behaviour of semiconductor materials in devices):** Understanding $n_i$'s temperature dependence is essential for predicting how a semiconductor material will perform in a device under varying thermal conditions. A higher $n_i$ means more current can flow, affecting device performance like resistance and power handling.

### Summary: Key Takeaways

To recap, the intrinsic carrier concentration ($n_i$) in a semiconductor is the concentration of free electrons in the conduction band (and holes in the valence band) in a pure semiconductor. It is governed by the band gap energy ($E_g$), Boltzmann's constant ($k_B$), and absolute temperature ($T$).

The key relationship is:

$n_i \propto e^{-E_g / (2k_B T)}$

This means that $n_i$ **increases exponentially** as temperature increases. This is primarily due to the increased thermal energy available to excite electrons across the band gap. This phenomenon is vital for understanding the electrical properties and operational characteristics of semiconductor devices under different temperature conditions.

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual recall to more application-oriented thinking:

**Q1. What is the fundamental reason for the increase in intrinsic carrier concentration with temperature in a semiconductor?**

**Answer:** The fundamental reason is the increase in thermal energy available to excite electrons from the valence band to the conduction band across the band gap ($E_g$). As temperature rises, more electrons gain sufficient energy to overcome $E_g$, thereby increasing the number of free electrons in the conduction band and holes in the valence band. This relationship is described by the exponential term $e^{-E_g / (2k_B T)}$ in the equation for $n_i$.

**Q2. At absolute zero temperature (0 K), how does an intrinsic semiconductor behave, and what is its intrinsic carrier concentration?**

**Answer:** At absolute zero (0 K), there is no thermal energy to excite electrons across the band gap. All electrons are bound in the valence band. Therefore, an intrinsic semiconductor behaves like a perfect insulator. Its intrinsic carrier concentration ($n_i$) is effectively zero at 0 K.

**Q3. If you have two intrinsic semiconductors, one made of Silicon (Si) and another of Gallium Arsenide (GaAs), and you heat both from room temperature to 100°C, which one is likely to show a greater *percentage* increase in its intrinsic carrier concentration, assuming similar band gap energies for simplicity? Explain why.**

**Answer:** This question requires a bit more thought about the exponential term. While we simplified the band gap similarity, the actual equation for $n_i$ is $n_i = \sqrt{N_c N_v} \cdot e^{-E_g / (2k_B T)}$.

The term $e^{-E_g / (2k_B T)}$ dictates the exponential growth. The larger the band gap ($E_g$), the smaller the exponent (since $E_g$ is in the numerator), and thus the larger the value of $e$ raised to that exponent.

However, the question asks about the *percentage increase* for a given temperature change. Let's consider the derivative of $\ln(n_i)$ with respect to $T$:

$\ln(n_i) = \frac{1}{2}\ln(N_c N_v) - \frac{E_g}{2k_B T}$

$\frac{d(\ln(n_i))}{dT} = \frac{d}{dT}\left(\frac{1}{2}\ln(N_c N_v)\right) + \frac{E_g}{2k_B T^2}$

Since $N_c$ and $N_v$ are proportional to $T^{3/2}$, $\ln(N_c N_v)$ is proportional to $3 \ln(T)$. Thus, $\frac{d}{dT}\left(\frac{1}{2}\ln(N_c N_v)\right)$ is proportional to $3/(2T)$, which is relatively slow compared to the term involving $E_g$.

The dominant term determining the *rate of change* of $\ln(n_i)$ with $T$ is $\frac{E_g}{2k_B T^2}$. This term is directly proportional to $E_g$. Therefore, a semiconductor with a **larger band gap ($E_g$) will exhibit a greater percentage increase in its intrinsic carrier concentration for the same temperature change.**

Typical band gaps are: Si $\approx$ 1.1 eV, GaAs $\approx$ 1.4 eV. In this hypothetical scenario, if we assume these values, GaAs (with a larger $E_g$) would show a greater percentage increase.

**Q4. Explain how the temperature variation of $n_i$ affects the resistance of an intrinsic semiconductor.**

**Answer:** The resistance ($R$) of a semiconductor is inversely proportional to its conductivity ($\sigma$), and conductivity is directly proportional to the concentration of charge carriers ($n_i$ in this case) and their mobility ($\mu$). So, $R \propto 1/(n_i \cdot \mu)$.

As temperature increases, $n_i$ increases exponentially. While the mobility ($\mu$) generally decreases with increasing temperature (due to increased lattice scattering), the exponential increase in $n_i$ is the dominant factor. Therefore, the overall conductivity ($\sigma$) increases significantly with temperature, leading to a **decrease in the resistance** of an intrinsic semiconductor.

This is a crucial distinction from metallic conductors, where resistance *increases* with temperature because the number of charge carriers (free electrons) is essentially constant, and only the scattering of these carriers by lattice vibrations increases.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
