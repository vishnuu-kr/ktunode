---
title: "Introduction to fluid mechanics - Types of fluids, Newton’s law of viscosity."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d14"
status: "completed"
scrapedAt: "2026-05-20T17:49:18.609Z"
---
# Fluid Mechanics and Machinery: Module 1 - Introduction to Fluid Mechanics

## Topic: Introduction to Fluid Mechanics - Types of Fluids, Newton's Law of Viscosity

### Learning Outcomes:

*   Understand the fundamental concepts of fluid mechanics.
*   Differentiate between Newtonian and Non-Newtonian fluids.
*   Define and explain Newton's Law of Viscosity.
*   Understand the concept of viscosity and its importance in fluid behavior.

### Course Outcomes Alignment:

This topic primarily contributes to:

*   **CO1:** Identifying fundamental fluid properties. While this topic focuses on viscosity as a property, it lays the groundwork for understanding how this property influences pressure and forces (though the latter are covered in more detail later).
*   **CO2:** This topic introduces concepts like shear stress which are foundational for understanding fluid flow and momentum equations.

---

## 1. Introduction to Fluid Mechanics

Fluid mechanics is the branch of physics that deals with the study of fluids (liquids and gases) and the forces on them. It is a fundamental discipline with applications in a vast range of fields, including:

*   **Engineering:** Aerospace, automotive, civil, chemical, mechanical, biomedical.
*   **Science:** Meteorology, oceanography, geophysics, astrophysics.
*   **Everyday Life:** Blood circulation, weather patterns, water supply systems, aircraft design.

### Key Concepts:

*   **Fluid:** A substance that deforms continuously under an applied shear stress, regardless of the magnitude of the stress. This means fluids flow.
*   **Solid:** A substance that resists deformation and will return to its original shape once the stress is removed (or deform permanently if the stress exceeds its yield strength).

**Important Distinction:** The ability to flow and deform continuously under shear stress is the defining characteristic of a fluid.

---

## 2. Types of Fluids

Fluids can be broadly classified based on their behavior under applied stress, particularly shear stress. This classification is crucial for understanding their flow characteristics.

### 2.1. Newtonian Fluids

*   **Definition:** A Newtonian fluid is a fluid whose **viscosity remains constant** regardless of the applied shear stress or the rate of shear strain. The relationship between shear stress ($\tau$) and the rate of shear strain ($\frac{du}{dy}$) is linear.

*   **Mathematical Representation (Newton's Law of Viscosity - discussed in detail later):**
    $\tau = \mu \frac{du}{dy}$
    where:
    *   $\tau$ is the shear stress
    *   $\mu$ is the dynamic viscosity (a constant for Newtonian fluids)
    *   $\frac{du}{dy}$ is the rate of shear strain (velocity gradient)

*   **Examples:**
    *   Water
    *   Air
    *   Most common gases (e.g., Nitrogen, Oxygen)
    *   Low-molecular-weight organic liquids (e.g., gasoline, ethanol)
    *   Oils at moderate temperatures and pressures

**Textbook Reference:** Cengel & Cimbala, Chapter 1, discusses the definition of a fluid and introduces the concept of viscosity. Som & Bhattacharya, Chapter 1, also covers basic fluid properties and classifications.

### 2.2. Non-Newtonian Fluids

*   **Definition:** A Non-Newtonian fluid is a fluid whose **viscosity changes** when subjected to a change in shear stress or shear rate. The relationship between shear stress and shear rate is non-linear.

*   **Classification of Non-Newtonian Fluids:**

    *   **Bingham Plastics:**
        *   **Behavior:** Require a certain minimum shear stress (yield stress, $\tau_0$) to be applied before they start to flow. Once the yield stress is exceeded, they behave like Newtonian fluids.
        *   **Equation:** $\tau = \tau_0 + \mu_p \frac{du}{dy}$ for $|\tau| > \tau_0$
        *   **Examples:** Toothpaste, ketchup, drilling muds, mayonnaise.

    *   **Pseudoplastics (Shear-Thinning Fluids):**
        *   **Behavior:** Viscosity decreases with increasing shear rate. They become "thinner" as you stir or agitate them more vigorously.
        *   **Equation:** $\tau = K (\frac{du}{dy})^n$, where $n < 1$ (and $K$ is a consistency index).
        *   **Examples:** Blood, paint, polymer solutions, milk, ink.

    *   **Dilatants (Shear-Thickening Fluids):**
        *   **Behavior:** Viscosity increases with increasing shear rate. They become "thicker" or more viscous as you stir them more vigorously.
        *   **Equation:** $\tau = K (\frac{du}{dy})^n$, where $n > 1$ (and $K$ is a consistency index).
        *   **Examples:** Cornstarch and water mixture (oobleck), wet sand, some sugar solutions.

    *   **Thixotropic Fluids:**
        *   **Behavior:** Time-dependent shear-thinning. Their viscosity decreases over time when subjected to constant shear, and it takes time for them to recover their original viscosity when the shear is removed.
        *   **Examples:** Yogurt, some paints, printing inks.

    *   **Rheopectic Fluids:**
        *   **Behavior:** Time-dependent shear-thickening. Their viscosity increases over time when subjected to constant shear. This is less common than thixotropic behavior.
        *   **Examples:** Gypsum paste, some printer inks.

**Important Point:** The behavior of non-Newtonian fluids is critical in processes involving mixing, pumping, and spraying of materials like paints, foods, and biological fluids.

**Textbook Reference:** Cengel & Cimbala, Chapter 1, briefly mentions non-Newtonian fluids. Som & Bhattacharya, Chapter 1, provides a more detailed discussion on the classification of fluids, including non-Newtonian types. Bansal R.K., Chapter 1, also covers this classification.

---

## 3. Newton's Law of Viscosity

Newton's Law of Viscosity is a fundamental principle that defines the relationship between shear stress and the rate of deformation in a Newtonian fluid.

### 3.1. Viscosity

*   **Definition:** Viscosity is a measure of a fluid's resistance to deformation or flow. It quantifies the internal friction of a fluid. A fluid with high viscosity resists flow more than a fluid with low viscosity.

*   **Analogy:** Imagine two parallel plates with a fluid between them. If one plate is moved relative to the other, the fluid layers will slide over each other. Viscosity is the property that resists this sliding motion.

### 3.2. Shear Stress ($\tau$)

*   **Definition:** Shear stress is the force per unit area acting parallel to a surface. In fluid mechanics, it's the force that causes the fluid to deform.

*   **Visualizing Shear Stress:** Consider a fluid element between two parallel plates, one stationary and the other moving at a constant velocity ($V$). The fluid layers in contact with the moving plate will be dragged along, while layers in contact with the stationary plate will remain relatively still. This motion creates a velocity gradient across the fluid.

### 3.3. Rate of Shear Strain ($\frac{du}{dy}$)

*   **Definition:** The rate of shear strain, also known as the velocity gradient, is the rate at which the fluid layers deform due to the applied shear stress. It is defined as the change in velocity ($du$) across a differential distance ($dy$) perpendicular to the direction of flow.

### 3.4. Newton's Law of Viscosity (The Equation)

For a Newtonian fluid, Newton's Law of Viscosity states that the shear stress ($\tau$) is directly proportional to the rate of shear strain ($\frac{du}{dy}$).

**Equation:**
$\tau = \mu \frac{du}{dy}$

Where:
*   $\boldsymbol{\tau}$ (tau): Shear stress (Units: Pascal (Pa) or N/m² in SI; psi in imperial)
*   $\boldsymbol{\mu}$ (mu): **Dynamic Viscosity** or Absolute Viscosity (Units: Pascal-second (Pa·s) or N·s/m² in SI; poise (P) or centipoise (cP) in cgs system)
*   $\frac{\boldsymbol{du}}{\boldsymbol{dy}}$: Rate of shear strain or velocity gradient (Units: 1/s or s⁻¹)

**Explanation:**
*   The shear stress required to produce a certain rate of deformation is directly proportional to the fluid's dynamic viscosity.
*   A higher viscosity means a higher shear stress is needed to achieve the same rate of deformation.
*   The term $\frac{du}{dy}$ represents how quickly the velocity changes with distance perpendicular to the flow.

**Important Point:** The viscosity ($\mu$) is a **fluid property** and is generally dependent on temperature and, to a lesser extent, pressure. For most liquids, viscosity decreases with increasing temperature. For most gases, viscosity increases with increasing temperature.

**Textbook Reference:** Cengel & Cimbala, Chapter 1, provides a thorough explanation of shear stress and Newton's Law of Viscosity, often using the parallel plate example. Som & Bhattacharya, Chapter 1, also defines viscosity and introduces the law. Bansal R.K., Chapter 1, elaborates on this fundamental law.

---

## 4. Viscosity and Related Properties

### 4.1. Dynamic Viscosity ($\mu$)

*   **Definition:** As discussed, dynamic viscosity (or absolute viscosity) is the proportionality constant relating shear stress to the rate of shear strain in Newtonian fluids. It is a measure of the fluid's internal resistance to flow.

*   **Units:**
    *   SI: Pa·s (Pascal-second) or N·s/m²
    *   CGS: Poise (P) = 0.1 Pa·s; Centipoise (cP) = 0.001 Pa·s = 1 mPa·s
    *   Commonly used: centipoise (cP) for water at 20°C is approximately 1 cP.

### 4.2. Kinematic Viscosity ($\nu$)

*   **Definition:** Kinematic viscosity is the ratio of dynamic viscosity to density. It represents how easily a fluid flows under the influence of gravity. It is important in situations where gravitational forces are dominant in causing motion.

*   **Equation:**
    $\nu = \frac{\mu}{\rho}$

    Where:
    *   $\boldsymbol{\nu}$ (nu): Kinematic Viscosity (Units: m²/s in SI; stokes (St) or centistokes (cSt) in cgs)
    *   $\boldsymbol{\mu}$: Dynamic Viscosity
    *   $\boldsymbol{\rho}$ (rho): Density

*   **Units:**
    *   SI: m²/s
    *   CGS: Stokes (St) = 1 cm²/s = 10⁻⁴ m²/s; Centistokes (cSt) = 1 mm²/s = 10⁻⁶ m²/s

**Significance:** Kinematic viscosity is frequently used in the study of fluid flow, particularly in dimensionless numbers like the Reynolds number, which is crucial for determining flow regimes (laminar vs. turbulent).

**Textbook Reference:** Cengel & Cimbala, Chapter 1, clearly defines both dynamic and kinematic viscosity and their relationship. Som & Bhattacharya, Chapter 1, also provides comprehensive definitions and examples. Bansal R.K., Chapter 1, discusses these properties in detail.

---

## 5. Properties Mentioned in Module Title (Prerequisites)

While not the primary focus of *this specific topic*, it's essential to acknowledge the other fluid properties that will be built upon:

*   **Specific Gravity (SG):** The ratio of the density of a fluid to the density of a reference substance (usually water at 4°C). It's a dimensionless quantity.
    $SG = \frac{\rho}{\rho_{water}}$
    *   **Relevance:** Helps in quickly comparing densities and calculating weight per unit volume.

*   **Specific Weight ($\gamma$):** The weight of a fluid per unit volume.
    $\gamma = \rho g$
    where $g$ is the acceleration due to gravity.
    *   **Units:** N/m³ in SI.
    *   **Relevance:** Used in hydrostatic pressure calculations and buoyancy.

*   **Specific Volume ($\upsilon$):** The volume occupied by a unit mass of a substance. It is the reciprocal of density.
    $\upsilon = \frac{1}{\rho}$
    *   **Units:** m³/kg in SI.
    *   **Relevance:** Important in thermodynamics and for compressible fluids.

**Textbook Reference:** All listed textbooks (Cengel & Cimbala, Som & Bhattacharya, Bansal R.K.) provide detailed coverage of these basic fluid properties in their initial chapters.

---

## 6. Practice Questions and Exercises

**Question 1:**
Classify the following fluids and explain why:
(a) Water
(b) Toothpaste
(c) Blood
(d) Air
(e) A mixture of cornstarch and water (oobleck)

**Answer 1:**
(a) **Water:** Newtonian fluid. Its viscosity is constant and does not change with shear rate.
(b) **Toothpaste:** Bingham Plastic. It has a yield stress and requires a minimum force to start flowing. Below that force, it stays in place.
(c) **Blood:** Pseudoplastic (Shear-thinning). Its viscosity decreases as the flow rate (shear rate) increases, making it easier to pump at higher speeds.
(d) **Air:** Newtonian fluid. Similar to water, its viscosity is essentially constant for typical conditions and does not change with shear rate.
(e) **Cornstarch and water mixture (oobleck):** Dilatant (Shear-thickening). Its viscosity increases dramatically when subjected to sudden or high shear forces (like punching or rapid stirring).

---

**Question 2:**
Define Newton's Law of Viscosity and state the units of each term in the SI system.

**Answer 2:**
Newton's Law of Viscosity states that the shear stress ($\tau$) in a Newtonian fluid is directly proportional to the rate of shear strain ($\frac{du}{dy}$).
The equation is: $\tau = \mu \frac{du}{dy}$
*   $\boldsymbol{\tau}$ (Shear Stress): Pascals (Pa) or N/m²
*   $\boldsymbol{\mu}$ (Dynamic Viscosity): Pascal-seconds (Pa·s) or N·s/m²
*   $\frac{\boldsymbol{du}}{\boldsymbol{dy}}$ (Rate of Shear Strain/Velocity Gradient): 1/s or s⁻¹

---

**Question 3:**
A Newtonian fluid has a dynamic viscosity of 0.002 Pa·s and a density of 950 kg/m³. Calculate its kinematic viscosity.

**Answer 3:**
Given:
*   $\mu = 0.002$ Pa·s
*   $\rho = 950$ kg/m³

The formula for kinematic viscosity ($\nu$) is:
$\nu = \frac{\mu}{\rho}$

$\nu = \frac{0.002 \text{ Pa·s}}{950 \text{ kg/m}^3}$
$\nu = \frac{0.002 \text{ N·s/m}^2}{950 \text{ kg/m}^3}$
Since 1 N = 1 kg·m/s², we have:
$\nu = \frac{0.002 \text{ (kg·m/s²)·s/m}^2}{950 \text{ kg/m}^3}$
$\nu = \frac{0.002 \text{ kg/(m·s)}}{950 \text{ kg/m}^3}$
$\nu = \frac{0.002}{950} \text{ m²/s}$
$\nu \approx 2.105 \times 10^{-6} \text{ m²/s}$

So, the kinematic viscosity is approximately $2.105 \times 10^{-6}$ m²/s.

---

**Question 4:**
A Newtonian fluid is contained between two parallel plates. The bottom plate is stationary, and the top plate moves with a velocity of 1 m/s. The distance between the plates is 0.01 m. If the shear stress in the fluid is measured to be 5 Pa, what is the dynamic viscosity of the fluid? (Assume linear velocity profile).

**Answer 4:**
Given:
*   Velocity of top plate, $V = 1$ m/s
*   Distance between plates, $\Delta y = 0.01$ m
*   Shear stress, $\tau = 5$ Pa

For a linear velocity profile between parallel plates, the velocity gradient is:
$\frac{du}{dy} = \frac{V}{\Delta y}$
$\frac{du}{dy} = \frac{1 \text{ m/s}}{0.01 \text{ m}} = 100 \text{ s}^{-1}$

Using Newton's Law of Viscosity:
$\tau = \mu \frac{du}{dy}$

Rearranging to solve for $\mu$:
$\mu = \frac{\tau}{du/dy}$
$\mu = \frac{5 \text{ Pa}}{100 \text{ s}^{-1}}$
$\mu = \frac{5 \text{ N/m}^2}{100 \text{ s}^{-1}}$
$\mu = 0.05 \text{ N·s/m}^2$
$\mu = 0.05 \text{ Pa·s}$

The dynamic viscosity of the fluid is 0.05 Pa·s.

---

## 7. Important Points to Remember

*   **Fluid Definition:** A substance that deforms continuously under shear stress.
*   **Newtonian vs. Non-Newtonian:** The key difference lies in the linearity of the shear stress vs. shear rate relationship. Newtonian fluids have constant viscosity; Non-Newtonian fluids do not.
*   **Newton's Law of Viscosity:** $\tau = \mu \frac{du}{dy}$ is fundamental for Newtonian fluids.
*   **Viscosity ($\mu$):** A measure of internal friction. Decreases with temperature for liquids, increases for gases.
*   **Kinematic Viscosity ($\nu$):** Ratio of dynamic viscosity to density ($\nu = \mu/\rho$). Important for gravity-driven flows and dimensionless analysis.
*   **Shear Stress ($\tau$):** Force per unit area acting parallel to a surface.
*   **Velocity Gradient ($\frac{du}{dy}$):** Rate of change of velocity with distance perpendicular to flow.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 8. References

*   **Cengel Y. A. and J. M. Cimbala (Tata McGraw Hill, 2013):** Fluid Mechanics, Chapter 1.
*   **Som S.K. (McGraw Hill Education India, 2011):** Introduction to Fluid Mechanics and Fluid Machines, Chapter 1.
*   **Bansal R.K. (Laxmi Publications, 2005):** Fluid Mechanics and Hydraulic Machines, Chapter 1.
*   **White F.M. (Tata McGraw Hill, 2003):** Fluid Mechanics, Chapter 1.

---