---
title: "stress – strain relation - Hooke’s law"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839e8"
status: "completed"
scrapedAt: "2026-05-20T17:46:08.522Z"
---
# Mechanics of Solids: Module 1 - Concept of Stress and Strain – Types

## Topic: Stress-Strain Relation - Hooke's Law

Welcome, everyone, to our exploration of the fascinating world of Mechanics of Solids! Today, we're diving deep into the fundamental relationship between **stress** and **strain**, a cornerstone of understanding how materials behave when subjected to forces. This relationship, encapsulated by **Hooke's Law**, is absolutely crucial. If you master this, you're well on your way to mastering structural analysis. Remember this: the strength and deformation of any structure – from a tiny watch spring to a massive bridge – all boil down to how the material inside responds to the loads it carries.

This topic directly contributes to our **Course Outcome 1 (CO1)**, where we aim to recall fundamental terms and theorems. Understanding the stress-strain relation is exactly that – recalling and internalizing a core theorem. Furthermore, as we progress, you'll see how this understanding will enable us to tackle **CO2** (explaining material behavior) and even start building towards **CO3** (applying principles to calculate stresses and strains).

### Revisiting the Basics: What are Stress and Strain Again?

Before we talk about their relationship, let's quickly refresh what stress and strain are. Think about it: if you pull on a rubber band, what happens? It stretches, right? And if you try to crush a piece of chalk, it might crack or break. These are all manifestations of forces acting on materials.

*   **Stress ($\sigma$)**: Imagine you're slicing a material. Stress is essentially the *internal resistance* per unit area that the material offers to these external forces. It's like the force each internal "particle" of the material is exerting on its neighbors to maintain its shape. If we have an axial force $P$ acting on a bar of cross-sectional area $A$, the axial stress is given by:
    $\sigma = \frac{P}{A}$
    We typically measure stress in units like Pascals (Pa), MegaPascals (MPa), or pounds per square inch (psi).

*   **Strain ($\epsilon$)**: Strain, on the other hand, is a measure of deformation. It's the *relative change in shape or size* of the material. For axial deformation, if a bar of original length $L$ elongates by an amount $\Delta L$ due to an applied force, the axial strain is:
    $\epsilon = \frac{\Delta L}{L}$
    Strain is a dimensionless quantity, meaning it has no units. It’s a ratio.

### The Crucial Link: The Stress-Strain Relationship

Now, the big question: how are stress and strain related? If I apply more force, I get more stress, and that usually leads to more deformation, i.e., more strain. But is this relationship linear? Does doubling the force double the deformation? This is precisely where **Hooke's Law** comes in.

#### Hooke's Law: The Linear Elastic Region

**Hooke's Law**, named after the English scientist Robert Hooke, states that within a certain limit, the stress induced in a material is directly proportional to the strain it produces. This "certain limit" is extremely important and is known as the **elastic limit** or the **proportionality limit**.

Mathematically, Hooke's Law can be expressed as:
$\sigma \propto \epsilon$
or
$\sigma = E \epsilon$

Here, the constant of proportionality, $E$, is a material property called the **Modulus of Elasticity** or **Young's Modulus**.

**Think of it like this:** Imagine stretching a spring. Up to a point, if you double the weight you hang from it, it stretches twice as much. That "up to a point" is the elastic limit. Beyond that point, the spring might deform permanently. The stiffness of that spring, how much it stretches per unit weight, is analogous to Young's Modulus ($E$) for the material. A higher $E$ means a stiffer material, like steel, which will deform less under the same load compared to a lower $E$ material like aluminum.

**Why is this important? (CO1 & CO2 Connection)**
This simple equation, $\sigma = E \epsilon$, is the bedrock of elastic analysis in mechanics of solids. It allows us to:
*   **Predict deformation:** If we know the material's $E$ and the applied stress, we can calculate the resulting strain, and thus the deformation ($\Delta L = \epsilon L = \frac{\sigma L}{E} = \frac{PL}{AE}$). This directly helps us address **CO2** by explaining how a material responds.
*   **Determine material properties:** If we can measure the stress and strain in an experiment (like a tensile test), we can calculate the material's modulus of elasticity, which is key for **CO4** (choosing appropriate principles to find elastic constants).

**Textbook Insight:** Authors like R.K. Bansal and Punmia et al. (in their respective "Strength of Materials" and "Mechanics of Materials" texts) emphasize that this linear relationship is fundamental for elastic deformation. They often illustrate it using stress-strain curves obtained from tensile tests.

#### The Stress-Strain Curve: Visualizing Hooke's Law

The best way to understand Hooke's Law and material behavior is to look at a typical **stress-strain curve** for a ductile material (like mild steel) under tension.

**(Imagine a graph here: Strain on the x-axis, Stress on the y-axis)**

1.  **Elastic Region (Proportionality Limit and Elastic Limit):** The initial portion of the curve is a straight line passing through the origin. This is where Hooke's Law holds true. Stress is directly proportional to strain. If you remove the load in this region, the material returns to its original shape. The point where the curve starts to deviate from linearity is the **proportionality limit**. A bit further along, but still within this initial phase, is the **elastic limit**, beyond which permanent deformation occurs. For most engineering purposes, these two points are often considered very close.

2.  **Yielding:** As we continue to increase the load, we reach a point where the material starts to deform significantly without a substantial increase in stress. This is called **yielding**. For mild steel, there's a distinct **upper yield point** and a slightly lower **lower yield point**. This is where the material "gives way" temporarily. This is a critical point for design, as yielding can lead to unacceptable deformations even if the material doesn't break.

3.  **Strain Hardening (Work Hardening):** After yielding, to cause further deformation, we need to apply more stress. The material becomes stronger and harder due to internal structural changes. This is the **strain hardening** or **work hardening** region. The stress-strain curve starts to rise again, but it's no longer linear.

4.  **Ultimate Tensile Strength (UTS):** This is the maximum stress the material can withstand before it starts to neck. The stress shown on the curve is generally "engineering stress" (calculated using the original cross-sectional area), so even though the material is being loaded more, the calculated stress might seem to drop after UTS because the actual cross-sectional area is reducing significantly.

5.  **Fracture (Breaking Point):** Finally, the material breaks. The stress at which fracture occurs is the **fracture strength**.

**Key Takeaway for Exams (CO1 & CO2):** You *must* be able to sketch and label a typical stress-strain curve and explain the different regions. The linear portion is where Hooke's Law applies. The yield strength is a crucial design parameter.

#### Modulus of Elasticity (E) and other Elastic Constants

As we saw, $E$ is the slope of the linear portion of the stress-strain curve. It's a fundamental material property that tells us about stiffness.

However, materials can deform in more ways than just stretching axially. For example, applying pressure from all sides will cause a volume change. This leads to other elastic constants:

*   **Modulus of Rigidity (G) or Shear Modulus:** This relates shear stress to shear strain. When you twist a shaft or apply forces parallel to a surface, the material deforms by shearing. $G$ is the constant of proportionality in the shear stress-shear strain relationship: $\tau = G \gamma$, where $\tau$ is shear stress and $\gamma$ is shear strain. Think of pushing the top of a book while keeping the bottom fixed; the pages slide relative to each other.

*   **Bulk Modulus (K):** This relates hydrostatic pressure (pressure applied equally in all directions) to the resulting volumetric strain. It measures a material's resistance to compression.

*   **Poisson's Ratio ($\mu$ or $\nu$):** This is a very important concept that links axial strain to lateral (sideways) strain. When you stretch a rubber band axially, it gets thinner sideways. Poisson's ratio is the ratio of the lateral strain to the axial strain:
    $\mu = -\frac{\text{Lateral Strain}}{\text{Axial Strain}}$
    The negative sign is there because when you stretch axially (positive axial strain), the lateral dimension usually decreases (negative lateral strain), resulting in a positive Poisson's ratio. For most common engineering materials, Poisson's ratio is between 0.25 and 0.35.

**Interrelation of Elastic Constants (CO4 Connection):** For isotropic materials (materials that have the same properties in all directions), these elastic constants are not independent. There are relationships connecting them. For example:
$E = 2G(1 + \mu)$
$E = 3K(1 - 2\mu)$
Knowing any two of $E, G, K, \mu$ allows you to calculate the others, which is directly relevant to **CO4**.

**Example Scenario:** Imagine you're designing a telescopic antenna for a satellite. You need to select a material. You know the forces it will experience and the maximum allowable extension. You'll need to select a material with a high Modulus of Elasticity ($E$) to keep the extension small (related to **CO6** - proportioning cross-sections). If the antenna also twists, you'll need to consider the Modulus of Rigidity ($G$). And if it's compressed radially, Poisson's ratio ($\mu$) becomes important.

### Limitations of Hooke's Law

It's vital to remember that Hooke's Law is only valid within the **elastic limit**.
*   **Beyond the Elastic Limit:** If a material is stressed beyond its elastic limit, it will undergo **plastic deformation**. This means that when the load is removed, it will not return to its original shape; it will remain permanently deformed. This is like overstretching that rubber band so much it loses its ability to snap back completely.
*   **Material Dependence:** Hooke's Law is a good approximation for many materials (metals, some polymers, ceramics) in their elastic range. However, some materials, like rubber or biological tissues, exhibit highly non-linear elastic behavior even at small strains.

**Exam Tip:** Questions might test your understanding of the range of validity of Hooke's Law. Always be mindful of the elastic limit.

### Practical Applications and Examples

1.  **Designing Bridges and Buildings (CO6):** Engineers use Hooke's Law extensively. When designing a steel beam for a bridge, they calculate the expected stress due to traffic loads. Knowing the Modulus of Elasticity of steel, they can then calculate the expected deflection (strain) of the beam to ensure it remains within acceptable limits. If the calculated deflection is too large, they might need a stronger beam or a different material.

2.  **Precision Instruments (CO1 & CO2):** In sensitive instruments like scales or pressure gauges, springs are used. The accuracy of these instruments relies on the spring material obeying Hooke's Law within the operational range. If the spring material yields, the instrument will give incorrect readings.

3.  **Understanding Material Failure (CO6):** While Hooke's Law deals with elastic behavior, the stress-strain curve helps us understand failure. A brittle material (like glass or cast iron) has a small elastic region and fractures suddenly with little or no yielding. A ductile material (like mild steel) has a significant plastic region before fracture. Knowing these behaviors allows engineers to design structures that fail in a predictable and safe manner.

**Analogy:** Imagine a bouncy ball (elastic) versus a piece of clay (plastic). If you drop the bouncy ball, it deforms and springs back. If you drop the clay, it deforms and stays deformed. Hooke's Law describes the bouncy ball's behavior (within limits).

### Summary and Key Points to Remember

*   **Hooke's Law:** Within the elastic limit, stress is directly proportional to strain ($\sigma = E \epsilon$).
*   **Modulus of Elasticity ($E$):** The constant of proportionality, a measure of material stiffness. It's the slope of the linear portion of the stress-strain curve.
*   **Elastic Limit:** The point beyond which permanent deformation occurs. Hooke's Law is *not* valid beyond this point.
*   **Stress-Strain Curve:** A graphical representation of material behavior under load, showing elastic and plastic regions, yield strength, UTS, and fracture point.
*   **Other Elastic Constants:** Modulus of Rigidity ($G$), Bulk Modulus ($K$), and Poisson's Ratio ($\mu$) describe other modes of deformation and are related for isotropic materials.
*   **Application:** Hooke's Law is fundamental for predicting deformations and ensuring the safe design of structures and components.

Understanding this relationship is your first major step in Mechanics of Solids. It’s a concept you’ll revisit countless times. Make sure you’re comfortable with the definitions and the basic equation.

---

### Sample Questions with Answers

**Q1. What is the fundamental statement of Hooke's Law? Under what condition is it valid?**

**Answer:** Hooke's Law states that within the **elastic limit**, stress induced in a material is directly proportional to the strain it produces. It is mathematically expressed as $\sigma = E \epsilon$. The condition for its validity is that the applied stress must not exceed the **elastic limit** (or proportionality limit) of the material. Beyond this limit, the deformation becomes permanent (plastic), and the linear relationship no longer holds.

**(Conceptual Link: CO1, CO2 - Recalls definition and condition of validity)**

**Q2. A steel rod of 20 mm diameter and 500 mm length is subjected to an axial tensile load of 50 kN. If the Modulus of Elasticity for steel is 200 GPa, calculate the stress induced and the elongation of the rod.**

**Solution:**
Given:
Diameter, $d = 20$ mm
Radius, $r = d/2 = 10$ mm $= 0.01$ m
Length, $L = 500$ mm $= 0.5$ m
Axial Tensile Load, $P = 50$ kN $= 50 \times 10^3$ N
Modulus of Elasticity, $E = 200$ GPa $= 200 \times 10^9$ Pa

1.  **Calculate the cross-sectional area (A):**
    $A = \pi r^2 = \pi (0.01 \text{ m})^2 = \pi \times 0.0001 \text{ m}^2 \approx 3.14159 \times 10^{-4} \text{ m}^2$

2.  **Calculate the stress ($\sigma$):**
    $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \text{ N}}{3.14159 \times 10^{-4} \text{ m}^2}$
    $\sigma \approx 159.15 \times 10^6 \text{ Pa} = 159.15 \text{ MPa}$

3.  **Calculate the strain ($\epsilon$):**
    Using Hooke's Law, $\sigma = E \epsilon$, so $\epsilon = \frac{\sigma}{E}$
    $\epsilon = \frac{159.15 \times 10^6 \text{ Pa}}{200 \times 10^9 \text{ Pa}} = 0.00079575$

4.  **Calculate the elongation ($\Delta L$):**
    Strain is also defined as $\epsilon = \frac{\Delta L}{L}$, so $\Delta L = \epsilon \times L$
    $\Delta L = 0.00079575 \times 0.5 \text{ m} = 0.000397875 \text{ m}$
    $\Delta L \approx 0.398$ mm

**Answer:** The stress induced in the rod is approximately 159.15 MPa, and the elongation of the rod is approximately 0.398 mm.

**(Conceptual Link: CO3 - Applies Hooke's Law to calculate stress and strain/deformation. CO4 - Uses material property E.)**

**Q3. Explain the significance of the yield point in a stress-strain curve.**

**Answer:** The yield point (or yield strength) is a critical parameter in material science and engineering design. It represents the stress level at which a material begins to deform plastically. In the elastic region (before the yield point), deformation is temporary; the material returns to its original shape upon unloading. However, once the stress exceeds the yield point, the material undergoes permanent deformation. This means that even after the load is removed, the material will remain distorted. For many structural applications, significant permanent deformation is unacceptable as it can lead to loss of function or structural instability. Therefore, engineering designs typically ensure that the stresses in components remain well below the yield strength of the material to prevent plastic deformation and ensure safety and serviceability.

**(Conceptual Link: CO2 - Explains material behavior. CO6 - Relates to design considerations.)**

**Q4. What is Poisson's Ratio and why is it important?**

**Answer:** Poisson's Ratio ($\mu$ or $\nu$) is a dimensionless material property that describes the tendency of a material to deform in directions perpendicular to the direction of applied load. Specifically, it is defined as the ratio of the lateral strain (strain in the transverse direction) to the axial strain (strain in the direction of the applied load): $\mu = -\frac{\text{Lateral Strain}}{\text{Axial Strain}}$.

It's important because:
1.  **Predicting Multi-axial Deformation:** It allows engineers to predict how a material will deform not just along the axis of the load but also sideways. For example, when a bar is stretched axially, it narrows laterally.
2.  **Interrelation of Elastic Constants:** It plays a crucial role in the relationships between other elastic constants (like $E$, $G$, and $K$) for isotropic materials. Knowing Poisson's ratio helps in determining these other properties if one is known, aiding in material characterization (**CO4**).
3.  **Design Considerations:** Understanding Poisson's ratio is vital in designing components where lateral expansion or contraction due to axial loading could be critical, such as in pressure vessels or fitting parts.

**(Conceptual Link: CO1 - Recalls definition. CO4 - Importance in material properties. CO2 - Explains behavior.)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
