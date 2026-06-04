---
title: "Plug in Hybrid Electric Vehicles (PHEV)"
subject: "SMART GRID TECHNOLOGIES"
module: "Module 2: Smart grid Technologies Part I: Introduction to smart meters"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b00"
status: "completed"
scrapedAt: "2026-05-23T16:45:04.755Z"
---
# SMART GRID TECHNOLOGIES - Module 2: Smart Grid Technologies Part I: Introduction to Smart Meters

## Topic: Plug-in Hybrid Electric Vehicles (PHEVs)

**Module Description:** This module introduces foundational smart grid technologies, with a specific focus on smart meters and their integration with various distributed energy resources and consumer-side technologies.

**Topic Description:** This topic delves into Plug-in Hybrid Electric Vehicles (PHEVs) as a significant technology within the consumer domain of the smart grid, exploring their functionality, charging mechanisms, and their interaction with the grid.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of PHEVs** as a type of electric vehicle and their role in the smart grid.
*   **Identify the components and operational modes of PHEVs.**
*   **Explain the charging process for PHEVs** and the different charging levels.
*   **Analyze the impact of PHEVs on the power grid** and strategies for managing their charging.
*   **Discuss the integration of PHEVs with smart grid functionalities**, such as demand response and vehicle-to-grid (V2G) concepts.
*   **Recognize the importance of smart meters** in enabling PHEV integration and smart charging.

---

### 2. Key Concepts and Definitions

*   **Electric Vehicle (EV):** A vehicle that uses one or more electric motors for propulsion.
*   **Hybrid Electric Vehicle (HEV):** A vehicle that uses both an internal combustion engine (ICE) and an electric motor for propulsion. The electric motor assists the ICE or powers the vehicle for short distances.
*   **Plug-in Hybrid Electric Vehicle (PHEV):** A hybrid electric vehicle that can be charged from an external electrical outlet (e.g., a wall socket) by plugging it in. PHEVs have a larger battery capacity than HEVs, allowing for a significant all-electric range before the ICE engages.
    *   *Reference: Borlase, S. (2nd ed.). Smart Grid Infrastructure Technology and Solutions.*
*   **All-Electric Range (AER):** The maximum distance a PHEV can travel solely on electric power before the internal combustion engine needs to activate.
*   **Battery Electric Vehicle (BEV):** A vehicle that is powered entirely by electricity stored in a battery pack, with no internal combustion engine.
*   **Charging Infrastructure:** The equipment and systems used to supply electrical energy to PHEVs.
*   **On-Board Charger (OBC):** The component within a PHEV that converts AC power from the grid to DC power required by the battery.
*   **Vehicle-to-Grid (V2G):** A concept where electric vehicles can not only draw power from the grid but also send power back to the grid, acting as mobile energy storage units.
    *   *Reference: Momoh, J. (2012). Smart Grid: Fundamentals of Design and Analysis.*
    *   *Reference: Ekanayake, J., Liyanage, K., Wu, J., Yokohama, A., & Jenkins, N. (2012). Smart Grids Technology and Applications.*
*   **Vehicle-to-Home (V2H):** Similar to V2G, but the energy is discharged from the PHEV to power a home during outages or peak demand periods.
*   **Vehicle-to-Building (V2B):** Similar to V2H, but the energy is discharged to power a commercial building.
*   **Smart Charging:** The controlled charging of PHEVs, often managed by smart grid systems to optimize charging times, reduce grid impact, and potentially take advantage of lower electricity prices or renewable energy availability.

---

### 3. Components and Operational Modes of PHEVs

PHEVs combine technologies from both conventional vehicles and battery electric vehicles.

**3.1 Key Components:**

*   **Internal Combustion Engine (ICE):** Similar to a traditional gasoline or diesel engine, providing primary or supplementary propulsion.
*   **Electric Motor(s):** Powers the vehicle, either solely or in conjunction with the ICE.
*   **High-Voltage Battery Pack:** Stores electrical energy for electric propulsion. This is larger than the battery in a typical HEV, enabling extended all-electric driving.
*   **On-Board Charger (OBC):** Converts AC power from the grid to DC power for battery charging.
*   **Power Electronics:** Manages the flow of electrical energy between the battery, electric motor, and the grid.
*   **Charging Port:** The connection point for the charging cable.

**3.2 Operational Modes:**

PHEVs typically operate in several modes to maximize efficiency and leverage different power sources:

*   **All-Electric Mode:** The vehicle is powered solely by the electric motor using energy from the battery. This mode is used until the battery charge drops below a certain threshold or when higher power is required.
*   **Hybrid Mode:** Both the ICE and the electric motor work together to propel the vehicle. This is often used when the battery is depleted or when maximum power is needed (e.g., during acceleration).
*   **Charge-Sustaining Mode:** The ICE operates to maintain a minimum level of charge in the battery, allowing for continued electric-only operation for shorter periods.
*   **Charge-Depleting Mode:** The vehicle uses battery power as much as possible, with the ICE only engaging when necessary.

---

### 4. PHEV Charging Process

PHEVs require external electrical power to recharge their batteries, which is a crucial aspect of their integration into the smart grid.

**4.1 Charging Levels:**

*   **Level 1 Charging:**
    *   Uses a standard 120V AC outlet.
    *   Slowest charging method, typically adding 2-5 miles of range per hour.
    *   Can be done at home or workplace without special equipment.
    *   *Reference: Borlase, S. (2nd ed.). Smart Grid Infrastructure Technology and Solutions.*
*   **Level 2 Charging:**
    *   Uses a 240V AC outlet (similar to a household clothes dryer outlet).
    *   Requires a dedicated charging station (EVSE - Electric Vehicle Supply Equipment).
    *   Significantly faster than Level 1, adding 10-60 miles of range per hour.
    *   Common in homes, public parking lots, and workplaces.
*   **DC Fast Charging (Level 3):**
    *   Uses high-voltage DC power directly to the battery, bypassing the OBC.
    *   The fastest charging method, capable of adding hundreds of miles of range in 20-60 minutes.
    *   Requires specialized, high-power charging stations and is typically found in public charging networks.
    *   *Reference: Ekanayake, J., Liyanage, K., Wu, J., Yokohama, A., & Jenkins, N. (2012). Smart Grids Technology and Applications.*

**4.2 Charging Connectors:**

*   **J1772 (Type 1):** Standard connector for Level 1 and Level 2 charging in North America.
*   **Type 2 (Mennekes):** Standard connector for Level 1 and Level 2 charging in Europe and also used for DC fast charging in combination with the CCS connector.
*   **CHAdeMO:** A DC fast charging standard, primarily used by Japanese manufacturers.
*   **CCS (Combined Charging System):** Combines the J1772 or Type 2 connector with two additional DC pins for DC fast charging.

---

### 5. Impact of PHEVs on the Power Grid and Management Strategies

The widespread adoption of PHEVs presents both challenges and opportunities for the power grid.

**5.1 Potential Grid Impacts:**

*   **Increased Electricity Demand:** Charging large numbers of PHEVs simultaneously can lead to significant increases in peak demand, potentially straining grid capacity.
*   **Localized Load Increases:** Charging in residential areas can create localized high load concentrations, impacting local distribution transformers and feeders.
*   **Voltage Fluctuations:** Unmanaged charging can contribute to voltage instability in certain areas.
*   **Harmonic Distortion:** Non-linear loads from EV chargers can introduce harmonics into the grid.

**5.2 Management Strategies:**

To mitigate negative impacts and leverage PHEVs as grid assets, several strategies are employed:

*   **Smart Charging (Managed Charging):**
    *   **Off-Peak Charging:** Encouraging or automatically scheduling charging to occur during periods of low demand (e.g., overnight).
    *   **Demand Response (DR) Participation:** PHEVs can be programmed to curtail charging during critical peak demand events, often in exchange for incentives.
    *   **Renewable Energy Integration:** Scheduling charging to coincide with periods of high renewable energy generation (e.g., solar during the day).
    *   *Reference: Ekanayake, J., Liyanage, K., Wu, J., Yokohama, A., & Jenkins, N. (2012). Smart Grids Technology and Applications.*
*   **Vehicle-to-Grid (V2G) and Related Services:**
    *   **Ancillary Services:** PHEVs can provide grid services like frequency regulation and voltage support by injecting or absorbing power.
    *   **Peak Shaving:** Discharging stored energy back to the grid during peak demand periods to reduce the load on generation plants.
    *   **Grid Stabilization:** Acting as distributed energy storage to enhance grid reliability.
    *   *Reference: Momoh, J. (2012). Smart Grid: Fundamentals of Design and Analysis.*
    *   *Reference: Chowdhury, S. (2009). Microgrids and Active Distribution Networks.*
*   **Load Forecasting and Management:** Utilities need to accurately forecast the impact of EV charging and manage it proactively.

---

### 6. Integration of PHEVs with Smart Grid Functionalities

PHEVs are a key element of the "consumer domain" in a smart grid, enabling advanced functionalities.

**6.1 Role of Smart Meters:**

Smart meters are essential for facilitating smart charging and V2G.

*   **Two-Way Communication:** Smart meters enable bidirectional communication between the utility and the PHEV charging system.
*   **Dynamic Pricing:** They can receive real-time electricity pricing signals, allowing for cost-effective charging.
*   **Load Monitoring:** They provide granular data on energy consumption, including PHEV charging.
*   **Control and Automation:** Smart meters, in conjunction with home energy management systems (HEMS) or EVSEs, can receive commands to start, stop, or adjust charging based on grid signals or user preferences.
    *   *Reference: Borlase, S. (2nd ed.). Smart Grid Infrastructure Technology and Solutions.*
    *   *Reference: Ekanayake, J., Liyanage, K., Wu, J., Yokohama, A., & Jenkins, N. (2012). Smart Grids Technology and Applications.*

**6.2 Communication Technologies:**

*   **Home Area Network (HAN):** Smart meters often establish a HAN to communicate with in-home devices, including smart chargers.
*   **Demand Response Automated Management System (DRAMS):** A system that receives signals from the utility and communicates with aggregators or directly with customer devices to manage load.
*   **Protocols:** Standards like OpenADR (Open Automated Demand Response) are used for communication between utilities and aggregators/customers.

**6.3 Cybersecurity Considerations:**

The integration of PHEVs and charging infrastructure raises significant cybersecurity concerns.

*   **Data Privacy:** Protecting user charging habits and location data.
*   **System Integrity:** Preventing unauthorized control of charging systems, which could disrupt the grid or endanger users.
*   **Authentication and Authorization:** Ensuring only authorized devices and users can interact with the charging infrastructure and the grid.
    *   *Reference: Barker, P., Price, R. F. (2012). Cybersecurity for the Electric Smart Grid: Elements and Considerations.*

---

### 7. Alignment with Course Outcomes

This topic directly contributes to several course outcomes:

*   **CO1 (K2): Explain the basic concept of distributed energy resources, micro-grid and smart grid.**
    *   PHEVs, especially with V2G capabilities, are a form of distributed energy resource (DER) and contribute to the decentralized nature of smart grids.
*   **CO2 (K2): Choose appropriate Information and Communication Technology (ICT) in smart grid.**
    *   Understanding the communication protocols, HANs, and control systems used for PHEV charging and V2G is crucial for selecting appropriate ICT.
*   **CO3 (K2): Select infrastructure and technologies for consumer domain of smart grid.**
    *   PHEVs, charging stations (EVSEs), smart meters, and home energy management systems are all key infrastructure and technologies within the consumer domain.
*   **CO5 (K3): Formulate cloud computing infrastructure for smart grid considering cyber security.**
    *   Managing fleets of PHEVs and their charging patterns often involves cloud-based platforms, requiring consideration of cybersecurity for data storage and control.

---

### 8. Important Points to Remember

*   PHEVs are a bridge technology between traditional vehicles and full electric vehicles, offering flexibility.
*   Their battery size is larger than HEVs, enabling significant all-electric range.
*   Smart charging and V2G capabilities transform PHEVs from mere loads into active participants in grid management.
*   Smart meters are the critical enablers for smart charging and V2G by providing two-way communication and data exchange.
*   Cybersecurity is paramount to ensure the safe and reliable integration of PHEVs into the smart grid.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary difference between a Hybrid Electric Vehicle (HEV) and a Plug-in Hybrid Electric Vehicle (PHEV) in terms of their energy sources and charging capabilities?

**Answer 1:**
The primary difference lies in their ability to be externally charged and their battery capacity. An HEV has a smaller battery that is recharged solely by regenerative braking and the internal combustion engine (ICE). A PHEV has a larger battery that can be recharged by plugging into an external electricity source, allowing for a significant all-electric range before the ICE is needed.

**Question 2:**
Describe the role of a smart meter in facilitating "smart charging" for a PHEV.

**Answer 2:**
A smart meter facilitates smart charging by enabling two-way communication. It can receive pricing signals or demand response commands from the utility and communicate them to the PHEV's charging station (EVSE) or home energy management system. This allows charging to be scheduled for off-peak hours, when electricity is cheaper, or to be temporarily paused during grid peak events, thus optimizing grid load and reducing costs for the consumer.

**Question 3:**
Briefly explain the concept of Vehicle-to-Grid (V2G) and provide one potential benefit for the power grid.

**Answer 3:**
Vehicle-to-Grid (V2G) is a concept where electric vehicles, including PHEVs, can not only draw power from the grid but also send power back to the grid. A potential benefit for the power grid is peak shaving: during times of high demand, PHEVs can discharge their stored energy back to the grid, reducing the strain on generation resources and potentially preventing brownouts or blackouts. Another benefit is providing ancillary services like frequency regulation.

**Question 4 (Application Level - K3):**
Consider a scenario where a utility wants to encourage PHEV owners to charge their vehicles using renewable energy generated locally during daytime. What smart grid technologies and communication mechanisms would need to be in place to achieve this, and what information would the smart meter need to convey?

**Answer 4:**
To achieve this, the following would be needed:
*   **Smart Meters:** Essential for receiving signals from the grid about renewable energy availability and/or dynamic pricing that reflects renewable generation.
*   **Communication Network:** A reliable communication network (e.g., using cellular, Wi-Fi, or power line communication) to connect the smart meter to the utility's grid management system and the PHEV charging station.
*   **PHEV Charging Station (EVSE):** Capable of receiving commands from the smart meter or a home energy management system to adjust charging schedules.
*   **Home Energy Management System (HEMS) (Optional but beneficial):** To aggregate signals and make intelligent charging decisions based on user preferences and grid conditions.

The smart meter would need to convey:
*   **Real-time electricity pricing:** If pricing is tied to renewable availability.
*   **Grid signals:** Indicating when renewable energy is abundant and when to charge.
*   **Energy consumption data:** To track the charging progress and confirm that charging is occurring when desired.

This setup would allow the utility to signal to smart meters that renewable energy is plentiful, and the smart meters, in turn, would instruct the PHEV charging stations to commence or continue charging, thus aligning PHEV charging with renewable energy generation.

---
This concludes Module 2, Part I: Introduction to Smart Meters, focusing on Plug-in Hybrid Electric Vehicles (PHEVs).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
