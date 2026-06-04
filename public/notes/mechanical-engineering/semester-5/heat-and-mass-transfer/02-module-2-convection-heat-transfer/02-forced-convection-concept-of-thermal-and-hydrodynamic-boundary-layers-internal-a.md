---
title: "Forced convection – concept of thermal and hydrodynamic boundary layers (internal and external flows) –thermal diffusivity – momentum diffusivity – fluid friction and heat transfer relationship – developing and developed flows (hydrodynamic and thermal). Non dimensional number in heat transfer."
subject: "HEAT AND MASS TRANSFER"
module: "Module 2: Convection heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a7"
status: "completed"
scrapedAt: "2026-05-20T18:00:12.880Z"
---
# HEAT AND MASS TRANSFER - MODULE 2: CONVECTION HEAT TRANSFER

## Topic: Forced Convection - Concept of Thermal and Hydrodynamic Boundary Layers, Diffusivities, Fluid Friction and Heat Transfer Relationship, Developing and Developed Flows, Non-dimensional Numbers

### Learning Outcomes:

*   Understand the concept of thermal and hydrodynamic boundary layers in forced convection for both internal and external flows.
*   Define and explain thermal diffusivity and momentum diffusivity.
*   Analyze the relationship between fluid friction and heat transfer.
*   Differentiate between developing and developed flows (hydrodynamic and thermal).
*   Understand the significance and application of non-dimensional numbers in heat transfer.

### Course Outcomes Alignment:

*   **CO2 (K4):** This entire module directly addresses the analysis of forced heat convection mechanisms and factors influencing heat transfer equipment design.

---

### 1. Forced Convection: An Overview

Forced convection is a mode of heat transfer where the fluid motion is caused by an external force, such as a fan, pump, or wind. This external forcing leads to significantly higher heat transfer rates compared to natural convection.

**Key Concepts:**

*   **External Force:** The primary driver of fluid motion is an externally applied force, distinguishing it from natural convection driven by buoyancy forces.
*   **Higher Heat Transfer Rates:** Generally, forced convection results in much higher heat transfer coefficients ($h$) than natural convection due to the enhanced fluid mixing.
*   **Applications:** Found in numerous engineering applications like:
    *   Cooling of electronic components (fans)
    *   Automotive radiators (fans and water pumps)
    *   Heat exchangers (pumps)
    *   Wind turbines
    *   Air conditioning systems

---

### 2. Hydrodynamic and Thermal Boundary Layers

When a fluid flows over a surface, or within a confined geometry, the presence of the surface causes velocity and temperature gradients within the fluid. These gradients are organized into regions called boundary layers.

#### 2.1 Hydrodynamic Boundary Layer

*   **Definition:** The region of the fluid near a solid surface where the effects of viscosity are significant and the fluid velocity changes from zero at the surface to the free-stream velocity.
*   **Formation:**
    *   At the leading edge of a surface (or the entrance of a pipe), the fluid is at the free-stream velocity.
    *   Due to the no-slip condition, the fluid velocity at the solid surface is zero.
    *   Viscous forces, transmitted from the surface, decelerate the fluid layers adjacent to it.
    *   This effect propagates outwards, creating a velocity profile.
*   **Velocity Profile:** Within the hydrodynamic boundary layer, the velocity increases from 0 at the wall to the free-stream velocity ($V_\infty$) at the boundary layer edge.
*   **Thickness ($\delta$):** The hydrodynamic boundary layer thickness is typically defined as the distance from the surface where the fluid velocity reaches 99% of the free-stream velocity.

#### 2.2 Thermal Boundary Layer

*   **Definition:** The region of the fluid near a solid surface where the effects of heat transfer are significant and the fluid temperature changes from the surface temperature to the free-stream temperature.
*   **Formation:**
    *   When a fluid at a certain temperature flows over a surface at a different temperature, heat is exchanged.
    *   The fluid in contact with the surface (at the no-slip condition) acquires the surface temperature.
    *   Heat is then conducted and convected to adjacent fluid layers.
    *   This creates a temperature gradient.
*   **Temperature Profile:** Within the thermal boundary layer, the temperature changes from the surface temperature ($T_s$) to the free-stream temperature ($T_\infty$).
*   **Thickness ($\delta_t$):** The thermal boundary layer thickness is typically defined as the distance from the surface where the fluid temperature difference from the free-stream temperature reaches 99% of the difference between the surface and free-stream temperatures.
    $$ \frac{T - T_\infty}{T_s - T_\infty} = 0.99 $$

#### 2.3 Relationship between Hydrodynamic and Thermal Boundary Layers

*   **Prandtl Number (Pr):** The ratio of momentum diffusivity to thermal diffusivity. It dictates the relative thickness of the hydrodynamic and thermal boundary layers.
    $$ \text{Pr} = \frac{\text{Momentum Diffusivity}}{\text{Thermal Diffusivity}} = \frac{\nu}{\alpha} $$
    *   **Pr > 1:** Thermal boundary layer is thinner than the hydrodynamic boundary layer (e.g., oils, water). Heat diffuses slower than momentum.
    *   **Pr < 1:** Thermal boundary layer is thicker than the hydrodynamic boundary layer (e.g., liquid metals). Heat diffuses faster than momentum.
    *   **Pr ≈ 1:** Hydrodynamic and thermal boundary layers have similar thicknesses (e.g., gases like air).

#### 2.4 Boundary Layers in Internal vs. External Flows

*   **External Flows (e.g., flow over a flat plate):**
    *   Boundary layers start at the leading edge and grow in thickness along the flow direction.
    *   The free stream is undisturbed by the presence of the surface, except within the boundary layer.
*   **Internal Flows (e.g., flow inside a pipe):**
    *   Both hydrodynamic and thermal boundary layers start developing from the entrance of the pipe.
    *   They grow until they meet at the center of the pipe.
    *   The entire flow within the pipe is affected by the presence of the walls.

**Important Point:** The rate of heat transfer is directly related to the temperature gradients at the wall, which are influenced by the thermal boundary layer. The velocity gradients at the wall influence the shear stress, which is related to friction.

---

### 3. Thermal Diffusivity and Momentum Diffusivity

These properties quantify how quickly temperature and momentum diffuse through a fluid, respectively. They are crucial for understanding boundary layer development and heat transfer rates.

#### 3.1 Momentum Diffusivity ($\nu$)

*   **Definition:** Also known as kinematic viscosity, it represents the ability of a fluid to transmit momentum through molecular action. It is the ratio of dynamic viscosity to density.
    $$ \nu = \frac{\mu}{\rho} $$
    where:
    *   $\mu$ is dynamic viscosity (Pa·s or N·s/m²)
    *   $\rho$ is density (kg/m³)
*   **Significance:** Higher $\nu$ means momentum diffuses more easily, leading to thicker hydrodynamic boundary layers and greater viscous effects.
*   **Units:** m²/s

#### 3.2 Thermal Diffusivity ($\alpha$)

*   **Definition:** Represents the ability of a material to conduct heat. It is the ratio of thermal conductivity to volumetric heat capacity.
    $$ \alpha = \frac{k}{\rho c_p} $$
    where:
    *   $k$ is thermal conductivity (W/m·K)
    *   $\rho$ is density (kg/m³)
    *   $c_p$ is specific heat at constant pressure (J/kg·K)
*   **Significance:** Higher $\alpha$ means heat diffuses more easily, leading to thinner thermal boundary layers and more effective heat transfer.
*   **Units:** m²/s

**Important Point:** The ratio of these diffusivities, the Prandtl number ($\text{Pr} = \nu/\alpha$), is a key dimensionless parameter in convection.

---

### 4. Fluid Friction and Heat Transfer Relationship

There is a fundamental relationship between the friction generated by fluid flow and the heat transfer that occurs, particularly in forced convection. This relationship is often expressed through analogies.

*   **Viscous Forces and Heat Generation:**
    *   **Friction:** The shearing of fluid layers due to viscosity creates frictional drag at the surface, which dissipates mechanical energy into thermal energy (viscous dissipation). This is a source of heat within the fluid.
    *   **Heat Transfer:** In forced convection, the primary heat transfer mechanism is the movement of fluid parcels, carrying thermal energy.
*   **Reynolds Analogy:** For fluids with $\text{Pr} \approx 1$ (like gases), there's a direct analogy between the mechanisms of momentum transfer (viscosity) and heat transfer (thermal conductivity).
    $$ \frac{h}{c_p G} = \frac{f}{8} $$
    where:
    *   $h$ is the convective heat transfer coefficient.
    *   $c_p$ is the specific heat.
    *   $G$ is the mass velocity ($\rho V$).
    *   $f$ is the Darcy friction factor (related to wall shear stress).
    This analogy implies that regions with higher friction (higher shear stress) also tend to have higher heat transfer rates.

*   **Chilton-Colburn Analogy:** A more general analogy that accounts for fluids with different Prandtl numbers by introducing the Colburn $j$-factor.
    $$ \text{St} \cdot \text{Pr}^{2/3} = \frac{f}{8} $$
    where:
    *   $\text{St}$ is the Stanton number ($\text{St} = h / (\rho V c_p)$), which is a dimensionless heat transfer coefficient.
    This analogy highlights that heat transfer is enhanced for fluids with higher Pr numbers relative to friction.

**Key Takeaway:** Factors that increase turbulence and mixing in the fluid (which also increase friction) generally increase the convective heat transfer coefficient.

---

### 5. Developing and Developed Flows (Hydrodynamic and Thermal)

When fluid enters a conduit or flows over a surface, the velocity and temperature profiles evolve. The flow is considered "developing" until these profiles become fully established and no longer change with axial position.

#### 5.1 Developing Hydrodynamic Flow

*   **Entrance Region:** The region from the pipe inlet or surface leading edge where the hydrodynamic boundary layer is forming and growing.
*   **Hydrodynamically Developing Flow:** The velocity profile is changing with axial distance. The boundary layers are growing and eventually merge at the centerline (in internal flows) or reach a maximum thickness (in external flows).
*   **Hydrodynamically Developed Flow:** The velocity profile becomes constant and no longer changes with axial distance. This occurs when the hydrodynamic boundary layers from opposite walls meet (in internal flows).
    *   **Internal Flow (e.g., pipe):** The flow becomes fully developed when the boundary layers merge at the centerline. The characteristic length for this development is the **hydrodynamic entrance length ($L_{h,e}$)**.
        *   For laminar flow, $L_{h,e}/D \approx 0.056 \text{Re}_D$ (Sachdeva, Ch. 6).
        *   For turbulent flow, the entrance region is much shorter, roughly $L_{h,e}/D \approx 10$.
*   **External Flow (e.g., flat plate):** The hydrodynamic boundary layer continues to grow along the plate, but in a sense, the flow over the entire plate can be considered developing as the boundary layer thickness increases.

#### 5.2 Developing Thermal Flow

*   **Thermally Developing Flow:** The temperature profile is changing with axial distance. The thermal boundary layer is forming and growing.
*   **Thermally Developed Flow:** The temperature profile becomes constant and no longer changes with axial distance. This occurs when the thermal boundary layers from opposite walls meet (in internal flows) or when the surface temperature is uniform and the fluid reaches that temperature.
    *   **Internal Flow:** The flow becomes thermally developed when the thermal boundary layers merge. The characteristic length for this development is the **thermal entrance length ($L_{t,e}$)**.
        *   $L_{t,e}$ depends on the flow regime (laminar/turbulent) and thermal boundary conditions (constant wall temperature, constant heat flux) and the Prandtl number.
        *   For laminar flow with constant wall temperature, $L_{t,e}/D \approx 0.05 \text{Re}_D \text{Pr}$ (Nag, Ch. 5).
        *   For turbulent flow, the thermal entrance length is generally shorter than the hydrodynamic entrance length, often approximately the same as the hydrodynamic entrance length.
*   **External Flow:** Similar to hydrodynamic flow, the thermal boundary layer grows along the plate, so the flow can be considered thermally developing.

**Important Point:** Heat transfer coefficients are typically higher in the developing flow regions due to steeper temperature gradients. In the fully developed region, the heat transfer coefficient is usually constant (for constant wall properties).

---

### 6. Non-Dimensional Numbers in Heat Transfer

Non-dimensional numbers are ratios of characteristic physical quantities that help simplify complex heat transfer problems and allow for the correlation of experimental data across different scales and fluids. They represent the relative importance of different physical phenomena.

#### 6.1 Reynolds Number ($\text{Re}$)

*   **Definition:** The ratio of inertial forces to viscous forces.
    $$ \text{Re} = \frac{\rho V L}{\mu} = \frac{V L}{\nu} $$
    where:
    *   $\rho$ is density
    *   $V$ is characteristic velocity
    *   $L$ is characteristic length (e.g., diameter for pipe flow, length for flow over a plate)
    *   $\mu$ is dynamic viscosity
    *   $\nu$ is kinematic viscosity
*   **Significance:**
    *   **Laminar Flow:** $\text{Re} < 2300$ (for pipe flow) - smooth, orderly flow.
    *   **Transitional Flow:** $2300 < \text{Re} < 4000$ - flow becomes unstable.
    *   **Turbulent Flow:** $\text{Re} > 4000$ - chaotic, random motion, enhanced mixing.
    *   Crucial for determining the flow regime, which significantly impacts heat transfer.

#### 6.2 Prandtl Number ($\text{Pr}$)

*   **Definition:** The ratio of momentum diffusivity to thermal diffusivity.
    $$ \text{Pr} = \frac{\nu}{\alpha} = \frac{c_p \mu}{k} $$
*   **Significance:**
    *   Relates the thickness of the hydrodynamic boundary layer to the thermal boundary layer.
    *   As discussed earlier, it influences the relationship between friction and heat transfer.

#### 6.3 Nusselt Number ($\text{Nu}$)

*   **Definition:** The ratio of convective heat transfer to conductive heat transfer across the fluid layer. It represents the enhancement of heat transfer due to fluid motion.
    $$ \text{Nu} = \frac{h L}{k} $$
    where:
    *   $h$ is the convective heat transfer coefficient.
    *   $L$ is the characteristic length.
    *   $k$ is the thermal conductivity of the fluid.
*   **Significance:**
    *   A higher Nusselt number indicates more effective convective heat transfer.
    *   For pure conduction, $\text{Nu} = 1$.
    *   For forced convection, $\text{Nu} > 1$.
    *   It's a primary dependent variable in empirical correlations for convective heat transfer.

#### 6.4 Peclet Number ($\text{Pe}$)

*   **Definition:** The ratio of the rate of advective transport (convective transport) to the rate of diffusive transport (conductive transport).
    $$ \text{Pe} = \frac{V L}{\alpha} = \text{Re} \cdot \text{Pr} $$
*   **Significance:**
    *   Indicates the relative importance of convection versus conduction in transporting heat or mass.
    *   High $\text{Pe}$ means convection dominates; low $\text{Pe}$ means conduction dominates.

#### 6.5 Stanton Number ($\text{St}$)

*   **Definition:** The ratio of heat transfer coefficient to the product of density, velocity, and specific heat. It relates the heat transfer rate to the flow rate and fluid properties.
    $$ \text{St} = \frac{h}{\rho V c_p} = \frac{\text{Nu}}{\text{Re} \cdot \text{Pr}} $$
*   **Significance:**
    *   A dimensionless heat transfer coefficient, useful in the Chilton-Colburn analogy.
    *   Directly relates to the energy balance of the fluid.

#### 6.6 Grashof Number ($\text{Gr}$) - For Natural Convection, but good to know for comparison

*   **Definition:** The ratio of buoyancy forces to viscous forces.
    $$ \text{Gr} = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2} $$
*   **Significance:** Crucial for natural convection, where buoyancy drives fluid motion. It helps determine whether natural convection is significant or negligible.

**Important Point:** The non-dimensional numbers allow engineers to develop generalized correlations (e.g., $\text{Nu} = f(\text{Re}, \text{Pr})$) that can be applied to a wide range of fluids and geometries.

---

### 7. Examples and Practice Problems

#### Example 1: Boundary Layer Thickness

Air at $30^\circ\text{C}$ flows over a flat plate at $100^\circ\text{C}$ with a velocity of $5 \text{ m/s}$. Assuming the properties of air are constant at these temperatures, estimate the ratio of the thermal boundary layer thickness to the hydrodynamic boundary layer thickness at a given distance from the leading edge.

**Solution:**
This ratio is governed by the Prandtl number.
For air at around room temperature, $\text{Pr} \approx 0.7$.
The ratio of boundary layer thicknesses is approximately $\delta_t / \delta \approx \text{Pr}^{1/3}$.
So, $\delta_t / \delta \approx (0.7)^{1/3} \approx 0.888$.
This means the thermal boundary layer is slightly thinner than the hydrodynamic boundary layer for air.

#### Example 2: Flow Regime

Water flows through a pipe of $0.05 \text{ m}$ diameter at a velocity of $1 \text{ m/s}$. Determine the flow regime.
Properties of water at $20^\circ\text{C}$: $\rho = 1000 \text{ kg/m}^3$, $\mu = 1 \times 10^{-3} \text{ Pa·s}$.

**Solution:**
Calculate the Reynolds number:
$\text{Re}_D = \frac{\rho V D}{\mu} = \frac{1000 \text{ kg/m}^3 \times 1 \text{ m/s} \times 0.05 \text{ m}}{1 \times 10^{-3} \text{ Pa·s}} = 50,000$
Since $\text{Re}_D > 4000$, the flow is turbulent.

#### Practice Problems:

1.  **Boundary Layer Thickness Ratio:** What is the approximate ratio of the thermal boundary layer thickness to the hydrodynamic boundary layer thickness for engine oil flowing over a surface, given its $\text{Pr} \approx 100$?
    *   **Answer:** $\delta_t / \delta \approx (100)^{1/3} \approx 4.64$. The thermal boundary layer is much thicker than the hydrodynamic boundary layer.
2.  **Flow Regime Identification:** A gas with kinematic viscosity $\nu = 15 \times 10^{-6} \text{ m}^2/\text{s}$ flows through a tube of $0.02 \text{ m}$ diameter at $10 \text{ m/s}$. What is the flow regime?
    *   **Answer:** $\text{Re}_D = \frac{V D}{\nu} = \frac{10 \text{ m/s} \times 0.02 \text{ m}}{15 \times 10^{-6} \text{ m}^2/\text{s}} = 13,333$. The flow is turbulent.
3.  **Non-dimensional Number Calculation:** Calculate the Nusselt number for a fluid with thermal conductivity $k = 0.5 \text{ W/m·K}$, flowing over a plate of length $0.1 \text{ m}$ with a heat transfer coefficient $h = 100 \text{ W/m}^2\text{·K}$.
    *   **Answer:** $\text{Nu} = \frac{h L}{k} = \frac{100 \text{ W/m}^2\text{·K} \times 0.1 \text{ m}}{0.5 \text{ W/m·K}} = 20$.

---

### 8. Key Points to Remember

*   **Forced convection** is driven by external means, leading to higher heat transfer rates than natural convection.
*   **Hydrodynamic boundary layer** is where velocity gradients exist due to viscosity.
*   **Thermal boundary layer** is where temperature gradients exist due to heat transfer.
*   The **Prandtl number ($\text{Pr} = \nu/\alpha$)** dictates the relative thicknesses of these boundary layers. $\text{Pr}>1 \implies \delta_t > \delta$; $\text{Pr}<1 \implies \delta_t < \delta$.
*   **Momentum diffusivity ($\nu$)** relates to momentum transport; **Thermal diffusivity ($\alpha$)** relates to heat conduction.
*   There's a **relationship between friction and heat transfer** (e.g., Reynolds and Chilton-Colburn analogies), often indicating that enhanced mixing improves both.
*   **Developing flow** is the region where boundary layers grow, leading to higher heat transfer coefficients.
*   **Developed flow** is where boundary layer profiles are constant.
*   **Non-dimensional numbers** (Re, Pr, Nu, Pe, St) are essential for correlating heat transfer data and simplifying analysis.
*   **Reynolds number (Re)** determines the flow regime (laminar/turbulent).
*   **Nusselt number (Nu)** quantifies the convective heat transfer enhancement.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook References and Further Reading

*   **Fundamentals of engineering heat and mass transfer by R. C. Sachdeva:** Particularly Chapters 6 (Forced Convection Inside Tubes) and 7 (Forced Convection Over Surfaces).
*   **Heat and Mass Transfer elements by P.K Nag:** Chapters 5 (Forced Convection) and 6 (Heat Transfer in Internal and External Flows).
*   **Heat and Mass Transfer – Fundamental and Application by Yunus A. Cengel and Afshin J. Ghajar:** Chapters 6 (Analysis of Heat Convection) and 7 (External Flow Over Surfaces) and Chapter 8 (Internal Flow).
*   **A text book on heat transfer by S.P. Sukhatme:** Chapter 7 (Forced Convection) and Chapter 8 (Flows Through Pipes and Over Surfaces).

These textbooks provide detailed derivations, empirical correlations, and numerous examples to further solidify your understanding of forced convection. The reference books on mechanical design can provide context on how these heat transfer principles are applied in practical engineering scenarios.