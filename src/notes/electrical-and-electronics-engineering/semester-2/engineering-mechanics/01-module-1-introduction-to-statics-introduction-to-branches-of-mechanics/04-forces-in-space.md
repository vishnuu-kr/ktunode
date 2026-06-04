---
title: "forces in space."
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics:   Introduction to branches  of mechanics"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9713"
status: "completed"
scrapedAt: "2026-05-23T16:06:29.594Z"
---
# Engineering Mechanics: Module 1 - Introduction to Statics: Forces in Space

Welcome, everyone! Today, we embark on our journey into Engineering Mechanics, a foundational subject for any aspiring engineer. We'll start by understanding what mechanics is all about and then dive into the core of statics, focusing today on a crucial concept: **forces in space**.

Think about the world around us. Almost everything we interact with, from a simple chair to a complex bridge or aircraft, is subject to forces. And many of these forces don't just act on a flat surface; they operate in three dimensions – in space! Understanding how to represent and analyze these forces is absolutely vital for designing safe and efficient structures and machines.

## 1.1 Branches of Mechanics: A Quick Overview

Before we get to forces in space, it's good to have a sense of where we are. Engineering Mechanics is broadly divided into two main branches:

*   **Statics:** This branch deals with objects at rest or moving with constant velocity. It's all about balancing forces. If you're designing a bridge, you're primarily concerned with statics – ensuring the bridge doesn't collapse under its own weight or the load of traffic.
*   **Dynamics:** This branch deals with objects that are accelerating. Think about a car accelerating from rest, or a projectile flying through the air. Here, we consider not just the forces but also how they cause changes in motion.

Within these, we also have:

*   **Mechanics of Materials (or Strength of Materials):** This focuses on the internal effects of forces on deformable bodies – how materials deform and ultimately fail under stress.
*   **Fluid Mechanics:** This deals with the behavior of fluids (liquids and gases) at rest or in motion.

Our focus today is **Statics**, and specifically, how forces act in **three-dimensional space**.

## 1.2 Understanding Forces in Space

So, what exactly do we mean by "forces in space"? In our earlier, simpler analyses, we often worked with forces acting in a single plane (like a force pulling a box across a floor). This is called **planar force analysis**. But many real-world situations involve forces acting at various angles in all three dimensions.

Imagine lifting a heavy object with a rope attached to a crane. The rope might be angled forward, sideways, and upwards. That's a force in space! Or consider the forces acting on the wing of an airplane – there are lift, drag, and side forces, all acting in different directions.

To effectively analyze these forces, we need a way to describe their magnitude *and* their direction in three dimensions. This is where **vectors** come in, a concept you'll find beautifully explained in Chapter 2 of Timoshenko and Young.

### 1.2.1 Representing Forces in Space: The Vector Approach

A force is a **vector quantity**. This means it has both magnitude (how strong the force is) and direction (which way it's pointing).

In three-dimensional space, we use a **rectangular coordinate system**. We typically define three mutually perpendicular axes: the x-axis, the y-axis, and the z-axis.

*   **The x-axis:** Often represents forward/backward direction.
*   **The y-axis:** Often represents sideways direction (left/right).
*   **The z-axis:** Often represents upward/downward direction.

The specific orientation of these axes can be chosen based on the problem, but they must always be mutually perpendicular. This is often referred to as a **right-handed coordinate system**, where if you point your index finger along the positive x-axis and your middle finger along the positive y-axis, your thumb will naturally point along the positive z-axis. This is a convention we always follow, and it's crucial for consistency.

#### 1.2.1.1 Unit Vectors: Our Building Blocks

To describe directions along these axes, we use **unit vectors**. A unit vector has a magnitude of 1 and points in a specific direction.

*   $\mathbf{i}$: A unit vector pointing in the positive x-direction.
*   $\mathbf{j}$: A unit vector pointing in the positive y-direction.
*   $\mathbf{k}$: A unit vector pointing in the positive z-direction.

These unit vectors are fundamental to representing any vector in 3D space.

#### 1.2.1.2 Resolving a Force into Components

Any force $\mathbf{F}$ acting in space can be resolved into three components: one along the x-axis ($F_x$), one along the y-axis ($F_y$), and one along the z-axis ($F_z$).

We can express the force vector $\mathbf{F}$ as:

$\mathbf{F} = F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}$

Here, $F_x$, $F_y$, and $F_z$ are the scalar components of the force. They represent the algebraic values of the force projected onto each axis. For example, if a force pulls upwards and slightly to the right, its $F_z$ component would be positive, and its $F_y$ component would likely be positive (assuming positive y is to the right).

**How do we find these components?**

Let's say we know the magnitude of the force, $F = |\mathbf{F}|$. We can find the components using **direction cosines**.

Imagine drawing a line from the origin to the tip of the force vector. Let $\theta_x$ be the angle between the force vector and the positive x-axis, $\theta_y$ be the angle with the positive y-axis, and $\theta_z$ be the angle with the positive z-axis.

The components are then given by:

$F_x = F \cos \theta_x$
$F_y = F \cos \theta_y$
$F_z = F \cos \theta_z$

These $\cos \theta_x$, $\cos \theta_y$, and $\cos \theta_z$ are the direction cosines. They are also often denoted as $l$, $m$, and $n$, respectively.

A crucial relationship that you must remember is:

$\cos^2 \theta_x + \cos^2 \theta_y + \cos^2 \theta_z = 1$
or
$l^2 + m^2 + n^2 = 1$

This equation is extremely useful! If you know two of the direction cosines, you can find the third.

#### 1.2.1.3 Another Way: Using Coordinates of a Point

Often, instead of angles, we are given the coordinates of a point $P(x, y, z)$ that the force vector points towards, starting from the origin, or another known point.

If a force $\mathbf{F}$ acts from point $A(x_A, y_A, z_A)$ to point $B(x_B, y_B, z_B)$, then the components of the force can be found using the coordinates of points A and B.

The components are:

$F_x = F \left( \frac{x_B - x_A}{|\mathbf{r}|} \right)$
$F_y = F \left( \frac{y_B - y_A}{|\mathbf{r}|} \right)$
$F_z = F \left( \frac{z_B - z_A}{|\mathbf{r}|} \right)$

where $|\mathbf{r}|$ is the magnitude of the displacement vector from A to B, calculated as:

$|\mathbf{r}| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$

Notice that $\frac{x_B - x_A}{|\mathbf{r}|}$, $\frac{y_B - y_A}{|\mathbf{r}|}$, and $\frac{z_B - z_A}{|\mathbf{r}|}$ are precisely the direction cosines ($l, m, n$) of the vector from A to B. So, this is really just another way of applying the direction cosine concept. Hibbeler's textbook, particularly in Chapter 2, provides excellent examples of this.

**Analogy:** Imagine you're throwing a frisbee. The frisbee is moving through space. Its path can be described by its velocity vector. If you want to know how much of that velocity is directed forwards, sideways, or upwards at any given moment, you'd break it down into its x, y, and z components.

### 1.2.2 Vector Addition of Forces in Space

Just like in 2D, forces in 3D can be added to find their resultant. If we have two forces, $\mathbf{F}_1$ and $\mathbf{F}_2$, acting on an object:

$\mathbf{F}_1 = F_{1x} \mathbf{i} + F_{1y} \mathbf{j} + F_{1z} \mathbf{k}$
$\mathbf{F}_2 = F_{2x} \mathbf{i} + F_{2y} \mathbf{j} + F_{2z} \mathbf{k}$

The resultant force $\mathbf{R}$ is found by adding the corresponding components:

$\mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 = (F_{1x} + F_{2x}) \mathbf{i} + (F_{1y} + F_{2y}) \mathbf{j} + (F_{1z} + F_{2z}) \mathbf{k}$

So, $R_x = F_{1x} + F_{2x}$, $R_y = F_{1y} + F_{2y}$, and $R_z = F_{1z} + F_{2z}$.

This applies to any number of forces. You just sum up all the x-components to get the resultant x-component, all the y-components for the resultant y-component, and all the z-components for the resultant z-component.

This is directly related to **Course Outcome 2 (CO2): Identify and describe the components of system of forces acting on the rigid body**. By resolving forces into their components, we're effectively breaking down a complex system into simpler, manageable parts.

**Example:** Imagine two tug-of-war teams pulling a large object. Team A pulls with a force of 500 N, angled slightly forward and to the left. Team B pulls with a force of 600 N, angled backward and to the right. To find the net force on the object, we'd resolve each force into its x, y, and z components, and then add those components together. This is much easier than trying to combine the forces using geometry alone in 3D.

### 1.2.3 Dot Product: Finding Angles and Projections

The dot product (or scalar product) is a powerful tool in vector algebra that’s particularly useful when dealing with forces in space. It’s covered in detail in texts like Shames.

The dot product of two vectors $\mathbf{A}$ and $\mathbf{B}$ is defined as:

$\mathbf{A} \cdot \mathbf{B} = AB \cos \theta$

where $A$ is the magnitude of $\mathbf{A}$, $B$ is the magnitude of $\mathbf{B}$, and $\theta$ is the angle between the two vectors.

If the vectors are given in component form:

$\mathbf{A} = A_x \mathbf{i} + A_y \mathbf{j} + A_z \mathbf{k}$
$\mathbf{B} = B_x \mathbf{i} + B_y \mathbf{j} + B_z \mathbf{k}$

Then the dot product can be calculated as:

$\mathbf{A} \cdot \mathbf{B} = A_x B_x + A_y B_y + A_z B_z$

**Key Applications of the Dot Product in Forces:**

1.  **Finding the Angle Between Two Vectors:** If we know the components of two vectors, we can find the angle between them.
    From $AB \cos \theta = \mathbf{A} \cdot \mathbf{B}$, we get:
    $\cos \theta = \frac{\mathbf{A} \cdot \mathbf{B}}{AB}$

    This is extremely useful for finding the angle between two forces acting at a point, or between a force and an edge of a structure.

2.  **Finding the Projection of a Vector onto an Axis or Another Vector:** The component of vector $\mathbf{A}$ along the direction of vector $\mathbf{B}$ (or along an axis represented by a unit vector $\mathbf{u}$) is given by the dot product.

    Projection of $\mathbf{A}$ onto $\mathbf{B}$ = $\mathbf{A} \cdot \frac{\mathbf{B}}{B}$ (where B is the magnitude of $\mathbf{B}$)
    Projection of $\mathbf{A}$ onto the x-axis = $\mathbf{A} \cdot \mathbf{i} = A_x$
    Projection of $\mathbf{A}$ onto the y-axis = $\mathbf{A} \cdot \mathbf{j} = A_y$
    Projection of $\mathbf{A}$ onto the z-axis = $\mathbf{A} \cdot \mathbf{k} = A_z$

    This shows how the dot product is inherently linked to finding components, as we discussed earlier with direction cosines.

**Relatable Example:** Think about sunshine. If the sun is directly overhead (z-axis), its rays (force vectors) only contribute to the vertical illumination. If the sun is low on the horizon (x-axis), its rays primarily contribute to horizontal illumination. The dot product helps us quantify how much of the sun's "force" (light energy) is directed along a particular path or surface.

**Connection to Course Outcomes:** The dot product is a key mathematical tool that supports **CO1: Understand the vector representation of forces and moments**. It allows us to quantify relationships between vectors in a way that is essential for analyzing force systems.

## 1.3 Equilibrium of Forces in Space

Now that we know how to represent and combine forces in 3D, we can talk about **equilibrium**. This is the heart of statics. An object is in equilibrium if the net force acting on it is zero. This means the object will either remain at rest or continue to move with a constant velocity.

For a rigid body in three-dimensional space, equilibrium requires that the vector sum of all external forces acting on it is zero, AND the vector sum of all external moments (or torques) acting on it is also zero.

However, for this introductory module, we will focus primarily on the **force equilibrium condition**.

### 1.3.1 Conditions for Force Equilibrium in Space

If a rigid body is in equilibrium, then the sum of its forces in each of the x, y, and z directions must be zero.

$\Sigma \mathbf{F} = \mathbf{0}$

In terms of components, this translates to three scalar equations:

$\Sigma F_x = 0$
$\Sigma F_y = 0$
$\Sigma F_z = 0$

This is a fundamental concept related to **Course Outcome 3 (CO3): Apply the conditions of equilibrium to different force system**. These three equations are our primary tools for solving problems involving bodies in 3D static equilibrium.

**How do we use these equations?**

1.  **Draw a Free-Body Diagram (FBD):** This is paramount. You must isolate the object of interest and show *all* the external forces acting on it. For forces in space, this means showing forces acting at various angles, often represented by vectors pointing from the point of application. You'll need to define your coordinate system (x, y, z) clearly on the FBD.
2.  **Resolve all Forces into Components:** Any force that is not acting purely along one of the axes must be resolved into its x, y, and z components. This is where our understanding of direction cosines or coordinate geometry comes in.
3.  **Apply the Equilibrium Equations:** Write out the three equations: $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma F_z = 0$.
4.  **Solve the Equations:** You will typically have unknown forces or their components. By substituting the force components into the equilibrium equations, you create a system of algebraic equations that you can solve for the unknowns.

**Common Scenarios:**

*   **Cables and Pulleys:** A cable under tension exerts a force along its length. If a cable is attached to a point in space and pulled by a known force, the tension in the cable is equal to that known force, and its direction is along the cable.
*   **Supports:** Different types of supports can exert reaction forces. For 3D problems, supports can resist translation in x, y, and z directions, and sometimes rotation (though we're focusing on force equilibrium now). For instance, a ball-and-socket joint can exert forces in x, y, and z directions, but no moment. A fixed support would resist forces and moments in all directions.
*   **Weight:** The weight of an object acts downwards through its center of gravity. If the object is in 3D, its weight is a force acting along the negative z-axis (assuming z is vertical).

**Example: A Suspended Lamp**

Imagine a lamp hanging from the ceiling by three wires. The lamp has a known weight (acting downwards). Each wire is attached to a different point on the ceiling. We know the points where the wires attach to the lamp, and we know the ceiling attachment points. Our goal is to find the tension in each of the three wires.

1.  **FBD:** We draw the lamp as a single particle or rigid body. The external forces are:
    *   The weight of the lamp, acting vertically downwards.
    *   The tension force from wire 1, acting along the wire from the lamp to its ceiling attachment point.
    *   The tension force from wire 2, acting along the wire.
    *   The tension force from wire 3, acting along the wire.
    We define our x, y, and z axes. Let's say x is forward, y is to the right, and z is upward.
2.  **Resolve Forces:**
    *   The weight $\mathbf{W}$ is $0\mathbf{i} + 0\mathbf{j} - W\mathbf{k}$.
    *   For each wire tension force (e.g., $\mathbf{T}_1$), we find its magnitude $T_1$ and resolve it into components $T_{1x}$, $T_{1y}$, $T_{1z}$ using the coordinates of the attachment points. The direction of $\mathbf{T}_1$ is from the lamp to the ceiling.
3.  **Apply Equilibrium Equations:**
    $\Sigma F_x = T_{1x} + T_{2x} + T_{3x} + W_x = 0$ (where $W_x=0$)
    $\Sigma F_y = T_{1y} + T_{2y} + T_{3y} + W_y = 0$ (where $W_y=0$)
    $\Sigma F_z = T_{1z} + T_{2z} + T_{3z} + W_z = 0$ (where $W_z = -W$)
4.  **Solve:** We now have three equations and three unknowns ($T_1, T_2, T_3$). Solving these will give us the tension in each wire.

This type of problem is a classic application of statics in 3D and directly relates to **CO3** and **CO4 (Identify appropriate principles to solve problems of mechanics)**.

### 1.3.2 Moment Equilibrium (A Glimpse)

While our primary focus for now is force equilibrium, remember that for complete 3D static equilibrium, **moment equilibrium** must also be satisfied. The sum of all moments about any point must be zero:

$\Sigma \mathbf{M}_O = \mathbf{0}$

In component form, this gives us three additional equations:

$\Sigma M_x = 0$
$\Sigma M_y = 0$
$\Sigma M_z = 0$

For bodies that can only translate (like our lamp example), force equilibrium is often sufficient to solve for unknown forces. However, for bodies that could also rotate, like a beam or a lever arm, moment equilibrium is essential. We'll delve deeper into moments and couples in later modules, but it's important to be aware that these six equations ($\Sigma F_x = 0, \Sigma F_y = 0, \Sigma F_z = 0, \Sigma M_x = 0, \Sigma M_y = 0, \Sigma M_z = 0$) are the complete conditions for 3D static equilibrium of a rigid body.

## 1.4 Connecting to Course Outcomes

Let's explicitly tie our discussion back to the Course Outcomes:

*   **CO1: Understand the vector representation of forces and moments:** We've spent a significant amount of time on this, explaining how forces in space are vectors and how to represent them using components and unit vectors ($\mathbf{i}, \mathbf{j}, \mathbf{k}$). We also touched upon how the dot product is a fundamental vector operation for analysis.
*   **CO2: Identify and describe the components of system of forces acting on the rigid body:** Our entire discussion on resolving forces into $F_x, F_y, F_z$ and adding vector components directly addresses this. Understanding these components is key to analyzing any system of forces.
*   **CO3: Apply the conditions of equilibrium to different force system:** The core of our equilibrium section focused on the three scalar equations ($\Sigma F_x = 0, \Sigma F_y = 0, \Sigma F_z = 0$) and how to use them to solve for unknown forces in 3D systems.
*   **CO4: Identify appropriate principles to solve problems of mechanics:** By learning about vector decomposition, vector addition, and equilibrium conditions, you are gaining the principles needed to tackle a wide range of static problems in 3D. Choosing the right approach (e.g., using coordinates vs. angles, drawing an FBD correctly) is part of this outcome.
*   **CO5: Develop the understanding of fundamental principles of rigid body dynamics:** While this module is on Statics, the concepts of forces and equilibrium are the bedrock upon which Dynamics is built. Understanding how forces are represented and balanced in static situations is a prerequisite for understanding how forces cause motion and changes in motion in dynamic situations.

**Exam Tip:** Problems involving forces in space often require careful visualization and systematic application of the equilibrium equations. Pay close attention to the signs of components and the directions of forces. Free-body diagrams are your best friend!

## Summary and Key Takeaways

*   Forces in space are vector quantities requiring three components ($F_x, F_y, F_z$) for their description.
*   We use a 3D Cartesian coordinate system (x, y, z) and unit vectors ($\mathbf{i}, \mathbf{j}, \mathbf{k}$).
*   Force components can be found using direction cosines ($\cos \theta_x, \cos \theta_y, \cos \theta_z$) or coordinates of points. Remember $l^2 + m^2 + n^2 = 1$.
*   Vector addition of forces in 3D involves adding their respective components.
*   The dot product is essential for finding angles between vectors and projections, which are often needed for component calculations.
*   The conditions for force equilibrium in 3D are $\Sigma F_x = 0$, $\Sigma F_y = 0$, and $\Sigma F_z = 0$.
*   A correct Free-Body Diagram is the first and most crucial step in solving equilibrium problems.

Understanding these concepts will equip you to analyze many real-world engineering scenarios, from designing lifting equipment to analyzing the forces on structures in three dimensions. Keep practicing these vector manipulations and equilibrium applications, and you'll build a strong foundation in statics!

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
What are the three fundamental conditions for a rigid body to be in static equilibrium in three-dimensional space? Explain why each is necessary.

**Answer:**
The three fundamental conditions for static equilibrium of a rigid body in 3D space are:
1.  **Sum of forces in the x-direction is zero ($\Sigma F_x = 0$):** This ensures that there is no net force acting along the x-axis, preventing acceleration in that direction. If there were a net force, the body would move or change its velocity along the x-axis.
2.  **Sum of forces in the y-direction is zero ($\Sigma F_y = 0$):** Similarly, this ensures no net force along the y-axis, preventing acceleration in that direction.
3.  **Sum of forces in the z-direction is zero ($\Sigma F_z = 0$):** This ensures no net force along the z-axis, preventing acceleration in that direction.

These three conditions collectively ensure that the **linear motion** of the body is unchanged (i.e., it's not accelerating linearly). For complete static equilibrium, we also need moment equilibrium ($\Sigma M_x = 0, \Sigma M_y = 0, \Sigma M_z = 0$), which prevents **rotational acceleration**. However, the question specifically asks for the force equilibrium conditions.

**Question 2 (Application - Calculation):**
A force $\mathbf{F}$ has a magnitude of 100 N. It acts from point A(1, 2, 3) to point B(4, 6, 8). Determine the x, y, and z components of the force $\mathbf{F}$.

**Answer:**
First, we need to find the displacement vector $\mathbf{r}$ from A to B.
$\mathbf{r} = (x_B - x_A)\mathbf{i} + (y_B - y_A)\mathbf{j} + (z_B - z_A)\mathbf{k}$
$\mathbf{r} = (4 - 1)\mathbf{i} + (6 - 2)\mathbf{j} + (8 - 3)\mathbf{k}$
$\mathbf{r} = 3\mathbf{i} + 4\mathbf{j} + 5\mathbf{k}$

Next, we find the magnitude of this displacement vector:
$|\mathbf{r}| = \sqrt{(3)^2 + (4)^2 + (5)^2} = \sqrt{9 + 16 + 25} = \sqrt{50}$

The force $\mathbf{F}$ acts in the same direction as the displacement vector $\mathbf{r}$. The magnitude of $\mathbf{F}$ is given as 100 N.

The components of $\mathbf{F}$ are calculated as:
$F_x = |\mathbf{F}| \left( \frac{r_x}{|\mathbf{r}|} \right) = 100 \left( \frac{3}{\sqrt{50}} \right) \approx 100 \times 0.42426 \approx 42.43$ N
$F_y = |\mathbf{F}| \left( \frac{r_y}{|\mathbf{r}|} \right) = 100 \left( \frac{4}{\sqrt{50}} \right) \approx 100 \times 0.56569 \approx 56.57$ N
$F_z = |\mathbf{F}| \left( \frac{r_z}{|\mathbf{r}|} \right) = 100 \left( \frac{5}{\sqrt{50}} \right) \approx 100 \times 0.70711 \approx 70.71$ N

So, $\mathbf{F} \approx 42.43 \mathbf{i} + 56.57 \mathbf{j} + 70.71 \mathbf{k}$ N.

**Question 3 (Conceptual & Application):**
A 20 kg mass is suspended by three wires from points A, B, and C on a ceiling. Point A is at (0, 4, 5), B is at (3, 0, 5), and C is at (-3, 0, 5). The mass is attached at the origin (0, 0, 0). Assume the z-axis is vertical upwards. Find the tension in each wire. (Note: This requires solving a system of 3 linear equations. For brevity here, we'll outline the setup).

**Answer:**
The weight of the mass is $\mathbf{W} = m\mathbf{g} = (20 \text{ kg})(9.81 \text{ m/s}^2) = 196.2$ N downwards.
So, $\mathbf{W} = 0\mathbf{i} + 0\mathbf{j} - 196.2\mathbf{k}$ N.

Let $\mathbf{T}_A$, $\mathbf{T}_B$, and $\mathbf{T}_C$ be the tension vectors in wires OA, OB, and OC, respectively. The wires pull from the attachment points A, B, C towards the origin O.

*   **For wire OA:**
    The displacement vector from O to A is $\mathbf{r}_{OA} = (0-0)\mathbf{i} + (4-0)\mathbf{j} + (5-0)\mathbf{k} = 0\mathbf{i} + 4\mathbf{j} + 5\mathbf{k}$.
    Magnitude $|\mathbf{r}_{OA}| = \sqrt{0^2 + 4^2 + 5^2} = \sqrt{16 + 25} = \sqrt{41}$.
    The tension $\mathbf{T}_A$ acts in the direction from O to A. So, $\mathbf{T}_A = T_A \frac{\mathbf{r}_{OA}}{|\mathbf{r}_{OA}|} = T_A \left( \frac{0}{\sqrt{41}}\mathbf{i} + \frac{4}{\sqrt{41}}\mathbf{j} + \frac{5}{\sqrt{41}}\mathbf{k} \right)$.

*   **For wire OB:**
    The displacement vector from O to B is $\mathbf{r}_{OB} = (3-0)\mathbf{i} + (0-0)\mathbf{j} + (5-0)\mathbf{k} = 3\mathbf{i} + 0\mathbf{j} + 5\mathbf{k}$.
    Magnitude $|\mathbf{r}_{OB}| = \sqrt{3^2 + 0^2 + 5^2} = \sqrt{9 + 25} = \sqrt{34}$.
    $\mathbf{T}_B = T_B \frac{\mathbf{r}_{OB}}{|\mathbf{r}_{OB}|} = T_B \left( \frac{3}{\sqrt{34}}\mathbf{i} + \frac{0}{\sqrt{34}}\mathbf{j} + \frac{5}{\sqrt{34}}\mathbf{k} \right)$.

*   **For wire OC:**
    The displacement vector from O to C is $\mathbf{r}_{OC} = (-3-0)\mathbf{i} + (0-0)\mathbf{j} + (5-0)\mathbf{k} = -3\mathbf{i} + 0\mathbf{j} + 5\mathbf{k}$.
    Magnitude $|\mathbf{r}_{OC}| = \sqrt{(-3)^2 + 0^2 + 5^2} = \sqrt{9 + 25} = \sqrt{34}$.
    $\mathbf{T}_C = T_C \frac{\mathbf{r}_{OC}}{|\mathbf{r}_{OC}|} = T_C \left( \frac{-3}{\sqrt{34}}\mathbf{i} + \frac{0}{\sqrt{34}}\mathbf{j} + \frac{5}{\sqrt{34}}\mathbf{k} \right)$.

**Equilibrium Conditions:**
$\Sigma F_x = T_{Ax} + T_{Bx} + T_{Cx} + W_x = 0$
$\Sigma F_y = T_{Ay} + T_{By} + T_{Cy} + W_y = 0$
$\Sigma F_z = T_{Az} + T_{Bz} + T_{Cz} + W_z = 0$

Substituting the components:
1.  $T_A(0) + T_B(\frac{3}{\sqrt{34}}) + T_C(\frac{-3}{\sqrt{34}}) + 0 = 0$
    $\frac{3}{\sqrt{34}}(T_B - T_C) = 0 \implies T_B = T_C$

2.  $T_A(\frac{4}{\sqrt{41}}) + T_B(0) + T_C(0) + 0 = 0$
    $\frac{4}{\sqrt{41}}T_A = 0 \implies T_A = 0$.
    *(This implies that for this symmetric setup with the mass at the origin, and supports A, B, C at the same height, wire OA carries no tension if the mass is directly below the midpoint of BC. If the mass was shifted in y, $T_A$ would be non-zero.)*

3.  $T_A(\frac{5}{\sqrt{41}}) + T_B(\frac{5}{\sqrt{34}}) + T_C(\frac{5}{\sqrt{34}}) - 196.2 = 0$
    Since $T_A = 0$ and $T_B = T_C$:
    $0 + T_B(\frac{5}{\sqrt{34}}) + T_B(\frac{5}{\sqrt{34}}) - 196.2 = 0$
    $2 T_B (\frac{5}{\sqrt{34}}) = 196.2$
    $T_B \frac{10}{\sqrt{34}} = 196.2$
    $T_B = 196.2 \times \frac{\sqrt{34}}{10} \approx 196.2 \times \frac{5.831}{10} \approx 114.39$ N.

Therefore, $T_A = 0$ N, $T_B = 114.39$ N, and $T_C = 114.39$ N. This makes physical sense given the symmetry.
