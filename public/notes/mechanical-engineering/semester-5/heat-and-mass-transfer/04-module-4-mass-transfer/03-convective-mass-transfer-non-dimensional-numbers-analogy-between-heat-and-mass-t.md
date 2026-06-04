---
title: "Convective mass transfer – non dimensional numbers – analogy between heat and mass transfer – correlations."
subject: "HEAT AND MASS TRANSFER"
module: "Module 4: Mass Transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633b2"
status: "completed"
scrapedAt: "2026-05-20T18:00:19.351Z"
---
# HEAT AND MASS TRANSFER - Module 4: Mass Transfer

## Topic: Convective Mass Transfer – Non-Dimensional Numbers – Analogy Between Heat and Mass Transfer – Correlations

This module delves into the principles of convective mass transfer, introducing the essential non-dimensional numbers that govern these processes. We will explore the fundamental analogy between heat and mass transfer, which allows us to leverage existing knowledge of convective heat transfer to solve mass transfer problems. Finally, we will examine various correlations used to predict convective mass transfer coefficients.

---

### 1. Convective Mass Transfer

**1.1 Definition:**

Convective mass transfer is the process by which a chemical species is transported through a fluid (liquid or gas) by the combined action of bulk fluid motion and diffusion. This occurs when there is a difference in concentration of a species within a fluid, or between a fluid and a surface.

**1.2 Mechanisms of Mass Transfer:**

*   **Diffusion:** The movement of species from a region of higher concentration to a region of lower concentration due to random molecular motion. This is analogous to conduction in heat transfer.
*   **Convection:** The movement of species due to the bulk motion of the fluid. This can be further categorized into:
    *   **Forced Convection:** When the fluid motion is caused by external means like pumps, fans, or wind.
    *   **Natural Convection:** When the fluid motion is caused by density differences arising from concentration gradients (similar to natural convection in heat transfer due to temperature gradients).

**1.3 Mass Transfer Driving Force:**

The driving force for mass transfer is the **concentration difference** of the species. This can be expressed in various ways:
*   **Mass Fraction Difference:** $(w_{A,s} - w_{A,\infty})$
*   **Mole Fraction Difference:** $(y_{A,s} - y_{A,\infty})$
*   **Concentration Difference (molar):** $(C_{A,s} - C_{A,\infty})$
*   **Concentration Difference (mass):** $(\rho_{A,s} - \rho_{A,\infty})$

**1.4 Mass Transfer Rate:**

The rate of convective mass transfer is governed by Newton's Law of Cooling, adapted for mass transfer:

$N_A = h_m (C_{A,s} - C_{A,\infty})$ (Molar basis)

or

$\dot{m}_A = m_A ( \rho_{A,s} - \rho_{A,\infty})$ (Mass basis)

Where:
*   $N_A$: Molar flux of species A (kmol/m².s)
*   $h_m$: Convective mass transfer coefficient (m/s)
*   $C_{A,s}$: Molar concentration of species A at the surface (kmol/m³)
*   $C_{A,\infty}$: Molar concentration of species A in the bulk fluid (kmol/m³)
*   $\dot{m}_A$: Mass flux of species A (kg/m².s)
*   $m_A$: Mass transfer coefficient (mass basis) (m/s)
*   $\rho_{A,s}$: Mass concentration of species A at the surface (kg/m³)
*   $\rho_{A,\infty}$: Mass concentration of species A in the bulk fluid (kg/m³)

The surface concentration ($C_{A,s}$ or $\rho_{A,s}$) depends on the phase equilibrium if there is an interface between phases (e.g., evaporation, absorption).

---

### 2. Non-Dimensional Numbers in Mass Transfer

Similar to heat transfer, non-dimensional numbers simplify the analysis of convective mass transfer and allow for the generalization of experimental results.

| Non-Dimensional Number | Symbol | Definition                                                                                                     | Analogy to Heat Transfer | Significance                                                                                                                                                                                 |
| :--------------------- | :----- | :--------------------------------------------------------------------------------------------------------------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sherwood Number**    | $Sh$   | $\frac{h_m L}{D_{AB}}$                                                                                           | Nusselt Number ($Nu$)    | Relates the convective mass transfer to the diffusive mass transfer. A higher Sherwood number indicates more efficient convective mass transfer.                                              |
| **Schmidt Number**     | $Sc$   | $\frac{\nu}{D_{AB}}$                                                                                             | Prandtl Number ($Pr$)    | Ratio of momentum diffusivity (kinematic viscosity) to mass diffusivity. It characterizes the relative thickness of the velocity boundary layer and the concentration boundary layer.         |
| **Peclet Number (Mass)** | $Pe$   | $\frac{U L}{D_{AB}} = Re \cdot Sc$                                                                               | Peclet Number ($Pe$)     | Ratio of convective transport to diffusive transport. A higher Peclet number signifies that convection dominates diffusion.                                                               |
| **Rayleigh Number (Mass)** | $Ra^*$ | $Gr^* \cdot Sc$ (for natural convection, where $Gr^*$ is Grashof number based on concentration differences) | Rayleigh Number ($Ra$)   | Used in natural convective mass transfer to characterize the driving force for convection (buoyancy forces) relative to viscous forces and diffusion.                                         |
| **Graetz Number (Mass)** | $Gz$   | $\frac{U L}{D_{AB}} \frac{D_{AB}}{L^2} = \frac{U}{L} \frac{D_{AB}}{L}$ (Often used in specific entrance region problems) | Graetz Number ($Gz$)     | Relates the convective velocity and geometric length to the mass diffusivity, typically used in developing flow regions in ducts.                                                              |

Where:
*   $h_m$: Convective mass transfer coefficient (m/s)
*   $L$: Characteristic length (m)
*   $D_{AB}$: Diffusivity of species A in species B (m²/s)
*   $\nu$: Kinematic viscosity of the fluid (m²/s)
*   $U$: Freestream velocity of the fluid (m/s)
*   $Re$: Reynolds Number ($\frac{UL}{\nu}$)
*   $Gr^*$: Grashof Number (Mass)

**Key Concept:** These dimensionless numbers allow us to group many variables into a few key ratios, making it easier to correlate experimental data and predict performance across different scales and fluids.

---

### 3. Analogy Between Heat and Mass Transfer

A powerful aspect of studying mass transfer is the direct analogy between convective heat and mass transfer processes. This analogy arises from the similar mathematical forms of the governing differential equations.

**3.1 Governing Equations Analogy:**

*   **Heat Transfer (Convection):**
    $h (T_s - T_\infty) = -k \frac{\partial T}{\partial n}\Big|_s$ (Surface flux balance)
    Similar to: $\alpha \frac{\partial^2 T}{\partial y^2} - U \frac{\partial T}{\partial x} = 0$ (Energy equation in boundary layer)

*   **Mass Transfer (Convection):**
    $h_m (C_{A,s} - C_{A,\infty}) = -D_{AB} \frac{\partial C_A}{\partial n}\Big|_s$ (Surface flux balance)
    Similar to: $D_{AB} \frac{\partial^2 C_A}{\partial y^2} - U \frac{\partial C_A}{\partial x} = 0$ (Species conservation equation in boundary layer)

**3.2 Dimensionless Numbers Analogy:**

The direct correspondence between the dimensionless numbers is the core of this analogy:

*   **Nusselt Number ($Nu$) $\Leftrightarrow$ Sherwood Number ($Sh$)**
    *   $Nu = \frac{h L}{k}$ (Heat transfer coefficient)
    *   $Sh = \frac{h_m L}{D_{AB}}$ (Mass transfer coefficient)
    *   The analogy is often expressed as: $Nu = f(Re, Pr)$ $\Leftrightarrow$ $Sh = f(Re, Sc)$

*   **Prandtl Number ($Pr$) $\Leftrightarrow$ Schmidt Number ($Sc$)**
    *   $Pr = \frac{\nu}{\alpha}$ (Ratio of momentum diffusivity to thermal diffusivity)
    *   $Sc = \frac{\nu}{D_{AB}}$ (Ratio of momentum diffusivity to mass diffusivity)

*   **Peclet Number ($Pe$) $\Leftrightarrow$ Peclet Number (Mass) ($Pe_m$)**
    *   $Pe = Re \cdot Pr = \frac{UL}{\alpha}$
    *   $Pe_m = Re \cdot Sc = \frac{UL}{D_{AB}}$

**3.3 Physical Interpretation of the Analogy:**

*   **Thermal Diffusivity ($\alpha$) $\Leftrightarrow$ Mass Diffusivity ($D_{AB}$):** Both represent how quickly a property diffuses through a medium.
*   **Kinematic Viscosity ($\nu$) $\Leftrightarrow$ Kinematic Viscosity ($\nu$):** Represents how easily momentum is transported.
*   **Temperature ($T$) $\Leftrightarrow$ Concentration ($C_A$)**: Both are scalar quantities that are transported.
*   **Heat Transfer Coefficient ($h$) $\Leftrightarrow$ Mass Transfer Coefficient ($h_m$):** Both quantify the convective transport rate.

**3.4 When the Analogy Holds:**

The analogy is particularly strong under the following conditions:

*   **Similar Geometries and Flow Conditions:** The flow field (laminar or turbulent) and the geometry of the surface must be the same for both heat and mass transfer.
*   **Similar Boundary Conditions:** The conditions at the surface (e.g., constant surface temperature/concentration, constant heat flux/mass flux) must be analogous.
*   **Fluid Properties are Nearly Constant:** Properties like viscosity, thermal conductivity, and diffusivity should not vary significantly with temperature or concentration.
*   **Similar Physical Processes:** The dominant mechanisms of transport (convection and diffusion) should be comparable.
*   **Small Temperature and Concentration Differences:** This ensures that fluid properties remain relatively constant and that the physical phenomena driving convection are similar (e.g., density changes due to temperature vs. concentration).

**3.5 Limitations of the Analogy:**

*   **Variable Properties:** If fluid properties change significantly with temperature or concentration, the analogy might break down. For instance, viscosity can change significantly with temperature.
*   **Phase Change:** During phase change (like evaporation), latent heat effects can introduce complexities not directly mirrored in mass transfer without phase change.
*   **Radiation:** Heat transfer often involves radiation, which has no direct analogue in mass transfer.
*   **Buoyancy Effects:** While density changes drive both natural convection in heat transfer and mass transfer, the density-temperature relationship can be different from the density-concentration relationship.
*   **Joule-Thompson Effect:** In gases, the Joule-Thompson effect can influence temperature distribution, which isn't directly applicable to mass transfer.

**3.6 Specific Analogies:**

*   **Reynolds Analogy (for turbulent flow, $Pr \approx 1$):** Relates momentum and heat transfer. $St_h = \frac{h}{\rho U c_p} \approx \frac{f}{2}$, where $St_h$ is the Stanton Number for heat. The mass transfer equivalent is $St_m = \frac{h_m}{U} \approx \frac{f}{2}$, which implies $St_h \approx St_m$.
*   **Chilton-Colburn Analogy (for turbulent flow):** A more general analogy that accounts for differences in $Pr$ and $Sc$.
    $St_h \cdot Pr^{2/3} = St_m \cdot Sc^{2/3}$
    This can be rewritten using the dimensionless numbers:
    $\frac{h}{\rho U c_p} Pr^{2/3} = \frac{h_m}{U} Sc^{2/3}$
    $\frac{h L}{k} \left(\frac{\alpha}{L U}\right) \left(\frac{k}{c_p \rho}\right)^{2/3} = \frac{h_m L}{D_{AB}} \left(\frac{D_{AB}}{L U}\right) \left(\frac{D_{AB}}{\nu}\right)^{2/3}$ (This simplification is not quite right, let's focus on the form relating $Nu$, $Sh$, $Pr$, $Sc$)

    The Chilton-Colburn analogy can be expressed as:
    $St_h \cdot Pr^{2/3} = St_m \cdot Sc^{2/3}$
    Substituting $St = \frac{Nu}{Re \cdot Pr}$ and $St_m = \frac{Sh}{Re \cdot Sc}$:
    $\frac{Nu}{Re \cdot Pr} Pr^{2/3} = \frac{Sh}{Re \cdot Sc} Sc^{2/3}$
    $\frac{Nu}{Pr^{1/3}} = \frac{Sh}{Sc^{1/3}}$
    Or:
    $Nu = Sh \left(\frac{Pr}{Sc}\right)^{1/3}$

    This analogy is valid for turbulent flow, moderate Prandtl and Schmidt numbers, and constant fluid properties.

**Example:** If we know the Nusselt number correlation for a specific geometry and flow condition, and we want to find the mass transfer coefficient, we can use the Chilton-Colburn analogy provided $Pr$ and $Sc$ are in a similar range and other conditions are met.

---

### 4. Correlations for Convective Mass Transfer

Mass transfer correlations are derived from experimental data and are often presented in terms of the non-dimensional numbers ($Sh, Re, Sc, Pr$). They are analogous to heat transfer correlations.

**4.1 Forced Convection:**

The general form of correlations is:
$Sh = C \cdot Re^m \cdot Sc^n$

Where $C, m, n$ are constants determined by the flow regime and geometry.

**4.1.1 Flow Over a Flat Plate:**

*   **Laminar Flow ($Re < 5 \times 10^5$):**
    *   **Constant Surface Concentration:**
        $Sh_x = 0.292 Re_x^{1/2} Sc^{1/3}$ (Local Sherwood number)
        $Sh_L = 0.677 Re_L^{1/2} Sc^{1/3}$ (Average Sherwood number)
    *   **Constant Surface Mass Flux:**
        $Sh_L = 0.448 Re_L^{1/2} Sc^{1/3}$
    *   *(Sachdeva, Chapter 14, Nag, Chapter 15, Cengel & Ghajar, Chapter 14)*

*   **Turbulent Flow ($Re > 5 \times 10^5$):**
    *   **Constant Surface Concentration:**
        $Sh_L = 0.036 Re_L^{4/5} Sc^{1/3}$ (Note: The exponent of $Re$ is often taken as 0.8)
    *   *(Sachdeva, Chapter 14, Nag, Chapter 15, Cengel & Ghajar, Chapter 14)*

    **Important Note:** For turbulent flow over a flat plate, the Chilton-Colburn analogy ($Nu = Sh \cdot (Pr/Sc)^{1/3}$) can be used to relate heat and mass transfer correlations. If the heat transfer correlation is $Nu_L = 0.036 Re_L^{4/5} Pr^{1/3}$ (for turbulent flow, $Pr \ge 0.6$), then by analogy:
    $Sh_L = 0.036 Re_L^{4/5} Sc^{1/3}$.

**4.1.2 Flow Inside Tubes:**

*   **Laminar Flow ($Re < 2300$):**
    *   **Fully Developed Flow (Entrance Region Neglected):**
        $Sh = 3.66$ (for constant surface concentration or flux)
    *   **Developing Flow (Sieder-Tate type correlation):**
        $Sh = 1.86 (Re \cdot Sc \cdot \frac{D}{L})^{1/3} \left(\frac{\mu}{\mu_s}\right)^{0.14}$ (where $\mu$ is bulk viscosity, $\mu_s$ is surface viscosity)
        This correlation is analogous to the Sieder-Tate correlation for heat transfer.
        *   *(Sachdeva, Chapter 14, Nag, Chapter 15, Cengel & Ghajar, Chapter 14)*

*   **Turbulent Flow ($Re > 10000$, $0.6 < Pr < 60$):**
    *   **General Correlation (Dittus-Boelter type analogy):**
        $Sh = 0.023 Re^{0.8} Sc^{n}$
        Where $n=0.4$ for heating/evaporation (surface concentration decreasing) and $n=0.3$ for cooling/condensation (surface concentration increasing).
    *   **More accurate correlation (Gnielinski type analogy):**
        $Sh = \frac{(f/8)(Re-1000)Sc}{1 + 12.7\sqrt{f/8}(Sc^{2/3}-1)}$ where $f = (0.79 \ln Re - 1.64)^{-2}$ (friction factor)
    *   *(Sachdeva, Chapter 14, Nag, Chapter 15, Cengel & Ghajar, Chapter 14)*

**4.2 Natural Convection:**

Correlations for natural convective mass transfer are typically based on the Rayleigh number ($Ra^*$) and the Schmidt number ($Sc$).

*   **General Form:** $Sh = C (Ra^*)^m Sc^n$
*   **For Vertical Plates:**
    $Sh_L = 0.55 (Gr^* \cdot Sc)^{1/4}$ (Laminar)
    $Sh_L = 0.13 (Gr^* \cdot Sc)^{1/3}$ (Turbulent)
    Where $Gr^* = \frac{g \beta (C_{A,\infty} - C_{A,s}) L^3}{\nu^2}$ and $\beta$ is the volumetric expansion coefficient for concentration.
    *(Note: The definition of $\beta$ for mass transfer is different from that for heat transfer.)*
    For ideal gases, $\beta = 1/T$ in heat transfer. For mass transfer, if we consider dilute species in a gas, the density is $\rho = P M / (R T)$, where $M$ is molar mass. For a binary mixture A and B, $C_A = \rho_A / M_A$. If $M$ is constant, $\rho = \rho_A + \rho_B$. Then changes in $\rho_A$ can affect $\rho$.
    Let's stick to the definition using mole fraction or mass fraction.
    $Gr^* = \frac{g \beta_C (C_{A,s} - C_{A,\infty}) L^3}{\nu^2}$, where $\beta_C$ relates density change to concentration change. For dilute species in a gas, $\rho = \rho_{\infty} (1 - \frac{C_{A,s} - C_{A,\infty}}{\rho_{\infty}})$. So, $\frac{\partial \rho}{\partial C_A} = -\frac{1}{\rho_{\infty}}$. Then $\beta_C = \frac{1}{\rho_{\infty}} \frac{\partial \rho}{\partial C_A} \approx \frac{1}{\rho_{\infty}} (-\frac{1}{\rho_{\infty}}) = -\frac{1}{\rho_{\infty}^2}$. This isn't standard.

    A more common approach is to relate density to mole fraction: $\rho = \frac{P M}{R T}$.
    For a mixture of A and B, $y_A + y_B = 1$.
    $\rho = \frac{P (y_A M_A + y_B M_B)}{R T}$.
    Assume $M_A$ and $M_B$ are constant.
    $\frac{\partial \rho}{\partial y_A} = \frac{P}{R T} (M_A - M_B)$.
    So, $\beta_C = \frac{1}{\rho} \frac{\partial \rho}{\partial y_A} = \frac{P (M_A - M_B)}{\rho R T} = \frac{M_A - M_B}{M}$, where $M = y_A M_A + y_B M_B$ is the mean molar mass.
    So $Gr^* = \frac{g \frac{M_A - M_B}{M} (y_{A,s} - y_{A,\infty}) L^3}{\nu^2}$.
    And $Ra^* = Gr^* \cdot Sc$.

    *   *(Sachdeva, Chapter 14, Nag, Chapter 15, Cengel & Ghajar, Chapter 14)*

---

### 5. Practical Examples

**Example 1: Evaporation of Water from a Surface**

Consider a shallow tray of water exposed to air. The air is flowing over the surface. This is a case of convective mass transfer from the liquid phase to the gas phase.
*   **Species A:** Water vapor
*   **Species B:** Dry air
*   **Surface:** Water surface
*   **Bulk fluid:** Air

We can determine the rate of evaporation by calculating the mass transfer coefficient ($h_m$) using appropriate correlations for flow over a flat plate (if the tray is wide) or flow in a channel (if it's a narrow trough). The surface concentration of water vapor ($C_{A,s}$) would be the saturation concentration of water vapor at the water surface temperature.

**Example 2: Drying of a Solid**

A wet solid material is exposed to dry air. Moisture from the solid surface evaporates into the air.
*   **Species A:** Water vapor
*   **Species B:** Dry air
*   **Surface:** Surface of the wet solid
*   **Bulk fluid:** Dry air

The drying rate depends on the convective mass transfer coefficient and the moisture concentration difference between the surface and the bulk air. The surface moisture concentration is often a function of the solid's equilibrium moisture content at the given temperature and humidity.

**Example 3: Gas Absorption**

A gas (e.g., CO2) is absorbed from a gas stream into a liquid (e.g., water).
*   **Species A:** CO2
*   **Species B:** Water
*   **Surface:** Gas-liquid interface
*   **Bulk fluid:** Liquid phase

The rate of absorption depends on the mass transfer coefficient in the liquid phase and the concentration difference of CO2 in the liquid. If the gas flow is significant, there will also be convective mass transfer on the gas side.

---

### 6. Important Points to Remember

*   **Mass transfer is driven by concentration differences**, analogous to heat transfer being driven by temperature differences.
*   The **convective mass transfer coefficient ($h_m$)** is the key parameter, similar to the convective heat transfer coefficient ($h$).
*   **Non-dimensional numbers ($Sh, Sc, Pe$)** are crucial for generalizing correlations.
*   The **analogy between heat and mass transfer** is powerful, allowing us to use heat transfer knowledge and correlations to solve mass transfer problems, especially the **Chilton-Colburn analogy** ($Nu/Pr^{1/3} = Sh/Sc^{1/3}$).
*   Always check the **validity conditions** for analogies and correlations (flow regime, boundary conditions, property variations).
*   Understand the **definition of the driving force** and how to determine surface concentration (e.g., from saturation conditions or equilibrium data).
*   The **Sherwood number ($Sh$) is the mass transfer equivalent of the Nusselt number ($Nu$)**, and the **Schmidt number ($Sc$) is the mass transfer equivalent of the Prandtl number ($Pr$)**.

---

### 7. Practice Questions and Exercises

**Question 1:**
The kinematic viscosity ($\nu$) of air at a certain temperature is $1.5 \times 10^{-5} m^2/s$. The mass diffusivity ($D_{AB}$) of a vapor in air is $0.2 \times 10^{-5} m^2/s$. Calculate the Schmidt number for this system. If the flow is forced convection over a flat plate with a characteristic velocity $U = 2 m/s$ and a characteristic length $L = 0.5 m$, calculate the Peclet number for mass transfer.

**Answer 1:**
$Sc = \frac{\nu}{D_{AB}} = \frac{1.5 \times 10^{-5} m^2/s}{0.2 \times 10^{-5} m^2/s} = 7.5$
$Re = \frac{UL}{\nu} = \frac{(2 m/s)(0.5 m)}{1.5 \times 10^{-5} m^2/s} = 66666.67$
$Pe_m = Re \cdot Sc = 66666.67 \times 7.5 = 500000$

**Question 2:**
Consider turbulent flow of air over a flat plate of length 1 m. The air velocity is 10 m/s. If the average heat transfer Nusselt number is $Nu_L = 400$, and $Pr = 0.7$, what would be the average Sherwood number for a mass transfer process with the same geometry and flow conditions, assuming $Sc = 0.6$? Use the Chilton-Colburn analogy.

**Answer 2:**
Using the Chilton-Colburn analogy:
$\frac{Nu}{Pr^{1/3}} = \frac{Sh}{Sc^{1/3}}$
$Sh = Nu \left(\frac{Sc}{Pr}\right)^{1/3} = 400 \left(\frac{0.6}{0.7}\right)^{1/3} = 400 \times (0.857)^{1/3} = 400 \times 0.950 = 380$

**Question 3:**
For laminar flow inside a circular tube, the fully developed Sherwood number for constant surface concentration is $Sh = 3.66$. If the tube diameter $D = 0.02 m$, the air velocity $U = 0.1 m/s$, and the mass diffusivity $D_{AB} = 0.3 \times 10^{-5} m^2/s$, what is the convective mass transfer coefficient $h_m$?

**Answer 3:**
$Sh = \frac{h_m L}{D_{AB}}$
Here, the characteristic length for flow inside a tube is the diameter, $L = D = 0.02 m$.
$h_m = \frac{Sh \cdot D_{AB}}{D} = \frac{3.66 \times (0.3 \times 10^{-5} m^2/s)}{0.02 m} = 0.549 \times 10^{-3} m/s$

**Question 4:**
A large, flat surface of a porous material is submerged in still air and is evaporating water. The air is dry and at 25°C. The water evaporates from the surface maintaining the surface at 25°C (isothermal evaporation). The surface is assumed to be saturated with water vapor. The saturation pressure of water vapor at 25°C is $p_{sat} = 3.169 kPa$. The atmospheric pressure is $P = 101.3 kPa$. The mass diffusivity of water vapor in air is $D_{AB} = 0.257 \times 10^{-5} m^2/s$. The air is still, meaning $U=0$, but there will be natural convection due to density differences caused by water vapor.

(a) Calculate the molar concentration of water vapor at the surface ($C_{A,s}$) and in the bulk air ($C_{A,\infty}$). Assume ideal gas behavior.
(b) If the surface is 1m x 1m, and we assume a simplified approach without using natural convection correlations directly, can you estimate the mass transfer rate? (Hint: Consider mass transfer in stagnant air as pure diffusion, but recognize that natural convection will enhance this). For a simpler approach, assume a very small effective velocity or use a correlation that simplifies for low velocities, or rely on the fundamental definition. Let's assume for simplicity in this question, a mass transfer coefficient similar to a very low Reynolds number condition if forced convection were present. However, for natural convection in stagnant air, one might use a pure diffusion approach or a natural convection correlation. Let's rephrase to make it solvable without advanced natural convection correlations not explicitly covered in this simplified example.
*Revised Question 4:*
A large, flat surface of a porous material is submerged in still air and is evaporating water. The air is dry and at 25°C. The water evaporates from the surface maintaining the surface at 25°C (isothermal evaporation). The surface is assumed to be saturated with water vapor. The saturation pressure of water vapor at 25°C is $p_{sat} = 3.169 kPa$. The atmospheric pressure is $P = 101.3 kPa$. The mass diffusivity of water vapor in air is $D_{AB} = 0.257 \times 10^{-5} m^2/s$. The air is still. A typical low-velocity diffusion mass transfer coefficient might be around $h_m = 5 \times 10^{-5}$ m/s (this is an assumption for practice).

(a) Calculate the molar concentration of water vapor at the surface ($C_{A,s}$) and in the bulk air ($C_{A,\infty}$). Assume ideal gas behavior.
(b) Calculate the rate of water evaporation from the 1m x 1m surface using the assumed mass transfer coefficient.

**Answer 4:**
Given: $T = 25^\circ C = 298.15 K$, $p_{sat} = 3.169 kPa$, $P = 101.3 kPa$, $D_{AB} = 0.257 \times 10^{-5} m^2/s$. Assume $R = 8.314 J/(mol \cdot K)$.

(a) Molar concentration $C = P / (R T)$.
For bulk air ($C_{A,\infty}$), the partial pressure of water vapor is $p_{A,\infty} = 0$ (dry air).
$C_{A,\infty} = \frac{p_{A,\infty}}{R T} = \frac{0}{R T} = 0 \, kmol/m^3$.

For the surface ($C_{A,s}$), the partial pressure of water vapor is the saturation pressure $p_{A,s} = p_{sat} = 3.169 kPa = 3169 Pa$.
$C_{A,s} = \frac{p_{A,s}}{R T} = \frac{3169 Pa}{(8.314 J/(mol \cdot K))(298.15 K)} = \frac{3169}{2479.0} \, kmol/m^3 = 1.278 \, kmol/m^3$.
*(Note: The unit for R should be $Pa \cdot m^3 / (kmol \cdot K)$ for consistency, so R = 8314 Pa m^3 / (kmol K).)*
Let's re-calculate with R = 8314 Pa m^3 / (kmol K):
$C_{A,s} = \frac{3169 Pa}{(8314 Pa \cdot m^3 / (kmol \cdot K))(298.15 K)} = \frac{3169}{2479000} \, kmol/m^3 = 1.278 \times 10^{-3} \, kmol/m^3$.

(b) Rate of evaporation = Convective mass flux $\times$ Surface Area
Evaporation Rate $= h_m (C_{A,s} - C_{A,\infty}) \times Area$
Evaporation Rate $= (5 \times 10^{-5} m/s) (1.278 \times 10^{-3} kmol/m^3 - 0 \, kmol/m^3) \times (1 m \times 1 m)$
Evaporation Rate $= (5 \times 10^{-5}) \times (1.278 \times 10^{-3}) \times 1 \, kmol/s = 6.39 \times 10^{-8} \, kmol/s$.

To convert to mass rate (kg/s):
Molar mass of water ($M_{H2O}$) = 18.015 g/mol = 0.018015 kg/mol.
Mass Evaporation Rate $= (6.39 \times 10^{-8} kmol/s) \times (0.018015 kg/mol) = 1.15 \times 10^{-9} kg/s$.
This is a very small rate, as expected for a low assumed mass transfer coefficient and stagnant air (where natural convection would typically enhance it beyond this simplified estimate).

---

### 8. Course Outcome Alignment

*   **CO4: To understand the principles modern cooling techniques and solve mass transfer problems using correlations.**
    *   This module directly addresses the second part of CO4 by explaining the principles of convective mass transfer, introducing correlations, and demonstrating their application in solving mass transfer problems. The analogies with heat transfer also help in understanding how to apply learned principles from one domain to another.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Textbook and Reference Book Integration

*   **Sachdeva (New Age International):** Provides detailed coverage of convective mass transfer, dimensionless numbers, and various correlations for different flow regimes and geometries (Chapters on Mass Transfer). The analogy section will be particularly relevant.
*   **P.K Nag (Tata McGraw Hill):** Offers explanations of mass transfer concepts, diffusion, convection, and correlations. The analogy between heat and mass transfer is typically presented clearly, and examples of correlations for internal and external flows are usually found.
*   **Cengel & Ghajar (McGraw Hill):** Known for its clear explanations and many examples. This book will likely have comprehensive sections on convective mass transfer, the analogy, and numerous correlations, often presented with their applicability and limitations.
*   **S.P. Sukhatme (Universities Press):** While primarily focused on heat transfer, it might offer insights into the analogy and the fundamental principles that extend to mass transfer.

The reference books (Shigley, Juvinall, Budynas, Spotts) are primarily for mechanical design and might not directly cover the specific correlations for convective mass transfer. However, they could be useful for understanding the engineering applications where mass transfer phenomena are critical, such as in material processing, environmental engineering, or component design involving mass transport. For instance, understanding the principles of fluid mechanics from these texts can aid in understanding Reynolds numbers and flow regimes used in mass transfer correlations.

---
This concludes the study notes for Convective Mass Transfer – Non-Dimensional Numbers – Analogy Between Heat and Mass Transfer – Correlations. Remember to refer to your textbooks for more in-depth derivations and specific examples.