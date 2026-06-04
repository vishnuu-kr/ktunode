---
title: "Diffusion, Einstein relations, Poisson equations"
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2af"
status: "completed"
scrapedAt: "2026-05-23T17:47:30.508Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics

## Topic: Diffusion, Einstein Relations, Poisson's Equation

---

### 1. Introduction to Carrier Transport Mechanisms

**Course Outcomes Addressed:** CO2, CO3
**Knowledge Level:** K3

Semiconductor devices rely on the movement of charge carriers (electrons and holes) to function. Two fundamental mechanisms govern this movement:

*   **Drift:** The movement of charge carriers under the influence of an electric field.
*   **Diffusion:** The movement of charge carriers from a region of high concentration to a region of low concentration, driven by the concentration gradient.

This module focuses on understanding these mechanisms, particularly diffusion, and its relationship with other fundamental equations governing semiconductor behavior.

**Important Point to Remember:** Both drift and diffusion contribute to the total current in a semiconductor, especially under non-equilibrium or steady-state conditions.

---

### 2. Diffusion

**Course Outcomes Addressed:** CO2, CO3
**Knowledge Level:** K3

Diffusion is a statistical process driven by the random thermal motion of charge carriers. When there's a non-uniform distribution of carriers, they tend to spread out to achieve a more uniform distribution.

#### 2.1. Diffusion Current Density

The diffusion current density is proportional to the concentration gradient of the charge carriers.

*   **For electrons ($J_n^{diff}$):**
    $J_n^{diff} = q D_n \frac{dn}{dx}$

    *   $q$: Elementary charge ($1.602 \times 10^{-19}$ C)
    *   $D_n$: Diffusion coefficient for electrons (cm²/s or m²/s)
    *   $\frac{dn}{dx}$: Concentration gradient of electrons

    **Explanation:**
    *   If $\frac{dn}{dx} > 0$ (electron concentration increases with $x$), electrons diffuse in the direction of decreasing concentration (negative $x$ direction). Since electrons are negative charges, this movement results in a positive diffusion current density in the positive $x$ direction.
    *   If $\frac{dn}{dx} < 0$, electrons diffuse in the positive $x$ direction, resulting in a negative diffusion current density in the positive $x$ direction.

*   **For holes ($J_p^{diff}$):**
    $J_p^{diff} = -q D_p \frac{dp}{dx}$

    *   $q$: Elementary charge ($1.602 \times 10^{-19}$ C)
    *   $D_p$: Diffusion coefficient for holes (cm²/s or m²/s)
    *   $\frac{dp}{dx}$: Concentration gradient of holes

    **Explanation:**
    *   If $\frac{dp}{dx} > 0$ (hole concentration increases with $x$), holes diffuse in the direction of decreasing concentration (negative $x$ direction). Since holes are positive charges, this movement results in a negative diffusion current density in the positive $x$ direction.
    *   If $\frac{dp}{dx} < 0$, holes diffuse in the positive $x$ direction, resulting in a positive diffusion current density in the positive $x$ direction.

**Reference:**
*   Pierret, R. S. (1996). *Semiconductor Device Fundamentals* (1st ed.). Pearson Education. (Chapter 2: Carrier Transport)
*   Sze, S. M., & Lee, M. K. (2021). *Semiconductor Physics and Devices: An Indian Adaptation* (3rd ed.). Wiley. (Chapter 3: Carrier Transport)

**Example:**
Consider a semiconductor where the electron concentration decreases linearly from $10^{16}$ cm$^{-3}$ at $x=0$ to $10^{15}$ cm$^{-3}$ at $x=1 \mu m$. The diffusion coefficient for electrons is $D_n = 30$ cm²/s. Calculate the electron diffusion current density at $x=0$.

**Solution:**
The electron concentration gradient is:
$\frac{dn}{dx} = \frac{n(x=1\mu m) - n(x=0)}{1\mu m - 0} = \frac{10^{15} \text{ cm}^{-3} - 10^{16} \text{ cm}^{-3}}{10^{-4} \text{ cm}} = \frac{-9 \times 10^{15} \text{ cm}^{-3}}{10^{-4} \text{ cm}} = -9 \times 10^{19} \text{ cm}^{-4}$

The electron diffusion current density at $x=0$ is:
$J_n^{diff} = q D_n \frac{dn}{dx} = (1.602 \times 10^{-19} \text{ C}) \times (30 \text{ cm}^2/\text{s}) \times (-9 \times 10^{19} \text{ cm}^{-4})$
$J_n^{diff} = -432.54 \text{ A/cm}^2$

The negative sign indicates that the electron diffusion current flows in the negative $x$ direction.

---

### 3. Einstein Relations

**Course Outcomes Addressed:** CO2, CO3
**Knowledge Level:** K3

The Einstein relations connect the diffusion coefficient ($D$) and the mobility ($\mu$) of charge carriers. Mobility is the proportionality constant between drift velocity and electric field. This relationship arises from the fact that both diffusion and drift are governed by the thermal motion of carriers.

**Derivation Insight:**
The Einstein relations can be derived by considering a semiconductor in thermal equilibrium where there is no net current flow. In equilibrium, the drift current density due to an electric field must be exactly balanced by the diffusion current density due to the concentration gradient established by that field.

#### 3.1. Einstein Relation for Electrons

$D_n = \mu_n \frac{kT}{q}$

*   $D_n$: Diffusion coefficient for electrons
*   $\mu_n$: Electron mobility
*   $k$: Boltzmann constant ($1.381 \times 10^{-23}$ J/K)
*   $T$: Absolute temperature (Kelvin)
*   $q$: Elementary charge ($1.602 \times 10^{-19}$ C)

The term $\frac{kT}{q}$ is often referred to as the **thermal voltage ($V_T$)**.

$V_T = \frac{kT}{q}$

At room temperature ($T \approx 300$ K), $V_T \approx 0.0259$ V or 25.9 mV.

So, $D_n = \mu_n V_T$

#### 3.2. Einstein Relation for Holes

$D_p = \mu_p \frac{kT}{q}$

*   $D_p$: Diffusion coefficient for holes
*   $\mu_p$: Hole mobility
*   $k$: Boltzmann constant
*   $T$: Absolute temperature
*   $q$: Elementary charge

So, $D_p = \mu_p V_T$

**Important Points to Remember:**
*   The Einstein relation is valid under thermal equilibrium conditions.
*   It shows that a higher temperature leads to both higher diffusion coefficients and higher mobilities (though mobility's dependence on temperature is more complex and can decrease at higher temperatures due to scattering).
*   The ratio $D/\mu$ is a measure of the "driving force" per unit electric field for diffusion, and this force is related to thermal energy.

**Reference:**
*   Neamen, D. A. (2017). *Semiconductor Physics and Devices* (4th ed.). McGraw Hill. (Chapter 5: Carrier Transport in Semiconductors)
*   Shur, M. (2019). *Physics of Semiconductor Devices* (1st ed.). Pearson Education. (Chapter 2: Carrier Transport)

**Example:**
An n-type silicon sample has an electron mobility of $\mu_n = 1400$ cm²/V·s at 300 K. Calculate the electron diffusion coefficient.

**Solution:**
At 300 K, the thermal voltage is $V_T \approx 25.9$ mV = 0.0259 V.
Using the Einstein relation:
$D_n = \mu_n V_T = (1400 \text{ cm}^2/\text{V} \cdot \text{s}) \times (0.0259 \text{ V})$
$D_n = 36.26 \text{ cm}^2/\text{s}$

---

### 4. Poisson's Equation

**Course Outcomes Addressed:** CO3, CO4
**Knowledge Level:** K3

Poisson's equation is a fundamental differential equation in electrostatics that relates the electric potential to the charge density distribution. In semiconductors, it is crucial for understanding the electric field and potential profiles within devices, which in turn dictate carrier behavior.

#### 4.1. Statement of Poisson's Equation

Poisson's equation in differential form is:

$\nabla^2 V = -\frac{\rho}{\epsilon}$

*   $V$: Electric potential (Volts)
*   $\nabla^2$: The Laplacian operator (div(grad))
*   $\rho$: Net charge density ($C/cm^3$ or $C/m^3$)
*   $\epsilon$: Permittivity of the semiconductor material ($\epsilon = \epsilon_r \epsilon_0$, where $\epsilon_r$ is the relative permittivity and $\epsilon_0$ is the permittivity of free space)

**Interpretation:**
Poisson's equation states that the curvature of the electric potential is proportional to the local charge density. Regions with a net positive charge will have a positive curvature in the potential, while regions with a net negative charge will have a negative curvature.

#### 4.2. Poisson's Equation in One Dimension

For many semiconductor device problems, we can simplify to one dimension (e.g., along the $x$-axis):

$\frac{d^2V}{dx^2} = -\frac{\rho(x)}{\epsilon}$

#### 4.3. Charge Density ($\rho$) in Semiconductors

The net charge density in a semiconductor is the sum of charges due to ionized dopant atoms, free electrons, and free holes:

$\rho = q (N_D^+ - N_A^- + p - n)$

*   $q$: Elementary charge
*   $N_D^+$: Concentration of ionized donor atoms
*   $N_A^-$: Concentration of ionized acceptor atoms
*   $p$: Concentration of holes
*   $n$: Concentration of electrons

In many situations, especially when considering a depletion region, the concentration of free carriers ($n$ and $p$) can be neglected compared to the ionized dopant concentrations ($N_D^+$ and $N_A^-$). For example, in an n-type depletion region, $\rho \approx q N_D^+$. In a p-type depletion region, $\rho \approx -q N_A^-$.

#### 4.4. Relation to Electric Field

The electric field ($\mathcal{E}$) is related to the electric potential by:

$\mathcal{E} = -\nabla V$

In one dimension:

$\mathcal{E}(x) = -\frac{dV}{dx}$

And from Poisson's equation:

$\frac{d\mathcal{E}}{dx} = \frac{d}{dx}(-\frac{dV}{dx}) = -\frac{d^2V}{dx^2} = \frac{\rho(x)}{\epsilon}$

This shows that the gradient of the electric field is proportional to the charge density.

**Reference:**
*   Sze, S. M., & Lee, M. K. (2021). *Semiconductor Physics and Devices: An Indian Adaptation* (3rd ed.). Wiley. (Chapter 2: PN Junction Diodes - though the concept of Poisson's equation is general electrostatics, its application here is key)
*   Tsividis, Y. (2010). *Operation and Modelling of the MOS Transistor* (3rd ed.). Oxford University Press. (Chapter 2: Electrostatics - for context on its application in MOSFETs)

**Example:**
Consider a one-dimensional depletion region in an n-type semiconductor. Assume ionized donor concentration $N_D^+ = 10^{15}$ cm$^{-3}$ and the depletion region extends from $x=0$ to $x=W$. Poisson's equation in this region is $\frac{d^2V}{dx^2} = \frac{q N_D^+}{\epsilon_s}$, where $\epsilon_s$ is the permittivity of the semiconductor.
If at $x=0$, $V=V_0$ and $\frac{dV}{dx} = -\mathcal{E}_0$. Find the potential $V(x)$ and electric field $\mathcal{E}(x)$ in the depletion region.

**Solution:**
Let $\frac{q N_D^+}{\epsilon_s} = C$ (a positive constant).
$\frac{d^2V}{dx^2} = C$

Integrate once to find $\frac{dV}{dx} = \mathcal{E}(x)$:
$\frac{dV}{dx} = Cx + C_1$
We know $\frac{dV}{dx} = -\mathcal{E}(x)$. So, $\mathcal{E}(x) = -Cx - C_1$.
Given $\frac{dV}{dx}|_{x=0} = -\mathcal{E}_0$, so $C_1 = -\mathcal{E}_0$.
Thus, $\mathcal{E}(x) = -Cx + \mathcal{E}_0$. (Note: $\mathcal{E}_0$ is the maximum electric field at the junction edge, conventionally positive).
If we define electric field in the standard way with $\mathcal{E} = -\frac{dV}{dx}$, then $\frac{dV}{dx}|_{x=0} = -\mathcal{E}_0$.
So, $C(0) + C_1 = -\mathcal{E}_0$, which means $C_1 = -\mathcal{E}_0$.
Then $\frac{dV}{dx} = Cx - \mathcal{E}_0$.
$\mathcal{E}(x) = -(Cx - \mathcal{E}_0) = \mathcal{E}_0 - Cx$.

Integrate again to find $V(x)$:
$V(x) = \frac{1}{2}Cx^2 - \mathcal{E}_0 x + C_2$
Given $V(0) = V_0$, so $C_2 = V_0$.
$V(x) = V_0 - \mathcal{E}_0 x + \frac{1}{2}Cx^2$

Substituting back $C = \frac{q N_D^+}{\epsilon_s}$:
$\mathcal{E}(x) = \mathcal{E}_0 - \frac{q N_D^+}{\epsilon_s} x$
$V(x) = V_0 - \mathcal{E}_0 x + \frac{q N_D^+}{2\epsilon_s} x^2$

**Important Point to Remember:** Poisson's equation is essential for analyzing the electric field and potential in depletion regions of PN junctions, MOS structures, and other semiconductor devices. The charge density $\rho$ is the key input.

---

### 5. Total Current Density

**Course Outcomes Addressed:** CO2, CO3
**Knowledge Level:** K3

In a semiconductor under non-equilibrium or steady-state conditions, the total current density is the sum of drift and diffusion components.

*   **Total electron current density ($J_n$):**
    $J_n = J_n^{drift} + J_n^{diff}$
    $J_n = q n \mu_n \mathcal{E} + q D_n \frac{dn}{dx}$

*   **Total hole current density ($J_p$):**
    $J_p = J_p^{drift} + J_p^{diff}$
    $J_p = q p \mu_p \mathcal{E} - q D_p \frac{dp}{dx}$ (Note the minus sign for holes)

**Important Point to Remember:** To find the total current, one must consider both drift (due to electric field) and diffusion (due to concentration gradients).

---

### 6. Equilibrium and Steady State Conditions

**Course Outcomes Addressed:** CO1, CO2, CO3, CO4
**Knowledge Level:** K3

#### 6.1. Equilibrium Condition

*   **Definition:** Thermal equilibrium is a state where there is no net flow of charge carriers and no net energy exchange with the surroundings. The carrier concentrations and energy distribution are solely determined by temperature and the material's band structure.
*   **Characteristics:**
    *   No external electric field applied.
    *   No concentration gradients present.
    *   Carrier concentrations are uniform and given by the Fermi-Dirac distribution.
    *   Fermi level ($E_F$) is constant throughout the semiconductor.
    *   For intrinsic semiconductors, $n = p = n_i$.
    *   For extrinsic semiconductors (n-type), $n_0 \approx N_D$, $p_0 \approx n_i^2/N_D$.
    *   For extrinsic semiconductors (p-type), $p_0 \approx N_A$, $n_0 \approx n_i^2/N_A$.
*   **Currents:** In equilibrium, both drift and diffusion currents are zero, resulting in zero net current density.

#### 6.2. Steady State Condition

*   **Definition:** A steady-state condition is one where the carrier concentrations and energy distributions change with position but not with time. This is often achieved by applying external stimuli like electric fields or injecting carriers, which create non-equilibrium conditions that are sustained.
*   **Characteristics:**
    *   Carrier concentrations may vary with position.
    *   Electric fields may be present.
    *   Fermi level may vary with position (quasi-Fermi levels).
    *   There is a net flow of charge carriers, but the carrier densities at any point do not change with time.
*   **Currents:** In steady state, both drift and diffusion currents can be non-zero, and they contribute to the total current flow.

**Relationship to CO1 & CO4:**
Understanding equilibrium carrier concentrations (CO1) is the baseline. Steady-state conditions arise when these equilibrium concentrations are perturbed, and the device's response (CO4) is analyzed under these perturbed conditions.

**Example:**
A uniformly doped n-type semiconductor in thermal equilibrium has $N_D = 10^{16}$ cm$^{-3}$ and $T = 300$ K.
*   Calculate $n_0$, $p_0$, and $E_F$ relative to the conduction band edge $E_c$.
    *   $n_0 \approx N_D = 10^{16}$ cm$^{-3}$.
    *   $p_0 = n_i^2 / n_0$. Assuming silicon, $n_i \approx 1.5 \times 10^{10}$ cm$^{-3}$ at 300 K.
    *   $p_0 \approx (1.5 \times 10^{10})^2 / 10^{16} = 2.25 \times 10^{20} / 10^{16} = 2.25 \times 10^4$ cm$^{-3}$.
    *   To find $E_F$, we use $n_0 = N_c \exp(-(E_c - E_F)/kT)$.
    *   $N_c \approx 2.8 \times 10^{19}$ cm$^{-3}$ for silicon.
    *   $10^{16} = 2.8 \times 10^{19} \exp(-(E_c - E_F)/kT)$
    *   $\exp(-(E_c - E_F)/kT) = 10^{16} / (2.8 \times 10^{19}) \approx 0.357$
    *   $-(E_c - E_F)/kT = \ln(0.357) \approx -1.03$
    *   $(E_c - E_F) = 1.03 \times kT$. At 300 K, $kT \approx 0.0259$ eV.
    *   $E_c - E_F \approx 1.03 \times 0.0259 \text{ eV} \approx 0.0267$ eV.
    *   This means the Fermi level is approximately 0.0267 eV below the conduction band edge.

---

### 7. Practice Questions and Exercises

1.  **Question:** In a semiconductor, the hole concentration varies linearly from $10^{17}$ cm$^{-3}$ at $x=0$ to $10^{15}$ cm$^{-3}$ at $x=5 \mu m$. If the hole diffusion coefficient is $D_p = 10$ cm²/s, calculate the hole diffusion current density at $x=0$.
    **Answer:**
    $\frac{dp}{dx} = \frac{10^{15} - 10^{17}}{5 \times 10^{-4}} \text{ cm}^{-4} = \frac{-9.9 \times 10^{16}}{5 \times 10^{-4}} = -1.98 \times 10^{20} \text{ cm}^{-4}$
    $J_p^{diff} = -q D_p \frac{dp}{dx} = -(1.602 \times 10^{-19}) \times 10 \times (-1.98 \times 10^{20}) = 317.19 \text{ A/cm}^2$

2.  **Question:** A germanium sample has an electron mobility of $\mu_n = 3900$ cm²/V·s at 300 K.
    a) Calculate the electron diffusion coefficient using the Einstein relation.
    b) If an electric field of 10 V/cm is applied, what is the drift velocity of electrons?
    **Answer:**
    a) $V_T = kT/q \approx 0.0259$ V at 300 K.
    $D_n = \mu_n V_T = 3900 \times 0.0259 \approx 101.01$ cm²/s.
    b) $v_{drift} = \mu_n \mathcal{E} = 3900 \text{ cm}^2/\text{V}\cdot\text{s} \times 10 \text{ V/cm} = 39000 \text{ cm/s}$.

3.  **Question:** Consider a one-dimensional p-type semiconductor where the acceptor concentration is uniform, $N_A = 10^{17}$ cm$^{-3}$. In a depletion region, the electric field is given by $\mathcal{E}(x) = -\frac{q N_A}{\epsilon_s} x$, where $x$ is measured from the metallurgical junction.
    a) Write down Poisson's equation for this region.
    b) Find the potential profile $V(x)$ in this depletion region, assuming $V=0$ at the depletion edge ($x=0$) and $\mathcal{E}=0$ at the edge of the depletion region.
    **Answer:**
    a) Poisson's equation is $\frac{d^2V}{dx^2} = -\frac{\rho}{\epsilon_s}$. In this p-type depletion region, $\rho = -q N_A$ (since $p \approx 0$ and $n \approx 0$, and $N_A$ is ionized). So, $\frac{d^2V}{dx^2} = \frac{q N_A}{\epsilon_s}$.
    b) From $\mathcal{E}(x) = -\frac{dV}{dx}$, we have $\frac{dV}{dx} = -\mathcal{E}(x) = \frac{q N_A}{\epsilon_s} x$.
    Integrating with respect to $x$:
    $V(x) = \frac{q N_A}{2\epsilon_s} x^2 + C_1$.
    Given $V(0)=0$, so $C_1=0$.
    $V(x) = \frac{q N_A}{2\epsilon_s} x^2$.

4.  **Question:** Explain the conditions under which the Einstein relation is valid. Why is it important for understanding semiconductor devices?
    **Answer:** The Einstein relation ($D/\mu = kT/q$) is valid under thermal equilibrium. It is important because it links two key parameters of carrier transport (diffusion and drift/mobility) which are both consequences of thermal motion. This allows us to calculate one if the other is known, simplifying many analyses in device physics. For example, it shows that carriers with higher mobility in a material will also have a higher diffusion coefficient.

---

### 8. Important Points to Remember (Summary)

*   **Drift Current:** Caused by electric field, proportional to carrier concentration, mobility, and field ($\propto n\mu\mathcal{E}$ or $p\mu\mathcal{E}$).
*   **Diffusion Current:** Caused by concentration gradient, proportional to diffusion coefficient and gradient ($\propto D \nabla n$ or $D \nabla p$).
*   **Diffusion Coefficients ($D_n, D_p$):** Measure of how quickly carriers spread out due to thermal motion.
*   **Einstein Relation ($D/\mu = kT/q$):** Connects diffusion and mobility, valid in thermal equilibrium. Thermal voltage $V_T = kT/q$.
*   **Poisson's Equation ($\nabla^2 V = -\rho/\epsilon$):** Relates electric potential to charge density. Crucial for calculating electric fields and potentials in semiconductor devices.
*   **Total Current:** Sum of drift and diffusion components for both electrons and holes.
*   **Equilibrium:** No net current, uniform Fermi level.
*   **Steady State:** Carrier concentrations may vary with position but not time, net current can flow.

---

### 9. Links to Course Outcomes

*   **CO1 (Equilibrium Carrier Concentration):** Understanding equilibrium is the basis for analyzing any device. The equilibrium carrier concentrations are the starting point before applying external fields or creating gradients.
*   **CO2 (Transport Mechanisms & Current Densities):** This entire topic directly addresses carrier transport (drift and diffusion) and the equations for their respective current densities.
*   **CO3 (Apply Physics to Solve Current Components):** The diffusion equations, Einstein relations, and the total current equations are direct applications of semiconductor physics to calculate current components. Poisson's equation helps in determining the electric field component of drift current.
*   **CO4 (Analyze Response to Biasing):** When biasing is applied, it creates electric fields and/or concentration gradients, moving the device from equilibrium to a steady-state. Diffusion and drift become active, and their interplay, described by these equations, determines the device's response. Poisson's equation is key to understanding the field distribution under bias.
*   **CO5 (Scaling Effects):** While not directly covered here, understanding these fundamental transport mechanisms and equations is a prerequisite for analyzing how device performance changes with scaling. For very small devices, diffusion currents can become dominant, and accurate modeling requires these equations.

---
**End of Module 1 Topic Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
