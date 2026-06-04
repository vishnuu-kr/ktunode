---
title: "Predetermine the voltage regulation and efficiency at different loads (full-load and half full-load) and power factors (unity, 0.8 lag and lead)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 13: Sumpner’s test (CO4)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360da"
status: "completed"
scrapedAt: "2026-05-23T16:15:40.187Z"
---
# DC Machines & Transformers Lab: Module 13 - Sumpner's Test (CO4)

## Topic: Predetermine the Voltage Regulation and Efficiency at Different Loads and Power Factors

### 1. Introduction to Sumpner's Test

Sumpner's test, also known as the back-to-back test or regenerative test, is a method for testing two identical transformers. It allows for the determination of their performance characteristics (efficiency and voltage regulation) under various load conditions without actually supplying the full power required by both transformers individually. This significantly reduces the power consumption and cost of testing, especially for large transformers.

**Key Concept:** The core principle of Sumpner's test is to supply the core losses of one transformer by the copper losses of the other. This is achieved by connecting the two transformers in a specific configuration and applying a reduced voltage to one of them.

### 2. Objectives of Sumpner's Test

The primary objectives of conducting Sumpner's test are:

*   To predetermine the **voltage regulation** of the transformer at different load conditions and power factors.
*   To predetermine the **efficiency** of the transformer at different load conditions and power factors.
*   To determine the **equivalent circuit parameters** (resistance and reactance) of the transformer.
*   To assess the **heating** of the transformer under various load conditions.

**Alignment with Course Outcomes:** This topic directly addresses **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**, as Sumpner's test is a load test on transformers.

### 3. Theoretical Background and Key Concepts

#### 3.1. Equivalent Circuit of a Transformer

The performance of a transformer is analyzed using its equivalent circuit. For Sumpner's test, we primarily focus on the simplified series equivalent circuit, which includes:

*   **$R_{eq1}$**: Equivalent resistance referred to the primary side.
*   **$X_{eq1}$**: Equivalent leakage reactance referred to the primary side.
*   **$R_{eq2}'$**: Equivalent resistance referred to the secondary side ($R_{eq2}' = R_{eq2} + (N_1/N_2)^2 R_{core}$).
*   **$X_{eq2}'$**: Equivalent leakage reactance referred to the secondary side ($X_{eq2}' = X_{eq2} + (N_1/N_2)^2 X_{core}$).

However, in Sumpner's test, we consider the equivalent circuit referred to the primary side as $R_{eq1}$ and $X_{eq1}$, where:

$R_{eq1} = R_1 + (N_1/N_2)^2 R_2$
$X_{eq1} = X_1 + (N_1/N_2)^2 X_2$

**Reference:** Refer to Chapter 4 of "Electrical Machinery" by P.S. Bimbhra for detailed discussion on transformer equivalent circuits and Chapter 6 of "Electric Machines" by D P Kothari & I J Nagrath.

#### 3.2. Losses in a Transformer

The losses in a transformer are crucial for determining efficiency. They are categorized as:

*   **Core Losses (Iron Losses)**: Occur in the magnetic core due to hysteresis and eddy currents. These are approximately constant at a given voltage and frequency and depend on the core material and flux density.
    $P_{core} = P_h + P_e$
*   **Copper Losses (Ohmic Losses)**: Occur in the windings due to the current flowing through them. These are proportional to the square of the current.
    $P_{cu} = I_1^2 R_1 + I_2^2 R_2$ (referred to respective sides)
    When referred to the primary side, $P_{cu1} = I_1^2 R_{eq1}$.

#### 3.3. Voltage Regulation

Voltage regulation is a measure of the change in secondary voltage from no-load to full-load conditions at a constant primary voltage. It is expressed as a percentage:

$VR = \frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \times 100\%$

Where:
*   $V_{2,NL}$ is the no-load secondary voltage.
*   $V_{2,FL}$ is the full-load secondary voltage.

In Sumpner's test, we can predetermine voltage regulation by calculating the drop in the equivalent impedance of the transformer.

#### 3.4. Efficiency

Efficiency ($\eta$) of a transformer is defined as the ratio of output power to input power:

$\eta = \frac{Output Power}{Input Power} = \frac{Output Power}{Output Power + Losses}$

$\eta = \frac{V_2 I_2 \cos\phi_2}{V_2 I_2 \cos\phi_2 + P_{core} + I_2^2 R_{eq2}'}$

Where:
*   $V_2$ and $I_2$ are the secondary voltage and current respectively.
*   $\cos\phi_2$ is the power factor of the load.
*   $R_{eq2}'$ is the equivalent resistance referred to the secondary side.

### 4. Sumpner's Test Setup and Procedure

**Requirement:** Two identical single-phase transformers.

**Circuit Diagram:**

The two identical transformers (say T1 and T2) are connected in a back-to-back manner.

1.  **Primary Sides:** The primary windings of T1 and T2 are connected in parallel to a variable AC supply.
2.  **Secondary Sides:** The secondary windings of T1 and T2 are connected in *series opposition*. This means that if the primary windings are connected in parallel to the supply, the polarity of the secondary windings is such that they oppose each other when connected in series.
3.  **DC Supply:** A variable DC supply is connected to the secondary side of one of the transformers (say T1).
4.  **Measuring Instruments:**
    *   **Primary Side (common to both transformers):**
        *   Voltmeter ($V_1$) to measure the primary supply voltage.
        *   Ammeter ($A_1$) to measure the total primary current.
    *   **Secondary Side (DC excitation circuit):**
        *   Voltmeter ($V_{dc}$) to measure the DC voltage applied.
        *   Ammeter ($A_{dc}$) to measure the DC current.
    *   **Secondary Side (AC circuit connecting the transformers):**
        *   Voltmeter ($V_{sec}$) to measure the voltage across the series connection of secondary windings. This voltmeter should read zero when the transformers are perfectly matched and the primary voltages are equal.
        *   Ammeter ($A_{sec}$) to measure the circulating current between the secondaries.
    *   **Load (connected to the output of one transformer, say T2):**
        *   Wattmeter ($W_L$) to measure the total power delivered to the load.
        *   Ammeter ($A_L$) to measure the load current.
        *   Voltmeter ($V_L$) to measure the load voltage.
        *   Power Factor Meter or Wattmeter to measure load power factor.

**Procedure:**

1.  **Initial Setup:** Connect the primary windings of the two transformers in parallel to a variable AC supply. Connect the secondary windings in series opposition. Connect a DC supply to the secondary of one transformer (e.g., T1).
2.  **No-Load Check:** With the AC primary supply switched ON and set to the rated voltage, adjust the DC excitation to a value that causes the primary current (measured by $A_1$) to be equal to the rated primary current of one transformer. The voltage across the secondary terminals ($V_{sec}$) should be very close to zero. This ensures that the transformers are identical and the polarities are correctly matched. If $V_{sec}$ is not zero, reverse the connections of one secondary winding.
3.  **Load Testing (Predetermining Performance):**
    *   **To Predetermine Full Load Performance:**
        *   The primary windings are connected in parallel to the rated primary voltage.
        *   The secondary windings are connected in series opposition.
        *   A variable AC voltage source is applied to the primary side of T1.
        *   A DC excitation is applied to the secondary of T1, and a variable AC voltage is applied to the primary of T1.
        *   The secondary of T1 is connected in series opposition to the secondary of T2.
        *   **Crucial Step:** The AC voltage applied to the primary of T1 is adjusted so that the *circulating current* between the secondaries (measured by $A_{sec}$) causes the primary current ($A_1$) to be equal to the rated primary current.
        *   **Load Connection:** The load is connected to the secondary of T2. The AC voltage applied to the primaries is adjusted such that the load current is the rated full-load current.
        *   **Measure:**
            *   Primary voltage ($V_1$).
            *   Total primary current ($A_1$).
            *   Circulating current in secondaries ($A_{sec}$).
            *   Voltage across secondaries ($V_{sec}$).
            *   Load voltage ($V_L$), load current ($A_L$), load power ($W_L$), and load power factor ($\cos\phi_L$).
    *   **To Predetermine Half Full Load Performance:**
        *   Repeat the above steps, but adjust the primary voltage such that the load current ($A_L$) is half of the rated full-load current.
        *   Measure the corresponding primary voltage, currents, and power.
    *   **To Predetermine Performance at Different Power Factors:**
        *   Connect loads with unity, 0.8 lagging, and 0.8 leading power factors.
        *   For each power factor, adjust the primary voltage to achieve the desired load current (full-load and half full-load).
        *   Record the necessary measurements.

**Simplified Approach for Sumpner's Test:**

A more practical approach to conducting Sumpner's test for performance predermination is as follows:

1.  **Determine Equivalent Impedance:**
    *   Connect the primary windings in parallel to a variable AC supply.
    *   Connect the secondary windings in series opposition.
    *   Apply a reduced AC voltage to the primary terminals.
    *   Increase this voltage until the circulating current in the secondary circuit ($A_{sec}$) is equal to the rated secondary current of one transformer.
    *   Record the primary voltage ($V_1$), primary current ($A_1$), and the circulating secondary current ($A_{sec}$).
    *   From these readings, the equivalent resistance and reactance referred to the primary can be determined.
        *   The primary current ($A_1$) represents the sum of the exciting currents of both transformers. For identical transformers, $A_1 \approx 2 \times I_0$, where $I_0$ is the no-load current.
        *   The circulating secondary current ($A_{sec}$) is the actual load current being simulated.

2.  **Predetermining Voltage Regulation:**
    *   **Calculate Equivalent Impedance:** Using the readings from step 1, where $A_{sec}$ is the rated secondary current, we can approximate the equivalent impedance.
        Let $V_1$ be the applied primary voltage, and $I_1$ be the total primary current.
        $V_1$ is applied across the primaries of T1 and T2 in parallel.
        The circulating current $I_{sec}$ flows in the secondaries of T1 and T2 in series opposition.
        When $I_{sec} = I_{2,rated}$, the primary equivalent voltage drop can be related to $I_{sec}$.
        $E_1$ (induced EMF in primary) $\approx V_1$.
        The circulating current in the primary side is $I_{sec} \times (N_1/N_2)$.
        The total primary current $I_1$ is approximately $2 \times I_0$ (no-load current).
        The voltage drop in the equivalent impedance referred to the primary is approximately $I_{sec} \times (N_1/N_2) \times Z_{eq1}$.
        This drop is then related to the induced EMF.

    *   **Alternatively, using equivalent circuit parameters:**
        From the open-circuit and short-circuit tests (which should ideally be performed first), the equivalent circuit parameters ($R_{eq1}$, $X_{eq1}$, $R_c$, $X_m$) are determined.
        Then, voltage regulation can be calculated using the formula:
        $VR = \frac{I_1 (R_{eq1} \cos\phi_2 \pm X_{eq1} \sin\phi_2)}{E_1} \times 100\%$
        where the '+' sign is for lagging PF and '-' for leading PF, and $E_1$ is the induced EMF.

3.  **Predetermining Efficiency:**
    *   Once the equivalent circuit parameters are known (from OC/SC tests or the initial Sumpner's test measurements), efficiency at different loads and power factors can be calculated using the efficiency formula:
        $\eta = \frac{V_2 I_2 \cos\phi_2}{V_2 I_2 \cos\phi_2 + P_{core} + I_2^2 R_{eq2}'}$
        Where $P_{core}$ is determined from the no-load test, and $R_{eq2}'$ is obtained from the Sumpner's test equivalent impedance measurement or SC test.

**Example Calculation (Predetermining Efficiency at Full Load, Unity PF):**

Assume:
*   Transformer Rating: 5 kVA, 230V/115V, 50 Hz
*   From OC test: $P_0 = 50$ W, $I_0 = 0.2$ A, $V_0 = 230$ V
*   From SC test: $P_{sc} = 100$ W, $I_{sc} = 2$ A, $V_{sc} = 15$ V

**Calculations:**

1.  **Equivalent Impedance referred to primary:**
    *   $R_{eq1} = \frac{P_{sc}}{I_{sc}^2} = \frac{100}{2^2} = 25 \Omega$
    *   $Z_{eq1} = \frac{V_{sc}}{I_{sc}} = \frac{15}{2} = 7.5 \Omega$
    *   $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2} = \sqrt{7.5^2 - 25^2}$ - This result shows an error in the assumed SC test values if $R_{eq1}$ is calculated this way from SC data. Typically, SC test gives $Z_{eq1}$ and $R_{eq1}$ is derived from it or a series resistance is assumed. Let's assume SC test yields $Z_{eq1} = 7.5 \Omega$ and $R_{eq1} = 2.5 \Omega$ for consistency.
    *   $X_{eq1} = \sqrt{7.5^2 - 2.5^2} = \sqrt{56.25 - 6.25} = \sqrt{50} \approx 7.07 \Omega$

2.  **Core Loss:** From OC test, $P_{core} = P_0 = 50$ W.

3.  **Copper Loss at Full Load:**
    *   $I_1$ (rated) = 5000 VA / 230 V $\approx 21.74$ A
    *   $P_{cu} = I_1^2 R_{eq1} = (21.74)^2 \times 2.5 \approx 472.7 \times 2.5 \approx 1181.8$ W

4.  **Efficiency at Full Load, Unity PF:**
    *   Output Power = $V_2 I_2 \cos\phi_2$. For simplicity, let's work with primary values assuming rated voltage is applied to primary ($V_1 = 230$ V).
    *   Output Power (referred to primary) = $V_1 \times I_{2,rated} \times (N_1/N_2) \times \cos\phi_2$
    *   $I_{2,rated} = 5000 \text{ VA} / 115 \text{ V} = 43.48$ A
    *   Turns ratio $(N_1/N_2) = 230/115 = 2$
    *   $I_{2,rated} \times (N_1/N_2) = 43.48 \times 2 = 86.96$ A (This is the equivalent primary current for full secondary load)
    *   Output Power = $230 \text{ V} \times 43.48 \text{ A} \times 1 = 10000.4$ W
    *   Input Power = Output Power + $P_{core} + P_{cu}$
    *   Input Power = $10000.4 \text{ W} + 50 \text{ W} + 1181.8 \text{ W} = 11232.2$ W
    *   $\eta = \frac{10000.4}{11232.2} \times 100\% \approx 89.03\%$

**Predetermining Voltage Regulation at Full Load, Unity PF:**

*   $V_1 = 230$ V (rated primary voltage)
*   Induced EMF $E_1$. From OC test, $V_0 = 230$ V and $I_0 = 0.2$ A at $V_0$. This implies $E_1 \approx V_0 = 230$ V for unity PF at no load.
*   $I_1$ (full load) = 21.74 A
*   $\cos\phi_2$ (full load) = 1.0 (unity PF)
*   $\sin\phi_2$ (full load) = 0
*   $VR = \frac{I_1 (R_{eq1} \cos\phi_2 + X_{eq1} \sin\phi_2)}{E_1} \times 100\%$
*   $VR = \frac{21.74 (2.5 \times 1.0 + 7.07 \times 0)}{230} \times 100\% = \frac{21.74 \times 2.5}{230} \times 100\% = \frac{54.35}{230} \times 100\% \approx 23.63\%$

**Note on Voltage Regulation Calculation:** The above calculation for VR is a theoretical predetermination using OC/SC test results. The actual Sumpner's test procedure involves measuring currents and voltages in the back-to-back connection.

### 5. Practical Implementation in Lab

In the lab, the procedure involves:

1.  **Obtain OC/SC Test Data:** Ideally, OC and SC tests are performed first on one of the identical transformers to determine the equivalent circuit parameters ($R_{eq1}$, $X_{eq1}$, $R_c$, $X_m$). These parameters are then used for theoretical predetermination.
2.  **Sumpner's Test Setup:** Assemble the circuit as described in Section 4.
3.  **No-Load Check:** Ensure zero voltage across the secondary series connection ($V_{sec}$) by adjusting primary voltage and checking polarity.
4.  **Circulating Current Setup:** Apply a reduced primary voltage and adjust the DC excitation to achieve the rated circulating current in the secondaries ($A_{sec} = I_{2,rated}$).
5.  **Load Application and Measurement:**
    *   Connect the load to the output of one transformer (e.g., T2).
    *   Adjust the primary voltage to achieve the desired load current ($I_L$).
    *   Record $V_1, A_1, A_{sec}, V_{sec}$ (should be near zero), $V_L, I_L, W_L$, and $\cos\phi_L$.
    *   Repeat for different loads (full load, half full load) and power factors (unity, 0.8 lag, 0.8 lead).
6.  **Calculations for Predetermination:**
    *   **Voltage Regulation:**
        *   Use the measured parameters to calculate the voltage drop across the equivalent impedance at various loads and power factors.
        *   $V_{2,FL}$ is the measured load voltage. $V_{2,NL}$ can be calculated by adding the voltage drop (which is dependent on load and PF) to $V_{2,FL}$, or more accurately, by referring to the induced EMF.
        *   $VR = \frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \times 100\%$
    *   **Efficiency:**
        *   $P_{core}$ is determined from the OC test ($P_0$).
        *   $P_{cu}$ is calculated as $I_2^2 R_{eq2}'$ or $I_1^2 R_{eq1}$ at the specific load current. $R_{eq2}'$ is obtained from OC/SC tests or can be derived from Sumpner's test impedance measurement.
        *   Output Power = $V_L \times I_L \times \cos\phi_L$.
        *   $\eta = \frac{Output Power}{Output Power + P_{core} + P_{cu}}$

### 6. Predetermining Voltage Regulation and Efficiency

#### 6.1. Predetermining Efficiency

Efficiency ($\eta$) at any load condition and power factor can be calculated using:

$\eta = \frac{Output Power}{Input Power}$

Where:
*   **Output Power ($P_{out}$)** = $V_L \times I_L \times \cos\phi_L$
*   **Input Power ($P_{in}$)** = $P_{out} + P_{losses}$
*   **Total Losses ($P_{losses}$)** = $P_{core} + P_{cu}$

**Determining $P_{core}$**:
This is obtained directly from the no-load (open-circuit) test as the total power input at rated voltage.
$P_{core} = P_0$ (from OC test).

**Determining $P_{cu}$**:
Copper losses are load dependent.
$P_{cu} = I_2^2 R_{eq2}'$ (referred to secondary side)
Or, in terms of primary currents and equivalent resistance referred to primary:
$P_{cu} = I_1^2 R_{eq1}$

To calculate $P_{cu}$ at different loads:
*   **Full Load:** $P_{cu,FL} = I_{2,FL}^2 R_{eq2}'$ or $I_{1,FL}^2 R_{eq1}$
*   **Half Full Load:** $P_{cu,HL} = I_{2,HL}^2 R_{eq2}' = (0.5 I_{2,FL})^2 R_{eq2}' = 0.25 P_{cu,FL}$

The value of $R_{eq2}'$ (or $R_{eq1}$) is obtained from the short-circuit test.

**Example Calculations (Using previously assumed values for 5 kVA transformer):**

*   $P_{core} = 50$ W
*   $R_{eq1} = 2.5 \Omega$
*   $I_{1,FL}$ (rated primary current) = 21.74 A
*   $P_{cu,FL} = (21.74)^2 \times 2.5 \approx 1181.8$ W

**Efficiency at Full Load, Unity PF:**
*   $I_2$ at FL = 43.48 A, $V_2$ at FL = 115 V
*   $P_{out} = 115 \text{ V} \times 43.48 \text{ A} \times 1.0 = 5000.2$ W (rated output)
*   $P_{cu}$ at FL (referred to primary) = 1181.8 W
*   $P_{in} = 5000.2 + 50 + 1181.8 = 6232$ W
*   $\eta_{FL, unity} = \frac{5000.2}{6232} \times 100\% \approx 80.23\%$

**Efficiency at Half Full Load, Unity PF:**
*   $I_2$ at HL = 0.5 * 43.48 A = 21.74 A
*   $P_{out} = 115 \text{ V} \times 21.74 \text{ A} \times 1.0 = 2500.1$ W
*   $P_{cu}$ at HL = $(0.5 \times 21.74)^2 \times 2.5 = (10.87)^2 \times 2.5 \approx 118.18 \times 2.5 \approx 295.45$ W
*   $P_{in} = 2500.1 + 50 + 295.45 = 2845.55$ W
*   $\eta_{HL, unity} = \frac{2500.1}{2845.55} \times 100\% \approx 87.86\%$

**Efficiency at Full Load, 0.8 Lagging PF:**
*   $P_{out} = 115 \text{ V} \times 43.48 \text{ A} \times 0.8 = 4000.16$ W
*   $P_{cu}$ at FL = 1181.8 W (same as before since current is the same)
*   $P_{in} = 4000.16 + 50 + 1181.8 = 5231.96$ W
*   $\eta_{FL, 0.8lag} = \frac{4000.16}{5231.96} \times 100\% \approx 76.45\%$

**Efficiency at Full Load, 0.8 Leading PF:**
*   $P_{out} = 115 \text{ V} \times 43.48 \text{ A} \times 0.8 = 4000.16$ W
*   $P_{cu}$ at FL = 1181.8 W
*   $P_{in} = 4000.16 + 50 + 1181.8 = 5231.96$ W
*   $\eta_{FL, 0.8lead} = \frac{4000.16}{5231.96} \times 100\% \approx 76.45\%$ (Note: Copper losses are the same, core losses are the same. The output power calculation is the same if the apparent power is kept constant, but the real output power changes due to PF. The input power calculation should consider the current and voltage. The core losses are generally unaffected by power factor, and copper losses are dependent on current squared.)

#### 6.2. Predetermining Voltage Regulation

Voltage regulation is calculated as:

$VR = \frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \times 100\%$

$V_{2,NL}$ is the no-load secondary voltage, which is assumed to be equal to the rated secondary voltage ($V_{2,rated}$) when the primary voltage is adjusted to provide rated induced EMF.
$V_{2,FL}$ is the terminal voltage at full load.

We can predetermine the voltage regulation using the equivalent circuit parameters:

$V_{2,FL} = V_{rated}$ (This is the voltage we are trying to find the regulation for)
$E_2 = V_{2,FL} + I_2 (R_{eq2}' \cos\phi_2 \pm X_{eq2}' \sin\phi_2)$ (for secondary side)
or
$E_1 = V_1 + I_1 (R_{eq1} \cos\phi_2 \pm X_{eq1} \sin\phi_2)$ (for primary side)

Where $E_1$ and $E_2$ are the induced EMFs (constant for a given primary voltage).
If we assume the primary voltage is kept constant at its rated value, then $E_1$ is constant.

**Steps:**

1.  **Determine $E_1$**: From the OC test, $V_0$ is measured at rated voltage, so $E_1 \approx V_0$.
2.  **Calculate $V_{2,FL}$ for different loads and PFs**:
    *   **Full Load, Unity PF:**
        $I_{2,FL} = I_{2,rated}$
        $\cos\phi_2 = 1.0$, $\sin\phi_2 = 0$
        $E_2 = V_{2,FL} + I_{2,FL} (R_{eq2}' \times 1.0 + X_{eq2}' \times 0)$
        $E_2 = V_{2,FL} + I_{2,FL} R_{eq2}'$
        $V_{2,FL} = E_2 - I_{2,FL} R_{eq2}'$
        $V_{2,NL}$ is assumed to be $E_2$ (secondary EMF).
        $VR = \frac{E_2 - (E_2 - I_{2,FL} R_{eq2}')}{E_2 - I_{2,FL} R_{eq2}'} \times 100\% = \frac{I_{2,FL} R_{eq2}'}{E_2 - I_{2,FL} R_{eq2}'} \times 100\%$
        (Note: $E_2 = E_1 \times (N_2/N_1)$)
    *   **Full Load, 0.8 Lagging PF:**
        $I_{2,FL} = I_{2,rated}$
        $\cos\phi_2 = 0.8$, $\sin\phi_2 = \sqrt{1 - 0.8^2} = 0.6$
        $E_2 = V_{2,FL} + I_{2,FL} (R_{eq2}' \times 0.8 + X_{eq2}' \times 0.6)$
        $V_{2,FL} = E_2 - I_{2,FL} (0.8 R_{eq2}' + 0.6 X_{eq2}')$
        $VR = \frac{E_2 - V_{2,FL}}{V_{2,FL}} \times 100\% = \frac{I_{2,FL} (0.8 R_{eq2}' + 0.6 X_{eq2}')}{E_2 - I_{2,FL} (0.8 R_{eq2}' + 0.6 X_{eq2}')} \times 100\%$
    *   **Full Load, 0.8 Leading PF:**
        $I_{2,FL} = I_{2,rated}$
        $\cos\phi_2 = 0.8$, $\sin\phi_2 = 0.6$ (but the term changes sign)
        $E_2 = V_{2,FL} + I_{2,FL} (R_{eq2}' \times 0.8 - X_{eq2}' \times 0.6)$
        $V_{2,FL} = E_2 - I_{2,FL} (0.8 R_{eq2}' - 0.6 X_{eq2}')$
        $VR = \frac{E_2 - V_{2,FL}}{V_{2,FL}} \times 100\% = \frac{I_{2,FL} (0.8 R_{eq2}' - 0.6 X_{eq2}')}{E_2 - I_{2,FL} (0.8 R_{eq2}' - 0.6 X_{eq2}')} \times 100\%$

**Example Calculation for VR (Using previously assumed values):**

*   $E_1 \approx V_0 = 230$ V
*   Turns Ratio $(N_1/N_2) = 2$, so $(N_2/N_1) = 0.5$
*   $E_2 = E_1 \times (N_2/N_1) = 230 \times 0.5 = 115$ V
*   $I_{2,FL} = 43.48$ A
*   $R_{eq1} = 2.5 \Omega \implies R_{eq2}' = R_{eq1} / (N_1/N_2)^2 = 2.5 / 2^2 = 2.5 / 4 = 0.625 \Omega$
*   $X_{eq1} = 7.07 \Omega \implies X_{eq2}' = X_{eq1} / (N_1/N_2)^2 = 7.07 / 4 \approx 1.7675 \Omega$

**VR at Full Load, Unity PF:**
*   $VR = \frac{43.48 \times 0.625}{115 - 43.48 \times 0.625} \times 100\% = \frac{27.175}{115 - 27.175} \times 100\% = \frac{27.175}{87.825} \times 100\% \approx 30.94\%$

**VR at Full Load, 0.8 Lagging PF:**
*   $VR = \frac{43.48 (0.8 \times 0.625 + 0.6 \times 1.7675)}{115 - 43.48 (0.8 \times 0.625 + 0.6 \times 1.7675)} \times 100\%$
*   $VR = \frac{43.48 (0.5 + 1.0605)}{115 - 43.48 (0.5 + 1.0605)} \times 100\% = \frac{43.48 \times 1.5605}{115 - 43.48 \times 1.5605} \times 100\%$
*   $VR = \frac{67.85}{115 - 67.85} \times 100\% = \frac{67.85}{47.15} \times 100\% \approx 144.11\%$

**VR at Full Load, 0.8 Leading PF:**
*   $VR = \frac{43.48 (0.8 \times 0.625 - 0.6 \times 1.7675)}{115 - 43.48 (0.8 \times 0.625 - 0.6 \times 1.7675)} \times 100\%$
*   $VR = \frac{43.48 (0.5 - 1.0605)}{115 - 43.48 (0.5 - 1.0605)} \times 100\% = \frac{43.48 \times (-0.5605)}{115 - 43.48 \times (-0.5605)} \times 100\%$
*   $VR = \frac{-24.37}{115 + 24.37} \times 100\% = \frac{-24.37}{139.37} \times 100\% \approx -17.48\%$

**Important Note:** These VR calculations are theoretical predications based on OC/SC tests. Sumpner's test itself is a load test where actual load voltage is measured.

### 7. Practice Questions

**Q1.** What is the main advantage of Sumpner's test over a direct load test for transformers?
**Answer:** Sumpner's test significantly reduces power consumption as only core losses of one transformer and copper losses of both (circulating current) are supplied, unlike a direct load test where the full load power is supplied by the source.

**Q2.** In Sumpner's test, if the two transformers are not identical, what will be the reading on the voltmeter connected across the series opposition of the secondary windings?
**Answer:** The voltmeter will show a significant voltage, indicating that the transformers are not identical or their polarities are not matched.

**Q3.** Calculate the efficiency of a 10 kVA, 400V/200V transformer at full load, unity power factor. The core loss is 150W and the full-load copper loss is 200W.
**Answer:**
*   Output Power = 10 kVA $\times$ 1.0 = 10000 W
*   Core Loss = 150 W
*   Copper Loss = 200 W
*   Input Power = Output Power + Losses = 10000 + 150 + 200 = 10350 W
*   Efficiency ($\eta$) = (10000 / 10350) $\times$ 100% $\approx$ 96.62%

**Q4.** A transformer is tested using Sumpner's test. The primary side is connected to a 230V supply. The circulating current in the secondary is adjusted to the rated value. The primary current is measured as 1.5 A. The AC voltage applied to the primary of one transformer is 230V, and the DC excitation to the secondary of the same transformer is 110V. The circulating current in the secondary is 5A. If the transformer rating is 5kVA, 230V/110V, determine the equivalent resistance referred to the primary side.
**Answer:**
*   The circulating current in the secondary (5A) when referred to the primary side is $5 \text{ A} \times (N_1/N_2)$.
*   From the rating, $N_1/N_2 = 230V/110V \approx 2.09$.
*   Equivalent primary current due to circulating secondary current = $5 \text{ A} \times 2.09 = 10.45$ A.
*   The total primary current is 1.5 A. This seems inconsistent with the circulating current value if the primary is supplying rated current.

    *Let's re-evaluate the question for a more standard interpretation.*
    If Sumpner's test is used to determine equivalent parameters:
    Apply a reduced voltage to the primary, and adjust it such that rated secondary current flows in the secondaries.
    Let the primary voltage be $V_1$, primary current be $I_1$, and secondary circulating current be $I_2$.
    The impedance referred to the primary is $Z_{eq1} = V_1 / (I_2 \times N_1/N_2)$.
    The actual power supplied to the primary circuit is $V_1 \times I_1$. This power accounts for the core losses and copper losses.
    If we assume the primary current of 1.5A is the excitation current ($I_0$) for one transformer, this is a separate measurement.

    Let's consider the data provided for finding $Z_{eq1}$ and $R_{eq1}$:
    We are given $V_{primary} = 230$V (applied to primaries in parallel), and $I_{secondary\_circulating} = 5$A.
    The primary current $I_1$ (measured as 1.5A) is stated as the *total* primary current, which is approximately twice the no-load current of one transformer, i.e., $2 \times I_0$. Thus, $I_0 \approx 0.75$A.
    To find $Z_{eq1}$ and $R_{eq1}$, we usually look at the impedance that draws current proportional to the load current.
    If $V_1 = 230$V and the equivalent primary current causing the secondary circulating current is $I_2' = I_2 \times (N_1/N_2) = 5 \text{ A} \times 2.09 = 10.45$A.
    $Z_{eq1} = V_1 / I_2' = 230V / 10.45A \approx 21.91 \Omega$.
    The power supplied is $V_1 \times I_1 = 230 \times 1.5 = 345$W. This power supplies the core losses and copper losses at that load condition.
    If we assume the core losses are measured from an OC test ($P_0$) and copper losses are $I_2'^2 R_{eq1}$, then:
    $345 = P_0 + (10.45)^2 R_{eq1}$. We need $P_0$ for this.

    Let's assume the question means that when the primary voltage is adjusted to a certain value (let's say $V'_1$) to get $I_{2\_circulating} = 5$A (which is rated secondary current), the total primary current drawn is 1.5A. The power input is $V'_1 \times 1.5$A. This power is the sum of core losses and copper losses.
    Let's assume the test is performed by applying a reduced primary voltage $V'_1$ until $I_2 = 5A$. The primary current is $I_1 = 1.5$A. The power input is $P_{in} = V'_1 \times I_1$. This power accounts for core losses ($P_0$) and copper losses ($I_2'^2 R_{eq1}$).

    If we consider the Sumpner's test for parameter determination:
    Apply a voltage $V_1$ to the primary. Secondary circulating current is $I_{sec}$.
    Primary current $I_1 \approx 2I_0$.
    The impedance of the transformer referred to primary is $Z_{eq1} = \frac{V_1}{I_{sec} \times (N_1/N_2)}$.
    The power input $P_{in} = V_1 \times I_1$. This power is the sum of core losses and copper losses.
    $P_{in} = P_{core} + I_{sec}^2 R_{eq2}' = P_{core} + (I_{sec} \times \frac{N_1}{N_2})^2 R_{eq1}$.
    So, $V_1 \times I_1 = P_{core} + I_1'^2 R_{eq1}$, where $I_1'$ is the equivalent primary current for the secondary load.

    Given values: $V_1 = 230$V (applied to primaries), $I_1 = 1.5$A (total primary), $I_{sec} = 5$A.
    Turns ratio $N_1/N_2 \approx 2.09$.
    Equivalent primary current for load $I_1' = 5 \text{ A} \times 2.09 = 10.45$A.
    $Z_{eq1} = V_1 / I_1' = 230V / 10.45A \approx 21.91 \Omega$.

    To find $R_{eq1}$, we need the power input. The power input at this condition is $P_{in} = V_1 \times I_1 = 230 \times 1.5 = 345$W.
    This power comprises core losses and copper losses: $P_{in} = P_{core} + I_1'^2 R_{eq1}$.
    Assuming core losses are obtained from OC test ($P_0$), and assuming $P_0$ is negligible for this calculation or can be determined separately. If we assume the 1.5A primary current is *only* due to the load sharing, and separate excitation current is not included, then the calculation might be simplified.

    A common way to find $R_{eq1}$ in Sumpner's test is to treat the primary current $I_1$ as the sum of excitation current $I_0$ and the load-referred current $I_2'$. $I_1 = I_0 + I_2'$. This is vector addition. However, often magnitudes are used for approximation.

    Let's assume the question implies that when the primary voltage is adjusted to draw a primary current of 1.5A, the secondary circulating current is 5A. And the applied primary voltage is such that this condition is met.
    If $I_{sec}$ is rated secondary current (5A), then $I_1'$ (equivalent primary load current) = $10.45$A.
    If $I_1$ (total primary current) = 1.5A, this is very small compared to $I_1'$. This indicates that the primary current of 1.5A might be the excitation current ($I_0$) for one transformer, measured when the primary voltage is adjusted to give rated secondary voltage. This interpretation doesn't fit the context of power measurement.

    Let's assume the $V_1=230$V is the rated primary voltage. The primary current drawn is $I_1=1.5$A. The secondary circulating current is $I_{sec}=5$A.
    The power input is $P_{in} = V_1 \times I_1 \times \cos\phi_1$. If the primary current is not in phase, this is complex. For simplicity, assume unity PF or $I_1$ is the magnitude of the current.
    $P_{in} = 230 \times 1.5 = 345$ W.
    This power is the sum of core losses ($P_{core}$) and copper losses ($P_{cu}$).
    $P_{cu} = I_{sec}'^2 R_{eq1} = (10.45)^2 R_{eq1} = 109.20 R_{eq1}$.
    $345 = P_{core} + 109.20 R_{eq1}$.
    If we assume $P_{core}$ is negligible for this calculation (which is not ideal), then $345 = 109.20 R_{eq1} \implies R_{eq1} = 345 / 109.20 \approx 3.16 \Omega$.

    **Assuming the intent of the question is to find $R_{eq1}$ from $Z_{eq1}$ and power:**
    We found $Z_{eq1} \approx 21.91 \Omega$.
    $R_{eq1} = P_{in} / (I_1')^2$ if $P_{in}$ were purely copper loss and $I_1'$ was the current.
    $R_{eq1} = 345 \text{ W} / (10.45 \text{ A})^2 \approx 345 / 109.20 \approx 3.16 \Omega$.

**Q5.** Describe how to predetermine the voltage regulation of a transformer using Sumpner's Test.
**Answer:**
1.  Obtain the equivalent circuit parameters ($R_{eq1}$, $X_{eq1}$, $R_c$, $X_m$) from OC and SC tests.
2.  Calculate the induced EMFs $E_1$ and $E_2$.
3.  For each desired load condition (e.g., full load, half full load) and power factor (unity, 0.8 lag, 0.8 lead), calculate the secondary terminal voltage $V_{2,FL}$ using the formula:
    $E_2 = V_{2,FL} + I_2 (R_{eq2}' \cos\phi_2 \pm X_{eq2}' \sin\phi_2)$
    Rearrange to solve for $V_{2,FL}$.
4.  The no-load secondary voltage $V_{2,NL}$ is considered equal to $E_2$.
5.  Calculate Voltage Regulation: $VR = \frac{E_2 - V_{2,FL}}{V_{2,FL}} \times 100\%$.

### 8. Important Points to Remember

*   Sumpner's test requires **two identical transformers**.
*   The primary windings are connected in **parallel** to the AC supply.
*   The secondary windings are connected in **series opposition**.
*   A **reduced AC voltage** is applied to the primary, and a **DC excitation** is used in the secondary circuit.
*   The circulating current in the secondaries is adjusted to the **rated secondary current**.
*   The primary current measured is significantly lower than the sum of the rated primary currents of the two transformers.
*   Sumpner's test is primarily used to determine **efficiency and voltage regulation** without supplying the full power.
*   OC and SC test results are often used in conjunction with Sumpner's test for accurate predetermination of parameters and performance.
*   Polarity of the transformers must be correctly matched for the series opposition connection.

### 9. Relation to Course Outcomes

This module directly supports **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**. Sumpner's test is a sophisticated load test that allows for the examination of transformer performance under various load and power factor conditions by simulating a load. The knowledge gained here is foundational for understanding transformer behavior and efficiency.
