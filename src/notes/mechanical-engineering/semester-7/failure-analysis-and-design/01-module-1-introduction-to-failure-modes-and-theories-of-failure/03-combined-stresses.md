---
title: "Combined stresses"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dce"
status: "completed"
scrapedAt: "2026-05-20T18:12:23.086Z"
---
# Failure Analysis and Design: Module 1 - Introduction to Failure Modes and Theories of Failure
## Topic: Combined Stresses

This module introduces the fundamental concepts of failure analysis and design, focusing on understanding how materials behave under various loading conditions. This topic specifically delves into the critical area of **combined stresses**, which is essential for accurately predicting material behavior and ensuring the integrity of engineered components.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of combined stresses and how they arise in mechanical components.
*   Apply relevant theories of failure to predict failure under combined stress states.
*   Relate the behavior of materials under combined stresses to the broader understanding of material behavior under various loading conditions (CO1).
*   Recognize the importance of combined stresses in designing against failure and predicting component lifespan.

---

### Course Outcomes Alignment:

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions. (Knowledge Level: K2)**
    *   This topic directly addresses CO1 by explaining how to handle complex stress states that occur in real-world applications, which are rarely subjected to simple uniaxial or biaxial loading. Understanding combined stresses is a prerequisite for applying failure theories effectively.

---

### 1. What are Combined Stresses?

Combined stresses occur when a component is subjected to more than one type of stress simultaneously. This is a common scenario in engineering design, where elements often experience a combination of:

*   **Tensile Stress ($\sigma$):** Stress that pulls the material apart.
*   **Compressive Stress ($\sigma$):** Stress that pushes the material together.
*   **Shear Stress ($\tau$):** Stress that causes sliding or twisting between adjacent layers.
*   **Bending Stress:** Tensile on one side and compressive on the other, arising from applied moments.
*   **Torsional Stress:** Shear stress caused by twisting a shaft.
*   **Pressure Stress:** Occurs in pressure vessels due to internal or external pressure.

**Example:** A rotating shaft under bending and torsion experiences combined stresses. A beam supporting a transverse load will have tensile and compressive stresses due to bending, and shear stresses due to the transverse load.

---

### 2. Stress State at a Point:

To analyze combined stresses, we consider the **stress state at a point** within a material. This is typically represented by a **stress tensor**, which captures all the normal and shear stress components acting on infinitesimal planes passing through that point.

In two dimensions (plane stress), the stress state at a point can be described by three components: $\sigma_x$, $\sigma_y$, and $\tau_{xy}$.

In three dimensions (general stress state), the stress state at a point is described by six independent components: $\sigma_x$, $\sigma_y$, $\sigma_z$, $\tau_{xy}$, $\tau_{yz}$, and $\tau_{zx}$.

**Reference:**
*   **Jones D. R. H. (1993). *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications***. This textbook likely introduces basic stress analysis concepts, including the representation of stress states.
*   **Jack A. Collins (2013). *Failure of Materials in Mechanical Design***. Collins' text is a prime resource for understanding how stress states lead to failure and how to analyze them.

---

### 3. Mohr's Circle for Combined Stresses:

Mohr's Circle is a graphical tool used to visualize the transformation of stresses from one coordinate system to another. It is particularly useful for:

*   Determining **principal stresses** ($\sigma_1, \sigma_2, \sigma_3$): The maximum and minimum normal stresses acting on planes where the shear stress is zero.
*   Determining **maximum shear stress** ($\tau_{max}$): The maximum shear stress acting on planes oriented at 45 degrees to the principal planes.
*   Visualizing stress states under combined loading.

**How to construct Mohr's Circle for combined stresses:**

1.  **Identify the stress components** acting on orthogonal planes (e.g., $\sigma_x, \sigma_y, \tau_{xy}$).
2.  **Plot the center of the circle:** $C = (\frac{\sigma_x + \sigma_y}{2}, 0)$.
3.  **Determine the radius of the circle:** $R = \sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2}$.
4.  **Draw the circle.** The stresses on any plane can be read from the circle. The horizontal axis represents normal stress, and the vertical axis represents shear stress.

**Example:** Consider a plane stress element with $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, and $\tau_{xy} = 40$ MPa.

*   Center: $C = (\frac{100+50}{2}, 0) = (75, 0)$
*   Radius: $R = \sqrt{(\frac{100-50}{2})^2 + 40^2} = \sqrt{25^2 + 40^2} = \sqrt{625 + 1600} = \sqrt{2225} \approx 47.17$ MPa.

The principal stresses will be $\sigma_1 = 75 + 47.17 = 122.17$ MPa and $\sigma_2 = 75 - 47.17 = 27.83$ MPa. The maximum shear stress is $\tau_{max} = R = 47.17$ MPa.

**Reference:**
*   **Jack A. Collins (2013). *Failure of Materials in Mechanical Design***. Collins provides detailed explanations and examples of using Mohr's Circle for various stress conditions.

---

### 4. Theories of Failure Under Combined Stresses:

Different failure theories are used to predict when a material will yield or fracture under combined stress states. These theories compare the calculated stresses to the material's yield strength ($\sigma_y$) or ultimate tensile strength ($\sigma_u$) determined from uniaxial tensile tests.

**Key Theories:**

*   **Maximum Shear Stress Theory (Tresca Criterion):**
    *   **Concept:** Yielding occurs when the maximum shear stress in the component exceeds the maximum shear stress in a uniaxial tensile test specimen at yield.
    *   **Condition:** $\tau_{max} \ge \tau_{yield}$
    *   For plane stress, $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$.
    *   From uniaxial test, $\sigma_{yield} = \sigma_y$, and $\tau_{yield} = \frac{\sigma_y}{2}$.
    *   Therefore, $\frac{\sigma_1 - \sigma_3}{2} \ge \frac{\sigma_y}{2}$, which simplifies to $\sigma_1 - \sigma_3 \ge \sigma_y$.
    *   **Applicability:** Good for ductile materials, generally conservative.

*   **Distortion Energy Theory (Von Mises Criterion):**
    *   **Concept:** Yielding occurs when the distortion energy per unit volume in the stressed component equals the distortion energy per unit volume in a uniaxial tensile test specimen at yield. This theory considers all stress components.
    *   **Condition:** $\sigma_{vm} \ge \sigma_y$, where $\sigma_{vm}$ is the von Mises equivalent stress.
    *   For plane stress, $\sigma_{vm} = \sqrt{\sigma_x^2 + \sigma_y^2 - \sigma_x\sigma_y + 3\tau_{xy}^2}$.
    *   For general 3D stress, $\sigma_{vm} = \sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{2}}$.
    *   **Applicability:** Generally considered more accurate for ductile materials than Tresca, as it incorporates the effects of all stress components.

*   **Maximum Normal Stress Theory (Rankine Criterion):**
    *   **Concept:** Yielding or fracture occurs when the maximum principal stress exceeds the material's tensile strength.
    *   **Condition:** $\sigma_{max} \ge \sigma_u$ (for fracture) or $\sigma_{max} \ge \sigma_y$ (for yielding, if considering only tensile yield).
    *   **Applicability:** Primarily used for brittle materials, where tensile strength is a critical factor. Less accurate for ductile materials as it ignores shear stress effects.

*   **Maximum Normal Strain Theory (Von Humboldt or Saint-Venant):**
    *   **Concept:** Yielding occurs when the maximum principal strain exceeds the principal strain at yield in a uniaxial tensile test.
    *   **Condition:** $\epsilon_{max} \ge \epsilon_{yield}$
    *   $\epsilon_{yield} = \frac{\sigma_y}{E}$ (where E is Young's Modulus)
    *   **Applicability:** Less commonly used in modern design compared to Von Mises or Tresca.

**Important Note:** When a material is subjected to a biaxial stress state (e.g., hoop and longitudinal stresses in a thin-walled cylinder), the failure criteria need to be applied using the principal stresses in the plane. For plane stress, $\sigma_3 = 0$.

**Reference:**
*   **Jones D. R. H. (1993). *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications***. This book will likely cover various failure theories and their application to material behavior.
*   **Jack A. Collins (2013). *Failure of Materials in Mechanical Design***. Collins provides extensive coverage of these theories and their validation through experimental data and case studies.
*   **ASM Handbook, Vol. 11 - Failure Analysis and Prevention (2002)**. This handbook is an invaluable resource for practical failure analysis, which inherently involves understanding combined stress states and failure theories.

---

### 5. Application in Failure Analysis and Design:

Understanding combined stresses and their associated failure theories is crucial for:

*   **Component Design:** Ensuring that components can withstand the operational stresses without yielding or fracturing.
*   **Failure Investigation:** Analyzing failed components to determine the root cause, which often involves identifying regions of high combined stress.
*   **Material Selection:** Choosing materials with appropriate strength properties to resist failure under combined loading.

**Example Scenario:** Consider a pressure vessel with internal pressure. This creates tensile stresses in both the circumferential (hoop) and longitudinal directions, along with radial stresses (though often negligible for thin-walled vessels). Failure analysis requires calculating these combined stresses and comparing them against the material's yield and ultimate strengths using appropriate failure theories.

---

### 6. Important Points to Remember:

*   **Real-world loading is rarely simple:** Most components experience combined stresses.
*   **Mohr's Circle is a powerful tool:** It simplifies the visualization and calculation of stresses on different planes.
*   **Ductile materials:** Typically use Maximum Shear Stress (Tresca) or Distortion Energy (Von Mises) theories. Von Mises is generally more accurate.
*   **Brittle materials:** Primarily use Maximum Normal Stress theory.
*   **Failure theories provide safety factors:** They allow engineers to design components with a margin of safety against failure.
*   **Stress concentrations:** Features like holes, notches, and fillets can create localized regions of high combined stress, often dominating the failure mechanism.

---

### 7. Practice Questions:

**Question 1:**
A thin-walled cylindrical pressure vessel has an internal pressure $p$. If the radius of the cylinder is $r$ and the wall thickness is $t$, derive expressions for the hoop stress ($\sigma_h$) and longitudinal stress ($\sigma_l$). How would you use the Von Mises criterion to predict yielding in terms of $\sigma_y$? (Assume negligible radial stress).

**Answer 1:**
*   **Hoop Stress ($\sigma_h$):** This stress acts tangentially to the circumference. Consider a cut along the length of the cylinder. The internal pressure $p$ acts on the projected area ($2r \times L$), and this force is resisted by the tensile stress acting on the wall's cross-sectional area ($2t \times L$).
    $p \times (2r \times L) = \sigma_h \times (2t \times L)$
    $\sigma_h = \frac{pr}{t}$

*   **Longitudinal Stress ($\sigma_l$):** This stress acts along the axis of the cylinder. Consider a cut perpendicular to the axis. The internal pressure $p$ acts on the circular area ($\pi r^2$), and this force is resisted by the tensile stress acting on the wall's cross-sectional area ($2\pi r \times t$).
    $p \times (\pi r^2) = \sigma_l \times (2\pi r \times t)$
    $\sigma_l = \frac{pr}{2t}$

*   **Von Mises Criterion:** For a plane stress state where $\sigma_x = \sigma_h$ and $\sigma_y = \sigma_l$, and $\tau_{xy} = 0$. The Von Mises equivalent stress is:
    $\sigma_{vm} = \sqrt{\sigma_h^2 + \sigma_l^2 - \sigma_h\sigma_l}$
    For yielding, $\sigma_{vm} \ge \sigma_y$.
    Substituting the expressions for $\sigma_h$ and $\sigma_l$:
    $\sigma_{vm} = \sqrt{(\frac{pr}{t})^2 + (\frac{pr}{2t})^2 - (\frac{pr}{t})(\frac{pr}{2t})} \ge \sigma_y$
    $\sigma_{vm} = \sqrt{\frac{p^2r^2}{t^2} + \frac{p^2r^2}{4t^2} - \frac{p^2r^2}{2t^2}} \ge \sigma_y$
    $\sigma_{vm} = \sqrt{\frac{p^2r^2}{t^2} (1 + \frac{1}{4} - \frac{1}{2})} \ge \sigma_y$
    $\sigma_{vm} = \sqrt{\frac{p^2r^2}{t^2} (\frac{4+1-2}{4})} = \sqrt{\frac{3p^2r^2}{4t^2}} = \frac{\sqrt{3}pr}{2t} \ge \sigma_y$
    Thus, the criterion for yielding is $\frac{\sqrt{3}pr}{2t} \ge \sigma_y$.

**Question 2:**
A solid circular shaft is subjected to an axial tensile load $P = 100$ kN and a torque $T = 50$ kNm. If the shaft has a diameter of $50$ mm, determine the principal stresses and the maximum shear stress. Use the Tresca criterion to assess if yielding will occur, given the yield strength of the material is $\sigma_y = 300$ MPa.

**Answer 2:**
*   **Axial Stress ($\sigma_x$):**
    $A = \frac{\pi d^2}{4} = \frac{\pi (50 \text{ mm})^2}{4} = 1963.5 \text{ mm}^2$
    $\sigma_x = \frac{P}{A} = \frac{100 \text{ kN}}{1963.5 \text{ mm}^2} = \frac{100 \times 10^3 \text{ N}}{1963.5 \times 10^{-6} \text{ m}^2} \approx 50.93 \text{ MPa}$ (Tensile)

*   **Torsional Shear Stress ($\tau_{xy}$):**
    The maximum shear stress occurs at the outer surface. The polar moment of inertia $J$ for a solid circular shaft is $J = \frac{\pi d^4}{32}$.
    $J = \frac{\pi (50 \text{ mm})^4}{32} = 490873.85 \text{ mm}^4$
    The shear stress is given by $\tau = \frac{Tr}{J}$. For maximum shear stress, use $r = d/2 = 25$ mm.
    $\tau_{max} = \frac{T(d/2)}{J} = \frac{(50 \text{ kNm})(25 \text{ mm})}{490873.85 \text{ mm}^4} = \frac{(50 \times 10^3 \text{ Nm})(25 \times 10^{-3} \text{ m})}{490873.85 \times 10^{-12} \text{ m}^4}$
    $\tau_{max} = \frac{1250 \text{ Nm}}{490873.85 \times 10^{-12} \text{ m}^4} \approx 254.65 \text{ MPa}$

*   **Stress State:** We have uniaxial tensile stress $\sigma_x = 50.93$ MPa and shear stress $\tau_{xy} = 254.65$ MPa. We can treat this as a plane stress problem where $\sigma_y = 0$.

*   **Principal Stresses using Mohr's Circle:**
    Center $C = (\frac{\sigma_x + \sigma_y}{2}, 0) = (\frac{50.93+0}{2}, 0) = (25.465, 0)$
    Radius $R = \sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2} = \sqrt{(\frac{50.93-0}{2})^2 + (254.65)^2}$
    $R = \sqrt{(25.465)^2 + (254.65)^2} = \sqrt{648.47 + 64846.7} = \sqrt{65495.17} \approx 255.92 \text{ MPa}$

    Principal Stresses:
    $\sigma_1 = C + R = 25.465 + 255.92 = 281.385 \text{ MPa}$
    $\sigma_2 = C - R = 25.465 - 255.92 = -230.455 \text{ MPa}$
    The third principal stress $\sigma_3 = 0$.

*   **Maximum Shear Stress:**
    The maximum shear stress in the context of combined stresses is $R$ from Mohr's circle, acting on planes oriented at 45 degrees to the principal stress planes.
    $\tau_{max} = R \approx 255.92 \text{ MPa}$.

*   **Tresca Criterion:**
    Yielding occurs if $\sigma_1 - \sigma_3 \ge \sigma_y$.
    Here, $\sigma_1 = 281.385$ MPa and $\sigma_3 = 0$ MPa.
    $\sigma_1 - \sigma_3 = 281.385 - 0 = 281.385$ MPa.
    Since $281.385 \text{ MPa} \ge 300 \text{ MPa}$ is **FALSE**, the shaft will **NOT** yield according to the Tresca criterion.

    *Self-Correction/Refinement*: It's important to consider the actual $\tau_{max}$ derived from the stress state. The maximum shear stress across all possible planes is $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} = \frac{281.385 - 0}{2} \approx 140.69$ MPa. The Tresca criterion is based on comparing $\tau_{max}$ to $\tau_{yield}$.
    $\tau_{yield}$ for uniaxial tension is $\sigma_y/2 = 300/2 = 150$ MPa.
    Since $140.69 \text{ MPa} < 150 \text{ MPa}$, yielding will **NOT** occur based on the Tresca criterion.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and Resources:

*   **Chapter 5: Theories of Failure** in *Failure of Materials in Mechanical Design* by Jack A. Collins.
*   **Chapters related to Stress Analysis** in *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications* by Jones D. R. H.
*   **Relevant sections in ASM Handbook, Vol. 11 - Failure Analysis and Prevention** on stress analysis and failure criteria.
*   **Elements of Fracture Mechanics** by Prashant Kumar may offer insights into how stress intensity factors are related to combined stresses in the presence of cracks, though this is more advanced than the basic failure theories covered here.

---
This concludes the topic on Combined Stresses. The ability to analyze and predict failure under these complex loading conditions is a cornerstone of effective failure analysis and design.