---
title: "Ballistic to Diffusive Transport -Landauer formula, Landauer-Buttiker formula.  Ballistic and Diffusive transport – transmission."
subject: "NANOELECTRONICS"
module: "Module 3: Quantum Transport"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feedc"
status: "completed"
scrapedAt: "2026-05-23T18:02:02.926Z"
---
# NANOELECTRONICS: Module 3: Quantum Transport

## Topic: Ballistic to Diffusive Transport - Landauer Formula, Landauer-Buttiker Formula. Ballistic and Diffusive Transport – Transmission.

---

### 1. Introduction to Quantum Transport in Nanoelectronic Devices (CO3, K2)

As electronic devices shrink to nanometer scales, classical transport models break down. Quantum mechanical effects become dominant, necessitating a quantum mechanical description of electron transport. This module focuses on understanding how electrons move through nanoscale devices, from purely ballistic (unscattered) to diffusive (scattered) regimes.

**Key Concepts:**

*   **Quantum Transport:** The study of electron motion in nanoscale devices where quantum mechanical phenomena like wave-particle duality, superposition, and interference play a significant role.
*   **Scaling Challenges (CO1, K2):** As devices scale down, classical approximations like drift-diffusion become less accurate. Quantum confinement, tunneling, and reduced scattering lengths lead to new transport phenomena.
*   **Atom to Transistor (CO3, K2):** Understanding electron behavior from individual atoms to functional transistors is crucial for designing next-generation devices.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 1 & 2)
*   *Fundamentals of nano electronics* by George W. Hanson (Chapter 3)

---

### 2. Ballistic Transport (CO3, K2)

Ballistic transport occurs when electrons travel through a conductor without experiencing any significant scattering events. This is typically observed in very short, clean conductors, where the device length is comparable to or smaller than the electron's mean free path ($\lambda$).

**Key Concepts:**

*   **Mean Free Path ($\lambda$):** The average distance an electron travels between scattering events (e.g., due to phonons, impurities, or imperfections).
*   **Coherence Length ($L_{coh}$):** The distance over which an electron's wave function maintains its phase coherence. In ballistic transport, the device length ($L$) is much smaller than the coherence length ($L \ll L_{coh}$).
*   **No Scattering:** Electrons propagate without losing energy or changing direction due to interactions with the environment.
*   **Transmission:** In the ballistic regime, transmission is primarily determined by the quantum mechanical properties of the device, such as its geometry and energy levels.

**Characteristics of Ballistic Transport:**

*   **Sharp, Quantized Conductance:** The conductance is quantized in units of $2e^2/h$ (the quantum of conductance), where $e$ is the elementary charge and $h$ is Planck's constant. This quantization arises from the discrete energy levels in the confined structure.
*   **Linear I-V Characteristics (Ideal Case):** Ideally, the current-voltage (I-V) characteristics are linear, implying a constant resistance, as there are no resistive losses due to scattering.
*   **Voltage Drop:** The voltage drop occurs only at the contacts and not within the conducting channel itself.

**Example:**
A short quantum wire or a single-atom contact can exhibit ballistic transport. Consider a molecular junction where a single molecule connects two electrodes. If the molecule is short and defect-free, electrons can traverse it ballistically.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 3)
*   *Fundamentals of Carrier Transport* by Mark Lundstrom (Chapter 5)

---

### 3. Diffusive Transport (CO3, K2)

Diffusive transport occurs when electrons experience frequent scattering events within the conductor. In this regime, the device length is much larger than the electron's mean free path ($L \gg \lambda$).

**Key Concepts:**

*   **Scattering Dominance:** Electrons undergo numerous scattering events, losing energy and changing direction randomly.
*   **Random Walk:** Electron motion resembles a random walk, driven by a net drift due to an applied electric field.
*   **Energy Loss:** Scattering events lead to energy dissipation, contributing to resistance.
*   **Drift-Diffusion Model:** This classical model, which describes current as a combination of drift and diffusion, is often applicable in the diffusive regime.

**Characteristics of Diffusive Transport:**

*   **Ohmic Behavior:** The I-V characteristics are typically linear (Ohm's Law: $V=IR$), reflecting a constant resistance that increases with length and decreases with cross-sectional area.
*   **Resistive Losses:** Significant energy dissipation occurs due to scattering, leading to heating.
*   **No Quantized Conductance:** Conductance is not quantized; it depends on material properties (resistivity) and geometry.

**Example:**
A macroscopic metallic wire at room temperature is a classic example of diffusive transport. The electrons scatter off phonons (lattice vibrations) and impurities, leading to significant resistance.

**Reference:**
*   *Fundamentals of Modern VLSI Devices* by Yuan Taur, Tak H Ning (Chapter 2)
*   *Fundamentals of Carrier Transport* by Mark Lundstrom (Chapter 4)

---

### 4. Transition from Ballistic to Diffusive Transport (CO3, K2)

The behavior of an electron transport system changes gradually as the device length increases or scattering increases. The transition depends on the ratio of the device length ($L$) to the mean free path ($\lambda$).

**Key Concept:**

*   **Scattering Rate ($\tau^{-1}$):** The inverse of the average time between scattering events. $\lambda = v_F \tau$, where $v_F$ is the Fermi velocity.

**Regimes of Transport:**

*   **Ballistic Regime ($L \ll \lambda$):** Electrons travel essentially unhindered.
*   **Quasi-Ballistic Regime ($\lambda \approx L$):** Some scattering occurs, but phase coherence might still be maintained.
*   **Diffusive Regime ($L \gg \lambda$):** Scattering is dominant, and electron motion is randomized.

**Impact on Device Performance:**

*   **Conductance:** Decreases from quantized values in the ballistic regime to ohmic behavior in the diffusive regime.
*   **Resistance:** Increases with device length in the diffusive regime but remains low in the ballistic regime.
*   **Velocity Saturation:** In very short channels, electrons can gain enough energy between scattering events to reach a saturated velocity, affecting the linearity of I-V curves.

**Reference:**
*   *Nanoelectronics and Nanosystems* by Karl Goser· Peter GlÖsekötter· Jan Dienstuhl (Chapter 5)
*   *Fundamentals of nano electronics* by George W. Hanson (Chapter 4)

---

### 5. Transmission in Nanoelectronic Devices (CO3, K2; CO4, K3)

Transmission describes the probability that an electron, incident on a conductor, will pass through it. In quantum transport, transmission is intimately related to the conductance.

**Key Concepts:**

*   **Transmission Probability ($T(E)$):** The probability that an electron with energy $E$ incident from one side of a conductor will reach the other side without being reflected.
*   **Quantum Mechanical Transmission:** In quantum mechanics, transmission can occur even if the electron's energy is below the potential barrier (tunneling), or it can be significantly influenced by interference effects.
*   **Transmission Channels:** The number of available modes or subbands for electron propagation within the conductor. Each mode can contribute to the total transmission.

**Factors Affecting Transmission:**

*   **Device Geometry:** The shape and size of the conductor.
*   **Energy Levels:** The presence of discrete energy levels within the conductor.
*   **Impurities and Defects:** Scattering centers that reduce transmission.
*   **Contacts:** The nature of the electrical contacts to the device.

**Relation to Conductance:**
The conductance of a quantum device is directly related to the transmission probability through the Landauer formula.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 3)
*   *Fundamentals of Carrier Transport* by Mark Lundstrom (Chapter 5)

---

### 6. The Landauer Formula (CO3, K2; CO4, K3)

The Landauer formula provides a fundamental link between the conductance of a quantum conductor and its transmission probability. It is a cornerstone of quantum transport theory.

**Key Concept:**

*   **Landauer Formula:** Relates the electrical conductance ($G$) of a quantum conductor to the transmission probability ($T(E)$) summed over all available transverse modes ($n$):

    $G = \frac{2e^2}{h} \sum_{n} T_n(E)$

    For a continuous energy spectrum, this becomes an integral over energy:

    $G = \frac{2e^2}{h} \int_{-\infty}^{\infty} T(E) \left(-\frac{\partial f(E)}{\partial E}\right) dE$

    where:
    *   $e$ is the elementary charge.
    *   $h$ is Planck's constant.
    *   $T(E)$ is the transmission probability at energy $E$.
    *   $f(E)$ is the Fermi-Dirac distribution function, which describes the probability of an electron occupying an energy state $E$.
    *   The term $-\frac{\partial f(E)}{\partial E}$ acts as a weighting function, peaking sharply around the Fermi energy ($E_F$) at low temperatures.

**At Zero Temperature ($T \to 0$ K):**
The integral simplifies to:

$G = \frac{2e^2}{h} T(E_F)$

This means the conductance at zero temperature is directly proportional to the transmission probability at the Fermi energy, multiplied by the quantum of conductance ($G_0 = 2e^2/h \approx 77.4 \ \mu S$).

**Significance:**

*   **Universality:** It's a universal formula, applicable to any conductor, regardless of its material composition or microscopic details, as long as it's in the ballistic or quasi-ballistic regime.
*   **Contact Resistance:** The formula inherently assumes ideal, Ohmic contacts, meaning there's no resistance at the interface between the conductor and the leads.

**Example:**
Consider a quantum dot with a transmission resonance at energy $E_0$. If this resonance is sharp and well-defined, and occurs near the Fermi level, the conductance will be close to $G_0$ when the dot is tuned to resonance.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 3)
*   *Fundamentals of nano electronics* by George W. Hanson (Chapter 6)

---

### 7. The Landauer-Büttiker Formula (CO3, K2; CO4, K3)

The Landauer-Büttiker formula extends the Landauer concept to multi-terminal devices, accounting for non-equilibrium conditions and voltage drops across different parts of the system.

**Key Concepts:**

*   **Multi-Terminal Conductance:** For a device with multiple terminals, the current flowing into one terminal due to a voltage applied to another is described by a matrix of conductances.
*   **Non-Equilibrium:** When voltages are applied to multiple terminals, the electron distribution functions in different parts of the device are not at thermal equilibrium.
*   **Büttiker's Extension:** Karlheinz Büttiker extended the Landauer formula to include the effects of multiple scattering sites and the inclusion of reservoirs (contacts) that maintain their Fermi distributions.

**The Formula:**
For a system with $N$ terminals, the net current $I_i$ flowing into terminal $i$ due to applied voltages $V_j$ at each terminal is given by:

$I_i = \sum_{j=1}^{N} G_{ij} V_j$

where $G_{ij}$ are the elements of the conductance matrix.

The off-diagonal conductances ($i \neq j$) are given by:

$G_{ij} = \frac{e^2}{h} \sum_{n,m} \int_{-\infty}^{\infty} T_{mn}(E) \left[ f_m(E) - f_n(E) \right] dE$

And the diagonal conductances ($i = j$):

$G_{ii} = -\sum_{j \neq i} G_{ij}$ (This comes from Kirchhoff's current law and charge conservation)

where:
*   $T_{mn}(E)$ is the transmission probability from mode $m$ in lead $n$ to mode $p$ in lead $l$ (the indexing can become complex for multiple leads and modes). A more general form relates transmission between reservoirs $i$ and $j$.
*   $f_i(E)$ and $f_j(E)$ are the Fermi-Dirac distribution functions for reservoirs $i$ and $j$, respectively. At equilibrium, $f_i(E) = f_j(E)$. When voltages are applied, $f_i(E) = f(E - \mu_i)$, where $\mu_i = E_F + eV_i$.

**Simplified View for Two-Terminal Case:**
In the two-terminal case ($N=2$) with terminals 1 and 2, and assuming $T_1(E) = T_2(E) = T(E)$ (symmetric transmission), and $V_2 = 0$ (terminal 2 is the reference), the Landauer formula for the conductance is recovered:

$I_1 = G_{11}V_1 + G_{12}V_2 = G_{11}V_1$
$I_2 = G_{21}V_1 + G_{22}V_2 = G_{21}V_1$

Since $I_1 = -I_2$ (current conservation), $G_{11} = -G_{21}$. The conductance $G = I_1/V_1 = G_{11} = -G_{21}$.
Using the Landauer-Büttiker formula for $G_{12}$ (current from reservoir 2 to 1, but we are applying voltage to 1), and considering $f_1(E) = f(E-E_F-eV_1)$ and $f_2(E) = f(E-E_F)$, the integral for $G_{12}$ gives the current that would flow into terminal 1 if a voltage was applied to terminal 2.

The conductance from terminal 1 to 2 is:
$G_{12} = \frac{e^2}{h} \int_{-\infty}^{\infty} T_{12}(E) [f_1(E) - f_2(E)] dE$
If $V_2=0$, $f_2(E) = f(E)$. If $V_1$ is small, $f_1(E) \approx f(E) - eV_1 \frac{\partial f}{\partial E}$.
$G_{12} = \frac{e^2}{h} \int_{-\infty}^{\infty} T_{12}(E) [f(E - eV_1) - f(E)] dE$
For small $V_1$, $G_{12} \approx \frac{e^2}{h} \int_{-\infty}^{\infty} T_{12}(E) (-eV_1) \frac{\partial f}{\partial E} dE = \frac{2e^2}{h} T_{12}(E_F)$ (at $T=0$).

**Significance:**

*   **Mesoscopic Physics:** Crucial for understanding transport in mesoscopic systems, where the number of conducting channels is small.
*   **Quantum Dots and Interferometers:** Essential for analyzing devices like quantum dots, quantum point contacts, and Aharonov-Bohm interferometers.
*   **Non-Equilibrium Effects:** Captures how applied voltages in different parts of a device influence electron distributions and currents.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 4)
*   *Fundamentals of Carrier Transport* by Mark Lundstrom (Chapter 8)

---

### 8. Ballistic vs. Diffusive Transport - Transmission (CO3, K2)

The primary difference in transmission between ballistic and diffusive transport lies in the behavior of the transmission probability $T(E)$ and its dependence on energy and device parameters.

| Feature             | Ballistic Transport                                     | Diffusive Transport                                           |
| :------------------ | :------------------------------------------------------ | :------------------------------------------------------------ |
| **Scattering**      | Negligible scattering within the channel.               | Frequent scattering events (phonons, impurities).           |
| **Transmission $T(E)$** | Often close to 1 for energies within occupied bands; can show resonant peaks due to quantum confinement. | Varies smoothly with energy, generally less than 1, and decreases with length. |
| **Conductance ($G$)** | Quantized in units of $2e^2/h$ (at $T=0$). $G \propto T(E_F)$. | Ohmic, $G \propto \frac{1}{R}$, where $R \propto L/\sigma$.     |
| **Device Length ($L$)** | $L \ll \lambda$                                         | $L \gg \lambda$                                               |
| **Energy Dependence** | Transmission can be sharp and resonant.                 | Transmission varies more gradually with energy.               |
| **Phase Coherence** | Maintained throughout the device.                       | Lost due to scattering.                                       |
| **Resistance**      | Dominated by contact resistance (ideally zero channel resistance). | Dominated by channel resistance due to scattering.            |

**Transmission in Ballistic Transport:**
In ballistic transport, transmission is often determined by the number of transverse modes available at the Fermi energy. If a device has $M$ such modes, and each mode has a transmission probability close to 1, the total conductance would be approximately $M \times (2e^2/h)$. Quantum confinement can lead to discrete energy levels, causing $T(E)$ to have sharp peaks (resonances) when the Fermi level aligns with these levels.

**Transmission in Diffusive Transport:**
In diffusive transport, transmission is determined by the conductivity of the material and the path length. The transmission probability $T(E)$ is generally much lower and decays exponentially with device length (though this is a simplification). The electrical conductivity $\sigma$ plays a key role. Using the Drude model as an approximation for diffusive transport, the conductivity is related to the mean free path ($\lambda$) and relaxation time ($\tau$): $\sigma = \frac{ne^2\tau}{m^*} = \frac{ne^2\lambda}{m^*v_F}$. The resistance is $R = L / (\sigma A)$, where $A$ is the cross-sectional area. The conductance is then $G = 1/R$.

**Reference:**
*   *Quantum Transport Atom to Transistor* by Supriyo Datta (Chapter 3)
*   *Fundamentals of nano electronics* by George W. Hanson (Chapter 6)

---

### 9. Design Implications and Course Outcomes Alignment (CO2, K3)

Understanding the transition from ballistic to diffusive transport is crucial for designing nanoelectronic devices.

*   **CO1: Describe the challenges of scaling of electron devices to Nano meter scales (Knowledge Level: K2)**
    *   As devices scale, the ballistic regime becomes more relevant for short channels. This implies that classical drift-diffusion models are insufficient, and quantum mechanical phenomena like quantized conductance and phase coherence need to be considered. This presents a significant challenge in predicting and controlling device behavior.

*   **CO2: Design novel transistor devices to reduce the short channel effects and improve performance (Knowledge Level: K3)**
    *   To improve performance and mitigate short-channel effects (like drain-induced barrier lowering), designers might aim to operate transistors in a more controlled, potentially quasi-ballistic regime. This can involve using materials with long coherence lengths or designing channels that promote efficient transmission without excessive scattering. For example, FinFETs and Gate-All-Around (GAA) transistors offer better electrostatic control, which can influence the transport regime. Understanding how to tailor transmission in these structures is key.

*   **CO3: Outline the Nano scale quantum transport in Nano electronic devices from atom to transistor (Knowledge Level: K2)**
    *   This module directly addresses this outcome by explaining the fundamental concepts of ballistic and diffusive transport, the Landauer formula, and the Landauer-Büttiker formula, which are essential for describing quantum transport at the nanoscale.

*   **CO4: Apply quantum mechanics in materials and quantum devices (Knowledge Level: K3)**
    *   The Landauer and Landauer-Büttiker formulas are direct applications of quantum mechanics (transmission probabilities, wave functions) to predict the electrical properties (conductance) of nanoscale devices. Understanding how transmission depends on quantum phenomena allows for the design and analysis of devices like quantum dots, molecular wires, and single-electron transistors.

**Examples in Device Design:**

*   **Molecular Electronics:** Aim to operate molecular junctions in the ballistic regime for minimal resistance. Transmission through molecular orbitals is critical.
*   **Quantum Dots:** Exhibit quantized energy levels, leading to resonant tunneling and quantized conductance peaks, characteristic of ballistic transport.
*   **Graphene Nanoribbons:** Can exhibit ballistic transport over relatively long distances due to the unique electronic properties of graphene.
*   **Carbon Nanotube Field-Effect Transistors (CNTFETs):** Can operate in a ballistic regime, offering high ON-currents.

**Reference:**
*   *FinFETs and Other multigate Transistors* by J-P Colinge (Chapter 4)
*   *Fundamentals of Ultra-Thin-Body MOSFETs and FinFETs* by Jerry G. Fossum, Vishal P. Trivedi (Chapter 5)

---

### 10. Important Points to Remember

*   **Ballistic vs. Diffusive:** Determined by $L$ vs. $\lambda$. Ballistic = no scattering; Diffusive = frequent scattering.
*   **Landauer Formula:** $G = \frac{2e^2}{h} T(E_F)$ at $T=0$. Relates conductance to transmission probability.
*   **Landauer-Büttiker Formula:** Extends Landauer to multi-terminal systems, accounts for non-equilibrium.
*   **Transmission ($T(E)$):** Probability of an electron passing through a conductor. Key determinant of conductance.
*   **Quantum of Conductance:** $G_0 = 2e^2/h \approx 77.4 \ \mu S$. The fundamental unit of conductance in the ballistic regime.
*   **Scaling:** As devices shrink, the ballistic regime becomes increasingly important.
*   **Applications:** Understanding these concepts is vital for designing advanced transistors, quantum dots, and molecular electronic devices.

---

### 11. Practice Questions and Exercises

**Question 1:**
Explain the fundamental difference between ballistic and diffusive transport in nanoscale conductors. What dimensionless parameter governs this transition?

**Answer:**
Ballistic transport occurs when the device length ($L$) is much smaller than the electron's mean free path ($\lambda$), meaning electrons traverse the conductor without significant scattering. Diffusive transport occurs when $L \gg \lambda$, where electrons undergo frequent scattering, leading to random motion. The ratio $L/\lambda$ governs this transition.

---

**Question 2:**
State the Landauer formula for conductance at zero temperature. What does it signify about the relationship between conductance and transmission?

**Answer:**
The Landauer formula at zero temperature is $G = \frac{2e^2}{h} T(E_F)$. It signifies that the electrical conductance of a quantum conductor is directly proportional to the transmission probability of electrons at the Fermi energy, multiplied by the quantum of conductance ($2e^2/h$). This highlights that in the ballistic regime, the "quality" of the conductor is determined by how well it transmits electrons.

---

**Question 3:**
Consider a quantum wire that can support $N$ transverse modes. If each mode has a transmission probability of $T_i$, write down the Landauer formula for the total conductance at zero temperature.

**Answer:**
The Landauer formula for the total conductance at zero temperature, considering $N$ transverse modes, is:
$G = \frac{2e^2}{h} \sum_{i=1}^{N} T_i(E_F)$

---

**Question 4:**
Why is the Landauer-Büttiker formalism necessary for describing transport in multi-terminal devices, compared to the simpler Landauer formula?

**Answer:**
The Landauer formula is primarily for two-terminal, equilibrium systems. The Landauer-Büttiker formalism is necessary for multi-terminal devices because it accounts for:
1.  **Non-equilibrium conditions:** When voltages are applied to multiple terminals, electron distributions are not uniform.
2.  **Multiple contacts/reservoirs:** It explicitly considers the exchange of electrons between different leads and the device.
3.  **Off-diagonal conductances:** It describes current flow between any pair of terminals, not just the two electrodes in a basic conductor.

---

**Question 5:**
Imagine a very short metallic wire (length 10 nm) made of copper at room temperature. The mean free path of electrons in copper at room temperature is about 40 nm. Would transport in this wire be primarily ballistic or diffusive? Justify your answer.

**Answer:**
Transport would be primarily **ballistic**. The device length (10 nm) is significantly smaller than the mean free path (40 nm), meaning $L \ll \lambda$. Electrons are likely to traverse the wire without significant scattering.

---

**Question 6 (Conceptual Design):**
You are designing a molecular transistor. To achieve high ON-current, would you prefer the molecule to have a transmission function with sharp resonant peaks near the Fermi level or a broad, low-transmission function? Explain based on the Landauer formula.

**Answer:**
You would prefer the molecule to have **sharp resonant peaks near the Fermi level**. According to the Landauer formula, $G = \frac{2e^2}{h} T(E_F)$. A sharp resonant peak means $T(E_F)$ can be close to 1 (or even greater than 1 in some theoretical treatments of resonances), leading to a high conductance. A broad, low-transmission function would result in a low $T(E_F)$ and consequently a low conductance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
