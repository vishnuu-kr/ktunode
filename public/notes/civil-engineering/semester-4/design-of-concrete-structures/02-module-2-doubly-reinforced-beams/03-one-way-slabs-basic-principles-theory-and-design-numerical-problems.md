---
title: "One-way slabs - Basic Principles, Theory and design - Numerical Problems"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 2: Doubly Reinforced Beams "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c5"
status: "completed"
scrapedAt: "2026-05-20T18:43:45.670Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 2: Doubly Reinforced Beams

## Topic: One-Way Slabs - Basic Principles, Theory and Design - Numerical Problems

This module delves into the design of one-way slabs, a fundamental component in many concrete structures. While the module title mentions "Doubly Reinforced Beams," one-way slabs are a distinct structural element with specific design considerations. The principles of singly and doubly reinforced concrete are applied, but the bending behavior dictates the design approach.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Understand the behavior of one-way slabs:** Differentiate between one-way and two-way slabs and identify the conditions that lead to one-way behavior.
*   **Apply basic principles of bending in slabs:** Understand how loads are distributed and how bending moments are calculated.
*   **Explain the theoretical basis for one-way slab design:** Relate the principles of reinforced concrete design to slab behavior.
*   **Design one-way slabs for bending:** Determine the required reinforcement for flexure.
*   **Design one-way slabs for shear:** Check and design for shear forces.
*   **Check for deflection and serviceability:** Ensure the slab meets deflection limits.
*   **Solve numerical problems related to one-way slab design:** Apply the learned principles to practical design scenarios.

---

### 1. Basic Principles of One-Way Slabs

#### 1.1 Definition and Behavior

*   **Slab:** A flat, horizontal structural element designed to span between beams, walls, or columns, carrying and distributing loads to these supporting elements.
*   **One-Way Slab:** A slab that primarily bends and deflects in one direction. This occurs when the ratio of the longer span to the shorter span ($L_y / L_x$) is **greater than 2**. In such slabs, the load is primarily carried by the shorter span.
*   **Two-Way Slab:** A slab that bends and deflects in two directions. This occurs when the ratio of the longer span to the shorter span ($L_y / L_x$) is **less than or equal to 2**. In such slabs, the load is distributed to all supporting edges, and bending occurs in both directions.

#### 1.2 Supporting Conditions and Load Distribution

In a one-way slab, the slab is supported along two opposite edges (typically beams or walls).

*   **Load Distribution:** Due to the larger span in the other direction, the slab acts like a continuous beam spanning between its supports. The load applied to the slab is effectively transferred as a uniformly distributed load (UDL) to the supporting beams/walls.
*   **Bending Moment:** The slab experiences bending moments predominantly along its shorter span. These moments are similar to those in a beam.

#### 1.3 Types of One-Way Slabs based on Support Conditions

The bending moment coefficients depend on the support conditions of the slab along its shorter span:

*   **Simply Supported One-Way Slab:** Supported on two opposite edges with no restraint against rotation.
*   **Cantilever One-Way Slab:** Supported on one edge and projecting freely.
*   **Continuous One-Way Slab:** Supported on more than two supports, creating continuity over intermediate supports.

---

### 2. Theory of One-Way Slab Design

The design of one-way slabs follows the principles of reinforced concrete design for beams, adapted for the slab geometry.

#### 2.1 Material Properties (as per IS 456:2000)

*   **Concrete:**
    *   Characteristic compressive strength ($f_{ck}$).
    *   Modular ratio ($m = 280 / (3 \sigma_{cbc})$).
    *   Permissible stresses in concrete (based on grade).
*   **Steel Reinforcement:**
    *   Characteristic yield strength ($f_y$).
    *   Permissible stresses in steel (based on grade).

#### 2.2 Limit State Design (as per IS 456:2000)

Design is typically done using the Limit State Method (LSM).

*   **Limit State of Collapse (Flexure):** Ensuring the slab can resist the ultimate bending moments caused by factored loads.
*   **Limit State of Serviceability:** Checking for deflections and cracking under service loads.

#### 2.3 Bending Moment Calculation

For a one-way slab, the bending moment is calculated based on the effective span ($L_{eff}$) and the applied loads. The slab is treated as a beam with a unit width (typically 1 meter or 1000 mm).

*   **Effective Span ($L_{eff}$):**
    *   For simply supported slabs: Clear span + effective depth.
    *   For continuous slabs: The distance between the centers of supports.
    *   As per IS 456:2000 Clause 22.1.1 (a): For slabs spanning in one direction, the longer span is considered for calculating bending moments and shear forces. The effective span shall be as per clause 22.2.
    *   **Clause 22.2 (IS 456:2000):** Effective span of a slab shall be taken as the least of the following:
        *   (a) The clear span plus the effective depth.
        *   (b) The distance between the centers of the supports.
*   **Loads:**
    *   **Dead Load (DL):** Self-weight of the slab + finishes.
        *   Self-weight $= 25 \times D$ (kN/m²) where D is the overall depth of the slab in meters.
    *   **Live Load (LL):** Imposed load on the slab as per IS 875 (Part 2).
*   **Factored Loads:** Loads are multiplied by partial safety factors:
    *   For DL: 1.5
    *   For LL: 1.5
    *   Total factored load ($w_u$) = $1.5 \times DL + 1.5 \times LL$

#### 2.4 Bending Moment Coefficients for One-Way Slabs (as per IS 456:2000, Table 12)

These coefficients are for continuous slabs and are based on the shorter span.

| Support Conditions                                                                                                                                                                                                                                      | Mid-span Moment (w.r.t. $L_{eff}$) | Support Moment (w.r.t. $L_{eff}$) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------- | :-------------------------------- |
| **End Span:**                                                                                                                                                                                                                                           |                                    |                                   |
| i) Continuous over supports                                                                                                                                                                                                                             | $+w_u L_{eff}^2 / 16$              | $-w_u L_{eff}^2 / 12$             |
| ii) Discontinuous end, freely supported                                                                                                                                                                                                                 | $+w_u L_{eff}^2 / 10$              | $-w_u L_{eff}^2 / 12$             |
| iii) Discontinuous end, held down                                                                                                                                                                                                                       | $+w_u L_{eff}^2 / 12$              | $-w_u L_{eff}^2 / 10$             |
| **Span between freely supported ends:**                                                                                                                                                                                                                 | $+w_u L_{eff}^2 / 16$              |                                   |
| **Span between other supports:**                                                                                                                                                                                                                        |                                    |                                   |
| i) Continuous over supports                                                                                                                                                                                                                             | $+w_u L_{eff}^2 / 16$              | $-w_u L_{eff}^2 / 12$             |
| ii) Span with one end continuous                                                                                                                                                                                                                        | $+w_u L_{eff}^2 / 10$              | $-w_u L_{eff}^2 / 12$             |
| iii) Span with both ends continuous                                                                                                                                                                                                                     | $+w_u L_{eff}^2 / 12$              | $-w_u L_{eff}^2 / 10$             |
| **Interior Span:**                                                                                                                                                                                                                                      | $+w_u L_{eff}^2 / 16$              | $-w_u L_{eff}^2 / 12$             |

**Important:** For simply supported slabs, the bending moment is $w_u L_{eff}^2 / 8$. For cantilever slabs, it is $w_u L_{eff}^2 / 2$ at the support.

#### 2.5 Design for Flexure

*   **Calculate Effective Depth (d):** Based on deflection limits or assumed.
*   **Calculate Bending Moment ($M_u$):** Using appropriate coefficients.
*   **Determine Limiting Moment of Resistance ($M_{u,lim}$):** For balanced or under-reinforced sections. For singly reinforced rectangular sections, $M_{u,lim} = 0.36 b d^2 f_{ck} / f_y (1 - 0.418 x_u/d)_{max}$ where $(x_u/d)_{max}$ depends on the steel grade.
    *   For Fe 250: $x_u/d = 0.53$
    *   For Fe 415: $x_u/d = 0.48$
    *   For Fe 500: $x_u/d = 0.46$
*   **Check if $M_u \le M_{u,lim}$:** If $M_u > M_{u,lim}$, the section needs to be redesigned (increase depth or use doubly reinforced section). If $M_u \le M_{u,lim}$, the slab is singly reinforced.
*   **Calculate Area of Tension Steel ($A_{st}$):** For singly reinforced section,
    $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$
    where $x_u = \frac{0.87 f_y A_{st}}{0.36 b f_{ck}}$.
    Substitute $x_u$ back into the moment equation to get a quadratic equation for $A_{st}$, or use simplified formulas.
    A common simplified approach:
    $M_u = 0.87 f_y A_{st} (d - 0.42 \frac{0.87 f_y A_{st}}{0.36 b f_{ck}})$
    This can be solved for $A_{st}$. An alternative approach is to calculate $x_u$ from $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$ and then find $A_{st}$.

    **Simplified Formula for $A_{st}$ (Singly Reinforced):**
    $A_{st} = \frac{M_u}{0.87 f_y (d - 0.42 x_u)}$
    Where $x_u$ is determined from the bending moment equation.
    Alternatively, if $M_u \le M_{u,lim}$:
    $A_{st} = \frac{M_u}{0.87 f_y z}$ where $z = j d$, and $j$ depends on $x_u/d$.
    However, it's more practical to directly calculate $A_{st}$ using the moment capacity formula and solving for $A_{st}$ or using pre-calculated tables/charts.

    **Simplified calculation using lever arm 'z':**
    Calculate $x_u/d$ ratio from the moment capacity formula: $M_u = 0.36 b d^2 f_{ck} (1 - 0.42 x_u/d)$.
    Then find the lever arm $z = d(1 - 0.42 x_u/d)$.
    Finally, $A_{st} = M_u / (0.87 f_y z)$.

*   **Provide Reinforcement:**
    *   **Main Reinforcement (along shorter span):** $A_{st}$ is provided in bars spaced along the longer span.
    *   **Distribution Reinforcement (along longer span):** Provided at right angles to the main reinforcement to distribute loads and prevent cracking. As per IS 456:2000 Clause 26.5.2.3, minimum steel is provided.
        *   $A_{st,min} = \frac{0.12 b D}{100}$ or $\frac{0.15 b D}{100}$ for HYSD bars.
        *   Spacing of main bars: $s_1 \le \frac{A_{st}}{A_{st,provided}} \times 1000$ or $3 \times D$ or $300$ mm, whichever is smaller.
        *   Spacing of distribution bars: $s_2 \le 3 \times D$ or $300$ mm, whichever is smaller.

#### 2.6 Minimum and Maximum Reinforcement

*   **Minimum Reinforcement ($A_{st,min}$):** To control cracking.
    *   For Fe 250 steel: $A_{st,min} = \frac{0.15 b D}{100}$
    *   For Fe 415, Fe 500 steel: $A_{st,min} = \frac{0.12 b D}{100}$
    *   Where $b$ is the width (1000 mm for unit width) and $D$ is the overall depth.
*   **Maximum Reinforcement ($A_{st,max}$):** To ensure ductility and prevent brittle failure.
    *   $A_{st,max} = 0.04 b D$ (for tension reinforcement).

#### 2.7 Shear Design

While bending is critical, shear must also be checked. Since slabs are typically shallow, shear forces are usually low, and nominal reinforcement is sufficient.

*   **Calculate Shear Force ($V_u$):**
    *   For simply supported slabs: $V_u = w_u L_{eff} / 2$ at supports.
    *   For continuous slabs: Use coefficients from IS 456:2000, Table 13 or calculate shear force diagrams. Typically considered at a distance of effective depth from the support face.
*   **Calculate Nominal Shear Stress ($\tau_v$):**
    $\tau_v = V_u / (b d)$
    where $b$ is the width (1000 mm) and $d$ is the effective depth.
*   **Check against Permissible Shear Stress ($\tau_{c,max}$):**
    *   The nominal shear stress $\tau_v$ should not exceed $\tau_{c,max}$ for the concrete grade. This is a check for the concrete's shear capacity.
*   **Check against Permissible Shear Stress ($\tau_c$):**
    *   Find $\tau_c$ from IS 456:2000, Table 19, based on the percentage of tension reinforcement ($p_t = 100 A_{st} / b d$).
    *   If $\tau_v \le \tau_c$, no shear reinforcement is required.
    *   If $\tau_c < \tau_v \le \tau_{c,max}$, nominal shear reinforcement (stirrups) is required as per Clause 26.5.1.6. However, in slabs, bent-up bars or shear reinforcement is rarely provided unless the shear stress is very high. If shear reinforcement is needed, it's usually provided by bent-up bars.

#### 2.8 Deflection Control

*   **Basic Span to Effective Depth Ratios (as per IS 456:2000, Table 4):** These ratios are for simply supported slabs. For cantilever and continuous slabs, modification factors apply.
    *   Simply Supported: $L_{eff}/d = 20$
    *   Continuous: $L_{eff}/d = 26$
    *   Cantilever: $L_{eff}/d = 7$
*   **Modification Factors for Tension Reinforcement:** If the tension steel percentage exceeds $p_t = 0.5\%$, the basic ratios are reduced as per Clause 23.2.1 (c).
    *   Modification factor $= 0.5 + \frac{250 + p_t}{12 p_t}$ (for Fe 415 steel, $p_t$ is in percent).
    *   For Fe 250 steel: $0.5 + \frac{100 + p_t}{50 p_t}$
    *   For Fe 500 steel: $0.5 + \frac{350 + p_t}{15 p_t}$
*   **Maximum Allowable Deflection:**
    *   For spans up to 10 m: 2.5 mm or $L_{span}/250$.
    *   For spans greater than 10 m: $L_{span}/250 + 2.5$ mm.
*   **Design Check:** $L_{eff} / d \le (\text{Basic Ratio}) \times (\text{Modification Factor})$

---

### 3. Numerical Problems

Let's illustrate the design process with numerical examples.

**Example 1: Simply Supported One-Way Slab**

**Problem:** Design a simply supported one-way slab spanning 4 meters, supporting a live load of 2 kN/m² and a floor finish load of 1 kN/m². Use M20 concrete and Fe 415 steel.

**Solution:**

**1. Loads:**
*   **Self-weight of slab:** Assume overall depth $D = 120$ mm = 0.12 m (typical for 4m span).
    Self-weight = $25 \times D = 25 \times 0.12 = 3.0$ kN/m²
*   **Dead Load (DL):** Self-weight + Floor finish = $3.0 + 1.0 = 4.0$ kN/m²
*   **Live Load (LL):** $2.0$ kN/m²
*   **Factored Load ($w_u$):** $1.5 \times DL + 1.5 \times LL = 1.5 \times 4.0 + 1.5 \times 2.0 = 6.0 + 3.0 = 9.0$ kN/m²

**2. Effective Span ($L_{eff}$):**
*   Clear span = 4 m.
*   Assume beam width = 300 mm. Support projection = 150 mm.
*   $L_{eff} =$ Least of (Clear span + effective depth) and (Center-to-center span).
*   Let's assume $d \approx 0.06 \times L_{eff} = 0.06 \times 4000 = 240$ mm.
*   $L_{eff} = 4000 + 240 = 4240$ mm.
*   Center-to-center span = Clear span + 2 * (beam width / 2) = $4000 + 300 = 4300$ mm.
*   So, $L_{eff} = 4240$ mm.

**3. Design for Flexure:**
*   **Bending Moment ($M_u$):** For simply supported slab, $M_u = w_u L_{eff}^2 / 8$.
    $M_u = (9.0 \times (4.24)^2) / 8 = (9.0 \times 17.9776) / 8 = 161.8 / 8 = 20.225$ kNm/m.
*   **Effective Depth (d):**
    Check deflection. For simply supported slab, basic $L_{eff}/d = 20$.
    $d = L_{eff} / 20 = 4240 / 20 = 212$ mm.
    Let's choose $d = 220$ mm for safety and ease of bar placement.
    Overall depth $D = d + (\text{cover} + \text{bar radius}) \approx 220 + 20 + 8 = 248$ mm. Let's assume $D = 250$ mm.
    Recalculate self-weight: $25 \times 0.25 = 6.25$ kN/m².
    Recalculate DL: $6.25 + 1.0 = 7.25$ kN/m².
    Recalculate $w_u$: $1.5 \times 7.25 + 1.5 \times 2.0 = 10.875 + 3.0 = 13.875$ kN/m².
    Recalculate $L_{eff}$ for $d=220$: $L_{eff} = 4000 + 220 = 4220$ mm. (Center to center span is still 4300 mm).
    Recalculate $M_u = (13.875 \times (4.22)^2) / 8 = (13.875 \times 17.8084) / 8 = 246.9 / 8 = 30.86$ kNm/m.
*   **Limiting Moment of Resistance ($M_{u,lim}$):** For M20 and Fe 415.
    $x_{u,max}/d = 0.48$.
    $M_{u,lim} = 0.36 \times b \times d^2 \times f_{ck} \times (1 - 0.42 x_{u,max}/d)$
    $M_{u,lim} = 0.36 \times 1000 \times (220)^2 \times 20 \times (1 - 0.42 \times 0.48)$
    $M_{u,lim} = 0.36 \times 1000 \times 48400 \times 20 \times (1 - 0.2016)$
    $M_{u,lim} = 333.55 \times 10^6$ Nmm = $333.55$ kNm.
*   Since $M_u (30.86 \text{ kNm}) < M_{u,lim} (333.55 \text{ kNm})$, the slab is singly reinforced.
*   **Area of Tension Steel ($A_{st}$):**
    We need to find the lever arm 'z'.
    $M_u = 0.87 f_y A_{st} z$
    Let's find $x_u$:
    $M_u = 0.36 b d^2 f_{ck} (1 - 0.42 x_u/d)$
    $30.86 \times 10^6 = 0.36 \times 1000 \times (220)^2 \times 20 \times (1 - 0.42 x_u/220)$
    $30.86 \times 10^6 = 333.55 \times 10^6 \times (1 - 0.00191 x_u)$
    $0.0925 = 1 - 0.00191 x_u$
    $0.00191 x_u = 1 - 0.0925 = 0.9075$
    $x_u = 0.9075 / 0.00191 \approx 475$ mm. This is incorrect. The formula for $M_u$ using $x_u$ is not directly for finding $A_{st}$ like this.

    Let's use the formula directly for $A_{st}$:
    $M_u = 0.87 f_y A_{st} (d - 0.42 x_u)$
    $x_u = \frac{0.87 f_y A_{st}}{0.36 b f_{ck}}$
    Substitute $x_u$:
    $M_u = 0.87 f_y A_{st} (d - 0.42 \frac{0.87 f_y A_{st}}{0.36 b f_{ck}})$
    $30.86 \times 10^6 = 0.87 \times 415 \times A_{st} (220 - 0.42 \frac{0.87 \times 415 \times A_{st}}{0.36 \times 1000 \times 20})$
    $30.86 \times 10^6 = 361.05 \times A_{st} (220 - 0.42 \frac{361.05 A_{st}}{7200})$
    $30.86 \times 10^6 = 361.05 \times A_{st} (220 - 0.000208 A_{st})$
    $30.86 \times 10^6 = 79431 A_{st} - 0.075 A_{st}^2$
    This is a quadratic equation. A simpler approach is to find the lever arm $z$ first.

    **Using Lever Arm 'z':**
    First, find the ratio $x_u/d$ that corresponds to $M_u$.
    $M_u = 0.36 b d^2 f_{ck} (1 - 0.42 x_u/d)$
    $30.86 \times 10^6 = 0.36 \times 1000 \times (220)^2 \times 20 \times (1 - 0.42 x_u/220)$
    $30.86 \times 10^6 = 333.55 \times 10^6 \times (1 - 0.00191 x_u)$
    $0.0925 = 1 - 0.00191 x_u \implies x_u = 475$ mm. Still incorrect calculation somewhere.

    Let's recalculate $M_{u,lim}$ to find the ratio first.
    $M_{u,lim} = 0.36 \times 1000 \times (220)^2 \times 20 \times (1 - 0.42 \times 0.48) = 333.55 \times 10^6 \times (1 - 0.2016) = 333.55 \times 10^6 \times 0.7984 = 266.2 \times 10^6$ Nmm = 266.2 kNm.
    So $M_u = 30.86$ kNm is indeed much less than $M_{u,lim}$.

    Let's assume a lever arm 'z' first. For Fe 415 steel, $x_u/d = 0.48$ is for balanced. Since $M_u$ is small, $x_u/d$ will be smaller. A safe assumption for z is $0.9d$ to $0.95d$. Let's try $z = 0.92d = 0.92 \times 220 = 202.4$ mm.
    $A_{st} = M_u / (0.87 f_y z) = (30.86 \times 10^6) / (0.87 \times 415 \times 202.4)$
    $A_{st} = (30.86 \times 10^6) / (73375.8)$
    $A_{st} = 420.5$ mm².

    Let's verify the $x_u$ with this $A_{st}$:
    $x_u = \frac{0.87 f_y A_{st}}{0.36 b f_{ck}} = \frac{0.87 \times 415 \times 420.5}{0.36 \times 1000 \times 20} = \frac{152080.7}{7200} = 21.12$ mm.
    $x_u/d = 21.12 / 220 = 0.096$. This is well below the limiting $x_u/d$ of 0.48.

    **Minimum steel:**
    $A_{st,min} = \frac{0.12 b D}{100} = \frac{0.12 \times 1000 \times 250}{100} = 300$ mm².
    Required $A_{st} = 420.5$ mm². Since $420.5 > 300$, use $A_{st} = 420.5$ mm².

    **Provide Reinforcement:**
    Using 8 mm diameter bars: Area of one bar $= \pi (8)^2 / 4 = 50.26$ mm².
    Number of bars = $420.5 / 50.26 = 8.36$. Provide 9 bars of 8 mm diameter.
    Total area provided = $9 \times 50.26 = 452.34$ mm².
    Spacing of main bars:
    Spacing $s = \frac{\text{width}}{\text{number of bars} - 1} \times \text{bar area} \times \frac{1000}{A_{st}}$ No, this is not right.
    Spacing $s = \frac{1000 \times (\text{Area of one bar})}{A_{st}} = \frac{1000 \times 50.26}{420.5} \approx 119.5$ mm.
    Spacing should be $\le 3d$ or $300$ mm, whichever is smaller. $3d = 3 \times 220 = 660$ mm. $300$ mm.
    Spacing $\le 300$ mm.
    The actual spacing of 9 bars in 1000 mm width is $1000 / (9-1) = 125$ mm.
    Provide 8 mm diameter bars @ 125 mm c/c.

**4. Distribution Reinforcement:**
*   $A_{st,min} = 300$ mm² for 1 meter width.
*   Using 8 mm diameter bars: Area of one bar $= 50.26$ mm².
*   Required spacing for distribution bars:
    Spacing $s = \frac{1000 \times (\text{Area of one bar})}{A_{st,min}} = \frac{1000 \times 50.26}{300} \approx 167.5$ mm.
*   Spacing should be $\le 3D$ or $300$ mm. $3D = 3 \times 250 = 750$ mm. $300$ mm.
*   Provide 8 mm diameter bars @ 160 mm c/c.

**5. Shear Design:**
*   **Shear Force ($V_u$):** At the support for simply supported slab, $V_u = w_u L_{eff} / 2$.
    $V_u = (13.875 \times 4.22) / 2 = 29.27$ kN/m.
*   **Nominal Shear Stress ($\tau_v$):**
    $\tau_v = V_u / (b d) = (29.27 \times 1000) / (1000 \times 220) = 0.133$ N/mm².
*   **Check against Permissible Shear Stress ($\tau_c$):**
    $p_t = 100 A_{st} / (b d) = 100 \times 452.34 / (1000 \times 220) = 0.2056 \%$.
    From IS 456:2000, Table 19, for $p_t = 0.2056 \%$ and M20 concrete, $\tau_c$ is between 0.28 and 0.30 N/mm². Let's take $\tau_c = 0.29$ N/mm² (by interpolation or from charts).
*   Since $\tau_v (0.133) < \tau_c (0.29)$, no shear reinforcement is required.

**6. Deflection Check:**
*   Actual $L_{eff}/d = 4220 / 220 = 19.18$.
*   Basic $L_{eff}/d$ for simply supported slab $= 20$.
*   Percentage of tension reinforcement $p_t = 0.2056 \%$.
*   Modification factor for $p_t = 0.2056 \%$ (Fe 415):
    $\text{MF} = 0.5 + \frac{250 + p_t}{12 p_t} = 0.5 + \frac{250 + 0.2056}{12 \times 0.2056} = 0.5 + \frac{250.2056}{2.4672} = 0.5 + 101.41 = 101.91$. This is a very high factor, indicating the basic $L_{eff}/d$ is very conservative for low steel percentages.
    Let's re-check the formula or understanding. The formula is for modification of the basic ratio *if* $p_t$ exceeds 0.5%. If $p_t$ is less than 0.5%, the basic ratio is used.
    In our case, $p_t = 0.2056 \% < 0.5\%$. So, the modification factor is 1.0.
*   Allowable $L_{eff}/d = (\text{Basic Ratio}) \times (\text{MF}) = 20 \times 1.0 = 20$.
*   Actual $L_{eff}/d (19.18) \le$ Allowable $L_{eff}/d (20)$.
*   Deflection is within limits.

**Final Design:**
*   **Slab Thickness:** 250 mm overall.
*   **Main Reinforcement (spanning 4m):** 8 mm diameter bars @ 125 mm c/c.
*   **Distribution Reinforcement (spanning 3m):** 8 mm diameter bars @ 160 mm c/c.
*   **Concrete Grade:** M20.
*   **Steel Grade:** Fe 415.
*   **Cover:** 25 mm.

---

**Example 2: Continuous One-Way Slab**

**Problem:** Design a continuous one-way slab supported on beams at 3 m intervals. The slab is subjected to a live load of 3 kN/m² and a floor finish load of 1.5 kN/m². Use M20 concrete and Fe 415 steel.

**Solution:**

**1. Loads:**
*   **Self-weight:** Assume $D=120$ mm = 0.12 m. Self-weight $= 25 \times 0.12 = 3.0$ kN/m².
*   **Dead Load (DL):** $3.0 + 1.5 = 4.5$ kN/m².
*   **Live Load (LL):** $3.0$ kN/m².
*   **Factored Load ($w_u$):** $1.5 \times 4.5 + 1.5 \times 3.0 = 6.75 + 4.5 = 11.25$ kN/m².

**2. Effective Span ($L_{eff}$):**
*   Clear span = 3 m.
*   Assume beam width = 300 mm.
*   $L_{eff} = 3000 + 220$ (assumed effective depth) $= 3220$ mm. (Center-to-center span = $3000 + 300 = 3300$ mm).
*   $L_{eff} = 3220$ mm.

**3. Design for Flexure:**
*   **Effective Depth (d):**
    For continuous slab, basic $L_{eff}/d = 26$.
    $d = L_{eff} / 26 = 3220 / 26 = 123.8$ mm.
    Let's choose $d = 125$ mm.
    Overall depth $D = d + (\text{cover} + \text{bar radius}) \approx 125 + 20 + 8 = 153$ mm. Let's assume $D = 150$ mm.
    Recalculate self-weight: $25 \times 0.15 = 3.75$ kN/m².
    Recalculate DL: $3.75 + 1.5 = 5.25$ kN/m².
    Recalculate $w_u$: $1.5 \times 5.25 + 1.5 \times 3.0 = 7.875 + 4.5 = 12.375$ kN/m².
    Recalculate $L_{eff}$ for $d=125$: $L_{eff} = 3000 + 125 = 3125$ mm. (Center to center span is still 3300 mm).
*   **Bending Moment ($M_u$):** For a continuous slab with equal spans, bending moments at mid-span and supports are:
    *   Mid-span moment: $+w_u L_{eff}^2 / 16 = (12.375 \times (3.125)^2) / 16 = (12.375 \times 9.7656) / 16 = 120.89 / 16 = 7.556$ kNm/m.
    *   Support moment: $-w_u L_{eff}^2 / 12 = (12.375 \times (3.125)^2) / 12 = 120.89 / 12 = 10.074$ kNm/m.
    We need to design for the larger magnitude moment, which is the negative moment (10.074 kNm/m) at the supports. Let's use $M_u = 10.074$ kNm/m.
*   **Limiting Moment of Resistance ($M_{u,lim}$):** For M20 and Fe 415 with $d=125$ mm.
    $x_{u,max}/d = 0.48$.
    $M_{u,lim} = 0.36 \times 1000 \times (125)^2 \times 20 \times (1 - 0.42 \times 0.48)$
    $M_{u,lim} = 0.36 \times 1000 \times 15625 \times 20 \times (0.7984)$
    $M_{u,lim} = 89.71 \times 10^6$ Nmm = $89.71$ kNm.
*   Since $M_u (10.074 \text{ kNm}) < M_{u,lim} (89.71 \text{ kNm})$, the slab is singly reinforced.
*   **Area of Tension Steel ($A_{st}$):**
    Let's find the lever arm $z$.
    $M_u = 0.36 b d^2 f_{ck} (1 - 0.42 x_u/d)$
    $10.074 \times 10^6 = 0.36 \times 1000 \times (125)^2 \times 20 \times (1 - 0.42 x_u/125)$
    $10.074 \times 10^6 = 112.5 \times 10^6 \times (1 - 0.00336 x_u)$
    $0.0895 = 1 - 0.00336 x_u$
    $0.00336 x_u = 1 - 0.0895 = 0.9105$
    $x_u = 0.9105 / 0.00336 \approx 271$ mm. This calculation is for $x_u$ directly, not $x_u/d$.

    Let's find $x_u/d$:
    $10.074 \times 10^6 = 112.5 \times 10^6 \times (1 - 0.42 x_u/125)$
    $0.0895 = 1 - 0.42 (x_u/125)$
    $0.42 (x_u/125) = 1 - 0.0895 = 0.9105$
    $x_u/125 = 0.9105 / 0.42 = 2.1678$
    $x_u = 2.1678 \times 125 = 271$ mm. This means $x_u > d$, which is wrong. The issue is the assumption of the moment capacity formula $M_u = 0.36 b d^2 f_{ck} (1 - 0.42 x_u/d)$. This formula is valid when $x_u \le x_{u,max}$.

    Let's use the lever arm 'z' approach properly.
    $M_u = 0.87 f_y A_{st} z$
    We need to find $z$. $z = d - 0.42 x_u$.
    $x_u = \frac{0.87 f_y A_{st}}{0.36 b f_{ck}}$
    This leads to the quadratic form as in Example 1.

    A simpler approach: Since $M_u$ is small, assume $z \approx 0.9d$.
    $z = 0.9 \times 125 = 112.5$ mm.
    $A_{st} = M_u / (0.87 f_y z) = (10.074 \times 10^6) / (0.87 \times 415 \times 112.5)$
    $A_{st} = (10.074 \times 10^6) / (40503.75) = 248.7$ mm².

    Let's verify $x_u$ with this $A_{st}$:
    $x_u = \frac{0.87 f_y A_{st}}{0.36 b f_{ck}} = \frac{0.87 \times 415 \times 248.7}{0.36 \times 1000 \times 20} = \frac{90093.7}{7200} = 12.51$ mm.
    $x_u/d = 12.51 / 125 = 0.10$. This is well below the limiting $x_u/d$ of 0.48.
    Lever arm $z = d - 0.42 x_u = 125 - 0.42 \times 12.51 = 125 - 5.25 = 119.75$ mm.
    Recalculate $A_{st}$ using this $z$:
    $A_{st} = M_u / (0.87 f_y z) = (10.074 \times 10^6) / (0.87 \times 415 \times 119.75)$
    $A_{st} = (10.074 \times 10^6) / (43219.6) = 233.1$ mm².

    **Minimum steel:**
    $A_{st,min} = \frac{0.12 b D}{100} = \frac{0.12 \times 1000 \times 150}{100} = 180$ mm².
    Required $A_{st} = 233.1$ mm². Since $233.1 > 180$, use $A_{st} = 233.1$ mm².

    **Provide Reinforcement (for support):**
    Using 8 mm diameter bars: Area of one bar $= 50.26$ mm².
    Number of bars $= 233.1 / 50.26 = 4.64$. Provide 5 bars of 8 mm diameter.
    Total area provided = $5 \times 50.26 = 251.3$ mm².
    Spacing of main bars: $1000 / (5-1) = 250$ mm.
    Provide 8 mm diameter bars @ 250 mm c/c at the supports.

*   **Mid-span Reinforcement:**
    $M_u = +7.556$ kNm/m.
    Assume $z \approx 0.9d = 112.5$ mm.
    $A_{st} = (7.556 \times 10^6) / (0.87 \times 415 \times 112.5) = 175.2$ mm².
    Check $x_u$: $x_u = \frac{0.87 \times 415 \times 175.2}{7200} = 8.77$ mm.
    $z = 125 - 0.42 \times 8.77 = 125 - 3.68 = 121.32$ mm.
    Recalculate $A_{st} = (7.556 \times 10^6) / (0.87 \times 415 \times 121.32) = 162.6$ mm².
    Minimum steel is 180 mm².
    Required $A_{st} = 162.6$ mm². Since $162.6 < 180$, provide minimum steel.
    Number of bars $= 180 / 50.26 = 3.58$. Provide 4 bars of 8 mm diameter.
    Spacing = $1000 / (4-1) = 333$ mm. This is $>300$.
    So, provide 4 bars of 8 mm diameter @ 300 mm c/c (or 5 bars @ 250 mm c/c for continuity if needed). Let's provide 5 bars of 8mm @ 250 c/c for uniformity.

**4. Distribution Reinforcement:**
*   $A_{st,min} = 180$ mm².
*   Using 8 mm diameter bars: Area of one bar $= 50.26$ mm².
*   Spacing $s = \frac{1000 \times 50.26}{180} \approx 279$ mm.
*   Spacing should be $\le 3D$ or $300$ mm. $3D = 3 \times 150 = 450$ mm. $300$ mm.
*   Provide 8 mm diameter bars @ 275 mm c/c.

**5. Shear Design:**
*   **Shear Force ($V_u$):** At a distance of $d$ from the support face for continuous slabs. Let's consider the support moment of $10.074$ kNm/m.
    The shear force at the support face is often taken as $w_u L_{eff} / 2$.
    $V_u$ at support face = $(12.375 \times 3.125) / 2 = 19.34$ kN/m.
    Shear force at $d$ from support face = $V_u - w_u \times d = 19.34 - 12.375 \times 0.125 = 19.34 - 1.55 = 17.79$ kN/m.
*   **Nominal Shear Stress ($\tau_v$):**
    $\tau_v = V_u / (b d) = (17.79 \times 1000) / (1000 \times 125) = 0.142$ N/mm².
*   **Check against Permissible Shear Stress ($\tau_c$):**
    $p_t = 100 A_{st} / (b d) = 100 \times 251.3 / (1000 \times 125) = 0.201 \%$.
    From IS 456:2000, Table 19, for $p_t = 0.201 \%$ and M20 concrete, $\tau_c \approx 0.29$ N/mm².
*   Since $\tau_v (0.142) < \tau_c (0.29)$, no shear reinforcement is required.

**6. Deflection Check:**
*   Actual $L_{eff}/d = 3125 / 125 = 25$.
*   Basic $L_{eff}/d$ for continuous slab $= 26$.
*   Percentage of tension reinforcement $p_t = 0.201 \%$.
*   Since $p_t < 0.5\%$, MF = 1.0.
*   Allowable $L_{eff}/d = 26 \times 1.0 = 26$.
*   Actual $L_{eff}/d (25) \le$ Allowable $L_{eff}/d (26)$.
*   Deflection is within limits.

**Final Design:**
*   **Slab Thickness:** 150 mm overall.
*   **Main Reinforcement (spanning 3m):**
    *   At supports: 8 mm diameter bars @ 250 mm c/c.
    *   At mid-span: 8 mm diameter bars @ 250 mm c/c (to provide minimum steel and for continuity).
*   **Distribution Reinforcement (spanning 3m):** 8 mm diameter bars @ 275 mm c/c.
*   **Concrete Grade:** M20.
*   **Steel Grade:** Fe 415.
*   **Cover:** 25 mm.

---

### 4. Practice Questions

**Question 1:**
A simply supported one-way slab spans 5 meters. It carries a characteristic live load of 4 kN/m² and a floor finish load of 1.2 kN/m². The support beams are 300 mm wide. Design the slab using M25 concrete and Fe 415 steel. Check for bending, shear, and deflection. Assume a cover of 25 mm.

**Question 2:**
A continuous one-way slab spans between beams at 4 m intervals. The characteristic imposed load is 5 kN/m². The self-weight of the slab and finishes is 2.5 kN/m². Design the slab for the critical section (support or mid-span) using M20 concrete and Fe 415 HYSD bars. Check for bending, shear, and deflection. Assume a cover of 25 mm.

---

### 5. Answers to Practice Questions

**Answer to Question 1:**

1.  **Loads:**
    *   Assume $D = 150$ mm (0.15 m). Self-weight = $25 \times 0.15 = 3.75$ kN/m².
    *   DL = $3.75 + 1.2 = 4.95$ kN/m².
    *   LL = $4.0$ kN/m².
    *   $w_u = 1.5 \times 4.95 + 1.5 \times 4.0 = 7.425 + 6.0 = 13.425$ kN/m².

2.  **Effective Span ($L_{eff}$):**
    *   Assume $d = 125$ mm. $L_{eff} = 5000 + 125 = 5125$ mm.
    *   Center-to-center span = $5000 + 300 = 5300$ mm.
    *   $L_{eff} = 5125$ mm.

3.  **Design for Flexure:**
    *   $M_u = w_u L_{eff}^2 / 8 = (13.425 \times (5.125)^2) / 8 = 44.12$ kNm/m.
    *   Check $d$: Basic $L_{eff}/d = 20$. $d = 5125 / 20 = 256.25$ mm.
    *   Let $d = 260$ mm. $D = 260 + 25 + 8 = 293$ mm. Let $D = 300$ mm.
    *   Recalculate self-weight = $25 \times 0.30 = 7.5$ kN/m².
    *   DL = $7.5 + 1.2 = 8.7$ kN/m².
    *   $w_u = 1.5 \times 8.7 + 1.5 \times 4.0 = 13.05 + 6.0 = 19.05$ kN/m².
    *   $L_{eff} = 5000 + 260 = 5260$ mm.
    *   $M_u = (19.05 \times (5.26)^2) / 8 = 66.17$ kNm/m.
    *   $M_{u,lim}$ (M25, Fe415, $d=260$ mm): $M_{u,lim} = 0.36 \times 1000 \times (260)^2 \times 25 \times (1 - 0.42 \times 0.48) = 695.2$ kNm.
    *   $M_u (66.17) < M_{u,lim} (695.2)$. Singly reinforced.
    *   $A_{st}$: Assume $z = 0.92d = 0.92 \times 260 = 239.2$ mm.
    *   $A_{st} = 66.17 \times 10^6 / (0.87 \times 415 \times 239.2) = 334$ mm².
    *   $A_{st,min} = 0.12 \times 1000 \times 300 / 100 = 360$ mm².
    *   Provide $A_{st} = 360$ mm².
    *   Using 10 mm bars (Area = 78.5 mm²): Number of bars = $360 / 78.5 = 4.58$. Provide 5 bars of 10 mm.
    *   Spacing $= 1000 / (5-1) = 250$ mm. (Max spacing $3d = 780$ mm, $300$ mm).
    *   Main Bars: 10 mm dia @ 250 mm c/c.

4.  **Distribution Reinforcement:**
    *   $A_{st,min} = 360$ mm².
    *   Using 10 mm bars: Number of bars = $360 / 78.5 = 4.58$. Provide 5 bars of 10 mm.
    *   Spacing $= 1000 / (5-1) = 250$ mm. (Max spacing $3D = 900$ mm, $300$ mm).
    *   Distribution Bars: 10 mm dia @ 250 mm c/c.

5.  **Shear Design:**
    *   $V_u = w_u L_{eff} / 2 = 19.05 \times 5.26 / 2 = 50.08$ kN/m.
    *   $\tau_v = V_u / (b d) = 50.08 \times 1000 / (1000 \times 260) = 0.193$ N/mm².
    *   $p_t = 100 \times 360 / (1000 \times 260) = 0.138 \%$.
    *   For M25, $p_t = 0.138\%$, $\tau_c \approx 0.31$ N/mm².
    *   $\tau_v (0.193) < \tau_c (0.31)$. No shear reinforcement needed.

6.  **Deflection Check:**
    *   Actual $L_{eff}/d = 5260 / 260 = 20.23$.
    *   Basic $L_{eff}/d = 20$.
    *   $p_t = 0.138 \% < 0.5\%$, MF = 1.0.
    *   Allowable $L_{eff}/d = 20$.
    *   Actual $L_{eff}/d (20.23) >$ Allowable $L_{eff}/d (20)$. Deflection is likely exceeded.
    *   **Solution:** Increase effective depth or reduce load. Let's increase $d$.
    *   Try $d = 270$ mm. $D = 270 + 25 + 8 = 303$ mm. Let $D = 300$ mm (no change).
    *   Let's go back to $d=260$ and check minimum depth required.
    *   Allowable $L_{eff}/d = 20$. So $d = L_{eff}/20 = 5260/20 = 263$ mm.
    *   Need $d \ge 263$ mm. Let's use $d = 270$ mm.
    *   $D = 270 + 25 + 8 = 303$ mm. Let $D = 300$ mm (still slightly less for cover + radius). Use $D=300$.
    *   If $D=300$, $d=267$ mm (assuming 25mm cover + 8mm bar radius, $300 - 25 - 8 = 267$).
    *   Recalculate $L_{eff}$ for $d=267$: $L_{eff} = 5000 + 267 = 5267$ mm.
    *   Recalculate $w_u$ (assuming $D=300$): Self-weight $7.5$, DL $8.7$, $w_u = 19.05$ kN/m² (no change).
    *   $M_u = (19.05 \times (5.267)^2) / 8 = 66.3$ kNm/m.
    *   $A_{st} = 66.3 \times 10^6 / (0.87 \times 415 \times (0.92 \times 267)) = 330$ mm².
    *   $A_{st,min} = 0.12 \times 1000 \times 300 / 100 = 360$ mm².
    *   Provide $A_{st} = 360$ mm². Using 10 mm bars @ 250 mm c/c.
    *   Check deflection with $d=267$: Actual $L_{eff}/d = 5267 / 267 = 19.72$.
    *   Allowable $L_{eff}/d = 20$.
    *   Actual $19.72 \le$ Allowable $20$. Deflection is OK.

    **Final Design for Q1:**
    *   **Slab Thickness:** 300 mm overall.
    *   **Main Reinforcement (spanning 5m):** 10 mm dia @ 250 mm c/c.
    *   **Distribution Reinforcement (spanning 3m):** 10 mm dia @ 250 mm c/c.
    *   **Concrete Grade:** M25.
    *   **Steel Grade:** Fe 415.
    *   **Cover:** 25 mm.

---

**Answer to Question 2:**

1.  **Loads:**
    *   Assume $D = 120$ mm (0.12 m). Self-weight = $25 \times 0.12 = 3.0$ kN/m².
    *   DL = $3.0 + 2.5 = 5.5$ kN/m².
    *   LL = $5.0$ kN/m².
    *   $w_u = 1.5 \times 5.5 + 1.5 \times 5.0 = 8.25 + 7.5 = 15.75$ kN/m².

2.  **Effective Span ($L_{eff}$):**
    *   Assume $d = 125$ mm. $L_{eff} = 4000 + 125 = 4125$ mm.
    *   Center-to-center span = $4000 + 300 = 4300$ mm.
    *   $L_{eff} = 4125$ mm.

3.  **Design for Flexure:**
    *   Check $d$: Basic $L_{eff}/d = 26$. $d = 4125 / 26 = 158.65$ mm.
    *   Let $d = 160$ mm. $D = 160 + 25 + 8 = 193$ mm. Let $D = 190$ mm.
    *   Recalculate self-weight = $25 \times 0.19 = 4.75$ kN/m².
    *   DL = $4.75 + 2.5 = 7.25$ kN/m².
    *   $w_u = 1.5 \times 7.25 + 1.5 \times 5.0 = 10.875 + 7.5 = 18.375$ kN/m².
    *   $L_{eff} = 4000 + 160 = 4160$ mm.
    *   Mid-span moment: $+w_u L_{eff}^2 / 16 = (18.375 \times (4.16)^2) / 16 = 79.3$ kNm/m.
    *   Support moment: $-w_u L_{eff}^2 / 12 = (18.375 \times (4.16)^2) / 12 = 105.7$ kNm/m.
    *   Critical moment $M_u = 105.7$ kNm/m.
    *   $M_{u,lim}$ (M20, Fe415, $d=160$ mm): $M_{u,lim} = 0.36 \times 1000 \times (160)^2 \times 20 \times (1 - 0.42 \times 0.48) = 300.6$ kNm.
    *   $M_u (105.7) < M_{u,lim} (300.6)$. Singly reinforced.
    *   $A_{st}$: For support moment $M_u = 105.7$ kNm/m.
    *   Assume $z = 0.92d = 0.92 \times 160 = 147.2$ mm.
    *   $A_{st} = 105.7 \times 10^6 / (0.87 \times 415 \times 147.2) = 170.7$ mm².
    *   $A_{st,min} = 0.12 \times 1000 \times 190 / 100 = 228$ mm².
    *   Provide $A_{st} = 228$ mm².
    *   Using 8 mm bars (Area = 50.26 mm²): Number of bars = $228 / 50.26 = 4.53$. Provide 5 bars of 8 mm.
    *   Spacing $= 1000 / (5-1) = 250$ mm. (Max spacing $3d = 480$ mm, $300$ mm).
    *   Main Bars (at supports): 8 mm dia @ 250 mm c/c.

    *   $A_{st}$ for mid-span moment $M_u = 79.3$ kNm/m.
    *   Assume $z = 0.92d = 147.2$ mm.
    *   $A_{st} = 79.3 \times 10^6 / (0.87 \times 415 \times 147.2) = 128.1$ mm².
    *   $A_{st,min} = 228$ mm².
    *   Provide $A_{st} = 228$ mm². Using 8 mm bars @ 250 mm c/c (for continuity and minimum reinforcement).

4.  **Distribution Reinforcement:**
    *   $A_{st,min} = 228$ mm².
    *   Using 8 mm bars: Number of bars = $228 / 50.26 = 4.53$. Provide 5 bars of 8 mm.
    *   Spacing $= 1000 / (5-1) = 250$ mm. (Max spacing $3D = 570$ mm, $300$ mm).
    *   Distribution Bars: 8 mm dia @ 250 mm c/c.

5.  **Shear Design:**
    *   $V_u$ at support face = $w_u L_{eff} / 2 = 18.375 \times 4.16 / 2 = 38.22$ kN/m.
    *   $V_u$ at $d$ from support = $38.22 - 18.375 \times 0.16 = 38.22 - 2.94 = 35.28$ kN/m.
    *   $\tau_v = V_u / (b d) = 35.28 \times 1000 / (1000 \times 160) = 0.22$ N/mm².
    *   $p_t = 100 \times 228 / (1000 \times 160) = 0.1425 \%$.
    *   For M20, $p_t = 0.1425\%$, $\tau_c \approx 0.29$ N/mm².
    *   $\tau_v (0.22) < \tau_c (0.29)$. No shear reinforcement needed.

6.  **Deflection Check:**
    *   Actual $L_{eff}/d = 4160 / 160 = 26$.
    *   Basic $L_{eff}/d = 26$.
    *   $p_t = 0.1425 \% < 0.5\%$, MF = 1.0.
    *   Allowable $L_{eff}/d = 26$.
    *   Actual $26 \le$ Allowable $26$. Deflection is OK.

    **Final Design for Q2:**
    *   **Slab Thickness:** 190 mm overall.
    *   **Main Reinforcement (spanning 4m):** 8 mm dia @ 250 mm c/c (for both mid-span and support).
    *   **Distribution Reinforcement (spanning 4m):** 8 mm dia @ 250 mm c/c.
    *   **Concrete Grade:** M20.
    *   **Steel Grade:** Fe 415.
    *   **Cover:** 25 mm.

---

### 6. Important Points to Remember

*   **One-way vs. Two-way:** The span ratio ($L_y/L_x > 2$) is the key.
*   **Effective Span:** Always use the correct definition as per IS 456:2000 for calculating moments.
*   **Load Calculation:** Accurately calculate dead load (including self-weight, which depends on assumed depth) and live load. Apply appropriate load factors.
*   **Moment Coefficients:** Use IS 456:2000 Table 12 for continuous slabs. For simply supported, it's $wL^2/8$.
*   **Design for Critical Moment:** Always design for the moment with the largest magnitude, which is typically the negative moment at supports in continuous slabs.
*   **Minimum Reinforcement:** Crucial for crack control. Use the correct formula based on steel grade.
*   **Distribution Reinforcement:** Required at right angles to main reinforcement.
*   **Shear Check:** Although usually nominal, it's a mandatory check.
*   **Deflection Check:** Critical for serviceability. Ensure the $L_{eff}/d$ ratio satisfies the code requirements with modification factors. If deflection is exceeded, increase the slab depth.
*   **Bar Spacing:** Ensure spacing is practical and adheres to maximum limits.

---

This comprehensive study guide provides the fundamental principles, theoretical basis, and practical design steps for one-way slabs, along with illustrative examples and practice problems. Remember to always refer to the latest version of the relevant Indian Standard codes (IS 456:2000, IS 875 for loads) for precise values and clauses.
