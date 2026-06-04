---
title: "Separation of losses in a DC shunt motor (CO3)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 9: Separation of losses in a DC shunt motor (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c6"
status: "completed"
scrapedAt: "2026-05-23T16:15:27.722Z"
---
# DC Machines & Transformers Lab: Module 9 - Separation of Losses in a DC Shunt Motor

## Introduction

This module focuses on experimentally determining and separating the various losses occurring in a DC shunt motor. Understanding these losses is crucial for accurately predicting the motor's efficiency under different operating conditions and for optimizing its design. We will utilize the "swinburne's test" method, which is a no-load test, to achieve this objective. This experiment directly relates to **Course Outcome 3 (CO3)**: "Investigate the losses and efficiency in DC machines by conducting no-load tests" at a Knowledge Level of K3.

## Key Concepts and Definitions

### 1. Losses in a DC Shunt Motor

DC motors, like any electrical machine, are subject to several types of losses that convert electrical energy into heat. These losses reduce the overall efficiency of the motor. The primary losses in a DC shunt motor are:

*   **Copper Losses (Variable Losses):** These losses are directly proportional to the square of the armature current and the field current. They are generated due to the resistance of the windings.
    *   **Armature Copper Loss ($P_{cu,arm}$):** $I_a^2 R_a$, where $I_a$ is the armature current and $R_a$ is the armature resistance.
    *   **Shunt Field Copper Loss ($P_{cu,sh}$):** $I_{sh}^2 R_{sh}$ or $V^2 / R_{sh}$, where $I_{sh}$ is the shunt field current, $R_{sh}$ is the shunt field resistance, and $V$ is the supply voltage.
*   **Iron Losses (Constant Losses):** These losses are dependent on the flux density and the frequency of magnetization in the core. They are relatively constant irrespective of the load.
    *   **Hysteresis Loss ($P_h$):** Caused by the molecular friction within the iron core as it is repeatedly magnetized and demagnetized. It is proportional to the frequency of flux reversal and the area of the hysteresis loop.
    *   **Eddy Current Loss ($P_e$):** Caused by circulating currents induced in the iron core by the changing magnetic flux. These currents flow in paths within the core material, generating heat. $P_e$ is proportional to the square of the flux density and the square of the frequency.
    *   **Total Iron Loss ($P_i$) = $P_h + P_e$**
*   **Mechanical Losses:** These are due to friction and windage.
    *   **Friction Loss ($P_f$):** Occurs due to friction in bearings and brushes.
    *   **Windage Loss ($P_w$):** Occurs due to the resistance of the air to the rotation of the armature and fan.
    *   **Total Mechanical Loss ($P_m$) = $P_f + P_w$**

**Important Note:** In a DC shunt motor, the shunt field current ($I_{sh}$) is typically very small and almost constant because the field winding is connected across the constant supply voltage. Therefore, the shunt field copper loss ($P_{cu,sh}$) is also considered a constant loss.

### 2. Separation of Losses

The main challenge in determining the efficiency of a DC motor is to accurately measure the individual losses, especially the mechanical losses, which vary with speed. Swinburne's test provides an effective way to separate these losses.

### 3. Swinburne's Test

Swinburne's test is a no-load test performed on a DC shunt motor. The principle behind this test is that at no load, the armature current ($I_a$) is very small, and consequently, the armature copper loss ($I_a^2 R_a$) is negligible. Therefore, the total input power to the motor at no load is approximately equal to the sum of the iron losses and mechanical losses.

**Formulae used in Swinburne's Test:**

*   **Total Losses at No-Load:** $P_{no-load} = V_{supply} \times I_{no-load}$
*   **Shunt Field Copper Loss ($P_{cu,sh}$):** $P_{cu,sh} = V_{supply} \times I_{sh}$ (where $I_{sh}$ is the shunt field current, measured when the motor is connected to the supply but not driving any load).
*   **Constant Losses ($P_{const}$):** These are the losses that remain approximately constant under varying load conditions. In a DC shunt motor, these are primarily the iron losses and the shunt field copper loss.
    $P_{const} = P_{no-load} - P_{cu,arm,no-load}$
    Since $I_{a,no-load}$ is very small, $P_{cu,arm,no-load} = I_{a,no-load}^2 R_a \approx 0$.
    Therefore, $P_{const} \approx P_{no-round} - P_{cu,sh}$ (assuming $I_{a,no-load}$ is truly negligible).
    More accurately, $P_{const} = P_{no-load} - P_{cu,sh} - P_{cu,arm,no-load}$.
    As per the principle of Swinburne's test, at no load, the input power is essentially the sum of constant losses (iron losses + shunt field copper loss) and the small armature copper loss:
    $P_{in, no-load} = V_{supply} \times I_{no-load}$
    $P_{in, no-load} = P_{iron} + P_{mechanical} + P_{cu,arm, no-load} + P_{cu,sh}$
    Since $P_{cu,arm, no-load} = I_{a,no-load}^2 R_a$ is very small, we can approximate:
    $P_{in, no-load} \approx (P_{iron} + P_{cu,sh}) + P_{mechanical}$
    Let $P_{constant} = P_{iron} + P_{cu,sh}$.
    So, $P_{in, no-load} \approx P_{constant} + P_{mechanical}$.
    The shunt field current $I_{sh}$ is measured directly.
    $P_{cu,sh} = V_{supply} \times I_{sh}$.
    The total no-load input power is $P_{in,no-load} = V_{supply} \times I_{no-load}$.
    The armature current at no-load is $I_{a,no-load} = I_{no-load} - I_{sh}$.
    The armature copper loss at no-load is $P_{cu,arm,no-load} = I_{a,no-load}^2 R_a$.
    The sum of iron and mechanical losses is $P_{iron} + P_{mechanical} = P_{in, no-load} - P_{cu,sh} - P_{cu,arm, no-load}$.
    **Crucially, for Swinburne's Test, we assume that the iron losses and mechanical losses are constant and are together represented by the term ($P_{iron} + P_{mechanical}$), which is then approximated by the no-load input power minus the shunt field copper loss, neglecting the armature copper loss at no-load.**
    Therefore, **$P_{constant\_losses} \approx P_{iron} + P_{mechanical} \approx V_{supply} \times I_{no-load} - P_{cu,sh}$** (This is the core assumption for the separation).

*   **Efficiency at any Load ($P_{out}$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
    $P_{in} = P_{out} + Total Losses$
    $Total Losses = P_{cu,arm} + P_{cu,sh} + P_{iron} + P_{mechanical}$
    $Total Losses = I_a^2 R_a + P_{cu,sh} + P_{constant\_losses} - P_{cu,sh}$
    $Total Losses = I_a^2 R_a + P_{constant\_losses}$ (where $P_{constant\_losses} \approx P_{iron} + P_{mechanical}$)

    So, $P_{in} = P_{out} + I_a^2 R_a + P_{constant\_losses}$

    **Revised calculation of efficiency using separated losses:**
    The efficiency at any load current $I_L$ (for a shunt motor, $I_L$ is the line current) can be calculated as:
    $P_{in} = V_{supply} \times I_L$
    $I_a = I_L - I_{sh}$
    $P_{cu,arm} = I_a^2 R_a$
    $P_{cu,sh} = V_{supply} \times I_{sh}$ (This is already accounted for in $P_{constant\_losses}$ if calculated correctly)
    $P_{out} = P_{in} - (P_{cu,arm} + P_{constant\_losses})$
    $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{P_{in} - (P_{cu,arm} + P_{constant\_losses})}{P_{in}} \times 100\%$

    Alternatively, considering the motor is rated for a certain output power $P_{out\_rated}$:
    $P_{in} = P_{out\_rated} + P_{cu,arm} + P_{constant\_losses}$
    $\eta = \frac{P_{out\_rated}}{P_{out\_rated} + I_a^2 R_a + P_{constant\_losses}} \times 100\%$

## Experimental Procedure (Swinburne's Test)

**Objective:** To separate the losses in a DC shunt motor.

**Apparatus Required:**

1.  DC Shunt Motor (rated power, voltage, and speed)
2.  DC Shunt Generator (for loading, if required for other tests, but not strictly for Swinburne's test itself)
3.  Rheostat (for armature control, if available, or use of supply voltage variation)
4.  Rheostat (for field control)
5.  Voltmeter (for supply voltage and field voltage)
6.  Ammeter (for line current and field current)
7.  Wattmeter (to measure input power)
8.  Tachometer (to measure speed, optional but helpful for understanding)
9.  Connecting wires
10. Stop watch (optional, for measuring speed over time)

**Circuit Diagram:**

A typical circuit diagram for Swinburne's test involves connecting the DC shunt motor to a variable DC supply.
*   The Ammeter is connected in series with the supply line to measure the total line current ($I_L$).
*   The Voltmeter is connected across the supply to measure the supply voltage ($V_{supply}$).
*   The Wattmeter is connected to measure the total input power to the motor. The voltage coil of the wattmeter is connected across the supply, and the current coil is connected in series with the line.
*   A separate Ammeter is connected in series with the shunt field winding to measure the shunt field current ($I_{sh}$).
*   A rheostat is connected in series with the shunt field winding for controlling the field current and hence the speed (though for this specific test, it's set to rated speed).

```
      +-------+
      |       |
      |       | V (Voltmeter)
      |       |
      +-------+
      |
      |
  ----+------[ A (Ammeter) ]-------+-------+--------+
      |       |                   |       |        |
      |       |                   |       |        | W (Wattmeter - Current Coil)
      |       |                   |       |        |
  ----+------[ R (Field Rheostat)]--+-------+--------+-----> Shunt Field Winding
      |                               |                |
      |                               |                | V (Voltmeter - Voltage Coil)
      |                               |                |
      |                               |                |
      |                               |                |
      +-------------------------------+----------------+-----> Armature Winding
      |                               |
      |                               |
      DC Supply                       |
                                      |
                                      +-------> Shunt Field Current Ammeter (A_sh)
```

**Steps:**

1.  **Connections:** Connect the DC shunt motor to the DC supply through the ammeter, wattmeter, and field rheostat as per the circuit diagram. Ensure all connections are tight.
2.  **Field Adjustment:** Adjust the field rheostat to get the rated field current ($I_{sh}$) and hence the rated speed of the motor. Ensure the armature is not loaded.
3.  **No-Load Operation:** Switch on the DC supply and adjust the field rheostat to achieve the motor's rated speed (or a speed close to it).
4.  **Readings:** Once the motor is running steadily at the desired speed (no-load condition), take the following readings:
    *   Supply Voltage ($V_{supply}$)
    *   Line Current ($I_{no-load}$)
    *   Shunt Field Current ($I_{sh}$)
    *   Input Power ($P_{in, no-load}$) measured by the wattmeter.
5.  **Armature Resistance Measurement:** Measure the armature resistance ($R_a$) using an ohmmeter or by applying a small DC voltage and measuring the current. This is crucial for calculating armature copper loss.
6.  **Repeat (Optional):** Repeat the readings at a few different no-load speeds if required, but typically one set of readings at rated speed is sufficient for Swinburne's test.

**Calculations:**

1.  **Shunt Field Copper Loss ($P_{cu,sh}$):**
    $P_{cu,sh} = V_{supply} \times I_{sh}$
2.  **Armature Current at No-Load ($I_{a,no-load}$):**
    $I_{a,no-load} = I_{no-load} - I_{sh}$
3.  **Armature Copper Loss at No-Load ($P_{cu,arm,no-load}$):**
    $P_{cu,arm,no-load} = I_{a,no-load}^2 \times R_a$
4.  **Total Input Power at No-Load ($P_{in, no-load}$):**
    $P_{in, no-load} = V_{supply} \times I_{no-load}$ (This should be equal to the wattmeter reading if connected correctly)
5.  **Constant Losses ($P_{constant\_losses}$):** These are the sum of iron losses and mechanical losses.
    $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh} - P_{cu,arm,no-load}$
    *Note: If $P_{cu,arm,no-load}$ is very small (as expected), it can be neglected, and $P_{constant\_losses} \approx P_{in, no-load} - P_{cu,sh}$*
    **From P.S. Bimbhra (7th Ed.), page 142, Swinburne's test states that the losses at no-load are taken as constant losses. So, $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh}$ (neglecting armature copper loss at no load).**
    **From D.P. Kothari & I.J. Nagrath (5th Ed.), page 159, for Swinburne's test, the no-load input power is assumed to be the sum of constant losses (iron + friction + windage). So, $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh}$.**

6.  **Efficiency Calculation at Any Load:**
    Let's consider a specific load condition where the line current is $I_L$.
    *   Armature Current ($I_a$) = $I_L - I_{sh}$ (Assuming $I_{sh}$ remains constant at rated value, which is reasonable for a shunt motor operating near rated voltage)
    *   Armature Copper Loss ($P_{cu,arm}$) = $I_a^2 \times R_a$
    *   Total Losses ($P_{total\_losses}$) = $P_{cu,arm} + P_{constant\_losses}$
    *   Input Power ($P_{in}$) = $V_{supply} \times I_L$
    *   Output Power ($P_{out}$) = $P_{in} - P_{total\_losses}$
    *   Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}} \times 100\% = \frac{P_{in} - P_{total\_losses}}{P_{in}} \times 100\%$

**Example Calculation:**

Suppose a DC shunt motor has the following ratings: 220V, 5kW, 1500 rpm.
During Swinburne's test (no-load), the following readings are obtained:
*   $V_{supply} = 220$ V
*   $I_{no-load} = 2.5$ A
*   $I_{sh} = 0.5$ A
*   $P_{in, no-load} = 450$ W
*   Measured armature resistance, $R_a = 0.8$ $\Omega$

**Calculations:**

1.  $P_{cu,sh} = V_{supply} \times I_{sh} = 220 \times 0.5 = 110$ W
2.  $I_{a,no-load} = I_{no-load} - I_{sh} = 2.5 - 0.5 = 2.0$ A
3.  $P_{cu,arm,no-load} = I_{a,no-load}^2 \times R_a = (2.0)^2 \times 0.8 = 4 \times 0.8 = 3.2$ W
4.  $P_{in, no-load} = 450$ W (Wattmeter reading)
5.  $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh} - P_{cu,arm,no-load}$
    $P_{constant\_losses} = 450 - 110 - 3.2 = 336.8$ W
    *(Using the simplified approach as per textbooks: $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh} = 450 - 110 = 340$ W. We will use the more accurate value for our example).*

**Now, let's calculate the efficiency at full load (5 kW output).**
Rated output power $P_{out} = 5000$ W.
Assuming the motor is operating at rated voltage (220V) and rated speed (1500 rpm), the shunt field current $I_{sh}$ is approximately constant at 0.5 A.

*   Input power at rated output: To find $P_{in}$, we first need to estimate the armature current at full load.
    The total losses at full load are $P_{total\_losses} = P_{cu,arm} + P_{constant\_losses}$.
    Let $I_{a,FL}$ be the armature current at full load.
    $P_{cu,arm,FL} = I_{a,FL}^2 \times R_a = I_{a,FL}^2 \times 0.8$
    $P_{out} = P_{in} - P_{total\_losses}$
    $P_{out} = (V_{supply} \times I_{L,FL}) - (I_{a,FL}^2 R_a + P_{constant\_losses})$
    Since $I_{a,FL} = I_{L,FL} - I_{sh}$, we have $I_{L,FL} = I_{a,FL} + I_{sh} = I_{a,FL} + 0.5$.
    $5000 = (220 \times (I_{a,FL} + 0.5)) - (I_{a,FL}^2 \times 0.8 + 336.8)$
    $5000 = 220 I_{a,FL} + 110 - 0.8 I_{a,FL}^2 - 336.8$
    $0.8 I_{a,FL}^2 - 220 I_{a,FL} + 5000 - 110 + 336.8 = 0$
    $0.8 I_{a,FL}^2 - 220 I_{a,FL} + 5226.8 = 0$

    Using the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $I_{a,FL} = \frac{220 \pm \sqrt{(-220)^2 - 4 \times 0.8 \times 5226.8}}{2 \times 0.8}$
    $I_{a,FL} = \frac{220 \pm \sqrt{48400 - 16725.76}}{1.6}$
    $I_{a,FL} = \frac{220 \pm \sqrt{31674.24}}{1.6}$
    $I_{a,FL} = \frac{220 \pm 178.0}{1.6}$

    Two possible values for $I_{a,FL}$:
    $I_{a,FL1} = \frac{220 + 178.0}{1.6} = \frac{398}{1.6} = 248.75$ A (This is unrealistically high for a 5kW motor)
    $I_{a,FL2} = \frac{220 - 178.0}{1.6} = \frac{42}{1.6} = 26.25$ A

    So, $I_{a,FL} \approx 26.25$ A.
    Line current at full load, $I_{L,FL} = I_{a,FL} + I_{sh} = 26.25 + 0.5 = 26.75$ A.
    Input power at full load, $P_{in,FL} = V_{supply} \times I_{L,FL} = 220 \times 26.75 = 5885$ W.

    Armature Copper Loss at full load, $P_{cu,arm,FL} = I_{a,FL}^2 \times R_a = (26.25)^2 \times 0.8 = 689.0625 \times 0.8 = 551.25$ W.

    Total Losses at full load, $P_{total\_losses,FL} = P_{cu,arm,FL} + P_{constant\_losses} = 551.25 + 336.8 = 888.05$ W.

    Output Power $P_{out,FL} = P_{in,FL} - P_{total\_losses,FL} = 5885 - 888.05 = 4996.95$ W (close to rated 5000 W, due to approximations).

    Efficiency at full load, $\eta_{FL} = \frac{P_{out,FL}}{P_{in,FL}} \times 100\% = \frac{4996.95}{5885} \times 100\% \approx 84.91\%$

**Using the simplified constant losses ($P_{constant\_losses} = 340$ W):**

$P_{out} = (V_{supply} \times (I_{a,FL} + 0.5)) - (I_{a,FL}^2 \times 0.8 + 340)$
$5000 = 220 I_{a,FL} + 110 - 0.8 I_{a,FL}^2 - 340$
$0.8 I_{a,FL}^2 - 220 I_{a,FL} + 5000 - 110 + 340 = 0$
$0.8 I_{a,FL}^2 - 220 I_{a,FL} + 5230 = 0$

$I_{a,FL} = \frac{220 \pm \sqrt{(-220)^2 - 4 \times 0.8 \times 5230}}{2 \times 0.8}$
$I_{a,FL} = \frac{220 \pm \sqrt{48400 - 16736}}{1.6}$
$I_{a,FL} = \frac{220 \pm \sqrt{31664}}{1.6}$
$I_{a,FL} = \frac{220 \pm 177.94}{1.6}$

$I_{a,FL2} = \frac{220 - 177.94}{1.6} = \frac{42.06}{1.6} \approx 26.29$ A.
$I_{L,FL} = 26.29 + 0.5 = 26.79$ A.
$P_{in,FL} = 220 \times 26.79 = 5893.8$ W.
$P_{cu,arm,FL} = (26.29)^2 \times 0.8 \approx 552.2$ W.
$P_{total\_losses,FL} = 552.2 + 340 = 892.2$ W.
$P_{out,FL} = 5893.8 - 892.2 = 5001.6$ W.
$\eta_{FL} = \frac{5001.6}{5893.8} \times 100\% \approx 84.86\%$

The difference is minimal, highlighting the low armature copper loss at no-load.

## Practice Questions

1.  **Define the main types of losses in a DC shunt motor.**
    *   **Answer:** The main losses are copper losses (armature and field), iron losses (hysteresis and eddy current), and mechanical losses (friction and windage).

2.  **Explain the principle of Swinburne's test for separating losses in a DC shunt motor.**
    *   **Answer:** Swinburne's test is a no-load test where the motor is run at rated speed by adjusting the field excitation. At no load, the armature current is very small, making armature copper loss negligible. Thus, the total input power at no-load, after subtracting the shunt field copper loss, is considered to be the sum of iron losses and mechanical losses, which are assumed to be constant.

3.  **A DC shunt motor is tested using Swinburne's test. The following readings are obtained:**
    *   Supply Voltage ($V_{supply}$) = 230 V
    *   Line Current ($I_{no-load}$) = 3.0 A
    *   Shunt Field Current ($I_{sh}$) = 0.6 A
    *   Input Power ($P_{in, no-load}$) = 520 W
    *   Armature Resistance ($R_a$) = 0.5 $\Omega$

    **Calculate:**
    a) Shunt field copper loss.
    b) Armature copper loss at no-load.
    c) Constant losses (iron + mechanical).
    d) Efficiency of the motor when it delivers an output of 4 kW at rated voltage.
    *(Assume $I_{sh}$ remains constant at 0.6 A for the loaded condition.)*

    **Solution:**
    a) $P_{cu,sh} = V_{supply} \times I_{sh} = 230 \times 0.6 = 138$ W
    b) $I_{a,no-load} = I_{no-load} - I_{sh} = 3.0 - 0.6 = 2.4$ A
       $P_{cu,arm,no-load} = I_{a,no-load}^2 \times R_a = (2.4)^2 \times 0.5 = 5.76 \times 0.5 = 2.88$ W
    c) $P_{constant\_losses} = P_{in, no-load} - P_{cu,sh} - P_{cu,arm,no-load}$
       $P_{constant\_losses} = 520 - 138 - 2.88 = 379.12$ W
       *(Simplified: $P_{constant\_losses} = 520 - 138 = 382$ W)*

    d) For output power $P_{out} = 4000$ W:
       Let $I_{a,FL}$ be the armature current at this load.
       $I_{L,FL} = I_{a,FL} + I_{sh} = I_{a,FL} + 0.6$
       $P_{in,FL} = V_{supply} \times I_{L,FL} = 230 \times (I_{a,FL} + 0.6) = 230 I_{a,FL} + 138$
       $P_{cu,arm,FL} = I_{a,FL}^2 \times R_a = I_{a,FL}^2 \times 0.5 = 0.5 I_{a,FL}^2$
       $P_{out} = P_{in,FL} - (P_{cu,arm,FL} + P_{constant\_losses})$
       $4000 = (230 I_{a,FL} + 138) - (0.5 I_{a,FL}^2 + 379.12)$
       $4000 = 230 I_{a,FL} + 138 - 0.5 I_{a,FL}^2 - 379.12$
       $0.5 I_{a,FL}^2 - 230 I_{a,FL} + 4000 - 138 + 379.12 = 0$
       $0.5 I_{a,FL}^2 - 230 I_{a,FL} + 4241.12 = 0$

       $I_{a,FL} = \frac{230 \pm \sqrt{(-230)^2 - 4 \times 0.5 \times 4241.12}}{2 \times 0.5}$
       $I_{a,FL} = \frac{230 \pm \sqrt{52900 - 8482.24}}{1}$
       $I_{a,FL} = 230 \pm \sqrt{44417.76}$
       $I_{a,FL} = 230 \pm 210.75$

       $I_{a,FL1} = 230 + 210.75 = 440.75$ A (Unrealistic)
       $I_{a,FL2} = 230 - 210.75 = 19.25$ A

       So, $I_{a,FL} = 19.25$ A.
       $I_{L,FL} = 19.25 + 0.6 = 19.85$ A.
       $P_{in,FL} = 230 \times 19.85 = 4565.5$ W.
       $P_{cu,arm,FL} = (19.25)^2 \times 0.5 = 370.5625 \times 0.5 = 185.28$ W.
       $P_{total\_losses,FL} = 185.28 + 379.12 = 564.4$ W.
       $P_{out,FL} = P_{in,FL} - P_{total\_losses,FL} = 4565.5 - 564.4 = 4001.1$ W (close to 4000 W).

       $\eta = \frac{P_{out,FL}}{P_{in,FL}} \times 100\% = \frac{4001.1}{4565.5} \times 100\% \approx 87.64\%$

4.  **Why is Swinburne's test called a "}$no$-load" test for loss separation?**
    *   **Answer:** It is called a no-load test because the motor is not mechanically loaded during the test. The primary purpose of running it at no-load is to minimize the armature current, thereby making the armature copper loss negligible. This allows the remaining input power to represent the sum of constant losses (iron and mechanical).

## Important Points to Remember

*   **Swinburne's test is applicable only to DC shunt motors and compound motors operated as shunt motors**, where the field excitation is kept constant at no load to achieve rated speed. It is not suitable for series motors.
*   The assumption that armature copper loss at no-load is negligible is crucial. This is valid if the armature current is significantly smaller than the field current.
*   The constant losses ($P_{iron} + P_{mechanical}$) determined from this test are assumed to remain constant at all loads, which is a reasonable approximation for practical purposes, especially for the same speed. However, iron losses do depend on flux density, and mechanical losses depend on speed.
*   Accurate measurement of armature resistance ($R_a$) is vital for calculating armature copper losses at various load conditions.
*   Ensure the motor is run at its rated voltage and as close to its rated speed as possible during the no-load test.
*   The test requires a DC shunt motor connected to a variable DC supply, with appropriate measuring instruments.
