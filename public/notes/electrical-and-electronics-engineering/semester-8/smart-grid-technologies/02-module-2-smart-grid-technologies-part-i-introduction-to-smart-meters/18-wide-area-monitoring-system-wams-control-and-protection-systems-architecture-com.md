---
title: "Wide Area Monitoring System (WAMS), control and protection systems (Architecture, components of WAMS, and applications: Voltage stability assessment, frequency stability assessment, power oscillation assessment, communication needs of WAMS, remedial action scheme)"
subject: "SMART GRID TECHNOLOGIES"
module: "Module 2: Smart grid Technologies Part I: Introduction to smart meters"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b0c"
status: "completed"
scrapedAt: "2026-05-23T16:45:20.811Z"
---
# SMART GRID TECHNOLOGIES: Module 2: Smart Grid Technologies Part I: Introduction to Smart Meters

## Topic: Wide Area Monitoring System (WAMS), Control and Protection Systems

---

### 1. Introduction to Wide Area Monitoring Systems (WAMS)

#### 1.1 Definition and Purpose of WAMS

*   **Definition:** A Wide Area Monitoring System (WAMS) is a sophisticated network designed to provide real-time, synchronized measurements of the electrical power grid over a broad geographical area.
*   **Purpose:**
    *   To monitor the dynamic behavior of the power system.
    *   To detect and diagnose power system instabilities and disturbances in real-time.
    *   To provide situational awareness to grid operators.
    *   To enable faster and more effective remedial actions to prevent cascading failures.
    *   To support advanced grid control and protection strategies.

#### 1.2 Relationship to Smart Grids

*   WAMS is a foundational technology for smart grids, enabling enhanced visibility and control.
*   It provides the data necessary for advanced applications like real-time stability assessment, dynamic line rating, and adaptive protection.
*   While smart meters focus on the consumer end, WAMS deals with the high-voltage transmission network and increasingly the bulk power system.

#### 1.3 Key Concepts

*   **Synchronized Measurements:** Measurements taken at different locations are time-synchronized using Global Positioning System (GPS) or other precise timing signals. This is crucial for analyzing the phase relationships and relative timing of events across the grid.
*   **Real-time Data:** WAMS collects data with high temporal resolution (e.g., 12-60 samples per second), capturing fast dynamic events.
*   **Phasor Measurement Units (PMUs):** The core sensing devices in WAMS. They measure voltage and current phasors (magnitude and phase angle) at a high sampling rate and time-stamp them accurately.

---

### 2. Architecture of WAMS

#### 2.1 General Architecture

A typical WAMS architecture comprises several key layers:

*   **Field Measurement Layer:**
    *   **Phasor Measurement Units (PMUs):** Installed at substations and key generating stations. They capture synchronized voltage and current phasor data.
    *   **Digital Fault Recorders (DFRs):** Often integrated with PMUs or used as standalone devices to record detailed transient signals during faults.
*   **Communication Network Layer:**
    *   Transmits the synchronized data from PMUs to the central data acquisition and processing center.
    *   Requires high reliability, low latency, and sufficient bandwidth. Technologies like fiber optics, leased lines, and sometimes cellular networks are used.
*   **Data Acquisition and Processing Layer:**
    *   **Remote Terminal Units (RTUs) / Data Concentrators:** May be used to aggregate data from multiple PMUs before sending it to the central system.
    *   **Data Storage:** Databases for storing historical and real-time WAMS data.
    *   **Data Synchronization and Validation:** Ensuring data integrity and accuracy.
*   **Analysis and Control Layer:**
    *   **Central Processing/Analysis Center:** Hosts WAMS software for real-time data analysis, visualization, and alarm generation.
    *   **Operator Interface:** Graphical displays (e.g., SCADA-like displays, geographical maps) for operators to monitor grid conditions.
    *   **Decision Support Systems:** Tools for analyzing system stability and recommending remedial actions.
*   **Remedial Action Scheme (RAS) / Control Layer:**
    *   Automated or semi-automated systems that respond to detected instabilities by implementing corrective actions.

#### 2.2 Architectural Variations

*   **Centralized WAMS:** All data is sent to a single central location for processing and analysis.
*   **Decentralized/Hierarchical WAMS:** Data is processed at regional centers first before being sent to a national or supra-regional center. This can reduce communication load and improve response times for local events.

---

### 3. Components of WAMS

#### 3.1 Phasor Measurement Units (PMUs)

*   **Function:** Measure voltage and current phasors (magnitude and phase angle) at power system buses.
*   **Key Features:**
    *   **High Sampling Rate:** Typically 12 to 60 samples per second (or even higher).
    *   **Time Synchronization:** Uses GPS receivers to align measurements with Coordinated Universal Time (UTC). This allows for precise phase comparisons across geographically dispersed locations.
    *   **Data Formatting:** Adheres to standards like IEEE C37.118 for data reporting.
*   **Example:** A PMU at a substation measures the voltage phasor at that bus and the current phasors of all connected lines.

#### 3.2 Global Positioning System (GPS) Receivers

*   **Function:** Provide highly accurate time signals (UTC) to PMUs.
*   **Importance:** Essential for synchronizing measurements from different locations. Without GPS, the phase angle information would be meaningless for wide-area analysis.

#### 3.3 Communication Network

*   **Purpose:** To reliably transport synchronized phasor data from PMUs to the central analysis center.
*   **Requirements:**
    *   **Bandwidth:** Sufficient to handle the data streams from multiple PMUs.
    *   **Latency:** Low latency is critical for real-time applications.
    *   **Reliability:** High availability and fault tolerance.
    *   **Security:** Protection against cyber-attacks.
*   **Technologies:** Fiber optic cables, microwave links, high-speed leased lines.

#### 3.4 Data Concentrators/Remote Terminal Units (RTUs)

*   **Function:** Aggregate data from multiple PMUs in a local area and forward it to the central system.
*   **Benefits:** Can reduce the number of direct connections to the central system and perform some local pre-processing.

#### 3.5 Central Analysis and Control Center (WAMS Server/Workstation)

*   **Function:**
    *   Receives and stores WAMS data.
    *   Performs real-time analysis of voltage and frequency stability, power oscillations, and other dynamic events.
    *   Generates alarms and alerts for operators.
    *   Provides visualization tools for system status.
    *   May host or interface with Remedial Action Schemes (RAS).
*   **Software:** Specialized WAMS software packages are used for data visualization, analysis, and event detection.

#### 3.6 User Interfaces and Visualization Tools

*   **Function:** Present the analyzed data and system status to operators in an understandable format.
*   **Types:**
    *   Geographical maps showing real-time voltage, phase angles, and power flows.
    *   Time-series plots of key parameters.
    *   Event logs and alarm displays.

#### 3.7 Remedial Action Schemes (RAS)

*   **Function:** Automatically or semi-automatically implement corrective actions when instability or critical conditions are detected by WAMS.
*   **Details:** Covered in Section 6.

---

### 4. Applications of WAMS

WAMS provides real-time visibility that enables a wide range of advanced grid applications.

#### 4.1 Voltage Stability Assessment

*   **Concept:** Voltage stability refers to the ability of the power system to maintain acceptable voltage levels under varying load conditions and disturbances. Localized voltage collapse can lead to widespread outages.
*   **WAMS Role:**
    *   Monitors voltage magnitudes and phase angles at critical buses across the system in real-time.
    *   Detects voltage sags and trends that indicate approaching voltage instability.
    *   Calculates indicators like voltage stability margins or sensitivities.
*   **Example:** If WAMS detects a significant drop in voltage magnitude and a widening phase angle difference between two key buses during a period of high load, it can flag a potential voltage stability issue. (Refer to Borlase, Chapter 5 for detailed stability analysis).

#### 4.2 Frequency Stability Assessment

*   **Concept:** Frequency stability is the ability of the power system to maintain synchronism and acceptable frequency levels following a disturbance, especially a loss of generation or a major load shedding event.
*   **WAMS Role:**
    *   Measures system frequency in real-time at multiple locations.
    *   Detects rapid frequency deviations, indicating an imbalance between generation and load.
    *   Monitors the rate of change of frequency (RoCoF), which is a critical indicator of system inertia and stability.
    *   Can identify areas of frequency deviation and the spread of instability.
*   **Example:** Following a large generator trip, WAMS can observe the system-wide frequency drop and its recovery rate. If the frequency continues to fall despite load shedding actions, it indicates a serious frequency stability problem. (Refer to Momoh, Chapter 7 on power system dynamics).

#### 4.3 Power Oscillation Assessment (Inter-area Oscillations)

*   **Concept:** Power oscillations are rhythmic variations in power flow and voltage that can occur between different areas of a large interconnected power system. These can be caused by generator rotor swings, line outages, or control system interactions. Uncontrolled oscillations can lead to tripping of transmission lines or generators, and ultimately widespread blackouts.
*   **WAMS Role:**
    *   Detects and tracks low-frequency oscillations (typically 0.1-2 Hz) by analyzing the phase angle differences between widely separated PMUs.
    *   Identifies the modes of oscillation (which parts of the system are oscillating together).
    *   Quantifies the damping of these oscillations.
    *   Provides early warning of deteriorating oscillation damping.
*   **Example:** WAMS can identify oscillations between two large geographical regions of the grid, showing how power flow between them is oscillating at a frequency of 0.5 Hz. If the damping of these oscillations is found to be low and decreasing, WAMS can trigger countermeasures. (Refer to Ekanayake et al., Chapter 8 on power system dynamics and control).

#### 4.4 Congestion Management

*   **Concept:** Congestion occurs when the power flow on transmission lines exceeds their thermal or stability limits.
*   **WAMS Role:**
    *   Provides real-time monitoring of line flows and voltage magnitudes.
    *   Helps identify the onset of congestion by observing increasing line loading and potential voltage drops.
    *   Supports dynamic line rating (DLR) applications, where line limits are adjusted based on real-time conditions (e.g., ambient temperature).

#### 4.5 Improved Fault Detection and Location

*   While DFRs are primary for detailed fault analysis, WAMS can complement this by identifying the electrical signatures of faults across the network, aiding in quicker assessment of the system's post-fault condition.

#### 4.6 Situational Awareness for Operators

*   WAMS provides a comprehensive, real-time view of the entire interconnected grid, enabling operators to understand the system's state and anticipate potential problems.

---

### 5. Communication Needs of WAMS

#### 5.1 Requirements for WAMS Communication

*   **High Time Synchronization Accuracy:** Essential for phase angle measurements. Relies on GPS or equivalent time sources.
*   **High Data Throughput:** PMUs generate significant amounts of data at high sampling rates. The communication network must handle this efficiently.
*   **Low Latency:** For real-time analysis and rapid control actions, data must be delivered with minimal delay. Sub-second latency is often required.
*   **High Reliability and Availability:** The communication network is a critical infrastructure component; it must be highly reliable and available to ensure continuous monitoring.
*   **Robustness:** Ability to withstand noise and interference.
*   **Security:** Protection against unauthorized access, data tampering, and denial-of-service attacks. Cybersecurity is paramount for WAMS data, as compromised data can lead to incorrect decisions or malicious control actions. (Refer to Barker et al., Chapter 4 on network infrastructure and security).
*   **Scalability:** The ability to add more PMUs and data sources as the grid evolves.

#### 5.2 Communication Technologies Used

*   **Fiber Optic Networks:** Offer high bandwidth, low latency, and immunity to electromagnetic interference, making them ideal for primary WAMS communication.
*   **Leased Lines (e.g., SONET/SDH):** Provide dedicated, reliable communication channels.
*   **Public Networks (with enhancements):**
    *   **MPLS (Multiprotocol Label Switching):** Can provide Quality of Service (QoS) guarantees and traffic engineering.
    *   **Cellular Networks (4G/5G):** Increasingly being explored for WAMS, especially for distributed renewable integration, but require careful consideration of latency, reliability, and security.
*   **Protocols:**
    *   **IEEE C37.118:** The standard for synchrophasor data exchange.
    *   **IEC 61850:** A suite of standards for substation automation, which can also be leveraged for WAMS data communication within substations.

#### 5.3 Challenges in WAMS Communication

*   **Cost:** Deploying high-speed, reliable communication networks across vast geographical areas can be expensive.
*   **Legacy Infrastructure:** Integrating WAMS communication with existing utility communication systems can be complex.
*   **Cybersecurity:** Ensuring the security of data transmitted over potentially vulnerable networks.
*   **Data Volume Management:** Handling and processing the large amounts of data generated.

---

### 6. Remedial Action Scheme (RAS)

#### 6.1 Definition and Purpose of RAS

*   **Definition:** A Remedial Action Scheme (RAS), also known as an Emergency Control Scheme or Special Protection Scheme, is a pre-defined set of automated actions designed to detect and mitigate abnormal power system conditions that could lead to instability or collapse.
*   **Purpose:**
    *   To rapidly restore the power system to a stable operating state after a disturbance.
    *   To prevent cascading failures and widespread blackouts.
    *   To protect critical grid infrastructure.

#### 6.2 Role of WAMS in RAS

*   **Triggering Mechanism:** WAMS provides the real-time, synchronized data that acts as the "eyes" for the RAS. When WAMS detects specific pre-defined conditions (e.g., low frequency, severe voltage sag, high rate of change of frequency, power oscillations above a threshold), it triggers the RAS.
*   **Decision Support:** WAMS analysis can help determine the most appropriate action from the RAS.
*   **Monitoring Effectiveness:** WAMS can monitor the impact of RAS actions in real-time to ensure they are having the desired effect.

#### 6.3 Types of Remedial Actions Implemented by RAS

*   **Load Shedding:** Rapidly disconnecting pre-identified blocks of load to balance generation and demand when frequency drops.
    *   **Underfrequency Load Shedding (UFLS):** The most common type, triggered by low frequency.
*   **Generator Load Shedding/Curtailment:** Rapidly reducing the output of generating units.
*   **Transmission Line Switching:**
    *   **Line Re-closing:** Attempting to re-energize a line that tripped due to a temporary fault.
    *   **Line Tripping/Outage:** Isolating a line that is overloaded or contributing to instability.
    *   **Dynamic Line Rating Activation:** Adjusting line limits based on WAMS-provided thermal conditions.
*   **Controlled Islanding:** Intentionally splitting the grid into smaller, stable "islands" to prevent the propagation of a disturbance. This is a last resort measure.
*   **Fast Valving:** Rapidly reducing the steam flow to turbine generators to reduce their power output and prevent mechanical stress.
*   **Brake Resistors/Dynamic Braking:** Actively dissipating energy in resistors connected to the grid to absorb excess power and stabilize generators.

#### 6.4 Design and Implementation of RAS

*   **Logic:** Based on pre-defined thresholds and event sequences derived from power system studies (e.g., transient stability simulations).
*   **Location:** Actions can be initiated at remote substations or generating stations, often triggered by signals from a central WAMS or local detection.
*   **Coordination:** Crucial to ensure that actions taken in one part of the system do not exacerbate problems elsewhere.
*   **Testing and Maintenance:** Regular testing is essential to ensure the reliability and effectiveness of RAS.

#### 6.5 Example of a WAMS-triggered RAS

*   **Scenario:** A large generator trips offline unexpectedly, causing a sudden imbalance and a rapid drop in system frequency.
*   **WAMS Action:** WAMS detects the frequency drop and calculates the Rate of Change of Frequency (RoCoF). If the RoCoF exceeds a pre-set threshold, it signals an alert.
*   **RAS Trigger:** The alert from WAMS triggers the Underfrequency Load Shedding (UFLS) RAS.
*   **Remedial Action:** The RAS commands distribution utilities to shed pre-assigned blocks of load in stages as frequency continues to fall. This helps to restore the generation-load balance and prevent a total system collapse. (Refer to Chowdhury, Chapter 6 on protection systems).

---

### 7. Alignment with Course Outcomes

*   **CO1: Explain the basic concept of distributed energy resources, micro-grid and smart grid (Knowledge Level: K2)**
    *   WAMS is a key component of the smart grid infrastructure, enabling enhanced monitoring and control, which is essential for integrating DERs and managing microgrids.
*   **CO2: Choose appropriate Information and Communication Technology (ICT) in smart grid (Knowledge Level: K2)**
    *   The notes detail the specific ICT requirements for WAMS (bandwidth, latency, reliability, security) and the technologies used (fiber optics, MPLS, IEEE C37.118), enabling informed choices.
*   **CO3: Select infrastructure and technologies for consumer domain of smart grid (Knowledge Level: K2)**
    *   While WAMS primarily focuses on the transmission network, its data can indirectly inform decisions impacting the consumer domain, such as demand response programs initiated due to stability concerns.
*   **CO4: Select infrastructure and technologies for smart substation and distribution automation (Knowledge Level: K2)**
    *   PMUs are installed at substations, and WAMS data is crucial for advanced substation automation functions and the control actions of distribution automation schemes (e.g., UFLS).
*   **CO5: Formulate cloud computing infrastructure for smart grid considering cyber security (Knowledge Level: K3)**
    *   WAMS data can be stored and analyzed in cloud environments. The notes emphasize the cybersecurity needs of WAMS, which are directly relevant to formulating secure cloud infrastructures.
*   **CO6: Categorize power quality issues and appraise it in smart grid context (Knowledge Level: K2)**
    *   WAMS directly addresses power quality issues related to voltage and frequency stability, oscillations, and disturbances. Its application in assessing these is detailed.

---

### 8. Important Points to Remember

*   **Synchronization is Key:** The accuracy of phase angle measurements, enabled by GPS, is fundamental to WAMS.
*   **Real-time Data:** WAMS provides high-speed, synchronized data for dynamic analysis.
*   **PMUs are the Sensing Devices:** They measure voltage and current phasors.
*   **Communication is Critical:** The network must be reliable, low-latency, and secure.
*   **Applications:** Voltage stability, frequency stability, and power oscillations are primary areas of application.
*   **RAS Integration:** WAMS acts as the trigger and monitoring system for Remedial Action Schemes.
*   **Cybersecurity:** Protecting WAMS data and systems is paramount.
*   **WAMS vs. SCADA:** WAMS provides much higher time resolution and synchronized phase information compared to traditional SCADA systems.

---

### 9. Practice Questions and Answers

**Question 1:** What is the primary function of a Phasor Measurement Unit (PMU) in a Wide Area Monitoring System (WAMS)?
**Answer:** A PMU measures synchronized voltage and current phasors (magnitude and phase angle) at a high sampling rate and time-stamps them accurately, typically using GPS signals.

**Question 2:** List three critical requirements for the communication network in a WAMS.
**Answer:** Any three of the following: High time synchronization accuracy, high data throughput, low latency, high reliability/availability, robustness, and security.

**Question 3:** Explain how WAMS contributes to assessing power oscillation stability.
**Answer:** WAMS monitors the phase angle differences between widely separated locations in real-time. By analyzing these phase angles, it can detect and track low-frequency power oscillations, identify their modes, and assess their damping. This allows operators to identify deteriorating stability conditions before they lead to major disturbances.

**Question 4:** What is a Remedial Action Scheme (RAS) and what role does WAMS play in its operation?
**Answer:** A RAS is an automated system designed to detect and mitigate abnormal power system conditions to prevent instability. WAMS provides the real-time, synchronized data that detects these abnormal conditions (e.g., low frequency, voltage sags), acting as the trigger for the RAS to initiate corrective actions like load shedding or generator adjustments.

**Question 5:** Why is time synchronization crucial for WAMS, and what technology is typically used to achieve it?
**Answer:** Time synchronization is crucial because WAMS relies on comparing phase angles of voltage and current at different locations. Without accurate time synchronization, these phase angle comparisons would be meaningless. GPS (Global Positioning System) receivers are typically used to provide highly accurate time signals to PMUs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 10. References

*   **Borlase, S.** (2nd ed.). *Smart Grid Infrastructure Technology and Solutions*. CRC Press. (Relevant Chapters: e.g., Power System Stability and Control, Monitoring and Control Architectures).
*   **Momoh, J.** (2012). *Smart Grid: Fundamentals of Design and Analysis*. Wiley. (Relevant Chapters: e.g., Power System Dynamics and Stability, SCADA and Power System Monitoring).
*   **Ekanayake, J., Liyanage, K., Wu, J., Yokohama, A., & Jenkins, N.** (2012). *Smart Grids Technology and Applications*. Wiley. (Relevant Chapters: e.g., Power System Control and Stability, Phasor Measurement Units and WAMS).
*   **Barker, P., Preston, R., & Price, R. F.** (2012). *Cybersecurity for the Electric Smart Grid: Elements and Considerations*. Nova Science Publishers Inc. (Relevant Chapters: e.g., Network Infrastructure Security, Communication Protocols).
*   **Chowdhury, S.** (2009). *Microgrids and Active Distribution Networks*. Institution of Engineering and Technology. (Relevant Chapters: e.g., Protection Systems in Power Networks).

---
**(End of Module 2, Topic: WAMS, Control and Protection Systems)**