---
title: "Plot the following characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 3: Brake test on DC shunt motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ac"
status: "completed"
scrapedAt: "2026-05-23T16:15:12.145Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 3: Brake Test on DC Shunt Motor (CO2)

## Topic: Plotting Performance Characteristics of a DC Shunt Motor

This module focuses on conducting a brake test on a DC shunt motor and plotting its crucial performance characteristics. This hands-on experiment allows us to understand how the motor behaves under varying load conditions, which is vital for its practical application and analysis.

### 1. Learning Outcomes Covered

This module directly contributes to understanding and demonstrating **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**. Specifically, by performing the brake test and plotting the characteristics, we will gain a practical understanding of how a DC shunt motor performs under load, fulfilling the K3 (Application) level of this CO.

### 2. Key Concepts and Definitions

*   **DC Shunt Motor:** A DC motor where the field winding is connected in parallel (shunt) with the armature winding. This configuration results in a relatively constant field flux, leading to a nearly constant speed characteristic.
    *   **Armature:** The rotating part of the DC motor that carries the conductors where the back EMF is induced and the torque is developed.
    *   **Field Winding:** The stationary winding that produces the magnetic field. In a shunt motor, it has a large number of turns of thin wire and is connected in parallel with the armature.
*   **Brake Test:** A direct method of loading a DC motor where a mechanical load is applied to the motor shaft using a brake. The torque developed by the motor is measured by observing the force applied at a known radius. This allows for direct measurement of output power and efficiency.
*   **Torque (T):** The rotational force produced by the motor. It is directly proportional to the product of armature current and field flux.
    *   **Developed Torque ($T_d$):** The torque produced internally by the motor due to the interaction of magnetic field and armature current.
    *   **Brake Torque ($T_b$):** The external torque that the motor is required to overcome due to the applied load. In a steady state, $T_d = T_b$.
*   **Speed (N):** The rotational speed of the motor shaft, typically measured in revolutions per minute (RPM).
*   **Armature Current ($I_a$):** The current flowing through the armature winding.
*   **Field Current ($I_f$):** The current flowing through the field winding. In a shunt motor, $I_f$ is relatively constant unless a field rheostat is used.
*   **Line Current ($I_L$):** The total current drawn from the DC supply. For a shunt motor, $I_L = I_a + I_f$.
*   **Input Power ($P_{in}$):** The electrical power consumed by the motor from the supply. $P_{in} = V \times I_L$, where V is the supply voltage.
*   **Output Power ($P_{out}$):** The mechanical power delivered by the motor shaft. $P_{out} = T_b \times \omega$, where $\omega$ is the angular speed in radians per second ($\omega = \frac{2\pi N}{60}$).
*   **Efficiency ($\eta$):** The ratio of output power to input power. $\eta = \frac{P_{out}}{P_{in}} \times 100\%$.
*   **Losses:** The difference between input power and output power. These include:
    *   **Constant Losses:** Losses that are largely independent of the load, such as iron losses (hysteresis and eddy current) and friction and windage losses.
    *   **Variable Losses:** Losses that vary with the load, primarily the copper losses in the armature ($I_a^2 R_a$) and field ($I_f^2 R_f$).

### 3. Experimental Setup and Procedure (Brake Test)

**Objective:** To determine the performance characteristics of a DC shunt motor by conducting a brake test.

**Apparatus Required:**

*   DC Shunt Motor of suitable rating.
*   DC Power Supply (variable voltage).
*   Ammeter (for $I_L$ and $I_a$).
*   Voltmeter (for supply voltage V).
*   Speed Measuring Device (Tachometer or sometimes a stroboscope).
*   Brake mechanism (e.g., band brake).
*   Spring Balance (to measure the force applied by the brake).
*   Wattmeter (optional, for direct measurement of input power).
*   Load resistance for controlling armature current (if needed, though typically load is applied mechanically).

**Circuit Diagram:**

(A typical circuit diagram would show the DC supply connected to the DC shunt motor. The voltmeter is connected across the supply. The ammeter is in series with the line. The field winding is connected in parallel with the armature. The brake is applied to the motor shaft, and a spring balance measures the force at a specific radius from the shaft.)

**Procedure:**

1.  **Connections:** Make all the necessary electrical connections as per the circuit diagram. Ensure the brake mechanism is properly fitted to the motor shaft and the spring balance is attached at a known radius 'r' from the shaft.
2.  **Initial Settings:** Set the DC supply voltage to its rated value and keep it constant throughout the experiment. Adjust the field rheostat (if present) to get the desired no-load speed or rated field current.
3.  **No-Load Reading:** Before applying any load, note down the initial readings of voltmeter (V), line ammeter ($I_L$), armature ammeter ($I_a$), field ammeter ($I_f$), and speed (N). Note that $I_a$ will be the no-load armature current.
4.  **Applying Load:** Gradually apply the brake by tightening the band. This increases the mechanical load on the motor.
5.  **Taking Readings:** For each step of load application, allow the motor to reach a steady state and record the following readings:
    *   Supply Voltage (V) - should remain constant.
    *   Line Current ($I_L$).
    *   Armature Current ($I_a$).
    *   Field Current ($I_f$) - ideally constant for a shunt motor.
    *   Speed (N) - measured by the tachometer.
    *   Spring Balance Reading (S) - this is the force exerted by the brake at radius 'r'.
6.  **Continue Loading:** Continue applying load in steps until the motor reaches its rated or maximum permissible load, or until the speed drops significantly.
7.  **Removing Load:** Finally, remove the load completely and take the no-load readings again to ensure the motor has returned to its original state.

**Calculations:**

For each set of readings, calculate the following:

1.  **Brake Torque ($T_b$):**
    $T_b = (S - S_0) \times r$  (in Nm)
    where:
    *   $S$ is the spring balance reading at a given load.
    *   $S_0$ is the spring balance reading at no load (to account for the weight of the brake arm and the spring balance itself).
    *   $r$ is the radius at which the force is measured (in meters).

2.  **Input Power ($P_{in}$):**
    $P_{in} = V \times I_L$ (in Watts)

3.  **Output Power ($P_{out}$):**
    First, convert speed N (RPM) to angular speed $\omega$ (rad/s):
    $\omega = \frac{2\pi N}{60}$
    Then, $P_{out} = T_b \times \omega$ (in Watts)

4.  **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

5.  **Developed Torque ($T_d$):**
    Ideally, $T_d = T_b$. However, sometimes it's calculated using armature current for comparison: $T_d \propto \Phi I_a$. Assuming constant flux, $T_d \approx k \times I_a$. This relationship can be established from the no-load/light-load conditions.

### 4. Performance Characteristics to Plot

From the calculated values, the following graphs are plotted with the input values on the x-axis and the calculated quantities on the y-axis. The typical convention is to plot characteristics against **Torque** or **Armature Current** as the independent variable.

**Commonly Plotted Characteristics:**

1.  **Speed vs. Torque ($N$ vs. $T_b$)**
    *   **X-axis:** Brake Torque ($T_b$) (Nm)
    *   **Y-axis:** Speed (N) (RPM)
    *   **Expected Trend:** For a DC shunt motor, the speed drops slightly as the torque increases due to the increase in armature voltage drop ($I_a R_a$).

2.  **Armature Current vs. Torque ($I_a$ vs. $T_b$)**
    *   **X-axis:** Brake Torque ($T_b$) (Nm)
    *   **Y-axis:** Armature Current ($I_a$) (Amps)
    *   **Expected Trend:** Armature current is directly proportional to the torque produced (approximately $T \propto I_a$). Thus, this graph should be nearly linear.

3.  **Line Current vs. Torque ($I_L$ vs. $T_b$)**
    *   **X-axis:** Brake Torque ($T_b$) (Nm)
    *   **Y-axis:** Line Current ($I_L$) (Amps)
    *   **Expected Trend:** Since $I_L = I_a + I_f$ and $I_f$ is constant, $I_L$ will also increase roughly linearly with torque as $I_a$ increases.

4.  **Efficiency vs. Torque ($\eta$ vs. $T_b$)**
    *   **X-axis:** Brake Torque ($T_b$) (Nm)
    *   **Y-axis:** Efficiency ($\eta$) (%)
    *   **Expected Trend:** Efficiency starts at zero at no load, increases with load, reaches a maximum at some intermediate load, and then decreases at higher loads. This is because copper losses ($I_a^2 R_a$) increase with load, eventually dominating the output power.

5.  **Output Power vs. Torque ($P_{out}$ vs. $T_b$)**
    *   **X-axis:** Brake Torque ($T_b$) (Nm)
    *   **Y-axis:** Output Power ($P_{out}$) (Watts)
    *   **Expected Trend:** Output power increases linearly with torque initially ($P_{out} = T_b \omega$, and $\omega$ is relatively constant).

### 5. Incorporating Textbook Content

**P.S. Bimbhra - Electrical Machinery:**
*   Chapter on "DC Motors": Discusses the operating principles and characteristics of DC shunt motors.
*   **Section on Speed-Torque Characteristics:** Bimbhra would describe how armature resistance drop causes a slight decrease in speed with increasing load.
*   **Section on Torque-Armature Current Characteristics:** Emphasizes the direct proportionality between developed torque and armature current, assuming constant flux.
*   **Section on Efficiency:** Explains how efficiency varies with load, peaking at a certain load due to the interplay of constant and variable losses. The concept of "break-down torque" (though not directly measured in a brake test to its maximum) is also relevant to understanding torque limits.

**D.P. Kothari & I.J. Nagrath - Electric Machines:**
*   Chapter on "DC Motors and Generators": Covers the theory of DC motors, including shunt motors.
*   **Analysis of DC Shunt Motor Performance:** They would detail the equations relating speed, torque, and current.
*   **Load Test/Brake Test:** The text would provide detailed procedures and expected results for load tests, including how to calculate torque from brake readings.
*   **Efficiency and Losses:** Discussion on various losses in DC machines (shunt, series, stray losses) and their contribution to the overall efficiency curve. The point of maximum efficiency where variable losses equal constant losses is a key takeaway.

**Example from Textbooks:**

Both textbooks would typically present a table of experimental data from a brake test and show the corresponding plotted curves. For instance, they might show a graph of Speed vs. Torque, where the curve is almost horizontal but with a slight downward slope, indicating good speed regulation for a shunt motor. They also illustrate the efficiency curve peaking at an intermediate load, highlighting that a DC shunt motor is most efficient at a certain operating point.

### 6. Important Points to Remember

*   **Constant Supply Voltage:** Ensure the supply voltage remains constant throughout the experiment.
*   **Constant Field Current:** For a shunt motor, the field current ($I_f$) should ideally be constant. If a field rheostat is used for starting or speed control, ensure it is set to a value that provides the desired field strength and is not varied during the load test.
*   **Steady State:** Allow the motor to reach a steady state at each load point before taking readings. This means speed and currents should stabilize.
*   **Spring Balance Zero Correction ($S_0$):** Always account for the zero correction of the spring balance.
*   **Radius Measurement:** Accurately measure the radius 'r' at which the spring balance is applied.
*   **Units:** Be consistent with units (e.g., Nm for torque, rad/s for angular speed, Watts for power).
*   **Motor Overheating:** Do not overload the motor excessively to prevent overheating.
*   **Safety:** Follow all safety precautions when working with electrical equipment.

### 7. Practice Questions and Exercises

**Question 1:** A brake test was conducted on a DC shunt motor. The following data was obtained:
*   Supply Voltage (V) = 220 V
*   Radius of brake pulley (r) = 0.15 m
*   Spring balance zero correction ($S_0$) = 0.5 kgf (convert to Newtons: 1 kgf ≈ 9.81 N)

| Load Step | $I_L$ (A) | $I_a$ (A) | Speed N (RPM) | Spring Balance S (kgf) |
| :-------- | :-------- | :-------- | :------------ | :--------------------- |
| 1 (No Load) | 1.5       | 1.3       | 1500          | 0.5                    |
| 2         | 4.0       | 3.7       | 1450          | 3.0                    |
| 3         | 6.5       | 6.1       | 1400          | 5.5                    |
| 4         | 8.8       | 8.3       | 1340          | 7.8                    |
| 5         | 11.0      | 10.5      | 1280          | 10.0                   |

**(a)** Calculate the Brake Torque ($T_b$) for each load step.
**(b)** Calculate the Input Power ($P_{in}$) for each load step.
**(c)** Calculate the Output Power ($P_{out}$) for each load step.
**(d)** Calculate the Efficiency ($\eta$) for each load step.
**(e)** Plot the following characteristics:
    *   Speed vs. Torque ($N$ vs. $T_b$)
    *   Efficiency vs. Torque ($\eta$ vs. $T_b$)
    *   Armature Current vs. Torque ($I_a$ vs. $T_b$)

**Answer Hints:**

**(a) Brake Torque Calculation:**
*   Convert spring balance readings to Newtons: $S_{Newtons} = S_{kgf} \times 9.81$
*   $T_b = (S_{Newtons} - S_0_{Newtons}) \times r$

**Example for Load Step 2:**
*   $S_{Newtons} = 3.0 \times 9.81 = 29.43$ N
*   $S_0_{Newtons} = 0.5 \times 9.81 = 4.905$ N
*   $T_b = (29.43 - 4.905) \times 0.15 = 24.525 \times 0.15 = 3.679$ Nm

**(b) Input Power Calculation:**
*   $P_{in} = V \times I_L$

**Example for Load Step 2:**
*   $P_{in} = 220 \times 4.0 = 880$ W

**(c) Output Power Calculation:**
*   $\omega = \frac{2\pi N}{60}$
*   $P_{out} = T_b \times \omega$

**Example for Load Step 2:**
*   $\omega = \frac{2\pi \times 1450}{60} = 151.84$ rad/s
*   $P_{out} = 3.679 \times 151.84 = 558.65$ W

**(d) Efficiency Calculation:**
*   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

**Example for Load Step 2:**
*   $\eta = \frac{558.65}{880} \times 100\% = 63.48\%$

**(e) Plotting:** Use the calculated values of $T_b$, $N$, $I_a$, and $\eta$ to plot the respective graphs.

**Question 2:** What are the advantages of conducting a brake test on a DC motor?
**Answer:**
*   Direct measurement of output torque and power.
*   Allows for plotting of all important performance characteristics under actual load conditions.
*   Provides a direct measure of motor efficiency.
*   Can simulate various load conditions from no-load to overload.

**Question 3:** Why is the speed of a DC shunt motor expected to drop slightly with an increase in load?
**Answer:** As the load increases, the armature current ($I_a$) increases. This leads to a larger voltage drop across the armature resistance ($I_a R_a$). Since the back EMF ($E_b = V - I_a R_a$) is proportional to speed and flux ($E_b \propto \Phi N$), and the flux in a shunt motor is relatively constant, an increase in $I_a R_a$ causes a decrease in $E_b$, which in turn leads to a slight decrease in speed (N).

### 8. Connecting to Course Outcomes

*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    *   This entire module is dedicated to performing the brake test and plotting these characteristics for a DC shunt motor. The practical execution and analysis of the data directly address this CO at the K3 (Application) level, allowing students to apply theoretical knowledge to a practical scenario.
