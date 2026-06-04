---
title: "Concept of effective mass and Fermi level"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2aa"
status: "completed"
scrapedAt: "2026-05-23T17:47:26.991Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

**Topic:** Concept of Effective Mass and Fermi Level

**Learning Outcomes:**

*   Understand the concept of effective mass for charge carriers in a semiconductor crystal.
*   Relate effective mass to the curvature of the energy bands.
*   Define the Fermi level and its significance in semiconductors.
*   Explain the behavior of the Fermi level in intrinsic and extrinsic semiconductors.
*   Discuss the temperature dependence of the Fermi level.

**Course Outcomes Addressed:**

*   **CO1 (K3):** Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.
*   **CO3 (K3):** Apply the concept of semiconductor physics to solve the current components in semiconductor devices.

---

## 1. Concept of Effective Mass ($m^*$)

### 1.1 Introduction

In a semiconductor crystal, electrons and holes do not behave like free particles in a vacuum. Their motion is influenced by the periodic potential of the crystal lattice. This interaction modifies their response to external forces, such as electric fields. The concept of **effective mass** is introduced to account for this modification, allowing us to treat charge carriers as quasi-particles with a modified mass.

### 1.2 Origin of Effective Mass

The energy-momentum ($E-k$) relationship for electrons in a crystal is not parabolic, unlike free electrons ($E = \frac{\hbar^2 k^2}{2m_0}$, where $m_0$ is the free electron mass). Instead, the $E-k$ relationship in a crystal is characterized by energy bands (conduction band and valence band) which have complex curvature.

The effective mass is defined based on the curvature of these energy bands.

**Definition:** The effective mass ($m^*$) of a charge carrier is inversely proportional to the curvature of its energy band ($E-k$ diagram).

Mathematically, for an electron in the conduction band, the effective mass is given by:

$$ \frac{1}{m^*} = \frac{1}{\hbar^2} \frac{d^2E}{dk^2} $$

where:
*   $E$ is the electron energy.
*   $k$ is the wave vector (related to momentum).
*   $\hbar$ is the reduced Planck constant.

### 1.3 Effective Mass for Electrons and Holes

*   **Effective Mass of Electrons ($m_n^*$ or $m_c^*$):** This relates to the curvature of the conduction band.
    *   If the band is sharply curved (large $\frac{d^2E}{dk^2}$), the effective mass is small.
    *   If the band is relatively flat (small $\frac{d^2E}{dk^2}$), the effective mass is large.

*   **Effective Mass of Holes ($m_p^*$ or $m_v^*$):** This relates to the curvature of the valence band. Since holes are considered as the absence of electrons, their effective mass is related to the curvature of the valence band, but with an opposite sign convention for the second derivative.

    $$ \frac{1}{m_p^*} = -\frac{1}{\hbar^2} \frac{d^2E}{dk^2} $$

    The negative sign arises because the "hole" moves in the opposite direction to the "missing" electron. Effectively, a more strongly curved valence band near the top implies a smaller positive effective mass for holes.

### 1.4 Isotropy vs. Anisotropy

*   **Isotropic Effective Mass:** In some materials (e.g., Silicon in certain directions, GaAs), the curvature of the energy band is the same in all directions. In such cases, the effective mass is a scalar.

*   **Anisotropic Effective Mass:** In many semiconductors (e.g., Silicon along different crystallographic directions), the curvature of the energy bands varies with direction. This means the effective mass is a tensor. For most introductory purposes and for certain simpler band structures (like direct bandgap semiconductors like GaAs), we often use an average or scalar effective mass.

    For Silicon, the conduction band minima are along the $<100>$ directions, and the energy surfaces are ellipsoidal. This leads to two different effective masses:
    *   **Longitudinal effective mass ($m_l^*$):** Along the axis of the ellipsoid.
    *   **Transverse effective mass ($m_t^*$):** Perpendicular to the axis of the ellipsoid.

### 1.5 Significance of Effective Mass

*   **Carrier Mobility ($\mu$):** Effective mass is inversely related to carrier mobility. Lower effective mass generally leads to higher mobility, meaning carriers accelerate more easily under an electric field.
    *   $\mu \propto \frac{1}{m^*}$

*   **Carrier Concentration:** Effective mass appears in the density of states and therefore influences the calculation of carrier concentrations (as seen in Fermi-Dirac statistics).

*   **Device Performance:** Higher mobility (lower effective mass) contributes to faster switching speeds and higher operating frequencies in semiconductor devices.

### 1.6 Example: Effective Mass in Silicon

Silicon has its conduction band minima along the $\Delta$ lines parallel to the $<100>$ directions. The energy surfaces around these minima are ellipsoids of revolution.
*   $m_l^* \approx 0.98 m_0$ (longitudinal)
*   $m_t^* \approx 0.19 m_0$ (transverse)

The valence band maximum is at the $\Gamma$ point ($k=0$) and has a more complex structure. It leads to light holes ($m_{lh}^*$) and heavy holes ($m_{hh}^*$).
*   $m_{lh}^* \approx 0.16 m_0$
*   $m_{hh}^* \approx 0.49 m_0$

The **density-of-states effective mass** is used for calculating carrier concentrations.
*   Density-of-states effective mass for electrons ($m_{de}^*$) in Si: $m_{de}^* = (N_c)^{2/3} m_t^* = (6)^{2/3} m_t^* \approx 1.06 m_0$. Where $N_c=6$ is the number of conduction band valleys.
*   Density-of-states effective mass for holes ($m_{dh}^*$): $m_{dh}^* = (m_{lh}^{3/2} + m_{hh}^{3/2})^{2/3} \approx 0.59 m_0$.

**(Refer to Pierret Ch. 2, Shur Ch. 2, Sze Ch. 1 & 2 for detailed band structures and effective mass calculations.)**

---

## 2. Concept of Fermi Level ($E_F$)

### 2.1 Introduction

The **Fermi level** is a fundamental concept in solid-state physics that describes the energy level at which a charge carrier (electron or hole) has a 50% probability of being occupied at absolute zero temperature. In a system of non-interacting fermions, it represents the highest occupied energy level at 0 K. In semiconductors, it is a conceptual energy level that helps determine the carrier concentrations under equilibrium conditions.

### 2.2 Fermi-Dirac Distribution Function ($f(E)$)

The probability that an energy state $E$ is occupied by an electron at a given temperature $T$ is described by the Fermi-Dirac distribution function:

$$ f(E) = \frac{1}{1 + e^{(E - E_F) / (k_B T)}} $$

where:
*   $E$ is the energy of the state.
*   $E_F$ is the Fermi level.
*   $k_B$ is the Boltzmann constant ($1.38 \times 10^{-23}$ J/K or $8.617 \times 10^{-5}$ eV/K).
*   $T$ is the absolute temperature in Kelvin.

**Key Properties of $f(E)$:**
*   If $E = E_F$, then $f(E_F) = \frac{1}{1 + e^0} = \frac{1}{2}$. (50% probability of occupation at any temperature).
*   If $E \ll E_F$, then $e^{(E - E_F) / (k_B T)} \rightarrow 0$, so $f(E) \rightarrow 1$. (State is almost certainly occupied).
*   If $E \gg E_F$, then $e^{(E - E_F) / (k_B T)} \rightarrow \infty$, so $f(E) \rightarrow 0$. (State is almost certainly empty).
*   At $T = 0$ K:
    *   $f(E) = 1$ for $E < E_F$
    *   $f(E) = 0$ for $E > E_F$
    *   $f(E)$ is undefined at $E = E_F$.

### 2.3 Fermi Level in Different Materials

*   **Metals:** In metals, the Fermi level lies within a partially filled energy band. At 0 K, all states below $E_F$ are filled, and all states above are empty.

*   **Insulators:** In insulators, there is a large band gap between the filled valence band and the empty conduction band. The Fermi level typically lies within this band gap.

*   **Semiconductors:** In semiconductors, the Fermi level generally lies within the band gap. Its position within the band gap is crucial for determining the type and concentration of charge carriers.

### 2.4 Fermi Level in Intrinsic Semiconductors

An intrinsic semiconductor has no intentional impurities. The number of electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$).
*   $n = p = n_i$ (intrinsic carrier concentration)

In an intrinsic semiconductor, the Fermi level ($E_i$) is located approximately at the **middle of the band gap**.

$$ E_i \approx E_g / 2 $$

More precisely, it is located where the product of the electron and hole densities equals $n_i^2$. The position is slightly shifted from the exact middle due to the difference in density of states effective masses for electrons and holes.

$$ E_i = \frac{E_c + E_v}{2} + \frac{3}{4} k_B T \ln\left(\frac{m_p^*}{m_n^*}\right) $$

where $E_c$ is the conduction band edge and $E_v$ is the valence band edge.

**(Refer to CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.)**

### 2.5 Fermi Level in Extrinsic Semiconductors

Extrinsic semiconductors have intentional impurities (dopants) that alter the carrier concentrations.

#### 2.5.1 n-type Semiconductors

Doped with donor impurities (e.g., Phosphorus in Silicon). Donor atoms donate electrons to the conduction band.
*   In n-type semiconductors, the electron concentration ($n$) is much greater than the hole concentration ($p$): $n \gg p$.
*   The Fermi level ($E_F$) is located **closer to the conduction band edge ($E_c$)**. The higher the doping concentration, the closer $E_F$ is to $E_c$.

**Approximation for $n$ in n-type semiconductors:**
When $E_F$ is well above $E_i$ (typically when $n > 10^{17}$ cm$^{-3}$ in Si at room temperature), the Fermi-Dirac distribution can be approximated by the Maxwell-Boltzmann distribution:

$$ n \approx N_c e^{-(E_c - E_F) / (k_B T)} $$

From this, we can estimate the Fermi level:
$$ E_F \approx E_c - k_B T \ln\left(\frac{N_c}{n}\right) $$
where $N_c$ is the effective density of states in the conduction band ($N_c = 2(2\pi m_{de}^* k_B T / h^2)^{3/2}$).

#### 2.5.2 p-type Semiconductors

Doped with acceptor impurities (e.g., Boron in Silicon). Acceptor atoms accept electrons from the valence band, creating holes.
*   In p-type semiconductors, the hole concentration ($p$) is much greater than the electron concentration ($n$): $p \gg n$.
*   The Fermi level ($E_F$) is located **closer to the valence band edge ($E_v$)**. The higher the doping concentration, the closer $E_F$ is to $E_v$.

**Approximation for $p$ in p-type semiconductors:**
When $E_F$ is well below $E_i$ (typically when $p > 10^{17}$ cm$^{-3}$ in Si at room temperature), the Fermi-Dirac distribution can be approximated by the Maxwell-Boltzmann distribution:

$$ p \approx N_v e^{-(E_F - E_v) / (k_B T)} $$

From this, we can estimate the Fermi level:
$$ E_F \approx E_v + k_B T \ln\left(\frac{N_v}{p}\right) $$
where $N_v$ is the effective density of states in the valence band ($N_v = 2(2\pi m_{dh}^* k_B T / h^2)^{3/2}$).

**(Refer to CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.)**

### 2.6 Temperature Dependence of the Fermi Level

*   **Intrinsic Semiconductor:** The Fermi level is nearly constant and close to the middle of the band gap. Its slight shift is due to the $m_p^*/m_n^*$ ratio.

*   **n-type Semiconductor:** As temperature increases:
    *   More intrinsic carriers are generated, so $n_i$ increases.
    *   Dopants are ionized at lower temperatures. At very high temperatures, $n_i$ can become comparable to the donor concentration ($N_D$), and the semiconductor starts behaving intrinsically.
    *   The Fermi level ($E_F$) starts near $E_c$ (for low T, high doping) and moves **towards the middle of the band gap** as temperature increases and $n_i$ becomes significant.

*   **p-type Semiconductor:** Similar to n-type, the Fermi level ($E_F$) starts near $E_v$ (for low T, high doping) and moves **towards the middle of the band gap** as temperature increases.

**(Refer to Sze Ch. 2, Neamen Ch. 3 for detailed temperature dependence analysis.)**

### 2.7 Significance of the Fermi Level

*   **Carrier Concentration:** It directly dictates the electron and hole concentrations in the conduction and valence bands, respectively, through the Fermi-Dirac distribution.
*   **Contact Potentials:** The alignment of Fermi levels is crucial in determining the potential barrier at junctions between different materials or differently doped regions (e.g., p-n junctions, metal-semiconductor contacts).
*   **Device Operation:** The position of the Fermi level relative to the band edges is fundamental to understanding the behavior of semiconductor devices under equilibrium and non-equilibrium conditions. For example, in a forward-biased p-n junction, the Fermi level splits into quasi-Fermi levels.

**(Refer to CO3: Apply the concept of semiconductor physics to solve the current components in semiconductor devices.)**

---

## 3. Important Points to Remember

*   **Effective Mass ($m^*$):** A parameter that accounts for the interaction of charge carriers with the crystal lattice, inversely related to the curvature of the energy bands ($E-k$ diagram). It impacts mobility and carrier statistics.
*   **Fermi Level ($E_F$):** An energy level whose probability of occupation is 50%. Its position within the band gap determines whether a semiconductor is n-type or p-type and influences carrier concentrations.
*   **Intrinsic Semiconductor:** $E_F$ is near the middle of the band gap.
*   **n-type Semiconductor:** $E_F$ is closer to the conduction band edge.
*   **p-type Semiconductor:** $E_F$ is closer to the valence band edge.
*   The position of $E_F$ changes with doping concentration and temperature.
*   Understanding $m^*$ and $E_F$ is essential for calculating carrier concentrations and analyzing device behavior.

---

## 4. Practice Questions

1.  **Effective Mass:**
    *   Explain the physical origin of the concept of effective mass in semiconductors.
    *   How does the curvature of the $E-k$ diagram influence the effective mass?
    *   What is the significance of the density-of-states effective mass?
    *   Given the $E-k$ relation for a hypothetical semiconductor as $E(k) = A - B \cos(ak)$, where A and B are constants and 'a' is a lattice constant, derive an expression for the effective mass of an electron near the bottom of the band.

2.  **Fermi Level:**
    *   Define the Fermi level and the Fermi-Dirac distribution function.
    *   Sketch the Fermi-Dirac distribution at T = 0 K and T > 0 K.
    *   Where is the Fermi level located in an intrinsic semiconductor? Explain why.
    *   Sketch the position of the Fermi level in n-type and p-type semiconductors relative to the band edges. How does it change with increasing doping concentration?
    *   Consider a silicon sample doped with $10^{16}$ cm$^{-3}$ donor impurities. Assume $N_c = 2.8 \times 10^{19}$ cm$^{-3}$ at 300 K. Calculate the position of the Fermi level relative to the conduction band edge ($E_c - E_F$) using the Maxwell-Boltzmann approximation.

---

## 5. Answers to Practice Questions

1.  **Effective Mass:**
    *   **Physical Origin:** Electrons in a crystal lattice are influenced by the periodic potential of the ions. This interaction causes their energy-momentum relationship ($E-k$) to deviate from that of free electrons. The effective mass is a parameter that captures this deviation, allowing us to apply classical-like equations of motion to these "quasi-particles" under external forces. It essentially represents how easily a charge carrier accelerates in response to an applied force, taking into account the influence of the crystal lattice.
    *   **Curvature and Effective Mass:** The effective mass is inversely proportional to the second derivative of the energy with respect to the wave vector ($m^* \propto 1 / (d^2E/dk^2)$). A **sharply curved** band (large $d^2E/dk^2$) implies a **small** effective mass, meaning carriers are easily accelerated. A **flat** band (small $d^2E/dk^2$) implies a **large** effective mass, meaning carriers are less responsive to applied forces.
    *   **Density-of-States Effective Mass:** This effective mass is used in calculations involving the number of available energy states (density of states) in the conduction or valence bands. It's often an average of the directional effective masses and is crucial for determining carrier concentrations using statistical distributions. For example, $m_{de}^*$ for electrons and $m_{dh}^*$ for holes.
    *   **Derivation:**
        Given $E(k) = A - B \cos(ak)$.
        First derivative: $\frac{dE}{dk} = -B \sin(ak) \cdot a$.
        Second derivative: $\frac{d^2E}{dk^2} = -B a^2 \cos(ak)$.
        At the bottom of the band, $k=0$ (assuming the minimum is at $k=0$ for simplicity in this example, though real bands might not be centered at $k=0$).
        $\frac{d^2E}{dk^2}\Big|_{k=0} = -B a^2 \cos(0) = -B a^2$.
        The effective mass is given by:
        $\frac{1}{m^*} = \frac{1}{\hbar^2} \frac{d^2E}{dk^2} = \frac{-B a^2}{\hbar^2}$.
        $m^* = \frac{-\hbar^2}{B a^2}$.
        For a valid effective mass, we expect it to be positive. This suggests that the curvature must be positive at the band minimum. If the relation was $E(k) = A + B \cos(ak)$ for a minimum at $k=0$, then $d^2E/dk^2 = -Ba^2$, leading to $m^* = \hbar^2 / (Ba^2)$. If the relation was $E(k) = A - B \cos(ak)$ for a minimum at $k = \pi/a$, then $d^2E/dk^2|_{k=\pi/a} = -Ba^2 \cos(\pi) = Ba^2$. This would give $m^* = \hbar^2 / (Ba^2)$. The key is that the effective mass is positive and inversely proportional to the positive curvature.

2.  **Fermi Level:**
    *   **Definition:** The Fermi level ($E_F$) is a characteristic energy level in a material, representing the energy at which the probability of an electron occupying a state is exactly 0.5 (or 50%). It is defined by the Fermi-Dirac distribution function: $f(E) = \frac{1}{1 + e^{(E - E_F) / (k_B T)}}$.
    *   **Sketches:**
        *   **T = 0 K:** A step function. $f(E) = 1$ for $E < E_F$, and $f(E) = 0$ for $E > E_F$.
        *   **T > 0 K:** An 'S' shaped curve, symmetric about the point ($E_F$, 0.5). The transition from filled to empty states is smeared out over an energy range of about $2-3 k_B T$.
    *   **Intrinsic Semiconductor:** The Fermi level ($E_i$) is located approximately at the middle of the band gap ($E_g$). This is because, in an intrinsic semiconductor, the number of electrons in the conduction band ($n$) is equal to the number of holes in the valence band ($p$). For $n=p$, the Fermi-Dirac distribution function, when applied to both conduction and valence bands (considering their respective densities of states), results in the Fermi level being positioned such that these equal concentrations are achieved.
    *   **Extrinsic Semiconductors:**
        *   **n-type:** $E_F$ is located closer to the conduction band edge ($E_c$). As the donor concentration increases, more electrons are available, pushing $E_F$ higher towards $E_c$.
        *   **p-type:** $E_F$ is located closer to the valence band edge ($E_v$). As the acceptor concentration increases, more holes are created, pulling $E_F$ lower towards $E_v$.
        *   **Doping Concentration:** Higher doping means $E_F$ moves further away from the intrinsic Fermi level ($E_i$) and closer to the majority carrier band edge.
    *   **Calculation:**
        Given $n = 10^{16}$ cm$^{-3}$ and $N_c = 2.8 \times 10^{19}$ cm$^{-3}$ at 300 K.
        Using the Maxwell-Boltzmann approximation for $n$:
        $n \approx N_c e^{-(E_c - E_F) / (k_B T)}$
        $\frac{n}{N_c} \approx e^{-(E_c - E_F) / (k_B T)}$
        Take the natural logarithm of both sides:
        $\ln\left(\frac{n}{N_c}\right) = -\frac{E_c - E_F}{k_B T}$
        $E_c - E_F = -k_B T \ln\left(\frac{n}{N_c}\right)$
        $E_c - E_F = k_B T \ln\left(\frac{N_c}{n}\right)$

        At 300 K, $k_B T \approx (8.617 \times 10^{-5} \text{ eV/K}) \times (300 \text{ K}) \approx 0.0259 \text{ eV}$.

        $E_c - E_F = (0.0259 \text{ eV}) \ln\left(\frac{2.8 \times 10^{19} \text{ cm}^{-3}}{10^{16} \text{ cm}^{-3}}\right)$
        $E_c - E_F = (0.0259 \text{ eV}) \ln(2800)$
        $E_c - E_F = (0.0259 \text{ eV}) \times 7.937$
        $E_c - E_F \approx 0.2056 \text{ eV}$

        The Fermi level is approximately 0.2056 eV below the conduction band edge.

---

This concludes the study notes for the concept of effective mass and Fermi level. Ensure to refer to the provided textbooks for a deeper understanding and more detailed mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
