---
title: "Cauchy integral theorem on multiply connected domain (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb0"
status: "completed"
scrapedAt: "2026-05-20T17:50:50.710Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

### Topic: Cauchy Integral Theorem on Multiply Connected Domains (Without Proof)

**Learning Outcomes:**

*   Understand the conditions under which Cauchy's Integral Theorem can be extended to multiply connected domains.
*   Apply Cauchy's Integral Theorem to evaluate line integrals of analytic functions over closed paths in multiply connected domains.
*   Recognize the significance of the theorem in simplifying complex integration problems.

---

### Introduction to Multiply Connected Domains

In complex analysis, we often encounter domains that are not simply connected. A **simply connected domain** is a domain where every simple closed contour within the domain encloses only points belonging to the domain. In other words, there are no "holes" in a simply connected domain.

A **multiply connected domain**, on the other hand, is a domain that has one or more "holes" or interior boundaries. These holes are themselves closed curves.

**Example:**

*   A disk with its center removed (an annulus) is a multiply connected domain.
*   A region between two concentric circles is a multiply connected domain.
*   A region shaped like a donut is a multiply connected domain.

---

### Cauchy's Integral Theorem for Multiply Connected Domains

The standard Cauchy Integral Theorem states that if a function $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed contour lying entirely within $D$, then $\oint_C f(z) dz = 0$.

For multiply connected domains, the theorem needs an extension to handle the presence of these holes. The key idea is that the integral around the outer boundary can be related to the integrals around the inner boundaries.

**Statement of Cauchy's Integral Theorem for Multiply Connected Domains (Without Proof):**

Let $D$ be a multiply connected domain bounded by a finite number of non-intersecting simple closed contours $C_0, C_1, C_2, \ldots, C_n$. Let $C_0$ be the outer boundary, and $C_1, C_2, \ldots, C_n$ be the inner boundaries (holes). Suppose $f(z)$ is analytic in $D$ and on the boundaries $C_0, C_1, \ldots, C_n$. Furthermore, let $C$ be a simple closed contour in $D$ such that its interior contains all the inner boundaries $C_1, \ldots, C_n$ but does not enclose any part of $C_0$ or any region outside $D$.

**Then, the integral of $f(z)$ around $C$ can be expressed as the sum of the integrals around the inner boundaries:**

$$ \oint_C f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz $$

**Important Note:** The orientation of the contours is crucial. Conventionally, the outer boundary $C_0$ is traversed counterclockwise, and the inner boundaries $C_1, C_2, \ldots, C_n$ are traversed clockwise. If the inner boundaries are traversed counterclockwise, the theorem becomes:

$$ \oint_C f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz $$

**Simplified Statement and Interpretation:**

A more common and practical statement, often derived from the fundamental theorem, relates the integral around the outer boundary to the integrals around the inner boundaries.

Let $D$ be a multiply connected domain bounded by an outer contour $C_0$ and one or more inner contours $C_1, C_2, \ldots, C_n$. If $f(z)$ is analytic in $D$ and on all these boundaries, then the integral of $f(z)$ along $C_0$ (oriented counterclockwise) is equal to the sum of the integrals along each of the inner contours $C_k$ (also oriented counterclockwise).

$$ \oint_{C_0} f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz $$

**How this is achieved (Conceptual Explanation):**

Imagine connecting the outer boundary $C_0$ to each inner boundary $C_k$ using "cross-cut" paths. These cross-cuts are traversed in opposite directions, effectively canceling each other out. This transforms the multiply connected domain into a simply connected domain. The integral around the original contour $C_0$ can then be shown to be equal to the sum of the integrals around the inner contours $C_k$, provided appropriate orientations are chosen.

---

### Key Concepts and Definitions

*   **Analytic Function:** A function $f(z)$ is analytic in a domain $D$ if it is differentiable at every point in $D$.
*   **Simply Connected Domain:** A domain where any simple closed curve within the domain encloses only points within that domain. No "holes".
*   **Multiply Connected Domain:** A domain containing "holes" or regions that are excluded.
*   **Simple Closed Contour:** A closed curve that does not intersect itself.
*   **Outer Boundary:** The outermost boundary of a multiply connected domain.
*   **Inner Boundary (Hole):** A closed contour within a multiply connected domain that creates a "hole."
*   **Orientation of Contour:** The direction in which a contour is traversed (e.g., counterclockwise or clockwise).

---

### Practical Application and Simplification

The power of Cauchy's Integral Theorem on multiply connected domains lies in its ability to simplify integration. If a function $f(z)$ is analytic throughout a multiply connected domain, the integral around the outer boundary can be computed by summing the integrals around the inner boundaries. This is particularly useful when the integral over the outer boundary might be difficult to compute directly, but the integrals over the simpler inner boundaries are manageable.

---

### Examples

**Example 1:**

Let $f(z) = z^2$. Consider a multiply connected domain $D$ which is the region between the circle $|z|=2$ (outer boundary $C_0$) and the circle $|z|=1$ (inner boundary $C_1$). $f(z) = z^2$ is analytic everywhere in the complex plane, and thus analytic in the domain $D$ and on its boundaries.

According to the theorem (using counterclockwise orientation for both boundaries for this interpretation):

$$ \oint_{C_0} z^2 dz = \oint_{C_1} z^2 dz $$

Since $f(z) = z^2$ is analytic in a simply connected domain (e.g., $|z| < 2$) containing $C_0$, by the standard Cauchy Integral Theorem, $\oint_{C_0} z^2 dz = 0$. Similarly, since $f(z) = z^2$ is analytic in a simply connected domain (e.g., $|z| < 1$) containing $C_1$, $\oint_{C_1} z^2 dz = 0$.

This example illustrates that if the function is analytic in a simply connected domain enclosing the multiply connected domain, the integrals over all boundaries will be zero. The theorem is more powerful when the function has singularities *outside* the domain of integration of interest but *inside* a larger domain.

**Example 2:**

Consider the function $f(z) = \frac{1}{z}$. Let $D$ be the annulus $1 < |z| < 2$. The outer boundary is $C_0: |z|=2$ and the inner boundary is $C_1: |z|=1$.

The function $f(z) = \frac{1}{z}$ has a singularity at $z=0$, which is inside the inner boundary $C_1$ and thus outside the domain $D$.

According to Cauchy's Integral Theorem for multiply connected domains, if $f(z)$ is analytic in the domain $D$ and on its boundaries, then the integral over the outer boundary $C_0$ (counterclockwise) equals the integral over the inner boundary $C_1$ (clockwise).

$$ \oint_{C_0} \frac{1}{z} dz = \oint_{C_1} \frac{1}{z} dz \quad (\text{with } C_1 \text{ clockwise}) $$

Alternatively, if we consider both boundaries traversed counterclockwise:

$$ \oint_{C_0} \frac{1}{z} dz = \oint_{C_1} \frac{1}{z} dz $$

We know from basic complex integration that for $C_k$ being a circle $|z|=R$ traversed counterclockwise:
$\oint_{C_k} \frac{1}{z} dz = 2\pi i$.

Therefore, $\oint_{C_0} \frac{1}{z} dz = 2\pi i$ (for $|z|=2$ counterclockwise) and $\oint_{C_1} \frac{1}{z} dz = 2\pi i$ (for $|z|=1$ counterclockwise).

The theorem states: $\oint_{C_0} f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz$.
So, $2\pi i = 2\pi i$. This confirms the theorem.

**Example 3 (Illustrating the power):**

Let $f(z) = \frac{1}{z^2 - 1}$. Consider the domain $D$ between the circle $C_0: |z|=3$ and the two inner circles $C_1: |z-1|=0.5$ and $C_2: |z+1|=0.5$. The function $f(z)$ has singularities at $z=1$ and $z=-1$, which are enclosed by $C_1$ and $C_2$ respectively, and are outside $D$.

Since $f(z)$ is analytic in the domain $D$ and on its boundaries, we can apply the theorem. Let $C_0$ be oriented counterclockwise, $C_1$ be oriented clockwise, and $C_2$ be oriented clockwise.

$$ \oint_{C_0} \frac{1}{z^2 - 1} dz = \oint_{C_1} \frac{1}{z^2 - 1} dz + \oint_{C_2} \frac{1}{z^2 - 1} dz $$

Using the alternative statement (all counterclockwise):

$$ \oint_{C_0} \frac{1}{z^2 - 1} dz = \oint_{C_1} \frac{1}{z^2 - 1} dz + \oint_{C_2} \frac{1}{z^2 - 1} dz $$

This approach would be very complicated to evaluate directly. However, if we were asked to evaluate $\oint_{C_0} \frac{1}{z^2 - 1} dz$ where $f(z)$ has singularities *inside* $C_0$, Cauchy's Integral Formula would be more direct. The theorem for multiply connected domains is useful when we want to show that the integral over an outer boundary is equal to the sum of integrals over inner boundaries, especially when $f(z)$ is analytic in the region between these boundaries.

**Revisiting Example 2 with a slightly different perspective:**

Let $f(z) = \frac{1}{z}$. We are interested in the integral over the annulus $D: 1 < |z| < 2$. $C_0$ is $|z|=2$ (CCW) and $C_1$ is $|z|=1$ (CW).

The theorem states that if $f$ is analytic in $D$ and on its boundaries, then $\oint_C f(z) dz = \sum \oint_{C_k} f(z) dz$ where $C$ is the outer boundary and $C_k$ are inner boundaries. The inner boundaries are typically oriented such that the domain remains to the left.

So, if $C_0$ is $|z|=2$ (CCW) and $C_1$ is $|z|=1$ (CCW):
$$ \oint_{|z|=2, \text{CCW}} \frac{1}{z} dz = \oint_{|z|=1, \text{CCW}} \frac{1}{z} dz $$
Both evaluate to $2\pi i$.

If $C_0$ is $|z|=2$ (CCW) and $C_1$ is $|z|=1$ (CW):
$$ \oint_{|z|=2, \text{CCW}} \frac{1}{z} dz = \oint_{|z|=1, \text{CW}} \frac{1}{z} dz $$
$2\pi i = -2\pi i$. This is incorrect.

The correct interpretation for the "no proof" statement is usually that if $f(z)$ is analytic in the region bounded by $C_0$ (outer, CCW) and $C_1, \ldots, C_n$ (inner, CW), then $\oint_{C_0} f(z) dz + \sum_{k=1}^n \oint_{C_k} f(z) dz = 0$.
This is equivalent to:
$$ \oint_{C_0} f(z) dz = - \sum_{k=1}^n \oint_{C_k} f(z) dz $$
where $C_k$ are oriented CW.

If we stick to CCW orientation for all boundaries:
$$ \oint_{C_0} f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz $$
This is the most common formulation when extending Cauchy's theorems to multiply connected domains.

In Example 2: $C_0: |z|=2$ (CCW), $C_1: |z|=1$ (CCW). $f(z) = 1/z$.
$\oint_{|z|=2} \frac{1}{z} dz = 2\pi i$.
$\oint_{|z|=1} \frac{1}{z} dz = 2\pi i$.
So, $2\pi i = 2\pi i$. This holds.

---

### Important Points to Remember

*   **Analyticity is Key:** The function $f(z)$ must be analytic in the entire domain, including all the boundaries, for the theorem to apply.
*   **Multiply Connected Domain:** The theorem is specifically for domains with holes.
*   **Orientation:** The orientation of the contours is crucial. Typically, the outer boundary is traversed counterclockwise, and the inner boundaries are traversed clockwise to ensure the entire domain of integration is to the left of the path.
*   **Equivalence:** The formulation $\oint_{C_0} f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz$ (all CCW) is equivalent to $\oint_{C_0} f(z) dz + \sum_{k=1}^n \oint_{C_k} f(z) dz = 0$ (outer CCW, inner CW).
*   **Simplification:** The theorem provides a way to simplify integrals by relating them to integrals over simpler contours or by showing them to be zero if the function is analytic throughout the larger simply connected domain enclosing the multiply connected domain.

---

### Relationship to Course Outcomes

*   **CO1 (Fourier Transforms):** While not directly related, understanding complex integration is foundational for many advanced signal processing techniques that utilize Fourier Transforms.
*   **CO2 (Analyticity and Conformal Mapping):** This topic heavily relies on the concept of analyticity, which is central to understanding conformal mapping.
*   **CO3 (Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula):** This topic is a direct extension of Cauchy's Integral Theorem to more complex domain structures. It builds upon the foundational knowledge of evaluating line integrals.
*   **CO4 (Series expansion and Residue Theorem):** Understanding the conditions for Cauchy's theorems is essential before delving into series expansions and the Residue Theorem, which deal with functions that may not be analytic everywhere.

---

### Practice Questions and Exercises

1.  **Question:** Let $f(z) = e^z$. Consider the domain $D$ which is the region between the circle $C_0: |z|=3$ (outer boundary) and the circle $C_1: |z|=1$ (inner boundary). Evaluate $\oint_{C_0} f(z) dz$ and $\oint_{C_1} f(z) dz$, assuming both are traversed counterclockwise. State how Cauchy's Integral Theorem for multiply connected domains applies here.
    **Answer:**
    Since $f(z) = e^z$ is analytic everywhere, it is analytic in the annulus $D$ and on its boundaries.
    By the standard Cauchy Integral Theorem (as $e^z$ is analytic in simply connected domains containing $C_0$ and $C_1$):
    $\oint_{C_0} e^z dz = 0$ (for $|z|=3$ CCW)
    $\oint_{C_1} e^z dz = 0$ (for $|z|=1$ CCW)
    Cauchy's Integral Theorem for multiply connected domains states $\oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz$ (both CCW). Here, $0 = 0$, which is consistent.

2.  **Question:** Let $f(z) = \frac{1}{z-2}$. Consider the region between the circle $C_0: |z|=1$ and the circle $C_1: |z|=3$.
    (a) Is $f(z)$ analytic in the region between $C_0$ and $C_1$?
    (b) If $C_0$ is traversed counterclockwise and $C_1$ is traversed clockwise, what is the relation between $\oint_{C_0} f(z) dz$ and $\oint_{C_1} f(z) dz$ according to Cauchy's Integral Theorem for multiply connected domains?
    **Answer:**
    (a) No, $f(z) = \frac{1}{z-2}$ has a singularity at $z=2$. This singularity lies within the region between $C_0: |z|=1$ and $C_1: |z|=3$. Therefore, $f(z)$ is not analytic in this multiply connected domain. The theorem cannot be directly applied here.

3.  **Question:** Let $f(z) = z^3 + 2z$. Consider the domain $D$ which is the region between the circle $C_0: |z|=2$ (outer) and the union of two disjoint circles $C_1: |z-1|=0.5$ and $C_2: |z+1|=0.5$ (inner). Let $C_0$ be traversed counterclockwise, and $C_1$ and $C_2$ be traversed counterclockwise. What is the relationship between the integrals $\oint_{C_0} f(z) dz$, $\oint_{C_1} f(z) dz$, and $\oint_{C_2} f(z) dz$?
    **Answer:**
    The function $f(z) = z^3 + 2z$ is a polynomial, so it is analytic everywhere in the complex plane. Therefore, it is analytic in the multiply connected domain $D$ and on its boundaries.
    According to Cauchy's Integral Theorem for multiply connected domains (with all contours traversed counterclockwise):
    $$ \oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz + \oint_{C_2} f(z) dz $$
    Since $f(z)$ is analytic in the simply connected domain enclosed by $C_0$, $\oint_{C_0} f(z) dz = 0$.
    Similarly, since $f(z)$ is analytic in the simply connected domains enclosed by $C_1$ and $C_2$, $\oint_{C_1} f(z) dz = 0$ and $\oint_{C_2} f(z) dz = 0$.
    The relationship is $0 = 0 + 0$, which is consistent.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References and Further Reading

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.**
    *   Chapter 14 (Complex Analysis) will likely cover line integrals and Cauchy's theorems, including extensions to multiply connected domains. Look for sections discussing the generalization of Cauchy's integral theorem.
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.**
    *   This textbook is specifically on complex analysis and will provide a detailed treatment of Cauchy's theorems and their applications to multiply connected domains. Chapter 4 (Cauchy's Integral Theorems) or similar would be relevant.
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.**
    *   Chapter 20 (Complex Analysis) or a similar chapter would cover complex integration and related theorems.
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.**
    *   Similar to Ramana, refer to the chapters on Complex Analysis for coverage of Cauchy's theorems.

---