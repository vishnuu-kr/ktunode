---
title: "Plot the efficiency curve at unity p.f. and 0.5 p.f."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 10: OC and SC tests on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360cd"
status: "completed"
scrapedAt: "2026-05-23T16:15:32.369Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 10 - OC and SC Tests on Single-Phase Transformer

## Topic: Plot the Efficiency Curve at Unity p.f. and 0.5 p.f.

### 1. Introduction and Relevance

This lab module focuses on understanding the performance of a single-phase transformer by conducting Open Circuit (OC) and Short Circuit (SC) tests. From these tests, we can determine the transformer's equivalent circuit parameters, and subsequently, its efficiency under various load conditions and power factors. Plotting the efficiency curve is a crucial step in analyzing and predicting the transformer's behavior in real-world applications.

**Relation to Course Outcomes:**

*   **CO4:** Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3).
    *   This topic directly contributes to examining transformer performance by calculating and plotting efficiency, a key performance metric.
*   **CO5:** Determine the voltage regulation and efficiency of 3-phase transformer by conducting no-load tests. (Knowledge Level: K3)
    *   While this outcome mentions 3-phase transformers, the principles of determining efficiency from OC/SC tests are fundamentally the same for single-phase transformers. The ability to determine efficiency from these tests is a transferable skill.

### 2. Key Concepts and Definitions

#### 2.1 Single-Phase Transformer

A static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It works on the principle of mutual induction and is used to step up or step down AC voltages.

#### 2.2 Open Circuit (OC) Test

*   **Purpose:** To determine the **iron losses** (or core losses) and the **shunt branch parameters** ($R_0$ and $X_0$) of the transformer's equivalent circuit.
*   **Procedure:** The low-voltage (LV) side is excited with rated voltage at rated frequency. The high-voltage (HV) side is kept open.
*   **Measurements:** Voltage ($V_{OC}$), Current ($I_{OC}$), and Power ($P_{OC}$).
*   **Key Observation:** The current drawn during the OC test is very small (typically 2-5% of rated current) because the primary winding is connected to the rated voltage, and the transformer core is designed to have low reluctance, minimizing magnetizing current. The power consumed represents the iron losses (hysteresis and eddy current losses).

#### 2.3 Short Circuit (SC) Test

*   **Purpose:** To determine the **copper losses** (or ohmic losses) and the **series branch parameters** ($R_{eq}$ and $X_{eq}$) of the transformer's equivalent circuit.
*   **Procedure:** The HV side is short-circuited. A variable low voltage is applied to the LV side until rated current flows in the windings.
*   **Measurements:** Applied voltage ($V_{SC}$), Short-circuit current ($I_{SC}$), and Short-circuit power ($P_{SC}$).
*   **Key Observation:** The voltage required to circulate rated current is usually a small percentage (2-5%) of the rated voltage. The power consumed represents the total copper losses at rated load current.

#### 2.4 Transformer Equivalent Circuit

The approximate equivalent circuit of a transformer can be represented by two branches:
*   **Shunt Branch (Parallel Branch):** Represents the core losses and magnetizing reactance. It consists of a resistance ($R_0$) in parallel with a reactance ($X_0$).
    *   $R_0$: Represents iron losses.
    *   $X_0$: Represents magnetizing reactance.
*   **Series Branch (Primary Equivalent):** Represents the winding resistances and leakage reactances. It consists of a resistance ($R_{eq1}$) and a reactance ($X_{eq1}$) in series. These are referred to the primary side.
    *   $R_{eq1} = R_1 + a^2R_2$
    *   $X_{eq1} = X_1 + a^2X_2$
    (where $a$ is the turns ratio $N_1/N_2$, $R_1, X_1$ are primary winding impedance, and $R_2, X_2$ are secondary winding impedance).

#### 2.5 Transformer Efficiency

Efficiency ($\eta$) is defined as the ratio of output power ($P_{out}$) to input power ($P_{in}$).

$\eta = \frac{P_{out}}{P_{in}} = \frac{P_{out}}{P_{out} + \text{Losses}}$

The total losses in a transformer consist of:
*   **Constant Losses (Iron Losses, $P_i$):** These losses are primarily due to hysteresis and eddy currents in the core and are nearly constant for a constant applied voltage and frequency, regardless of the load. These are determined from the OC test.
    $P_i = P_{OC}$ (from OC test)
*   **Variable Losses (Copper Losses, $P_{cu}$):** These losses are due to the resistance of the windings and are proportional to the square of the load current. These are determined from the SC test.
    $P_{cu} = P_{SC}$ (at rated current)

#### 2.6 Efficiency at Different Loads and Power Factors

The copper losses vary with the load. If the transformer is operating at a fraction 'x' of its full load rating, the copper losses are $x^2 P_{cu,FL}$, where $P_{cu,FL}$ are the copper losses at full load (determined from the SC test at rated current).

The output power ($P_{out}$) can be expressed as:
$P_{out} = \text{Load Power} \times \text{Power Factor} = V_2 I_2 \cos(\phi_2)$

The input power ($P_{in}$) is:
$P_{in} = P_{out} + P_i + P_{cu}$

**Efficiency Formula:**

$\eta = \frac{V_2 I_2 \cos(\phi_2)}{V_2 I_2 \cos(\phi_2) + P_i + x^2 P_{cu,FL}}$

Where:
*   $V_2$: Rated secondary voltage
*   $I_2$: Rated secondary current
*   $\cos(\phi_2)$: Load power factor
*   $x$: Fraction of full load (e.g., $x=1$ for full load, $x=0.5$ for half load)
*   $P_i$: Iron losses (from OC test)
*   $P_{cu,FL}$: Copper losses at full load (from SC test at rated current)

### 3. Plotting the Efficiency Curve

To plot the efficiency curve at a specific power factor (e.g., unity p.f. or 0.5 p.f.), we need to calculate the efficiency for various fractions of the load (x).

#### 3.1 Steps for Plotting Efficiency Curve

1.  **Perform OC Test:**
    *   Apply rated voltage to the LV side.
    *   Measure $V_{OC}$, $I_{OC}$, and $P_{OC}$.
    *   Calculate iron losses: $P_i = P_{OC}$.

2.  **Perform SC Test:**
    *   Short the HV side.
    *   Apply a low variable voltage to the LV side until rated current flows in the LV winding.
    *   Measure $V_{SC}$, $I_{SC}$ (rated current), and $P_{SC}$.
    *   Calculate copper losses at full load: $P_{cu,FL} = P_{SC}$.
    *   From $P_{SC} = I_{SC}^2 R_{eq1}$ (or $I_{SC}^2 R_{eq2}$ if referred to secondary), calculate the equivalent resistance referred to the LV side: $R_{eq1} = \frac{P_{SC}}{I_{SC}^2}$ (assuming $I_{SC}$ is rated LV current).

3.  **Choose Load Fractions (x):** Select a range of load fractions, for example: 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2.

4.  **Choose Power Factor ($\cos(\phi)$):**
    *   **Unity Power Factor ($\cos(\phi) = 1$):** This is a common case for resistive loads.
    *   **0.5 Lagging Power Factor ($\cos(\phi) = 0.5$):** This is common for inductive loads.

5.  **Calculate Efficiency for Each Load Fraction and Power Factor:**
    For each load fraction 'x' and the chosen power factor:
    *   **Output Power ($P_{out}$):** $P_{out} = x \times \text{Rated Apparent Power} \times \cos(\phi)$
        *   *Note:* For simplicity in plotting the curve, we can directly use the load fraction 'x' to represent the ratio of output power to rated output power at a given power factor. So, $P_{out}$ for a load fraction 'x' at unity p.f. would be $x \times V_{2,rated} \times I_{2,rated}$. At 0.5 p.f., it would be $x \times V_{2,rated} \times I_{2,rated} \times 0.5$.
        *   Alternatively, one can consider $x$ as the ratio of output power to rated output power. If $P_{rated\_out} = V_{2,rated} \times I_{2,rated} \times \cos(\phi)$, then $P_{out} = x \times P_{rated\_out}$.
    *   **Copper Losses ($P_{cu}$):** $P_{cu} = x^2 \times P_{cu,FL}$
    *   **Input Power ($P_{in}$):** $P_{in} = P_{out} + P_i + P_{cu}$
    *   **Efficiency ($\eta$):** $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

6.  **Plot the Efficiency Curve:**
    *   Create a graph with Load Fraction (x) on the x-axis and Efficiency ($\eta$) on the y-axis.
    *   Plot the calculated efficiency values for the unity power factor case.
    *   Plot the calculated efficiency values for the 0.5 power factor case on the same graph.

#### 3.2 Example Calculation (Illustrative)

Let's assume the following results from OC and SC tests on a 5 kVA, 230/115 V single-phase transformer:

**OC Test (on LV side):**
$V_{OC} = 230$ V, $I_{OC} = 0.5$ A, $P_{OC} = 50$ W
This means $P_i = P_{OC} = 50$ W.

**SC Test (on LV side):**
$V_{SC} = 10$ V, $I_{SC} = 4.35$ A (Rated LV current, $5000 / 115 \approx 43.48$ A. *Correction: The SC test is usually performed on the HV side or with rated current on the LV side. Let's assume rated current of 43.48A on LV side for calculation simplicity if the test was done on LV side.* Let's assume the SC test was performed on the HV side with rated current and we need to refer parameters to LV side. Or, a more practical SC test is done on the LV side to get rated current. Let's re-align:

Let's assume the transformer is 230V (HV) / 115V (LV).
Rated current on LV side ($I_{2,rated}$) = $5000 / 115 \approx 43.48$ A.
Rated current on HV side ($I_{1,rated}$) = $5000 / 230 \approx 21.74$ A.

**Practical SC Test (on LV side for simplicity):**
Apply voltage to LV side (115V side), short HV side.
$V_{SC} = 10$ V, $I_{SC} = 43.48$ A, $P_{SC} = 120$ W
This means $P_{cu,FL} = P_{SC} = 120$ W.
Equivalent resistance referred to LV side: $R_{eq2} = \frac{P_{SC}}{I_{SC}^2} = \frac{120}{(43.48)^2} \approx 0.0637 \Omega$.

**Rated Apparent Power:** $S_{rated} = 5$ kVA = 5000 VA
**Rated Secondary Voltage:** $V_{2,rated} = 115$ V
**Rated Secondary Current:** $I_{2,rated} = 43.48$ A

**Iron Losses:** $P_i = 50$ W
**Full Load Copper Losses:** $P_{cu,FL} = 120$ W

Now, let's calculate efficiency for various load fractions 'x' at Unity P.F. ($\cos(\phi)=1$) and 0.5 P.F. ($\cos(\phi)=0.5$).

**For Unity Power Factor ($\cos(\phi) = 1$)**

| Load Fraction (x) | Output Power ($P_{out}$) (W) | Copper Losses ($P_{cu}$) (W) | Input Power ($P_{in}$) (W) | Efficiency ($\eta$) (%) |
| :---------------- | :--------------------------- | :--------------------------- | :------------------------- | :---------------------- |
| 0                 | 0                            | 0                            | $P_i = 50$                 | 0                       |
| 0.5               | $0.5 \times (115 \times 43.48 \times 1)$ = 2500 | $0.5^2 \times 120 = 30$      | $2500 + 50 + 30 = 2580$    | $\frac{2500}{2580} \times 100 \approx 96.90$ |
| 1.0               | $1.0 \times (115 \times 43.48 \times 1)$ = 5000 | $1.0^2 \times 120 = 120$     | $5000 + 50 + 120 = 5170$   | $\frac{5000}{5170} \times 100 \approx 96.71$ |
| 1.2               | $1.2 \times (115 \times 43.48 \times 1)$ = 6000 | $1.2^2 \times 120 = 172.8$   | $6000 + 50 + 172.8 = 6222.8$ | $\frac{6000}{6222.8} \times 100 \approx 96.42$ |

**For 0.5 Lagging Power Factor ($\cos(\phi) = 0.5$)**

| Load Fraction (x) | Output Power ($P_{out}$) (W) | Copper Losses ($P_{cu}$) (W) | Input Power ($P_{in}$) (W) | Efficiency ($\eta$) (%) |
| :---------------- | :--------------------------- | :--------------------------- | :------------------------- | :---------------------- |
| 0                 | 0                            | 0                            | $P_i = 50$                 | 0                       |
| 0.5               | $0.5 \times (115 \times 43.48 \times 0.5)$ = 1250 | $0.5^2 \times 120 = 30$      | $1250 + 50 + 30 = 1330$    | $\frac{1250}{1330} \times 100 \approx 93.98$ |
| 1.0               | $1.0 \times (115 \times 43.48 \times 0.5)$ = 2500 | $1.0^2 \times 120 = 120$     | $2500 + 50 + 120 = 2670$   | $\frac{2500}{2670} \times 100 \approx 93.63$ |
| 1.2               | $1.2 \times (115 \times 43.48 \times 0.5)$ = 3000 | $1.2^2 \times 120 = 172.8$   | $3000 + 50 + 172.8 = 3222.8$ | $\frac{3000}{3222.8} \times 100 \approx 93.08$ |

**Observation:**
The efficiency is generally higher at unity power factor compared to a lagging power factor for the same load fraction. This is because the output power is higher at unity p.f. for the same voltage and current.

#### 3.3 Finding the Load for Maximum Efficiency

Maximum efficiency occurs when the variable losses (copper losses) are equal to the constant losses (iron losses).
$P_{cu} = P_i$
$x^2 P_{cu,FL} = P_i$
$x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}}$

For the example above:
$x_{max} = \sqrt{\frac{50}{120}} \approx \sqrt{0.4167} \approx 0.6455$

This means maximum efficiency for this transformer occurs at approximately 64.55% of its full load.

### 4. Important Points to Remember

*   **OC Test:** Performed on the **LV side** with rated voltage to determine **iron losses** ($P_i = P_{OC}$) and shunt parameters ($R_0, X_0$). The current drawn is small.
*   **SC Test:** Performed on the **HV side** (or applying reduced voltage on LV side to get rated current) with rated current to determine **copper losses** ($P_{cu,FL} = P_{SC}$) and series parameters ($R_{eq}, X_{eq}$). The voltage applied is low.
*   **Efficiency Formula:** $\eta = \frac{P_{out}}{P_{out} + P_i + P_{cu}}$, where $P_{cu} = x^2 P_{cu,FL}$.
*   **Load Fraction (x):** Represents the ratio of actual load to rated load.
*   **Power Factor (cos($\phi$)):** Affects the output power calculation. Efficiency is generally higher at higher power factors.
*   **Maximum Efficiency:** Occurs when iron losses equal copper losses.
*   **Plotting:** Ensure consistent units and label axes clearly. Plotting is usually done with load fraction or percentage of full load on the x-axis and efficiency on the y-axis.
*   **Practical Considerations:** Ensure all instruments are calibrated and connected correctly. Safety precautions must be followed during transformer testing.

### 5. Practice Questions and Exercises

**Question 1:**
From the OC and SC test results of a single-phase transformer, you obtained the following:
*   OC Test (on LV side): $V_{OC} = 240$ V, $I_{OC} = 0.4$ A, $P_{OC} = 40$ W
*   SC Test (on LV side, with rated current): $V_{SC} = 12$ V, $I_{SC} = 20$ A, $P_{SC} = 100$ W
The transformer is rated at 240/120 V, 2 kVA.

**(a)** Determine the iron losses and full-load copper losses.
**(b)** Calculate the efficiency at full load, unity power factor.
**(c)** Calculate the efficiency at half load, 0.8 lagging power factor.
**(d)** Determine the load at which maximum efficiency occurs.
**(e)** Calculate the maximum efficiency at unity power factor.

**Answer 1:**

Given:
*   $S_{rated} = 2$ kVA = 2000 VA
*   $V_{1,rated} = 240$ V, $V_{2,rated} = 120$ V
*   $I_{1,rated} = 2000/240 \approx 8.33$ A
*   $I_{2,rated} = 2000/120 = 16.67$ A

**(a)**
*   Iron Losses ($P_i$) = $P_{OC} = 40$ W (constant losses)
*   Full Load Copper Losses ($P_{cu,FL}$) = $P_{SC} = 100$ W

**(b)** Efficiency at full load, unity power factor ($\cos(\phi)=1$):
*   $x = 1.0$
*   $P_{out} = x \times S_{rated} \times \cos(\phi) = 1.0 \times 2000 \times 1 = 2000$ W
*   $P_{cu} = x^2 \times P_{cu,FL} = (1.0)^2 \times 100 = 100$ W
*   $P_{in} = P_{out} + P_i + P_{cu} = 2000 + 40 + 100 = 2140$ W
*   $\eta = \frac{P_{out}}{P_{in}} \times 100 = \frac{2000}{2140} \times 100 \approx 93.46\%$

**(c)** Efficiency at half load, 0.8 lagging power factor ($\cos(\phi)=0.8$):
*   $x = 0.5$
*   $P_{out} = x \times S_{rated} \times \cos(\phi) = 0.5 \times 2000 \times 0.8 = 800$ W
*   $P_{cu} = x^2 \times P_{cu,FL} = (0.5)^2 \times 100 = 0.25 \times 100 = 25$ W
*   $P_{in} = P_{out} + P_i + P_{cu} = 800 + 40 + 25 = 865$ W
*   $\eta = \frac{P_{out}}{P_{in}} \times 100 = \frac{800}{865} \times 100 \approx 92.49\%$

**(d)** Load for maximum efficiency ($x_{max}$):
*   $x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}} = \sqrt{\frac{40}{100}} = \sqrt{0.4} \approx 0.632$
*   Maximum efficiency occurs at approximately 63.2% of full load.

**(e)** Maximum efficiency at unity power factor:
*   Load fraction $x = 0.632$.
*   $P_{out} = x \times S_{rated} \times \cos(\phi) = 0.632 \times 2000 \times 1 = 1264$ W
*   $P_{cu} = x^2 \times P_{cu,FL} = (0.632)^2 \times 100 \approx 0.4 \times 100 = 40$ W
*   $P_{in} = P_{out} + P_i + P_{cu} = 1264 + 40 + 40 = 1344$ W
*   Maximum Efficiency ($\eta_{max}$) = $\frac{P_{out}}{P_{in}} \times 100 = \frac{1264}{1344} \times 100 \approx 94.05\%$

**Question 2:**
Why is the efficiency of a transformer lower at light loads compared to full load (at the same power factor)?

**Answer 2:**
At light loads, the output power is very small. However, the iron losses ($P_i$) remain approximately constant. The copper losses ($P_{cu}$) are proportional to the square of the load current, so they are also small at light loads.
The efficiency formula is $\eta = \frac{P_{out}}{P_{out} + \text{Losses}}$.
As the load decreases, $P_{out}$ decreases significantly, while the losses ($P_i + P_{cu}$) do not decrease proportionally (especially $P_i$). This leads to a lower efficiency because the denominator increases relative to the numerator. The ratio $P_{out}/\text{Losses}$ becomes smaller.
