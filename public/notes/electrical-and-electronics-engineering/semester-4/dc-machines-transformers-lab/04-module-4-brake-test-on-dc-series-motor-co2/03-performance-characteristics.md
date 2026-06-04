---
title: "Performance characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 4: Brake test on DC series motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b3"
status: "completed"
scrapedAt: "2026-05-23T16:15:17.034Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 4 - Brake Test on DC Series Motor (CO2)

## Topic: Performance Characteristics of a DC Series Motor

This module focuses on understanding the operational behavior and performance of a DC series motor through a brake test. The primary goal is to derive and analyze various performance characteristics.

### 1. Learning Outcomes Covered in this Module:

*   **LO1:** Understand the principle of the brake test for a DC series motor.
*   **LO2:** Conduct a brake test to gather experimental data.
*   **LO3:** Calculate various electrical and mechanical parameters from the experimental data.
*   **LO4:** Plot and analyze the performance characteristics of the DC series motor.
*   **LO5:** Compare experimental results with theoretical expectations.

### 2. Key Concepts and Definitions:

#### 2.1. DC Series Motor:

*   **Definition:** A DC motor where the field winding is connected in series with the armature winding. This means the same current flows through both the armature and the field.
*   **Key Characteristic:** The torque developed is proportional to the square of the armature current ($T \propto I_a^2$) at low flux densities, and proportional to the armature current ($T \propto I_a$) at high flux densities (due to saturation of the magnetic field). This makes it suitable for applications requiring high starting torque.
*   **Typical Applications:** Traction (trains, trams), electric cranes, hoists, elevators, fans, drills (where high starting torque is essential).
*   **Reference:** As discussed in *Electrical Machinery* by P.S. Bimbhra (Chapter 4: DC Generators and Motors) and *Electric Machines* by D P Kothari & I J Nagrath (Chapter 5: DC Motors).

#### 2.2. Brake Test:

*   **Purpose:** To determine the performance characteristics of a DC motor under various load conditions by applying a mechanical load.
*   **Principle:** A mechanical load is applied to the motor shaft, usually by means of a brake band. The load is adjusted to vary the motor speed and torque.
*   **Brake Band:** A band made of friction material (like leather or asbestos) wrapped around a pulley attached to the motor shaft. Tightening the band increases the braking torque and hence the load on the motor.

#### 2.3. Performance Characteristics:

These are graphs that illustrate how different parameters of the motor change with respect to variations in load. For a DC series motor, the most important characteristics are:

*   **Torque vs. Speed:** Shows how the motor's speed changes as the load torque increases.
*   **Torque vs. Armature Current:** Shows the relationship between the developed torque and the current drawn by the armature.
*   **Efficiency vs. Output Power (or Torque):** Illustrates how the efficiency of the motor varies with the mechanical output.
*   **Speed vs. Output Power (or Torque):** Shows how the speed changes as the mechanical output power increases.

### 3. Experimental Setup for Brake Test:

*   **DC Series Motor:** The motor under test.
*   **DC Power Supply:** To provide the armature and field excitation.
*   **Rheostats:**
    *   **Armature Rheostat (Starting Rheostat):** Used to limit the starting current and control the speed.
    *   **Field Rheostat (usually not used in series motor brake test as field is in series):** While a field rheostat can be used to control speed in a series motor, for a brake test, the speed is primarily controlled by the mechanical load.
*   **Ammeter:** To measure the armature current ($I_a$). Since the field winding is in series, this ammeter also measures the field current ($I_f$).
*   **Voltmeter:** To measure the supply voltage ($V$).
*   **Tachometer/Speedometer:** To measure the motor's rotational speed (N) in RPM.
*   **Spring Balance(s):**
    *   **One Spring Balance (S1):** Measures the tension on the tight side of the brake band.
    *   **Another Spring Balance (S2):** Measures the tension on the slack side of the brake band.
*   **Measuring Tape/Scale:** To measure the effective circumference of the brake pulley.
*   **Brake Band and Pulley Assembly:** Attached to the motor shaft.
*   **Stopwatch:** To measure time for speed readings (if tachometer is not available).

### 4. Procedure for Brake Test:

1.  **Connections:** Wire up the circuit as per the standard DC series motor circuit, incorporating the brake band, spring balances, and measuring instruments. Ensure the brake band is loosely fitted around the pulley.
2.  **No-Load/Initial Reading:**
    *   Switch on the DC supply.
    *   Start with the armature rheostat set at its maximum resistance.
    *   Gradually increase the supply voltage to the rated value.
    *   Gradually reduce the armature rheostat resistance to bring the motor to its rated speed (or a convenient starting speed).
    *   Record the initial readings: Supply Voltage ($V$), Armature Current ($I_a$), Speed ($N$). The spring balances will read roughly zero (or some initial value due to the band's weight).
3.  **Applying Load:**
    *   Gradually tighten the brake band by adjusting the screw. This increases the braking torque.
    *   For each load step:
        *   Adjust the armature rheostat to maintain a constant supply voltage.
        *   Allow the motor to reach a steady speed.
        *   Record: Supply Voltage ($V$), Armature Current ($I_a$), Speed ($N$), Spring Balance readings ($S_1$ and $S_2$).
4.  **Varying Load:** Repeat step 3 for several load conditions, increasing the load (by tightening the brake band) until the motor is overloaded or reaches its lowest stable speed.
5.  **Shutting Down:** After taking the last reading, remove the load by loosening the brake band completely. Switch off the supply.

### 5. Calculations:

For each set of readings, calculate the following parameters:

*   **Armature Current ($I_a$):** Measured directly by the ammeter.
*   **Supply Voltage ($V$):** Measured directly by the voltmeter.
*   **Speed ($N$):** Measured by the tachometer in RPM.
*   **Braking Torque ($T_{brake}$):**
    *   Calculate the net force applied by the brake band: $F_{net} = S_1 - S_2$ (where $S_1$ is the tension on the tight side and $S_2$ is the tension on the slack side).
    *   Measure the effective radius ($r$) of the pulley (distance from the center of the shaft to the center line of the brake band).
    *   $T_{brake} = F_{net} \times r$ (in Nm).
    *   **Important:** Ensure units are consistent (e.g., if $S_1, S_2$ are in Newtons and $r$ is in meters, $T_{brake}$ will be in Newton-meters).
*   **Torque Developed ($T$):**
    *   $T = T_{brake}$ (assuming negligible friction in the motor bearings and other losses not accounted for by the brake band itself. In reality, $T_{developed} = T_{brake} + T_{friction\_bearing\_etc.}$). For practical purposes in the lab, we often equate them for characteristic plotting.
    *   **Reference:** *Electrical Machinery* by P.S. Bimbhra, states that the developed torque is equal to the braking torque plus rotational losses. However, for characteristic curves, it's common to plot $T_{brake}$ as the output torque.
*   **Output Power ($P_{out}$):**
    *   $P_{out} = T \times \omega$, where $\omega$ is the angular speed in rad/s.
    *   $\omega = \frac{2 \pi N}{60}$ rad/s.
    *   $P_{out} = \frac{2 \pi N T}{60}$ Watts.
*   **Input Power ($P_{in}$):**
    *   $P_{in} = V \times I_a$ (Watts).
*   **Efficiency ($\eta$):**
    *   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
    *   $\eta = \frac{V \times I_a - \text{Losses}}{V \times I_a} \times 100\%$ (More accurate calculation involves subtracting losses)
    *   For this simplified brake test analysis, we can use $P_{out} = T \omega$ and $P_{in} = V I_a$.
    *   $\eta = \frac{T \omega}{V I_a} \times 100\%$.

### 6. Performance Characteristics to Plot:

Plot the following graphs with appropriate axis labels and units:

*   **Torque ($T$) vs. Speed ($N$):**
    *   X-axis: Speed ($N$) in RPM
    *   Y-axis: Developed Torque ($T$) in Nm
*   **Torque ($T$) vs. Armature Current ($I_a$):**
    *   X-axis: Armature Current ($I_a$) in Amps
    *   Y-axis: Developed Torque ($T$) in Nm
*   **Efficiency ($\eta$) vs. Output Power ($P_{out}$):**
    *   X-axis: Output Power ($P_{out}$) in Watts
    *   Y-axis: Efficiency ($\eta$) in %
*   **Speed ($N$) vs. Output Power ($P_{out}$):**
    *   X-axis: Output Power ($P_{out}$) in Watts
    *   Y-axis: Speed ($N$) in RPM
*   **Speed ($N$) vs. Armature Current ($I_a$):**
    *   X-axis: Armature Current ($I_a$) in Amps
    *   Y-axis: Speed ($N$) in RPM

### 7. Expected Characteristics and Their Interpretation:

*   **Torque vs. Speed:**
    *   **Shape:** Starts from a high torque at low speed and decreases as speed increases.
    *   **Reason:** As load increases (higher $T_{brake}$), the motor speed decreases. Due to the series connection, as $I_a$ increases (due to higher load), the field flux increases. Initially, $T \propto I_a^2$. However, as flux approaches saturation, $T \propto I_a$. The speed-torque curve reflects this inverse relationship. High starting torque is evident at zero or very low speeds.
    *   **CO2 Alignment:** Directly addresses sketching this characteristic.

*   **Torque vs. Armature Current:**
    *   **Shape:** Initially parabolic (or close to it), then linear as the motor saturates.
    *   **Reason:** At low currents, the flux is proportional to the current ($\Phi \propto I_a$). Since $T \propto \Phi I_a$, we get $T \propto I_a^2$. At higher currents, the magnetic circuit saturates, so the flux becomes constant or increases much slower than the current. Therefore, $T \propto I_a$.
    *   **Reference:** *Electric Machines* by Kothari & Nagrath discusses this in detail when explaining torque production.
    *   **CO2 Alignment:** Directly addresses sketching this characteristic.

*   **Efficiency vs. Output Power:**
    *   **Shape:** Starts from zero, rises to a maximum value, and then slightly decreases at higher output powers.
    *   **Reason:**
        *   At very low output power (low load), the input power is significant due to constant losses (iron losses, friction and windage), leading to low efficiency.
        *   As output power increases, the variable losses (copper losses, $I_a^2R_a$) increase, but the ratio of output power to input power improves, increasing efficiency.
        *   At very high output powers, the variable losses become dominant, causing the efficiency to drop slightly.
    *   **Maximum Efficiency:** Occurs when variable losses are approximately equal to constant losses.
    *   **CO3 Alignment:** This characteristic demonstrates how losses affect efficiency, although a direct loss segregation test is not part of this module.

*   **Speed vs. Output Power:**
    *   **Shape:** Starts at a high speed for zero output power and decreases as output power increases.
    *   **Reason:** For a given supply voltage, as the load increases, the armature current ($I_a$) increases. This leads to a larger voltage drop across the armature resistance ($I_aR_a$) and also produces more torque. The back EMF ($E_b = V - I_aR_a$) decreases, and since $E_b \propto \Phi N$, with the flux ($\Phi$) also increasing with $I_a$, the speed ($N$) must decrease to maintain the relationship.

*   **Speed vs. Armature Current:**
    *   **Shape:** High speed at low armature current, decreasing to lower speeds at higher armature currents.
    *   **Reason:** As $I_a$ increases due to increased load, the back EMF ($E_b = V - I_aR_a$) decreases. Since $E_b \propto \Phi N$, and for a series motor $\Phi \propto I_a$, we have $E_b \propto I_a N$. Thus, as $I_a$ increases, $N$ must decrease. The exact relationship is complex due to saturation.

### 8. Practice Questions and Exercises:

**Question 1:** A DC series motor is tested using a brake test. The following readings are obtained at a particular load:
*   Supply Voltage ($V$) = 230 V
*   Armature Current ($I_a$) = 15 A
*   Speed ($N$) = 1200 RPM
*   Spring Balance 1 ($S_1$) = 40 N
*   Spring Balance 2 ($S_2$) = 10 N
*   Effective radius of the pulley ($r$) = 0.15 m

Calculate:
a) The braking torque ($T_{brake}$).
b) The output power ($P_{out}$) in Watts.
c) The efficiency ($\eta$) of the motor.

**Answer 1:**
a) $F_{net} = S_1 - S_2 = 40 - 10 = 30$ N
   $T_{brake} = F_{net} \times r = 30 \times 0.15 = 4.5$ Nm

b) $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 1200}{60} = 40 \pi$ rad/s $\approx 125.66$ rad/s
   $P_{out} = T_{brake} \times \omega = 4.5 \times 125.66 \approx 565.47$ Watts

c) $P_{in} = V \times I_a = 230 \times 15 = 3450$ Watts
   $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{565.47}{3450} \times 100\% \approx 16.39\%$

**Question 2:** Explain why a DC series motor is not suitable for use as a constant speed motor.

**Answer 2:** A DC series motor exhibits a speed that varies significantly with the load. At no load, the armature current is very small, leading to weak field flux. Since $E_b \propto \Phi N$, and $E_b \approx V$, the speed ($N$) tends to become extremely high. This high speed is unsafe and can lead to damage. As the load increases, the armature current increases, strengthening the field and reducing the speed. The speed-torque characteristic is a steep curve, indicating that small changes in torque result in large changes in speed. Therefore, it is not suitable for applications requiring constant speed.

**Question 3:** What is the primary advantage of a DC series motor over a DC shunt motor?

**Answer 3:** The primary advantage of a DC series motor is its very high starting torque. This is because the torque is proportional to the square of the armature current at low flux densities ($T \propto I_a^2$), and the armature current is highest at starting. This makes series motors ideal for applications like traction, cranes, and hoists where heavy loads need to be started from rest.

### 9. Important Points to Remember:

*   **Series Connection:** The field winding has a low resistance and a large number of turns, while the armature winding has a higher resistance and fewer turns. Both are in series.
*   **Starting Torque:** DC series motors have the highest starting torque among DC motors due to $T \propto I_a^2$.
*   **No-Load Speed:** Never run a DC series motor without a load, as it can attain dangerously high speeds and damage itself.
*   **Brake Band Adjustment:** Ensure the brake band is applied uniformly and smoothly to avoid jerky movements and inaccurate readings.
*   **Pulley Radius:** The effective radius of the pulley should be measured accurately to calculate the torque.
*   **Units:** Pay close attention to units (Amps, Volts, Watts, Nm, RPM, rad/s) during calculations.
*   **Characteristic Curve Interpretation:** Understand the physical reasons behind the shapes of the plotted characteristics.
*   **Saturation:** The magnetic saturation of the field poles significantly affects the torque-current characteristic at higher currents.

### 10. Alignment with Course Outcomes:

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   While this module is about motors, the principle of load testing and data analysis for performance characteristics is similar to generator testing. Understanding how varying load affects motor parameters lays the groundwork for understanding generator performance.
*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    *   This module directly addresses sketching and analyzing the performance characteristics (Torque-Speed, Torque-Current, Efficiency-Output Power, Speed-Output Power) of a DC series motor based on experimental data from a brake test.
*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**
    *   Although a specific no-load test for loss segregation isn't performed here, the calculation of efficiency ($\eta = P_{out}/P_{in}$) directly involves the concept of losses (implicitly, as $P_{in} = P_{out} + \text{Losses}$). The efficiency-output power characteristic clearly demonstrates how efficiency is influenced by load and implicitly by the varying losses.
*   **CO4 & CO5:** These outcomes relate to transformers and are not directly covered in this module.

This comprehensive set of notes covers the essential aspects of performing a brake test on a DC series motor and analyzing its performance characteristics, directly addressing the learning outcomes and aligning with the core concepts presented in the specified reference books.
