---
title: "Centroid of composite areas- – moment of inertia- parallel axis and perpendicular axis theorems."
subject: "ENGINEERING MECHANICS"
module: "Module 2: Friction: "
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912ada"
status: "completed"
scrapedAt: "2026-05-20T18:29:13.378Z"
---
# Engineering Mechanics: Module 2 - Friction (Focus: Centroids, Moments of Inertia)

Welcome, everyone, to our deep dive into Module 2 of Engineering Mechanics! While this module's overarching theme is friction, today we're going to tackle some foundational concepts that are absolutely crucial not just for understanding friction, but for almost *everything* we do in statics and dynamics. We'll be talking about **Centroids of Composite Areas**, **Moments of Inertia**, and the powerful **Parallel Axis Theorem** and **Perpendicular Axis Theorem**. These concepts are the building blocks for analyzing how forces and moments affect rigid bodies, and that directly links to several of our course outcomes, especially CO1, CO2, CO3, and CO4.

You might be thinking, "How does this relate to friction?" Well, friction often depends on the contact area and how forces are distributed. To properly analyze these, we need to know where the "average" location of an area is (the centroid) and how that area resists bending or twisting (moment of inertia). So, let's get started!

## 1. Centroid of Composite Areas: Finding the "Balance Point"

Imagine you have a strangely shaped object, like a T-shaped bracket or an L-shaped angle. If you wanted to support this object with a single string so it balanced perfectly, where would you attach that string? That point of perfect balance is the **centroid** of the area.

**What is a Centroid?**

Formally, the centroid is the geometric center of a shape. For a simple, symmetrical shape like a rectangle or a circle, the centroid is right at its geometric center. But for more complex shapes, especially those made up of multiple simpler shapes – what we call **composite areas** – we need a systematic way to find this balance point.

Think about a common kitchen cutting board, which might be rectangular with a rounded corner. If you tried to balance it on your finger, you'd naturally aim for a spot that feels "in the middle" of the whole thing, not just the middle of the rectangle part. That "middle" for the entire shape is its centroid.

**Calculating the Centroid for Composite Areas**

When we have a composite area, we break it down into simpler shapes whose centroids we already know (like rectangles, triangles, circles, semi-circles, etc.). Then, we use a method that’s essentially a weighted average of the individual centroids. The weight here is the area of each individual shape.

Let's say our composite area is made up of several simpler areas: $A_1, A_2, A_3, \dots, A_n$.
Let the centroid of each of these areas be at coordinates $(\bar{x}_1, \bar{y}_1)$, $(\bar{x}_2, \bar{y}_2)$, $(\bar{x}_3, \bar{y}_3)$, and so on.

To find the centroid $(\bar{X}, \bar{Y})$ of the *entire composite area*, we use these formulas, which are derived from principles of equilibrium (CO3):

$\bar{X} = \frac{\sum (A_i \bar{x}_i)}{\sum A_i} = \frac{A_1\bar{x}_1 + A_2\bar{x}_2 + \dots + A_n\bar{x}_n}{A_1 + A_2 + \dots + A_n}$

$\bar{Y} = \frac{\sum (A_i \bar{y}_i)}{\sum A_i} = \frac{A_1\bar{y}_1 + A_2\bar{y}_2 + \dots + A_n\bar{y}_n}{A_1 + A_2 + \dots + A_n}$

**What does this mean in practice?**
*   **Numerator ($\sum A_i \bar{x}_i$ and $\sum A_i \bar{y}_i$):** This represents the "first moment of area" about the y-axis and x-axis, respectively. It tells us how the area is distributed relative to an axis. If a large area is far from an axis, its contribution to the moment is significant. This connects to CO1 and CO2 – understanding how components of force systems (represented here by area distribution) act.
*   **Denominator ($\sum A_i$):** This is simply the total area of the composite shape.

**Practical Application:** Think about a welded beam made from different standard profiles (like an I-beam). To determine its structural behavior, engineers first need to find the centroid of the entire cross-section. This centroid is critical for calculating stresses and deflections, especially under bending loads. If the centroid is too far to one side, the beam will bend more dramatically on that side.

**Common Pitfalls:**
*   **Coordinate System:** Always be consistent with your coordinate system (usually x and y axes). Define your origin clearly.
*   **Holes/Cutouts:** If your composite area has holes, treat them as *negative areas*. Subtract their area and their moment of area from the total. This is a crucial step!

**Remember this:** The centroid is the point where the entire area can be considered to act for calculating its first moment of area.

## 2. Moment of Inertia: Resistance to Angular Acceleration

Now that we know how to find the geometric center, let's talk about **moment of inertia**. This is a property of an area that describes its resistance to bending or twisting. You can think of it as a measure of how "spread out" an area is from an axis.

**What is Moment of Inertia?**

For a simple shape and an axis passing through its centroid, the moment of inertia ($I$) about that axis is calculated by integrating the square of the distance ($y^2$) of each infinitesimally small area element ($dA$) from the axis:

$I_x = \int y^2 dA$ (Moment of inertia about the x-axis)
$I_y = \int x^2 dA$ (Moment of inertia about the y-axis)

**Intuition Check:** Why $y^2$ or $x^2$? Because areas that are *further* away from the axis contribute *much more* to the resistance. Imagine trying to bend a long, thin ruler. It's easy to bend it edgewise, but very hard to bend it flat. This is because when bending edgewise, the area is far from the bending axis. When bending flat, the area is close to the axis.

**Connection to Course Outcomes:** Understanding moment of inertia is fundamental for analyzing how structures and components respond to forces and moments, directly supporting CO2 (identifying components of force systems) and CO4 (applying principles to solve problems). For instance, when a beam bends under a load, the stresses developed are directly proportional to the moment of inertia of its cross-section. A larger moment of inertia means less bending for the same load.

**Moments of Inertia for Common Shapes (about their Centroids):**
*   **Rectangle (base $b$, height $h$)**:
    *   $I_x = \frac{bh^3}{12}$ (about horizontal axis through centroid)
    *   $I_y = \frac{hb^3}{12}$ (about vertical axis through centroid)
*   **Circle (radius $r$)**:
    *   $I_x = I_y = I_{centroid} = \frac{\pi r^4}{4}$ (about any axis through centroid)
*   **Triangle (base $b$, height $h$)**:
    *   $I_x = \frac{bh^3}{36}$ (about horizontal axis through centroid)

These are fundamental and good to remember for exams!

## 3. Parallel Axis Theorem: Shifting the Axis

Okay, so we know how to find the moment of inertia about an axis passing through the centroid of a shape. But what if we need to find the moment of inertia about a *different*, parallel axis? For example, an axis at the edge of a beam or an axis coinciding with the neutral axis of a composite structure? That’s where the **Parallel Axis Theorem** comes in – it's a real lifesaver!

**The Theorem Explained**

If we know the moment of inertia of an area $A$ about an axis passing through its centroid $(\bar{x}, \bar{y})$, let's call it $I_{\bar{x}}$ or $I_{\bar{y}}$, then the moment of inertia $I_x$ about a parallel axis $x'$ located a distance $d$ from the centroidal axis is given by:

$I_x = I_{\bar{x}} + Ad^2$

And similarly for the y-axis:

$I_y = I_{\bar{y}} + Ad^2$

**Think of it like this:** Imagine you have a pizza. The moment of inertia about an axis going through its center (centroid) is relatively small. Now, imagine trying to rotate that pizza around an axis at the edge of the crust. It feels much harder to get it spinning, right? This is because the mass (or in our case, the area) is further away from the axis of rotation. The $Ad^2$ term in the theorem accounts for this additional "difficulty" due to shifting the axis away from the centroid. The larger the area $A$ and the further away ($d$) the new axis is from the centroidal axis, the greater the increase in moment of inertia.

**How we use it for Composite Areas:**
This theorem is absolutely essential for finding the moment of inertia of composite areas. Here's the typical process:

1.  **Divide the composite area** into simple shapes (rectangles, circles, triangles, etc.).
2.  **For each simple shape:**
    *   Find its area ($A_i$).
    *   Locate its centroid $(\bar{x}_i, \bar{y}_i)$.
    *   Calculate its moment of inertia ($I_{\bar{x}_i}$ or $I_{\bar{y}_i}$) about an axis passing through *its own centroid* and parallel to the desired reference axis for the composite area. (You'll need to know the standard formulas for these).
    *   Determine the distance ($d_i$) from the centroid of the simple shape to the *reference axis* for the composite area.
    *   Use the parallel axis theorem to find the moment of inertia of that simple shape about the reference axis: $I_{x_i} = I_{\bar{x}_i} + A_i d_{ix}^2$.
3.  **Sum up the moments of inertia** of all the simple shapes about the reference axis to get the total moment of inertia for the composite area: $I_x = \sum I_{x_i}$.

**Example:** Consider an I-beam's cross-section. It's made of a web (rectangle) and two flanges (rectangles). To find the moment of inertia of the entire I-beam about its horizontal centroidal axis, we'd calculate the $I_x$ for each flange and the web using the parallel axis theorem (if the axis we need isn't the centroidal axis of the individual flange/web itself), and then sum them up. This is exactly how engineers design beams for bridges, buildings, and aircraft – they need to know how the shape resists bending. This is a direct application of CO4 and even touches on CO5 for dynamic situations.

**Textbook Connection:** You'll find extensive examples of this in Timoshenko and Young, Hibbeler, Shames, and Bansal, often showing how to calculate the moment of inertia for common structural shapes like channels, angles, and built-up sections.

## 4. Perpendicular Axis Theorem: For Planar Areas

Finally, we have the **Perpendicular Axis Theorem**. This theorem is specific to planar areas (areas lying in a single plane) and relates the moments of inertia about two perpendicular axes in that plane to the **polar moment of inertia**.

**The Theorem Explained**

If we have a planar area $A$ lying in the xy-plane, and we know its moments of inertia about the x and y axes as $I_x$ and $I_y$ respectively, then the **polar moment of inertia** ($J_O$ or $I_O$) about the z-axis (which is perpendicular to the xy-plane and passes through the origin O) is given by:

$J_O = I_x + I_y$

**What is Polar Moment of Inertia?**
The polar moment of inertia measures an area's resistance to twisting or torsion about an axis perpendicular to the plane of the area.

**Intuition:** Imagine trying to twist a solid rod. It resists this twisting based on how its area is distributed around the center. The polar moment of inertia quantifies this resistance. For circular shafts, the polar moment of inertia is particularly important.

**Connection to Course Outcomes:** This theorem is crucial for analyzing torsional loads (CO2, CO4). For example, when a circular shaft transmits torque, the stresses induced depend on its polar moment of inertia. For a circular shaft of radius $r$, $J_O = \frac{\pi r^4}{2}$. This is often derived using the perpendicular axis theorem if you know $I_x$ and $I_y$ for the circle.

**Important Note:** The perpendicular axis theorem applies to moments of inertia taken about axes that intersect. The parallel axis theorem applies to moments of inertia taken about parallel axes. They are distinct but equally powerful tools.

## Summary and Key Takeaways

*   **Centroid of Composite Areas:** Break down complex shapes into simple ones, find individual centroids and areas, and use weighted averages $(\bar{X} = \frac{\sum A_i \bar{x}_i}{\sum A_i})$ to find the overall centroid. Remember to treat holes as negative areas. Crucial for understanding the "average" location of an area.
*   **Moment of Inertia:** Measures an area's resistance to bending/twisting. Calculated by integrating $y^2 dA$ or $x^2 dA$. Standard formulas for basic shapes are essential.
*   **Parallel Axis Theorem ($I_x = I_{\bar{x}} + Ad^2$):** Allows us to find the moment of inertia about any axis if we know it about a parallel axis through the centroid. Absolutely vital for composite areas.
*   **Perpendicular Axis Theorem ($J_O = I_x + I_y$):** Relates in-plane moments of inertia ($I_x, I_y$) to the polar moment of inertia ($J_O$). Key for torsional analysis.

These concepts are the bedrock for many subsequent analyses in mechanics. Mastering them will make your journey through statics and dynamics much smoother. Pay close attention to the examples in your textbooks and practice applying these theorems diligently.

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style:

**Q1. Conceptual Question:**
Why is the term $Ad^2$ in the parallel axis theorem squared? How does this relate to the physical meaning of moment of inertia?

**Answer:**
The term $Ad^2$ is squared because the moment of inertia is a measure of how an area resists angular acceleration, and this resistance is proportional to the square of the distance from the axis of rotation. Think about Newton's second law for rotation: $M = I \alpha$. The moment of inertia ($I$) is the rotational equivalent of mass. Just as linear inertia (mass) is related to how much force it takes to change linear velocity, rotational inertia is related to how much torque it takes to change angular velocity. The further an element of area is from the axis, the greater its contribution to resisting rotation, and this contribution grows quadratically with distance. So, a small area far away has a much larger impact than the same small area close by. The $A$ represents the total area, and $d^2$ represents the effect of its distribution at that distance.

**Q2. Exam-Oriented Question:**
A T-shaped beam cross-section is formed by a horizontal flange of width 150 mm and thickness 20 mm, welded to a vertical web of width 30 mm and height 180 mm. Calculate the moment of inertia of the cross-section about its horizontal centroidal axis.

**Given:**
*   Flange: Width ($b_f$) = 150 mm, Thickness ($t_f$) = 20 mm
*   Web: Width ($b_w$) = 30 mm, Height ($h_w$) = 180 mm

**Solution:**

**(a) Determine the Centroidal Axis:**
First, we need to find the centroid of this composite T-section. Let's set up a coordinate system with the origin at the bottom of the web.
*   Total area $A = A_{flange} + A_{web}$
    *   $A_{flange} = 150 \times 20 = 3000 \text{ mm}^2$
    *   $A_{web} = 30 \times 180 = 5400 \text{ mm}^2$
    *   $A_{total} = 3000 + 5400 = 8400 \text{ mm}^2$

*   Let's find $\bar{Y}$, the distance of the centroid from the bottom of the web:
    *   Centroid of flange ($\bar{y}_{flange}$) = $180 + 10 = 190$ mm (measured from bottom of web)
    *   Centroid of web ($\bar{y}_{web}$) = $180 / 2 = 90$ mm (measured from bottom of web)

    *   $\bar{Y} = \frac{\sum A_i \bar{y}_i}{\sum A_i} = \frac{(A_{flange} \times \bar{y}_{flange}) + (A_{web} \times \bar{y}_{web})}{A_{total}}$
    *   $\bar{Y} = \frac{(3000 \times 190) + (5400 \times 90)}{8400}$
    *   $\bar{Y} = \frac{570000 + 486000}{8400} = \frac{1056000}{8400} \approx 125.71$ mm

The horizontal centroidal axis is approximately 125.71 mm from the bottom of the web.

**(b) Calculate Moment of Inertia about the Centroidal Axis:**
Now, we use the parallel axis theorem for each part about this horizontal centroidal axis.

*   **For the Flange:**
    *   Area $A_f = 3000 \text{ mm}^2$
    *   Centroidal moment of inertia of flange about its own horizontal axis: $I_{\bar{x}, flange} = \frac{b_f t_f^3}{12} = \frac{150 \times 20^3}{12} = 100,000 \text{ mm}^4$
    *   Distance from flange centroid to overall centroidal axis ($d_f$): The flange's top is at 200 mm from the bottom. Its centroid is at 190 mm. The overall centroid is at 125.71 mm. So, $d_f = 190 - 125.71 = 64.29$ mm.
    *   Moment of inertia of flange about the overall centroidal axis:
        $I_{x, flange} = I_{\bar{x}, flange} + A_f d_f^2 = 100,000 + (3000 \times (64.29)^2)$
        $I_{x, flange} = 100,000 + (3000 \times 4133.1) = 100,000 + 12,399,300 = 12,499,300 \text{ mm}^4$

*   **For the Web:**
    *   Area $A_w = 5400 \text{ mm}^2$
    *   Centroidal moment of inertia of web about its own horizontal axis: $I_{\bar{x}, web} = \frac{b_w h_w^3}{12} = \frac{30 \times 180^3}{12} = 14,580,000 \text{ mm}^4$
    *   Distance from web centroid to overall centroidal axis ($d_w$): The web's centroid is at 90 mm from the bottom. The overall centroid is at 125.71 mm. So, $d_w = 125.71 - 90 = 35.71$ mm.
    *   Moment of inertia of web about the overall centroidal axis:
        $I_{x, web} = I_{\bar{x}, web} + A_w d_w^2 = 14,580,000 + (5400 \times (35.71)^2)$
        $I_{x, web} = 14,580,000 + (5400 \times 1275.2) = 14,580,000 + 6,886,080 = 21,466,080 \text{ mm}^4$

**(c) Total Moment of Inertia:**
The total moment of inertia of the T-section about the horizontal centroidal axis is the sum of the moments of inertia of its parts:
$I_x = I_{x, flange} + I_{x, web}$
$I_x = 12,499,300 + 21,466,080 = 33,965,380 \text{ mm}^4$

**Final Answer:** The moment of inertia of the T-shaped beam cross-section about its horizontal centroidal axis is approximately $33.97 \times 10^6 \text{ mm}^4$ or $33.97 \times 10^{-6} \text{ m}^4$.

**Q3. True or False:**
The polar moment of inertia of an area is always equal to the sum of its moments of inertia about two perpendicular axes in the plane of the area.

**Answer:**
True. This is the statement of the Perpendicular Axis Theorem ($J_O = I_x + I_y$).
