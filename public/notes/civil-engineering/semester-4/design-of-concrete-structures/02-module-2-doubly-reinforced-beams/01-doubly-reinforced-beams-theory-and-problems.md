---
title: "Doubly Reinforced Beams - Theory and Problems"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 2: Doubly Reinforced Beams "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c3"
status: "completed"
scrapedAt: "2026-05-20T18:43:44.206Z"
---
# DESIGN OF CONCRETE STRUCTURES - MODULE 2: DOUBLY REINFORCED BEAMS

## TOPIC: DOUBLY REINFORCED BEAMS - THEORY AND PROBLEMS

---

### LEARNING OUTCOMES

Upon successful completion of this topic, you will be able to:

*   **Understand the necessity and applicability of doubly reinforced beams.**
*   **Identify and explain the behavior of doubly reinforced beams under bending.**
*   **Determine the stresses in concrete and steel for a given doubly reinforced beam section.**
*   **Calculate the moment of resistance of a doubly reinforced beam section.**
*   **Design doubly reinforced beams for a given bending moment.**
*   **Solve practical problems related to doubly reinforced beams.**

---

### 1. NECESSITY AND APPLICABILITY OF DOUBLY REINFORCED BEAMS

**Why do we need doubly reinforced beams?**

*   **When the bending moment on a singly reinforced beam exceeds the moment of resistance of a balanced section.** This happens when the concrete is not strong enough to resist the compressive forces or when the steel in tension reaches its yield strength before the concrete fails in compression.
*   **To resist larger bending moments.** In situations with high loads, such as in multi-storey buildings, bridges, or beams supporting heavy machinery, a singly reinforced section might require an uneconomically large depth or width.
*   **To limit the deflection of the beam.** By adding compression steel, the stiffness of the beam can be increased, thereby reducing deflection.
*   **To resist reversal of stresses.** In some structures, beams might experience bending moments in opposite directions, causing both tension and compression in the top and bottom fibers at different times. Doubly reinforced beams can effectively handle such scenarios.
*   **To resist shear forces in addition to bending moments.** While primarily designed for bending, the presence of compression steel can also contribute to shear resistance, especially in cases where shear stresses are high.

**When are they applicable?**

*   **High bending moments:** Beams supporting heavy loads.
*   **Limited depth or width:** When the required depth for a singly reinforced beam is not feasible due to architectural constraints.
*   **Stiffening requirements:** When deflection control is critical.
*   **Structures subjected to seismic loads or wind loads:** Where reversal of stresses can occur.

---

### 2. BEHAVIOR OF DOUBLY REINFORCED BEAMS UNDER BENDING

**Fundamental Principle:**

A doubly reinforced beam has both tensile reinforcement (usually at the bottom) and compression reinforcement (usually at the top).

**Stress Distribution:**

*   **Under service loads:** The concrete in the compression zone resists the compressive forces, and the tension steel resists the tensile forces. The compression steel is added to assist the concrete in resisting compression.
*   **Strain Compatibility:** The strains in the concrete and steel are compatible. The steel in the compression zone will experience strain, and its stress depends on this strain and its material properties.
*   **Balanced vs. Under-reinforced vs. Over-reinforced:** Similar to singly reinforced beams, doubly reinforced beams can be designed to be under-reinforced (steel yields first, ductile failure) or over-reinforced (concrete crushes first, brittle failure). For safety and ductility, under-reinforced design is generally preferred.

**Key Components and their Roles:**

*   **Concrete:** Primarily resists compression in the top fibers.
*   **Tension Steel (As):** Resists tensile forces in the bottom fibers.
*   **Compression Steel (As'):** Resists compressive forces in the top fibers, assisting the concrete. It also helps to increase the moment of resistance and reduce deflection.

---

### 3. DETERMINING STRESSES IN CONCRETE AND STEEL

**Assumptions (Based on IS 456:2000 and Limit State Design):**

1.  Plane sections remain plane after bending.
2.  The maximum strain in concrete at the outermost compression fiber is 0.0035.
3.  The relationship between stress and strain in concrete is parabolic-rectangular stress block as per IS 456.
4.  The stress-strain relationship for steel is elastic-perfectly plastic.
5.  The concrete does not resist any tensile stresses.

**Stress Calculation:**

When the bending moment applied ($M_{u,applied}$) is greater than the moment of resistance of a singly reinforced section ($M_{u,bal}$), compression steel is required.

**Case 1: Both concrete and compression steel are within their elastic limits.**

*   **Strains:** Strain in concrete ($\epsilon_c$) and strain in compression steel ($\epsilon_{sc}$) can be determined using similar triangles.
*   **Stresses:**
    *   Stress in concrete ($f_c$) can be calculated using the stress-strain relationship.
    *   Stress in compression steel ($f_{sc}$) can be calculated as $f_{sc} = \epsilon_{sc} E_s$, where $E_s$ is the modulus of elasticity of steel.
*   **Forces:**
    *   Compressive force in concrete ($C_c$)
    *   Compressive force in steel ($C_{sc} = A_{sc} f_{sc}$)
    *   Tensile force in steel ($T = A_{st} f_{st}$)

**Case 2: Concrete is in the plastic stage (stress block), and compression steel is in the elastic or plastic stage.**

This is the more common scenario in limit state design. We analyze based on the stress block.

*   **Stress Block Parameters:**
    *   Depth of neutral axis ($x_u$)
    *   Depth of equivalent rectangular stress block ($a = 0.42 x_u$ for Fe 415 steel, $a = 0.53 x_u$ for Fe 250 steel)
    *   Ultimate compressive strength of concrete in the stress block ($f_{cd}$)
    *   Factor for concrete stress block ($\beta_1 = 0.42$ for Fe 415 steel, $\beta_1 = 0.53$ for Fe 250 steel)
*   **Forces:**
    *   Compressive force in concrete ($C_c = 0.36 f_{ck} b a$)
    *   Compressive force in compression steel ($C_{sc} = A_{sc} f_{sc}$)
    *   Tensile force in tension steel ($T = A_{st} f_{y}/ \gamma_m$) (assuming steel yields, $f_{st} = f_y/\gamma_m$)
*   **Calculating $f_{sc}$:**
    1.  **Estimate $x_u$**: Start by assuming $x_u$ is less than the depth of compression steel ($d'$).
    2.  **Calculate strain in compression steel ($\epsilon_{sc}$)**:
        $\epsilon_{sc} = \frac{0.0035 (x_u - d')}{x_u}$
    3.  **Check if compression steel has yielded:**
        *   Yield strain of steel ($\epsilon_{sy}$) = $f_y / (E_s \gamma_m)$
        *   If $\epsilon_{sc} \ge \epsilon_{sy}$, then $f_{sc} = f_y / \gamma_m$ (steel has yielded)
        *   If $\epsilon_{sc} < \epsilon_{sy}$, then $f_{sc} = \epsilon_{sc} E_s \gamma_m$ (steel is elastic)
    4.  **Check Equilibrium:** $C_c + C_{sc} = T$
        *   $0.36 f_{ck} b a + A_{sc} f_{sc} = A_{st} (f_y / \gamma_m)$
    5.  **Solve for $x_u$:** This equation might need to be solved iteratively or by making appropriate assumptions about $f_{sc}$.

**Important Point to Remember:** The strain in the compression steel ($\epsilon_{sc}$) is always less than the maximum concrete strain (0.0035) if $d'$ is positive.

---

### 4. CALCULATING MOMENT OF RESISTANCE (M$_u$)

The moment of resistance of a doubly reinforced beam is the sum of moments contributed by the concrete, compression steel, and tension steel about the neutral axis.

**General Formula:**

$M_u = C_c (z_c) + C_{sc} (z_{sc}) = T (z_t)$

Where:
*   $C_c = 0.36 f_{ck} b a$ (Compressive force in concrete)
*   $a = 0.42 x_u$ (Depth of equivalent rectangular stress block)
*   $C_{sc} = A_{sc} f_{sc}$ (Compressive force in compression steel)
*   $T = A_{st} f_y / \gamma_m$ (Tensile force in tension steel)
*   $z_c$ = Lever arm for concrete force = $(d - 0.42a/2) = (d - 0.21a)$
*   $z_{sc}$ = Lever arm for compression steel force = $(d - d')$
*   $z_t$ = Lever arm for tension steel force = $(d - 0.42a/2) = (d - 0.21a)$ (assuming concrete carries the remaining compression)

**Simplified Moment of Resistance Calculation:**

We typically calculate the moment of resistance by considering the forces and their lever arms from the tension steel:

$M_u = C_c (d - 0.42a/2) + C_{sc} (d - d')$

$M_u = (0.36 f_{ck} b a)(d - 0.21a) + (A_{sc} f_{sc})(d - d')$

**Alternatively, considering the forces from the compression side:**

$M_u = T(d - 0.42a/2) - C_{sc}(d - d')$  (This is less common for design as T is usually the governing tensile force)

**Step-by-step calculation:**

1.  **Determine $d$ and $d'$:** Effective depth ($d$) and depth of compression steel ($d'$).
2.  **Calculate $x_{u,max}$:** The maximum depth of the neutral axis for the given grade of concrete and steel (e.g., $0.48d$ for Fe 415 steel).
3.  **Calculate $M_{u,bal}$ for a singly reinforced section:**
    *   If the section were singly reinforced, the neutral axis would be at $x_{u,bal}$.
    *   $a_{bal} = 0.42 x_{u,bal}$
    *   $M_{u,bal} = 0.36 f_{ck} b a_{bal} (d - 0.21 a_{bal})$
4.  **Calculate the additional moment to be resisted ($M_{u2}$):**
    *   $M_{u2} = M_u (applied) - M_{u,bal}$
5.  **Determine the contribution of compression steel ($M_{us}$):**
    *   The compression steel is placed at a distance $d'$ from the top.
    *   Calculate the strain in compression steel: $\epsilon_{sc} = \frac{0.0035 (x_{u,bal} - d')}{x_{u,bal}}$
    *   Check if compression steel yields: $\epsilon_{sy} = f_y / (E_s \gamma_m)$
    *   If $\epsilon_{sc} \ge \epsilon_{sy}$, then $f_{sc} = f_y / \gamma_m$.
    *   If $\epsilon_{sc} < \epsilon_{sy}$, then $f_{sc} = \epsilon_{sc} E_s \gamma_m$.
    *   Moment of resistance due to compression steel ($M_{us}$) = $A_{sc} f_{sc} (d - d')$.
6.  **Calculate required compression steel area ($A_{sc}$):**
    *   $M_{us} = M_{u2}$
    *   $A_{sc} = \frac{M_{u2}}{f_{sc} (d - d')}$
7.  **Calculate required tension steel area ($A_{st}$):**
    *   $A_{st} = A_{st,bal} + A_{st,comp}$
    *   $A_{st,bal}$ is the tension steel required for $M_{u,bal}$ in a singly reinforced section.
    *   $A_{st,comp}$ is the tension steel required to balance the compression in $A_{sc}$.
    *   Alternatively, use equilibrium: $T = C_c + C_{sc}$
        $A_{st} (f_y / \gamma_m) = 0.36 f_{ck} b a_{bal} + A_{sc} f_{sc}$
        $A_{st} = \frac{0.36 f_{ck} b a_{bal} + A_{sc} f_{sc}}{f_y / \gamma_m}$

**Another common approach for calculating $M_u$ directly:**

1.  **Assume $x_u$ (or a value slightly larger than $d'$ but less than $x_{u,max}$)**.
2.  **Calculate $a = 0.42 x_u$**.
3.  **Calculate $\epsilon_{sc} = \frac{0.0035 (x_u - d')}{x_u}$**.
4.  **Determine $f_{sc}$** (based on $\epsilon_{sc}$ and yield strain).
5.  **Calculate $C_c = 0.36 f_{ck} b a$**.
6.  **Calculate $C_{sc} = A_{sc} f_{sc}$**.
7.  **Calculate $T = C_c + C_{sc}$**.
8.  **Calculate $A_{st} = T / (f_y / \gamma_m)$**.
9.  **Calculate $M_u = C_c (d - 0.21a) + C_{sc} (d - d')$**.
10. **Compare the calculated $M_u$ with the required $M_u$.** Adjust $x_u$ iteratively until the desired $M_u$ is achieved or use the equilibrium equation to find $x_u$ first.

---

### 5. DESIGN OF DOUBLY REINFORCED BEAMS

**Design Steps for a Given Bending Moment ($M_u$) and Section Properties (b, d):**

1.  **Determine the grade of concrete and steel.** This will give you $f_{ck}$, $f_y$, $\gamma_m$, $E_s$.
2.  **Calculate the limiting moment of resistance for a singly reinforced section ($M_{u,lim}$ or $M_{u,bal}$):**
    *   Find $x_{u,max} = \lambda d$, where $\lambda$ is the coefficient for maximum neutral axis depth (e.g., 0.48 for Fe 415).
    *   $a_{lim} = 0.42 x_{u,max} = 0.42 \lambda d$.
    *   $M_{u,lim} = 0.36 f_{ck} b a_{lim} (d - 0.21 a_{lim})$
3.  **Compare $M_u$ with $M_{u,lim}$:**
    *   **If $M_u \le M_{u,lim}$:** The section can be designed as a singly reinforced beam. Calculate $A_{st}$ using the formulas for singly reinforced beams.
    *   **If $M_u > M_{u,lim}$:** The section needs to be doubly reinforced.
4.  **Calculate the additional moment to be resisted by compression steel ($M_{u2}$):**
    *   $M_{u2} = M_u - M_{u,lim}$
5.  **Assume the depth of compression steel ($d'$):** Typically, $d' = 25$ mm (cover + ½ diameter of stirrup + ½ diameter of main bar). A common assumption for $d'$ is around $0.1d$ or $10\%$ of the effective depth.
6.  **Calculate the stress in compression steel ($f_{sc}$):**
    *   At the limiting condition, the neutral axis is at $x_{u,max}$.
    *   Calculate the strain in compression steel at this depth: $\epsilon_{sc} = \frac{0.0035 (x_{u,max} - d')}{x_{u,max}}$
    *   Check if $\epsilon_{sc} \ge \epsilon_{sy}$ (yield strain, $f_y / (E_s \gamma_m)$).
        *   If yes, $f_{sc} = f_y / \gamma_m$.
        *   If no, $f_{sc} = \epsilon_{sc} E_s \gamma_m$.
7.  **Calculate the area of compression steel ($A_{sc}$):**
    *   $A_{sc} = \frac{M_{u2}}{f_{sc} (d - d')}$
    *   Round up to the nearest practical area of steel bars.
8.  **Calculate the area of tension steel ($A_{st}$):**
    *   The tension steel required consists of two parts:
        *   $A_{st1}$: Tension steel required for $M_{u,lim}$ in a singly reinforced section.
            $M_{u,lim} = 0.87 f_y A_{st1} (d - 0.42 x_{u,max})$
            $A_{st1} = \frac{M_{u,lim}}{0.87 f_y (d - 0.42 x_{u,max})}$
        *   $A_{st2}$: Additional tension steel to balance the compression from $A_{sc}$. This is equal to the compression force in $A_{sc}$ divided by the design tensile strength of steel.
            $A_{st2} = \frac{A_{sc} f_{sc}}{0.87 f_y}$
    *   Total tension steel $A_{st} = A_{st1} + A_{st2}$.
    *   Alternatively, use overall equilibrium: $T = C_c + C_{sc}$
        $0.87 f_y A_{st} = 0.36 f_{ck} b a_{lim} + A_{sc} f_{sc}$
        $A_{st} = \frac{0.36 f_{ck} b a_{lim} + A_{sc} f_{sc}}{0.87 f_y}$
    *   Round up to the nearest practical area of steel bars.
9.  **Check minimum and maximum reinforcement requirements:**
    *   $A_{st,min}$ and $A_{st,max}$ as per IS 456:2000.
    *   Similarly check for $A_{sc,min}$ and $A_{sc,max}$ (usually $0.2\%$ to $0.8\%$ of $b \times D$, where $D$ is the overall depth).
10. **Provide detailing for stirrups and main bars.**

**Important Design Considerations:**

*   **Effective Depth ($d$) vs. Overall Depth ($D$):** $D = d + \text{cover} + \text{stirrup dia} + \text{bar dia}/2$.
*   **Depth of Compression Steel ($d'$):** Crucial for calculating $f_{sc}$.
*   **Yielding of Compression Steel:** Always check if the compression steel yields. If it doesn't, the actual $f_{sc}$ is less than $f_y/\gamma_m$, leading to a smaller $A_{sc}$ contribution.
*   **Economic Aspect:** Doubly reinforced beams are generally less economical than singly reinforced beams. They are used only when necessary.

---

### 6. PRACTICE QUESTIONS AND EXERCISES

**Question 1 (Theory):** Explain the situations where a doubly reinforced beam is preferred over a singly reinforced beam.

**Answer:** Doubly reinforced beams are preferred when:
*   The applied bending moment exceeds the moment of resistance of a balanced singly reinforced section.
*   There are architectural constraints limiting the beam depth.
*   Stricter deflection control is required.
*   The structure is subjected to reversal of stresses.

**Question 2 (Calculation):** A doubly reinforced concrete beam is $230$ mm wide and has an effective depth of $450$ mm. It is reinforced with $4$ bars of $20$ mm diameter at the top and $4$ bars of $25$ mm diameter at the bottom. The clear cover is $25$ mm and stirrups are $8$ mm in diameter. If the concrete is M25 grade and steel is Fe415 grade, calculate the moment of resistance of the section.

**Given:**
*   Width of beam, $b = 230$ mm
*   Effective depth, $d = 450$ mm
*   Compression steel, $A_{sc} = 4 \times \frac{\pi}{4} (20)^2 = 1256.6$ mm$^2$
*   Tension steel, $A_{st} = 4 \times \frac{\pi}{4} (25)^2 = 1963.5$ mm$^2$
*   Concrete grade, $f_{ck} = 25$ MPa
*   Steel grade, $f_y = 415$ MPa
*   Modulus of Elasticity of steel, $E_s = 2 \times 10^5$ MPa
*   Partial safety factor for concrete, $\gamma_{mc} = 1.5$
*   Partial safety factor for steel, $\gamma_{ms} = 1.15$
*   Design stress in concrete, $f_{cd} = f_{ck}/\gamma_{mc} = 25/1.5 = 16.67$ MPa
*   Design stress in steel, $f_{yd} = f_y/\gamma_{ms} = 415/1.15 = 360.87$ MPa
*   Clear cover = $25$ mm
*   Stirrup diameter = $8$ mm
*   Assume diameter of compression bars = $20$ mm
*   Depth of compression steel, $d' = 25$ (clear cover) $+ 8$ (stirrup dia) $+ 20/2$ (half main bar dia) $= 25 + 8 + 10 = 43$ mm

**Solution:**

1.  **Calculate limiting neutral axis depth and $M_{u,lim}$:**
    *   $x_{u,max} = 0.48d = 0.48 \times 450 = 216$ mm
    *   $a_{lim} = 0.42 x_{u,max} = 0.42 \times 216 = 90.72$ mm
    *   $M_{u,lim} = 0.36 f_{ck} b a_{lim} (d - 0.21 a_{lim})$
    *   $M_{u,lim} = 0.36 \times 25 \times 230 \times 90.72 (450 - 0.21 \times 90.72)$
    *   $M_{u,lim} = 523152 \times (450 - 19.05) = 523152 \times 430.95 = 225417310$ Nmm $= 225.42$ kNm

2.  **Calculate the stress in compression steel ($f_{sc}$):**
    *   We need to find $x_u$. Let's assume $x_u > d'$.
    *   Strain in compression steel: $\epsilon_{sc} = \frac{0.0035 (x_u - d')}{x_u}$
    *   Yield strain of steel: $\epsilon_{sy} = \frac{f_y}{\gamma_{ms} E_s} = \frac{415}{1.15 \times 2 \times 10^5} = \frac{415}{230000} = 0.001804$
    *   If $x_u = 216$ mm (limiting case):
        $\epsilon_{sc} = \frac{0.0035 (216 - 43)}{216} = \frac{0.0035 \times 173}{216} = 0.00280$
    *   Since $\epsilon_{sc} (0.00280) > \epsilon_{sy} (0.001804)$, the compression steel has yielded.
    *   Therefore, $f_{sc} = f_y / \gamma_{ms} = 415 / 1.15 = 360.87$ MPa.

3.  **Calculate forces and check equilibrium:**
    *   $a = 0.42 x_u$. For $x_u = 216$, $a = 90.72$ mm.
    *   $C_c = 0.36 f_{ck} b a = 0.36 \times 25 \times 230 \times 90.72 = 187834.8$ N
    *   $C_{sc} = A_{sc} f_{sc} = 1256.6 \times 360.87 = 453542$ N
    *   Total compression $C = C_c + C_{sc} = 187834.8 + 453542 = 641376.8$ N
    *   $T = A_{st} (f_y / \gamma_{ms}) = 1963.5 \times 360.87 = 708587$ N

    *   Since $T > C$, the section is under-reinforced and the neutral axis will be at $x_u < 216$ mm. We need to find the actual $x_u$ where $T = C_c + C_{sc}$.

4.  **Solve for $x_u$ using equilibrium equation:**
    $A_{st} \frac{f_y}{\gamma_{ms}} = 0.36 f_{ck} b a + A_{sc} f_{sc}$
    We need to express $f_{sc}$ in terms of $x_u$: $f_{sc} = 0.0035 \frac{x_u-d'}{x_u} E_s \gamma_{mc}$ (using actual strain-stress for concrete). For simplification and following common practice, we use the relation for $f_{sc}$ where the strain is calculated and then checked for yield.

    Let's use the direct formula for $M_u$ and solve iteratively. We know $x_u < 216$.

    **Iteration 1:** Assume $x_u = 150$ mm.
    *   $a = 0.42 \times 150 = 63$ mm
    *   $\epsilon_{sc} = \frac{0.0035 (150 - 43)}{150} = \frac{0.0035 \times 107}{150} = 0.00250$
    *   Since $\epsilon_{sc} > \epsilon_{sy}$, $f_{sc} = 360.87$ MPa.
    *   $M_u = (0.36 f_{ck} b a)(d - 0.21a) + (A_{sc} f_{sc})(d - d')$
    *   $M_u = (0.36 \times 25 \times 230 \times 63)(450 - 0.21 \times 63) + (1256.6 \times 360.87)(450 - 43)$
    *   $M_u = (130500 \times 63)(450 - 13.23) + (453542)(407)$
    *   $M_u = (5253150)(436.77) + 184575554$
    *   $M_u = 2293543756 + 184575554 = 2478119310$ Nmm $= 2478.12$ kNm

    This value is higher than $M_{u,lim}$, indicating $x_u$ must be larger than $150$ mm to increase the compression block. Let's re-evaluate the approach using the equilibrium equation first.

    **Revised Approach: Using Equilibrium to find $x_u$**

    $A_{st} \frac{f_y}{\gamma_{ms}} = 0.36 f_{ck} b x_u + A_{sc} f_{sc}$
    We need to check if $f_{sc}$ is yielded. Let's assume it is yielded for now ($f_{sc} = 360.87$ MPa).

    $1963.5 \times 360.87 = 0.36 \times 25 \times 230 \times x_u + 1256.6 \times 360.87$
    $708587 = 2070 \times x_u + 453542$
    $2070 \times x_u = 708587 - 453542 = 255045$
    $x_u = 255045 / 2070 = 123.21$ mm

    Now, let's check the strain in compression steel at $x_u = 123.21$ mm:
    $\epsilon_{sc} = \frac{0.0035 (123.21 - 43)}{123.21} = \frac{0.0035 \times 80.21}{123.21} = 0.00228$
    Since $\epsilon_{sc} (0.00228) > \epsilon_{sy} (0.001804)$, our assumption that compression steel has yielded is correct.

    Now calculate $M_u$ using $x_u = 123.21$ mm:
    $a = 0.42 x_u = 0.42 \times 123.21 = 51.75$ mm
    $f_{sc} = 360.87$ MPa (as confirmed above)

    $M_u = (0.36 f_{ck} b a)(d - 0.21a) + (A_{sc} f_{sc})(d - d')$
    $M_u = (0.36 \times 25 \times 230 \times 51.75)(450 - 0.21 \times 51.75) + (1256.6 \times 360.87)(450 - 43)$
    $M_u = (1060935)(450 - 10.87) + (453542)(407)$
    $M_u = (1060935)(439.13) + 184575554$
    $M_u = 465857539 + 184575554 = 650433093$ Nmm $= 650.43$ kNm

**Answer for Question 2:** The moment of resistance of the section is $650.43$ kNm.

**Question 3 (Design):** Design a doubly reinforced concrete beam for a factored bending moment of $150$ kNm. The beam width is restricted to $230$ mm. Use M20 concrete and Fe415 steel.

**Given:**
*   Factored bending moment, $M_u = 150$ kNm $= 150 \times 10^6$ Nmm
*   Width of beam, $b = 230$ mm
*   Concrete grade, $f_{ck} = 20$ MPa
*   Steel grade, $f_y = 415$ MPa
*   Partial safety factor for concrete, $\gamma_{mc} = 1.5$
*   Partial safety factor for steel, $\gamma_{ms} = 1.15$
*   Design stress in concrete, $f_{cd} = 20/1.5 = 13.33$ MPa
*   Design stress in steel, $f_{yd} = 415/1.15 = 360.87$ MPa
*   Modulus of Elasticity of steel, $E_s = 2 \times 10^5$ MPa

**Design Steps:**

1.  **Assume an overall depth ($D$) or effective depth ($d$):**
    For preliminary design, a common ratio of $d/b$ is between 1.5 and 2. Let's assume $d \approx 1.75b = 1.75 \times 230 = 402.5$ mm. Let's assume $d = 400$ mm.
    Effective cover, $d' \approx 0.1d = 40$ mm.

2.  **Calculate limiting moment of resistance ($M_{u,lim}$):**
    *   $x_{u,max} = 0.48d = 0.48 \times 400 = 192$ mm
    *   $a_{lim} = 0.42 x_{u,max} = 0.42 \times 192 = 80.64$ mm
    *   $M_{u,lim} = 0.36 f_{ck} b a_{lim} (d - 0.21 a_{lim})$
    *   $M_{u,lim} = 0.36 \times 20 \times 230 \times 80.64 (400 - 0.21 \times 80.64)$
    *   $M_{u,lim} = 1330560 \times (400 - 16.93) = 1330560 \times 383.07 = 510337939$ Nmm $= 510.34$ kNm

3.  **Compare $M_u$ with $M_{u,lim}$:**
    *   $M_u = 150$ kNm.
    *   $M_{u,lim} = 510.34$ kNm.
    *   Since $M_u < M_{u,lim}$, the section can be designed as a singly reinforced beam. We don't need compression steel.

    **However, let's assume for the sake of demonstrating doubly reinforced design that the required $M_u$ was larger, say $600$ kNm. Then we would proceed as follows:**

    **(Scenario: If $M_u = 600$ kNm)**
    *   $M_u = 600$ kNm.
    *   $M_{u,lim} = 510.34$ kNm.
    *   Since $M_u > M_{u,lim}$, the section needs to be doubly reinforced.

4.  **Calculate additional moment ($M_{u2}$):**
    *   $M_{u2} = M_u - M_{u,lim} = 600 - 510.34 = 89.66$ kNm $= 89.66 \times 10^6$ Nmm

5.  **Calculate stress in compression steel ($f_{sc}$):**
    *   At limiting condition ($x_u = x_{u,max} = 192$ mm).
    *   $d' = 40$ mm.
    *   $\epsilon_{sc} = \frac{0.0035 (x_{u,max} - d')}{x_{u,max}} = \frac{0.0035 (192 - 40)}{192} = \frac{0.0035 \times 152}{192} = 0.00277$
    *   $\epsilon_{sy} = \frac{f_y}{\gamma_{ms} E_s} = \frac{415}{1.15 \times 2 \times 10^5} = 0.001804$
    *   Since $\epsilon_{sc} (0.00277) > \epsilon_{sy} (0.001804)$, the compression steel has yielded.
    *   $f_{sc} = f_y / \gamma_{ms} = 415 / 1.15 = 360.87$ MPa.

6.  **Calculate area of compression steel ($A_{sc}$):**
    *   $A_{sc} = \frac{M_{u2}}{f_{sc} (d - d')}$
    *   $A_{sc} = \frac{89.66 \times 10^6}{360.87 (400 - 40)} = \frac{89.66 \times 10^6}{360.87 \times 360} = \frac{89.66 \times 10^6}{130000} = 690$ mm$^2$.
    *   Provide $A_{sc}$ using standard bar sizes. For example, 2 bars of $20$ mm diameter give $2 \times \frac{\pi}{4}(20)^2 = 628$ mm$^2$ (too low). 2 bars of $25$ mm diameter give $2 \times \frac{\pi}{4}(25)^2 = 981.7$ mm$^2$. Let's choose **2 bars of 25 mm diameter ($A_{sc} = 981.7$ mm$^2$)**.

7.  **Calculate area of tension steel ($A_{st}$):**
    *   $A_{st} = A_{st1} + A_{st2}$
    *   $A_{st1}$ (for $M_{u,lim}$): $M_{u,lim} = 0.87 f_y A_{st1} (d - 0.42 x_{u,max})$
        $510.34 \times 10^6 = 0.87 \times 415 \times A_{st1} (400 - 80.64)$
        $510.34 \times 10^6 = 361.05 \times A_{st1} \times 319.36$
        $A_{st1} = \frac{510.34 \times 10^6}{361.05 \times 319.36} = 4437$ mm$^2$.
    *   $A_{st2}$ (balancing $A_{sc}$): $A_{st2} = \frac{A_{sc} f_{sc}}{0.87 f_y}$
        $A_{st2} = \frac{981.7 \times 360.87}{0.87 \times 415} = \frac{354125}{361.05} = 980.8$ mm$^2$.
    *   Total tension steel $A_{st} = A_{st1} + A_{st2} = 4437 + 980.8 = 5417.8$ mm$^2$.

    *   Alternatively, using equilibrium:
        $0.87 f_y A_{st} = 0.36 f_{ck} b a_{lim} + A_{sc} f_{sc}$
        $0.87 \times 415 \times A_{st} = 0.36 \times 20 \times 230 \times 80.64 + 981.7 \times 360.87$
        $361.05 \times A_{st} = 1330560 + 354125 = 1684685$
        $A_{st} = \frac{1684685}{361.05} = 4666$ mm$^2$.

        *There's a discrepancy between the two methods for $A_{st}$ because $M_{u,lim}$ is based on the neutral axis at $x_{u,max}$, whereas the equilibrium equation uses the actual $f_{sc}$ and $a$ corresponding to $x_{u,max}$. The equilibrium method is generally more consistent for calculating total $A_{st}$ when compression steel is present.*

    *   Let's use the equilibrium method calculation: $A_{st} = 4666$ mm$^2$.
    *   Provide $A_{st}$ using standard bar sizes. For example, 8 bars of 25 mm diameter give $8 \times \frac{\pi}{4}(25)^2 = 3927$ mm$^2$ (too low). 10 bars of 25 mm diameter give $10 \times \frac{\pi}{4}(25)^2 = 4908.7$ mm$^2$. Let's choose **10 bars of 25 mm diameter ($A_{st} = 4908.7$ mm$^2$)**.

8.  **Check minimum and maximum reinforcement:**
    *   $A_{st,min} = \frac{0.85 b d}{f_y} = \frac{0.85 \times 230 \times 400}{415} = 188.4$ mm$^2$. (Provided $4908.7$ mm$^2$ is well above this).
    *   $A_{st,max}$ (for singly reinforced): $0.04 b D$. Let's assume $D = d + d' = 400 + 40 = 440$ mm. $0.04 \times 230 \times 440 = 4048$ mm$^2$. (Provided $4908.7$ mm$^2$ is greater than this, which means we need to be careful).

    *   **Re-evaluation:** The tension steel area derived from the equilibrium equation ($4666$ mm$^2$) is close to $A_{st,max}$ for a singly reinforced beam. This indicates that the assumed depth might be insufficient for the required tension steel if it were singly reinforced. However, with compression steel, the limits are more complex. For doubly reinforced beams, the total tension steel should not exceed the amount required for a fully over-reinforced section, and compression steel is typically limited.

    *   **Let's check the maximum limit for singly reinforced with the assumed $d=400$:**
        $M_{u,max} = 0.36 f_{ck} b (0.48d) (d - 0.21 \times 0.48d)$
        $M_{u,max} = 0.36 \times 20 \times 230 \times (0.48 \times 400) (400 - 0.21 \times 0.48 \times 400)$
        $M_{u,max} = 1660320 (192) (400 - 48.384) = 1660320 \times 192 \times 351.616 = 111887959352$ Nmm $= 1118.88$ kNm. This is the maximum capacity of the section if it were singly reinforced and $d=400$.

    *   The calculated tension steel of $4666$ mm$^2$ is for a $M_u = 600$ kNm.
        $A_{st,max}$ for singly reinforced is approximately $0.04 \times 230 \times 440 = 4048$ mm$^2$.
        Our calculated tension steel $4666$ mm$^2$ exceeds this. This suggests our assumed depth ($d=400$) might be too small for this load and design.

    *   **Let's try a larger depth:** Assume $d = 450$ mm.
        $d' = 0.1d = 45$ mm.
        $x_{u,max} = 0.48 \times 450 = 216$ mm.
        $a_{lim} = 0.42 \times 216 = 90.72$ mm.
        $M_{u,lim} = 0.36 \times 20 \times 230 \times 90.72 (450 - 0.21 \times 90.72)$
        $M_{u,lim} = 1660320 \times (450 - 19.05) = 1660320 \times 430.95 = 715299864$ Nmm $= 715.3$ kNm.

    *   If $M_u = 600$ kNm, then $M_u < M_{u,lim}$ with $d=450$ mm. The section can be designed as singly reinforced.

    **Let's re-do the original problem with the correct approach assuming $d$ is selected based on the bending moment:**

    **Design of a doubly reinforced concrete beam for a factored bending moment of $150$ kNm. Width restricted to $230$ mm. M20 concrete and Fe415 steel.**

    1.  **Assume an initial depth:** Let's assume $d/b$ ratio of 1.75, so $d = 1.75 \times 230 = 402.5$ mm. Let's try $d=400$ mm.
    2.  **Calculate $M_{u,lim}$ for $d=400$:** We found $M_{u,lim} = 510.34$ kNm.
    3.  **Compare $M_u$ and $M_{u,lim}$:** $M_u = 150$ kNm. Since $M_u < M_{u,lim}$, the section can be designed as singly reinforced.

    **Design as Singly Reinforced Beam:**
    *   $M_u = 150 \times 10^6$ Nmm.
    *   $x_{u,max} = 0.48d = 0.48 \times 400 = 192$ mm.
    *   $a_{max} = 0.42 x_{u,max} = 0.42 \times 192 = 80.64$ mm.
    *   $M_{u,lim} = 510.34$ kNm (calculated above).
    *   Since $M_u < M_{u,lim}$, we can find $A_{st}$ using the singly reinforced beam formula:
        $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$
        We need to find $x_u$:
        $150 \times 10^6 = 0.87 \times 415 \times A_{st} (400 - 0.42 x_u)$
        And also $T = C$: $0.87 f_y A_{st} = 0.36 f_{ck} b x_u$
        $0.87 \times 415 \times A_{st} = 0.36 \times 20 \times 230 \times x_u$
        $361.05 \times A_{st} = 16560 \times x_u$
        $A_{st} = \frac{16560}{361.05} x_u = 45.87 x_u$.

        Substitute $A_{st}$ in the moment equation:
        $150 \times 10^6 = 0.87 \times 415 \times (45.87 x_u) (400 - 0.42 x_u)$
        $150 \times 10^6 = 361.05 \times 45.87 x_u (400 - 0.42 x_u)$
        $150 \times 10^6 = 16560 x_u (400 - 0.42 x_u)$
        $150 \times 10^6 = 6624000 x_u - 6955.2 x_u^2$
        $6955.2 x_u^2 - 6624000 x_u + 150 \times 10^6 = 0$
        Divide by 1000: $6.955 x_u^2 - 6624 x_u + 150000 = 0$

        Using the quadratic formula $x_u = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
        $x_u = \frac{6624 \pm \sqrt{(6624)^2 - 4 \times 6.955 \times 150000}}{2 \times 6.955}$
        $x_u = \frac{6624 \pm \sqrt{43877376 - 4173000}}{13.91}$
        $x_u = \frac{6624 \pm \sqrt{39704376}}{13.91} = \frac{6624 \pm 6301}{13.91}$
        $x_u = \frac{12925}{13.91} = 930$ (not possible as $x_u < 400$)
        $x_u = \frac{323}{13.91} = 23.22$ mm.

    *   Now calculate $A_{st}$:
        $A_{st} = 45.87 x_u = 45.87 \times 23.22 = 1065.5$ mm$^2$.
    *   Provide $A_{st}$ using standard bar sizes. For example, 3 bars of 20 mm diameter give $3 \times \frac{\pi}{4}(20)^2 = 942.5$ mm$^2$ (too low). 4 bars of 20 mm diameter give $4 \times \frac{\pi}{4}(20)^2 = 1256.6$ mm$^2$.
    *   **Design for $M_u = 150$ kNm:** Effective depth $d = 400$ mm. Tension reinforcement: 4 bars of 20 mm diameter ($A_{st} = 1256.6$ mm$^2$).

    **Answer for Question 3:** For a factored bending moment of $150$ kNm, a beam of $230$ mm width can be designed as a singly reinforced beam with an effective depth of $400$ mm and tension reinforcement of 4 bars of 20 mm diameter. No compression steel is required.

    **(If the question HAD asked for a scenario requiring compression steel, the steps from the "Scenario: If $M_u = 600$ kNm" above would be relevant, starting with selecting a suitable depth that makes the section doubly reinforced).**

---

### 7. IMPORTANT POINTS TO REMEMBER

*   **Doubly reinforced beams are used when the bending moment capacity of a singly reinforced beam of economical proportions is insufficient.**
*   **The primary function of compression steel is to increase the moment of resistance and reduce deflection.**
*   **Always check if the compression steel has yielded by comparing the strain in compression steel ($\epsilon_{sc}$) with the yield strain of steel ($\epsilon_{sy}$).**
*   **The lever arm for the compression steel ($d-d'$) is a critical parameter in moment calculations.**
*   **When designing, ensure that the calculated tension steel area does not exceed the maximum allowable reinforcement limits for the section.**
*   **Doubly reinforced beams are generally less economical due to the additional steel and complexity.**
*   **The stress block parameters (0.36 $f_{ck}$ and $a = 0.42 x_u$ for Fe 415) are essential for calculations.**
*   **Understand the relationship between applied moment, limiting moment of resistance, and the need for compression steel.**

---
