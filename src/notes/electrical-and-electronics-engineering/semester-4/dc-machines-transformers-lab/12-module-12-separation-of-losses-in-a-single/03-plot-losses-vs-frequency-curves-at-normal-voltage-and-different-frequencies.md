---
title: "Plot losses Vs frequency curves at normal voltage and different frequencies"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 12: Separation of losses in a single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360d6"
status: "completed"
scrapedAt: "2026-05-23T16:15:37.836Z"
---
# DC Machines & Transformers Lab: Module 12 - Separation of Losses in Single-Phase Transformers

## Topic: Plot Losses vs. Frequency Curves at Normal Voltage and Different Frequencies

This module focuses on understanding and quantifying the various losses that occur in single-phase transformers and how these losses are affected by frequency. Specifically, this topic aims to experimentally determine the relationship between transformer losses and frequency when operated at a constant, normal voltage.

---

### 1. Introduction to Transformer Losses

Transformers, like all electrical machines, are not 100% efficient due to energy dissipation in the form of heat. These energy losses reduce the output power and consequently the efficiency of the transformer. Understanding and separating these losses is crucial for accurately predicting transformer performance and for designing more efficient transformers.

**Key Concepts:**

*   **Losses in a Transformer:** These are primarily categorized into:
    *   **Core Losses (Iron Losses):** These occur in the magnetic core of the transformer and are present whenever the transformer is energized, regardless of the load. They are further divided into:
        *   **Hysteresis Loss:** This loss arises from the molecular friction within the core material as it is subjected to a cyclically varying magnetic field. The magnetic domains in the core material resist changes in magnetization, and energy is lost as heat during each magnetization cycle.
        *   **Eddy Current Loss:** This loss is caused by circulating currents induced within the conductive core material by the changing magnetic flux. These eddy currents flow in closed paths and dissipate energy as heat due to the core's resistance.
    *   **Copper Losses (I²R Losses):** These losses occur in the windings (primary and secondary) due to the resistance of the conductors. They are directly proportional to the square of the current flowing through the windings and are load-dependent.

*   **Frequency:** The rate at which the alternating current (and hence the magnetic flux) changes direction. In power systems, the standard frequency is typically 50 Hz or 60 Hz.

*   **Normal Voltage:** The rated voltage at which the transformer is designed to operate.

---

### 2. Understanding the Impact of Frequency on Losses

The experiment focuses on plotting losses versus frequency at a *normal voltage*. This implies that the applied voltage ($V$) is kept constant, and the frequency ($f$) is varied. Let's analyze how each type of loss is affected by frequency under these conditions.

**Reference:**
*   **P.S. Bimbhra, "Electrical Machinery," Chapter 5 (Transformers - Losses and Efficiency):** This chapter will provide detailed theoretical background on the nature of hysteresis and eddy current losses and their dependence on flux density and frequency.
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 3 (Transformers - Losses and Efficiency):** Similarly, this textbook offers comprehensive explanations of transformer losses and their contributing factors.

**Impact of Frequency on Core Losses:**

*   **Hysteresis Loss ($P_h$):**
    *   Theoretically, hysteresis loss per cycle is approximately proportional to the frequency ($f$) and the maximum flux density ($B_{max}$) raised to some power (Steinmetz exponent, typically between 1.5 and 2.5).
    *   At a **constant voltage**, the maximum flux density ($B_{max}$) is inversely proportional to the frequency. This is because the induced back EMF in the primary winding is proportional to the product of flux and frequency ($E_1 \propto f \Phi_{max}$). For a constant voltage ($V_1 \approx E_1$), if frequency ($f$) increases, the maximum flux ($\Phi_{max}$) must decrease to maintain a constant induced EMF. Since $B_{max} \propto \Phi_{max}$, $B_{max}$ is inversely proportional to $f$.
    *   Therefore, the hysteresis loss per unit time can be expressed as: $P_h \propto f \cdot B_{max}^{x}$. Substituting $B_{max} \propto 1/f$, we get $P_h \propto f \cdot (1/f)^x = f^{1-x}$. Since $x$ is typically greater than 1, $1-x$ will be negative. This means hysteresis loss **decreases** as frequency increases at a constant voltage.

*   **Eddy Current Loss ($P_e$):**
    *   Eddy current loss is proportional to the square of the frequency ($f^2$) and the square of the maximum flux density ($B_{max}^2$).
    *   As discussed above, at a constant voltage, $B_{max} \propto 1/f$.
    *   Therefore, the eddy current loss per unit time is: $P_e \propto f^2 \cdot B_{max}^2$. Substituting $B_{max} \propto 1/f$, we get $P_e \propto f^2 \cdot (1/f)^2 = f^2 \cdot (1/f^2) = 1$.
    *   This implies that the eddy current loss is **constant** at a constant voltage, irrespective of the frequency.

*   **Total Core Loss ($P_{core}$):**
    *   $P_{core} = P_h + P_e$.
    *   Since $P_h$ decreases with increasing frequency and $P_e$ remains constant, the **total core loss will decrease as the frequency increases at a constant voltage.**

**Impact of Frequency on Copper Losses:**

*   **Copper Losses ($P_{cu}$):**
    *   $P_{cu} = I^2 R$, where $I$ is the current and $R$ is the winding resistance.
    *   At no-load (or light load conditions, which are typically used for separation of losses experiments to isolate core losses), the current drawn by the transformer is primarily the magnetizing current and the small current needed to supply core losses. This current is relatively small and largely independent of the load.
    *   Since the experiment aims to plot *total losses* (or separate losses if an appropriate method is used) against frequency at normal voltage, and the primary objective of this specific topic is to observe the frequency dependence, we often perform this at a **fixed applied voltage with no load applied to the secondary**. In this scenario, the primary current is mainly the no-load current.
    *   While the primary current in a no-load condition is primarily dictated by the magnetizing reactance and the core losses, it's generally assumed to be relatively constant for this type of frequency sweep experiment.
    *   Therefore, for practical purposes in this experiment, **copper losses are considered to be negligible or constant at no-load**, and the focus is on the frequency-dependent core losses. However, it's important to note that if a significant load were applied, copper losses would dominate and their frequency dependence would be less pronounced than that of core losses.

---

### 3. Experimental Setup and Procedure

The experiment is typically performed on a single-phase transformer. The goal is to measure the total power input to the transformer at various frequencies while maintaining the applied voltage at its normal rated value.

**Apparatus Required:**

1.  **Single-phase Transformer:** A suitable rating (e.g., 1 kVA, 230V/115V).
2.  **Variable Voltage AC Source:** Variac (Variable Autotransformer) to control the applied voltage.
3.  **Frequency Meter:** To measure the frequency of the applied voltage.
4.  **Wattmeter:** To measure the total power input to the transformer.
5.  **Voltmeter:** To measure the applied voltage.
6.  **Ammeter:** To measure the primary current.
7.  **Connecting Wires:** Appropriately rated.

**Procedure:**

1.  **Connections:** Connect the primary winding of the transformer to the variable AC voltage source through the wattmeter, voltmeter, and ammeter as shown in a standard no-load test connection. Ensure the secondary winding is left open-circuited.
2.  **Set Normal Voltage:** Adjust the variac to apply the normal rated voltage (e.g., 230V) to the primary winding. This voltage level must be maintained constant throughout the experiment.
3.  **Set Initial Frequency:** Start with a low frequency (e.g., 10 Hz or 20 Hz).
4.  **Record Readings:**
    *   Apply the set voltage and frequency.
    *   Record the readings from the voltmeter (which should be the normal voltage), ammeter (no-load current), and wattmeter (total power input).
5.  **Vary Frequency:** Gradually increase the frequency of the AC supply in steps (e.g., 10 Hz, 20 Hz, 30 Hz, 40 Hz, 50 Hz, 60 Hz, 70 Hz, 80 Hz, 90 Hz, 100 Hz).
6.  **Maintain Normal Voltage:** At each frequency step, ensure that the applied voltage to the primary remains at the normal rated voltage using the variac. If the variac output voltage drops due to increased current draw at higher frequencies (even at no-load, though less pronounced), it needs to be readjusted to the normal voltage.
7.  **Record Readings at Each Step:** At each frequency, record the voltmeter, ammeter, and wattmeter readings.
8.  **Repeat:** Continue taking readings until the desired maximum frequency is reached.

**Important Considerations during the Experiment:**

*   **Constant Voltage:** This is the most critical parameter to maintain. The transformer's magnetic flux is directly proportional to $V/f$. If $V$ is constant, then $V/f$ changes as $f$ changes, affecting $B_{max}$.
*   **No-Load Condition:** Operating at no load ensures that the measured power input is primarily due to core losses. Copper losses at no-load are minimal.
*   **Transformer Temperature:** Allow the transformer to stabilize in temperature, especially when running at lower frequencies for extended periods. Overheating can affect resistance and magnetic properties.
*   **Instrument Accuracy:** Use calibrated instruments for accurate readings.

---

### 4. Data Analysis and Plotting

**Data Table:**

| S. No. | Frequency (f) [Hz] | Applied Voltage (V) [Volts] | Primary Current (I₀) [Amps] | Total Power Input (P₀) [Watts] | Core Losses ($P_{core}$) [Watts] | Hysteresis Losses ($P_h$) [Watts] | Eddy Current Losses ($P_e$) [Watts] |
| :----- | :----------------- | :-------------------------- | :-------------------------- | :----------------------------- | :----------------------------- | :-------------------------------- | :-------------------------------- |
| 1      |                    | V_normal                    |                             |                                |                                |                                   |                                   |
| 2      |                    | V_normal                    |                             |                                |                                |                                   |                                   |
| ...    |                    | ...                         | ...                         | ...                            | ...                            | ...                               | ...                               |

**Calculations:**

*   **Applied Voltage (V):** This should be constant and equal to the normal rated voltage of the transformer.
*   **Primary Current (I₀):** This is the no-load current.
*   **Total Power Input (P₀):** This is the reading from the wattmeter.
*   **Core Losses ($P_{core}$):** Since the transformer is operating at no load, the measured power input ($P_0$) is approximately equal to the sum of core losses and negligible copper losses in the primary winding at no load.
    $P_{core} \approx P_0$
*   **Separating Hysteresis and Eddy Current Losses (Optional but Recommended for Deeper Understanding):**
    If you plot $P_{core}$ versus frequency ($f$) and $P_{core}/f$ versus frequency ($f$), you can often linearize the relationships.
    We know:
    $P_{core} = P_h + P_e$
    $P_h = K_h f B_{max}^x$
    $P_e = K_e f^2 B_{max}^2$

    At constant voltage $V$, $B_{max} \propto 1/f$.
    $P_h = K_h f (1/f)^x = K_h f^{1-x}$
    $P_e = K_e f^2 (1/f)^2 = K_e$

    So, $P_{core} = K_h f^{1-x} + K_e$.
    If we plot $P_{core}$ versus $f^{1-x}$ (where $x$ is typically around 1.6 for silicon steel), the intercept on the $P_{core}$ axis would give $K_e$, and the slope would give $K_h$.

    A simpler approach for this experiment's purpose is to plot $P_{core}$ directly against $f$.
    Alternatively, plot $P_{core}/f$ vs $f$.
    $P_{core}/f = K_h f^{-x} + K_e/f$. This is not ideal.

    Consider plotting $P_{core}$ vs $f$ and $P_{core}$ vs $f^2$.
    A common experimental method to separate losses involves performing a no-load test at a fixed voltage and varying frequencies, and then a no-load test at a fixed frequency and varying voltages.

    For *this specific topic* "Plot losses Vs frequency curves at normal voltage and different frequencies," the primary output is the total core loss ($P_{core}$) as a function of frequency.

**Plotting the Curve:**

1.  **Plot the Graph:** Plot the "Total Power Input ($P_0$)" or "Core Losses ($P_{core}$)" on the Y-axis against "Frequency ($f$)" on the X-axis.
2.  **Analyze the Shape:** Observe the trend of the curve. It should show a decreasing trend as frequency increases.

---

### 5. Expected Results and Interpretation

**Expected Trend:**

The graph of core losses ($P_{core}$) versus frequency ($f$) at constant normal voltage ($V$) will show a **decreasing trend**.

**Interpretation of the Trend:**

*   As frequency ($f$) increases, the maximum flux density ($B_{max}$) in the core decreases (since $B_{max} \propto V/f$).
*   Hysteresis loss ($P_h$) is proportional to $f \cdot B_{max}^x$. With $B_{max} \propto 1/f$, $P_h \propto f \cdot (1/f)^x = f^{1-x}$. Since $x > 1$, the term $f^{1-x}$ decreases as $f$ increases. Thus, hysteresis loss decreases with increasing frequency.
*   Eddy current loss ($P_e$) is proportional to $f^2 \cdot B_{max}^2$. With $B_{max} \propto 1/f$, $P_e \propto f^2 \cdot (1/f)^2 = \text{constant}$. Thus, eddy current loss remains approximately constant at a constant voltage, regardless of frequency.
*   The total core loss ($P_{core} = P_h + P_e$) decreases because the decrease in hysteresis loss outweighs the constant eddy current loss.

**Example Scenario:**

Imagine you are conducting this experiment on a 1 kVA, 230V/115V, 50Hz transformer.

*   You set the primary voltage to 230V.
*   At 20 Hz, you measure 50W.
*   At 50 Hz, you measure 40W.
*   At 100 Hz, you measure 35W.

Plotting these points will clearly show the downward trend of core losses with increasing frequency.

---

### 6. Learning Outcomes Addressed

This topic directly addresses the following learning outcomes:

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)** - While this outcome is for DC generators, the principle of understanding and measuring losses is foundational and transferable.
*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)** - Similar to CO1, understanding losses helps in analyzing motor performance.
*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)** - This outcome directly relates to investigating losses, albeit in DC machines. The methodology of isolating losses through no-load testing is a common theme.
*   **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)** - This experiment is a specific aspect of understanding transformer performance through no-load tests, focusing on the frequency dependence of losses.
*   **CO5: Determine the voltage regulation and efficiency of 3-phase transformer by conducting no-load tests. (Knowledge Level: K3)** - Again, the core concept of understanding transformer losses from no-load tests is directly applicable.

---

### 7. Important Points to Remember

*   **Core losses are frequency-dependent and voltage-dependent.**
*   **At a constant voltage, $B_{max} \propto 1/f$.**
*   **Hysteresis loss decreases with increasing frequency at constant voltage ($P_h \propto f^{1-x}$ where $x > 1$).**
*   **Eddy current loss is constant with changing frequency at constant voltage ($P_e \propto 1$).**
*   **Total core loss decreases with increasing frequency at constant voltage.**
*   **Maintain normal rated voltage strictly throughout the experiment.**
*   **The secondary winding should be kept open.**
*   **Copper losses are negligible at no-load.**

---

### 8. Practice Questions and Answers

**Question 1:**
What are the two main types of losses in a transformer core?
**Answer:** Hysteresis loss and eddy current loss.

**Question 2:**
How does hysteresis loss vary with frequency when a transformer is operated at a constant voltage?
**Answer:** Hysteresis loss decreases with increasing frequency at a constant voltage.

**Question 3:**
How does eddy current loss vary with frequency when a transformer is operated at a constant voltage?
**Answer:** Eddy current loss remains approximately constant with changing frequency at a constant voltage.

**Question 4:**
Why is it crucial to maintain the applied voltage at its normal rated value throughout the experiment of plotting losses vs. frequency?
**Answer:** Maintaining a constant voltage ensures that the flux density in the core ($B_{max} \propto V/f$) changes inversely with frequency, which is essential for observing the predicted frequency dependence of hysteresis and eddy current losses. If voltage is not constant, the $V/f$ ratio changes, altering $B_{max}$ in a way that masks the frequency effect.

**Question 5:**
If you plot total power input ($P_0$) against frequency ($f$) at constant normal voltage, what shape of curve would you expect, and why?
**Answer:** An expected curve would show a downward trend. This is because the total power input at no load is primarily core loss ($P_{core} = P_h + P_e$). As frequency increases, $B_{max}$ decreases, causing hysteresis loss ($P_h$) to decrease significantly, while eddy current loss ($P_e$) remains relatively constant. The net effect is a reduction in total core loss with increasing frequency.

**Question 6:**
Consider the formula for hysteresis loss per cycle $P_h/f \propto B_{max}^x$ and eddy current loss per cycle $P_e/f \propto f B_{max}^2$. For a constant voltage, how do these per-cycle losses change with frequency?
**Answer:**
At constant voltage, $B_{max} \propto 1/f$.
*   **Hysteresis loss per cycle:** $P_h/f \propto (1/f)^x = f^{-x}$. Since $x > 1$, hysteresis loss per cycle **decreases** as frequency increases.
*   **Eddy current loss per cycle:** $P_e/f \propto f (1/f)^2 = f \cdot (1/f^2) = 1/f$. Eddy current loss per cycle **decreases** as frequency increases.

**(Note:** The question in the prompt asks for "Losses Vs Frequency" which typically refers to power loss per unit time. My initial explanation for losses per unit time ($P_h$ and $P_e$) is more standard for experimental observation. The analysis for "per cycle" losses is provided for a more complete understanding of loss mechanisms.)

---

### 9. Further Study

*   **Separation of Losses using Multiple Tests:** Explore methods for separating hysteresis and eddy current losses more accurately, often involving tests at different voltages and frequencies (e.g., conducting a no-load test at normal frequency but varying voltage, and also at a different frequency but varying voltage).
*   **Steinmetz Equation:** Understand the Steinmetz equation and its application in predicting hysteresis loss.
*   **Laminated Core:** Understand the purpose of laminating the core to reduce eddy currents. The thickness of laminations affects eddy current loss.

---
