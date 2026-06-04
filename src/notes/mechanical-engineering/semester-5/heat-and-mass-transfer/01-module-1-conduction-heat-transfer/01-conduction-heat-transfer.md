---
title: "Conduction heat transfer"
subject: "HEAT AND MASS TRANSFER"
module: "Module 1: Conduction heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446339f"
status: "completed"
scrapedAt: "2026-05-20T18:00:07.833Z"
---
# Module 1: Conduction Heat Transfer

## Topic: Conduction Heat Transfer

### 1. Introduction to Heat Transfer

*   **Definition:** Heat transfer is the study of thermal energy exchange between systems due to a temperature difference.
*   **Modes of Heat Transfer:**
    *   **Conduction:** Heat transfer through a material without bulk movement of the material itself. Primarily occurs in solids, but also in stationary fluids.
    *   **Convection:** Heat transfer through the movement of fluids (liquids or gases).
    *   **Radiation:** Heat transfer through electromagnetic waves.
*   **Importance:** Understanding heat transfer is crucial for designing efficient and safe thermal systems, from engines and power plants to electronic cooling and building insulation. (CO1, K3)

### 2. Conduction Heat Transfer

#### 2.1. Fundamental Principles

*   **Definition:** Conduction is the transfer of heat from a region of higher temperature to a region of lower temperature through molecular collisions or lattice vibrations. (CO1, K3)
*   **Mechanism:**
    *   In solids, heat is transferred by two primary mechanisms:
        *   **Lattice Vibrations (Phonons):** Atoms or molecules in a solid vibrate about their equilibrium positions. In hotter regions, these vibrations are more energetic and are transferred to adjacent atoms.
        *   **Free Electron Motion:** In electrically conductive materials (metals), free electrons gain kinetic energy in hotter regions and move to cooler regions, transferring energy through collisions. This is why metals are generally good thermal conductors.
    *   In stationary fluids, heat is transferred solely by molecular collisions.
*   **Fourier's Law of Conduction:** This fundamental law quantifies the rate of heat conduction.

    *   **Mathematical Formulation (1D Steady State):**
        $$Q_x = -kA \frac{dT}{dx}$$
        Where:
        *   $Q_x$: Rate of heat transfer by conduction in the x-direction (Watts, W).
        *   $k$: Thermal conductivity of the material (W/m·K). This is an intrinsic property of the material representing its ability to conduct heat.
        *   $A$: Area perpendicular to the direction of heat flow (m²).
        *   $\frac{dT}{dx}$: Temperature gradient in the x-direction (K/m). The negative sign indicates that heat flows in the direction of decreasing temperature.

    *   **Interpretation:** The rate of heat conduction is directly proportional to the thermal conductivity of the material, the area of heat transfer, and the temperature gradient.

#### 2.2. Thermal Conductivity ($k$)

*   **Definition:** Thermal conductivity is a material property that indicates its ability to conduct heat. A high thermal conductivity means the material is a good conductor of heat, while a low thermal conductivity means it is a good insulator. (CO1, K3)
*   **Units:** W/m·K or W/m·°C.
*   **Factors Affecting Thermal Conductivity:**
    *   **Material Type:** Metals (e.g., copper, aluminum) have high $k$, while non-metals (e.g., wood, plastic, air) have low $k$.
    *   **Temperature:** For most materials, $k$ varies with temperature. For some solids, it increases with temperature; for others, it decreases.
    *   **Phase:** Solids generally have higher $k$ than liquids, and liquids have higher $k$ than gases.
    *   **Porosity:** Porous materials filled with air have low thermal conductivity due to the low conductivity of air.
*   **Typical Values (at room temperature):**
    *   Copper: ~400 W/m·K
    *   Aluminum: ~205 W/m·K
    *   Steel: ~50 W/m·K
    *   Glass: ~1 W/m·K
    *   Wood: ~0.1-0.4 W/m·K
    *   Air: ~0.026 W/m·K
*   **Sachdeva, R. C. (6th ed., 2022):** Emphasizes that thermal conductivity is a crucial property in conduction heat transfer calculations and provides tables of $k$ values for various materials. (CO1, K3)
*   **Nag, P. K. (3rd ed., 2011):** Also highlights the importance of $k$ and its temperature dependence in his discussions. (CO1, K3)

#### 2.3. Thermal Diffusivity ($\alpha$)

*   **Definition:** Thermal diffusivity is a thermophysical property that indicates how quickly a material responds to a change in temperature. It is a ratio of thermal conductivity to volumetric heat capacity. (CO1, K3)
*   **Mathematical Formulation:**
    $$\alpha = \frac{k}{\rho c_p}$$
    Where:
    *   $\alpha$: Thermal diffusivity (m²/s).
    *   $k$: Thermal conductivity (W/m·K).
    *   $\rho$: Density of the material (kg/m³).
    *   $c_p$: Specific heat capacity at constant pressure (J/kg·K).
*   **Interpretation:**
    *   High $\alpha$ means heat diffuses rapidly through the material. Materials with high thermal conductivity and low volumetric heat capacity tend to have high thermal diffusivity.
    *   Low $\alpha$ means the material heats up or cools down slowly.
*   **Importance:** Thermal diffusivity is particularly important in transient heat conduction problems, where temperature changes with time. It governs the rate at which temperature disturbances propagate through a material. (CO1, K3)
*   **Cengel & Ghajar (6th ed., 2020):** Explain thermal diffusivity as a measure of how fast a material heats up or cools down, connecting it to transient conduction. (CO1, K3)

#### 2.4. Thermal Resistance Concept

*   **Analogy to Electrical Resistance:** The concept of thermal resistance is analogous to electrical resistance in Ohm's Law ($R = V/I$). Heat flow is analogous to current, temperature difference to voltage, and thermal resistance to electrical resistance.
*   **Definition:** Thermal resistance is a measure of a material's or system's opposition to heat flow.
*   **For Conduction (1D Steady State):**
    *   **Plane Wall:**
        $$R_{cond, wall} = \frac{L}{kA}$$
        Where:
        *   $L$: Thickness of the wall (m).
        *   $k$: Thermal conductivity (W/m·K).
        *   $A$: Area of heat transfer (m²).
    *   **Cylindrical Wall (e.g., pipe):**
        $$R_{cond, cylinder} = \frac{\ln(r_2/r_1)}{2\pi k L}$$
        Where:
        *   $r_1$: Inner radius (m).
        *   $r_2$: Outer radius (m).
        *   $k$: Thermal conductivity (W/m·K).
        *   $L$: Length of the cylinder (m).
*   **Series and Parallel Resistances:** For composite walls or systems with multiple layers, thermal resistances can be added in series or parallel, similar to electrical resistors.
    *   **Series:** $R_{total} = R_1 + R_2 + R_3 + ...$
    *   **Parallel:** $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$
*   **Application:** The thermal resistance concept simplifies the analysis of heat transfer through complex geometries and multi-layered systems. It's a powerful tool for calculating overall heat transfer rates. (CO1, K3)
*   **Sukhatme, S. P. (4th ed., 2005):** Utilizes the thermal resistance concept extensively for analyzing heat transfer through various geometries, including composite walls and fins. (CO1, K3)

#### 2.5. Heat Conduction Equation

*   **Derivation Basis:** Derived from the principle of conservation of energy (first law of thermodynamics) and Fourier's Law.
*   **General Heat Conduction Equation (3D):**
    $$\frac{\partial}{\partial x}\left(k \frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k \frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + q_{gen} = \rho c_p \frac{\partial T}{\partial t}$$
    Where:
    *   $T(x, y, z, t)$: Temperature distribution in the medium (K).
    *   $q_{gen}$: Volumetric rate of internal heat generation (W/m³). This term accounts for energy produced within the material, e.g., due to electrical resistance heating or nuclear reactions.
    *   $\rho$: Density (kg/m³).
    *   $c_p$: Specific heat capacity (J/kg·K).
    *   $t$: Time (s).
*   **Simplified Forms:**
    *   **Steady State ($ \frac{\partial T}{\partial t} = 0 $):**
        $$\frac{\partial}{\partial x}\left(k \frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k \frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + q_{gen} = 0$$
    *   **No Heat Generation ($ q_{gen} = 0 $):**
        $$k \left( \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} \right) = \rho c_p \frac{\partial T}{\partial t}$$
    *   **Steady State, No Heat Generation (Laplace Equation):**
        $$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} = 0$$
        Or in vector notation: $\nabla^2 T = 0$
    *   **Steady State, No Heat Generation, Constant $k$:**
        $$\nabla^2 T = 0$$
    *   **Transient, No Heat Generation, Constant $k$:**
        $$\nabla^2 T = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$
        Where $\alpha = k/(\rho c_p)$ is the thermal diffusivity.
*   **Coordinate Systems:** The general equation can be expressed in Cartesian, Cylindrical, or Spherical coordinate systems depending on the geometry.
*   **Boundary Conditions:** To solve the heat conduction equation, appropriate boundary conditions are essential. These specify the thermal state of the system's boundaries. Common types include:
    *   **Dirichlet (Prescribed Surface Temperature):** $T(x, 0, t) = T_s$
    *   **Neumann (Prescribed Heat Flux):** $-k \frac{\partial T}{\partial x} \Big|_{x=0} = q''_s$ (where $q''_s$ is the surface heat flux)
    *   **Robin (Convection Boundary Condition):** $-k \frac{\partial T}{\partial x} \Big|_{x=0} = h (T_\infty - T_s)$, where $h$ is the convection heat transfer coefficient and $T_\infty$ is the surrounding fluid temperature.
*   **Shigley's Mechanical Engineering Design / Budynas & Nisbett (11th ed., 2020):** While primarily focused on mechanical design, these texts may discuss thermal stresses and heat transfer in machine components, implicitly relying on these fundamental equations. (CO1, K3)
*   **Juvinall & Marshek (5th ed., 2011) / Spotts & Shoup (8th ed., 2019):** Similar to Shigley, these texts on machine component design might touch upon thermal aspects where the heat conduction equation is foundational for understanding temperature distributions and potential failures. (CO1, K3)

#### 2.6. Steady-State Conduction in Various Geometries

*   **1D Steady-State Conduction through a Plane Wall:**
    *   Governing Equation: $\frac{d}{dx}\left(k \frac{dT}{dx}\right) = 0$
    *   Solution: $T(x) = T_1 + \frac{T_2 - T_1}{L} x$
    *   Heat Transfer Rate: $Q = kA \frac{T_1 - T_2}{L} = \frac{T_1 - T_2}{R_{cond, wall}}$
    *   **Example:** Heat loss through a building wall.
*   **1D Steady-State Conduction through a Cylindrical Wall (e.g., pipe):**
    *   Governing Equation: $\frac{1}{r}\frac{d}{dr}\left(rk \frac{dT}{dr}\right) = 0$
    *   Solution: $T(r) = T_1 - \frac{T_1 - T_2}{\ln(r_2/r_1)} \ln\left(\frac{r}{r_1}\right)$
    *   Heat Transfer Rate: $Q = \frac{2\pi k L (T_1 - T_2)}{\ln(r_2/r_1)} = \frac{T_1 - T_2}{R_{cond, cylinder}}$
    *   **Example:** Heat loss from a steam pipe insulated with a layer of material.
*   **1D Steady-State Conduction through a Spherical Wall:**
    *   Governing Equation: $\frac{1}{r^2}\frac{d}{dr}\left(r^2 k \frac{dT}{dr}\right) = 0$
    *   Solution: $T(r) = T_1 - \frac{T_1 - T_2}{\frac{1}{r_1} - \frac{1}{r_2}} \left(\frac{1}{r_1} - \frac{1}{r}\right)$
    *   Heat Transfer Rate: $Q = \frac{4\pi k (T_1 - T_2)}{\frac{1}{r_1} - \frac{1}{r_2}} = \frac{T_1 - T_2}{R_{cond, sphere}}$
    *   **Example:** Insulation of a spherical tank.

#### 2.7. Thermal Contact Resistance

*   **Definition:** When two solid surfaces are brought into contact, there are microscopic imperfections on each surface. These imperfections lead to limited contact points, creating small gaps filled with air or another fluid. Heat transfer across these gaps is less efficient, resulting in an additional resistance known as thermal contact resistance. (CO1, K3)
*   **Mechanism:** Heat transfer across the interface occurs through conduction at the actual contact points and conduction/radiation across the interstitial fluid in the gaps.
*   **Impact:** Thermal contact resistance can significantly affect the overall thermal performance of systems, especially when it's comparable to the conduction resistance of the solid materials themselves.
*   **Factors Affecting Contact Resistance:**
    *   Surface Roughness: Smoother surfaces generally have lower contact resistance.
    *   Contact Pressure: Higher pressure leads to more contact points and lower resistance.
    *   Interstitial Fluid: The thermal conductivity of the fluid in the gaps.
    *   Temperature: Can have a secondary effect.
*   **Calculation:**
    $$R_{tc} = \frac{T_{s1} - T_{s2}}{Q/A}$$
    Where:
    *   $R_{tc}$: Thermal contact resistance (m²·K/W).
    *   $T_{s1}$: Temperature of the first surface.
    *   $T_{s2}$: Temperature of the second surface.
    *   $Q/A$: Heat flux across the interface (W/m²).
*   **Reducing Contact Resistance:**
    *   Increasing contact pressure.
    *   Using thermally conductive fillers or grease in the interface.
    *   Improving surface finish (polishing).
*   **Relevance in Design:** Crucial in the design of heat sinks, heat exchangers, and any system involving assembled components where heat must transfer across interfaces. (CO1, K3)
*   **Reference:** Cengel & Ghajar (6th ed., 2020) provide a detailed discussion on thermal contact resistance, its measurement, and methods to minimize it. (CO1, K3)

#### 2.8. Heat Generation in Conduction

*   **Scenario:** Internal heat generation can occur in materials due to various processes like electrical resistance heating (Joule heating), nuclear fission, or chemical reactions.
*   **Effect on Conduction Equation:** The $q_{gen}$ term is added to the heat conduction equation.
*   **1D Steady-State Conduction with Heat Generation (Plane Wall):**
    *   Governing Equation: $k \frac{d^2 T}{dx^2} + q_{gen} = 0$
    *   Solution Example: For a plane wall of thickness $2L$ with uniform heat generation $q_{gen}$, and boundary temperatures $T(-L) = T(L) = T_s$, the temperature distribution is parabolic:
        $$T(x) = T_s + \frac{q_{gen}}{2k}(L^2 - x^2)$$
        The maximum temperature occurs at the center ($x=0$).
    *   **Example:** Temperature distribution in a nuclear fuel rod or an electrically heated resistor.
*   **Cylindrical Geometry with Heat Generation:** The analysis becomes more complex, involving Bessel functions for the solution. The heat transfer rate and temperature distribution will be affected by the heat generation. (CO1, K3)
*   **Sachdeva, R. C. (6th ed., 2022) and Nag, P. K. (3rd ed., 2011):** These textbooks are likely to cover the cases of heat generation in their sections on the conduction equation, providing detailed derivations and examples for various geometries. (CO1, K3)

#### 2.9. Transient Conduction (Brief Introduction)

*   **Definition:** Transient conduction occurs when the temperature within a body changes with time. This happens during the heating or cooling processes of objects.
*   **Governing Equation:** The transient heat conduction equation (with $\alpha = k/(\rho c_p)$) is used:
    $$\nabla^2 T = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$
*   **Analytical Solutions:** Exact analytical solutions are possible for simple geometries and boundary conditions (e.g., Biot number considerations).
*   **Numerical Solutions:** For complex geometries and boundary conditions, numerical methods like the Finite Difference Method (FDM) or Finite Element Method (FEM) are often employed.
*   **Biot Number (Bi):** A dimensionless parameter that characterizes the relative importance of internal conduction resistance to surface convection resistance.
    $$Bi = \frac{hL_c}{k}$$
    Where:
    *   $h$: Convection heat transfer coefficient.
    *   $L_c$: Characteristic length (e.g., volume/surface area).
    *   $k$: Thermal conductivity of the solid.
    *   **Significance:**
        *   $Bi \ll 0.1$: Lumped capacitance method is applicable, assuming uniform internal temperature.
        *   $Bi \gtrsim 0.1$: Internal temperature gradients are significant, and transient conduction equations are required.
*   **Heisler Charts:** Graphical solutions used for transient conduction in simple geometries (plane walls, cylinders, spheres) under convection boundary conditions.
*   **Cengel & Ghajar (6th ed., 2020) and Sukhatme (4th ed., 2005):** These texts will likely dedicate significant portions to transient conduction, covering the lumped capacitance method, Biot number, and analytical/graphical solutions. (CO1, K3)

### 3. Examples and Applications

*   **Building Insulation:** Reducing heat loss or gain through walls, roofs, and windows using materials with low thermal conductivity.
*   **Heat Sinks:** Dissipating heat from electronic components (CPUs, GPUs) to the surrounding air, often made of highly conductive materials like aluminum or copper.
*   **Cooking Utensils:** Pots and pans are designed with conductive bases (e.g., aluminum, copper) for efficient heat transfer from the stove to the food, and insulated handles to prevent burns.
*   **Thermal Barriers:** Used in engines and turbines to protect components from high temperatures, often employing materials with very low thermal conductivity.
*   **Heat Exchangers:** While primarily convection devices, the heat transfer across the walls of tubes and plates involves conduction.
*   **Semiconductor Devices:** Managing heat dissipation from integrated circuits to maintain optimal operating temperatures.

### 4. Practice Questions and Exercises

**Question 1:**
A plane wall of thickness 0.04 m with a thermal conductivity of 1.2 W/m·K has its surface temperatures maintained at 150°C and 30°C. Calculate the heat flux through the wall and the thermal resistance per unit area.

**Answer 1:**
*   Given: $L = 0.04$ m, $k = 1.2$ W/m·K, $T_1 = 150$°C, $T_2 = 30$°C.
*   Heat flux ($q''$): $q'' = -k \frac{dT}{dx} = k \frac{T_1 - T_2}{L}$
    $q'' = 1.2 \text{ W/m·K} \times \frac{150°C - 30°C}{0.04 \text{ m}}$
    $q'' = 1.2 \times \frac{120}{0.04} = 1.2 \times 3000 = 3600 \text{ W/m²}$
*   Thermal resistance per unit area ($R''_{cond}$): $R''_{cond} = \frac{L}{k}$
    $R''_{cond} = \frac{0.04 \text{ m}}{1.2 \text{ W/m·K}} = 0.0333 \text{ m²·K/W}$

**Question 2:**
Consider a steam pipe of inner radius 0.05 m and outer radius 0.07 m, with steam at 200°C inside. The pipe is insulated with a layer of material having a thermal conductivity of 0.5 W/m·K. The outer surface of the insulation is at 40°C. The pipe length is 10 m. Calculate the thermal resistance of the insulation and the rate of heat loss per unit length.

**Answer 2:**
*   Given: $r_1 = 0.05$ m, $r_2 = 0.07$ m, $k = 0.5$ W/m·K, $T_1 = 200$°C, $T_2 = 40$°C, $L = 10$ m.
*   Thermal resistance of insulation ($R_{cond, cylinder}$):
    $R_{cond, cylinder} = \frac{\ln(r_2/r_1)}{2\pi k L}$
    $R_{cond, cylinder} = \frac{\ln(0.07/0.05)}{2\pi \times 0.5 \text{ W/m·K} \times 10 \text{ m}}$
    $R_{cond, cylinder} = \frac{\ln(1.4)}{10\pi} = \frac{0.3365}{31.416} \approx 0.0107 \text{ K/W}$
*   Rate of heat loss ($Q$): $Q = \frac{T_1 - T_2}{R_{cond, cylinder}}$
    $Q = \frac{200°C - 40°C}{0.0107 \text{ K/W}} = \frac{160}{0.0107} \approx 14953 \text{ W}$
*   Heat loss per unit length ($Q/L$): $14953 \text{ W} / 10 \text{ m} \approx 1495.3 \text{ W/m}$

**Question 3:**
A composite wall consists of three layers: Layer 1 (0.1 m thick, $k_1 = 0.05$ W/m·K), Layer 2 (0.2 m thick, $k_2 = 0.2$ W/m·K), and Layer 3 (0.15 m thick, $k_3 = 0.08$ W/m·K). The temperature on the outer surface of Layer 1 is 100°C and on the outer surface of Layer 3 is 20°C. Assuming unit area, calculate the total thermal resistance and the rate of heat transfer.

**Answer 3:**
*   Given: $L_1 = 0.1$ m, $k_1 = 0.05$ W/m·K; $L_2 = 0.2$ m, $k_2 = 0.2$ W/m·K; $L_3 = 0.15$ m, $k_3 = 0.08$ W/m·K; $T_1 = 100$°C, $T_4 = 20$°C.
*   Individual thermal resistances per unit area:
    $R''_1 = \frac{L_1}{k_1} = \frac{0.1}{0.05} = 2 \text{ m²·K/W}$
    $R''_2 = \frac{L_2}{k_2} = \frac{0.2}{0.2} = 1 \text{ m²·K/W}$
    $R''_3 = \frac{L_3}{k_3} = \frac{0.15}{0.08} = 1.875 \text{ m²·K/W}$
*   Total thermal resistance per unit area ($R''_{total}$):
    $R''_{total} = R''_1 + R''_2 + R''_3 = 2 + 1 + 1.875 = 4.875 \text{ m²·K/W}$
*   Rate of heat transfer per unit area ($q''$):
    $q'' = \frac{T_1 - T_4}{R''_{total}} = \frac{100°C - 20°C}{4.875 \text{ m²·K/W}} = \frac{80}{4.875} \approx 16.41 \text{ W/m²}$

### 5. Important Points to Remember

*   **Fourier's Law:** The cornerstone of conduction heat transfer.
*   **Thermal Conductivity ($k$):** A material's inherent ability to conduct heat.
*   **Thermal Resistance:** A useful concept for simplifying analyses of composite systems.
*   **Heat Conduction Equation:** Governs temperature distribution in materials, essential for both steady-state and transient problems.
*   **Boundary Conditions:** Crucial for obtaining unique solutions to the heat conduction equation.
*   **Thermal Contact Resistance:** A significant factor in assembled components.
*   **Heat Generation:** Adds a source term to the conduction equation, affecting temperature profiles.
*   **Thermal Diffusivity ($\alpha$):** Key for understanding transient heat transfer behavior.
*   **Biot Number ($Bi$):** Helps determine if lumped capacitance analysis is appropriate for transient problems.

### 6. Alignment with Course Outcomes

*   **CO1: To understand and apply the principles of heat conduction in engineering problems (Knowledge Level: K3)**
    *   This entire module directly addresses CO1. The notes cover the fundamental principles (Fourier's Law, conduction equation), material properties ($k$, $\alpha$), analytical techniques (thermal resistance, boundary conditions), and practical applications, enabling students to understand and apply these concepts.
*   **CO2, CO3, CO4:** While this module focuses on conduction, the understanding gained here forms the foundation for analyzing convection, radiation, and other heat transfer phenomena covered in subsequent modules. For example, understanding thermal resistance is applicable to convection and radiation boundary conditions.

This comprehensive set of notes aims to provide a solid understanding of conduction heat transfer, aligning with the learning objectives and course outcomes. Remember to refer to the specified textbooks for more detailed derivations, examples, and problem-solving strategies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
