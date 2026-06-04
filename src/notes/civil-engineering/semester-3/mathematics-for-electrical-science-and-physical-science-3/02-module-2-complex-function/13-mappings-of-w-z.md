---
title: "Mappings of w=ଵ
z"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810699"
status: "completed"
scrapedAt: "2026-05-20T18:41:24.603Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

## Topic: Mappings of $w = \frac{1}{z}$

---

### **Learning Outcomes Covered:**

*   Understand the geometric interpretation of the transformation $w = \frac{1}{z}$.
*   Determine the image of a region under the transformation $w = \frac{1}{z}$.
*   Analyze the effect of the transformation $w = \frac{1}{z}$ on lines and circles.
*   Apply the transformation $w = \frac{1}{z}$ to solve problems involving complex function mappings.

---

### **1. Introduction to Complex Mappings and the Transformation $w = \frac{1}{z}$**

**Key Concepts:**

*   **Complex Function:** A function whose domain and codomain are subsets of the complex plane. We often represent a complex function as $w = f(z)$, where $z = x + iy$ and $w = u + iv$.
*   **Complex Plane (z-plane):** A 2D plane where the horizontal axis represents the real part ($x$) and the vertical axis represents the imaginary part ($y$) of a complex number $z$.
*   **Complex Plane (w-plane):** A 2D plane where the horizontal axis represents the real part ($u$) and the vertical axis represents the imaginary part ($v$) of a complex number $w$.
*   **Mapping:** A transformation that sends points from one complex plane (the z-plane) to another complex plane (the w-plane) according to a given complex function $w = f(z)$.
*   **The Transformation $w = \frac{1}{z}$ (Inversion and Conjugation):** This transformation is a fundamental mapping in complex analysis. It can be decomposed into two simpler transformations:
    1.  **Conjugation:** $z' = \bar{z}$ (reflection across the real axis).
    2.  **Inversion:** $w = \frac{1}{z'}$ (inversion with respect to the unit circle followed by reflection across the real axis).

**Derivation and Geometric Interpretation:**

Let $z = re^{i\theta}$ be a complex number in polar form.
Then, $w = \frac{1}{z} = \frac{1}{re^{i\theta}} = \frac{1}{r}e^{-i\theta}$.

*   **Magnitude:** The magnitude of $w$ is $|w| = \frac{1}{|z|} = \frac{1}{r}$. This means that points at a distance $r$ from the origin in the z-plane are mapped to points at a distance $\frac{1}{r}$ from the origin in the w-plane.
    *   If $|z| = 1$, then $|w| = 1$. The unit circle in the z-plane is mapped to the unit circle in the w-plane.
    *   If $|z| > 1$, then $|w| < 1$. The region outside the unit circle in the z-plane is mapped to the region inside the unit circle in the w-plane.
    *   If $|z| < 1$, then $|w| > 1$. The region inside the unit circle in the z-plane is mapped to the region outside the unit circle in the w-plane.
*   **Argument:** The argument of $w$ is $\arg(w) = -\arg(z) = -\theta$. This means that the angle a point makes with the positive real axis in the z-plane is reversed in the w-plane.
    *   A point on the positive real axis ($\theta = 0$) is mapped to a point on the positive real axis ($\arg(w) = 0$).
    *   A point on the positive imaginary axis ($\theta = \frac{\pi}{2}$) is mapped to a point on the negative real axis ($\arg(w) = -\frac{\pi}{2}$).
    *   A point on the negative real axis ($\theta = \pi$) is mapped to a point on the negative real axis ($\arg(w) = -\pi$, which is equivalent to $\pi$).
    *   A point on the negative imaginary axis ($\theta = -\frac{\pi}{2}$) is mapped to a point on the positive real axis ($\arg(w) = \frac{\pi}{2}$).

**Special Cases:**

*   **$z = 0$:** The transformation $w = \frac{1}{z}$ is undefined at $z=0$. In the context of mappings, $z=0$ is often mapped to the "point at infinity" in the w-plane.
*   **$z = \infty$:** If $z \to \infty$ (meaning $|z| \to \infty$), then $w = \frac{1}{z} \to 0$. So, the point at infinity in the z-plane is mapped to the origin in the w-plane.

---

### **2. Mappings of Lines and Circles**

The transformation $w = \frac{1}{z}$ has a significant effect on lines and circles.

**2.1. Mappings of Lines:**

*   **General Approach:**
    1.  Express $z$ in terms of $w$ and $\bar{w}$: From $w = \frac{1}{z}$, we get $z = \frac{1}{w}$.
    2.  Substitute $z = x + iy$ and $w = u + iv$ into the equation of the line.
    3.  Relate $x$ and $y$ to $u$ and $v$.
    4.  Simplify the resulting equation in terms of $u$ and $v$.

*   **Case 1: Lines passing through the origin in the z-plane.**
    *   **Equation:** $y = mx$ or $x = 0$.
    *   **Example:** Consider the line $y = x$ in the z-plane.
        Let $z = x + ix$. Then $w = \frac{1}{x + ix} = \frac{1}{x(1+i)} = \frac{1}{x} \frac{1-i}{2} = \frac{1}{2x} - i\frac{1}{2x}$.
        So, $u = \frac{1}{2x}$ and $v = -\frac{1}{2x}$.
        This implies $u = -v$ or $v = -u$. This is a line passing through the origin in the w-plane.
    *   **General Result:** Lines passing through the origin in the z-plane are mapped to lines passing through the origin in the w-plane. The angle of the line with the real axis is reversed.

*   **Case 2: Lines not passing through the origin in the z-plane.**
    *   **Equation:** $ax + by = c$, where $c \neq 0$.
    *   **Derivation:**
        $z = \frac{1}{w} = \frac{\bar{z}}{\bar{z}z} = \frac{\bar{z}}{|z|^2}$.
        So, $x = \text{Re}(z) = \text{Re}(\frac{1}{w}) = \frac{1}{w} + \frac{1}{\bar{w}} / 2 = \frac{u}{u^2+v^2}$.
        And $y = \text{Im}(z) = \text{Im}(\frac{1}{w}) = \frac{1}{w} - \frac{1}{\bar{w}} / 2i = \frac{-v}{u^2+v^2}$.
        Substitute these into $ax + by = c$:
        $a\left(\frac{u}{u^2+v^2}\right) + b\left(\frac{-v}{u^2+v^2}\right) = c$
        $au - bv = c(u^2+v^2)$
        $u^2 - \frac{a}{c}u + v^2 + \frac{b}{c}v = 0$
        Completing the square:
        $\left(u - \frac{a}{2c}\right)^2 + \left(v + \frac{b}{2c}\right)^2 = \left(\frac{a}{2c}\right)^2 + \left(\frac{b}{2c}\right)^2 = \frac{a^2+b^2}{4c^2}$
    *   **Result:** This is the equation of a circle with center $\left(\frac{a}{2c}, -\frac{b}{2c}\right)$ and radius $\frac{\sqrt{a^2+b^2}}{2|c|}$.
    *   **Crucially:** Since $c \neq 0$, the origin $(u,v) = (0,0)$ is NOT on this circle.

*   **Summary for Lines:**
    *   A line through the origin in the z-plane maps to a line through the origin in the w-plane.
    *   A line not through the origin in the z-plane maps to a circle passing through the origin in the w-plane.

---

**2.2. Mappings of Circles:**

*   **General Approach:**
    1.  Start with the equation of a circle in the z-plane: $|z - z_0| = r$ or $(x-x_0)^2 + (y-y_0)^2 = r^2$.
    2.  Use $z = \frac{1}{w}$.
    3.  Substitute into the circle equation and simplify in terms of $u$ and $v$.

*   **Case 1: Circles passing through the origin in the z-plane.**
    *   **Equation:** $(x-x_0)^2 + (y-y_0)^2 = r^2$, where $x_0^2 + y_0^2 = r^2$. (This condition means the origin is on the circle).
    *   **Derivation:**
        From the general line mapping, we know that a line not through the origin maps to a circle through the origin. Conversely, a circle through the origin should map to a line not through the origin.
        Let's use the general form $ax + by = c$ which maps to a circle through the origin. The inverse transformation $z = 1/w$ means a circle through the origin in the w-plane maps to a line not through the origin in the z-plane.
        Consider a circle through the origin in the z-plane. Let its equation be $z\bar{z} + \alpha z + \bar{\alpha}\bar{z} + k = 0$. If the origin is on the circle, then $k=0$. So, $z\bar{z} + \alpha z + \bar{\alpha}\bar{z} = 0$.
        Substitute $z = 1/w$:
        $\frac{1}{w}\frac{1}{\bar{w}} + \alpha\frac{1}{w} + \bar{\alpha}\frac{1}{\bar{w}} = 0$
        Multiply by $w\bar{w}$:
        $1 + \alpha\bar{w} + \bar{\alpha}w = 0$
        Let $\alpha = a+ib$. Then $1 + (a-ib)\bar{w} + (a+ib)w = 0$.
        Let $w = u+iv$. Then $\bar{w} = u-iv$.
        $1 + (a-ib)(u-iv) + (a+ib)(u+iv) = 0$
        $1 + (au - aiv - ibu - bv) + (au + aiv + ibu - bv) = 0$
        $1 + 2au + 2bv = 0$
        $2au + 2bv = -1$
        $au + bv = -\frac{1}{2}$
    *   **Result:** A circle passing through the origin in the z-plane maps to a line not passing through the origin in the w-plane. The line is perpendicular to the line connecting the origin to the center of the circle in the z-plane.

*   **Case 2: Circles not passing through the origin in the z-plane.**
    *   **Equation:** $|z - z_0| = r$, where $z_0 \neq 0$ and $r \neq |z_0|$ (to avoid passing through the origin).
    *   **Derivation:**
        $|z - z_0|^2 = r^2$
        $(z - z_0)(\bar{z} - \bar{z_0}) = r^2$
        $z\bar{z} - z\bar{z_0} - \bar{z}z_0 + z_0\bar{z_0} = r^2$
        Substitute $z = 1/w$ and $\bar{z} = 1/\bar{w}$:
        $\frac{1}{w}\frac{1}{\bar{w}} - \frac{1}{w}\bar{z_0} - \frac{1}{\bar{w}}z_0 + |z_0|^2 = r^2$
        Multiply by $w\bar{w}$:
        $1 - \bar{z_0}\bar{w} - z_0w + |z_0|^2w\bar{w} = r^2w\bar{w}$
        $1 - \bar{z_0}\bar{w} - z_0w = (r^2 - |z_0|^2)w\bar{w}$
        Since $r^2 - |z_0|^2 \neq 0$, we can divide by it:
        $w\bar{w} - \frac{z_0}{r^2 - |z_0|^2}w - \frac{\bar{z_0}}{r^2 - |z_0|^2}\bar{w} = \frac{1}{r^2 - |z_0|^2}$
        Let $C = \frac{1}{r^2 - |z_0|^2}$. Let $\beta = \frac{z_0}{r^2 - |z_0|^2} = C z_0$.
        $w\bar{w} - \beta w - \bar{\beta}\bar{w} = C$
        $w\bar{w} - \beta w - \bar{\beta}\bar{w} - C = 0$
        Completing the square for $w$:
        $(w - \beta)(\bar{w} - \bar{\beta}) = C + \beta\bar{\beta}$
        $|w - \beta|^2 = C + |C z_0|^2 = C + C^2 |z_0|^2 = C(1 + C|z_0|^2)$
    *   **Result:** A circle not passing through the origin in the z-plane maps to another circle not passing through the origin in the w-plane.

*   **Summary for Circles:**
    *   A circle through the origin in the z-plane maps to a line not through the origin in the w-plane.
    *   A circle not through the origin in the z-plane maps to a circle not through the origin in the w-plane.

---

### **3. Mappings of Regions**

To determine the image of a region, we typically:
1.  Identify the boundary of the region.
2.  Map the boundary using the transformation $w = 1/z$.
3.  Choose a test point within the original region.
4.  Map the test point to the w-plane.
5.  Determine which side of the mapped boundary contains the mapped test point.

**Examples:**

**Example 1: Map the region $|z| < 1$ (the unit disk) under $w = 1/z$.**

*   **Boundary:** $|z| = 1$ (the unit circle).
*   **Mapping of Boundary:** If $|z| = 1$, then $|w| = 1/|z| = 1/1 = 1$. The unit circle maps to itself.
*   **Test Point:** Let $z = 0.5$ (inside the unit disk).
*   **Mapping of Test Point:** $w = 1/0.5 = 2$.
*   **Region:** Since the test point $z=0.5$ is mapped to $w=2$, which is outside the unit circle $|w|=1$, the region $|z| < 1$ maps to the region $|w| > 1$ (the exterior of the unit disk) in the w-plane.

**Example 2: Map the region $|z| > 1$ (exterior of the unit disk) under $w = 1/z$.**

*   **Boundary:** $|z| = 1$ (the unit circle).
*   **Mapping of Boundary:** The unit circle maps to itself.
*   **Test Point:** Let $z = 2$ (outside the unit disk).
*   **Mapping of Test Point:** $w = 1/2 = 0.5$.
*   **Region:** Since the test point $z=2$ is mapped to $w=0.5$, which is inside the unit circle $|w|=1$, the region $|z| > 1$ maps to the region $|w| < 1$ (the unit disk) in the w-plane.

**Example 3: Map the upper half-plane $Im(z) > 0$ under $w = 1/z$.**

*   **Boundary:** The real axis, $y=0$ ($Im(z)=0$).
*   **Mapping of Boundary:**
    *   If $z$ is on the positive real axis ($z=x, x>0$), then $w = 1/x$, which is on the positive real axis in the w-plane.
    *   If $z$ is on the negative real axis ($z=x, x<0$), then $w = 1/x$, which is on the negative real axis in the w-plane.
    *   The origin $z=0$ is mapped to $w=\infty$.
    *   So, the real axis in the z-plane maps to the real axis in the w-plane, with the origin of the z-plane mapping to infinity on the w-plane, and infinity on the z-plane mapping to the origin on the w-plane.
*   **Test Point:** Let $z = i$ (in the upper half-plane, $Im(z) > 0$).
*   **Mapping of Test Point:** $w = 1/i = -i$.
*   **Region:** The point $w = -i$ is in the lower half-plane of the w-plane ($Im(w) < 0$). Therefore, the upper half-plane $Im(z) > 0$ maps to the lower half-plane $Im(w) < 0$.

**Example 4: Map the right half-plane $Re(z) > 0$ under $w = 1/z$.**

*   **Boundary:** The imaginary axis, $x=0$ ($Re(z)=0$).
*   **Mapping of Boundary:** A line through the origin ($x=0$) maps to a line through the origin. Since $x=0$ corresponds to $z = iy$, then $w = \frac{1}{iy} = \frac{1}{iy} \frac{-iy}{-iy} = \frac{-iy}{-y^2} = \frac{i}{y}$.
    *   If $y > 0$, $w = i/y$ lies on the positive imaginary axis ($u=0, v>0$).
    *   If $y < 0$, $w = i/y$ lies on the negative imaginary axis ($u=0, v<0$).
    *   Thus, the imaginary axis ($x=0$) maps to the imaginary axis ($u=0$) in the w-plane.
*   **Test Point:** Let $z = 1$ (in the right half-plane, $Re(z) > 0$).
*   **Mapping of Test Point:** $w = 1/1 = 1$.
*   **Region:** The point $w=1$ is on the positive real axis in the w-plane. This seems contradictory to the boundary mapping. Let's re-evaluate the boundary mapping.
    Consider $z = iy$. If $y \to \infty$, $z \to i\infty$. Then $w \to 0$.
    If $y \to 0^+$, $z \to 0^+$. Then $w \to i\infty$.
    If $y \to 0^-$, $z \to 0^-$. Then $w \to -i\infty$.
    The imaginary axis maps to the imaginary axis.

    Let's use the derived equation for lines not passing through the origin: $au - bv = c(u^2+v^2)$.
    The imaginary axis is $x=0$. This is a line through the origin.
    Let's reconsider the lines passing through the origin.
    The imaginary axis ($x=0$) is a line through the origin.
    If $z=iy$, $w = 1/(iy) = -i/y$.
    If $y>0$, $w = -i/y$ lies on the negative imaginary axis.
    If $y<0$, $w = -i/y$ lies on the positive imaginary axis.
    So, the imaginary axis maps to itself.

    Let's use the general form: Line $ax+by=c$.
    The imaginary axis is $x=0$. Here $a=1, b=0, c=0$. This is a line *through* the origin.
    The rule for lines through the origin is that they map to lines through the origin.
    $z = iy$. $w = 1/(iy) = -i/y$.
    $u = 0$, $v = -1/y$.
    As $y$ goes from $\infty$ to $0^+$, $v$ goes from $0^-$ to $-\infty$.
    As $y$ goes from $-\infty$ to $0^-$, $v$ goes from $0^+$ to $\infty$.
    So the imaginary axis in the z-plane maps to the imaginary axis in the w-plane.

    Now, let's consider the region $Re(z) > 0$.
    Test point $z=1$. $w = 1/1 = 1$. This is on the positive real axis ($u>0, v=0$).
    The boundary $x=0$ maps to $u=0$.
    Since the test point $z=1$ is to the right of the imaginary axis, its image $w=1$ is to the right of the imaginary axis in the w-plane.
    Therefore, the region $Re(z) > 0$ maps to the region $Re(w) > 0$.

**Example 5: Map the region between two circles $1 < |z| < 2$ under $w = 1/z$.**

*   **Boundaries:** $|z| = 1$ and $|z| = 2$.
*   **Mapping of Boundaries:**
    *   $|z|=1 \implies |w|=1$.
    *   $|z|=2 \implies |w|=1/2$.
*   **Test Point:** Let $z = 1.5$ (between the circles).
*   **Mapping of Test Point:** $w = 1/1.5 = 2/3$.
*   **Region:** The region between the circles is mapped to the region between the circles $|w|=1/2$ and $|w|=1$. The test point $w=2/3$ lies between these circles ($1/2 < 2/3 < 1$).
    So, $1 < |z| < 2$ maps to $1/2 < |w| < 1$.

**Example 6: Map the first quadrant $Re(z)>0, Im(z)>0$ under $w = 1/z$.**

*   **Boundaries:** Positive real axis ($y=0, x>0$) and positive imaginary axis ($x=0, y>0$).
*   **Mapping of Boundaries:**
    *   Positive real axis ($z=x, x>0$): $w = 1/x$, which is the positive real axis in the w-plane.
    *   Positive imaginary axis ($z=iy, y>0$): $w = 1/(iy) = -i/y$. As $y$ goes from $0^+$ to $\infty$, $-i/y$ goes from $-i\infty$ to $0^-$. This is the negative imaginary axis in the w-plane.
*   **Test Point:** Let $z = 1+i$ (in the first quadrant).
*   **Mapping of Test Point:** $w = \frac{1}{1+i} = \frac{1-i}{(1+i)(1-i)} = \frac{1-i}{2} = \frac{1}{2} - \frac{1}{2}i$.
*   **Region:** The test point $w = \frac{1}{2} - \frac{1}{2}i$ lies in the fourth quadrant of the w-plane ($Re(w)>0, Im(w)<0$).
    Therefore, the first quadrant in the z-plane maps to the fourth quadrant in the w-plane.

---

### **4. Applications of $w = 1/z$**

The $w = 1/z$ transformation is useful in various areas, including:

*   **Conformal Mapping:** It's a conformal mapping (preserves angles locally) everywhere except at $z=0$.
*   **Electrostatics:** Solving Laplace's equation in certain geometries. For example, mapping a region to simplify boundary conditions.
*   **Fluid Dynamics:** Analyzing potential flow patterns.
*   **Circuit Analysis:** Transforming circuit configurations.

**Example: Mapping a semi-infinite strip to a half-plane.**

Consider the semi-infinite strip $0 < x < 1, y > 0$.
We can map this to a region in the w-plane.
Let $z = x+iy$.
Consider the transformation $w = e^{\pi z}$. This maps the strip to the upper half of the w-plane.
If we want to map a region like $0 < x < 1, y > 0$ to something simpler using $1/z$.

Let's consider mapping a region that simplifies under $1/z$.
Imagine mapping a region that has a circular boundary to a region with a straight-line boundary, or vice-versa.

**Problem Example:** Find the image of the circle $|z-1| = 1$ under the transformation $w = 1/z$.

1.  **Identify the circle:** $|z-1|=1$. This is a circle centered at $z_0 = 1$ with radius $r=1$.
2.  **Check if it passes through the origin:** The center is at $z_0=1$, and the radius is $r=1$. The distance from the center to the origin is $|1| = 1$. Since $r = |z_0|$, the circle passes through the origin.
3.  **Apply the rule:** A circle passing through the origin maps to a line not passing through the origin.
4.  **Derive the line equation:**
    The circle is $|z-1|=1$.
    $(z-1)(\bar{z}-1) = 1$
    $z\bar{z} - z - \bar{z} + 1 = 1$
    $z\bar{z} - z - \bar{z} = 0$
    Substitute $z = 1/w$:
    $\frac{1}{w}\frac{1}{\bar{w}} - \frac{1}{w} - \frac{1}{\bar{w}} = 0$
    Multiply by $w\bar{w}$:
    $1 - \bar{w} - w = 0$
    $w + \bar{w} = 1$
    Let $w = u+iv$. Then $(u+iv) + (u-iv) = 1$.
    $2u = 1$
    $u = 1/2$.
5.  **Result:** The image of the circle $|z-1|=1$ under $w=1/z$ is the line $u = 1/2$ in the w-plane.

---

### **5. Practice Questions**

1.  What is the image of the circle $|z|=2$ under the transformation $w = 1/z$?
2.  Map the line $x=1$ in the z-plane to the w-plane under the transformation $w = 1/z$.
3.  Find the image of the region $Im(z) < 0$ (lower half-plane) under $w = 1/z$.
4.  What is the image of the region $0 < Re(z) < 1$ under $w = 1/z$?
5.  Map the circle $|z-2i|=2$ under the transformation $w = 1/z$.

---

### **6. Answers to Practice Questions**

1.  **Answer:** If $|z|=2$, then $|w| = 1/|z| = 1/2$. The image is the circle $|w|=1/2$.
    *   *Reasoning:* A circle not passing through the origin maps to another circle not passing through the origin.

2.  **Answer:** The line $x=1$ is a line not passing through the origin. It maps to a circle passing through the origin.
    $z = x+iy$. $w = u+iv$.
    $x = \text{Re}(z) = \text{Re}(1/w) = \frac{u}{u^2+v^2}$.
    Substituting into $x=1$:
    $1 = \frac{u}{u^2+v^2}$
    $u^2+v^2 = u$
    $u^2 - u + v^2 = 0$
    Completing the square: $(u - 1/2)^2 + v^2 = (1/2)^2 = 1/4$.
    The image is the circle $(u - 1/2)^2 + v^2 = 1/4$.

3.  **Answer:** The lower half-plane $Im(z) < 0$ maps to the upper half-plane $Im(w) > 0$.
    *   *Reasoning:* The real axis ($y=0$) maps to the real axis ($u=0$). Take a test point $z = -i$ (in the lower half-plane). $w = 1/(-i) = i$. Since $w=i$ is in the upper half-plane, the lower half-plane maps to the upper half-plane.

4.  **Answer:** The region $0 < Re(z) < 1$ maps to the exterior of a circle, specifically the region outside the circle $|w-2|=2$.
    *   *Reasoning:*
        The boundaries are $x=0$ (imaginary axis) and $x=1$ (line).
        $x=0$ maps to $u=0$ (imaginary axis).
        $x=1$ maps to $(u-1/2)^2 + v^2 = 1/4$ (circle with center $(1/2, 0)$ and radius $1/2$).
        Consider a test point $z=1/2$ (in the region $0 < x < 1$).
        $w = 1/(1/2) = 2$.
        The image of $z=1/2$ is $w=2$. The point $w=2$ lies outside the circle $(u-1/2)^2 + v^2 = 1/4$ (since $(2-1/2)^2 + 0^2 = (3/2)^2 = 9/4 > 1/4$).
        The boundary $u=0$ is mapped to.
        The region $0 < Re(z) < 1$ means $z$ is between the imaginary axis and the line $x=1$.
        The image of the imaginary axis ($x=0$) is the imaginary axis ($u=0$).
        The image of the line $x=1$ is the circle $(u-1/2)^2 + v^2 = 1/4$.
        The test point $w=2$ is to the right of the imaginary axis and outside the circle.
        The region is $Re(z) > 0$ and $Re(z) < 1$.
        $Re(z)>0$ maps to $Re(w)>0$.
        $Re(z)<1$ maps to the exterior of $(u-1/2)^2 + v^2 = 1/4$.
        So, the region is $Re(w)>0$ and outside the circle.
        Let's check the boundaries. The imaginary axis ($x=0$) maps to the imaginary axis ($u=0$). The line $x=1$ maps to the circle $(u-1/2)^2 + v^2 = 1/4$.
        The region $0 < x < 1$ is to the right of $x=0$ and to the left of $x=1$.
        The image is to the right of $u=0$ and outside the circle.
        The point $w=2$ is to the right of $u=0$ and outside the circle.
        The image is the region $u > 0$ and $(u - 1/2)^2 + v^2 > 1/4$.

5.  **Answer:** The circle $|z-2i|=2$ is centered at $z_0 = 2i$ with radius $r=2$.
    The distance from the center to the origin is $|2i|=2$. Since $r=|z_0|$, the circle passes through the origin.
    It maps to a line.
    $|z-2i|=2$
    $(z-2i)(\bar{z}+2i) = 4$
    $z\bar{z} + 2iz - 2i\bar{z} + 4 = 4$
    $z\bar{z} + 2i(z - \bar{z}) = 0$
    Substitute $z=1/w$:
    $\frac{1}{w}\frac{1}{\bar{w}} + 2i(\frac{1}{w} - \frac{1}{\bar{w}}) = 0$
    Multiply by $w\bar{w}$:
    $1 + 2i(\bar{w} - w) = 0$
    $1 - 2i(w - \bar{w}) = 0$
    Let $w = u+iv$. $w - \bar{w} = (u+iv) - (u-iv) = 2iv$.
    $1 - 2i(2iv) = 0$
    $1 - 4i^2v = 0$
    $1 + 4v = 0$
    $v = -1/4$.
    The image is the line $v = -1/4$.

---

### **Important Points to Remember:**

*   $w = 1/z$ maps circles and lines to circles and lines.
*   A line through the origin maps to a line through the origin.
*   A line not through the origin maps to a circle through the origin.
*   A circle through the origin maps to a line not through the origin.
*   A circle not through the origin maps to a circle not through the origin.
*   $z=0$ maps to $w=\infty$.
*   $z=\infty$ maps to $w=0$.
*   The transformation $w=1/z$ is conformal everywhere except at $z=0$.
*   The unit circle $|z|=1$ is mapped to itself. The interior $|z|<1$ is mapped to the exterior $|w|>1$, and vice versa.
*   The real axis maps to the real axis.
*   The imaginary axis maps to the imaginary axis.
*   The upper half-plane maps to the lower half-plane.

---
