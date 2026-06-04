---
title: "Projection of straight lines inclined to one plane and inclined to both planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 1: Introduction:  Relevance of technical drawing in engineering field."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0a4"
status: "completed"
scrapedAt: "2026-05-23T17:33:49.652Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 1: Introduction: Relevance of Technical Drawing in Engineering Field

### Topic: Projection of Straight Lines Inclined to One Plane and Inclined to Both Planes

Welcome to our exploration of technical drawing, the visual language of engineering! Before we dive into the nitty-gritty of drawing lines, let's briefly touch upon why this skill is so fundamental. Think about it: how do we communicate complex engineering designs – from a tiny microchip to a massive bridge – without a common, precise visual language? Technical drawing, or engineering graphics, provides that language. It's not just about making pretty pictures; it's about conveying information accurately and unambiguously. As your textbooks like Bhatt's "Engineering Drawing" and Varghese's "Engineering Graphics" emphasize, it's crucial for design, manufacturing, and communication. This foundational module sets the stage for everything we'll do, and understanding the projection of lines is a key stepping stone.

This topic directly addresses **Course Outcome 1: Understand the projection of points and lines located in different quadrants (Knowledge Level: K2)**. By mastering the projection of lines, we're building the essential groundwork for understanding how objects are represented in 2D views, which is vital for achieving **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions (Knowledge Level: K3)**.

### The Essence of Projection: Seeing in 2D

Imagine you have a physical object, say, a pencil. How do you represent that 3D object on a flat piece of paper? That's where projection comes in. We essentially cast a "shadow" of the object onto a plane using projectors – imaginary lines perpendicular to the plane.

In engineering graphics, we primarily use two main projection methods:

*   **Orthographic Projection:** This is the most common. We view the object along lines parallel to the principal axes. This gives us distinct views – front view, top view, side view – each showing different faces of the object. Think of it like looking at a building from the front, from directly above, and from the side. Each view is a 2D projection.
*   **Pictorial Projection:** This gives a more realistic, 3D-like view on a 2D plane. Isometric projection, which we'll cover later, is a prime example.

### Understanding the Planes of Projection

We typically work with two fundamental planes of projection, arranged in a way that allows us to represent an object in 3D space using 2D views:

1.  **Horizontal Plane (HP):** This is often visualized as the ground or the plane we look down upon (top view).
2.  **Vertical Plane (VP):** This is the plane we look at from the front (front view).

These planes intersect at a right angle, creating four quadrants. While we often place objects in the first quadrant for our drawings (an imaginary space above HP and in front of VP), understanding all quadrants is essential for a complete grasp of projection principles, as stated in **CO1**.

### The "Line" of Our Discussion: Projection of Straight Lines

Now, let's focus on lines. Lines are the building blocks of any drawing. When a line is inclined to one or both of these planes, its projection onto those planes will appear shorter than its actual length. This is a fundamental concept we need to grasp.

#### Case 1: Line Inclined to One Plane (and Perpendicular to the Other)

This is our starting point, a good way to build understanding. Let's consider a line that is inclined to the **Vertical Plane (VP)** but is **perpendicular to the Horizontal Plane (HP)**.

**Analogy Time:** Imagine a flagpole standing on the ground. The flagpole is our line.
*   It's standing upright, perpendicular to the ground (HP).
*   It's also leaning *towards* you (or away from you), meaning it's inclined to the plane you'd see it from the front (VP).

Let's visualize what happens when we project this flagpole onto the VP and HP:

*   **Projection onto VP (Front View):** Since the flagpole is inclined to the VP, its projection onto the VP will be a **line**. This line will *not* be its true length because it's not parallel to the VP. The length of this projected line will depend on the angle it makes with the HP. We call the angle it makes with the HP its **"true inclination"**.
*   **Projection onto HP (Top View):** Now, think about looking down at the flagpole from directly above. Since it's standing perpendicular to the ground, its projection onto the HP will simply be a **point**. This point represents the base of the flagpole.

**Key Terms to Remember:**

*   **True Length (TL):** The actual length of the line.
*   **Apparent Length:** The length of the projected line on a plane to which it is not parallel.
*   **Inclination:** The angle a line makes with a plane.

When a line is inclined to one plane and perpendicular to the other, its projection on the plane it's perpendicular to will be a point, and its projection on the plane it's inclined to will be a line equal to its true length (if it were parallel to the other plane and inclined to this one).

Let's clarify this with a common scenario: A line is inclined to the VP and *parallel* to the HP.
*   **Front View:** The line is inclined to VP, so its projection on VP (Front View) will be a line, but it won't be the true length. Its length will depend on its angle with the VP.
*   **Top View:** Since the line is parallel to the HP, its projection on HP (Top View) will be a line equal to its **true length**, and it will show the true angle the line makes with the VP.

Think of holding a ruler parallel to the floor (HP) and tilting it slightly away from you.
*   Looking from the front, the ruler appears foreshortened (shorter than its actual length).
*   Looking from the top, the ruler appears as its full length, and you can clearly see how much it's tilted away from you.

This is a crucial starting point for understanding how the views relate to the object's orientation.

#### Case 2: Line Inclined to Both Planes

This is where it gets more interesting and where we start to see the power of orthographic projection. Now, our line is not parallel to either the HP or the VP. It's tilted in both directions.

**Analogy Time:** Imagine a rigid rod or a ski pole that's not standing straight up, nor is it lying flat on the ground, nor is it perfectly vertical. It's tilted both sideways and forwards/backwards.

Let's consider a line *AB*.
*   Let the true length of the line be $L$.
*   Let the angle it makes with the **Horizontal Plane (HP)** be $\theta$ (theta). This is its **True Inclination to HP**.
*   Let the angle it makes with the **Vertical Plane (VP)** be $\phi$ (phi). This is its **True Inclination to VP**.

When we project this line *AB* onto the HP and VP, what do we see?

*   **Projection onto VP (Front View):**
    *   The projection will be a **line**, let's call it $a'b'$.
    *   This line $a'b'$ will **not** be the true length of the line $AB$.
    *   The angle this line $a'b'$ makes with the **XY line** (the intersection of HP and VP) is called the **Apparent Inclination to VP**.
    *   The length of $a'b'$ is related to the true length $L$ and its inclination to the VP ($\phi$). Specifically, the length of $a'b'$ is $L \cos \phi$.
    *   The front view ($a'b'$) will show the true inclination to the **HP** ($\theta$). This is a vital point! The front view shows the angle the line makes with the HP.

*   **Projection onto HP (Top View):**
    *   The projection will be a **line**, let's call it $ab$.
    *   This line $ab$ will also **not** be the true length of the line $AB$.
    *   The angle this line $ab$ makes with the **XY line** is called the **Apparent Inclination to HP**.
    *   The length of $ab$ is related to the true length $L$ and its inclination to the HP ($\theta$). Specifically, the length of $ab$ is $L \cos \theta$.
    *   The top view ($ab$) will show the true inclination to the **VP** ($\phi$). This is the counterpart to the front view observation. The top view shows the angle the line makes with the VP.

**How to Draw Them: The Steps (and why they work!)**

This is where the practical application comes in, and textbooks like Benjamin's "Engineering Graphics" provide excellent step-by-step methods.

Let's say we are given the following:
*   The true length of the line ($L$).
*   The angle the line makes with HP ($\theta$).
*   The angle the line makes with VP ($\phi$).
*   The position of one end (say, point A) with respect to HP and VP (e.g., $A$ is 20mm above HP and 30mm in front of VP).

Here's a common approach to construct the projections:

1.  **Locate the Front View of Point A (a'):** If A is 20mm above HP, then $a'$ will be 20mm above the XY line.
2.  **Locate the Top View of Point A (a):** If A is 30mm in front of VP, then $a$ will be 30mm below the XY line.
3.  **Draw the Front View (a'b'):** From $a'$, draw a line $a'b'$ of length $L \cos \phi$ at an angle $\theta$ to the XY line. (Remember, the front view shows the angle with HP).
4.  **Draw the Top View (ab):** From $a$, draw a line $ab$ of length $L \cos \theta$ at an angle $\phi$ to the XY line. (Remember, the top view shows the angle with VP).
5.  **Find the Location of b' and b:**
    *   Drop a perpendicular from $b'$ (from step 3) to the XY line. The intersection point is $b$.
    *   Draw a projector from $b$ vertically up to meet the line $a'b'$ drawn in step 3. This intersection point is $b'$.
    *   Alternatively, extend the line $ab$ (from step 4) until it intersects the projector from $a'$ (on the XY line). This point is $b'$. Then, from $b'$, drop a perpendicular to the XY line to get $b$. Or, from $b$, draw a projector upwards to intersect $a'b'$.

**A More Intuitive Construction Method (The 'Locus' Method or 'Auxiliary Plane' Concept):**

This method is often used to find the true length and inclinations. It's conceptually elegant and directly relates to how we might measure the true length of something tilted.

Imagine you have the front view ($a'b'$) and top view ($ab$) already drawn for a line inclined to both planes. How do you find its true length?

1.  **Find the True Length in the Front View:**
    *   Take the top view line $ab$.
    *   From point $a$ (in the top view), draw a line parallel to the XY line, extending it to the right.
    *   Now, from point $b'$ (in the front view), draw a line parallel to the XY line, extending it to the right.
    *   The point where the locus from $a$ (parallel to XY) and the locus from $b'$ (parallel to XY) intersect is **not** what we need here.
    *   Instead, take the front view $a'b'$. Rotate the top view line $ab$ about point $a$ so that it becomes parallel to the VP. To do this graphically, you would typically redraw the top view in an "imaginary" plane, or use a locus method.
    *   **The standard technique:**
        *   From $a'$, draw a line parallel to the XY line to the right.
        *   From $b$, draw a line parallel to the XY line to the right.
        *   The length of the line segment connecting $a'$ to this extended line from $b$ would be the true length *if* the line was inclined only to HP. This is not quite right.

    *   **Let's get this right:** To find the true length from the front view and top view:
        *   Take the **front view line $a'b'$**.
        *   From $a'$, draw a line parallel to the XY line, say $a'x$.
        *   From $b$, draw a line parallel to the XY line, say $bx$.
        *   The line segment $a'b$ is **not** the true length.

    *   **The correct way to find the true length and inclinations using a single diagram:**
        *   Locate $a'$ and $a$ as usual.
        *   From $a'$, draw the front view line $a'b'$ making angle $\theta$ with XY and having some length (e.g., the apparent length in front view).
        *   From $a$, draw the top view line $ab$ making angle $\phi$ with XY and having some length (e.g., the apparent length in top view).
        *   Now, to find the true length:
            *   Take the **top view line $ab$**.
            *   From point $a$, draw a line parallel to the XY line, extending it to the right. Let this line be $ax$.
            *   Now, from $b$, draw a line that is perpendicular to $ax$. The point where this perpendicular intersects $ax$ is **not** what we need.

            *   **Correct Construction for True Length (TL):**
                1.  Draw the front view and top view of the endpoints of the line.
                2.  Take the **top view line $ab$**.
                3.  From point $a$, draw a line parallel to the XY line, extending it to the right.
                4.  From point $b$, draw a line perpendicular to the XY line, extending it upwards.
                5.  The line segment from $a'$ to $b$ (projected onto a plane parallel to the VP and containing $a'$) will give the true length.

            *   **The standard and much simpler method:**
                1.  Draw the front view $a'b'$ and top view $ab$.
                2.  From $a'$, draw a line parallel to the XY line, extending to the right.
                3.  From $b$, draw a line perpendicular to the XY line, extending upwards.
                4.  The distance from $a'$ to the intersection point of the projector from $b$ onto the line parallel to XY from $a'$ **is not** the true length.

                *   **Let's re-focus on the fundamental principle taught in books like K.C. John:**
                    *   The true length ($TL$) of a line $AB$ is the distance between its endpoints $A$ and $B$.
                    *   In the front view ($a'b'$), the apparent length is $L \cos \phi$. The angle with HP is $\theta$.
                    *   In the top view ($ab$), the apparent length is $L \cos \theta$. The angle with VP is $\phi$.

                    *   **To find the True Length (TL) and True Inclinations:**
                        *   Draw the front view and top view.
                        *   From $a'$, draw a line parallel to the XY line to the right.
                        *   From $b$, draw a line perpendicular to the XY line, extending upwards until it meets the line drawn from $a'$. Let this intersection be $T_f$.
                        *   The line segment $a'T_f$ is the **True Length (TL)** of the line.
                        *   The angle that $a'T_f$ makes with the XY line is the **True Inclination to HP ($\theta$)**.

                        *   Similarly, to find it from the top view:
                        *   From $a$, draw a line parallel to the XY line to the right.
                        *   From $b'$, draw a line perpendicular to the XY line, extending downwards until it meets the line drawn from $a$. Let this intersection be $T_t$.
                        *   The line segment $aT_t$ is also the **True Length (TL)** of the line.
                        *   The angle that $aT_t$ makes with the XY line is the **True Inclination to VP ($\phi$)**.

**Crucial Connection to CO1 and CO2:**
This process of finding TL and true inclinations by rotating the projected views is exactly how we build understanding for **CO1**. We are manipulating the 2D representations to reveal the 3D properties of the line. This is a direct precursor to **CO2**, where we'll use these principles to construct orthographic views of more complex objects. If you can't project a line correctly, you can't project a solid!

**Real-World Example:**
Imagine a ladder leaning against a wall.
*   The wall is our VP.
*   The ground is our HP.
*   The ladder is our line.

If the ladder is leaning against the wall and also angled slightly to the side (not directly perpendicular to the wall), it's inclined to both planes.

*   **Front View:** You see the ladder as a line, showing how far up the wall it reaches and its angle with the ground (true inclination to HP). The length you see is not its actual length.
*   **Top View:** You look down from above. You see the base of the ladder on the ground. It's a line showing how far out from the wall the base is, and its angle with the wall (true inclination to VP). Again, the length you see is not its actual length.

The method of "swinging" the top view to become parallel to the VP (or swinging the front view to become parallel to the HP) allows us to "unfold" the projection and see the actual length of the ladder and its true angles. This is exactly what the construction method described above achieves.

### Important Considerations and Common Pitfalls

*   **XY Line:** Always draw the XY line first. It's your reference.
*   **Projections:** Ensure your projectors (lines perpendicular to XY) are drawn correctly. They connect the front view of a point to its top view.
*   **Notation:** Use $a', b'$ for the front view and $a, b$ for the top view. This is standard.
*   **Angles:** Be careful to distinguish between true inclinations ($\theta$, $\phi$) and apparent inclinations (angles of $a'b'$ and $ab$ with XY).
*   **True Length Construction:** Make sure you are rotating the correct view onto the correct plane to find the true length. It's often the top view being rotated to be parallel to the VP (to be seen in true length in the front view plane), or vice-versa. The construction described above (swinging from $b$ to meet the locus from $a'$) is the standard method.

**Remember this:** The front view ($a'b'$) shows the angle with HP ($\theta$), and its length is $L \cos \phi$. The top view ($ab$) shows the angle with VP ($\phi$), and its length is $L \cos \theta$. When you "unfold" the views to find the true length, you are essentially creating a right-angled triangle where one side is the apparent length, another side is the "height" (distance of the endpoint from the HP/VP), and the hypotenuse is the true length.

### Connecting to Course Outcomes

*   **CO1 (K2 - Knowledge):** We've covered how lines are projected and the terminology associated with their inclinations and projections. You know what true length, apparent length, and the different angles mean.
*   **CO2 (K3 - Understanding):** By understanding how a line's orientation affects its projections, you are building the visualization skills needed to create multiview orthographic projections of objects. If you can draw a line inclined to both planes, you can draw the edges of a cube or pyramid.

### Sample Questions and Answers

**Question 1 (Conceptual):**
If a line is parallel to the Horizontal Plane (HP) and perpendicular to the Vertical Plane (VP), what would its projection on the HP and VP look like?

**Answer:**
*   **Projection on HP (Top View):** Since the line is parallel to HP, its projection on HP will be a **line equal to its true length**.
*   **Projection on VP (Front View):** Since the line is perpendicular to VP, its projection on VP will be a **point**. This point will be located on the XY line, provided the line is in the first quadrant and touches the VP.

**Reasoning:** A line parallel to a plane projects as its true length onto that plane. A line perpendicular to a plane projects as a point onto that plane.

---

**Question 2 (Exam-Oriented):**
A line AB is 60 mm long. It is inclined at 30° to the Horizontal Plane (HP) and at 45° to the Vertical Plane (VP). The end A is 20 mm above HP and 30 mm in front of VP. Draw the projections of the line AB. Find the apparent lengths of the front and top views and the apparent inclinations.

**Solution Approach:**

1.  **Given:**
    *   True Length (TL) = 60 mm
    *   True Inclination to HP ($\theta$) = 30°
    *   True Inclination to VP ($\phi$) = 45°
    *   End A: $a'$ is 20 mm above XY, $a$ is 30 mm below XY.

2.  **Calculate Apparent Lengths:**
    *   Apparent Length in Front View (Length of $a'b'$) = TL * $\cos \phi$ = 60 * $\cos 45°$ = 60 * 0.7071 ≈ 42.43 mm.
    *   Apparent Length in Top View (Length of $ab$) = TL * $\cos \theta$ = 60 * $\cos 30°$ = 60 * 0.8660 ≈ 51.96 mm.

3.  **Construct the Projections:**
    *   Draw the XY line.
    *   Locate $a'$ at 20 mm above XY.
    *   Locate $a$ at 30 mm below XY.
    *   From $a'$, draw a line $a'b'$ making an angle of 30° (the true inclination to HP) with XY. The length of $a'b'$ will be approximately 42.43 mm (calculated apparent length in FV).
    *   From $a$, draw a line $ab$ making an angle of 45° (the true inclination to VP) with XY. The length of $ab$ will be approximately 51.96 mm (calculated apparent length in TV).
    *   Now, to find the correct position of $b'$ and $b$:
        *   From $b'$ (end of apparent FV), drop a perpendicular to the XY line. This intersection is point $b$.
        *   From $b$ (end of apparent TV), draw a projector vertically upwards to intersect the line $a'b'$. This intersection is point $b'$.
    *   Verify that the angle made by $a'b'$ with XY is indeed 30° (this should be the case if apparent length was used correctly) and the angle made by $ab$ with XY is 45°.
    *   Also, check that the apparent length of $a'b'$ is indeed ~42.43 mm and $ab$ is ~51.96 mm.

4.  **Find Apparent Inclinations:**
    *   The angle that $a'b'$ makes with the XY line is its apparent inclination to VP. From the construction, it should be approximately 30°. (Wait, this is where careful reading of the question and your notes is important. The **front view** of a line inclined to both planes shows its **true inclination to HP** and its **apparent inclination to VP** is the angle of $a'b'$ with XY. Similarly, the **top view** shows its **true inclination to VP** and its **apparent inclination to HP** is the angle of $ab$ with XY.)
    *   So, the angle of $a'b'$ with XY is the **apparent inclination to VP**.
    *   The angle of $ab$ with XY is the **apparent inclination to HP**.

    *   **Correction:** The construction above might have a slight confusion. Let's use the method that directly yields the correct apparent lengths and angles:
        1.  Locate $a'$ (20mm above XY) and $a$ (30mm below XY).
        2.  From $a'$, draw a line at 30° to XY (true $\theta$). This will be the front view $a'b'$.
        3.  From $a$, draw a line at 45° to XY (true $\phi$). This will be the top view $ab$.
        4.  Now, project $b'$ down to the XY line to get $b$.
        5.  Project $b$ up to meet the line from $a'$ to get $b'$.
        6.  The **length of $a'b'$** is the apparent length in the front view. This should be $60 \cos 45° \approx 42.43$ mm.
        7.  The **length of $ab$** is the apparent length in the top view. This should be $60 \cos 30° \approx 51.96$ mm.
        8.  The angle that $a'b'$ makes with XY is the apparent inclination to VP.
        9.  The angle that $ab$ makes with XY is the apparent inclination to HP.

This question is testing your ability to use the given true length and true inclinations to find the projected lengths and then construct the views, which then reveal the apparent inclinations. It directly applies **CO1 (K2)** and is a stepping stone for **CO2 (K3)**.

---

**Question 3 (Conceptual):**
How do you find the true length of a line when its front and top views are given?

**Answer:**
To find the true length of a line when its front view ($a'b'$) and top view ($ab$) are given:
1.  Take the top view line $ab$.
2.  From point $a$, draw a line parallel to the XY line, extending it to the right.
3.  From point $b$, draw a line perpendicular to the XY line, extending upwards.
4.  The distance from $a'$ (front view of $a$) to the point where the projector from $b$ intersects the locus parallel to XY from $a'$ is the true length of the line. This segment forms the hypotenuse of a right-angled triangle.

**Reasoning:** This method effectively "unfolds" the projection. By rotating the top view about point $a$ until it becomes parallel to the VP (which is represented by the line parallel to XY from $a'$), we can measure the true distance between the endpoints in a single plane. This process is also used to find the true inclinations. This reinforces **CO1 (K2)** by showing how to recover 3D information from 2D projections.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
