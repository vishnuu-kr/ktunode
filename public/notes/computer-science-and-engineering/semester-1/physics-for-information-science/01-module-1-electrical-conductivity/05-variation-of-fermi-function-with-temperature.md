---
title: "Variation of Fermi function with temperature"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 1: Electrical conductivity"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d67"
status: "completed"
scrapedAt: "2026-05-20T16:40:50.267Z"
---
## Physics for Information Science - Module 1: Electrical Conductivity

### Topic: Variation of Fermi Function with Temperature

**(Connecting to Course Outcomes)**

Welcome, everyone! Today, we're diving into a fascinating topic that bridges the microscopic world of electrons with the macroscopic behavior of materials that are fundamental to information science: the **Fermi function** and how it changes with **temperature**. You might be wondering, "How does the 'Fermi function' relate to electrical conductivity or quantum mechanics?" Well, that's precisely what we'll unravel.

This topic directly supports our understanding of:

*   **CO1: Explain electrical conductivity:** The Fermi function is absolutely crucial for understanding *why* some materials conduct electricity, *how much* they conduct, and *how* that conductivity changes with temperature. It tells us about the availability of electrons to carry charge.
*   **CO2: Explain the behavior of matter at the atomic and subatomic level through quantum mechanics:** The Fermi function is a direct consequence of quantum statistics – specifically, the Pauli Exclusion Principle. It describes the probability of finding an electron in a given energy state, which is a purely quantum mechanical concept.
*   **CO3: Apply the fundamentals of Semiconductor Physics in engineering:** Semiconductors, the heart of our digital world, owe their unique electrical properties to the Fermi function. Understanding its temperature dependence is key to designing transistors, diodes, and integrated circuits.

So, let's embark on this journey to understand this fundamental concept.

---

### 1. What is the Fermi Function? A Quick Refresher

Before we talk about its variation, let's remind ourselves what the Fermi function, often denoted as $F(E)$ or $f(E)$, actually represents. Imagine a vast stadium filled with people (electrons) and seats (energy states). Not all seats are occupied, and not all people are in seats. The Fermi function, in simple terms, tells us the **probability that an electron will occupy a given energy state at a certain temperature**.

Mathematically, it's given by:

$$
f(E) = \frac{1}{e^{(E - E_F) / (k_B T)} + 1}
$$

Where:
*   $f(E)$ is the probability of occupation of an energy state with energy $E$.
*   $E$ is the energy of the state we are considering.
*   $E_F$ is the **Fermi energy**. Think of this as the "highest occupied energy level" at absolute zero temperature, although it's more accurately defined as the energy level for which the probability of occupation is exactly 0.5. It's a characteristic of the material and the number of electrons.
*   $k_B$ is the **Boltzmann constant** (a very, very small number, around $1.38 \times 10^{-23}$ J/K). It relates temperature to energy.
*   $T$ is the **absolute temperature** in Kelvin.

**Key Points about the Fermi Function:**

*   **Quantum Statistics:** This formula arises from Fermi-Dirac statistics, which apply to identical fermions (like electrons) that cannot occupy the same quantum state simultaneously. This is the essence of the Pauli Exclusion Principle.
*   **Probability:** Remember, it's a probability, so its value always lies between 0 and 1. A value of 1 means the state is definitely occupied, 0 means it's definitely empty, and 0.5 means it's equally likely to be occupied or empty.

---

### 2. The Fermi Function at Absolute Zero (T = 0 K)

This is our baseline, the simplest case. At absolute zero, the universe is as "ordered" as it can get, at least for electrons.

Let's consider the formula again: $f(E) = \frac{1}{e^{(E - E_F) / (k_B T)} + 1}$

*   **If $E < E_F$:** The exponent $(E - E_F) / (k_B T)$ becomes a large negative number. As $T \to 0$, this term approaches $-\infty$. So, $e^{-\infty}$ is essentially 0.
    This makes $f(E) = \frac{1}{0 + 1} = 1$.
    This means all energy states *below* the Fermi energy are completely filled with electrons. It's like filling a glass of water from the bottom up – every possible space below the water level is occupied.

*   **If $E > E_F$:** The exponent $(E - E_F) / (k_B T)$ becomes a large positive number. As $T \to 0$, this term approaches $+\infty$. So, $e^{+\infty}$ is essentially $\infty$.
    This makes $f(E) = \frac{1}{\infty + 1} \approx 0$.
    This means all energy states *above* the Fermi energy are completely empty.

*   **If $E = E_F$:** The exponent is $(E_F - E_F) / (k_B \cdot 0)$, which is an indeterminate form $0/0$. However, considering the limit as $T \to 0$, we can see that the probability *approaches* 0.5. Many textbooks define $f(E_F) = 0.5$ even at $T=0$ as a limit.

**In summary for T=0 K:**
The Fermi function is a step function. It's 1 for all energies below $E_F$ and 0 for all energies above $E_F$. This perfectly reflects the Pauli Exclusion Principle: electrons fill up all available states from the lowest energy upwards, and once a state is filled, no other electron can occupy it.

**(Connecting to CO2: Quantum Mechanics)** This step-like behavior is a direct manifestation of quantum mechanics and the Pauli Exclusion Principle. It tells us that electrons are not randomly distributed; they have to follow strict rules about occupying energy levels.

---

### 3. The Fermi Function at Non-Zero Temperatures (T > 0 K)

Now, let's turn up the heat! What happens when we introduce thermal energy ($k_B T$)? This thermal energy can excite electrons, giving them enough "oomph" to jump to higher energy states.

Let's look at the Fermi function again: $f(E) = \frac{1}{e^{(E - E_F) / (k_B T)} + 1}$

The key player here is the term $(E - E_F) / (k_B T)$.

*   **Energies far below $E_F$ ($E \ll E_F$):**
    The term $(E - E_F)$ is large and negative. Even with a finite $T$, the exponent $(E - E_F) / (k_B T)$ remains a large negative number. $e^{\text{large negative}} \approx 0$.
    So, $f(E) \approx \frac{1}{0 + 1} = 1$.
    Electrons in states far below the Fermi energy are still almost certainly in their states. They have to overcome a significant energy barrier to be excited.

*   **Energies far above $E_F$ ($E \gg E_F$):**
    The term $(E - E_F)$ is large and positive. The exponent $(E - E_F) / (k_B T)$ remains a large positive number. $e^{\text{large positive}} \approx \infty$.
    So, $f(E) \approx \frac{1}{\infty + 1} \approx 0$.
    States far above the Fermi energy remain almost certainly empty.

*   **Energies *around* $E_F$:** This is where the action happens!
    When $E$ is close to $E_F$, the exponent $(E - E_F) / (k_B T)$ is close to zero.
    *   If $E = E_F$, the exponent is 0, and $e^0 = 1$.
        So, $f(E_F) = \frac{1}{1 + 1} = 0.5$.
        The Fermi energy remains the energy level with a 50% probability of occupation, regardless of temperature. This is a crucial point!

    *   Consider an energy $E$ that is a bit higher than $E_F$, say $E = E_F + \Delta E$, where $\Delta E$ is small.
        The exponent is $\Delta E / (k_B T)$. If $k_B T$ is comparable to $\Delta E$, this exponent will be a small positive number.
        $f(E) = \frac{1}{e^{\Delta E / (k_B T)} + 1}$. Since $e^{\text{small positive}} > 1$, the probability $f(E)$ will be slightly less than 0.5.

    *   Consider an energy $E$ that is a bit lower than $E_F$, say $E = E_F - \Delta E$, where $\Delta E$ is small.
        The exponent is $-\Delta E / (k_B T)$. This is a small negative number.
        $f(E) = \frac{1}{e^{-\Delta E / (k_B T)} + 1}$. Since $e^{\text{small negative}} < 1$, the probability $f(E)$ will be slightly greater than 0.5.

**What this means:**
As temperature increases, the sharp step function at $T=0$ becomes "smeared out" or "rounded." Electrons near the Fermi energy gain enough thermal energy to jump from states just below $E_F$ to states just above $E_F$.

Think of it like this: at absolute zero, it's a perfectly organized queue. At higher temperatures, people (electrons) near the front (Fermi energy) might get restless and move to other available spots (higher energy states), creating a less defined boundary between occupied and unoccupied states.

**The "smearing" is roughly over an energy range of a few $k_B T$.** This is a very important concept. For most materials at room temperature, $k_B T$ is a relatively small energy compared to the Fermi energy itself. This means the smearing is confined to a narrow band of energies around $E_F$.

**(Connecting to CO1: Electrical Conductivity)** This smearing is vital for conductivity! In conductors (like metals), the Fermi energy lies within a band of allowed energy states (the conduction band). At $T=0$, electrons fill states up to $E_F$. For conduction to happen, electrons need to move to slightly higher, *unoccupied* states. The Fermi function's "smearing" at $T>0$ means there are indeed unoccupied states just above $E_F$ that electrons can easily move into when an electric field is applied, allowing current to flow. The more "smearing," the more readily available these states are.

---

### 4. Visualizing the Variation: The Plot

Let's sketch what this looks like. We plot $f(E)$ on the y-axis against $E$ on the x-axis.

*   **At T = 0 K:** You'd see a vertical line at $E = E_F$. To the left of $E_F$, $f(E)=1$, and to the right, $f(E)=0$. (Although strictly speaking, it's a step, not a vertical line).

*   **At T > 0 K:** The graph looks like a slightly tilted "S" shape, or a sigmoid curve.
    *   For $E \ll E_F$, $f(E)$ is very close to 1.
    *   For $E \gg E_F$, $f(E)$ is very close to 0.
    *   At $E = E_F$, $f(E) = 0.5$.
    *   The transition from 1 to 0 is gradual and centered around $E_F$.
    *   As temperature **increases**, the "S" curve becomes **more spread out** (more gradual transition), but the point $f(E)=0.5$ at $E=E_F$ remains fixed. The tail at the top gets thinner, and the tail at the bottom gets thinner.

**(Exam Tip):** You might be asked to draw these plots or compare them at different temperatures. The key takeaway is the **softening** or **smearing** of the step function as T increases, confined to energies around $E_F$.

---

### 5. Connection to Semiconductors and Information Science

This isn't just abstract physics; it's the bedrock of the devices that power our information age.

*   **Metals:** In metals, $E_F$ lies within the conduction band. The smearing allows electrons to move into nearby empty states easily, leading to high conductivity. As temperature increases, the smearing increases, but also, the increased thermal vibrations of the lattice (phonons) scatter the moving electrons, *reducing* conductivity. So, for metals, conductivity generally *decreases* with increasing temperature. (This is important for CO1).

*   **Semiconductors:** This is where things get really interesting for information science. In intrinsic (pure) semiconductors, there's a band gap ($E_g$) between the valence band (where electrons are typically bound) and the conduction band (where they can move freely). The Fermi level $E_F$ typically lies somewhere in the middle of this band gap.
    *   At $T=0$ K, the valence band is full, the conduction band is empty. The material is an insulator.
    *   As temperature increases, the smearing of the Fermi function means that a small but significant number of electrons from the top of the valence band can gain enough thermal energy to jump across the band gap into the bottom of the conduction band. The Fermi function describes the *probability* that an electron has enough energy to make this jump.
    *   The number of electrons in the conduction band (and hence the conductivity) **increases dramatically** with temperature. This is because while the smearing effect is still small in terms of the *shape* of the Fermi function itself, the sheer number of available states in the conduction band and the thermal energy available means more electrons cross the gap. (Crucial for CO3 and CO4).

**Analogy:** Imagine a two-tiered stadium. The lower tier (valence band) is packed at $T=0$. The upper tier (conduction band) is empty. For a metal, the tiers are connected. For a semiconductor, there's a large gap between them. At higher temperatures, some people from the top row of the lower tier get enough energy to jump over the gap to the bottom row of the upper tier. The Fermi function tells us how likely that jump is for any given electron.

**Why is this important for Information Science?**
The temperature dependence of semiconductor conductivity is precisely what allows us to build transistors. A transistor acts as a switch or amplifier, controlling the flow of current. The fact that this control can be manipulated by temperature (and more importantly, by applied voltage, which indirectly influences the effective Fermi level and electron populations) is fundamental to digital logic gates and microprocessors. Understanding how temperature affects these electron distributions via the Fermi function is key to designing reliable electronic components.

**(Connecting to CO3 & CO4: Semiconductor Physics)** This section directly addresses how we apply semiconductor physics. The Fermi function's temperature variation explains why semiconductors go from being insulators at low temperatures to conductors at higher temperatures, and why their properties are so sensitive to temperature.

---

### 6. Quick Recall and Important Considerations

*   **Fermi Function:** Probability of occupying an energy state $E$. $f(E) = \frac{1}{e^{(E - E_F) / (k_B T)} + 1}$.
*   **At T=0:** Sharp step function (1 below $E_F$, 0 above $E_F$).
*   **At T>0:** Smeared-out transition around $E_F$.
*   **Fermi Energy ($E_F$):** Energy level with 50% occupation probability, regardless of temperature.
*   **Effect of Temperature Increase:** The "smearing" or "rounding" of the Fermi function's transition around $E_F$ increases. The occupied states below $E_F$ decrease slightly, and unoccupied states above $E_F$ increase slightly.
*   **Key Window:** The most significant changes occur in an energy window of about $3-5 k_B T$ around $E_F$.
*   **Conductivity Impact:** For metals, increased scattering dominates, decreasing conductivity. For semiconductors, increased carrier generation dominates, increasing conductivity.

**(Common Pitfall):** Students sometimes think $E_F$ shifts with temperature. While the *average* energy of the electron gas might change, the *definition* of $E_F$ as the 0.5 probability level means the Fermi energy itself is a reference point that doesn't move with temperature in this formulation. The *shape* around it changes.

---

### Sample Questions and Answers

**1. Conceptual Question:**
Explain why the Fermi function at absolute zero temperature behaves like a step function.

**Answer:**
At absolute zero ($T=0$ K), according to Fermi-Dirac statistics and the Pauli Exclusion Principle, electrons will fill all available energy states starting from the lowest energy level upwards. Once an energy state is occupied, no other electron can occupy it. This means all states with energy $E < E_F$ (Fermi energy) are completely filled ($f(E)=1$), and all states with energy $E > E_F$ are completely empty ($f(E)=0$). This creates a sharp, discontinuous "step" in the probability of occupation at $E_F$.

**2. Application Question:**
How does the variation of the Fermi function with temperature explain the difference in electrical conductivity behavior between metals and semiconductors as temperature increases?

**Answer:**
In **metals**, the Fermi energy ($E_F$) lies within the conduction band. At $T=0$, electrons fill states up to $E_F$. As temperature increases, the Fermi function smears out, allowing electrons to occupy slightly higher energy states that were previously empty. However, the dominant effect for metals is the increased thermal vibration of the lattice (phonons), which leads to greater scattering of electrons as they try to move. This increased scattering reduces conductivity.

In **semiconductors**, $E_F$ lies within the band gap. At low temperatures, very few electrons have enough thermal energy to jump from the valence band to the conduction band, so conductivity is low. As temperature increases, the Fermi function indicates a higher probability that electrons will acquire sufficient thermal energy ($k_B T$) to overcome the band gap ($E_g$) and move into the conduction band. This significant increase in the number of charge carriers (electrons in the conduction band and holes in the valence band) drastically increases conductivity, a behavior opposite to that of metals.

**3. Calculation/Understanding Question:**
If the Fermi energy of a material is $E_F = 5$ eV, and at a certain temperature, an electron has an energy $E = 5.1$ eV, what is the approximate probability that this electron occupies its state? (Assume $k_B T \approx 0.025$ eV at room temperature).

**Solution:**
We use the Fermi function formula: $f(E) = \frac{1}{e^{(E - E_F) / (k_B T)} + 1}$

Given:
$E = 5.1$ eV
$E_F = 5.0$ eV
$k_B T = 0.025$ eV

Calculate the exponent:
$\frac{E - E_F}{k_B T} = \frac{5.1 \text{ eV} - 5.0 \text{ eV}}{0.025 \text{ eV}} = \frac{0.1 \text{ eV}}{0.025 \text{ eV}} = 4$

Now, substitute into the Fermi function:
$f(E) = \frac{1}{e^{4} + 1}$

Calculate $e^4$:
$e^4 \approx 54.6$

So, $f(E) \approx \frac{1}{54.6 + 1} = \frac{1}{55.6} \approx 0.018$

**Answer:** The approximate probability that this electron occupies its state is about 0.018 or 1.8%. This shows that at room temperature, states even slightly above the Fermi energy have a very low probability of being occupied.
