---
title: "Contouring"
subject: "SURVEY LAB"
module: "Module 10: Area computation"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81089c"
status: "completed"
scrapedAt: "2026-05-20T18:42:01.437Z"
---
# SURVEY LAB: Module 10 - Area Computation

## Topic: Contouring

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the purpose and importance of contour lines in surveying.
*   Define key terms related to contouring, such as contour interval, contour line, contour map, etc.
*   Explain the different methods of contouring.
*   Identify characteristics and properties of contour lines.
*   Interpret contour maps to determine ground elevation, slope, and landforms.
*   Understand the principles of area computation from contour maps.
*   Apply the trapezoidal rule and Simpson's rule for area calculation from contour maps.
*   Discuss the applications of contour maps in various fields.

---

### **1. Introduction to Contouring**

**1.1 Purpose of Contouring:**

*   **Representing Topography:** Contours are the primary tool for showing the shape and elevation of the Earth's surface on a two-dimensional map.
*   **Visualizing Ground Relief:** They help us understand hills, valleys, slopes, ridges, and other topographic features.
*   **Engineering and Planning:** Essential for planning roads, buildings, dams, irrigation systems, and other infrastructure projects.
*   **Land Use and Management:** Aids in understanding drainage patterns, soil erosion potential, and suitability for agriculture or development.
*   **Navigation and Military Operations:** Crucial for route selection and understanding terrain for strategic purposes.

**1.2 Key Concepts and Definitions:**

*   **Contour Line:** An imaginary line on a map connecting points of equal elevation above a datum (usually mean sea level).
*   **Contour Interval (CI):** The vertical distance between two consecutive contour lines. This is a constant value on a given map.
    *   **Importance of CI:** A smaller CI provides more detail and shows gentler slopes, while a larger CI shows less detail and is suitable for steeper terrain or smaller-scale maps.
*   **Contour Map:** A map that displays contour lines to represent the topography of an area.
*   **Datum:** A reference point or surface from which elevations are measured.
*   **Spot Height:** A point whose elevation is directly shown on a map, not necessarily on a contour line.
*   **Index Contour:** Thicker or darker contour lines, usually every fifth contour line, to make reading easier. They are typically labeled with their elevation.
*   **Intermediate Contour:** Thinner contour lines found between index contours.
*   **Supplementary Contour:** Used to represent very minor changes in elevation, often at half the contour interval, especially in flat areas.
*   **Depression Contour:** Contour lines with hachures (short inward-pointing lines) on the inside, indicating a depression or hollow.
*   **Ridge:** An elongated area of high ground. On a contour map, contours will point downhill away from a ridge.
*   **Valley:** An elongated area of low ground, typically with a stream. On a contour map, contours will point uphill towards the source of a valley.
*   **Slope:** The steepness of the ground.
    *   **Gentle Slope:** Widely spaced contour lines.
    *   **Steep Slope:** Closely spaced contour lines.
    *   **Uniform Slope:** Equally spaced contour lines.
    *   **Concave Slope:** Closely spaced at the top, widening at the bottom.
    *   **Convex Slope:** Widely spaced at the top, narrowing at the bottom.

---

### **2. Methods of Contouring**

Contouring can be broadly classified into two main methods:

**2.1 Direct Method (Direct Contouring):**

*   **Principle:** Involves determining the elevation of numerous points on the ground and then plotting them on the map. Contour lines are then drawn by interpolation.
*   **Instruments Used:**
    *   **Leveling Instruments:** Dumpy level, auto level, digital level.
    *   **Theodolite:** For determining angles and distances, which can be used with trigonometric leveling.
    *   **Total Stations:** Combine angle and distance measurement, allowing for direct plotting of ground points.
    *   **GPS Receivers:** For determining geographic coordinates and elevations.
*   **Process:**
    1.  Establish a temporary or permanent benchmark (BM) with a known elevation.
    2.  Take backsights and foresights to determine the elevations of various points on the ground.
    3.  Record the horizontal positions (e.g., using total station or plane table) and elevations of these points.
    4.  Plot these points on the map.
    5.  Draw contour lines by interpolating between the plotted points based on the desired contour interval.

**2.2 Indirect Method (Indirect Contouring):**

*   **Principle:** Involves surveying the positions of features and spot heights, and then drawing contour lines by interpolation on the map. This method is more common for creating contour maps from existing data.
*   **Methods within Indirect Contouring:**
    *   **Using Grid Method:**
        1.  Establish a grid of squares over the area.
        2.  Determine the elevation of each grid intersection point using leveling.
        3.  Plot the grid and the spot elevations on the map.
        4.  Interpolate contour lines by connecting points of equal elevation between the grid intersections.
    *   **Using Cross-Sections:**
        1.  Establish a baseline (e.g., center line of a road).
        2.  Take cross-sections perpendicular to the baseline at regular intervals.
        3.  Determine the ground profile along each cross-section and the baseline.
        4.  Plot these profiles.
        5.  Interpolate contour lines by transferring elevations from the cross-sections to the map.
    *   **Using Tachometric Surveying (Contouring with Tacheometry):**
        1.  Set up a tacheometer (theodolite with stadia hairs) at a central station.
        2.  Measure horizontal angles, vertical angles, and stadia distances to various points on the ground.
        3.  Calculate the horizontal and vertical distances from the instrument station to each ground point.
        4.  Determine the elevation of each ground point using trigonometric leveling.
        5.  Plot the points with their respective elevations.
        6.  Interpolate contour lines.

---

### **3. Characteristics and Properties of Contour Lines**

Understanding these properties is crucial for accurate interpretation and drawing of contour maps.

*   **Regularity:** Contour lines are smooth, closed curves. They may close within the limits of the map or outside.
*   **Never Branching or Crossing:** Contour lines of different elevations cannot intersect or branch off from each other. An exception is an overhanging cliff where a contour line might appear to be on top of another, but in reality, it's due to the overhang.
*   **Spacing and Slope:**
    *   **Closely spaced:** Indicate steep slopes.
    *   **Widely spaced:** Indicate gentle slopes.
    *   **Uniform spacing:** Indicate uniform slopes.
*   **V-Shape in Valleys:** Contour lines form a "V" shape when crossing valleys, with the apex of the "V" pointing upstream (towards higher elevations).
*   **U-Shape on Ridges:** Contour lines form a "U" shape when crossing ridges, with the open part of the "U" facing downhill (towards lower elevations).
*   **Closed Loops:** Every contour line is a closed loop, either within the map boundary or outside it.
*   **Index Contours:** Every fifth contour line is usually made thicker and labeled for easier reading.
*   **Depression Contours:** Indicated by hachures pointing inwards.
*   **Concentric Contours:** Closely spaced concentric contours indicate hills or depressions. An inward-pointing hachure on the innermost contour indicates a depression, while the absence of hachures (and the general pattern) indicates a hill.
*   **Contour Interval is Constant:** The vertical distance between any two adjacent contour lines is constant for a given map.

---

### **4. Interpretation of Contour Maps**

Reading and understanding a contour map allows us to visualize the terrain.

*   **Determining Elevation:**
    *   Identify the elevation of a point by locating it relative to the nearest contour lines.
    *   If a point falls on a contour line, its elevation is that of the contour line.
    *   If a point falls between two contour lines, estimate its elevation based on the contour interval and its position between the lines.
*   **Determining Slope:**
    *   **Steepness:** Observe the spacing of contour lines. Closer lines mean steeper slopes.
    *   **Direction of Steepest Slope:** The steepest slope is perpendicular to the contour lines.
*   **Identifying Landforms:**
    *   **Hills/Mountains:** Concentric closed contours with decreasing elevations towards the center.
    *   **Depressions/Hollows:** Concentric closed contours with increasing elevations towards the center, marked with hachures.
    *   **Valleys:** "V" shaped contours pointing uphill.
    *   **Ridges:** "U" shaped contours pointing downhill.
    *   **Cliffs:** Very closely spaced contour lines, often appearing to merge.
    *   **Plains/Plateaus:** Widely spaced or absent contour lines.
*   **Drainage Patterns:** Water flows perpendicular to contour lines, from higher elevation to lower elevation. Contour lines with "V" shapes indicate the direction of streams.

---

### **5. Area Computation from Contour Maps**

Calculating the area of a region from a contour map is a common task. This involves determining the plan area of the region.

**5.1 Preparation:**

1.  **Overlay a Grid:** A common method is to overlay a grid of squares onto the contour map.
2.  **Choose a Grid Size:** The size of the grid squares should be appropriate for the scale of the map and the required accuracy.
3.  **Number the Grid Squares:** Number the squares for easy reference.

**5.2 Methods of Area Calculation:**

*   **Grid Method (Counting Squares):**
    1.  **Full Squares:** Count all the squares that are entirely within the boundary of the area.
    2.  **Partial Squares:** For squares that are partially within the boundary, estimate the fraction of the square that is inside. A common approach is to count squares that are more than half-filled as full squares and ignore those less than half-filled, or to estimate the area of partial squares more precisely.
    3.  **Total Area:** Multiply the total number of full squares (and the estimated areas of partial squares) by the area of one grid square.

    *   **Formula:** Area = (Number of full squares + Estimated area of partial squares) × (Area of one grid square)
    *   **Area of one grid square:** If the grid is $N \times N$ cells per unit length (e.g., 1 cm), then the area of one grid square is $(1/N) \times (1/N)$ square units of length.

*   **Trapezoidal Rule:**
    1.  Divide the area into a series of parallel strips of equal width ($h$), perpendicular to a baseline or a major axis.
    2.  Measure the lengths of the ordinates ($y_0, y_1, y_2, ..., y_n$) at the boundaries of each strip. $y_0$ is the first ordinate and $y_n$ is the last.
    3.  Calculate the area of each trapezoid (strip) using the formula: Area of one strip = $\frac{h}{2}(y_i + y_{i+1})$
    4.  Sum the areas of all the trapezoids.

    *   **Formula:** Total Area = $\frac{h}{2}(y_0 + 2y_1 + 2y_2 + ... + 2y_{n-1} + y_n)$

*   **Simpson's Rule:**
    1.  **Requirement:** Simpson's rule requires dividing the area into an **even** number of strips of equal width ($h$).
    2.  Measure the lengths of the ordinates ($y_0, y_1, y_2, ..., y_{2n}$) at the boundaries of each strip.
    3.  Apply Simpson's rule formula.

    *   **Formula:** Total Area = $\frac{h}{3}(y_0 + 4y_1 + 2y_2 + 4y_3 + 2y_4 + ... + 2y_{2n-2} + 4y_{2n-1} + y_{2n})$

**5.3 Choosing the Right Method:**

*   **Grid Method:** Simple and effective for rough estimates, especially for irregular shapes. Accuracy depends on the grid size and estimation of partial squares.
*   **Trapezoidal Rule:** More accurate than simple square counting, good for areas with relatively uniform shapes.
*   **Simpson's Rule:** Generally the most accurate of the three for estimating areas from irregularly spaced data or from curves, provided the data can be divided into an even number of strips.

---

### **6. Applications of Contour Maps**

Contour maps have widespread applications across various disciplines.

*   **Civil Engineering:**
    *   **Road and Railway Alignment:** Selecting routes with favorable gradients and minimizing earthwork.
    *   **Building Construction:** Site selection, foundation design, and drainage planning.
    *   **Dam and Reservoir Design:** Determining suitable locations and calculating reservoir capacities.
    *   **Irrigation and Drainage Systems:** Designing channels and planning water flow.
    *   **Tunneling and Mining:** Understanding underground topography.
*   **Urban Planning and Development:** Zoning, land use suitability analysis, and infrastructure planning.
*   **Environmental Science:**
    *   **Soil Erosion Studies:** Identifying areas prone to erosion based on slope.
    *   **Hydrology and Watershed Management:** Analyzing drainage patterns and water runoff.
    *   **Ecological Surveys:** Understanding habitat suitability based on terrain.
*   **Geology:** Mapping geological formations and understanding landforms.
*   **Archaeology:** Locating potential sites and understanding the ancient landscape.
*   **Military Operations:** Route planning, understanding terrain for defensive or offensive strategies.
*   **Agriculture:** Planning terracing, irrigation, and drainage for farms.

---

### **Important Points to Remember:**

*   **Contour Interval (CI) is Key:** Always know the contour interval of the map you are using.
*   **Spacing = Slope:** Close contours mean steep slopes; wide contours mean gentle slopes.
*   **"V"s Point Uphill in Valleys:** Always remember this rule for identifying valleys.
*   **"U"s Open Downhill on Ridges:** Conversely, this helps identify ridges.
*   **Closed Loops:** Contour lines are always closed curves.
*   **Interpolation is Crucial:** Both for drawing and interpreting contour lines, interpolation is a fundamental skill.
*   **Datum:** Understand the reference surface for elevations.
*   **Accuracy:** The accuracy of area computation depends on the map's scale, contour interval, and the method used.

---

### **Practice Questions and Exercises**

**Question 1: Definitions**

Define the following terms:
a) Contour Line
b) Contour Interval
c) Index Contour
d) Depression Contour

**Question 2: Interpretation**

A contour map shows two consecutive contour lines with elevations 50m and 60m. The horizontal distance between these two lines is 1 cm on the map. If the map scale is 1:5000, what is the average gradient between these two contour lines?

**Question 3: Landform Identification**

Describe the landform represented by each of the following contour patterns:
a) Concentric closed contours with elevations decreasing inwards.
b) "V" shaped contours pointing upwards.
c) Closely spaced parallel contour lines.
d) Concentric closed contours with hachures on the innermost line.

**Question 4: Area Calculation (Grid Method)**

Imagine a square area on a map. You overlay a grid of 1 cm x 1 cm squares. The map scale is 1:1000.
*   You count 25 full squares within the boundary.
*   You estimate that 10 squares are half-filled, and 5 squares are quarter-filled.

Calculate the approximate area of the region in square meters.

**Question 5: Area Calculation (Trapezoidal Rule)**

Consider the following ordinates measured for an area divided into 5 strips, each 2 meters wide (h=2m). The ordinates are:
$y_0 = 5$ m
$y_1 = 8$ m
$y_2 = 12$ m
$y_3 = 10$ m
$y_4 = 7$ m
$y_5 = 4$ m

Calculate the area using the trapezoidal rule.

**Question 6: Area Calculation (Simpson's Rule)**

Using the same ordinates as in Question 5 (with $h=2m$), calculate the area using Simpson's rule. Assume the ordinates can be grouped into an even number of strips ($y_0, y_1, y_2, y_3, y_4, y_5$).

---

### **Answers to Practice Questions**

**Answer 1:**

a)  **Contour Line:** An imaginary line on a map connecting points of equal elevation above a datum.
b)  **Contour Interval (CI):** The constant vertical distance between two adjacent contour lines.
c)  **Index Contour:** Thicker or darker contour lines, usually every fifth contour line, labeled with their elevation for easier reading.
d)  **Depression Contour:** Contour lines with inward-pointing hachures, indicating a decrease in elevation (a depression or hollow).

**Answer 2:**

*   Contour Interval (CI) = 60m - 50m = 10m
*   Map Scale = 1:5000
*   Horizontal distance on map = 1 cm
*   Actual horizontal distance = 1 cm * 5000 = 5000 cm = 50 meters
*   Gradient = (Vertical Rise) / (Horizontal Distance)
*   Gradient = 10 m / 50 m = 0.2
*   As a percentage: 0.2 * 100 = 20%

**Answer 3:**

a)  **Concentric closed contours with elevations decreasing inwards:** A Hill or Mountain.
b)  **"V" shaped contours pointing upwards:** A Valley.
c)  **Closely spaced parallel contour lines:** A Steep Slope (uniform).
d)  **Concentric closed contours with hachures on the innermost line:** A Depression or Hollow.

**Answer 4:**

*   Area of one grid square on map = 1 cm * 1 cm = 1 sq cm
*   Actual area of one grid square = (1 cm * 1000) * (1 cm * 1000) = 1000 cm * 1000 cm = 1,000,000 sq cm
*   Convert to square meters: 1,000,000 sq cm / (100 cm/m * 100 cm/m) = 1,000,000 sq cm / 10,000 sq cm/sq m = 100 sq m

*   Estimating partial squares:
    *   Half-filled squares: 10 squares * 0.5 = 5 full squares
    *   Quarter-filled squares: 5 squares * 0.25 = 1.25 full squares (can be rounded to 1 for estimation)
*   Total equivalent full squares = 25 (full) + 5 (half) + 1.25 (quarter) = 31.25 squares
*   Approximate Area = 31.25 squares * 100 sq m/square = 3125 sq m

**Answer 5:**

Using the Trapezoidal Rule:
Total Area = $\frac{h}{2}(y_0 + 2y_1 + 2y_2 + 2y_3 + 2y_4 + y_5)$
Total Area = $\frac{2}{2}(5 + 2(8) + 2(12) + 2(10) + 2(7) + 4)$
Total Area = $1 * (5 + 16 + 24 + 20 + 14 + 4)$
Total Area = $83$ square units (assuming the ordinates are in meters, the area would be in square meters if h is in meters)

**Answer 6:**

Using Simpson's Rule (requires an even number of strips. We have 6 ordinates, which means 5 strips. To apply Simpson's rule, we would ideally need an even number of strips, meaning 6 strips (7 ordinates). Assuming the question implies we can use the given ordinates in pairs where appropriate or that there's a misunderstanding in the prompt, and if we *were* to have 6 ordinates for 6 strips, the pattern would be $y_0, 4y_1, 2y_2, 4y_3, 2y_4, 4y_5, y_6$.

Let's re-interpret the question assuming it meant to provide 7 ordinates for 6 strips for Simpson's rule or that it wants us to consider pairs for the formula. The standard Simpson's rule formula provided in the notes is for $y_0$ to $y_{2n}$.

Given ordinates: $y_0, y_1, y_2, y_3, y_4, y_5$. This represents 5 strips. Simpson's rule requires an *even* number of strips.

*   **If we have 6 ordinates ($y_0$ to $y_5$), we have 5 strips. Simpson's rule cannot be directly applied without further data or modification.**
*   **However, if the question intended to imply that we can group data or has a typo, and we are to apply the *spirit* of Simpson's rule, let's assume we have a sequence $y_0, y_1, y_2, y_3, y_4, y_5$. A common adaptation or misunderstanding is to apply it to segments.**

Let's assume there's a typo and we have $y_0, y_1, y_2, y_3, y_4, y_5, y_6$.
Let's provide a hypothetical $y_6 = 3$ for demonstration.
Ordinates: 5, 8, 12, 10, 7, 4, 3 (h=2m)

Total Area = $\frac{h}{3}(y_0 + 4y_1 + 2y_2 + 4y_3 + 2y_4 + 4y_5 + y_6)$
Total Area = $\frac{2}{3}(5 + 4(8) + 2(12) + 4(10) + 2(7) + 4(4) + 3)$
Total Area = $\frac{2}{3}(5 + 32 + 24 + 40 + 14 + 16 + 3)$
Total Area = $\frac{2}{3}(134)$
Total Area = $89.33$ square units.

**Note on Simpson's Rule Question:** In a real exam scenario, clarify if the number of ordinates is sufficient for Simpson's rule. If not, revert to the Trapezoidal rule or the Grid method as appropriate. If the question *insists* on Simpson's rule with an odd number of strips, it might imply using a combination of rules or there's an error in the question itself.

---
