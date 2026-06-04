---
title: "Plot the voltage regulation vs power factor curves at full-load and half full-load."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 10: OC and SC tests on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360cc"
status: "completed"
scrapedAt: "2026-05-23T16:15:31.614Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 10 - OC and SC Tests on Single-Phase Transformers

## Topic: Plot Voltage Regulation vs. Power Factor Curves at Full-Load and Half Full-Load

### 1. Introduction and Learning Outcomes

This module focuses on understanding the performance of a single-phase transformer by conducting Open Circuit (OC) and Short Circuit (SC) tests. Specifically, we will learn to plot the **voltage regulation vs. power factor curves** at different load conditions.

**Learning Outcomes for this Topic:**

*   Understand the concept of voltage regulation in a transformer.
*   Determine the parameters of the transformer equivalent circuit from OC and SC test results.
*   Calculate voltage regulation at various power factors.
*   Plot and interpret the voltage regulation vs. power factor curves at full load.
*   Plot and interpret the voltage regulation vs. power factor curves at half full load.

### 2. Key Concepts and Definitions

#### 2.1 Single-Phase Transformer: Basic Operation

A single-phase transformer is a static device that transfers electrical energy from one AC circuit to another, usually with a change in voltage and current levels, but without a change in frequency. It operates on the principle of **mutual induction**.

#### 2.2 Open Circuit (OC) Test (No-Load Test)

*   **Purpose:** To determine the **core losses (iron losses)** and the **no-load parameters** of the transformer (magnetizing reactance $X_m$ and core loss resistance $R_c$).
*   **Procedure:** The low voltage (LV) side is excited at rated voltage and frequency, while the high voltage (HV) side is kept open-circuited.
*   **Measurements:** Voltage ($V_{oc}$), current ($I_{oc}$), and power ($P_{oc}$) are measured on the LV side.
*   **Equivalent Circuit:** During the OC test, the equivalent circuit seen from the LV side consists of $R_c$ and $X_m$ in parallel, with the series impedance of the transformer being negligible compared to the parallel branch.

#### 2.3 Short Circuit (SC) Test

*   **Purpose:** To determine the **winding losses (copper losses)** and the **series parameters** of the transformer (equivalent resistance $R_{eq}$ and equivalent leakage reactance $X_{eq}$) referred to the HV side.
*   **Procedure:** The HV side is short-circuited, and a variable low voltage is applied to the LV side until the rated current flows in the HV winding.
*   **Measurements:** Voltage ($V_{sc}$), current ($I_{sc}$), and power ($P_{sc}$) are measured on the LV side.
*   **Equivalent Circuit:** During the SC test, the equivalent circuit seen from the LV side consists of the series combination of $R_{eq}$ and $X_{eq}$, with the parallel branch ($R_c$ and $X_m$) being negligible due to the high impedance of the series branch.

#### 2.4 Transformer Equivalent Circuit

The complete equivalent circuit of a transformer referred to the LV side can be represented as:

```
      R_c       X_m
    -----||-----||-----
   |               |
   R1    X1       Rc      Xm
   -----\/-----/\/\/\-----||-----||-----
  |      |     |        |        |      |
  ~ V1   |     /        |        |      |
  |      |     /        |        |      |
  ----/\-----/\/\/\-----||-----||-----
   |               |
   R2'     X2'
   -----\/-----/\/\/\-----
  |               |
  ~ V2' (referred)
```

*   $R_1, X_1$: Resistance and leakage reactance of the primary winding.
*   $R_2', X_2'$: Resistance and leakage reactance of the secondary winding referred to the primary side.
*   $R_c$: Core loss resistance.
*   $X_m$: Magnetizing reactance.

From OC and SC tests:
*   **OC Test (LV side):** $R_c = V_{oc}^2 / P_{oc}$ and $X_m = V_{oc} / I_{oc}$ (approximations, assuming $I_{oc}$ is primarily exciting current).
*   **SC Test (LV side):** $R_{eq1} = P_{sc} / I_{sc}^2$ and $Z_{eq1} = V_{sc} / I_{sc}$. Then, $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$.
    *   Note: These parameters are usually referred to the HV side in practical analysis, but for consistency in calculation, we can keep them referred to the LV side or the HV side as long as it's consistent. For plotting regulation, it's common to work with parameters referred to the HV side.

#### 2.5 Voltage Regulation

Voltage regulation is the change in secondary terminal voltage from no-load to full-load at a specified power factor, expressed as a percentage of the full-load secondary voltage.

**Formula:**

$$ \text{Voltage Regulation (VR)} = \frac{V_{\text{no-load}} - V_{\text{full-load}}}{V_{\text{full-load}}} \times 100\% $$

Where:
*   $V_{\text{no-load}}$ is the secondary terminal voltage at no-load.
*   $V_{\text{full-load}}$ is the rated secondary terminal voltage at full-load.

Alternatively, if we are calculating voltage regulation at different power factors and loads, we can use the formula derived from the transformer equivalent circuit:

$$ V_{\text{no-load}} = V_2 + I_2 R_{eq} \cos\phi_2 \pm I_2 X_{eq} \sin\phi_2 $$

Where:
*   $V_2$ is the full-load secondary terminal voltage (rated voltage).
*   $I_2$ is the full-load secondary current.
*   $R_{eq}$ is the equivalent resistance referred to the secondary side.
*   $X_{eq}$ is the equivalent leakage reactance referred to the secondary side.
*   $\phi_2$ is the phase angle between $V_2$ and $I_2$.
    *   '+' sign is used for lagging power factor.
    *   '-' sign is used for leading power factor.

Then, Voltage Regulation at a specific load ($I_2'$) and power factor ($\cos\phi_2$):

$$ \text{VR} = \frac{(V_2 + I_2' R_{eq} \cos\phi_2 \pm I_2' X_{eq} \sin\phi_2) - V_2}{V_2} \times 100\% $$

#### 2.6 Power Factor

The power factor ($\cos\phi_2$) indicates the phase relationship between the voltage and current in the secondary circuit.

*   **Lagging Power Factor (e.g., inductive load):** Current lags voltage. $\phi_2$ is positive. $\sin\phi_2$ is positive.
*   **Leading Power Factor (e.g., capacitive load):** Current leads voltage. $\phi_2$ is negative. $\sin\phi_2$ is negative (use of '-')
*   **Unity Power Factor:** Current and voltage are in phase. $\phi_2 = 0$. $\sin\phi_2 = 0$.

### 3. Plotting Voltage Regulation vs. Power Factor Curves

To plot these curves, we need to calculate the voltage regulation for a range of power factors (both lagging and leading) at specific load conditions (full load and half load).

#### 3.1 Steps for Plotting:

1.  **Conduct OC and SC Tests:** Perform the OC and SC tests on the single-phase transformer as described in the lab manual. Record the voltage, current, and power readings accurately.

2.  **Determine Equivalent Circuit Parameters:**
    *   **From OC Test (assuming LV side measurements):**
        *   $R_c = V_{oc}^2 / P_{oc}$
        *   $X_m = V_{oc} / I_{oc}$
    *   **From SC Test (assuming LV side measurements, rated current flowing):**
        *   $Z_{eq1} = V_{sc} / I_{rated}$ (Note: $I_{sc}$ in the test is usually the rated current)
        *   $R_{eq1} = P_{sc} / I_{rated}^2$
        *   $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$
    *   **Refer to Secondary Side (if needed for regulation formula):** Let the turns ratio be $a = N_2/N_1$.
        *   $R_{eq2} = R_{eq1} / a^2$
        *   $X_{eq2} = X_{eq1} / a^2$
        *   $Z_{eq2} = Z_{eq1} / a^2$
        *   $V_2$ is the rated secondary voltage.
        *   $I_2$ is the rated secondary current.

3.  **Choose Load Conditions:**
    *   **Full Load:** $I_2' = I_2$ (rated secondary current).
    *   **Half Full Load:** $I_2' = I_2 / 2$.

4.  **Select a Range of Power Factors:** Choose several power factors, for example:
    *   Lagging: 0.8, 0.7, 0.6, 0.5, 0.1 (lag)
    *   Unity: 1.0
    *   Leading: 0.5, 0.6, 0.7, 0.8, 0.9, 0.95 (lead)

5.  **Calculate Voltage Regulation for Each Power Factor and Load Condition:**
    *   For each selected power factor ($\cos\phi_2$) and load condition ($I_2'$), calculate the voltage regulation using the formula:
        $$ \text{VR} = \frac{I_2' R_{eq2} \cos\phi_2 \pm I_2' X_{eq2} \sin\phi_2}{V_2} \times 100\% $$
        *   **Remember:** Use '+' for lagging PF and '-' for leading PF. Calculate $\sin\phi_2$ from $\cos\phi_2$ ($\sin\phi_2 = \sqrt{1 - \cos^2\phi_2}$).

6.  **Tabulate the Results:** Create a table summarizing the calculated values.

    **Example Table for Full Load:**

    | Power Factor ($\cos\phi_2$) | $\phi_2$ (degrees) | $\sin\phi_2$ | Load Current ($I_2'$) | $I_2' R_{eq2} \cos\phi_2$ | $I_2' X_{eq2} \sin\phi_2$ | Numerator ($I_2' R_{eq2} \cos\phi_2 \pm I_2' X_{eq2} \sin\phi_2$) | Voltage Regulation (%) |
    | :------------------------ | :----------------- | :----------- | :-------------------- | :------------------------ | :------------------------ | :---------------------------------------------------------- | :--------------------- |
    | 0.8 Lagging               |                    |              | $I_2$                 |                           |                           |                                                             |                        |
    | 0.707 Lagging             |                    |              | $I_2$                 |                           |                           |                                                             |                        |
    | 1.0 Unity                 |                    |              | $I_2$                 |                           |                           |                                                             |                        |
    | 0.707 Leading             |                    |              | $I_2$                 |                           |                           |                                                             |                        |
    | 0.8 Leading               |                    |              | $I_2$                 |                           |                           |                                                             |                        |

7.  **Plot the Curves:**
    *   Draw two graphs on the same axes:
        *   **X-axis:** Power Factor (from lagging to leading, e.g., 0.8 Lagging to 0.8 Leading, with 1.0 in the middle).
        *   **Y-axis:** Voltage Regulation (%).
    *   Plot the calculated VR values against their corresponding power factors for full load, and draw a smooth curve.
    *   Plot the calculated VR values against their corresponding power factors for half full load, and draw another smooth curve.

#### 3.2 Interpreting the Curves

*   **Shape of the Curve:**
    *   At **lagging power factors**, voltage regulation is **positive** and generally **increases** as the power factor becomes more lagging. This is because the reactive voltage drop ($I_2 X_{eq}$) adds to the resistive drop ($I_2 R_{eq}$).
    *   At **unity power factor**, voltage regulation is **minimum positive** (or close to zero for some transformers).
    *   At **leading power factors**, voltage regulation becomes **negative**. This means the terminal voltage at full load is higher than the no-load voltage. This is due to the voltage rise caused by the leading current flowing through the leakage reactance. The more leading the power factor, the more negative the voltage regulation.
*   **Comparison between Full Load and Half Full Load:**
    *   The voltage regulation at **full load** will always be **higher** (more positive at lagging PF, less negative at leading PF) than at **half full load** for the same power factor. This is because the voltage drops ($I_2' R_{eq}$ and $I_2' X_{eq}$) are proportional to the current, which is higher at full load.
