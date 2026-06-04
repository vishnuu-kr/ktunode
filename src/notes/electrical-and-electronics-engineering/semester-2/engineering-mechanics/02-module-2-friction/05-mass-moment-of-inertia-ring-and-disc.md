---
title: "mass moment of inertia-ring and disc"
subject: "ENGINEERING MECHANICS"
module: "Module 2: Friction:  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f971d"
status: "completed"
scrapedAt: "2026-05-23T16:06:37.327Z"
---
# Engineering Mechanics: Module 2: Friction

## Topic: Mass Moment of Inertia - Ring and Disc

Welcome, everyone! In our previous discussions in Statics, we focused on forces and how they affect rigid bodies at rest. Now, as we move into Dynamics, we're going to explore what happens when these bodies *move*. And when we talk about motion, especially rotational motion, one of the most fundamental concepts we need to understand is the **Mass Moment of Inertia**.

You might be thinking, "But we're in the Friction module. What does inertia have to do with friction?" That's a fair question! While friction deals with surfaces in contact and resisting motion, mass moment of inertia is all about how mass is distributed relative to an axis of rotation, and how that distribution *resists* changes in rotational speed. Think of it as the rotational equivalent of mass, which resists changes in linear motion. So, while not directly friction itself, understanding how objects resist rotational changes is crucial for analyzing dynamic systems where friction might also be present. This topic directly supports **CO5: Develop the understanding of fundamental principles of rigid body dynamics**.

### 1. What is Mass Moment of Inertia?

Let's start with the basics. We know that for linear motion, **mass (m)** is the measure of an object's inertia – its resistance to changes in linear velocity. Newton's second law for linear motion is $F = ma$.

Now, for rotational motion, we have analogous concepts. Instead of force, we have **torque ($\tau$)**. Instead of linear acceleration ($a$), we have **angular acceleration ($\alpha$)**. And instead of mass, we have the **mass moment of inertia**, often denoted by the letter **I**. The rotational equivalent of Newton's second law is $\tau = I\alpha$.

So, what exactly *is* this $I$? It's not just the total mass of the object. It's a measure of how that mass is distributed relative to the axis of rotation. An object with its mass concentrated far from the axis of rotation will have a larger mass moment of inertia and will be harder to spin up or slow down than an object of the same mass with its mass concentrated closer to the axis.

Imagine trying to spin a figure skater. When their arms are extended, they spin slower. When they pull their arms in, they spin faster. This is because pulling their arms in brings their mass closer to the axis of rotation, decreasing their mass moment of inertia, and by conservation of angular momentum ($L = I\omega$), their angular velocity ($\omega$) increases. This is a beautiful real-world example illustrating the concept.

Mathematically, for a system of discrete particles, the mass moment of inertia about an axis is the sum of the product of each particle's mass and the square of its perpendicular distance from the axis of rotation:

$I = \sum m_i r_i^2$

Here, $m_i$ is the mass of the $i$-th particle and $r_i$ is its perpendicular distance from the axis of rotation.

For continuous bodies, we use integration. If we consider an infinitesimal mass element $dm$, its contribution to the moment of inertia is $dI = r^2 dm$, where $r$ is the perpendicular distance of that mass element from the axis. The total mass moment of inertia is then the integral over the entire body:

$I = \int r^2 dm$

This integral form is what we'll use to derive the formulas for specific shapes like rings and discs. Understanding this definition is fundamental to **CO5**.

### 2. Mass Moment of Inertia of a Thin Ring

Let's start with a relatively simple shape: a **thin ring** rotating about its central axis, perpendicular to the plane of the ring. Think of a bicycle wheel rim, or a wedding ring.

Consider a thin ring of mass $M$ and radius $R$. For a thin ring, we can assume that *all* the mass is located at the same radial distance $R$ from the central axis.

Let's derive the formula using our integral definition. We can consider an infinitesimal mass element $dm$ on the ring. For this ring, every mass element $dm$ is at a distance $r = R$ from the axis of rotation.

So, our integral becomes:

$I = \int r^2 dm$

Since $r = R$ (a constant) for all mass elements in a thin ring:

$I = R^2 \int dm$

What is $\int dm$? It's simply the sum of all the infinitesimal mass elements, which gives us the total mass $M$ of the ring.

Therefore, the mass moment of inertia of a thin ring about its central axis is:

$I_{ring} = MR^2$

This formula tells us that for a ring, all the mass is at the maximum radius, so it has a relatively high moment of inertia compared to other shapes of the same mass and radius. This makes sense intuitively – it's harder to get a heavy rim spinning than a solid disc of the same mass.

**Key Takeaway:** For a thin ring of mass $M$ and radius $R$ rotating about its central axis perpendicular to its plane, $I = MR^2$.

### 3. Mass Moment of Inertia of a Thin Disc

Now, let's move to a **thin disc** rotating about its central axis, perpendicular to the plane of the disc. Think of a CD, a pizza, or a flywheel. A disc is essentially a collection of concentric rings of varying radii.

Consider a thin disc of mass $M$ and radius $R$. Unlike the ring, the mass in a disc is distributed from the center (radius 0) out to the edge (radius $R$).

To derive the formula for a disc, we can imagine dividing the disc into many thin, concentric rings, each of a small radial thickness $dr$. Let's consider one such ring at a radius $r$ with thickness $dr$.

What is the mass of this small ring ($dm$)? If the disc has a uniform surface density $\rho_s$ (mass per unit area), then the mass of our elemental ring is its area times the surface density. The area of this thin ring is approximately its circumference ($2\pi r$) multiplied by its thickness ($dr$).

So, $dm = \rho_s (2\pi r) dr$.

The total mass $M$ of the disc is related to its surface density and its total area ($\pi R^2$): $M = \rho_s (\pi R^2)$. From this, we can express $\rho_s$ as $\rho_s = \frac{M}{\pi R^2}$.

Now, substituting this back into our expression for $dm$:

$dm = \frac{M}{\pi R^2} (2\pi r) dr = \frac{2M}{R^2} r dr$.

We know that the mass moment of inertia of a thin ring of mass $dm$ and radius $r$ about its central axis is $dI = r^2 dm$. Now, we substitute our expression for $dm$ for our elemental ring:

$dI = r^2 \left(\frac{2M}{R^2} r dr\right) = \frac{2M}{R^2} r^3 dr$.

To find the total mass moment of inertia of the disc, we need to integrate this expression for $dI$ from the center of the disc (where $r=0$) to the outer edge (where $r=R$):

$I_{disc} = \int dI = \int_{0}^{R} \frac{2M}{R^2} r^3 dr$

Let's pull the constants out of the integral:

$I_{disc} = \frac{2M}{R^2} \int_{0}^{R} r^3 dr$

Now, we evaluate the integral of $r^3$, which is $\frac{r^4}{4}$:

$I_{disc} = \frac{2M}{R^2} \left[\frac{r^4}{4}\right]_{0}^{R}$

$I_{disc} = \frac{2M}{R^2} \left(\frac{R^4}{4} - \frac{0^4}{4}\right)$

$I_{disc} = \frac{2M}{R^2} \left(\frac{R^4}{4}\right)$

$I_{disc} = \frac{2MR^4}{4R^2}$

$I_{disc} = \frac{1}{2} MR^2$

And there we have it! The mass moment of inertia of a thin disc about its central axis perpendicular to its plane is $\frac{1}{2} MR^2$.

**Comparison:** Notice that the moment of inertia for the disc ($\frac{1}{2} MR^2$) is half that of a ring ($MR^2$) of the same mass and radius. This is because the disc has mass distributed closer to the axis of rotation, making it easier to spin. This aligns perfectly with **CO5**.

**How is this useful?** Imagine designing a flywheel for an engine. You want it to store rotational energy. A larger moment of inertia means it resists changes in speed more effectively, providing a smoother output. You'd choose a design that maximizes $I$. Alternatively, for quick acceleration in a motor, you might want a lower moment of inertia.

**Real-world analogy:** Think about a potter's wheel. A solid, heavy clay disc will have a different feel and require different torque to spin compared to a lighter, rim-only structure of the same outer diameter.

### 4. Connecting to Course Outcomes

Let's quickly see how this topic directly links to our course outcomes:

*   **CO1: Understand the vector representation of forces and moments:** While we didn't use vectors here, the concepts of torque and rotational motion are inherently vector-based in 3D. Understanding forces and moments from Statics is a prerequisite for understanding torque and its role in rotational dynamics ($\tau = I\alpha$).
*   **CO2: Identify and describe the components of system of forces acting on the rigid body:** In dynamics, we deal with forces that cause *changes* in motion, including rotational motion. The mass moment of inertia helps us understand how the distribution of mass affects the body's response to these forces (via torque).
*   **CO3: Apply the conditions of equilibrium to different force system:** This topic moves beyond static equilibrium. However, the foundation of equilibrium is essential. Understanding how mass is distributed is key to understanding *im*balance in dynamic systems.
*   **CO4: Identify appropriate principles to solve problems of mechanics:** We've applied the fundamental principle of rotational dynamics ($\tau = I\alpha$) and used integration, a core analytical tool, to derive these principles for specific shapes.
*   **CO5: Develop the understanding of fundamental principles of rigid body dynamics:** This is where this topic shines! Mass moment of inertia is arguably the most fundamental property of a rigid body when it comes to rotational motion. Understanding $I$ is essential for analyzing angular acceleration, kinetic energy of rotation, and angular momentum.

### 5. Exam Tips and Common Pitfalls

*   **Distinguish between radius of gyration and moment of inertia:** The radius of gyration ($k$) is defined such that $I = mk^2$. It's the hypothetical distance from the axis of rotation at which all the mass could be concentrated to produce the same moment of inertia. For a ring, $k=R$, and for a disc, $k = R/\sqrt{2}$. Don't confuse these!
*   **Axis of Rotation:** Always pay close attention to the axis of rotation specified in the problem. The moment of inertia is *always* dependent on the axis. The formulas $MR^2$ (ring) and $\frac{1}{2}MR^2$ (disc) are specifically for rotation about the *central axis perpendicular to the plane*. Rotating a disc about a diameter, for example, gives a different formula ($\frac{1}{4}MR^2$).
*   **Units:** Mass moment of inertia typically has units of $kg \cdot m^2$ or $lb \cdot ft^2$.
*   **Derivations:** While you'll often be given these formulas, understanding their derivation through integration is important for deeper comprehension and for solving problems involving non-standard shapes. The process involves identifying an infinitesimal mass element ($dm$), its distance from the axis ($r$), and integrating $r^2 dm$.

### Sample Questions and Answers

**Question 1 (Conceptual):**
If you have two discs of the same mass and radius, one solid and one with a large hole in the center (but still considered a "disc" with the hole filled by a lighter material), which one will have a larger mass moment of inertia about its central axis and why?

**Answer:**
The disc with the hole in the center will have a larger mass moment of inertia. This is because a larger portion of its mass will be concentrated at larger radii from the axis of rotation compared to the solid disc. Since moment of inertia is proportional to the square of the distance from the axis ($r^2$), having mass further away significantly increases the moment of inertia. This directly relates to **CO5** by demonstrating how mass distribution affects rotational dynamics.

**Question 2 (Application):**
A thin ring of mass 5 kg and radius 0.2 m is spinning about its central axis. Calculate its mass moment of inertia. If a thin disc of mass 5 kg and radius 0.2 m is spinning about its central axis, what is its mass moment of inertia? How many times greater is the moment of inertia of the ring compared to the disc?

**Answer:**
*   **For the ring:**
    Mass ($M$) = 5 kg
    Radius ($R$) = 0.2 m
    $I_{ring} = MR^2 = (5 \text{ kg})(0.2 \text{ m})^2 = (5 \text{ kg})(0.04 \text{ m}^2) = 0.2 \text{ kg} \cdot \text{m}^2$.
*   **For the disc:**
    Mass ($M$) = 5 kg
    Radius ($R$) = 0.2 m
    $I_{disc} = \frac{1}{2} MR^2 = \frac{1}{2} (5 \text{ kg})(0.2 \text{ m})^2 = \frac{1}{2} (5 \text{ kg})(0.04 \text{ m}^2) = 0.1 \text{ kg} \cdot \text{m}^2$.

To find how many times greater the ring's moment of inertia is compared to the disc's:
$\frac{I_{ring}}{I_{disc}} = \frac{0.2 \text{ kg} \cdot \text{m}^2}{0.1 \text{ kg} \cdot \text{m}^2} = 2$.

The moment of inertia of the ring is 2 times greater than that of the disc. This question tests the direct application of the derived formulas and reinforces the understanding of how shape (ring vs. disc) affects $I$. This aligns with **CO4** and **CO5**.

**Question 3 (Conceptual/Derivation Insight):**
Explain why the derivation for the mass moment of inertia of a disc involves integrating the moment of inertia of elemental rings, rather than treating the disc as a single point mass or a single elemental ring.

**Answer:**
The derivation for the mass moment of inertia of a disc requires integration because the mass of the disc is not concentrated at a single radius. It is distributed continuously from the center (radius 0) to the outer edge (radius $R$). To accurately capture the effect of this distributed mass on rotational inertia, we must consider the contribution of each infinitesimally small part of the disc. We do this by:
1.  **Dividing the disc into elemental rings:** Each elemental ring at radius $r$ with thickness $dr$ can be treated as a thin ring itself, where essentially all its mass $dm$ is at radius $r$.
2.  **Calculating the moment of inertia of each elemental ring ($dI$):** For each elemental ring, $dI = r^2 dm$.
3.  **Summing (integrating) these contributions:** By integrating $dI$ from $r=0$ to $r=R$, we sum up the moments of inertia of all such elemental rings, effectively accounting for the entire mass distribution of the disc.

Treating the disc as a single point mass would ignore the radial distribution, and treating it as a single elemental ring would incorrectly assume all mass is at one radius. This explanation emphasizes the importance of the integration process in capturing the essence of **CO5**.
