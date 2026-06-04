---
title: "Cauchy Integral formula (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb1"
status: "completed"
scrapedAt: "2026-05-20T17:50:51.425Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

#### Topic: Cauchy Integral Formula (Without Proof)

---

### 1. Introduction to Cauchy's Integral Formula

Cauchy's Integral Formula is a cornerstone of complex analysis, providing a powerful way to relate the value of an analytic function at a point inside a closed contour to the integral of that function along the contour. It has profound implications for understanding the behavior of analytic functions and is instrumental in solving various problems in engineering and physics.

---

### 2. Key Concepts and Definitions

*   **Analytic Function:** A complex function $f(z)$ is analytic in a domain $D$ if it is differentiable at every point in $D$.
*   **Simply Connected Domain:** A domain is simply connected if every closed curve in the domain can be continuously shrunk to a point within the domain. In simpler terms, it's a domain without any "holes."
*   **Closed Contour (or Closed Curve):** A curve in the complex plane that starts and ends at the same point.
*   **Simple Closed Contour:** A closed contour that does not intersect itself.
*   **Simply Connected Domain:** A domain in the complex plane that has no holes.
*   **Region:** A domain in the complex plane is a set of points such that every point in the set has a neighborhood that is entirely contained within the set.
*   **Interior of a Contour:** The region enclosed by a simple closed contour.

---

### 3. Cauchy Integral Formula (For Function Value)

**Statement:** Let $f(z)$ be analytic in a simply connected domain $D$. Let $C$ be a simple closed contour in $D$, and let $z_0$ be any point in the interior of $C$. Then, the value of $f(z)$ at $z_0$ is given by:

$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$$

**Explanation:**

*   This formula states that the value of an analytic function $f(z)$ at an interior point $z_0$ can be determined by integrating a specific form of $f(z)$ along a contour $C$ that encloses $z_0$.
*   The integrand is $\frac{f(z)}{z - z_0}$. The point $z_0$ is a singularity of the integrand, but since $f(z)$ is analytic and $z_0$ is inside the contour, the formula elegantly handles this.
*   The factor $\frac{1}{2\pi i}$ is crucial for normalizing the integral to give the function's value.

**Requirements for the Formula:**

1.  $f(z)$ must be analytic in a simply connected domain $D$.
2.  $C$ must be a simple closed contour within $D$.
3.  $z_0$ must be a point strictly inside $C$.

**Importance:**

*   **Uniqueness of Analytic Functions:** If two analytic functions agree on a set of points with an accumulation point, they must agree everywhere. Cauchy's Integral Formula implies this.
*   **Analyticity implies Infinitely Differentiable:** This formula can be extended to show that if $f(z)$ is analytic, then all its derivatives $f^{(n)}(z)$ also exist and are analytic.

---

### 4. Cauchy Integral Formula (For Derivatives)

Cauchy's Integral Formula can be generalized to compute the derivatives of an analytic function.

**Statement:** Let $f(z)$ be analytic in a simply connected domain $D$. Let $C$ be a simple closed contour in $D$, and let $z_0$ be any point in the interior of $C$. Then, the $n$-th derivative of $f(z)$ at $z_0$ is given by:

$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$$

where $n = 0, 1, 2, \dots$.

**Explanation:**

*   For $n=0$, this formula reduces to the original Cauchy Integral Formula for $f(z_0)$.
*   For $n=1$, it gives $f'(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^2} dz$.
*   For $n=2$, it gives $f''(z_0) = \frac{2!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^3} dz$.
*   And so on for higher-order derivatives.

**Requirements:**

The same requirements for the function $f(z)$ and the contour $C$ as in the case of the function value apply.

**Importance:**

*   **Infinitely Differentiable:** This formula is a powerful demonstration that if a function is analytic, it is not just once differentiable, but infinitely differentiable. The derivatives themselves are also analytic.
*   **Series Expansions:** This formula is the basis for deriving the Taylor series expansion of an analytic function.

---

### 5. Examples and Applications

**Example 1: Computing a function value**

Let $f(z) = e^z$ and $C$ be the circle $|z| = 1$. Find $f(0)$ using Cauchy's Integral Formula.

*   $f(z) = e^z$ is analytic everywhere.
*   $C$ is the circle $|z| = 1$.
*   $z_0 = 0$ is inside the circle $|z| = 1$.

Using the formula:
$$f(0) = \frac{1}{2\pi i} \oint_C \frac{e^z}{z - 0} dz$$
$$f(0) = \frac{1}{2\pi i} \oint_C \frac{e^z}{z} dz$$

Since $f(z) = e^z$, $f(0) = e^0 = 1$.

The integral $\oint_C \frac{e^z}{z} dz$ must evaluate to $2\pi i \cdot f(0) = 2\pi i \cdot 1 = 2\pi i$.

**Example 2: Computing a derivative value**

Let $f(z) = \sin(z)$ and $C$ be the circle $|z| = \pi/2$. Find $f'(\pi/4)$ using Cauchy's Integral Formula for derivatives.

*   $f(z) = \sin(z)$ is analytic everywhere.
*   $C$ is the circle $|z| = \pi/2$.
*   $z_0 = \pi/4$ is inside the circle $|z| = \pi/2$.

We need to find $f'(z_0)$, so $n=1$.
$$f'(z_0) = \frac{1!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{1+1}} dz$$
$$f'(\pi/4) = \frac{1}{2\pi i} \oint_C \frac{\sin(z)}{(z - \pi/4)^2} dz$$

The derivative of $f(z) = \sin(z)$ is $f'(z) = \cos(z)$.
Therefore, $f'(\pi/4) = \cos(\pi/4) = \frac{\sqrt{2}}{2}$.

The integral $\oint_C \frac{\sin(z)}{(z - \pi/4)^2} dz$ must evaluate to $2\pi i \cdot f'(\pi/4) = 2\pi i \cdot \frac{\sqrt{2}}{2} = \pi i \sqrt{2}$.

**Example 3: Application in Physics (Potential Theory)**

In electrostatics or fluid dynamics, the potential function $\phi(x, y)$ in a 2D region is often described by Laplace's equation, $\nabla^2 \phi = 0$. If we consider a complex potential $W(z) = \phi(x, y) + i\psi(x, y)$, where $\psi$ is the conjugate harmonic function, the Cauchy-Riemann equations imply that $W(z)$ is analytic. Cauchy's Integral Formula can be used to analyze properties of such potentials. For instance, if the potential is known on the boundary of a region, its value at any interior point can be determined.

---

### 6. Important Points to Remember

*   **Analyticity is Key:** Cauchy's Integral Formula relies heavily on the function being analytic within the domain enclosed by the contour.
*   **Point Inside Contour:** The point $z_0$ must be strictly inside the contour $C$.
*   **Simple Closed Contour:** The contour $C$ must be simple (not self-intersecting) and closed.
*   **Uniqueness and Differentiability:** These formulas are fundamental for proving the uniqueness of analytic functions and the infinite differentiability of analytic functions.
*   **Relationship to Taylor Series:** The formula for derivatives is the direct precursor to deriving the Taylor series expansion of an analytic function.

---

### 7. Referencing Textbooks

The concepts presented in this topic are thoroughly covered in the following textbooks:

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.**
    *   Chapter 16 (Complex Analysis) will likely have detailed sections on Cauchy's Integral Theorems and Formulas, with proofs and numerous examples. It emphasizes the analytical power of these formulas for solving problems in engineering fields.

*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett Learning, 2015.**
    *   This book provides a rigorous treatment of complex analysis. Chapter 4 often deals with Cauchy's Integral Formula and its consequences, including the derivation of the formula for derivatives and its relation to Taylor series.

*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.**
    *   Ramana's book typically offers a broad range of topics for engineering students. The section on Complex Integration will detail Cauchy's Integral Formula, explaining its application in evaluating complex integrals and understanding function behavior.

*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.**
    *   Similar to Ramana, Grewal's text is a comprehensive resource. It will likely present Cauchy's Integral Formula in the context of line integrals and contour integration, providing practical examples relevant to engineering problems.

*   **Rao, K. R., et al. *Fast Fourier Transform - Algorithms and Applications*. Springer, 2011.**
    *   While this book's primary focus is FFT, it might touch upon complex analysis fundamentals, including Cauchy's theorems, as they are implicitly used in signal processing and Fourier analysis, which deal with complex-valued functions and their transformations. The understanding of analytic functions is crucial for understanding the properties of signals and systems.

---

### 8. Alignment with Course Outcomes (CO)

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   **Relevance:** While not directly about Fourier Transforms, the analytic properties of functions explored via Cauchy's Integral Formula are foundational. Many functions encountered in Fourier analysis are analytic or can be analytically continued, and their behavior is understood through theorems like Cauchy's. Understanding the smoothness and differentiability of functions is key to their transform properties.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    *   **Relevance:** Cauchy's Integral Formula is a direct consequence of analyticity. This topic reinforces the importance of the analyticity condition, which is also essential for understanding conformal mappings. Many transformations used in engineering (e.g., in fluid mechanics, electromagnetics) are conformal mappings, and their properties are tied to the analyticity of the underlying complex functions.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    *   **Relevance:** This is the *primary* outcome addressed by this topic. Cauchy's Integral Formula provides a direct method to evaluate certain types of complex integrals that would be very difficult or impossible to compute directly using parametrization or other methods. It's a powerful tool for solving the specific integrals required by the formula.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    *   **Relevance:** The Cauchy Integral Formula for derivatives is the direct bridge to understanding Taylor series expansions of analytic functions. These series expansions are crucial for understanding functions near singularities. Furthermore, the concept of integrating functions involving powers of $(z-z_0)$ directly leads into the concepts required for the Residue Theorem, which is used to compute real integrals.

---

### 9. Practice Questions and Exercises

**Instructions:** For each question, identify if Cauchy's Integral Formula or its derivative form can be applied. Show your working.

**Question 1:**
Let $f(z) = e^{2z}$ and $C$ be the circle $|z| = 2$. Evaluate $\oint_C \frac{e^{2z}}{z - 1} dz$.

**Answer 1:**
*   $f(z) = e^{2z}$ is analytic everywhere.
*   $C$ is the circle $|z| = 2$.
*   $z_0 = 1$ is inside $C$.
*   We use the formula $f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$.
*   Therefore, $\oint_C \frac{e^{2z}}{z - 1} dz = 2\pi i \cdot f(1)$.
*   $f(1) = e^{2 \cdot 1} = e^2$.
*   So, the integral is $2\pi i e^2$.

**Question 2:**
Let $f(z) = \cos(z)$ and $C$ be the ellipse $|z| + |z - 2| = 4$. Evaluate $\oint_C \frac{\cos(z)}{(z - \pi)^2} dz$.

**Answer 2:**
*   $f(z) = \cos(z)$ is analytic everywhere.
*   $C$ is the ellipse $|z| + |z - 2| = 4$. This ellipse encloses the points $z=0$ and $z=2$. The point $z=\pi$ (approx 3.14) lies outside the ellipse.
*   The point $z_0 = \pi$ is *outside* the contour $C$.
*   According to Cauchy's Integral Theorem (a precursor/related concept), if the integrand $\frac{f(z)}{(z-z_0)^{n+1}}$ is analytic inside and on $C$, the integral is zero. Here, the singularity is at $z=\pi$. Since $\pi$ is outside $C$, and $f(z) = \cos(z)$ is analytic, the function $\frac{\cos(z)}{(z-\pi)^2}$ is analytic inside and on $C$.
*   Therefore, $\oint_C \frac{\cos(z)}{(z - \pi)^2} dz = 0$.

**Question 3:**
Let $f(z) = z^3 + 2z - 5$ and $C$ be the circle $|z| = 3$. Evaluate $\oint_C \frac{f(z)}{(z - 2)^3} dz$.

**Answer 3:**
*   $f(z) = z^3 + 2z - 5$ is a polynomial, hence analytic everywhere.
*   $C$ is the circle $|z| = 3$.
*   $z_0 = 2$ is inside $C$.
*   We need to find the second derivative of $f(z)$ at $z_0 = 2$, since the denominator is $(z-2)^3$, implying $n+1 = 3$, so $n=2$.
*   We use the formula $f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$.
*   $f'(z) = 3z^2 + 2$
*   $f''(z) = 6z$
*   $f''(2) = 6(2) = 12$.
*   So, $\oint_C \frac{f(z)}{(z - 2)^3} dz = \frac{2\pi i}{2!} f''(2) = \frac{2\pi i}{2} \cdot 12 = 12\pi i$.

**Question 4:**
Let $f(z) = \frac{1}{z+1}$ and $C$ be the circle $|z| = 0.5$. Evaluate $\oint_C \frac{f(z)}{z - 2} dz$.

**Answer 4:**
*   $f(z) = \frac{1}{z+1}$ is analytic everywhere except at $z=-1$.
*   $C$ is the circle $|z| = 0.5$.
*   The point $z_0 = 2$ is *outside* the contour $C$.
*   The function $\frac{f(z)}{z-2} = \frac{1}{(z+1)(z-2)}$ has singularities at $z=-1$ and $z=2$. Both singularities are outside the circle $|z|=0.5$.
*   Therefore, the integrand $\frac{1}{(z+1)(z-2)}$ is analytic inside and on $C$.
*   By Cauchy's Integral Theorem, the integral is 0.

---

This concludes the notes on Cauchy's Integral Formula (Without Proof) for Module 3. Remember to consult the provided textbooks for more detailed proofs and a wider array of examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
