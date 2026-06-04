---
title: "Intrinsic carrier concentration"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9558"
status: "completed"
scrapedAt: "2026-05-23T16:03:37.164Z"
---
# Physics for Electrical Science - Module 1: Semiconductor Physics

## Topic: Intrinsic Carrier Concentration

Welcome everyone to our journey into the fascinating world of semiconductor physics! In this module, we're laying the groundwork for understanding how these materials are the backbone of all modern electronics. Today, we'll dive into a fundamental concept: **Intrinsic Carrier Concentration**.

Why is this important for us as future electrical scientists and engineers? Well, to truly understand how a semiconductor device, like a transistor or a diode, *behaves* and *works*, we need to understand the fundamental carriers of charge within it. This directly relates to our **Course Outcome 1: Explain the fundamentals of Semiconductor Physics** and **Course Outcome 2: Describe the behaviour of semiconductor materials in semiconductor devices**. Without knowing how many charge carriers are naturally present in a pure semiconductor, we can't predict its conductivity or how it will respond to external forces.

### What is a Semiconductor, Anyway?

Before we talk about carriers, let's quickly remind ourselves what a semiconductor is. Unlike conductors (like metals) where electrons are free to roam, and insulators (like glass) where electrons are tightly bound, semiconductors are in a unique middle ground. Their electrical conductivity can be manipulated.

Think of it like this: a conductor is a crowded highway where cars (electrons) can move easily, anytime. An insulator is like a road completely blocked by a massive barrier – cars just can't get through. A semiconductor, on the other hand, is like a road with a manageable speed limit and occasional toll booths. Under normal conditions, not many cars are moving freely, but with a little push (like applying voltage or heat), more cars can get on the road and move.

### Introducing the Intrinsic Semiconductor

Now, when we talk about **intrinsic** semiconductors, we mean the *purest* form of these materials. Imagine taking a perfectly clean block of silicon or germanium, with absolutely no impurities added. This is our intrinsic semiconductor.

In these pure materials, at absolute zero temperature (0 Kelvin), all valence electrons are locked into their covalent bonds. It's like everyone is holding hands tightly, and no one can move. So, at 0 Kelvin, an intrinsic semiconductor behaves like an insulator. It has a very high resistance.

### The Magic of Temperature: Thermal Excitation

But what happens when we slightly warm things up? As we increase the temperature, the atoms in the semiconductor lattice vibrate more vigorously. This increased vibration energy can be enough to break some of these covalent bonds.

When a covalent bond breaks, one electron is freed from its parent atom. This freed electron becomes a **free electron**, and it can now move around within the crystal. This is a charge carrier!

But there's a crucial consequence. When an electron leaves a covalent bond, it leaves behind a "vacancy" or a "missing electron" in that bond. This vacancy acts like a **positive charge carrier**, because it can attract an electron from a neighbouring atom. This "moving vacancy" is what we call a **hole**.

So, in an intrinsic semiconductor, electrical conduction occurs due to the movement of *both* free electrons and holes. They are created in pairs, thanks to thermal energy. This is a fundamental concept, directly addressing **CO1**.

### The Intrinsic Carrier Concentration ($n_i$)

The number of free electrons and the number of holes in a pure semiconductor at a given temperature is equal. This is a key characteristic of intrinsic semiconductors. We denote this concentration of free electrons as 'n' and the concentration of holes as 'p'. In an intrinsic semiconductor, therefore, $n = p$.

This equal concentration is what we call the **intrinsic carrier concentration**, denoted by the symbol $n_i$.

$n_i$ is a measure of how many electron-hole pairs are generated due to thermal energy per unit volume. It's a property of the material itself and, importantly, it's highly dependent on temperature.

Remember this: $n = p = n_i$ in an intrinsic semiconductor.

### Factors Affecting $n_i$

So, what makes $n_i$ change?

1.  **Temperature:** This is the most significant factor. As temperature increases, more thermal energy is available to break covalent bonds, leading to more electron-hole pairs. Thus, $n_i$ increases exponentially with temperature. This is a crucial point for exam preparation, as questions often revolve around the temperature dependence of conductivity.
    As Arthur Beiser puts it in "Concepts of Modern Physics," the thermal generation of electron-hole pairs is an exponential process. The energy required to break a bond is related to the band gap energy ($E_g$) of the semiconductor. Semiconductors with smaller band gaps will have more carriers generated at a given temperature.

2.  **Band Gap Energy ($E_g$):** Different semiconductor materials have different band gap energies. For example, Silicon (Si) has a band gap of about 1.1 eV, while Germanium (Ge) has a band gap of about 0.7 eV. A smaller band gap means less energy is needed to break a bond, so more electron-hole pairs are generated at a given temperature. This means intrinsic semiconductors with smaller band gaps will have a higher $n_i$. This concept is essential for understanding **CO2**.

### The Mathematical Expression for $n_i$

While the concept is straightforward, there's a mathematical formula that captures this relationship. Based on statistical mechanics and solid-state physics principles (as discussed in texts like Kittel's "Introduction to Solid State Physics" or Avadhanulu et al.'s "A Textbook of Engineering Physics"), the intrinsic carrier concentration is given by:

$n_i = N_c N_v \exp\left(-\frac{E_g}{2k_B T}\right)$

Let's break this down:

*   $n_i$: The intrinsic carrier concentration (carriers per cubic centimeter, typically).
*   $N_c$: The **effective density of states in the conduction band**. Think of this as the "available slots" for free electrons in the conduction band. It's a material-dependent constant that also has a temperature dependence, approximately $T^{3/2}$.
*   $N_v$: The **effective density of states in the valence band**. Similarly, this represents the "available slots" for holes in the valence band. It also depends on temperature, approximately $T^{3/2}$.
*   $E_g$: The **band gap energy** of the semiconductor (in eV). This is the minimum energy required to excite an electron from the valence band to the conduction band.
*   $k_B$: The **Boltzmann constant** ($8.617 \times 10^{-5}$ eV/K or $1.38 \times 10^{-23}$ J/K). This is a fundamental constant relating temperature to energy.
*   $T$: The **absolute temperature** in Kelvin (K).

The $\exp\left(-\frac{E_g}{2k_B T}\right)$ term is the most critical part for understanding the temperature and band gap dependence. The $E_g/2$ in the exponent is because an electron needs energy $E_g$ to move to the conduction band, leaving a hole behind. This energy expenditure essentially "splits" the band gap energy, with half related to freeing the electron and the other half related to creating the hole.

**Analogy Time!** Imagine a theatre where the stage is the conduction band and the seats are the valence band. $N_c$ and $N_v$ are like the total number of seats available in the stage area and the main seating area, respectively. The $\exp\left(-\frac{E_g}{2k_B T}\right)$ is like the probability that someone can afford a ticket (energy $E_g$) to get from the main seating area to the stage. As temperature ($T$) increases, this probability increases exponentially. A lower ticket price ($E_g$) also makes it more likely for people to get to the stage.

### Typical Values and Significance

For silicon at room temperature (around 300 K), $n_i$ is approximately $1.5 \times 10^{10}$ cm$^{-3}$. For germanium, it's about $2.4 \times 10^{13}$ cm$^{-3}$.

Notice how much higher $n_i$ is for Germanium compared to Silicon, even though Silicon is more widely used. This is primarily due to Germanium's smaller band gap. However, Silicon has other advantages like better thermal stability and oxide formation.

**Why is $n_i$ so important?**

*   **Baseline Conductivity:** It defines the minimum conductivity of a semiconductor material. In intrinsic semiconductors, the conductivity ($\sigma$) is given by $\sigma = n_i q (\mu_n + \mu_p)$, where $q$ is the electronic charge, $\mu_n$ is electron mobility, and $\mu_p$ is hole mobility.
*   **Foundation for Doping:** Understanding intrinsic behavior is essential before we introduce impurities (doping). Doping dramatically changes the carrier concentrations, and we compare the carrier concentrations in doped semiconductors to this intrinsic value ($n_i$). This is the cornerstone for understanding extrinsic semiconductors and device operation, directly linking to **CO2**.

### Common Exam Pitfalls and Quick Recall

*   **Temperature Dependence:** Always remember that $n_i$ increases *exponentially* with temperature. A small increase in temperature can lead to a significant increase in carrier concentration and thus conductivity.
*   **Band Gap:** Lower band gap means higher $n_i$ at the same temperature.
*   **Intrinsic vs. Extrinsic:** $n_i$ is *only* for pure semiconductors. Once we add impurities (dope the material), it becomes an extrinsic semiconductor, and $n \neq p$ and neither equals $n_i$.
*   **Units:** Pay attention to units! $n_i$ is often given in cm$^{-3}$ or m$^{-3}$.

### Connecting to Other Course Outcomes

While today's focus is $n_i$, it's the bedrock for many other concepts.
*   **CO1 (Fundamentals):** We've explained the fundamental concept of charge carriers in pure semiconductors.
*   **CO2 (Behavior in Devices):** The number of carriers ($n_i$) dictates how much current can flow. This intrinsic behavior sets the baseline for how a semiconductor will react when we build devices like diodes or transistors, which involves controlling these carriers. For instance, a transistor works by using an external voltage to control the flow of carriers, and understanding the "starting point" ($n_i$) is vital.
*   **CO3 (Superconductivity/Dielectrics):** While not directly related, understanding the quantum mechanics of electron behavior in solids (like band gaps) is a common thread that runs through semiconductor physics, superconductivity, and dielectrics. The concept of bound vs. free electrons is key in all.
*   **CO4 & CO5 (Application/Experiments):** The knowledge of $n_i$ and its temperature dependence is used to design experiments to characterize semiconductor materials and to select materials for specific applications (e.g., silicon for high-temperature operation, germanium for certain infrared applications due to its smaller band gap).

### Summary and Key Takeaways

So, to wrap up our discussion on intrinsic carrier concentration:

*   An intrinsic semiconductor is a pure semiconductor material.
*   In intrinsic semiconductors, charge carriers (electrons and holes) are generated purely by thermal excitation.
*   In intrinsic semiconductors, the concentration of free electrons ($n$) is equal to the concentration of holes ($p$), and this value is denoted by $n_i$.
*   $n_i$ is highly dependent on temperature (increasing exponentially) and the band gap energy of the material (decreasing with increasing band gap).
*   The formula $n_i = N_c N_v \exp\left(-\frac{E_g}{2k_B T}\right)$ quantifies these relationships.
*   $n_i$ is the baseline for understanding the electrical properties of semiconductors and forms the foundation for studying doped (extrinsic) semiconductors and devices.

Understanding $n_i$ is like understanding how many people are naturally in a city. When you want to build a specific business (a device), you first need to know the natural population size to figure out how many more people you might need to attract or how your business will serve the existing population.

---

## Sample Questions with Answers

**1. Conceptual Question:** Explain why the intrinsic carrier concentration ($n_i$) increases with temperature in a semiconductor.

**Answer:** In a pure (intrinsic) semiconductor, charge carriers (free electrons and holes) are created when thermal energy is sufficient to break covalent bonds. As temperature increases, the atoms in the crystal lattice vibrate more vigorously. This increased thermal vibration provides more energy to the electrons in the valence band, increasing the probability of them overcoming the band gap energy ($E_g$) and jumping into the conduction band. Each such transition frees an electron and creates a hole. Therefore, as temperature rises, more electron-hole pairs are generated per unit volume, leading to a higher intrinsic carrier concentration ($n_i$). This is represented by the exponential term $\exp\left(-\frac{E_g}{2k_B T}\right)$ in the formula for $n_i$, where an increase in $T$ directly increases the value.

**2. Exam-Oriented Question:** A semiconductor material has a band gap of $E_g = 0.7$ eV. If its intrinsic carrier concentration at 300 K is $n_{i,300K}$, what would be its approximate intrinsic carrier concentration at 310 K, assuming $N_c$ and $N_v$ are constant over this small temperature range?

**Answer:**
The intrinsic carrier concentration is given by:
$n_i = A \exp\left(-\frac{E_g}{2k_B T}\right)$, where $A = N_c N_v$ is a constant.

We can write the ratio of $n_i$ at two different temperatures, $T_2$ and $T_1$:
$\frac{n_{i, T_2}}{n_{i, T_1}} = \frac{A \exp\left(-\frac{E_g}{2k_B T_2}\right)}{A \exp\left(-\frac{E_g}{2k_B T_1}\right)}$
$\frac{n_{i, T_2}}{n_{i, T_1}} = \exp\left(-\frac{E_g}{2k_B} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)\right)$

Given:
$T_1 = 300$ K
$T_2 = 310$ K
$E_g = 0.7$ eV
$k_B = 8.617 \times 10^{-5}$ eV/K

Calculate the term in the exponent:
$\frac{1}{T_2} - \frac{1}{T_1} = \frac{1}{310} - \frac{1}{300} = \frac{300 - 310}{310 \times 300} = \frac{-10}{93000} \approx -1.075 \times 10^{-4}$ K$^{-1}$

$-\frac{E_g}{2k_B} \left(\frac{1}{T_2} - \frac{1}{T_1}\right) = -\frac{0.7 \text{ eV}}{2 \times 8.617 \times 10^{-5} \text{ eV/K}} (-1.075 \times 10^{-4} \text{ K}^{-1})$
$= -\frac{0.7}{1.7234 \times 10^{-4}} (-1.075 \times 10^{-4})$
$\approx -4061.7 \times (-1.075 \times 10^{-4}) \approx 0.4367$

So, $\frac{n_{i, 310K}}{n_{i, 300K}} = \exp(0.4367) \approx 1.548$

Therefore, $n_{i, 310K} \approx 1.548 \times n_{i, 300K}$.
The intrinsic carrier concentration at 310 K is approximately 1.55 times its value at 300 K.

**3. Conceptual Question:** Which semiconductor material is likely to have a higher intrinsic carrier concentration at room temperature: Silicon (Si, $E_g \approx 1.1$ eV) or Germanium (Ge, $E_g \approx 0.7$ eV)? Explain why.

**Answer:** Germanium (Ge) will have a higher intrinsic carrier concentration at room temperature.
This is because the intrinsic carrier concentration ($n_i$) is exponentially dependent on the band gap energy ($E_g$). The formula $n_i = A \exp\left(-\frac{E_g}{2k_B T}\right)$ shows that $n_i$ is inversely related to $E_g$ in the exponent. A smaller band gap means less energy is required to break the covalent bonds and generate electron-hole pairs. Since Germanium has a smaller band gap (0.7 eV) compared to Silicon (1.1 eV), more electron-hole pairs will be thermally generated in Germanium at the same temperature, resulting in a higher $n_i$.
