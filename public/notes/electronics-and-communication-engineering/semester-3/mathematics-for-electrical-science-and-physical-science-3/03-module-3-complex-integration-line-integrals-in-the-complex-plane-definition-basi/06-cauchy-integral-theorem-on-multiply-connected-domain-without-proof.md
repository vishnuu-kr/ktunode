---
title: "Cauchy integral theorem on multiply connected domain (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe26d"
status: "completed"
scrapedAt: "2026-05-23T17:47:15.071Z"
---
# Module 3: Complex Integration - Line Integrals in the Complex Plane

## Topic: Cauchy Integral Theorem on Multiply Connected Domain (Without Proof)

**Subject:** Mathematics for Electrical Science and Physical Science – 3
**Module:** Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)
**Topic:** Cauchy Integral Theorem on Multiply Connected Domain (Without Proof)

**Learning Outcomes:**
* Understand the statement and implications of Cauchy's Integral Theorem for multiply connected domains.
* Recognize the conditions under which the theorem applies to domains with holes.
* Apply the theorem to simplify the computation of complex line integrals over closed curves in multiply connected domains.

**Course Outcomes Alignment:**
* **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** (Knowledge Level: K3) - This topic directly supports CO3 by extending the application of Cauchy's Integral Theorem to more complex domain structures.

**Textbook References:**
* **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.** - Chapter 13, Complex Integration.
* **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.** - Chapter 5, Cauchy's Integral Theorem.
* **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.** - Chapter 20, Complex Integration.
* **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.** - Chapter 18, Complex Integration.

---

### 1. Introduction to Multiply Connected Domains

Before delving into the Cauchy Integral Theorem for multiply connected domains, it's crucial to understand what such domains are.

*   **Simply Connected Domain:** A domain in the complex plane is simply connected if every simple closed curve within the domain encloses only points that are also within the domain. In essence, there are no "holes" in the domain.

*   **Multiply Connected Domain:** A domain in the complex plane is multiply connected if it contains at least one "hole." This means there exist simple closed curves within the domain that enclose points outside the domain.

    *   **Example:** The region between two concentric circles in the complex plane is a classic example of a multiply connected domain. The annulus $A = \{z \in \mathbb{C} : r_1 < |z| < r_2\}$, where $0 < r_1 < r_2$, is multiply connected because a circle $|z| = \frac{r_1+r_2}{2}$ encloses the origin, which is outside the annulus.

### 2. Cauchy's Integral Theorem: The Basic Form Recap

**Key Concept:** Cauchy's Integral Theorem states that if a function $f(z)$ is analytic (holomorphic) in a simply connected domain $D$, then for every simple closed contour $C$ within $D$, the integral of $f(z)$ along $C$ is zero.

Mathematically:
If $f(z)$ is analytic in a simply connected domain $D$, and $C$ is a simple closed contour in $D$, then:
$$ \oint_C f(z) \, dz = 0 $$

This fundamental theorem is the cornerstone for many results in complex analysis.

### 3. Cauchy's Integral Theorem on Multiply Connected Domains

The basic form of Cauchy's Integral Theorem applies to simply connected domains. However, it can be extended to multiply connected domains. This extension is particularly useful when dealing with functions that are analytic in a region with one or more "holes."

**Statement (Without Proof):**

Let $D$ be a multiply connected domain. Let $C_0$ be an outer simple closed contour and $C_1, C_2, \dots, C_n$ be inner simple closed contours in $D$, such that $C_1, \dots, C_n$ are entirely contained within the interior of $C_0$ and are disjoint from each other.

If a function $f(z)$ is **analytic in the domain $D$ and on the boundary contours $C_0, C_1, \dots, C_n$**, then the integral of $f(z)$ along $C_0$ is equal to the sum of the integrals of $f(z)$ along the inner contours $C_1, \dots, C_n$, where all contours are traversed in the same direction (e.g., counterclockwise).

Mathematically:
$$ \oint_{C_0} f(z) \, dz = \sum_{k=1}^{n} \oint_{C_k} f(z) \, dz $$

**Important Note on Direction:** For this theorem to hold as stated, the inner contours $C_1, \dots, C_n$ must be traversed in the **same orientation** as $C_0$ (typically counterclockwise). If an inner contour is traversed clockwise, its integral would have the opposite sign. A common convention to visualize this is to consider all contours oriented counterclockwise.

**Intuitive Explanation:**

The proof of this theorem typically involves connecting the outer contour $C_0$ to the inner contours $C_1, \dots, C_n$ with line segments (or "cuts") that are traversed in both directions. This process transforms the multiply connected domain into a simply connected domain. Applying the basic Cauchy's Integral Theorem to this modified domain, the integrals along the connecting segments cancel out, leaving the relationship stated above.

**Key Takeaway:** If $f(z)$ is analytic in a region between two contours $C_0$ (outer) and $C_1$ (inner), the integral along $C_0$ is the same as the integral along $C_1$ (provided they are traversed in the same direction).

**Generalization:** For a domain $D$ with $n$ holes enclosed by $n$ simple closed curves $C_1, \dots, C_n$, if $f(z)$ is analytic in $D$ and on its boundary curves, then for any contour $C$ in $D$ that encloses all holes, and any contour $C_i$ ($i=1, \dots, n$) on the boundary of the holes,
$$ \oint_C f(z) \, dz = \sum_{i=1}^n \oint_{C_i} f(z) \, dz $$
(with appropriate orientation of $C_i$ relative to $C$).

### 4. Implications and Applications

This theorem has significant implications:

1.  **Deformation of Contours:** It allows us to deform a contour of integration in a multiply connected domain as long as the function remains analytic in the region between the original and deformed contours. This is a powerful tool for simplifying integration problems.

2.  **Understanding Periodicity:** It helps understand how integrals behave in annular regions or regions with internal boundaries.

3.  **Foundation for Other Theorems:** It forms the basis for Cauchy's Integral Formula for multiply connected domains and for the Residue Theorem.

### 5. Examples

**Example 1: Annular Region**

Let $f(z) = \frac{1}{z}$ and consider the annulus $D = \{z \in \mathbb{C} : 1 < |z| < 2\}$. The function $f(z)$ is analytic in this domain.
Let $C_0$ be the circle $|z|=2$ (counterclockwise) and $C_1$ be the circle $|z|=1$ (counterclockwise).

According to the theorem for multiply connected domains:
$$ \oint_{C_0} \frac{1}{z} \, dz = \oint_{C_1} \frac{1}{z} \, dz $$

We know from basic complex integration that $\oint_C \frac{1}{z} \, dz = 2\pi i$ for any simple closed contour $C$ around the origin.
Therefore, $\oint_{|z|=2} \frac{1}{z} \, dz = 2\pi i$ and $\oint_{|z|=1} \frac{1}{z} \, dz = 2\pi i$.
The theorem holds: $2\pi i = 2\pi i$.

**Example 2: Domain with a Hole**

Let $f(z) = z^2$ and consider the domain $D$ which is the entire complex plane except for the origin ($z=0$). Let $C_0$ be the circle $|z|=2$ and $C_1$ be the circle $|z|=1$. Both are traversed counterclockwise.

The function $f(z) = z^2$ is analytic everywhere in the complex plane, including the annulus between $|z|=1$ and $|z|=2$.
By the Cauchy Integral Theorem on multiply connected domains:
$$ \oint_{|z|=2} z^2 \, dz = \oint_{|z|=1} z^2 \, dz $$

Since $z^2$ is analytic in the simply connected domain enclosed by $|z|=2$, the integral over $|z|=2$ is zero by the basic Cauchy's Integral Theorem.
$$ \oint_{|z|=2} z^2 \, dz = 0 $$
Similarly, since $z^2$ is analytic in the simply connected domain enclosed by $|z|=1$, the integral over $|z|=1$ is also zero.
$$ \oint_{|z|=1} z^2 \, dz = 0 $$
The theorem holds: $0 = 0$.

**Example 3: Applying the Theorem for Simplification**

Let $f(z) = e^z$. Consider integrating $f(z)$ over a contour $C$ that is a circle of radius 3 centered at the origin, but with a small circular hole of radius 0.5 centered at $z=1$ inside it. Let the outer contour $C_0$ be $|z|=3$ (counterclockwise) and the inner contour $C_1$ be $|z-1|=0.5$ (counterclockwise).

The function $f(z) = e^z$ is analytic everywhere in the complex plane.
According to the theorem on multiply connected domains:
$$ \oint_{C_0} e^z \, dz = \oint_{C_1} e^z \, dz $$

Since $e^z$ is analytic in the simply connected domain enclosed by $C_0$, the integral over $C_0$ is 0 by the basic Cauchy Integral Theorem:
$$ \oint_{|z|=3} e^z \, dz = 0 $$
Therefore, by the theorem for multiply connected domains, the integral over $C_1$ must also be 0:
$$ \oint_{|z-1|=0.5} e^z \, dz = 0 $$

This demonstrates how the theorem implies that the integral of an analytic function over any closed contour in a multiply connected domain is zero, provided the function is analytic in the entire domain enclosed by the outer contour, including the hole. The key is that the function remains analytic.

### 6. Important Points to Remember

*   **Analyticity is Key:** The function $f(z)$ **must be analytic** in the entire domain $D$, which includes the region between the outer and inner contours.
*   **Domain Structure:** The theorem applies to domains with one or more "holes."
*   **Contour Orientation:** Ensure all contours ($C_0$ and $C_1, \dots, C_n$) are oriented in the same direction for the equality to hold as stated. If an inner contour's direction is reversed, its contribution to the sum will have the opposite sign.
*   **Disjointness:** The inner contours must be disjoint from each other and lie strictly inside the outer contour.
*   **"Zero integral if analytic" principle extends:** If $f(z)$ is analytic in a domain $D$, then the integral of $f(z)$ over any closed curve in $D$ is zero, regardless of whether the domain is simply or multiply connected, as long as the curve lies entirely within a simply connected subset of $D$ where $f(z)$ is analytic. The theorem for multiply connected domains formalizes this when the domain itself is multiply connected.

### 7. Practice Questions

**Question 1:**
Let $f(z) = \cos(z)$. Consider the domain $D$ which is the annulus $2 < |z| < 4$. Let $C_0$ be the circle $|z|=4$ traversed counterclockwise, and $C_1$ be the circle $|z|=2$ traversed counterclockwise.
What is the relationship between $\oint_{C_0} f(z) \, dz$ and $\oint_{C_1} f(z) \, dz$?

**Answer 1:**
Since $f(z) = \cos(z)$ is analytic everywhere in the complex plane, it is analytic in the domain $D$ and on its boundary contours. Therefore, by the Cauchy Integral Theorem on Multiply Connected Domains,
$$ \oint_{C_0} \cos(z) \, dz = \oint_{C_1} \cos(z) \, dz $$
Furthermore, since $\cos(z)$ is analytic in the simply connected domain enclosed by $C_0$, by the basic Cauchy Integral Theorem, $\oint_{C_0} \cos(z) \, dz = 0$. Consequently, $\oint_{C_1} \cos(z) \, dz$ must also be 0.

**Question 2:**
Let $f(z) = \frac{1}{z-3}$. Consider the domain $D$ which is the annulus $1 < |z| < 5$. Let $C_0$ be the circle $|z|=5$ (counterclockwise) and $C_1$ be the circle $|z|=1$ (counterclockwise).
Is $f(z)$ analytic in the domain $D$? If so, what can be said about the integrals $\oint_{C_0} f(z) \, dz$ and $\oint_{C_1} f(z) \, dz$?

**Answer 2:**
The function $f(z) = \frac{1}{z-3}$ has a singularity at $z=3$. The domain $D$ is the annulus $1 < |z| < 5$. Since the singularity at $z=3$ lies within this annulus (because $1 < |3| < 5$), the function $f(z)$ is **not** analytic in the domain $D$. Therefore, the Cauchy Integral Theorem on Multiply Connected Domains cannot be applied directly to this domain and function.

**Question 3:**
Consider the integral $\oint_C \frac{e^z}{z^2} \, dz$, where $C$ is the circle $|z|=1$. Is this an application of the theorem on multiply connected domains? Explain.

**Answer 3:**
No, this is not directly an application of the Cauchy Integral Theorem on Multiply Connected Domains. The theorem is stated for a function $f(z)$ that is analytic in the domain. In this case, the integrand $\frac{e^z}{z^2}$ has a singularity at $z=0$, which lies inside the contour $|z|=1$. The function is not analytic in the domain enclosed by $C$. This integral would be evaluated using Cauchy's Integral Formula or the Residue Theorem.

**Question 4:**
Let $f(z)$ be analytic in the annulus $A = \{z \in \mathbb{C} : r_1 < |z| < r_2\}$. Let $C_1$ be the circle $|z| = r_1$ and $C_2$ be the circle $|z| = r_2$, both traversed counterclockwise. State the relationship between $\oint_{C_1} f(z) \, dz$ and $\oint_{C_2} f(z) \, dz$ according to the Cauchy Integral Theorem for multiply connected domains.

**Answer 4:**
By the Cauchy Integral Theorem on Multiply Connected Domains, since $f(z)$ is analytic in the annulus $A$ and on its boundary curves, the integral of $f(z)$ along the outer contour $C_2$ is equal to the integral along the inner contour $C_1$, provided they are traversed in the same direction.
Therefore,
$$ \oint_{C_2} f(z) \, dz = \oint_{C_1} f(z) \, dz $$

---

This concludes the study notes on the Cauchy Integral Theorem on Multiply Connected Domains. Remember that the analyticity of the function throughout the domain and on its boundaries is the most crucial condition for applying this theorem.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
