---
title: "Footings subjected to moments-effective width concept-Numerical problems."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811205"
status: "completed"
scrapedAt: "2026-05-20T18:51:57.877Z"
---
# ADVANCED FOUNDATION ENGINEERING - MODULE 1: BEARING CAPACITY OF SHALLOW FOUNDATIONS

## Topic: Footings Subjected to Moments - Effective Width Concept - Numerical Problems

This module focuses on the bearing capacity of shallow foundations when subjected to eccentric loading, specifically the introduction of moments. We will explore how moments affect the distribution of pressure under the footing and introduce the concept of effective width to simplify analysis.

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the effect of moments on the distribution of pressure under a shallow footing.
*   Explain and apply the effective width concept to analyze footings subjected to eccentric loads.
*   Solve numerical problems related to the bearing capacity of footings subjected to moments using the effective width concept.

---

### 1. Introduction to Moments in Foundation Engineering

**1.1. What is a Moment?**

*   A moment is a rotational force. In foundation engineering, it typically arises from eccentric application of loads, wind loads, seismic forces, or applied moments directly to the footing.
*   When a moment is applied to a footing, it causes the resultant force to shift from the geometric center, leading to an uneven distribution of pressure under the foundation.

**1.2. Effect of Moments on Pressure Distribution**

*   **Centric Loading:** When a load is applied at the geometric center of a footing, the pressure distribution is uniform (trapezoidal, but with equal base and top widths). The pressure is given by:
    $p = \frac{P}{A}$
    where $P$ is the axial load and $A$ is the area of the footing.

*   **Eccentric Loading:** When a moment ($M$) is applied in addition to an axial load ($P$), the resultant force ($R$) is no longer at the center. The eccentricity ($e$) is given by:
    $e = \frac{M}{P}$

    The pressure distribution becomes non-uniform. The pressure at any point under the footing can be approximated by combining the axial pressure and the bending stress:
    $p = \frac{P}{A} \pm \frac{M}{Z}$
    where $Z$ is the section modulus of the footing.

    *   **Tension/Reduced Compression:** If the eccentricity is small, the entire base remains in compression, but the pressure is higher on one side.
    *   **Reduced Pressure/Tension Zone:** If the eccentricity is large ($e > B/6$ for a rectangular footing), a portion of the footing base might go into tension. This is problematic as soil generally cannot resist tension. In such cases, the analysis needs to account for this.

**1.3. Consequences of Non-Uniform Pressure**

*   **Differential Settlement:** The uneven pressure distribution leads to differential settlement, where one side of the footing settles more than the other. This can be detrimental to the structure.
*   **Reduced Bearing Capacity:** The effective area under compression is reduced, potentially leading to bearing capacity failure even if the resultant load is within the allowable pressure.

---

### 2. The Effective Width Concept

**2.1. Need for Simplification**

*   Directly analyzing footings with significant eccentricity and potential tension zones can be complex.
*   The effective width concept provides a simplified approach to analyze such cases by assuming a reduced width where the pressure is uniformly distributed.

**2.2. Definition and Principle**

*   The effective width concept, primarily developed by Meyerhof, assumes that when a footing is subjected to eccentric loading, only a reduced width of the footing, known as the **effective width ($B'$)**, is effectively in contact with the soil and carrying the load.
*   The remaining portion of the footing is considered to be in tension or not contributing to the bearing capacity.
*   The pressure distribution under this effective width ($B'$) is assumed to be uniform and equal to the resultant load divided by the effective area.

**2.3. Meyerhof's Effective Width Approach**

Meyerhof proposed that for a rectangular footing of width $B$ and length $L$, subjected to an axial load $P$ and moments $M_x$ and $M_y$ about the centroidal axes $x$ and $y$ respectively, the effective dimensions ($B'$ and $L'$) can be calculated.

*   **For rectangular footings:**
    *   **Effective Width ($B'$):**
        $B' = B - 2e_x$
        where $e_x = \frac{M_y}{P}$ is the eccentricity about the longitudinal axis (y-axis).
        *Condition:* This formula is applied when the resultant load falls within the middle third of the width ($e_x \leq B/6$). If $e_x > B/6$, the entire footing is not in compression, and the effective width concept needs careful application. Meyerhof suggests that if $e_x > B/6$, the effective width becomes:
        $B' = B - 2e_x$  (but $B'$ cannot be less than zero. In practice, the footing is likely to fail in bearing unless reinforced for tension).
        A more practical approach when $e_x > B/6$ is to consider the length $L'$ where the resultant force acts at the center of this length.

    *   **Effective Length ($L'$):**
        $L' = L - 2e_y$
        where $e_y = \frac{M_x}{P}$ is the eccentricity about the transverse axis (x-axis).
        *Condition:* This formula is applied when the resultant load falls within the middle third of the length ($e_y \leq L/6$). If $e_y > L/6$, similar considerations apply as for the width.

*   **Important Note on Effective Width:** The effective width ($B'$) is always considered in the direction of the eccentricity that reduces the width. Similarly, the effective length ($L'$) is in the direction of the eccentricity that reduces the length.

*   **Effective Area ($A'$):**
    $A' = B' \times L'$

**2.4. Modified Bearing Capacity Equation (Meyerhof)**

Meyerhof proposed modification factors for the bearing capacity equation to account for the shape of the footing, depth of embedment, and the inclination of the resultant load. When moments are present, the effective dimensions ($B'$ and $L'$) are used in place of $B$ and $L$.

The general bearing capacity equation is:
$q_{ult} = c'N_c s_c d_c i_c g_c b_c + q N_q s_q d_q i_q g_q b_q + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma i_\gamma g_\gamma b_\gamma$

However, for the purpose of analyzing the *effect of moments on pressure distribution and initial bearing capacity assessment using the effective width concept*, we simplify the problem to determine the allowable bearing pressure under the *effective* area. The effective width concept primarily modifies the geometrical dimensions ($B$ and $L$) used in the calculation.

**Simplified Pressure Calculation using Effective Width:**

The allowable bearing pressure ($q_{allow}$) can be calculated as:
$q_{allow} = \frac{q_{net,allow}}{FS}$

Where $q_{net,allow}$ is the net allowable bearing capacity.

For a footing subjected to an axial load $P$ and moments $M_x, M_y$, the resultant load $P$ is distributed over the effective area $A' = B' \times L'$. The average pressure under the effective width is:

$p_{avg} = \frac{P}{A'} = \frac{P}{B'L'}$

This average pressure is then compared with the allowable bearing pressure for the soil. The footing is considered safe if $p_{avg} \leq q_{allow}$.

**Alternative Interpretation: Maximum Pressure**

Another way to interpret the effective width concept is that the maximum pressure under the footing should not exceed the allowable bearing capacity.

*   If $e_x \leq B/6$ and $e_y \leq L/6$, the maximum pressure is:
    $p_{max} = \frac{P}{BL} (1 + \frac{6e_x}{B} + \frac{6e_y}{L})$

    If $p_{max} \leq q_{allow}$, the footing is safe.

*   When using the effective width concept, the *average* pressure under the effective width is calculated. The assumption is that this average pressure is representative of the critical loading condition.

    $p_{avg} = \frac{P}{B'L'}$

    If $p_{avg} \leq q_{allow}$, the footing is considered safe.

**It is crucial to understand which method is expected in a given context.** Often, the effective width is used to redefine the footing dimensions for subsequent bearing capacity calculations.

---

### 3. Numerical Problems and Solutions

Let's work through some examples to illustrate the application of the effective width concept.

**Problem 1:**

A square footing of size 2m x 2m is subjected to an axial load $P = 200$ kN and a moment $M_x = 50$ kNm about the transverse axis (causing eccentricity along the width). The allowable net bearing capacity of the soil is $q_{net,allow} = 100$ kPa. Determine if the footing is safe.

**Solution 1:**

*   **Footing dimensions:** $B = 2$ m, $L = 2$ m
*   **Axial load:** $P = 200$ kN
*   **Moment:** $M_x = 50$ kNm
*   **Allowable net bearing capacity:** $q_{net,allow} = 100$ kPa = 100 kN/m²

1.  **Calculate eccentricity:**
    The moment $M_x$ is about the transverse axis, causing eccentricity ($e_y$) along the length ($L$). However, in a square footing, both dimensions are the same. Let's assume the moment is applied to cause eccentricity along the width ($B$). So, $e_x = M_y/P$ (if $M_y$ was given) or $e$ along $B$ if $M_x$ is the moment causing eccentricity along $B$. Let's assume $M = 50$ kNm is causing eccentricity along $B$.
    $e = \frac{M}{P} = \frac{50 \text{ kNm}}{200 \text{ kN}} = 0.25 \text{ m}$

2.  **Check if the resultant force is within the middle third:**
    $B/6 = 2 \text{ m} / 6 = 0.333 \text{ m}$
    Since $e = 0.25 \text{ m} \leq 0.333 \text{ m}$, the resultant force is within the middle third of the width.

3.  **Calculate the effective width ($B'$):**
    Using Meyerhof's approach for eccentricity along the width:
    $B' = B - 2e$
    $B' = 2 \text{ m} - 2(0.25 \text{ m}) = 2 \text{ m} - 0.5 \text{ m} = 1.5 \text{ m}$

4.  **Calculate the effective length ($L'$):**
    Since there is no moment about the other axis, $e_y = 0$.
    $L' = L - 2e_y = 2 \text{ m} - 2(0) = 2 \text{ m}$

5.  **Calculate the effective area ($A'$):**
    $A' = B' \times L' = 1.5 \text{ m} \times 2 \text{ m} = 3.0 \text{ m}^2$

6.  **Calculate the average pressure under the effective width:**
    $p_{avg} = \frac{P}{A'} = \frac{200 \text{ kN}}{3.0 \text{ m}^2} = 66.67 \text{ kN/m}^2 = 66.67 \text{ kPa}$

7.  **Compare average pressure with allowable net bearing capacity:**
    $p_{avg} = 66.67 \text{ kPa}$
    $q_{net,allow} = 100 \text{ kPa}$

    Since $p_{avg} \leq q_{net,allow}$, the footing is considered safe under the effective width concept.

---

**Problem 2:**

A rectangular footing of size 3m x 4m (width x length) is subjected to an axial load $P = 800$ kN. It is also subjected to a moment $M_x = 200$ kNm about the transverse axis (causing eccentricity along the width) and $M_y = 120$ kNm about the longitudinal axis (causing eccentricity along the length). The allowable net bearing capacity of the soil is $q_{net,allow} = 150$ kPa. Determine the effective dimensions and the average pressure under the effective area.

**Solution 2:**

*   **Footing dimensions:** $B = 3$ m, $L = 4$ m
*   **Axial load:** $P = 800$ kN
*   **Moments:** $M_x = 200$ kNm, $M_y = 120$ kNm
*   **Allowable net bearing capacity:** $q_{net,allow} = 150$ kPa = 150 kN/m²

1.  **Calculate eccentricities:**
    *   Eccentricity along the width ($e_x$) due to moment $M_y$ (about longitudinal axis):
        $e_x = \frac{M_y}{P} = \frac{120 \text{ kNm}}{800 \text{ kN}} = 0.15 \text{ m}$
    *   Eccentricity along the length ($e_y$) due to moment $M_x$ (about transverse axis):
        $e_y = \frac{M_x}{P} = \frac{200 \text{ kNm}}{800 \text{ kN}} = 0.25 \text{ m}$

2.  **Check if resultant force is within the middle third for both dimensions:**
    *   For width: $B/6 = 3 \text{ m} / 6 = 0.5 \text{ m}$. Since $e_x = 0.15 \text{ m} \leq 0.5 \text{ m}$, it's within the middle third.
    *   For length: $L/6 = 4 \text{ m} / 6 = 0.667 \text{ m}$. Since $e_y = 0.25 \text{ m} \leq 0.667 \text{ m}$, it's within the middle third.

3.  **Calculate effective width ($B'$):**
    The eccentricity $e_x$ acts along the width $B$.
    $B' = B - 2e_x$
    $B' = 3 \text{ m} - 2(0.15 \text{ m}) = 3 \text{ m} - 0.3 \text{ m} = 2.7 \text{ m}$

4.  **Calculate effective length ($L'$):**
    The eccentricity $e_y$ acts along the length $L$.
    $L' = L - 2e_y$
    $L' = 4 \text{ m} - 2(0.25 \text{ m}) = 4 \text{ m} - 0.5 \text{ m} = 3.5 \text{ m}$

5.  **Calculate effective area ($A'$):**
    $A' = B' \times L' = 2.7 \text{ m} \times 3.5 \text{ m} = 9.45 \text{ m}^2$

6.  **Calculate the average pressure under the effective area:**
    $p_{avg} = \frac{P}{A'} = \frac{800 \text{ kN}}{9.45 \text{ m}^2} \approx 84.66 \text{ kN/m}^2 = 84.66 \text{ kPa}$

7.  **Compare average pressure with allowable net bearing capacity:**
    $p_{avg} = 84.66 \text{ kPa}$
    $q_{net,allow} = 150 \text{ kPa}$

    Since $p_{avg} \leq q_{net,allow}$, the footing is considered safe.

---

**Problem 3 (Case with eccentricity > B/6):**

A rectangular footing of size 2m x 3m (width x length) is subjected to an axial load $P = 300$ kN and a moment $M_y = 150$ kNm about the longitudinal axis (causing eccentricity along the width). The allowable net bearing capacity of the soil is $q_{net,allow} = 120$ kPa. Determine the effective width and check for safety.

**Solution 3:**

*   **Footing dimensions:** $B = 2$ m, $L = 3$ m
*   **Axial load:** $P = 300$ kN
*   **Moment:** $M_y = 150$ kNm
*   **Allowable net bearing capacity:** $q_{net,allow} = 120$ kPa = 120 kN/m²

1.  **Calculate eccentricity along the width:**
    $e_x = \frac{M_y}{P} = \frac{150 \text{ kNm}}{300 \text{ kN}} = 0.5 \text{ m}$

2.  **Check if resultant force is within the middle third of the width:**
    $B/6 = 2 \text{ m} / 6 = 0.333 \text{ m}$
    Here, $e_x = 0.5 \text{ m} > 0.333 \text{ m}$. This means a portion of the footing base will go into tension.

3.  **Calculate the effective width ($B'$):**
    According to Meyerhof's approach for $e > B/6$:
    $B' = B - 2e_x$
    $B' = 2 \text{ m} - 2(0.5 \text{ m}) = 2 \text{ m} - 1.0 \text{ m} = 1.0 \text{ m}$

    *Note: In this scenario, a part of the footing (width $B - B' = 2 - 1 = 1$ m) is in tension and doesn't contribute to bearing capacity. The resultant force now acts at the center of this effective width.*

4.  **Calculate the effective length ($L'$):**
    Assuming no moment about the other axis, $e_y = 0$.
    $L' = L - 2e_y = 3 \text{ m} - 2(0) = 3 \text{ m}$

5.  **Calculate the effective area ($A'$):**
    $A' = B' \times L' = 1.0 \text{ m} \times 3 \text{ m} = 3.0 \text{ m}^2$

6.  **Calculate the average pressure under the effective area:**
    $p_{avg} = \frac{P}{A'} = \frac{300 \text{ kN}}{3.0 \text{ m}^2} = 100 \text{ kN/m}^2 = 100 \text{ kPa}$

7.  **Compare average pressure with allowable net bearing capacity:**
    $p_{avg} = 100 \text{ kPa}$
    $q_{net,allow} = 120 \text{ kPa}$

    Since $p_{avg} \leq q_{net,allow}$, the footing is considered safe based on the effective width concept.
    However, it is critical to note that the footing has a significant tension zone, which must be accounted for in the structural design of the footing itself (e.g., by reinforcement). The soil bearing capacity calculation using effective width assumes that the structure can bridge over the tension zone.

---

### 4. Practice Questions

1.  A square footing of 3m x 3m carries an axial load of 600 kN and a moment of 150 kNm about one axis. If the allowable net bearing capacity of the soil is 120 kPa, calculate the effective width and determine if the footing is safe using the effective width concept.

2.  A rectangular footing is 4m wide and 5m long. It supports a column with an axial load of 1200 kN, a moment of 300 kNm about the longitudinal axis (eccentricity along the width), and a moment of 400 kNm about the transverse axis (eccentricity along the length). The allowable net bearing capacity is 180 kPa.
    a) Calculate the eccentricities along the width and length.
    b) Calculate the effective width and effective length.
    c) Determine the average pressure under the effective area.
    d) Is the footing safe?

3.  A footing of size 2.5m x 3.5m experiences an axial load of 500 kN and a moment $M_y = 200$ kNm about the longitudinal axis. The allowable net bearing capacity is 100 kPa. Calculate the effective width and check the safety of the footing.

---

### 5. Answers to Practice Questions

**Answer 1:**

*   $B = 3$ m, $P = 600$ kN, $M = 150$ kNm, $q_{net,allow} = 120$ kPa.
*   Eccentricity, $e = M/P = 150 \text{ kNm} / 600 \text{ kN} = 0.25 \text{ m}$.
*   Middle third check: $B/6 = 3 \text{ m} / 6 = 0.5 \text{ m}$. Since $e = 0.25 \text{ m} \leq 0.5 \text{ m}$, it is within the middle third.
*   Effective width, $B' = B - 2e = 3 \text{ m} - 2(0.25 \text{ m}) = 3 - 0.5 = 2.5 \text{ m}$.
*   Effective length, $L' = L = 3 \text{ m}$ (assuming no moment about the other axis).
*   Effective area, $A' = B' \times L' = 2.5 \text{ m} \times 3 \text{ m} = 7.5 \text{ m}^2$.
*   Average pressure, $p_{avg} = P/A' = 600 \text{ kN} / 7.5 \text{ m}^2 = 80 \text{ kPa}$.
*   **Safety:** Since $p_{avg} = 80 \text{ kPa} \leq q_{net,allow} = 120 \text{ kPa}$, the footing is safe.

**Answer 2:**

*   $B = 4$ m, $L = 5$ m, $P = 1200$ kN, $M_x = 300$ kNm, $M_y = 400$ kNm, $q_{net,allow} = 180$ kPa.

    a) **Eccentricities:**
        *   $e_x$ (along width, due to $M_y$): $e_x = M_y/P = 400 \text{ kNm} / 1200 \text{ kN} = 0.333 \text{ m}$.
        *   $e_y$ (along length, due to $M_x$): $e_y = M_x/P = 300 \text{ kNm} / 1200 \text{ kN} = 0.25 \text{ m}$.

    b) **Effective dimensions:**
        *   Middle third check for width: $B/6 = 4 \text{ m} / 6 = 0.667 \text{ m}$. $e_x = 0.333 \text{ m} \leq 0.667 \text{ m}$ (within middle third).
        *   Effective width, $B' = B - 2e_x = 4 \text{ m} - 2(0.333 \text{ m}) = 4 - 0.666 = 3.334 \text{ m}$.
        *   Middle third check for length: $L/6 = 5 \text{ m} / 6 = 0.833 \text{ m}$. $e_y = 0.25 \text{ m} \leq 0.833 \text{ m}$ (within middle third).
        *   Effective length, $L' = L - 2e_y = 5 \text{ m} - 2(0.25 \text{ m}) = 5 - 0.5 = 4.5 \text{ m}$.

    c) **Average pressure:**
        *   Effective area, $A' = B' \times L' = 3.334 \text{ m} \times 4.5 \text{ m} = 15.003 \text{ m}^2$.
        *   Average pressure, $p_{avg} = P/A' = 1200 \text{ kN} / 15.003 \text{ m}^2 \approx 79.98 \text{ kPa}$.

    d) **Safety:**
        *   Since $p_{avg} = 79.98 \text{ kPa} \leq q_{net,allow} = 180 \text{ kPa}$, the footing is safe.

**Answer 3:**

*   $B = 2.5$ m, $L = 3.5$ m, $P = 500$ kN, $M_y = 200$ kNm, $q_{net,allow} = 100$ kPa.
*   Eccentricity along width, $e_x = M_y/P = 200 \text{ kNm} / 500 \text{ kN} = 0.4 \text{ m}$.
*   Middle third check for width: $B/6 = 2.5 \text{ m} / 6 = 0.417 \text{ m}$.
*   Here, $e_x = 0.4 \text{ m} \leq 0.417 \text{ m}$ (it's very close to the limit, but within the middle third for calculation).
*   Effective width, $B' = B - 2e_x = 2.5 \text{ m} - 2(0.4 \text{ m}) = 2.5 - 0.8 = 1.7 \text{ m}$.
*   Effective length, $L' = L = 3.5 \text{ m}$ (assuming no moment about the other axis).
*   Effective area, $A' = B' \times L' = 1.7 \text{ m} \times 3.5 \text{ m} = 5.95 \text{ m}^2$.
*   Average pressure, $p_{avg} = P/A' = 500 \text{ kN} / 5.95 \text{ m}^2 \approx 84.03 \text{ kPa}$.
*   **Safety:** Since $p_{avg} = 84.03 \text{ kPa} \leq q_{net,allow} = 100 \text{ kPa}$, the footing is safe.

---

### 6. Important Points to Remember

*   **Moments cause eccentricity:** Eccentric loads shift the resultant force from the footing's geometric center.
*   **Pressure distribution changes:** Moments lead to uneven pressure distribution, with higher pressure on the side of the resultant force.
*   **Tension is problematic:** If eccentricity exceeds $B/6$ (or $L/6$), a portion of the footing base can go into tension, which soil cannot resist.
*   **Effective Width Concept (Meyerhof):** Simplifies analysis by assuming a reduced width ($B'$) and length ($L'$) where the load is effectively carried.
*   **Calculation of Effective Dimensions:** $B' = B - 2e_x$ and $L' = L - 2e_y$.
*   **Condition for application:** The effective width concept is primarily used when the resultant force is within the middle third ($e \leq B/6$ or $L/6$). When $e > B/6$, the formula still yields an effective width, but the footing is likely to have a tension zone requiring careful structural design.
*   **Safety Check:** The footing is considered safe if the average pressure under the effective area ($P/A'$) is less than or equal to the allowable net bearing capacity ($q_{net,allow}$).
*   **Structural Design:** The effective width concept addresses bearing capacity. The footing's structural design (reinforcement) must account for the bending moments and any potential tension zones.

---
