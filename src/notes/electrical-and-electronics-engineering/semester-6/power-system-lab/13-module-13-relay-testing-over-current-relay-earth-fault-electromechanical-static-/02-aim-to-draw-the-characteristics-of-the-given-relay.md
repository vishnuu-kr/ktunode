---
title: "Aim: To draw the characteristics of the given relay."
subject: "POWER SYSTEM LAB"
module: "Module 13: Relay Testing – Over current Relay / Earth Fault (Electromechanical / Static /Numerical)"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36801"
status: "completed"
scrapedAt: "2026-05-23T16:31:18.640Z"
---
# POWER SYSTEM LAB - Module 13: Relay Testing – Overcurrent Relay / Earth Fault Relay

**Topic Aim:** To draw the characteristics of the given relay.

**Course Outcomes Addressed:**

*   **CO1:** Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3) - *While this lab focuses on physical testing, understanding the relay characteristics is crucial for developing mathematical models that represent their behavior in power system simulations.*
*   **CO2:** Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3) - *This module directly addresses the practical testing of relays to analyze their performance characteristics.*

---

## 1. Introduction to Overcurrent and Earth Fault Relays

**Key Concepts:**

*   **Relay:** A protective device that detects abnormal conditions in a power system and initiates a corrective action, typically by closing or opening a circuit breaker.
*   **Overcurrent Relay:** A relay that operates when the current flowing through it exceeds a predetermined value. It is used for the protection of feeders, transformers, and motors against overloads and short circuits.
*   **Earth Fault Relay (or Ground Fault Relay):** A relay that operates when an imbalance in the current between phases or a flow of current to earth occurs. It is used to protect against insulation failures and short circuits to earth.
*   **Time-Current Characteristics:** A graphical representation of the operating time of a relay as a function of the current flowing through it. This is the primary characteristic we aim to draw in this lab.
*   **Pickup Current (or Threshold Current):** The minimum current at which the relay starts to operate.
*   **Operating Time:** The time taken by the relay from the instant the fault current flows until the relay contacts close (or open, depending on the type).
*   **Discrimination (or Selectivity):** The ability of protective relays to isolate a faulty section of a power system without affecting the healthy sections. This is achieved by setting different operating times for relays at different locations.

**Importance of Relay Characteristics:**

Understanding the time-current characteristics of a relay is vital for:

*   **Setting the Relay:** Determining the correct pickup current and time multiplier settings to achieve proper protection and discrimination.
*   **Verification of Performance:** Ensuring the relay operates as per the manufacturer's specifications and design intent.
*   **Troubleshooting:** Identifying issues with relay settings or the relay itself.
*   **System Design:** Choosing appropriate relays for specific protection schemes.

---

## 2. Types of Relays and Their Characteristics

This module covers three types of relays. Understanding their fundamental operating principles helps in interpreting their characteristics.

### 2.1 Electromechanical Relays

**Key Concepts:**

*   **Operating Principle:** Based on electromagnetic attraction or induction.
    *   **Attraction Type:** A moving armature is attracted by the magnetic field produced by the current, closing the contacts.
    *   **Induction Type:** A rotating disc or cup is driven by the interaction of magnetic fields produced by the current and a voltage/current in a shaded pole arrangement.
*   **Time-Current Curve Shape:** Generally follows a "definite time" or "inverse time" characteristic.
    *   **Definite Time:** The relay operates in a fixed time regardless of the fault current magnitude (after pickup).
    *   **Inverse Time:** The operating time decreases as the fault current increases. This provides faster clearing of high magnitude faults.
*   **Time Multiplier Setting (TMS) / Time Setting Multiplier (TSM):** A dial or switch that adjusts the operating time by multiplying the characteristic curve. A higher TMS means a longer operating time.
*   **Current Setting (CS) / Plug Setting (PS):** A tappet or switch that adjusts the pickup current. The relay operates when the current exceeds this setting.

**Example Characteristic (Conceptual):**

Imagine an induction type overcurrent relay.
*   If the current is just above the pickup setting, it might take 5 seconds to operate.
*   If the current is 10 times the pickup setting, it might take 1 second to operate.
*   If the current is 50 times the pickup setting, it might take 0.2 seconds to operate.

This inverse relationship is a key feature.

### 2.2 Static Relays

**Key Concepts:**

*   **Operating Principle:** Uses solid-state electronic components (transistors, diodes, integrated circuits, operational amplifiers) to detect fault conditions and initiate tripping.
*   **Advantages over Electromechanical:** Faster operating times, higher accuracy, better sensitivity, greater reliability, no moving parts to wear out.
*   **Types of Static Overcurrent/Earth Fault Relays:**
    *   **Phase Overcurrent:** Detects overcurrent in individual phases.
    *   **Earth Fault (or Ground Fault):** Detects zero-sequence current (usually by summing phase currents, where a residual current indicates an earth fault).
*   **Characteristic Curves:** Can be programmed to provide various time-current characteristics, including:
    *   **Standard Inverse (IEC 255-4):** Commonly used inverse time characteristic.
    *   **Very Inverse:** Steeper inverse curve.
    *   **Extremely Inverse:** Even steeper inverse curve.
    *   **Definite Time:** Fixed operating time.
    *   **Combinations:** Can often combine definite time and inverse time elements.
*   **Settings:** Current pickup, time multiplier, and characteristic curve type are set using switches, dials, or digital interfaces.

### 2.3 Numerical Relays

**Key Concepts:**

*   **Operating Principle:** Utilizes digital signal processing (DSP) and microprocessors to analyze the power system signals.
*   **Advantages over Static:** Enhanced flexibility, advanced algorithms for fault detection, self-diagnostic capabilities, communication features (SCADA, event recording), wider range of protection functions in a single unit.
*   **Digitalization:** Analog signals are converted to digital using Analog-to-Digital Converters (ADCs).
*   **Algorithms:** Digital algorithms are used to calculate RMS values, phase angles, and detect fault conditions.
*   **Characteristics:** Can implement virtually any time-current characteristic and offer adaptive protection.
*   **User Interface:** Typically programmed via a front panel display and keypad, or remotely via software. Settings can be stored and recalled.
*   **Event Recording:** Stores detailed information about faults, including pre-fault and post-fault waveforms, operating times, and settings, which is invaluable for post-fault analysis.

---

## 3. Aim: To Draw the Characteristics of the Given Relay

**Practical Procedure Overview:**

The core of this lab is to inject known current values into the relay and measure the time it takes to operate. This process is repeated for several current values to trace the time-current characteristic.

**Essential Equipment:**

1.  **Relay under test:** The overcurrent or earth fault relay.
2.  **Variable AC Voltage/Current Source:** To inject controlled current into the relay's operating coil. This is often a **Primary Current Injection Test Set** or **Secondary Injection Test Set**.
    *   **Primary Injection:** Current is injected directly into the power circuit side of the relay CT. This is more accurate but requires higher current capacity.
    *   **Secondary Injection:** Current is injected into the secondary circuit of the Current Transformer (CT) that feeds the relay. This is more common in labs due to lower current requirements.
3.  **Stopwatch/Timer:** To accurately measure the operating time. Many modern test sets have integrated timers.
4.  **Current Transformer (CT):** If secondary injection is used, a CT is needed to step down the current from the test set to the relay's secondary current rating (e.g., 1A or 5A).
5.  **Connections:** Appropriate wiring to connect the test set, CT (if used), and the relay.
6.  **Measuring Instruments:** Ammeter (to measure injected current) and Voltmeter (if voltage control is used).

**Steps to Draw the Characteristics:**

1.  **Identify Relay Specifications:**
    *   **Type of Relay:** Overcurrent, Earth Fault.
    *   **Rated Secondary Current:** Typically 1A or 5A.
    *   **CT Primary and Secondary Rating:** To determine the current ratio for secondary injection.
    *   **Operating Time Curve:** Manufacturer's datasheet will usually provide standard curves (e.g., IEC Inverse, ANSI Standard Inverse).

2.  **Set Up the Test Circuit:**
    *   Connect the output of the variable current source (or the CT secondary) to the relay's current input terminals.
    *   Connect the relay's output contacts (which would normally close a circuit breaker) to a timing circuit or a signal input on the test set.
    *   If using secondary injection, ensure the CT is correctly connected and the relay's current input terminals are connected to the CT secondary. The CT primary will be connected to the test set output.

3.  **Set Relay Parameters:**
    *   **Current Setting (CS) / Plug Setting (PS):** Set this to a specific value (e.g., 50% or 1A/5A). This determines the pickup current. For example, if the relay is rated for 5A secondary and you set CS to 50%, the pickup current is 5A * 0.5 = 2.5A.
    *   **Time Multiplier Setting (TMS) / Time Setting (TS):** Set this to a specific value (e.g., 0.1, 0.2, 0.3, etc.). This will be varied to draw different curves.
    *   **Characteristic Type:** If the relay offers multiple curves, select the one you want to test.

4.  **Perform the Test:**
    *   **Inject Current:** Start with a current value slightly above the pickup current (e.g., 1.1 times the pickup current).
    *   **Measure Operating Time:** Apply the current and start the timer simultaneously. Stop the timer the instant the relay operates (contacts change state). Record the injected current and the corresponding operating time.
    *   **Repeat for Different Current Values:** Increase the injected current in steps (e.g., 1.5x, 2x, 5x, 10x pickup current). For each current value, record the operating time. Ensure you inject enough current to cover a wide range of the characteristic curve.
    *   **Repeat for Different TMS:** After completing the measurements for one TMS, change the TMS to another value (e.g., from 0.1 to 0.2) and repeat the entire current injection and timing process. This allows you to draw multiple characteristic curves, demonstrating the effect of TMS.

5.  **Draw the Characteristic Curves:**
    *   **Axes:**
        *   **X-axis:** Injected Current (often expressed as a multiple of the relay's rated current or pickup current).
        *   **Y-axis:** Operating Time (in seconds).
    *   **Plotting:** Plot the recorded (Current, Time) data points for each TMS on the graph.
    *   **Connecting Points:** Draw smooth curves connecting the plotted points for each TMS.
    *   **Labeling:** Clearly label the axes, the curves with their respective TMS values, and the relay type.

**Example Data Sheet (Hypothetical):**

**Relay Type:** ABB CO-7 Overcurrent Relay
**Rated Secondary Current:** 5A
**Current Setting (CS):** 50% (Pickup Current = 5A * 0.5 = 2.5A)
**Time Multiplier Setting (TMS):** 0.2

| Injected Current (A) | Multiple of Pickup Current (I/Ip) | Operating Time (seconds) |
| :------------------- | :-------------------------------- | :----------------------- |
| 2.75                 | 1.1                               | 3.5                      |
| 5.0                  | 2.0                               | 1.8                      |
| 12.5                 | 5.0                               | 0.7                      |
| 25.0                 | 10.0                              | 0.35                     |

---

## 4. Understanding the Characteristics

**Key Interpretations:**

*   **Inverse Nature:** For most overcurrent relays (especially induction and static), the curve shows that as the current increases, the operating time decreases. This is crucial for selective fault clearing.
*   **Effect of TMS:** Changing the TMS shifts the entire curve up or down. A higher TMS value will result in longer operating times for all current levels, while a lower TMS value will result in shorter operating times. The *shape* of the curve generally remains the same, but it is scaled in time.
*   **Pickup Current:** The point where the curve begins to deviate from infinite time (or a very high time) is the pickup current.
*   **Definite Time Feature (if applicable):** Some relays have a "definite time" region where the operating time becomes constant above a certain high current level. This ensures rapid clearing of severe faults.
*   **Earth Fault Characteristics:** Earth fault relays often have similar inverse time characteristics but are designed to operate on residual current. Their settings might be expressed in terms of residual current or ground fault pickup current.

**Relating to CO1 (Mathematical Models):**

The observed time-current curves can be mathematically represented. For instance, an IEC inverse characteristic might be approximated by an equation of the form:

$t = \frac{k \cdot TMS}{I^\alpha - 1}$

Where:
*   $t$ is the operating time.
*   $k$ and $\alpha$ are constants specific to the inverse characteristic type (e.g., for IEC Standard Inverse, $\alpha \approx 0.02$ and $k \approx 0.14$).
*   $I$ is the injected current (often expressed as a multiple of the pickup current).
*   $TMS$ is the Time Multiplier Setting.

By testing and obtaining the actual time-current curves, you can determine the appropriate values for $k$ and $\alpha$ for a given relay, which can then be used to build more accurate mathematical models of relaying schemes in power system simulations.

---

## 5. Practice Questions and Answers

**Question 1:** A definite time overcurrent relay has a pickup setting of 150A and a definite time delay of 0.5 seconds. If a fault current of 1000A flows, what will be the operating time of the relay?

**Answer 1:** For a definite time relay, the operating time is independent of the fault current magnitude once it exceeds the pickup setting. Therefore, the operating time will be **0.5 seconds**.

**Question 2:** An induction type overcurrent relay has a current setting of 100% and a TMS of 0.2. Its characteristic is such that at 5 times the pickup current, the operating time is 2 seconds.
(a) What is the pickup current?
(b) If the TMS is changed to 0.4, what would be the expected operating time at 5 times the pickup current?
(c) If the actual current is 500A and the pickup current is 100A, what is the multiple of pickup current?

**Answer 2:**
(a) The pickup current is the current setting, which is 100% of the relay's rated current. Assuming the relay's rated current is 1A or 5A (typical for secondary ratings), the pickup current is that rated value. Let's assume a rated current of 1A for simplicity in this example. So, pickup current = 1A.
(b) The operating time of an induction relay is generally proportional to the TMS. Since the TMS is doubled (from 0.2 to 0.4), the operating time will also double. So, the expected operating time would be 2 seconds * 2 = **4 seconds**.
(c) Multiple of pickup current = Actual Current / Pickup Current = 500A / 100A = **5 times**.

**Question 3:** You are testing an overcurrent relay using secondary injection. The relay's rated secondary current is 5A. The CT ratio is 100/5. Your test set can provide a maximum of 5A on its output.
(a) What is the maximum primary current you can inject through the relay's CT primary?
(b) If you want to simulate a primary fault current of 500A with a CT ratio of 100/5, what secondary current should you inject into the relay's secondary terminals?

**Answer 3:**
(a) The maximum secondary current your test set can provide is 5A. Since the CT ratio is 100/5, the primary current is calculated as:
Primary Current = Secondary Current * (CT Primary Rating / CT Secondary Rating)
Maximum Primary Current = 5A * (100 / 5) = 5A * 20 = **100A**.
*Self-correction: This question seems to misinterpret the CT role. If the test set output is *directly* connected to the CT primary for secondary injection simulation, then the test set output is the primary current injected into the CT primary. If the test set output is meant to simulate the *secondary* current of the CT, the question needs clarification. However, typically, secondary injection means the test set output is connected to the CT secondary. Let's re-interpret assuming the test set provides the signal that goes *into* the CT secondary.*

*Re-interpretation based on common lab setup for secondary injection:* The test set output is connected to the CT secondary.
(a) If the test set output is 5A, and this is applied to the CT secondary, then you are simulating a secondary current of 5A. This is then transformed by the CT. *This interpretation is also unusual.*

*Let's assume the standard secondary injection method:*
The test set output (e.g., 5A) is injected into the CT secondary terminals (which normally receive current from the power system's CT secondary). The CT is connected to the relay. The CT's primary is open-circuited in this setup, or it's a bench-top CT where the test set output is directly connected to its secondary.
In this case, the output of the test set is the *secondary* current being injected.
So, the maximum secondary current you can inject is **5A**.

(b) To simulate a primary fault current of 500A with a CT ratio of 100/5, the required secondary current is:
Secondary Current = Primary Current / (CT Primary Rating / CT Secondary Rating)
Secondary Current = 500A / (100 / 5) = 500A / 20 = **25A**.
*However, your test set can only provide 5A. This implies you can only simulate primary currents up to 100A (as calculated in the first interpretation of (a)). If you need to simulate higher primary currents, you would need a test set with higher output current or a different CT ratio.*

---

## 6. Important Points to Remember

*   **Safety First:** Always follow lab safety procedures when working with electrical test equipment. Ensure proper grounding and insulation.
*   **Secondary Injection is Common:** Most lab tests for relays are performed using secondary injection, which is safer and requires lower current magnitudes.
*   **CT Ratio is Crucial:** Accurately understanding the CT ratio is essential for translating primary fault currents to secondary currents that the relay experiences.
*   **Pickup Current is the Reference:** Time-current characteristics are typically plotted with current as a multiple of the *pickup current* or the *rated relay current*.
*   **TMS Affects Time, Not Shape:** The TMS scales the operating time but does not fundamentally alter the inverse shape of the characteristic curve.
*   **Manufacturer's Data:** Always refer to the relay manufacturer's datasheet for the exact characteristics, setting ranges, and recommended test procedures.
*   **Verification:** The purpose of these tests is to verify that the relay's actual performance matches its designed characteristics.
*   **Event Logging (Numerical Relays):** Numerical relays provide valuable event logs that can be used to analyze test results and actual fault events.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. References and Further Reading

1.  **"Power System Protection: Static, Differential, and Distance Relays"** by T.S. Madhava Rao.
2.  **"Power System Relaying"** by William D. H. (Bill) Stevenson Jr. and Chris R. W. (Chris) Williams.
3.  **"Power System Protection Vol. 2: Apparatus and Analysis"** by S. R. (Rajan) Chaitanya.
4.  **Relay Manufacturer's Manuals:** (e.g., ABB, Siemens, GE) for specific relay models.
5.  **IEC Standards:** (e.g., IEC 60255 series for measuring relays and protection equipment).

---
This comprehensive study note covers the aim of drawing relay characteristics, explains the underlying concepts, details the procedures for different relay types, provides practice questions, and highlights key takeaways, all while aligning with the specified course outcomes.