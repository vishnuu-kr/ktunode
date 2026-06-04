---
title: "Determine the load sharing while two dissimilar transformers are operating in parallel"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 14: Parallel operation of two dissimilar single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360de"
status: "completed"
scrapedAt: "2026-05-23T16:15:42.488Z"
---
# DC Machines & Transformers Lab: Module 14 - Parallel Operation of Dissimilar Single-Phase Transformers

## Topic: Determine the Load Sharing While Two Dissimilar Single-Phase Transformers are Operating in Parallel

### Learning Outcomes:

*   Understand the conditions required for the parallel operation of single-phase transformers.
*   Analyze the effect of transformer parameters (impedance) on load sharing in parallel operation.
*   Demonstrate the procedure for connecting two dissimilar single-phase transformers in parallel.
*   Measure and record the primary and secondary voltages, currents, and power for each transformer under parallel operation.
*   Calculate the load shared by each transformer and verify the theoretical load sharing based on their impedances.

### 1. Introduction

Parallel operation of transformers is a common practice in power systems. It offers several advantages, including:

*   **Increased Reliability:** If one transformer fails, the load can still be supplied by the other transformer(s), albeit with reduced capacity.
*   **Flexibility in Load Management:** Transformers can be switched on or off to meet varying load demands efficiently.
*   **Economic Considerations:** It is often more economical to use multiple smaller transformers in parallel than a single large transformer of equivalent capacity.
*   **Maintenance:** One transformer can be taken offline for maintenance without interrupting the power supply.

This experiment focuses on the parallel operation of **dissimilar** single-phase transformers, meaning transformers with different kVA ratings, voltage ratios, and/or impedances. Understanding how these dissimilarities affect load sharing is crucial.

### 2. Conditions for Parallel Operation of Single-Phase Transformers

For satisfactory parallel operation of single-phase transformers, the following conditions must be met:

*   **Identical Voltage Ratio (Turns Ratio):** The ratio of primary to secondary voltage must be the same for all transformers operating in parallel. If the voltage ratios are different, a circulating current will flow between the transformers, even under no-load conditions, leading to overheating and inefficiency. This is a critical condition.
    *   **Reference:** Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers. (Chapter on Transformers - Parallel Operation)
    *   **Reference:** Kothari, D.P., & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill. (Chapter on Transformers - Parallel Operation)

*   **Same Polarity:** The transformers must be connected with correct polarity. Incorrect polarity connection will result in a short circuit when the secondaries are connected.

*   **Same Frequency:** The frequency of the supply voltage for all transformers must be the same.

*   **Same Per-Phase Impedance (or Similar Impedance Drop):** While not strictly mandatory for connection, having similar percentage impedances is highly desirable for equitable load sharing. If the percentage impedances are different, the load will not be shared proportionally to their kVA ratings, with the transformer having lower impedance taking a larger share of the load.

### 3. Understanding Load Sharing in Parallel Operation of Dissimilar Transformers

When transformers are connected in parallel to a common load, the load current divides among them. In the ideal case of identical transformers, the load sharing is proportional to their kVA ratings. However, when transformers are dissimilar, the load sharing is determined by their **leakage impedances**.

Let's consider two transformers T1 and T2 connected in parallel to a load.
*   Let $E_1$ and $E_2$ be the induced EMFs (which are proportional to the turns ratio and primary voltage). For parallel operation, $E_1$ should be approximately equal to $E_2$.
*   Let $Z_1$ and $Z_2$ be the per-phase equivalent impedances of transformer T1 and T2, respectively, referred to a common side (e.g., primary).
*   Let $I_1$ and $I_2$ be the currents flowing through transformer T1 and T2, respectively.
*   Let $I_L$ be the total load current.

The total load current $I_L$ will divide such that $I_L = I_1 + I_2$.
The current through each transformer can be determined using the concept of circulating current. The difference in induced EMFs (if any due to slight variations in turns ratio) or the voltage drop across their impedances will cause a circulating current. However, assuming the voltage ratios are identical, the voltage across the parallel combination is the same for both transformers.

The load current $I_1$ through transformer T1 and $I_2$ through transformer T2 can be approximated by:

$I_1 = \frac{Z_2}{Z_1 + Z_2} I_L$
$I_2 = \frac{Z_1}{Z_1 + Z_2} I_L$

This equation shows that the load current is inversely proportional to the impedance of the transformer. The transformer with the lower impedance will carry a larger share of the load current.

**kVA Rating and Load Sharing:**

While the ideal scenario for equitable load sharing is based on kVA ratings, in reality, it's the **impedances** that dictate the load sharing. A transformer with a lower percentage impedance will take a larger share of the total load, irrespective of its kVA rating compared to another transformer with higher impedance.

*   **Example:** Consider two transformers:
    *   T1: 10 kVA, 1000/100 V, Impedance (per phase) = 0.02 + j0.04 pu (per unit)
    *   T2: 5 kVA, 1000/100 V, Impedance (per phase) = 0.03 + j0.05 pu

If these are connected in parallel to supply a total load of 15 kVA, the load sharing will be determined by their per-unit impedances. The transformer with the lower per-unit impedance will carry more than its proportional share of the kVA.

### 4. Experimental Setup and Procedure

**4.1 Apparatus Required:**

1.  Two dissimilar single-phase transformers (e.g., different kVA ratings or different impedance values).
2.  AC voltage source (varied).
3.  Rheostats (for load).
4.  Wattmeters (for measuring active power in primary and secondary).
5.  Ammeters (for measuring primary and secondary currents).
6.  Voltmeters (for measuring primary and secondary voltages).
7.  Connecting wires.

**4.2 Pre-Experiment Checks:**

1.  **Identify Transformer Ratings:** Note down the kVA rating, primary voltage, secondary voltage, and frequency for both transformers.
2.  **Determine Polarity:** Use a DC voltage source or AC voltage source to confirm the polarity of each transformer. Ensure correct polarity markings.
3.  **Measure Equivalent Impedance (Optional but Recommended):** Conduct an open-circuit and short-circuit test on each transformer individually to determine their equivalent impedances. This will help predict the load sharing.
    *   **Short-Circuit Test:** With the LV side short-circuited, apply a reduced voltage to the HV side until rated current flows in the HV winding. Measure the applied voltage ($V_{sc}$), current ($I_{sc}$), and input power ($P_{sc}$). From these, calculate the equivalent impedance $Z_{eq} = V_{sc} / I_{sc}$ and resistance $R_{eq} = P_{sc} / I_{sc}^2$.
    *   **Reference:** Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers. (Short-Circuit Test for Transformers)
    *   **Reference:** Kothari, D.P., & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill. (Short-Circuit Test for Transformers)

**4.3 Circuit Diagram:**

*   **Primary Side:** Connect the primary windings of both transformers in parallel to the AC voltage source. Ensure correct polarity connections.
*   **Secondary Side:** Connect the secondary windings of both transformers in parallel. Connect a common load (e.g., rheostats or a mix of resistive and inductive loads) to the parallel secondary terminals.
*   **Instrumentation:** Connect voltmeters across the primary and secondary lines. Connect ammeters in series with the primary and secondary windings of each transformer. Connect wattmeters to measure the power input to the primary of each transformer and the power output from the secondary of each transformer.

**4.4 Procedure:**

1.  **Initial Setup:** Ensure all switches are open and the load is set to zero (maximum resistance).
2.  **Primary Connection:** Connect the primary windings of transformer T1 and T2 in parallel to the AC supply. Double-check polarity.
3.  **Secondary Connection:** Connect the secondary windings of transformer T1 and T2 in parallel.
4.  **No-Load Check:** Apply rated primary voltage to the parallel primary windings. With no load connected to the secondary, measure the primary and secondary voltages and currents for both transformers. The currents should be very small (excitation currents). If there is a significant difference in secondary voltages or large circulating currents, it indicates an issue with the turns ratio or polarity.
5.  **Load Application:** Gradually increase the load by decreasing the rheostat resistance.
6.  **Data Recording:** For each load step, record the following readings:
    *   Primary voltage of T1 ($V_{p1}$)
    *   Primary current of T1 ($I_{p1}$)
    *   Primary power of T1 ($P_{p1}$)
    *   Secondary voltage of T1 ($V_{s1}$)
    *   Secondary current of T1 ($I_{s1}$)
    *   Secondary power of T1 ($P_{s1}$)
    *   Primary voltage of T2 ($V_{p2}$)
    *   Primary current of T2 ($I_{p2}$)
    *   Primary power of T2 ($P_{p2}$)
    *   Secondary voltage of T2 ($V_{s2}$)
    *   Secondary current of T2 ($I_{s2}$)
    *   Secondary power of T2 ($P_{s2}$)
    *   Total load current ($I_L$) and Total load power ($P_L$) (optional, can be sum of individual transformer readings).
7.  **Repeat for different load levels:** Continue increasing the load up to the rated capacity of the smaller transformer or the combined capacity, ensuring no transformer is overloaded.

**Important Note on "Dissimilar" Transformers:** The term "dissimilar" primarily refers to differences in kVA ratings and/or impedances. It's crucial that the voltage ratios and frequencies are identical. If voltage ratios are slightly different, significant circulating currents will arise, and equitable load sharing based on kVA ratings will not be achieved.

### 5. Data Analysis and Calculations

1.  **Load Sharing of Current:** Calculate the secondary current $I_{s1}$ and $I_{s2}$ for each transformer at each load step.
2.  **Load Sharing of Power (kVA):** Calculate the apparent power (kVA) shared by each transformer:
    *   $kVA_1 = V_{s1} \times I_{s1} / 1000$
    *   $kVA_2 = V_{s2} \times I_{s2} / 1000$
3.  **Theoretical Load Sharing:**
    *   Based on Impedances: If you have the equivalent impedance values ($Z_1$, $Z_2$) referred to the same side, you can calculate the theoretical current sharing for a total load current $I_L$:
        $I_{s1(theoretical)} = \frac{Z_2}{Z_1 + Z_2} I_L$
        $I_{s2(theoretical)} = \frac{Z_1}{Z_1 + Z_2} I_L$
        Then convert these currents to kVA.
    *   Based on kVA Ratings (Ideal Case): For comparison, calculate the proportional load sharing based on kVA ratings.
        If $kVA_{total} = kVA_1(rated) + kVA_2(rated)$, then:
        $kVA_1(proportional) = \frac{kVA_1(rated)}{kVA_{total}} \times kVA_{total\_supplied}$
        $kVA_2(proportional) = \frac{kVA_2(rated)}{kVA_{total}} \times kVA_{total\_supplied}$

4.  **Efficiency of Each Transformer:** Calculate the efficiency of each transformer at each load step:
    *   Efficiency ($\eta$) = (Output Power / Input Power) $\times 100\%$
    *   $\eta_1 = (P_{s1} / P_{p1}) \times 100\%$
    *   $\eta_2 = (P_{s2} / P_{p2}) \times 100\%$

5.  **Overall Efficiency:**
    *   Overall Efficiency ($\eta_{overall}$) = (Total Output Power / Total Input Power) $\times 100\%$
    *   $\eta_{overall} = ((P_{s1} + P_{s2}) / (P_{p1} + P_{p2})) \times 100\%$
    *   Alternatively, $\eta_{overall} = (P_L / P_L + \text{Total Losses}) \times 100\%$. Total losses can be approximated by the sum of primary input powers minus the sum of secondary output powers.

### 6. Expected Results and Discussion

*   **Load Sharing:** The experimental results should show that the load is shared between the two transformers. Compare the actual load sharing (in current or kVA) with the theoretical load sharing calculated based on impedances. You should observe that the transformer with lower impedance carries a larger share of the load.
*   **kVA Rating Influence:** Discuss how the difference in kVA ratings affects the load sharing when combined with impedance differences. Even if impedances are close, the transformer with the lower kVA rating might be overloaded if the load exceeds its capacity, even if the other transformer is not fully loaded.
*   **Voltage Regulation:** Observe the secondary voltages ($V_{s1}$, $V_{s2}$) under different load conditions. They should remain relatively constant, indicating good voltage regulation. Minor differences in secondary voltage might occur due to different impedance drops.
*   **Efficiency:** Plot the efficiency curves for both transformers and the overall efficiency as a function of load.
*   **Circulating Current:** If the voltage ratios are not perfectly matched, a circulating current will flow between the transformers, increasing their internal losses and reducing their efficiency. This current will be present even at no load and will increase with load (due to the voltage drop across impedances).

### 7. Practice Questions and Exercises

**Question 1:** State the essential conditions required for the parallel operation of single-phase transformers. Which condition is most critical for preventing circulating currents?
**Answer:**
Essential conditions:
1.  Identical Voltage Ratio (Turns Ratio)
2.  Same Polarity
3.  Same Frequency
4.  Similar Per-Phase Impedance (for equitable load sharing)

The most critical condition for preventing circulating currents is the **identical voltage ratio (turns ratio)**.

**Question 2:** Two single-phase transformers, T1 (10 kVA, 11kV/400V, Z1 = 0.02 + j0.05 pu) and T2 (20 kVA, 11kV/400V, Z2 = 0.01 + j0.03 pu), are connected in parallel to supply a total load of 25 kVA at rated voltage. Calculate the approximate load (in kVA) shared by each transformer.
**Solution:**
We need to compare the per-unit impedances to determine load sharing.

For T1: $Z_{1(pu)} = 0.02 + j0.05$
For T2: $Z_{2(pu)} = 0.01 + j0.03$

The load sharing will be inversely proportional to their impedances. Let's consider the magnitudes:
$|Z_{1(pu)}| = \sqrt{0.02^2 + 0.05^2} = \sqrt{0.0004 + 0.0025} = \sqrt{0.0029} \approx 0.0539$ pu
$|Z_{2(pu)}| = \sqrt{0.01^2 + 0.03^2} = \sqrt{0.0001 + 0.0009} = \sqrt{0.0010} \approx 0.0316$ pu

Since $|Z_{2(pu)}| < |Z_{1(pu)}|$, transformer T2 will share a larger portion of the load.

Using the formula for current division (assuming impedance dominates the load sharing):
$I_{s1} = \frac{Z_2}{Z_1 + Z_2} I_L$
$I_{s2} = \frac{Z_1}{Z_1 + Z_2} I_L$

Let's use the per-unit impedances directly. The total load is 25 kVA. We need to find the approximate kVA shared.
The inverse of impedance is roughly proportional to the kVA share.
$1/Z_1 \approx 1/(0.0539) \approx 18.55$
$1/Z_2 \approx 1/(0.0316) \approx 31.65$

Sum of inverse impedances $\approx 18.55 + 31.65 = 50.2$

Approximate kVA share for T1:
$kVA_1 \approx \frac{1/Z_1}{\sum (1/Z)} \times kVA_{Total} = \frac{18.55}{50.2} \times 25 \text{ kVA} \approx 0.3695 \times 25 \text{ kVA} \approx 9.24 \text{ kVA}$

Approximate kVA share for T2:
$kVA_2 \approx \frac{1/Z_2}{\sum (1/Z)} \times kVA_{Total} = \frac{31.65}{50.2} \times 25 \text{ kVA} \approx 0.6305 \times 25 \text{ kVA} \approx 15.76 \text{ kVA}$

Check: $9.24 + 15.76 = 25$ kVA.

**Answer:** Transformer T1 will share approximately 9.24 kVA, and transformer T2 will share approximately 15.76 kVA. Note that T2 is carrying more than its proportional share (10 kVA vs 20 kVA rating) because its impedance is lower.

**Question 3:** Why is it important to ensure the same frequency when operating transformers in parallel?
**Answer:** If the frequencies are different, the induced voltages in the secondaries will be out of phase by a varying amount, leading to a large circulating current that can damage the transformers.

### 8. Important Points to Remember

*   **Turns Ratio is Paramount:** Always ensure the turns ratios of transformers connected in parallel are identical. Mismatched turns ratios lead to circulating currents, even at no load, causing significant losses.
*   **Polarity Matters:** Incorrect polarity connection will result in a short circuit.
*   **Impedance Dictates Load Sharing:** For dissimilar transformers, load sharing is primarily determined by their respective impedances. Lower impedance leads to higher load sharing.
*   **kVA Rating vs. Impedance:** While transformers are rated in kVA, the actual load sharing is governed by their impedance values. A lower kVA rated transformer with very low impedance can potentially carry a higher load than a higher kVA rated transformer with higher impedance.
*   **Overloading:** Be mindful of the individual kVA ratings to prevent overloading any single transformer, especially the one with a lower rating.
*   **Verification:** Use the short-circuit test results to predict and then verify the load sharing in your experiment.

### 9. Alignment with Course Outcomes

*   **CO4:** "Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests." This experiment directly addresses the "parallel connected single-phase transformers" aspect by analyzing their performance (load sharing, efficiency) when operated together.
*   **Knowledge Level (K3):** The ability to analyze the load sharing, calculate efficiencies, and compare experimental results with theoretical predictions requires applying learned concepts and performing calculations, aligning with the K3 (Application) knowledge level. The steps involved in setting up the circuit, taking readings, and analyzing them fit within this level.

This comprehensive set of study notes provides a foundation for understanding and performing the experiment on the parallel operation of dissimilar single-phase transformers. Remember to always prioritize safety and follow laboratory procedures diligently.
