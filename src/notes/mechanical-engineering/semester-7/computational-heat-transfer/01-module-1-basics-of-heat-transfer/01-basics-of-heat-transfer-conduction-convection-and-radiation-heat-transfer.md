---
title: "Basics of Heat Transfer-Conduction, convection and radiation heat transfer."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 1: Basics of Heat Transfer"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446436e"
status: "completed"
scrapedAt: "2026-05-20T18:10:32.842Z"
---
# Computational Heat Transfer: Module 1 - Basics of Heat Transfer

## Introduction to Heat Transfer

Heat transfer is the study of thermal energy moving from one place to another. It is a fundamental concept in many engineering disciplines, including mechanical, chemical, and aerospace engineering. In computational heat transfer, we aim to numerically solve the governing equations that describe these heat transfer processes.

This module focuses on the three fundamental modes of heat transfer: conduction, convection, and radiation. Understanding these basic mechanisms is crucial for developing and applying computational methods to solve complex thermal problems.

---

### Learning Outcomes:

*   Understand the basic principles of heat transfer.
*   Define and explain conduction, convection, and radiation heat transfer.
*   Identify the governing equations for each mode of heat transfer.
*   Understand the concept of thermal properties of materials.
*   Relate the basic principles of heat transfer to their application in computational methods.

---

### Course Outcomes Alignment:

*   **CO1: To understand the basics of governing equations of fluid flow and heat transfer (Knowledge Level: K2)** - This module directly addresses the foundational heat transfer aspects necessary for understanding the governing equations.
*   **CO2: To understand PDE equations and its classification. (Knowledge Level: K2)** - The governing equations for heat transfer are partial differential equations (PDEs), and this module lays the groundwork for their understanding.
*   **CO3: To familiarize with numerical techniques like FDM and FVM (Knowledge Level: K1)** - While this module focuses on the physics, understanding the phenomena is a prerequisite for applying numerical techniques.

---

## 1. Conduction Heat Transfer

**Definition:** Conduction is the transfer of heat through a material or between materials in direct contact, without the bulk movement of the material itself. Energy is transferred at the atomic and molecular level.

**Mechanism:**
*   **Vibrations of Lattice:** In solids, heat energy causes atoms or molecules to vibrate more intensely. These vibrations are passed on to adjacent particles, propagating the heat.
*   **Free Electron Movement:** In metals, free electrons also play a significant role. These electrons absorb thermal energy, move through the material, and collide with atoms, transferring energy. This is why metals are generally good conductors of heat.

**Governing Equation (Fourier's Law of Conduction):**

The rate of heat transfer by conduction is directly proportional to the area perpendicular to the direction of heat flow and the temperature gradient in that direction.

*   **In one dimension:**
    $$q_x = -k \frac{dT}{dx} A$$
    Where:
    *   $q_x$: Rate of heat transfer by conduction in the x-direction (Watts, W)
    *   $k$: Thermal conductivity of the material (W/m·K) - A material property.
    *   $\frac{dT}{dx}$: Temperature gradient in the x-direction (K/m)
    *   $A$: Area perpendicular to the direction of heat flow (m²)

    The negative sign indicates that heat flows from a region of higher temperature to a region of lower temperature.

*   **In three dimensions:**
    $$q = -k \nabla T \cdot A$$
    Or, in terms of heat flux ($q'' = q/A$):
    $$q''_x = -k \frac{\partial T}{\partial x}$$
    $$q''_y = -k \frac{\partial T}{\partial y}$$
    $$q''_z = -k \frac{\partial T}{\partial z}$$
    The total heat transfer rate through a surface is the integral of the heat flux over that surface: $q = \iint_S q'' \cdot \mathbf{n} \, dS$.

**Thermal Conductivity (k):**

*   **Definition:** A material property that quantifies its ability to conduct heat.
*   **Units:** W/m·K
*   **Types of Materials:**
    *   **High thermal conductivity:** Metals (e.g., copper, aluminum) are good conductors.
    *   **Low thermal conductivity:** Insulators (e.g., wood, plastic, air) are poor conductors.
*   **Sastry (2012), Chapter on Numerical Solution of Partial Differential Equations:** While Sastry's book focuses on numerical methods, it often uses heat conduction as a primary example for applying these techniques. The governing equation for steady-state conduction in one dimension without heat generation is often presented as $\frac{d}{dx}(k \frac{dT}{dx}) = 0$. If $k$ is constant, this simplifies to $\frac{d^2T}{dx^2} = 0$, which is a form of Laplace's equation.

**The Heat Conduction Equation (Energy Equation):**

This equation describes the temperature distribution within a material over time and space, accounting for heat generation and all three modes of heat transfer (though convection and radiation terms are often absent in pure conduction problems).

*   **General Form (Transient, with heat generation and variable thermal conductivity):**
    $$\rho c_p \frac{\partial T}{\partial t} = \frac{\partial}{\partial x}(k \frac{\partial T}{\partial x}) + \frac{\partial}{\partial y}(k \frac{\partial T}{\partial y}) + \frac{\partial}{\partial z}(k \frac{\partial T}{\partial z}) + \dot{q}$$
    Where:
    *   $\rho$: Density of the material (kg/m³)
    *   $c_p$: Specific heat capacity at constant pressure (J/kg·K)
    *   $\frac{\partial T}{\partial t}$: Rate of change of temperature with time (transient term) (K/s)
    *   $\dot{q}$: Volumetric rate of heat generation (W/m³)
    *   $\nabla^2 T$: The Laplacian of temperature, representing the spatial distribution of temperature.

*   **Simplifications:**
    *   **Steady-State:** $\frac{\partial T}{\partial t} = 0$, so $\nabla \cdot (k \nabla T) + \dot{q} = 0$.
    *   **One-dimensional, steady-state, no heat generation, constant k:** $\frac{d^2T}{dx^2} = 0$.
    *   **One-dimensional, transient, no heat generation, constant k:** $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2T}{\partial x^2}$, where $\alpha = \frac{k}{\rho c_p}$ is the thermal diffusivity. This is a parabolic PDE.

**Example:** A metal rod heated at one end and cooled at the other. Heat will flow along the rod from the hot end to the cold end via conduction.

**Important Points to Remember:**
*   Conduction is the primary mode of heat transfer in solid materials.
*   Thermal conductivity ($k$) is the key material property.
*   The temperature gradient drives conduction.
*   Fourier's Law quantifies the heat transfer rate.
*   The heat conduction equation is a PDE that describes the transient and spatial temperature distribution.

---

## 2. Convection Heat Transfer

**Definition:** Convection is the transfer of heat from a surface to a moving fluid (liquid or gas) or by the bulk movement of a fluid. It involves the combined effects of conduction and fluid motion.

**Mechanism:**
1.  **Conduction:** Heat is transferred from the surface to the fluid layer in direct contact with it by conduction.
2.  **Fluid Motion (Advection):** The heated fluid parcel moves, carrying its thermal energy with it. This bulk movement of the fluid transfers heat over larger distances.

**Types of Convection:**

*   **Natural (or Free) Convection:**
    *   Occurs due to density differences in the fluid caused by temperature variations.
    *   Buoyancy forces drive the fluid motion.
    *   **Example:** A radiator heating the air in a room, causing the warm air to rise.
    *   **Governing Mechanism:** Buoyancy force overcomes viscous forces.

*   **Forced Convection:**
    *   Occurs when an external force (e.g., a fan, pump, or wind) causes the fluid to move.
    *   The velocity of the fluid is independent of temperature differences.
    *   **Example:** A fan blowing air over a hot surface, or water flowing through a pipe.
    *   **Governing Mechanism:** External force overcomes viscous forces.

**Governing Equation (Newton's Law of Cooling):**

The rate of heat transfer by convection is proportional to the surface area and the temperature difference between the surface and the fluid.

$$q_{conv} = h A (T_s - T_\infty)$$
Where:
*   $q_{conv}$: Rate of heat transfer by convection (Watts, W)
*   $h$: Convective heat transfer coefficient (W/m²·K) - This is an empirical property that depends on fluid properties, flow conditions, and surface geometry. It is *not* a material property of the fluid itself.
*   $A$: Surface area through which convection occurs (m²)
*   $T_s$: Surface temperature (K or °C)
*   $T_\infty$: Bulk fluid temperature (K or °C)

**Convective Heat Transfer Coefficient ($h$):**

*   **Definition:** Represents the effectiveness of heat transfer between a surface and a fluid. It encapsulates the complex fluid dynamics and conduction processes at the interface.
*   **Factors influencing $h$:**
    *   Fluid properties (viscosity, thermal conductivity, density, specific heat)
    *   Flow velocity
    *   Flow regime (laminar vs. turbulent)
    *   Geometry of the surface
    *   Flow direction relative to the surface
*   **Empirical Correlations:** $h$ is typically determined from empirical correlations involving dimensionless numbers such as:
    *   **Nusselt Number (Nu):** $Nu = \frac{hL}{k_f}$, where $L$ is a characteristic length and $k_f$ is the thermal conductivity of the fluid. It represents the ratio of convective to conductive heat transfer across the boundary.
    *   **Reynolds Number (Re):** $Re = \frac{\rho v L}{\mu}$, where $v$ is fluid velocity and $\mu$ is dynamic viscosity. Indicates the flow regime (laminar or turbulent).
    *   **Prandtl Number (Pr):** $Pr = \frac{\nu}{\alpha} = \frac{c_p \mu}{k_f}$, where $\nu$ is kinematic viscosity. Relates momentum diffusivity to thermal diffusivity.

**Patankar (2017), Chapter 3: Calculation of Heat Transfer Coefficients:** Patankar's work heavily emphasizes the calculation of heat transfer coefficients for various flow scenarios using numerical methods. He discusses how to determine $h$ by solving the momentum and energy equations for the fluid. The convective heat transfer coefficient is often derived from the temperature gradient at the wall: $h = -k_f \frac{\partial T}{\partial y}|_{y=0} / (T_w - T_\infty)$, where $y$ is the direction perpendicular to the wall.

**Combined Convection and Conduction:**

In many real-world scenarios, convection and conduction occur simultaneously. For example, in heat exchangers, heat is conducted through the tube walls and then convected to the fluid on either side.

**Example:** A hot plate cooled by a fan. The fan forces air over the hot plate, increasing the rate of heat removal compared to natural convection.

**Important Points to Remember:**
*   Convection requires fluid motion.
*   It's a combination of conduction and advection.
*   Newton's Law of Cooling describes the heat transfer rate.
*   The convective heat transfer coefficient ($h$) is a critical parameter and is often determined empirically.
*   Natural convection is driven by buoyancy; forced convection is driven by external means.

---

## 3. Radiation Heat Transfer

**Definition:** Radiation is the transfer of heat through electromagnetic waves. Unlike conduction and convection, radiation does not require a medium and can occur through a vacuum.

**Mechanism:**
*   All matter with a temperature above absolute zero emits thermal radiation in the form of electromagnetic waves (photons).
*   The intensity and spectral distribution of this radiation depend on the temperature and surface properties of the emitting body.
*   When these waves strike another surface, they can be absorbed, reflected, or transmitted. The absorbed energy increases the internal energy (and temperature) of the receiving body.

**Governing Laws:**

*   **Stefan-Boltzmann Law:** The total energy radiated per unit surface area of a black body is proportional to the fourth power of its absolute temperature.
    $$E_b = \sigma T^4$$
    Where:
    *   $E_b$: Emissive power of a black body (W/m²)
    *   $\sigma$: Stefan-Boltzmann constant (5.67 x 10⁻⁸ W/m²·K⁴)
    *   $T$: Absolute temperature of the surface (K)

*   **Emissivity ($\epsilon$):** A property of a real surface that describes how effectively it emits thermal radiation compared to a black body. $0 \le \epsilon \le 1$.
    $$E = \epsilon E_b = \epsilon \sigma T^4$$
    Where $E$ is the emissive power of a real surface.

*   **Radiosity ($J$):** The total radiation leaving a surface per unit area per unit time, including emitted and reflected radiation.
    $$J = E + \rho G$$
    Where:
    *   $G$: Incident radiation flux on the surface (W/m²)
    *   $\rho$: Reflectivity of the surface (fraction of incident radiation reflected)

*   **Net Radiation Heat Transfer:** For two surfaces, the net heat transfer by radiation between them is often proportional to the difference in their emissive powers or a combined view factor and emissivity.

    *   **Consider two large, parallel diffuse surfaces with uniform temperatures $T_1$ and $T_2$, and emissivities $\epsilon_1$ and $\epsilon_2$:**
        $$q_{rad} = \frac{\sigma (T_1^4 - T_2^4)}{\frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1}$$
        This is a simplified form for specific geometries.

    *   **General form involving view factors:** The fraction of radiation leaving surface $i$ that is incident on surface $j$ is given by the view factor $F_{ij}$.
        $$q_{i \to j} = \sigma \epsilon_i T_i^4 F_{ij} A_i$$ (emission from i to j)
        $$q_{absorbed, j} = \alpha_j G_j A_j$$ (absorption by j)
        The net radiation heat transfer from surface $i$ to all other surfaces can be complex to calculate.

**Absorptivity ($\alpha$), Reflectivity ($\rho$), Transmissivity ($\tau$):**

*   For opaque surfaces ($\tau = 0$), $\alpha + \rho = 1$.
*   **Kirchhoff's Law of Thermal Radiation:** For an opaque surface in thermal equilibrium with its surroundings, its emissivity equals its absorptivity at the same temperature and wavelength: $\epsilon = \alpha$.

**Anderson & Wendt (1995), Chapter on Radiation Heat Transfer:** This reference likely covers the fundamental radiative properties, Planck's law, Wien's displacement law, and the Stefan-Boltzmann law, along with methods for calculating radiation exchange between surfaces, especially using view factors.

**Example:** Heat transfer from the Sun to the Earth. The Sun emits electromagnetic radiation, which travels through the vacuum of space and is absorbed by the Earth's surface, warming it. Another example is the heat felt from a campfire.

**Important Points to Remember:**
*   Radiation is the transfer of energy via electromagnetic waves.
*   It requires no medium and can travel through a vacuum.
*   The Stefan-Boltzmann law governs the emission from surfaces.
*   Emissivity, absorptivity, and reflectivity are key surface properties.
*   Radiation heat transfer depends on the fourth power of absolute temperature.
*   View factors are crucial for calculating radiation exchange between surfaces.

---

## 4. Thermal Properties of Materials

Understanding the thermal properties of materials is essential for solving heat transfer problems, whether analytically or computationally.

*   **Thermal Conductivity ($k$)**: As discussed, measures the ability to conduct heat.
*   **Specific Heat Capacity ($c_p$)**: The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius (or Kelvin). It relates to the energy storage capacity of a material.
*   **Density ($\rho$)**: Mass per unit volume. Important for calculating thermal inertia and mass transfer in fluid mechanics.
*   **Thermal Diffusivity ($\alpha$)**: $\alpha = \frac{k}{\rho c_p}$. It represents how quickly a material responds to changes in temperature. A high thermal diffusivity means temperature changes propagate rapidly through the material.

**Sastry (2012) and Patankar (2017):** These books will likely use these properties as coefficients or parameters within the numerical schemes they present for solving heat transfer PDEs. For instance, in finite difference or finite volume methods, these properties will be assigned to discrete control volumes or nodes.

**Example:** Metals have high $k$ and often moderate $c_p$ and $\rho$, leading to high $\alpha$. They conduct heat well and respond quickly to temperature changes. Insulators have low $k$, making them resistant to heat flow.

---

## Practice Questions and Exercises

**Q1. Definitions:**
(a) Define conduction, convection, and radiation heat transfer.
(b) Differentiate between natural and forced convection.
(c) What is the Stefan-Boltzmann law?

**Q2. Fourier's Law:**
A flat wall, 0.1 m thick, has a thermal conductivity of 1.5 W/m·K. If the temperatures on the two surfaces are 100°C and 20°C, what is the rate of heat transfer per unit area through the wall?

**Q3. Newton's Law of Cooling:**
A heated plate at 200°C is exposed to air at 25°C. The convective heat transfer coefficient is estimated to be 15 W/m²·K. Calculate the heat loss by convection per square meter of surface area.

**Q4. Radiation:**
Calculate the net rate of radiative heat transfer per unit area between two large parallel plates at temperatures 400 K and 300 K. Assume both plates have an emissivity of 0.8.

**Q5. Thermal Diffusivity:**
Given the following properties, calculate the thermal diffusivity for Aluminum at room temperature:
*   Thermal conductivity ($k$) = 205 W/m·K
*   Density ($\rho$) = 2702 kg/m³
*   Specific heat capacity ($c_p$) = 900 J/kg·K

**Q6. Concept Question:**
Which mode of heat transfer is dominant in the following scenarios?
(a) Heating water in a pot on a stove.
(b) Heat transfer from the filament of a light bulb to the surrounding glass.
(c) Heat transfer from the Sun to the Earth.
(d) Cooling a computer chip with a fan.

---

## Answers to Practice Questions

**A1. Definitions:**
(a)
*   **Conduction:** Heat transfer through direct contact of particles without bulk movement of the material.
*   **Convection:** Heat transfer due to the movement of fluids (liquids or gases).
*   **Radiation:** Heat transfer through electromagnetic waves, requiring no medium.
(b) Natural convection is driven by density differences due to temperature variations (buoyancy), while forced convection is driven by external means like fans or pumps.
(c) The Stefan-Boltzmann law states that the total energy radiated per unit surface area of a black body is proportional to the fourth power of its absolute temperature ($E_b = \sigma T^4$).

**A2. Fourier's Law:**
Using Fourier's Law in one dimension: $q_x = -k \frac{dT}{dx} A$.
The temperature gradient is $\frac{dT}{dx} = \frac{T_{cold} - T_{hot}}{thickness} = \frac{20 - 100}{0.1} = -800$ K/m.
Rate of heat transfer per unit area ($q''_x$): $q''_x = -k \frac{dT}{dx} = -(1.5 \text{ W/m·K}) \times (-800 \text{ K/m}) = 1200 \text{ W/m}^2$.

**A3. Newton's Law of Cooling:**
$q_{conv} = h A (T_s - T_\infty)$
Heat loss per square meter ($A=1 \text{ m}^2$):
$q_{conv} = (15 \text{ W/m}^2\text{·K}) \times (1 \text{ m}^2) \times (200°C - 25°C) = 15 \times 175 = 2625 \text{ W}$.

**A4. Radiation:**
Using the simplified form for large parallel plates:
$q_{rad} = \frac{\sigma (T_1^4 - T_2^4)}{\frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1}$
$T_1 = 400$ K, $T_2 = 300$ K, $\epsilon_1 = \epsilon_2 = 0.8$, $\sigma = 5.67 \times 10^{-8}$ W/m²·K⁴.
$\frac{1}{0.8} + \frac{1}{0.8} - 1 = 1.25 + 1.25 - 1 = 1.5$.
$q_{rad} = \frac{(5.67 \times 10^{-8} \text{ W/m}^2\text{·K}^4) \times (400^4 - 300^4) \text{ K}^4}{1.5}$
$q_{rad} = \frac{(5.67 \times 10^{-8}) \times (256 \times 10^8 - 81 \times 10^8)}{1.5} = \frac{(5.67 \times 10^{-8}) \times (175 \times 10^8)}{1.5}$
$q_{rad} = \frac{5.67 \times 175}{1.5} \approx 661.5 \text{ W/m}^2$.

**A5. Thermal Diffusivity:**
$\alpha = \frac{k}{\rho c_p} = \frac{205 \text{ W/m·K}}{(2702 \text{ kg/m}^3) \times (900 \text{ J/kg·K})}$
$\alpha = \frac{205}{2431800} \approx 8.43 \times 10^{-5} \text{ m}^2/\text{s}$.

**A6. Dominant Mode:**
(a) Heating water in a pot: Convection (natural convection of water and forced convection from the burner/heating element). Conduction also plays a role in the pot base.
(b) Heat transfer from filament: Radiation (primarily) and some conduction through the glass.
(c) Sun to Earth: Radiation.
(d) Cooling with a fan: Forced Convection.

---

## Summary and Key Takeaways for Module 1

This module introduces the fundamental mechanisms of heat transfer: conduction, convection, and radiation.

*   **Conduction:** Heat transfer within a medium or between contacting bodies due to molecular interactions. Governed by Fourier's Law and described by the heat conduction equation (a PDE). Key property: Thermal conductivity ($k$).
*   **Convection:** Heat transfer between a surface and a moving fluid, involving both conduction and fluid motion (advection). Governed by Newton's Law of Cooling. Key parameter: Convective heat transfer coefficient ($h$), which is empirical.
*   **Radiation:** Heat transfer via electromagnetic waves, independent of a medium. Governed by the Stefan-Boltzmann Law. Key properties: Emissivity ($\epsilon$), absorptivity ($\alpha$), reflectivity ($\rho$).

These concepts are the bedrock upon which computational heat transfer methods are built. Understanding these physical processes is essential for correctly formulating the governing equations that will be solved numerically. The interplay of these modes often dictates the overall thermal behavior of systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
