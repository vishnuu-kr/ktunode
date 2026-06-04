---
title: "Mechanical characteristics"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 3: Brake test on DC shunt motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360af"
status: "completed"
scrapedAt: "2026-05-23T16:15:14.726Z"
---
# DC Machines & Transformers Lab: Module 3 - Brake Test on DC Shunt Motor

## Topic: Mechanical Characteristics

**Course Outcome Addressed:** CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)

**Learning Outcomes for this Topic:**

*   To understand the concept of mechanical characteristics of a DC shunt motor.
*   To plot and analyze the torque-speed characteristic of a DC shunt motor.
*   To plot and analyze the torque-efficiency characteristic of a DC shunt motor.
*   To plot and analyze the speed-efficiency characteristic of a DC shunt motor.
*   To understand the effect of load on the speed, torque, and efficiency of a DC shunt motor.

---

### 1. Introduction to Mechanical Characteristics of DC Shunt Motors

Mechanical characteristics of a DC motor are curves that show the relationship between different operating parameters like speed, torque, and efficiency under varying load conditions. For a DC shunt motor, these characteristics are crucial for understanding its performance and suitability for various applications. The brake test is a direct method to determine these characteristics by applying a mechanical load to the motor and measuring the relevant electrical and mechanical quantities.

**Key Concept:** The mechanical characteristics provide a graphical representation of how the motor's speed, torque, and efficiency behave as the mechanical load on the motor shaft changes.

**Reference:**
*   **Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers.** Chapter on DC Motors, specifically discussing performance characteristics.
*   **Kothari, D.P. & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill.** Chapter on DC Motors, focusing on speed-torque characteristics.

---

### 2. The Brake Test Setup

The brake test involves loading the DC shunt motor using a brake mechanism (e.g., a rope brake or a band brake) fitted on the motor shaft. The setup typically includes:

*   **DC Shunt Motor:** The motor under test.
*   **Dynamometer (Brake Mechanism):** Used to apply a controllable mechanical load. This usually consists of a pulley, a band, and a spring balance or weights to measure the braking torque.
*   **Tachometer:** To measure the motor speed (RPM).
*   **Voltmeter:** To measure the armature voltage ($V_a$).
*   **Ammeter:** To measure the armature current ($I_a$) and field current ($I_f$).
*   **Rheostats:** For controlling armature voltage (if applicable, though for shunt motor, it's usually connected to a constant supply) and for adjusting the field current to control speed.

**Princ of Operation:** The brake applies a tangential force ($F$) at a radius ($r$) from the motor shaft. This tangential force creates a braking torque ($T_b$) that opposes the motor's rotation. The output torque of the motor ($T_{out}$) is equal and opposite to this braking torque.

---

### 3. Key Parameters Measured and Calculated

During the brake test, the following parameters are measured and calculated:

*   **Supply Voltage ($V_s$):** Usually constant for a shunt motor.
*   **Armature Voltage ($V_a$):** Measured across the armature terminals (often assumed to be $V_s$ if no series resistance is used).
*   **Armature Current ($I_a$):** Measured by an ammeter in series with the armature.
*   **Field Current ($I_f$):** Measured by an ammeter in series with the field winding.
*   **Speed ($N$):** Measured in RPM using a tachometer.
*   **Braking Force ($F$):** Measured using a spring balance or weights attached to the brake band. This is the force exerted tangentially by the brake.
*   **Radius of Pulley ($r$):** The effective radius at which the braking force is applied.
*   **Braking Torque ($T_b$):** $T_b = F \times r$ (This is the torque absorbed by the brake).
*   **Shaft Power Output ($P_{out}$):** $P_{out} = T_{out} \times \omega$, where $T_{out} = T_b$ and $\omega$ is the angular speed in rad/s.
    *   $\omega = \frac{2 \pi N}{60}$ rad/s
    *   $P_{out} = \frac{2 \pi N T_b}{60}$ Watts (where $T_b$ is in N-m).
*   **Input Power ($P_{in}$):** $P_{in} = V_s \times I_{total}$, where $I_{total} = I_a + I_f$.
*   **Efficiency ($\eta$):** $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

---

### 4. Mechanical Characteristics Curves

The following characteristics are plotted from the data obtained during the brake test:

#### 4.1. Torque-Speed Characteristic (CO2 Addressed)

This curve shows the relationship between the motor's developed torque and its speed.

*   **Developed Torque ($T_{dev}$):** This is the torque the motor *produces* at its shaft. It's related to the braking torque by:
    $T_{dev} = T_b + T_{loss}$
    where $T_{loss}$ represents the torque lost due to rotational losses (friction, windage, etc.).
    Alternatively, it can be calculated from the electrical input to the armature:
    $T_{dev} = \frac{V_a I_a - I_a^2 R_a}{\omega}$ (from the fundamental torque equation $T = \frac{E_a I_a}{\omega}$, where $E_a = V_a - I_a R_a$).

*   **How to Plot:** Plot $T_{dev}$ on the y-axis and Speed ($N$ or $\omega$) on the x-axis.

*   **Expected Shape for a DC Shunt Motor:**
    *   At no-load (or very light load), the speed is maximum.
    *   As the load torque increases, the speed decreases gradually.
    *   The torque-speed curve is generally linear or slightly drooping.
    *   The starting torque is moderate (compared to a series motor).

**Reference:**
*   **Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers.** Section on performance characteristics of DC shunt motors.
*   **Kothari, D.P. & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill.** Figure illustrating speed-torque characteristics of DC shunt motor.

**Example:**
Suppose for a DC shunt motor, at a speed of 1500 RPM, the braking torque is measured as 10 N-m. The pulley radius is 0.1 m and the force measured by the spring balance is 100 N.
*   Braking Torque ($T_b$) = Force × Radius = 100 N × 0.1 m = 10 N-m.
*   If the armature resistance ($R_a$) is 0.5 Ohm, armature current ($I_a$) is 5 A, and armature voltage ($V_a$) is 220 V.
*   Back EMF ($E_a$) = $V_a - I_a R_a = 220 - 5 \times 0.5 = 220 - 2.5 = 217.5$ V.
*   Developed Torque ($T_{dev}$) = $\frac{E_a I_a}{\omega} = \frac{217.5 \times 5}{\frac{2 \pi \times 1500}{60}} \approx \frac{1087.5}{157.08} \approx 6.92$ N-m.
    *(Note: In a brake test, $T_{out} = T_b$. The discrepancy between calculated $T_{dev}$ and $T_b$ accounts for rotational losses. $T_{dev} = T_b + T_{rotational}$. So, rotational torque is $6.92 - 10 = -3.08$ N-m which is incorrect. It should be $T_{dev} = T_b + T_{rotational}$, so $T_{rotational} = T_{dev} - T_b$. This implies that $T_{dev}$ from the formula is the mechanical torque generated internally and $T_b$ is the load torque absorbed. The rotational losses torque would be $T_{dev} - T_b$. Let's recheck the formula for $T_{dev}$.
    The output torque is $T_{out}$. $P_{out} = T_{out} \omega$.
    From electrical side, $P_{in} = V_a I_a + V_f I_f$.
    $P_{out} = P_{in} - P_{losses}$.
    $P_{losses} = I_a^2 R_a + I_f^2 R_f + P_{rotational}$.
    $T_{out} = \frac{P_{out}}{\omega} = \frac{V_a I_a - I_a^2 R_a - I_f^2 R_f - P_{rotational}}{\omega}$.
    The torque calculated from $T_{dev} = \frac{V_a I_a - I_a^2 R_a}{\omega}$ is the *internal* developed torque. The output torque available at the shaft is $T_{out} = T_{dev} - T_{rotational}$, where $T_{rotational}$ is the torque corresponding to rotational losses.
    So, $T_b = T_{dev} - T_{rotational}$.
    In the example: $T_{dev} \approx 6.92$ N-m. $T_b = 10$ N-m. This suggests an error in interpretation or calculation.
    A more direct approach for brake test: $P_{out} = \frac{2 \pi N T_b}{60}$.
    Let's assume the $T_b$ from the brake is the actual mechanical load torque.
    $T_{out} = T_b$.
    So, at 1500 RPM, $T_{out} = 10$ N-m.
    The $T_{dev}$ calculated from $T_{dev} = \frac{E_a I_a}{\omega}$ is the torque *produced internally* by the motor's electromagnetic action.
    $T_{dev} = T_{out} + T_{rotational}$.
    $6.92 = 10 + T_{rotational}$. This gives $T_{rotational} = -3.08$, which is wrong.
    **Correction:** The torque calculated from the electrical input $T_{elec} = \frac{V_a I_a - I_a^2 R_a}{\omega}$ is the *electromagnetic torque*. The output torque is $T_{out} = T_{elec} - T_{rotational}$.
    In the brake test, $T_{out} = T_b$.
    So, $T_b = \frac{V_a I_a - I_a^2 R_a}{\omega} - T_{rotational}$.
    Let's recalculate $T_{elec}$: $T_{elec} \approx 6.92$ N-m.
    If $T_b = 10$ N-m, and assuming $T_{rotational}$ is positive, this implies $T_{elec}$ must be greater than $T_b$.
    There might be an error in the hypothetical values. Let's use values where $T_{elec} > T_b$.

    **Revised Example:**
    At a speed of 1450 RPM, $V_a = 220$ V, $I_a = 6$ A, $R_a = 0.5$ $\Omega$.
    Spring balance reading $F = 110$ N, pulley radius $r = 0.1$ m.
    *   Braking Torque ($T_b$) = $110 \times 0.1 = 11$ N-m.
    *   Angular Speed ($\omega$) = $\frac{2 \pi \times 1450}{60} \approx 151.84$ rad/s.
    *   Electromagnetic Torque ($T_{elec}$) = $\frac{V_a I_a - I_a^2 R_a}{\omega} = \frac{220 \times 6 - 6^2 \times 0.5}{151.84} = \frac{1320 - 18}{151.84} = \frac{1302}{151.84} \approx 8.57$ N-m.
    This still shows $T_{elec} < T_b$. This indicates that the provided numbers might not be representative of a typical operating point, or my understanding of how $T_{elec}$ relates to $T_b$ in this context needs refinement.

    **Let's use the definition from the Brake Test perspective:**
    The output torque is measured by the brake, $T_{out} = T_b = F \times r$.
    The output power is $P_{out} = T_{out} \times \omega$.
    The developed torque ($T_{dev}$) is the torque that the motor's magnetic forces create. $T_{dev} = T_{out} + T_{rotational\_losses}$.
    The electromagnetic torque calculated from electrical quantities is often equated with $T_{dev}$.
    $T_{elec} = \frac{V_a I_a - I_a^2 R_a}{\omega}$. This is the torque available *after* accounting for armature resistance losses.

    Let's assume the values are consistent. The $T_{dev}$ (or $T_{elec}$) is the torque generated internally. The load torque applied by the brake is $T_b$. The difference $(T_{elec} - T_b)$ represents the torque lost due to rotational losses.
    So, $T_{rotational} = T_{elec} - T_b$. This should be positive.

    **Let's use a typical scenario:**
    No-load: $N \approx 1500$ RPM, $I_a \approx 2$ A. $V_a = 220$ V. $R_a = 0.5$ $\Omega$.
    $E_a = 220 - 2 \times 0.5 = 219$ V.
    $\omega = \frac{2 \pi \times 1500}{60} \approx 157.08$ rad/s.
    $T_{elec} = \frac{219 \times 2}{157.08} \approx 2.79$ N-m.
    Brake test at full load: $N = 1200$ RPM, $I_a = 20$ A. $V_a = 220$ V. $R_a = 0.5$ $\Omega$.
    $E_a = 220 - 20 \times 0.5 = 210$ V.
    $\omega = \frac{2 \pi \times 1200}{60} \approx 125.66$ rad/s.
    $T_{elec} = \frac{210 \times 20}{125.66} = \frac{4200}{125.66} \approx 33.42$ N-m.
    Suppose the brake measured $T_b = 30$ N-m at this point.
    Then, $T_{rotational} = T_{elec} - T_b = 33.42 - 30 = 3.42$ N-m. This is plausible.
    **So, for plotting the torque-speed characteristic, we plot $T_{elec}$ (developed torque) vs. $N$.**

#### 4.2. Torque-Efficiency Characteristic (CO2 Addressed)

This curve shows the relationship between the motor's developed torque and its efficiency.

*   **How to Plot:** Plot Efficiency ($\eta$ in %) on the y-axis and Developed Torque ($T_{dev}$ or $T_{elec}$) on the x-axis.

*   **Expected Shape for a DC Shunt Motor:**
    *   Efficiency is zero at zero load (zero output torque) because there is output power but no input power (ideally). In reality, there are losses even at no load.
    *   As the load torque increases, efficiency increases.
    *   The efficiency reaches a maximum at a certain load torque.
    *   Beyond the maximum efficiency point, the efficiency starts to decrease as the load torque increases further. This is primarily due to the increasing $I_a^2 R_a$ losses, which are proportional to the square of the armature current.

**Reference:**
*   **Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers.** Discusses efficiency curves and losses.
*   **Kothari, D.P. & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill.** Figures showing efficiency vs. load characteristics.

**Example:**
Using the full-load data from the revised example:
*   $T_{elec} \approx 33.42$ N-m.
*   $V_a = 220$ V, $I_a = 20$ A. Assume $I_f = 2$ A and field resistance $R_f = 110$ $\Omega$.
*   Input Power ($P_{in}$) = $V_a \times (I_a + I_f) = 220 \times (20 + 2) = 220 \times 22 = 4840$ W.
*   Output Power ($P_{out}$) = $T_b \times \omega = 30 \times 125.66 = 3769.8$ W.
*   Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}} \times 100\% = \frac{3769.8}{4840} \times 100\% \approx 77.9\%$

#### 4.3. Speed-Efficiency Characteristic (CO2 Addressed)

This curve shows the relationship between the motor's speed and its efficiency.

*   **How to Plot:** Plot Efficiency ($\eta$ in %) on the y-axis and Speed ($N$ or $\omega$) on the x-axis.

*   **Expected Shape for a DC Shunt Motor:**
    *   At very high speeds (light load), the efficiency is low because output power is low, but fixed losses (like rotational and field losses) are significant.
    *   As speed decreases (load increases), efficiency increases.
    *   Efficiency reaches a maximum at a certain speed (corresponding to the optimal load).
    *   As speed decreases further (heavier load), efficiency starts to decrease due to increasing $I_a^2 R_a$ losses.

**Reference:**
*   **Bimbhra, P.S. (2021). *Electrical Machinery*. Khanna Publishers.** Discusses efficiency vs. speed.
*   **Kothari, D.P. & Nagrath, I.J. (2017). *Electric Machines*. Tata McGraw Hill.** Figures showing efficiency characteristics.

**Example:**
Using data points from the brake test:
*   Point 1: $N = 1450$ RPM, $\eta \approx 75\%$
*   Point 2: $N = 1300$ RPM, $\eta \approx 80\%$
*   Point 3: $N = 1200$ RPM, $\eta \approx 78\%$

Plotting these points will show the characteristic curve.

---

### 5. Importance and Interpretation of Characteristics

*   **Torque-Speed:** Helps in understanding how the motor's speed changes with load. A steeper drop in speed with increasing torque indicates poorer speed regulation. Shunt motors are known for their relatively constant speed operation.
*   **Torque-Efficiency:** Identifies the operating range where the motor is most efficient. This is crucial for selecting a motor for an application to minimize energy consumption. Maximum efficiency typically occurs at a significant fraction of the rated load.
*   **Speed-Efficiency:** Similar to torque-efficiency, it highlights the optimal operating speed for maximum efficiency.

---

### 6. Practice Questions and Answers

**Question 1:** For a DC shunt motor, if the developed torque increases, what happens to its speed?
**Answer:** As the developed torque increases in a DC shunt motor, its speed generally decreases slightly due to increased voltage drop across the armature resistance and increased rotational losses.

**Question 2:** Why is the efficiency of a DC shunt motor zero at no load?
**Answer:** At no load, the output power ($P_{out} = T_{out} \times \omega$) is zero. Since efficiency ($\eta = P_{out} / P_{in}$) is the ratio of output power to input power, if the output is zero, the efficiency is also zero, even though the motor is drawing some power for its own losses (field losses, rotational losses).

**Question 3:** Sketch the typical torque-speed characteristic of a DC shunt motor and explain its shape.
**Answer:**
*   **Sketch:** A curve starting from a moderate speed at zero torque, and gradually drooping as torque increases.
*   **Explanation:** The motor generates torque electromagnetically ($T_{elec} = \frac{V_a I_a - I_a^2 R_a}{\omega}$). As load torque increases, armature current ($I_a$) increases. This leads to a larger $I_a^2 R_a$ loss and a greater back EMF ($E_a = V_a - I_a R_a$) drop, resulting in a lower speed. The curve is typically slightly drooping because the field flux remains relatively constant (as it's a shunt motor).

**Question 4:** At what condition does a DC shunt motor typically achieve maximum efficiency?
**Answer:** A DC shunt motor typically achieves maximum efficiency at a load that is a significant fraction of its rated load, where the variable losses ($I_a^2 R_a$) are balanced against the fixed losses (field copper loss, rotational losses).

**Question 5:** You are conducting a brake test on a DC shunt motor. You measure the following:
*   Supply Voltage ($V_s$) = 220 V
*   Armature Current ($I_a$) = 15 A
*   Field Current ($I_f$) = 1 A
*   Speed ($N$) = 1300 RPM
*   Spring Balance Reading ($F$) = 130 N
*   Pulley Radius ($r$) = 0.1 m
*   Armature Resistance ($R_a$) = 0.4 $\Omega$
*   Field Resistance ($R_f$) = 220 $\Omega$

Calculate:
a) Output Power ($P_{out}$)
b) Input Power ($P_{in}$)
c) Efficiency ($\eta$)
d) Developed Torque ($T_{dev}$)

**Answer:**
a) Braking Torque ($T_b$) = $F \times r = 130$ N $\times 0.1$ m = 13 N-m
   Angular Speed ($\omega$) = $\frac{2 \pi N}{60} = \frac{2 \pi \times 1300}{60} \approx 136.14$ rad/s
   Output Power ($P_{out}$) = $T_b \times \omega = 13$ N-m $\times 136.14$ rad/s $\approx 1770$ W

b) Input Power ($P_{in}$) = $V_s \times (I_a + I_f) = 220$ V $\times (15$ A $+ 1$ A) $= 220$ V $\times 16$ A $= 3520$ W

c) Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}} \times 100\% = \frac{1770}{3520} \times 100\% \approx 50.3\%$

d) Developed Torque ($T_{dev}$):
   Back EMF ($E_a$) = $V_s - I_a R_a = 220$ V $- 15$ A $\times 0.4$ $\Omega = 220 - 6 = 214$ V
   Developed Torque ($T_{dev}$) = $\frac{E_a I_a}{\omega} = \frac{214 \text{ V} \times 15 \text{ A}}{136.14 \text{ rad/s}} = \frac{3210}{136.14} \approx 23.58$ N-m

---

### 7. Important Points to Remember

*   The brake test directly measures the output torque by applying a mechanical load.
*   The output torque from the motor is equal to the braking torque applied by the brake.
*   The developed torque (or electromagnetic torque) is calculated from electrical parameters and accounts for armature resistance losses. The difference between developed torque and output torque represents rotational losses.
*   DC shunt motors are characterized by a relatively constant speed over a range of loads.
*   Efficiency is maximum at a specific load, not at no-load or full-load.
*   Always ensure proper safety precautions when conducting brake tests, as the motor can overheat if loaded for too long without adequate cooling.
*   The pulley radius must be accurately measured for correct torque calculation.

---

This concludes the study notes for the mechanical characteristics of a DC shunt motor from the brake test. These concepts are fundamental to understanding motor performance and are directly linked to Course Outcome CO2.
