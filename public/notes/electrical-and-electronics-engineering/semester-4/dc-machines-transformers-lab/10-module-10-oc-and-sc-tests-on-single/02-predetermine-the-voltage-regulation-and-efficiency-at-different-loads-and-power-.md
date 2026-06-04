---
title: "Predetermine the voltage regulation and efficiency at different loads and power factors."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 10: OC and SC tests on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ca"
status: "completed"
scrapedAt: "2026-05-23T16:15:30.126Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 10: OC and SC Tests on Single-Phase Transformers

## Topic: Predetermine the Voltage Regulation and Efficiency at Different Loads and Power Factors

### 1. Introduction

This module focuses on understanding and predicting the performance of single-phase transformers without actually loading them extensively in the lab. This is achieved by conducting the Open-Circuit (OC) test and the Short-Circuit (SC) test. These tests allow us to determine the equivalent circuit parameters of the transformer, which are then used to calculate voltage regulation and efficiency at various load conditions and power factors.

**Why Predetermine?**

*   **Safety:** Full load testing of large transformers can be dangerous due to high currents and power dissipation.
*   **Efficiency:** Performing full load tests on transformers can be inefficient in terms of energy consumption.
*   **Cost-effectiveness:** Predetermining allows for accurate performance assessment without the need for expensive loading rheostats or banks of lamps.

### 2. Course Outcomes Addressed in this Module

*   **CO4:** Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)
*   **CO5:** Determine the voltage regulation and efficiency of 3-phase transformer by conducting no-load tests. (Knowledge Level: K3) - *While CO5 specifically mentions 3-phase, the principles and methodology derived from OC/SC tests are fundamental and directly applicable to understanding single-phase transformer performance, which is the focus here. The understanding gained will be transferable.*

### 3. Key Concepts and Definitions

*   **Transformer:** A static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It is primarily used to increase or decrease voltage levels.
*   **Equivalent Circuit of a Single-Phase Transformer:** A simplified circuit that represents the behavior of a transformer. It consists of:
    *   **Primary Winding Impedance:** Resistance ($R_1$) and leakage reactance ($X_1$) of the primary winding.
    *   **Secondary Winding Impedance (Referred to Primary):** Resistance ($R'_2$) and leakage reactance ($X'_2$) of the secondary winding, referred to the primary side.
    *   **Magnetizing Reactance ($X_m$):** Represents the inductive nature of the core, accounting for flux required to establish the magnetic field.
    *   **Core Loss Resistance ($R_c$ or $R_0$):** Represents the hysteresis and eddy current losses in the core.
*   **Voltage Regulation (VR):** The change in secondary terminal voltage from no-load to full-load, expressed as a percentage of the full-load voltage.
    $$VR = \frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\%$$
    Where:
    *   $V_{NL}$ = Secondary terminal voltage at no load
    *   $V_{FL}$ = Secondary terminal voltage at full load (rated voltage)
*   **Efficiency ($\eta$):** The ratio of output power to input power.
    $$\eta = \frac{Output\ Power}{Input\ Power} \times 100\% = \frac{Output\ Power}{Output\ Power + Losses} \times 100\%$$
    Losses in a transformer are primarily:
    *   **Core Losses ($P_{core}$ or $P_i$):** Hysteresis and eddy current losses, which are constant for a given voltage and frequency. These are determined by the OC test.
    *   **Copper Losses ($P_{cu}$):** $I^2R$ losses in the windings, which vary with the square of the load current. These are determined by the SC test.
*   **Power Factor (p.f.):** The cosine of the phase angle between voltage and current. It significantly affects voltage regulation.
*   **Apparent Power (S):** Product of voltage and current (VA or kVA).
*   **Real Power (P):** Power consumed in watts (W), related to resistive components.
*   **Reactive Power (Q):** Power exchanged between the source and inductive/capacitive elements (VAR or kVAR).

### 4. Open-Circuit (OC) Test (No-Load Test)

**Purpose:** To determine the core losses ($P_{core}$) and the shunt branch parameters of the equivalent circuit ($R_c$, $X_m$).

**Procedure:**

1.  The **low voltage (LV) side** of the transformer is usually excited with rated voltage at rated frequency. The high voltage (HV) side is kept open.
2.  The following instruments are connected to the LV side:
    *   **Voltmeter (V):** To measure the applied voltage.
    *   **Ammeter (A):** To measure the no-load current ($I_0$). This current is small and mainly comprises the exciting current.
    *   **Wattmeter (W):** To measure the total input power ($P_0$).
3.  Apply rated voltage to the LV winding and record the readings of the voltmeter ($V_0$), ammeter ($I_0$), and wattmeter ($P_0$).

**Calculations from OC Test:**

*   **Applied Voltage:** $V_0$ (measured)
*   **No-load Current:** $I_0$ (measured)
*   **No-load Input Power:** $P_0$ (measured)

Since the secondary is open, the load current is zero. Therefore, copper losses ($I_0^2 R$) are negligible. The measured input power $P_0$ is essentially equal to the core losses.

1.  **Core Losses:** $P_{core} = P_0$ (measured)

2.  **Shunt Branch Parameters (Referred to LV side):**
    *   The no-load current $I_0$ can be resolved into two components:
        *   **Core Loss Component ($I_w$):** In phase with the applied voltage, responsible for core losses.
        *   **Magnetizing Component ($I_m$):** Lags the applied voltage by 90 degrees, responsible for establishing the magnetic flux.
    *   From the wattmeter reading, the power consumed is $P_0 = V_0 I_w$.
        $$I_w = \frac{P_0}{V_0}$$
    *   The magnetizing current can be found using the Pythagorean theorem:
        $$I_m = \sqrt{I_0^2 - I_w^2}$$
    *   Now, we can determine the shunt branch parameters referred to the LV side:
        *   **Core Loss Resistance ($R_c$):** Represents the parallel resistance that accounts for core losses.
            $$R_c = \frac{V_0^2}{P_0} = \frac{V_0}{I_w}$$
        *   **Magnetizing Reactance ($X_m$):** Represents the parallel reactance responsible for flux.
            $$X_m = \frac{V_0}{I_m}$$

**Important Note:** If the OC test is performed on the HV side, then $V_0$ will be the rated voltage of the HV winding, and the calculated $R_c$ and $X_m$ will be referred to the HV side.

### 5. Short-Circuit (SC) Test

**Purpose:** To determine the equivalent resistance ($R_{eq}$) and equivalent leakage reactance ($X_{eq}$) of the transformer referred to the primary (or the side on which the test is conducted). These parameters are primarily due to the winding impedances.

**Procedure:**

1.  The **high voltage (HV) side** of the transformer is usually short-circuited.
2.  A variable low voltage is applied to the **low voltage (LV) side** until the rated current flows in the LV winding. The HV side will then have rated current flowing through it due to the turns ratio.
3.  The following instruments are connected to the LV side:
    *   **Voltmeter (V):** To measure the applied voltage ($V_{sc}$), which will be significantly less than the rated voltage.
    *   **Ammeter (A):** To measure the input current ($I_{sc}$), which is set to the rated current.
    *   **Wattmeter (W):** To measure the total input power ($P_{sc}$).
4.  Apply a variable voltage to the LV winding and adjust it until the ammeter reads the rated current ($I_{rated}$). Record the readings of $V_{sc}$, $I_{sc}$ ($= I_{rated}$), and $P_{sc}$.

**Calculations from SC Test:**

*   **Applied Voltage:** $V_{sc}$ (measured)
*   **Input Current:** $I_{sc} = I_{rated}$ (measured)
*   **Input Power:** $P_{sc}$ (measured)

Since the applied voltage is low, the core flux is very small, and hence core losses ($P_{core}$) are negligible. The measured input power $P_{sc}$ is almost entirely due to copper losses in both windings.

1.  **Equivalent Impedance (Referred to LV side):**
    $$Z_{eq1} = \frac{V_{sc}}{I_{sc}}$$
    This impedance is the series combination of the equivalent resistance and equivalent leakage reactance.

2.  **Equivalent Resistance (Referred to LV side):**
    The input power is dissipated as copper losses: $P_{sc} = I_{sc}^2 R_{eq1}$.
    $$R_{eq1} = \frac{P_{sc}}{I_{sc}^2}$$
    This $R_{eq1}$ represents the sum of the primary winding resistance and the secondary winding resistance referred to the primary side ($R_{eq1} = R_1 + R'_2$).

3.  **Equivalent Leakage Reactance (Referred to LV side):**
    Using the impedance and resistance, the reactance can be calculated:
    $$X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$$
    This $X_{eq1}$ represents the sum of the primary leakage reactance and the secondary leakage reactance referred to the primary side ($X_{eq1} = X_1 + X'_2$).

**Important Note:** If the SC test is performed by shorting the LV side and applying voltage to the HV side, then $I_{sc}$ will be rated current in the HV winding, $V_{sc}$ will be the applied voltage to the HV side, and the calculated parameters ($Z_{eq2}, R_{eq2}, X_{eq2}$) will be referred to the HV side.

### 6. Predetermining Voltage Regulation

Voltage regulation is influenced by the series parameters ($R_{eq}$ and $X_{eq}$) and the power factor of the load. The shunt branch parameters ($R_c$ and $X_m$) have a negligible effect on voltage regulation because the no-load current $I_0$ is very small compared to the load current.

We can use the equivalent circuit referred to the primary and consider the load connected to the secondary. Let's assume the transformer has a turns ratio 'a'.

**Equivalent Circuit Parameters (Referred to Primary):**

*   $R_{eq1} = R_1 + a^2 R_2$
*   $X_{eq1} = X_1 + a^2 X_2$
*   $R_c$ (from OC test)
*   $X_m$ (from OC test)

**Simplified Approach for Voltage Regulation:**

The voltage regulation can be approximated using the following formula, which neglects the effect of the shunt branch:

$$VR \approx \frac{I_2 R_{eq1} \cos \phi_2 \pm I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$$

Where:
*   $I_2$ = Rated secondary current (full load current).
*   $R_{eq1}$ = Equivalent resistance referred to the primary.
*   $X_{eq1}$ = Equivalent leakage reactance referred to the primary.
*   $V_2$ = Rated secondary voltage (full load voltage).
*   $\phi_2$ = Load power factor angle.

**Sign Convention:**

*   **Lagging Power Factor (+):** Use the '+' sign in the formula. The voltage drop across the series impedance causes the terminal voltage to decrease.
*   **Leading Power Factor (-):** Use the '-' sign in the formula. The voltage drop across the series impedance causes the terminal voltage to increase (or have a smaller decrease).
*   **Unity Power Factor:** $\sin \phi_2 = 0$, $VR \approx \frac{I_2 R_{eq1}}{V_2} \times 100\%$.

**Example Calculation for Voltage Regulation:**

Let's assume a transformer with the following parameters obtained from OC/SC tests:
*   Rated Voltage: 240/120 V, 50 Hz
*   Rated Power: 1 kVA
*   From OC test (on LV side): $V_0 = 120$ V, $I_0 = 0.5$ A, $P_0 = 10$ W
*   From SC test (on LV side): $V_{sc} = 10$ V, $I_{sc} = 5$ A, $P_{sc} = 20$ W

**Calculations:**

1.  **Turns Ratio (a):** Assume OC test on LV side, so $V_1 = 120$ V (rated LV voltage), $V_2 = 240$ V (rated HV voltage).
    $a = \frac{\text{Number of turns on primary}}{\text{Number of turns on secondary}} = \frac{\text{Voltage of HV winding}}{\text{Voltage of LV winding}} = \frac{240}{120} = 2$.
    *If OC test is done on the side that is excited with rated voltage, then that side is considered primary for calculating parameters.* Let's assume we are referring parameters to the 120V side.

2.  **OC Test Calculations (Referred to LV side):**
    $P_{core} = P_0 = 10$ W
    $I_w = \frac{P_0}{V_0} = \frac{10}{120} = 0.0833$ A
    $I_m = \sqrt{I_0^2 - I_w^2} = \sqrt{0.5^2 - 0.0833^2} = \sqrt{0.25 - 0.0069} \approx 0.497$ A
    $R_c = \frac{V_0}{I_w} = \frac{120}{0.0833} \approx 1441.5$ $\Omega$
    $X_m = \frac{V_0}{I_m} = \frac{120}{0.497} \approx 241.45$ $\Omega$

3.  **SC Test Calculations (Referred to LV side):**
    $I_{sc} = 5$ A (rated LV current as 1kVA / 120V = 8.33A is max, so 5A is likely some percentage of rated current used for test). Let's assume the SC test was performed to get rated current flowing in BOTH windings.
    Rated Current for 1 kVA, 120V side: $I_{rated, LV} = \frac{1000}{120} = 8.33$ A.
    Let's assume the SC test was done with $I_{sc} = 8.33$ A.
    $V_{sc} = 10$ V, $P_{sc} = 20$ W (assuming these are the values when 8.33A flows).
    $Z_{eq1} = \frac{V_{sc}}{I_{sc}} = \frac{10}{8.33} \approx 1.2$ $\Omega$
    $R_{eq1} = \frac{P_{sc}}{I_{sc}^2} = \frac{20}{8.33^2} = \frac{20}{69.39} \approx 0.288$ $\Omega$
    $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2} = \sqrt{1.2^2 - 0.288^2} = \sqrt{1.44 - 0.083} \approx \sqrt{1.357} \approx 1.165$ $\Omega$

4.  **Predetermining Voltage Regulation at Full Load:**
    Let's calculate VR for different power factors at full load (i.e., $I_2 = 8.33$ A).

    *   **Lagging Power Factor (e.g., 0.8 lagging):**
        $\cos \phi_2 = 0.8$, $\sin \phi_2 = \sqrt{1 - 0.8^2} = 0.6$
        $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 + I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$
        $VR \approx \frac{(8.33)(0.288)(0.8) + (8.33)(1.165)(0.6)}{120} \times 100\%$
        $VR \approx \frac{1.917 + 5.818}{120} \times 100\% = \frac{7.735}{120} \times 100\% \approx 6.45\%$

    *   **Unity Power Factor (p.f. = 1):**
        $\cos \phi_2 = 1$, $\sin \phi_2 = 0$
        $VR \approx \frac{I_2 R_{eq1} \cos \phi_2}{V_2} \times 100\%$
        $VR \approx \frac{(8.33)(0.288)(1)}{120} \times 100\% = \frac{2.40}{120} \times 100\% \approx 2.0\%$

    *   **Leading Power Factor (e.g., 0.8 leading):**
        $\cos \phi_2 = 0.8$, $\sin \phi_2 = -0.6$ (using the convention for the formula)
        $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 - I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$ (note the '-' sign change for leading)
        $VR \approx \frac{(8.33)(0.288)(0.8) - (8.33)(1.165)(-0.6)}{120} \times 100\%$
        $VR \approx \frac{1.917 + 5.818}{120} \times 100\% \approx 6.45\%$
        Wait, the formula for leading PF should be $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 - I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$.
        Using the $\sin \phi_2$ with its proper sign: $\phi_2$ is the angle between $V_2$ and $I_2$. For leading PF, $I_2$ leads $V_2$.
        The more accurate formula for voltage regulation is:
        $VR = \frac{I_2(R_{eq1}\cos\phi_2 \pm X_{eq1}\sin\phi_2)}{V_2} \times 100\%$
        Where $\phi_2$ is the angle of the load current with respect to the *received* voltage $V_2$.
        For lagging PF, $I_2$ lags $V_2$, so $\phi_2$ is positive.
        For leading PF, $I_2$ leads $V_2$, so $\phi_2$ is negative.

        Let's re-evaluate for 0.8 leading:
        $\cos \phi_2 = 0.8$, $\sin \phi_2 = -0.6$. The angle $\phi_2$ is between $V_2$ and $I_2$.
        $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 - I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$
        $VR \approx \frac{(8.33)(0.288)(0.8) - (8.33)(1.165)(-0.6)}{120} \times 100\%$
        $VR \approx \frac{1.917 - (-5.818)}{120} \times 100\% = \frac{1.917 + 5.818}{120} \times 100\% \approx 6.45\%$. This is still the same calculation.

        **Let's use the exact complex form for clarity:**
        $\bar{V}_2$ = Rated secondary voltage (phasor, e.g., $120 \angle 0^\circ$ V)
        $\bar{I}_2$ = Secondary current (phasor)

        For 0.8 lagging PF: $\bar{I}_2 = 8.33 \angle -36.87^\circ$ A (since $\phi_2 = \arccos(0.8) = 36.87^\circ$)
        For 0.8 leading PF: $\bar{I}_2 = 8.33 \angle +36.87^\circ$ A

        Equivalent impedance referred to primary: $\bar{Z}_{eq1} = R_{eq1} + jX_{eq1} = 0.288 + j1.165$ $\Omega$.
        Equivalent secondary current referred to primary: $\bar{I}'_2 = a \bar{I}_2 = 2 \times (8.33 \angle \phi_2) = 16.66 \angle \phi_2$ A.

        Secondary voltage referred to primary: $\bar{V}_1 = \bar{V}_2 \times a = 120 \times 2 = 240$ V.
        This is not how VR is calculated. VR is change in secondary voltage.

        Let's stick to the formula and be careful with the angle.
        $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 \pm I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$
        Where $I_2$ is magnitude of secondary current, $V_2$ is rated secondary voltage. $\phi_2$ is the angle between $V_2$ and $I_2$.

        *   **Lagging PF (0.8 lagging):** $\phi_2 = 36.87^\circ$. $\cos \phi_2 = 0.8$, $\sin \phi_2 = 0.6$.
            $VR \approx \frac{(8.33)(0.288)(0.8) + (8.33)(1.165)(0.6)}{120} \times 100\% \approx 6.45\%$

        *   **Leading PF (0.8 leading):** $\phi_2 = -36.87^\circ$. $\cos \phi_2 = 0.8$, $\sin \phi_2 = -0.6$.
            $VR \approx \frac{I_2 R_{eq1} \cos \phi_2 - I_2 X_{eq1} \sin \phi_2}{V_2} \times 100\%$ (using the derived formula form with $\sin \phi_2$ itself)
            $VR \approx \frac{(8.33)(0.288)(0.8) - (8.33)(1.165)(-0.6)}{120} \times 100\%$
            $VR \approx \frac{1.917 - (-5.818)}{120} \times 100\% = \frac{7.735}{120} \times 100\% \approx 6.45\%$.

        **Correction:** The sign of the $X_{eq1}$ term depends on whether the current leads or lags the voltage. A more robust form of the approximate formula is:
        $VR \approx \frac{I_2 (R_{eq1} \cos \phi_2 \pm X_{eq1} \sin \phi_2)}{V_2} \times 100\%$
        *   Use **+** for lagging PF.
        *   Use **-** for leading PF.

        Let's re-calculate for 0.8 leading:
        $VR \approx \frac{(8.33)(0.288)(0.8) - (8.33)(1.165)(0.6)}{120} \times 100\%$
        $VR \approx \frac{1.917 - 5.818}{120} \times 100\% = \frac{-3.901}{120} \times 100\% \approx -3.25\%$

        A negative voltage regulation means the terminal voltage *increases* from no-load to full-load, which is characteristic of highly inductive loads (leading power factor with significant reactance).

### 7. Predetermining Efficiency

Efficiency depends on both copper losses (which vary with load) and core losses (which are constant).

$$\eta = \frac{Output\ Power}{Input\ Power} \times 100\% = \frac{Output\ Power}{Output\ Power + Losses} \times 100\%$$

**Components of Losses:**

*   **Core Losses ($P_{core}$):** Determined from the OC test ($P_0$). These are constant regardless of the load.
*   **Copper Losses ($P_{cu}$):** Determined from the SC test. These vary with the square of the load current.
    $$P_{cu} = I_{sc}^2 R_{eq1}$$
    Where $I_{sc}$ is the current flowing, and $R_{eq1}$ is the equivalent resistance.

**Efficiency Calculation at Different Loads:**

Let the load be $x$ times the rated load.
*   Output Power (at primary side, for calculation consistency) $= x \times S_{rated} \times \cos \phi$ (where $S_{rated}$ is rated apparent power)
*   Secondary current $I_2 = x \times I_{rated, secondary}$
*   Copper losses at load $x$: $P_{cu}(x) = x^2 \times P_{cu, rated}$
    Where $P_{cu, rated} = I_{rated, secondary}^2 \times R'_{eq2}$ or $I_{rated, primary}^2 \times R_{eq1}$.
    Alternatively, from SC test, $P_{sc} = I_{rated}^2 R_{eq1}$, so $R_{eq1} = P_{sc} / I_{rated}^2$.
    $P_{cu}(x) = x^2 \times P_{sc}$ (if SC test was performed at rated current $I_{rated}$).

**Efficiency Formula:**

$$\eta(x) = \frac{x \times S_{rated} \times \cos \phi}{x \times S_{rated} \times \cos \phi + P_{core} + x^2 P_{sc}} \times 100\%$$

Where:
*   $x$ = fraction of rated load (e.g., 0.5 for half load, 1 for full load).
*   $S_{rated}$ = Rated apparent power of the transformer.
*   $\cos \phi$ = Load power factor.
*   $P_{core}$ = Core losses (from OC test).
*   $P_{sc}$ = Copper losses at rated current (from SC test).

**Efficiency Calculation at Different Power Factors:**

The efficiency also depends on the power factor, as the output power ($S_{rated} \cos \phi$) changes. The copper losses ($x^2 P_{sc}$) are independent of the power factor at a given load fraction 'x'.

**Example Calculation for Efficiency:**

Using the same transformer parameters:
*   Rated Power: 1 kVA = 1000 VA
*   Rated Voltage: 120 V (LV side)
*   Rated Current: $I_{rated, LV} = 8.33$ A
*   $P_{core} = 10$ W
*   $P_{sc}$ (at rated current) = 20 W

Let's calculate efficiency at **full load (x=1)** for different power factors:

*   **Full Load, 0.8 lagging PF:**
    Output Power $= S_{rated} \times \cos \phi = 1000 \times 0.8 = 800$ W
    Copper Losses at full load $= P_{cu}(1) = P_{sc} = 20$ W
    Input Power $= Output Power + P_{core} + P_{cu}(1) = 800 + 10 + 20 = 830$ W
    $\eta = \frac{800}{830} \times 100\% \approx 96.39\%$

*   **Full Load, Unity PF:**
    Output Power $= S_{rated} \times \cos \phi = 1000 \times 1 = 1000$ W
    Copper Losses at full load $= P_{cu}(1) = 20$ W
    Input Power $= Output Power + P_{core} + P_{cu}(1) = 1000 + 10 + 20 = 1030$ W
    $\eta = \frac{1000}{1030} \times 100\% \approx 97.09\%$

*   **Full Load, 0.8 leading PF:**
    Output Power $= S_{rated} \times \cos \phi = 1000 \times 0.8 = 800$ W
    Copper Losses at full load $= P_{cu}(1) = 20$ W
    Input Power $= Output Power + P_{core} + P_{cu}(1) = 800 + 10 + 20 = 830$ W
    $\eta = \frac{800}{830} \times 100\% \approx 96.39\%$

Now, let's calculate efficiency at **half load (x=0.5)** for different power factors:

*   **Half Load, 0.8 lagging PF:**
    Output Power $= 0.5 \times S_{rated} \times \cos \phi = 0.5 \times 1000 \times 0.8 = 400$ W
    Copper Losses at half load $= x^2 \times P_{sc} = (0.5)^2 \times 20 = 0.25 \times 20 = 5$ W
    Input Power $= Output Power + P_{core} + P_{cu}(0.5) = 400 + 10 + 5 = 415$ W
    $\eta = \frac{400}{415} \times 100\% \approx 96.39\%$

**Maximum Efficiency:**

Maximum efficiency occurs when the variable copper losses are equal to the constant core losses.
$P_{cu}(x) = P_{core}$
$x^2 P_{sc} = P_{core}$
$$x_{max} = \sqrt{\frac{P_{core}}{P_{sc}}}$$
This 'x' gives the fraction of load at which maximum efficiency is achieved. The efficiency at this load can then be calculated.

For our example:
$x_{max} = \sqrt{\frac{10}{20}} = \sqrt{0.5} \approx 0.707$ (i.e., at approximately 70.7% of full load).

Let's calculate efficiency at $x=0.707$ and 0.8 lagging PF:
Output Power $= 0.707 \times 1000 \times 0.8 \approx 565.6$ W
Copper Losses $= (0.707)^2 \times 20 \approx 0.5 \times 20 = 10$ W
Input Power $= 565.6 + 10 + 10 = 585.6$ W
$\eta_{max} = \frac{565.6}{585.6} \times 100\% \approx 96.58\%$
