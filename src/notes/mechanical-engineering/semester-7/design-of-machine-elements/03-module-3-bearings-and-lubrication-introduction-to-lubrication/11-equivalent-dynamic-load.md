---
title: "Equivalent dynamic load"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 3: Bearings and Lubrication: Introduction to lubrication"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d78"
status: "completed"
scrapedAt: "2026-05-20T18:11:06.186Z"
---
# Design of Machine Elements - Module 3: Bearings and Lubrication: Introduction to Lubrication

## Topic: Equivalent Dynamic Load

---

### 1. Introduction

This section introduces the concept of **Equivalent Dynamic Load (P)** for rolling contact bearings. In real-world applications, bearings often experience fluctuating or combined radial and axial loads. To simplify the design process and accurately predict bearing life, these complex loading conditions are reduced to a single, equivalent static load that would theoretically produce the same life as the actual complex loading. This equivalent dynamic load is crucial for selecting the correct bearing from manufacturer catalogs and for performing life calculations.

---

### 2. Key Concepts and Definitions

*   **Dynamic Load Rating (C):** The basic dynamic load rating is a fundamental property of a rolling bearing, defined as the constant radial load (for radial bearings) or thrust load (for thrust bearings) which a group of identical bearings can endure for 1 million revolutions of the inner ring while running under conditions that approximate practical use. (Bhandari, 5th Ed., Ch. 13)
*   **Equivalent Dynamic Load (P):** The single equivalent dynamic load that, if applied to a bearing, would result in the same *life* as the actual, often varying, combination of radial and axial loads. It is a hypothetical load used for life calculations and bearing selection.
*   **Basic Rating Life (L10):** The life that 90% of a group of apparently identical bearings will complete or exceed under specified operating conditions. This is the most common basis for bearing life calculation. (Norton, 5th Ed., Ch. 10)
*   **Radial Load (Fr):** The load acting perpendicular to the shaft axis.
*   **Axial Load (Fa):** The load acting parallel to the shaft axis.
*   **Equivalent Radial Load (X) and Equivalent Axial Load (Y) Factors:** These are dimensionless factors provided by bearing manufacturers that are used to combine radial and axial loads into an equivalent dynamic load. They depend on the ratio of axial load to the radial load and the geometrical characteristics of the bearing. (PSG Design Data, 2022)

---

### 3. Why is Equivalent Dynamic Load Needed?

*   **Simplification of Complex Loading:** Bearings rarely experience a constant, purely radial or purely axial load. Loads can fluctuate in magnitude, direction, or both.
*   **Standardized Bearing Selection:** Manufacturers' catalogs use a single dynamic load rating (C) to define a bearing's capacity. To select a bearing based on its catalog rating, the actual complex load must be converted into a single equivalent load.
*   **Accurate Life Prediction:** The life of a bearing is inversely proportional to a power of the applied load (typically the 3rd power for ball bearings and the 10/3 power for roller bearings). Using an equivalent dynamic load allows for a unified approach to calculating bearing life under various load conditions.

---

### 4. Calculation of Equivalent Dynamic Load (P)

The general approach to calculating the equivalent dynamic load (P) involves combining the actual radial load ($F_r$) and axial load ($F_a$) using specific factors provided by the bearing manufacturer. These factors depend on the bearing type, its geometry, and the magnitude of the applied loads.

The general formula is:

$P = X \cdot F_r + Y \cdot F_a$

Where:
*   $P$ = Equivalent dynamic load (kN or N)
*   $X$ = Radial load factor (dimensionless)
*   $F_r$ = Actual effective radial load (kN or N)
*   $Y$ = Axial load factor (dimensionless)
*   $F_a$ = Actual effective axial load (kN or N)

**Important Considerations for $F_r$ and $F_a$:**

*   **Effective Radial Load ($F_r$):** If there is an axial load, it can induce a radial component due to the bearing's geometry (especially in deep groove ball bearings). This induced radial load must be considered in addition to any externally applied radial load.
*   **Effective Axial Load ($F_a$):** Similarly, a radial load can induce an axial component. The effective axial load used in the formula is the *greater* of the actual axial load and the induced axial load from radial forces.

**Determining X and Y Factors:**

The values of $X$ and $Y$ are not constant. They are determined based on:

1.  **The ratio of axial load to radial load ($F_a / F_r$)**: This ratio is a primary determinant.
2.  **The basic static load rating ($C_0$)**: This is the static load that produces a specific contact stress at the most heavily loaded rolling element. While the equivalent *dynamic* load is calculated using dynamic factors, the static load rating is often used in preliminary assessments or when loads are predominantly static.
3.  **The basic dynamic load rating ($C$)**: The dynamic load rating is the reference for life calculations.
4.  **Bearing type and geometry**: Deep groove ball bearings, angular contact ball bearings, cylindrical roller bearings, spherical roller bearings, etc., all have different relationships between loads and their respective X/Y factors.

**General Procedure for Determining X and Y (as per Bhandari, 5th Ed. and Norton, 5th Ed.):**

*   **Step 1: Calculate the load ratio ($e$):** Determine the "limiting speed factor" $e$ from manufacturer data. This factor relates the axial and radial loads to the bearing's geometry.
    *   A common approach involves comparing $F_a / C_0$ with a specific value related to $e$.
*   **Step 2: Determine the condition:** Based on the load ratio ($F_a / F_r$) and the limiting speed factor ($e$), one of the following conditions is met:
    *   **Condition 1: Purely Radial Load ($F_a = 0$)**: In this case, $X = 1$ and $Y = 0$. So, $P = F_r$.
    *   **Condition 2: Mixed Load (Axial Load Dominates or is Significant)**: When $F_a / F_r > e$, the axial load is considered significant. The factors $X$ and $Y$ are looked up in tables or charts provided by the manufacturer based on the ratio $F_a / F_r$ and the specific bearing series.
    *   **Condition 3: Mixed Load (Radial Load Dominates)**: When $F_a / F_r \le e$, the radial load is considered dominant, but there's still an axial component. The factors $X$ and $Y$ are looked up in tables or charts based on the ratio $F_a / F_r$ and the specific bearing series.

**Manufacturer's Data is Crucial:**

The exact values of $X$ and $Y$ (and the method to determine $e$) are highly specific to the bearing manufacturer and the bearing series. Data is typically found in:

*   **Bearing Manufacturer Catalogs (e.g., SKF, NSK, FAG, TIMKEN)**
*   **Design Data Handbooks (e.g., PSG Design Data, Bhandari's Design Data Handbook)**
*   **Textbooks like Bhandari and Norton**

---

### 5. Examples of X and Y Factor Application (Illustrative, Specific values depend on manufacturer/bearing)

Let's consider a deep groove ball bearing.

**Scenario 1: Pure Radial Load**
*   $F_r = 5000$ N
*   $F_a = 0$ N
*   **Here, $F_a = 0$, so it falls under Condition 1.**
*   $X = 1$, $Y = 0$
*   $P = X \cdot F_r + Y \cdot F_a = 1 \cdot 5000 + 0 \cdot 0 = 5000$ N

**Scenario 2: Significant Axial Load**
*   Assume for a specific deep groove ball bearing, the limiting speed factor $e = 0.3$.
*   $F_r = 5000$ N
*   $F_a = 3000$ N
*   **Load Ratio $F_a / F_r = 3000 / 5000 = 0.6$. Since $0.6 > e (0.3)$, this falls under Condition 2 (Axial load dominates).**
*   Now, we need to find $X$ and $Y$ from tables for deep groove ball bearings where $F_a / F_r = 0.6$. Let's assume hypothetical values from a table for illustration:
    *   Suppose for $F_a / F_r = 0.6$, we find $X = 0.56$ and $Y = 1.67$.
*   $P = X \cdot F_r + Y \cdot F_a = 0.56 \cdot 5000 + 1.67 \cdot 3000$
*   $P = 2800 + 5010 = 7810$ N

**Scenario 3: Moderate Axial Load**
*   Using the same bearing with $e = 0.3$.
*   $F_r = 5000$ N
*   $F_a = 1000$ N
*   **Load Ratio $F_a / F_r = 1000 / 5000 = 0.2$. Since $0.2 \le e (0.3)$, this falls under Condition 3 (Radial load dominates).**
*   Now, we need to find $X$ and $Y$ from tables for deep groove ball bearings where $F_a / F_r = 0.2$. Let's assume hypothetical values from a table:
    *   Suppose for $F_a / F_r = 0.2$, we find $X = 0.84$ and $Y = 1.15$.
*   $P = X \cdot F_r + Y \cdot F_a = 0.84 \cdot 5000 + 1.15 \cdot 1000$
*   $P = 4200 + 1150 = 5350$ N

**Note:** The actual $X$ and $Y$ values and the determination of $e$ are found in specific tables within bearing catalogs or design data books. The procedure involves comparing $F_a$ with $e \cdot C_0$.

**A More Formal Approach (as per ISO 281):**

The calculation of $X$ and $Y$ factors is often based on the ratio $f_a = F_a / C_0$.

1.  **Determine $F_a$, $F_r$, $C_0$, and $C$.** ($C_0$ is the basic static load rating).
2.  **Calculate $F_a / C_0$.**
3.  **Compare $F_a / C_0$ with a reference value ($e$) provided by the manufacturer for the specific bearing type and series.**
4.  **If $F_a / C_0 \le e$**: The load is predominantly radial.
    *   $X = 1$
    *   $Y$ depends on the $F_a / F_r$ ratio. (Typically, $Y=0.6$ for radial ball bearings).
    *   $P = X \cdot F_r + Y \cdot F_a$
5.  **If $F_a / C_0 > e$**: The load is significantly axial.
    *   $X$ and $Y$ are obtained from tables based on the ratio $F_a / F_r$ and the $F_a / C_0$ value.
    *   $P = X \cdot F_r + Y \cdot F_a$

**Important Note on Effective Radial Load ($F_r$) when $F_a / C_0 > e$:**

When the axial load is significant, it can induce a radial component. In such cases, the effective radial load ($F_r$) to be used in the $P$ equation is actually $F_{r,eff} = F_r + F_{i,r}$, where $F_{i,r}$ is the induced radial load. The manufacturers' tables often implicitly account for this when providing $X$ and $Y$ for the $F_a / C_0 > e$ condition.

**For roller bearings:** The power in the life equation is different (10/3 for roller vs. 3 for ball), and the $X$ and $Y$ factors are also different.

---

### 6. Role of Lubrication and Bearing Type

The lubricant and its properties play a critical role in bearing performance and life. While the *calculation* of equivalent dynamic load is primarily a geometric and load-based determination, the *quality* of lubrication (forming a stable lubricant film) directly influences whether the bearing can achieve its rated life. Poor lubrication will lead to premature failure, regardless of the calculated equivalent load.

*   **Corresponds to CO3 (Develop of Sliding contact bearing for industrial applications):** While this topic is on rolling contact bearings, the understanding of how loads translate to stresses is fundamental. The concept of load capacity and equivalent load is also present in plain bearings, where the Sommerfeld number is used, which implicitly considers load.
*   **Corresponds to CO4 (Choose a suitable Rolling contact bearing from manufacturer’s Catalogue for a specific application):** The ability to calculate the equivalent dynamic load is *essential* for using manufacturer catalogs. You need to find a bearing whose basic dynamic load rating (C) is sufficient for the calculated equivalent dynamic load (P) to achieve the desired life.

---

### 7. Important Points to Remember

*   **Always refer to specific manufacturer data:** $X$ and $Y$ factors, and the method for determining them, vary between manufacturers and bearing types.
*   **Distinguish between basic static load rating ($C_0$) and basic dynamic load rating ($C$).**
*   **The equivalent dynamic load is used for life calculations ($L_{10}$) and bearing selection.**
*   **For purely radial loads ($F_a=0$), $P = F_r$.**
*   **For combined loads, $P = X \cdot F_r + Y \cdot F_a$.**
*   **The factors $X$ and $Y$ are dependent on the load ratio ($F_a/F_r$) and the bearing's geometry/design ($e$).**
*   **The effective radial load ($F_r$) and axial load ($F_a$) must be used, considering any induced loads if significant.**

---

### 8. Practice Questions and Exercises

**Question 1:**
A deep groove ball bearing is subjected to a radial load of $F_r = 7000$ N and an axial load of $F_a = 3000$ N. For this bearing, the limiting speed factor $e = 0.28$. From the manufacturer's tables, for the ratio $F_a / F_r = 3000 / 7000 \approx 0.43$, the factors are $X = 0.77$ and $Y = 1.33$. Calculate the equivalent dynamic load (P).

**Answer 1:**
Given:
$F_r = 7000$ N
$F_a = 3000$ N
$e = 0.28$
$X = 0.77$
$Y = 1.33$

Since $F_a / F_r = 0.43 > e (0.28)$, the axial load is significant, and the given $X$ and $Y$ values are appropriate for this condition.

$P = X \cdot F_r + Y \cdot F_a$
$P = 0.77 \cdot 7000 + 1.33 \cdot 3000$
$P = 5390 + 3990$
$P = 9380$ N

**Question 2:**
A cylindrical roller bearing is subjected to a radial load of $F_r = 12000$ N and an axial load of $F_a = 0$ N. What is the equivalent dynamic load (P)?

**Answer 2:**
Given:
$F_r = 12000$ N
$F_a = 0$ N

When the axial load is zero, it falls under the purely radial load condition.
$X = 1$
$Y = 0$

$P = X \cdot F_r + Y \cdot F_a$
$P = 1 \cdot 12000 + 0 \cdot 0$
$P = 12000$ N

**Question 3:**
A ball bearing has a basic static load rating ($C_0$) of 50 kN and a basic dynamic load rating ($C$) of 70 kN. It is subjected to an axial load $F_a = 20$ kN and a radial load $F_r = 30$ kN. The limiting speed factor $e = 0.3$. Determine which condition applies and calculate the equivalent dynamic load, assuming suitable $X$ and $Y$ factors for the relevant condition are available from tables.

**Answer 3:**
Given:
$C_0 = 50$ kN
$C = 70$ kN
$F_a = 20$ kN
$F_r = 30$ kN
$e = 0.3$

First, calculate the ratio $F_a / C_0$:
$F_a / C_0 = 20 \text{ kN} / 50 \text{ kN} = 0.4$

Now, compare this ratio with the limiting speed factor $e$:
$F_a / C_0 = 0.4$ and $e = 0.3$.
Since $0.4 > 0.3$ ($F_a / C_0 > e$), the condition is that the axial load is significant.

Next, calculate the load ratio $F_a / F_r$:
$F_a / F_r = 20 \text{ kN} / 30 \text{ kN} \approx 0.67$

Now, we need to look up the $X$ and $Y$ factors from manufacturer tables for this specific bearing type and series, based on $F_a / C_0 = 0.4$ and the ratio $F_a / F_r = 0.67$.
*Let's assume (for illustration purposes)* that the tables provide $X = 0.60$ and $Y = 1.60$ for these conditions.

Calculate the equivalent dynamic load:
$P = X \cdot F_r + Y \cdot F_a$
$P = 0.60 \cdot 30 \text{ kN} + 1.60 \cdot 20 \text{ kN}$
$P = 18 \text{ kN} + 32 \text{ kN}$
$P = 50 \text{ kN}$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References and Further Reading

*   **Design of Machine Elements by V B Bhandari (McGraw Hill Education (India), 5th Edition, 2020)** - Chapter 13 (Rolling Contact Bearings) specifically covers the calculation of equivalent dynamic load.
*   **Machine Design – An Integrated Approach by R. L. Norton (Pearson Education, 5th Edition, 2018)** - Chapter 10 (Rolling-Element Bearings) also details the process of calculating equivalent dynamic load.
*   **PSG Design Data (2022)** and **Machine Design Data Book by V B Bhandari (2nd edition 2019)** contain tables for $X$ and $Y$ factors for various bearing types and series.
*   **Bearing Manufacturer Catalogs (SKF, NSK, FAG, etc.)** are the primary source for the most accurate and specific $X$ and $Y$ factors and limiting speed factors ($e$).

---

This concludes the notes on Equivalent Dynamic Load. The next steps in bearing design would involve using this $P$ value to calculate the basic rating life ($L_{10}$) and select an appropriate bearing from a manufacturer's catalog.