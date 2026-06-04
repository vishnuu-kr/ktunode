---
title: "Deformation of solid bodies under load"
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 1: Introduction to Tribology:  Definition and Scope"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637f9"
status: "completed"
scrapedAt: "2026-05-20T18:04:56.985Z"
---
# Industrial Tribology: Module 1 - Introduction to Tribology: Definition and Scope

## Topic: Deformation of Solid Bodies Under Load

### Learning Outcomes Addressed:

*   **LO1:** Understand the fundamental concepts of deformation in solid bodies when subjected to external forces.
*   **LO2:** Differentiate between elastic and plastic deformation.
*   **LO3:** Explain the concept of stress and strain and their relationship.
*   **LO4:** Discuss the influence of material properties on deformation behavior.
*   **LO5:** Relate deformation phenomena to tribological applications.

### Course Outcomes (COs) Alignment:

*   **CO1 (K2):** Explain fundamental principles of Tribology. (Understanding deformation is a fundamental principle as it dictates contact mechanics).
*   **CO5 (K3):** Apply tribological knowledge in industrial applications. (Understanding deformation is crucial for designing tribological systems that perform reliably).

---

## 1. Introduction to Deformation

When solid bodies are subjected to external forces (loads), they undergo changes in their shape and size. This phenomenon is known as **deformation**. In tribology, understanding deformation is critical because it directly influences:

*   **Contact Area:** The actual area of contact between two surfaces under load.
*   **Pressure Distribution:** How the applied load is distributed over the contact area.
*   **Surface Integrity:** The susceptibility of surfaces to wear and damage.
*   **Friction:** The forces resisting relative motion between surfaces.

---

## 2. Types of Deformation

Deformation can be broadly categorized into two main types:

### 2.1. Elastic Deformation

*   **Definition:** Deformation that is temporary and reversible. When the applied load is removed, the solid body returns to its original shape and size.
*   **Mechanism:** Involves the stretching or compressing of interatomic bonds within the material. The atoms are displaced from their equilibrium positions but return to them once the load is removed.
*   **Characteristics:**
    *   Follows **Hooke's Law** (for many materials in the elastic region).
    *   Strain is proportional to stress.
    *   Energy is stored during deformation and released upon unloading.
*   **Tribological Relevance:** Elastic deformation is important in scenarios involving low loads, where surfaces might deform slightly without permanent damage. It influences the initial contact and the overall stiffness of a tribological joint.

**Example:** Stretching a rubber band slightly. When released, it snaps back to its original length.

**Reference:**
*   Stachowiak & Batchelor, Chapter 2: "Solid Mechanics and Surface Topography" discusses elastic deformation in the context of surface contact.
*   Williams, Chapter 2: "The Nature of Surfaces" touches upon elastic deformation as a precursor to understanding surface interactions.

### 2.2. Plastic Deformation

*   **Definition:** Deformation that is permanent and irreversible. When the applied load is removed, the solid body does not return to its original shape and size.
*   **Mechanism:** Involves the movement of dislocations (defects in the crystal lattice) within the material. This movement leads to a permanent rearrangement of atoms.
*   **Characteristics:**
    *   Occurs when the applied stress exceeds the **yield strength** of the material.
    *   Strain is no longer directly proportional to stress.
    *   Significant energy is dissipated as heat during plastic deformation.
*   **Tribological Relevance:** Plastic deformation is crucial in understanding wear mechanisms such as **ploughing** and **adhesion**, as well as the formation of **transfer layers** and **surface hardening**. It is fundamental to many wear processes.

**Example:** Bending a paperclip. It retains its new shape after the bending force is removed.

**Reference:**
*   Hutchings, Chapter 2: "Mechanical Properties of Solids" provides a detailed explanation of yielding and plastic deformation.
*   Bhushan, Chapter 2: "Mechanical Behavior of Materials" covers plastic deformation, including concepts like dislocations.

---

## 3. Stress and Strain: The Fundamental Relationship

To quantify deformation, we use the concepts of stress and strain.

### 3.1. Stress ($\sigma$)

*   **Definition:** The internal resistance force per unit area that the material offers to the applied external force.
*   **Formula:** $\sigma = \frac{F}{A_0}$
    *   $F$: Applied force (N)
    *   $A_0$: Original cross-sectional area (m²)
*   **Units:** Pascals (Pa) or Megapascals (MPa) or Gigapascals (GPa).
*   **Types of Stress:**
    *   **Tensile Stress:** Force pulling apart.
    *   **Compressive Stress:** Force pushing together.
    *   **Shear Stress ($\tau$):** Force acting parallel to the surface. $\tau = \frac{F_s}{A_0}$, where $F_s$ is the shear force.

### 3.2. Strain ($\epsilon$)

*   **Definition:** The measure of deformation relative to the original size of the body.
*   **Formula:** $\epsilon = \frac{\Delta L}{L_0}$
    *   $\Delta L$: Change in length (m)
    *   $L_0$: Original length (m)
*   **Units:** Dimensionless (often expressed as a percentage or in microstrain).
*   **Types of Strain:**
    *   **Tensile Strain:** Elongation.
    *   **Compressive Strain:** Shortening.
    *   **Shear Strain ($\gamma$):** Change in angle (radians).

### 3.3. Stress-Strain Relationship

The relationship between stress and strain characterizes a material's mechanical behavior.

*   **Elastic Region:**
    *   **Hooke's Law:** $\sigma = E \epsilon$ (for tensile/compressive stress)
    *   **Young's Modulus ($E$):** The constant of proportionality, representing the stiffness of the material. Higher $E$ means a stiffer material.
    *   For shear stress and shear strain: $\tau = G \gamma$
    *   **Shear Modulus ($G$):** Relates shear stress to shear strain.
*   **Yield Point:** The point at which the material begins to deform plastically.
*   **Plastic Region:**
    *   The relationship between stress and strain becomes non-linear.
    *   **Yield Strength ($\sigma_y$):** The stress at which plastic deformation begins.
    *   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before fracture.
    *   **Ductility:** The ability of a material to undergo significant plastic deformation before fracture.

**Reference:**
*   Bhushan, Chapter 2: "Mechanical Behavior of Materials" provides comprehensive details on stress, strain, and stress-strain curves.
*   Williams, Chapter 2: "The Nature of Surfaces" indirectly discusses stress concentration at surface asperities.

---

## 4. Stress-Strain Curves and Material Properties

The stress-strain curve is a graphical representation of a material's response to applied load.

### 4.1. Typical Stress-Strain Curve (Ductile Material)

```
      ^ Stress (σ)
      |
      |     /----- UTS
      |    /
      |   /
      |  /
      | / Yield Point (σy)
      |/
      +--------------------> Strain (ε)
      | Elastic Region
      | Plastic Region
```

### 4.2. Key Material Properties Derived from Stress-Strain Curves

*   **Young's Modulus ($E$):** Slope of the elastic region.
*   **Yield Strength ($\sigma_y$):** Stress at the onset of plastic deformation.
*   **Tensile Strength (UTS):** Peak stress on the curve.
*   **Ductility:** Measured by elongation at fracture or reduction in area.
*   **Hardness:** Resistance to permanent indentation. While not directly from a tensile test, it's related to yield strength.

### 4.3. Influence of Material Properties on Deformation

*   **High Young's Modulus:** Material is stiffer, deforms less elastically under a given load.
*   **High Yield Strength:** Material requires a higher stress to initiate plastic deformation.
*   **High Hardness:** Material is more resistant to plastic deformation and wear.
*   **Ductility:** A ductile material can absorb more energy before fracturing, which can be beneficial in preventing brittle fracture in tribological contacts.

**Example in Tribology:**
*   **Gears:** Require high yield strength and hardness to withstand contact pressures and prevent plastic deformation (pitting) and wear.
*   **Bearings:** Materials with high Young's modulus and yield strength are preferred to maintain clearance and avoid excessive deformation under load.

**Reference:**
*   Hutchings, Chapter 2: "Mechanical Properties of Solids" extensively covers various material properties derived from mechanical tests.
*   Lansdown, Chapter 3: "Materials Selection for Lubricated Components" discusses how material properties influence performance in lubricated environments.

---

## 5. Deformation in Tribological Contacts

The deformation of surfaces under load is a fundamental aspect of tribology.

### 5.1. Contact of Ideal Surfaces

*   **Hertzian Contact Theory:** Describes the elastic deformation of two perfectly smooth, elastic spheres or cylinders in contact.
    *   Predicts elliptical or rectangular contact areas.
    *   Stress is highest at the center and decreases towards the edges.
    *   Maximum shear stress occurs below the surface.
    *   **Limitation:** Assumes perfectly smooth surfaces, which are not representative of real-world surfaces.

### 5.2. Contact of Real Surfaces (Asperity Deformation)

*   **Real surfaces are rough:** Composed of a multitude of microscopic peaks called **asperities**.
*   **Contact occurs at asperity tips:** Initially, contact is limited to a few high asperities.
*   **Deformation Mechanisms at Asperities:**
    *   **Elastic Deformation:** For low loads, asperities deform elastically.
    *   **Plastic Deformation:** As the load increases, the stress at asperity tips can exceed the yield strength, leading to plastic deformation. This is particularly significant when the **Hertzian contact pressure** (average pressure over the contact area predicted by Hertz) exceeds the material's yield strength, or when local stresses at asperity junctions exceed the yield strength.
    *   **Mixed Deformation:** Often, both elastic and plastic deformation occur simultaneously at different asperities or different parts of an asperity.
*   **Key Parameter: Plasticity Index ($\gamma_p$)**
    *   Introduced by Greenwood and Williamson (GW model).
    *   $\gamma_p = (\frac{\sigma_y}{\sqrt{E' \phi}})$ where $\phi$ is the standard deviation of the surface heights.
    *   **$\gamma_p < 0.6$:** Primarily elastic deformation.
    *   **$\gamma_p > 1.2$:** Primarily plastic deformation.
    *   **$0.6 < \gamma_p < 1.2$:** Mixed deformation.
    *   **Significance:** A higher plasticity index indicates a greater tendency for plastic deformation to occur.

### 5.3. Impact on Tribological Performance

*   **Actual Contact Area:** Plastic deformation increases the actual contact area more rapidly with load than elastic deformation. This is because asperities flatten and spread.
*   **Friction:** Increased contact area generally leads to higher frictional forces (Amontons-Coulomb Law: $F_f = \mu N$, where $F_f$ is friction force, $\mu$ is the coefficient of friction, and $N$ is the normal load. If contact area increases with load, it can influence the proportionality).
*   **Wear:** Plastic deformation at asperity tips can lead to material removal (wear particles), particularly in abrasive and adhesive wear mechanisms.
*   **Surface Distress:** Excessive plastic deformation can cause surface fatigue, cracking, and catastrophic failure.

**Example:**
*   **Run-in Period of Components:** During the initial operation of machinery, asperities deform plastically, and wear occurs. This "run-in" process often leads to a smoother surface with a larger real contact area, which can then operate with reduced friction and wear.
*   **Indentation by a Harder Surface:** If a softer material slides against a harder, rough surface, the softer material's asperities will likely undergo plastic deformation and wear.

**Reference:**
*   Stachowiak & Batchelor, Chapter 2: "Solid Mechanics and Surface Topography" provides an in-depth analysis of contact mechanics for rough surfaces.
*   Bhushan, Chapter 3: "Contact Mechanics" discusses Hertzian contact and extensions to rough surfaces, including the GW model.
*   Williams, Chapter 4: "Friction and Wear" links surface deformation to friction and various wear mechanisms.
*   Menezes, Ghosh, & Bhushan, Chapter 3: "Contact Mechanics of Surfaces" offers a detailed mathematical treatment of surface deformation.

---

## 6. Practice Questions and Answers

**Question 1:** Define elastic deformation and provide a tribological example where it plays a role.
**Answer:** Elastic deformation is reversible deformation that occurs when the applied stress is below the material's yield strength. When the load is removed, the material returns to its original shape. An example is the slight deformation of a journal bearing surface against the lubricant film under light load, which helps maintain the film.

**Question 2:** What is yield strength, and why is it important in tribology?
**Answer:** Yield strength is the stress at which a material begins to deform plastically (permanently). It is important in tribology because it determines the load threshold beyond which permanent changes in surface shape occur. Exceeding yield strength can lead to increased wear, plastic flow, and potential surface damage.

**Question 3:** Explain the concept of a stress-strain curve. What information can be extracted from it?
**Answer:** A stress-strain curve plots the stress applied to a material against the resulting strain. It graphically represents the material's mechanical behavior. From it, one can determine Young's Modulus (stiffness), Yield Strength (onset of plastic deformation), Ultimate Tensile Strength (maximum stress), and ductility (ability to deform plastically).

**Question 4:** How does the roughness of real surfaces influence deformation under load compared to ideal smooth surfaces?
**Answer:** Real surfaces are rough and contact occurs at asperities. Initially, contact is limited to a few high asperities. As load increases, these asperities deform. Plastic deformation of asperities becomes significant when local stresses exceed yield strength, leading to a larger real contact area and potentially different stress distributions than predicted by ideal Hertzian theory.

**Question 5:** Briefly explain the concept of the plasticity index ($\gamma_p$) and its significance in tribological contact.
**Answer:** The plasticity index ($\gamma_p$) is a dimensionless parameter that quantifies the tendency of surface asperities to deform plastically under load. It is defined by the ratio of yield strength to the elastic contact stress. A high $\gamma_p$ indicates that asperities are likely to deform plastically, significantly influencing the real contact area and wear behavior.

---

## 7. Important Points to Remember

*   **Deformation is fundamental:** It dictates contact area, pressure distribution, and surface interactions in tribology.
*   **Elastic deformation is reversible:** Important for initial contact and maintaining shape under low loads.
*   **Plastic deformation is permanent:** Occurs above yield strength and is critical for understanding wear, adhesion, and surface modifications.
*   **Stress ($\sigma = F/A_0$) and Strain ($\epsilon = \Delta L/L_0$) quantify deformation.**
*   **Young's Modulus ($E$) and Yield Strength ($\sigma_y$) are key material properties governing deformation.**
*   **Real surfaces have asperities:** Contact and deformation occur at these asperities, leading to complex behavior beyond ideal smooth surface models.
*   **Plasticity Index ($\gamma_p$) predicts the dominant deformation mode of asperities.**
*   **Plastic deformation increases real contact area and can initiate wear.**

---
This concludes the study notes for "Deformation of Solid Bodies Under Load" from Module 1. Ensure to refer to the recommended textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
