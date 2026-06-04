---
title: "Combined motion of translation and rotation."
subject: "ENGINEERING MECHANICS"
module: "Module 3: Dynamics  – Rectilinear translation "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9722"
status: "completed"
scrapedAt: "2026-05-23T16:06:41.262Z"
---
# Engineering Mechanics: Module 3 - Dynamics (Rectilinear Translation)

## Topic: Combined Motion of Translation and Rotation

Welcome, everyone! Today, we're going to tackle a really exciting and fundamental topic in dynamics: **combined motion of translation and rotation**. We've already explored rectilinear translation, where objects just move in a straight line. Now, we're going to elevate our understanding to situations where objects are not only moving from point A to point B (translation) but are also spinning or rolling around an axis (rotation). This is where mechanics truly comes alive, as it describes so many everyday phenomena.

Think about a car's wheel as it rolls down the road. The car itself is translating forward, but the wheel is also rotating. Or consider a spinning top that's also being carried along on a table. These are classic examples of combined motion. Understanding this topic is crucial for analyzing the dynamics of a vast range of mechanical systems.

This topic directly builds upon our understanding of basic dynamics principles and directly contributes to **Course Outcome 5 (CO5): Develop the understanding of fundamental principles of rigid body dynamics**. We'll be applying the core ideas of force, motion, and their relationships to these more complex scenarios.

### 1. Deconstructing Combined Motion: Translation + Rotation

Before we dive deep, let's clarify what we mean by “combined motion.”

*   **Translation:** Every point on the object moves along the same path. If you were to pick any particle on the object, its velocity and acceleration would be identical to any other particle. This is the "moving from A to B" part.
*   **Rotation:** The object spins about a fixed or moving axis. Points on the object move in circular paths. This is the "spinning" part.

When these two motions happen simultaneously, we have combined motion.

### 2. The Key Insight: Relative Motion and the Center of Gravity (CG)

The most elegant way to analyze combined motion, particularly in the context of rigid bodies, is to break it down into simpler, manageable parts. This is a recurring theme in engineering mechanics – simplifying complex problems.

The critical insight here, as emphasized in textbooks like Timoshenko and Young and Hibbeler, is that we can often analyze the motion of a rigid body by considering two components:

1.  **The translational motion of its Center of Gravity (CG):** We can treat the entire mass of the body as if it were concentrated at its CG and analyze its linear translation.
2.  **The rotational motion about its CG:** We can then analyze the rotation of the body about an axis passing through its CG.

This principle is incredibly powerful. It allows us to use the familiar equations of rectilinear motion for the translation of the CG and the equations of rotational motion for the spin about the CG.

Let's say we have a rigid body. We can pick a reference point, and that reference point can be the CG. Then, the velocity of any point P on the body can be expressed as the velocity of the CG *plus* the velocity of P relative to the CG. Similarly, the acceleration of P is the acceleration of the CG *plus* the acceleration of P relative to the CG.

**So, the motion of any point P on the rigid body can be described by:**

$\mathbf{v}_P = \mathbf{v}_{CG} + \mathbf{v}_{P/CG}$
$\mathbf{a}_P = \mathbf{a}_{CG} + \mathbf{a}_{P/CG}$

Here:
*   $\mathbf{v}_P$ and $\mathbf{a}_P$ are the absolute velocity and acceleration of point P.
*   $\mathbf{v}_{CG}$ and $\mathbf{a}_{CG}$ are the velocity and acceleration of the center of gravity.
*   $\mathbf{v}_{P/CG}$ and $\mathbf{a}_{P/CG}$ are the velocity and acceleration of point P *relative* to the center of gravity. This relative motion is purely rotational.

This decomposition is fundamental. It allows us to connect our knowledge of linear motion (Module 3) with rotational motion, which we'll delve into more deeply in subsequent modules.

**Connection to Course Outcomes:**
*   **CO1 (Vector Representation):** We're using vector addition to combine the translational and rotational velocities/accelerations. This reinforces the need for accurate vector representation.
*   **CO2 (System of Forces):** While not explicitly force systems yet, the *motion* we're describing is caused by forces and moments. Understanding the motion is the first step to applying force analysis.
*   **CO4 (Appropriate Principles):** We are applying the principle of resolving complex motion into simpler translational and rotational components.
*   **CO5 (Rigid Body Dynamics):** This entire topic is the bedrock of rigid body dynamics.

### 3. Analyzing Forces and Moments in Combined Motion

Now, how do forces and moments fit into this picture? We use Newton's second law, but we need to apply it to both the translational and rotational aspects.

#### 3.1 Translational Motion of the CG

For the translational motion of the CG, Newton's second law remains straightforward:

$\sum \mathbf{F} = m \mathbf{a}_{CG}$

Where:
*   $\sum \mathbf{F}$ is the **vector sum of all external forces** acting on the rigid body. This includes forces like gravity, applied forces, normal forces, friction, etc.
*   $m$ is the **total mass** of the rigid body.
*   $\mathbf{a}_{CG}$ is the **acceleration of the center of gravity**.

This equation tells us that the overall translational motion of the object (as described by its CG) is governed by the net force acting on it. Think of it this way: if you push a rolling ball forward, that push contributes to the ball's forward motion.

#### 3.2 Rotational Motion About the CG

For the rotational motion about the CG, we use a similar principle, but it involves the concept of **angular acceleration** and **moments of inertia**. The governing equation is:

$\sum \mathbf{M}_{CG} = I_{CG} \boldsymbol{\alpha}$

Where:
*   $\sum \mathbf{M}_{CG}$ is the **sum of the moments of all external forces about the CG**. Moments are what cause rotation.
*   $I_{CG}$ is the **moment of inertia of the body about an axis passing through the CG**. This is a measure of how resistant the body is to changes in its rotational motion. It depends on the mass distribution relative to the axis of rotation.
*   $\boldsymbol{\alpha}$ is the **angular acceleration** of the body.

**What does this mean in practice?** It means that to make an object spin faster or slower, you need to apply a net moment (a torque). And how much it speeds up or slows down for a given moment depends on its moment of inertia. A heavy flywheel with mass far from its center is harder to spin than a light disc.

**Analogy Time:** Imagine trying to spin a merry-go-round.
*   **Translation of CG:** If someone pushes the merry-go-round sideways, its CG will translate. The force they apply will dictate this sideways acceleration ($\sum \mathbf{F} = m \mathbf{a}_{CG}$).
*   **Rotation about CG:** If someone pushes on the edge of the merry-go-round tangentially, they apply a moment, causing it to rotate. The amount of angular acceleration ($\boldsymbol{\alpha}$) they get for their push depends on the merry-go-round's moment of inertia ($I_{CG}$) and the force they apply (which creates the moment $\sum \mathbf{M}_{CG}$).

**Important Note on the CG:** The CG is the point where gravity effectively acts. For uniform density objects, it often coincides with the geometric center. However, it's defined as the point where the sum of the moments of the weights of all particles of the body is zero.

**Connection to Course Outcomes:**
*   **CO2 (System of Forces):** We are now considering how the *forces* and their *locations* (to generate moments) influence the motion.
*   **CO3 (Conditions of Equilibrium):** While we're in dynamics (not equilibrium), the underlying principles of summing forces and moments are the same. In equilibrium, acceleration and angular acceleration would be zero.
*   **CO4 (Appropriate Principles):** We are applying Newton's second law in its linear and rotational forms, recognizing which summation of forces/moments to use for which type of motion.
*   **CO5 (Rigid Body Dynamics):** This is the core of how forces and moments dictate the translational and rotational motion of rigid bodies.

### 4. Rolling Motion: A Classic Example

Rolling motion is a perfect illustration of combined translation and rotation, and it’s a frequent topic in exams. Consider a wheel or a cylinder rolling without slipping.

In rolling without slipping, there's a direct relationship between the translational velocity of the CG and the angular velocity of the rotation.

If a wheel of radius $r$ rolls without slipping, and its CG has a velocity $v_{CG}$, then its angular velocity $\omega$ is related by:

$v_{CG} = \omega r$

Similarly, for acceleration:

$a_{CG} = \alpha r$

These relationships are derived from the condition that the point of contact between the wheel and the surface is instantaneously at rest. This means the velocity of the point on the wheel at the bottom is zero relative to the ground.

Let's visualize this with our $\mathbf{v}_P = \mathbf{v}_{CG} + \mathbf{v}_{P/CG}$ equation. Consider the point of contact (let's call it P) at the bottom of the wheel.

*   $\mathbf{v}_{CG}$ is the velocity of the center of the wheel, moving forward.
*   $\mathbf{v}_{P/CG}$ is the velocity of the contact point relative to the CG. Since the wheel is rotating, this point moves backward relative to the CG with a speed $\omega r$.

For no slipping, $\mathbf{v}_P = 0$. So, $\mathbf{v}_{CG} + \mathbf{v}_{P/CG} = 0$.
This means $\mathbf{v}_{CG}$ must be equal in magnitude and opposite in direction to $\mathbf{v}_{P/CG}$.
$v_{CG} = \omega r$ (The CG moves forward at speed $\omega r$).

**What about forces?**

When a wheel rolls, the external forces are typically:
*   Gravity acting at the CG.
*   Normal force from the surface, acting at the point of contact (or distributed).
*   Friction force at the point of contact.

The friction force is *crucial* for rolling motion. It's what provides the moment needed to change the angular velocity ($\sum \mathbf{M}_{CG} = I_{CG} \boldsymbol{\alpha}$). Without friction, the wheel would just slide, not roll.

**Example Scenario:** Imagine pushing a cylindrical can of beans across a table.
*   If you push it gently and it just slides, that's translation.
*   If you give it a strong spin and it mostly rotates in place, that's rotation.
*   If you push it with a moderate force, it will roll. The forward push causes translational acceleration of the CG ($a_{CG}$), and the friction force between the can and the table provides the torque to create angular acceleration ($\alpha$). The relationship $a_{CG} = \alpha r$ must hold for pure rolling.

**Exam Tip:** Problems involving rolling motion without slipping often require solving two sets of equations simultaneously: the force equation for translational motion and the moment equation for rotational motion, along with the kinematic relationship ($v_{CG} = \omega r$ or $a_{CG} = \alpha r$). Remember that friction is often static friction in pure rolling.

**Hibbeler and Shames** both provide excellent step-by-step methods for tackling these rolling problems, emphasizing the free-body diagram and the kinematic constraints.

**Connection to Course Outcomes:**
*   **CO2 (System of Forces):** Identifying friction as a necessary force for rolling.
*   **CO3 (Conditions of Equilibrium):** Understanding that dynamics means these sums are *not* zero, but rather equal to mass times acceleration.
*   **CO4 (Appropriate Principles):** Applying the kinematic relationships for rolling and the dynamic equations.
*   **CO5 (Rigid Body Dynamics):** This is a prime example of applying rigid body dynamics principles.

### 5. General Plane Motion

Combined translation and rotation is often referred to as **general plane motion**. Any general motion of a rigid body in a plane can be thought of as a translation of any point P on the body plus a rotation about P. However, analyzing the translation of the CG and rotation about the CG is usually the most convenient approach.

The principles we've discussed ($\sum \mathbf{F} = m \mathbf{a}_{CG}$ and $\sum \mathbf{M}_{CG} = I_{CG} \boldsymbol{\alpha}$) are the foundation for solving problems in general plane motion.

### 6. Work-Energy and Impulse-Momentum Approaches

Just as we had in rectilinear translation, these combined motion problems can also be solved using the work-energy theorem and the impulse-momentum principles. These methods can sometimes be more efficient, especially when dealing with velocities or forces over time.

*   **Work-Energy:** The total kinetic energy of a body in general plane motion is the sum of its translational kinetic energy (due to the CG's motion) and its rotational kinetic energy (due to rotation about the CG).
    $T = T_{trans} + T_{rot} = \frac{1}{2}mv_{CG}^2 + \frac{1}{2}I_{CG}\omega^2$
    The work-energy theorem states: $U_{1-2} = \Delta T = T_2 - T_1$.

*   **Impulse-Momentum:** This approach relates the change in linear and angular momentum of the body to the impulses of forces and moments acting on it.
    *   Linear impulse-momentum: $\int \sum \mathbf{F} dt = m\Delta\mathbf{v}_{CG}$
    *   Angular impulse-momentum: $\int \sum \mathbf{M}_{CG} dt = I_{CG}\Delta\boldsymbol{\omega}$

These methods are powerful alternatives and often simplify calculations, especially when forces are not constant or when we're interested in velocities after a certain displacement or time.

**Connection to Course Outcomes:**
*   **CO4 (Appropriate Principles):** Choosing the best method (force-acceleration, work-energy, or impulse-momentum) for a given problem.
*   **CO5 (Rigid Body Dynamics):** Extending these energy and momentum concepts to rotational and combined motion.

### 7. Summary of Key Concepts

To wrap up our discussion on combined motion, let’s reinforce the most critical takeaways:

*   **Decomposition:** The motion of a rigid body in a plane can be decomposed into the translation of its CG and rotation about its CG.
*   **Governing Equations:**
    *   $\sum \mathbf{F} = m \mathbf{a}_{CG}$ (Translational motion)
    *   $\sum \mathbf{M}_{CG} = I_{CG} \boldsymbol{\alpha}$ (Rotational motion about CG)
*   **Rolling Without Slipping:** A special case with kinematic constraints: $v_{CG} = \omega r$ and $a_{CG} = \alpha r$. Friction is essential here.
*   **Alternative Methods:** Work-energy and impulse-momentum principles can also be applied.

**Remember this:** When you see an object moving and spinning simultaneously, think about the CG. Its motion is governed by forces. The spinning motion is governed by moments. And in specific cases like rolling, these motions are intrinsically linked. This is the essence of analyzing complex dynamic systems in engineering.

### Sample Questions with Answers

**Question 1 (Conceptual):**
A solid cylinder rolls without slipping down an inclined plane. Which force is responsible for the cylinder's angular acceleration?
a) The normal force
b) The gravitational force
c) The friction force at the point of contact
d) The resultant force acting on the cylinder

**Answer and Reasoning:**
The correct answer is **(c) The friction force at the point of contact**.
*   The **normal force** acts perpendicular to the surface and passes through the CG (or is distributed), so it produces no moment about the CG.
*   The **gravitational force** acts at the CG, so it produces no moment about the CG.
*   The **resultant force** is the sum of all forces. While the net force causes translational acceleration of the CG, it’s the *moment* of the forces about the CG that causes angular acceleration.
*   The **friction force** acts at the point of contact, which is *not* the CG. This force creates a torque (moment) about the CG, which is responsible for changing the cylinder's angular velocity, i.e., causing angular acceleration. This aligns with $\sum \mathbf{M}_{CG} = I_{CG} \boldsymbol{\alpha}$.

**Question 2 (Exam-Oriented - Problem Solving):**
A uniform sphere of radius $r = 0.2$ m and mass $m = 5$ kg is released from rest and rolls without slipping down an incline of angle $\theta = 30^\circ$. Determine the acceleration of the center of the sphere.

**Given:**
*   $r = 0.2$ m
*   $m = 5$ kg
*   $\theta = 30^\circ$
*   Sphere rolls without slipping.
*   Moment of inertia of a solid sphere about its CG is $I_{CG} = \frac{2}{5}mr^2$.

**To Find:** $a_{CG}$

**Solution:**

We need to apply Newton's second law for translation and rotation, along with the rolling condition.

1.  **Free-Body Diagram:**
    *   Weight ($mg$) acting downwards at the CG.
    *   Normal force ($N$) acting perpendicular to the incline, upwards.
    *   Friction force ($f_s$) acting up the incline at the point of contact (static friction since it's pure rolling).

2.  **Equations of Motion:**
    *   **Translation (along the incline):**
        Sum of forces parallel to the incline = $m a_{CG}$
        $mg \sin\theta - f_s = m a_{CG}$  (Equation 1)

    *   **Rotation (about the CG):**
        Sum of moments about CG = $I_{CG} \alpha$
        The only force creating a moment about the CG is $f_s$. The lever arm is $r$.
        $f_s r = I_{CG} \alpha$
        Substitute $I_{CG} = \frac{2}{5}mr^2$:
        $f_s r = (\frac{2}{5}mr^2) \alpha$
        $f_s = \frac{2}{5}mr \alpha$ (Equation 2)

    *   **Kinematic Constraint (Rolling without slipping):**
        $a_{CG} = \alpha r \implies \alpha = \frac{a_{CG}}{r}$ (Equation 3)

3.  **Solve the System of Equations:**
    Substitute Equation 3 into Equation 2:
    $f_s = \frac{2}{5}mr (\frac{a_{CG}}{r})$
    $f_s = \frac{2}{5}m a_{CG}$ (Equation 4)

    Now substitute Equation 4 into Equation 1:
    $mg \sin\theta - \frac{2}{5}m a_{CG} = m a_{CG}$

    We can cancel $m$ from all terms:
    $g \sin\theta - \frac{2}{5} a_{CG} = a_{CG}$

    Rearrange to solve for $a_{CG}$:
    $g \sin\theta = a_{CG} + \frac{2}{5} a_{CG}$
    $g \sin\theta = (1 + \frac{2}{5}) a_{CG}$
    $g \sin\theta = \frac{7}{5} a_{CG}$

    $a_{CG} = \frac{5}{7} g \sin\theta$

4.  **Calculate the value:**
    Given $g \approx 9.81 \, m/s^2$ and $\theta = 30^\circ$ ($\sin 30^\circ = 0.5$):
    $a_{CG} = \frac{5}{7} (9.81 \, m/s^2) (0.5)$
    $a_{CG} = \frac{5}{7} (4.905 \, m/s^2)$
    $a_{CG} \approx 3.504 \, m/s^2$

**Answer:** The acceleration of the center of the sphere is approximately $3.50 \, m/s^2$.

This problem demonstrates how to combine force analysis and rotational analysis with the specific kinematic condition of rolling without slipping. You must set up all three types of equations and solve them simultaneously.
