---
title: "Rotation – kinematics of rotation- equation of motion for a rigid body rotating about a fixed axis –rotation under a constant moment"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Curvilinear translation "
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833f2"
status: "completed"
scrapedAt: "2026-05-20T17:37:36.577Z"
---
# Engineering Mechanics: Module 4 - Curvilinear Translation

## Topic: Rotation – Kinematics of Rotation & Equation of Motion for a Rigid Body Rotating About a Fixed Axis – Rotation Under a Constant Moment

Welcome, everyone! Today, we're diving into a fascinating part of our Engineering Mechanics journey: **Rotation**. Specifically, we'll be focusing on the **kinematics of rotation**, understanding how things move when they spin, and then we'll move on to the **dynamics** of this motion, looking at the forces and moments that cause rotation. We'll even tackle a very practical scenario: **rotation under a constant moment**. This is where our understanding of forces and moments (CO1) and principles of rigid body dynamics (CO5) really comes into play.

Think about everyday objects: a spinning top, the blades of a ceiling fan, a car's steering wheel, or even the Earth itself. They all exhibit rotational motion. Understanding how these objects move and what causes them to speed up or slow down is crucial for designing and analyzing many engineering systems.

### 1. Kinematics of Rotation: Describing the Spin

Just like we needed ways to describe linear motion (position, velocity, acceleration), we need similar tools for rotational motion.

**Angular Displacement ($\theta$)**:
Imagine a point on a spinning wheel. As the wheel rotates, this point traces an arc. Angular displacement is the **change in angular position**. It's measured in **radians (rad)**. If you've ever worked with angles in calculus or physics, you know radians are the natural unit for rotational quantities. One radian is the angle subtended at the center of a circle by an arc equal in length to the radius.

Think of it like this: If you turn a doorknob, the angle it turns is its angular displacement. If you complete one full revolution, you've covered $2\pi$ radians.

**Angular Velocity ($\omega$)**:
This tells us *how fast* something is rotating. Angular velocity is the **rate of change of angular displacement** with respect to time.
$$ \omega = \frac{d\theta}{dt} $$
The units for angular velocity are typically **radians per second (rad/s)**.

*   **Analogy:** If a fan is spinning slowly, its angular velocity is low. If it's spinning fast, its angular velocity is high.

**Angular Acceleration ($\alpha$)**:
This tells us *how quickly the angular velocity is changing*. Angular acceleration is the **rate of change of angular velocity** with respect to time.
$$ \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} $$
The units are **radians per second squared (rad/s²)**.

*   **Example:** When you turn on a ceiling fan, it starts from rest and speeds up. During this speeding-up phase, it has angular acceleration. Once it reaches a constant speed, its angular acceleration is zero.

**Relationship between Linear and Angular Quantities**:
This is super important! For a point on a rotating rigid body at a distance 'r' from the axis of rotation:

*   **Linear Velocity ($v$)**: The speed of that point is related to the angular velocity by:
    $$ v = r\omega $$
    Remember, $\omega$ must be in rad/s for this to work correctly.

*   **Linear Acceleration ($a$)**: The acceleration of that point has two components:
    *   **Tangential acceleration ($a_t$)**: This is the component of acceleration along the direction of motion, caused by a change in speed.
        $$ a_t = r\alpha $$
    *   **Normal or Centripetal acceleration ($a_n$)**: This is the component of acceleration directed towards the center of rotation, responsible for changing the direction of velocity.
        $$ a_n = r\omega^2 $$
    The total linear acceleration is the vector sum of these two: $\mathbf{a} = \mathbf{a}_t + \mathbf{a}_n$.

*   **Connecting to CO5**: These relationships are fundamental to understanding rigid body dynamics. They allow us to bridge the gap between the rotation of the entire body and the linear motion of individual points within it.

### 2. Rotation About a Fixed Axis: The Equation of Motion

Now, let's get to the core of dynamics. What *causes* rotation? It's **moments** (or torques). Just like a net force causes linear acceleration (Newton's Second Law: $F=ma$), a net moment causes angular acceleration. This is essentially Newton's Second Law applied to rotation.

**Moment of Inertia ($I$)**:
In linear motion, mass ($m$) is the property that resists linear acceleration. In rotational motion, the equivalent property is the **moment of inertia ($I$)**. It's a measure of how resistant a rigid body is to changes in its rotational velocity.

Moment of inertia depends on two things:
1.  **Mass of the object**: More mass generally means more moment of inertia.
2.  **Distribution of that mass** relative to the axis of rotation: Mass located *further* from the axis contributes much more to the moment of inertia than mass closer to the axis. This is why $I$ is calculated by integrating $r^2 dm$ over the entire body, where 'r' is the perpendicular distance from the axis.

*   **Analogy**: Imagine trying to spin a thin, long rod versus a compact ball of the same mass. The rod is much harder to spin (has a higher moment of inertia) because its mass is distributed further from the axis of rotation. This is a key concept highlighted in texts like Hibbeler and Bansal.

The units of moment of inertia are **kg·m²** (or slug·ft² in the imperial system).

**The Rotational Equation of Motion**:
For a rigid body rotating about a fixed axis, the fundamental equation of motion is:
$$ \sum M = I\alpha $$
Where:
*   $\sum M$ is the **net moment** acting on the body about the axis of rotation.
*   $I$ is the **moment of inertia** of the body about that same axis.
*   $\alpha$ is the **angular acceleration** of the body.

*   **Understanding this**: This equation is the rotational analogue of $F=ma$. It tells us that to produce angular acceleration ($\alpha$), you need an applied net moment ($\sum M$). The resistance to this acceleration is the moment of inertia ($I$). This equation directly relates to **CO5** by providing the fundamental principle for rigid body dynamics in rotation. It also connects to **CO1** as it explicitly uses the concept of moments.

### 3. Rotation Under a Constant Moment

This is a very common and practical scenario. If the net moment acting on the body is constant, then the angular acceleration ($\alpha$) will also be constant (since $I$ for a rigid body is constant). This simplifies our equations significantly, allowing us to use kinematic equations similar to those for constant linear acceleration.

If $\sum M = C$ (a constant), then:
$$ C = I\alpha \implies \alpha = \frac{C}{I} = \text{constant} $$

With constant angular acceleration, we can use the following kinematic equations:

1.  **Relating final and initial angular velocity**:
    $$ \omega = \omega_0 + \alpha t $$
    Where:
    *   $\omega$ is the final angular velocity.
    *   $\omega_0$ is the initial angular velocity.
    *   $\alpha$ is the constant angular acceleration.
    *   $t$ is the time elapsed.

2.  **Relating angular displacement, initial angular velocity, and time**:
    $$ \theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2 $$
    Where:
    *   $\theta$ is the final angular position.
    *   $\theta_0$ is the initial angular position.

3.  **Relating final angular velocity, initial angular velocity, and angular displacement (without time)**:
    $$ \omega^2 = \omega_0^2 + 2 \alpha (\theta - \theta_0) $$

*   **How these are useful (Exam Orientation)**: These equations are heavily tested! If you're given a problem where a constant torque (like from a motor operating at a steady power, or a weight creating a constant moment via a pulley) is applied to a body, you'll likely use these. The key is identifying the constant moment, calculating the moment of inertia, finding the constant angular acceleration, and then applying the appropriate kinematic equation. You might need to solve for time, final velocity, or displacement.

*   **Example Scenario**: Imagine a flywheel attached to a motor. The motor provides a constant torque of 50 N·m. The flywheel has a moment of inertia of 2 kg·m². Initially, the flywheel is at rest. What is its angular velocity after 5 seconds?

    *   **Step 1: Identify knowns.**
        *   Net Moment ($\sum M$) = 50 N·m
        *   Moment of Inertia ($I$) = 2 kg·m²
        *   Initial angular velocity ($\omega_0$) = 0 rad/s (at rest)
        *   Time ($t$) = 5 s

    *   **Step 2: Calculate angular acceleration ($\alpha$).**
        $$ \alpha = \frac{\sum M}{I} = \frac{50 \text{ N·m}}{2 \text{ kg·m²}} = 25 \text{ rad/s²} $$
        Since the moment is constant, $\alpha$ is constant.

    *   **Step 3: Use the appropriate kinematic equation.** We want to find the final angular velocity ($\omega$) after time ($t$). The equation is $\omega = \omega_0 + \alpha t$.
        $$ \omega = 0 \text{ rad/s} + (25 \text{ rad/s²})(5 \text{ s}) $$
        $$ \omega = 125 \text{ rad/s} $$

    So, after 5 seconds, the flywheel will be spinning at 125 rad/s. This directly uses **CO4** (identifying appropriate principles) and **CO5** (applying principles of rigid body dynamics).

### 4. Calculating Moment of Inertia ($I$)

Before we can apply $ \sum M = I\alpha $, we need to know how to find $I$. For simple shapes with uniform density, formulas are often provided. For composite bodies, we can sum the moments of inertia of individual parts. For irregular shapes or when derivations are needed, integration is the way to go, as suggested by Timoshenko and Young.

Here are a few common moments of inertia about their geometric axes:

*   **Thin Rod**:
    *   About its center: $I = \frac{1}{12}mL^2$
    *   About its end: $I = \frac{1}{3}mL^2$

*   **Thin Circular Disk/Cylinder**:
    *   About its central axis: $I = \frac{1}{2}mR^2$

*   **Thin Hoop/Ring**:
    *   About its central axis: $I = mR^2$

**Parallel Axis Theorem**:
What if the rotation is not about the object's geometric center? For example, a rod rotating about an axis parallel to its length but offset. The Parallel Axis Theorem comes to the rescue!
$$ I = I_{CM} + md^2 $$
Where:
*   $I$ is the moment of inertia about the new axis.
*   $I_{CM}$ is the moment of inertia about an axis parallel to the new one, passing through the center of mass.
*   $m$ is the total mass of the body.
*   $d$ is the perpendicular distance between the two parallel axes.

*   **Relevance**: This theorem is invaluable in problems involving shafts, rotating arms, or any situation where an object is pivoted at a point other than its center. It's a powerful tool for applying **CO4**.

### Summary and Key Takeaways

*   **Kinematics of Rotation**: We describe rotation using angular displacement ($\theta$), angular velocity ($\omega$), and angular acceleration ($\alpha$). These are analogous to linear displacement, velocity, and acceleration.
*   **Relationships**: Remember $v=r\omega$ and $a_t=r\alpha$, $a_n=r\omega^2$.
*   **Equation of Motion**: The fundamental principle is $\sum M = I\alpha$. This is Newton's second law for rotation, connecting applied moments to angular acceleration, with moment of inertia ($I$) as the rotational inertia.
*   **Constant Moment**: If $\sum M$ is constant, then $\alpha$ is constant. This allows us to use simplified kinematic equations: $\omega = \omega_0 + \alpha t$, $\theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2$, and $\omega^2 = \omega_0^2 + 2 \alpha (\theta - \theta_0)$.
*   **Moment of Inertia ($I$)**: This property resists rotational acceleration. It depends on mass and its distribution relative to the axis of rotation.
*   **Parallel Axis Theorem**: Crucial for calculating $I$ about an axis not passing through the center of mass: $I = I_{CM} + md^2$.

Mastering these concepts is key to solving a wide range of dynamics problems, from the simple rotation of a wheel to the complex movements of machinery. Keep these principles in mind as we move forward!

---

### Sample Questions with Answers

**Conceptual Question 1:**
A solid sphere and a hollow thin spherical shell of the same mass and radius are released from rest and roll down an inclined plane without slipping. Which object will reach the bottom first and why?

**Answer:**
The solid sphere will reach the bottom first.

**Reasoning:**
Both objects experience the same gravitational force component along the incline, but the net acceleration down the incline depends on how the mass is distributed and how much rotational inertia the object has. The equation of motion for an object rolling down an incline without slipping involves both linear acceleration ($a$) and angular acceleration ($\alpha$). The net force causing linear motion is $mg\sin\theta - F_f$ (where $F_f$ is friction), and the net moment causing rotation is $F_f \cdot R$.

The linear acceleration is given by $a = \frac{g\sin\theta}{1 + I_{CM}/mR^2}$ and the angular acceleration is $\alpha = \frac{g\sin\theta}{R(1 + mR^2/I_{CM})}$.
For a solid sphere, $I_{CM} = \frac{2}{5}mR^2$.
For a hollow spherical shell, $I_{CM} = \frac{2}{3}mR^2$.

Since the denominator $1 + I_{CM}/mR^2$ is smaller for the solid sphere ($1 + 2/5 = 1.4$) compared to the hollow shell ($1 + 2/3 = 1.67$), the linear acceleration ($a$) of the solid sphere is greater. A larger linear acceleration means it covers the distance faster, hence reaching the bottom first. This question tests understanding of **CO5** (rigid body dynamics) and **CO4** (identifying principles).

---

**Exam-Oriented Question 2:**
A flywheel weighing 100 kg has a radius of gyration of 0.4 m. It is initially at rest. A constant torque of 150 N·m is applied to the flywheel. Calculate:
a) The angular acceleration of the flywheel.
b) The angular velocity after 10 seconds.
c) The angular displacement after 10 seconds.

**Given:**
*   Mass ($m$) = 100 kg (Note: Mass is provided, but radius of gyration is more direct for I)
*   Radius of gyration ($k$) = 0.4 m
*   Initial angular velocity ($\omega_0$) = 0 rad/s
*   Applied torque ($\sum M$) = 150 N·m
*   Time ($t$) = 10 s

**Solution:**

First, we need to calculate the moment of inertia ($I$) of the flywheel. The radius of gyration ($k$) is defined such that $I = mk^2$.

*   **a) Angular Acceleration ($\alpha$)**:
    We use the equation of motion for rotation: $\sum M = I\alpha$.
    First, calculate $I$:
    $I = mk^2 = (100 \text{ kg})(0.4 \text{ m})^2 = 100 \text{ kg} \times 0.16 \text{ m}^2 = 16 \text{ kg·m²}$

    Now, find $\alpha$:
    $\alpha = \frac{\sum M}{I} = \frac{150 \text{ N·m}}{16 \text{ kg·m²}} = 9.375 \text{ rad/s²}$

    *Answer to (a): The angular acceleration is 9.375 rad/s².*

*   **b) Angular Velocity after 10 seconds ($\omega$)**:
    Since the torque is constant, the angular acceleration is constant. We can use the kinematic equation: $\omega = \omega_0 + \alpha t$.
    $\omega = 0 \text{ rad/s} + (9.375 \text{ rad/s²})(10 \text{ s})$
    $\omega = 93.75 \text{ rad/s}$

    *Answer to (b): The angular velocity after 10 seconds is 93.75 rad/s.*

*   **c) Angular Displacement after 10 seconds ($\theta$)**:
    We can use the kinematic equation: $\theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2$. Assuming initial angular displacement $\theta_0 = 0$.
    $\theta = 0 + (0 \text{ rad/s})(10 \text{ s}) + \frac{1}{2} (9.375 \text{ rad/s²})(10 \text{ s})^2$
    $\theta = 0 + 0 + \frac{1}{2} (9.375 \text{ rad/s²})(100 \text{ s²})$
    $\theta = 0.5 \times 937.5 \text{ rad} = 468.75 \text{ rad}$

    *Answer to (c): The angular displacement after 10 seconds is 468.75 radians.*

This question is a direct application of the principles discussed and tests **CO1**, **CO4**, and **CO5**.

---

**Conceptual Question 3:**
In the equation $\sum M = I\alpha$, what would happen to the angular acceleration if the moment of inertia ($I$) were doubled while the applied moment ($\sum M$) remained constant?

**Answer:**
The angular acceleration ($\alpha$) would be halved.

**Reasoning:**
The equation $\sum M = I\alpha$ shows a direct inverse proportionality between angular acceleration ($\alpha$) and moment of inertia ($I$) when the applied moment ($\sum M$) is constant. If $I$ doubles, $\alpha$ must halve to maintain the equality. This highlights the role of moment of inertia as resistance to rotational acceleration, similar to how mass resists linear acceleration in $F=ma$. This probes understanding of the core equation and its implications, related to **CO5**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
