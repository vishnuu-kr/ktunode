---
title: "Maximum Strain Theory"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd1"
status: "completed"
scrapedAt: "2026-05-20T18:12:25.183Z"
---
# FAILURE ANALYSIS AND DESIGN

## Module 1: Introduction to Failure Modes and Theories of Failure

### Topic: Maximum Strain Theory

---

### 1. Introduction to Failure Analysis and Theories of Failure

**Objective:** To understand the fundamental concepts of material failure and the various theoretical frameworks used to predict it. This module lays the groundwork for analyzing why and how materials fail, and how to design against such failures.

**Key Concepts:**

*   **Failure:** The inability of a component or structure to perform its intended function. This can manifest as:
    *   **Yielding:** Permanent deformation beyond acceptable limits.
    *   **Fracture:** Complete separation of the material.
    *   **Excessive deformation:** Sagging or buckling that renders the component unusable.
    *   **Wear:** Gradual removal of material due to friction.
    *   **Corrosion:** Degradation due to chemical or electrochemical reactions.
*   **Failure Analysis:** The process of investigating and determining the causes of material failure. It involves examining the failed component, understanding the operating conditions, and applying scientific principles to identify the failure mechanism.
*   **Theories of Failure:** Mathematical models or criteria used to predict when a material will fail under a given state of stress or strain. These theories are crucial for designing components that can withstand the expected loads without failing. They are typically based on experimental data obtained from simple uniaxial tensile tests.

**Relevance to Course Outcomes:**

*   **CO1 (Understand theories of failure and material behaviour):** This topic directly addresses the understanding of a specific theory of failure and how material behavior (in terms of strain) is linked to failure prediction. (Knowledge Level: K2)

---

### 2. Maximum Strain Theory (Rankine's Theory)

**Overview:**

The Maximum Strain Theory, also known as Rankine's Theory of Failure, is one of the earlier and simpler theories used to predict yielding in ductile materials under multiaxial stress conditions. It is based on the observation that failure occurs when the *maximum principal strain* in the material reaches a critical value.

**Key Concepts and Definitions:**

*   **Principal Strains:** The maximum and minimum normal strains that occur at a point in a material. These strains are oriented along the principal stress axes, where the shear strains are zero.
*   **Uniaxial Tensile Test:** A fundamental experiment where a material sample is subjected to a controlled tensile load. This test provides essential material properties like yield strength and ultimate tensile strength.
*   **Yield Strength ($\sigma_y$):** The stress at which a material begins to deform plastically (permanently).
*   **Tensile Strain at Yield ($\epsilon_y$):** The strain corresponding to the yield strength in a uniaxial tensile test. This is a critical parameter for the Maximum Strain Theory.
*   **Poisson's Ratio ($\nu$):** The ratio of transverse strain to axial strain under uniaxial stress. It describes how a material contracts laterally when stretched longitudinally.

**Assumptions of the Maximum Strain Theory:**

1.  **Failure occurs when the maximum principal strain reaches the strain at yield in a uniaxial tensile test.**
2.  **The material is homogeneous and isotropic.**
3.  **Failure is solely governed by the magnitude of the maximum principal strain.**

**Mathematical Formulation:**

Consider a point in a material subjected to a general state of stress, characterized by principal stresses $\sigma_1, \sigma_2, \sigma_3$. The corresponding principal strains are given by Hooke's Law for multiaxial stress:

$\epsilon_1 = \frac{1}{E} [\sigma_1 - \nu(\sigma_2 + \sigma_3)]$
$\epsilon_2 = \frac{1}{E} [\sigma_2 - \nu(\sigma_1 + \sigma_3)]$
$\epsilon_3 = \frac{1}{E} [\sigma_3 - \nu(\sigma_1 + \sigma_2)]$

Where:
*   $E$ is the Young's modulus.
*   $\nu$ is the Poisson's ratio.

The Maximum Strain Theory states that yielding occurs when the *maximum* of these principal strains ($\epsilon_{max}$) equals the tensile strain at yield ($\epsilon_y$):

**Failure Condition:** $\epsilon_{max} = \epsilon_y$

Since $\epsilon_y = \frac{\sigma_y}{E}$ (from the uniaxial tensile test where $\sigma_1 = \sigma_y$, $\sigma_2 = \sigma_3 = 0$), the failure criterion can be written as:

**Failure Condition (in terms of stress):** $\max(\epsilon_1, \epsilon_2, \epsilon_3) = \frac{\sigma_y}{E}$

**Important Point to Remember:** The theory considers the *algebraically largest* principal strain. For ductile materials, we are typically concerned with yielding, so we look for the largest positive strain. However, in a more general sense, it's the maximum strain regardless of sign that's being compared to $\epsilon_y$. For practical yielding prediction, we focus on the largest positive principal strain.

**Cases:**

1.  **Uniaxial Tension:**
    *   $\sigma_1 > 0$, $\sigma_2 = 0$, $\sigma_3 = 0$
    *   $\epsilon_1 = \frac{\sigma_1}{E}$
    *   $\epsilon_2 = -\frac{\nu \sigma_1}{E}$
    *   $\epsilon_3 = -\frac{\nu \sigma_1}{E}$
    *   Assuming $\sigma_1 > 0$, $\epsilon_1$ is the maximum principal strain.
    *   Failure occurs when $\epsilon_1 = \epsilon_y$, so $\frac{\sigma_1}{E} = \frac{\sigma_y}{E}$, which means $\sigma_1 = \sigma_y$. This is consistent with the uniaxial test.

2.  **Uniaxial Compression:**
    *   $\sigma_1 = 0$, $\sigma_2 < 0$, $\sigma_3 = 0$ (assuming $\sigma_2$ is the only non-zero stress and it's compressive)
    *   $\epsilon_1 = -\frac{\nu \sigma_2}{E}$
    *   $\epsilon_2 = \frac{\sigma_2}{E}$
    *   $\epsilon_3 = -\frac{\nu \sigma_2}{E}$
    *   Assuming $\sigma_2 < 0$, $\epsilon_2$ is the most negative (least positive) strain. However, if we are concerned about *yielding* in compression, we compare the *absolute value* of the compressive strain to the *absolute value* of the tensile strain at yield.
    *   If $\epsilon_y$ represents the tensile strain at yield, and we are interested in compressive yield, the theory suggests that failure occurs when the *magnitude* of the principal strain reaches the magnitude of the strain at yield. So, $| \epsilon_{max} | = | \epsilon_y |$.
    *   For uniaxial compression ($\sigma_2 < 0$), the strains are: $\epsilon_1 = -\nu |\epsilon_2|$, $\epsilon_2 = -|\epsilon_2|$, $\epsilon_3 = -\nu |\epsilon_2|$. Here, $\epsilon_2$ is the algebraically largest (least negative) strain.
    *   The theory states failure when $\epsilon_{max} = \epsilon_y$. If we consider $\epsilon_y$ as the positive strain at tensile yield, then for compression, we would compare $| \epsilon_{max} |$ with $| \epsilon_y |$. This would lead to $|\frac{\sigma_2}{E}| = \frac{\sigma_y}{E}$, or $|\sigma_2| = \sigma_y$. This suggests that the yield strength in compression is the same as in tension, which is generally true for ductile materials.

3.  **Biaxial Stress (Equal Tensile Stresses):**
    *   $\sigma_1 = \sigma$, $\sigma_2 = \sigma$, $\sigma_3 = 0$
    *   $\epsilon_1 = \frac{1}{E} [\sigma - \nu(\sigma + 0)] = \frac{\sigma}{E}(1 - \nu)$
    *   $\epsilon_2 = \frac{1}{E} [\sigma - \nu(\sigma + 0)] = \frac{\sigma}{E}(1 - \nu)$
    *   $\epsilon_3 = \frac{1}{E} [0 - \nu(\sigma + \sigma)] = -\frac{2\nu\sigma}{E}$
    *   Assuming $\sigma > 0$ and $\nu$ is positive, $\epsilon_1 = \epsilon_2$ are the maximum principal strains.
    *   Failure occurs when $\epsilon_1 = \epsilon_y$, so $\frac{\sigma}{E}(1 - \nu) = \frac{\sigma_y}{E}$.
    *   This gives the yield stress under biaxial tension: $\sigma = \frac{\sigma_y}{1 - \nu}$.

4.  **Biaxial Stress (Pure Shear):**
    *   $\sigma_1 = \tau$, $\sigma_2 = -\tau$, $\sigma_3 = 0$ (where $\tau$ is the shear stress)
    *   Principal stresses: $\sigma_1 = \tau$, $\sigma_2 = -\tau$, $\sigma_3 = 0$. (Note: This should be correctly interpreted in terms of principal stress directions. If there's pure shear, then the principal stresses are $\sigma_1 = \tau$, $\sigma_2 = -\tau$, $\sigma_3 = 0$ at 45 degrees to the shear planes.)
    *   Let's use the standard principal stress notation: $\sigma_1$, $\sigma_2$, $\sigma_3$. For pure shear, the maximum shear stress $\tau$ occurs at 45 degrees. The corresponding principal stresses are $\sigma_1 = \tau$, $\sigma_2 = -\tau$, $\sigma_3 = 0$.
    *   $\epsilon_1 = \frac{1}{E} [\tau - \nu(-\tau + 0)] = \frac{\tau}{E}(1 + \nu)$
    *   $\epsilon_2 = \frac{1}{E} [-\tau - \nu(\tau + 0)] = -\frac{\tau}{E}(1 + \nu)$
    *   $\epsilon_3 = \frac{1}{E} [0 - \nu(\tau - \tau)] = 0$
    *   The maximum principal strain is $\epsilon_1 = \frac{\tau}{E}(1 + \nu)$.
    *   Failure occurs when $\epsilon_1 = \epsilon_y$, so $\frac{\tau}{E}(1 + \nu) = \frac{\sigma_y}{E}$.
    *   This gives the yield stress in pure shear: $\tau = \frac{\sigma_y}{1 + \nu}$.

**Comparison with Uniaxial Test:**

*   From the uniaxial test, $\epsilon_y = \frac{\sigma_y}{E}$.
*   Maximum Strain Theory predicts yield in biaxial tension ($\sigma, \sigma, 0$) at $\sigma = \frac{\sigma_y}{1-\nu}$. Since $1-\nu < 1$, this predicted stress is higher than $\sigma_y$. This implies that the material can withstand a higher stress if it's applied equally in two directions, which is intuitively plausible because the lateral contraction (due to Poisson's effect) is constrained by the second applied stress.
*   Maximum Strain Theory predicts yield in pure shear ($\tau, -\tau, 0$) at $\tau = \frac{\sigma_y}{1+\nu}$. Since $1+\nu > 1$ (for most engineering materials where $\nu \approx 0.2-0.3$), this predicted shear stress is lower than $\sigma_y$. This suggests that shear stress is more detrimental to yielding than tensile stress.

**Limitations and Applicability:**

*   **Ductile Materials:** Primarily applicable to ductile materials that yield before fracture.
*   **Accuracy:** It's less accurate for predicting yielding under complex stress states, especially when significant shear stresses are involved or when brittle fracture is a possibility.
*   **Comparison to other theories:**
    *   **Maximum Stress Theory (Rankine):** Predicts failure based on the maximum principal stress. Maximum Strain Theory is generally considered more appropriate for ductile materials than Maximum Stress Theory.
    *   **Maximum Shear Stress Theory (Tresca):** Predicts failure when the maximum shear stress reaches the shear stress at yield in a uniaxial test.
    *   **Distortion Energy Theory (Von Mises):** Predicts failure based on the energy absorbed in distorting the material. Von Mises theory is often considered the most accurate for ductile materials.

**Content from Textbooks:**

*   **Jones D. R. H. (1993), "Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications":** This textbook likely provides case studies illustrating material failures and the application of failure theories. It would emphasize understanding the link between microstructure and macroscopic failure behavior. Chapter(s) on ductile fracture and yielding would be relevant.
*   **ASM Handbook, Vol. 11 "Failure Analysis and Prevention" (2002):** This handbook is a comprehensive resource. Chapters on "Fundamental Concepts of Failure" and "Mechanical Properties and Testing" would cover the basics of tensile testing and yielding. Sections detailing different theories of failure would provide comparative analysis.
*   **Collins, Jack A. (2013), "Failure of Materials in Mechanical Design":** This book would offer detailed explanations of various failure theories. Chapters on "Theories of Yielding and Fracture" would cover the Maximum Strain Theory, its derivation, and its limitations, possibly with graphical representations of failure loci.
*   **Kumar, Prashant (1999), "Elements of Fracture Mechanics":** While primarily focused on fracture mechanics (cracks), this book might briefly touch upon yielding criteria as a precursor to fracture, especially in the context of ductile fracture initiation.

**Integration with Course Outcomes:**

*   **CO1 (Understand theories of failure and material behaviour):** The Maximum Strain Theory is a prime example of a failure theory. Understanding its basis in material behavior (strain at yield) and its formulation allows for fulfilling this outcome.
*   **CO2 (Remember factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction):** While Maximum Strain Theory itself doesn't directly address fatigue, understanding yielding is crucial because yielding can occur under cyclic loading, leading to fatigue crack initiation. So, it's foundational knowledge.
*   **CO3 (Apply principles of fracture mechanics to analyse and design against crack initiation and propagation):** Yielding often precedes fracture. For ductile materials, the onset of plasticity (yielding) is a critical event that can lead to crack initiation. This theory provides a criterion for that initial yielding.
*   **CO4 (Understand advanced failure mechanisms...):** This theory provides a fundamental understanding of failure that can be contrasted with more complex failure mechanisms like high-temperature creep or fatigue.

---

### 3. Examples and Practice Questions

**Example 1: Biaxial Stress State**

A thin-walled cylindrical pressure vessel is subjected to an internal pressure that results in a hoop stress ($\sigma_h$) and an axial stress ($\sigma_a$). If the vessel is made of a material with a yield strength ($\sigma_y$) of 300 MPa and a Poisson's ratio ($\nu$) of 0.3, what is the maximum principal strain in the vessel wall? If the vessel has a yield strain at a uniaxial stress of $\epsilon_y = 0.0015$, what is the state of stress that would cause yielding according to the Maximum Strain Theory?

*Given:*
*   $\sigma_y = 300$ MPa
*   $\nu = 0.3$
*   $\epsilon_y = 0.0015$

*Solution Approach:*
1.  Calculate the strains in terms of stresses for the biaxial stress state: $\sigma_1 = \sigma_h$, $\sigma_2 = \sigma_a$, $\sigma_3 = 0$. (For a thin-walled vessel, $\sigma_h = \frac{Pd}{2t}$ and $\sigma_a = \frac{Pd}{4t}$, so $\sigma_h = 2\sigma_a$.)
2.  Apply the Maximum Strain Theory: $\max(\epsilon_1, \epsilon_2, \epsilon_3) = \epsilon_y$.
3.  Determine the stress combination that satisfies this condition.

Let $\sigma_1 = \sigma_h$ and $\sigma_2 = \sigma_a$. Assume $\sigma_h > \sigma_a > 0$.
$\epsilon_1 = \frac{1}{E} [\sigma_h - \nu \sigma_a]$
$\epsilon_2 = \frac{1}{E} [\sigma_a - \nu \sigma_h]$
$\epsilon_3 = -\frac{\nu}{E} (\sigma_h + \sigma_a)$

From uniaxial test, $\epsilon_y = \frac{\sigma_y}{E}$. So, $E = \frac{\sigma_y}{\epsilon_y} = \frac{300 \text{ MPa}}{0.0015} = 200,000 \text{ MPa} = 200 \text{ GPa}$.

Failure occurs when $\epsilon_1 = \epsilon_y$ (since $\sigma_h$ and $\sigma_a$ are tensile, $\epsilon_1$ will be the maximum).
$\frac{1}{E} [\sigma_h - \nu \sigma_a] = \epsilon_y$
$\frac{\sigma_h}{E} - \nu \frac{\sigma_a}{E} = \frac{\sigma_y}{E}$
$\sigma_h - \nu \sigma_a = \sigma_y$

Using the relationship $\sigma_h = 2\sigma_a$:
$2\sigma_a - \nu \sigma_a = \sigma_y$
$\sigma_a (2 - \nu) = \sigma_y$
$\sigma_a = \frac{\sigma_y}{2 - \nu} = \frac{300 \text{ MPa}}{2 - 0.3} = \frac{300}{1.7} \approx 176.5$ MPa

Then, $\sigma_h = 2\sigma_a = 2 \times 176.5 \text{ MPa} \approx 353$ MPa.

*Answer:* The state of stress that would cause yielding according to the Maximum Strain Theory for a thin-walled cylinder where hoop stress is twice the axial stress is approximately $\sigma_a = 176.5$ MPa and $\sigma_h = 353$ MPa.

**Practice Question 1:**

A component is subjected to a plane stress condition with $\sigma_1 = 100$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = 0$. The material has a yield strength of 250 MPa and a Poisson's ratio of 0.3.
(a) Calculate the principal strains $\epsilon_1$ and $\epsilon_2$ in terms of Young's modulus $E$.
(b) Determine the tensile strain at yield, $\epsilon_y$, in terms of $E$.
(c) Using the Maximum Strain Theory, determine if the component will yield under this stress state.

*Answer to Practice Question 1:*
(a)
$\epsilon_1 = \frac{1}{E} [\sigma_1 - \nu(\sigma_2 + \sigma_3)] = \frac{1}{E} [100 - 0.3(50 + 0)] = \frac{1}{E} [100 - 15] = \frac{85}{E}$ MPa.
$\epsilon_2 = \frac{1}{E} [\sigma_2 - \nu(\sigma_1 + \sigma_3)] = \frac{1}{E} [50 - 0.3(100 + 0)] = \frac{1}{E} [50 - 30] = \frac{20}{E}$ MPa.
The maximum principal strain is $\epsilon_1 = \frac{85}{E}$.

(b)
From the uniaxial tensile test, $\epsilon_y = \frac{\sigma_y}{E} = \frac{250}{E}$ MPa.

(c)
According to the Maximum Strain Theory, yielding occurs when $\epsilon_{max} = \epsilon_y$.
Here, $\epsilon_{max} = \epsilon_1 = \frac{85}{E}$.
Comparing with $\epsilon_y = \frac{250}{E}$, we see that $\frac{85}{E} < \frac{250}{E}$.
Therefore, the maximum principal strain is less than the tensile strain at yield.

**Conclusion:** The component will **not** yield under this stress state according to the Maximum Strain Theory.

**Practice Question 2:**

For a material with a yield strength $\sigma_y = 400$ MPa and Poisson's ratio $\nu = 0.25$, what is the predicted yield stress in pure shear according to the Maximum Strain Theory?

*Answer to Practice Question 2:*
For pure shear, the principal stresses are $\sigma_1 = \tau$, $\sigma_2 = -\tau$, and $\sigma_3 = 0$.
The principal strains are:
$\epsilon_1 = \frac{1}{E} [\tau - \nu(-\tau + 0)] = \frac{\tau}{E}(1 + \nu)$
$\epsilon_2 = \frac{1}{E} [-\tau - \nu(\tau + 0)] = -\frac{\tau}{E}(1 + \nu)$
$\epsilon_3 = 0$

The maximum principal strain is $\epsilon_1 = \frac{\tau}{E}(1 + \nu)$.
The tensile strain at yield is $\epsilon_y = \frac{\sigma_y}{E}$.

According to the Maximum Strain Theory, failure occurs when $\epsilon_1 = \epsilon_y$:
$\frac{\tau}{E}(1 + \nu) = \frac{\sigma_y}{E}$
$\tau = \frac{\sigma_y}{1 + \nu}$

Substituting the given values:
$\tau = \frac{400 \text{ MPa}}{1 + 0.25} = \frac{400}{1.25} = 320$ MPa.

**Answer:** The predicted yield stress in pure shear is 320 MPa.

---

### 4. Important Points to Remember

*   **Ductile Materials Focus:** Maximum Strain Theory is primarily used for predicting yielding in ductile materials.
*   **Critical Parameter:** The theory hinges on the *maximum principal strain* reaching the *tensile strain at yield* ($\epsilon_y$).
*   **Uniaxial Basis:** Material properties ($\sigma_y, \epsilon_y$) are obtained from simple uniaxial tensile tests.
*   **Multiaxial Strain Calculation:** Accurate calculation of all principal strains under multiaxial stress is essential.
*   **Comparison to Other Theories:** Be aware of its limitations and how it compares to other theories like Maximum Stress, Maximum Shear Stress, and Von Mises. It's generally considered more accurate than Maximum Stress Theory for ductile materials but less so than Von Mises Theory.
*   **Failure Locus:** The set of stress states that cause failure defines a failure locus. The Maximum Strain Theory defines a specific shape for this locus in stress space.
*   **Hooke's Law:** The foundation for relating stresses to strains in the elastic region is Hooke's Law for multiaxial stress states.

---

### 5. Alignment with Course Outcomes

*   **CO1 (Understand theories of failure and material behaviour under various loading conditions):** This topic directly covers the "Maximum Strain Theory," a key failure theory, and explains how material behavior (specifically strain at yield) dictates failure under multiaxial loading conditions. (Knowledge Level: K2)
*   **CO2 (Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction):** While this topic doesn't directly address fatigue, understanding yielding is a prerequisite for understanding fatigue crack initiation. Yielding is a mechanism that can occur in the plastic zone at the tip of a fatigue crack.
*   **CO3 (Apply principles of fracture mechanics to analyse and design against crack initiation and propagation):** Yielding is the onset of plastic deformation, which is a precursor to ductile fracture. Knowing when yielding occurs is essential for understanding crack initiation.
*   **CO4 (Understand advanced failure mechanisms...):** This theory provides a baseline for understanding simpler failure modes (yielding) before moving on to more complex mechanisms like creep or corrosion-assisted failure.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
