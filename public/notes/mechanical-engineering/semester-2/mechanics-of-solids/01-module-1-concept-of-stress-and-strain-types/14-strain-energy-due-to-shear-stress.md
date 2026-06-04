---
title: "Strain energy due to shear stress"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839f4"
status: "completed"
scrapedAt: "2026-05-20T17:46:17.982Z"
---
# Mechanics of Solids: Module 1 - Concept of Stress and Strain – Types

## Topic: Strain Energy Due to Shear Stress

Welcome, everyone! Today, we're going to delve into a really important aspect of how materials behave under stress, specifically focusing on the energy stored within them when they are subjected to shear. This concept of "strain energy" is fundamental to understanding the behavior of structures and machine components, and it directly links to several of our course outcomes, particularly how we analyze structural elements under various loads.

We've already discussed stress and strain, and you'll recall that stress is the internal resistance a material offers to an external force, while strain is the deformation that results from that stress. Now, when a material deforms, it's not just changing shape; it's also storing energy. This stored energy is called strain energy. Think of it like stretching a rubber band: as you pull, you're doing work, and that work is being stored as potential energy in the rubber band. When you let go, that stored energy is released, causing the rubber band to snap back.

In this session, we're zeroing in on *shear stress* and the strain energy it induces. Shear stress, as we've learned, arises when forces act parallel to a surface, like cutting paper with scissors or twisting a shaft. It's this kind of deformation that we'll be analyzing from an energy perspective.

### Understanding the Foundation: Shear Stress and Shear Strain

Before we jump into strain energy, let's quickly revisit what shear stress and shear strain mean.

*   **Shear Stress ($\tau$)**: This is the stress that acts parallel to a cross-sectional area. Imagine a bolt holding two plates together. When you pull the plates in opposite directions, the bolt experiences shear stress across its cross-section. It's defined as the shear force ($V$) divided by the area ($A$) over which it acts: $\tau = V/A$.
*   **Shear Strain ($\gamma$)**: This is the measure of deformation caused by shear stress. It's typically expressed as the change in angle (in radians) between two initially perpendicular lines in the material. If you picture a square element within a material subjected to shear, it will deform into a parallelogram. The shear strain is the change in the right angle.

The relationship between shear stress and shear strain, within the elastic limit, is linear. This is governed by Hooke's Law for shear, which states that shear stress is directly proportional to shear strain: $\tau = G\gamma$. Here, $G$ is the **Shear Modulus of Rigidity**, a material property that tells us how resistant the material is to shearing deformation. A higher $G$ means the material is stiffer in shear. This relationship is crucial, as it forms the basis for calculating strain energy.

*(This directly relates to CO1: Recall the fundamental terms and theorems associated with mechanics of linear elastic deformable bodies, specifically defining shear stress, shear strain, and the shear modulus.)*

### What is Strain Energy?

When a force is applied to an elastic body and causes it to deform, work is done on the body. This work is stored within the body as strain energy. If the body is unloaded within its elastic limit, it will return to its original shape, and the stored strain energy will be released, often as kinetic energy.

Think about a simple example: a spring. When you compress or extend a spring, you're applying a force, and it deforms. The work you do in deforming the spring is stored as potential energy within the spring. This stored energy is the strain energy.

The total work done by the external forces to deform the body is stored as strain energy, provided that the deformation is elastic.

### Deriving Strain Energy Due to Shear Stress

Now, let's get to the heart of our topic: strain energy specifically due to shear. We can derive this by considering the work done by the shear forces during the deformation process.

Let's consider a small element of material with area $A$ and thickness $t$, subjected to a uniformly distributed shear stress $\tau$. The total shear force acting on this area is $V = \tau A$.

When this force $V$ is applied, it causes a deformation. The shear strain is $\gamma$. For a small displacement, we can think of this as the force $V$ moving through a small distance $dx$. The work done is approximately $dW = V \, dx$.

However, it's more convenient to relate this to stress and strain. For an elastic material, the force-displacement relationship is linear. So, the work done is the average force multiplied by the total displacement.
If the shear force starts from zero and increases to a maximum value $V_{max}$, the average force is $\frac{0 + V_{max}}{2} = \frac{V_{max}}{2}$.
The total deformation (or displacement in the direction of the force) is $u$.
So, the strain energy $U$ is given by:
$U = \frac{1}{2} \times V_{max} \times u$

Now, let's express this in terms of stress and strain.
We know $V = \tau A$ and $u = \gamma t$.
Substituting these into the equation:
$U = \frac{1}{2} \times (\tau_{max} A) \times (\gamma t)$
$U = \frac{1}{2} \tau_{max} \gamma (A \times t)$

The term $(A \times t)$ represents the volume of the element under consideration. Let's denote the volume as $Vol$.
So, $U = \frac{1}{2} \tau_{max} \gamma \, Vol$

This is the *total strain energy* stored in the volume. Often, in mechanics of solids, we are interested in the strain energy *per unit volume*. This is called the **strain energy density**.

Let $u_{strain}$ be the strain energy density.
$u_{strain} = \frac{U}{Vol} = \frac{1}{2} \tau_{max} \gamma$

This equation is very similar to the strain energy density for axial stress, where it's $\frac{1}{2} \sigma \epsilon$.

Now, we can express this entirely in terms of shear stress $\tau$ or shear strain $\gamma$ using the constitutive relationship $\tau = G\gamma$.

**Expressing in terms of Shear Stress ($\tau$):**
Since $\gamma = \frac{\tau}{G}$, we can substitute this into the strain energy density equation:
$u_{strain} = \frac{1}{2} \tau \left(\frac{\tau}{G}\right) = \frac{\tau^2}{2G}$

And the total strain energy $U$ in a volume $Vol$ is:
$U = \frac{\tau^2}{2G} \times Vol$

*(This is a key formula and is directly applicable to CO3: Apply the principles of solid mechanics to calculate ... strain energies in structural elements subjected to ... twisting moments, as shear is involved in twisting.)*

**Expressing in terms of Shear Strain ($\gamma$):**
Alternatively, using $\tau = G\gamma$:
$u_{strain} = \frac{1}{2} (G\gamma) \gamma = \frac{1}{2} G\gamma^2$

And the total strain energy $U$ in a volume $Vol$ is:
$U = \frac{1}{2} G\gamma^2 \times Vol$

Remember this: the strain energy stored is proportional to the square of the shear stress (or shear strain). This squared relationship is important because it means that doubling the shear stress quadruples the strain energy stored per unit volume.

Let's relate this to our textbooks. For instance, R.K. Bansal's "A Text book of Strength of Materials" and Punmia, Jain, & Jain's "Mechanics of Materials" will cover these derivations thoroughly, usually starting with the work done during deformation. They often use diagrams of a stressed element to visually represent this.

### Practical Applications and Analogies

Why do we care about strain energy due to shear? It's not just an abstract concept. It helps us understand:

1.  **Energy absorption capacity:** Materials that can store more strain energy before yielding or fracturing are often preferred in applications where impact or sudden loads are expected. Think of shock absorbers in vehicles. They need to absorb energy efficiently.
2.  **Structural stability:** In some complex structures, the distribution of strain energy can indicate critical areas or modes of failure.
3.  **Failure analysis:** If a component fails, analyzing the strain energy density at the point of failure can sometimes provide clues about the failure mechanism.

**Relatable Example:**
Imagine you're a carpenter, and you're trying to saw through a thick wooden plank. The saw blade is applying a shear force. As you push the saw, you are doing work, and this work is being converted into:
*   Sound (the sawing noise)
*   Heat (friction between the blade and wood)
*   Deformation of the wood fibers (shear strain)

In an ideal elastic scenario, that deformation would store energy. If the wood were perfectly elastic and you could somehow remove the saw instantly, the stored energy would try to snap the wood back. For metals, this elastic recovery is very noticeable. For wood, it's a bit more complex due to its fibrous nature.

Another analogy: Think about the **torsional** deformation of a shaft, like the driveshaft in a car. When the engine applies torque, it causes the shaft to twist. This twisting induces shear stresses and shear strains throughout the material of the shaft. The energy required to twist the shaft is stored as strain energy due to shear. If the torque is removed, the shaft will untwist, releasing this stored energy. This is a direct application where calculating strain energy due to shear is vital for design.

*(This connects to CO3 and CO6, where calculating strain energy is used for design and analysis of structural members under torsional loads.)*

### Strain Energy Due to Shear Stress in Different Contexts

The formulas we derived ($U = \frac{\tau^2}{2G} \times Vol$ or $U = \frac{1}{2} G\gamma^2 \times Vol$) are for a uniformly stressed element. In real-world structural components, the shear stress distribution might not be uniform.

For instance, consider a **beam subjected to transverse shear**. While bending stress is usually dominant, shear stress also exists. For a rectangular beam cross-section, the shear stress distribution is parabolic, with maximum shear stress at the neutral axis and zero shear stress at the top and bottom surfaces. In such cases, we would need to integrate the strain energy density over the volume of the beam to find the total strain energy due to shear.

The formula for maximum shear stress in a rectangular beam of width $b$ and depth $h$ under a shear force $V$ is $\tau_{max} = \frac{3V}{2A}$, where $A=bh$. The average shear stress is $\tau_{avg} = \frac{V}{A}$. For a rectangular section, the shear stress distribution is such that the total strain energy due to shear is often expressed using an average shear stress or a factor accounting for the distribution.

A common approximation or simplification, particularly for introductory levels, is to use the average shear stress or consider specific cases. However, for precise analysis, integration over the stress distribution is necessary. Textbooks like Gere & Timoshenko or Popov's "Engineering Mechanics of Solids" will delve into these more advanced derivations for specific geometries like beams and shafts.

### Impact on Elastic Constants and Material Properties

The shear modulus ($G$) is one of the fundamental elastic constants of a material. The relationship between $G$, Young's Modulus ($E$), and Poisson's Ratio ($\nu$) is given by:
$G = \frac{E}{2(1+\nu)}$

This formula highlights how shear stiffness is intrinsically linked to axial stiffness ($E$) and the tendency of a material to contract laterally when stretched (Poisson's ratio, $\nu$). Understanding strain energy helps us appreciate why these constants are important and how they interrelate. If we can experimentally determine the strain energy absorbed by a material under shear loading, we can use it to back-calculate the shear modulus, which is valuable when direct measurement of $G$ is difficult.

*(This directly relates to CO4: Choose appropriate principles or formula to find the elastic constants of materials making use of the information available. Experimentally determining strain energy could be a method to find G.)*

### Key Takeaways and Exam Focus

*   **Strain Energy ($U$)**: The energy stored in a body due to deformation.
*   **Strain Energy Density ($u_{strain}$)**: Strain energy per unit volume.
*   **For Shear**:
    *   $u_{strain} = \frac{1}{2} \tau \gamma$
    *   $u_{strain} = \frac{\tau^2}{2G}$
    *   $u_{strain} = \frac{1}{2} G\gamma^2$
*   **Total Strain Energy ($U$) in Volume $Vol$**: $U = u_{strain} \times Vol$
*   **Key Formula**: $U = \frac{\tau^2}{2G} \times Vol$ (Most commonly used for direct calculations when $\tau$ is known)
*   **Application:** Crucial for understanding energy absorption, structural behavior under impact, and torsional rigidity.

**Exam Tip:** Be prepared to derive these formulas starting from the work done by the shear force. Also, be ready to apply them to simple geometries (like a shaft under torsion or an element under uniform shear) or to calculate strain energy density. Often, questions will ask for strain energy in a specific volume or component. Pay close attention to whether you need total strain energy or strain energy density.

### Connecting to Course Outcomes

Let's explicitly see how this topic ties into our broader course objectives:

*   **CO1 (Recall fundamental terms):** We've reinforced definitions of shear stress, shear strain, shear modulus, and strain energy.
*   **CO2 (Explain behavior/response):** Understanding strain energy helps explain a material's ability to absorb energy, influencing its response to dynamic loads or impacts.
*   **CO3 (Apply principles to calculate strain energies):** The core of this topic is the application of stress-strain relationships to calculate strain energy, especially for torsional situations.
*   **CO4 (Choose principles for elastic constants):** The relationship between strain energy and the shear modulus means that measuring strain energy could be a way to determine $G$.
*   **CO6 (Analyze structural member safely):** Knowing the strain energy capacity of a material is essential for ensuring a structure can safely withstand applied loads without excessive deformation or failure.

### Sample Questions with Answers

**Question 1:** A steel cube of side 50 mm is subjected to a shear stress of 100 MPa. If the shear modulus of steel is 80 GPa, calculate the strain energy stored in the cube.

**Answer:**
First, identify the given values:
*   Side of the cube, $s = 50 \, \text{mm} = 0.05 \, \text{m}$
*   Shear stress, $\tau = 100 \, \text{MPa} = 100 \times 10^6 \, \text{N/m}^2$
*   Shear Modulus, $G = 80 \, \text{GPa} = 80 \times 10^9 \, \text{N/m}^2$

The volume of the cube is $Vol = s^3 = (0.05 \, \text{m})^3 = 0.000125 \, \text{m}^3$.

The formula for strain energy ($U$) due to shear stress is:
$U = \frac{\tau^2}{2G} \times Vol$

Substitute the values:
$U = \frac{(100 \times 10^6 \, \text{N/m}^2)^2}{2 \times (80 \times 10^9 \, \text{N/m}^2)} \times 0.000125 \, \text{m}^3$
$U = \frac{10000 \times 10^{12}}{160 \times 10^9} \times 0.000125 \, \text{J}$
$U = \frac{10^{16}}{1.6 \times 10^{11}} \times 0.000125 \, \text{J}$
$U = 6.25 \times 10^4 \times 0.000125 \, \text{J}$
$U = 7.8125 \, \text{J}$

Therefore, the strain energy stored in the cube is 7.8125 Joules.

**Question 2:** Explain the concept of strain energy density due to shear stress and derive its formula. What is the significance of this concept in material selection?

**Answer:**
**Concept and Derivation:**
Strain energy is the energy absorbed by a material as it deforms elastically under stress. Strain energy density is defined as the strain energy stored per unit volume of the material.
When a material is subjected to shear stress ($\tau$), it undergoes shear strain ($\gamma$). The relationship between them is $\tau = G\gamma$, where $G$ is the Shear Modulus of Rigidity.
Consider a small volume element of material. When subjected to a shear stress $\tau$, it deforms. The work done by the shear force over the displacement is stored as strain energy.
For a linear elastic material, the shear stress-shear strain curve is a straight line passing through the origin. The strain energy stored per unit volume can be calculated as the area under this stress-strain curve.
Area under the curve = $\frac{1}{2} \times \text{base} \times \text{height}$
Strain Energy Density ($u_{strain}$) = $\frac{1}{2} \times \gamma \times \tau$
Substituting $\gamma = \frac{\tau}{G}$:
$u_{strain} = \frac{1}{2} \times \frac{\tau}{G} \times \tau = \frac{\tau^2}{2G}$
Alternatively, substituting $\tau = G\gamma$:
$u_{strain} = \frac{1}{2} \times \gamma \times G\gamma = \frac{1}{2} G\gamma^2$

**Significance in Material Selection:**
The strain energy density represents a material's capacity to absorb energy without permanent deformation. A higher strain energy density indicates that the material can withstand more deformation (and thus absorb more energy) elastically.
*   **Impact Resistance:** Materials with high strain energy density are desirable for applications where components might experience sudden impacts or shocks (e.g., automotive parts, protective gear). They can absorb the kinetic energy of impact by deforming elastically, preventing catastrophic failure.
*   **Toughness:** While related to fracture toughness, the ability to absorb strain energy is a component of overall toughness. Materials that can deform significantly and store a lot of energy before yielding are generally considered tougher.
*   **Design for Fatigue:** In some fatigue loading scenarios, understanding the energy absorbed can be relevant to predicting material life.

In essence, a higher strain energy density means a material is more resilient and can handle more deformation energy before permanent damage occurs. This is crucial for designing safe and reliable structures.

**Question 3:** A solid circular shaft of diameter $d$ and length $L$ is subjected to a torque $T$. Derive an expression for the total strain energy stored in the shaft due to shear stress.

**Answer:**
When a solid circular shaft of diameter $d$ is subjected to a torque $T$, it experiences shear stresses. The maximum shear stress occurs at the outer surface and is given by $\tau_{max} = \frac{16T}{\pi d^3}$.
The shear stress at a radial distance $r$ from the center is $\tau = \frac{16Tr}{\pi d^3}$.
The shear strain at radius $r$ is $\gamma = \frac{\tau}{G} = \frac{16Tr}{\pi Gd^3}$.

To find the total strain energy, we can consider a thin elemental cylindrical shell of radius $r$, thickness $dr$, and length $L$.
The volume of this elemental shell is $dV = (2\pi r \, dr) \times L$.
The shear stress in this elemental shell is $\tau = \frac{16Tr}{\pi d^3}$.
The strain energy stored in this elemental shell ($dU$) is given by:
$dU = \frac{\tau^2}{2G} \times dV$
$dU = \frac{1}{2G} \left(\frac{16Tr}{\pi d^3}\right)^2 \times (2\pi r \, dr \, L)$
$dU = \frac{1}{2G} \frac{256T^2 r^2}{\pi^2 d^6} \times 2\pi r L \, dr$
$dU = \frac{256 \pi T^2 L}{2 \pi^2 G d^6} r^3 \, dr$
$dU = \frac{128 T^2 L}{\pi G d^6} r^3 \, dr$

To find the total strain energy ($U$) in the shaft, we integrate this expression from the center ($r=0$) to the outer surface ($r = d/2$):
$U = \int_{0}^{d/2} \frac{128 T^2 L}{\pi G d^6} r^3 \, dr$
$U = \frac{128 T^2 L}{\pi G d^6} \int_{0}^{d/2} r^3 \, dr$
$U = \frac{128 T^2 L}{\pi G d^6} \left[ \frac{r^4}{4} \right]_{0}^{d/2}$
$U = \frac{128 T^2 L}{\pi G d^6} \left( \frac{(d/2)^4}{4} - 0 \right)$
$U = \frac{128 T^2 L}{\pi G d^6} \left( \frac{d^4}{16 \times 4} \right)$
$U = \frac{128 T^2 L}{\pi G d^6} \left( \frac{d^4}{64} \right)$
$U = \frac{128}{64} \frac{T^2 L}{\pi G d^2}$
$U = \frac{2 T^2 L}{\pi G d^2}$

We know that the polar moment of inertia for a solid circular shaft is $J = \frac{\pi d^4}{32}$. Also, we can express $\tau_{max} = \frac{16T}{\pi d^3}$, so $T = \frac{\tau_{max} \pi d^3}{16}$.
Let's use the shear stress at radius $r$: $\tau = \frac{16Tr}{\pi d^3}$.
The strain energy density is $\frac{\tau^2}{2G} = \frac{1}{2G} \left(\frac{16Tr}{\pi d^3}\right)^2$.
The volume element is $dV = 2\pi r L dr$.
$U = \int_0^{d/2} \frac{1}{2G} \left(\frac{16Tr}{\pi d^3}\right)^2 (2\pi r L dr)$
$U = \int_0^{d/2} \frac{1}{2G} \frac{256 T^2 r^2}{\pi^2 d^6} 2\pi r L dr$
$U = \frac{128 T^2 L}{\pi G d^6} \int_0^{d/2} r^3 dr$
$U = \frac{128 T^2 L}{\pi G d^6} \left[ \frac{r^4}{4} \right]_0^{d/2}$
$U = \frac{128 T^2 L}{\pi G d^6} \frac{d^4}{64} = \frac{2 T^2 L}{\pi G d^2}$

Let's verify this with a different form. We know that the angle of twist $\theta = \frac{TL}{GJ}$.
For a solid shaft, $J = \frac{\pi d^4}{32}$. So $\theta = \frac{32TL}{\pi Gd^4}$.
We also have $\tau_{max} = \frac{16T}{\pi d^3}$ and $\gamma_{max} = \frac{\tau_{max}}{G} = \frac{16T}{\pi Gd^3}$.
Notice that $\theta = \frac{\gamma_{max} L}{d/2}$.

The strain energy can also be written as $U = \frac{1}{2} T \theta$.
$U = \frac{1}{2} T \left(\frac{32TL}{\pi Gd^4}\right) = \frac{16 T^2 L}{\pi Gd^4}$.

Let's re-check the derivation for $U = \frac{2 T^2 L}{\pi G d^2}$. There might be a simplification or error in integrating or recalling formulas.

Let's go back to $U = \frac{\tau^2}{2G} \times Vol$. For a shaft, the volume is $Vol = \frac{\pi d^2}{4} L$.
However, $\tau$ varies with $r$. So we need integration.
$U = \int \frac{\tau(r)^2}{2G} dV$
$dV = 2\pi r dr L$
$\tau(r) = \frac{Tr}{J} = \frac{T r}{(\pi d^4/32)} = \frac{32Tr}{\pi d^4}$
$U = \int_0^{d/2} \frac{1}{2G} \left(\frac{32Tr}{\pi d^4}\right)^2 (2\pi r L dr)$
$U = \int_0^{d/2} \frac{1}{2G} \frac{1024 T^2 r^2}{\pi^2 d^8} (2\pi r L dr)$
$U = \frac{1024 T^2 L}{2\pi G d^8} \int_0^{d/2} r^3 dr$
$U = \frac{512 T^2 L}{\pi G d^8} \left[ \frac{r^4}{4} \right]_0^{d/2}$
$U = \frac{512 T^2 L}{\pi G d^8} \frac{(d/2)^4}{4} = \frac{512 T^2 L}{\pi G d^8} \frac{d^4}{64}$
$U = \frac{512}{64} \frac{T^2 L}{\pi G d^4} = \frac{8 T^2 L}{\pi G d^4}$.

Now let's use the $\frac{1}{2} T \theta$ relation:
$\theta = \frac{TL}{GJ} = \frac{TL}{G (\pi d^4/32)} = \frac{32TL}{\pi Gd^4}$.
$U = \frac{1}{2} T \theta = \frac{1}{2} T \left(\frac{32TL}{\pi Gd^4}\right) = \frac{16 T^2 L}{\pi Gd^4}$.

There seems to be a discrepancy in the factor. Let's re-examine $\tau(r)$ and its substitution.
The correct formula for shear stress in a circular shaft is $\tau = \frac{Tr}{J}$, where $J = \frac{\pi d^4}{32}$ for a solid shaft.
So $\tau = \frac{T r}{\pi d^4 / 32} = \frac{32Tr}{\pi d^4}$. This is correct.
The integration step:
$U = \frac{128 T^2 L}{\pi G d^6} \int_0^{d/2} r^3 dr$ used $\tau_{max} = \frac{16T}{\pi d^3}$.
Let's use the $\tau = \frac{Tr}{J}$ consistently.
$U = \int_0^{d/2} \frac{1}{2G} \left(\frac{Tr}{J}\right)^2 (2\pi r L dr)$
$U = \frac{2\pi L}{2GJ^2} \int_0^{d/2} T^2 r^3 dr$
$U = \frac{\pi L T^2}{GJ^2} \left[ \frac{r^4}{4} \right]_0^{d/2}$
$U = \frac{\pi L T^2}{GJ^2} \frac{(d/2)^4}{4} = \frac{\pi L T^2}{GJ^2} \frac{d^4}{64}$
Substitute $J = \frac{\pi d^4}{32}$:
$U = \frac{\pi L T^2}{G (\frac{\pi d^4}{32})^2} \frac{d^4}{64}$
$U = \frac{\pi L T^2}{G \frac{\pi^2 d^8}{32^2}} \frac{d^4}{64}$
$U = \frac{\pi L T^2 \cdot 32^2}{G \pi^2 d^8} \frac{d^4}{64}$
$U = \frac{1024 \pi L T^2}{64 \pi^2 G d^4} = \frac{16 L T^2}{\pi G d^4}$.

This result is consistent with $U = \frac{1}{2} T \theta$.
The formula derived using $\tau_{max}$ was indeed $\frac{8 T^2 L}{\pi G d^4}$. There was an error in the factor relating $\tau$ to $T$ in the initial integration setup. The most reliable method is $U = \frac{1}{2} T \theta$ or integrating $\frac{\tau^2}{2G} dV$ using $\tau = Tr/J$.

Final Answer using reliable derivation:
The strain energy stored in a solid circular shaft of length $L$ and diameter $d$ subjected to torque $T$ is $U = \frac{16 T^2 L}{\pi G d^4}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
