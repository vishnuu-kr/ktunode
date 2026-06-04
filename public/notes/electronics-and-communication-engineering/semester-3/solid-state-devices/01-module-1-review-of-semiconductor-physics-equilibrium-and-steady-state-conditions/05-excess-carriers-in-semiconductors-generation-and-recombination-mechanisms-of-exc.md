---
title: "Excess carriers in semiconductors: Generation and recombination mechanisms of excess carriers, quasi-Fermi levels."
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ad"
status: "completed"
scrapedAt: "2026-05-23T17:47:29.106Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

## Topic: Excess Carriers in Semiconductors: Generation and Recombination Mechanisms of Excess Carriers, Quasi-Fermi Levels

---

### 1. Introduction to Excess Carriers

*   **Definition:** Excess carriers are charge carriers (electrons or holes) whose concentration deviates from their equilibrium values due to external excitation or internal mechanisms.
*   **Equilibrium vs. Non-Equilibrium:**
    *   **Equilibrium:** In an intrinsic or extrinsic semiconductor at a given temperature, the electron ($n_0$) and hole ($p_0$) concentrations are fixed and determined by doping and temperature. $n_0p_0 = n_i^2$.
    *   **Non-Equilibrium:** When an external energy source (e.g., light, heat, injection) adds energy to the semiconductor, electron-hole pairs (EHPs) are created, leading to an increase in either electron concentration ($\Delta n$) or hole concentration ($\Delta p$), or both, above their equilibrium values.
*   **Importance:** Understanding excess carriers is crucial for the operation of most semiconductor devices, as their behavior dictates current flow and device characteristics under various operating conditions. This topic directly relates to **CO3** (applying semiconductor physics to solve current components) and **CO4** (analyzing device response to biasing).

---

### 2. Generation Mechanisms of Excess Carriers

Generation is the process of creating electron-hole pairs.

#### 2.1. Thermal Generation

*   **Mechanism:** Thermal energy (kT) can excite valence electrons to the conduction band, creating an electron-hole pair. This is an intrinsic process and occurs even in the absence of external excitation.
*   **Key Concept:** The rate of thermal generation is temperature-dependent. At higher temperatures, more thermal energy is available, leading to a higher thermal generation rate.
*   **Expression:** The thermal generation rate ($G_{th}$) is approximately constant for a given temperature and material.
    *   *Pierret (Chapter 2)*: Discusses thermal generation as a fundamental process affecting intrinsic carrier concentration ($n_i$).
    *   *Shur (Chapter 2)*: Also details thermal generation as a baseline process.
*   **Example:** Even in a silicon diode at room temperature, thermal generation is constantly occurring, contributing to leakage currents.

#### 2.2. Optical Generation (Photo-generation)

*   **Mechanism:** When photons with energy greater than or equal to the semiconductor's bandgap energy ($E_g$) strike the material, they can be absorbed, exciting a valence electron to the conduction band and creating an electron-hole pair.
*   **Key Concept:** The generation rate is directly proportional to the incident light intensity.
*   **Expression:**
    $G_{opt} \propto I_{light}$ (where $I_{light}$ is the light intensity).
    $G_{opt} = \alpha(\lambda) \Phi(\lambda)$ (where $\alpha(\lambda)$ is the absorption coefficient at wavelength $\lambda$, and $\Phi(\lambda)$ is the photon flux).
*   **Device Application:** This is the fundamental principle behind photodiodes, solar cells, and image sensors.
    *   *Sze (Physics of Semiconductor Devices, Chapter 13)*: Provides a detailed explanation of optoelectronic devices and photo-generation.
    *   *Neamen (Chapter 5)*: Discusses optical absorption and generation in the context of device physics.
*   **Example:** Shining light on a silicon photodiode causes the generation of excess electron-hole pairs, which are then separated by the built-in electric field, resulting in a photocurrent.

#### 2.3. Impact Ionization

*   **Mechanism:** When an electron or hole gains sufficient kinetic energy (through acceleration in a strong electric field), it can collide with an atom in the crystal lattice and transfer enough energy to an electron in the valence band to excite it to the conduction band. This process creates a new electron-hole pair.
*   **Key Concept:** This is a high-field phenomenon, requiring significant electric fields. It leads to carrier multiplication.
*   **Expression:** The ionization coefficients ($\alpha$ for electrons, $\beta$ for holes) depend exponentially on the electric field: $\alpha = \alpha_0 \exp(-b/\mathcal{E})$ and $\beta = \beta_0 \exp(-c/\mathcal{E})$, where $\mathcal{E}$ is the electric field.
*   **Device Application:** Crucial for the operation of avalanche photodiodes (APDs) and the breakdown mechanism in p-n junctions (avalanche breakdown).
    *   *Sze (Physics of Semiconductor Devices, Chapter 5)*: Discusses breakdown mechanisms, including avalanche breakdown due to impact ionization.
    *   *Pierret (Chapter 4)*: Covers avalanche multiplication and its impact on device behavior.
*   **Example:** In an APD, a high reverse bias creates a strong electric field, leading to impact ionization and carrier multiplication, thus amplifying the photogenerated signal.

---

### 3. Recombination Mechanisms of Excess Carriers

Recombination is the process by which an electron and a hole annihilate each other, reducing the excess carrier concentration.

#### 3.1. Radiative Recombination

*   **Mechanism:** An electron in the conduction band recombines with a hole in the valence band, releasing energy in the form of a photon.
*   **Key Concept:** This is a direct recombination process that is efficient in direct bandgap semiconductors. The recombination rate is proportional to the product of electron and hole concentrations.
*   **Expression:**
    $R_{rad} = B_{rad} np$ (where $B_{rad}$ is the radiative recombination coefficient).
    Under non-equilibrium conditions, with excess carriers $\Delta n$ and $\Delta p$, this becomes $R_{rad} = B_{rad} (n_0 + \Delta n)(p_0 + \Delta p)$. For low injection levels ($\Delta n \ll n_0, p_0$), it simplifies.
*   **Device Application:** Light-emitting diodes (LEDs) and semiconductor lasers rely on radiative recombination.
    *   *Sze (Physics of Semiconductor Devices, Chapter 13)*: Details the physics of LEDs and lasers based on radiative recombination.
*   **Example:** In an LED, forward bias injects electrons and holes into the active region, where they recombine radiatively to emit light.

#### 3.2. Non-Radiative Recombination

*   **Mechanism:** Recombination occurs without the emission of a photon. The energy released is dissipated as heat (phonons).
*   **Types:**
    *   **Shockley-Read-Hall (SRH) Recombination (Trap-Assisted Recombination):**
        *   **Mechanism:** Involves energy levels within the bandgap (traps or recombination centers) introduced by impurities or defects. An electron and a hole are captured sequentially by these centers, and then recombine.
        *   **Key Concept:** The rate depends on the density and energy level of these recombination centers. It is often the dominant recombination mechanism in indirect bandgap semiconductors like silicon.
        *   **Expression:** The SRH recombination rate ($R_{SRH}$) is complex and depends on the capture probabilities, energy level of the trap, and carrier concentrations. For low injection levels in an n-type semiconductor, it's approximately proportional to the excess hole concentration: $R_{SRH} \approx \frac{\Delta p}{\tau_p}$, where $\tau_p$ is the minority carrier lifetime.
        *   *Pierret (Chapter 2)*: Provides a thorough derivation of SRH recombination.
        *   *Shur (Chapter 2)*: Also explains SRH recombination and its importance.
        *   *Neamen (Chapter 4)*: Discusses recombination through traps.
        *   **Example:** This is a major factor limiting the efficiency of silicon solar cells and transistors. The quality of the semiconductor material (fewer defects) is crucial.

    *   **Auger Recombination:**
        *   **Mechanism:** A three-particle interaction where an electron and hole recombine, and the energy is transferred to a third carrier (either an electron or a hole), exciting it to a higher energy state within its own band.
        *   **Key Concept:** This is a high-carrier-concentration effect and becomes significant at high injection levels or in heavily doped semiconductors.
        *   **Expression:** $R_{Auger} = C_n n p (n + \Delta n) + C_p n p (p + \Delta p)$ or $R_{Auger} = C \cdot n p (n+p)$ for intrinsic semiconductors. For n-type, $R_{Auger} \approx C_n n_0^2 \Delta p$.
        *   *Pierret (Chapter 2)*: Discusses Auger recombination as a high-level injection effect.
        *   *Sze (Physics of Semiconductor Devices, Chapter 1)*: Mentions Auger recombination in the context of material properties.
        *   **Example:** In highly doped regions of bipolar transistors or power devices, Auger recombination can limit performance.

#### 3.3. Surface Recombination

*   **Mechanism:** Recombination occurs at the surface of the semiconductor, where there is a high density of surface states (dangling bonds, defects).
*   **Key Concept:** The rate depends on the surface recombination velocity ($S$) and the surface excess carrier concentration.
*   **Expression:** Surface recombination rate ($R_{surf}$) is related to the surface excess carrier concentration $\Delta p_s$ by $R_{surf} = S \Delta p_s$.
*   **Device Application:** Important for devices where the surface area is large relative to the volume, like thin-film transistors or devices with passivation layers.
    *   *Neamen (Chapter 4)*: Discusses surface effects and recombination velocity.
*   **Example:** The effectiveness of surface passivation techniques in reducing recombination losses in solar cells.

---

### 4. Excess Carrier Concentration and Continuity Equation

*   **Steady-State Condition:** When the generation rate equals the recombination rate, the net change in excess carrier concentration over time is zero.
*   **Continuity Equation:** Describes the conservation of charge carriers, considering generation, recombination, and diffusion/drift.
    *   For electrons: $\frac{\partial n}{\partial t} = G_n - R_n + \frac{1}{q} \nabla \cdot J_n$
    *   For holes: $\frac{\partial p}{\partial t} = G_p - R_p - \frac{1}{q} \nabla \cdot J_p$
    where $G_n, G_p$ are generation rates, $R_n, R_p$ are recombination rates, $J_n, J_p$ are current densities.
*   **Steady-State Excess Carrier Continuity Equation:**
    For electrons: $0 = G_n - R_n + \frac{1}{q} \nabla \cdot J_n$
    For holes: $0 = G_p - R_p - \frac{1}{q} \nabla \cdot J_p$
*   **Minority Carrier Lifetime ($\tau$):** In steady-state, under low-level injection, the recombination rate of minority carriers is often expressed as $R_{minority} = \frac{\Delta p}{\tau_p}$ (for holes in n-type) or $\frac{\Delta n}{\tau_n}$ (for electrons in p-type). $\tau$ is the average time an excess minority carrier survives before recombining.
    *   *Pierret (Chapter 2)*: Provides detailed derivation and explanation of minority carrier lifetime.
    *   *Sze (Physics of Semiconductor Devices, Chapter 1)*: Defines carrier lifetime.
*   **Diffusion Length ($L$):** The average distance an excess minority carrier diffuses before recombining. $L = \sqrt{D\tau}$, where $D$ is the diffusion coefficient.

---

### 5. Quasi-Fermi Levels

*   **Concept:** In non-equilibrium conditions, the simple Fermi-Dirac distribution with a single Fermi level ($E_F$) is no longer valid for describing both electrons and holes independently. Quasi-Fermi levels provide a way to describe the carrier distributions under these conditions.
*   **Definition:**
    *   For electrons, a quasi-Fermi level ($F_n$) is defined such that the electron concentration ($n$) can be expressed using the Fermi-Dirac distribution:
        $n = N_c \exp\left(-\frac{E_c - F_n}{kT}\right)$ or $n = \int_{E_c}^{\infty} f(E) N(E) dE$, where $f(E) = 1 / (1 + \exp((E - F_n)/kT))$ and $N(E)$ is the conduction band density of states.
    *   For holes, a quasi-Fermi level ($F_p$) is defined such that the hole concentration ($p$) can be expressed:
        $p = N_v \exp\left(-\frac{F_p - E_v}{kT}\right)$ or $p = \int_{-\infty}^{E_v} (1-f(E)) N(E) dE$, where $f(E) = 1 / (1 + \exp((E - F_p)/kT))$ and $N(E)$ is the valence band density of states.
*   **Relationship to Equilibrium:**
    *   In equilibrium, $F_n = F_p = E_F$.
    *   Under excitation, $F_n$ and $F_p$ can diverge from each other and from $E_F$.
*   **Key Observations:**
    *   **Optical Generation:** Generally causes $F_n$ to increase and $F_p$ to decrease.
    *   **Injection (Forward Bias):** Causes both $F_n$ and $F_p$ to increase.
    *   **Carrier Concentration:** $n = n_0 + \Delta n$ and $p = p_0 + \Delta p$. The quasi-Fermi levels reflect these changes.
    *   **Divergence:** The difference between $F_n$ and $F_p$ is related to the recombination rate. A larger separation indicates a higher recombination rate.
    *   $n \cdot p = n_i^2 \exp\left(\frac{F_n - F_p}{kT}\right)$. In equilibrium, $F_n - F_p = 0$, so $np = n_i^2$.
*   **Device Application:** Essential for analyzing non-equilibrium device operation, such as forward-biased p-n junctions, bipolar transistors, and solar cells.
    *   *Pierret (Chapter 2)*: Presents a detailed discussion on quasi-Fermi levels and their significance.
    *   *Shur (Chapter 2)*: Also covers quasi-Fermi levels as a tool for non-equilibrium analysis.
    *   *Neamen (Chapter 4)*: Explains the concept of quasi-Fermi levels and their relation to carrier distributions.
*   **Example:** In a forward-biased p-n junction, minority carrier injection leads to a significant increase in carrier concentrations in the neutral regions. This is described by the separation of the quasi-Fermi levels for electrons and holes from the equilibrium Fermi level. The magnitude of this separation is related to the injection level.

---

### Important Points to Remember:

*   **Excess carriers are key:** All non-equilibrium phenomena in semiconductors revolve around excess carriers.
*   **Generation creates, recombination destroys:** These are the fundamental processes governing the change in excess carrier concentration.
*   **Dominant mechanisms:** Thermal and optical generation are common. SRH is usually the dominant recombination mechanism at low to moderate injection levels, while Auger becomes important at high injection levels.
*   **Lifetime ($\tau$) and diffusion length ($L$):** Quantify how long and how far excess carriers survive.
*   **Quasi-Fermi levels ($F_n, F_p$):** A powerful tool to describe carrier distributions in non-equilibrium and to understand the driving forces for carrier flow and recombination. Their separation indicates non-equilibrium and recombination activity.
*   **CO1:** Understanding equilibrium carrier concentration using Fermi-Dirac statistics is the baseline. Excess carriers modify this, requiring quasi-Fermi levels.
*   **CO3 & CO4:** Generation, recombination, and quasi-Fermi levels are directly used to derive current densities and analyze device behavior under various biases.

---

### Practice Questions and Answers

**Question 1:**
In a silicon sample doped to $N_D = 10^{16} \text{ cm}^{-3}$ at $T = 300 \text{ K}$, incident light generates $G_{opt} = 10^{20} \text{ cm}^{-3}\text{s}^{-1}$ electron-hole pairs uniformly throughout the sample. Assume the recombination rate is dominated by SRH recombination with a minority carrier lifetime $\tau_p = 1 \mu\text{s}$. What is the steady-state excess hole concentration ($\Delta p$) in the sample?
*(Given: $n_i = 1.5 \times 10^{10} \text{ cm}^{-3}$)*

**Answer 1:**
In steady-state, the generation rate equals the recombination rate.
The equilibrium electron concentration $n_0 \approx N_D = 10^{16} \text{ cm}^{-3}$.
The equilibrium hole concentration $p_0 = n_i^2 / n_0 = (1.5 \times 10^{10})^2 / 10^{16} = 2.25 \times 10^4 \text{ cm}^{-3}$.
Since $n_0 \gg p_0$, this is an n-type semiconductor, and holes are the minority carriers.
The SRH recombination rate for minority carriers is $R_{SRH} = \Delta p / \tau_p$.
In steady-state, $G_{opt} = R_{SRH}$.
$10^{20} \text{ cm}^{-3}\text{s}^{-1} = \Delta p / (1 \times 10^{-6} \text{ s})$.
$\Delta p = 10^{20} \times 10^{-6} \text{ cm}^{-3} = 10^{14} \text{ cm}^{-3}$.

**Check for low-level injection:**
$\Delta p = 10^{14} \text{ cm}^{-3}$ is much smaller than $n_0 = 10^{16} \text{ cm}^{-3}$. Therefore, the low-level injection assumption is valid, and our calculation for $\Delta p$ is correct.

---

**Question 2:**
Consider a forward-biased p-n junction. How do the quasi-Fermi levels ($F_n$ and $F_p$) change compared to their equilibrium positions ($E_F$)? Explain the significance of the separation between $F_n$ and $F_p$.

**Answer 2:**
When a p-n junction is forward-biased, minority carriers are injected across the junction into the neutral regions.
*   **In the neutral n-region:** Electrons are the majority carriers, and holes are the minority carriers. The injection of holes increases the minority hole concentration ($p = p_0 + \Delta p$). This increase in hole concentration is described by the lowering of the quasi-Fermi level for holes ($F_p$) away from the equilibrium Fermi level ($E_F$).
*   **In the neutral p-region:** Holes are the majority carriers, and electrons are the minority carriers. The injection of electrons increases the minority electron concentration ($n = n_0 + \Delta n$). This increase in electron concentration is described by the raising of the quasi-Fermi level for electrons ($F_n$) away from $E_F$.
*   **Significance of Separation:** The separation between $F_n$ and $F_p$ is a direct measure of the non-equilibrium condition and is related to the recombination rate.
    *   The relationship $n \cdot p = n_i^2 \exp\left(\frac{F_n - F_p}{kT}\right)$ shows that as $F_n$ and $F_p$ separate, the product $np$ increases. This higher carrier product is directly associated with increased recombination.
    *   A larger separation between $F_n$ and $F_p$ indicates a higher recombination rate of excess carriers in the device. It also drives the diffusion current of minority carriers. The voltage drop across the device is approximately related to the separation of the quasi-Fermi levels in the depletion region: $V \approx (F_n - F_p) / q$.

---

**Question 3:**
What type of semiconductor material is most efficient for light-emitting diodes (LEDs), and why? Which recombination mechanism is dominant in LEDs?

**Answer 3:**
*   **Material Type:** Direct bandgap semiconductors, such as Gallium Arsenide (GaAs) and Indium Phosphide (InP), are most efficient for LEDs.
*   **Reason:** In direct bandgap semiconductors, the conduction band minimum and valence band maximum occur at the same momentum (k-value). This allows an electron and a hole to recombine directly by emitting a photon without the need for a third particle (like in Auger recombination) or a defect state (like in SRH recombination).
*   **Dominant Recombination Mechanism:** Radiative recombination is the dominant mechanism responsible for light emission in LEDs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
