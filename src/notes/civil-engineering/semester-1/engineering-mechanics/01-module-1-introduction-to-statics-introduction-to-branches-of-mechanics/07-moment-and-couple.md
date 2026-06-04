---
title: "moment and couple"
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics: introduction to branches of mechanics"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912ad5"
status: "completed"
scrapedAt: "2026-05-20T18:29:10.577Z"
---
# Engineering Mechanics: Module 1 - Introduction to Statics

## Topic: Moment and Couple

Welcome, everyone! Today, we're diving into a crucial concept in statics: **Moment and Couple**. These aren't just abstract ideas; they explain why things rotate or tend to rotate. Think about opening a door, tightening a bolt with a wrench, or even the way a lever works. All these everyday actions are governed by the principles of moments and couples. Understanding these will lay a strong foundation for everything else we'll cover in statics and dynamics.

This topic is vital because it directly relates to **CO1: Understand the vector representation of forces and moments**. We’ll see how moments, like forces, can be represented as vectors, which is key for our analysis. It also supports **CO2: Identify and describe the components of system of forces acting on the rigid body** because a moment is what makes a rigid body rotate, adding another dimension to how we describe forces on it.

### 1. What is a Moment? The Tendency to Rotate

Let's start with the fundamental idea: **Moment**. In simple terms, a moment is the *turning effect* of a force about a specific point or axis. It quantizes how effectively a force can cause an object to rotate.

**Analogy Time:** Imagine you’re trying to unscrew a jar lid. You apply a force with your hand. If you apply that force close to the center of the lid, it’s harder to turn, right? But if you apply the force at the edge of the lid, it turns much more easily. This difference in turning effect is due to the **moment** of the force.

**Formal Definition:** The moment of a force **F** about a point *O* is defined as the product of the magnitude of the force and the perpendicular distance from the point *O* to the line of action of the force.

Mathematically, if *F* is the force and *r* is the position vector from point *O* to any point on the line of action of *F*, the moment **M**<sub>O</sub> about point *O* is given by the cross product:

**M**<sub>O</sub> = **r** × **F**

This cross product is fundamental because it captures both the *magnitude* and the *direction* of the moment.

*   **Magnitude:** The magnitude of the moment is *rF* sin(θ), where θ is the angle between **r** and **F**. Notice that if θ is 0 or 180 degrees (force acting along the line connecting the point to the force's origin), the moment is zero. This aligns with our jar lid example – pushing directly towards or away from the center does nothing to turn it.
*   **Direction:** The direction of the moment vector is perpendicular to the plane formed by **r** and **F**, according to the right-hand rule. If you curl the fingers of your right hand from **r** to **F**, your thumb points in the direction of the moment vector. This is crucial for **CO1**. The moment vector points along the axis of rotation.

**Key Concepts:**

*   **Point of Reference (O):** The moment is always calculated with respect to a specific point. Changing this point changes the moment. This is a common point of confusion, so always be clear about *where* you are taking the moment about.
*   **Perpendicular Distance (Moment Arm):** This is the shortest distance from the point of reference to the *line of action* of the force. It's the component of **r** perpendicular to **F**. So, *M* = (Force) × (Moment Arm).
*   **Line of Action:** This is an imaginary line extending infinitely in both directions along the direction of the force.

**Units:** The unit of moment is a force unit multiplied by a distance unit (e.g., Newton-meters (N⋅m) in SI, or pound-feet (lb⋅ft) in imperial units).

**Why is this important for CO1 and CO2?** Understanding the vector nature of moments (CO1) allows us to combine moments from different forces acting on a rigid body. We can sum these vector moments to find the *resultant moment*, which tells us the overall turning effect on the body. This is part of describing the system of forces (CO2).

**Example:** Consider a spanner (wrench) tightening a bolt. If you apply a 100 N force perpendicular to the spanner handle, 0.3 meters from the center of the bolt, the moment is:

*   Magnitude = 100 N × 0.3 m = 30 N⋅m.
*   Direction: According to the right-hand rule, if you're tightening, the moment vector points into the bolt, causing it to rotate. If you were loosening, the force direction would be reversed, and so would the moment's direction.

**Remember this:** The moment arm is *always* the perpendicular distance to the line of action of the force. Often, it's easier to calculate the moment by resolving the force into components or by using the perpendicular distance from the point to the line of action.

### 2. The Moment Arm: Calculating the Perpendicular Distance

Sometimes, the force is not applied perpendicular to the lever arm. How do we find the moment arm then?

**Method 1: Using Geometry**
If you know the force **F** and the position vector **r**, and the angle θ between them, the moment arm is *r* sin(θ).
Moment magnitude = *F* × (*r* sin(θ)).

**Method 2: Resolving the Force**
Resolve the force **F** into components parallel and perpendicular to the line connecting the point of reference *O* to the point of application of the force. The component perpendicular to **r** will cause a moment.

**Method 3: Resolving the Position Vector**
Resolve the position vector **r** into components parallel and perpendicular to the force **F**. The component of **r** perpendicular to **F** is the moment arm.

**Example:** You push a door open. The force you apply is at an angle to the door. The most effective way to open it is to push perpendicular to the door's surface. Pushing at an angle means only the component of your force perpendicular to the door contributes to the turning effect (moment).

### 3. Calculating Moments: Practical Approaches

Let's look at how we practically calculate moments, especially when dealing with multiple forces or forces not acting simply.

#### 3.1 Scalar Approach (For 2D Problems)

In two-dimensional problems, moments are typically considered about points in the plane or axes perpendicular to the plane. We can use a scalar approach:

*   **Moment = Force × Perpendicular Distance**

We assign a sign (usually positive for counter-clockwise rotation and negative for clockwise rotation) to indicate the direction. This is a convention, but it’s a very useful one that aligns with our right-hand rule for vectors.

**Example:** A beam supported at one end has a 50 N weight placed 2 meters from the support.

*   If we take moments about the support (point O), the force is 50 N and the perpendicular distance (moment arm) is 2 m.
*   The moment is 50 N * 2 m = 100 N⋅m.
*   If the force causes a clockwise rotation around O, we’d denote this as -100 N⋅m.

This scalar approach is often easier for initial analysis in 2D and directly helps us with **CO2** by quantifying the turning effect of each force component.

#### 3.2 Vector Approach (For 3D Problems and Formalism)

As we saw with the cross product (**M**<sub>O</sub> = **r** × **F**), the vector approach is essential for 3D problems and for a more rigorous understanding. It directly addresses **CO1**.

Let's say we have a force **F** = F<sub>x</sub>**i** + F<sub>y</sub>**j** + F<sub>z</sub>**k** and the position vector from point O to the point of application of the force is **r** = x**i** + y**j** + z**k**. The moment **M**<sub>O</sub> is calculated as:

$$
\mathbf{M}_O = \mathbf{r} \times \mathbf{F} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
x & y & z \\
F_x & F_y & F_z
\end{vmatrix}
$$

$$
\mathbf{M}_O = (yF_z - zF_y)\mathbf{i} - (xF_z - zF_x)\mathbf{j} + (xF_y - yF_x)\mathbf{k}
$$

Each component (M<sub>x</sub>, M<sub>y</sub>, M<sub>z</sub>) represents the moment about the respective axis.

**Remember this:** In 2D, we often simplify this. If **r** = x**i** + y**j** and **F** = F<sub>x</sub>**i** + F<sub>y</sub>**j**, and we are taking moments about the origin (0,0), the moment arm for F<sub>x</sub> is y, and for F<sub>y</sub> is -x. The moment about the z-axis (perpendicular to the plane) is then M<sub>z</sub> = xF<sub>y</sub> - yF<sub>x</sub>. This is the scalar result we saw earlier, with the sign indicating direction.

#### 3.3 Principle of Transmissibility and Moment Calculations

A key principle we often use is the **Principle of Transmissibility**. This states that a force acting on a rigid body can be transmitted along its line of action without changing its overall effect on the body. However, when we talk about *moments*, this principle needs careful consideration. While the force can be moved along its line of action without changing its effect *in terms of translation*, moving it *changes the moment* about any point *not* on that line.

However, if we have a force **F** acting at point A, and we want to know the moment about point O, we can resolve **F** into components at A, or we can resolve **F** into components that are applied at a different point B on the line of action of **F**, provided we add a couple to compensate for the change in moment. This sounds complex, but it simplifies to:

*   **Moment about O = (Component of F perpendicular to OA) × (Distance OA)**
*   **Moment about O = (Component of F parallel to OA) × (Perpendicular distance from O to the line of action of this component)** – This component parallel to OA actually causes no moment about O.

This is why the concept of **moment arm** is so crucial.

### 4. What is a Couple? A Pure Turning Effect

Now, let's talk about a special case of forces that creates *only* a turning effect, with no tendency to cause translation. This is called a **couple**.

**Definition:** A couple is a system of two forces that are equal in magnitude, opposite in direction, and whose lines of action are parallel and separated by a perpendicular distance.

**Analogy Time:** Think about steering a car. You place your hands on opposite sides of the steering wheel and push one hand forward while pulling the other hand backward. These two forces are equal in magnitude, opposite in direction, and have a distance between them. They cause the steering wheel to rotate without pushing the car forward or backward as a whole. This is a perfect example of a couple.

**Key Characteristics of a Couple:**

1.  **Pure Rotation:** A couple produces a pure moment. It has no resultant force.
2.  **Moment Magnitude:** The magnitude of the moment of a couple is the product of the magnitude of one of the forces and the perpendicular distance between the lines of action of the two forces.
    *   *M* = *F* × *d*
    *   Here, *F* is the magnitude of either force, and *d* is the perpendicular distance between their lines of action.

3.  **Moment is Constant:** The moment of a couple is independent of the point about which it is taken. This is a *very* important property. Unlike a single force whose moment depends on the reference point, the moment of a couple remains the same regardless of where you calculate it. This is because moving the couple requires moving both forces, and this process can be shown to preserve the resultant moment.

**Vector Representation of a Couple:**
If we have two forces, **F** and -**F**, separated by a position vector **r** from the point of application of -**F** to the point of application of **F**, the moment of the couple is given by:

**M** = **r** × **F**

Here, **r** is the vector connecting the line of action of -**F** to the line of action of **F**. The magnitude is *Fd*, where *d* is the perpendicular distance between the lines of action.

**Connection to CO1:** The vector representation of a couple's moment is a pure vector, perpendicular to the plane of the forces. This reinforces the vector nature of moments and supports **CO1**.

**Connection to CO2 & CO3:** Couples are a fundamental component of systems of forces. Recognizing a couple allows us to simplify the analysis of forces acting on a rigid body. If a system of forces results in a net couple, it means the body will tend to rotate without any net linear acceleration, which is a key aspect of equilibrium analysis (**CO3**).

**Example:** A rectangular plate is subjected to two forces: a 50 N force upwards at the top left corner and a 50 N force downwards at the top right corner. The distance between these corners is 1 meter.

*   This is a couple.
*   Magnitude of each force = 50 N.
*   Distance between forces = 1 m.
*   Moment of the couple = 50 N × 1 m = 50 N⋅m.
*   The direction of the moment would be counter-clockwise if the upward force is on the left and downward on the right.

**Remember this:** The moment of a couple is a "free vector." It can be moved anywhere within the body or even outside the body without changing its effect. This is because it represents a pure turning effect.

### 5. Equivalence of Force-Couple Systems

This is where things get powerful for solving problems. We can often simplify a complex system of forces by replacing a force acting at a point with an equivalent force acting at a different point *plus* a couple.

Consider a force **F** acting at point A. We want to move this force to act at point B, where B is not on the line of action of **F**.

1.  **Add and Subtract Forces:** At point B, we introduce two equal and opposite forces **F** and -**F**, acting parallel to the original **F**. This doesn't change the net force on the body.
2.  **Form a Couple:** The original force **F** at A and the new force -**F** at B form a couple. Let **r** be the position vector from B to A. The moment of this couple is **M** = **r** × **F**.
3.  **Resultant System:** The original system (force **F** at A) is now equivalent to a system consisting of:
    *   A force **F** acting at point B.
    *   A couple with moment **M** = **r** × **F**.

This process is called **"moving a force by introducing a couple."** It's a fundamental technique in statics and is essential for applying equilibrium conditions and solving problems that relate to **CO2, CO3, and CO4**.

**Example:** Imagine a force of 100 N pushing horizontally on the top of a flagpole, 5 meters above the base. We want to analyze the forces and moments at the base of the flagpole.

*   Original situation: 100 N force at the top.
*   To analyze at the base:
    *   We keep the 100 N force acting at the base.
    *   We create a couple by adding a 100 N upward force and a 100 N downward force at the base. The original 100 N force at the top and the new downward 100 N force at the base form a couple.
    *   The distance between the forces of the couple is 5 meters.
    *   The moment of the couple is 100 N × 5 m = 500 N⋅m (tending to bend the pole).
*   So, a 100 N force at the top is equivalent to a 100 N force at the base plus a 500 N⋅m couple at the base.

This technique allows us to transfer forces to a convenient point of reference (often a support or a point where we want to calculate resultant forces and moments) without altering the overall effect on the rigid body.

### 6. Summary and Key Takeaways

Let's recap what we've learned about moments and couples:

*   **Moment:** The turning effect of a force about a point.
    *   Magnitude: Force × Perpendicular Distance (Moment Arm).
    *   Vector: **M** = **r** × **F**.
    *   Crucial for understanding how forces cause rotation.
*   **Couple:** Two equal, opposite, parallel forces.
    *   Produces pure rotation; no net force.
    *   Moment Magnitude: Force × Distance between forces (*M* = *Fd*).
    *   Moment is constant regardless of the point of reference.

**Why are these concepts important for the Course Outcomes?**

*   **CO1 (Vector Representation):** We’ve seen moments and couples as vectors. Their addition and manipulation are governed by vector algebra, essential for complex 3D analyses.
*   **CO2 (Components of Forces):** Moments represent the rotational components of how forces act on a rigid body, complementing the translational aspects.
*   **CO3 (Equilibrium):** For a rigid body to be in equilibrium, the sum of all forces must be zero, *and* the sum of all moments about *any* point must be zero. Understanding moments and couples is therefore non-negotiable for applying equilibrium conditions.
*   **CO4 (Principles to Solve Problems):** The principles of moving forces by introducing couples are fundamental problem-solving tools.
*   **CO5 (Rigid Body Dynamics):** While this module is statics, the concept of moment of inertia (which we'll cover later) is directly related to moments and couples, forming the basis of rotational dynamics.

**Exam Focus:** Expect questions on calculating moments with different force applications (perpendicular, at an angle), finding the resultant moment of multiple forces, identifying couples, and calculating their moments, and crucially, problems involving moving a force by introducing a couple. Pay close attention to the sign conventions and the definition of the moment arm.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual and typical exam-style problems.

**Question 1 (Conceptual):**
A force of 10 N acts vertically upwards on a lever 1 meter from the pivot. What is the moment of this force about the pivot? If the force is moved to act 0.5 meters from the pivot along the same line of action, what happens to the moment?

**Answer:**
The moment of the force about the pivot is calculated as Force × Perpendicular Distance.
Moment = 10 N × 1 m = 10 N⋅m.
If the force is moved to act 0.5 meters from the pivot along the same line of action, the new moment is 10 N × 0.5 m = 5 N⋅m. The moment *decreases* because the lever arm has decreased. This highlights that the moment of a single force *does* depend on the point of reference and the location of force application.

**Question 2 (Exam Style - 2D Moment Calculation):**
A force of 200 N is applied at point B on a beam. The coordinates of point B are (0.8 m, 0.4 m) relative to point A, which is the support. The force is directed at an angle of 30° above the horizontal. Calculate the moment of this force about point A.

**Answer:**
Here, we need to find the moment of the force **F** about point A.
First, let's find the components of the force **F**.
Magnitude of force, F = 200 N.
Angle with the horizontal = 30°.
F<sub>x</sub> = 200 N * cos(30°) = 200 * (√3 / 2) = 100√3 N ≈ 173.2 N (acting horizontally to the right).
F<sub>y</sub> = 200 N * sin(30°) = 200 * (1/2) = 100 N (acting vertically upwards).

The position vector **r** from A to B is **r** = 0.8**i** + 0.4**j**.

We can calculate the moment about A using the scalar method or the vector cross product.

**Scalar Method:**
The moment arm for F<sub>x</sub> (horizontal component) is the vertical distance from A to the line of action of F<sub>x</sub>, which is the y-coordinate of B, i.e., 0.4 m. This force component tends to cause a clockwise rotation about A.
Moment due to F<sub>x</sub> = -F<sub>x</sub> * y = -(100√3 N) * (0.4 m) = -40√3 N⋅m ≈ -69.28 N⋅m.

The moment arm for F<sub>y</sub> (vertical component) is the horizontal distance from A to the line of action of F<sub>y</sub>, which is the x-coordinate of B, i.e., 0.8 m. This force component tends to cause a counter-clockwise rotation about A.
Moment due to F<sub>y</sub> = +F<sub>y</sub> * x = +(100 N) * (0.8 m) = 80 N⋅m.

Resultant Moment about A = Moment due to F<sub>x</sub> + Moment due to F<sub>y</sub>
M<sub>A</sub> = -69.28 N⋅m + 80 N⋅m = 10.72 N⋅m (counter-clockwise).

**Vector Cross Product Method:**
**F** = (100√3)**i** + 100**j**
**r** = 0.8**i** + 0.4**j**

**M**<sub>A</sub> = **r** × **F**
$$
\mathbf{M}_A = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
0.8 & 0.4 & 0 \\
100\sqrt{3} & 100 & 0
\end{vmatrix}
$$
$$
\mathbf{M}_A = (0.4 \times 0 - 0 \times 100)\mathbf{i} - (0.8 \times 0 - 0 \times 100\sqrt{3})\mathbf{j} + (0.8 \times 100 - 0.4 \times 100\sqrt{3})\mathbf{k}
$$
$$
\mathbf{M}_A = (80 - 40\sqrt{3})\mathbf{k} \text{ N⋅m}
$$
The moment is directed along the z-axis (perpendicular to the xy plane).
Magnitude = 80 - 40√3 ≈ 80 - 40(1.732) ≈ 80 - 69.28 = 10.72 N⋅m.
The positive sign of the k component indicates a counter-clockwise moment.

**Answer:** The moment of the force about point A is approximately 10.72 N⋅m, and it causes a counter-clockwise rotation.

**Question 3 (Conceptual - Couple):**
Two forces, 50 N each, are applied to a rectangular plate. One is applied at the top-left corner pulling upwards, and the other at the top-right corner pushing downwards. The distance between these corners is 0.6 meters. Is this a couple? What is the moment of this couple?

**Answer:**
Yes, this is a couple. The two forces are equal in magnitude (50 N), opposite in direction, and their lines of action are parallel, separated by a distance of 0.6 m.
The moment of the couple is calculated as:
Moment = Force × Distance between forces
Moment = 50 N × 0.6 m = 30 N⋅m.
The direction of the moment would be counter-clockwise, causing the plate to rotate.

**Question 4 (Exam Style - Moving a Force):**
A force of 60 N is applied vertically downwards at point B on a horizontal bar AB. Point A is the left end of the bar, and point B is 2 meters to the right of A. The total length of the bar is 3 meters. Determine the equivalent force-couple system at point A.

**Answer:**
We want to move the 60 N downward force from point B to point A.
1.  **Equivalent Force:** The force itself remains unchanged. So, we have a 60 N force acting vertically downwards at point A.
2.  **Couple:** To move the force from B to A, we introduce a couple. The couple consists of the original 60 N force acting downwards at B, and a new 60 N force acting upwards at A. This pair of forces (the original at B and the new upward one at A) forms a couple.
    *   Magnitude of force in the couple = 60 N.
    *   Distance between the forces (moment arm) = distance between A and B = 2 meters.
    *   Moment of the couple = Force × Distance = 60 N × 2 m = 120 N⋅m.
    *   The original force at B is downwards. The new force at A is upwards. This creates a counter-clockwise rotation about A.

Therefore, the equivalent force-couple system at point A consists of:
*   A 60 N force acting vertically downwards at A.
*   A couple of magnitude 120 N⋅m, tending to cause counter-clockwise rotation.
