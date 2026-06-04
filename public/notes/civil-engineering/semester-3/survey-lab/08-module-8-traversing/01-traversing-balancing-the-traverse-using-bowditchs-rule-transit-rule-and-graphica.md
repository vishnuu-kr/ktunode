---
title: "Traversing - Balancing the traverse using Bowditch’s rule, Transit rule and graphical method"
subject: "SURVEY LAB"
module: "Module 8: Traversing "
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810896"
status: "completed"
scrapedAt: "2026-05-20T18:41:58.522Z"
---
# SURVEY LAB: Module 8 - Traversing

## Topic: Traversing - Balancing the Traverse using Bowditch’s Rule, Transit Rule, and Graphical Method

### 1. Introduction to Traversing and Traverse Adjustment

**What is Traversing?**

Traversing is a fundamental surveying technique used to determine the relative positions of a series of points. It involves establishing a framework of control by measuring the lengths and directions (bearings or azimuths) of successive lines. These lines form a traverse, which can be open or closed.

**Purpose of Traverse Adjustment (Balancing):**

In an ideal scenario, the measurements in a closed traverse should perfectly close, meaning the sum of the latitudes and departures should equal zero. However, due to inherent errors in measurement (instrumental, personal, environmental), this rarely happens. Traverse adjustment, or balancing, is the process of distributing these misclosures to obtain the most probable coordinates for the traverse stations.

### 2. Types of Traverse Errors and Misclosure

**Types of Errors:**

*   **Systematic Errors:** These are errors that occur in the same way each time a measurement is made. Examples include faulty instrument calibration, consistently incorrect leveling, or consistent atmospheric refraction. While these can be corrected or minimized, they contribute to the overall misclosure.
*   **Accidental (Random) Errors:** These are errors that occur randomly and can be positive or negative, often canceling each other out over a series of measurements. Examples include slight variations in sighting, reading the instrument, or setting up.

**Misclosure:**

The difference between the starting and ending coordinates of a traverse after all measurements are taken is called the **misclosure**. For a closed traverse, this misclosure should ideally be zero.

*   **Latitude Misclosure ($\Delta L$ or $E_L$):** The sum of the errors in the North-South direction.
    $\Delta L = \sum \text{Northings} - \sum \text{Southings}$ (or $\sum \text{Latitudes}$ where North is positive, South is negative)
*   **Departure Misclosure ($\Delta D$ or $E_D$):** The sum of the errors in the East-West direction.
    $\Delta D = \sum \text{Eastings} - \sum \text{Westings}$ (or $\sum \text{Departures}$ where East is positive, West is negative)

**Total Misclosure (or Loop Misclosure):**

The resultant misclosure vector.
$\text{Total Misclosure} = \sqrt{(\Delta L)^2 + (\Delta D)^2}$

**Course Length (or Traverse Length):**

The sum of the lengths of all traverse legs.
$\text{Course Length} = \sum \text{Lengths of Legs}$

**Bowditch's Rule and Transit Rule are primarily used for adjusting traverses where both lengths and directions have been measured, and are applied to correct the latitudes and departures of each course.**

---

### 3. Balancing the Traverse using Bowditch’s Rule

**Concept:**

Bowditch's Rule is an empirical method that assumes errors are proportional to the length of the traverse leg. It distributes the latitude and departure misclosures to each course in proportion to the length of that course. This is a widely used and practical method for adjusting traverses measured with compass and chain or theodolite and tape.

**Assumptions:**

*   Errors in length and direction measurements are proportional to the length of the traverse leg.
*   Both angle and distance measurements are of equal precision.

**Formulas:**

*   **Correction to Latitude ($\delta_L$):**
    $\delta_L = -\Delta L \times \frac{\text{Length of Course}}{\text{Total Traverse Length}}$
    *   The negative sign is used because the correction is applied to make the sum of corrected latitudes equal to zero.

*   **Correction to Departure ($\delta_D$):**
    $\delta_D = -\Delta D \times \frac{\text{Length of Course}}{\text{Total Traverse Length}}$
    *   The negative sign is used because the correction is applied to make the sum of corrected departures equal to zero.

**Steps for Application:**

1.  **Calculate Latitudes and Departures:** Determine the latitudes and departures for each course of the traverse using the measured angles (bearings/azimuths) and lengths.
2.  **Calculate Sum of Latitudes and Departures:** Sum all the Northings (positive latitudes) and Southings (negative latitudes). Sum all the Eastings (positive departures) and Westings (negative departures).
3.  **Calculate Misclosures:** Determine $\Delta L$ (Latitude Misclosure) and $\Delta D$ (Departure Misclosure).
4.  **Calculate Total Traverse Length:** Sum the lengths of all traverse legs.
5.  **Calculate Correction Factors:** For each course, calculate the ratio of its length to the total traverse length.
6.  **Apply Corrections:** Apply the calculated $\delta_L$ and $\delta_D$ to the original latitude and departure of each course.
    *   Corrected Latitude = Original Latitude + $\delta_L$
    *   Corrected Departure = Original Departure + $\delta_D$
7.  **Check:** Verify that the sum of corrected latitudes and the sum of corrected departures are both zero.

**Example:**

Consider a closed traverse ABCDA with the following data:

| Course | Length (m) | Bearing | Latitude (m) | Departure (m) |
| :----- | :--------- | :------ | :----------- | :------------ |
| AB     | 100.00     | N 30°00' E | +86.60       | +50.00        |
| BC     | 150.00     | S 45°00' E | -106.07      | +106.07       |
| CD     | 120.00     | S 60°00' W | -60.00       | -103.92       |
| DA     | 170.00     | N 15°00' W | +164.20      | -43.78        |

**Calculations:**

1.  **Sum of Latitudes:**
    Northings: 86.60 + 164.20 = 250.80 m
    Southings: 106.07 + 60.00 = 166.07 m
    $\Delta L = 250.80 - 166.07 = +84.73$ m (This indicates an excess of northing)

2.  **Sum of Departures:**
    Eastings: 50.00 + 106.07 = 156.07 m
    Westings: 103.92 + 43.78 = 147.70 m
    $\Delta D = 156.07 - 147.70 = +8.37$ m (This indicates an excess of easting)

3.  **Total Traverse Length:**
    $100.00 + 150.00 + 120.00 + 170.00 = 540.00$ m

4.  **Applying Bowditch's Rule:**

    | Course | Length (m) | $\Delta L$ Correction ($\delta_L$) | $\Delta D$ Correction ($\delta_D$) | Corrected Latitude (m) | Corrected Departure (m) |
    | :----- | :--------- | :------------------------------- | :------------------------------- | :--------------------- | :---------------------- |
    | AB     | 100.00     | $-84.73 \times \frac{100}{540} = -15.69$ | $-8.37 \times \frac{100}{540} = -1.55$  | $86.60 - 15.69 = 70.91$  | $50.00 - 1.55 = 48.45$   |
    | BC     | 150.00     | $-84.73 \times \frac{150}{540} = -23.54$ | $-8.37 \times \frac{150}{540} = -2.33$  | $-106.07 - 23.54 = -129.61$ | $106.07 - 2.33 = 103.74$  |
    | CD     | 120.00     | $-84.73 \times \frac{120}{540} = -18.83$ | $-8.37 \times \frac{120}{540} = -1.86$  | $-60.00 - 18.83 = -78.83$  | $-103.92 - 1.86 = -105.78$ |
    | DA     | 170.00     | $-84.73 \times \frac{170}{540} = -26.67$ | $-8.37 \times \frac{170}{540} = -2.64$  | $164.20 - 26.67 = 137.53$ | $-43.78 - 2.64 = -46.42$  |
    | **Sum**| **540.00** | **-84.73**                       | **-8.37**                        | **0.00**               | **0.00**                |

**Important Point:** The corrections are applied with opposite signs to the misclosures. If $\Delta L$ is positive (excess Northings), corrections to latitudes will be negative. If $\Delta D$ is positive (excess Eastings), corrections to departures will be negative.

---

### 4. Balancing the Traverse using Transit Rule

**Concept:**

The Transit Rule is another empirical method used for adjusting traverses where both lengths and directions have been measured. It assumes that errors are primarily due to inaccuracies in angle measurements, and therefore, distributes the latitude and departure misclosures in proportion to the changes in latitude and departure, respectively. This rule is often preferred when the traverse is established using a transit or theodolite and tape, where angle measurements are considered more precise than distance measurements.

**Assumptions:**

*   Errors in distance measurements are negligible compared to errors in angle measurements.
*   Corrections to latitudes are made in proportion to the latitudes themselves.
*   Corrections to departures are made in proportion to the departures themselves.

**Formulas:**

*   **Correction to Latitude ($\delta_L$):**
    $\delta_L = -\Delta L \times \frac{\text{Latitude of Course}}{\text{Sum of Absolute Values of Latitudes}}$

*   **Correction to Departure ($\delta_D$):**
    $\delta_D = -\Delta D \times \frac{\text{Departure of Course}}{\text{Sum of Absolute Values of Departures}}$

**Steps for Application:**

1.  **Calculate Latitudes and Departures:** Same as step 1 in Bowditch's Rule.
2.  **Calculate Sum of Latitudes and Departures:** Same as step 2 in Bowditch's Rule.
3.  **Calculate Misclosures:** Determine $\Delta L$ and $\Delta D$. Same as step 3 in Bowditch's Rule.
4.  **Calculate Sum of Absolute Values:** Sum the absolute values of all latitudes and the absolute values of all departures.
5.  **Apply Corrections:** Apply the calculated $\delta_L$ and $\delta_D$ to the original latitude and departure of each course.
    *   Corrected Latitude = Original Latitude + $\delta_L$
    *   Corrected Departure = Original Departure + $\delta_D$
6.  **Check:** Verify that the sum of corrected latitudes and the sum of corrected departures are both zero.

**Example (using the same data as the Bowditch's Rule example):**

| Course | Length (m) | Bearing | Latitude (m) | Departure (m) | |Latitude| (m) | |Departure| (m) |
| :----- | :--------- | :------ | :----------- | :------------ | :-------- | :------------ |
| AB     | 100.00     | N 30°00' E | +86.60       | +50.00        | 86.60     | 50.00         |
| BC     | 150.00     | S 45°00' E | -106.07      | +106.07       | 106.07    | 106.07        |
| CD     | 120.00     | S 60°00' W | -60.00       | -103.92       | 60.00     | 103.92        |
| DA     | 170.00     | N 15°00' W | +164.20      | -43.78        | 164.20    | 43.78         |
| **Sum**| **540.00** |         | **+84.73**   | **+8.37**     | **416.87**| **303.77**    |

From previous calculations: $\Delta L = +84.73$ m, $\Delta D = +8.37$ m.
Sum of Absolute Latitudes = 416.87 m
Sum of Absolute Departures = 303.77 m

**Applying Transit Rule:**

| Course | Latitude (m) | Departure (m) | $\Delta L$ Correction ($\delta_L$) | $\Delta D$ Correction ($\delta_D$) | Corrected Latitude (m) | Corrected Departure (m) |
| :----- | :----------- | :------------ | :------------------------------- | :------------------------------- | :--------------------- | :---------------------- |
| AB     | +86.60       | +50.00        | $-84.73 \times \frac{86.60}{416.87} = -17.57$ | $-8.37 \times \frac{50.00}{303.77} = -1.38$  | $86.60 - 17.57 = 69.03$  | $50.00 - 1.38 = 48.62$   |
| BC     | -106.07      | +106.07       | $-84.73 \times \frac{106.07}{416.87} = -21.57$ | $-8.37 \times \frac{106.07}{303.77} = -2.93$  | $-106.07 - 21.57 = -127.64$ | $106.07 - 2.93 = 103.14$  |
| CD     | -60.00       | -103.92       | $-84.73 \times \frac{60.00}{416.87} = -12.17$  | $-8.37 \times \frac{103.92}{303.77} = -2.87$  | $-60.00 - 12.17 = -72.17$  | $-103.92 - 2.87 = -106.79$ |
| DA     | +164.20      | -43.78        | $-84.73 \times \frac{164.20}{416.87} = -33.27$ | $-8.37 \times \frac{43.78}{303.77} = -1.20$  | $164.20 - 33.27 = 130.93$ | $-43.78 - 1.20 = -44.98$  |
| **Sum**| **+84.73**   | **+8.37**     | **-84.73**                   | **-8.37**                    | **0.00**               | **0.00**                |

**Important Point:** The corrections are applied with opposite signs to the misclosures, and the magnitude of correction depends on the proportion of the course's latitude/departure to the total absolute latitudes/departures.

---

### 5. Balancing the Traverse using the Graphical Method

**Concept:**

The graphical method, also known as the graphical adjustment or Crum-Gillespie method, provides a visual way to balance a traverse. It's based on the principle that the correction to each course is proportional to its length, similar to Bowditch's Rule, but applied graphically. This method is less precise than the mathematical methods but can be useful for a quick estimation or when a visual representation is desired.

**Assumptions:**

*   Errors are proportional to the length of the traverse leg.

**Steps for Application:**

1.  **Plot the Traverse:** Accurately plot the measured traverse on a piece of graph paper, using the original measured lengths and directions (bearings/azimuths).
2.  **Determine the Misclosure Vector:**
    *   Draw a line representing the total latitude misclosure ($\Delta L$) and a line representing the total departure misclosure ($\Delta D$) from the starting point of the plotted traverse.
    *   Connect the end of the traverse (as measured) to the starting point. This line represents the resultant misclosure vector.
3.  **Construct the Correction Diagram:**
    *   On a separate sheet of paper, draw a base line and mark the lengths of each traverse leg consecutively along this line. The total length of this base line will be the total traverse length.
    *   Draw vertical lines from each station point on the base line.
    *   From the start of the base line, draw a line parallel to the misclosure vector.
    *   Draw a line from the end of the base line that is parallel to the misclosure vector but offset by the misclosure amount. Alternatively, draw a line from the start of the base line to the end of the base line, representing the misclosure vector.
    *   From the points on the base line, draw lines parallel to the misclosure vector that intersect the corrected line. The vertical distance between the original base line and these intersection points represents the correction to the latitude.
    *   A more common graphical approach involves drawing a line from the starting point of the traverse to the "erroneous" closing point. Then, for each leg, draw a line parallel to this misclosure line from the end of the previous corrected leg. The length of this offset segment represents the correction to be applied.

**A more practical graphical approach often involves:**

1.  **Plotting the traverse:** Plot the traverse with its measured lengths and directions.
2.  **Identifying the misclosure:** The line connecting the end point to the start point is the misclosure vector.
3.  **Creating a "correction diagram":** On a separate strip of paper, mark the lengths of each traverse leg end-to-end.
4.  **Distributing the misclosure:** Draw a line connecting the start and end of this strip. Then, draw lines parallel to the misclosure vector from each division point. The distance between these parallel lines and the strip itself represents the correction to be applied to each leg.

**Simplified Graphical Method (similar to Bowditch's Principle):**

1.  **Plot the Traverse:** Plot the traverse as measured. The traverse will not close.
2.  **Draw the Misclosure Line:** Draw a line connecting the last station to the first station. This is the misclosure line.
3.  **Draw a Parallel Line:** Draw a line parallel to the misclosure line, starting from the first station and extending to the end of the traverse.
4.  **Offsetting:** For each leg of the traverse, draw a perpendicular line from the end of that leg to the parallel line drawn in step 3. The length of this perpendicular segment represents the magnitude of the correction to be applied to the length of that leg (and hence to its latitude and departure). The direction of the correction is parallel to the misclosure line.

**Example (Conceptual):**

Imagine you plot a traverse ABC, and point C doesn't land on A. The line CA is your misclosure.
Now, you draw a line from A parallel to CA. For each segment AB and BC, you find the perpendicular distance to this parallel line. These distances are proportional to the length of the legs.

**Advantages of Graphical Method:**

*   Provides a visual understanding of the misclosure and its distribution.
*   Can be quicker for a rough adjustment.

**Disadvantages of Graphical Method:**

*   Less precise than mathematical methods.
*   Accuracy depends heavily on the plotting scale and drafting precision.

---

### 6. Practice Questions and Exercises

**Question 1 (Bowditch's Rule):**

A closed traverse ABCDEA has the following observed data:

| Course | Length (m) | Bearing   |
| :----- | :--------- | :-------- |
| AB     | 250.50     | N 40°15' E |
| BC     | 300.25     | S 30°45' E |
| CD     | 200.75     | S 55°30' W |
| DE     | 350.00     | N 25°00' W |
| EA     | 180.50     | N 70°10' E |

Calculate the corrected latitudes and departures for each course using Bowditch's Rule.

**Question 2 (Transit Rule):**

Using the same traverse data as in Question 1, calculate the corrected latitudes and departures for each course using the Transit Rule.

**Question 3 (Conceptual):**

When would you prefer to use the Transit Rule over Bowditch's Rule, and why?

---

### 7. Answers to Practice Questions

**Answer to Question 1 (Bowditch's Rule):**

**Step 1: Calculate Initial Latitudes and Departures**

| Course | Length (m) | Bearing   | Latitude (m) (N=+, S=-) | Departure (m) (E=+, W=-) |
| :----- | :--------- | :-------- | :----------------------- | :----------------------- |
| AB     | 250.50     | N 40°15' E | $250.50 \cos(40.25°) = +191.63$ | $250.50 \sin(40.25°) = +161.00$ |
| BC     | 300.25     | S 30°45' E | $300.25 \cos(30.75°) = -257.49$ | $300.25 \sin(30.75°) = +154.36$ |
| CD     | 200.75     | S 55°30' W | $200.75 \cos(55.50°) = -114.77$ | $200.75 \sin(55.50°) = -165.00$ |
| DE     | 350.00     | N 25°00' W | $350.00 \cos(25.00°) = +317.28$ | $350.00 \sin(25.00°) = -147.96$ |
| EA     | 180.50     | N 70°10' E | $180.50 \cos(70.17°) = +61.71$  | $180.50 \sin(70.17°) = +169.73$ |

**Step 2: Calculate Sum of Latitudes and Departures**

Northings (Sum of +Lat): $191.63 + 317.28 + 61.71 = 570.62$ m
Southings (Sum of -Lat): $257.49 + 114.77 = 372.26$ m
$\Delta L = 570.62 - 372.26 = +198.36$ m

Eastings (Sum of +Dep): $161.00 + 154.36 + 169.73 = 485.09$ m
Westings (Sum of -Dep): $165.00 + 147.96 = 312.96$ m
$\Delta D = 485.09 - 312.96 = +172.13$ m

**Step 3: Calculate Total Traverse Length**

Total Length = $250.50 + 300.25 + 200.75 + 350.00 + 180.50 = 1282.00$ m

**Step 4: Apply Bowditch's Rule Corrections**

| Course | Length (m) | $\Delta L$ Correction ($\delta_L$) | $\Delta D$ Correction ($\delta_D$) | Corrected Latitude (m) | Corrected Departure (m) |
| :----- | :--------- | :------------------------------- | :------------------------------- | :--------------------- | :---------------------- |
| AB     | 250.50     | $-198.36 \times \frac{250.50}{1282.00} = -38.74$ | $-172.13 \times \frac{250.50}{1282.00} = -33.67$  | $191.63 - 38.74 = 152.89$  | $161.00 - 33.67 = 127.33$   |
| BC     | 300.25     | $-198.36 \times \frac{300.25}{1282.00} = -46.56$ | $-172.13 \times \frac{300.25}{1282.00} = -40.43$  | $-257.49 - 46.56 = -304.05$ | $154.36 - 40.43 = 113.93$  |
| CD     | 200.75     | $-198.36 \times \frac{200.75}{1282.00} = -31.02$ | $-172.13 \times \frac{200.75}{1282.00} = -26.93$  | $-114.77 - 31.02 = -145.79$ | $-165.00 - 26.93 = -191.93$ |
| DE     | 350.00     | $-198.36 \times \frac{350.00}{1282.00} = -54.20$ | $-172.13 \times \frac{350.00}{1282.00} = -47.06$  | $317.28 - 54.20 = 263.08$  | $-147.96 - 47.06 = -195.02$ |
| EA     | 180.50     | $-198.36 \times \frac{180.50}{1282.00} = -27.96$ | $-172.13 \times \frac{180.50}{1282.00} = -24.21$  | $61.71 - 27.96 = 33.75$   | $169.73 - 24.21 = 145.52$  |
| **Sum**| **1282.00**| **-198.36**                      | **-172.13**                      | **0.00**               | **0.00**                |

**Answer to Question 2 (Transit Rule):**

**Step 1-3:** Same as Answer to Question 1. $\Delta L = +198.36$ m, $\Delta D = +172.13$ m.

**Step 4: Calculate Sum of Absolute Latitudes and Departures**

| Course | Latitude (m) | Departure (m) | |Latitude| (m) | |Departure| (m) |
| :----- | :----------- | :------------ | :-------- | :------------ |
| AB     | +191.63      | +161.00       | 191.63    | 161.00        |
| BC     | -257.49      | +154.36       | 257.49    | 154.36        |
| CD     | -114.77      | -165.00       | 114.77    | 165.00        |
| DE     | +317.28      | -147.96       | 317.28    | 147.96        |
| EA     | +61.71       | +169.73       | 61.71     | 169.73        |
| **Sum**| **+198.36**  | **+172.13**   | **942.88**| **798.05**    |

Sum of Absolute Latitudes = 942.88 m
Sum of Absolute Departures = 798.05 m

**Step 5: Apply Transit Rule Corrections**

| Course | Latitude (m) | Departure (m) | $\Delta L$ Correction ($\delta_L$) | $\Delta D$ Correction ($\delta_D$) | Corrected Latitude (m) | Corrected Departure (m) |
| :----- | :----------- | :------------ | :------------------------------- | :------------------------------- | :--------------------- | :---------------------- |
| AB     | +191.63      | +161.00       | $-198.36 \times \frac{191.63}{942.88} = -40.31$ | $-172.13 \times \frac{161.00}{798.05} = -34.73$  | $191.63 - 40.31 = 151.32$  | $161.00 - 34.73 = 126.27$   |
| BC     | -257.49      | +154.36       | $-198.36 \times \frac{257.49}{942.88} = -54.30$ | $-172.13 \times \frac{154.36}{798.05} = -33.18$  | $-257.49 - 54.30 = -311.79$ | $154.36 - 33.18 = 121.18$  |
| CD     | -114.77      | -165.00       | $-198.36 \times \frac{114.77}{942.88} = -24.17$  | $-172.13 \times \frac{165.00}{798.05} = -35.57$  | $-114.77 - 24.17 = -138.94$ | $-165.00 - 35.57 = -200.57$ |
| DE     | +317.28      | -147.96       | $-198.36 \times \frac{317.28}{942.88} = -66.84$ | $-172.13 \times \frac{147.96}{798.05} = -31.93$  | $317.28 - 66.84 = 250.44$  | $-147.96 - 31.93 = -179.89$ |
| EA     | +61.71       | +169.73       | $-198.36 \times \frac{61.71}{942.88} = -12.98$  | $-172.13 \times \frac{169.73}{798.05} = -36.45$  | $61.71 - 12.98 = 48.73$   | $169.73 - 36.45 = 133.28$  |
| **Sum**| **+198.36**  | **+172.13**   | **-198.36**                      | **-172.13**                      | **0.00**               | **0.00**                |

**Answer to Question 3 (Conceptual):**

You would prefer to use the **Transit Rule** over Bowditch's Rule when:

*   The traverse was primarily established using **theodolite/transit and tape/EDM**, and it is believed that **angle measurements are significantly more precise than distance measurements**.
*   The traverse involves many short lines where slight errors in angle can lead to larger proportional errors in departure compared to Bowditch's assumption.

**Reasoning:** The Transit Rule assumes that errors in direction (angles) are the dominant source of misclosure and attempts to correct for them by distributing the misclosure proportionally to the actual latitudes and departures of each course. Bowditch's Rule assumes errors are proportional to the length of the line, which is a more general assumption but might not be optimal if angle measurements are superior.

---

### 8. Important Points to Remember

*   **Closed Traverses:** These adjustment methods (Bowditch's and Transit Rule) are specifically for **closed traverses** where the traverse starts and ends at the same point or at points with known coordinates.
*   **Sum of Corrections:** The sum of the corrections applied to latitudes ($\sum \delta_L$) must equal the latitude misclosure ($\Delta L$), and the sum of corrections applied to departures ($\sum \delta_D$) must equal the departure misclosure ($\Delta D$).
*   **Sign Convention:** Pay close attention to the sign conventions for latitudes (North is positive, South is negative) and departures (East is positive, West is negative) when calculating initial values and applying corrections.
*   **Bowditch's Rule:** Suitable when **angle and distance measurements are of equal precision**, or when the nature of errors is unknown. Corrections are proportional to **course length**.
*   **Transit Rule:** Preferred when **angle measurements are more precise than distance measurements**. Corrections are proportional to the **absolute latitude and departure** of each course.
*   **Graphical Method:** Provides a visual understanding and is useful for rough adjustments. Its accuracy is limited by plotting precision.
*   **Purpose of Adjustment:** The goal is to distribute the misclosure in a way that yields the most probable coordinates for the traverse stations, assuming the errors are random.
*   **Tolerances:** Before proceeding with adjustment, the misclosure should be checked against the acceptable misclosure tolerance for the type of survey being performed. If the misclosure is too large, re-measurements may be necessary.
