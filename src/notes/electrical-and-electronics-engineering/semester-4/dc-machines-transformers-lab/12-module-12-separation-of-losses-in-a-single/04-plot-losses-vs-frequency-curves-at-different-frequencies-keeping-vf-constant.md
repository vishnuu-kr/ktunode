---
title: "Plot losses Vs frequency curves at different frequencies keeping V/f constant"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 12: Separation of losses in a single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360d7"
status: "completed"
scrapedAt: "2026-05-23T16:15:38.579Z"
---
# DC Machines & Transformers Lab: Module 12 - Separation of Losses in a Single-Phase Transformer

## Topic: Plot Losses vs. Frequency Curves at Different Frequencies Keeping V/f Constant

### 1. Introduction and Background

This experiment focuses on understanding and quantifying the various types of losses that occur in a single-phase transformer and how they are affected by changes in operating frequency, while maintaining a constant Volts/Hertz (V/f) ratio. This is crucial for predicting transformer performance under varying supply conditions and for designing efficient power systems.

**Reference:**
*   **P.S. Bimbhra, "Electrical Machinery," Chapter 8 (Transformers):** Discusses transformer construction, working principle, and various types of losses (core losses, copper losses).
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 3 (Transformers):** Provides a detailed analysis of transformer losses and their dependence on voltage, frequency, and load.

### 2. Learning Outcomes Addressed

This experiment directly contributes to understanding transformer behavior, although it doesn't directly map to all listed COs for DC machines. However, the principles of loss separation and their dependency on electrical parameters are foundational for understanding machine performance in general.

*   **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**
    *   While this specific experiment doesn't involve load tests in the traditional sense, understanding loss components is a prerequisite for analyzing overall transformer performance and efficiency derived from no-load and short-circuit tests.
*   **General Understanding of Machine Losses:** The principles of core losses (hysteresis and eddy current) and their dependence on frequency and flux density are applicable to DC machines as well, even though the primary focus of the COs is on DC machines.

### 3. Key Concepts and Definitions

#### 3.1 Transformer Losses

Transformer losses are primarily divided into two categories:

*   **Core Losses (Iron Losses):** These occur in the magnetic core of the transformer and are present whenever the transformer is energized, regardless of the load. They are further divided into:
    *   **Hysteresis Loss ($P_h$):** The energy dissipated as heat due to the continuous magnetization and demagnetization of the ferromagnetic core material as the alternating flux penetrates it.
        *   **Formula:** $P_h = k_h \cdot f \cdot B_m^{1.6}$ (Steinmetz formula, where $k_h$ is a constant, $f$ is frequency, and $B_m$ is the maximum flux density).
        *   **Key Dependency:** Directly proportional to frequency ($f$) and approximately to the 1.6th power of the maximum flux density ($B_m$).
    *   **Eddy Current Loss ($P_e$):** The power dissipated as heat due to circulating currents (eddy currents) induced within the core material by the changing magnetic flux.
        *   **Formula:** $P_e = k_e \cdot f^2 \cdot B_m^2 \cdot t^2$ (where $k_e$ is a constant, $f$ is frequency, $B_m$ is maximum flux density, and $t$ is the thickness of the laminations).
        *   **Key Dependency:** Proportional to the square of frequency ($f^2$) and the square of maximum flux density ($B_m^2$). To minimize eddy currents, the core is laminated with thin sheets insulated from each other.

*   **Copper Losses ($P_{cu}$):** These are resistive losses that occur in the windings of the transformer due to the flow of current.
    *   **Formula:** $P_{cu} = I^2 \cdot R$, where $I$ is the current and $R$ is the winding resistance.
    *   **Key Dependency:** Proportional to the square of the load current ($I^2$). These losses vary with the load.

#### 3.2 Volts per Hertz (V/f) Ratio

*   **Definition:** The ratio of the applied voltage ($V$) to the supply frequency ($f$).
*   **Significance:** For a transformer, the maximum flux density ($B_m$) is approximately proportional to the V/f ratio.
    *   $B_m \propto \frac{V}{f}$
*   **Constant V/f Operation:** When the V/f ratio is kept constant, the maximum flux density ($B_m$) remains constant, even if the voltage and frequency are varied independently. This is a common operating principle for variable frequency drives (VFDs) controlling AC motors, and the same principle can be applied to analyze transformer behavior.

#### 3.3 Separation of Losses

The goal is to determine the individual contributions of hysteresis loss and eddy current loss from the total core loss, under varying frequency while keeping V/f constant.

*   **Total Core Loss ($P_{core}$):** $P_{core} = P_h + P_e$
*   **Relationship with Frequency and Flux Density:**
    *   $P_{core} = k \cdot f \cdot B_m^{1.6} + k' \cdot f^2 \cdot B_m^2$
    *   Since $B_m \propto \frac{V}{f}$ (when V/f is constant), we can write:
        *   $B_m = c \cdot \frac{V}{f}$ (where $c$ is a constant)
    *   Substituting $B_m$:
        *   $P_{core} = k \cdot f \cdot (c \cdot \frac{V}{f})^{1.6} + k' \cdot f^2 \cdot (c \cdot \frac{V}{f})^2$
        *   $P_{core} = k \cdot f \cdot c^{1.6} \cdot V^{1.6} \cdot f^{-1.6} + k' \cdot f^2 \cdot c^2 \cdot V^2 \cdot f^{-2}$
        *   $P_{core} = (k \cdot c^{1.6} \cdot V^{1.6}) \cdot f^{-0.6} + (k' \cdot c^2 \cdot V^2)$
        *   Let $A = k \cdot c^{1.6} \cdot V^{1.6}$ (constant for a given voltage and core material) and $B = k' \cdot c^2 \cdot V^2$ (constant for a given voltage and core material).
        *   Therefore, $P_{core} = A \cdot f^{-0.6} + B$

*   **Graphical Method for Loss Separation:**
    The equation $P_{core} = A \cdot f^{-0.6} + B$ is of the form $y = mx + c$, where:
    *   $y = P_{core}$ (total core loss)
    *   $x = f^{-0.6}$
    *   $m = A$ (hysteresis loss coefficient)
    *   $c = B$ (eddy current loss coefficient)

    By plotting $P_{core}$ versus $f^{-0.6}$, we get a straight line.
    *   The y-intercept of this line gives the eddy current loss ($P_e = B$).
    *   The slope of the line gives a value related to the hysteresis loss ($Slope = A$). To find the actual hysteresis loss, we need to calculate it at a specific frequency. For example, $P_h = A \cdot f^{-0.6}$.

**Important Point to Remember:** For the separation of losses, we perform a no-load test at different frequencies but keep the V/f ratio constant. This ensures that the flux density ($B_m$) is the same in all these tests.

### 4. Experimental Setup

*   **Single-Phase Transformer:** A small single-phase transformer (e.g., 230V/110V, 50/60Hz).
*   **Variac (Variable AC Voltage Supply):** To adjust the primary voltage.
*   **AC Voltmeter:** To measure the primary voltage.
*   **AC Ammeter:** To measure the primary current.
*   **Wattmeter:** To measure the input power to the transformer.
*   **Frequency Meter:** To measure the supply frequency.
*   **Connecting Wires and Power Source.**

### 5. Procedure

1.  **No-Load Test at Reference Frequency (e.g., 50 Hz):**
    *   Connect the primary side of the transformer to the Variac, and the secondary side should be open-circuited.
    *   Connect the voltmeter, ammeter, and wattmeter on the primary side.
    *   Slowly increase the voltage from zero to the rated voltage of the primary winding.
    *   Record the primary voltage ($V_0$), primary current ($I_0$), and input power ($P_0$) at rated voltage. The wattmeter reading ($P_0$) under no-load conditions represents the total core losses plus a small amount of copper loss due to $I_0$ (which is very small, $I_0^2 R_1$). For practical purposes in this test, $P_0 \approx P_{core}$.
    *   Note the frequency of the supply.

2.  **Varying Frequency Test (Keeping V/f Constant):**
    *   Decide on a reference V/f ratio (e.g., 230V / 50Hz = 4.6 V/Hz).
    *   **Maintain the same V/f ratio throughout the experiment.** This means as you change the frequency, you must also change the voltage proportionally.
    *   **For each frequency $f$ from the list below:**
        *   Set the Variac to provide a primary voltage $V = (V/f)_{ref} \times f$.
        *   Connect the instruments as in step 1.
        *   Ensure the frequency is set to the desired value using the frequency meter.
        *   Record the primary voltage ($V_0$), primary current ($I_0$), and input power ($P_0$).
        *   **Example Frequencies:** 30 Hz, 40 Hz, 50 Hz (reference), 60 Hz, 70 Hz.
        *   **Example Voltages (if V/f = 4.6 V/Hz):**
            *   30 Hz -> $V = 4.6 \times 30 = 138$ V
            *   40 Hz -> $V = 4.6 \times 40 = 184$ V
            *   50 Hz -> $V = 4.6 \times 50 = 230$ V
            *   60 Hz -> $V = 4.6 \times 60 = 276$ V
            *   70 Hz -> $V = 4.6 \times 70 = 322$ V
        *   **Important Consideration:** Ensure the applied voltage does not exceed the transformer's rating or the Variac's capability. If the calculated voltage for higher frequencies exceeds the rating, you might need to adjust the V/f ratio or limit the range.

### 6. Data Tabulation

| S.No. | Frequency ($f$) (Hz) | Voltage ($V_0$) (V) | Current ($I_0$) (A) | Input Power ($P_0$) (W) (Total Core Loss) | $f^{-0.6}$ |
| :---- | :------------------ | :------------------ | :------------------ | :----------------------------------------- | :--------- |
| 1     | 30                  |                     |                     |                                            |            |
| 2     | 40                  |                     |                     |                                            |            |
| 3     | 50                  |                     |                     |                                            |            |
| 4     | 60                  |                     |                     |                                            |            |
| 5     | 70                  |                     |                     |                                            |            |

**Calculation:**
Calculate $f^{-0.6}$ for each frequency.

### 7. Analysis and Plotting

1.  **Plotting the Curve:**
    *   Plot a graph of **Total Core Loss ($P_0$) (y-axis)** against **$f^{-0.6}$ (x-axis)**.
    *   This plot should yield a straight line.

2.  **Loss Separation from the Graph:**
    *   **Eddy Current Loss ($P_e$):** The y-intercept of the plotted straight line represents the constant eddy current loss component ($P_e = B$).
    *   **Hysteresis Loss ($P_h$):**
        *   The slope of the line is equal to $A$.
        *   For each measured frequency $f$, calculate the hysteresis loss as $P_h = P_0 - P_e$.
        *   Alternatively, from the equation $P_{core} = A \cdot f^{-0.6} + B$, we have $P_h = A \cdot f^{-0.6}$. You can pick a frequency from your readings, say $f_i$, and its corresponding $f_i^{-0.6}$ value from the table. Then, $P_h(f_i) = Slope \times f_i^{-0.6}$ or $P_h(f_i) = P_{core}(f_i) - P_e$. It's more accurate to use the equation from the line of best fit.

3.  **Plotting Loss vs. Frequency Curves:**
    *   Once you have determined $P_e$ (y-intercept) and calculated $P_h$ values for different frequencies (e.g., $P_h = A \cdot f^{-0.6}$ or $P_h = P_{core} - P_e$ using the determined constants), you can plot the individual loss components and the total core loss against frequency.
    *   **Plot 1:** Total Core Loss ($P_0$) vs. Frequency ($f$).
    *   **Plot 2:** Hysteresis Loss ($P_h$) vs. Frequency ($f$). This should be a straight line with a positive slope.
    *   **Plot 3:** Eddy Current Loss ($P_e$) vs. Frequency ($f$). This should be a parabola (quadratic relationship, $f^2$). If you plot $P_e$ vs. $f$, you'll see a curve. If you plot $P_e$ vs. $f^2$, you should get a straight line passing through the origin.

### 8. Expected Results and Interpretation

*   **Plot of $P_{core}$ vs. $f^{-0.6}$:** A linear relationship is expected, confirming the empirical formula.
*   **Hysteresis Loss vs. Frequency:** A straight line indicating $P_h \propto f$.
*   **Eddy Current Loss vs. Frequency:** A parabolic curve indicating $P_e \propto f^2$. When $P_e$ is plotted against $f^2$, a straight line through the origin is expected.
*   **Total Core Loss:** Will increase with frequency, but not linearly due to the competing effects of hysteresis and eddy currents. The increase will be less than $f^2$ but more than $f$.

### 9. Practice Questions and Answers

**Q1:** What is the primary purpose of performing the no-load test at different frequencies while keeping the V/f ratio constant?
**A1:** The purpose is to keep the maximum flux density ($B_m$) in the transformer core constant. This allows for the separation of hysteresis and eddy current losses, which have different dependencies on flux density and frequency.

**Q2:** How do hysteresis losses and eddy current losses vary with frequency, assuming constant flux density?
**A2:** Hysteresis losses ($P_h$) are approximately proportional to frequency ($P_h \propto f$), while eddy current losses ($P_e$) are proportional to the square of the frequency ($P_e \propto f^2$).

**Q3:** If you plot the total core loss ($P_{core}$) against $f^{-0.6}$, what does the y-intercept of the resulting straight line represent?
**A3:** The y-intercept represents the eddy current loss ($P_e$), which is assumed to be independent of frequency in this simplified model (although it is actually proportional to $f^2$, the analysis method isolates the frequency-dependent part of hysteresis loss).

**Q4:** Why is the core of a transformer laminated?
**A4:** The core is laminated to reduce eddy current losses. The thin laminations, insulated from each other, increase the overall resistance of the core to circulating currents, thereby reducing the power dissipated as heat.

**Q5:** A transformer is operated at rated voltage and rated frequency. If the frequency is halved while keeping the voltage constant (V/f ratio is not constant), how would the core losses change, and why?
**A5:**
*   **Hysteresis Loss ($P_h \propto f B_m^{1.6}$):** If frequency is halved, $f$ becomes $f/2$. The flux density $B_m \propto V/f$. So if $f$ is halved and $V$ is constant, $B_m$ doubles ($B_m \propto V/(f/2) = 2V/f$). Therefore, $P_h$ would change approximately by $(f/2) \cdot (2B_m)^{1.6} = (f/2) \cdot 2^{1.6} \cdot B_m^{1.6} \approx 0.75 \cdot f \cdot B_m^{1.6}$. So, hysteresis loss would decrease.
*   **Eddy Current Loss ($P_e \propto f^2 B_m^2$):** $P_e$ would change approximately by $(f/2)^2 \cdot (2B_m)^2 = (f^2/4) \cdot 4 B_m^2 = f^2 B_m^2$. So, eddy current loss would remain approximately the same.
*   **Total Core Loss:** The overall change would depend on the relative proportions of $P_h$ and $P_e$. However, a significant reduction in core loss is expected because $B_m$ increases significantly at lower frequencies, and eddy current losses are highly sensitive to $B_m$.

### 10. Important Points to Remember

*   **Constant V/f ratio is CRUCIAL:** This is the key to keeping the flux density constant for loss separation.
*   **No-Load Conditions:** The experiment must be conducted under no-load conditions to ensure that the measured power is predominantly core loss.
*   **Wattmeter Connection:** Ensure the wattmeter is correctly connected to measure the input power to the primary winding.
*   **Accuracy of Readings:** Obtain accurate readings of voltage, current, and power at each frequency.
*   **Graphing:** Pay attention to scaling and labeling when plotting the graphs. The $P_{core}$ vs. $f^{-0.6}$ plot is the primary tool for loss separation.
*   **Limitations:** The Steinmetz formula is an approximation. Real-world behavior might deviate slightly, especially at very high frequencies or flux densities. The no-load current ($I_0$) is not zero and includes magnetizing current and a small iron loss current component.

### 11. Safety Precautions

*   Ensure all connections are tight and insulated.
*   Do not exceed the rated voltage of the transformer or the Variac.
*   Handle the equipment with care.
*   Switch off the power supply when making or changing connections.

This detailed study note provides a comprehensive understanding of plotting losses versus frequency curves at different frequencies while maintaining a constant V/f ratio in a single-phase transformer, directly addressing the core concepts of transformer loss analysis.
