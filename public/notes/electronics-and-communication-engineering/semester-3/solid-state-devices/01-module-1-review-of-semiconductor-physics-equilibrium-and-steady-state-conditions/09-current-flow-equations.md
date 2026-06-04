---
title: "Current flow equations"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2b1"
status: "completed"
scrapedAt: "2026-05-23T17:47:31.897Z"
---
# SOLID STATE DEVICES: Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

## Topic: Current Flow Equations

### Learning Outcomes:
*   Understand the fundamental mechanisms of current flow in semiconductors.
*   Derive and interpret the drift and diffusion current density equations.
*   Analyze the continuity equation for carrier concentrations.
*   Apply these equations to describe current flow under equilibrium and steady-state conditions.

### Course Outcomes Alignment:
*   **CO1 (K3):** While not directly about Fermi-Dirac statistics for carrier concentration, understanding current flow requires knowledge of equilibrium carrier concentrations derived from these statistics.
*   **CO2 (K3):** This topic is central to stating different carrier transport mechanisms (drift and diffusion) and obtaining the current densities.
*   **CO3 (K3):** Applying these equations to solve current components in devices is a primary goal of this topic.
*   **CO4 (K3):** Understanding how these equations respond to different biasing conditions is implicitly covered as biasing affects carrier concentrations and electric fields.
*   **CO5 (K2):** While scaling isn't directly addressed here, the foundational current flow equations are essential for analyzing scaled devices.

---

### 1. Introduction to Current Flow in Semiconductors

Current in a semiconductor arises from the movement of charge carriers: electrons and holes. Two primary mechanisms contribute to this movement:

*   **Drift:** The directed motion of charge carriers under the influence of an applied electric field.
*   **Diffusion:** The net movement of charge carriers from a region of high concentration to a region of low concentration due to random thermal motion.

**Key Concept:** In a semiconductor, both electrons and holes can contribute to the total current.

**Reference:**
*   **Pierret, R. (1996).** *Semiconductor Device Fundamentals.* Chapter 2.
*   **Sze, S. M., & Lee, M. K. (2021).** *Semiconductor Physics and Devices, 3ed, An Indian Adaptation.* Chapter 2.

---

### 2. Drift Current

When an electric field ($E$) is applied to a semiconductor, charged carriers experience a force and accelerate. This acceleration is counteracted by scattering events (e.g., with lattice vibrations, impurities), leading to a net drift velocity ($v_d$).

**Drift Velocity ($v_d$):**
The drift velocity is proportional to the electric field strength:
$v_d = -\mu E$

Where:
*   $v_d$ is the drift velocity (m/s). The negative sign indicates electrons drift in the opposite direction of the electric field.
*   $\mu$ is the **mobility** of the charge carrier (cm²/V·s or m²/V·s). Mobility is a measure of how easily a charge carrier can move through the semiconductor material under an electric field. It depends on the material, temperature, and doping concentration.

**Current Density ($J$):**
Current density is defined as the amount of current flowing per unit cross-sectional area.

*   **Electron Drift Current Density ($J_n$):**
    $J_n = q n v_{dn}$
    Since $v_{dn} = -\mu_n E$,
    $J_n = q n (-\mu_n E) = -q n \mu_n E$

    Where:
    *   $q$ is the elementary charge ($1.602 \times 10^{-19}$ C).
    *   $n$ is the electron concentration (cm⁻³ or m⁻³).
    *   $\mu_n$ is the electron mobility (cm²/V·s or m²/V·s).
    *   $E$ is the electric field strength (V/cm or V/m).

*   **Hole Drift Current Density ($J_p$):**
    $J_p = q p v_{dp}$
    Since $v_{dp} = \mu_p E$,
    $J_p = q p \mu_p E$

    Where:
    *   $p$ is the hole concentration (cm⁻³ or m⁻³).
    *   $\mu_p$ is the hole mobility (cm²/V·s or m²/V·s).

**Total Drift Current Density:**
The total drift current density is the sum of electron and hole drift current densities:
$J_{drift} = J_n + J_p = -q n \mu_n E + q p \mu_p E = qE(\mu_p p - \mu_n n)$

**Conductivity ($\sigma$):**
The proportionality constant between current density and electric field for a homogeneous material is conductivity.
$J = \sigma E$

From the drift current equations, we can see that the conductivity of a semiconductor is given by:
$\sigma = q(n \mu_n + p \mu_p)$

**Important Points:**
*   Mobility ($\mu$) is a crucial material property that dictates drift current.
*   In intrinsic semiconductors, $n = p = n_i$, so $\sigma_i = q n_i (\mu_n + \mu_p)$.
*   In extrinsic semiconductors, one carrier type typically dominates, significantly influencing conductivity. For n-type, $n \gg p$, so $\sigma \approx q n \mu_n$. For p-type, $p \gg n$, so $\sigma \approx q p \mu_p$.

**Example:**
Consider a silicon sample doped with $10^{16}$ cm⁻³ of donor impurities at room temperature. Assume electron mobility $\mu_n = 1350$ cm²/V·s and hole mobility $\mu_p = 450$ cm²/V·s. If an electric field of $100$ V/cm is applied, calculate the drift current density.

**Solution:**
In an n-type semiconductor with moderate doping, we can assume $n \approx N_D = 10^{16}$ cm⁻³.
$J_n = -q n \mu_n E = -(1.602 \times 10^{-19} \text{ C}) \times (10^{16} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s}) \times (100 \text{ V/cm})$
$J_n \approx -2.16 \times 10^2 \text{ A/cm}^2$ (The negative sign indicates the direction of electron flow, which is opposite to the electric field).

$J_p = q p \mu_p E$. In this n-type sample, $p = n_i^2 / N_D = (1.5 \times 10^{10})^2 / 10^{16} \approx 2.25 \times 10^4$ cm⁻³.
$J_p = (1.602 \times 10^{-19} \text{ C}) \times (2.25 \times 10^4 \text{ cm}^{-3}) \times (450 \text{ cm}^2/\text{V} \cdot \text{s}) \times (100 \text{ V/cm})$
$J_p \approx 1.62 \times 10^{-4} \text{ A/cm}^2$.

Total drift current density $J_{drift} = J_n + J_p \approx -2.16 \times 10^2 \text{ A/cm}^2$. The hole contribution is negligible.

**Reference:**
*   **Shur, M. (2019).** *Physics of Semiconductor Devices.* Chapter 2.
*   **Neamen, D. A. (2017).** *Semiconductor Physics and Devices.* Chapter 3.

---

### 3. Diffusion Current

Diffusion occurs when there is a non-uniform distribution of charge carriers (a concentration gradient). Carriers move from regions of higher concentration to regions of lower concentration, driven by their random thermal motion.

**Fick's First Law of Diffusion:**
The diffusion flux ($F$) is proportional to the negative of the concentration gradient ($\frac{dn}{dx}$):
$F = -D \frac{dn}{dx}$

Where:
*   $F$ is the diffusion flux (number of carriers per unit area per unit time).
*   $D$ is the **diffusion coefficient** (cm²/s or m²/s). It is related to the mobility by the Einstein relation.

**Einstein Relation:**
This fundamental relationship connects the diffusion coefficient ($D$) and the mobility ($\mu$) for a given carrier type, mediated by temperature:
$\frac{D}{\mu} = \frac{kT}{q} = V_T$

Where:
*   $k$ is the Boltzmann constant ($1.38 \times 10^{-23}$ J/K).
*   $T$ is the absolute temperature (K).
*   $V_T = \frac{kT}{q}$ is the thermal voltage, which is approximately $26$ mV at room temperature ($T = 300$ K).

**Diffusion Current Density ($J$):**
The diffusion current density is the charge per unit volume per unit time. It is obtained by multiplying the diffusion flux by the charge of the carrier.

*   **Electron Diffusion Current Density ($J_n$):**
    $J_n = q D_n (-\frac{dn}{dx})$
    $J_n = -q D_n \frac{dn}{dx}$

    Where:
    *   $D_n$ is the diffusion coefficient for electrons.

*   **Hole Diffusion Current Density ($J_p$):**
    $J_p = -q D_p (-\frac{dp}{dx})$
    $J_p = q D_p \frac{dp}{dx}$

    Where:
    *   $D_p$ is the diffusion coefficient for holes.

**Important Points:**
*   Diffusion current flows only when there is a concentration gradient.
*   The direction of diffusion current is from high concentration to low concentration for positive charge carriers (holes) and from low concentration to high concentration for negative charge carriers (electrons) when viewed by the charge flow direction.

**Example:**
Consider a silicon sample where the electron concentration varies linearly from $10^{17}$ cm⁻³ at $x=0$ to $10^{15}$ cm⁻³ at $x=1 \mu m$. Assume $D_n = 35$ cm²/s. Calculate the electron diffusion current density at $x=0$.

**Solution:**
The concentration gradient is:
$\frac{dn}{dx} = \frac{10^{15} - 10^{17}}{1 \mu m} = \frac{10^{15} - 10^{17}}{10^{-4} \text{ cm}} = (10^{-2} - 1) \times 10^{19} \text{ cm}^{-4} = -0.99 \times 10^{19} \text{ cm}^{-4}$

The electron diffusion current density at $x=0$ is:
$J_n = -q D_n \frac{dn}{dx} = -(1.602 \times 10^{-19} \text{ C}) \times (35 \text{ cm}^2/\text{s}) \times (-0.99 \times 10^{19} \text{ cm}^{-4})$
$J_n \approx 5.55 \times 10^1 \text{ A/cm}^2$

**Reference:**
*   **Sze, S. M. (2015).** *Physics of Semiconductor Devices.* Chapter 1.
*   **Achuthan, A., & Bhat, K. N. (2015).** *Fundamentals of Semiconductor Devices.* Chapter 3.

---

### 4. Total Current Density

In general, the total current density in a semiconductor is the sum of the drift and diffusion components for both electrons and holes.

**Total Current Density Equations:**
*   **Electron Current Density:**
    $J_n = J_{n,drift} + J_{n,diffusion} = q n \mu_n E - q D_n \frac{dn}{dx}$

*   **Hole Current Density:**
    $J_p = J_{p,drift} + J_{p,diffusion} = q p \mu_p E + q D_p \frac{dp}{dx}$

**Total Current Density:**
$J = J_n + J_p = q n \mu_n E - q D_n \frac{dn}{dx} + q p \mu_p E + q D_p \frac{dp}{dx}$
$J = q E (n \mu_n + p \mu_p) - q (D_n \frac{dn}{dx} - D_p \frac{dp}{dx})$

**Important Points:**
*   These equations are fundamental to analyzing most semiconductor devices.
*   In equilibrium, there is no net current flow ($J=0$), and the drift and diffusion components balance each other.
*   Steady-state conditions imply that carrier concentrations do not change with time, but current can flow.

**Reference:**
*   **Pierret, R. (1996).** *Semiconductor Device Fundamentals.* Chapter 2.
*   **Sze, S. M. (2016).** *Semiconductor Devices: Physics and Technology.* Chapter 2.

---

### 5. The Continuity Equation

The continuity equation describes the conservation of charge for mobile carriers. It relates the rate of change of carrier concentration to the net current flow into or out of a region.

**General Continuity Equation:**
The rate of change of carrier concentration in a small volume is equal to the net current flowing into that volume plus any net generation or recombination within the volume.

For electrons:
$\frac{\partial n}{\partial t} = \frac{1}{q} \nabla \cdot J_n + G_n - R_n$

For holes:
$\frac{\partial p}{\partial t} = -\frac{1}{q} \nabla \cdot J_p + G_p - R_p$

Where:
*   $\frac{\partial n}{\partial t}$ and $\frac{\partial p}{\partial t}$ are the time rates of change of electron and hole concentrations, respectively.
*   $\nabla \cdot J_n$ and $\nabla \cdot J_p$ are the divergences of electron and hole current densities, representing the net outward current flow.
*   $G_n$ and $G_p$ are the generation rates for electrons and holes.
*   $R_n$ and $R_p$ are the recombination rates for electrons and holes.

**Continuity Equation in Terms of Drift and Diffusion:**
Substituting the expressions for $J_n$ and $J_p$:

For electrons:
$\frac{\partial n}{\partial t} = \frac{1}{q} \nabla \cdot (q n \mu_n E - q D_n \nabla n) + G_n - R_n$
$\frac{\partial n}{\partial t} = \nabla \cdot (n \mu_n E) - \nabla \cdot (D_n \nabla n) + G_n - R_n$

For holes:
$\frac{\partial p}{\partial t} = -\frac{1}{q} \nabla \cdot (q p \mu_p E + q D_p \nabla p) + G_p - R_p$
$\frac{\partial p}{\partial t} = -\nabla \cdot (p \mu_p E) - \nabla \cdot (D_p \nabla p) + G_p - R_p$

**Steady-State Conditions:**
Under steady-state conditions, carrier concentrations do not change with time ($\frac{\partial n}{\partial t} = 0$ and $\frac{\partial p}{\partial t} = 0$). Also, if there is no generation or recombination, $G=0$ and $R=0$.

*   **Steady-State, No Generation/Recombination:**
    $\nabla \cdot J_n = 0$
    $\nabla \cdot J_p = 0$

This implies that the net current density for each carrier type is constant throughout the material.

**Charge Neutrality and Steady State:**
In a semiconductor, the net charge density is $\rho = q(p - n + N_D^+ - N_A^-)$. For charge neutrality, $\rho = 0$.

A common scenario is a steady-state condition without external generation or recombination. In such cases, the continuity equation simplifies. For instance, if we have a one-dimensional drift-diffusion problem with no generation/recombination, the continuity equations become:

$\frac{dJ_n}{dx} = 0 \implies J_n = \text{constant}$
$\frac{dJ_p}{dx} = 0 \implies J_p = \text{constant}$

This means the electron current density and hole current density are uniform across the semiconductor in the direction of flow.

**Important Points:**
*   The continuity equation is crucial for understanding how carrier concentrations evolve in time and space under the influence of electric fields and concentration gradients.
*   It forms the basis for analyzing dynamic behavior and transient responses of semiconductor devices.
*   In steady state with no generation/recombination, the current density of each carrier type is constant.

**Reference:**
*   **Sze, S. M., & Lee, M. K. (2021).** *Semiconductor Physics and Devices, 3ed, An Indian Adaptation.* Chapter 2.
*   **Tsividis, Y. (2010).** *Operation and Modelling of the MOS Transistor.* Chapter 2.

---

### 6. Equilibrium and Steady State

*   **Equilibrium:** A state where there is no net flow of charge carriers and no net generation or recombination. Carrier concentrations are constant in time and space, and are determined by doping and temperature. In equilibrium, the drift and diffusion currents for both electrons and holes cancel out.
    *   $J_n = q n_0 \mu_n E_0 - q D_n \frac{dn_0}{dx} = 0$
    *   $J_p = q p_0 \mu_p E_0 + q D_p \frac{dp_0}{dx} = 0$
    Where $n_0$ and $p_0$ are the equilibrium electron and hole concentrations, and $E_0$ is the equilibrium electric field (which is zero in a uniformly doped semiconductor in equilibrium).

*   **Steady State:** A state where carrier concentrations are constant in time, but can vary in space. Net current can flow. This is achieved by applying external stimuli like bias voltages or illumination, which create concentration gradients or electric fields.

**Example of Steady State:** A p-n junction under forward bias. Holes diffuse from the p-side to the n-side, and electrons diffuse from the n-side to the p-side. This creates a steady flow of carriers, resulting in a net current, even though the carrier concentrations at any given point don't change with time.

**Reference:**
*   **Pierret, R. (1996).** *Semiconductor Device Fundamentals.* Chapter 2.
*   **Shur, M. (2019).** *Physics of Semiconductor Devices.* Chapter 2.

---

### 7. Practice Questions and Exercises

1.  **Drift Current Calculation:**
    A piece of uniformly doped n-type silicon at 300K has an electron concentration of $5 \times 10^{15}$ cm⁻³. The electron mobility is $\mu_n = 1350$ cm²/V·s, and the hole mobility is $\mu_p = 450$ cm²/V·s. If an electric field of $1000$ V/cm is applied, what is the total drift current density?
    **Answer:** $J_{drift} \approx 108 \text{ A/cm}^2$ (electron drift dominates).

2.  **Diffusion Current Calculation:**
    In a silicon sample, the hole concentration is $10^{16}$ cm⁻³ at $x=0$ and $10^{15}$ cm⁻³ at $x=2 \mu m$. The diffusion coefficient for holes is $D_p = 12$ cm²/s. Calculate the hole diffusion current density at $x=0$.
    **Answer:** $J_p = q D_p \frac{dp}{dx}$. $\frac{dp}{dx} = \frac{10^{15} - 10^{16}}{2 \times 10^{-4} \text{ cm}} = -4.5 \times 10^{19} \text{ cm}^{-4}$. $J_p = (1.602 \times 10^{-19}) \times 12 \times (-4.5 \times 10^{19}) \approx -8.65 \times 10^{-1} \text{ A/cm}^2$.

3.  **Einstein Relation Application:**
    If the electron mobility in germanium is $\mu_n = 3900$ cm²/V·s at 300K, what is the electron diffusion coefficient?
    **Answer:** $D_n = \mu_n \frac{kT}{q} = 3900 \text{ cm}^2/\text{V} \cdot \text{s} \times 0.026 \text{ V} \approx 101.4 \text{ cm}^2/\text{s}$.

4.  **Continuity Equation in Steady State:**
    Consider a one-dimensional semiconductor where the electron concentration is $n(x) = n_0 e^{-x/L_n}$ and there is no generation or recombination. If the electron diffusion coefficient is $D_n$, what is the electron current density $J_n$?
    **Answer:** $\frac{dn}{dx} = -\frac{n_0}{L_n} e^{-x/L_n} = -\frac{n(x)}{L_n}$. $J_n = -q D_n \frac{dn}{dx} = -q D_n (-\frac{n(x)}{L_n}) = \frac{q D_n n(x)}{L_n}$. Since $D_n/\mu_n = kT/q$, we can write $J_n = \frac{q (kT/q) \mu_n n(x)}{L_n} = \frac{kT}{L_n} n(x) \mu_n$. This shows $J_n$ is proportional to $n(x)$, and since $n(x)$ varies, $J_n$ is not necessarily constant if the electric field is zero. However, if $J_n$ is constant in steady state without G/R, it implies a balance of drift and diffusion. The problem statement implies a specific condition where $J_n$ is indeed constant in steady state with diffusion. The question should be framed to ask for $J_n$ given $n(x)$, or to confirm if $J_n$ is constant. Assuming a steady state implies $\nabla \cdot J_n = 0$ (in 1D, $dJ_n/dx = 0$), thus $J_n$ must be constant.
    Let's rephrase: If in a steady-state scenario with no generation or recombination, the electron concentration is given by $n(x) = n_0 e^{-x/L_n}$, what must the electric field $E(x)$ be for the electron current density $J_n$ to be constant?
    **Answer:** $J_n = q n \mu_n E - q D_n \frac{dn}{dx}$. With $n(x) = n_0 e^{-x/L_n}$, $\frac{dn}{dx} = -\frac{n_0}{L_n} e^{-x/L_n} = -\frac{n(x)}{L_n}$.
    $J_n = q n(x) \mu_n E(x) - q D_n (-\frac{n(x)}{L_n}) = q n(x) \mu_n E(x) + q \frac{D_n n(x)}{L_n}$.
    For $J_n$ to be constant, let $J_n = J_{n0}$.
    $J_{n0} = q n(x) \mu_n E(x) + q \frac{D_n n(x)}{L_n}$
    $E(x) = \frac{J_{n0}}{q n(x) \mu_n} - \frac{D_n}{L_n \mu_n}$
    Using $D_n/\mu_n = kT/q = V_T$:
    $E(x) = \frac{J_{n0}}{q n(x) \mu_n} - \frac{V_T}{L_n}$
    Substituting $n(x) = n_0 e^{-x/L_n}$:
    $E(x) = \frac{J_{n0}}{q n_0 e^{-x/L_n} \mu_n} - \frac{V_T}{L_n} = \frac{J_{n0} e^{x/L_n}}{q n_0 \mu_n} - \frac{V_T}{L_n}$.
    This indicates a spatially varying electric field is required to maintain a constant electron current density when there is a decaying carrier concentration.

---

### 8. Key Points to Remember

*   **Drift:** Movement of carriers due to an electric field. Proportional to carrier concentration, charge, mobility, and electric field ($J = qn\mu E$).
*   **Diffusion:** Movement of carriers from high to low concentration regions. Proportional to carrier concentration gradient and diffusion coefficient ($J = \pm qD \frac{dn}{dx}$).
*   **Mobility ($\mu$):** Ease of carrier movement under an electric field.
*   **Diffusion Coefficient ($D$):** Measure of random thermal motion leading to diffusion.
*   **Einstein Relation:** $\frac{D}{\mu} = \frac{kT}{q} = V_T$. Crucial for relating drift and diffusion.
*   **Total Current:** Sum of drift and diffusion currents for both electrons and holes.
*   **Continuity Equation:** Conservation of charge, relates carrier concentration change to current and generation/recombination.
*   **Steady State:** Carrier concentrations are constant in time, but can vary in space. Net current can flow.
*   **Equilibrium:** No net carrier movement, no net generation/recombination. Carrier concentrations are time and space invariant and determined by doping.

---

This concludes the study notes for Current Flow Equations. Understanding these concepts is fundamental to analyzing the behavior of all semiconductor devices.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
