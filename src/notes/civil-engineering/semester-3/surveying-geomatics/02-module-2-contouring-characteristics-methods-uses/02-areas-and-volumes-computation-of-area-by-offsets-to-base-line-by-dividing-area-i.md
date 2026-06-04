---
title: "Areas and Volumes : computation of area by offsets to base line, by dividing area into number of triangles; volume of level section by prismoidal and trapezoidal formulae."
subject: "SURVEYING & GEOMATICS"
module: "Module 2: Contouring  : Characteristics, methods, uses."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810776"
status: "completed"
scrapedAt: "2026-05-20T18:42:17.334Z"
---
# Surveying & Geomatics: Module 2 - Contouring

## Topic: Areas and Volumes

This module delves into the practical application of surveying principles for calculating areas and volumes, crucial for various engineering and land development projects. We will explore methods for determining the area of irregularly shaped plots and calculating the volume of earthwork for excavations and embankments.

---

### 1. Computation of Area

Understanding the area of land parcels is fundamental in surveying for property boundaries, land development, and construction planning.

#### 1.1 Area by Offsets to a Base Line

This method is used when a curved boundary is present and can be referenced from a straight baseline.

**Key Concepts:**

*   **Base Line:** A straight line established on the ground that is parallel to the general direction of the boundary.
*   **Offsets:** Perpendicular distances measured from the base line to points on the curved boundary.
*   **Ordinates:** Another term for offsets.
*   **Conventional Area:** The area enclosed by the base line, the boundary, and the perpendiculars at the extremities of the base line.

**Method:**

1.  **Establish a Baseline:** Choose a convenient straight line, often along one edge of the area to be surveyed.
2.  **Measure Offsets:** At regular intervals along the baseline, measure perpendicular distances (offsets) to the curved boundary. Let the interval between offsets be 'd'.
3.  **Record Data:** Record the length of the baseline and the lengths of the offsets at each interval.

**Formulas for Area Calculation:**

There are several rules for calculating the area based on the recorded offset data:

*   **Mid-ordinate Rule:**
    *   Area = $d \times \sum (\text{mid-ordinates})$
    *   Where $d$ is the interval between ordinates, and mid-ordinate is the average of two consecutive ordinates.
    *   *Less accurate than Simpson's rule.*

*   **Average Ordinate Rule:**
    *   Area = $d \times \frac{(o_0 + o_1 + o_2 + ... + o_n)}{n}$
    *   Where $d$ is the interval, $n$ is the number of intervals, and $o_0, o_1, ..., o_n$ are the offsets.
    *   This is equivalent to the trapezoidal rule.

*   **Trapezoidal Rule:**
    *   Area = $d \times \left[ \frac{o_0 + o_n}{2} + o_1 + o_2 + ... + o_{n-1} \right]$
    *   Where $d$ is the interval between offsets, $n$ is the number of intervals, and $o_0, o_1, ..., o_n$ are the offsets.
    *   This rule divides the area into a series of trapezoids and sums their areas.

*   **Simpson's Rule:**
    *   Area = $\frac{d}{3} \times [o_0 + 4(o_1 + o_3 + ... + o_{n-1}) + 2(o_2 + o_4 + ... + o_{n-2}) + o_n]$
    *   This rule requires an **even number of intervals** (odd number of offsets).
    *   It approximates the curved boundary with parabolic segments, yielding a more accurate result for curves.

**Example:**

Calculate the area of a plot by offsets from a baseline. The offsets are measured at 10m intervals.

| Offset No. | Distance from Start (m) | Offset Length (m) |
| :--------- | :---------------------- | :---------------- |
| 0          | 0                       | 1.2               |
| 1          | 10                      | 2.5               |
| 2          | 20                      | 3.8               |
| 3          | 30                      | 4.1               |
| 4          | 40                      | 3.5               |
| 5          | 50                      | 2.8               |
| 6          | 60                      | 1.5               |

**Using the Trapezoidal Rule:**

*   $d = 10$ m
*   Offsets ($o_0$ to $o_6$): 1.2, 2.5, 3.8, 4.1, 3.5, 2.8, 1.5
*   Area = $10 \times \left[ \frac{1.2 + 1.5}{2} + 2.5 + 3.8 + 4.1 + 3.5 + 2.8 \right]$
*   Area = $10 \times \left[ \frac{2.7}{2} + 16.7 \right]$
*   Area = $10 \times [1.35 + 16.7]$
*   Area = $10 \times 18.05 = 180.5 \text{ m}^2$

**Using Simpson's Rule (Requires even number of intervals, so we'll use the first 5 offsets with 4 intervals):**

*   $d = 10$ m
*   Offsets ($o_0$ to $o_4$): 1.2, 2.5, 3.8, 4.1, 3.5
*   Area = $\frac{10}{3} \times [1.2 + 4(2.5 + 4.1) + 2(3.8) + 3.5]$
*   Area = $\frac{10}{3} \times [1.2 + 4(6.6) + 7.6 + 3.5]$
*   Area = $\frac{10}{3} \times [1.2 + 26.4 + 7.6 + 3.5]$
*   Area = $\frac{10}{3} \times [38.7]$
*   Area = $10 \times 12.9 = 129 \text{ m}^2$

*Note: When using Simpson's rule, ensure the number of intervals is even. In practical scenarios, you might need to adjust the baseline or add an extra offset to meet this requirement if using Simpson's rule.*

#### 1.2 Area by Dividing Area into a Number of Triangles

This method is suitable for areas with irregular boundaries that can be approximated by straight lines, forming triangles.

**Key Concepts:**

*   **Triangulation:** Dividing the area into a series of non-overlapping triangles.
*   **Base Line/Datum Line:** A prominent straight line within the area from which measurements are taken.
*   **Chords:** Straight lines connecting points on the boundary.

**Method:**

1.  **Establish a Datum Line:** Select a convenient straight line that passes through or near the area.
2.  **Measure Triangles:** Divide the area into triangles by connecting the vertices of the area to a common point on the datum line or by forming triangles directly from points on the boundary.
3.  **Measure Sides:** Measure the lengths of the sides of each triangle.
4.  **Calculate Area of Each Triangle:** Use Heron's formula or the base and height formula.
    *   **Heron's Formula:** Area = $\sqrt{s(s-a)(s-b)(s-c)}$, where $a, b, c$ are the sides and $s = \frac{a+b+c}{2}$.
    *   **Base and Height:** Area = $\frac{1}{2} \times \text{base} \times \text{height}$.
5.  **Sum Areas:** Add the areas of all the triangles to get the total area.

**Example:**

An area is divided into the following triangles. Calculate the total area.

*   **Triangle 1:** Sides = 50m, 60m, 70m
    *   $s = \frac{50+60+70}{2} = \frac{180}{2} = 90$
    *   Area = $\sqrt{90(90-50)(90-60)(90-70)} = \sqrt{90 \times 40 \times 30 \times 20} = \sqrt{2,160,000} = 1469.69 \text{ m}^2$

*   **Triangle 2:** Base = 80m, Height = 55m
    *   Area = $\frac{1}{2} \times 80 \times 55 = 2200 \text{ m}^2$

*   **Triangle 3:** Sides = 75m, 85m, 90m
    *   $s = \frac{75+85+90}{2} = \frac{250}{2} = 125$
    *   Area = $\sqrt{125(125-75)(125-85)(125-90)} = \sqrt{125 \times 50 \times 40 \times 35} = \sqrt{8,750,000} = 2958.04 \text{ m}^2$

**Total Area = Area of Triangle 1 + Area of Triangle 2 + Area of Triangle 3**
Total Area = $1469.69 + 2200 + 2958.04 = 6627.73 \text{ m}^2$

---

### 2. Computation of Volume of Level Sections

This section deals with calculating earthwork volumes for linear projects like roads, canals, or trenches, where the cross-section is generally uniform.

**Key Concepts:**

*   **End Areas:** The area of the cross-section at the beginning and end of a certain length of the project.
*   **Level Section:** A cross-section where the ground surface is level in relation to the formation level (planned surface). This implies the cross-section is a simple shape, usually a rectangle or a trapezoid (if side slopes are considered).
*   **Prismoidal Formula:** A highly accurate formula for calculating volumes of solids with two parallel end areas and a varying cross-section between them.
*   **Trapezoidal Formula:** A simpler but less accurate formula based on the average end area.

#### 2.1 Trapezoidal Formula for Volume

This formula assumes the solid is a prismatoid, and it calculates the volume based on the average of the end areas.

**Formula:**

Volume = $\frac{A_1 + A_2}{2} \times L$

Where:
*   $A_1$ = Area of the cross-section at the first end.
*   $A_2$ = Area of the cross-section at the second end.
*   $L$ = Length of the section (distance between the two end areas).

**Assumptions:**

*   The cross-section varies linearly between the two end areas.
*   The solid can be approximated as a trapezoid in three dimensions.

**Level Section Example:**

Consider a trench with a formation width of 3m. The ground is level.

*   **Station 1:** Width of excavation = 3m, Depth = 2m.
    *   Cross-sectional Area $A_1 = 3 \text{ m} \times 2 \text{ m} = 6 \text{ m}^2$.
*   **Station 2:** Width of excavation = 3m, Depth = 2.5m.
    *   Cross-sectional Area $A_2 = 3 \text{ m} \times 2.5 \text{ m} = 7.5 \text{ m}^2$.
*   **Length of Section L:** 20m.

**Volume Calculation (Trapezoidal Formula):**

Volume = $\frac{6 \text{ m}^2 + 7.5 \text{ m}^2}{2} \times 20 \text{ m}$
Volume = $\frac{13.5 \text{ m}^2}{2} \times 20 \text{ m}$
Volume = $6.75 \text{ m}^2 \times 20 \text{ m} = 135 \text{ m}^3$

#### 2.2 Prismoidal Formula for Volume

This formula provides a more accurate volume calculation for solids where the cross-sectional area varies significantly between the ends. It considers the area of the mid-section.

**Formula:**

Volume = $\frac{L}{6} \times (A_1 + 4A_m + A_2)$

Where:
*   $L$ = Length of the section.
*   $A_1$ = Area of the cross-section at the first end.
*   $A_m$ = Area of the cross-section at the mid-section.
*   $A_2$ = Area of the cross-section at the second end.

**Assumptions:**

*   The solid is a prismatoid (a solid bounded by two parallel planes).
*   The cross-sectional area varies quadratically between the ends.

**Derivation for Level Sections:**

For a level section, the cross-section is generally a rectangle or trapezoid with a constant width. The variation in area comes from the depth. Let the formation width be $w$.

*   **End 1:** Depth $d_1$, Area $A_1 = w \times d_1$.
*   **End 2:** Depth $d_2$, Area $A_2 = w \times d_2$.
*   **Mid-section:** Depth $d_m = \frac{d_1 + d_2}{2}$, Area $A_m = w \times d_m = w \times \frac{d_1 + d_2}{2}$.

Substituting these into the Prismoidal Formula:

Volume = $\frac{L}{6} \times (w \times d_1 + 4 \times w \times \frac{d_1 + d_2}{2} + w \times d_2)$
Volume = $\frac{L}{6} \times w \times (d_1 + 2(d_1 + d_2) + d_2)$
Volume = $\frac{L \times w}{6} \times (d_1 + 2d_1 + 2d_2 + d_2)$
Volume = $\frac{L \times w}{6} \times (3d_1 + 3d_2)$
Volume = $\frac{L \times w \times 3}{6} \times (d_1 + d_2)$
Volume = $\frac{L \times w}{2} \times (d_1 + d_2)$
Volume = $L \times \frac{w(d_1 + d_2)}{2}$
Volume = $L \times (\text{Average Area})$

For a level section, where the width is constant, the prismoidal formula and the trapezoidal formula yield the same result:

*   Trapezoidal Formula: $L \times \frac{w d_1 + w d_2}{2} = L \times \frac{w(d_1+d_2)}{2}$
*   Prismoidal Formula: $L \times \frac{w d_1 + 4(w \frac{d_1+d_2}{2}) + w d_2}{6} = L \times \frac{w d_1 + 2w(d_1+d_2) + w d_2}{6} = L \times \frac{w(d_1 + 2d_1 + 2d_2 + d_2)}{6} = L \times \frac{w(3d_1+3d_2)}{6} = L \times \frac{w(d_1+d_2)}{2}$

**Important Note:** While the formulas appear identical for level sections, the prismoidal formula is more general and is essential for calculating volumes when cross-sections vary in shape and dimension beyond just depth. In many practical surveying contexts, especially for earthwork calculation, the prismoidal formula is preferred due to its higher accuracy.

**Level Section Example (Revisited for clarity of prismoidal application):**

Consider a canal excavation with a constant formation width of 5m.

*   **Station 0+00:** Depth = 3m.
    *   $A_1 = 5 \text{ m} \times 3 \text{ m} = 15 \text{ m}^2$.
*   **Station 0+20 (L=20m):** Depth = 4m.
    *   $A_2 = 5 \text{ m} \times 4 \text{ m} = 20 \text{ m}^2$.
*   **Mid-section (at Station 0+10):** Depth = $\frac{3+4}{2} = 3.5$m.
    *   $A_m = 5 \text{ m} \times 3.5 \text{ m} = 17.5 \text{ m}^2$.

**Volume Calculation (Prismoidal Formula):**

Volume = $\frac{20 \text{ m}}{6} \times (15 \text{ m}^2 + 4 \times 17.5 \text{ m}^2 + 20 \text{ m}^2)$
Volume = $\frac{20}{6} \times (15 + 70 + 20) \text{ m}^3$
Volume = $\frac{20}{6} \times 105 \text{ m}^3$
Volume = $3.333 \times 105 \text{ m}^3 = 350 \text{ m}^3$

**Volume Calculation (Trapezoidal Formula for comparison):**

Volume = $\frac{15 \text{ m}^2 + 20 \text{ m}^2}{2} \times 20 \text{ m}$
Volume = $\frac{35 \text{ m}^2}{2} \times 20 \text{ m}$
Volume = $17.5 \text{ m}^2 \times 20 \text{ m} = 350 \text{ m}^3$

As demonstrated, for level sections, both formulas yield the same result. However, for sloping ground or more complex shapes, the Prismoidal formula remains the more accurate choice.

---

### Learning Outcomes Addressed:

*   **Computation of area by offsets to base line:** Covered in Section 1.1 with explanations of methods and formulas.
*   **Computation of area by dividing area into number of triangles:** Covered in Section 1.2 with explanations of methods and formulas.
*   **Volume of level section by prismoidal formula:** Covered in Section 2.2, including the derivation for level sections.
*   **Volume of level section by trapezoidal formula:** Covered in Section 2.1.

---

### Important Points to Remember:

*   **Accuracy of Area Calculation:** Simpson's Rule is generally more accurate than the Trapezoidal Rule for area calculation, especially for curved boundaries, but requires an even number of intervals.
*   **Choice of Method for Area:** Triangulation is suitable for polygonal areas or areas that can be reasonably approximated by straight lines. Offsets to a baseline are used when a curved boundary is present.
*   **Level Sections:** Simplifies volume calculations as the cross-sectional area primarily varies with depth.
*   **Prismoidal Formula vs. Trapezoidal Formula for Volume:**
    *   Trapezoidal formula is simpler but less accurate for varying cross-sections.
    *   Prismoidal formula is more accurate, especially when cross-sections change shape significantly, by accounting for the mid-section.
    *   For level sections with constant width, both formulas yield identical results.
*   **Units:** Ensure consistency in units (e.g., meters for distances, square meters for areas, cubic meters for volumes).

---

### Practice Questions/Exercises:

**Question 1 (Area by Offsets):**

Calculate the area of a field using the Trapezoidal Rule, given the following offsets taken at 10m intervals from a straight baseline: 2.1m, 3.5m, 4.2m, 3.8m, 2.9m, 1.8m.

**Answer 1:**

*   $d = 10$ m
*   Offsets ($o_0$ to $o_5$): 2.1, 3.5, 4.2, 3.8, 2.9, 1.8
*   Area = $10 \times \left[ \frac{2.1 + 1.8}{2} + 3.5 + 4.2 + 3.8 + 2.9 \right]$
*   Area = $10 \times \left[ \frac{3.9}{2} + 14.4 \right]$
*   Area = $10 \times [1.95 + 14.4]$
*   Area = $10 \times 16.35 = 163.5 \text{ m}^2$

**Question 2 (Area by Triangles):**

A plot of land is divided into three triangles for area calculation. The dimensions are:
*   Triangle A: Sides 40m, 50m, 60m
*   Triangle B: Base 70m, Perpendicular height 45m
*   Triangle C: Sides 55m, 65m, 75m

Calculate the total area of the plot.

**Answer 2:**

*   **Triangle A:**
    *   $s = \frac{40+50+60}{2} = 75$
    *   Area A = $\sqrt{75(75-40)(75-50)(75-60)} = \sqrt{75 \times 35 \times 25 \times 15} = \sqrt{984375} \approx 992.16 \text{ m}^2$
*   **Triangle B:**
    *   Area B = $\frac{1}{2} \times 70 \times 45 = 1575 \text{ m}^2$
*   **Triangle C:**
    *   $s = \frac{55+65+75}{2} = 97.5$
    *   Area C = $\sqrt{97.5(97.5-55)(97.5-65)(97.5-75)} = \sqrt{97.5 \times 42.5 \times 32.5 \times 22.5} = \sqrt{2984765.625} \approx 1727.65 \text{ m}^2$

*   **Total Area = Area A + Area B + Area C**
    *   Total Area $\approx 992.16 + 1575 + 1727.65 = 4294.81 \text{ m}^2$

**Question 3 (Volume Calculation - Level Section):**

A road cutting has a level section with a formation width of 8m. The depths at two consecutive chainages 30m apart are 2.5m and 3.2m respectively. Calculate the volume of earthwork between these chainages using both the Trapezoidal and Prismoidal formulae.

**Answer 3:**

*   Formation Width $w = 8$ m
*   Length $L = 30$ m
*   Depth at Chainage 1 ($d_1$) = 2.5 m
*   Depth at Chainage 2 ($d_2$) = 3.2 m

*   **End Area 1 ($A_1$):** $8 \text{ m} \times 2.5 \text{ m} = 20 \text{ m}^2$
*   **End Area 2 ($A_2$):** $8 \text{ m} \times 3.2 \text{ m} = 25.6 \text{ m}^2$

*   **Trapezoidal Formula:**
    *   Volume = $\frac{A_1 + A_2}{2} \times L$
    *   Volume = $\frac{20 \text{ m}^2 + 25.6 \text{ m}^2}{2} \times 30 \text{ m}$
    *   Volume = $\frac{45.6 \text{ m}^2}{2} \times 30 \text{ m}$
    *   Volume = $22.8 \text{ m}^2 \times 30 \text{ m} = 684 \text{ m}^3$

*   **Prismoidal Formula:**
    *   Mid-section depth ($d_m$) = $\frac{d_1 + d_2}{2} = \frac{2.5 \text{ m} + 3.2 \text{ m}}{2} = 2.85 \text{ m}$
    *   Mid-section Area ($A_m$) = $8 \text{ m} \times 2.85 \text{ m} = 22.8 \text{ m}^2$
    *   Volume = $\frac{L}{6} \times (A_1 + 4A_m + A_2)$
    *   Volume = $\frac{30 \text{ m}}{6} \times (20 \text{ m}^2 + 4 \times 22.8 \text{ m}^2 + 25.6 \text{ m}^2)$
    *   Volume = $5 \times (20 + 91.2 + 25.6) \text{ m}^3$
    *   Volume = $5 \times 136.8 \text{ m}^3 = 684 \text{ m}^3$

*(As expected, for level sections, both formulae give the same result.)*
