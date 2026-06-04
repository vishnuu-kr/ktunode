---
title: "Stress distribution : Introduction - Boussinesq’s equations for vertical pressure due to point loads and line loads – Assumptions and Limitations - Numerical problems - Vertical pressure due to uniformly distributed loads beneath strip, circular [no derivation required] - Numerical problems."
subject: "SOIL MECHANICS"
module: "Module 3: Principle of effective stress "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81097b"
status: "completed"
scrapedAt: "2026-05-20T18:47:02.103Z"
---
# Soil Mechanics: Module 3 - Principle of Effective Stress

## Topic: Stress Distribution

This module delves into how external loads are distributed within the soil mass, a fundamental concept for understanding soil behavior under load.

### 1. Introduction to Stress Distribution

*   **What is Stress Distribution?** It's the process of determining how applied loads are transferred through a soil mass. This is crucial because soil's strength and deformation characteristics are directly related to the stresses within it.
*   **Why is it Important?**
    *   **Foundation Design:** To predict settlement and bearing capacity of foundations.
    *   **Slope Stability:** To assess the forces acting on soil slopes.
    *   **Earth Retaining Structures:** To understand the pressure exerted by soil on retaining walls.
*   **Types of Stress in Soil:**
    *   **Total Stress ($\sigma$):** The total force per unit area acting on a soil plane. This includes the weight of soil and any applied loads.
    *   **Pore Water Pressure ($u$):** The pressure exerted by water within the void spaces of the soil.
    *   **Effective Stress ($\sigma'$):** The stress carried by the soil skeleton (soil particles). This is the stress that governs the strength and deformation behavior of soil.
        $$ \sigma' = \sigma - u $$
        This fundamental relationship will be explored further in later topics. For now, we focus on the distribution of total stress.

### 2. Boussinesq's Equations for Vertical Pressure

Boussinesq's theory provides a mathematical framework to calculate the vertical stress induced in an elastic, homogeneous, isotropic half-space by applied loads.

#### 2.1. Vertical Pressure due to a Point Load

This is the most basic case. Imagine a single concentrated load applied to the surface of the soil.

*   **Boussinesq's Equation for Vertical Pressure at a point (z) below a point load (P):**

    $$ \sigma_z = \frac{3P}{2\pi z^2} \frac{1}{[1 + (r/z)^2]^{5/2}} $$

    Where:
    *   $\sigma_z$ = Vertical stress at depth $z$
    *   $P$ = Magnitude of the point load
    *   $z$ = Vertical depth from the surface to the point of interest
    *   $r$ = Radial distance from the point directly below the load to the point of interest
    $$ r = \sqrt{x^2 + y^2} $$
    (where $x$ and $y$ are horizontal distances from the load)

*   **Influence Factor (I):** The term $\frac{3}{2\pi} \frac{1}{[1 + (r/z)^2]^{5/2}}$ is often represented as an influence factor $I$.

    $$ \sigma_z = P \frac{I}{z^2} $$
    where $I = \frac{3}{2\pi} \frac{1}{[1 + (r/z)^2]^{5/2}}$

#### 2.2. Vertical Pressure due to a Line Load

Consider a load distributed uniformly along a straight line on the surface.

*   **Boussinesq's Equation for Vertical Pressure at a point (z) below a line load (q) per unit length:**

    $$ \sigma_z = \frac{2q}{\pi z} \frac{1}{[1 + (x/z)^2]^2} $$

    Where:
    *   $\sigma_z$ = Vertical stress at depth $z$
    *   $q$ = Load per unit length along the line
    *   $z$ = Vertical depth from the surface to the point of interest
    *   $x$ = Horizontal distance from the line load to the point of interest

#### 2.3. Assumptions and Limitations of Boussinesq's Equations

**Assumptions:**

1.  **Soil is Homogeneous:** The soil properties (e.g., elastic modulus) are uniform throughout the mass.
2.  **Soil is Isotropic:** The soil properties are the same in all directions.
3.  **Soil is Elastic:** The soil deforms elastically under load, meaning it returns to its original shape when the load is removed.
4.  **Soil is Semi-Infinite:** The soil extends infinitely in all directions, except for the free surface.
5.  **Load is Applied on the Surface:** The load is applied to a rigid, horizontal surface.
6.  **No Friction:** There is no friction at the load application surface.
7.  **Material is Continuous:** The soil is a continuous medium, not a collection of discrete particles.

**Limitations:**

1.  **Real Soils are Not Perfectly Elastic:** Soils exhibit both elastic and plastic behavior, and their properties can change with stress.
2.  **Real Soils are Not Homogeneous or Isotropic:** Soil properties often vary with depth and direction.
3.  **The "Semi-Infinite" Assumption is an Idealization:** The soil mass has boundaries.
4.  **Practical Loads are Not Pure Point or Line Loads:** Loads are usually distributed over an area.
5.  **Influence of Layering:** Boussinesq's equations do not account for the presence of different soil layers with varying properties.
6.  **Drained vs. Undrained Conditions:** The equations primarily address elastic deformation and don't directly account for pore pressure buildup or dissipation, which are crucial in unsaturated soils or during rapid loading.

---

### 3. Vertical Pressure due to Uniformly Distributed Loads

While point and line loads are theoretical constructs, real-world loads are often distributed over areas. Boussinesq's principles can be extended to calculate vertical stress due to uniformly distributed loads. We will focus on the results without derivations.

#### 3.1. Vertical Pressure Beneath a Strip Footing (Uniformly Distributed Load)

Consider a strip footing (infinitely long in one horizontal direction) with a uniform pressure $q$ applied to the surface.

*   **Equation for Vertical Stress ($\sigma_z$) at depth $z$ beneath the center of a strip footing:**

    $$ \sigma_z = \frac{q}{\pi} \left( \frac{B}{2z} + \arctan\left(\frac{B}{2z}\right) - \frac{B}{2z} \frac{1}{1 + (B/2z)^2} \right) $$

    A more common and practical form is:

    $$ \sigma_z = \frac{q}{\pi} \left[ \theta_1 + \sin(\theta_1)\cos(\theta_1) \right] $$

    Where:
    *   $\sigma_z$ = Vertical stress at depth $z$
    *   $q$ = Uniformly distributed load per unit area
    *   $B$ = Width of the strip footing
    *   $\theta_1 = \arctan\left(\frac{B}{2z}\right)$ (in radians)

    **Simplified Formula (often used with charts or tables):**

    $$ \sigma_z = q \times I_s $$

    Where $I_s$ is an influence factor for a strip footing, which depends on the ratio $z/B$ or $2z/B$.

    **Key takeaway:** As $z$ increases, $\sigma_z$ decreases. The stress is highest directly beneath the footing.

#### 3.2. Vertical Pressure Beneath a Circular Footing (Uniformly Distributed Load)

Consider a circular footing of radius $R$ with a uniform pressure $q$ applied to the surface.

*   **Equation for Vertical Stress ($\sigma_z$) at depth $z$ directly below the center of a circular footing:**

    $$ \sigma_z = q \left[ 1 - \frac{1}{(1 + (R/z)^2)^{3/2}} \right] $$

    **Simplified Formula (often used with charts or tables):**

    $$ \sigma_z = q \times I_c $$

    Where $I_c$ is an influence factor for a circular footing, which depends on the ratio $R/z$.

    **Key takeaway:** Similar to the strip footing, $\sigma_z$ decreases with depth.

---

### 4. Numerical Problems

Let's work through some examples to solidify your understanding.

**Problem 1: Point Load**

A concentrated load of 10 kN is applied to the surface of a homogeneous soil mass. Calculate the vertical stress at a point located 5 meters horizontally and 3 meters vertically below the load.

*   **Given:**
    *   $P = 10 \text{ kN}$
    *   $x = 5 \text{ m}$
    *   $z = 3 \text{ m}$
*   **Calculate $r$:**
    $$ r = \sqrt{x^2 + z^2} = \sqrt{5^2 + 3^2} = \sqrt{25 + 9} = \sqrt{34} \approx 5.83 \text{ m} $$
*   **Calculate $\sigma_z$ using Boussinesq's equation:**
    $$ \sigma_z = \frac{3P}{2\pi z^2} \frac{1}{[1 + (r/z)^2]^{5/2}} $$
    $$ \frac{r}{z} = \frac{5.83}{3} \approx 1.94 $$
    $$ [1 + (r/z)^2]^{5/2} = [1 + (1.94)^2]^{5/2} = [1 + 3.76]^{5/2} = [4.76]^{5/2} \approx 50.1 $$
    $$ \sigma_z = \frac{3 \times 10 \text{ kN}}{2\pi (3 \text{ m})^2} \frac{1}{50.1} = \frac{30}{18\pi} \times \frac{1}{50.1} \approx 0.53 \text{ kN/m}^2 \times 0.02 \approx 0.0105 \text{ kN/m}^2 $$
    $$ \sigma_z \approx 10.5 \text{ kPa} $$

**Problem 2: Line Load**

A uniformly distributed line load of 50 kN/m is applied to the surface of a soil. Calculate the vertical stress at a depth of 4 meters, directly below the line load, and at a horizontal distance of 6 meters from the line load.

*   **Given:**
    *   $q = 50 \text{ kN/m}$
    *   $z = 4 \text{ m}$
*   **Case 1: Directly below the line load ($x=0$)**
    $$ \sigma_z = \frac{2q}{\pi z} \frac{1}{[1 + (0/z)^2]^2} = \frac{2q}{\pi z} $$
    $$ \sigma_z = \frac{2 \times 50 \text{ kN/m}}{\pi \times 4 \text{ m}} = \frac{100}{4\pi} \approx \frac{100}{12.57} \approx 7.96 \text{ kN/m}^2 $$
    $$ \sigma_z \approx 7.96 \text{ kPa} $$
*   **Case 2: At a horizontal distance of 6 meters ($x=6$)**
    $$ \frac{x}{z} = \frac{6}{4} = 1.5 $$
    $$ [1 + (x/z)^2]^2 = [1 + (1.5)^2]^2 = [1 + 2.25]^2 = [3.25]^2 = 10.56 $$
    $$ \sigma_z = \frac{2 \times 50 \text{ kN/m}}{\pi \times 4 \text{ m}} \frac{1}{10.56} = 7.96 \text{ kPa} \times \frac{1}{10.56} \approx 0.75 \text{ kPa} $$

**Problem 3: Strip Footing**

A strip footing of width $B = 2$ meters carries a uniform pressure of $q = 100 \text{ kPa}$. Calculate the vertical stress at a depth of $z = 3$ meters directly beneath the center of the footing.

*   **Given:**
    *   $B = 2 \text{ m}$
    *   $q = 100 \text{ kPa}$
    *   $z = 3 \text{ m}$
*   **Calculate the ratio $B/2z$:**
    $$ \frac{B}{2z} = \frac{2 \text{ m}}{2 \times 3 \text{ m}} = \frac{2}{6} = \frac{1}{3} $$
*   **Calculate $\sigma_z$ using the formula:**
    $$ \sigma_z = \frac{q}{\pi} \left[ \theta_1 + \sin(\theta_1)\cos(\theta_1) \right] $$
    $$ \theta_1 = \arctan\left(\frac{B}{2z}\right) = \arctan\left(\frac{1}{3}\right) \approx 18.43^\circ $$
    Convert to radians: $18.43^\circ \times \frac{\pi}{180^\circ} \approx 0.322 \text{ radians}$
    $$ \sin(\theta_1) = \sin(0.322) \approx 0.316 $$
    $$ \cos(\theta_1) = \cos(0.322) \approx 0.949 $$
    $$ \sigma_z = \frac{100 \text{ kPa}}{\pi} \left[ 0.322 + (0.316)(0.949) \right] $$
    $$ \sigma_z = \frac{100}{\pi} [0.322 + 0.300] = \frac{100}{\pi} [0.622] \approx 31.83 \times 0.622 \approx 19.8 \text{ kPa} $$

**Problem 4: Circular Footing**

A circular footing of radius $R = 3$ meters carries a uniform pressure of $q = 150 \text{ kPa}$. Calculate the vertical stress at a depth of $z = 5$ meters directly beneath the center of the footing.

*   **Given:**
    *   $R = 3 \text{ m}$
    *   $q = 150 \text{ kPa}$
    *   $z = 5 \text{ m}$
*   **Calculate the ratio $R/z$:**
    $$ \frac{R}{z} = \frac{3 \text{ m}}{5 \text{ m}} = 0.6 $$
*   **Calculate $\sigma_z$ using the formula:**
    $$ \sigma_z = q \left[ 1 - \frac{1}{(1 + (R/z)^2)^{3/2}} \right] $$
    $$ (R/z)^2 = (0.6)^2 = 0.36 $$
    $$ 1 + (R/z)^2 = 1 + 0.36 = 1.36 $$
    $$ (1 + (R/z)^2)^{3/2} = (1.36)^{3/2} = (1.36) \times \sqrt{1.36} \approx 1.36 \times 1.166 \approx 1.586 $$
    $$ \sigma_z = 150 \text{ kPa} \left[ 1 - \frac{1}{1.586} \right] = 150 \text{ kPa} [1 - 0.631] = 150 \text{ kPa} [0.369] \approx 55.35 \text{ kPa} $$

---

### 5. Practice Questions/Exercises

1.  A point load of 20 kN is applied to the surface of a soil. Determine the vertical stress at a depth of 4 m and a horizontal distance of 2 m from the load.
2.  Calculate the vertical stress at a depth of 5 m directly below a line load of 100 kN/m. Also, calculate the vertical stress at a horizontal distance of 8 m from the line load at the same depth.
3.  A strip footing of width 2.5 m carries a uniform pressure of 120 kPa. Calculate the vertical stress at a depth of 4 m directly below the center of the footing.
4.  A circular footing of radius 2 m is subjected to a uniform pressure of 180 kPa. Find the vertical stress at a depth of 3 m directly below the center of the footing.
5.  Explain the core assumptions of Boussinesq's theory and discuss why they are often not perfectly met in real soil conditions.

---

### 6. Answers to Practice Questions

1.  **Answer:**
    *   $P = 20 \text{ kN}$, $z = 4 \text{ m}$, $x = 2 \text{ m}$
    *   $r = \sqrt{x^2 + z^2} = \sqrt{2^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} \approx 4.47 \text{ m}$
    *   $\frac{r}{z} = \frac{4.47}{4} \approx 1.118$
    *   $[1 + (r/z)^2]^{5/2} = [1 + (1.118)^2]^{5/2} = [1 + 1.25]^{5/2} = [2.25]^{5/2} = 11.39$
    *   $\sigma_z = \frac{3 \times 20 \text{ kN}}{2\pi (4 \text{ m})^2} \frac{1}{11.39} = \frac{60}{32\pi} \times \frac{1}{11.39} \approx 0.597 \times 0.0878 \approx 0.052 \text{ kN/m}^2 \approx 52 \text{ kPa}$

2.  **Answer:**
    *   $q = 100 \text{ kN/m}$, $z = 5 \text{ m}$
    *   **Directly below ($x=0$):** $\sigma_z = \frac{2q}{\pi z} = \frac{2 \times 100}{\pi \times 5} = \frac{200}{5\pi} = \frac{40}{\pi} \approx 12.73 \text{ kPa}$
    *   **At $x=8$ m:** $\frac{x}{z} = \frac{8}{5} = 1.6$
    *   $[1 + (x/z)^2]^2 = [1 + (1.6)^2]^2 = [1 + 2.56]^2 = [3.56]^2 = 12.67$
    *   $\sigma_z = \frac{2 \times 100}{\pi \times 5} \frac{1}{12.67} = 12.73 \text{ kPa} \times \frac{1}{12.67} \approx 1.00 \text{ kPa}$

3.  **Answer:**
    *   $B = 2.5 \text{ m}$, $q = 120 \text{ kPa}$, $z = 4 \text{ m}$
    *   $\frac{B}{2z} = \frac{2.5}{2 \times 4} = \frac{2.5}{8} = 0.3125$
    *   $\theta_1 = \arctan(0.3125) \approx 17.35^\circ \approx 0.303 \text{ radians}$
    *   $\sin(\theta_1) \approx 0.300$, $\cos(\theta_1) \approx 0.954$
    *   $\sigma_z = \frac{120}{\pi} [0.303 + (0.300)(0.954)] = \frac{120}{\pi} [0.303 + 0.286] = \frac{120}{\pi} [0.589] \approx 38.2 \times 0.589 \approx 22.5 \text{ kPa}$

4.  **Answer:**
    *   $R = 2 \text{ m}$, $q = 180 \text{ kPa}$, $z = 3 \text{ m}$
    *   $\frac{R}{z} = \frac{2}{3} \approx 0.667$
    *   $(\frac{R}{z})^2 = (0.667)^2 \approx 0.445$
    *   $1 + (\frac{R}{z})^2 = 1 + 0.445 = 1.445$
    *   $(1 + (\frac{R}{z})^2)^{3/2} = (1.445)^{3/2} \approx 1.734$
    *   $\sigma_z = 180 \text{ kPa} \left[ 1 - \frac{1}{1.734} \right] = 180 \text{ kPa} [1 - 0.577] = 180 \text{ kPa} [0.423] \approx 76.14 \text{ kPa}$

5.  **Answer:** (Refer to Section 2.3 for the detailed explanation of assumptions and limitations.)

---

### Important Points to Remember

*   **Effective Stress is Key:** While this section focuses on total stress distribution, remember that the soil skeleton carries the **effective stress**, which dictates its strength and deformation. $\sigma' = \sigma - u$.
*   **Boussinesq's is a Foundation:** It's a theoretical basis for stress distribution in elastic media. Its results are often used as an approximation for real soils.
*   **Influence Factors:** For uniformly distributed loads (strip, circular, rectangular), influence charts or tables are often used, which are derived from Boussinesq's equations and are more practical for engineering applications.
*   **Decreasing Stress with Depth:** Generally, the induced vertical stress from surface loads decreases as the depth ($z$) increases.
*   **Radial Influence:** For point and line loads, the stress decreases as the horizontal distance ($r$ or $x$) from the load increases.
*   **Foundation Shape Matters:** The distribution of stress beneath a strip footing differs from that beneath a circular footing.
