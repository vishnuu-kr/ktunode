---
title: "Use of GPS and GIS in ITS : Introduction to GPS and GIS, Automatic vehicle location and identification, real time passenger information, GSM Technologies."
subject: "INTELLIGENT TRANSPORTATION SYSTEMS"
module: "Module 3: Transport Demand management and ITS : Introduction, Application of ITS for TDM"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81174a"
status: "completed"
scrapedAt: "2026-05-20T19:00:29.957Z"
---
# Intelligent Transportation Systems (ITS): Module 3 - Transport Demand Management and ITS

## Topic: Use of GPS and GIS in ITS

### Introduction

This module explores how Intelligent Transportation Systems (ITS) are utilized for Transport Demand Management (TDM). We will delve into the foundational technologies that enable many ITS applications, specifically focusing on the roles of Global Positioning System (GPS) and Geographic Information System (GIS). We will also examine how these technologies, in conjunction with others like Automatic Vehicle Location (AVL), Real-Time Passenger Information (RTPI), and Global System for Mobile Communications (GSM), contribute to effective TDM strategies.

---

### Learning Outcomes Covered:

*   Understand the fundamental concepts of GPS and GIS and their relevance to ITS.
*   Explain the principles of Automatic Vehicle Location (AVL) and Automatic Vehicle Identification (AVI) and their applications.
*   Describe the components and benefits of Real-Time Passenger Information (RTPI) systems.
*   Discuss the role of GSM technologies in enabling various ITS applications.
*   Analyze how the integration of GPS, GIS, AVL, AVI, RTPI, and GSM contributes to Transport Demand Management.

---

## 1. Introduction to GPS and GIS

### 1.1. Global Positioning System (GPS)

#### Key Concepts and Definitions:

*   **GPS (Global Positioning System):** A satellite-based radionavigation system owned by the United States government and operated by the United States Space Force. It provides users with positioning, navigation, and timing (PNT) services anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.
*   **Constellation:** A network of at least 24 operational GPS satellites orbiting the Earth.
*   **Satellites:** Orbit the Earth at an altitude of approximately 20,200 km. Each satellite transmits radio signals containing its orbital information and precise time.
*   **Receiver:** A device that detects GPS signals from satellites. It calculates its position by measuring the time it takes for signals to arrive from multiple satellites.
*   **Trilateration:** The process of determining one's position by using three (or more) known points and their distances to the unknown point. In GPS, this involves measuring the distance to at least four satellites to determine latitude, longitude, altitude, and precise time.
*   **Positioning Accuracy:** The precision with which a GPS receiver can determine its location. Factors influencing accuracy include satellite geometry, atmospheric conditions, signal interference, and receiver quality.

#### How GPS Works:

1.  **Satellite Signals:** GPS satellites transmit radio signals containing their current orbital positions and the precise time.
2.  **Receiver Calculation:** A GPS receiver on Earth picks up these signals.
3.  **Time of Arrival:** The receiver calculates the time it takes for the signal to travel from each satellite.
4.  **Distance Measurement:** Knowing the speed of light, the receiver converts the time of flight into a distance from each satellite.
5.  **Position Determination:** By knowing the precise location of at least four satellites and its distance to each, the receiver can trilaterate its own position (latitude, longitude, altitude) and synchronize its internal clock.

#### Applications of GPS in ITS:

*   **Vehicle Location Tracking:** Essential for AVL systems, fleet management, and navigation.
*   **Route Guidance:** Providing drivers with optimal routes and directions.
*   **Traffic Monitoring:** Collecting data on vehicle speeds and travel times.
*   **Logistics and Dispatch:** Efficiently managing delivery routes and scheduling.
*   **Emergency Services:** Locating vehicles and directing responders.
*   **Data Collection for Traffic Analysis:** Understanding travel patterns and origin-destination studies.

#### Important Points to Remember:

*   GPS requires an unobstructed view of the sky to receive signals.
*   Accuracy can be affected by signal blockage (e.g., in tunnels, urban canyons) and multipath interference.
*   Differential GPS (DGPS) and Augmentation Systems (e.g., WAAS, EGNOS) enhance accuracy.

### 1.2. Geographic Information System (GIS)

#### Key Concepts and Definitions:

*   **GIS (Geographic Information System):** A system designed to capture, store, manipulate, analyze, manage, and present all types of geographically referenced data. It integrates **spatial data** (location-based information) with **attribute data** (descriptive information).
*   **Spatial Data:** Information that describes the location and shape of geographic features. This can be represented as:
    *   **Vector Data:** Points (e.g., bus stops), lines (e.g., roads, rivers), and polygons (e.g., city boundaries, land parcels).
    *   **Raster Data:** Grid-based data where each cell represents a value (e.g., satellite imagery, elevation models, traffic density maps).
*   **Attribute Data:** Descriptive information associated with spatial features (e.g., road name, speed limit, bus route number, population density).
*   **Geodatabase:** A repository for storing geographic data.
*   **Spatial Analysis:** The process of examining the location, attributes, and relationships of features in geographic space.
*   **Cartography:** The science and art of map-making.

#### How GIS Works:

1.  **Data Acquisition:** Gathering spatial and attribute data from various sources (e.g., GPS, surveys, aerial photography, census data).
2.  **Data Storage:** Organizing and storing data in a geodatabase.
3.  **Data Manipulation:** Editing, updating, and transforming spatial and attribute data.
4.  **Spatial Analysis:** Performing operations like buffering, overlay analysis, network analysis, and proximity analysis.
5.  **Data Visualization:** Creating maps, charts, and other visual representations of the data.

#### Applications of GIS in ITS:

*   **Network Analysis:** Creating and analyzing road networks for routing, travel time estimation, and emergency response planning.
*   **Geocoding:** Converting addresses into geographic coordinates for mapping.
*   **Site Selection:** Identifying optimal locations for new transit stops, parking facilities, or traffic management centers.
*   **Visualizing Traffic Data:** Displaying real-time traffic speeds, incidents, and congestion levels on maps.
*   **Route Planning and Optimization:** Developing efficient public transit routes and delivery schedules.
*   **Environmental Impact Assessment:** Mapping areas affected by traffic noise or pollution.
*   **Asset Management:** Maintaining databases of road infrastructure, traffic signals, and other assets.

#### Integration of GPS and GIS in ITS:

*   **GPS provides the "where" (location data).**
*   **GIS provides the "what" (contextual information) and the tools to analyze the "where" in relation to other geographic features.**

**Example:** A GPS unit in a bus provides its real-time location. GIS software can then overlay this location onto a map of the city's road network, bus routes, and points of interest, allowing for real-time tracking, route adherence monitoring, and passenger information display.

#### Important Points to Remember:

*   GIS is a powerful tool for understanding spatial relationships and patterns.
*   The quality of GIS analysis depends heavily on the quality and accuracy of the input data.
*   GIS is crucial for visualizing and interpreting the vast amounts of data generated by ITS.

---

## 2. Automatic Vehicle Location (AVL) and Identification (AVI)

### 2.1. Automatic Vehicle Location (AVL)

#### Key Concepts and Definitions:

*   **AVL (Automatic Vehicle Location):** A system that automatically determines the geographic position of a vehicle and transmits this information to a central control system.
*   **Core Components:**
    *   **GPS Receiver:** Determines the vehicle's location.
    *   **On-board Computer/Processor:** Processes location data and other vehicle information.
    *   **Communication Device:** Transmits data to the central system (e.g., cellular modem, radio transmitter).
    *   **Central Dispatch/Monitoring System:** Receives, processes, and displays vehicle location data.

#### How AVL Works:

1.  **Positioning:** The GPS receiver on the vehicle continuously acquires satellite signals to determine its precise coordinates.
2.  **Data Transmission:** The on-board computer collects the location data (often along with other status information like speed, direction, or passenger count).
3.  **Communication:** This data is transmitted wirelessly to a central server or dispatch center via a communication network (e.g., GSM, cellular, satellite).
4.  **Display and Analysis:** The central system displays the vehicle's location on a map interface, allowing dispatchers to monitor fleets, manage operations, and provide information to customers.

#### Applications of AVL in ITS and TDM:

*   **Public Transit:**
    *   **Real-time Bus Tracking:** Enables passengers to know when their bus will arrive (RTPI).
    *   **Service Monitoring:** Ensures buses are running on schedule.
    *   **Route Deviation Detection:** Identifies buses deviating from their planned routes.
    *   **Fleet Management:** Optimizing bus deployment and scheduling.
*   **Fleet Management (Taxis, Delivery Vehicles, Service Fleets):**
    *   **Dispatch Optimization:** Sending the nearest available vehicle to a customer.
    *   **Route Efficiency:** Monitoring and improving driver routes.
    *   **Fuel Consumption Monitoring:** Tracking vehicle usage for cost savings.
    *   **Driver Behavior Monitoring:** Ensuring adherence to safety and efficiency standards.
*   **Emergency Services:**
    *   **Rapid Response:** Locating and dispatching the closest emergency vehicle.
    *   **Situational Awareness:** Providing dispatchers with the exact location of incidents.
*   **Traffic Management:**
    *   **Incident Detection:** Identifying slow-moving or stopped vehicles.
    *   **Travel Time Estimation:** Collecting speed data from vehicles to inform traffic advisories.

#### Benefits of AVL:

*   Improved operational efficiency.
*   Enhanced customer service (e.g., accurate arrival times).
*   Increased safety and security.
*   Better resource allocation.
*   Data for planning and analysis.

#### Important Points to Remember:

*   AVL relies heavily on reliable GPS reception and communication infrastructure.
*   The frequency of data updates impacts the real-time nature of the system.
*   AVL is a foundational technology for many advanced ITS applications.

### 2.2. Automatic Vehicle Identification (AVI)

#### Key Concepts and Definitions:

*   **AVI (Automatic Vehicle Identification):** A technology used to identify vehicles automatically without human intervention.
*   **How it Works:** Involves a tag or transponder attached to a vehicle and a reader or antenna installed at a fixed point (e.g., toll booth, gateway). When the vehicle passes the reader, the tag transmits its unique identification code.
*   **Technologies Used:**
    *   **RFID (Radio-Frequency Identification):** Most common. Uses radio waves to communicate between tags and readers.
        *   **Passive RFID:** Tags powered by the reader's signal. Shorter read range, cheaper.
        *   **Active RFID:** Tags have their own power source. Longer read range, more expensive.
    *   **Optical Recognition (e.g., License Plate Recognition - LPR):** Uses cameras to capture license plate images and software to read them.
    *   **Transponders:** Devices that broadcast a signal in response to a query.

#### Applications of AVI in ITS and TDM:

*   **Electronic Toll Collection (ETC):** Vehicles with AVI tags can pass through toll plazas without stopping, improving traffic flow and reducing congestion. This is a direct TDM strategy by making road usage more convenient.
*   **Congestion Charging/Road Pricing:** Automatically charging vehicles for using certain roads or zones during peak hours. This discourages driving during busy periods, managing demand.
*   **Parking Management:** Identifying vehicles entering and exiting parking facilities, managing permits, and potentially implementing dynamic pricing.
*   **Fleet Management:** Tracking company vehicles entering and exiting depots or specific work zones.
*   **Traffic Law Enforcement:** Identifying vehicles for violations (e.g., speed cameras using LPR).
*   **Border Crossing and Port Access:** Streamlining vehicle processing.

#### Benefits of AVI:

*   Reduced congestion at entry/exit points.
*   Increased operational efficiency for tolling and parking.
*   Facilitates implementation of demand-based pricing strategies.
*   Improved data collection for traffic analysis.
*   Enhanced security.

#### Important Points to Remember:

*   AVI systems require infrastructure (readers/antennas) and vehicle-borne components (tags/transponders).
*   Accuracy depends on factors like tag readability, reader placement, and vehicle speed.
*   Privacy concerns need to be addressed, especially with LPR.
*   AVI is a key enabler for implementing road pricing and congestion management schemes.

---

## 3. Real-Time Passenger Information (RTPI)

#### Key Concepts and Definitions:

*   **RTPI (Real-Time Passenger Information):** Systems that provide travelers with up-to-the-minute information about the status of their journey, particularly regarding public transport.
*   **Goal:** To improve the passenger experience, encourage public transport usage, and manage passenger expectations.
*   **Key Information Provided:**
    *   Estimated arrival/departure times of buses, trains, trams.
    *   Real-time vehicle location on a map.
    *   Service disruptions (delays, cancellations).
    *   Platform or stop information.
    *   Transfer information.

#### How RTPI Works (Typically):

1.  **Data Collection:**
    *   **AVL Systems:** Provide real-time location of public transport vehicles.
    *   **Schedule Data:** Information on planned routes and timetables.
    *   **Event Data:** Information on delays, cancellations, or incidents from control centers.
2.  **Data Processing:**
    *   Algorithms combine AVL data, schedule data, and traffic conditions to predict arrival/departure times.
    *   Information is categorized and formatted for different output channels.
3.  **Information Dissemination:**
    *   **Digital Displays:** At bus stops, train stations, and terminals.
    *   **Mobile Applications:** On smartphones, offering personalized journey planning and alerts.
    *   **Websites:** Providing access to real-time information.
    *   **SMS/Text Alerts:** For proactive notifications.
    *   **Audio Announcements:** On vehicles and at stations.

#### Applications of RTPI in ITS and TDM:

*   **Encouraging Public Transport Use:** By providing reliable and accurate information, RTPI reduces the uncertainty associated with public transport, making it more attractive compared to private car use. This directly supports TDM goals of shifting mode share.
*   **Reducing "No-Shows" and Customer Complaints:** Passengers are better informed and can make informed decisions about their travel.
*   **Improving Efficiency of Transit Operations:**
    *   Dispatchers can monitor on-time performance and proactively manage service disruptions.
    *   Drivers can be alerted to potential schedule adjustments needed due to traffic.
*   **Data for Service Improvement:** Feedback from passenger usage and operational data can inform route planning and service adjustments.
*   **Integration with Journey Planners:** RTPI data is crucial for providing accurate real-time journey planning across different modes.

#### Benefits of RTPI:

*   Enhanced passenger satisfaction.
*   Increased public transport ridership.
*   Improved operational efficiency for transit agencies.
*   Reduced perceived travel time.
*   Support for modal shift from private vehicles.

#### Important Points to Remember:

*   The accuracy of RTPI is directly dependent on the accuracy of the underlying AVL data.
*   Multiple dissemination channels are needed to reach a wide range of users.
*   Clear and concise presentation of information is crucial for user understanding.
*   RTPI is a key tool for improving the attractiveness of public transport and influencing travel choices.

---

## 4. GSM Technologies

#### Key Concepts and Definitions:

*   **GSM (Global System for Mobile Communications):** A 2G digital cellular technology for mobile phones. While newer generations (3G, 4G, 5G) are more common now, GSM principles and infrastructure still play a role, and many ITS devices leverage cellular communication. For ITS, we generally refer to **cellular technologies** more broadly, which evolved from GSM.
*   **Cellular Network:** A network of base stations (cell towers) that cover geographic areas (cells). Mobile devices connect to the nearest base station.
*   **Data Transmission:** Cellular networks enable the wireless transmission of data between devices (e.g., vehicles, passengers) and servers.
*   **Key Services Relevant to ITS:**
    *   **SMS (Short Message Service):** Text messaging, useful for alerts and low-bandwidth data.
    *   **GPRS (General Packet Radio Service):** An early packet-switched data service on GSM networks, enabling always-on internet connectivity for devices.
    *   **EDGE (Enhanced Data rates for GSM Evolution):** An improvement over GPRS, offering higher data speeds.
    *   **3G, 4G (LTE), 5G:** Later generations offering significantly higher bandwidth and lower latency, critical for real-time video, complex data, and vehicle-to-everything (V2X) communication.

#### How GSM/Cellular Technologies are Used in ITS and TDM:

*   **Communication Backbone for AVL/RTPI:** GSM/cellular networks are the primary means by which AVL systems transmit vehicle location data to central servers, and subsequently how RTPI systems disseminate information to users.
    *   **Example:** A bus equipped with a GPS receiver and a GSM modem transmits its location every minute. This data is sent via the cellular network to the transit authority's servers, which then update passenger information displays and mobile apps.
*   **In-Vehicle Communication:**
    *   **Navigation Systems:** Accessing real-time traffic data, maps, and points of interest.
    *   **Driver Communication:** Two-way communication between dispatchers and drivers.
    *   **Vehicle Diagnostics:** Transmitting data for remote monitoring and maintenance.
*   **Passenger Information Dissemination:**
    *   **Mobile Apps:** Rely on cellular data connections to provide RTPI.
    *   **SMS Alerts:** Sending service updates to passengers who opt-in.
*   **Traffic Data Collection:**
    *   **Probe Vehicle Data:** Anonymized speed and location data from mobile phones or GPS devices in vehicles can be aggregated to provide real-time traffic conditions.
*   **Demand Management Applications:**
    *   **Congestion Pricing/Tolling:** Communication between toll tags and readers, or license plate recognition systems and central databases, can use cellular networks.
    *   **Parking Systems:** Real-time availability information transmitted from parking meters or sensors.

#### Benefits of GSM/Cellular Technologies in ITS:

*   **Ubiquitous Coverage:** Wide availability of cellular networks, especially in urban and suburban areas.
*   **Scalability:** Can support a large number of connected devices.
*   **Cost-Effectiveness:** Often more affordable than proprietary radio communication systems.
*   **High Bandwidth (with newer generations):** Enables richer data exchange.
*   **Standardization:** Leverages widely adopted mobile communication standards.

#### Important Points to Remember:

*   The performance and cost of ITS applications relying on cellular networks are influenced by data plans and network coverage.
*   The evolution to 4G and 5G is crucial for enabling more advanced ITS applications like V2X.
*   Data security and privacy are critical considerations when transmitting information over public cellular networks.

---

## 5. Application of ITS for TDM: Integration of Technologies

Transport Demand Management (TDM) aims to influence travel behavior to reduce traffic congestion, improve air quality, and enhance the efficiency and sustainability of the transport system. ITS technologies, particularly those discussed above, are powerful tools for achieving these goals.

### How GPS, GIS, AVL, AVI, RTPI, and GSM Collectively Support TDM:

1.  **Discouraging Private Vehicle Use & Encouraging Alternatives:**
    *   **RTPI:** Makes public transport more attractive and reliable, encouraging modal shift.
    *   **AVI (for ETC/Congestion Charging):** Directly penalizes private vehicle use during peak periods or in congested areas, influencing travel decisions.
    *   **GIS-based Navigation:** Can be programmed to suggest the most fuel-efficient or time-efficient routes, potentially favoring public transport options or carpooling when integrated with real-time information.

2.  **Optimizing Traffic Flow & Reducing Congestion:**
    *   **AVL & GPS:** Provide real-time traffic speed and density data, enabling dynamic traffic management (e.g., adjusting signal timings, variable speed limits).
    *   **AVI:** Facilitates smooth passage through toll points, reducing stop-and-go traffic.
    *   **GIS:** Analyzes traffic patterns and identifies bottlenecks, informing infrastructure improvements and traffic control strategies.

3.  **Improving Efficiency of Public Transport:**
    *   **AVL & GPS:** Ensure buses and trains operate on schedule, reducing dwell times and improving reliability.
    *   **RTPI:** Enhances the passenger experience, making public transport a more viable option.
    *   **GSM:** Provides the communication link for real-time updates and fleet management.

4.  **Facilitating Demand-Responsive Services:**
    *   **AVL & GPS:** Enable dynamic routing and dispatch for services like on-demand shuttles or taxis.
    *   **GIS:** Helps in planning and optimizing these services based on real-time demand patterns.

5.  **Enabling Dynamic Pricing and Incentives:**
    *   **AVI:** Key for implementing zone-based congestion charges or per-use road pricing.
    *   **GSM/Cellular:** Can be used to communicate pricing changes or to deliver incentives (e.g., discounts for off-peak travel) via mobile apps.

### Integrated Example: Smart Congestion Management

*   **Problem:** Heavy congestion on a city's central business district during peak hours.
*   **ITS Solution for TDM:**
    1.  **AVI with RFID/LPR:** Installed at key entry points to the CBD.
    2.  **Congestion Charge Implemented:** Vehicles entering the zone during peak hours are automatically charged a fee.
    3.  **GSM/Cellular Network:** Used for communication between AVI readers and a central billing system.
    4.  **Mobile App:** Provides drivers with real-time charge information, account management, and alternative route suggestions (using GPS/GIS).
    5.  **GIS:** Used to define the charging zone, analyze traffic flow before and after implementation, and identify impact on surrounding areas.
    6.  **AVL/GPS data from public transport:** Used by transit agencies to increase service frequency or reroute buses away from the most congested arteries, informed by the TDM strategy.
    7.  **RTPI:** Ensures passengers using public transport are aware of real-time arrivals, reinforcing the benefit of choosing transit over driving.

**Outcome:** By making driving in the CBD during peak times more expensive and inconvenient, and by providing attractive alternatives (reliable public transport), ITS-enabled TDM strategies can effectively reduce private car usage and congestion.

---

## Practice Questions and Exercises

**Instructions:** Answer the following questions, applying the concepts learned in this module.

---

**Question 1:**

A city transit agency wants to improve passenger experience and encourage more people to use buses. They are considering implementing a system that shows passengers the real-time location of their bus and its estimated arrival time at their stop.

a)  Which core ITS technology is essential for determining the bus's location?
b)  What system is described that provides real-time arrival information to passengers?
c)  What communication technology is most likely used to transmit the bus's location data from the vehicle to the transit agency's central system?
d)  How does this system contribute to Transport Demand Management?

**Answer 1:**

a)  **GPS (Global Positioning System)** is essential for determining the bus's location.
b)  This system is called **RTPI (Real-Time Passenger Information)**.
c)  **GSM/Cellular technology** (or other mobile data networks like 4G/5G) is most likely used to transmit the bus's location data.
d)  This system contributes to TDM by making public transport more attractive and reliable, reducing the uncertainty for passengers. This encourages a modal shift from private cars to public transport, thereby managing demand for road space.

---

**Question 2:**

A city is exploring ways to reduce traffic congestion in its downtown area during weekdays. They are considering implementing a system where vehicles entering a specific zone between 7 AM and 7 PM are charged a fee based on their entry time.

a)  Which ITS technology is primarily used to automatically identify vehicles for such a scheme?
b)  What is a common method used for this identification technology?
c)  What communication technology might be used to enable the billing process for this system?
d)  Describe how this system directly impacts transport demand.

**Answer 2:**

a)  **AVI (Automatic Vehicle Identification)** is primarily used to automatically identify vehicles.
b)  A common method is **RFID (Radio-Frequency Identification)** tags attached to vehicles and readers at entry points. License Plate Recognition (LPR) is another method.
c)  **GSM/Cellular technology** can be used to transmit data from AVI readers to a central billing system or to communicate with vehicle-mounted transponders.
d)  This system directly impacts transport demand by making travel within the designated zone during peak hours less attractive due to the associated cost. This discourages the use of private vehicles, encouraging drivers to seek alternative routes, travel at different times (off-peak), or use alternative modes of transport.

---

**Question 3:**

Imagine you are designing an ITS for a city's public bus fleet. You need to:
1.  Track each bus's location and speed.
2.  Inform passengers at bus stops about arrival times.
3.  Allow the dispatch center to communicate with bus drivers.

Explain which ITS technologies you would integrate and how they would work together to achieve these objectives.

**Answer 3:**

To achieve these objectives, we would integrate the following ITS technologies:

1.  **GPS:** Each bus would be equipped with a GPS receiver to continuously determine its precise location and speed. This provides the fundamental positional data.
2.  **AVL System:** The GPS data would be processed by an on-board computer as part of an AVL system. This system would also gather other vehicle status information if needed.
3.  **GSM/Cellular Technology:** A GSM/cellular modem on each bus would transmit the AVL data (location, speed) to the central transit agency server. This network would also be used for two-way communication between dispatchers and bus drivers.
4.  **GIS:** The central server would utilize GIS software to:
    *   Display the real-time locations of all buses on a digital map of the city's road network and bus routes.
    *   Overlay bus locations with bus stop data to calculate estimated arrival times.
    *   Manage route information and identify any deviations.
5.  **RTPI Systems:** The processed real-time location and arrival time data would be disseminated to passengers through:
    *   **Digital Displays:** Installed at bus stops and major transit hubs.
    *   **Mobile Applications:** Accessible via smartphones, using the cellular data connection.
    *   **Websites:** Providing public access to real-time bus tracking.

**How they work together:**
GPS tracks the bus. AVL systems package this data along with other information. GSM/Cellular technology transmits this data to the central server. GIS analyzes this data in the context of the city's geography and transit network to predict arrival times and display locations. RTPI systems then take this information and deliver it to passengers via various channels, making public transport more user-friendly and encouraging its use as a TDM strategy. The GSM network also facilitates direct communication between the dispatch center and drivers for operational management.

---

## Summary of Important Points to Remember:

*   **GPS** provides the "where" (location), while **GIS** provides the "what" (context) and analysis tools.
*   **AVL** automatically determines and transmits a vehicle's location, forming the backbone of many ITS applications.
*   **AVI** automatically identifies vehicles, crucial for tolling, road pricing, and access control.
*   **RTPI** enhances public transport by providing real-time information, making it more attractive and influencing modal choice.
*   **GSM/Cellular technologies** are the ubiquitous communication enablers, transmitting data between vehicles, infrastructure, and users.
*   The **integration** of these technologies is key to implementing effective Transport Demand Management strategies, aiming to shift travel behavior and optimize transport system efficiency.
