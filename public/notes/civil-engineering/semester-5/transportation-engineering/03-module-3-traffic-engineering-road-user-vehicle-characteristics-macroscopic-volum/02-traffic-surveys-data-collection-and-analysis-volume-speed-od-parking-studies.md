---
title: "Traffic Surveys:  Data collection and Analysis - Volume, speed, O&D, parking studies"
subject: "TRANSPORTATION ENGINEERING"
module: "Module 3: Traffic engineering:   Road user, vehicle characteristics, Macroscopic (Volume, Density and speed) and Microscopic (time and space headway) characteristics of traffic stream"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810dda"
status: "completed"
scrapedAt: "2026-05-20T18:51:36.776Z"
---
# Transportation Engineering: Module 3 - Traffic Engineering

## Topic: Traffic Surveys: Data Collection and Analysis

This module focuses on understanding traffic flow by examining the characteristics of road users and vehicles, as well as the macroscopic and microscopic attributes of the traffic stream. This topic delves into the practical methods of collecting and analyzing data related to these characteristics.

---

### **Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Understand the purpose and importance of traffic surveys.
*   Describe different types of traffic surveys and their specific objectives.
*   Explain the methodologies for data collection for volume, speed, Origin-Destination (O&D), and parking studies.
*   Identify the common analytical techniques used for interpreting traffic survey data.
*   Apply knowledge of traffic surveys to solve real-world transportation problems.

---

### **1. Introduction to Traffic Surveys**

Traffic surveys are fundamental to transportation engineering. They provide essential data for:

*   **Planning and Design:** Informing decisions on road improvements, new infrastructure development, and traffic management strategies.
*   **Operation and Management:** Monitoring traffic conditions, identifying bottlenecks, and optimizing traffic signal timings.
*   **Safety Analysis:** Identifying accident black spots and developing targeted safety interventions.
*   **Environmental Impact Assessment:** Evaluating the impact of traffic on air quality and noise pollution.
*   **Economic Analysis:** Supporting feasibility studies and cost-benefit analyses of transportation projects.

---

### **2. Types of Traffic Surveys**

This section details the primary types of traffic surveys covered in this topic.

#### **2.1. Volume Surveys**

*   **Definition:** Measures the number of vehicles passing a specific point or section of a road during a given period.
*   **Purpose:**
    *   Determine traffic flow rates (vehicles per hour, day, etc.).
    *   Identify peak hour volumes and patterns.
    *   Estimate capacity requirements.
    *   Classify traffic by vehicle type (cars, trucks, buses, motorcycles).
*   **Data Collection Methods:**
    *   **Manual Counts:** Observers physically count vehicles at a location.
        *   **Pros:** Can classify vehicles, record turning movements, and note unusual events.
        *   **Cons:** Labor-intensive, prone to human error, limited by observer capacity, can be difficult in adverse weather.
        *   **Example:** An observer sitting at an intersection counting cars, trucks, and turning movements for 15-minute intervals.
    *   **Automatic Counts:** Use mechanical or electronic devices.
        *   **Pneumatic Tubes:** Flexible tubes laid across the road that register vehicle passage by creating pressure pulses.
            *   **Pros:** Relatively inexpensive, can record counts and sometimes axle loads.
            *   **Cons:** Can be damaged by heavy vehicles or road surface issues, may not accurately classify all vehicle types.
        *   **Inductive Loop Detectors:** Buried loops of wire that detect vehicles by changes in their magnetic field.
            *   **Pros:** Accurate for vehicle detection and presence, can provide speed and occupancy data, suitable for continuous monitoring.
            *   **Cons:** Installation requires cutting the road surface, susceptible to damage, installation costs can be high.
        *   **Video Detection (Image Processing):** Cameras capture traffic images, and software analyzes them to count vehicles and classify them.
            *   **Pros:** Versatile (can be used for counting, speed estimation, queue detection), can monitor multiple lanes, can be used for surveillance.
            *   **Cons:** Performance can be affected by lighting conditions, weather (fog, heavy rain), and occlusions.
        *   **Radar/Microwave Detectors:** Emit radio waves or microwaves and detect vehicles by reflected signals.
            *   **Pros:** Non-intrusive installation, can operate in various weather conditions.
            *   **Cons:** Can be affected by adjacent traffic and lane changes.
*   **Analysis:**
    *   **Average Daily Traffic (ADT):** Total vehicles in a 24-hour period.
    *   **Average Annual Daily Traffic (AADT):** ADT averaged over a year.
    *   **Peak Hour Factor (PHF):** Ratio of total hourly volume to the volume in the 15-minute period of maximum accumulation within that hour. (PHF = V / (4 * V_15min))
    *   **Directional Distribution:** Percentage of traffic in the dominant direction of travel.
    *   **Vehicle Classification:** Percentage of different vehicle types.
*   **Important Points to Remember:**
    *   **Duration of Count:** Short counts (e.g., 24 hours) may not represent typical conditions due to daily or weekly variations. Longer counts or seasonal adjustments are often needed.
    *   **Location of Count:** Counts should be representative of the traffic flow being studied.
    *   **Vehicle Classification:** Crucial for capacity analysis and pavement design.

#### **2.2. Speed Surveys**

*   **Definition:** Measures the speed of vehicles traveling on a roadway.
*   **Purpose:**
    *   Determine average speeds, speed distributions, and percentiles (e.g., 85th percentile speed).
    *   Assess road safety and identify speed compliance issues.
    *   Evaluate the effectiveness of traffic control devices.
    *   Inform speed limit setting.
*   **Data Collection Methods:**
    *   **Manual Methods (Enoscope/Pacing):**
        *   **Enoscope:** An instrument used to time vehicles passing between two marks a known distance apart.
            *   **Pros:** Simple to use.
            *   **Cons:** Limited by observer reaction time, only measures speeds of vehicles in the line of sight.
        *   **Pacing:** An observer in a vehicle follows other vehicles and records their speeds using the vehicle's speedometer.
            *   **Pros:** Can record speeds of a variety of vehicles.
            *   **Cons:** Can influence the behavior of the vehicles being paced, observer bias.
    *   **Automatic Methods:**
        *   **Pneumatic Road Tubes:** Two tubes placed a known distance apart. The time taken for a vehicle's axles to cross the tubes is measured. Speed = Distance / Time.
            *   **Pros:** Relatively accurate for vehicle speed.
            *   **Cons:** Requires accurate axle spacing for different vehicle types.
        *   **Inductive Loop Detectors:** Can calculate speed based on the time a vehicle occupies the loop (occupancy) and the loop length, or by using two loops placed in series.
            *   **Pros:** Continuous monitoring, can provide speed and volume data simultaneously.
            *   **Cons:** Installation costs.
        *   **Radar/Laser Guns (Speed Guns):** Handheld or mounted devices that measure the speed of individual vehicles using Doppler shift.
            *   **Pros:** Direct measurement of individual vehicle speeds, useful for enforcement.
            *   **Cons:** Snapshot measurement, can be biased towards faster vehicles if not used systematically.
        *   **Video Detection (Image Processing):** Analyzing footage to track vehicles between points or within a frame.
            *   **Pros:** Can provide speed data for multiple vehicles simultaneously, non-intrusive.
            *   **Cons:** Accuracy depends on image quality and tracking algorithms.
*   **Analysis:**
    *   **Average Speed:** Arithmetic mean of all observed speeds.
    *   **Time Mean Speed (TMS):** The average speed of vehicles passing a point. $\text{TMS} = \sum v_i / n$
    *   **Space Mean Speed (SMS):** The average speed of vehicles occupying a section of road at a given instant. SMS is generally lower than TMS. $\text{SMS} = L / (\sum t_i / n)$ where L is the length of the section.
        *   **Relationship:** $\text{TMS} = \text{SMS} + (\sigma_s^2 / \text{SMS})$ where $\sigma_s^2$ is the variance of space mean speeds.
    *   **85th Percentile Speed:** The speed at or below which 85% of drivers are traveling. Often used as a benchmark for safe operating speed.
    *   **Speed Distribution:** A histogram showing the frequency of vehicles in different speed ranges.
*   **Important Points to Remember:**
    *   **Time Mean Speed vs. Space Mean Speed:** It's crucial to distinguish between the two and use the appropriate one for analysis (e.g., SMS is used in flow-density relationships).
    *   **85th Percentile Speed:** A key indicator for setting appropriate speed limits.

#### **2.3. Origin-Destination (O&D) Surveys**

*   **Definition:** Determines the starting points (origins) and destinations of trips made by vehicles or persons.
*   **Purpose:**
    *   Understand travel patterns and trip purposes.
    *   Identify major travel corridors and demand between zones.
    *   Develop and validate travel demand models.
    *   Plan public transportation routes and infrastructure investments.
*   **Data Collection Methods:**
    *   **Home-Based Interviews:** Households are surveyed about their trips.
        *   **Pros:** Captures comprehensive trip information, including purpose, mode, and time of travel.
        *   **Cons:** Can be expensive and time-consuming, response rates can be an issue.
    *   **Screenline/Cordon Line Surveys:** Vehicles or persons are interviewed as they cross a defined line that divides the study area into zones.
        *   **Pros:** Captures trips crossing major boundaries, efficient for understanding regional travel.
        *   **Cons:** Can miss internal trips within zones, requires careful placement of the cordon line.
        *   **Example:** Interviewing drivers at toll booths or major bridges.
    *   **License Plate Surveys:** License plate numbers are recorded at entry and exit points of the study area or specific corridors. These are later matched to determine trips.
        *   **Pros:** Can cover large areas without direct driver interaction.
        *   **Cons:** Requires significant data processing for matching, privacy concerns, can be difficult to capture all legs of a trip.
    *   **Taxi/Commercial Vehicle Surveys:** Specific surveys for taxis, delivery vans, etc., to understand their travel patterns.
    *   **Transit On-Board Surveys:** Passengers on public transport are surveyed.
*   **Analysis:**
    *   **Trip Tables:** Matrices showing the number of trips between origin and destination zones.
    *   **Desire Lines/O-D Maps:** Visual representation of trip patterns, showing straight lines connecting origins and destinations.
    *   **Trip Length Distribution:** Frequency of trips by their length.
    *   **Trip Purpose Distribution:** Percentage of trips for different purposes (work, shopping, recreation, etc.).
*   **Important Points to Remember:**
    *   **Zone Definition:** The accuracy of O&D analysis is heavily dependent on how the study area is divided into zones.
    *   **Trip Chaining:** Understanding that a single trip might consist of multiple legs with different modes or purposes is crucial.

#### **2.4. Parking Surveys**

*   **Definition:** Collects data on parking availability, duration, and utilization.
*   **Purpose:**
    *   Determine parking demand and supply.
    *   Assess parking occupancy rates and turnover.
    *   Identify areas with parking shortages or surpluses.
    *   Inform parking pricing and management strategies.
    *   Evaluate the need for new parking facilities.
*   **Data Collection Methods:**
    *   **Censuses/Capacity Surveys:** Recording the number of parking spaces available in designated areas (on-street, off-street lots, garages).
    *   **Occupancy/Utilization Surveys:** Observing and recording the number of occupied parking spaces at specific times.
        *   **Methods:**
            *   **Periodic Counts:** Counting occupied spaces at fixed intervals (e.g., every hour).
            *   **Automated Systems:** Using sensors (loop detectors, ultrasonic sensors) to detect vehicle presence in parking bays.
        *   **Example:** Walking through a parking garage every hour and noting which spaces are occupied.
    *   **Duration Surveys:** Recording the time vehicles enter and leave parking spaces to determine how long they are parked.
        *   **Methods:**
            *   **Manual Observation:** Recording license plates and entry/exit times.
            *   **Automated License Plate Recognition (ALPR):** Automatically capturing license plates and calculating parking duration.
        *   **Example:** Recording the license plate of a car entering a parking spot and again when it leaves.
    *   **Accumulation Curves:** Plotting the number of parked vehicles over time.
*   **Analysis:**
    *   **Parking Occupancy Rate:** Percentage of occupied spaces. (Occupancy Rate = Number of Occupied Spaces / Total Number of Spaces) * 100
    *   **Parking Turnover:** Number of different vehicles that use a particular parking space during a given period. (Turnover = Total Vehicles / Number of Spaces)
    *   **Average Parking Duration:** The average time vehicles are parked.
    *   **Peak Parking Demand:** The maximum number of occupied spaces observed during the study period.
*   **Important Points to Remember:**
    *   **Parking Study Period:** Should cover periods of peak demand (e.g., during business hours).
    *   **Distinction between On-Street and Off-Street Parking:** Each has different characteristics and management needs.

---

### **3. Traffic Survey Data Analysis Techniques**

This section summarizes common analytical approaches used for traffic survey data.

*   **Descriptive Statistics:** Calculating means, medians, modes, standard deviations, and frequencies to summarize data (e.g., average speed, average daily traffic, percentage of trucks).
*   **Frequency Distributions and Histograms:** Visualizing the distribution of data like speed, volume, or parking duration.
*   **Time Series Analysis:** Examining trends in traffic volume or speed over time (e.g., daily, weekly, seasonal variations).
*   **Spatial Analysis:** Analyzing how traffic characteristics vary across different locations or along a corridor.
*   **Correlation and Regression Analysis:** Identifying relationships between different traffic parameters (e.g., speed and density, volume and delay).
*   **Travel Demand Modeling:** Using O&D data to build models that predict future travel patterns.

---

### **4. Practice Questions and Exercises**

**Question 1:**
A traffic engineer conducted a 24-hour volume count at a signalized intersection and recorded the following hourly volumes for the eastbound approach: 450, 520, 600, 750, 810, 920, 850, 780, 650, 500, 400, 350 vehicles.
a) Calculate the total 24-hour volume.
b) Identify the peak hour.
c) Calculate the Peak Hour Factor (PHF) for the peak hour.
d) If the 15-minute volume within the peak hour was 250 vehicles, what is the PHF?

**Answer 1:**
a) Total 24-hour volume = 450 + 520 + 600 + 750 + 810 + 920 + 850 + 780 + 650 + 500 + 400 + 350 = **7630 vehicles**
b) The peak hour is the hour with the highest volume, which is **920 vehicles** (from 11:00 AM to 12:00 PM if we assume the first hour is 7-8 AM).
c) Assuming the peak hour volume is 920 vehicles and the total hourly volume is 920, the PHF would be 920 / (4 * max(hourly volumes in 15-min intervals)) which is not directly calculable from the provided data as we only have hourly volumes.
d) If the 15-minute volume within the peak hour was 250 vehicles, the PHF = 250 / (920 / 4) = 250 / 230 = **1.087**. (Note: A PHF greater than 1.0 is theoretically impossible, indicating an error in measurement or calculation. The typical assumption is that the total hourly volume is composed of 4 equal 15-minute periods, so the denominator should be the maximum 15-minute volume of the hour.)
Let's rephrase d) based on common practice: If the peak hour volume is 920 vehicles, and the highest 15-minute volume within that hour was 250 vehicles, then PHF = 250 / (920/4) = 250 / 230 = **1.087**. This result suggests inconsistent data or a misunderstanding of the question's intent for this specific calculation. A more realistic scenario for calculating PHF would be if the hourly volume itself was composed of 4 equal 15-minute counts. For example, if the hourly volume was 920, and the four 15-minute counts were 230, 230, 230, 230, then PHF = 230 / (920/4) = 1.0. If the counts were 200, 240, 250, 230, the peak 15-min volume is 250, and PHF = 250 / (920/4) = 1.087.

**Question 2:**
In a speed survey, 100 vehicles were observed. The average speed of these vehicles (Time Mean Speed) was 65 km/h. The average time taken for these vehicles to traverse a 100-meter section was 5.5 seconds.
a) Calculate the Space Mean Speed (SMS) of these vehicles.
b) Which speed measure (TMS or SMS) is more appropriate for calculating traffic flow-density relationships? Explain why.

**Answer 2:**
a) Space Mean Speed (SMS) = Distance / Average Time = 100 m / 5.5 s = 18.18 m/s.
To convert to km/h: 18.18 m/s * (3600 s / 1 h) * (1 km / 1000 m) = **65.45 km/h**.

b) **Space Mean Speed (SMS)** is more appropriate for calculating traffic flow-density relationships.
**Explanation:** Flow (Q) is defined as the number of vehicles passing a point per unit time. Density (K) is defined as the number of vehicles occupying a unit length of roadway at a given instant. The fundamental relationship in traffic flow is Q = K * V, where V is the speed. SMS represents the average speed of vehicles occupying a length of roadway at a specific instant, which directly aligns with the definition of density. TMS, being the average speed of vehicles passing a point, can be higher than SMS due to the tendency for faster vehicles to pass a point more frequently.

**Question 3:**
Describe the primary purpose of an Origin-Destination (O&D) survey and one common method used for data collection.

**Answer 3:**
**Primary Purpose:** The primary purpose of an Origin-Destination (O&D) survey is to understand travel patterns by identifying where trips begin (origins) and where they end (destinations). This data is crucial for understanding trip generation, distribution, and mode choice, and it forms the basis for developing transportation plans and travel demand models.

**Common Method:** One common method is **Screenline/Cordon Line Surveys**. In this method, traffic crossing a defined boundary (screenline or cordon line) that divides the study area is intercepted and drivers are interviewed about their trip origin, destination, purpose, and mode of travel. This helps to capture trips that enter or leave the study area or specific zones within it.

---

### **5. Key Concepts and Definitions Recap**

*   **Traffic Survey:** Systematic collection and analysis of data related to traffic operations and characteristics.
*   **Volume:** Number of vehicles passing a point in a given time.
*   **ADT (Average Daily Traffic):** Average number of vehicles passing a point in a 24-hour period.
*   **AADT (Average Annual Daily Traffic):** ADT averaged over a year.
*   **PHF (Peak Hour Factor):** Ratio of total hourly volume to four times the maximum 15-minute volume within that hour.
*   **Time Mean Speed (TMS):** Average speed of vehicles passing a point.
*   **Space Mean Speed (SMS):** Average speed of vehicles occupying a segment of road.
*   **Origin-Destination (O&D) Survey:** Identifies where trips start and end.
*   **Parking Occupancy Rate:** Proportion of parking spaces that are occupied.
*   **Parking Turnover:** Number of different vehicles using a parking space over a period.

---

### **6. Further Study / Important Considerations**

*   **Sampling Techniques:** Understanding appropriate sampling methods to ensure survey data is representative.
*   **Data Accuracy and Reliability:** Recognizing potential sources of error in data collection and analysis.
*   **Technological Advancements:** Staying updated with new technologies for traffic data collection (e.g., mobile phone data, GPS data).
*   **Integration of Different Survey Types:** How data from various surveys can be combined for a more comprehensive understanding of traffic conditions.
*   **Ethical Considerations:** Data privacy and security when collecting personal travel information.
