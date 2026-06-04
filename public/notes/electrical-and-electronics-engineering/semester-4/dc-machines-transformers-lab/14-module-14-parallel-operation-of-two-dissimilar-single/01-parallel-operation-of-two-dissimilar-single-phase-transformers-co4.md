---
title: "Parallel operation of two dissimilar single-phase transformers (CO4)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 14: Parallel operation of two dissimilar single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360dd"
status: "completed"
scrapedAt: "2026-05-23T16:15:41.746Z"
---
# Module 14: Parallel Operation of Two Dissimilar Single-Phase Transformers (CO4)

## 1. Introduction to Parallel Operation of Transformers

Parallel operation of transformers is a crucial technique in power systems to meet varying load demands efficiently and reliably. It allows for:

*   **Increased Capacity:** By connecting multiple transformers in parallel, the total kVA rating can be increased to meet higher load requirements.
*   **Improved Reliability:** If one transformer fails, others can continue to supply the load, preventing a complete power outage.
*   **Economical Operation:** Smaller transformers can be switched in or out of service as needed, optimizing efficiency by operating transformers at or near their full load capacity.
*   **Maintenance:** One transformer can be taken offline for maintenance without interrupting the power supply.

This module focuses on the parallel operation of **dissimilar single-phase transformers**, meaning transformers with different voltage ratings, kVA ratings, impedance values, or vector groups.

## 2. Conditions for Parallel Operation

For transformers to be operated successfully in parallel, several conditions must be met to ensure proper load sharing and prevent circulating currents. These conditions are essential for any parallel connection, but particularly critical when dealing with dissimilar transformers.

### 2.1. Identical Voltage Ratings

*   **Primary Voltage:** The primary winding voltage ratings of all transformers connected in parallel must be the same.
*   **Secondary Voltage:** Similarly, the secondary winding voltage ratings of all transformers must be identical.
*   **Rationale:** If the voltage ratings are different, there will be a voltage difference between the secondaries, leading to large circulating currents that can damage the transformers.

### 2.2. Identical Polarity

*   **Definition:** Polarity refers to the instantaneous direction of voltage induced in the secondary winding relative to the primary winding. For single-phase transformers, this is typically marked as 'H' (high voltage) and 'X' (low voltage) terminals. When connected in parallel, corresponding terminals (e.g., all 'H' terminals to one busbar and all 'X' terminals to another) must be connected.
*   **Rationale:** Incorrect polarity connection will result in a short circuit across the secondaries, causing extremely large currents.

### 2.3. Identical Frequency

*   **Requirement:** All transformers operating in parallel must be designed for the same system frequency (e.g., 50 Hz or 60 Hz).
*   **Rationale:** While transformers can operate at frequencies other than their rated frequency, significant deviations can lead to saturation of the core, increased losses, and reduced efficiency.

### 2.4. Identical Phase Displacement (Vector Group)

*   **Relevance:** This condition is primarily for three-phase transformers, but it's worth noting as a general principle. For single-phase transformers, this simplifies to ensuring they are connected correctly without any internal phase shifts.
*   **Rationale:** If transformers have different phase displacements, the phase voltages will be out of sync, leading to circulating currents and unbalanced load sharing.

## 3. Parallel Operation of Dissimilar Single-Phase Transformers

When connecting dissimilar transformers in parallel, the primary challenge is ensuring equitable load sharing. Dissimilarity can arise in:

*   **kVA Ratings:** Transformers with different power ratings.
*   **Impedance Values (per unit):** Transformers with different leakage reactances and resistances.
*   **Voltage Ratios:** While the primary and secondary voltage ratings should be the same, the *per unit* voltage drops across the transformers can differ due to varying impedances.

### 3.1. Load Sharing

The load sharing between transformers connected in parallel is determined by their respective impedances. For two single-phase transformers connected in parallel to a common load, the load current ($I_1$ and $I_2$) divides inversely proportional to their equivalent impedances ($Z_1$ and $Z_2$).

**Key Principle:** For transformers to share load proportionally to their kVA ratings, their per-unit impedance values should be equal or very close.

Consider two transformers with ratings $S_1$, $S_2$ and impedances $Z_1$, $Z_2$ connected in parallel. Let the total load be $S = S_1 + S_2$ (in terms of kVA) and the total secondary voltage be $V_s$.

The current drawn by each transformer will be:

$I_1 = \frac{S_1}{V_s}$ and $I_2 = \frac{S_2}{V_s}$

The actual division of current (and thus load) is given by:

$I_1 = I_{total} \frac{Z_2}{Z_1 + Z_2}$
$I_2 = I_{total} \frac{Z_1}{Z_1 + Z_2}$

Where $I_{total}$ is the total secondary current delivered to the load.

**Important Consideration for Dissimilar Impedances:**

If the transformers have different per-unit impedances, the load will not be shared strictly in proportion to their kVA ratings. The transformer with the lower per-unit impedance will carry a larger portion of the total load.

**Example:**

Let's say we have two transformers:
*   Transformer A: 10 kVA, 2400/240 V, 0.01 + j0.02 pu impedance.
*   Transformer B: 20 kVA, 2400/240 V, 0.015 + j0.025 pu impedance.

If connected in parallel to a load drawing a total current of 100 A at the secondary, the load sharing would be:

*   Total impedance (in per unit): $Z_{pu\_A} = 0.01 + j0.02$, $Z_{pu\_B} = 0.015 + j0.025$
*   Magnitude of impedances: $|Z_{pu\_A}| \approx \sqrt{0.01^2 + 0.02^2} = 0.02236$ pu, $|Z_{pu\_B}| \approx \sqrt{0.015^2 + 0.025^2} = 0.02915$ pu

Transformer A has a lower per-unit impedance.

$I_A = 100 \frac{Z_{pu\_B}}{Z_{pu\_A} + Z_{pu\_B}} = 100 \frac{(0.015 + j0.025)}{(0.01 + j0.02) + (0.015 + j0.025)} = 100 \frac{0.015 + j0.025}{0.025 + j0.045}$

$I_B = 100 \frac{Z_{pu\_A}}{Z_{pu\_A} + Z_{pu\_B}} = 100 \frac{(0.01 + j0.02)}{0.025 + j0.045}$

Calculating magnitudes:
$|I_A| \approx 100 \frac{0.02915}{0.0523} \approx 55.7$ A
$|I_B| \approx 100 \frac{0.02236}{0.0523} \approx 42.7$ A

Notice that Transformer A (10 kVA) carries more current than Transformer B (20 kVA) because its per-unit impedance is lower. This can lead to overloading of the smaller transformer.

### 3.2. Effect of Dissimilar kVA Ratings

If the per-unit impedances are the same, the load will be shared proportionally to the kVA ratings.

Let $S_1$ and $S_2$ be the kVA ratings, and $Z_{pu}$ be the common per-unit impedance for both transformers.
Total load kVA is $S_{total} = S_1 + S_2$.
Total load current is $I_{total} = \frac{S_{total}}{V_{s\_rated}}$.

Current carried by Transformer 1:
$I_1 = I_{total} \frac{Z_{pu}}{Z_{pu} + Z_{pu}} = I_{total} \frac{Z_{pu}}{2Z_{pu}} = \frac{I_{total}}{2}$

This is incorrect. The load sharing is proportional to the kVA ratings.

Correct approach: The per-unit impedance referred to the transformer's own base kVA should be the same for proportional loading.

If $Z_{pu1} = Z_{pu2} = Z_{pu}$ (referred to their respective bases), then the load current division is:

$I_1 = I_{total} \frac{S_1}{S_1 + S_2}$
$I_2 = I_{total} \frac{S_2}{S_1 + S_2}$

**Example:**

*   Transformer A: 10 kVA, 2400/240 V, 0.01 + j0.02 pu impedance.
*   Transformer B: 20 kVA, 2400/240 V, 0.01 + j0.02 pu impedance.

Total load kVA = 30 kVA.
Secondary voltage = 240 V.
Total secondary current $I_{total} = \frac{30000}{240} = 125$ A.

$I_A = 125 \text{ A} \times \frac{10 \text{ kVA}}{10 \text{ kVA} + 20 \text{ kVA}} = 125 \times \frac{10}{30} = 41.67$ A.
$I_B = 125 \text{ A} \times \frac{20 \text{ kVA}}{10 \text{ kVA} + 20 \text{ kVA}} = 125 \times \frac{20}{30} = 83.33$ A.

This is proportional loading.

### 3.3. Effect of Dissimilar Per-Unit Impedances

When per-unit impedances are different, the load sharing becomes unequal and is inversely proportional to the magnitude of the per-unit impedances. This can lead to:

*   **Overloading:** The transformer with lower per-unit impedance will be overloaded, even if its kVA rating is lower.
*   **Underloading:** The transformer with higher per-unit impedance will be underloaded.
*   **Reduced Efficiency:** Operating transformers significantly off their rated load can lead to lower overall efficiency.
*   **Circulating Currents:** If the voltage drops across the transformers are significantly different due to dissimilar impedances, a circulating current can flow between them, even if the primary and secondary voltages are the same. This circulating current contributes to losses and heating.

**Mitigation Strategy:**

To achieve proportional load sharing when connecting dissimilar transformers, it's often necessary to add **series resistors** in the secondary circuits of one or both transformers to equalize their per-unit impedances.

The per-unit impedance of a transformer is calculated as:
$Z_{pu} = \frac{Z_{actual}}{Z_{base}}$

Where:
*   $Z_{actual} = R + jX$ (actual impedance in ohms)
*   $Z_{base} = \frac{V_{rated}^2}{S_{rated}}$ (base impedance in ohms)

To equalize per-unit impedances, one can modify the actual impedance of one transformer by adding a series impedance.

Let's say Transformer 1 has a lower per-unit impedance than Transformer 2. We can add a series impedance $Z_{add}$ to Transformer 1's secondary to increase its effective per-unit impedance to match Transformer 2.

$Z_{pu\_new\_1} = \frac{Z_{actual\_1} + Z_{add}}{Z_{base\_1}}$

This is a complex design consideration in practice. For lab purposes, understanding the impact of dissimilar impedances is key.

## 4. Practical Implementation and Testing (CO4)

This section outlines the experimental procedure to examine the performance of individual and parallel-connected single-phase transformers.

### 4.1. Individual Transformer Tests

Before connecting transformers in parallel, it's essential to test them individually.

#### 4.1.1. No-Load Test (Open-Circuit Test)

*   **Objective:** To determine the core losses (iron losses) and exciting current (magnetizing reactance $X_m$ and core loss resistance $R_c$).
*   **Procedure:**
    1.  Connect the primary winding to the rated voltage and frequency supply.
    2.  Leave the secondary winding open-circuited.
    3.  Connect a voltmeter across the primary, an ammeter in series with the primary, and a wattmeter to measure the input power.
    4.  Apply rated voltage and record the readings of voltmeter ($V_0$), ammeter ($I_0$), and wattmeter ($P_0$).
*   **Calculations:**
    *   Core Loss (Iron Loss), $P_{core} = P_0$ (since $I_0$ is small, copper losses are negligible).
    *   Exciting Admittance, $Y_0 = \frac{I_0}{V_0}$
    *   Exciting Conductance, $G_0 = \frac{P_0}{V_0^2}$
    *   Exciting Susceptance, $B_0 = \sqrt{Y_0^2 - G_0^2}$
    *   Core loss resistance, $R_c = \frac{V_0^2}{P_0}$
    *   Magnetizing reactance, $X_m = \frac{V_0}{B_0}$
*   **Reference:** P.S. Bimbhra, Chapter 5: Single-Phase Transformers - Tests.

#### 4.1.2. Short-Circuit Test (Load Test with Shorted Secondary)

*   **Objective:** To determine the copper losses and leakage impedance ($R_{eq}$ and $X_{eq}$).
*   **Procedure:**
    1.  Short-circuit the secondary winding through an ammeter and a suitable low-resistance ammeter.
    2.  Apply voltage to the primary winding and gradually increase it until the rated current flows in the secondary winding.
    3.  Connect a voltmeter across the primary, an ammeter in series with the primary, and a wattmeter to measure the input power.
    4.  Record the readings of voltmeter ($V_{sc}$), ammeter ($I_{sc}$), and wattmeter ($P_{sc}$) when the secondary current is at its rated value.
*   **Calculations:**
    *   Copper Loss, $P_{cu} = P_{sc}$ (at rated current).
    *   Equivalent resistance referred to primary, $R_{eq1} = \frac{P_{sc}}{I_{sc}^2}$
    *   Equivalent impedance referred to primary, $Z_{eq1} = \frac{V_{sc}}{I_{sc}}$
    *   Equivalent leakage reactance referred to primary, $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$
*   **Reference:** D.P. Kothari & I.J. Nagrath, Chapter 3: Single Phase Transformers - Testing of Transformers.

#### 4.1.3. Load Test (Optional but Recommended)

*   **Objective:** To verify voltage regulation and efficiency under various load conditions.
*   **Procedure:**
    1.  Connect the transformer secondary to a variable load (e.g., rheostat, inductor, capacitor).
    2.  Apply rated voltage to the primary.
    3.  Measure primary voltage ($V_1$), primary current ($I_1$), secondary voltage ($V_2$), secondary current ($I_2$), and input power ($P_{in}$) for different load conditions.
*   **Calculations:**
    *   Output Power, $P_{out} = V_2 I_2 \cos(\phi_2)$ (where $\phi_2$ is the power factor of the load).
    *   Efficiency, $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
    *   Voltage Regulation (VR) = $\frac{V_{2(NL)} - V_{2(FL)}}{V_{2(FL)}} \times 100\%$, where $V_{2(NL)}$ is secondary voltage at no load and $V_{2(FL)}$ is secondary voltage at full load.

### 4.2. Parallel Operation Test

#### 4.2.1. Setup and Connection

1.  **Ensure Compatibility:** Verify that all transformers have the same primary and secondary voltage ratings and the same frequency. Check polarity by momentarily connecting the secondaries.
2.  **Primary Connection:** Connect the primary windings of both transformers to the same single-phase AC supply.
3.  **Secondary Connection:** Connect the secondary terminals of the transformers in parallel. It is crucial to connect them with the correct polarity.
    *   **Polarity Test:** Before making the final connection, a simple polarity check can be done. Connect the secondaries of both transformers with a temporary jumper. Energize the primary at a slightly reduced voltage. Measure the voltage across the temporary jumper. If the voltage is approximately zero, the polarity is correct. If it's twice the induced voltage, the polarity is reversed, and the jumper should be swapped.
4.  **Load Connection:** Connect a common load to the parallel combination of the secondary windings.

#### 4.2.2. Procedure

1.  **Energize Primary:** Apply the rated voltage to the primary side of both transformers.
2.  **Check for Circulating Current:** With no load connected to the secondary, measure the current flowing between the secondary terminals of the transformers using an ammeter. Ideally, this circulating current should be very small.
3.  **Apply Load:** Connect a load and gradually increase it.
4.  **Measure Parameters:** For various load conditions (e.g., no load, light load, half load, full load, and even slightly overloaded if permissible), record the following:
    *   Primary voltage ($V_{1A}, V_{1B}$) for each transformer.
    *   Primary current ($I_{1A}, I_{1B}$) for each transformer.
    *   Secondary voltage ($V_{2A}, V_{2B}$) for each transformer (should be almost equal).
    *   Secondary current ($I_{2A}, I_{2B}$) for each transformer.
    *   Total load current ($I_{total} = I_{2A} + I_{2B}$).
    *   Input power to each transformer ($P_{inA}, P_{inB}$) using wattmeters.
    *   Output power from the load ($P_{out\_total}$).

#### 4.2.3. Observations and Analysis

*   **Load Sharing:** Compare the secondary currents ($I_{2A}$ and $I_{2B}$) with their rated currents. Determine if the load is shared proportionally to their kVA ratings or based on their per-unit impedances.
*   **Voltage Regulation:** Observe that the secondary voltages ($V_{2A}$ and $V_{2B}$) remain nearly equal across different load conditions.
*   **Efficiency:** Calculate the overall efficiency of the parallel combination. $\eta_{overall} = \frac{P_{out\_total}}{P_{inA} + P_{inB}} \times 100\%$.
*   **Overloading/Underloading:** Identify if any transformer is operating significantly above or below its rated capacity.

**Important Point:** When transformers have dissimilar impedances, the transformer with the lower per-unit impedance will take a larger share of the load. This might lead to overloading of the smaller transformer, even if the total load is within the combined capacity.

## 5. Key Concepts and Definitions

*   **Transformer:** A static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction, usually changing the voltage and current levels.
*   **Single-Phase Transformer:** A transformer designed to operate on a single-phase AC supply.
*   **Dissimilar Transformers:** Transformers that differ in their kVA rating, impedance (resistance and reactance), voltage ratio, or vector group.
*   **Parallel Operation:** Connecting the primary windings of multiple transformers to a common primary supply and their secondary windings to a common secondary load bus.
*   **kVA Rating:** The apparent power rating of a transformer, indicating the maximum power it can handle without exceeding temperature limits.
*   **Impedance (Z):** The total opposition to current flow in an AC circuit, consisting of resistance (R) and reactance (X). For transformers, it's typically represented as equivalent impedance ($Z_{eq} = R_{eq} + jX_{eq}$).
*   **Per-Unit (pu) Impedance:** The impedance of a transformer expressed as a fraction of a base impedance, calculated using the transformer's own base voltage and kVA rating. This allows for comparison of impedances between transformers of different ratings.
*   **Circulating Current:** An unwanted current that flows between transformers connected in parallel due to voltage differences (arising from dissimilar voltage ratios or phase shifts) or different impedance characteristics.
*   **Load Sharing:** The distribution of the total load current among the transformers connected in parallel.
*   **Polarity:** The instantaneous direction of voltage induced in the secondary winding relative to the primary winding.
*   **Voltage Regulation:** The percentage change in the secondary voltage from no-load to full-load for a specified load power factor.
*   **Efficiency:** The ratio of output power to input power, indicating how effectively the transformer converts electrical energy.

## 6. Important Points to Remember

*   **Conditions for Parallel Operation are Paramount:** Incorrect connections (polarity, voltage, frequency) will lead to severe damage.
*   **Dissimilar Impedances Cause Unequal Load Sharing:** The transformer with the lower per-unit impedance draws a larger share of the load.
*   **Proportional Load Sharing Requires Matched Per-Unit Impedances:** If kVA ratings are different, per-unit impedances must be equal for load to be shared according to kVA ratings.
*   **Circulating Currents are Detrimental:** They increase losses, cause heating, and reduce efficiency.
*   **Individual Transformer Tests are Essential:** Understand the characteristics of each transformer before paralleling.
*   **Polarity Check is Critical:** Always perform a polarity test before permanent connections.
*   **Monitoring is Key:** During parallel operation, monitor the currents in each transformer to ensure they are within their limits.

## 7. Practice Questions and Exercises

**Question 1:**
Two single-phase transformers, T1 and T2, are connected in parallel to supply a total load of 100 kVA at 0.8 power factor lagging.
Transformer T1: 50 kVA, 11000/440 V, $Z_{eq1} = 0.02 + j0.08$ pu
Transformer T2: 75 kVA, 11000/440 V, $Z_{eq2} = 0.015 + j0.07$ pu

Determine:
a) The per-unit impedance of each transformer referred to their own base.
b) The actual load current drawn by each transformer.
c) The kVA delivered by each transformer.

**Answer:**

First, calculate the base impedance for each transformer at their respective ratings:

For T1 (50 kVA):
$Z_{base1} = \frac{V_{rated}^2}{S_{rated}} = \frac{(440 V)^2}{50 \times 10^3 VA} = \frac{193600}{50000} = 3.872 \ \Omega$

For T2 (75 kVA):
$Z_{base2} = \frac{V_{rated}^2}{S_{rated}} = \frac{(440 V)^2}{75 \times 10^3 VA} = \frac{193600}{75000} = 2.581 \ \Omega$

a) Per-unit impedance:
$Z_{pu1} = Z_{eq1}$ (given as pu) = $0.02 + j0.08$ pu
$Z_{pu2} = Z_{eq2}$ (given as pu) = $0.015 + j0.07$ pu

b) Actual load current:
Total load = 100 kVA at 0.8 PF lagging.
Total secondary voltage $V_s = 440$ V.
Total load current $I_{total} = \frac{100 \times 10^3 VA}{440 V} = 227.27$ A (at 0.8 PF lagging).

The load current is shared inversely proportional to the per-unit impedances.
$I_{actual1} = I_{total} \frac{Z_{pu2}}{Z_{pu1} + Z_{pu2}}$
$I_{actual2} = I_{total} \frac{Z_{pu1}}{Z_{pu1} + Z_{pu2}}$

Sum of per-unit impedances:
$Z_{pu1} + Z_{pu2} = (0.02 + j0.08) + (0.015 + j0.07) = 0.035 + j0.15$
Magnitude of sum: $|Z_{pu1} + Z_{pu2}| = \sqrt{0.035^2 + 0.15^2} = \sqrt{0.001225 + 0.0225} = \sqrt{0.023725} \approx 0.1540$

$Z_{pu2} = 0.015 + j0.07$. Magnitude: $|Z_{pu2}| = \sqrt{0.015^2 + 0.07^2} = \sqrt{0.000225 + 0.0049} = \sqrt{0.005125} \approx 0.07159$

$Z_{pu1} = 0.02 + j0.08$. Magnitude: $|Z_{pu1}| = \sqrt{0.02^2 + 0.08^2} = \sqrt{0.0004 + 0.0064} = \sqrt{0.0068} \approx 0.08246$

$I_{actual1} = 227.27 \angle -\cos^{-1}(0.8) \times \frac{0.015 + j0.07}{0.035 + j0.15}$
$I_{actual1} = 227.27 \angle -36.87^\circ \times \frac{0.07159 \angle \arctan(0.07/0.015)}{0.1540 \angle \arctan(0.15/0.035)}$
$I_{actual1} = 227.27 \angle -36.87^\circ \times \frac{0.07159 \angle 77.91^\circ}{0.1540 \angle 76.69^\circ}$
$I_{actual1} = 227.27 \angle -36.87^\circ \times 0.4649 \angle (77.91^\circ - 76.69^\circ)$
$I_{actual1} = 227.27 \angle -36.87^\circ \times 0.4649 \angle 1.22^\circ$
$I_{actual1} = (227.27 \times 0.4649) \angle (-36.87^\circ + 1.22^\circ)$
$I_{actual1} \approx 105.65 \angle -35.65^\circ$ A

$I_{actual2} = I_{total} - I_{actual1}$ (vector subtraction)
Or $I_{actual2} = 227.27 \angle -36.87^\circ \times \frac{0.02 + j0.08}{0.035 + j0.15}$
$I_{actual2} = 227.27 \angle -36.87^\circ \times \frac{0.08246 \angle \arctan(0.08/0.02)}{0.1540 \angle 76.69^\circ}$
$I_{actual2} = 227.27 \angle -36.87^\circ \times \frac{0.08246 \angle 75.96^\circ}{0.1540 \angle 76.69^\circ}$
$I_{actual2} = 227.27 \angle -36.87^\circ \times 0.5355 \angle (75.96^\circ - 76.69^\circ)$
$I_{actual2} = 227.27 \angle -36.87^\circ \times 0.5355 \angle -0.73^\circ$
$I_{actual2} = (227.27 \times 0.5355) \angle (-36.87^\circ - 0.73^\circ)$
$I_{actual2} \approx 121.67 \angle -37.6^\circ$ A

Magnitude of currents:
$|I_{actual1}| \approx 105.65$ A
$|I_{actual2}| \approx 121.67$ A

Let's check the sum: $|I_{actual1}| + |I_{actual2}| = 105.65 + 121.67 = 227.32$ A, which is close to the total current of 227.27 A.

Transformer T1 has lower per-unit impedance magnitude (0.08246 vs 0.07159). Wait, T2 has lower magnitude. So T2 should carry more current.
Let's recheck the calculation:
$I_{actual1} = 227.27 \angle -36.87^\circ \times \frac{Z_{pu2}}{Z_{pu1}+Z_{pu2}} = 227.27 \angle -36.87^\circ \times \frac{0.07159 \angle 77.91^\circ}{0.1540 \angle 76.69^\circ} = 227.27 \angle -36.87^\circ \times 0.4649 \angle 1.22^\circ \approx 105.65 \angle -35.65^\circ$ A
$I_{actual2} = 227.27 \angle -36.87^\circ \times \frac{Z_{pu1}}{Z_{pu1}+Z_{pu2}} = 227.27 \angle -36.87^\circ \times \frac{0.08246 \angle 75.96^\circ}{0.1540 \angle 76.69^\circ} = 227.27 \angle -36.87^\circ \times 0.5355 \angle -0.73^\circ \approx 121.67 \angle -37.6^\circ$ A

My initial assessment was wrong based on magnitudes. Let's re-evaluate the relationship:
Load sharing is inversely proportional to impedance.
$I_1 \propto \frac{1}{Z_1}$ and $I_2 \propto \frac{1}{Z_2}$
$I_1 = I_{total} \frac{Z_2}{Z_1+Z_2}$
$I_2 = I_{total} \frac{Z_1}{Z_1+Z_2}$

$|Z_{pu1}| = 0.08246$ pu
$|Z_{pu2}| = 0.07159$ pu

Since $|Z_{pu2}| < |Z_{pu1}|$, transformer T2 has lower impedance and should carry more current.

Let's re-calculate the current sharing using the magnitudes for a quick check:
$I_1 \approx 227.27 \times \frac{0.07159}{0.07159 + 0.08246} = 227.27 \times \frac{0.07159}{0.15405} \approx 227.27 \times 0.4647 \approx 105.58$ A
$I_2 \approx 227.27 \times \frac{0.08246}{0.07159 + 0.08246} = 227.27 \times \frac{0.08246}{0.15405} \approx 227.27 \times 0.5353 \approx 121.69$ A

These values match the previous phasor calculation. So, T2 (75 kVA) carries 121.67 A and T1 (50 kVA) carries 105.65 A.
Rated current for T1 secondary: $I_{rated1} = \frac{50 \times 10^3}{440} = 113.64$ A.
Rated current for T2 secondary: $I_{rated2} = \frac{75 \times 10^3}{440} = 170.45$ A.

T1 is carrying 105.65 A, which is below its rated current (113.64 A).
T2 is carrying 121.67 A, which is below its rated current (170.45 A).

Therefore, neither transformer is overloaded. However, the load is not shared proportionally to kVA (50:75 ratio would be 90.9A:136.3A). T2 is carrying a larger share of the load than its kVA rating would suggest due to its lower per-unit impedance.

c) kVA delivered by each transformer:
$S_1 = V_s \times I_{actual1}^*$ (conjugate)
$S_1 = 440 \angle 0^\circ \times 105.65 \angle 35.65^\circ = 46486 \angle 35.65^\circ$ VA
$|S_1| \approx 46.49$ kVA. Power factor = $\cos(35.65^\circ) \approx 0.812$ (slightly leading the voltage, but the current's power factor relative to the voltage is the same as the load's PF).

$S_2 = V_s \times I_{actual2}^*$
$S_2 = 440 \angle 0^\circ \times 121.67 \angle 37.6^\circ = 53535 \angle 37.6^\circ$ VA
$|S_2| \approx 53.54$ kVA. Power factor = $\cos(37.6^\circ) \approx 0.792$.

Total kVA = 46.49 + 53.54 = 100.03 kVA.

**Question 2:**
List the essential conditions that must be met for the parallel operation of two single-phase transformers. Briefly explain the consequence of violating each condition.

**Answer:**
1.  **Identical Voltage Ratings:** Primary windings must have the same voltage rating, and secondary windings must have the same voltage rating.
    *   *Consequence of Violation:* A large circulating current will flow between the secondaries, leading to overheating and potential damage to the transformers.
2.  **Identical Polarity:** The polarity of the transformers must be the same. This means that when the primary windings are connected to the supply, the induced voltages in the secondary windings must have the same instantaneous direction.
    *   *Consequence of Violation:* A direct short circuit will occur across the secondaries, causing extremely high currents that will damage the transformers and potentially the supply system.
3.  **Identical Frequency:** Both transformers must be designed for the same system frequency.
    *   *Consequence of Violation:* While transformers might operate at slightly different frequencies, significant deviations can lead to core saturation, increased losses, reduced efficiency, and altered voltage regulation.
4.  **Identical Phase Displacement (Vector Group):** For single-phase transformers, this means they are correctly connected. For three-phase transformers, they must have the same vector group.
    *   *Consequence of Violation:* For three-phase, it leads to unbalanced phase currents and circulating currents. For single-phase, incorrect connection within the terminals results in short circuits (covered by polarity).

**Question 3:**
If two transformers with identical kVA ratings but different per-unit impedances are connected in parallel, how will the load be shared? What are the implications of this unequal sharing?

**Answer:**
If two transformers with identical kVA ratings but different per-unit impedances are connected in parallel, the load will not be shared equally or proportionally to their kVA ratings. The transformer with the **lower per-unit impedance** will draw a **larger share of the total load**.

**Implications:**
*   **Overloading:** The transformer with the lower per-unit impedance can be overloaded, even if its kVA rating is the same as the other transformer. This can lead to overheating and premature failure.
*   **Underloading:** The transformer with the higher per-unit impedance will be underloaded, operating at a lower efficiency and potentially not contributing its full capacity.
*   **Inefficient Operation:** The overall efficiency of the parallel combination might be lower than if the transformers were perfectly matched.
*   **Increased Losses:** The transformer drawing a larger current will experience higher $I^2R$ losses.
