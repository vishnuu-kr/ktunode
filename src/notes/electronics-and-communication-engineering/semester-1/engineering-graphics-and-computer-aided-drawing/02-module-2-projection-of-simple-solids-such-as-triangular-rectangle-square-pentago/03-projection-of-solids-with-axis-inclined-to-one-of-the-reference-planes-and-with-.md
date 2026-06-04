---
title: "Projection of solids with axis inclined to one of the reference planes and with axis inclined to both reference planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0ab"
status: "completed"
scrapedAt: "2026-05-23T17:33:54.057Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 2: Projection of Simple Solids

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Topic: Projection of Solids with Axis Inclined to One and Both Reference Planes

Welcome back, everyone! In our previous sessions, we've mastered the art of projecting simple solids – prisms, pyramids, cones, and cylinders – when their axes are either perpendicular or parallel to one of the reference planes (HP and VP). This gave us a solid foundation, much like building the base of a structure.

Today, we're stepping up the challenge. We're going to explore what happens when the axis of these solids is *inclined*. This is where things get really interesting, as it mirrors real-world scenarios where objects are often tilted. Think about a traffic cone lying on its side, or a cylindrical pipe angled in a pipeline. Understanding these inclined projections is crucial for accurately representing and analyzing these objects in engineering drawings.

Our goal today is to equip you with the skills to draw the orthographic projections (top view and front view) of these solids when their axes are tilted. This directly relates to **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions**. By the end of this topic, you'll be able to visualize and accurately sketch these tilted solids, a key skill for any aspiring engineer.

Let's dive into the two main scenarios: axis inclined to one reference plane, and axis inclined to both reference planes.

---

### Scenario 1: Axis Inclined to One Reference Plane

This is our starting point for inclined projections. Imagine a solid resting on the Horizontal Plane (HP) such that its axis is tilted at a certain angle to the HP, but remains perpendicular to the Vertical Plane (VP). Or, perhaps it's tilted with respect to the VP, while staying perpendicular to the HP.

**Key Concept: Apparent Inclination**

When the axis is inclined to a plane, the *true length* of the axis might not be directly visible in the projection onto that plane. Instead, we often see an *apparent inclination*. This is a crucial idea to keep in mind.

**How do we approach this?**

The general strategy for projecting solids with their axis inclined to one plane is to first achieve a position where the solid's *true shape* is visible in one of the views. This usually means projecting it such that the axis is *parallel* to the other plane. Then, we tilt the solid to achieve the desired inclination.

Let's break down the common cases:

#### Case 1.1: Axis Inclined to the HP and Parallel to the VP

This is a very common scenario. Think of a hexagonal prism lying on one of its base corners such that its axis makes an angle with the ground (HP), but it's positioned squarely in front of you (parallel to VP).

**Visualizing the Steps:**

1.  **Initial Position (Axis Perpendicular to HP):** We start by drawing the projection of the solid as if its axis were perpendicular to the HP and parallel to the VP.
    *   **Front View (FV):** This will be a rectangle (for prisms/cylinders) or a triangle (for pyramids) with the height representing the true length of the axis. The base will be the true shape of the base if it's resting on HP, or the opposite view if it's resting on its base.
    *   **Top View (TV):** This will be the true shape of the base (e.g., a hexagon, a square, a circle). The axis will appear as a point or a line segment connecting the center of the base to the apex/opposite base.

2.  **Tilting the Solid:** Now, we tilt the solid. The key is that the *inclination of the axis* is given with respect to the HP.
    *   **Focus on the Top View (TV):** Since the axis is inclined to the HP, the change in inclination will be most evident in the TV. We will redraw the TV, keeping the base on the XY line (or as per its position), but tilting the *axis* to the given angle with the HP. This often means the solid itself will be tilted.
    *   **Important Technique: Auxiliary First Method:** A very common and effective way to tackle this is to first place the solid such that the axis is *parallel* to the VP and inclined to the HP. In this position:
        *   **Front View (FV):** Shows the true inclination of the axis. The base that is furthest from the observer (e.g., top base of a prism) will appear as a line.
        *   **Top View (TV):** Shows the true shape of the base. The axis appears as a point.

    *   **How to Achieve Inclination (Auxiliary Method):**
        *   Draw the solid in a position where its axis is perpendicular to HP and parallel to VP.
        *   Now, tilt the *entire solid* such that the axis makes the specified angle with the HP.
        *   **Crucial Step:** The TV now shows the base in its true shape. The FV is obtained by projecting from this tilted position.
        *   **Alternatively (and often simpler):**
            *   Draw the FV of the solid with its axis perpendicular to HP. Let the height be $H$.
            *   Now, *imagine* tilting the solid. The base that was previously at the top will now be closer to the observer if the axis is inclined downwards towards the observer.
            *   The true inclination of the axis, say $\theta$ to HP, will be clearly seen in the FV. So, redraw the FV such that the axis makes an angle $\theta$ with the HP. The base that is now further from the observer will appear as a line (since it's now in a plane parallel to VP).
            *   From this new FV, project points to the TV. The TV will show the base in its true shape.
            *   **Remember this:** When the axis is inclined to HP, the FV shows the *apparent inclination* of the axis, and the TV shows the *true shape* of the base.

**Example Analogy:** Imagine holding a pencil vertically. Its projection on the floor (HP) is a point (or a tiny circle if the tip isn't perfectly sharp), and its projection on the wall (VP) is a line. Now, tilt the pencil so its tip touches the floor, and the other end is held at an angle $\theta$ to the floor. The projection on the wall (VP) will now be a shorter line, and the projection on the floor (HP) will be an ellipse (if it's a cylinder) or a more complex shape, but the *angle* it makes with the floor is what we're interested in for the FV. In our drawing, the FV will show the axis at the given angle $\theta$ to the HP.

**Connecting to CO2:** This process directly helps in preparing multiview orthographic projections by visualizing the object in a tilted position. You're not just drawing static shapes; you're representing an object that has undergone a rotation.

#### Case 1.2: Axis Inclined to the VP and Parallel to the HP

This is the complementary case. Think of a cylindrical rod lying flat on a table (parallel to HP) but sticking out at an angle towards the wall (VP).

**Visualizing the Steps:**

1.  **Initial Position (Axis Parallel to HP and VP):**
    *   **Front View (FV):** A rectangle.
    *   **Top View (TV):** A circle or the shape of the base.

2.  **Tilting the Solid:** The axis is inclined to the VP.
    *   **Focus on the Front View (FV):** Since the axis is inclined to the VP, the change in inclination will be most evident in the FV. We will redraw the FV, keeping the base on the XY line (or as per its position), but tilting the *axis* to the given angle with the VP.
    *   **Important Technique: Auxiliary First Method (revisited):**
        *   Draw the solid in a position where its axis is perpendicular to VP and parallel to HP.
        *   Now, tilt the *entire solid* such that the axis makes the specified angle with the VP.
        *   **Crucial Step:** The FV now shows the base in its true shape. The TV is obtained by projecting from this tilted position.
        *   **Alternatively (and often simpler):**
            *   Draw the TV of the solid with its axis parallel to HP and VP.
            *   Now, *imagine* tilting the solid. The base that was previously on the side will now be closer to the observer if the axis is inclined towards the observer.
            *   The true inclination of the axis, say $\phi$ to VP, will be clearly seen in the TV. So, redraw the TV such that the axis makes an angle $\phi$ with the VP. The base that is now further from the observer will appear as a line (since it's now in a plane parallel to HP).
            *   From this new TV, project points to the FV. The FV will show the base in its true shape.
            *   **Remember this:** When the axis is inclined to VP, the TV shows the *apparent inclination* of the axis, and the FV shows the *true shape* of the base.

**Example Analogy:** Imagine a pen lying flat on your desk (parallel to HP). Now, pick up one end and hold it such that it points directly at the wall in front of you (VP), at an angle $\phi$ to the wall. The projection on the wall (VP) will be a shorter line, and the projection on the desk (HP) will be a larger shape, but the *angle* it makes with the wall is what we're interested in for the TV. In our drawing, the TV will show the axis at the given angle $\phi$ to the VP.

**Connecting to CO2:** Again, this is about visualizing the object in a different orientation. By drawing these projections, we are preparing multiview orthographic projections of an object in an inclined position.

---

### Scenario 2: Axis Inclined to Both Reference Planes

This is the most complex scenario, but it's built upon the principles we've just discussed. Here, the axis is tilted with respect to both the HP and the VP. Think of a ladder leaning against a wall, but also angled sideways relative to the wall's plane.

**Key Concept: True Inclination vs. Apparent Inclination**

In this case, the angles given are the *true inclinations* of the axis.
*   The angle with the HP is usually denoted by $\theta$.
*   The angle with the VP is usually denoted by $\phi$.

When the axis is inclined to both planes, the angle seen in the FV is the apparent inclination to HP, and the angle seen in the TV is the apparent inclination to VP. These apparent angles are generally *not* the true inclinations $\theta$ and $\phi$.

**The Method: Using an Auxiliary Plane (or a two-stage tilt)**

The standard approach here is a two-step tilting process, often visualized using an auxiliary plane.

1.  **Step 1: Tilt to Inclination with One Plane (e.g., HP)**
    *   Start by projecting the solid in a position where its axis is perpendicular to VP and parallel to HP.
    *   Then, tilt the solid so that its axis makes the given angle $\theta$ with the HP.
        *   In this intermediate position:
            *   The FV will show the axis inclined at $\theta$ to the HP. The base further away will appear as a line.
            *   The TV will show the true shape of the base, but the axis might not be in its final inclined position relative to the VP.

2.  **Step 2: Tilt to Inclination with the Other Plane (e.g., VP)**
    *   Now, from this intermediate position, we tilt the solid again. The goal is to make the axis inclined to the VP at an angle $\phi$.
    *   **Crucial Point:** When tilting for the second inclination, we ensure the *first inclination* ($\theta$ with HP) is *maintained*.
    *   This second tilt is usually done about an axis perpendicular to the plane for which the first inclination was achieved. For example, if we first inclined the axis to HP, the second tilt would be about an axis perpendicular to HP (i.e., parallel to VP).
    *   **How to achieve this:**
        *   Take the FV from Step 1. In this FV, the base is a line.
        *   Redraw this FV by rotating it such that the axis makes the angle $\phi$ with the VP. This is essentially treating the FV from Step 1 as if it were a Top View for the purpose of the second tilt.
        *   From this final FV, project projectors perpendicular to the XY line to obtain the final TV.
        *   **Remember this:** The TV from Step 1 is used to determine the "true shape" side view, from which we take the dimensions and orientation for the second tilting step.

**Let's refine the sequence for Axis Inclined to Both Planes:**

This is a classic problem, and there are a couple of common ways to visualize and solve it. We'll focus on the method that is generally easier to grasp conceptually.

**Method: Auxiliary Plane Approach (or Two-Stage Tilt)**

Imagine the solid is first positioned with its axis perpendicular to the VP and parallel to the HP.

1.  **Stage 1: Inclination to HP ($\theta$)**
    *   Draw the FV and TV for the solid in its initial position (axis perpendicular to VP, parallel to HP).
    *   Now, tilt the *entire solid* so that its axis makes the given angle $\theta$ with the HP.
    *   In this new orientation:
        *   **Front View (FV'):** The axis will appear inclined at $\theta$ to the HP. One of the bases (the one further away) will appear as a line.
        *   **Top View (TV'):** This view will show the base in its true shape, but the axis's projection will reflect the tilt.

2.  **Stage 2: Inclination to VP ($\phi$)**
    *   Now, we need to tilt it further so the axis makes an angle $\phi$ with the VP.
    *   **Crucial step:** The tilt in Stage 2 must preserve the inclination achieved in Stage 1. We achieve this by tilting about an axis that is perpendicular to the plane used in Stage 1 (in this case, about an axis perpendicular to HP, i.e., parallel to VP).
    *   Consider the FV obtained in Stage 1 (FV'). This view has the base as a line. We will now treat this FV' as if it were a top view for the purpose of the *second* tilt.
    *   Redraw this FV' such that the axis (which is inclined at $\theta$ to HP) now appears inclined at $\phi$ to the VP. This sounds confusing, but it means you redraw the FV, ensuring the axis is at the correct apparent angle to VP.
    *   **How to get the final TV:** The true shape of the base is preserved from the TV' in Stage 1. We use projectors from the final FV (obtained after the second tilt) to intersect these true shape outlines from TV' to get the final TV.

**A Simpler Conceptualization (often taught):**

Let's use the "tilt the axis" approach, which is more direct for exam purposes.

1.  **Draw the solid with axis parallel to HP and VP.** Get the FV and TV.
2.  **Introduce the first inclination (say, to HP, angle $\theta$).**
    *   Take the TV of the solid in step 1 (which shows the true shape of the base).
    *   Now, rotate this TV such that the axis of the solid makes the angle $\theta$ with the XY line (which represents HP). This isn't the final TV yet, but it sets up the correct inclination. Let's call this the "intermediate TV".
    *   From this "intermediate TV", project projectors perpendicular to the XY line to get the corresponding FV. This FV will show the axis at the correct inclination $\theta$ to HP. Let's call this the "intermediate FV".
3.  **Introduce the second inclination (to VP, angle $\phi$).**
    *   Now, take the "intermediate FV" obtained in step 2. This FV has the axis at angle $\theta$ to HP.
    *   Redraw this "intermediate FV" such that the axis now makes the angle $\phi$ with the XY line (which represents VP). This redraw of the FV will ensure the axis has the correct apparent inclination to VP. Let's call this the "final FV".
    *   **Crucially, how do we get the final TV?** The true shape of the solid's base is contained in the TV from step 1. We need to project points from the "final FV" onto the lines that represent the base shape from the original TV.
    *   Alternatively, and this is often the most reliable way: Take the original TV (axis parallel to both planes). Rotate this TV such that the axis makes an angle $\theta$ with the HP (as done in step 2). Then, project this rotated TV to get an intermediate FV. Now, take the *original* FV (axis parallel to both planes). Rotate this FV such that the axis makes an angle $\phi$ with the VP. Then project this rotated FV to get an intermediate TV. You then need to combine these to get the final views.

**A More Practical Approach (often taught in classes):**

Let's use the approach often preferred for its clarity in drawing.

1.  **Draw the Solid with Axis Perpendicular to VP and Parallel to HP:**
    *   **FV:** A rectangle (for prism/cylinder) or a triangle (for pyramid). The height is the true length of the axis.
    *   **TV:** The true shape of the base (e.g., circle, square, hexagon). The axis is a point in the center.

2.  **Achieve Inclination to HP ($\theta$):**
    *   Take the FV from step 1.
    *   Redraw this FV such that the axis makes the given angle $\theta$ with the HP. In this new FV, the base furthest from the observer appears as a line. Let's call this the **FV1**.
    *   From the endpoints of the axis and base lines in FV1, draw projectors perpendicular to the XY line.
    *   Now, take the TV from step 1 (the true shape of the base).
    *   These projectors from FV1 will intersect the lines representing the base in the TV from step 1. This gives us the **TV1**, which shows the base in true shape, with the axis tilted relative to HP.

3.  **Achieve Inclination to VP ($\phi$) from FV1:**
    *   Now, take **FV1**. We need to make its axis inclined to VP at angle $\phi$.
    *   Redraw **FV1** in a new position such that its axis makes the angle $\phi$ with the XY line. **This redraw is crucial.** The shape of the solid will be distorted, but the axis inclination to VP is now correct. Let's call this the **Final FV**.
    *   **To get the Final TV:**
        *   Consider the **TV1** (the true shape of the base).
        *   We need to project points from the **Final FV** onto the appropriate lines in **TV1**. This requires careful projection.
        *   A more systematic way: From the "true shape" TV (TV from step 1), we tilt it such that the axis makes angle $\phi$ with the VP. This would give us an intermediate TV. Then we would project to FV.

**Let's simplify with the common "two-stage tilt" approach, which uses the true shape of the base as a reference throughout:**

This method is often found to be the most robust and less prone to projection errors.

1.  **Draw the solid with axis parallel to HP and VP.** Get the FV and TV. (Let's call these FV0 and TV0).
2.  **Achieve Inclination to HP ($\theta$):**
    *   Take the TV0 (true shape of the base).
    *   Redraw this TV0 such that the axis of the solid (imagined from the center of the base to the apex/opposite base) makes the angle $\theta$ with the XY line. Let's call this the **TV1**.
    *   From the endpoints of the axis and visible lines in TV1, project upwards perpendicular to the XY line.
    *   Now, consider the FV0. From the corresponding points in FV0 (e.g., the true height), project these onto the projectors from TV1. This will give you the **FV1**, where the axis is inclined at $\theta$ to HP.
3.  **Achieve Inclination to VP ($\phi$) from FV1:**
    *   Take **FV1**. Redraw this FV1 such that the axis now makes the angle $\phi$ with the XY line. This is your **Final FV**.
    *   **To get the Final TV:** Take **TV1** (which shows the true shape of the base). From the corresponding points in the **Final FV**, draw projectors perpendicular to the XY line. These projectors will intersect the lines in **TV1** at the correct positions to form the **Final TV**.

**Connecting to CO2:** This is the pinnacle of CO2 for this topic. You are accurately visualizing and projecting an object in a complex, tilted orientation, requiring a deep understanding of how different views relate when the object is rotated in 3D space.

**Connecting to CO1:** While CO1 is about points and lines, the principles of projection and how apparent lengths and angles change when viewed from different directions are fundamental. The inclined solids are complex applications of these basic principles.

**Connecting to CO3:** While developing surfaces is a different topic, understanding the shape and form of solids in various orientations is a prerequisite for developing their surfaces accurately.

**Connecting to CO5:** Visualizing these projections is a key step before using CAD tools. Understanding the geometry and orientation in 2D is essential for creating accurate 3D models and their 2D projections in CAD.

---

### Summary of Key Recollections:

*   **Axis Inclined to HP, Parallel to VP:** FV shows axis inclined to HP. TV shows true shape of the base.
*   **Axis Inclined to VP, Parallel to HP:** TV shows axis inclined to VP. FV shows true shape of the base.
*   **Axis Inclined to Both HP and VP:** Requires a two-stage tilting process. The common method involves starting with the true shape of the base in one view and tilting it to achieve the first inclination, then projecting to get the other view. This second view is then tilted to achieve the second inclination, and projectors are used to get the final view from the true shape view.

---

### Sample Questions and Answers:

**Question 1 (Conceptual):**
When the axis of a solid is inclined to the Horizontal Plane (HP) and parallel to the Vertical Plane (VP), which orthographic view will show the true shape of the base?

**Answer:**
The **Top View (TV)** will show the true shape of the base. This is because the axis is parallel to VP, meaning the solid is essentially "standing up" in front of the VP, and the TV is a projection onto the HP, which is perpendicular to the axis, thus preserving the base shape.

**Question 2 (Conceptual):**
In the projection of a solid with its axis inclined to both HP and VP, what is the significance of the "true shape" view?

**Answer:**
The "true shape" view (either the base or the top view) serves as the reference for achieving the subsequent inclinations. When the axis is inclined to both planes, one of the views will retain the true shape of the base (or the section if it's a pyramid/cone). This true shape view is then used to guide the projection of points from the other view, which has undergone the necessary tilts to represent the inclined axis. It acts as a stable reference plane from which dimensions and relative positions are projected.

**Question 3 (Exam-Oriented):**
A square prism of base side 30 mm and axis length 60 mm rests on the HP on one of its base corners such that the axis is inclined at 45° to the HP and parallel to the VP. Draw its projections.

**Answer/Reasoning:**
This is a case of the axis inclined to HP and parallel to VP.

*   **Initial Position (Axis perpendicular to HP):**
    *   FV: A rectangle 30mm wide and 60mm high.
    *   TV: A square of side 30mm.

*   **Achieving Inclination to HP (45°):**
    *   We draw the FV with the axis inclined at 45° to the XY line. The height is 60mm, but it will be foreshortened.
    *   The base that is further away will appear as a line.
    *   From this FV, project projectors to the TV. The TV will be a square of 30mm side, showing the true shape of the base. The projectors from the FV will intersect the lines of the square base at the correct positions.

*   **Projection Details:**
    *   FV: Draw the XY line. From a point on XY, draw a line for the axis inclined at 45° to XY, with length 60mm. The endpoints of the base on this axis will be at a distance of 60mm. The base will appear as a line perpendicular to the axis at its bottom end. The top base will be a line perpendicular to the axis at its top end. This view will be a foreshortened rectangle.
    *   TV: Draw the square base (e.g., corners A, B, C, D). The axis will be a point in the center of this square. Project the vertices of the square from the FV onto the corresponding lines in the TV.

**Question 4 (Exam-Oriented):**
A pentagonal pyramid with base side 30 mm and axis length 50 mm has its axis inclined at 30° to the HP and 40° to the VP. Draw its projections.

**Answer/Reasoning:**
This is a case of axis inclined to both planes. We'll use the two-stage tilt method.

1.  **Initial Position (Axis perpendicular to VP, parallel to HP):**
    *   FV: A triangle (apex and base vertices). Height = 50 mm. Base width depends on the pentagon's orientation.
    *   TV: A regular pentagon of side 30 mm. Axis is a point at the center.

2.  **Achieve Inclination to HP (30°):**
    *   Take the TV (regular pentagon).
    *   Redraw the pentagon (TV1) such that its axis (from center to a vertex, or center to midpoint of a base side, depending on how it rests) makes 30° with the XY line.
    *   From the vertices of TV1, project projectors upwards.
    *   From FV (triangle), project horizontally. Intersecting projectors from FV with those from TV1 will give FV1. FV1 will show the axis inclined at 30° to the XY line (HP).

3.  **Achieve Inclination to VP (40°) from FV1:**
    *   Take FV1. Redraw it (Final FV) such that its axis now makes 40° with the XY line (VP).
    *   To get the Final TV: Take TV1 (the true shape pentagon). From the vertices of the Final FV, draw projectors perpendicular to the XY line. These will intersect the corresponding lines of the pentagon in TV1 to form the Final TV.

*   **Key Point for Pyramid:** For a pyramid, the base is a polygon and the apex is a point. Ensure correct visibility of edges and faces in all views. The axis connects the centroid of the base to the apex.

**Common Pitfall:** For axis inclined to both planes, mixing up which view is tilted for which inclination, or how to project between the intermediate and final views, is common. Always refer back to which plane the axis is inclined to and what that means for the appearance of the axis and base in the FV and TV. The "true shape" view is your anchor.

---
This concludes our detailed look at the projection of solids with inclined axes. Remember the principles of maintaining true shapes and projecting correctly between views as you tilt the object. These skills are fundamental for your understanding of engineering drawings and will be invaluable as you progress in your studies. Keep practicing, and don't hesitate to visualize these objects in 3D space!