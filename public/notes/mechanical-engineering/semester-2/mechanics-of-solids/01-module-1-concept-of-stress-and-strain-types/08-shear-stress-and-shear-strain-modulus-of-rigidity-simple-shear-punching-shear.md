---
title: "Shear stress and shear strain, Modulus of rigidity, simple shear, punching shear"
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Concept of stress and strain – types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839ee"
status: "completed"
scrapedAt: "2026-05-20T17:46:13.327Z"
---
# Mechanics of Solids: Module 1 - Concept of Stress and Strain – Types

Welcome, everyone! Today, we're diving into the foundational concepts of Mechanics of Solids, specifically focusing on **stress and strain**. Understanding these basic building blocks is crucial for everything we'll cover later in the course. Think of it like learning your ABCs before you can write an essay. Our goal today is to grasp how forces applied to a solid material cause internal effects, which we call stress, and how the material deforms in response, which we call strain. We'll explore different *types* of stress and strain, and today, we'll zero in on **Shear Stress and Shear Strain**, along with related concepts like the **Modulus of Rigidity**, **Simple Shear**, and **Punching Shear**.

This topic directly links to several of our course outcomes:

*   **CO1: Recall the fundamental terms and theorems associated with mechanics of linear elastic deformable bodies.** (Knowledge Level: K1) - We'll be defining key terms like shear stress, shear strain, and modulus of rigidity.
*   **CO2: Explain the behavior and response of various structural elements under various loading conditions.** (Knowledge Level: K2) - Understanding shear effects helps us explain how things like bolted joints or shafts behave under twisting.
*   **CO3: Apply the principles of solid mechanics to calculate internal stresses/strains...** (Knowledge Level: K3) - We'll be looking at formulas to calculate shear stress and strain.
*   **CO4: Choose appropriate principles or formula to find the elastic constants of materials...** (Knowledge Level: K3) - The Modulus of Rigidity is one of these elastic constants!
*   **CO5: Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point...** (Knowledge Level: K3) - Today's topic lays the groundwork for understanding shear stress at a point, which is vital for stress transformation.

Let's get started!

## Understanding Stress and Strain: A Quick Recap

Before we zoom into shear, let's briefly revisit the general concepts of stress and strain.

**Stress ($\sigma$)**: Imagine you have a bar, and you pull on both ends with a force $P$. Inside that bar, at any given cross-section, there's an internal resistance to this pulling force. Stress is essentially this internal resistance per unit area. It's the force distributed over the area that the material is experiencing. We typically measure stress in units like Pascals (Pa) or MegaPascals (MPa), which is Newtons per square millimeter ($N/mm^2$).

**Strain ($\epsilon$)**: When you apply a force, the material deforms. If you pull a bar, it gets longer. Strain is a measure of this deformation relative to its original size. It’s a dimensionless quantity, often expressed as a percentage or a ratio of change in length to original length ($\Delta L / L$).

So, stress is the *cause* (internal resistance to external force) and strain is the *effect* (deformation).

### Normal Stress vs. Shear Stress

We've likely already discussed **normal stress**, which is caused by forces acting **perpendicular** to a surface. Think of stretching a rubber band or compressing a spring. The force is perpendicular to the cross-sectional area.

Now, let's introduce **Shear Stress**.

## Shear Stress and Shear Strain: The Sliding Effect

What happens when the force applied is **parallel** to the surface, or rather, parallel to the cross-sectional area? This is where **shear stress** comes into play.

### Shear Stress ($\tau$)

**Definition:** Shear stress is the internal resistance force per unit area acting **parallel** to the cross-sectional area of a material.

Think about it this way: Imagine a deck of cards. If you push the top card horizontally while holding the bottom card fixed, the cards slide over each other. The forces you're applying are parallel to the surfaces between the cards.

In a solid material, if we apply forces that tend to slide one part of the material past another, we induce shear stress.

**Formula:**
$$ \tau = \frac{P_s}{A} $$
Where:
*   $\tau$ (tau) is the shear stress.
*   $P_s$ is the applied shear force (the force acting parallel to the area).
*   $A$ is the area to which the shear force is applied.

This formula is fundamental and very much related to **CO1** (defining terms) and **CO3** (calculating stress).

**Real-world Example:**
Think of a **rivet** connecting two metal plates. When the plates are pulled in opposite directions, the rivet is subjected to a force that tries to shear it off at the joint. The force acting on the rivet is parallel to the cross-sectional area of the rivet. This is a classic example of shear stress.

Another common example is a **bolt or a pin** in a joint. If you have two links connected by a pin, and you pull the links apart, the pin experiences shear.

### Shear Strain ($\gamma$)

Just as stress causes deformation, shear stress causes a specific type of deformation called **shear strain**.

**Definition:** Shear strain is a measure of the deformation of a material when subjected to shear stress. It quantifies the change in angle between adjacent lines that were originally perpendicular.

Imagine our deck of cards again. When you push the top card, the deck deforms. Lines that were originally vertical and horizontal now become sloped. Shear strain measures how much these lines are distorted.

**How we measure it:** Shear strain, denoted by the Greek letter gamma ($\gamma$), is usually defined as the displacement of one plane relative to another, divided by the distance between those planes. Or, more formally, it's the tangent of the angle of distortion.

Consider a rectangular block. If we apply shear force to the top surface, it moves horizontally. The original right angles at the corners are distorted.

Let's say a vertical line in the material, originally perpendicular to the top and bottom surfaces, is now slightly inclined. The angle of distortion, $\phi$, is the change in the original right angle. For small deformations, shear strain ($\gamma$) is approximately equal to this angle $\phi$ when measured in radians.

So, if the top surface of a block of height $h$ is displaced by a distance $x$ relative to the bottom surface, the shear strain $\gamma$ is given by:
$$ \gamma = \frac{x}{h} $$
This is again directly related to **CO1** and **CO3**.

**Analogy:** Imagine you're sitting at your desk, and you push horizontally on a stack of books. The books slide relative to each other. If you look at the corner of the stack, the right angle has distorted into an acute angle. Shear strain is related to how much that angle changes.

### Modulus of Rigidity (G)

Now, just like normal stress and normal strain are related by the Modulus of Elasticity (Young's Modulus, $E$), shear stress and shear strain are related by a material property called the **Modulus of Rigidity**.

**Definition:** The Modulus of Rigidity, also known as the shear modulus, is a measure of a material's resistance to shear deformation. It is defined as the ratio of shear stress to shear strain within the elastic limit.

This is a crucial elastic constant, and it helps us fulfill **CO4**.

**Formula:**
$$ G = \frac{\tau}{\gamma} $$
Where:
*   $G$ is the Modulus of Rigidity (Shear Modulus).
*   $\tau$ is the shear stress.
*   $\gamma$ is the shear strain.

The units of $G$ are the same as stress (e.g., Pascals or MPa) because strain is dimensionless.

**What it tells us:** A high value of $G$ means the material is very stiff in shear and will deform very little under a given shear stress. Think of steel – it's quite rigid. A material with a low $G$, like rubber, will deform significantly under shear.

**Relationship with other Elastic Constants:** For isotropic materials (materials that have the same properties in all directions), there's a relationship between $E$, $G$, and Poisson's Ratio ($\nu$):
$$ G = \frac{E}{2(1 + \nu)} $$
This formula is important and you might see it tested in exams. Remember this relation as it connects different material properties.

## Simple Shear

**Simple shear** is a fundamental state of stress where the material is subjected to forces that cause it to distort without any change in volume (ideally, in the elastic region).

**Definition:** Simple shear is a state of strain in which parallel planes within a material slide relative to each other, and the shear stress is uniform across a section.

**How it's achieved:** This condition is often visualized by applying equal and opposite forces on the top and bottom surfaces of a rectangular block, or by applying forces on the sides.

**Example:** Imagine a thin rectangular plate clamped at the bottom edge and a force applied parallel to the top edge. The plate will deform, and the deformation is largely due to shear. If the plate is thin, we can approximate this as a simple shear scenario.

**Punching Shear:** This is a very practical application of shear stress, especially in engineering design.

**Definition:** Punching shear occurs when a load is applied through a tool (like a punch) that pierces through a sheet of material. The material is subjected to shear stress along the perimeter of the hole being created.

**Real-world Example:**
Consider a **hole punch** you might use for paper. When you press down, the metal punch exerts a force on the paper. This force is concentrated around the edge of the circular punch. The paper is essentially being sheared along the circular cut line. The force required to punch the hole is the force needed to overcome the shear strength of the paper along that perimeter.

In structural engineering, think about:
*   **Punching through a concrete slab:** When a heavy column bears down on a concrete slab, the concrete around the column's base can experience punching shear. The slab material is stressed in shear along the perimeter of the column's contact area. This is a critical failure mode to check in slab design.
*   **Sheet metal stamping:** When forming parts from sheet metal, punches are used to create holes or cut shapes. The metal is subjected to punching shear.

**Calculation for Punching Shear:**
For punching shear, the shear force ($P_s$) is the applied load, and the area ($A$) is the surface area of the material that is being sheared.

If a circular punch of diameter $d$ is used to create a hole in a sheet of thickness $t$, the area subjected to shear is the lateral surface area of a cylinder with diameter $d$ and height $t$.
$$ A = \text{Circumference} \times \text{Thickness} = (\pi d) \times t $$
The shear stress is then:
$$ \tau = \frac{P_s}{\pi d t} $$
This is crucial for designing connections, structural members, and understanding failure mechanisms, tying into **CO3** and **CO6** (analyzing structural members to calculate safe loads).

## Connecting to Learning Outcomes

Let's briefly recap how this topic maps to our learning outcomes:

*   **CO1 (Recall fundamental terms):** We've defined shear stress ($\tau$), shear strain ($\gamma$), and Modulus of Rigidity ($G$).
*   **CO2 (Explain behavior):** Understanding shear stress helps us explain why certain connections (like riveted or bolted joints) fail in shear, or how shafts twist. We can explain the "sliding" behavior under parallel forces.
*   **CO3 (Apply principles to calculate):** We've seen formulas: $\tau = P_s/A$, $\gamma = x/h$, and $G = \tau/\gamma$. These are direct applications.
*   **CO4 (Choose appropriate principles for elastic constants):** The Modulus of Rigidity ($G$) is an elastic constant, and we've seen its definition and its relation to Young's Modulus ($E$) and Poisson's Ratio ($\nu$).
*   **CO5 (Perform stress transformations, identify max shear):** While we haven't done transformations yet, understanding shear stress at a point is the first step. Shear stress is one of the components you deal with when finding principal stresses and maximum shear stress.
*   **CO6 (Analyze structural members for safe load):** Punching shear is a prime example. By calculating the shear stress in a concrete slab or a bolt, we can determine the safe load it can carry before failing in shear.

## Key Takeaways

Remember these points as you move forward:

*   **Shear stress** acts **parallel** to the area.
*   **Shear strain** is a measure of angular distortion.
*   **Modulus of Rigidity ($G$)** is the material property relating shear stress and shear strain ($G = \tau/\gamma$).
*   **Punching shear** is a practical case where a load pierces a material, causing shear along the perimeter. The area for punching shear is usually a cylindrical surface.

Understanding these concepts thoroughly will make our journey through Mechanics of Solids much smoother. Keep these definitions and formulas handy!

---

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style.

**Q1. Conceptual Question:**
Explain the difference between normal stress and shear stress using an everyday example.

**Answer:**
Normal stress occurs when forces act perpendicular to a surface, like stretching a rubber band. The force pulls or pushes directly against the area. Shear stress, on the other hand, occurs when forces act parallel to a surface, tending to slide one part of the material over another. A good example is using scissors. When you cut paper with scissors, the two blades exert forces parallel to the paper's cross-section, causing it to shear. The forces are not pulling the paper apart (normal stress) or compressing it (normal stress), but sliding past each other.

**Q2. Calculation Question:**
A circular bolt of diameter 20 mm is used to connect two plates. The plates are pulled with a force of 50 kN, which tends to shear the bolt. Calculate the shear stress in the bolt.

**Solution:**
We are given:
*   Bolt diameter, $d = 20$ mm
*   Shear force, $P_s = 50$ kN $= 50 \times 10^3$ N

The area of the bolt cross-section is a circle:
$A = \frac{\pi d^2}{4}$
$A = \frac{\pi (20 \text{ mm})^2}{4} = \frac{\pi \times 400}{4} = 100 \pi \text{ mm}^2$

Now, we calculate the shear stress $\tau$ using the formula $\tau = \frac{P_s}{A}$:
$\tau = \frac{50 \times 10^3 \text{ N}}{100 \pi \text{ mm}^2}$
$\tau = \frac{500}{\pi} \text{ N/mm}^2$
$\tau \approx \frac{500}{3.14159} \text{ N/mm}^2$
$\tau \approx 159.15 \text{ N/mm}^2$ or 159.15 MPa.

*Self-Check:* The force is trying to cut the bolt, so it's shear stress. The area is the circular face of the bolt. Units are consistent.

**Q3. Conceptual & Application Question:**
Describe the phenomenon of punching shear in the context of a concrete slab supporting a column. Why is it important to consider this type of stress?

**Answer:**
Punching shear occurs in a concrete slab when a concentrated load, typically from a column, is applied over a small area. The slab material around the column's base is subjected to shear forces as the column tries to "punch" through the slab. Imagine the column pushing down, and the slab material resisting this by trying to shear off around the perimeter of the column.

It is critically important to consider punching shear because:
1.  **Failure Mode:** Punching shear is a brittle and sudden failure mode. Unlike bending failure, which often gives warning signs, a punching shear failure can occur rapidly and catastrophically, leading to progressive collapse of the structure.
2.  **Load Bearing Capacity:** The ability of a slab to resist punching shear dictates the maximum load a column can transfer to the slab. If the punching shear stress exceeds the concrete's shear strength, failure will occur.
3.  **Structural Design:** Engineers must calculate the shear stress around the column and ensure it is well below the allowable shear strength of the concrete. This often involves designing the slab thickness, or adding shear reinforcement (like stirrups or shear heads) around the column to prevent punching shear failure.

This directly relates to **CO6** as it's an analysis of a structural member's load-carrying capacity against a specific failure mode.

**Q4. Formula Recall Question:**
What is the relationship between the Modulus of Rigidity ($G$), Young's Modulus ($E$), and Poisson's Ratio ($\nu$) for an isotropic material?

**Answer:**
For an isotropic material, the relationship is given by:
$$ G = \frac{E}{2(1 + \nu)} $$
This formula highlights that the shear stiffness ($G$) is related to the axial stiffness ($E$) and the material's tendency to contract in the lateral direction when stretched ($\nu$). This aligns with **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
