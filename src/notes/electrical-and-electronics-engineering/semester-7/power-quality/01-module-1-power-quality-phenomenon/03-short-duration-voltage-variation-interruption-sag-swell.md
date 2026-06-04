---
title: "Short duration voltage variation – interruption, sag, swell"
subject: "POWER QUALITY"
module: "Module 1: Power quality phenomenon  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3696d"
status: "completed"
scrapedAt: "2026-05-23T16:38:42.436Z"
---
# POWER QUALITY: Module 1: Power Quality Phenomena - Short Duration Voltage Variations

## 1. Introduction to Power Quality

Power quality refers to the deviation of voltage, current, or frequency from their ideal sinusoidal waveform. It is crucial for the reliable and efficient operation of electrical equipment. Poor power quality can lead to various issues, including equipment malfunction, reduced lifespan, and production losses.

**Key Concept:** Power quality is about maintaining voltage, current, and frequency within acceptable limits for the proper functioning of electrical loads.

**Reference:** Dugan et al. (2012) defines power quality as "any deviation from the ideal voltage, current, or frequency which results in detrimental effects on the performance of end-use equipment."

**Alignment with Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (This section provides the fundamental understanding of what power quality is and why it's important, setting the stage for identifying problems.)

## 2. Short Duration Voltage Variations

Short duration voltage variations are deviations of the RMS (Root Mean Square) voltage from its nominal value that last for a short period, typically from 0.5 cycles to 1 minute. These variations are often caused by the switching of large loads, faults in the system, or motor starting.

**Key Concepts:**
*   **RMS Voltage:** The effective value of an AC voltage, calculated as the square root of the mean of the squared instantaneous values over one cycle.
*   **Nominal Voltage:** The intended or specified voltage of the power system.
*   **Duration:** The time for which the voltage deviates from its nominal value.

**Types of Short Duration Voltage Variations:**
*   Interruptions
*   Sags (Dips)
*   Swells

**Reference:** Sankaran (2002) categorizes short duration variations based on their magnitude and duration, providing detailed classifications. Bollen (1999) also offers a thorough analysis of these phenomena.

**Alignment with Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (This section introduces the core types of short duration variations, which are common power quality problems.)

---

### 2.1. Interruptions

An interruption is a complete loss of voltage for a short period.

**Definition:** An interruption is defined as a condition where the RMS voltage is less than 10% of the nominal voltage for a duration from 0.5 cycles to 1 minute.

**Causes:**
*   **System Faults:** Short circuits on transmission lines or distribution feeders, leading to protective device operation (e.g., circuit breakers opening).
*   **Equipment Malfunction:** Failure of protective devices or other network components.
*   **Load Shedding:** Deliberate disconnection of loads by the utility to maintain system stability during emergencies.
*   **Power System Restoration:** Temporary interruptions can occur during the process of restoring power after a major outage.

**Types of Interruptions:**
*   **Momentary Interruptions:** Durations less than 3 seconds. Often caused by transient faults (e.g., lightning strikes causing temporary phase-to-ground faults) that are cleared by automatic reclosing.
*   **Temporary Interruptions:** Durations from 3 seconds to 1 minute. Typically caused by sustained faults that require manual intervention or longer reclosing times.
*   **Sustained Interruptions:** Durations longer than 1 minute. These are considered major outages and are beyond the scope of "short duration" variations but are often the result of failures that lead to temporary interruptions first.

**Effects on Equipment:**
*   **Complete Shutdown:** Most electronic equipment and motors will shut down.
*   **Data Loss:** Unsaved data in computers and sensitive equipment can be lost.
*   **Process Disruption:** Industrial processes can be halted, leading to significant production losses and potential damage to work-in-progress.
*   **Cascading Failures:** In complex systems, the failure of one component due to an interruption can trigger failures in other interconnected components.

**Example:** A lightning strike causes a temporary short circuit on a transmission line. The circuit breaker opens to isolate the fault, causing a momentary interruption for all customers served by that line. If the fault clears (e.g., the lightning disappears), the breaker will automatically reclose after a few seconds, restoring power. If the fault persists, the reclosing might fail, leading to a longer interruption.

**Important Point to Remember:** Momentary interruptions are often the most common type of interruption and are frequently handled by automatic reclosing schemes.

**Alignment with Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (This section directly addresses the sources and detrimental effects of interruptions.)

---

### 2.2. Sags (Dips)

A sag is a temporary reduction in the RMS voltage.

**Definition:** A sag is defined as a reduction in the RMS voltage of the system between 0.1 pu (per unit) and 0.9 pu of the nominal voltage, lasting from 0.5 cycles to 1 minute.

**Causes:**
*   **Short Circuits (Faults):** The most common cause. When a fault occurs on a power system (e.g., a phase-to-ground or phase-to-phase fault), the current drawn increases dramatically. This increased current through the system impedance causes a significant voltage drop, resulting in sags for all connected loads. The magnitude of the sag depends on the fault location, type, and system impedance.
*   **Starting of Large Motors:** When a large motor starts, it draws a very high inrush current. This high current, flowing through the system impedance, causes a temporary voltage drop, affecting other loads in the vicinity.
*   **Switching of Large Loads:** Similar to motor starting, switching in large industrial loads can cause temporary sags.
*   **Transformer Energization:** Energizing a large transformer can cause a temporary voltage dip due to the inrush current.

**Classification of Sags (based on magnitude):**
*   **Minor Sag:** 0.9 - 0.8 pu
*   **Moderate Sag:** 0.8 - 0.7 pu
*   **Severe Sag:** 0.7 - 0.5 pu
*   **Very Severe Sag:** 0.5 - 0.1 pu

**Effects on Equipment:**
*   **Malfunction of Electronic Equipment:** Microprocessor-based equipment (computers, PLCs, variable speed drives) are particularly sensitive. Sags can cause them to reset, crash, or operate erratically.
*   **Loss of Torque in Motors:** Reduced voltage to a motor results in reduced torque (torque is proportional to the square of the voltage). This can cause motors to stall or overheat if they continue to draw current to try and maintain speed.
*   **Dimming of Lights:** Incandescent and fluorescent lights will dim during a sag.
*   **Interruption of Sensitive Processes:** Manufacturing processes relying on precise control can be disrupted.

**Example:** A three-phase fault occurs on a feeder several blocks away from a sensitive manufacturing plant. The increased fault current causes a voltage sag at the plant, which might be severe enough to cause the programmable logic controllers (PLCs) managing a production line to reset, leading to the loss of an ongoing batch.

**Important Point to Remember:** Sags are characterized by a reduction in voltage magnitude and can be single-phase, two-phase, or three-phase, depending on the fault type.

**Reference:** Dugan et al. (2012) and Sankaran (2002) provide detailed explanations and waveforms of sags, including their causes and impacts. Bollen (1999) offers a comprehensive statistical analysis of sag occurrences.

**Alignment with Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (This section elaborates on the causes and consequences of voltage sags.)

---

### 2.3. Swells

A swell is a temporary increase in the RMS voltage.

**Definition:** A swell is defined as an increase in the RMS voltage of the system between 1.1 pu and 1.8 pu of the nominal voltage, lasting from 0.5 cycles to 1 minute.

**Causes:**
*   **Switching Off Large Loads:** When a large inductive load (like a motor or a large transformer) is switched off, it can cause a temporary voltage increase, especially if there is significant inductive reactance in the source impedance.
*   **Single-Phase Switching:** In a three-phase system, switching off a single phase of a three-phase load or a single-phase fault clearing on one phase can lead to a voltage swell on the unfaulted phases.
*   **Fault Clearing:** The clearing of a single-phase-to-ground fault can sometimes result in a voltage swell on the unfaulted phases due to the redistribution of voltages.
*   **Switching of Capacitor Banks:** While often associated with transients and harmonics, switching capacitor banks can sometimes lead to voltage swells, particularly if the system is lightly loaded.

**Effects on Equipment:**
*   **Overheating of Motors:** Increased voltage can lead to higher magnetic flux in motors, causing increased iron losses and overheating.
*   **Reduced Insulation Life:** Prolonged exposure to voltages above nominal can stress the insulation of electrical equipment, reducing its lifespan.
*   **Premature Failure of Electronic Components:** Sensitive electronic components can be damaged by overvoltage conditions.
*   **Over-illumination of Lights:** Incandescent lights may burn brighter and fail sooner.

**Example:** A large industrial motor is switched off. The sudden removal of the motor's inductive current can cause a temporary voltage rise on the feeder supplying it, potentially leading to a voltage swell at nearby facilities.

**Important Point to Remember:** Swells are less common than sags but can be equally damaging, particularly to equipment with sensitive electronic components or insulation.

**Reference:** Singh et al. (2015) and Dugan et al. (2012) discuss the causes and effects of voltage swells, highlighting their impact on equipment reliability.

**Alignment with Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (This section details the origins and detrimental outcomes of voltage swells.)

---

## 3. Practice Questions and Exercises

**Question 1:**
Define a voltage sag and mention its typical duration. What are the two most common causes of voltage sags in a power system?
**(Alignment: CO1 - Knowledge Level: K2)**

**Question 2:**
Describe the difference between a momentary interruption and a temporary interruption. What type of event typically causes a momentary interruption?
**(Alignment: CO1 - Knowledge Level: K2)**

**Question 3:**
A large industrial pump motor is started, drawing a significant inrush current. How would this event likely affect the voltage for other loads connected to the same distribution feeder? Explain why.
**(Alignment: CO1 - Knowledge Level: K2)**

**Question 4:**
What are the primary detrimental effects of voltage swells on electrical equipment?
**(Alignment: CO1 - Knowledge Level: K2)**

---

## 4. Answers to Practice Questions

**Answer 1:**
A voltage sag is a temporary reduction in the RMS voltage of the system, typically between 0.1 pu and 0.9 pu of the nominal voltage, lasting from 0.5 cycles to 1 minute. The two most common causes are:
1.  **Short circuits (faults)** on the power system.
2.  **Starting of large motors** or switching of large loads.

**Answer 2:**
*   **Momentary Interruption:** An interruption lasting less than 3 seconds. These are often caused by transient faults cleared by automatic reclosing schemes.
*   **Temporary Interruption:** An interruption lasting from 3 seconds to 1 minute. These are typically caused by sustained faults that require longer clearing times or manual intervention.

**Answer 3:**
Starting a large industrial pump motor causes a high inrush current. This inrush current, flowing through the impedance of the distribution feeder, creates a voltage drop (according to Ohm's Law, V = I * Z). This voltage drop will manifest as a temporary reduction in voltage for other loads connected to the same feeder, resulting in a voltage sag.

**Answer 4:**
The primary detrimental effects of voltage swells on electrical equipment include:
*   Overheating of motors due to increased magnetic flux and iron losses.
*   Reduced insulation life in electrical apparatus due to prolonged overvoltage stress.
*   Premature failure of sensitive electronic components.
*   Over-illumination and reduced lifespan of incandescent lamps.

---

## 5. Important Points to Remember

*   **Short Duration Variations:** These are voltage deviations lasting from 0.5 cycles to 1 minute.
*   **Interruptions:** Complete loss of voltage (voltage < 0.1 pu).
*   **Sags:** Reduction in voltage (0.1 pu < voltage < 0.9 pu).
*   **Swells:** Increase in voltage (1.1 pu < voltage < 1.8 pu).
*   **Causes of Sags:** Primarily faults and motor starting.
*   **Causes of Swells:** Primarily switching off large loads and fault clearing.
*   **Impact:** All three variations can cause equipment malfunction, reduced lifespan, and process disruptions. Electronic equipment and motors are particularly sensitive.
*   **Per Unit (pu):** A normalized system where nominal voltage is 1.0 pu.

---

This concludes Module 1, Topic: Short Duration Voltage Variation – Interruption, Sag, Swell. The next module will delve into other types of power quality phenomena.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
