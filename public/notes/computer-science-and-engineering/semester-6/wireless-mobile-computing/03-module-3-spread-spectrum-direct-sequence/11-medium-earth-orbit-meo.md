---
title: "Medium Earth Orbit (MEO)"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb88"
status: "completed"
scrapedAt: "2026-05-20T16:58:03.438Z"
---
## WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum - Direct Sequence - Topic: Medium Earth Orbit (MEO)

**Module Overview:** This module explores spread spectrum techniques, specifically Direct Sequence Spread Spectrum (DSSS), within the context of wireless and mobile computing. This topic focuses on Medium Earth Orbit (MEO) satellites, examining their characteristics, advantages, disadvantages, and applications.

**Learning Outcomes:**

*   Understand the characteristics and advantages of Medium Earth Orbit (MEO) satellites.
*   Understand the disadvantages and limitations of Medium Earth Orbit (MEO) satellites.
*   Describe the common applications of MEO satellite systems (e.g., navigation, communications).
*   Compare and contrast MEO with other satellite orbit types (LEO, GEO).
*   Understand the impact of propagation delay associated with MEO satellites.

---

### 1. Characteristics and Advantages of Medium Earth Orbit (MEO) Satellites

*   **Definition of MEO:** Medium Earth Orbit (MEO) is the region of space around Earth above Low Earth Orbit (LEO) and below Geostationary Orbit (GEO). Typically, MEO satellites orbit at altitudes between **2,000 km and 35,786 km (GEO altitude)**.

*   **Orbital Period:** Satellites in MEO have orbital periods typically ranging from **2 to 8 hours**. This is significantly longer than LEO satellites, reducing the number of satellites needed for global coverage.

*   **Coverage Area:** Compared to LEO, MEO satellites have a larger footprint or coverage area. Each satellite can cover a significantly wider portion of the Earth's surface at any given time.

*   **Advantages:**

    *   **Reduced Number of Satellites for Global Coverage:** Fewer satellites are required compared to LEO constellations to achieve global coverage.  A smaller constellation reduces the overall system cost.
    *   **Lower Propagation Delay compared to GEO:** While still significant, the propagation delay (the time it takes for a signal to travel to the satellite and back) is lower than that of GEO satellites.  This is crucial for real-time applications.
    *   **Greater Signal Strength compared to GEO:** Due to the closer proximity to Earth compared to GEO, the received signal strength is typically stronger, simplifying receiver design and improving data rates.
    *   **Suitable for Mobile Communication:** Provides better coverage than GEO and lower propagation delay than GEO, making it suitable for mobile communications like satellite phones and data services.
    *   **Less susceptibility to orbital decay and atmospheric drag compared to LEO:**  Since MEO satellites are located at higher altitudes than LEO satellites, they experience significantly less atmospheric drag and orbital decay. This leads to longer satellite lifespans.
    *   **Reduced handovers compared to LEO:**  Due to their longer orbital period and broader footprint, users experience fewer handovers from one satellite to another compared to LEO systems.

### 2. Disadvantages and Limitations of Medium Earth Orbit (MEO) Satellites

*   **Higher Propagation Delay than LEO:** The propagation delay is still significant, often in the range of **50-100 milliseconds (one-way)**. This can be noticeable in voice communications and disruptive for some real-time applications.

*   **Higher Power Requirements compared to LEO:**  Transmitting signals to and from MEO satellites requires more power than LEO satellites due to the increased distance.

*   **More Complex Tracking:** Requires more sophisticated tracking and handover mechanisms than GEO (which is stationary relative to the Earth).

*   **Fades and Interferences:**  Similar to other satellite systems, MEO is susceptible to atmospheric fades, rain fades, and interference from other satellite systems or terrestrial sources.

*   **Cost of Satellite Launch and Maintenance:** Launching satellites to MEO altitudes is more expensive than launching to LEO, but less expensive than launching to GEO. Ongoing maintenance and eventual replacement of satellites also contribute to the overall system cost.

*   **Doppler Shift:** The relative motion between the satellite and the ground station causes a Doppler shift in the signal frequency. This shift needs to be compensated for in the receiver to maintain reliable communication.

### 3. Common Applications of MEO Satellite Systems

*   **Navigation Systems:**  The most prominent application of MEO satellites is in **Global Navigation Satellite Systems (GNSS)**, such as:
    *   **GPS (Global Positioning System):**  Developed by the United States.
    *   **Galileo:** Developed by the European Union.
    *   **GLONASS (Global Navigation Satellite System):** Developed by Russia.
    These systems utilize MEO satellites to provide precise positioning, navigation, and timing information to users worldwide.

*   **Mobile Communications:** MEO satellites are used to provide voice and data communication services to mobile users, particularly in areas where terrestrial infrastructure is limited or unavailable.  Examples include:
    *   Satellite phones.
    *   Maritime communications.
    *   Remote area internet access.

*   **Scientific Applications:**  MEO satellites are also used for various scientific purposes, such as:
    *   Space weather monitoring.
    *   Studying the Earth's magnetosphere and radiation belts.
    *   Conducting astronomical observations.

### 4. Comparison and Contrast of MEO with LEO and GEO

| Feature             | LEO (Low Earth Orbit)                                     | MEO (Medium Earth Orbit)                                  | GEO (Geostationary Orbit)                                    |
|----------------------|-----------------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------------|
| Altitude            | 160 km - 2,000 km                                        | 2,000 km - 35,786 km                                    | ~35,786 km                                                   |
| Orbital Period       | ~90 minutes - 2 hours                                     | 2 - 8 hours                                              | ~24 hours (matches Earth's rotation)                         |
| Coverage Area       | Small                                                     | Medium                                                    | Large (covers about 1/3 of the Earth)                         |
| Propagation Delay   | Very Low (~1-10 ms)                                        | Medium (~50-100 ms)                                      | High (~250 ms)                                                |
| Signal Strength      | Strong                                                    | Medium                                                   | Weak                                                          |
| Number of Satellites | Many (for global coverage)                               | Fewer (than LEO, but more than GEO)                       | Few (3 for near global coverage, excluding polar regions) |
| Handovers           | Frequent                                                  | Less Frequent                                             | Infrequent (virtually none)                                   |
| Applications         | Earth observation, imaging, broadband internet            | Navigation, mobile communication, scientific research   | Telecommunications, broadcasting                                |
| Cost                | Relatively lower launch cost but shorter lifespan         | Moderate launch cost and longer lifespan                 | Highest launch cost and longest lifespan                        |

**Key Differences:**

*   **Altitude and Propagation Delay:** The primary differentiating factor is altitude, which directly impacts propagation delay. LEO has the lowest delay, followed by MEO, and then GEO.
*   **Coverage and Satellite Count:** LEO requires a large constellation for global coverage, while GEO needs only a few. MEO provides a compromise in terms of satellite count and coverage area.
*   **Applications:** Each orbit type is suited to different applications based on its characteristics.

### 5. Impact of Propagation Delay Associated with MEO Satellites

*   **Voice Communications:** A noticeable delay in voice communication can make conversations feel unnatural. Echo cancellation techniques are often used to mitigate this issue.
*   **Real-time Applications:** Applications that require immediate feedback, such as online gaming or remote surgery, can be negatively affected by the propagation delay.
*   **Data Throughput:** Propagation delay can impact data throughput, especially in interactive applications. Protocols need to be optimized to account for the delay.
*   **TCP/IP Performance:**  The TCP protocol, which is used for most internet traffic, can be inefficient over satellite links with high propagation delay. TCP optimizations (e.g., TCP acceleration, larger window sizes) are often employed.
*   **Geosynchronous Satellite Orbit (GSO) and MEO Handover:** Handover procedures between satellites in GSO and MEO can be challenging because of the difference in their orbital speeds and propagation delays.

**Important Points to Remember:**

*   MEO offers a balance between LEO and GEO in terms of coverage, propagation delay, and satellite count.
*   MEO is primarily used for navigation systems (GNSS).
*   Propagation delay is a significant consideration when designing MEO-based communication systems.

---

### 6. Practice Questions & Exercises

**Question 1:**

What is the typical altitude range for satellites in Medium Earth Orbit (MEO)?

a) 160 km - 2,000 km
b) 2,000 km - 35,786 km
c) 35,786 km
d) Below 160 km

**Answer:** b) 2,000 km - 35,786 km

**Question 2:**

Which of the following is a major advantage of MEO satellites compared to LEO satellites?

a) Lower propagation delay
b) Stronger signal strength
c) Fewer satellites needed for global coverage
d) Simpler tracking requirements

**Answer:** c) Fewer satellites needed for global coverage

**Question 3:**

Which Global Navigation Satellite System (GNSS) utilizes MEO satellites?

a) Iridium
b) Orbcomm
c) GPS
d) Inmarsat

**Answer:** c) GPS

**Question 4:**

What is the primary disadvantage of MEO satellites compared to LEO satellites?

a) Lower power requirements
b) Less atmospheric drag
c) Higher propagation delay
d) Smaller coverage area

**Answer:** c) Higher propagation delay

**Question 5:**

Explain how the propagation delay in MEO satellite systems can impact voice communication and what mitigation techniques can be used.

**Answer:** Propagation delay in MEO can make voice communication sound unnatural due to the noticeable delay. Echo cancellation techniques can be implemented to reduce the perception of echo and improve the overall conversation quality.  Other techniques involve prediction algorithms at the receiver to estimate the next packet arrival time or pre-fetching data to mask the delay.

**Exercise:**

Compare and contrast the advantages and disadvantages of using MEO satellites versus GEO satellites for providing broadband internet access to remote areas. Consider factors like cost, latency, coverage, and power requirements.
