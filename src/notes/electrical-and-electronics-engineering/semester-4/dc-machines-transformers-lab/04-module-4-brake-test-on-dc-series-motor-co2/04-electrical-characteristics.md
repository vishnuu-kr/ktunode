---
title: "Electrical characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 4: Brake test on DC series motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b4"
status: "completed"
scrapedAt: "2026-05-23T16:15:17.786Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 4: Brake Test on DC Series Motor (CO2)

## Topic: Electrical Characteristics

This module focuses on understanding the behavior and performance of a DC series motor through a brake test. We will specifically analyze its electrical characteristics, which are crucial for determining its suitability for various applications. This aligns with **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**.

---

### 1. Introduction to DC Series Motors

A DC series motor is characterized by the field winding being connected in series with the armature winding. This series connection leads to a unique torque-speed relationship, making them suitable for applications requiring high starting torque.

**Key Features:**
*   **High Starting Torque:** Due to the field flux being proportional to the armature current (which is high at start), the motor develops a very strong starting torque.
*   **Speed Varies with Load:** The speed of a series motor is highly dependent on the load. As the load increases, the current increases, the flux increases, and consequently, the speed decreases. Conversely, with a decrease in load, the current decreases, flux decreases, and speed increases significantly.
*   **Cannot Run on No-Load:** If a DC series motor is operated without any load, the armature current will be very small, leading to a very weak field flux. According to the torque equation ($T \propto \phi I_a$), the torque will be extremely low. The speed is inversely proportional to the flux ($N \propto \frac{\phi}{T}$), so with a very weak flux and low torque, the motor will accelerate to dangerously high speeds, potentially causing self-destruction. **Therefore, a DC series motor must never be run on no-load.**

**Reference:**
*   P.S. Bimbhra, "Electrical Machinery," Chapter 5: DC Motors.
*   D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 7: DC Motors.

---

### 2. The Brake Test for a DC Series Motor

The brake test is a direct method for determining the performance characteristics of a DC motor under varying load conditions. It involves applying a mechanical load (using a brake) to the motor shaft and measuring the electrical input and mechanical output quantities.

**Objective of the Brake Test:**
To obtain the following characteristics for a DC series motor:
*   Torque vs. Speed
*   Armature Current vs. Speed
*   Torque vs. Armature Current
*   Efficiency vs. Load (or Torque)

---

### 3. Experimental Setup and Procedure

**A. Apparatus Required:**

1.  **DC Series Motor:** The motor under test.
2.  **DC Power Supply:** Variable DC voltage source to control the motor speed.
3.  **Rheostats:**
    *   **Armature Rheostat (Starting Rheostat):** Used to limit the initial starting current.
    *   **Field Rheostat (Not required for series motor, but often a variable DC source for other tests):** In a series motor, the field is inherently connected in series.
4.  **Ammeter (2):** One to measure armature current ($I_a$) and another to measure line current ($I_L$). For a series motor, $I_a = I_L$.
5.  **Voltmeter:** To measure the voltage across the armature terminals ($V$).
6.  **Speed Indicator (Tachometer/Stroboscope):** To measure the motor speed ($N$) in RPM.
7.  **Brake Drum:** A friction brake mechanism attached to the motor shaft.
8.  **Spring Balance (2):** To measure the pull at two points on the brake band to determine the torque.
9.  **Loading Arrangement:** To adjust the tension of the brake band and thus the load.
10. **Connecting Wires and Power Cable.**

**B. Circuit Diagram:**

(A typical circuit diagram would show the DC supply connected to the armature and field windings in series, with an ammeter in the circuit, a voltmeter across the armature terminals, and the motor shaft connected to the brake drum.)

**C. Procedure:**

1.  **Connections:** Make the necessary electrical connections as per the circuit diagram. Ensure the DC supply is connected correctly. Connect the brake mechanism to the motor shaft.
2.  **No-Load Check:** Before applying any load, briefly start the motor with minimum armature resistance to ensure it runs smoothly.
3.  **Apply Minimum Load:** Start the motor with the armature rheostat set to its maximum resistance to limit the starting current. Once the motor starts rotating, gradually reduce the armature resistance to achieve the desired starting speed.
4.  **Loading the Motor:** Apply a small load by slightly tightening the brake band.
5.  **Taking Readings:** Once the motor settles to a stable speed under the applied load, record the following readings:
    *   Voltage across armature terminals ($V$) in Volts.
    *   Armature current ($I_a$) in Amperes.
    *   Speed ($N$) in RPM.
    *   Spring balance readings ($S_1$ and $S_2$) in Newtons.
6.  **Increase Load:** Gradually increase the load by further tightening the brake band and repeat step 5 for several load points. Ensure you cover a range of speeds from near maximum to a minimum safe operating speed.
7.  **Safety:** As the load increases, the speed will decrease. Be mindful of the minimum speed at which the motor can operate safely. Do not attempt to run the motor at extremely low speeds without sufficient field flux, as this can lead to dangerous over-speeding if the load is suddenly removed.
8.  **Shutting Down:** After taking all readings, remove the load gradually by loosening the brake band, then switch off the DC supply.

---

### 4. Calculations and Data Analysis

**A. Calculating Torque:**

The torque is calculated from the readings of the spring balances measuring the pull on the brake band.

*   Let $d$ be the effective diameter of the brake drum in meters.
*   The effective radius of the brake drum is $r = d/2$ meters.
*   The net braking force (tangential force at the brake drum) is $F_{net} = S_1 - S_2$ Newtons, where $S_1$ is the reading on the side resisting rotation and $S_2$ is the reading on the side assisting rotation. If only one spring balance is used, $F_{net}$ is its reading.
*   The mechanical output torque ($T_{out}$) is calculated as:
    $T_{out} = F_{net} \times r$ Newton-meters (Nm).

**B. Calculating Input Power:**

The electrical input power ($P_{in}$) to the motor is given by:
$P_{in} = V \times I_a$ Watts (W)

**C. Calculating Output Power:**

The mechanical output power ($P_{out}$) is calculated using the output torque and speed:
$P_{out} = \frac{2 \pi N T_{out}}{60}$ Watts (W)

**D. Calculating Efficiency:**

The efficiency ($\eta$) of the motor at each load point is calculated as:
$\eta = \frac{P_{out}}{P_{in}} \times 100\%$

**E. Calculating Various Characteristics:**

Using the recorded and calculated data, we can plot the following electrical characteristics:

1.  **Torque vs. Speed ($T_{out}$ vs. $N$):**
    *   Plot $T_{out}$ on the y-axis and $N$ on the x-axis.
    *   **Expected Shape:** This curve will show a high torque at low speeds and a decreasing torque as speed increases. This is characteristic of a series motor. The curve is typically hyperbolic in shape.

2.  **Armature Current vs. Speed ($I_a$ vs. $N$):**
    *   Plot $I_a$ on the y-axis and $N$ on the x-axis.
    *   **Expected Shape:** As speed decreases, armature current increases, and vice-versa. The curve will show high current at low speeds and lower current at higher speeds.

3.  **Torque vs. Armature Current ($T_{out}$ vs. $I_a$):**
    *   Plot $T_{out}$ on the y-axis and $I_a$ on the x-axis.
    *   **Expected Shape:** For a series motor, torque is approximately proportional to the square of the armature current ($T \propto \phi I_a$ and $\phi \propto I_a$, so $T \propto I_a^2$) when the magnetic circuit is not saturated. Thus, the curve is expected to be a parabola-like shape, originating from the origin.

4.  **Efficiency vs. Load (or Torque) ($\eta$ vs. Load/Torque):**
    *   Plot $\eta$ on the y-axis and load (either output power or output torque) on the x-axis.
    *   **Expected Shape:** The efficiency will be zero at no load (or very low load). It will increase with increasing load, reach a maximum at a certain load (where losses are minimized relative to output), and then slightly decrease at very heavy loads due to increased copper losses.

**Reference:**
*   P.S. Bimbhra, "Electrical Machinery," Chapter 5: DC Motors - Performance Characteristics.
*   D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 7: DC Motors - Characteristic Curves.

---

### 5. Key Concepts and Definitions

*   **DC Series Motor:** A DC motor where the field winding is connected in series with the armature winding.
*   **Torque (T):** The rotational force produced by the motor. For a DC motor, $T = K \phi I_a$, where $K$ is a constant, $\phi$ is the field flux, and $I_a$ is the armature current.
*   **Speed (N):** The rotational speed of the motor shaft, usually measured in revolutions per minute (RPM). For a DC motor, $N = \frac{V - I_a R_a}{K' \phi}$, where $V$ is applied voltage, $R_a$ is armature resistance, and $K'$ is another constant.
*   **Brake Test:** A direct loading test to determine motor performance characteristics.
*   **Spring Balance:** A device used to measure force (tension or compression). In the brake test, they measure the tangential force at the brake drum.
*   **Output Power ($P_{out}$):** The mechanical power delivered by the motor shaft. $P_{out} = T_{out} \omega$, where $\omega = \frac{2 \pi N}{60}$ is the angular speed in rad/s.
*   **Input Power ($P_{in}$):** The electrical power supplied to the motor. $P_{in} = V \times I_a$.
*   **Efficiency ($\eta$):** The ratio of output power to input power, expressed as a percentage. $\eta = \frac{P_{out}}{P_{in}} \times 100\%$.
*   **Electrical Characteristics:** Plots that describe the relationship between various electrical parameters (speed, current, torque) and mechanical output.

---

### 6. Important Points to Remember

*   **NEVER run a DC series motor on no-load.** The speed can become dangerously high.
*   Always use a starting (armature) rheostat to limit the initial inrush of current.
*   Ensure the brake mechanism is functioning correctly and the drum is clean for accurate torque measurements.
*   Take readings smoothly, allowing the motor to stabilize at each load point.
*   The effective diameter of the brake drum ($d$) is crucial for accurate torque calculation. Measure it carefully.
*   The direction of rotation of the motor will influence which spring balance reading is higher. The one resisting rotation will be higher.
*   The torque-speed characteristic is the most defining feature of a DC series motor.

---

### 7. Practice Questions and Exercises

**Question 1:**
A DC series motor is tested using a brake test. The following readings are obtained at a particular load:
*   Voltage ($V$) = 230 V
*   Armature Current ($I_a$) = 15 A
*   Speed ($N$) = 1200 RPM
*   Spring balance readings ($S_1$, $S_2$) = 25 N, 5 N
*   Effective diameter of the brake drum ($d$) = 0.2 m

Calculate:
a) Output torque ($T_{out}$)
b) Output power ($P_{out}$)
c) Input power ($P_{in}$)
d) Efficiency ($\eta$)

**Answer 1:**
a) Radius ($r$) = $d/2$ = 0.2 m / 2 = 0.1 m
   Net force ($F_{net}$) = $S_1 - S_2$ = 25 N - 5 N = 20 N
   Output Torque ($T_{out}$) = $F_{net} \times r$ = 20 N $\times$ 0.1 m = **2 Nm**

b) Angular speed ($\omega$) = $\frac{2 \pi N}{60}$ = $\frac{2 \pi \times 1200}{60}$ = $40\pi$ rad/s $\approx$ 125.66 rad/s
   Output Power ($P_{out}$) = $T_{out} \times \omega$ = 2 Nm $\times$ 125.66 rad/s = **251.32 W**

c) Input Power ($P_{in}$) = $V \times I_a$ = 230 V $\times$ 15 A = **3450 W**

d) Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}} \times 100\%$ = $\frac{251.32}{3450} \times 100\% \approx$ **7.3%**

*(Note: The efficiency in this single-point calculation is quite low. This implies the motor is operating at a very light load, where fixed losses dominate. For a typical series motor, you would expect higher efficiencies at rated loads.)*

**Question 2:**
Describe why a DC series motor exhibits a high starting torque. Relate this to its fundamental torque equation.

**Answer 2:**
The torque developed by a DC motor is given by the equation $T = K \phi I_a$. In a DC series motor, the field winding is connected in series with the armature. Therefore, the field current is the same as the armature current ($I_f = I_a$).
The field flux ($\phi$) is directly proportional to the field current (assuming no magnetic saturation), so $\phi \propto I_f$. Since $I_f = I_a$, we have $\phi \propto I_a$.
Substituting this into the torque equation, we get $T \propto I_a \times I_a$, or $T \propto I_a^2$.
At the instant of starting, the armature current ($I_a$) is at its maximum value (limited by the starting resistance). Because the torque is proportional to the square of the armature current, the motor develops a very high starting torque, making it suitable for applications like traction and cranes where starting heavy loads is essential.

**Question 3:**
Sketch the typical characteristic curves for a DC series motor:
a) Torque vs. Speed
b) Torque vs. Armature Current

**Answer 3:**
*(A detailed description of the shape of these curves is provided in Section 4.E of these notes. For a practice question, the student would draw these graphs based on that description.)*

**Exercise:**
Conduct the brake test on a DC series motor in the lab. Record readings for at least 5 different load points. Calculate the output torque, input power, output power, and efficiency for each point. Plot the following characteristics:
1. Torque vs. Speed
2. Armature Current vs. Speed
3. Torque vs. Armature Current
4. Efficiency vs. Load (use output power or torque as load)

Analyze the shapes of these curves and compare them with the expected theoretical characteristics of a DC series motor.

---

### 8. Connection to Course Outcomes (CO2)

This entire module is directly aimed at fulfilling **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**. By performing the brake test on a DC series motor and analyzing the acquired data, students will be able to:

*   **Understand the fundamental principles** governing the operation of a DC series motor.
*   **Experimentally determine** the relationships between key electrical and mechanical parameters (torque, speed, current).
*   **Visualize these relationships** by plotting characteristic curves.
*   **Develop the ability to sketch** these curves from theoretical understanding and experimental observation.
*   **Interpret the meaning** of these curves in the context of motor performance and application suitability.

The knowledge gained here, specifically about sketching and interpreting characteristics, is fundamental for comparing and contrasting different types of DC motors, which is a core aspect of understanding electric machines.
