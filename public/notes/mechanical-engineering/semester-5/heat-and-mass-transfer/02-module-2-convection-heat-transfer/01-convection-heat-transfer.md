---
title: "Convection heat transfer"
subject: "HEAT AND MASS TRANSFER"
module: "Module 2: Convection heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a6"
status: "completed"
scrapedAt: "2026-05-20T18:00:12.143Z"
---
# Heat and Mass Transfer - Module 2: Convection Heat Transfer

This module delves into the fundamental principles of convection heat transfer, a crucial mechanism in many engineering applications. We will explore both natural and forced convection, understand the dimensionless numbers that govern these processes, and learn how to apply correlations to solve practical problems.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles of convection heat transfer.
*   Differentiate between natural and forced convection.
*   Identify and explain the significance of dimensionless numbers in convection.
*   Apply correlations to calculate convective heat transfer coefficients for various flow regimes and geometries.
*   Analyze factors influencing the design of heat transfer equipment involving convection.
*   Solve mass transfer problems utilizing similar principles and correlations.

---

## 1. Introduction to Convection Heat Transfer

Convection is the mode of heat transfer that occurs in fluids (liquids and gases) due to the bulk movement of the fluid. This movement can be caused by external forces (forced convection) or by density differences arising from temperature variations within the fluid (natural convection).

### 1.1 Definition of Convection

Convection heat transfer occurs when a fluid in motion comes into contact with a solid surface at a different temperature. The heat transfer rate is proportional to the temperature difference and the surface area.

**Newton's Law of Cooling:**

The fundamental equation governing convective heat transfer is Newton's Law of Cooling:

$Q_{conv} = h \cdot A \cdot (T_s - T_\infty)$

Where:
*   $Q_{conv}$ is the rate of heat transfer by convection (Watts).
*   $h$ is the convective heat transfer coefficient (W/m²·K). This is a property of the fluid and flow conditions, not a material property like thermal conductivity.
*   $A$ is the surface area through which convection occurs (m²).
*   $T_s$ is the surface temperature (K or °C).
*   $T_\infty$ is the bulk fluid temperature (K or °C).

**Key Concept:** The convective heat transfer coefficient ($h$) is the most crucial parameter in convection. It encapsulates the complex fluid dynamics and thermal interactions at the fluid-surface interface.

### 1.2 Distinction between Natural and Forced Convection

*   **Forced Convection:** Fluid motion is caused by external means, such as a fan, pump, or wind.
    *   **Examples:** Water flowing through a pipe heated from the outside, air blown by a fan over a hot electronic component, a car radiator.
    *   **Characteristics:** Generally results in higher heat transfer rates compared to natural convection due to the imposed velocity.
*   **Natural (or Free) Convection:** Fluid motion is caused by density differences within the fluid due to temperature variations. Warmer, less dense fluid rises, and cooler, denser fluid sinks, creating circulation.
    *   **Examples:** Heat transfer from a hot surface to the surrounding air, a radiator heating a room, cooling of electronic components in still air.
    *   **Characteristics:** Lower heat transfer rates than forced convection.

---

## 2. Dimensionless Numbers in Convection

Dimensionless numbers are essential for correlating experimental data and generalizing convection heat transfer. They represent ratios of different physical quantities and help in characterizing the flow and heat transfer regimes.

### 2.1 Reynolds Number ($Re$)

*   **Definition:** The ratio of inertial forces to viscous forces within the fluid. It determines whether the flow is laminar or turbulent.

    $Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$

    Where:
    *   $\rho$ is the fluid density (kg/m³).
    *   $V$ is the characteristic velocity of the fluid (m/s).
    *   $L$ is the characteristic length (m). For flow in a pipe, it's the diameter. For flow over a flat plate, it's the length of the plate.
    *   $\mu$ is the dynamic viscosity of the fluid (Pa·s or kg/m·s).
    *   $\nu = \mu/\rho$ is the kinematic viscosity of the fluid (m²/s).

*   **Significance:**
    *   **Laminar Flow ($Re < 2300$ for pipe flow):** Fluid particles move in orderly layers with no significant mixing. Heat transfer is primarily by conduction within the fluid.
    *   **Transition Flow ($2300 < Re < 10000$ for pipe flow):** Flow exhibits characteristics of both laminar and turbulent flow.
    *   **Turbulent Flow ($Re > 10000$ for pipe flow):** Fluid motion is chaotic with significant mixing. Heat transfer is enhanced due to eddy diffusion.

*   **Reference:** Sachdeva, Chapter 7 (Dimensionless Numbers in Convection); Cengel & Ghajar, Chapter 7 (Internal Flow).

### 2.2 Prandtl Number ($Pr$)

*   **Definition:** The ratio of momentum diffusivity (kinematic viscosity) to thermal diffusivity. It relates the velocity boundary layer thickness to the thermal boundary layer thickness.

    $Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}$

    Where:
    *   $\nu$ is the kinematic viscosity (m²/s).
    *   $\alpha = k / (\rho c_p)$ is the thermal diffusivity (m²/s).
    *   $c_p$ is the specific heat at constant pressure (J/kg·K).
    *   $k$ is the thermal conductivity of the fluid (W/m·K).

*   **Significance:**
    *   **$Pr \approx 1$ (e.g., gases):** Momentum and thermal boundary layers are of similar thickness.
    *   **$Pr > 1$ (e.g., oils, water):** Momentum boundary layer is thicker than the thermal boundary layer. Viscous forces dominate over thermal diffusion.
    *   **$Pr < 1$ (e.g., liquid metals):** Thermal boundary layer is thicker than the momentum boundary layer. Thermal diffusion dominates over viscous forces.

*   **Reference:** Sachdeva, Chapter 7; Cengel & Ghajar, Chapter 7.

### 2.3 Nusselt Number ($Nu$)

*   **Definition:** The ratio of convective heat transfer to conductive heat transfer across a boundary layer of thickness $L$. It represents the enhancement of heat transfer due to convection compared to pure conduction.

    $Nu = \frac{h L}{k_f}$

    Where:
    *   $h$ is the convective heat transfer coefficient (W/m²·K).
    *   $L$ is the characteristic length (m).
    *   $k_f$ is the thermal conductivity of the fluid at the film temperature (W/m·K).

*   **Significance:**
    *   **$Nu = 1$:** Pure conduction across the fluid layer (e.g., stagnant fluid).
    *   **$Nu > 1$:** Convection enhances heat transfer. Higher $Nu$ indicates higher heat transfer.
    *   The Nusselt number is typically correlated as a function of the Reynolds number and Prandtl number, especially for forced convection.

*   **Reference:** Sachdeva, Chapter 7; Cengel & Ghajar, Chapter 7.

### 2.4 Grashof Number ($Gr$) (for Natural Convection)

*   **Definition:** The ratio of buoyancy forces to viscous forces within the fluid. It determines the onset and intensity of natural convection.

    $Gr = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2}$

    Where:
    *   $g$ is the acceleration due to gravity (m/s²).
    *   $\beta$ is the volumetric thermal expansion coefficient of the fluid (1/K). For ideal gases, $\beta \approx 1/T_\infty$ (absolute temperature).
    *   $T_s$ is the surface temperature (K).
    *   $T_\infty$ is the bulk fluid temperature (K).
    *   $L$ is the characteristic length (m). For vertical plates and cylinders, it's the height.
    *   $\nu$ is the kinematic viscosity (m²/s).

*   **Significance:** Similar to Reynolds number for forced convection, Grashof number indicates the flow regime in natural convection. A critical value of $Gr$ (often around $10^8$ to $10^9$) marks the transition from laminar to turbulent natural convection.

*   **Reference:** Sachdeva, Chapter 8 (Natural Convection); Cengel & Ghajar, Chapter 14 (Natural Convection).

### 2.5 Rayleigh Number ($Ra$) (for Natural Convection)

*   **Definition:** The product of the Grashof number and the Prandtl number. It is a more comprehensive dimensionless number for natural convection.

    $Ra = Gr \cdot Pr$

*   **Significance:** $Ra$ is used in correlations for natural convection heat transfer coefficients. The transition to turbulent natural convection occurs at a critical Rayleigh number (typically around $10^9$).

*   **Reference:** Sachdeva, Chapter 8; Cengel & Ghajar, Chapter 14.

---

## 3. Forced Convection Heat Transfer

This section focuses on heat transfer driven by external forces. We will explore different geometries and flow conditions.

### 3.1 Flow Over External Surfaces

#### 3.1.1 Flow Over a Flat Plate

*   **Scenario:** A fluid flows parallel to a flat surface.
*   **Boundary Layers:** Velocity and thermal boundary layers develop along the plate.
*   **Flow Regimes:** Laminar, transition, and turbulent boundary layers can occur depending on the Reynolds number. The critical Reynolds number for flow over a flat plate is typically $Re_x \approx 5 \times 10^5$, where $x$ is the distance from the leading edge.

*   **Correlations for Average Heat Transfer Coefficient:**

    *   **Laminar Flow ($Re_L \le 5 \times 10^5$):**
        $Nu_L = 0.664 Re_L^{1/2} Pr^{1/3}$ (for $Pr \ge 0.6$)
        Where $Re_L = \frac{\rho V L}{\mu}$ and $L$ is the length of the plate.

    *   **Turbulent Flow ($Re_L > 5 \times 10^5$):**
        $Nu_L = 0.037 Re_L^{4/5} Pr^{1/3} - A$
        A common correlation for turbulent flow over a plate, starting from the leading edge, is:
        $Nu_L = 0.037 Re_L^{4/5} Pr^{1/3}$ (for $0.6 \le Pr \le 60$ and $5 \times 10^5 \le Re_L \le 10^7$)
        Often, a correction is applied for the laminar portion:
        $Nu_L = (0.037 Re_L^{4/5} - 871) Pr^{1/3}$ (for $0.6 \le Pr \le 60$ and $10^6 \le Re_L \le 10^8$)

    *   **Mixed Flow (Laminar and Turbulent):** The total heat transfer is the sum of heat transfer in the laminar and turbulent regions, or a blended correlation is used.

*   **Important Note:** Fluid properties should be evaluated at the **film temperature**, $T_f = \frac{T_s + T_\infty}{2}$.

*   **Reference:** Sachdeva, Chapter 7; Cengel & Ghajar, Chapter 6 (External Flow).

#### 3.1.2 Flow Across Cylinders and Spheres

*   **Scenario:** Fluid flows perpendicular to the surface of a cylinder or sphere.
*   **Flow Pattern:** The flow pattern around cylinders and spheres is complex, involving boundary layer separation, wake formation, and turbulence.
*   **Correlation:** A generalized correlation is often used, which is a function of Reynolds number and Prandtl number.

    $Nu_D = C \cdot Re_D^m \cdot Pr^{1/3}$

    Where:
    *   $D$ is the diameter of the cylinder or sphere.
    *   $Re_D = \frac{\rho V D}{\mu}$.
    *   $C$ and $m$ are empirical constants that depend on the Reynolds number range.

    **Hilpert Correlation (for cylinders):**
    | $Re_D$ Range     | $C$   | $m$   |
    | :--------------- | :---- | :---- |
    | $40 - 4000$      | 0.680 | 0.466 |
    | $4000 - 40000$   | 0.193 | 0.618 |
    | $40000 - 400000$ | 0.026 | 0.805 |

    **Churchill and Bernstein Correlation (for cylinders, wide range):**
    $Nu_D = 0.3 + \frac{0.62 Re_D^{1/2} Pr^{1/3}}{(1 + (0.4/Pr)^{2/3})^{1/4}}^{1 + (\frac{Re_D}{282000})^{5/8}}$
    (This is a more comprehensive correlation valid for $Re_D \ge 1$)

    **Forced Convection from Spheres:**
    $Nu_D = 2 + (0.4 Re_D^{1/2} + 0.06 Re_D^{2/3}) Pr^{0.4}$
    (McAdams, for $Re_D$ from 1 to 200,000)

*   **Reference:** Sachdeva, Chapter 7; Cengel & Ghajar, Chapter 6.

### 3.2 Internal Flow (Flow Inside Ducts)

*   **Scenario:** Fluid flows within a closed conduit like a pipe or channel.
*   **Flow Regimes:** Laminar or turbulent flow within the pipe.
*   **Entrance Region:** A region near the pipe entrance where boundary layers develop and merge.
*   **Fully Developed Flow:** Beyond the entrance region, the velocity and temperature profiles become constant.

#### 3.2.1 Hydrodynamically Fully Developed Flow

*   **Definition:** The velocity profile is no longer changing with axial distance.

*   **Thermally Developing Flow:** The thermal boundary layer is still developing.
*   **Thermally Fully Developed Flow:** Both velocity and temperature profiles are constant along the axial direction.

#### 3.2.2 Dimensionless Numbers for Internal Flow

*   **Reynolds Number ($Re_D$):** Based on the hydraulic diameter ($D_h$).
    *   For a circular pipe: $D_h = D$.
    *   For non-circular ducts: $D_h = \frac{4 A_c}{P}$, where $A_c$ is the cross-sectional area and $P$ is the wetted perimeter.

*   **Nusselt Number ($Nu_D$):** Based on the hydraulic diameter ($D_h$).

#### 3.2.3 Correlations for Internal Flow

*   **Laminar Flow ($Re_D \le 2300$):**
    *   **Thermally and Hydrodynamically Fully Developed Flow:**
        *   For constant surface temperature: $Nu_D = 3.66$ (isothermal)
        *   For constant heat flux: $Nu_D = 4.36$ (isoflux)

*   **Turbulent Flow ($Re_D \ge 4000$):**
    *   **Fully Developed Flow:**
        *   **Dittus-Boelter Equation:** A widely used correlation.
            $Nu_D = 0.023 Re_D^{0.8} Pr^n$
            Where:
            *   $n = 0.4$ for heating (fluid temperature increases).
            *   $n = 0.3$ for cooling (fluid temperature decreases).
        *   **Valid for:** $0.6 \le Pr \le 100$, $Re_D \ge 10000$, and $L/D \ge 10$.

    *   **Sieder-Tate Equation:** Accounts for the temperature dependence of viscosity.
        $Nu_D = 0.027 Re_D^{0.8} Pr^{1/3} (\frac{\mu_b}{\mu_s})^{0.14}$
        Where:
        *   $\mu_b$ is the viscosity at the bulk fluid temperature.
        *   $\mu_s$ is the viscosity at the surface temperature.
        *   **Valid for:** $0.7 \le Pr \le 16700$, $3000 \le Re_D \le 120000$, and $L/D \ge 10$.

*   **Reference:** Sachdeva, Chapter 7; Cengel & Ghajar, Chapter 7.

### 3.3 Heat Exchangers

*   **Definition:** Devices designed to facilitate heat transfer between two fluids at different temperatures, separated by a solid surface.
*   **Types:** Shell-and-tube, plate, finned-tube heat exchangers.
*   **Analysis:** The overall heat transfer coefficient ($U$) and the Log Mean Temperature Difference (LMTD) are key parameters for heat exchanger analysis.

    $Q = U A \Delta T_{lm}$

    Where:
    *   $U$ is the overall heat transfer coefficient (W/m²·K). It accounts for convection on both sides, conduction through the wall, and fouling.
    *   $A$ is the heat transfer surface area (m²).
    *   $\Delta T_{lm}$ is the Log Mean Temperature Difference.

*   **CO2 Alignment:** Understanding convection is crucial for analyzing and designing heat transfer equipment, as stated in CO2. The correlations developed in this section directly contribute to determining $h$ for different parts of a heat exchanger.

*   **Reference:** Cengel & Ghajar, Chapter 11 (Heat Exchangers); Sachdeva, Chapter 9 (Heat Exchangers).

---

## 4. Natural Convection Heat Transfer

This section deals with heat transfer driven by buoyancy forces.

### 4.1 Natural Convection From Surfaces

*   **Scenario:** Fluid motion is generated by density differences due to temperature gradients.
*   **Key Dimensionless Numbers:** Grashof number ($Gr$) and Rayleigh number ($Ra$).

#### 4.1.1 Vertical Plates and Cylinders

*   **Flow:** Fluid near the hot surface becomes less dense and rises, while cooler fluid replaces it.
*   **Correlations:** The Nusselt number is correlated with the Rayleigh number.

    $Nu_L = C (Ra_L)^n$

    Where $L$ is the characteristic length (height for vertical plates/cylinders).

    *   **Laminar Natural Convection ($Ra_L \approx 10^4 - 10^9$):**
        $Nu_L = 0.59 (Ra_L)^{1/4}$

    *   **Turbulent Natural Convection ($Ra_L \approx 10^9 - 10^{12}$):**
        $Nu_L = 0.10 (Ra_L)^{1/3}$

*   **Important Note:** Fluid properties should be evaluated at the film temperature $T_f = (T_s + T_\infty)/2$.

#### 4.1.2 Horizontal Plates

*   **Scenario:** A hot plate facing upwards or a cold plate facing downwards leads to natural convection.
*   **Characteristic Length:** For a horizontal plate, the characteristic length $L$ is often taken as the side length for a square plate or the diameter for a circular plate.
*   **Correlations:**

    *   **Hot Plate Facing Upwards / Cold Plate Facing Downwards ($Ra_L \approx 10^4 - 10^7$):**
        $Nu_L = 0.54 (Ra_L)^{1/4}$

    *   **Cold Plate Facing Upwards / Hot Plate Facing Downwards ($Ra_L \approx 10^5 - 10^{10}$):**
        $Nu_L = 0.27 (Ra_L)^{1/4}$

#### 4.1.3 Horizontal Cylinders

*   **Scenario:** Fluid circulates around a hot or cold horizontal cylinder.
*   **Characteristic Length:** Diameter ($D$).
*   **Correlation ($Ra_D \approx 10^4 - 10^9$):**
    $Nu_D = 0.53 (Ra_D)^{1/4}$

*   **Reference:** Sachdeva, Chapter 8; Cengel & Ghajar, Chapter 14.

### 4.2 Boiling and Condensation

While these are specific modes of phase change heat transfer, they often involve natural convection. The correlations for heat transfer coefficients in boiling and condensation are complex and specific to the fluid and conditions.

*   **Boiling:** Heat transfer from a surface to a liquid at or near its saturation temperature, resulting in vaporization.
*   **Condensation:** Heat transfer from a vapor to a surface at a lower temperature, resulting in condensation.

*   **Reference:** Sachdeva, Chapter 9 (Boiling and Condensation); Cengel & Ghajar, Chapters 15 & 16.

---

## 5. Mass Transfer

Mass transfer is the net movement of mass from one location to another. It is analogous to heat transfer.

### 5.1 Analogies between Heat and Mass Transfer

There is a strong analogy between heat and mass transfer, particularly in convective situations. This analogy allows us to use correlations developed for heat transfer to predict mass transfer rates.

*   **Mass Transfer Coefficient ($h_m$):** Analogous to the convective heat transfer coefficient ($h$). It is defined by:

    $N_A = h_m (C_{As} - C_{A\infty})$

    Where:
    *   $N_A$ is the molar flux of species A (kmol/m²·s).
    *   $h_m$ is the convective mass transfer coefficient (m/s).
    *   $C_{As}$ is the concentration of species A at the surface (kmol/m³).
    *   $C_{A\infty}$ is the concentration of species A in the bulk fluid (kmol/m³).

*   **Sherwood Number ($Sh$):** Analogous to the Nusselt number ($Nu$). It relates convective mass transfer to diffusive mass transfer.

    $Sh_x = \frac{h_m x}{\mathcal{D}_{AB}}$

    Where:
    *   $x$ is the characteristic length (m).
    *   $\mathcal{D}_{AB}$ is the mass diffusivity of species A in species B (m²/s).

*   **Schmidt Number ($Sc$):** Analogous to the Prandtl number ($Pr$). It relates momentum diffusivity to mass diffusivity.

    $Sc = \frac{\nu}{\mathcal{D}_{AB}} = \frac{\mu}{\rho \mathcal{D}_{AB}}$

*   **Reynolds Number ($Re$):** Same as in heat transfer.

### 5.2 Mass Transfer Correlations

The analogy allows us to use dimensionless numbers similar to those in convection heat transfer, with Prandtl number replaced by the Schmidt number.

For forced convection over a flat plate (analogous to heat transfer):

$Sh_x = 0.664 Re_x^{1/2} Sc^{1/3}$ (Laminar flow)

$Sh_x = 0.037 Re_x^{4/5} Sc^{1/3}$ (Turbulent flow)

For flow inside a tube (analogous to heat transfer):

$Nu_D \rightarrow Sh_D$, $Pr \rightarrow Sc$

$Sh_D = 0.023 Re_D^{0.8} Sc^n$ (Turbulent flow, $n=0.4$ for evaporation, $n=0.3$ for dissolution)

*   **CO4 Alignment:** This section directly addresses the CO4 outcome of solving mass transfer problems using correlations.

*   **Reference:** Sachdeva, Chapter 12 (Mass Transfer); Cengel & Ghajar, Chapter 18 (Mass Transfer).

---

## 6. Important Points to Remember

*   **Convective Heat Transfer Coefficient ($h$):** It is not a fluid property but depends on flow regime, geometry, and fluid properties. It is determined through empirical correlations.
*   **Dimensionless Numbers:** Reynolds, Prandtl, Nusselt, Grashof, and Rayleigh numbers are critical for characterizing convective heat transfer.
*   **Film Temperature:** For gases and liquids, fluid properties should generally be evaluated at the film temperature $T_f = (T_s + T_\infty)/2$.
*   **Characteristic Length:** Choose the appropriate characteristic length based on the geometry (diameter for pipes, length for flat plates, etc.).
*   **Laminar vs. Turbulent Flow:** The transition from laminar to turbulent flow significantly impacts the heat transfer coefficient.
*   **Internal vs. External Flow:** Correlations differ for flow inside ducts versus flow over external surfaces.
*   **Mass Transfer Analogy:** The analogy between heat and mass transfer is powerful for solving mass transfer problems using heat transfer correlations by substituting $Nu \rightarrow Sh$ and $Pr \rightarrow Sc$.
*   **Textbook References:** Sachdeva and Cengel & Ghajar are primary resources for detailed derivations, additional correlations, and examples.

---

## 7. Practice Questions and Exercises

**Question 1 (Forced Convection - External Flow):**
Air at 20°C flows over a flat plate at 100°C at a velocity of 5 m/s. The plate is 1 meter long. Calculate the average convective heat transfer coefficient and the total heat transfer rate from the plate.
*(Assume standard atmospheric pressure. You will need to look up air properties at the film temperature.)*

**Answer Guidance:**
1.  Calculate the film temperature: $T_f = (100 + 20)/2 = 60^\circ C$.
2.  Find the properties of air at 60°C (e.g., from Sachdeva's appendices or Cengel & Ghajar). Key properties: $\nu$, $k$, $Pr$.
3.  Calculate the Reynolds number at the end of the plate ($L=1$ m).
4.  Determine if the flow is laminar, turbulent, or mixed.
5.  Choose the appropriate correlation for the average Nusselt number.
6.  Calculate $Nu_L$.
7.  Calculate the convective heat transfer coefficient $h = Nu_L \cdot k/L$.
8.  Calculate the total heat transfer rate $Q = h \cdot A \cdot (T_s - T_\infty)$.

**Question 2 (Forced Convection - Internal Flow):**
Water at 20°C enters a 2 cm diameter smooth pipe at a velocity of 2 m/s. The pipe wall is maintained at a constant temperature of 80°C. The water flows for a length of 5 meters. Calculate the heat transfer coefficient and the total heat transferred to the water.
*(Assume standard atmospheric pressure. You will need to look up water properties at the film temperature.)*

**Answer Guidance:**
1.  Calculate the film temperature: $T_f = (80 + 20)/2 = 50^\circ C$.
2.  Find the properties of water at 50°C. Key properties: $\nu$, $k$, $Pr$.
3.  Calculate the Reynolds number: $Re_D = \rho V D / \mu$.
4.  Determine if the flow is laminar or turbulent.
5.  Calculate the hydraulic diameter (for a circular pipe, it's the diameter).
6.  Check if the flow is fully developed (calculate entrance length $L_e \approx 0.05 Re_D D$).
7.  Choose the appropriate correlation (e.g., Dittus-Boelter if turbulent and fully developed).
8.  Calculate $Nu_D$.
9.  Calculate $h = Nu_D \cdot k/D$.
10. Calculate the heat transfer rate $Q = h \cdot A \cdot (T_s - T_\infty)$, where $A$ is the surface area of the pipe.

**Question 3 (Natural Convection):**
A horizontal electrically heated brass plate, 0.5 m × 0.5 m, is maintained at 150°C in atmospheric air at 20°C. Calculate the rate of heat transfer by natural convection from the upper surface of the plate.

**Answer Guidance:**
1.  Calculate the film temperature: $T_f = (150 + 20)/2 = 85^\circ C$.
2.  Find the properties of air at 85°C. Key properties: $\nu$, $k$, $c_p$.
3.  Calculate the characteristic length for a horizontal plate (e.g., $L = \sqrt{A} = 0.5$ m).
4.  Calculate the Grashof number $Gr_L$ using $\beta \approx 1/T_f$ (in Kelvin).
5.  Calculate the Prandtl number $Pr$.
6.  Calculate the Rayleigh number $Ra_L = Gr_L \cdot Pr$.
7.  Choose the appropriate correlation for natural convection from a horizontal plate facing upwards.
8.  Calculate $Nu_L$.
9.  Calculate $h = Nu_L \cdot k/L$.
10. Calculate the heat transfer rate $Q = h \cdot A \cdot (T_s - T_\infty)$.

**Question 4 (Mass Transfer):**
Air at 25°C and 1 atm flows over a thin, flat surface of naphthalene (used for mass transfer analogy) at a velocity of 10 m/s. The surface is maintained at a uniform concentration of naphthalene vapor $C_{As}$. The bulk air is essentially free of naphthalene vapor, $C_{A\infty} = 0$. The surface is 0.3 m long in the direction of flow. Determine the mass transfer coefficient at the end of the surface and the total mass transfer rate if $C_{As} = 1 \times 10^{-4} \text{ kmol/m}^3$.
*(You will need the mass diffusivity of naphthalene in air at 25°C.)*

**Answer Guidance:**
1.  Find the properties of air at 25°C. Key properties: $\nu$.
2.  Find the mass diffusivity of naphthalene in air at 25°C, $\mathcal{D}_{AB}$.
3.  Calculate the Reynolds number at the end of the plate ($x=0.3$ m).
4.  Calculate the Schmidt number $Sc = \nu / \mathcal{D}_{AB}$.
5.  Use the analogous heat transfer correlation for the Sherwood number: $Sh_x = 0.664 Re_x^{1/2} Sc^{1/3}$ (assuming laminar flow, verify $Re_x < 5 \times 10^5$).
6.  Calculate the mass transfer coefficient $h_m = Sh_x \cdot \mathcal{D}_{AB} / x$.
7.  Calculate the total mass transfer rate $N_A = h_m \cdot A \cdot (C_{As} - C_{A\infty})$.

---

This comprehensive set of notes covers the core concepts of convection heat transfer, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks for detailed derivations, specific property data, and a wider range of correlations. Good luck with your studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
