---
title: "Fly levelling"
subject: "SURVEY LAB"
module: "Module 3: Fly levelling"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81088c"
status: "completed"
scrapedAt: "2026-05-20T18:41:55.030Z"
---
# Survey Lab: Module 3 - Fly Levelling

## 1. Introduction to Fly Levelling

### 1.1 What is Fly Levelling?

*   **Definition:** Fly levelling is a method of differential levelling where the instrument is moved multiple times along a traverse or line to determine the difference in elevation between two points.
*   **Purpose:** To establish elevations of points that are relatively far apart or where intermediate points need to be determined. It's a practical technique for surveying longer distances or areas with challenging terrain.
*   **Contrast with Profile Levelling:** Unlike profile levelling which establishes a continuous series of elevations along a specific route (like a road or pipeline), fly levelling focuses on the elevation difference between two specific points, potentially with intermediate setups.

### 1.2 Key Concepts and Definitions

*   **Bench Mark (BM):** A point of known or assumed elevation used as a reference for levelling.
*   **Instrument Station:** The location where the levelling instrument (level) is set up.
*   **Backsight (BS):** A reading taken on a levelling staff held on a point of known or previously established elevation. This is always the first reading taken after setting up the instrument.
*   **Foresight (FS):** A reading taken on a levelling staff held on a point whose elevation is to be determined. This is always the last reading taken before moving the instrument.
*   **Intermediate Sight (IS):** Readings taken on a levelling staff held on points that are not the start or end points of a run, used to establish elevations of intermediate points or to reduce the length of a levelling run.
*   **Height of Instrument (HI):** The elevation of the line of sight of the levelling instrument above the datum.
    *   **Formula:** HI = Elevation of Backsight Point + BS Reading
*   **Elevation of a point:** The vertical distance of the point above or below the datum.
    *   **Formula:** Elevation of Point = HI - FS Reading (or IS Reading)
*   **Reduced Level (RL):** Another term for the elevation of a point.
*   **Datum:** A reference surface from which elevations are measured (e.g., Mean Sea Level).
*   **Leg of a Levelling Run:** The section between two consecutive instrument setups.
*   **Closing Error:** The difference between the calculated elevation of a point (starting from a BM) and the known elevation of that same point (determined by levelling from another BM or the same BM).

### 1.3 Equipment Used

*   **Automatic Level or Digital Level:** The most common instruments for levelling.
*   **Levelling Staff:** A graduated rod (usually 3-5 meters long) used to measure vertical distances.
    *   **Invar Staffs:** Highly accurate, used for precise levelling.
    *   **Wooden or Aluminum Staffs:** Standard for general surveying.
*   **Staves:** Tripods or bipods used to hold the levelling staff vertically and stable.
*   **Plumb Bob:** Used to ensure the staff is held vertically.
*   **Field Notebook:** For recording readings.

## 2. Procedure for Fly Levelling

Fly levelling involves a series of levelling runs, each starting with a backsight and ending with a foresight. The process is repeated as needed to cover the desired distance.

### 2.1 Single Run Levelling (From one BM to another)

This is the fundamental operation of fly levelling.

1.  **Select Instrument Location:** Choose a location that allows for clear line of sight to both the starting BM and the point where the levelling staff will be placed for the first foresight. The instrument should be as central as possible between the backsight and foresight points to minimize collimation errors.
2.  **Set up the Instrument:**
    *   Place the tripod firmly on the ground.
    *   Mount the levelling instrument on the tripod.
    *   Using the leveling screws, make the instrument's line of sight horizontal (bubble centered).
3.  **Take Backsight (BS):**
    *   Hold the levelling staff vertically on the known Bench Mark (BM).
    *   Observe the reading on the staff through the instrument. This is the Backsight (BS) reading.
    *   **Important:** The staff must be perfectly vertical.
4.  **Calculate Height of Instrument (HI):**
    *   **Formula:** HI = Elevation of BM + BS Reading
5.  **Take Foresight (FS):**
    *   Move the levelling staff to the point whose elevation is to be determined (or the next point in the traverse).
    *   Hold the staff vertically.
    *   Observe the reading on the staff through the instrument. This is the Foresight (FS) reading.
6.  **Calculate Elevation of the Foresight Point:**
    *   **Formula:** Elevation of Foresight Point = HI - FS Reading
7.  **Change Point (CP) or Turning Point (TP):** If the distance is too long for a single setup, or if the line of sight is obstructed, a Change Point (CP) or Turning Point (TP) is used.
    *   **Procedure at a TP:**
        *   After taking the FS on the previous point, move the instrument to a new, convenient location.
        *   Hold the staff on the **same point** where the last FS was taken (this point now acts as a temporary BM).
        *   Take a **new Backsight (BS)** on the staff at this TP.
        *   Calculate the new HI.
        *   Move the staff forward to the next point and take a **Foresight (FS)**.
        *   Calculate the elevation of this new point.
        *   Repeat the process.
    *   **Important:** The TP must be a stable point that will not be disturbed between the BS and FS readings taken on it.

### 2.2 Booking and Calculations (Using a Level Book)

A level book is used to record all readings and perform calculations.

**Typical Level Book Columns:**

| Point | BS      | IS      | FS      | HI      | RL      | Remarks |
| :---- | :------ | :------ | :------ | :------ | :------ | :------ |
| BM A  | 1.250   |         |         |         | 100.000 | Start   |
| TP 1  |         | 1.750   | 2.800   |         |         |         |
| TP 2  | 1.600   |         | 1.150   |         |         |         |
| BM B  |         | 0.900   | 2.050   |         |         | End     |

**Calculations:**

*   **Run 1 (BM A to TP 1):**
    *   HI (BM A) = RL (BM A) + BS (BM A) = 100.000 + 1.250 = 101.250
    *   RL (TP 1) = HI (BM A) - FS (TP 1) = 101.250 - 2.800 = 98.450
*   **Run 2 (TP 1 to TP 2):**
    *   HI (TP 1) = RL (TP 1) + BS (TP 1) = 98.450 + 1.600 = 100.050
    *   RL (TP 2) = HI (TP 1) - FS (TP 2) = 100.050 - 2.050 = 98.000
*   **Run 3 (TP 2 to BM B):**
    *   HI (TP 2) = RL (TP 2) + BS (TP 2) = 98.000 + 0.900 = 98.900
    *   RL (BM B) = HI (TP 2) - FS (BM B) = 98.900 - 1.150 = 97.750

**Check:** Sum of BS readings should equal Sum of FS readings if the levelling run is closed on the same benchmark or if the intermediate points are also levelled from another known benchmark.

*   Sum of BS = 1.250 + 1.600 + 0.900 = 3.750
*   Sum of FS = 2.800 + 2.050 + 1.150 = 6.000

**Note:** In this example, the last FS is on BM B. The calculated RL of BM B is 97.750. If BM B has a known RL of 97.800, there would be a closing error.

## 3. Checks and Error Management

### 3.1 Types of Errors in Levelling

*   **Systematic Errors:** Errors that occur in a consistent manner and can be predicted and corrected or compensated for.
    *   **Collimation Error:** The line of sight of the instrument is not perfectly horizontal.
        *   **Compensation:** Ensure BS and FS distances are kept as equal as possible. This can be checked by the "two-peg test."
    *   **Earth Curvature and Refraction:** Affects readings on long sight distances.
        *   **Compensation:** Limit sight distances, or use correction formulas for very long sights.
    *   **Graduation Errors on Staff:** Inaccuracies in the markings on the levelling staff.
        *   **Compensation:** Use calibrated staffs.
*   **Random Errors:** Errors that occur by chance and are equally likely to be positive or negative.
    *   **Examples:** Slight variations in staff holding, minor instability of instrument, atmospheric disturbances.
    *   **Compensation:** Take multiple readings, average them, and perform checks.

### 3.2 Field Checks

*   **Balancing Sight Lengths:** Keep the backsight and foresight distances approximately equal for each setup to cancel out collimation error.
*   **Double Levelling:** Levelling a line in both forward and backward directions. This helps detect significant errors.
*   **Using Known Bench Marks:** Closing the levelling loop on a known benchmark to check the accuracy of the work.
*   **Arithmetic Check (Sum of BS vs. Sum of FS):**
    *   **Formula:** RL (End Point) - RL (Start Point) = Sum of BS - Sum of FS
    *   This is a crucial check to ensure calculations are correct.

### 3.3 Allowable Error

*   The maximum allowable error for a levelling survey is usually specified by standards and depends on the purpose of the survey.
*   **General Formula for Allowable Error:** `E = ± C * √K`
    *   Where:
        *   `E` = Allowable error
        *   `C` = Constant depending on the order of levelling (e.g., 3mm for precise levelling, 12mm for ordinary levelling)
        *   `K` = Distance levelled in kilometers

### 3.4 Adjusting Closing Error

If a closing error is found, it needs to be adjusted. The most common method is distributing the error proportionally to the distances or number of setups.

*   **Proportional Distribution:**
    *   **Total Error:** Calculated RL - Known RL (or RL of BM B - RL of BM A)
    *   **Error per unit distance/setup:** Total Error / Total Distance (or Total Number of Setups)
    *   **Adjusted RL:** Original Calculated RL ± (Error per unit * Distance/setups to that point)

## 4. Applications of Fly Levelling

*   **Establishing elevations for construction sites:** Foundations, roads, utilities.
*   **Topographical surveys:** Creating contour maps.
*   **Setting out engineering structures:** Bridges, buildings, dams.
*   **Monitoring ground subsidence or heave.**
*   **Connecting to existing control networks.**

## 5. Practice Questions/Exercises

**Question 1:**
A fly levelling survey was conducted between two benchmarks, BM P (RL = 50.000 m) and BM Q (RL = 52.500 m). The following readings were taken:

| Point | BS      | IS      | FS      |
| :---- | :------ | :------ | :------ |
| BM P  | 1.550   |         |         |
| TP 1  |         | 1.700   | 2.800   |
| TP 2  | 1.300   |         | 1.950   |
| BM Q  |         | 1.250   | 2.550   |

**Required:**
a) Calculate the Reduced Levels (RLs) of TP 1 and TP 2.
b) Calculate the RL of BM Q based on the readings.
c) Perform an arithmetic check.
d) Calculate the closing error.
e) If the total distance levelled was 800 meters, and the allowable error is 10 mm √K (where K is in km), is the survey acceptable?

**Answer 1:**

a) **RLs of TP 1 and TP 2:**
   *   **Run 1 (BM P to TP 1):**
        *   HI (BM P) = RL (BM P) + BS (BM P) = 50.000 + 1.550 = 51.550 m
        *   RL (TP 1) = HI (BM P) - FS (TP 1) = 51.550 - 2.800 = 48.750 m
   *   **Run 2 (TP 1 to TP 2):**
        *   HI (TP 1) = RL (TP 1) + BS (TP 1) = 48.750 + 1.300 = 50.050 m
        *   RL (TP 2) = HI (TP 1) - FS (TP 2) = 50.050 - 1.950 = 48.100 m
   *   **Run 3 (TP 2 to BM Q):**
        *   HI (TP 2) = RL (TP 2) + BS (TP 2) = 48.100 + 1.250 = 49.350 m
        *   RL (BM Q) = HI (TP 2) - FS (BM Q) = 49.350 - 2.550 = 46.800 m

b) **RL of BM Q (calculated):** 46.800 m

c) **Arithmetic Check:**
   *   Sum of BS = 1.550 + 1.300 + 1.250 = 4.100
   *   Sum of FS = 2.800 + 1.950 + 2.550 = 7.300
   *   RL (BM Q) - RL (BM P) = 46.800 - 50.000 = -3.200 m
   *   Sum of BS - Sum of FS = 4.100 - 7.300 = -3.200 m
   *   **Arithmetic check passed (both values are -3.200 m).**

d) **Closing Error:**
   *   Closing Error = Calculated RL (BM Q) - Known RL (BM Q)
   *   Closing Error = 46.800 m - 52.500 m = -5.700 m
   *   **The closing error is -5.700 meters.** (This is a very large error, indicating a significant problem with the fieldwork or the assumed RL of BM Q).

e) **Acceptability of Survey:**
   *   Distance K = 800 meters = 0.8 km
   *   Allowable Error (E) = ± 10 mm √K = ± 0.010 m * √0.8 ≈ ± 0.00894 m = ± 8.94 mm
   *   The actual closing error is -5700 mm.
   *   **No, the survey is not acceptable.** The closing error (-5700 mm) is much larger than the allowable error (± 8.94 mm). This suggests that the readings were not taken correctly, the instrument was not set up properly, or the points were not stable. The survey would need to be repeated.

**Question 2:**
Explain the importance of balancing sight lengths in fly levelling and how it helps mitigate errors.

**Answer 2:**
Balancing sight lengths means ensuring that the distance from the instrument to the backsight (BS) point and the distance from the instrument to the foresight (FS) point are approximately equal for each setup. This is crucial for minimizing the effect of **collimation error**.

*   **Collimation Error:** This occurs when the instrument's line of sight is not perfectly horizontal.
*   **Impact of Unequal Sights:**
    *   If the FS sight is longer than the BS sight, and there's a collimation error, the calculated HI will be too high (because the FS reading will be artificially low due to the line of sight being slightly above the true horizontal). Consequently, the calculated RL of the foresight point will be too low.
    *   Conversely, if the BS sight is longer than the FS sight, the calculated HI will be too low, and the foresight point's RL will be too high.
*   **How Balancing Helps:** When BS and FS distances are equal, the collimation error affects both readings equally. The error is effectively cancelled out when calculating the HI and the subsequent RLs.
    *   HI = RL(BS) + BS Reading (affected by collimation)
    *   RL(FS) = HI - FS Reading (affected by collimation)
    *   RL(FS) = (RL(BS) + BS Reading) - FS Reading
    *   If BS distance = FS distance, the collimation error on BS is roughly equal in magnitude but opposite in sign to the collimation error on FS, leading to cancellation.

## 6. Important Points to Remember

*   **Staff must be held vertically.**
*   **Instrument must be perfectly leveled.**
*   **Balance sight lengths** to minimize collimation error.
*   **Use stable turning points (TPs).**
*   **Always perform arithmetic checks** (Sum of BS - Sum of FS = Change in RL).
*   **Check fieldwork against known benchmarks** to detect closing errors.
*   **Understand and apply allowable error standards.**
*   **Record all readings clearly and accurately in the level book.**
*   **Fly levelling is iterative:** it's a series of connected levelling runs.

This comprehensive set of notes covers the fundamental aspects of fly levelling, from the basic principles and procedures to error management and practical application. Remember to practice the calculations and fieldwork to gain proficiency.
