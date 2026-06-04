---
title: "Torsion: Shafts - torsion theory of elastic circular bars – assumptions and 
limitations – polar modulus - torsional rigidity – shaft design for torsional 
load."
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Torsion: Shafts "
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf4"
status: "completed"
scrapedAt: "2026-05-20T17:51:04.989Z"
---
# Mechanics of Solids - Module 2: Torsion: Shafts

## Topic: Torsion Theory of Elastic Circular Bars, Assumptions, Limitations, Polar Modulus, Torsional Rigidity, and Shaft Design for Torsional Load

This module delves into the behavior of circular shafts subjected to torsional loads, a fundamental concept in the design of machine elements like axles and drive shafts. We will explore the theoretical underpinnings of torsion, the critical assumptions made, and the practical implications for designing shafts.

---

### 1. Torsion Theory of Elastic Circular Bars

Torsion refers to the deformation of a structural element caused by an applied torque. When a torque is applied to a shaft, it twists around its longitudinal axis. The torsion theory for elastic circular bars provides a mathematical framework to analyze the stresses and deformations induced by these torques.

#### Key Concepts:

*   **Torque (T):** The twisting moment applied to a shaft. It is typically measured in N-m or lb-in.
*   **Shear Stress ($\tau$):** The internal stress that arises within the material due to the applied torque. It acts parallel to the cross-section of the shaft.
*   **Shear Strain ($\gamma$):** The angular deformation that occurs within the material due to shear stress.
*   **Angle of Twist ($\theta$):** The total angle through which one end of the shaft rotates relative to the other end, due to the applied torque.

#### The Torsion Formula:

The fundamental equation derived from the torsion theory relates the shear stress to the applied torque and the geometry of the shaft:

$$ \tau = \frac{T \cdot r}{J} $$

Where:
*   $\tau$ is the shear stress at a radial distance $r$ from the center of the shaft.
*   $T$ is the applied torque.
*   $r$ is the radial distance from the center of the shaft.
*   $J$ is the **Polar Moment of Inertia** of the cross-section.

**Important Note:** The shear stress is maximum at the outer surface of the shaft (where $r$ is maximum, i.e., $r = R$) and zero at the center.

The angle of twist ($\theta$) is related to the applied torque and the material properties by:

$$ \theta = \frac{T \cdot L}{G \cdot J} $$

Where:
*   $\theta$ is the angle of twist in radians.
*   $T$ is the applied torque.
*   $L$ is the length of the shaft.
*   $G$ is the **Modulus of Rigidity** (also known as shear modulus).
*   $J$ is the Polar Moment of Inertia.

---

### 2. Assumptions and Limitations of Torsion Theory

The derivation of the torsion formula relies on several key assumptions. Understanding these is crucial for applying the theory correctly and recognizing its limitations.

#### Assumptions:

1.  **Material is Homogeneous and Isotropic:** The material properties are uniform throughout the shaft and are the same in all directions. (Refer to **Bansal, R.K.**, Chapter 7, for discussions on material behavior).
2.  **Plane Sections Remain Plane:** Cross-sections that are plane before twisting remain plane after twisting. This is a critical assumption that simplifies the stress analysis.
3.  **Circular Cross-Sections:** The theory is specifically developed for circular cross-sections (solid or hollow). Non-circular sections experience warping of cross-sections, which is not accounted for in this simple theory.
4.  **Elastic Behavior:** The material behaves elastically, meaning it returns to its original shape after the load is removed. This implies Hooke's Law is valid for shear stress and strain ($\tau = G\gamma$). (Refer to **Bhavikatti, S.S.**, Chapter 6, for elastic behavior).
5.  **No Radial Deformation:** The radial lines in the cross-section do not change their length during torsion.
6.  **Uniform Shear Stress Distribution (for Solid Circular Shafts):** For solid circular shafts, the shear stress distribution is linear from the center to the outer surface. For hollow circular shafts, it is also linear, but the stress varies between the inner and outer radii.

#### Limitations:

1.  **Applicable to Circular Sections Only:** The standard torsion theory is not directly applicable to shafts with non-circular cross-sections (e.g., square, rectangular, elliptical). For these, more advanced analytical or numerical methods (like Finite Element Analysis) are required.
2.  **Linear Elasticity:** The theory is valid only within the elastic limit of the material. Beyond this limit, the material's behavior becomes non-linear, and the formulas will not accurately predict stresses and strains.
3.  **Pure Torsion:** The theory assumes that the shaft is subjected to pure torsion, meaning there are no bending moments or axial forces acting on the shaft simultaneously. If bending or axial loads are present, the combined stresses need to be analyzed. (Refer to **Surendra Singh**, Chapter 8, for combined stresses).
4.  **Stress Concentrations:** The theory doesn't account for stress concentrations that can occur at points of geometric discontinuity, such as keyways, fillets, or sudden changes in diameter. These locations require special analysis. (Refer to **Rattan**, Chapter 10, for stress concentration).

---

### 3. Polar Modulus ($Z_p$)

The Polar Modulus is a geometric property of a cross-section that relates the maximum shear stress to the applied torque. It is defined as the ratio of the Polar Moment of Inertia ($J$) to the outer radius ($R$).

$$ Z_p = \frac{J}{R} $$

**For a Solid Circular Shaft of Radius R:**
*   Polar Moment of Inertia, $J = \frac{\pi}{32} D^4 = \frac{\pi}{2} R^4$ (where D is the diameter, $D=2R$)
*   Polar Modulus, $Z_p = \frac{\frac{\pi}{32} D^4}{\frac{D}{2}} = \frac{\pi}{16} D^3$
*   Or, $Z_p = \frac{\frac{\pi}{2} R^4}{R} = \frac{\pi}{2} R^3$

**For a Hollow Circular Shaft with Outer Radius $R$ and Inner Radius $r$:**
*   Polar Moment of Inertia, $J = \frac{\pi}{32} (D^4 - d^4) = \frac{\pi}{2} (R^4 - r^4)$ (where D is outer diameter, d is inner diameter)
*   Polar Modulus, $Z_p = \frac{J}{R} = \frac{\frac{\pi}{32} (D^4 - d^4)}{\frac{D}{2}} = \frac{\pi}{16} \left(\frac{D^4 - d^4}{D}\right)$
*   Or, $Z_p = \frac{\frac{\pi}{2} (R^4 - r^4)}{R}$

**Significance of Polar Modulus:**
The torsion formula can be rewritten using the polar modulus:

$$ \tau_{max} = \frac{T \cdot R}{J} = \frac{T}{J/R} = \frac{T}{Z_p} $$

This form highlights that for a given torque, the maximum shear stress is inversely proportional to the polar modulus. A larger polar modulus implies a lower maximum shear stress, indicating a stronger shaft.

---

### 4. Torsional Rigidity ($GJ$)

Torsional rigidity is a measure of a shaft's resistance to twisting under an applied torque. It is the product of the Modulus of Rigidity ($G$) and the Polar Moment of Inertia ($J$).

$$ \text{Torsional Rigidity} = G \cdot J $$

*   **Modulus of Rigidity (G):** This is a material property representing the shear stiffness of the material. It indicates how much the material will deform (shear strain) under a given shear stress. Higher $G$ means less deformation.
*   **Polar Moment of Inertia (J):** This is a geometric property of the cross-section that represents its resistance to torsional deformation. A larger $J$ means less deformation.

**Significance of Torsional Rigidity:**
From the angle of twist formula ($\theta = \frac{T \cdot L}{G \cdot J}$), it is evident that torsional rigidity ($GJ$) is in the denominator. A higher torsional rigidity leads to a smaller angle of twist for a given torque and length, indicating a stiffer shaft.

---

### 5. Shaft Design for Torsional Load

Designing a shaft for a torsional load involves selecting appropriate material and dimensions to safely transmit the required torque while meeting certain performance criteria. The design process generally involves the following steps:

#### Steps in Shaft Design:

1.  **Determine the Torque (T):** Calculate the maximum torque the shaft will experience during operation. This is often derived from power ($P$) and angular velocity ($\omega$ or $N$):
    $$ P = T \cdot \omega $$
    Where $\omega = \frac{2\pi N}{60}$ (N in RPM). So, $T = \frac{P}{\omega} = \frac{60P}{2\pi N}$.

2.  **Select Material:** Choose a suitable material based on factors like strength (yield strength, ultimate shear strength), toughness, cost, and operating environment. High strength and stiffness are desirable.

3.  **Determine Allowable Shear Stress ($\tau_{allow}$):** The allowable shear stress is determined from the material's shear strength (often taken as ultimate shear strength divided by a factor of safety, or yield shear strength divided by a factor of safety).
    *   $\tau_{allow} = \frac{\text{Shear Strength}}{\text{Factor of Safety}}$
    *   Shear strength can be approximated from tensile properties (e.g., $\tau_{yield} \approx 0.5 \cdot \sigma_{yield}$ and $\tau_{ultimate} \approx 0.5 \cdot \sigma_{ultimate}$).

4.  **Choose Shaft Type (Solid or Hollow):**
    *   **Solid shafts** are simpler to manufacture but can be less efficient in terms of material usage for high torques.
    *   **Hollow shafts** are generally preferred for high-torque applications as they offer a better strength-to-weight ratio and can reduce stress concentrations. The material is concentrated further from the neutral axis where stresses are higher.

5.  **Calculate Required Polar Modulus ($Z_p$):** Using the maximum torque and the allowable shear stress, calculate the minimum required polar modulus:
    $$ Z_{p, required} = \frac{T_{max}}{\tau_{allow}} $$

6.  **Determine Shaft Dimensions:**
    *   **For a solid shaft:** Select a diameter $D$ such that $\frac{\pi}{16} D^3 \ge Z_{p, required}$. Solve for $D$.
    *   **For a hollow shaft:** Select outer diameter $D$ and inner diameter $d$ (or wall thickness $t = (D-d)/2$) such that $\frac{\pi}{16} \frac{D^4 - d^4}{D} \ge Z_{p, required}$. This usually involves an iterative process or making assumptions about the diameter ratio.

7.  **Check for Angle of Twist:** If the angle of twist is a critical design parameter (e.g., in precision machinery), calculate the angle of twist using the selected dimensions and material properties ($G$).
    $$ \theta = \frac{T \cdot L}{G \cdot J} $$
    Ensure $\theta$ is within acceptable limits. If not, redesign the shaft (e.g., increase diameter or use a stiffer material). (Refer to **Hibbeler, R. C.**, Chapter 5, for deformation analysis).

8.  **Consider Other Factors:** In a complete design, other factors like stress concentrations, fatigue, critical speed, and keyway stresses would also need to be analyzed.

#### Example Design Calculation:

**Problem:** A solid circular steel shaft is to transmit 100 kW of power at 300 RPM. The allowable shear stress for the steel is 70 MPa. Design the shaft.

**Solution:**

1.  **Calculate Torque (T):**
    *   Power $P = 100$ kW $= 100 \times 10^3$ W
    *   Rotational speed $N = 300$ RPM
    *   Angular velocity $\omega = \frac{2\pi N}{60} = \frac{2\pi \times 300}{60} = 10\pi$ rad/s
    *   Torque $T = \frac{P}{\omega} = \frac{100 \times 10^3}{10\pi} = \frac{10^4}{\pi} \approx 3183.1$ N-m

2.  **Allowable Shear Stress ($\tau_{allow}$):**
    *   $\tau_{allow} = 70$ MPa $= 70 \times 10^6$ N/m$^2$

3.  **Calculate Required Polar Modulus ($Z_p$):**
    *   $Z_{p, required} = \frac{T}{\tau_{allow}} = \frac{3183.1 \text{ N-m}}{70 \times 10^6 \text{ N/m}^2} \approx 4.547 \times 10^{-5}$ m$^3$

4.  **Determine Shaft Diameter (D):**
    *   For a solid shaft, $Z_p = \frac{\pi}{16} D^3$
    *   $\frac{\pi}{16} D^3 \ge 4.547 \times 10^{-5}$ m$^3$
    *   $D^3 \ge \frac{16}{\pi} \times 4.547 \times 10^{-5}$ m$^3$
    *   $D^3 \ge 2.906 \times 10^{-4}$ m$^3$
    *   $D \ge \sqrt[3]{2.906 \times 10^{-4}}$ m
    *   $D \ge 0.0662$ m $= 66.2$ mm

5.  **Select a Standard Diameter:** Choose a standard shaft diameter slightly larger than 66.2 mm. Let's choose $D = 70$ mm (or 0.07 m).

6.  **Verification (Optional but recommended):**
    *   Recalculate $Z_p$ for $D = 70$ mm $= 0.07$ m:
        $Z_p = \frac{\pi}{16} (0.07)^3 \approx 2.158 \times 10^{-5}$ m$^3$
    *   Calculate actual maximum shear stress:
        $\tau_{max} = \frac{T}{Z_p} = \frac{3183.1 \text{ N-m}}{2.158 \times 10^{-5} \text{ m}^3} \approx 147.5 \times 10^6$ N/m$^2$ $= 147.5$ MPa
    *   **Wait!** There was a mistake in calculation of $Z_p$ in step 5 for verification. Let's recalculate the required $Z_p$ and the diameter $D$.

    Let's re-do step 5 for verification with the calculated $D=66.2$ mm:
    *   $D = 66.2$ mm $= 0.0662$ m
    *   $Z_p = \frac{\pi}{16} (0.0662)^3 \approx 2.045 \times 10^{-5}$ m$^3$
    *   $\tau_{max} = \frac{T}{Z_p} = \frac{3183.1 \text{ N-m}}{2.045 \times 10^{-5} \text{ m}^3} \approx 155.65 \times 10^6$ N/m$^2$ $= 155.65$ MPa
    *   **There is still a mistake in calculation. Let's re-evaluate the torque and $Z_p$ required.**

    Let's use consistent units and re-calculate the required $Z_p$ carefully.
    *   $P = 100$ kW $= 100 \times 10^3$ W
    *   $N = 300$ RPM
    *   $\omega = \frac{2\pi \times 300}{60} = 10\pi$ rad/s
    *   $T = \frac{100 \times 10^3}{10\pi} = \frac{10000}{\pi} \approx 3183.1$ N-m

    *   $\tau_{allow} = 70$ MPa $= 70 \times 10^6$ N/m$^2$
    *   $Z_{p, required} = \frac{T}{\tau_{allow}} = \frac{3183.1 \text{ N-m}}{70 \times 10^6 \text{ N/m}^2} \approx 4.547 \times 10^{-5}$ m$^3$

    *   For solid shaft, $Z_p = \frac{\pi}{16} D^3$
    *   $D^3 = \frac{16}{\pi} Z_{p, required} = \frac{16}{\pi} \times 4.547 \times 10^{-5}$ m$^3 \approx 2.308 \times 10^{-4}$ m$^3$
    *   $D = \sqrt[3]{2.308 \times 10^{-4}}$ m $\approx 0.06135$ m $= 61.35$ mm.

    So, the minimum required diameter is 61.35 mm. Let's select a standard diameter, say **65 mm**.

    **Verification with $D = 65$ mm $= 0.065$ m:**
    *   $Z_p = \frac{\pi}{16} (0.065)^3 \approx 1.720 \times 10^{-5}$ m$^3$
    *   Actual maximum shear stress $\tau_{max} = \frac{T}{Z_p} = \frac{3183.1 \text{ N-m}}{1.720 \times 10^{-5} \text{ m}^3} \approx 185.06 \times 10^6$ N/m$^2$ $= 185.06$ MPa.
    *   **There is still a mistake in my calculation of $Z_p$ for the shaft!**

    Let's re-check the formula for $Z_p$:
    $Z_p = \frac{J}{R} = \frac{\frac{\pi D^4}{32}}{\frac{D}{2}} = \frac{\pi D^3}{16}$. This is correct.

    Let's re-check the $Z_p$ calculation with $D=0.065$ m.
    $D^3 = (0.065)^3 \approx 0.000274625$ m$^3$
    $Z_p = \frac{\pi}{16} \times 0.000274625 \approx 3.14159 / 16 \times 0.000274625 \approx 0.19635 \times 0.000274625 \approx 5.393 \times 10^{-5}$ m$^3$.

    Now let's recalculate the actual stress:
    $\tau_{max} = \frac{T}{Z_p} = \frac{3183.1 \text{ N-m}}{5.393 \times 10^{-5} \text{ m}^3} \approx 59.02 \times 10^6$ N/m$^2$ $= 59.02$ MPa.

    This stress (59.02 MPa) is less than the allowable stress (70 MPa). So, a 65 mm diameter solid shaft is adequate for this load.

    **Final Answer for the example:** The shaft diameter should be 65 mm.

    *(Self-correction: It's crucial to be meticulous with units and calculations. Mistakes can easily occur.)*

---

### Learning Outcomes Addressed:

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects:** This module focuses on shear stress and shear strain under torsional load, a specific type of external load.
*   **CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams:** While SFD and BMD are for beams, the analysis of torsion of circular bars is directly covered here. The understanding of torque distribution along the shaft is a precursor to analyzing torque diagrams for shafts, analogous to SFD/BMD.
*   **CO3: Determine the stresses and deflections in beams subjected to transverse loads:** This module deals with stresses and deformations (angle of twist) under torsional loads, which is a different load type but involves similar principles of stress-strain relationships and material properties.
*   **CO4: Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns:** This module specifically focuses on shear stresses in torsion. However, understanding shear stress is foundational for analyzing combined stresses (e.g., torsion and bending), where principal stresses are calculated.

---

### Important Points to Remember:

*   The torsion formula ($\tau = Tr/J$) is fundamental for calculating shear stress in circular shafts.
*   Shear stress is maximum at the outer surface and zero at the center.
*   The angle of twist formula ($\theta = TL/GJ$) relates deformation to torque, material properties, and geometry.
*   The polar moment of inertia ($J$) is a key geometric parameter for torsional analysis.
*   The polar modulus ($Z_p = J/R$) is used for direct stress calculation ($\tau_{max} = T/Z_p$) and shaft design.
*   Torsional rigidity ($GJ$) governs the resistance to twisting.
*   The assumptions of the torsion theory are crucial for its validity. Be aware of its limitations, especially for non-circular sections and beyond the elastic limit.
*   Shaft design involves ensuring that the maximum shear stress does not exceed the allowable shear stress and that the angle of twist is within acceptable limits.

---

### Practice Questions:

**Question 1:** A solid circular shaft of diameter 50 mm is subjected to a torque of 1000 N-m. Calculate the maximum shear stress in the shaft.

**Answer:**
*   $D = 50$ mm $= 0.05$ m, $R = 25$ mm $= 0.025$ m
*   $T = 1000$ N-m
*   $J = \frac{\pi}{32} D^4 = \frac{\pi}{32} (0.05)^4 \approx 6.136 \times 10^{-7}$ m$^4$
*   $\tau_{max} = \frac{T \cdot R}{J} = \frac{1000 \times 0.025}{6.136 \times 10^{-7}} \approx 40.74 \times 10^6$ N/m$^2$ $= 40.74$ MPa

**Question 2:** A hollow circular shaft has an outer diameter of 100 mm and an inner diameter of 80 mm. It transmits a torque of 20 kN-m. Calculate the shear stress at the outer and inner surfaces.

**Answer:**
*   $D = 100$ mm $= 0.1$ m, $R = 50$ mm $= 0.05$ m
*   $d = 80$ mm $= 0.08$ m, $r = 40$ mm $= 0.04$ m
*   $T = 20$ kN-m $= 20 \times 10^3$ N-m
*   $J = \frac{\pi}{32} (D^4 - d^4) = \frac{\pi}{32} (0.1^4 - 0.08^4) \approx 7.135 \times 10^{-6}$ m$^4$
*   Shear stress at outer surface ($\tau_{max}$ at $R$):
    $\tau_{outer} = \frac{T \cdot R}{J} = \frac{20 \times 10^3 \times 0.05}{7.135 \times 10^{-6}} \approx 139.9 \times 10^6$ N/m$^2$ $= 139.9$ MPa
*   Shear stress at inner surface ($\tau_{inner}$ at $r$):
    $\tau_{inner} = \frac{T \cdot r}{J} = \frac{20 \times 10^3 \times 0.04}{7.135 \times 10^{-6}} \approx 111.9 \times 10^6$ N/m$^2$ $= 111.9$ MPa

**Question 3:** A steel shaft is subjected to a torque of 5000 N-m. If the maximum allowable shear stress is 90 MPa, determine the minimum diameter of a solid circular shaft required.

**Answer:**
*   $T = 5000$ N-m
*   $\tau_{allow} = 90$ MPa $= 90 \times 10^6$ N/m$^2$
*   Required Polar Modulus $Z_{p, required} = \frac{T}{\tau_{allow}} = \frac{5000}{90 \times 10^6} \approx 5.556 \times 10^{-5}$ m$^3$
*   For solid shaft, $Z_p = \frac{\pi}{16} D^3$
*   $D^3 = \frac{16}{\pi} Z_{p, required} = \frac{16}{\pi} \times 5.556 \times 10^{-5} \approx 3.537 \times 10^{-4}$ m$^3$
*   $D = \sqrt[3]{3.537 \times 10^{-4}}$ m $\approx 0.0707$ m $= 70.7$ mm
*   Minimum diameter required is 70.7 mm.

---
This comprehensive set of notes covers the core aspects of torsion in elastic circular bars as per the learning and course outcomes. The inclusion of definitions, formulas, assumptions, limitations, design considerations, examples, and practice questions aims to provide a thorough understanding of the topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
