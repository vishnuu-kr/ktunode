---
title: "Predetermine the voltage regulation and efficiency at different loads (full-load and half full-load) and power factors (unity, 0.8 lag and lead)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 15: OC and SC tests on 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360e2"
status: "completed"
scrapedAt: "2026-05-23T16:15:44.715Z"
---
## DC MACHINES & TRANSFORMERS LAB: Module 15 - OC and SC Tests on 3-Phase Transformers

### Topic: Predetermine the Voltage Regulation and Efficiency at Different Loads and Power Factors

**Objective:** To predetermine the voltage regulation and efficiency of a 3-phase transformer at various load conditions (full-load and half full-load) and power factors (unity, 0.8 lagging, and 0.8 leading) using the results obtained from Open Circuit (OC) and Short Circuit (SC) tests.

**Prerequisites:** Understanding of 3-phase transformer construction, basic electrical circuit theory, and the principles of operation of 3-phase transformers. Familiarity with the procedure of conducting OC and SC tests on a 3-phase transformer.

---

### 1. Introduction to Voltage Regulation and Efficiency

**1.1 Voltage Regulation (VR)**

*   **Definition:** Voltage regulation of a transformer is the percentage change in secondary terminal voltage from no-load to full-load at a constant primary voltage and a specific power factor. It indicates how well the transformer maintains its output voltage under varying load conditions.
*   **Formula:**
    $$VR = \frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \times 100\%$$
    where:
    *   $V_{2,NL}$ is the no-load secondary terminal voltage.
    *   $V_{2,FL}$ is the full-load secondary terminal voltage.
*   **Importance:** A low voltage regulation is desirable, as it signifies that the transformer's output voltage remains relatively constant regardless of the load.

**1.2 Efficiency ($\eta$)**

*   **Definition:** Efficiency of a transformer is the ratio of output power to input power, expressed as a percentage. It represents how effectively the transformer converts electrical power from the primary to the secondary side, minimizing losses.
*   **Formula:**
    $$\eta = \frac{\text{Output Power}}{\text{Input Power}} \times 100\% = \frac{\text{Output Power}}{\text{Output Power} + \text{Losses}} \times 100\%$$
*   **Types of Losses in a Transformer:**
    *   **Core Losses (Iron Losses, $P_i$):** These losses occur in the transformer core and are generally constant for a given applied voltage. They consist of:
        *   **Hysteresis Loss:** Due to the repeated magnetization and demagnetization of the core material.
        *   **Eddy Current Loss:** Due to circulating currents induced in the core by the changing magnetic flux.
        These losses are determined from the **Open Circuit (OC) Test**.
    *   **Copper Losses (Full Load Copper Losses, $P_{cu,FL}$):** These losses occur in the windings of the transformer due to the resistance of the conductors. They are proportional to the square of the load current ($I^2R$).
        These losses are determined from the **Short Circuit (SC) Test**.

---

### 2. Predetermination of Voltage Regulation and Efficiency using OC and SC Tests

The OC and SC tests are essential for determining the equivalent circuit parameters of a transformer, which are then used to predetermine its performance characteristics.

**2.1 Open Circuit (OC) Test**

*   **Purpose:** To determine the core losses and the shunt branch parameters (magnetizing reactance $X_m$ and core loss resistance $R_c$).
*   **Procedure:** The low-voltage (LV) side is excited with rated voltage and frequency, while the high-voltage (HV) side is kept open.
*   **Measurements:**
    *   Voltmeter across LV winding ($V_1$)
    *   Ammeter in the LV winding ($I_0$)
    *   Wattmeter to measure input power ($P_0$)
*   **Calculations from OC Test:**
    *   The input power $P_0$ in the OC test represents the core losses ($P_i$) since the copper losses are negligible due to the very small excitation current ($I_0$).
        $$P_i = P_0 \quad (\text{at rated voltage})$$
    *   The equivalent resistance representing core losses ($R_c$) can be calculated:
        $$R_c = \frac{V_{1,rated}^2}{P_i}$$
    *   The no-load current $I_0$ is the sum of the magnetizing current ($I_m$) and the core loss current ($I_c$).
        $$I_0 = \sqrt{I_m^2 + I_c^2}$$
    *   The core loss current is given by:
        $$I_c = \frac{P_i}{V_1}$$
    *   The magnetizing current is:
        $$I_m = \sqrt{I_0^2 - I_c^2}$$
    *   The magnetizing reactance ($X_m$) can be calculated:
        $$X_m = \frac{V_1}{I_m}$$

**2.2 Short Circuit (SC) Test**

*   **Purpose:** To determine the copper losses and the series branch parameters (equivalent resistance $R_{eq}$ and equivalent leakage reactance $X_{eq}$).
*   **Procedure:** The HV side is short-circuited, and a reduced voltage is applied to the LV side until rated current flows in the windings.
*   **Measurements:**
    *   Voltmeter across LV winding ($V_{sc}$)
    *   Ammeter in the LV winding ($I_{sc}$)
    *   Wattmeter to measure input power ($P_{sc}$)
*   **Calculations from SC Test:**
    *   The input power $P_{sc}$ in the SC test is primarily due to copper losses in the windings, as the applied voltage is low, making core losses negligible.
        $$P_{cu,sc} = P_{sc} \quad (\text{at rated current})$$
    *   The equivalent resistance of the transformer referred to the LV side ($R_{eq1}$) can be calculated:
        $$R_{eq1} = \frac{P_{sc}}{I_{sc,rated}^2}$$
        where $I_{sc,rated}$ is the rated current in the LV winding during the SC test.
    *   The equivalent impedance of the transformer referred to the LV side ($Z_{eq1}$) can be calculated:
        $$Z_{eq1} = \frac{V_{sc}}{I_{sc,rated}}$$
    *   The equivalent leakage reactance of the transformer referred to the LV side ($X_{eq1}$) can be calculated:
        $$X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$$
*   **Referring to HV Side:** If the SC test is performed by exciting the HV side and shorting the LV side, the parameters will be referred to the HV side ($R_{eq2}$, $X_{eq2}$, $Z_{eq2}$). The general procedure remains the same, but the voltage and current values will be from the HV side.

**Important Note:** For predetermination, we generally use parameters referred to the same side (usually LV side). The values of $R_{eq}$ and $X_{eq}$ obtained from the SC test at rated current are assumed to be valid for all load conditions.

---

### 3. Predetermination of Voltage Regulation

Voltage regulation can be pre-determined using the equivalent circuit parameters and considering the power factor of the load. The formula for voltage regulation based on the equivalent circuit is derived from the phasor diagram.

*   **Phasor Diagram:** The phasor diagram for a transformer under load is crucial for understanding voltage regulation. It relates the primary voltage, secondary voltage, impedance drops, and load current at a specific power factor.

*   **Formula for Voltage Regulation (referred to secondary side):**
    The secondary terminal voltage at full load ($V_{2,FL}$) is known. Let $V_2$ be the rated secondary voltage. The equivalent resistance and impedance referred to the secondary are $R_{eq2}$ and $Z_{eq2}$, respectively. The full-load secondary current is $I_2$.
    For a lagging power factor $\cos\phi$:
    $$VR (\text{lagging}) \approx \frac{I_2 R_{eq2} \cos\phi + I_2 X_{eq2} \sin\phi}{V_2} \times 100\%$$
    For a leading power factor $\cos\phi$:
    $$VR (\text{leading}) \approx \frac{I_2 R_{eq2} \cos\phi - I_2 X_{eq2} \sin\phi}{V_2} \times 100\%$$
    For unity power factor $\cos\phi = 1, \sin\phi = 0$:
    $$VR (\text{unity}) \approx \frac{I_2 R_{eq2}}{V_2} \times 100\%$$

    **Derivation from Phasor Diagram (Simplified for Lagging PF):**
    Let $V_2$ be the phasor representing the secondary terminal voltage.
    Let $I_2$ be the phasor representing the secondary load current, lagging $V_2$ by $\phi$.
    The secondary induced voltage $E_2$ is approximately:
    $E_2 = V_2 + I_2 Z_{eq2} = V_2 + I_2 (R_{eq2} + jX_{eq2})$
    The magnitude of $E_2$ can be approximated by considering the phasor addition. For small voltage drops, the regulation can be approximated by:
    $\Delta V = I_2 R_{eq2} \cos\phi + I_2 X_{eq2} \sin\phi$ (for lagging PF)
    $VR = \frac{\Delta V}{V_2} \times 100\% = \frac{I_2 R_{eq2} \cos\phi + I_2 X_{eq2} \sin\phi}{V_2} \times 100\%$

*   **Predetermination at Different Loads:**
    *   **Full Load:** Use rated secondary current ($I_2 = I_{2,rated}$).
    *   **Half Full Load:** Use half the rated secondary current ($I_2 = 0.5 \times I_{2,rated}$).
    The $R_{eq2}$ and $X_{eq2}$ values remain the same.

*   **Predetermination at Different Power Factors:**
    *   **Unity PF ($\cos\phi = 1$):** $\sin\phi = 0$.
        $$VR \approx \frac{I_2 R_{eq2}}{V_2} \times 100\%$$
    *   **0.8 Lagging PF ($\cos\phi = 0.8$):** $\sin\phi = \sqrt{1 - 0.8^2} = 0.6$.
        $$VR \approx \frac{I_2 R_{eq2} (0.8) + I_2 X_{eq2} (0.6)}{V_2} \times 100\%$$
    *   **0.8 Leading PF ($\cos\phi = 0.8$):** $\sin\phi = \sqrt{1 - 0.8^2} = 0.6$. (Note: $\cos\phi$ is positive for leading, but the term with $X_{eq2}$ becomes negative).
        $$VR \approx \frac{I_2 R_{eq2} (0.8) - I_2 X_{eq2} (0.6)}{V_2} \times 100\%$$

---

### 4. Predetermination of Efficiency

Efficiency depends on the output power and the total losses at that load. The losses consist of core losses (constant) and copper losses (load dependent).

*   **Formula for Efficiency:**
    $$\eta = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{cu}} \times 100\%$$
    where:
    *   $P_i$ is the core loss (from OC test).
    *   $P_{cu}$ is the copper loss at a specific load.

*   **Calculating Copper Losses ($P_{cu}$) at Different Loads:**
    Copper losses are proportional to the square of the load current. Let the full-load copper loss be $P_{cu,FL}$.
    If the load is operating at 'k' times the full load, then the current is $k \times I_{FL}$.
    $$P_{cu} = k^2 \times P_{cu,FL}$$
    Alternatively, if the SC test was performed at rated current and measured power $P_{sc}$, then $P_{cu,FL} = P_{sc}$.
    So, for a load of fraction 'k' of full load:
    $$P_{cu} = k^2 \times P_{sc}$$

*   **Calculating Output Power:**
    Output Power = $V_2 \times I_2 \times \cos\phi$ (for three-phase, multiply by $\sqrt{3}$ or $3$ depending on convention for $V_2$, $I_2$).
    Assuming $V_2$ is line-to-line voltage and $I_2$ is line current for calculations:
    Output Power (3-phase) = $\sqrt{3} \times V_{2,line} \times I_{2,line} \times \cos\phi$

*   **Predetermination at Different Loads and Power Factors:**

    *   **Full Load (k=1):**
        *   $I_2 = I_{2,FL}$ (rated current)
        *   $P_{cu} = P_{sc}$ (full-load copper loss)
        *   Output Power = $\sqrt{3} \times V_{2,line} \times I_{2,FL} \times \cos\phi$
        *   $$\eta = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{sc}} \times 100\%$$

    *   **Half Full Load (k=0.5):**
        *   $I_2 = 0.5 \times I_{2,FL}$
        *   $P_{cu} = (0.5)^2 \times P_{sc} = 0.25 \times P_{sc}$
        *   Output Power = $\sqrt{3} \times V_{2,line} \times (0.5 \times I_{2,FL}) \times \cos\phi$
        *   $$\eta = \frac{\text{Output Power}}{\text{Output Power} + P_i + 0.25 \times P_{sc}} \times 100\%$$

    *   **At Different Power Factors:** The $\cos\phi$ value in the output power calculation will change, while $P_i$ and $P_{cu}$ remain the same for a given load fraction.

---

### 5. Practical Considerations and Connections to Course Outcomes

*   **CO1 (DC Generators) & CO2 (DC Motors):** While this module focuses on transformers, understanding load testing and performance characteristic determination is a fundamental skill transferable to DC machines. The principles of measuring voltage, current, and power, and calculating efficiency and regulation, are analogous.
*   **CO3 (DC Machine Losses):** OC test on DC machines also aims to determine rotational losses (friction, windage, and core losses), which are analogous to core losses in transformers.
*   **CO4 (Single-Phase Transformers):** This module directly builds upon the understanding of load/no-load tests for single-phase transformers. The OC and SC tests are the foundation for performance analysis in both single-phase and three-phase transformers.
*   **CO5 (3-Phase Transformer Performance):** This is the primary CO addressed by this module. The predetermination of voltage regulation and efficiency using OC and SC tests is a direct application of this outcome.

**Reference Textbook Integration:**

*   **P.S. Bimbhra (Electrical Machinery):** Chapter 8 on "Single-Phase Transformers" and Chapter 13 on "Three-Phase Transformers" thoroughly cover the OC and SC test procedures, equivalent circuit parameters, and performance calculations like voltage regulation and efficiency. The phasor diagrams and derivation of regulation formulas are well-explained.
*   **D. P. Kothari & I. J. Nagrath (Electric Machines):** Chapter 4 on "Single-Phase Transformers" and Chapter 6 on "Three-Phase Transformers" provide detailed explanations of the OC and SC tests, equivalent circuit modeling, and predetermination of performance characteristics. Their approach to phasor diagrams and the impact of power factor on regulation is also very informative.

---

### 6. Step-by-Step Procedure for Predetermination

1.  **Perform OC Test:** Connect the transformer and conduct the OC test on the LV side. Record $V_0$, $I_0$, and $P_0$.
2.  **Perform SC Test:** Connect the transformer and conduct the SC test on the LV side. Record $V_{sc}$, $I_{sc}$ (at rated current), and $P_{sc}$.
3.  **Calculate Equivalent Circuit Parameters:**
    *   From OC Test: $P_i = P_0$, $R_c = V_1^2 / P_i$, $I_c = P_i / V_1$, $I_m = \sqrt{I_0^2 - I_c^2}$, $X_m = V_1 / I_m$. (Shunt branch parameters are usually not needed for VR and efficiency predetermination at load).
    *   From SC Test (referred to LV side): $P_{cu,FL} = P_{sc}$, $Z_{eq1} = V_{sc} / I_{sc,rated}$, $R_{eq1} = P_{sc} / I_{sc,rated}^2$, $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$.
    *   If required, convert parameters to the HV side or ensure all calculations are consistent for one side. For simplicity, we'll use LV side parameters. Let $V_2 = V_1$, $I_2 = I_{sc,rated}$.
4.  **Predetermine Voltage Regulation at Different Loads and PFs:**
    *   **Full Load (k=1):**
        *   Unity PF: $VR_1 = \frac{I_{2,rated} R_{eq1}}{V_1} \times 100\%$
        *   0.8 Lagging PF: $VR_{lag} = \frac{I_{2,rated} R_{eq1} (0.8) + I_{2,rated} X_{eq1} (0.6)}{V_1} \times 100\%$
        *   0.8 Leading PF: $VR_{lead} = \frac{I_{2,rated} R_{eq1} (0.8) - I_{2,rated} X_{eq1} (0.6)}{V_1} \times 100\%$
    *   **Half Full Load (k=0.5):**
        *   Unity PF: $VR_{0.5,1} = \frac{0.5 I_{2,rated} R_{eq1}}{V_1} \times 100\%$
        *   0.8 Lagging PF: $VR_{0.5,lag} = \frac{0.5 I_{2,rated} R_{eq1} (0.8) + 0.5 I_{2,rated} X_{eq1} (0.6)}{V_1} \times 100\%$
        *   0.8 Leading PF: $VR_{0.5,lead} = \frac{0.5 I_{2,rated} R_{eq1} (0.8) - 0.5 I_{2,rated} X_{eq1} (0.6)}{V_1} \times 100\%$
5.  **Predetermine Efficiency at Different Loads and PFs:**
    *   **Full Load:**
        *   Output Power (3-phase, unity PF) = $\sqrt{3} \times V_1 \times I_{2,rated} \times 1.0$
        *   Total Losses = $P_i + P_{sc}$
        *   $\eta_{FL,unity} = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{sc}} \times 100\%$
        *   Output Power (3-phase, 0.8 lag PF) = $\sqrt{3} \times V_1 \times I_{2,rated} \times 0.8$
        *   $\eta_{FL,0.8lag} = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{sc}} \times 100\%$
        *   Output Power (3-phase, 0.8 lead PF) = $\sqrt{3} \times V_1 \times I_{2,rated} \times 0.8$
        *   $\eta_{FL,0.8lead} = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{sc}} \times 100\%$
    *   **Half Full Load:**
        *   Output Power (3-phase, unity PF) = $\sqrt{3} \times V_1 \times (0.5 I_{2,rated}) \times 1.0$
        *   Total Losses = $P_i + (0.5)^2 P_{sc} = P_i + 0.25 P_{sc}$
        *   $\eta_{0.5FL,unity} = \frac{\text{Output Power}}{\text{Output Power} + P_i + 0.25 P_{sc}} \times 100\%$
        *   Output Power (3-phase, 0.8 lag PF) = $\sqrt{3} \times V_1 \times (0.5 I_{2,rated}) \times 0.8$
        *   $\eta_{0.5FL,0.8lag} = \frac{\text{Output Power}}{\text{Output Power} + P_i + 0.25 P_{sc}} \times 100\%$
        *   Output Power (3-phase, 0.8 lead PF) = $\sqrt{3} \times V_1 \times (0.5 I_{2,rated}) \times 0.8$
        *   $\eta_{0.5FL,0.8lead} = \frac{\text{Output Power}}{\text{Output Power} + P_i + 0.25 P_{sc}} \times 100\%$

---

### 7. Important Points to Remember

*   **OC Test:** Performed on the LV side at rated voltage. Measures core losses ($P_i$).
*   **SC Test:** Performed on the HV side (usually) by applying a reduced voltage to get rated current. Measures copper losses ($P_{cu,FL}$).
*   **Transformer Rating:** Always use rated values (voltage, current) for calculations.
*   **Power Factor Angle:** $\sin\phi$ is positive for lagging PF and negative for leading PF in the phasor diagram derivation. However, in the simplified VR formula, we use the magnitude of $\sin\phi$ and adjust the sign of the reactance drop term.
*   **Load Fraction (k):** Copper losses are proportional to $k^2$.
*   **Efficiency:** Is maximum when variable losses (copper losses) equal constant losses (core losses).
*   **Voltage Regulation:** Generally higher for lagging power factors and can even be negative for heavily leading power factors due to the reactive voltage drop component.
*   **3-Phase Calculations:** Remember to use the $\sqrt{3}$ factor for power calculations (Output Power = $\sqrt{3} V_L I_L \cos\phi$).
*   **Parameter Referral:** Ensure all equivalent circuit parameters are referred to the same side (LV or HV) for consistent calculations.

---

### 8. Practice Questions

**Assume a 3-phase, 20 kVA, 400/200 V, 50 Hz transformer has the following test results:**

**Open Circuit Test (on LV side):**
$V_0 = 200$ V, $I_0 = 3$ A, $P_0 = 120$ W

**Short Circuit Test (on HV side):**
$V_{sc} = 18$ V, $I_{sc} = 20$ A, $P_{sc} = 240$ W

**Rated values:**
Apparent Power ($S_{rated}$) = 20 kVA
HV side voltage ($V_{1,rated}$) = 400 V
LV side voltage ($V_{2,rated}$) = 200 V
Rated HV current ($I_{1,rated}$) = $20000 / (\sqrt{3} \times 400)$ A
Rated LV current ($I_{2,rated}$) = $20000 / (\sqrt{3} \times 200)$ A

---

**Question 1:** Determine the equivalent circuit parameters $R_{eq1}$, $X_{eq1}$ (referred to HV side) and $P_i$, $P_{cu,FL}$ for this transformer.

**Solution:**
*   **From SC Test (on HV side):**
    *   $I_{sc,rated} = I_{1,rated} = \frac{20000}{\sqrt{3} \times 400} = \frac{200}{4\sqrt{3}} \approx 28.87$ A. (The SC test was performed at 20A, which is likely the rated current for the HV side, as transformers are usually tested on the side with lower voltage and higher current, or vice-versa, to limit voltage/current levels.) Let's assume the rated current for the SC test is 20A.
    *   $P_{cu,FL} = P_{sc} = 240$ W
    *   $Z_{eq1} = \frac{V_{sc}}{I_{sc}} = \frac{18}{20} = 0.9 \Omega$
    *   $R_{eq1} = \frac{P_{sc}}{I_{sc}^2} = \frac{240}{20^2} = \frac{240}{400} = 0.6 \Omega$
    *   $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2} = \sqrt{0.9^2 - 0.6^2} = \sqrt{0.81 - 0.36} = \sqrt{0.45} \approx 0.671 \Omega$

*   **From OC Test (on LV side):**
    *   $P_i = P_0 = 120$ W
    *   The parameters $R_c$ and $X_m$ are calculated from the OC test, but they are not directly needed for voltage regulation and efficiency predetermination using the simplified formulas derived from the SC test.

---

**Question 2:** Predetermine the voltage regulation at full load for unity power factor.

**Solution:**
*   $V_1 = 400$ V (rated HV voltage)
*   $I_{1,rated} = 28.87$ A (calculated rated HV current)
*   $R_{eq1} = 0.6 \Omega$
*   $X_{eq1} = 0.671 \Omega$
*   $\cos\phi = 1.0$, $\sin\phi = 0$

$$VR_{FL,unity} \approx \frac{I_{1,rated} R_{eq1} \cos\phi}{V_1} \times 100\%$$
$$VR_{FL,unity} \approx \frac{28.87 \times 0.6 \times 1.0}{400} \times 100\%$$
$$VR_{FL,unity} \approx \frac{17.322}{400} \times 100\% \approx 0.0433 \times 100\% = 4.33\%$$

---

**Question 3:** Predetermine the voltage regulation at full load for 0.8 lagging power factor.

**Solution:**
*   $V_1 = 400$ V
*   $I_{1,rated} = 28.87$ A
*   $R_{eq1} = 0.6 \Omega$
*   $X_{eq1} = 0.671 \Omega$
*   $\cos\phi = 0.8$, $\sin\phi = \sqrt{1 - 0.8^2} = 0.6$

$$VR_{FL,0.8lag} \approx \frac{I_{1,rated} R_{eq1} \cos\phi + I_{1,rated} X_{eq1} \sin\phi}{V_1} \times 100\%$$
$$VR_{FL,0.8lag} \approx \frac{(28.87 \times 0.6 \times 0.8) + (28.87 \times 0.671 \times 0.6)}{400} \times 100\%$$
$$VR_{FL,0.8lag} \approx \frac{13.8576 + 11.643}{400} \times 100\%$$
$$VR_{FL,0.8lag} \approx \frac{25.5006}{400} \times 100\% \approx 0.06375 \times 100\% = 6.38\%$$

---

**Question 4:** Predetermine the voltage regulation at half full load for 0.8 leading power factor.

**Solution:**
*   $V_1 = 400$ V
*   $I_{halfFL} = 0.5 \times I_{1,rated} = 0.5 \times 28.87 = 14.435$ A
*   $R_{eq1} = 0.6 \Omega$
*   $X_{eq1} = 0.671 \Omega$
*   $\cos\phi = 0.8$, $\sin\phi = 0.6$ (for leading PF, the $\sin\phi$ term in the formula is negative)

$$VR_{0.5FL,0.8lead} \approx \frac{I_{halfFL} R_{eq1} \cos\phi - I_{halfFL} X_{eq1} \sin\phi}{V_1} \times 100\%$$
$$VR_{0.5FL,0.8lead} \approx \frac{(14.435 \times 0.6 \times 0.8) - (14.435 \times 0.671 \times 0.6)}{400} \times 100\%$$
$$VR_{0.5FL,0.8lead} \approx \frac{6.9288 - 5.8215}{400} \times 100\%$$
$$VR_{0.5FL,0.8lead} \approx \frac{1.1073}{400} \times 100\% \approx 0.00277 \times 100\% = 0.28\%$$

---

**Question 5:** Predetermine the efficiency at full load for unity power factor.

**Solution:**
*   $P_i = 120$ W
*   $P_{cu,FL} = 240$ W
*   Output Power (3-phase) = $\sqrt{3} \times V_{1,rated} \times I_{1,rated} \times \cos\phi$
*   Output Power (FL, unity PF) = $\sqrt{3} \times 400 \times 28.87 \times 1.0$
*   Output Power (FL, unity PF) $\approx \sqrt{3} \times 11548 \approx 20000$ W (which is 20 kVA as expected)

$$ \eta_{FL,unity} = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{cu,FL}} \times 100\% $$
$$ \eta_{FL,unity} = \frac{20000}{20000 + 120 + 240} \times 100\% $$
$$ \eta_{FL,unity} = \frac{20000}{20360} \times 100\% \approx 0.9823 \times 100\% = 98.23\% $$

---

**Question 6:** Predetermine the efficiency at half full load for 0.8 lagging power factor.

**Solution:**
*   $P_i = 120$ W
*   $P_{cu,0.5FL} = (0.5)^2 \times P_{cu,FL} = 0.25 \times 240 = 60$ W
*   Current at half load ($I_{halfFL}$) = $0.5 \times I_{1,rated} = 14.435$ A
*   Output Power (3-phase, 0.8 lag PF) = $\sqrt{3} \times V_{1,rated} \times I_{halfFL} \times 0.8$
*   Output Power (0.5FL, 0.8 lag PF) = $\sqrt{3} \times 400 \times 14.435 \times 0.8$
*   Output Power (0.5FL, 0.8 lag PF) $\approx \sqrt{3} \times 11548 \times 0.8 \approx 20000 \times 0.8 = 16000$ W

$$ \eta_{0.5FL,0.8lag} = \frac{\text{Output Power}}{\text{Output Power} + P_i + P_{cu,0.5FL}} \times 100\% $$
$$ \eta_{0.5FL,0.8lag} = \frac{16000}{16000 + 120 + 60} \times 100\% $$
$$ \eta_{0.5FL,0.8lag} = \frac{16000}{16180} \times 100\% \approx 0.9889 \times 100\% = 98.89\% $$
