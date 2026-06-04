---
title: "Total station survey"
subject: "SURVEY LAB"
module: "Module 9: Total station survey"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810898"
status: "completed"
scrapedAt: "2026-05-20T18:41:59.327Z"
---
# SURVEY LAB - Module 9: Total Station Survey

## Topic: Total Station Survey

### 1. Introduction to Total Station Survey

**What is a Total Station?**

A Total Station is an electronic/optical instrument used for surveying and building construction. It is essentially a combination of:

*   **EDM (Electronic Distance Measurement) device:** Measures horizontal and slope distances.
*   **Theodolite:** Measures horizontal and vertical angles.
*   **Microprocessor:** Records and processes data.
*   **Data Storage:** Internal memory or external data collector.

**Key Functions:**

*   Measuring horizontal angles.
*   Measuring vertical angles.
*   Measuring slope distances.
*   Calculating horizontal distances.
*   Calculating vertical heights.
*   Calculating coordinates of points.
*   Storing and transferring data.

**Advantages of Total Station Survey:**

*   **Speed and Efficiency:** Significantly faster than traditional methods.
*   **Accuracy:** High precision in angle and distance measurements.
*   **Automation:** Reduced manual calculations and data recording.
*   **Versatility:** Capable of various surveying tasks.
*   **Data Management:** Direct digital data recording and transfer.

**When to Use Total Station Survey:**

*   Topographic surveys.
*   Setting out points for construction.
*   Monitoring deformation.
*   Establishing control networks.
*   Cadastral surveys.
*   Volume calculations.

### 2. Components of a Total Station

*   **Telescope:** For sighting targets.
    *   **Eyepiece:** For viewing the crosshairs and target.
    *   **Objective Lens:** Focuses light from the target.
    *   **Focusing Ring:** Adjusts for a clear image.
    *   **Crosshairs/Reticle:** Used for precise aiming.
*   **Horizontal Circle (Graduated Limb):** For measuring horizontal angles.
*   **Vertical Circle (Graduated Limb):** For measuring vertical angles.
*   **Angle Measurement System:** Electronic encoders that read the positions of the horizontal and vertical circles.
*   **EDM Unit:** Emits a laser beam or infrared light to measure distance to a prism or reflective surface.
    *   **Transmitter:** Emits the signal.
    *   **Receiver:** Detects the reflected signal.
*   **Keyboard/Keypad:** For inputting commands and data.
*   **Display Screen:** Shows measurements, prompts, and menu options.
*   **Data Storage Device:** Internal memory or connection for an external data collector.
*   **Battery:** Powers the instrument.
*   **Tribrach:** A leveling and centering device attached to the instrument.
    *   **Leveling Screws:** For rough and fine leveling.
    *   **Circular Vial/Plate Vial:** For initial leveling.
    *   **Optical Plummet/Laser Plummet:** For precise centering over a ground mark.
*   **Prisms/Reflectors:** Mounted on a prism pole and placed at the points to be surveyed. They reflect the EDM signal back to the total station.
    *   **Single Prism:** Most common.
    *   **Triple Prism:** Used for longer distances or poor sighting conditions.
    *   **Prism Constant:** A correction factor applied to the measured distance due to the physical offset of the prism's reflective surface.

### 3. Principles of Total Station Operation

**Angle Measurement:**

*   The total station measures angles relative to a known starting direction (often North or a backsight point).
*   **Horizontal Angle:** Measured in a horizontal plane.
*   **Vertical Angle:** Measured from the horizontal plane (zenith angle or altitude angle).
*   The instrument typically measures angles in a clockwise direction.

**Distance Measurement (EDM):**

1.  **Signal Emission:** The EDM unit emits a modulated beam of light (laser or infrared).
2.  **Target Reflection:** The beam strikes a prism or reflective surface at the target point and is reflected back.
3.  **Signal Reception:** The instrument's receiver detects the reflected beam.
4.  **Phase Comparison/Time Measurement:** The instrument compares the phase of the outgoing and incoming signals or measures the time taken for the signal to travel to the target and back.
5.  **Distance Calculation:** Based on the phase difference or travel time and the known speed of light (corrected for atmospheric conditions), the distance is calculated.

**Formula:**

*   **Slope Distance (S):** Directly measured by the EDM.
*   **Horizontal Distance (H):** $H = S \times \cos(V)$
    *   Where $V$ is the vertical angle (zenith angle).
*   **Vertical Height (V):** $V = S \times \sin(V)$
    *   Where $V$ is the vertical angle (zenith angle).

    *Alternatively, using altitude angle ($alpha$):*
    *   $H = S \times \cos(\alpha)$
    *   $V = S \times \sin(\alpha)$

**Important Note:** When using prisms, the prism constant must be accounted for, as the EDM measures to the front face of the prism, not its base. The total station software usually has a setting for the prism constant.

### 4. Setting Up the Total Station

**Steps for Setting Up:**

1.  **Positioning:** Place the tribrach over the ground mark (control point).
2.  **Centering:**
    *   Use the optical/laser plummet to align the instrument's nadir (vertical downward line) with the ground mark.
    *   Adjust the tribrach legs to bring the instrument's center directly above the ground mark.
3.  **Leveling:**
    *   Use the leveling screws and the circular vial/plate vial to make the instrument's circular level bubble centered.
    *   Fine-tune leveling using the plate vial and then re-check centering.
4.  **Targeting:** Mount the prism on a prism pole and place it accurately on the next point (for backsighting) or the point to be surveyed. Ensure the prism is plumb.

**Common Setup Scenarios:**

*   **Setup on a Known Point (Resection/Free Stationing):** Used when the instrument cannot be placed directly over a control point. Requires sightings to known points to determine the instrument's position.
*   **Setup on a Known Point with Backsight:** The most common method for establishing control or performing traverse surveys.

### 5. Surveying Procedures with a Total Station

**A. Traverse Survey:**

*   **Purpose:** To establish a network of control points by measuring angles and distances between them.
*   **Steps:**
    1.  **Setup:** Set up the total station on the first control point (Station A).
    2.  **Backsight:** Sight and measure angles and distances to a known point (Backsight Point B). Record the horizontal angle (often set to a known bearing), vertical angle, and slope distance.
    3.  **Foresight:** Sight and measure angles and distances to subsequent stations (Station C, Station D, etc.). Record horizontal angles, vertical angles, and slope distances.
    4.  **Move and Repeat:** Move the total station to the next station (Station C) and repeat the process, using Station B as the backsight and sighting to Station D.
    5.  **Data Processing:** After collecting all data, calculate coordinates of each station, adjust for errors, and perform checks.

**B. Traversing with Face Left/Face Right (FL/FR) Observations:**

*   **Purpose:** To minimize instrumental errors (collimation error, horizontal circle reading error).
*   **Procedure:**
    1.  **Face Left (FL):** Observe angles and distances with the telescope in its normal position.
    2.  **Face Right (FR):** Rotate the instrument 180 degrees horizontally, flip the telescope over, and re-observe the same points.
    3.  **Average:** Average the FL and FR readings to eliminate errors.

**C. Setting Out Points (Stake-Out):**

*   **Purpose:** To transfer coordinates from a plan or design to the ground.
*   **Steps:**
    1.  **Setup:** Set up the total station on a known control point with known coordinates.
    2.  **Backsight:** Sight to a known backsight point and orient the instrument (set horizontal angle).
    3.  **Input Target Coordinates:** Enter the coordinates of the point to be set out.
    4.  **Sighting:** Aim the telescope at the target prism placed at the desired location.
    5.  **Readings:** The total station display will show the horizontal distance and direction (bearing or angle) from the instrument to the target.
    6.  **Guidance:** The surveyor on the ground adjusts the prism pole's position based on the readings until the "target" is at the correct location (e.g., 0.000m horizontal distance, specific bearing). The instrument may provide audible beeps or visual indicators.
    7.  **Marking:** Once the point is located, the ground surveyor marks the position with a stake.

**D. Resection/Free Stationing:**

*   **Purpose:** To determine the coordinates of the total station when it's not possible to set it up directly over a known control point.
*   **Steps:**
    1.  **Setup:** Set up the total station on an unknown point.
    2.  **Sight Known Points:** Sight at least three known points with known coordinates (e.g., A, B, C) and record the horizontal angle, vertical angle, and slope distance to each.
    3.  **Data Input:** Enter the known coordinates of points A, B, and C into the total station.
    4.  **Calculation:** The total station's microprocessor calculates its own coordinates based on the multiple resection observations.

### 6. Data Management and Processing

*   **Data Collection:**
    *   Record point numbers, code names, elevations, and measured data (angles, distances).
    *   Use job files to organize data.
*   **Data Transfer:**
    *   Download data from the total station to a computer or data collector using cables or wireless methods.
*   **Data Processing Software:**
    *   **Coordinate Geometry (COGO) software:** Used for processing traverse data, calculating coordinates, adjusting networks, and performing geometric calculations.
    *   **CAD software:** For drafting and visualization of survey data.
*   **Common Tasks in Data Processing:**
    *   **Traverse Adjustment:** Applying mathematical methods (e.g., least squares) to minimize errors in angle and distance measurements and distribute them through the network.
    *   **Coordinate Calculation:** Determining the precise X, Y, and Z coordinates of survey points.
    *   **Area Calculation:** Calculating the area of enclosed traverses.
    *   **Volume Calculation:** Calculating earthwork volumes between existing and proposed surfaces.
    *   **Platting:** Creating survey maps and plans.

### 7. Common Errors and Precautions

**Instrumental Errors:**

*   **Collimation Error:** The line of sight of the telescope is not perpendicular to the horizontal axis. Minimized by FL/FR observations and instrument adjustments.
*   **Horizontal Axis Error:** The horizontal axis is not perpendicular to the vertical axis. Minimized by FL/FR observations.
*   **Vertical Circle Index Error:** The zero mark on the vertical circle does not coincide with the zenith/nadir when the telescope is horizontal. Minimized by FL/FR observations.
*   **EDM Calibration Error:** Inaccurate calibration of the EDM unit.

**Observational Errors:**

*   **Centering Error:** Instrument or prism not precisely centered over the ground point.
*   **Leveling Error:** Instrument not perfectly leveled.
*   **Targeting Error:** Sighting error (not accurately aiming at the center of the prism or target).
*   **Prism Constant Error:** Incorrect prism constant entered.
*   **Atmospheric Errors:** Variations in temperature and pressure affect the speed of light. Modern total stations have atmospheric correction capabilities.
*   **Earth Curvature and Refraction:** Affect long sight distances.
*   **Uneven Ground/Swaying Prism Pole:** Can lead to inaccurate readings.

**Precautions to Minimize Errors:**

*   **Accurate Setup:** Ensure precise centering and leveling.
*   **Use FL/FR:** For all critical measurements to eliminate instrumental errors.
*   **Check Prism Constant:** Always verify the correct prism constant.
*   **Stable Prism Pole:** Use a tripod or bipod for prism poles on important points or long sights.
*   **Good Sighting Technique:** Practice aiming for the center of the prism.
*   **Check Atmospheric Conditions:** Input appropriate corrections if available.
*   **Regular Instrument Calibration and Maintenance:** Essential for long-term accuracy.
*   **Redundant Measurements:** Take multiple readings and average them.
*   **Field Checks:** Perform closure checks on traverses.

### 8. Learning Outcome Summary and Key Concepts

*   **LO1: Understand the functionality and components of a total station.**
    *   Key Concepts: EDM, Theodolite, microprocessor, data storage, telescope, tribrach, prism, prism constant.
*   **LO2: Perform basic setup and operation of a total station.**
    *   Key Concepts: Centering, leveling, sighting, backsighting, foresighting, FL/FR observations.
*   **LO3: Measure horizontal angles, vertical angles, and distances.**
    *   Key Concepts: Angle measurement principles, EDM principles, slope distance, horizontal distance, vertical height.
*   **LO4: Apply total station in basic surveying tasks such as traversing and setting out.**
    *   Key Concepts: Traverse design, traverse adjustment, setting out procedures, stake-out, resection.
*   **LO5: Understand data management and common errors in total station surveying.**
    *   Key Concepts: Data download, data processing, traverse adjustment methods, instrumental and observational errors, error minimization techniques.

### 9. Practice Questions and Exercises

**Question 1:** What are the main components that combine to form a total station?
**Answer:** A total station is a combination of an Electronic Distance Measurement (EDM) device, a theodolite, a microprocessor, and data storage.

**Question 2:** Explain the difference between a slope distance and a horizontal distance, and provide the formula to calculate one from the other.
**Answer:** Slope distance is the direct distance measured by the EDM. Horizontal distance is the distance measured along a horizontal plane. The formula is: $H = S \times \cos(V)$, where H is horizontal distance, S is slope distance, and V is the vertical angle (zenith angle).

**Question 3:** Describe the importance of Face Left (FL) and Face Right (FR) observations in total station surveying.
**Answer:** FL/FR observations help to eliminate or minimize instrumental errors such as collimation error and horizontal axis error, leading to more accurate angle measurements.

**Question 4:** A total station is set up at point A (100.00, 200.00, 50.00). It sights to a prism at point B and records a horizontal angle of 30°00'00", a vertical angle of 85°00'00" (zenith angle), and a slope distance of 150.00m. Calculate the horizontal and vertical coordinates of point B. Assume a prism constant of 0.00m for simplicity.
**Answer:**
*   Horizontal distance (H) = 150.00 * cos(85°00'00") = 150.00 * 0.087156 = 13.07m
*   Vertical height (V) = 150.00 * sin(85°00'00") = 150.00 * 0.996195 = 149.43m

*   Horizontal coordinate of B:
    *   X_B = X_A + H * sin(Horizontal Angle)
    *   X_B = 100.00 + 13.07 * sin(30°00'00") = 100.00 + 13.07 * 0.5 = 100.00 + 6.54 = 106.54
    *   Y_B = Y_A + H * cos(Horizontal Angle)
    *   Y_B = 200.00 + 13.07 * cos(30°00'00") = 200.00 + 13.07 * 0.866025 = 200.00 + 11.32 = 211.32
*   Vertical coordinate of B:
    *   Z_B = Z_A + V
    *   Z_B = 50.00 + 149.43 = 199.43

Therefore, the coordinates of point B are approximately (106.54, 211.32, 199.43).

**Question 5 (Exercise):** You need to set out a point C with coordinates X=55.50, Y=120.20, Z=75.80. You are set up at point P (150.00, 100.00, 60.00) and have sighted to a backsight point Q (100.00, 100.00, 60.00), setting the horizontal angle to Q as 270°00'00".
*   Calculate the horizontal angle, horizontal distance, and vertical height the total station needs to display for you to sight point C.

**Answer to Exercise:**

1.  **Calculate Bearing of PC:**
    *   Delta X = X_C - X_P = 55.50 - 150.00 = -94.50
    *   Delta Y = Y_C - Y_P = 120.20 - 100.00 = 20.20
    *   Bearing = arctan(Delta X / Delta Y) = arctan(-94.50 / 20.20) = arctan(-4.678) = -77.87°
    *   Since Delta X is negative and Delta Y is positive, the point is in the second quadrant. Bearing from North (0°) is 270° + 90° - 77.87° = 282.13°.
    *   Alternatively, using the atan2 function for correct quadrant: atan2(-94.50, 20.20) = -77.87° from Y-axis.
    *   Bearing = 90° - (-77.87°) = 167.87° (if measured from Y-axis clockwise).
    *   Let's calculate directly from the setup bearing of the backsight:
        *   Backsight Q is at Y-axis, so the bearing of PQ is 270°00'00". This means point P is south of Q.
        *   Let's assume the intended reference is North is 0°.
        *   The bearing from P to Q is 270° (pointing left if North is up).
        *   Horizontal Angle from P to C:
            *   The bearing of PC needs to be calculated.
            *   Delta X = 55.50 - 150.00 = -94.50
            *   Delta Y = 120.20 - 100.00 = 20.20
            *   Angle from Y-axis (North) to PC = arctan(-94.50 / 20.20) = -77.87°. This angle is relative to the North direction.
            *   So the bearing of PC is 270°00'00" + 90°00'00" - 77°52'12" (approx 77.87°) = 282°07'48" measured from East. This is getting confusing with assumed North.

    *   **Let's use a more direct approach: Calculate bearing of PC and then the angle from PQ to PC.**
        *   Bearing of PQ (from P to Q): Given as 270°00'00". This implies Q is 90° counter-clockwise from the direction P is facing if P is oriented to North. Let's assume the initial orientation of the instrument has set the backsight to 270°00'00". This means the instrument is oriented such that the line of sight to Q is at 270° relative to some reference.
        *   Bearing of PC:
            *   Delta X (PC) = 55.50 - 150.00 = -94.50
            *   Delta Y (PC) = 120.20 - 100.00 = 20.20
            *   Bearing of PC = $ \operatorname{atan2}( \Delta X, \Delta Y ) $ = $ \operatorname{atan2}(-94.50, 20.20) $ = -77.87° (from Y-axis).
            *   This means the bearing from P to C is 270° + 90° - 77.87° = 282.13° (if North is 0°) or 360° - 77.87° = 282.13° (if measuring from positive Y-axis clockwise). Let's assume standard bearing convention where North is 0°.
            *   Bearing of PC = 270°00'00" (towards Q) + 90°00'00" (turn right) - 77°52'12" (angle within that quadrant).
            *   **A simpler way:** Calculate the angle between the line PQ and PC.
                *   Vector PQ = (100-150, 100-100) = (-50, 0)
                *   Vector PC = (55.5-150, 120.2-100) = (-94.5, 20.2)
                *   The angle of PQ from P is 270° (meaning it points along the negative X-axis, if Y is North). This is inconsistent with the input. Let's re-interpret "setting the horizontal angle to Q as 270°00'00"". This means the bearing of PQ is 270°00'00".

        *   **Let's assume the initial backsight (to Q) is set to a bearing of 270°00'00".**
            *   Bearing of PC = $ \operatorname{atan2}( \Delta X, \Delta Y ) $.
            *   $ \Delta X = 55.50 - 150.00 = -94.50 $
            *   $ \Delta Y = 120.20 - 100.00 = 20.20 $
            *   Angle from Y-axis = $ \operatorname{atan2}(-94.50, 20.20) $ = -77.87°.
            *   Bearing of PC = 360° - 77.87° = 282.13° (or 282°07'48").

        *   **The horizontal angle to measure from the current orientation (which is Q at 270°) to PC (at 282°07'48") is:**
            *   Angle = Bearing of PC - Bearing of PQ
            *   Angle = 282°07'48" - 270°00'00" = 12°07'48"

        *   **Horizontal Angle to measure = 12°07'48"**

2.  **Calculate Horizontal Distance (HD) of PC:**
    *   $ \Delta X = -94.50 $
    *   $ \Delta Y = 20.20 $
    *   HD = $ \sqrt{(\Delta X)^2 + (\Delta Y)^2} $
    *   HD = $ \sqrt{(-94.50)^2 + (20.20)^2} $
    *   HD = $ \sqrt{8930.25 + 408.04} $
    *   HD = $ \sqrt{9338.29} $
    *   HD = 96.63m

3.  **Calculate Vertical Height (VH) of PC:**
    *   The target point C has an elevation of 75.80. The instrument setup point P has an elevation of 60.00.
    *   The vertical height measured by the total station is the difference in elevation between the instrument's center and the prism's center.
    *   VH = Z_C - Z_P
    *   VH = 75.80 - 60.00 = 15.80m

    *   **Therefore, the total station needs to display:**
        *   **Horizontal Angle: 12°07'48"**
        *   **Horizontal Distance: 96.63m**
        *   **Vertical Height: 15.80m**

### 10. Important Points to Remember

*   **Accuracy starts with setup:** Precise centering and leveling are crucial.
*   **FL/FR for accuracy:** Always use Face Left and Face Right observations for critical measurements.
*   **Prism constant matters:** Ensure you use the correct prism constant for the prism you are using.
*   **Data organization:** Use clear point numbering and coding for easy data processing.
*   **Field checks:** Perform closure checks on traverses to verify accuracy.
*   **Understand your instrument:** Familiarize yourself with the specific functions and menus of your total station.
*   **Environmental factors:** Be aware of how temperature, pressure, and wind can affect measurements.
*   **Communication:** Maintain clear communication with your rod person or target carrier.
