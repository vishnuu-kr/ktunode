---
title: "Area computation"
subject: "SURVEY LAB"
module: "Module 10: Area computation"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81089b"
status: "completed"
scrapedAt: "2026-05-20T18:42:00.728Z"
---
# SURVEY LAB: Module 10 - Area Computation

This module focuses on the fundamental techniques for calculating the area of land parcels using surveying data. Understanding these methods is crucial for land registration, construction, and various other land-related applications.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the fundamental principles of area computation in surveying.**
*   **Calculate the area of plane figures using geometrical methods.**
*   **Calculate the area of irregular plots of land using surveying data.**
*   **Apply the coordinate method for area computation.**
*   **Apply the trapezoidal rule and Simpson's rule for area computation.**
*   **Understand and apply the concept of partitioning of area.**

---

## 1. Fundamental Principles of Area Computation in Surveying

The core principle behind area computation in surveying is to break down complex shapes into simpler geometric figures whose areas are known and calculable. Surveying data, typically obtained from field measurements (angles, distances, coordinates), provides the necessary parameters for these calculations.

**Key Concepts:**

*   **Plane Surveying:** Assumes the Earth's surface is flat over the surveyed area. This is generally valid for smaller land parcels where the curvature of the Earth has negligible impact.
*   **Units of Area:** Common units include square meters ($m^2$), square feet ($ft^2$), acres, and hectares. Consistency in units is vital during calculations.
*   **Accuracy:** The accuracy of area computation is directly dependent on the accuracy of the field measurements and the chosen computation method.

---

## 2. Area Computation of Plane Figures (Geometrical Methods)

For regularly shaped parcels or when a parcel can be divided into simple geometric shapes, direct geometrical calculations are used.

**Key Concepts & Definitions:**

*   **Triangle:** A three-sided polygon.
    *   **Base and Height:** Area = $\frac{1}{2} \times \text{base} \times \text{height}$
    *   **Heron's Formula (given three sides a, b, c):**
        *   Calculate semi-perimeter, $s = \frac{a+b+c}{2}$
        *   Area = $\sqrt{s(s-a)(s-b)(s-c)}$
    *   **Two Sides and Included Angle:** Area = $\frac{1}{2}ab\sin(C)$
*   **Rectangle:** A four-sided polygon with four right angles.
    *   Area = length $\times$ width
*   **Square:** A rectangle with four equal sides.
    *   Area = side $\times$ side = $side^2$
*   **Trapezoid:** A quadrilateral with at least one pair of parallel sides.
    *   Area = $\frac{1}{2} \times (\text{sum of parallel sides}) \times \text{height}$
*   **Circle:** A set of points equidistant from a central point.
    *   Area = $\pi r^2$ (where $r$ is the radius)
*   **Sector of a Circle:** A portion of a circle enclosed by two radii and an arc.
    *   Area = $\frac{\theta}{360^\circ} \times \pi r^2$ (where $\theta$ is the central angle in degrees)
    *   Area = $\frac{1}{2}r^2\theta$ (where $\theta$ is the central angle in radians)

**Examples:**

*   **Example 1 (Triangle):** A triangular plot has a base of 50 meters and a perpendicular height of 30 meters.
    *   Area = $\frac{1}{2} \times 50 \text{ m} \times 30 \text{ m} = 750 \text{ m}^2$

*   **Example 2 (Rectangle):** A rectangular field measures 120 meters by 80 meters.
    *   Area = $120 \text{ m} \times 80 \text{ m} = 9600 \text{ m}^2$

*   **Example 3 (Partitioning into Triangles):** A quadrilateral plot ABCD has the following dimensions: AB = 60m, BC = 70m, CD = 80m, DA = 50m, and diagonal AC = 90m.
    *   Divide the quadrilateral into two triangles: ABC and ADC.
    *   **Triangle ABC:** Sides are 60m, 70m, 90m.
        *   $s_{ABC} = \frac{60+70+90}{2} = 110 \text{ m}$
        *   Area$_{ABC} = \sqrt{110(110-60)(110-70)(110-90)} = \sqrt{110 \times 50 \times 40 \times 20} = \sqrt{4,400,000} \approx 2097.6 \text{ m}^2$
    *   **Triangle ADC:** Sides are 50m, 80m, 90m.
        *   $s_{ADC} = \frac{50+80+90}{2} = 110 \text{ m}$
        *   Area$_{ADC} = \sqrt{110(110-50)(110-80)(110-90)} = \sqrt{110 \times 60 \times 30 \times 20} = \sqrt{3,960,000} \approx 1989.97 \text{ m}^2$
    *   Total Area = Area$_{ABC}$ + Area$_{ADC} \approx 2097.6 \text{ m}^2 + 1989.97 \text{ m}^2 \approx 4087.57 \text{ m}^2$

---

## 3. Area Computation of Irregular Plots of Land

Irregular plots are common in surveying. These methods are used when the boundaries are not straight lines or form complex polygons.

**Key Concepts & Definitions:**

*   **Offset:** A perpendicular distance measured from a baseline or traverse line to a boundary point or feature.
*   **Baseline/Reference Line:** A straight line established in the field from which measurements (offsets) are taken to points along the irregular boundary.
*   **Ordinates:** Perpendicular distances from a baseline to points on the boundary.

**Methods:**

### 3.1. From Field Book (Offset Method)

This method involves running a baseline through the plot and measuring perpendicular offsets to the boundary at regular or irregular intervals.

*   **Offsets at Equal Intervals:**
    *   The baseline is divided into equal segments of length $d$.
    *   The offsets at these points are $y_0, y_1, y_2, ..., y_n$.
    *   **Trapezoidal Rule:** This is the most common and generally applicable method.
        *   Area $\approx \frac{d}{2} [y_0 + 2(y_1 + y_2 + ... + y_{n-1}) + y_n]$
        *   Each segment between two consecutive offsets is treated as a trapezoid.

*   **Offsets at Unequal Intervals:**
    *   The baseline is divided into segments of lengths $d_1, d_2, d_3, ...$ with offsets $y_0, y_1, y_2, y_3, ...$ at the ends of these segments.
    *   **Trapezoidal Rule:**
        *   Area $\approx \frac{d_1}{2}(y_0 + y_1) + \frac{d_2}{2}(y_1 + y_2) + \frac{d_3}{2}(y_2 + y_3) + ...$
        *   This is essentially summing the areas of individual trapezoids.

**Example (Offsets at Equal Intervals):**

A survey party ran a baseline and took offsets to an irregular boundary at 10m intervals. The offsets were:
0m, 2.5m, 4.0m, 3.0m, 5.5m, 6.0m, 4.5m, 3.5m, 0m.

*   Interval ($d$) = 10m
*   Offsets ($y_0, y_1, ..., y_8$): 0, 2.5, 4.0, 3.0, 5.5, 6.0, 4.5, 3.5, 0
*   Sum of first and last offset: $0 + 0 = 0$
*   Sum of other offsets: $2.5 + 4.0 + 3.0 + 5.5 + 6.0 + 4.5 + 3.5 = 29.0$
*   Area $\approx \frac{10}{2} [0 + 2(29.0) + 0] = 5 [58.0] = 290 \text{ m}^2$

**Example (Offsets at Unequal Intervals):**

Offsets to a boundary from a baseline were measured at the following points (distances along baseline):
0m (0m), 10m (3m), 25m (5m), 35m (4m), 50m (6m).

*   Offsets ($y_0, y_1, y_2, y_3, y_4$): 0, 3, 5, 4, 6
*   Intervals ($d_1, d_2, d_3, d_4$): 10m, 15m, 10m, 15m
*   Area $\approx \frac{10}{2}(0+3) + \frac{15}{2}(3+5) + \frac{10}{2}(5+4) + \frac{15}{2}(4+6)$
*   Area $\approx 5(3) + 7.5(8) + 5(9) + 7.5(10)$
*   Area $\approx 15 + 60 + 45 + 75 = 195 \text{ m}^2$

---

## 4. The Coordinate Method (Surveyor's Formula / Shoelace Formula)

This is a highly efficient and accurate method for computing the area of any closed polygon when the coordinates of its vertices are known.

**Key Concepts & Definitions:**

*   **Coordinates:** The X and Y values (Eastings and Northings in surveying) of each vertex of the polygon.
*   **Vertex:** A corner point of the polygon.
*   **Clockwise/Counterclockwise Order:** The vertices must be listed in a consistent order (either clockwise or counterclockwise) around the polygon.

**Formula (Shoelace Method):**

Given the coordinates of the vertices of a polygon as $(x_1, y_1), (x_2, y_2), ..., (x_n, y_n)$, the area is calculated as:

Area $= \frac{1}{2} |(x_1y_2 + x_2y_3 + ... + x_ny_1) - (y_1x_2 + y_2x_3 + ... + y_nx_1)|$

**Steps:**

1.  **List the coordinates:** Write down the coordinates of the vertices in order, repeating the first vertex at the end of the list.
    ```
    x1  y1
    x2  y2
    x3  y3
    ...
    xn  yn
    x1  y1
    ```
2.  **Multiply diagonally downwards:** Sum the products of the diagonals going down from left to right (e.g., $x_1y_2, x_2y_3, ..., x_ny_1$).
    *   Sum 1 = $x_1y_2 + x_2y_3 + ... + x_ny_1$
3.  **Multiply diagonally upwards:** Sum the products of the diagonals going up from left to right (e.g., $y_1x_2, y_2x_3, ..., y_nx_1$).
    *   Sum 2 = $y_1x_2 + y_2x_3 + ... + y_nx_1$
4.  **Calculate the difference:** Subtract Sum 2 from Sum 1.
5.  **Take the absolute value and divide by 2:** The result is the area of the polygon.

**Example:**

Calculate the area of a plot with the following vertices:
A (100, 200), B (300, 250), C (400, 150), D (200, 100)

1.  **List coordinates:**
    ```
    100  200
    300  250
    400  150
    200  100
    100  200
    ```
2.  **Sum 1 (downward diagonals):**
    $(100 \times 250) + (300 \times 150) + (400 \times 100) + (200 \times 200)$
    $= 25000 + 45000 + 40000 + 40000 = 150000$

3.  **Sum 2 (upward diagonals):**
    $(200 \times 300) + (250 \times 400) + (150 \times 200) + (100 \times 100)$
    $= 60000 + 100000 + 30000 + 10000 = 200000$

4.  **Difference:** $150000 - 200000 = -50000$

5.  **Area:** $\frac{1}{2} |-50000| = \frac{1}{2} \times 50000 = 25000$ square units.

---

## 5. The Trapezoidal Rule and Simpson's Rule

These are numerical integration techniques used to approximate the area under a curve or between discrete data points.

### 5.1. The Trapezoidal Rule (Revisited)

*   **Description:** Approximates the area by dividing it into a series of trapezoids.
*   **Formula for Equal Intervals:** Area $\approx \frac{d}{2} [y_0 + 2(y_1 + y_2 + ... + y_{n-1}) + y_n]$
*   **Formula for Unequal Intervals:** Area $\approx \sum_{i=1}^{n} \frac{d_i}{2}(y_{i-1} + y_i)$
*   **Accuracy:** Generally good, especially for smoother curves. Accuracy improves with smaller intervals ($d$).

### 5.2. Simpson's Rule (Rule of Parabolic Truncation)

*   **Description:** Approximates the area under a curve by fitting parabolic segments to sets of three consecutive points. It is generally more accurate than the trapezoidal rule for the same number of points, especially for curves that are not linear.
*   **Requirements:**
    *   The number of intervals must be **even**. This means there must be an odd number of ordinates ($n+1$ is odd, so $n$ is even).
    *   The intervals ($d$) must be **equal**.
*   **Formula:**
    Area $\approx \frac{d}{3} [y_0 + 4(y_1 + y_3 + ... + y_{n-1}) + 2(y_2 + y_4 + ... + y_{n-2}) + y_n]$
    *   The coefficients for the ordinates are 1, 4, 2, 4, 2, ..., 4, 2, 1.
    *   $y_0$ and $y_n$ (first and last ordinates) get a coefficient of 1.
    *   Odd-numbered ordinates (excluding the first and last) get a coefficient of 4.
    *   Even-numbered ordinates (excluding the first and last) get a coefficient of 2.

**Example (Simpson's Rule):**

Calculate the area of a plot using the following offsets at 5m intervals:
0m, 3m, 5m, 7m, 6m, 4m, 2m.

*   Interval ($d$) = 5m
*   Ordinates ($y_0$ to $y_6$): 0, 3, 5, 7, 6, 4, 2
*   Number of intervals = 6 (even) - condition met.
*   Number of ordinates = 7 (odd) - condition met.

*   $y_0 = 0$
*   Odd ordinates (y1, y3, y5): $3 + 7 + 4 = 14$
*   Even ordinates (y2, y4): $5 + 6 = 11$
*   $y_6 = 2$

Area $\approx \frac{5}{3} [0 + 4(14) + 2(11) + 2]$
Area $\approx \frac{5}{3} [0 + 56 + 22 + 2]$
Area $\approx \frac{5}{3} [80]$
Area $\approx \frac{400}{3} \approx 133.33 \text{ m}^2$

**Comparison with Trapezoidal Rule for the same data:**

Area (Trapezoidal) $\approx \frac{5}{2} [0 + 2(3+5+7+6+4) + 2]$
Area (Trapezoidal) $\approx \frac{5}{2} [0 + 2(25) + 2]$
Area (Trapezoidal) $\approx \frac{5}{2} [50 + 2]$
Area (Trapezoidal) $\approx \frac{5}{2} [52]$
Area (Trapezoidal) $\approx 5 \times 26 = 130 \text{ m}^2$

Simpson's Rule gives a slightly larger area (133.33 $m^2$) compared to the Trapezoidal Rule (130 $m^2$), which is expected for a curve that is not perfectly linear.

---

## 6. Partitioning of Area

This refers to dividing a larger area into smaller, manageable sections for easier calculation, especially for very large or complex irregularly shaped parcels. It can also be used for specific purposes like cadastral subdivision or design.

**Key Concepts:**

*   **Subdivision:** Dividing a parcel into smaller plots with defined boundaries and areas.
*   **Methods of Partitioning:**
    *   **By Lines:** Dividing an area by creating new straight lines (e.g., parallel to existing sides, connecting specific points).
    *   **By Area:** Dividing an area into specific smaller areas, which often requires iterative calculations or specialized software.
    *   **By Curve:** Dividing an area by a curved boundary.

**Process:**

1.  **Identify the boundaries:** Clearly define the existing boundary of the area to be partitioned.
2.  **Determine the partitioning criteria:** What are the desired divisions (e.g., specific shapes, sizes, access points)?
3.  **Select appropriate geometric or computational methods:** Use the methods learned in this module to calculate the areas of the original parcel and the newly created partitioned areas.
4.  **Verification:** Ensure that the sum of the areas of the partitioned parts equals the total area of the original parcel.

**Example:**

A large rectangular plot of 100m x 50m needs to be divided into two equal halves by a line parallel to the shorter sides.

*   Total Area = $100 \text{ m} \times 50 \text{ m} = 5000 \text{ m}^2$
*   Each half should be $5000 / 2 = 2500 \text{ m}^2$.
*   The dividing line will be drawn at 50m from one of the shorter sides.
*   The two resulting rectangular plots will measure 50m x 50m each.
*   Area of each partition = $50 \text{ m} \times 50 \text{ m} = 2500 \text{ m}^2$.

---

## Practice Questions and Exercises

**Question 1 (Geometrical Method):**
A triangular plot of land has sides measuring 30m, 40m, and 50m. Calculate its area.

**Question 2 (Offsets at Equal Intervals):**
A field boundary is offset from a straight baseline at 8m intervals. The offsets are: 2.0m, 3.5m, 5.0m, 4.0m, 3.0m, 4.5m, 2.5m, 0.5m, 0.0m. Calculate the area using the Trapezoidal Rule.

**Question 3 (Coordinate Method):**
Calculate the area of a plot with the following vertices: P(50, 100), Q(200, 150), R(250, 50), S(100, 20).

**Question 4 (Simpson's Rule):**
The following offsets were measured to a curved boundary from a baseline at 10m intervals: 0.0m, 4.0m, 8.0m, 10.0m, 9.0m, 6.0m, 2.0m. Calculate the area using Simpson's Rule.

**Question 5 (Partitioning):**
A rectangular plot measures 80m x 60m. It needs to be divided into four equal smaller rectangular plots. Describe how this can be achieved and state the dimensions and area of each smaller plot.

---

## Answers to Practice Questions

**Answer 1:**
This is a right-angled triangle since $30^2 + 40^2 = 900 + 1600 = 2500$, and $50^2 = 2500$.
Area = $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 30 \text{ m} \times 40 \text{ m} = 600 \text{ m}^2$.
Alternatively, using Heron's formula:
$s = \frac{30+40+50}{2} = 60$
Area = $\sqrt{60(60-30)(60-40)(60-50)} = \sqrt{60 \times 30 \times 20 \times 10} = \sqrt{360000} = 600 \text{ m}^2$.

**Answer 2:**
Interval ($d$) = 8m
Offsets: 2.0, 3.5, 5.0, 4.0, 3.0, 4.5, 2.5, 0.5, 0.0
Sum of first and last offset: $2.0 + 0.0 = 2.0$
Sum of other offsets: $3.5 + 5.0 + 4.0 + 3.0 + 4.5 + 2.5 + 0.5 = 23.0$
Area $\approx \frac{8}{2} [2.0 + 2(23.0) + 0.0] = 4 [2.0 + 46.0] = 4 [48.0] = 192.0 \text{ m}^2$.

**Answer 3:**
Coordinates:
```
 50  100
200  150
250   50
100   20
 50  100
```
Sum 1 (downward): $(50 \times 150) + (200 \times 50) + (250 \times 20) + (100 \times 100)$
$= 7500 + 10000 + 5000 + 10000 = 32500$

Sum 2 (upward): $(100 \times 200) + (150 \times 250) + (50 \times 100) + (20 \times 50)$
$= 20000 + 37500 + 5000 + 1000 = 63500$

Difference: $32500 - 63500 = -31000$
Area = $\frac{1}{2} |-31000| = 15500$ square units.

**Answer 4:**
Interval ($d$) = 10m
Ordinates: 0.0, 4.0, 8.0, 10.0, 9.0, 6.0, 2.0
Number of intervals = 6 (even)
$y_0 = 0.0$
Odd ordinates (y1, y3, y5): $4.0 + 10.0 + 6.0 = 20.0$
Even ordinates (y2, y4): $8.0 + 9.0 = 17.0$
$y_6 = 2.0$

Area $\approx \frac{10}{3} [0.0 + 4(20.0) + 2(17.0) + 2.0]$
Area $\approx \frac{10}{3} [0.0 + 80.0 + 34.0 + 2.0]$
Area $\approx \frac{10}{3} [116.0]$
Area $\approx \frac{1160}{3} \approx 386.67 \text{ m}^2$.

**Answer 5:**
Total Area = $80 \text{ m} \times 60 \text{ m} = 4800 \text{ m}^2$.
Each smaller plot should have an area of $4800 / 4 = 1200 \text{ m}^2$.

To divide into four equal rectangular plots:
1.  **Divide along the length:** Draw a line parallel to the 60m sides, midway along the 80m sides. This line will be at 40m from either 60m side. This creates two rectangles of 40m x 60m.
2.  **Divide along the width:** Draw a line parallel to the 80m sides, midway along the 60m sides. This line will be at 30m from either 80m side. This creates two rectangles of 80m x 30m.

To achieve four equal plots, you would do both:
*   Draw a line parallel to the 60m sides at the 40m mark along the 80m length.
*   Draw a line parallel to the 80m sides at the 30m mark along the 60m width.

The intersection of these lines creates four smaller rectangles, each with dimensions:
**40m x 30m**
Area of each smaller plot = $40 \text{ m} \times 30 \text{ m} = 1200 \text{ m}^2$.
Sum of areas = $4 \times 1200 \text{ m}^2 = 4800 \text{ m}^2$ (matches the total area).

---

## Important Points to Remember

*   **Accuracy:** The accuracy of area calculations is paramount. Ensure your field measurements are precise and use the appropriate computational method for the given data and desired accuracy.
*   **Units:** Maintain consistent units throughout your calculations. Convert units only when necessary and ensure the final answer is in the required units.
*   **Order of Vertices (Coordinate Method):** Always list vertices in a sequential order (clockwise or counterclockwise) when using the coordinate method.
*   **Even Intervals (Simpson's Rule):** Simpson's Rule requires an even number of intervals, which means an odd number of ordinates. If you have an odd number of intervals, you can either use the Trapezoidal Rule for the entire set or apply Simpson's Rule to the first $n-1$ intervals and the Trapezoidal Rule to the last interval.
*   **Verification:** Double-check your calculations. For partitioned areas, ensure the sum of the parts equals the whole.
*   **Software:** While manual calculations are essential for understanding, surveying professionals often use specialized software (CAD, GIS, surveying data processors) that automate these calculations, reducing the risk of human error.

This concludes Module 10 on Area Computation. Practice these methods diligently to build your proficiency.
