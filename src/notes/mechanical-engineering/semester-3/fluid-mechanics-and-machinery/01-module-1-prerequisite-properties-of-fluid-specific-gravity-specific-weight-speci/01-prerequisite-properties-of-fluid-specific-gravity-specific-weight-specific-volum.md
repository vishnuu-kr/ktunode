---
title: "Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d13"
status: "completed"
scrapedAt: "2026-05-20T17:49:17.900Z"
---
# FLUID MECHANICS AND MACHINERY

## Module 1: Prerequisite: Properties of Fluid

### Topic: Properties of Fluid: Specific Gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity

---

### **Introduction to Fluid Mechanics and Fluid Properties**

Fluid mechanics is the study of fluids (liquids, gases, and plasmas) and the forces on them. Understanding the intrinsic properties of fluids is fundamental to analyzing their behavior. This module focuses on key properties that are essential for understanding fluid flow and its applications.

**Relation to Course Outcomes:**

*   **CO1:** This topic directly addresses the identification of fundamental fluid properties and their relationships, which is crucial for estimating fluid pressure and hydrostatic forces. (Knowledge Level: K3)

---

### **1. Specific Gravity (S or SG)**

**Definition:**
Specific gravity is the ratio of the density of a fluid to the density of a reference substance, usually water at its maximum density (4°C). It is a dimensionless quantity.

**Formula:**
$S = \frac{\rho}{\rho_{ref}}$

Where:
*   $S$ is the Specific Gravity
*   $\rho$ is the density of the fluid (kg/m³ or g/cm³)
*   $\rho_{ref}$ is the density of the reference substance (for liquids, usually water at 4°C, $\rho_{water} \approx 1000$ kg/m³ or 1 g/cm³).

**Key Concepts:**

*   **Dimensionless:** Specific gravity has no units.
*   **Comparison:** It provides a convenient way to compare the densities of different fluids relative to water.
*   **Buoyancy:** Fluids with a specific gravity greater than 1 will sink in water, while those with a specific gravity less than 1 will float.

**Examples:**

*   **Water:** Specific gravity of water is defined as 1.
*   **Mercury:** Specific gravity of mercury is approximately 13.6. This means mercury is 13.6 times denser than water.
*   **Oil:** Most oils have a specific gravity less than 1 (e.g., 0.8 to 0.9), so they float on water.

**Practice Question 1:**
A fluid has a density of 850 kg/m³. What is its specific gravity? (Assume the density of water at 4°C is 1000 kg/m³).

**Answer:**
$S = \frac{\rho}{\rho_{ref}} = \frac{850 \text{ kg/m³}}{1000 \text{ kg/m³}} = 0.85$

**Reference:**
*   Cengel & Cimbala: Discusses specific gravity as a fundamental property for comparing densities. (Chapter 1)
*   Som, Sengupta & Dhar: Explains specific gravity as a ratio of densities, highlighting its dimensionless nature. (Chapter 1)

---

### **2. Specific Weight (γ)**

**Definition:**
Specific weight is the weight of a unit volume of a substance. It is the force due to gravity acting on a unit volume of the fluid.

**Formula:**
$\gamma = \rho \cdot g$

Where:
*   $\gamma$ is the Specific Weight (N/m³ or lb/ft³)
*   $\rho$ is the density of the fluid (kg/m³ or slugs/ft³)
*   $g$ is the acceleration due to gravity (approximately 9.81 m/s² or 32.2 ft/s²)

**Key Concepts:**

*   **Weight per Unit Volume:** This property is crucial for calculating the pressure exerted by a column of fluid.
*   **Units:** Units are force per unit volume (e.g., N/m³).
*   **Relationship to Density:** Specific weight is directly proportional to density.

**Examples:**

*   **Water:** Specific weight of water ($\gamma_{water}$) $\approx 9810$ N/m³ (using $\rho_{water} = 1000$ kg/m³ and $g = 9.81$ m/s²).
*   **Air:** Specific weight of air at standard atmospheric conditions is much lower than water.

**Practice Question 2:**
Calculate the specific weight of a fluid with a density of 1200 kg/m³. (Take $g = 9.81$ m/s²).

**Answer:**
$\gamma = \rho \cdot g = 1200 \text{ kg/m³} \cdot 9.81 \text{ m/s²} = 11772 \text{ N/m³}$

**Relationship to Specific Gravity:**
We can also express specific weight in terms of specific gravity:
$\gamma = S \cdot \gamma_{ref}$
For water, $\gamma = S \cdot 9810$ N/m³

**Reference:**
*   Bansal: Emphasizes specific weight's role in pressure calculations. (Chapter 1)
*   White: Explains specific weight as a measure of gravitational force per unit volume. (Chapter 2)

---

### **3. Specific Volume (v)**

**Definition:**
Specific volume is the volume occupied by a unit mass of a substance. It is the reciprocal of density.

**Formula:**
$v = \frac{1}{\rho}$

Where:
*   $v$ is the Specific Volume (m³/kg or ft³/lb)
*   $\rho$ is the density of the fluid (kg/m³ or lb/ft³)

**Key Concepts:**

*   **Volume per Unit Mass:** This is particularly important for gases, where volume changes significantly with pressure and temperature.
*   **Reciprocal of Density:** It's the inverse relationship.
*   **Units:** Units are volume per unit mass (e.g., m³/kg).

**Examples:**

*   **Water:** Specific volume of water ($\approx 1000$ kg/m³) is $v_{water} = \frac{1}{1000}$ m³/kg $= 0.001$ m³/kg.
*   **Gases:** For gases like air, specific volume is much larger due to their lower densities.

**Practice Question 3:**
If the specific volume of a gas is 0.8 m³/kg, what is its density?

**Answer:**
$\rho = \frac{1}{v} = \frac{1}{0.8 \text{ m³/kg}} = 1.25 \text{ kg/m³}$

**Reference:**
*   Cengel & Cimbala: Introduces specific volume in the context of thermodynamics and fluid properties. (Chapter 1)
*   Som, Sengupta & Dhar: Defines specific volume as the inverse of density and highlights its use for gases. (Chapter 1)

---

### **4. Dynamic Viscosity (μ)**

**Definition:**
Dynamic viscosity (also called absolute viscosity) is a measure of a fluid's internal resistance to flow or its resistance to shear stress. It quantifies the friction between adjacent layers of the fluid.

**Concept of Shear Stress and Velocity Gradient:**
Consider two parallel plates with a fluid between them. If one plate moves relative to the other, the fluid layers will move with different velocities, creating a velocity gradient. The shear stress ($\tau$) in the fluid is proportional to this velocity gradient ($du/dy$).

**Newton's Law of Viscosity:**
For Newtonian fluids, the shear stress is directly proportional to the rate of shear strain (velocity gradient).

$\tau = \mu \frac{du}{dy}$

Where:
*   $\tau$ is the shear stress (Pa or N/m²)
*   $\mu$ is the dynamic viscosity (Pa·s or N·s/m² or Poise)
*   $du/dy$ is the velocity gradient or rate of shear strain (s⁻¹)

**Units:**

*   **SI Unit:** Pascal-second (Pa·s) or N·s/m²
*   **CGS Unit:** Poise (P), where 1 P = 0.1 Pa·s
*   **Common Unit:** Centipoise (cP), where 1 cP = 0.01 P = 0.001 Pa·s

**Key Concepts:**

*   **Internal Friction:** Higher dynamic viscosity means greater internal friction and resistance to flow.
*   **Newtonian vs. Non-Newtonian Fluids:** Fluids that obey Newton's Law of Viscosity are called Newtonian fluids (e.g., water, air, oil). Fluids that do not are called non-Newtonian fluids (e.g., ketchup, paint, blood).
*   **Temperature Dependence:** For liquids, dynamic viscosity generally decreases with increasing temperature. For gases, it generally increases with increasing temperature.

**Examples:**

*   **Water:** Dynamic viscosity of water at 20°C is approximately 1.0 cP (or 0.001 Pa·s).
*   **Honey:** Honey has a much higher dynamic viscosity than water, making it flow slowly.
*   **Air:** Dynamic viscosity of air at 20°C is approximately 0.018 cP (or 0.000018 Pa·s).

**Practice Question 4:**
A plate is moving with a velocity of 0.5 m/s parallel to a stationary plate, with a layer of oil 2 mm thick between them. If the shear stress in the oil is 10 Pa, calculate the dynamic viscosity of the oil.

**Answer:**
The velocity gradient $du/dy = \frac{0.5 \text{ m/s}}{0.002 \text{ m}} = 250 \text{ s⁻¹}$.
Using $\tau = \mu \frac{du}{dy}$:
$10 \text{ Pa} = \mu \cdot 250 \text{ s⁻¹}$
$\mu = \frac{10 \text{ Pa}}{250 \text{ s⁻¹}} = 0.04 \text{ Pa·s}$

**Reference:**
*   Cengel & Cimbala: Provides a detailed explanation of dynamic viscosity and the shear stress-velocity gradient relationship. (Chapter 1)
*   White: Introduces viscosity as a fundamental fluid property and its impact on flow. (Chapter 2)

---

### **5. Kinematic Viscosity (ν)**

**Definition:**
Kinematic viscosity is the ratio of dynamic viscosity to density. It represents the ratio of viscous forces to inertial forces.

**Formula:**
$\nu = \frac{\mu}{\rho}$

Where:
*   $\nu$ is the Kinematic Viscosity (m²/s or ft²/s or Stokes)
*   $\mu$ is the dynamic viscosity (Pa·s or N·s/m²)
*   $\rho$ is the density of the fluid (kg/m³)

**Units:**

*   **SI Unit:** m²/s
*   **CGS Unit:** Stokes (St), where 1 St = 1 cm²/s = 10⁻⁴ m²/s
*   **Common Unit:** Centistokes (cSt), where 1 cSt = 0.01 St = 10⁻⁶ m²/s

**Key Concepts:**

*   **Ratio of Viscous to Inertial Forces:** Kinematic viscosity is dimensionless in terms of fundamental dimensions (L²/T), but its definition highlights the interplay between viscous effects ($\mu$) and inertial effects ($\rho$). It is a measure of how readily a fluid flows under gravity.
*   **Gravity-Driven Flows:** Kinematic viscosity is particularly relevant in problems involving gravity and free-surface flows where inertial forces are significant.

**Examples:**

*   **Water:** Kinematic viscosity of water at 20°C is approximately 1.0 cSt (or 1.0 x 10⁻⁶ m²/s).
*   **Engine Oil:** Engine oil has a higher kinematic viscosity than water, indicating it's thicker.

**Practice Question 5:**
If a fluid has a dynamic viscosity of 0.04 Pa·s and a density of 900 kg/m³, what is its kinematic viscosity in m²/s and cSt?

**Answer:**
$\nu = \frac{\mu}{\rho} = \frac{0.04 \text{ Pa·s}}{900 \text{ kg/m³}} = 4.44 \times 10^{-5} \text{ m²/s}$

To convert to cSt:
$1 \text{ m²/s} = 10^6 \text{ cSt}$
$\nu = 4.44 \times 10^{-5} \text{ m²/s} \times 10^6 \frac{\text{cSt}}{\text{m²/s}} = 44.4 \text{ cSt}$

**Reference:**
*   Bansal: Explains kinematic viscosity as the ratio of dynamic viscosity to density and its importance in flow analysis. (Chapter 1)
*   Som, Sengupta & Dhar: Introduces kinematic viscosity and its units, emphasizing its role in describing fluid motion. (Chapter 1)

---

### **Important Points to Remember:**

*   **Specific Gravity (S):** Dimensionless ratio of densities.
*   **Specific Weight (γ):** Weight per unit volume ($\gamma = \rho g$). Crucial for pressure calculations.
*   **Specific Volume (v):** Volume per unit mass ($v = 1/\rho$). Inverse of density.
*   **Dynamic Viscosity (μ):** Internal resistance to shear flow ($\tau = \mu \frac{du}{dy}$). Units: Pa·s or Poise.
*   **Kinematic Viscosity (ν):** Ratio of dynamic viscosity to density ($\nu = \mu / \rho$). Units: m²/s or Stokes. Represents the ratio of viscous to inertial forces.
*   **Temperature Effects:**
    *   Liquids: $\mu$ decreases, $\nu$ decreases with increasing temperature.
    *   Gases: $\mu$ increases, $\nu$ increases with increasing temperature.

---

### **Practice Problems and Solutions**

**Problem 1:**
A liquid has a specific gravity of 0.95 and a kinematic viscosity of 30 x 10⁻⁶ m²/s. Calculate its:
(a) Density
(b) Dynamic viscosity
(c) Specific weight

**Solution:**
Given: S = 0.95, $\nu = 30 \times 10^{-6}$ m²/s. Assume $g = 9.81$ m/s² and $\rho_{water} = 1000$ kg/m³.

(a) **Density ($\rho$):**
$S = \frac{\rho}{\rho_{water}}$
$\rho = S \times \rho_{water} = 0.95 \times 1000 \text{ kg/m³} = 950 \text{ kg/m³}$

(b) **Dynamic Viscosity ($\mu$):**
$\nu = \frac{\mu}{\rho}$
$\mu = \nu \times \rho = (30 \times 10^{-6} \text{ m²/s}) \times 950 \text{ kg/m³}$
$\mu = 0.0285 \text{ Pa·s}$

(c) **Specific Weight ($\gamma$):**
$\gamma = \rho \times g = 950 \text{ kg/m³} \times 9.81 \text{ m/s²}$
$\gamma = 9319.5 \text{ N/m³}$

**Problem 2:**
A Newtonian fluid has a viscosity of 0.01 Pa·s and a density of 1.2 kg/m³. What is its kinematic viscosity? If the fluid is subjected to a shear stress of 5 Pa, what is the velocity gradient?

**Solution:**
Given: $\mu = 0.01$ Pa·s, $\rho = 1.2$ kg/m³.

**Kinematic Viscosity ($\nu$):**
$\nu = \frac{\mu}{\rho} = \frac{0.01 \text{ Pa·s}}{1.2 \text{ kg/m³}} \approx 0.00833 \text{ m²/s}$

**Velocity Gradient ($du/dy$):**
$\tau = \mu \frac{du}{dy}$
$5 \text{ Pa} = 0.01 \text{ Pa·s} \times \frac{du}{dy}$
$\frac{du}{dy} = \frac{5 \text{ Pa}}{0.01 \text{ Pa·s}} = 500 \text{ s⁻¹}$

---

### **Connection to Course Outcomes:**

*   **CO1:** Understanding specific gravity, specific weight, and density is foundational for calculating hydrostatic pressure and forces on submerged surfaces, as covered in subsequent topics related to fluid statics. The properties discussed here are directly used in the formulas for pressure ($P = \gamma h$) and hydrostatic force.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
