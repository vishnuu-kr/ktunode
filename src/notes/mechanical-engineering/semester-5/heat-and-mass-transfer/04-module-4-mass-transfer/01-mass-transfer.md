---
title: "Mass Transfer"
subject: "HEAT AND MASS TRANSFER"
module: "Module 4: Mass Transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633b0"
status: "completed"
scrapedAt: "2026-05-20T18:00:17.915Z"
---
# HEAT AND MASS TRANSFER - Module 4: Mass Transfer

## Topic: Mass Transfer

### Learning Outcomes:

*   Understand the fundamental principles of mass transfer.
*   Differentiate between molecular and convective mass transfer.
*   Analyze different types of mass transfer processes.
*   Apply Fick's Laws of Diffusion to solve mass transfer problems.
*   Understand the concepts of mass transfer coefficients and their correlations.
*   Solve mass transfer problems using empirical correlations.

### Introduction to Mass Transfer

Mass transfer is the movement of a chemical species from one location to another due to a difference in concentration. This movement can occur through molecular diffusion or convective mass transfer. It is a fundamental phenomenon that occurs in a wide range of natural and engineered processes.

**Key Concepts:**

*   **Species:** A distinct chemical entity present in a mixture.
*   **Concentration:** The amount of a species per unit volume or mass.
*   **Concentration Gradient:** The rate of change of concentration with respect to distance. This is the driving force for molecular mass transfer.

**Importance:** Mass transfer is crucial in processes such as:

*   Evaporation and condensation
*   Drying of solids
*   Absorption and stripping
*   Distillation
*   Chemical reactions
*   Biological systems (e.g., oxygen transport in blood)
*   Environmental processes (e.g., pollution dispersion)

**Relation to Heat Transfer:** There are strong analogies between heat transfer and mass transfer.

| Heat Transfer                     | Mass Transfer                          |
| :-------------------------------- | :------------------------------------- |
| Driving Force: Temperature Difference | Driving Force: Concentration Difference |
| Conduction: Fourier's Law         | Diffusion: Fick's First Law          |
| Convection: Newton's Law of Cooling | Convection: Convective Mass Transfer |
| Thermal Conductivity ($k$)       | Diffusivity ($\mathcal{D}$)             |
| Heat Transfer Coefficient ($h$)   | Mass Transfer Coefficient ($h_m$)      |

*(Refer to Sachdeva, R. C., Chapter 16 for a detailed discussion on Mass Transfer analogies.)*

---

### Mechanisms of Mass Transfer

Mass transfer can occur through two primary mechanisms:

#### 1. Molecular Mass Transfer (Diffusion)

Molecular mass transfer is the movement of species due to the random motion of molecules. This occurs at the molecular level and is analogous to thermal conduction.

**Types of Molecular Diffusion:**

*   **Unidirectional Diffusion:** Diffusion of a species in one direction.
    *   **Steady-State Unidirectional Diffusion:** Concentration of the diffusing species remains constant with time.
    *   **Unsteady-State Unidirectional Diffusion:** Concentration of the diffusing species changes with time.
*   **Multicomponent Diffusion:** Diffusion of multiple species simultaneously in a mixture.

**Fick's Laws of Diffusion:**

These laws describe the relationship between the diffusion flux and the concentration gradient.

**Fick's First Law (for Steady-State Diffusion):**

The molar flux of a species ($A$) in a binary mixture ($A$ and $B$) due to diffusion is proportional to the concentration gradient of that species.

$J_A^* = -\mathcal{D}_{AB} \frac{dC_A}{dz}$

Where:
*   $J_A^*$ = Molar flux of species A (mol/m².s)
*   $\mathcal{D}_{AB}$ = Binary diffusivity of species A in species B (m²/s)
*   $\frac{dC_A}{dz}$ = Concentration gradient of species A in the z-direction (mol/m³)

**Important Note on Flux:**

*   **Molar Flux ($J_A^*$):** Moles of species A crossing a unit area per unit time.
*   **Mass Flux ($j_A$):** Mass of species A crossing a unit area per unit time.
    $j_A = M_A J_A^* = -M_A \mathcal{D}_{AB} \frac{dC_A}{dz}$
    Where $M_A$ is the molecular weight of species A.

**Fick's Second Law (for Unsteady-State Diffusion):**

This law describes how concentration changes with time due to diffusion.

$\frac{\partial C_A}{\partial t} = \mathcal{D}_{AB} \frac{\partial^2 C_A}{\partial z^2}$

For diffusion in more than one dimension, the equation becomes:

$\frac{\partial C_A}{\partial t} = \mathcal{D}_{AB} \left( \frac{\partial^2 C_A}{\partial x^2} + \frac{\partial^2 C_A}{\partial y^2} + \frac{\partial^2 C_A}{\partial z^2} \right) = \mathcal{D}_{AB} \nabla^2 C_A$

*(Refer to Nag, P.K., Chapter 13 for detailed derivation and application of Fick's Laws.)*
*(Refer to Sachdeva, R. C., Chapter 16 for simplified forms and examples.)*

**Mass Transfer in Binary Mixtures:**

*   **Diffusion of A in Stationary B ($J_B^* = 0$):** If species B is stationary, the molar flux of A is given by Fick's First Law.
*   **Equimolar Counter-diffusion ($J_A^* = -J_B^*$):** When species A diffuses in one direction and species B diffuses in the opposite direction at the same molar rate, the net molar flux of the mixture is zero. In this case, Fick's First Law can be expressed in terms of mole fraction:
    $J_A^* = -\frac{P \mathcal{D}_{AB}}{R T} \frac{d y_A}{dz}$
    Where:
    *   $P$ = Total pressure (Pa)
    *   $R$ = Universal gas constant (J/mol·K)
    *   $T$ = Absolute temperature (K)
    *   $y_A$ = Mole fraction of species A

*   **Diffusion of A in a Moving Mixture ($N_A$):** The total molar flux of A is the sum of its molar flux due to diffusion and its flux due to the bulk motion of the mixture.
    $N_A = J_A^* + C_A v$
    Where $v$ is the molar average velocity of the mixture.

**Continuity Equation in Terms of Mass Transfer:**

The continuity equation, fundamental to all transport phenomena, can be expressed for mass transfer. For a species A in a control volume:

$\frac{\partial (\rho_A)}{\partial t} + \nabla \cdot (\rho_A \vec{v}_A) = \dot{r}_A$

Where:
*   $\rho_A$ = Density of species A (kg/m³)
*   $\vec{v}_A$ = Velocity of species A (m/s)
*   $\dot{r}_A$ = Rate of generation of species A per unit volume (kg/m³.s)

*(Refer to Cengel & Ghajar, Chapter 14 for a comprehensive discussion on mass transfer operations and types of mass transfer.)*

---

#### 2. Convective Mass Transfer

Convective mass transfer is the transfer of mass between a surface and a moving fluid. It is analogous to convective heat transfer. The mass transfer is driven by the relative motion of the fluid and is typically much faster than molecular diffusion.

**Mechanism:** Convective mass transfer involves two steps:
1.  **Molecular diffusion:** Mass transfer from the surface to the fluid layer immediately adjacent to it.
2.  **Convection:** Bulk movement of the fluid carrying the diffused mass away from the surface.

**Mass Transfer Coefficient ($h_m$):**

The rate of convective mass transfer is quantified by the mass transfer coefficient, $h_m$.

$m_A = h_m A (C_{As} - C_{A\infty})$

Where:
*   $m_A$ = Rate of mass transfer of species A (kg/s)
*   $h_m$ = Convective mass transfer coefficient (m/s)
*   $A$ = Surface area (m²)
*   $C_{As}$ = Concentration of species A at the surface (kg/m³)
*   $C_{A\infty}$ = Concentration of species A in the bulk fluid (kg/m³)

**Driving Force:** The concentration difference $(C_{As} - C_{A\infty})$ is the driving force for convective mass transfer.

**Types of Convection:**

*   **Forced Convection:** Fluid motion is caused by external means (e.g., pumps, fans, wind).
*   **Natural Convection:** Fluid motion is caused by density differences arising from concentration variations.

**Analogy to Heat Transfer:**

The concept of the mass transfer coefficient is analogous to the heat transfer coefficient ($h$).

$q = h A (T_s - T_\infty)$

*(Refer to Sachdeva, R. C., Chapter 16 for analogies and correlations for convective mass transfer.)*

---

### Mass Transfer Coefficients and Dimensionless Numbers

To generalize convective mass transfer, dimensionless numbers are used, similar to heat transfer.

*   **Schmidt Number (Sc):** The ratio of momentum diffusivity (kinematic viscosity) to mass diffusivity.
    $Sc = \frac{\nu}{\mathcal{D}_{AB}} = \frac{\mu/\rho}{\mathcal{D}_{AB}}$
    Where:
    *   $\nu$ = Kinematic viscosity (m²/s)
    *   $\mu$ = Dynamic viscosity (kg/m·s)
    *   $\rho$ = Density of the fluid (kg/m³)

*   **Sherwood Number (Sh):** The ratio of convective mass transfer to diffusive mass transfer. It is the mass transfer equivalent of the Nusselt number.
    $Sh_x = \frac{h_m x}{\mathcal{D}_{AB}}$
    Where:
    *   $x$ = Characteristic length (m)

*   **Reynolds Number (Re):** Represents the ratio of inertial forces to viscous forces, determining flow regime.
    $Re_x = \frac{UL x}{\nu}$
    Where:
    *   $U$ = Free stream velocity (m/s)
    *   $L$ = Characteristic length (m)

*   **Graetz Number (Gz) / Peclet Number (Pe):** Represents the ratio of convective to diffusive transport in the direction of flow.
    $Pe_x = Re_x Sc = \frac{UL}{\mathcal{D}_{AB}}$

**Analogies:**

*   **Reynolds Analogy (for turbulent flow):** Relates momentum, heat, and mass transfer coefficients when $Pr \approx Sc \approx 1$.
    $St_H = St_M$ (where $St_H$ is Stanton number for heat transfer, $St_M$ is Stanton number for mass transfer)
    $\frac{h}{\rho U c_p} = \frac{h_m}{U}$
    $\frac{h}{h_m \rho c_p} = 1$
    This implies $\frac{Nu}{Re \cdot Pr} = \frac{Sh}{Re \cdot Sc}$. If $Pr = Sc$, then $Nu = Sh$.

*   **Colburn Analogy:** A more general analogy applicable for both laminar and turbulent flow, relating heat and mass transfer.
    $St_H = \frac{f}{2}$ (for heat transfer)
    $St_M = \frac{f}{2}$ (for mass transfer)
    $\frac{Nu}{Re \cdot Pr^{1/3}} = \frac{Sh}{Re \cdot Sc^{1/3}} = \frac{f}{2}$
    This means $Nu = Sh \left(\frac{Pr}{Sc}\right)^{1/3}$.

*(Refer to Nag, P.K., Chapter 13 and Sachdeva, R. C., Chapter 16 for detailed explanations of these dimensionless numbers and analogies.)*

---

### Types of Mass Transfer Operations

Mass transfer operations are used to separate components of a mixture or to transfer a species from one phase to another.

1.  **Evaporation:** Transfer of a solvent (usually water) from a liquid solution to the vapor phase.
2.  **Drying:** Removal of moisture from a solid by vaporization.
3.  **Absorption (Gas Absorption):** Transfer of a soluble gas from a gas mixture to a liquid solvent.
    *   **Example:** Removing $\text{CO}_2$ from flue gas using an amine solution.
4.  **Stripping (Gas Stripping):** Transfer of a soluble gas from a liquid solution to a gas stream.
    *   **Example:** Removing dissolved gases from water.
5.  **Distillation:** Separation of components of a liquid mixture by selective boiling and condensation, based on differences in vapor pressure.
6.  **Extraction:** Transfer of a solute from one liquid phase to another immiscible liquid phase.
7.  **Adsorption:** Transfer of a substance from a fluid phase to the surface of a solid.
    *   **Example:** Activated carbon filters removing pollutants.
8.  **Membrane Mass Transfer:** Mass transfer across a semi-permeable membrane.
    *   **Example:** Reverse osmosis, gas separation membranes.

*(Refer to Cengel & Ghajar, Chapter 14 for detailed descriptions of these operations.)*

---

### Solving Mass Transfer Problems Using Correlations

In many practical situations, analytical solutions to Fick's laws are not feasible due to complex geometries or boundary conditions. Therefore, empirical correlations are widely used, often expressed in terms of dimensionless numbers.

**General Approach:**

1.  **Identify the process:** Determine the type of mass transfer operation (e.g., convection from a flat plate, diffusion through a stagnant film).
2.  **Identify the relevant physical properties:** Determine fluid properties like viscosity, density, diffusivity, thermal conductivity (for analogies).
3.  **Calculate dimensionless numbers:** Compute Reynolds number (Re), Schmidt number (Sc), and the characteristic length.
4.  **Select an appropriate correlation:** Choose a correlation based on the flow regime (laminar or turbulent) and geometry.
5.  **Calculate the mass transfer coefficient ($h_m$):** Use the correlation to find $h_m$.
6.  **Calculate the mass transfer rate:** Apply the convective mass transfer equation: $m_A = h_m A (C_{As} - C_{A\infty})$.

**Common Correlations (Examples):**

*   **Laminar Flow over a Flat Plate (Analogy to Nusselt number correlations):**
    For low Re and Sc, similar to the Graetz problem, but often approximated using analogies. A common analogy is to use the Blasius solution for laminar boundary layers.

*   **Turbulent Flow over a Flat Plate (Analogy to turbulent heat transfer correlations):**
    The Colburn analogy is often applied:
    $Sh_x = 0.0296 Re_x^{0.8} Sc^{1/3}$
    *(This is analogous to $Nu_x = 0.0296 Re_x^{0.8} Pr^{1/3}$)*

*   **Flow Across a Cylinder or Sphere:**
    The relation by $R $. M. Foust and B. J. Tully (1959) for flow across cylinders and spheres can be used. A common correlation is:
    $Sh_D = 2 + 0.60 Re_D^{0.5} Sc^{1/3}$ (for $1 < Re_D < 200$)
    $Sh_D = 0.19 Re_D^{0.618} Sc^{1/3}$ (for $200 < Re_D < 1000$)
    *(Refer to Cengel & Ghajar, Chapter 14 for specific correlations for various geometries.)*

**Important Point:** The characteristic length ($x$ or $D$) must be consistent within the chosen correlation.

*(Refer to Sachdeva, R. C., Chapter 16 for a compilation of various correlations for different geometries and flow conditions.)*

---

### Mass Transfer in Biological and Environmental Applications (CO4)

*   **Modern Cooling Techniques:** Mass transfer plays a role in evaporative cooling, where water evaporates and removes heat from the air.
*   **Environmental:**
    *   **Air Pollution:** Dispersion of pollutants in the atmosphere involves convective and diffusive mass transfer.
    *   **Water Treatment:** Absorption of gases into water or vice versa.
    *   **Biological Systems:** Oxygen transport across cell membranes, nutrient uptake by plants.

*(Refer to Cengel & Ghajar, Chapter 14 for applications in drying and humidification, which are relevant to cooling.)*

---

### Practice Questions and Exercises

**Question 1 (Fick's Law):**

A stagnant gas film of 0.01 m thickness surrounds a liquid droplet. The concentration of a solute in the gas phase at the interface is $0.05 \text{ mol/m}^3$, and the concentration in the bulk gas is $0.01 \text{ mol/m}^3$. If the diffusivity of the solute in the gas film is $2 \times 10^{-5} \text{ m}^2/\text{s}$, calculate the rate of mass transfer per unit area assuming steady-state diffusion.

**Solution 1:**

Given:
*   Thickness of film, $\Delta z = 0.01 \text{ m}$
*   Concentration at interface, $C_{A1} = 0.05 \text{ mol/m}^3$
*   Concentration in bulk gas, $C_{A2} = 0.01 \text{ mol/m}^3$
*   Diffusivity, $\mathcal{D}_{AB} = 2 \times 10^{-5} \text{ m}^2/\text{s}$

Assuming steady-state unidirectional diffusion and constant diffusivity, Fick's First Law can be written as:
$J_A^* = -\mathcal{D}_{AB} \frac{\Delta C_A}{\Delta z}$

$J_A^* = -(2 \times 10^{-5} \text{ m}^2/\text{s}) \frac{(0.01 - 0.05) \text{ mol/m}^3}{0.01 \text{ m}}$
$J_A^* = -(2 \times 10^{-5}) \frac{-0.04}{0.01} \text{ mol/m}^2\text{s}$
$J_A^* = -(2 \times 10^{-5}) (-4) \text{ mol/m}^2\text{s}$
$J_A^* = 8 \times 10^{-5} \text{ mol/m}^2\text{s}$

**Answer:** The rate of mass transfer per unit area is $8 \times 10^{-5} \text{ mol/m}^2\text{s}$.

---

**Question 2 (Convective Mass Transfer):**

Water evaporates from a wetted surface at $25^\circ\text{C}$ into air at $25^\circ\text{C}$ and $1 \text{ atm}$. The mass transfer coefficient for water vapor in air is $0.05 \text{ m/s}$. The saturation concentration of water vapor at the surface is $0.02 \text{ kg/m}^3$, and the concentration in the bulk air is $0.005 \text{ kg/m}^3$. Calculate the rate of evaporation per unit area.

**Solution 2:**

Given:
*   Mass transfer coefficient, $h_m = 0.05 \text{ m/s}$
*   Surface concentration, $C_{As} = 0.02 \text{ kg/m}^3$
*   Bulk concentration, $C_{A\infty} = 0.005 \text{ kg/m}^3$

The rate of convective mass transfer is given by:
$m_A/A = h_m (C_{As} - C_{A\infty})$

$m_A/A = (0.05 \text{ m/s}) (0.02 - 0.005) \text{ kg/m}^3$
$m_A/A = (0.05) (0.015) \text{ kg/m}^2\text{s}$
$m_A/A = 0.00075 \text{ kg/m}^2\text{s}$

**Answer:** The rate of evaporation per unit area is $0.00075 \text{ kg/m}^2\text{s}$.

---

**Question 3 (Dimensionless Numbers & Correlation):**

Air at $25^\circ\text{C}$ flows over a flat plate with a velocity of $5 \text{ m/s}$. The kinematic viscosity of air is $1.5 \times 10^{-5} \text{ m}^2/\text{s}$, and its mass diffusivity for water vapor is $0.26 \times 10^{-5} \text{ m}^2/\text{s}$. The Reynolds analogy or Colburn analogy can be used here. Assuming the plate is wetted and the conditions are such that the correlation $Sh_x = 0.0296 Re_x^{0.8} Sc^{1/3}$ is applicable, calculate the mass transfer coefficient at a distance of $0.5 \text{ m}$ from the leading edge.

**Solution 3:**

Given:
*   Velocity, $U = 5 \text{ m/s}$
*   Kinematic viscosity, $\nu = 1.5 \times 10^{-5} \text{ m}^2/\text{s}$
*   Diffusivity, $\mathcal{D}_{AB} = 0.26 \times 10^{-5} \text{ m}^2/\text{s}$
*   Characteristic length, $x = 0.5 \text{ m}$

First, calculate the Reynolds number:
$Re_x = \frac{Ux}{\nu} = \frac{(5 \text{ m/s})(0.5 \text{ m})}{1.5 \times 10^{-5} \text{ m}^2/\text{s}} = \frac{2.5}{1.5 \times 10^{-5}} \approx 1.67 \times 10^5$

Next, calculate the Schmidt number:
$Sc = \frac{\nu}{\mathcal{D}_{AB}} = \frac{1.5 \times 10^{-5} \text{ m}^2/\text{s}}{0.26 \times 10^{-5} \text{ m}^2/\text{s}} \approx 5.77$

Now, use the given correlation to find the Sherwood number:
$Sh_x = 0.0296 Re_x^{0.8} Sc^{1/3}$
$Sh_x = 0.0296 (1.67 \times 10^5)^{0.8} (5.77)^{1/3}$
$Sh_x \approx 0.0296 (2.9 \times 10^4) (1.79)$
$Sh_x \approx 1541$

Finally, calculate the mass transfer coefficient ($h_m$) from the definition of Sherwood number:
$Sh_x = \frac{h_m x}{\mathcal{D}_{AB}}$
$h_m = \frac{Sh_x \mathcal{D}_{AB}}{x}$
$h_m = \frac{(1541)(0.26 \times 10^{-5} \text{ m}^2/\text{s})}{0.5 \text{ m}}$
$h_m \approx 0.00801 \text{ m/s}$

**Answer:** The mass transfer coefficient at $0.5 \text{ m}$ from the leading edge is approximately $0.00801 \text{ m/s}$.

---

### Important Points to Remember:

*   **Driving Force:** Concentration difference is the driving force for mass transfer, analogous to temperature difference for heat transfer.
*   **Fick's Laws:** Fick's First Law for steady-state diffusion and Fick's Second Law for unsteady-state diffusion are fundamental.
*   **Mass Transfer Coefficient ($h_m$):** Quantifies convective mass transfer and is analogous to the heat transfer coefficient ($h$).
*   **Dimensionless Numbers:** Schmidt (Sc), Sherwood (Sh), and Reynolds (Re) numbers are crucial for correlating mass transfer data.
*   **Analogies:** Reynolds and Colburn analogies are powerful tools to relate heat and mass transfer, especially when physical properties are similar.
*   **Correlations:** Empirical correlations are essential for solving practical mass transfer problems involving convection.
*   **Mass Transfer Operations:** Understanding various operations like absorption, stripping, drying, and distillation is vital.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Further Reading and Reference:

*   **Sachdeva, R. C.**, *Fundamentals of engineering heat and mass transfer*, 6th ed., New Age International Publishers, 2022. (Chapter 16: Mass Transfer)
*   **Nag, P. K.**, *Heat and Mass Transfer elements*, 3rd ed., Tata McGraw Hill, 2011. (Chapter 13: Mass Transfer)
*   **Cengel, Yunus A., and Ghajar, Afshin J.**, *Heat and Mass Transfer – Fundamental and Application*, 6th ed., McGraw Hill, 2020. (Chapter 14: Mass Transfer)

These notes cover the fundamental principles of mass transfer, including molecular diffusion, convective mass transfer, the use of dimensionless numbers, and the application of empirical correlations, aligning with the learning outcomes and course objectives.