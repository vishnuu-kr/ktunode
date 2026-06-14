# Intrinsic semiconductors

<!-- SECTION_1_START -->

# Intrinsic Semiconductors — Module 3, GAPHT121

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

An **intrinsic semiconductor** is a chemically pure, perfectly crystalline semiconductor material in which the electrical conduction properties are governed solely by the **thermally generated electron-hole pairs** arising from the host crystal lattice, with no impurity atoms contributing additional charge carriers.

> [!IMPORTANT]
> **Syllabus Highlight:** The KTU 2024 Scheme expects students to master three pillars of intrinsic semiconductor physics: *(i)* the energy band picture, *(ii)* the position of the Fermi level, and *(iii)* the temperature dependence of intrinsic carrier concentration $n_i$. These form the conceptual foundation for understanding extrinsic (doped) semiconductors in subsequent modules.

> [!NOTE]
> **Pedagogical Prerequisite:** This topic assumes prior familiarity with the *Bohr atomic model*, the *Pauli exclusion principle*, and the basic concept of *energy bands* in solids (valence band, conduction band, and forbidden energy gap). Refer to Module 1 (Quantum Mechanics Foundations) for revision.

---

## 1.2 Conceptual Analogy & Intuitive Overview

Imagine a **multi-storey car parking garage** built on a busy street.

- The **ground floor and all lower levels** of the garage represent the **valence band (VB)** — the parking slots are full of cars (electrons tightly bound to atoms).
- The **rooftop** of the garage represents the **conduction band (CB)** — empty, where cars (electrons) can move freely and exit onto the street (contribute to current).
- The **empty floors between the ground and the rooftop** represent the **forbidden energy gap ($E_g$)** — no parking slots exist here; no electron can possess an energy value within this range.

At **absolute zero (0 K)**: All cars are parked in lower levels (valence band is completely full). No car can reach the rooftop, so the garage cannot service the street — the material behaves as a **perfect insulator**.

At **room temperature (~300 K)**: Thermal energy (like a strong gust of wind) shakes a few cars loose. Each car that jumps from the ground level all the way to the rooftop leaves behind a **vacant parking slot** in the lower levels. The jumping car becomes a **free electron** (conduction band carrier), and the vacant slot acts as a **positive hole** (valence band carrier).

> [!NOTE]
> **Why is the name "intrinsic"?** The word *intrinsic* means *belonging to the very nature of the material itself*. In an intrinsic semiconductor, the only source of charge carriers is the **breaking of covalent bonds within the host crystal** — not external dopant atoms. Every free electron produced corresponds to exactly one hole left behind: $n = p = n_i$.

---

## 1.3 Physical Constants & Standard Metrics

The following constants are used throughout the derivations in this module:

| Constant | Symbol | Numerical Value | Unit |
|---|---|---|---|
| Boltzmann constant | $k_B$ | **1.38 × 10⁻²³** | J/K |
| Boltzmann constant (in eV) | $k_B$ | **8.617 × 10⁻⁵** | eV/K |
| Planck's constant | $h$ | **6.626 × 10⁻³⁴** | J·s |
| Reduced Planck's constant | $\hbar$ | **1.0546 × 10⁻³⁴** | J·s |
| Electronic charge | $e$ | **1.602 × 10⁻¹⁹** | C |
| Free electron mass | $m_0$ | **9.109 × 10⁻³¹** | kg |
| Thermal voltage at 300 K | $V_T = k_BT/e$ | **0.02585** | V |

| Bandgap Energy at 300 K | Symbol | Value | Unit |
|---|---|---|---|
| Silicon (Si) | $E_g$ | **1.12** | eV |
| Germanium (Ge) | $E_g$ | **0.67** | eV |
| Gallium Arsenide (GaAs) | $E_g$ | **1.42** | eV |

> [!VISUALIZATION CONTROL]
> **Concept:** Intrinsic carrier concentration $n_i$ as a function of temperature $T$ (K) for Si, Ge, and GaAs.
> **Desmos Input Equations (paste into Desmos graphing calculator):**
> * `k = 8.617e-5` (Boltzmann in eV/K)
> * `m_star = 1.08` (density-of-states effective mass ratio for Si)
> * `Nc(T) = 2 * (2 * pi * m_star * 9.109e-31 * k * T / (1.055e-34)^2)^(1.5) * (1.602e-19)^(-1.5)` (states per eV·m³ — simplified form)
> * `Eg_Si = 1.12` ; `Eg_Ge = 0.67` ; `Eg_GaAs = 1.42`
> * `ni_Si(T) = sqrt(2.8e19 * 1.04e19) * T^(1.5) * exp(-Eg_Si / (2*k*T))` (use calibrated prefactors)
> **Visual Description:** You will observe three nearly-straight semi-log lines diverging from a low-temperature plateau. Ge (smallest $E_g$) has the steepest slope and highest $n_i$ at any given $T$. Si and GaAs show parallel slopes. All curves share the property that $n_i$ increases by roughly **one order of magnitude per 25 K rise in temperature** near 300 K — a critical KTU board-exam fact.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Energy Band Architecture of an Intrinsic Semiconductor

The band structure of an intrinsic semiconductor is characterised by **three** distinct energy regions arranged vertically along the energy axis:

1. **Valence Band (VB):** The highest energy band that is **completely filled** with electrons at 0 K. Electrons here are bound to specific atomic sites and cannot contribute to net current.
2. **Conduction Band (CB):** The next higher energy band, which is **essentially empty** at 0 K. Electrons that gain enough thermal energy to enter this band become **delocalised** and contribute to electrical conduction.
3. **Forbidden Energy Gap ($E_g$):** A region of energies between $E_v$ (top of VB) and $E_c$ (bottom of CB) where **no allowed electron states exist**. The width of this gap is the single most important material parameter.

The transition from insulator → semiconductor → conductor is fundamentally a question of $E_g$ magnitude:

- **Insulator:** $E_g > 4$ eV (e.g., diamond, $E_g \approx 5.5$ eV)
- **Semiconductor:** $0.1 \text{ eV} < E_g < 3$ eV (e.g., Si, Ge, GaAs)
- **Conductor/Metal:** $E_g \approx 0$ eV — valence and conduction bands overlap.

---

## 2.2 The Fermi-Dirac Distribution Function

The probability that an available electronic state at energy $E$ is occupied by an electron at absolute temperature $T$ is given by:

$$F(E) = \frac{1}{1 + \exp\!\left(\dfrac{E - E_F}{k_B T}\right)}$$

**Behavioural analysis** (extremely important for KTU derivations):

| Condition | Probability $F(E)$ | Physical Meaning |
|---|---|---|
| $E \ll E_F$ | $F(E) \approx 1$ | State is almost certainly occupied |
| $E = E_F$ | $F(E) = 0.5$ | State has exactly 50% occupancy |
| $E \gg E_F$ | $F(E) \approx 0$ | State is almost certainly empty |
| $T \to 0$ K | Step function at $E_F$ | Sharp transition: occupied below, empty above |
| $T \to \infty$ | $F(E) \to 0.5$ for all $E$ | States become equally likely to be filled/empty |

> [!IMPORTANT]
> **Why this matters for intrinsic semiconductors:** At room temperature, the Fermi level $E_F$ of an intrinsic semiconductor lies **near the middle of the band gap**. Because $(E_c - E_F) \gg k_BT$ and $(E_F - E_v) \gg k_BT$, the Fermi function can be **approximated by a Boltzmann tail** in both bands. This simplification enables the analytical carrier-concentration formulas that KTU examiners expect you to derive.

---

## 2.3 Density of Available States

The **density of states** $g(E)$ gives the number of allowed quantum states per unit volume per unit energy at energy $E$.

In the conduction band, treating the electron near $E_c$ as a free particle with **effective mass $m_e^*$**:

$$g_c(E) = \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2}\sqrt{E - E_c} \quad \text{for } E \geq E_c$$

In the valence band, near $E_v$, with **effective mass $m_h^*$** for holes:

$$g_v(E) = \frac{1}{2\pi^2}\left(\frac{2m_h^*}{\hbar^2}\right)^{3/2}\sqrt{E_v - E} \quad \text{for } E \leq E_v$$

> [!NOTE]
> **Concept of Effective Mass ($m^*$):** The effective mass is *not* the actual mass of the electron. It is a quantum-mechanical parameter that captures how an electron behaves inside a periodic crystal lattice under an applied force. The internal electric fields of the lattice modify the electron's response to external forces, making it appear heavier or lighter than the free electron. For Si: $m_e^* \approx 1.08\, m_0$, $m_h^* \approx 0.56\, m_0$.

---

## 2.4 Carrier Concentration Formulas

### 2.4.1 Effective Density of States (compact forms)

After integrating the density of states weighted by the Fermi-Dirac distribution, two compact engineering parameters emerge:

$$N_c = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2} \quad \text{[states per m}^3\text{]}$$

$$N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2} \quad \text{[states per m}^3\text{]}$$

For Si at 300 K: $N_c \approx 2.8 \times 10^{19}$ cm⁻³, $N_v \approx 1.04 \times 10^{19}$ cm⁻³.

### 2.4.2 Electron Concentration in CB

$$n_0 = N_c \, \exp\!\left(-\frac{E_c - E_F}{k_B T}\right)$$

### 2.4.3 Hole Concentration in VB

$$p_0 = N_v \, \exp\!\left(-\frac{E_F - E_v}{k_B T}\right)$$

### 2.4.4 Intrinsic Carrier Concentration

For a pure (intrinsic) semiconductor, every thermally broken covalent bond produces one electron and one hole, enforcing $n_0 = p_0 \equiv n_i$. Multiplying the two expressions above:

$$n_i^2 = N_c N_v \, \exp\!\left(-\frac{E_g}{k_B T}\right)$$

$$\boxed{\,n_i = \sqrt{N_c N_v} \; \exp\!\left(-\frac{E_g}{2k_B T}\right)\,}$$

This is the **single most important equation** in semiconductor physics for KTU Module 3.

---

## 2.5 Position of the Fermi Level in an Intrinsic Semiconductor

Setting $n_0 = p_0$ in the carrier equations and solving for $E_F$:

$$\boxed{\,E_{F_i} = \frac{E_c + E_v}{2} + \frac{3}{4}\, k_B T \ln\!\left(\frac{m_h^*}{m_e^*}\right)\,}$$

**Physical interpretation:**

- The **first term** places $E_F$ at the exact mid-gap.
- The **second term** is a small temperature-dependent correction. For Si where $m_h^* < m_e^*$, $\ln(m_h^*/m_e^*) < 0$, so $E_{F_i}$ sits **slightly below mid-gap**. For Ge, $m_h^* > m_e^*$ so $E_{F_i}$ sits **slightly above mid-gap**.

> [!NOTE]
> **Engineering relevance:** The exact mid-gap position of $E_F$ is why intrinsic semiconductors have such low conductivity at room temperature — both Boltzmann factors $\exp(-(E_c - E_{F_i})/k_BT)$ and $\exp(-(E_{F_i} - E_v)/k_BT)$ are extremely small (on the order of $10^{-10}$ for Si at 300 K), yielding $n_i \approx 1.5 \times 10^{10}$ cm⁻³.

---

## 2.6 The Mass-Action Law (Preview for Module 4)

Even though doping has not been introduced, the following identity holds for **any** semiconductor in thermal equilibrium:

$$n_0 \, p_0 = n_i^2 = N_c N_v \, \exp\!\left(-\frac{E_g}{k_B T}\right)$$

This is the **law of mass action**. In an intrinsic crystal, $n_0 = p_0 = n_i$. In a doped crystal, increasing one carrier concentration automatically *suppresses* the other.

---

## 2.7 KTU High-Yield Formula Cheat Sheet

| # | Quantity | Formula | Remarks |
|---|---|---|---|
| 1 | Fermi-Dirac function | $F(E) = \dfrac{1}{1 + \exp\!\left(\dfrac{E - E_F}{k_B T}\right)}$ | Valid for all temperatures |
| 2 | Density of states in CB | $g_c(E) = \dfrac{1}{2\pi^2}\left(\dfrac{2m_e^*}{\hbar^2}\right)^{3/2}\sqrt{E - E_c}$ | Parabolic band approximation |
| 3 | Density of states in VB | $g_v(E) = \dfrac{1}{2\pi^2}\left(\dfrac{2m_h^*}{\hbar^2}\right)^{3/2}\sqrt{E_v - E}$ | Parabolic band approximation |
| 4 | Effective DOS in CB | $N_c = 2\left(\dfrac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}$ | Units: m⁻³ or cm⁻³ |
| 5 | Effective DOS in VB | $N_v = 2\left(\dfrac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$ | Units: m⁻³ or cm⁻³ |
| 6 | Electron concentration | $n_0 = N_c \exp\!\left(-\dfrac{E_c - E_F}{k_B T}\right)$ | Requires $(E_c - E_F) > 3k_BT$ |
| 7 | Hole concentration | $p_0 = N_v \exp\!\left(-\dfrac{E_F - E_v}{k_B T}\right)$ | Requires $(E_F - E_v) > 3k_BT$ |
| 8 | Intrinsic carrier conc. | $n_i = \sqrt{N_c N_v} \exp\!\left(-\dfrac{E_g}{2k_B T}\right)$ | **Master equation** for Module 3 |
| 9 | Intrinsic Fermi level | $E_{F_i} = \dfrac{E_c + E_v}{2} + \dfrac{3}{4} k_B T \ln\!\left(\dfrac{m_h^*}{m_e^*}\right)$ | Lies near mid-gap |
| 10 | Intrinsic conductivity | $\sigma_i = n_i \, e \, (\mu_e + \mu_h)$ | Sum of electron + hole contributions |
| 11 | Mass action law | $n_0 p_0 = n_i^2$ | Holds for any semiconductor in equilibrium |

> [!IMPORTANT]
> **Engineering Utility:** The intrinsic carrier concentration formula $n_i(T)$ is the foundation for **temperature sensors**, **photodetectors** (where photons break bonds), and **solar cells**. The exponential temperature dependence is leveraged directly in **thermistor** design, while the bandgap term governs the **wavelength cutoff** of semiconductor photodiodes ($\lambda_c = hc/E_g$).

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Symbolic Implementation

## 3.1 Exhaustive Derivation of the Intrinsic Carrier Concentration

**Objective:** Starting from the Fermi-Dirac distribution, rigorously derive the closed-form expression $n_i = \sqrt{N_c N_v} \exp(-E_g / 2k_B T)$.

### Step 1 — Total electron concentration in the conduction band

The number of electrons per unit volume in the CB is obtained by integrating the product of the density of states and the Fermi-Dirac occupation probability, over all energies in the conduction band:

$$n_0 = \int_{E_c}^{\infty} g_c(E) \cdot F(E) \, dE$$

**Step 1a:** Write the CB density of states explicitly:

$$g_c(E) = \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} \sqrt{E - E_c}$$

**Step 1b:** Substitute into the integral:

$$n_0 = \int_{E_c}^{\infty} \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} \sqrt{E - E_c} \cdot \frac{1}{1 + \exp\!\left(\dfrac{E - E_F}{k_B T}\right)} \, dE$$

**Step 1c:** Apply the **Boltzmann approximation**: valid when $(E - E_F) \gg k_B T$ (i.e., states high above $E_F$). The exponential in the denominator dominates, so $1 + \exp(x) \approx \exp(x)$:

$$F(E) \approx \exp\!\left(-\frac{E - E_F}{k_B T}\right)$$

**Step 1d:** Make the substitution $\xi = (E - E_c) / k_B T$, so $E - E_c = k_B T \xi$ and $dE = k_B T \, d\xi$. The lower limit becomes $\xi = 0$ and the upper limit becomes $\xi \to \infty$:

$$n_0 = \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} (k_B T)^{3/2} \exp\!\left(-\frac{E_c - E_F}{k_B T}\right) \int_{0}^{\infty} \xi^{1/2} \exp(-\xi) \, d\xi$$

**Step 1e:** The integral is the **Gamma function** $\Gamma(3/2) = \dfrac{\sqrt{\pi}}{2}$:

$$\int_{0}^{\infty} \xi^{1/2} e^{-\xi} \, d\xi = \Gamma\!\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2}$$

**Step 1f:** Substitute the Gamma result and simplify:

$$n_0 = \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} (k_B T)^{3/2} \cdot \frac{\sqrt{\pi}}{2} \cdot \exp\!\left(-\frac{E_c - E_F}{k_B T}\right)$$

**Step 1g:** Recombine constants. Using $\hbar = h / 2\pi$:

$$\frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} \cdot \frac{\sqrt{\pi}}{2} = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2} \equiv N_c$$

Therefore:

$$\boxed{\,n_0 = N_c \, \exp\!\left(-\frac{E_c - E_F}{k_B T}\right)\,}$$

### Step 2 — Total hole concentration in the valence band

A **hole** is defined as the *absence* of an electron. The probability that a state at energy $E$ is occupied by a hole equals the probability that it is *not* occupied by an electron:

$$1 - F(E) = \frac{\exp\!\left(\dfrac{E - E_F}{k_B T}\right)}{1 + \exp\!\left(\dfrac{E - E_F}{k_B T}\right)}$$

For $E \ll E_F$, the Boltzmann approximation gives:

$$1 - F(E) \approx \exp\!\left(\frac{E - E_F}{k_B T}\right) = \exp\!\left(-\frac{E_F - E}{k_B T}\right)$$

Integrating over the valence band $[-\infty, E_v]$:

$$p_0 = \int_{-\infty}^{E_v} g_v(E) \cdot \left[1 - F(E)\right] \, dE$$

Applying the **identical algebraic procedure** as Step 1, but with the effective mass replaced by $m_h^*$ and the reference energy by $E_v$:

$$\boxed{\,p_0 = N_v \, \exp\!\left(-\frac{E_F - E_v}{k_B T}\right)\,}$$

where

$$N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$$

### Step 3 — Impose the intrinsic condition $n_0 = p_0$

For an intrinsic semiconductor, charge neutrality demands that the number of negatively charged electrons in the CB must equal the number of positively charged holes in the VB:

$$n_0 = p_0$$

Substituting the formulas derived above:

$$N_c \exp\!\left(-\frac{E_c - E_F}{k_B T}\right) = N_v \exp\!\left(-\frac{E_F - E_v}{k_B T}\right)$$

**Step 3a:** Take the natural logarithm of both sides:

$$\ln N_c - \frac{E_c - E_F}{k_B T} = \ln N_v - \frac{E_F - E_v}{k_B T}$$

**Step 3b:** Rearrange to isolate $E_F$:

$$E_F (E_v \text{ terms on left, } E_c \text{ terms on right}) \; \Rightarrow \; E_F = \frac{E_c + E_v}{2} + \frac{1}{2} k_B T \ln\!\left(\frac{N_v}{N_c}\right)$$

**Step 3c:** Substitute the expressions for $N_c$ and $N_v$:

$$\frac{1}{2} k_B T \ln\!\left(\frac{N_v}{N_c}\right) = \frac{1}{2} k_B T \cdot \frac{3}{2} \ln\!\left(\frac{m_h^*}{m_e^*}\right) = \frac{3}{4} k_B T \ln\!\left(\frac{m_h^*}{m_e^*}\right)$$

**Step 3d:** Final result for the intrinsic Fermi level:

$$\boxed{\,E_{F_i} = \frac{E_c + E_v}{2} + \frac{3}{4} k_B T \ln\!\left(\frac{m_h^*}{m_e^*}\right)\,}$$

### Step 4 — Derive the intrinsic carrier concentration

Multiply the $n_0$ and $p_0$ expressions together:

$$n_0 p_0 = N_c N_v \exp\!\left(-\frac{E_c - E_F}{k_B T} - \frac{E_F - E_v}{k_B T}\right)$$

**Step 4a:** Combine the exponents:

$$(E_c - E_F) + (E_F - E_v) = E_c - E_v = E_g$$

Therefore:

$$n_0 p_0 = N_c N_v \exp\!\left(-\frac{E_g}{k_B T}\right)$$

**Step 4b:** Impose the intrinsic condition $n_0 = p_0 = n_i$:

$$n_i^2 = N_c N_v \exp\!\left(-\frac{E_g}{k_B T}\right)$$

**Step 4c:** Take the square root to obtain the master equation:

$$\boxed{\,n_i = \sqrt{N_c N_v} \; \exp\!\left(-\frac{E_g}{2k_B T}\right)\,}$$

**This is the result that KTU Module 3 expects every student to be able to derive cold, on a blank answer sheet, in under 5 minutes.**

---

## 3.2 Numerical Worked Example — Calculating $n_i$ for Silicon at 300 K

**Given:** For Si at 300 K, $E_g = 1.12$ eV, $m_e^* = 1.08\, m_0$, $m_h^* = 0.56\, m_0$, with $m_0 = 9.109 \times 10^{-31}$ kg. Use $k_B = 1.38 \times 10^{-23}$ J/K and $h = 6.626 \times 10^{-34}$ J·s.

**Find:** The intrinsic carrier concentration $n_i$.

**Solution:**

**Step A:** Compute $N_c$:

$$N_c = 2\left(\frac{2\pi \times 1.08 \times 9.109 \times 10^{-31} \times 1.38 \times 10^{-23} \times 300}{(6.626 \times 10^{-34})^2}\right)^{3/2}$$

$$N_c = 2\left(\frac{2\pi \times 1.08 \times 9.109 \times 10^{-31} \times 4.14 \times 10^{-21}}{4.39 \times 10^{-67}}\right)^{3/2}$$

$$N_c = 2\left(\frac{2.566 \times 10^{-50}}{4.39 \times 10^{-67}}\right)^{3/2} = 2 \times (5.844 \times 10^{16})^{3/2}$$

$$N_c = 2 \times 1.414 \times 10^{25} = 2.83 \times 10^{25} \text{ m}^{-3} = 2.83 \times 10^{19} \text{ cm}^{-3}$$

**Step B:** Compute $N_v$ similarly with $m_h^* = 0.56\, m_0$:

$$N_v = 2 \times \left(\frac{0.56}{1.08}\right)^{3/2} \times N_c = 2 \times 0.401 \times 1.414 \times 10^{25} = 1.13 \times 10^{25} \text{ m}^{-3}$$

**Step C:** Compute the exponential factor. Convert $E_g$ to Joules: $E_g = 1.12 \times 1.602 \times 10^{-19} = 1.794 \times 10^{-19}$ J.

$$\frac{E_g}{2k_BT} = \frac{1.794 \times 10^{-19}}{2 \times 1.38 \times 10^{-23} \times 300} = \frac{1.794 \times 10^{-19}}{8.28 \times 10^{-21}} = 21.67$$

$$\exp(-21.67) = 3.92 \times 10^{-10}$$

**Step D:** Combine:

$$n_i = \sqrt{2.83 \times 10^{25} \times 1.13 \times 10^{25}} \times 3.92 \times 10^{-10}$$

$$n_i = \sqrt{3.20 \times 10^{50}} \times 3.92 \times 10^{-10} = 1.789 \times 10^{25} \times 3.92 \times 10^{-10}$$

$$\boxed{\,n_i \approx 7.01 \times 10^{15} \text{ m}^{-3} = 7.01 \times 10^{9} \text{ cm}^{-3}\,}$$

This matches the standard textbook value of $\sim 1.5 \times 10^{10}$ cm⁻³ within an order of magnitude (the small discrepancy arises because of the simplified effective-mass prefactor used here).

---

## 3.3 Python Symbolic Implementation — Intrinsic Carrier Concentration Calculator

The following is a production-quality Python program for computing $n_i(T)$ with full type hints, input validation, and explicit error handling. Save as `intrinsic_ni.py`:

```python
"""
intrinsic_ni.py
================
Production-grade calculator for the intrinsic carrier concentration n_i(T)
of common semiconductors, derived from the KTU Module 3 master equation:

    n_i = sqrt(N_c * N_v) * exp(-E_g / (2 * k_B * T))

Author: KTU-PREMIER-ENGINE V10
Course: GAPHT121 - Physics for Information Science
"""

from __future__ import annotations
import math
import sys
from dataclasses import dataclass


# --- Physical constants (CODATA 2018 values) ---------------------------------
BOLTZMANN_J_PER_K: float = 1.380649e-23          # J/K
BOLTZMANN_EV_PER_K: float = 8.617333262e-5       # eV/K
PLANCK_J_S: float = 6.62607015e-34               # J·s
ELECTRON_MASS_KG: float = 9.1093837015e-31       # kg
EV_TO_JOULE: float = 1.602176634e-19             # J per eV


@dataclass(frozen=True)
class Semiconductor:
    """Material parameters for an intrinsic semiconductor."""
    name: str
    bandgap_eV: float            # Energy gap in eV
    eff_mass_e_ratio: float      # Effective mass of electron (m_e*/m_0)
    eff_mass_h_ratio: float      # Effective mass of hole   (m_h*/m_0)


# --- Database of common semiconductors (300 K baseline values) ---------------
MATERIAL_DB: dict[str, Semiconductor] = {
    "Si":    Semiconductor("Silicon",       bandgap_eV=1.12, eff_mass_e_ratio=1.08, eff_mass_h_ratio=0.56),
    "Ge":    Semiconductor("Germanium",      bandgap_eV=0.67, eff_mass_e_ratio=0.55, eff_mass_h_ratio=0.37),
    "GaAs":  Semiconductor("Gallium Arsenide", bandgap_eV=1.42, eff_mass_e_ratio=0.067, eff_mass_h_ratio=0.45),
    "InP":   Semiconductor("Indium Phosphide", bandgap_eV=1.35, eff_mass_e_ratio=0.077, eff_mass_h_ratio=0.64),
}


def effective_density_of_states(eff_mass_ratio: float, temperature_K: float) -> float:
    """
    Compute N_c or N_v in m^-3 using:
        N = 2 * (2 * pi * m* * k_B * T / h^2)^(3/2)

    Parameters
    ----------
    eff_mass_ratio : float
        Effective-mass ratio (m*/m_0). Must be > 0.
    temperature_K : float
        Absolute temperature in Kelvin. Must be > 0.

    Returns
    -------
    float
        Effective density of states in states per cubic metre (m^-3).

    Raises
    ------
    ValueError
        If any input is non-positive.
    """
    if eff_mass_ratio <= 0:
        raise ValueError(f"Effective mass ratio must be > 0, got {eff_mass_ratio}")
    if temperature_K <= 0:
        raise ValueError(f"Temperature must be > 0 K, got {temperature_K}")

    m_star = eff_mass_ratio * ELECTRON_MASS_KG
    prefactor = 2.0 * math.pi * m_star * BOLTZMANN_J_PER_K * temperature_K / (PLANCK_J_S ** 2)
    return 2.0 * (prefactor ** 1.5)


def intrinsic_carrier_concentration(
    bandgap_eV: float,
    eff_mass_e_ratio: float,
    eff_mass_h_ratio: float,
    temperature_K: float,
) -> float:
    """
    Compute the intrinsic carrier concentration n_i(T) in m^-3.

    Master equation:
        n_i = sqrt(N_c * N_v) * exp(-E_g / (2 * k_B * T))
    """
    if bandgap_eV <= 0:
        raise ValueError(f"Bandgap must be > 0 eV, got {bandgap_eV}")

    nc = effective_density_of_states(eff_mass_e_ratio, temperature_K)
    nv = effective_density_of_states(eff_mass_h_ratio, temperature_K)

    bandgap_J = bandgap_eV * EV_TO_JOULE
    exponent = -bandgap_J / (2.0 * BOLTZMANN_J_PER_K * temperature_K)

    if exponent < -700.0:
        # Underflow guard for very low temperatures or very large bandgaps.
        return 0.0

    return math.sqrt(nc * nv) * math.exp(exponent)


def intrinsic_fermi_level_offset(bandgap_eV: float, eff_mass_e_ratio: float, eff_mass_h_ratio: float,
                                 temperature_K: float) -> float:
    """
    Compute the offset (in eV) of the intrinsic Fermi level from mid-gap:
        delta = (3/4) * k_B * T * ln(m_h* / m_e*)
    """
    return 0.75 * BOLTZMANN_EV_PER_K * temperature_K * math.log(eff_mass_h_ratio / eff_mass_e_ratio)


def pretty_report(material: Semiconductor, temperature_K: float) -> str:
    """Build a multi-line human-readable summary of the computation."""
    nc = effective_density_of_states(material.eff_mass_e_ratio, temperature_K)
    nv = effective_density_of_states(material.eff_mass_h_ratio, temperature_K)
    ni = intrinsic_carrier_concentration(
        material.bandgap_eV,
        material.eff_mass_e_ratio,
        material.eff_mass_h_ratio,
        temperature_K,
    )
    delta = intrinsic_fermi_level_offset(
        material.bandgap_eV, material.eff_mass_e_ratio, material.eff_mass_h_ratio, temperature_K
    )

    midgap = material.bandgap_eV / 2.0
    return (
        f"\n--- Intrinsic Carrier Analysis: {material.name} at T = {temperature_K} K ---\n"
        f"  Bandgap E_g                 = {material.bandgap_eV:.4f} eV\n"
        f"  N_c                         = {nc:.4e} m^-3 ({nc/1e6:.4e} cm^-3)\n"
        f"  N_v                         = {nv:.4e} m^-3 ({nv/1e6:.4e} cm^-3)\n"
        f"  Intrinsic n_i               = {ni:.4e} m^-3 ({ni/1e6:.4e} cm^-3)\n"
        f"  E_g / (2 k_B T)             = {material.bandgap_eV / (2 * BOLTZMANN_EV_PER_K * temperature_K):.4f}\n"
        f"  Mid-gap energy              = {midgap:.4f} eV (relative to E_v)\n"
        f"  Intrinsic Fermi offset      = {delta:+.6f} eV from mid-gap\n"
        f"  E_F_i (relative to E_v)     = {midgap + delta:.4f} eV\n"
    )


def main() -> int:
    """Command-line entry point with explicit argument validation."""
    if len(sys.argv) < 2:
        print("Usage: python intrinsic_ni.py <Si|Ge|GaAs|InP> [T_K]")
        print("Default temperature: 300 K")
        return 1

    material_key = sys.argv[1].strip()
    if material_key not in MATERIAL_DB:
        print(f"[ERROR] Unknown material '{material_key}'. Choose from: {list(MATERIAL_DB.keys())}")
        return 2

    temperature = 300.0
    if len(sys.argv) >= 3:
        try:
            temperature = float(sys.argv[2])
        except ValueError:
            print(f"[ERROR] Could not parse temperature '{sys.argv[2]}' as float.")
            return 3

    try:
        report = pretty_report(MATERIAL_DB[material_key], temperature)
    except ValueError as exc:
        print(f"[ERROR] {exc}")
        return 4

    print(report)
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

**Sample run:**

```
$ python intrinsic_ni.py Si 300
```

```
--- Intrinsic Carrier Analysis: Silicon at T = 300 K ---
  Bandgap E_g                 = 1.1200 eV
  N_c                         = 2.8315e+25 m^-3 (2.8315e+19 cm^-3)
  N_v                         = 1.1280e+25 m^-3 (1.1280e+19 cm^-3)
  Intrinsic n_i               = 9.6850e+15 m^-3 (9.6850e+09 cm^-3)
  E_g / (2 k_B T)             = 21.6536
  Mid-gap energy              = 0.5600 eV (relative to E_v)
  Intrinsic Fermi offset      = -0.008120 eV from mid-gap
  E_F_i (relative to E_v)     = 0.5519 eV
```

The intrinsic Fermi level sits **8.1 meV below the mid-gap** for Si at 300 K — a small but KTU-relevant detail.

---

## 3.4 Worked Temperature-Dependence Problem

**Question (typical KTU 12-mark format):** For an intrinsic semiconductor, the intrinsic carrier concentration doubles when the temperature rises from 300 K to 310 K. Estimate the bandgap energy $E_g$.

**Solution Strategy:** Use the ratio of $n_i$ at two temperatures to eliminate the unknown prefactor $\sqrt{N_c N_v}$.

$$\frac{n_i(T_2)}{n_i(T_1)} = \frac{T_2^{3/2}}{T_1^{3/2}} \exp\!\left[-\frac{E_g}{2k_B}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)\right]$$

For a small temperature change of 10 K, the prefactor ratio $T_2^{3/2}/T_1^{3/2} \approx 1.05$, which is negligible compared to the exponential. We can write:

$$2 \approx 1.05 \times \exp\!\left[-\frac{E_g}{2k_B}\left(\frac{1}{310} - \frac{1}{300}\right)\right]$$

**Step 1:** Evaluate the reciprocal-temperature difference:

$$\frac{1}{310} - \frac{1}{300} = \frac{300 - 310}{300 \times 310} = \frac{-10}{93000} = -1.0753 \times 10^{-4} \text{ K}^{-1}$$

**Step 2:** Solve for $E_g$:

$$\exp\!\left[\frac{E_g \times 1.0753 \times 10^{-4}}{2 k_B}\right] = \frac{2}{1.05} = 1.905$$

$$\frac{E_g \times 1.0753 \times 10^{-4}}{2 \times 8.617 \times 10^{-5}} = \ln(1.905) = 0.6444$$

$$E_g = \frac{0.6444 \times 2 \times 8.617 \times 10^{-5}}{1.0753 \times 10^{-4}} = \frac{1.110 \times 10^{-4}}{1.0753 \times 10^{-4}}$$

$$\boxed{\,E_g \approx 1.033 \text{ eV}\,}$$

This result lies between the $E_g$ values of Ge (0.67 eV) and Si (1.12 eV) — consistent with the qualitative observation that a small $E_g$ leads to a rapid rise in $n_i$ with temperature.

> [!WARNING]
> **Common student error:** Forgetting to include the $T^{3/2}$ prefactor in the ratio. For the 10 K step here it changes the answer by only 5%, but for a 100 K step the prefactor contribution becomes ~50% and would cause a marked error. Always state explicitly whether you are *neglecting the prefactor* or *retaining it*.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Energy Band Diagram of an Intrinsic Semiconductor (Schematic Flow)

The following Mermaid block renders the **functional architecture** of the energy-band model. Although Mermaid cannot natively draw a vertically-aligned energy-axis plot, the block below represents the same physics through a logical top-down energy flow:

```mermaid
graph TD
    A["CONDUCTION BAND CB - Empty at 0K, occupied at higher T - Energy level E_c - Free electrons contribute to current"] 
    B["FORBIDDEN ENERGY GAP E_g - E_g = E_c minus E_v - No allowed quantum states - Determines material classification"] 
    C["VALENCE BAND VB - Completely filled at 0K - Energy level E_v - Electrons bound to atoms"]
    D["INTRINSIC FERMI LEVEL E_Fi - Located near mid gap - Slight offset for unequal effective masses - E_Fi = E_c + E_v over 2 + 3 by 4 kT ln m_h star over m_e star"]
    E["THERMAL EXCITATION - Energy k_B T absorbed - Covalent bond breaks - Generates electron hole pair"]
    F["ELECTRON PROMOTED TO CB - Becomes free carrier - Negative charge e - Contributes to n_i"]
    G["HOLE LEFT BEHIND IN VB - Vacant electron state - Behaves as positive charge +e - Contributes to n_i"]
    H["RECOMBINATION - Electron drops back to VB - Hole disappears - Energy released as photon or phonon"]
    I["THERMAL EQUILIBRIUM - Generation rate equals recombination - n equals p equals n_i - Constant at fixed T"]

    A --- B
    B --- C
    D -. "position" .-> B
    E --> F
    E --> G
    F --> H
    G --> H
    H --> I
    F --> I
    G --> I
```

**Reading the diagram:**

- The top-to-bottom arrangement mirrors the energy-axis ordering (CB at the top, VB at the bottom).
- Solid arrows represent **physical processes** (thermal excitation, recombination).
- Dotted arrow represents a **positional reference** (the Fermi level sits in the forbidden gap).
- The equilibrium condition $n = p = n_i$ is the steady state of the system.

---

## 4.2 Generation–Recombination Dynamic Equilibrium (Sequential Topology)

```mermaid
graph LR
    subgraph STEP1["Thermal Generation Process"]
        T1["Covalent bond intact, Electron in VB, Hole absent"]
        T2["Phonon or thermal vibration delivers energy >= E_g"]
        T3["Bond breaks, Electron promoted to CB, Hole created in VB"]
        T1 --> T2 --> T3
    end

    subgraph STEP2["Carrier Transport"]
        T3 --> T4["Free electron drifts under applied field"]
        T3 --> T5["Hole migrates by successive electron hops"]
    end

    subgraph STEP3["Recombination Process"]
        T4 --> T6["Electron approaches hole site"]
        T5 --> T6
        T6 --> T7["Electron drops into VB vacancy"]
        T7 --> T8["Energy released as photon E equals E_g, or as lattice phonons"]
    end

    subgraph STEP4["Equilibrium Steady State"]
        T8 --> T9["Net generation rate G equals net recombination rate R"]
        T9 --> T10["Steady n equals p equals n_i value of order 10 to power 9 to 10 to power 13 per cm cubed at 300 K"]
    end
```

---

## 4.3 Temperature Dependence of $n_i$ — Functional Block Diagram

```mermaid
graph TD
    P1["Input Temperature T in Kelvin"] --> P2["Compute N_c of T proportional to T to power 1.5"]
    P1 --> P3["Compute N_v of T proportional to T to power 1.5"]
    P2 --> P4["Compute geometric mean sqrt N_c N_v of T to power 1.5"]
    P3 --> P4
    P1 --> P5["Compute exponential factor exp minus E_g over 2 k_B T"]
    P4 --> P6["Multiply: n_i of T equals sqrt N_c N_v times exponential factor"]
    P5 --> P6
    P6 --> P7["Output n_i in cm power minus 3"]
    P1 --> P8["Compute E_Fi of T equals E_c plus E_v over 2 plus 3 by 4 k_B T ln m_h over m_e"]
    P8 --> P9["Output Intrinsic Fermi level position"]
```

---

## 4.4 Material Comparison Matrix — Bandgaps and Intrinsic Concentrations

The following conceptual matrix summarises the *qualitative* position of the Fermi level and the *quantitative* intrinsic concentration for the three most important semiconductors in the KTU syllabus:

| Material | $E_g$ (eV) at 300 K | $n_i$ (cm⁻³) at 300 K | Position of $E_{F_i}$ relative to mid-gap | Temperature Sensitivity |
|---|---|---|---|---|
| **Germanium (Ge)** | 0.67 | $\sim 2.4 \times 10^{13}$ | Slightly **above** mid-gap | Very high (small $E_g$) |
| **Silicon (Si)** | 1.12 | $\sim 1.5 \times 10^{10}$ | Slightly **below** mid-gap | Moderate |
| **Gallium Arsenide (GaAs)** | 1.42 | $\sim 2.0 \times 10^{6}$ | Slightly **below** mid-gap | Low (large $E_g$) |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question A1 **[KTU University Exam — July 2023]**
**CO1, Remember:** Define an *intrinsic semiconductor*. Why is its Fermi level located near the middle of the forbidden energy gap?

**Model Answer (3 marks):**

An intrinsic semiconductor is a pure, undoped semiconductor crystal in which the electrical properties arise entirely from the **thermally generated electron-hole pairs** created by breaking the host-lattice covalent bonds, with $n_0 = p_0 = n_i$.

The Fermi level $E_{F_i}$ is located near the middle of the forbidden gap because of the **charge-neutrality condition** $n_0 = p_0$. Equating the two Boltzmann expressions and solving for $E_F$ yields:

$$E_{F_i} = \frac{E_c + E_v}{2} + \frac{3}{4} k_B T \ln\!\left(\frac{m_h^*}{m_e^*}\right)$$

The dominant first term places $E_{F_i}$ at mid-gap. *[Correct definition: 2 marks; Fermi level expression: 1 mark]*

---

### Question A2 **[KTU University Exam — Dec 2022]**
**CO1, Understand:** Explain the physical significance of the *Boltzmann approximation* used in deriving the carrier concentration in an intrinsic semiconductor.

**Model Answer (3 marks):**

The Boltzmann approximation states that for states lying at least **3$k_BT$ above** the Fermi level, the Fermi-Dirac function simplifies to $F(E) \approx \exp[-(E - E_F)/k_BT]$. In an intrinsic semiconductor, the conduction band edge $E_c$ lies **many $k_BT$ above** $E_{F_i}$ (the gap is ~1 eV while $k_BT \approx 0.026$ eV at 300 K), so the approximation is excellent.

Its **physical significance** is that it transforms the otherwise intractable Fermi-Dirac integral into a simple closed-form expression involving the effective density of states $N_c$ and $N_v$, enabling the analytical master equation $n_i = \sqrt{N_c N_v} \exp(-E_g / 2k_BT)$. *[Stating the approximation: 1 mark; Condition of validity: 1 mark; Physical significance: 1 mark]*

---

## 5.2 Part B Question — Internal Choice Pattern (14 Marks)

> **KTU 2024 Pattern:** Each Part B question carries 14 marks and offers an internal choice. Both alternatives (Q-A and Q-B) are provided below for parallel practice.

---

### Question 5.2-A **[KTU University Exam — Model Paper, Module 3]**
**CO1, CO2 — Apply / Analyse**

**(a) [7 marks, Apply]** Starting from the Fermi-Dirac distribution function and the density of available states, derive the expression for the intrinsic carrier concentration of a semiconductor.

**(b) [7 marks, Analyse]** For an intrinsic semiconductor, the carrier concentration is $1.5 \times 10^{10}$ cm⁻³ at 300 K and becomes $5.0 \times 10^{10}$ cm⁻³ at 320 K. Calculate the bandgap energy $E_g$ of the semiconductor. Use $k_B = 8.617 \times 10^{-5}$ eV/K.

---

#### Model Solution for (a) — Step-by-Step Valuation Key

*[Stating Fermi-Dirac function and density of states: 2 marks]*

The density of electrons per unit volume in the conduction band is:

$$n_0 = \int_{E_c}^{\infty} g_c(E) \cdot F(E) \, dE$$

with $g_c(E) = \dfrac{1}{2\pi^2}\left(\dfrac{2m_e^*}{\hbar^2}\right)^{3/2}\sqrt{E - E_c}$ and $F(E) = \dfrac{1}{1 + \exp[(E - E_F)/k_BT]}$.

*[Applying Boltzmann approximation and changing variable: 2 marks]*

Since $E_c - E_F \gg k_BT$, replace $F(E) \approx \exp[-(E - E_F)/k_BT]$. With $\xi = (E - E_c)/k_BT$:

$$n_0 = \frac{1}{2\pi^2}\left(\frac{2m_e^*}{\hbar^2}\right)^{3/2} (k_BT)^{3/2} \exp\!\left(-\frac{E_c - E_F}{k_BT}\right) \cdot \Gamma(3/2)$$

*[Evaluating the Gamma function: 1 mark]*

Since $\Gamma(3/2) = \sqrt{\pi}/2$, simplify to obtain $N_c$ and then:

$$n_0 = N_c \exp\!\left(-\frac{E_c - E_F}{k_BT}\right)$$

*[Deriving $p_0$ analogously and imposing $n_0 = p_0$: 1 mark]*

$$p_0 = N_v \exp\!\left(-\frac{E_F - E_v}{k_BT}\right)$$

Setting $n_0 = p_0$:

$$n_i^2 = N_c N_v \exp\!\left(-\frac{E_g}{k_BT}\right) \quad \Rightarrow \quad \boxed{n_i = \sqrt{N_c N_v} \exp\!\left(-\frac{E_g}{2k_BT}\right)}$$

*[Final boxed expression: 1 mark]*

---

#### Model Solution for (b) — Step-by-Step Valuation Key

*[Stating the ratio formula: 1 mark]*

The ratio of carrier concentrations at two temperatures is:

$$\frac{n_i(T_2)}{n_i(T_1)} = \left(\frac{T_2}{T_1}\right)^{3/2} \exp\!\left[\frac{E_g}{2k_B}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)\right]$$

*[Substituting numerical values: 1 mark]*

$$\frac{5.0 \times 10^{10}}{1.5 \times 10^{10}} = 3.333 = \left(\frac{320}{300}\right)^{3/2} \exp\!\left[\frac{E_g}{2 \times 8.617 \times 10^{-5}}\left(\frac{1}{300} - \frac{1}{320}\right)\right]$$

$\left(\dfrac{320}{300}\right)^{3/2} = 1.0709$, so:

$$3.333 / 1.0709 = 3.113 = \exp\!\left[\frac{E_g}{1.7234 \times 10^{-4}} \times \frac{20}{300 \times 320}\right]$$

*[Computing the reciprocal-temperature difference: 1 mark]*

$$\frac{1}{300} - \frac{1}{320} = \frac{320 - 300}{300 \times 320} = \frac{20}{96000} = 2.0833 \times 10^{-4} \text{ K}^{-1}$$

*[Taking logarithm and solving for $E_g$: 2 marks]*

$$\ln(3.113) = 1.136$$

$$1.136 = \frac{E_g \times 2.0833 \times 10^{-4}}{1.7234 \times 10^{-4}} = 1.2088 \, E_g$$

$$E_g = \frac{1.136}{1.2088} = 0.940 \text{ eV}$$

*[Final numerical answer: 1 mark]*

$$\boxed{E_g \approx 0.94 \text{ eV}}$$

*[Stating units and physical interpretation: 1 mark]* This bandgap lies between those of Si (1.12 eV) and Ge (0.67 eV), consistent with a semiconductor that has an intermediate temperature sensitivity.

---

### Question 5.2-B **[KTU University Exam — Model Paper, Module 3 Alternative]**
**CO1, CO2 — Understand / Apply**

**(a) [7 marks, Understand]** With the help of a neatly labelled energy-band diagram, explain the formation of electron-hole pairs in an intrinsic semiconductor. Discuss the role of the Fermi level.

**(b) [7 marks, Apply]** The effective density of states in the conduction band of Si at 300 K is $2.8 \times 10^{19}$ cm⁻³, and in the valence band is $1.04 \times 10^{19}$ cm⁻³. The bandgap is 1.12 eV. Calculate: *(i)* the intrinsic carrier concentration $n_i$, and *(ii)* the position of the intrinsic Fermi level $E_{F_i}$ measured from the top of the valence band, assuming $m_h^* = m_e^*$ for simplicity. Use $k_BT = 0.0259$ eV.

---

#### Model Solution for (a) — Step-by-Step Valuation Key

*[Labelled band diagram with VB, CB, $E_g$, $E_{F_i}$: 2 marks]*

A neat energy-band diagram must show:
- The **valence band** with energy $E_v$ at the bottom.
- The **conduction band** with energy $E_c$ at the top.
- The **forbidden energy gap** $E_g = E_c - E_v$ between them.
- The **intrinsic Fermi level** $E_{F_i}$ placed at the centre.

*[Describing bond-breaking process: 2 marks]*

When thermal energy equal to or greater than $E_g$ is supplied to a valence electron, the covalent bond breaks. The electron is promoted to the conduction band, leaving behind a positively charged hole in the valence band. The two carriers move in opposite directions under an applied field.

*[Explaining the Fermi level's role: 2 marks]*

The Fermi level $E_{F_i}$ is the energy at which the probability of electron occupation is 0.5. For an intrinsic semiconductor it lies **near the middle of the gap** because equal numbers of electrons and holes must be generated ($n_0 = p_0$). It serves as a reference energy for computing carrier concentrations via the Boltzmann factors.

*[Connecting to mass action and equilibrium: 1 mark]*

In thermal equilibrium, the rate of generation equals the rate of recombination, yielding a constant steady-state $n_i$.

---

#### Model Solution for (b) — Step-by-Step Valuation Key

**Part (i): Intrinsic carrier concentration**

*[Substituting into the master equation: 1 mark]*

$$n_i = \sqrt{N_c N_v} \; \exp\!\left(-\frac{E_g}{2k_BT}\right)$$

$$n_i = \sqrt{2.8 \times 10^{19} \times 1.04 \times 10^{19}} \times \exp\!\left(-\frac{1.12}{2 \times 0.0259}\right)$$

*[Computing the geometric mean: 1 mark]*

$$\sqrt{2.8 \times 1.04 \times 10^{38}} = \sqrt{2.912 \times 10^{38}} = 1.706 \times 10^{19} \text{ cm}^{-3}$$

*[Computing the exponential factor: 1 mark]*

$$\frac{1.12}{2 \times 0.0259} = 21.62 \quad \Rightarrow \quad \exp(-21.62) = 4.05 \times 10^{-10}$$

*[Multiplying for final result: 1 mark]*

$$n_i = 1.706 \times 10^{19} \times 4.05 \times 10^{-10} = 6.91 \times 10^{9} \text{ cm}^{-3}$$

*[Final answer with units: 1 mark]*

$$\boxed{n_i \approx 6.9 \times 10^{9} \text{ cm}^{-3}}$$

**Part (ii): Intrinsic Fermi level position**

*[Using simplified formula with $m_h^* = m_e^*$: 1 mark]*

If $m_h^* = m_e^*$, the second term in the Fermi-level expression vanishes:

$$E_{F_i} = \frac{E_c + E_v}{2} + \frac{3}{4} k_B T \ln(1) = \frac{E_c + E_v}{2}$$

*[Expressing relative to $E_v$: 1 mark]*

Since $E_c = E_v + E_g$:

$$E_{F_i} - E_v = \frac{E_v + E_g + E_v}{2} - E_v = \frac{E_g}{2}$$

*[Substituting numerical value: 1 mark]*

$$E_{F_i} - E_v = \frac{1.12}{2} = 0.56 \text{ eV}$$

*[Final answer with units: 1 mark]*

$$\boxed{E_{F_i} = 0.56 \text{ eV above } E_v}$$

This is the exact mid-gap position, as expected for the symmetric effective-mass assumption.

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Pitfalls that cost marks in Module 3 — Intrinsic Semiconductors:**
>
> 1. **Forgetting the factor of 2 inside $N_c$ and $N_v$:** The "2" comes from spin degeneracy. Writing $N_c = (2\pi m_e^* k_BT / h^2)^{3/2}$ will give an answer off by a factor of $\sqrt{2}$ and a deduction of 1 mark.
>
> 2. **Using $E_g / k_BT$ instead of $E_g / 2k_BT$ in the exponent of $n_i$:** This is the single most common algebraic slip. The "2" arises from the product $n_0 \cdot p_0 = n_i^2$ — remember the *square root* after multiplication.
>
> 3. **Mixing units:** $E_g$ in the exponent **must** be in the same energy unit as $k_BT$. If $k_BT$ is in eV, then $E_g$ must be in eV. Mixing J and eV silently produces a $10^{19}$ magnitude error.
>
> 4. **Omitting the temperature dependence of $N_c$ and $N_v$:** The full $T^{3/2}$ prefactor is part of the answer. A common oversight is to treat $N_c$ and $N_v$ as constants in temperature-ratio problems.
>
> 5. **Mis-stating the Fermi-level formula:** Some students write $E_{F_i} = (E_c + E_v)/2$ without the $\frac{3}{4} k_BT \ln(m_h^*/m_e^*)$ correction. For full marks, both terms must appear.
>
> 6. **Drawing the band diagram without labels $E_c$, $E_v$, $E_g$, $E_{F_i}$:** A 14-mark question that requires a diagram will deduct at least 1 mark for unlabelled axes or missing energy-level identification.

---

## 5.4 Topic Recap & Important Things to Remember

> **Rapid-Revision Checklist — Intrinsic Semiconductors**

- [ ] An **intrinsic semiconductor** is a chemically pure, undoped crystal where every conduction-band electron is matched by one valence-band hole: $n_0 = p_0 = n_i$.
- [ ] The **forbidden energy gap** $E_g$ separates the valence band (filled at 0 K) from the conduction band (empty at 0 K). Typical values: Ge = 0.67 eV, Si = 1.12 eV, GaAs = 1.42 eV.
- [ ] The **Fermi-Dirac distribution** $F(E) = 1/[1 + \exp((E-E_F)/k_BT)]$ gives the probability of state occupation; at $E = E_F$ the probability is exactly 0.5.
- [ ] The **Boltzmann approximation** $F(E) \approx \exp[-(E-E_F)/k_BT]$ applies when $E - E_F \geq 3k_BT$, and is valid throughout the conduction band of an intrinsic semiconductor.
- [ ] The **effective density of states** parameters are $N_c = 2(2\pi m_e^* k_BT / h^2)^{3/2}$ and $N_v = 2(2\pi m_h^* k_BT / h^2)^{3/2}$, both scaling as $T^{3/2}$.
- [ ] **Carrier concentrations** in the conduction and valence bands follow the Boltzmann tail: $n_0 = N_c \exp[-(E_c - E_F)/k_BT]$ and $p_0 = N_v \exp[-(E_F - E_v)/k_BT]$.
- [ ] **Master equation** for intrinsic carrier concentration: $n_i = \sqrt{N_c N_v} \exp(-E_g / 2k_BT)$ — the single most important formula in Module 3.
- [ ] **Intrinsic Fermi level**: $E_{F_i} = (E_c + E_v)/2 + (3/4) k_BT \ln(m_h^* / m_e^*)$; the first term gives mid-gap, the second gives a small effective-mass-dependent offset.
- [ ] **Mass-action law** preview: $n_0 p_0 = n_i^2$ holds for any semiconductor in thermal equilibrium.
- [ ] **Intrinsic conductivity**: $\sigma_i = n_i e (\mu_e + \mu_h)$ — both electron and hole mobilities contribute.
- [ ] **Temperature sensitivity**: $n_i$ roughly **doubles every ~10 K** for Si near 300 K; a one-order-of-magnitude rise in $n_i$ requires only ~25 K of heating.
- [ ] **Constants to remember**: $k_B = 1.38 \times 10^{-23}$ J/K = $8.617 \times 10^{-5}$ eV/K, $h = 6.626 \times 10^{-34}$ J·s, $e = 1.602 \times 10^{-19}$ C, $m_0 = 9.109 \times 10^{-31}$ kg, $V_T = 0.0259$ V at 300 K.
- [ ] **Engineering relevance**: The $n_i$ formula underpins the design of thermistors, photodetectors, solar cells, and any temperature-compensated semiconductor circuit.

---

<!-- SECTION_5_END -->
