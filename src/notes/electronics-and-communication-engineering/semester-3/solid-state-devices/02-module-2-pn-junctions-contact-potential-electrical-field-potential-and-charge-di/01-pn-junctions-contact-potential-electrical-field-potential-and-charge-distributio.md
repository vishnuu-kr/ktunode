---
title: "PN junctions : Contact potential, Electrical Field, Potential and Charge distribution at the junction, Biasing and Energy band diagrams, Ideal diode equation."
subject: "SOLID STATE DEVICES"
module: "Module 2: PN junctions : Contact potential, Electrical Field, Potential and Charge distribution at the junction, Biasing and Energy band diagrams, Ideal diode equation."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2b5"
status: "completed"
scrapedAt: "2026-05-23T17:47:33.967Z"
---
## Module 2: PN Junctions - Comprehensive Study Notes

This module delves into the fundamental physics and behavior of PN junctions, a cornerstone of solid-state devices. Understanding PN junctions is crucial for analyzing the operation of diodes, transistors, and many other semiconductor components.

**Learning Outcomes:**

*   Understand the formation of a PN junction and the resulting built-in potential and electric field.
*   Analyze the charge and potential distribution across a PN junction.
*   Explain the energy band diagrams of PN junctions under equilibrium and biased conditions.
*   Derive and understand the ideal diode equation and its implications.
*   Apply the concepts of PN junctions to explain device behavior under different biasing conditions.

**Course Outcomes Alignment:**

*   **CO1 (K3):** While not directly about equilibrium carrier concentration, understanding the PN junction requires implicitly understanding how doping levels affect carrier concentrations and their behavior at the junction.
*   **CO2 (K3):** Carrier transport mechanisms (diffusion and drift) are central to PN junction operation and current flow.
*   **CO3 (K3):** Deriving the diode equation and analyzing current components heavily relies on semiconductor physics principles.
*   **CO4 (K3):** Biasing conditions directly influence the PN junction's behavior, and this module focuses on analyzing these responses.
*   **CO5 (K2):** While not directly covered, a foundational understanding of PN junctions is a prerequisite for understanding scaling effects in more complex devices.

---

### 1. PN Junction Formation and Equilibrium Conditions

#### 1.1 What is a PN Junction?

A PN junction is formed by bringing into intimate contact a p-type semiconductor and an n-type semiconductor.

*   **p-type semiconductor:** Majority carriers are holes, minority carriers are electrons. Doped with trivalent impurities (e.g., Boron, Aluminum).
*   **n-type semiconductor:** Majority carriers are electrons, minority carriers are holes. Doped with pentavalent impurities (e.g., Phosphorus, Arsenic).

#### 1.2 The Process of Junction Formation

When a p-type and n-type semiconductor are brought together:

1.  **Diffusion:** Due to the concentration gradient, majority carriers diffuse across the junction.
    *   Holes from the p-side diffuse into the n-side.
    *   Electrons from the n-side diffuse into the p-side.
2.  **Recombination:** When diffusing carriers cross the junction, they encounter opposite-type carriers and recombine.
3.  **Formation of Depletion Region (Space Charge Region):**
    *   As holes diffuse from the p-side, they leave behind negatively charged acceptor ions ($A^-$) on the p-side, close to the junction.
    *   As electrons diffuse from the n-side, they leave behind positively charged donor ions ($D^+$) on the n-side, close to the junction.
    *   This region, depleted of mobile charge carriers, is called the **depletion region** or **space charge region**.
4.  **Built-in Electric Field ($E_{bi}$):** The accumulation of fixed positive charges on the n-side and negative charges on the p-side creates an electric field directed from the n-side to the p-side.
5.  **Contact Potential ($V_{bi}$ or $V_0$):** The built-in electric field opposes further diffusion. Equilibrium is reached when the electric field exerts a force on the carriers that exactly balances the diffusion tendency. The work done by this field in moving a charge across the junction is called the **contact potential** or **built-in potential**.

**Important Point:** At equilibrium, there is no net current flow across the junction. The diffusion current is balanced by a drift current.

#### 1.3 Charge Distribution at the Junction

*   **p-side (near junction):** Immobile negative acceptor ions ($A^-$).
*   **n-side (near junction):** Immobile positive donor ions ($D^+$).
*   **Depletion Region:** Contains only immobile ionized dopant atoms.

**Visual Representation (Charge Density):**

```
       ^ Charge Density
       |
       |      -ve (A-)             +ve (D+)
       |       *********           *********
-------|-------|*********|---------|*********|-------
       |       *********           *********
       |      p-side          Depletion Region      n-side
       |
       --------------------------------------------> Position
```

#### 1.4 Potential Distribution at the Junction

*   The electric field creates a potential difference across the depletion region.
*   The potential is higher on the n-side and lower on the p-side, creating the built-in potential $V_{bi}$.
*   This potential barrier prevents further net diffusion of majority carriers.

**Visual Representation (Potential):**

```
       ^ Potential
       |
       |   p-side (lower potential)              n-side (higher potential)
       |   ***********************           ***********************
-------|---|***********************|---------|***********************|-------
       |   ***********************           ***********************
       |      p-side          Depletion Region      n-side
       |                 (potential drop)
       |
       --------------------------------------------> Position

       Built-in Potential (V_bi) = Potential_n - Potential_p
```

#### 1.5 Electric Field Distribution at the Junction

*   The electric field is zero in the neutral p and n regions.
*   It is maximum at the metallurgical junction and decreases linearly (for an abrupt junction) to zero at the edges of the depletion region.
*   The direction of the electric field is from the n-side to the p-side.

**Visual Representation (Electric Field):**

```
       ^ Electric Field
       |
       |           +ve                -ve
       |           ^                  v
-------|-----------|------------------|-----------
       |           |                  |
       |      p-side          Depletion Region      n-side
       |          (E = 0)         (E < 0, max at center) (E = 0)
       |
       --------------------------------------------> Position
       (Conventionally, E points from +ve to -ve)
```

**Relationship between Electric Field and Potential:**
$E(x) = -\frac{dV(x)}{dx}$

The built-in potential can be calculated by integrating the electric field over the depletion region:
$V_{bi} = \int_{-x_p}^{x_n} E(x) dx$

---

### 2. Energy Band Diagrams at Equilibrium

The energy band diagram provides a powerful visual tool to understand the behavior of charge carriers in a semiconductor.

#### 2.1 Key Concepts

*   **Conduction Band (Ec):** Energy levels where electrons are free to move.
*   **Valence Band (Ev):** Energy levels where electrons are bound to atoms.
*   **Fermi Level (Ef):** Represents the energy level with a 50% probability of being occupied by an electron at absolute zero. In thermal equilibrium, the Fermi level is constant throughout the semiconductor.

#### 2.2 Energy Band Diagram of a PN Junction at Equilibrium

When a p-type and n-type semiconductor are joined:

1.  **Initial State (Before contact):**
    *   In the p-type, the Fermi level is closer to the valence band.
    *   In the n-type, the Fermi level is closer to the conduction band.
2.  **At Equilibrium (After contact):**
    *   To maintain a constant Fermi level throughout the system, the energy bands of the p-type material must align with those of the n-type material.
    *   This alignment causes the conduction band and valence band edges of the p-side to shift *up* in energy relative to the n-side.
    *   The difference in energy between the conduction bands (or valence bands) of the n-side and p-side is equal to the built-in potential ($V_{bi}$), but expressed as an energy difference ($qV_{bi}$).
    *   The depletion region is formed where the bands bend due to the electric field.

**Visual Representation:**

```
       ^ Energy
       |
       |  n-side                      p-side
       |     Ec ----------           Ec ----------
       |     /         \         /         \
       |    /           \       /           \
       |   Ef ---------- ----- Ef ---------- (Constant Ef)
       |  /             \   /             \
       | /               \ /               \
       |Ev ----------   Ev ----------
       |
       --------------------------------------------> Position
       (junction in the middle)

       Band Bending: Conduction band and valence band bend upwards on the p-side relative to the n-side.
       Energy difference (Ec_n - Ec_p) = Energy difference (Ev_n - Ev_p) = qV_bi
```

#### 2.3 Built-in Potential ($V_{bi}$) and its Relation to Doping

The built-in potential is a crucial parameter and is determined by the doping concentrations of the p and n regions. It can be derived using the Fermi-Dirac statistics and the condition of constant Fermi level.

For an abrupt junction:
$V_{bi} = \frac{kT}{q} \ln\left(\frac{N_a N_d}{n_i^2}\right)$

Where:
*   $k$ is Boltzmann's constant
*   $T$ is the absolute temperature
*   $q$ is the elementary charge
*   $N_a$ is the acceptor concentration in the p-region
*   $N_d$ is the donor concentration in the n-region
*   $n_i$ is the intrinsic carrier concentration

**Example:** If $N_a = 10^{17} \text{ cm}^{-3}$, $N_d = 10^{16} \text{ cm}^{-3}$, and $T = 300K$, then:
$V_{bi} \approx 0.0259 \ln\left(\frac{10^{17} \times 10^{16}}{(1.5 \times 10^{10})^2}\right) \approx 0.75 V$

**Important Point:** Higher doping concentrations lead to a higher built-in potential.

---

### 3. PN Junction Under Bias

Bias refers to applying an external voltage across the PN junction. This external voltage affects the width of the depletion region, the magnitude of the electric field, and the height of the potential barrier.

#### 3.1 Forward Bias

*   **Connection:** Positive terminal of the external voltage source is connected to the p-side, and the negative terminal to the n-side.
*   **Effect:** The applied voltage ($V_F$) opposes the built-in potential ($V_{bi}$).
*   **Potential Barrier:** The effective potential barrier is reduced to $(V_{bi} - V_F)$.
*   **Depletion Region:** The width of the depletion region decreases.
*   **Current Flow:**
    *   **Diffusion Current Dominant:** With a reduced potential barrier, majority carriers can easily diffuse across the junction.
    *   Holes from the p-side inject into the n-side, and electrons from the n-side inject into the p-side.
    *   These injected minority carriers then diffuse away from the junction and recombine.
    *   This results in a significant forward current.

**Energy Band Diagram (Forward Bias):**

```
       ^ Energy
       |
       |  n-side                      p-side
       |     Ec ----------           Ec ----------
       |     /         \         /         \
       |    /           \       /           \
       |   Ef ---------- ----- Ef ---------- (Ef splits, not constant)
       |  /             \   /             \
       | /               \ /               \
       |Ev ----------   Ev ----------
       |
       --------------------------------------------> Position
       (junction in the middle)

       Band Bending: Less band bending compared to equilibrium.
       New potential difference = V_bi - V_F
```

#### 3.2 Reverse Bias

*   **Connection:** Negative terminal of the external voltage source is connected to the p-side, and the positive terminal to the n-side.
*   **Effect:** The applied voltage ($V_R$) aids the built-in potential ($V_{bi}$).
*   **Potential Barrier:** The effective potential barrier is increased to $(V_{bi} + V_R)$.
*   **Depletion Region:** The width of the depletion region increases.
*   **Current Flow:**
    *   **Drift Current Dominant:** The increased potential barrier prevents diffusion of majority carriers.
    *   A small **reverse saturation current** flows due to the drift of minority carriers.
    *   Minority carriers (electrons in p-side, holes in n-side) are swept across the junction by the strong electric field.
    *   This current is largely independent of the reverse voltage magnitude (until breakdown).

**Energy Band Diagram (Reverse Bias):**

```
       ^ Energy
       |
       |  n-side                      p-side
       |     Ec ----------           Ec ----------
       |     /         \         /         \
       |    /           \       /           \
       |   Ef ---------- ----- Ef ---------- (Ef splits, not constant)
       |  /             \   /             \
       | /               \ /               \
       |Ev ----------   Ev ----------
       |
       --------------------------------------------> Position
       (junction in the middle)

       Band Bending: More band bending compared to equilibrium.
       New potential difference = V_bi + V_R
```

---

### 4. Ideal Diode Equation

The ideal diode equation mathematically describes the current-voltage (I-V) characteristics of a PN junction diode. It is derived by considering the diffusion of minority carriers across the depletion region and their subsequent recombination.

#### 4.1 Derivation (Conceptual Outline)

The total current across the junction is the sum of electron and hole currents. For an ideal diode, the current is primarily due to diffusion of minority carriers injected across the junction.

*   **Forward Current ($I_F$):** Primarily due to diffusion of majority carriers that become minority carriers after crossing the junction. This current increases exponentially with forward voltage.
*   **Reverse Current ($I_R$):** Primarily due to drift of minority carriers generated in the depletion region or diffusing from the neutral regions. This current is saturated at a low value.

#### 4.2 The Ideal Diode Equation

The total current $I$ flowing through the diode is given by:

$I = I_S \left( e^{\frac{qV}{nkT}} - 1 \right)$

Where:
*   $I$ is the total diode current.
*   $I_S$ is the **reverse saturation current**. It is a temperature-dependent parameter that represents the current when the diode is reverse biased. It depends on doping concentrations and intrinsic carrier concentration.
    $I_S \approx qA \left( \frac{D_p p_n}{L_p N_a} + \frac{D_n n_p}{L_n N_d} \right)$
    Where $A$ is the junction area, $D_p, D_n$ are diffusion coefficients, $p_n, n_p$ are minority carrier concentrations, $L_p, L_n$ are diffusion lengths.
*   $q$ is the magnitude of the elementary charge.
*   $V$ is the applied voltage across the diode (positive for forward bias, negative for reverse bias).
*   $n$ is the **ideality factor**. For an ideal diode, $n=1$. For real diodes, $n$ can range from 1 to 2, accounting for recombination in the depletion region (n=2) or other non-ideal effects.
*   $k$ is Boltzmann's constant.
*   $T$ is the absolute temperature in Kelvin.

#### 4.3 Analyzing the Ideal Diode Equation

*   **Forward Bias ($V \gg kT/q$, i.e., $V > 0$):**
    $I \approx I_S e^{\frac{qV}{nkT}}$
    The current increases exponentially with the forward voltage. A small increase in voltage leads to a large increase in current.
    *   For $n=1$, the current doubles for every ~18 mV increase in voltage at room temperature.

*   **Reverse Bias ($V \ll -kT/q$, i.e., $V < 0$):**
    $I \approx I_S (e^{-\frac{q|V|}{nkT}} - 1)$
    Since $e^{-\frac{q|V|}{nkT}}$ is very small, $I \approx -I_S$.
    This indicates a small, constant reverse current ($I_S$) flowing in the opposite direction, as predicted by the drift of minority carriers.

**Example:** A silicon PN junction diode with $I_S = 10^{-12}$ A and $n=1$ at room temperature (300K).
*   **Forward bias $V = 0.7V$:**
    $I = 10^{-12} \left( e^{\frac{0.0259 \times 0.7}{1}} - 1 \right) \approx 10^{-12} (e^{18.09} - 1) \approx 10^{-12} \times 6.5 \times 10^7 \approx 6.5 \times 10^{-5} \text{ A}$
*   **Reverse bias $V = -5V$:**
    $I = 10^{-12} \left( e^{\frac{0.0259 \times (-5)}{1}} - 1 \right) \approx 10^{-12} (e^{-0.1295} - 1) \approx 10^{-12} (0.878 - 1) \approx -0.122 \times 10^{-12} \text{ A} \approx -I_S$

**Important Points to Remember:**

*   The **built-in potential ($V_{bi}$)** is a direct consequence of charge diffusion and creates an internal electric field.
*   The **depletion region** is devoid of mobile charge carriers and is crucial for the rectifying behavior of the diode.
*   **Forward bias** reduces the potential barrier and depletion width, leading to large forward current.
*   **Reverse bias** increases the potential barrier and depletion width, leading to a small reverse saturation current.
*   The **ideal diode equation** accurately describes the current-voltage characteristics, with the ideality factor ($n$) accounting for non-ideal behavior.
*   The **reverse saturation current ($I_S$)** is highly temperature-dependent.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain the formation of the depletion region in a PN junction. What are the charges present in this region?

**Answer 1:**
When a p-type and n-type semiconductor are brought together, majority carriers diffuse across the junction due to the concentration gradient. Holes from the p-side diffuse into the n-side, and electrons from the n-side diffuse into the p-side. As these carriers diffuse, they leave behind immobile ionized dopant atoms. On the p-side, immobile negative acceptor ions ($A^-$) are uncovered. On the n-side, immobile positive donor ions ($D^+$) are uncovered. This region, depleted of mobile charge carriers and containing only these fixed ionized atoms, is called the depletion region or space charge region.

**Question 2:**
What is the built-in potential ($V_{bi}$)? How is it related to the doping concentrations of the p and n regions?

**Answer 2:**
The built-in potential ($V_{bi}$) is the potential difference that arises across the depletion region due to the electric field created by the immobile ionized dopant atoms. It represents the energy barrier that prevents further net diffusion of majority carriers. For an abrupt junction, it is given by $V_{bi} = \frac{kT}{q} \ln\left(\frac{N_a N_d}{n_i^2}\right)$. Higher doping concentrations ($N_a$, $N_d$) lead to a higher built-in potential.

**Question 3:**
Describe the energy band diagram of a PN junction under forward bias. How does it differ from the equilibrium band diagram?

**Answer 3:**
Under forward bias, the applied voltage opposes the built-in potential. This reduces the band bending. The energy difference between the conduction bands of the n-side and p-side decreases from $qV_{bi}$ to $q(V_{bi} - V_F)$. The potential barrier is lowered, allowing for significant diffusion of majority carriers and a large forward current. The Fermi level is no longer constant across the junction, but it is still used as a reference for potential.

**Question 4:**
A silicon PN junction diode has a reverse saturation current ($I_S$) of $10^{-15}$ A and an ideality factor ($n$) of 1.5. Calculate the diode current at a forward bias of 0.7V at room temperature (300K).

**Answer 4:**
Using the ideal diode equation: $I = I_S \left( e^{\frac{qV}{nkT}} - 1 \right)$
At $T = 300K$, $kT/q \approx 0.0259 V$.
$V = 0.7V$
$I_S = 10^{-15} A$
$n = 1.5$

$I = 10^{-15} \left( e^{\frac{0.7}{1.5 \times 0.0259}} - 1 \right)$
$I = 10^{-15} \left( e^{\frac{0.7}{0.03885}} - 1 \right)$
$I = 10^{-15} \left( e^{18.018} - 1 \right)$
$I \approx 10^{-15} \times (5.47 \times 10^7 - 1)$
$I \approx 5.47 \times 10^{-8} A$

**Question 5:**
What is the primary difference in charge carrier behavior between forward bias and reverse bias in a PN junction?

**Answer 5:**
In **forward bias**, majority carriers (holes from p-side, electrons from n-side) diffuse across the junction in large numbers, leading to a significant forward current. This is a diffusion-dominated current.

In **reverse bias**, the applied voltage aids the built-in potential, creating a wider depletion region and a larger potential barrier. This barrier prevents diffusion of majority carriers. A small reverse current flows due to the drift of minority carriers, which are swept across the junction by the electric field. This is a drift-dominated current.

---

**Textbook References:**

*   **Pierret, R. S. (1996). *Semiconductor device Fundamentals*. Pearson Education.** - This book provides a strong foundation in the physics of semiconductor devices, including detailed explanations of PN junctions, band diagrams, and the diode equation.
*   **Sze, S. M., & Lee, M. K. (2021). *Semiconductor Physics and Devices, 3ed, An Indian Adaptation*. Wiley.** - Sze's work is a classic in the field. This edition offers comprehensive coverage of PN junctions, their behavior under bias, and the mathematical derivations of key equations.
*   **Shur, M. (2019). *Physics of Semiconductor Devices*. Pearson Education.** - Shur's book offers a modern perspective and detailed physical insights into semiconductor device operation, including PN junctions.

These notes cover the essential aspects of PN junctions as outlined in the learning outcomes and align with the course outcomes by focusing on the physical principles, current transport, and behavior under biasing conditions. The practice questions reinforce understanding of these core concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
