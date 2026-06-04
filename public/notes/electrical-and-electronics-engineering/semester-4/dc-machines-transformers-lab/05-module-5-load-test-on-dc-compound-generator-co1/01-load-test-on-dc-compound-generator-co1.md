---
title: "Load test on DC compound generator (CO1)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 5: Load test on DC compound generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b7"
status: "completed"
scrapedAt: "2026-05-23T16:15:19.287Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 5: Load Test on DC Compound Generator

This module focuses on understanding the operational characteristics of a DC compound generator by performing a load test.

**Course Outcome Addressed:** CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)

**Learning Outcome:** To study the effect of load on the terminal voltage and efficiency of a DC compound generator.

---

## 1. Introduction to DC Compound Generators

A DC compound generator is a DC generator that has both a **shunt field winding** and a **series field winding**. The behavior of the generator depends on the relative strength of these two windings and their connection.

*   **Shunt Field Winding:** Connected in parallel with the armature. Provides a relatively constant excitation.
*   **Series Field Winding:** Connected in series with the armature and the load. The magnetic field produced by this winding is proportional to the armature current (and hence the load current).

**Types of DC Compound Generators based on Series Field Winding Connection:**

*   **Cumulatively Compounded:** The magnetic field produced by the series winding aids the magnetic field produced by the shunt winding. This generally leads to a slight increase or negligible change in terminal voltage with increasing load.
*   **Differentially Compounded:** The magnetic field produced by the series winding opposes the magnetic field produced by the shunt winding. This leads to a significant drop in terminal voltage with increasing load, which is generally undesirable for most applications.
*   **Under-Compounded:** The series field is not strong enough to fully compensate for the voltage drop due to armature resistance and armature reaction. Terminal voltage drops with increasing load.
*   **Level-Compounded:** The series field is designed such that the terminal voltage remains approximately constant with varying load.
*   **Over-Compounded:** The series field is strong enough to overcompensate for the voltage drop, resulting in an increase in terminal voltage with increasing load.

**Reference:**
*   **Bimbhra, P.S. (2021).** *Electrical Machinery* (7th ed.). Khanna Publishers. Chapter 4: DC Generators. (Focus on compound generators and their characteristics).
*   **Kothari, D.P., & Nagrath, I.J. (2017).** *Electric Machines* (5th ed.). Tata McGraw Hill. Chapter 2: DC Generators. (Focus on construction, working principle, and types of compound generators).

---

## 2. Purpose of the Load Test

The primary purpose of a load test on a DC compound generator is to **observe and analyze its performance characteristics under varying load conditions.** Specifically, we aim to:

*   **Determine the terminal voltage regulation:** How the terminal voltage changes as the load is increased from no-load to full-load.
*   **Calculate the efficiency of the generator at different loads:** By measuring input power and output power.
*   **Understand the compounding effect:** How the series field influences the terminal voltage.
*   **Plot performance curves:** Such as terminal voltage vs. load current, and efficiency vs. load current.

---

## 3. Experimental Setup

The typical experimental setup for a load test on a DC compound generator involves:

1.  **DC Compound Generator:** The machine under test.
2.  **DC Motor (Prime Mover):** To drive the generator at its rated speed. This could be a separately excited DC motor or a slip-ring induction motor.
3.  **Variable Load Bank:** To connect to the generator's output terminals. This can be resistive, inductive, or a combination. For this experiment, a resistive load bank is common.
4.  **Rheostats:**
    *   **Field Rheostat (for Shunt Field):** To control the excitation of the shunt winding and thus the no-load voltage.
    *   **Armature Rheostat (Series Field Control):** In some setups, an additional rheostat might be used in series with the armature or series field to fine-tune the compounding effect, although this is less common in standard load tests where the built-in series winding is the primary factor.
5.  **Measuring Instruments:**
    *   **Voltmeter:** To measure the terminal voltage ($V_t$).
    *   **Ammeters:**
        *   To measure the armature current ($I_a$).
        *   To measure the load current ($I_L$).
        *   To measure the shunt field current ($I_{sh}$).
    *   **Wattmeter:** To measure the input power to the generator. This is crucial for efficiency calculation. Alternatively, you might measure the voltage and current of the prime mover and subtract its losses. However, directly measuring generator input is preferred.

**Wiring Diagram:** A typical wiring diagram would show the DC motor driving the generator. The generator's armature, shunt field, and series field terminals are connected to the load bank and measuring instruments as per the generator's compounding connection.

---

## 4. Procedure

1.  **Pre-checks:**
    *   Ensure all connections are tight and correct according to the wiring diagram.
    *   Check the rating of the generator (voltage, current, power).
    *   Ensure the load bank is initially set to its maximum resistance (zero load).
    *   Set the shunt field rheostat to a position that will allow the generator to build up its voltage to the desired no-load value when driven at rated speed.

2.  **Starting the Prime Mover:**
    *   Start the DC motor (prime mover) and bring it to the generator's rated speed. Ensure the speed is maintained relatively constant throughout the test.

3.  **Building Up Voltage:**
    *   Adjust the shunt field rheostat to achieve the rated no-load terminal voltage of the generator.

4.  **Applying Load:**
    *   Gradually decrease the resistance of the load bank (i.e., increase the load current $I_L$).
    *   For each load step, record the following readings:
        *   Terminal Voltage ($V_t$)
        *   Load Current ($I_L$)
        *   Armature Current ($I_a$)
        *   Shunt Field Current ($I_{sh}$)
        *   Input Wattmeter Reading ($P_{in}$)
    *   Continue increasing the load in steps until the rated full-load current is reached or the generator's performance deteriorates significantly.

5.  **Removing Load:**
    *   After taking the full-load readings, gradually remove the load by increasing the resistance of the load bank.
    *   Finally, switch off the prime mover.

---

## 5. Data Collection Table

| S. No. | Load Step | $V_t$ (Volts) | $I_L$ (Amps) | $I_a$ (Amps) | $I_{sh}$ (Amps) | $P_{in}$ (Watts) |
| :----- | :-------- | :------------ | :----------- | :----------- | :-------------- | :--------------- |
| 1      | No Load   |               | 0            |              |                 |                  |
| 2      | Load 1    |               |              |              |                 |                  |
| 3      | Load 2    |               |              |              |                 |                  |
| ...    | ...       |               |              |              |                 |                  |
| n      | Full Load |               |              |              |                 |                  |

---

## 6. Calculations and Analysis

**Key Relationships:**

*   **Armature Current ($I_a$):** For a DC compound generator, the armature current is the sum of the load current and the shunt field current:
    $I_a = I_L + I_{sh}$

**Calculations for Each Load Step:**

1.  **Output Power ($P_{out}$):**
    $P_{out} = V_t \times I_L$ (Watts)

2.  **Shunt Field Copper Loss ($P_{sh}$):**
    $P_{sh} = V_t \times I_{sh}$ (Watts)  *(This is also equal to $I_{sh}^2 \times R_{sh}$ if $R_{sh}$ is known)*

3.  **Armature Copper Loss ($P_{armature}$):**
    Assuming armature resistance $R_a$, $P_{armature} = I_a^2 \times R_a$. If $R_a$ is not provided, it can be estimated from no-load tests or assumed typical values. Often, for analysis, we use the measured input power.

4.  **Series Field Copper Loss ($P_{series}$):**
    Assuming series resistance $R_{se}$, $P_{series} = I_L^2 \times R_{se}$ (Watts). Similar to armature resistance, if $R_{se}$ is not provided, it can be estimated or assumed.

5.  **Total Copper Losses ($P_{cu}$):**
    $P_{cu} = P_{sh} + P_{armature} + P_{series}$

6.  **Iron Losses ($P_{i}$):** These are due to hysteresis and eddy currents in the armature core. They are generally assumed to be constant for a constant speed and flux. They can be estimated from the difference between input power and copper losses at no load, or determined more accurately from a separate no-load test.
    $P_i \approx P_{in (no-load)} - P_{sh (no-load)}$

7.  **Stray Load Losses ($P_{stray}$):** These losses occur due to mechanical friction, windage, and additional eddy current and hysteresis losses that vary with load. They are often grouped together and can be estimated as a percentage of output power or determined by subtracting all other known losses from the input power.
    $P_{stray} = P_{in} - P_{out} - P_{sh} - P_{armature} - P_{series}$

8.  **Total Losses ($P_{losses}$):**
    $P_{losses} = P_{cu} + P_i + P_{stray}$
    Alternatively, and often more practical from the load test data:
    $P_{losses} = P_{in} - P_{out}$

9.  **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

10. **Voltage Regulation ($VR$):**
    Voltage regulation is the change in terminal voltage from no-load to full-load, expressed as a percentage of the full-load voltage.
    $VR = \frac{V_{t(no-load)} - V_{t(full-load)}}{V_{t(full-load)}} \times 100\%$

**Reference:**
*   **Bimbhra, P.S. (2021).** *Electrical Machinery* (7th ed.). Khanna Publishers. Chapter 4: DC Generators. (Section on performance characteristics and efficiency calculations).
*   **Kothari, D.P., & Nagrath, I.J. (2017).** *Electric Machines* (5th ed.). Tata McGraw Hill. Chapter 2: DC Generators. (Section on losses and efficiency).

---

## 7. Performance Characteristics (Graphs)

Plot the following graphs by taking appropriate data from the table:

1.  **Terminal Voltage ($V_t$) vs. Load Current ($I_L$):**
    *   This curve shows how the terminal voltage varies as the load is applied.
    *   For a cumulatively compounded generator, this curve will typically be flat (level compounded), rise slightly (over compounded), or drop slightly (under compounded).
    *   **Highlight:** The voltage regulation can be directly inferred from this graph.

2.  **Efficiency ($\eta$) vs. Load Current ($I_L$):**
    *   This curve shows how the efficiency changes with the load.
    *   Efficiency is typically low at light loads due to constant losses (iron and field copper losses).
    *   It increases to a maximum value at or near full load and then may decrease slightly at overload due to increased copper losses.
    *   **Highlight:** The load at which maximum efficiency occurs is important.

---

## 8. Important Points to Remember

*   **Maintain Constant Speed:** The prime mover must maintain a constant speed throughout the test, as speed affects generated voltage and iron losses.
*   **Shunt Field Resistance:** Adjust the shunt field rheostat carefully at no-load to obtain the rated voltage.
*   **Load Increments:** Apply load gradually to avoid sudden shocks to the machine and to get accurate readings at each step.
*   **Instrument Range:** Ensure that the measuring instruments are suitable for the expected current and voltage ranges.
*   **Compounding Type:** Observe the $V_t$ vs. $I_L$ curve to determine if the generator is cumulatively, differentially, level, under, or over compounded. A cumulatively compounded generator is generally preferred for applications where a stable terminal voltage is required.
*   **Efficiency Peak:** The maximum efficiency typically occurs at a load where the variable losses (primarily $I_a^2R_a$ and $I_L^2R_{se}$) become comparable to the constant losses (iron losses and shunt field copper loss).

---

## 9. Practice Questions and Answers

**Question 1:** A DC compound generator has the following data:
No-load terminal voltage = 230 V
Full-load terminal voltage = 220 V
Full-load output current = 50 A
Calculate the voltage regulation of the generator.

**Answer 1:**
$V_{t(no-load)} = 230$ V
$V_{t(full-load)} = 220$ V
$VR = \frac{V_{t(no-load)} - V_{t(full-load)}}{V_{t(full-load)}} \times 100\%$
$VR = \frac{230 - 220}{220} \times 100\% = \frac{10}{220} \times 100\% = 4.54\%$

**Question 2:** If the input power to a DC compound generator at full load is 6.5 kW and the output power is 5.8 kW, what is its efficiency at full load?

**Answer 2:**
$P_{in} = 6.5$ kW = 6500 W
$P_{out} = 5.8$ kW = 5800 W
$\eta = \frac{P_{out}}{P_{in}} \times 100\%$
$\eta = \frac{5800}{6500} \times 100\% = 89.23\%$

**Question 3:** Explain why the efficiency of a DC generator is generally low at very light loads.

**Answer 3:** At very light loads, the output power is small. However, the constant losses (iron losses and shunt field copper loss) remain relatively constant regardless of the load. Since efficiency is $\frac{P_{out}}{P_{in}} = \frac{P_{out}}{P_{out} + P_{losses}}$, with a small $P_{out}$ and significant constant losses, the efficiency becomes low.

**Question 4:** What are the two types of compound generators based on the connection of their series field winding, and what is the main characteristic difference in their terminal voltage behavior with increasing load?

**Answer 4:**
The two types are **cumulatively compounded** and **differentially compounded**.
*   **Cumulatively compounded:** The magnetic field from the series winding aids the field from the shunt winding. As load increases, the terminal voltage generally remains nearly constant or increases slightly.
*   **Differentially compounded:** The magnetic field from the series winding opposes the field from the shunt winding. As load increases, the terminal voltage drops significantly.

**Question 5:** For a DC compound generator, how is the armature current ($I_a$) related to the load current ($I_L$) and shunt field current ($I_{sh}$)?

**Answer 5:**
$I_a = I_L + I_{sh}$

---

## 10. Relating to Course Outcomes (CO1)

This experiment directly addresses **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**. By performing the load test, we are actively analyzing:

*   **Performance:** We are observing how the generator's terminal voltage and efficiency behave under varying load conditions.
*   **Load/No-load Tests:** The experiment specifically involves taking readings at no-load and then progressively applying load, thus covering both aspects.
*   **Knowledge Level K3 (Application):** Students are not just recalling information but are applying their understanding of DC generator principles to set up the experiment, take measurements, perform calculations, and interpret the results to characterize the generator's performance. They are applying the formulas for efficiency and voltage regulation.

---

## 11. Further Study and Applications

*   **Comparison of Compounding:** Compare the results obtained for different types of compound generators (if multiple are available in the lab).
*   **Applications:** DC compound generators are used in applications where a relatively constant voltage is required despite varying loads, such as:
    *   Powering arc welding equipment.
    *   Operating elevators.
    *   Providing excitation for alternators.
    *   DC lighting systems (historically).

---
