---
title: "Types of external loads - 
Normal, Shear, Bending and Bearing stress- Linear and Shear strains."
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Introduction to analysis of deformable bodies."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ced"
status: "completed"
scrapedAt: "2026-05-20T17:51:00.640Z"
---
# MECHANICS OF SOLIDS - MODULE 1: INTRODUCTION TO ANALYSIS OF DEFORMABLE BODIES

## Topic: Types of External Loads, Stresses, and Strains

---

### **1. Introduction to Deformable Bodies**

*   **Definition of a Deformable Body:** A body whose shape or size changes when subjected to external forces. This contrasts with rigid bodies, where deformation is considered negligible.
*   **Importance of Studying Deformable Bodies:** Crucial for designing structures and machine components to ensure they can withstand applied loads without failure or excessive deformation. It helps predict the behavior of materials under stress.
*   **Assumptions in the Analysis of Deformable Bodies:**
    *   The material is **homogeneous** (uniform properties throughout).
    *   The material is **isotropic** (properties are the same in all directions).
    *   Deformations are small enough to be considered **infinitesimal** (linear approximation of strain).
    *   Forces are applied **slowly** (no dynamic effects).
    *   The body is in **equilibrium** under the action of external forces and internal reactions.

---

### **2. Types of External Loads**

External loads are forces or moments applied to a body that cause it to deform or experience internal stresses.

*   **Force:** A push or pull acting on a body.
    *   **Concentrated Load:** Assumed to act at a single point on the body.
    *   **Distributed Load:** Spread over a surface or along a line.
        *   *Uniformly Distributed Load (UDL):* Load intensity is constant.
        *   *Varying Distributed Load:* Load intensity changes along the length or surface.
*   **Moment (or Torque):** A rotational force created by a force acting at a distance from a pivot point. It tends to cause rotation.
*   **Pressure:** Force per unit area, often exerted by fluids or gases.

---

### **3. Types of Stresses**

Stress is a measure of the internal forces that resisting the applied external loads. It is defined as force per unit area.

*   **Stress (σ or τ):** $\sigma = \frac{P}{A}$ (where P is the force and A is the area)
    *   Units: Pascals (Pa) or MegaPascals (MPa) in SI units; psi (pounds per square inch) in US customary units.

#### **3.1 Normal Stress (σ)**

*   **Definition:** Stress that acts perpendicular to a surface.
*   **Cause:** Primarily caused by forces acting axially along the member or by pressure.
*   **Types:**
    *   **Tensile Stress:** Occurs when a force pulls a body apart, causing it to elongate. The internal resisting force acts to pull the material back together.
        *   *Example:* A rope holding a weight.
        *   *Formula:* $\sigma_{tensile} = \frac{P}{A}$ (where P is the tensile force)
    *   **Compressive Stress:** Occurs when a force pushes a body together, causing it to shorten. The internal resisting force acts to push the material apart.
        *   *Example:* A column supporting a building.
        *   *Formula:* $\sigma_{compressive} = -\frac{P}{A}$ (where P is the compressive force, the negative sign indicates compression)
*   **Key Concept:** Normal stress relates to the direct pulling or pushing effect on a cross-sectional area.

#### **3.2 Shear Stress (τ)**

*   **Definition:** Stress that acts parallel or tangential to a surface.
*   **Cause:** Caused by forces acting parallel to the surface of a cross-section, tending to slide one part of the body relative to another.
*   **Types:**
    *   **Single Shear:** A force acts to shear a single cross-section.
        *   *Example:* A bolt connecting two plates subjected to a force perpendicular to the bolt's axis.
        *   *Formula:* $\tau = \frac{V}{A}$ (where V is the shear force and A is the area of the cross-section experiencing shear)
    *   **Double Shear:** A force acts to shear two cross-sections simultaneously.
        *   *Example:* A bolt connecting two plates and a central plate, all subjected to forces.
        *   *Formula:* $\tau = \frac{V}{2A}$ (where V is the total shear force and A is the area of one cross-section)
*   **Key Concept:** Shear stress is associated with the sliding or cutting action across a surface.

#### **3.3 Bending Stress (or Flexural Stress)**

*   **Definition:** Stress that arises within a structural member when it is subjected to a bending moment. It varies across the cross-section, being tensile on one side and compressive on the other.
*   **Cause:** Applied loads that cause a beam or other member to bend.
*   **Mechanism:**
    *   The top fibers of a beam subjected to a downward load are compressed.
    *   The bottom fibers are stretched (tension).
    *   There exists a **neutral axis** where the stress is zero.
*   **Formula:** $\sigma_b = \frac{My}{I}$
    *   $M$: Bending moment at the section.
    *   $y$: Distance from the neutral axis to the point where stress is calculated.
    *   $I$: Moment of inertia of the cross-section about the neutral axis.
*   **Key Concept:** Bending stress is a consequence of the internal moment resisting the external applied moments. It's a normal stress, but specifically due to bending.

#### **3.4 Bearing Stress (or Contact Stress)**

*   **Definition:** Stress that occurs between two contacting surfaces that are pressed against each other. It's a type of compressive stress over the projected area of contact.
*   **Cause:** When one body is pressed against another, like a pin in a hole or a foundation on soil.
*   **Formula:** $\sigma_{bearing} = \frac{P}{A_{projected}}$
    *   $P$: The force causing the contact.
    *   $A_{projected}$: The projected area of contact (often a rectangle for pins in holes).
*   **Key Concept:** Bearing stress is important for designing connections and ensuring surfaces don't yield or deform excessively due to localized pressure.

---

### **4. Types of Strains**

Strain is a measure of the deformation of a body relative to its original size. It is a dimensionless quantity.

*   **Strain (ε or γ):** $\epsilon = \frac{\Delta L}{L_0}$ (where $\Delta L$ is the change in length and $L_0$ is the original length)
    *   Units: Dimensionless (e.g., m/m, mm/mm, or often expressed as microstrain, $\mu\epsilon$, or percentage).

#### **4.1 Linear Strain (or Normal Strain) (ε)**

*   **Definition:** The deformation per unit length in the direction of the applied force (or normal to the cross-section).
*   **Cause:** Associated with normal stresses (tensile or compressive).
*   **Types:**
    *   **Tensile Strain:** Occurs when there is tensile stress, resulting in elongation.
        *   *Example:* A steel bar stretched by a tensile load.
        *   *Formula:* $\epsilon_{tensile} = \frac{\Delta L}{L_0}$ (positive value)
    *   **Compressive Strain:** Occurs when there is compressive stress, resulting in shortening.
        *   *Example:* A concrete column compressed by a load.
        *   *Formula:* $\epsilon_{compressive} = \frac{\Delta L}{L_0}$ (negative value)
*   **Hooke's Law (for axial deformation):** In the elastic region, stress is directly proportional to strain.
    *   $\sigma = E \epsilon$
    *   $E$: Young's Modulus of Elasticity (Modulus of Normal Elasticity), a material property indicating stiffness.

#### **4.2 Shear Strain (γ)**

*   **Definition:** The change in angle between two lines that were originally perpendicular to each other. It quantifies the deformation due to shear stress.
*   **Cause:** Associated with shear stresses.
*   **Mechanism:** Imagine a square element subjected to shear stress. It deforms into a rhombus. Shear strain is the amount by which the original right angles change.
*   **Formula:** $\gamma = \tan(\theta) - \theta \approx \theta$ (where $\theta$ is the change in angle in radians)
    *   For small deformations, $\tan(\theta) \approx \theta$.
*   **Hooke's Law (for shear deformation):** In the elastic region, shear stress is directly proportional to shear strain.
    *   $\tau = G \gamma$
    *   $G$: Shear Modulus of Elasticity (Modulus of Rigidity), a material property indicating resistance to shear deformation.
*   **Key Concept:** Shear strain describes the angular distortion of a material.

---

### **5. Relationship Between Stresses and Strains (Brief Introduction)**

*   **Elasticity:** The ability of a material to return to its original shape after the removal of stress.
*   **Plasticity:** The tendency of a material to undergo permanent deformation when stressed beyond its elastic limit.
*   **Stress-Strain Curve:** A graphical representation of a material's behavior under tensile or compressive load. It shows:
    *   **Proportional Limit:** The point up to which Hooke's Law is valid.
    *   **Elastic Limit:** The point beyond which permanent deformation occurs.
    *   **Yield Strength:** The stress at which significant plastic deformation begins.
    *   **Ultimate Tensile Strength:** The maximum stress the material can withstand.
    *   **Fracture Strength:** The stress at which the material breaks.

---

### **6. Examples and Applications**

*   **Structural Engineering:** Columns (compressive stress/strain), beams (bending stress), connections (shear stress, bearing stress).
*   **Mechanical Engineering:** Shafts in torsion (shear stress/strain), pressure vessels (tensile stress), engine components subjected to various loads.
*   **Civil Engineering:** Bridges, buildings, foundations.

---

### **7. Practice Questions and Exercises**

**Question 1:** A steel rod of 20 mm diameter and 200 mm length is subjected to a tensile load of 50 kN. Calculate the normal stress and normal strain in the rod. Assume Young's Modulus for steel is 200 GPa.

**Solution:**
*   Diameter $d = 20$ mm $= 0.02$ m
*   Area $A = \frac{\pi d^2}{4} = \frac{\pi (0.02)^2}{4} = \pi \times 10^{-4}$ m$^2 \approx 3.1416 \times 10^{-4}$ m$^2$
*   Tensile Load $P = 50$ kN $= 50 \times 10^3$ N
*   Normal Stress $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \text{ N}}{3.1416 \times 10^{-4} \text{ m}^2} \approx 159.15 \times 10^6 \text{ Pa} = 159.15$ MPa
*   Young's Modulus $E = 200$ GPa $= 200 \times 10^9$ Pa
*   Normal Strain $\epsilon = \frac{\sigma}{E} = \frac{159.15 \times 10^6 \text{ Pa}}{200 \times 10^9 \text{ Pa}} = 0.00079575$

**Answer:** Normal Stress $\approx 159.15$ MPa, Normal Strain $\approx 0.000796$ (or 796 microstrain).

**Question 2:** Two steel plates of thickness 10 mm are joined by a single bolt of diameter 12 mm. If the bolt is subjected to a shear force of 60 kN, find the shear stress in the bolt.

**Solution:**
*   Bolt Diameter $d = 12$ mm $= 0.012$ m
*   Shear Force $V = 60$ kN $= 60 \times 10^3$ N
*   Cross-sectional Area of bolt $A = \frac{\pi d^2}{4} = \frac{\pi (0.012)^2}{4} = \pi \times 36 \times 10^{-6}$ m$^2 \approx 1.131 \times 10^{-4}$ m$^2$
*   Since it's a single bolt in single shear:
*   Shear Stress $\tau = \frac{V}{A} = \frac{60 \times 10^3 \text{ N}}{1.131 \times 10^{-4} \text{ m}^2} \approx 530.5 \times 10^6 \text{ Pa} = 530.5$ MPa

**Answer:** Shear Stress $\approx 530.5$ MPa.

**Question 3:** A simply supported beam of length 4 m is subjected to a concentrated load of 10 kN at its center. The beam has a rectangular cross-section of 50 mm width and 100 mm depth. Calculate the maximum bending stress in the beam. (Assume $E$ for the beam material is 200 GPa).

**Solution:**
*   Length $L = 4$ m
*   Load $P = 10$ kN at center.
*   For a simply supported beam with a central load, the maximum bending moment occurs at the center: $M_{max} = \frac{PL}{4}$.
*   $M_{max} = \frac{(10 \times 10^3 \text{ N}) \times (4 \text{ m})}{4} = 10 \times 10^3 \text{ Nm} = 10$ kNm.
*   Cross-section: width $b = 50$ mm $= 0.05$ m, depth $h = 100$ mm $= 0.1$ m.
*   Moment of Inertia $I$ for a rectangular section about its neutral axis (passing through centroid) is $I = \frac{bh^3}{12}$.
*   $I = \frac{(0.05 \text{ m}) \times (0.1 \text{ m})^3}{12} = \frac{0.05 \times 0.001}{12} = \frac{5 \times 10^{-5}}{12} \text{ m}^4 \approx 4.167 \times 10^{-6}$ m$^4$.
*   Maximum bending stress occurs at the points farthest from the neutral axis, which are the top and bottom fibers. The distance $y$ is half the depth: $y_{max} = \frac{h}{2} = \frac{100 \text{ mm}}{2} = 50$ mm $= 0.05$ m.
*   Maximum Bending Stress $\sigma_{b,max} = \frac{M_{max} y_{max}}{I} = \frac{(10 \times 10^3 \text{ Nm}) \times (0.05 \text{ m})}{4.167 \times 10^{-6} \text{ m}^4}$
*   $\sigma_{b,max} = \frac{500}{4.167 \times 10^{-6}} \text{ Pa} \approx 120 \times 10^6 \text{ Pa} = 120$ MPa.

**Answer:** Maximum Bending Stress $\approx 120$ MPa.

---

### **8. Important Points to Remember**

*   **Stress is internal resistance; Strain is deformation.**
*   **Normal stress acts perpendicular to the area; Shear stress acts parallel.**
*   **Bending stress is a type of normal stress caused by bending moments.**
*   **Bearing stress is localized compressive stress due to contact.**
*   **Linear strain is change in length per original length; Shear strain is change in angle.**
*   **Hooke's Law relates stress and strain linearly in the elastic region ($\sigma = E\epsilon$, $\tau = G\gamma$).**
*   **The calculation of stress and strain depends on the type of load and the geometry of the body.**
*   **Units are critical for accurate calculations.**

---

### **9. Alignment with Course Outcomes (COs)**

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3)**
    *   This topic directly addresses the determination of normal, shear, bending, and bearing stresses, along with linear and shear strains, under various external loads. The examples and practice questions provide the procedural knowledge (K3) for this determination.
*   **CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams (Knowledge Level: K4)**
    *   While this topic focuses on the fundamental stresses and strains, it lays the groundwork for understanding bending moments (as discussed in bending stress) which are essential for drawing SFD and BMD. Torsion will be covered in subsequent modules but relies on the concept of shear stress and strain introduced here.
*   **CO3: Determine the stresses and deflections in beams subjected to transverse loads (Knowledge Level: K3)**
    *   The section on bending stress directly contributes to determining stresses in beams. Understanding strain is crucial for later calculating deflections.
*   **CO4: Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns (Knowledge Level: K4)**
    *   This foundational module introduces the basic stress components. The understanding of normal and shear stresses is a prerequisite for more complex analyses like Mohr's Circle (principal stresses) and column buckling, which involve combining these basic stress states.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **10. References and Further Reading**

*   **Mechanics of Solids by R.K.Bansal (Laxmi Publications, 2012):** Excellent for foundational concepts, clear explanations, and numerous solved examples. Chapter 1 and 2 are particularly relevant.
*   **Mechanics of Solids by S. S. Bhavikatti (New Age International, 2013):** Provides a good balance of theory and practical problems. Chapters on Stress and Strain are key.
*   **Strength of Materials by Surendra Singh (S. K. Kataria & Sons, 2013):** A widely used textbook with comprehensive coverage of all topics, including detailed derivations and examples.
*   **Strength of Materials by Rattan (McGraw Hills, 2011):** Offers a structured approach with clear problem-solving techniques.
*   **Mechanics of materials by R. C. Hibbeler (Pearson Higher Education, 2018):** A comprehensive and widely respected text, known for its clear pedagogy and extensive examples. Focus on introductory chapters on stress and strain.
*   **Engineering Mechanics of Solids by Popov E (PHI, 2002):** A classic text that provides a rigorous treatment of the subject.
*   **Mechanics of Materials by Beer & Johnston (McGraw Hills, 2017):** Another highly regarded text with a focus on analytical skills and real-world applications.
*   **Mechanics of Materials by Pytel A. and Kiusalaas J. (Cengage Learning India Private Limited,, 2015):** Known for its problem-solving orientation.

---