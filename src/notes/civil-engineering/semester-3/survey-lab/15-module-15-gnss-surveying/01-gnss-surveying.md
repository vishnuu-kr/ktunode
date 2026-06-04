---
title: "GNSS Surveying"
subject: "SURVEY LAB"
module: "Module 15: GNSS Surveying"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108a9"
status: "completed"
scrapedAt: "2026-05-20T18:42:07.001Z"
---
# SURVEY LAB - Module 15: GNSS Surveying

## Topic: GNSS Surveying

---

### **Introduction to GNSS Surveying**

GNSS (Global Navigation Satellite System) is a satellite-based navigation system that provides users with positioning, navigation, and timing (PNT) services. GNSS surveying utilizes these signals to determine precise locations on the Earth's surface.

**Key Concepts & Definitions:**

*   **GNSS:** A generic term for satellite navigation systems.
*   **Global Navigation Satellite System (GNSS):** Encompasses multiple constellations of satellites used for positioning.
*   **Constellation:** A group of satellites operating together to provide GNSS services.
*   **Satellite:** An artificial object placed in orbit around the Earth to transmit signals for navigation and other purposes.
*   **Receiver:** A device that detects and processes signals from GNSS satellites to determine position.
*   **Positioning:** The process of determining the coordinates of a point on or near the Earth's surface.
*   **Navigation:** The process of guiding a moving object or person from one point to another.
*   **Timing:** The provision of accurate time signals from satellites.

**Major GNSS Constellations:**

*   **GPS (Global Positioning System):** Developed and operated by the United States.
*   **GLONASS (Global Navigation Satellite System):** Developed and operated by Russia.
*   **Galileo:** Developed and operated by the European Union.
*   **BeiDou:** Developed and operated by China.
*   **QZSS (Quasi-Zenith Satellite System):** A regional system for Japan, but can be used globally.
*   **IRNSS/NavIC (Indian Regional Navigation Satellite System):** A regional system for India.

---

### **How GNSS Works**

GNSS positioning relies on the principle of trilateration (or more accurately, multilateration) using signals from multiple satellites.

**Key Concepts & Definitions:**

*   **Trilateration/Multilateration:** A method of determining the location of a point by measuring its distance from three or more known points. In GNSS, these known points are the satellites.
*   **Pseudorange:** The apparent distance between a GNSS receiver and a satellite, calculated by multiplying the signal travel time by the speed of light. It's "pseudo" because it's affected by errors.
*   **Time of Transmission (TT):** The time at which the satellite transmits its signal.
*   **Time of Reception (TR):** The time at which the receiver receives the signal.
*   **Signal Travel Time:** The time it takes for the signal to travel from the satellite to the receiver (TR - TT).
*   **Speed of Light (c):** A fundamental physical constant (approximately 299,792,458 meters per second).
*   **Satellite Ephemeris:** Precise orbital data for each satellite, transmitted by the satellite itself.
*   **Satellite Almanac:** Less precise orbital data for all satellites in the constellation, used for initial acquisition.
*   **Atomic Clock:** Highly accurate clocks used on GNSS satellites.
*   **Receiver Clock Bias:** The difference between the receiver's internal clock and a true time reference. This is the primary unknown the receiver needs to solve for.

**The Positioning Process:**

1.  **Satellite Signals:** Each GNSS satellite continuously transmits signals containing:
    *   **Pseudo-random Noise (PRN) code:** Identifies the satellite and allows the receiver to distinguish its signal.
    *   **Navigation message (or Data message):** Contains ephemeris data, almanac data, satellite health, and other system information.
2.  **Receiver Acquisition:** The GNSS receiver locks onto signals from multiple satellites.
3.  **Pseudorange Calculation:** For each visible satellite, the receiver measures the time it takes for the signal to arrive.
    *   *Pseudorange (P) = c * (TR - TT)*
4.  **Solving for Position:**
    *   To determine a 3D position (latitude, longitude, altitude), a minimum of four satellites are required.
    *   The receiver needs to solve for four unknowns: the three components of its position (X, Y, Z) and its own clock bias (receiver clock error).
    *   Each satellite provides a range measurement, essentially creating a spherical shell of possible locations. The intersection of these shells from multiple satellites defines the receiver's position.
    *   *Equation (simplified): Pᵢ = √((X - Xᵢ)² + (Y - Yᵢ)² + (Z - Zᵢ)²) + c * Δt*
        *   Where:
            *   *Pᵢ* = Pseudorange to satellite *i*
            *   *(X, Y, Z)* = Receiver's unknown position
            *   *(Xᵢ, Yᵢ, Zᵢ)* = Known position of satellite *i* (from ephemeris)
            *   *c* = Speed of light
            *   *Δt* = Receiver clock bias (the fourth unknown)

**Important Point to Remember:** The receiver's clock is not as accurate as the satellite's atomic clock, so a clock bias error must be solved for. This is why four satellites are needed for a 3D solution.

---

### **Factors Affecting GNSS Accuracy**

Several factors can introduce errors into GNSS measurements, degrading accuracy.

**Key Concepts & Definitions:**

*   **Error Sources:** Phenomena that cause deviations between the measured position and the true position.
*   **Atmospheric Delays:** The bending and slowing of GNSS signals as they pass through the Earth's ionosphere and troposphere.
*   **Ionosphere:** The region of the Earth's upper atmosphere (about 60-1000 km) containing ionized particles that refract GNSS signals.
*   **Troposphere:** The lower part of the Earth's atmosphere (up to about 15 km) where weather occurs. Water vapor and temperature variations affect signal speed.
*   **Multipath Effect:** The reflection of GNSS signals off nearby objects (buildings, terrain) before reaching the receiver, causing the receiver to lock onto a delayed signal.
*   **Satellite Clock Errors:** Small inaccuracies in the atomic clocks on board the satellites.
*   **Satellite Orbit Errors (Ephemeris Errors):** Deviations of the satellite's actual position from its predicted orbital path.
*   **Receiver Noise:** Random errors introduced by the receiver's electronic components.
*   **Satellite Geometry (DOP):** The spatial arrangement of visible satellites. Poor geometry leads to amplified errors.
*   **Selective Availability (SA):** An intentional degradation of GPS signals, now turned off.

**Specific Error Sources and Their Impact:**

*   **Ionospheric Delay:**
    *   **Impact:** Causes signal to slow down, leading to a positive range error.
    *   **Mitigation:** Dual-frequency receivers can measure and largely correct for this.
*   **Tropospheric Delay:**
    *   **Impact:** Causes signal to slow down, leading to a positive range error.
    *   **Mitigation:** Modeled using atmospheric data, but cannot be fully corrected by dual-frequency receivers.
*   **Multipath Effect:**
    *   **Impact:** Causes the receiver to calculate a longer signal travel time, leading to a range error. The error can be positive or negative and is highly dependent on the environment.
    *   **Mitigation:** Careful antenna placement, using antennas with good ground planes, and advanced receiver signal processing.
*   **Satellite Clock Errors:**
    *   **Impact:** Small error in the calculated range.
    *   **Mitigation:** Continuously monitored and corrected by ground control segment; data broadcast to receivers.
*   **Satellite Orbit Errors (Ephemeris Errors):**
    *   **Impact:** The receiver assumes the satellite is at a different location than it actually is, leading to position errors.
    *   **Mitigation:** Ground control segment monitors and predicts orbits; corrections broadcast to receivers.
*   **Receiver Noise:**
    *   **Impact:** Random fluctuations in measurements.
    *   **Mitigation:** Averaging measurements over time.
*   **Satellite Geometry (DOP - Dilution of Precision):**
    *   **Impact:** How the satellites are positioned relative to the receiver. Widely spaced satellites provide good geometry and low DOP values, resulting in higher accuracy. Satellites clustered together result in poor geometry and high DOP values, amplifying any other errors.
    *   **Types of DOP:**
        *   **GDOP (Geometric Dilution of Precision):** Overall 3D position and time error.
        *   **PDOP (Position Dilution of Precision):** 3D position error.
        *   **HDOP (Horizontal Dilution of Precision):** 2D horizontal position error.
        *   **VDOP (Vertical Dilution of Precision):** Vertical position error.
        *   **TDOP (Time Dilution of Precision):** Time error.
    *   **Mitigation:** Waiting for better satellite geometry or moving to a location with better sky view.

**Important Point to Remember:** The most significant error sources for single-frequency receivers are atmospheric delays and multipath. For dual-frequency receivers, multipath remains a significant concern. DOP is crucial for understanding how satellite geometry affects the quality of the calculated position.

---

### **Types of GNSS Surveying Techniques**

Different techniques are employed in GNSS surveying, each offering varying levels of accuracy and suitable for different applications.

**Key Concepts & Definitions:**

*   **Absolute Positioning (Point Positioning):** Determining the absolute coordinates of a point without reference to other surveyed points.
*   **Relative Positioning:** Determining the position of a point relative to another surveyed point.
*   **Base Station:** A fixed, known GNSS receiver station used as a reference in relative positioning techniques.
*   **Rover:** A mobile GNSS receiver used to determine the position of unknown points.
*   **Carrier Phase:** The phase of the radio frequency carrier wave of the GNSS signal. This phase is continuous and oscillates at a high frequency, allowing for very precise measurements.
*   **Code Phase:** The phase of the pseudo-random noise (PRN) code transmitted by the satellite. Used in standard point positioning.
*   **Integer Ambiguity:** The unknown number of full carrier wave cycles between the satellite and the receiver at the start of tracking. Resolving this ambiguity is key to high-accuracy GNSS surveying.

**Common GNSS Surveying Techniques:**

1.  **Standard Point Positioning (SPP) / Single Point Positioning:**
    *   **Method:** Uses code phase measurements from at least four satellites.
    *   **Accuracy:** Typically in the range of 3-10 meters horizontally, 5-15 meters vertically (without augmentation).
    *   **Applications:** Navigation, general location, non-critical mapping.
    *   **Requirements:** A single GNSS receiver.

2.  **Differential GNSS (DGNSS):**
    *   **Method:** Uses code phase measurements from a base station and rover. The base station calculates and broadcasts correction data (errors) to the rover. The rover applies these corrections to its own measurements.
    *   **Accuracy:** Improves SPP accuracy to 1-3 meters horizontally.
    *   **Applications:** Basic mapping, land management, agriculture.
    *   **Requirements:** At least two receivers (base and rover) simultaneously collecting data.

3.  **Real-Time Kinematic (RTK):**
    *   **Method:** Uses carrier phase measurements from a base station and rover. The base station transmits its position and carrier phase data to the rover in real-time. The rover uses this to resolve the integer ambiguity of the carrier phase measurements to its required precision.
    *   **Accuracy:** Centimeter-level accuracy (1-2 cm horizontally and vertically) can be achieved with a clear sky view and good satellite geometry.
    *   **Applications:** High-precision surveying, stakeout, construction, cadastral surveys.
    *   **Requirements:** A base station and rover, both capable of carrier phase tracking, operating within a limited distance (typically <20 km).

4.  **Post-Processed Kinematic (PPK) / Static Relative Positioning:**
    *   **Method:** Similar to RTK, but the data from both the base station and rover are collected and stored. The data is then processed later in an office environment to resolve integer ambiguities and determine precise relative positions.
    *   **Accuracy:** Centimeter-level accuracy, comparable to RTK.
    *   **Applications:** Surveying where real-time results are not critical, such as baseline measurement, establishing control points, deformation monitoring.
    *   **Requirements:** At least two receivers, data logging capability, post-processing software.

5.  **Network RTK (NRTK):**
    *   **Method:** Instead of a single base station, the rover receives corrections derived from a network of continuously operating reference stations (CORS). This provides a more robust and geographically widespread solution.
    *   **Accuracy:** Centimeter-level accuracy, similar to single-base RTK.
    *   **Applications:** Large-scale surveying projects, areas where establishing a single base station is impractical.
    *   **Requirements:** A subscription to a network service, a rover capable of receiving correction data (often via cellular or radio modem).

**Important Point to Remember:** Carrier phase techniques (RTK, PPK) provide much higher accuracy than code phase techniques (SPP, DGNSS) due to their ability to measure fractions of a carrier wavelength. Resolving the integer ambiguity is the key to achieving this high accuracy.

---

### **GNSS Surveying Equipment and Data Processing**

Understanding the hardware and software used in GNSS surveying is crucial for successful fieldwork and data analysis.

**Key Concepts & Definitions:**

*   **Dual-Frequency Receiver:** A receiver capable of tracking signals on two different frequencies (e.g., L1 and L2, or L1 and L5 for GPS). This is essential for carrier phase measurements and mitigating ionospheric errors.
*   **CORS (Continuously Operating Reference Station):** A permanent GNSS station that collects data 24/7 and makes it available for users to improve their positioning accuracy.
*   **Antenna:** The component that receives the GNSS satellite signals.
*   **Data Logger/Controller:** A device used to control the receiver, input field data (e.g., point names, descriptions), and store raw GNSS data.
*   **Survey Software:** Software used to process raw GNSS data, perform quality checks, resolve ambiguities, calculate coordinates, and generate reports.
*   **Baseline:** The vector (distance and direction) between two GNSS receivers.
*   **Coordinate System:** A reference system for locating points on the Earth (e.g., Latitude/Longitude, UTM, State Plane).
*   **Datum:** A reference ellipsoid and its orientation that defines a coordinate system.

**GNSS Surveying Equipment:**

*   **GNSS Receivers:**
    *   **Handheld:** Basic receivers for navigation and low-accuracy positioning (e.g., recreational GPS).
    *   **Geodetic/Survey Grade:** Advanced dual-frequency receivers capable of carrier phase tracking, used for high-accuracy surveying.
*   **Antennas:**
    *   **Choke Ring Antennas:** Designed to minimize multipath errors.
    *   **Patch Antennas:** Common in handheld and some survey-grade receivers.
*   **Data Loggers/Field Controllers:**
    *   Ruggedized handheld computers with integrated software.
    *   Can control the GNSS receiver, collect other survey data (e.g., total station), and manage projects in the field.
*   **Accessories:**
    *   Tripods, poles, batteries, communication devices (radios, modems).

**GNSS Data Processing:**

1.  **Data Download:** Raw GNSS data (in formats like RINEX - Receiver Independent Exchange Format) is downloaded from the receiver to a computer.
2.  **Quality Control (QC):**
    *   Reviewing satellite visibility plots.
    *   Checking signal-to-noise ratios.
    *   Analyzing PDOP values during the observation period.
    *   Assessing the length of observation sessions.
3.  **Baseline Processing (for PPK/Static):**
    *   Using survey software to process the raw data from the base and rover.
    *   Defining the base station coordinates (either known or to be solved).
    *   Attempting to resolve the integer ambiguities for the carrier phase measurements.
    *   Generating baseline vectors and associated quality metrics.
4.  **Coordinate Calculation:**
    *   Transforming baseline vectors into project-specific coordinate systems.
    *   Combining measurements from multiple baselines in a network adjustment for increased reliability.
5.  **Reporting:** Generating field notes, processing reports, and final coordinate lists.

**Important Point to Remember:** RINEX is the standard exchange format for GNSS data, ensuring interoperability between different receiver brands and processing software. Thorough quality control is essential before, during, and after data collection to ensure the accuracy and reliability of the survey results.

---

### **Applications of GNSS Surveying**

GNSS surveying has a wide range of applications across various industries due to its ability to provide precise positioning information.

**Key Concepts & Definitions:**

*   **Cadastral Survey:** Defining property boundaries.
*   **Topographic Survey:** Mapping the natural and man-made features of an area, including elevation.
*   **Engineering Survey:** Providing precise layout and control for construction projects.
*   **Hydrographic Survey:** Mapping underwater terrain and features.
*   **Mining Survey:** Supporting exploration, planning, and operations in mines.
*   **Geodetic Control:** Establishing a network of precisely known points to support large-scale mapping and scientific studies.
*   **Monitoring:** Tracking changes over time, such as ground deformation or ice movement.

**Common Applications:**

*   **Land Surveying:**
    *   **Cadastral Surveys:** Establishing and re-establishing property boundaries with high precision.
    *   **Topographic Mapping:** Creating detailed maps of terrain and features.
    *   **Boundary Marking:** Precisely locating and staking out boundaries.
*   **Construction:**
    *   **Site Layout:** Precisely staking out buildings, roads, and infrastructure.
    *   **Machine Control:** Guiding construction equipment (excavators, graders) for automated grading and earthmoving.
    *   **Volume Calculations:** Determining earthwork quantities.
*   **Agriculture:**
    *   **Precision Agriculture:** Applying fertilizers, seeds, and pesticides only where needed, improving efficiency and reducing waste.
    *   **Field Mapping:** Delineating field boundaries for management purposes.
*   **Geology and Geophysics:**
    *   **Seismic Surveying:** Positioning seismic sensors.
    *   **Volcano Monitoring:** Tracking ground deformation.
    *   **Landslide Monitoring:** Observing ground movement.
*   **Navigation:**
    *   **Marine Navigation:** Charting courses and avoiding hazards.
    *   **Aviation Navigation:** Guiding aircraft.
    *   **Vehicle Navigation:** GPS in cars and other vehicles.
*   **Environmental Monitoring:**
    *   **Tracking Wildlife:** Attaching GPS collars to animals.
    *   **Monitoring Glaciers and Ice Sheets:** Measuring movement and volume changes.
    *   **Mapping Pollution Sources:** Pinpointing locations of environmental contamination.
*   **Disaster Management:**
    *   **Mapping Disaster Zones:** Assessing damage and planning relief efforts.
    *   **Tracking Evacuations:** Guiding emergency responders.
*   **Resource Management:**
    *   **Forestry:** Mapping forest boundaries and timber resources.
    *   **Mining:** Surveying mine sites and planning operations.

**Important Point to Remember:** The accuracy and efficiency of GNSS surveying have revolutionized many fields, enabling tasks that were previously impossible or extremely time-consuming.

---

### **Practice Questions & Exercises**

**Question 1:**
What is the minimum number of GNSS satellites required to determine a 3D position and solve for the receiver clock bias?
a) 2
b) 3
c) 4
d) 5

**Question 2:**
Which of the following is NOT a major GNSS constellation?
a) GPS
b) GLONASS
c) Compass
d) Galileo

**Question 3:**
What is the primary principle behind GNSS positioning?
a) Triangulation
b) Trilateration/Multilateration
c) Resection
d) Intersection

**Question 4:**
Which GNSS surveying technique offers the highest accuracy, typically in the centimeter range?
a) Standard Point Positioning (SPP)
b) Differential GNSS (DGNSS)
c) Real-Time Kinematic (RTK)
d) Satellite Almanac

**Question 5:**
What does the term "DOP" in GNSS surveying refer to?
a) Data Observation Protocol
b) Dilution of Precision
c) Differential Orbit Parameter
d) Digital Output Processing

**Question 6:**
Explain the main difference between Real-Time Kinematic (RTK) and Post-Processed Kinematic (PPK) GNSS surveying.

**Question 7:**
Describe two common error sources that affect GNSS measurements and suggest a mitigation strategy for each.

---

### **Answers to Practice Questions**

**Answer 1:**
c) 4
*Explanation: Four satellites are needed to solve for four unknowns: latitude, longitude, altitude, and the receiver's clock bias.*

**Answer 2:**
c) Compass
*Explanation: While "Compass" is the former name for China's GNSS system, the current official name is BeiDou. GPS, GLONASS, and Galileo are all major global GNSS constellations.*

**Answer 3:**
b) Trilateration/Multilateration
*Explanation: GNSS receivers calculate their position by measuring the distance (pseudorange) to multiple satellites. The intersection of these spheres of possible locations determines the receiver's position.*

**Answer 4:**
c) Real-Time Kinematic (RTK)
*Explanation: RTK uses carrier phase measurements, which allow for centimeter-level accuracy. SPP and DGNSS use code phase measurements, resulting in lower accuracy.*

**Answer 5:**
b) Dilution of Precision
*Explanation: DOP describes the geometric arrangement of the satellites and how it affects the precision of the calculated position. Lower DOP values indicate better geometry and potentially higher accuracy.*

**Answer 6:**
The main difference lies in the timing of data processing.
*   **RTK:** Data is processed in **real-time** in the field. A base station transmits corrections to a rover, allowing the rover to calculate its precise position instantaneously.
*   **PPK:** Data is collected by both the base and rover and then processed **after the fieldwork** is completed, typically in an office environment. This allows for more thorough processing and error checking, and the accuracy is comparable to RTK.

**Answer 7:**
Here are two examples:

1.  **Error Source:** Ionospheric Delay
    *   **Description:** As GNSS signals pass through the ionosphere, they are refracted and slowed down, leading to a positive range error.
    *   **Mitigation:** Use of **dual-frequency receivers**. These receivers can measure the signal's delay on two different frequencies and use this information to largely eliminate the ionospheric error.

2.  **Error Source:** Multipath Effect
    *   **Description:** GNSS signals can reflect off nearby surfaces (buildings, terrain, vehicles) before reaching the receiver. This causes the receiver to track a delayed signal, resulting in a position error.
    *   **Mitigation:**
        *   **Careful Antenna Placement:** Avoid placing the antenna close to reflective surfaces.
        *   **Use of Ground Planes:** Some antennas are designed with ground planes to reduce reflections.
        *   **Advanced Receiver Algorithms:** Modern receivers employ signal processing techniques to identify and reject multipath signals.
        *   **Longer Observation Times:** For static surveys, averaging measurements over longer periods can help reduce the impact of multipath.

---

### **Important Points to Remember**

*   **Four Satellites are Key:** For a 3D fix with precise timing, at least four satellites are necessary.
*   **Carrier Phase is King for Accuracy:** RTK and PPK techniques, which utilize carrier phase measurements, provide significantly higher accuracy than code phase methods.
*   **Integer Ambiguity Resolution:** The core challenge and achievement of carrier phase surveying is resolving the unknown number of carrier cycles.
*   **DOP Matters:** Always check the DOP values during data collection. Good satellite geometry is crucial for accurate results.
*   **Error Sources are Real:** Be aware of atmospheric delays, multipath, and other errors that can affect your survey.
*   **Dual-Frequency is Essential for High-Accuracy Work:** It significantly improves the ability to mitigate ionospheric errors.
*   **Quality Control is Paramount:** Thorough QC before, during, and after data collection ensures the reliability of your survey.
*   **RINEX is the Standard:** Understand and use RINEX for data exchange.
*   **CORS Networks Enhance Accuracy:** Utilize available CORS networks for improved results, especially with NRTK.
*   **Applications are Diverse:** GNSS surveying is a versatile tool with applications in almost every field requiring precise positioning.

---
