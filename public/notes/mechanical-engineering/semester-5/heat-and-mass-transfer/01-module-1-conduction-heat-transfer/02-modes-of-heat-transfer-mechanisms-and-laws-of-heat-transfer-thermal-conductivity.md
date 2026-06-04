---
title: "Modes of heat transfer – Mechanisms and laws of heat transfer – thermal conductivity, convective heat transfer coefficient, overall heat transfer coefficient"
subject: "HEAT AND MASS TRANSFER"
module: "Module 1: Conduction heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a0"
status: "completed"
scrapedAt: "2026-05-20T18:00:08.545Z"
---
# HEAT AND MASS TRANSFER - Module 1: Conduction Heat Transfer

## Topic: Modes of Heat Transfer – Mechanisms and Laws of Heat Transfer – Thermal Conductivity, Convective Heat Transfer Coefficient, Overall Heat Transfer Coefficient

---

### **Course Outcomes Addressed:**
*   **CO1:** To understand and apply the principles of heat conduction in engineering problems (Knowledge Level: K3)
*   **CO2:** To analyse mechanisms of natural and forced heat convection and understand the factors influencing the design of heat transfer equipment. (Knowledge Level: K4)

---

### **Learning Outcomes:**
Upon completion of this topic, you will be able to:
*   Identify and differentiate between the three primary modes of heat transfer: conduction, convection, and radiation.
*   Explain the underlying mechanisms of heat transfer for each mode.
*   State and explain the fundamental laws governing each mode of heat transfer.
*   Define thermal conductivity and explain its significance in conduction.
*   Define the convective heat transfer coefficient and explain its role in convection.
*   Define the overall heat transfer coefficient and explain its application in composite systems.

---

## 1. Introduction to Heat Transfer

Heat transfer is the study of thermal energy in transit due to a temperature difference. It is a fundamental concept in many engineering disciplines, including mechanical, chemical, and aerospace engineering. Understanding the different modes of heat transfer is crucial for designing efficient thermal systems, such as heat exchangers, engines, and electronic cooling devices.

---

## 2. Modes of Heat Transfer

There are three primary modes of heat transfer:

### 2.1. Conduction

**Definition:** Conduction is the transfer of heat through a substance or between substances in direct physical contact, without the macroscopic movement of the substance itself. It occurs at the molecular level.

**Mechanism:**
*   **In Solids:** Heat transfer by conduction occurs primarily through two mechanisms:
    *   **Lattice Vibrations (Phonons):** Atoms in a solid are arranged in a lattice structure and vibrate about their equilibrium positions. When one part of the solid is heated, its atoms vibrate more vigorously. These vibrations are transmitted to adjacent atoms through interatomic forces, thus propagating heat. This is the dominant mechanism in electrically non-conducting solids.
    *   **Free Electron Movement:** In electrically conducting solids (metals), free electrons also play a significant role. These electrons gain kinetic energy in hotter regions and move to cooler regions, colliding with other electrons and atoms, thus transferring energy. This is why metals are generally good conductors of heat.
*   **In Fluids (Liquids and Gases):** Conduction in fluids is primarily due to the random motion and collisions of molecules. Hotter, more energetic molecules collide with cooler, less energetic molecules, transferring kinetic energy. This process is generally less efficient than conduction in solids.

**Law of Conduction:**
The fundamental law governing conduction heat transfer is **Fourier's Law of Heat Conduction**.

*   **In one dimension:** For a steady-state heat transfer through a plane wall with area $A$, the rate of heat transfer ($Q_{cond}$) is directly proportional to the temperature gradient ($dT/dx$) and the area ($A$), and inversely proportional to the thickness ($dx$).
    $$ Q_{cond} = -kA \frac{dT}{dx} $$
    Where:
    *   $Q_{cond}$ is the rate of heat transfer by conduction (Watts, W).
    *   $k$ is the **thermal conductivity** of the material (W/m·K).
    *   $A$ is the area perpendicular to the direction of heat flow (m²).
    *   $\frac{dT}{dx}$ is the temperature gradient in the direction of heat flow (K/m).
    *   The negative sign indicates that heat flows from higher temperature to lower temperature (i.e., in the direction of decreasing temperature).

*   **Important Note:** For a steady-state process with a constant thermal conductivity and a linear temperature profile across a plane wall of thickness $L$, Fourier's Law can be integrated to:
    $$ Q_{cond} = kA \frac{T_1 - T_2}{L} $$
    Where $T_1$ is the temperature at one surface and $T_2$ is the temperature at the other surface.

**Key Concept:** **Thermal Conductivity ($k$)**
*   **Definition:** Thermal conductivity is an intrinsic property of a material that quantifies its ability to conduct heat. It represents the rate of heat transfer through a unit thickness of a material per unit area per unit temperature difference.
*   **Units:** W/m·K (or W/m·°C).
*   **Significance:** Materials with high thermal conductivity (e.g., metals like copper, aluminum) are good thermal conductors and are used when efficient heat transfer is desired. Materials with low thermal conductivity (e.g., insulators like fiberglass, styrofoam) are poor thermal conductors and are used to minimize heat transfer.
*   **Dependence:** Thermal conductivity can vary with temperature, composition, and phase of the material.

**Examples:**
*   Heat transfer through a metal rod heated at one end.
*   Heat loss through the walls of a building.
*   Heat conduction within an electronic component.

---

### 2.2. Convection

**Definition:** Convection is the transfer of heat from a surface to a moving fluid (liquid or gas) or within a fluid due to the bulk movement of the fluid.

**Mechanism:**
Convection involves two modes of energy transfer simultaneously:
1.  **Conduction:** Heat is transferred at the interface between the surface and the fluid due to molecular collisions.
2.  **Convection:** Heat is transported through the fluid via the macroscopic movement of the fluid itself. This movement can be natural or forced.

**Types of Convection:**

*   **Natural (or Free) Convection:** Occurs when fluid motion is caused by density differences arising from temperature variations within the fluid. When a fluid is heated, it becomes less dense and rises, while cooler, denser fluid sinks, creating circulation.
    *   **Mechanism:** Buoyancy forces drive the fluid motion.
    *   **Example:** Hot air rising from a radiator, boiling water in a pot (after the initial conduction from the bottom).

*   **Forced Convection:** Occurs when fluid motion is caused by an external force, such as a fan, pump, or wind.
    *   **Mechanism:** External means impart kinetic energy to the fluid, enhancing heat transfer.
    *   **Example:** Using a fan to cool a CPU, blowing air over a hot surface, blood circulation in the body.

**Law of Convection:**
The fundamental law governing convection heat transfer is **Newton's Law of Cooling**.

*   **Formula:** The rate of heat transfer ($Q_{conv}$) from a surface to a fluid is proportional to the surface area ($A$), the temperature difference between the surface ($T_s$) and the bulk fluid ($T_\infty$), and a proportionality constant called the **convective heat transfer coefficient** ($h$).
    $$ Q_{conv} = hA (T_s - T_\infty) $$
    Where:
    *   $Q_{conv}$ is the rate of heat transfer by convection (Watts, W).
    *   $h$ is the **convective heat transfer coefficient** (W/m²·K).
    *   $A$ is the surface area from which heat is transferred (m²).
    *   $T_s$ is the surface temperature (K or °C).
    *   $T_\infty$ is the bulk fluid temperature (K or °C).
    *   The term $(T_s - T_\infty)$ is the temperature difference driving the convection.

**Key Concept:** **Convective Heat Transfer Coefficient ($h$)**
*   **Definition:** The convective heat transfer coefficient ($h$) is a measure of how effectively heat is transferred between a surface and a fluid by convection. It quantifies the rate of heat transfer per unit area per unit temperature difference.
*   **Units:** W/m²·K (or W/m²·°C).
*   **Significance:** A higher value of $h$ indicates more efficient convective heat transfer.
*   **Factors Influencing $h$:** The value of $h$ is not a material property but depends on several factors, including:
    *   **Fluid Properties:** Viscosity, thermal conductivity, density, specific heat.
    *   **Flow Characteristics:** Velocity of the fluid, whether the flow is laminar or turbulent.
    *   **Geometry of the Surface:** Shape and orientation of the surface.
    *   **Mode of Convection:** Natural vs. Forced convection.
*   **Typical Values:**
    *   **Natural Convection:** $h$ is typically in the range of 2-25 W/m²·K.
    *   **Forced Convection:** $h$ can range from 10 to 1000 W/m²·K or even higher for highly turbulent flows or phase change.

**Examples:**
*   Cooling of a car radiator by air.
*   Heating of water in a boiler by circulation.
*   Heat loss from a heated plate exposed to air.

---

### 2.3. Radiation

**Definition:** Radiation is the transfer of energy through electromagnetic waves. Unlike conduction and convection, radiation does not require a medium and can occur through a vacuum.

**Mechanism:**
All matter with a temperature above absolute zero emits thermal radiation. This energy is emitted in the form of electromagnetic waves (photons). When these waves strike another object, they can be absorbed, reflected, or transmitted. The net transfer of energy by radiation between two surfaces depends on their temperatures and surface properties (emissivity, absorptivity).

**Law of Radiation:**
The fundamental law governing thermal radiation is the **Stefan-Boltzmann Law**.

*   **Formula (for a blackbody):** The rate of energy radiated by a blackbody ($Q_{rad,emit}$) is proportional to the fourth power of its absolute temperature ($T_s$).
    $$ Q_{rad,emit,blackbody} = \sigma A T_s^4 $$
    Where:
    *   $Q_{rad,emit,blackbody}$ is the rate of energy radiated by a blackbody (W).
    *   $\sigma$ is the Stefan-Boltzmann constant ($\approx 5.67 \times 10^{-8}$ W/m²·K⁴).
    *   $A$ is the surface area (m²).
    *   $T_s$ is the absolute surface temperature (K).

*   **For a real surface (gray surface):** A real surface emits less radiation than a blackbody. The rate of radiation emission from a real surface is given by:
    $$ Q_{rad,emit} = \epsilon \sigma A T_s^4 $$
    Where $\epsilon$ is the **emissivity** of the surface (0 < $\epsilon$ < 1). Emissivity is a surface property that represents the ratio of the radiation emitted by the surface to that emitted by a blackbody at the same temperature.

*   **Net Radiation Exchange:** When considering the net heat transfer between two surfaces, say surface 1 at $T_1$ and surface 2 at $T_2$, the net rate of radiation heat transfer from surface 1 to surface 2 is given by:
    $$ Q_{rad,12} = \epsilon_1 \sigma A_1 F_{12} (T_1^4 - T_2^4) $$
    Where $F_{12}$ is the view factor, representing the fraction of radiation leaving surface 1 that strikes surface 2. For many simple geometries, $F_{12}$ can be determined. For radiation exchange between a small surface and a large enclosure at uniform temperature $T_{surr}$, the net heat transfer is:
    $$ Q_{rad} = \epsilon \sigma A (T_s^4 - T_{surr}^4) $$

**Key Concepts:**
*   **Emissivity ($\epsilon$):** A dimensionless property of a surface that quantifies its ability to emit thermal radiation compared to a perfect blackbody. Ranges from 0 to 1.
*   **Absorptivity ($\alpha$):** A dimensionless property of a surface that quantifies its ability to absorb incident radiation. Ranges from 0 to 1.
*   **For a gray surface:** $\alpha = \epsilon$.
*   **Kirchhoff's Law of Thermal Radiation:** For an opaque surface in thermal equilibrium, the emissivity is equal to the absorptivity ($\epsilon = \alpha$).

**Examples:**
*   Heat from the Sun reaching the Earth.
*   Heat felt from a campfire without touching it.
*   The cooling of an object in space.

---

## 3. Combined Heat Transfer

In many real-world scenarios, multiple modes of heat transfer occur simultaneously. For example, a hot object in air will lose heat by convection to the air and by radiation to its surroundings.

---

## 4. Overall Heat Transfer Coefficient ($U$)

**Definition:** The overall heat transfer coefficient ($U$) is a measure of the total thermal resistance to heat transfer between two fluids separated by a solid wall. It represents the overall rate of heat transfer per unit area per unit temperature difference across the entire composite system.

**Significance:**
The overall heat transfer coefficient is essential for analyzing heat transfer in composite systems, such as heat exchangers, pipes with insulation, and walls of buildings. It allows us to treat the entire thermal resistance as a single value, simplifying calculations.

**Derivation (for a plane wall separating two fluids):**
Consider a plane wall of thickness $L$, thermal conductivity $k$, separating a hot fluid at $T_{\infty1}$ from a cold fluid at $T_{\infty2}$. Heat is transferred from the hot fluid to the wall by convection, through the wall by conduction, and from the wall to the cold fluid by convection.

The heat transfer rates for each mode are:
*   **Convection (Hot Fluid to Wall):** $Q = h_1 A (T_{\infty1} - T_{s1})$
*   **Conduction (Through Wall):** $Q = k A \frac{T_{s1} - T_{s2}}{L}$
*   **Convection (Wall to Cold Fluid):** $Q = h_2 A (T_{s2} - T_{\infty2})$

Since the heat transfer rate is the same for all modes in steady state, we can express the temperatures in terms of $Q$ and $A$:
*   $T_{\infty1} - T_{s1} = \frac{Q}{h_1 A}$
*   $T_{s1} - T_{s2} = \frac{Q L}{k A}$
*   $T_{s2} - T_{\infty2} = \frac{Q}{h_2 A}$

Summing these equations:
$(T_{\infty1} - T_{s1}) + (T_{s1} - T_{s2}) + (T_{s2} - T_{\infty2}) = \frac{Q}{h_1 A} + \frac{Q L}{k A} + \frac{Q}{h_2 A}$
$T_{\infty1} - T_{\infty2} = Q \left( \frac{1}{h_1 A} + \frac{L}{k A} + \frac{1}{h_2 A} \right)$

Rearranging to find the heat transfer rate $Q$:
$$ Q = \frac{T_{\infty1} - T_{\infty2}}{\frac{1}{h_1 A} + \frac{L}{k A} + \frac{1}{h_2 A}} $$

We can define the overall heat transfer coefficient $U$ such that:
$$ Q = U A (T_{\infty1} - T_{\infty2}) $$

Comparing the two expressions for $Q$, we get:
$$ \frac{1}{U A} = \frac{1}{h_1 A} + \frac{L}{k A} + \frac{1}{h_2 A} $$

Dividing by $A$, we get the thermal resistance concept:
$$ \frac{1}{U} = \frac{1}{h_1} + \frac{L}{k} + \frac{1}{h_2} $$

The terms $\frac{1}{h_1}$, $\frac{L}{k}$, and $\frac{1}{h_2}$ represent the thermal resistances due to convection on the hot side, conduction through the wall, and convection on the cold side, respectively. The overall thermal resistance is the sum of these individual resistances. The overall heat transfer coefficient $U$ is the reciprocal of the total thermal resistance per unit area.

**Units of $U$:** W/m²·K (or W/m²·°C).

**Important Considerations for $U$:**
*   **Composite Walls/Cylinders:** The calculation of $U$ can be extended to multiple layers and cylindrical geometries by summing up all the thermal resistances in series.
*   **Radiation Resistance:** In cases where radiation is significant, a radiation resistance term can also be included in the series.
*   **Fouling Factors:** In heat exchangers, deposits on the heat transfer surfaces (fouling) add significant thermal resistance, which must be accounted for by adding fouling resistances to the overall resistance.

**Example Application:**
*   **Building Insulation:** Calculating heat loss through a composite wall (brick, insulation, drywall) to determine the required heating/cooling capacity for a building.
*   **Heat Exchanger Design:** Determining the size of a heat exchanger needed to transfer a certain amount of heat between two fluids.

---

## 5. Practice Questions and Answers

**Question 1:**
Define thermal conductivity and state its units.
**Answer:** Thermal conductivity ($k$) is an intrinsic property of a material that quantifies its ability to conduct heat. It represents the rate of heat transfer through a unit thickness of a material per unit area per unit temperature difference. Its units are W/m·K.

**Question 2:**
Which of the following is the primary mechanism of heat transfer in solids due to free electrons?
a) Lattice vibrations
b) Molecular collisions
c) Electron movement
d) Photon emission
**Answer:** c) Electron movement. This is primarily responsible for heat transfer in metals.

**Question 3:**
State Newton's Law of Cooling and define the terms used.
**Answer:** Newton's Law of Cooling states: $Q_{conv} = hA (T_s - T_\infty)$.
*   $Q_{conv}$: Rate of heat transfer by convection (W).
*   $h$: Convective heat transfer coefficient (W/m²·K).
*   $A$: Surface area (m²).
*   $T_s$: Surface temperature (K or °C).
*   $T_\infty$: Bulk fluid temperature (K or °C).

**Question 4:**
A hot plate at 100°C is in contact with air at 20°C. The convective heat transfer coefficient is 15 W/m²·K. If the surface area is 0.5 m², calculate the rate of heat transfer by convection.
**Answer:**
Given:
$T_s = 100^\circ C$
$T_\infty = 20^\circ C$
$h = 15 \text{ W/m}^2\text{·K}$
$A = 0.5 \text{ m}^2$

Using Newton's Law of Cooling:
$Q_{conv} = hA (T_s - T_\infty)$
$Q_{conv} = (15 \text{ W/m}^2\text{·K}) \times (0.5 \text{ m}^2) \times (100^\circ C - 20^\circ C)$
$Q_{conv} = 15 \times 0.5 \times 80$
$Q_{conv} = 7.5 \times 80$
$Q_{conv} = 600 \text{ W}$

The rate of heat transfer by convection is 600 W.

**Question 5:**
Explain the difference between natural and forced convection.
**Answer:** Natural convection occurs when fluid motion is driven by density differences due to temperature variations (buoyancy forces). Forced convection occurs when fluid motion is induced by an external agent like a fan or pump.

**Question 6:**
What does the Stefan-Boltzmann Law describe?
**Answer:** The Stefan-Boltzmann Law describes the rate of energy radiated by a blackbody, stating that it is proportional to the fourth power of its absolute temperature. For real surfaces, emissivity is used to account for their deviation from blackbody behavior.

**Question 7:**
Calculate the overall heat transfer coefficient ($U$) for a plane wall separating two fluids, given the following:
*   Hot fluid convection coefficient ($h_1$) = 25 W/m²·K
*   Cold fluid convection coefficient ($h_2$) = 10 W/m²·K
*   Wall thermal conductivity ($k$) = 50 W/m·K
*   Wall thickness ($L$) = 0.1 m

**Answer:**
Using the formula for the reciprocal of the overall heat transfer coefficient:
$\frac{1}{U} = \frac{1}{h_1} + \frac{L}{k} + \frac{1}{h_2}$
$\frac{1}{U} = \frac{1}{25 \text{ W/m}^2\text{·K}} + \frac{0.1 \text{ m}}{50 \text{ W/m}·\text{K}} + \frac{1}{10 \text{ W/m}^2\text{·K}}$
$\frac{1}{U} = 0.04 \text{ m}^2\text{·K/W} + 0.002 \text{ m}^2\text{·K/W} + 0.1 \text{ m}^2\text{·K/W}$
$\frac{1}{U} = 0.142 \text{ m}^2\text{·K/W}$

$U = \frac{1}{0.142} \text{ W/m}^2\text{·K}$
$U \approx 7.04 \text{ W/m}^2\text{·K}$

The overall heat transfer coefficient is approximately 7.04 W/m²·K.

---

## 6. Important Points to Remember

*   **Modes of Heat Transfer:** Conduction, Convection, Radiation.
*   **Conduction:** Heat transfer through direct contact, driven by molecular activity. Governed by **Fourier's Law**. Characterized by **thermal conductivity ($k$)**.
*   **Convection:** Heat transfer involving fluid motion. Can be **natural** (buoyancy-driven) or **forced** (externally driven). Governed by **Newton's Law of Cooling**. Characterized by **convective heat transfer coefficient ($h$)**.
*   **Radiation:** Heat transfer via electromagnetic waves, no medium required. Governed by **Stefan-Boltzmann Law**. Characterized by **emissivity ($\epsilon$)**.
*   **Overall Heat Transfer Coefficient ($U$):** Represents the total thermal resistance in a composite system. It's the reciprocal of the sum of individual thermal resistances. Crucial for analyzing heat exchangers and thermal systems.
*   **Thermal Resistance:** The property of a material or system that impedes the flow of heat. Higher resistance means less heat transfer.
*   **$k$ vs. $h$ vs. $U$:**
    *   $k$ is a material property.
    *   $h$ depends on fluid properties, flow conditions, and geometry.
    *   $U$ is a system property that encompasses resistances from different modes and materials.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 7. Textbook and Reference Material Cross-Reference

This topic aligns with foundational concepts covered in the recommended textbooks:

*   **Sachdeva, R. C. (2022). *Fundamentals of engineering heat and mass transfer*:** Chapters typically introducing the basic modes of heat transfer, conduction laws, convection, and combined heat transfer.
*   **Nag, P. K. (2011). *Heat and Mass Transfer elements*:** Similar to Sachdeva, this book will cover the fundamental laws and coefficients of heat transfer.
*   **Cengel & Ghajar (2020). *Heat and Mass Transfer – Fundamental and Application*:** This widely used textbook provides in-depth explanations of conduction (Fourier's Law), convection (Newton's Law of Cooling, $h$), radiation (Stefan-Boltzmann Law), and the overall heat transfer coefficient ($U$) in various applications.
*   **Sukhatme, S. P. (2005). *A text book on heat transfer*:** Expect coverage of basic heat transfer principles, including the laws and coefficients for each mode.

The reference books, focusing on mechanical design, are relevant for understanding how these heat transfer principles are applied in the design of components and systems, where calculating $U$ and managing thermal resistances is critical.

---
This concludes the study notes for the topic on modes of heat transfer, mechanisms and laws, and the key coefficients. Remember to practice the problem-solving aspects to solidify your understanding.