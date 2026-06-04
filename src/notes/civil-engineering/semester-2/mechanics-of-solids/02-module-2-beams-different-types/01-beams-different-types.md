---
title: "Beams – different types"
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Beams – different types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f68"
status: "completed"
scrapedAt: "2026-05-20T18:37:20.596Z"
---
# Mechanics of Solids: Module 2 - Beams: Different Types

Welcome everyone to Module 2 of Mechanics of Solids! Today, we're diving into a fundamental structural element that you'll encounter everywhere, from the bridges you drive on to the floors of your buildings: **beams**. Understanding beams is absolutely crucial for any engineer. It's how we design structures to safely carry loads without collapsing. This module is all about getting to know these versatile components and how they behave under stress.

## 1. What is a Beam? Laying the Foundation (CO1: K1, CO2: K2)

Before we start classifying beams, let's make sure we're all on the same page about what a beam *is*.

At its core, a beam is a structural member that is primarily subjected to **transverse loads**. What does "transverse" mean? It means the load is applied perpendicular to the longitudinal axis of the member. Think about a simple bookshelf. The books are placed on the shelf, and their weight pushes downwards, perpendicular to the length of the shelf. That shelf is acting as a beam.

When these transverse loads are applied, they cause internal **bending moments** and **shear forces** within the beam. These internal forces are what we'll be analyzing throughout this course to understand how the beam deforms and what stresses develop. It’s important to remember this fundamental definition: beams resist transverse loads primarily through bending. This is a key concept that underpins everything we do with beams. You'll see this repeatedly emphasized in texts like "Mechanics of Structures" by Shah and Junnarkar and "A Text book of Strength of Materials" by R. K. Bansal.

## 2. Classifying Beams: How Do They Behave? (CO2: K2)

The way a beam is supported significantly influences how it carries loads and distributes internal forces. This is why we classify beams based on their support conditions. Understanding these classifications is essential for predicting a beam's behavior and applying the correct analysis techniques. Let's explore the most common types:

### 2.1 Simply Supported Beam

Imagine a plank of wood resting on two simple supports at its ends, with no restriction on rotation or horizontal movement. This is a **simply supported beam**. Think of a basic plank bridge across a small stream, where each end rests freely on the bank.

*   **Characteristics:** Supported at both ends, allowing rotation. No external moments are applied at the supports.
*   **Behavior:** When a load is applied, it causes bending. The maximum bending moment often occurs somewhere between the supports, and the reactions at the supports are vertical forces.

**(CO2 Connection):** This simple setup allows us to understand the basic mechanics of bending without the complexities of fixed supports. It's the starting point for many beam analyses.

### 2.2 Cantilever Beam

Now, picture a diving board. One end is firmly fixed into the ground or a strong base, while the other end extends outwards, free to deflect under the weight of someone standing on it. That’s a **cantilever beam**.

*   **Characteristics:** Fixed at one end and free at the other. The fixed end must resist vertical forces, horizontal forces, and bending moments.
*   **Behavior:** The free end is where the deflection is usually greatest. The bending moment is maximum at the fixed support and zero at the free end. This type of beam is very common in balconies, aircraft wings, and projecting shelves.

**(CO2 Connection):** Cantilevers demonstrate how a fixed support dramatically alters the load distribution and internal forces. It’s a great example of how boundary conditions dictate structural response.

### 2.3 Overhanging Beam

What if a beam is supported at two points, but then extends beyond one or both of these supports? That's an **overhanging beam**. Think of a walkway that extends beyond its supporting pillars.

*   **Characteristics:** Has one or both ends projecting beyond the supports.
*   **Behavior:** The portions beyond the supports behave somewhat like cantilevers, experiencing negative bending moments (causing tension on the top fibers). The portion between the supports behaves like a simply supported beam. This variation is crucial for designing structures where longer spans are needed or where supports are positioned strategically.

**(CO2 Connection):** Overhanging beams introduce the concept of different bending moment signs and how supports can create both positive and negative bending across a single member.

### 2.4 Fixed Beam (or Built-in Beam)

Consider a beam whose ends are rigidly built into walls. The walls prevent not only vertical movement but also rotation at the ends. This is a **fixed beam**. Imagine a steel beam securely embedded in concrete columns on both sides.

*   **Characteristics:** Both ends are fixed, preventing rotation and vertical displacement.
*   **Behavior:** The fixed supports introduce reactions that are not just vertical forces but also moments. These end moments influence the overall bending moment diagram, often reducing the maximum bending moment within the span compared to a simply supported beam of the same length and loading.

**(CO2 Connection):** Fixed beams showcase how restricting rotation at supports significantly changes the internal forces and deflections, leading to potentially more efficient designs. Punmia's "Mechanics of Materials" often details the analysis of these.

### 2.5 Continuous Beam

Finally, think of a railway track or a long bridge deck supported by multiple piers. These are examples of **continuous beams**.

*   **Characteristics:** A beam supported at more than two points.
*   **Behavior:** The presence of multiple supports creates multiple spans. The bending moment at a support is often negative (hogging), while between supports it’s positive (sagging). The analysis of continuous beams is more complex, often involving methods like the three-moment equation, which you'll learn about later.

**(CO2 Connection):** Continuous beams highlight how load distribution is spread across multiple supports, making them very efficient for longer spans and reducing the maximum bending moments in individual spans.

## 3. Why Does Classification Matter? Connecting to Course Outcomes (CO2: K2, CO6: K4)

So, why do we spend time categorizing beams? It's not just for the sake of classification. **The type of beam dictates the equations we use to calculate internal forces (shear force and bending moment), the resulting stresses, and the deflections.**

If you have a simply supported beam and you analyze it as a cantilever, your results will be completely wrong, and your structure could fail! This directly ties into **CO2: Explain the behavior and response of various structural elements under various loading conditions.** By understanding beam types, you're understanding their characteristic behaviors.

Furthermore, this knowledge is fundamental to **CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely.** You can't design a safe beam if you don't know how it's supported and how those supports affect the internal forces and stresses. For example, knowing that a fixed beam has lower maximum bending moments than a simply supported beam of the same length might lead you to choose a more economical cross-section when fixing the ends is feasible.

## 4. Real-World Examples and Analogies

Let's try to visualize these with everyday examples:

*   **Simply Supported:** A plank of wood laid across a ditch. Its ends rest on the banks.
*   **Cantilever:** A balcony extending from a building wall. It's fixed to the building and projects outwards.
*   **Overhanging:** A shelf that sticks out past its brackets. The shelf material beyond the bracket acts as an overhang.
*   **Fixed:** Imagine a steel beam used as a lintel over a window, with its ends firmly embedded in the masonry on either side.
*   **Continuous:** A long railway bridge made of several connected spans, supported by multiple piers.

Think about how the supports influence what happens when you step on them. On a plank bridge (simply supported), the whole plank sags. On a diving board (cantilever), the end droops significantly, and the base experiences a strong moment. An overhanging shelf might sag in the middle and then curve upwards beyond the bracket.

## 5. Connecting Beam Types to Internal Forces (CO3: K3)

The type of beam and the applied loads directly determine the **shear force (V)** and **bending moment (M)** diagrams. These diagrams are like a roadmap of the internal forces acting within the beam.

*   **Simply Supported Beam:** Typically has a parabolic bending moment diagram for uniformly distributed loads, with the maximum moment occurring at the center or where the shear force is zero.
*   **Cantilever Beam:** The bending moment is maximum at the fixed support and generally increases linearly or parabolically from the free end.
*   **Fixed Beam:** The bending moments at the supports are usually negative, counteracting some of the positive bending moment in the span. This often leads to a smaller maximum bending moment compared to a simply supported beam.
*   **Overhanging Beam:** Shows positive bending between supports and negative bending in the overhangs.

Understanding these diagrams is critical for **CO3: Apply the principles of solid mechanics to calculate internal stresses/strains, stress resultants and strain energies in structural elements subjected to axial/transverse loads and bending/twisting moments.** The bending moment (M) and shear force (V) are the "stress resultants" we're talking about here. They are directly related to the internal stresses (bending stress and shear stress) within the beam.

For instance, the bending stress ($\sigma$) at any point in the beam is given by $\sigma = \frac{My}{I}$, where M is the bending moment at that point, y is the distance from the neutral axis, and I is the moment of inertia of the cross-section. Similarly, shear stress is related to the shear force. This formula is a cornerstone, and you'll find it discussed extensively in books like "Strength of Materials" by S. Ramamrutham and R. Narayanan.

## 6. Importance for Stress Analysis and Design (CO5: K3, CO6: K4)

Our knowledge of beam types and their resulting internal forces is the first step towards understanding stress. Once we know the bending moment (M) and shear force (V), we can calculate the stresses.

*   **Bending Stress:** As mentioned, $\sigma = \frac{My}{I}$. This stress varies linearly across the depth of the beam's cross-section, being zero at the neutral axis and maximum at the extreme fibers.
*   **Shear Stress:** This is more complex, but generally, shear stress is highest at the neutral axis and zero at the top and bottom surfaces. The formula often involves the shear force (V), the first moment of area (Q), the moment of inertia (I), and the width of the section (b): $\tau = \frac{VQ}{Ib}$.

This is where **CO5: Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point in a structural member** comes into play. While we're focusing on beam *types* here, remember that the bending and shear stresses we calculate for a beam are the stresses at a point. We can then use Mohr's circle or transformation equations to find the principal stresses and maximum shear stress at that point, which are crucial for failure analysis.

For **CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely**, selecting the right beam type and then calculating the maximum bending stress and shear stress is essential. If the calculated stresses exceed the material's allowable stress, the beam is unsafe. We then need to either reduce the load, change the support conditions (e.g., make a simply supported beam fixed), or choose a stronger material or a larger cross-section to withstand the stresses.

## 7. Quick Recap and Key Takeaways

Let's quickly summarize what we've covered about beam types:

*   **Beams** resist transverse loads primarily through bending.
*   The **support conditions** define the type of beam and its behavior.
*   **Simply Supported, Cantilever, Overhanging, Fixed, and Continuous** are the primary classifications.
*   Each type results in different distributions of **shear force and bending moment**.
*   Understanding these internal forces is essential for calculating **stresses and deflections**, which directly impacts **safe design**.

Remember these classifications; they are the foundation upon which all further beam analysis in this course will be built.

---

## Sample Questions and Answers

Here are a few questions to test your understanding and prepare you for exams:

**Q1. (Conceptual - CO2: K2)**
What is the primary difference in support conditions between a simply supported beam and a fixed beam?

**Answer:** The key difference lies in the **rotational freedom at the supports**. In a simply supported beam, the ends are free to rotate. In contrast, a fixed beam has its ends rigidly built in, preventing any rotation. This prevention of rotation in fixed beams introduces end moments, which significantly alter the bending moment distribution compared to simply supported beams.

**Q2. (Application - CO3: K3, CO6: K4)**
A steel cantilever beam of length 3 meters is subjected to a concentrated load of 10 kN at its free end. If the beam has a rectangular cross-section of 100 mm width and 200 mm depth, and the allowable bending stress for steel is 150 MPa, determine if the beam is safe. (Assume Moment of Inertia, I = $\frac{bd^3}{12}$ and allowable shear stress is not critical here).

**Solution:**
1.  **Identify Beam Type:** Cantilever beam.
2.  **Loading:** Concentrated load P = 10 kN = 10,000 N at the free end.
3.  **Length:** L = 3 m = 3000 mm.
4.  **Cross-section:** b = 100 mm, d = 200 mm.
5.  **Moment of Inertia (I):**
    $I = \frac{bd^3}{12} = \frac{100 \times (200)^3}{12} = \frac{100 \times 8 \times 10^6}{12} = \frac{800 \times 10^6}{12} = 66.67 \times 10^6 \text{ mm}^4$
    $I = 66.67 \times 10^{-6} \text{ m}^4$
6.  **Maximum Bending Moment (M):** For a cantilever with a load at the free end, the maximum bending moment occurs at the fixed support and is $M_{max} = P \times L$.
    $M_{max} = 10,000 \text{ N} \times 3 \text{ m} = 30,000 \text{ Nm}$
7.  **Distance from Neutral Axis (y):** For a rectangular section, the neutral axis is at the centroid. The maximum bending stress occurs at the extreme fibers, which are at a distance $y = d/2$.
    $y = \frac{200 \text{ mm}}{2} = 100 \text{ mm} = 0.1 \text{ m}$
8.  **Calculate Maximum Bending Stress ($\sigma_{max}$):**
    $\sigma_{max} = \frac{M_{max} \times y}{I} = \frac{30,000 \text{ Nm} \times 0.1 \text{ m}}{66.67 \times 10^{-6} \text{ m}^4} = \frac{3000}{66.67 \times 10^{-6}} \text{ N/m}^2 = 45 \times 10^6 \text{ Pa} = 45 \text{ MPa}$
9.  **Check for Safety:**
    Allowable bending stress = 150 MPa.
    Calculated maximum bending stress = 45 MPa.
    Since 45 MPa < 150 MPa, the beam is safe from bending stress failure.

**Q3. (Conceptual - CO2: K2)**
Give one example each of an overhanging beam and a continuous beam from real-life civil engineering structures.

**Answer:**
*   **Overhanging Beam Example:** A cantilevered walkway extending beyond its supporting piers or a simple footbridge where the deck extends slightly past the abutments.
*   **Continuous Beam Example:** A multi-span bridge, like a highway overpass, where the deck is supported by multiple piers and abutments, creating several continuous spans. Railway tracks are also continuous structures supported at multiple points.

These questions cover identifying beam types, calculating basic internal forces, and checking for safety against material limits, directly linking to the course outcomes. Keep practicing these fundamental steps!
