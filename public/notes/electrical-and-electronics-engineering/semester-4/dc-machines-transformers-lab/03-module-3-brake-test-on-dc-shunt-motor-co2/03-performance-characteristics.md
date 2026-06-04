---
title: "Performance characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 3: Brake test on DC shunt motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ad"
status: "completed"
scrapedAt: "2026-05-23T16:15:13.239Z"
---
# DC Machines & Transformers Lab: Module 3 - Brake Test on DC Shunt Motor

## Topic: Performance Characteristics

**Course Outcome Alignment:** CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)

**Module Objective:** To experimentally determine the performance characteristics of a DC shunt motor by conducting a brake test.

**Learning Outcomes Covered:**

*   Understanding the theoretical basis of the brake test for DC shunt motors.
*   Identifying and measuring the relevant electrical and mechanical parameters during the test.
*   Calculating output power, torque, efficiency, and losses.
*   Plotting and interpreting the characteristic curves:
    *   Torque vs. Speed (Load Characteristics)
    *   Efficiency vs. Output Power
    *   Armature Current vs. Output Power
    *   Line Current vs. Output Power
    *   Torque vs. Armature Current
*   Comparing experimental results with theoretical expectations.

---

### 1. Introduction to DC Shunt Motors and Brake Test

#### 1.1 DC Shunt Motor

A DC shunt motor is an electric motor in which the field winding is connected in parallel (shunt) with the armature winding.

*   **Key Features:**
    *   Field winding has a large number of turns of thin wire, resulting in high resistance.
    *   Field current is relatively constant and independent of the load.
    *   Speed is relatively constant and not significantly affected by the load.
*   **Applications:** Centrifugal pumps, fans, blowers, lathes, drilling machines, printing presses, where a nearly constant speed is required.

#### 1.2 Brake Test (or Retardation Test)

The brake test is a direct method of loading a DC motor to determine its performance characteristics under varying load conditions. It involves applying a mechanical load to the motor shaft and measuring the electrical input and mechanical output.

*   **Purpose:** To evaluate the efficiency, torque, and speed characteristics of the motor under actual operating conditions.
*   **Principle:** The motor is driven by an external prime mover initially to reach its rated speed, and then the prime mover is disconnected, and the motor is loaded by applying a brake. Alternatively, and more commonly in labs, the motor is directly supplied with variable DC power and loaded with a mechanical brake. This document focuses on the latter, more practical lab setup.

---

### 2. Theoretical Background and Formulas

The performance characteristics are derived from the measurements taken during the brake test.

#### 2.1 Basic Electrical Parameters

*   **Supply Voltage (V):** Measured across the armature and field terminals (if connected in parallel to the same supply).
*   **Armature Current (Ia):** Measured using an ammeter in series with the armature.
*   **Field Current (If):** Measured using an ammeter in series with the field winding.
*   **Line Current (IL):** Measured using an ammeter in series with the supply line. For a shunt motor, $I_L = I_a + I_f$.

#### 2.2 Mechanical Parameters

*   **Speed (N):** Measured using a tachometer (in RPM).
*   **Brake Drum Friction Torque ($T_f$):** This is the torque required to overcome the friction in the brake mechanism itself. It is typically determined by running the motor at rated speed with no load on the brake, measuring the input power and speed, and accounting for stray load losses.
*   **Applied Load Torque ($T_{load}$):** This is the torque exerted by the brake band on the drum. It is calculated from the spring balance readings.

#### 2.3 Calculation of Output Torque and Power

**Brake Drum Setup:** A brake drum is mounted on the motor shaft. A brake band encircles the drum, with one end attached to a spring balance (S1) and the other end to a fixed support or a lever system with another spring balance (S2).

*   **Lever Arm (r):** The effective radius of the brake drum, from the center of the shaft to the point where the brake band exerts pressure.
*   **Spring Balance Readings:** Let S1 be the reading of the spring balance on the tight side of the brake band and S2 be the reading on the slack side.
*   **Net Braking Force (F):** $F = S1 - S2$ (assuming S1 > S2).
*   **Gross Braking Torque ($T_{gross}$):** This is the torque applied by the brake band to the drum. $T_{gross} = F \times r = (S1 - S2) \times r$.
*   **Output Torque ($T_{out}$):** This is the useful torque delivered by the motor shaft. It is the gross braking torque minus the frictional torque of the motor's bearings, windage, and brush friction at no load.
    *   $T_{out} = T_{gross} - T_{friction}$
    *   Where $T_{friction}$ is the frictional torque of the motor itself, measured during a no-load test or estimated.

**More practically for labs:** The term "Output Torque" in the context of the brake test usually refers to the useful mechanical torque available at the shaft *after* accounting for the braking mechanism. Therefore, it's often directly related to the net force applied by the brake band and the lever arm.

*   **Effective Torque (T) or Output Torque:** $T = (S1 - S2) \times r$ (Nm)
    *   This assumes the spring balances are calibrated to measure force in Newtons. If they are in kg-force, convert to Newtons: $1 \text{ kg-force} = 9.81 \text{ N}$.

*   **Output Power ($P_{out}$):**
    *   $P_{out} = T \times \omega$
    *   Where $\omega$ is the angular speed in radians per second.
    *   $\omega = \frac{2 \pi N}{60}$
    *   $P_{out} = T \times \frac{2 \pi N}{60}$ (Watts)

#### 2.4 Efficiency and Losses

*   **Input Power ($P_{in}$):**
    *   $P_{in} = V \times I_L$ (Watts)

*   **Efficiency ($\eta$):**
    *   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

#### 2.5 Motor Losses

The total losses in the motor are the difference between the input power and the output power.

*   **Total Losses ($P_{loss}$):** $P_{loss} = P_{in} - P_{out}$

These losses can be further categorized:

*   **Field Copper Loss ($P_{fec}$):** Loss in the field winding.
    *   $P_{fec} = V \times I_f$  or  $P_{fec} = I_f^2 \times R_{sh}$ (where $R_{sh}$ is the shunt field resistance).
*   **Armature Copper Loss ($P_{agc}$):** Loss in the armature winding.
    *   $P_{agc} = I_a^2 \times R_a$ (where $R_a$ is the armature resistance).
*   **Brush Contact Loss ($P_{brush}$):** Loss due to voltage drop across the brushes. This is often approximated as $P_{brush} = (V_{brush\_drop}) \times I_a$. A common assumption for DC motors is a constant brush voltage drop of around 2V.
*   **Constant Losses ($P_{const}$):** These include core losses (hysteresis and eddy current) and mechanical losses (friction and windage). These losses are relatively constant with load.
    *   $P_{const} = P_{loss} - P_{agc} - P_{fec} - P_{brush}$
    *   This is typically determined from a no-load test. During the brake test, it's often more practical to work with total losses.

**Alternative calculation of efficiency components:**

*   Output Mechanical Power = $T \times \omega$ (where T is the useful shaft torque)
*   Input Electrical Power = $V \times I_L$
*   Efficiency $\eta = \frac{T \omega}{V I_L}$

**From Bimbhra (Chapter 5, DC Motors):**
Bimbhra emphasizes that for a shunt motor, the input power is $V \times I_L$. The output power is the mechanical power developed, which is $T_{dev} \times \omega$, where $T_{dev}$ is the developed torque ($T_{dev} = \frac{E_a I_a}{ \omega}$). The useful output torque $T_{out}$ is $T_{dev}$ minus rotational losses. The brake test directly measures this useful output torque $T_{out}$.

**From Kothari & Nagrath (Chapter 3, DC Motors):**
Kothari and Nagrath also detail the brake test and the calculation of output power as $P_{out} = T_{out} \times \omega$. They also discuss efficiency calculation as $\eta = P_{out} / P_{in}$.

---

### 3. Experimental Setup and Procedure

#### 3.1 Apparatus Required

1.  DC Shunt Motor of suitable rating.
2.  DC Power Supply (Variable).
3.  Brake drum with band and weights.
4.  Spring balances (two) of appropriate range.
5.  Ammeter (for $I_a$, $I_f$, $I_L$)
6.  Voltmeter (for V)
7.  Tachometer (for N)
8.  Rheostats (for armature and field control, if needed for starting/speed variation)
9.  Connecting wires and switches.

#### 3.2 Circuit Diagram

(A typical circuit diagram should be drawn here, showing the DC motor with armature and field windings, connected to a variable DC supply. Ammeters in series with armature, field, and line. Voltmeter in parallel across the supply. Brake drum connected to the motor shaft, with brake band, weights, and spring balances.)

*   **Connection details:**
    *   The DC supply is connected to the motor.
    *   Field winding is connected in shunt (parallel) with the armature.
    *   Ammeter $A_1$ measures $I_f$.
    *   Ammeter $A_2$ measures $I_a$.
    *   Ammeter $A_3$ measures $I_L$.
    *   Voltmeter $V_1$ measures the supply voltage $V$.
    *   The brake drum is mounted on the motor shaft.
    *   The brake band is applied to the drum.
    *   One end of the band is connected to a fixed point or a spring balance $S_2$.
    *   The other end is connected to a spring balance $S_1$.
    *   Weights are applied to the lever arm of the brake band to increase the load.

#### 3.3 Procedure

1.  **Connections:** Make the necessary electrical connections as per the circuit diagram. Ensure all switches are open.
2.  **Armature Resistance:** Measure the armature resistance ($R_a$) using a multimeter or by a suitable method if not already known.
3.  **Field Resistance:** Measure the field resistance ($R_{sh}$) using a multimeter or if not known, calculate $I_f$ from $V$ and $R_{sh}$ using Ohm's law for the field circuit.
4.  **No-Load Test (Optional but recommended):**
    *   Run the motor at its rated voltage and rated speed without any load on the brake.
    *   Record $V$, $I_a$, $I_f$, and $N$.
    *   This helps in estimating constant losses.
5.  **Loading the Motor:**
    *   Start the motor using a starter (if provided).
    *   Adjust the field rheostat to achieve the rated speed at no load.
    *   Gradually apply load using the brake band by adding weights or adjusting the brake lever. This will increase the tension on the spring balances and reduce the speed.
    *   **For each load step:**
        *   Adjust the field rheostat if necessary to maintain a nearly constant voltage or field current (as per the requirement of characteristic plotting). Ideally, the voltage is kept constant, and the field current is adjusted to keep the speed close to the desired range for plotting.
        *   Record the readings of:
            *   Supply Voltage (V)
            *   Field Current ($I_f$)
            *   Armature Current ($I_a$)
            *   Line Current ($I_L$)
            *   Speed (N) in RPM
            *   Spring Balance $S_1$ (tight side)
            *   Spring Balance $S_2$ (slack side)
    *   Continue taking readings until the motor reaches a significantly lower speed or starts overheating.
6.  **Cooling:** Allow the motor to cool down if necessary between tests or after the experiment.

---

### 4. Data Tabulation

| S.No. | V (Volts) | If (Amps) | Ia (Amps) | IL (Amps) | N (RPM) | S1 (N) | S2 (N) | Torque (Nm) | $P_{in}$ (Watts) | $P_{out}$ (Watts) | Efficiency ($\eta$) (%) |
| :---- | :-------- | :-------- | :-------- | :-------- | :------ | :----- | :----- | :---------- | :--------------- | :---------------- | :-------------------- |
| 1     |           |           |           |           |         |        |        |             |                  |                   |                       |
| 2     |           |           |           |           |         |        |        |             |                  |                   |                       |
| 3     |           |           |           |           |         |        |        |             |                  |                   |                       |
| ...   |           |           |           |           |         |        |        |             |                  |                   |                       |

**Calculations:**

*   Torque ($T$) = $(S1 - S2) \times r$  (where 'r' is the effective radius of the brake drum in meters).
*   $P_{in} = V \times I_L$
*   $P_{out} = T \times \frac{2 \pi N}{60}$
*   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

---

### 5. Performance Characteristics (Graphs)

Plot the following graphs using the data obtained:

1.  **Torque vs. Speed ($T$ vs. $N$):**
    *   **X-axis:** Speed (N) in RPM
    *   **Y-axis:** Torque (T) in Nm
    *   **Expected Shape:** This curve is typically a downward sloping curve. As the load (torque) increases, the speed decreases. For a shunt motor, the speed drop is relatively small from no-load to full-load.

2.  **Efficiency vs. Output Power ($\eta$ vs. $P_{out}$):**
    *   **X-axis:** Output Power ($P_{out}$) in Watts
    *   **Y-axis:** Efficiency ($\eta$) in %
    *   **Expected Shape:** The efficiency starts from zero at zero output power, increases to a maximum value at a certain output power (near full load), and then may slightly decrease at higher loads due to rapidly increasing copper losses.

3.  **Armature Current vs. Output Power ($I_a$ vs. $P_{out}$):**
    *   **X-axis:** Output Power ($P_{out}$) in Watts
    *   **Y-axis:** Armature Current ($I_a$) in Amps
    *   **Expected Shape:** This curve is generally an upward sloping curve. As the output power increases, the armature current also increases to provide the necessary torque.

4.  **Line Current vs. Output Power ($I_L$ vs. $P_{out}$):**
    *   **X-axis:** Output Power ($P_{out}$) in Watts
    *   **Y-axis:** Line Current ($I_L$) in Amps
    *   **Expected Shape:** Similar to the armature current curve, line current also increases with output power. Since $I_L = I_a + I_f$ and $I_f$ is constant, the shape of $I_L$ vs. $P_{out}$ will resemble $I_a$ vs. $P_{out}$.

5.  **Torque vs. Armature Current ($T$ vs. $I_a$):**
    *   **X-axis:** Armature Current ($I_a$) in Amps
    *   **Y-axis:** Torque (T) in Nm
    *   **Expected Shape:** This curve is expected to be a nearly straight line passing through the origin (or slightly offset due to friction). This demonstrates the proportionality between developed torque and armature current for a constant field flux.
    *   $T \propto \phi I_a$. In a shunt motor, $\phi$ is constant, so $T \propto I_a$.

---

### 6. Analysis and Discussion

*   **Torque-Speed Characteristic:**
    *   Comment on the linearity or non-linearity of the curve.
    *   Discuss the speed regulation of the shunt motor based on the slope of the T-N curve. A flatter curve indicates better speed regulation.
    *   Compare the no-load speed with the speed at full load.
*   **Efficiency Curve:**
    *   Identify the maximum efficiency and the corresponding output power.
    *   Explain why efficiency is low at light loads (constant losses are significant compared to output).
    *   Explain why efficiency drops at heavy loads (copper losses increase significantly).
*   **Current Characteristics:**
    *   Discuss the relationship between armature current, line current, and output power.
    *   Verify $I_L = I_a + I_f$ for each reading.
*   **Torque-Armature Current Characteristic:**
    *   Comment on the linearity and proportionality observed.
    *   Discuss any deviations from linearity (e.g., brush drop, saturation effects).
*   **Losses:**
    *   If constant losses were determined from a no-load test, compare them with the calculated constant losses from the brake test data.
    *   Discuss the dominant loss component at different load conditions.

---

### 7. Important Points to Remember

*   **Brake Drum Radius:** Ensure the radius 'r' is accurately measured and used in calculations.
*   **Spring Balance Calibration:** Ensure spring balances are properly calibrated and zeroed before use.
*   **Brake Band Tension:** Apply the brake band smoothly and uniformly. Avoid excessive tightening that could damage the motor or brake mechanism.
*   **Cooling:** Monitor motor temperature, especially at higher loads. Do not overload the motor beyond its rated capacity for extended periods.
*   **Constant Voltage:** Ideally, the supply voltage (V) should be kept constant throughout the test for standard characteristic plots.
*   **Speed Regulation:** For plotting the T-N curve, if the speed drops too much due to load, adjust the field rheostat slightly to bring it back to a suitable range for plotting, but ensure this is noted. However, the primary characteristic is obtained without significant field adjustments if possible.
*   **Units:** Maintain consistency in units (Nm for torque, W for power, RPM for speed).

---

### 8. Practice Questions and Exercises

**Q1.** A DC shunt motor is tested using a brake test. The following readings are obtained:
*   Supply Voltage (V) = 230 V
*   Field Current ($I_f$) = 1.5 A
*   Armature Current ($I_a$) = 15 A
*   Speed (N) = 1200 RPM
*   Spring Balance Readings: $S_1 = 120$ N, $S_2 = 30$ N
*   Effective radius of brake drum (r) = 0.1 m

**Calculate:**
a) Line Current ($I_L$)
b) Input Power ($P_{in}$)
c) Output Torque ($T$)
d) Output Power ($P_{out}$)
e) Efficiency ($\eta$)

**Answer:**
a) $I_L = I_a + I_f = 15 + 1.5 = 16.5$ A
b) $P_{in} = V \times I_L = 230 \times 16.5 = 3795$ W
c) $T = (S1 - S2) \times r = (120 - 30) \times 0.1 = 90 \times 0.1 = 9$ Nm
d) $P_{out} = T \times \frac{2 \pi N}{60} = 9 \times \frac{2 \pi \times 1200}{60} = 9 \times 40 \pi = 360 \pi \approx 1131$ W
e) $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{1131}{3795} \times 100\% \approx 29.8\%$

**Q2.** Why is the Torque-Armature Current characteristic of a DC shunt motor expected to be linear? What factors can cause deviation from linearity?

**Answer:** The torque developed by a DC motor is given by $T_{dev} = k \phi I_a$. For a DC shunt motor, the field flux ($\phi$) is approximately constant as the field current is kept relatively constant. Therefore, the developed torque is directly proportional to the armature current ($T_{dev} \propto I_a$). This linearity can deviate due to:
*   **Armature Reaction:** At high armature currents, the flux can be distorted, reducing the effective flux and thus torque.
*   **Field Weakening:** If the field current is deliberately reduced at high loads (not typical for shunt motors in standard tests), the flux will decrease.
*   **Brush Contact Drop:** A constant voltage drop across the brushes affects the developed torque calculation if not accounted for.
*   **Saturation:** If the magnetic circuit becomes saturated, the flux may not increase linearly with field current.

**Q3.** Describe the shape of the efficiency vs. output power curve for a DC shunt motor and explain the reasons for its shape at light and heavy loads.

**Answer:** The efficiency curve starts at 0% at 0 output power. It rises with increasing output power, reaches a maximum at some intermediate load (typically around 70-80% of full load), and then starts to decrease at higher loads.
*   **Light Loads:** At light loads, the fixed losses (core losses, friction, windage, field copper loss) are significant relative to the output power, resulting in low efficiency.
*   **Heavy Loads:** At heavy loads, the variable losses, particularly armature copper losses ($I_a^2 R_a$), increase significantly with the square of the armature current, causing the efficiency to drop.

**Q4.** A brake test on a DC shunt motor gives a maximum efficiency of 85% at an output power of 1.5 kW. If the motor's rated voltage is 220V and rated speed is 1500 RPM, estimate the constant losses at rated speed.
*(Assume $R_a = 0.5 \Omega$ and $R_{sh} = 100 \Omega$. Field voltage is same as armature voltage.)*

**Answer:**
At maximum efficiency, $\eta = 0.85$ and $P_{out} = 1500$ W.
$P_{in} = \frac{P_{out}}{\eta} = \frac{1500}{0.85} \approx 1764.7$ W.
Let $I_a$ be the armature current and $I_f$ be the field current at this operating point.
$I_f = \frac{V}{R_{sh}} = \frac{220}{100} = 2.2$ A.
$P_{in} = V \times I_L = V \times (I_a + I_f)$
$1764.7 = 220 \times (I_a + 2.2)$
$1764.7 / 220 = I_a + 2.2$
$8.02 \approx I_a + 2.2$
$I_a \approx 8.02 - 2.2 = 5.82$ A.

Armature Copper Loss ($P_{agc}$) = $I_a^2 R_a = (5.82)^2 \times 0.5 \approx 16.9$ W.
Field Copper Loss ($P_{fec}$) = $V \times I_f = 220 \times 2.2 = 484$ W.
Let's assume brush drop is 2V, so Brush Loss ($P_{brush}$) $\approx 2 \times I_a = 2 \times 5.82 = 11.64$ W.

Total Losses ($P_{loss}$) = $P_{in} - P_{out} = 1764.7 - 1500 = 264.7$ W.
Constant Losses ($P_{const}$) = $P_{loss} - P_{agc} - P_{fec} - P_{brush}$
$P_{const} = 264.7 - 16.9 - 484 - 11.64$

**Wait!** This calculation shows that $P_{fec} + P_{brush}$ are already greater than $P_{loss}$. This indicates an issue with the assumed values or the premise. In a typical brake test, the maximum efficiency occurs at a higher output power where $I_a$ is significantly larger.

**Revised approach to estimate constant losses from brake test:**
Constant losses are those that do not depend on load. These are mainly core losses and mechanical losses. From the brake test, we calculate total losses ($P_{in} - P_{out}$). These total losses are the sum of field copper loss, armature copper loss, brush loss, and constant losses.
$P_{in} - P_{out} = V I_f + I_a^2 R_a + P_{brush} + P_{const}$

If we assume rated conditions to estimate constant losses:
At rated power (say, 1.5kW output), calculate the corresponding $I_a$, $I_f$, $V$.
$I_f = 2.2$ A. $P_{fec} = 484$ W.
$P_{out} = T \omega$. Let's assume the speed at rated load is still close to 1500 RPM.
$T = P_{out} / (2 \pi N / 60) = 1500 / (2 \pi \times 1500 / 60) = 1500 / (50 \pi) \approx 9.55$ Nm.
We need $I_a$ at 1.5 kW output. Let's assume the $T$ vs $I_a$ is linear, $T=kI_a$.
From the problem, max efficiency is at 1.5kW. Let's find $I_a$ at this point using the efficiency.
$P_{in} = 1500 / 0.85 \approx 1764.7$ W.
$P_{in} = V I_L = V (I_a + I_f)$.
$1764.7 = 220 (I_a + 2.2)$
$I_a \approx 5.82$ A.
$P_{agc} = (5.82)^2 \times 0.5 \approx 16.9$ W.
$P_{brush} \approx 2 \times 5.82 = 11.64$ W.
$P_{const} = (P_{in} - P_{out}) - P_{agc} - P_{fec} - P_{brush}$
$P_{const} = (1764.7 - 1500) - 16.9 - 484 - 11.64$
$P_{const} = 264.7 - 16.9 - 484 - 11.64 = -247.84$ W.

**This indicates the problem statement or assumed values are not consistent for a real motor.**
However, the method to calculate constant losses would be:
1.  Determine $I_a$, $I_f$, $V$ at the point of maximum efficiency.
2.  Calculate $P_{in}$ and $P_{out}$.
3.  Calculate $P_{fec} = V \times I_f$ and $P_{agc} = I_a^2 \times R_a$.
4.  Estimate $P_{brush} \approx 2 \times I_a$.
5.  $P_{const} = (P_{in} - P_{out}) - P_{agc} - P_{fec} - P_{brush}$.

**A more practical approach for estimating constant losses is from a No-Load Test:**
During a no-load test, $P_{out} \approx 0$.
$P_{in\_noload} = V \times I_{L\_noload}$
$P_{loss\_noload} = P_{in\_noload} - P_{out\_noload} = P_{in\_noload}$ (since $P_{out} \approx 0$)
$P_{loss\_noload} = P_{fec} + P_{agc\_noload} + P_{brush\_noload} + P_{const}$
$P_{fec} = V \times I_{f\_noload}$ (if $I_f$ is known, otherwise calculated)
$P_{agc\_noload} = I_{a\_noload}^2 \times R_a$
$P_{brush\_noload} \approx 2 \times I_{a\_noload}$
$P_{const} = P_{in\_noload} - P_{fec} - P_{agc\_noload} - P_{brush\_noload}$.
This value of $P_{const}$ is then used for efficiency calculations.

---

This concludes the study notes for the Brake Test on a DC Shunt Motor and its Performance Characteristics. Remember to perform the experiment carefully and analyze the results thoroughly.
