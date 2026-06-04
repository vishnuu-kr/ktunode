---
title: "Sumpner’s test (CO4)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 13: Sumpner’s test (CO4)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360d9"
status: "completed"
scrapedAt: "2026-05-23T16:15:39.440Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 13: Sumpner's Test (CO4)

This module focuses on **Sumpner's Test**, a crucial experimental procedure for evaluating the performance of single-phase transformers. This test is particularly useful for determining various parameters, including efficiencies at different load conditions and losses, without the need for excessive power dissipation.

## Course Outcome Addressed:

*   **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)** - Sumpner's test directly contributes to this CO by providing a method to assess the transformer's performance under load conditions without actually loading it to its full capacity.

## Learning Outcomes for this Module:

Upon successful completion of this module, students will be able to:

*   Understand the principle of Sumpner's test for single-phase transformers.
*   Identify the experimental setup required for conducting Sumpner's test.
*   Perform Sumpner's test on a given single-phase transformer.
*   Calculate the various losses (core loss, copper loss) in the transformer from the test data.
*   Determine the efficiency of the transformer at different load conditions.
*   Analyze the performance characteristics of the transformer based on the test results.

## 1. Introduction to Sumpner's Test

Sumpner's test is a **back-to-back** or **summation test** for single-phase transformers. It allows us to determine the **efficiency** and **voltage regulation** of a transformer under various load conditions with significantly reduced power consumption. This is achieved by connecting two identical transformers in a specific configuration and supplying power to one while the other acts as a load.

### 1.1 Principle of Sumpner's Test

The core principle behind Sumpner's test is to simulate the full-load conditions of two identical transformers by supplying only the **no-load losses** of one transformer and the **copper losses** of both transformers at the desired load.

*   **Two Identical Transformers:** The test requires two identical single-phase transformers (say, Transformer T1 and Transformer T2) of the same rating.
*   **Back-to-Back Connection:** The secondary windings of the two transformers are connected in series, with their polarities opposing each other.
*   **Primary Supply:** A variable low-voltage AC supply is connected to the primary winding of one transformer (T1).
*   **Secondary Current:** The secondary current in T1 flows through the secondary winding of T2 in the opposite direction. This creates a circulating current in the series-connected secondaries.
*   **Load Simulation:** By adjusting the primary voltage of T1, the secondary current can be controlled. This secondary current represents the load current flowing through the windings.

**Key Idea:** When the secondaries are connected in series with opposing polarities, the net voltage appearing across the series combination is the difference between the induced voltages in the secondary windings. By controlling the primary voltage of T1, we can ensure that this voltage difference is such that the desired load current flows.

## 2. Experimental Setup for Sumpner's Test

The typical circuit diagram for Sumpner's test involves the following components:

*   **Two Identical Single-Phase Transformers (T1 and T2):** Rated for the same primary and secondary voltages, frequency, and power.
*   **Variable AC Supply:** Typically a variac (auto-transformer) to provide a variable voltage to the primary of T1.
*   **Voltmeter (V1):** Connected across the primary of T1 to measure the primary applied voltage.
*   **Ammeter (A1):** Connected in series with the primary of T1 to measure the primary current.
*   **Wattmeter (W1):** Connected in the primary circuit to measure the total power input to the system (primarily to T1).
*   **Voltmeter (V2):** Connected across the series combination of the secondary windings to measure the voltage difference between the secondary terminals. This voltage is indicative of the load.
*   **Ammeter (A2):** Connected in the series secondary circuit to measure the circulating current, which represents the load current.
*   **Wattmeter (W2):** Connected in the secondary circuit to measure the power dissipated in the copper losses of both transformers.

### 2.1 Circuit Diagram

```
                 Primary Side of T1
+---------------------------------------------------+
|                                                   |
|  ~ Variable AC Supply --- Variac --- V1 --- A1 --- W1 --- Primary of T1 ---
|                                                   |
+---------------------------------------------------+
      |
      | Secondary of T1
      |
      o----------o
      |          |
      |          | Secondary of T2
      |          |
      o----------o
      |          |
      |          |
      |          |
      |          |
      |          |
      o----------o
      |          |
      |          |
      |          |
      |          |
      |          |
      o----------o
      |
      |
      +----------o W2 --- A2 --- V2 --- (Connect to secondary terminals of T2)

Note: The polarities of the secondary windings are connected in opposition.
      For example, if the primary terminal marked 'H1' of T1 is connected to the supply,
      and the induced secondary voltage polarity is such that 'h1' is positive relative to 'h2',
      then 'h1' of T2 should be connected to 'h2' of T1, and 'h2' of T2 to the terminal where 'h2' of T1 is connected.
```

## 3. Procedure for Sumpner's Test

The test is typically conducted in two stages:

**Stage 1: Determining Core Losses (No-Load Losses)**

1.  **Setup:** Connect the two identical transformers as per the Sumpner's test circuit diagram. Ensure the secondary windings are connected in series with opposing polarities.
2.  **Initial State:** Start with the variac set to its minimum voltage.
3.  **Primary Voltage Application:** Gradually increase the primary voltage (applied to T1) until the rated secondary voltage is induced across the series combination of the secondary windings (i.e., V2 reaches the rated secondary voltage of one transformer).
4.  **Readings:** At this point, the current in the primary (A1) and secondary (A2) will be very small. Record the readings of:
    *   Primary applied voltage (V1)
    *   Primary current (I1 or A1)
    *   Secondary voltage (V2)
    *   Secondary current (I2 or A2)
    *   Primary wattmeter reading (W1)
5.  **Interpretation:** The wattmeter reading (W1) at this stage primarily represents the **core losses** (hysteresis and eddy current losses) of Transformer T1, as the copper losses are negligible due to the very low currents.

**Stage 2: Determining Copper Losses (Load Losses)**

1.  **Adjusting for Load:** Keeping the secondary voltage (V2) at the rated secondary voltage of one transformer (to simulate rated voltage across the windings), adjust the primary voltage (V1) of T1 so that the secondary current (A2) is equal to the **rated full-load current** of the transformer.
2.  **Circulating Current:** This circulating current in the secondaries represents the load current.
3.  **Readings:** Record the readings of:
    *   Primary applied voltage (V1)
    *   Primary current (I1 or A1)
    *   Secondary voltage (V2)
    *   Secondary current (I2 or A2)
    *   Secondary wattmeter reading (W2)
4.  **Interpretation:** The wattmeter reading (W2) in the secondary circuit now represents the **total copper losses** occurring in both transformers at full load. Since the transformers are identical, the copper loss in each transformer is W2 / 2.

**Important Note on Polarity:** Incorrect connection of secondary windings will result in zero voltage across V2 or a very high current that could damage the transformers. Always verify the polarity markings of the transformers before connecting.

## 4. Calculations and Performance Analysis

From the readings obtained in Sumpner's test, the following parameters can be calculated:

### 4.1 Core Losses (Iron Losses)

*   **P_core = W1 (from Stage 1)**
    *   This is the power input to T1 when V2 is at rated secondary voltage and A2 is very low. This value is assumed to be constant for all loads.

### 4.2 Copper Losses

*   **Total Copper Loss at Full Load (P_cu_full_load) = W2 (from Stage 2)**
*   **Copper Loss per Transformer at Full Load (P_cu_per_transformer) = W2 / 2**
*   **Copper Loss at any Load (P_cu_load) = I_load² * R_eq**
    *   Where `I_load` is the load current and `R_eq` is the equivalent resistance of the transformer referred to the secondary side.
    *   From Stage 2, we have: `W2 / 2 = I_rated² * R_eq`
    *   Therefore, `R_eq = (W2 / 2) / I_rated²`
    *   For any load current `I_load`, `P_cu_load = I_load² * [(W2 / 2) / I_rated²]`
    *   This can be simplified to: **`P_cu_load = P_cu_per_transformer * (I_load / I_rated)²`**

### 4.3 Total Losses

*   **Total Losses at any Load = P_core + P_cu_load**

### 4.4 Efficiency (η)

*   **Efficiency (η) = (Output Power / Input Power) * 100%**
*   **Output Power = V_out * I_out * cos(φ)**
    *   Where `V_out` is the output voltage, `I_out` is the output current, and `cos(φ)` is the power factor of the load.
*   **Input Power = Output Power + Total Losses**
*   **Therefore, η = (Output Power / (Output Power + Total Losses)) * 100%**

    **Using Sumpner's Test Data:**
    Let's consider the primary side of T1. The input power is W1 (from Stage 1) + the power required to circulate the load current.
    *   The primary current `I1` in Stage 2 is related to the secondary current `I2` by the turns ratio `a = N1/N2`. So, `I1 ≈ I2 / a`.
    *   The power input to T1 in Stage 2 (let's call it `P_in_stage2`) is approximately `V1 * I1 * cos(φ_primary)`.
    *   The total power input to the system in Stage 2 is approximately `P_in_stage2`.
    *   The power dissipated in the secondaries (copper losses) is `W2`.
    *   The power dissipated in the primaries (copper losses) is also `W2 / a²` (assuming resistance referred to primary).

    **A simpler and more direct approach for efficiency calculation using Sumpner's test data:**

    For a given load current `I_load` (which is `A2` reading from Stage 2):
    *   **Core Losses (P_core) = W1 (from Stage 1)** (assumed constant)
    *   **Copper Losses (P_cu_load) = P_cu_per_transformer * (I_load / I_rated)² = (W2 / 2) * (I_load / I_rated)²**
    *   **Total Losses = P_core + P_cu_load**
    *   **Input Power (Primary of T1) = W1 + Power input to primary for copper losses in T1 and T2.**
        *   The power input to the primary of T1 when circulating the load current `I_load` in the secondary is approximately `V1_stage2 * I1_stage2`, where `V1_stage2` and `I1_stage2` are the primary voltage and current in Stage 2. This `V1_stage2 * I1_stage2` is the total power supplied to the primary of T1 to overcome core losses and copper losses in T1 and T2.
        *   However, a more practical way to consider the input power for efficiency calculation is from the perspective of the load. If the transformer is stepping down voltage from `V_rated_primary` to `V_rated_secondary` with a load current `I_load` at the secondary and power factor `cos(φ)`:
            *   **Output Power = V_rated_secondary * I_load * cos(φ)**
            *   **Input Power = Output Power + Total Losses**
            *   **Efficiency (η) = (V_rated_secondary * I_load * cos(φ)) / (V_rated_secondary * I_load * cos(φ) + P_core + P_cu_load)**

    **To determine efficiency at various load power factors, we typically assume a lagging power factor (e.g., 0.8 lagging) or use a variable load to simulate different power factors.**

### 4.5 Voltage Regulation

Voltage regulation is defined as the change in secondary voltage from no-load to full-load, expressed as a percentage of the full-load voltage.
*   **No-Load Secondary Voltage:** This is the secondary voltage when no current is drawn. It is usually equal to the rated secondary voltage of the transformer.
*   **Full-Load Secondary Voltage:** This is the secondary voltage under full-load conditions. In Sumpner's test, the secondary voltage (V2) is kept constant at the rated secondary voltage of one transformer throughout Stage 2, which represents the secondary terminal voltage.

**Sumpner's test is not directly ideal for measuring voltage regulation as accurately as other methods because the primary voltage is adjusted to maintain a constant secondary voltage.** However, if we were to stop at a specific secondary current (load) and note the primary voltage required to achieve this, and then extrapolate to no-load conditions (which would require a very low primary voltage), we could estimate it. A more common approach for voltage regulation would be the **Open Circuit and Short Circuit Test method**.

### 4.6 Equivalent Resistance and Reactance

*   **Equivalent Resistance Referred to Secondary (R_eq):**
    *   From Stage 2: `R_eq = (W2 / 2) / I_rated²`
*   **Equivalent Impedance Referred to Secondary (Z_eq):**
    *   `Z_eq = V_rated_secondary / I_rated` (where `V_rated_secondary` is the rated secondary voltage of one transformer).
*   **Equivalent Leakage Reactance Referred to Secondary (X_eq):**
    *   `X_eq = √(Z_eq² - R_eq²)`

## 5. Advantages and Disadvantages of Sumpner's Test

### 5.1 Advantages

*   **Power Saving:** Significant power saving compared to loading the transformer directly, as only the losses are supplied.
*   **Efficiency at All Loads:** Allows determination of efficiency at various load conditions without the need for large load banks.
*   **Reduced Heating:** Minimal heating of the transformers as only a fraction of the full-load power is dissipated.
*   **Suitable for Large Transformers:** Particularly useful for large transformers where direct loading is impractical and costly.

### 5.2 Disadvantages

*   **Requires Two Identical Transformers:** The test can only be performed on two identical transformers.
*   **Requires Careful Polarity Connection:** Incorrect polarity connection can lead to short circuits or incorrect results.
*   **Not Ideal for Voltage Regulation:** Direct measurement of voltage regulation is not as straightforward as with other methods.
*   **Assumes Identical Performance:** Assumes both transformers have identical characteristics, which might not be perfectly true in practice.

## 6. Examples

**Example 1: Calculating Efficiency**

A 10 kVA, 400V/200V, 50Hz single-phase transformer is tested using Sumpner's test with another identical transformer. The readings are as follows:

**Stage 1 (No Load):**
*   Primary Voltage (V1) = 400 V
*   Primary Current (I1) = 1.5 A
*   Secondary Voltage (V2) = 200 V
*   Secondary Current (I2) = 0.1 A
*   Wattmeter Reading (W1) = 120 W

**Stage 2 (Load Condition for Full Load Copper Loss):**
*   Primary Voltage (V1) = 420 V
*   Primary Current (I1) = 10 A
*   Secondary Voltage (V2) = 200 V
*   Secondary Current (I2) = 50 A
*   Wattmeter Reading (W2) = 200 W

**Calculations:**

*   **Rated Voltage:** V1_rated = 400 V, V2_rated = 200 V
*   **Rated kVA:** 10 kVA
*   **Rated Primary Current:** I1_rated = 10000 / 400 = 25 A
*   **Rated Secondary Current:** I2_rated = 10000 / 200 = 50 A
*   **Core Losses (P_core) = W1 = 120 W** (constant for all loads)
*   **Copper Losses at Full Load (P_cu_full_load) = W2 = 200 W** (total for both transformers)
*   **Copper Loss per Transformer at Full Load (P_cu_per_transformer) = W2 / 2 = 200 W / 2 = 100 W**

**Now, let's calculate efficiency at:**
*   **(a) Full Load (with 0.8 lagging power factor)**
    *   Output Power = kVA rating * power factor = 10 kVA * 0.8 = 8 kW = 8000 W
    *   Load Current = I2_rated = 50 A
    *   Copper Losses at Full Load (P_cu_load) = 100 W (for one transformer)
    *   Total Losses = P_core + P_cu_load = 120 W + 100 W = 220 W
    *   Input Power = Output Power + Total Losses = 8000 W + 220 W = 8220 W
    *   Efficiency (η) = (Output Power / Input Power) * 100% = (8000 W / 8220 W) * 100% = **97.32%**

*   **(b) Half Load (with 0.8 lagging power factor)**
    *   Output Power = (10 kVA / 2) * 0.8 = 5 kVA * 0.8 = 4 kW = 4000 W
    *   Load Current = I2_rated / 2 = 50 A / 2 = 25 A
    *   Copper Losses at Half Load (P_cu_load) = P_cu_per_transformer * (I_load / I_rated)² = 100 W * (25 A / 50 A)² = 100 W * (0.5)² = 100 W * 0.25 = 25 W
    *   Total Losses = P_core + P_cu_load = 120 W + 25 W = 145 W
    *   Input Power = Output Power + Total Losses = 4000 W + 145 W = 4145 W
    *   Efficiency (η) = (Output Power / Input Power) * 100% = (4000 W / 4145 W) * 100% = **96.50%**

**Example 2: Finding Equivalent Resistance**

Using the data from Example 1, find the equivalent resistance of the transformer referred to the secondary side.

*   **R_eq = (P_cu_per_transformer) / (I_rated)²**
*   `R_eq = 100 W / (50 A)²`
*   `R_eq = 100 W / 2500 A²`
*   **R_eq = 0.04 Ω**

## 7. Practice Questions and Exercises

1.  **State the principle of Sumpner's test.** (Knowledge Level: K1)
    *   **Answer:** Sumpner's test is a back-to-back test for transformers that simulates full-load conditions by connecting two identical transformers in series at their secondary windings with opposing polarities and supplying power to the primary of one. It allows determination of efficiency and losses with minimal power dissipation.

2.  **Why is Sumpner's test preferred for large transformers?** (Knowledge Level: K2)
    *   **Answer:** It is preferred for large transformers because direct loading would require a massive load bank and dissipate a large amount of power, leading to significant operating costs and heating issues. Sumpner's test only dissipates the losses of the transformers, making it highly efficient in terms of power consumption.

3.  **From the following Sumpner's test data for two identical 5 kVA, 240V/120V transformers:**
    **Stage 1 (No Load):** V1 = 240V, I1 = 2A, V2 = 120V, I2 = 0.1A, W1 = 50W
    **Stage 2 (Full Load):** V1 = 250V, I1 = 10A, V2 = 120V, I2 = 41.67A, W2 = 90W

    *   (a) Calculate the core losses. (Knowledge Level: K3)
    *   (b) Calculate the copper losses at full load. (Knowledge Level: K3)
    *   (c) Calculate the efficiency at full load with a power factor of 0.8 lagging. (Knowledge Level: K3)

    **Answers:**
    *   (a) Core Losses (P_core) = W1 = **50 W**
    *   (b) Copper Losses at Full Load (P_cu_full_load) = W2 = **90 W** (total for both)
    *   (c)
        *   Output Power = 5 kVA * 0.8 = 4000 W
        *   Copper Loss per transformer at full load = 90W / 2 = 45 W
        *   Total Losses = P_core + P_cu_full_load = 50 W + 45 W = 95 W
        *   Input Power = Output Power + Total Losses = 4000 W + 95 W = 4095 W
        *   Efficiency (η) = (4000 W / 4095 W) * 100% = **97.68%**

4.  **Explain the role of voltmeter V2 in the Sumpner's test circuit.** (Knowledge Level: K2)
    *   **Answer:** Voltmeter V2 measures the voltage across the series combination of the secondary windings. In Stage 1, it's adjusted to the rated secondary voltage to ensure no-load conditions are met. In Stage 2, it's kept constant at the rated secondary voltage to simulate the load terminal voltage. The reading of V2 is an indicator of how well the secondary voltages of the two transformers match.

## 8. Important Points to Remember

*   **Identical Transformers:** Sumpner's test is only valid for two identical transformers.
*   **Polarity:** Correct connection of secondary winding polarities is critical. Opposing polarities are essential.
*   **Core Loss Assumption:** Core losses are assumed to be constant at all loads, which is a reasonable approximation.
*   **Copper Loss Variation:** Copper losses are proportional to the square of the load current.
*   **Efficiency Peaks:** Efficiency is generally highest at a load slightly less than full load.
*   **Voltage Regulation:** While Sumpner's test provides performance data, it's not the primary method for determining voltage regulation.
