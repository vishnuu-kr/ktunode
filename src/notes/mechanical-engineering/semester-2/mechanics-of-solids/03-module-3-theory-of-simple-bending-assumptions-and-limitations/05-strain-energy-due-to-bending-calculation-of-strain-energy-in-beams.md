---
title: "Strain energy due to bending – calculation of strain energy in beams"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Theory of simple bending, assumptions and limitations"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839ff"
status: "completed"
scrapedAt: "2026-05-20T17:46:26.768Z"
---
# Mechanics of Solids - Module 3: Theory of Simple Bending

## Topic: Strain Energy Due to Bending – Calculation of Strain Energy in Beams

Welcome, everyone! Today, we embark on a crucial journey within the realm of bending – understanding **Strain Energy due to Bending**. This concept is fundamental to how beams store energy when they deform under load, and it has far-reaching implications in structural analysis and design. As we move through this topic, you'll see how it directly relates to several of our course outcomes, particularly in calculating internal stresses, strains, and energies (CO3), and analyzing structural behavior (CO2).

### 1. The Concept of Strain Energy: A Gentle Introduction

Before we dive specifically into bending, let's remind ourselves of what strain energy is in general. Imagine stretching a rubber band. As you pull it, you're doing work, and this work gets stored within the rubber band as **strain energy**. When you release it, this stored energy causes the rubber band to snap back to its original shape.

In mechanics of solids, whenever a material is deformed elastically, it stores energy. This energy is directly proportional to the square of the deformation. Think of it as the "internal resilience" of the material. This idea is central to understanding how structures respond to loads without permanent damage.

### 2. Why Strain Energy in Bending Matters

Now, why focus on bending specifically? Beams are ubiquitous in our everyday lives and in engineering structures. Think about the shelves in your bookcase, the floor joists in a house, or the wings of an airplane. These are all examples of beams subjected to bending loads.

When a beam bends, its fibers on one side are compressed, and those on the other side are stretched. This internal deformation, caused by the applied bending moment, means that the beam is also storing strain energy. Calculating this strain energy is vital for several reasons:

*   **Energy Methods:** It forms the basis for powerful energy methods of analysis, like Castigliano's theorem, which allow us to calculate deflections and other structural responses efficiently.
*   **Structural Behavior:** Understanding strain energy helps us predict how much energy a beam can absorb before yielding or fracturing. This is crucial for safety and performance.
*   **Design:** It informs us about the efficiency of different beam designs under bending loads.

This topic directly helps us achieve **CO3** by enabling us to calculate the strain energy stored in beams under bending. It also supports **CO2** by explaining the response of beams under load.

### 3. Deriving Strain Energy Due to Bending: From Stress to Energy

Let's get a bit more technical now. We know that in simple bending, we have a bending moment, $M$, acting on the beam. This bending moment causes stresses, $\sigma$, within the beam's cross-section.

Recall the flexure formula from our previous discussions on the theory of simple bending:
$$ \sigma = \frac{My}{I} $$
where:
*   $\sigma$ is the bending stress at a distance $y$ from the neutral axis.
*   $M$ is the bending moment at the section.
*   $y$ is the distance of the fiber from the neutral axis.
*   $I$ is the moment of inertia of the cross-section about the neutral axis.

Now, let's think about a small elemental volume within the beam. Consider a small segment of the beam of length $dx$ and a small area $dA$ within the cross-section at a distance $y$ from the neutral axis. The stress acting on this elemental area is $\sigma$.

The strain ($\epsilon$) corresponding to this stress, assuming the material behaves elastically, is given by Hooke's Law:
$$ \epsilon = \frac{\sigma}{E} $$
where $E$ is the Young's Modulus of the material.

The force acting on the elemental area $dA$ is $dF = \sigma \cdot dA$.
The deformation of this elemental volume due to this force along the beam's length is $d\delta = \epsilon \cdot dx$.

The strain energy ($dU$) stored in this elemental volume is given by:
$$ dU = \frac{1}{2} \times \text{Force} \times \text{Deformation} $$
$$ dU = \frac{1}{2} \times (\sigma \cdot dA) \times (\epsilon \cdot dx) $$
Substitute $\epsilon = \sigma/E$:
$$ dU = \frac{1}{2} \times (\sigma \cdot dA) \times \left(\frac{\sigma}{E} \cdot dx\right) $$
$$ dU = \frac{1}{2E} \sigma^2 \cdot dA \cdot dx $$

Now, we can substitute the expression for $\sigma$ from the flexure formula:
$$ dU = \frac{1}{2E} \left(\frac{My}{I}\right)^2 \cdot dA \cdot dx $$
$$ dU = \frac{1}{2EI^2} M^2 y^2 \cdot dA \cdot dx $$

To find the total strain energy ($U$) in this small segment of length $dx$, we need to integrate this expression over the entire cross-sectional area ($A$):
$$ dU_{\text{segment}} = \int_{A} \frac{1}{2EI^2} M^2 y^2 \cdot dA \cdot dx $$
Since $M$, $E$, and $I$ are constant for a given section and bending moment at that section, they can be taken out of the integral:
$$ dU_{\text{segment}} = \frac{M^2}{2EI^2} \left( \int_{A} y^2 dA \right) dx $$

Here's a critical realization: the term $\int_{A} y^2 dA$ is the definition of the **moment of inertia** ($I$) of the cross-section about the neutral axis. So, we can simplify:
$$ dU_{\text{segment}} = \frac{M^2}{2EI^2} (I) dx $$
$$ dU_{\text{segment}} = \frac{M^2}{2EI} dx $$

This is a very important result! It tells us the strain energy stored in a small segment of the beam of length $dx$ due to a bending moment $M$.

### 4. Calculating Total Strain Energy in a Beam

To find the total strain energy ($U$) in the entire beam, we need to integrate this expression for $dU_{\text{segment}}$ over the entire length of the beam ($L$):
$$ U = \int_{0}^{L} \frac{M^2}{2EI} dx $$

This is the general formula for the strain energy due to bending in a beam. It's a powerful tool that allows us to quantify the energy stored within the beam as it deforms under the action of bending moments.

**Remember this formula!** It’s a cornerstone for solving many beam problems using energy methods, and it directly addresses **CO3** – applying principles to calculate strain energies.

Let's see how this applies in practical scenarios.

#### Example 1: Cantilever Beam with a Point Load at the Free End

Consider a cantilever beam of length $L$ with a point load $W$ at its free end.
The bending moment $M$ at a distance $x$ from the free end is given by $M = -Wx$. (The negative sign indicates it causes tension at the top fibers, compression at the bottom. For strain energy calculation, we use $M^2$, so the sign doesn't affect the magnitude).

So, $M = Wx$.
The moment of inertia is $I$, and Young's Modulus is $E$.

Let's calculate the strain energy:
$$ U = \int_{0}^{L} \frac{(Wx)^2}{2EI} dx $$
$$ U = \frac{W^2}{2EI} \int_{0}^{L} x^2 dx $$
$$ U = \frac{W^2}{2EI} \left[ \frac{x^3}{3} \right]_{0}^{L} $$
$$ U = \frac{W^2}{2EI} \left( \frac{L^3}{3} - 0 \right) $$
$$ U = \frac{W^2 L^3}{6EI} $$

This result tells us how much energy is stored in a cantilever beam under this specific loading condition. This is a direct application of **CO3**.

#### Example 2: Simply Supported Beam with a Uniformly Distributed Load (UDL)

Consider a simply supported beam of length $L$ with a UDL of intensity $w$ per unit length.
The bending moment at a distance $x$ from one of the supports is given by:
$$ M = \frac{wLx}{2} - \frac{wx^2}{2} $$
$$ M = \frac{w}{2} (Lx - x^2) $$

The strain energy $U$ is:
$$ U = \int_{0}^{L} \frac{M^2}{2EI} dx $$
$$ U = \int_{0}^{L} \frac{1}{2EI} \left(\frac{w}{2} (Lx - x^2)\right)^2 dx $$
$$ U = \frac{w^2}{8EI} \int_{0}^{L} (Lx - x^2)^2 dx $$
$$ U = \frac{w^2}{8EI} \int_{0}^{L} (L^2x^2 - 2Lx^3 + x^4) dx $$
$$ U = \frac{w^2}{8EI} \left[ L^2 \frac{x^3}{3} - 2L \frac{x^4}{4} + \frac{x^5}{5} \right]_{0}^{L} $$
$$ U = \frac{w^2}{8EI} \left[ \frac{L^5}{3} - \frac{L^5}{2} + \frac{L^5}{5} \right] $$
$$ U = \frac{w^2 L^5}{8EI} \left[ \frac{10 - 15 + 6}{30} \right] $$
$$ U = \frac{w^2 L^5}{8EI} \left[ \frac{1}{30} \right] $$
$$ U = \frac{w^2 L^5}{240EI} $$

Again, this calculation is a prime example of applying the strain energy formula to determine the stored energy under a common loading scenario, directly mapping to **CO3**.

### 5. A More Relatable Analogy: The Trampoline Effect

Imagine a trampoline. When you jump on it, the fabric stretches and stores energy. The more you weigh or the higher you jump, the more the trampoline deforms, and the more energy it stores. When you get off, that stored energy is released, making the trampoline spring back.

A beam under bending is like a very stiff, structured trampoline. The bending moment is like the force of gravity (or whatever is pushing down), and the beam material is like the fabric. The greater the bending moment (or load), the more the beam 'bends' (deforms), and the more strain energy it stores. If the beam is elastic, it will spring back when the load is removed. The formula $U = \int \frac{M^2}{2EI} dx$ is the mathematical expression of this "trampoline effect" for a beam.

### 6. Limitations and Considerations

While the formula $U = \int \frac{M^2}{2EI} dx$ is incredibly useful, it's important to remember the assumptions under which it's derived, which ties back to the **Theory of Simple Bending** discussed in Module 3.

*   **Linear Elasticity:** The formula assumes that the material obeys Hooke's Law, meaning stress is directly proportional to strain, and the material returns to its original shape when the load is removed. Beyond the elastic limit, this formula is no longer valid.
*   **Plane Sections Remain Plane:** This is a cornerstone of the simple bending theory. It means that a cross-section that was plane before bending remains plane after bending. This allows us to relate strain linearly across the depth of the beam.
*   **Shear Deformation is Neglected:** The derivation of this formula primarily considers the strain energy due to *bending stresses*. The strain energy due to shear stresses and the corresponding shear deformations is often neglected in this context. For beams that are short and deep (i.e., high shear-to-bending ratio), this neglect might lead to inaccuracies. However, for slender beams, the bending strain energy dominates.
*   **Homogeneous and Isotropic Material:** The derivation assumes the material properties ($E$) are uniform throughout the beam and the same in all directions.
*   **Constant Cross-Section (for simpler integrations):** While the integral form works for varying cross-sections and moments, for quick calculations, we often assume a constant $I$ and $M$ over short lengths, or we deal with cases where $I$ and $M$ vary smoothly.

These limitations are important for understanding the scope of the formula. When dealing with very deep beams or materials that don't behave elastically, we might need more advanced theories. This understanding is crucial for **CO1** – recalling fundamental terms and theorems.

### 7. Connecting to Course Outcomes

Let's explicitly see how this topic supports our course objectives:

*   **CO1 (Recall Fundamental Terms):** Understanding strain energy, stress, strain, bending moment, moment of inertia, and Young's Modulus are all fundamental terms revisited and utilized here.
*   **CO2 (Explain Behavior):** We are explaining how beams respond to bending loads by storing energy. This is a key aspect of their behavior.
*   **CO3 (Apply Principles to Calculate Strain Energies):** This is the direct outcome! We have learned and applied the formula $U = \int \frac{M^2}{2EI} dx$ to calculate strain energy in beams.
*   **CO6 (Analyze for Safe Load):** While not directly calculating safe loads here, strain energy is a component of energy methods that ARE used to determine deflections and stresses, which in turn inform safe load calculations. For instance, if the strain energy exceeds the material's capacity, it indicates failure.

### 8. Exam Focus and Quick Recall

When this topic comes up in exams, expect questions that require you to:

*   **Derive the formula for strain energy due to bending.** Be prepared to go from stress and strain to the integrated form.
*   **Calculate the strain energy for various standard beam and loading conditions.** Cantilevers with point loads, UDLs, and simply supported beams with point loads or UDLs are common.
*   **Understand the assumptions.** You might be asked to list them or explain why shear deformation is often neglected.
*   **Use strain energy in energy methods.** Often, this topic is a precursor to calculating deflections using Castigliano's theorem or the unit load method (which we'll cover later, but strain energy is the foundation).

**Quick Recall Tip:** The core formula is $U = \int_{0}^{L} \frac{M^2}{2EI} dx$. For constant $M$, $E$, and $I$, this simplifies to $U = \frac{M^2 L}{2EI}$. Always remember to square the moment!

### Sample Questions with Answers

Here are some typical questions you might encounter, along with how to approach them:

**Question 1 (Conceptual):** Explain the physical meaning of strain energy in a beam subjected to bending.
**Answer:** Strain energy in a beam due to bending represents the internal work done by the internal bending stresses as the beam deforms elastically. It's the energy stored within the material of the beam as it bends, which would be released if the load causing the bending were removed, causing the beam to return to its original shape. It's a measure of the beam's resilience to bending deformation.

**Question 2 (Derivation):** Derive the expression for the strain energy stored in a beam of length $L$ due to bending.
**Answer:**
Start with the elemental volume $dV = dA \cdot dx$.
Stress $\sigma = \frac{My}{I}$.
Strain $\epsilon = \frac{\sigma}{E} = \frac{My}{EI}$.
Elemental strain energy $dU = \frac{1}{2} \times \text{Stress} \times \text{Strain} \times \text{Volume}$
$dU = \frac{1}{2} \sigma \epsilon dV = \frac{1}{2} \left(\frac{My}{I}\right) \left(\frac{My}{EI}\right) dA dx$
$dU = \frac{M^2 y^2}{2EI^2} dA dx$.
Integrating over the cross-sectional area $A$ for a segment $dx$:
$dU_{segment} = \int_A \frac{M^2 y^2}{2EI^2} dA dx = \frac{M^2}{2EI^2} \left(\int_A y^2 dA\right) dx$
Recognizing $\int_A y^2 dA = I$:
$dU_{segment} = \frac{M^2}{2EI^2} (I) dx = \frac{M^2}{2EI} dx$.
Integrating over the length $L$ of the beam:
$U = \int_0^L \frac{M^2}{2EI} dx$.

**Question 3 (Application):** Calculate the strain energy stored in a simply supported beam of length $L$ carrying a concentrated load $W$ at its mid-span. Assume $E$ and $I$ are constant.
**Answer:**
For a simply supported beam with a load $W$ at mid-span, the bending moment diagram is triangular, with a maximum moment $M_{max} = \frac{WL}{4}$ at the center.
The bending moment $M(x)$ at a distance $x$ from the left support ($0 \leq x \leq L/2$) is $M(x) = \frac{Wx}{2}$.
We need to integrate over the entire beam, but due to symmetry, we can integrate from $0$ to $L/2$ and multiply by 2.
$U = \int_0^L \frac{M(x)^2}{2EI} dx = 2 \int_0^{L/2} \frac{(\frac{Wx}{2})^2}{2EI} dx$
$U = 2 \int_0^{L/2} \frac{W^2 x^2}{8EI} dx = \frac{W^2}{4EI} \int_0^{L/2} x^2 dx$
$U = \frac{W^2}{4EI} \left[ \frac{x^3}{3} \right]_0^{L/2}$
$U = \frac{W^2}{4EI} \left( \frac{(L/2)^3}{3} - 0 \right)$
$U = \frac{W^2}{4EI} \left( \frac{L^3}{8 \times 3} \right)$
$U = \frac{W^2 L^3}{96EI}$

**Question 4 (Limitation):** For what type of beams is the assumption of neglecting shear deformation significant?
**Answer:** The assumption of neglecting shear deformation is significant (i.e., it may lead to noticeable inaccuracies) for beams that are **short and deep**. In such beams, the shear forces are relatively large compared to the bending moments, and the shear stresses contribute significantly to the overall strain energy of the beam. For slender beams (long and shallow), bending deformation dominates, making the neglect of shear deformation a reasonable approximation.

Keep practicing these calculations and understanding the underlying principles. This topic is foundational for many advanced structural analysis techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
