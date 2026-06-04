---
title: "Mohr’s circle of stress for 2D problems"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a03"
status: "completed"
scrapedAt: "2026-05-20T17:46:29.968Z"
---
# MECHANICS OF SOLIDS - MODULE 4: STRESSES ON INCLINED PLANES

## Topic: Mohr’s Circle of Stress for 2D Problems

**(Connecting to Course Outcomes: CO1, CO2, CO3, CO5, CO6)**

Welcome everyone to Module 4! We've been building a strong foundation in understanding how materials behave under load, and today we dive into a really powerful graphical tool that helps us visualize and calculate something crucial: **stresses on inclined planes**. Think about a simple bar under tension. We know the stress acting perpendicular to its cross-section. But what if we cut that bar at an angle? The stress acting on that angled surface will have both a normal component and a shear component. Understanding these components is vital for predicting failure, especially in complex loading scenarios. This is where our topic, **Mohr's Circle of Stress for 2D Problems**, comes in. It’s a elegant way to get a complete picture of the stress state at a point.

### 1. The Need for Stress Transformation: Why Angles Matter

**(Connecting to Course Outcomes: CO2, CO5 - Understanding and Applying Stress Behavior)**

Let's start with a scenario. Imagine you're holding a rubber band, and you pull it uniformly from both ends. You can feel the tensile stress stretching the material. This stress is acting perpendicular to any cross-section we might imagine cutting through it, parallel to the direction of the pull. This is what we call **uniaxial stress**.

However, a real-world component isn't always loaded purely in one direction. Even in a seemingly simple case, like a plate under tension in one direction (let's call it the x-direction), there's also a stress in the perpendicular direction (y-direction) due to the Poisson effect – the material tries to contract in the other direction. This is **biaxial stress**.

Now, what happens if we consider a plane that's *not* aligned with our x or y axes? Let's say we cut our rubber band at a 45-degree angle. The force acting across this angled surface will now be distributed differently. Part of it will pull *perpendicular* to this new surface (normal stress, $\sigma_\theta$), and part of it will try to *slide* along the surface (shear stress, $\tau_{\theta}$).

This brings us to the core of stress transformation: we need a way to calculate these normal and shear stresses on any arbitrary inclined plane within a stressed material. The traditional equations for stress transformation are derived using equilibrium principles on an infinitesimal element, and they show how the stresses change as the angle of the plane changes.

*   **Uniaxial Stress:** For a simple case of stress $\sigma_x$ in the x-direction, the normal stress on an inclined plane at angle $\theta$ is $\sigma_\theta = \sigma_x \cos^2 \theta$. The shear stress is $\tau_\theta = \sigma_x \cos \theta \sin \theta$. Notice how these stresses depend on the angle $\theta$.
*   **Biaxial Stress:** When we have stresses $\sigma_x$ and $\sigma_y$ acting along two perpendicular axes, the stress transformation equations become more complex:
    $\sigma_\theta = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$
    $\tau_\theta = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$
    (For our current topic, we are primarily dealing with cases where $\tau_{xy} = 0$, simplifying these to:
    $\sigma_\theta = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta)$
    $\tau_\theta = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta)$)

These equations tell us how stresses vary with the orientation of the plane. However, they can be tedious to use for finding the *maximum* or *minimum* stresses, or the stresses at a specific angle. That's where Mohr's Circle shines!

### 2. Introducing Mohr’s Circle: A Graphical Revolution

**(Connecting to Course Outcomes: CO1, CO2, CO5 - Recalling and Understanding Stress States)**

Imagine you're trying to plot the relationship between two variables, say 'x' and 'y', from a set of equations where they depend on a third parameter, like an angle $\theta$. If you could eliminate $\theta$ from the equations, you'd get a single equation relating 'x' and 'y', which might describe a geometric shape, like a circle.

This is precisely what Otto Mohr, a brilliant German engineer, did for stress analysis. He realized that the transformation equations for normal stress ($\sigma_\theta$) and shear stress ($\tau_\theta$) on an inclined plane could be represented as the equation of a **circle** on a specially constructed stress plane.

Let's define this special plane, often called the **stress plane** or **Mohr’s plane**:
*   The horizontal axis represents the **normal stress ($\sigma$)**.
*   The vertical axis represents the **shear stress ($\tau$)**.

Now, how do we plot points on this plane to represent the stress state at a point in our material?

**Key Concepts and Construction of Mohr's Circle:**

**(Connecting to Course Outcomes: CO1, CO3, CO5 - Recalling Definitions, Applying Principles)**

To construct Mohr's circle, we need to know the stresses acting on two perpendicular planes at the point. In a 2D stress field, we typically have the stresses acting on planes parallel to the x and y axes. Let's assume we have:
*   Normal stress $\sigma_x$ acting perpendicular to the plane normal to the x-axis.
*   Normal stress $\sigma_y$ acting perpendicular to the plane normal to the y-axis.
*   Shear stress $\tau_{xy}$ acting tangentially to the plane normal to the x-axis (and $\tau_{yx} = \tau_{xy}$ acting tangentially to the plane normal to the y-axis).

From our previous equations (and the principles outlined in books like Bansal's "A Text book of Strength of Materials"), we know that the stresses on these reference planes give us the starting points for our circle.

**The Construction Steps (Think of this as drawing a diagram on a blackboard):**

Let's consider a general 2D stress state where $\sigma_x$, $\sigma_y$, and $\tau_{xy}$ are known.

1.  **Define the Coordinate System:** We’ll use a coordinate system where the horizontal axis is $\sigma$ and the vertical axis is $\tau$.
2.  **Plot the Reference Points:** We need two points that define the stress on two perpendicular planes. Let's take the plane with normal along the x-axis. The stresses acting on this plane are $\sigma_x$ (normal) and $\tau_{xy}$ (shear). So, we plot a point $P_1$ with coordinates $(\sigma_x, \tau_{xy})$. *Important Note:* The sign convention for shear stress is crucial here. If the shear stress on the top face of an element points to the right (positive x direction), it's typically taken as positive. If it points downwards, it's negative. This can be tricky, so always be consistent!
    Now, consider the plane with normal along the y-axis. The stresses are $\sigma_y$ (normal) and $\tau_{yx}$. Since $\tau_{yx} = -\tau_{xy}$ (due to moment equilibrium of the element), the point $P_2$ has coordinates $(\sigma_y, -\tau_{xy})$.
3.  **Locate the Center of the Circle:** The center of Mohr's circle, let's call it 'C', will lie on the $\sigma$-axis. Its coordinates are the average of the normal stresses:
    Center $C = \left(\frac{\sigma_x + \sigma_y}{2}, 0\right)$
    This average value is also known as the **hydrostatic component** of stress. It represents the mean normal stress.
4.  **Determine the Radius of the Circle:** The radius of Mohr's circle, $R$, represents the maximum shear stress magnitude. It's calculated as half the difference between the normal stresses, considering the shear stress:
    $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    This radius is a direct measure of how much the shear stress varies.
5.  **Draw the Circle:** With the center C and radius R determined, we can now draw the circle. This circle is Mohr's Circle of Stress.

**What does this circle tell us? Everything!**

**(Connecting to Course Outcomes: CO2, CO3, CO5 - Explaining Behavior, Applying Principles, Identifying Key Stress Components)**

Every point on this circle represents the state of stress ($\sigma$, $\tau$) on some inclined plane passing through the point of interest in the material.

*   **Normal Stresses ($\sigma_\theta$):** The $\sigma$-coordinates of the points on the circle are the normal stresses acting on those inclined planes.
*   **Shear Stresses ($\tau_\theta$):** The $\tau$-coordinates of the points on the circle are the shear stresses acting on those inclined planes.
*   **Principal Stresses:** The points where the circle intersects the $\sigma$-axis (i.e., where $\tau = 0$) represent planes where there is *only* normal stress and *no* shear stress. These are the **principal planes**, and the corresponding normal stresses are the **principal stresses**. They are the maximum and minimum normal stresses at the point.
    *   Maximum Principal Stress ($\sigma_{max}$ or $\sigma_1$): This is the furthest point to the right on the circle. $\sigma_{max} = \text{Center} + R = \frac{\sigma_x + \sigma_y}{2} + R$
    *   Minimum Principal Stress ($\sigma_{min}$ or $\sigma_2$): This is the furthest point to the left on the circle. $\sigma_{min} = \text{Center} - R = \frac{\sigma_x + \sigma_y}{2} - R$
*   **Maximum Shear Stress:** The highest and lowest points on the circle (where the $\tau$-coordinate is maximum or minimum) correspond to the planes of maximum shear stress. The magnitude of this maximum shear stress is simply the radius $R$.
    $|\tau_{max}| = R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
*   **Orientation of Principal Planes:** The angle on Mohr's circle from a reference point (like the point representing the x-plane) to the principal stress points directly relates to the actual angle of the principal planes in the material. A key rule here, often found in texts like Punmia, Jain, and Jain, is that **an angle of $2\theta$ on Mohr's circle corresponds to an angle of $\theta$ in the physical material**. Also, if a plane has normal along x, its corresponding point on the circle is $(\sigma_x, \tau_{xy})$. The principal plane corresponding to $\sigma_{max}$ will be rotated by $2\theta_{px}$ from the x-plane, where $\theta_{px}$ is half the angle between the point $(\sigma_x, \tau_{xy})$ and the point representing $\sigma_{max}$ on the circle.
*   **Stress on Any Inclined Plane:** To find the stress state on a plane inclined at an angle $\theta$ (measured from the x-axis), we locate a point on the circle that is rotated by $2\theta$ from the point $(\sigma_x, \tau_{xy})$. The coordinates of this new point directly give the $\sigma_\theta$ and $\tau_\theta$ for that inclined plane.

### 3. Simplifying Cases: Uniaxial and Pure Shear

**(Connecting to Course Outcomes: CO2, CO3, CO5 - Applying to Specific Scenarios)**

Let's see how Mohr's Circle simplifies for common situations.

**Case 1: Uniaxial Stress ($\sigma_x$ only, $\sigma_y = 0, \tau_{xy} = 0$)**

Imagine pulling a rod. We only have $\sigma_x$.
*   Point 1: $(\sigma_x, 0)$
*   Point 2: $(0, 0)$
*   Center: $\left(\frac{\sigma_x + 0}{2}, 0\right) = \left(\frac{\sigma_x}{2}, 0\right)$
*   Radius: $R = \sqrt{\left(\frac{\sigma_x - 0}{2}\right)^2 + 0^2} = \frac{\sigma_x}{2}$

In this case, Mohr's circle is a circle with its center at $\sigma_x/2$ on the $\sigma$-axis and a radius of $\sigma_x/2$. It touches the $\sigma$-axis at 0 and $\sigma_x$.
*   Principal stresses are $\sigma_1 = \sigma_x$ and $\sigma_2 = 0$.
*   Maximum shear stress magnitude is $R = \sigma_x/2$, occurring on planes at 45 degrees to the axis of the rod. This is a critical result for ductile materials, which often fail in shear.

**Case 2: Pure Shear ($\sigma_x = 0, \sigma_y = 0, \tau_{xy}$)**

This is like twisting a shaft or applying forces such that only shear is present, with no direct tension or compression.
*   Point 1: $(0, \tau_{xy})$
*   Point 2: $(0, -\tau_{xy})$
*   Center: $\left(\frac{0 + 0}{2}, 0\right) = (0, 0)$ (The origin!)
*   Radius: $R = \sqrt{\left(\frac{0 - 0}{2}\right)^2 + \tau_{xy}^2} = |\tau_{xy}|$

Mohr's circle for pure shear is centered at the origin with a radius equal to the magnitude of the shear stress.
*   The circle intersects the $\sigma$-axis at $\tau_{xy}$ and $-\tau_{xy}$. So, the principal stresses are $\sigma_1 = \tau_{xy}$ and $\sigma_2 = -\tau_{xy}$. This means pure shear is equivalent to equal amounts of tension and compression acting at 45 degrees to the shear planes. This is a very important concept that helps us understand ductile fracture under shear. (Think of a piece of soft metal being cut with shears – it often deforms into a V-shape, indicating tension and compression.)

### 4. Practical Applications and Examples

**(Connecting to Course Outcomes: CO3, CO5, CO6 - Applying to Real Problems, Analysis)**

Mohr's Circle is not just a mathematical curiosity; it's a cornerstone of stress analysis in practice.

**Example 1: A Thick Cylinder Under Internal Pressure**

While this might be covered more in later modules, let's briefly touch upon how stress analysis is crucial. Inside a pressurized cylinder, there are stresses acting radially, circumferentially (hoop stress), and longitudinally. If you cut a small element within the cylinder wall, you'll have biaxial or triaxial stresses. Mohr's circle helps engineers determine the critical stress states and predict if the cylinder will burst.

**Example 2: An Inclined Specimen in a Tensile Test**

Imagine a rectangular steel plate being pulled. If a small flaw or a cut is present at an angle, the stress concentration around that flaw depends on the angle. Using Mohr's Circle, we can determine the normal and shear stresses on the plane of the flaw and assess the likelihood of crack propagation.

**Relatable Analogy: The Pizza Slice**

Think of a perfectly round pizza. The **center of the pizza** is like the **center of Mohr's Circle** – it's the reference point. Now, imagine you want to cut a slice. The angle of your cut determines the stresses on the edge of that slice.
*   If you cut straight across the diameter, you're looking at the maximum normal stress (if you could pull the pizza apart).
*   If you cut at a very shallow angle, you'd be looking at a different distribution of forces.
*   The furthest edge of the pizza from the center (along any straight line cut) represents the principal stresses.
*   The "twist" or "shear" you'd feel trying to separate two edges of a slice if the pizza were sticky would be represented by the $\tau$ values.

**Exam Tip:** Many problems will give you $\sigma_x$, $\sigma_y$, and $\tau_{xy}$ and ask for principal stresses, maximum shear stress, or stresses on a plane at a specific angle. You'll need to construct Mohr's Circle. *Always* get the center and radius correct first.

### 5. Key Takeaways and Summary

**(Connecting to Course Outcomes: CO1, CO5 - Reinforcing Knowledge)**

Let's consolidate the most important points about Mohr's Circle for 2D stress problems:

*   **It's a graphical representation of stress transformation.** It allows us to visualize how normal and shear stresses change on different inclined planes at a point.
*   **The axes are $\sigma$ (normal stress) and $\tau$ (shear stress).**
*   **The center of the circle is at $(\frac{\sigma_x + \sigma_y}{2}, 0)$.** This is the average normal stress.
*   **The radius of the circle is $R = \sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2}$.** This radius is equal to the magnitude of the maximum shear stress.
*   **The intersection of the circle with the $\sigma$-axis gives the principal stresses ($\sigma_{max}, \sigma_{min}$).** These are the maximum and minimum normal stresses, occurring on planes with zero shear stress.
*   **The maximum absolute shear stress is the radius $R$.** It acts on planes oriented at 45 degrees to the principal planes.
*   **Angles on Mohr's Circle are doubled relative to actual angles in the material.** An angle of $2\theta$ on the circle represents an orientation of $\theta$ in the physical body.

Remember this: Mohr's Circle provides a unified way to analyze stress. It takes stress transformation equations, which can be cumbersome, and turns them into a simple geometric construction. Mastering this tool is key to understanding how materials will behave under complex loading conditions. It directly helps us achieve CO5, allowing us to perform stress transformations and identify critical stress states.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 6. Connection to Textbooks and References

**(Connecting to Course Outcomes: CO1, CO2 - Recalling and Understanding Core Principles)**

Throughout this topic, we've drawn upon fundamental principles found in your recommended texts:

*   In **Shah and Junnarkar**, you'll find a thorough derivation of the stress transformation equations and the introduction to Mohr's Circle as a solution to these equations.
*   **R.K. Bansal** provides clear graphical examples and step-by-step instructions for constructing Mohr's Circle, emphasizing its practical application in finding principal stresses and maximum shear stress.
*   **Punmia, Jain, and Jain** delve into the geometrical interpretation of Mohr's Circle and its relationship with the stress element, highlighting the convention for angles and shear stress signs.
*   Reference books like **Popov**, **Gere and Timoshenko**, and **Hibbeler** offer robust theoretical backgrounds and a wide array of example problems, showing how Mohr's Circle is applied in more advanced mechanics of materials contexts, such as plane strain and generalized plane stress.

These resources collectively reinforce that Mohr's Circle is a fundamental concept for understanding stress states and is essential for achieving course outcomes like CO2 (explaining stress behavior) and CO5 (stress transformation, identifying principal planes/stresses).

---

### Sample Questions with Answers

**Q1. Explain why Mohr's Circle is a useful tool for stress analysis.**

**Answer:** Mohr's Circle is a graphical method that elegantly represents the state of stress at a point in a material. It provides a visual means to:
1.  **Determine principal stresses:** The maximum and minimum normal stresses and the planes on which they act.
2.  **Determine maximum shear stress:** The magnitude and orientation of the maximum shear stress.
3.  **Find stresses on inclined planes:** Calculate the normal and shear stresses on any plane of interest without complex trigonometric calculations using transformation equations.
4.  **Understand stress transformation:** It shows how stresses change with the orientation of the plane, offering a more intuitive understanding than raw equations.
This tool is crucial for predicting material failure, as failure often occurs due to high shear stresses or extreme normal stresses on specific planes. It directly supports CO2 and CO5.

**Q2. A plane stress element has $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, and $\tau_{xy} = 20$ MPa. Construct Mohr's Circle and determine:**
    **a) The principal stresses.**
    **b) The maximum shear stress.**
    **c) The orientation of the principal planes.**

**Solution:**

Given: $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, $\tau_{xy} = 20$ MPa.

**a) Principal Stresses:**
First, find the center and radius of Mohr's Circle.
Center, $C = \left(\frac{\sigma_x + \sigma_y}{2}, 0\right) = \left(\frac{100 + 50}{2}, 0\right) = (75, 0)$ MPa.
Radius, $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \sqrt{\left(\frac{100 - 50}{2}\right)^2 + 20^2}$
$R = \sqrt{\left(\frac{50}{2}\right)^2 + 400} = \sqrt{25^2 + 400} = \sqrt{625 + 400} = \sqrt{1025} \approx 32.02$ MPa.

The principal stresses are:
$\sigma_1 = C + R = 75 + 32.02 = 107.02$ MPa (Maximum Principal Stress)
$\sigma_2 = C - R = 75 - 32.02 = 42.98$ MPa (Minimum Principal Stress)

**b) Maximum Shear Stress:**
The magnitude of the maximum shear stress is equal to the radius of Mohr's Circle.
$|\tau_{max}| = R \approx 32.02$ MPa.

**c) Orientation of the Principal Planes:**
To find the orientation, we use the formula:
$\tan(2\theta_{px}) = \frac{\tau_{xy}}{(\sigma_x - \sigma_y)/2}$
$\tan(2\theta_{px}) = \frac{20}{(100 - 50)/2} = \frac{20}{25} = 0.8$

$2\theta_{px} = \arctan(0.8) \approx 38.66^\circ$
$\theta_{px} \approx 19.33^\circ$

This means the principal plane corresponding to $\sigma_1$ (the larger principal stress) is rotated by approximately $19.33^\circ$ counter-clockwise from the plane of $\sigma_x$. The other principal plane is at $90^\circ$ to this.

**(This question tests CO5 directly – performing stress transformations and identifying key stress components.)**

**Q3. In a state of pure shear, what is the relationship between the shear stress and the principal stresses?**

**Answer:** In a state of pure shear, we have $\sigma_x = 0$, $\sigma_y = 0$, and a shear stress $\tau_{xy}$ acting.
Mohr's Circle for pure shear is centered at the origin $(0,0)$ with a radius $R = |\tau_{xy}|$.
The circle intersects the $\sigma$-axis at $R$ and $-R$.
Therefore, the principal stresses are $\sigma_1 = R = |\tau_{xy}|$ and $\sigma_2 = -R = -|\tau_{xy}|$.
This shows that pure shear is equivalent to a state of equal tension and compression acting at 45 degrees to the original shear planes. The magnitude of these principal stresses is equal to the magnitude of the shear stress. This concept is vital for understanding ductile failure, and it links to CO2 and CO5.