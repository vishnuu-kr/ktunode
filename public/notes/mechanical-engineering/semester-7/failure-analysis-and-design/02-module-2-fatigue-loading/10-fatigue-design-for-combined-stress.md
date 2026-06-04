---
title: "Fatigue design for combined stress."
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de0"
status: "completed"
scrapedAt: "2026-05-20T18:12:35.000Z"
---
# Module 2: Fatigue Loading - Fatigue Design for Combined Stress

## 1. Introduction to Combined Stress Fatigue

When mechanical components are subjected to loads that vary with time, they can experience fatigue failure. Fatigue is a progressive and localized structural damage that occurs when a material is subjected to cyclic loading. In many real-world applications, components are not subjected to simple uniaxial stress states (tension or compression) but rather to a combination of different stress types acting simultaneously. This is known as **combined stress fatigue**.

Understanding and designing for fatigue under combined stress is crucial for ensuring the safety and reliability of mechanical systems.

## 2. Types of Combined Stress and Their Effects

Combined stress fatigue typically involves a combination of the following stress types:

*   **Tensile Stress ($\sigma$)**: Pulling apart the material.
*   **Compressive Stress ($\sigma$)**: Pushing together the material.
*   **Shear Stress ($\tau$)**: Stress acting parallel to a surface.
*   **Bending Stress ($\sigma$)**: Stress varying across a cross-section due to bending.
*   **Torsional Stress ($\tau$)**: Stress due to twisting.

The presence of multiple stress components acting on a component can lead to:

*   **Stress Concentration**: Geometric discontinuities (e.g., holes, fillets, notches) amplify local stresses, making them more susceptible to fatigue crack initiation. Combined stresses can exacerbate these effects.
*   **Crack Initiation and Propagation**: Cracks can initiate at points of high tensile stress, but their propagation can be influenced by the presence of shear stresses.
*   **Variable Amplitude Loading**: In real-world scenarios, the magnitude and type of stress can vary over time, leading to complex fatigue behavior.

**Key Concept:** **Principal Stresses** are the maximum and minimum normal stresses acting at a point, and the planes on which they act have zero shear stress. In combined stress fatigue analysis, it's essential to identify the principal stresses ($\sigma_1, \sigma_2, \sigma_3$) and the maximum shear stress ($\tau_{max}$) to characterize the stress state.

**(Reference: Collins, J. A. (2013). *Failure of Materials in Mechanical Design*. Chapter 7 deals extensively with fatigue under combined stresses.)**

## 3. Theories of Failure for Combined Stress Fatigue

Several theories have been developed to predict fatigue failure under combined stress conditions. These theories essentially extend uniaxial fatigue data to multiaxial stress states. The most common approaches are:

### 3.1. Stress-Based Approaches

These theories attempt to relate the multiaxial stress state to an equivalent uniaxial stress that would cause the same fatigue life.

#### 3.1.1. Goodman Diagram and its Extensions (for Static Failure Analogy)

While the Goodman diagram is primarily for static failure, its underlying principles of combining mean and alternating stresses can be conceptually extended. However, for fatigue under combined stress, more direct fatigue criteria are used.

#### 3.1.2. Distortion Energy Theory (von Mises Theory)

The Distortion Energy Theory (DET) is widely used for predicting yielding under static multiaxial stress. It can be adapted for fatigue by considering the alternating stress components. The **equivalent alternating stress ($\sigma_{eq}$)** is calculated using the von Mises criterion.

For a general stress state with alternating principal stresses $\sigma_{a1}, \sigma_{a2}, \sigma_{a3}$:

$\sigma_{eq} = \sqrt{\frac{1}{2} [(\sigma_{a1} - \sigma_{a2})^2 + (\sigma_{a2} - \sigma_{a3})^2 + (\sigma_{a3} - \sigma_{a1})^2]}$

This equivalent alternating stress is then compared to the fatigue limit or fatigue strength obtained from uniaxial fatigue tests.

**(Reference: Jones, D. R. H. (1993). *Engineering Materials 3 – Materials Failure Analysis: Case Studies and Design Implications*. This book likely discusses failure theories and their application.)**

#### 3.1.3. Maximum Shear Stress Theory (Tresca Theory)

The Maximum Shear Stress Theory states that yielding occurs when the maximum shear stress reaches a critical value. For fatigue, this can be extended by considering the maximum alternating shear stress.

The maximum alternating shear stress is given by:

$\tau_{a,max} = \frac{\sigma_{a1} - \sigma_{a3}}{2}$ (assuming $\sigma_{a1} \ge \sigma_{a2} \ge \sigma_{a3}$)

This is then related to the fatigue strength in shear, which can be derived from uniaxial tensile fatigue data. A common approach is to assume the fatigue strength in shear is half the fatigue strength in tension.

#### 3.1.4. Soderberg, Gerber, and Modified Goodman Diagrams

These diagrams are used in static design to predict failure under combined steady and alternating loads. While not directly fatigue life prediction tools in the same vein as MDET or MSS, they provide a framework for considering the combined effect of mean and alternating stresses. For fatigue, the focus is on the alternating component.

**(Reference: Collins, J. A. (2013). *Failure of Materials in Mechanical Design*. Chapter 6 discusses static failure theories which form the basis for some fatigue approaches.)**

### 3.2. Strain-Based Approaches

These theories consider the local strain experienced by the material, which is often a better indicator of fatigue life, especially in the high-cycle fatigue (HCF) and low-cycle fatigue (LCF) regimes.

#### 3.2.1. Morrow and Smith-Watson-Topper (SWT) Models

These are generally used for LCF and can be extended to combined stress states.

*   **Morrow Model**: Relates fatigue life to the **total strain range**.
    $\frac{\Delta \epsilon}{2} = \frac{\sigma_f'}{E}(2N_f)^b + \epsilon_f'(2N_f)^c$
    Where $\Delta \epsilon$ is the total strain range, $\sigma_f'$ is the fatigue strength coefficient, $E$ is Young's Modulus, $\epsilon_f'$ is the fatigue ductility coefficient, $N_f$ is the number of cycles to failure, and $b$ and $c$ are fatigue strength exponent and fatigue ductility exponent, respectively.

*   **Smith-Watson-Topper (SWT) Model**: This model is often preferred for LCF as it accounts for the mean stress effect. It relates fatigue life to the **maximum tensile strain** and the **alternating stress**.
    $\sigma_{max} \frac{\Delta \epsilon}{2} = \sigma_f' (2N_f)^b$

For combined stress, the terms $\sigma_{max}$ and $\Delta \epsilon$ need to be calculated based on the principal stresses. This often involves using the critical plane approach.

**(Reference: Kumar, P. (1999). *Elements of Fracture Mechanics*. While focused on fracture, it may touch upon strain-based fatigue analysis as it relates to crack initiation.)**

### 3.3. Critical Plane Approaches

These are often considered the most versatile and accurate methods for combined stress fatigue. They recognize that fatigue crack initiation and propagation are often governed by the stress or strain state on a specific plane within the material.

The fundamental idea is that fatigue damage accumulates on the plane that experiences the most severe combination of tensile stress and shear strain or stress.

#### 3.3.1. Shear Strain Based Criteria

These models consider the maximum shear strain range on a particular plane. The crack is assumed to initiate and propagate on a plane that maximizes this shear strain range.

#### 3.3.2. Tensile Stress Based Criteria

These models consider the maximum tensile stress on a plane, often combined with a shear stress or strain parameter. The **Fatemi-Socie (FS) model** is a prominent example:

$\Delta \gamma_{max} (1 + \frac{\nu \sigma_n}{\tau_{max}}) = C \sigma_f' (2N_f)^b$

Where:
*   $\Delta \gamma_{max}$ is the maximum shear strain range on the critical plane.
*   $\sigma_n$ is the normal stress on the critical plane.
*   $\tau_{max}$ is the maximum shear stress on the critical plane.
*   $\nu$ is a material constant (often related to Poisson's ratio).
*   $C$ is a material constant.

The critical plane is the plane that maximizes the term $\Delta \gamma_{max} (1 + \frac{\nu \sigma_n}{\tau_{max}})$ for a given load cycle.

**(Reference: ASM Handbook, Vol. 11, *Failure Analysis and Prevention*. This handbook is a comprehensive resource and will certainly cover advanced fatigue analysis techniques like critical plane methods.)**

## 4. Fatigue Design Procedures for Combined Stress

The general procedure for designing against combined stress fatigue involves:

1.  **Identify Load History**: Determine the type, magnitude, and frequency of the applied loads.
2.  **Stress Analysis**: Perform a static stress analysis to determine the stress distribution under the applied loads. This involves calculating principal stresses and shear stresses at critical locations.
3.  **Material Property Characterization**: Obtain uniaxial fatigue data for the material, including its fatigue limit (endurance limit) or fatigue strength at a specific life, and the fatigue strength exponent and fatigue ductility exponent.
4.  **Identify Stress Concentration Factors**: Account for geometric discontinuities that can amplify local stresses.
5.  **Determine Equivalent Stress**: Use an appropriate fatigue criterion (e.g., MDET, Fatemi-Socie) to calculate an equivalent alternating stress or strain from the multiaxial stress state.
6.  **Apply Fatigue Life Prediction Methods**:
    *   **Infinite Life Design (Infinite Fatigue Strength)**: If the design life is infinite or very long, compare the equivalent alternating stress to the material's fatigue limit (if it exists). If the equivalent alternating stress is below the fatigue limit, the component is theoretically safe for infinite life.
    *   **Finite Life Design**: If a specific finite life is required, use S-N curves (stress-life) or strain-life curves to determine the allowable stress or strain for that life. Compare the calculated equivalent stress/strain to the allowable stress/strain.
7.  **Factor of Safety**: Apply appropriate factors of safety to account for uncertainties in loading, material properties, manufacturing, and analysis.

**Important Point:** For components subjected to fluctuating stresses with a non-zero mean stress, modifications like the **Goodman's Law** or **Haigh Diagram** principles are used to adjust the allowable alternating stress based on the mean stress.

$\frac{\sigma_a}{\sigma_{al}} + \frac{\sigma_m}{\sigma_{ult}} = 1$ (Modified Goodman)

Where:
*   $\sigma_a$ = alternating stress
*   $\sigma_{al}$ = allowable alternating stress (at infinite life)
*   $\sigma_m$ = mean stress
*   $\sigma_{ult}$ = ultimate tensile strength

**(Reference: Jones, D. R. H. (1993). *Engineering Materials 3 – Materials Failure Analysis: Case Studies and Design Implications*. This book is likely to have examples of design procedures and case studies involving combined stresses.)**

## 5. Examples of Combined Stress Fatigue

*   **Rotating Shafts with Bending and Torsion**: A common example is a shaft supporting gears or pulleys. The bending due to the weight of components and the torsion due to transmitted torque create a combined stress state. The critical location is often at a keyway or fillet radius, where stress concentrations are significant.
*   **Pressure Vessels**: Internal pressure can cause hoop stresses and axial stresses. Cyclic pressurization leads to fatigue under combined stresses.
*   **Connecting Rods in Engines**: These components experience axial loads due to combustion pressure and bending due to inertia forces, all in a cyclic manner.
*   **Aircraft Wings**: Subjected to lift variations (bending) and potentially torsional loads from control surfaces and asymmetric airflow.

**Example Scenario:**

Consider a solid circular shaft subjected to a fluctuating bending moment $M_a$ and a steady torque $T$.
The alternating bending stress is $\sigma_a = \frac{M_a c}{I}$, where $c$ is the distance from the neutral axis to the outer fiber and $I$ is the moment of inertia.
The shear stress due to steady torque is $\tau_m = \frac{T r}{J}$, where $r$ is the radius and $J$ is the polar moment of inertia.

To design this shaft for infinite life using the Distortion Energy Theory for fatigue:
1.  Calculate the equivalent alternating stress:
    $\sigma_{eq,a} = \sqrt{\sigma_a^2 + 3\tau_m^2}$
2.  Compare $\sigma_{eq,a}$ to the material's fatigue limit in uniaxial tension ($\sigma_{e}$).
    For infinite life, $\sigma_{eq,a} \le \sigma_e$.

If there is also an alternating torque $T_a$ and a steady bending moment $M$, the complexity increases.

**(Reference: Collins, J. A. (2013). *Failure of Materials in Mechanical Design*. Chapter 7 will have detailed examples and derivations for various combined stress states.)**

## 6. Practice Questions and Answers

**Question 1:**
A component is subjected to a completely reversed bending stress of 200 MPa and a steady shear stress of 100 MPa. The material has a uniaxial fatigue limit of 250 MPa. Using the Distortion Energy Theory, determine if the component will survive for infinite life.

**Answer 1:**
*   Alternating stress ($\sigma_a$) = 200 MPa
*   Steady stress ($\tau_m$) = 100 MPa
*   Material fatigue limit ($\sigma_e$) = 250 MPa

Using the Distortion Energy Theory for combined stress fatigue:
Equivalent alternating stress ($\sigma_{eq,a}$) = $\sqrt{\sigma_a^2 + 3\tau_m^2}$
$\sigma_{eq,a} = \sqrt{(200 \text{ MPa})^2 + 3(100 \text{ MPa})^2}$
$\sigma_{eq,a} = \sqrt{40000 + 30000}$
$\sigma_{eq,a} = \sqrt{70000} \approx 264.6$ MPa

Since $\sigma_{eq,a} (264.6 \text{ MPa}) > \sigma_e (250 \text{ MPa})$, the component will **not** survive for infinite life.

**Question 2:**
Explain the significance of the "critical plane" in fatigue analysis under combined stresses.

**Answer 2:**
In fatigue analysis under combined stresses, a "critical plane" is a conceptual plane within the material at a point of interest that is most susceptible to fatigue crack initiation and propagation. This plane is typically oriented such that it experiences the most severe combination of stress and strain parameters that drive fatigue damage. Different critical plane models exist, focusing on maximizing shear strain range, tensile stress, or a combination thereof, often considering the influence of normal stresses on the shear behavior. Identifying this plane is crucial for accurately predicting fatigue life, especially in complex multiaxial stress states where simpler equivalent stress methods might not be sufficiently accurate.

**Question 3:**
What is the fundamental difference between stress-based and strain-based fatigue theories for combined stress?

**Answer 3:**
*   **Stress-based theories** (e.g., MDET) primarily focus on the alternating stress components and convert the multiaxial stress state into an equivalent uniaxial alternating stress. They are generally more accurate for high-cycle fatigue (HCF) where elastic strains dominate.
*   **Strain-based theories** (e.g., Morrow, SWT) consider the strain experienced by the material, particularly the strain range or local strain amplitude. They are better suited for predicting fatigue life in the low-cycle fatigue (LCF) regime where plastic strains are significant. Critical plane approaches can be either stress or strain-based, or a combination, depending on the specific model.

**Question 4:**
For a component subjected to fluctuating bending and torsion, which stress components are typically most critical for fatigue crack initiation?

**Answer 4:**
Fatigue cracks often initiate at locations of high tensile stress. In combined bending and torsion:
*   **Bending stress** is tensile on one side of the neutral axis and compressive on the other, varying linearly across the cross-section. The maximum tensile bending stress is usually a primary driver for crack initiation.
*   **Torsional stress** is a shear stress, which varies radially from zero at the center to a maximum at the outer surface. While shear stress can cause crack initiation, it often leads to cracks oriented at 45 degrees to the principal tensile stress.
*   **Combined effect**: The critical plane approach recognizes that the interaction between alternating bending stress (tensile component) and alternating shear stress (from fluctuating torsion) on a specific plane determines the fatigue life. Typically, the plane experiencing the maximum alternating tensile stress, often in conjunction with shear stress/strain, will be critical.

## 7. Important Points to Remember

*   **Multiaxial Stress States**: Real-world components often experience combined stresses, not just simple uniaxial loading.
*   **Equivalent Stress/Strain**: The core of combined stress fatigue design is to find an equivalent parameter (stress or strain) that can be compared to uniaxial fatigue data.
*   **Distortion Energy Theory (MDET)**: A popular and effective stress-based method for converting multiaxial stresses to an equivalent uniaxial stress.
*   **Critical Plane Approaches**: Offer more accurate predictions by identifying the most damage-prone plane and considering the interaction of stresses and strains on that plane. Fatemi-Socie (FS) is a prominent example.
*   **Mean Stress Effects**: Fluctuating loads often have a non-zero mean stress, which significantly affects fatigue life. This must be accounted for using diagrams like Modified Goodman or appropriate fatigue models.
*   **Stress Concentrations**: Geometric features can amplify local stresses, making them critical for fatigue crack initiation. These factors must be incorporated into the analysis.
*   **Life Prediction Models**: S-N curves (stress-life) for HCF and strain-life curves for LCF are fundamental tools, extended for combined stress.
*   **Material Data**: Accurate uniaxial fatigue data (fatigue limit, fatigue strength, fatigue exponents) is essential for any fatigue analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 8. Textbooks and Reference Books Summary

*   **Jones, D. R. H. (1993). *Engineering Materials 3 – Materials Failure Analysis: Case Studies and Design Implications***: Likely provides case studies and design implications, offering practical insights into combined stress fatigue.
*   **ASM Handbook, Vol. 11, *Failure Analysis and Prevention* (2002)**: A comprehensive reference that will undoubtedly cover advanced fatigue analysis techniques, including combined stress and critical plane methods.
*   **Collins, J. A. (2013). *Failure of Materials in Mechanical Design***: A core text for understanding failure mechanisms, including detailed treatment of fatigue under combined stresses and various predictive theories.
*   **Kumar, P. (1999). *Elements of Fracture Mechanics***: While focused on fracture mechanics, it may touch upon the transition from fatigue crack initiation (driven by stress/strain) to crack propagation, relevant to understanding fatigue under combined loads.

This module highlights the complexity and importance of considering combined stress states in fatigue design to ensure the structural integrity and longevity of engineered components.