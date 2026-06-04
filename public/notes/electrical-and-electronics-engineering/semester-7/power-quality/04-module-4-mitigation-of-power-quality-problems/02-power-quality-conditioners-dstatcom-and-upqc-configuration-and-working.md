---
title: "Power quality conditioners - DSTATCOM and UPQC - Configuration and working"
subject: "POWER QUALITY"
module: "Module 4: Mitigation of Power quality problems  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3697d"
status: "completed"
scrapedAt: "2026-05-23T16:39:00.894Z"
---
# Power Quality: Module 4 - Mitigation of Power Quality Problems
## Topic: Power Quality Conditioners - DSTATCOM and UPQC - Configuration and Working

---

### Introduction

Power quality conditioners are devices designed to actively compensate for various power quality issues in electrical systems. This module focuses on two prominent active conditioners: the **Distribution Static Synchronous Compensator (DSTATCOM)** and the **Unified Power Quality Conditioner (UPQC)**. These devices are crucial for maintaining the quality and reliability of power supplied to sensitive loads.

---

### 1. DSTATCOM (Distribution Static Synchronous Compensator)

**Definition:** DSTATCOM is a custom power device that utilizes a Voltage Source Converter (VSC) to inject compensating voltage or current into the distribution network. It operates in parallel with the load and compensates for voltage sags, swells, harmonics, and unbalance.

**Learning Outcomes Covered:**
*   **CO1 (K2):** Understanding the role of DSTATCOM in mitigating voltage sags, swells, and other disturbances.
*   **CO4 (K2):** Examining DSTATCOM as a mitigation technique.

**Course Outcomes Alignment:**
*   **CO1 (K2):** DSTATCOM directly addresses voltage variations (sags/swells) as sources of power quality problems.
*   **CO4 (K2):** DSTATCOM is a key active mitigation technique for voltage quality issues.

**Key Concepts and Definitions:**
*   **Voltage Source Converter (VSC):** A power electronic converter that generates a sinusoidal AC voltage from a DC input. This is the core component of a DSTATCOM.
*   **DC Capacitor:** Stores energy to provide the DC voltage for the VSC.
*   **Inductor (Series Reactor):** Connects the VSC to the distribution system. It acts as a filter and limits the rate of change of current.
*   **Switching Devices:** Typically Insulated Gate Bipolar Transistors (IGBTs) or MOSFETs used in the VSC for voltage generation.
*   **Control System:** Processes the system voltage and load current to generate the appropriate switching signals for the VSC.

**Configuration:**
The basic DSTATCOM configuration consists of:
1.  **Voltage Source Converter (VSC):** Usually a three-phase, three-leg or three-phase, four-leg VSC.
2.  **DC Energy Storage:** A capacitor (or sometimes an energy storage system like batteries) to maintain a stable DC bus voltage.
3.  **Series Inductor (Shunt Reactor):** Connected in series with the VSC output to interface with the AC system. This inductor helps in filtering switching harmonics and provides a path for current exchange.
4.  **Control Circuitry:** Based on microprocessors, DSPs, or FPGAs, responsible for sensing the system voltage and current, and generating control signals for the VSC.

**(Refer to Dugan et al. (2012), Chapter 7, for detailed VSC topologies.)**

```
      +---------------------+
      |       AC System     |
      |      (Load)         |
      +----------+----------+
                 |
                 |
             --- L --- (Series Inductor)
            /         \
           /           \
      +---+----+     +----+---+
      | VSC    |-----| DC     |
      |        |     | Cap    |
      +--------+     +--------+
```

**Working Principle:**
DSTATCOM injects a voltage (or current) that is synchronized with the grid voltage. It senses the voltage at the Point of Common Coupling (PCC) and generates a compensating voltage.

*   **Voltage Sag Compensation:** If a voltage sag occurs, the DSTATCOM injects a voltage in phase with the grid voltage. This injected voltage effectively boosts the voltage at the PCC, restoring it to the nominal level. The magnitude and phase of the injected voltage are controlled to counteract the sag.
*   **Voltage Swell Compensation:** For voltage swells, the DSTATCOM injects a voltage that is 180 degrees out of phase with the excessive voltage, thereby reducing it to the nominal level.
*   **Harmonic Compensation:** DSTATCOM can generate harmonic currents that are equal and opposite to the harmonic currents drawn by the non-linear loads. This effectively cancels out the harmonics injected into the grid by the load, improving the current waveform.
*   **Reactive Power Compensation:** DSTATCOM can also provide or absorb reactive power to regulate the voltage and improve power factor.

**Control Strategies:**
*   **Instantaneous Voltage Control:** The control system continuously monitors the PCC voltage and generates a compensating voltage to maintain it at a desired level.
*   **Harmonic Current Injection:** To cancel harmonics, the controller detects the harmonic components of the load current and generates corresponding harmonic currents from the VSC, 180 degrees out of phase.
*   **PQ Control:** The DSTATCOM can be controlled to operate at a specific power factor or to deliver a certain amount of active/reactive power.

**(Refer to Sankaran (2002), Chapter 10, for control strategies of DSTATCOM.)**

**Important Points to Remember:**
*   DSTATCOM is a **shunt** connected device.
*   It injects **voltage** into the system.
*   Primary role: Voltage regulation (sags, swells), harmonic current cancellation.
*   Fast response time compared to passive filters.

**Practice Question 1:**
A DSTATCOM is connected to a distribution feeder experiencing a voltage sag. Describe how the DSTATCOM injects a compensating voltage to mitigate the sag, referring to the phase relationship between the injected voltage and the grid voltage.

**Answer:**
During a voltage sag, the DSTATCOM senses the reduced voltage at the PCC. The control system then calculates the required compensating voltage to restore the PCC voltage to its nominal value. This compensating voltage is injected in **phase** with the existing (sagged) grid voltage. By injecting this voltage, the resultant voltage at the PCC is increased, effectively counteracting the voltage sag and bringing the voltage closer to its intended level. The magnitude of the injected voltage is controlled to match the deficit in the grid voltage.

---

### 2. UPQC (Unified Power Quality Conditioner)

**Definition:** UPQC is a hybrid power conditioner that combines the functionalities of a DSTATCOM (shunt compensator) and a series active filter. It is connected in **shunt** to the PCC, but it has both **shunt** and **series** connected active converters that work in coordination to mitigate a wide range of power quality issues simultaneously.

**Learning Outcomes Covered:**
*   **CO1 (K2):** Understanding UPQC's ability to compensate for voltage and current-related power quality problems.
*   **CO4 (K2):** Examining UPQC as a comprehensive mitigation technique.

**Course Outcomes Alignment:**
*   **CO1 (K2):** UPQC addresses both voltage-related (sags, swells) and current-related (harmonics, unbalance) power quality problems.
*   **CO4 (K2):** UPQC is a sophisticated active mitigation technique that combines multiple compensation strategies.

**Key Concepts and Definitions:**
*   **Shunt Converter:** Similar to DSTATCOM, it compensates for current-related issues like harmonics and reactive power.
*   **Series Converter:** Compensates for voltage-related issues like sags, swells, and voltage unbalance.
*   **Back-to-Back Converter:** A common configuration where two VSCs are connected via a common DC bus.
*   **DC Bus:** A common DC link that provides energy transfer between the shunt and series converters.
*   **PCC (Point of Common Coupling):** The point where the UPQC is connected to the distribution system.

**(Refer to Bhim Singh et al. (2015), Chapter 5, for detailed explanation of UPQC topologies and working.)**

**Configuration:**
A typical UPQC consists of:
1.  **Shunt Active Filter (Shunt Converter):** Connected in shunt with the load. Its primary function is to inject current to cancel current harmonics, unbalance, and reactive power.
2.  **Series Active Filter (Series Converter):** Connected in series with the PCC, typically using a series transformer or a direct series connection. Its primary function is to inject voltage to compensate for voltage sags, swells, and voltage unbalance.
3.  **DC Link Capacitor:** Connects the shunt and series converters, maintaining a stable DC voltage. This capacitor allows energy exchange between the two converters.
4.  **Control System:** A sophisticated control system orchestrates the operation of both converters to achieve the desired power quality compensation.

```
        AC System
           |
           |
     ------o------ (PCC)
     |           |
     |           |
 --- Ls ---   --- Rs --- (Series Converter)
 /         \   /        \
/           \ /          \
|           |o|          |
|           | |          |
|           | |          |
|           | |          |
|           | |          |
|     +-----+-----+      |
|     | DC Link   |      |
|     | Capacitor |      |
|     +-----------+      |
|                      |
|                      |
+----------------------+
|                      |
|     Shunt Converter  |
|                      |
+----------------------+
     |
     |
  Load
```
*(Note: Rs and Ls represent the series impedance of the series converter and its interfacing inductor, respectively. The diagram is a simplified representation.)*

**Working Principle:**
The UPQC operates by coordinating the actions of its shunt and series converters.

*   **Shunt Converter's Role:**
    *   **Harmonic Compensation:** Detects harmonic currents drawn by the non-linear load and injects equal and opposite harmonic currents to cancel them out from the source current.
    *   **Reactive Power Compensation:** Supplies or absorbs reactive power to maintain a unity power factor at the PCC or to control the voltage.
    *   **Load Balancing:** For unbalanced loads, the shunt converter can inject currents to balance the three-phase currents drawn from the source.

*   **Series Converter's Role:**
    *   **Voltage Sag/Swell Compensation:** Senses the voltage at the PCC. If a sag occurs, it injects a voltage in phase with the grid voltage to boost it. If a swell occurs, it injects a voltage 180 degrees out of phase to reduce it.
    *   **Voltage Unbalance Compensation:** If the source voltages are unbalanced, the series converter injects voltages to make the load voltages balanced.
    *   **Harmonic Voltage Compensation:** Can also inject voltages to cancel any harmonic voltages present in the supply.

**Simultaneous Compensation:** The key advantage of UPQC is its ability to compensate for both voltage and current disturbances simultaneously. For example, if there is a voltage sag and the load draws harmonic currents, the series converter will address the sag, while the shunt converter will address the harmonic currents. The DC link allows energy transfer between the converters, enabling coordinated operation.

**(Refer to Bollen (1999), Chapter 6, for principles of active filtering and compensation strategies.)**

**Control Strategies:**
*   **Power Balance Approach:** The control strategy ensures that the real power drawn from the source is equal to the real power consumed by the load plus the losses in the UPQC.
*   **Load Voltage Regulation:** The series converter aims to maintain a constant and balanced voltage at the load terminals.
*   **Source Current Shaping:** The shunt converter aims to draw a clean, sinusoidal, and balanced current from the source, typically at unity power factor.
*   **PQ Control:** Both converters can be controlled to manage active and reactive power flow.

**Important Points to Remember:**
*   UPQC has both **series** and **shunt** active converters.
*   It compensates for both **voltage** and **current** disturbances.
*   The **DC link** is crucial for energy transfer and coordination.
*   Provides comprehensive power quality improvement.
*   More complex and expensive than DSTATCOM.

**Practice Question 2:**
Explain the complementary roles of the shunt and series converters in a UPQC when compensating for a voltage sag occurring simultaneously with a non-linear load that draws harmonic currents.

**Answer:**
In a UPQC facing a voltage sag and a non-linear load:
*   The **series converter** will act to mitigate the **voltage sag**. It will sense the reduced voltage at the PCC and inject a compensating voltage that is in phase with the grid voltage. This injected voltage will boost the voltage at the load terminals, restoring it to the desired nominal level.
*   The **shunt converter** will act to mitigate the **current harmonics** drawn by the non-linear load. It will detect the harmonic components present in the load current and inject equal and opposite harmonic currents. This cancels out the harmonic currents flowing back to the source, ensuring that the source current remains sinusoidal.

The DC link connects these two converters, allowing energy to be transferred if needed. For instance, during a voltage sag, the series converter might need to draw some power from the DC link to inject the compensating voltage. The shunt converter, by drawing clean power from the source (or even injecting some power back if the load is capacitive), can help maintain the DC link voltage.

---

### Comparison: DSTATCOM vs. UPQC

| Feature          | DSTATCOM                               | UPQC                                             |
| :--------------- | :------------------------------------- | :----------------------------------------------- |
| **Configuration** | Shunt connected                        | Shunt and Series connected                       |
| **Compensation** | Voltage sags, swells, harmonics (current), reactive power | Voltage sags, swells, unbalance, harmonics (voltage & current), reactive power |
| **Complexity**   | Less complex                           | More complex                                     |
| **Cost**         | Lower                                  | Higher                                           |
| **Response**     | Fast                                   | Fast                                             |
| **Application**  | Voltage support, flicker mitigation, harmonic current cancellation | Comprehensive power quality improvement, sensitive loads |
| **Textbook Reference** | Dugan et al. (2012), Sankaran (2002) | Bhim Singh et al. (2015), Bollen (1999)          |

**Important Point to Remember:**
The choice between DSTATCOM and UPQC depends on the specific power quality problems to be addressed and the economic considerations. UPQC offers a more comprehensive solution for multiple simultaneous issues.

---

### Conclusion

DSTATCOM and UPQC are advanced power electronic solutions for mitigating power quality problems. DSTATCOM excels in voltage regulation and harmonic current cancellation, while UPQC offers a broader range of compensation by combining shunt and series active filtering capabilities. Understanding their configurations and working principles is crucial for designing effective power quality improvement systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading and References

*   **Dugan, R. C., Me Granaghen, M. F., & Beaty, H. W. (2012).** *Electrical Power System Quality* (3rd ed.). McGraw-Hill. (Chapter 7 discusses custom power devices like STATCOM and its variations.)
*   **Sankaran, C. (2002).** *Power Quality*. CRC Press. (Chapter 10 provides an in-depth analysis of DSTATCOM and its control.)
*   **Bollen, M. H. J. (1999).** *Understanding Power Quality Problems*. Wiley-IEEE Press. (Chapter 6 covers active filtering and compensation techniques that form the basis of UPQC.)
*   **Singh, B., Chandra, A., & Al-Haddad, K. (2015).** *Power Quality Problems and Mitigation Techniques*. John Wiley and Sons Ltd. (Chapter 5 is dedicated to Unified Power Quality Conditioners.)

---

### Practice Questions (Module 4 - Topic Specific)

1.  **[CO1, CO4, K2]** What is the primary difference in the compensation capabilities between a DSTATCOM and a UPQC?
2.  **[CO4, K2]** Describe the two main converter stages in a UPQC and their respective roles.
3.  **[CO1, K2]** How does a DSTATCOM compensate for a voltage sag at the Point of Common Coupling (PCC)?
4.  **[CO4, K2]** A manufacturing plant has a non-linear load that draws significant harmonic currents, and the incoming supply experiences occasional voltage swells. Which conditioner, DSTATCOM or UPQC, would be more suitable, and why?
5.  **[K2]** What is the function of the DC link capacitor in a UPQC?

---

### Answers to Practice Questions (Module 4 - Topic Specific)

1.  **Answer:** The primary difference lies in their compensation capabilities. A **DSTATCOM** primarily compensates for **voltage deviations** (sags, swells), **reactive power**, and **harmonic currents** drawn by the load. A **UPQC**, on the other hand, offers more comprehensive compensation by addressing both **voltage disturbances** (sags, swells, unbalance) through its series converter and **current disturbances** (harmonics, unbalance, reactive power) through its shunt converter, simultaneously.
2.  **Answer:** A UPQC typically comprises two main converter stages:
    *   **Shunt Converter:** Connected in parallel with the load, its role is to draw a clean, sinusoidal current from the source, compensate for reactive power, and cancel harmonic currents injected by the load.
    *   **Series Converter:** Connected in series with the load (usually via a transformer), its role is to inject a voltage that compensates for voltage sags, swells, and voltage unbalances present in the supply.
3.  **Answer:** When a voltage sag occurs, a DSTATCOM senses the reduced voltage at the PCC. Its control system then commands the Voltage Source Converter (VSC) to inject a compensating voltage that is in phase with the grid voltage. This injected voltage effectively "boosts" the voltage at the PCC, thereby restoring the voltage to its nominal level and ensuring stable operation of connected loads.
4.  **Answer:** A **UPQC** would be more suitable. The plant experiences both harmonic currents (from the non-linear load) and voltage swells. The **shunt converter** of the UPQC would handle the harmonic current compensation, ensuring a clean source current. The **series converter** of the UPQC would address the voltage swells by injecting a counteracting voltage. A DSTATCOM could only address the harmonic currents or the voltage swells, but not both simultaneously with the same effectiveness as a UPQC.
5.  **Answer:** The DC link capacitor in a UPQC serves as a common DC bus that connects the shunt and series converters. Its primary function is to provide a stable DC voltage for the operation of both converters and to facilitate the exchange of energy between them. This energy transfer is crucial for coordinated operation, allowing the series converter to draw power when injecting voltage for sag compensation, or for the shunt converter to draw power to inject harmonic currents.