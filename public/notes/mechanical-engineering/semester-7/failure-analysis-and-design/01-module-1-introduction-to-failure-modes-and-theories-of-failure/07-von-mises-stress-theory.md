---
title: "von Mises Stress Theory"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd2"
status: "completed"
scrapedAt: "2026-05-20T18:12:25.878Z"
---
## FAILURE ANALYSIS AND DESIGN

### Module 1: Introduction to Failure Modes and Theories of Failure
#### Topic: von Mises Stress Theory

---

### Learning Outcomes Covered:

*   **Understand the different theories of failure and material behaviour under various loading conditions.** (Directly addressed by explaining the von Mises yield criterion and its application.)
*   **Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.** (While not directly a focus of von Mises stress, understanding yielding is a prerequisite for understanding fatigue behavior in ductile materials.)
*   **Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.** (The von Mises criterion helps determine when yielding, a precursor to plastic deformation and potential crack initiation, occurs.)
*   **Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.** (The von Mises criterion provides a basis for understanding the onset of plasticity, which can influence the progression of these advanced failure mechanisms.)

### Course Outcomes Addressed:

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions.** (Knowledge Level: K2) - **Primary Focus**
*   **CO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.** (Knowledge Level: K1) - **Supportive Knowledge**
*   **CO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.** (Knowledge Level: K3) - **Foundational Understanding**
*   **CO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.** (Knowledge Level: K2) - **Contextual Relevance**

---

### 1. Introduction to Theories of Failure

*   **Purpose:** Theories of failure provide criteria to predict when a material will yield or fracture under complex stress states. This is crucial for ensuring the safety and reliability of mechanical components.
*   **Types of Failure:**
    *   **Yielding:** The onset of permanent deformation. For ductile materials, this is often the primary concern.
    *   **Fracture:** The separation of material into two or more pieces. Brittle materials are more prone to fracture.
*   **Why are theories needed?**
    *   Materials are typically tested under simple uniaxial tension or compression.
    *   In real-world applications, components experience multi-axial stress states (combined normal and shear stresses).
    *   Theories help translate uniaxial test data to predict failure under multi-axial conditions.

---

### 2. The von Mises Stress Theory (Octahedral Shear Stress Theory)

#### 2.1 Key Concepts and Definitions

*   **Yield Criterion:** A mathematical expression that defines the boundary between elastic and plastic behavior of a material.
*   **von Mises Stress ($\sigma_v$ or $\sigma_e$):** A scalar value representing the equivalent stress that causes yielding in a material under a complex stress state, when compared to the yield strength of the material under uniaxial tension.
*   **Distortion Energy Theory:** The von Mises theory is also known as the distortion energy theory because it is based on the principle that yielding occurs when the **distortion energy** per unit volume reaches a critical value.
*   **Octahedral Plane:** A plane that is equally inclined to the three principal stress axes. The stresses acting on the octahedral plane are called octahedral stresses. The von Mises stress is directly related to the shear stress on the octahedral plane.

#### 2.2 Theoretical Basis

*   **Distortion Energy:** When a material deforms elastically, its volume changes slightly, and its shape also changes. Plastic deformation, however, is primarily characterized by a change in shape without significant volume change. The energy associated with this shape change is called distortion energy.
*   **Energy of Distortion per Unit Volume:** For a general triaxial stress state with principal stresses $\sigma_1, \sigma_2, \sigma_3$, the energy of distortion per unit volume ($W_d$) is given by:

    $W_d = \frac{1}{12G} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$

    where $G$ is the shear modulus.
*   **von Mises Yield Criterion:** The criterion states that yielding begins when the energy of distortion per unit volume under a complex stress state equals the energy of distortion per unit volume at the yield point under uniaxial tension.
*   **Uniaxial Tension:** Under uniaxial tension, the stress state is $\sigma_1 = \sigma_y$ (yield strength), $\sigma_2 = 0$, $\sigma_3 = 0$. The energy of distortion is:

    $W_{d,uniaxial} = \frac{1}{12G} [(\sigma_y - 0)^2 + (0 - 0)^2 + (0 - \sigma_y)^2] = \frac{2\sigma_y^2}{12G} = \frac{\sigma_y^2}{6G}$
*   **Equating Distortion Energies:** Setting the distortion energy under complex stress to the uniaxial distortion energy:

    $\frac{1}{12G} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2] = \frac{\sigma_y^2}{6G}$

    Multiplying both sides by $12G$:

    $(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2 = 2\sigma_y^2$

*   **The von Mises Stress Formula:** The left-hand side of the above equation is often defined as $( \sqrt{2} \tau_{oct} )^2 = 2 \tau_{oct}^2$, where $\tau_{oct}$ is the octahedral shear stress. The von Mises stress, $\sigma_v$, is defined such that $\sigma_v^2 = \frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$.

    Therefore, the von Mises stress is:

    $\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]}$

    **Yielding occurs when $\sigma_v \ge \sigma_y$.**

#### 2.3 Calculation of von Mises Stress from Stress Tensor Components

For a general stress state where the principal stresses are not readily known, the von Mises stress can be calculated from the stress tensor components:

$\sigma_{xx}, \sigma_{yy}, \sigma_{zz}, \tau_{xy}, \tau_{yz}, \tau_{zx}$

The von Mises stress is given by:

$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_{xx} - \sigma_{yy})^2 + (\sigma_{yy} - \sigma_{zz})^2 + (\sigma_{zz} - \sigma_{xx})^2] + 3(\tau_{xy}^2 + \tau_{yz}^2 + \tau_{zx}^2)}$

**Important:** This formula is derived from the principal stress formula by relating them to the stress tensor components and using invariants of the stress tensor.

#### 2.4 Application and Interpretation

*   **Ductile Materials:** The von Mises theory is particularly well-suited for predicting the yielding of **ductile materials** (like most metals) under multi-axial stress conditions.
*   **Failure Prediction:** If the calculated von Mises stress ($\sigma_v$) for a component under a given load is greater than or equal to the material's uniaxial yield strength ($\sigma_y$), then yielding is predicted to occur.
*   **Design Implication:** To prevent yielding, the design must ensure that $\sigma_v < \sigma_y$ for the material used. A **Factor of Safety (FOS)** is often applied: $\sigma_v \le \frac{\sigma_y}{FOS}$.

#### 2.5 Examples

**Example 1: Torsion of a Shaft**

Consider a solid circular shaft of radius $R$ subjected to a torque $T$. The maximum shear stress occurs at the outer surface and is given by $\tau_{max} = \frac{TR}{J}$, where $J$ is the polar moment of inertia ($J = \frac{\pi R^4}{2}$).

Under pure torsion, the stress state at the surface is:
$\sigma_1 = \tau_{max}$
$\sigma_2 = 0$
$\sigma_3 = -\tau_{max}$

Using the von Mises stress formula:
$\sigma_v = \sqrt{\frac{1}{2}[(\tau_{max} - 0)^2 + (0 - (-\tau_{max}))^2 + (-\tau_{max} - \tau_{max})^2]}$
$\sigma_v = \sqrt{\frac{1}{2}[\tau_{max}^2 + \tau_{max}^2 + (-2\tau_{max})^2]}$
$\sigma_v = \sqrt{\frac{1}{2}[\tau_{max}^2 + \tau_{max}^2 + 4\tau_{max}^2]}$
$\sigma_v = \sqrt{\frac{1}{2}[6\tau_{max}^2]}$
$\sigma_v = \sqrt{3\tau_{max}^2}$
$\sigma_v = \sqrt{3} \tau_{max}$

For yielding to occur under torsion, $\sigma_v \ge \sigma_y$.
$\sqrt{3} \tau_{max} \ge \sigma_y$
$\tau_{max} \ge \frac{\sigma_y}{\sqrt{3}}$

This shows that a material can withstand a shear stress $\tau_{max} = \frac{\sigma_y}{\sqrt{3}}$ before yielding under pure torsion. Note that $\frac{\sigma_y}{\sqrt{3}} \approx 0.577 \sigma_y$.

**Example 2: Combined Bending and Torsion**

Consider a shaft subjected to both bending moment $M$ and torque $T$.
At the surface of the shaft, the stresses are a combination of bending stress and shear stress. Let the outer radius be $R$.

Bending stress: $\sigma_b = \frac{My}{I}$ (maximum at $y=R$, $\sigma_{b,max} = \frac{MR}{I}$)
Shear stress due to torsion: $\tau_t = \frac{Tr}{J}$ (maximum at $r=R$, $\tau_{t,max} = \frac{TR}{J}$)

At a point on the surface subjected to maximum bending stress, the principal stresses are not simply $\sigma_b$ and $\tau_t$. We need to consider the stress tensor. For a point on the surface of a shaft under bending and torsion:

Let the axial stress be $\sigma_x = \frac{MR}{I}$ and the shear stress be $\tau_{xy} = \frac{TR}{J}$.
The stress tensor is:
$ \begin{pmatrix} \sigma_x & \tau_{xy} & 0 \\ \tau_{xy} & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} $

The principal stresses $\sigma_1, \sigma_2, \sigma_3$ can be found by solving the characteristic equation $|\sigma I - \mathbf{\sigma}| = 0$. For this 2D stress state (assuming $\sigma_z=0$), the principal stresses are:

$\sigma_{1,2} = \frac{\sigma_x}{2} \pm \sqrt{(\frac{\sigma_x}{2})^2 + \tau_{xy}^2}$
$\sigma_3 = 0$

Substituting $\sigma_x = \frac{MR}{I}$ and $\tau_{xy} = \frac{TR}{J}$:

$\sigma_{1,2} = \frac{MR}{2I} \pm \sqrt{(\frac{MR}{2I})^2 + (\frac{TR}{J})^2}$

Now, substitute these into the von Mises stress formula.

$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]}$
$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - 0)^2 + (0 - \sigma_1)^2]}$
$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + \sigma_2^2 + \sigma_1^2]}$

Note that $(\sigma_1 - \sigma_2)^2 = (\frac{MR}{I})^2 + 4(\frac{TR}{J})^2$ and $\sigma_1^2 + \sigma_2^2 = (\frac{MR}{I})^2 + 2(\frac{TR}{J})^2$.

A more direct way using the stress tensor components:
$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_{xx} - \sigma_{yy})^2 + (\sigma_{yy} - \sigma_{zz})^2 + (\sigma_{zz} - \sigma_{xx})^2] + 3(\tau_{xy}^2 + \tau_{yz}^2 + \tau_{zx}^2)}$
With $\sigma_{yy} = \sigma_{zz} = 0$, $\sigma_{xx} = \sigma_x$, $\tau_{xy} = \tau_t$:
$\sigma_v = \sqrt{\frac{1}{2}[(\sigma_x - 0)^2 + (0 - 0)^2 + (0 - \sigma_x)^2] + 3(\tau_t^2 + 0 + 0)}$
$\sigma_v = \sqrt{\frac{1}{2}[\sigma_x^2 + \sigma_x^2] + 3\tau_t^2}$
$\sigma_v = \sqrt{\sigma_x^2 + 3\tau_t^2}$

This is the equivalent stress for combined bending and torsion. Yielding occurs when $\sigma_v \ge \sigma_y$.

#### 2.6 Comparison with Other Theories

*   **Tresca (Maximum Shear Stress) Theory:** States that yielding occurs when the maximum shear stress in the material reaches half the yield stress in uniaxial tension ($\tau_{max} = \sigma_y/2$).
    *   **Relationship:** $\sigma_v = \sqrt{3} \tau_{oct}$. For states of stress where $\sigma_1, \sigma_2, \sigma_3$ are principal stresses, the maximum shear stress $\tau_{max} = \max(|\frac{\sigma_1-\sigma_2}{2}|, |\frac{\sigma_2-\sigma_3}{2}|, |\frac{\sigma_3-\sigma_1}{2}|)$.
    *   **von Mises vs. Tresca:** von Mises generally predicts slightly higher stresses for yielding compared to Tresca for ductile materials. This is because ductile materials tend to yield based on the overall strain energy, not just the maximum shear stress. For a state of pure shear, von Mises $\sigma_v = \sqrt{3}\tau$, and Tresca predicts yielding when $\tau = \sigma_y/2$, hence $\sigma_v = \sqrt{3}(\sigma_y/2) \approx 0.866 \sigma_y$.
    *   **Experimental Evidence:** For most ductile metals, experimental results generally agree better with the von Mises criterion.

#### 2.7 Limitations and Considerations

*   **Ductile Materials:** Primarily applicable to ductile materials. For brittle materials, theories like the Maximum Normal Stress Theory or Mohr's Failure Criterion are more appropriate.
*   **Isotropic Materials:** Assumes the material is isotropic (properties are the same in all directions).
*   **Static Loading:** Primarily used for static or quasi-static loading conditions. Fatigue failure under cyclic loading requires different approaches (e.g., S-N curves).
*   **Temperature and Strain Rate:** The yield strength $\sigma_y$ used in the criterion can be dependent on temperature and strain rate, which might need to be accounted for in specific applications.
*   **Not a Fracture Criterion:** von Mises stress is a yield criterion, not a fracture criterion. A component can deform plastically without fracturing. Fracture occurs when stresses exceed the ultimate tensile strength or when crack propagation conditions are met (fracture mechanics).

---

### 3. Relevance to Other Modules and Course Outcomes

*   **CO1 (Theories of Failure):** This topic is the core of CO1. Understanding von Mises stress is fundamental to comprehending how materials behave under various loading conditions beyond simple uniaxial tension.
*   **CO2 (Fatigue):** While von Mises stress predicts yielding, understanding the onset of plastic deformation is a precursor to fatigue. Repeatedly stressing a material beyond its elastic limit (indicated by von Mises stress exceeding yield strength) can lead to fatigue crack initiation. For cyclic loading below the yield strength, fatigue life is assessed using S-N curves.
*   **CO3 (Fracture Mechanics):** The von Mises criterion helps determine when plastic deformation begins. Significant plastic deformation can blunt crack tips, which is a key concept in fracture mechanics, often influencing crack driving force and toughness. Yielding can also occur ahead of a crack tip, leading to ductile fracture.
*   **CO4 (Advanced Failure Mechanisms):**
    *   **Contact Fatigue:** In rolling or sliding contact, complex stress states develop. von Mises stress can be used to estimate yielding at the contact surface, which can contribute to crack initiation in fatigue.
    *   **High-Temperature Effects:** Yield strength decreases at high temperatures. The von Mises criterion still applies, but the critical value ($\sigma_y$) changes. Creep, a time-dependent deformation at high temperatures, is a separate phenomenon not directly predicted by static yield criteria.
    *   **Corrosion:** Corrosion can reduce the effective cross-sectional area and introduce stress concentrations, both of which can lead to earlier yielding or fracture. The von Mises criterion would be applied to the remaining cross-section and modified geometry.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 4. Textbook References and Content Incorporation

*   **Jones D. R. H. (1993), "Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications":** This textbook likely provides numerous case studies where yielding under complex stress states is analyzed. The von Mises criterion would be a fundamental tool discussed in chapters relating to the mechanical behavior of materials under load and the onset of plastic deformation. The book's focus on design implications suggests that the practical application of yield criteria like von Mises for component design would be emphasized.
*   **ASM Handbook, Vol. 11 "Failure Analysis and Prevention" (2002):** This comprehensive handbook would undoubtedly detail various failure modes, including yielding. It would likely present the von Mises stress calculation and its application in failure analysis for different material classes and loading scenarios. Expect detailed explanations of how multi-axial stresses lead to yielding and how this is assessed using failure theories.
*   **Jack A. Collins (2013), "Failure of Materials in Mechanical Design, 2nd Edition":** Collins' book would offer a detailed treatment of material behavior and failure prediction. The von Mises criterion would be a central topic in chapters discussing mechanical properties, stress analysis, and design against yielding. The book's emphasis on mechanical design means it will cover how to apply these theories in practice, including safety factors.
*   **Prashant Kumar (1999), "Elements of Fracture Mechanics":** While focused on fracture, this book would likely introduce yielding as a prerequisite phenomenon. Understanding when yielding occurs (using von Mises) is essential before delving into crack initiation and propagation, as yielding ahead of a crack tip significantly influences fracture behavior.

---

### 5. Practice Questions and Exercises

**Question 1:**
A component made of steel with a yield strength ($\sigma_y$) of 250 MPa is subjected to a plane stress condition where $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, and $\tau_{xy} = 75$ MPa. Using the von Mises stress theory, determine if yielding will occur.

**Answer 1:**
The stress state is in plane stress ($\sigma_z = \tau_{yz} = \tau_{zx} = 0$).
The von Mises stress formula for plane stress is:
$\sigma_v = \sqrt{\sigma_x^2 - \sigma_x \sigma_y + \sigma_y^2 + 3\tau_{xy}^2}$

Given:
$\sigma_x = 100$ MPa
$\sigma_y = 50$ MPa
$\tau_{xy} = 75$ MPa

$\sigma_v = \sqrt{(100)^2 - (100)(50) + (50)^2 + 3(75)^2}$
$\sigma_v = \sqrt{10000 - 5000 + 2500 + 3(5625)}$
$\sigma_v = \sqrt{7500 + 16875}$
$\sigma_v = \sqrt{24375}$
$\sigma_v \approx 156.12$ MPa

Since $\sigma_v (156.12 \text{ MPa}) < \sigma_y (250 \text{ MPa})$, yielding will **not** occur.

**Question 2:**
A shaft is designed to withstand a maximum shear stress of 100 MPa due to torsion. If the shaft is made of a material with a yield strength of 300 MPa, will the shaft yield according to the von Mises theory?

**Answer 2:**
For pure torsion, the principal stresses are $\sigma_1 = \tau_{max}$, $\sigma_2 = 0$, $\sigma_3 = -\tau_{max}$.
The von Mises stress is $\sigma_v = \sqrt{3} \tau_{max}$.

Given:
$\tau_{max} = 100$ MPa
$\sigma_y = 300$ MPa

Calculate the von Mises stress:
$\sigma_v = \sqrt{3} \times 100 \text{ MPa}$
$\sigma_v \approx 1.732 \times 100 \text{ MPa}$
$\sigma_v \approx 173.2$ MPa

Compare $\sigma_v$ with $\sigma_y$:
$173.2 \text{ MPa} < 300 \text{ MPa}$

Therefore, the shaft will **not** yield.

**Question 3 (Conceptual):**
Explain why the von Mises stress theory is generally preferred over the Tresca theory for predicting the yield of ductile metals under multi-axial stress.

**Answer 3:**
The von Mises theory is based on the distortion energy theory, which considers the energy associated with the change in shape of the material during deformation. Ductile metals tend to yield when a critical amount of distortion energy is accumulated. Experimental evidence shows that for most ductile metals, the yielding behavior under complex stress states is better represented by the von Mises criterion, which predicts slightly higher stresses for yielding compared to the Tresca (Maximum Shear Stress) theory. Tresca theory, focusing solely on the maximum shear stress, is more conservative for some stress states but doesn't capture the overall strain energy accumulation as effectively for ductile materials.

---

### 6. Important Points to Remember

*   **von Mises Stress ($\sigma_v$) is an equivalent stress** that relates a complex multi-axial stress state to a uniaxial tensile stress that would cause yielding.
*   **Yielding occurs when $\sigma_v \ge \sigma_y$.**
*   **Formula for principal stresses:** $\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]}$
*   **Formula for stress tensor components:** $\sigma_v = \sqrt{\frac{1}{2}[(\sigma_{xx} - \sigma_{yy})^2 + (\sigma_{yy} - \sigma_{zz})^2 + (\sigma_{zz} - \sigma_{xx})^2] + 3(\tau_{xy}^2 + \tau_{yz}^2 + \tau_{zx}^2)}$
*   **For plane stress ($\sigma_z=0$):** $\sigma_v = \sqrt{\sigma_x^2 - \sigma_x \sigma_y + \sigma_y^2 + 3\tau_{xy}^2}$
*   **For pure shear ($\sigma_1 = \tau, \sigma_2 = 0, \sigma_3 = -\tau$):** $\sigma_v = \sqrt{3} \tau$
*   **Applicable to ductile materials.**
*   **It's a yield criterion, not a fracture criterion.**

---