---
title: "Elementary concept of elasticity"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109e9"
status: "completed"
scrapedAt: "2026-05-20T18:42:25.116Z"
---
# ADVANCED SOLID MECHANICS - Module 1: Elementary Concept of Elasticity

---

## Topic: Elementary Concept of Elasticity

### Introduction

This module introduces the fundamental concepts of elasticity, a core subject in Solid Mechanics. We will explore how solid materials deform under applied loads and the conditions under which this deformation is recoverable. Understanding elasticity is crucial for analyzing the behavior of structures and components in various engineering applications.

---

### Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Define elasticity and distinguish it from other material behaviors.**
*   **Understand the concept of stress and strain as fundamental measures of deformation and applied force.**
*   **Explain Hooke's Law and its implications for linear elastic materials.**
*   **Introduce the concept of the elastic modulus (Young's Modulus) and Poisson's ratio.**
*   **Differentiate between elastic deformation and plastic deformation.**
*   **Recognize the importance of material properties in elastic analysis.**

---

## 1. Concept of Elasticity

### 1.1 Definition of Elasticity

**Elasticity** is the property of a material to return to its original shape and size after the removal of the applied external force or load. This means that the deformation experienced by the material is temporary and reversible.

### 1.2 Elastic Deformation vs. Plastic Deformation

*   **Elastic Deformation:**
    *   Temporary and reversible.
    *   The material returns to its original configuration upon unloading.
    *   The bonds between atoms are stretched but not broken.
    *   Characterized by low strain values.

*   **Plastic Deformation:**
    *   Permanent and irreversible.
    *   The material does not return to its original configuration upon unloading.
    *   Involves the breaking and reforming of atomic bonds, or the movement of dislocations (in crystalline materials).
    *   Occurs at higher stress levels than elastic deformation.

**Example:**
Imagine stretching a rubber band. When you release it, it snaps back to its original length – this is elastic deformation. If you stretch it too far, it might remain stretched or even break – this indicates plastic deformation has occurred.

---

## 2. Stress and Strain

To quantify the forces and deformations in solid materials, we use the concepts of stress and strain.

### 2.1 Stress

**Stress ($\sigma$ or $\tau$)** is defined as the internal resisting force per unit area within a deformable body. It is a measure of the intensity of internal forces acting across a surface within the material.

*   **Types of Stress:**
    *   **Normal Stress ($\sigma$):** Acts perpendicular to a surface.
        *   **Tensile Stress:** Pulling force causing elongation.
        *   **Compressive Stress:** Pushing force causing shortening.
        *   Formula: $\sigma = \frac{P}{A}$, where $P$ is the applied force and $A$ is the cross-sectional area.
        *   Units: Pascals (Pa) or N/m², Megapascals (MPa) or N/mm², Gigapascals (GPa).

    *   **Shear Stress ($\tau$):** Acts parallel to a surface.
        *   Causes sliding or shearing of one part of the material relative to another.
        *   Formula: $\tau = \frac{V}{A}$, where $V$ is the shear force and $A$ is the area parallel to the force.
        *   Units: Same as normal stress.

**Example:**
A steel rod with a cross-sectional area of 100 mm² is subjected to a tensile force of 10,000 N.
Tensile stress, $\sigma = \frac{10,000 \text{ N}}{100 \text{ mm}^2} = 100 \text{ N/mm}^2 = 100 \text{ MPa}$.

### 2.2 Strain

**Strain ($\epsilon$ or $\gamma$)** is a dimensionless measure of deformation, representing the change in shape or size of a material relative to its original dimensions.

*   **Types of Strain:**
    *   **Normal Strain ($\epsilon$):** Represents the change in length per unit original length.
        *   **Tensile Strain:** Elongation.
        *   **Compressive Strain:** Shortening.
        *   Formula: $\epsilon = \frac{\Delta L}{L_0}$, where $\Delta L$ is the change in length and $L_0$ is the original length.
        *   Units: Dimensionless (often expressed as mm/mm, m/m, or percentage).

    *   **Shear Strain ($\gamma$):** Represents the change in angle caused by shear stress.
        *   Formula: $\gamma = \tan(\theta) \approx \theta$ (for small angles), where $\theta$ is the change in angle in radians.
        *   Units: Dimensionless (radians).

**Example:**
A 1-meter long steel bar elongates by 0.5 mm under a tensile load.
Tensile strain, $\epsilon = \frac{0.5 \text{ mm}}{1000 \text{ mm}} = 0.0005$.

---

## 3. Hooke's Law

### 3.1 The Law

**Hooke's Law** states that for a linearly elastic material, the stress is directly proportional to the strain within the elastic limit.

*   For normal stress and strain: $\sigma = E \epsilon$
*   For shear stress and strain: $\tau = G \gamma$

### 3.2 Elastic Limit

The **elastic limit** is the maximum stress a material can withstand before it begins to deform plastically. Beyond this limit, if the load is removed, the material will not return to its original shape.

### 3.3 Modulus of Elasticity (Young's Modulus)

**Young's Modulus ($E$)**, also known as the modulus of elasticity, is a measure of a material's stiffness in tension or compression. It is the ratio of normal stress to normal strain in the elastic region.

*   Formula: $E = \frac{\sigma}{\epsilon}$
*   Units: Same as stress (Pa, MPa, GPa).
*   A higher Young's Modulus indicates a stiffer material.

**Example:**
For steel, Young's Modulus is approximately 200 GPa. For aluminum, it's about 70 GPa. Steel is therefore much stiffer than aluminum.

### 3.4 Shear Modulus (Modulus of Rigidity)

**Shear Modulus ($G$)**, also known as the modulus of rigidity, is a measure of a material's stiffness in shear. It is the ratio of shear stress to shear strain in the elastic region.

*   Formula: $G = \frac{\tau}{\gamma}$
*   Units: Same as stress (Pa, MPa, GPa).

### 3.5 Poisson's Ratio

**Poisson's Ratio ($\nu$)** is the ratio of the transverse (lateral) strain to the axial (longitudinal) strain in a material subjected to uniaxial stress. It describes the phenomenon where a material expands in one direction when compressed in another.

*   Formula: $\nu = -\frac{\text{transverse strain}}{\text{axial strain}} = -\frac{\epsilon_{\text{transverse}}}{\epsilon_{\text{axial}}}$
    *   The negative sign is used because when a material is stretched in one direction (positive axial strain), it typically contracts in the perpendicular directions (negative transverse strain).
*   Units: Dimensionless.
*   For most engineering materials, Poisson's ratio is between 0.25 and 0.35.

**Example:**
When a rod is stretched, its length increases (positive axial strain), but its diameter decreases (negative transverse strain). Poisson's ratio quantifies this relationship.

---

## 4. Material Properties in Elastic Analysis

The elastic behavior of a material is governed by its intrinsic properties, which are determined through material testing. Key properties relevant to elastic analysis include:

*   **Young's Modulus (E):** Stiffness in tension/compression.
*   **Shear Modulus (G):** Stiffness in shear.
*   **Poisson's Ratio ($\nu$):** Ratio of transverse to axial strain.
*   **Elastic Limit:** Maximum stress before plastic deformation.
*   **Yield Strength:** The stress at which noticeable plastic deformation begins. (Often considered the practical limit of elastic behavior).
*   **Ultimate Tensile Strength:** The maximum stress a material can withstand before necking.

**Important Relationship (for isotropic materials):**
For isotropic materials (properties are the same in all directions), the elastic constants are related by:
$E = 2G(1 + \nu)$

---

## 5. Stress-Strain Curve

The stress-strain curve is a graphical representation of a material's response to tensile or compressive stress. It is fundamental to understanding material behavior.

### 5.1 Key Features of a Typical Stress-Strain Curve (for ductile materials)

1.  **Proportional Limit:** The point up to which stress is directly proportional to strain (Hooke's Law holds).
2.  **Elastic Limit:** The point beyond which permanent deformation occurs. Usually very close to the proportional limit.
3.  **Yield Point/Yield Strength ($\sigma_y$):** The stress at which significant plastic deformation begins. For some materials, there's a distinct upper and lower yield point; for others, it's defined as the stress at which a specified amount of plastic strain (e.g., 0.2%) occurs.
4.  **Ultimate Tensile Strength ($\sigma_{uts}$):** The maximum stress the material can withstand in tension.
5.  **Fracture Point:** The point at which the material breaks.

### 5.2 Elastic Region vs. Plastic Region

*   **Elastic Region:** The portion of the curve where deformation is elastic (reversible). This region is typically linear.
*   **Plastic Region:** The portion of the curve where deformation is permanent (irreversible).

**Example:**
When a ductile metal like steel is stretched, it first deforms elastically, following Hooke's Law. Once the yield strength is exceeded, it starts to deform plastically, elongating significantly with little increase in stress. Eventually, it reaches its ultimate tensile strength, after which it necks (reduces its cross-sectional area) and fractures.

---

## 6. Important Points to Remember

*   **Elasticity** is the ability of a material to recover its original shape after the load is removed.
*   **Stress** is force per unit area; **Strain** is deformation per unit original dimension.
*   **Hooke's Law ($\sigma = E\epsilon$)** applies to linearly elastic materials within their elastic limit.
*   **Young's Modulus ($E$)** quantifies stiffness in tension/compression.
*   **Poisson's Ratio ($\nu$)** describes the lateral-to-axial strain ratio.
*   The **stress-strain curve** is a vital tool for understanding material behavior, distinguishing between elastic and plastic regions.
*   Always check units and ensure consistency when performing calculations.

---

## 7. Practice Questions and Exercises

**Question 1:**
A steel bar of length 2 meters and cross-sectional area 500 mm² is subjected to a tensile load of 50 kN. If the Young's Modulus of steel is 200 GPa, calculate the stress and strain in the bar and the total elongation.

**Answer 1:**
*   Area, $A = 500 \text{ mm}^2 = 500 \times 10^{-6} \text{ m}^2$
*   Force, $P = 50 \text{ kN} = 50 \times 10^3 \text{ N}$
*   Original Length, $L_0 = 2 \text{ m}$
*   Young's Modulus, $E = 200 \text{ GPa} = 200 \times 10^9 \text{ Pa}$

    *   **Stress ($\sigma$):**
        $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \text{ N}}{500 \times 10^{-6} \text{ m}^2} = 100 \times 10^6 \text{ Pa} = 100 \text{ MPa}$

    *   **Strain ($\epsilon$):**
        Using Hooke's Law: $\epsilon = \frac{\sigma}{E} = \frac{100 \times 10^6 \text{ Pa}}{200 \times 10^9 \text{ Pa}} = 0.0005$

    *   **Elongation ($\Delta L$):**
        $\Delta L = \epsilon \times L_0 = 0.0005 \times 2 \text{ m} = 0.001 \text{ m} = 1 \text{ mm}$

**Question 2:**
A rectangular block of material has a width of 50 mm and a height of 20 mm. It is subjected to a compressive axial stress of 30 MPa. The material has a Young's Modulus of 100 GPa and a Poisson's ratio of 0.3. Calculate the change in width and change in height of the block.

**Answer 2:**
*   Axial Stress, $\sigma_{axial} = -30 \text{ MPa}$ (compressive)
*   Young's Modulus, $E = 100 \text{ GPa} = 100 \times 10^3 \text{ MPa}$
*   Poisson's Ratio, $\nu = 0.3$
*   Original Width, $W_0 = 50 \text{ mm}$
*   Original Height, $H_0 = 20 \text{ mm}$

    *   **Axial Strain ($\epsilon_{axial}$):**
        $\epsilon_{axial} = \frac{\sigma_{axial}}{E} = \frac{-30 \text{ MPa}}{100 \times 10^3 \text{ MPa}} = -0.0003$

    *   **Transverse Strain ($\epsilon_{\text{transverse}}$):**
        $\epsilon_{\text{transverse}} = -\nu \times \epsilon_{axial} = -0.3 \times (-0.0003) = 0.00009$

    *   **Change in Width ($\Delta W$):**
        $\Delta W = \epsilon_{\text{transverse}} \times W_0 = 0.00009 \times 50 \text{ mm} = 0.0045 \text{ mm}$
        Since the axial strain is compressive (negative), the block will become wider.

    *   **Change in Height ($\Delta H$):**
        $\Delta H = \epsilon_{\text{transverse}} \times H_0 = 0.00009 \times 20 \text{ mm} = 0.0018 \text{ mm}$
        Similarly, the height will increase.

**Question 3:**
Explain the difference between the elastic limit and the yield strength of a material. When might these two values be considered the same for practical engineering purposes?

**Answer 3:**
*   **Elastic Limit:** The maximum stress a material can withstand before any permanent deformation occurs. It's the theoretical boundary of purely elastic behavior.
*   **Yield Strength:** The stress at which a material begins to exhibit a significant amount of plastic deformation. For many materials, this is defined as the stress corresponding to a small, specified amount of plastic strain (e.g., 0.2% offset yield strength).

For materials where the elastic limit and the onset of significant plastic deformation are very close (e.g., many metals), the yield strength is often used as a practical representation of the limit of elastic behavior in engineering design.

---
