---
title: "Concept of bending moment and shear force"
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Beams – different types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f6a"
status: "completed"
scrapedAt: "2026-05-20T18:37:22.013Z"
---
## MECHANICS OF SOLIDS

### Module 2: Beams – Different Types

#### Topic: Concept of Bending Moment and Shear Force

Welcome, everyone! Today, we embark on a crucial journey into understanding how beams behave under load. Beams are the unsung heroes of our built environment, supporting floors, bridges, and countless other structures. But what happens *inside* a beam when you put a load on it? That's precisely what we'll explore by dissecting the concepts of **Shear Force** and **Bending Moment**. These are the fundamental internal forces that dictate a beam's strength and how it deforms.

**(Connecting to Course Outcomes: CO1, CO2, CO3)**
Understanding shear force and bending moment is the bedrock of mechanics of solids. It allows us to **recall (K1)** fundamental terms, **explain (K2)** how structural elements like beams respond to loads, and crucially, **apply (K3)** these principles to calculate internal stresses and "stress resultants" – which is exactly what shear force and bending moment are.

### Understanding Beams and Loads

Before diving into the forces, let's quickly recap what a beam is and the kinds of loads it might experience.

A **beam** is essentially a structural element that primarily resists loads applied laterally to its longitudinal axis. Think of a shelf holding books, or a bridge deck carrying traffic.

Loads can come in various forms:

*   **Concentrated Load (Point Load):** A load applied at a single point, like a person standing on a plank.
*   **Uniformly Distributed Load (UDL):** A load spread evenly over a length, like the weight of a carpet on a floor.
*   **Uniformly Varying Load (UVL):** A load that increases or decreases linearly along its length, like the pressure from water in a dam.

These loads, acting externally, create internal responses within the beam. And these internal responses are what we call Shear Force and Bending Moment.

### The Concept of Shear Force

Imagine you have a wooden ruler and you try to bend it. What do you feel happening *within* the ruler, just before it snaps? There's a tendency for one part of the ruler to slide vertically past another. This tendency to shear or slide is what we quantify as **Shear Force**.

Let's formalize this.

**Definition:** Shear force at any section of a beam is the algebraic sum of the vertical forces acting on either side of the section.

**How to Visualize it:**
Think about cutting the beam at a specific point.
*   If you consider the left side of the cut, the shear force is the sum of all upward forces minus all downward forces on that left portion.
*   If you consider the right side, it's the sum of all downward forces minus all upward forces on that right portion.

**Sign Convention (Very Important!):**
This is where things can get a bit tricky if you don't establish a clear convention. The most common and widely accepted convention is:

*   **Positive Shear:** When the forces on the left section tend to move the section *upwards* relative to the right section, or when forces on the right section tend to move the section *downwards* relative to the left section. (Think of forces pushing the beam *up* from below or *down* from above).
*   **Negative Shear:** When the forces on the left section tend to move the section *downwards* relative to the right section, or when forces on the right section tend to move the section *upwards* relative to the left section. (Think of forces pushing the beam *down* from below or *up* from above).

**Analogy:**
Imagine you're holding a stack of books. If you push down on the top book with your right hand and someone else pushes up on the bottom book with their left hand, the books in the middle are experiencing shear. If you were to slice through the stack, one side wants to slide up relative to the other.

**(Connecting to Course Outcomes: CO1, CO2, CO3, CO6)**
Understanding shear force allows us to **recall (K1)** its definition, **explain (K2)** the internal resistance to sliding, and **apply (K3)** it to analyze how beams resist vertical loads. Ultimately, this helps us **analyze (K4)** a beam to determine its load-carrying capacity.

**Example:**
Consider a simply supported beam with a single downward concentrated load at its center.

```
      <----- L ----->
      +--------------+
      |              |
      A------P-------B   (P is the load, A and B are supports)
```

If we make a cut just to the left of the load `P`:
*   The left portion has the upward reaction force at `A`. Let's call it `R_A`.
*   The shear force at the cut is `R_A` (upwards). By our convention, this is a positive shear force.

If we make a cut just to the right of the load `P`:
*   The left portion includes the reaction force `R_A` and the downward load `P`. The sum of vertical forces to the left is `R_A - P`.
*   The shear force at this cut is `R_A - P`.

**Key Takeaway:** Shear force is about the *sum of vertical forces* on one side of a section. It represents the internal tendency for one part of the beam to slide past another.

### The Concept of Bending Moment

Now, let's consider what happens when you bend a ruler. The top surface gets compressed, and the bottom surface gets stretched, or vice versa depending on how you bend it. This stretching and compressing, this *bending*, is caused by a **Bending Moment**.

**Definition:** Bending moment at any section of a beam is the algebraic sum of the moments of all the forces acting on either side of the section about that section.

**How to Visualize it:**
Again, imagine cutting the beam at a specific point.
*   If you consider the left side of the cut, the bending moment is the sum of the moments of all forces (and reactions) to the left of the section, taken about the section itself.
*   If you consider the right side, it's the sum of the moments of all forces to the right of the section, taken about the section.

**Sign Convention (Equally Important!):**
This is where things can be visualized as "sagging" or "hogging."

*   **Positive Bending Moment (Sagging):** When the forces on the left section cause a *clockwise* moment about the section, or when forces on the right section cause an *anticlockwise* moment about the section. This results in the beam bending downwards, like a smiley face :). The top fibers are in compression, and the bottom fibers are in tension.
*   **Negative Bending Moment (Hogging):** When the forces on the left section cause an *anticlockwise* moment about the section, or when forces on the right section cause a *clockwise* moment about the section. This results in the beam bending upwards, like a frowny face :(. The top fibers are in tension, and the bottom fibers are in compression.

**Analogy:**
Think about holding a flexible stick and trying to bend it downwards. Your hands create moments. If you hold the ends of the stick and push the middle down, you're creating a sagging moment. The stick bends, with the top surface getting shorter (compressed) and the bottom surface getting longer (stretched). This tendency to bend is quantified by the bending moment.

**(Connecting to Course Outcomes: CO1, CO2, CO3, CO6)**
Bending moment is crucial. We **recall (K1)** its definition, **explain (K2)** how beams deform under load due to this internal moment, and **apply (K3)** it to calculate the internal resisting moment. This is fundamental to **analyzing (K4)** the bending stresses and ensuring the beam doesn't fail due to excessive bending.

**Example:**
Let's use the same simply supported beam with a downward concentrated load `P` at its center. Let the beam span be `L`. The reactions at supports `A` and `B` will each be `P/2`.

```
      <----- L ----->
      +--------------+
      |              |
      A------P-------B   (P is the load, A and B are supports)
      R_A = P/2      R_B = P/2
```

Consider a section at a distance `x` from the left support `A`.

**Case 1: Section to the left of the load `P` (0 < x < L/2)**
*   Forces on the left: Reaction `R_A = P/2` acting upwards at `A`.
*   Moment about the section at `x`: The force `R_A` is acting at a distance `x` from the section. This force tends to cause a clockwise rotation of the left segment about the section.
*   According to our convention, a clockwise moment on the left segment is **positive**.
*   So, Bending Moment `M_x = R_A * x = (P/2) * x`. This is a positive bending moment, indicating sagging.

**Case 2: Section to the right of the load `P` (L/2 < x < L)**
*   Forces on the left: Reaction `R_A = P/2` (upwards) at `A` and the load `P` (downwards) at `L/2`.
*   Moment about the section at `x`:
    *   Moment due to `R_A`: `R_A * x = (P/2) * x`. This causes a clockwise rotation (positive).
    *   Moment due to `P`: `P * (x - L/2)`. This force is at a distance `(x - L/2)` from the section. It tends to cause an anticlockwise rotation of the left segment (negative moment).
*   So, Bending Moment `M_x = R_A * x - P * (x - L/2)`
    `M_x = (P/2) * x - P * x + P * (L/2)`
    `M_x = P * (L/2) - (P/2) * x`

Notice that at the center `x = L/2`, `M_(L/2) = (P/2) * (L/2) = PL/4`. This is the maximum positive bending moment.

**Key Takeaway:** Bending moment is about the *sum of moments* of forces on one side of a section. It represents the internal tendency of the beam to bend.

### Relationship between Shear Force and Bending Moment

This is a very important theoretical link that is often tested. How do these two relate?

Consider a small elemental length `dx` of a beam. Let `V` be the shear force at the left end of the element and `M` be the bending moment at the left end. At the right end of the element, the shear force will be `V + dV` and the bending moment will be `M + dM`.

Let's analyze the equilibrium of this elemental length.
If there's a downward force `w dx` (where `w` is the distributed load per unit length) acting on the element, then for vertical equilibrium:
Sum of vertical forces = 0
`V - (V + dV) - w dx = 0`
`-dV - w dx = 0`
`dV/dx = -w`

This tells us that the rate of change of shear force with respect to length is equal to the negative of the distributed load.

Now, let's consider moments about the right end of the element. For rotational equilibrium:
Sum of moments about the right end = 0
`M + V dx - (M + dM) - (w dx) * (dx/2) = 0`
The term `(w dx) * (dx/2)` is a moment due to the distributed load, acting at the center of the element. This is a second-order small quantity (`dx^2`) and can be neglected.
`M + V dx - M - dM = 0`
`V dx - dM = 0`
`dM/dx = V`

This is a fundamental relationship: **The rate of change of bending moment with respect to length is equal to the shear force.**

**(Connecting to Course Outcomes: CO1, CO2, CO3, CO5, CO6)**
This relationship is critical for **recalling (K1)** key theorems and **explaining (K2)** the behaviour of beams. It's also vital for **applying (K3)** methods like the integration method to find bending moments from shear forces (or vice-versa). This connection is fundamental for **analyzing (K4)** beam behaviour and calculating stresses.

**Summary of Relationships:**

*   `dV/dx = -w` (Rate of change of shear force equals negative of distributed load)
*   `dM/dx = V` (Rate of change of bending moment equals shear force)

What if there's no distributed load (`w=0`)? Then `dV/dx = 0`, meaning shear force is constant. And `dM/dx = V`, meaning the bending moment changes linearly with `x`.

What if there's a concentrated load? At the point of concentrated load, the shear force diagram jumps (discontinues). The bending moment diagram, however, will be continuous but might have a sharp change in slope at that point.

**(Exam Tip):** These relationships are gold for sketching shear force diagrams (SFD) and bending moment diagrams (BMD). If you know the load, you know the slope of the SFD. If you know the SFD, you know the slope of the BMD. Where SFD is zero, BMD is maximum or minimum.

### Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD)

These diagrams are visual representations of the shear force and bending moment values along the length of the beam. They are indispensable tools for understanding a beam's internal state and designing it safely.

*   **SFD:** Plots shear force (y-axis) against the position along the beam (x-axis).
*   **BMD:** Plots bending moment (y-axis) against the position along the beam (x-axis).

**(Connecting to Course Outcomes: CO2, CO3, CO6)**
Constructing SFD and BMD is a direct application of these concepts, allowing us to **explain (K2)** the load response and **apply (K3)** principles to calculate stress resultants. The analysis of these diagrams is key to **analyzing (K4)** the beam's load-carrying capacity and determining critical sections.

### Why are these important for design?

When a beam is subjected to bending, internal stresses develop.

*   In a **sagging** beam (positive bending moment), the top fibers are compressed, and the bottom fibers are stretched (tension).
*   In a **hogging** beam (negative bending moment), the top fibers are in tension, and the bottom fibers are compressed.

The magnitude of these stresses is directly proportional to the bending moment at that section, and inversely proportional to the section's properties (like the section modulus). The shear force also causes shear stresses.

By calculating the maximum shear force and maximum bending moment from our SFD and BMD, we can determine the critical locations in the beam where the stresses are highest. This allows us to:

1.  **Select appropriate materials:** Knowing the stresses, we can choose materials that can withstand them.
2.  **Design the cross-section:** We can determine the necessary dimensions (depth, width) of the beam to ensure that the stresses induced by the maximum shear force and bending moment do not exceed the material's allowable stress limits.
3.  **Ensure safety:** This is the ultimate goal – to design structures that are safe and reliable under all expected loading conditions.

**(Connecting to Course Outcomes: CO3, CO6)**
This is where we fully **apply (K3)** our understanding to calculate stresses and **analyze (K4)** the beam's load-carrying capacity for safe design.

---

### Sample Questions with Answers

**Q1. What is the fundamental relationship between shear force and bending moment?**

**Answer:** The fundamental relationship is that the rate of change of bending moment with respect to the length of the beam is equal to the shear force at that section (`dM/dx = V`). Conversely, the rate of change of shear force is equal to the negative of the distributed load (`dV/dx = -w`). These relationships are crucial for constructing Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD).

**Q2. Explain the sign convention for bending moment, relating it to the shape of the bent beam.**

**Answer:**
*   **Positive Bending Moment (Sagging):** This occurs when the bending causes the beam to curve downwards, like a smiley face :). The top fibers are in compression, and the bottom fibers are in tension. Conventionally, this is achieved by clockwise moments on the left section or anticlockwise moments on the right section.
*   **Negative Bending Moment (Hogging):** This occurs when the bending causes the beam to curve upwards, like a frowny face :(. The top fibers are in tension, and the bottom fibers are in compression. Conventionally, this is achieved by anticlockwise moments on the left section or clockwise moments on the right section.

**Q3. A simply supported beam of span 6m has a uniformly distributed load of 2 kN/m over its entire length. Determine the maximum bending moment and its location.**

**Solution:**
For a simply supported beam with a UDL of `w` over its entire span `L`, the maximum bending moment occurs at the center of the span, and its value is given by `wL²/8`.

Given:
*   Span, `L = 6 m`
*   Uniformly distributed load, `w = 2 kN/m`

Maximum Bending Moment `M_max = (w * L^2) / 8`
`M_max = (2 kN/m * (6 m)^2) / 8`
`M_max = (2 * 36) / 8`
`M_max = 72 / 8`
`M_max = 9 kN-m`

The location of the maximum bending moment is at the **center of the span**, which is `L/2 = 6m / 2 = 3m` from either support.

**Q4. When is the bending moment zero in a beam? Is the shear force also zero at this point?**

**Answer:**
The bending moment can be zero at a few specific locations:

1.  **At supports for simply supported beams or beams with pin/roller supports:** For a simply supported beam, the bending moment at the supports is theoretically zero because there are no external moments applied at the supports, and the reactions are usually considered to act through the centroid of the cross-section.
2.  **At points of contra-flexure (or inflection points):** These are points where the bending moment changes sign (from positive to negative or vice-versa). At these specific points, the bending moment is zero, but the shear force is generally **not** zero.
3.  **In cantilever beams at the free end:** For a cantilever beam fixed at one end and free at the other, the bending moment at the free end is zero, provided no load is applied at the free end itself.

Regarding shear force:
If the bending moment is zero at a support of a simply supported beam, the shear force is generally **not** zero unless the beam has no load on it at all or the load is perfectly symmetrical such that shear at that point becomes zero. For example, in a simply supported beam with a central point load, the shear force is non-zero at the supports. At a point of contra-flexure, the bending moment is zero, but the shear force is typically non-zero and may even be maximum or minimum where the moment is zero.

**Q5. If the shear force diagram for a beam section is a horizontal straight line, what can you say about the bending moment diagram at that section?**

**Answer:**
According to the relationship `dM/dx = V`, if the shear force `V` is constant (represented by a horizontal straight line in the SFD), then the rate of change of bending moment `dM/dx` is constant. This means that the bending moment diagram (`BMD`) in that section will be a **straight line with a constant slope**. The slope of the BMD will be equal to the value of the shear force in that section. If `V` is positive, the BMD will be a sloping line upwards to the right. If `V` is negative, it will be sloping downwards to the right.
