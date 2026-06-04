---
title: "Beams of uniform strength"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Theory of simple bending, assumptions and limitations"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f72"
status: "completed"
scrapedAt: "2026-05-20T18:37:26.925Z"
---
# MECHANICS OF SOLIDS - MODULE 3: THEORY OF SIMPLE BENDING

## Topic: Beams of Uniform Strength

Welcome, everyone! In this session, we're going to delve into a fascinating concept within the theory of bending: **Beams of Uniform Strength**. We've already explored the fundamental principles of simple bending – how beams bend under load, the resulting stresses, and the assumptions that simplify our analysis. Now, we're going to build upon that foundation to design beams that are exceptionally efficient.

Think about it: if we can make a beam that has the same maximum bending stress at *every* cross-section, wouldn't that be a more economical and lighter design? That’s precisely what a beam of uniform strength aims to achieve. It's about optimizing material usage and ensuring the beam can handle the stresses distributed evenly across its length.

### 1. Revisiting the Basics: Bending Stress and Section Modulus

Before we dive into uniform strength, let's quickly recap a crucial formula from our theory of simple bending. We know that the bending stress ($\sigma$) at any point in a beam is given by:

$$ \sigma = \frac{M y}{I} $$

where:
*   $M$ is the bending moment at the cross-section.
*   $y$ is the distance from the neutral axis to the point where stress is calculated.
*   $I$ is the moment of inertia of the cross-section about the neutral axis.

We often express this as $\sigma = \frac{M}{Z}$, where $Z = \frac{I}{y_{max}}$ is the **section modulus**. Here, $y_{max}$ is the distance from the neutral axis to the extreme fiber (the point furthest from the neutral axis, where bending stress is maximum).

**This formula is key!** It tells us that for a given bending moment $M$, the maximum bending stress $\sigma$ is inversely proportional to the section modulus $Z$.

*   **Connection to CO1 (Recall fundamental terms):** Understanding $\sigma = \frac{M}{Z}$ and the definitions of bending moment, moment of inertia, and section modulus is fundamental. Without this recall, we can't proceed.
*   **Connection to CO3 (Apply principles to calculate stresses):** This formula is the bedrock for calculating maximum bending stress. Later, we'll see how to use it to design beams.

### 2. What is a Beam of Uniform Strength?

A beam of uniform strength is designed such that the **maximum bending stress is constant throughout its length**. In simpler terms, no matter where you slice the beam along its length, the material at the extreme fibers is stressed to the same maximum value.

Why is this desirable?

Imagine a standard prismatic beam (one with a constant cross-section along its length) subjected to a bending moment that varies along its span. For example, a simply supported beam with a concentrated load at mid-span. The bending moment is maximum at the center and zero at the supports.

In a prismatic beam, the section modulus $Z$ is constant. So, $\sigma = \frac{M}{Z}$. This means the stress $\sigma$ will be highest where the bending moment $M$ is highest (at the center, in our example) and lowest where $M$ is lowest (at the supports).

This is often wasteful! At the supports, where the bending moment is small, the beam is significantly "over-designed" for the stress it experiences. The material there is underutilized. A beam of uniform strength aims to rectify this.

**Analogy Time:** Think about sculpting a statue. If you start with a rough, oversized block of marble and chip away material to form the desired shape, you're essentially optimizing its form. Similarly, a beam of uniform strength is "sculpted" in its cross-sectional properties (width and/or depth) so that the material is efficiently used everywhere to resist the bending moment.

### 3. Designing for Uniform Strength: The Relationship Between Section and Moment

To achieve uniform strength, the section modulus $Z$ of the beam must vary along its length in such a way that it "cancels out" the variation in the bending moment $M$.

From $\sigma = \frac{M}{Z}$, if we want $\sigma$ to be constant (let's call this constant $\sigma_{max}$), then we must have:

$$ Z = \frac{M}{\sigma_{max}} $$

Since $\sigma_{max}$ is a material property and a design choice (it's the maximum allowable stress), this equation tells us that the **section modulus $Z$ must be directly proportional to the bending moment $M$ at any given section.**

$$ Z \propto M $$

This is the fundamental design principle for beams of uniform strength.

*   **Connection to CO6 (Analyse to calculate safe load/proportion cross-section):** This section directly addresses how to proportion a cross-section. We're not just calculating stresses; we're dictating how the beam's shape should change to achieve a specific stress distribution.

### 4. Key Considerations and Assumptions

Before we look at specific shapes, let's remember the underlying assumptions that make this analysis possible. These are the same assumptions we use for simple bending, as outlined by authors like R.K. Bansal and H.J. Shah & S.B. Junnarkar:

*   **Plane sections remain plane:** Cross-sections that are plane before bending remain plane after bending. This is crucial for the linear distribution of strain across the depth.
*   **Linear elastic material:** The material obeys Hooke's Law, meaning stress is directly proportional to strain.
*   **Small deflections:** The deflections are small compared to the beam's dimensions, so the geometry doesn't change significantly.
*   **Symmetric cross-sections:** Often, for simplicity, we assume symmetric cross-sections about the vertical axis (like rectangles, I-sections, etc.) where the neutral axis passes through the centroid.
*   **Pure bending or predominantly bending:** The analysis is most accurate when bending is the dominant mode of stress, and shear effects are secondary.

**Limitations:** It's important to note that in reality, shear stress also exists, and its distribution is not uniform. Beams of uniform strength, as derived from simple bending theory, primarily address the *bending stress* distribution. For beams with significant shear forces, a design based solely on uniform bending stress might not be optimal for shear. This is a point emphasized by Gere & Timoshenko in their discussions on stress concentration and more advanced beam theories.

### 5. Shapes of Beams of Uniform Strength

Now, let's see how this principle ($Z \propto M$) translates into actual beam shapes for different loading conditions. We'll consider common beam types and how their cross-sections should vary.

For most common cross-sections, the section modulus $Z$ can be expressed in terms of a characteristic dimension, say $h$ (depth) or $b$ (width). For example:

*   **Rectangular Section (width $b$, depth $h$):** $I = \frac{bh^3}{12}$, $y_{max} = \frac{h}{2}$. So, $Z = \frac{I}{y_{max}} = \frac{bh^3/12}{h/2} = \frac{bh^2}{6}$.
*   **Flanged Section (like an I-beam):** For an I-beam, the section modulus is approximately related to the flange width ($b_f$) and the overall depth ($h$). $Z \approx \frac{b_f h^2}{6}$ if the web is thin.

The key is that $Z$ is proportional to $b \times (\text{depth})^2$ for rectangles, or flange width $\times (\text{depth})^2$ for I-beams, etc.

#### 5.1. Simply Supported Beam with Uniformly Distributed Load (UDL)

Let's take a common case: a simply supported beam of span $L$ carrying a UDL of intensity $w$ per unit length.

The bending moment $M(x)$ at a distance $x$ from the support is given by:

$$ M(x) = \frac{wL}{2}x - \frac{wx^2}{2} = \frac{w}{2}(Lx - x^2) $$

This moment is maximum at the center ($x = L/2$), where $M_{max} = \frac{wL^2}{8}$.

For uniform strength, $Z(x) \propto M(x)$. So, the section modulus must vary parabolic ally along the length, being maximum at the center and zero at the supports.

*   **Rectangular Beam (constant width $b$, variable depth $h$):**
    $Z(x) = \frac{bh^2(x)}{6}$.
    So, $\frac{bh^2(x)}{6} \propto \frac{w}{2}(Lx - x^2)$.
    This implies $h^2(x) \propto (Lx - x^2)$.
    The depth $h(x)$ will vary parabolically. At the center, $h$ will be maximum. At the supports, the depth $h(x)$ would theoretically be zero, which is practically impossible.

*   **Rectangular Beam (variable width $b$, constant depth $h$):**
    $Z(x) = \frac{b(x)h^2}{6}$.
    So, $\frac{b(x)h^2}{6} \propto \frac{w}{2}(Lx - x^2)$.
    This implies $b(x) \propto (Lx - x^2)$.
    The width $b(x)$ will vary parabolically, being maximum at the center and zero at the supports.

*   **Rectangular Beam (variable width $b$, variable depth $h$):**
    Here, we have more flexibility. We can choose one dimension to be constant and vary the other, or vary both according to some design preference.

**Practical Implication:** For a simply supported beam under UDL, the section modulus needs to increase quadratically from the ends towards the center. This means either the depth or the width (or both) must increase quadratically towards the mid-span.

#### 5.2. Cantilever Beam with a Concentrated Load at the Free End

Consider a cantilever beam of length $L$ with a concentrated load $P$ at the free end.

The bending moment $M(x)$ at a distance $x$ from the free end is:

$$ M(x) = Px $$

This moment is zero at the free end ($x=0$) and maximum at the fixed support ($x=L$), where $M_{max} = PL$.

For uniform strength, $Z(x) \propto M(x)$, so $Z(x) \propto Px$. The section modulus must vary linearly along the length, being zero at the free end and maximum at the fixed support.

*   **Rectangular Beam (constant width $b$, variable depth $h$):**
    $Z(x) = \frac{bh^2(x)}{6}$.
    So, $\frac{bh^2(x)}{6} \propto Px$.
    This implies $h^2(x) \propto x$.
    The depth $h(x)$ will vary as $\sqrt{x}$. The depth will increase linearly from the free end towards the fixed support. At the fixed support, $h$ will be maximum. At the free end, $h$ would theoretically be zero.

*   **Rectangular Beam (variable width $b$, constant depth $h$):**
    $Z(x) = \frac{b(x)h^2}{6}$.
    So, $\frac{b(x)h^2}{6} \propto Px$.
    This implies $b(x) \propto x$.
    The width $b(x)$ will vary linearly, being zero at the free end and maximum at the fixed support.

**Analogy:** Think of a painter's brush. The bristles are thin at the handle (free end) and spread out to be wide and thick at the brush head (fixed support) to manage the paint distribution. This shape change is analogous to how a cantilever beam of uniform strength would taper.

*   **Connection to CO6 (Analyse to calculate safe load/proportion cross-section):** These examples show precisely how to determine the required cross-sectional properties ($b$ and $h$) as a function of position along the beam's length to achieve uniform strength under specific loading conditions.

#### 5.3. Cantilever Beam with Uniformly Distributed Load (UDL)

For a cantilever beam of length $L$ with a UDL of intensity $w$ per unit length, the bending moment at a distance $x$ from the free end is:

$$ M(x) = \frac{wx^2}{2} $$

This moment is zero at the free end ($x=0$) and maximum at the fixed support ($x=L$), where $M_{max} = \frac{wL^2}{2}$.

For uniform strength, $Z(x) \propto M(x)$, so $Z(x) \propto x^2$. The section modulus must vary quadratically along the length, being zero at the free end and maximum at the fixed support.

*   **Rectangular Beam (constant width $b$, variable depth $h$):**
    $Z(x) = \frac{bh^2(x)}{6}$.
    So, $\frac{bh^2(x)}{6} \propto x^2$.
    This implies $h^2(x) \propto x^2$, or $h(x) \propto x$.
    The depth $h(x)$ will vary linearly, increasing from zero at the free end to a maximum at the fixed support.

*   **Rectangular Beam (variable width $b$, constant depth $h$):**
    $Z(x) = \frac{b(x)h^2}{6}$.
    So, $\frac{b(x)h^2}{6} \propto x^2$.
    This implies $b(x) \propto x^2$.
    The width $b(x)$ will vary quadratically, being zero at the free end and maximum at the fixed support.

**Summary Table for Rectangular Beams:**

| Beam Type                 | Load Type       | Bending Moment $M(x)$ | Section Modulus $Z(x) \propto$ | Depth $h(x) \propto$ (Constant $b$) | Width $b(x) \propto$ (Constant $h$) |
| :------------------------ | :-------------- | :-------------------- | :----------------------------- | :----------------------------------- | :----------------------------------- |
| Simply Supported          | UDL ($w$)       | $Lx-x^2$              | $Lx-x^2$                       | $\sqrt{Lx-x^2}$ (Parabolic)          | $Lx-x^2$ (Parabolic)                 |
| Cantilever                | Load $P$ at end | $x$                   | $x$                            | $\sqrt{x}$ (Linear taper)            | $x$ (Linear taper)                   |
| Cantilever                | UDL ($w$)       | $x^2$                 | $x^2$                          | $x$ (Linear taper)                   | $x^2$ (Quadratic taper)              |

*(Note: "Linear taper" implies the dimension increases linearly with x, meaning the shape is triangular. "Quadratic taper" means the dimension changes with x^2, resulting in a parabolic shape.)*

*   **Connection to CO2 (Explain behavior and response):** By understanding these shapes, we can explain how a beam of uniform strength responds differently to loads compared to a prismatic beam. We can articulate *why* it's more efficient.

### 6. Numerical Example: Designing a Rectangular Cantilever Beam for Uniform Strength

Let's solidify this with an example. Suppose we have a cantilever beam of length $L=2$ meters, with a constant width $b=100$ mm, and it carries a load $P=5$ kN at the free end. The material we are using has an allowable bending stress $\sigma_{max} = 150$ MPa. We need to determine the depth of the beam at any section $x$ from the free end to make it a beam of uniform strength.

1.  **Bending Moment:** $M(x) = Px = 5 \text{ kN} \times x = 5000x \text{ N-m}$.
2.  **Section Modulus Requirement:** For uniform strength, $Z(x) = \frac{M(x)}{\sigma_{max}}$.
    $\sigma_{max} = 150 \text{ MPa} = 150 \times 10^6 \text{ N/m}^2$.
    $Z(x) = \frac{5000x \text{ N-m}}{150 \times 10^6 \text{ N/m}^2} = \frac{1}{30000}x \text{ m}^3$.
3.  **Section Modulus for Rectangular Section:** $Z(x) = \frac{bh^2(x)}{6}$.
    We are given $b = 100$ mm $= 0.1$ m.
    $Z(x) = \frac{0.1 \times h^2(x)}{6} = \frac{h^2(x)}{60}$ m$^3$.
4.  **Equating the expressions for $Z(x)$:**
    $\frac{h^2(x)}{60} = \frac{1}{30000}x$
    $h^2(x) = \frac{60}{30000}x = \frac{1}{500}x$
    $h(x) = \sqrt{\frac{x}{500}} = \frac{\sqrt{x}}{\sqrt{500}} = \frac{\sqrt{x}}{10\sqrt{5}}$ meters.

Let's convert this to millimeters:
$h(x) = \frac{\sqrt{x}}{10\sqrt{5}} \times 1000 \text{ mm} = \frac{100\sqrt{x}}{\sqrt{5}} = 20\sqrt{5}\sqrt{x} \text{ mm} \approx 44.72\sqrt{x} \text{ mm}$.

So, at the free end ($x=0$), the depth is $h(0) = 0$ mm.
At the fixed support ($x=2$ m $= 2000$ mm), the depth is $h(2000) = 44.72\sqrt{2000} \approx 44.72 \times 44.72 \approx 2000$ mm.

This shows that the depth of the beam must increase linearly from 0 at the free end to 2000 mm at the fixed support for this cantilever beam to have uniform strength. This is a significant taper!

*   **Connection to CO3 (Apply principles) and CO6 (Proportion cross-section):** This numerical example directly applies the stress formula and section modulus concept to proportion the beam's depth to achieve uniform strength.

### 7. Practical Aspects and Manufacturing Considerations

While the concept of uniform strength leads to theoretically optimized designs, there are practical limitations:

1.  **Zero Depth at Ends:** For many cases (like cantilevers), the theory predicts zero depth or width at one end. This is physically impossible. In practice, a minimum cross-sectional dimension is maintained to ensure structural integrity and ease of handling. The taper is stopped at a certain practical depth.
2.  **Manufacturing Complexity:** Creating beams with continuously varying cross-sections can be complex and expensive, especially for materials like steel. Standard I-beams or rectangular sections are easier to manufacture.
3.  **Shear Stress:** As mentioned, this design primarily addresses bending stress. If shear forces are very large, the beam might need to be reinforced against shear, potentially deviating from pure uniform bending strength.
4.  **Stress Concentrations:** Holes, notches, or sudden changes in cross-section can lead to stress concentrations, where the actual stress is much higher than predicted by simple bending theory. These must be accounted for in detailed design, often by modifying the shape locally or using higher safety factors. Punmia, Jain, & Jain discuss these practical design considerations extensively.
5.  **Load Variability:** If the load distribution is not precisely known or changes, a uniform strength design optimized for one load case might not be efficient for another.

Despite these challenges, the concept is vital for designing components where weight is critical, such as aircraft structures, crane hooks, or bridges where optimized material use translates to significant benefits. The principles guide the *shape* of the load-carrying capacity, even if the final manufactured product is a simplified approximation.

### 8. Comparison with Prismatic Beams

| Feature             | Prismatic Beam                               | Beam of Uniform Strength                               |
| :------------------ | :------------------------------------------- | :----------------------------------------------------- |
| Cross-section       | Constant along the length.                   | Varies along the length.                               |
| Section Modulus     | Constant ($Z$).                              | Varies ($Z(x)$), proportional to bending moment ($M(x)$). |
| Bending Stress      | Varies; maximum where bending moment is max. | Constant ($\sigma_{max}$) at extreme fibers.           |
| Material Usage      | Often less efficient (over-designed at low $M$). | Highly efficient; material is utilized uniformly.      |
| Design Complexity   | Simpler cross-section, easier manufacture.   | More complex shape, potentially harder to manufacture. |
| Weight              | Generally heavier for the same load capacity. | Generally lighter for the same load capacity.          |

*   **Connection to CO6 (Analyse to calculate safe load/proportion cross-section):** This comparison highlights the analytical outcome of applying uniform strength principles, directly showing the advantages in terms of efficiency and weight.

### 9. Recap and Key Takeaways

So, to wrap up our discussion on beams of uniform strength:

*   The core idea is to make the **maximum bending stress constant throughout the beam's length**.
*   This is achieved by ensuring the **section modulus ($Z$) is directly proportional to the bending moment ($M$)** at every cross-section ($Z \propto M$).
*   The shape of the beam (its varying cross-section) will mirror the variation of the bending moment diagram. For instance, a parabolic $M$ requires a parabolic variation in $Z$, and a linear $M$ requires a linear variation in $Z$.
*   While theoretically efficient, practical considerations like zero depth at ends and manufacturing complexity require modifications in real-world applications.

Remember this: a beam of uniform strength is an ideal design for maximizing material efficiency against bending stresses. It's a powerful application of the bending stress formula that allows engineers to create lighter and more economical structures where it matters most.

---

### Sample Questions with Answers

**1. Conceptual Question:**
What is the fundamental principle behind the design of a beam of uniform strength, and how does it relate to the bending moment distribution?

**Answer:**
The fundamental principle of a beam of uniform strength is to ensure that the **maximum bending stress** experienced by the material is **constant** at every cross-section along the beam's length. This is achieved by ensuring that the **section modulus ($Z$) of the beam is directly proportional to the bending moment ($M$)** at that cross-section, i.e., $Z \propto M$. Since the allowable stress ($\sigma_{max}$) is constant, and $\sigma_{max} = M/Z$, this proportionality means that as the bending moment $M$ increases or decreases along the beam, the section modulus $Z$ changes accordingly, maintaining a constant stress.

**2. Application Question:**
A cantilever beam of length $L$ is subjected to a uniformly distributed load $w$ per unit length. Derive the relationship for the variation of depth ($h$) if the beam has a constant width ($b$) and is designed for uniform strength.

**Answer:**
For a cantilever beam with UDL $w$, the bending moment at a distance $x$ from the free end is $M(x) = \frac{wx^2}{2}$.
For uniform strength, the section modulus $Z(x)$ must be proportional to $M(x)$: $Z(x) \propto x^2$.
For a rectangular section with constant width $b$ and variable depth $h(x)$, the section modulus is $Z(x) = \frac{bh^2(x)}{6}$.
Equating the proportionality:
$\frac{bh^2(x)}{6} \propto x^2$
Since $b$ is constant, $h^2(x) \propto x^2$.
Taking the square root, we get $h(x) \propto x$.
This means the depth of the beam must vary linearly with the distance from the free end. The depth will be zero at the free end and maximum at the fixed support.

**3. Practical Design Question:**
Why is a beam designed for uniform strength often not manufactured with zero depth at one end, even though the theory suggests it?

**Answer:**
The theory of uniform strength predicts zero depth or width at ends where the bending moment is zero (e.g., at the free end of a cantilever). However, in practice:
*   **Structural Integrity:** A beam with zero cross-sectional area cannot carry any load. A minimum practical depth or width is necessary for the beam to have any structural capability and to be handled and connected.
*   **Manufacturing Feasibility:** Producing a beam that tapers to an absolute zero dimension is impossible and impractical with standard manufacturing processes.
*   **Shear Effects:** At sections with low bending moments, shear forces might still be significant. A zero cross-section would completely fail under shear.
Therefore, in real-world applications, the taper is stopped at a practical minimum depth or width at such ends. This results in the beam not being perfectly of uniform strength at the very ends, but it remains a highly efficient design over most of its length.
