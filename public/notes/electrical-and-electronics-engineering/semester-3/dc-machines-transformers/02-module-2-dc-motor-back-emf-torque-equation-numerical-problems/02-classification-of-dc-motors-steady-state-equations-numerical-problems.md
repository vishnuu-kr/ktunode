---
title: "Classification of DC motors – steady-state equations – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 2: DC motor – back emf – torque equation – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b26"
status: "completed"
scrapedAt: "2026-05-23T16:12:19.380Z"
---
# Module 2: DC Motors - Back EMF, Torque Equation, Numerical Problems

## Topic: Classification of DC Motors – Steady-State Equations – Numerical Problems

This module delves into the fundamental principles of DC motors, focusing on their classification, the generation of back EMF, the torque produced, and how to solve practical problems related to their operation.

### Learning Outcomes:

*   Understand the different types of DC motors and their characteristics.
*   Explain the concept of back EMF and its role in DC motor operation.
*   Derive and understand the torque equation for DC motors.
*   Solve numerical problems involving back EMF, torque, and motor performance.

### Course Outcomes Alignment:

*   **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)** - This module directly contributes to this CO by explaining the equations governing motor performance and how to apply them in problem-solving.

---

### 1. Classification of DC Motors

DC motors are classified based on how the field winding (which creates the magnetic flux) is connected to the armature winding (which carries the current and rotates). This connection significantly influences the motor's speed-torque characteristics and its suitability for various applications.

#### 1.1 Shunt DC Motor

*   **Connection:** The field winding is connected in parallel (shunt) with the armature winding.
*   **Characteristics:**
    *   **Constant Speed:** The field flux is nearly constant as the field winding is connected across a constant supply voltage. This results in a relatively constant speed, irrespective of the load. The speed drops slightly with increasing load due to armature resistance drop.
    *   **Good Speed Regulation:** The variation in speed from no-load to full-load is minimal.
    *   **Starting Torque:** Moderate starting torque.
*   **Applications:** Centrifugal pumps, fans, blowers, machine tools (lathes, drilling machines), printing presses.
*   **Diagram:** (Refer to Bimbhra, Chapter 5; Kothari & Nagrath, Chapter 9 for detailed diagrams)

#### 1.2 Series DC Motor

*   **Connection:** The field winding is connected in series with the armature winding. The same current flows through both.
*   **Characteristics:**
    *   **High Starting Torque:** Due to the series connection, the field flux is proportional to the armature current at the start. This results in a very high starting torque.
    *   **Variable Speed:** The speed is highly dependent on the load. As the load increases, the armature current increases, leading to a stronger field flux, which in turn reduces the speed. Conversely, at very light loads, the flux is weak, and the motor can run at dangerously high speeds.
    *   **Poor Speed Regulation:** Significant speed variation with load.
    *   **Cannot be started on no-load:** If started without any load, the armature current will be very small, leading to very weak flux and extremely high speeds, potentially damaging the motor.
*   **Applications:** Traction (electric trains), cranes, hoists, elevators, rolling mills, electric traction.
*   **Diagram:** (Refer to Bimbhra, Chapter 5; Kothari & Nagrath, Chapter 9 for detailed diagrams)

#### 1.3 Compound DC Motor

*   **Connection:** Possesses both a series field winding and a shunt field winding.
*   **Types:**
    *   **Cumulatively Compound:** The magnetic effect of the series field winding aids the magnetic effect of the shunt field winding.
        *   **Long Shunt:** The series winding is placed in series with the armature and shunt field combination.
        *   **Short Shunt:** The series winding is placed in series with the armature only, and the shunt winding is across the armature and series field combined.
    *   **Differentially Compound:** The magnetic effect of the series field winding opposes the magnetic effect of the shunt field winding. (Rarely used due to poor characteristics).
*   **Characteristics (Cumulatively Compound):**
    *   Combines features of both shunt and series motors.
    *   Better starting torque than shunt motors.
    *   Better speed regulation than series motors.
    *   Speed is more stable than series motors but less stable than shunt motors.
*   **Applications:** Presses, shears, punches, conveyors, heavy-duty planers, rolling mills.
*   **Diagram:** (Refer to Bimbhra, Chapter 5; Kothari & Nagrath, Chapter 9 for detailed diagrams)

#### 1.4 Permanent Magnet DC (PMDC) Motor

*   **Connection:** Uses permanent magnets to create the magnetic field instead of electromagnets (field windings).
*   **Characteristics:**
    *   No separate field winding, hence no field circuit loss.
    *   Simpler construction.
    *   Good starting torque.
    *   Generally used for lower power applications.
*   **Applications:** Toys, automotive auxiliaries (wipers, seat adjusters), small fans, record players.
*   **Diagram:** (Refer to Bimbhra, Chapter 5; Kothari & Nagrath, Chapter 9 for detailed diagrams)

---

### 2. Steady-State Equations for DC Motors

The operation of a DC motor can be analyzed using a set of fundamental steady-state equations that relate voltage, current, speed, and torque.

#### 2.1 Back EMF (Electromotive Force)

When the armature of a DC motor rotates in the magnetic field, a voltage is induced in the armature conductors. This induced voltage, according to Lenz's law, opposes the applied voltage. This opposing voltage is called **Back EMF ($E_b$)**.

*   **Generation:** Induced by the rotation of armature conductors in the magnetic field.
*   **Direction:** Opposes the applied voltage ($V$).
*   **Magnitude:** Directly proportional to the motor speed ($N$) and the flux per pole ($\Phi$).

**Mathematical Expression:**

$E_b = \frac{P \Phi Z N}{60A} \text{ Volts}$

Where:
*   $P$: Number of poles
*   $\Phi$: Flux per pole (Webers)
*   $Z$: Total number of armature conductors
*   $N$: Speed of the armature in revolutions per minute (RPM)
*   $A$: Number of parallel paths in the armature winding

We can express this in a more general form:

$E_b = K \Phi \omega \text{ Volts}$

Where:
*   $K$: Motor constant (depends on $P$, $Z$, $A$)
*   $\omega$: Angular speed in radians per second ($\omega = \frac{2\pi N}{60}$)

**Important Point:** The back EMF is crucial for the self-regulating nature of a DC motor. If the load on the motor increases, the armature current increases. This increased current causes the motor to produce more torque. The increased torque causes the motor to slow down slightly, which in turn reduces the back EMF. A reduced back EMF allows more current to flow from the supply, generating the necessary torque to meet the increased load. Conversely, if the load decreases, the motor speeds up, increasing the back EMF, which reduces the armature current.

#### 2.2 Armature Circuit Equation

Applying Kirchhoff's Voltage Law (KVL) to the armature circuit:

$V = E_b + I_a R_a \text{ Volts}$

Where:
*   $V$: Applied armature voltage (Volts)
*   $E_b$: Back EMF (Volts)
*   $I_a$: Armature current (Amperes)
*   $R_a$: Armature circuit resistance (Ohms)

From this equation, we can find the armature current:

$I_a = \frac{V - E_b}{R_a}$

**Important Point:** The armature resistance ($R_a$) is typically very small (usually less than 1 Ohm). This is why the back EMF is usually very close to the applied voltage in a DC motor operating under normal conditions.

#### 2.3 Field Circuit Equation

For shunt and compound motors, the field winding is also an electrical circuit.

*   **Shunt Motor:**
    $V = I_{sh} R_{sh}$
    Where $I_{sh}$ is the shunt field current and $R_{sh}$ is the shunt field resistance.
    The total current drawn from the supply is $I_L = I_a + I_{sh}$.

*   **Series Motor:**
    The field winding is in series with the armature. So, the field current ($I_f$) is equal to the armature current ($I_a$).
    $I_f = I_a$
    The applied voltage is distributed across the armature resistance, series field resistance ($R_{se}$), and the back EMF.
    $V = E_b + I_a (R_a + R_{se})$
    So, $I_a = \frac{V - E_b}{R_a + R_{se}}$

*   **Compound Motor:**
    *   **Long Shunt:** $V = E_b + I_a (R_a + R_{se} + R_{sh})$ if $R_{sh}$ is connected across the entire armature circuit, but typically $I_{sh}$ is connected across $V$. So $V = E_b + I_a(R_a + R_{se})$ and $V = I_{sh}R_{sh}$.
    *   **Short Shunt:** $V = E_b + I_a R_a + I_{series}R_{se}$, where $I_{series} = I_a + I_{sh}$. And $V - I_a R_a = I_{sh}R_{sh}$. (More complex, refer to textbooks for detailed analysis).

#### 2.4 Torque Equation

The torque produced by a DC motor is the mechanical force exerted on the rotating armature. This torque is proportional to the armature current and the flux per pole.

*   **Derivation:**
    Consider a conductor of length $L$ carrying current $I$ placed in a magnetic field of flux density $B$. The force on the conductor is $F = BIL$.
    In a DC motor, the armature conductors are arranged in coils. The total torque is the sum of the torques produced by all the active conductors.

    The back EMF equation can be rewritten as:
    $E_b = K' \Phi N$ (where $K'$ is another constant)
    Also, $E_b = \frac{Z}{2\pi A} \Phi \omega$ (using angular speed $\omega$)

    The mechanical power developed by the armature is $P_m = E_b I_a$.
    We also know that mechanical power is related to torque ($T$) and angular speed ($\omega$) by $P_m = T \omega$.

    Therefore, $T \omega = E_b I_a$.
    Substituting $E_b = K \Phi \omega$ (from Section 2.1):
    $T (K \Phi \omega) I_a$
    $T = K \Phi I_a$

**Mathematical Expression:**

$T = \frac{P \Phi Z I_a}{2\pi A} \text{ Nm}$

We can express this using a motor constant $K_{T}$:

$T = K_T \Phi I_a \text{ Nm}$

Where:
*   $T$: Torque developed by the armature (Newton-meters, Nm)
*   $K_T$: Torque constant (depends on $P$, $Z$, $A$)
*   $\Phi$: Flux per pole (Webers)
*   $I_a$: Armature current (Amperes)

**Important Points:**
*   The torque developed is directly proportional to the flux and the armature current.
*   For a **shunt motor**, $\Phi$ is approximately constant, so $T \propto I_a$. The torque increases linearly with armature current.
*   For a **series motor**, $\Phi \propto I_a$ (up to saturation). Therefore, $T \propto I_a^2$ at low loads and $T \propto I_a$ at high loads (when the magnetic field is saturated). This quadratic relationship at low loads contributes to the high starting torque.

#### 2.5 Shaft Torque ($T_{sh}$)

The developed torque ($T$) is the gross torque produced by the motor. Some of this torque is lost due to rotational losses (friction, windage, iron losses). The torque available at the shaft to drive the load is called the shaft torque ($T_{sh}$).

$T_{sh} = T - T_{loss}$

Where $T_{loss}$ are the rotational or stray load losses.

The output power ($P_{out}$) of the motor is:
$P_{out} = T_{sh} \omega$

#### 2.6 Efficiency ($\eta$)

Efficiency is defined as the ratio of output power to input power.

$\eta = \frac{P_{out}}{P_{in}} \times 100\%$

Where:
*   $P_{in} = V \times I_L$ (for a DC motor, assuming supply voltage $V$ and total line current $I_L$)
*   $P_{out} = T_{sh} \omega$

We can also express efficiency in terms of losses:
$\eta = \frac{P_{out}}{P_{out} + \text{Total Losses}} \times 100\%$

Total Losses = Copper Losses + Core Losses + Mechanical Losses
*   Copper Losses = $I_a^2 R_a + I_{sh}^2 R_{sh} + I_{se}^2 R_{se}$ (for different motor types)
*   Core Losses (Iron Losses) = Hysteresis Loss + Eddy Current Loss (depend on speed and flux)
*   Mechanical Losses = Friction and Windage Loss (depend on speed)

---

### 3. Numerical Problems

Let's work through some example problems to solidify our understanding.

**Example 1: Shunt Motor**

A 220 V, 10 kW, 1000 RPM DC shunt motor has an armature resistance of 0.5 $\Omega$ and a field resistance of 200 $\Omega$. At rated load, the efficiency is 85%. Calculate the armature current and the back EMF at rated load.

**Given:**
*   $V = 220$ V
*   Rated Power (output) $P_{out} = 10$ kW = 10000 W
*   Speed $N = 1000$ RPM
*   Armature Resistance $R_a = 0.5 \Omega$
*   Field Resistance $R_{sh} = 200 \Omega$
*   Efficiency $\eta = 85\% = 0.85$

**To find:**
*   Armature current ($I_a$)
*   Back EMF ($E_b$)

**Solution:**

1.  **Calculate Input Power ($P_{in}$):**
    $\eta = \frac{P_{out}}{P_{in}}$
    $P_{in} = \frac{P_{out}}{\eta} = \frac{10000 \text{ W}}{0.85} = 11764.7 \text{ W}$

2.  **Calculate Line Current ($I_L$):**
    $P_{in} = V \times I_L$
    $I_L = \frac{P_{in}}{V} = \frac{11764.7 \text{ W}}{220 \text{ V}} = 53.48 \text{ A}$

3.  **Calculate Shunt Field Current ($I_{sh}$):**
    The shunt field is connected across the supply voltage.
    $I_{sh} = \frac{V}{R_{sh}} = \frac{220 \text{ V}}{200 \Omega} = 1.1 \text{ A}$

4.  **Calculate Armature Current ($I_a$):**
    The line current is the sum of armature current and shunt field current.
    $I_L = I_a + I_{sh}$
    $I_a = I_L - I_{sh} = 53.48 \text{ A} - 1.1 \text{ A} = 52.38 \text{ A}$

5.  **Calculate Back EMF ($E_b$):**
    Using the armature circuit equation: $V = E_b + I_a R_a$
    $E_b = V - I_a R_a = 220 \text{ V} - (52.38 \text{ A} \times 0.5 \Omega)$
    $E_b = 220 \text{ V} - 26.19 \text{ V} = 193.81 \text{ V}$

**Answer:**
*   Armature current ($I_a$) = 52.38 A
*   Back EMF ($E_b$) = 193.81 V

---

**Example 2: Series Motor**

A 250 V, 50 HP DC series motor draws 400 A at full load speed of 800 RPM. The armature resistance is 0.04 $\Omega$ and the series field resistance is 0.02 $\Omega$. Calculate the starting torque if the starting current is limited to 1.5 times the full load current. Assume flux is proportional to field current.

**Given:**
*   $V = 250$ V
*   Full load speed $N_{fl} = 800$ RPM
*   Full load armature current $I_{a,fl} = 400$ A
*   Armature resistance $R_a = 0.04 \Omega$
*   Series field resistance $R_{se} = 0.02 \Omega$
*   Starting current $I_{a,start} = 1.5 \times I_{a,fl} = 1.5 \times 400$ A $= 600$ A
*   Flux is proportional to field current ($\Phi \propto I_f$). For a series motor, $I_f = I_a$. So, $\Phi \propto I_a$.

**To find:**
*   Starting torque ($T_{start}$)

**Solution:**

1.  **Calculate Back EMF at Full Load ($E_{b,fl}$):**
    For a series motor, $V = E_b + I_a (R_a + R_{se})$
    $E_{b,fl} = V - I_{a,fl} (R_a + R_{se})$
    $E_{b,fl} = 250 \text{ V} - 400 \text{ A} (0.04 \Omega + 0.02 \Omega)$
    $E_{b,fl} = 250 \text{ V} - 400 \text{ A} (0.06 \Omega)$
    $E_{b,fl} = 250 \text{ V} - 24 \text{ V} = 226 \text{ V}$

2.  **Determine the Motor Constant and Flux Relationship:**
    We know $E_b = K \Phi \omega$ and $\Phi \propto I_a$.
    So, $E_b = K (c I_a) \omega$, where $c$ is a proportionality constant.
    Let $K' = Kc$. Then, $E_b = K' I_a \omega$.
    We also know $E_b = K \Phi N / (60A)$. Let $K_{motor} = P Z / (60A)$. Then $E_b = K_{motor} \Phi N$.
    Since $\Phi \propto I_a$, let $\Phi = k I_a$.
    $E_b = k K_{motor} I_a N$. Let $K'' = k K_{motor}$.
    $E_b = K'' I_a N$.

    Using full load values:
    $226 \text{ V} = K'' (400 \text{ A}) (800 \text{ RPM})$
    $K'' = \frac{226}{400 \times 800} = \frac{226}{320000} = 0.00070625 \text{ V-RPM/A}$

3.  **Calculate Back EMF at Starting Current ($E_{b,start}$):**
    Using the relationship $E_b = K'' I_a N$, but we don't know the speed at starting current yet.
    However, we know that $E_b \propto \Phi N$. And for a series motor, $\Phi \propto I_a$.
    So, $E_b \propto I_a N$.
    This means $\frac{E_{b1}}{I_{a1} N_1} = \frac{E_{b2}}{I_{a2} N_2}$.

    Alternatively, and more simply, since $E_b = V - I_a(R_a + R_{se})$, we can calculate $E_{b,start}$ directly without knowing the speed.
    $E_{b,start} = V - I_{a,start} (R_a + R_{se})$
    $E_{b,start} = 250 \text{ V} - 600 \text{ A} (0.04 \Omega + 0.02 \Omega)$
    $E_{b,start} = 250 \text{ V} - 600 \text{ A} (0.06 \Omega)$
    $E_{b,start} = 250 \text{ V} - 36 \text{ V} = 214 \text{ V}$

4.  **Calculate Starting Torque ($T_{start}$):**
    We know $T = K_T \Phi I_a$. Since $\Phi \propto I_a$, let $\Phi = k I_a$.
    $T = K_T (k I_a) I_a = K_T k I_a^2$. Let $K_{torque} = K_T k$.
    So, $T = K_{torque} I_a^2$.

    Using full load values to find $K_{torque}$:
    We need the full load torque first. The output power is 50 HP.
    1 HP = 746 W
    $P_{out,fl} = 50 \text{ HP} = 50 \times 746 \text{ W} = 37300 \text{ W}$
    Angular speed at full load: $\omega_{fl} = \frac{2\pi N_{fl}}{60} = \frac{2\pi \times 800}{60} \text{ rad/s} = 83.78 \text{ rad/s}$
    Shaft torque at full load: $T_{sh,fl} = \frac{P_{out,fl}}{\omega_{fl}} = \frac{37300 \text{ W}}{83.78 \text{ rad/s}} = 445.2 \text{ Nm}$

    Assuming rotational losses are negligible for this problem (as they are not given), we can equate developed torque to shaft torque for simplicity in finding the constant.
    $T_{fl} \approx T_{sh,fl} = 445.2 \text{ Nm}$
    $T_{fl} = K_{torque} I_{a,fl}^2$
    $445.2 \text{ Nm} = K_{torque} (400 \text{ A})^2$
    $K_{torque} = \frac{445.2}{160000} = 0.0027825 \text{ Nm/A}^2$

    Now calculate starting torque:
    $T_{start} = K_{torque} I_{a,start}^2$
    $T_{start} = 0.0027825 \text{ Nm/A}^2 \times (600 \text{ A})^2$
    $T_{start} = 0.0027825 \times 360000 \text{ Nm}$
    $T_{start} = 1001.7 \text{ Nm}$

**Answer:**
*   Starting torque ($T_{start}$) = 1001.7 Nm

---

### 4. Practice Questions

1.  A 230 V shunt motor takes 5 A when running light at 1200 RPM. The armature resistance is 0.5 $\Omega$ and the field resistance is 230 $\Omega$.
    (a) What is the back EMF at no load?
    (b) If the motor takes 25 A at 1100 RPM under load, calculate the torque developed at this load.

2.  A DC series motor is running at 800 RPM and taking 50 A at 220 V. The armature resistance is 0.1 $\Omega$ and the series field resistance is 0.1 $\Omega$. If the motor is running at 1000 RPM and taking 30 A, calculate the torque in each case and hence determine the ratio of torques. Assume flux is proportional to armature current.

3.  A 220 V DC shunt motor has an armature resistance of 0.2 $\Omega$ and field resistance of 220 $\Omega$. When the motor is operating at a speed of 900 RPM, the armature current is 40 A. Calculate:
    (a) Back EMF at 900 RPM.
    (b) Armature current when the motor develops a starting torque equal to the torque at 900 RPM.

---

### 5. Answers to Practice Questions

1.  **(a) Back EMF at no load:**
    *   $I_{sh} = V / R_{sh} = 220 V / 230 \Omega = 0.96$ A
    *   $I_a (\text{light}) = I_L (\text{light}) - I_{sh} = 5 A - 0.96 A = 4.04$ A
    *   $E_b (\text{no load}) = V - I_a (\text{light}) R_a = 220 V - (4.04 A \times 0.5 \Omega) = 220 V - 2.02 V = 217.98$ V

    **(b) Torque developed at load:**
    *   $I_a (\text{load}) = I_L (\text{load}) - I_{sh} = 25 A - 0.96 A = 24.04$ A
    *   $E_b (\text{load}) = V - I_a (\text{load}) R_a = 220 V - (24.04 A \times 0.5 \Omega) = 220 V - 12.02 V = 207.98$ V
    *   We know $E_b \propto \Phi N$. For a shunt motor, $\Phi$ is constant. So, $E_b \propto N$.
    *   $\frac{E_{b1}}{N_1} = \frac{E_{b2}}{N_2}$
    *   $\frac{217.98 \text{ V}}{1200 \text{ RPM}} = \frac{207.98 \text{ V}}{N_2}$
    *   $N_2 = \frac{207.98 \times 1200}{217.98} = 1143.16$ RPM (Note: The question stated 1100 RPM, this is likely an error in the question or implies some other losses. We use the given 1100 RPM for the torque calculation.)
    *   We know $T \propto \Phi I_a$. For a shunt motor, $\Phi$ is constant. So, $T \propto I_a$.
    *   $\frac{T_2}{T_1} = \frac{I_{a2}}{I_{a1}}$
    *   We need the no-load torque to find the proportionality constant. Assuming no-load torque is negligible, $T_1 \approx 0$. This approach is incorrect.
    *   Let's use $T = K_T \Phi I_a$. For a shunt motor, $K_T \Phi$ is constant. Let it be $K'$. $T = K' I_a$.
    *   We need to find $K'$. From the no-load condition, if we assume no-load torque is zero, then $I_a=4.04$A produces zero torque, which is incorrect.
    *   A better approach: $T \propto \Phi I_a$. Since $\Phi$ is constant for a shunt motor, $T \propto I_a$.
    *   We need a reference torque. If we assume the starting torque is proportional to starting current, this is not accurate without a specific starting condition.
    *   Let's use the fact that $T = \frac{E_b I_a}{ \omega}$. (This is incorrect, it should be $T = \frac{P_m}{\omega} = \frac{E_b I_a}{\omega}$)
    *   Torque is proportional to $E_b$ and $I_a$. $T \propto \Phi I_a$. Since $\Phi$ is constant, $T \propto I_a$.
    *   Let $T_{no-load}$ be the torque at no load. $T_{no-load} = K \times I_{a, no-load}$. (This is not correct, the back EMF changes).
    *   The simplest way is to relate torque to armature current directly for a shunt motor: $T = K \cdot I_a$.
    *   We don't have a torque value for the no-load condition to find $K$.
    *   **Revised approach for Torque Calculation:** $T = K_T \Phi I_a$. Since $\Phi$ is constant for a shunt motor, $T = K' I_a$.
    *   The power developed is $P_m = E_b I_a$.
    *   $P_{m, load} = 207.98 \text{ V} \times 24.04 \text{ A} = 5000.84$ W.
    *   The speed at load is given as 1100 RPM.
    *   $T_{load} = \frac{P_{m, load}}{\omega_{load}} = \frac{5000.84 \text{ W}}{\frac{2\pi \times 1100}{60} \text{ rad/s}} = \frac{5000.84}{115.19} \approx 43.41$ Nm.

    **Answer:** (b) 43.41 Nm

2.  **Ratio of Torques:**
    *   **Case 1 (Full Load):** $N_1 = 800$ RPM, $I_{a1} = 50$ A
        $E_{b1} = V - I_{a1}(R_a + R_{se}) = 220 V - 50 A (0.1 \Omega + 0.1 \Omega) = 220 V - 50 A (0.2 \Omega) = 220 V - 10 V = 210$ V
        Since $\Phi \propto I_a$, let $\Phi_1 = k I_{a1}$.
        $T_1 = K_T \Phi_1 I_{a1} = K_T (k I_{a1}) I_{a1} = K_T k I_{a1}^2$. Let $K = K_T k$.
        $T_1 = K I_{a1}^2 = K (50)^2 = 2500 K$

    *   **Case 2 (Light Load):** $N_2 = 1000$ RPM, $I_{a2} = 30$ A
        $E_{b2} = V - I_{a2}(R_a + R_{se}) = 220 V - 30 A (0.1 \Omega + 0.1 \Omega) = 220 V - 30 A (0.2 \Omega) = 220 V - 6 V = 214$ V
        $\Phi_2 = k I_{a2}$.
        $T_2 = K I_{a2}^2 = K (30)^2 = 900 K$

    *   **Ratio of Torques:**
        $\frac{T_2}{T_1} = \frac{900 K}{2500 K} = \frac{9}{25} = 0.36$

    **Answer:** Ratio of torques ($T_2/T_1$) = 0.36

3.  **(a) Back EMF at 900 RPM:**
    *   $I_{sh} = V / R_{sh} = 220 V / 220 \Omega = 1$ A
    *   $I_a = 40$ A
    *   $E_b = V - I_a R_a = 220 V - (40 A \times 0.2 \Omega) = 220 V - 8 V = 212$ V

    **(b) Armature current for starting torque equal to torque at 900 RPM:**
    *   For a DC shunt motor, $T \propto I_a$ (assuming constant flux).
    *   Let $T_{900}$ be the torque at 900 RPM. $T_{900} = K \cdot I_{a,900} = K \cdot 40$ A.
    *   Let $T_{start}$ be the starting torque. $T_{start} = K \cdot I_{a,start}$.
    *   We want $T_{start} = T_{900}$.
    *   Therefore, $K \cdot I_{a,start} = K \cdot 40$ A.
    *   $I_{a,start} = 40$ A.
    *   However, this is incorrect. Starting torque occurs at zero speed. At zero speed, $E_b = 0$.
    *   The condition is "starting torque equal to the torque at 900 RPM". This refers to the magnitude of torque.
    *   At starting ($N=0$), $E_b = 0$. So, $V = I_{a,start} R_a$.
    *   $I_{a,start} = V / R_a = 220 V / 0.2 \Omega = 1100$ A.
    *   Since $T \propto I_a$ for a shunt motor, if the starting torque is equal to the torque at 900 RPM, then the armature current at starting must be equal to the armature current at 900 RPM.
    *   Therefore, $I_{a,start} = 40$ A.
    *   Wait, the interpretation of "starting torque equal to the torque at 900 RPM" usually implies finding a new starting current value that produces that torque.
    *   Let's re-read carefully. "Armature current when the motor develops a starting torque equal to the torque at 900 RPM."
    *   Torque at 900 RPM is proportional to $I_{a,900}$ (40 A). So $T_{900} = K \times 40$ A.
    *   Starting torque $T_{start}$ is developed when the motor is starting. At starting, $N=0$, $E_b=0$.
    *   The current drawn at starting is $I_{a,start} = V/R_a = 220V/0.2\Omega = 1100$ A.
    *   The starting torque is $T_{start} = K \times I_{a,start} = K \times 1100$ A.
    *   The problem states $T_{start} = T_{900}$. This implies $K \times 1100$ A $= K \times 40$ A. This is only possible if K is zero, which is not true.
    *   There might be a misunderstanding of the question. Usually, such a question might be posed as: "What is the starting current required to produce the same torque as the motor develops at 900 RPM?". In that case, the answer is 40A.
    *   However, if it's asking for the armature current *at starting* that produces a specific torque, and that torque is equal to the torque at 900 RPM, we need to re-evaluate.
    *   Let's assume the question means: Find the armature current $I_{a, new}$ such that the torque produced by $I_{a, new}$ is equal to the torque produced at 900 RPM.
    *   $T_{900} \propto I_{a,900}$
    *   $T_{new} \propto I_{a,new}$
    *   If $T_{new} = T_{900}$, then $I_{a,new} = I_{a,900} = 40$ A.
    *   But this is not a "starting" current. Starting current is determined by $V/R_a$.
    *   Let's consider a scenario where the motor is starting *and* we want to limit the starting current. If we limited the starting current to 40A, what would be the torque? It would be the same torque as at 900 RPM.
    *   If the question implies finding the armature current during starting (i.e., $N=0$) that results in a torque equal to the torque at 900 RPM, and we know that $T \propto I_a$ for shunt motors, then the armature current must be 40 A. But this contradicts the fact that starting current is $V/R_a$.
    *   **Most likely interpretation:** The question is asking for the armature current that needs to be supplied *during starting* to produce a torque equal to the torque at 900 RPM. Since $T \propto I_a$ for shunt motors, and the torque at 900 RPM is produced by $I_a = 40$ A, then the starting armature current that produces the same torque would also be 40 A. This is a specific scenario, not necessarily the maximum starting current.

    **Answer:** (b) 40 A

---

### 6. Important Points to Remember

*   **Back EMF ($E_b$)**: Opposes applied voltage, crucial for speed regulation ($E_b = K \Phi \omega$).
*   **Armature Circuit Equation**: $V = E_b + I_a R_a$.
*   **Torque Equation**: $T = K_T \Phi I_a$.
*   **Shunt Motors**: Constant speed, moderate starting torque. $T \propto I_a$.
*   **Series Motors**: High starting torque, variable speed, dangerous at no-load. $T \propto I_a^2$ (unsaturated).
*   **Compound Motors**: Combine characteristics of shunt and series motors.
*   **Losses**: Copper losses ($I^2R$) are the primary losses, along with core and mechanical losses.
*   **Efficiency**: Ratio of output power to input power.

---
