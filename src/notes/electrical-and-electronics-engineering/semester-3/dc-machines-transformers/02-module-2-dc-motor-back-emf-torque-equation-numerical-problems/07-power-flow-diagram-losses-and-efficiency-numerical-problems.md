---
title: "Power flow diagram – losses and efficiency – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 2: DC motor – back emf – torque equation – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b2b"
status: "completed"
scrapedAt: "2026-05-23T16:12:23.005Z"
---
## DC MACHINES & TRANSFORMERS: Module 2 - DC Motor Performance Analysis

This module delves into the operational aspects of DC motors, focusing on their efficiency and power flow. We will analyze how electrical energy is converted into mechanical energy, identify various losses incurred during this process, and understand how to calculate the efficiency of a DC motor.

---

### Topic: Power Flow Diagram, Losses, and Efficiency in DC Motors

This topic directly supports **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)**. Understanding the power flow and losses is crucial for analyzing the motor's performance under varying loads.

---

### 1. Power Flow Diagram in a DC Motor

The power flow diagram illustrates the journey of electrical energy input to mechanical energy output in a DC motor. It helps visualize where energy is consumed and where losses occur.

**Key Concept:** The primary function of a DC motor is to convert electrical energy into mechanical energy.

**Diagrammatic Representation:**

```
+---------------------+      +-------------------+      +--------------------+      +--------------------+      +--------------------+
| Electrical Input    | ---->| Conductors        | ---->| Mechanical Power   | ---->| Stray Losses       | ---->| Useful Output      |
| (Armature Terminal  |      | (Armature Copper  |      | Developed          |      | (Friction, Windage,|      | (Shaft Power)      |
| Power, P_in)        |      | Losses, P_cu_arm)|      | (Developed Power,  |      | Brush Friction,     |      | (P_out)            |
+---------------------+      +-------------------+      | P_dev)             |      | Core Losses)       |      +--------------------+
                                                          +--------------------+      +--------------------+
                                                                     |                       |
                                                                     V                       V
                                                          +--------------------+      +--------------------+
                                                          | Series Field Copper|      | Shunt Field Copper |
                                                          | Losses (P_cu_se)   |      | Losses (P_cu_sh)   |
                                                          +--------------------+      +--------------------+
```

**Explanation of Stages:**

*   **Electrical Input (P_in):** This is the power supplied to the armature terminals of the DC motor.
    *   $P_{in} = V_a \times I_a$
        *   $V_a$: Armature terminal voltage
        *   $I_a$: Armature current
    *   For a DC shunt motor, the input power is often considered at the line terminals: $P_{in} = V_L \times I_L$, where $I_L = I_a + I_{sh}$.

*   **Armature Copper Losses ($P_{cu\_arm}$):** This is the power dissipated as heat in the armature winding due to the flow of armature current.
    *   $P_{cu\_arm} = I_a^2 \times R_a$
        *   $R_a$: Armature resistance

*   **Developed Mechanical Power ($P_{dev}$):** This is the total mechanical power developed by the motor internally. This power is the electrical input minus the armature copper losses. It's also related to the back EMF and armature current.
    *   $P_{dev} = V_a \times I_a - I_a^2 \times R_a$
    *   $P_{dev} = E_b \times I_a$
        *   $E_b$: Back EMF

*   **Stray Losses ($P_{stray}$):** These losses are not directly proportional to the load and are generally considered constant. They include:
    *   **Core Losses:** Losses due to hysteresis and eddy currents in the iron core of the armature. These depend on the magnetic flux density and speed.
        *   Hysteresis Loss $\propto B_{max}^{1.6}$
        *   Eddy Current Loss $\propto B_{max}^2 \times f^2$
        *   Since $E_b \propto \Phi N$, and $B_{max}$ is roughly proportional to $\Phi$, and frequency $f$ is proportional to $N$ (motor speed), core losses are approximately proportional to $N^2$ at constant flux. For a DC motor with constant applied voltage, flux is nearly constant, so core losses are primarily dependent on speed ($P_{core} \propto N^2$).
    *   **Mechanical Losses:**
        *   **Friction Losses:** Due to the rubbing of brushes on the commutator, bearing friction.
        *   **Windage Losses:** Due to the air resistance offered by the rotating armature.
    *   These losses are often grouped together as $P_{stray}$ or $P_{friction\_windage}$.

*   **Useful Output Power ($P_{out}$):** This is the net mechanical power available at the motor shaft.
    *   $P_{out} = P_{dev} - P_{stray}$
    *   $P_{out} = P_{in} - (P_{cu\_arm} + P_{cu\_se} + P_{cu\_sh} + P_{stray})$

**Additional Losses to Consider (depending on motor type):**

*   **Series Field Copper Losses ($P_{cu\_se}$):** In series and compound motors, power is lost in the series field winding.
    *   $P_{cu\_se} = I_{se}^2 \times R_{se}$
        *   $I_{se}$: Series field current (often equal to $I_a$ in series motors)
        *   $R_{se}$: Series field resistance

*   **Shunt Field Copper Losses ($P_{cu\_sh}$):** Power lost in the shunt field winding.
    *   $P_{cu\_sh} = V_{sh} \times I_{sh} = I_{sh}^2 \times R_{sh} = V_{sh}^2 / R_{sh}$
        *   $V_{sh}$: Shunt field voltage (usually the line voltage $V_L$)
        *   $I_{sh}$: Shunt field current
        *   $R_{sh}$: Shunt field resistance

**Power Flow Equation:**

*   **For Shunt/Compound Motor (with separately excited shunt field):**
    $P_{in} = V_a I_a$ (Armature Terminal Power)
    $P_{in} = V_L I_L$ (Line Input Power, considering $V_{sh} = V_L$)
    $P_{in} = P_{cu\_arm} + P_{dev} + P_{cu\_sh}$ (Considering armature input power)
    $P_{dev} = E_b I_a$
    $P_{out} = P_{dev} - P_{stray}$

*   **For Series Motor:**
    $P_{in} = V_L I_L$
    $I_a = I_{se} = I_L$
    $P_{in} = P_{cu\_arm} + P_{cu\_se} + P_{dev}$
    $P_{dev} = E_b I_a$
    $P_{out} = P_{dev} - P_{stray}$

**Important Point:** The developed mechanical power ($P_{dev}$) is the power directly available from the armature's rotation, before accounting for mechanical friction and windage.

---

### 2. Losses in DC Motors

Understanding the types of losses is crucial for calculating efficiency and identifying areas for improvement.

**Categorization of Losses:**

1.  **Constant Losses (or No-Load Losses):** These losses are practically constant irrespective of the load. They are mainly due to excitation and mechanical effects.
    *   **Shunt Field Copper Loss ($P_{cu\_sh}$):** As long as the shunt field voltage is constant, this loss is constant.
        *   $P_{cu\_sh} = V_{sh} I_{sh} = V_{sh}^2 / R_{sh}$
    *   **Stray Losses ($P_{stray}$):** This includes core losses and mechanical losses (friction and windage).
        *   Core losses depend on flux and speed. For a shunt motor with constant voltage and thus constant flux, core losses are primarily dependent on speed. At no load, the speed is maximum, and hence core losses are maximum. As load increases, speed decreases slightly, reducing core losses. However, they are often approximated as constant, especially if the speed variation with load is not significant.
        *   Mechanical losses (friction and windage) are also generally assumed to be constant with load, though they can slightly increase with speed.

2.  **Variable Losses:** These losses vary with the load, primarily with the square of the armature current.
    *   **Armature Copper Loss ($P_{cu\_arm}$):** $I_a^2 R_a$. This is directly proportional to the square of the armature current, which is the main load-dependent factor.
    *   **Series Field Copper Loss ($P_{cu\_se}$):** $I_{se}^2 R_{se}$. This loss is present in series and compound motors and varies with the square of the series field current, which is typically load-dependent.

**Total Losses ($P_{losses}$):**

$P_{losses} = P_{cu\_arm} + P_{cu\_se} + P_{cu\_sh} + P_{stray}$
$P_{losses} = I_a^2 R_a + I_{se}^2 R_{se} + V_{sh} I_{sh} + P_{stray}$

**Key Point:** For a shunt motor, $I_{se}$ is not applicable, and $I_{sh}$ is relatively constant. For a series motor, $I_a = I_{se}$ and $I_{sh}$ is absent.

---

### 3. Efficiency of a DC Motor

Efficiency ($\eta$) is a measure of how effectively the motor converts electrical input power into mechanical output power.

**Definition:**
Efficiency is the ratio of output power to input power, usually expressed as a percentage.

$\eta = \frac{P_{out}}{P_{in}} \times 100\%$

**Alternative Formulae for Efficiency:**

Since $P_{in} = P_{out} + P_{losses}$, we can write:

$\eta = \frac{P_{out}}{P_{out} + P_{losses}} \times 100\%$

Also, since $P_{out} = P_{in} - P_{losses}$:

$\eta = \frac{P_{in} - P_{losses}}{P_{in}} \times 100\%$
$\eta = (1 - \frac{P_{losses}}{P_{in}}) \times 100\%$

**Methods to Determine Losses and Calculate Efficiency:**

1.  **Direct Measurement:** Measuring all input and output powers and resistances. This is often done in a laboratory setting.
2.  **Indirect Methods (from Specifications):** Using given resistance values and understanding the nature of losses.

**Determining Constant Losses:**

Constant losses can be determined by running the motor at its rated voltage and speed without any mechanical load. In this case, the output power ($P_{out}$) is zero, and the input power is almost entirely consumed by the field copper loss and stray losses.

*   For a shunt motor: $P_{in(no-load)} \approx P_{cu\_sh} + P_{stray}$
    So, $P_{stray} \approx P_{in(no-load)} - P_{cu\_sh}$
    Where $P_{cu\_sh} = V_{sh}^2 / R_{sh}$.

*   For a series motor, running at no-load is impractical and dangerous due to uncontrolled speed increase.

**Example of Efficiency Calculation (Shunt Motor):**

Let's say a DC shunt motor is operating under specific conditions.
Input power ($P_{in}$) = 10 kW
Armature resistance ($R_a$) = 0.5 $\Omega$
Shunt field resistance ($R_{sh}$) = 100 $\Omega$
Shunt field voltage ($V_{sh}$) = 230 V
Armature current ($I_a$) = 40 A

1.  **Calculate Shunt Field Current ($I_{sh}$):**
    $I_{sh} = V_{sh} / R_{sh} = 230 \text{ V} / 100 \Omega = 2.3 \text{ A}$

2.  **Calculate Shunt Field Copper Loss ($P_{cu\_sh}$):**
    $P_{cu\_sh} = V_{sh} \times I_{sh} = 230 \text{ V} \times 2.3 \text{ A} = 529 \text{ W} = 0.529 \text{ kW}$

3.  **Calculate Armature Copper Loss ($P_{cu\_arm}$):**
    $P_{cu\_arm} = I_a^2 \times R_a = (40 \text{ A})^2 \times 0.5 \Omega = 1600 \times 0.5 = 800 \text{ W} = 0.8 \text{ kW}$

4.  **Calculate Input Power (if not given, using armature and field currents):**
    $P_{in} = V_a I_a + V_{sh} I_{sh}$ (assuming $V_a = V_{sh}$)
    If $V_a = 230$ V, then $P_{in} = 230 \text{ V} \times 40 \text{ A} + 529 \text{ W} = 9200 \text{ W} + 529 \text{ W} = 9729 \text{ W} = 9.729 \text{ kW}$.
    *Note: In this example, the given $P_{in}$ was 10 kW. This indicates there might be other losses or the given values are slightly inconsistent or it implies the armature voltage is slightly different from shunt field voltage. For consistency, let's use the given $P_{in} = 10$ kW.*

5.  **Calculate Total Losses:**
    $P_{losses} = P_{in} - P_{out}$
    To find $P_{out}$, we need $P_{dev}$ and $P_{stray}$.
    $P_{dev} = E_b \times I_a$. We need $E_b$.
    $E_b = V_a - I_a R_a = 230 \text{ V} - 40 \text{ A} \times 0.5 \Omega = 230 - 20 = 210 \text{ V}$.
    $P_{dev} = 210 \text{ V} \times 40 \text{ A} = 8400 \text{ W} = 8.4 \text{ kW}$.

    Now, $P_{in} = P_{cu\_arm} + P_{cu\_sh} + P_{dev} + P_{stray}$ (This form isn't directly helpful if $P_{in}$ is given).

    Let's use the direct relation:
    $P_{in} = P_{out} + P_{losses}$
    $P_{losses} = P_{cu\_arm} + P_{cu\_sh} + P_{stray}$

    We are given $P_{in} = 10$ kW.
    We calculated $P_{cu\_arm} = 0.8$ kW and $P_{cu\_sh} = 0.529$ kW.
    We can't directly calculate $P_{stray}$ from the given information without knowing the no-load power or having $P_{out}$ and $P_{dev}$.

    **Revised Approach for Consistency:** If $P_{in} = 10$ kW is given, and $V_a = 230$ V, $I_a = 40$ A:
    $P_{input\_armature} = V_a I_a = 230 \text{ V} \times 40 \text{ A} = 9200 \text{ W} = 9.2 \text{ kW}$.
    This means the total input power of 10 kW is from the line, and the shunt field takes a portion of it.
    Let's assume $P_{in}$ refers to the total electrical power supplied to the motor.

    $P_{in} = 10 \text{ kW}$
    $P_{cu\_arm} = I_a^2 R_a = (40 \text{ A})^2 \times 0.5 \Omega = 800 \text{ W} = 0.8 \text{ kW}$
    $P_{cu\_sh} = V_{sh}^2 / R_{sh} = (230 \text{ V})^2 / 100 \Omega = 529 \text{ W} = 0.529 \text{ kW}$
    $E_b = V_a - I_a R_a = 230 \text{ V} - 40 \text{ A} \times 0.5 \Omega = 210 \text{ V}$
    $P_{dev} = E_b I_a = 210 \text{ V} \times 40 \text{ A} = 8400 \text{ W} = 8.4 \text{ kW}$

    Now, let's find $P_{stray}$ using the power balance:
    $P_{in} = P_{cu\_arm} + P_{cu\_sh} + P_{stray} + P_{out}$
    Also, $P_{dev} = P_{stray} + P_{out}$
    So, $P_{out} = P_{dev} - P_{stray}$

    Substitute $P_{out}$ in the first equation:
    $P_{in} = P_{cu\_arm} + P_{cu\_sh} + P_{stray} + (P_{dev} - P_{stray})$
    $P_{in} = P_{cu\_arm} + P_{cu\_sh} + P_{dev}$
    $10 \text{ kW} = 0.8 \text{ kW} + 0.529 \text{ kW} + 8.4 \text{ kW}$
    $10 \text{ kW} = 9.729 \text{ kW}$

    This shows an inconsistency if $P_{in}$ is taken as total input power and $V_a$ is assumed equal to $V_{sh}$.
    Let's assume $P_{in}$ refers to the armature input power $V_a I_a$.

    **Scenario 1: $P_{in}$ is armature input power ($V_a I_a$)**
    $P_{in\_armature} = V_a I_a = 10 \text{ kW}$
    $P_{cu\_arm} = I_a^2 R_a = (40 \text{ A})^2 \times 0.5 \Omega = 0.8 \text{ kW}$
    $P_{dev} = P_{in\_armature} - P_{cu\_arm} = 10 \text{ kW} - 0.8 \text{ kW} = 9.2 \text{ kW}$

    If we need to calculate overall efficiency, we need the total input. Let's assume the problem implies $V_a = 230$ V and $I_a = 40$ A, and the total input power *to the motor terminals* is 10 kW.

    **Scenario 2: $P_{in}$ is total input power to the motor terminals**
    $P_{in} = 10 \text{ kW}$
    $P_{cu\_arm} = 0.8 \text{ kW}$
    $P_{cu\_sh} = 0.529 \text{ kW}$
    $P_{dev} = 8.4 \text{ kW}$ (Calculated from $E_b \times I_a$ with $V_a=230$V)

    Total losses excluding stray losses = $P_{cu\_arm} + P_{cu\_sh} = 0.8 + 0.529 = 1.329 \text{ kW}$.
    $P_{dev} = P_{out} + P_{stray}$
    $P_{in} = P_{cu\_arm} + P_{cu\_sh} + P_{stray} + P_{out}$
    $10 = 0.8 + 0.529 + P_{stray} + P_{out}$
    $10 = 1.329 + P_{stray} + P_{out}$
    $8.671 = P_{stray} + P_{out}$

    Also, $P_{dev} = P_{stray} + P_{out}$
    $8.4 = P_{stray} + P_{out}$

    Subtracting the second from the first:
    $8.671 - 8.4 = (P_{stray} + P_{out}) - (P_{stray} + P_{out})$
    $0.271 = 0$  -> This indicates an inconsistency in the initial assumptions or provided data.

    **Let's re-evaluate the problem statement or typical exam problem structure.** Often, $V_a$ and $I_a$ are given, along with $R_a$ and $R_{sh}$, and the operating conditions (e.g., speed, torque) or the output power are given. The input power can then be calculated.

    **Let's assume the problem intends to provide enough information to calculate all losses and then efficiency.**

    **Revised Example Calculation:**
    A DC shunt motor has the following parameters:
    $R_a = 0.5 \Omega$
    $R_{sh} = 100 \Omega$
    $V_L = 230 \text{ V}$
    Shunt field current $I_{sh} = 2.3 \text{ A}$ (implies $V_{sh} = 230$ V)
    When operating at rated load, the motor draws a line current $I_L = 40 \text{ A}$.
    The motor speed is $N = 1500$ RPM.
    Assume stray losses at rated load are $P_{stray} = 500$ W.

    1.  **Armature Current ($I_a$):**
        $I_a = I_L - I_{sh} = 40 \text{ A} - 2.3 \text{ A} = 37.7 \text{ A}$

    2.  **Electrical Input Power ($P_{in}$):**
        $P_{in} = V_L \times I_L = 230 \text{ V} \times 40 \text{ A} = 9200 \text{ W} = 9.2 \text{ kW}$

    3.  **Shunt Field Copper Loss ($P_{cu\_sh}$):**
        $P_{cu\_sh} = V_{sh} \times I_{sh} = 230 \text{ V} \times 2.3 \text{ A} = 529 \text{ W} = 0.529 \text{ kW}$

    4.  **Armature Copper Loss ($P_{cu\_arm}$):**
        $P_{cu\_arm} = I_a^2 \times R_a = (37.7 \text{ A})^2 \times 0.5 \Omega \approx 1421.29 \times 0.5 \approx 710.6 \text{ W} = 0.711 \text{ kW}$

    5.  **Back EMF ($E_b$):**
        $E_b = V_a - I_a R_a = 230 \text{ V} - 37.7 \text{ A} \times 0.5 \Omega \approx 230 - 18.85 = 211.15 \text{ V}$

    6.  **Developed Mechanical Power ($P_{dev}$):**
        $P_{dev} = E_b \times I_a = 211.15 \text{ V} \times 37.7 \text{ A} \approx 7957.8 \text{ W} = 7.958 \text{ kW}$
        Alternatively: $P_{dev} = V_a I_a - I_a^2 R_a = (230 \text{ V} \times 37.7 \text{ A}) - 710.6 \text{ W} \approx 8671 - 710.6 = 7960.4 \text{ W} = 7.960 \text{ kW}$ (Slight difference due to rounding).

    7.  **Output Mechanical Power ($P_{out}$):**
        $P_{out} = P_{dev} - P_{stray}$
        $P_{out} = 7960.4 \text{ W} - 500 \text{ W} = 7460.4 \text{ W} = 7.460 \text{ kW}$

    8.  **Total Losses ($P_{losses}$):**
        $P_{losses} = P_{cu\_arm} + P_{cu\_sh} + P_{stray}$
        $P_{losses} = 710.6 \text{ W} + 529 \text{ W} + 500 \text{ W} = 1739.6 \text{ W} = 1.740 \text{ kW}$
        Check: $P_{in} = P_{out} + P_{losses} = 7460.4 \text{ W} + 1739.6 \text{ W} = 9200 \text{ W}$. This matches.

    9.  **Efficiency ($\eta$):**
        $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{7460.4 \text{ W}}{9200 \text{ W}} \times 100\% \approx 81.09\%$

**Finding Stray Losses Experimentally (No-Load Test):**

For a shunt motor, performing a no-load test helps determine constant losses.
*   Run the motor at rated voltage and speed with no load connected to the shaft.
*   Measure armature current ($I_{a0}$), line current ($I_{L0}$), and armature voltage ($V_a$).
*   Armature current at no load: $I_{a0} = I_{L0} - I_{sh}$.
*   Shunt field current is assumed to be the same: $I_{sh} = V_L / R_{sh}$.
*   Shunt field loss: $P_{cu\_sh} = V_L \times I_{sh}$.
*   Armature copper loss at no load: $P_{cu\_arm0} = I_{a0}^2 \times R_a$.
*   Input power at no load: $P_{in0} = V_L \times I_{L0}$.
*   Constant Losses ($P_{const}$) = $P_{in0} - P_{cu\_arm0}$.
*   $P_{const} = P_{cu\_sh} + P_{stray}$ (Since $P_{out} = 0$ at no load).
*   Therefore, $P_{stray} = P_{const} - P_{cu\_sh} = (P_{in0} - P_{cu\_arm0}) - P_{cu\_sh}$.

**Efficiency Curve:**
Plotting efficiency against output power or torque reveals that efficiency is zero at zero load, increases to a maximum at a certain load (typically around 70-80% of full load), and then slightly decreases at overload due to the rapidly increasing variable losses.

**Maximum Efficiency:**
Maximum efficiency occurs when the variable losses are equal to the constant losses.
$P_{losses\_variable} = P_{losses\_constant}$
$I_a^2 R_a = P_{cu\_sh} + P_{stray}$ (for shunt motor)

This condition helps determine the load at which maximum efficiency is achieved.

---

### 4. Numerical Problems and Practice Questions

**Problem 1:**
A DC shunt motor draws 5 kW power from a 230 V supply. The motor has $R_a = 0.5 \Omega$ and $R_{sh} = 115 \Omega$. The friction and windage losses are 300 W and core losses are 500 W. Calculate the efficiency of the motor.

**Solution:**
1.  **Shunt Field Current ($I_{sh}$):**
    $I_{sh} = V_{sh} / R_{sh} = 230 \text{ V} / 115 \Omega = 2 \text{ A}$
2.  **Shunt Field Copper Loss ($P_{cu\_sh}$):**
    $P_{cu\_sh} = V_{sh} \times I_{sh} = 230 \text{ V} \times 2 \text{ A} = 460 \text{ W} = 0.46 \text{ kW}$
3.  **Total Input Power ($P_{in}$):**
    $P_{in} = 5 \text{ kW} = 5000 \text{ W}$
4.  **Armature Current ($I_a$):**
    $P_{in} = V_a I_a + P_{cu\_sh}$ (Assuming $V_a = V_{sh}$)
    $5000 \text{ W} = 230 \text{ V} \times I_a + 460 \text{ W}$
    $230 \times I_a = 5000 - 460 = 4540 \text{ W}$
    $I_a = 4540 / 230 \approx 19.74 \text{ A}$
5.  **Armature Copper Loss ($P_{cu\_arm}$):**
    $P_{cu\_arm} = I_a^2 \times R_a = (19.74 \text{ A})^2 \times 0.5 \Omega \approx 389.67 \times 0.5 \approx 194.8 \text{ W}$
6.  **Stray Losses ($P_{stray}$):**
    $P_{stray} = P_{friction\_windage} + P_{core} = 300 \text{ W} + 500 \text{ W} = 800 \text{ W}$
7.  **Total Losses ($P_{losses}$):**
    $P_{losses} = P_{cu\_arm} + P_{cu\_sh} + P_{stray}$
    $P_{losses} = 194.8 \text{ W} + 460 \text{ W} + 800 \text{ W} = 1454.8 \text{ W}$
8.  **Output Power ($P_{out}$):**
    $P_{out} = P_{in} - P_{losses} = 5000 \text{ W} - 1454.8 \text{ W} = 3545.2 \text{ W}$
9.  **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{3545.2 \text{ W}}{5000 \text{ W}} \times 100\% = 70.904\%$

**Answer:** The efficiency of the motor is approximately 70.9%.

---

**Practice Question 1:**
A DC series motor takes 20 A and develops an output power of 4.476 kW. The motor resistance ($R_a + R_{se}$) is 1 $\Omega$. If the stray losses are 250 W, calculate the efficiency.

**Solution:**
1.  **Input Power ($P_{in}$):**
    $P_{in} = P_{out} + P_{losses}$
    We need to find $P_{losses}$ first.
    $P_{in} = P_{dev} + P_{losses\_exc}$ (where $P_{losses\_exc}$ are losses other than armature and series field copper losses)
    $P_{in} = P_{dev} + (P_{cu\_arm} + P_{cu\_se}) + P_{stray}$
    $P_{dev} = E_b I_a$

    Let's work from the knowns:
    $P_{out} = 4.476 \text{ kW} = 4476 \text{ W}$
    $I_a = 20 \text{ A}$ (for series motor, $I_a = I_{se}$)
    $R_{a} + R_{se} = 1 \Omega$
    $P_{stray} = 250 \text{ W}$

    We need the back EMF ($E_b$) to find $P_{dev}$.
    $V_L = E_b + I_a (R_a + R_{se})$
    We don't know $V_L$. This implies we might need to find $P_{dev}$ another way.

    Consider the power flow:
    $P_{in} = V_L \times I_a$
    $P_{dev} = P_{in} - I_a^2 (R_a + R_{se})$
    $P_{out} = P_{dev} - P_{stray}$

    Substitute $P_{dev}$:
    $P_{out} = [P_{in} - I_a^2 (R_a + R_{se})] - P_{stray}$
    $P_{out} = P_{in} - I_a^2 (R_a + R_{se}) - P_{stray}$

    We want to find $\eta = P_{out} / P_{in}$. We need $P_{in}$.

    Let's express $P_{in}$ in terms of $P_{out}$:
    $P_{in} = P_{out} + I_a^2 (R_a + R_{se}) + P_{stray}$
    $P_{in} = 4476 \text{ W} + (20 \text{ A})^2 \times 1 \Omega + 250 \text{ W}$
    $P_{in} = 4476 \text{ W} + 400 \text{ W} + 250 \text{ W}$
    $P_{in} = 5126 \text{ W}$

2.  **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{4476 \text{ W}}{5126 \text{ W}} \times 100\% \approx 87.32\%$

**Answer:** The efficiency of the DC series motor is approximately 87.32%.

---

**Practice Question 2:**
A 200 V, 10 hp (746 W/hp), DC shunt motor draws a line current of 5 A at no load. The armature resistance is $0.5 \Omega$ and the field resistance is 100 $\Omega$. At full load, the motor draws a line current of 40 A. Calculate the full load efficiency. Assume stray losses are constant.

**Solution:**
1.  **No-Load Calculations:**
    *   Line Voltage ($V_L$) = 200 V
    *   Shunt Field Resistance ($R_{sh}$) = 100 $\Omega$
    *   Shunt Field Current ($I_{sh}$) = $V_L / R_{sh} = 200 \text{ V} / 100 \Omega = 2 \text{ A}$
    *   No-load Line Current ($I_{L0}$) = 5 A
    *   No-load Armature Current ($I_{a0}$) = $I_{L0} - I_{sh} = 5 \text{ A} - 2 \text{ A} = 3 \text{ A}$
    *   Armature Resistance ($R_a$) = 0.5 $\Omega$
    *   No-load Armature Copper Loss ($P_{cu\_arm0}$) = $I_{a0}^2 \times R_a = (3 \text{ A})^2 \times 0.5 \Omega = 9 \times 0.5 = 4.5 \text{ W}$
    *   No-load Input Power ($P_{in0}$) = $V_L \times I_{L0} = 200 \text{ V} \times 5 \text{ A} = 1000 \text{ W}$
    *   Constant Losses ($P_{const}$) = $P_{in0} - P_{cu\_arm0}$
    *   $P_{const} = 1000 \text{ W} - 4.5 \text{ W} = 995.5 \text{ W}$
    *   These constant losses include shunt field copper loss and stray losses.
    *   Shunt Field Copper Loss ($P_{cu\_sh}$) = $V_L \times I_{sh} = 200 \text{ V} \times 2 \text{ A} = 400 \text{ W}$
    *   Stray Losses ($P_{stray}$) = $P_{const} - P_{cu\_sh} = 995.5 \text{ W} - 400 \text{ W} = 595.5 \text{ W}$
    *   (Stray losses are assumed constant for all load conditions).

2.  **Full-Load Calculations:**
    *   Full-load Line Current ($I_L$) = 40 A
    *   Shunt Field Current ($I_{sh}$) = 2 A (assumed constant)
    *   Full-load Armature Current ($I_a$) = $I_L - I_{sh} = 40 \text{ A} - 2 \text{ A} = 38 \text{ A}$
    *   Full-load Input Power ($P_{in}$) = $V_L \times I_L = 200 \text{ V} \times 40 \text{ A} = 8000 \text{ W}$
    *   Full-load Armature Copper Loss ($P_{cu\_arm}$) = $I_a^2 \times R_a = (38 \text{ A})^2 \times 0.5 \Omega = 1444 \times 0.5 = 722 \text{ W}$
    *   Shunt Field Copper Loss ($P_{cu\_sh}$) = 400 W (constant)
    *   Stray Losses ($P_{stray}$) = 595.5 W (constant)
    *   Total Losses ($P_{losses}$) = $P_{cu\_arm} + P_{cu\_sh} + P_{stray}$
    *   $P_{losses} = 722 \text{ W} + 400 \text{ W} + 595.5 \text{ W} = 1717.5 \text{ W}$
    *   Output Power ($P_{out}$) = $P_{in} - P_{losses} = 8000 \text{ W} - 1717.5 \text{ W} = 6282.5 \text{ W}$

3.  **Full-Load Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{6282.5 \text{ W}}{8000 \text{ W}} \times 100\% = 78.53\%$

**Answer:** The full load efficiency of the DC shunt motor is approximately 78.53%.

---

### Important Points to Remember

*   **Power Flow Diagram:** Understand the sequence of energy conversion and the points where losses occur.
*   **Losses Classification:** Differentiate between constant losses (field copper, stray) and variable losses (armature copper, series field copper).
*   **Efficiency Formulae:** $\eta = \frac{P_{out}}{P_{in}}$, $\eta = \frac{P_{out}}{P_{out} + P_{losses}}$, $\eta = \frac{P_{in} - P_{losses}}{P_{in}}$.
*   **Maximum Efficiency:** Occurs when variable losses equal constant losses.
*   **No-Load Test:** Crucial for determining constant losses (especially stray losses) in shunt motors.
*   **Series Motors:** Be cautious with no-load operation and remember $I_a = I_{se} = I_L$.
*   **Consistency in Units:** Ensure all powers are in Watts or Kilowatts, and voltages/currents/resistances are consistent.

---
