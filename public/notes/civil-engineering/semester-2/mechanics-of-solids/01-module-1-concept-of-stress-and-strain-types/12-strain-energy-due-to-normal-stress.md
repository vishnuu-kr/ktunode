---
title: "Strain energy due to normal stress"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f64"
status: "completed"
scrapedAt: "2026-05-20T18:37:18.487Z"
---
# Mechanics of Solids: Module 1 - Concept of Stress and Strain – Types

## Topic: Strain Energy due to Normal Stress

Welcome, everyone! Today, we're diving into a really crucial aspect of how materials behave under load: **Strain Energy due to Normal Stress**. This concept is fundamental to understanding why structures deform the way they do and how they can absorb energy, which is vital for designing safe and resilient systems.

Before we jump into strain energy itself, let's quickly recap where we are. We've established the basics of stress – that internal resistance to an external force per unit area – and strain – the deformation of a material. We've talked about normal stress (acting perpendicular to a surface) and shear stress (acting parallel). Today, we’ll focus specifically on the energy stored within a material when it's subjected to **normal stress**. This is directly linked to our earlier discussions on axial loads and how they cause elongation or compression.

### What is Strain Energy?

Imagine you're stretching a rubber band. As you pull it, it deforms, and you're doing work on it. This work doesn't just disappear; it gets stored as energy within the rubber band itself. If you release it, this stored energy is what makes it snap back. Similarly, when a solid material is loaded and deforms elastically, the work done by the external forces is stored within the material as **strain energy**.

Think of it like this: when you compress a spring, you're applying force over a distance, doing work. That work is stored in the spring's compressed state, ready to be released. In mechanics of solids, this stored energy is what we call **strain energy**, and it's directly a consequence of the internal stresses and strains developed within the material. It's the energy the material "holds" due to its deformed state.

This concept is incredibly important, as it directly relates to Course Outcome CO3: "Apply the principles of solid mechanics to calculate internal stresses/strains, stress resultants and **strain energies** in structural elements subjected to axial/transverse loads and bending/twisting moments." Understanding strain energy helps us analyze how much energy a beam absorbs when it bends, or how much a column can handle before permanent deformation.

### Strain Energy due to Normal Stress (Axial Loading)

Let's consider the simplest case: a prismatic bar (meaning it has a uniform cross-sectional area) subjected to an axial tensile force $P$. As the force $P$ is applied, the bar elongates. For elastic deformation, the relationship between the applied force and the resulting elongation is linear, as described by Hooke's Law.

We can visualize this on a Force-Elongation diagram. The x-axis represents the elongation ($\delta$) and the y-axis represents the applied axial force ($P$). Since the deformation is elastic, this diagram is a straight line passing through the origin.

*   **Initial state:** Force is 0, elongation is 0.
*   **As force increases:** Elongation increases proportionally.
*   **Final state:** Force is $P$, elongation is $\delta$.

The work done by the force $P$ as it moves through the elongation $\delta$ is represented by the area under this Force-Elongation curve. For a linear elastic material, this area is a triangle.

**Work Done (W) = Area of the triangle = (1/2) * Base * Height**

In our case, the base is the total elongation $\delta$, and the height is the final applied force $P$.

So, **Strain Energy (U) = W = (1/2) * P * $\delta$**

This formula is fundamental. It tells us that the strain energy stored in a bar under axial load is half the product of the load and the total deformation it causes. This is a direct application of the principle of virtual work and is a core concept that supports CO3.

Now, we often want to express this strain energy in terms of material properties and geometry, not just the applied load and deformation. We know from our earlier discussions that:

*   **Stress ($\sigma$) = Force (P) / Area (A)**, so $P = \sigma * A$.
*   **Strain ($\epsilon$) = Elongation ($\delta$) / Original Length (L)**, so $\delta = \epsilon * L$.

We also know Hooke's Law for normal stress: $\sigma = E * \epsilon$, where $E$ is the Modulus of Elasticity. From this, $\epsilon = \sigma / E$.

Let's substitute these back into our strain energy formula:

$U = (1/2) * P * \delta$

Substitute $\delta = \epsilon * L$:
$U = (1/2) * P * (\epsilon * L)$

Now substitute $\epsilon = \sigma / E$:
$U = (1/2) * P * (\sigma / E) * L$

Finally, substitute $P = \sigma * A$:
$U = (1/2) * (\sigma * A) * (\sigma / E) * L$

Rearranging these terms, we get:

$U = (1/2) * \sigma^2 * (A * L) / E$

Notice that $(A * L)$ is the original volume of the bar. Let's call the volume $V$.

$U = (\sigma^2 / 2E) * V$

This is a very important form of the strain energy equation! It tells us that the strain energy stored in a body due to normal stress is proportional to the square of the stress and the volume of the body, and inversely proportional to the Modulus of Elasticity.

**Remember this:** A stiffer material (higher $E$) will store less strain energy for the same stress level. Conversely, for a given volume and stress, a more ductile material (typically with a lower $E$ or higher yield strength) might be able to absorb more energy before failure. This is crucial for applications like designing components for impact loads, where energy absorption is key.

### Strain Energy per Unit Volume (Proof Resilience)

Sometimes it's more convenient to talk about strain energy in terms of volume. If we divide the total strain energy $U$ by the volume $V$, we get the **strain energy per unit volume**.

**Strain Energy per Unit Volume = $U / V = \sigma^2 / (2E)$**

This quantity has a special name: **Proof Resilience**. It represents the maximum strain energy a unit volume of material can absorb without undergoing permanent deformation (i.e., up to the elastic limit).

Think about a spring again. Proof resilience is like its capacity to "spring back" without being permanently bent. This property is essential when designing components that might experience sudden impacts or vibrations, as it indicates how much energy the material can dissipate elastically. For example, the chassis of a car is designed to absorb energy during a crash; its proof resilience is a significant factor in that design.

We can also express proof resilience in terms of stress and strain directly:

Since $\sigma = E * \epsilon$, we can substitute this into the proof resilience formula:

$\text{Strain Energy per Unit Volume} = \sigma * \epsilon / 2$

This form is quite intuitive: it's half the product of stress and strain in a unit volume. Just like the work done by a force moving through a distance, it's half the base times height on a stress-strain curve.

**$\sigma-\epsilon$ Curve Analogy:** If you plot stress on the y-axis and strain on the x-axis (this is the more standard stress-strain curve), the area under this curve up to a certain stress level represents the strain energy per unit volume absorbed up to that stress level. For elastic deformation, this is a triangle with base $\epsilon$ and height $\sigma$, so the area is $(1/2) * \sigma * \epsilon$. This aligns perfectly with our derived formula. This connection between the $\sigma-\epsilon$ curve and strain energy per unit volume is a key concept supporting CO3 and CO4.

### Strain Energy in Terms of Strain

We can also express strain energy in terms of strain ($\epsilon$). Starting again from $U = (\sigma^2 / 2E) * V$, and substituting $\sigma = E * \epsilon$:

$U = ((E * \epsilon)^2 / 2E) * V$
$U = (E^2 * \epsilon^2 / 2E) * V$
$U = (1/2) * E * \epsilon^2 * V$

This form is useful when deformation (strain) is the primary parameter you know or are interested in. For instance, if you know the maximum strain a material can withstand before permanent deformation, you can calculate the total strain energy it can absorb.

### Summary of Key Formulas for Strain Energy due to Normal Stress

For a prismatic bar of length $L$, cross-sectional area $A$, subjected to an axial force $P$, and developing a uniform normal stress $\sigma$:

1.  **In terms of Force and Elongation:**
    $U = (1/2) * P * \delta$

2.  **In terms of Stress and Volume:**
    $U = (\sigma^2 / 2E) * V$
    where $V = A * L$

3.  **In terms of Strain and Volume:**
    $U = (1/2) * E * \epsilon^2 * V$

4.  **Strain Energy per Unit Volume (Proof Resilience):**
    $U/V = \sigma^2 / (2E) = (1/2) * \sigma * \epsilon$

These are the fundamental equations you'll use. They allow us to quantify the energy absorbed by a structural element under axial load. This is directly relevant to CO3 and helps us understand material behavior for design purposes (CO6).

### Examples and Analogies

Let's make this more concrete with a couple of examples.

**Example 1: A Steel Rod in Tension**

Imagine a steel rod with a diameter of 20 mm and a length of 1 meter. It's subjected to an axial tensile force of 50 kN. The Modulus of Elasticity for steel is approximately 200 GPa ($200 \times 10^3$ N/mm²).

*   **Calculate the stress:**
    Area, $A = \pi * (d/2)^2 = \pi * (20/2)^2 = \pi * 10^2 = 100\pi$ mm² $\approx 314.16$ mm².
    Stress, $\sigma = P / A = 50 \times 10^3$ N / $314.16$ mm² $\approx 159.15$ N/mm² (or MPa).

*   **Calculate the strain energy:**
    We can use the formula $U = (\sigma^2 / 2E) * V$.
    Volume, $V = A * L = 314.16$ mm² * $1000$ mm = $314160$ mm³.
    $E = 200 \times 10^3$ N/mm².
    $U = ( (159.15)^2 / (2 * 200 \times 10^3) ) * 314160$
    $U = ( 25328.7 / 400000 ) * 314160$
    $U \approx 0.06332 * 314160 \approx 19900$ N-mm.
    Since 1 N-mm = 1 mJ (millijoule), $U \approx 19.9$ Joules.

This means the steel rod stores about 19.9 Joules of energy when it's stretched this way.

**Example 2: Dropping a Weight**

Imagine you drop a weight of mass $m$ from a height $h$ onto a rod. The impact causes the rod to deform. The potential energy lost by the weight ($mgh$) is converted into strain energy in the rod. If the rod can absorb this energy elastically, it will return to its original shape. This is a very practical application of strain energy.

Let's say you drop a 10 kg weight from a height of 1 meter onto a steel rod. The potential energy is $PE = mgh = 10 \text{ kg} * 9.81 \text{ m/s}^2 * 1 \text{ m} = 98.1$ Joules.

If the rod is designed such that its elastic limit allows it to absorb, say, 150 Joules of strain energy without permanent deformation, then this impact load would be considered safe in terms of elastic behavior. This type of analysis is crucial for designing components subjected to dynamic or impact loads, which falls under CO6.

**Relatable Analogy: A Trampoline**

Think about a trampoline. When you jump on it, it stretches, and you sink down. The force you exert (your weight, plus the dynamic force from your jump) causes the fabric and springs to deform. The energy of your jump is stored as strain energy in the stretched fabric and compressed springs. When you push off, this stored energy is released, propelling you upwards.

The "stiffness" of the trampoline relates to its Modulus of Elasticity and geometry. A stiffer trampoline (higher $E$) might not stretch as much, but the forces involved could be higher. A trampoline that can store more strain energy without breaking or permanently deforming is a better trampoline. This relates to the concept of proof resilience – the ability to absorb energy without permanent damage.

### Connection to Course Outcomes

*   **CO1: Recall the fundamental terms and theorems associated with mechanics of linear elastic deformable bodies.** Our discussion of stress, strain, Hooke's Law, and the derivation of strain energy directly supports this by reinforcing fundamental definitions and their relationships.
*   **CO2: Explain the behavior and response of various structural elements under various loading conditions.** By understanding strain energy, we can explain how a material "reacts" to a load not just in terms of deformation, but in terms of energy absorption capacity. This is key to understanding elastic behavior.
*   **CO3: Apply the principles of solid mechanics to calculate internal stresses/strains, stress resultants and strain energies in structural elements subjected to axial/transverse loads and bending/twisting moments.** This topic is the core of calculating strain energy for axial loads, laying the groundwork for understanding it in more complex scenarios like bending.
*   **CO4: Choose appropriate principles or formula to find the elastic constants of materials making use of the information available.** The formulas for strain energy, like $U/V = \sigma^2/(2E)$, can be rearranged (e.g., $E = \sigma^2 / (2 * U/V)$) to find elastic constants if strain energy and stress information are available from experiments.
*   **CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely.** Knowing the strain energy capacity of a material (proof resilience) is crucial for determining safe loads, especially in dynamic situations. If the energy from an impact exceeds the proof resilience, the material will yield or fail.

### Common Pitfalls and Exam Focus

*   **Units:** Always be consistent with units! If you use N and mm, your modulus of elasticity should be in N/mm² (MPa). If you use N and meters, your $E$ should be in N/m² (Pascals). A common mistake is mixing units, leading to wildly incorrect results.
*   **Elastic Limit:** Remember that these formulas are for *elastic* deformation. If the stress exceeds the elastic limit, the material will deform permanently, and the strain energy stored will not be fully recovered. The analysis of energy absorption beyond the elastic limit becomes more complex.
*   **Uniform Stress:** The formulas derived are for cases where the stress is uniform, like in a prismatic bar under axial load. For non-uniform stress distributions (e.g., due to bending), the calculation involves integration.
*   **Understanding the $\sigma-\epsilon$ Curve:** Many questions will relate strain energy to the area under the stress-strain curve. Make sure you can visualize this and connect it to the formulas.
