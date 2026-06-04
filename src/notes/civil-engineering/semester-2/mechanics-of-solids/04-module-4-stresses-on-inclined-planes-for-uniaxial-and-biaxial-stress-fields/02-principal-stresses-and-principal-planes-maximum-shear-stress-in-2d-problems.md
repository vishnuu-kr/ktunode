---
title: "Principal stresses and principal planes, maximum shear stress in 2D problems"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f77"
status: "completed"
scrapedAt: "2026-05-20T18:37:29.737Z"
---
# Mechanics of Solids: Module 4 - Stresses on Inclined Planes

## Topic: Principal Stresses and Principal Planes, Maximum Shear Stress in 2D Problems

**(Relating to CO1: Recall fundamental terms and theorems, CO2: Explain behavior under loading, CO5: Perform stress transformations, identify principal planes/stresses and maximum shear stress)**

Welcome everyone! Today, we're diving into a crucial aspect of understanding how materials behave under stress: what happens on *inclined planes*. We've already learned about normal and shear stresses acting on planes parallel and perpendicular to the applied loads in uniaxial and biaxial stress fields. But in reality, stresses are rarely confined to such simple orientations. Think about a brick wall after an earthquake, or a metal shaft subjected to combined bending and torsion. The stresses aren't just acting neatly along the principal axes. They're spread out, tilted. That's where this topic becomes absolutely essential.

Our goal today is to equip you to answer some really important questions:

*   What are the orientations where normal stresses are at their maximum or minimum?
*   What are these maximum and minimum normal stresses called?
*   What are the planes associated with these stresses called?
*   And perhaps most importantly for material failure, where and how large is the maximum shear stress?

By the end of this session, you'll be able to perform stress transformations and identify these critical stress states, directly addressing **CO5**. This builds on your foundational knowledge of stress and strain (**CO1**) and helps you understand how structural elements respond to complex loading patterns (**CO2**).

### Visualizing Stress: Beyond the Simple Case

Imagine you're holding a rubber band, and you pull it horizontally. You feel a tensile stress, right? Let's say you're pulling with force $P$. If the cross-sectional area is $A$, the normal stress is $\sigma = P/A$. This is acting on a plane perpendicular to the pulling direction. Now, what if you were to slice that rubber band at an angle to the direction you're pulling? Would the stress just disappear? Of course not! The material is still under tension, and the force is still distributed across the cross-section, just a different cross-section. The stress acting on this inclined plane will be different.

This is the essence of stress transformation. We're not changing the forces acting on the object, but we're changing our *perspective* – the orientation of the plane we're examining.

### The Foundation: Biaxial Stress State

We'll focus primarily on a **two-dimensional (2D) biaxial stress field**. This is a common scenario, for instance, in thin-walled pressure vessels or stresses in a thin plate subjected to in-plane forces. In a 2D biaxial stress state, we typically consider stresses acting on two perpendicular planes. Let's assume we have a plane oriented with respect to some reference axes (say, x and y).

On a plane perpendicular to the x-axis, we have a normal stress $\sigma_x$ and a shear stress $\tau_{xy}$.
On a plane perpendicular to the y-axis, we have a normal stress $\sigma_y$ and a shear stress $\tau_{yx}$.

Remember that $\tau_{xy} = \tau_{yx}$ due to the equilibrium of moments (which we discussed in earlier modules – **CO1**). So, at any point in a stressed body, we can define the state of stress by $\sigma_x$, $\sigma_y$, and $\tau_{xy}$.

### Finding the "Special" Planes: Principal Planes and Principal Stresses

Now, let's think about those special planes we mentioned. Is there an orientation of a plane at a point where the *shear stress* is zero? If we can find such planes, what kind of stresses will be acting on them? Well, if shear stress is zero, only normal stresses will be present. And it turns out there are always two mutually perpendicular planes at any point where the shear stress is zero.

These planes are called **Principal Planes**.

And the normal stresses acting on these principal planes are called **Principal Stresses**.

This is a fundamental concept, and it's directly related to **CO5**. Identifying these planes tells us where the material experiences purely normal stress, either tension or compression, without any shearing action. This is critical for predicting yielding or fracture. For example, in many ductile materials, failure often initiates due to shear stress, but in brittle materials, it can be driven by maximum tensile stress.

Let's denote the principal stresses as $\sigma_1$ and $\sigma_2$. By convention:
*   $\sigma_1$ is the **maximum principal stress** (usually the largest tensile stress).
*   $\sigma_2$ is the **minimum principal stress** (usually the smallest tensile stress or the largest compressive stress).

If we have a 2D stress state, there will be two principal stresses, $\sigma_1$ and $\sigma_2$, acting on the principal planes.

### How do we find these Principal Stresses and Planes? The Transformation Equations!

This is where the mathematics comes in, and it's all about transforming the stresses from one orientation to another. Recall our basic stress components $\sigma_x, \sigma_y, \tau_{xy}$ acting on planes oriented at an angle $\theta$ with respect to the x-axis. The stress transformation equations (which are derived from equilibrium considerations, **CO1**) for a 2D plane stress situation are:

$\sigma_{\theta} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$

$\tau_{\theta} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$

Here, $\sigma_{\theta}$ is the normal stress and $\tau_{\theta}$ is the shear stress on a plane inclined at an angle $\theta$ to the x-axis.

To find the principal planes, we need to find the angles $\theta$ where the shear stress $\tau_{\theta}$ is zero. Setting the shear stress equation to zero:

$-\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta) = 0$

Rearranging this, we get:

$\tan(2\theta) = \frac{\tau_{xy}}{\frac{\sigma_x - \sigma_y}{2}} = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$

This equation gives us the angles $2\theta$. Let's call the two solutions $2\theta_p$. Then the angles of the principal planes are $\theta_p = \frac{1}{2} \arctan\left(\frac{2\tau_{xy}}{\sigma_x - \sigma_y}\right)$.
These two angles will differ by 90 degrees, confirming that the principal planes are indeed perpendicular to each other.

**Remember this:** The angle found from $\tan(2\theta)$ gives you $2\theta$. Always divide by 2 to get the actual angle of the principal plane. Also, be mindful of the signs of $\sigma_x$, $\sigma_y$, and $\tau_{xy}$, as they dictate the quadrant of $2\theta$ and thus the correct $\theta$. Textbooks like R.K. Bansal (**Textbook**) and Punmia, Jain & Jain (**Textbook**) provide detailed derivations and examples for this.

### Calculating the Principal Stresses

Once we have the angles of the principal planes, we can substitute them back into the stress transformation equation for $\sigma_{\theta}$. However, there's a more direct way to find the values of the principal stresses without explicitly calculating the angles first.

The principal stresses $\sigma_1$ and $\sigma_2$ are the roots of the characteristic equation derived from setting $\tau_{\theta}=0$. This leads to a very useful formula:

$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

This formula is your key to finding the maximum and minimum normal stresses directly.

*   $\sigma_1 = \frac{\sigma_x + \sigma_y}{2} + \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$ (Maximum Principal Stress)
*   $\sigma_2 = \frac{\sigma_x + \sigma_y}{2} - \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$ (Minimum Principal Stress)

**Key takeaway:** This formula gives you the magnitudes of the maximum and minimum normal stresses acting on any plane at that point. It's a crucial result for **CO5**.

**Let's put this into perspective:** Imagine a metal plate under tension in both the x and y directions, but also with a twisting force (shear). If you were designing a critical component, you'd want to know the absolute maximum tensile stress it experiences, regardless of orientation. This formula tells you exactly that. It's like finding the highest point on a hilly landscape – no matter which path you take, you can find the peak.

### Mohr's Circle for Stress: A Visual Aid

Before we move to shear stress, I want to introduce a powerful graphical tool: **Mohr's Circle for Stress**. This is extensively covered in all our recommended textbooks, including Popov (**Reference Book**) and Hibbeler (**Reference Book**). Mohr's circle elegantly represents the stress transformation equations.

On a Mohr's circle, the horizontal axis represents normal stress ($\sigma$), and the vertical axis represents shear stress ($\tau$). For a given state of stress $(\sigma_x, \sigma_y, \tau_{xy})$, a circle can be constructed.

*   The center of the circle is at $\left(\frac{\sigma_x + \sigma_y}{2}, 0\right)$.
*   The radius of the circle is $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$.

The points where the circle intersects the $\sigma$-axis (where $\tau = 0$) represent the principal stresses, $\sigma_1$ and $\sigma_2$. The coordinates of these points are $(\sigma_1, 0)$ and $(\sigma_2, 0)$. This provides a visual confirmation of the principal stress formula.

Moreover, any point on the circle corresponds to the stresses ($\sigma_{\theta}, \tau_{\theta}$) on a plane inclined at a certain angle. This makes Mohr's circle incredibly versatile for visualizing and calculating stresses on various inclined planes. It directly aids in **CO5** by offering a graphical method for stress transformation.

### Maximum Shear Stress

Now, what about the maximum shear stress? We know that shear stress varies with the orientation of the plane. On Mohr's circle, the shear stress is represented by the vertical coordinate. The shear stress will be maximum (in magnitude) at the points on the circle that are furthest from the $\sigma$-axis. These points are at the top and bottom of the circle.

The maximum shear stress, denoted as $\tau_{max}$, is equal to the radius of Mohr's circle:

$\tau_{max} = R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

Notice that this value is exactly the term we add or subtract to find the principal stresses!

So, the magnitude of the maximum shear stress is:

$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \frac{1}{2} \left[ \left(\frac{\sigma_x + \sigma_y}{2} + \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}\right) - \left(\frac{\sigma_x + \sigma_y}{2} - \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}\right) \right]$

This simplifies beautifully to:

$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2}$

This is a very important result! It tells us that the maximum shear stress is half the difference between the maximum and minimum principal stresses.

**Where does this maximum shear stress occur?**

On Mohr's circle, the planes of maximum shear stress are oriented at 45 degrees to the principal planes. This means if $\theta_p$ is the angle of a principal plane, the planes of maximum shear stress are at $\theta_p \pm 45^\circ$.

**Think about this example:** Imagine you're trying to bend a wooden ruler. The top surface is in compression, and the bottom surface is in tension. But there's also a shear stress acting within the ruler. The maximum tensile stress is at the bottom, maximum compressive at the top. But the maximum *shear* stress is somewhere in the middle, acting on planes inclined at 45 degrees to the bending axis. Understanding this helps us predict where the ruler is most likely to break, especially if it's made of a material sensitive to shear forces. This directly links to **CO5** and **CO6** (analysis for safe load).

**Important Note for Exams:** Be very careful with the sign conventions and whether you are dealing with a plane stress or plane strain problem. The formulas derived here are specifically for **plane stress**.

### Connecting to Uniaxial Stress Fields

What happens if we have a purely uniaxial stress field, say $\sigma_x$ is the only non-zero stress component, and $\sigma_y = 0, \tau_{xy} = 0$?

Let's plug these into our formulas:

$\tan(2\theta) = \frac{2 \times 0}{\sigma_x - 0} = 0$
This gives $2\theta = 0^\circ$ or $180^\circ$, so $\theta = 0^\circ$ or $90^\circ$. These are our original x and y planes, where shear stress is indeed zero.

The principal stresses:
$\sigma_1 = \frac{\sigma_x + 0}{2} + \sqrt{\left(\frac{\sigma_x - 0}{2}\right)^2 + 0^2} = \frac{\sigma_x}{2} + \frac{\sigma_x}{2} = \sigma_x$
$\sigma_2 = \frac{\sigma_x + 0}{2} - \sqrt{\left(\frac{\sigma_x - 0}{2}\right)^2 + 0^2} = \frac{\sigma_x}{2} - \frac{\sigma_x}{2} = 0$

So, in uniaxial tension, the principal stresses are the applied stress itself ($\sigma_1 = \sigma_x$) and zero ($\sigma_2 = 0$). The principal planes are the plane perpendicular to the load and the plane parallel to the load.

Now, the maximum shear stress in uniaxial tension:
$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \frac{\sigma_x - 0}{2} = \frac{\sigma_x}{2}$

This means that in a simple uniaxial tensile test, the maximum shear stress occurs on planes inclined at 45 degrees to the applied load and its magnitude is half the applied normal stress. This is why some materials, like metals under tensile load, might exhibit failure along diagonal planes (shear failure) rather than breaking directly across. This is a crucial insight for **CO5** and **CO6**.

### Summary and Key Takeaways

Let's recap the core concepts we've covered today. This is stuff you absolutely must remember for exams and your future engineering careers:

1.  **Principal Planes:** These are the planes at a point where the shear stress is zero.
2.  **Principal Stresses ($\sigma_1, \sigma_2$):** These are the normal stresses acting on the principal planes. $\sigma_1$ is the maximum principal stress, and $\sigma_2$ is the minimum principal stress.
3.  **Maximum Shear Stress ($\tau_{max}$):** This is the largest shear stress that occurs at a point, and it acts on planes inclined at 45 degrees to the principal planes.
4.  **Formulas:**
    *   Angle of principal planes: $\tan(2\theta) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$
    *   Principal Stresses: $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    *   Maximum Shear Stress: $\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
5.  **Mohr's Circle:** A powerful graphical tool that visualizes stress transformations and helps determine principal stresses and maximum shear stress.

Understanding these concepts allows us to move beyond simply looking at stresses on defined axes and to truly characterize the stress state at any point within a material, which is vital for **CO5** and **CO6**.

***

## Sample Questions with Answers

**Q1. What are principal planes and principal stresses? Explain their significance in material behavior.**

**Answer:**
*   **Principal Planes:** These are planes passing through a point in a stressed body on which the shear stress is zero.
*   **Principal Stresses:** The normal stresses acting on the principal planes are called principal stresses. They represent the maximum and minimum normal stresses experienced at that point.

**Significance:** Principal stresses are crucial because they represent the extreme values of normal stress. Many failure criteria, especially for brittle materials, are based on these maximum and minimum normal stresses. Identifying these stresses helps engineers understand the critical tensile or compressive loads a material can withstand before yielding or fracturing. For ductile materials, while shear stress is important, knowing the maximum tensile principal stress is also vital for predicting yielding based on criteria like the Von Mises or Tresca yield criteria. This directly relates to **CO5** and **CO6**.

**Q2. A plane stress element is subjected to the following stress state: $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, $\tau_{xy} = 20$ MPa. Determine the principal stresses and the maximum shear stress.**

**Answer:**
Given:
$\sigma_x = 100$ MPa
$\sigma_y = 50$ MPa
$\tau_{xy} = 20$ MPa

Using the formula for principal stresses:
$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

First, calculate the terms:
$\frac{\sigma_x + \sigma_y}{2} = \frac{100 + 50}{2} = \frac{150}{2} = 75$ MPa
$\frac{\sigma_x - \sigma_y}{2} = \frac{100 - 50}{2} = \frac{50}{2} = 25$ MPa

Now substitute into the principal stress formula:
$\sigma_{1,2} = 75 \pm \sqrt{(25)^2 + (20)^2}$
$\sigma_{1,2} = 75 \pm \sqrt{625 + 400}$
$\sigma_{1,2} = 75 \pm \sqrt{1025}$
$\sigma_{1,2} = 75 \pm 32.02$ MPa (approximately)

So, the principal stresses are:
$\sigma_1 = 75 + 32.02 = 107.02$ MPa (Maximum Principal Stress)
$\sigma_2 = 75 - 32.02 = 42.98$ MPa (Minimum Principal Stress)

Now, for the maximum shear stress:
$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2}$
$\tau_{max} = \frac{107.02 - 42.98}{2} = \frac{64.04}{2} = 32.02$ MPa

Alternatively, using the direct formula for $\tau_{max}$:
$\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
$\tau_{max} = \sqrt{(25)^2 + (20)^2} = \sqrt{625 + 400} = \sqrt{1025} = 32.02$ MPa

This calculation directly applies the formulas derived and demonstrates **CO5**.

**Q3. In a uniaxial tensile test, a rod is subjected to a tensile stress $\sigma$. What is the maximum shear stress experienced by the rod, and on which planes does it act?**

**Answer:**
For uniaxial tensile stress $\sigma$ along the x-axis, we have:
$\sigma_x = \sigma$
$\sigma_y = 0$
$\tau_{xy} = 0$

The principal stresses are:
$\sigma_1 = \sigma$
$\sigma_2 = 0$

The maximum shear stress is given by:
$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \frac{\sigma - 0}{2} = \frac{\sigma}{2}$

The planes of maximum shear stress are oriented at $45^\circ$ to the principal planes. Since the principal planes in uniaxial tension are the plane perpendicular to the applied stress (x-axis) and the plane parallel to the applied stress (y-axis), the planes of maximum shear stress are inclined at $45^\circ$ to the axis of applied tensile stress. This result is fundamental for understanding potential shear failure modes in simple tension and relates to **CO5**.
