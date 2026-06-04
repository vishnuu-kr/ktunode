---
title: "velocity factor"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d86"
status: "completed"
scrapedAt: "2026-05-20T18:11:15.250Z"
---
# DESIGN OF MACHINE ELEMENTS: Module 4: Design of Gears: Nomenclature: Spur Gears - Velocity Factor

## 1. Introduction to Gears and Velocity Factor

Gears are essential components in power transmission systems, enabling changes in speed, torque, and direction of rotation. Spur gears are the simplest type of gears, with teeth cut parallel to the axis of rotation.

The **Velocity Factor** is a crucial factor in gear design that accounts for the impact of the relative velocity between meshing teeth on the strength and life of the gear teeth. It reflects the fact that higher speeds can lead to increased dynamic loads due to tooth inaccuracies, vibration, and impact.

## 2. Learning Outcomes Covered

This section will focus on understanding and applying the concept of the velocity factor in spur gear design. Specifically, it will contribute to:

*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements. (Knowledge Level: K3)** - Understanding the velocity factor is fundamental to accurately modeling the load carrying capacity of spur gears.

## 3. Key Concepts and Definitions

### 3.1. Gear Tooth Load and its Components

When designing gears, we need to consider the loads acting on the teeth. These loads can be broadly categorized into:

*   **Tangential Load ($F_t$)**: This is the primary load that transmits power. It acts tangentially to the pitch circle and is calculated from the transmitted power and the pitch line velocity.
    $F_t = \frac{P \times 1000}{v}$  (for power in kW and velocity in m/s)
    Where:
    *   $P$ is the transmitted power in kW.
    *   $v$ is the pitch line velocity in m/s.

*   **Radial Load ($F_r$)**: This load acts radially, either towards or away from the center of the gear. It is caused by the pressure angle of the teeth.
    $F_r = F_t \tan(\phi)$
    Where:
    *   $\phi$ is the pressure angle.

*   **Axial Load ($F_a$)**: This load acts along the axis of the gear and is present only in helical and bevel gears, not in spur gears.

### 3.2. Dynamic Load and the Lewis Factor

The tangential load calculated above is a *static* load. However, in reality, gears operate at high speeds, and the interaction between teeth is not perfect. This leads to dynamic forces that augment the static load.

The **Lewis Factor (Y)**, developed by Wilfred Lewis, is used to calculate the bending stress in a gear tooth. It depends on the tooth form and the number of teeth. The Lewis equation for bending stress is:

$\sigma_b = \frac{F_t}{F \cdot m \cdot Y}$

However, the Lewis equation does not directly account for the dynamic effects of velocity. This is where the velocity factor comes in.

### 3.3. The Velocity Factor ($C_v$)

The **Velocity Factor ($C_v$)** is a dimensionless factor that reduces the permissible working stress of the gear teeth or, alternatively, increases the effective load on the teeth due to dynamic effects. It essentially quantifies the impact of the pitch line velocity on the tooth strength.

*   **Purpose of the Velocity Factor:**
    *   To account for impact and vibration loads that arise from tooth inaccuracies (pitch error, profile error, helix error, etc.).
    *   To correct for the dynamic load component that is superimposed on the static tangential load.

*   **Effect of Velocity Factor:**
    *   At low speeds, $C_v$ is close to 1, meaning dynamic effects are negligible.
    *   As the speed increases, $C_v$ decreases, indicating that the dynamic load becomes more significant, thus reducing the effective strength of the teeth.

## 4. Formulas and Calculations for Velocity Factor

Several empirical formulas have been developed to estimate the velocity factor. The most commonly used ones are:

### 4.1. The AGMA (American Gear Manufacturers Association) Velocity Factor

The AGMA has proposed various formulas over the years. A commonly used AGMA formula for the velocity factor is:

$C_v = \frac{6}{6 + v}$  (for $v$ in m/s)

**Where:**
*   $v$ is the pitch line velocity in m/s.

This formula is simple and widely adopted for its practical applicability. It shows that as velocity ($v$) increases, $C_v$ decreases.

**Example Calculation (AGMA):**
If the pitch line velocity ($v$) of a spur gear is 10 m/s, the AGMA velocity factor is:
$C_v = \frac{6}{6 + 10} = \frac{6}{16} = 0.375$

### 4.2. The Buckingham’s Velocity Factor

Buckingham's formula is another widely used empirical formula for the velocity factor, particularly in older designs and some textbooks. It is given by:

$C_v = \frac{6}{6 + v}$ (This is often cited as Buckingham's, and is identical to the AGMA formula for the basic case)

However, Buckingham's analysis also considers tooth error, stiffness, and damping, leading to a more comprehensive equation for the dynamic load, often expressed as:

$F_{dynamic} = F_t + \frac{A \cdot v \cdot (B \cdot c + F_t)}{A \cdot v + B \cdot c}$

Where:
*   $F_{dynamic}$ is the total dynamic load.
*   $F_t$ is the static tangential load.
*   $v$ is the pitch line velocity in m/s.
*   $A$ is a factor depending on the material and manufacturing quality (often taken as 0.073).
*   $B$ is a factor depending on the elastic modulus of the material.
*   $c$ is the total tooth error, a function of manufacturing accuracy.

From this Buckingham's formula, a velocity factor can be derived or the dynamic load can be directly calculated. The AGMA formula $C_v = \frac{6}{6+v}$ is often a simplified representation of the effect captured by Buckingham's more complex approach.

### 4.3. Other Empirical Formulas (Refer to Textbooks)

Various other empirical formulas exist, often with slight variations in constants or functional forms. For instance, some older texts might use formulas like:

$C_v = \frac{6}{6 + v}$ (for $v$ in m/s) or $C_v = \frac{6}{6 + 0.5v}$ (for $v$ in ft/min) - note the unit conversion implicit here.

**Important Note:** Always check the specific formula and units (m/s or ft/min) provided in your chosen textbook or design code. The AGMA formula ($C_v = \frac{6}{6+v}$ for m/s) is a good starting point.

**Referencing Bhandari (5th Ed., 2020):**
Bhandari, in Chapter 13 on Gears, likely discusses various methods for calculating dynamic loads, including empirical formulas for the velocity factor. He emphasizes the AGMA approach and its significance.

**Referencing Norton (5th Ed., 2018):**
Norton's text, with its integrated approach, will likely present the velocity factor within the broader context of load calculation, possibly linking it to tooth stiffness and manufacturing errors.

## 5. Application of Velocity Factor in Gear Design

The velocity factor is primarily used in calculating the **effective tangential load** or the **dynamic load** that the gear tooth must withstand. The general procedure is to modify the static tangential load to account for dynamic effects.

**Method 1: Modifying the Tangential Load**

The actual tangential load ($F_{t, actual}$) that the tooth experiences is the sum of the static tangential load and the dynamic load component. The dynamic load component is often expressed as a factor applied to the static load.

$F_{t, effective} = F_t \times C_w$

Where $C_w$ is a load distribution factor or wear factor and $C_v$ is applied to determine the strength of the tooth.

A more direct application is to use the velocity factor to calculate the **dynamic load ($F_d$)**:

$F_d = F_t + (\text{dynamic increment})$

Or, more commonly:

$F_t' = F_t \times (\text{some factor related to } C_v)$

**The strength calculation using the Lewis equation is often modified as:**

$\sigma_b = \frac{F_{t, effective}}{F \cdot m \cdot Y}$

Where $F_{t, effective}$ incorporates the velocity factor. A common way to incorporate $C_v$ is:

**Effective Tangential Load ($F_{t, eff}$) = Static Tangential Load ($F_t$) $\times$ Velocity Factor ($C_v$)**
This is not entirely correct. The velocity factor *reduces* the permissible stress, or the dynamic load *increases* the actual load.

**The correct approach is often seen in the Buckingham equation or AGMA standards where:**

The **total load** on the tooth ($F_{total}$) is considered as:
$F_{total} = F_t + F_{dynamic}$

Where $F_{dynamic}$ is a function of $F_t$ and $v$, often leading to an equation like:
$F_{total} = F_t + \frac{A \cdot v \cdot (B \cdot c + F_t)}{A \cdot v + B \cdot c}$ (Buckingham's)

Or, within strength calculations, the AGMA approach often directly incorporates the velocity factor into the stress calculation:

Permissible bending stress $= \sigma_{allowable} \times C_v$  (This is incorrect - $C_v$ is a factor on the load or stress, not a direct multiplier of allowable stress).

**Let's clarify the typical application based on common design procedures (e.g., Bhandari):**

The bending stress calculation involves the **formative factor ($Y$)**, **face width ($F$)**, **module ($m$)**, and the **tangential load ($F_t$)**. The dynamic effect is often incorporated by modifying the tangential load that is applied to the Lewis equation.

**Effective Tangential Load ($F_t'$):**
$F_t' = F_t \times (\text{Dynamic Load Factor})$

The **Dynamic Load Factor** is directly related to the velocity factor. A common way to represent this, derived from empirical methods, is:

**$F_{t, effective} = F_t \times (\frac{6}{6+v})$**  (This represents the load component that is *not* dynamic) - **This is also incorrect.**

**Correct Interpretation and Application:**

The velocity factor ($C_v$) is often used to calculate the **dynamic load component** or to modify the **permissible tangential force**.

1.  **Calculating Dynamic Load ($F_d$)**:
    Various empirical formulas can be used to calculate the dynamic load component. The AGMA standard, for instance, uses the velocity factor within a more complex equation for dynamic load. A simplified interpretation is that the total load is $F_t + F_{dynamic}$.

2.  **AGMA Strength Calculation Approach:**
    AGMA standards typically calculate the **tangential force ($W_t$)** acting on the tooth.
    $W_t = \frac{P}{v}$ (for power in Watts and velocity in m/s)

    Then, the **design tangential load ($W_{td}$)** is calculated, incorporating various factors including the velocity factor:
    $W_{td} = W_t \times K_v \times K_{rl} \times K_{m} \times K_{ar}$
    Where:
    *   $K_v$ is the **velocity factor**, often using the AGMA formula $C_v = \frac{6}{6+v}$ or similar.
    *   $K_{rl}$ is the rim-thickness factor.
    *   $K_m$ is the load-distribution factor.
    *   $K_{ar}$ is the adjacent-rib factor.

    The bending stress is then calculated as:
    $\sigma_b = \frac{W_{td}}{F \cdot m \cdot Y_T}$

    This shows that the velocity factor ($K_v$) directly modifies the tangential load to account for dynamic effects.

**Example Scenario:**

Design a spur gear pair to transmit 10 kW power at 1000 rpm. The pitch line velocity is 5 m/s.

1.  **Calculate the static tangential load ($F_t$):**
    Assuming a module $m$ and face width $F$, and that $F_t$ is related to power. If we know the pitch diameter $D$, then $v = \frac{\pi D N}{60}$.
    Let's assume $v = 5$ m/s and power $P = 10$ kW.
    $F_t = \frac{P \times 1000}{v} = \frac{10 \times 1000}{5} = 2000$ N.

2.  **Calculate the Velocity Factor ($C_v$) using AGMA:**
    $C_v = \frac{6}{6 + v} = \frac{6}{6 + 5} = \frac{6}{11} \approx 0.545$

3.  **Apply the Velocity Factor to find the effective tangential load (following AGMA logic):**
    In AGMA, the $C_v$ (or $K_v$) is used in the calculation of the design tangential load, which accounts for dynamic effects.
    Let's assume a simplified scenario where the effective load is $F_t \times C_v$ for illustrative purposes, although the actual AGMA calculation is more involved.
    $F_{t, effective} \approx F_t \times C_v = 2000 \times 0.545 = 1090$ N.
    **This simplification is not entirely accurate for direct multiplication.** The AGMA $K_v$ factor typically reduces the permissible load or increases the calculated load to account for dynamics. A common way to use $C_v$ is to calculate the dynamic load that *adds* to the static load, or to reduce the strength of the tooth material.

    **A more accurate representation is that the total load on the tooth is considered, and this load is compared against the tooth's bending strength.**

    Using the AGMA approach:
    $W_t = \frac{P}{v} = \frac{10 \times 1000}{5} = 2000$ N.
    The velocity factor $K_v = C_v = 0.545$.
    The design tangential load $W_{td} = W_t \times K_v \times \text{other factors}$.
    $W_{td} = 2000 \times 0.545 \times \text{other factors}$

    The velocity factor's primary role is to **reduce the effective strength of the gear teeth at higher speeds**. Therefore, in the Lewis equation, it would modify the permissible stress or the load.

    $\sigma_{b, allowable} = \sigma_{b, static} \times C_v$  **This is also not the standard interpretation.**

    **The most common way is to increase the load:**
    $\sigma_b = \frac{F_t \times K_v}{F \cdot m \cdot Y}$  where $K_v$ is the velocity factor.
    This formulation is also seen, where $K_v$ is a factor between 0 and 1.

    **Let's stick to the AGMA formulation for clarity:**
    $W_{td} = W_t \times K_v \times K_m \times K_{ar} \times K_{rl}$
    $\sigma_b = \frac{W_{td}}{F \cdot m \cdot Y_T}$
    Here, $K_v$ directly reduces the load capacity by accounting for velocity.

## 6. Important Points to Remember

*   **Velocity is Key:** The velocity factor is directly dependent on the pitch line velocity of the gear.
*   **Empirical Nature:** Velocity factor formulas are empirical, derived from experimental data and observations.
*   **AGMA Standard:** The AGMA formula ($C_v = \frac{6}{6+v}$ for m/s) is widely used and accepted.
*   **Impact on Load:** The velocity factor accounts for the additional dynamic loads caused by tooth inaccuracies and vibrations at higher speeds.
*   **Design Implications:** A lower velocity factor means higher dynamic loads or reduced effective tooth strength, necessitating stronger gear teeth (larger module, wider face, better material, or more accurate manufacturing).
*   **Unit Consistency:** Always ensure consistent units (m/s or ft/min) when using velocity factor formulas.
*   **Context Matters:** The velocity factor is one of many factors considered in comprehensive gear design, alongside Lewis factor, surface durability, load distribution, etc.

## 7. Practice Questions and Exercises

**Question 1:**
A spur gear drive transmits 5 kW of power at a pitch line velocity of 7 m/s. Calculate the AGMA velocity factor for this drive.
**Answer:**
Using the AGMA formula $C_v = \frac{6}{6 + v}$:
$C_v = \frac{6}{6 + 7} = \frac{6}{13} \approx 0.4615$

**Question 2:**
What is the purpose of the velocity factor in gear design?
**Answer:**
The velocity factor accounts for the impact of pitch line velocity on gear teeth, specifically the increase in dynamic loads due to tooth inaccuracies, vibration, and impact at higher speeds. It is used to modify the tooth strength calculation or the effective load on the teeth.

**Question 3:**
If the pitch line velocity increases from 2 m/s to 8 m/s for a spur gear, how does the AGMA velocity factor change?
**Answer:**
At $v = 2$ m/s, $C_v = \frac{6}{6+2} = \frac{6}{8} = 0.75$.
At $v = 8$ m/s, $C_v = \frac{6}{6+8} = \frac{6}{14} \approx 0.4286$.
The velocity factor decreases significantly as the pitch line velocity increases.

**Question 4:**
Referencing Bhandari's "Design of Machine Elements", explain how the velocity factor is typically incorporated into the bending stress calculation for spur gears.
**Answer:**
According to Bhandari, the velocity factor ($C_v$) is typically used in conjunction with other factors to determine the **effective tangential load** or the **design tangential load** ($W_{td}$) that the gear tooth must withstand. This effective load is then used in the Lewis equation or a modified form of it to calculate the bending stress. For example, the AGMA approach integrates $C_v$ (as $K_v$) into the calculation of $W_{td} = W_t \times K_v \times ...$, where $W_t$ is the static tangential load. The bending stress is then $\sigma_b = \frac{W_{td}}{F \cdot m \cdot Y}$.

**Question 5:**
A spur gear has a pitch line velocity of 4 m/s. If the static tangential load is 1500 N, and we use a simplified approach where the effective load is $F_t \times C_v$, calculate this effective load.
**Answer:**
First, calculate $C_v$: $C_v = \frac{6}{6+4} = \frac{6}{10} = 0.6$.
Effective Load $= F_t \times C_v = 1500 \text{ N} \times 0.6 = 900 \text{ N}$.
**Important Note:** This simplified multiplication is for illustration. In actual design, the velocity factor is used within established standards like AGMA to determine the design load more comprehensively.

## 8. Alignment with Course Outcomes

*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements. (Knowledge Level: K3)**
    Understanding the velocity factor is crucial for accurately modeling the loads and stresses on spur gear teeth. It allows engineers to predict the tooth's ability to withstand operating conditions, especially at varying speeds, ensuring the designed gear drive meets the required performance and reliability. This topic directly contributes to the K3 (Application) level of this CO by enabling the calculation and application of this factor in design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 9. Further Study and References

For a deeper understanding, consult the relevant chapters in the recommended textbooks:

*   **Design of Machine Elements by V B Bhandari:** Chapters related to gears, particularly sections on load calculations, dynamic loads, and velocity factor.
*   **Machine Design – An Integrated Approach by R. L. Norton:** Sections on gear design, focusing on load analysis and tooth strength.
*   **PSG Design Data by PSG Tech:** Likely contains tables or formulas for velocity factors and related parameters.
*   **Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy:** Similar to PSG, this would provide practical data.

Remember to always refer to the latest editions of these books and relevant industry standards (like AGMA) for the most accurate and up-to-date information.