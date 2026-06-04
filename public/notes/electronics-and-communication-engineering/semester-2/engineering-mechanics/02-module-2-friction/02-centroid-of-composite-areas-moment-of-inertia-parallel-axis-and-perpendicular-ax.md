---
title: "Centroid of composite areas- – moment of inertia- parallel axis and perpendicular axis theorems."
subject: "ENGINEERING MECHANICS"
module: "Module 2: Friction:  "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da319"
status: "completed"
scrapedAt: "2026-05-23T17:38:53.730Z"
---
## Engineering Mechanics: Module 2 - Friction

### Topic: Centroid of Composite Areas, Moment of Inertia, Parallel Axis Theorem, and Perpendicular Axis Theorem

Welcome, everyone! Today, we're diving into some fundamental concepts that are crucial for understanding how rigid bodies behave under various conditions. We'll be focusing on **centroids of composite areas** and the very important concept of **moment of inertia**, along with the powerful tools of the **parallel axis theorem** and **perpendicular axis theorem**. Don't let the names scare you; these are building blocks that help us predict how structures and objects will respond to forces and rotations.

This topic directly supports our course outcomes. When we talk about centroids, we're building on our understanding of force systems (CO2) and applying principles to locate the "average" position of an area, which is key for calculating resultant forces and moments (CO1). Understanding moment of inertia is absolutely vital for dynamics (CO5), as it's the rotational equivalent of mass – it tells us how resistant an object is to angular acceleration. And the theorems? They are application tools (CO3, CO4) that allow us to efficiently solve problems with complex shapes.

Let's start by demystifying these concepts.

### 1. Centroid of Composite Areas: Finding the "Average" Location

Imagine a T-shaped beam. If you were to try and balance it on a pin, where would you place that pin to make it perfectly stable? That balance point, in terms of the area, is what we call the **centroid**.

**What is a Centroid?**

The centroid is the geometric center of an area. Think of it as the point where the area is perfectly balanced if it were a thin, uniform plate. For simple shapes like rectangles, squares, or circles, the centroid is often at their obvious geometric center.

*   **Rectangle:** The centroid is at the intersection of its diagonals.
*   **Circle:** The centroid is at its center.
*   **Triangle:** The centroid is at the intersection of its medians (lines from each vertex to the midpoint of the opposite side). It's located two-thirds of the way from the vertex to the midpoint of the opposite side.

**Why "Composite Areas"?**

Real-world engineering components are rarely made of simple, single shapes. A bridge girder might be an I-beam, a building column might be a hollow square, or a part of an aircraft wing could be a complex airfoil. These are **composite areas** – areas made up of several simpler geometric shapes.

To find the centroid of a composite area, we can't just guess or use a single formula. We need a systematic approach. This is where we integrate our knowledge of force systems. We can think of each simple shape within the composite area as contributing a "force" proportional to its own area, acting at its own centroid. The centroid of the composite area is then the "resultant" of these distributed forces.

**How to Find the Centroid of a Composite Area:**

The fundamental principle is to break down the composite area into simpler shapes (rectangles, triangles, semicircles, etc.) for which we know the area and the location of their individual centroids.

Let's say our composite area is made up of $n$ simple shapes.
*   Let $A_i$ be the area of the $i$-th simple shape.
*   Let $(\bar{x}_i, \bar{y}_i)$ be the coordinates of the centroid of the $i$-th simple shape with respect to a chosen coordinate system.

The coordinates of the centroid of the composite area, $(\bar{X}, \bar{Y})$, are given by:

$$ \bar{X} = \frac{\sum_{i=1}^{n} A_i \bar{x}_i}{\sum_{i=1}^{n} A_i} $$

$$ \bar{Y} = \frac{\sum_{i=1}^{n} A_i \bar{y}_i}{\sum_{i=1}^{n} A_i} $$

Here, $\sum A_i$ is simply the total area of the composite shape.

**Think of it like this:** Imagine you have a pizza cut into several slices. Each slice is a simple shape. To find the "average position" of all the toppings on the entire pizza, you'd consider the weight (area) of each slice and the average position of toppings on that slice. You'd sum up (weight * average position) for all slices and divide by the total weight of the pizza. That's exactly what these formulas do!

**Important Considerations for Composite Areas:**

*   **Coordinate System:** Choose a convenient coordinate system. Often, it's helpful to place the origin at a corner or an axis of symmetry of the composite shape.
*   **Breaking Down Shapes:** Be strategic in how you divide the composite area. Sometimes, you might need to consider "negative" areas for cutouts or holes. If you have a hole, its area is subtracted, and its centroid's contribution to the sum will also be negative. This is a crucial point often tested in exams.
*   **Symmetry:** If the composite area has an axis of symmetry, the centroid will lie on that axis. This can simplify your calculations significantly.

**(CO2: Identify and describe the components of system of forces acting on the rigid body)** When we consider each elemental area $A_i$ with its centroid $(\bar{x}_i, \bar{y}_i)$, we are essentially treating it as a force of magnitude $A_i$ acting at that point. The summation process then becomes equivalent to finding the resultant of these elemental forces, thus directly relating to our understanding of force systems.

### 2. Moment of Inertia: Resistance to Rotational Motion

Now, let's move to a concept that's a bit more abstract but incredibly important in dynamics: **moment of inertia**.

**What is Moment of Inertia?**

You know how **mass** is a measure of an object's resistance to linear acceleration (Newton's second law, $F=ma$)? Well, **moment of inertia (I)** is the rotational equivalent. It measures an object's resistance to angular acceleration (think $\tau = I\alpha$, where $\tau$ is torque and $\alpha$ is angular acceleration).

Just like mass depends on how much "stuff" (matter) an object has, moment of inertia depends on:

1.  **The total mass of the object:** More mass generally means more resistance to rotation.
2.  **The distribution of that mass relative to the axis of rotation:** This is the key difference from mass. If the mass is concentrated far from the axis of rotation, the object is harder to spin or stop spinning than if the same mass is concentrated closer to the axis.

**Analogy Time:** Imagine spinning a baton. It's easy to spin when you hold it by the middle. But if you try to spin it holding one end, it feels much harder to get going and to change its speed. That's because the mass is distributed further from your hands (the axis of rotation) in the second case, giving it a larger moment of inertia.

**Calculating Moment of Inertia for an Area (Area Moment of Inertia):**

While mass moment of inertia deals with mass distribution, **area moment of inertia (often denoted as $I_x$ and $I_y$)** deals with the distribution of an *area* with respect to an axis. This is crucial for structural mechanics and understanding how beams bend or how columns buckle. It tells us about the *shape's* resistance to bending or twisting.

For a small differential area $dA$ at a distance $y$ from the x-axis and $x$ from the y-axis:

*   **Moment of Inertia about the x-axis ($I_x$):** This measures the area's resistance to bending about the x-axis. It's calculated by summing up $dA \cdot y^2$ for all differential areas in the shape.
    $$ I_x = \int_A y^2 \, dA $$
    Think of $y^2$ as emphasizing the contribution of areas further away from the x-axis.

*   **Moment of Inertia about the y-axis ($I_y$):** This measures the area's resistance to bending about the y-axis. It's calculated by summing up $dA \cdot x^2$ for all differential areas.
    $$ I_y = \int_A x^2 \, dA $$
    Similarly, $x^2$ emphasizes areas further from the y-axis.

**Polar Moment of Inertia ($J_O$ or $I_O$):**

There's also the **polar moment of inertia**, which is the moment of inertia with respect to an axis perpendicular to the area, passing through a point (often the origin). It's calculated by summing up $dA \cdot r^2$, where $r$ is the distance from the point O.

$$ J_O = \int_A r^2 \, dA $$

Where $r^2 = x^2 + y^2$. This relates directly to twisting or torsional rigidity.

**(CO5: Develop the understanding of fundamental principles of rigid body dynamics)** Area moment of inertia is a direct precursor to understanding mass moment of inertia, which is fundamental to rigid body dynamics. The principles of calculating $I_x$ and $I_y$ form the basis for how we analyze rotational motion, stability, and structural behavior under load.

### 3. Perpendicular Axis Theorem: Connecting $I_x$, $I_y$, and $J_O$

This theorem is a neat little connection that simplifies calculations, especially when dealing with polar moment of inertia. It states:

**If $I_x$ and $I_y$ are the moments of inertia of a plane area about the x and y axes, respectively, and the x and y axes are perpendicular and intersect at a point O, then the polar moment of inertia $J_O$ about the axis perpendicular to the area and passing through O is:**

$$ J_O = I_x + I_y $$

This is wonderfully straightforward! If you know how an area resists bending about the x and y axes, you can directly find out how it resists twisting about an axis perpendicular to it, simply by adding them up.

**(CO4: Identify appropriate principles to solve problems of mechanics)** The Perpendicular Axis Theorem is a principle that allows for a more efficient solution to problems involving torsional rigidity or when the polar moment of inertia is needed. It demonstrates how different mechanical properties are interconnected.

### 4. Parallel Axis Theorem: Moving the Axis of Rotation

This is arguably one of the most powerful theorems in our toolkit. Why? Because very rarely do we need the moment of inertia about an axis that passes through the centroid of a shape. Usually, we're interested in an axis that's offset, perhaps the edge of a beam, the axis of a shaft, or an axis of symmetry that doesn't pass through the centroid of a specific component.

The Parallel Axis Theorem allows us to calculate the moment of inertia about any axis parallel to an axis passing through the centroid of the area.

**The Theorem States:**

**If $I_c$ is the moment of inertia of an area about an axis passing through its centroid, and $I$ is the moment of inertia about a parallel axis located at a distance $d$ from the centroidal axis, then:**

$$ I = I_c + Ad^2 $$

Where:
*   $I$ is the moment of inertia about the new, parallel axis.
*   $I_c$ is the moment of inertia about the parallel axis passing through the centroid of the area.
*   $A$ is the total area of the shape.
*   $d$ is the perpendicular distance between the two parallel axes.

**Let's break down the formula:**

*   $I_c$: This is the "base" resistance to rotation due to the shape's distribution about its own center.
*   $Ad^2$: This term represents the *additional* resistance to rotation due to the entire area being shifted a distance $d$ away from the centroidal axis. Notice how the distance $d$ is squared, emphasizing that areas further away contribute significantly more to this added resistance. It's like the $y^2$ or $x^2$ in the basic definition, but for the entire area's displacement.

**When is this useful?**

*   **Composite Areas:** This is where it shines! We often know the moments of inertia of simple shapes about their *own* centroids ($I_c$). But for a composite area, we usually need the moment of inertia about a common axis (e.g., the overall x-axis of the structure). We can calculate $I_c$ for each simple shape, find the centroid of the composite area, and then use the parallel axis theorem to shift the axis for each component shape to the common axis.

**Example Scenario:** Imagine calculating the moment of inertia of an I-beam about its horizontal neutral axis. An I-beam is made of three rectangular parts: a top flange, a web, and a bottom flange.
1.  You'd find the centroid of the *entire* I-beam.
2.  For each rectangular part (flange, web), you'd know its $I_c$ about its *own* centroidal x-axis (which is easy for a rectangle: $I_c = \frac{bh^3}{12}$).
3.  You'd then calculate the distance $d$ from the centroid of each rectangular part to the overall centroidal x-axis of the I-beam.
4.  Using $I = I_c + Ad^2$, you'd find the moment of inertia of each part about the *overall* axis.
5.  Finally, you'd sum these up for all parts to get the total moment of inertia of the I-beam.

**(CO3: Apply the conditions of equilibrium to different force system.)** While this theorem directly relates to geometric properties, understanding how to shift reference axes is a critical problem-solving skill in mechanics. For example, when analyzing beam bending, the neutral axis is often determined by equilibrium conditions, and then the moment of inertia about that axis, calculated using these theorems, is used to find stresses and deflections.

**(CO4: Identify appropriate principles to solve problems of mechanics.)** The Parallel Axis Theorem is a prime example of an appropriate principle used to simplify complex calculations involving geometric properties and shifted axes.

### Putting It All Together: A Step-by-Step Approach for Composite Areas

When faced with a problem involving composite areas and moments of inertia, follow these steps:

1.  **Choose a Coordinate System:** Select a convenient x-y axis system. It's often best to place the origin at a corner or an axis of symmetry.
2.  **Divide the Composite Area:** Break down the composite area into simple geometric shapes (rectangles, triangles, circles, semi-circles). Remember to treat holes as negative areas.
3.  **Calculate Individual Areas ($A_i$):** Find the area of each simple shape.
4.  **Locate Centroids of Simple Shapes ($\bar{x}_i, \bar{y}_i$):** Determine the centroid of each simple shape with respect to your chosen coordinate system. Standard formulas for basic shapes are essential here. (Refer to your textbooks like Timoshenko & Young or Hibbeler for tables of properties of common shapes).
5.  **Calculate Composite Centroid ($\bar{X}, \bar{Y}$):** Use the centroid formulas:
    $$ \bar{X} = \frac{\sum A_i \bar{x}_i}{\sum A_i} \quad \text{and} \quad \bar{Y} = \frac{\sum A_i \bar{y}_i}{\sum A_i} $$
    This step helps you find the overall geometric center.
6.  **Find Moments of Inertia of Simple Shapes about their Centroids ($I_{c_x}, I_{c_y}$):** For each simple shape, determine its moment of inertia about its *own* centroidal x-axis and y-axis using standard formulas (e.g., rectangle $I_c = bh^3/12$, circle $I_c = \pi d^4/64$).
7.  **Determine the Distance to the Composite Centroid ($d$):** For each simple shape, calculate the perpendicular distance ($d_x$ and $d_y$) from its centroid to the centroid of the *composite* area.
8.  **Apply the Parallel Axis Theorem:** For each simple shape, calculate its moment of inertia about the composite centroidal axes:
    $$ I_x = I_{c_x} + A d_y^2 $$
    $$ I_y = I_{c_y} + A d_x^2 $$
    *(Note the interchange of $d_x$ and $d_y$ when going from $I_{c_y}$ to $I_x$ and vice-versa, as $d_y$ is the distance along the x-axis affecting $I_x$, and $d_x$ is the distance along the y-axis affecting $I_y$).*
9.  **Sum for Composite Moment of Inertia:** Add the moments of inertia calculated in the previous step for all component shapes to find the total moment of inertia of the composite area about the composite centroidal axes.
    $$ I_{x(\text{composite})} = \sum (I_{c_x} + A d_y^2) $$
    $$ I_{y(\text{composite})} = \sum (I_{c_y} + A d_x^2) $$
10. **Perpendicular Axis Theorem (if needed):** If the polar moment of inertia about the composite centroid is required, use $J_O = I_x + I_y$ (where $I_x$ and $I_y$ are about the composite centroidal axes).

**Common Pitfalls and Exam Tips:**

*   **Sign Errors with Holes:** Always remember to subtract the area and the moment of inertia contributions of holes.
*   **Confusion with $d_x$ and $d_y$ in Parallel Axis Theorem:** Double-check which distance ($d_x$ or $d_y$) is used with which centroidal moment of inertia ($I_{c_x}$ or $I_{c_y}$). The distance perpendicular to the axis of interest is the one that matters for that axis's moment of inertia. For $I_x$, you use the distance along the y-axis ($d_y$). For $I_y$, you use the distance along the x-axis ($d_x$).
*   **Units:** Ensure consistency in units (e.g., mm, m, inches). Moments of inertia will have units of length to the fourth power (e.g., mm$^4$, m$^4$).
*   **Accuracy of Centroidal Moments of Inertia:** Have your standard formulas for basic shapes memorized or readily available from your textbook (like Shames or Meriam & Kraige).
*   **Systematic Tabulation:** For complex composite areas, creating a table for $A_i$, $\bar{x}_i$, $\bar{y}_i$, $I_{c_x}$, $I_{c_y}$, $d_x$, $d_y$ can prevent errors.

Remember this: The centroid gives us the "average location," and the moment of inertia tells us about the "distribution" and resistance to angular effects. The theorems are our bridges to making complex shapes manageable.

### Sample Questions and Answers

**Q1. Conceptual Question:** Explain why the moment of inertia of an area is always positive, even though areas can be treated as negative in composite calculations.
**Answer:** The moment of inertia is defined as an integral of $y^2 \, dA$ or $x^2 \, dA$. Since $y^2$ and $x^2$ are always non-negative, and $dA$ represents an elemental area (which is also inherently positive), their product and thus the integral will always yield a positive value. While a hole might be represented by a negative area ($A_i$) in the centroid calculation, its contribution to moment of inertia is handled by subtracting its *positive* moment of inertia ($I_{c_x}$ or $I_{c_y}$) and then applying the parallel axis theorem, or by directly using the formula $I = I_c + Ad^2$ with a negative $A$ and its corresponding $I_c$ (which will still be positive). Essentially, the resistance to rotation due to distance from an axis is always a positive attribute.

**Q2. Exam-Oriented Question:** A T-section beam is composed of a flange (rectangle) of dimensions 100 mm (width) $\times$ 20 mm (height) and a web (rectangle) of dimensions 20 mm (width) $\times$ 120 mm (height). The web is attached to the bottom of the flange. Calculate the moment of inertia of this T-section about its horizontal centroidal axis.

**Given:**
*   Flange: $b_f = 100$ mm, $h_f = 20$ mm
*   Web: $b_w = 20$ mm, $h_w = 120$ mm

**Solution:**

1.  **Coordinate System:** Let the origin be at the bottom left corner of the web. The x-axis is horizontal, and the y-axis is vertical.

2.  **Divide Area:**
    *   Shape 1: Flange (Rectangle)
    *   Shape 2: Web (Rectangle)

3.  **Individual Areas and Centroids:**
    *   **Flange (Shape 1):**
        *   $A_1 = b_f \times h_f = 100 \text{ mm} \times 20 \text{ mm} = 2000 \text{ mm}^2$
        *   Centroid $\bar{y}_1$: The bottom of the flange is at $y = 120$ mm (top of the web). So, $\bar{y}_1 = 120 \text{ mm} + \frac{20 \text{ mm}}{2} = 130 \text{ mm}$.
        *   Centroid $\bar{x}_1$: The flange is centered on the web. $\bar{x}_1 = \frac{20 \text{ mm}}{2} + \frac{100 \text{ mm}}{2} = 10 \text{ mm} + 50 \text{ mm} = 60 \text{ mm}$.

    *   **Web (Shape 2):**
        *   $A_2 = b_w \times h_w = 20 \text{ mm} \times 120 \text{ mm} = 2400 \text{ mm}^2$
        *   Centroid $\bar{y}_2$: The web starts at $y=0$ and ends at $y=120$. $\bar{y}_2 = \frac{120 \text{ mm}}{2} = 60 \text{ mm}$.
        *   Centroid $\bar{x}_2$: The web is at the origin's vertical axis. $\bar{x}_2 = \frac{20 \text{ mm}}{2} = 10 \text{ mm}$.

4.  **Composite Centroid ($\bar{Y}$):** (We only need $\bar{Y}$ for the horizontal centroidal axis)
    $$ \bar{Y} = \frac{\sum A_i \bar{y}_i}{\sum A_i} = \frac{A_1 \bar{y}_1 + A_2 \bar{y}_2}{A_1 + A_2} $$
    $$ \bar{Y} = \frac{(2000 \text{ mm}^2)(130 \text{ mm}) + (2400 \text{ mm}^2)(60 \text{ mm})}{2000 \text{ mm}^2 + 2400 \text{ mm}^2} $$
    $$ \bar{Y} = \frac{260000 \text{ mm}^3 + 144000 \text{ mm}^3}{4400 \text{ mm}^2} = \frac{404000 \text{ mm}^3}{4400 \text{ mm}^2} \approx 91.82 \text{ mm} $$
    The horizontal centroidal axis is approximately 91.82 mm from the bottom of the web.

5.  **Centroidal Moments of Inertia ($I_{c_x}$):**
    *   **Flange:** For a rectangle about its horizontal centroidal axis: $I_{c_x (\text{flange})} = \frac{b h^3}{12} = \frac{100 \text{ mm} \times (20 \text{ mm})^3}{12} = \frac{100 \times 8000}{12} = 66666.67 \text{ mm}^4$.
    *   **Web:** For a rectangle about its horizontal centroidal axis: $I_{c_x (\text{web})} = \frac{b h^3}{12} = \frac{20 \text{ mm} \times (120 \text{ mm})^3}{12} = \frac{20 \times 1728000}{12} = 2880000 \text{ mm}^4$.

6.  **Distances to Composite Centroidal Axis ($d$):**
    *   **Flange:** The distance $d_1$ from the flange's centroid (at $\bar{y}_1 = 130$ mm) to the composite centroid (at $\bar{Y} = 91.82$ mm) is $d_1 = |\bar{y}_1 - \bar{Y}| = |130 - 91.82| = 38.18 \text{ mm}$.
    *   **Web:** The distance $d_2$ from the web's centroid (at $\bar{y}_2 = 60$ mm) to the composite centroid (at $\bar{Y} = 91.82$ mm) is $d_2 = |\bar{y}_2 - \bar{Y}| = |60 - 91.82| = 31.82 \text{ mm}$.

7.  **Apply Parallel Axis Theorem ($I = I_c + Ad^2$):**
    *   **Flange:** $I_{x(\text{flange})} = I_{c_x (\text{flange})} + A_1 d_1^2 = 66666.67 \text{ mm}^4 + (2000 \text{ mm}^2)(38.18 \text{ mm})^2$
        $I_{x(\text{flange})} = 66666.67 + 2000 \times 1457.71 = 66666.67 + 2915420 = 2982086.67 \text{ mm}^4$.
    *   **Web:** $I_{x(\text{web})} = I_{c_x (\text{web})} + A_2 d_2^2 = 2880000 \text{ mm}^4 + (2400 \text{ mm}^2)(31.82 \text{ mm})^2$
        $I_{x(\text{web})} = 2880000 + 2400 \times 1012.51 = 2880000 + 2430024 = 5310024 \text{ mm}^4$.

8.  **Sum for Composite Moment of Inertia:**
    $$ I_{x(\text{composite})} = I_{x(\text{flange})} + I_{x(\text{web})} $$
    $$ I_{x(\text{composite})} = 2982086.67 \text{ mm}^4 + 5310024 \text{ mm}^4 = 8292110.67 \text{ mm}^4 $$

**Therefore, the moment of inertia of the T-section about its horizontal centroidal axis is approximately $8.29 \times 10^6 \text{ mm}^4$.**

This comprehensive approach ensures that all components of the area are correctly accounted for, with their distributions relative to the desired axis. Keep practicing these problems, and you'll find the process becomes much more intuitive!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
