---
title: "Calculation of normal stress in beams, moment of resistance"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Theory of simple bending, assumptions and limitations"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f70"
status: "completed"
scrapedAt: "2026-05-20T18:37:25.525Z"
---
# Mechanics of Solids: Module 3 - Theory of Simple Bending

## Introduction: The Dance of Forces and Deformations in Beams

Alright everyone, welcome back to Mechanics of Solids! Today, we're diving into something really fundamental, something you see everywhere around you: the **Theory of Simple Bending**. Think about bridges, the floor joists in your house, the wings of an airplane – they all rely on beams that bend under load. Understanding *how* they bend, and more importantly, the stresses that develop within them, is crucial for designing safe and efficient structures. This module, and specifically today's topic, focuses on how we quantify these internal forces and the resulting stresses.

Our journey today will primarily focus on calculating the **normal stress** induced in beams due to bending and understanding the concept of the **moment of resistance**. This is directly linked to our course outcomes:

*   **CO1 (Recall):** We'll be recalling fundamental concepts like stress, strain, and moments.
*   **CO2 (Explain):** We will explain how beams respond to transverse loads.
*   **CO3 (Apply):** This is where we'll be applying principles to calculate stresses and understand the internal moment.
*   **CO6 (Analyze):** Ultimately, this knowledge helps us analyze how much load a beam can carry and how to proportion it.

As we explore these ideas, keep in mind the foundational texts like Shah & Junnarkar, Bansal, and Punmia, which lay out these principles clearly. We'll also be drawing parallels with the more advanced treatments in Popov, Gere & Timoshenko, Hibbeler, Ramamrutham & Narayanan, and Rattan, to build a robust understanding.

---

## The Essence of Simple Bending: What is it?

When we talk about "simple bending," we're referring to a specific, idealized scenario. Imagine a beam – a long, slender structural member – subjected to loads that cause it to bend. In simple bending, we make some critical assumptions to simplify the analysis. The primary assumption is that the beam is subjected *only* to a **bending moment**, and any shear forces are either negligible or considered separately. This allows us to focus on the internal stresses that arise purely from this bending action.

Think of it like this: if you hold a ruler at both ends and press down in the middle, it bends. The top surface gets compressed, and the bottom surface gets stretched. That’s bending! Simple bending theory helps us quantify exactly how much compression and tension is happening at every point across the beam's cross-section.

### Assumptions of Simple Bending (The Foundation of Our Analysis)

Before we can calculate anything, we need to agree on some simplifying assumptions. These assumptions, as discussed in our textbooks, are vital for deriving the bending stress formula. They essentially create an idealized model of a real-world beam.

1.  **The beam is initially straight and prismatic:** This means the beam has no initial curvature, and its cross-sectional dimensions (like width and depth) remain constant along its entire length. Think of a brand-new, perfectly rectangular steel bar.
2.  **The material is homogeneous and isotropic:** Homogeneous means the material properties are the same throughout the entire beam. Isotropic means these properties are the same in all directions. So, the steel behaves identically whether you're pulling, pushing, or shearing it along any axis. Real materials are often *anisotropic* (like wood, where grain matters), but for simple bending, we assume this ideal case.
3.  **The material obeys Hooke's Law:** This is a big one! It means the stress is directly proportional to the strain within the elastic limit. So, if you double the load, you roughly double the deformation. This allows us to use linear relationships.
4.  **Plane sections remain plane and perpendicular to the neutral axis after bending:** This is perhaps the most significant assumption. Imagine a thin slice of the beam before bending. This slice is perfectly flat and at a right angle to the beam's length. After bending, this same slice remains flat and perpendicular to the *curved* longitudinal axis of the bent beam. This is what allows us to relate strain to the curvature. Think of the ruler example again: if you look at a cross-section, it stays a rectangle, just tilted.
5.  **The beam is subjected to pure bending or bending due to transverse loads where shear effects are negligible:** As mentioned, we’re primarily looking at the effect of the bending moment. In reality, transverse loads often induce shear forces too, but for simple bending, we often ignore their contribution to the normal stress. This is why it’s called *simple* bending.
6.  **The beam is symmetrical about the plane of bending:** This means the cross-section has at least one axis of symmetry, and the applied loads are in the plane of symmetry. This ensures that bending occurs only in that plane, without any twisting.

**Why so many assumptions?** Because they allow us to derive a clean, usable formula for stress. Real-world beams might deviate from these, and more advanced theories handle those complexities. But for understanding the basics, these are our building blocks.

---

## The Neutral Axis and the Bending Stress Formula

When a beam bends, some parts get shorter (compressed) and some parts get longer (stretched). There must be a layer *somewhere* in between that neither compresses nor stretches. This special layer is called the **neutral axis (NA)**.

*   **Definition:** The neutral axis is an imaginary line in the cross-section of a beam that experiences zero longitudinal stress (neither tension nor compression) when the beam is subjected to bending. It passes through the centroid of the cross-section for homogeneous materials and symmetric cross-sections.

Imagine our bent ruler again. The neutral axis is like the "middle line" of the ruler that doesn't change its length. Layers above it are compressed, and layers below it are stretched (or vice-versa, depending on the direction of the moment).

### Deriving the Stress Formula: A Step-by-Step Thought Process

Let's think about how stress varies across the cross-section. Because plane sections remain plane, the strain at any point is directly proportional to its distance from the neutral axis. Since stress is proportional to strain (Hooke's Law), the stress must also be directly proportional to the distance from the neutral axis.

*   Let $y$ be the distance of a fiber (a thin layer of material) from the neutral axis.
*   Let $R$ be the radius of curvature of the beam after bending.
*   Let $\epsilon$ be the strain in that fiber.
*   Let $\sigma$ be the stress in that fiber.

From our assumption that plane sections remain plane, the strain $\epsilon$ in a fiber at a distance $y$ from the neutral axis is given by:

$\epsilon = \frac{y}{R}$

This is a direct consequence of the geometry of bending. The arc length of the fiber at distance $y$ is $(R+y)\theta$, where $\theta$ is the angle subtended by the arc. The original length was $R\theta$. The change in length is $(R+y)\theta - R\theta = y\theta$. The strain is $\frac{\text{change in length}}{\text{original length}} = \frac{y\theta}{R\theta} = \frac{y}{R}$.

Now, applying Hooke's Law ($\sigma = E\epsilon$, where $E$ is the Young's Modulus of the material):

$\sigma = E \times \frac{y}{R}$

Rearranging this, we get:

$\frac{\sigma}{y} = \frac{E}{R}$

This is a fundamental relationship! It tells us that the ratio of stress to distance from the neutral axis is constant for a given material and curvature. It also implies that the stress is zero at $y=0$ (the neutral axis) and increases linearly with $y$.

### The Universal Bending Stress Formula

Often, we want to relate stress to the applied bending moment ($M$). We can do this by considering the forces acting on a small elemental area $dA$ at a distance $y$ from the neutral axis. The force on this element is $dF = \sigma \, dA$.

The moment of this force about the neutral axis is $dM = y \, dF = y (\sigma \, dA)$.

To find the total bending moment $M$ resisted by the entire cross-section, we integrate this over the entire area $A$:

$M = \int_A y \, dF = \int_A y (\sigma \, dA)$

Now, substitute $\sigma = \frac{E}{R} y$:

$M = \int_A y \left(\frac{E}{R} y\right) dA = \frac{E}{R} \int_A y^2 \, dA$

We know that $\int_A y^2 \, dA$ is the **moment of inertia** of the cross-section about the neutral axis, commonly denoted as $I$. So:

$M = \frac{E}{R} I$

This equation is incredibly important! It links the applied moment $M$ to the material property ($E$) and the cross-section's geometry ($I$) and its curvature ($1/R$).

Now, let's go back to $\frac{\sigma}{y} = \frac{E}{R}$. If we substitute $\frac{E}{R} = \frac{M}{I}$ from our moment equation, we get the classic **bending stress formula**:

$\frac{\sigma}{y} = \frac{M}{I}$

Or, most commonly written as:

$\sigma = \frac{M y}{I}$

This is the heart of our calculation for normal stress in simple bending.

*   $\sigma$: Normal stress (usually in MPa or N/mm²)
*   $M$: Bending moment at the section (usually in N-mm or kNm)
*   $y$: Distance from the neutral axis to the point where stress is calculated (usually in mm or m)
*   $I$: Moment of inertia of the cross-section about the neutral axis (usually in mm⁴ or m⁴)

**Remember this formula!** It's your go-to for calculating bending stress. You'll see it used in countless examples in Bansal and Punmia.

---

## Calculating Normal Stress: Putting the Formula to Work

To actually calculate the stress $\sigma$, we need three things: $M$, $I$, and $y$.

1.  **Bending Moment ($M$):** This is determined by analyzing the external forces and their positions relative to the section of interest. You'll typically draw shear force diagrams (SFD) and bending moment diagrams (BMD) to find the maximum $M$ or the $M$ at any specific point.
2.  **Moment of Inertia ($I$):** This is a geometric property of the cross-section about the neutral axis. Its calculation depends entirely on the shape of the beam's cross-section. For simple shapes like rectangles and circles, the formulas are standard. For composite shapes, you'll use the parallel axis theorem.
3.  **Distance from Neutral Axis ($y$):** This is the vertical distance from the neutral axis to the specific point (fiber) within the cross-section where you want to find the stress. The stress will be maximum at the extreme fibers (the top and bottom surfaces) and zero at the neutral axis.

### Example: Stress in a Rectangular Beam

Let's take a common example. Consider a rectangular beam of width $b$ and depth $d$, subjected to a bending moment $M$.

*   **Finding the Neutral Axis:** For a rectangle, the centroid is at the geometric center. Therefore, the neutral axis passes through the mid-depth of the beam.
*   **Calculating Moment of Inertia ($I$):** The moment of inertia of a rectangle about its centroidal axis parallel to the base is given by $I = \frac{bd^3}{12}$. This is a formula you should have memorized or be able to quickly derive/look up from your textbooks (Shah & Junnarkar often tabulate these).
*   **Determining $y$:** The maximum distance from the neutral axis is to the top or bottom edge. This distance is $y_{max} = d/2$.
*   **Calculating Maximum Stress ($\sigma_{max}$):** Using $\sigma = \frac{M y}{I}$:
    $\sigma_{max} = \frac{M (d/2)}{bd^3/12} = \frac{M \cdot d}{2} \cdot \frac{12}{bd^3} = \frac{6M}{bd^2}$

This $\sigma_{max}$ is the maximum tensile or compressive stress, occurring at the top and bottom surfaces of the beam.

**Relating to Course Outcomes:** This calculation directly addresses **CO3 (Apply)** by applying the bending stress formula. It also relates to **CO6 (Analyze)** as we are determining the stress which is key to assessing the beam's capacity.

### Analogy: The Spring Mattress

Think about a spring mattress. When you lie on it, the springs in the middle hardly get compressed or stretched. But the springs at the top (under your back) are squashed, and the springs at the bottom (touching the base) are also compressed (or stretched, depending on how you look at the reaction forces, but you get the idea of compression). The neutral axis is like that "neutral zone" in the mattress where the springs are relatively undisturbed. The further you go from this zone, the more the springs are deformed, and the greater the stress. This is precisely what the $\sigma = \frac{My}{I}$ formula captures.

---

## Moment of Resistance: The Beam's Inner Strength

So far, we've talked about the stress induced by an *external* bending moment $M$. But what about the internal forces within the beam that resist this external moment? The beam's material is generating internal stresses that are acting to counteract the applied bending.

The **moment of resistance** is the sum of the moments of these internal stresses about the neutral axis. It's essentially the internal bending moment that the beam's cross-section can generate to oppose the external moment.

From our derivation earlier, we found that the external moment $M$ is balanced by the internal resisting moment:

$M = \int_A y (\sigma \, dA)$

where $\sigma = \frac{My}{I}$.

So, the **moment of resistance** $M_R$ is mathematically equal to the internal moment generated by these stresses. Under equilibrium conditions, the internal resisting moment must be equal to the external applied bending moment: $M_R = M$.

We can express the moment of resistance in terms of the applied moment and material properties using the bending stress formula. Rearranging $\frac{\sigma}{y} = \frac{M}{I}$ to solve for $M$:

$M = \sigma \frac{I}{y}$

Since $M_R = M$, we can write:

$M_R = \sigma \frac{I}{y}$

Now, this expression for $M_R$ can be looked at in a few ways, depending on which stress we are considering:

*   **Using maximum stress ($\sigma_{max}$):** The maximum stress occurs at the extreme fiber, where $y = y_{max}$ (the distance from the neutral axis to the extreme fiber). Let $y_{max}$ be the distance to the *most stressed* fiber.
    $M_R = \sigma_{max} \frac{I}{y_{max}}$

    The term $\frac{I}{y_{max}}$ is a geometric property of the cross-section and is known as the **section modulus**, denoted by $Z$.
    $Z = \frac{I}{y_{max}}$

    So, the moment of resistance in terms of maximum stress is:
    $M_R = \sigma_{max} \cdot Z$

This equation is crucial for **design**. If we know the allowable stress for our material ($\sigma_{allowable}$) and the applied bending moment ($M$), we can calculate the required section modulus $Z_{req}$:

$Z_{req} = \frac{M}{\sigma_{allowable}}$

Then, we can choose a beam section whose actual section modulus $Z$ is greater than or equal to $Z_{req}$ to ensure safety. This is a core concept in **CO6 (Analyze)** and **CO3 (Apply)**.

### Section Modulus ($Z$): A Measure of Bending Strength

The section modulus ($Z$) is a vital parameter in bending. It tells us how efficiently a cross-sectional shape can resist bending. A larger section modulus for the same area generally means a stronger beam in bending.

*   For a **rectangular section** of width $b$ and depth $d$:
    $I = \frac{bd^3}{12}$
    $y_{max} = d/2$
    $Z = \frac{I}{y_{max}} = \frac{bd^3/12}{d/2} = \frac{bd^2}{6}$

*   For a **circular section** of radius $r$ (or diameter $D$):
    $I = \frac{\pi r^4}{4} = \frac{\pi D^4}{64}$
    $y_{max} = r = D/2$
    $Z = \frac{I}{y_{max}} = \frac{\pi r^4/4}{r} = \frac{\pi r^3}{4} = \frac{\pi D^3}{32}$

Textbooks like R.K. Bansal and Punmia provide tables or formulas for the section modulus of various standard shapes.

### The "Moment of Resistance" Concept: Everyday Analogy

Imagine you're trying to break a twig by bending it. The twig resists your effort. The harder you bend, the more the twig "pushes back." This "push back" force, when measured as a moment around the breaking point, is the moment of resistance. If you exceed the twig's moment of resistance, it breaks.

Similarly, in a beam, the internal stresses create a moment of resistance. For the beam to remain intact, this internal moment of resistance must be equal to or greater than the external bending moment applied by the loads. The concept of $M_R = \sigma_{allowable} \cdot Z$ is fundamentally about ensuring that the beam's inherent bending strength (captured by $Z$ and $\sigma_{allowable}$) is sufficient to withstand the applied bending stress.

---

## Limitations of Simple Bending Theory

While incredibly useful, simple bending theory has its limitations, which are important to acknowledge for practical engineering. These were touched upon in the assumptions, but let's reiterate them as limitations:

1.  **Shear Deformation:** We assumed plane sections remain perpendicular to the neutral axis. However, shear stresses *do* cause some deformation, causing sections to warp slightly. For beams with deep cross-sections (large $d/b$ ratio) or under significant shear loads, this effect can be noticeable and needs to be accounted for using more advanced theories (like Timoshenko beam theory, discussed in more advanced mechanics courses).
2.  **Stress Concentration:** The formula $\sigma = \frac{My}{I}$ gives the *average* stress distribution based on ideal conditions. In reality, at points of sudden change in cross-section (like holes, notches, or sharp corners), stresses can be much higher than predicted. This is called stress concentration. Gere & Timoshenko's work delves into this significantly.
3.  **Unsymmetrical Bending:** Our derivation assumed symmetry and loads in the plane of symmetry. If the beam's cross-section is not symmetrical, or if the load is not applied in the plane of symmetry, the bending can become more complex, leading to bending in multiple planes and twisting. This requires the concept of "unsymmetrical bending" and analyzing stresses based on principal axes.
4.  **Large Deformations:** The theory assumes small deflections and rotations. For beams that bend significantly, the geometry changes, and the bending moment might be applied to a curved beam, altering the stress distribution.
5.  **Material Behavior:** We assumed linear elastic behavior. If the stress exceeds the proportional limit, Hooke's Law no longer applies, and the stress distribution will deviate from the linear pattern. Fatigue and fracture mechanics also fall outside the scope of simple bending theory.

Understanding these limitations, as highlighted in references like Popov and Hibbeler, allows engineers to know when the simple bending formula is a good approximation and when more complex analysis is needed.

---

## Connecting to Course Outcomes (Summary)

Let's quickly revisit how today's topic directly maps to our course objectives:

*   **CO1 (Recall):** We've recalled definitions of stress, strain, moments, and the concept of the neutral axis.
*   **CO2 (Explain):** We've explained the phenomenon of beam bending and the underlying physical processes leading to stress.
*   **CO3 (Apply):** This is the core! We learned to apply the bending stress formula ($\sigma = \frac{My}{I}$) and the concept of section modulus ($Z$) to calculate stresses and understand internal resisting moments.
*   **CO6 (Analyze):** By understanding the moment of resistance ($M_R = \sigma_{allowable} \cdot Z$), we are equipped to analyze if a beam is safe under a given load or to proportion a beam for a required strength.

This understanding is foundational. Many subsequent topics, like beam deflection, design of beams, and even more complex stress analyses, build directly upon the principles of simple bending.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style:

**Q1. What is the fundamental assumption that allows us to state that stress varies linearly with distance from the neutral axis in simple bending?**

**Answer:** The fundamental assumption is that **plane sections remain plane and perpendicular to the neutral axis after bending.** This ensures that the strain at any point is directly proportional to its distance from the neutral axis ($ \epsilon \propto y $). Since stress is proportional to strain ($ \sigma = E\epsilon $), it follows that stress is also directly proportional to the distance from the neutral axis ($ \sigma \propto y $). This leads to the linear stress distribution across the cross-section. (Relates to CO1, CO2)

**Q2. A rectangular beam of width 100 mm and depth 200 mm is subjected to a bending moment of 50 kNm. Calculate the maximum bending stress in the beam.**

**Solution:**
Given:
Width, $b = 100$ mm
Depth, $d = 200$ mm
Bending Moment, $M = 50$ kNm $= 50 \times 10^6$ Nmm

First, we need to find the moment of inertia ($I$) for the rectangular section:
$I = \frac{bd^3}{12} = \frac{100 \times (200)^3}{12} = \frac{100 \times 8 \times 10^6}{12} = \frac{800 \times 10^6}{12} = 66.67 \times 10^6$ mm$^4$

The neutral axis passes through the centroid, which is at mid-depth. The maximum distance from the neutral axis ($y_{max}$) is half the depth:
$y_{max} = \frac{d}{2} = \frac{200}{2} = 100$ mm

Now, using the bending stress formula $\sigma = \frac{My}{I}$:
$\sigma_{max} = \frac{M y_{max}}{I} = \frac{(50 \times 10^6 \text{ Nmm}) \times (100 \text{ mm})}{66.67 \times 10^6 \text{ mm}^4}$
$\sigma_{max} = \frac{5000 \times 10^6}{66.67 \times 10^6} = \frac{5000}{66.67} \approx 75$ N/mm$^2$ or 75 MPa

Thus, the maximum bending stress is 75 MPa. (Relates to CO3, CO6)

**Q3. Define Section Modulus ($Z$) and explain its significance in beam design.**

**Answer:**
**Section Modulus ($Z$)** is a geometric property of a beam's cross-section that represents its resistance to bending. It is defined as the ratio of the moment of inertia ($I$) of the cross-section about the neutral axis to the distance from the neutral axis to the extreme fiber ($y_{max}$).
Mathematically, $Z = \frac{I}{y_{max}}$.

**Significance in Beam Design:**
The moment of resistance ($M_R$) that a beam can offer is directly proportional to its section modulus and the allowable bending stress ($\sigma_{allowable}$): $M_R = \sigma_{allowable} \cdot Z$.
In design, we first determine the maximum bending moment ($M$) expected on the beam from the applied loads. Then, using the material's allowable stress, we calculate the minimum required section modulus for the beam: $Z_{req} = \frac{M}{\sigma_{allowable}}$. By selecting a beam section with a section modulus greater than or equal to $Z_{req}$, we ensure that the beam can safely withstand the applied bending moment without exceeding the material's strength. A larger section modulus indicates a more efficient cross-section for resisting bending. (Relates to CO3, CO4, CO6)

**Q4. Why is the stress distribution in simple bending considered linear? What are the limitations of this linear distribution in real-world scenarios?**

**Answer:**
The stress distribution in simple bending is considered **linear** because, under the assumptions of simple bending:
1.  **Plane sections remain plane and perpendicular to the neutral axis.** This means strain ($\epsilon$) is directly proportional to the distance ($y$) from the neutral axis: $\epsilon = y/R$.
2.  **The material obeys Hooke's Law.** Stress ($\sigma$) is directly proportional to strain: $\sigma = E\epsilon$.
Combining these, we get $\sigma = E(y/R) = (E/R)y$. Since $E$ and $R$ are constant for a given beam and loading, $\sigma$ is directly proportional to $y$, resulting in a linear distribution.

**Limitations of this linear distribution:**
*   **Shear Deformation:** Shear stresses exist in beams subjected to transverse loads, causing some warping of sections. This means sections might not remain perfectly perpendicular to the neutral axis, slightly altering the linear stress distribution.
*   **Stress Concentrations:** At geometric discontinuities (holes, notches, fillets), the actual stress can be significantly higher than predicted by the linear formula due to localized stress buildup.
*   **Non-uniform Materials or Cross-sections:** If the material is not homogeneous or isotropic, or if the cross-section is not symmetric and loads are not applied in the plane of symmetry (unsymmetrical bending), the stress distribution will not be purely linear and might involve twisting.
*   **Beyond Elastic Limit:** If the applied loads cause stresses to exceed the material's yield strength, the material deforms plastically, and the stress distribution becomes non-linear. (Relates to CO2, CO3, CO6)
