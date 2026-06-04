---
title: "Equilibrium concentration of electrons and holes."
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ac"
status: "completed"
scrapedAt: "2026-05-23T17:47:28.400Z"
---
# SOLID STATE DEVICES

## Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

### Topic: Equilibrium Concentration of Electrons and Holes

This topic focuses on understanding the fundamental concentrations of free electrons and holes in a semiconductor material when it is in thermal equilibrium. This is a crucial starting point for analyzing the behavior of all semiconductor devices.

---

### Learning Outcomes:

*   **LO1:** Define and explain the concept of intrinsic carrier concentration ($n_i$) and its dependence on temperature.
*   **LO2:** Explain the origin of electrons and holes in intrinsic semiconductors and derive expressions for their equilibrium concentrations.
*   **LO3:** Explain the effect of doping on carrier concentrations in extrinsic semiconductors (n-type and p-type).
*   **LO4:** Apply the Law of Mass Action to relate electron and hole concentrations in equilibrium.
*   **LO5:** Understand the concept of the Fermi level and its position in intrinsic and extrinsic semiconductors.

---

### 1. Introduction to Semiconductors and Carrier Concentrations

Semiconductors are materials with electrical conductivity between that of conductors and insulators. Their unique property lies in their ability to control their conductivity through doping and external stimuli like electric fields or light.

*   **Charge Carriers:** In semiconductors, the primary charge carriers responsible for electrical conduction are **electrons** (negatively charged) and **holes** (effectively positively charged, representing the absence of an electron in the valence band).

*   **Equilibrium:** Thermal equilibrium refers to a state where there is no net flow of charge carriers or energy within the semiconductor material. The system is in a stable state with respect to temperature and chemical potential.

---

### 2. Intrinsic Semiconductors

An intrinsic semiconductor is a pure semiconductor material with no intentionally added impurities.

#### 2.1. Origin of Electrons and Holes

*   **Valence Band (VB):** The band of energy levels where electrons are typically bound to the atoms. At absolute zero temperature (0 K), all electrons are in the valence band, and the semiconductor behaves as an insulator.
*   **Conduction Band (CB):** The band of energy levels above the valence band. When an electron gains enough energy to move into the conduction band, it becomes a free charge carrier and can contribute to current flow.
*   **Band Gap ($E_g$):** The energy difference between the top of the valence band and the bottom of the conduction band. Electrons need to gain at least $E_g$ energy to transition from the valence band to the conduction band.

*   **Thermal Excitation:** At temperatures above absolute zero, thermal energy ($kT$, where $k$ is the Boltzmann constant and $T$ is the absolute temperature) can excite electrons from the valence band to the conduction band.
    *   When an electron moves from the valence band to the conduction band, it leaves behind a vacancy in the valence band. This vacancy is called a **hole**.
    *   Both the electron in the conduction band and the hole in the valence band are mobile charge carriers.

#### 2.2. Intrinsic Carrier Concentration ($n_i$)

In an intrinsic semiconductor, the number of electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$). This common concentration is called the **intrinsic carrier concentration**, denoted by $n_i$.

$$n = p = n_i$$

*   **Derivation (Conceptual):**
    The concentration of electrons in the conduction band ($n$) and holes in the valence band ($p$) can be derived using statistical mechanics, specifically Fermi-Dirac statistics. The general expressions are:

    $$n = N_c \cdot f(E_c)$$
    $$p = N_v \cdot (1 - f(E_v))$$

    Where:
    *   $N_c$: Effective density of states in the conduction band.
    *   $N_v$: Effective density of states in the valence band.
    *   $f(E)$: Fermi-Dirac distribution function, which gives the probability of an energy state $E$ being occupied by an electron.

    For electrons in the conduction band ($E_c$):
    $$f(E_c) = \frac{1}{1 + e^{(E_c - E_F)/(kT)}}$$
    Assuming $E_c - E_F \gg kT$ (non-degenerate case), $f(E_c) \approx e^{-(E_c - E_F)/(kT)}$.

    For holes in the valence band ($E_v$): The probability of a state being occupied by a hole is $1-f(E_v)$.
    $$1 - f(E_v) = 1 - \frac{1}{1 + e^{(E_v - E_F)/(kT)}} = \frac{e^{(E_v - E_F)/(kT)}}{1 + e^{(E_v - E_F)/(kT)}}$$
    Assuming $E_F - E_v \gg kT$ (non-degenerate case), $1 - f(E_v) \approx e^{-(E_F - E_v)/(kT)}$.

    Thus, for an intrinsic semiconductor where $E_F$ is near the middle of the band gap:
    $$n = N_c e^{-(E_c - E_F)/(kT)}$$
    $$p = N_v e^{-(E_F - E_v)/(kT)}$$

    In an intrinsic semiconductor, $n=p=n_i$. Multiplying these gives:
    $$n_i^2 = n \cdot p = N_c N_v e^{-(E_c - E_v)/(kT)} = N_c N_v e^{-E_g/(kT)}$$

    Therefore, the intrinsic carrier concentration is given by:
    $$n_i = \sqrt{N_c N_v} e^{-E_g/(2kT)}$$

    *   **$N_c$ and $N_v$ depend on temperature:** These terms increase with temperature approximately as $T^{3/2}$.
    *   **$E_g$ depends on temperature:** The band gap generally decreases with increasing temperature.

*   **Temperature Dependence of $n_i$**:
    The $e^{-E_g/(2kT)}$ term dominates the temperature dependence of $n_i$. As temperature increases, $e^{-E_g/(2kT)}$ increases significantly, leading to a rapid increase in $n_i$.

    *   **Example:** For Silicon (Si) at 300 K:
        *   $E_g \approx 1.12$ eV
        *   $N_c \approx 2.8 \times 10^{19} \text{ cm}^{-3}$
        *   $N_v \approx 1.0 \times 10^{19} \text{ cm}^{-3}$
        *   $n_i \approx 1.5 \times 10^{10} \text{ cm}^{-3}$

    *   **Example:** For Germanium (Ge) at 300 K:
        *   $E_g \approx 0.67$ eV
        *   $N_c \approx 1.0 \times 10^{19} \text{ cm}^{-3}$
        *   $N_v \approx 6.0 \times 10^{18} \text{ cm}^{-3}$
        *   $n_i \approx 2.4 \times 10^{13} \text{ cm}^{-3}$

    **Important Point:** $n_i$ is significantly lower than doping concentrations used in practical devices.

---

### 3. Extrinsic Semiconductors

Extrinsic semiconductors are created by intentionally adding impurities (dopants) to an intrinsic semiconductor to alter its conductivity.

#### 3.1. N-type Semiconductors

*   **Doping:** Created by adding **donor impurities** (e.g., Phosphorus (P), Arsenic (As) for Si). These atoms have more valence electrons than the host semiconductor atoms (e.g., P has 5, Si has 4).
*   **Donor Energy Level ($E_d$):** The extra electron from the donor atom is loosely bound and resides in an energy level slightly below the conduction band ($E_c$).
*   **Ionization:** At room temperature, thermal energy is sufficient to easily ionize the donor atoms, freeing their extra electrons into the conduction band.
*   **Majority and Minority Carriers:**
    *   **Electrons** are the **majority carriers**.
    *   **Holes** are the **minority carriers**.
*   **Carrier Concentrations:**
    *   Since donor atoms are typically introduced at concentrations much higher than $n_i$, and they readily donate electrons, the electron concentration ($n$) becomes approximately equal to the donor concentration ($N_D$).
    $$n \approx N_D$$
    *   The hole concentration ($p$) is then determined by the Law of Mass Action.

#### 3.2. P-type Semiconductors

*   **Doping:** Created by adding **acceptor impurities** (e.g., Boron (B), Gallium (Ga) for Si). These atoms have fewer valence electrons than the host semiconductor atoms (e.g., B has 3, Si has 4).
*   **Acceptor Energy Level ($E_a$):** The deficiency of an electron in the acceptor atom creates a state slightly above the valence band ($E_v$).
*   **Ionization:** Thermal energy allows an electron from the valence band to jump into the acceptor level, filling the vacancy. This leaves a hole in the valence band and an ionized acceptor (negative charge).
*   **Majority and Minority Carriers:**
    *   **Holes** are the **majority carriers**.
    *   **Electrons** are the **minority carriers**.
*   **Carrier Concentrations:**
    *   Since acceptor atoms are typically introduced at concentrations much higher than $n_i$, and they readily accept electrons (thereby creating holes), the hole concentration ($p$) becomes approximately equal to the acceptor concentration ($N_A$).
    $$p \approx N_A$$
    *   The electron concentration ($n$) is then determined by the Law of Mass Action.

---

### 4. Law of Mass Action

*   **Statement:** In a semiconductor in thermal equilibrium, the product of the electron concentration ($n$) and the hole concentration ($p$) is a constant, independent of doping concentration, and is equal to the square of the intrinsic carrier concentration ($n_i^2$).

    $$n \cdot p = n_i^2$$

    This is a fundamental relationship that holds true for both intrinsic and extrinsic semiconductors in thermal equilibrium.

*   **Derivation (Conceptual):** This law arises from the requirement that the total number of electrons and holes must be conserved and related through the equilibrium statistics. It can be rigorously derived from the expressions for $n$ and $p$ derived using Fermi-Dirac statistics, assuming non-degenerate conditions.

*   **Implications:**
    *   **N-type:** If $n \approx N_D$ (and $N_D \gg n_i$), then $p = \frac{n_i^2}{n} \approx \frac{n_i^2}{N_D}$. The hole concentration is suppressed by the presence of a large number of electrons (minority carrier suppression).
    *   **P-type:** If $p \approx N_A$ (and $N_A \gg n_i$), then $n = \frac{n_i^2}{p} \approx \frac{n_i^2}{N_A}$. The electron concentration is suppressed by the presence of a large number of holes (minority carrier suppression).

---

### 5. Fermi Level ($E_F$)

The Fermi level is a conceptual energy level representing the **chemical potential** of the semiconductor. In equilibrium, it represents the energy level at which the probability of occupation by an electron is 1/2. However, its position is crucial for determining carrier concentrations.

#### 5.1. Fermi Level in Intrinsic Semiconductors

*   In an intrinsic semiconductor, the Fermi level ($E_F$) lies approximately in the **middle of the band gap**.
    $$E_F \approx \frac{E_c + E_v}{2}$$
*   At this position, the number of electrons excited to the conduction band is equal to the number of holes created in the valence band.

#### 5.2. Fermi Level in Extrinsic Semiconductors

*   **N-type Semiconductor:** When donor impurities are added, they contribute extra electrons, shifting the Fermi level **upwards**, closer to the conduction band.
    $$E_c - E_F \ll E_g/2$$
    The closer $E_F$ is to $E_c$, the higher the electron concentration ($n$).

*   **P-type Semiconductor:** When acceptor impurities are added, they create vacancies (holes), shifting the Fermi level **downwards**, closer to the valence band.
    $$E_F - E_v \ll E_g/2$$
    The closer $E_F$ is to $E_v$, the higher the hole concentration ($p$).

*   **Quantifying the Fermi Level (Non-degenerate case):**
    *   **N-type:**
        $$n = N_c e^{-(E_c - E_F)/(kT)}$$
        $$E_c - E_F = kT \ln\left(\frac{N_c}{n}\right)$$
        Since $n \approx N_D$,
        $$E_c - E_F \approx kT \ln\left(\frac{N_c}{N_D}\right)$$

    *   **P-type:**
        $$p = N_v e^{-(E_F - E_v)/(kT)}$$
        $$E_F - E_v = kT \ln\left(\frac{N_v}{p}\right)$$
        Since $p \approx N_A$,
        $$E_F - E_v \approx kT \ln\left(\frac{N_v}{N_A}\right)$$

**Important Point:** The position of the Fermi level dictates the equilibrium carrier concentrations. It is a direct consequence of the doping and temperature.

---

### 6. Effect of Temperature on Carrier Concentrations

*   **Intrinsic Semiconductor:** As discussed, $n_i$ increases rapidly with temperature due to thermal excitation across the band gap.

*   **Extrinsic Semiconductor:**
    *   **Low Temperatures (Freeze-out region):** At very low temperatures, not all dopant atoms are ionized. The carrier concentration is limited by the ionization of dopants. As temperature increases in this region, carrier concentration increases.
    *   **Intermediate Temperatures (Extrinsic region):** At typical operating temperatures (e.g., room temperature), all dopant atoms are ionized. The carrier concentration is dominated by the dopant concentration ($n \approx N_D$ or $p \approx N_A$). $n_i$ is still much smaller than $N_D$ or $N_A$.
    *   **High Temperatures (Intrinsic region):** At very high temperatures, thermal generation of electron-hole pairs ($n_i$) becomes significant and eventually dominates over the doping concentration. In this region, the semiconductor starts to behave like an intrinsic semiconductor, and $n \approx p \approx n_i$.

**Visualizing the effect:** A plot of $\log(n)$ or $\log(p)$ versus $1/T$ will show these three regions.

---

### 7. Carrier Concentration in Degenerate Semiconductors

*   **Degeneracy:** Occurs when the Fermi level lies within the conduction band (n-type) or valence band (p-type). This happens at very high doping concentrations or very low temperatures.
*   **Approximation Breakdown:** The non-degenerate approximations ($E_c - E_F \gg kT$ and $E_F - E_v \gg kT$) used to derive the simple expressions for $n$ and $p$ are no longer valid.
*   **More Complex Calculations:** The Fermi-Dirac distribution function must be used directly, often involving integration of density of states.

---

### Alignment with Course Outcomes:

*   **CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.**
    *   This topic directly addresses CO1 by introducing the concepts of electron and hole concentrations and their dependence on the Fermi level, which is derived from Fermi-Dirac statistics. The formulas for $n$ and $p$ are direct applications of this.

*   **CO2: State different carrier transport mechanisms in extrinsic semiconductors and obtain the current densities due to this transport.**
    *   While this topic focuses on equilibrium concentrations, these concentrations are the *basis* for understanding transport. Knowing the equilibrium concentrations ($n$ and $p$) is essential for calculating drift and diffusion currents later.

*   **CO3: Apply the concept of semiconductor physics to solve the current components in semiconductor devices.**
    *   Similar to CO2, the equilibrium carrier concentrations are foundational. Without understanding $n$ and $p$ in different regions of a device, one cannot calculate current components.

*   **CO4: Analyze the response of semiconductor devices for different biasing conditions.**
    *   Biasing conditions perturb the equilibrium. Understanding the equilibrium state is the first step to understanding how changes in bias alter carrier concentrations and thus device response.

*   **CO5: Outline the effects of scaling in semiconductor devices.**
    *   Scaling can lead to higher doping concentrations, potentially pushing semiconductors into degenerate regimes, which is touched upon in this topic.

---

### Key Concepts and Definitions:

*   **Electron:** Negatively charged mobile carrier in the conduction band.
*   **Hole:** Positively charged mobile carrier (absence of an electron in the valence band).
*   **Valence Band (VB):** Energy band where electrons are bound to atoms.
*   **Conduction Band (CB):** Energy band where electrons are free to move.
*   **Band Gap ($E_g$):** Energy difference between VB and CB.
*   **Intrinsic Semiconductor:** Pure semiconductor.
*   **Extrinsic Semiconductor:** Doped semiconductor.
*   **Doping:** Intentional addition of impurities.
*   **Donor Impurity:** Adds extra electrons (e.g., Group V in Si).
*   **Acceptor Impurity:** Creates vacancies (holes) (e.g., Group III in Si).
*   **Intrinsic Carrier Concentration ($n_i$):** Equilibrium concentration of electrons (and holes) in an intrinsic semiconductor.
*   **Law of Mass Action:** $n \cdot p = n_i^2$ (in equilibrium).
*   **Fermi Level ($E_F$):** Chemical potential; energy level with 1/2 occupation probability; its position dictates carrier concentrations.
*   **Majority Carriers:** Carriers present in higher concentration.
*   **Minority Carriers:** Carriers present in lower concentration.
*   **Degeneracy:** Fermi level lies within a band.

---

### Important Points to Remember:

*   $n_i$ increases significantly with temperature.
*   The Law of Mass Action ($n \cdot p = n_i^2$) is fundamental for equilibrium carrier concentrations.
*   Doping shifts the Fermi level: Up towards $E_c$ for n-type, down towards $E_v$ for p-type.
*   In extrinsic semiconductors, majority carrier concentration is approximately equal to the dopant concentration ($N_D$ or $N_A$) at typical operating temperatures.
*   Minority carrier concentration is suppressed by doping ($p \approx n_i^2/N_D$ in n-type, $n \approx n_i^2/N_A$ in p-type).
*   At very high temperatures, extrinsic semiconductors behave like intrinsic semiconductors.
*   The position of the Fermi level is a crucial indicator of the semiconductor's electrical properties.

---

### Practice Questions/Exercises:

**Question 1:**
Calculate the intrinsic carrier concentration ($n_i$) for Silicon at 300 K and 500 K. Assume the band gap energy ($E_g$) of Silicon is $1.12$ eV at 300 K and $1.05$ eV at 500 K. Assume $N_c = N_v = 1.0 \times 10^{19} T^{3/2} \text{ cm}^{-3}$. Use $k = 8.617 \times 10^{-5}$ eV/K.

**Answer 1:**
The formula for $n_i$ is $n_i = \sqrt{N_c N_v} e^{-E_g/(2kT)}$.
Since $N_c = N_v$, $n_i = N_c e^{-E_g/(2kT)}$.

*   **At 300 K:**
    *   $T = 300$ K
    *   $E_g = 1.12$ eV
    *   $N_c = 1.0 \times 10^{19} (300)^{3/2} \approx 1.0 \times 10^{19} \times 5196 \approx 5.196 \times 10^{22} \text{ cm}^{-3}$
    *   $kT = (8.617 \times 10^{-5} \text{ eV/K}) \times 300 \text{ K} \approx 0.02585$ eV
    *   $\frac{E_g}{2kT} = \frac{1.12 \text{ eV}}{2 \times 0.02585 \text{ eV}} \approx 21.66$
    *   $e^{-E_g/(2kT)} = e^{-21.66} \approx 1.08 \times 10^{-10}$
    *   $n_i = (5.196 \times 10^{22}) \times (1.08 \times 10^{-10}) \approx 5.61 \times 10^{12} \text{ cm}^{-3}$.
    *   *(Note: Using more precise values for $N_c$ and $N_v$ for Si, typically $N_c \approx 2.8 \times 10^{19} \text{ cm}^{-3}$ and $N_v \approx 1.0 \times 10^{19} \text{ cm}^{-3}$ at 300K, leads to the known $n_i \approx 1.5 \times 10^{10} \text{ cm}^{-3}$. The provided $N_c=N_v$ and the $T^{3/2}$ factor are approximations. For the purpose of this calculation, we follow the given formula.)*

*   **At 500 K:**
    *   $T = 500$ K
    *   $E_g = 1.05$ eV
    *   $N_c = 1.0 \times 10^{19} (500)^{3/2} \approx 1.0 \times 10^{19} \times 11180 \approx 1.118 \times 10^{23} \text{ cm}^{-3}$
    *   $kT = (8.617 \times 10^{-5} \text{ eV/K}) \times 500 \text{ K} \approx 0.043085$ eV
    *   $\frac{E_g}{2kT} = \frac{1.05 \text{ eV}}{2 \times 0.043085 \text{ eV}} \approx 12.18$
    *   $e^{-E_g/(2kT)} = e^{-12.18} \approx 5.18 \times 10^{-6}$
    *   $n_i = (1.118 \times 10^{23}) \times (5.18 \times 10^{-6}) \approx 5.79 \times 10^{17} \text{ cm}^{-3}$.

**Observation:** $n_i$ increases significantly with temperature.

**Question 2:**
A Silicon sample is doped with $10^{17} \text{ cm}^{-3}$ Arsenic atoms. Assuming complete ionization and $T = 300$ K, calculate the equilibrium concentration of electrons and holes. Assume $n_i = 1.5 \times 10^{10} \text{ cm}^{-3}$.

**Answer 2:**
This is an n-type semiconductor due to Arsenic (a donor impurity).
Donor concentration $N_D = 10^{17} \text{ cm}^{-3}$.
Assuming complete ionization, the electron concentration $n \approx N_D$.
$n \approx 10^{17} \text{ cm}^{-3}$.

Using the Law of Mass Action, $n \cdot p = n_i^2$:
$p = \frac{n_i^2}{n} = \frac{(1.5 \times 10^{10} \text{ cm}^{-3})^2}{10^{17} \text{ cm}^{-3}}$
$p = \frac{2.25 \times 10^{20} \text{ cm}^{-6}}{10^{17} \text{ cm}^{-3}} = 2.25 \times 10^{3} \text{ cm}^{-3}$.

So, $n \approx 10^{17} \text{ cm}^{-3}$ (majority carriers) and $p \approx 2.25 \times 10^{3} \text{ cm}^{-3}$ (minority carriers).

**Question 3:**
A Silicon sample has a Fermi level $0.2$ eV above the valence band ($E_v$) at 300 K. If $N_v = 1.0 \times 10^{19} \text{ cm}^{-3}$ and $n_i = 1.5 \times 10^{10} \text{ cm}^{-3}$, calculate the hole concentration ($p$).

**Answer 3:**
Given $E_F - E_v = 0.2$ eV.
The hole concentration is given by $p = N_v e^{-(E_F - E_v)/(kT)}$.
We know $kT$ at 300 K is approximately $0.02585$ eV.
$p = (1.0 \times 10^{19} \text{ cm}^{-3}) \times e^{-(0.2 \text{ eV})/(0.02585 \text{ eV})}$
$p = (1.0 \times 10^{19} \text{ cm}^{-3}) \times e^{-7.737}$
$p \approx (1.0 \times 10^{19} \text{ cm}^{-3}) \times (4.34 \times 10^{-4})$
$p \approx 4.34 \times 10^{15} \text{ cm}^{-3}$.

This is a p-type semiconductor where the hole concentration is $4.34 \times 10^{15} \text{ cm}^{-3}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Semiconductor device Fundamentals by Robert Pierret:** Chapter 2 (Carrier Concentrations) provides a detailed treatment of intrinsic and extrinsic carrier statistics, including derivations using Fermi-Dirac distribution.
*   **Physics of Semiconductor Devices by Michael Shur:** Chapter 1 and 2 cover the basics of semiconductor physics, including carrier concentrations and the Fermi level.
*   **Semiconductor Physics and Devices, 3ed, An Indian Adaptation by S.M. Sze, M.K. Lee:** Chapter 2 is dedicated to carrier concentrations and the Fermi level, offering clear explanations and examples.
*   **Semiconductor Physics and Devices by Neamen:** Chapter 2 (Properties of the Semiconductor in Equilibrium) is highly relevant, covering intrinsic and extrinsic semiconductors, carrier concentrations, and the Fermi level.
*   **Physics of Semiconductor Devices by Sze S.M:** Chapter 1 (Properties of Matter and Semiconductor Materials) and Chapter 2 (The p-n Junction Diode) discuss the fundamental concepts leading to equilibrium carrier concentrations.

---