---
title: "Projection of solids with axis inclined to one of the reference planes and with  axis inclined to both reference planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone Cylinder and tetrahedron."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e8382e"
status: "completed"
scrapedAt: "2026-05-20T17:43:46.206Z"
---
## Engineering Graphics and Computer Aided Drawing
### Module 2: Projection of Simple Solids

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### Topic: Projection of Solids with Axis Inclined to One or Both Reference Planes

Welcome back, everyone! In our previous discussions in Module 2, we've mastered the projections of simple solids – prisms, pyramids, cones, cylinders, and tetrahedrons – when their axes were either perpendicular or parallel to one of the reference planes. Today, we're going to tackle a slightly more involved, but incredibly important, scenario: projecting these solids when their axes are inclined. This is where the real art of visualizing and translating 3D objects onto 2D planes comes into play, and it directly links to our **Course Outcome 2 (CO2): Prepare Multiview orthographic projections of objects by visualizing them in different positions**. Understanding these inclined projections is crucial for accurately representing objects in engineering drawings, which is a foundational skill.

#### Understanding the "Inclination"

Before we dive into the drawing process, let's clarify what we mean by "inclination." When we say a solid's axis is inclined, it means the imaginary line connecting the center of the base to the apex (for pyramids and cones) or the centers of the two bases (for prisms and cylinders) is **not** parallel or perpendicular to the Horizontal Plane (HP) or the Vertical Plane (VP). Instead, it makes an angle with one or both of these planes. This is a common situation in real-world engineering – think of a ramp, a slanted roof, or a machine part that isn't perfectly upright.

##### Why is this important for our Course Outcomes?

Remember, our goal in Engineering Graphics is to create drawings that allow someone else to perfectly visualize and even manufacture the object. If a part is tilted, simply drawing it in a standard orthographic view won't accurately show its true shape or its relationship with other components. By learning to project solids with inclined axes, we develop the ability to "see" how these objects appear from different viewpoints and can accurately represent them on paper or screen, which is key to **CO2**.

#### Case 1: Solid's Axis Inclined to One Reference Plane (and hence, naturally, to the other)

This is our starting point. Usually, we'll find the axis is inclined to the **Horizontal Plane (HP)**. When the axis is inclined to the HP, it will automatically be inclined to the VP as well, unless it's parallel to the VP (which is a different case we'll touch upon briefly). More commonly, when we say "inclined to one plane," we imply it makes a specified angle with that plane.

Let's break down the process with a practical example, say, a **Square Pyramid**.

Imagine you have a square pyramid, perhaps like a small decorative piece or a part of a larger structure. In its standard position, its base is on the HP, and its axis is perpendicular to the HP and parallel to the VP. Now, imagine you pick it up and tilt it so that the apex is lower than the base, and the axis makes an angle of, say, 45 degrees with the HP.

**Key Concept: True Length of the Axis**
When the axis is inclined to the HP, its projection in the Top View (TV) will be shorter than its actual length. Similarly, its projection in the Front View (FV) will be shorter than its actual length. This is because of foreshortening. To correctly represent the inclination, we need to know the *true length* of the axis.

**Step-by-Step Drawing Process (General Approach):**

Let's consider a **Square Pyramid with its base on the HP and its axis inclined to the HP**. This is a very common problem.

1.  **Initial Position:** First, draw the projections of the pyramid when its base is on the HP and its axis is perpendicular to the HP. This means the TV will show the square base and the apex as a dot at the center of the base. The FV will show a triangle with the base on the XY line and the apex above it, with the height representing the true length of the axis.

2.  **Introducing the Inclination (The "Auxiliary View" Trick):** Here’s where a clever technique comes in. We want the axis to be at a certain angle to the HP.
    *   We can achieve this by keeping the **base in its true shape and size** in one of the views. If the base is on the HP, it will be seen in its true shape and size in the **Top View (TV)**.
    *   So, we start by drawing the pyramid in a position where its **base is resting on the HP**, meaning the TV shows the true shape of the base. In this initial position, the axis might be vertical or inclined to VP.
    *   Now, we need to tilt the solid so the axis makes the required angle with the HP. The easiest way to visualize this is to imagine the solid pivoting on an edge of its base or a corner of its base.
    *   Let's say we tilt it such that one corner of the base stays on the ground (on the HP). In the TV, we'll draw the square base. Now, we need to tilt the pyramid so the axis makes the given angle with the HP.
    *   A very common and practical method is to **draw the Front View (FV) first**, with the axis making the desired angle with the XY line (which represents the HP). In this FV, the base will be a line (or appear foreshortened if it's not perpendicular to the direction of viewing).
    *   Once the FV is drawn with the inclined axis and the foreshortened base, we can project the points from this FV down to the TV. The TV will then show the foreshortened base and the apex.

3.  **The "Resting on a Corner" or "Resting on an Edge" Strategy:**
    *   **Resting on a Corner of the Base:** If the pyramid is tilted so that one corner of its base rests on the HP, and the axis is inclined to the HP at angle $\phi$. In the FV, we draw the apex and the base as a line. The axis will be inclined at $\phi$ to the XY line. The base edge will be seen foreshortened. We then project points from this FV to the TV. The TV will show the base in a different shape and the apex.
    *   **Resting on an Edge of the Base:** If the pyramid is tilted so that one edge of its base rests on the HP, and the axis is inclined to the HP at angle $\phi$. In the FV, we draw the apex and the base as a line. The axis will be inclined at $\phi$ to the XY line. The base edge will be seen foreshortened. We then project points from this FV to the TV. The TV will show the base in a different shape and the apex.

**A More Universal Approach (Often Easier for Exams):**

Many textbooks, including **Benjamin's "Engineering Graphics"**, suggest a method that's particularly useful for exam-style problems.

1.  **Auxiliary First Position:** Draw the solid in a position where its axis is **perpendicular to the HP**, and the base is on the HP. This means the TV will show the true shape of the base, and the FV will be a triangle (for a pyramid) or a rectangle (for a prism), with the height showing the true length of the axis.
2.  **The Tilt:** Now, we want to tilt the solid. The key is to imagine the solid tilting *away* from the observer (in the FV) such that the axis makes the required angle with the HP.
    *   In the **Front View (FV)**, redraw the solid such that its axis makes the given angle ($\phi$) with the XY line. This will make the base appear as a line segment, foreshortened. The apex will be at the correct position relative to this line.
    *   Now, we need to find the corresponding **Top View (TV)**. This is where we use an auxiliary plane. Imagine an auxiliary plane placed parallel to the line representing the base in the tilted FV. The true shape of the base will appear on this auxiliary plane if we view it perpendicularly. However, we need to project onto the HP (our standard TV).
    *   The crucial step is to project points from the tilted FV to the TV. From each visible point in the tilted FV, draw a projector **perpendicular** to the XY line. From the corresponding point in the *initial* position's TV (the one with the true base shape), draw a projector **parallel** to the tilted axis (or perpendicular to the XY line in the FV). The intersection of these projectors gives the new position of the point in the TV.

**Let's visualize this with a Square Prism:**

Imagine a square prism with its base on the HP.
*   **Initial Position (Axis Perpendicular to HP):** TV shows a square. FV shows a rectangle.
*   **Tilting the Prism (Axis Inclined to HP at 45 degrees):**
    *   In the FV, redraw the rectangle such that the axis (the line connecting the center of the top face to the center of the bottom face) makes 45 degrees with the XY line. The base will appear foreshortened.
    *   Now, to get the TV: Take points from the FV (say, corners of the prism). Draw projectors **perpendicular** to the XY line from these points in the FV. Take the corresponding points from the *original* TV (the true square base). Draw projectors from these points **parallel** to the tilted axis in the FV. The intersection gives the points in the new TV. This is essentially transferring the shape of the base from the initial TV to a new position in the TV, guided by the FV.

**Connecting to CO2 and Visualization:**
This process directly helps us **visualize how the object changes its appearance** when tilted. The FV shows the tilt relative to the horizontal plane, and the TV shows the resulting top-down view. This is applying the principles of orthographic projection to a non-standard orientation. **John's "Engineering Graphics for degree"** often provides excellent diagrams illustrating these projection methods.

**What about Inclination to the VP?**
If a solid's axis is inclined to the VP, but perpendicular to the HP, the approach is analogous. You'd draw the initial projections (axis perpendicular to VP), then tilt it in the *Top View* (TV) to achieve the desired angle with the XY line, and then project back to the FV.

**Key Takeaway:** The strategy is often to first draw the solid in a "simple" position (axis perpendicular to one plane), then tilt it to achieve the desired angle in one view (usually FV), and then project to get the other view.

#### Case 2: Solid's Axis Inclined to Both Reference Planes (HP and VP)

This is where things get a bit more intricate, but the underlying principles remain the same. When the axis is inclined to both planes, it means the angle it makes with the HP is $\phi$, and the angle it makes with the VP is $\theta$. Remember, for a line (and the axis is a line), $\phi + \theta = 90^\circ$ **only if the line is inclined to both planes and not parallel to either**. If the axis is inclined to both, we'll be given $\phi$ (angle with HP) and $\theta$ (angle with VP), and these might not necessarily add up to 90 degrees if the solid is oriented in a very specific way.

**The "Double Auxiliary" Approach:**

Since we need to satisfy two inclination conditions simultaneously, we often use a two-stage projection process.

1.  **Stage 1: Axis Inclined to One Plane.** First, draw the solid with its axis inclined to **one** of the planes. Let's say we make the axis inclined to the HP at angle $\phi$. We follow the procedure from Case 1. So, we'll have a FV where the axis is at angle $\phi$ to the XY line, and a corresponding TV.

2.  **Stage 2: Tilting to Achieve the Second Inclination.** Now, we need to tilt this solid *further* so that the axis also makes the required angle $\theta$ with the VP.
    *   Consider the **Top View (TV)** from Stage 1. In this TV, the axis (as a projected line) will make some angle with the XY line. We need to tilt the solid so that the *true inclination* of the axis with the VP is $\theta$.
    *   The best way to think about this is to look at the **true length of the axis**. When the axis is inclined to both HP and VP, its projection in both FV and TV will be foreshortened. The true length of the axis is what makes the angles $\phi$ and $\theta$ with the planes.
    *   A common method is to **draw the FV with the axis inclined at $\phi$ to the HP**. Then, we need to rotate this entire setup around a point on the XY line (or a base edge) such that the axis, when projected onto the VP, makes an angle $\theta$ with the XY line. This is best illustrated using an auxiliary view.

**Let's use the FV as the guide:**

Imagine the FV from Stage 1, where the axis makes angle $\phi$ with the XY.
*   Now, we need to tilt this solid so that the axis makes an angle $\theta$ with the VP. This means if we were to look at the solid from the front, the top-down view of the axis should have a specific inclination.
*   Consider the **axis line in the FV**. Let its true length be $L$. Its projection in the FV is $L \cos \phi$.
*   We can create an **Auxiliary Vertical Plane (AVP)** that is perpendicular to the XY line and parallel to the direction of viewing for the FV.
*   Project all points from the FV onto this AVP. In this auxiliary view, the axis will be seen in its **true length** ($L$). We then tilt this auxiliary view so that the axis makes an angle $\theta$ with the line of intersection of the AVP and the HP (which is the XY line).
*   From this tilted auxiliary view, we project points back to the original FV and TV.

This might sound complicated, but the core idea is:
*   **When inclined to one plane (say HP):** Use the true shape in the *other* plane (TV) as a guide or use an auxiliary view to get the true inclination in the first view (FV).
*   **When inclined to both planes:** You essentially need to satisfy two conditions. This often involves an auxiliary projection to find the true length of the axis, and then orienting that true length to make the required angles.

**Relatable Analogy:**
Think of holding a stick. First, you tilt it so it makes a certain angle with the floor (HP). Then, you also want it to make a certain angle with the wall in front of you (VP). You have to adjust its position in both directions. Imagine the stick is attached to a pivot. You first tilt it up/down to get the angle with the floor. Then, while keeping that floor angle, you rotate it left/right to get the angle with the wall.

**Practical Exam Strategy for Double Inclination:**

A very common and reliable method taught in books like **Venugopal's "Engineering Drawing & Graphics"** and **Parthasarathy's "Engineering Drawing"** involves these steps:

1.  **Draw the projections of the solid with its axis inclined to HP at the given angle $\phi$.** This is your "Stage 1" projections (FV1 and TV1).
2.  **Now, consider the TV1.** In this view, the axis is foreshortened. We need to tilt the solid so that the axis makes the required angle $\theta$ with the VP. This means the projected length of the axis in the **FV** needs to be adjusted.
3.  **Draw an Auxiliary Front View (AFV):** Imagine a new plane parallel to the line of sight of the original FV. Project all points from FV1 onto this new plane. In this AFV, the axis will appear in its **true length**.
4.  **Tilt the AFV:** Now, tilt this AFV so that the axis (seen in true length in AFV) makes an angle $\theta$ with the XY line. This is the crucial step to satisfy the VP inclination.
5.  **Project back:** From the points in the tilted AFV, project them back to the original FV and TV.
    *   Projectors from the tilted AFV, **perpendicular to the XY line**, will give the new FV (FV2).
    *   Projectors from FV2, **perpendicular to the XY line**, will hit projectors from TV1 (which were drawn perpendicular to XY) at points corresponding to the new TV (TV2).

This two-stage projection ensures that the final projections satisfy both inclination conditions.

**Connection to CO2 and Visualization:**
This process is a direct application of **CO2**. We are not just drawing shapes; we are visualizing a solid that's tilted in 3D space and projecting it onto two perpendicular planes under complex orientation. The ability to use auxiliary views to find true lengths and then re-orient them is a key skill.

#### Special Cases and Considerations

*   **True Length of the Axis:** Often, the problem will give you the inclination of the **true length** of the axis. This simplifies things because you don't need an auxiliary view to find the true length of the axis itself, but you still need auxiliary projections to position the solid correctly.
*   **Resting Conditions:** Pay close attention to how the solid is resting. Is it on its base? On a corner of its base? On an edge of its base? On its apex (for a pyramid)? These conditions dictate the starting point and the nature of the projections. For instance, if a pyramid rests on its apex, the apex is on the HP.
*   **Visible Edges:** Always remember to determine which lines are visible and which are hidden in each view. A common rule: In the Front View, if a point is higher, it's generally visible. In the Top View, if a point is closer to the observer (usually lower on the drawing, or towards the right, depending on the projection setup), it's visible. However, for inclined solids, you need to be more careful. A point on the underside might still be visible if the solid is tilted significantly. You might need to check the position of points relative to the boundary of the solid in that view.
*   **Types of Solids:** The principles are general, but the specific shapes of the bases (triangle, square, pentagon, hexagon, circle for cones/cylinders) will affect the appearance of the projections. For example, a hexagonal prism will have more points to track than a triangular prism.

#### Computer-Aided Drawing (CAD) Aspects

While we’ve discussed the manual drafting principles, it's worth noting how **Computer-Aided Drawing (CAD)**, as mentioned in **Kulkarni et al.'s "Engineering Graphics with AutoCAD"**, significantly aids these complex projections.

*   **3D Modeling:** In CAD, you can first create a 3D model of the solid. Then, you can simply rotate this 3D model in space until its axis is at the desired angles to the reference planes.
*   **Automatic Projection:** Once the 3D model is oriented correctly, the CAD software can automatically generate the orthographic views (Front, Top, Side) with the correct line weights and visibility. This is a huge advantage over manual drafting, especially for complex geometries.
*   **Parametric Design:** You can define angles and lengths parametrically, allowing for easy modification.

However, even with CAD, understanding the underlying principles of projection is vital. You need to know *how* to orient the 3D model correctly. The manual methods build that fundamental spatial reasoning. **CO5: Sketch simple drawing using CAD tools** is about using these tools, but to use them effectively, you need the concepts we're discussing now.

#### Summary and Key Points to Remember

*   **Inclination:** Axis makes an angle with HP or VP or both.
*   **Case 1 (Inclined to One Plane):** Typically, draw the solid in a simple position first, then tilt it in one view (usually FV for inclination to HP) to achieve the specified angle. Project to get the other view. Use auxiliary projections if needed to find true lengths or orientations.
*   **Case 2 (Inclined to Both Planes):** This requires a two-stage projection process, often involving an auxiliary view to establish the true length of the axis and then tilting that auxiliary view to satisfy the second inclination.
*   **True Length:** Be aware of when you're dealing with the true length of the axis or its foreshortened projections.
*   **Visualization:** Always try to visualize the solid in 3D space as you're drawing its 2D projections. This is the essence of **CO2**.
*   **CAD vs. Manual:** CAD automates the process but doesn't replace the need for understanding the principles.

---

### Sample Questions and Answers

**Question 1: A square pyramid has its base on the HP. Its axis is inclined to the HP at 45 degrees and is perpendicular to the VP. Draw its projections.**

**Answer Rationale:**
This is a Case 1 problem: axis inclined to one plane (HP).
1.  **Initial Position:** Draw the square base in the Top View (TV) on the XY line (or anywhere on HP). Draw the apex directly above the center of the square. Project up to get the Front View (FV), which will be a triangle with its base on the XY line and height equal to the pyramid's height.
2.  **Tilting for Inclination to HP:** Now, tilt this setup so the axis makes 45 degrees with the HP. The easiest way is to redraw the FV such that the axis (line from base midpoint to apex) is at 45 degrees to the XY line. The base will appear as a line segment, foreshortened.
3.  **Projecting to TV:** From the points in the new FV, draw projectors perpendicular to the XY line. From the corresponding points in the *initial* TV (the true square base), draw projectors parallel to the inclined axis in the FV. The intersection of these pairs of projectors gives the points in the new TV.
4.  **Visible Lines:** Determine visibility. In the new FV, points closer to the apex are generally visible. In the new TV, points further from the center (closer to the edges of the projected base) are generally visible.

**Question 2: A cone with its base diameter 50 mm and height 70 mm rests on its base on the HP. Its axis is inclined to the HP at 50 degrees and to the VP at 40 degrees. Draw its projections.**

**Answer Rationale:**
This is a Case 2 problem: axis inclined to both planes.
1.  **Stage 1 (Inclination to HP):** Draw the cone with its base on HP and axis perpendicular to HP. TV: A circle of diameter 50 mm. FV: A triangle with base 50 mm on XY and height 70 mm.
2.  **Tilt for 50 degrees to HP:** Redraw the FV such that the axis makes 50 degrees with the XY line. The base circle will appear as an ellipse, foreshortened.
3.  **Auxiliary Projection for True Length:** From the tilted FV, project points to an Auxiliary Front View (AFV) in which the axis appears in its true length (70 mm). This AFV will show the axis inclined at 50 degrees to XY, and the base ellipse will appear as a circle (or its actual circular shape) if viewed perpendicular to the axis.
4.  **Tilt AFV for 40 degrees to VP:** Now, tilt this AFV so that the axis (seen in true length) makes an angle of 40 degrees with the XY line. This will be your final AFV.
5.  **Project Back:**
    *   From the tilted AFV, project points perpendicular to XY to get the final FV.
    *   From this final FV, project points perpendicular to XY. Simultaneously, from the corresponding points in the Stage 1 TV (the true circle), draw projectors perpendicular to XY. The intersection of these gives the final TV.

**Question 3: Explain the concept of "true length" in the context of projecting solids with inclined axes.**

**Answer Rationale:**
*   **Definition:** The true length of a line (or the axis of a solid) is its actual length in 3D space.
*   **Foreshortening:** When a line is inclined to a plane of projection (HP or VP), its projection onto that plane will appear shorter than its true length. This apparent shortening is called foreshortening.
*   **Importance:** To accurately represent the inclination angle of the axis, we often need to find its true length first, typically using an auxiliary view. The angle the true length makes with the reference plane is the specified inclination. For instance, if an axis makes an angle $\phi$ with the HP, its true length $L$ will project as $L \cos \phi$ onto the HP and $L \sin \phi$ onto a plane parallel to the VP and perpendicular to the HP.
*   **Connection to CO2:** Understanding true length is fundamental to correctly visualizing and drawing the object in different positions, fulfilling the requirements of CO2. Without knowing the true length, we cannot accurately set up the required inclination angles in our orthographic projections.