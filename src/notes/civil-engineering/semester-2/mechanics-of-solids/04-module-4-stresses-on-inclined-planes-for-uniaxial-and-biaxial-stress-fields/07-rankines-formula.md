---
title: "Rankine’s formula"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f7c"
status: "completed"
scrapedAt: "2026-05-20T18:37:33.247Z"
---
# Mechanics of Solids: Module 4 - Stresses on Inclined Planes

## Topic: Rankine’s Formula

Welcome, everyone! Today, we're diving into a crucial concept in our Mechanics of Solids journey: understanding how stresses behave on planes that are *not* aligned with the usual axes of our material. Specifically, we're going to focus on **Rankine's Formula**. This topic is a cornerstone for understanding how materials fail under complex loading, and it directly ties into several of our Course Outcomes, particularly CO5: performing stress transformations and identifying principal stresses.

Think about it: when a beam bends, or a shaft twists, or even when we're dealing with a simple tensile rod, the internal forces aren't just acting squarely on the cross-sections we typically imagine. They're distributed, and on any *arbitrary* plane within the material, there will be both normal (tensile or compressive) and shear stresses acting. Rankine's formula helps us quantify these stresses.

### Revisiting the Basics: Uniaxial and Biaxial Stress Fields

Before we jump into Rankine's formula itself, let's quickly refresh our understanding of the stress fields we're considering.

*   **Uniaxial Stress Field:** This is the simplest case. Imagine a bar pulled uniformly from both ends. The stress ($\sigma$) is acting in only one direction, say along the x-axis. If we consider a plane perpendicular to this direction, we only have normal stress. But what if we tilt that plane? That's where things get interesting. This relates to CO3 (calculating stresses) and CO5.

*   **Biaxial Stress Field:** Now, imagine a thin-walled pressure vessel, like a soda can. The material is under stress in two perpendicular directions (circumferential and longitudinal). Or perhaps a flat plate subjected to tensile forces in both the x and y directions. Here, we have normal stresses acting along two axes. Again, if we look at an inclined plane, the stresses will be a combination of normal and shear. This builds on CO3 and is a direct precursor to CO5.

### The Problem: Stresses on an Inclined Plane

Let's picture a small, cubic element of material. We know the stresses acting on its faces, perhaps $\sigma_x$ and $\sigma_y$ (normal stresses) and $\tau_{xy}$ (shear stress). Now, imagine we want to know what stresses are acting on a plane that cuts through this element at an angle, let's call it $\theta$, with respect to the x-axis. This is the core problem that Rankine's formula addresses. It's about **stress transformation**.

Why is this important? Well, consider a bridge component or a structural member in a building. It might be subjected to axial loads, bending, and torsion all at once. The material at a specific point might experience complex stress states. To predict failure, engineers need to know the *maximum* stresses that can occur on *any* plane. This is where identifying principal stresses and maximum shear stresses comes in, a key aspect of CO5.

### Introducing Rankine's Formula (and its context)

Historically, various approaches have been developed to solve this problem. One of the earliest and most intuitive, especially for understanding the fundamental relationships, is attributed to James Clerk Maxwell, and later refined and presented in a form often associated with Rankine's work on the mechanical properties of materials.

Rankine's formula, in its common usage for stress analysis on inclined planes, provides expressions for the **normal stress** and **shear stress** acting on a plane inclined at an angle $\theta$ to the plane of $\sigma_x$. It’s derived using equilibrium principles on the inclined element, essentially resolving forces. This derivation itself is a good exercise in applying equilibrium, linking to CO3.

Let's consider a biaxial stress field where we have normal stresses $\sigma_x$ and $\sigma_y$, and a shear stress $\tau_{xy}$ acting on the faces of a rectangular element. We are interested in the stresses on a plane inclined at an angle $\theta$ to the x-axis.

We can derive the following expressions for the normal stress ($\sigma_n$) and shear stress ($\tau_{nt}$) on this inclined plane:

**Normal Stress ($\sigma_n$):**

$$ \sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta) $$

**Shear Stress ($\tau_{nt}$):**

$$ \tau_{nt} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta) $$

*(Here, 'n' denotes the direction normal to the inclined plane, and 't' denotes the direction tangential to it.)*

**What does this tell us?**

*   The first term, $\frac{\sigma_x + \sigma_y}{2}$, is the **average normal stress**. It's like the mean stress level acting on the element.
*   The second term, $\frac{\sigma_x - \sigma_y}{2} \cos(2\theta)$, shows how the difference between $\sigma_x$ and $\sigma_y$ contributes to the normal stress on the inclined plane, and how this contribution changes with the angle.
*   The third term, $\tau_{xy} \sin(2\theta)$, indicates that the shear stress present on the original faces also influences the normal stress on the inclined plane.

Similarly, for the shear stress:

*   The first term, $-\frac{\sigma_x - \sigma_y}{2} \sin(2\theta)$, shows how the difference in normal stresses contributes to shear on the inclined plane. Notice the sine term – this means shear stress due to normal stress difference is zero when the plane is aligned with the principal stress directions.
*   The second term, $\tau_{xy} \cos(2\theta)$, shows how the original shear stress contributes to the shear on the inclined plane.

**Crucial Reminder:** These formulas are derived assuming a 2D stress state. For a 3D state, they are a starting point, but we need more advanced tensor analysis. However, for many practical problems in mechanics of solids, especially when dealing with plane stress or plane strain, these 2D formulas are invaluable.

### Connecting to Principal Stresses (CO5)

Rankine's formulas are powerful because we can use them to find the **principal stresses**. Remember, principal stresses are the maximum and minimum normal stresses at a point, and they occur on planes where the shear stress is zero.

To find the principal stresses, we set $\tau_{nt} = 0$ and solve for $\theta$. This gives us the orientations of the principal planes. Substituting these angles back into the $\sigma_n$ formula will yield the principal stresses, $\sigma_1$ and $\sigma_2$.

Let's quickly recall how to find the principal stresses directly. For a biaxial stress state ($\sigma_x$, $\sigma_y$, $\tau_{xy}$), the principal stresses are given by:

$$ \sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} $$

And the angles at which they occur ($\theta_p$) are given by:

$$ \tan(2\theta_p) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y} $$

Rankine's formula essentially provides the building blocks to arrive at these principal stress equations. It shows *how* the stresses on the original planes transform to stresses on any other plane. This is fundamental to CO5.

### Example: The Simple Tensile Rod Under Stress Transformation

Imagine a steel rod under pure tension, $\sigma_x = P/A$. This is a uniaxial stress field. If we look at a plane perpendicular to the rod's axis (the x-axis), the normal stress is $\sigma_x$, and shear stress is 0.

Now, what if we consider a plane tilted at 45 degrees? This is a classic scenario. Let's use Rankine's formula with $\sigma_y = 0$ and $\tau_{xy} = 0$.

Let $\theta = 45^\circ$.

*   **Normal Stress ($\sigma_n$):**
    $$ \sigma_n = \frac{\sigma_x + 0}{2} + \frac{\sigma_x - 0}{2} \cos(2 \times 45^\circ) + 0 \sin(2 \times 45^\circ) $$
    $$ \sigma_n = \frac{\sigma_x}{2} + \frac{\sigma_x}{2} \cos(90^\circ) $$
    $$ \sigma_n = \frac{\sigma_x}{2} + \frac{\sigma_x}{2} (0) = \frac{\sigma_x}{2} $$
    So, on a plane inclined at 45 degrees, the normal stress is half the axial stress. This is a **tensile** stress.

*   **Shear Stress ($\tau_{nt}$):**
    $$ \tau_{nt} = -\frac{\sigma_x - 0}{2} \sin(2 \times 45^\circ) + 0 \cos(2 \times 45^\circ) $$
    $$ \tau_{nt} = -\frac{\sigma_x}{2} \sin(90^\circ) $$
    $$ \tau_{nt} = -\frac{\sigma_x}{2} (1) = -\frac{\sigma_x}{2} $$
    The shear stress is $\sigma_x/2$. The negative sign indicates the direction of shear based on our convention, but the magnitude is $\sigma_x/2$.

**Real-world Analogy:** Think about tearing a piece of paper. If you pull directly on it, it's hard to tear straight across. But if you pull at an angle, it tends to rip along that angle much more easily. The tensile stress along the rod is like the pulling force. The material is weaker in shear, and this 45-degree plane experiences significant shear stress, which is often the critical factor in failure for ductile materials under tension. This is a key concept for CO6: analyzing failure.

### Example: Pressure Vessel (Biaxial Stress)

Consider a thin-walled cylindrical pressure vessel. If the internal pressure is $p$, the hoop stress (circumferential) is $\sigma_h = \frac{pd}{2t}$ and the longitudinal stress is $\sigma_l = \frac{pd}{4t}$. Let's assume $\sigma_x = \sigma_h$ and $\sigma_y = \sigma_l$, and $\tau_{xy} = 0$ for simplicity (assuming no axial twist).

Let's say we want to know the stress on a plane inclined at $\theta$ to the longitudinal axis (y-axis, or $\sigma_l$). So, we're looking at a plane at an angle $\phi = 90^\circ - \theta$ to the $\sigma_x$ direction (hoop stress direction). For simplicity, let's work with $\theta$ relative to $\sigma_x$.

Suppose $\sigma_x = 100 \, \text{MPa}$ and $\sigma_y = 50 \, \text{MPa}$ (a biaxial state, $\tau_{xy} = 0$). Let's find the stress on a plane inclined at $\theta = 30^\circ$ to the x-axis.

Using Rankine's formulas:

*   **Normal Stress ($\sigma_n$):**
    $$ \sigma_n = \frac{100 + 50}{2} + \frac{100 - 50}{2} \cos(2 \times 30^\circ) + 0 $$
    $$ \sigma_n = \frac{150}{2} + \frac{50}{2} \cos(60^\circ) $$
    $$ \sigma_n = 75 + 25 \times 0.5 = 75 + 12.5 = 87.5 \, \text{MPa} $$

*   **Shear Stress ($\tau_{nt}$):**
    $$ \tau_{nt} = -\frac{100 - 50}{2} \sin(2 \times 30^\circ) + 0 $$
    $$ \tau_{nt} = -\frac{50}{2} \sin(60^\circ) $$
    $$ \tau_{nt} = -25 \times \frac{\sqrt{3}}{2} \approx -25 \times 0.866 = -21.65 \, \text{MPa} $$

So, on this 30-degree inclined plane, we have a normal stress of 87.5 MPa (tensile) and a shear stress of 21.65 MPa. This helps us understand the stress distribution within the vessel wall. If we were to calculate the stresses for all angles and find the maximum shear stress, that would be crucial for failure prediction (CO6).

### Mohr's Circle: A Visual Aid

While Rankine's formulas provide the direct mathematical expressions, it's incredibly useful to visualize these transformations using **Mohr's Circle**. Mohr's circle is a graphical tool that plots the normal stress and shear stress on the y and x axes, respectively, for planes of varying orientations. The center of the circle is at $(\frac{\sigma_x + \sigma_y}{2}, 0)$, and its radius is $\sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2}$.

The coordinates of any point on Mohr's circle represent the normal and shear stresses on a plane at a specific orientation. The Rankine formulas are essentially the analytical expressions that describe the coordinates of points on this circle. The principal stresses are the points where the circle intersects the horizontal axis (where shear stress is zero), and the maximum shear stress is at the top and bottom of the circle. Understanding Mohr's circle greatly aids in applying stress transformation principles, reinforcing CO5.

### Limitations and When to Use Rankine's Formula

*   **2D Plane Stress/Strain:** The formulas we've discussed are primarily for 2D stress states (plane stress or plane strain). Many practical problems in mechanical design, like thin-walled pressure vessels or flat plates, can be reasonably approximated as 2D.
*   **Linear Elasticity:** Like most fundamental mechanics of solids concepts, these formulas assume the material behaves elastically. Once plastic deformation occurs, the stress-strain relationships change.
*   **Not for Stress Concentrations:** These formulas give stresses at a "point" away from geometric discontinuities. They don't directly account for stress concentrations caused by holes, notches, or sharp corners, which are handled by different analytical or numerical methods.
*   **Foundation for More Complex Analysis:** Even with the advent of finite element analysis (FEA), understanding these fundamental transformations is crucial for interpreting results and validating models.

Remember, Rankine's formula is a direct application of the equilibrium of forces on an inclined plane. It's a foundational tool for understanding stress transformations. Textbooks like **H. J. Shah and S. B. Junnarkar** or **R. K. Bansal** provide excellent derivations and examples of these formulas and their application.

### Summary of Key Takeaways

*   **Purpose:** Rankine's formulas allow us to calculate normal and shear stresses acting on any plane inclined at an angle $\theta$ within a stressed material, given the stresses on a reference plane.
*   **Key Components:** They show how the average stress, the difference in normal stresses, and existing shear stresses contribute to the stresses on an inclined plane.
*   **Connection to Principal Stresses:** By setting shear stress to zero, we can derive the conditions for principal stresses and their orientations.
*   **Application:** Essential for understanding material behavior under combined loading and predicting failure modes, particularly relevant to CO5 and CO6.
*   **Visualization:** Mohr's circle provides a powerful graphical representation of these stress transformations.

Understanding stresses on inclined planes isn't just an academic exercise; it's what allows engineers to predict where and how a structure might fail. Whether it's a simple rod or a complex machine part, knowing these stresses is critical for safe design.

---

### Sample Questions with Answers

**Question 1 (Conceptual - CO5):**
Explain why it is important to analyze stresses on inclined planes, even if the applied loads are along the principal axes of a component.

**Answer:**
Even if the applied loads are along the principal axes (meaning the primary stresses are uniaxial or biaxial along these axes), the internal stresses acting on planes that are *not* perpendicular to these axes can be significantly different. For instance, a purely tensile stress along an axis will induce shear stresses on planes inclined at 45 degrees. Materials often have different strengths in tension, compression, and shear. Identifying the stresses on all potential failure planes, including inclined ones, is crucial for predicting the actual failure mode and ensuring the component's safety. This is vital for CO5, as it involves stress transformation to find critical stress states.

**Question 2 (Application - CO3, CO5):**
A plane stress condition at a point is represented by $\sigma_x = 80 \, \text{MPa}$, $\sigma_y = -40 \, \text{MPa}$, and $\tau_{xy} = 30 \, \text{MPa}$. Calculate the normal and shear stresses on a plane inclined at $\theta = 60^\circ$ with respect to the x-axis.

**Solution:**
We use Rankine's formulas:
$\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$
$\tau_{nt} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$

Given:
$\sigma_x = 80 \, \text{MPa}$
$\sigma_y = -40 \, \text{MPa}$
$\tau_{xy} = 30 \, \text{MPa}$
$\theta = 60^\circ \implies 2\theta = 120^\circ$

Calculations:
$\frac{\sigma_x + \sigma_y}{2} = \frac{80 + (-40)}{2} = \frac{40}{2} = 20 \, \text{MPa}$
$\frac{\sigma_x - \sigma_y}{2} = \frac{80 - (-40)}{2} = \frac{120}{2} = 60 \, \text{MPa}$

$\cos(120^\circ) = -0.5$
$\sin(120^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$

**Normal Stress ($\sigma_n$):**
$\sigma_n = 20 \, \text{MPa} + (60 \, \text{MPa})(-0.5) + (30 \, \text{MPa})(0.866)$
$\sigma_n = 20 - 30 + 25.98 \, \text{MPa}$
$\sigma_n = 15.98 \, \text{MPa}$

**Shear Stress ($\tau_{nt}$):**
$\tau_{nt} = -(60 \, \text{MPa}) (0.866) + (30 \, \text{MPa})(-0.5)$
$\tau_{nt} = -51.96 - 15 \, \text{MPa}$
$\tau_{nt} = -66.96 \, \text{MPa}$

**Answer:** The normal stress on the inclined plane is approximately $15.98 \, \text{MPa}$ (tensile), and the shear stress is approximately $-66.96 \, \text{MPa}$ (depending on convention, the magnitude is $66.96 \, \text{MPa}$).

**Question 3 (Conceptual/Exam-Oriented - CO5, CO6):**
A solid circular rod is subjected to a tensile axial load. On an inclined plane within the rod, there will be both normal and shear stresses. If the material is ductile, which type of stress is more likely to cause failure, and why? How is this related to Rankine's formula?

**Answer:**
For a ductile material subjected to axial tension, the **shear stress** on an inclined plane is often the critical factor leading to failure. Ductile materials tend to yield or fracture by shear mechanisms. Rankine's formula, particularly the shear stress component $\tau_{nt} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$, shows that for a uniaxial tensile stress ($\sigma_x > 0, \sigma_y=0, \tau_{xy}=0$), the maximum shear stress occurs at $\theta = 45^\circ$, where $\tau_{nt, max} = -\frac{\sigma_x}{2} \sin(90^\circ) = -\frac{\sigma_x}{2}$. The magnitude is $\sigma_x/2$. This means a significant shear stress is developed on planes at 45 degrees to the tensile load, which can exceed the material's shear strength, leading to failure (like the tearing of paper analogy). This highlights the importance of CO6 in analyzing safe loads by considering all stress components.
