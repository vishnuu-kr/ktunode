---
title: "Ancillary services: Introduction of ancillary services – Types of Ancillary services"
subject: "ENERGY MANAGEMENT"
module: "Module 2: Energy Efficiency in Electrical Utilities:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36707"
status: "completed"
scrapedAt: "2026-05-23T16:27:44.958Z"
---
# ENERGY MANAGEMENT: Module 2 - Energy Efficiency in Electrical Utilities

## Topic: Ancillary Services: Introduction and Types of Ancillary Services

---

### **1. Introduction to Ancillary Services**

**1.1. Definition of Ancillary Services:**

*   **Ancillary services** are essential services provided by electricity generators or other market participants to support the reliable operation of the electricity transmission system. They are crucial for maintaining grid stability, balancing supply and demand, and ensuring the quality of electricity delivered to consumers.
*   Think of them as the "supporting cast" that ensures the main act – the delivery of electricity – runs smoothly and without interruption.

**1.2. Importance of Ancillary Services:**

*   **Grid Stability and Reliability:** Ancillary services prevent voltage deviations, frequency fluctuations, and power system collapses, ensuring a continuous and stable supply of electricity.
*   **Balancing Supply and Demand:** In real-time, electricity generation must precisely match demand. Ancillary services help manage the dynamic changes in both.
*   **Power Quality:** They contribute to maintaining the voltage and frequency within acceptable limits, ensuring the quality of power delivered to sensitive equipment.
*   **Integration of Renewables:** As the grid incorporates more variable renewable energy sources (like solar and wind), the need for ancillary services becomes even more critical to compensate for their intermittency.
*   **Economic Efficiency:** While ancillary services have a cost, their provision can be more economically efficient than maintaining excess generation capacity at all times.

**1.3. Regulatory Framework and Market Mechanisms:**

*   Ancillary services are typically procured by Transmission System Operators (TSOs) or Independent System Operators (ISOs) through competitive markets.
*   Generators and other eligible market participants bid to provide these services based on their capabilities and costs.
*   The specific services required and the market rules vary by region and jurisdiction.

---

### **2. Types of Ancillary Services**

Ancillary services can be broadly categorized based on their function in maintaining the power system. The following are the most common types:

**2.1. Frequency Control Services:**

These services are paramount for maintaining the electrical grid's frequency at its nominal value (e.g., 50 Hz or 60 Hz). Deviations in frequency indicate an imbalance between generation and load.

*   **Primary Frequency Response (Regulation):**
    *   **Description:** The immediate and automatic response of generators to deviations in grid frequency. This is typically provided by the governor system of synchronous generators. When frequency drops, governors automatically increase real power output; when frequency rises, they reduce output.
    *   **Purpose:** To arrest the rate of frequency decline or rise and to maintain frequency within a tolerable range during the initial seconds to minutes of an imbalance.
    *   **Key Concept:** Speed-governing action.
    *   **Example:** If a large generator trips offline, causing a sudden drop in system frequency, other online generators will automatically increase their output within seconds to slow down the frequency decline.
    *   **Reference:** *Energy Management and Conservation Handbook* by D. Yogi Goswami, Frank Kreith (CRC Press, 2007) often discusses generator response characteristics.

*   **Secondary Frequency Response (Reserve):**
    *   **Description:** A more deliberate and coordinated response to frequency deviations. It involves dispatching generation to restore the frequency to its nominal value and to relieve the primary frequency response resources. This is typically provided by resources that can be ramped up or down within minutes.
    *   **Purpose:** To restore the system frequency to its nominal value and to relieve primary frequency response resources that are operating at their limits.
    *   **Key Concepts:** Automatic Generation Control (AGC), spinning reserve.
    *   **Example:** Following the primary response, the TSO might instruct generators providing secondary reserve to increase output further to bring the frequency back to 50 Hz. This can also involve reducing output from generators that were increasing output during the primary response.
    *   **Reference:** *Industrial energy conservation* by Charles M. Gottschalk (John Wiley & Sons, 1996) may touch upon how dispatching and control systems manage reserve capacity.

*   **Tertiary Frequency Response (Replenishment/Dispatchable Reserve):**
    *   **Description:** This involves bringing offline generating units or increasing output from existing units under manual or economic dispatch within a longer timeframe (minutes to hours). It's used to replenish spinning reserves that have been utilized and to address slower-moving imbalances.
    *   **Purpose:** To replenish spinning reserves and address sustained imbalances, allowing the system to return to a normal operating state.
    *   **Key Concepts:** Non-spinning reserve, cold reserve, hot reserve.
    *   **Example:** If a major transmission line fault causes a significant power deficit that depletes spinning reserves, the TSO would dispatch offline generators to come online or increase output from those already available.
    *   **Reference:** *Energy Management Hand Book* by Wayne C. Turner (The Fairmount Press, Inc., 1997) would likely cover aspects of system operation and reserve management.

**2.2. Voltage Control Services:**

These services are essential for maintaining the voltage profile of the transmission system within acceptable limits, ensuring that electricity can be delivered effectively and without excessive losses.

*   **Reactive Power Support (VAR Support):**
    *   **Description:** The provision of reactive power (measured in VARs) by generators, synchronous condensers, or static var compensators (SVCs) to control voltage levels at various points in the grid.
    *   **Purpose:** To maintain voltage within acceptable limits, minimize voltage drop, and prevent voltage instability.
    *   **Key Concepts:** Reactive power, voltage profile, power factor.
    *   **Example:** Generators adjust their excitation systems to absorb or inject reactive power to keep the voltage at the generator's busbar at the required level. Transmission lines themselves consume reactive power, so generators need to supply it.
    *   **Reference:** BEE publications often highlight the importance of power factor correction and reactive power management in improving overall system efficiency. *Energy Management and Conservation Handbook* by D. Yogi Goswami, Frank Kreith (CRC Press, 2007) is a key resource for understanding reactive power and its impact.

*   **Voltage Regulation:**
    *   **Description:** A broader term encompassing the actions taken to keep voltage within predefined bounds. This can involve adjusting transformer tap changers, switching capacitors or reactors, and managing reactive power output.
    *   **Purpose:** To ensure reliable power delivery and prevent equipment damage or malfunction due to over or under-voltage.
    *   **Key Concepts:** Voltage stability, tap changers.
    *   **Example:** In a lightly loaded transmission system, excessive reactive power injection can cause voltage to rise. Voltage regulation services would involve reducing reactive power output or absorbing it to bring the voltage down.

**2.3. Black Start Capability:**

*   **Description:** The ability of certain generating units to start up and supply power to the grid without relying on an external power source from the transmission system. This is critical for restoring power after a widespread outage (blackout).
*   **Purpose:** To re-energize the transmission system and restore electricity supply following a major system disturbance.
*   **Key Concepts:** Islanding, self-excitation.
*   **Example:** A power plant with a black start capability might use its own auxiliary diesel generators to start its main turbines and then gradually supply power to neighboring parts of the grid to initiate the restoration process.
*   **Reference:** *Industrial energy conservation* by Charles M. Gottschalk (John Wiley & Sons, 1996) might discuss emergency power systems and their role in system recovery.

**2.4. Operating Reserves (General Classification):**

While covered within frequency control, it's useful to group them as operating reserves:

*   **Spinning Reserve:** Generating capacity that is already online and synchronized to the grid, but not yet dispatched to meet the current load. It can respond very quickly (within seconds).
*   **Non-Spinning Reserve:** Generating capacity that is offline but can be brought online and synchronized to the grid within a short period (typically 10 minutes).
*   **Supplemental Reserve:** Similar to non-spinning reserve, but may have longer response times or be provided by load curtailment programs.

---

### **3. Alignment with Course Outcomes:**

*   **CO1: Analyse the significance of energy management and auditing.**
    *   Understanding ancillary services is vital for energy managers as it impacts the overall cost and efficiency of electricity supply. Inefficient provision or unnecessary procurement of ancillary services can increase operational costs, which can be identified during energy audits. Knowledge of these services helps in analyzing the total cost of energy.
*   **CO2: Discuss the energy efficiency and management of electrical loads.**
    *   Many ancillary services, particularly reactive power support and frequency regulation, can be influenced by load characteristics and management. For example, improving the power factor of loads reduces the reactive power burden on the system, indirectly benefiting ancillary service requirements.
*   **CO3: Apply demand side management techniques.**
    *   Demand response programs can be a source of ancillary services. For instance, load curtailment can act as a form of reserve or frequency regulation, allowing consumers to participate in grid stability and potentially earn revenue.
*   **CO4: Explain the energy management opportunities in industries.**
    *   Industrial facilities can play a role in providing ancillary services, such as by utilizing on-site generation, energy storage systems (like batteries), or managing their loads dynamically. This presents an opportunity for industries to optimize their energy consumption and potentially generate additional income.
*   **CO5: Compute the economic feasibility of the energy conservation measures.**
    *   When evaluating energy conservation measures, understanding the total cost of electricity includes the cost of ancillary services. By optimizing energy use and potentially providing ancillary services, industries can improve the economic feasibility of various energy projects.

---

### **4. Important Points to Remember:**

*   Ancillary services are the unsung heroes of the power grid, ensuring its stability and reliability.
*   Frequency and voltage control are the primary functions of most ancillary services.
*   The market for ancillary services is a critical component of modern electricity markets.
*   With the rise of renewable energy, the demand and importance of flexible ancillary services are increasing.
*   Energy managers must be aware of ancillary services to understand the full cost and operational dynamics of electricity supply.

---

### **5. Practice Questions:**

1.  **Define ancillary services and explain their importance in the context of maintaining a stable power grid.** (Aligns with CO1, CO2)
    *   **Answer:** Ancillary services are essential services provided to support the reliable operation of the electricity transmission system. They are crucial for maintaining grid stability, balancing supply and demand in real-time, and ensuring the quality of electricity. Their importance lies in preventing frequency and voltage deviations, which can lead to blackouts and damage to equipment.
2.  **Differentiate between Primary and Secondary Frequency Response.** (Aligns with CO2)
    *   **Answer:** Primary frequency response is the immediate, automatic response of generators to frequency deviations, primarily through their governor systems. Secondary frequency response is a more deliberate, dispatchable response, often managed by Automatic Generation Control (AGC), to restore frequency to its nominal value and relieve primary response resources. Primary response acts within seconds, while secondary response acts within minutes.
3.  **Explain the role of reactive power support as an ancillary service.** (Aligns with CO2, CO4)
    *   **Answer:** Reactive power support (VAR support) is an ancillary service that maintains voltage levels within acceptable limits across the transmission and distribution system. Generators and other devices inject or absorb reactive power to counteract voltage drops and ensure efficient power delivery. Industries can manage their power factor to reduce their reactive power demand, contributing to better voltage profiles.
4.  **How can a modern industrial facility potentially contribute to providing ancillary services? Give at least two examples.** (Aligns with CO4, CO3)
    *   **Answer:**
        *   **On-site Generation:** Industrial facilities with co-generation or dedicated power plants can participate in providing frequency regulation or reserve capacity by adjusting their generation output based on grid signals.
        *   **Energy Storage Systems:** Battery energy storage systems (BESS) installed in industrial settings can quickly inject or absorb power to provide frequency response and voltage support.
        *   **Demand Response:** Industrial loads that can be curtailed or shifted in response to grid signals can act as a source of reserve or fast frequency response.
5.  **Briefly describe Black Start Capability and its significance.** (Aligns with CO1)
    *   **Answer:** Black Start Capability is the ability of a generating unit to start up without external power from the grid. It is significant because it allows for the sequential re-energization of the transmission system after a complete or widespread outage, initiating the restoration of power to affected areas.

---

This comprehensive study note provides an introduction to ancillary services, their types, importance, and relevance to energy management principles, aligning with the provided course and learning outcomes. Remember to consult the mentioned textbooks for deeper insights into specific technical aspects.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
