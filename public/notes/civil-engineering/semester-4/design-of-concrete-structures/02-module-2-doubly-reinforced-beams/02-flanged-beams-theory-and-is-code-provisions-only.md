---
title: "Flanged Beams - Theory and IS Code provisions only"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 2: Doubly Reinforced Beams "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c4"
status: "completed"
scrapedAt: "2026-05-20T18:43:44.909Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 2: Doubly Reinforced Beams

## Topic: Flanged Beams - Theory and IS Code Provisions

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the structural behavior of flanged beams (T-beams and L-beams).
*   Identify the various components of a flanged beam and their contributions to load-carrying capacity.
*   Explain the concept of the effective flange width and its calculation according to IS 456:2000.
*   Apply the IS code provisions for the analysis and design of flanged beams.
*   Determine the moment of resistance of flanged beams in both singly and doubly reinforced conditions.

---

### 1. Introduction to Flanged Beams

Flanged beams, commonly known as T-beams and L-beams, are widely used in concrete structures, especially in floor slabs integrated with beams. They offer significant advantages in terms of structural efficiency and aesthetics.

*   **T-Beam:** Consists of a rectangular web and a horizontal flange. The flange acts as a compression member, and the web resists shear and bending.
    *   **Common Applications:** Ribbed slabs, monolithic floor systems, bridge decks.
*   **L-Beam:** Similar to a T-beam but has only one flange.
    *   **Common Applications:** Floor slabs at the edge of a structure, cantilever slabs.

**Key Advantage:** The flange effectively increases the cross-sectional area in the compression zone, leading to a higher moment of resistance and greater stiffness compared to a purely rectangular beam of similar overall depth.

---

### 2. Structural Behavior of Flanged Beams

The behavior of a flanged beam under bending is significantly influenced by the distribution of stress within the flange.

*   **Assumptions (Similar to Rectangular Beams):**
    *   Plane sections remain plane after bending.
    *   Tensile strength of concrete is ignored.
    *   Stress-strain relationship for concrete and steel is as specified in IS 456:2000.

*   **Stress Distribution:**
    *   **Compression Zone:** Primarily occurs in the flange, with some contribution from the web if the neutral axis falls within the web.
    *   **Tensile Zone:** Resisted by the tension steel in the web.

*   **Neutral Axis Location:**
    *   The location of the neutral axis (NA) is crucial for determining the stress distribution and calculating the moment of resistance.
    *   The NA can fall within the flange or within the web.
        *   **NA within the flange:** The entire flange is in compression, and the stress block is rectangular or parabolic.
        *   **NA within the web:** The flange is in compression, and the part of the web above the NA is also in compression. The stress block is more complex.

---

### 3. Effective Flange Width: IS Code Provisions

The IS code specifies provisions for determining the **effective flange width** to simplify the analysis of flanged beams. This effective width is assumed to carry the entire compressive stress in the flange.

**IS 456:2000 Clause 23.1.2:** Defines the effective flange width ($b_{fe}$) for T-beams and L-beams.

*   **For T-beams:**
    *   $b_{fe} = b_w + \frac{b_s}{3}$ for intermediate beams.
    *   $b_{fe} = b_w + \frac{b_s}{6}$ for end beams.

    Where:
    *   $b_{fe}$ = Effective flange width.
    *   $b_w$ = Breadth of the web.
    *   $b_s$ = Span of the beam.

    **However, the effective flange width shall also satisfy the following conditions (whichever is smaller):**

    *   $b_{fe} \le b_w + 4 \times$ (thickness of the flange)  (for T-beams)
    *   $b_{fe} \le b_w + \frac{3}{2} \times$ (thickness of the flange) (for L-beams)
    *   $b_{fe} \le$ (effective span) / (spacing of ribs + 3)  (for T-beams in ribbed slab construction)
    *   $b_{fe} \le$ (effective span) / (spacing of ribs + 1.5) (for L-beams in ribbed slab construction)

*   **For L-beams:**
    *   $b_{fe} = b_w + \frac{b_s}{6}$ (typically for the flange on one side)

    **Important Note:** The IS 456:2000 often refers to the spacing of ribs in ribbed slab construction. For a monolithic floor system with beams and slabs, the "spacing of ribs" can be interpreted as the distance between the centerlines of adjacent beams (or center to edge for edge beams).

**Why these formulas?**
These formulas are empirical and aim to account for the distribution of bending stress in the flange, which is highest at the web and reduces away from it. The division by 3 or 6 (for T-beams) and 6 (for L-beams) accounts for the fact that the stress is not uniform across the entire slab width. The additional constraints ensure that the effective width does not exceed the actual physical dimensions and also consider the influence of adjacent beams in ribbed construction.

**Example Calculation of Effective Flange Width:**

Consider a T-beam with the following dimensions:
*   Web width ($b_w$) = 300 mm
*   Flange thickness ($D_f$) = 120 mm
*   Span ($L$) = 6 m (6000 mm)
*   It is an intermediate beam.
*   Assume it's a standalone T-beam, not in ribbed slab construction for simplicity in this example (so the spacing of ribs criteria is not directly applied here, but the principle is to limit to physical dimensions).

**Calculation:**

1.  **Intermediate T-beam formula:**
    $b_{fe} = b_w + \frac{b_s}{3} = 300 + \frac{6000}{3} = 300 + 2000 = 2300 \text{ mm}$

2.  **Constraint 1:**
    $b_{fe} \le b_w + 4 \times D_f = 300 + 4 \times 120 = 300 + 480 = 780 \text{ mm}$

3.  **Constraint 2 (Actual flange width):** Let's assume the total flange width is 1500 mm.
    $b_{fe} \le 1500 \text{ mm}$

Comparing the values: 2300 mm, 780 mm, 1500 mm. The smallest value governs.
Therefore, the effective flange width ($b_{fe}$) = **780 mm**.

---

### 4. Analysis of Flanged Beams

The analysis of flanged beams involves determining the neutral axis location and then calculating the moment of resistance. This is typically done by considering the stress block.

**Two Cases based on Neutral Axis Location:**

**Case 1: Neutral Axis lies within the flange.**

*   **Condition:** $x_u \le D_f$, where $x_u$ is the depth of the neutral axis.
*   **Stress Block:** The compressive stress block is assumed to be rectangular up to a depth of $0.446x_u$ and parabolic from $0.446x_u$ to $x_u$. For simplification in some analyses, or when $x_u$ is small relative to $D_f$, the entire compression block can be approximated as rectangular. However, IS 456:2000 uses the limiting depth of neutral axis.
*   **Forces:**
    *   **Compression Force ($C$):**  $C = 0.36 f_{ck} b_{fe} x_u$ (using the equivalent rectangular stress block for simplification, which is often used in IS code design).
    *   **Tensile Force ($T$):** $T = 0.87 f_y A_{st}$, where $A_{st}$ is the area of tension steel.
*   **Moment of Resistance ($M_R$):**
    $M_R = C \times (\text{lever arm})$
    $M_R = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u)$  (where $d$ is the effective depth)

**Case 2: Neutral Axis lies within the web.**

*   **Condition:** $x_u > D_f$.
*   **Stress Block:**
    *   **Flange Compression:** The entire flange is in compression. The compression force in the flange is $C_{flange} = 0.36 f_{ck} b_{fe} D_f$.
    *   **Web Compression:** The portion of the web above the neutral axis is also in compression. The compression force in the web is $C_{web} = 0.36 f_{ck} b_w (x_u - D_f)$.
    *   **Total Compression Force ($C$):** $C = C_{flange} + C_{web} = 0.36 f_{ck} b_{fe} D_f + 0.36 f_{ck} b_w (x_u - D_f)$.
    *   **Tensile Force ($T$):** $T = 0.87 f_y A_{st}$.
*   **Moment of Resistance ($M_R$):** This is calculated by taking moments of the forces about the tension steel.
    $M_R = (C_{flange} \times \text{lever arm for flange}) + (C_{web} \times \text{lever arm for web})$
    $M_R = (0.36 f_{ck} b_{fe} D_f) \times (d - 0.5 D_f) + (0.36 f_{ck} b_w (x_u - D_f)) \times (d - 0.42 x_u)$

**Determining $x_u$ for Design:**

In design, we usually determine the required steel area based on the applied moment. The limiting depth of the neutral axis ($x_{u,max}$) is governed by the IS code for balanced or under-reinforced sections.

*   For Fe 415 steel: $x_{u,max} = 0.48d$
*   For Fe 250 steel: $x_{u,max} = 0.53d$
*   For Fe 500 steel: $x_{u,max} = 0.46d$

The actual neutral axis depth ($x_u$) is determined by equating the total compression to the total tension, considering the stress block.

**IS Code Approach Simplification:**

IS 456:2000 provides a simplified approach for calculating the moment of resistance, especially for T-beams where the neutral axis falls within the flange.

**Clause 23.1.1:** For T-beams and L-beams, the resistance to bending moment may be assumed to occur partly in the flange and partly in the web.

**Design for Flanged Beams:**

The design process involves assuming the NA location and calculating the required steel.

*   **If the NA is assumed to be in the flange ($x_u \le D_f$):**
    1.  Calculate $M_u = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u)$.
    2.  Equate $M_u$ to the design moment $M_{u,require}$.
    3.  Solve for $x_u$.
    4.  Check if $x_u \le D_f$. If yes, the assumption is valid.
    5.  Calculate $A_{st} = \frac{M_{u,require}}{0.87 f_y (\text{lever arm})}$. Lever arm is $(d - 0.42 x_u)$.

*   **If the NA is likely to be in the web ($x_u > D_f$):**
    1.  **Step 1: Consider the flange contribution:** Calculate the moment of resistance due to the flange compression block.
        *   The maximum compression in the flange occurs up to the depth $D_f$.
        *   The compression force in the flange is $C_{flange} = 0.36 f_{ck} b_{fe} D_f$.
        *   The moment of resistance from the flange is $M_{flange} = C_{flange} (d - 0.5 D_f) = 0.36 f_{ck} b_{fe} D_f (d - 0.5 D_f)$.
    2.  **Step 2: Check if the flange contribution is sufficient:**
        *   If $M_{flange} \ge M_{u,require}$, then the NA lies within the flange, and we revert to Case 1.
        *   If $M_{flange} < M_{u,require}$, the NA lies within the web. The remaining moment to be resisted by the web and tension steel is $M_{web\_remaining} = M_{u,require} - M_{flange}$.
    3.  **Step 3: Design the web for the remaining moment:**
        *   The web acts like a rectangular beam with width $b_w$ and effective depth $d$.
        *   The compression force in the web is $C_{web} = 0.87 f_y A_{st}$. (This is a common simplification where we assume steel carries all tension).
        *   The lever arm for this section is $(d - 0.42 x_u)$.
        *   $M_{web\_remaining} = C_{web} (d - 0.42 x_u) = (0.87 f_y A_{st}) (d - 0.42 x_u)$.
        *   We need to determine the depth of the neutral axis ($x_u$) for the web portion. The total compression from the web portion is $C_{web} = 0.36 f_{ck} b_w (x_u - D_f)$.
        *   So, $M_{web\_remaining} = [0.36 f_{ck} b_w (x_u - D_f)] \times (d - 0.42 x_u)$.
        *   From $M_{web\_remaining}$, we can solve for $x_u$.
        *   Then calculate the tension steel required for the web portion, $A_{st\_web} = \frac{M_{web\_remaining}}{0.87 f_y (d - 0.42 x_u)}$.
        *   The total tension steel required is $A_{st} = A_{st\_flange} + A_{st\_web}$, where $A_{st\_flange}$ is the steel required to balance the flange compression, if any, and is usually zero if the NA is in the web.

**Simplified Design Procedure (IS Code Approach):**

A common IS code approach for T-beams where the NA is expected to be in the web:

1.  Calculate the effective flange width ($b_{fe}$).
2.  Calculate the moment of resistance due to the flange acting as a rectangular beam of width $b_{fe}$ and depth $D_f$. This is $M_{flange} = 0.87 f_y A_{st\_flange} (d - 0.42 D_f)$.  (This is not correct. The IS code approach is different).

**Revised IS Code Approach for T-beams (Simplified for design):**

*   **Step 1:** Calculate the effective flange width ($b_{fe}$).
*   **Step 2:** Calculate the moment of resistance provided by the flange, assuming the neutral axis is at the bottom of the flange ($D_f$).
    *   This contribution is taken by assuming the effective flange width $b_{fe}$ and depth $D_f$ resisting a portion of the moment.
    *   The total compression force in the flange is $C_f = 0.36 f_{ck} b_{fe} D_f$.
    *   The moment of resistance contributed by the flange is $M_{flange} = C_f (d - 0.5 D_f) = 0.36 f_{ck} b_{fe} D_f (d - 0.5 D_f)$.
*   **Step 3:** Compare $M_{flange}$ with the design moment $M_{u,require}$.
    *   **If $M_{flange} \ge M_{u,require}$:** The neutral axis lies within the flange ($x_u \le D_f$). The beam can be designed as a rectangular beam with width $b_{fe}$ and effective depth $d$.
        *   $M_u = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u) = M_{u,require}$.
        *   Calculate $x_u$ from this equation. Check if $x_u \le D_f$.
        *   Calculate $A_{st} = \frac{M_{u,require}}{0.87 f_y (d - 0.42 x_u)}$.
    *   **If $M_{flange} < M_{u,require}$:** The neutral axis lies within the web ($x_u > D_f$). The beam is designed for the remaining moment in the web.
        *   The remaining moment to be resisted by the web is $M_{web\_remaining} = M_{u,require} - M_{flange}$.
        *   This remaining moment is resisted by a rectangular section of width $b_w$ and effective depth $d$.
        *   $M_{web\_remaining} = 0.87 f_y A_{st} (d - 0.42 x_u)$.  (Here, $A_{st}$ is the steel required for the web portion).
        *   We also know that the compression in the web is $C_{web} = 0.36 f_{ck} b_w (x_u - D_f)$.
        *   For equilibrium, $C_{web} = 0.87 f_y A_{st}$.
        *   Substitute $A_{st}$ in the moment equation: $M_{web\_remaining} = 0.87 f_y \left(\frac{M_{web\_remaining}}{0.87 f_y (d - 0.42 x_u)}\right) (d - 0.42 x_u)$. This is circular.
        *   **Correct Approach:** Use $M_{web\_remaining} = 0.36 f_{ck} b_w (x_u - D_f) (d - 0.42 x_u)$. Solve this quadratic equation for $x_u$.
        *   Once $x_u$ is found, calculate the steel for the web: $A_{st\_web} = \frac{M_{web\_remaining}}{0.87 f_y (d - 0.42 x_u)}$.
        *   The total tension steel required is $A_{st} = A_{st\_web}$. (Assuming no additional steel is needed for the flange part if the NA is in the web).

**Doubly Reinforced Flanged Beams:**

When the moment of resistance provided by singly reinforced flanged beams (considering both flange and web contributions) is insufficient, compression steel is introduced in the flange.

*   **Analysis:**
    1.  Calculate the maximum moment of resistance of the singly reinforced flanged beam ($M_{u,lim}$), where the NA is at the limiting depth ($x_{u,max}$).
    2.  If $M_{u,require} > M_{u,lim}$, then the beam needs to be doubly reinforced.
    3.  The moment to be resisted by the compression steel and additional tension steel is $M_{u2} = M_{u,require} - M_{u,lim}$.
    4.  The concrete in the compression zone is assumed to be stressed to $0.36 f_{ck}$ up to the limiting depth ($x_{u,max}$) or $D_f$ (whichever is less).
    5.  Calculate the compression force $C_1$ and tension force $T_1$ for the singly reinforced condition.
    6.  Calculate the moment of resistance $M_1 = C_1 \times (\text{lever arm})$.
    7.  The additional moment $M_{u2}$ is resisted by the compression steel ($A_{sc}$) and additional tension steel ($A_{st2}$).
    8.  The effective depth for $M_{u2}$ calculation is usually taken as $(d - d_{sc})$, where $d_{sc}$ is the depth of compression steel.
    9.  $M_{u2} = 0.87 f_{sc} A_{sc} (d - d_{sc}) = 0.87 f_y A_{st2} (d - d_{sc})$.  ($f_{sc}$ is the stress in compression steel, which needs to be calculated based on the strain at the level of compression steel).

*   **Design:**
    1.  Determine $M_{u,lim}$ for the flanged beam section (considering flange and web contributions).
    2.  If $M_{u,require} > M_{u,lim}$, calculate $M_{u2} = M_{u,require} - M_{u,lim}$.
    3.  Calculate the area of compression steel ($A_{sc}$) required to resist $M_{u2}$.
        *   Determine the stress in compression steel ($f_{sc}$) based on the strain at its location and the stress-strain curve for steel.
        *   $A_{sc} = \frac{M_{u2}}{0.87 f_{sc} (d - d_{sc})}$. (This is an approximation; a more accurate method involves calculating the stress block).
    4.  Calculate the total tension steel required: $A_{st} = A_{st\_singly} + A_{st2}$.
        *   $A_{st2} = \frac{M_{u2}}{0.87 f_y (d - d_{sc})}$.

**IS Code Provisions for Doubly Reinforced Flanged Beams:**

*   **Clause 23.1.1:** Mentions that T-beams and L-beams may be doubly reinforced.
*   **Clause 23.2:** Deals with stresses in concrete and steel, including the stress-strain curve for steel.
*   **Clause 23.3:** Deals with the limiting deflection.
*   **Clause 26.5.1 (f):** Minimum tension reinforcement.
*   **Clause 26.5.1 (g):** Maximum tension reinforcement.
*   **Clause 26.5.4:** Arrangement of reinforcement, including spacing and cover.

**Important Consideration for Compression Steel in Flanges:**
Compression steel is usually placed within the flange. Its depth ($d_{sc}$) is typically the distance from the extreme compression fiber to the centroid of the compression steel.

---

### 5. Design Example: T-Beam

**Problem:** Design a T-beam for the following data:
*   Factored Bending Moment ($M_u$) = 150 kNm
*   Effective span ($L$) = 7 m
*   Web width ($b_w$) = 300 mm
*   Flange thickness ($D_f$) = 120 mm
*   Effective depth ($d$) = 450 mm
*   Material: M25 concrete, Fe415 steel

**Solution:**

1.  **Calculate Effective Flange Width ($b_{fe}$):**
    *   $b_w = 300$ mm
    *   $D_f = 120$ mm
    *   Span ($L$) = 7000 mm
    *   Intermediate beam.

    *   Formula 1: $b_{fe} = b_w + \frac{L}{3} = 300 + \frac{7000}{3} = 300 + 2333.33 = 2633.33 \text{ mm}$
    *   Constraint 1: $b_{fe} \le b_w + 4 D_f = 300 + 4 \times 120 = 300 + 480 = 780 \text{ mm}$
    *   Constraint 2 (Actual flange width): Let's assume the total flange width is 1500 mm (a reasonable assumption for monolithic construction). $b_{fe} \le 1500 \text{ mm}$.

    *   The smallest value governs: $b_{fe} = 780 \text{ mm}$.

2.  **Check for Singly Reinforced or Doubly Reinforced:**
    *   Calculate the moment of resistance of the T-beam as a singly reinforced beam with NA within the flange, assuming NA at the bottom of the flange ($x_u = D_f = 120$ mm).
    *   Check if $x_u \le x_{u,max}$ for singly reinforced. $x_{u,max}$ for Fe415 is $0.48d = 0.48 \times 450 = 216$ mm.
    *   Since $D_f = 120$ mm, and $120 < 216$, it is possible that the NA is within the flange.

    *   **Assume NA is in the flange:**
        *   We need to find $x_u$ such that $M_u = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u) = 150 \times 10^6$ Nmm.
        *   $150 \times 10^6 = 0.36 \times 25 \times 780 \times x_u (450 - 0.42 x_u)$
        *   $150 \times 10^6 = 6.696 \times 10^6 x_u (450 - 0.42 x_u)$
        *   $22.39 \approx x_u (450 - 0.42 x_u)$
        *   $22.39 \approx 450 x_u - 0.42 x_u^2$
        *   $0.42 x_u^2 - 450 x_u + 22.39 = 0$

        Solving this quadratic equation for $x_u$:
        $x_u = \frac{-(-450) \pm \sqrt{(-450)^2 - 4(0.42)(22.39)}}{2(0.42)}$
        $x_u = \frac{450 \pm \sqrt{202500 - 37.62}}{0.84}$
        $x_u = \frac{450 \pm 452.77}{0.84}$

        Taking the positive root (for a realistic solution):
        $x_u = \frac{450 + 452.77}{0.84} \approx \frac{902.77}{0.84} \approx 1074.7$ mm.
        This value of $x_u$ is very large and clearly exceeds $D_f$. This means our initial assumption that the NA is in the flange based on $D_f < x_{u,max}$ was insufficient. We need to check the moment of resistance provided by the flange alone.

    *   **Alternative check: Moment of resistance provided by the flange:**
        *   Assume NA at the bottom of the flange ($x_u = D_f = 120$ mm).
        *   Calculate $M_{u,flange\_max} = 0.36 f_{ck} b_{fe} D_f (d - 0.42 D_f)$
        *   $M_{u,flange\_max} = 0.36 \times 25 \times 780 \times 120 (450 - 0.42 \times 120)$
        *   $M_{u,flange\_max} = 6.696 \times 10^6 (450 - 50.4)$
        *   $M_{u,flange\_max} = 6.696 \times 10^6 \times 399.6$
        *   $M_{u,flange\_max} = 2675.72 \times 10^6 \text{ Nmm} = 267.57 \text{ kNm}$

        Since $M_{flange\_max} (267.57 \text{ kNm}) > M_u (150 \text{ kNm})$, the neutral axis lies within the flange.
        So, we can design it as a singly reinforced rectangular beam with effective width $b_{fe}$ and effective depth $d$.

3.  **Calculate Tension Steel ($A_{st}$):**
    *   We need to find $x_u$ for the given $M_u$.
    *   $M_u = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u)$
    *   $150 \times 10^6 = 0.36 \times 25 \times 780 \times x_u (450 - 0.42 x_u)$
    *   $150 \times 10^6 = 6.696 \times 10^6 x_u (450 - 0.42 x_u)$
    *   $22.39 = x_u (450 - 0.42 x_u)$
    *   $0.42 x_u^2 - 450 x_u + 22.39 = 0$
    *   Solving for $x_u$: $x_u \approx 49.93$ mm (using the smaller root, as the larger root is unrealistic).

    *   Check: $x_u = 49.93$ mm $< D_f = 120$ mm. The NA is indeed within the flange.

    *   Now calculate $A_{st}$:
        *   Lever arm = $(d - 0.42 x_u) = (450 - 0.42 \times 49.93) = (450 - 20.97) = 429.03 \text{ mm}$
        *   $A_{st} = \frac{M_u}{0.87 f_y \times (\text{lever arm})}$
        *   $A_{st} = \frac{150 \times 10^6}{0.87 \times 415 \times 429.03}$
        *   $A_{st} = \frac{150 \times 10^6}{154410.55}$
        *   $A_{st} = 971.45 \text{ mm}^2$

4.  **Check Minimum and Maximum Reinforcement:**
    *   Minimum $A_{st}$ (Clause 26.5.1.1): $A_{st,min} = \frac{0.85 b_w d}{f_y} = \frac{0.85 \times 300 \times 450}{415} = 275.3 \text{ mm}^2$.
    *   Calculated $A_{st} = 971.45 \text{ mm}^2 > A_{st,min}$. So, minimum steel is satisfied.
    *   Maximum $A_{st}$ is usually limited by the cross-section and steel percentage, typically around $0.04 b D$ for rectangular beams, but for flanged beams, it needs careful consideration. For practical purposes, ensure adequate cover and spacing. A common check is around 4% of the web area for simplicity, but for a T-beam, this is complex. Let's assume it's not a limiting factor here.

5.  **Steel Arrangement:**
    *   Provide 971.45 mm$^2$ of tension steel.
    *   Using 20 mm diameter bars: Area of one bar = $\pi/4 \times 20^2 = 314.16 \text{ mm}^2$.
    *   Number of bars = $971.45 / 314.16 \approx 3.1$ bars. So, use 4 bars of 20 mm diameter.
    *   Total area = $4 \times 314.16 = 1256.64 \text{ mm}^2$. This is more than required, which is acceptable.
    *   Provide 4 Nos. 20 mm $\phi$ tension bars.

6.  **Shear Reinforcement:** (Not asked for in this problem but would be designed based on shear force and IS code provisions).

**Final Design:**
Tension reinforcement: 4 Nos. 20 mm $\phi$ bars.

---

### 6. Key Points to Remember

*   **Effective Flange Width:** Always calculate the effective flange width ($b_{fe}$) as per IS 456:2000 provisions, considering all constraints.
*   **NA Location:** The most critical step is to determine whether the neutral axis lies within the flange or the web.
*   **Moment of Resistance Calculation:** Use the correct formulas for moment of resistance based on the NA location.
*   **Flange Moment Capacity:** If the moment of resistance of the flange alone ($M_{flange\_max}$) is greater than the applied moment, the beam can be designed as a singly reinforced rectangular beam with effective width $b_{fe}$.
*   **Doubly Reinforced:** Introduce compression steel only when the moment of resistance of the singly reinforced flanged beam is insufficient.
*   **Effective Depth in Doubly Reinforced:** When compression steel is used, the lever arm calculation involves the depth to compression steel.
*   **IS Code is Paramount:** Always refer to the specific clauses of IS 456:2000 for accurate calculations and provisions.

---

### 7. Practice Questions

**Question 1:**
A T-beam has a web width of 250 mm and a flange thickness of 100 mm. The effective span is 8 m. The beam is an intermediate beam in a ribbed slab construction where the spacing of ribs is 2 m. Calculate the effective flange width ($b_{fe}$) as per IS 456:2000.

**Answer 1:**
*   $b_w = 250$ mm, $D_f = 100$ mm, $L = 8000$ mm, Spacing of ribs = 2000 mm. Intermediate beam.
*   Formula 1: $b_{fe} = b_w + \frac{L}{3} = 250 + \frac{8000}{3} = 250 + 2666.67 = 2916.67 \text{ mm}$
*   Constraint 1: $b_{fe} \le b_w + 4 D_f = 250 + 4 \times 100 = 250 + 400 = 650 \text{ mm}$
*   Constraint 2 (Rib spacing): $b_{fe} \le \frac{L}{\text{spacing of ribs} / 1000 + 3} = \frac{8000}{2 + 3} = \frac{8000}{5} = 1600 \text{ mm}$
*   The smallest value governs: $b_{fe} = 650 \text{ mm}$.

**Question 2:**
A T-beam section has $b_{fe} = 1200$ mm, $D_f = 150$ mm, $b_w = 300$ mm, $d = 500$ mm. M20 concrete and Fe415 steel are used. Determine the moment of resistance of the beam if the neutral axis is at a depth of 100 mm from the top. Is this a balanced, under-reinforced, or over-reinforced section if the limiting depth of neutral axis is 240 mm?

**Answer 2:**
*   $b_{fe} = 1200$ mm, $D_f = 150$ mm, $b_w = 300$ mm, $d = 500$ mm, $x_u = 100$ mm.
*   Since $x_u = 100 \text{ mm} < D_f = 150 \text{ mm}$, the neutral axis is within the flange.
*   Moment of Resistance ($M_u$) = $0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u)$
*   $M_u = 0.36 \times 20 \times 1200 \times 100 (500 - 0.42 \times 100)$
*   $M_u = 8640000 (500 - 42)$
*   $M_u = 8640000 \times 458$
*   $M_u = 3957.12 \times 10^6 \text{ Nmm} = 3957.12 \text{ kNm}$.

*   Limiting depth of neutral axis ($x_{u,max}$) for Fe415 is $0.48d = 0.48 \times 500 = 240$ mm.
*   The actual neutral axis depth $x_u = 100$ mm.
*   Since $x_u < x_{u,max}$ (100 mm < 240 mm), the section is **under-reinforced**.

**Question 3:**
For a T-beam section with $b_{fe} = 1000$ mm, $D_f = 110$ mm, $b_w = 300$ mm, $d = 450$ mm, M25, Fe415. If the applied factored moment is 200 kNm, determine the required tension steel $A_{st}$.

**Answer 3:**
*   $b_{fe} = 1000$ mm, $D_f = 110$ mm, $b_w = 300$ mm, $d = 450$ mm, $M_u = 200 \text{ kNm} = 200 \times 10^6 \text{ Nmm}$. $f_{ck} = 25$ N/mm$^2$, $f_y = 415$ N/mm$^2$.
*   Calculate $M_{flange\_max}$:
    *   $M_{flange\_max} = 0.36 f_{ck} b_{fe} D_f (d - 0.42 D_f)$
    *   $M_{flange\_max} = 0.36 \times 25 \times 1000 \times 110 (450 - 0.42 \times 110)$
    *   $M_{flange\_max} = 9900000 (450 - 46.2)$
    *   $M_{flange\_max} = 9900000 \times 403.8$
    *   $M_{flange\_max} = 3997.62 \times 10^6 \text{ Nmm} = 3997.62 \text{ kNm}$.
*   Since $M_{flange\_max} (3997.62 \text{ kNm}) > M_u (200 \text{ kNm})$, the NA is within the flange.
*   Design as a singly reinforced beam with effective width $b_{fe}$.
*   $M_u = 0.36 f_{ck} b_{fe} x_u (d - 0.42 x_u)$
*   $200 \times 10^6 = 0.36 \times 25 \times 1000 \times x_u (450 - 0.42 x_u)$
*   $200 \times 10^6 = 9000000 x_u (450 - 0.42 x_u)$
*   $22.22 \approx x_u (450 - 0.42 x_u)$
*   $0.42 x_u^2 - 450 x_u + 22.22 = 0$
*   Solving for $x_u$: $x_u \approx 49.38$ mm.
*   Check: $x_u = 49.38 \text{ mm} < D_f = 110 \text{ mm}$. The NA is within the flange.
*   Lever arm = $(d - 0.42 x_u) = (450 - 0.42 \times 49.38) = (450 - 20.74) = 429.26 \text{ mm}$
*   $A_{st} = \frac{M_u}{0.87 f_y \times (\text{lever arm})}$
*   $A_{st} = \frac{200 \times 10^6}{0.87 \times 415 \times 429.26}$
*   $A_{st} = \frac{200 \times 10^6}{154517.81}$
*   $A_{st} = 1294.33 \text{ mm}^2$.

---
