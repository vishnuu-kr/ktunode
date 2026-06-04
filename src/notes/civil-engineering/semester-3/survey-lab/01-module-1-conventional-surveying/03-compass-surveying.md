---
title: "Compass surveying"
subject: "SURVEY LAB"
module: "Module 1: Conventional surveying"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810887"
status: "completed"
scrapedAt: "2026-05-20T18:41:52.918Z"
---
# SURVEY LAB: Module 1: Conventional Surveying

## Topic: Compass Surveying

---

### **1. Introduction to Compass Surveying**

Compass surveying is a method of surveying that uses a magnetic compass to determine the direction of survey lines relative to the Earth's magnetic meridian. It is primarily used for establishing the directions of lines and making reconnaissance surveys of relatively small areas where high accuracy is not paramount.

**Key Concepts:**

*   **Magnetic Meridian:** The direction defined by the Earth's magnetic field lines. It varies from true north and is influenced by magnetic declination.
*   **True Meridian (Geographic Meridian):** The direction of the Earth's axis of rotation, passing through the North and South geographic poles.
*   **Magnetic Declination:** The angle between the magnetic meridian and the true meridian at a given point on the Earth's surface. It can be easterly or westerly.
*   **Bearing:** The acute angle between a reference meridian (either true or magnetic) and a survey line. It is expressed as an angle between 0° and 90° relative to the North or South direction.
*   **Azimuth:** The angle measured clockwise from a reference meridian (usually true north) to a survey line, ranging from 0° to 360°.

---

### **2. Learning Outcomes Covered:**

#### **2.1. Understand the principles of compass surveying and its applications.**

**Principles:**

*   **Directional Measurement:** The primary function is to measure the direction of a line from a known point.
*   **Magnetic Reference:** Relies on the Earth's magnetic field for orientation.
*   **Traversing:** Used to establish a series of connected survey lines forming a closed or open traverse.
*   **Triangulation (Limited):** Can be used for initial reconnaissance to establish control points.

**Applications:**

*   **Reconnaissance Surveys:** For preliminary mapping of areas before more precise methods are employed.
*   **Small-Scale Mapping:** Where high accuracy is not critical, such as mapping property boundaries in rural areas or topographical surveys of minor features.
*   **Establishing Control Points:** As a preliminary step in larger surveying projects.
*   **Field Operations:** Quick and portable for initial assessments.

#### **2.2. Define and differentiate between True North, Magnetic North, and Grid North.**

*   **True North (Geographic North):**
    *   **Definition:** The direction towards the geographic North Pole.
    *   **Reference:** Based on the Earth's axis of rotation.
    *   **Importance:** Provides a fixed and constant reference for all locations.

*   **Magnetic North:**
    *   **Definition:** The direction indicated by the north-seeking pole of a compass needle.
    *   **Reference:** Based on the Earth's magnetic field.
    *   **Importance:** Easy to establish with a compass but is not constant and varies over time and location.

*   **Grid North:**
    *   **Definition:** The direction of the y-axis (north-south line) on a specific map projection grid system (e.g., UTM).
    *   **Reference:** Based on a defined projection grid.
    *   **Importance:** Used for directional referencing within a specific map coordinate system, minimizing distortion over localized areas.

**Divergence:**

*   **True North vs. Magnetic North:** The difference is **Magnetic Declination**.
*   **True North vs. Grid North:** The difference is **Convergence of Meridians**.

#### **2.3. Explain the concept of magnetic declination and its variations (secular, annual, diurnal, irregular).**

**Magnetic Declination (D):**

*   **Definition:** The angle between the true meridian and the magnetic meridian at a given point.
*   **Expression:**
    *   **Easterly Declination (E):** If magnetic north is east of true north.
    *   **Westerly Declination (W):** If magnetic north is west of true north.
*   **Importance:** Essential for converting magnetic bearings/azimuths to true bearings/azimuths and vice-versa.

**Variations in Magnetic Declination:**

*   **Secular Variation:**
    *   **Cause:** Slow, long-term changes in the Earth's magnetic field due to processes in the Earth's core.
    *   **Effect:** The magnetic pole itself moves over decades and centuries, causing declination to change gradually at any given location.
    *   **Example:** A location that had an easterly declination 50 years ago might have a smaller easterly or even a westerly declination today.

*   **Annual Variation:**
    *   **Cause:** Subtle annual changes in the Earth's magnetic field.
    *   **Effect:** A very small, predictable change in declination over a year.
    *   **Note:** Often considered negligible for most practical surveying purposes unless extreme precision is required.

*   **Diurnal Variation:**
    *   **Cause:** Daily changes in the Earth's magnetic field caused by the Sun's radiation interacting with the ionosphere.
    *   **Effect:** The declination changes slightly throughout the day, with maximum values typically occurring around midday.
    *   **Example:** Declination might be 5°00' E at 8 AM, 5°10' E at 1 PM, and 5°05' E at 7 PM.

*   **Irregular Variation:**
    *   **Cause:** Solar storms, geomagnetic storms, and other sudden disturbances in the Earth's magnetic field.
    *   **Effect:** Can cause significant and unpredictable fluctuations in the magnetic field, leading to unreliable compass readings.
    *   **Note:** These are generally avoided by not surveying during periods of high solar activity.

#### **2.4. Perform calculations involving magnetic declination to convert between magnetic and true bearings/azimuths.**

**Rules for Conversion:**

Let $D$ be the magnetic declination.

*   **If Declination is Easterly (E):**
    *   **Magnetic Bearing $\rightarrow$ True Bearing:**
        *   If Magnetic Bearing < $D$: True Bearing = Magnetic Bearing + $D$ (South-East to East)
        *   If Magnetic Bearing > $D$: True Bearing = Magnetic Bearing - $D$ (East to South-East)
        *   (Similar logic for other quadrants)
    *   **Magnetic Azimuth $\rightarrow$ True Azimuth:** True Azimuth = Magnetic Azimuth + $D$
    *   **True Bearing $\rightarrow$ Magnetic Bearing:**
        *   If True Bearing < $D$: Magnetic Bearing = True Bearing + $D$
        *   If True Bearing > $D$: Magnetic Bearing = True Bearing - $D$
    *   **True Azimuth $\rightarrow$ Magnetic Azimuth:** Magnetic Azimuth = True Azimuth - $D$

*   **If Declination is Westerly (W):**
    *   **Magnetic Bearing $\rightarrow$ True Bearing:**
        *   If Magnetic Bearing < $D$: True Bearing = Magnetic Bearing - $D$ (South-West to West)
        *   If Magnetic Bearing > $D$: True Bearing = Magnetic Bearing + $D$ (West to South-West)
        *   (Similar logic for other quadrants)
    *   **Magnetic Azimuth $\rightarrow$ True Azimuth:** True Azimuth = Magnetic Azimuth - $D$
    *   **True Bearing $\rightarrow$ Magnetic Bearing:**
        *   If True Bearing < $D$: Magnetic Bearing = True Bearing - $D$
        *   If True Bearing > $D$: Magnetic Bearing = True Bearing + $D$
    *   **True Azimuth $\rightarrow$ Magnetic Azimuth:** Magnetic Azimuth = True Azimuth + $D$

**Key Principle:** When converting azimuths, simply add or subtract the declination. For bearings, careful consideration of the quadrant is needed.

**Example (Azimuths):**

*   **Given:** Magnetic Azimuth = 120° 30' E, Magnetic Declination = 5°00' E.
*   **Calculate True Azimuth:** True Azimuth = Magnetic Azimuth + Declination
    *   True Azimuth = 120° 30' + 5°00' = 125° 30'

*   **Given:** Magnetic Azimuth = 45°00' W, Magnetic Declination = 10°00' W.
*   **Calculate True Azimuth:** True Azimuth = Magnetic Azimuth - Declination
    *   True Azimuth = 45°00' - 10°00' = 35°00'

**Example (Bearings):**

*   **Given:** Magnetic Bearing = S 30° 00' E, Magnetic Declination = 5°00' E.
*   **Convert to True Bearing:**
    *   Magnetic North is 5°00' East of True North.
    *   The line is 30°00' East of South.
    *   True Bearing = S (30°00' - 5°00') E = S 25°00' E

*   **Given:** Magnetic Bearing = N 60° 00' W, Magnetic Declination = 10°00' W.
*   **Convert to True Bearing:**
    *   Magnetic North is 10°00' West of True North.
    *   The line is 60°00' West of North.
    *   True Bearing = N (60°00' - 10°00') W = N 50°00' W

#### **2.5. Identify different types of compasses used in surveying (Prismatic Compass, Surveyor's Compass).**

**Types of Compasses:**

*   **Prismatic Compass:**
    *   **Description:** A portable compass that integrates a prism for simultaneous sighting of the object and reading of the bearing. The compass card is suspended below the prism.
    *   **Features:**
        *   **Prism:** Mounted in a movable sight vane, allowing the observer to see the object and the compass card at the same time.
        *   **Compass Card (Disk):** Marked with directions (N, S, E, W) and degree markings. It is usually a "lunar" or "floating" card, meaning it is balanced on a pivot and rotates freely.
        *   **Sight Vanes:** A front vane with a hair or slot and a rear vane with a horsehair or slit for sighting.
        *   **Levelling Bubble:** To ensure the compass is held horizontally.
        *   **Locking Mechanism:** To stop the compass card from oscillating when taking a reading.
    *   **Advantages:** Allows for direct reading of the bearing while sighting the object, making it faster and more convenient for field use, especially for bearings and for traversing.
    *   **Disadvantages:** Less accurate than a surveyor's compass for precise direction setting due to the floating card.

*   **Surveyor's Compass (or Brunton Compass):**
    *   **Description:** A more robust and accurate compass, often incorporating a clinometer to measure vertical angles. It typically has a needle that swings over a fixed graduated circle.
    *   **Features:**
        *   **Needle:** A magnetic needle that moves over a fixed graduated circle marked with degrees.
        *   **Graduated Circle:** Fixed to the base of the compass, with markings for directions and angles.
        *   **Sight Vanes:** Similar to the prismatic compass for aiming.
        *   **Clamps and Micrometer Screw:** For fine adjustments and locking the needle.
        *   **Clinometer (often included):** A device to measure the slope or inclination of terrain.
    *   **Advantages:** Generally more accurate for precise angle measurements. The fixed circle allows for more stable readings. The inclusion of a clinometer adds functionality.
    *   **Disadvantages:** Reading the bearing requires looking at the needle and the graduated circle separately, making it slightly slower than a prismatic compass.

#### **2.6. Describe the process of taking readings with a prismatic compass (line sighting, levelling, focusing, reading).**

**Process of Taking Readings with a Prismatic Compass:**

1.  **Line Sighting:**
    *   Hold the compass horizontally in front of the eye.
    *   Raise the front sight vane (with the prism) and the rear sight vane.
    *   Look through the prism in the front sight vane.
    *   Rotate the compass body until the hair in the rear sight vane is visible in the prism.
    *   Simultaneously, the reflected image of the compass card's markings will also be visible in the prism.
    *   Adjust the position of the compass so that the desired object is aligned with the hair in the rear sight vane.

2.  **Levelling:**
    *   Hold the compass as level as possible.
    *   Observe the levelling bubble.
    *   If the bubble is not centered, gently tilt the compass in the appropriate direction until the bubble is in the center. Ensure the sighting line is maintained on the object.

3.  **Focusing (of the Compass Card):**
    *   The prism can usually be moved up and down to focus on the compass card.
    *   Adjust the prism's position until the degree markings on the compass card are sharp and clear.

4.  **Reading the Bearing:**
    *   Once the compass is leveled and the object is sighted, the bearing of the line can be read from the compass card through the prism.
    *   The bearing is the mark on the compass card that aligns with the index line or the hair of the rear sight vane.
    *   **Important:** The compass card is usually marked such that the reading directly under the index line is the bearing. Note that due to the prism, the reading will appear inverted but correctly oriented.

**Steps Summarized:**

1.  Hold the compass horizontally.
2.  Sight the object using the rear vane and the prism.
3.  Level the compass using the bubble.
4.  Focus the prism on the compass card.
5.  Read the bearing indicated by the index line on the compass card.
6.  Record the reading (e.g., N 45° E or an azimuth value).
7.  Repeat for the back bearing (opposite direction).

#### **2.7. Explain the concept and importance of back bearings.**

**Back Bearing:**

*   **Definition:** The bearing of a line taken from the end point of the line back to its starting point.
*   **Relationship:** For a straight line, the back bearing is 180° different from the forward bearing, assuming no magnetic declination change along the line.
*   **Calculation (Azimuths):**
    *   If Forward Azimuth $\leq$ 180°, Back Azimuth = Forward Azimuth + 180°.
    *   If Forward Azimuth > 180°, Back Azimuth = Forward Azimuth - 180°.

*   **Calculation (Bearings):**
    *   Change the cardinal direction (N to S, S to N, E to W, W to E) and add or subtract 180°.
    *   Example: Forward Bearing N 30° E. Back Bearing = S 30° W (Change N to S, E to W, and add 180° which is implicit in the direction change).
    *   Example: Forward Bearing S 45° W. Back Bearing = N 45° E.

**Importance of Back Bearings:**

*   **Checking Accuracy:** Taking a back bearing is a crucial check on the forward bearing measurement. If the magnetic declination is constant along the line, the back bearing should differ from the forward bearing by exactly 180°. Any significant difference indicates an error in sighting or reading.
*   **Traversing:** In traversing, taking back bearings from each station helps to ensure the accuracy of the measured directions and to detect potential errors early in the survey.
*   **Internal Consistency:** It helps to verify the internal consistency of the directional measurements within a traverse.

#### **2.8. Discuss the sources of error in compass surveying and methods to minimize them.**

**Sources of Error:**

*   **Instrumental Errors:**
    *   **Improper Levelling:** If the compass is not held level, the readings will be distorted.
    *   **Faulty Pivot:** A damaged or sticky pivot can cause the needle to stick or not swing freely.
    *   **Magnetization of the Needle:** Over time, the needle's magnetism can weaken or become irregular.
    *   **Non-verticality of the Prismatic Axis:** If the prism is not mounted vertically, it can affect the reading.
    *   **Improper Calibration:** The compass card might not be perfectly balanced or the zero mark might be misaligned.

*   **Observational Errors:**
    *   **Incorrect Sighting:** Failure to accurately align the sighting vanes with the target.
    *   **Reading Errors:** Misreading the compass card, especially in poor light or if the markings are worn.
    *   **Parallax Error:** In some compass designs, if the eye is not positioned correctly relative to the sight and the scale.
    *   **Timing of Readings:** Taking readings during periods of diurnal or irregular magnetic variation.

*   **Site-Specific Errors (Environmental):**
    *   **Magnetic Interference:** Proximity to metallic objects (fences, iron structures, vehicles), electrical currents, or magnetic minerals in the ground can deflect the compass needle, causing incorrect readings.
    *   **Wind:** Strong winds can make it difficult to hold the compass steady and level.
    *   **Poor Visibility:** Fog, rain, or darkness can hinder accurate sighting of targets.

**Methods to Minimize Errors:**

*   **Instrumental Errors:**
    *   **Regular Calibration:** Ensure the compass is calibrated and checked for functionality.
    *   **Handle with Care:** Protect the compass from shocks and drops.
    *   **Clean the Pivot:** Keep the pivot point clean.
    *   **Use a Tripod (if applicable):** For greater stability, especially with surveyor's compasses.

*   **Observational Errors:**
    *   **Thorough Levelling:** Always ensure the compass is perfectly level before taking a reading.
    *   **Accurate Sighting:** Practice accurate sighting by aligning the hair in the rear vane precisely.
    *   **Double Checking Readings:** Read the bearing multiple times.
    *   **Taking Back Bearings:** Always verify forward bearings with back bearings. Significant discrepancies indicate an error.
    *   **Take Readings During Stable Magnetic Conditions:** Avoid surveying during periods of known magnetic storms.
    *   **Proper Lighting:** Ensure adequate light for reading the compass card.
    *   **Use of Tripod:** For stable sighting and levelling.

*   **Site-Specific Errors:**
    *   **Maintain Distance from Magnetic Objects:** Set up the compass a sufficient distance away from any potential sources of magnetic interference.
    *   **Shielding:** In areas with known magnetic anomalies, consider using a non-magnetic sighting pole.
    *   **Survey in Calm Conditions:** Avoid surveying during windy conditions if possible.
    *   **Clear Target Identification:** Ensure the target is clearly visible and identifiable.

---

### **3. Instruments Used in Compass Surveying**

*   **Prismatic Compass:** (Described in 2.5)
*   **Surveyor's Compass:** (Described in 2.5)
*   **Tripod:** Used to support the compass for stability and precise levelling.
*   **Ranging Rods:** Used to mark points and aid in sighting.
*   **Arrows:** Used to mark points on the ground.
*   **Plumb Bob:** To ensure the compass is vertically aligned over a station point.
*   **Field Book:** For recording readings, measurements, and sketches.

---

### **4. Procedures in Compass Surveying**

**4.1. Traversing with a Prismatic Compass**

Compass traversing involves establishing a series of connected survey lines. The process typically includes:

1.  **Establishing Stations:** Mark points on the ground where the compass will be set up (e.g., A, B, C, D).
2.  **Setting Up the Compass:**
    *   Place the compass on a tripod or hold it steadily over the station point.
    *   Use a plumb bob to ensure the compass is directly above the station.
    *   Level the compass using the bubble.
3.  **Taking Forward Bearings:**
    *   Sight the next station (e.g., B from A).
    *   Levelling and focusing as described previously.
    *   Read the bearing and record it in the field book, along with the station.
4.  **Taking Back Bearings:**
    *   Turn the compass around.
    *   Sight the previous station (e.g., A from B).
    *   Levelling and focusing.
    *   Read the back bearing and record it. Compare it with the forward bearing from A to B (should be 180° difference if no declination change).
5.  **Measuring Distances:** Measure the linear distance between stations (e.g., A to B) using a tape or chain.
6.  **Moving to the Next Station:** Move the compass to station B.
7.  **Repeat:** Repeat steps 2-5 for each subsequent station (B to C, C to D, etc.).
8.  **Closing the Traverse:** Ideally, the traverse should close on the starting point (e.g., D back to A). The sum of interior angles or the misclosure in bearings can be checked.

**Example Field Book Entry:**

| From | To   | Bearing (Fwd) | Bearing (Bk) | Distance (m) | Remarks        |
| :--- | :--- | :------------ | :----------- | :----------- | :------------- |
| A    | B    | N 45° 30' E   | S 45° 30' W  | 150.50       | Station A sighted |
| B    | C    | S 62° 15' W   | N 62° 15' E  | 210.75       | Station B sighted |
| C    | D    | N 30° 00' W   | S 30° 00' E  | 180.20       | Station C sighted |
| D    | A    | S 88° 00' E   | N 88° 00' W  | 255.80       | Station D sighted |

---

### **5. Practice Questions and Exercises**

**Question 1:**

What is the difference between a true meridian and a magnetic meridian?

**Answer:** A true meridian is based on the Earth's axis of rotation, pointing towards the geographic North Pole. A magnetic meridian is based on the Earth's magnetic field and points towards the magnetic North Pole, which is not fixed.

---

**Question 2:**

A line has a magnetic bearing of S 40° 30' E. If the magnetic declination at the location is 7° 00' E, what is the true bearing of the line?

**Answer:**
Since the declination is easterly (E), and the magnetic bearing is S 40° 30' E, the true bearing will be further east relative to true north.
True Bearing = S (40° 30' - 7° 00') E = S 33° 30' E.

---

**Question 3:**

A surveyor measures a magnetic azimuth of 215° 45'. If the magnetic declination is 2° 30' W, what is the true azimuth?

**Answer:**
Since the declination is westerly (W), we subtract it from the magnetic azimuth.
True Azimuth = Magnetic Azimuth - Declination
True Azimuth = 215° 45' - 2° 30' = 213° 15'.

---

**Question 4:**

Explain why taking back bearings is important in compass surveying.

**Answer:** Back bearings are crucial for checking the accuracy of forward bearing measurements. By comparing the back bearing with the forward bearing (which should ideally differ by 180°), surveyors can identify errors in sighting or reading. This helps ensure the internal consistency and reliability of the traverse.

---

**Question 5:**

List two sources of error that can affect compass readings and how to minimize them.

**Answer:**
1.  **Source:** Magnetic interference from nearby metal objects.
    **Minimization:** Set up the compass a safe distance away from any metallic structures, vehicles, or electrical equipment.
2.  **Source:** Improper levelling of the compass.
    **Minimization:** Always ensure the levelling bubble is centered before taking a sighting and reading the bearing. Use a tripod for greater stability.

---

### **6. Important Points to Remember**

*   **Declination is Key:** Always account for magnetic declination when converting between magnetic and true bearings/azimuths.
*   **Bearing vs. Azimuth:** Understand the difference and how to convert between them.
*   **Back Bearings for Verification:** Never skip taking back bearings; they are essential for error detection.
*   **Avoid Magnetic Interference:** Always be mindful of potential magnetic disturbances in the vicinity.
*   **Levelling is Crucial:** An unlevelled compass will produce incorrect readings.
*   **Prismatic Compass for Field Speed:** Its advantage lies in reading while sighting.
*   **Accuracy Limitations:** Compass surveying is generally less accurate than other conventional methods like theodolite surveying.

---
