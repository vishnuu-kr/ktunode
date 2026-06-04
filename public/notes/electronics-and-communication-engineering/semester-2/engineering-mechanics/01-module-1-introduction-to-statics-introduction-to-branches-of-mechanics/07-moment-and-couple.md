---
title: "moment and couple"
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics:   Introduction to branches  of mechanics"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da314"
status: "completed"
scrapedAt: "2026-05-23T17:38:49.445Z"
---
# Engineering Mechanics: Module 1 - Introduction to Statics

## Topic: Moments and Couples

Welcome, everyone! Today, we're diving into a fundamental concept in statics, something that's absolutely crucial for understanding how forces affect rigid bodies. We're going to talk about **moments** and **couples**. Think of these not just as abstract mathematical ideas, but as the very essence of how things *turn* or *twist*.

### 1. The Concept of a Moment: More Than Just a Push or Pull

We've already discussed forces – those pushes and pulls that can change an object's state of motion. But what happens when you apply a force at a distance from a pivot point? That’s where the concept of a moment comes in.

Imagine you're trying to open a door. You don't push directly on the hinges, do you? No, you push on the doorknob, far away from the hinges. Why? Because applying the force further away makes it much easier to rotate the door. This "turning effect" is what we call a **moment**.

**Definition of a Moment:** The moment of a force about a point (or axis) is a measure of its tendency to cause rotation about that point (or axis).

From a textbook perspective, like in **Timoshenko and Young**, a moment is defined mathematically. If we have a force **F** applied at a point A, and we want to find the moment of this force about a point O, we consider the perpendicular distance from O to the line of action of the force. Let's call this distance 'd'. The magnitude of the moment is then simply the product of the force magnitude and this perpendicular distance:

**Magnitude of Moment ($M_O$) = Force Magnitude ($F$) × Perpendicular Distance ($d$)**

*   **Relating to Course Outcomes:** This directly ties into **CO1: Understand the vector representation of forces and moments**. While we've introduced the scalar magnitude here, remember that force is a vector, and the moment it creates also has a direction. We'll get to the vector representation shortly.

**What about the direction of the moment?** Think about the door again. Pushing on the doorknob makes the door rotate in a specific direction, usually counterclockwise if viewed from the side where the hinges are. This direction is crucial. We typically use the right-hand rule to define the direction of the moment vector. If you curl the fingers of your right hand in the direction of rotation caused by the force, your thumb points in the direction of the moment vector. This vector is perpendicular to the plane containing the force and the line connecting the pivot point to the point of force application.

**Units:** The units for moment are force units multiplied by distance units. So, you'll see things like Newton-meters (N·m) in the SI system or pound-feet (lb·ft) in the US customary system.

**Example:** Let's say you're tightening a bolt with a wrench. You apply a force of 50 N at the end of a 0.3-meter-long wrench, perpendicular to the wrench handle. The moment you're applying to the bolt is $50 \, \text{N} \times 0.3 \, \text{m} = 15 \, \text{N} \cdot \text{m}$. If you apply the same force but closer to the bolt, say at 0.15 meters, the moment is only $50 \, \text{N} \times 0.15 \, \text{m} = 7.5 \, \text{N} \cdot \text{m}$. Less turning power, right?

### 2. The Varignon's Theorem: A Powerful Tool for Simplification

Now, what if the force isn't applied perpendicular to the distance? Or what if we have multiple forces? This is where **Varignon's Theorem** comes to the rescue, a principle beautifully explained in **Hibbeler's** text. It simplifies calculating moments.

**Varignon's Theorem states:** The moment of a force about any point O is equal to the sum of the moments of its components about the same point O.

This is fantastic because it means we can break down a complex force into simpler horizontal and vertical components, calculate the moment of each component, and then add them up.

**Example:** Imagine pushing a heavy box across the floor. You're not pushing horizontally; you're pushing downwards at an angle. Let's say you apply a force **F** at an angle $\theta$ below the horizontal. You can break this force into a horizontal component $F_x = F \cos \theta$ and a vertical component $F_y = F \sin \theta$. If you're pushing at a distance 'r' from a point O on the floor, Varignon's theorem tells us that the moment of **F** about O is equal to the moment of $F_x$ about O plus the moment of $F_y$ about O.

*   **How to calculate:** If 'r' is the distance from O to the point of application of F, and 'x' is the horizontal distance from O to the line of action of $F_x$, and 'y' is the vertical distance from O to the line of action of $F_y$, then the moment of F about O can be calculated as:
    $M_O = (F_x \times y) - (F_y \times x)$
    (Note the signs based on the direction of rotation. Here, we're assuming the force application point is 'x' distance horizontally and 'y' distance vertically from O, and F is applied at the corner of this rectangle. For a force applied at a point (x, y) relative to O, the moment is $F_x \cdot y - F_y \cdot x$, if F is angled downwards. If F is angled upwards, it would be $F_x \cdot y + F_y \cdot x$. The key is to consistently define your distances and directions.)

*   **Relating to Course Outcomes:** This theorem is essential for **CO2: Identify and describe the components of system of forces acting on the rigid body** and **CO4: Identify appropriate principles to solve problems of mechanics**. By breaking down forces, we can better analyze their effects.

**Vector Approach to Moments:**

Now, let's get more rigorous with the vector representation, as per **CO1**. If a force **F** is applied at point A, and we want to find the moment about point O, we use the position vector **r** from O to A. The moment vector **M** is given by the **cross product**:

**M** = **r** × **F**

Remember the cross product? It yields a vector perpendicular to both **r** and **F**. Its magnitude is $||\mathbf{M}|| = ||\mathbf{r}|| ||\mathbf{F}|| \sin \theta$, where $\theta$ is the angle between **r** and **F**. This magnitude is precisely $r \sin \theta \times F$, which is the perpendicular distance 'd' times F. This confirms our scalar definition.

*   **Key Takeaway:** The cross product elegantly captures both the magnitude and the direction of the moment. This is crucial for more complex 3D problems.

### 3. The Concept of a Couple: A Special Case

Sometimes, we encounter situations where two forces of equal magnitude, acting in opposite directions, and separated by a distance, are applied to an object. This specific arrangement is called a **couple**. Think of trying to unscrew a bottle cap. You use your thumb and forefinger, applying opposite forces to create a turning effect.

**Definition of a Couple:** A couple is a system of two equal and opposite forces acting at a distance from each other.

**Characteristics of a Couple:**

*   **Pure Turning Effect:** A couple produces only a moment; it does not cause any translation of the body. The net force of a couple is zero (F - F = 0).
*   **Moment of a Couple:** The moment of a couple is constant regardless of the point about which it is calculated. This is a very important property. Let's say we have two forces, **F** and -**F**, separated by a distance 'd'. If we take the moment about point O, and the forces are applied at points A and B, with position vectors **r_A** and **r_B** from O, then the moment of the couple **M_couple** is:
    **M_couple** = **r_A** × **F** + **r_B** × (-**F**)
    **M_couple** = (**r_A** - **r_B**) × **F**
    Since **r_A** - **r_B** is the vector connecting the application points of -**F** to **F** (let's call this vector **d**), then:
    **M_couple** = **d** × **F**
    The magnitude is $M = Fd \sin \theta$. If the forces are perpendicular to the distance vector, $\sin \theta = 1$, and $M = Fd$.

*   **Relating to Course Outcomes:** Understanding couples is vital for **CO1: Understand the vector representation of forces and moments** and **CO2: Identify and describe the components of system of forces**. A couple is a simplified system of forces with a pure rotational effect.

**Example:** Imagine trying to twist a pipe with two wrenches. If you apply a force of 100 N downwards on one side of the pipe and an equal force of 100 N upwards on the other side, and these forces are 0.5 meters apart, you create a couple. The moment of this couple is $100 \, \text{N} \times 0.5 \, \text{m} = 50 \, \text{N} \cdot \text{m}$. This moment will cause the pipe to twist. It doesn't matter if you measure this moment about the center of the pipe or any other point; it will always be 50 N·m.

**Key Properties of Couples:**

1.  **Can be moved:** A couple can be moved to any position on the body without changing its effect on the body. This is like sliding the force application points of the pipe example along the pipe.
2.  **Can be rotated:** A couple can be rotated in its plane without changing its effect.
3.  **Can be added:** Two couples can be added by vector addition of their moments.

These properties are key to simplifying force systems. As **Shames** explains, a couple can be represented by a single vector whose direction is perpendicular to the plane of the couple, and whose magnitude is the moment of the couple.

### 4. Applications and Problem Solving

Understanding moments and couples is fundamental to solving many statics problems.

*   **Equilibrium:** For a body to be in equilibrium (not moving or rotating), not only must the sum of forces be zero, but also the sum of moments about any point must be zero. This is the basis of **CO3: Apply the conditions of equilibrium to different force systems**.

*   **Structural Analysis:** In bridges, beams, and other structures, understanding how loads create moments is critical for determining stresses and ensuring stability. For instance, the bending of a beam under load is directly related to the moments generated within it.

*   **Machine Design:** Designing levers, gears, and other mechanical components heavily relies on moment calculations.

**Common Pitfalls:**

*   **Confusing moment arm with lever arm:** Always ensure you're using the *perpendicular* distance from the point of rotation to the *line of action* of the force.
*   **Sign errors:** Be consistent with your sign conventions for moments (e.g., counterclockwise as positive).
*   **Forgetting the vector nature:** While scalar calculations are useful, remember that moments are vectors and have direction, especially in 3D.

**Exam Focus:**

Expect questions that ask you to:
*   Calculate the moment of a force about a point, given force magnitude, direction, and position.
*   Calculate the resultant moment of a system of forces.
*   Identify couples and calculate their moments.
*   Apply moment calculations to determine unknown forces in statically determinate structures (like beams and trusses, though we'll get to those in later modules).
*   Use Varignon's Theorem to simplify calculations.

### Summary for Recall:

*   **Moment:** A force's tendency to cause rotation. $M_O = F \times d$ (scalar) or $\mathbf{M} = \mathbf{r} \times \mathbf{F}$ (vector).
*   **Varignon's Theorem:** Moment of a force = sum of moments of its components.
*   **Couple:** Two equal, opposite, parallel forces. Produces pure rotation. Moment is $M = F \times d$ (where 'd' is the perpendicular distance between the forces).
*   **Key Property of Couples:** Their moment is independent of the point about which it's calculated.

Remember, mastering moments and couples is like learning the alphabet for statics. It's the building block for so much more! Keep practicing with different scenarios.

---

## Sample Questions and Answers

**1. Conceptual Question:**
Explain why pushing on a door near the hinges is much harder than pushing near the doorknob. Use the concept of moments in your explanation.

**Answer:**
Pushing on a door near the hinges is harder because the **moment arm** (the perpendicular distance from the hinges to the point where you apply the force) is very small. The moment, which is the turning effect that opens the door, is calculated as Force × Moment Arm. Since the moment arm is small when pushing near the hinges, you need to apply a much larger force to generate the same moment required to rotate the door. Conversely, pushing near the doorknob maximizes the moment arm, allowing you to create the necessary moment with a much smaller force. This aligns with **CO4** by identifying the principle of moments for practical application.

**2. Calculation Question:**
A force of 200 N is applied to a lever at an angle of 30° to the horizontal, as shown in the diagram. The force is applied at a distance of 0.5 meters from the pivot point O. Calculate the moment of the force about point O. (Assume the force is applied such that it tends to cause counterclockwise rotation.)

**(Diagram description for visual aid: A pivot point O. A lever arm extends horizontally to the right. A force F = 200 N is applied at the end of the lever arm, pointing upwards and to the right, making an angle of 30° with the horizontal lever arm.)**

**Answer:**
We can use the definition of the moment: $M_O = F \times d$, where 'd' is the perpendicular distance from O to the line of action of F. Alternatively, and often simpler when the force is not perpendicular, we can use $M_O = (F \sin \theta) \times r$ or $M_O = (F \cos \theta) \times 0$ if the distance is measured along the line of action.

In this case, the force **F** = 200 N is applied at a distance **r** = 0.5 m from O. The angle $\theta$ between the force vector and the lever arm is 30°.

The perpendicular distance from O to the line of action of the force is $d = r \sin(30^\circ)$.
So, $d = 0.5 \, \text{m} \times \sin(30^\circ) = 0.5 \, \text{m} \times 0.5 = 0.25 \, \text{m}$.

The magnitude of the moment about O is:
$M_O = F \times d = 200 \, \text{N} \times 0.25 \, \text{m} = 50 \, \text{N} \cdot \text{m}$.

Since the force is applied upwards and to the right, it causes a counterclockwise rotation. Assuming counterclockwise as positive, the moment is +50 N·m.

Alternatively, using Varignon's Theorem implicitly: we can consider the component of force perpendicular to the lever arm, which is $F \sin(30^\circ)$.
$M_O = (F \sin(30^\circ)) \times r = (200 \, \text{N} \times \sin(30^\circ)) \times 0.5 \, \text{m}$
$M_O = (200 \, \text{N} \times 0.5) \times 0.5 \, \text{m} = 100 \, \text{N} \times 0.5 \, \text{m} = 50 \, \text{N} \cdot \text{m}$.

This question tests the understanding of moment calculation and relates to **CO1** (understanding force representation) and **CO4** (applying principles).

**3. Couple Identification Question:**
Two forces are applied to a rectangular plate. Force A = 100 N acting upwards at the top left corner, and Force B = 100 N acting downwards at the bottom left corner. The distance between these two points is 0.4 meters. What is the resultant moment of this system about the center of the plate?

**Answer:**
This system is a **couple**. The two forces are equal in magnitude (100 N), opposite in direction, and parallel. The distance between their lines of action is 0.4 meters. A couple produces a pure moment, and importantly, the magnitude of this moment is independent of the point about which it is calculated.

The magnitude of the moment of the couple is $M = F \times d$, where $F$ is the magnitude of one of the forces, and $d$ is the perpendicular distance between the lines of action of the two forces.

$M = 100 \, \text{N} \times 0.4 \, \text{m} = 40 \, \text{N} \cdot \text{m}$.

Since Force A acts upwards and Force B acts downwards, and they are aligned vertically, they will tend to cause a rotation. If Force A is to the left of Force B (or vice versa), this creates a turning effect. Assuming Force A is to the left of Force B: Force A (up) tends to cause counterclockwise rotation about any point. Force B (down) also tends to cause counterclockwise rotation. Therefore, the resultant moment is counterclockwise.

The resultant moment about the center of the plate (or any other point) is 40 N·m in the counterclockwise direction. This demonstrates understanding of couples and their properties, linking to **CO1** and **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
