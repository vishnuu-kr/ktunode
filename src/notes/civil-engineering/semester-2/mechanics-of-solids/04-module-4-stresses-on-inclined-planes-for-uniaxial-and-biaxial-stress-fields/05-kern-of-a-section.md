---
title: "Kern of a section"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f7a"
status: "completed"
scrapedAt: "2026-05-20T18:37:31.852Z"
---
## Module 4: Stresses on Inclined Planes for Uniaxial and Biaxial Stress Fields

### Topic: The Kern of a Section

Welcome, everyone! Today, we're diving into a concept that's absolutely crucial for understanding how structural elements behave under load, especially when those loads aren't perfectly aligned with the cross-section's axes. We're talking about **The Kern of a Section**. This topic is a direct extension of our understanding of stresses on inclined planes, and it helps us determine where to apply loads so that we avoid undesirable tensile stresses.

Before we get into the kern itself, let's quickly recap where we've been. We’ve explored how stresses transform from one plane to another. We learned about principal stresses, which are the maximum and minimum normal stresses at a point, and how they occur on planes where shear stress is zero. We also discussed the Mohr's circle, a powerful graphical tool for visualizing these stress transformations. Now, the kern is where we apply this knowledge to a practical problem: ensuring that a structural member, when subjected to axial loads and moments, remains in a state of compression across its entire cross-section, even on the edges.

**Why is this so important?** Imagine a concrete column supporting a heavy load. Concrete is strong in compression but very weak in tension. If we apply a load eccentrically (off-center), it can create tensile stresses on the opposite side of the cross-section. If these tensile stresses exceed the concrete's capacity, the material will crack and fail. The kern is all about defining the region within the cross-section where the resultant force must act to prevent these damaging tensile stresses from developing. This ties directly into **CO2 (Explain the behavior and response of various structural elements under various loading conditions)** and **CO6 (Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely)**, as it helps us predict and prevent failure.

#### Understanding the Basic Principle

Let's consider a simple case. Imagine a rectangular column with a load applied eccentrically. The load creates both a direct compressive stress and a bending stress. The direct compressive stress is uniform across the section, while the bending stress varies linearly from the point of application.

*   **Direct Compressive Stress:** $\sigma_{direct} = \frac{P}{A}$, where $P$ is the axial load and $A$ is the cross-sectional area. This stress is negative (compressive).
*   **Bending Stress:** $\sigma_{bending} = \frac{M y}{I}$, where $M$ is the bending moment, $y$ is the distance from the neutral axis, and $I$ is the moment of inertia.

The *resultant* stress at any point in the cross-section is the sum of these two: $\sigma_{resultant} = \sigma_{direct} + \sigma_{bending}$.

Now, our goal is to ensure that $\sigma_{resultant}$ is *always* compressive, meaning it should always be less than or equal to zero. The most critical points, where tension is most likely to develop, are the edges of the cross-section furthest from the applied load.

Consider a rectangular section of width $b$ and depth $d$. Let the load $P$ be applied with an eccentricity $e_x$ in the x-direction and $e_y$ in the y-direction. The bending moment in the x-direction is $M_x = P \cdot e_y$ (remembering that eccentricity along y causes bending about x, and vice-versa) and in the y-direction is $M_y = P \cdot e_x$.

The stress at any point $(x, y)$ from the centroidal axes is given by:

$\sigma(x, y) = \frac{P}{A} + \frac{M_y x}{I_y} + \frac{M_x y}{I_x}$

Here, $A$ is the area, $I_x$ and $I_y$ are the moments of inertia about the x and y axes, $x$ and $y$ are the distances from the centroidal axes, and $M_x$ and $M_y$ are the bending moments.

We want to find the region of application of $P$ such that $\sigma(x, y) \leq 0$ for all points in the section. This means that at the extreme edges, the stress must be zero or compressive.

Let's simplify this. For a rectangular section of width $b$ and depth $d$, let's assume the load is applied with eccentricity $e_x$ only, along the width $b$. The stress distribution will be linear across the width. The centroid is at the center. The extreme fibers are at distances $\pm b/2$ from the centroid.

The stress at the edges will be:
$\sigma_{edge} = \frac{P}{A} + \frac{M_x y}{I_x}$

If the load is applied with eccentricity $e_x$, the bending moment is $M_y = P \cdot e_x$. The stress at the edges (let's say at $x = \pm b/2$) will be:

$\sigma(x=\pm b/2) = \frac{P}{A} + \frac{(P \cdot e_x) (\pm b/2)}{I_y}$

For a rectangular section, $A = bd$ and $I_y = \frac{db^3}{12}$.

So, $\sigma(x=\pm b/2) = \frac{P}{bd} + \frac{P \cdot e_x \cdot (\pm b/2)}{db^3/12}$

$\sigma(x=\pm b/2) = \frac{P}{bd} \pm \frac{6 P e_x}{bd b}$

$\sigma(x=\pm b/2) = \frac{P}{bd} \left( 1 \pm \frac{6 e_x}{b} \right)$

To avoid tension, the stress at the edge *furthest* from the load must be compressive (or zero). If the load is applied at $+e_x$, the furthest edge is at $x = -b/2$. So we require:

$\sigma(x=-b/2) = \frac{P}{bd} \left( 1 - \frac{6 e_x}{b} \right) \leq 0$

Since $P$ and $bd$ are positive, we need:
$1 - \frac{6 e_x}{b} \leq 0$
$1 \leq \frac{6 e_x}{b}$
$\frac{b}{6} \leq e_x$

This means that the eccentricity $e_x$ must be less than or equal to $b/6$. Similarly, if the eccentricity $e_y$ is applied along the depth $d$, we must have $e_y \leq d/6$.

**Analogy:** Imagine you're pushing a heavy box with your shoulder. If you push right in the center, the pressure is distributed evenly. If you push off to one side, you'll feel more pressure on your shoulder, and if you push too far to the edge, you might even feel a slight pull on the opposite side of your body – that’s the tension we want to avoid in our structural members! The kern defines the "sweet spot" for applying that push.

#### Defining the Kern

The **Kern** of a section is the region within the cross-section into which the resultant of the applied forces must fall so that no tensile stresses are produced in the section. In simpler terms, it's the "no-tension zone."

The boundaries of the kern are formed by the lines on which the resultant force produces zero stress at the extreme edge of the section.

Let's generalize this for any symmetrical section. The stress at any point is:
$\sigma = \frac{P}{A} + \frac{M_x y}{I_x} + \frac{M_y x}{I_y}$

We want to find the locus of points $(x, y)$ where the resultant load $P$ can be applied such that the stress $\sigma$ is zero at some point on the boundary of the section.

Consider a general cross-section. Let $P$ be applied at an eccentricity $(e_x, e_y)$ from the centroid. Then $M_y = P e_x$ and $M_x = P e_y$. The stress equation becomes:

$\sigma = \frac{P}{A} + \frac{(P e_y) y}{I_x} + \frac{(P e_x) x}{I_y}$

To find the boundary of the kern, we set $\sigma = 0$ for the points $(x, y)$ that lie on the edge of the section and are furthest from the point of load application. This condition gives us the equation of the boundary line.

$\frac{P}{A} + \frac{P e_y y}{I_x} + \frac{P e_x x}{I_y} = 0$

Dividing by $P$ (assuming $P \neq 0$):

$\frac{1}{A} + \frac{e_y y}{I_x} + \frac{e_x x}{I_y} = 0$

Rearranging this equation to express $e_y$ in terms of $e_x$ (or vice versa) will give us the equation of the boundary lines of the kern.

Remember that $I_x = A \cdot k_y^2$ and $I_y = A \cdot k_x^2$, where $k_x$ and $k_y$ are the radii of gyration. Also, $I_x = \bar{y} A \cdot \bar{y}_{avg}$ and $I_y = \bar{x} A \cdot \bar{x}_{avg}$. A more useful parameter here is the **Section Modulus**, $Z = I/y_{max}$.
So, $I_x = Z_x \cdot y_{max,x}$ and $I_y = Z_y \cdot y_{max,y}$.

A key concept related to the section modulus is its reciprocal, $1/Z$. For a rectangular section of width $b$ and depth $d$, $Z_y = bd^2/6$ and $Z_x = db^2/6$.

Let's re-examine the condition for the rectangular section.
For eccentricity $e_x$ along the width $b$, the boundary is given by $|e_x| \leq b/6$.
For eccentricity $e_y$ along the depth $d$, the boundary is given by $|e_y| \leq d/6$.

The equation of the boundary line in the $e_x-e_y$ plane for a rectangular section can be derived.
The stress at a point $(x,y)$ in the section is $\sigma = \frac{P}{A} + \frac{P e_y y}{I_x} + \frac{P e_x x}{I_y}$.
The extreme points in the section are at $x = \pm b/2$ and $y = \pm d/2$.
Consider the case where the load is applied at $(e_x, e_y)$. The worst tensile stress would occur at the corner where the bending stresses from both eccentricities add up to the maximum tensile value. For instance, if $e_x > 0$ and $e_y > 0$, the corner at $(-b/2, -d/2)$ would be most likely to experience tension.

Setting $\sigma = 0$ at $(-b/2, -d/2)$:
$\frac{P}{bd} + \frac{P e_y (-d/2)}{db^3/12} + \frac{P e_x (-b/2)}{bd^3/12} = 0$
$\frac{1}{bd} - \frac{6 P e_y}{bd b} - \frac{6 P e_x}{bd d} = 0$
(Note: typo in previous calculation, $I_y$ is for bending about y-axis, which involves $x$. $I_x$ is for bending about x-axis, which involves $y$)

Corrected stress equation:
$\sigma(x,y) = \frac{P}{A} + \frac{M_y x}{I_y} + \frac{M_x y}{I_x}$
where $M_y = P e_x$ and $M_x = P e_y$.

$\sigma(x,y) = \frac{P}{bd} + \frac{P e_x x}{bd^3/12} + \frac{P e_y y}{db^3/12}$
$\sigma(x,y) = \frac{P}{bd} \left( 1 + \frac{12 e_x x}{bd^2} + \frac{12 e_y y}{db^2} \right)$

Setting $\sigma = 0$ at the corner $(-b/2, -d/2)$ for $e_x>0, e_y>0$:
$0 = \frac{1}{bd} + \frac{P e_x (-b/2)}{bd^3/12} + \frac{P e_y (-d/2)}{db^3/12}$
$\frac{1}{bd} - \frac{6 e_x}{bd^2} - \frac{6 e_y}{db^2} = 0$
Multiply by $bd^2 b^2$:
$b^2 d^2 - 6 e_x b d^2 - 6 e_y d b^2 = 0$
$1 - \frac{6 e_x}{d} - \frac{6 e_y}{b} = 0$ (after dividing by $b^2 d^2$)
Wait, let's recheck the formula with section moduli.
$\sigma = \frac{P}{A} + \frac{M_y}{Z_y} + \frac{M_x}{Z_x}$ is not generally correct for combined bending. It's $\frac{M y}{I}$.

Let's stick to the fundamental stress equation.
$\sigma(x,y) = \frac{P}{A} + \frac{P e_x x}{I_y} + \frac{P e_y y}{I_x}$
Setting $\sigma = 0$ at the corner $(-b/2, -d/2)$:
$\frac{1}{bd} + \frac{e_x (-b/2)}{bd^3/12} + \frac{e_y (-d/2)}{db^3/12} = 0$
$\frac{1}{bd} - \frac{6 e_x}{bd^2} - \frac{6 e_y}{db^2} = 0$
$\frac{1}{bd} = \frac{6 e_x}{bd^2} + \frac{6 e_y}{db^2}$
Divide by $1/bd$:
$1 = \frac{6 e_x}{d} + \frac{6 e_y}{b}$
$\frac{e_x}{d/6} + \frac{e_y}{b/6} = 1$

This is the equation of a straight line in the $e_x-e_y$ plane. It intercepts the $e_x$ axis at $d/6$ (when $e_y=0$) and the $e_y$ axis at $b/6$ (when $e_x=0$).

This is for the corner $(-b/2, -d/2)$. If $e_x$ and $e_y$ are positive, this corner will experience the most tension.
If $e_x$ is negative and $e_y$ is positive, the corner $(b/2, -d/2)$ would be critical.
$\sigma(b/2, -d/2) = \frac{1}{bd} + \frac{e_x (b/2)}{bd^3/12} + \frac{e_y (-d/2)}{db^3/12} = 0$
$\frac{1}{bd} + \frac{6 e_x}{bd^2} - \frac{6 e_y}{db^2} = 0$
$\frac{1}{bd} = -\frac{6 e_x}{bd^2} + \frac{6 e_y}{db^2}$
$1 = -\frac{6 e_x}{d} + \frac{6 e_y}{b}$
$\frac{e_x}{d/6} = \frac{e_y}{b/6} - 1$ or $\frac{e_y}{b/6} - \frac{e_x}{d/6} = 1$.

So, the boundaries of the kern are formed by lines defined by these conditions. For a rectangular section, these lines form a smaller rectangle (or a diamond shape if we consider both axes symmetrically). The region where $e_x \leq b/6$ and $e_y \leq d/6$ forms the central rectangle.

**Summary for Rectangular Section:**
The kern is a rectangle with sides $b/3$ and $d/3$. Its boundaries are at $\pm b/6$ from the center along the width and $\pm d/6$ from the center along the depth.

*   The resultant load must lie within the central $b/3 \times d/3$ rectangle.
*   This means the eccentricity $e_x$ must be within $\pm b/6$, and $e_y$ must be within $\pm d/6$.

This is a very important result, often asked in exams. Remember this! (CO5: Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point in a structural member - this indirectly relates as it's about stress distribution. CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely - this is directly related.)

**Example: Rectangular Pier**
Consider a rectangular pier of width 400 mm and depth 800 mm. A vertical load of 500 kN is applied eccentrically. What is the maximum eccentricity along the width and depth such that no tension is developed?

For a rectangular section, the limits for eccentricity are:
$e_{width} \leq b/6$ and $e_{depth} \leq d/6$.

Given $b = 400$ mm and $d = 800$ mm.
Maximum $e_x = 400 / 6 = 66.67$ mm.
Maximum $e_y = 800 / 6 = 133.33$ mm.

So, the load must be applied within a central rectangle of size $2 \times 66.67 = 133.33$ mm (along the width) by $2 \times 133.33 = 266.67$ mm (along the depth) for no tension to develop.

#### Kern for Other Sections

The shape of the kern depends on the shape of the cross-section. The principle remains the same: find the lines where the resultant force, applied at an eccentricity $(e_x, e_y)$, causes zero stress at the most critical edge of the section.

**1. Circular Section:**
For a solid circular section of radius $R$, $A = \pi R^2$. The moment of inertia about any diameter is $I = \frac{\pi R^4}{4}$.
Let the load $P$ be applied with an eccentricity $e$ from the center. The bending moment is $M = P \cdot e$.
The stress at the extreme edge, at a distance $R$ from the center, is:
$\sigma_{edge} = \frac{P}{A} + \frac{M R}{I}$
$\sigma_{edge} = \frac{P}{\pi R^2} + \frac{(P \cdot e) R}{\pi R^4 / 4}$
$\sigma_{edge} = \frac{P}{\pi R^2} + \frac{4 P e}{\pi R^3}$
$\sigma_{edge} = \frac{P}{\pi R^2} \left( 1 + \frac{4e}{R} \right)$

To avoid tension, $\sigma_{edge} \leq 0$.
$1 + \frac{4e}{R} \leq 0$
$\frac{4e}{R} \leq -1$
$e \geq -\frac{R}{4}$

This formulation assumes tension is positive. If we want to ensure compression (negative stress), we need the algebraic sum to be negative or zero. The maximum tensile stress occurs at the edge diametrically opposite to the eccentricity.

Let's use the condition $\sigma=0$ at the extreme edge.
$\frac{P}{A} + \frac{Pe \cdot R}{I} = 0$
$\frac{1}{A} + \frac{e R}{I} = 0$
$\frac{e R}{I} = -\frac{1}{A}$
$e = -\frac{I}{A R}$

For a circular section, $I = \frac{\pi R^4}{4}$ and $A = \pi R^2$.
$e = -\frac{\pi R^4 / 4}{(\pi R^2) R} = -\frac{\pi R^4 / 4}{\pi R^3} = -\frac{R}{4}$.

This means the eccentricity $e$ must be less than or equal to $R/4$ in magnitude to avoid tension. So, the kern for a circular section is a concentric circle with radius $R/4$.
The load must fall within this inner circle. This is a very important result to remember! (CO6 again).

**2. Diamond Section (Rhombus):**
A diamond section is essentially a square rotated by 45 degrees. For a square of side $a$, rotated by 45 degrees, the diagonals are $a\sqrt{2}$. Let the diagonals be $D$ and $d$. For a square, $D=d=a\sqrt{2}$.
The area is $A = \frac{1}{2} D d$. For a square, $A = \frac{1}{2} (a\sqrt{2})(a\sqrt{2}) = a^2$.
The moment of inertia about the horizontal and vertical diagonals is $I_x = I_y = \frac{D d^3}{48}$ (for a rhombus with diagonals D and d, where d is about the axis). Let's consider the axes along the diagonals. $I_{axis1} = \frac{d_2 d_1^3}{48}$ where $d_1$ is the diagonal along the axis of calculation.
If we align the axes with the diagonals, the moments of inertia are $I_1 = \frac{D d^3}{48}$ and $I_2 = \frac{d D^3}{48}$. For a square, $D=d=a\sqrt{2}$, so $I_1 = I_2 = \frac{(a\sqrt{2})(a\sqrt{2})^3}{48} = \frac{2\sqrt{2} a^4}{48} = \frac{\sqrt{2} a^4}{24}$.

This becomes complex quickly for arbitrary rhombuses. Let's simplify. For a square rotated 45 degrees, let the distance from the center to the midpoint of a side be $s$. The extreme points are the vertices.
Consider a square section with side length $a$. The diagonals are $a\sqrt{2}$. Let the axes be aligned with the diagonals. $I_{diag1} = I_{diag2} = \frac{(a\sqrt{2})^4}{48} = \frac{4a^4}{48} = \frac{a^4}{12}$.
The distance from the centroid to the vertex along the diagonal is $\frac{a\sqrt{2}}{2}$.
The edges are at a distance from the centroid. The distance to the midpoint of each side is $a/2$.
Let's consider the standard orientation of a square. The kern boundary is $\pm a/6$ in both directions.
When rotated by 45 degrees, the vertices are at $(\pm a/\sqrt{2}, 0)$ and $(0, \pm a/\sqrt{2})$ if the sides are parallel to axes. No, that's wrong.
Vertices are at $(\pm a/2, \pm a/2)$ in a standard square.
When rotated by 45 degrees, the vertices are at $(\pm a/\sqrt{2}, 0)$ and $(0, \pm a/\sqrt{2})$. Wait, these are points on axes.
Let's think about the boundary. The kern is defined by lines passing through the midpoints of the lines joining the centroid to the vertices. This is a general property for centrally symmetric sections.

For a square section with sides parallel to the x and y axes, the kern is a square with sides $a/3$, centered at the centroid, with its sides parallel to the original square's sides. Its boundaries are at $\pm a/6$ from the center.

When a square is rotated by 45 degrees (diamond shape), the boundaries of the kern are lines that pass through the midpoints of the diagonals. The vertices of the diamond are at $(\pm L/2, 0)$ and $(0, \pm L/2)$, where $L$ is the length of the diagonal. The kern is a smaller diamond shape whose vertices are at $(\pm L/4, 0)$ and $(0, \pm L/4)$. Its diagonals are $L/2$. The shape of the kern is a diamond with diagonals $D/2$ and $d/2$.

**3. I-Section:**
For an I-section, the calculation of $I_x$ and $I_y$ is standard. The boundary equations derived from $\sigma=0$ at the extreme edges will form the kern. The kern will be a polygon whose shape depends on the relative dimensions of the flanges and web. The calculation involves finding the points on the outer boundary that are furthest from the centroid in directions perpendicular to the section modulus.

Let's consider the stress at the outer edge of a flange.
$\sigma = \frac{P}{A} + \frac{P e_y y}{I_x} + \frac{P e_x x}{I_y}$
where $y$ is the distance to the flange, and $x$ is the distance to the edge of the flange.
The kern is formed by lines such that if the load is applied within this region, the stress at the outer fiber is compressive.

For a symmetrical I-section, the kern is bounded by straight lines passing through the midpoints of the segments connecting the centroid to the points on the boundary where the section modulus is zero (i.e., at the extremities of the width and depth).

The calculation for an I-section is more involved. According to textbooks like Bansal or Shah & Junnarkar, the boundary of the kern is determined by considering the points of zero stress at the outermost fibers. For a symmetric I-section with flanges of width $b_f$ and depth $d$, and web thickness $t_w$, and flange thickness $t_f$:
The kern boundary is determined by lines such that the resultant load $P$ applied at eccentricity $(e_x, e_y)$ results in zero stress at the outer corners of the flanges.

The limits for eccentricity $e_x$ (along the flange width) are governed by the flange dimensions, specifically $\pm b_f/2$.
The limits for eccentricity $e_y$ (along the depth) are governed by the overall depth $d$, specifically $\pm d/2$.

The kern shape is typically an octagon for an I-section, defined by lines connecting specific points. The lines $\frac{e_x}{b_f/2} + \frac{e_y}{d/2} = 1$ and similar equations at other corners define the kern.
Specifically, the four straight line segments forming the kern boundaries are:
$\frac{e_x}{b_f/2} + \frac{e_y}{d/2} = 1$
$\frac{e_x}{b_f/2} - \frac{e_y}{d/2} = 1$
$-\frac{e_x}{b_f/2} + \frac{e_y}{d/2} = 1$
$-\frac{e_x}{b_f/2} - \frac{e_y}{d/2} = 1$

These equations define the vertices of the kern. For an I-section, the boundaries are formed by considering the stress at the outermost corners of the flanges.
The kern is bounded by lines connecting the midpoints of the lines joining the centroid to the outermost edges of the flanges.

Consider a symmetrical I-section. The kern's boundary consists of four straight lines.
For eccentricity $e_x$ along the width $b_f$ and $e_y$ along the depth $d$:
The boundary lines are given by:
$\frac{e_x}{b_f/2} + \frac{e_y}{d/2} = 1$ (for $e_x > 0, e_y > 0$)
$\frac{e_x}{b_f/2} - \frac{e_y}{d/2} = 1$ (for $e_x > 0, e_y < 0$)
$-\frac{e_x}{b_f/2} + \frac{e_y}{d/2} = 1$ (for $e_x < 0, e_y > 0$)
$-\frac{e_x}{b_f/2} - \frac{e_y}{d/2} = 1$ (for $e_x < 0, e_y < 0$)

These equations describe a diamond (rhombus) shape if $b_f/2 = d/2$. For a general I-section, the kern is a polygon. The general form of the kern boundary equation is:
$\frac{e_x}{Z_y/A} + \frac{e_y}{Z_x/A} = 1$ where $Z$ are section moduli. No, this is also not quite right.

Let's go back to the basic stress equation and the condition $\sigma = 0$ at the boundary.
$\frac{1}{A} + \frac{e_x x}{I_y} + \frac{e_y y}{I_x} = 0$
This implies $e_x \left(\frac{x}{I_y}\right) + e_y \left(\frac{y}{I_x}\right) = -\frac{1}{A}$

For an I-section, let $b_f$ be the flange width and $d$ the overall depth. Let's consider the corners of the flanges, at $(\pm b_f/2, \pm d/2)$.
Assuming symmetry about both axes, $I_x = 2 \left[ \frac{b_f d_f^3}{12} + b_f d_f \left(\frac{d}{2} - \frac{d_f}{2}\right)^2 \right] + \frac{t_w d_w^3}{12}$ (if $d_w = d-2d_f$). And $I_y = 2 \frac{d_f t_w^3}{12} + \frac{t_w (d-2d_f)^3}{12}$. (This is getting complicated and depends on exact definition of d and $d_f$).

The simpler approach from textbooks is to consider the section modulus.
The boundary of the kern is formed by lines such that $P/A + M_x/I_x + M_y/I_y = 0$ at the extreme fibers.
The kern is often described by its limits for $e_x$ and $e_y$.
For a symmetrical I-section, the kern is bounded by four straight lines that pass through the points $(\pm b_f/2, 0)$ and $(0, \pm d/2)$ of a scaled coordinate system.
The kern is the region bounded by the lines:
$\frac{|e_x|}{b_f/2} + \frac{|e_y|}{d/2} = 1$

This equation describes a diamond shape. The kern of an I-section is actually a hexagon or octagon depending on the precise shape and how we define the outer limits.
However, a common simplification for the kern of a symmetrical I-section is described by considering the load to be applied within the region defined by the points that are mid-way between the centroid and the outer edges.

A more general definition related to the secant modulus. For any section, the kern is bounded by lines whose equations are given by $\frac{x}{Z_y} + \frac{y}{Z_x} = 1$, where $Z_x$ and $Z_y$ are section moduli about the x and y axes.
For a rectangular section $b \times d$: $Z_y = bd^2/6$, $Z_x = db^2/6$.
Kern boundary: $\frac{e_x}{db^2/6} + \frac{e_y}{bd^2/6} = 1$
$\frac{6 e_x}{db^2} + \frac{6 e_y}{bd^2} = 1$.
This doesn't match the $b/6, d/6$ limits derived earlier.

Let's re-verify the rectangular section kern boundary.
$\frac{e_x}{d/6} + \frac{e_y}{b/6} = 1$.
This equation is correct. It means the kern is a diamond shape defined by intercepts $d/6$ and $b/6$.
If we consider both positive and negative eccentricities, the region is a rectangle with vertices $(\pm b/6, \pm d/6)$. This is a rectangle of side $b/3$ and $d/3$.

**Why are the textbook formulas sometimes confusing?** Different sources may use different conventions for axes or define section moduli differently. The core idea is to set the stress at the extreme fiber to zero.

Let's trust the derived limits for the rectangular section:
The kern for a rectangle of width $b$ and depth $d$ is a rectangle of width $b/3$ and depth $d/3$, centered at the centroid. The eccentricity $e_x$ must be within $\pm b/6$ and $e_y$ must be within $\pm d/6$.

**Example: Steel I-beam**
Consider a steel I-beam with flange width $b_f = 150$ mm, overall depth $d = 300$ mm, and let's assume for simplicity it's a square-like proportion such that $b_f/2 \approx d/2$. Let the flange width be 150 mm and depth be 300 mm.
The extreme edges of the flange are at $\pm b_f/2 = \pm 75$ mm from the center in the x-direction.
The extreme edges of the depth are at $\pm d/2 = \pm 150$ mm from the center in the y-direction.

The kern boundary is defined by lines where the resultant force application at $(e_x, e_y)$ causes zero stress at the extreme edges.
The general boundary equation is $\frac{1}{A} + \frac{e_x x}{I_y} + \frac{e_y y}{I_x} = 0$.
For the extreme corners of the flange, $(\pm b_f/2, \pm d/2)$.
Let's take the corner $(b_f/2, d/2)$.
$\frac{1}{A} + \frac{e_x (b_f/2)}{I_y} + \frac{e_y (d/2)}{I_x} = 0$.
This can be rewritten as:
$e_x \left(\frac{b_f/2}{I_y}\right) + e_y \left(\frac{d/2}{I_x}\right) = -\frac{1}{A}$.

This is the equation of a line in the $e_x-e_y$ plane. The intercepts are at $e_x = -\frac{I_y}{A (b_f/2)}$ and $e_y = -\frac{I_x}{A (d/2)}$.
These limits are related to the section moduli: $Z_y = I_y / (b_f/2)$ and $Z_x = I_x / (d/2)$.
So, $e_x = -\frac{Z_y}{A}$ and $e_y = -\frac{Z_x}{A}$.
The kern is bounded by lines of the form $\frac{e_x}{Z_y/A} + \frac{e_y}{Z_x/A} = -1$ (with appropriate sign combinations).

A more intuitive way from many texts: The kern is the locus of points such that the resultant force passes through the middle third of the section in one direction and the middle third in the other direction, if the section is rectangular. For other sections, it's generalized.
For a symmetrical I-section, the kern is bounded by lines connecting the midpoints of the lines joining the centroid to the extreme points of the flanges.
The effective width for calculating the kern limit in the flange direction is $b_f$, so the limit for eccentricity $e_x$ is $\pm b_f/6$.
The effective depth for calculating the kern limit in the depth direction is $d$, so the limit for eccentricity $e_y$ is $\pm d/6$.
This assumes that the stress distribution on the flange is uniform, which is an approximation.
However, if we use the general formula $\frac{|e_x|}{c_x} + \frac{|e_y|}{c_y} = 1$, where $c_x$ and $c_y$ are distances from the centroid to the extreme fibers in the respective directions, the resultant kern shape is a diamond. For a rectangle $b \times d$, $c_x = b/2, c_y = d/2$. Then $\frac{|e_x|}{b/2} + \frac{|e_y|}{d/2} = 1$, which means $\frac{|e_x|}{b/2} \leq 1$ and $\frac{|e_y|}{d/2} \leq 1$. This implies $|e_x| \leq b/2$ and $|e_y| \leq d/2$. This doesn't give the $b/6, d/6$ limits.

The confusion arises from how the boundary of the kern is defined. It's defined by the lines where the stress *at the extreme fiber* is zero.
For a rectangle $b \times d$:
Stress at $x=-b/2, y=-d/2$ (for $e_x>0, e_y>0$) is $\sigma = \frac{P}{bd} + \frac{P e_x (-b/2)}{bd^3/12} + \frac{P e_y (-d/2)}{db^3/12} = 0$.
$\frac{1}{bd} - \frac{6 e_x}{bd^2} - \frac{6 e_y}{db^2} = 0$.
$1 = \frac{6 e_x}{d} + \frac{6 e_y}{b}$.
$\frac{e_x}{d/6} + \frac{e_y}{b/6} = 1$.

This equation defines a line segment. The kern region is where the load can be applied without violating this for any corner.
The kern for a rectangle $b \times d$ is indeed a rectangle with vertices $(\pm b/6, \pm d/6)$.

**The importance of the kern:**
As per Punmia, Jain, & Jain, the kern is of great importance in the design of gravity dams, retaining walls, chimneys, and masonry structures. It ensures that the structure does not experience tension under any of its possible loading conditions. This allows for the utilization of the full compressive strength of the material. This is directly linked to CO6.

#### Practical Applications and Significance

The concept of the kern is not just an academic exercise. It has significant practical implications, especially in civil engineering structures.

*   **Gravity Dams and Retaining Walls:** The self-weight of the structure and the hydrostatic pressure create forces. If these forces are applied eccentrically, they can induce tensile stresses, leading to cracking. The kern ensures that the resultant force (self-weight + external forces) falls within a region that keeps the entire base in compression, preventing uplift and tension. This directly supports CO6.
*   **Chimneys and Towers:** Wind loads and the weight of the structure can cause eccentric loading. The kern helps define the safe zone for the resultant force to prevent tensile stresses in the material (often concrete or brickwork, which are weak in tension).
*   **Foundations:** For foundations of columns or walls, the kern of the foundation's contact area with the soil is crucial. Applying the load within the kern ensures that the entire foundation remains in contact with the soil, preventing differential settlement and avoiding tensile stresses in the foundation material.
*   **Masonry Structures:** Brickwork and stone masonry are generally strong in compression but very weak in tension. The kern concept is paramount in designing such structures to prevent any tensile stresses.

**Remember this:** If the resultant force on a section falls outside the kern, tensile stresses *will* develop. The larger the section's eccentricity beyond the kern boundary, the greater the tensile stress.

#### Summary and Key Takeaways

*   The **Kern** of a section is the region within the cross-section where the resultant of all applied forces must lie to ensure that no tensile stresses are developed in any part of the section.
*   It is determined by finding the locus of points of application of the resultant force that produce zero stress at the extreme edges of the section.
*   For a **rectangular section** of width $b$ and depth $d$, the kern is a rectangle of width $b/3$ and depth $d/3$, with its sides parallel to the original section, located symmetrically about the centroid. The eccentricities $e_x$ and $e_y$ must be within $\pm b/6$ and $\pm d/6$ respectively.
*   For a **solid circular section** of radius $R$, the kern is a concentric circle of radius $R/4$.
*   For other symmetrical sections like I-beams, the kern is generally a polygon (often an octagon or hexagon), and its shape is determined by considering the extreme fibers of the flanges and web. The calculations become more involved but follow the same principle of setting the stress at the outermost points to zero.
*   The concept of the kern is essential for the safe design of structures where tensile stresses must be avoided, particularly in materials like concrete and masonry. It directly contributes to ensuring the structural integrity and preventing failure under eccentric loading.

This topic is excellent for testing understanding of stress distribution under combined loading. You'll often be asked to find the kern for a given section or to determine if a given load eccentricity is within the kern. This requires applying the stress transformation principles we learned earlier. (CO1: Recall fundamental terms, CO2: Explain behavior, CO3: Apply principles, CO5: Stress transformations, CO6: Analyze for safe load).

---

### Sample Questions and Answers

**Q1. Define the kern of a section. What is its significance in structural engineering?**

**Answer:**
The kern of a section is the region within the cross-section such that if the resultant force is applied anywhere within this region, the section remains entirely under compression and experiences no tensile stresses.

**Significance:**
It is of critical importance in the design of structures made of materials weak in tension, such as concrete and masonry (related to CO6). By ensuring the resultant load falls within the kern, engineers can guarantee that the entire cross-section remains in compression, preventing cracking, uplift, or detachment from the foundation, thus ensuring the structural integrity and durability of the element. This allows for the full utilization of the material's compressive strength.

**Q2. Determine the dimensions of the kern for a rectangular section of width 200 mm and depth 400 mm. If a load is applied with an eccentricity of 50 mm along the width and 80 mm along the depth, will it cause tension in the section?**

**Answer:**
For a rectangular section of width $b$ and depth $d$, the kern is a rectangle with dimensions $b/3 \times d/3$, centered on the centroid. The boundaries of the kern are at $\pm b/6$ from the centroid along the width and $\pm d/6$ from the centroid along the depth.

Given:
$b = 200$ mm
$d = 400$ mm

The dimensions of the kern are:
Width of kern = $b/3 = 200 \text{ mm} / 3 = 66.67$ mm
Depth of kern = $d/3 = 400 \text{ mm} / 3 = 133.33$ mm

The boundaries of the kern from the centroid are:
Maximum eccentricity along width ($e_x$) = $\pm b/6 = \pm 200 \text{ mm} / 6 = \pm 33.33$ mm
Maximum eccentricity along depth ($e_y$) = $\pm d/6 = \pm 400 \text{ mm} / 6 = \pm 66.67$ mm

Given load eccentricities:
$e_x = 50$ mm
$e_y = 80$ mm

Comparing the applied eccentricities with the kern boundaries:
$|e_x| = 50$ mm. The limit is $33.33$ mm. Since $50 > 33.33$, the eccentricity along the width is outside the kern.
$|e_y| = 80$ mm. The limit is $66.67$ mm. Since $80 > 66.67$, the eccentricity along the depth is also outside the kern.

**Conclusion:** Since both the eccentricity along the width ($e_x$) and along the depth ($e_y$) are greater than the respective limits of the kern ($\pm b/6$ and $\pm d/6$), the applied load will cause tensile stresses in the section. Specifically, tension will develop at the corner opposite to the direction of eccentricities (e.g., at $-b/2, -d/2$ if $e_x$ and $e_y$ are positive).

**Q3. A solid circular concrete pier has a radius of 300 mm. Determine the radius of the kern of this pier. What is the maximum permissible eccentricity of a vertical load of 1000 kN if it must not cause tension?**

**Answer:**
For a solid circular section of radius $R$, the kern is a concentric circle with a radius of $R/4$.

Given:
Radius of the pier, $R = 300$ mm

Radius of the kern = $R/4 = 300 \text{ mm} / 4 = 75$ mm.

The maximum permissible eccentricity of the load is equal to the radius of the kern.
Maximum permissible eccentricity, $e_{max} = 75$ mm.

If the load is applied with an eccentricity less than or equal to 75 mm from the center, no tension will be developed in the pier. The value of the load (1000 kN) is relevant for calculating the actual stresses, but the eccentricity limit is purely a geometric property of the section. This question directly tests understanding of kern for a circular section (CO6).
