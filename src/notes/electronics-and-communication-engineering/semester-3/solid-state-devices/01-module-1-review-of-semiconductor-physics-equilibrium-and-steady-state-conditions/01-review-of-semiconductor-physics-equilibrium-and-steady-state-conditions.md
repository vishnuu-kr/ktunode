---
title: "Review of Semiconductor physics: Equilibrium and steady state conditions"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2a9"
status: "completed"
scrapedAt: "2026-05-23T17:47:26.281Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics

## Topic: Equilibrium and Steady State Conditions

This module provides a foundational review of semiconductor physics, focusing on carrier behavior under equilibrium and steady-state conditions. This knowledge is crucial for understanding the operation of various solid-state devices.

---

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the concept of intrinsic and extrinsic semiconductors.
*   Explain carrier generation and recombination processes.
*   Apply Fermi-Dirac statistics to determine carrier concentrations.
*   Describe carrier transport mechanisms (drift and diffusion).
*   Analyze current flow in semiconductors under equilibrium and steady-state conditions.

---

### Key Concepts and Definitions:

**1. Intrinsic Semiconductors:**

*   **Definition:** A semiconductor in its purest form, without any significant impurity atoms.
*   **Characteristics:**
    *   The number of electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$).
    *   $n = p = n_i$, where $n_i$ is the intrinsic carrier concentration.
    *   Carrier concentration is highly dependent on temperature.
*   **Band Gap ($E_g$):** The energy difference between the valence band maximum and the conduction band minimum.
*   **Intrinsic Carrier Concentration ($n_i$):**
    *   $n_i = \sqrt{NC \cdot NV} \exp\left(-\frac{E_g}{2k_BT}\right)$
        *   $NC$: Effective density of states in the conduction band.
        *   $NV$: Effective density of states in the valence band.
        *   $k_B$: Boltzmann constant ($1.38 \times 10^{-23}$ J/K).
        *   $T$: Absolute temperature in Kelvin.
    *   This equation highlights the exponential dependence of $n_i$ on temperature. As temperature increases, $n_i$ increases significantly, leading to more thermally generated electron-hole pairs.
*   **Example:** Pure Silicon (Si) and Germanium (Ge) at room temperature are intrinsic semiconductors.

**2. Extrinsic Semiconductors:**

*   **Definition:** Semiconductors that have been intentionally doped with impurity atoms to increase their conductivity.
*   **Doping:** The process of adding impurities to a semiconductor.
*   **Types of Extrinsic Semiconductors:**
    *   **n-type Semiconductor:** Doped with pentavalent impurities (e.g., Phosphorus (P), Arsenic (As), Antimony (Sb)).
        *   **Donor Atoms:** Impurity atoms that donate an extra electron to the conduction band. These electrons are the majority carriers.
        *   **Minority Carriers:** Holes in n-type semiconductors.
        *   **Concentration:** Electron concentration ($n$) >> Hole concentration ($p$).
        *   $n \approx N_D$, where $N_D$ is the donor concentration.
    *   **p-type Semiconductor:** Doped with trivalent impurities (e.g., Boron (B), Aluminum (Al), Gallium (Ga)).
        *   **Acceptor Atoms:** Impurity atoms that accept an electron from the valence band, creating a hole. These holes are the majority carriers.
        *   **Minority Carriers:** Electrons in p-type semiconductors.
        *   **Concentration:** Hole concentration ($p$) >> Electron concentration ($n$).
        *   $p \approx N_A$, where $N_A$ is the acceptor concentration.

**3. Carrier Statistics (Fermi-Dirac Statistics):**

*   **Fermi-Dirac Distribution Function ($f(E)$):** Describes the probability that an energy state $E$ will be occupied by an electron at a given temperature $T$.
    *   $f(E) = \frac{1}{1 + \exp\left(\frac{E - E_F}{k_BT}\right)}$
        *   $E_F$: Fermi level (the energy level where the probability of occupation is 0.5).
*   **Fermi Level ($E_F$):**
    *   In intrinsic semiconductors, $E_F$ is located near the middle of the band gap.
    *   In n-type semiconductors, $E_F$ is located closer to the conduction band edge ($E_c$).
    *   In p-type semiconductors, $E_F$ is located closer to the valence band edge ($E_v$).
*   **Carrier Concentration Calculation:**
    *   **Electron Concentration ($n$):**
        *   $n = \int_{E_c}^{\infty} g_c(E) f(E) dE$
            *   $g_c(E)$: Density of states in the conduction band.
        *   **Approximation for non-degenerate semiconductors (where $E_c - E_F \gg k_BT$):**
            *   $n = NC \exp\left(-\frac{E_c - E_F}{k_BT}\right)$
    *   **Hole Concentration ($p$):**
        *   $p = \int_{-\infty}^{E_v} g_v(E) [1 - f(E)] dE$
            *   $g_v(E)$: Density of states in the valence band.
        *   **Approximation for non-degenerate semiconductors (where $E_F - E_v \gg k_BT$):**
            *   $p = NV \exp\left(-\frac{E_F - E_v}{k_BT}\right)$
*   **Mass Action Law:**
    *   For any semiconductor in thermal equilibrium, the product of electron and hole concentrations is constant and equal to the square of the intrinsic carrier concentration.
    *   $n \cdot p = n_i^2$
    *   This law is fundamental for calculating carrier concentrations in extrinsic semiconductors.

**4. Carrier Transport Mechanisms:**

*   **Drift:** The movement of charge carriers due to an applied electric field ($\mathcal{E}$).
    *   **Drift Velocity ($v_d$):** The average velocity of carriers in the presence of an electric field.
        *   For electrons: $v_{dn} = -\mu_n \mathcal{E}$ (where $\mu_n$ is electron mobility).
        *   For holes: $v_{dp} = \mu_p \mathcal{E}$ (where $\mu_p$ is hole mobility).
    *   **Drift Current Density ($J_{drift}$):**
        *   For electrons: $J_{dn} = q n v_{dn} = q n \mu_n \mathcal{E}$
        *   For holes: $J_{dp} = q p v_{dp} = q p \mu_p \mathcal{E}$
        *   Total drift current density: $J_{drift} = J_{dn} + J_{dp} = q (n \mu_n + p \mu_p) \mathcal{E}$
    *   **Conductivity ($\sigma$):**
        *   $\sigma = q (n \mu_n + p \mu_p)$
    *   **Mobility ($\mu$):** A measure of how easily charge carriers move through a material under an electric field. It depends on temperature, doping concentration, and scattering mechanisms.
        *   **Scattering Mechanisms:** Lattice scattering (phonon scattering) and impurity scattering.
            *   Lattice scattering increases with temperature, reducing mobility.
            *   Impurity scattering decreases with temperature (carriers are less energetic and less likely to be deflected by ionized impurities), increasing mobility.
*   **Diffusion:** The movement of charge carriers from a region of high concentration to a region of low concentration. This occurs due to the random thermal motion of carriers.
    *   **Diffusion Current Density ($J_{diff}$):**
        *   For electrons: $J_{dn} = q D_n \frac{dn}{dx}$
        *   For holes: $J_{dp} = -q D_p \frac{dp}{dx}$
            *   $D_n$: Diffusion coefficient for electrons.
            *   $D_p$: Diffusion coefficient for holes.
            *   $\frac{dn}{dx}$ and $\frac{dp}{dx}$: Concentration gradients.
    *   **Einstein Relation:** Relates the diffusion coefficient to mobility.
        *   $\frac{D_n}{\mu_n} = \frac{D_p}{\mu_p} = \frac{k_BT}{q}$
    *   **Continuity Equation:** Describes the conservation of charge carriers, accounting for generation, recombination, and current flow.
        *   $\frac{\partial n}{\partial t} = g_n - R_n + \frac{1}{q} \nabla \cdot J_{dn}$
        *   $\frac{\partial p}{\partial t} = g_p - R_p - \frac{1}{q} \nabla \cdot J_{dp}$
            *   $g_n, g_p$: Generation rates of electrons and holes.
            *   $R_n, R_p$: Recombination rates of electrons and holes.

**5. Equilibrium Conditions:**

*   **Definition:** A state where there is no net flow of charge carriers. This occurs when there are no external forces (like electric fields or concentration gradients) acting on the carriers.
*   **Characteristics:**
    *   Net current density is zero ($J = 0$).
    *   The Fermi level is constant throughout the semiconductor.
    *   Carrier concentrations are determined by temperature and doping levels.
    *   Thermal equilibrium is established.
*   **Example:** A uniformly doped semiconductor at a constant temperature with no applied voltage.

**6. Steady State Conditions:**

*   **Definition:** A state where the concentrations of carriers and the electric field are constant with time, but not necessarily uniform throughout the device.
*   **Characteristics:**
    *   Time derivatives of carrier concentrations are zero ($\frac{\partial n}{\partial t} = 0$, $\frac{\partial p}{\partial t} = 0$).
    *   There can be net current flow, but it is constant.
    *   This state is achieved when generation and recombination rates balance the net carrier movement.
*   **Example:** A semiconductor device with a constant applied voltage, leading to a steady flow of current.

---

### Carrier Generation and Recombination:

*   **Generation:** The process of creating electron-hole pairs.
    *   **Thermal Generation:** Occurs due to thermal energy exciting electrons from the valence band to the conduction band. The rate increases with temperature.
    *   **Optical Generation:** Occurs when photons with energy greater than or equal to the band gap are absorbed by the semiconductor, creating electron-hole pairs (e.g., in photodiodes).
*   **Recombination:** The process where an electron in the conduction band falls back into a hole in the valence band, annihilating both carriers.
    *   **Direct Recombination (Band-to-Band Recombination):** An electron directly recombines with a hole.
    *   **Indirect Recombination (Shockley-Read-Hall Recombination):** Involves intermediate energy levels (traps or recombination centers) within the band gap. These centers capture an electron and then a hole, or vice versa, leading to recombination. This is the dominant recombination mechanism in most indirect bandgap semiconductors like Si and Ge.
    *   **Auger Recombination:** A three-particle process where an electron and hole recombine, and the excess energy is transferred to a third carrier (electron or hole), which is then excited to a higher energy state. This mechanism is significant at high carrier concentrations.
*   **Minority Carrier Lifetime ($\tau$):** The average time a minority carrier exists before recombining.
    *   $\tau_n = \frac{1}{R_n / n}$ (for electrons)
    *   $\tau_p = \frac{1}{R_p / p}$ (for holes)
    *   In many cases, especially under low injection levels, $R = \frac{\Delta p}{\tau_p}$ and $R = \frac{\Delta n}{\tau_n}$, where $\Delta p$ and $\Delta n$ are excess minority carrier concentrations.

---

### Applying Concepts to Carrier Concentrations:

**CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.**

*   **Intrinsic Semiconductor:**
    *   $E_F$ is near the middle of the band gap.
    *   $n = p = n_i$
*   **n-type Semiconductor (non-degenerate):**
    *   $E_F$ is closer to $E_c$.
    *   $n \approx N_D$
    *   Using the mass action law: $p = \frac{n_i^2}{n} \approx \frac{n_i^2}{N_D}$
    *   Since $N_D \gg n_i$, $p \ll n$. Holes are minority carriers.
*   **p-type Semiconductor (non-degenerate):**
    *   $E_F$ is closer to $E_v$.
    *   $p \approx N_A$
    *   Using the mass action law: $n = \frac{n_i^2}{p} \approx \frac{n_i^2}{N_A}$
    *   Since $N_A \gg n_i$, $n \ll p$. Electrons are minority carriers.

**Example:** Consider Silicon at room temperature ($T = 300$ K).
*   $E_g \approx 1.12$ eV.
*   $n_i \approx 1.5 \times 10^{10} \text{ cm}^{-3}$.
*   **Intrinsic Si:** $n = p = 1.5 \times 10^{10} \text{ cm}^{-3}$.
*   **n-type Si doped with $N_D = 10^{17} \text{ cm}^{-3}$:**
    *   $n \approx 10^{17} \text{ cm}^{-3}$ (majority carriers).
    *   $p = \frac{(1.5 \times 10^{10})^2}{10^{17}} = \frac{2.25 \times 10^{20}}{10^{17}} = 2.25 \times 10^3 \text{ cm}^{-3}$ (minority carriers).
*   **p-type Si doped with $N_A = 10^{17} \text{ cm}^{-3}$:**
    *   $p \approx 10^{17} \text{ cm}^{-3}$ (majority carriers).
    *   $n = \frac{(1.5 \times 10^{10})^2}{10^{17}} = 2.25 \times 10^3 \text{ cm}^{-3}$ (minority carriers).

---

### Current Components in Semiconductor Devices (CO2, CO3):

**CO2: State different carrier transport mechanisms in extrinsic semiconductors and obtain the current densities due to this transport.**

*   **Extrinsic semiconductors carry current through both drift and diffusion.** The dominant mechanism depends on the device structure and applied conditions.
*   **Drift current:** Due to the movement of majority and minority carriers under an electric field.
    *   $J_{drift} = q(n\mu_n + p\mu_p)\mathcal{E}$
*   **Diffusion current:** Due to the movement of carriers from high concentration regions to low concentration regions.
    *   $J_{diff,n} = qD_n \frac{dn}{dx}$
    *   $J_{diff,p} = -qD_p \frac{dp}{dx}$

**CO3: Apply the concept of semiconductor physics to solve the current components in semiconductor devices.**

This involves combining drift and diffusion components. For example, in a semiconductor device where there is both an electric field and a concentration gradient, the total current density for electrons is:
$J_n = J_{drift,n} + J_{diff,n} = qn\mu_n\mathcal{E} + qD_n \frac{dn}{dx}$

And for holes:
$J_p = J_{drift,p} + J_{diff,p} = qp\mu_p\mathcal{E} - qD_p \frac{dp}{dx}$

The total current density is $J = J_n + J_p$.

**Example: Drift Current in a Resistor:**
Consider a uniformly doped n-type semiconductor bar with length L, cross-sectional area A, electron concentration $n_0$, and electron mobility $\mu_n$. If a voltage $V$ is applied across the bar, creating an electric field $\mathcal{E} = V/L$.
The drift current density is $J_{dn} = q n_0 \mu_n \mathcal{E} = q n_0 \mu_n \frac{V}{L}$.
The total drift current is $I_d = J_{dn} A = q n_0 \mu_n \frac{A}{L} V$.
This is consistent with Ohm's Law, where resistance $R = \frac{L}{\sigma A} = \frac{L}{(q n_0 \mu_n) A}$.

---

### Response of Semiconductor Devices for Different Biasing Conditions (CO4):

*   **Equilibrium:** No bias, no net current, constant Fermi level.
*   **Forward Bias:** Application of voltage that reduces the potential barrier at a p-n junction.
    *   Majority carriers are injected across the junction.
    *   Leads to a significant increase in current.
*   **Reverse Bias:** Application of voltage that increases the potential barrier at a p-n junction.
    *   Majority carrier current is suppressed.
    *   Only a small leakage current (due to minority carriers) flows.
*   **Understanding biasing is crucial for device operation (e.g., diodes, transistors).** The applied voltage creates electric fields and influences carrier concentrations, leading to specific current-voltage ($I-V$) characteristics.

---

### Effects of Scaling in Semiconductor Devices (CO5):

*   **Scaling:** The process of reducing the physical dimensions of semiconductor devices and integrated circuits.
*   **Key Scaling Types:**
    *   **Constant Field Scaling:** All dimensions and voltages are scaled by the same factor.
    *   **Dover Scaling (Voltage Scaling):** Dimensions are scaled, but voltages are kept constant or scaled by a smaller factor. This is more practical for reducing power consumption.
*   **Impact of Scaling:**
    *   **Reduced Device Size:** Allows for higher integration density (more transistors per chip).
    *   **Increased Speed:** Smaller devices have shorter transit times for carriers, leading to faster operation.
    *   **Reduced Power Consumption (with voltage scaling):** Lower voltages lead to lower power dissipation.
    *   **Challenges:**
        *   **Short Channel Effects:** As channel lengths become very small, gate control over the channel weakens, leading to issues like drain-induced barrier lowering (DIBL) and punch-through.
        *   **Increased Doping Gradients:** Requires precise doping control.
        *   **Increased Electric Fields:** Can lead to breakdown mechanisms.
        *   **Quantum Mechanical Effects:** Become significant at very small dimensions.

---

### Important Points to Remember:

*   **Temperature dependence of $n_i$:** $n_i$ increases exponentially with temperature.
*   **Mass Action Law ($n \cdot p = n_i^2$):** A critical tool for analyzing carrier concentrations in equilibrium.
*   **Fermi-Dirac distribution:** Governs the probability of electron occupation of energy states.
*   **Drift vs. Diffusion:** Two primary mechanisms of carrier transport.
*   **Mobility and Diffusion Coefficient:** Key parameters determining carrier movement and related by the Einstein relation.
*   **Equilibrium:** No net current, constant Fermi level.
*   **Steady State:** Time-invariant concentrations, constant current possible.
*   **Scaling:** Aims for miniaturization, speed, and power reduction, but introduces new physical challenges.

---

### Practice Questions and Exercises:

**Question 1 (CO1):**
A sample of intrinsic silicon at 300 K has an intrinsic carrier concentration of $1.5 \times 10^{10} \text{ cm}^{-3}$. If the silicon is doped with $2 \times 10^{16}$ boron atoms/cm$^3$ (a trivalent impurity), calculate the electron and hole concentrations at 300 K. Assume that all dopant atoms are ionized.

**Answer 1:**
This is a p-type semiconductor.
Acceptor concentration $N_A = 2 \times 10^{16} \text{ cm}^{-3}$.
Intrinsic carrier concentration $n_i = 1.5 \times 10^{10} \text{ cm}^{-3}$.
Since $N_A \gg n_i$, the hole concentration is approximately equal to the acceptor concentration:
$p \approx N_A = 2 \times 10^{16} \text{ cm}^{-3}$.
Using the mass action law ($n \cdot p = n_i^2$):
$n = \frac{n_i^2}{p} = \frac{(1.5 \times 10^{10} \text{ cm}^{-3})^2}{2 \times 10^{16} \text{ cm}^{-3}} = \frac{2.25 \times 10^{20} \text{ cm}^{-6}}{2 \times 10^{16} \text{ cm}^{-3}} = 1.125 \times 10^4 \text{ cm}^{-3}$.
So, $p = 2 \times 10^{16} \text{ cm}^{-3}$ and $n = 1.125 \times 10^4 \text{ cm}^{-3}$.

**Question 2 (CO2, CO3):**
A silicon sample at 300 K has $n = 10^{16} \text{ cm}^{-3}$ and $p = 2.25 \times 10^3 \text{ cm}^{-3}$. The electron mobility $\mu_n = 1400 \text{ cm}^2/\text{V}\cdot\text{s}$ and hole mobility $\mu_p = 450 \text{ cm}^2/\text{V}\cdot\text{s}$.
(a) Calculate the conductivity of the sample.
(b) If an electric field of $100 \text{ V/cm}$ is applied, calculate the drift current density of electrons and holes.

**Answer 2:**
(a) Conductivity $\sigma = q (n \mu_n + p \mu_p)$
$q = 1.602 \times 10^{-19} \text{ C}$.
$\sigma = 1.602 \times 10^{-19} \text{ C} \times [(10^{16} \text{ cm}^{-3} \times 1400 \text{ cm}^2/\text{V}\cdot\text{s}) + (2.25 \times 10^3 \text{ cm}^{-3} \times 450 \text{ cm}^2/\text{V}\cdot\text{s})]$
$\sigma = 1.602 \times 10^{-19} \times [1.4 \times 10^{19} + 1.0125 \times 10^6] \text{ C/cm}\cdot\text{V}\cdot\text{s}$
Since $1.4 \times 10^{19} \gg 1.0125 \times 10^6$, the hole contribution to conductivity is negligible.
$\sigma \approx 1.602 \times 10^{-19} \times 1.4 \times 10^{19} \text{ S/cm}$
$\sigma \approx 2.24 \text{ S/cm}$.

(b) Drift current density of electrons: $J_{dn} = q n \mu_n \mathcal{E}$
$J_{dn} = (1.602 \times 10^{-19} \text{ C}) \times (10^{16} \text{ cm}^{-3}) \times (1400 \text{ cm}^2/\text{V}\cdot\text{s}) \times (100 \text{ V/cm})$
$J_{dn} = 1.602 \times 10^{-19} \times 1.4 \times 10^{19} \text{ A/cm}^2$
$J_{dn} = 2.24 \text{ A/cm}^2$.

Drift current density of holes: $J_{dp} = q p \mu_p \mathcal{E}$
$J_{dp} = (1.602 \times 10^{-19} \text{ C}) \times (2.25 \times 10^3 \text{ cm}^{-3}) \times (450 \text{ cm}^2/\text{V}\cdot\text{s}) \times (100 \text{ V/cm})$
$J_{dp} = 1.602 \times 10^{-19} \times 1.0125 \times 10^6 \text{ A/cm}^2$
$J_{dp} \approx 1.62 \times 10^{-13} \text{ A/cm}^2$.
As expected, the electron drift current dominates.

**Question 3 (CO5):**
Briefly explain two major challenges encountered when scaling down semiconductor devices to the nanometer regime.

**Answer 3:**
Two major challenges are:
1.  **Short Channel Effects:** As the gate length (channel length) becomes very small, the electric field from the drain can significantly influence the channel potential, leading to phenomena like:
    *   **Drain-Induced Barrier Lowering (DIBL):** The threshold voltage of the transistor decreases as the drain voltage increases.
    *   **Punch-through:** The drain field can extend all the way to the source, causing a large current to flow even without the gate being turned on.
2.  **Increased Electric Fields and Reliability Issues:** Scaling down dimensions while maintaining operating voltages can lead to very high electric fields within the device. This can cause reliability problems such as:
    *   **Hot Carrier Effects:** Carriers gain enough energy from the high electric field to be injected into the gate oxide, causing device degradation.
    *   **Dielectric Breakdown:** The insulating layers (like gate oxide) can break down under high electric fields.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Semiconductor Device Fundamentals by Robert Pierret:** Excellent for foundational concepts and detailed derivations. Chapters on carrier statistics and transport mechanisms.
*   **Physics of Semiconductor Devices by Michael Shur:** Provides a modern perspective and covers advanced topics. Relevant for understanding carrier transport in various device structures.
*   **Semiconductor Physics and Devices, 3ed, An Indian Adaptation by S.M. Sze, M.K. Lee:** A comprehensive textbook with clear explanations and examples relevant to introductory solid-state devices.
*   **Semiconductor Physics and Devices by Neamen:** Another strong textbook for understanding the physics of semiconductors and devices.

This concludes the review of semiconductor physics for equilibrium and steady-state conditions. Understanding these concepts is paramount for proceeding with the study of actual solid-state devices in subsequent modules.