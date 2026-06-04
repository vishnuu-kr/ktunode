---
title: "Plot the efficiency curves while DC machine is acting as generator and motor"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 6: Swinburne’s test on a DC shunt machine (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360bd"
status: "completed"
scrapedAt: "2026-05-23T16:15:23.093Z"
---
# DC Machines & Transformers Lab: Module 6 - Swinburne's Test on a DC Shunt Machine

## 6.1 Introduction to Swinburne's Test

Swinburne's test is a **no-load test** performed on a DC shunt machine (acting as either a motor or a generator). It's an **indirect method** for determining the efficiency and losses of the machine without the need to load it directly. This is particularly advantageous when dealing with machines of high power rating, where loading them might be impractical or costly.

The fundamental principle behind Swinburne's test is to assume that the **losses that are constant under varying load conditions remain the same** when the machine is operating as a motor or a generator.

### 6.1.1 Key Concepts and Definitions

*   **DC Shunt Machine:** A DC machine where the field winding is connected in parallel (shunt) with the armature winding.
*   **No-Load Test:** A test conducted on an electrical machine when it is not connected to any external load.
*   **Efficiency ($\eta$)**: The ratio of output power to input power.
    *   For a motor: $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Input Power} - \text{Losses}}{\text{Input Power}}$
    *   For a generator: $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Output Power}}{\text{Output Power} + \text{Losses}}$
*   **Losses in a DC Machine:** These are broadly categorized into:
    *   **Constant Losses (Fixed Losses):** These losses are independent of the load and primarily consist of:
        *   **Iron Losses ($P_i$)**: Hysteresis and eddy current losses in the armature core due to the alternating magnetic flux.
        *   **Mechanical Losses ($P_m$)**: Friction and windage losses due to the rotation of the armature.
    *   **Variable Losses (Load-Dependent Losses):** These losses vary with the load and are primarily:
        *   **Armature Copper Losses ($I_a^2 R_a$)**: $I_a$ is the armature current and $R_a$ is the armature resistance.
        *   **Shunt Field Copper Losses ($I_{sh}^2 R_{sh}$ or $V \times I_{sh}$)**: $I_{sh}$ is the shunt field current and $R_{sh}$ is the shunt field resistance. These are typically considered constant if the supply voltage is constant.

### 6.1.2 Why Swinburne's Test is Suitable for Shunt Machines

Swinburne's test is particularly well-suited for DC shunt machines because:

*   **Constant Field Excitation:** In a shunt machine, the field winding is connected directly across the supply voltage. When operating as a motor, the supply voltage is constant, ensuring constant field excitation. When operating as a generator, if the field is separately excited at a constant voltage, the field flux remains essentially constant.
*   **Assumption of Constant Losses:** The no-load operation allows us to measure the iron and mechanical losses accurately. Since the field flux is constant, these losses are assumed to remain constant even when the machine is loaded. The shunt field copper loss is also constant if the supply voltage is constant.

## 6.2 Procedure for Swinburne's Test

The test is performed by running the DC shunt machine as a **motor** at no load at its rated speed.

**Circuit Diagram:**

*(Imagine a standard DC shunt motor circuit diagram with a variable DC supply, an ammeter in the main line, a voltmeter across the supply, an ammeter in the shunt field circuit, and a rheostat in the shunt field circuit for speed control. The armature is connected to the supply, and the field winding is also connected to the supply through the field rheostat.)*

**Steps:**

1.  **Connections:** Connect the DC shunt machine as a motor according to the circuit diagram. Ensure all measuring instruments (voltmeters, ammeters, wattmeters) are correctly connected.
2.  **Initial Setup:**
    *   Set the shunt field rheostat to its maximum resistance position to ensure low field current and thus a low starting speed.
    *   Ensure the armature is free to rotate.
3.  **Starting:** Switch on the DC supply. Gradually reduce the resistance of the field rheostat to bring the machine to its **rated speed**.
4.  **No-Load Operation:** Once the machine is running at rated speed, adjust the field rheostat and armature voltage (if possible) to achieve the **rated speed** without any load connected to the shaft.
5.  **Measurements:** Record the following readings:
    *   **Supply Voltage ($V$)**: Measured by a voltmeter across the main terminals.
    *   **Main Line Current ($I_L$)**: Measured by an ammeter in the main line.
    *   **Shunt Field Current ($I_{sh}$)**: Measured by an ammeter in the shunt field circuit.
    *   **Armature Current ($I_a$)**: This is calculated as $I_a = I_L - I_{sh}$.
    *   **Input Power ($P_{in}$)**: Measured by a wattmeter connected to measure the total power input to the machine. For a two-wire DC supply, the wattmeter measures $V \times I_L$.

## 6.3 Calculations from Swinburne's Test

From the recorded readings, we can calculate the various losses and then the efficiency at different load conditions.

### 6.3.1 Calculating Constant Losses

1.  **Shunt Field Copper Loss ($P_{sh}$):** This is calculated as $P_{sh} = V \times I_{sh}$. Since the machine is operating at rated voltage and the field current is measured, this loss can be directly calculated.
2.  **Iron and Mechanical Losses ($P_{i+m}$):**
    *   Input Power at no load: $P_{in} = V \times I_L$
    *   The input power at no load is primarily dissipated as shunt field copper loss and iron/mechanical losses.
    *   Therefore, $P_{in} = P_{sh} + P_{i+m}$
    *   Hence, $P_{i+m} = P_{in} - P_{sh} = (V \times I_L) - (V \times I_{sh})$.
    *   **Important Note:** These $P_{i+m}$ are the **constant losses** and are assumed to remain the same regardless of the load.

### 6.3.2 Calculating Efficiency at Different Loads

We can now calculate the efficiency of the DC shunt machine when acting as a motor and as a generator at various load currents.

**Assumptions:**

*   Armature resistance ($R_a$) and shunt field resistance ($R_{sh}$) are known or measured separately.
*   The constant losses ($P_{i+m}$) calculated from the no-load test remain constant.
*   The shunt field current ($I_{sh}$) and hence the shunt field copper loss ($P_{sh} = V \times I_{sh}$) remain constant (assuming constant supply voltage).

#### 6.3.2.1 Efficiency as a DC Shunt Motor

Let the armature current at any load be $I_a$.
*   **Input Power ($P_{in\_motor}$):** $P_{in\_motor} = V \times I_L$
    *   Where $I_L$ is the total line current drawn from the supply.
*   **Total Losses ($P_{losses\_motor}$):**
    *   $P_{losses\_motor} = P_{sh} + P_{i+m} + I_a^2 R_a$
    *   Here, $I_a$ is the armature current at the specific load condition. If the machine is operating as a motor, $I_a = I_L - I_{sh}$.
*   **Output Power ($P_{out\_motor}$):** $P_{out\_motor} = P_{in\_motor} - P_{losses\_motor}$
*   **Efficiency ($\eta_{motor}$):** $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} = \frac{P_{in\_motor} - P_{losses\_motor}}{P_{in\_motor}}$

**To plot the efficiency curve for a motor, we need to consider several load currents:**

1.  **Determine $R_a$:** This can be done by passing a known DC current through the armature (with the field winding open-circuited) and measuring the voltage drop across the armature. Or, it can be calculated from the no-load readings if we assume the brush drop is negligible. A more accurate method is to use a low-resistance ohmmeter.
2.  **Calculate $I_a$ for various loads:** For a given load current $I_L$, $I_a = I_L - I_{sh}$.
3.  **Calculate $P_{in\_motor}$:** $P_{in\_motor} = V \times I_L$.
4.  **Calculate $P_{losses\_motor}$:** $P_{losses\_motor} = P_{sh} + P_{i+m} + I_a^2 R_a$.
5.  **Calculate $P_{out\_motor}$:** $P_{out\_motor} = P_{in\_motor} - P_{losses\_motor}$.
6.  **Calculate $\eta_{motor}$:** $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} \times 100\%$.

#### 6.3.2.2 Efficiency as a DC Shunt Generator

Let the output current at any load be $I_L$.
*   **Output Power ($P_{out\_gen}$):** $P_{out\_gen} = V \times I_L$ (assuming the output voltage $V$ is constant, and $I_L$ is the load current).
*   **Armature Current ($I_a$):** For a shunt generator, the armature current is the sum of the load current and the shunt field current: $I_a = I_L + I_{sh}$.
*   **Total Losses ($P_{losses\_gen}$):**
    *   $P_{losses\_gen} = P_{sh} + P_{i+m} + I_a^2 R_a$
    *   Here, $P_{sh}$ and $P_{i+m}$ are the constant losses calculated from the no-load test.
*   **Input Power ($P_{in\_gen}$):** $P_{in\_gen} = P_{out\_gen} + P_{losses\_gen}$
*   **Efficiency ($\eta_{gen}$):** $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} = \frac{P_{out\_gen}}{P_{out\_gen} + P_{losses\_gen}}$

**To plot the efficiency curve for a generator, we need to consider several load currents:**

1.  **Determine $R_a$:** Same as for the motor.
2.  **Calculate $I_a$ for various loads:** For a given load current $I_L$, $I_a = I_L + I_{sh}$.
3.  **Calculate $P_{out\_gen}$:** $P_{out\_gen} = V \times I_L$.
4.  **Calculate $P_{losses\_gen}$:** $P_{losses\_gen} = P_{sh} + P_{i+m} + I_a^2 R_a$.
5.  **Calculate $P_{in\_gen}$:** $P_{in\_gen} = P_{out\_gen} + P_{losses\_gen}$.
6.  **Calculate $\eta_{gen}$:** $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} \times 100\%$.

## 6.4 Plotting the Efficiency Curves

Once the efficiencies for various load currents (expressed as a fraction of rated current or in Amperes) are calculated for both motor and generator modes, these values are plotted on a graph.

*   **X-axis:** Load current (either as output current for generator, or input current for motor, or as a percentage of rated current).
*   **Y-axis:** Efficiency ($\eta$) in percentage.

**Expected Shape of the Curves:**

*   **Motor Efficiency Curve:** Starts from zero at zero load, rises to a maximum value at a particular load (usually around 75-85% of full load), and then slightly decreases at heavier loads due to the increase in variable copper losses ($I_a^2 R_a$) dominating over the constant losses.
*   **Generator Efficiency Curve:** Similar to the motor curve, it starts from zero at zero load, rises to a maximum, and then slightly decreases at higher loads. The shape is generally very similar to the motor efficiency curve for a shunt machine.

## 6.5 Example Calculation

Let's consider a DC shunt machine with the following specifications and no-load test readings:

*   Rated Voltage: 230 V
*   Rated Power: 5 kW
*   Rated Speed: 1500 rpm
*   Armature Resistance ($R_a$): 0.5 $\Omega$
*   Shunt Field Resistance ($R_{sh}$): 230 $\Omega$

**No-Load Test Readings:**

*   Supply Voltage ($V$): 230 V
*   Main Line Current ($I_L$): 2.0 A
*   Shunt Field Current ($I_{sh}$): 0.8 A

**Calculations:**

1.  **Shunt Field Current:** $I_{sh} = 0.8$ A (given)
2.  **Shunt Field Resistance:** $R_{sh} = 230 \Omega$ (given)
3.  **Shunt Field Copper Loss:** $P_{sh} = V \times I_{sh} = 230 \text{ V} \times 0.8 \text{ A} = 184 \text{ W}$
4.  **Input Power at No Load:** $P_{in\_no-load} = V \times I_L = 230 \text{ V} \times 2.0 \text{ A} = 460 \text{ W}$
5.  **Constant Losses ($P_{i+m}$):** $P_{i+m} = P_{in\_no-load} - P_{sh} = 460 \text{ W} - 184 \text{ W} = 276 \text{ W}$

Now, let's calculate efficiency at, say, half the rated load.
Rated full load current for a 5 kW, 230 V shunt motor is approximately $I_{rated\_motor} = \frac{5000 \text{ W}}{230 \text{ V}} \approx 21.74$ A.
Rated full load current for a 5 kW, 230 V shunt generator is also approximately 21.74 A.

**Consider half load:**

*   **Motor Mode (half load):** Let the total input line current be $I_L = 0.5 \times 21.74 \text{ A} \approx 10.87$ A.
    *   Armature Current ($I_a$): $I_a = I_L - I_{sh} = 10.87 \text{ A} - 0.8 \text{ A} = 10.07$ A.
    *   Input Power ($P_{in\_motor}$): $P_{in\_motor} = V \times I_L = 230 \text{ V} \times 10.87 \text{ A} = 2500.1 \text{ W}$.
    *   Armature Copper Loss ($I_a^2 R_a$): $(10.07 \text{ A})^2 \times 0.5 \Omega \approx 50.7 \text{ W}$.
    *   Total Losses ($P_{losses\_motor}$): $P_{losses\_motor} = P_{sh} + P_{i+m} + I_a^2 R_a = 184 \text{ W} + 276 \text{ W} + 50.7 \text{ W} \approx 510.7 \text{ W}$.
    *   Output Power ($P_{out\_motor}$): $P_{out\_motor} = P_{in\_motor} - P_{losses\_motor} = 2500.1 \text{ W} - 510.7 \text{ W} \approx 1989.4 \text{ W}$.
    *   Efficiency ($\eta_{motor}$): $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} \times 100\% = \frac{1989.4 \text{ W}}{2500.1 \text{ W}} \times 100\% \approx 79.57\%$.

*   **Generator Mode (half load):** Let the output load current be $I_L = 0.5 \times 21.74 \text{ A} \approx 10.87$ A. Assume output voltage $V = 230$ V.
    *   Armature Current ($I_a$): $I_a = I_L + I_{sh} = 10.87 \text{ A} + 0.8 \text{ A} = 11.67$ A.
    *   Output Power ($P_{out\_gen}$): $P_{out\_gen} = V \times I_L = 230 \text{ V} \times 10.87 \text{ A} = 2500.1 \text{ W}$.
    *   Armature Copper Loss ($I_a^2 R_a$): $(11.67 \text{ A})^2 \times 0.5 \Omega \approx 68.1 \text{ W}$.
    *   Total Losses ($P_{losses\_gen}$): $P_{losses\_gen} = P_{sh} + P_{i+m} + I_a^2 R_a = 184 \text{ W} + 276 \text{ W} + 68.1 \text{ W} \approx 528.1 \text{ W}$.
    *   Input Power ($P_{in\_gen}$): $P_{in\_gen} = P_{out\_gen} + P_{losses\_gen} = 2500.1 \text{ W} + 528.1 \text{ W} = 3028.2 \text{ W}$.
    *   Efficiency ($\eta_{gen}$): $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} \times 100\% = \frac{2500.1 \text{ W}}{3028.2 \text{ W}} \times 100\% \approx 82.56\%$.

**Observation:** Notice that the efficiency as a generator is slightly higher than as a motor at the same load current. This is because the armature current $I_a$ is slightly higher in the generator mode ($I_L + I_{sh}$) compared to the motor mode ($I_L - I_{sh}$), leading to slightly higher copper losses. However, the output power is the same, and the input power for the generator is the output power plus losses.

## 6.6 Aligning with Course Outcomes (COs)

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   This module contributes to CO1 by allowing the calculation of generator efficiency. Although Swinburne's test is a no-load test on the machine itself, the calculated losses are then applied to determine performance under load conditions for both motor and generator modes. Plotting efficiency curves is a direct analysis of generator performance.

*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    *   This module specifically focuses on DC shunt motors (and generators), and plotting the efficiency curve is a crucial performance characteristic.

*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**
    *   This is the primary objective of Swinburne's test. By conducting a no-load test, we directly investigate and quantify the constant losses (iron and mechanical) and then use these to determine efficiency under various load conditions for both motor and generator operation.

*   **CO4 & CO5:** These COs relate to transformers and are not directly covered by this module on DC machines.

## 6.7 Practice Questions

1.  **What is the main advantage of conducting Swinburne's test compared to a direct loading test?**
    *   **Answer:** Swinburne's test is an indirect method that avoids the need for a full load on the machine, which is particularly advantageous for large machines where loading is expensive or impractical. It allows for the determination of efficiency without dissipating the full output power as heat.

2.  **In Swinburne's test, when the DC shunt machine is run as a motor, what losses are considered constant?**
    *   **Answer:** Iron losses (hysteresis and eddy current losses) and mechanical losses (friction and windage) are considered constant. The shunt field copper loss is also considered constant, assuming the supply voltage is constant.

3.  **A DC shunt machine gave the following readings during Swinburne's test (run as a motor):**
    *   Supply Voltage = 220 V
    *   Line Current = 3.5 A
    *   Shunt Field Current = 1.0 A
    *   Armature Resistance ($R_a$) = 0.3 $\Omega$
    *   Shunt Field Resistance ($R_{sh}$) = 220 $\Omega$

    Calculate the efficiency of the machine when operating as a motor at full load. Assume rated full load line current as 20 A.

    *   **Solution:**
        *   $V = 220$ V
        *   $I_{sh} = 1.0$ A
        *   $P_{sh} = V \times I_{sh} = 220 \text{ V} \times 1.0 \text{ A} = 220$ W
        *   $P_{in\_no-load} = V \times I_L = 220 \text{ V} \times 3.5 \text{ A} = 770$ W
        *   $P_{i+m} = P_{in\_no-load} - P_{sh} = 770 \text{ W} - 220 \text{ W} = 550$ W (Constant Losses)
        *   At Full Load Motor Operation:
            *   $I_L = 20$ A
            *   $I_a = I_L - I_{sh} = 20 \text{ A} - 1.0 \text{ A} = 19$ A
            *   $P_{in\_motor} = V \times I_L = 220 \text{ V} \times 20 \text{ A} = 4400$ W
            *   $I_a^2 R_a = (19 \text{ A})^2 \times 0.3 \Omega = 361 \times 0.3 = 108.3$ W
            *   $P_{losses\_motor} = P_{sh} + P_{i+m} + I_a^2 R_a = 220 \text{ W} + 550 \text{ W} + 108.3 \text{ W} = 878.3$ W
            *   $P_{out\_motor} = P_{in\_motor} - P_{losses\_motor} = 4400 \text{ W} - 878.3 \text{ W} = 3521.7$ W
            *   $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} \times 100\% = \frac{3521.7 \text{ W}}{4400 \text{ W}} \times 100\% \approx 80.04\%$

4.  **For the same machine as in Question 3, calculate the efficiency when operating as a generator at a load current of 20 A, assuming the terminal voltage is maintained at 220 V.**
    *   **Solution:**
        *   $V = 220$ V
        *   $I_L = 20$ A (Load current)
        *   $I_{sh} = 1.0$ A (Constant)
        *   $P_{sh} = 220$ W (Constant)
        *   $P_{i+m} = 550$ W (Constant)
        *   At Full Load Generator Operation:
            *   $I_a = I_L + I_{sh} = 20 \text{ A} + 1.0 \text{ A} = 21$ A
            *   $P_{out\_gen} = V \times I_L = 220 \text{ V} \times 20 \text{ A} = 4400$ W
            *   $I_a^2 R_a = (21 \text{ A})^2 \times 0.3 \Omega = 441 \times 0.3 = 132.3$ W
            *   $P_{losses\_gen} = P_{sh} + P_{i+m} + I_a^2 R_a = 220 \text{ W} + 550 \text{ W} + 132.3 \text{ W} = 902.3$ W
            *   $P_{in\_gen} = P_{out\_gen} + P_{losses\_gen} = 4400 \text{ W} + 902.3 \text{ W} = 5302.3$ W
            *   $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} \times 100\% = \frac{4400 \text{ W}}{5302.3 \text{ W}} \times 100\% \approx 82.98\%$

## 6.8 Important Points to Remember

*   Swinburne's test is a **no-load test** primarily for DC shunt machines.
*   It relies on the assumption that **constant losses (iron and mechanical) are independent of load.**
*   The machine is run as a **motor** at **rated speed** during the test.
*   **Armature resistance ($R_a$) is crucial** for calculating variable losses at different load conditions. Measure it accurately.
*   **Shunt field current ($I_{sh}$) and field copper loss ($P_{sh}$) are assumed constant** if the supply voltage is constant.
*   When calculating efficiency for a **generator**, the armature current is $I_a = I_L + I_{sh}$.
*   When calculating efficiency for a **motor**, the armature current is $I_a = I_L - I_{sh}$.
*   The efficiency curve typically peaks and then slightly falls due to the increasing impact of copper losses at higher loads.
*   The test allows for the prediction of performance over the entire load range without actually loading the machine heavily.
