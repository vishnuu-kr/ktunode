---
title: "Runway design - Wind rose and orientation of runway, wind coverage and crosswind component, factors affecting runway length, basic runway length, and corrections to runway length, runway configurations. threshold limits cross section of runway."
subject: "AIRPORT PLANNING AND DESIGN"
module: "Module 2: Runway design "
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8114b7"
status: "completed"
scrapedAt: "2026-05-20T18:57:31.602Z"
---
# Airport Planning and Design: Module 2 - Runway Design

---

## 1. Runway Design: Wind Rose and Orientation of Runway

### 1.1 Introduction to Wind Rose

*   **Definition:** A wind rose is a graphical representation that shows the frequency and strength of winds blowing from different directions at a specific location over a period of time.
*   **Purpose in Runway Design:** Crucial for determining the optimal orientation of runways to maximize operations during prevailing wind conditions.
*   **Components of a Wind Rose:**
    *   **Cardinal Directions:** N, NE, E, SE, S, SW, W, NW.
    *   **Calms:** The percentage of time the wind speed is below a certain threshold (e.g., 3 knots).
    *   **Wind Speed Classes:** Often represented by concentric circles or different colors, indicating ranges of wind speeds (e.g., 0-5 knots, 6-10 knots, etc.).
    *   **Wind Direction Sectors:** Typically divided into 8, 16, or more sectors representing specific wind directions.
    *   **Frequency/Percentage:** The length of each "petal" or segment of the rose indicates the percentage of time the wind blows from that direction.

### 1.2 Wind Coverage

*   **Definition:** Wind coverage is the percentage of time that a runway configuration can accommodate aircraft operations without exceeding acceptable crosswind limits.
*   **Objective:** To select a runway orientation that provides the highest possible wind coverage.
*   **Calculation:**
    1.  **Identify Prevailing Winds:** Analyze the wind rose to understand the dominant wind directions and speeds.
    2.  **Determine Crosswind Component:** For each wind direction and speed, calculate the crosswind component for potential runway orientations.
    3.  **Compare to Limits:** Check if the calculated crosswind component is within the aircraft's acceptable crosswind limit (typically specified by the aircraft manufacturer, e.g., 20-25 knots for most commercial aircraft).
    4.  **Calculate Percentage:** Sum the percentages of time where the crosswind component is within the acceptable limit for a given runway orientation.

### 1.3 Crosswind Component

*   **Definition:** The component of the wind velocity that acts perpendicular to the runway centerline.
*   **Formula:**
    $ \text{Crosswind Component} = V \times \sin(\theta) $
    Where:
    *   $V$ = True wind speed
    *   $ \theta $ = Angle between the wind direction and the runway centerline (wind direction relative to runway)
*   **Impact:** High crosswind components make landing and takeoff difficult and potentially dangerous, leading to delays, diversions, or cancellations.
*   **Acceptable Limits:** Aircraft manufacturers specify maximum allowable crosswind components for safe operations. Airport design aims to ensure operations can occur within these limits for a high percentage of the time.

### 1.4 Runway Orientation

*   **Goal:** To orient the runway (or runways in a configuration) to align as closely as possible with the prevailing wind direction.
*   **Process:**
    1.  **Analyze Wind Rose:** Identify the sector(s) with the highest wind speed frequency.
    2.  **Test Orientations:** Imagine placing a runway along different directions (e.g., aligned with the dominant wind, or at an angle to it) and calculate the resulting wind coverage.
    3.  **Select Optimal Orientation:** Choose the orientation that yields the highest wind coverage, ensuring that crosswind components are within acceptable limits for the majority of the time.
*   **Example:** If a wind rose shows that winds are predominantly from the North (N) and South (S), a runway oriented North-South (00/18) would likely provide the highest wind coverage. If winds are from the Northeast (NE) and Southwest (SW), a runway oriented Northeast-Southwest (05/23 or 04/22) would be more appropriate.

---

## 2. Factors Affecting Runway Length

### 2.1 Introduction

*   **Definition:** Runway length is a critical design parameter that ensures aircraft can safely accelerate to takeoff speed and decelerate from landing speed under various atmospheric conditions.
*   **Objective:** To determine the minimum required runway length that accommodates all intended aircraft types and operational conditions.

### 2.2 Key Factors

*   **Aircraft Performance:**
    *   **Takeoff and Landing Speeds:** Larger and heavier aircraft require higher speeds.
    *   **Rate of Climb/Descent:** Crucial for obstacle clearance.
    *   **Weight:** Maximum takeoff weight and landing weight affect performance.
    *   **Engine Power:** More powerful engines allow for shorter takeoff runs.
*   **Airport Elevation:**
    *   **Impact:** At higher elevations, air density is lower, reducing engine power and lift. This necessitates longer runways.
    *   **Correction:** An elevation correction is applied to the basic runway length.
*   **Airport Temperature:**
    *   **Impact:** Higher temperatures also reduce air density and engine power, requiring longer runways.
    *   **Correction:** A temperature correction is applied, often using a "Standard Temperature" concept (e.g., ISA temperature, or a design temperature based on the hottest month).
*   **Airport Gradient (Slope):**
    *   **Impact:** A runway with an uphill gradient reduces the effective length for takeoff (assists acceleration) and landing (assists deceleration). Conversely, a downhill gradient increases the required length.
    *   **Correction:** Corrections are applied for runway slope.
*   ** Runway Surface Condition:**
    *   **Impact:** Wet or contaminated runway surfaces (snow, ice) reduce braking effectiveness, requiring longer landing and takeoff distances.
    *   **Correction:** Often incorporated into the basic performance calculations or applied as a safety margin.
*   **Wind Conditions:**
    *   **Impact:** Headwinds reduce ground speed for takeoff and landing, shortening the required runway length. Tailwinds increase ground speed, requiring longer runways.
    *   **Correction:** Design calculations are typically based on "no wind" conditions or worst-case wind scenarios (e.g., tailwind component).
*   **Obstacle Clearance:**
    *   **Impact:** The presence of obstacles near the runway ends or along the approach/departure paths may require longer runways to maintain required climb/descent gradients.
*   **Airport Reference Code (ARC) / Design Group:**
    *   **Definition:** A classification system (e.g., ICAO Annex 14, FAA Advisory Circulars) that categorizes airports based on the wingspan and undercarriage geometry of the largest aircraft they are designed to accommodate.
    *   **Impact:** Dictates the required runway dimensions, including length.

---

## 3. Basic Runway Length and Corrections to Runway Length

### 3.1 Basic Runway Length

*   **Definition:** The runway length required for an aircraft to take off or land under standard, ideal conditions (sea level, 15°C temperature, no wind, dry runway).
*   **Determination:**
    *   Derived from aircraft performance data provided by manufacturers.
    *   Calculated based on specific aircraft type, weight, and performance characteristics (e.g., takeoff distance required, landing distance required).
    *   Often found in airport design manuals and aircraft performance charts.

### 3.2 Corrections to Runway Length

Runway length requirements are adjusted from the basic length to account for actual airport environmental and operational conditions.

#### 3.2.1 Altitude Correction

*   **Reason:** Lower air density at higher altitudes reduces engine thrust and aerodynamic lift, necessitating longer runways.
*   **Calculation:** The correction is typically a percentage increase in runway length for every unit of altitude above sea level.
    *   $ \text{Runway Length Increase} \approx \text{% Increase per 100m} \times (\text{Airport Elevation} - \text{Sea Level Elevation}) $
    *   The percentage increase varies depending on the aircraft type and the runway gradient.

#### 3.2.2 Temperature Correction

*   **Reason:** Higher ambient temperatures reduce air density, similar to altitude, leading to decreased engine thrust and lift.
*   **Calculation:** The correction is applied to account for the difference between the actual airport temperature and a "standard" or "reference" temperature.
    *   The **Design Reference Temperature (DRT)** is often used, representing the average temperature during the hottest month.
    *   **Temperature Correction Factor:** $ \text{TCF} = 1 + k \times (\text{Airport Temperature} - \text{Standard Temperature}) $
        *   Where $k$ is a factor dependent on the aircraft type.
    *   The corrected runway length is then calculated based on this factor.

#### 3.2.3 Gradient Correction

*   **Reason:** The slope of the runway affects the distance required for takeoff and landing.
*   **Calculation:**
    *   **Uphill Gradient:** Reduces runway length requirement.
    *   **Downhill Gradient:** Increases runway length requirement.
    *   **Correction Factor:** A percentage increase or decrease in runway length is applied for every percent of runway gradient.
        *   $ \text{Runway Length Increase} \approx \text{% Increase per 1% Gradient} \times \text{Runway Gradient} $
        *   The percentage depends on whether it's a takeoff or landing correction and the aircraft type.

#### 3.2.4 Combined Corrections

*   **Process:** Corrections for altitude, temperature, and gradient are often applied sequentially or combined using specific formulas provided in airport design standards (e.g., ICAO Annex 14, FAA AC 150/5300-13).
*   **General Formula Structure:**
    $ \text{Corrected Runway Length} = \text{Basic Runway Length} \times (\text{Altitude Correction Factor}) \times (\text{Temperature Correction Factor}) \times (\text{Gradient Correction Factor}) $
    (Note: This is a simplified representation; actual calculations involve more detailed factors and procedures).

### 3.3 Example Calculation (Conceptual)

*   **Scenario:** An aircraft requires a basic runway length of 2400m.
    *   Airport Elevation: 1200m
    *   Design Reference Temperature: 35°C (Standard ISA temperature is 15°C)
    *   Runway Gradient: +1% (uphill)
*   **Conceptual Corrections:**
    *   **Altitude Correction:** Higher elevation increases length.
    *   **Temperature Correction:** Higher temperature increases length.
    *   **Gradient Correction:** Uphill gradient decreases length.
*   **Result:** The final corrected runway length will be the basic length adjusted by these factors. The exact values would depend on the specific aircraft's correction factors.

---

## 4. Runway Configurations

### 4.1 Introduction

*   **Definition:** The arrangement of runways at an airport.
*   **Purpose:** To optimize airport capacity, minimize delays, and provide flexibility in operations, especially considering wind conditions.

### 4.2 Types of Runway Configurations

*   **Single Runway:**
    *   **Description:** Only one runway.
    *   **Advantages:** Simple, low construction cost.
    *   **Disadvantages:** Limited capacity, highly susceptible to weather delays (wind), potential for conflict between arrivals and departures.
    *   **Usage:** Smaller airports, general aviation.

*   **Parallel Runways:**
    *   **Description:** Two or more runways parallel to each other, aligned in the same direction.
    *   **Advantages:** Significantly increases capacity by allowing simultaneous arrivals and departures. Reduces conflict on a single runway.
    *   **Disadvantages:** Requires more land, higher construction cost.
    *   **Spacing:**
        *   **Close-spaced:** Less than 1050m apart. Requires simultaneous approach and landing control.
        *   **Intermediate-spaced:** 1050m to 1300m apart. Allows independent approaches but may require some coordination.
        *   **Far-spaced:** More than 1300m apart. Allows completely independent approaches and departures.
    *   **Usage:** Medium to large airports.

*   **Intersecting Runways:**
    *   **Description:** Runways that cross each other.
    *   **Advantages:** Can be built to accommodate different prevailing wind directions, potentially maximizing wind coverage. Can be more space-efficient than parallel runways in some cases.
    *   **Disadvantages:** Significant operational conflict and delays due to the intersection point. Reduced capacity compared to parallel runways. Requires careful air traffic control management.
    *   **Usage:** Historically used, but less common in modern large airport design due to capacity limitations. Can be found at airports with diverse wind patterns.

*   **Open-V Runways (Divergent Runways):**
    *   **Description:** Two runways starting at a common point and diverging at an angle.
    *   **Advantages:** Can effectively serve two different prevailing wind directions with a single threshold. Offers better wind coverage than a single runway.
    *   **Disadvantages:** Requires careful coordination for aircraft departing or arriving across the intersection point. Capacity is better than single, but less than well-spaced parallel runways.
    *   **Usage:** Airports with two significant, but different, prevailing wind directions.

*   **Complex Configurations:**
    *   **Description:** Combinations of parallel, intersecting, and divergent runways to meet specific airport needs.
    *   **Example:** A main N-S runway with intersecting E-W runways, or parallel runways with divergent runways.
    *   **Purpose:** To maximize capacity and operational flexibility across a wide range of wind conditions.

---

## 5. Threshold Limits and Cross-Section of Runway

### 5.1 Threshold

*   **Definition:** The beginning of the portion of the runway allocated for landing.
*   **Threshold Location:**
    *   Can be at the physical beginning of the runway pavement.
    *   Can be displaced from the physical beginning of the pavement.
*   **Displaced Threshold:**
    *   **Purpose:** To avoid obstacles (e.g., equipment, terrain, lights) on the approach path or to provide a clear landing area for larger aircraft. Also used to prevent landing on a runway segment that may have higher wear or different surface characteristics due to frequent departures.
    *   **Effect:** The runway surface before the displaced threshold is not available for landing. It can be used for takeoffs in either direction.
    *   **Marking:** Indicated by arrows pointing towards the threshold and a dashed line.
*   **Clearway:**
    *   **Definition:** A defined rectangular area on the ground or in the air, beyond the end of the runway, clear of obstacles, which the aircraft may use for its initial climb.
    *   **Purpose:** To allow aircraft to achieve a required climb gradient, especially after takeoff. It effectively extends the usable length for takeoff.
    *   **Location:** Beyond the end of the runway and runway protection area.
*   **Stopway:**
    *   **Definition:** A prepared surface beyond the end of the runway, designed to support an aircraft that overruns the runway during a rejected takeoff or a landing.
    *   **Purpose:** To provide a safe stopping area in case of emergency or aborted takeoff.
    *   **Usage:** Typically not used for normal operations.
*   **Landing Distance Available (LDA):**
    *   The distance from the threshold to the far end of the runway or stopway, whichever is less.
*   **Takeoff Distance Available (TODA):**
    *   The length of the runway plus any clearway available and suitable for the aircraft to be airborne.
*   **Accelerate-Stop Distance Available (ASDA):**
    *   The length of the runway plus any stopway available and suitable for the aircraft to accelerate to decision speed and then stop.
*   **Accelerate-Go Distance Available (AGDA):**
    *   The length of the runway plus any clearway available and suitable for the aircraft to accelerate to decision speed, continue the takeoff, and then clear a specified obstacle.

### 5.2 Cross-Section of Runway

*   **Definition:** The width of the runway pavement and the surrounding graded areas.
*   **Components:**
    *   **Pavement Width:** The usable surface width for aircraft operations. This is dictated by the aircraft wingspan and undercarriage geometry (linked to the Airport Reference Code).
    *   **Shoulders:** Graded areas on either side of the runway pavement.
        *   **Purpose:** Provide clearance for aircraft wings, allow for engine failure/overshoot, and support aircraft if they veer off the pavement. Also help in drainage.
        *   **Width:** Varies based on airport category.
    *   **Inner Safety Area (ISA) / Strip:**
        *   **Definition:** A graded area on either side of the runway and at the ends, extending beyond the shoulders.
        *   **Purpose:** To provide a safe area free of obstacles around the runway to minimize damage in case of an aircraft excursion.
        *   **Grading:** Typically sloped outwards to promote drainage.
*   **Grading Requirements:**
    *   The area surrounding the runway must be graded to smooth, stable slopes to prevent erosion and provide a traversable surface if an aircraft leaves the paved area.
    *   Slopes are specified in airport design standards (e.g., 1:4 or flatter).
*   **Runway Marking:**
    *   **Purpose:** To provide visual guidance to pilots for alignment, touchdown, and direction.
    *   **Examples:** Centerline, edge lines, threshold markings, aiming point markings, touchdown zone markings, runway end markings.
*   **Lighting:**
    *   Runway edge lights, centerline lights, touchdown zone lights, runway end lights are critical for low-visibility operations.

---

## Practice Questions & Answers

**Question 1:** What is the primary purpose of a wind rose in airport runway design?
    **Answer:** To determine the optimal orientation of runways to maximize operations during prevailing wind conditions and achieve high wind coverage.

**Question 2:** If an aircraft has a maximum allowable crosswind component of 25 knots, and the wind is blowing at 30 knots at an angle of 30 degrees to the runway centerline, what is the crosswind component? Will this condition be acceptable for operations?
    **Answer:**
        *   Crosswind Component = $30 \times \sin(30^\circ) = 30 \times 0.5 = 15 \text{ knots}$.
        *   Yes, this condition would be acceptable as 15 knots is less than the 25-knot limit.

**Question 3:** Name three key factors that influence the required length of a runway.
    **Answer:**
        1.  Airport Elevation
        2.  Airport Temperature
        3.  Aircraft Performance (e.g., takeoff/landing speeds, weight)
        (Other valid answers include runway gradient, obstacle clearance, wind conditions).

**Question 4:** Explain the difference between a displaced threshold and a clearway.
    **Answer:**
        *   **Displaced Threshold:** The beginning of the runway pavement available for landing is moved further down the runway. The area before it can be used for takeoffs but not landings.
        *   **Clearway:** An area beyond the end of the runway, free of obstacles, that the aircraft can use for its initial climb during takeoff. It effectively extends the takeoff distance.

**Question 5:** Why are parallel runways generally preferred over intersecting runways for modern, high-capacity airports?
    **Answer:** Parallel runways allow for significantly higher capacity and more efficient operations by enabling simultaneous arrivals and departures with minimal conflict. Intersecting runways create operational conflicts at the intersection point, leading to reduced capacity and potential delays.

**Question 6:** An airport is located at an elevation of 1500m above sea level, and the design reference temperature is 40°C. How would these conditions generally affect the basic runway length?
    **Answer:** Both higher elevation and higher temperature reduce air density, leading to lower engine thrust and aerodynamic lift. Therefore, both conditions would necessitate an **increase** in the basic runway length.

---

## Important Points to Remember

*   **Wind is King:** Runway orientation is primarily driven by prevailing wind conditions to maximize operational efficiency.
*   **Crosswind Limits:** Aircraft have maximum allowable crosswind components. Design aims to keep operations within these limits for a high percentage of the time.
*   **Corrections are Crucial:** Basic runway length is a starting point. Altitude, temperature, and gradient significantly impact the final required runway length.
*   **Aircraft Type Dictates:** Runway dimensions (width, length) and clearance requirements are based on the types of aircraft the airport is designed to serve (Airport Reference Code).
*   **Capacity vs. Flexibility:** Runway configurations balance the need for high capacity (parallel runways) with the ability to accommodate diverse wind conditions (intersecting or divergent runways).
*   **Safety Areas:** Thresholds, clearways, and stopways are essential safety features that define the usable lengths for different phases of flight and emergency situations.
*   **Grading and Drainage:** The cross-section includes shoulders and graded areas to ensure safety, support, and proper drainage.
