---
title: "Shear stress in beams"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Theory of simple bending, assumptions and limitations"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f71"
status: "completed"
scrapedAt: "2026-05-20T18:37:26.225Z"
---
## Module 3: Theory of Simple Bending – Shear Stress in Beams

Welcome back, everyone! In our previous discussions on the theory of simple bending, we focused primarily on how bending moments cause stresses that are *perpendicular* to the beam's cross-section – the familiar tensile and compressive stresses. We learned that these stresses vary linearly across the depth of the beam, being zero at the neutral axis and maximum at the top and bottom surfaces. This is crucial, and you'll definitely be tested on that linear distribution (CO1, CO2).

However, beams are rarely subjected to pure bending alone. In reality, applied loads often generate internal forces that are not just bending moments. Alongside bending moments, there are also **shear forces**. These shear forces, as you've encountered in introductory mechanics, are forces acting *parallel* to the cross-section, trying to slide one part of the beam past another. Consequently, they induce **shear stresses** within the beam's material. Understanding these shear stresses is just as vital for predicting a beam's behavior and ensuring its safety.

This session is dedicated to exploring these **shear stresses in beams**. We'll delve into how they arise, how to calculate them, and what factors influence their distribution across the beam's cross-section. This directly ties into our understanding of how structural elements respond to loads (CO2) and will equip you to perform calculations related to internal stresses (CO3).

### The Genesis of Shear Stress: Why Bending Isn't Always Pure

Let's start by thinking about why shear forces and, thus, shear stresses appear in beams. Imagine a simple cantilever beam with a load at its free end. As you know, this load creates a bending moment along the beam, which varies from zero at the free end to a maximum at the fixed support. But this load also directly creates a shear force, which is constant along the beam.

Even in a simply supported beam with a distributed load, the bending moment changes from section to section, and so does the shear force. When the shear force changes along the beam's length, it implies that the *internal resultant shear force* acting on a cross-section must be balanced by internal shear stresses.

Think about it this way: If you take two adjacent cross-sections of a beam that are experiencing different shear forces, there must be some internal mechanism resisting this change. This mechanism is provided by the shear stresses acting on these cross-sections. As stated by fundamental principles of mechanics (CO1), equilibrium must be maintained, and these stresses are the internal forces that achieve this equilibrium.

### Deriving the Shear Stress Formula: A Moment of Insight

Now, let's get to the core of it – how do we quantify these shear stresses? The classical derivation for shear stress distribution in beams, as you'll find in texts like Bansal's "A Textbook of Strength of Materials" or Punmia, Jain, and Jain's "Mechanics of Materials," relies on the principles of bending and equilibrium.

Consider a small segment of a beam of length $dx$. Let's say this segment is subjected to bending moments $M$ and $M + dM$ at its ends. Due to these moments, we know that the normal stresses ($\sigma$) vary linearly across the depth of the beam.

Now, let's focus on a horizontal layer at a distance $y$ from the neutral axis, extending across the entire width of the beam. The normal stress at this level is $\sigma = \frac{My}{I}$, where $I$ is the moment of inertia of the cross-section about the neutral axis.

Consider a portion of this horizontal layer between the neutral axis and a level at a distance $y_1$ from the neutral axis. The *bending moment* creates varying normal stresses on the vertical faces of our beam segment. Crucially, the *difference* in the resultant normal forces acting on the two vertical faces of the beam segment ($M$ and $M+dM$) must be balanced by the shear forces acting on the horizontal surfaces.

This is where the concept of **first moment of area** comes in, a key concept often covered in strength of materials (CO1). For a given cross-section, the shear stress at any point depends on the first moment of area of the portion of the cross-section *above* (or below) that point, taken with respect to the neutral axis.

The fundamental formula for shear stress ($\tau$) in a beam at any point is given by:

$$ \tau = \frac{VQ}{Ib} $$

Let's break down each component of this crucial formula, which is central to calculating shear stress and is frequently tested (CO3, CO6):

*   **$V$**: This is the **shear force** acting on the cross-section at the location you are considering. It's the algebraic sum of all vertical forces acting to the left (or right) of the section.
*   **$Q$**: This is the **first moment of area** of the portion of the cross-section *above* (or below) the level where you want to calculate the shear stress, taken about the neutral axis. If you're calculating shear stress at a level $y_1$ from the neutral axis, $Q$ would be the area of the cross-section above $y_1$, multiplied by the distance of its centroid from the neutral axis. Mathematically, $Q = A' \bar{y}'$, where $A'$ is the area of the portion of the cross-section above the level $y_1$, and $\bar{y}'$ is the distance of the centroid of $A'$ from the neutral axis.
*   **$I$**: This is the **moment of inertia** (or second moment of area) of the *entire* cross-section about the neutral axis. This is a property of the shape of the cross-section itself.
*   **$b$**: This is the **width** of the cross-section at the level where you are calculating the shear stress. It's the dimension parallel to the shear force acting on the cross-section.

Think of $Q$ as a measure of how "unevenly" the area is distributed above a certain point relative to the neutral axis. A larger $Q$ means there's more area further away from the neutral axis, contributing more to the shear stress. The $b$ term in the denominator tells us that a wider beam at that level will distribute the shear force over a larger area, thus reducing the shear stress.

### Visualizing Shear Stress Distribution: It's Not Uniform!

Unlike normal stresses in bending, which vary linearly, shear stresses in beams do *not* have a uniform distribution across the cross-section. This is a key point to remember for exams (CO2, CO5). The distribution is parabolic for most common cross-sectional shapes.

Let's consider some common shapes:

**1. Rectangular Cross-Section:**
This is perhaps the most fundamental example. For a rectangular beam of width $b$ and depth $h$, the neutral axis passes through the centroid, at a distance $h/2$ from the top and bottom.

The formula for $Q$ at a distance $y$ from the neutral axis can be derived by integrating the area of the strip above that level. For a rectangular section, this typically leads to a **parabolic distribution** of shear stress.

*   **At the neutral axis ($y=0$)**: $Q$ is maximum. This is because the entire area of the beam is above the neutral axis, and its centroid is as far as possible from the neutral axis. Consequently, the shear stress is **maximum** at the neutral axis.
*   **At the top and bottom surfaces ($y = \pm h/2$)**: $Q$ is zero. There is no area above the top surface or below the bottom surface, so the first moment of area is zero. Hence, the shear stress is **zero** at the extreme top and bottom fibers.

The maximum shear stress ($\tau_{max}$) for a rectangular section occurs at the neutral axis and is related to the average shear stress ($V/A$) by a factor of $3/2$. So, $\tau_{max} = \frac{3}{2} \frac{V}{A}$, where $A = bh$ is the total cross-sectional area. This is a very important result you should commit to memory for quick problem-solving.

*Analogy:* Imagine trying to slide a stack of papers. The friction between the individual pages is like the shear stress. If you apply a force to the top page, it's the cumulative friction of all the pages below that resists the movement. The "effort" to slide is greatest at the interface between the middle pages (analogous to the neutral axis), and least at the very top and bottom where there's nothing above or below to contribute to this sliding resistance.

**2. I-Section (Rolled Steel Joist):**
I-sections are widely used in construction and are designed to be efficient in bending. However, understanding their shear stress distribution is a bit more complex than a simple rectangle.

In an I-section, the cross-section consists of a web (the vertical part) and two flanges (the horizontal parts). The derivation of shear stress for an I-section often involves treating the web and flanges separately.

*   **In the flanges**: The width of the flanges ($b$) is usually much larger than the thickness of the web ($t_w$). While the formula $\tau = \frac{VQ}{Ib}$ still applies, the first moment of area ($Q$) for the flanges (relative to the neutral axis) is significant. However, because the flange width $b$ is large, the shear stress in the flanges is generally **very small**. Most of the shear force is carried by the web.
*   **In the web**: The web is typically tall and narrow. As we move down the web from the junction with the flange towards the neutral axis, the width $b$ of the web remains constant (the web thickness $t_w$), but $Q$ increases, leading to an increase in shear stress. The shear stress distribution across the web is generally **parabolic**.
*   **Maximum shear stress**: For an I-section, the maximum shear stress occurs at the neutral axis and is approximately carried almost entirely by the web. A common approximation for the maximum shear stress in an I-section is: $\tau_{max} \approx \frac{V}{A_{web}}$, where $A_{web} = h_{web} \times t_w$. This approximation is valid when the flanges carry negligible shear. This is a critical simplification often used in practice and exam problems (CO6).

*Relatable Example:* Think of an I-beam supporting a floor. The flanges are designed to resist the bending stresses, acting like broad hands gripping the load. The web, though thinner, is the part that primarily handles the "sliding" tendency of the load across the beam's depth – it's the backbone resisting shear.

**3. Circular Cross-Section:**
For a solid circular beam of radius $r$, the shear stress distribution is also parabolic.

*   **At the neutral axis ($y=0$)**: The shear stress is **maximum**.
*   **At the top and bottom surfaces ($y = \pm r$)**: The shear stress is **zero**.

The maximum shear stress for a solid circular section occurs at the neutral axis and is given by $\tau_{max} = \frac{4}{3} \frac{V}{A}$, where $A = \pi r^2$ is the total cross-sectional area. Notice the factor $4/3$ here, different from the rectangular section's $3/2$. This highlights how the shape of the cross-section profoundly affects the shear stress distribution and its maximum value (CO2, CO5).

*   **Hollow Circular Section**: The derivation for a hollow circular section is more involved, as the width $b$ varies with the depth $y$. However, the general trend of zero shear stress at the top and bottom and maximum at the neutral axis remains. The maximum shear stress is also typically located slightly above or below the neutral axis, not exactly at it, due to the variation in $b$.

### Assumptions and Limitations of the Shear Stress Formula

Just like the theory of simple bending, the shear stress formula $\tau = \frac{VQ}{Ib}$ is based on several important assumptions and has its limitations. Understanding these is crucial for applying the formula correctly and recognizing when it might not be suitable (CO1, CO2).

**Assumptions:**

1.  **Plane sections remain plane**: This is a carry-over from the theory of simple bending. It assumes that cross-sections that were plane before bending remain plane after bending.
2.  **Shear stress is uniformly distributed across the width $b$**: This is an assumption within the derivation for a given layer, meaning we consider a constant width $b$ at that level.
3.  **The material is homogeneous and isotropic**: The material properties are the same everywhere and in all directions.
4.  **The material obeys Hooke's Law**: The stress is directly proportional to strain.
5.  **The beam is initially straight and has a constant cross-section**: Most derivations focus on prismatic beams.
6.  **The shear stress varies parabolically across the depth**: This is a *result* of the assumptions and the derivation, not an initial assumption itself, but it's important to remember this distribution.
7.  **The shear force $V$ is constant across the cross-section**: This is what we are analyzing.
8.  **The beam is long and slender**: The length of the beam is significantly greater than its depth. This is why these formulas are applied to "beams." For very short, deep beams (often called "thick beams" or "short beams"), the shear deformation can become significant and the simple bending theory assumptions start to break down.

**Limitations:**

1.  **Not applicable to deep beams**: As mentioned, for beams where the length is not much greater than the depth, the assumption of plane sections remaining plane might not hold perfectly, and shear deformation can be significant. This leads to deviations from the predicted shear stress distribution and beam deflection. You might see this discussed in more advanced texts like "Engineering Mechanics of Solids" by Egor P. Popov.
2.  **Assumes pure shear is negligible compared to normal stress effects**: The derivation implicitly assumes that the shear deformation doesn't significantly alter the normal stress distribution predicted by simple bending theory. This is generally true for slender beams.
3.  **Shape dependency**: The exact distribution and maximum values of shear stress are highly dependent on the cross-sectional shape, as we saw with rectangles, I-sections, and circles. The formula works generally, but the specific values of $Q$ and the resulting $\tau_{max}$ vary.
4.  **Concentrated loads and supports**: Near points of concentrated loads or supports, the stress distribution can be complex due to localized effects, and the simple beam theory might not be accurate. Saint-Venant's principle often states that these localized effects diminish rapidly away from the source.

### Connecting to Course Outcomes: Why This Matters

Let's quickly recap how understanding shear stress in beams connects to our course outcomes:

*   **CO1 (Recall fundamental terms/theorems):** We're using fundamental theorems like equilibrium and the principles of bending, along with concepts like first moment of area.
*   **CO2 (Explain behavior/response):** We're explaining how shear forces cause internal shear stresses that resist the "sliding" tendency, influencing the beam's overall behavior and failure modes.
*   **CO3 (Apply principles to calculate stresses):** The core of this topic is applying the formula $\tau = \frac{VQ}{Ib}$ to calculate shear stresses in various beam cross-sections.
*   **CO5 (Perform stress transformations, identify principal planes/stresses):** While we are focusing on shear stress in beams, remember that the shear stress and normal stress at a point are components. Understanding their distribution is foundational to calculating principal stresses and maximum shear stresses at any point within the beam, often using Mohr's circle.
*   **CO6 (Analyze for safe load/proportioning):** Knowing the shear stress distribution allows engineers to check if the shear stress at critical locations exceeds the material's shear strength, ensuring the beam can safely carry the load. It also informs how to design the cross-section, especially the web in I-beams, to withstand shear forces.

### Key Takeaways for Exams

*   **Understand the difference in distribution:** Normal stress (bending) is linear; shear stress is generally parabolic, zero at the top/bottom, and maximum at the neutral axis (for symmetric sections).
*   **Master the formula:** $\tau = \frac{VQ}{Ib}$. Know what each term represents and how to calculate $Q$ for different shapes.
*   **Remember the exceptions:** Maximum shear stress for rectangular sections is $3/2$ times the average; for circular sections, it's $4/3$ times the average.
*   **I-beams:** The web carries most of the shear, and $\tau_{max} \approx V/A_{web}$ is a common approximation.
*   **Limitations:** Deep beams, stress concentrations.

Let's solidify this with some examples.

---

### Sample Questions with Answers

**1. Conceptual Question:**
Why is the shear stress in a beam usually maximum at the neutral axis and zero at the extreme fibers?

**Answer:**
This phenomenon arises from the definition of shear stress in beams, $\tau = \frac{VQ}{Ib}$. The term $Q$ represents the first moment of area of the portion of the cross-section above (or below) the point of interest, taken about the neutral axis.
*   At the **extreme fibers** (top and bottom surfaces), the area above or below is zero, so $Q=0$. Consequently, $\tau = 0$.
*   At the **neutral axis**, the area above (or below) it is the largest and its centroid is furthest from the neutral axis, resulting in the maximum value of $Q$. Since $I$ and $b$ are typically constant at that level, the shear stress $\tau$ is maximized at the neutral axis. This parabolic distribution is a consequence of the change in bending moment and the distribution of material relative to the neutral axis. This relates to CO2.

**2. Calculation Question:**
A simply supported rectangular beam of width 100 mm and depth 200 mm is subjected to a shear force of 50 kN. Calculate the maximum shear stress in the beam.

**Answer:**
Given:
Width, $b = 100 \text{ mm}$
Depth, $h = 200 \text{ mm}$
Shear Force, $V = 50 \text{ kN} = 50 \times 10^3 \text{ N}$

For a rectangular section, the maximum shear stress occurs at the neutral axis and is given by:
$\tau_{max} = \frac{3}{2} \frac{V}{A}$

First, calculate the cross-sectional area $A$:
$A = b \times h = 100 \text{ mm} \times 200 \text{ mm} = 20000 \text{ mm}^2$

Now, calculate the maximum shear stress:
$\tau_{max} = \frac{3}{2} \times \frac{50 \times 10^3 \text{ N}}{20000 \text{ mm}^2}$
$\tau_{max} = \frac{3}{2} \times 2.5 \text{ N/mm}^2$
$\tau_{max} = 3.75 \text{ N/mm}^2$ or $3.75 \text{ MPa}$

This calculation directly uses the derived formula and is an example of applying principles to find stress (CO3, CO6).

**3. Conceptual/Application Question:**
For an I-section beam, why is it generally acceptable to assume that the web carries almost all the shear force, and the shear stress in the flanges is negligible?

**Answer:**
An I-section is primarily designed for efficient bending resistance, with its flanges providing a large lever arm to resist bending moments. The web's role is to connect the flanges and resist the shear forces.
In the formula $\tau = \frac{VQ}{Ib}$, for the flanges:
*   The first moment of area ($Q$) is relatively large because the flanges are far from the neutral axis.
*   However, the width $b$ of the flanges is significantly larger than the web thickness ($t_w$). This large $b$ term in the denominator effectively reduces the shear stress in the flanges.

Conversely, in the web:
*   The width $b$ is small ($t_w$).
*   While $Q$ for the web is less than the total $Q$ for the flanges, the shear stress distribution within the web is parabolic and reaches its maximum at the neutral axis.
*   The concentration of the shear force into the narrower web means that the shear stress in the web is significantly higher than in the flanges. Therefore, for practical purposes, especially in preliminary design and analysis, it is assumed that the web carries the entire shear force, and the shear stress in the flanges is considered negligible. This simplification allows for easier calculations and is a crucial aspect of analyzing beam behavior (CO2, CO6).

**4. Exam Pitfall Question:**
A beam has a circular cross-section. If the shear force is $V$, what is the maximum shear stress? Is it $3/2 (V/A)$ or $4/3 (V/A)$?

**Answer:**
This is a common point of confusion. The factor depends on the shape of the cross-section.
*   For a **rectangular** cross-section, $\tau_{max} = \frac{3}{2} \frac{V}{A}$.
*   For a **circular** cross-section, $\tau_{max} = \frac{4}{3} \frac{V}{A}$.

Therefore, for a circular cross-section, the correct answer is $\frac{4}{3} \frac{V}{A}$. Remembering these specific factors for common shapes is key for exam success (CO3).

---
