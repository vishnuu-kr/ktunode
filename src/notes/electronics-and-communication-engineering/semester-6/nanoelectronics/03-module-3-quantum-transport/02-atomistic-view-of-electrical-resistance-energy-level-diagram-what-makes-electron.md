---
title: "Atomistic view of electrical Resistance -Energy level diagram- What makes electrons flow- The quantum of conductance - Potential profile- Coulomb blockade - Towards Ohm’s law"
subject: "NANOELECTRONICS"
module: "Module 3: Quantum Transport"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feed8"
status: "completed"
scrapedAt: "2026-05-23T18:01:59.340Z"
---
# Module 3: Quantum Transport - Atomistic View of Electrical Resistance

This module delves into the fundamental quantum mechanical principles governing electrical transport in nanoscale electronic devices. We will explore how resistance arises at the atomic level, the conditions for electron flow, and introduce key concepts like the quantum of conductance and Coulomb blockade. Ultimately, we aim to bridge the gap between quantum phenomena and macroscopic Ohm's law.

---

## Learning Outcomes:

*   **LO1:** Understand the atomistic origins of electrical resistance.
*   **LO2:** Interpret energy level diagrams for charge transport.
*   **LO3:** Explain the driving forces for electron flow.
*   **LO4:** Grasp the concept of the quantum of conductance.
*   **LO5:** Analyze potential profiles in nanoscale devices.
*   **LO6:** Describe the phenomenon of Coulomb blockade.
*   **LO7:** Relate quantum transport phenomena to the classical Ohm's Law.

---

## Course Outcomes Alignment:

*   **CO1 (K2):** Challenges of scaling are implicitly addressed by understanding how quantum effects dominate at nanoscale, making classical models insufficient.
*   **CO2 (K3):** Designing novel devices requires understanding quantum transport limitations and opportunities.
*   **CO3 (K2):** This module directly outlines nanoscale quantum transport from atom to transistor.
*   **CO4 (K3):** Application of quantum mechanics in materials and devices is central to understanding resistance, conductance, and blockade.

---

## 1. Atomistic View of Electrical Resistance

Classical understanding of resistance is often based on scattering of electrons by lattice vibrations (phonons) or impurities. At the nanoscale, however, the discrete nature of energy levels and the wave-like behavior of electrons become dominant factors.

**Key Concepts:**

*   **Scattering:** In bulk materials, resistance arises from electrons colliding with obstacles (phonons, impurities, defects). These collisions disrupt the directed motion of electrons due to an applied electric field.
*   **Quantization of Energy:** At the nanoscale, electron motion is confined in at least one dimension, leading to quantized energy levels. These levels dictate which energy states electrons can occupy.
*   **Transmission Probability:** In a nanoscale conductor, resistance is not solely about scattering within the material but also about the probability of electrons *transmitting* through the device. This transmission is governed by quantum mechanical tunneling and the availability of energy states.

**Insights from Textbooks:**

*   **Datta (Quantum Transport Atom to Transistor):** Emphasizes that resistance in a nanoscale device can be viewed as a consequence of how an applied bias voltage affects the transmission of electrons between a source and a drain, mediated by the device's energy levels. The concept of a "contact resistance" arises from the impedance mismatch between the macroscopic electrodes and the nanoscale conductor.
*   **Hanson (Fundamentals of nano electronics):** Discusses how the discrete nature of electronic states in quantum dots or nanowires can lead to quantized conductance, a departure from bulk metallic behavior.

**What makes resistance significant at the nanoscale?**

*   **Reduced Number of Carriers:** Fewer electrons are involved in conduction, making individual electron behavior more impactful.
*   **Confinement Effects:** Quantum confinement leads to discrete energy levels, which can limit the available pathways for current flow.
*   **Surface and Interface Dominance:** Surface scattering and interface effects become much more significant as the surface-to-volume ratio increases.

---

## 2. Energy Level Diagram and Electron Flow

Energy level diagrams are crucial for visualizing how electrons move and where resistance originates in nanoscale devices.

**Key Concepts:**

*   **Energy Levels (Quantized States):** In confined structures like quantum wells, wires, or dots, electrons can only occupy discrete energy levels.
*   **Density of States (DOS):** Represents the number of available energy states per unit energy interval.
*   **Fermi Level ($\epsilon_F$):** The highest energy level occupied by electrons at absolute zero temperature. In a conductor, it represents the energy of the most mobile electrons.
*   **Electrochemical Potential ($\mu$):** Represents the energy required to add an electron to a system at constant temperature and volume. In equilibrium, the electrochemical potential is uniform throughout a conductor. When a bias voltage is applied, the electrochemical potential becomes different between the source and the drain.

**What makes electrons flow?**

*   **Electrochemical Potential Gradient:** Electrons flow from a region of higher electrochemical potential to a region of lower electrochemical potential. Applying a voltage bias between the source and drain creates this gradient.
*   **Availability of States:** For current to flow, there must be occupied states in the source and unoccupied states in the drain at compatible energy levels.

**Energy Level Diagram Representation:**

Imagine a simple conductor connecting a source (left) and a drain (right).

*   **No Bias:** The Fermi levels of the source and drain are aligned ($\mu_S = \mu_D$). There is no net flow of electrons. The energy levels within the conductor are the same as in the isolated conductor.
*   **With Bias ($V$):** The electrochemical potential of the source is higher than the drain ($\mu_S = \epsilon_F + eV$, $\mu_D = \epsilon_F$). Electrons will flow from source to drain if there are available states in the drain at energies between $\mu_S$ and $\mu_D$.

**Example:**

Consider a nanowire connecting a metal contact (source) to another metal contact (drain).

*   The energy levels within the nanowire will be quantized.
*   When a voltage is applied, the electrochemical potential of the source Fermi level is raised relative to the drain.
*   Electrons near the source Fermi level can tunnel or conduct through the nanowire if there are available, compatible energy states in the drain within the energy window defined by the applied bias.

**Insights from Textbooks:**

*   **Datta (Quantum Transport Atom to Transistor):** Introduces the concept of scattering matrices and transmission matrices, which quantify the probability of electrons moving between different energy levels and between different parts of the device. The transmission probability $T(E)$ at a given energy $E$ is key.
*   **Lundstrom (Fundamentals of Carrier Transport):** Explains how the Fermi-Dirac distribution function describes the probability of occupation of energy states, and how the applied bias shifts this distribution.

---

## 3. The Quantum of Conductance

At the nanoscale, conductance can be quantized, meaning it changes in discrete steps rather than continuously.

**Key Concepts:**

*   **Conductance (G):** The reciprocal of resistance ($G = 1/R$). It measures how easily charge flows through a material.
*   **Quantum of Conductance ($G_0$):** The minimum possible conductance for a single, ballistic channel at absolute zero temperature.
    $G_0 = \frac{2e^2}{h}$
    where:
    *   $e$ is the elementary charge ($1.602 \times 10^{-19}$ C)
    *   $h$ is Planck's constant ($6.626 \times 10^{-34}$ J·s)

*   **Ballistic Transport:** In ballistic transport, electrons travel through the conductor without any scattering. Resistance arises purely from the limited number of available transmission channels and the geometry of the conductor.
*   **Transmission Channels:** Each independent mode of propagation for an electron with a given energy contributes a transmission channel. In a ballistic conductor, each channel can contribute up to $G_0$ to the total conductance.

**Formula for Conductance in Ballistic Transport:**

$G = G_0 \sum_n T_n(E)$

where:
*   $T_n(E)$ is the transmission probability of the $n$-th channel at energy $E$.
*   For perfect transmission ($T_n = 1$), the conductance per channel is $G_0$.

**Significance:**

*   **Fundamental Limit:** The quantum of conductance sets a fundamental limit on how small the conductance of a conductor can be when it is very short and clean (ballistic).
*   **Experimental Observation:** Quantized conductance has been experimentally observed in experiments involving atomic-scale contacts, quantum point contacts, and molecular junctions.

**Example:**

A single atom connecting two metallic leads. If this atom forms a perfect, scattering-free connection, the conductance will be close to $G_0$. As the contact is broken or impurities are introduced, the transmission probability $T_n$ will decrease, leading to a lower conductance.

**Insights from Textbooks:**

*   **Datta (Quantum Transport Atom to Transistor):** Provides a detailed quantum mechanical derivation of the Landauer formula for conductance, which directly relates conductance to transmission probabilities. The formula is $G = \frac{2e^2}{h} T(E_F)$, where $T(E_F)$ is the total transmission probability at the Fermi energy. For a single channel with perfect transmission, $T=1$, resulting in $G = G_0$.
*   **Goser et al. (Nanoelectronics and Nanosystems):** Discusses how the discrete energy levels in quantum dots can lead to steps in conductance as the Fermi level is tuned by gate voltages, exhibiting quantized conductance behavior.

---

## 4. Potential Profile

The potential profile describes the variation of the electrostatic potential across the nanoscale device.

**Key Concepts:**

*   **Electrostatic Potential:** The potential energy per unit charge. In an electric field, charges tend to move towards regions of lower potential energy.
*   **Applied Bias:** A voltage difference applied between the source and drain creates a potential difference across the device.
*   **Self-Consistent Potential:** The actual potential experienced by electrons is influenced by the distribution of all charges within the device, including the electrons themselves. This leads to a self-consistent calculation of the potential.
*   **Depletion Region:** In semiconductor devices, an applied gate voltage can create a depletion region where mobile charge carriers are removed, leading to a potential barrier.

**Potential Profile in Different Scenarios:**

*   **Ohmic Contact (Ideal):** In an ideal ohmic contact, the potential drops linearly across the contact region, facilitating easy flow of charge.
*   **Ballistic Conductor (Short):** For a very short, ballistic conductor, the potential drop can be relatively uniform across the conductor itself, with most of the potential drop occurring at the contacts.
*   **With Potential Barriers:**
    *   **Scattering:** Impurities or lattice defects can locally alter the potential, creating scattering centers.
    *   **Quantum Dots/Wells:** Confined structures create potential wells where electrons reside, separated by potential barriers.
    *   **Gate Electrodes:** Gate electrodes, used for controlling current, create localized potential variations that shape the overall profile.

**Example:**

In a Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET), the gate electrode creates a potential profile that can either deplete or accumulate charge carriers in the semiconductor channel beneath it, thereby modulating the channel's conductivity. At the nanoscale, the potential profile is strongly influenced by the discrete nature of charge carriers and quantum confinement.

**Insights from Textbooks:**

*   **Taur & Ning (Fundamentals of Modern VLSI Devices):** Provide detailed discussions on potential profiles in MOSFETs, including the effects of scaling and short-channel effects. They highlight how the gate's control over the channel potential becomes less effective at nanoscale.
*   **Hanson (Fundamentals of nano electronics):** Uses potential profiles in conjunction with energy levels to explain tunneling and resonant tunneling phenomena, crucial for understanding current flow through nanoscale devices.

---

## 5. Coulomb Blockade

Coulomb blockade is a direct consequence of the electrostatic repulsion between electrons, becoming significant when the charging energy of a small conducting island is larger than the thermal energy.

**Key Concepts:**

*   **Charging Energy ($E_C$):** The energy required to add a single electron to a small conducting island (e.g., a quantum dot). It is given by $E_C = \frac{e^2}{2C}$, where $C$ is the capacitance of the island.
*   **Coulomb Blockade:** When the charging energy $E_C$ is significantly larger than the thermal energy ($k_B T$) and the applied voltage bias, adding an electron to the island requires overcoming this electrostatic repulsion. This prevents electrons from tunneling onto the island until the applied voltage is sufficient to overcome the blockade.
*   **Quantum Dot:** A nanoscale semiconductor structure that confines electrons in all three dimensions, behaving like an artificial atom with discrete energy levels.

**Mechanism:**

1.  **Single Electron Addition:** To add an electron to a neutral island, energy $E_C$ must be supplied.
2.  **Voltage Condition:** This energy must come from the applied bias voltage. If the voltage $V$ is such that the energy gained by adding an electron ($eV$) is less than $E_C$, the electron cannot tunnel onto the island, and current flow is blocked.
3.  **Coulomb Staircase:** As the bias voltage is increased, discrete steps in current are observed, corresponding to the sequential addition of electrons to the quantum dot, each step being separated by the charging energy.

**Energy Level Diagram Representation:**

*   The energy level diagram of a quantum dot shows discrete energy levels.
*   When a voltage is applied, the electrochemical potential of the source shifts.
*   If the source potential reaches an energy level of the quantum dot, but the subsequent addition of an electron would require more energy than provided by the bias (due to charging energy), then current is blocked.
*   Only when the bias voltage is sufficient to overcome the charging energy can the next electron tunnel onto the dot, and current can flow through the dot to the drain.

**Example:**

A single-electron transistor (SET) relies on Coulomb blockade. It consists of a small conducting island (quantum dot) connected to source and drain electrodes via tunnel junctions, with a gate electrode to control the island's potential. As the gate voltage is swept, the SET exhibits Coulomb blockade oscillations in its current-voltage characteristics.

**Insights from Textbooks:**

*   **Goser et al. (Nanoelectronics and Nanosystems):** Dedicate significant sections to Coulomb blockade and single-electron transistors, explaining the charging energy and its experimental manifestations.
*   **Hanson (Fundamentals of nano electronics):** Provides a rigorous treatment of Coulomb blockade using the formalism of quantum transport, showing how it arises from the quantized nature of charge and electrostatic interactions.

---

## 6. Towards Ohm’s Law

Ohm's law ($V=IR$) describes a linear relationship between voltage and current in bulk conductors, where resistance is constant. At the nanoscale, this relationship is modified due to quantum effects.

**Key Concepts:**

*   **Ohmic Regime:** The regime where the current is linearly proportional to the voltage. This typically occurs at larger applied voltages where quantum effects become less dominant or when the device is long enough for scattering to be significant.
*   **Non-Ohmic Regime:** At low voltages or in very short, ballistic conductors, the current-voltage characteristics can deviate significantly from linearity.
*   **Landauer Formula:** Provides a fundamental link between conductance and transmission probability, forming the bridge between quantum transport and macroscopic resistance.
    $G = \frac{2e^2}{h} T(E_F)$
    where $T(E_F)$ is the total transmission probability at the Fermi level.

**Bridging the Gap:**

1.  **Ballistic Transport to Conductance:** In a perfectly ballistic, single-channel conductor, $T(E_F)=1$, leading to $G = G_0 = \frac{2e^2}{h} \approx 12.9 \text{ mS}$ (milliSiemens). This is the quantum of conductance.
2.  **Scattering and Resistance:** As scattering occurs within the conductor, $T(E_F)$ decreases, increasing the resistance. The resistance can be thought of as arising from the "resistance" of the contacts and the scattering within the conductor.
3.  **Coulomb Blockade and Non-Ohmicity:** Coulomb blockade introduces a strong non-linearity at low voltages, where current is suppressed until the bias overcomes the charging energy. This leads to a voltage-dependent differential conductance.
4.  **Transition to Bulk Behavior:** As the conductor becomes longer or the operating temperature increases, the number of scattering events increases, and the quantum coherence is lost. In this limit, the device behavior approaches that of a bulk conductor described by Ohm's law. The density of states becomes continuous, and transport is dominated by scattering.

**Example:**

*   A very short, clean nanowire: exhibits quantized conductance steps and can be well-described by the Landauer formula. At low bias, it might show non-Ohmic behavior due to Coulomb blockade if it's small enough.
*   A longer wire with many impurities: exhibits higher resistance due to increased scattering, and at higher bias, its behavior will increasingly resemble Ohm's law.

**Insights from Textbooks:**

*   **Datta (Quantum Transport Atom to Transistor):** Clearly articulates how the Landauer formula provides a quantum mechanical basis for conductance and how it can be extended to include scattering and multiple channels to approach macroscopic resistance.
*   **Lundstrom (Fundamentals of Carrier Transport):** Discusses the transition from ballistic transport (mean free path is larger than device length) to diffusive transport (mean free path is smaller than device length) and how this transition relates to the validity of Ohm's law.

---

## Key Points to Remember:

*   **Quantization is Key:** At the nanoscale, energy levels and conductance are often quantized, departing from bulk behavior.
*   **Ballistic vs. Diffusive Transport:** The mean free path of electrons relative to the device dimensions dictates whether transport is ballistic (scattering-free) or diffusive (scattering-dominated).
*   **Transmission Probability:** The likelihood of an electron passing through a nanoscale device is crucial for determining its conductance.
*   **Quantum of Conductance ($G_0 = 2e^2/h$):** Represents the fundamental limit of conductance for a single, ballistic channel.
*   **Charging Energy ($E_C$):** The electrostatic energy to add an electron to a small island, leading to Coulomb blockade.
*   **Energy Level Diagrams:** Essential for visualizing electron flow and understanding the origin of resistance.
*   **Ohm's Law at Nanoscale:** A limiting case valid under certain conditions (sufficiently long devices, high temperatures, strong scattering) where quantum coherence is lost.

---

## Practice Questions:

1.  **Question:** What is the quantum of conductance and what are its units?
    **Answer:** The quantum of conductance is $G_0 = \frac{2e^2}{h}$. Its units are Siemens (S) or inverse Ohms ($\Omega^{-1}$).

2.  **Question:** Explain how Coulomb blockade arises in a quantum dot.
    **Answer:** Coulomb blockade arises when the electrostatic energy required to add an electron to a small quantum dot (charging energy, $E_C = e^2/2C$) is greater than the available thermal energy ($k_B T$) and the energy provided by the applied bias. This electrostatic repulsion prevents sequential tunneling of electrons unless the bias voltage is sufficient to overcome the charging energy.

3.  **Question:** In the context of quantum transport, what is the primary factor determining the resistance of a very short, clean conductor?
    **Answer:** The primary factor is the transmission probability of electrons through the conductor. In the absence of scattering, resistance is determined by the number of available transmission channels and the quantum of conductance ($G_0$).

4.  **Question:** Draw a schematic energy level diagram for a conductor showing the Fermi levels of a source and drain when a small positive voltage bias is applied. Indicate the direction of electron flow.
    **Answer:**
    ```
       Energy
         ^
         |
    Source -----  µ_S = E_F + eV
         |  /
         | /
         |/
    Device -----  (Quantized Levels)
         |\
         | \
         |  \
    Drain -----  µ_D = E_F
         |
         +-------------------->
           Position
    ```
    *   $\mu_S$ is the electrochemical potential of the source, $\mu_D$ is for the drain.
    *   $E_F$ is the Fermi energy (taken at $\mu_D$).
    *   $eV$ is the energy difference due to the applied bias.
    *   Electrons flow from Source to Drain if there are available states in the Drain within the energy window $[\mu_D, \mu_S]$.

5.  **Question:** How does the validity of Ohm's Law ($V=IR$) change as we move from bulk semiconductors to nanoscale devices?
    **Answer:** Ohm's law assumes a constant resistance, which is valid for bulk materials where transport is diffusive and scattering is dominant. At the nanoscale, quantum effects like ballistic transport, quantized conductance, and Coulomb blockade become significant. These effects lead to non-linear current-voltage characteristics (non-Ohmic behavior), especially at low biases or in very short devices. Ohm's law becomes a limiting case for nanoscale devices when they become sufficiently long, have many scattering events, and operate at higher biases where quantum coherence is lost.

---
This module provides a foundational understanding of how quantum mechanics dictates electrical behavior at the smallest scales, paving the way for the design and analysis of future nanoelectronic devices.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
