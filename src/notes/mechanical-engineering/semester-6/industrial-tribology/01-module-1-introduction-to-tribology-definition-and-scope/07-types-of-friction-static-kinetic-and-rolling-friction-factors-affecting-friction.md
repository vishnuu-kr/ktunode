---
title: "Types of friction: static, kinetic, and rolling friction Factors affecting friction."
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 1: Introduction to Tribology:  Definition and Scope"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637fb"
status: "completed"
scrapedAt: "2026-05-20T18:04:58.417Z"
---
# Industrial Tribology: Module 1 - Introduction to Tribology: Definition and Scope

## Topic: Types of Friction and Factors Affecting Friction

### Learning Outcomes Addressed:

*   Explain the different types of friction (static, kinetic, rolling) and their characteristics.
*   Identify and explain the key factors that influence the magnitude of friction.
*   Relate the concepts of friction to basic industrial scenarios.

### Course Outcomes Addressed:

*   **CO1: Explain fundamental principles of Tribology (Knowledge Level: K2)** - This topic directly addresses the fundamental principles of friction, a core concept in tribology.

---

## 1. Understanding Friction: The Basics

Friction is a ubiquitous phenomenon that plays a crucial role in many industrial processes. It's a force that opposes motion between surfaces in contact. Understanding the different types of friction and the factors influencing it is fundamental to controlling wear, reducing energy losses, and improving the efficiency and reliability of machinery.

**Definition of Friction:** Friction is the force resisting the relative motion of solid surfaces, fluid layers, and solid bodies sliding against each other.

---

## 2. Types of Friction

Friction can be broadly categorized based on the nature of the relative motion between surfaces.

### 2.1. Static Friction ($f_s$)

*   **Definition:** Static friction is the force that opposes the *initiation* of motion between two surfaces in contact. It acts when an object is at rest and a force is applied to move it.
*   **Characteristics:**
    *   It is a **variable force**. Its magnitude adjusts itself to be equal and opposite to the applied force, up to a certain maximum value.
    *   It prevents motion as long as the applied force is less than or equal to the maximum static friction.
    *   **Limiting Friction ($f_{s,max}$):** This is the maximum value of static friction that can be overcome to start motion. It is directly proportional to the normal force ($N$) pressing the surfaces together.
    *   **Formula:** $f_s \leq \mu_s N$
        *   Where:
            *   $f_s$ is the force of static friction.
            *   $\mu_s$ is the coefficient of static friction (a dimensionless quantity).
            *   $N$ is the normal force.
    *   **Breakaway Force:** The minimum force required to overcome static friction and initiate motion is equal to the limiting friction.

*   **Examples:**
    *   Pushing a heavy box that doesn't move until you apply enough force.
    *   A car tire on a dry road grip before it starts skidding.
    *   Holding an object in your hand – friction prevents it from slipping.

**Important Point:** Static friction is always greater than or equal to kinetic friction ($\mu_s \ge \mu_k$). This is why it's harder to start an object moving than to keep it moving. (Williams, 2005)

### 2.2. Kinetic Friction (Sliding Friction, $f_k$)

*   **Definition:** Kinetic friction is the force that opposes the motion between two surfaces that are sliding relative to each other.
*   **Characteristics:**
    *   It is generally considered to be a **constant force** for a given pair of surfaces and normal load, although in reality, it can vary slightly with velocity.
    *   It acts in the direction opposite to the relative velocity of the surfaces.
    *   **Formula:** $f_k = \mu_k N$
        *   Where:
            *   $f_k$ is the force of kinetic friction.
            *   $\mu_k$ is the coefficient of kinetic friction (a dimensionless quantity).
            *   $N$ is the normal force.

*   **Examples:**
    *   Sliding a box across the floor after it has started moving.
    *   The braking action of car tires on a wet road (where they are skidding).
    *   A sled moving down a snowy hill.

**Relationship between Static and Kinetic Friction:**
Generally, $\mu_s > \mu_k$. This means the force required to keep an object moving is less than the force required to start it moving.

### 2.3. Rolling Friction ($f_r$)

*   **Definition:** Rolling friction is the resistance encountered when a body (like a wheel, cylinder, or sphere) rolls over a surface. It's a complex phenomenon resulting from the deformation of both the rolling body and the surface it rolls on.
*   **Characteristics:**
    *   It is generally **much smaller** than sliding friction for the same normal force.
    *   It arises from:
        *   **Deformation:** The rolling body and/or the surface deform slightly, creating a "hump" in front of the rolling object. Work is done to push this hump aside.
        *   **Adhesion:** Microscopic junctions form between the surfaces and need to be broken.
        *   **Ploughing:** Hard asperities on one surface can dig into the softer surface.
    *   **Formula (simplified empirical approximation):** $f_r = \mu_r \frac{N}{r}$
        *   Where:
            *   $f_r$ is the force of rolling friction.
            *   $\mu_r$ is the coefficient of rolling resistance (often given as a length unit, e.g., mm).
            *   $N$ is the normal force.
            *   $r$ is the radius of the rolling body.
        *   **Note:** This formula is a simplification. The dependence on radius can be complex. A more common way to express rolling resistance is as a force per unit normal load, or through the concept of the "distance of slide" for one revolution.

*   **Examples:**
    *   The ease with which a bicycle rolls compared to being dragged.
    *   The operation of bearings in machinery.
    *   The rolling resistance of tires on a road, affecting fuel efficiency.

**Important Point:** Rolling friction is often the most desirable type of friction in mechanical systems as it leads to significantly lower energy losses and wear compared to sliding friction. (Stachowiak & Batchelor, 2000)

---

## 3. Factors Affecting Friction

The magnitude of friction is not solely dependent on the materials in contact. Several factors can significantly influence it.

### 3.1. Nature of the Surfaces in Contact

*   **Materials:** The inherent properties of the materials, such as their hardness, surface energy, and chemical composition, greatly affect the friction coefficients.
    *   **Metals:** Generally have higher friction coefficients than polymers.
    *   **Polymers:** Can have lower friction, especially self-lubricating polymers like PTFE (Teflon).
    *   **Ceramics:** Can exhibit low friction when clean, but can be brittle.
*   **Surface Roughness:** This is a crucial factor.
    *   **Very Smooth Surfaces:** Can lead to high adhesion due to increased contact area at the atomic level, resulting in higher friction.
    *   **Very Rough Surfaces:** Can lead to interlocking of asperities and ploughing, increasing friction.
    *   **Optimal Roughness:** A moderate level of roughness, with well-defined asperities, often results in the lowest friction, as it allows for easier asperity deformation and less adhesion compared to atomically smooth surfaces.
    *   (Bhushan, 2013) discusses the role of surface topography in detail, including fractal analysis of rough surfaces.

*   **Surface Contamination/Films:** The presence of contaminants, oxides, adsorbed layers, or lubricants can dramatically alter friction.
    *   **Lubricants:** Reduce friction significantly by separating surfaces.
    *   **Oxide Layers:** Can reduce friction for some metals (e.g., aluminum) but increase it for others.
    *   **Dirt/Grit:** Can increase friction and cause wear (abrasion).

### 3.2. Normal Force (Load)

*   **Effect:** As established in the formulas for static and kinetic friction, the friction force is directly proportional to the normal force pressing the surfaces together.
    *   $f = \mu N$
*   **Reason:** A higher normal force leads to greater deformation of surface asperities and increased real area of contact. This results in more adhesive forces and mechanical interlocking between the contacting asperities.

*   **Example:** A heavier truck requires more force to slide its brakes than a lighter car.

### 3.3. Relative Velocity (Speed)

*   **Kinetic Friction:** For many common materials, the coefficient of kinetic friction ($\mu_k$) is relatively independent of sliding speed. However, at very high speeds, friction can increase due to:
    *   **Frictional Heating:** Increased temperature can alter material properties and surface films.
    *   **Ploughing Effects:** At high speeds, the asperities might not have enough time to deform elastically and might cause more significant ploughing.
*   **Rolling Friction:** Rolling resistance generally increases with speed, often due to increased deformation rates and vibrational effects.

### 3.4. Temperature

*   **Effect:** Temperature can affect friction in several ways:
    *   **Material Properties:** Changes in hardness, elastic modulus, and yield strength of the contacting materials.
    *   **Lubricant Viscosity:** For lubricated contacts, viscosity changes significantly with temperature, impacting the ability of the lubricant to separate surfaces.
    *   **Surface Films:** The formation or breakdown of surface films (like oxides or adsorbed layers) is often temperature-dependent.
    *   **Adhesion:** At elevated temperatures, molecular adhesion can become more significant.

*   **Example:** Brakes in a car can become less effective (fade) when they overheat due to increased friction and thermal expansion.

### 3.5. Presence of Lubricants

*   **Effect:** Lubricants (liquids, greases, or solids) are intentionally introduced between sliding surfaces to reduce friction and wear. They form a film that separates the surfaces, minimizing direct solid-to-solid contact.
*   **Mechanism:** Lubricants work by:
    *   **Hydrodynamic Lubrication:** Creating a pressurized film that lifts the surfaces apart.
    *   **Boundary Lubrication:** Forming adsorbed molecular layers on the surfaces that prevent direct contact.
    *   **Mixed Lubrication:** A combination of both.
*   (Lansdown, 2003) provides extensive details on lubricant selection and performance based on operating conditions.

### 3.6. Nature of Sliding (e.g., Dry vs. Lubricated, Presence of Contaminants)

*   **Dry Sliding:** Generally results in higher friction and wear.
*   **Lubricated Sliding:** Significantly reduces friction and wear.
*   **Contaminated Surfaces:** The presence of abrasive particles (e.g., sand, metal debris) between surfaces dramatically increases friction and wear through abrasion and ploughing.

### 3.7. Contact Area (Real vs. Apparent)

*   **Apparent Area of Contact:** The macroscopic area over which two surfaces appear to be in contact.
*   **Real Area of Contact:** The actual microscopic area where the asperities of the two surfaces touch.
*   **Key Principle:** The real area of contact is often much smaller than the apparent area of contact and is found to be approximately proportional to the applied load, regardless of the apparent area. This is a fundamental concept in adhesion theory of friction.
    *   $A_{real} \propto N$
*   Since friction arises from adhesive forces at the real contact points, and these forces are proportional to the real area of contact, the friction force is approximately proportional to the load.

---

## 4. Friction in Industrial Applications (CO5: Apply tribological knowledge in industrial applications)

Understanding friction is critical for designing and operating industrial machinery efficiently and reliably.

*   **Reducing Energy Losses:** Minimizing friction in rotating machinery (bearings, gears) reduces power consumption and heat generation. Rolling element bearings are preferred over plain bearings for high-speed applications due to lower rolling friction.
*   **Controlling Motion:** Friction is essential for braking systems, clutches, and tires providing grip for vehicles. Static friction is what allows a person to walk or a car to accelerate without slipping.
*   **Wear Prevention:** High friction often leads to increased wear, degrading components and causing premature failure. Proper lubrication and material selection are key to managing wear.
*   **Machining Processes:** Friction in metal cutting influences tool wear, surface finish, and cutting forces.
*   **Manufacturing:** Friction is important in processes like stamping, drawing, and powder metallurgy.

---

## 5. Key Concepts to Remember

*   **Friction opposes relative motion.**
*   **Static friction** prevents motion; it's a variable force up to a maximum (limiting friction).
*   **Kinetic friction** opposes sliding motion; it's generally constant.
*   **Rolling friction** opposes rolling motion; it's much lower than sliding friction.
*   **Coefficient of friction ($\mu$)** is a material property and depends on surface nature.
*   **Friction force is approximately proportional to the normal force** ($f \propto N$).
*   **Real area of contact** is much smaller than apparent area and is key to understanding friction.
*   **Roughness, temperature, velocity, and surface films** significantly influence friction.

---

## 6. Practice Questions and Answers

**Question 1:** What is the primary difference between static friction and kinetic friction?

**Answer:** Static friction opposes the initiation of motion and is a variable force that adjusts to the applied force, while kinetic friction opposes motion that is already occurring and is generally a constant force.

**Question 2:** Which type of friction is generally the lowest for a given pair of surfaces and normal load?
    a) Static Friction
    b) Kinetic Friction
    c) Rolling Friction
    d) Adhesion Friction

**Answer:** c) Rolling Friction

**Question 3:** List three factors that can significantly affect the magnitude of kinetic friction between two surfaces.

**Answer:**
1.  Nature of the surfaces in contact (materials, roughness, surface films).
2.  Normal force pressing the surfaces together.
3.  Temperature.
(Other valid answers include presence of lubricants, relative velocity).

**Question 4:** If you push a heavy cabinet with a force of 200 N, and it doesn't move, what can you say about the force of static friction?

**Answer:** The force of static friction is equal and opposite to the applied force, meaning it is also 200 N. The maximum static friction (limiting friction) is at least 200 N.

**Question 5:** Why is it generally easier to start an object moving than to keep it moving at a constant velocity?

**Answer:** Because the coefficient of static friction ($\mu_s$) is typically greater than the coefficient of kinetic friction ($\mu_k$). This means the maximum static friction (breakaway force) is greater than the kinetic friction.

---

This concludes Module 1, Topic: Types of Friction and Factors Affecting Friction. The next topics will build upon these fundamental principles of tribology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
