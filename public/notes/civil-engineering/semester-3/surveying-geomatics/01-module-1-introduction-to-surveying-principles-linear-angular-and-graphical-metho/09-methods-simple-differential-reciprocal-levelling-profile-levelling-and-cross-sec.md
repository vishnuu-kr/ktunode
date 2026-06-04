---
title: "Methods- simple, differential, reciprocal levelling, profile levelling and cross sectioning."
subject: "SURVEYING & GEOMATICS"
module: "Module 1: Introduction to Surveying :  Principles, Linear, angular and graphical methods"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810771"
status: "completed"
scrapedAt: "2026-05-20T18:42:14.615Z"
---
# SURVEYING & GEOMATICS - Module 1: Introduction to Surveying

## Topic: Methods of Levelling: Simple, Differential, Reciprocal, Profile, and Cross-Sectioning

---

### 1. Introduction to Levelling

Levelling is the process of determining the vertical distance between two points, or the relative elevation of points on the Earth's surface. It is a fundamental operation in surveying, essential for:

*   **Construction:** Designing and building roads, bridges, buildings, dams, etc.
*   **Topographic Mapping:** Creating maps showing the elevation of land features.
*   **Drainage Design:** Planning for water flow and sewage systems.
*   **Earthwork Calculations:** Estimating the volume of soil to be moved.

**Key Concept:** The fundamental principle of levelling is to establish a **horizontal line of sight** and measure vertical distances from this line to the points whose elevations are to be determined.

---

### 2. Levelling Instruments

While this topic focuses on methods, it's important to acknowledge the instruments used:

*   **Level:** The primary instrument that provides a horizontal line of sight. Common types include:
    *   **Dumpy Level:** A simple and robust instrument.
    *   **Tilting Level:** Allows for minor adjustments of the telescope.
    *   **Automatic/Compensating Level:** Contains a prism system that automatically keeps the line of sight horizontal.
*   **Levelling Staff:** A graduated rod placed vertically on the ground to be read by the instrument operator.
    *   **Invar Staff:** Made of a metal alloy with very low thermal expansion, used for precise levelling.
    *   **Wooden/Aluminium Staff:** Standard for general levelling.

---

### 3. Methods of Levelling

This section will detail the various methods used for levelling.

---

#### 3.1 Simple Levelling

**Definition:** Simple levelling is the process of determining the difference in elevation between two points that are close enough to be observed with a single setting of the level and staff. This method is suitable for short distances where the curvature of the Earth and atmospheric refraction can be neglected.

**Procedure:**

1.  **Setup:** Place the level at a single convenient location.
2.  **Target Setup:** Place the levelling staff vertically on the starting point (Point A).
3.  **Backsight (BS):** Read the staff held at Point A. This reading, taken on a point of known or assumed elevation, is called the backsight. It is always the first reading taken after setting up the level.
4.  **Target Setup:** Move the levelling staff to the ending point (Point B).
5.  **Foresight (FS):** Read the staff held at Point B. This reading, taken on a point to which the elevation is to be determined, is called the foresight. It is the last reading taken before moving the level.
6.  **Calculation:**
    *   Elevation of Point B = Elevation of Point A + BS - FS

**Example:**

*   Elevation of Point A = 100.00 m
*   Backsight (BS) reading on staff at A = 1.500 m
*   Foresight (FS) reading on staff at B = 2.100 m

*   Elevation of Point B = 100.00 m + 1.500 m - 2.100 m = **99.400 m**

**When to Use:**

*   Short distances between two points.
*   When only the difference in elevation is required.
*   Initial setup for other levelling methods.

**Important Point:** The backsight is always taken on a point whose elevation is known or assumed, and the foresight is taken on a point whose elevation is to be determined.

---

#### 3.2 Differential Levelling (or Two-Peg Test)

**Definition:** Differential levelling is used to determine the difference in elevation between two points that are too far apart to be sighted with a single instrument setup. It involves setting up the level at multiple intermediate points.

**Procedure:**

1.  **Setup 1:** Place the level between Point A and Point B.
2.  **BS on A:** Read the staff on Point A (Backsight 1).
3.  **FS on Intermediate Point (IP1):** Read the staff on an intermediate point (IP1) between the level and Point B (Foresight 1).
4.  **Move Level:** Shift the level to a new location between IP1 and Point B.
5.  **BS on IP1:** Read the staff on IP1 (Backsight 2). This point now acts as a known point for the new setup.
6.  **FS on B:** Read the staff on Point B (Foresight 2).
7.  **Repetition:** Continue this process, setting up the level at intermediate points as needed, until Point B is reached.

**Calculation:**

The difference in elevation between two points is the sum of all backsights minus the sum of all foresights.

*   **Total Difference in Elevation = ΣBS - ΣFS**
*   Elevation of Point B = Elevation of Point A + (ΣBS - ΣFS)

**Example:**

| Setup | BS (m) | FS (m) | Remarks          |
| :---- | :----- | :----- | :--------------- |
| 1     | 1.650  | 2.200  | BS on A, FS on IP1 |
| 2     | 1.400  | 2.050  | BS on IP1, FS on B |

*   Elevation of A = 100.00 m
*   ΣBS = 1.650 m + 1.400 m = 3.050 m
*   ΣFS = 2.200 m + 2.050 m = 4.250 m
*   Difference in Elevation = 3.050 m - 4.250 m = -1.200 m
*   Elevation of B = 100.00 m + (-1.200 m) = **98.800 m**

**When to Use:**

*   Long distances between points.
*   Crossing obstacles (rivers, valleys, buildings).
*   Establishing the elevation of a distant point.

**Important Points:**

*   The sum of all backsights represents the total "up" movement from the starting point.
*   The sum of all foresights represents the total "down" movement from the starting point.
*   A change point (CP) is a point where the staff is held, and readings are taken for both a foresight (from the previous setup) and a backsight (for the next setup).

---

#### 3.3 Reciprocal Levelling

**Definition:** Reciprocal levelling is a special technique used to minimize errors due to collimation (the line of sight of the telescope) not being perfectly horizontal, and atmospheric refraction, especially when levelling across bodies of water or valleys where intermediate setups are impossible. It involves taking readings to the staff at both points from two different instrument stations.

**Procedure:**

1.  **Setup 1 (Instrument between A and B):**
    *   Place the level at Station 1, roughly equidistant from Point A and Point B.
    *   Take a backsight on staff at A (BS1).
    *   Take a foresight on staff at B (FS1).
2.  **Setup 2 (Instrument between B and A):**
    *   Move the level to Station 2, roughly equidistant from Point B and Point A (on the opposite side of the first setup).
    *   Take a backsight on staff at B (BS2).
    *   Take a foresight on staff at A (FS2).

**Calculation:**

Let:
*   $h_1$ = True difference in elevation of B from A as observed from Station 1 = BS1 - FS1
*   $h_2$ = True difference in elevation of A from B as observed from Station 2 = BS2 - FS2
*   $e_1$ = Collimation error at Station 1 (positive if line of sight is above true horizontal)
*   $e_2$ = Collimation error at Station 2

The observed difference from Station 1: BS1 - FS1 = $h + e_1 - e_2$
The observed difference from Station 2: BS2 - FS2 = $h + e_2 - e_1$ (note the reversal of errors due to reversing positions)

The average of these two observations eliminates the collimation error:

*   **Average observed difference = $\frac{(BS1 - FS1) + (BS2 - FS2)}{2}$**

This average value is taken as the true difference in elevation between A and B.

*   **True difference in elevation (B from A) = $\frac{(BS1 - FS1) + (BS2 - FS2)}{2}$**

**Example:**

| Station | BS (m) | FS (m) | Observed Difference (BS-FS) (m) |
| :------ | :----- | :----- | :------------------------------ |
| 1       | 1.750  | 2.500  | -0.750                          |
| 2       | 1.900  | 2.100  | -0.200                          |

*   Elevation of A = 100.00 m
*   Average observed difference = $\frac{(-0.750) + (-0.200)}{2} = \frac{-0.950}{2} = -0.475$ m
*   Elevation of B = 100.00 m + (-0.475 m) = **99.525 m**

**When to Use:**

*   Levelling across rivers, lakes, or deep valleys.
*   When intermediate setups are not possible or practical.
*   To reduce errors caused by collimation error and refraction.

**Important Point:** The key to reciprocal levelling is averaging the results from two reciprocal observations to cancel out systematic errors.

---

#### 3.4 Profile Levelling

**Definition:** Profile levelling is a method used to determine the elevations of a series of points along a continuous line, typically for the design of linear structures like roads, railways, pipelines, or canals. This establishes a **longitudinal profile** of the ground.

**Procedure:**

1.  **Start Point (A):** Set up the level. Take a backsight on a benchmark (BM) or a starting point of known elevation.
2.  **Ground Points:** Move the staff along the line of survey at regular intervals (e.g., every 20m, 30m) and take foresight readings on each point. These are called **station points** or **chainage points**.
3.  **Intermediate Points (IPs):** If the ground changes significantly between the regular intervals, take additional staff readings on these points of change.
4.  **Change Points (CPs):** When the instrument is too far to read the staff accurately, move the level to a new position. Hold the staff on the last point sighted (now a change point) and take a backsight reading.
5.  **Continue:** Continue this process, taking foresights on ground points and change points, and backsights on previous change points, until the end of the survey line.

**Data Recording:**

Profile levelling data is recorded in a levelling book with specific columns:

| Station | BS (m) | IS (m) | FS (m) | Height of Instrument (HI) (m) | Reduced Level (RL) (m) | Remarks      |
| :------ | :----- | :----- | :----- | :---------------------------- | :--------------------- | :----------- |
| BM      | 1.500  |        |        |                               | 100.000                | Starting BM  |
| 0+000   |        | 2.000  |        |                               |                        |              |
| 0+020   |        | 2.500  |        |                               |                        |              |
| IP1     |        | 3.200  |        |                               |                        | Point of rise|
| 0+040   |        |        | 2.800  |                               |                        | CP1          |
| CP1     | 1.800  |        |        |                               |                        |              |
| 0+060   |        | 2.100  |        |                               |                        |              |
| ...     | ...    | ...    | ...    |                               |                        |              |

**Calculations:**

*   **Height of Instrument (HI) = RL of previous point + BS**
*   **RL of current point = HI - Staff Reading (IS or FS)**

**Example Calculation (using the table above):**

*   **HI at first setup:** RL of BM + BS on BM = 100.000 m + 1.500 m = 101.500 m
*   **RL of 0+000:** HI - IS on 0+000 = 101.500 m - 2.000 m = 99.500 m
*   **RL of 0+020:** HI - IS on 0+020 = 101.500 m - 2.500 m = 99.000 m
*   **RL of IP1:** HI - IS on IP1 = 101.500 m - 3.200 m = 98.300 m
*   **RL of CP1 (foresight):** HI - FS on CP1 = 101.500 m - 2.800 m = 98.700 m

*   **HI at second setup:** RL of CP1 + BS on CP1 = 98.700 m + 1.800 m = 100.500 m
*   **RL of 0+060:** HI - IS on 0+060 = 100.500 m - 2.100 m = 98.400 m

**When to Use:**

*   Designing linear infrastructure projects (roads, pipelines, canals).
*   Creating longitudinal profiles for earthwork calculations.
*   Determining the ground elevation along a specific route.

**Important Point:** In profile levelling, all readings taken on points along the line are intermediate sights (IS) except for the first backsight and the last foresight. Readings taken at change points are recorded as a foresight in one setup and a backsight in the next.

---

#### 3.5 Cross-Sectioning

**Definition:** Cross-sectioning is the process of taking levelling measurements at right angles to the line of survey. This establishes the ground profile across the width of the proposed structure or area, providing data for calculating earthwork volumes, particularly for road construction.

**Procedure:**

1.  **Longitudinal Profile:** First, a profile levelling is carried out along the centreline of the survey.
2.  **Cross-Section Points:** At specific intervals along the centreline (e.g., at every chainage point like 0+020, 0+040, etc.), readings are taken at right angles to the centreline at regular intervals.
3.  **Offsets:** These readings are taken on either side of the centreline. The distance from the centreline to the point where the staff is held is called the **offset**.
4.  **Instrument Setup:** The level is set up at a convenient location to see the staff held on the cross-section points.
5.  **Readings:** Backsights are taken on the centreline or a benchmark, and foresights (or intermediate sights) are taken on the cross-section points.

**Data Recording:**

Cross-section data is typically recorded with respect to the chainage and offset from the centreline.

| Chainage | Offset (m) | Staff Reading (m) | RL (m) | Remarks      |
| :------- | :--------- | :---------------- | :----- | :----------- |
| 0+000    | -5.0       | 2.800             | 99.200 | Left of CL   |
| 0+000    | -2.5       | 2.500             | 99.500 | Left of CL   |
| 0+000    | 0.0        | 2.000             | 99.800 | Centreline   |
| 0+000    | +2.5       | 2.200             | 99.600 | Right of CL  |
| 0+000    | +5.0       | 2.400             | 99.400 | Right of CL  |
| 0+020    | -5.0       | 3.000             | 98.500 | Left of CL   |
| ...      | ...        | ...               | ...    | ...          |

*(Note: The RLs above are assumed for demonstration, calculated using a hypothetical HI and the centreline reading from the profile levelling example.)*

**When to Use:**

*   Calculating earthwork volumes for roads, canals, embankments, and cuttings.
*   Determining the cross-sectional shape of the ground.
*   Designing the cross-fall and superelevation of roads.

**Important Point:** Cross-sections are usually taken perpendicular to the centreline, and the data is essential for volumetric calculations. The interval at which cross-sections are taken depends on the terrain and the required accuracy.

---

### 4. Practice Questions and Exercises

**Question 1:**
A level was set up between two points A and B. The backsight reading on staff held at A was 1.250 m, and the foresight reading on staff held at B was 1.850 m. If the reduced level of A is 50.00 m, what is the reduced level of B?

**Answer 1:**
RL of B = RL of A + BS - FS
RL of B = 50.00 m + 1.250 m - 1.850 m = **49.400 m**

**Question 2:**
You are performing differential levelling. The readings taken are as follows:
Setup 1: BS = 1.400 m, FS = 2.200 m
Setup 2: BS = 1.600 m, FS = 1.100 m
Setup 3: BS = 1.000 m, FS = 1.900 m
If the RL of the starting point is 120.00 m, calculate the RL of the final point.

**Answer 2:**
ΣBS = 1.400 m + 1.600 m + 1.000 m = 4.000 m
ΣFS = 2.200 m + 1.100 m + 1.900 m = 5.200 m
Difference in Elevation = ΣBS - ΣFS = 4.000 m - 5.200 m = -1.200 m
RL of Final Point = RL of Starting Point + Difference in Elevation
RL of Final Point = 120.00 m + (-1.200 m) = **118.800 m**

**Question 3:**
In reciprocal levelling, the following readings were taken:
Station 1: BS = 1.500 m, FS = 2.000 m
Station 2: BS = 1.800 m, FS = 2.300 m
If the RL of Point X is 200.00 m, calculate the RL of Point Y.

**Answer 3:**
Observed difference from Station 1 = BS1 - FS1 = 1.500 m - 2.000 m = -0.500 m
Observed difference from Station 2 = BS2 - FS2 = 1.800 m - 2.300 m = -0.500 m
Average observed difference = $\frac{(-0.500) + (-0.500)}{2} = -0.500$ m
RL of Y = RL of X + Average observed difference
RL of Y = 200.00 m + (-0.500 m) = **199.500 m**

**Question 4:**
Explain the purpose of profile levelling and describe the role of change points in this method.

**Answer 4:**
Profile levelling is used to determine the elevations of points along a continuous line to establish a longitudinal profile, essential for designing linear structures like roads and pipelines. Change points (CPs) are critical as they are the locations where the levelling staff is held, and readings are taken for both a foresight (from the previous instrument station) and a backsight (for the next instrument station). This allows the levelling process to continue over long distances by enabling the instrument to be moved while maintaining a continuous record of elevations.

---

### 5. Important Points to Remember

*   **Horizontal Line of Sight:** All levelling methods rely on establishing a horizontal line of sight.
*   **Backsight (BS):** Reading on a point of known or assumed elevation. Always the first reading after setting up the instrument.
*   **Foresight (FS):** Reading on a point of unknown elevation. Usually the last reading before moving the instrument.
*   **Intermediate Sight (IS):** Readings taken on points between the instrument and the foresight.
*   **Reduced Level (RL):** The actual elevation of a point above a datum.
*   **Height of Instrument (HI):** The elevation of the horizontal line of sight from the instrument.
*   **Check:** In differential levelling, the difference between the sum of BS and sum of FS should equal the difference between the RL of the last point and the RL of the first point. (ΣBS - ΣFS = RL of Last Point - RL of First Point).
*   **Curvature and Refraction:** These effects are usually neglected in simple levelling but become significant in differential levelling over long distances and are addressed by reciprocal levelling.
*   **Profile Levelling:** Establishes elevations along a line (longitudinal).
*   **Cross-Sectioning:** Establishes elevations across a line (transverse).

---
