---
title: "Cauchy integral theorem on multiply connected domain (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a77"
status: "completed"
scrapedAt: "2026-05-23T16:14:44.828Z"
---
Here are comprehensive study notes on the Cauchy Integral Theorem on Multiply Connected Domains, tailored for your course.

## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 3: Complex Integration

#### Topic: Cauchy Integral Theorem on Multiply Connected Domain (Without Proof)

**Target Audience:** Students of Electrical Science and Physical Science.
**Prior Knowledge:** Basic complex number operations, contour integration, Cauchy-Riemann equations, analyticity, simply connected domains, Cauchy Integral Theorem for simply connected domains.
**Learning Outcomes:** (Assuming these are provided or inferred for this specific topic)
*   Understand the generalization of Cauchy's Integral Theorem to domains with holes.
*   Apply the theorem to simplify complex integral calculations in multiply connected domains.
*   Relate the concept to practical applications in electrical and physical sciences.

**Course Outcomes Alignment:**
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)** This topic directly builds upon CO3 by extending the application of Cauchy's integral theorem to more complex domain structures, allowing for the computation of integrals.

---

### 1. Introduction to Multiply Connected Domains

In previous discussions, we've primarily dealt with **simply connected domains** in the complex plane. A domain is simply connected if every simple closed curve within the domain encloses only points that are also within the domain. In essence, it has no "holes."

However, many practical problems in engineering and physics involve regions with holes or boundaries. These are known as **multiply connected domains**.

**Definition:** A **multiply connected domain** $D$ is a domain in the complex plane that is not simply connected. This means there exist simple closed curves within $D$ that enclose points *not* belonging to $D$. These enclosed points form one or more "holes" within the domain.

**Example:** Consider the annulus (ring-shaped region) between two concentric circles centered at the origin. This region is multiply connected because a circle enclosing the inner boundary encloses points not in the annulus.

---

### 2. The Cauchy Integral Theorem for Multiply Connected Domains (Without Proof)

The fundamental Cauchy Integral Theorem states that if a function $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed contour $C$ in $D$, $\oint_C f(z) dz = 0$.

When dealing with multiply connected domains, this theorem needs a slight extension. The key idea is to "convert" the multiply connected domain into a simply connected one by introducing "cuts" or "connecting curves."

**Statement of the Theorem:**

Let $f(z)$ be analytic in a domain $D$ which is a multiply connected domain. Let $C_0$ be the outer boundary of $D$, and let $C_1, C_2, \dots, C_n$ be the boundaries of the holes within $D$. Assume all these curves are simple closed contours and are positively oriented (counterclockwise) with respect to the domain enclosed.

The Cauchy Integral Theorem for Multiply Connected Domains states that if $f(z)$ is analytic in the region $D$ between $C_0$ and $C_1, \dots, C_n$, then:

$$ \oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz + \oint_{C_2} f(z) dz + \dots + \oint_{C_n} f(z) dz $$

**Important Considerations (Without Proof):**

*   **Analyticity:** The function $f(z)$ must be analytic throughout the region *between* the outer boundary $C_0$ and the inner boundaries $C_1, C_2, \dots, C_n$. This includes the boundaries themselves, as per the conditions usually stated for such theorems.
*   **Orientation:** The contour $C_0$ is typically traversed in a positive sense (e.g., counterclockwise), while the inner contours $C_1, C_2, \dots, C_n$ are traversed in a *negative* sense (clockwise) if they are to be added to the integral over $C_0$ to make the integral over a simply connected region zero. However, the formulation above assumes all $C_i$ are positively oriented *with respect to the enclosed region*, which is the standard way it's presented. If $C_1, \dots, C_n$ are the boundaries of holes, they are often oriented *opposite* to the outer boundary's orientation.

    A more intuitive way to think about it, often used in proofs (though we are omitting the proof here), is to imagine connecting the outer boundary to each inner boundary with "bridge" segments. These segments are traversed in opposite directions, effectively canceling each other out when considering the entire path. This transforms the multiply connected domain into a simply connected one for integration purposes.

    If we consider the sum of integrals over all contours in a specific direction (say, counterclockwise for $C_0$ and clockwise for $C_1, \dots, C_n$), the total integral over the entire region (including the "holes" when integrated in the opposite direction) becomes zero.

    Let $\Gamma$ be a closed contour formed by $C_0$ (oriented counterclockwise) and $C_1, \dots, C_n$ (each oriented clockwise). Then, $f(z)$ is analytic in the region bounded by $\Gamma$. By the Cauchy Integral Theorem for simply connected domains, $\oint_\Gamma f(z) dz = 0$.
    $$ \oint_{C_0} f(z) dz + \sum_{k=1}^n \oint_{C_k, \text{clockwise}} f(z) dz = 0 $$
    Since $\oint_{C_k, \text{clockwise}} f(z) dz = - \oint_{C_k, \text{counterclockwise}} f(z) dz$, we get:
    $$ \oint_{C_0} f(z) dz - \sum_{k=1}^n \oint_{C_k, \text{counterclockwise}} f(z) dz = 0 $$
    Rearranging this gives the stated theorem:
    $$ \oint_{C_0} f(z) dz = \sum_{k=1}^n \oint_{C_k, \text{counterclockwise}} f(z) dz $$

---

### 3. Applications and Examples

This theorem is crucial when the region of integration has holes where the function might not be analytic, or when the integral over the outer boundary is desired, and the integrals over the inner boundaries are known or easier to compute.

**Example 1: Integral over an Annulus**

Let $f(z) = \frac{1}{z-a}$ where $a$ is a point in the complex plane.
Consider an annulus $A$ between two circles $C_1: |z| = r_1$ and $C_2: |z| = r_2$, with $0 < r_1 < r_2$.
Let $a$ be such that $r_1 < |a| < r_2$.

**Case 1: $a$ is inside $C_1$ (and thus inside $C_2$)**
The function $f(z) = \frac{1}{z-a}$ has a singularity at $z=a$.
If we want to compute $\oint_{C_2} \frac{1}{z-a} dz$, where $C_2$ is the outer circle $|z|=r_2$ oriented counterclockwise.
The domain between $C_2$ and $C_1$ is multiply connected. The function $f(z)$ is analytic in this region.
By the theorem, $\oint_{C_2} f(z) dz = \oint_{C_1} f(z) dz$.
We know from Cauchy's Integral Formula or the Residue Theorem that $\oint_{C_1} \frac{1}{z-a} dz = 2\pi i$ (since $a$ is inside $C_1$).
Therefore, $\oint_{C_2} \frac{1}{z-a} dz = 2\pi i$.

**Case 2: $a$ is outside $C_2$ (and thus outside $C_1$)**
The function $f(z) = \frac{1}{z-a}$ is analytic in the region between $C_1$ and $C_2$.
By Cauchy's Integral Theorem for simply connected domains, $\oint_{C_2} \frac{1}{z-a} dz = 0$.
According to the theorem for multiply connected domains, $\oint_{C_2} f(z) dz = \oint_{C_1} f(z) dz$.
Since $a$ is outside $C_1$, $\oint_{C_1} \frac{1}{z-a} dz = 0$. This is consistent.

**Case 3: $a$ is inside $C_2$ but outside $C_1$**
Here, the function $f(z) = \frac{1}{z-a}$ is *not* analytic in the region between $C_1$ and $C_2$ because of the singularity at $a$.
The theorem as stated requires $f(z)$ to be analytic in the *entire region* between the boundaries.
In such a case, we would typically use Cauchy's Integral Formula or the Residue Theorem, which handle singularities within the domain.
However, if the question asks for the integral over $C_2$ and $f(z)$ is analytic in the region *excluding* the hole bounded by $C_1$, and the singularity is at $a$, we would need to consider the regions.

Let's rephrase the setup to better illustrate the theorem's direct application.
Suppose we want to calculate $\oint_{C_0} f(z) dz$, and we know that $f(z)$ is analytic in the region $D$ between $C_0$ and $C_1, \dots, C_n$.

**Example 2: Using the Theorem to simplify integration**

Let $C_0$ be the circle $|z|=2$ and $C_1$ be the circle $|z|=1$.
Consider the integral $\oint_{C_0} \frac{1}{z^2-1} dz$.
The function $f(z) = \frac{1}{z^2-1}$ has singularities at $z=1$ and $z=-1$.
Both singularities lie inside $C_0$.
Let's say the problem is framed such that we want to integrate over $C_0$, but the function has singularities.

A better example for the theorem:
Let $C_0$ be $|z|=2$. Let $C_1$ be $|z|=1/2$.
Consider the function $f(z) = e^z$. This function is analytic everywhere.
If we want to calculate $\oint_{C_0} e^z dz$. Since $e^z$ is analytic in the simply connected domain enclosed by $C_0$, the integral is $0$.

Now, consider the region between $C_0: |z|=2$ and $C_1: |z|=1/2$. This is a multiply connected domain.
The function $f(z) = e^z$ is analytic in this region.
The theorem states $\oint_{C_0} e^z dz = \oint_{C_1} e^z dz$.
Since $e^z$ is analytic everywhere, both integrals are zero by the Cauchy Integral Theorem for simply connected domains. This example demonstrates consistency.

**Key Application Scenario:**

Suppose $f(z)$ is analytic in the region $D$ between $C_0$ and $C_1, \dots, C_n$, and $f(z)$ has singularities *outside* this region. Then the theorem allows us to relate the integral over $C_0$ to integrals over the inner boundaries.

If $f(z)$ has singularities *inside* the inner boundaries $C_k$, those integrals $\oint_{C_k} f(z) dz$ can be evaluated using Cauchy's Integral Formula or the Residue Theorem, and then related back to the integral over $C_0$.

**Let's consider a more illustrative example where the theorem is directly used to find an unknown integral.**

Suppose we are asked to find $\oint_{C_0} f(z) dz$ where $C_0$ is $|z|=2$, and $f(z)$ is analytic in the region between $C_0$ and $C_1:|z|=1$.
Suppose further we are *given* that $\oint_{C_1} f(z) dz = 5$.
Then, by the Cauchy Integral Theorem for Multiply Connected Domains, $\oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz = 5$.

This scenario highlights the power of the theorem: if we can establish the necessary conditions (analyticity in the domain) and know the integrals over the inner boundaries, we can determine the integral over the outer boundary.

---

### 4. Relation to Course Outcomes

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    *   This topic extends the direct application of Cauchy's integral theorem to more complex geometric situations (multiply connected domains).
    *   When combined with Cauchy's Integral Formula or the Residue Theorem, it allows for the computation of integrals over outer boundaries by relating them to integrals over inner boundaries, especially when singularities are handled on these inner boundaries.

---

### 5. Important Points to Remember

*   **Domain Structure:** The theorem applies to regions with "holes."
*   **Analyticity is Key:** The function $f(z)$ must be analytic in the *entire region* between the outer boundary and all inner boundaries.
*   **Orientation:** Standard formulation involves the outer boundary and all inner boundaries (of holes) oriented counterclockwise. The integral over the outer boundary equals the sum of integrals over the inner boundaries.
*   **Conversion:** The theorem's underlying principle involves converting a multiply connected domain into a simply connected one by introducing bridging segments.
*   **Practical Use:** Useful when the integral over the outer boundary is desired, and integrals over known inner boundaries are available or easier to compute, provided the analyticity conditions are met. It's a tool for relating integrals across different boundary surfaces in a domain.

---

### 6. Practice Questions and Exercises

**Question 1:**
Let $D$ be the region between the circle $C_1: |z|=1$ and $C_2: |z|=2$.
Let $f(z) = \frac{e^z}{z^2-4}$.
Is $f(z)$ analytic in the region between $C_1$ and $C_2$? Explain.
If we wanted to compute $\oint_{C_2} f(z) dz$, how could the Cauchy Integral Theorem for Multiply Connected Domains potentially be used in conjunction with other theorems?

**Answer 1:**
$f(z) = \frac{e^z}{z^2-4}$ has singularities at $z=2$ and $z=-2$.
The region between $C_1$ ($|z|=1$) and $C_2$ ($|z|=2$) is a multiply connected domain.
The singularity $z=2$ lies *on* the outer boundary $C_2$. The singularity $z=-2$ lies *outside* the outer boundary $C_2$.
The function $f(z)$ is analytic in the region *between* $C_1$ and $C_2$ if we consider the domain to be $1 < |z| < 2$. However, for the standard theorem statement, analyticity is often required up to the boundaries themselves.

If $f(z)$ were analytic in the region $1 < |z| < 2$, and we knew $\oint_{C_1} f(z) dz$, we could relate it to $\oint_{C_2} f(z) dz$.
In this case, $f(z)$ is not analytic in the closed region $1 \le |z| \le 2$ because of the singularity at $z=2$.
However, if we adjust the problem slightly:
Let $C_0: |z|=3$ and $C_1: |z|=1$. Let $f(z) = \frac{e^z}{z^2-4}$.
$f(z)$ has singularities at $z=2$ and $z=-2$. Both are inside $C_0$.
The domain between $C_0$ and $C_1$ is $1 < |z| < 3$. The singularities $z=2$ and $z=-2$ are within this domain.
The theorem *as stated* (requiring analyticity in the region between boundaries) does not directly apply if there are singularities within that region.

Let's rephrase the question to better fit the theorem's direct use:

**Question 2:**
Let $C_0$ be the circle $|z|=3$ and $C_1$ be the circle $|z|=1$.
Let $f(z)$ be a function that is analytic in the region between $C_0$ and $C_1$.
Suppose we are given that $\oint_{C_1} f(z) dz = 10\pi i$.
What is $\oint_{C_0} f(z) dz$?

**Answer 2:**
Since $f(z)$ is analytic in the multiply connected domain between $C_0$ and $C_1$, the Cauchy Integral Theorem for Multiply Connected Domains states that:
$$ \oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz $$
Given that $\oint_{C_1} f(z) dz = 10\pi i$, then:
$$ \oint_{C_0} f(z) dz = 10\pi i $$

**Question 3:**
Consider the region $D$ between the circle $C_1: |z|=1/2$ and $C_2: |z|=2$.
Let $f(z) = \frac{1}{z}$. Is $f(z)$ analytic in $D$?
What is $\oint_{C_2} f(z) dz$? What is $\oint_{C_1} f(z) dz$?
How does the Cauchy Integral Theorem for Multiply Connected Domains relate these two integrals?

**Answer 3:**
The region $D$ is $1/2 < |z| < 2$.
The function $f(z) = \frac{1}{z}$ has a singularity at $z=0$, which is inside the inner circle $C_1$.
Therefore, $f(z)$ is *not* analytic in the entire region between $C_1$ and $C_2$ because it's not analytic inside the hole bounded by $C_1$.

*   $\oint_{C_2} \frac{1}{z} dz = 2\pi i$ (by Cauchy's Integral Formula or Residue Theorem, as $z=0$ is inside $C_2$).
*   $\oint_{C_1} \frac{1}{z} dz = 2\pi i$ (by Cauchy's Integral Formula or Residue Theorem, as $z=0$ is inside $C_1$).

The Cauchy Integral Theorem for Multiply Connected Domains states $\oint_{C_0} f(z) dz = \sum \oint_{C_k} f(z) dz$, where $f(z)$ is analytic in the region between $C_0$ and $C_k$.
In this case, $f(z) = \frac{1}{z}$ is not analytic in the region between $C_1$ and $C_2$ due to the singularity at $z=0$ inside $C_1$.
Therefore, the direct equality $\oint_{C_2} f(z) dz = \oint_{C_1} f(z) dz$ would not hold if the theorem's conditions were strictly applied. However, in this specific case, both integrals are equal due to the singularity being inside both.

A better phrasing to test the theorem's understanding:

**Question 4:**
Let $C_0$ be the circle $|z|=2$ and $C_1$ be the circle $|z|=1/2$.
Let $f(z)$ be analytic in the region $1/2 < |z| < 2$.
If $\oint_{C_1} f(z) dz = K$, what is $\oint_{C_0} f(z) dz$?

**Answer 4:**
Since $f(z)$ is analytic in the multiply connected domain between $C_0$ and $C_1$, the Cauchy Integral Theorem for Multiply Connected Domains states:
$$ \oint_{C_0} f(z) dz = \oint_{C_1} f(z) dz $$
Given $\oint_{C_1} f(z) dz = K$, then:
$$ \oint_{C_0} f(z) dz = K $$

---
