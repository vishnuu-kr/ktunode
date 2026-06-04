---
title: "Swinburne’s test on a DC shunt machine (CO3)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 6: Swinburne’s test on a DC shunt machine (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360bb"
status: "completed"
scrapedAt: "2026-05-23T16:15:21.604Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 6 - Swinburne's Test on a DC Shunt Machine (CO3)

## 1. Introduction to Swinburne's Test

Swinburne's test is a **no-load test** performed on a DC shunt machine (which can be operated as either a motor or a generator) to determine its **efficiency at different loads without actually loading the machine**. This is particularly advantageous when the machine is of large capacity, as loading it would require a significant amount of power and a suitable loading arrangement.

**Key Concept:** The fundamental principle behind Swinburne's test is to assume that the **iron losses and stray load losses are constant** at all loads and are primarily dependent on the applied voltage. Since the machine is run at no load with the rated applied voltage, these losses can be determined from the input power measurement. The copper losses are then calculated based on the rated armature and field currents.

**Reference:**
*   **P.S. Bimbhra, "Electrical Machinery":** Chapter on Testing of DC Machines, discusses various no-load tests and their principles.
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines":** Chapter on DC Machines, covers testing methods for DC machines, including Swinburne's test.

## 2. Objective of Swinburne's Test

*   To determine the **efficiency and voltage regulation** of a DC shunt machine at any desired load by conducting a no-load test.
*   To **separate and quantify the different types of losses** in a DC shunt machine (iron losses, friction and windage losses, and copper losses).
*   To **investigate the losses and efficiency** in DC machines by conducting no-load tests (aligns with CO3).

## 3. Theory and Principle

In a DC shunt machine, the various losses can be categorized as:

*   **Constant Losses (or No-Load Losses):** These losses remain relatively constant regardless of the load. They primarily consist of:
    *   **Iron Losses:** Hysteresis and eddy current losses in the armature core. These are dependent on the flux density and speed.
    *   **Friction and Windage Losses:** Mechanical losses due to friction at bearings and windage resistance of the rotating armature. These are dependent on the speed.
    *   **Shunt Field Copper Loss ( $P_{sh}$ ):** Loss in the shunt field winding due to the constant field current.

*   **Variable Losses:** These losses vary with the load current.
    *   **Armature Copper Loss ( $P_{a}$ ):** Loss in the armature winding due to the armature current. This is proportional to the square of the armature current ($I_a^2 R_a$).
    *   **Series Field Copper Loss ( $P_{se}$ ):** If the machine has a series field winding, this loss depends on the series field current. *For a DC shunt machine, this loss is zero.*

**Swinburne's Test Procedure:**

1.  **Connection:** Connect the DC shunt machine as a **motor**. Connect the armature and shunt field winding across the DC supply.
2.  **Operation:** Start the machine as a motor and adjust the **field rheostat and armature rheostat (if present) to obtain rated voltage across the armature and rated speed at no load**.
3.  **Measurement:** Measure the following at no load:
    *   Supply Voltage ($V$)
    *   Supply Current ($I_0$)
    *   Shunt Field Current ($I_{sh}$)
    *   Armature Current ($I_{a0}$)

**Calculations:**

1.  **No-load Input Power:**
    $P_{in0} = V \times I_0$

2.  **Shunt Field Copper Loss:**
    $P_{sh} = V \times I_{sh} = I_{sh}^2 R_{sh}$
    (where $R_{sh}$ is the resistance of the shunt field winding)

3.  **Constant Losses ($P_{const}$):**
    The input power at no load is the sum of shunt field copper loss and the constant losses (iron, friction, and windage).
    $P_{in0} = P_{sh} + P_{iron} + P_{f\&w}$
    Therefore,
    $P_{const} = P_{in0} - P_{sh}$

    **Important Note:** In Swinburne's test, it's assumed that the constant losses are equal to the total no-load losses minus the shunt field copper loss.

4.  **Armature Copper Loss at Load:**
    Let the machine be operating at a load current $I_L$ (as a motor, $I_a = I_L + I_{sh}$).
    The armature copper loss at load is:
    $P_{a,load} = I_a^2 R_a = (I_L + I_{sh})^2 R_a$
    The armature resistance ($R_a$) is typically determined by a separate **separate resistance test** or by measuring the resistance of the armature winding.

5.  **Total Losses at Load:**
    $P_{total,load} = P_{const} + P_{a,load} = (P_{in0} - P_{sh}) + (I_L + I_{sh})^2 R_a$

6.  **Output Power at Load:**
    As a **motor**:
    $P_{out,motor} = P_{in,load} - P_{total,load}$
    The input power at load is $P_{in,load} = V \times I_{in,load}$, where $I_{in,load} = I_L + I_{sh}$.
    So, $P_{out,motor} = (V \times (I_L + I_{sh})) - [(P_{in0} - P_{sh}) + (I_L + I_{sh})^2 R_a]$

    As a **generator**:
    First, determine the constant losses as above. Then, run the machine as a generator at rated speed and rated terminal voltage. The armature current at load will be $I_a = I_{sh} - I_L$.
    The output power as a generator is:
    $P_{out,generator} = V \times I_L$
    The total losses will be $P_{total,load} = P_{const} + I_a^2 R_a = (P_{in0} - P_{sh}) + (I_{sh} - I_L)^2 R_a$.
    The input power to the generator will be $P_{in,generator} = P_{out,generator} + P_{total,load}$.

7.  **Efficiency at Load:**
    **As a motor:**
    $\eta_{motor} = \frac{P_{out,motor}}{P_{in,motor}} \times 100\%$
    Where $P_{in,motor} = P_{out,motor} + P_{total,load}$

    **As a generator:**
    $\eta_{generator} = \frac{P_{out,generator}}{P_{in,generator}} \times 100\%$
    Where $P_{in,generator} = P_{out,generator} + P_{total,load}$

## 4. Experimental Setup and Procedure

**Apparatus Required:**

*   DC Shunt Motor/Generator (the machine under test)
*   DC Power Supply (variable voltage and current)
*   Voltmeter (to measure supply voltage, terminal voltage)
*   Ammeter (to measure supply current, armature current, field current)
*   Rheostats (for starting and speed/field control)
*   Tachometer (to measure speed)
*   Connecting wires

**Circuit Diagram:**

A typical circuit diagram for Swinburne's test on a DC shunt machine operated as a motor is as follows:

```
      +--------+     +--------+     +-------+
      | DC     |-----|  Ammeter|-----| Load  |
      | Supply |     |  (IA)  |     | Resistor|  (Not used in no-load test)
      +--------+     +--------+     +-------+
          |                               |
          |                               |
+---------+-------+                +------+------+
| Voltmeter (V) |                | Armature   |
+---------+-------+                | Winding    |
          |                        +------+------+
          |                               |
+---------+-------+                +------+------+
| Shunt Field     |----------------| Shunt Field |
| Rheostat (RF) |                | Winding    |
+---------+-------+                +------+------+
          |                               |
          +-------------------------------+
          |
          |
+---------+-------+
| Ammeter (ISH) |
+---------+-------+
          |
          +-------------------------------------+
          |
      +--------+
      | DC     |
      | Supply |
      +--------+
```

**Simplified Circuit Diagram for No-Load (Swinburne's Test):**

```
      +--------+     +--------+     +-------+
      | DC     |-----|  Ammeter|-----| Shunt |
      | Supply |     |  (I0)  |     | Field |
      +--------+     +--------+     | Rheostat|
          |                           +-------+
          |                               |
+---------+-------+                +------+------+
| Voltmeter (V) |                | Armature   |
+---------+-------+                | Winding    |
          |                        +------+------+
          |                               |
+---------+-------+                +------+------+
| Shunt Field     |----------------| Shunt Field |
| Rheostat (RF) |                | Winding    |
+---------+-------+                +------+------+
          |                               |
          +-------------------------------+
          |
          |
+---------+-------+
| Ammeter (ISH) |
+---------+-------+
```

**Steps:**

1.  **Connections:** Make the necessary connections as per the circuit diagram. Ensure that the shunt field rheostat is initially set to its maximum resistance to limit the field current and protect the machine.
2.  **Starting:** Close the main switch. Start the machine as a motor by gradually reducing the resistance in the starter (if used) and then adjusting the shunt field rheostat to bring the machine to its rated speed. Ensure the armature is connected across the supply with rated voltage.
3.  **No-Load Operation:** Adjust the shunt field rheostat to get the **rated voltage across the armature and rated speed** on no load.
4.  **Readings:** Record the following readings:
    *   Supply Voltage ($V$)
    *   No-load Supply Current ($I_0$)
    *   Shunt Field Current ($I_{sh}$)
    *   Speed (N) using a tachometer.
5.  **Armature Resistance Measurement:** Determine the armature resistance ($R_a$) by conducting a separate resistance test. Connect the armature across a variable DC supply and measure the voltage across the armature and the current through it. $R_a = V_a / I_a$. It is important to do this at a current value similar to the rated armature current for accurate results.

## 5. Worked Example

Let's consider a DC shunt motor with the following specifications and readings from Swinburne's test:

*   Rated Voltage: 230 V
*   Rated Armature Current: 10 A
*   Rated Shunt Field Current: 1 A
*   Armature Resistance ($R_a$): 0.5 $\Omega$
*   Shunt Field Resistance ($R_{sh}$): 230 $\Omega$

**Swinburne's Test Readings (No Load):**

*   Supply Voltage ($V$): 230 V
*   No-load Supply Current ($I_0$): 2.5 A
*   Shunt Field Current ($I_{sh}$): 1 A
*   Speed (N): 1500 rpm

**Calculations:**

1.  **Shunt Field Copper Loss:**
    $P_{sh} = V \times I_{sh} = 230 \times 1 = 230$ W
    Alternatively, $P_{sh} = I_{sh}^2 R_{sh} = (1)^2 \times 230 = 230$ W

2.  **No-load Input Power:**
    $P_{in0} = V \times I_0 = 230 \times 2.5 = 575$ W

3.  **Constant Losses:**
    $P_{const} = P_{in0} - P_{sh} = 575 - 230 = 345$ W
    These constant losses include iron losses and friction and windage losses.

4.  **Calculate Efficiency at 50% Load (as a Motor):**
    *   Rated Load Current ($I_L$): 10 A
    *   Desired Load Current (50%): $I_L = 0.5 \times 10 = 5$ A
    *   Armature Current at Load: $I_a = I_L + I_{sh} = 5 + 1 = 6$ A
    *   Armature Copper Loss at Load: $P_{a,load} = I_a^2 R_a = (6)^2 \times 0.5 = 36 \times 0.5 = 18$ W
    *   Total Losses at Load: $P_{total,load} = P_{const} + P_{a,load} = 345 + 18 = 363$ W
    *   Input Power at Load: $P_{in,load} = V \times (I_L + I_{sh}) = 230 \times (5 + 1) = 230 \times 6 = 1380$ W
    *   Output Power at Load: $P_{out,load} = P_{in,load} - P_{total,load} = 1380 - 363 = 1017$ W
    *   Efficiency at 50% Load: $\eta = \frac{P_{out,load}}{P_{in,load}} \times 100\% = \frac{1017}{1380} \times 100\% \approx 73.7 \%$

5.  **Calculate Efficiency at Full Load (as a Motor):**
    *   Full Load Current ($I_L$): 10 A
    *   Armature Current at Full Load: $I_a = I_L + I_{sh} = 10 + 1 = 11$ A
    *   Armature Copper Loss at Full Load: $P_{a,load} = I_a^2 R_a = (11)^2 \times 0.5 = 121 \times 0.5 = 60.5$ W
    *   Total Losses at Full Load: $P_{total,load} = P_{const} + P_{a,load} = 345 + 60.5 = 405.5$ W
    *   Input Power at Full Load: $P_{in,load} = V \times (I_L + I_{sh}) = 230 \times (10 + 1) = 230 \times 11 = 2530$ W
    *   Output Power at Full Load: $P_{out,load} = P_{in,load} - P_{total,load} = 2530 - 405.5 = 2124.5$ W
    *   Efficiency at Full Load: $\eta = \frac{P_{out,load}}{P_{in,load}} \times 100\% = \frac{2124.5}{2530} \times 100\% \approx 84.0 \%$

## 6. Practice Questions and Answers

**Question 1:** What is the primary advantage of performing Swinburne's test on a DC shunt machine?
**Answer:** The primary advantage is that it allows the determination of efficiency at various loads without actually loading the machine, which is especially beneficial for large capacity machines.

**Question 2:** In Swinburne's test, what are the components of constant losses?
**Answer:** The constant losses in Swinburne's test include iron losses (hysteresis and eddy current losses) and friction and windage losses. The shunt field copper loss is also considered constant during the no-load test.

**Question 3:** A DC shunt motor is tested using Swinburne's test. The no-load readings are: Voltage = 200V, No-load current $I_0$ = 3A, Shunt field current $I_{sh}$ = 1.5A. The armature resistance $R_a$ = 0.4 $\Omega$, and the shunt field resistance $R_{sh}$ = 200 $\Omega$. Calculate the constant losses.
**Answer:**
*   $P_{sh} = V \times I_{sh} = 200 \times 1.5 = 300$ W
*   $P_{in0} = V \times I_0 = 200 \times 3 = 600$ W
*   Constant Losses ($P_{const}$) = $P_{in0} - P_{sh} = 600 - 300 = 300$ W

**Question 4:** Using the data from Question 3, calculate the efficiency of the motor when it delivers an output power of 4 kW.
**Answer:**
*   Output Power ($P_{out}$): 4 kW = 4000 W
*   We know $P_{out} = P_{in} - P_{total\_losses}$
*   $P_{total\_losses} = P_{const} + P_{a,load}$
*   $P_{a,load} = I_a^2 R_a$
*   $P_{in} = V \times I_{in} = V \times (I_L + I_{sh})$
*   We need to find $I_a$ that results in an output power of 4000 W.
    $P_{out} = (V \times (I_L + I_{sh})) - [P_{const} + (I_L + I_{sh})^2 R_a]$
    $4000 = 200 \times (I_L + 1.5) - [300 + (I_L + 1.5)^2 \times 0.4]$
    Let $I_a = I_L + 1.5$.
    $4000 = 200 \times I_a - [300 + I_a^2 \times 0.4]$
    $4000 = 200 I_a - 300 - 0.4 I_a^2$
    $0.4 I_a^2 - 200 I_a + 4300 = 0$
    Using the quadratic formula $I_a = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $I_a = \frac{200 \pm \sqrt{(-200)^2 - 4(0.4)(4300)}}{2(0.4)}$
    $I_a = \frac{200 \pm \sqrt{40000 - 6880}}{0.8}$
    $I_a = \frac{200 \pm \sqrt{33120}}{0.8}$
    $I_a = \frac{200 \pm 182}{0.8}$
    Two possible values for $I_a$:
    $I_{a1} = \frac{200 + 182}{0.8} = \frac{382}{0.8} = 477.5$ A (This is unrealistically high, likely due to approximations in constant losses)
    $I_{a2} = \frac{200 - 182}{0.8} = \frac{18}{0.8} = 22.5$ A
    We choose $I_a = 22.5$ A.
*   Armature Copper Loss ($P_{a,load}$): $(22.5)^2 \times 0.4 = 506.25 \times 0.4 = 202.5$ W
*   Total Losses ($P_{total\_losses}$): $P_{const} + P_{a,load} = 300 + 202.5 = 502.5$ W
*   Input Power ($P_{in}$): $P_{out} + P_{total\_losses} = 4000 + 502.5 = 4502.5$ W
*   Efficiency ($\eta$): $\frac{P_{out}}{P_{in}} \times 100\% = \frac{4000}{4502.5} \times 100\% \approx 88.84 \%$

**(Note:** In a real lab scenario, the armature current would be limited by the machine's rating. The example demonstrates the calculation process. For a large output power, the assumption of constant losses might lead to inaccuracies at very different load conditions.)

## 7. Key Points to Remember

*   Swinburne's test is a **no-load test**, making it suitable for large machines.
*   It assumes **constant iron losses, friction and windage losses**.
*   The test is performed by running the machine as a **motor** at **rated voltage and speed** without load.
*   The **shunt field copper loss** is calculated separately from the no-load measurements.
*   The armature resistance ($R_a$) must be determined separately.
*   The efficiency at any load (motor or generator) can be calculated by adding the determined constant losses to the calculated variable copper losses at that load.
*   The test is directly aligned with **CO3** for investigating losses and efficiency through no-load tests.
*   The calculation of efficiency at different loads indirectly relates to **CO1** and **CO2** by understanding machine performance parameters.

## 8. Alignment with Course Outcomes

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   While Swinburne's test is primarily performed as a motor, the calculated constant losses can be used to determine the efficiency of the machine when operated as a generator. Understanding the losses is crucial for analyzing generator performance.
*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    *   By calculating the efficiency at various load currents, one can plot the efficiency vs. load current characteristic for a DC shunt motor. This directly contributes to understanding its performance.
*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**
    *   This is the **primary outcome** addressed by Swinburne's test. The test explicitly determines constant losses and allows for the calculation of variable losses and overall efficiency at any load.
