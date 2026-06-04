---
title: "Parabola."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed9"
status: "completed"
scrapedAt: "2026-05-20T17:54:56.734Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 4: Newton - Topic: Parabola

## Introduction

This module focuses on the mathematical description and properties of parabolas, a fundamental conic section with significant applications in physics, particularly in the study of projectile motion under constant gravity, as described by Newton's laws. We will explore the definition of a parabola, its standard equations, key geometric properties, and how these relate to physical phenomena.

## Learning Outcomes Covered:

*   **Understanding the definition and standard forms of a parabola.**
*   **Identifying the key features of a parabola: vertex, focus, directrix, and axis of symmetry.**
*   **Deriving the equation of a parabola given its geometric properties.**
*   **Applying the properties of parabolas to solve problems in physical science.**

## 1. Definition of a Parabola

A parabola is a set of all points in a plane that are equidistant from a fixed point (called the **focus**) and a fixed line (called the **directrix**).

**Key Terminology:**

*   **Focus (F):** A fixed point.
*   **Directrix (d):** A fixed line.
*   **Vertex (V):** The midpoint of the perpendicular segment from the focus to the directrix. It is the point on the parabola closest to the directrix and focus.
*   **Axis of Symmetry:** The line passing through the focus and perpendicular to the directrix. The parabola is symmetric with respect to this line.
*   **Focal Length (p):** The distance from the vertex to the focus (and also from the vertex to the directrix). By convention, $p$ is positive if the parabola opens towards the positive direction of its axis.

## 2. Standard Forms of Parabolas

The standard equations of parabolas depend on the position of the vertex and the orientation of the axis of symmetry.

### 2.1 Parabola with Vertex at the Origin (0,0)

**Case 1: Opens Upwards**

*   **Focus:** $(0, p)$
*   **Directrix:** $y = -p$
*   **Axis of Symmetry:** The y-axis ($x = 0$)
*   **Standard Equation:** $x^2 = 4py$

    *   *Derivation:* Let a point on the parabola be $(x, y)$. The distance from $(x, y)$ to the focus $(0, p)$ is $\sqrt{(x-0)^2 + (y-p)^2} = \sqrt{x^2 + (y-p)^2}$. The distance from $(x, y)$ to the directrix $y = -p$ is $|y - (-p)| = |y+p|$. Equating these distances and squaring both sides:
        $x^2 + (y-p)^2 = (y+p)^2$
        $x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$
        $x^2 = 4py$

**Case 2: Opens Downwards**

*   **Focus:** $(0, -p)$
*   **Directrix:** $y = p$
*   **Axis of Symmetry:** The y-axis ($x = 0$)
*   **Standard Equation:** $x^2 = -4py$ (where $p > 0$)

    *   *Note:* We can use $x^2 = 4py$ and interpret $p$ as negative when opening downwards.

**Case 3: Opens Rightwards**

*   **Focus:** $(p, 0)$
*   **Directrix:** $x = -p$
*   **Axis of Symmetry:** The x-axis ($y = 0$)
*   **Standard Equation:** $y^2 = 4px$

    *   *Derivation:* Let a point on the parabola be $(x, y)$. The distance from $(x, y)$ to the focus $(p, 0)$ is $\sqrt{(x-p)^2 + (y-0)^2} = \sqrt{(x-p)^2 + y^2}$. The distance from $(x, y)$ to the directrix $x = -p$ is $|x - (-p)| = |x+p|$. Equating these distances and squaring both sides:
        $(x-p)^2 + y^2 = (x+p)^2$
        $x^2 - 2px + p^2 + y^2 = x^2 + 2px + p^2$
        $y^2 = 4px$

**Case 4: Opens Leftwards**

*   **Focus:** $(-p, 0)$
*   **Directrix:** $x = p$
*   **Axis of Symmetry:** The x-axis ($y = 0$)
*   **Standard Equation:** $y^2 = -4px$ (where $p > 0$)

    *   *Note:* We can use $y^2 = 4px$ and interpret $p$ as negative when opening leftwards.

**Summary of Standard Forms (Vertex at Origin):**

| Opens      | Equation   | Focus    | Directrix | Axis of Symmetry |
| :--------- | :--------- | :------- | :-------- | :--------------- |
| Upwards    | $x^2 = 4py$  | $(0, p)$ | $y = -p$  | $x = 0$          |
| Downwards  | $x^2 = -4py$ | $(0, -p)$| $y = p$   | $x = 0$          |
| Rightwards | $y^2 = 4px$  | $(p, 0)$ | $x = -p$  | $y = 0$          |
| Leftwards  | $y^2 = -4px$ | $(-p, 0)$| $x = p$   | $y = 0$          |

### 2.2 Parabola with Vertex at $(h, k)$

If the vertex of the parabola is shifted to a point $(h, k)$, we can use a change of variables. Let $X = x - h$ and $Y = y - k$. Then the standard equations become:

*   **Opens Upwards:** $(x-h)^2 = 4p(y-k)$
    *   Vertex: $(h, k)$
    *   Focus: $(h, k+p)$
    *   Directrix: $y = k-p$
    *   Axis of Symmetry: $x = h$

*   **Opens Downwards:** $(x-h)^2 = -4p(y-k)$
    *   Vertex: $(h, k)$
    *   Focus: $(h, k-p)$
    *   Directrix: $y = k+p$
    *   Axis of Symmetry: $x = h$

*   **Opens Rightwards:** $(y-k)^2 = 4p(x-h)$
    *   Vertex: $(h, k)$
    *   Focus: $(h+p, k)$
    *   Directrix: $x = h-p$
    *   Axis of Symmetry: $y = k$

*   **Opens Leftwards:** $(y-k)^2 = -4p(x-h)$
    *   Vertex: $(h, k)$
    *   Focus: $(h-p, k)$
    *   Directrix: $x = h+p$
    *   Axis of Symmetry: $y = k$

**Important Point to Remember:** The sign of the term on the right side of the equation determines the direction of opening.
*   For $x^2 = \dots$, positive $4p$ means upwards, negative $4p$ means downwards.
*   For $y^2 = \dots$, positive $4p$ means rightwards, negative $4p$ means leftwards.

## 3. Geometric Properties and Applications

### 3.1 Reflective Property of a Parabola

A crucial property of parabolas in physical science is their reflective property. Any ray of light or sound wave traveling parallel to the axis of symmetry of a parabola is reflected towards the focus. Conversely, any ray originating from the focus is reflected parallel to the axis of symmetry.

**Applications:**

*   **Parabolic Reflectors (e.g., Satellite Dishes, Telescopes):** These are designed to collect parallel incoming signals (like radio waves from a satellite or light from a distant star) and focus them onto the receiver or detector at the focal point.
*   **Headlights and Searchlights:** The bulb is placed at the focus, and the parabolic reflector directs the light into a parallel beam, maximizing illumination in a specific direction.

**How it relates to Newton's Laws:** While Newton's laws of motion primarily describe the *trajectories* of objects, the parabolic shape arises when forces are constant. For example, the path of a projectile under constant gravitational acceleration (neglecting air resistance) is a parabola. The focus and directrix, in this context, are not physical entities in the same way as in optics, but the mathematical form of the trajectory is governed by the same quadratic relationships.

### 3.2 Parametric Equations of a Parabola

Parametric equations provide an alternative way to describe the points on a parabola using a parameter, often denoted by $t$.

*   For $y^2 = 4px$:
    $x = pt^2$, $y = 2pt$

*   For $x^2 = 4py$:
    $x = 2pt$, $y = pt^2$

**Example:** Consider a projectile launched with an initial velocity $v_0$ at an angle $\theta$ to the horizontal. Neglecting air resistance, the equations of motion are:
$x(t) = (v_0 \cos \theta) t$
$y(t) = (v_0 \sin \theta) t - \frac{1}{2}gt^2$

To show this is a parabola, we can eliminate $t$. From the first equation, $t = \frac{x}{v_0 \cos \theta}$. Substituting this into the second equation:
$y = (v_0 \sin \theta) \left(\frac{x}{v_0 \cos \theta}\right) - \frac{1}{2}g \left(\frac{x}{v_0 \cos \theta}\right)^2$
$y = (\tan \theta) x - \frac{g}{2v_0^2 \cos^2 \theta} x^2$

Rearranging this, we get:
$x^2 = \frac{2v_0^2 \cos^2 \theta}{g} \left( (\tan \theta) x - y \right)$
This is not in the standard form $x^2 = 4py$ directly, but it is a quadratic relationship in $x$ and $y$. If we rewrite it to isolate $y$:
$y = (\tan \theta) x - \left(\frac{g}{2v_0^2 \cos^2 \theta}\right) x^2$
This is of the form $y = Ax - Bx^2$, which is a downward-opening parabola. The vertex of this trajectory occurs at the maximum height.

This connection highlights the relevance of parabolas in mechanics, aligning with the course's focus on physical science.

## 4. Worked Examples

**Example 1: Finding the Equation of a Parabola**

Find the equation of the parabola with vertex at $(2, -3)$, focus at $(2, -1)$, and directrix $y = -5$.

**Solution:**
1.  **Identify the vertex:** $(h, k) = (2, -3)$.
2.  **Identify the focus:** $(2, -1)$. Since the x-coordinates of the vertex and focus are the same, the axis of symmetry is vertical ($x = 2$).
3.  **Determine the direction of opening:** The focus $(2, -1)$ is above the vertex $(2, -3)$, so the parabola opens upwards.
4.  **Calculate the focal length (p):** The distance between the vertex and the focus is $p = |-1 - (-3)| = |-1 + 3| = 2$.
5.  **Use the standard equation:** For a parabola opening upwards with vertex $(h, k)$, the equation is $(x-h)^2 = 4p(y-k)$.
6.  **Substitute the values:** $(x-2)^2 = 4(2)(y - (-3))$
    $(x-2)^2 = 8(y+3)$

**Answer:** The equation of the parabola is $(x-2)^2 = 8(y+3)$.

**Example 2: Identifying Properties from the Equation**

Identify the vertex, focus, directrix, and axis of symmetry for the parabola $y^2 = -12x$.

**Solution:**
1.  **Compare with standard form:** The equation is in the form $y^2 = -4px$.
2.  **Determine the direction of opening:** Since the $y$ term is squared and the coefficient of $x$ is negative, the parabola opens leftwards.
3.  **Find the vertex:** Comparing $y^2 = -12x$ with $y^2 = -4px$, we see the vertex is at the origin $(0,0)$.
4.  **Calculate the focal length (p):** $-4p = -12 \implies p = 3$.
5.  **Determine the focus:** For a leftward-opening parabola with vertex at the origin, the focus is $(-p, 0)$. So, the focus is $(-3, 0)$.
6.  **Determine the directrix:** For a leftward-opening parabola with vertex at the origin, the directrix is $x = p$. So, the directrix is $x = 3$.
7.  **Determine the axis of symmetry:** The axis of symmetry is the x-axis, $y = 0$.

**Answer:**
*   Vertex: $(0, 0)$
*   Focus: $(-3, 0)$
*   Directrix: $x = 3$
*   Axis of Symmetry: $y = 0$

**Example 3: Projectile Motion Application (Conceptual)**

A ball is thrown horizontally from a cliff. If air resistance is negligible, what shape is the trajectory of the ball?

**Solution:**
The motion of the ball can be analyzed into horizontal and vertical components.
*   **Horizontal motion:** The ball has no horizontal acceleration, so its horizontal velocity is constant. Thus, $x(t) = v_0 t$ (assuming initial horizontal velocity $v_0$).
*   **Vertical motion:** The ball experiences constant downward acceleration due to gravity ($g$). The initial vertical velocity is zero. Thus, $y(t) = -\frac{1}{2}gt^2$ (assuming the cliff top is at $y=0$ and positive $y$ is upwards).

Eliminating $t$ from these equations: $t = \frac{x}{v_0}$.
Substituting into the vertical equation: $y = -\frac{1}{2}g \left(\frac{x}{v_0}\right)^2 = -\frac{g}{2v_0^2} x^2$.

This equation is of the form $y = -Ax^2$ (where $A = \frac{g}{2v_0^2}$ is a positive constant), which is the equation of a downward-opening parabola with its vertex at the origin (the point of projection).

**Answer:** The trajectory of the ball is a parabola.

## 5. Practice Questions

**Instructions:** Attempt these questions to test your understanding.

**Question 1:** Find the equation of the parabola with vertex at $(-1, 4)$ and focus at $(-1, 2)$.

**Question 2:** Determine the vertex, focus, directrix, and axis of symmetry of the parabola $(x-3)^2 = 8(y+1)$.

**Question 3:** A parabolic reflector is to be designed with its vertex at the origin and opening to the right. The focus is to be located at $(5, 0)$. What is the equation of the parabola?

**Question 4:** A rocket follows a parabolic path. If its launch point is considered the origin $(0,0)$, and its trajectory is described by the equation $y = -\frac{1}{10}x^2 + 20x$.
    a) What is the shape of the trajectory?
    b) Does this equation represent a parabola opening upwards or downwards?
    c) What is the highest point the rocket reaches? (Hint: Find the vertex of the parabola in the form $y=ax^2+bx+c$).

**Answers:**

**Answer 1:**
*   Vertex: $(h, k) = (-1, 4)$.
*   Focus: $(-1, 2)$. The x-coordinates are the same, so the axis of symmetry is vertical ($x = -1$).
*   The focus is below the vertex, so the parabola opens downwards.
*   $p = |-1 - 4| = |-5| = 5$.
*   Equation: $(x-h)^2 = -4p(y-k)$.
*   $(x - (-1))^2 = -4(5)(y - 4)$
*   $(x+1)^2 = -20(y-4)$

**Answer 2:**
*   Equation: $(x-3)^2 = 8(y+1)$.
*   This is of the form $(x-h)^2 = 4p(y-k)$.
*   Vertex: $(h, k) = (3, -1)$.
*   Direction of opening: Since $4p = 8$ is positive, the parabola opens upwards.
*   Focal length: $4p = 8 \implies p = 2$.
*   Focus: $(h, k+p) = (3, -1+2) = (3, 1)$.
*   Directrix: $y = k-p = -1-2 = -3$.
*   Axis of Symmetry: $x = h = 3$.

**Answer 3:**
*   Vertex: $(0, 0)$.
*   Opens to the right (horizontal axis of symmetry).
*   Focus: $(p, 0) = (5, 0)$, so $p = 5$.
*   Standard equation for a rightward-opening parabola with vertex at the origin: $y^2 = 4px$.
*   Equation: $y^2 = 4(5)x \implies y^2 = 20x$.

**Answer 4:**
    a) The trajectory is a parabola.
    b) The equation is $y = -\frac{1}{10}x^2 + 20x$. This is in the form $y = ax^2+bx+c$ with $a = -\frac{1}{10}$. Since $a$ is negative, the parabola opens downwards.
    c) To find the highest point, we need to find the vertex of the parabola $y = ax^2+bx+c$. The x-coordinate of the vertex is given by $x = -\frac{b}{2a}$.
        Here, $a = -\frac{1}{10}$ and $b = 20$.
        $x = -\frac{20}{2(-\frac{1}{10})} = -\frac{20}{-\frac{2}{10}} = -\frac{20}{-\frac{1}{5}} = 20 \times 5 = 100$.
        Now, substitute $x=100$ back into the equation for $y$:
        $y = -\frac{1}{10}(100)^2 + 20(100)$
        $y = -\frac{1}{10}(10000) + 2000$
        $y = -1000 + 2000 = 1000$.
        The highest point the rocket reaches is at coordinates $(100, 1000)$.

## 6. Important Points to Remember

*   **Definition:** A parabola is the locus of points equidistant from a focus and a directrix.
*   **Vertex:** The midpoint between the focus and the directrix.
*   **Axis of Symmetry:** The line passing through the focus and perpendicular to the directrix.
*   **Standard Forms:** Memorize the four standard forms for parabolas with vertices at the origin and then apply the translation $(x-h)$ and $(y-k)$ for a vertex at $(h, k)$.
*   **Direction of Opening:** Determined by the squared term and the sign of the term involving the other variable.
*   **Reflective Property:** Crucial for applications in optics and signal reception.
*   **Projectile Motion:** The trajectory of a projectile under constant gravity is a parabola.

## 7. Connections to Textbooks and Course Outcomes

This topic directly supports **CO4** which involves applying numerical methods to find solutions for ODEs and Laplace equations. While this module primarily deals with the analytical geometry of parabolas, the underlying physical phenomena that lead to parabolic trajectories (like projectile motion) are governed by differential equations. The parabolic form itself can be a result of integrating acceleration-velocity-displacement relationships that arise from Newton's laws.

Furthermore, understanding the geometric properties of parabolas is foundational for more advanced mathematical modeling in physical sciences, which might involve fitting data to parabolic curves or analyzing systems exhibiting parabolic behavior.

**References to Textbooks:**

*   While Devore and Ross focus on probability and statistics, the mathematical foundations of conic sections are often covered in introductory calculus or analytic geometry texts, which are presumed prerequisites for a course like "Mathematics for Physical Science."
*   Sastry's "Introductory Methods of Numerical Analysis" and Chapra & Canale's "Numerical Methods for Engineers" are highly relevant to **CO4**. While this specific topic on parabolas is analytical, understanding these numerical methods is key to solving many physical problems that might involve curves that are approximated or analyzed using parabolas, especially in the context of differential equations and curve fitting. For instance, solving ODEs describing motion might yield solutions that are parabolic or can be approximated by parabolas over certain ranges.

The analytical and geometric understanding of parabolas, as presented here, provides the necessary framework for recognizing and modeling parabolic behaviors observed in physical systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
