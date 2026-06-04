---
title: "Determine the per phase equivalent circuit"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 15: OC and SC tests on 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360e3"
status: "completed"
scrapedAt: "2026-05-23T16:15:45.455Z"
---
# Module 15: OC and SC Tests on 3-Phase Transformer

## Topic: Determine the Per-Phase Equivalent Circuit

### Learning Outcomes:
*   Understand the purpose and procedure of Open Circuit (OC) and Short Circuit (SC) tests on a 3-phase transformer.
*   Determine the core loss resistance ($R_c$) and magnetizing reactance ($X_m$) from the OC test data.
*   Determine the equivalent resistance ($R_{eq}$) and equivalent leakage reactance ($X_{eq}$) referred to the primary (or secondary) from the SC test data.
*   Construct the per-phase equivalent circuit of a 3-phase transformer based on the OC and SC test results.
*   Predict the performance of the transformer (e.g., efficiency, voltage regulation) using the derived equivalent circuit parameters.

### Course Outcomes Alignment:
*   **CO5: Determine the voltage regulation and efficiency of 3-phase transformer by conducting no-load tests.** This module directly contributes to CO5 by providing the fundamental parameters needed to calculate voltage regulation and efficiency. The OC and SC tests are essential for characterizing the transformer's behavior under various load conditions.

### 1. Introduction to Transformer Testing

Transformer testing is crucial for verifying its design specifications, assessing its condition, and predicting its performance under operating conditions. The Open Circuit (OC) test and Short Circuit (SC) test are two fundamental no-load and short-circuit tests, respectively, that allow us to determine the parameters of the transformer's equivalent circuit. These tests are performed on one phase only, and the results are then scaled or referred to represent the entire 3-phase transformer.

**Key Concept:** The equivalent circuit of a transformer consists of parameters representing its losses and magnetic characteristics.

*   **Core Losses:** These occur in the iron core due to hysteresis and eddy currents and are primarily dependent on the applied voltage. They are represented by a parallel resistance ($R_c$) and a parallel reactance ($X_m$) in the equivalent circuit.
*   **Copper Losses:** These occur in the windings due to the resistance of the conductors and are primarily dependent on the load current. They are represented by a series resistance ($R_{eq}$) and a series leakage reactance ($X_{eq}$) in the equivalent circuit.

### 2. Open Circuit (OC) Test (No-Load Test)

**Purpose:** To determine the core losses and the shunt branch parameters ($R_c$ and $X_m$).

**Procedure:**
1.  The low-voltage (LV) side of the transformer is short-circuited.
2.  The rated voltage is applied to the high-voltage (HV) side.
3.  A voltmeter, ammeter, and wattmeter are connected to the HV side to measure the applied voltage ($V_{oc}$), the no-load current ($I_{oc}$), and the total core loss ($P_{oc}$), respectively.
4.  The transformer is energized at rated voltage and frequency. Since the secondary is short-circuited, the current on the LV side is very high, and the current on the HV side will be very small, primarily due to the magnetizing reactance and core losses.

**Important Note:** The OC test is usually performed on the LV side at rated voltage because the magnetizing current is small, making it easier to measure accurately. If performed on the HV side, the applied voltage would be much lower than rated, leading to inaccurate core loss values. However, for determination of per-phase equivalent circuit, we often perform it on the HV side and refer the LV parameters to the HV side. For this topic, we will assume the test is conducted on the HV side and we will determine the equivalent circuit referred to the HV side.

**Measurements:**
*   $V_{oc}$: Applied voltage (line-to-line or phase voltage).
*   $I_{oc}$: No-load current (line current).
*   $P_{oc}$: Total power consumed (represents core losses).

**Calculations (Per-Phase Basis):**

*   **Phase Voltage ($V_{ph}$):**
    *   If $V_{oc}$ is line-to-line voltage, then $V_{ph} = V_{oc} / \sqrt{3}$.

*   **Total Impedance per phase ($Z_{sh}$):**
    *   $Z_{sh} = \frac{V_{ph}}{I_{oc}/\sqrt{3}}$ (where $I_{oc}/\sqrt{3}$ is the per-phase no-load current).

*   **Shunt Resistance ($R_c$) per phase:**
    *   The power measured by the wattmeter ($P_{oc}$) represents the core losses. These losses occur across the parallel resistance ($R_c$).
    *   $P_{oc} = 3 \times (V_{ph})^2 / R_c$
    *   Therefore, $R_c = \frac{3 \times (V_{ph})^2}{P_{oc}}$

*   **Shunt Reactance ($X_m$) per phase:**
    *   The no-load current ($I_{oc}$) has two components: one component flowing through $R_c$ (iron loss current, $I_{w}$) and the other flowing through $X_m$ (magnetizing current, $I_m$).
    *   $I_{oc} = \sqrt{I_w^2 + I_m^2}$
    *   The iron loss current ($I_w$) can be calculated from the power: $P_{oc} = 3 \times V_{ph} \times I_w$, so $I_w = \frac{P_{oc}}{3 \times V_{ph}}$.
    *   The magnetizing current ($I_m$) can be found using Pythagoras: $I_m = \sqrt{I_{oc}^2 - I_w^2}$.
    *   Now, the shunt reactance can be calculated: $X_m = \frac{V_{ph}}{I_m}$.

**Example from Textbooks:**
*   **Bimbhra (Chapter 3, Transformer Testing):** Discusses OC test for finding core loss and magnetizing parameters. It emphasizes performing the test on the LV side. For our purpose of finding the equivalent circuit referred to the HV side, we apply the rated voltage to the HV side and measure the small no-load current and power on the HV side.
*   **Kothari & Nagrath (Chapter 3, Transformer):** Also details the OC test for determining shunt parameters. They show how the no-load current splits into a loss component and a magnetizing component.

### 3. Short Circuit (SC) Test

**Purpose:** To determine the series branch parameters ($R_{eq}$ and $X_{eq}$), representing the total leakage impedance referred to the primary.

**Procedure:**
1.  The HV side of the transformer is short-circuited through a thick copper strip or a short-circuiting device.
2.  A variable low AC voltage is applied to the LV side.
3.  A voltmeter, ammeter, and wattmeter are connected to the LV side to measure the applied voltage ($V_{sc}$), the short-circuit current ($I_{sc}$), and the total copper loss ($P_{sc}$), respectively.
4.  The applied voltage is gradually increased from zero until the current in the windings reaches its rated value. The transformer is not operating at rated voltage in this test.
5.  The wattmeter reading ($P_{sc}$) will primarily represent the copper losses in the windings at rated current. Core losses are negligible because the applied voltage is very low.

**Important Note:** The SC test is usually performed on the HV side because it requires a low applied voltage to achieve rated current, and this low voltage can be easily supplied by a variac. The LV side would require a very high current to be short-circuited, which is not practical. For this topic, we will assume the test is conducted on the LV side and we will determine the equivalent circuit referred to the LV side.

**Measurements:**
*   $V_{sc}$: Applied voltage (line-to-line or phase voltage).
*   $I_{sc}$: Short-circuit current (line current).
*   $P_{sc}$: Total power consumed (represents copper losses at rated current).

**Calculations (Per-Phase Basis):**

*   **Phase Voltage ($V_{ph}$):**
    *   If $V_{sc}$ is line-to-line voltage, then $V_{ph} = V_{sc} / \sqrt{3}$.

*   **Total Impedance per phase ($Z_{eq}$):**
    *   $Z_{eq} = \frac{V_{ph}}{I_{sc}/\sqrt{3}}$ (where $I_{sc}/\sqrt{3}$ is the per-phase short-circuit current).

*   **Equivalent Resistance ($R_{eq}$) per phase:**
    *   The power measured by the wattmeter ($P_{sc}$) at rated current represents the total copper loss.
    *   $P_{sc} = 3 \times (I_{sc}/\sqrt{3})^2 \times R_{eq}$
    *   Therefore, $R_{eq} = \frac{P_{sc}}{3 \times (I_{sc}/\sqrt{3})^2} = \frac{P_{sc}}{3 \times (I_{sc}/\sqrt{3})^2}$  (Simpler form: $R_{eq} = \frac{P_{sc}}{3 \times I_{ph,sc}^2}$)

*   **Equivalent Leakage Reactance ($X_{eq}$) per phase:**
    *   We have the total impedance per phase: $Z_{eq} = \sqrt{R_{eq}^2 + X_{eq}^2}$.
    *   Therefore, $X_{eq} = \sqrt{Z_{eq}^2 - R_{eq}^2}$.

**Example from Textbooks:**
*   **Bimbhra (Chapter 3, Transformer Testing):** Explains the SC test to find leakage impedance and copper losses. It highlights that $P_{sc}$ represents copper losses and is used to calculate the equivalent resistance.
*   **Kothari & Nagrath (Chapter 3, Transformer):** Provides a detailed derivation for calculating $R_{eq}$ and $X_{eq}$ from SC test data. They emphasize that the test is conducted at reduced voltage to limit current to rated value.

### 4. Referencing Parameters to Other Side (If Necessary)

Often, you might perform the OC test on the LV side and SC test on the HV side. In such cases, the parameters obtained from one side need to be referred to the other side using the turns ratio, 'a'.

Let $a$ be the turns ratio, $a = N_1/N_2$, where $N_1$ is the number of turns on the primary (HV) and $N_2$ is the number of turns on the secondary (LV).

*   **Referring LV parameters to HV side:**
    *   $R_{eq(HV)} = a^2 \times R_{eq(LV)}$
    *   $X_{eq(HV)} = a^2 \times X_{eq(LV)}$
    *   $R_{c(HV)} = a^2 \times R_{c(LV)}$
    *   $X_{m(HV)} = a^2 \times X_{m(LV)}$

*   **Referring HV parameters to LV side:**
    *   $R_{eq(LV)} = R_{eq(HV)} / a^2$
    *   $X_{eq(LV)} = X_{eq(HV)} / a^2$
    *   $R_{c(LV)} = R_{c(HV)} / a^2$
    *   $X_{m(LV)} = X_{m(HV)} / a^2$

**Important Point:** For a 3-phase transformer, the turns ratio is typically taken as the ratio of the number of turns of the HV winding to the LV winding. Voltage and current ratios are also used to define 'a'. If we are referring to the HV side (primary), we typically use the voltage ratio $a = V_{HV,rated} / V_{LV,rated}$.

### 5. Per-Phase Equivalent Circuit

Based on the parameters obtained from the OC and SC tests, the per-phase equivalent circuit of a 3-phase transformer can be drawn. This circuit is usually drawn referred to the primary (HV) side.

**Circuit Diagram (Referred to Primary Side):**

```
      R_c (per phase)     X_m (per phase)
  V_ph ----/\/\/----jX_m----||----
  (Primary)  /          \     /
            /            \   /
           R_eq          X_eq
           (per phase)   (per phase)
            /              \
           /                \
          o------------------o
        (Secondary side parameters referred to primary)
```

*   $V_{ph}$: Phase voltage applied to the primary winding.
*   $R_{c}$: Equivalent resistance representing core losses.
*   $X_m$: Magnetizing reactance.
*   $R_{eq}$: Equivalent resistance referred to the primary, representing copper losses.
*   $X_{eq}$: Equivalent leakage reactance referred to the primary.
*   $I_{ph}$: Phase current.

**Simplified Equivalent Circuit:**
For performance calculations, the shunt branch ($R_c$ and $X_m$) is often neglected (especially at high power factors or when calculating voltage regulation) and the equivalent circuit is simplified to a series impedance.

```
      R_eq (per phase)     X_eq (per phase)
  V_ph ----/\/\/----jX_eq----
  (Primary)  /
            /
           o
        (Secondary side parameters referred to primary)
```

### 6. Practical Applications and Performance Prediction

The per-phase equivalent circuit with its determined parameters is crucial for predicting the transformer's performance:

*   **Efficiency:**
    *   Efficiency ($\eta$) = (Output Power) / (Input Power) = (Output Power) / (Output Power + Losses)
    *   Losses = Core Losses ($P_{core}$) + Copper Losses ($P_{cu}$)
    *   $P_{core} \approx P_{oc}$ (measured at rated voltage in OC test)
    *   $P_{cu} = 3 \times I_{ph}^2 \times R_{eq}$ (where $I_{ph}$ is the phase current at a given load)
    *   Using the equivalent circuit, one can calculate $I_{ph}$ at any load and thus $P_{cu}$.

*   **Voltage Regulation:**
    *   Voltage Regulation (%) = $\frac{|E_1| - |V_2'|}{|V_2'|} \times 100$
    *   Where $E_1$ is the no-load voltage per phase (approximately the applied primary voltage in the SC test, but more accurately the voltage needed to drive rated current through the series impedance).
    *   $V_2'$ is the rated secondary voltage referred to the primary.
    *   Using the equivalent circuit, one can calculate the voltage drop across $R_{eq}$ and $X_{eq}$ at a given load and power factor to determine the regulation.

**Example Calculation for Voltage Regulation:**
Let the transformer be supplying a load with rated secondary voltage $V_2$ (line-to-line) and rated current $I_2$ (per phase).
Referred to the primary side, this is $V_2' = a V_2$ and $I_1' = I_2/a$.
The primary voltage required to supply this load can be calculated using the equivalent circuit:
$V_1 = E_1 + I_1' (R_{eq} + jX_{eq})$
Where $E_1$ is the voltage generated by the flux (often approximated as the applied voltage in the OC test).
$E_1 = V_{ph,OC}$ (per phase)
$I_1'$ is the primary equivalent of the secondary current.

### 7. Important Points to Remember

*   **OC Test:** Performed at rated voltage on the LV side (or HV side for referring to HV) to measure core losses and determine $R_c$ and $X_m$. The wattmeter reading represents core losses.
*   **SC Test:** Performed at reduced voltage on the HV side to measure copper losses at rated current and determine $R_{eq}$ and $X_{eq}$. The wattmeter reading represents copper losses.
*   **Per-Phase Basis:** All calculations are done on a per-phase basis for a 3-phase transformer.
*   **Turns Ratio:** The turns ratio is crucial for referring parameters from one side to the other.
*   **Assumptions:** The OC test assumes core losses are constant regardless of load. The SC test assumes copper losses are proportional to the square of the current and core losses are negligible.
*   **Accuracy:** The accuracy of the determined parameters depends on the accuracy of the instrument readings and the chosen test procedure.

### 8. Practice Questions

1.  A 10 kVA, 2400/240 V, 50 Hz, single-phase transformer gave the following test results:
    *   **OC Test (on LV side):** $V_{oc}$ = 240 V, $I_{oc}$ = 5 A, $P_{oc}$ = 180 W
    *   **SC Test (on HV side):** $V_{sc}$ = 48 V, $I_{sc}$ = 4.17 A, $P_{sc}$ = 170 W
    Determine the per-phase equivalent circuit parameters referred to the high-voltage side.

    **Solution:**
    *   Turns ratio, $a = V_{HV}/V_{LV} = 2400/240 = 10$.
    *   **OC Test (referred to HV side):**
        *   $V_{ph, LV} = 240 / \sqrt{3} = 138.56$ V (if $V_{oc}$ was line-to-line)
        *   Assuming OC test was performed on LV side, we get parameters referred to LV side first.
        *   $V_{ph, LV} = 240/\sqrt{3} \approx 138.56$ V (This is if $V_{oc}$ was line to line. If $V_{oc}$ is phase voltage, then $V_{ph, LV}=240$ V. Let's assume $V_{oc}$ is phase voltage for simplicity of calculation, as typically LV side is tested with rated voltage.)
        *   $V_{ph, LV} = 240$ V
        *   $I_{oc, LV}$ (per phase) = $5/\sqrt{3} \approx 2.887$ A
        *   $P_{oc, LV} = 180$ W (total 3-phase power, assuming it's for a 3-phase unit, if single phase then it's just $P_{oc}$)
        *   For a single-phase transformer, $P_{oc} = V_{ph,LV} I_{w,LV}$.
        *   $I_{w,LV} = P_{oc} / V_{ph,LV} = 180 / 240 = 0.75$ A
        *   $I_{m,LV} = \sqrt{I_{oc,LV}^2 - I_{w,LV}^2} = \sqrt{5^2 - 0.75^2} = \sqrt{25 - 0.5625} = \sqrt{24.4375} \approx 4.943$ A
        *   $R_{c,LV} = V_{ph,LV} / I_{w,LV} = 240 / 0.75 = 320 \, \Omega$
        *   $X_{m,LV} = V_{ph,LV} / I_{m,LV} = 240 / 4.943 \approx 48.55 \, \Omega$

    *   **Referred to HV side:**
        *   $R_{c,HV} = a^2 \times R_{c,LV} = 10^2 \times 320 = 100 \times 320 = 32000 \, \Omega$
        *   $X_{m,HV} = a^2 \times X_{m,LV} = 10^2 \times 48.55 = 100 \times 48.55 = 4855 \, \Omega$

    *   **SC Test (referred to HV side):**
        *   $V_{sc,HV} = 48$ V (line-to-line)
        *   $V_{ph,HV} = 48 / \sqrt{3} \approx 27.71$ V
        *   $I_{sc,HV}$ (line) = 4.17 A. This means the HV winding current is 4.17 A. For a 10 kVA transformer at 2400 V, the rated current is $10000 / 2400 \approx 4.17$ A. So, SC test was performed with rated current on HV side.
        *   $I_{ph,HV}$ (per phase) = $4.17 / \sqrt{3} \approx 2.408$ A
        *   $P_{sc,HV} = 170$ W (total 3-phase power, assume single phase here).
        *   $R_{eq,HV} = P_{sc,HV} / (3 \times I_{ph,HV}^2)$  (if it was 3-phase). For single phase:
        *   $R_{eq,HV} = P_{sc,HV} / I_{sc,HV}^2 = 170 / (4.17)^2 = 170 / 17.3889 \approx 9.776 \, \Omega$
        *   $Z_{eq,HV} = V_{ph,HV} / I_{ph,HV} = (48/\sqrt{3}) / (4.17/\sqrt{3}) = 48/4.17 \approx 11.51 \, \Omega$
        *   $X_{eq,HV} = \sqrt{Z_{eq,HV}^2 - R_{eq,HV}^2} = \sqrt{(11.51)^2 - (9.776)^2} = \sqrt{132.47 - 95.57} = \sqrt{36.9} \approx 6.07 \, \Omega$

    *   **Per-Phase Equivalent Circuit (Referred to HV side):**
        *   $R_{c,HV} = 32000 \, \Omega$
        *   $X_{m,HV} = 4855 \, \Omega$
        *   $R_{eq,HV} = 9.776 \, \Omega$
        *   $X_{eq,HV} = 6.07 \, \Omega$

2.  Explain why the Open Circuit test is usually performed on the low-voltage side and the Short Circuit test on the high-voltage side.

    **Answer:**
    *   **OC Test on LV Side:** The magnetizing current ($I_m$) and core loss current ($I_w$) are a small fraction of the rated current. Performing the OC test on the LV side at rated voltage allows these small currents to be measured accurately by standard instruments. If performed on the HV side at rated voltage, the applied voltage would be very low, leading to inaccurate measurement of core losses and magnetizing parameters.
    *   **SC Test on HV Side:** The SC test requires a low applied voltage to circulate rated current through the transformer windings. Performing this test on the HV side is practical as it necessitates a low primary voltage input. If performed on the LV side, a very high current would need to be handled by the short-circuiting arrangement and measuring instruments, which is not feasible or safe.

3.  Calculate the full-load efficiency of the transformer from Problem 1, assuming the power factor is 0.8 lagging.

    **Answer:**
    *   Full load current on HV side ($I_{sc}$) = 4.17 A.
    *   Rated voltage on HV side ($V_{ph,HV}$) = $2400/\sqrt{3} \approx 1385.6$ V.
    *   Full load copper loss ($P_{cu}$) = $P_{sc,HV}$ at rated current = 170 W.
    *   Core loss ($P_{core}$) = $P_{oc}$ at rated voltage = 180 W.
    *   Output Power (for a single phase) = $V_{ph,LV} \times I_{ph,LV} \times \text{power factor}$ (This is confusing as OC test was on LV and SC test was on HV. Let's re-evaluate the problem context.)

    **Revisiting Problem 1:** The problem states a single-phase transformer.
    *   Rated HV voltage = 2400 V, Rated LV voltage = 240 V.
    *   Rated capacity = 10 kVA.
    *   Rated HV current = $10000 / 2400 \approx 4.17$ A.
    *   Rated LV current = $10000 / 240 = 41.67$ A.

    *   **OC Test (on LV side):** $V_{oc} = 240$ V, $I_{oc} = 5$ A, $P_{oc} = 180$ W. This means the test was performed with rated voltage on the LV side.
        *   $V_{ph,LV} = 240$ V
        *   $I_{oc,LV} = 5$ A
        *   $P_{oc} = 180$ W (core loss)
        *   $I_{w,LV} = P_{oc} / V_{ph,LV} = 180 / 240 = 0.75$ A
        *   $I_{m,LV} = \sqrt{5^2 - 0.75^2} \approx 4.943$ A
        *   $R_{c,LV} = 240 / 0.75 = 320 \, \Omega$
        *   $X_{m,LV} = 240 / 4.943 \approx 48.55 \, \Omega$

    *   **SC Test (on HV side):** $V_{sc} = 48$ V, $I_{sc} = 4.17$ A, $P_{sc} = 170$ W. This means the test was performed with rated current (4.17 A) on the HV side.
        *   $V_{sc,HV}$ (line) = 48 V
        *   $I_{sc,HV}$ (line) = 4.17 A
        *   $P_{sc} = 170$ W (copper loss at rated current)
        *   $Z_{eq,HV} = V_{sc,HV} / I_{sc,HV} = 48 / 4.17 \approx 11.51 \, \Omega$
        *   $R_{eq,HV} = P_{sc} / I_{sc,HV}^2 = 170 / (4.17)^2 \approx 9.776 \, \Omega$
        *   $X_{eq,HV} = \sqrt{Z_{eq,HV}^2 - R_{eq,HV}^2} = \sqrt{11.51^2 - 9.776^2} \approx 6.07 \, \Omega$

    *   **Per-phase equivalent circuit referred to HV side:**
        *   $R_{c,HV} = a^2 R_{c,LV} = 10^2 \times 320 = 32000 \, \Omega$
        *   $X_{m,HV} = a^2 X_{m,LV} = 10^2 \times 48.55 = 4855 \, \Omega$
        *   $R_{eq,HV} = 9.776 \, \Omega$
        *   $X_{eq,HV} = 6.07 \, \Omega$

    *   **Full-load efficiency at 0.8 lagging PF:**
        *   Assume output is on LV side.
        *   Output Power = $10 \text{ kVA} \times 0.8 = 8 \text{ kW} = 8000 \text{ W}$.
        *   Input Power = Output Power + Losses
        *   Losses = $P_{core} + P_{cu}$
        *   $P_{core} = P_{oc}$ at rated voltage = 180 W.
        *   $P_{cu}$ at full load = $P_{sc}$ at rated current = 170 W.
        *   Input Power = $8000 + 180 + 170 = 8350$ W.
        *   Efficiency ($\eta$) = (Output Power / Input Power) $\times 100 = (8000 / 8350) \times 100 \approx 95.81 \%$
