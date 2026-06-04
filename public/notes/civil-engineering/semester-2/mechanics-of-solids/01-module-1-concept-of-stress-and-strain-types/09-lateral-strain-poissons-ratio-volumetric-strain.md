---
title: "Lateral strain, Poisson’s ratio, volumetric strain"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f61"
status: "completed"
scrapedAt: "2026-05-20T18:37:16.437Z"
---
# Mechanics of Solids: Module 1 - Concept of Stress and Strain – Types

## Topic: Lateral Strain, Poisson's Ratio, Volumetric Strain

Welcome, everyone! Today, we're diving deeper into the fascinating world of how materials deform under load. We've already touched upon the basic concepts of stress and strain. Now, we'll explore some more nuanced aspects: how a material behaves not just in the direction of the applied force, but also sideways, and how this affects its overall volume. This is crucial for understanding material behavior and is directly linked to several of our course objectives, particularly **CO1** (recalling fundamental terms) and **CO2** (explaining material response).

### 1. Lateral Strain: The Sideways Story

When we apply a tensile force to a rod, say, pulling on a rubber band, we observe that it elongates in the direction of the pull. This is what we call **longitudinal strain** (or axial strain), which we've discussed before: $\epsilon_{longitudinal} = \frac{\Delta L}{L}$, where $\Delta L$ is the change in length and $L$ is the original length.

But have you ever noticed what happens to the *width* or *diameter* of that rubber band when you stretch it? It gets thinner, doesn't it? This change in dimension perpendicular to the direction of the applied force is what we call **lateral strain**.

Think of it like this: Imagine you have a cylindrical bar and you're pulling it axially. As it stretches in length, it has to "give" somewhere. That "giving" manifests as a reduction in its diameter or width. Conversely, if you compress the bar, it will shorten axially, but it will tend to bulge outwards.

So, we can define lateral strain as the strain occurring in a direction perpendicular to the applied axial stress.

Mathematically, if we have a bar with original diameter $D$ and it changes to $D'$, then the lateral strain, $\epsilon_{lateral}$, is given by:

$$ \epsilon_{lateral} = \frac{\Delta D}{D} = \frac{D' - D}{D} $$

where $\Delta D$ is the change in diameter. This applies similarly to width or any other lateral dimension.

This concept is vital for **CO2**, as it describes a key aspect of a material's response to stress.

### 2. Poisson's Ratio: The Material's "Bargain"

Now, this sideways shrinkage or bulging isn't random. For many materials, within their elastic limit, there's a consistent relationship between the longitudinal strain and the lateral strain. The material is essentially making a "bargain" – if it elongates in one direction, it contracts in the other, and vice versa, to conserve its material.

This constant ratio was first observed by Siméon Denis Poisson and is known as **Poisson's Ratio**. It's a fundamental material property, a sort of fingerprint that tells us how a material will behave laterally when stretched or compressed.

Poisson's Ratio, denoted by the Greek letter $\nu$ (nu), is defined as the ratio of lateral strain to longitudinal strain, provided that the lateral strain is caused by the longitudinal stress.

$$ \nu = -\frac{\text{Lateral Strain}}{\text{Longitudinal Strain}} = -\frac{\epsilon_{lateral}}{\epsilon_{longitudinal}} $$

Why the negative sign? Well, typically, when you apply a tensile stress (positive longitudinal strain, elongation), the material contracts laterally (negative lateral strain). So, $\epsilon_{lateral}$ is negative and $\epsilon_{longitudinal}$ is positive. The negative sign in the formula makes Poisson's ratio a positive value, which is standard for most engineering materials.

For example, if you pull a steel rod and it elongates by 0.1%, its diameter might decrease by 0.03%. In this case:
$\epsilon_{longitudinal} = +0.001$
$\epsilon_{lateral} = -0.0003$
$\nu = -\frac{-0.0003}{+0.001} = 0.3$

Poisson's ratio is a dimensionless quantity since it's a ratio of two strains. Its value typically ranges from 0 to 0.5 for most engineering materials.
*   **Metals** usually have $\nu$ between 0.25 and 0.35. Steel is around 0.3.
*   **Rubber** has a very high Poisson's ratio, close to 0.5. This is why it bulges out so much when compressed.
*   **Materials like cork** have a Poisson's ratio close to zero. When compressed, they don't bulge much. This is why cork is used in wine bottles – it keeps the seal tight without expanding much laterally.

**Remember this:** Poisson's ratio is an **elastic constant** and is a material property. It tells us about the "stickiness" or "compressibility" of the material in the lateral direction when subjected to axial stress. This directly helps us with **CO4**, as understanding material properties is key to choosing the right ones.

**Exam Tip:** Be careful with the sign convention! Always remember the negative sign in the Poisson's ratio formula. A common mistake is to forget it and report a negative ratio.

### 3. Volumetric Strain: How the Volume Changes

Now, let's consider the overall change in volume of a body when it's under stress. This is **volumetric strain**.

Imagine a small cube of material. When you apply stress, this cube might elongate in one direction, shorten in another, and change its width in a third. All these changes collectively affect its volume.

Volumetric strain is defined as the change in volume divided by the original volume.
$$ \epsilon_v = \frac{\Delta V}{V} $$
where $\Delta V$ is the change in volume and $V$ is the original volume.

How is this related to the strains we've already discussed? Let's consider a rectangular bar with original dimensions $L$, $B$, and $H$ (length, breadth, and height). Its original volume is $V = L \times B \times H$.

Now, let's apply a tensile stress only along the length $L$. This causes a longitudinal strain $\epsilon_L = \frac{\Delta L}{L}$ and lateral strains $\epsilon_B = \frac{\Delta B}{B}$ and $\epsilon_H = \frac{\Delta H}{H}$.

The new dimensions will be:
$L' = L + \Delta L = L(1 + \epsilon_L)$
$B' = B + \Delta B = B(1 + \epsilon_B)$
$H' = H + \Delta H = H(1 + \epsilon_H)$

The new volume is $V' = L' \times B' \times H' = L(1 + \epsilon_L) \times B(1 + \epsilon_B) \times H(1 + \epsilon_H)$
$V' = V (1 + \epsilon_L)(1 + \epsilon_B)(1 + \epsilon_H)$

The change in volume is $\Delta V = V' - V = V (1 + \epsilon_L)(1 + \epsilon_B)(1 + \epsilon_H) - V$
$\Delta V = V [(1 + \epsilon_L)(1 + \epsilon_B)(1 + \epsilon_H) - 1]$

Expanding the bracket:
$(1 + \epsilon_L)(1 + \epsilon_B)(1 + \epsilon_H) = 1 + \epsilon_L + \epsilon_B + \epsilon_H + \epsilon_L\epsilon_B + \epsilon_L\epsilon_H + \epsilon_B\epsilon_H + \epsilon_L\epsilon_B\epsilon_H$

Since strains are typically very small quantities (e.g., $10^{-3}$ or $10^{-4}$), their products ($\epsilon_L\epsilon_B$, etc.) are even smaller and can be neglected in most engineering calculations. This is a very important approximation!

So, $(1 + \epsilon_L)(1 + \epsilon_B)(1 + \epsilon_H) \approx 1 + \epsilon_L + \epsilon_B + \epsilon_H$

Therefore, $\Delta V \approx V [1 + \epsilon_L + \epsilon_B + \epsilon_H - 1]$
$\Delta V \approx V (\epsilon_L + \epsilon_B + \epsilon_H)$

Dividing by $V$ to get volumetric strain:
$$ \epsilon_v = \frac{\Delta V}{V} \approx \epsilon_L + \epsilon_B + \epsilon_H $$

This is a fundamental result: **The volumetric strain is approximately the sum of the strains along the three principal axes.**

Now, let's consider a common scenario: a uniaxial stress applied to a material. Suppose we apply a tensile stress $\sigma_x$ along the x-axis.
The longitudinal strain is $\epsilon_x = \frac{\sigma_x}{E}$ (from Hooke's Law, where $E$ is Young's Modulus).
Due to Poisson's ratio, the lateral strains in the y and z directions will be:
$\epsilon_y = -\nu \epsilon_x = -\nu \frac{\sigma_x}{E}$
$\epsilon_z = -\nu \epsilon_x = -\nu \frac{\sigma_x}{E}$

So, the volumetric strain in this uniaxial stress case is:
$\epsilon_v \approx \epsilon_x + \epsilon_y + \epsilon_z = \frac{\sigma_x}{E} + (-\nu \frac{\sigma_x}{E}) + (-\nu \frac{\sigma_x}{E})$
$$ \epsilon_v \approx \frac{\sigma_x}{E}(1 - 2\nu) $$

This formula is extremely useful! It tells us how the volume of a material changes under a simple tensile or compressive load, and this change depends on both Young's Modulus and Poisson's Ratio.

**What does this mean in practice?**
*   If $\nu < 0.5$, then $(1-2\nu)$ is positive. So, a tensile stress ($\sigma_x > 0$) will lead to an increase in volume ($\epsilon_v > 0$). A compressive stress will lead to a decrease in volume. This is typical for most solids.
*   If $\nu = 0.5$ (like rubber), then $(1-2\nu) = 0$. This implies that for materials with $\nu=0.5$, the volumetric strain is zero under uniaxial stress. This means their volume remains constant. Rubber is nearly incompressible in this sense – it just changes shape, not volume, when stretched or compressed.
*   If $\nu > 0.5$ (which is rare for isotropic materials but can occur in some composite materials), the volumetric strain would be negative under tension, meaning the volume decreases.

This understanding of volumetric strain connects directly to **CO2** (explaining material response) and **CO3** (calculating strain effects).

**Example:** Imagine a solid rubber ball. If you squeeze it uniformly from all sides (hydrostatic pressure), it will compress slightly. But if you were to somehow pull on it along one direction, it would stretch, and its cross-sectional area would increase, but its volume would remain remarkably constant. This is because rubber has a Poisson's ratio very close to 0.5.

### 4. Bulk Modulus and Volumetric Strain

We've seen how volumetric strain is related to stress. This relationship is characterized by another important material property called the **Bulk Modulus**, denoted by $K$.

Bulk Modulus is a measure of a substance's resistance to uniform compression. It's defined as the ratio of hydrostatic stress (uniform stress applied from all sides) to volumetric strain.

If a uniform pressure $p$ is applied to a body, it causes a volumetric strain $\epsilon_v$. The hydrostatic stress is $\sigma_h = -p$ (negative because pressure is compressive).
Then, $K = \frac{\text{Hydrostatic Stress}}{\text{Volumetric Strain}} = \frac{-p}{\epsilon_v}$.

So, $\epsilon_v = -\frac{p}{K} = -\frac{\sigma_h}{K}$.

For a material under hydrostatic stress $\sigma_h$, the volumetric strain is $\epsilon_v = \epsilon_x + \epsilon_y + \epsilon_z$.
If the stress is hydrostatic, $\sigma_x = \sigma_y = \sigma_z = \sigma_h$.
Then, $\epsilon_x = \frac{\sigma_h}{E} - \nu \frac{\sigma_h}{E} - \nu \frac{\sigma_h}{E} = \frac{\sigma_h}{E}(1 - 2\nu)$
Similarly, $\epsilon_y = \frac{\sigma_h}{E}(1 - 2\nu)$ and $\epsilon_z = \frac{\sigma_h}{E}(1 - 2\nu)$.

Thus, $\epsilon_v = \epsilon_x + \epsilon_y + \epsilon_z = 3 \times \frac{\sigma_h}{E}(1 - 2\nu)$.
$$ \epsilon_v = \frac{\sigma_h}{E}(3 - 6\nu) $$

Comparing this with $\epsilon_v = \frac{\sigma_h}{K}$, we get:
$$ K = \frac{E}{3(1 - 2\nu)} $$

This equation is a crucial link between Young's Modulus ($E$), Poisson's Ratio ($\nu$), and Bulk Modulus ($K$). It shows that a material with a high bulk modulus is difficult to compress volumetrically. Again, notice the factor $(1-2\nu)$.

**This relationship is a cornerstone for understanding material behavior under triaxial stress conditions and is fundamental to many advanced mechanics problems, contributing to CO4.**

**Quick Recall Tip:**
*   **Lateral Strain:** Change in width/diameter divided by original width/diameter.
*   **Poisson's Ratio ($\nu$):** - (Lateral Strain / Longitudinal Strain). A material property.
*   **Volumetric Strain ($\epsilon_v$):** Sum of strains in three mutually perpendicular directions. For uniaxial stress $\sigma_x$, $\epsilon_v \approx \frac{\sigma_x}{E}(1 - 2\nu)$.

### Connecting to Course Outcomes:

*   **CO1:** We've defined and discussed lateral strain, Poisson's ratio, and volumetric strain, recalling their fundamental meaning and mathematical representations.
*   **CO2:** By explaining how materials deform sideways and in volume, we are directly addressing the behavior and response of structural elements. The behavior of rubber vs. cork, or steel's typical Poisson's ratio, illustrates this well.
*   **CO3:** We've derived formulas for volumetric strain under uniaxial stress and shown how to calculate it based on applied stress and material properties like $E$ and $\nu$.
*   **CO4:** Poisson's ratio and the relationship derived for Bulk Modulus ($K$) are key elastic constants. We see how they are interconnected and how they define a material's resistance to deformation.
*   **CO6:** While this topic doesn't directly involve safe load calculation, understanding how materials deform volumetrically is a precursor to analyzing how a structure will behave under load and ensuring it doesn't deform excessively, which is the essence of proportioning cross-sections.

### Sample Questions and Answers

**Question 1 (Conceptual):** What happens to the volume of a steel rod if it is stretched uniformly along its length?

**Answer:** When a steel rod is stretched uniformly along its length, it experiences tensile stress, which causes elongation (positive longitudinal strain). Due to Poisson's ratio (typically around 0.3 for steel), the rod will contract in its lateral dimensions (negative lateral strain). Since Poisson's ratio for steel is less than 0.5, the volumetric strain is approximately positive ($\epsilon_v \approx \frac{\sigma_x}{E}(1 - 2\nu)$). Therefore, the volume of the steel rod will **increase**.

**Question 2 (Exam-oriented):** A bar of 20 mm diameter is subjected to a tensile stress of 150 MPa. If the material has a Young's modulus $E = 200$ GPa and Poisson's ratio $\nu = 0.3$, calculate the volumetric strain.

**Solution:**
Given:
Diameter $D = 20$ mm
Tensile stress $\sigma_x = 150$ MPa $= 150 \times 10^6$ Pa
Young's Modulus $E = 200$ GPa $= 200 \times 10^9$ Pa
Poisson's Ratio $\nu = 0.3$

We need to calculate the volumetric strain $\epsilon_v$.
The formula for volumetric strain under uniaxial stress is:
$\epsilon_v \approx \frac{\sigma_x}{E}(1 - 2\nu)$

Substitute the given values:
$\epsilon_v = \frac{150 \times 10^6 \text{ Pa}}{200 \times 10^9 \text{ Pa}}(1 - 2 \times 0.3)$
$\epsilon_v = \frac{150}{200000}(1 - 0.6)$
$\epsilon_v = 0.00075 \times 0.4$
$\epsilon_v = 0.0003$

The volumetric strain is $0.0003$ or $3 \times 10^{-4}$. This is a positive value, indicating an increase in volume.

**Question 3 (Conceptual):** A material has a Poisson's ratio of 0.5. What does this imply about its volume change when subjected to uniaxial tension?

**Answer:** If a material has a Poisson's ratio of $\nu = 0.5$, its volumetric strain under uniaxial stress is given by $\epsilon_v \approx \frac{\sigma_x}{E}(1 - 2\nu)$. Substituting $\nu = 0.5$, we get $\epsilon_v \approx \frac{\sigma_x}{E}(1 - 2 \times 0.5) = \frac{\sigma_x}{E}(1 - 1) = 0$. This implies that the **volume of the material remains constant** when it is subjected to uniaxial tension or compression. Materials like rubber exhibit this property very closely. They deform significantly in shape but their volume change is negligible.

This concludes our discussion on lateral strain, Poisson's ratio, and volumetric strain. These concepts are fundamental building blocks for everything we'll do in Mechanics of Solids! Keep practicing these formulas and their implications.
