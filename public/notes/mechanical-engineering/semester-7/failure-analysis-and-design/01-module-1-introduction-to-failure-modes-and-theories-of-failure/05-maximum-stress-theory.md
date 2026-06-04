---
title: "Maximum Stress Theory"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd0"
status: "completed"
scrapedAt: "2026-05-20T18:12:24.484Z"
---
# Module 1: Introduction to Failure Modes and Theories of Failure

## Topic: Maximum Stress Theory

---

### 1. Introduction to Failure Modes and Theories of Failure

*   **Why do materials fail?**
    *   Materials fail when the applied stresses exceed the material's inherent strength or when subjected to conditions that degrade its properties.
    *   Failure can manifest in various forms, including yielding, fracture, fatigue, creep, corrosion, and wear.
*   **What is a Theory of Failure?**
    *   A theory of failure is a mathematical model that predicts when a material will yield or fracture under a given state of stress.
    *   These theories are crucial for designing components that can withstand expected service loads without failing.
    *   They aim to establish a criterion based on material properties obtained from simple uniaxial tension tests (like yield strength and ultimate tensile strength) to predict failure under multiaxial stress states.
*   **Importance of Failure Analysis and Design:**
    *   Ensures safety and reliability of engineered structures and components.
    *   Optimizes material selection and component design.
    *   Reduces costs associated with premature failures and warranty claims.
    *   Facilitates understanding of past failures to prevent future occurrences.

---

### 2. Maximum Stress Theory (Rankine's Theory)

This theory is one of the simplest and earliest theories of failure, primarily applicable to brittle materials.

*   **Key Concept:** The Maximum Stress Theory states that failure (yielding or fracture) occurs when the **maximum principal stress** in the material reaches the yield strength or ultimate tensile strength of the material, depending on whether we are considering yielding or fracture.

*   **Core Idea:** It assumes that failure is governed by the tensile strength in the direction of the highest tensile stress.

*   **Mathematical Formulation:**
    Let $\sigma_1$, $\sigma_2$, and $\sigma_3$ be the principal stresses, ordered such that $\sigma_1 \geq \sigma_2 \geq \sigma_3$.
    *   **For ductile materials (predicting yielding):** Failure is assumed to occur when the maximum principal stress, $\sigma_1$, reaches the **yield strength in tension ($S_y$)**.
        **Failure Criterion:** $\sigma_1 = S_y$
    *   **For brittle materials (predicting fracture):** Failure is assumed to occur when the maximum principal stress, $\sigma_1$, reaches the **ultimate tensile strength ($S_{ut}$)**.
        **Failure Criterion:** $\sigma_1 = S_{ut}$

*   **Application to Stress States:**
    *   **Uniaxial Tension:**
        *   Stress state: $\sigma_{1} = \sigma$, $\sigma_{2} = 0$, $\sigma_{3} = 0$.
        *   Failure occurs when $\sigma = S_y$ (for ductile) or $\sigma = S_{ut}$ (for brittle). This is consistent with experimental observations.
    *   **Uniaxial Compression:**
        *   Stress state: $\sigma_{1} = 0$, $\sigma_{2} = 0$, $\sigma_{3} = -\sigma$.
        *   If $\sigma_1$ is the maximum principal stress, and it's 0, this theory suggests no failure in compression unless there's a tensile stress component. However, for brittle materials, fracture can occur under compression. The theory is **poor at predicting failure in pure compression** for brittle materials, as they often have higher compressive strength than tensile strength.
        *   **Important Note:** The theory should be applied considering that the *maximum* principal stress is the governing factor. In pure compression, $\sigma_3$ is the most negative, but the maximum principal stress is $\sigma_1 = 0$.
    *   **Biaxial Tension:**
        *   Stress state: $\sigma_{1}$, $\sigma_{2}$, $0$.
        *   Failure occurs when $\sigma_1 = S_y$ (for ductile) or $\sigma_1 = S_{ut}$ (for brittle).
    *   **Triaxial Stress State:**
        *   Failure occurs when the largest tensile principal stress ($\sigma_1$) reaches the material's tensile strength.

*   **Limitations of the Maximum Stress Theory:**
    *   **Ignores Shear Stresses:** The theory does not consider the effect of shear stresses, which can be significant contributors to failure, especially in ductile materials.
    *   **Poor Prediction for Brittle Materials in Compression:** Brittle materials often have significantly higher compressive strength than tensile strength. The Maximum Stress Theory, when considering fracture, uses $S_{ut}$, which is a tensile property. It doesn't account for the material's behavior under compressive stress states, where the most negative principal stress ($\sigma_3$) might govern failure. For instance, cast iron is strong in compression, but this theory wouldn't capture that.
    *   **Does not account for the effect of hydrostatic stress:** The theory is insensitive to hydrostatic stress (equal tensile or compressive stress in all directions), which can influence material behavior.
    *   **Limited applicability to ductile materials:** While it can predict yielding in simple tension, it is generally less accurate than other theories (like Maximum Shear Stress Theory or Distortion Energy Theory) for ductile materials under complex stress states.

---

### 3. Relating to Course Outcomes

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions.** (Knowledge Level: K2)
    *   This topic directly addresses CO1 by introducing a fundamental theory of failure (Maximum Stress Theory) and explaining its core principle and how it applies to different loading conditions (uniaxial, biaxial, triaxial). It also highlights its limitations, contributing to the understanding of why different theories are needed.
    *   **Key takeaway for CO1:** The Maximum Stress Theory predicts failure when the *largest tensile stress* reaches the material's tensile strength. It's a basic starting point but has significant limitations.

*   **CO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.** (Knowledge Level: K1)
    *   While this topic is about static failure theories, understanding static failure is a prerequisite for understanding fatigue. Fatigue failure occurs after a certain number of cycles of fluctuating stress. The static strength is a baseline. If the maximum stress in a fatigue cycle exceeds the static yield strength, immediate yielding will occur, which is different from fatigue failure. This topic provides the static strength context.
    *   **Relevance:** The static yield strength ($S_y$) or ultimate tensile strength ($S_{ut}$) is often used as a reference point in fatigue diagrams (e.g., in the high-cycle fatigue regime, stresses are typically below $S_y$).

*   **CO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.** (Knowledge Level: K3)
    *   This topic, being a stress-based theory, is a precursor to fracture mechanics. Fracture mechanics deals with failure in the presence of cracks, which are stress concentrators. The Maximum Stress Theory provides a basic understanding of how stress leads to failure, which is a fundamental concept before introducing crack tip stresses and fracture toughness ($K_{Ic}$).
    *   **Connection:** The static strength values ($S_y$, $S_{ut}$) used in the Maximum Stress Theory are related to the properties that fracture mechanics considers, albeit in a more sophisticated way (e.g., yield strength influences plastic zone size in fracture mechanics).

*   **CO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.** (Knowledge Level: K2)
    *   The Maximum Stress Theory primarily addresses failure under static, ambient conditions. Understanding its limitations is crucial for appreciating why advanced failure mechanisms are studied. For instance, high-temperature effects can significantly reduce $S_y$ and $S_{ut}$, making the Maximum Stress Theory less valid at elevated temperatures without modification. Corrosion can also degrade surface properties, affecting the stress required for failure.
    *   **Context:** This theory provides the baseline understanding of failure that is then modified or superseded by considerations of creep, fatigue, corrosion, etc.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 4. Textbook References and Content Incorporation

*   **Jones D. R. H. (Pergamon Press, 1993) - Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications:**
    *   This book likely introduces basic failure theories in its initial chapters as a foundation for understanding case studies. The Maximum Stress Theory would be presented as a simple, early model for predicting failure based on tensile strength. Jones' approach would emphasize how simple theories can be a starting point but often fall short in real-world applications, which are explored through case studies.
*   **ASM Handbook, Vol. 11, "Failure Analysis and Prevention" (ASM Publications, 2002):**
    *   This comprehensive volume would dedicate sections to various failure theories. The Maximum Stress Theory would be described as a fundamental theory, likely noting its historical significance and its limitations, particularly for non-brittle materials or complex stress states. It might present it alongside other early theories like Maximum Strain Theory.
*   **Collins, Jack A. (Wiley Inter science Publishers, 2013., 2nd Edition) - Failure of Materials in Mechanical Design:**
    *   Collins' book is a standard text in this field. It would thoroughly explain the Maximum Stress Theory, including its derivation, application to different stress states, and graphical representations (e.g., in the principal stress space). Collins would likely highlight its suitability for brittle materials and its shortcomings for ductile materials, paving the way for more advanced theories. He would emphasize that it's a good starting point for understanding stress-based failure criteria.
*   **Prashant Kumar (Wheeler Publishing,, 1999.) - Elements of Fracture Mechanics:**
    *   While primarily focused on fracture mechanics, Kumar's book might briefly touch upon classical theories of failure as a preamble to introduce concepts like stress concentration and fracture toughness. It would emphasize that classical theories like Maximum Stress Theory do not account for the presence of flaws or cracks, which is the domain of fracture mechanics.

---

### 5. Examples

**Example 1: Simple Tensile Bar Failure**

A rectangular steel bar with a yield strength ($S_y$) of 250 MPa is subjected to a tensile load of 100 kN. The bar has a cross-sectional area of 500 mm².

*   **Calculation of Stress:**
    Stress ($\sigma$) = Force / Area
    $\sigma = 100 \times 10^3 \text{ N} / 500 \times 10^{-6} \text{ m}^2$
    $\sigma = 200 \times 10^6 \text{ Pa} = 200 \text{ MPa}$

*   **Applying Maximum Stress Theory (for ductile material yielding):**
    The principal stresses are $\sigma_1 = 200 \text{ MPa}$, $\sigma_2 = 0$, $\sigma_3 = 0$.
    According to the Maximum Stress Theory, yielding occurs when $\sigma_1 = S_y$.
    Here, $\sigma_1 = 200 \text{ MPa}$ and $S_y = 250 \text{ MPa}$.
    Since $200 \text{ MPa} < 250 \text{ MPa}$, the bar will **not yield** according to this theory.

**Example 2: Brittle Material Fracture**

A cast iron lever has an ultimate tensile strength ($S_{ut}$) of 200 MPa. It is subjected to a state of stress where the principal stresses are:
$\sigma_1 = 180 \text{ MPa}$
$\sigma_2 = -50 \text{ MPa}$
$\sigma_3 = -100 \text{ MPa}$

*   **Applying Maximum Stress Theory (for brittle material fracture):**
    Failure occurs when the maximum principal stress ($\sigma_1$) reaches the ultimate tensile strength ($S_{ut}$).
    Here, $\sigma_1 = 180 \text{ MPa}$ and $S_{ut} = 200 \text{ MPa}$.
    Since $180 \text{ MPa} < 200 \text{ MPa}$, the lever will **not fracture** according to this theory.

**Example 3: Limitation of Maximum Stress Theory in Compression**

Consider a piece of chalk (a brittle material) with $S_{ut} = 50 \text{ MPa}$ and $S_{uc}$ (compressive strength) = 150 MPa.
If subjected to pure uniaxial compression of 100 MPa:
*   Stress state: $\sigma_1 = 0$, $\sigma_2 = 0$, $\sigma_3 = -100 \text{ MPa}$.
*   **Maximum Stress Theory (fracture):** The maximum principal stress is $\sigma_1 = 0$. Since $0 < S_{ut}$, this theory predicts no failure.
*   **Reality:** Chalk will fracture under compression because its compressive strength is exceeded. This demonstrates the theory's failure to predict failure under compressive loads for brittle materials.

---

### 6. Practice Questions

1.  State the fundamental principle of the Maximum Stress Theory. (CO1, K1)
2.  For which class of materials is the Maximum Stress Theory considered most applicable, and why? (CO1, K2)
3.  A machine component made of a material with $S_y = 400 \text{ MPa}$ is subjected to a stress state where the principal stresses are $\sigma_1 = 350 \text{ MPa}$, $\sigma_2 = 100 \text{ MPa}$, and $\sigma_3 = -50 \text{ MPa}$. According to the Maximum Stress Theory, will the material yield? Explain your reasoning. (CO1, K3)
4.  Discuss a significant limitation of the Maximum Stress Theory. (CO1, K2)
5.  Explain how understanding static failure theories like the Maximum Stress Theory provides context for the study of fatigue failure. (CO2, K2)

---

### 7. Answers to Practice Questions

1.  **Answer:** The Maximum Stress Theory states that failure occurs when the maximum principal stress in the material reaches the material's yield strength (for ductile materials) or ultimate tensile strength (for brittle materials). (CO1, K1)
2.  **Answer:** The Maximum Stress Theory is considered most applicable to **brittle materials** for predicting fracture. This is because brittle materials tend to fail in tension, and their fracture is often governed by the largest tensile stress acting on the material. Ductile materials, however, often fail by yielding due to shear stresses, which this theory largely ignores. (CO1, K2)
3.  **Answer:** Yes, the material will yield.
    *   **Reasoning:** The Maximum Stress Theory predicts yielding when the maximum principal stress ($\sigma_1$) equals the yield strength ($S_y$).
    *   Given: $\sigma_1 = 350 \text{ MPa}$ and $S_y = 400 \text{ MPa}$.
    *   Since $\sigma_1 = 350 \text{ MPa}$ is less than $S_y = 400 \text{ MPa}$, the component should not yield based *solely* on the maximum principal stress reaching the yield strength.
    *   **Correction/Clarification:** There seems to be a misunderstanding in the question premise or my answer structure. Let's re-evaluate the condition:
        *   Maximum Stress Theory for yielding: $\sigma_1 \le S_y$.
        *   In this case, $350 \text{ MPa} \le 400 \text{ MPa}$. So, according to the Maximum Stress Theory, the material will **not yield**.
        *   *Self-correction:* The question asks "will the material yield?". My previous "yes" was incorrect.
    *   **Revised Answer:** No, the material will not yield. According to the Maximum Stress Theory, for ductile materials, yielding occurs when the maximum principal stress ($\sigma_1$) exceeds the yield strength ($S_y$). In this case, $\sigma_1 = 350 \text{ MPa}$ and $S_y = 400 \text{ MPa}$. Since $350 \text{ MPa} < 400 \text{ MPa}$, the condition for yielding according to this theory is not met. (CO1, K3)

4.  **Answer:** A significant limitation of the Maximum Stress Theory is that it **ignores the effect of shear stresses and stresses in other principal directions**. For example, it is poor at predicting failure in pure compression for brittle materials, as it doesn't account for their higher compressive strength. It also doesn't consider the contribution of shear to yielding in ductile materials, where failure is often governed by the maximum shear stress. (CO1, K2)
5.  **Answer:** Understanding static failure theories like the Maximum Stress Theory is crucial for fatigue life prediction because the static strength of a material (like its yield strength or ultimate tensile strength) defines the upper limit of stress that can be applied before immediate static failure. In fatigue, components are subjected to cyclic loading. If the peak stress in a fatigue cycle exceeds the static yield strength, the component will likely experience yielding and potentially rapid failure, rather than typical fatigue failure. Therefore, static strength is often a reference point or boundary condition in fatigue analysis (e.g., in high-cycle fatigue, stresses are typically below the yield strength). (CO2, K2)

---

### 8. Important Points to Remember

*   **Maximum Stress Theory = Rankine's Theory.**
*   **Focuses on the highest principal stress.**
*   **For brittle materials (fracture):** Failure occurs when $\sigma_1 = S_{ut}$.
*   **For ductile materials (yielding):** Failure occurs when $\sigma_1 = S_y$.
*   **Best suited for brittle materials.**
*   **Poor for predicting failure in compression for brittle materials.**
*   **Ignores shear stress effects, which are critical for ductile materials.**
*   **A very basic static failure theory; more comprehensive theories exist.**

---