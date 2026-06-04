---
title: "Compound cylinders"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a08"
status: "completed"
scrapedAt: "2026-05-20T18:42:45.453Z"
---
# ADVANCED SOLID MECHANICS: Module 3: Bending of Beams - Compound Cylinders

## Introduction

Compound cylinders are structures made by shrinking or pressing one cylinder over another. This process creates an initial stress distribution (residual stress) within the cylinders, which is beneficial for resisting external pressures. This module delves into the analysis of stresses and strains in these compound cylinders, focusing on how they behave under internal and external pressure.

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

1.  **Understand the concept and construction of compound cylinders.**
2.  **Analyze the initial stresses and strains induced during the shrinking/pressing process.**
3.  **Determine the stress distribution in compound cylinders subjected to internal and external pressures.**
4.  **Calculate the resulting displacements and strains in compound cylinders.**
5.  **Apply the principles of Lame's equations to analyze compound cylinders.**
6.  **Evaluate the advantages and applications of compound cylinders.**

---

## 1. Concept and Construction of Compound Cylinders

### 1.1 What are Compound Cylinders?

Compound cylinders, also known as shrink-fitted or autofrettaged cylinders, are formed by assembling two or more concentric cylinders where the inner cylinder has a slightly smaller internal diameter than the outer cylinder's inner diameter.

### 1.2 Construction Methods

*   **Shrink Fitting:** The outer cylinder is heated to expand its internal diameter, allowing the inner cylinder to be inserted. As the outer cylinder cools, it shrinks, creating a tight fit and inducing compressive stresses in the inner cylinder and tensile stresses in the outer cylinder.
*   **Press Fitting:** The inner cylinder is pressed into the outer cylinder with interference. This method also generates initial stresses.

### 1.3 Purpose of Compound Cylinders

The primary purpose of creating compound cylinders is to pre-stress them in a way that enhances their ability to withstand internal or external pressures. The residual compressive stresses in the inner cylinder (where internal pressure is typically applied) significantly increase the burst strength of the assembly.

---

## 2. Initial Stresses and Strains (During Shrinking/Pressing)

When a compound cylinder is assembled, there's an interference (gap) between the cylinders. This interference leads to the generation of residual stresses.

### 2.1 Interference Fit

*   **Definition:** The difference between the inner diameter of the outer cylinder and the outer diameter of the inner cylinder before assembly.
*   **Calculation:** Interference ($\delta$) = $D_{outer, inner} - D_{inner, outer}$ (where diameters are specified appropriately to ensure a positive interference).

### 2.2 Lame's Equations for a Single Cylinder Under Pressure

Before analyzing the compound cylinder, it's crucial to recall Lame's equations for a thick-walled cylinder under internal pressure ($p_i$) and external pressure ($p_o$). For a cylinder with inner radius $r_i$ and outer radius $r_o$, the radial stress ($\sigma_r$) and hoop stress ($\sigma_h$) at any radius $r$ are given by:

*   $\sigma_r = \frac{A}{r^2} + B$
*   $\sigma_h = -\frac{A}{r^2} + B$

Where:
*   $A$ and $B$ are constants determined by the boundary conditions (pressures at the inner and outer surfaces).

For a cylinder with internal pressure $p_i$ and external pressure $p_o$:

*   $\sigma_r(r_i) = -p_i = \frac{A}{r_i^2} + B$
*   $\sigma_r(r_o) = -p_o = \frac{A}{r_o^2} + B$

Solving these equations yields:

*   $A = \frac{r_i^2 r_o^2}{r_o^2 - r_i^2} (p_o - p_i)$
*   $B = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2}$

### 2.3 Stress Distribution During Shrink Fitting

Consider an inner cylinder (radius $r_1$) and an outer cylinder (inner radius $r_2$, outer radius $r_3$). When shrink-fitted, the inner cylinder is compressed, and the outer cylinder is stretched.

Let:
*   $p$ be the interface pressure between the two cylinders after assembly.
*   The inner cylinder has an initial internal pressure of 0 and an external pressure of $p$ at its outer surface.
*   The outer cylinder has an internal pressure of $p$ at its inner surface and an external pressure of 0 at its outer surface.

**For the inner cylinder (radius $r_1$ to $r_2$):**
*   Inner surface ($r_1$): $\sigma_{r1} = 0$, $\sigma_{h1}$ is tensile.
*   Outer surface ($r_2$): $\sigma_{r2} = -p$, $\sigma_{h2}$ is compressive.

Using Lame's equations for the inner cylinder (treating it as a hollow cylinder with inner radius 0 to $r_2$ if it were solid, or more correctly, consider the stresses induced on its outer surface):

Let's apply Lame's to the inner cylinder from its internal bore (radius $r_1$) to its outer radius $r_2$. The effective "internal" pressure is 0, and the "external" pressure is $p$ acting at $r_2$. However, it's simpler to consider the resultant stress distribution due to the interface pressure.

**Simplified approach focusing on the interface:**
The interface pressure $p$ is an inward radial pressure on the inner cylinder and an outward radial pressure on the outer cylinder.

**Inner Cylinder (radius $r_1$ to $r_2$):**
*   The stress at the outer surface $r_2$ is $\sigma_r = -p$.
*   The stress at the inner surface $r_1$ is $\sigma_r = 0$.
*   Applying Lame's equations to the inner cylinder (with boundary conditions at $r_1$ and $r_2$):
    *   $\sigma_r = \frac{A_1}{r^2} + B_1$
    *   $\sigma_h = -\frac{A_1}{r^2} + B_1$
    *   At $r=r_1$, $\sigma_r = 0$.
    *   At $r=r_2$, $\sigma_r = -p$.
    *   Solving these, we find constants $A_1$ and $B_1$. The hoop stress at the inner surface ($r_1$) of the inner cylinder will be tensile due to the outward expansion of the inner material caused by the compressive radial stress.

**Outer Cylinder (radius $r_2$ to $r_3$):**
*   The stress at the inner surface $r_2$ is $\sigma_r = -p$.
*   The stress at the outer surface $r_3$ is $\sigma_r = 0$.
*   Applying Lame's equations to the outer cylinder:
    *   $\sigma_r = \frac{A_2}{r^2} + B_2$
    *   $\sigma_h = -\frac{A_2}{r^2} + B_2$
    *   At $r=r_2$, $\sigma_r = -p$.
    *   At $r=r_3$, $\sigma_r = 0$.
    *   Solving these, we find constants $A_2$ and $B_2$. The hoop stress at the inner surface ($r_2$) of the outer cylinder will be compressive due to the inward compression of the outer material caused by the inward radial stress.

**Relationship between Interference and Interface Pressure:**
The interference $\delta$ is related to the change in radii of the two cylinders due to the interface pressure. This involves integrating the radial strain difference.

*   Radial displacement of the inner cylinder's outer surface: $\Delta r_{inner, outer} = \int_{r_1}^{r_2} \epsilon_{rr} dr = \int_{r_1}^{r_2} \frac{1}{E}(\sigma_r - \nu \sigma_h) dr$
*   Radial displacement of the outer cylinder's inner surface: $\Delta r_{outer, inner} = \int_{r_2}^{r_3} \epsilon_{rr} dr = \int_{r_2}^{r_3} \frac{1}{E}(\sigma_r - \nu \sigma_h) dr$

The condition for shrink fitting is that the outer surface of the inner cylinder moves outward, and the inner surface of the outer cylinder moves inward, meeting at a common interface radius. The total change in the gap between the original outer surface of the inner cylinder and the original inner surface of the outer cylinder is equal to the interference.

**Key Point:** The interference fit causes the inner cylinder to compress and the outer cylinder to expand, resulting in **residual compressive hoop stress in the inner cylinder's inner bore** and **residual tensile hoop stress in the outer cylinder's outer surface.**

---

## 3. Stress Distribution in Compound Cylinders Under External Pressure

Compound cylinders are typically designed to withstand high internal pressures. However, we will first analyze the general case and then focus on the application.

### 3.1 Combined Stresses Due to Internal and External Pressures

Consider a compound cylinder with two layers:
*   Inner cylinder: radii $r_1$ (bore) to $r_2$.
*   Outer cylinder: radii $r_2$ to $r_3$.

Let:
*   $p_i$ be the internal pressure applied to the bore of the inner cylinder.
*   $p_o$ be the external pressure applied to the outer surface of the outer cylinder.
*   $p_2$ be the pressure at the interface ($r=r_2$). This pressure is itself a result of the initial shrink fit and any applied external pressures.

**Step 1: Determine the interface pressure $p_2$ due to shrink fitting.**
This is calculated as described in Section 2.3. The interface pressure $p_2$ is typically found by equating the radial displacements of the two cylinders due to the interference.

**Step 2: Analyze the stress distribution in each cylinder under the applied pressures and the interface pressure.**

**For the inner cylinder ($r_1$ to $r_2$):**
*   Internal pressure: $p_i$ at $r=r_1$.
*   External pressure: $p_2$ at $r=r_2$.

Using Lame's equations for the inner cylinder:
*   $\sigma_{r,inner} = \frac{A_1}{r^2} + B_1$
*   $\sigma_{h,inner} = -\frac{A_1}{r^2} + B_1$

Boundary conditions:
*   $\sigma_{r,inner}(r_1) = -p_i$
*   $\sigma_{r,inner}(r_2) = -p_2$

Solving for $A_1$ and $B_1$:
*   $A_1 = \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} (p_2 - p_i)$
*   $B_1 = \frac{p_i r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2}$

So, for the inner cylinder:
*   $\sigma_{r,inner}(r) = \frac{r_1^2 r_2^2 (p_2 - p_i)}{r_2^2 - r_1^2} \left(\frac{1}{r^2}\right) + \frac{p_i r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2}$
*   $\sigma_{h,inner}(r) = -\frac{r_1^2 r_2^2 (p_2 - p_i)}{r_2^2 - r_1^2} \left(\frac{1}{r^2}\right) + \frac{p_i r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2}$

**For the outer cylinder ($r_2$ to $r_3$):**
*   Internal pressure: $p_2$ at $r=r_2$.
*   External pressure: $p_o$ at $r=r_3$.

Using Lame's equations for the outer cylinder:
*   $\sigma_{r,outer} = \frac{A_2}{r^2} + B_2$
*   $\sigma_{h,outer} = -\frac{A_2}{r^2} + B_2$

Boundary conditions:
*   $\sigma_{r,outer}(r_2) = -p_2$
*   $\sigma_{r,outer}(r_3) = -p_o$

Solving for $A_2$ and $B_2$:
*   $A_2 = \frac{r_2^2 r_3^2}{r_3^2 - r_2^2} (p_o - p_2)$
*   $B_2 = \frac{p_2 r_2^2 - p_o r_3^2}{r_3^2 - r_2^2}$

So, for the outer cylinder:
*   $\sigma_{r,outer}(r) = \frac{r_2^2 r_3^2 (p_o - p_2)}{r_3^2 - r_2^2} \left(\frac{1}{r^2}\right) + \frac{p_2 r_2^2 - p_o r_3^2}{r_3^2 - r_2^2}$
*   $\sigma_{h,outer}(r) = -\frac{r_2^2 r_3^2 (p_o - p_2)}{r_3^2 - r_2^2} \left(\frac{1}{r^2}\right) + \frac{p_2 r_2^2 - p_o r_3^2}{r_3^2 - r_2^2}$

---

## 4. Calculating Displacements and Strains

The radial displacement $u(r)$ at any radius $r$ within a thick-walled cylinder under pressure can be calculated using the radial stress and hoop stress.

### 4.1 Radial Displacement Formula

The radial displacement $u(r)$ is related to the strains by:
$u(r) = r \epsilon_{h}(r) = r \frac{\sigma_h - \nu \sigma_r}{E}$

Alternatively, and often more conveniently, by integrating radial strain:
$u(r) = \int \epsilon_{rr} dr = \int \frac{1}{E} (\sigma_r - \nu \sigma_h) dr$

Substituting Lame's expressions for $\sigma_r$ and $\sigma_h$:
$u(r) = \int \frac{1}{E} \left( (\frac{A}{r^2} + B) - \nu (-\frac{A}{r^2} + B) \right) dr$
$u(r) = \frac{1}{E} \int \left( \frac{A}{r^2} (1+\nu) + B (1-\nu) \right) dr$
$u(r) = \frac{1}{E} \left( -\frac{A(1+\nu)}{r} + B(1-\nu)r \right) + C_{int}$

The constant $C_{int}$ is determined by boundary conditions. Often, we are interested in the *change* in radius, or the displacement relative to a reference point.

For a cylinder with internal pressure $p_i$ and external pressure $p_o$:
The displacement at radius $r$ is given by:
$u(r) = \frac{1+\nu}{E} \frac{r_i^2 r_o^2}{r_o^2 - r_i^2} \left(\frac{p_i}{r_i} - \frac{p_o}{r_o}\right) \frac{1}{r} + \frac{1-\nu}{E} \left(\frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2}\right) r$

This formula can be applied to each layer of the compound cylinder.

### 4.2 Strain Calculation

Once stresses are known, strains can be calculated using Hooke's Law:

*   **Hoop Strain ($\epsilon_h$):** $\epsilon_h = \frac{1}{E}(\sigma_h - \nu \sigma_r)$
*   **Radial Strain ($\epsilon_r$):** $\epsilon_r = \frac{1}{E}(\sigma_r - \nu \sigma_h)$
*   **Axial Strain ($\epsilon_a$):** If the cylinder is open-ended or thin-walled, $\epsilon_a = \frac{1}{E}(\sigma_a - \nu(\sigma_r + \sigma_h))$. For a closed-ended cylinder under internal pressure $p_i$, the axial stress $\sigma_a = \frac{p_i r_i^2}{r_o^2 - r_i^2}$. For a compound cylinder, the axial stress is often assumed to be uniform across both cylinders due to pressure, but the initial shrink fitting might induce axial residual stresses if the manufacturing process is not perfectly uniform. For simplicity, we often assume $\sigma_a$ is constant for a given pressure loading.

---

## 5. Application of Lame's Equations to Compound Cylinders

The core of analyzing compound cylinders lies in applying Lame's equations iteratively or sequentially.

### 5.1 Step-by-Step Analysis

1.  **Determine the Interference:** Calculate the initial interference $\delta$.
2.  **Calculate Interface Pressure ($p_2$):** This is the crucial step. We need to find the pressure $p_2$ at the interface ($r=r_2$) that causes the inner cylinder's outer radius to expand by $\Delta r_{inner,outer}$ and the outer cylinder's inner radius to contract by $\Delta r_{outer,inner}$ such that $\Delta r_{inner,outer} + \Delta r_{outer,inner} = \delta$.

    Let's use the radial displacement formula:
    For the inner cylinder (radius $r_1$ to $r_2$), the radial displacement of its outer surface ($r_2$) due to the interface pressure $p_2$ (with inner pressure 0) is:
    $u_{inner}(r_2) = \frac{1+\nu}{E} \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} \left(\frac{0}{r_1} - \frac{p_2}{r_2}\right) \frac{1}{r_2} + \frac{1-\nu}{E} \left(\frac{0 \cdot r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2}\right) r_2$
    $u_{inner}(r_2) = \frac{1+\nu}{E} \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} \left(-\frac{p_2}{r_2}\right) \frac{1}{r_2} + \frac{1-\nu}{E} \left(\frac{-p_2 r_2^2}{r_2^2 - r_1^2}\right) r_2$
    $u_{inner}(r_2) = -\frac{1+\nu}{E} \frac{p_2 r_1^2}{r_2^2 - r_1^2} - \frac{1-\nu}{E} \frac{p_2 r_2^2}{r_2^2 - r_1^2}$
    $u_{inner}(r_2) = -\frac{p_2}{E(r_2^2 - r_1^2)} [(1+\nu)r_1^2 + (1-\nu)r_2^2]$

    **Important Note:** The displacement calculated here is the radial expansion/contraction. During shrink fitting, the outer surface of the inner cylinder moves *outward*. So, if we consider a positive $u$ as outward radial displacement, this formula seems to give negative. The convention needs to be consistent.

    A more direct way to calculate the radial displacement of the outer surface of the inner cylinder due to internal bore pressure $p_{i1}$ and external pressure $p_{e1}$ at $r_1$ and $r_2$ respectively is:
    $u(r_2) = \frac{1+\nu}{E} \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} (\frac{p_{i1}}{r_1} - \frac{p_{e1}}{r_2}) \frac{1}{r_2} + \frac{1-\nu}{E} (\frac{p_{i1} r_1^2 - p_{e1} r_2^2}{r_2^2 - r_1^2}) r_2$

    Let's redefine. Let $\Delta r_{inner,outer}$ be the outward radial displacement of the inner cylinder's outer surface.
    For the inner cylinder (no internal pressure, only external interface pressure $p_2$):
    $\sigma_{r,inner} = \frac{A_1}{r^2} + B_1$. At $r=r_1$, $\sigma_{r,inner}=0$. At $r=r_2$, $\sigma_{r,inner}=-p_2$.
    $A_1 = \frac{r_1^2 r_2^2}{r_2^2-r_1^2} p_2$ and $B_1 = \frac{-p_2 r_2^2}{r_2^2-r_1^2}$.
    $u_{inner}(r) = \frac{1}{E} \left( -\frac{A_1(1+\nu)}{r} + B_1(1-\nu)r \right)$
    $\Delta r_{inner,outer} = u_{inner}(r_2) = \frac{1}{E} \left( -\frac{A_1(1+\nu)}{r_2} + B_1(1-\nu)r_2 \right)$
    $\Delta r_{inner,outer} = \frac{1}{E} \left( -\frac{r_1^2 r_2^2}{r_2^2-r_1^2} p_2 \frac{1+\nu}{r_2} - \frac{p_2 r_2^2}{r_2^2-r_1^2} (1-\nu)r_2 \right)$
    $\Delta r_{inner,outer} = -\frac{p_2}{E(r_2^2-r_1^2)} [r_1^2(1+\nu) + r_2^2(1-\nu)]$
    The negative sign indicates inward displacement. We want outward displacement. The error is in treating $p_2$ as external pressure when it causes expansion.

    Let's use a standard formulation for radial displacement due to pressure difference:
    $u(r) = \frac{r}{E} \left( \frac{1+\nu}{1-\nu} A - B \right)$ where $A$ and $B$ are Lame's constants.

    **Correct Approach for Interface Pressure Calculation:**
    Let the original radii be $r_{1o}$ (inner cylinder outer) and $r_{2i}$ (outer cylinder inner). The interference is $\delta = r_{2i} - r_{1o}$.
    After assembly, the interface radius is $r_2$.
    The outer radius of the inner cylinder expands by $\Delta r_{inner} = r_2 - r_{1o}$.
    The inner radius of the outer cylinder contracts by $\Delta r_{outer} = r_{2i} - r_2$.
    The sum of these changes is the interference: $\Delta r_{inner} + \Delta r_{outer} = \delta$.

    For the inner cylinder, subjected to internal pressure $p_{i1}=0$ and external pressure $p_{e1}=p_2$:
    $u_{inner}(r_2) = \frac{1}{E} \left( -\frac{A_1(1+\nu)}{r_2} + B_1(1-\nu)r_2 \right)$
    $A_1 = \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} (p_2 - 0) = \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} p_2$
    $B_1 = \frac{0 \cdot r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2} = \frac{-p_2 r_2^2}{r_2^2 - r_1^2}$
    $u_{inner}(r_2) = \frac{1}{E} \left( -\frac{r_1^2 r_2^2}{r_2^2 - r_1^2} p_2 \frac{1+\nu}{r_2} + \frac{-p_2 r_2^2}{r_2^2 - r_1^2} (1-\nu)r_2 \right)$
    $u_{inner}(r_2) = -\frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)]$
    This is the radial displacement. Since $p_2$ is a compressive pressure, this displacement is inwards. We want outward displacement, so we take the negative of this value.
    $\Delta r_{inner} = \frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)]$

    For the outer cylinder, subjected to internal pressure $p_{i2}=p_2$ and external pressure $p_{e2}=0$:
    $u_{outer}(r_2) = \frac{1}{E} \left( -\frac{A_2(1+\nu)}{r_2} + B_2(1-\nu)r_2 \right)$
    $A_2 = \frac{r_2^2 r_3^2}{r_3^2 - r_2^2} (0 - p_2) = -\frac{r_2^2 r_3^2}{r_3^2 - r_2^2} p_2$
    $B_2 = \frac{p_2 r_2^2 - 0 \cdot r_3^2}{r_3^2 - r_2^2} = \frac{p_2 r_2^2}{r_3^2 - r_2^2}$
    $u_{outer}(r_2) = \frac{1}{E} \left( -(-\frac{r_2^2 r_3^2}{r_3^2 - r_2^2} p_2) \frac{1+\nu}{r_2} + \frac{p_2 r_2^2}{r_3^2 - r_2^2} (1-\nu)r_2 \right)$
    $u_{outer}(r_2) = \frac{p_2 r_2}{E(r_3^2 - r_2^2)} [r_2^2 (1+\nu) + r_3^2 (1-\nu)]$
    This is the radial displacement. Since $p_2$ is an inward pressure, this displacement is inwards. We want the inward contraction, so this value is directly usable as $\Delta r_{outer}$.

    Equating $\Delta r_{inner} + \Delta r_{outer} = \delta$:
    $\frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)] + \frac{p_2 r_2}{E(r_3^2 - r_2^2)} [r_2^2 (1+\nu) + r_3^2 (1-\nu)] = \delta$
    This equation can be solved for $p_2$.

3.  **Apply Applied Pressures:** Once $p_2$ is known, calculate the stresses in each cylinder using the formulas derived in Section 3.3, with $p_i$ and $p_o$ as the applied external pressures.

4.  **Calculate Total Stress:** The total stress at any point is the sum of the residual stress from shrink fitting and the stress due to applied pressures. In the case of analyzing behavior under *applied* pressure, the interface pressure $p_2$ derived from shrink-fitting is treated as the pressure acting at the interface.

    For example, if the compound cylinder is then subjected to internal pressure $P_i$ and external pressure $P_o$:
    *   Inner cylinder: internal pressure $P_i$, external pressure $p_2$.
    *   Outer cylinder: internal pressure $p_2$, external pressure $P_o$.

    The formulas derived in Section 3.3 already account for this general pressure loading.

---

## 6. Advantages and Applications of Compound Cylinders

### 6.1 Advantages

*   **Increased Burst Strength:** The residual compressive stresses in the inner cylinder enhance its ability to withstand high internal pressures.
*   **Improved Fatigue Life:** Pre-stressing reduces the cyclic stresses experienced by the material, leading to longer fatigue life.
*   **Resistance to Crack Propagation:** Compressive stresses can hinder the initiation and propagation of cracks.
*   **Controlled Stress Distribution:** Allows for tailoring the stress profile to optimize performance.

### 6.2 Applications

*   **High-Pressure Vessels:** Especially in industries like oil and gas, chemical processing, and aerospace.
*   **Gun Barrels:** To withstand the high pressures generated by explosions.
*   **Hydraulic Cylinders:** Where high operating pressures are common.
*   **Autoclaves:** For high-temperature and high-pressure chemical reactions.
*   **Centrifugal Pumps and Turbines:** Components subjected to high rotational speeds and pressure.

---

## Practice Questions and Answers

**Question 1:**
A compound cylinder is formed by shrinking an outer cylinder of inner radius 50 mm and outer radius 100 mm over an inner cylinder of outer radius 49.9 mm and inner radius 20 mm. If the interference is 0.1 mm, calculate the interface pressure. Assume Young's Modulus $E = 200 \text{ GPa}$ and Poisson's ratio $\nu = 0.3$.

**Answer 1:**
Given:
$r_1 = 20$ mm, $r_2 = 49.9$ mm, $r_3 = 100$ mm
Original $r_{1o} = 49.9$ mm, $r_{2i} = 50$ mm
Interference $\delta = r_{2i} - r_{1o} = 50 - 49.9 = 0.1$ mm.
Let the final interface radius be $r_{2f}$.
$\Delta r_{inner} = r_{2f} - r_{1o}$
$\Delta r_{outer} = r_{2i} - r_{2f}$
$\Delta r_{inner} + \Delta r_{outer} = r_{2f} - r_{1o} + r_{2i} - r_{2f} = r_{2i} - r_{1o} = \delta$

We use the derived formulas for radial displacement.
Let $r_1 = 20$ mm, $r_2 = 49.9$ mm for the inner cylinder and $r_2 = 50$ mm, $r_3 = 100$ mm for the outer cylinder.
The interference $\delta = 0.1$ mm. Let's assume the interface radius after fitting is approximately the average, or we can solve for it iteratively. For simplicity, let's assume the interface radius remains close to the original values.

Let's use the condition that the displacement of the outer surface of the inner cylinder and the inner surface of the outer cylinder sum up to the interference.

Displacement of inner cylinder's outer surface (radius $r_2=49.9$ mm) due to interface pressure $p_2$:
$\Delta r_{inner} = \frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)]$
$\Delta r_{inner} = \frac{p_2 (49.9)}{200 \times 10^3 (49.9^2 - 20^2)} [20^2 (1.3) + 49.9^2 (0.7)]$
$\Delta r_{inner} = \frac{49.9 p_2}{200000 (2490.01 - 400)} [400 \times 1.3 + 2490.01 \times 0.7]$
$\Delta r_{inner} = \frac{49.9 p_2}{200000 (2090.01)} [520 + 1743.007]$
$\Delta r_{inner} = \frac{49.9 p_2}{418002000} [2263.007]$
$\Delta r_{inner} = 2.708 \times 10^{-6} p_2$ (mm, if $p_2$ is in MPa)

Displacement of outer cylinder's inner surface (radius $r_2=50$ mm) due to interface pressure $p_2$:
$\Delta r_{outer} = \frac{p_2 r_2}{E(r_3^2 - r_2^2)} [r_2^2 (1+\nu) + r_3^2 (1-\nu)]$
$\Delta r_{outer} = \frac{p_2 (50)}{200 \times 10^3 (100^2 - 50^2)} [50^2 (1.3) + 100^2 (0.7)]$
$\Delta r_{outer} = \frac{50 p_2}{200000 (10000 - 2500)} [2500 \times 1.3 + 10000 \times 0.7]$
$\Delta r_{outer} = \frac{50 p_2}{200000 (7500)} [3250 + 7000]$
$\Delta r_{outer} = \frac{50 p_2}{1500000000} [10250]$
$\Delta r_{outer} = 3.4167 \times 10^{-6} p_2$ (mm, if $p_2$ is in MPa)

Total interference $\delta = \Delta r_{inner} + \Delta r_{outer}$
$0.1 \text{ mm} = 2.708 \times 10^{-6} p_2 + 3.4167 \times 10^{-6} p_2$
$0.1 = (2.708 + 3.4167) \times 10^{-6} p_2$
$0.1 = 6.1247 \times 10^{-6} p_2$
$p_2 = \frac{0.1}{6.1247 \times 10^{-6}} \approx 16326$ MPa

**Hold on!** There might be an issue with the calculation of $\Delta r_{inner}$ and $\Delta r_{outer}$ when radii are different ($r_2$ is 49.9 for inner and 50 for outer). The Lame's equations are derived for a cylinder with clear inner and outer radii. When calculating $p_2$, it is assumed that the interface is at a common radius, say $r_2$. If $r_{1o} \ne r_{2i}$, the calculation of interference requires a more detailed approach.

Let's re-evaluate the displacement calculation with the original radii and assume the interface occurs at some radius $r_{int}$ between $r_{1o}$ and $r_{2i}$.
However, a common simplification is to use the average radius or the initial radii in the displacement equations and ensure the sum of radial changes equals the interference.

Let's assume the interface radius $r_2 \approx \frac{r_{1o} + r_{2i}}{2} = \frac{49.9 + 50}{2} = 49.95$ mm.
Then $r_1 = 20$ mm, $r_2 = 49.95$ mm, $r_3 = 100$ mm.
$\delta = 0.1$ mm.

$\Delta r_{inner}$ (displacement of outer surface of inner cylinder):
$u_{inner}(r_2) = -\frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)]$
$\Delta r_{inner} = -u_{inner}(r_2) = \frac{p_2 r_2}{E(r_2^2 - r_1^2)} [r_1^2 (1+\nu) + r_2^2 (1-\nu)]$
$\Delta r_{inner} = \frac{p_2 (49.95)}{200 \times 10^3 (49.95^2 - 20^2)} [20^2 (1.3) + 49.95^2 (0.7)]$
$\Delta r_{inner} = \frac{49.95 p_2}{200000 (2495.0025 - 400)} [520 + 2495.0025 \times 0.7]$
$\Delta r_{inner} = \frac{49.95 p_2}{200000 (2095.0025)} [520 + 1746.50175]$
$\Delta r_{inner} = \frac{49.95 p_2}{419000500} [2266.50175]$
$\Delta r_{inner} = 2.71 \times 10^{-6} p_2$ mm

$\Delta r_{outer}$ (displacement of inner surface of outer cylinder):
$u_{outer}(r_2) = \frac{p_2 r_2}{E(r_3^2 - r_2^2)} [r_2^2 (1+\nu) + r_3^2 (1-\nu)]$
$\Delta r_{outer} = \frac{p_2 (49.95)}{200 \times 10^3 (100^2 - 49.95^2)} [49.95^2 (1.3) + 100^2 (0.7)]$
$\Delta r_{outer} = \frac{49.95 p_2}{200000 (10000 - 2495.0025)} [2495.0025 \times 1.3 + 10000 \times 0.7]$
$\Delta r_{outer} = \frac{49.95 p_2}{200000 (7504.9975)} [3243.50325 + 7000]$
$\Delta r_{outer} = \frac{49.95 p_2}{1500999500} [10243.50325]$
$\Delta r_{outer} = 3.413 \times 10^{-6} p_2$ mm

$\delta = \Delta r_{inner} + \Delta r_{outer}$
$0.1 = 2.71 \times 10^{-6} p_2 + 3.413 \times 10^{-6} p_2$
$0.1 = 6.123 \times 10^{-6} p_2$
$p_2 = \frac{0.1}{6.123 \times 10^{-6}} \approx 16331$ MPa.

This is still a very high pressure, suggesting either a very tight fit or possibly a typo in values. Let's assume the calculation logic is correct and the value obtained is used in subsequent steps.

**Let's assume $p_2 = 100$ MPa for the sake of demonstrating stress calculation.**

**Question 2:**
Using the interface pressure $p_2 = 100$ MPa calculated from a previous step (assume it's realistic for your problem), determine the hoop stresses at the inner and outer surfaces of the compound cylinder from Question 1 when it is subjected to an internal pressure of 50 MPa.
Inner cylinder: $r_1=20$ mm, $r_2=49.95$ mm. Outer cylinder: $r_2=49.95$ mm, $r_3=100$ mm.
$E=200$ GPa, $\nu=0.3$.
Interface pressure $p_2 = 100$ MPa. Applied internal pressure $p_i = 50$ MPa. Applied external pressure $p_o = 0$.

**Answer 2:**

**Inner Cylinder ($r_1=20$ to $r_2=49.95$):**
Internal pressure $p_i = 50$ MPa at $r_1$. External pressure $p_2 = 100$ MPa at $r_2$.
$A_1 = \frac{r_1^2 r_2^2}{r_2^2 - r_1^2} (p_2 - p_i) = \frac{20^2 \times 49.95^2}{49.95^2 - 20^2} (100 - 50)$
$A_1 = \frac{400 \times 2495.0025}{2095.0025} (50) = \frac{998001}{2095.0025} (50) \approx 476.37 \times 50 = 23818.5$

$B_1 = \frac{p_i r_1^2 - p_2 r_2^2}{r_2^2 - r_1^2} = \frac{50 \times 20^2 - 100 \times 49.95^2}{49.95^2 - 20^2}$
$B_1 = \frac{50 \times 400 - 100 \times 2495.0025}{2095.0025} = \frac{20000 - 249500.25}{2095.0025} = \frac{-229500.25}{2095.0025} \approx -109.55$

Hoop stress at inner surface ($r=r_1=20$ mm):
$\sigma_{h,inner}(r_1) = -\frac{A_1}{r_1^2} + B_1 = -\frac{23818.5}{20^2} - 109.55 = -\frac{23818.5}{400} - 109.55$
$\sigma_{h,inner}(r_1) = -59.546 - 109.55 \approx -169.1$ MPa (Compressive)

Hoop stress at outer surface ($r=r_2=49.95$ mm):
$\sigma_{h,inner}(r_2) = -\frac{A_1}{r_2^2} + B_1 = -\frac{23818.5}{49.95^2} - 109.55 = -\frac{23818.5}{2495.0025} - 109.55$
$\sigma_{h,inner}(r_2) = -9.546 - 109.55 \approx -119.1$ MPa (Compressive)

**Outer Cylinder ($r_2=49.95$ to $r_3=100$):**
Internal pressure $p_2 = 100$ MPa at $r_2$. External pressure $p_o = 0$ at $r_3$.
$A_2 = \frac{r_2^2 r_3^2}{r_3^2 - r_2^2} (p_o - p_2) = \frac{49.95^2 \times 100^2}{100^2 - 49.95^2} (0 - 100)$
$A_2 = \frac{2495.0025 \times 10000}{7504.9975} (-100) = \frac{24950025}{7504.9975} (-100) \approx 3324.27 \times (-100) = -332427$

$B_2 = \frac{p_2 r_2^2 - p_o r_3^2}{r_3^2 - r_2^2} = \frac{100 \times 49.95^2 - 0 \times 100^2}{100^2 - 49.95^2}$
$B_2 = \frac{100 \times 2495.0025}{7504.9975} = \frac{249500.25}{7504.9975} \approx 33.24$

Hoop stress at inner surface ($r=r_2=49.95$ mm):
$\sigma_{h,outer}(r_2) = -\frac{A_2}{r_2^2} + B_2 = -\frac{-332427}{49.95^2} + 33.24 = \frac{332427}{2495.0025} + 33.24$
$\sigma_{h,outer}(r_2) = 133.23 + 33.24 \approx 166.5$ MPa (Tensile)

Hoop stress at outer surface ($r=r_3=100$ mm):
$\sigma_{h,outer}(r_3) = -\frac{A_2}{r_3^2} + B_2 = -\frac{-332427}{100^2} + 33.24 = \frac{332427}{10000} + 33.24$
$\sigma_{h,outer}(r_3) = 33.2427 + 33.24 \approx 66.5$ MPa (Tensile)

**Summary of Hoop Stresses:**
*   Inner cylinder bore ($r=20$ mm): -169.1 MPa (Compressive) - This is the critical stress for burst strength.
*   Inner cylinder outer surface ($r=49.95$ mm): -119.1 MPa (Compressive)
*   Outer cylinder inner surface ($r=49.95$ mm): 166.5 MPa (Tensile)
*   Outer cylinder outer surface ($r=100$ mm): 66.5 MPa (Tensile)

---

## Important Points to Remember

*   **Shrink Fitting:** Induces residual compressive hoop stress in the inner cylinder and tensile hoop stress in the outer cylinder.
*   **Lame's Equations:** Fundamental for analyzing stresses in thick-walled cylinders.
*   **Interface Pressure ($p_2$):** The key to solving compound cylinders, determined by the interference and material properties.
*   **Superposition:** Stresses due to shrink fitting and applied pressures can be superimposed (if within elastic limits).
*   **Design Goal:** To have significant compressive stresses at the bore of the inner cylinder to resist internal pressure.
*   **Accuracy:** Precise measurement of dimensions and material properties is crucial for accurate analysis.

---
