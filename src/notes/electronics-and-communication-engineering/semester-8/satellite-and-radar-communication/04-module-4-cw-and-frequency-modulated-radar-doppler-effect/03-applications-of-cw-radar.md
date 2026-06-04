---
title: "Applications of CW radar."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8b9"
status: "completed"
scrapedAt: "2026-05-23T19:30:29.347Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: Applications of CW Radar

---

**Learning Outcomes Covered:**

*   Illustrate the principles of satellite communication (CO1 - K2) - *While not directly about satellites, understanding radar applications provides context for its role in various communication and monitoring systems, some of which interact with satellites.*
*   Illustrate Radar Fundamentals like Radar Equation and Applications (CO3 - K2) - *This topic directly addresses radar applications.*
*   Compare various types of Radars and tracking techniques (CO4 - K2) - *Understanding CW radar applications helps in comparing it with other radar types and their suitability for different tasks.*

---

### **1. Introduction to CW Radar**

Continuous Wave (CW) radar transmits a continuous radio frequency signal. Unlike pulsed radar, it does not transmit in pulses. This continuous transmission leads to several distinct characteristics and applications.

**Key Concept:** The fundamental principle of CW radar is that it relies on the Doppler shift for target detection and measurement.

**1.1 How CW Radar Works (Briefly)**

*   **Continuous Transmission:** A single frequency signal is transmitted continuously.
*   **Reception:** The radar simultaneously transmits and receives on the same or very closely spaced frequencies.
*   **Doppler Effect:** A moving target will cause a frequency shift in the received signal due to the Doppler effect. This shift is proportional to the target's radial velocity.
*   **Detection:** By mixing the transmitted and received signals, the Doppler frequency shift can be isolated. This shift is then used to determine the target's velocity.
*   **Limitation:** Simple CW radar suffers from "clutter" – strong reflections from stationary objects (like the ground, buildings) which can mask the Doppler shift from moving targets. This is overcome in **Frequency Modulated Continuous Wave (FMCW) radar**, which is also covered in this module.

**Reference:** Skolnik (2017) provides a foundational understanding of CW radar principles.

---

### **2. Applications of CW Radar**

CW radar, despite its limitations in range measurement for simple configurations, excels in applications where **velocity measurement** is the primary objective and stationary clutter can be managed or is not a significant issue.

---

#### **2.1 Speed Measurement (Automotive and Law Enforcement)**

*   **Princ:** The Doppler shift of the reflected signal from a moving vehicle is directly proportional to its speed relative to the radar.
*   **Mechanism:**
    *   The radar transmits a known, constant frequency.
    *   The reflected signal from a speeding car is received.
    *   This received signal is mixed with the transmitted signal.
    *   The resulting intermediate frequency (IF) is the Doppler frequency ($f_d$).
    *   The speed ($v$) is calculated using the Doppler equation: $f_d = \frac{2R v}{\lambda}$, where $R$ is the radar range and $\lambda$ is the wavelength. Since the radar is typically stationary relative to the ground, the target's radial velocity is its speed.
*   **Advantages:**
    *   **Simplicity:** Relatively simple to design and build.
    *   **Cost-effective:** Generally less expensive than pulsed radar systems.
    *   **Continuous Measurement:** Provides real-time speed information.
*   **Examples:**
    *   **Police speed guns:** Widely used by law enforcement to measure the speed of vehicles.
    *   **Automotive cruise control systems:** Some advanced adaptive cruise control systems use CW radar to monitor the speed of vehicles ahead.
*   **Handling Clutter:** While simple CW radar has clutter issues, for speed guns, the radar is often directed at a specific vehicle, and the high Doppler shift from a fast-moving vehicle can be distinguished from stationary clutter.

**Important Point:** Simple CW radar cannot directly measure range. Its strength lies in its ability to accurately measure radial velocity.

**Reference:** Edde (2004) and Kinsley & Quegan (1999) discuss the practical implementation of radar for speed measurement.

---

#### **2.2 Motion Detection (Security and Automation)**

*   **Princ:** CW radar can detect the presence of movement within its coverage area. Any motion that causes a Doppler shift will be detected.
*   **Mechanism:**
    *   The radar continuously transmits a signal.
    *   The receiver monitors for any returned signal with a Doppler shift.
    *   If a Doppler shift is detected, it indicates that something is moving within the radar's field of view.
*   **Advantages:**
    *   **Sensitivity to Movement:** Can detect subtle movements.
    *   **Penetration:** Can often penetrate non-metallic barriers like walls and doors, allowing for detection behind them.
    *   **All-weather capability:** Less affected by smoke, fog, or darkness compared to optical sensors.
*   **Examples:**
    *   **Security alarms:** Detecting intruders in buildings or sensitive areas.
    *   **Automatic doors:** Triggering doors to open when a person approaches.
    *   **Lighting control:** Turning lights on or off based on occupancy.
    *   **Industrial automation:** Monitoring for movement in hazardous areas or ensuring machinery is clear.
*   **Reference:** Skolnik (2017) covers general radar applications including motion detection.

---

#### **2.3 Proximity Fuzes for Ammunition**

*   **Princ:** CW radar can be used to sense the distance to a target (like an aircraft or a vehicle) to detonate an explosive charge at the optimal point.
*   **Mechanism:** While simple CW cannot measure range, it can detect the Doppler shift indicating an approaching target. More advanced versions often use FMCW principles to determine range. The key is detecting the *change* in Doppler.
*   **Advantages:**
    *   **Improved Effectiveness:** Detonates the projectile closer to the target, increasing the probability of a hit compared to impact fuzes.
*   **Example:**
    *   **Anti-aircraft artillery (AAA) shells:** These shells are equipped with small radar fuzes that detect the presence of an aircraft and detonate the shell when it's in close proximity, creating a cloud of shrapnel.

**Important Note:** For proximity fuzes, the ability to detect *approaching* targets through Doppler shift is crucial. For precise detonation, FMCW or pulsed Doppler radar is typically employed.

---

#### **2.4 Doppler Navigation and Altimetry**

*   **Princ:** CW Doppler radar can be used to measure ground speed and altitude.
*   **Mechanism:**
    *   **Ground Speed:** By transmitting beams at angles to the ground and measuring the Doppler shift of the reflected signals, the radar can calculate the aircraft's or vehicle's speed relative to the ground.
    *   **Altimetry (especially in helicopters):** A downward-looking CW radar can measure the Doppler shift caused by the relative motion between the radar and the ground. This Doppler shift can be converted to altitude. This is particularly useful for helicopters hovering at low altitudes or during landing.
*   **Advantages:**
    *   **Accurate Ground Speed:** Provides precise ground speed information, which is vital for navigation.
    *   **Low-Altitude Altimetry:** Effective for measuring altitude at very low levels where conventional radio altimeters might struggle.
*   **Examples:**
    *   **Helicopter altimeters:** Used for precise altitude measurement during hovering and landing.
    *   **Inertial Navigation System (INS) augmentation:** Doppler radar data can be used to correct drift in INS.
*   **Reference:** Skolnik (2017) discusses radar for navigation and altimetry.

---

#### **2.5 Scientific and Industrial Applications**

*   **Princ:** Measuring the velocity of moving objects or fluids in various scientific and industrial processes.
*   **Examples:**
    *   **Meteorological radar (dopplerized):** While weather radar is typically pulsed Doppler, the underlying principle of measuring wind speed through Doppler shift is similar. CW radar can be used in simpler weather monitoring applications.
    *   **Industrial flow measurement:** Measuring the speed of materials on conveyor belts or the flow rate of liquids and gases.
    *   **Biomedical applications:** Measuring blood flow velocity in arteries using Doppler ultrasound (a form of radar using ultrasound waves).

---

### **3. Comparison with Other Radar Types (Contextualizing CW Radar Applications)**

Understanding the applications of CW radar highlights its strengths and weaknesses when compared to other radar systems.

| Feature             | Simple CW Radar                                  | Pulsed Radar                                         | FMCW Radar                                         |
| :------------------ | :----------------------------------------------- | :--------------------------------------------------- | :------------------------------------------------- |
| **Primary Strength** | Velocity measurement                             | Range and velocity measurement                       | Range and velocity measurement (especially for short ranges) |
| **Range Measurement** | Cannot measure range directly                    | Measures range via time delay of pulses              | Measures range via frequency difference            |
| **Complexity**      | Low                                              | Moderate to high                                     | Moderate                                           |
| **Clutter Handling**| Susceptible to stationary clutter                | Can mitigate clutter with signal processing (e.g., MTI) | Can distinguish stationary clutter from moving targets using frequency sweep |
| **Applications**    | Speed guns, motion detection, proximity fuzes    | Target tracking, surveillance, weather radar         | Automotive radar (ACC), altimetry, short-range surveillance |
| **Transmitter**     | Continuous Wave                                  | Pulses                                               | Continuous Wave (frequency modulated)              |

**CO4 Alignment:** This comparison directly addresses the course outcome of comparing various types of radars. CW radar's applications are best understood in this comparative context.

---

### **4. Important Points to Remember**

*   **CW radar's core strength is Doppler shift detection for velocity measurement.**
*   **Simple CW radar cannot directly measure range.**
*   **Stationary clutter is a significant challenge for simple CW radar.**
*   **Applications are heavily focused on velocity measurement, motion detection, and proximity sensing.**
*   **FMCW radar is an evolution of CW radar that overcomes the range ambiguity.**
*   **CW radar is generally simpler and more cost-effective for its specific applications.**

---

### **5. Practice Questions and Exercises**

**Question 1:** What is the primary advantage of using a CW radar system for speed measurement compared to a simple range-finding system?

**Question 2:** Explain why simple CW radar systems are not suitable for applications requiring precise range measurement to stationary targets.

**Question 3:** Give two distinct applications of CW radar where the Doppler effect is the key principle for operation.

**Question 4:** How does a police speed gun utilize the Doppler effect? What information does it derive from the received signal?

**Question 5 (Conceptual):** If a CW radar is used to monitor a conveyor belt carrying stationary objects, will it detect a Doppler shift? Why or why not? What if the conveyor belt is moving?

---

### **6. Answers to Practice Questions**

**Answer 1:** The primary advantage of CW radar for speed measurement is its ability to directly and accurately measure the radial velocity of a target by analyzing the Doppler shift in the received signal. While other systems might infer velocity, CW radar's design is optimized for this specific measurement.

**Answer 2:** Simple CW radar transmits and receives continuously. It determines the presence of a target by detecting a Doppler frequency shift in the received signal, which is caused by the target's motion. Stationary targets do not cause a Doppler shift, so their velocity (and hence range via time-of-flight) cannot be directly determined. Systems like pulsed radar measure range by timing the round trip of a transmitted pulse.

**Answer 3:**
1.  **Police Speed Guns:** Detects the Doppler shift from moving vehicles to measure their speed.
2.  **Motion Sensors for Security/Automation:** Detects any movement within its coverage area by identifying Doppler shifts.

**Answer 4:** A police speed gun transmits a continuous radio wave of a known frequency. When this wave reflects off a moving vehicle, its frequency is altered due to the Doppler effect. The speed gun mixes the transmitted and received signals, and the resulting beat frequency is the Doppler frequency. This Doppler frequency is directly proportional to the vehicle's radial velocity (speed relative to the gun). The gun's internal circuitry converts this Doppler frequency into a speed reading.

**Answer 5:**
*   **Stationary Objects on a Conveyor Belt:** No, a CW radar will **not** detect a Doppler shift because there is no relative motion between the radar and the objects. The transmitted and received frequencies will be the same (ignoring minor system imperfections).
*   **Moving Conveyor Belt with Objects:** Yes, a CW radar **will** detect a Doppler shift. The motion of the conveyor belt (and the objects on it) relative to the radar will cause a frequency shift in the reflected signal. This shift will be proportional to the speed of the conveyor belt.

---

This concludes the study notes on the Applications of CW Radar. Understanding these applications reinforces the foundational principles of radar and its diverse uses, aligning with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
