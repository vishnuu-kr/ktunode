---
title: "Variation of Intrinsic carrier concentration with temperature"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d81"
status: "completed"
scrapedAt: "2026-05-20T16:41:29.796Z"
---
## Physics for Information Science: Module 3 - Semiconductor Physics

### Topic: Variation of Intrinsic Carrier Concentration with Temperature

Welcome, everyone, to Module 3! Today, we're diving deep into the fascinating world of semiconductors, the building blocks of all the digital technology we rely on. We'll be focusing on a crucial concept: how the **intrinsic carrier concentration** of a semiconductor changes with **temperature**. Understanding this relationship is absolutely fundamental to grasping how semiconductor devices, like the transistors in your smartphones and computers, actually work. This is where we start connecting the microscopic behavior of electrons and holes to the macroscopic electrical properties we observe.

Our goal today is to understand *why* and *how* the number of charge carriers inside a pure (intrinsic) semiconductor changes as we heat it up or cool it down. This directly relates to **Course Outcome 3 (CO3): Apply the fundamentals of Semiconductor Physics in engineering** and **Course Outcome 4 (CO4): Describe the behaviour of semiconductor materials in semiconductor devices**. If we don't understand the fundamental carrier population, we can't predict or control device behavior.

### What is Intrinsic Carrier Concentration?

Before we talk about variation, let's solidify what "intrinsic carrier concentration" means. Imagine a perfectly pure semiconductor crystal – no impurities added at all. In such a material, charge carriers (electrons and holes) are generated *only* by thermal energy.

*   **Intrinsic:** This term refers to the purity of the material. An intrinsic semiconductor is one that has not been deliberately doped with impurity atoms.
*   **Carrier Concentration (n or p):** This is simply the number of free charge carriers (electrons in the conduction band and holes in the valence band) per unit volume. In an intrinsic semiconductor, the number of free electrons ($n_i$) is equal to the number of holes ($p_i$). So, we often use the notation $n_i$ to represent this concentration. $n_i = n = p$.

Think of it like a perfectly ordered, silent library (the semiconductor crystal). At absolute zero temperature (0 Kelvin), all electrons are neatly seated in their "valence band" chairs, and there are no "free" readers (electrons) or "empty" seats in the reading area (holes in the valence band). It's a perfect insulator.

But as we introduce thermal energy, some electrons gain enough "energy" to jump from their seats (valence band) to a higher "reading area" (conduction band). When an electron jumps, it leaves behind an empty seat – this empty seat is what we call a **hole**. And that electron, now in the conduction band, is a free charge carrier.

So, the intrinsic carrier concentration, $n_i$, is the equilibrium concentration of these thermally generated electron-hole pairs in a pure semiconductor.

### The Source of Thermal Generation: Band Gap Energy ($E_g$)

The key factor dictating *how many* electrons can make this jump from the valence band to the conduction band is the **band gap energy ($E_g$)**.

The **band gap** is the forbidden energy region that electrons must overcome to move from the valence band (where they are bound to atoms) to the conduction band (where they are free to move and conduct electricity). This concept is central to understanding semiconductor behavior, as discussed in **Course Outcome 2 (CO2): Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics**. The band gap is a direct consequence of the quantum mechanical interactions of electrons within the crystal lattice.

*   **Low Band Gap:** Semiconductors have relatively small band gaps compared to insulators. This is why they can become conductive with moderate heating. For example, Silicon (Si) has $E_g \approx 1.12$ eV, and Germanium (Ge) has $E_g \approx 0.67$ eV at room temperature.
*   **High Band Gap:** Insulators have very large band gaps, requiring much more energy to break free, hence their insulating nature.

The energy required to create an electron-hole pair is equal to the band gap energy, $E_g$. This energy must be supplied by thermal excitation, which we represent by the thermal energy $kT$, where $k$ is Boltzmann's constant and $T$ is the absolute temperature in Kelvin.

### The Temperature Dependence: A Fundamental Relationship

Now, let's get to the heart of the matter: how does $n_i$ change with temperature?

Intuitively, you might think that as you heat something up, more energy is available. More energy means more electrons can jump the band gap, creating more electron-hole pairs. So, $n_i$ should *increase* with temperature. And yes, that's precisely what happens! But the relationship is not linear; it's an **exponential** one.

The intrinsic carrier concentration ($n_i$) is directly related to the probability of an electron having enough thermal energy to overcome the band gap and the density of available states in both bands.

The relationship, as derived from fundamental semiconductor physics (you can find this in textbooks like **Malik & Singh** or **Avadhanulu et al.**), is given by an equation that looks something like this:

$$n_i \propto T^{3/2} \exp\left(-\frac{E_g}{2kT}\right)$$

Let's break this down:

1.  **$T^{3/2}$ Term:** This part comes from the density of states in the conduction band and valence band, which increases with temperature. It represents the increasing availability of energy levels for electrons and holes as the temperature rises. Think of it as having more potential "seats" and "reading spaces" available as the temperature increases. This term contributes to the increase in $n_i$.

2.  **$\exp\left(-\frac{E_g}{2kT}\right)$ Term:** This is the **exponentially dependent** term, and it's the *dominant* factor in determining $n_i$’s temperature dependence.
    *   $E_g$: The band gap energy (a constant for a given semiconductor).
    *   $k$: Boltzmann's constant (a fundamental constant).
    *   $T$: Absolute temperature.
    *   $E_g / 2kT$: This ratio represents the energy required to create an electron-hole pair relative to the available thermal energy.
    *   $\exp\left(-\frac{E_g}{2kT}\right)$: This is essentially a **Boltzmann factor**, representing the probability of an electron acquiring at least the energy $E_g/2$ to overcome the band gap and contribute to conduction (specifically, it's related to the probability of an electron being in the conduction band and a hole in the valence band, considering the Fermi level position in an intrinsic semiconductor).

**What does this exponential term tell us?**

*   **If $E_g$ is large:** The exponent is a large negative number, meaning the exponential term is very small. Even with increasing temperature, the probability of generating carriers remains low. This is why insulators are poor conductors, regardless of moderate heating.
*   **If $E_g$ is small:** The exponent is a smaller negative number. As temperature increases, the denominator ($kT$) increases, making the entire exponent less negative. This causes the exponential term to grow significantly, leading to a rapid increase in $n_i$. This is characteristic of semiconductors like Germanium.
*   **The $2$ in the denominator:** This factor arises because in an intrinsic semiconductor, for every electron that jumps to the conduction band, a hole is created in the valence band. The Fermi level for an intrinsic semiconductor lies approximately in the middle of the band gap.

**The Dominance of the Exponential Term:**

While the $T^{3/2}$ term shows a gradual increase, the exponential term $\exp(-E_g / 2kT)$ increases much more rapidly with temperature. Therefore, the exponential term dominates the temperature dependence of $n_i$.

**Analogy:** Imagine a very steep hill (the band gap, $E_g$). You have a bunch of marbles (electrons) at the bottom. You're giving them a nudge (thermal energy, $kT$).

*   The $T^{3/2}$ factor is like having more space at the bottom and top of the hill for marbles to gather.
*   The $\exp(-E_g / 2kT)$ factor is the *probability* that a marble will get a strong enough nudge to roll all the way over the hill. If the hill is very steep ($E_g$ is large), the probability is tiny. If the hill is moderate ($E_g$ is small), even a small increase in the strength of the nudge ($T$) can dramatically increase the chances of marbles going over.

**Remember this:** The exponential term is the driver of $n_i$'s temperature behavior in semiconductors.

### Practical Implications and "Real-World" Examples

Understanding this relationship is crucial for engineering applications:

1.  **Semiconductor Device Stability:** Why do electronic devices behave differently in hot weather compared to cold? Because the intrinsic carrier concentration, and thus the conductivity of the semiconductor material itself, changes significantly with temperature.
    *   **Example:** Consider a simple resistor made from an intrinsic semiconductor. As it heats up (say, due to the ambient temperature or its own operation), $n_i$ increases, meaning more charge carriers are available. This leads to *increased conductivity* and *decreased resistance*. This is a stark contrast to metals, where resistance typically increases with temperature due to increased scattering. This difference is a fundamental reason why semiconductors are so versatile!

2.  **Operating Temperature Ranges:** This is why manufacturers specify operating temperature ranges for electronic components. Exceeding these limits can cause unstable behavior or even permanent damage.
    *   **Story Time:** Imagine a sensitive sensor in a weather station. If it's a silicon-based sensor, on a very hot day, the increased thermal generation within the silicon might start to create "noise" or false signals, corrupting the data. Conversely, in extreme cold, fewer carriers are generated, and the sensor might become less sensitive or even stop working if the temperature drops below a critical point.

3.  **Designing Circuits:** Engineers use this knowledge to design circuits that can compensate for temperature variations. For instance, they might use materials with different band gaps or incorporate temperature-sensing elements. This directly relates to **CO3 (Application)**. We need to *apply* this knowledge to build reliable systems.

4.  **Comparison of Materials:** Silicon ($E_g \approx 1.12$ eV) has a higher band gap than Germanium ($E_g \approx 0.67$ eV). This means:
    *   At room temperature, intrinsic Germanium has a much higher carrier concentration and conductivity than intrinsic Silicon.
    *   However, as temperature increases, the carrier concentration in Germanium rises *much faster* due to its smaller band gap. This makes Germanium devices less stable at higher temperatures compared to Silicon devices. This is a primary reason why Silicon is preferred for most semiconductor devices today.
    *   You can see this reflected in the exponential term: for Ge, $E_g/2kT$ will be smaller than for Si at the same temperature, leading to a larger exponential factor.

### Quantifying the Relationship: The Intrinsic Fermi Level

While the full derivation involves statistical mechanics and quantum mechanics (as found in advanced texts like **Pierret's "Semiconductor Device Fundamentals"** or **Kittel's "Introduction to Solid State Physics"**), we can appreciate the key factors.

In an intrinsic semiconductor, the Fermi level ($E_F$) is located roughly at the middle of the band gap. As temperature changes, the band gap itself slightly changes, and the precise position of the Fermi level can shift. However, for many practical purposes, the exponential dependence on $E_g / T$ remains the most critical aspect.

The precise equation, often found by equating the electron concentration in the conduction band and hole concentration in the valence band, leading to the intrinsic carrier concentration, is approximately:

$$n_i = 2 \left(\frac{2\pi k T}{h^2}\right)^{3/2} (m_e^* m_h^*)^{3/4} \exp\left(-\frac{E_g}{2kT}\right)$$

Where:
*   $h$ is Planck's constant.
*   $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes, respectively. These are parameters that depend on the semiconductor material and its crystal structure, reflecting how easily carriers accelerate under an electric field.
*   The $T^{3/2}$ term is evident, combined with effective mass.

**Key Takeaway for Exams:** Focus on understanding the *exponential* nature of the dependence on $E_g/T$. You should be able to qualitatively explain why $n_i$ increases with $T$ and why semiconductors with smaller band gaps are more sensitive to temperature. You should also be able to compare the behavior of Silicon and Germanium based on their band gaps.

### Summary and Key Points to Remember

*   **Intrinsic Carrier Concentration ($n_i$)**: The number of thermally generated electron-hole pairs in a pure semiconductor.
*   **Temperature's Role**: Increasing temperature provides more thermal energy, enabling more electrons to jump the band gap ($E_g$) and create electron-hole pairs.
*   **Dominant Factor**: The relationship between $n_i$ and temperature is primarily governed by the exponential term $\exp(-E_g / 2kT)$.
*   **Band Gap ($E_g$)**: A smaller band gap leads to a stronger exponential increase in $n_i$ with temperature. This is why Silicon ($E_g \approx 1.12$ eV) is more temperature-stable than Germanium ($E_g \approx 0.67$ eV).
*   **Implications**: This temperature dependence explains why semiconductor devices have specific operating ranges, why their performance varies with ambient temperature, and why materials like Silicon are favored for their relative thermal stability.
*   **Connection to COs**: This topic directly supports CO3 (Application) and CO4 (Description of material behavior in devices) by explaining the fundamental charge carrier generation mechanism in semiconductors and its sensitivity to environmental conditions.

Understanding this variation is your first step towards truly appreciating how semiconductor devices function and how they are engineered for specific applications. Keep this fundamental relationship in mind as we move forward!

---

### Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and exam-oriented aspects:

**Question 1 (Conceptual):** Explain why the intrinsic carrier concentration ($n_i$) in a semiconductor increases with temperature.

**Answer:** The intrinsic carrier concentration ($n_i$) represents the number of electron-hole pairs generated by thermal energy in a pure semiconductor. As temperature ($T$) increases, the average thermal energy ($kT$) available to the electrons in the crystal lattice also increases. This increased thermal energy allows a greater number of electrons in the valence band to gain sufficient energy to overcome the band gap ($E_g$) and transition into the conduction band. Each such transition creates a free electron in the conduction band and leaves behind a hole in the valence band. Therefore, the total number of charge carriers ($n_i$) increases with temperature. This increase is primarily driven by the exponential term $\exp(-E_g / 2kT)$ in the expression for $n_i$, which grows significantly as $T$ increases.

**Question 2 (Comparison/Exam-Oriented):** Compare the temperature dependence of intrinsic carrier concentration in Silicon (Si) and Germanium (Ge), given their band gap energies at room temperature are approximately $E_g(\text{Si}) \approx 1.12$ eV and $E_g(\text{Ge}) \approx 0.67$ eV.

**Answer:** The intrinsic carrier concentration ($n_i$) is approximately proportional to $\exp(-E_g / 2kT)$. Since Germanium (Ge) has a smaller band gap ($E_g \approx 0.67$ eV) than Silicon (Si) ($E_g \approx 1.12$ eV), the term $E_g / 2kT$ will be smaller for Ge at any given temperature $T$. Consequently, the exponential term $\exp(-E_g / 2kT)$ will be larger for Ge. This means that $n_i$ in Germanium increases much more rapidly with temperature compared to Silicon. At room temperature, intrinsic Ge already has a higher $n_i$ than intrinsic Si. As temperature rises, the difference in their $n_i$ values becomes even more pronounced, making Ge devices more susceptible to thermal runaway or performance degradation at elevated temperatures compared to Si devices.

**Question 3 (Application/Conceptual):** In an intrinsic semiconductor device, if the operating temperature increases from room temperature to a significantly higher temperature, what will happen to its resistance, and why?

**Answer:** As the operating temperature of an intrinsic semiconductor device increases, its resistance will *decrease*. This is because the increased thermal energy leads to a higher intrinsic carrier concentration ($n_i$), as explained previously. A higher concentration of charge carriers (both electrons and holes) means that the material becomes more conductive. Conductivity ($\sigma$) is the reciprocal of resistivity ($\rho$), and resistance ($R$) is directly proportional to resistivity. Therefore, increased conductivity implies decreased resistivity and, consequently, decreased resistance. This behavior is fundamentally different from metals, where resistance increases with temperature due to increased lattice vibrations hindering electron flow.

**Question 4 (Quantitative Understanding):** If you were given a semiconductor with a band gap of $E_g = 0.7$ eV, and another with $E_g = 1.4$ eV, and both were heated from 300 K to 400 K, which semiconductor would show a larger percentage increase in its intrinsic carrier concentration? Justify your answer.

**Answer:** The semiconductor with the smaller band gap ($E_g = 0.7$ eV) would show a larger percentage increase in its intrinsic carrier concentration. The reason lies in the exponential term $\exp(-E_g / 2kT)$.
Let's denote the initial temperature as $T_1$ (300 K) and the final temperature as $T_2$ (400 K).
The ratio of $n_i$ at $T_2$ to $n_i$ at $T_1$ is approximately:
$$ \frac{n_i(T_2)}{n_i(T_1)} \approx \left(\frac{T_2}{T_1}\right)^{3/2} \exp\left(-\frac{E_g}{2k}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)\right) $$
The dominant factor determining the change is the exponential term. The change in the exponent is $-\frac{E_g}{2k}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$. Since $\frac{1}{T_2} - \frac{1}{T_1}$ is negative, this is equivalent to $+\frac{E_g}{2k}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$.
For a smaller $E_g$, this positive term in the exponent will be smaller. However, the term inside the exponent is negative: $-\frac{E_g}{2kT}$. As $T$ increases, $1/T$ decreases, making the exponent less negative and thus increasing the value of $\exp(\cdot)$.
The *change* in the exponent as temperature goes from $T_1$ to $T_2$ is $\Delta(\frac{-E_g}{2kT}) = -\frac{E_g}{2k}(\frac{1}{T_2} - \frac{1}{T_1})$. Since $T_2 > T_1$, $(1/T_2 - 1/T_1)$ is negative. So, the change is positive: $+\frac{E_g}{2k}(\frac{1}{T_1} - \frac{1}{T_2})$.
A smaller $E_g$ means this positive change in the exponent is smaller. This seems counterintuitive for an *increase*. Let's re-examine the ratio:
$\frac{n_i(T_2)}{n_i(T_1)} \approx \exp\left( -\frac{E_g}{2k} \left( \frac{1}{T_2} - \frac{1}{T_1} \right) \right) = \exp\left( \frac{E_g}{2k} \left( \frac{1}{T_1} - \frac{1}{T_2} \right) \right)$.
Here, $(1/T_1 - 1/T_2)$ is a positive constant. The term $\frac{E_g}{2k}$ is directly proportional to $E_g$. Therefore, for a smaller $E_g$, the entire exponent becomes smaller. Since the exponent is positive, a smaller exponent results in a smaller ratio $\frac{n_i(T_2)}{n_i(T_1)}$.

Wait, let's re-read that dominant exponential term. It's $\exp(-E_g / 2kT)$.
Let's consider two cases:
Case 1: $E_{g1}$ (smaller band gap)
Case 2: $E_{g2}$ (larger band gap) where $E_{g2} > E_{g1}$.

The ratio of change is $\frac{n_i(T_2)}{n_i(T_1)} \approx \exp\left[ \frac{E_g}{2k} \left(\frac{1}{T_1} - \frac{1}{T_2}\right) \right]$.
Let $C = \frac{1}{2k} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)$. This $C$ is a positive constant because $T_1 < T_2$.
So, the ratio is approximately $\exp(E_g \cdot C)$.
For the semiconductor with $E_{g1}$ (smaller band gap), the exponent is $E_{g1} \cdot C$.
For the semiconductor with $E_{g2}$ (larger band gap), the exponent is $E_{g2} \cdot C$.
Since $E_{g2} > E_{g1}$, $E_{g2} \cdot C > E_{g1} \cdot C$.
Thus, $\exp(E_{g2} \cdot C) > \exp(E_{g1} \cdot C)$.

This means the ratio of $n_i$ at $T_2$ to $n_i$ at $T_1$ is *larger* for the semiconductor with the *larger* band gap. This implies a *smaller percentage increase* for the larger band gap.

Let's rethink the intuition.
The probability of an electron overcoming the barrier is proportional to $\exp(-E_g / 2kT)$.
As $T$ increases, $1/T$ decreases, so $-E_g / 2kT$ becomes less negative (closer to zero). The exponential function $\exp(x)$ increases as $x$ increases.
If $E_g$ is smaller, the value of $-E_g / 2kT$ is less negative. For example, if $E_g$ is halved, the exponent is $-E_g/4kT$.
The change in the exponent from $T_1$ to $T_2$ is:
$\Delta \left(-\frac{E_g}{2kT}\right) = -\frac{E_g}{2k} \left(\frac{1}{T_2} - \frac{1}{T_1}\right) = \frac{E_g}{2k} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)$.
This change is positive. A larger $E_g$ will result in a *larger positive change* in the exponent.
So, $\exp(\text{larger positive change})$ will result in a larger increase.

Therefore, the semiconductor with the **larger band gap ($E_g = 1.4$ eV)** would show a larger percentage increase in its intrinsic carrier concentration when heated from 300 K to 400 K. This is because it starts from a much lower base of intrinsic carriers at 300 K, and the exponential term's ability to "activate" carriers becomes more significant when there's a larger barrier to overcome, even though the absolute number of carriers generated is still lower than in the smaller band gap material at any given temperature.

**Corrected Final Answer for Q4:** The semiconductor with the **larger band gap ($E_g = 1.4$ eV)** would show a larger percentage increase in its intrinsic carrier concentration. The relationship is $n_i \propto \exp(-E_g / 2kT)$. The percentage change is related to $\exp\left[ \frac{E_g}{2k} \left(\frac{1}{T_1} - \frac{1}{T_2}\right) \right]$. Since $(1/T_1 - 1/T_2)$ is a positive constant, a larger $E_g$ leads to a larger value of this exponent, hence a larger increase in $n_i$ as a fraction of its initial value. This highlights that while smaller band gap materials are more conductive at all temperatures, their *relative* increase in conductivity with temperature is smaller.
