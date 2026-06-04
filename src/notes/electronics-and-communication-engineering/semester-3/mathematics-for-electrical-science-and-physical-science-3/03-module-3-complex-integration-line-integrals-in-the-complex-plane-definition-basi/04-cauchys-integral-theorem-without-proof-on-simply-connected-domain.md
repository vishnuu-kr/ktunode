---
title: "Cauchy’s integral theorem (without proof) on simply connected domain"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe26b"
status: "completed"
scrapedAt: "2026-05-23T17:47:13.432Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

### Topic: Cauchy’s Integral Theorem (Without Proof) on Simply Connected Domain

**1. Introduction**

This topic delves into one of the most fundamental theorems in complex analysis: Cauchy's Integral Theorem. Understanding this theorem is crucial for computing complex integrals efficiently and for developing many other important results in the field. It forms the bedrock for applying complex analysis to various problems in electrical and physical sciences.

**2. Key Concepts and Definitions**

Before stating Cauchy's Integral Theorem, let's define some essential terms:

*   **Analytic Function:** A function $f(z)$ is analytic in an open region $D$ if it is differentiable at every point in $D$. Analyticity implies that the Cauchy-Riemann equations are satisfied and that the function has continuous partial derivatives.
    *   *Refer to:* Kreyszig, Chapter 13 (Functions of a Complex Variable) for detailed discussion on analyticity.

*   **Simply Connected Domain:** A domain (an open connected set) $D$ in the complex plane is called simply connected if every simple closed curve in $D$ encloses only points that are also in $D$. In simpler terms, it's a domain without "holes." The interior of a circle or a rectangle are examples of simply connected domains. The region between two concentric circles is *not* simply connected.
    *   *Refer to:* Zill & Shanahan, Chapter 4 (Analytic Functions) for a precise definition and examples of simply connected domains.

*   **Simple Closed Curve (Jordan Curve):** A curve $\gamma$ in the complex plane that is continuous, does not intersect itself, and its start and end points coincide.

*   **Contour Integral (Line Integral in the Complex Plane):** For a complex function $f(z)$ and a curve $\gamma$ defined by $z(t) = x(t) + iy(t)$, where $a \le t \le b$, the contour integral is defined as:
    $$ \oint_\gamma f(z) dz $$
    This integral can be computed as:
    $$ \oint_\gamma f(z) dz = \int_a^b f(z(t)) z'(t) dt $$
    where $z'(t) = x'(t) + iy'(t)$.
    *   *Refer to:* Kreyszig, Section 13.4 (Line Integrals) and Ramana, Chapter 28 (Complex Integration) for the definition and properties of contour integrals.

**3. Cauchy’s Integral Theorem (Without Proof) on Simply Connected Domain**

**Statement:** If a function $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed curve $\gamma$ lying entirely within $D$, the integral of $f(z)$ around $\gamma$ is zero.

$$ \oint_\gamma f(z) dz = 0 $$

**Explanation:**

This theorem is incredibly powerful. It states that if you have a "well-behaved" function (analytic) in a region without holes, and you integrate it along any closed path within that region, the result will always be zero. This is analogous to how the line integral of a conservative vector field around a closed loop is zero.

**Implications and Significance:**

*   **Independence of Path:** Cauchy's Integral Theorem implies that the contour integral of an analytic function between two points is independent of the path taken, as long as the path lies within the domain of analyticity. If you have two paths $\gamma_1$ and $\gamma_2$ connecting points $A$ and $B$, and $f(z)$ is analytic in the region between them, then $\int_{\gamma_1} f(z) dz = \int_{\gamma_2} f(z) dz$. This is because you can form a closed loop by going from $A$ to $B$ along $\gamma_1$ and then from $B$ to $A$ along the reverse of $\gamma_2$. By Cauchy's Theorem, this closed loop integral is zero.

*   **Foundation for Other Theorems:** This theorem is the foundation for Cauchy's Integral Formula, the Residue Theorem, and many other crucial results in complex analysis.

**Alignment with Course Outcomes:**

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** This topic directly addresses the first part of CO3. By understanding Cauchy's Integral Theorem, we can immediately conclude that many complex integrals are zero without explicit calculation, provided the conditions are met.

**4. Examples**

**Example 1:**

Let $f(z) = z^2$ and $\gamma$ be the circle $|z| = 1$ (counterclockwise).
The function $f(z) = z^2$ is analytic everywhere in the complex plane, which is a simply connected domain. The circle $|z| = 1$ is a simple closed curve lying entirely within this domain.
According to Cauchy's Integral Theorem:
$$ \oint_{|z|=1} z^2 dz = 0 $$

**Example 2:**

Let $f(z) = e^z$ and $\gamma$ be the square with vertices $(0,0), (1,0), (1,1), (0,1)$.
The function $f(z) = e^z$ is analytic everywhere in the complex plane. The given square is a simple closed curve. The region enclosed by the square is simply connected.
Therefore, by Cauchy's Integral Theorem:
$$ \oint_\gamma e^z dz = 0 $$

**Example 3:**

Consider the integral $\oint_\gamma \frac{1}{z} dz$ where $\gamma$ is the circle $|z|=2$.
The function $f(z) = \frac{1}{z}$ is analytic everywhere *except* at $z=0$. The circle $|z|=2$ encloses the point $z=0$.
Since the domain of analyticity (the complex plane excluding $z=0$) is *not* simply connected with respect to the path $\gamma$ (as the path encloses a point not in the domain of analyticity for $f(z)$), Cauchy's Integral Theorem *cannot* be directly applied to conclude the integral is zero. In fact, this integral is $2\pi i$ (which we will see when we learn about Cauchy's Integral Formula or the Residue Theorem). This example highlights the importance of the domain of analyticity and the condition of the curve lying *entirely within* the domain.

**5. Important Points to Remember**

*   **Analyticity is Key:** The function $f(z)$ *must* be analytic in the domain containing the curve $\gamma$. If the function has singularities within the domain, the theorem does not apply directly.
*   **Simply Connected Domain:** The domain in which the function is analytic must be simply connected.
*   **Curve Inside the Domain:** The entire closed curve $\gamma$ must lie strictly within the simply connected domain of analyticity.
*   **Zero Result:** If the conditions are met, the integral is *always* zero, regardless of the shape of the closed curve.

**6. Practice Questions/Exercises**

**Question 1:**
Let $f(z) = \sin(z)$ and $\gamma$ be the ellipse $x^2/4 + y^2/1 = 1$. Is $\oint_\gamma f(z) dz = 0$? Justify your answer.

**Question 2:**
Consider the integral $\oint_\gamma z^3 + 2z dz$, where $\gamma$ is any simple closed curve in the complex plane. Does Cauchy's Integral Theorem guarantee that this integral is zero? Explain.

**Question 3:**
Let $f(z) = \frac{1}{z-a}$. For which simple closed curves $\gamma$ lying entirely in the domain of analyticity of $f(z)$ can we conclude, using Cauchy's Integral Theorem, that $\oint_\gamma f(z) dz = 0$?

**7. Answers to Practice Questions**

**Answer 1:**
Yes, $\oint_\gamma f(z) dz = 0$.
**Justification:** The function $f(z) = \sin(z)$ is analytic everywhere in the complex plane, which is a simply connected domain. The ellipse $x^2/4 + y^2/1 = 1$ is a simple closed curve. Since the function is analytic and the curve is simple and closed, and it lies entirely within the domain of analyticity, Cauchy's Integral Theorem applies.

**Answer 2:**
Yes.
**Explanation:** The function $f(z) = z^3 + 2z$ is a polynomial. Polynomials are analytic everywhere in the complex plane. The complex plane is a simply connected domain. Therefore, for any simple closed curve $\gamma$ in the complex plane, Cauchy's Integral Theorem guarantees that $\oint_\gamma (z^3 + 2z) dz = 0$.

**Answer 3:**
Cauchy's Integral Theorem guarantees that $\oint_\gamma \frac{1}{z-a} dz = 0$ if and only if the simple closed curve $\gamma$ lies entirely within the domain of analyticity of $f(z) = \frac{1}{z-a}$. The function $f(z) = \frac{1}{z-a}$ has a singularity at $z=a$. Therefore, the domain of analyticity is the complex plane excluding the point $a$. Thus, Cauchy's Integral Theorem applies (and the integral is zero) for all simple closed curves $\gamma$ that *do not enclose the point $a$*. If $\gamma$ encloses $a$, the theorem does not apply.

---
This is a foundational topic. Master it well, as it simplifies many complex integration problems!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
