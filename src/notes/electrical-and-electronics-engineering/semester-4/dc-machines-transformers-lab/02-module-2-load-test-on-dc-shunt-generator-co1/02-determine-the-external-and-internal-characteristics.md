---
title: "Determine the external and internal characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 2: Load test on DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a9"
status: "completed"
scrapedAt: "2026-05-23T16:15:10.656Z"
---
# DC Machines & Transformers Lab: Module 2 - Load Test on DC Shunt Generator

## Topic: Determining External and Internal Characteristics

**(Aligned with CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3))**

---

### 1. Introduction to DC Shunt Generators

A DC shunt generator is an electrical machine that converts mechanical energy into direct current (DC) electrical energy. In a shunt generator, the field winding is connected in parallel (shunt) with the armature winding. This parallel connection means that the field winding receives the full terminal voltage of the generator.

**Key Concept:** The self-excitation of a DC shunt generator relies on residual magnetism in the field poles and the proper connection of the field winding.

**Reference:**
*   P.S. Bimbhra, "Electrical Machinery," Chapter 5: DC Generators.
*   D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 6: DC Generators.

---

### 2. Purpose of the Experiment

The primary objective of this experiment is to:

*   Conduct a load test on a DC shunt generator.
*   Determine and plot the **external characteristics** (also known as the load characteristics) of the generator.
*   Determine and plot the **internal characteristics** (also known as the armature characteristics) of the generator.

---

### 3. Theoretical Background

#### 3.1. External Characteristics (V-Ia Curve)

The external characteristic of a DC generator is a plot of the terminal voltage ($V$) against the armature current ($I_a$) or the load current ($I_L$).

*   **Definition:** This curve shows how the terminal voltage of the generator varies as the load is increased (i.e., as the load current increases).
*   **How it's obtained:** By varying the load resistance and measuring the corresponding terminal voltage and load current.
*   **Expected Shape:**
    *   At no load, the terminal voltage is at its maximum ($E_0$).
    *   As the load is applied, the terminal voltage initially drops slightly due to armature resistance drop ($I_a R_a$).
    *   As the load current increases further, the terminal voltage drops more significantly due to:
        *   **Armature Resistance Drop ($I_a R_a$):** The voltage drop across the armature resistance.
        *   **Armature Reaction:** The demagnetizing effect of the armature flux on the main field flux, leading to a reduction in the net flux and hence the generated EMF.
    *   At a certain point, the voltage starts to drop rapidly. This is the region where the generator may become unstable or cease to generate voltage if the load is increased too much.
    *   Ideally, a shunt generator should maintain a relatively constant voltage over a range of loads.

#### 3.2. Internal Characteristics (E-Ia Curve)

The internal characteristic of a DC generator is a plot of the generated EMF ($E_g$) against the armature current ($I_a$).

*   **Definition:** This curve shows how the total generated EMF within the armature winding varies with the armature current.
*   **How it's obtained:** By calculating the generated EMF from the measured terminal voltage and armature current using the relationship:
    $$E_g = V_t + I_a R_a$$
    where:
    *   $E_g$ = Generated EMF (Volts)
    *   $V_t$ = Terminal Voltage (Volts)
    *   $I_a$ = Armature Current (Amperes)
    *   $R_a$ = Armature Circuit Resistance (Ohms)
*   **Expected Shape:**
    *   At no load, $E_g$ is maximum ($E_0$).
    *   As the armature current increases, the generated EMF decreases. This decrease is primarily due to **armature reaction**.
    *   The internal characteristic curve lies above the external characteristic curve because it accounts for the voltage drop within the armature ($I_a R_a$) and the effect of armature reaction.

#### 3.3. Relation Between External and Internal Characteristics

The internal characteristic ($E_g$ vs $I_a$) is always above the external characteristic ($V_t$ vs $I_a$). The vertical distance between the two curves at any given armature current represents the voltage drop in the armature circuit ($I_a R_a$) plus the voltage equivalent of armature reaction.

**Formula:** $E_g = V_t + I_a R_a$

---

### 4. Experimental Setup

*   **DC Shunt Generator:** The machine under test.
*   **DC Motor:** To drive the generator at a constant speed.
*   **Load Resistance:** Variable resistance (e.g., rheostat or lamp load) connected to the generator terminals.
*   **Voltmeter:** To measure the terminal voltage ($V_t$).
*   **Ammeter:** To measure the armature current ($I_a$).
*   **Another Ammeter:** To measure the load current ($I_L$).
*   **Rheostat in the field circuit:** To control the excitation of the generator and thus its terminal voltage (though for plotting characteristics, the speed is kept constant, and load is varied).
*   **Connecting Wires:** Appropriate gauge wires.
*   **Stroboscope (optional):** To ensure the motor is running at a constant speed.

---

### 5. Procedure

**Safety Precautions:**
*   Ensure all connections are tight and correct before switching on the power.
*   Start with a minimum load and gradually increase it.
*   Do not exceed the rated capacity of the generator.
*   Keep the speed of the driving motor constant throughout the experiment.

1.  **Connections:** Connect the DC shunt generator as per the standard circuit diagram. The armature is connected to the load, the field winding is connected in parallel with the armature (and hence across the load), and the driving motor is coupled to the generator shaft.
2.  **Initial Settings:**
    *   Ensure the load resistance is set to maximum (no load condition).
    *   Set the field rheostat to a position that will allow the generator to build up its voltage to a reasonable level when started.
3.  **Starting the Motor:** Start the DC motor and adjust its speed to the rated value. Maintain this speed constant throughout the experiment.
4.  **Building up Voltage:** Adjust the field rheostat to get the desired no-load terminal voltage ($V_0$) as specified by the machine's rating or as desired for the experiment.
5.  **Applying Load:**
    *   Gradually decrease the load resistance (i.e., increase the load current).
    *   For each step of load, record the following readings:
        *   Terminal Voltage ($V_t$) (Voltmeter)
        *   Load Current ($I_L$) (Ammeter in the load circuit)
        *   Armature Current ($I_a$) (Ammeter in the armature circuit)
    *   Continue taking readings until the load is maximum or the terminal voltage drops significantly.
6.  **Removing Load:** After taking the last reading, gradually remove the load (increase the load resistance to maximum) and switch off the motor.
7.  **Speed Measurement:** Record the constant speed of the generator during the test.

---

### 6. Tabulation of Readings

| S. No. | Load Current ($I_L$) (A) | Terminal Voltage ($V_t$) (V) | Armature Current ($I_a$) (A) | Generated EMF ($E_g = V_t + I_a R_a$) (V) |
| :----- | :----------------------- | :--------------------------- | :--------------------------- | :--------------------------------------- |
| 1      | 0                        | $V_0$                        | 0                            | $E_0$                                    |
| 2      |                          |                              |                              |                                          |
| 3      |                          |                              |                              |                                          |
| ...    | ...                      | ...                          | ...                          | ...                                      |
| n      |                          |                              |                              |                                          |

*Note: $R_a$ (Armature Resistance) should be known or measured separately (e.g., by applying a known voltage across the armature when it's stationary and measuring the current).*

---

### 7. Calculations

1.  **Armature Resistance ($R_a$):** This is a crucial parameter. It can be determined by:
    *   **Direct Measurement:** With the generator stationary, apply a small DC voltage across the armature terminals and measure the corresponding armature current. $R_a = \frac{\text{Applied Voltage}}{\text{Measured Current}}$. This gives the cold resistance.
    *   **From No-Load Test:** Sometimes, $R_a$ is provided or can be estimated.
    *   **From Load Test Data (less precise):** If $R_a$ is not known, it can be approximated from the initial part of the load test. The slope of the external characteristic ($dV_t/dI_a$) gives an indication of the total voltage drop, including armature reaction.

2.  **Armature Current ($I_a$):** For a DC shunt generator, the relationship between armature current, load current, and field current ($I_f$) is:
    $$I_a = I_L + I_f$$
    If the field current is not directly measured, and the field resistance is known ($R_{sh}$), then $I_f = V_t / R_{sh}$.
    However, in a typical load test setup, an ammeter is placed in the armature circuit to directly measure $I_a$.

3.  **Generated EMF ($E_g$):** For each set of readings, calculate the generated EMF using:
    $$E_g = V_t + I_a R_a$$
    **(Important:** The $R_a$ used should be the hot resistance if possible, as the armature winding heats up during operation. If only cold resistance is available, use that.)

---

### 8. Plotting the Characteristics

1.  **External Characteristic:** Plot Terminal Voltage ($V_t$) on the y-axis against Armature Current ($I_a$) on the x-axis.
2.  **Internal Characteristic:** On the same graph, plot Generated EMF ($E_g$) on the y-axis against Armature Current ($I_a$) on the x-axis.

**Graph Requirements:**
*   Properly labeled axes with units.
*   Title for the graph.
*   Scale selection for clear visualization of the curves.

---

### 9. Analysis and Discussion

*   **External Characteristic:**
    *   Describe the shape of the curve.
    *   Explain why the terminal voltage drops as the load increases. Relate this to armature resistance drop and armature reaction.
    *   Identify the "drop" region where the voltage falls sharply. What happens to the generator in this region? (It may become unstable or stop generating).
    *   Comment on the voltage regulation of the generator based on this characteristic.
        *   **Voltage Regulation (VR):** $VR (\%) = \frac{V_{NL} - V_{FL}}{V_{FL}} \times 100$, where $V_{NL}$ is the no-load voltage and $V_{FL}$ is the full-load voltage. A smaller VR indicates better regulation.

*   **Internal Characteristic:**
    *   Describe the shape of the curve.
    *   Explain why the generated EMF also drops with increasing armature current, though less rapidly than the terminal voltage. This is primarily due to armature reaction.

*   **Comparison:**
    *   Discuss the relationship between the external and internal characteristic curves.
    *   Explain the vertical separation between the curves ($I_a R_a$ + Armature Reaction effect).

*   **Armature Reaction:**
    *   **Definition:** Armature reaction is the effect of the magnetic field produced by the armature currents on the main magnetic field produced by the field poles.
    *   **Effects:** It causes a demagnetizing effect, reducing the net flux per pole and hence the generated EMF. It also causes flux distortion, leading to a shift in the magnetic neutral axis.
    *   **Magnitude:** The effect of armature reaction increases with armature current.

---

### 10. Learning Outcome Alignment

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   This experiment directly addresses CO1 by conducting a load test and analyzing the resulting external and internal characteristics. The plots and subsequent analysis demonstrate an understanding of how load affects the generator's voltage output and internal EMF, thus analyzing its performance. The K3 (Application) level is met by performing the test, taking readings, calculating values, plotting graphs, and drawing conclusions about the generator's behavior under varying load conditions.

---

### 11. Key Points to Remember

*   **Constant Speed:** Maintaining constant speed is crucial for accurate characteristic plots.
*   **Armature Resistance ($R_a$):** Accurate knowledge or measurement of $R_a$ is essential for calculating $E_g$.
*   **Armature Reaction:** This is the primary reason for the drop in generated EMF beyond the armature resistance drop.
*   **External vs. Internal:** External shows what the load sees ($V_t$ vs $I_a$). Internal shows the fundamental generated voltage ($E_g$ vs $I_a$).
*   **Shunt Generator Behavior:** Ideally, it aims for constant voltage, but armature reaction and resistance cause voltage drop under load.

---

### 12. Practice Questions & Answers

**Q1. What is the difference between the external and internal characteristics of a DC shunt generator?**

**A1.** The external characteristic plots terminal voltage ($V_t$) against armature current ($I_a$), showing the voltage delivered to the load. The internal characteristic plots generated EMF ($E_g$) against armature current ($I_a$), representing the total voltage produced by the armature winding before internal voltage drops. The internal characteristic curve is always above the external characteristic curve.

**Q2. Why does the terminal voltage of a DC shunt generator decrease with an increase in load current?**

**A2.** The terminal voltage decreases due to two main reasons:
    1.  **Armature Resistance Drop ($I_a R_a$):** As load current ($I_a$) increases, the voltage drop across the armature resistance increases.
    2.  **Armature Reaction:** The magnetic field produced by the armature current weakens the main field flux, reducing the generated EMF. This effect also increases with armature current.

**Q3. What is armature reaction, and what are its effects on a DC generator?**

**A3.** Armature reaction is the magnetic effect of the armature current on the main field. Its effects are:
    *   **Demagnetization:** It weakens the main field flux, reducing the generated EMF.
    *   **Cross-magnetization:** It distorts the main field flux, shifting the magnetic neutral axis.

**Q4. How do you calculate the generated EMF ($E_g$) from the measured values during a load test?**

**A4.** The generated EMF is calculated using the formula: $E_g = V_t + I_a R_a$, where $V_t$ is the terminal voltage, $I_a$ is the armature current, and $R_a$ is the armature resistance.

**Q5. What is the significance of the knee point on the external characteristic curve?**

**A5.** The knee point on the external characteristic curve represents the point where the voltage starts to drop rapidly with a small increase in load. Beyond this point, the generator's performance becomes unstable, and it may even fail to generate voltage if the load is further increased, due to severe armature reaction and voltage drops.

---
