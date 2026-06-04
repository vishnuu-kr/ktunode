---
title: "Bearing of survey lines"
subject: "SURVEYING & GEOMATICS"
module: "Module 1: Introduction to Surveying :  Principles, Linear, angular and graphical methods"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81076c"
status: "completed"
scrapedAt: "2026-05-20T18:42:11.125Z"
---
# SURVEYING & GEOMATICS

## Module 1: Introduction to Surveying

### Topic: Bearings of Survey Lines

---

### **1. Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   **Understand** the fundamental concept of bearings in surveying.
*   **Differentiate** between the different types of bearings used in surveying.
*   **Explain** the principles and methods for determining and representing bearings.
*   **Apply** the knowledge of bearings to solve basic surveying problems.
*   **Recognize** the importance of bearings in various surveying applications.

---

### **2. Key Concepts and Definitions**

#### **2.1 What is a Bearing?**

*   A **bearing** is the direction of a survey line with respect to a meridian.
*   It defines the angular relationship between a survey line and a reference meridian.
*   Bearings are crucial for representing the orientation of lines on a map or plan and for calculating distances and coordinates.

#### **2.2 Meridians**

*   A **meridian** is a fixed line of reference for measuring bearings.
*   It is essentially a north-south line passing through a specific point.
*   Meridians are fundamental to establishing directions in surveying.

#### **2.3 Types of Meridians**

*   **True Meridian (Geographic Meridian):**
    *   Passes through the geographic North and South Poles.
    *   It is fixed and unchanging.
    *   Determined astronomically.
*   **Assumed Meridian (Arbitrary Meridian):**
    *   An arbitrarily chosen meridian for a specific survey.
    *   Used when the true meridian is not easily determined or not necessary.
    *   Convenient for local surveys.
*   **Magnetic Meridian:**
    *   The direction indicated by a magnetic compass needle.
    *   It points towards the Earth's magnetic North Pole.
    *   Varies due to magnetic declination.
*   **Grid Meridian:**
    *   A line parallel to the central meridian of a specific map projection (e.g., UTM).
    *   Used for large-scale mapping and in grid systems.

#### **2.4 Types of Bearings**

There are two main systems for expressing bearings:

**A. Whole Circle Bearing (WCB) / Azimuth System**

*   **Definition:** In this system, the bearing of a line is measured clockwise from the North meridian (either true or magnetic) to the line.
*   **Range:** The angle can range from 0° to 360°.
*   **Advantages:**
    *   Unambiguous direction.
    *   Simpler for calculations, especially with computers.
*   **Representation:** Always starts with the meridian (North or South) and ends with the angle.
*   **Meridian Reference:** Typically specified as True Azimuth (TA) or Magnetic Azimuth (MA).

*   **Example:**
    *   A line pointing directly North has a WCB of 0°.
    *   A line pointing East has a WCB of 90°.
    *   A line pointing South has a WCB of 180°.
    *   A line pointing West has a WCB of 270°.
    *   A line in the SE quadrant, 30° south of East, would have a WCB of 90° (East) + 30° = 120°.

**B. Quadrant Bearing (QB) / Reduced Bearing (RB) / Magnetic Bearing**

*   **Definition:** In this system, the bearing is expressed by stating the quadrant in which the line lies, followed by the acute angle between the line and the nearest meridian (North or South).
*   **Range:** The acute angle is always between 0° and 90°.
*   **Quadrants:**
    *   **North-East (NE):** Angles measured clockwise from North.
    *   **South-East (SE):** Angles measured clockwise from South.
    *   **South-West (SW):** Angles measured counter-clockwise from South.
    *   **North-West (NW):** Angles measured counter-clockwise from North.
*   **Representation:** Always starts with the quadrant (N or S), followed by the acute angle, and ends with the quadrant (E or W).

*   **Example:**
    *   A line pointing directly North has a QB of N 0° E.
    *   A line pointing East has a QB of N 90° E (or S 90° E).
    *   A line pointing South has a QB of S 0° E (or S 0° W).
    *   A line pointing West has a QB of S 90° W (or N 90° W).
    *   A line in the SE quadrant, 30° south of East, would be referenced from South. If East is 90° from North, this line is 60° from South. So, QB is S 60° E.

#### **2.5 Conversion between WCB and QB**

This is a crucial skill in surveying.

| WCB (Azimuth) | Quadrant | QB (Reduced Bearing) | Explanation                                                                                                                            |
| :------------ | :------- | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| 0° - 90°      | NE       | N [WCB]° E           | QB = WCB                                                                                                                               |
| 90° - 180°    | SE       | S [180° - WCB]° E    | The angle is measured from the South meridian. The angle from South is 180° minus the angle from North.                               |
| 180° - 270°   | SW       | S [WCB - 180°]° W    | The angle is measured from the South meridian. The angle from South is WCB minus 180°. The direction is West.                           |
| 270° - 360°   | NW       | N [360° - WCB]° W    | The angle is measured from the North meridian. The angle from North is 360° minus the WCB. The direction is West.                     |
| 90°           | E        | N 90° E / S 90° E    | Exactly East.                                                                                                                          |
| 180°          | S        | S 0° E / S 0° W      | Exactly South.                                                                                                                         |
| 270°          | W        | S 90° W / N 90° W    | Exactly West.                                                                                                                          |

**Example Conversions:**

*   **WCB = 50°**
    *   Quadrant: NE (0° - 90°)
    *   QB: N 50° E
*   **WCB = 135°**
    *   Quadrant: SE (90° - 180°)
    *   Angle from South = 180° - 135° = 45°
    *   QB: S 45° E
*   **WCB = 210°**
    *   Quadrant: SW (180° - 270°)
    *   Angle from South = 210° - 180° = 30°
    *   QB: S 30° W
*   **WCB = 300°**
    *   Quadrant: NW (270° - 360°)
    *   Angle from North = 360° - 300° = 60°
    *   QB: N 60° W

---

### **3. Principles and Methods of Determining Bearings**

#### **3.1 Magnetic Compass**

*   **Principle:** Utilizes the Earth's magnetic field. A freely suspended magnetic needle aligns itself with the magnetic meridian.
*   **Tools:**
    *   **Prismatic Compass:** Most common type, allows simultaneous sighting of the object and reading of the bearing.
    *   **Sling Compass:** Less common, suspended and swung to allow the needle to settle.
*   **Procedure:**
    1.  **Set up:** Place the compass on a tripod or hold it steadily.
    2.  **Leveling:** Ensure the compass is horizontal.
    3.  **Sight:** Sight the target object through the prism.
    4.  **Read Bearing:** Read the angle indicated by the magnetic needle against the graduated scale.
*   **Limitations:**
    *   Affected by local magnetic attractions (iron objects, mineral deposits).
    *   Requires correction for magnetic declination to obtain true bearings.

#### **3.2 Theodolite and Traversing**

*   **Principle:** Theodolites are used to measure horizontal and vertical angles with high precision.
*   **Procedure for Bearings:**
    1.  **Establish Meridian:**
        *   **By Observation:** Observe a celestial body (Sun or Polaris) to determine the true meridian.
        *   **By Known Bearing:** If a line with a known true or magnetic bearing is present, set it to the correct reading.
    2.  **Set up and Level:** Accurately set up and level the theodolite over a station.
    3.  **Backsight:** Sight a previously established station (backsight) and set the horizontal circle to the known bearing of the line connecting the stations.
    4.  **Foresight:** Sight the next station (foresight) and read the horizontal angle. This angle, combined with the backsight bearing, allows calculation of the foresight bearing.
*   **Traversing:** A process of establishing a network of connected survey lines. Bearings are fundamental to traverse calculations.

#### **3.3 Global Navigation Satellite Systems (GNSS) / GPS**

*   **Principle:** Satellites transmit signals that allow receivers on Earth to calculate their position (latitude, longitude, altitude).
*   **Determining Bearings:**
    *   **Single Point Positioning:** Directly provides coordinates. The direction between two recorded positions can be calculated.
    *   **Differential GPS (DGPS) / Real-Time Kinematic (RTK):** More precise positioning.
    *   **GPS Compasses/Antennas:** Specialized GPS receivers with multiple antennas can directly measure the bearing between the antennas, providing orientation.

#### **3.4 Astronomical Observation**

*   **Principle:** Observing the position of celestial bodies (Sun during the day, stars at night) to determine the direction of the true meridian.
*   **Methods:** Transit of Venus, Solar Zenith Angle, Polaris observations.
*   **Application:** Used for establishing primary control points and for high-accuracy meridian determination.

---

### **4. Graphical Methods of Representing Bearings**

*   **Protractor:** A simple tool to draw angles on paper. Used in conjunction with a north line to graphically represent bearings.
*   **Survey Plans/Maps:** Survey lines are drawn to scale, with their bearings indicated either by lines with arrows showing the direction or by numerical values alongside the lines.
*   **Rose Diagrams:** Circular diagrams used in some contexts to show the distribution of bearings of different survey lines.

---

### **5. Importance of Bearings in Surveying Applications**

*   **Navigation:** Essential for directing movement and plotting courses.
*   **Mapping and Plotting:** Accurately orienting features on maps and plans.
*   **Coordinate Geometry:** Calculating the coordinates of survey points based on known points and bearings.
*   **Area Calculation:** Determining the area enclosed by survey lines.
*   **Establishing Property Boundaries:** Defining the direction and extent of land parcels.
*   **Construction Layout:** Guiding the precise placement of structures.
*   **Geographic Information Systems (GIS):** Representing spatial relationships and directions.

---

### **6. Practice Questions and Exercises**

**Question 1:**
What is the difference between a true meridian and a magnetic meridian?

**Answer 1:**
A **true meridian** is a line passing through the geographic North and South Poles, representing the Earth's axis of rotation. It is fixed and unchanging. A **magnetic meridian** is the direction indicated by a magnetic compass needle, pointing towards the Earth's magnetic North Pole. It varies due to magnetic declination and local attractions.

---

**Question 2:**
Convert the following Whole Circle Bearings (WCB) to Quadrant Bearings (QB):
a) 45°
b) 110°
c) 200°
d) 320°

**Answer 2:**
a) **WCB = 45°**
   Quadrant: NE
   QB: N 45° E

b) **WCB = 110°**
   Quadrant: SE
   Angle from South = 180° - 110° = 70°
   QB: S 70° E

c) **WCB = 200°**
   Quadrant: SW
   Angle from South = 200° - 180° = 20°
   QB: S 20° W

d) **WCB = 320°**
   Quadrant: NW
   Angle from North = 360° - 320° = 40°
   QB: N 40° W

---

**Question 3:**
Convert the following Quadrant Bearings (QB) to Whole Circle Bearings (WCB):
a) N 75° E
b) S 25° W
c) N 15° W
d) S 80° E

**Answer 3:**
a) **QB = N 75° E**
   Quadrant: NE
   WCB = 75°

b) **QB = S 25° W**
   Quadrant: SW
   WCB = 180° + 25° = 205°

c) **QB = N 15° W**
   Quadrant: NW
   WCB = 360° - 15° = 345°

d) **QB = S 80° E**
   Quadrant: SE
   WCB = 180° - 80° = 100°

---

**Question 4:**
A survey line AB has a bearing of N 30° E. If you are at point A and travel along this line for 100 meters, what is the change in your Easting and Northing coordinates, assuming Easting is along the x-axis and Northing is along the y-axis? (Hint: Use trigonometry: $\Delta E = Distance \times \sin(\theta)$ and $\Delta N = Distance \times \cos(\theta)$, where $\theta$ is the angle from the North).

**Answer 4:**
The bearing is N 30° E. This means the angle from the North (y-axis) is 30°.
Distance = 100 meters.

*   **Change in Northing ($\Delta N$):**
    $\Delta N = Distance \times \cos(30°)$
    $\Delta N = 100 \times \frac{\sqrt{3}}{2}$
    $\Delta N \approx 100 \times 0.866 = 86.6$ meters

*   **Change in Easting ($\Delta E$):**
    $\Delta E = Distance \times \sin(30°)$
    $\Delta E = 100 \times \frac{1}{2}$
    $\Delta E = 50$ meters

So, you have moved approximately 86.6 meters North and 50 meters East.

---

### **7. Important Points to Remember**

*   **Meridians are the reference:** Bearings are always measured from a meridian.
*   **WCB is clockwise from North (0° to 360°).**
*   **QB is from North or South, with an angle between 0° and 90° to East or West.**
*   **Accurate conversion between WCB and QB is essential.**
*   **Magnetic compass readings are subject to magnetic declination and local attraction.**
*   **Theodolites provide more accurate angular measurements for determining bearings.**
*   **Bearings are fundamental for all types of surveying and mapping.**

---
