---
title: "Plot the load characteristics when differentially compounded"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 5: Load test on DC compound generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b9"
status: "completed"
scrapedAt: "2026-05-23T16:15:20.861Z"
---
# DC Machines & Transformers Lab: Module 5 - Load Test on DC Compound Generator

## Topic: Plotting Load Characteristics for a Differentially Compounded DC Generator

### 1. Introduction and Relevance

This lab module focuses on understanding the behavior of a DC compound generator under varying load conditions. Specifically, we will investigate the characteristics of a **differentially compounded** generator. This knowledge is crucial for analyzing and predicting the performance of such machines in various applications.

**Relevance to Course Outcomes:**

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (K3).** This module directly addresses CO1 by performing a load test to analyze the performance of a DC compound generator. The plotting of load characteristics is a key analytical tool.

### 2. Key Concepts and Definitions

#### 2.1 DC Compound Generator

A DC compound generator is a DC generator that has both a **series field winding** and a **shunt field winding**. These windings are connected in such a way that they affect the magnetic field produced by the armature.

#### 2.2 Types of DC Compound Generators

The connection of the series winding relative to the shunt winding determines the type of compound generator:

*   **Cumulatively Compounded:** The magnetic field produced by the series winding **aids** the magnetic field produced by the shunt winding.
*   **Differentially Compounded:** The magnetic field produced by the series winding **opposes** the magnetic field produced by the shunt winding.

#### 2.3 Load Characteristics of a DC Generator

Load characteristics (also known as external characteristics or terminal voltage vs. load current curves) graphically represent the relationship between the terminal voltage ($V_t$) and the load current ($I_L$) of a DC generator at a constant speed.

*   **External Characteristic ($V_t$ vs. $I_L$):** This is the primary characteristic plotted for load tests.
*   **Armature Characteristic ($E_a$ vs. $I_a$):** Represents the generated EMF versus armature current.
*   **Internal Characteristic ($E_a$ vs. $I_f$ or $I_a$):** Represents the generated EMF versus field current or armature current, considering internal voltage drops.

#### 2.4 Differentially Compounded Generator Behavior

In a differentially compounded generator, as the load current increases, the series field winding's magnetic flux opposes the shunt field winding's flux. This opposition leads to a **decrease** in the net magnetic flux. Consequently, the generated EMF ($E_a$) drops more significantly than in a cumulatively compounded generator.

#### 2.5 Armature Reaction and Commutation

*   **Armature Reaction:** The magnetic field produced by the armature current distorts and weakens the main magnetic field. This effect is present in all DC machines.
*   **Commutation:** The process of switching the current direction in the armature coils as they move past the interpolar region. Poor commutation can lead to sparking at the brushes.

### 3. Experimental Setup and Procedure

**(Note: The specific wiring diagram and equipment may vary in your lab, always refer to your lab manual for precise details.)**

#### 3.1 Equipment Required

*   DC Compound Generator (with separate excitation for shunt field if possible for flexibility)
*   DC Shunt Motor (as a prime mover)
*   Variable Rheostats (for armature and shunt field control)
*   Ammeters (for measuring $I_L$, $I_a$, and $I_{sh}$)
*   Voltmeter (for measuring $V_t$)
*   Load Box (resistive load)
*   Tachometer (to monitor speed)
*   Connecting Wires and Terminals

#### 3.2 Wiring Diagram (Conceptual)

A typical wiring diagram would involve:

1.  **Prime Mover:** The DC shunt motor drives the DC compound generator.
2.  **Generator Armature:** Connected in series with a measuring ammeter ($I_a$) and the load.
3.  **Generator Shunt Field Winding:** Connected across the armature terminals (or to a separate DC supply if applicable) with a rheostat for field current control.
4.  **Generator Series Field Winding:** Connected in series with the armature and the load.
5.  **Load:** Connected to the generator terminals through a voltmeter ($V_t$) measuring terminal voltage and an ammeter ($I_L$) measuring load current.

**Crucial for Differentially Compounded:** The series winding must be connected in **reverse polarity** to the armature current to produce a demagnetizing effect.

#### 3.3 Procedure

1.  **Connections:** Ensure all connections are made according to the wiring diagram, paying close attention to the polarity of the series field winding for differential compounding. Double-check all connections before energizing the circuit.
2.  **No-Load Check:**
    *   Start the DC shunt motor (prime mover) and adjust its speed to the rated speed of the generator.
    *   Ensure no load is connected to the generator terminals.
    *   Adjust the shunt field rheostat to achieve the desired no-load terminal voltage (usually rated voltage). Record the no-load terminal voltage ($V_t$), shunt field current ($I_{sh}$), and armature current ($I_a$ ≈ 0).
3.  **Loading:**
    *   Gradually increase the load by decreasing the resistance of the load rheostat (or connecting load banks).
    *   For each load step, record:
        *   Load Current ($I_L$)
        *   Terminal Voltage ($V_t$)
        *   Armature Current ($I_a$)
        *   Shunt Field Current ($I_{sh}$)
        *   Speed (monitor to ensure it remains relatively constant)
4.  **Data Collection:** Collect readings for a range of load currents, starting from no load up to or near the rated load of the generator.
5.  **Cooling:** Allow the machine to cool down between tests or ensure adequate cooling if performing tests continuously.
6.  **Shutdown:** After completing the measurements, remove the load gradually, then switch off the prime mover.

### 4. Data Analysis and Plotting

#### 4.1 Tabulation of Results

Organize the collected data in a table:

| Load Step | Load Current ($I_L$) (A) | Terminal Voltage ($V_t$) (V) | Armature Current ($I_a$) (A) | Shunt Field Current ($I_{sh}$) (A) | Speed (rpm) |
| :-------- | :----------------------- | :--------------------------- | :--------------------------- | :--------------------------------- | :---------- |
| No Load   | 0                        |                              |                              |                                    |             |
| 1         |                          |                              |                              |                                    |             |
| 2         |                          |                              |                              |                                    |             |
| ...       |                          |                              |                              |                                    |             |

#### 4.2 Plotting the Load Characteristic

**The primary plot for this experiment is the Load Characteristic ($V_t$ vs. $I_L$).**

*   **X-axis:** Load Current ($I_L$) in Amperes.
*   **Y-axis:** Terminal Voltage ($V_t$) in Volts.

**Procedure for plotting:**

1.  Draw the axes with appropriate labels and units.
2.  Mark the scale on both axes.
3.  Plot the recorded values of ($I_L$, $V_t$) from the data table.
4.  Connect the plotted points with a smooth curve. This curve represents the load characteristic of the differentially compounded generator.

#### 4.3 Expected Shape of the Load Characteristic for a Differentially Compounded Generator

The load characteristic for a differentially compounded generator will typically show a **significant drop in terminal voltage** as the load current increases. The curve will be **drooping** sharply.

*   **At no load:** Terminal voltage is at its maximum.
*   **As load increases:**
    *   Armature reaction weakens the field.
    *   The series field winding, being in opposition, further weakens the field.
    *   The combined weakening of the field causes a substantial drop in generated EMF ($E_a$).
    *   Internal voltage drops ($I_a R_a$ and $I_a R_{se}$) also contribute to the fall in $V_t$.
    *   The terminal voltage falls rapidly, and in severe cases, it might even fall to zero or the generator might **lose excitation** (voltage collapse) if the demagnetizing effect becomes too strong.

#### 4.4 Optional Plots (for deeper analysis, as per CO1)

*   **Generated EMF vs. Armature Current ($E_a$ vs. $I_a$):**
    *   Calculate $E_a = V_t + I_a R_a + I_a R_{se}$.
    *   You will need to know or estimate the armature resistance ($R_a$) and series field resistance ($R_{se}$). If these are not provided, you can often determine them by performing a separate resistance measurement test.
    *   Plot $E_a$ on the Y-axis and $I_a$ on the X-axis. This curve will also show a drop due to armature reaction and the opposing series field.
*   **Generated EMF vs. Field Current ($E_a$ vs. $I_{sh}$):**
    *   This is closer to the magnetization curve but will be affected by armature reaction and series field flux.
    *   Plot $E_a$ on the Y-axis and $I_{sh}$ on the X-axis.

### 5. Interpretation of Results

*   **Voltage Regulation:** This is a key performance indicator. It is defined as:
    $$ \text{Voltage Regulation} = \frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\% $$
    where $V_{NL}$ is the no-load terminal voltage and $V_{FL}$ is the full-load terminal voltage.
    For a differentially compounded generator, the voltage regulation will be **poor** (a large positive percentage value), indicating a significant drop in voltage from no load to full load.

*   **Comparison with Cumulative Compounding:** Contrast the obtained load characteristic with that of a cumulatively compounded generator (which typically shows a rising, flat, or slightly drooping characteristic). This highlights the fundamental difference in their magnetic field interactions.

*   **Application Considerations:** Due to the significant voltage drop, differentially compounded generators are rarely used for general power generation where constant voltage is required. However, they have specific niche applications, such as in **arc welding generators**, where a drooping characteristic is desirable to maintain a relatively constant current despite variations in arc length.

### 6. Important Points to Remember

*   **Series Field Polarity:** For differential compounding, the series field winding must be connected to **oppose** the flux produced by the shunt field winding. Incorrect connection will result in cumulative compounding or other undesirable behavior.
*   **Speed Stability:** Maintain the prime mover speed as constant as possible throughout the load test. Speed variations will directly affect the generated EMF.
*   **Overloading:** Be cautious of overloading the generator, especially in differential compounding, as the voltage can collapse rapidly, potentially leading to loss of excitation.
*   **Heating:** Monitor the temperature of the windings during the test, especially the series winding which carries the full load current.
*   **Accuracy of Readings:** Ensure ammeters and voltmeters are connected correctly and are of appropriate range.

### 7. Practice Questions and Exercises

**(Answers provided below)**

**Question 1:** What is the defining characteristic of a differentially compounded DC generator compared to a cumulatively compounded one?
    a) The series field winding aids the shunt field winding.
    b) The series field winding opposes the shunt field winding.
    c) Both windings are connected in series.
    d) Both windings are connected in parallel.

**Question 2:** How would you expect the terminal voltage of a differentially compounded generator to change as the load current increases?
    a) It will increase.
    b) It will remain constant.
    c) It will decrease significantly.
    d) It will fluctuate randomly.

**Question 3:** Calculate the voltage regulation for a DC generator if the no-load terminal voltage is 230 V and the full-load terminal voltage is 200 V.
    a) 15%
    b) 10%
    c) 20%
    d) 12.5%

**Question 4:** Which of the following applications is most likely to use a differentially compounded generator?
    a) Residential power supply.
    b) Industrial lighting systems.
    c) Arc welding machines.
    d) Battery charging.

**Question 5:** If the series field winding of a DC compound generator is connected in such a way that its magnetic flux opposes that of the shunt field winding, what type of compounding is it?

---

### Answers to Practice Questions

**Answer 1:**
b) The series field winding opposes the shunt field winding.

**Answer 2:**
c) It will decrease significantly.

**Answer 3:**
$ \text{Voltage Regulation} = \frac{230 \text{ V} - 200 \text{ V}}{200 \text{ V}} \times 100\% = \frac{30 \text{ V}}{200 \text{ V}} \times 100\% = 0.15 \times 100\% = 15\% $
Therefore, the answer is **a) 15%**.

**Answer 4:**
c) Arc welding machines. (A drooping characteristic is beneficial for arc welding.)

**Answer 5:**
Differentially compounded.

---
