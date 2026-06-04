---
title: "mass moment of inertia-ring and disc"
subject: "ENGINEERING MECHANICS"
module: "Module 2: Friction: "
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833ed"
status: "completed"
scrapedAt: "2026-05-20T17:37:32.367Z"
---
# Engineering Mechanics: Module 2 - Friction

## Topic: Mass Moment of Inertia - Ring and Disc

Welcome, everyone! Today, we're diving into a fascinating aspect of our Engineering Mechanics journey: **Mass Moment of Inertia**. Now, you might be thinking, "Wait a minute, we're talking about friction, and suddenly we're discussing mass moment of inertia?" That's a great observation! While this topic might seem a little out of place in a module *primarily* focused on friction, it's crucial for understanding the *dynamics* of rotating bodies, which often encounter frictional forces. Think of it as building a foundational piece for later chapters where we'll combine these concepts. This knowledge directly supports our **Course Outcome 5 (CO5): Develop the understanding of fundamental principles of rigid body dynamics (Knowledge Level: K3)**. We'll also touch upon how understanding the distribution of mass (which is what moment of inertia is all about) is key to predicting how a body will *react* to applied forces and moments, which indirectly relates to our understanding of forces and moments as described in **CO1 (K2)** and **CO2 (K3)**.

### 1. What is Mass Moment of Inertia? Beyond Just Mass!

You're all familiar with mass ($m$) as a measure of inertia – how much an object resists changes in its *linear* motion. If you push a heavy box and a light box, the heavy one is harder to get moving, right? That's its mass inertia.

Mass moment of inertia, often denoted by $I$, is its rotational counterpart. It's a measure of an object's resistance to changes in its *angular* velocity. Just like a larger mass means more linear inertia, a larger mass moment of inertia means it's harder to get a body rotating or to stop it from rotating.

Think about it:
*   **Linear Motion:** You push a shopping cart. Its mass resists you.
*   **Rotational Motion:** You try to spin a merry-go-round. Its mass, but more importantly, *how that mass is distributed*, resists your spinning effort.

So, mass moment of inertia isn't just about how much mass an object has, but *where* that mass is located relative to the axis of rotation. This is a core concept from **Timoshenko and Young**, where they emphasize that inertia in rotation depends on both mass and its distribution.

**Key Idea:** Mass farther from the axis of rotation contributes *much more* to the moment of inertia than mass closer to it. This is because the moment of inertia is calculated by integrating the product of mass elements and the *square* of their distance from the axis. That squared term ($r^2$) makes a big difference!

### 2. Calculating Mass Moment of Inertia: The Integral Approach

The fundamental definition of mass moment of inertia for a continuous body about a specific axis is given by the integral:

$$I = \int r^2 \, dm$$

Where:
*   $I$ is the mass moment of inertia.
*   $r$ is the perpendicular distance of a small mass element ($dm$) from the axis of rotation.
*   The integral is taken over the entire mass of the body.

This formula, found in all our core texts like **Hibbeler** and **Shames**, is the bedrock. It means we're essentially summing up the "rotational inertia contribution" of every tiny bit of mass, weighted by the square of its distance from the axis.

Let's put this into practice with our specific shapes: the ring and the disc.

### 3. Mass Moment of Inertia of a Uniform Ring

Imagine a wedding ring, or a bicycle wheel rim. It's essentially a thin hoop. We'll assume it's a **uniform ring**, meaning the mass is evenly distributed along its length.

**Scenario:** Consider a thin ring of mass $M$ and radius $R$. We want to find its mass moment of inertia about an axis passing through its center and perpendicular to its plane. This is a very common axis for rotating rings, like a steering wheel or a potter's wheel.

**Derivation (Conceptual):**
Every single particle of mass ($dm$) in this ring is at the *exact same distance* ($R$) from the axis of rotation. So, our integral becomes much simpler!

$$I = \int r^2 \, dm$$

Since $r = R$ for all mass elements, we can pull $R^2$ out of the integral:

$$I = R^2 \int dm$$

And what is $\int dm$? It's simply the sum of all the mass elements, which is the total mass of the ring, $M$.

So, for a uniform ring rotating about an axis through its center and perpendicular to its plane:

$$I_{ring} = MR^2$$

**Relatable Example:** Think about spinning a thin hula hoop. It's relatively easy to get it going, but also easy to stop. If you held a heavy, solid cylinder of the same mass and radius and tried to spin it around its central axis, it would be *much* harder to start and stop. Why? Because the mass in the cylinder is distributed *further away* from the axis compared to the ring. This reinforces that $I$ depends on mass distribution.

**Connection to COs:** This calculation demonstrates how to apply the fundamental definition of moment of inertia (CO5) to a specific geometry. Understanding this simple formula helps us appreciate how mass distribution affects rotational resistance.

### 4. Mass Moment of Inertia of a Uniform Disc

Now, let's consider a **uniform disc** (or cylinder) of mass $M$ and radius $R$, rotating about an axis passing through its center and perpendicular to its plane. Think of a solid flywheel or a CD.

**Derivation (Conceptual):**
Here, the mass isn't all at one distance. It's distributed from the center ($r=0$) to the outer edge ($r=R$). This is where our integral approach gets more interesting.

We'll break the disc into infinitesimally thin concentric rings. Consider one such ring with radius $r$, thickness $dr$, and mass $dm$.

*   **Area of the thin ring:** $dA = (2\pi r) dr$ (circumference times thickness).
*   **Mass of the thin ring ($dm$):** If the disc has a uniform surface density $\sigma$ (mass per unit area), then $\sigma = M/(\pi R^2)$.
    So, $dm = \sigma \, dA = \frac{M}{\pi R^2} (2\pi r \, dr) = \frac{2M}{R^2} r \, dr$.

Now, we can use our fundamental formula $I = \int r^2 \, dm$, but we integrate over the radius $r$ from 0 to $R$:

$$I_{disc} = \int_0^R r^2 \, dm$$

Substitute the expression for $dm$:

$$I_{disc} = \int_0^R r^2 \left(\frac{2M}{R^2} r \, dr\right)$$

$$I_{disc} = \frac{2M}{R^2} \int_0^R r^3 \, dr$$

Now, we integrate $r^3$ with respect to $r$:

$$I_{disc} = \frac{2M}{R^2} \left[\frac{r^4}{4}\right]_0^R$$

$$I_{disc} = \frac{2M}{R^2} \left(\frac{R^4}{4} - 0\right)$$

$$I_{disc} = \frac{2M}{R^2} \frac{R^4}{4}$$

$$I_{disc} = \frac{1}{2} MR^2$$

So, for a uniform disc rotating about an axis through its center and perpendicular to its plane:

$$I_{disc} = \frac{1}{2} MR^2$$

**Relatable Example:** Imagine trying to spin a coin versus a solid metal disc of the same mass and radius. The coin (closer to a ring) would be easier to spin than the solid disc. This is because, for the disc, a significant portion of its mass is distributed at larger radii, contributing more to the moment of inertia. This aligns with what **R. K. Bansal** emphasizes in his textbook about the impact of mass distribution.

**Connection to COs:** This derivation is a perfect example of applying integration to solve dynamics problems (CO5), demonstrating how mass distribution affects rotational inertia. It also solidifies our understanding of how to use geometric properties to analyze mechanical systems.

### 5. Comparing Ring and Disc

It's important to see the direct comparison:
*   **Ring:** $I = MR^2$
*   **Disc:** $I = \frac{1}{2} MR^2$

Notice that the moment of inertia of the disc is exactly half that of a ring with the same mass and radius. This is because, in the disc, half of the mass is located at radii *less than* $R/\sqrt{2}$ and half is at radii *greater than* $R/\sqrt{2}$. The mass distribution being closer to the axis on average for the disc significantly reduces its rotational inertia compared to the ring where *all* the mass is at the maximum radius $R$. This is a key takeaway from **Meriam and Kraige**.

**Remember this:** The moment of inertia depends on the *shape* and *how the mass is distributed* within that shape relative to the axis of rotation.

### 6. Other Axes of Rotation (Brief Mention)

While we focused on the axis through the center, it's worth noting that the moment of inertia changes if the axis of rotation changes. For instance, the moment of inertia of a disc about an axis passing through its diameter is $I = \frac{1}{4} MR^2$. This is a result of the **Parallel-Axis Theorem** and **Perpendicular-Axis Theorem**, which are discussed in more advanced sections of your textbooks (like **Kraige**). For this specific topic on rings and discs, the central axis is the most common and fundamental.

### 7. Why is this Important for Friction?

You might still be wondering about the friction connection. Here's how it links:

*   **Braking Systems:** In vehicles, brakes work by applying frictional forces to rotating discs or drums. Understanding the disc's moment of inertia ($I$) is crucial for calculating the torque required to stop the rotation and how quickly it will stop under a given frictional force. This involves dynamics, specifically the relationship $\Sigma M = I\alpha$, where $\alpha$ is angular acceleration. This directly supports **CO5**.
*   **Rotational Friction:** Many machines have rotating parts that experience friction in bearings or air resistance. The effort needed to overcome this friction (and the resulting deceleration) is directly related to the mass moment of inertia of the rotating components. If a fan has large, heavy blades (high $I$), it will take more effort (and potentially more frictional force) to start and stop than a fan with light blades.
*   **Energy Dissipation:** Friction often dissipates energy as heat. For rotating systems, the rate of energy dissipation due to friction depends on the speed and the resisting torque. Understanding the rotational inertia helps in analyzing the dynamic behavior of these systems, which are often subject to frictional forces.
*   **System Dynamics:** When analyzing a system with both translational and rotational motion, or systems involving multiple interconnected rotating parts, the moments of inertia of each part are essential inputs for solving the equations of motion. This allows us to predict the overall system behavior under various forces, including frictional ones. This ties into **CO4 (Identify appropriate principles to solve problems of mechanics)** by showing how moment of inertia is a key principle for dynamic analysis.

### 8. Exam Focus and Common Pitfalls

*   **Memorize the Formulas:** Be sure to remember $I_{ring} = MR^2$ and $I_{disc} = \frac{1}{2} MR^2$ for the central axis perpendicular to the plane. These are frequently asked.
*   **Units:** Mass moment of inertia has units of mass × length², typically kg⋅m² or lb⋅ft⋅s².
*   **Distribution Matters:** Always remember that $I$ is not just about mass but its distribution. A common mistake is to assume all objects of the same mass and radius have the same rotational inertia.
*   **Axis of Rotation:** The moment of inertia is specific to an axis. If the problem specifies a different axis, you'll need different formulas (or the parallel-axis theorem). For this topic, the central axis is standard.
*   **Confusion with Area Moment of Inertia:** Don't confuse mass moment of inertia ($I = \int r^2 \, dm$) with area moment of inertia ($I = \int y^2 \, dA$ or $\int x^2 \, dA$), which is used in the analysis of bending stresses in beams. They look similar but have different physical meanings and applications.

### Summary

Mass moment of inertia, $I$, quantifies a body's resistance to angular acceleration. It depends on both mass and how that mass is distributed relative to the axis of rotation. For a uniform ring of mass $M$ and radius $R$ about its central axis perpendicular to its plane, $I_{ring} = MR^2$. For a uniform disc of mass $M$ and radius $R$ about the same axis, $I_{disc} = \frac{1}{2} MR^2$. Understanding these values is crucial for analyzing the rotational dynamics of systems, which often involves frictional forces.

---

## Sample Questions and Answers

**Q1. Conceptual Question:**
Explain why a solid disc has a lower mass moment of inertia than a ring of the same mass and radius when both rotate about an axis through their centers and perpendicular to their planes.

**Answer:**
The mass moment of inertia ($I$) is defined as $I = \int r^2 \, dm$, where $r$ is the distance of the mass element $dm$ from the axis of rotation. In a ring, all the mass is concentrated at the outermost radius ($R$). In a solid disc, the mass is distributed from the center ($r=0$) to the outer edge ($r=R$). Because the moment of inertia formula includes $r^2$, mass elements closer to the axis contribute less to $I$ than those farther away. Since a disc has a significant portion of its mass located at radii smaller than $R$, its overall mass moment of inertia is lower compared to a ring where all the mass is at the maximum radius $R$. Specifically, $I_{disc} = \frac{1}{2}MR^2$ while $I_{ring} = MR^2$. This means the disc offers less resistance to angular acceleration.

**Q2. Exam-Oriented Question:**
A uniform thin ring has a mass of 5 kg and a radius of 0.2 m. Calculate its mass moment of inertia about an axis passing through its center and perpendicular to its plane. If a uniform solid disc has the same mass and radius, what would be its mass moment of inertia about the same axis?

**Answer:**
**For the Ring:**
Given:
Mass, $M = 5$ kg
Radius, $R = 0.2$ m
The formula for the mass moment of inertia of a uniform ring about its central axis perpendicular to its plane is:
$I_{ring} = MR^2$
$I_{ring} = (5 \, \text{kg}) \times (0.2 \, \text{m})^2$
$I_{ring} = 5 \, \text{kg} \times 0.04 \, \text{m}^2$
$I_{ring} = 0.20 \, \text{kg} \cdot \text{m}^2$

**For the Disc:**
Given:
Mass, $M = 5$ kg
Radius, $R = 0.2$ m
The formula for the mass moment of inertia of a uniform disc about its central axis perpendicular to its plane is:
$I_{disc} = \frac{1}{2} MR^2$
$I_{disc} = \frac{1}{2} \times (5 \, \text{kg}) \times (0.2 \, \text{m})^2$
$I_{disc} = \frac{1}{2} \times 5 \, \text{kg} \times 0.04 \, \text{m}^2$
$I_{disc} = \frac{1}{2} \times 0.20 \, \text{kg} \cdot \text{m}^2$
$I_{disc} = 0.10 \, \text{kg} \cdot \text{m}^2$

**Conclusion:** The mass moment of inertia of the ring is $0.20 \, \text{kg} \cdot \text{m}^2$, and for the disc, it is $0.10 \, \text{kg} \cdot \text{m}^2$.

**Q3. Application Scenario:**
A potter is spinning a clay disc on a potter's wheel. The disc has a mass of 3 kg and a radius of 0.15 m. If the potter applies a frictional force at the rim that creates a constant retarding torque, and they want to know how quickly the disc will slow down, what fundamental property related to rotational motion must they consider? If the disc is replaced by a ring of the same mass and radius, how would that affect the slowing down process?

**Answer:**
The potter must consider the **mass moment of inertia** of the clay disc. This property determines the disc's resistance to changes in its angular velocity. The relationship governing the slowing down is Newton's second law for rotation: $\Sigma M = I\alpha$, where $\Sigma M$ is the net torque (including the retarding torque from friction), $I$ is the mass moment of inertia, and $\alpha$ is the angular acceleration (deceleration in this case).

If the disc is replaced by a **ring of the same mass and radius**, its mass moment of inertia ($I_{ring} = MR^2$) would be **twice** that of the disc ($I_{disc} = \frac{1}{2}MR^2$). Since $I$ is in the denominator when calculating angular acceleration ($\alpha = \Sigma M / I$), a higher moment of inertia means a **smaller angular deceleration** for the same retarding torque. Therefore, the ring would slow down **more slowly** than the disc.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
