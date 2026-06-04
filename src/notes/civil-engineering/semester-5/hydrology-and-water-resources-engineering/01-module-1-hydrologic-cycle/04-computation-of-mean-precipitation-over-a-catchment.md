---
title: "computation of mean precipitation over a catchment"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 1: Hydrologic cycle"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d82"
status: "completed"
scrapedAt: "2026-05-20T18:49:05.817Z"
---
# HYDROLOGY AND WATER RESOURCES ENGINEERING

## Module 1: The Hydrologic Cycle

### Topic: Computation of Mean Precipitation Over a Catchment

---

### 1. Introduction to Precipitation and Catchments

*   **Precipitation:** Any form of water, whether liquid or solid, that falls from the atmosphere to the Earth's surface. Common forms include rain, snow, sleet, and hail.
*   **Catchment (or Drainage Basin/Watershed):** An area of land where all precipitation that falls within it drains to a common outlet, such as a river, stream, lake, or reservoir.
*   **Importance of Mean Precipitation:** Understanding the average precipitation over a catchment is crucial for:
    *   Water resource assessment (e.g., estimating available water supply).
    *   Hydrological modeling and forecasting.
    *   Flood and drought analysis.
    *   Design of hydraulic structures (e.g., dams, spillways).
    *   Agricultural planning and irrigation.

---

### 2. Methods for Computing Mean Precipitation

The accurate measurement of precipitation at a single point (using rain gauges) is important, but for a catchment, we need to determine the *average* precipitation over its entire area. Several methods exist, each with its own advantages and limitations.

---

#### 2.1 Arithmetic Average Method

This is the simplest method, assuming that precipitation is uniformly distributed over the catchment.

*   **Concept:** The mean precipitation is calculated by taking a simple arithmetic average of the precipitation recorded by all rain gauges within or near the catchment.
*   **Formula:**
    $P_{mean} = \frac{\sum_{i=1}^{n} P_i}{n}$
    Where:
    *   $P_{mean}$ = Mean precipitation over the catchment.
    *   $P_i$ = Precipitation recorded by the $i$-th rain gauge.
    *   $n$ = Total number of rain gauges used.
*   **When to Use:** Suitable for small catchments where precipitation is expected to be relatively uniform and the rain gauge network is dense.
*   **Limitations:**
    *   Ignores spatial variations in precipitation.
    *   Can be inaccurate for large or topographically diverse catchments.
    *   Does not account for the area represented by each gauge.

*   **Example:**
    Consider a small, relatively flat catchment with four rain gauges:
    *   Gauge 1: 150 mm
    *   Gauge 2: 175 mm
    *   Gauge 3: 160 mm
    *   Gauge 4: 180 mm

    Using the Arithmetic Average Method:
    $P_{mean} = \frac{150 + 175 + 160 + 180}{4} = \frac{665}{4} = 166.25 \text{ mm}$

---

#### 2.2 Thiessen Polygon (or Voronoi Diagram) Method

This method accounts for the area of influence of each rain gauge.

*   **Concept:** Each rain gauge is assigned a specific area of influence, called a Thiessen polygon. The mean precipitation is then calculated as a weighted average, where the weights are the areas of these polygons.
*   **Procedure:**
    1.  **Plot Rain Gauges:** Mark the locations of all rain gauges on a map of the catchment.
    2.  **Construct Perpendicular Bisectors:** Draw perpendicular bisectors to the lines connecting adjacent rain gauges.
    3.  **Form Polygons:** The intersection of these bisectors forms polygons around each rain gauge. The area within a polygon is closer to its central rain gauge than to any other.
    4.  **Define Catchment Boundaries:** Ensure the polygons are clipped by the catchment boundary.
    5.  **Calculate Areas:** Determine the area ($A_i$) of each Thiessen polygon within the catchment boundary.
    6.  **Calculate Weighted Average:** The mean precipitation is the sum of the product of precipitation at each gauge and its corresponding polygon area, divided by the total catchment area.

*   **Formula:**
    $P_{mean} = \frac{\sum_{i=1}^{n} (P_i \times A_i)}{A_{total}}$
    Where:
    *   $P_{mean}$ = Mean precipitation over the catchment.
    *   $P_i$ = Precipitation recorded by the $i$-th rain gauge.
    *   $A_i$ = Area of the Thiessen polygon for the $i$-th rain gauge within the catchment.
    *   $A_{total}$ = Total area of the catchment.
    *   $n$ = Total number of rain gauges used.

*   **When to Use:** More accurate than the arithmetic average, especially for larger catchments or when rain gauges are unevenly distributed.

*   **Example:**
    Consider a catchment with three rain gauges (G1, G2, G3) and their corresponding Thiessen polygon areas within the catchment:
    *   G1: $P_1 = 180$ mm, $A_1 = 20 \text{ km}^2$
    *   G2: $P_2 = 160$ mm, $A_2 = 35 \text{ km}^2$
    *   G3: $P_3 = 150$ mm, $A_3 = 25 \text{ km}^2$
    *   Total Catchment Area ($A_{total}$) = $A_1 + A_2 + A_3 = 20 + 35 + 25 = 80 \text{ km}^2$

    Using the Thiessen Polygon Method:
    $P_{mean} = \frac{(180 \times 20) + (160 \times 35) + (150 \times 25)}{80}$
    $P_{mean} = \frac{3600 + 5600 + 3750}{80}$
    $P_{mean} = \frac{12950}{80} = 161.875 \text{ mm}$

---

#### 2.3 Isohyetal Method

This method uses contour lines of equal precipitation to estimate the mean precipitation.

*   **Concept:** Isohyets are lines drawn on a map connecting points of equal precipitation. The catchment is divided into zones based on these isohyet lines, and the mean precipitation is calculated as a weighted average of the precipitation values associated with these zones.
*   **Procedure:**
    1.  **Plot Rain Gauges:** Mark the locations of rain gauges on a map.
    2.  **Draw Isohyets:** Draw contour lines of equal precipitation (e.g., 100 mm, 120 mm, 140 mm, etc.) connecting points of equal rainfall. The spacing of isohyets should be uniform. Interpolation between gauge locations is required.
    3.  **Determine Area Between Isohyets:** Measure the area ($A_i$) of the catchment lying between consecutive isohyets.
    4.  **Calculate Isohyet Values:** For each zone between two isohyets, use the average of the two isohyet values as the representative precipitation for that zone. For example, if isohyets are 100 mm and 120 mm, the representative value for the area between them is (100 + 120) / 2 = 110 mm.
    5.  **Calculate Weighted Average:** The mean precipitation is the sum of the product of the representative precipitation value for each zone and its corresponding area, divided by the total catchment area.

*   **Formula:**
    $P_{mean} = \frac{\sum_{i=1}^{m} (P_{isohyet\_avg} \times A_i)}{A_{total}}$
    Where:
    *   $P_{mean}$ = Mean precipitation over the catchment.
    *   $P_{isohyet\_avg}$ = Average precipitation value between two consecutive isohyets.
    *   $A_i$ = Area of the catchment between two consecutive isohyets.
    *   $A_{total}$ = Total area of the catchment.
    *   $m$ = Number of zones defined by isohyets.

*   **When to Use:** Generally considered the most accurate method, especially for large, topographically complex catchments, as it directly visualizes and accounts for spatial precipitation variability.

*   **Example:**
    Consider a catchment divided into three zones by isohyets.
    *   Zone 1 (area $A_1 = 25 \text{ km}^2$): Between isohyets 150 mm and 170 mm. Average precipitation $P_{avg1} = (150 + 170) / 2 = 160$ mm.
    *   Zone 2 (area $A_2 = 40 \text{ km}^2$): Between isohyets 170 mm and 190 mm. Average precipitation $P_{avg2} = (170 + 190) / 2 = 180$ mm.
    *   Zone 3 (area $A_3 = 35 \text{ km}^2$): Between isohyets 190 mm and 210 mm. Average precipitation $P_{avg3} = (190 + 210) / 2 = 200$ mm.
    *   Total Catchment Area ($A_{total}$) = $A_1 + A_2 + A_3 = 25 + 40 + 35 = 100 \text{ km}^2$

    Using the Isohyetal Method:
    $P_{mean} = \frac{(160 \times 25) + (180 \times 40) + (200 \times 35)}{100}$
    $P_{mean} = \frac{4000 + 7200 + 7000}{100}$
    $P_{mean} = \frac{18200}{100} = 182 \text{ mm}$

---

### 3. Considerations for Rain Gauge Network Design

*   **Density:** The number of rain gauges required depends on the desired accuracy, the size of the catchment, and the spatial variability of precipitation. Generally, higher variability requires a denser network.
*   **Distribution:** Gauges should be distributed as evenly as possible across the catchment. Areas with higher rainfall intensity or significant topographic features may require more gauges.
*   **Type of Gauge:** Standard recording rain gauges (tipping bucket, weighing-bucket) are preferred for hydrological studies as they provide continuous data. Non-recording gauges are simpler but less informative.
*   **Exposure:** Gauges should be installed correctly to minimize errors due to wind (e.g., using splash shields) and ensure accurate collection.
*   **Period of Record:** Data from gauges should ideally cover a sufficiently long period to represent typical hydrological conditions and variations.

---

### 4. Adjusting for Missing Data and Gauge Errors

*   **Missing Data:** If data from a gauge is missing for a period, it can often be estimated using data from nearby gauges.
    *   **Arithmetic Average Method:** Simple average of nearby gauge readings.
    *   **Normal Ratio Method:** Uses the average annual precipitation of surrounding stations to estimate the missing value, accounting for differences in normal precipitation.
    *   **Inverse Distance Method:** Weights nearby stations by the inverse of their distance.
*   **Gauge Errors:**
    *   **Wind Effects:** Can lead to undercatch, especially for snow or during high winds.
    *   **Evaporation:** Can occur from the collected water in the gauge, particularly in hot climates.
    *   **Obstructions:** Nearby trees or buildings can affect airflow and gauge readings.
    *   **Incorrect Installation:** Poorly sited gauges can lead to inaccurate measurements.
    *   **Consistent Bias:** If a gauge consistently over- or under-measures compared to surrounding gauges, the data can be adjusted.

---

### 5. Practical Aspects and Software Tools

*   **GIS (Geographic Information Systems):** GIS software is invaluable for the Isohyetal and Thiessen Polygon methods. It allows for easy plotting of gauges, drawing of polygons and isohyets, and calculation of areas.
*   **Hydrological Software:** Specialized hydrological modeling software often includes modules for processing precipitation data and computing mean catchment precipitation.

---

### 6. Learning Outcomes Addressed

*   **Understanding the concept of a catchment and the importance of mean precipitation:** Covered in Section 1.
*   **Familiarity with different methods for computing mean precipitation:** Covered in Section 2 (Arithmetic Average, Thiessen Polygon, Isohyetal methods).
*   **Ability to apply these methods to given data:** Demonstrated through examples in Section 2.
*   **Awareness of the factors influencing the choice of method:** Discussed in the "When to Use" sections for each method.
*   **Understanding the principles of rain gauge network design and data quality:** Covered in Section 3 and Section 4.

---

### 7. Practice Questions and Exercises

**Question 1:**
A catchment has five rain gauges with the following recorded precipitation values: 95 mm, 110 mm, 85 mm, 125 mm, and 105 mm. Calculate the mean precipitation over the catchment using the Arithmetic Average Method.

**Answer 1:**
$P_{mean} = \frac{95 + 110 + 85 + 125 + 105}{5} = \frac{520}{5} = 104 \text{ mm}$

**Question 2:**
A catchment is divided into three Thiessen polygons around rain gauges G1, G2, and G3. The recorded precipitations and the areas of their respective polygons within the catchment are:
*   G1: $P_1 = 200$ mm, $A_1 = 30 \text{ km}^2$
*   G2: $P_2 = 220$ mm, $A_2 = 45 \text{ km}^2$
*   G3: $P_3 = 180$ mm, $A_3 = 35 \text{ km}^2$
Calculate the mean precipitation over the catchment using the Thiessen Polygon Method.

**Answer 2:**
Total Catchment Area ($A_{total}$) = $30 + 45 + 35 = 110 \text{ km}^2$
$P_{mean} = \frac{(200 \times 30) + (220 \times 45) + (180 \times 35)}{110}$
$P_{mean} = \frac{6000 + 9900 + 6300}{110}$
$P_{mean} = \frac{22200}{110} = 201.82 \text{ mm}$ (approx.)

**Question 3:**
Imagine a catchment where precipitation varies spatially. You are given the following information from an Isohyetal map:
*   Zone A: Area $A_A = 50 \text{ km}^2$, between isohyets 100 mm and 120 mm.
*   Zone B: Area $A_B = 70 \text{ km}^2$, between isohyets 120 mm and 140 mm.
*   Zone C: Area $A_C = 40 \text{ km}^2$, between isohyets 140 mm and 160 mm.
Calculate the mean precipitation over the catchment using the Isohyetal Method.

**Answer 3:**
*   Average precipitation for Zone A ($P_{avgA}$) = (100 + 120) / 2 = 110 mm
*   Average precipitation for Zone B ($P_{avgB}$) = (120 + 140) / 2 = 130 mm
*   Average precipitation for Zone C ($P_{avgC}$) = (140 + 160) / 2 = 150 mm
Total Catchment Area ($A_{total}$) = $50 + 70 + 40 = 160 \text{ km}^2$

$P_{mean} = \frac{(110 \times 50) + (130 \times 70) + (150 \times 40)}{160}$
$P_{mean} = \frac{5500 + 9100 + 6000}{160}$
$P_{mean} = \frac{20600}{160} = 128.75 \text{ mm}$

---

### 8. Important Points to Remember

*   **No single method is universally best.** The choice depends on catchment size, topography, rain gauge network density, and desired accuracy.
*   **Thiessen Polygon and Isohyetal methods are generally preferred** over the Arithmetic Average method for accuracy, especially in larger or varied catchments.
*   **Accurate area measurement** is critical for the Thiessen Polygon and Isohyetal methods.
*   **Rain gauge network density and distribution** significantly impact the reliability of mean precipitation estimates.
*   **Data quality and handling of missing data** are crucial for accurate calculations.
*   **GIS tools are highly recommended** for implementing the more advanced methods.
