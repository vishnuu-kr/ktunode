---
title: "Bulk modulus of elasticity, relationships between elastic constants"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839f0"
status: "completed"
scrapedAt: "2026-05-20T17:46:14.869Z"
---
# MECHANICS OF SOLIDS - Module 1: Concept of Stress and Strain – Types

## Topic: Bulk Modulus of Elasticity and Relationships Between Elastic Constants

Welcome, everyone! Today, we're going to delve deeper into the fascinating world of how materials deform under stress. We've already touched upon basic stress and strain. Now, we're going to explore a specific type of elastic behavior – how materials respond to uniform pressure – and then, crucially, understand how different elastic properties are interconnected. This is vital for engineers, as it allows us to predict material behavior and select the right materials for our designs.

### Understanding Bulk Modulus of Elasticity ($K$)

Think about a submarine cruising deep underwater. What's happening to its hull? It's experiencing pressure from all directions, equally distributed. This is a classic example of **hydrostatic pressure**, a state of stress where the normal stress is the same on every plane passing through a point and acts perpendicular to those planes. It's not just about submarines, though. Imagine a rubber ball submerged in water, or even the air inside a balloon when you squeeze it gently.

When a body is subjected to such a uniform pressure from all sides, it tends to change its **volume**. Unlike tensile or compressive stress that primarily affects length, hydrostatic pressure affects the overall size, the volume. This change in volume, per unit original volume, is what we call **volumetric strain**.

Now, just as we defined the modulus of elasticity (Young's Modulus, $E$) to relate linear stress to linear strain, and Shear Modulus ($G$) to relate shear stress to shear strain, we need a property to describe the material's resistance to volume change under uniform pressure. This is where the **Bulk Modulus of Elasticity**, denoted by the symbol $K$, comes in.

**Definition of Bulk Modulus ($K$):**
Bulk Modulus ($K$) is defined as the ratio of uniform normal stress (or hydrostatic pressure) to the volumetric strain, provided the deformation is elastic.

Mathematically, we can express this as:

$K = \frac{\text{Uniform Normal Stress}}{\text{Volumetric Strain}}$

Let's break this down.
*   **Uniform Normal Stress ($\sigma$ or $p$):** This is the applied pressure, which is the same in all directions. We usually denote it as $-p$ because pressure is a compressive force, causing a decrease in volume, and in strain calculations, a decrease is often represented by a negative sign. So, let's say the applied pressure is $p$.
*   **Volumetric Strain ($\epsilon_v$):** This is the change in volume ($\Delta V$) divided by the original volume ($V$).
    $\epsilon_v = \frac{\Delta V}{V}$

So, the formula for Bulk Modulus becomes:

$K = \frac{p}{-\epsilon_v} = \frac{p}{-\frac{\Delta V}{V}}$

The negative sign is crucial here. As pressure ($p$) increases, the volume ($V$) decreases, leading to a negative change in volume ($\Delta V$). To ensure that the Bulk Modulus ($K$) is a positive quantity (which it always is for materials), we introduce the negative sign. It essentially signifies that the applied pressure causes a reduction in volume.

**Understanding the Magnitude of $K$:**
A material with a high bulk modulus ($K$) is very stiff with respect to volume changes. It will resist compression and maintain its volume even under significant hydrostatic pressure. Think of solids like steel or diamond – they are very incompressible. Conversely, a material with a low bulk modulus, like air or a gas, will readily change its volume when pressure is applied. This is why a balloon deflates easily when you squeeze it.

**Connecting to Course Outcomes:**
*   **CO1 (Recall fundamental terms):** We are reinforcing the concept of stress and strain, specifically introducing volumetric strain and a new elastic constant, $K$.
*   **CO2 (Explain behavior under loading):** We are explaining how materials behave under uniform pressure, which is a specific type of loading.
*   **CO3 (Apply principles to calculate):** If you're given a material's bulk modulus and the pressure it's subjected to, you can calculate the resulting volumetric strain, or vice-versa.

**Practical Example:**
Imagine filling a sturdy metal tank with water and then applying pressure to the outside of the tank. The tank itself might deform slightly, but the water inside, having a very high bulk modulus, will resist significant volume change. If you were to replace water with something like mercury, which is even less compressible, the volume change would be even more negligible. This is important in hydraulic systems where fluids are pressurized.

### Relationships Between Elastic Constants

Now that we've introduced two key elastic constants – Young's Modulus ($E$) and Shear Modulus ($G$) – and now Bulk Modulus ($K$), you might be wondering if there's a connection between them. The good news is, yes, there is! For an isotropic and homogeneous material (meaning its properties are the same in all directions and at all points), these constants are not independent. Knowing any two allows you to determine the third. This is a very powerful concept in engineering.

Let's consider a cube of material. We've already seen how stretching it along one axis causes strain in that direction and a lateral contraction (Poisson's ratio effect). We've also seen how shearing it causes angular distortion. Now, what if we subject it to hydrostatic pressure?

The relationships are derived using stress-strain analysis, often involving the deformation of a small element under combined stresses. The derivations can be quite involved, drawing from principles of elasticity, which you'll find detailed in textbooks like "Mechanics of Structures" by Shah and Junnarkar or "A Text book of Strength of Materials" by R. K. Bansal. For our purpose here, let's focus on understanding the relationships themselves and their significance.

There are three primary relationships that connect $E$, $G$, and $K$, along with Poisson's ratio ($\nu$).

1.  **Relationship between $E$, $G$, and $\nu$:**
    This is perhaps the most commonly used relationship. It connects the resistance to tensile/compressive deformation ($E$) with the resistance to shear deformation ($G$) and the lateral contraction effect ($\nu$).

    $E = 2G(1 + \nu)$

    *   **What does this mean?** If you know how easily a material stretches (its $E$) and how much it contracts sideways when stretched (its $\nu$), you can calculate its resistance to shear ($G$). Or, if you know $G$ and $\nu$, you can find $E$. This is incredibly useful because it's often easier to measure $E$ and $\nu$ through simple tensile tests, from which $G$ can be derived without needing complex shear tests.

    *   **Example:** Imagine you're working with a new polymer. You perform a tensile test, find its Young's Modulus ($E$) is 1 GPa and its Poisson's ratio ($\nu$) is 0.3. Using the formula, you can calculate its Shear Modulus:
        $G = \frac{E}{2(1 + \nu)} = \frac{1 \text{ GPa}}{2(1 + 0.3)} = \frac{1 \text{ GPa}}{2.6} \approx 0.385 \text{ GPa}$.

    *   **Exam Tip:** Be comfortable rearranging this formula to solve for any of the three variables. Always ensure your units are consistent.

2.  **Relationship between $E$, $K$, and $\nu$:**
    This relationship links the tensile/compressive stiffness ($E$) with the volumetric stiffness ($K$) and Poisson's ratio ($\nu$).

    $E = 3K(1 - 2\nu)$

    *   **What does this mean?** This equation tells us that the Young's Modulus is influenced by how incompressible the material is (its $K$) and how much it flares out sideways when compressed or stretched (its $\nu$). If a material is very incompressible ($K$ is high) and its Poisson's ratio is low, its Young's Modulus will be higher.

    *   **Example:** Consider a material with $K = 100$ GPa and $\nu = 0.25$. We can find its Young's Modulus:
        $E = 3K(1 - 2\nu) = 3(100 \text{ GPa})(1 - 2(0.25)) = 300 \text{ GPa}(1 - 0.5) = 300 \text{ GPa}(0.5) = 150 \text{ GPa}$.

    *   **Exam Tip:** Pay close attention to the $(1 - 2\nu)$ term. If $\nu > 0.5$ (which is physically impossible for isotropic materials), this term becomes negative, implying a negative Young's Modulus, which is nonsensical. This highlights that Poisson's ratio for real materials is bounded, typically between 0 and 0.5.

3.  **Relationship between $E$, $G$, and $K$ (all three constants):**
    This is a more comprehensive relationship that ties all three major elastic moduli together.

    $E = \frac{9KG}{3K + G}$

    This formula can also be written in several other forms, and it's worth knowing at least one. For instance, by rearranging:

    $\frac{1}{G} = \frac{9}{E} - \frac{3}{K}$  or  $\frac{1}{K} = \frac{3}{E} + \frac{1}{3G}$

    *   **What does this mean?** This is the most general form. If you experimentally determine any two of the three constants ($E$, $G$, $K$), you can predict the third. This is extremely useful for material characterization.

    *   **Exam Tip:** You might be asked to derive one of these relationships or to use them to find an unknown elastic constant given two others. Memorizing at least the first two formulas is highly recommended.

**Derivation Insights (Conceptual):**
While we won't go through the full mathematical derivations here (they are quite rigorous and involve tensor calculus or carefully chosen stress states, as you'd find in Popov's "Engineering Mechanics of Solids" or Timoshenko and Gere's "Mechanics of Materials"), the core idea is to consider a simple deformation, like a unit cube, and analyze how it deforms under different stress conditions.

For instance, the relationship $E = 2G(1+\nu)$ is often derived by considering the deformation of an element under pure shear and relating it to the normal strains that occur on inclined planes. Similarly, $E = 3K(1-2\nu)$ can be obtained by analyzing the volumetric strain of an element under hydrostatic stress and relating it back to the axial strains and Poisson's effect.

**Why are these relationships important?**
*   **Material Characterization:** As mentioned, it simplifies material testing. You don't need to perform specialized tests for shear or bulk modulus if you can accurately measure Young's Modulus and Poisson's ratio from a simple tensile test.
*   **Design:** In structural design, we often need to know how a material will behave under various load conditions. If we know one elastic property, we can deduce others and predict deformations more comprehensively.
*   **Understanding Material Behavior:** These relationships highlight the fundamental interdependencies in elastic deformation. They show that a material's response to stretching, shearing, and compression is intrinsically linked.

**Connecting to Course Outcomes:**
*   **CO1 (Recall fundamental terms):** We're solidifying our understanding of $E$, $G$, $K$, and $\nu$.
*   **CO4 (Choose appropriate principles to find elastic constants):** This is exactly what these relationships enable us to do. Given some information, we can choose the right formula to find the missing elastic constant.
*   **CO2 (Explain behavior):** We can now explain how a material's resistance to volume change is related to its resistance to axial or shear deformation.

**Summary of Key Takeaways:**

*   **Bulk Modulus ($K$):** Measures a material's resistance to uniform pressure (hydrostatic stress) and its tendency to change volume. $K = \frac{p}{-\epsilon_v}$. Higher $K$ means less volume change.
*   **Interdependence:** For isotropic materials, elastic constants are not independent.
*   **Key Relationships:**
    *   $E = 2G(1 + \nu)$
    *   $E = 3K(1 - 2\nu)$
    *   $E = \frac{9KG}{3K + G}$
*   **Practicality:** These relationships simplify material testing and aid in design by allowing calculation of one elastic constant from others.

Remember these formulas! They are essential tools for any mechanical or civil engineer. Understanding them deeply will allow you to tackle problems involving material deformation with confidence.

---

### Sample Questions with Answers

**Q1. Define Bulk Modulus of Elasticity and write down its mathematical expression.**

**Answer:**
Bulk Modulus of Elasticity ($K$) is a measure of a material's resistance to uniform pressure or hydrostatic stress, which causes a change in volume. It is defined as the ratio of uniform normal stress to the volumetric strain, assuming elastic deformation.

The mathematical expression is:
$K = \frac{\text{Uniform Normal Stress}}{\text{Volumetric Strain}} = \frac{p}{-\frac{\Delta V}{V}}$

where $p$ is the uniform applied pressure, $\Delta V$ is the change in volume, and $V$ is the original volume. The negative sign is included because an increase in pressure causes a decrease in volume.

**Q2. A cube of side 50 mm is subjected to a hydrostatic pressure of 100 MPa. If the bulk modulus of the material is 150 GPa, calculate the change in volume of the cube.**

**Given:**
*   Side of the cube, $L = 50 \text{ mm} = 0.05 \text{ m}$
*   Hydrostatic pressure, $p = 100 \text{ MPa} = 100 \times 10^6 \text{ N/m}^2$
*   Bulk Modulus, $K = 150 \text{ GPa} = 150 \times 10^9 \text{ N/m}^2$

**To find:** Change in volume, $\Delta V$.

**Solution:**
First, calculate the original volume ($V$) of the cube:
$V = L^3 = (0.05 \text{ m})^3 = 0.000125 \text{ m}^3 = 125 \times 10^{-6} \text{ m}^3$

We know the formula for Bulk Modulus:
$K = \frac{p}{-\frac{\Delta V}{V}}$

Rearranging to find $\Delta V$:
$\Delta V = -\frac{p \cdot V}{K}$

Substitute the given values:
$\Delta V = -\frac{(100 \times 10^6 \text{ N/m}^2) \times (125 \times 10^{-6} \text{ m}^3)}{150 \times 10^9 \text{ N/m}^2}$
$\Delta V = -\frac{100 \times 125 \times 10^{-6}}{150 \times 10^9} \text{ m}^3$
$\Delta V = -\frac{12500 \times 10^{-6}}{150 \times 10^9} \text{ m}^3$
$\Delta V = -\frac{12.5 \times 10^{-3}}{150 \times 10^9} \text{ m}^3$
$\Delta V = -\frac{12.5}{150} \times 10^{-12} \text{ m}^3$
$\Delta V \approx -0.08333 \times 10^{-12} \text{ m}^3$
$\Delta V \approx -83.33 \times 10^{-15} \text{ m}^3$

The change in volume is approximately $-83.33 \times 10^{-15} \text{ m}^3$. The negative sign indicates a decrease in volume.

**Q3. State the relationship between Young's Modulus ($E$), Shear Modulus ($G$), and Poisson's ratio ($\nu$). Explain its significance.**

**Answer:**
The relationship between Young's Modulus ($E$), Shear Modulus ($G$), and Poisson's ratio ($\nu$) for an isotropic and homogeneous material is given by:

$E = 2G(1 + \nu)$

**Significance:**
This relationship is highly significant in material science and engineering for several reasons:
1.  **Material Characterization:** It allows engineers to determine one elastic constant if the other two are known. For example, if $E$ and $\nu$ are measured from a simple tensile test (which is relatively easy), the Shear Modulus $G$ can be calculated without performing a more complex shear test. This saves time and resources in material testing.
2.  **Design and Analysis:** In structural analysis, understanding the relationship helps predict how a material will deform under different types of loading. For instance, knowing a material's tensile stiffness ($E$) and its lateral contraction tendency ($\nu$) helps in predicting its torsional rigidity (related to $G$).
3.  **Material Property Interdependence:** It fundamentally highlights that the elastic properties of a material are not independent. A material's resistance to stretching is directly linked to its resistance to shear and its tendency to deform laterally.

**Q4. For a material, Young's Modulus $E = 200$ GPa and Poisson's ratio $\nu = 0.3$. Calculate its Bulk Modulus ($K$).**

**Given:**
*   Young's Modulus, $E = 200 \text{ GPa}$
*   Poisson's ratio, $\nu = 0.3$

**To find:** Bulk Modulus, $K$.

**Solution:**
We use the relationship between $E$, $K$, and $\nu$:
$E = 3K(1 - 2\nu)$

Rearranging to solve for $K$:
$K = \frac{E}{3(1 - 2\nu)}$

Substitute the given values:
$K = \frac{200 \text{ GPa}}{3(1 - 2 \times 0.3)}$
$K = \frac{200 \text{ GPa}}{3(1 - 0.6)}$
$K = \frac{200 \text{ GPa}}{3(0.4)}$
$K = \frac{200 \text{ GPa}}{1.2}$
$K \approx 166.67 \text{ GPa}$

Therefore, the Bulk Modulus of the material is approximately 166.67 GPa.

**Q5. Can Young's Modulus, Shear Modulus, and Bulk Modulus be independently specified for an isotropic material? Justify your answer.**

**Answer:**
No, Young's Modulus ($E$), Shear Modulus ($G$), and Bulk Modulus ($K$) cannot be independently specified for an isotropic material.

**Justification:**
For an isotropic material, these elastic constants are related to each other through specific mathematical formulas, such as:
1.  $E = 2G(1 + \nu)$
2.  $E = 3K(1 - 2\nu)$
3.  $E = \frac{9KG}{3K + G}$

These equations show that if you know any two of the elastic constants ($E$, $G$, $K$, and $\nu$), the third (or fourth) can be calculated. For example, if you specify $E$ and $\nu$, the values of $G$ and $K$ are then determined by the above relationships. This interdependence arises from the fundamental principles of elasticity and the fact that the material's response is consistent in all directions. The behavior under axial stress, shear stress, and hydrostatic pressure are all intrinsically linked through the material's atomic structure and bonding. Therefore, they are not independent properties.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
