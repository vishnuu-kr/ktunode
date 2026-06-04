---
title: "Plot the load characteristics when cumulatively compounded"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 5: Load test on DC compound generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b8"
status: "completed"
scrapedAt: "2026-05-23T16:15:20.100Z"
---
# DC Machines & Transformers Lab: Module 5 - Load Test on DC Compound Generator (CO1)

## Topic: Plot the Load Characteristics When Cumulatively Compounded

### 1. Introduction to DC Compound Generators

A DC compound generator is a DC generator that has both a **series field winding** and a **shunt field winding**. These windings are connected in such a way that they produce magnetic fields that can either assist (cumulative compound) or oppose (differential compound) each other.

**Key Concepts:**

*   **Shunt Field Winding:** Connected in parallel with the armature winding. It produces a magnetomotive force (MMF) that is relatively constant with load.
*   **Series Field Winding:** Connected in series with the armature winding and the external load. It produces an MMF that is proportional to the armature current (and hence load current).
*   **Cumulative Compound Generator:** The MMFs of the series and shunt field windings are additive, meaning they both contribute to strengthening the magnetic field as the load increases.
*   **Differential Compound Generator:** The MMFs of the series and shunt field windings oppose each other. This type is less common and generally avoided due to poor voltage regulation.

**Reference:**

*   **P.S. Bimbhra, "Electrical Machinery," Chapter 5 (DC Generators), Section 5.13 (Compound Generators).** Bimbhra provides a detailed explanation of the construction and operation of compound generators, including the concept of cumulative and differential compounding.
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 5 (DC Generators), Section 5.9 (Compound Generators).** Kothari and Nagrath also cover the different types of compound connections and their impact on generator performance.

### 2. Understanding Load Characteristics

Load characteristics of a DC generator refer to the curves that show how certain parameters of the generator vary with the load current. For a DC compound generator, the most important load characteristics are:

*   **Terminal Voltage vs. Load Current (V vs. I_L):** This is the primary characteristic we will be plotting. It shows how the output voltage changes as the load current increases.
*   **Armature Current vs. Load Current (I_a vs. I_L):** As armature current is directly related to the load current, this can be derived from the circuit.
*   **Speed vs. Load Current (N vs. I_L):** This shows how the generator's speed changes with the load.

### 3. Why Plot Load Characteristics?

Plotting these characteristics is crucial for understanding and predicting the behavior of the DC compound generator under varying load conditions. It helps in:

*   **Assessing Voltage Regulation:** How well the generator maintains its output voltage as the load changes.
*   **Determining Suitability for Different Loads:** Identifying applications where the generator's voltage regulation is acceptable.
*   **Understanding the Effect of Compounding:** Observing how the series field winding influences the voltage regulation compared to a shunt generator.

**Alignment with Course Outcomes:**

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3).** Plotting load characteristics is a direct result of conducting a load test, allowing for analysis of performance.

### 4. Experimental Setup for Load Test on DC Compound Generator

**Apparatus Required:**

1.  DC Compound Generator (driven by a prime mover like DC shunt motor or synchronous motor with DC excitation).
2.  DC Shunt Motor (as prime mover, if applicable).
3.  Rheostats:
    *   Field rheostat for shunt field.
    *   Load rheostat for the external load.
4.  Measuring Instruments:
    *   Voltmeter (to measure terminal voltage, V).
    *   Ammeter (to measure load current, I_L).
    *   Ammeter (to measure armature current, I_a).
    *   Ammeter (to measure series field current, I_se = I_a).
    *   Optional: Tachometer (to measure speed, N).
5.  Connecting Wires and Load Bank.

**Circuit Diagram:**

A typical circuit diagram for a load test on a DC compound generator (cumulatively compounded) would show:

*   The DC compound generator with its armature, shunt field, and series field windings.
*   The prime mover connected to the generator shaft.
*   The shunt field winding connected to a variable rheostat for controlling excitation.
*   The armature winding connected in series with the series field winding.
*   The series field winding connected in series with the load rheostat and the external load.
*   A voltmeter connected across the terminals of the generator (output terminals).
*   An ammeter connected in series with the load to measure the load current ($I_L$).
*   An ammeter in series with the armature to measure armature current ($I_a$).
*   The series field current ($I_{se}$) is the same as the armature current ($I_a$).

**Diagrammatic Representation (Conceptual):**

```
Prime Mover ---> Armature ---> Series Field ---> Load Rheostat ---> Load
                     ^             ^
                     |             |
                   Shunt Field --- Rheostat
                     |
                   Voltmeter (across terminals)
                   Ammeter (in armature circuit)
                   Ammeter (in load circuit)
```

### 5. Procedure for Plotting Load Characteristics (Cumulatively Compounded)

1.  **Pre-checks:**
    *   Ensure all connections are made correctly according to the circuit diagram.
    *   Check the ratings of all instruments and the generator.
    *   Ensure the prime mover is ready.
    *   Set the field rheostat to its maximum resistance to ensure weak excitation initially.
    *   Set the load rheostat to its maximum resistance (no load).

2.  **Starting:**
    *   Start the prime mover and run the generator at its rated speed.
    *   Adjust the shunt field rheostat to obtain the desired no-load terminal voltage (typically rated voltage).

3.  **Load Application:**
    *   Gradually decrease the resistance of the load rheostat (increase the load) in steps.
    *   For each step of load:
        *   Allow the generator to stabilize for a few moments.
        *   Record the readings of:
            *   Terminal Voltage (V)
            *   Armature Current ($I_a$)
            *   Load Current ($I_L$)
            *   (Optional) Speed (N)
    *   Continue increasing the load until the desired maximum load is reached or until the generator's output becomes unstable.

4.  **Observations:**
    *   Tabulate the recorded readings.

**Observation Table:**

| S.No. | Shunt Field Rheostat Setting (Ω) | Terminal Voltage, V (Volts) | Armature Current, $I_a$ (Amps) | Load Current, $I_L$ (Amps) | Speed, N (RPM) (Optional) |
| :---- | :------------------------------- | :-------------------------- | :----------------------------- | :------------------------- | :------------------------ |
| 1     | Max Resistance                   |                             |                                | 0                          |                           |
| 2     |                                  |                             |                                |                            |                           |
| 3     |                                  |                             |                                |                            |                           |
| ...   |                                  |                             |                                |                            |                           |
| Last  |                                  |                             |                                |                            |                           |

**Important Point:** For a cumulatively compounded generator, the series field winding is connected such that its MMF *adds* to the shunt field MMF. This means the series field winding is connected in **series with the load** and **in the same direction of current flow** as the armature current, to produce additive MMF.

### 6. Expected Results and Graph Plotting

**Expected Results for Cumulatively Compounded Generator:**

*   **Over-compounded:** The terminal voltage increases with increasing load. This is usually achieved by having a stronger series field than required for flat compounding.
*   **Flat-compounded:** The terminal voltage remains approximately constant over the entire load range. The series field MMF perfectly compensates for the voltage drop due to armature resistance and armature reaction.
*   **Under-compounded:** The terminal voltage decreases with increasing load, but less rapidly than in a series generator. The series field is weaker than that required for flat compounding.

**The Load Characteristic (V vs. I_L):**

When plotting the terminal voltage (V) on the y-axis and the load current ($I_L$) on the x-axis, for a **cumulatively compounded generator**:

*   You will typically observe a curve that starts at the no-load voltage.
*   As the load increases, the voltage might slightly increase (over-compounded), stay relatively constant (flat-compounded), or slightly decrease (under-compounded).
*   The shape of the curve is characteristic of the degree of compounding.

**Graph Plotting Steps:**

1.  Draw the x-axis and label it as "Load Current, $I_L$ (Amps)".
2.  Draw the y-axis and label it as "Terminal Voltage, V (Volts)".
3.  Plot the recorded values of $I_L$ and V from the observation table.
4.  Draw a smooth curve passing through these plotted points.
5.  (Optional) You can also plot $I_a$ vs. $I_L$ and N vs. $I_L$ on separate graphs.

### 7. Analysis of Load Characteristics (CO1)

Once the graph is plotted, analyze the performance:

*   **Voltage Regulation:** This is a key performance indicator.
    *   **Definition:** Voltage regulation is the percentage change in terminal voltage from no-load to full-load.
    *   **Formula:**
        $$ \text{Voltage Regulation} (\%) = \frac{V_{\text{no-load}} - V_{\text{full-load}}}{V_{\text{full-load}}} \times 100 $$
        Where $V_{\text{no-load}}$ is the terminal voltage at zero load current and $V_{\text{full-load}}$ is the terminal voltage at the maximum load current.
    *   **Interpretation:** A lower percentage indicates better voltage regulation. A cumulatively compounded generator is designed to improve voltage regulation compared to a shunt generator.

*   **Degree of Compounding:**
    *   Observe the trend of the V vs. $I_L$ curve to determine if the generator is over-compounded, flat-compounded, or under-compounded.
    *   **Over-compounded:** $V_{\text{full-load}} > V_{\text{no-load}}$ (or regulation is negative, which is unusual for compounding but represents voltage increase).
    *   **Flat-compounded:** $V_{\text{full-load}} \approx V_{\text{no-load}}$.
    *   **Under-compounded:** $V_{\text{full-load}} < V_{\text{no-load}}$.

*   **Armature Reaction:** The series field winding helps to counteract the demagnetizing effect of armature reaction, which is particularly significant at higher loads. This contributes to better voltage stability.

**Reference:**

*   **P.S. Bimbhra, "Electrical Machinery," Chapter 5 (DC Generators), Section 5.14 (Voltage Regulation).** Bimbhra elaborates on how compounding affects voltage regulation.
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 5 (DC Generators), Section 5.9.2 (Compound Generators).** They discuss the voltage characteristics and their dependence on the ratio of series to shunt field turns.

**Alignment with Course Outcomes:**

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3).** The analysis of voltage regulation and degree of compounding directly addresses this outcome.

### 8. Comparison with Other DC Generators (Context for CO1 & CO2)

While this module focuses on compound generators, understanding how their characteristics compare to shunt and series generators is important for a complete analysis (CO1).

*   **DC Shunt Generator:** Terminal voltage generally drops with increasing load due to armature resistance drop and armature reaction.
*   **DC Series Generator:** Terminal voltage increases significantly with load, making it unsuitable for constant voltage applications.
*   **DC Cumulatively Compound Generator:** Offers a balance, providing better voltage regulation than a shunt generator and more stable voltage than a series generator. It can be adjusted to be flat-compounded for excellent voltage regulation.

**Alignment with Course Outcomes:**

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3).** Understanding the comparative performance allows for a deeper analysis.
*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3).** Although this outcome mentions motors, the underlying principles of performance characteristics are relevant to generators as well, allowing for informed comparisons.

### 9. Practice Questions and Answers

**Question 1:** What is the primary purpose of a cumulatively compounded DC generator in terms of its voltage regulation?

**Answer:** The primary purpose is to provide improved voltage regulation, aiming to maintain a relatively constant terminal voltage as the load current increases, compared to a DC shunt generator.

**Question 2:** If, during a load test on a cumulatively compounded generator, the terminal voltage increases as the load is increased, what type of compounding is it?

**Answer:** It is over-compounded.

**Question 3:** Define voltage regulation for a DC generator.

**Answer:** Voltage regulation is the percentage change in terminal voltage from no-load to full-load, calculated as $\frac{V_{\text{no-load}} - V_{\text{full-load}}}{V_{\text{full-load}}} \times 100$.

**Question 4:** In a cumulatively compounded generator, how are the series and shunt field windings connected relative to each other to produce additive MMF?

**Answer:** The series field winding is connected in series with the armature and the load, and its magnetic field is in the same direction as the magnetic field produced by the shunt field winding.

**Question 5:** Why is a DC differential compound generator generally avoided for most applications?

**Answer:** DC differential compound generators have poor voltage regulation. As the load increases, the series field opposes the shunt field, causing the terminal voltage to drop drastically, making them unstable and unsuitable for most power supply applications.

### 10. Important Points to Remember

*   **Cumulative Compounding:** Shunt and series fields aid each other (additive MMF).
*   **Over-compounding:** Terminal voltage increases with load.
*   **Flat-compounding:** Terminal voltage is approximately constant with load.
*   **Under-compounding:** Terminal voltage decreases with load, but less than a shunt generator.
*   **Series field winding:** Connected in series with the armature and the load.
*   **Shunt field winding:** Connected in parallel with the armature.
*   **Voltage Regulation:** A crucial parameter for assessing performance, aiming for a low percentage.
*   **Armature Reaction:** The series field winding helps to counteract armature reaction, contributing to better voltage stability.
