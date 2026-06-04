---
title: "Electrical characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 3: Brake test on DC shunt motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ae"
status: "completed"
scrapedAt: "2026-05-23T16:15:13.985Z"
---
# DC Machines & Transformers Lab: Module 3 - Brake Test on DC Shunt Motor (CO2)

## Topic: Electrical Characteristics

### Learning Outcomes Covered in this Topic:

*   **CO2:** Sketch the performance characteristics of DC shunt motors.

### Introduction

The brake test on a DC shunt motor is a direct method to determine its performance characteristics under varying load conditions. By applying a load through a brake mechanism and measuring electrical input parameters (voltage, current) and mechanical output parameters (torque, speed), we can plot various electrical characteristics. This test is crucial for understanding how a DC shunt motor behaves under different operating loads.

### Key Concepts and Definitions

*   **DC Shunt Motor:** A DC motor where the field winding is connected in parallel (shunt) with the armature winding. This results in a relatively constant field flux, leading to a nearly constant speed characteristic.
*   **Brake Test:** A direct loading method where a mechanical load is applied to the motor shaft using a brake drum and band. The torque developed by the motor is measured by a spring balance and a lever arm.
*   **Electrical Characteristics:** Graphs that represent the relationship between electrical input parameters and mechanical output parameters of a DC motor. These typically include:
    *   Torque vs. Armature Current ($T_a$ vs. $I_a$)
    *   Torque vs. Speed ($T_a$ vs. $N$)
    *   Speed vs. Armature Current ($N$ vs. $I_a$)
    *   Efficiency vs. Output Power ($\eta$ vs. $P_{out}$)
    *   Power Factor (for AC input, not directly applicable to DC motors but important in other contexts)
*   **Armature Torque ($T_a$):** The torque developed by the armature due to the interaction of magnetic field and armature current. It is directly proportional to the armature current and field flux: $T_a \propto \Phi I_a$. For a shunt motor, $\Phi$ is approximately constant, so $T_a \propto I_a$.
*   **Shaft Torque ($T_{sh}$):** The net useful torque available at the motor shaft after accounting for internal losses (friction, windage, iron losses). $T_{sh} = T_a - T_{loss}$, where $T_{loss}$ represents torques due to rotational losses.
*   **Rotational Losses:** Losses due to friction and windage. These are generally considered constant or varying slightly with speed.
*   **Efficiency ($\eta$):** The ratio of mechanical output power to electrical input power. $\eta = \frac{P_{out}}{P_{in}} = \frac{T_{sh} \omega}{V_L I_L}$.
*   **Output Power ($P_{out}$):** The mechanical power delivered by the motor shaft. $P_{out} = T_{sh} \omega = \frac{2 \pi N T_{sh}}{60}$, where $N$ is speed in RPM and $T_{sh}$ is shaft torque in Nm.
*   **Input Power ($P_{in}$):** The electrical power consumed by the motor. $P_{in} = V_L I_L$, where $V_L$ is the line voltage and $I_L$ is the line current.

### Theory Behind the Brake Test and Characteristics

1.  **Torque Measurement:**
    *   The brake band is wrapped around a pulley attached to the motor shaft.
    *   One end of the brake band is attached to a fixed support, and the other end is attached to a spring balance through a lever arm.
    *   Let $W$ be the force measured by the spring balance and $L$ be the length of the lever arm.
    *   The braking torque applied to the shaft is $T_{brake} = W \times L$.
    *   This braking torque opposes the developed torque. At steady state, $T_{brake} = T_{sh}$.
    *   Therefore, the shaft torque is measured as $T_{sh} = W \times L$.

2.  **Speed Measurement:**
    *   The speed of the motor ($N$) is measured using a tachometer or a hand-held RPM meter.

3.  **Electrical Measurements:**
    *   The applied armature voltage ($V_a$) or terminal voltage ($V_L$) is measured using a voltmeter.
    *   The line current ($I_L$) is measured using an ammeter.
    *   For a shunt motor, the field current ($I_f$) is also measured using an ammeter. The field winding is connected directly across the supply, so $I_f = V_L / R_{sh}$.

4.  **Calculating Developed Torque ($T_a$):**
    *   The motor's internal losses are primarily rotational losses (friction and windage) and copper losses ($I_a^2 R_a$ and $I_f^2 R_{sh}$).
    *   The net torque developed by the armature is $T_a$.
    *   The relationship between armature torque and shaft torque is $T_{sh} = T_a - T_{rotational}$.
    *   At no load, $T_{sh} \approx 0$, so $T_a \approx T_{rotational}$.
    *   Therefore, $T_a = T_{sh} + T_{rotational}$.
    *   We can estimate $T_{rotational}$ by measuring the torque at no load (or by extrapolating the $T_{sh}$ vs. $I_a$ curve to $I_a=0$, which is not always accurate for brake tests). A more practical approach is to consider the armature current drawn at no-load as the current responsible for rotational losses.
    *   **From Bimbhra (Chapter 5, DC Motors):** The electromagnetic torque developed is given by $T_e = \frac{P_{em}}{ \omega_m} = \frac{V_a E_a}{ \omega_m} = \frac{\Phi Z P}{2 \pi A} N$. In terms of armature current, $T_e = k \Phi I_a$. For a shunt motor, $\Phi$ is nearly constant, so $T_e \approx k' I_a$.
    *   The armature current is $I_a = I_L - I_f$.
    *   So, $T_a = k' (I_L - I_f)$.
    *   We can determine $k'$ from the no-load condition or by assuming a linear relationship between $T_a$ and $I_a$.
    *   **A common approach in labs:** Calculate $T_a$ as $T_a = T_{sh} + (\text{constant torque due to rotational losses})$. This constant torque can be estimated from the $T_{sh}$ vs. $I_a$ characteristic by extrapolating it to $I_a = 0$. If the extrapolation yields a negative torque, it means our assumption of constant rotational torque might be flawed or the test conditions are not ideal.
    *   **Alternatively (and more accurately),** we can calculate power input to armature: $P_{a} = V_a E_a$. Since $E_a = V_L - I_a R_a$, and $T_a = \frac{E_a I_a}{\omega_m} = \frac{(V_L - I_a R_a) I_a}{\omega_m}$.
    *   This requires knowing $R_a$. If $R_a$ is not known, we can use the relationship $T_a \approx k I_a$ and determine $k$ from data points where $T_{sh}$ is measured. The $T_a$ vs $I_a$ curve is generally linear for shunt motors.

5.  **Calculating Efficiency:**
    *   Mechanical Output Power: $P_{out} = T_{sh} \omega = \frac{2 \pi N T_{sh}}{60}$ (Watts)
    *   Electrical Input Power: $P_{in} = V_L I_L$ (Watts)
    *   Efficiency: $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

### Procedure for Brake Test (Typical)

1.  **Setup:** Connect the DC shunt motor to a variable DC supply. Connect a voltmeter across the armature terminals and an ammeter in series with the armature to measure $V_L$ and $I_L$. Connect another ammeter in series with the field winding to measure $I_f$. Mount the brake mechanism on the motor shaft.
2.  **No-Load Observation:** Start the motor by applying rated voltage and adjust the field rheostat to achieve the rated speed at no load. Record $V_L$, $I_L$, $I_f$, and $N$.
3.  **Loading:** Gradually apply load by tightening the brake band. For each load step:
    *   Adjust the field rheostat to maintain the terminal voltage ($V_L$) constant (or adjust the armature supply voltage to maintain constant speed if required by the specific experiment).
    *   Read and record $V_L$, $I_L$, $I_f$, spring balance reading ($W$), and speed ($N$).
    *   Tighten the brake band gradually until the motor is near its full load capacity or until desired operating points are covered.
4.  **Shutdown:** After taking readings for all load points, gradually reduce the load to zero, switch off the field, and then switch off the armature supply.

### Data Sheet (Typical)

| Sr. No. | $V_L$ (V) | $I_L$ (A) | $I_f$ (A) | $I_a = I_L - I_f$ (A) | $W$ (N) | $T_{sh} = W \times L$ (Nm) | $N$ (RPM) | $\omega_m = \frac{2\pi N}{60}$ (rad/s) | $P_{out} = T_{sh} \omega_m$ (W) | $P_{in} = V_L I_L$ (W) | $\eta = \frac{P_{out}}{P_{in}} \times 100\%$ |
| :------ | :-------- | :-------- | :-------- | :-------------------- | :------ | :-------------------------- | :-------- | :------------------------------------ | :-------------------------------- | :--------------------- | :-------------------------------------- |
| 1 (NL)  |           |           |           |                       |         |                             |           |                                       |                                   |                        |                                         |
| 2       |           |           |           |                       |         |                             |           |                                       |                                   |                        |                                         |
| 3       |           |           |           |                       |         |                             |           |                                       |                                   |                        |                                         |
| ...     |           |           |           |                       |         |                             |           |                                       |                                   |                        |                                         |

*Note: $L$ is the lever arm length, typically 0.3 meters.*

### Deriving Electrical Characteristics (CO2)

Based on the data collected, the following characteristics can be plotted:

1.  **Torque vs. Armature Current ($T_{sh}$ vs. $I_a$ and $T_a$ vs. $I_a$)**
    *   Plot $T_{sh}$ on the y-axis and $I_a$ on the x-axis.
    *   To plot $T_a$ vs. $I_a$, we need to estimate rotational torque. This is often done by extrapolating the $T_{sh}$ vs. $I_a$ curve to $I_a = 0$. Let this extrapolated value be $T_{rot}$. Then, $T_a = T_{sh} + T_{rot}$.
    *   **Expected Shape:** For a DC shunt motor, the armature torque ($T_a$) is approximately proportional to the armature current ($I_a$) because the field flux ($\Phi$) is constant. So, the $T_a$ vs. $I_a$ curve should be a straight line passing through the origin. The $T_{sh}$ vs. $I_a$ curve will be similar but shifted downwards by the rotational torque.
    *   **Reference (Bimbhra, Chapter 5):** $T_e \propto \Phi I_a$. For a shunt motor, $\Phi$ is constant, hence $T_e \propto I_a$.

2.  **Torque vs. Speed ($T_{sh}$ vs. $N$)**
    *   Plot $T_{sh}$ on the y-axis and $N$ on the x-axis.
    *   **Expected Shape:** As the load torque ($T_{sh}$) increases, the speed ($N$) of a DC shunt motor decreases slightly. This is because the back EMF ($E_a$) decreases, leading to increased armature current ($I_a$), which in turn increases the developed torque ($T_a$). The decrease in speed is generally small for shunt motors unless heavily loaded.
    *   **Reference (Kothari & Nagrath, Chapter 7):** The speed equation for a DC motor is $N = \frac{k \Phi}{1} ( \frac{V_a}{N} - I_a R_a) $ where $E_a = V_a - I_a R_a$. Since $N \propto E_a / \Phi$, and for a shunt motor $\Phi$ is constant, $N \propto E_a$. As load (and $T_{sh}$) increases, $I_a$ increases, $E_a$ decreases slightly (due to voltage drop $I_a R_a$), thus $N$ decreases slightly.

3.  **Speed vs. Armature Current ($N$ vs. $I_a$)**
    *   Plot $N$ on the y-axis and $I_a$ on the x-axis.
    *   **Expected Shape:** Similar to the $T_{sh}$ vs. $N$ curve, the speed ($N$) decreases slightly as the armature current ($I_a$) increases. This shows the inherent speed regulation characteristic of a shunt motor.
    *   **Reference (Bimbhra, Chapter 5):** $N = \frac{V_a - I_a R_a}{k \Phi}$. For a shunt motor, $\Phi$ is constant, so $N = \frac{V_a}{k \Phi} - \frac{R_a}{k \Phi} I_a$. This shows a linear decrease in speed with armature current.

4.  **Efficiency vs. Output Power ($\eta$ vs. $P_{out}$)**
    *   Plot $\eta$ on the y-axis and $P_{out}$ on the x-axis.
    *   **Expected Shape:**
        *   Efficiency starts from zero at no load ($P_{out}=0$).
        *   It increases rapidly with load as copper losses ($I_a^2 R_a$) become less significant compared to the increasing output power.
        *   It reaches a maximum value at some load.
        *   After reaching maximum efficiency, it starts to decrease with further increase in load. This is because the copper losses ($I_a^2 R_a$) increase quadratically with $I_a$ (and thus with $P_{out}$), eventually dominating over the output power. Iron losses and rotational losses are relatively constant.
    *   **Reference (Kothari & Nagrath, Chapter 7):** Maximum efficiency occurs when variable losses equal constant losses. For a shunt motor, constant losses ($P_c$) are rotational losses + field copper loss ($V_L I_f$). Variable losses ($P_v$) are armature copper loss ($I_a^2 R_a$). Maximum efficiency occurs when $P_v = P_c$.

### Important Points to Remember

*   **Constant Voltage Operation:** It is crucial to maintain the supply voltage ($V_L$) constant throughout the test, as variations in voltage will significantly affect the motor characteristics.
*   **Constant Field Flux:** For a shunt motor, the field winding is connected across the supply. As long as the supply voltage is constant, the field current and hence the flux are approximately constant, leading to stable speed characteristics.
*   **Torque Calculation:** Distinguish between shaft torque ($T_{sh}$) and armature torque ($T_a$). $T_{sh}$ is the measured output torque, while $T_a$ is the internally developed torque. $T_a$ is usually plotted against $I_a$ as it's directly proportional to $I_a$ for a shunt motor.
*   **Rotational Losses:** The estimation of rotational losses is important for accurate $T_a$ calculation. A simple extrapolation to $I_a=0$ can be used as an approximation.
*   **Safety:** Ensure the brake band does not overheat. The test should not be prolonged at very high loads that could lead to overheating of the motor.
*   **Brake Test Limitations:** The brake test is a direct method but can be cumbersome to set up and maintain consistently. It also involves frictional losses in the brake mechanism itself.

### Examples

**Scenario:** A DC shunt motor is tested using a brake test. The lever arm length ($L$) is 0.3 m. The following readings are taken at rated voltage $V_L = 220$ V.

| $I_L$ (A) | $I_f$ (A) | $W$ (N) | $N$ (RPM) |
| :-------- | :-------- | :------ | :-------- |
| 15        | 2         | 40      | 1450      |
| 20        | 2         | 55      | 1430      |
| 25        | 2         | 70      | 1410      |
| 30        | 2         | 85      | 1385      |

**Calculations for one point (e.g., Sr. No. 2):**

*   $V_L = 220$ V
*   $I_L = 20$ A
*   $I_f = 2$ A
*   $I_a = I_L - I_f = 20 - 2 = 18$ A
*   $W = 55$ N
*   $L = 0.3$ m
*   $T_{sh} = W \times L = 55 \times 0.3 = 16.5$ Nm
*   $N = 1430$ RPM
*   $\omega_m = \frac{2 \pi N}{60} = \frac{2 \pi \times 1430}{60} \approx 149.74$ rad/s
*   $P_{out} = T_{sh} \omega_m = 16.5 \times 149.74 \approx 2470.71$ W
*   $P_{in} = V_L I_L = 220 \times 20 = 4400$ W
*   $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{2470.71}{4400} \times 100\% \approx 56.15\%$

This process would be repeated for all data points to generate the characteristic curves.

### Practice Questions and Exercises

1.  **Question:** A DC shunt motor has a lever arm of 0.3 m. During a brake test, the spring balance reads 30 N and the motor speed is 1200 RPM. Calculate the shaft torque and output power (in Watts) if the input voltage is 230 V and input current is 5 A.
    *   **Answer:**
        *   Shaft Torque ($T_{sh}$) = Spring Balance Reading ($W$) × Lever Arm Length ($L$) = 30 N × 0.3 m = 9 Nm
        *   Output Power ($P_{out}$) = $T_{sh} \times \omega_m = T_{sh} \times \frac{2 \pi N}{60} = 9 \times \frac{2 \pi \times 1200}{60} = 9 \times 80\pi \approx 2261.9$ W

2.  **Question:** Explain why the speed of a DC shunt motor decreases slightly with an increase in load. Refer to the relevant equations.
    *   **Answer:** The speed of a DC motor is given by $N = \frac{k \Phi}{1}(V_a - I_a R_a)$, where $k$ is a constant, $\Phi$ is the field flux, $V_a$ is the armature voltage, $I_a$ is the armature current, and $R_a$ is the armature resistance. For a shunt motor, the field flux $\Phi$ is approximately constant as the field winding is connected across the constant supply voltage. As the load increases, the torque required increases. This leads to an increase in armature current ($I_a$), as torque is proportional to $I_a$ for a constant flux ($T_a \propto \Phi I_a$). With increased $I_a$, the voltage drop across the armature resistance ($I_a R_a$) also increases. Consequently, the back EMF ($E_a = V_a - I_a R_a$) decreases. Since speed ($N$) is directly proportional to back EMF ($N \propto E_a$) for a constant flux, the speed of the motor decreases slightly with an increase in load.

3.  **Question:** What are the typical losses in a DC motor, and how do they affect the efficiency curve?
    *   **Answer:**
        *   **Constant Losses:** These losses are independent of the load and speed. They include:
            *   **Field Copper Loss ($I_f^2 R_{sh}$):** Power dissipated in the shunt field winding. For a shunt motor connected to a constant voltage, this is constant.
            *   **Rotational Losses:** These comprise friction and windage losses. They are generally considered constant, although windage losses can vary slightly with speed.
        *   **Variable Losses:** These losses depend on the load and armature current. They include:
            *   **Armature Copper Loss ($I_a^2 R_a$):** Power dissipated in the armature winding. This varies as the square of the armature current.
            *   **Brush Contact Loss:** Power lost due to resistance at the brush-commutator contact.
        *   **Effect on Efficiency Curve:**
            *   At no load, output power is zero, so efficiency is zero.
            *   As load increases, output power increases faster than the variable losses, so efficiency rises.
            *   At a certain load, variable losses become equal to constant losses. This is the point of maximum efficiency.
            *   Beyond this point, variable losses ($I_a^2 R_a$) increase quadratically with armature current and output power, eventually dominating the output power, causing the efficiency to decrease.

4.  **Question:** Sketch the expected shapes of the following characteristics for a DC shunt motor and briefly explain why:
    *   Torque vs. Armature Current ($T_a$ vs. $I_a$)
    *   Speed vs. Armature Current ($N$ vs. $I_a$)
    *   Efficiency vs. Output Power ($\eta$ vs. $P_{out}$)
    *   **Answer:** (Refer to the "Deriving Electrical Characteristics" section above for explanations of shapes).
        *   $T_a$ vs. $I_a$: Linear, increasing.
        *   $N$ vs. $I_a$: Slightly decreasing, almost flat.
        *   $\eta$ vs. $P_{out}$: Starts at 0, rises to a maximum, then falls.

### Alignment with Course Outcomes

*   **CO2: Sketch the performance characteristics of DC shunt and series motors.**
    *   This module specifically focuses on the brake test of a DC shunt motor, which directly enables the plotting and understanding of its performance characteristics ($T_a$ vs. $I_a$, $N$ vs. $I_a$, $T_{sh}$ vs. $N$, $\eta$ vs. $P_{out}$). The "Deriving Electrical Characteristics" section details these and their expected shapes, fulfilling this outcome at K3 (understanding and applying).
