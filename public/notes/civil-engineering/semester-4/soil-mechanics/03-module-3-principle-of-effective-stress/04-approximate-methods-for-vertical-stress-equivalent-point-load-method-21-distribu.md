---
title: "Approximate methods for vertical stress: Equivalent Point Load method & 2:1 Distribution Method - Numerical problems - Pressure Isobars - Pressure bulbs. distribution of contact pressure beneath footings :"
subject: "SOIL MECHANICS"
module: "Module 3: Principle of effective stress "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81097d"
status: "completed"
scrapedAt: "2026-05-20T18:47:03.430Z"
---
# SOIL MECHANICS: Module 3 - Principle of Effective Stress

## Topic: Approximate Methods for Vertical Stress

This module delves into approximate methods for calculating the vertical stress induced in soil masses due to applied loads. We will explore two common methods: the Equivalent Point Load method and the 2:1 Distribution Method. We will also understand the graphical representations of stress distribution through Pressure Isobars and Pressure Bulbs and examine the distribution of contact pressure beneath footings.

---

### Learning Outcomes Covered:

*   Understand and apply approximate methods for calculating vertical stress in soil.
*   Differentiate between the Equivalent Point Load method and the 2:1 Distribution Method.
*   Solve numerical problems involving these approximate methods.
*   Interpret and utilize Pressure Isobars and Pressure Bulbs for stress analysis.
*   Understand the concept of contact pressure distribution beneath footings.

---

### 1. Approximate Methods for Vertical Stress

When external loads are applied to the soil surface, they cause an increase in vertical stress within the soil mass. For complex loading conditions or when exact analytical solutions are cumbersome, approximate methods are employed. These methods provide reasonable estimations of the vertical stress distribution.

---

#### 1.1. Equivalent Point Load Method

This method simplifies a distributed load over an area into an equivalent point load acting at a specific location. It's particularly useful for calculating stress at a considerable depth below the loaded area.

**Key Concept:** The total load is concentrated at a single point, and the stress at a point in the soil mass is calculated using the Boussinesq's point load solution, adjusted for the geometry.

**How it works:**
1.  **Determine the Equivalent Point Load (P):** This is simply the total magnitude of the distributed load.
2.  **Determine the Location of the Equivalent Point Load:** For uniformly distributed loads over rectangular or circular areas, the equivalent point load is typically assumed to act at the **centroid** of the loaded area.
3.  **Calculate Stress using Boussinesq's Solution (modified):**
    *   For a point load $P$ on the surface of a semi-infinite elastic medium, the vertical stress ($\sigma_z$) at a point located at a horizontal distance $r$ from the load and at a depth $z$ is given by:
        $\sigma_z = \frac{3P}{2\pi z^2} \left( \frac{1}{1 + (r/z)^2} \right)^{5/2}$

**When to use:**
*   When the depth $z$ is significantly larger than the dimensions of the loaded area (e.g., $z > 1.5 \times \text{width or diameter}$).

**Important Consideration:** This method becomes less accurate as the depth $z$ decreases and approaches the dimensions of the loaded area.

---

#### 1.2. 2:1 Distribution Method (Uniform Distribution Method)

This is a simpler and widely used approximate method. It assumes that the applied load spreads out at a uniform rate of 2 horizontal to 1 vertical.

**Key Concept:** The vertical load spreads outwards at a constant angle.

**How it works:**
1.  **Imagine the Load Spreading:** Consider a load applied over an area $B \times L$ at the surface. At a depth $z$ below the surface, the loaded area is assumed to have expanded.
2.  **Calculate the Dimensions of the Expanded Area:**
    *   The width of the loaded area at depth $z$ is assumed to be $B' = B + z$.
    *   The length of the loaded area at depth $z$ is assumed to be $L' = L + z$.
    *   *(Note: Some conventions use $B' = B + 2z$ and $L' = L + 2z$. The most common and simpler version is $B' = B+z$ and $L' = L+z$. Always check the convention used in your specific textbook or course.)*
3.  **Calculate the Vertical Stress:** The vertical stress ($\sigma_z$) at depth $z$ is then calculated as the total load divided by the expanded area:
    $\sigma_z = \frac{P}{B' \times L'}$

**When to use:**
*   When the depth $z$ is not excessively large compared to the loaded area dimensions. It's generally considered reasonable for $z$ up to about $1.5$ times the smallest dimension of the loaded area.

**Important Consideration:** This method overestimates stress at shallow depths and underestimates stress at very large depths compared to more rigorous methods. It also assumes uniform stress distribution within the expanded area, which is not entirely accurate.

---

### 2. Numerical Problems

Let's illustrate these methods with numerical examples.

#### Example 1: Equivalent Point Load Method

A concentrated load of $P = 500$ kN is applied at the surface of a soil mass. Calculate the vertical stress at a point located at a depth of $z = 8$ m and a horizontal distance of $r = 4$ m from the load.

**Solution:**
Using the Boussinesq's formula for a point load:
$\sigma_z = \frac{3P}{2\pi z^2} \left( \frac{1}{1 + (r/z)^2} \right)^{5/2}$

Given:
$P = 500$ kN
$z = 8$ m
$r = 4$ m

Calculate $(r/z)$:
$r/z = 4/8 = 0.5$

$(r/z)^2 = (0.5)^2 = 0.25$

$1 + (r/z)^2 = 1 + 0.25 = 1.25$

$\sigma_z = \frac{3 \times 500 \text{ kN}}{2\pi (8 \text{ m})^2} \left( \frac{1}{1.25} \right)^{5/2}$
$\sigma_z = \frac{1500}{2\pi \times 64} (0.8)^{5/2}$
$\sigma_z = \frac{1500}{128\pi} (0.8)^{2.5}$
$\sigma_z = \frac{1500}{402.12} \times 0.5724$
$\sigma_z = 3.73 \times 0.5724$
$\sigma_z \approx 2.13$ kN/m²

**Answer:** The vertical stress at the specified point is approximately $2.13$ kN/m².

#### Example 2: 2:1 Distribution Method

A uniformly distributed load of $100$ kN/m² is applied over a square footing of side $B = 4$ m. Calculate the vertical stress at a depth of $z = 3$ m below the center of the footing.

**Solution:**
Total load $P = \text{load intensity} \times \text{area} = 100 \text{ kN/m}^2 \times (4 \text{ m} \times 4 \text{ m}) = 1600$ kN.
Alternatively, we can work with load intensity.

Using the 2:1 distribution method:
Width of loaded area at depth $z$, $B' = B + z = 4 \text{ m} + 3 \text{ m} = 7$ m.
Length of loaded area at depth $z$, $L' = L + z = 4 \text{ m} + 3 \text{ m} = 7$ m.

The expanded loaded area at depth $z$ is $7$ m $\times 7$ m.

The vertical stress at depth $z$ is:
$\sigma_z = \frac{\text{Total Load}}{\text{Expanded Area}}$
$\sigma_z = \frac{1600 \text{ kN}}{7 \text{ m} \times 7 \text{ m}}$
$\sigma_z = \frac{1600 \text{ kN}}{49 \text{ m}^2}$
$\sigma_z \approx 32.65$ kN/m²

If we consider load intensity:
Load intensity at depth $z = \frac{\text{Load Intensity at Surface}}{ \text{Area Ratio}}$
Load intensity at depth $z = \frac{100 \text{ kN/m}^2}{(7 \text{ m} / 4 \text{ m})^2}$
Load intensity at depth $z = \frac{100 \text{ kN/m}^2}{1.75^2}$
Load intensity at depth $z = \frac{100 \text{ kN/m}^2}{3.0625}$
$\sigma_z \approx 32.65$ kN/m²

**Answer:** The vertical stress at a depth of 3 m below the center of the footing is approximately $32.65$ kN/m².

#### Practice Question 1:

A rectangular footing of dimensions $5$ m $\times 3$ m carries a uniformly distributed load of $200$ kN/m². Using the 2:1 distribution method, calculate the vertical stress at a depth of $6$ m below the center of the footing.

**Answer:**
$B = 3$ m, $L = 5$ m, $z = 6$ m
$B' = B + z = 3 + 6 = 9$ m
$L' = L + z = 5 + 6 = 11$ m
Total Load $P = 200 \text{ kN/m}^2 \times (3 \text{ m} \times 5 \text{ m}) = 3000$ kN
$\sigma_z = \frac{3000 \text{ kN}}{9 \text{ m} \times 11 \text{ m}} = \frac{3000}{99} \approx 30.30$ kN/m²

---

### 3. Pressure Isobars

Pressure isobars are graphical representations that show the variation of stress in the soil mass.

**Key Concept:** An isobar is a line connecting points of equal stress.

**How it works:**
*   For a given loading condition, stress values are calculated at various points in the soil mass at different depths and horizontal distances.
*   Lines are drawn connecting points where the stress has the same value.
*   These lines are called pressure isobars.

**Purpose:**
*   To visualize the spread of stress in the soil mass.
*   To identify zones of high and low stress.
*   To estimate stress at any point in the soil without direct calculation for every point.

**Characteristics:**
*   Isobars are generally curvilinear.
*   They tend to be elliptical or circular in shape when viewed in cross-section, spreading outwards from the loaded area.
*   The stress intensity decreases as the distance from the loaded area and depth increases.
*   Isobars are often drawn for specific stress values (e.g., 0.1 P/A, 0.2 P/A, etc., where P is the total load and A is the loaded area).

---

### 4. Pressure Bulbs

A pressure bulb is a region in the soil mass where the induced vertical stress is significant. It's essentially a contour of equal vertical stress.

**Key Concept:** A pressure bulb is an isobar that encloses the region where the induced stress is above a certain threshold.

**How it works:**
*   Similar to isobars, pressure bulbs are generated by calculating stresses at various locations.
*   A pressure bulb is formed by an isobar representing a significant fraction of the applied surface stress. For instance, an isobar representing 10% or 20% of the maximum contact pressure could be considered a pressure bulb.
*   The shape of the pressure bulb reflects how the stress penetrates into the soil.

**Purpose:**
*   To define the zone of influence of a loaded area on the soil mass.
*   To determine the depth of soil that is significantly affected by a surface load.
*   To assess potential settlement in the soil mass, as settlement is related to the stress in the soil.

**Shape and Extent:**
*   The shape of a pressure bulb depends on the shape of the loaded area and the type of stress distribution.
*   For a concentrated load, the pressure bulb is roughly conical.
*   For a uniformly distributed load over an area, the pressure bulb is more rounded and tends to flatten out at greater depths.
*   The depth to which a pressure bulb extends is important for foundation design, as it indicates the depth of soil that needs to be considered for bearing capacity and settlement analysis.

**Relationship with 2:1 Distribution Method:**
The 2:1 distribution method conceptually describes the shape of a pressure bulb. The widening of the loaded area at depth $z$ at a rate of 2:1 horizontally implies a bulbous shape.

---

### 5. Distribution of Contact Pressure Beneath Footings

The contact pressure is the pressure exerted by the footing onto the soil. Its distribution is crucial for understanding how the load is transferred and how the soil responds.

**Key Concepts:**
*   **Contact Pressure:** The pressure distribution at the base of a footing.
*   **Uniform Contact Pressure:** Assumed in basic bearing capacity calculations, where the pressure is constant across the entire base.
*   **Non-Uniform Contact Pressure:** In reality, the contact pressure is rarely uniform due to the soil's deformation characteristics and stress transfer mechanisms.

**Factors Influencing Contact Pressure Distribution:**
1.  **Soil Compressibility:**
    *   **Stiff Soil:** In very stiff or dense soils, the soil deforms less. The contact pressure tends to be higher at the edges and lower at the center. This is because the central portion of the footing deforms less, and the load is shed to the stiffer edge portions.
    *   **Soft Soil:** In soft or loose soils, the soil deforms more readily. The contact pressure tends to be higher at the center and lower at the edges. This is because the central portion yields more, attracting more load.
2.  **Footing Rigidity:**
    *   **Rigid Footing:** A very rigid footing will distribute the load such that the soil deformation dictates the pressure distribution.
    *   **Flexible Footing:** A flexible footing will deform more like the soil, leading to a more uniform pressure distribution if the soil itself is uniform.
3.  **Load Magnitude:**
    *   At very high loads, the soil may yield significantly, leading to non-uniformity.
4.  **Presence of Layered Soils:** Different soil layers with varying stiffness will cause uneven pressure distribution.

**Typical Contact Pressure Distributions:**

*   **Uniformly Distributed Load:** Assumed for initial calculations. The contact pressure is $p = P/A$, where $P$ is the total load and $A$ is the area of the footing.
    ![Uniform Contact Pressure](https://i.imgur.com/example_url.png)  *(Imagine a horizontal line representing constant pressure)*

*   **Non-Uniform Distribution (Stiff Soil):** Pressure is higher at the edges.
    ![Stiff Soil Contact Pressure](https://i.imgur.com/example_url2.png) *(Imagine a curve that is lower in the middle and higher at the edges)*

*   **Non-Uniform Distribution (Soft Soil):** Pressure is higher at the center.
    ![Soft Soil Contact Pressure](https://i.imgur.com/example_url3.png) *(Imagine a curve that is higher in the middle and lower at the edges)*

**Importance:**
*   **Settlement Analysis:** The non-uniformity of contact pressure directly influences the differential settlement of the footing, which can be critical for structural integrity.
*   **Bearing Capacity:** While basic bearing capacity theory assumes uniform pressure, understanding the actual distribution can lead to more refined analyses.
*   **Stress Concentration:** Areas of high contact pressure can lead to localized yielding or failure in the soil.

---

### 6. Important Points to Remember

*   **Approximate methods (Equivalent Point Load, 2:1 Distribution) are simplifications.** They provide estimations and should be used within their applicable ranges of depth and loaded area dimensions.
*   **Equivalent Point Load Method is best for large depths** ($z > 1.5 \times \text{width}$).
*   **2:1 Distribution Method is simpler and more general** but can be less accurate at extreme depths. Always check the convention for $B'$ and $L'$.
*   **Pressure Isobars** are contour lines of equal stress, useful for visualizing stress distribution.
*   **Pressure Bulbs** indicate the zone of influence of a load, crucial for understanding the depth of soil affected.
*   **Contact pressure distribution is rarely uniform.** It's influenced by soil stiffness, footing rigidity, and load magnitude.
*   **Stiff soils tend to have edge loading**, while **soft soils tend to have center loading** of contact pressure.
*   Understanding these concepts is fundamental for analyzing the behavior of soil under load and designing safe and efficient foundations.

---

### Practice Questions/Exercises

**Question 1:**
A square footing of $4$ m $\times 4$ m is subjected to a total load of $2000$ kN. Calculate the vertical stress at a depth of $6$ m below the center of the footing using the 2:1 distribution method.

**Question 2:**
A concentrated load of $1000$ kN is applied at the ground surface. Determine the vertical stress at a point located $5$ m horizontally from the load and $10$ m vertically below the surface. Use the Equivalent Point Load method (Boussinesq's formula).

**Question 3:**
What is the primary purpose of drawing pressure isobars in soil mechanics?

**Question 4:**
Describe the typical contact pressure distribution beneath a footing on a very stiff clay soil.

---

### Answers to Practice Questions

**Answer to Question 1:**
*   Footing dimensions, $B = 4$ m, $L = 4$ m.
*   Depth, $z = 6$ m.
*   Total load, $P = 2000$ kN.
*   Using the 2:1 distribution method:
    *   Expanded width, $B' = B + z = 4 + 6 = 10$ m.
    *   Expanded length, $L' = L + z = 4 + 6 = 10$ m.
*   Vertical stress, $\sigma_z = \frac{P}{B' \times L'} = \frac{2000 \text{ kN}}{10 \text{ m} \times 10 \text{ m}} = \frac{2000}{100} = 20$ kN/m².

**Answer to Question 2:**
*   Point load, $P = 1000$ kN.
*   Depth, $z = 10$ m.
*   Horizontal distance, $r = 5$ m.
*   Using Boussinesq's formula:
    $\sigma_z = \frac{3P}{2\pi z^2} \left( \frac{1}{1 + (r/z)^2} \right)^{5/2}$
    $r/z = 5/10 = 0.5$
    $(r/z)^2 = 0.25$
    $1 + (r/z)^2 = 1.25$
    $\sigma_z = \frac{3 \times 1000}{2\pi (10)^2} \left( \frac{1}{1.25} \right)^{5/2}$
    $\sigma_z = \frac{3000}{200\pi} (0.8)^{2.5}$
    $\sigma_z = \frac{15}{\pi} \times 0.5724$
    $\sigma_z = 4.77 \times 0.5724 \approx 2.73$ kN/m².

**Answer to Question 3:**
The primary purpose of drawing pressure isobars is to **visualize the spatial distribution of stress in the soil mass** due to applied loads. They help identify zones of high and low stress and estimate stress at various locations without performing individual calculations for every point.

**Answer to Question 4:**
Beneath a footing on a very stiff clay soil, the contact pressure distribution is typically **non-uniform, with higher pressures at the edges of the footing and lower pressures at the center**. This occurs because the stiffer soil at the edges deforms less and attracts more of the applied load, while the central portion, being softer (relatively), deforms more and sheds load towards the edges.
