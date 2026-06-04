---
title: "Cauchy’s integral theorem (without proof) on simply connected domain"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a0"
status: "completed"
scrapedAt: "2026-05-20T18:41:28.681Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Cauchy’s Integral Theorem (without proof) on Simply Connected Domain

---

### **1. Learning Outcomes Covered**

This topic aims to equip students with the understanding of Cauchy's Integral Theorem and its implications for complex integration within simply connected domains. Specifically, you will be able to:

*   State Cauchy's Integral Theorem for a simply connected domain.
*   Understand the conditions under which Cauchy's Integral Theorem applies.
*   Recognize the significance of a simply connected domain in the context of complex integration.
*   Apply Cauchy's Integral Theorem to evaluate certain complex integrals.
*   Appreciate the foundational role of Cauchy's Integral Theorem in complex analysis.

---

### **2. Key Concepts and Definitions**

This section introduces the foundational concepts necessary to understand Cauchy's Integral Theorem.

#### **2.1. Complex Plane ($\mathbb{C}$)**

*   **Definition:** The complex plane is a two-dimensional geometric representation of the complex numbers, where the horizontal axis represents the real part and the vertical axis represents the imaginary part. A complex number $z = x + iy$ is represented by the point $(x, y)$ in this plane.

#### **2.2. Contour (or Path) in the Complex Plane**

*   **Definition:** A contour is a piecewise smooth curve in the complex plane. It's a finite sequence of smooth arcs joined end-to-end.
*   **Smooth Arc:** A curve $\gamma(t) = x(t) + iy(t)$ for $a \le t \le b$ is a smooth arc if $x(t)$ and $y(t)$ have continuous derivatives and $\gamma'(t) = x'(t) + iy'(t)$ is non-zero for all $t$ in the interval.
*   **Closed Contour:** A contour $\gamma$ is closed if its starting point and ending point are the same.

#### **2.3. Simply Connected Domain**

*   **Definition:** A domain (an open connected set) in the complex plane is called **simply connected** if every closed contour within the domain can be continuously deformed into a single point without leaving the domain.
*   **Intuitive Explanation:** A simply connected domain is a domain that has "no holes." If you can draw any closed loop inside it, you can shrink that loop down to a point without crossing any boundaries or leaving the domain.
*   **Examples:**
    *   The entire complex plane ($\mathbb{C}$) is simply connected.
    *   An open disk (a circle and its interior, excluding the boundary) is simply connected.
    *   The region between two concentric circles is **not** simply connected because a closed contour encircling the inner hole cannot be shrunk to a point without crossing the inner boundary.

#### **2.4. Analytic Function**

*   **Definition:** A function $f(z)$ is **analytic** in a domain $D$ if it is differentiable at every point in $D$.
*   **Key Implication:** If $f(z)$ is analytic in a domain, it is also infinitely differentiable and possesses a Taylor series expansion in that domain. This is a very strong property in complex analysis.

#### **2.5. Contour Integral**

*   **Definition:** The contour integral of a complex function $f(z)$ along a contour $\gamma$ is denoted by $\int_\gamma f(z) dz$. If $\gamma$ is parameterized by $z(t)$ for $a \le t \le b$, then the integral is defined as:
    $$ \int_\gamma f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

---

### **3. Cauchy’s Integral Theorem (without proof) on Simply Connected Domain**

This is the central theorem of this topic. It establishes a powerful condition for the vanishing of contour integrals.

#### **3.1. Statement of the Theorem**

**Theorem:** If $f(z)$ is analytic in a simply connected domain $D$, and $\gamma$ is any closed contour lying entirely within $D$, then:

$$ \oint_\gamma f(z) dz = 0 $$

*   **Notation:** The circle on the integral sign ($\oint$) emphasizes that $\gamma$ is a closed contour.

#### **3.2. Conditions for Applicability**

For Cauchy's Integral Theorem to hold, the following two conditions **must** be met:

1.  **Analyticity of $f(z)$:** The function $f(z)$ must be analytic in the domain $D$ that contains the contour $\gamma$. This means $f(z)$ must be differentiable at every point within $D$.
2.  **Simply Connected Domain:** The domain $D$ must be simply connected. This ensures there are no "holes" that the contour might enclose.
3.  **Closed Contour:** The contour $\gamma$ must be closed.
4.  **Contour within the Domain:** The entire closed contour $\gamma$ must lie within the domain $D$.

#### **3.3. Significance and Implications**

*   **Zero Integral:** The theorem states that if the conditions are met, the integral of $f(z)$ around any closed loop within that domain is zero. This is a remarkably strong result.
*   **Path Independence of Contour Integrals:** A direct consequence of Cauchy's Integral Theorem is that for analytic functions in a simply connected domain, the contour integral between two points is independent of the path taken. If $f(z)$ is analytic in a simply connected domain $D$ and $\gamma_1$ and $\gamma_2$ are two contours in $D$ with the same starting and ending points, then:
    $$ \int_{\gamma_1} f(z) dz = \int_{\gamma_2} f(z) dz $$
    This is because $\int_{\gamma_1} f(z) dz - \int_{\gamma_2} f(z) dz = \oint_{\gamma_1 \cup (-\gamma_2)} f(z) dz = 0$, where $-\gamma_2$ is $\gamma_2$ traversed in the opposite direction, and the combined contour is closed.
*   **Foundation for Other Theorems:** Cauchy's Integral Theorem is a cornerstone of complex analysis, leading to other powerful results like Cauchy's Integral Formula, Liouville's Theorem, and the Residue Theorem.

---

### **4. Examples and Applications**

Let's illustrate Cauchy's Integral Theorem with examples.

#### **4.1. Example 1: Polynomial Function**

*   **Problem:** Evaluate $\oint_\gamma z^2 dz$, where $\gamma$ is the circle $|z| = 2$.
*   **Analysis:**
    *   The function is $f(z) = z^2$.
    *   $f(z) = z^2$ is analytic everywhere in the complex plane ($\mathbb{C}$).
    *   The domain $D = \mathbb{C}$ is simply connected.
    *   The contour $\gamma$ is the circle $|z| = 2$, which is a closed contour.
    *   The contour $\gamma$ lies entirely within $D$.
*   **Application of Theorem:** Since all conditions of Cauchy's Integral Theorem are satisfied, we can conclude:
    $$ \oint_{|z|=2} z^2 dz = 0 $$

#### **4.2. Example 2: Exponential Function**

*   **Problem:** Evaluate $\oint_\gamma e^z dz$, where $\gamma$ is the square with vertices $(0,0), (1,0), (1,1), (0,1)$.
*   **Analysis:**
    *   The function is $f(z) = e^z$.
    *   $f(z) = e^z$ is analytic everywhere in the complex plane ($\mathbb{C}$).
    *   The domain $D = \mathbb{C}$ is simply connected.
    *   The contour $\gamma$ (the square) is a closed contour.
    *   The contour $\gamma$ lies entirely within $D$.
*   **Application of Theorem:** Since all conditions are met:
    $$ \oint_\gamma e^z dz = 0 $$

#### **4.3. Example 3: Function with a Singularity (where the theorem *does not* apply directly)**

*   **Problem:** Evaluate $\oint_\gamma \frac{1}{z} dz$, where $\gamma$ is the circle $|z| = 2$.
*   **Analysis:**
    *   The function is $f(z) = \frac{1}{z}$.
    *   The function $f(z) = \frac{1}{z}$ has a singularity at $z = 0$.
    *   The domain $D = \mathbb{C} \setminus \{0\}$ (the complex plane excluding the origin) is **not** simply connected. The circle $|z|=2$ encloses the singularity at $z=0$, which is a "hole" in this domain.
    *   Alternatively, if we consider the domain $D = \{z \in \mathbb{C} : |z| > 0\}$, this domain is simply connected. However, the contour $|z|=2$ is entirely within this domain, and the function $1/z$ is analytic in this domain. In this case, Cauchy's Integral Theorem **would** apply, yielding 0.
    *   **However, the usual context when considering $\oint \frac{1}{z} dz$ around $|z|=2$ is to show that the theorem *fails* if the function is not analytic throughout the simply connected domain containing the contour. The intended application of the theorem is when the function is analytic *everywhere* within the simply connected domain that contains the contour.**
    *   If we consider the domain $D = \{z \in \mathbb{C} : z \neq 0\}$, the contour $|z|=2$ encloses the point $z=0$ where $f(z)$ is not analytic. Therefore, Cauchy's Integral Theorem cannot be directly applied to this contour and function in this context.
*   **Result (using other methods):** Using parameterization ($z = 2e^{it}$), we find $\oint_{|z|=2} \frac{1}{z} dz = 2\pi i$. This non-zero result confirms that the conditions of Cauchy's Integral Theorem were not met.

#### **4.4. Example 4: Path Independence**

*   **Problem:** Let $f(z) = \cos(z)$. Evaluate $\int_\gamma f(z) dz$ where $\gamma$ is any path from $z=0$ to $z = \pi + i$.
*   **Analysis:**
    *   The function is $f(z) = \cos(z)$.
    *   $f(z) = \cos(z)$ is analytic everywhere in the complex plane ($\mathbb{C}$).
    *   The domain $D = \mathbb{C}$ is simply connected.
*   **Application of Theorem:** Since $f(z)$ is analytic in the simply connected domain $\mathbb{C}$, the integral is path-independent. We can choose the simplest path, say a straight line from $0$ to $\pi+i$.
*   **Evaluation:**
    $$ \int_0^{\pi+i} \cos(z) dz = [\sin(z)]_0^{\pi+i} $$
    $$ = \sin(\pi+i) - \sin(0) $$
    $$ = \sin(\pi)\cos(i) + \cos(\pi)\sin(i) - 0 $$
    $$ = 0 \cdot \cos(i) + (-1) \cdot (i \sinh(1)) $$
    $$ = -i \sinh(1) $$
    $$ = -i \frac{e^1 - e^{-1}}{2} $$

---

### **5. Practice Questions/Exercises**

**Instructions:** For each question, identify the function $f(z)$, the contour $\gamma$, and the domain $D$ that contains $\gamma$. Determine if the conditions of Cauchy's Integral Theorem are met. If they are, state the value of the integral. If not, briefly explain why.

**Question 1:**
Evaluate $\oint_\gamma z^3 + 2z dz$, where $\gamma$ is the ellipse $x^2/4 + y^2/9 = 1$.

**Question 2:**
Evaluate $\oint_\gamma \frac{1}{z^2+1} dz$, where $\gamma$ is the circle $|z| = 1/2$.

**Question 3:**
Evaluate $\oint_\gamma \frac{1}{z-2} dz$, where $\gamma$ is the circle $|z| = 1$.

**Question 4:**
Evaluate $\oint_\gamma \sin(z) dz$, where $\gamma$ is the rectangle with vertices $0, \pi, \pi+i, i$.

**Question 5:**
Evaluate $\int_\gamma e^{z^2} dz$, where $\gamma$ is any path from $z_1$ to $z_2$ in the complex plane.

---

### **6. Answers to Practice Questions**

**Answer 1:**
*   $f(z) = z^3 + 2z$.
*   $\gamma$: Ellipse $x^2/4 + y^2/9 = 1$. This is a closed contour.
*   $f(z)$ is a polynomial, so it is analytic everywhere in $\mathbb{C}$.
*   The domain $D = \mathbb{C}$ is simply connected. The contour $\gamma$ lies within $D$.
*   **Conclusion:** All conditions of Cauchy's Integral Theorem are met.
*   **Result:** $\oint_\gamma z^3 + 2z dz = 0$.

**Answer 2:**
*   $f(z) = \frac{1}{z^2+1}$.
*   $\gamma$: Circle $|z| = 1/2$. This is a closed contour.
*   The singularities of $f(z)$ are at $z^2+1=0 \implies z = \pm i$.
*   The contour $\gamma$ is the circle $|z|=1/2$. The points $z=i$ and $z=-i$ have magnitudes $|i|=1$ and $|-i|=1$. Since $1 > 1/2$, neither singularity lies inside the circle $|z|=1/2$.
*   Therefore, $f(z) = \frac{1}{z^2+1}$ is analytic in the domain $D = \{z \in \mathbb{C} : |z| < 1\}$ which is a simply connected domain containing $\gamma$.
*   **Conclusion:** All conditions of Cauchy's Integral Theorem are met.
*   **Result:** $\oint_\gamma \frac{1}{z^2+1} dz = 0$.

**Answer 3:**
*   $f(z) = \frac{1}{z-2}$.
*   $\gamma$: Circle $|z| = 1$. This is a closed contour.
*   The singularity of $f(z)$ is at $z=2$.
*   The contour $\gamma$ is the circle $|z|=1$. The point $z=2$ has magnitude $|2|=2$, which is greater than $1$. Therefore, the singularity $z=2$ does not lie inside the circle $|z|=1$.
*   The function $f(z) = \frac{1}{z-2}$ is analytic in the domain $D = \{z \in \mathbb{C} : |z| < 2\}$, which is a simply connected domain containing $\gamma$.
*   **Conclusion:** All conditions of Cauchy's Integral Theorem are met.
*   **Result:** $\oint_\gamma \frac{1}{z-2} dz = 0$.

**Answer 4:**
*   $f(z) = \sin(z)$.
*   $\gamma$: Rectangle with vertices $0, \pi, \pi+i, i$. This is a closed contour.
*   $f(z) = \sin(z)$ is analytic everywhere in $\mathbb{C}$.
*   The domain $D = \mathbb{C}$ is simply connected. The contour $\gamma$ lies within $D$.
*   **Conclusion:** All conditions of Cauchy's Integral Theorem are met.
*   **Result:** $\oint_\gamma \sin(z) dz = 0$.

**Answer 5:**
*   $f(z) = e^{z^2}$.
*   $\gamma$: Any path from $z_1$ to $z_2$.
*   $f(z) = e^{z^2}$ is analytic everywhere in $\mathbb{C}$ (composition of analytic functions $e^u$ and $u=z^2$).
*   The domain $D = \mathbb{C}$ is simply connected.
*   **Conclusion:** Since $f(z)$ is analytic in a simply connected domain, the integral is path-independent. The value of the integral depends only on the endpoints $z_1$ and $z_2$.
*   **Result:** $\int_\gamma e^{z^2} dz = F(z_2) - F(z_1)$, where $F(z)$ is an antiderivative of $e^{z^2}$. Finding an explicit elementary antiderivative for $e^{z^2}$ is not straightforward, but the path independence is guaranteed by Cauchy's Theorem.

---

### **7. Important Points to Remember**

*   **Cauchy's Integral Theorem is about closed contours in simply connected domains.**
*   **The function $f(z)$ MUST be analytic *throughout* the simply connected domain containing the contour.** A single point of non-analyticity inside the domain (and thus enclosed by the contour) is enough to invalidate the theorem.
*   **Simply connected domains have no "holes."** Think of the complex plane, open disks, or rectangles as examples. Regions between concentric circles or with punctures are NOT simply connected.
*   **The theorem implies path independence of integrals for analytic functions in simply connected domains.**
*   **If the conditions are met, the integral is ZERO.** This is a powerful shortcut for evaluating integrals.
*   **Be careful with singularities:** Always check if the function has any singularities inside the contour. If it does, Cauchy's Integral Theorem (in its basic form) cannot be applied. You'll need other theorems (like the Residue Theorem) for such cases.
