---
title: "Young’s modulus of elasticity"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839e9"
status: "completed"
scrapedAt: "2026-05-20T17:46:09.305Z"
---
# MECHANICS OF SOLIDS

## MODULE 1: CONCEPT OF STRESS AND STRAIN – TYPES

### TOPIC: YOUNG'S MODULUS OF ELASTICITY (E)

**(Relating to CO1, CO2, CO3, CO4)**

Hello everyone! Welcome back to our journey into the fascinating world of Mechanics of Solids. Today, we're going to delve into one of the most fundamental material properties that dictates how solid materials behave when subjected to forces: **Young's Modulus of Elasticity**, often denoted by the symbol 'E'. This topic is absolutely crucial, forming the bedrock for understanding stress and strain, which we've begun to explore.

Think about it: when you pull on a rubber band, it stretches. When you press down on a steel rod, it might deform slightly, but then it springs back to its original shape. This ability of a material to deform and then recover is called **elasticity**. Young's Modulus is our way of quantifying *how stiff* a material is in resisting this elastic deformation under tension or compression.

#### What Exactly is Young's Modulus?

Let's start with a clear definition, drawing from our foundational understanding of stress and strain. You'll recall that:

*   **Stress ($\sigma$)** is the internal resistance per unit area that a material offers to an applied external force. It's like the force packed into a tiny cross-section. We measure it in Pascals (Pa) or Megapascals (MPa) or N/mm².
*   **Strain ($\epsilon$)** is the measure of deformation. It's the change in dimension (like length) divided by the original dimension. It's a dimensionless quantity.

Now, for many materials, especially metals and other common engineering materials, there's a beautiful relationship between stress and strain within their **elastic limit**. This is known as **Hooke's Law**. Professor R.K. Bansal, in his "A Text book of Strength of Materials," highlights this law beautifully. Hooke's Law states that *stress is directly proportional to strain within the elastic limit*.

Mathematically, this proportionality can be written as:

$\sigma \propto \epsilon$

Or, introducing a constant of proportionality:

$\sigma = E \epsilon$

And this constant of proportionality, my friends, *is* **Young's Modulus of Elasticity (E)**. It's also often called the **Modulus of Elasticity**.

#### Understanding the 'Stiffness' Concept

So, what does this 'E' tell us? It's a measure of a material's stiffness.

*   A material with a **high Young's Modulus** (like steel or diamond) is very stiff. It means you need to apply a *large stress* to get a *small amount of strain*. They resist deformation very effectively. Imagine trying to stretch a thick steel bar – it's tough!
*   A material with a **low Young's Modulus** (like rubber or aluminum) is less stiff, or more flexible. It means a *small stress* can cause a *significant strain*. They deform more easily. Think about stretching a rubber band – it stretches quite a bit even with a gentle pull.

This directly connects to **CO2**, where we explain the behavior of structural elements. If you're designing a bridge, you want materials that don't sag too much under load. That means you'd look for materials with a high Young's Modulus for critical load-bearing components. Conversely, if you need a shock absorber, you might want a material that can deform significantly and absorb energy, suggesting a lower Young's Modulus might be beneficial in certain applications.

#### Real-World Analogies and Examples

Let's make this even more concrete.

*   **The Guitar String:** Imagine two guitar strings, one made of steel and one made of nylon. When you pluck them with the same tension, the steel string will vibrate at a much higher frequency than the nylon string. Why? Because the steel string is much stiffer (higher E) and doesn't stretch as much. It returns to its original shape much quicker, leading to higher frequency vibrations. The nylon string, being more flexible (lower E), stretches more and vibrates slower. This illustrates how E relates to stiffness and response to forces.

*   **Stretching a Wire:** Let's say we have two wires of the same length and cross-sectional area. One is made of copper, and the other is made of steel. If we apply the same tensile force to both, which one will elongate more? Based on what we've discussed, the copper wire will elongate more because copper generally has a lower Young's Modulus than steel. Steel is significantly stiffer. This is a classic scenario you might encounter in problems related to **CO3**, where you calculate elongations under axial loads.

#### The Formula and its Application

From $\sigma = E \epsilon$, we can rearrange it to find the strain:

$\epsilon = \frac{\sigma}{E}$

And since stress ($\sigma$) is Force (F) per Area (A), $\sigma = \frac{F}{A}$.
Substituting this, we get:

$\epsilon = \frac{F/A}{E}$

Now, recall that strain is also the change in length ($\Delta L$) divided by the original length ($L$): $\epsilon = \frac{\Delta L}{L}$.

So, we can equate the two expressions for strain:

$\frac{\Delta L}{L} = \frac{F}{AE}$

This is a fundamental and incredibly useful formula! It allows us to calculate the **elongation or shortening ($\Delta L$)** of a member subjected to an axial tensile or compressive force (F), given its original length (L), cross-sectional area (A), and Young's Modulus (E).

$\Delta L = \frac{FL}{AE}$

This equation is vital for **CO3** (calculating strains and stress resultants) and **CO6** (proportioning cross-sections to carry loads safely). If you know the maximum allowable elongation for a component, you can use this formula to determine the required cross-sectional area or select a material with an appropriate Young's Modulus.

#### Units of Young's Modulus

Since $\sigma = E \epsilon$, and strain ($\epsilon$) is dimensionless, the units of Young's Modulus (E) are the same as the units of stress.
Commonly, E is expressed in:
*   Pascals (Pa) or GigaPascals (GPa) in the SI system.
*   Pounds per square inch (psi) or kilo-pounds per square inch (ksi) in the US customary system.

For engineering calculations, especially in mechanics of solids, we often work with Megapascals (MPa), where 1 MPa = 1 N/mm². This is convenient because forces are often in Newtons and dimensions in millimeters.

#### Obtaining Values for Young's Modulus

How do we get these values? Experimental testing, primarily. The most common test is the **Tensile Test**, as described in detail by H.J. Shah and S.B. Junnarkar in "Mechanics of Structures." During a tensile test, a carefully prepared specimen of the material is pulled at a controlled rate, and the applied load and resulting elongation are measured. This data is plotted as a stress-strain curve. The slope of the linear portion of this curve, within the elastic limit, *is* the Young's Modulus. This directly addresses **CO4** – choosing appropriate principles to find elastic constants.

**Remember this:** Young's Modulus (E) is an **intrinsic material property**. It does not depend on the dimensions or shape of the specimen, only on the material itself. Different materials have different values of E. For example, steel has a high E (around 200 GPa), aluminum has a lower E (around 70 GPa), and wood has a significantly lower and anisotropic E (meaning it varies with direction).

#### Poisson's Ratio: A Companion Concept

While we're on the topic of elastic behavior, it's worth mentioning a related concept called **Poisson's Ratio ($\nu$)**. When you stretch a bar in one direction (say, axially), it not only elongates in that direction but also contracts in the perpendicular directions. Poisson's Ratio quantifies this phenomenon. It's defined as the ratio of transverse (lateral) strain to axial strain.

$\nu = -\frac{\text{Transverse Strain}}{\text{Axial Strain}}$

The negative sign is there because if axial strain is positive (elongation), transverse strain is negative (contraction), and vice-versa. For most engineering materials, Poisson's ratio is a positive value between 0 and 0.5. For example, steel has a $\nu$ of about 0.28. This concept is also crucial for understanding the full elastic behavior of materials and is often covered alongside Young's Modulus, touching upon **CO1**.

#### What if the material isn't uniform or the load isn't axial?

This is where things get more complex, and we start moving into topics like stress and strain transformations (**CO5**) and analyzing beams under bending (**CO3**). When a beam bends, the top surface is under compression, and the bottom surface is under tension. Young's Modulus plays a critical role in determining how much the beam deflects under the applied bending moment. The formula for bending stress and deflection heavily relies on E, often combined with the moment of inertia (I) of the cross-section, in a term called the **flexural rigidity (EI)**. A higher EI means greater resistance to bending.

#### Key Takeaways for Exams:

*   **Definition:** Young's Modulus is the ratio of stress to strain within the elastic limit.
*   **Formula:** $\sigma = E \epsilon$.
*   **Application:** Used to calculate elongation/shortening ($\Delta L = \frac{FL}{AE}$) and is a key parameter in bending and torsion calculations.
*   **Meaning:** A measure of material stiffness. High E = Stiff, Low E = Flexible.
*   **Units:** Same as stress (e.g., GPa, MPa, psi).
*   **Property:** An intrinsic material property, determined experimentally.

Understanding Young's Modulus is your first major step in quantifying the mechanical response of solid materials. Master this, and the subsequent concepts will build upon this strong foundation.

---

### SAMPLE QUESTIONS AND ANSWERS

**Q1. Define Young's Modulus of Elasticity. What does it represent?**

**Answer:**
Young's Modulus of Elasticity, denoted by 'E', is a fundamental material property that quantifies the stiffness of an elastic material. It is defined as the ratio of stress to strain within the elastic limit of the material, as stated by Hooke's Law: $\sigma = E \epsilon$. It represents how much a material will deform elastically under a given applied stress. A higher Young's Modulus indicates a stiffer material that deforms less for a given stress, while a lower Young's Modulus indicates a more flexible material that deforms more.

**(Relates to CO1 - Recall fundamental terms; CO2 - Explain behavior)**

**Q2. A steel rod of 20 mm diameter and 2 m length is subjected to a tensile load of 50 kN. If Young's Modulus for steel is 200 GPa, calculate the elongation of the rod.**

**Answer:**
This is a direct application of the elongation formula derived from Young's Modulus.

**Given:**
*   Diameter, $d = 20$ mm
*   Radius, $r = d/2 = 10$ mm
*   Length, $L = 2$ m $= 2000$ mm
*   Tensile Load, $F = 50$ kN $= 50 \times 10^3$ N
*   Young's Modulus, $E = 200$ GPa $= 200 \times 10^3$ MPa $= 200 \times 10^3$ N/mm²

**1. Calculate the cross-sectional area (A):**
$A = \pi r^2 = \pi \times (10 \text{ mm})^2 = 100\pi \text{ mm}^2 \approx 314.16 \text{ mm}^2$

**2. Use the elongation formula:**
$\Delta L = \frac{FL}{AE}$

**3. Substitute the values:**
$\Delta L = \frac{(50 \times 10^3 \text{ N}) \times (2000 \text{ mm})}{(314.16 \text{ mm}^2) \times (200 \times 10^3 \text{ N/mm}^2)}$
$\Delta L = \frac{100 \times 10^6}{62.832 \times 10^6}$ mm
$\Delta L = \frac{100}{62.832}$ mm
$\Delta L \approx 1.59$ mm

**Therefore, the elongation of the steel rod is approximately 1.59 mm.**

**(Relates to CO3 - Apply principles to calculate strains; CO4 - Use formula to find elastic constants; CO6 - Calculate safe load/proportion cross-section implicitly by understanding deformation)**

**Q3. A wire made of a material has a Young's Modulus of 100 GPa. Another wire of the same dimensions is made of a material with a Young's Modulus of 200 GPa. If both wires are subjected to the same tensile load, which wire will elongate more and why?**

**Answer:**
The wire made of the material with a Young's Modulus of **100 GPa** will elongate more.

**Reasoning:**
Young's Modulus (E) is a measure of stiffness. A lower Young's Modulus means the material is less stiff and will deform more under the same applied stress. The elongation ($\Delta L$) of a wire under axial load is given by $\Delta L = \frac{FL}{AE}$. For wires of the same dimensions (same L and A) and subjected to the same load (same F), the elongation is inversely proportional to Young's Modulus: $\Delta L \propto \frac{1}{E}$. Therefore, the wire with the lower Young's Modulus (100 GPa) will experience a greater elongation compared to the wire with the higher Young's Modulus (200 GPa).

**(Relates to CO2 - Explain behavior; CO4 - Understand elastic constants)**

**Q4. Explain the significance of the term "elastic limit" when discussing Young's Modulus.**

**Answer:**
The "elastic limit" is crucial because Hooke's Law, and therefore the relationship $\sigma = E \epsilon$, is only valid *within* this limit. The elastic limit is the maximum stress a material can withstand without undergoing permanent deformation. If a material is stressed beyond its elastic limit, it enters the **plastic deformation** region. In this plastic region, the strain is no longer directly proportional to stress, and when the load is removed, the material will not return to its original shape, retaining some permanent deformation. Young's Modulus describes the material's stiffness *only* during this recoverable elastic deformation.

**(Relates to CO1 - Recall fundamental terms; CO2 - Explain behavior)**

**Q5. What are the units of Young's Modulus and why are they the same as stress?**

**Answer:**
The units of Young's Modulus are the same as the units of stress, typically Pascals (Pa), Megapascals (MPa), or Gigapascals (GPa) in the SI system, or psi in the imperial system. This is because Young's Modulus (E) is defined as the ratio of stress ($\sigma$) to strain ($\epsilon$): $E = \frac{\sigma}{\epsilon}$. Stress has units of force per area (e.g., N/m² or N/mm²), which is pressure. Strain, however, is a ratio of change in length to original length ($\Delta L / L$), making it a dimensionless quantity. Since strain is dimensionless, the units of E must be the same as the units of stress.

**(Relates to CO1 - Recall fundamental terms)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
