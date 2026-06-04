---
title: "Separation of losses in a single-phase transformer (CO4)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 12: Separation of losses in a single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360d4"
status: "completed"
scrapedAt: "2026-05-23T16:15:36.088Z"
---
# DC Machines & Transformers Lab: Module 12 - Separation of Losses in a Single-Phase Transformer (CO4)

## **Introduction**

This module focuses on understanding and quantifying the various losses that occur in a single-phase transformer. By separating these losses, we can accurately determine the transformer's efficiency under different loading conditions and identify areas for improvement in its design and operation. This aligns directly with **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**, as understanding losses is crucial for evaluating transformer performance.

## **1. What is a Single-Phase Transformer?**

A single-phase transformer is a static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It operates on the principle of mutual induction and is used to step up or step down AC voltages.

*   **Key Components:**
    *   **Core:** Made of laminated silicon steel to minimize eddy current losses and hysteresis losses. Provides a path for magnetic flux.
    *   **Primary Winding:** Connected to the input AC supply.
    *   **Secondary Winding:** Connected to the load, where the output voltage is obtained.
    *   **Insulation:** To prevent short circuits between windings and between windings and the core.

## **2. Transformer Losses**

Transformer losses are the difference between the power input and the power output. These losses convert electrical energy into heat, reducing the overall efficiency of the transformer. For a single-phase transformer, the main losses are categorized as follows:

### **2.1. Core Losses (Iron Losses)**

These losses occur in the transformer core due to the alternating magnetic flux. They are independent of the load current but depend on the applied voltage and frequency.

*   **Hysteresis Loss ($P_h$):**
    *   **Definition:** The energy lost due to the repeated magnetization and demagnetization of the core material as the alternating flux cycles.
    *   **Dependence:** Proportional to the frequency ($f$) and the flux density ($B_m$) raised to a power (Steinmetz's formula: $P_h = k_h f B_m^x$, where $k_h$ and $x$ are constants for the core material).
    *   **Reduction:** Using silicon steel with a lower hysteresis loop area and keeping the flux density within design limits.

*   **Eddy Current Loss ($P_e$):**
    *   **Definition:** The power dissipated as heat due to circulating currents induced in the core material by the changing magnetic flux.
    *   **Dependence:** Proportional to the square of the flux density ($B_m^2$), the square of the frequency ($f^2$), and the thickness of the laminations ($t^2$). ($P_e = k_e f^2 B_m^2 t^2$, where $k_e$ is a constant).
    *   **Reduction:** Laminating the core with thin sheets (typically 0.35mm to 0.5mm thick) insulated from each other by a thin layer of varnish or oxide. This increases the resistance to eddy current flow.

*   **Total Core Loss ($P_{core}$):**
    *   $P_{core} = P_h + P_e$
    *   For practical purposes, core loss is often assumed to be constant at rated voltage and frequency.

**Reference:**
*   **Bimbhra, P.S. (2021).** Chapter 9: Single-Phase Transformers, Section 9.11 Losses in Transformer.
*   **Kothari, D. P., & Nagrath, I. J. (2017).** Chapter 6: Single-Phase Transformers, Section 6.10 Losses in a Transformer.

### **2.2. Copper Losses (Winding Losses or $I^2R$ Losses)**

These losses occur in the windings (primary and secondary) due to the flow of current through their resistance. They are dependent on the square of the load current.

*   **Definition:** The power dissipated as heat in the resistance of the primary and secondary windings.
*   **Formula:** $P_{cu} = I_1^2 R_1 + I_2^2 R_2$, where $I_1$ and $I_2$ are the primary and secondary currents, and $R_1$ and $R_2$ are the corresponding winding resistances.
*   **Dependence:** Proportional to the square of the current flowing through the windings. Therefore, copper losses vary with the load.
*   **Reduction:** Using conductors with lower resistance (e.g., thicker wires, copper instead of aluminum) and minimizing the length of the windings.

**Important Point to Remember:** Copper losses are load-dependent. If the load is $x$ times the rated load, the copper losses are approximately $x^2$ times the full-load copper losses.

## **3. Separation of Losses: Experimental Procedure**

The separation of losses is typically performed using two specific tests on a single-phase transformer:

1.  **Open-Circuit (No-Load) Test:** This test is used to determine the core losses of the transformer.
2.  **Short-Circuit Test:** This test is used to determine the copper losses of the transformer.

### **3.1. Open-Circuit (No-Load) Test**

*   **Objective:** To determine the core losses ($P_{core}$) and the excitation parameters (magnetizing reactance $X_m$ and core loss resistance $R_c$) of the transformer.
*   **Connections:**
    *   The low-voltage (LV) side is usually excited at the rated voltage and frequency.
    *   The high-voltage (HV) side is kept open-circuited.
    *   An AC voltmeter, an AC ammeter, and a wattmeter are connected to the LV side.
*   **Procedure:**
    1.  Connect the transformer as shown in the circuit diagram (LV side excited, HV side open).
    2.  Apply a variable AC voltage to the LV winding.
    3.  Gradually increase the voltage from zero to the rated voltage of the LV side.
    4.  When the voltage reaches the rated value, record the readings of the voltmeter ($V_{NL}$), ammeter ($I_{NL}$), and wattmeter ($P_{NL}$).
    5.  The ammeter reading ($I_{NL}$) will be very small, representing the excitation current.

*   **Circuit Diagram (Conceptual):**

    ```
          AC Supply (Variable)
                |
               ---
               | | Wattmeter (W)
               ---
                |
               ---
               | | Ammeter (A)
               ---
                |
        +-------+-------+
        |       |       |
      -----   -----   -----
      -----   -----   -----  LV Winding
        |       |       |
        +-------+-------+
             |       |
          Voltmeter-----
             (V)     |
                     |
              Open Circuit (HV Side)
    ```

*   **Calculations:**
    *   On no-load, the secondary current is practically zero, so the copper losses in the windings are negligible.
    *   Therefore, the wattmeter reading $P_{NL}$ directly represents the core losses.
    *   $P_{core} = P_{NL}$ (at rated voltage and frequency).
    *   The excitation current $I_{NL}$ is the sum of the magnetizing current ($I_m$) and the core loss current ($I_c$).
    *   $I_c = \frac{P_{NL}}{V_{NL}}$ (This is the current component responsible for core losses).
    *   $I_m = \sqrt{I_{NL}^2 - I_c^2}$ (This is the magnetizing current component).
    *   The equivalent circuit parameters for the parallel branch can be calculated as:
        *   Core loss resistance, $R_c = \frac{V_{NL}^2}{P_{NL}}$
        *   Magnetizing reactance, $X_m = \frac{V_{NL}}{I_m}$

**Example:**
Suppose in a no-load test on the LV side (rated 230V), the readings are:
$V_{NL} = 230 \text{ V}$
$I_{NL} = 0.05 \text{ A}$
$P_{NL} = 30 \text{ W}$

Then, the core loss is $P_{core} = P_{NL} = 30 \text{ W}$.
$I_c = \frac{30}{230} \approx 0.13 \text{ A}$
$I_m = \sqrt{(0.05)^2 - (0.13)^2} = \sqrt{0.0025 - 0.0169}$ (This shows a calculation error or an issue with assumptions when $I_{NL}$ is extremely small, often the approximation $I_{NL} \approx I_m$ is made if $I_c$ is negligible. However, in this example, $I_c$ is calculated from power, let's re-evaluate).

**Correction for Example:**
Let's use typical values where $I_{NL}$ is small but consistent.
$V_{NL} = 230 \text{ V}$
$I_{NL} = 0.05 \text{ A}$
$P_{NL} = 10 \text{ W}$

$P_{core} = P_{NL} = 10 \text{ W}$
$I_c = \frac{P_{NL}}{V_{NL}} = \frac{10}{230} \approx 0.0435 \text{ A}$
$I_m = \sqrt{I_{NL}^2 - I_c^2} = \sqrt{(0.05)^2 - (0.0435)^2} = \sqrt{0.0025 - 0.00189} \approx \sqrt{0.00061} \approx 0.0247 \text{ A}$
$R_c = \frac{V_{NL}^2}{P_{NL}} = \frac{230^2}{10} = \frac{52900}{10} = 5290 \Omega$
$X_m = \frac{V_{NL}}{I_m} = \frac{230}{0.0247} \approx 9311.7 \Omega$

**Reference:**
*   **Bimbhra, P.S. (2021).** Chapter 9: Single-Phase Transformers, Section 9.13 Determination of Equivalent Circuit Parameters, Open-Circuit Test.
*   **Kothari, D. P., & Nagrath, I. J. (2017).** Chapter 6: Single-Phase Transformers, Section 6.12.1 No-Load Test.

### **3.2. Short-Circuit Test**

*   **Objective:** To determine the copper losses ($I^2R$ losses) and the series parameters (equivalent resistance $R_{eq}$ and equivalent leakage reactance $X_{eq}$) of the transformer.
*   **Connections:**
    *   The HV side is usually short-circuited.
    *   The LV side is supplied with a variable voltage from a variac.
    *   A low-range AC voltmeter, a low-range AC ammeter, and a wattmeter are connected to the LV side.
    *   The HV winding is shorted using a thick copper bar.
*   **Procedure:**
    1.  Connect the transformer as shown in the circuit diagram (HV side shorted, LV side excited).
    2.  Keep the variac output at zero voltage.
    3.  Gradually increase the voltage applied to the LV winding until the ammeter reads the rated current of the LV winding.
    4.  At this point, the current in the HV winding will also be its rated current due to the inverse voltage ratio.
    5.  Record the readings of the voltmeter ($V_{SC}$), ammeter ($I_{SC}$), and wattmeter ($P_{SC}$).
    6.  The applied voltage ($V_{SC}$) will be a small fraction of the rated voltage.

*   **Circuit Diagram (Conceptual):**

    ```
          AC Supply (Variable)
                |
               ---
               | | Wattmeter (W)
               ---
                |
               ---
               | | Ammeter (A)
               ---
                |
        +-------+-------+
        |       |       |
      -----   -----   -----
      -----   -----   -----  LV Winding
        |       |       |
        +-------+-------+
             |       |
          Voltmeter-----
             (V)     |
                     |
              Short Circuit (HV Side)
                 [Shorting Bar]
    ```

*   **Calculations:**
    *   On short-circuit, the applied voltage is very low, so the flux in the core is negligible. Consequently, the core losses ($P_{core}$) are practically zero.
    *   The wattmeter reading $P_{SC}$ therefore represents the total copper losses in the windings at rated current.
    *   $P_{cu} = P_{SC}$ (at rated current).
    *   The equivalent resistance referred to the LV side, $R_{eq} = \frac{P_{SC}}{I_{SC}^2}$.
    *   The equivalent impedance referred to the LV side, $Z_{eq} = \frac{V_{SC}}{I_{SC}}$.
    *   The equivalent leakage reactance referred to the LV side, $X_{eq} = \sqrt{Z_{eq}^2 - R_{eq}^2}$.

**Example:**
Suppose in a short-circuit test on the LV side (rated 230V, rated current 5A), the readings are:
$V_{SC} = 15 \text{ V}$
$I_{SC} = 5 \text{ A}$
$P_{SC} = 60 \text{ W}$

Then, the full-load copper loss is $P_{cu} = P_{SC} = 60 \text{ W}$.
$R_{eq} = \frac{P_{SC}}{I_{SC}^2} = \frac{60}{5^2} = \frac{60}{25} = 2.4 \Omega$
$Z_{eq} = \frac{V_{SC}}{I_{SC}} = \frac{15}{5} = 3.0 \Omega$
$X_{eq} = \sqrt{Z_{eq}^2 - R_{eq}^2} = \sqrt{3.0^2 - 2.4^2} = \sqrt{9 - 5.76} = \sqrt{3.24} = 1.8 \Omega$

**Reference:**
*   **Bimbhra, P.S. (2021).** Chapter 9: Single-Phase Transformers, Section 9.13 Determination of Equivalent Circuit Parameters, Short-Circuit Test.
*   **Kothari, D. P., & Nagrath, I. J. (2017).** Chapter 6: Single-Phase Transformers, Section 6.12.2 Short-Circuit Test.

## **4. Calculating Losses at Any Load**

Once the core loss ($P_{core}$) and full-load copper loss ($P_{cu,FL}$) are determined from the open-circuit and short-circuit tests, respectively, the losses at any load can be calculated.

Let the load be 'k' times the full load. This means the load current is $k \times I_{FL}$.

*   **Copper Losses at Load 'k':**
    *   $P_{cu,k} = k^2 \times P_{cu,FL}$
    *   This is because copper losses are proportional to the square of the current.

*   **Core Losses at Load 'k':**
    *   $P_{core,k} = P_{core}$ (since core losses are independent of load).

*   **Total Losses at Load 'k':**
    *   $P_{total,k} = P_{core} + k^2 \times P_{cu,FL}$

**Example:**
From the previous examples:
$P_{core} = 10 \text{ W}$
$P_{cu,FL} = 60 \text{ W}$

Calculate losses at half load (k = 0.5).
$P_{cu,0.5} = (0.5)^2 \times 60 = 0.25 \times 60 = 15 \text{ W}$
$P_{core,0.5} = 10 \text{ W}$
$P_{total,0.5} = 10 + 15 = 25 \text{ W}$

Calculate losses at full load (k = 1).
$P_{cu,1} = 1^2 \times 60 = 60 \text{ W}$
$P_{core,1} = 10 \text{ W}$
$P_{total,1} = 10 + 60 = 70 \text{ W}$

## **5. Calculating Efficiency**

Efficiency ($\eta$) of a transformer is defined as the ratio of output power to input power, or as output power divided by (output power plus total losses).

*   **Formula 1 (using input power):** $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Output Power}}{\text{Output Power} + \text{Total Losses}}$
*   **Formula 2 (using output power):** $\eta = \frac{\text{Output Power}}{\text{Output Power} + P_{core} + P_{cu}}$

Let $V_2$ be the secondary voltage, $I_2$ be the secondary current, and $\cos \phi_2$ be the power factor of the load.

*   **Output Power ($P_{out}$):** $P_{out} = V_2 I_2 \cos \phi_2$

*   **Efficiency at a given load 'k':**
    *   $P_{out,k} = k \times V_{2,rated} \times I_{2,rated} \times \cos \phi_2$
    *   $P_{cu,k} = k^2 \times P_{cu,FL}$
    *   $\eta_k = \frac{P_{out,k}}{P_{out,k} + P_{core} + P_{cu,k}}$
    *   $\eta_k = \frac{k \times P_{rated,out}}{k \times P_{rated,out} + P_{core} + k^2 \times P_{cu,FL}}$

**Example (Continuing previous example):**
Transformer ratings: 1 kVA, 230V/115V. Assume the load is unity power factor (UPF).
$P_{rated,out} = 1000 \text{ W}$
$P_{core} = 10 \text{ W}$
$P_{cu,FL} = 60 \text{ W}$

*   **Efficiency at half load (k=0.5, UPF):**
    *   $P_{out,0.5} = 0.5 \times 1000 = 500 \text{ W}$
    *   $P_{cu,0.5} = (0.5)^2 \times 60 = 15 \text{ W}$
    *   $\eta_{0.5} = \frac{500}{500 + 10 + 15} = \frac{500}{525} \approx 0.9524$ or 95.24%

*   **Efficiency at full load (k=1, UPF):**
    *   $P_{out,1} = 1 \times 1000 = 1000 \text{ W}$
    *   $P_{cu,1} = 1^2 \times 60 = 60 \text{ W}$
    *   $\eta_1 = \frac{1000}{1000 + 10 + 60} = \frac{1000}{1070} \approx 0.9346$ or 93.46%

**Maximum Efficiency Condition:**
Maximum efficiency occurs when the variable losses (copper losses) are equal to the constant losses (core losses).
$P_{cu,k} = P_{core}$
$k^2 \times P_{cu,FL} = P_{core}$
$k_{max} = \sqrt{\frac{P_{core}}{P_{cu,FL}}}$

The value of 'k' at which maximum efficiency occurs indicates the fraction of full load at which the transformer operates most efficiently.

**Example:**
For the above transformer:
$k_{max} = \sqrt{\frac{10}{60}} = \sqrt{\frac{1}{6}} \approx 0.408$
This means the transformer will operate at its peak efficiency when loaded to approximately 40.8% of its full load capacity.

**Reference:**
*   **Bimbhra, P.S. (2021).** Chapter 9: Single-Phase Transformers, Section 9.14 Efficiency, Condition for Maximum Efficiency.
*   **Kothari, D. P., & Nagrath, I. J. (2017).** Chapter 6: Single-Phase Transformers, Section 6.13 Efficiency and Maximum Efficiency.

## **6. Relation to Course Outcomes**

This module directly addresses **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**. By performing the open-circuit and short-circuit tests, we are:

*   **Conducting load/no-load tests:** The open-circuit test is a no-load test, and the short-circuit test effectively simulates a full-load condition by maintaining rated current with minimal voltage.
*   **Examining performance:** Understanding the individual loss components (core and copper) allows us to quantify the transformer's efficiency at various loads. This is a key aspect of its performance evaluation. The ability to calculate losses at any load and determine the condition for maximum efficiency are critical performance metrics.

## **7. Key Points to Remember**

*   **Core Losses:** Constant at rated voltage and frequency. Determined by the Open-Circuit Test.
*   **Copper Losses:** Vary with the square of the load current. Determined by the Short-Circuit Test.
*   **Open-Circuit Test:** Performed on the LV side, HV side open. Measures core losses and excitation constants.
*   **Short-Circuit Test:** Performed on the LV side, HV side shorted. Measures copper losses and series impedance constants.
*   **Efficiency:** Maximum efficiency occurs when copper losses equal core losses.
*   **Loss Separation:** Essential for accurate performance assessment and efficiency calculations under different operating conditions.

## **8. Practice Questions**

1.  A single-phase transformer is tested with the following results:
    *   Open-circuit test (on LV side): $V_{oc} = 240$ V, $I_{oc} = 0.5$ A, $P_{oc} = 100$ W
    *   Short-circuit test (on LV side): $V_{sc} = 20$ V, $I_{sc} = 5$ A, $P_{sc} = 150$ W
    The transformer is rated at 10 kVA, 240 V / 120 V.
    Calculate:
    a) The core loss.
    b) The full-load copper loss.
    c) The efficiency at full load with a power factor of 0.8 lagging.
    d) The efficiency at half load with a power factor of 0.8 lagging.
    e) The load at which maximum efficiency occurs.

2.  Explain why the open-circuit test is usually performed on the high-voltage side and the short-circuit test on the low-voltage side of a single-phase transformer. (Though standard practice often excites the LV side for OC and SC tests for convenience with lab equipment, the principle of minimizing current and voltage respectively holds. For answering based on common lab procedures, the description in the notes is valid).

3.  How do laminations in the transformer core help in reducing losses? Which type of loss is primarily affected by lamination?

---

## **Answers to Practice Questions**

**1. Calculations:**

*   **Transformer Ratings:** 10 kVA, 240 V / 120 V.
    *   Rated primary voltage ($V_{1,rated}$) = 240 V
    *   Rated secondary voltage ($V_{2,rated}$) = 120 V
    *   Rated apparent power ($S_{rated}$) = 10 kVA = 10000 VA
    *   Rated primary current ($I_{1,rated}$) = $10000 / 240 \approx 41.67$ A
    *   Rated secondary current ($I_{2,rated}$) = $10000 / 120 = 83.33$ A
    *   The tests are performed on the LV side (240V side). So $V_{LV} = 240$ V, $I_{LV,rated} = 41.67$ A.
    *   However, the short circuit test is performed at rated current of the side it is connected to. So $I_{sc} = 41.67$ A for the LV side. The problem statement gives $I_{sc} = 5$ A, which is likely a typo or a smaller test transformer. Let's assume the ratings are for the transformer being tested with the given OC/SC values. If the SC test is on the LV side at rated current, then $I_{sc}$ should be 41.67 A.

    Let's assume the transformer tested is rated such that the LV side is 240V and rated current is 5A, and the HV side is 120V. This would be an unusual rating (e.g., 10kVA, 120V/240V, with LV side being 120V). The problem description implies the tests are conducted on the LV side. Let's assume for the sake of calculation that the rated current for the side where the SC test is performed is 5A. Let's re-evaluate the ratings based on test values being typical for a smaller transformer.
    Assume the OC test is on the primary (rated voltage side) and SC test is on the primary side as well.
    Let's use the standard convention: OC test on LV side, SC test on HV side for determining parameters, or both on the same side. The notes imply both tests are performed on the same side (LV).

    Let's proceed with the given values, assuming the tests were conducted on the LV side and the rated LV current is 5A. This implies the transformer is not 10kVA.
    Let's re-interpret the problem as:
    A single-phase transformer is tested, and the readings for the **low voltage side (LV)** are:
    *   Open-circuit test: $V_{NL} = 240$ V, $I_{NL} = 0.5$ A, $P_{NL} = 100$ W
    *   Short-circuit test: $V_{SC} = 20$ V, $I_{SC} = 5$ A, $P_{SC} = 150$ W
    If the transformer is rated 10 kVA, then the LV side voltage could be 240V and rated current $I_{rated\_LV} = 10000/240 = 41.67$ A. The SC test current being 5A is inconsistent with a 10kVA rating.

    **Assuming the provided OC/SC test values are correct and are for the LV side for a transformer of *unknown* kVA rating, but the efficiency is to be calculated for a 10 kVA transformer with LV side rated at 240V and a *hypothetical* rated current of 5A (which is inconsistent):**

    Let's ignore the 10kVA rating for now and use the test values to find parameters, then apply to a 10kVA scenario where the rated current of the LV side is 41.67A and the parameters derived from the test are scaled appropriately or used as is if the transformer in the test has similar parameter ratios. This is problematic.

    **Let's assume the question intends to provide parameters for a transformer, and then ask for efficiency of a 10kVA transformer using those parameters as representative.**

    **Let's re-assume the test is on the LV side of a 10kVA, 240V/120V transformer.**
    *   LV side rating: 240V, $I_{LV,rated} = 10000/240 = 41.67$ A.
    *   OC test on LV side (240V): $V_{NL} = 240$ V, $I_{NL} = 0.5$ A, $P_{NL} = 100$ W.
    *   SC test on LV side (at rated LV current): $V_{SC} = 20$ V, $I_{SC} = 41.67$ A, $P_{SC} = 150$ W (This is a more consistent assumption for a 10kVA transformer if the SC test is conducted at rated LV current).

    Let's recalculate using this assumption.

    a) **Core loss ($P_{core}$):**
       From OC test, $P_{core} = P_{NL} = 100$ W.

    b) **Full-load copper loss ($P_{cu,FL}$):**
       From SC test (assuming $I_{SC}$ is the rated LV current, 41.67 A):
       $P_{cu,FL} = P_{SC} = 150$ W.

    c) **Efficiency at full load (k=1), PF = 0.8 lagging:**
       *   Output Power ($P_{out}$) = $S_{rated} \times \cos \phi = 10000 \text{ VA} \times 0.8 = 8000$ W.
       *   Copper Losses ($P_{cu,1}$) = $1^2 \times P_{cu,FL} = 1 \times 150 = 150$ W.
       *   Total Losses ($P_{total,1}$) = $P_{core} + P_{cu,1} = 100 + 150 = 250$ W.
       *   Efficiency ($\eta_1$) = $\frac{P_{out}}{P_{out} + P_{total,1}} = \frac{8000}{8000 + 250} = \frac{8000}{8250} \approx 0.9697$ or **96.97%**.

    d) **Efficiency at half load (k=0.5), PF = 0.8 lagging:**
       *   Output Power ($P_{out,0.5}$) = $0.5 \times P_{out} = 0.5 \times 8000 = 4000$ W.
       *   Copper Losses ($P_{cu,0.5}$) = $(0.5)^2 \times P_{cu,FL} = 0.25 \times 150 = 37.5$ W.
       *   Total Losses ($P_{total,0.5}$) = $P_{core} + P_{cu,0.5} = 100 + 37.5 = 137.5$ W.
       *   Efficiency ($\eta_{0.5}$) = $\frac{P_{out,0.5}}{P_{out,0.5} + P_{total,0.5}} = \frac{4000}{4000 + 137.5} = \frac{4000}{4137.5} \approx 0.9668$ or **96.68%**.

    e) **Load at which maximum efficiency occurs:**
       *   $k_{max} = \sqrt{\frac{P_{core}}{P_{cu,FL}}} = \sqrt{\frac{100}{150}} = \sqrt{\frac{2}{3}} \approx 0.8165$
       *   Maximum efficiency occurs at approximately **0.8165 times the full load**.
       *   This corresponds to a load of $0.8165 \times 10 \text{ kVA} = 8.165 \text{ kVA}$.

    ***If the SC test current was indeed 5A as stated in the question, and this 5A represents the rated current of the LV side:***
    Then the transformer rating is $10 \text{ kVA}$ is inconsistent with $V_{LV}=240$V and $I_{rated\_LV}=5$A (which would be only 1.2kVA). Let's assume the ratings are $1.2 \text{ kVA}$, $240$V/$120$V.

    Let's proceed with the first interpretation (10kVA, 240V/120V, rated LV current 41.67A, and SC test values are correctly stated as $V_{SC}=20$V, $I_{SC}=41.67$A, $P_{SC}=150$W). The OC test values are also consistent.

    **Answers:**
    a) Core loss = 100 W
    b) Full-load copper loss = 150 W
    c) Efficiency at full load (PF=0.8 lagging) = 96.97%
    d) Efficiency at half load (PF=0.8 lagging) = 96.68%
    e) Load for maximum efficiency = 0.8165 kVA (or 8.165 kVA)

2.  **Reason for Test Side Selection:**
    *   **Open-Circuit Test:** Performed to measure core losses, which depend on the applied voltage and are present even at no load. To minimize the magnetizing current (which is small and leads to a small power factor angle), the test is usually performed on the **low-voltage (LV) side**. Exciting the LV side requires a lower voltage from the supply and the leakage impedance drop is also small. The primary purpose is to measure voltage and power accurately, and the excitation circuit parameters (Rc and Xm) are determined.
    *   **Short-Circuit Test:** Performed to measure copper losses, which are proportional to the square of the current. To keep the current at rated value with a small applied voltage (to minimize core losses which are negligible at low flux densities), the test is usually performed on the **high-voltage (HV) side**, shorting the LV side. This allows the use of a low-range ammeter and voltmeter on the HV side, and the applied voltage is low and manageable. If performed on the LV side, the voltage required to drive rated current into the shorted HV side would be much higher.

    *Note: The notes provided stated tests were done on the LV side. This is common in lab settings for convenience if appropriate low-range meters are available for the LV side. The principle of minimizing the other loss component remains the key.*

3.  **Effect of Laminations:**
    Laminations in the transformer core are thin sheets of silicon steel insulated from each other by a thin layer of varnish or oxide. They are used to reduce **eddy current losses ($P_e$)**.
    *   **How they reduce eddy current losses:** The changing magnetic flux induces EMFs in the core material. These EMFs cause circulating currents, known as eddy currents, to flow within the core. Eddy currents dissipate power as heat ($I^2R$ losses). By laminating the core, the path for eddy currents is broken into very thin, resistive sections. This significantly increases the total resistance to the flow of eddy currents, thereby reducing their magnitude and consequently the eddy current losses.
    *   **Primary affected loss:** Eddy current loss. Hysteresis loss is reduced by the choice of core material (e.g., silicon steel) but is not directly affected by lamination itself.
