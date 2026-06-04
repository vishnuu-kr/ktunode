---
title: "Plot the following characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 4: Brake test on DC series motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b2"
status: "completed"
scrapedAt: "2026-05-23T16:15:16.218Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 4 - Brake Test on DC Series Motor (CO2)

## 1. Introduction to DC Series Motors

A DC series motor is an electric motor where the field winding is connected in series with the armature winding. This series connection leads to a unique torque-speed characteristic, making it suitable for specific applications.

**Key Concepts:**

*   **Series Connection:** The field flux ($\phi$) is directly proportional to the armature current ($I_a$). Since the field winding has very few turns of thick wire, it carries the full armature current.
*   **Torque Equation:** $T \propto \phi I_a$. Since $\phi \propto I_a$ in a series motor, $T \propto I_a^2$. This implies that the starting torque is very high.
*   **Speed Equation:** The back EMF, $E_b \propto \phi N$. So, $N \propto \frac{E_b}{\phi}$. Since $E_b \approx V - I_a R_a - I_a R_{se}$ (where $R_a$ is armature resistance and $R_{se}$ is series field resistance), and $\phi \propto I_a$, we get $N \propto \frac{V - I_a (R_a + R_{se})}{I_a}$. As $I_a$ increases, the denominator ($I_a$) increases faster than the numerator, leading to a decrease in speed.

**Reference:**

*   **Bimbhra, P.S.** (2021). *Electrical Machinery*. Khanna Publishers. (Chapter on DC Motors, specifically Series Motors)
*   **Kothari, D.P. & Nagrath, I.J.** (2017). *Electric Machines*. Tata McGraw Hill. (Chapter on DC Motors, specifically Series Motors)

## 2. Purpose of the Brake Test

The brake test, also known as the load test or power test, is conducted on a DC motor to determine its performance characteristics under various load conditions. For a DC series motor, this test is crucial for understanding its torque-speed relationship, efficiency, and power output.

**Learning Outcomes Covered:**

*   **CO2:** Sketch the performance characteristics of DC shunt and series motors. (K3) - *This lab directly addresses the sketching of DC series motor characteristics.*

## 3. Experimental Setup

A typical brake test setup for a DC series motor includes:

*   **DC Series Motor:** The motor under test.
*   **DC Supply:** A variable DC voltage source (e.g., a variac with a rectifier or a DC generator).
*   **Loading Device:** A brake mechanism to apply a variable load to the motor shaft. Common types include:
    *   **Prony Brake Dynamometer:** A mechanical brake that uses friction to oppose the rotation of the motor shaft. It consists of a lever arm, a rope or belt, and weights.
    *   **Eddy Current Dynamometer:** An electromagnetic brake that generates braking torque through eddy currents induced in a rotating disc.
*   **Measuring Instruments:**
    *   **Ammeter:** To measure armature current ($I_a$) and line current ($I_L$). For a series motor, $I_a = I_L$.
    *   **Voltmeter:** To measure the supply voltage ($V$).
    *   **Wattmeter:** To measure the input power ($P_{in}$).
    *   **Tachometer or Speed Counter:** To measure the motor speed ($N$).
    *   **Spring Balance:** To measure the braking force applied by the brake.
    *   **Weighing Machine:** To measure the applied weights for the Prony brake.

**Circuit Diagram:**

A simple circuit diagram would show the DC supply connected in series with an ammeter, the motor (armature and field windings in series), and a switch. The wattmeter measures the input power to the motor.

```
      +-------[ DC Supply ]-------+
      |                           |
      |                           |
    [ Voltmeter ]               [ Ammeter ]
      |                           |
      +-------o-----[ Motor ]-----o-------+
              |       (Series     |
              |       Field &     |
              |       Armature)   |
              |                   |
              +-------------------+-----> Load (Brake)
```

## 4. Procedure for Brake Test

1.  **Initial Setup:** Connect the motor and measuring instruments as per the circuit diagram. Ensure the brake is set to a no-load condition (minimum braking force).
2.  **Apply Voltage:** Switch on the DC supply and adjust the voltage to the rated value of the motor.
3.  **Start the Motor:** Start the motor at no load.
4.  **Gradual Loading:** Gradually increase the load on the motor by tightening the brake.
5.  **Take Readings:** For each load increment, allow the motor to reach a steady state and record the following readings:
    *   Supply Voltage ($V$)
    *   Line Current ($I_L$) (which is also armature current $I_a$)
    *   Speed ($N$) (in RPM)
    *   Braking Force/Effort (measured by spring balance, $F$)
    *   If using a Prony brake, the weight applied ($W$) and the length of the lever arm ($L$).
6.  **Increase Load:** Continue increasing the load until the motor reaches its rated or maximum permissible load, or until the speed drops significantly.
7.  **No-Load Readings:** Take readings at no load as well (minimum load).
8.  **Switch Off:** After taking all readings, gradually remove the load and switch off the supply.

**Calculating Braking Torque ($T_b$):**

*   **Using Prony Brake:**
    $T_b = W \times L$ (if the brake lever arm is placed horizontally and weights are applied to counteract the motor's torque)
    *Alternatively, if a spring balance measures the pull at the lever arm:*
    $T_b = F \times L$
    Where:
    *   $F$ is the reading on the spring balance (in Newtons, N).
    *   $L$ is the effective length of the lever arm (in meters, m).
    *   The result is in Newton-meters (Nm).
*   **Using Eddy Current Dynamometer:** The dynamometer usually has a calibrated scale that directly indicates the torque or requires a force measurement at a specific radius.

**Important Note:** Always ensure the motor is not overloaded beyond its rated capacity and that adequate cooling is provided if necessary.

## 5. Plotting the Performance Characteristics

From the recorded data, calculate the following and plot them against the appropriate parameters:

**Calculated Parameters:**

*   **Input Power ($P_{in}$):**
    $P_{in} = V \times I_L$ (Watts)
*   **Output Power ($P_{out}$):**
    $P_{out} = T_b \times \omega$
    Where $\omega$ is the angular speed in radians per second: $\omega = \frac{2 \pi N}{60}$
    $P_{out} = \frac{2 \pi N T_b}{60}$ (Watts)
*   **Torque ($T_b$):** As calculated above.
*   **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
*   **Speed ($N$):** (Already measured)
*   **Line Current ($I_L$):** (Already measured, same as $I_a$)

**Characteristics to Plot (as per CO2):**

The primary characteristics to plot for a DC series motor are:

1.  **Torque vs. Speed ($T_b$ vs. $N$):**
    *   **X-axis:** Speed ($N$) in RPM.
    *   **Y-axis:** Torque ($T_b$) in Nm.
    *   **Expected Shape:** This curve will be a hyperbola in the ideal case, but in practice, it will be a steeply falling curve. At high speeds, the torque is low, and at low speeds, the torque is high. This is characteristic of a series motor. Start from a high torque, low speed point and move towards a low torque, high speed point.

2.  **Torque vs. Current ($T_b$ vs. $I_a$):**
    *   **X-axis:** Armature Current ($I_a$) in Amperes.
    *   **Y-axis:** Torque ($T_b$) in Nm.
    *   **Expected Shape:** Since $T_b \propto I_a^2$ (ideally), this curve will be a parabola. The torque increases rapidly with current.

3.  **Speed vs. Current ($N$ vs. $I_a$):**
    *   **X-axis:** Armature Current ($I_a$) in Amperes.
    *   **Y-axis:** Speed ($N$) in RPM.
    *   **Expected Shape:** This curve will be a steeply falling curve. As the current increases, the field flux increases, and thus the speed decreases significantly. This is the inverse relationship characteristic of series motors.

4.  **Efficiency vs. Output Power ($\eta$ vs. $P_{out}$):**
    *   **X-axis:** Output Power ($P_{out}$) in Watts or kW.
    *   **Y-axis:** Efficiency ($\eta$) in %.
    *   **Expected Shape:** The efficiency will start from zero at no load, increase to a maximum value at or near the rated load, and then may decrease slightly at very heavy loads due to increasing losses.

5.  **Efficiency vs. Current ($\eta$ vs. $I_a$):**
    *   **X-axis:** Armature Current ($I_a$) in Amperes.
    *   **Y-axis:** Efficiency ($\eta$) in %.
    *   **Expected Shape:** Similar to the efficiency vs. output power curve, efficiency will increase with current, reach a maximum, and then decrease.

**Reference:**

*   **Bimbhra, P.S.** (2021). *Electrical Machinery*. Khanna Publishers. (Pages discussing performance characteristics of DC series motors)
*   **Kothari, D.P. & Nagrath, I.J.** (2017). *Electric Machines*. Tata McGraw Hill. (Pages discussing performance characteristics of DC series motors)

## 6. Key Concepts and Definitions Related to Performance Characteristics

*   **Torque:** The rotational force produced by the motor. It is proportional to the product of flux and armature current.
*   **Speed:** The rotational speed of the motor shaft, usually measured in revolutions per minute (RPM).
*   **Efficiency:** The ratio of output power to input power, expressed as a percentage. It indicates how effectively the motor converts electrical energy into mechanical energy.
*   **Starting Torque:** The torque developed by the motor at zero speed. DC series motors have high starting torque.
*   **Breakdown Torque (or Maximum Torque):** The maximum torque a motor can produce without stalling. For a DC series motor, this occurs at a particular current and speed.
*   **Rated Load:** The load at which the motor is designed to operate continuously without exceeding its temperature limits.
*   **Armature Current ($I_a$):** The current flowing through the armature winding.
*   **Line Current ($I_L$):** The current drawn from the supply line. For a series motor, $I_a = I_L$.

## 7. Important Points to Remember

*   **Series Motor Behavior:** DC series motors have a very high starting torque but run at excessively high speeds under no-load conditions. **Therefore, they should never be started or operated without a load.**
*   **Torque-Current Relationship:** The torque is proportional to the square of the armature current ($T \propto I_a^2$) at low currents (where flux is proportional to current) and becomes approximately proportional to current ($T \propto I_a$) at high currents (when the magnetic field is saturated).
*   **Speed-Current Relationship:** The speed is inversely proportional to the armature current ($N \propto 1/I_a$) under low load conditions and becomes less sensitive to current changes at higher loads due to saturation.
*   **Applications:** DC series motors are used in applications requiring high starting torque, such as electric traction (trains, trams), cranes, hoists, electric vehicles, and starter motors.
*   **Measurement Accuracy:** Ensure all measuring instruments are calibrated and connected correctly for accurate results.
*   **Steady State:** Allow the motor to reach a stable speed and temperature at each load point before taking readings.

## 8. Sample Data Table and Calculations

**Experiment Title:** Brake Test on DC Series Motor

**Apparatus Used:** DC Series Motor, Prony Brake Dynamometer, Ammeter (0-20A), Voltmeter (0-300V), Wattmeter (0-1500W), Tachometer, Spring Balance (0-50N), Weights, Connecting Wires.

**Rated Values of Motor:** [Specify from motor nameplate, e.g., 2HP, 220V, 1500 RPM]

**Lever Arm Length (L):** [Specify, e.g., 0.3 m]

**Data Table:**

| Sl. No. | Voltage (V) | Line Current (Ia) (A) | Speed (N) (RPM) | Spring Balance Reading (F) (N) | Input Power (Pin) (W) | Torque (Tb) (Nm) | Output Power (Pout) (W) | Efficiency (η) (%) |
| :------ | :---------- | :-------------------- | :-------------- | :----------------------------- | :-------------------- | :--------------- | :---------------------- | :----------------- |
| 1       | [Value]     | [Value]               | [Value]         | [Value]                        | [Value]               | [Value]          | [Value]                 | [Value]            |
| 2       | [Value]     | [Value]               | [Value]         | [Value]                        | [Value]               | [Value]          | [Value]                 | [Value]            |
| ...     | ...         | ...                   | ...             | ...                            | ...                   | ...              | ...                     | ...                |
| N       | [Value]     | [Value]               | [Value]         | [Value]                        | [Value]               | [Value]          | [Value]                 | [Value]            |

**Calculations:**

*   **Input Power ($P_{in}$):** $P_{in} = V \times I_a$
*   **Torque ($T_b$):** $T_b = F \times L$ (assuming $F$ is the pull measured at the lever arm)
*   **Angular Speed ($\omega$):** $\omega = \frac{2 \pi N}{60}$ rad/s
*   **Output Power ($P_{out}$):** $P_{out} = T_b \times \omega$
*   **Efficiency ($\eta$):** $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

**Example Calculation (for one reading):**

Let's assume for a specific reading:
$V = 220 \, V$
$I_a = 8 \, A$
$N = 1200 \, RPM$
$F = 15 \, N$
$L = 0.3 \, m$

1.  **$P_{in}$:** $P_{in} = 220 \, V \times 8 \, A = 1760 \, W$
2.  **$T_b$:** $T_b = 15 \, N \times 0.3 \, m = 4.5 \, Nm$
3.  **$\omega$:** $\omega = \frac{2 \pi \times 1200}{60} = 40\pi \, rad/s \approx 125.66 \, rad/s$
4.  **$P_{out}$:** $P_{out} = 4.5 \, Nm \times 125.66 \, rad/s \approx 565.47 \, W$
5.  **$\eta$:** $\eta = \frac{565.47 \, W}{1760 \, W} \times 100\% \approx 32.13\%$

## 9. Practice Questions & Exercises

1.  **Why is it crucial never to start a DC series motor without a load?**
    *   **Answer:** A DC series motor has a very low armature resistance and field resistance. At no load, the armature current is very small, resulting in a very weak field flux. According to the speed equation ($N \propto E_b / \phi$), with a very small $\phi$, the speed becomes excessively high, potentially leading to dangerous mechanical failure due to centrifugal forces.

2.  **Sketch the typical characteristic curves for a DC series motor: (a) Torque vs. Speed, (b) Speed vs. Current.**
    *   **Answer:** (Refer to Section 5 for expected shapes. The sketches should show a steeply falling torque-speed curve and a steeply falling speed-current curve, with high torque and low speed at higher currents and vice-versa.)

3.  **If a DC series motor has a rated voltage of 220V and draws 20A at full load, producing an output of 3kW, what is its full-load efficiency? Assume the motor's operating speed at full load is 1400 RPM.**
    *   **Calculation:**
        *   Input Power ($P_{in}$) = $V \times I_a = 220 \, V \times 20 \, A = 4400 \, W$
        *   Output Power ($P_{out}$) = $3 \, kW = 3000 \, W$
        *   Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}} \times 100\% = \frac{3000 \, W}{4400 \, W} \times 100\% \approx 68.18\%$

4.  **Explain the difference in the torque-speed characteristics between a DC shunt motor and a DC series motor.**
    *   **Answer:**
        *   **DC Shunt Motor:** Torque is approximately proportional to armature current ($T \propto I_a$) because the field flux is relatively constant. The torque-speed characteristic is a slightly drooping curve.
        *   **DC Series Motor:** Torque is approximately proportional to the square of armature current ($T \propto I_a^2$) at low currents. This results in a very high starting torque and a steeply falling torque-speed curve.

5.  **List the essential measuring instruments required for performing a brake test on a DC motor.**
    *   **Answer:** Voltmeter, Ammeter, Wattmeter, Tachometer, Spring Balance (for load measurement), Weights (if using Prony brake).

## 10. Relating to Course Outcomes (COs)

*   **CO2: Sketch the performance characteristics of DC shunt and series motors. (Knowledge Level: K3)**
    *   This entire module and lab exercise directly contribute to fulfilling CO2. By performing the brake test and analyzing the collected data, students will be able to plot and understand the characteristic curves of a DC series motor, which is a key aspect of sketching these characteristics. The practical understanding gained from plotting these curves allows students to represent them accurately in theory.

**Other COs and their relevance (Indirect):**

While CO2 is the primary focus, understanding the brake test also indirectly supports other COs by building a foundational understanding of DC machine operation:

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   The principles of load testing and characteristic plotting are similar for both generators and motors. Understanding load tests on motors provides a comparative basis for analyzing generator performance.
*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**
    *   The brake test, by measuring input and output power, directly allows for the calculation of efficiency. This reinforces the concepts of losses (though not explicitly measured as separate components in this test) and their impact on machine performance, which is further explored in no-load tests for loss determination.

---
This comprehensive study note covers the essential aspects of the brake test on a DC series motor, aligning with the specified course outcomes and reference materials. Remember to always prioritize safety during practical lab sessions.
