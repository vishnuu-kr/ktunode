---
title: "Young’s Modulus, Bulk Modulus and Rigidity Modulus."
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Introduction to analysis of deformable bodies."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cef"
status: "completed"
scrapedAt: "2026-05-20T17:51:02.094Z"
---
# Mechanics of Solids: Module 1 - Introduction to Analysis of Deformable Bodies

## Topic: Elasticity and Mechanical Properties of Materials: Young's Modulus, Bulk Modulus, and Rigidity Modulus

---

### **1. Introduction to Deformable Bodies**

*   **Definition:** A deformable body is a body that changes its shape or size when subjected to external forces.
*   **Importance in Engineering:** Understanding the deformation of materials is crucial for designing safe and efficient structures, machines, and components. It helps engineers predict how a material will behave under stress and prevent failure.
*   **Types of Deformation:**
    *   **Elastic Deformation:** Deformation that disappears when the external forces are removed. The material returns to its original shape and size.
    *   **Plastic Deformation:** Permanent deformation that remains even after the external forces are removed.
*   **Stress and Strain:** These are fundamental concepts to quantify deformation.
    *   **Stress ($\sigma$):** The internal resisting force per unit area of a material.
        *   $\sigma = \frac{P}{A}$
        *   Units: Pascals (Pa), MegaPascals (MPa), GigaPascals (GPa), N/mm², psi.
    *   **Strain ($\epsilon$):** The measure of deformation relative to the original size. It is a dimensionless quantity.
        *   For axial strain: $\epsilon = \frac{\Delta L}{L_0}$
        *   Units: Dimensionless (e.g., mm/mm, in/in, %).

---

### **2. Hooke's Law and Modulus of Elasticity**

*   **Hooke's Law:** Within the elastic limit, stress is directly proportional to strain.
    *   $\sigma \propto \epsilon$
    *   $\sigma = E \epsilon$
*   **Proportionality Constant (E):** This constant is known as the **Modulus of Elasticity** or **Young's Modulus**. It represents the stiffness of the material in tension or compression.
*   **Knowledge Level (CO1: K3):** This section directly relates to determining stresses and strains under external loads.

#### **2.1 Young's Modulus (E)**

*   **Definition:** Young's Modulus is a measure of a material's resistance to elastic deformation under tensile or compressive stress. It quantifies how much a material will stretch or compress under a given load.
*   **Formula:**
    *   $E = \frac{\text{Tensile Stress}}{\text{Tensile Strain}} = \frac{\sigma}{\epsilon}$
    *   $E = \frac{P/A}{\Delta L/L_0} = \frac{P L_0}{A \Delta L}$
*   **Characteristics:**
    *   A **high Young's Modulus** indicates a stiff material (e.g., steel, diamond) that deforms very little under load.
    *   A **low Young's Modulus** indicates a flexible material (e.g., rubber, plastic) that deforms significantly.
*   **Units:** Same as stress (e.g., Pa, MPa, GPa, psi).
*   **Examples:**
    *   Steel: Typically around 200 GPa.
    *   Aluminum: Typically around 70 GPa.
    *   Rubber: Typically around 0.01-0.1 GPa.
*   **Textbook References:**
    *   R.K. Bansal (Laxmi Publications, 2012): Discusses Young's Modulus in the context of axial deformation and stress-strain relationships.
    *   S. S. Bhavikatti (New Age International, 2013): Explains Young's Modulus as a fundamental material property influencing axial stiffness.
    *   Surendra Singh (S. K. Kataria & Sons, 2013): Provides detailed examples and calculations involving Young's Modulus in tension and compression.
    *   Rattan (McGraw Hills, 2011): Covers Young's Modulus within the broader scope of material properties and their impact on structural behavior.
*   **Important Point:** Young's Modulus is a material property and is generally considered constant within the elastic limit for a given material.

---

#### **2.2 Bulk Modulus (K)**

*   **Definition:** Bulk Modulus is a measure of a fluid's or solid's resistance to compression or expansion when subjected to uniform hydrostatic pressure. It quantifies how much a substance's volume changes under pressure.
*   **Hydrostatic Stress:** When a body is subjected to uniform pressure from all sides, it experiences hydrostatic stress.
    *   $\sigma_h = -P$ (The negative sign indicates compressive stress)
*   **Volumetric Strain ($\epsilon_v$):** The change in volume per unit original volume.
    *   $\epsilon_v = \frac{\Delta V}{V_0}$
*   **Hooke's Law in terms of Volume:** Within the elastic limit, hydrostatic stress is proportional to volumetric strain.
    *   $\sigma_h = -K \epsilon_v$ (The negative sign is often dropped by defining K as positive, and the stress as compressive)
*   **Formula:**
    *   $K = -\frac{\text{Hydrostatic Stress}}{\text{Volumetric Strain}} = -\frac{\sigma_h}{\epsilon_v}$
    *   $K = -\frac{\Delta P}{\Delta V/V_0} = -\frac{V_0 \Delta P}{\Delta V}$
*   **Characteristics:**
    *   A **high Bulk Modulus** indicates a material that is difficult to compress (e.g., water, steel).
    *   A **low Bulk Modulus** indicates a material that is easily compressible (e.g., gases).
*   **Units:** Same as stress (e.g., Pa, MPa, GPa, psi).
*   **Examples:**
    *   Water: Approximately 2.2 GPa.
    *   Steel: Approximately 160 GPa.
*   **Textbook References:**
    *   R.K. Bansal (Laxmi Publications, 2012): Introduces Bulk Modulus in the context of volumetric changes and stresses in fluids and solids.
    *   S. S. Bhavikatti (New Age International, 2013): Explains Bulk Modulus as a measure of compressibility and its relation to hydrostatic stress.
    *   Surendra Singh (S. K. Kataria & Sons, 2013): Derives the relationship between Bulk Modulus and volumetric strain.
    *   Rattan (McGraw Hills, 2011): Discusses Bulk Modulus for liquids and solids, particularly relevant for pressure vessels.
*   **Relationship with Young's Modulus (for isotropic materials):**
    *   $K = \frac{E}{3(1 - 2\nu)}$
    *   Where $\nu$ is Poisson's Ratio.
*   **Important Point:** Bulk Modulus is relevant for situations involving pressure or volume changes, such as deep-sea submergence or the behavior of fluids under pressure.

---

#### **2.3 Rigidity Modulus (G) or Shear Modulus**

*   **Definition:** Rigidity Modulus (also known as Shear Modulus) is a measure of a material's resistance to shear deformation. It quantifies how much a material will distort its shape when subjected to shear stress.
*   **Shear Stress ($\tau$):** The stress acting parallel to the surface of a material.
    *   $\tau = \frac{F}{A}$
    *   Units: Same as stress.
*   **Shear Strain ($\gamma$):** The angular deformation that occurs when a material is subjected to shear stress. It is the change in angle from the original right angle.
    *   $\gamma = \tan \theta \approx \theta$ (for small angles)
    *   Units: Dimensionless (radians).
*   **Hooke's Law in terms of Shear:** Within the elastic limit, shear stress is directly proportional to shear strain.
    *   $\tau \propto \gamma$
    *   $\tau = G \gamma$
*   **Formula:**
    *   $G = \frac{\text{Shear Stress}}{\text{Shear Strain}} = \frac{\tau}{\gamma}$
*   **Characteristics:**
    *   A **high Rigidity Modulus** indicates a material that is very resistant to shearing (e.g., hardened steel).
    *   A **low Rigidity Modulus** indicates a material that is easily sheared (e.g., lead).
*   **Units:** Same as stress (e.g., Pa, MPa, GPa, psi).
*   **Examples:**
    *   Steel: Typically around 80 GPa.
    *   Aluminum: Typically around 26 GPa.
*   **Textbook References:**
    *   R.K. Bansal (Laxmi Publications, 2012): Explains shear stress and strain, and defines Rigidity Modulus in the context of torsion and shear.
    *   S. S. Bhavikatti (New Age International, 2013): Details the concept of shear modulus and its applications in analyzing the torsional behavior of shafts.
    *   Surendra Singh (S. K. Kataria & Sons, 2013): Provides derivations for shear stress and strain, and the definition of G.
    *   Rattan (McGraw Hills, 2011): Covers Rigidity Modulus in relation to the torsion of circular shafts and the stresses induced by twisting.
*   **Relationship with Young's Modulus (for isotropic materials):**
    *   $G = \frac{E}{2(1 + \nu)}$
    *   Where $\nu$ is Poisson's Ratio.
*   **Important Point:** Rigidity Modulus is critical for understanding the behavior of materials under twisting (torsional) loads and in situations involving angular deformation.
*   **Course Outcome Alignment (CO2: K4):** This modulus is fundamental to analyzing the torsion of circular bars.

---

### **3. Poisson's Ratio ($\nu$)**

*   **Definition:** Poisson's Ratio is the ratio of the lateral (transverse) strain to the axial strain when a material is loaded in tension or compression.
*   **Formula:**
    *   $\nu = -\frac{\text{Lateral Strain}}{\text{Axial Strain}} = -\frac{\epsilon_{lateral}}{\epsilon_{axial}}$
    *   The negative sign is included because when a material is stretched axially, it tends to contract laterally, and vice-versa.
*   **Characteristics:**
    *   For most engineering materials, $0 < \nu < 0.5$.
    *   $\nu = 0.5$ for incompressible materials (like rubber).
    *   $\nu$ is a dimensionless quantity.
*   **Importance:** Poisson's ratio is crucial for relating strains in different directions and is used in the relationships between E, G, and K for isotropic materials.
*   **Textbook References:** All listed textbooks (Bansal, Bhavikatti, Surendra Singh, Rattan) will discuss Poisson's Ratio as a key material property related to axial and lateral strains.
*   **Important Point:** It's essential to account for the lateral deformation when calculating strains, especially in situations involving significant axial strain.

---

### **4. Relationships Between Elastic Constants (for Isotropic Materials)**

For isotropic materials (materials that have the same properties in all directions), the three elastic moduli (E, G, K) and Poisson's ratio ($\nu$) are related. These relationships are derived based on the theory of elasticity.

*   **Relationship between E, G, and $\nu$:**
    *   $G = \frac{E}{2(1 + \nu)}$
*   **Relationship between E, K, and $\nu$:**
    *   $K = \frac{E}{3(1 - 2\nu)}$
*   **Relationship between E, G, and K:**
    *   $E = 9KG / (3K + G)$
*   **Important Point:** If any two of E, G, K, and $\nu$ are known for an isotropic material, the other two can be calculated.

---

### **5. Practice Questions and Exercises**

**Question 1:**
A steel rod of length 1.5 m and diameter 20 mm is subjected to an axial tensile load of 50 kN. If the Young's Modulus of steel is 200 GPa, calculate:
(a) The tensile stress in the rod.
(b) The tensile strain in the rod.
(c) The elongation of the rod.

**Answer 1:**
Given:
$L_0 = 1.5 \text{ m} = 1500 \text{ mm}$
$d = 20 \text{ mm}$, so radius $r = 10 \text{ mm}$
Area, $A = \pi r^2 = \pi (10 \text{ mm})^2 = 100\pi \text{ mm}^2 \approx 314.16 \text{ mm}^2$
Tensile Load, $P = 50 \text{ kN} = 50 \times 10^3 \text{ N}$
Young's Modulus, $E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$

(a) Tensile Stress, $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \text{ N}}{100\pi \text{ mm}^2} = \frac{500}{\pi} \text{ N/mm}^2 \approx 159.15 \text{ N/mm}^2$ (or MPa)

(b) Tensile Strain, $\epsilon = \frac{\sigma}{E} = \frac{159.15 \text{ N/mm}^2}{200 \times 10^3 \text{ N/mm}^2} = 0.00079575$

(c) Elongation, $\Delta L = \epsilon \times L_0 = 0.00079575 \times 1500 \text{ mm} \approx 1.194 \text{ mm}$

---

**Question 2:**
A cube of side 100 mm is subjected to a hydrostatic pressure of 200 MPa. If the Bulk Modulus of the material is 150 GPa, determine the change in volume of the cube.

**Answer 2:**
Given:
Side of cube, $s = 100 \text{ mm}$
Original Volume, $V_0 = s^3 = (100 \text{ mm})^3 = 10^6 \text{ mm}^3$
Hydrostatic Pressure, $\Delta P = 200 \text{ MPa} = 200 \text{ N/mm}^2$ (Note: Pressure is usually taken as a positive value for bulk modulus calculation, representing the magnitude of applied pressure).
Bulk Modulus, $K = 150 \text{ GPa} = 150 \times 10^3 \text{ N/mm}^2$

We use the formula for Bulk Modulus: $K = -\frac{V_0 \Delta P}{\Delta V}$
Rearranging for $\Delta V$: $\Delta V = -\frac{V_0 \Delta P}{K}$

$\Delta V = -\frac{(10^6 \text{ mm}^3) \times (200 \text{ N/mm}^2)}{150 \times 10^3 \text{ N/mm}^2} = -\frac{200 \times 10^6}{150 \times 10^3} \text{ mm}^3 = -\frac{200000}{150} \text{ mm}^3 = -\frac{4000}{3} \text{ mm}^3 \approx -1333.33 \text{ mm}^3$

The negative sign indicates a decrease in volume.
Change in Volume = $-1333.33 \text{ mm}^3$

---

**Question 3:**
A solid circular shaft of 50 mm diameter is subjected to a torque of 1000 Nm. If the Rigidity Modulus of the material is 80 GPa, calculate the shear stress and shear strain at the outer surface of the shaft. Assume the shaft is of sufficient length.

**Answer 3:**
Given:
Diameter, $d = 50 \text{ mm}$, so radius $r = 25 \text{ mm}$
Torque, $T = 1000 \text{ Nm} = 1000 \times 10^3 \text{ Nmm}$
Rigidity Modulus, $G = 80 \text{ GPa} = 80 \times 10^3 \text{ N/mm}^2$

For a circular shaft under torsion, the shear stress at the outer surface is maximum:
$\tau_{max} = \frac{16T}{\pi d^3}$ or $\tau_{max} = \frac{Tr}{I_p}$, where $I_p = \frac{\pi d^4}{32}$ is the polar moment of inertia.
Let's use the first formula:
$\tau_{max} = \frac{16 \times (1000 \times 10^3 \text{ Nmm})}{\pi (50 \text{ mm})^3} = \frac{16 \times 10^6}{\pi \times 125000} \text{ N/mm}^2 = \frac{16000}{125\pi} \text{ N/mm}^2 \approx 40.74 \text{ N/mm}^2$ (or MPa)

Now, using Hooke's Law for shear: $\tau = G \gamma$
Shear Strain, $\gamma = \frac{\tau}{G} = \frac{40.74 \text{ N/mm}^2}{80 \times 10^3 \text{ N/mm}^2} = 0.00050925 \text{ radians}$

Shear stress at the outer surface $\approx 40.74$ MPa
Shear strain at the outer surface $\approx 0.000509$ radians

---

### **6. Key Concepts to Remember**

*   **Elastic Limit:** The maximum stress a material can withstand without permanent deformation.
*   **Stress-Strain Curve:** A graphical representation of a material's behavior under tensile or compressive load.
*   **Modulus of Elasticity (Young's Modulus):** Stiffness in tension/compression. $E = \sigma/\epsilon$.
*   **Bulk Modulus:** Resistance to volume change under hydrostatic pressure. $K = -P/(\Delta V/V_0)$.
*   **Rigidity Modulus (Shear Modulus):** Resistance to shear deformation. $G = \tau/\gamma$.
*   **Poisson's Ratio:** Ratio of lateral strain to axial strain. $\nu = -\epsilon_{lateral}/\epsilon_{axial}$.
*   **Isotropic Material:** Properties are the same in all directions.
*   **Relationships for Isotropic Materials:** $G = E/(2(1+\nu))$, $K = E/(3(1-2\nu))$.

---

### **7. Alignment with Course Outcomes**

*   **CO1 (K3): Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects:** This module lays the foundation by defining stress and strain and introducing the constants that govern their relationship under axial and volumetric loading. Young's Modulus and Bulk Modulus are directly applicable here.
*   **CO2 (K4): Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams:** Rigidity Modulus (G) is essential for analyzing torsion, which is a direct application covered by this modulus. Understanding shear stress and strain is a prerequisite for analyzing shear force diagrams.
*   **CO3 (K3): Determine the stresses and deflections in beams subjected to transverse loads:** While SFD/BMD are covered in CO2, the concept of Young's Modulus (E) is critical for calculating deflections in beams under transverse loads.
*   **CO4 (K4): Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns:** Understanding the basic stress-strain relationships and material properties (like E) is a precursor to more complex stress analysis techniques involving principal stresses and column strength.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **8. Additional Reference Notes**

*   **Popov E (PHI, 2002):** Emphasizes the fundamental principles of mechanics of deformable bodies, providing a solid theoretical base for understanding these moduli.
*   **Hibbeler (Pearson Higher Education, 2018), Beer & Johnston (McGraw Hills, 2017), Pytel & Kiusalaas (Cengage Learning, 2015):** These texts offer comprehensive coverage with practical examples, problem-solving techniques, and real-world applications of Young's Modulus, Bulk Modulus, and Rigidity Modulus in various engineering disciplines. They often delve into the experimental determination of these properties.

This comprehensive set of notes covers the fundamental concepts of Young's Modulus, Bulk Modulus, and Rigidity Modulus, their definitions, formulas, applications, and relationships. The practice questions and key takeaways should aid in understanding and remembering this crucial introductory material for Mechanics of Solids.