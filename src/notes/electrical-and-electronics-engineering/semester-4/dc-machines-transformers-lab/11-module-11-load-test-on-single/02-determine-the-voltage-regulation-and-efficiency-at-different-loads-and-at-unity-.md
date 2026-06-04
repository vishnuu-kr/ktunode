---
title: "Determine the voltage regulation and efficiency at different loads and at unity power factor."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 11: Load test on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360d2"
status: "completed"
scrapedAt: "2026-05-23T16:15:35.340Z"
---
# DC Machines & Transformers Lab: Module 11 - Load Test on Single-Phase Transformer

## Topic: Determine the Voltage Regulation and Efficiency at Different Loads and at Unity Power Factor

---

### 1. Introduction

This module focuses on understanding the performance characteristics of a single-phase transformer under varying load conditions. Specifically, we will determine its **voltage regulation** and **efficiency** when operating at a **unity power factor**. This is a fundamental experiment that allows us to quantify how well a transformer maintains its output voltage and how effectively it converts electrical power under load.

---

### 2. Learning Outcomes

Upon completion of this module, you will be able to:

*   **Determine the voltage regulation of a single-phase transformer at different load levels and at unity power factor.** (Aligned with CO4, CO5)
*   **Determine the efficiency of a single-phase transformer at different load levels and at unity power factor.** (Aligned with CO3, CO4, CO5)
*   **Understand the relationship between load, voltage regulation, and efficiency.**
*   **Appreciate the practical implications of these parameters in transformer applications.**

---

### 3. Key Concepts and Definitions

#### 3.1. Single-Phase Transformer

A static electrical device that transfers electrical energy from one electrical circuit to another through electromagnetic induction. It changes the voltage and current levels of AC power while maintaining the frequency.

#### 3.2. Load Test

A test performed on a transformer by connecting a variable load to its secondary terminals and measuring various electrical parameters (voltage, current, power) at different load levels. This directly simulates the real-world operation of the transformer.

#### 3.3. Unity Power Factor (UPF)

The condition where the voltage and current in the circuit are in phase. For a purely resistive load, the power factor is unity.

#### 3.4. Voltage Regulation

The change in secondary terminal voltage from no-load to full-load, expressed as a percentage of the full-load secondary voltage. It indicates how well the transformer maintains its output voltage under varying load conditions.

**Formula:**

$$ \text{Voltage Regulation (VR)} = \frac{V_{\text{no-load}} - V_{\text{full-load}}}{V_{\text{full-load}}} \times 100\% $$

*   $V_{\text{no-load}}$: Secondary terminal voltage when no load is connected.
*   $V_{\text{full-load}}$: Secondary terminal voltage at full load.

**Ideally, voltage regulation should be zero.** A lower percentage indicates better regulation.

#### 3.5. Efficiency ($\eta$)

The ratio of output power to input power. It quantifies how effectively the transformer converts electrical energy.

**Formula:**

$$ \eta = \frac{\text{Output Power}}{\text{Input Power}} \times 100\% $$

$$ \eta = \frac{\text{Output Power}}{\text{Output Power} + \text{Losses}} \times 100\% $$

**Losses in a Transformer:**

*   **Core Losses (Iron Losses, $P_i$):** These are constant for a given voltage and frequency and occur in the core due to hysteresis and eddy currents.
    *   $P_i = P_{\text{hysteresis}} + P_{\text{eddy}}$
*   **Copper Losses ($P_{cu}$):** These losses occur in the windings due to the resistance of the conductors and are proportional to the square of the load current.
    *   $P_{cu} = I_2^2 R_{eq2}$, where $I_2$ is the secondary current and $R_{eq2}$ is the equivalent resistance referred to the secondary side.

#### 3.6. Equivalent Resistance Referred to Secondary ($R_{eq2}$)

This is a crucial parameter for calculating copper losses at different loads. It can be determined from the open-circuit and short-circuit tests.

**From Short Circuit Test:**
The impedance of the transformer referred to the primary side is $Z_{eq1} = R_{eq1} + jX_{eq1}$.
The equivalent resistance referred to the secondary side is $R_{eq2} = R_{eq1} (\frac{N_2}{N_1})^2 = R_{eq1} a^2$, where $a$ is the turns ratio.
The value of $R_{eq2}$ is obtained from the short-circuit test where the input power is measured at rated current and unity power factor.

**From Open Circuit Test:**
Core losses ($P_i$) are determined from the open-circuit test (usually measured at rated voltage and frequency).

---

### 4. Experimental Setup

*   **Single-Phase Transformer:** Under test.
*   **Variable Resistive Load:** To draw current from the secondary. Typically a bank of resistors with switches or a variac connected to a resistive load.
*   **AC Voltmeter:** To measure primary and secondary voltages.
*   **AC Ammeters:** To measure primary and secondary currents.
*   **Wattmeters:** To measure input power to the primary.
*   **Autotransformer/Variac:** To vary the primary voltage if needed, or to control the load current.
*   **Connecting Wires and Terminals.**

---

### 5. Procedure

1.  **Connections:**
    *   Connect the primary winding of the transformer to the AC supply through a suitable fuse and switch. An autotransformer can be connected in series with the primary for voltage control.
    *   Connect the secondary winding of the transformer to a variable resistive load.
    *   Connect a voltmeter across the primary terminals ($V_1$).
    *   Connect an ammeter in series with the primary winding ($I_1$).
    *   Connect a wattmeter in the primary circuit to measure the input power ($P_{in}$).
    *   Connect a voltmeter across the secondary terminals ($V_2$).
    *   Connect an ammeter in series with the secondary winding ($I_2$).
    *   Connect a wattmeter in the secondary circuit to measure the output power ($P_{out}$). (Optional, input power is usually sufficient for efficiency calculation).

2.  **No-Load Reading:**
    *   Disconnect the load from the secondary terminals.
    *   Apply rated primary voltage ($V_1$) to the primary winding.
    *   Record the primary voltage ($V_1$), primary current ($I_{p0}$), and primary power ($P_0$). This $P_0$ represents the no-load losses, which are essentially the core losses ($P_i$).

3.  **Load Readings:**
    *   Connect a purely resistive load to the secondary terminals such that the power factor is unity. This means the load current ($I_2$) is in phase with the secondary voltage ($V_2$).
    *   Start with a light load (e.g., 25% of rated load).
    *   Adjust the primary voltage using the autotransformer to achieve the rated primary voltage, or adjust the load to draw rated secondary current. **For this experiment, it's usually easier to adjust the load and observe the secondary voltage and current, ensuring unity power factor by using a purely resistive load.**
    *   Record the readings of:
        *   Primary voltage ($V_1$)
        *   Primary current ($I_1$)
        *   Input power ($P_{in}$)
        *   Secondary voltage ($V_2$)
        *   Secondary current ($I_2$)
    *   Increase the load in steps (e.g., 25%, 50%, 75%, 100%, 125% of rated load) and repeat the readings. **Note:** For loads above 100%, ensure the transformer can handle it without overheating.

#### **Important Note on Unity Power Factor:**

To ensure unity power factor, connect a purely resistive load (e.g., resistance banks, heater loads) to the secondary. The wattmeter in the secondary (or primary) circuit will indicate the power consumed by the load, and the power factor can be assumed to be unity if the load is purely resistive.

---

### 6. Calculations and Analysis

From the recorded readings, the following can be calculated for each load condition:

#### 6.1. Core Losses ($P_i$)

These are the no-load losses measured in step 2.
$$ P_i = P_0 $$
These losses are assumed to be constant at all load conditions.

#### 6.2. Copper Losses ($P_{cu}$)

Copper losses depend on the load current. They are calculated using the equivalent resistance referred to the secondary ($R_{eq2}$), which is typically obtained from the short-circuit test (though for this experiment, if $R_{eq2}$ is not provided or previously determined, we can approximate it using the input power and $I_2^2 R_{eq2}$ where $P_{in} - P_i$ is the total copper loss at that specific load).

However, to calculate $P_{cu}$ at *different* loads, we need $R_{eq2}$. If $R_{eq2}$ is known (e.g., from a previous short-circuit test):
$$ P_{cu} = I_2^2 R_{eq2} $$

If $R_{eq2}$ is not known, and we are assuming the load is purely resistive (UPF), we can also calculate the total losses at a given load:
$$ \text{Total Losses} = P_{in} - P_{out} $$
(where $P_{out} = V_2 \times I_2$ for unity power factor)
Then,
$$ P_{cu} = (\text{Total Losses}) - P_i $$

#### 6.3. Efficiency ($\eta$)

Using the calculated $P_{out}$ and $P_{in}$ (or $P_{out}$ and total losses):
$$ \eta = \frac{P_{out}}{P_{in}} \times 100\% $$
or
$$ \eta = \frac{P_{out}}{P_{out} + P_i + P_{cu}} \times 100\% $$

#### 6.4. Voltage Regulation (VR)

We need the no-load secondary voltage ($V_{2,\text{no-load}}$). This is usually the rated secondary voltage or the $V_2$ measured at no-load in step 2 with rated primary voltage applied.
$$ \text{VR} = \frac{V_{2,\text{no-load}} - V_2}{V_2} \times 100\% $$
Where $V_2$ is the secondary voltage at the specific load.

#### 6.5. Load Factor (k)

The ratio of the actual load to the rated load.
$$ k = \frac{\text{Actual Load}}{\text{Rated Load}} $$
For example, if the rated current is 10A and you are operating at 5A, $k = 0.5$.

---

### 7. Tabulation of Results

| Sr. No. | Load Type       | $V_1$ (V) | $I_1$ (A) | $P_{in}$ (W) | $V_2$ (V) | $I_2$ (A) | $P_{out}$ (W) ($V_2 \times I_2$) | $P_i$ (W) (from no-load) | $P_{cu}$ (W) ($P_{in} - P_{out} - P_i$) | $\eta$ (%) | VR (%) |
| :------ | :-------------- | :-------- | :-------- | :----------- | :-------- | :-------- | :------------------------------ | :----------------------- | :------------------------------------- | :--------- | :----- |
| 1       | No Load         | $V_{rated}$ | $I_{p0}$  | $P_0$        | $V_{2,\text{no-load}}$ | 0         | 0                               | $P_0$                    | 0                                      | -          | 0      |
| 2       | 25% Load (UPF)  |           |           |              |           |           |                                 |                          |                                        |            |        |
| 3       | 50% Load (UPF)  |           |           |              |           |           |                                 |                          |                                        |            |        |
| 4       | 75% Load (UPF)  |           |           |              |           |           |                                 |                          |                                        |            |        |
| 5       | 100% Load (UPF) |           |           |              |           |           |                                 |                          |                                        |            |        |
| 6       | 125% Load (UPF) |           |           |              |           |           |                                 |                          |                                        |            |        |

*Note: $V_{2,\text{no-load}}$ is the secondary voltage at no load when rated primary voltage is applied. For VR calculation at each load, use this value.*

---

### 8. Plotting of Characteristics

Plot the following graphs:

1.  **Efficiency ($\eta$) vs. Load (in kW or % of rated load)**
2.  **Voltage Regulation (VR) vs. Load (in % of rated load)**

---

### 9. Interpretation and Discussion

*   **Efficiency:** Observe how the efficiency varies with load. It is generally low at light loads, increases to a maximum value at a certain load (often around 75-85% of full load), and then slightly decreases at higher loads due to the dominant increase in copper losses.
*   **Voltage Regulation:** Observe how the voltage regulation changes with load. It is zero at no load and increases as the load increases. This increase is primarily due to the voltage drop across the transformer's internal impedance (resistance and leakage reactance). For unity power factor loads, the voltage regulation is generally lower than for lagging power factor loads.
*   **Maximum Efficiency:** The load at which maximum efficiency occurs can be determined analytically. Maximum efficiency occurs when copper losses equal core losses ($P_{cu} = P_i$).

    If $k$ is the load factor at which maximum efficiency occurs, then:
    $$ k^2 R_{eq2} I_{rated2}^2 = P_i $$
    $$ k^2 (I_{rated2}^2 R_{eq2}) = P_i $$
    $$ k^2 P_{cu,rated} = P_i $$
    $$ k = \sqrt{\frac{P_i}{P_{cu,rated}}} $$
    Where $P_{cu,rated}$ is the full-load copper loss.

---

### 10. Safety Precautions

*   Ensure all connections are tight and correct before switching on the supply.
*   Do not touch any live terminals while the transformer is energized.
*   Use appropriate ratings for meters and loads.
*   Avoid short-circuiting the supply.
*   Handle the transformer carefully to avoid physical damage.
*   Switch off the supply immediately if any unusual noise or smell is detected.

---

### 11. Practice Questions and Answers

**Q1. Define voltage regulation and state its significance.**

**Answer:** Voltage regulation is the percentage change in the secondary terminal voltage of a transformer from no-load to full-load, expressed as a percentage of the full-load secondary voltage.
$$ \text{VR} = \frac{V_{\text{no-load}} - V_{\text{full-load}}}{V_{\text{full-load}}} \times 100\% $$
Its significance lies in indicating how well the transformer maintains its output voltage under varying load conditions. A lower voltage regulation is desirable for applications requiring a stable output voltage.

**Q2. What are the two main types of losses in a transformer? How do they vary with load?**

**Answer:** The two main types of losses are:
1.  **Core Losses (Iron Losses, $P_i$):** These are constant with load and occur in the transformer core due to hysteresis and eddy currents. They depend on the applied voltage and frequency.
2.  **Copper Losses ($P_{cu}$):** These are variable losses that occur in the transformer windings due to the resistance of the conductors. They are proportional to the square of the load current ($P_{cu} \propto I_2^2$).

**Q3. At what condition does a transformer achieve maximum efficiency?**

**Answer:** A transformer achieves maximum efficiency when its variable losses (copper losses) are equal to its constant losses (core losses).
$$ P_{cu} = P_i $$

**Q4. A single-phase transformer has a no-load voltage of 240V and a full-load voltage of 230V. Calculate its voltage regulation.**

**Answer:**
$V_{\text{no-load}} = 240 \text{ V}$
$V_{\text{full-load}} = 230 \text{ V}$

$$ \text{VR} = \frac{240 - 230}{230} \times 100\% = \frac{10}{230} \times 100\% \approx 4.35\% $$

**Q5. A transformer has core losses of 100 W and full-load copper losses of 200 W. At what fraction of the full load will the efficiency be maximum?**

**Answer:**
$P_i = 100 \text{ W}$
$P_{cu,rated} = 200 \text{ W}$

Let $k$ be the fraction of full load for maximum efficiency.
At maximum efficiency, $P_{cu} = P_i$.
Copper loss at load $k$ is $k^2 \times P_{cu,rated}$.
So, $k^2 \times P_{cu,rated} = P_i$
$k^2 \times 200 = 100$
$k^2 = \frac{100}{200} = 0.5$
$k = \sqrt{0.5} \approx 0.707$

The efficiency will be maximum at approximately 70.7% of the full load.

**Q6. Why is a purely resistive load typically used when determining voltage regulation and efficiency at unity power factor?**

**Answer:** A purely resistive load ensures that the current in the secondary winding is in phase with the secondary terminal voltage, thus maintaining a unity power factor. This allows for the direct assessment of the transformer's performance under this specific power factor condition, simplifying calculations and analysis.

---

### 12. Important Points to Remember

*   **Unity Power Factor:** Always use a purely resistive load to achieve unity power factor.
*   **Constant Core Losses:** Core losses are assumed constant regardless of the load.
*   **Variable Copper Losses:** Copper losses vary as the square of the load current.
*   **Maximum Efficiency:** Occurs when copper losses equal core losses.
*   **Voltage Regulation:** A measure of voltage drop under load. It increases with load.
*   **Reference Values:** No-load voltage is the benchmark for voltage regulation calculation.
*   **Transformer Rating:** Pay attention to the transformer's kVA rating and avoid overloading.

---
