---
title: "Mechanical characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 4: Brake test on DC series motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b5"
status: "completed"
scrapedAt: "2026-05-23T16:15:18.535Z"
---
# DC Machines & Transformers Lab: Module 4 - Brake Test on DC Series Motor

## Topic: Mechanical Characteristics

**Course Outcome (CO2):** Sketch the performance characteristics of DC shunt and series motors. (Knowledge Level: K3)

**Learning Outcomes:**

*   To determine the mechanical characteristics of a DC series motor from the brake test data.
*   To analyze the relationship between speed, torque, and current for a DC series motor.
*   To understand the practical implications of these characteristics in various applications.

---

### 1. Introduction to DC Series Motors

A DC series motor is characterized by its field winding being connected in series with the armature winding. This series connection results in the same current flowing through both windings.

**Key Concepts:**

*   **Series Connection:** Field flux is directly proportional to the armature current.
*   **Torque Production:** Torque ($T$) in a DC motor is generally proportional to the product of armature current ($I_a$) and field flux ($\Phi$).
    $T \propto I_a \Phi$
*   **For a Series Motor:** Since $\Phi \propto I_a$, the torque becomes:
    $T \propto I_a^2$

**Reference (Bimbhra, P.S., 7th edition, Chapter 6: DC Series Motor):** Bimbhra discusses the fundamental operating principles of DC series motors, emphasizing the series connection of field and armature windings and its impact on torque-speed characteristics.

---

### 2. The Brake Test for DC Series Motors

The brake test is a direct method of loading a DC motor to determine its performance characteristics under various load conditions. It involves applying a mechanical load (using a brake band and a pulley) to the motor shaft and measuring the corresponding electrical and mechanical parameters.

**Objectives of the Brake Test:**

*   To obtain the torque-speed characteristic curve.
*   To obtain the torque-output power curve.
*   To obtain the efficiency characteristic curve (though this module focuses on mechanical characteristics).

**Experimental Setup:**

*   DC Series Motor
*   DC Power Supply
*   Rheostats (for armature and field control, if applicable, though for a series motor, current control is paramount)
*   Ammeter (to measure armature current, $I_a$)
*   Voltmeter (to measure armature voltage, $V_a$)
*   Tachometer (to measure speed, $N$)
*   Brake mechanism (pulley, brake band, spring balance, weights)
*   Wattmeter (to measure input power)

---

### 3. Measuring Torque in a Brake Test

The torque developed by the motor is measured indirectly using the brake mechanism.

**Procedure for Torque Measurement:**

1.  A brake band is wrapped around a pulley attached to the motor shaft.
2.  One end of the brake band is attached to a fixed support or a spring balance.
3.  The other end is attached to a lever arm, which is typically balanced by weights or a spring balance.
4.  When the motor is running, the brake is tightened, creating a frictional torque that opposes the motor's rotation.
5.  The applied load torque is determined by measuring the force exerted by the brake band on the lever arm.

**Calculations for Torque:**

*   Let $W$ be the weight applied to the lever arm (in Newtons).
*   Let $S$ be the reading of the spring balance on the other side of the lever arm (in Newtons).
*   Let $L$ be the effective length of the lever arm (in meters) from the center of the shaft to the point where the force is applied.
*   The net force acting tangentially on the pulley is $(W - S)$.
*   The braking torque (or load torque), $T_L$, is given by:

    $T_L = (W - S) \times L$  (in N-m)

**Important Consideration:** The torque measured here is the *load torque* or *braking torque*, which is the output torque of the motor when it is supplying this mechanical load.

---

### 4. Mechanical Characteristics of a DC Series Motor

Mechanical characteristics are graphical representations of how the motor's speed, torque, and output power vary with the armature current or load. The key mechanical characteristics are:

*   **Torque-Speed Characteristic:** Plots the relationship between the motor's speed ($N$) and the output torque ($T_L$).
*   **Torque-Output Power Characteristic:** Plots the relationship between the output torque ($T_L$) and the output power ($P_{out}$).

**Expected Shape of Characteristics:**

*   **Torque-Speed Characteristic:**
    *   At low currents (and thus low torques), the series motor runs at very high speeds due to the $T \propto I_a^2$ relationship.
    *   As the current increases, the torque increases rapidly (quadratically).
    *   The speed decreases sharply as the torque increases. This is a highly desirable characteristic for applications requiring high starting torque and where the load is always present.
    *   **Equation:** The approximate relationship can be derived from basic motor equations. For a series motor, $V = E_b + I_a R_{se}$ and $E_b = k \Phi N$. Since $\Phi \propto I_a$, $E_b = k' I_a N$.
        $V = k' I_a N + I_a R_{se}$
        $N = \frac{V - I_a R_{se}}{k' I_a}$
        And $T_L \approx k T_a^2$ (assuming $\Phi \propto I_a$ and ignoring saturation).
        So, as $T_L$ increases, $I_a$ increases, and $N$ decreases rapidly.

*   **Torque-Output Power Characteristic:**
    *   Output power ($P_{out}$) is the product of torque and angular speed: $P_{out} = T_L \omega = T_L \frac{2\pi N}{60}$.
    *   At low torques (low speeds), the output power is low because the speed is low.
    *   As the torque increases, the speed decreases, but the product of torque and speed might initially increase.
    *   Eventually, as the torque becomes very high and the speed drops significantly, the output power will start to decrease.
    *   There will be a maximum output power at some intermediate torque value.

**Reference (Nagrath & Kothari, 5th edition, Chapter 8: DC Motors):** Nagrath and Kothari provide a detailed analysis of DC motor characteristics, including the torque-speed curves for series motors. They explain the high starting torque and rapid speed drop with increasing load.

---

### 5. Procedure for Brake Test (Focusing on Mechanical Characteristics)

1.  **Setup:** Connect the DC series motor to the DC supply and the brake mechanism to the motor shaft. Ensure all measuring instruments (ammeter, voltmeter, tachometer) are correctly connected.
2.  **No-Load:** With no load applied (i.e., brake released), switch on the supply. The motor will run at a very high speed. **Caution:** Never run a DC series motor on no-load as it can over-speed and damage itself. Apply a small load immediately after starting.
3.  **Loading:** Gradually apply the brake by tightening the brake band. This increases the load on the motor.
4.  **Data Recording:** For each step of load application:
    *   Record the armature current ($I_a$) from the ammeter.
    *   Record the applied voltage ($V_a$) from the voltmeter.
    *   Record the speed ($N$) from the tachometer.
    *   Record the weights ($W$) and spring balance reading ($S$) for the brake mechanism.
5.  **Range:** Continue taking readings until the motor is loaded to its rated capacity or beyond, as required by the experiment.
6.  **Shutdown:** After taking the last reading, gradually release the brake, then switch off the supply.

---

### 6. Data Analysis and Graphing

**Calculations from Recorded Data:**

*   **Load Torque ($T_L$):**
    $T_L = (W - S) \times L$ (where $L$ is the lever arm length, usually measured in meters). Ensure units are consistent (e.g., $W$ and $S$ in Newtons).
*   **Output Power ($P_{out}$):**
    $P_{out} = T_L \times \omega$
    where $\omega = \frac{2\pi N}{60}$ (angular speed in rad/sec).
    $P_{out} = T_L \times \frac{2\pi N}{60}$ (in Watts)

**Plotting the Mechanical Characteristics:**

*   **Torque-Speed Curve:**
    *   X-axis: Load Torque ($T_L$) (N-m)
    *   Y-axis: Speed ($N$) (RPM)
    *   Plot the recorded ($T_L$, $N$) data points and draw a smooth curve through them.

*   **Torque-Output Power Curve:**
    *   X-axis: Load Torque ($T_L$) (N-m)
    *   Y-axis: Output Power ($P_{out}$) (Watts)
    *   Plot the calculated ($T_L$, $P_{out}$) data points and draw a smooth curve.

---

### 7. Interpretation of Mechanical Characteristics

**Torque-Speed Curve:**

*   **High Starting Torque:** The curve starts at a high speed for zero torque (in theory, though practically it's never run at no load). As load torque is applied, the speed drops drastically, indicating high starting torque.
*   **Inverse Relationship:** A clear inverse relationship between speed and torque is evident. As torque increases, speed decreases rapidly.
*   **Saturation:** The torque-speed curve might show some deviation from the ideal $T \propto I_a^2$ relationship at higher currents due to magnetic saturation in the field poles. Saturation reduces the flux, and thus the torque doesn't increase as rapidly as $I_a^2$. This can cause the speed to drop less steeply at very high loads compared to lower loads.

**Torque-Output Power Curve:**

*   **Initial Rise:** As torque increases from zero, output power initially increases because the speed reduction doesn't negate the torque increase.
*   **Maximum Power:** The output power reaches a maximum at some intermediate torque.
*   **Subsequent Decrease:** Beyond the point of maximum power, the rapid decrease in speed causes the output power to decline, even though torque might still be increasing.

**Applications based on Characteristics:**

DC series motors are ideal for applications where:
*   **High starting torque is required:** Traction (electric trains, trams), cranes, hoists, electric vehicles, elevators.
*   **Load is always present:** The motor will not run away if the load is accidentally removed.
*   **Speed variation with load is acceptable:** The speed naturally adjusts to the load.

**Reference (Bimbhra, P.S., 7th edition, Chapter 6: DC Series Motor):** Bimbhra discusses the application of series motors based on their characteristics, highlighting their suitability for heavy-duty starting.

---

### 8. Important Points to Remember

*   **Never run a DC series motor on no-load.** The speed will rise to dangerous levels. Always ensure a minimum load is connected before starting.
*   The lever arm length ($L$) must be accurately measured.
*   Ensure the brake band is correctly aligned and adjusted for smooth operation.
*   Allow the motor to reach steady-state at each load point before taking readings.
*   Magnetic saturation in the field poles will affect the linearity of the torque-current relationship ($T \propto I_a^2$). This will be reflected in the shape of the torque-speed curve.
*   The mechanical characteristics are crucial for selecting the appropriate DC series motor for a given application.

---

### 9. Practice Questions and Answers

**Question 1:** What is the primary characteristic that makes a DC series motor suitable for traction applications?

**Answer:** The high starting torque characteristic. The torque is approximately proportional to the square of the armature current ($T \propto I_a^2$), ensuring strong initial acceleration when the load is heaviest.

**Question 2:** If a DC series motor is accidentally disconnected from its load while running, what is the likely outcome? Explain why.

**Answer:** The motor will experience a dangerous over-speeding. This is because the load torque ($T_L$) is directly related to the armature current ($I_a$) and consequently the field flux ($\Phi$). As the load is removed, $I_a$ drops significantly. Since $\Phi \propto I_a$, the flux also decreases. The back EMF ($E_b$) is proportional to $\Phi N$. For the motor to sustain a minimal no-load speed, the back EMF must be close to the supply voltage. With a significantly reduced flux, the speed ($N$) must increase to a very high value to generate sufficient back EMF.

**Question 3:** In a brake test, you measure the following values: Applied weight ($W$) = 10 kg, Spring balance reading ($S$) = 2 kg, Lever arm length ($L$) = 0.5 m. Calculate the load torque developed by the motor. (Assume $g = 9.81 \, m/s^2$)

**Answer:**
First, convert weights to forces in Newtons:
$W = 10 \, kg \times 9.81 \, m/s^2 = 98.1 \, N$
$S = 2 \, kg \times 9.81 \, m/s^2 = 19.62 \, N$

Net force = $W - S = 98.1 \, N - 19.62 \, N = 78.48 \, N$

Load Torque ($T_L$) = Net force $\times$ Lever arm length
$T_L = 78.48 \, N \times 0.5 \, m = 39.24 \, N-m$

**Question 4:** Sketch the expected Torque-Speed characteristic curve for a DC series motor. Label the axes.

**Answer:**
(Sketch a graph with Speed (N) on the Y-axis and Torque (TL) on the X-axis. The curve should start at a high speed for low torque and decrease sharply as torque increases, indicating a non-linear inverse relationship. It should be a downward sloping curve.)

**Question 5:** Why is the torque-speed curve for a series motor steeper at lower load currents compared to higher load currents (before saturation)?

**Answer:** This is because the torque is approximately proportional to the square of the armature current ($T \propto I_a^2$). At lower currents, even a small increase in current leads to a larger percentage increase in torque. Since speed is inversely related to flux, and flux is directly related to current (in the linear region), a change in current has a more pronounced effect on speed when the current is low. As current increases, the relationship $T \propto I_a^2$ holds, but the rate of change of speed with torque becomes less steep as the motor approaches saturation or higher load conditions.

---

This detailed note covers the essential aspects of mechanical characteristics of a DC series motor as determined by the brake test, aligning with the specified learning outcomes and course objectives.
