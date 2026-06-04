---
title: "Strain energy – concept"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f63"
status: "completed"
scrapedAt: "2026-05-20T18:37:17.787Z"
---
## Mechanics of Solids: Module 1 - Concept of Stress and Strain - Types

### Topic: Strain Energy - Concept

Hello everyone! Welcome back to our journey into the fascinating world of Mechanics of Solids. In our previous sessions, we've laid the groundwork by understanding the fundamental concepts of stress and strain – how materials deform under load. Today, we're going to delve into a concept that is intrinsically linked to this deformation: **Strain Energy**. This is a really crucial topic, so let's get comfortable and dive in!

**Connecting with Course Outcomes:**

Before we start, it’s important to see how this topic aligns with our course objectives. Understanding strain energy helps us achieve:

*   **CO1 (K1):** We'll be recalling fundamental terms and theorems, and strain energy is one such fundamental concept for understanding the behavior of elastic bodies.
*   **CO2 (K2):** We'll explain how materials respond to loads, and strain energy is a direct measure of the energy absorbed during this response.
*   **CO3 (K3):** This is where strain energy really shines. We’ll learn how to *calculate* it for structural elements under various loads. This is directly applicable to real-world engineering problems.
*   **CO4 (K3):** Concepts like strain energy are indirectly used in determining elastic constants of materials.

So, as you can see, this isn't just an abstract idea; it has direct implications for how we analyze and design structures.

---

### What Exactly is Strain Energy?

Imagine you're stretching a rubber band. As you pull it, you're doing *work* on it. Where does that energy go? It gets stored within the rubber band as internal potential energy, due to the internal forces resisting the deformation. This stored energy is what we call **Strain Energy**.

In simple terms, **Strain Energy is the energy absorbed by a deformable body when work is done on it by external forces, causing deformation (strain).**

Think of it like this: when you deform a spring by pulling or pushing it, you are applying a force and causing displacement. The product of force and displacement is work. This work done is not lost; it is stored within the spring as strain energy. When you release the force, the spring returns to its original shape, releasing this stored energy.

**Key Idea:** Strain energy is directly related to the work done by the applied loads in causing deformation.

From a foundational perspective, as discussed in texts like *Mechanics of Structures* by Shah and Junnarkar, strain energy arises from the internal stresses and strains within the material. When a body is subjected to external forces, internal resisting forces develop to maintain equilibrium. The work done by these external forces is dissipated internally, leading to the formation of stresses and strains. This internal work done is the strain energy.

**Visualizing Strain Energy:**

Let's consider a simple example: a bar subjected to a gradually applied axial tensile load.

*   As the load `P` is applied, it increases from zero to its final value.
*   Simultaneously, the bar elongates by a small amount, say `δ`.
*   The work done by this gradually applied load is the area under the load-deformation curve.
*   If the material behaves elastically (i.e., it returns to its original shape upon removal of the load), this work done is stored as strain energy within the bar.

---

### The Load-Deformation Curve and Strain Energy

The relationship between the applied load and the resulting deformation is key to understanding strain energy. For most common engineering materials, within their elastic limit, this relationship is linear. This gives us a straight line on a load-deformation graph.

Let's consider a bar of length `L`, cross-sectional area `A`, and Young's modulus `E`, subjected to an axial load `P`. The elongation `δ` is given by `δ = PL / AE`.

If we plot `P` on the y-axis and `δ` on the x-axis, we get a straight line passing through the origin.

*   **Work done by the load:** For a gradually applied load, the work done is the average load multiplied by the total deformation.
    Work Done = (1/2) * P * δ

Since this work done is stored as strain energy (`U`), we have:
**Strain Energy (U) = (1/2) * P * δ**

This equation is fundamental. Remember this simple form!

**Connecting to Stress and Strain:**

We know that stress (`σ`) is `P/A` and strain (`ε`) is `δ/L`.
Substituting `P = σA` and `δ = εL` into the strain energy formula:

U = (1/2) * (σA) * (εL)
U = (1/2) * (σ * ε) * (AL)

Notice the term `AL`. This is the original volume of the bar. So, we can define a **strain energy per unit volume**, which we call **Resilience**.

**Resilience (u) = U / Volume = (1/2) * σ * ε**

This is a very important concept, often encountered in texts like *A Text book of Strength of Materials* by R. K. Bansal. Resilience represents the maximum strain energy a material can absorb per unit volume without permanent deformation.

Furthermore, using Hooke's Law (`σ = Eε`), we can express strain energy in terms of stress or strain:

*   **In terms of stress:** Since `ε = σ/E`,
    U = (1/2) * σ * (σ/E) * AL
    **U = (σ² / 2E) * AL**

*   **In terms of strain:** Since `σ = Eε`,
    U = (1/2) * (Eε) * ε * AL
    **U = (1/2) * Eε² * AL**

These three forms are equivalent and incredibly useful for calculations, allowing us to express strain energy based on the information we have (load, deformation, stress, or strain). This directly addresses **CO3 (K3)** as we are learning to calculate strain energy.

---

### Types of Strain Energy

The way we express strain energy depends on the type of loading. Let's briefly touch upon the common scenarios:

1.  **Strain Energy due to Axial Load:** This is what we've just discussed, where a force acts along the axis of the member.
    *   `U = (P²L) / (2AE)` or `U = (σ²AL) / (2E)`

2.  **Strain Energy due to Torsion:** When a shaft is subjected to a twisting moment (torque), it stores strain energy. The formula involves the polar moment of inertia, shear modulus, and the applied torque. This is a bit more advanced but falls under the umbrella of strain energy.

3.  **Strain Energy due to Bending:** When a beam bends under transverse loads, internal bending stresses develop, and thus strain energy is stored. This is a very common scenario in structural analysis. The formula typically involves the bending moment (`M`), Young's modulus (`E`), and the moment of inertia (`I`).
    *   `U = ∫ (M² / 2EI) dx` (integrated over the length of the beam)

4.  **Strain Energy due to Shear:** Shear stresses also contribute to strain energy, particularly important in beams and short, deep members.

For Module 1, our primary focus is on the fundamental concept, often introduced through axial loading. The other types are explored in greater detail in subsequent modules, but understanding the core concept of stored energy due to deformation remains the same.

---

### Why is Strain Energy Important?

Strain energy is not just an academic concept; it's fundamental to understanding how structures behave under load, especially when considering their stiffness and strength.

*   **Energy Absorption:** Materials with higher strain energy capacity can absorb more energy before failing. This is crucial for designing components that need to withstand impacts or sudden loads. Think of a car's bumper or a shock absorber.
*   **Stiffness:** Strain energy is directly related to deformation. A stiffer member will deform less under the same load, and therefore store less strain energy (for a given stress/strain level).
*   **Failure Analysis:** Understanding how strain energy is distributed within a structure can help predict where failure is most likely to occur.
*   **Structural Design:** Concepts derived from strain energy, like the principle of virtual work and Castigliano's theorems (which we'll encounter later), are powerful tools for calculating deflections and analyzing indeterminate structures. This directly links to **CO3 (K3)** and **CO6 (K4)**.

---

### Real-World Analogy

Imagine you're lifting a heavy object by stretching a bungee cord attached to it.

*   You are doing work by lifting the object.
*   This work is transferred to the bungee cord, causing it to stretch.
*   The bungee cord stores this energy as **strain energy**.
*   If you suddenly let go of the object, the bungee cord's stored strain energy will be released, pulling the object back up.

The "stretchiness" of the bungee cord is related to its material properties (like Young's modulus for a solid material) and its geometry. A thicker or stronger bungee cord would store more strain energy before breaking, just like a stronger material or a larger cross-section in an engineering component.

---

### Exam Focus and Common Pitfalls

When studying strain energy, keep these points in mind for exams:

*   **Definitions:** Be clear on the definition of strain energy and resilience.
*   **Formulas:** Memorize the basic formulas for strain energy under axial load:
    *   `U = (1/2) * P * δ`
    *   `U = (σ²AL) / (2E)`
    *   `U = (P²L) / (2AE)`
    *   Resilience: `u = (1/2) * σ * ε`
*   **Units:** Always pay attention to units when solving problems. Strain energy is typically in Joules (N-m) or related units.
*   **Elastic Limit:** Strain energy calculations are valid only within the elastic limit of the material. Beyond that, permanent deformation occurs, and the energy is not fully recovered.
*   **Gradually Applied Load:** The `(1/2) * P * δ` formula assumes the load is applied gradually. For impact loads, the energy absorbed can be significantly higher.

---

### Summary of Key Takeaways

*   **Strain Energy (`U`)** is the internal energy absorbed by a body due to deformation caused by external work.
*   It's the work done by the applied forces in deforming the body.
*   For elastic behavior, `U = (1/2) * Load * Deformation`.
*   **Resilience (`u`)** is strain energy per unit volume.
*   Key formulas for axial loading are crucial: `U = (σ²AL) / (2E)` and `U = (P²L) / (2AE)`.
*   Strain energy is fundamental to understanding material behavior, energy absorption, and structural analysis.

---

### Sample Questions and Answers

**Q1. Define Strain Energy and Resilience.**

**Answer:**
*   **Strain Energy (U):** It is the energy absorbed by a deformable body when work is done on it by external forces, causing deformation (strain). This energy is stored internally within the material due to the development of stresses.
*   **Resilience (u):** It is the maximum strain energy a material can absorb per unit volume without undergoing permanent deformation. Mathematically, `u = U / Volume = (1/2) * σ * ε`.

**Q2. Derive the expression for strain energy stored in a bar subjected to axial load P.**

**Answer:**
Consider a bar of length `L`, cross-sectional area `A`, and Young's Modulus `E`, subjected to an axial tensile load `P`.
The elongation `δ` is given by `δ = PL / AE`.
Assuming the load is applied gradually, the work done by the load is:
Work Done = Average Load × Total Deformation
Work Done = `(1/2) * P * δ`
This work done is stored as strain energy `U`.
So, `U = (1/2) * P * δ`
Substituting `δ = PL / AE`:
`U = (1/2) * P * (PL / AE)`
**`U = (P²L) / (2AE)`**

We can also express this in terms of stress `σ = P/A`:
`P = σA`
`U = (1/2) * (σA) * (εL)` (since `δ = εL`)
`U = (1/2) * (σ * ε) * AL`
Using Hooke's Law `σ = Eε`, so `ε = σ/E`:
`U = (1/2) * σ * (σ/E) * AL`
**`U = (σ²AL) / (2E)`**

**Q3. A steel bar of 1 meter length, 20 mm diameter is subjected to an axial tensile load of 30 kN. Calculate the strain energy stored in the bar. Take E = 200 GPa.**

**Solution:**
Given:
Length, `L = 1 m = 1000 mm`
Diameter, `d = 20 mm`
Radius, `r = d/2 = 10 mm`
Axial Load, `P = 30 kN = 30 * 10³ N`
Young's Modulus, `E = 200 GPa = 200 * 10³ N/mm²`

First, calculate the cross-sectional area `A`:
`A = π * r² = π * (10 mm)² = 100π mm² ≈ 314.16 mm²`

Now, use the formula for strain energy due to axial load:
`U = (P²L) / (2AE)`
`U = ((30 * 10³ N)² * 1000 mm) / (2 * 100π mm² * 200 * 10³ N/mm²)`
`U = (900 * 10⁶ N² * 1000 mm) / (400π * 10³ mm² * N/mm²)`
`U = (900 * 10⁹ N² * mm) / (400π * 10³ N)`
`U = (900 * 10⁶) / (400π) N-mm`
`U = (900000) / (400π) N-mm`
`U ≈ 716.19 N-mm`

Alternatively, calculate stress first:
`σ = P / A = (30 * 10³ N) / (100π mm²) ≈ 95.49 N/mm²`
Now use `U = (σ²AL) / (2E)`:
`U = ((95.49 N/mm²)² * 100π mm² * 1000 mm) / (2 * 200 * 10³ N/mm²)`
`U = (9118.35 N²/mm⁴ * 100π mm² * 1000 mm) / (400 * 10³ N/mm²)`
`U = (9118.35 * 314.16 * 1000) / (400 * 10³) N-mm`
`U ≈ 28645805 / 400000 N-mm`
`U ≈ 716.14 N-mm`

The strain energy stored in the bar is approximately **716.19 N-mm** or **0.716 J**.

This concludes our session on the concept of strain energy. Remember, it's all about the energy stored due to deformation, and its calculation is fundamental to understanding structural behavior. Keep practicing the formulas, and you'll master this concept!
