---
title: "Fluid properties"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106df"
status: "completed"
scrapedAt: "2026-05-20T18:40:19.798Z"
---
# Fluid Mechanics: Module 1 - Fluid Properties

## Introduction to Fluid Properties

This module introduces the fundamental properties of fluids, which are essential for understanding fluid behavior in various engineering applications. We will explore concepts like density, viscosity, surface tension, and compressibility, and how these properties influence fluid motion and forces.

---

## Learning Outcomes Covered:

By the end of this module, you will be able to:

*   **Define what a fluid is and distinguish it from a solid.**
*   **Explain and quantify the key properties of fluids including density, specific weight, specific gravity, viscosity, vapor pressure, and surface tension.**
*   **Understand the concept of compressibility and its implications.**
*   **Differentiate between Newtonian and non-Newtonian fluids.**
*   **Apply the concepts of fluid properties to solve basic fluid mechanics problems.**

---

## 1. What is a Fluid?

A fluid is a substance that continuously deforms (flows) under an applied shear stress, regardless of the magnitude of the shear stress.

*   **Distinction from Solids:**
    *   **Solids:** Resist shear stress by deformation. They deform to a certain extent and then stop. The deformation is proportional to the applied shear stress (within the elastic limit).
    *   **Fluids:** Do not resist shear stress by deformation; they deform continuously. Even a very small shear stress will cause a fluid to flow.

*   **Key Characteristics:**
    *   **Ability to flow:** Fluids take the shape of their container.
    *   **No definite shape:** They have no fixed shape of their own.
    *   **Continuous deformation:** Under shear stress, they deform indefinitely.

---

## 2. Key Properties of Fluids

### 2.1 Density ($\rho$)

*   **Definition:** Density is defined as mass per unit volume. It is a measure of how much mass is contained in a given volume.
*   **Formula:**
    $$ \rho = \frac{m}{V} $$
    where:
    *   $\rho$ = density (kg/m³ or slug/ft³)
    *   $m$ = mass (kg or slug)
    *   $V$ = volume (m³ or ft³)
*   **Units:**
    *   SI: kg/m³
    *   Imperial: slug/ft³ (or lb/ft³ which is often weight density)
*   **Examples:**
    *   Water at 4°C: $\rho \approx 1000 \, \text{kg/m}^3$
    *   Air at standard atmospheric pressure and 15°C: $\rho \approx 1.225 \, \text{kg/m}^3$
*   **Important Note:** Density is a function of temperature and pressure. For most liquids, the effect of pressure is negligible. For gases, the effect of pressure and temperature is significant.

### 2.2 Specific Weight ($\gamma$)

*   **Definition:** Specific weight is defined as weight per unit volume. It is the force exerted by gravity on a unit volume of a substance.
*   **Formula:**
    $$ \gamma = \frac{\text{Weight}}{V} = \frac{mg}{V} = \rho g $$
    where:
    *   $\gamma$ = specific weight (N/m³ or lb/ft³)
    *   $g$ = acceleration due to gravity (approx. 9.81 m/s² or 32.2 ft/s²)
*   **Units:**
    *   SI: N/m³
    *   Imperial: lb/ft³
*   **Examples:**
    *   Water: $\gamma \approx 9810 \, \text{N/m}^3$
    *   Air: $\gamma \approx 12.01 \, \text{N/m}^3$

### 2.3 Specific Gravity (S or SG)

*   **Definition:** Specific gravity is the ratio of the specific weight (or density) of a substance to the specific weight (or density) of a reference substance, usually water at its maximum density (4°C). It is a dimensionless quantity.
*   **Formula:**
    $$ S = \frac{\gamma_{\text{substance}}}{\gamma_{\text{water at 4°C}}} = \frac{\rho_{\text{substance}}}{\rho_{\text{water at 4°C}}} $$
    where:
    *   $\rho_{\text{water at 4°C}} = 1000 \, \text{kg/m}^3$
*   **Units:** Dimensionless
*   **Examples:**
    *   Mercury: $S = 13.6$ (meaning mercury is 13.6 times denser than water)
    *   Ethyl alcohol: $S = 0.79$ (meaning ethyl alcohol is less dense than water and will float on it)
*   **Importance:** Useful for comparing densities of different substances and for quick calculations involving water as a reference.

### 2.4 Viscosity ($\mu$)

*   **Definition:** Viscosity is a measure of a fluid's resistance to deformation or flow. It quantifies the internal friction within a fluid.
*   **Mechanism:** Viscosity arises from the cohesive forces between molecules and the momentum exchange between layers of fluid moving at different velocities.
*   **Newton's Law of Viscosity:** For Newtonian fluids, the shear stress is directly proportional to the rate of shear strain (velocity gradient).
    $$ \tau = \mu \frac{du}{dy} $$
    where:
    *   $\tau$ = shear stress (Pa or lb/ft²)
    *   $\mu$ = dynamic viscosity (Pa·s or lb·s/ft²)
    *   $\frac{du}{dy}$ = velocity gradient or rate of shear strain (s⁻¹)
*   **Dynamic Viscosity ($\mu$):**
    *   **Units:**
        *   SI: Pa·s (Pascal-second) or N·s/m²
        *   Imperial: lb·s/ft²
        *   Commonly used unit: Poise (P) = 0.1 Pa·s, Centipoise (cP) = 0.01 Pa·s = 1 mPa·s. Water at 20°C has a viscosity of approximately 1 cP.
*   **Kinematic Viscosity ($\nu$)**
    *   **Definition:** Kinematic viscosity is the ratio of dynamic viscosity to density. It represents the ratio of viscous forces to inertial forces.
    *   **Formula:**
        $$ \nu = \frac{\mu}{\rho} $$
    *   **Units:**
        *   SI: m²/s
        *   Imperial: ft²/s
        *   Commonly used unit: Stokes (St) = 10⁻⁴ m²/s, Centistokes (cSt) = 10⁻⁶ m²/s = 1 mm²/s.
*   **Examples:**
    *   Honey is highly viscous.
    *   Water has a lower viscosity than honey.
    *   Air has a much lower viscosity than water.
*   **Temperature Dependence:**
    *   **Liquids:** Viscosity generally *decreases* with increasing temperature (molecules have more kinetic energy to overcome cohesive forces).
    *   **Gases:** Viscosity generally *increases* with increasing temperature (molecules have more momentum to transfer between layers).

### 2.5 Vapor Pressure ($P_v$)

*   **Definition:** Vapor pressure is the pressure exerted by the vapor of a liquid in thermodynamic equilibrium with its condensed phases (solid or liquid) at a given temperature in a closed system.
*   **Mechanism:** Molecules at the surface of a liquid have enough kinetic energy to escape into the gas phase, forming vapor. This vapor exerts a pressure.
*   **Boiling:** A liquid boils when its vapor pressure equals the surrounding ambient pressure.
*   **Temperature Dependence:** Vapor pressure *increases* significantly with increasing temperature.
*   **Units:** Pressure units (Pa, psi, atm, mmHg)
*   **Example:** Water at 100°C has a vapor pressure of 1 atm (standard atmospheric pressure). At 20°C, its vapor pressure is much lower (about 0.023 atm).
*   **Importance:** Crucial in understanding cavitation in pumps and other fluid machinery.

### 2.6 Surface Tension ($\sigma$ or $\gamma_s$)

*   **Definition:** Surface tension is the tendency of liquid surfaces to shrink into the minimum surface area possible. It is due to the cohesive forces between liquid molecules. Molecules at the surface are pulled inwards by their neighbors, creating a net inward force. This causes the surface to behave like a stretched elastic membrane.
*   **Mechanism:** The imbalance of intermolecular forces at the surface of a liquid.
*   **Units:** Force per unit length (N/m or lb/ft) or Energy per unit area (J/m² or ft·lb/ft²).
*   **Examples:**
    *   Water droplets forming spheres.
    *   Insects walking on water.
    *   The rise or fall of liquids in narrow tubes (capillary action).
*   **Temperature Dependence:** Surface tension generally *decreases* with increasing temperature.

---

## 3. Compressibility and Bulk Modulus

### 3.1 Compressibility

*   **Definition:** Compressibility is a measure of the relative change in volume of a fluid in response to a change in pressure.
*   **Gases vs. Liquids:**
    *   **Gases:** Are highly compressible. A significant change in volume occurs with a moderate change in pressure.
    *   **Liquids:** Are generally considered incompressible for many practical engineering problems, although they are technically compressible. Their volume changes only slightly with large changes in pressure.

### 3.2 Bulk Modulus of Elasticity ($K$ or $E_v$)

*   **Definition:** The bulk modulus is a measure of a fluid's resistance to compression. It is defined as the ratio of the change in pressure to the fractional change in volume.
*   **Formula:**
    $$ K = -\frac{V \Delta P}{\Delta V} = -\frac{\Delta P}{\Delta V / V} $$
    where:
    *   $K$ = bulk modulus of elasticity (Pa or psi)
    *   $\Delta P$ = change in pressure
    *   $\Delta V$ = change in volume
    *   $V$ = initial volume
    *   $\Delta V / V$ = volumetric strain
*   **Sign Convention:** The negative sign is included because an increase in pressure ($\Delta P > 0$) causes a decrease in volume ($\Delta V < 0$).
*   **Units:** Pressure units (Pa, psi)
*   **Examples:**
    *   Water: $K \approx 2.2 \times 10^9 \, \text{Pa}$ (relatively high, indicating low compressibility)
    *   Air: $K$ varies significantly with temperature and pressure.
*   **Relationship to Speed of Sound:** The bulk modulus is related to the speed of sound ($c$) in a fluid: $c = \sqrt{K/\rho}$. For fluids where $K$ is large (liquids), the speed of sound is high.

---

## 4. Newtonian vs. Non-Newtonian Fluids

### 4.1 Newtonian Fluids

*   **Definition:** Fluids for which the shear stress is *linearly proportional* to the rate of shear strain. They obey Newton's law of viscosity.
*   **Behavior:** Their viscosity is constant at a given temperature and pressure, regardless of the rate of shear.
*   **Examples:**
    *   Water
    *   Air
    *   Most gases
    *   Oils (mineral oils, vegetable oils)
    *   Alcohol

### 4.2 Non-Newtonian Fluids

*   **Definition:** Fluids for which the shear stress is *not linearly proportional* to the rate of shear strain. Their viscosity changes with the rate of shear.
*   **Behavior:**
    *   **Shear-thinning (Pseudoplastic):** Viscosity decreases with increasing shear rate (e.g., paint, ketchup, blood).
    *   **Shear-thickening (Dilatant):** Viscosity increases with increasing shear rate (e.g., cornstarch and water mixture).
    *   **Bingham Plastics:** Exhibit a yield stress. They behave like solids at low stress but flow like viscous fluids when the stress exceeds the yield stress (e.g., toothpaste, drilling mud).
    *   **Thixotropic:** Shear-thinning fluids whose viscosity also depends on time. Viscosity decreases over time under constant shear.
    *   **Rheopectic:** Shear-thickening fluids whose viscosity also depends on time. Viscosity increases over time under constant shear.
*   **Examples:**
    *   Blood
    *   Ketchup
    *   Paint
    *   Toothpaste
    *   Yogurt
    *   Cornstarch and water mixture (oobleck)

---
