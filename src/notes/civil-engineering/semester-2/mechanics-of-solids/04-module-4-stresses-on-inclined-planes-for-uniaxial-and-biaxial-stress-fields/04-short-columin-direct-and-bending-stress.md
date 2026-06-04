---
title: "Short coluMin – direct and bending stress"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f79"
status: "completed"
scrapedAt: "2026-05-20T18:37:31.153Z"
---
# Mechanics of Solids: Module 4 - Stresses on Inclined Planes for Uniaxial and Biaxial Stress Fields

## Topic: Short Column – Direct and Bending Stress

Welcome, everyone! Today, we’re diving into a very practical and important aspect of solid mechanics: how structural members, particularly short columns, behave when subjected to combined axial loads and bending moments. This topic is crucial for understanding the stability and safety of many engineering structures. We'll be building upon our understanding of basic stress concepts and preparing ourselves for more complex analyses, which directly relates to **Course Outcome 1 (Recall fundamental terms)** and **Course Outcome 2 (Explain behavior and response)**. As we progress, you'll see how this knowledge helps us **apply principles (CO3)** and **analyze structural members (CO6)**.

### 1. Introduction: The Humble Column and Its Woes

Think about a simple pillar supporting a roof, or the leg of a table. These are essentially columns. When you push down on the top of a column with a perfectly centered load, the stress is uniform across its entire cross-section. This is what we call **direct stress** or **axial stress**.

Imagine a square column of length L and cross-sectional area A, subjected to an axial compressive force P. The direct compressive stress, denoted by $\sigma_d$, is simply the force divided by the area:

$\sigma_d = \frac{P}{A}$

This formula, you'll recall from earlier modules, assumes the load is applied precisely at the centroid of the cross-section. It's a straightforward application of our basic stress definitions, aligning with **CO1**.

But what happens in the real world? Loads are rarely applied so perfectly. Often, the force is applied slightly off-center, or there might be other forces acting that cause the column to bend. This bending introduces an *additional* stress, known as **bending stress**.

So, in this topic, we are interested in the **combined effect of direct stress and bending stress** when a load is applied eccentrically to a short column. A "short" column implies that buckling (the sudden sideways failure under compression) is not the primary concern; instead, we're focused on the stresses induced by the load and its eccentricity. This is essential for **CO2**, as we're explaining the response to combined loading.

### 2. Eccentric Loading: The Story of a "Leaning" Load

Let's consider our column again. Suppose the axial compressive force P is not applied at the centroid of the cross-section, but at a distance 'e' (the eccentricity) from it. This is called **eccentric loading**.

**Analogy:** Imagine you're trying to push a stack of books straight down onto a table. If you push exactly in the middle of the top book, it stays perfectly vertical. But if you push off to one side, the stack will not only compress but also lean slightly. That leaning tendency is analogous to bending.

This eccentric load can be thought of, for analysis purposes, as two components:

*   **A direct axial load (P)** acting at the centroid of the cross-section.
*   **A moment (M)** acting about the axis passing through the centroid, equal to the force multiplied by its eccentricity ($M = P \times e$).

This way of breaking down the problem is incredibly useful because we already know how to calculate the stresses due to a direct axial load. Now, we just need to figure out the stress due to this moment. This technique of reducing a problem to simpler, already-solved parts is a hallmark of engineering analysis, and it directly helps us **apply principles (CO3)**.

### 3. Bending Stress: The Stress Due to the "Lean"

When a moment is applied to a beam or column, it causes bending, leading to stresses that vary across the cross-section. For a column with bending, we'll have stresses on one side that add to the direct stress, and on the other side, stresses that subtract from it.

**Recall (CO1):** From our earlier studies on bending of beams, we know the bending stress ($\sigma_b$) at any point in a cross-section is given by the flexure formula:

$\sigma_b = \frac{M y}{I}$

Where:
*   $M$ is the bending moment.
*   $y$ is the distance of the point from the neutral axis of the cross-section.
*   $I$ is the moment of inertia of the cross-section about the neutral axis.

In our eccentric column scenario, the moment $M$ is $P \times e$. The neutral axis for bending is typically the axis passing through the centroid about which the eccentricity occurs.

**Relatable Example:** Think about trying to bend a plastic ruler. If you press uniformly along its width, it won't bend much. But if you apply force at one edge, it bends. The top surface of the bent ruler gets stretched (tensile stress), and the bottom surface gets compressed (compressive stress). For a column under eccentric *compressive* load, the bending will generally *add* to the compression on the side where the load is eccentric.

For a symmetrical cross-section (like a rectangle or circle), the maximum bending stress will occur at the outermost fibers, i.e., where $y$ is maximum. Let $y_{max}$ be this maximum distance from the neutral axis to the extreme fiber. The maximum bending stress is then:

$\sigma_{b, max} = \frac{M y_{max}}{I} = \frac{(P e) y_{max}}{I}$

This is a key formula to remember for exam preparation, directly allowing us to **apply principles (CO3)**.

### 4. Combined Stresses: The Grand Total

Now, let's put it all together. The total stress ($\sigma_{total}$) at any point in the cross-section is the sum of the direct stress and the bending stress at that point.

$\sigma_{total} = \sigma_d + \sigma_b$

Substituting our expressions:

$\sigma_{total} = \frac{P}{A} + \frac{M y}{I}$

And since $M = P \times e$:

$\sigma_{total} = \frac{P}{A} + \frac{P e y}{I}$

This equation is fundamental. It tells us the stress distribution across the entire cross-section when a load is applied eccentrically. This is crucial for **CO3 (Apply principles)** and **CO6 (Analyze structural members)**.

Now, we're usually interested in the *maximum* and *minimum* stresses experienced by the column. These typically occur at the extreme fibers of the cross-section.

*   **Maximum Stress ($\sigma_{max}$):** This occurs on the side where the direct stress and bending stress are in the same direction (i.e., both compressive in our case). This is usually on the side where the eccentricity 'e' is located.
    $\sigma_{max} = \frac{P}{A} + \frac{P e y_{max}}{I}$

*   **Minimum Stress ($\sigma_{min}$):** This occurs on the opposite side, where the bending stress might reduce the effect of the direct stress.
    $\sigma_{min} = \frac{P}{A} - \frac{P e y_{max}}{I}$

**Important Note for Exams:** Pay close attention to the sign convention! Compressive stresses are usually taken as negative. If P is compressive, $\sigma_d$ is negative. If the bending causes compression on the side you're analyzing, $\sigma_b$ will also be negative. When summing, ensure consistent signs. The terms $\frac{P}{A}$ and $\frac{Pey_{max}}{I}$ represent magnitudes here for simplicity in explanation. The actual stress will be compressive if the load is compressive.

### 5. Stress Distribution: Visualizing the Stress Profile

Let's visualize how the stresses are distributed across a rectangular column cross-section subjected to an eccentric load applied at a distance 'e' from the centroid along the 'x' axis.

Assume a rectangular column of width 'b' and depth 'd'. The centroid is at the center.
*   **Direct Stress ($\sigma_d = \frac{P}{A}$):** This is uniform across the entire section. It's a constant value, say $\sigma_0$.
*   **Bending Stress ($\sigma_b = \frac{Pey}{I}$):** For bending about the x-axis (through the centroid), the moment of inertia $I = \frac{bd^3}{12}$. The distance $y$ is measured from the neutral axis (the x-axis). The maximum distance $y_{max}$ is $d/2$.
    The bending stress distribution will be linear. At the centroid (y=0), $\sigma_b = 0$. At the top and bottom surfaces (y = +d/2 and y = -d/2), the bending stress magnitude is $\frac{P e (d/2)}{bd^3/12} = \frac{6Pe}{bd^2}$.

**Combining them:**

*   **On the side of eccentricity (say, +y):** The bending stress is compressive (if the load is eccentric compression). The total stress is $\sigma_{total} = \sigma_d + \sigma_b = \frac{P}{A} + \frac{Pey_{max}}{I}$. This will be the maximum compressive stress.
*   **On the opposite side (say, -y):** The bending stress is tensile (if the load is eccentric compression). The total stress is $\sigma_{total} = \sigma_d - \sigma_b = \frac{P}{A} - \frac{Pey_{max}}{I}$. This will be the minimum compressive stress.

**Remember this:** The stress distribution for eccentric loading is *not uniform*. It varies linearly across the cross-section. This understanding helps directly with **CO2 (Explain behavior)** and **CO5 (Perform stress transformations)** as we are analyzing stress at different points.

### 6. The "Middle Third" Rule (or Middle Quarter Rule etc.)

A very important concept that arises from this analysis is the condition for ensuring that the compressive stress remains compressive throughout the entire cross-section. This is crucial for materials like concrete and cast iron, which have very low tensile strength.

For a rectangular cross-section of width 'b', if the eccentricity 'e' is such that the load falls within the middle third of the width (i.e., $e \le \frac{b}{6}$), then the stress remains compressive everywhere.

Let's see why. The minimum stress is given by:
$\sigma_{min} = \frac{P}{A} - \frac{P e y_{max}}{I}$

For the stress to remain compressive, $\sigma_{min}$ must be less than or equal to zero (i.e., the stress magnitude is less than or equal to zero). We want to find the limit where $\sigma_{min} = 0$.

$\frac{P}{A} = \frac{P e y_{max}}{I}$
$1 = \frac{e y_{max}}{I/A}$

Here, $I/A$ is known as the **section modulus about the centroidal axis divided by the area**, or more commonly, we use the term **radius of gyration squared ($k^2$)** if we were dealing with general shapes, but for stresses, it's easier to work with the section modulus $Z = I/y_{max}$.

So, $1 = \frac{e}{Z/A}$ or $\frac{A}{Z} = \frac{1}{e}$.

Let's use the section modulus $Z$. For a rectangle, $Z = \frac{bd^2}{6}$ (about the axis parallel to b). For eccentricity along the width 'b', $y_{max} = d/2$, so $Z = \frac{bd^2}{6}$ is the section modulus about the neutral axis parallel to 'b'.

$\sigma_{min} = \frac{P}{A} - \frac{P e (d/2)}{I} = \frac{P}{A} - \frac{P e}{I/(d/2)} = \frac{P}{A} - \frac{P e}{Z}$

For $\sigma_{min} \ge 0$ (to remain compressive):
$\frac{P}{A} \ge \frac{P e}{Z}$
$\frac{1}{A} \ge \frac{e}{Z}$
$e \le \frac{Z}{A}$

For a rectangular section of width 'b' and depth 'd', with eccentricity 'e' along 'b':
$A = bd$
$I = \frac{bd^3}{12}$ (about the centroidal axis parallel to b)
$y_{max} = \frac{d}{2}$
$Z = \frac{I}{y_{max}} = \frac{bd^3/12}{d/2} = \frac{bd^2}{6}$

So, $e \le \frac{bd^2/6}{bd} = \frac{d}{6}$.

This means if the eccentricity is within $d/6$ from the centroid along the depth 'd', the stress at the bottom fiber (if eccentricity is at top) will still be compressive.

Now, what if the eccentricity is along the width 'b'?
$A = bd$
$I = \frac{db^3}{12}$ (about the centroidal axis parallel to d)
$y_{max} = \frac{b}{2}$
$Z = \frac{I}{y_{max}} = \frac{db^3/12}{b/2} = \frac{db^2}{6}$

So, $e \le \frac{db^2/6}{bd} = \frac{b}{6}$.

**The "Middle Third" Rule:** For a rectangular cross-section subjected to eccentric axial load, if the eccentricity is within $1/6^{th}$ of the dimension perpendicular to the axis of bending, the stress at the extreme fiber on the opposite side of the eccentricity will still be compressive. This is often stated as: to avoid tensile stresses, the load must fall within the "middle third" of the width if bending is about the centroidal axis parallel to the depth, or within the "middle third" of the depth if bending is about the centroidal axis parallel to the width.

This rule is a crucial takeaway and frequently tested. It directly relates to **CO6 (Analyze structural members)** by providing a criterion for safe design.

### 7. Key Formulas to Remember (Exam Focus)

For a short column with axial load P and eccentricity e:

*   **Direct Stress:** $\sigma_d = \frac{P}{A}$
*   **Bending Moment:** $M = P \times e$
*   **Bending Stress:** $\sigma_b = \frac{M y}{I} = \frac{P e y}{I}$
*   **Total Stress:** $\sigma_{total} = \frac{P}{A} + \frac{P e y}{I}$
*   **Maximum Stress (compressive):** $\sigma_{max} = \frac{P}{A} + \frac{P e y_{max}}{I}$
*   **Minimum Stress (compressive):** $\sigma_{min} = \frac{P}{A} - \frac{P e y_{max}}{I}$

Where $y_{max}$ is the distance from the neutral axis to the extreme fiber, and $I$ is the moment of inertia about the neutral axis.

**Common Pitfalls:**
*   **Sign Convention:** Always be consistent with the sign of P, e, and the stresses.
*   **Correct I and y:** Ensure you use the correct moment of inertia and distance for the axis about which bending is occurring.
*   **Units:** Keep units consistent throughout the calculation.
*   **Maximum/Minimum:** Understand which side of the section will experience maximum stress and which will experience minimum stress.

### 8. Dual Eccentricity

What if the load is eccentric in two directions simultaneously? Say, eccentric by 'ex' about the x-axis and 'ey' about the y-axis. The total moment is the vector sum of moments $M_x = P \times e_y$ and $M_y = P \times e_x$.

The stresses due to these moments will be:
$\sigma_{bx} = \frac{M_y x}{I_y} = \frac{P e_x x}{I_y}$ (Bending about y-axis)
$\sigma_{by} = \frac{M_x y}{I_x} = \frac{P e_y y}{I_x}$ (Bending about x-axis)

Where $I_x$ and $I_y$ are moments of inertia about the respective centroidal axes. The total stress becomes:

$\sigma_{total} = \frac{P}{A} \pm \frac{P e_x x}{I_y} \pm \frac{P e_y y}{I_x}$

The signs depend on the location $(x, y)$ and the direction of eccentricity. Maximum stress will occur at the corner furthest from both eccentricities. This is a more advanced application, but understanding the principle of superposition (adding stresses) is key, linking back to **CO3**.

### 9. Conclusion: Practical Significance

The analysis of short columns with direct and bending stress is fundamental to the design of many structural components. Whether it’s a building column, a machine part, or even the leg of a chair, understanding how eccentric loads affect the stress distribution is vital for ensuring safety and preventing failure. This topic is a direct application of our knowledge of uniaxial stress and basic bending theory, allowing us to **analyze members (CO6)** and **explain their behavior (CO2)** under realistic loading conditions.

Remember, the key is to break down the eccentric load into an axial load and a moment, and then superimpose the direct stress and bending stress. This approach is applicable to many situations in solid mechanics.

---

### Sample Questions and Answers

**Q1. What is direct stress in a column, and what is the condition for it to be uniform across the cross-section?**

**Answer:** Direct stress (or axial stress) is the stress induced in a structural member due to an axial load acting along its longitudinal axis. It is uniform across the cross-section only when the load is applied precisely at the centroid of the cross-section. The formula is $\sigma_d = \frac{P}{A}$, where P is the axial force and A is the cross-sectional area. This relates to **CO1**.

**Q2. Explain why an eccentrically applied load on a column causes bending stress in addition to direct stress.**

**Answer:** An eccentrically applied load can be resolved into an equivalent axial load acting at the centroid and a bending moment about the centroidal axis. The axial load causes direct stress, while the bending moment causes bending stress, which varies linearly across the cross-section. This is a core concept for **CO2**.

**Q3. A short column of rectangular cross-section 100 mm wide and 200 mm deep is subjected to an axial load of 50 kN applied at a distance of 30 mm from the centroid along the width. Calculate the maximum and minimum stresses in the column. Assume the load is compressive.**

**Solution:**
Given:
Width, $b = 100 \, \text{mm}$
Depth, $d = 200 \, \text{mm}$
Axial Load, $P = 50 \, \text{kN} = 50 \times 10^3 \, \text{N}$ (compressive)
Eccentricity, $e = 30 \, \text{mm}$ (along the width)

1.  **Area of cross-section (A):**
    $A = b \times d = 100 \, \text{mm} \times 200 \, \text{mm} = 20000 \, \text{mm}^2$

2.  **Direct Stress ($\sigma_d$):**
    $\sigma_d = \frac{P}{A} = \frac{50 \times 10^3 \, \text{N}}{20000 \, \text{mm}^2} = 2.5 \, \text{N/mm}^2 = 2.5 \, \text{MPa}$ (compressive)

3.  **Bending Moment (M):**
    $M = P \times e = 50 \times 10^3 \, \text{N} \times 30 \, \text{mm} = 1.5 \times 10^6 \, \text{N-mm}$

4.  **Moment of Inertia (I) about the centroidal axis parallel to the width:**
    $I = \frac{bd^3}{12} = \frac{100 \, \text{mm} \times (200 \, \text{mm})^3}{12} = \frac{100 \times 8 \times 10^6}{12} = \frac{800 \times 10^6}{12} \approx 66.67 \times 10^6 \, \text{mm}^4$

5.  **Distance to extreme fiber ($y_{max}$):**
    The bending is about the axis parallel to the width. The distance to the extreme fiber along the depth is $y_{max} = \frac{d}{2} = \frac{200 \, \text{mm}}{2} = 100 \, \text{mm}$.

6.  **Bending Stress ($\sigma_b$):**
    $\sigma_b = \frac{M y_{max}}{I} = \frac{(1.5 \times 10^6 \, \text{N-mm}) \times (100 \, \text{mm})}{66.67 \times 10^6 \, \text{mm}^4} = \frac{150 \times 10^6}{66.67 \times 10^6} \approx 2.25 \, \text{N/mm}^2 = 2.25 \, \text{MPa}$

7.  **Maximum Stress ($\sigma_{max}$):**
    Occurs on the side of eccentricity.
    $\sigma_{max} = \sigma_d + \sigma_b = 2.5 \, \text{MPa} + 2.25 \, \text{MPa} = 4.75 \, \text{MPa}$ (compressive)

8.  **Minimum Stress ($\sigma_{min}$):**
    Occurs on the opposite side of eccentricity.
    $\sigma_{min} = \sigma_d - \sigma_b = 2.5 \, \text{MPa} - 2.25 \, \text{MPa} = 0.25 \, \text{MPa}$ (compressive)

This calculation demonstrates the application of formulas from **CO3** and helps in **analyzing the member (CO6)**.

**Q4. State and explain the "Middle Third Rule" for a rectangular column.**

**Answer:** The "Middle Third Rule" states that for a rectangular column subjected to an axial load applied eccentrically along one of its axes of symmetry, the load must be applied within the middle third of the cross-section dimension perpendicular to that axis to ensure that the stress remains compressive throughout the entire cross-section.

Mathematically, for a rectangular column of width 'b' and depth 'd', if the eccentricity 'e' is along the width, the load must be within $e \le \frac{b}{6}$ from the centroid for the stress to remain compressive at the extreme edge on the opposite side. If $e > \frac{b}{6}$, tensile stresses will develop on the opposite face. This rule is vital for designing members made of brittle materials like concrete and cast iron, directly aiding in **CO6**.

**Q5. A circular column has a diameter of 200 mm. It is subjected to a compressive load of 100 kN applied at an eccentricity of 50 mm.**

**Calculate the maximum and minimum stresses induced in the column.**

**Solution:**
Given:
Diameter, $D = 200 \, \text{mm}$
Radius, $R = 100 \, \text{mm}$
Load, $P = 100 \, \text{kN} = 100 \times 10^3 \, \text{N}$ (compressive)
Eccentricity, $e = 50 \, \text{mm}$

1.  **Area of cross-section (A):**
    $A = \frac{\pi D^2}{4} = \frac{\pi (200 \, \text{mm})^2}{4} = \pi \times 10000 \, \text{mm}^2 = 10000\pi \, \text{mm}^2 \approx 31416 \, \text{mm}^2$

2.  **Direct Stress ($\sigma_d$):**
    $\sigma_d = \frac{P}{A} = \frac{100 \times 10^3 \, \text{N}}{10000\pi \, \text{mm}^2} = \frac{10}{\pi} \, \text{MPa} \approx 3.18 \, \text{MPa}$ (compressive)

3.  **Bending Moment (M):**
    $M = P \times e = 100 \times 10^3 \, \text{N} \times 50 \, \text{mm} = 5 \times 10^6 \, \text{N-mm}$

4.  **Moment of Inertia (I) for a circular section about its diameter:**
    $I = \frac{\pi D^4}{64} = \frac{\pi (200 \, \text{mm})^4}{64} = \frac{\pi \times 16 \times 10^8}{64} = \frac{\pi \times 10^8}{4} = \pi \times 25 \times 10^6 \, \text{mm}^4 \approx 78.54 \times 10^6 \, \text{mm}^4$

5.  **Distance to extreme fiber ($y_{max}$):**
    For a circular section, $y_{max} = R = 100 \, \text{mm}$.

6.  **Bending Stress ($\sigma_b$):**
    $\sigma_b = \frac{M y_{max}}{I} = \frac{(5 \times 10^6 \, \text{N-mm}) \times (100 \, \text{mm})}{\pi \times 25 \times 10^6 \, \text{mm}^4} = \frac{500 \times 10^6}{25\pi \times 10^6} = \frac{20}{\pi} \, \text{MPa} \approx 6.37 \, \text{MPa}$

7.  **Maximum Stress ($\sigma_{max}$):**
    $\sigma_{max} = \sigma_d + \sigma_b = \frac{10}{\pi} \, \text{MPa} + \frac{20}{\pi} \, \text{MPa} = \frac{30}{\pi} \, \text{MPa} \approx 9.55 \, \text{MPa}$ (compressive)

8.  **Minimum Stress ($\sigma_{min}$):**
    $\sigma_{min} = \sigma_d - \sigma_b = \frac{10}{\pi} \, \text{MPa} - \frac{20}{\pi} \, \text{MPa} = -\frac{10}{\pi} \, \text{MPa} \approx -3.18 \, \text{MPa}$

Since $\sigma_{min}$ is negative, it indicates that tensile stress develops on the opposite side. However, the question asks for the "minimum stress," which in this context means the least compressive stress. The value is indeed $\approx -3.18 \, \text{MPa}$. If the material is concrete, this tensile stress would likely lead to failure. This exercise solidifies **CO3** and **CO6**.
