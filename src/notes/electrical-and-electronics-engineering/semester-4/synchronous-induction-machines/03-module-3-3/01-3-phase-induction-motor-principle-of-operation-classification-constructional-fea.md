---
title: "3-phase Induction motor – principle of operation - classification - constructional features – torque equation - torque-slip characteristics – relation between starting torque, maximum torque and full-load torque - numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 3: 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df6"
status: "completed"
scrapedAt: "2026-05-23T16:19:14.269Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 3: 3-Phase Induction Motor

**Module Overview:** This module delves into the fundamental principles, construction, and performance characteristics of three-phase induction motors, a ubiquitous workhorse in industrial applications. We will explore how these machines convert electrical energy into mechanical energy and the factors that govern their operation, including torque production and speed control.

**Course Outcomes Addressed:**
*   **CO3:** Describe the constructional details and analyse the steady-state performance of induction motors under various load conditions. (Knowledge Level: K3)
*   **CO4:** Analyse the various starting, braking and speed control methods of 3- phase induction motors. (Knowledge Level: K3)

**Learning Outcomes Covered:**
*   Principle of operation of 3-phase induction motor
*   Classification of 3-phase induction motors
*   Constructional features of 3-phase induction motors
*   Torque equation of a 3-phase induction motor
*   Torque-slip characteristics
*   Relation between starting torque, maximum torque, and full-load torque
*   Numerical problems

---

## 1. Principle of Operation of a 3-Phase Induction Motor

The operation of a three-phase induction motor is based on the principle of **electromagnetic induction** and the interaction between a **rotating magnetic field** and the **rotor conductors**.

**1.1 Rotating Magnetic Field (RMF):**
*   When a three-phase AC supply is connected to the stator windings (typically arranged spatially displaced by 120 electrical degrees), it produces a magnetic field that rotates at a constant speed.
*   This speed is called the **synchronous speed** ($N_s$), determined by the frequency ($f$) of the supply and the number of poles ($P$) in the stator winding.
*   **Formula:** $N_s = \frac{120f}{P}$ revolutions per minute (RPM).
*   The RMF has a constant magnitude and rotates at synchronous speed.

**1.2 Induction of Voltage and Current in the Rotor:**
*   The stator's rotating magnetic field sweeps across the rotor conductors.
*   From the perspective of the rotor conductors, this is equivalent to a changing magnetic flux.
*   According to **Faraday's Law of Electromagnetic Induction**, this changing flux induces an electromotive force (EMF) in the rotor conductors.
*   Since the rotor circuit is typically closed (either by short-circuiting end rings in a squirrel-cage rotor or by external resistance in a slip-ring rotor), these induced EMFs cause **currents to flow in the rotor conductors**.

**1.3 Production of Torque:**
*   The rotor conductors, now carrying current, are placed in the magnetic field produced by the stator.
*   The interaction between the magnetic field and the rotor currents results in a **force** acting on the rotor conductors.
*   These forces, acting at a distance from the axis of rotation, produce a **torque** on the rotor.
*   This torque causes the rotor to rotate in the same direction as the rotating magnetic field.

**1.4 Slip:**
*   For induction to occur, there must be a relative speed difference between the rotating magnetic field (stator) and the rotor conductors.
*   Therefore, the rotor can never rotate at synchronous speed. If it did, there would be no relative motion, no induced EMF, no rotor current, and hence no torque.
*   The difference between the synchronous speed ($N_s$) and the actual rotor speed ($N_r$) is called **slip**.
*   Slip ($s$) is usually expressed as a fraction or percentage of the synchronous speed.
*   **Formula:** $s = \frac{N_s - N_r}{N_s}$
*   The frequency of the rotor currents ($f_r$) is also related to slip: $f_r = s \cdot f$.

**Key Concepts:**
*   **Rotating Magnetic Field (RMF):** The magnetic field produced by the stator windings that rotates at synchronous speed.
*   **Synchronous Speed ($N_s$):** The speed at which the RMF rotates.
*   **Slip ($s$):** The relative speed difference between the RMF and the rotor, crucial for induction.
*   **Induced EMF/Current:** Generated in the rotor conductors due to the relative motion with the RMF.
*   **Torque Production:** Arises from the interaction of rotor currents and the stator magnetic field.

**Reference:**
*   **Bhimbra, P.S. (2021).** *Electrical Machinery*. Chapter on Induction Motors, section on Principle of Operation.
*   **Kothari & Nagrath (2017).** *Electric Machines*. Chapter on Induction Motors, section on Principle of Operation.

---

## 2. Classification of 3-Phase Induction Motors

Three-phase induction motors can be broadly classified based on their rotor construction.

**2.1 Squirrel-Cage Induction Motor (SCIM):**
*   **Construction:** The rotor consists of a laminated cylindrical core with slots. Conductors (usually bars of copper or aluminum) are embedded in these slots and are permanently short-circuited at both ends by end rings. The rotor bars and end rings form a cage-like structure.
*   **Characteristics:**
    *   Simple, rugged, and low-cost construction.
    *   No external connections to the rotor.
    *   Reliable and requires less maintenance.
    *   Starting torque is generally moderate.
    *   Speed cannot be easily controlled without external means.
*   **Applications:** Fans, pumps, compressors, conveyors, machine tools, etc.

**2.2 Slip-Ring Induction Motor (SRIM) / Wound-Rotor Induction Motor:**
*   **Construction:** The rotor has windings similar to the stator, and these windings are brought out to slip rings mounted on the shaft. Brushes are used to make electrical connection to these slip rings. External resistors can be connected to the rotor circuit through these slip rings to control the rotor resistance.
*   **Characteristics:**
    *   Higher starting torque compared to squirrel-cage motors.
    *   Ability to control starting current and speed by varying rotor resistance.
    *   More complex and expensive than squirrel-cage motors.
    *   Requires more maintenance due to slip rings and brushes.
*   **Applications:** Cranes, hoists, elevators, high-inertia loads requiring high starting torque and controlled acceleration.

**Reference:**
*   **Gupta, J.B. (2022).** *Theory & Performance of Electrical Machines*. Chapter on Three-Phase Induction Motors, section on Classification.
*   **Murugesh Kumar, K. (2000).** *Induction & Synchronous Machines*. Chapter on Induction Motors, section on Types.

---

## 3. Constructional Features of a 3-Phase Induction Motor

A three-phase induction motor consists of two main parts: the **stator** and the **rotor**.

**3.1 Stator:**
*   **Stator Core:**
    *   Made of thin laminations of silicon steel (to reduce eddy current losses) stacked together and insulated from each other.
    *   Provides a path for the magnetic flux and houses the stator windings.
    *   The core is usually built into a frame or housing.
*   **Stator Windings:**
    *   Three sets of windings are placed in slots on the inner periphery of the stator core.
    *   These windings are distributed and are spatially displaced by 120 electrical degrees.
    *   They are connected to a three-phase AC supply.
    *   When energized by a three-phase supply, they produce the rotating magnetic field.
    *   Typically made of insulated copper conductors.

**3.2 Rotor:**
*   **Rotor Core:**
    *   Also made of laminated silicon steel to reduce eddy currents.
    *   The rotor core is mounted on the motor shaft and is free to rotate.
    *   It has slots on its outer periphery.
*   **Rotor Conductors (for Squirrel-Cage Rotor):**
    *   Consists of conductive bars (aluminum or copper) embedded in the rotor slots.
    *   These bars are permanently short-circuited at both ends by end rings.
    *   The arrangement resembles a squirrel cage.
*   **Rotor Windings and Slip Rings (for Slip-Ring Rotor):**
    *   The rotor has a three-phase winding (usually star-connected) with the ends brought out to three slip rings.
    *   The slip rings are insulated from the shaft and from each other.
    *   Stationary brushes make contact with the slip rings to connect external resistors or other circuits to the rotor winding.
*   **Shaft:** Transmits the mechanical power to the load.
*   **Bearings:** Support the rotor shaft and allow it to rotate freely.
*   **Cooling Fan:** Usually attached to the shaft to draw in air and cool the motor.
*   **Frame/Housing:** Encloses the stator and rotor, providing mechanical support and protection.

**Reference:**
*   **Bhimbra, P.S. (2021).** *Electrical Machinery*. Chapter on Induction Motors, section on Construction.
*   **Say, M.G. (2002).** *Performance & Design of AC Machines*. Chapter on Induction Motors, section on Construction.

---

## 4. Torque Equation of a 3-Phase Induction Motor

The torque produced by a three-phase induction motor can be derived using the energy balance principle or by considering the interaction of magnetic fields. A common expression for torque ($T$) is:

$T = \frac{3}{2\pi N_s} \cdot \frac{V_1^2 \cdot R_2'}{(R_1 + R_2'/s)^2 + (X_1 + X_2')^2}$

Where:
*   $T$: Torque in N-m
*   $N_s$: Synchronous speed in RPM
*   $V_1$: Stator phase voltage
*   $R_1$: Stator phase resistance per phase
*   $R_2'$: Rotor phase resistance referred to the stator, per phase
*   $X_1$: Stator phase reactance per phase
*   $X_2'$: Rotor phase reactance referred to the stator, per phase
*   $s$: Slip

**Derivation (Simplified Concept):**
*   The torque is proportional to the product of the stator magnetic flux and the rotor current, and the cosine of the phase angle between them.
*   $T \propto \Phi \cdot I_2' \cdot \cos(\theta_2')$
*   Using the equivalent circuit, the rotor current $I_2'$ can be expressed in terms of stator voltage $V_1$, resistances, and reactances.
*   The term $R_2'/s$ represents the effective rotor resistance that depends on the slip.

**Simplified Torque Equation:**

A more practical and insightful form of the torque equation, especially for analyzing characteristics, is:

$T = \frac{3 \cdot I_2'^2 \cdot R_2'}{2\pi N_s / 60} = \frac{3 \cdot I_2'^2 \cdot R_2'}{\omega_s}$ (where $\omega_s = 2\pi N_s/60$ is synchronous angular speed)

And substituting $I_2' = \frac{V_1}{\sqrt{(R_1 + R_2'/s)^2 + (X_1 + X_2')^2}}$:

$T = \frac{3 \cdot V_1^2 \cdot R_2'}{s \cdot \omega_s \cdot [(R_1 + R_2'/s)^2 + (X_1 + X_2')^2]}$

This equation highlights that torque depends on:
*   Square of the stator voltage.
*   Rotor resistance ($R_2'$).
*   Slip ($s$).
*   Stator and rotor impedances ($R_1, X_1, R_2', X_2'$).

**Important Note:** The factor $3$ and the $\omega_s$ in the denominator are constants for a given motor and supply frequency. For analysis, we often consider $T \propto \frac{s \cdot R_2'}{(R_1 + R_2'/s)^2 + (X_1 + X_2')^2}$.

**Reference:**
*   **Kothari & Nagrath (2017).** *Electric Machines*. Chapter on Induction Motors, section on Torque Equation.
*   **Gupta, J.B. (2022).** *Theory & Performance of Electrical Machines*. Chapter on Three-Phase Induction Motors, section on Torque Equation.

---

## 5. Torque-Slip Characteristics

The torque-slip characteristic is a graphical representation of the relationship between the torque produced by the induction motor and the slip. It's a fundamental curve for understanding motor performance.

**5.1 Shape of the Torque-Slip Curve:**
The curve can be divided into three main regions:

*   **Starting Region (s = 1):**
    *   When the motor is switched on, the rotor is stationary ($N_r = 0$), so slip $s = 1$.
    *   The rotor frequency is equal to the stator frequency ($f_r = f$).
    *   The rotor impedance is $Z_2' = \sqrt{(R_1+R_2')^2 + (X_1+X_2')^2}$.
    *   The starting torque ($T_{start}$) is produced. This torque is usually less than the maximum torque.

*   **Normal Operating Region (s small, typically 0 < s < 0.1):**
    *   As the rotor speed increases and approaches synchronous speed, slip decreases.
    *   In this region, the torque is approximately **directly proportional to the slip**.
    *   $T \propto s$ (This approximation holds when $R_1 \ll R_2'/s$ and $X_1+X_2'$ are relatively small compared to $R_2'/s$).
    *   This linear relationship is useful for many applications.

*   **Maximum Torque Region (s = $s_{max}$):**
    *   As slip decreases from 1, the torque increases.
    *   It reaches a **maximum value**, known as the **breakdown torque** or **maximum torque** ($T_{max}$).
    *   This occurs at a specific slip value ($s_{max}$), often called the **critical slip**.
    *   The condition for maximum torque is when the rotor circuit power is maximum, which happens when $R_2'/s = \sqrt{R_1^2 + (X_1+X_2')^2}$. For simplicity and often neglecting stator impedance ($R_1 \approx 0, X_1 \approx 0$), $T_{max}$ occurs when $R_2'/s = X_2'$, so $s_{max} = R_2'/X_2'$.

*   **Negative Torque Region (s > $s_{max}$):**
    *   If the rotor speed falls below the speed corresponding to maximum torque (i.e., slip increases beyond $s_{max}$), the torque starts to decrease.
    *   If the load torque exceeds the breakdown torque, the motor will stall.
    *   If the rotor speed were to exceed synchronous speed (negative slip, $s<0$), the torque becomes negative (braking torque).

**5.2 Factors Affecting the Torque-Slip Curve:**

*   **Rotor Resistance ($R_2'$):**
    *   Increasing rotor resistance ($R_2'$) shifts the $T_{max}$ point towards a higher slip ($s_{max}$ increases).
    *   It also increases the starting torque ($T_{start}$).
    *   The maximum torque ($T_{max}$) itself remains largely unchanged, but it shifts to a higher slip value.
    *   This is the principle behind using external resistors in slip-ring motors to improve starting torque.

*   **Stator Voltage ($V_1$):**
    *   Torque is proportional to the square of the stator voltage ($T \propto V_1^2$).
    *   Reducing the stator voltage significantly reduces the torque in all regions.

**Typical Torque-Slip Curve:**

```
      ^ Torque (T)
      |
      |       /---------\  (Maximum Torque Region)
      |      /           \
      |     /             \
      |    /               \
      |   /                 \
      |  /                   \
      | /                     \
      |/______ (Starting Torque) \________
      +-------------------------------------> Slip (s)
      0      s_max     1
```

**Reference:**
*   **Bhimbra, P.S. (2021).** *Electrical Machinery*. Chapter on Induction Motors, section on Torque-Slip Characteristics.
*   **Say, M.G. (2002).** *Performance & Design of AC Machines*. Chapter on Induction Motors, section on Torque-Slip Curve.

---

## 6. Relation Between Starting Torque, Maximum Torque, and Full-Load Torque

These torque values are critical for selecting an induction motor for a specific application.

**6.1 Starting Torque ($T_{start}$ or $T_{st}$):**
*   This is the torque developed by the motor at the instant of starting (when $s=1$).
*   It must be sufficient to overcome the inertia of the rotor and the stationary load.

**6.2 Maximum Torque ($T_{max}$ or $T_{breakdown}$):**
*   This is the highest torque the motor can develop.
*   It occurs at the critical slip $s_{max}$.
*   The motor can operate stably at any slip between 0 and $s_{max}$.
*   If the load torque exceeds $T_{max}$, the motor will stall.

**6.3 Full-Load Torque ($T_{FL}$):**
*   This is the torque required by the load when the motor is operating at its rated output power and speed.
*   The motor is designed to operate continuously at this torque and the corresponding speed.

**Relationship:**

The typical relationship between these torques for a standard squirrel-cage induction motor is:

*   $T_{start} \approx 1.5 \text{ to } 2.5 \text{ times } T_{FL}$
*   $T_{max} \approx 2 \text{ to } 3 \text{ times } T_{FL}$
*   $T_{max}$ occurs at a slip typically between 0.1 to 0.2.
*   $T_{start}$ occurs at $s=1$.

**General Torque Equation for analysis:**

$T = k \cdot \frac{s \cdot R_2'}{R_2'^2 + (sX_2')^2}$ (assuming stator impedance is negligible, $R_1 \approx 0, X_1 \approx 0$)

Where $k$ is a constant related to $V_1^2$.

*   **Starting Torque ($s=1$):** $T_{start} = k \cdot \frac{R_2'}{R_2'^2 + X_2'^2}$
*   **Maximum Torque ($s=s_{max}$):** Maximum occurs when $R_2'/s = X_2'$, so $s_{max} = R_2'/X_2'$.
    $T_{max} = k \cdot \frac{R_2'}{R_2'^2 + (R_2'/s_{max} \cdot s_{max})^2} = k \cdot \frac{R_2'}{R_2'^2 + R_2'^2} = k \cdot \frac{R_2'}{2R_2'^2} = \frac{k}{2R_2'}$
*   **Full-Load Torque:** This is the torque at the rated slip, $s_{FL}$.
    $T_{FL} = k \cdot \frac{s_{FL} \cdot R_2'}{R_2'^2 + (s_{FL}X_2')^2}$

**Derived Relationships:**

From the formulas for $T_{start}$ and $T_{max}$ (assuming $R_1=0, X_1=0$ for simplicity):
*   $T_{start} = k \cdot \frac{R_2'}{R_2'^2 + X_2'^2}$
*   $T_{max} = \frac{k}{2R_2'}$

We can express $T_{start}$ in terms of $T_{max}$:
$T_{start} = \frac{R_2'}{R_2'^2 + X_2'^2} \cdot \frac{2R_2'}{T_{max}} = \frac{2R_2'^2}{R_2'^2 + X_2'^2} \cdot \frac{T_{max}}{R_2'} = \frac{2R_2' T_{max}}{R_2'^2 + X_2'^2}$

This can be rearranged to show the ratio:
$\frac{T_{start}}{T_{max}} = \frac{k \cdot R_2'/(R_2'^2 + X_2'^2)}{k/(2R_2')} = \frac{2R_2'^2}{R_2'^2 + X_2'^2}$

**Relationship between $T_{start}$, $T_{max}$, and $T_{FL}$ (Approximate):**

The ratio $\frac{T_{max}}{T_{start}}$ is dependent on the ratio $R_2'/X_2'$.
*   If $R_2' = X_2'$, then $s_{max} = 1$. This gives $T_{start} = T_{max}$. This is not typical for most motors.
*   If $R_2'$ is small compared to $X_2'$, $s_{max}$ is small, and $T_{start}$ is also small.
*   If $R_2'$ is increased (e.g., in slip-ring motors or by starting methods), $s_{max}$ increases, and $T_{start}$ increases.

**Important Point:** The relative values of $T_{start}$, $T_{max}$, and $T_{FL}$ are design parameters that dictate the motor's suitability for different loads. For instance, a motor requiring high starting torque will have a higher $T_{start}$ relative to $T_{FL}$.

**Reference:**
*   **Bhimbra, P.S. (2021).** *Electrical Machinery*. Chapter on Induction Motors, section on Torque-Slip Characteristics.
*   **Kothari & Nagrath (2017).** *Electric Machines*. Chapter on Induction Motors, section on Torque-Slip Characteristics.

---

## 7. Numerical Problems

Let's work through some common types of numerical problems related to 3-phase induction motors.

**Problem 1: Synchronous Speed and Rotor Frequency**

A 4-pole, 3-phase induction motor is connected to a 50 Hz supply. When operating at full load, its speed is 1440 RPM.
Calculate:
a) Synchronous speed ($N_s$)
b) Slip ($s$)
c) Frequency of the rotor induced EMF ($f_r$)

**Solution:**
Given:
Number of poles, $P = 4$
Supply frequency, $f = 50$ Hz
Full-load speed, $N_r = 1440$ RPM

a) **Synchronous Speed ($N_s$):**
$N_s = \frac{120f}{P} = \frac{120 \times 50}{4} = \frac{6000}{4} = 1500$ RPM

b) **Slip ($s$):**
$s = \frac{N_s - N_r}{N_s} = \frac{1500 - 1440}{1500} = \frac{60}{1500} = \frac{1}{25} = 0.04$
Or as a percentage: $s = 0.04 \times 100\% = 4\%$

c) **Frequency of Rotor Induced EMF ($f_r$):**
$f_r = s \cdot f = 0.04 \times 50$ Hz $= 2$ Hz

**Answer:**
a) $N_s = 1500$ RPM
b) $s = 0.04$ or $4\%$
c) $f_r = 2$ Hz

---

**Problem 2: Calculating Torque**

A 3-phase, 4-pole induction motor develops a total air gap power of 3000 W. The stator is connected to a 415 V, 50 Hz supply. The rotor resistance is 0.01 ohm per phase and the stator resistance is 0.2 ohm per phase. The total leakage reactance is 0.05 ohm per phase. Assume the motor is running at a speed of 1450 RPM.

Calculate:
a) Synchronous speed
b) Slip
c) Rotor current per phase ($I_2'$)
d) Gross torque developed by the motor ($T_{gross}$)

**Solution:**
Given:
$P = 4$
Air gap power, $P_{ag} = 3000$ W
$V_1 = 415$ V (Line voltage)
$f = 50$ Hz
$R_2' = 0.01 \Omega$
$R_1 = 0.2 \Omega$
$X_1 + X_2' = 0.05 \Omega$ (Total leakage reactance)
$N_r = 1450$ RPM

a) **Synchronous speed ($N_s$):**
$N_s = \frac{120f}{P} = \frac{120 \times 50}{4} = 1500$ RPM

b) **Slip ($s$):**
$s = \frac{N_s - N_r}{N_s} = \frac{1500 - 1450}{1500} = \frac{50}{1500} = \frac{1}{30} \approx 0.0333$

c) **Rotor current per phase ($I_2'$):**
We need the stator phase voltage ($V_{ph}$). Assuming a star connection for simplicity (though the problem statement doesn't specify, it's common to assume for these calculations or use a delta-star factor if specified).
$V_{ph} = \frac{V_{line}}{\sqrt{3}} = \frac{415}{\sqrt{3}} \approx 239.6$ V

The rotor impedance referred to stator is $Z_2' = \sqrt{(R_1 + R_2'/s)^2 + (X_1 + X_2')^2}$.
$R_1 + R_2'/s = 0.2 + \frac{0.01}{0.0333} = 0.2 + 0.3003 \approx 0.5003 \Omega$
$X_1 + X_2' = 0.05 \Omega$
$Z_2' = \sqrt{(0.5003)^2 + (0.05)^2} = \sqrt{0.2503 + 0.0025} = \sqrt{0.2528} \approx 0.5028 \Omega$

Rotor current $I_2' = \frac{V_{ph}}{Z_2'} = \frac{239.6}{0.5028} \approx 476.5$ A (This seems very high, likely due to neglecting stator impedance's effect on voltage drop. Let's re-evaluate using the full formula's component in the numerator, or assume $V_{ph}$ is the effective voltage driving rotor current).

A more common approach for rotor current is using the simplified equivalent circuit where the magnetizing branch is neglected and the voltage is assumed to be $V_{ph}$.

Let's re-calculate using a slightly different formulation focusing on power:
Air gap power $P_{ag} = 3 \cdot I_2'^2 \cdot \frac{R_2'}{s}$
$3000 \text{ W} = 3 \cdot I_2'^2 \cdot \frac{0.01}{0.0333}$
$3000 = I_2'^2 \cdot \frac{0.03}{0.0333} = I_2'^2 \cdot 0.9009$
$I_2'^2 = \frac{3000}{0.9009} \approx 3329.9$
$I_2' = \sqrt{3329.9} \approx 57.7$ A

This value for $I_2'$ is more realistic. The issue with the previous calculation was using $V_{ph}$ directly without considering the full series impedance affecting the current.

d) **Gross Torque ($T_{gross}$):**
We can use the air gap power and synchronous speed to find the gross torque.
$P_{ag} = \frac{2\pi N_s}{60} \cdot T_{gross}$
$T_{gross} = \frac{P_{ag}}{2\pi N_s / 60} = \frac{3000}{2\pi (1500)/60} = \frac{3000}{2\pi (25)} = \frac{3000}{50\pi} \approx \frac{3000}{157.08} \approx 19.1$ N-m

Alternatively, using rotor current and resistance:
$P_{ag} = 3 \cdot I_2'^2 \cdot \frac{R_2'}{s}$
$T_{gross} = \frac{P_{ag}}{\omega_s} = \frac{P_{ag}}{2\pi N_s/60}$ (Already done)

Let's verify with $T_{gross} = \frac{3 I_2'^2 R_2'}{\omega_s}$:
$\omega_s = 2\pi \frac{1500}{60} = 50\pi$ rad/s
$T_{gross} = \frac{3 \times (57.7)^2 \times 0.01}{50\pi} = \frac{3 \times 3329.29 \times 0.01}{157.08} = \frac{99.8787}{157.08} \approx 0.636$ N-m. This is not matching.

Let's re-examine the relationship between air gap power and torque.
Air gap power $P_{ag}$ is the power converted from electrical to mechanical form in the rotor.
$P_{ag} = T_{gross} \cdot \omega_r$ (where $\omega_r = 2\pi N_r/60$)
$P_{ag} = T_{gross} \cdot 2\pi \frac{1450}{60}$
$3000 = T_{gross} \cdot 2\pi \frac{145}{6} = T_{gross} \cdot \frac{290\pi}{6}$
$T_{gross} = \frac{3000 \times 6}{290\pi} = \frac{18000}{290\pi} \approx \frac{1800}{29\pi} \approx \frac{1800}{91.1} \approx 19.76$ N-m. This is closer.

The confusion often arises from the definition of $T_{gross}$ in the torque equation vs. power. The torque equation $T = \frac{3 \cdot V_1^2 \cdot R_2'}{s \cdot \omega_s \cdot [(R_1 + R_2'/s)^2 + (X_1 + X_2')^2]}$ directly gives gross torque.

Let's use the $P_{ag}$ formula again:
$P_{ag} = \text{Torque converted} \times \omega_r = T_{gross} \times \omega_r$
$\omega_r = \frac{2\pi N_r}{60} = \frac{2\pi \times 1450}{60} = \frac{290\pi}{6}$ rad/s
$T_{gross} = \frac{P_{ag}}{\omega_r} = \frac{3000 \text{ W}}{(290\pi/6) \text{ rad/s}} = \frac{18000}{290\pi} \approx 19.76$ N-m. This seems correct.

**Answer:**
a) $N_s = 1500$ RPM
b) $s = 1/30 \approx 0.0333$
c) $I_2' \approx 57.7$ A
d) $T_{gross} \approx 19.76$ N-m

---

**Problem 3: Starting Torque and Maximum Torque**

A 3-phase, 4-pole induction motor has the following parameters per phase referred to the stator:
$R_1 = 0.5 \Omega$, $X_1 = 0.8 \Omega$
$R_2' = 0.4 \Omega$, $X_2' = 0.7 \Omega$
Stator line voltage = 400 V. Motor is star connected.
Assume the magnetizing branch is neglected.

Calculate:
a) Starting torque ($T_{start}$)
b) Maximum torque ($T_{max}$) and the slip at which it occurs ($s_{max}$)

**Solution:**
Given:
$P = 4$
$R_1 = 0.5 \Omega$
$X_1 = 0.8 \Omega$
$R_2' = 0.4 \Omega$
$X_2' = 0.7 \Omega$
$V_{line} = 400$ V
Star connected.

First, calculate synchronous speed and phase voltage.
$f = 50$ Hz (assuming standard frequency)
$N_s = \frac{120 \times 50}{4} = 1500$ RPM
$V_{ph} = \frac{V_{line}}{\sqrt{3}} = \frac{400}{\sqrt{3}} \approx 230.9$ V

The torque equation (neglecting magnetizing branch):
$T = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{s \cdot \omega_s \cdot [(R_1 + R_2'/s)^2 + (X_1 + X_2')^2]}$
$\omega_s = \frac{2\pi N_s}{60} = \frac{2\pi \times 1500}{60} = 50\pi$ rad/s $\approx 157.08$ rad/s

a) **Starting Torque ($T_{start}$ at s=1):**
$T_{start} = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{1 \cdot \omega_s \cdot [(R_1 + R_2')^2 + (X_1 + X_2')^2]}$
$R_1 + R_2' = 0.5 + 0.4 = 0.9 \Omega$
$X_1 + X_2' = 0.8 + 0.7 = 1.5 \Omega$
$T_{start} = \frac{3 \cdot (230.9)^2 \cdot 0.4}{157.08 \cdot [(0.9)^2 + (1.5)^2]}$
$T_{start} = \frac{3 \cdot 53314.81 \cdot 0.4}{157.08 \cdot [0.81 + 2.25]}$
$T_{start} = \frac{63977.77}{157.08 \cdot 3.06}$
$T_{start} = \frac{63977.77}{480.66} \approx 133.1$ N-m

b) **Maximum Torque ($T_{max}$) and Slip ($s_{max}$):**
Maximum torque occurs when $R_2'/s = \sqrt{R_1^2 + (X_1 + X_2')^2}$
$s_{max} = \frac{R_2'}{\sqrt{R_1^2 + (X_1 + X_2')^2}} = \frac{0.4}{\sqrt{(0.5)^2 + (1.5)^2}} = \frac{0.4}{\sqrt{0.25 + 2.25}} = \frac{0.4}{\sqrt{2.5}} = \frac{0.4}{1.581} \approx 0.253$

Now calculate $T_{max}$ using this $s_{max}$:
$T_{max} = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{s_{max} \cdot \omega_s \cdot [(R_1 + R_2'/s_{max})^2 + (X_1 + X_2')^2]}$
Since $R_1 + R_2'/s_{max} = \sqrt{R_1^2 + (X_1 + X_2')^2}$:
$T_{max} = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{s_{max} \cdot \omega_s \cdot [(\sqrt{R_1^2 + (X_1 + X_2')^2})^2 + (X_1 + X_2')^2]}$
$T_{max} = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{s_{max} \cdot \omega_s \cdot [R_1^2 + (X_1 + X_2')^2 + (X_1 + X_2')^2]}$
$T_{max} = \frac{3 \cdot V_{ph}^2 \cdot R_2'}{s_{max} \cdot \omega_s \cdot [R_1^2 + 2(X_1 + X_2')^2]}$

Let's use the simplified $T_{max}$ formula for cases where stator resistance is not negligible.
The condition for maximum torque is $\frac{R_2'}{s} = \sqrt{R_1^2 + (X_1+X_2')^2}$.
So, $R_1 + \frac{R_2'}{s} = R_1 + \sqrt{R_1^2 + (X_1+X_2')^2}$. This is not correct.

The correct condition is $R_2'/s = \sqrt{R_1^2 + (X_1+X_2')^2}$ only when $X_1$ is neglected.
If $R_1$ is not zero, the condition for maximum torque is when the rotor impedance $(R_2'/s + jX_2')$ sees the stator impedance $(R_1 + jX_1)$ as matched for maximum power transfer, i.e. conjugate match. This isn't directly applicable here.

The condition for maximum torque is when the current in the rotor branch is maximum. This occurs when the total impedance in the rotor circuit ($R_1 + R_2'/s + j(X_1+X_2')$) is minimum, which is not right either.

Let's use the condition that the power output is maximized. This occurs when $P_{out} = T \omega_r = P_{ag} - P_{rot} = (I_2'^2 R_2'/s) - I_2'^2 R_2' = I_2'^2 R_2'(1/s - 1)$.
Maximum torque occurs when the power delivered to the resistance $R_2'/s$ is maximum relative to the slip.
The condition for maximum torque is when $s = s_{max} = \frac{R_2'}{\sqrt{R_1^2 + (X_1+X_2')^2}}$.
This is actually correct.

Let's re-calculate $T_{max}$:
$T_{max} = \frac{3 \cdot V_{ph}^2}{2\omega_s [R_1 + \sqrt{R_1^2 + (X_1+X_2')^2}]}$
$T_{max} = \frac{3 \cdot (230.9)^2}{2 \cdot 157.08 [0.5 + \sqrt{(0.5)^2 + (1.5)^2}]}$
$T_{max} = \frac{3 \cdot 53314.81}{314.16 [0.5 + \sqrt{0.25 + 2.25}]}$
$T_{max} = \frac{159944.43}{314.16 [0.5 + \sqrt{2.5}]}$
$T_{max} = \frac{159944.43}{314.16 [0.5 + 1.581]}$
$T_{max} = \frac{159944.43}{314.16 \cdot 2.081} = \frac{159944.43}{653.42} \approx 244.77$ N-m

**Answer:**
a) $T_{start} \approx 133.1$ N-m
b) $T_{max} \approx 244.77$ N-m at $s_{max} \approx 0.253$

---

## 8. Practice Questions/Exercises

1.  A 6-pole, 50 Hz, 3-phase induction motor runs at 980 RPM at full load. Calculate the synchronous speed and the slip.
    **Answer:** $N_s = 1000$ RPM, $s = 0.02$

2.  A 3-phase induction motor has a starting torque of 150 Nm and a maximum torque of 250 Nm.
    a) What is the ratio of starting torque to maximum torque?
    b) If the starting torque occurs at $s=1$ and maximum torque occurs at $s=0.15$, what can you say about the rotor resistance relative to rotor reactance at standstill?
    **Answer:** a) $150/250 = 0.6$
    b) $T_{start} = k \cdot \frac{R_2'}{R_2'^2 + X_2'^2}$ and $T_{max} = \frac{k}{2R_2'}$.
    $\frac{T_{start}}{T_{max}} = \frac{2R_2'^2}{R_2'^2 + X_2'^2} = 0.6$.
    $2R_2'^2 = 0.6(R_2'^2 + X_2'^2) \implies 1.4R_2'^2 = 0.6X_2'^2 \implies \frac{R_2'^2}{X_2'^2} = \frac{0.6}{1.4} = \frac{3}{7}$.
    $\frac{R_2'}{X_2'} = \sqrt{3/7} \approx 0.65$.
    Also, $s_{max} = R_2'/X_2'$ (approx. if stator impedance is neglected). So $R_2'/X_2' \approx 0.15$.
    These two results are contradictory, indicating that stator impedance likely cannot be neglected for this problem, or the question implies approximate relationships. If we strictly use $s_{max} = R_2'/X_2'$ (neglecting stator impedance), then $R_2'/X_2'$ should be $0.15$.
    Let's re-check the ratio using $s_{max}=0.15$: $\frac{T_{start}}{T_{max}} = \frac{2R_2'^2}{R_2'^2 + (R_2'/s_{max})^2} = \frac{2R_2'^2}{R_2'^2 + (R_2'/0.15)^2} = \frac{2}{1 + (1/0.15)^2} = \frac{2}{1 + (6.667)^2} = \frac{2}{1+44.44} = \frac{2}{45.44} \approx 0.044$.
    This also doesn't match the given ratio of 0.6. This problem likely requires using the full torque equation or specific design ratios. A common design rule is $T_{max}/T_{start} \approx 1.5$ to $2$.

3.  A 3-phase induction motor is running at $4\%$ slip. If the rotor resistance is $0.01 \Omega$ per phase and the rotor current is 50 A per phase, calculate the gross torque and the power transferred to the rotor.
    **Answer:** Let $N_s$ be synchronous speed. $s=0.04$.
    $T_{gross} = \frac{3 I_2'^2 R_2'}{\omega_s} = \frac{3 \times 50^2 \times 0.01}{2\pi N_s/60}$. We need $N_s$. If we assume $N_r$ is known, we can find $N_s$. Without $N_s$, we cannot find $T_{gross}$ directly.
    However, we can find the power converted from electrical to mechanical form ($P_{ag}$).
    $P_{ag} = 3 \cdot I_2'^2 \cdot \frac{R_2'}{s} = 3 \times 50^2 \times \frac{0.01}{0.04} = 3 \times 2500 \times 0.25 = 1875$ W.
    $P_{ag} = T_{gross} \cdot \omega_r$. If $\omega_r$ is known, $T_{gross}$ can be found.
    If we assume a common 4-pole, 50 Hz motor, $N_s = 1500$ RPM.
    $N_r = N_s(1-s) = 1500(1-0.04) = 1500 \times 0.96 = 1440$ RPM.
    $\omega_r = \frac{2\pi \times 1440}{60} = 48\pi$ rad/s.
    $T_{gross} = \frac{P_{ag}}{\omega_r} = \frac{1875}{48\pi} \approx 12.43$ N-m.
    Power transferred to rotor is $P_{ag} = 1875$ W.
    **Answer:** Gross Torque $\approx 12.43$ N-m, Power transferred to rotor = 1875 W.

---

## 9. Important Points to Remember

*   **RMF:** The core of induction motor operation is the stator's rotating magnetic field.
*   **Slip:** Essential for torque production; rotor speed must always be less than synchronous speed.
*   **Torque-Slip Curve:** Varies with slip, starting torque, maximum torque, and normal operating region are key.
*   **$T \propto V^2$:** Torque is highly sensitive to voltage changes.
*   **Rotor Resistance:** Affects starting torque and the slip at which maximum torque occurs. Increasing it generally improves starting performance (at the cost of efficiency and power factor).
*   **Squirrel Cage vs. Slip Ring:** Choose based on starting torque requirements, speed control needs, and cost.

---

This concludes Module 3 on 3-Phase Induction Motors. Understanding these principles is fundamental to analyzing and applying induction motors in various electrical systems.
