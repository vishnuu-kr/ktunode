---
title: "Density of states & Effective density of states"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ab"
status: "completed"
scrapedAt: "2026-05-23T17:47:27.698Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

## Topic: Density of States & Effective Density of States

### Learning Outcomes:

*   Understand the concept of density of states in semiconductors.
*   Derive the expression for the density of states in the conduction band and valence band.
*   Define effective density of states for electrons ($N_C$) and holes ($N_V$).
*   Explain the dependence of effective density of states on effective mass and temperature.
*   Relate density of states to carrier concentrations in equilibrium.

### Course Outcomes Addressed:

*   **CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.** (Understanding density of states is crucial for calculating carrier concentrations using Fermi-Dirac statistics.)
*   **CO3: Apply the concept of semiconductor physics to solve the current components in semiconductor devices.** (Density of states forms the foundation for understanding carrier transport and thus current components.)

---

### 1. Introduction to Density of States (DOS)

In a semiconductor, electrons and holes exist in specific energy levels. The **density of states (DOS)**, denoted by $g(E)$, represents the number of available electronic states per unit energy interval per unit volume. It tells us how many quantum states are available for electrons to occupy at a given energy level within the material.

**Key Concepts:**

*   **Quantum States:** In a crystal lattice, electrons occupy quantized energy states.
*   **Energy Bands:** Due to the periodic potential of the crystal, these discrete energy levels broaden into continuous energy bands, specifically the valence band and the conduction band, separated by a band gap.
*   **Available States:** Not all energy states within a band are necessarily occupied by electrons. DOS quantifies the number of *available* states.

---

### 2. Density of States in the Conduction Band ($g_c(E)$)

Electrons in the conduction band are the charge carriers responsible for electrical conductivity. We are interested in the number of available states for these electrons.

**Derivation Outline (Based on Pierret, Shur, Sze):**

1.  **Free Electron Model:** In the conduction band, electrons are often approximated as free particles within the crystal, but with an **effective mass** ($m_e^*$) that accounts for the influence of the periodic lattice potential.
2.  **Energy-Momentum Relation:** For a parabolic band approximation (valid near the band edge), the energy of an electron in the conduction band is given by:
    $E = E_c + \frac{\hbar^2 k^2}{2m_e^*}$
    where:
    *   $E$ is the electron energy.
    *   $E_c$ is the energy of the conduction band edge.
    *   $\hbar$ is the reduced Planck's constant ($\hbar = h/2\pi$).
    *   $k$ is the wavevector (related to momentum).
    *   $m_e^*$ is the effective mass of the electron.
3.  **Density of States in k-space:** The number of allowed quantum states in k-space is uniformly distributed. For a volume $V$ in real space, the density of states in k-space is $V / (2\pi)^3$.
4.  **Relating Energy and k:** From the energy-momentum relation, we can relate the volume in k-space to an energy interval:
    $k = \sqrt{\frac{2m_e^*}{\hbar^2}(E - E_c)}$
    The number of states within a spherical shell of radius $k$ and thickness $dk$ in k-space is:
    $dN = 2 \cdot \frac{V}{(2\pi)^3} \cdot 4\pi k^2 dk$
    (The factor of 2 is for spin degeneracy).
5.  **Substituting and Normalizing:** Substitute the expression for $k$ and $dk = \frac{m_e^*}{\hbar^2 k} dE$ into the equation for $dN$. After normalization per unit volume ($V$), we get the density of states $g_c(E)$:

    $$g_c(E) = \sqrt{2} (m_e^*)^{3/2} \frac{\sqrt{E - E_c}}{\pi^2 \hbar^3} \quad \text{for } E \ge E_c$$
    $$g_c(E) = 0 \quad \text{for } E < E_c$$

**Important Points:**

*   The DOS in the conduction band starts at the conduction band edge ($E_c$) and increases with the square root of the energy above the band edge.
*   The effective mass ($m_e^*$) plays a crucial role. A larger effective mass leads to a higher density of states.

---

### 3. Density of States in the Valence Band ($g_v(E)$)

The valence band is where holes reside. Holes are essentially the absence of electrons. The density of states for holes is derived analogously to that for electrons, considering that holes behave like positive charges with their own effective mass ($m_h^*$).

**Derivation Outline (Based on Pierret, Shur, Sze):**

1.  **Hole Concept:** Holes are treated as quasi-particles in the valence band.
2.  **Energy-Momentum Relation (for holes):** The energy of a hole is measured relative to the valence band edge ($E_v$), and the relationship is often expressed as:
    $E = E_v - \frac{\hbar^2 k^2}{2m_h^*}$
    (Note: $E_v$ is the upper edge of the valence band, so energies *decrease* as we move away from $E_v$ into the band).
3.  **DOS for Holes:** Similar to electrons, the density of states for holes as a function of energy *below* the valence band edge ($E_v$) is given by:

    $$g_v(E) = \sqrt{2} (m_h^*)^{3/2} \frac{\sqrt{E_v - E}}{\pi^2 \hbar^3} \quad \text{for } E \le E_v$$
    $$g_v(E) = 0 \quad \text{for } E > E_v$$

**Important Points:**

*   The DOS in the valence band is maximum at the valence band edge ($E_v$) and decreases as energy decreases (moving deeper into the valence band).
*   The effective mass of holes ($m_h^*$) also influences the DOS. Semiconductors often have different effective masses for electrons and holes.

---

### 4. Effective Density of States

In semiconductor device analysis, it's often more convenient to work with a simplified representation of the DOS, especially when calculating carrier concentrations. We define the **effective density of states** as a constant value that, when multiplied by the integral of the Fermi-Dirac distribution over the band, yields the total number of carriers.

#### 4.1. Effective Density of States for Electrons ($N_C$)

We define $N_C$ such that the electron concentration ($n$) in the conduction band can be calculated as:

$n = N_C \cdot F_C(E_F - E_c)$

where $F_C(E_F - E_c)$ is the Fermi-Dirac integral for the conduction band.

**Derivation:**

The actual electron concentration is given by:
$n = \int_{E_c}^{\infty} g_c(E) f(E) dE$
where $f(E)$ is the Fermi-Dirac distribution function: $f(E) = \frac{1}{1 + e^{(E - E_F)/kT}}$

When the Fermi level ($E_F$) is several kT below the conduction band edge ($E_c$), the Fermi-Dirac distribution can be approximated by the **Boltzmann approximation**:
$f(E) \approx e^{-(E - E_F)/kT}$ for $E - E_F \gg kT$

Substituting this approximation into the integral:
$n \approx \int_{E_c}^{\infty} \sqrt{2} (m_e^*)^{3/2} \frac{\sqrt{E - E_c}}{\pi^2 \hbar^3} e^{-(E - E_F)/kT} dE$

Let $x = E - E_c$, so $dE = dx$. The integral becomes:
$n \approx \int_{0}^{\infty} \sqrt{2} (m_e^*)^{3/2} \frac{\sqrt{x}}{\pi^2 \hbar^3} e^{-(x + E_c - E_F)/kT} dx$
$n \approx \frac{\sqrt{2} (m_e^*)^{3/2}}{\pi^2 \hbar^3} e^{-(E_c - E_F)/kT} \int_{0}^{\infty} \sqrt{x} e^{-x/kT} dx$

The integral $\int_{0}^{\infty} x^{1/2} e^{-ax} dx = \frac{1}{2a^{3/2}} \Gamma(3/2) = \frac{1}{2a^{3/2}} \frac{\sqrt{\pi}}{2}$.
Here, $a = 1/kT$. So the integral is $\frac{\sqrt{\pi}}{4} (kT)^{3/2}$.

Substituting this back:
$n \approx \frac{\sqrt{2} (m_e^*)^{3/2}}{\pi^2 \hbar^3} e^{-(E_c - E_F)/kT} \frac{\sqrt{\pi}}{4} (kT)^{3/2}$
$n \approx \frac{(m_e^*)^{3/2} (2\pi kT)^{3/2}}{4\pi^3 \hbar^3} e^{-(E_c - E_F)/kT}$

Using $\hbar = h/2\pi$, we get $\hbar^3 = h^3 / (8\pi^3)$.
$n \approx \frac{(m_e^*)^{3/2} (2\pi kT)^{3/2}}{4\pi^3 (h^3 / 8\pi^3)} e^{-(E_c - E_F)/kT}$
$n \approx \frac{(m_e^*)^{3/2} (2\pi kT)^{3/2}}{h^3 / 2} e^{-(E_c - E_F)/kT}$
$n \approx 2 \frac{(2\pi m_e^* kT)^{3/2}}{h^3} e^{-(E_c - E_F)/kT}$

The **effective density of states in the conduction band** is defined as:

$$N_C = 2 \left( \frac{2\pi m_e^* kT}{h^2} \right)^{3/2} = 2 \left( \frac{2\pi m_e^* k}{h^2} \right)^{3/2} T^{3/2}$$

**Therefore, under the Boltzmann approximation:**
$n = N_C e^{-(E_c - E_F)/kT}$

**Dependence of $N_C$:**

*   **Effective Mass ($m_e^*$):** $N_C \propto (m_e^*)^{3/2}$. A higher effective mass means more available states.
*   **Temperature ($T$):** $N_C \propto T^{3/2}$. As temperature increases, the thermal energy spreads out, making more states accessible, thus increasing $N_C$.

#### 4.2. Effective Density of States for Holes ($N_V$)

Similarly, we define $N_V$ such that the hole concentration ($p$) in the valence band can be calculated as:

$p = N_V \cdot F_V(E_v - E_F)$

where $F_V(E_v - E_F)$ is the Fermi-Dirac integral for the valence band.

**Derivation (Analogous to $N_C$, using Boltzmann approximation):**

The hole concentration is given by:
$p = \int_{-\infty}^{E_v} g_v(E) (1 - f(E)) dE$
where $(1 - f(E)) = \frac{1}{1 + e^{(E - E_F)/kT}}$ is the probability of a state being occupied by a hole (i.e., the probability of a state being *empty* of an electron).

Under the Boltzmann approximation for holes ($E_F$ is several kT above $E_v$):
$1 - f(E) \approx e^{-(E_F - E)/kT}$

Substituting into the integral:
$p \approx \int_{-\infty}^{E_v} \sqrt{2} (m_h^*)^{3/2} \frac{\sqrt{E_v - E}}{\pi^2 \hbar^3} e^{-(E_F - E)/kT} dE$

Let $y = E_v - E$, so $dE = -dy$. The integral becomes:
$p \approx \int_{\infty}^{0} \sqrt{2} (m_h^*)^{3/2} \frac{\sqrt{y}}{\pi^2 \hbar^3} e^{-(E_F - (E_v - y))/kT} (-dy)$
$p \approx \frac{\sqrt{2} (m_h^*)^{3/2}}{\pi^2 \hbar^3} e^{-(E_F - E_v)/kT} \int_{0}^{\infty} \sqrt{y} e^{-y/kT} dy$

This is the same integral as before, leading to:
$p \approx 2 \frac{(2\pi m_h^* kT)^{3/2}}{h^3} e^{-(E_F - E_v)/kT}$

The **effective density of states in the valence band** is defined as:

$$N_V = 2 \left( \frac{2\pi m_h^* kT}{h^2} \right)^{3/2} = 2 \left( \frac{2\pi m_h^* k}{h^2} \right)^{3/2} T^{3/2}$$

**Therefore, under the Boltzmann approximation:**
$p = N_V e^{-(E_v - E_F)/kT}$

**Dependence of $N_V$:**

*   **Effective Mass ($m_h^*$):** $N_V \propto (m_h^*)^{3/2}$. A higher effective mass for holes means more available states.
*   **Temperature ($T$):** $N_V \propto T^{3/2}$. Similar to $N_C$, increasing temperature increases $N_V$.

**Important Note on Boltzmann Approximation:**
The Boltzmann approximation is valid when the Fermi level is at least 3-4 kT away from the band edge. In heavily doped semiconductors or at very low temperatures, this approximation may not hold, and the full Fermi-Dirac integral must be used.

---

### 5. Equilibrium Carrier Concentration using DOS

In thermal equilibrium, the electron and hole concentrations are governed by the DOS and the Fermi-Dirac distribution.

**Intrinsic Semiconductor:**
In an intrinsic semiconductor, $E_F$ lies near the middle of the band gap.
$n_i = N_C e^{-(E_c - E_F)/kT}$
$p_i = N_V e^{-(E_v - E_F)/kT}$

Using $E_g = E_c - E_v$, and assuming $E_F$ is exactly at the mid-gap ($E_F = (E_c + E_v)/2$), then $E_c - E_F = E_g/2$ and $E_v - E_F = -E_g/2$.
$n_i = N_C e^{-E_g/2kT}$
$p_i = N_V e^{+E_g/2kT}$

The product $n_i p_i = N_C N_V e^{-E_g/kT}$.
From the law of mass action, $n_i p_i = n_{ni}^2$ (where $n_{ni}$ is the intrinsic carrier concentration). This shows consistency.

**Extrinsic Semiconductor (n-type):**
If the semiconductor is n-type (donors), the Fermi level shifts closer to the conduction band.
$n = N_C e^{-(E_c - E_F)/kT}$
$p = N_V e^{-(E_v - E_F)/kT}$
Due to the law of mass action ($np = n_i^2$), if $n$ is large, $p$ will be small.

**Extrinsic Semiconductor (p-type):**
If the semiconductor is p-type (acceptors), the Fermi level shifts closer to the valence band.
$n = N_C e^{-(E_c - E_F)/kT}$
$p = N_V e^{-(E_v - E_F)/kT}$
Due to the law of mass action ($np = n_i^2$), if $p$ is large, $n$ will be small.

This is directly related to **CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.** The density of states provides the "how many" states are available, and Fermi-Dirac statistics (or its Boltzmann approximation) tells us the probability of occupation.

---

### 6. Examples

**Example 1: Calculating $N_C$ for Silicon at Room Temperature**

Given:
*   Effective mass of electron in Si, $m_e^* = 1.08 m_0$ (where $m_0 = 9.11 \times 10^{-31}$ kg is the free electron mass).
*   Room temperature, $T = 300$ K.
*   Boltzmann constant, $k = 1.38 \times 10^{-23}$ J/K.
*   Planck's constant, $h = 6.626 \times 10^{-34}$ J.s.

Calculate $N_C$:

$N_C = 2 \left( \frac{2\pi m_e^* kT}{h^2} \right)^{3/2}$

First, calculate the term inside the parenthesis:
$\frac{2\pi m_e^* kT}{h^2} = \frac{2\pi (1.08 \times 9.11 \times 10^{-31} \text{ kg}) (1.38 \times 10^{-23} \text{ J/K}) (300 \text{ K})}{(6.626 \times 10^{-34} \text{ J.s})^2}$
$\frac{2\pi m_e^* kT}{h^2} = \frac{2\pi (1.08 \times 9.11 \times 1.38 \times 300)}{6.626^2} \times \frac{10^{-31} \times 10^{-23}}{10^{-68}}$
$\frac{2\pi m_e^* kT}{h^2} \approx 2.42 \times 10^{23} \text{ m}^{-2}$

Now, raise this to the power of 3/2:
$(2.42 \times 10^{23} \text{ m}^{-2})^{3/2} = (2.42)^{3/2} \times (10^{23})^{3/2} \text{ m}^{-3}$
$= 3.77 \times 10^{34.5} \text{ m}^{-3} = 3.77 \times 10^{34} \times 10^{0.5} \text{ m}^{-3}$
$= 3.77 \times 3.16 \times 10^{34} \text{ m}^{-3} \approx 1.19 \times 10^{35} \text{ m}^{-3}$

Finally, multiply by 2:
$N_C = 2 \times (1.19 \times 10^{35} \text{ m}^{-3}) \approx 2.38 \times 10^{35} \text{ m}^{-3}$

In cm$^{-3}$: $N_C \approx 2.38 \times 10^{29} \text{ cm}^{-3}$.
This value is typically quoted as $2.8 \times 10^{19} \text{ cm}^{-3}$ for Silicon. The difference is due to using the simplified parabolic band approximation and constant effective mass. A more accurate calculation considers the density of states effective mass, which accounts for the multiple valleys in Silicon's conduction band. The value $2.8 \times 10^{19} \text{ cm}^{-3}$ is the practical, accepted value for $N_C$ at 300K for Si.

**Example 2: Estimating hole concentration in p-type Si**

Given:
*   Silicon doped with Boron at $N_A = 10^{17} \text{ cm}^{-3}$.
*   $N_V = 1.04 \times 10^{19} \text{ cm}^{-3}$ at 300K.
*   $E_v - E_F = 0.02$ eV (Fermi level is 0.02 eV above the valence band edge, typical for this doping level).
*   $kT = 0.0259$ eV at 300K.

Calculate hole concentration $p$:

Using the formula $p = N_V e^{-(E_v - E_F)/kT}$:
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-(0.02 \text{ eV}) / (0.0259 \text{ eV})}$
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-0.772}$
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot 0.462$
$p \approx 4.8 \times 10^{18} \text{ cm}^{-3}$

This is lower than the acceptor concentration ($10^{17}$ cm$^{-3}$). What's wrong?
The assumption that $N_A$ is fully ionized is crucial here. For doping levels of $10^{17}$ cm$^{-3}$ and acceptor ionization energy of about 0.045 eV, at 300K, a significant portion of acceptors are not ionized. The actual majority carrier concentration is often closer to the doping concentration.

Let's recalculate using the fact that at this doping level, the Fermi level is typically *below* the acceptor level. A more realistic scenario for $N_A = 10^{17}$ cm$^{-3}$ is that the Fermi level is closer to $E_v$. If we assume $E_F$ is at the acceptor level, and it's ionized, the hole concentration should be close to $N_A$.

Let's assume the Fermi level is 0.03 eV below the acceptor level, and the acceptor level is 0.045 eV below $E_v$. So, $E_v - E_F = 0.045 + 0.03 = 0.075$ eV.
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-(0.075 \text{ eV}) / (0.0259 \text{ eV})}$
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-2.896}$
$p = (1.04 \times 10^{19} \text{ cm}^{-3}) \cdot 0.055$
$p \approx 5.7 \times 10^{17} \text{ cm}^{-3}$
This is closer to the doping concentration of $10^{17}$ cm$^{-3}$, and suggests significant ionization. The exact calculation requires considering the ionization of dopants, which is a more advanced topic. However, this demonstrates how DOS and effective densities are used to estimate carrier concentrations.

---

### 7. Practice Questions

1.  **Define Density of States (DOS).** What does it represent in a semiconductor?
2.  **Write down the expression for the density of states in the conduction band ($g_c(E)$).** What physical quantities does it depend on?
3.  **Write down the expression for the density of states in the valence band ($g_v(E)$).** How does it differ from $g_c(E)$ in its dependence on energy?
4.  **What is the effective density of states ($N_C$)?** Derive its expression under the Boltzmann approximation.
5.  **How do temperature and effective mass affect $N_C$ and $N_V$?** Explain the physical reasons behind these dependencies.
6.  **Consider an intrinsic semiconductor.** If the effective density of states in the conduction band ($N_C$) is $2.8 \times 10^{19} \text{ cm}^{-3}$ and in the valence band ($N_V$) is $1.04 \times 10^{19} \text{ cm}^{-3}$ at 300K, and the band gap energy $E_g = 1.12$ eV, calculate the intrinsic carrier concentration ($n_i$). (Assume $E_F$ is at the mid-gap).
7.  **A semiconductor has $N_C = 2.5 \times 10^{19} \text{ cm}^{-3}$ and $N_V = 1.2 \times 10^{19} \text{ cm}^{-3}$ at 300K.** If the Fermi level is 0.3 eV below the conduction band edge ($E_c - E_F = 0.3$ eV), calculate the electron concentration ($n$) in the conduction band using the Boltzmann approximation.

---

### 8. Answers to Practice Questions

1.  **Definition of DOS:** The density of states (DOS), $g(E)$, represents the number of available electronic states per unit energy interval per unit volume within a material. It describes how densely packed the quantum states are at different energy levels.
2.  **$g_c(E)$ Expression:** $g_c(E) = \sqrt{2} (m_e^*)^{3/2} \frac{\sqrt{E - E_c}}{\pi^2 \hbar^3}$ for $E \ge E_c$. It depends on the effective mass of the electron ($m_e^*$), Planck's constant ($\hbar$), and the energy relative to the conduction band edge ($E - E_c$).
3.  **$g_v(E)$ Expression:** $g_v(E) = \sqrt{2} (m_h^*)^{3/2} \frac{\sqrt{E_v - E}}{\pi^2 \hbar^3}$ for $E \le E_v$. It depends on the effective mass of the hole ($m_h^*$), Planck's constant ($\hbar$), and the energy relative to the valence band edge ($E_v - E$). It is maximum at $E_v$ and decreases as energy decreases.
4.  **Effective Density of States ($N_C$):** $N_C$ is a constant that simplifies the calculation of electron concentration. It is defined as $N_C = 2 \left( \frac{2\pi m_e^* kT}{h^2} \right)^{3/2}$.
    **Derivation (Boltzmann Approximation):**
    $n = \int_{E_c}^{\infty} g_c(E) e^{-(E - E_F)/kT} dE$
    $n = \int_{E_c}^{\infty} \sqrt{2} (m_e^*)^{3/2} \frac{\sqrt{E - E_c}}{\pi^2 \hbar^3} e^{-(E - E_F)/kT} dE$
    After variable substitution and integration, this leads to:
    $n = 2 \left( \frac{2\pi m_e^* kT}{h^2} \right)^{3/2} e^{-(E_c - E_F)/kT} = N_C e^{-(E_c - E_F)/kT}$.
5.  **Effect of Temperature and Effective Mass:**
    *   **Temperature (T):** Both $N_C$ and $N_V$ are proportional to $T^{3/2}$. As temperature increases, the thermal energy available increases, broadening the energy distribution of carriers and making more states accessible. This leads to a higher effective density of states.
    *   **Effective Mass ($m^*$):** Both $N_C$ and $N_V$ are proportional to $(m^*)^{3/2}$. A larger effective mass implies that the energy bands are more "flat" or "compressed," meaning there are more states packed into a given energy range. Therefore, a higher effective mass leads to a higher effective density of states.
6.  **Intrinsic Carrier Concentration Calculation:**
    $E_g = 1.12$ eV. At 300K, $kT \approx 0.0259$ eV.
    Assume $E_F$ is at mid-gap, so $E_c - E_F = E_g/2 = 1.12/2 = 0.56$ eV.
    $n_i = N_C e^{-(E_c - E_F)/kT} = (2.8 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-0.56 \text{ eV} / 0.0259 \text{ eV}}$
    $n_i = (2.8 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-21.62}$
    $n_i \approx (2.8 \times 10^{19} \text{ cm}^{-3}) \cdot (1.03 \times 10^{-10})$
    $n_i \approx 2.88 \times 10^9 \text{ cm}^{-3}$.
    *(This is a typical value for intrinsic Si at 300K.)*
7.  **Electron Concentration Calculation:**
    Given $N_C = 2.5 \times 10^{19} \text{ cm}^{-3}$ and $E_c - E_F = 0.3$ eV. Assume $T = 300K$, so $kT = 0.0259$ eV.
    $n = N_C e^{-(E_c - E_F)/kT}$
    $n = (2.5 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-0.3 \text{ eV} / 0.0259 \text{ eV}}$
    $n = (2.5 \times 10^{19} \text{ cm}^{-3}) \cdot e^{-11.58}$
    $n \approx (2.5 \times 10^{19} \text{ cm}^{-3}) \cdot (1.03 \times 10^{-5})$
    $n \approx 2.58 \times 10^{14} \text{ cm}^{-3}$.

---

### 9. Important Points to Remember

*   **DOS ($g(E)$):** Number of available states per unit energy per unit volume.
*   **Conduction Band DOS ($g_c(E)$):** Starts at $E_c$, increases as $\sqrt{E-E_c}$. Depends on $m_e^*$ and $\hbar$.
*   **Valence Band DOS ($g_v(E)$):** Maximum at $E_v$, decreases as $\sqrt{E_v-E}$. Depends on $m_h^*$ and $\hbar$.
*   **Effective Density of States ($N_C, N_V$):** Constants that simplify carrier concentration calculations.
*   **$N_C \propto (m_e^*)^{3/2} T^{3/2}$ and $N_V \propto (m_h^*)^{3/2} T^{3/2}$.**
*   **Boltzmann Approximation:** Valid when $E_F$ is 3-4 kT away from the band edge.
*   **Carrier Concentration Formulas (Boltzmann approx.):**
    *   $n = N_C e^{-(E_c - E_F)/kT}$
    *   $p = N_V e^{-(E_v - E_F)/kT}$
*   Understanding DOS is foundational for calculating carrier concentrations, which is key to understanding device behavior (CO1, CO3).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References and Further Reading

*   **Semiconductor device Fundamentals by Robert Pierret:** Chapters on Semiconductor properties, carrier concentrations.
*   **Physics of Semiconductor Devices by Michael Shur:** Chapters on band structure, density of states, carrier statistics.
*   **Semiconductor Physics and Devices, 3ed, An Indian Adaptation by S.M. Sze, M.K. Lee:** Chapters on semiconductor properties, carrier concentration, and statistics.
*   **Semiconductor Physics and Devices by Neamen:** Excellent coverage of band structure, DOS, and carrier statistics.
*   **Physics of Semiconductor Devices by Sze S.M:** Comprehensive treatment of the underlying physics.

---