---
title: "Projection of straight lines inclined to one plane and inclined to both planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 1: Introduction: Relevance of technical drawing in engineering field."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e83829"
status: "completed"
scrapedAt: "2026-05-20T17:43:42.486Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 1: Introduction: Relevance of Technical Drawing in Engineering Field

### Topic: Projection of Straight Lines Inclined to One Plane and Inclined to Both Planes

Welcome, everyone! In this session, we're going to delve into a fundamental concept in engineering graphics: the projection of straight lines. Understanding how to represent lines accurately on a 2D plane is crucial because so many engineering components are essentially made up of lines and surfaces. Think about a simple bolt, a beam, or even the wing of an airplane – they all have edges that are straight lines. So, mastering this is directly linked to our **Course Outcome 1 (CO1): Understand and plot the projection of points and lines located in different quadrants.** This skill, at a Knowledge Level of K3 (Understanding), forms the bedrock for more complex projections we'll cover later.

Before we dive into lines, let's quickly recap what projection is. Remember from our earlier discussions? Projection is essentially casting a shadow of a 3D object onto a 2D plane using projectors. In orthographic projection, these projectors are perpendicular to the projection plane. This allows us to see different views (like front view, top view, side view) of an object.

Now, when we talk about lines, there are a few possibilities regarding their orientation with respect to the two main projection planes: the **Horizontal Plane (HP)**, also called the **Plane of Projection (PoP)** or **Top View Plane**, and the **Vertical Plane (VP)**, also called the **Front View Plane**.

We've already covered lines parallel to one plane and perpendicular to the other. Today, we're focusing on lines that are *inclined*. This means the line is not parallel nor perpendicular to either plane.

---

### 1. Projection of a Straight Line Inclined to One Plane

Let's start with the simpler case: a line inclined to *one* plane. This means it's either inclined to the HP, or inclined to the VP, but *parallel* to the other.

#### Case 1: Line Inclined to VP and Parallel to HP

Imagine a slender rod, like a knitting needle, held at an angle to the wall (VP) but perfectly horizontal to the floor (HP).

*   **True Length:** The actual length of the line is called its **True Length (L)**. When a line is parallel to a plane, its projection onto that plane shows its true length. Since our line is parallel to the HP, its **top view** will show its true length.
*   **Front View:** Now, how does it look from the front? Because it's inclined to the VP, its projection on the VP (the front view) will be shorter than its true length. This shorter length is called the **apparent length** or **apparent front view length**.
*   **Key Concept: Inclination Angle:** The angle the line makes with the plane it's inclined to is crucial. In this case, the angle the line makes with the VP is denoted by $\beta$. This angle $\beta$ will appear in the top view, between the line's true length and its projector.

**How do we draw this?**

Let's visualize this on our drawing sheet, which represents the unfolded projection planes. The **Horizontal Plane (HP)** is usually drawn as a horizontal line (the **xy line** or **reference line**), and the **Vertical Plane (VP)** is represented by the vertical line perpendicular to the HP. The front view is drawn above the xy line, and the top view is drawn below.

1.  **Start with the True Length:** Assume the line is parallel to HP. So, its top view will be its true length. Let's denote the endpoints of the line as A and B. In the top view, we'll have a line segment $a'b'$ of length L.
2.  **Inclination to VP:** Now, this line AB is inclined to VP at an angle $\beta$. This angle $\beta$ will be shown in the top view. So, from point $a'$, draw a line at an angle $\beta$ to the xy line. This line will have the length L. The other end will be $b'$.
3.  **Finding the Front View:** The front view of A is $a$, and the front view of B is $b$. Since the line is parallel to HP, the distance of $a$ and $b$ from the HP (which is their distance from the xy line in the front view) will be the same. Let's say point A is at a certain height above HP. This height will be shown in the front view as the distance of $a$ from the xy line. Now, we need to find the front view of B, which is $b$. Since the line AB is inclined to VP at $\beta$, its front view ($ab$) will be shorter. The relationship between the true length (L), the front view length ($ab$), and the angle $\beta$ is given by the trigonometric relationship: $ab = L \cos \beta$. Also, the angle $\beta$ is visible in the top view.

**Think of it this way:** Imagine a flagpole resting on the ground (HP) but leaning against a wall (VP). The actual length of the flagpole is L. Its shadow on the ground will be its true length, L. The angle it makes with the wall is $\beta$. The height it reaches on the wall (its front view) will be shorter than L, and this height will depend on the angle $\beta$.

This scenario is also covered in textbooks like **Varghese's Engineering Graphics** and **Benjamin's Engineering Graphics**, where they systematically break down these cases.

#### Case 2: Line Inclined to HP and Parallel to VP

This is the mirror image of the previous case. Imagine our slender rod is now held vertically, parallel to the wall (VP), but at an angle to the floor (HP).

*   **True Length:** Since the line is parallel to VP, its **front view** will show its true length (L).
*   **Top View:** Because it's inclined to the HP, its projection on the HP (the top view) will be shorter, showing an **apparent length** or **apparent top view length**.
*   **Key Concept: Inclination Angle:** The angle the line makes with the HP is denoted by $\alpha$. This angle $\alpha$ will appear in the front view.

**How do we draw this?**

1.  **Start with the True Length:** Assume the line is parallel to VP. So, its front view will be its true length. Let's denote the endpoints as A and B. In the front view, we'll have a line segment $ab$ of length L.
2.  **Inclination to HP:** Now, this line AB is inclined to HP at an angle $\alpha$. This angle $\alpha$ will be shown in the front view. So, from point $a$, draw a line at an angle $\alpha$ to the xy line. This line will have the length L. The other end will be $b$.
3.  **Finding the Top View:** The top view of A is $a'$, and the top view of B is $b'$. Since the line is parallel to VP, the distance of $a'$ and $b'$ from the VP (which is their distance from the xy line in the top view) will be the same. Let's say point A is at a certain distance in front of the VP. This distance will be shown in the top view as the distance of $a'$ from the xy line. Now, we need to find the top view of B, which is $b'$. Since the line AB is inclined to HP at $\alpha$, its top view ($a'b'$) will be shorter. The relationship is: $a'b' = L \cos \alpha$. The angle $\alpha$ is visible in the front view.

**Think of it this way:** Imagine a flagpole leaning against a wall (VP) but its base is on the ground (HP). The actual length is L. Its projection on the wall (front view) will be its true length, L. The angle it makes with the ground is $\alpha$. The shadow it casts on the ground (top view) will be shorter, and this length depends on $\alpha$.

This is exactly what **John K.C.'s "Engineering Graphics for degree"** and **Anilkumar K.N.'s "Engineering Graphics"** explain with clear diagrams.

---

### 2. Projection of a Straight Line Inclined to Both Planes

Now, let's tackle the most general case: a line inclined to *both* the HP and the VP. This is where things get a bit more interesting, and this directly addresses **CO1: Understand and plot the projection of points and lines located in different quadrants.** We'll be working with all four quadrants here as the line can be positioned in various ways.

Imagine a laser pointer beam. If you hold it at an angle to the floor and also at an angle to the wall in front of you, the beam is inclined to both planes.

*   **True Length (L):** The actual length of the line.
*   **Apparent Lengths:**
    *   The length of the line in the **front view** (projection on VP) is shorter than L. Let's call it $ab$.
    *   The length of the line in the **top view** (projection on HP) is also shorter than L. Let's call it $a'b'$.
*   **Inclination Angles:**
    *   The angle the line makes with the **HP** is denoted by **$\alpha$**. This angle appears in the **front view**.
    *   The angle the line makes with the **VP** is denoted by **$\beta$**. This angle appears in the **top view**.

**Crucial Observation:** The line is *not* parallel to either plane, so neither its front view nor its top view will show its true length.

**How do we find the true length and the angles?**

This is a common exam question type. We are often given the projections (front view and top view) and asked to find the true length and the inclinations. Or, we are given the true length, one inclination, and the position of one endpoint, and asked to find the projections.

Let's consider the first scenario: Given the front view $ab$ and the top view $a'b'$.

*   **Finding the True Length (L):**
    *   **Method 1: Using the Front View:** We know that the true length L is parallel to HP. So, if we take the front view $ab$ and rotate it about point $a$ in the front view until it becomes parallel to the xy line, its new position, say $ab_{TL}$, will represent the true length. This is done by drawing an arc from $b$ with center $a$ and radius $ab$ until it intersects a line parallel to xy passing through $a$ at the top. The line $ab_{TL}$ is the true length.
    *   **Method 2: Using the Top View:** Similarly, we know the true length L is parallel to VP. So, if we take the top view $a'b'$ and rotate it about point $a'$ in the top view until it becomes parallel to the xy line, its new position, say $a'b'_{TL}$, will represent the true length. This is done by drawing an arc from $b'$ with center $a'$ and radius $a'b'$ until it intersects a line parallel to xy passing through $a'$ at the bottom. The line $a'b'_{TL}$ is the true length.

    Both methods will yield the same true length. This is a fundamental principle derived from the geometry of projections, as explained in **Venugopal's Engineering Drawing & Graphics**.

*   **Finding the Inclination $\alpha$ (with HP):**
    *   The angle $\alpha$ is the angle the line makes with the HP. This angle is shown in the front view.
    *   We found the true length projection in the front view as $ab_{TL}$. The angle between this true length projection ($ab_{TL}$) and the xy line is $\alpha$.

*   **Finding the Inclination $\beta$ (with VP):**
    *   The angle $\beta$ is the angle the line makes with the VP. This angle is shown in the top view.
    *   We found the true length projection in the top view as $a'b'_{TL}$. The angle between this true length projection ($a'b'_{TL}$) and the xy line is $\beta$.

**Let's consider the other scenario: Given True Length (L), inclination $\alpha$ to HP, and position of one point (say A).**

1.  **Position Point A:** Decide where point A is. For instance, let's place A in the first quadrant. So, $a$ is at some height above xy, and $a'$ is at some distance in front of VP (below xy).
2.  **Front View:** From $a$, draw a line of length L inclined at angle $\alpha$ to the xy line. Let this line end at $b$. This line $ab$ is the front view.
3.  **Top View:** From $a'$, draw a vertical projector upwards to meet the line $ab$ at $b$. Now, from $a'$, draw a line inclined at angle $\beta$ to the xy line. The length of this line will be $L \cos \beta$. This is where it gets a bit tricky if $\beta$ is unknown.
    *   *Alternative Approach:* Instead of directly drawing $\beta$, we can use the relationship between front view length, top view length, and true length. Let the front view length be $ab$ and top view length be $a'b'$. We know $L^2 = (ab)^2 + (a'b')^2$ is not directly applicable here.
    *   *Correct Approach:* From $a$, we know the front view line is $ab$ inclined at $\alpha$ to xy. From $a'$, we know the top view line is $a'b'$ inclined at $\beta$ to xy. Point $b$ in the front view and point $b'$ in the top view must be connected by a common projector (a vertical line).
    *   Let's re-strategize. Given L and $\alpha$:
        *   Place $a$ and $a'$.
        *   From $a$, draw $ab$ of length L at angle $\alpha$ to xy. This gives the front view.
        *   From $a'$, draw a line $a'b''$ of length $L \cos \alpha$ at some angle to xy. This would be the apparent top view length, but the angle $\beta$ is unknown.
        *   *The crucial insight is this:* The true length L connects point A and point B. The distance of B from HP is related to the front view, and its distance from VP is related to the top view.
        *   Let's place A such that $a$ is at height $h$ and $a'$ is at distance $d$.
        *   From $a$, draw the front view $ab$ of length L at angle $\alpha$ to xy. This determines the position of $b$ in the front view.
        *   Now, we need to find $b'$. We know $b$ is at some height, and $b'$ is at some distance. The true length connects A and B.
        *   Let's project $b$ vertically down to the HP plane (or rather, its projection $b'$ on the HP). The distance between $a'$ and $b'$ will be the apparent top view length.
        *   **A common method for constructing this is using auxiliary planes or by rotating the line into a position where its true length is visible.**

**The "Traces" Method:**
Another way to visualize and draw these projections is using the concept of **Traces**.
*   **Horizontal Trace (HT):** The point where the line (or its extension) meets the HP.
*   **Vertical Trace (VT):** The point where the line (or its extension) meets the VP.

When a line is inclined to both planes, its projections $ab$ and $a'b'$ will intersect the xy line (or extensions of it) at points. However, these intersection points are not the traces themselves unless the line is extended. The traces are fundamental reference points used in some drawing methods.

**Let's use an analogy for the reconstruction of True Length:**

Imagine you have a flexible measuring tape (the line) of known length L. You attach one end (A) to a hook on the ceiling (say, above your head) and the other end (B) is somewhere in front of you and also lower than the hook.

*   **Front View:** If you look straight ahead at the tape, you see a certain length ($ab$) and an angle ($\alpha$) it makes with the horizontal line from the hook.
*   **Top View:** If you look from above, you see another length ($a'b'$) and an angle ($\beta$) it makes with the line extending directly forward from the hook.

To find the true length L, you can imagine pulling the tape taut and rotating it around point A (on the ceiling) until it's horizontal. The length you measure then is the true length. This is like rotating the front view $ab$ until it's parallel to the xy line. Similarly, you could rotate it around a point on the wall.

**Relating to CO1:** This is where we actively plot the projection of lines. We're applying our understanding of how 3D lines behave in 2D projections. We are, in essence, performing an **application** of projection principles.

**Exam Tips:**
*   Always draw the xy line first.
*   Clearly label all points ($a, b, a', b'$) and angles ($\alpha, \beta$).
*   When finding the true length by rotation, ensure the arc is drawn correctly from the correct center and radius.
*   Remember the relationship: the true length is always the longest length. Apparent lengths in front and top views will be shorter.
*   For lines in different quadrants, pay close attention to the relative positions of $a$ and $b$ (heights) and $a'$ and $b'$ (distances from VP). This affects where the projected lines appear relative to the xy line.

Let's look at how this relates to our textbooks. **Kulkarni, Rastogi, and Sarkar's "Engineering Graphics with AutoCAD"** would cover these projection techniques, often building up from points to lines. They emphasize the geometric constructions. Similarly, **Parthasarathy and Murali's "Engineering Drawing"** provides rigorous derivations for these methods.

---

### Connecting to Course Outcomes:

*   **CO1: Understand and plot the projection of points and lines located in different quadrants.**
    *   This entire topic is directly about plotting projections of lines. Whether inclined to one plane or both, we are learning to represent their 3D orientation in 2D views. Understanding which projection shows the true length and where the inclination angles are visible is key. Working with lines inclined to both planes requires us to consider their positions in different quadrants (e.g., point A above HP and in front of VP, point B below HP and behind VP, etc.) and how these positions affect the appearance of their projections.
*   **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions.**
    *   A line is the simplest "object." Mastering line projections is the first step towards visualizing and projecting more complex shapes. If we can project a line, we can then combine such projections to represent prisms, pyramids, cylinders, cones, and eventually, complete engineering components. Understanding the relative positions and inclinations of lines within these objects is crucial for drawing their multiview projections.
*   **CO5: Sketch simple drawing using CAD tools.**
    *   While this topic focuses on manual drafting principles, the underlying concepts are directly transferable to CAD. In CAD, you'd use commands like `LINE`, `CIRCLE`, `OFFSET`, and `ROTATE`. Understanding that the true length of a line inclined to both planes is found by a specific geometric construction informs how you might set up your drawing or use CAD tools to derive those lengths and angles accurately. For instance, drawing the apparent lengths and then using a rotation command to find the true length is a direct CAD application of these manual principles.

---

### Sample Questions with Answers:

**1. Conceptual Question:**
*   **Question:** When a line is inclined to both the Horizontal Plane (HP) and the Vertical Plane (VP), which of its projections (front view or top view) will show its true length?
*   **Answer:** Neither the front view nor the top view will show the true length of a line that is inclined to both HP and VP. Both projections will be shorter than the true length. The true length can only be obtained by a specific reconstruction process, usually involving rotating one of the projections until it is parallel to the reference line (xy).

**2. Exam-Oriented Question (Reconstruction):**
*   **Question:** A line AB has its front view of length 60 mm and its top view of length 40 mm. The front view makes an angle of 30° with the xy line. Point A is 15 mm above HP and 20 mm in front of VP. Draw the projections of the line AB. Find its true length, the inclination of the line with the HP and VP.
*   **Solution Reasoning:**
    1.  **Locate Point A:** Place $a$ at 15 mm above the xy line and $a'$ at 20 mm below the xy line.
    2.  **Draw Front View:** From $a$, draw a line of length 60 mm at 30° to the xy line. This is the front view $ab$.
    3.  **Draw Top View:** From $a'$, draw a line of length 40 mm. To find the correct orientation for the top view, we use the reconstruction method.
        *   **Find True Length (using Front View):** With $a$ as the center, draw an arc of radius 60 mm (length of $ab$) that intersects a line parallel to xy passing through $a$ at the top. Let this intersection be $b_{TL}$. The line $ab_{TL}$ represents the true length. Measure this length.
        *   **Find $\alpha$:** The angle between $ab_{TL}$ and the xy line is $\alpha$.
        *   **Find True Length (using Top View):** With $a'$ as the center, draw an arc of radius equal to the true length found above, intersecting a line parallel to xy passing through $a'$ at the bottom. Let this be $b'_{TL}$. The line $a'b'_{TL}$ would be the true length, confirming our previous calculation.
        *   **Find $\beta$:** The angle between $a'b'_{TL}$ and the xy line is $\beta$.
    4.  **Complete Top View:** Now that we have the true length, we know the top view $a'b'$ has length 40 mm and makes an angle $\beta$ with the xy line. Alternatively, from $b$ in the front view, draw a vertical projector down to meet the horizontal line from $a'$ at angle $\beta$ (the true length line from $a'$). This will be $b'$. The length $a'b'$ should be 40 mm. We can confirm this using $L \cos \beta = a'b'$ or $L \cos \alpha = ab$.
    *   **Final Answer Check:** Ensure $a'b'$ is 40mm and makes the correct angle $\beta$. The true length, $\alpha$, and $\beta$ are measured from the constructed true length lines.

This thorough understanding of line projections is absolutely vital for everything that follows in engineering graphics. Remember these principles!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
