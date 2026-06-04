---
title: "Vertical pressure due to loading on rectangular area and Fadum’s chart (Brief description only)"
subject: "SOIL MECHANICS"
module: "Module 3: Principle of effective stress "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81097c"
status: "completed"
scrapedAt: "2026-05-20T18:47:02.737Z"
---
# SOIL MECHANICS: Module 3 - Principle of Effective Stress

## Topic: Vertical Pressure Due to Loading on Rectangular Area and Fadum’s Chart

This topic focuses on how external loads applied to the surface of a soil mass cause an increase in vertical stress at different depths. We will explore how to calculate this stress for a rectangular loaded area and introduce Fadum's Chart as a graphical tool for simplifying these calculations.

---

### Learning Outcomes:

*   Understand the concept of vertical stress distribution due to a uniformly distributed load on a rectangular area.
*   Learn how to calculate the increase in vertical stress at a point within the soil mass.
*   Be introduced to Fadum's Chart and its application in estimating vertical pressure.

---

### 1. Vertical Pressure Due to Loading on a Rectangular Area

When a uniformly distributed load is applied to the surface of a soil mass over a rectangular area, the stress within the soil body increases. This increase in stress is not uniform with depth and varies depending on the location of the point within the soil mass relative to the loaded area.

**Key Concept:** The increase in vertical stress ($\Delta\sigma_z$) at a point within the soil mass is a result of the external load.

**Governing Principle:** The theory of elasticity is often used to determine the stress distribution. For a uniformly distributed load ($q$) over a rectangular area, the increase in vertical stress at a depth $z$ below the surface can be calculated using various formulas.

**General Approach:**

The calculation involves integrating stress contributions from infinitesimal elements of the loaded area. For a rectangular area, this leads to complex mathematical expressions. Fortunately, simplified methods and charts have been developed.

**Simplified Formula (Conceptual):**

While the full derivation is complex, the concept involves considering the load as a distribution of point loads. The stress at a point below the surface is influenced by the distance from the loaded area and the depth.

---

### 2. Fadum’s Chart

**What is it?**

Fadum's Chart is a graphical method developed by E.L. Fadum to estimate the increase in vertical stress at a point at a specific depth below a uniformly loaded rectangular area. It simplifies the complex mathematical calculations.

**How it works:**

1.  **Dimensionless Parameters:** The chart uses dimensionless parameters related to the dimensions of the loaded rectangle and the depth of the point of interest.
2.  **Shape Factors:** By varying the ratios of the dimensions of the loaded rectangle (length and width) to the depth ($z$), different "shape factors" are obtained.
3.  **Graphical Interpolation:** The user finds the appropriate curve on the chart corresponding to the shape of the loaded area and interpolates to find the stress increase based on the dimensionless parameters.

**Key Parameters for Fadum’s Chart:**

*   **Loaded Area Dimensions:** Length ($L$) and Width ($B$) of the rectangular loaded area.
*   **Depth of Interest:** Depth ($z$) below the loaded surface where the stress increase is to be calculated.
*   **Position of the Point:** The location of the point relative to the loaded area (e.g., directly below the center, below a corner, or below a side). Fadum's chart is primarily used for points directly below the center or corner of the loaded rectangle.

**Typical Chart Structure:**

A typical Fadum's chart will have:

*   **X-axis:** Usually represents the ratio of the horizontal distance from the center of the loaded area to the depth ($r/z$, where $r$ is the horizontal distance).
*   **Y-axis:** Usually represents a factor that, when multiplied by the applied load ($q$), gives the stress increase. This factor is dependent on the shape of the loaded area.
*   **Curves:** Different curves represent various ratios of the loaded rectangle's dimensions to the depth (e.g., $B/z$ or $L/z$).

**Application Steps (General):**

1.  **Define the Loaded Area:** Determine the dimensions ($L$ and $B$) of the rectangular loaded area.
2.  **Identify the Point of Interest:** Specify the depth ($z$) and its horizontal position relative to the loaded area.
3.  **Calculate Dimensionless Ratios:** Calculate the relevant ratios such as $B/z$ and $L/z$.
4.  **Locate on the Chart:** Use the calculated ratios to find the corresponding point on Fadum's Chart.
5.  **Read the Stress Factor:** Interpolate to read the stress factor from the chart.
6.  **Calculate Stress Increase:** Multiply the stress factor by the applied uniform load ($q$) to get the increase in vertical stress ($\Delta\sigma_z$).

**Important Note on Fadum's Chart:**

Fadum's Chart is most convenient for calculating stress at points directly below the center or a corner of a rectangular loaded area. For points not directly below these locations, other methods or more complex charts might be needed.

---

### 3. Examples (Conceptual)

**Example 1: Simple Stress Increase**

Imagine a square loaded area of 2m x 2m with a uniform load of 50 kPa. You want to find the stress increase at a depth of 3m directly below the center of the loaded area.

*   **Using Fadum's Chart:** You would calculate $B/z = 2m/3m = 0.67$ and $L/z = 2m/3m = 0.67$. You would then locate the intersection of these ratios on Fadum's chart (or the appropriate section of it) to find a stress factor. Multiplying this factor by 50 kPa would give you $\Delta\sigma_z$.

**Example 2: Stress Increase at a Corner**

Consider a rectangular loaded area of 4m x 6m with a uniform load of 100 kPa. You need to find the stress increase at a depth of 5m directly below one of the corners.

*   **Using Fadum's Chart:** You would calculate $B/z = 4m/5m = 0.8$ and $L/z = 6m/5m = 1.2$. You would then use the portion of Fadum's chart designed for calculating stress below a corner to find the stress factor for these ratios. The stress increase would be this factor multiplied by 100 kPa.

---

### 4. Practice Questions/Exercises

**Question 1:**

A uniformly distributed load of $150 \, \text{kN/m}^2$ is applied over a rectangular area of $5 \, \text{m} \times 8 \, \text{m}$. Calculate the increase in vertical stress at a depth of $4 \, \text{m}$ directly below the center of the loaded area. (Assume you have access to Fadum's Chart or can conceptually estimate based on its principles).

**Question 2:**

A foundation with a rectangular shape of $6 \, \text{m} \times 10 \, \text{m}$ exerts a uniform pressure of $200 \, \text{kPa}$ on the soil surface. Determine the increase in vertical stress at a depth of $5 \, \text{m}$ directly below one of the corners of the loaded area. (Assume you have access to Fadum's Chart or can conceptually estimate based on its principles).

---

### Answers to Practice Questions:

**Answer 1:**

*   **Loaded Area:** $B = 5 \, \text{m}$, $L = 8 \, \text{m}$
*   **Applied Load:** $q = 150 \, \text{kN/m}^2$
*   **Depth:** $z = 4 \, \text{m}$
*   **Point Location:** Directly below the center.

To solve this using Fadum's Chart, you would calculate the ratios:
$B/z = 5 \, \text{m} / 4 \, \text{m} = 1.25$
$L/z = 8 \, \text{m} / 4 \, \text{m} = 2.0$

Using a standard Fadum's chart (or a derived formula), for a point directly below the center, you would look up the intersection of the curves corresponding to $B/z = 1.25$ and $L/z = 2.0$. The chart would provide a factor (let's call it $I$).

The increase in vertical stress is $\Delta\sigma_z = q \times I$.

*(Note: Without the actual chart, we cannot provide a precise numerical answer for 'I'. However, the process involves using the chart. For illustrative purposes, let's assume an interpolated value of $I \approx 0.38$ from a typical chart for these ratios.)*

**Conceptual Answer:** $\Delta\sigma_z = 150 \, \text{kN/m}^2 \times (\text{Value from Fadum's Chart for } B/z=1.25, L/z=2.0)$

**Answer 2:**

*   **Loaded Area:** $B = 6 \, \text{m}$, $L = 10 \, \text{m}$
*   **Applied Load:** $q = 200 \, \text{kPa}$
*   **Depth:** $z = 5 \, \text{m}$
*   **Point Location:** Directly below a corner.

To solve this using Fadum's Chart for a point below the corner, you would calculate the ratios:
$B/z = 6 \, \text{m} / 5 \, \text{m} = 1.2$
$L/z = 10 \, \text{m} / 5 \, \text{m} = 2.0$

You would then use the specific section of Fadum's chart designed for corner influence. The chart would provide a factor (let's call it $I_{corner}$).

The increase in vertical stress is $\Delta\sigma_z = q \times I_{corner}$.

*(Note: Again, without the actual chart, we cannot provide a precise numerical answer. The process involves using the chart. For illustrative purposes, let's assume an interpolated value of $I_{corner} \approx 0.14$ from a typical chart for these ratios.)*

**Conceptual Answer:** $\Delta\sigma_z = 200 \, \text{kPa} \times (\text{Value from Fadum's Chart for corner influence with } B/z=1.2, L/z=2.0)$

---

### Important Points to Remember:

*   **Uniform Load:** This method applies to uniformly distributed loads. Non-uniform loads require different calculation methods.
*   **Elasticity Theory:** The underlying principle is based on the theory of elasticity, which assumes the soil behaves as an elastic material.
*   **Depth Dependence:** Vertical stress increase decreases with increasing depth.
*   **Shape Dependence:** The stress distribution is significantly influenced by the shape and dimensions of the loaded area.
*   **Fadum's Chart Simplification:** Fadum's Chart is a practical tool to avoid complex integration, especially for points directly under the center or corners of rectangular loads.
*   **Dimensionless Ratios:** The key to using Fadum's Chart effectively is calculating the correct dimensionless ratios of loaded area dimensions to depth.
*   **Interpolation:** Be prepared to interpolate between curves on the chart for accurate results.
*   **Scope of Fadum's Chart:** Primarily for rectangular areas and points directly below the center or corners. For other locations, more specialized charts or methods exist (e.g., Boussinesq's equation for point loads and its extensions).

---
