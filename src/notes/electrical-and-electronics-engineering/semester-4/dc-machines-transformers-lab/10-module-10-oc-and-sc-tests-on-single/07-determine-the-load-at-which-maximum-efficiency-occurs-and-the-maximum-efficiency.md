---
title: "Determine the load at which maximum efficiency occurs and the maximum efficiency."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 10: OC and SC tests on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360cf"
status: "completed"
scrapedAt: "2026-05-23T16:15:33.854Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 10 - OC and SC Tests on Single-Phase Transformer

## Topic: Determine the Load at which Maximum Efficiency Occurs and the Maximum Efficiency

This module focuses on understanding the efficiency of a single-phase transformer by utilizing the data obtained from Open Circuit (OC) and Short Circuit (SC) tests. These tests allow us to determine the various losses within the transformer, which are crucial for calculating its efficiency.

---

### 1. Introduction to Transformer Efficiency

**Definition:** Efficiency of a transformer is defined as the ratio of output power to the input power.

$$ \eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Output Power}}{\text{Output Power} + \text{Losses}} \times 100\% $$

Transformers are generally highly efficient machines, often exceeding 95%. However, their efficiency varies with the load.

---

### 2. Losses in a Single-Phase Transformer

The losses in a single-phase transformer can be broadly categorized as:

*   **Constant Losses (Iron Losses):** These losses occur in the core of the transformer and are essentially constant regardless of the load. They are primarily due to hysteresis and eddy currents in the core material.
    *   **Hysteresis Loss:** Caused by the continuous magnetization and demagnetization of the core material as the alternating flux changes.
    *   **Eddy Current Loss:** Induced by the alternating flux in the core material, causing circulating currents that dissipate energy as heat.
*   **Variable Losses (Copper Losses):** These losses occur in the windings of the transformer due to the current flowing through them. They are proportional to the square of the load current.

---

### 3. Determining Losses from OC and SC Tests

The OC and SC tests are standard methods to determine the transformer's losses and equivalent circuit parameters.

#### 3.1 Open Circuit (OC) Test (No-Load Test)

*   **Purpose:** To determine the **iron losses (constant losses)** and the shunt branch parameters (magnetizing reactance $X_m$ and core loss resistance $R_c$) of the transformer's equivalent circuit.
*   **Procedure:**
    *   The low-voltage (LV) side is excited at rated voltage and frequency.
    *   The high-voltage (HV) side is kept open-circuited.
    *   A wattmeter ($W_{OC}$), ammeter ($A_{OC}$), and voltmeter ($V_{OC}$) are connected to the LV side.
*   **Observation:**
    *   $V_{OC}$: Rated voltage applied to the LV side.
    *   $I_{OC}$: Small no-load current.
    *   $W_{OC}$: Power input to the transformer at no load.
*   **Calculation:**
    *   Since the current $I_{OC}$ is very small, the copper losses ($I_{OC}^2 R_{eq}$) on the LV side are negligible.
    *   Therefore, the power measured by the wattmeter ($W_{OC}$) is approximately equal to the **iron losses ($P_{i}$)**.
    *   $P_i = W_{OC}$
    *   The equivalent resistance referred to the LV side can be calculated as:
        $$ R_{eq(LV)} = \frac{V_{OC}^2}{W_{OC}} $$
    *   From the phasor diagram of the OC test, the shunt branch resistance $R_c$ can be calculated as:
        $$ R_c = \frac{V_{OC}^2}{W_{OC}} = R_{eq(LV)} $$
    *   The shunt branch magnetizing reactance $X_m$ can be calculated using the measured $I_{OC}$ and calculated $R_c$:
        $$ I_{OC}^2 = I_{m}^2 + I_{c}^2 $$
        where $I_c = V_{OC} / R_c$ and $I_m = V_{OC} / X_m$.
        $$ X_m = \frac{V_{OC}}{\sqrt{I_{OC}^2 - (V_{OC}/R_c)^2}} $$

#### 3.2 Short Circuit (SC) Test

*   **Purpose:** To determine the **copper losses (variable losses)** at full load and the series branch parameters (equivalent resistance $R_{eq}$ and equivalent leakage reactance $X_{eq}$) of the transformer's equivalent circuit.
*   **Procedure:**
    *   The HV side is short-circuited through a low-resistance ammeter.
    *   A variable voltage is applied to the LV side until the rated current flows in the LV winding.
    *   A wattmeter ($W_{SC}$), ammeter ($A_{SC}$), and voltmeter ($V_{SC}$) are connected to the LV side.
*   **Observation:**
    *   $V_{SC}$: Applied voltage to the LV side to get rated current.
    *   $I_{SC}$: Rated current flowing in the LV side.
    *   $W_{SC}$: Power input to the transformer at rated current.
*   **Calculation:**
    *   Since the applied voltage $V_{SC}$ is very low, the iron losses are negligible.
    *   Therefore, the power measured by the wattmeter ($W_{SC}$) is approximately equal to the **full-load copper losses ($P_{cu,FL}$)**.
    *   $P_{cu,FL} = W_{SC}$
    *   The equivalent impedance referred to the LV side is:
        $$ Z_{eq(LV)} = \frac{V_{SC}}{I_{SC}} $$
    *   The equivalent resistance referred to the LV side is:
        $$ R_{eq(LV)} = \frac{W_{SC}}{I_{SC}^2} $$
    *   The equivalent leakage reactance referred to the LV side is:
        $$ X_{eq(LV)} = \sqrt{Z_{eq(LV)}^2 - R_{eq(LV)}^2} $$

    *   **Note:** The same parameters can be calculated referred to the HV side if the test is performed on the HV side. For calculations involving efficiency at different loads, it's common to refer all parameters to the LV side or HV side consistently. Let's assume we refer them to the LV side for this explanation.

---

### 4. Efficiency Calculation at Different Loads

Once the iron losses ($P_i$) and full-load copper losses ($P_{cu,FL}$) are known, we can calculate the efficiency at any load.

Let the load be $x$ times the full load, where $x$ is the load fraction (e.g., $x=0.5$ for half load, $x=1$ for full load).

*   **Output Power ($P_{out}$):**
    $$ P_{out} = x \times \text{Rated Output Power (kVA)} \times \text{Power Factor (PF)} $$
    The power factor is usually specified for the operating condition. If not specified, for efficiency calculations, it is often assumed to be unity or a specific lagging value (e.g., 0.8 lagging).

*   **Copper Losses ($P_{cu}$):**
    Copper losses are proportional to the square of the load current.
    $$ P_{cu} = x^2 \times P_{cu,FL} $$

*   **Iron Losses ($P_i$):**
    Iron losses are constant and equal to the value obtained from the OC test ($W_{OC}$).

*   **Input Power ($P_{in}$):**
    $$ P_{in} = P_{out} + P_i + P_{cu} $$

*   **Efficiency ($\eta$):**
    $$ \eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{x \times P_{rated,kVA} \times PF}{x \times P_{rated,kVA} \times PF + P_i + x^2 \times P_{cu,FL}} \times 100\% $$

---

### 5. Condition for Maximum Efficiency

Maximum efficiency occurs when the **variable losses (copper losses) are equal to the constant losses (iron losses)**.

$$ P_{cu} = P_i $$

Let $x_{max}$ be the load fraction at which maximum efficiency occurs.
$$ x_{max}^2 \times P_{cu,FL} = P_i $$
$$ x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}} $$

This means that maximum efficiency occurs at a load fraction $x_{max}$ which is the square root of the ratio of iron losses to full-load copper losses.

*   **Maximum Efficiency ($\eta_{max}$):**
    To calculate the maximum efficiency, we substitute $x = x_{max}$ into the efficiency formula:

    $$ \eta_{max} = \frac{x_{max} \times P_{rated,kVA} \times PF}{x_{max} \times P_{rated,kVA} \times PF + P_i + x_{max}^2 \times P_{cu,FL}} \times 100\% $$

    Since at maximum efficiency, $P_i = x_{max}^2 \times P_{cu,FL}$, we can simplify this:

    $$ \eta_{max} = \frac{x_{max} \times P_{rated,kVA} \times PF}{x_{max} \times P_{rated,kVA} \times PF + P_i + P_i} \times 100\% = \frac{x_{max} \times P_{rated,kVA} \times PF}{x_{max} \times P_{rated,kVA} \times PF + 2P_i} \times 100\% $$

    Alternatively, if we know the output power at maximum efficiency ($P_{out,max}$):
    $$ P_{out,max} = x_{max} \times P_{rated,kVA} \times PF $$
    Then,
    $$ \eta_{max} = \frac{P_{out,max}}{P_{out,max} + 2P_i} \times 100\% $$
    (Because $P_{in} = P_{out} + P_i + P_{cu} = P_{out,max} + P_i + P_i = P_{out,max} + 2P_i$)

---

### 6. Learning Outcomes Addressed

*   **CO1 (Analyze performance of DC generators):** While this module is on transformers, understanding efficiency and losses is a fundamental concept applicable to all rotating electrical machines. The methodology of identifying losses and their impact on performance is transferable.
*   **CO2 (Sketch performance characteristics of DC motors):** Similar to CO1, the concept of efficiency variation with load is a key performance characteristic for DC motors as well.
*   **CO3 (Investigate losses and efficiency in DC machines):** This CO directly aligns with the principles discussed in this module, as the method of determining losses from no-load and short-circuit conditions is common to both transformers and DC machines (though tests might differ slightly).
*   **CO4 (Examine performance of single-phase transformers):** This is the primary CO addressed. We are examining the performance (efficiency) of a single-phase transformer by conducting load/no-load tests (OC and SC tests are variations of no-load and loaded conditions).
*   **CO5 (Determine voltage regulation and efficiency of 3-phase transformer):** This module specifically deals with single-phase transformers. However, the principles of determining efficiency by identifying losses from OC and SC tests are directly applicable to 3-phase transformers as well, albeit with some modifications in test setup and calculations.

---

### 7. Examples and Practice Questions

**Example 1:**
A 10 kVA, 2400/240 V single-phase transformer gave the following test results:
*   **OC Test (on LV side):** $V_{OC} = 240$ V, $I_{OC} = 5$ A, $W_{OC} = 150$ W
*   **SC Test (on HV side):** $V_{SC} = 48$ V, $I_{SC} = 20$ A, $W_{SC} = 300$ W

Assume the power factor of the load is 0.8 lagging.

**Find:**
a) The iron loss ($P_i$) and the full-load copper loss ($P_{cu,FL}$).
b) The load at which maximum efficiency occurs.
c) The maximum efficiency.
d) The efficiency at full load.
e) The efficiency at half full load.

**Solution:**

First, convert all data to a common side (e.g., HV side).
Transformer ratio, $a = V_{HV}/V_{LV} = 2400/240 = 10$.

**OC Test Data Referred to HV Side:**
$V_{OC}' = a \times V_{OC} = 10 \times 240 = 2400$ V
$I_{OC}' = I_{OC} / a = 5 / 10 = 0.5$ A
$W_{OC}' = W_{OC} = 150$ W (Iron losses are measured on the side of excitation, which is LV here. They are constant regardless of the side referred to.)

**SC Test Data Referred to HV Side:**
$V_{SC}' = V_{SC} = 48$ V
$I_{SC}' = I_{SC} = 20$ A
$W_{SC}' = W_{SC} = 300$ W

a) **Iron loss ($P_i$) and Full-load copper loss ($P_{cu,FL}$):**
From OC test, iron losses $P_i = W_{OC}' = 150$ W.
From SC test, full-load copper losses $P_{cu,FL} = W_{SC}' = 300$ W.

b) **Load at which maximum efficiency occurs:**
$$ x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}} = \sqrt{\frac{150}{300}} = \sqrt{0.5} \approx 0.707 $$
Maximum efficiency occurs at approximately 70.7% of the full load.
Full load is 10 kVA. So, the load at maximum efficiency is $0.707 \times 10$ kVA $= 7.07$ kVA.

c) **Maximum efficiency ($\eta_{max}$):**
Let's calculate efficiency at full load (x=1) and half load (x=0.5) first to understand.
Rated output power $P_{rated,out} = 10 \text{ kVA} \times 0.8 \text{ PF} = 8$ kW.

**Efficiency at full load (x=1, PF=0.8):**
$P_{out} = 1 \times 8 \text{ kW} = 8$ kW
$P_{cu} = 1^2 \times P_{cu,FL} = 1 \times 300 \text{ W} = 0.3$ kW
$P_i = 0.15$ kW
$P_{in} = P_{out} + P_i + P_{cu} = 8 + 0.15 + 0.3 = 8.45$ kW
$$ \eta_{\text{full load}} = \frac{8}{8.45} \times 100\% \approx 94.67\% $$

**Efficiency at half full load (x=0.5, PF=0.8):**
$P_{out} = 0.5 \times 8 \text{ kW} = 4$ kW
$P_{cu} = (0.5)^2 \times P_{cu,FL} = 0.25 \times 0.3 \text{ kW} = 0.075$ kW
$P_i = 0.15$ kW
$P_{in} = P_{out} + P_i + P_{cu} = 4 + 0.15 + 0.075 = 4.225$ kW
$$ \eta_{\text{half load}} = \frac{4}{4.225} \times 100\% \approx 94.67\% $$
*(Wait, this is a coincidence. Let's calculate $\eta_{max}$)*

**Maximum efficiency occurs at x = 0.707 and PF = 0.8.**
$P_{out,max} = x_{max} \times P_{rated,kVA} \times PF = 0.707 \times 10 \text{ kVA} \times 0.8 = 5.656$ kW
Copper losses at this load: $P_{cu} = x_{max}^2 \times P_{cu,FL} = (0.707)^2 \times 300 \text{ W} = 0.5 \times 300 \text{ W} = 150$ W $= 0.15$ kW.
Iron losses $P_i = 0.15$ kW.
As expected, $P_{cu} = P_i$ at maximum efficiency.
$P_{in,max} = P_{out,max} + P_i + P_{cu} = 5.656 + 0.15 + 0.15 = 6.056$ kW
$$ \eta_{max} = \frac{5.656}{6.056} \times 100\% \approx 93.40\% $$
*(My calculation for half load was wrong. Let's recheck)*

**Recheck Efficiency at half full load (x=0.5, PF=0.8):**
$P_{out} = 0.5 \times 8 \text{ kW} = 4$ kW
$P_{cu} = (0.5)^2 \times P_{cu,FL} = 0.25 \times 0.3 \text{ kW} = 0.075$ kW
$P_i = 0.15$ kW
$P_{in} = P_{out} + P_i + P_{cu} = 4 + 0.15 + 0.075 = 4.225$ kW
$$ \eta_{\text{half load}} = \frac{4}{4.225} \times 100\% \approx 94.67\% $$
*(Still the same. Let's check my understanding of max efficiency calculation. The formula for max efficiency is usually higher. Ah, my $P_{out,max}$ calculation looks correct. Let me recheck the maximum efficiency formula.)*

$$ \eta_{max} = \frac{x_{max} \times \text{Rated kVA} \times \text{PF}}{x_{max} \times \text{Rated kVA} \times \text{PF} + P_i + P_i} \times 100\% $$
$$ \eta_{max} = \frac{5.656}{5.656 + 0.15 + 0.15} \times 100\% = \frac{5.656}{5.956} \times 100\% \approx 94.96\% $$
*(This looks more reasonable. The coincidence of efficiency at full load and half load might be due to specific values in the problem. Let's trust the formula for $\eta_{max}$ where $P_{cu}$ at that load equals $P_i$.)*

**Corrected Calculation for $\eta_{max}$:**
At maximum efficiency, $P_{cu} = P_i = 0.15$ kW.
The output power at maximum efficiency ($P_{out,max}$) is when $x = \sqrt{P_i/P_{cu,FL}} = 0.707$.
$P_{out,max} = 0.707 \times 10 \text{ kVA} \times 0.8 = 5.656$ kW.
Total losses at maximum efficiency = $P_i + P_{cu} = 0.15 + 0.15 = 0.3$ kW.
Input power at maximum efficiency = $P_{out,max} + \text{Total Losses} = 5.656 + 0.3 = 5.956$ kW.
$$ \eta_{max} = \frac{5.656}{5.956} \times 100\% \approx 94.96\% $$

d) **Efficiency at full load (x=1, PF=0.8):**
$P_{out} = 1 \times 10 \text{ kVA} \times 0.8 = 8$ kW
$P_{cu} = 1^2 \times 300 \text{ W} = 0.3$ kW
$P_i = 0.15$ kW
$P_{in} = 8 + 0.3 + 0.15 = 8.45$ kW
$$ \eta_{\text{full load}} = \frac{8}{8.45} \times 100\% \approx 94.67\% $$

e) **Efficiency at half full load (x=0.5, PF=0.8):**
$P_{out} = 0.5 \times 10 \text{ kVA} \times 0.8 = 4$ kW
$P_{cu} = (0.5)^2 \times 300 \text{ W} = 0.25 \times 0.3 \text{ kW} = 0.075$ kW
$P_i = 0.15$ kW
$P_{in} = 4 + 0.075 + 0.15 = 4.225$ kW
$$ \eta_{\text{half load}} = \frac{4}{4.225} \times 100\% \approx 94.67\% $$

**Answers:**
a) $P_i = 150$ W, $P_{cu,FL} = 300$ W
b) Load at which maximum efficiency occurs is 7.07 kVA (or 70.7% of full load).
c) Maximum efficiency $\approx 94.96\%$.
d) Efficiency at full load $\approx 94.67\%$.
e) Efficiency at half full load $\approx 94.67\%$.

---

**Practice Question 1:**
A 50 kVA, 3300/220 V, 50 Hz single-phase transformer has the following test figures:
*   **OC Test (LV side):** $V_{OC} = 220$ V, $I_{OC} = 4$ A, $W_{OC} = 250$ W
*   **SC Test (HV side):** $V_{SC} = 130$ V, $I_{SC} = 15$ A, $W_{SC} = 1000$ W

Determine:
(i) The load (in kVA) at which the transformer delivers maximum efficiency.
(ii) The maximum efficiency, assuming the power factor of the load is unity.
(iii) The efficiency at full load, assuming the power factor of the load is unity.

**Answer:**
First, find the transformer ratio $a = 3300/220 = 15$.
Convert SC test data to LV side:
$V_{SC(LV)} = V_{SC(HV)}/a = 130/15 = 8.67$ V
$I_{SC(LV)} = I_{SC(HV)} \times a = 15 \times 15 = 225$ A
$W_{SC(LV)} = W_{SC(HV)} = 1000$ W (Copper losses are measured in terms of power dissipation in windings)

$P_i = W_{OC(LV)} = 250$ W (Iron losses)
$P_{cu,FL} = W_{SC(LV)} = 1000$ W (Full-load copper losses)

(i) Load for maximum efficiency:
$$ x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}} = \sqrt{\frac{250}{1000}} = \sqrt{0.25} = 0.5 $$
The load at which maximum efficiency occurs is $0.5 \times 50$ kVA $= 25$ kVA.

(ii) Maximum efficiency (PF = 1):
$P_{out,max} = x_{max} \times \text{Rated kVA} \times \text{PF} = 0.5 \times 50 \text{ kVA} \times 1 = 25$ kW.
At maximum efficiency, $P_{cu} = P_i = 0.25$ kW.
Total losses = $P_i + P_{cu} = 0.25 + 0.25 = 0.5$ kW.
$$ \eta_{max} = \frac{P_{out,max}}{P_{out,max} + \text{Total Losses}} \times 100\% = \frac{25 \text{ kW}}{25 \text{ kW} + 0.5 \text{ kW}} \times 100\% = \frac{25}{25.5} \times 100\% \approx 98.04\% $$

(iii) Efficiency at full load (PF = 1):
$P_{out,FL} = 1 \times 50 \text{ kVA} \times 1 = 50$ kW.
$P_{cu,FL} = 1000$ W $= 1$ kW.
$P_i = 250$ W $= 0.25$ kW.
$P_{in,FL} = P_{out,FL} + P_i + P_{cu,FL} = 50 + 0.25 + 1 = 51.25$ kW.
$$ \eta_{\text{full load}} = \frac{50}{51.25} \times 100\% \approx 97.56\% $$

---

### 8. Key Points to Remember

*   **Efficiency Formula:** $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{P_{out}}{P_{out} + P_i + P_{cu}}$
*   **Iron Losses ($P_i$):** Determined from the OC test (constant losses).
*   **Copper Losses ($P_{cu}$):** Determined from the SC test (variable losses, proportional to load squared).
*   **Maximum Efficiency Condition:** Occurs when Iron Losses = Copper Losses ($P_i = P_{cu}$).
*   **Load for Maximum Efficiency:** $x_{max} = \sqrt{\frac{P_i}{P_{cu,FL}}}$.
*   **Power Factor:** Efficiency depends on the power factor of the load. Calculations for maximum efficiency are usually done at a specified power factor (often unity or a typical lagging value).
*   **Test Side:** Ensure consistency when referring parameters between LV and HV sides.

---

### 9. Referencing Textbooks

*   **Electrical Machinery by P.S. Bimbhra (Khanna Publishers):** Chapter on Transformers, sections dealing with equivalent circuit, OC and SC tests, and efficiency calculations. Provides theoretical background and detailed derivations.
*   **Electric Machines by D P Kothari & I J Nagrath (Tata McGraw Hill):** Chapter on Transformers, similar sections on tests and performance evaluation. Offers a solid foundation in the fundamental principles.

These books provide comprehensive coverage of the theoretical basis for conducting OC and SC tests and the subsequent analysis to determine transformer efficiency and the conditions for maximum efficiency. The principles discussed here are directly drawn from these standard texts.
