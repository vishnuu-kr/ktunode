---
title: "Power flow diagram – losses and efficiency – maximum efficiency - numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b22"
status: "completed"
scrapedAt: "2026-05-23T16:12:17.206Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: Power Flow Diagram – Losses and Efficiency – Maximum Efficiency – Numerical Problems

### 1. Introduction to Power Flow in DC Machines

This topic focuses on understanding how electrical power is converted into mechanical power (in a DC generator) or how mechanical power is converted into electrical power (in a DC motor), and the associated energy losses that occur during this process. Understanding these concepts is crucial for analyzing the performance and efficiency of DC machines.

### 2. Power Flow Diagram

The power flow diagram visually represents the journey of power from input to output in a DC machine, highlighting where energy is converted and where losses occur.

#### 2.1 DC Generator Power Flow Diagram

*   **Input:** Mechanical Power ($P_{mech}$) supplied by the prime mover.
*   **Losses in the Armature Circuit:**
    *   **Armature Copper Loss ($I_a^2 R_a$):** Heat generated due to current flow in the armature winding.
    *   **Brush Contact Loss ($V_{brush} I_a$):** Voltage drop across the brushes and commutator.
*   **Generated Electromechanical Power ($P_{gen}$):** The power converted from mechanical to electrical form within the armature.
    $P_{gen} = P_{mech} - \text{Armature Losses}$
*   **Losses in the Field Circuit:**
    *   **Field Copper Loss ($I_f^2 R_f$):** Heat generated due to current flow in the field winding. (Note: This is typically considered separately from the armature power flow but is a significant loss in the machine).
*   **Output:** Electrical Power ($P_{out}$) delivered to the external load.
    $P_{out} = P_{gen} - \text{Brush Contact Loss}$

**Visual Representation (DC Generator):**

```
+-----------------+     - Armature Copper Loss     +-------------------+     - Brush Contact Loss     +-----------------+
| Mechanical Input| --> Generated Electromechanical | --> Electrical Output|
|    (P_mech)     |     (I_a^2 R_a)                 |      Power (P_gen) |     (V_brush * I_a)      |    (P_out)      |
+-----------------+                                 +-------------------+                          +-----------------+
                                                            |
                                                            | - Field Copper Loss (I_f^2 R_f)
                                                            |   (Often considered external to this flow)
                                                            v
                                                        +------------+
                                                        | Field Losses|
                                                        +------------+
```

#### 2.2 DC Motor Power Flow Diagram

*   **Input:** Electrical Power ($P_{in}$) supplied to the armature.
*   **Losses in the Armature Circuit:**
    *   **Armature Copper Loss ($I_a^2 R_a$):** Heat generated due to current flow in the armature winding.
    *   **Brush Contact Loss ($V_{brush} I_a$):** Voltage drop across the brushes and commutator.
*   **Developed Electromechanical Power ($P_{dev}$):** The power converted from electrical to mechanical form within the armature.
    $P_{dev} = P_{in} - (\text{Armature Copper Loss} + \text{Brush Contact Loss})$
*   **Mechanical Losses (Stray Losses):**
    *   **Iron Losses ($P_{iron}$):** Losses due to hysteresis and eddy currents in the armature core. These are generally dependent on speed and flux.
    *   **Mechanical Losses ($P_{mech\_loss}$):**
        *   **Friction Losses:** Due to bearing friction and windage.
        *   **Windage Losses:** Due to air resistance from the rotating armature.
    *   Iron losses and mechanical losses are often grouped together as **Stray Losses ($P_{stray} = P_{iron} + P_{mech\_loss}$)**. These losses are typically assumed to be constant for a given speed.
*   **Output:** Mechanical Power ($P_{out}$) delivered to the load (shaft power).
    $P_{out} = P_{dev} - P_{stray}$

**Visual Representation (DC Motor):**

```
+----------------+     - Armature Copper Loss     +-------------------+     - Brush Contact Loss     +-------------------+     - Stray Losses     +-----------------+
| Electrical Input| --> Developed Electromechanical | --> Mechanical Output|
|    (P_in)      |     (I_a^2 R_a)                 |      Power (P_dev) |     (V_brush * I_a)      |   (P_stray)       | --> Shaft Power (P_out)|
+----------------+                                 +-------------------+                          +-----------------+
                                                          |
                                                          | - Field Copper Loss (I_f^2 R_f)
                                                          |   (Constant for a given excitation)
                                                          v
                                                      +------------+
                                                      | Field Losses|
                                                      +------------+
```

### 3. Types of Losses in DC Machines

Losses are unavoidable in any electrical machine and are broadly categorized as:

#### 3.1 Copper Losses (Variable Losses)

*   **Armature Copper Loss ($P_{cu,a}$ or $I_a^2 R_a$):** Occurs in the armature winding due to the flow of armature current. This is a *variable loss* as it depends on the square of the armature current, which varies with load.
*   **Field Copper Loss ($P_{cu,f}$ or $I_f^2 R_f$):** Occurs in the field winding due to the flow of field current. For shunt and compound machines, the field current is usually constant (assuming constant supply voltage), making this a *constant loss*. For series machines, the field current is the same as the armature current, so it becomes a *variable loss*.
*   **Commutator Brush Contact Loss ($P_{brush}$ or $V_{brush} I_a$):** Occurs due to the voltage drop at the brush-commutator interface. This is usually assumed to be constant (e.g., 2V per brush pair, so 4V for a 4-brush machine) for a given current, making it a *variable loss* proportional to armature current.

#### 3.2 Iron Losses (Core Losses)

*   **Hysteresis Loss ($P_h$):** Caused by the repeated magnetization and demagnetization of the armature core material as it rotates through the stationary magnetic field. It depends on the flux density, frequency of rotation, and properties of the core material.
*   **Eddy Current Loss ($P_e$):** Induced by the changing magnetic flux in the armature core. These circulating currents flow within the core and dissipate energy as heat. Eddy currents are minimized by laminating the armature core.
*   **Total Iron Loss ($P_{iron} = P_h + P_e$).** Iron losses are primarily dependent on the magnetic flux and the speed of rotation. For a constant flux and speed, they can be considered approximately constant. However, if the speed or flux varies significantly, these losses also change. In many performance calculations, they are treated as *constant losses* for a given operating speed.

#### 3.3 Mechanical Losses

*   **Friction Loss ($P_f$):** Due to friction in bearings of the armature shaft.
*   **Windage Loss ($P_w$):** Due to the resistance of the air to the rotation of the armature.
*   **Total Mechanical Loss ($P_{mech\_loss} = P_f + P_w$).** These are also primarily dependent on speed and are often grouped with iron losses as *Stray Losses*.

#### 3.4 Total Losses

Total losses in a DC machine are the sum of copper losses, iron losses, and mechanical losses.

$P_{losses} = P_{cu,a} + P_{cu,f} + P_{brush} + P_{iron} + P_{mech\_loss}$

For a DC motor: $P_{losses} = I_a^2 R_a + V_{brush} I_a + I_f^2 R_f + P_{stray}$ (where $P_{stray} = P_{iron} + P_{mech\_loss}$)
For a DC generator: $P_{losses} = I_a^2 R_a + V_{brush} I_a + I_f^2 R_f + P_{stray}$ (where $P_{stray}$ is added to generated power before output)

**Important Note:** For shunt/compound generators, field copper loss is subtracted from the generated power to get output power. For shunt/compound motors, field copper loss is added to the output power to get the developed mechanical power.

### 4. Efficiency

Efficiency ($\eta$) of an electrical machine is defined as the ratio of useful output power to the total input power.

*   **For a DC Motor:**
    $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{P_{out}}{P_{in}}$
    $P_{in} = P_{out} + P_{losses}$
    $\eta = \frac{P_{out}}{P_{out} + P_{losses}}$

*   **For a DC Generator:**
    $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{P_{out}}{P_{mech}}$
    $P_{mech} = P_{out} + P_{losses}$
    $\eta = \frac{P_{out}}{P_{out} + P_{losses}}$

**Key Definitions:**

*   **Output Power ($P_{out}$):** Useful power delivered by the machine (mechanical for motor, electrical for generator).
*   **Input Power ($P_{in}$ or $P_{mech}$):** Power supplied to the machine (electrical for motor, mechanical for generator).
*   **Losses ($P_{losses}$):** Power dissipated as heat or converted into unwanted forms.

**Efficiency is usually expressed as a percentage:**

$\eta\% = \frac{P_{out}}{P_{in}} \times 100\%$

**Textbook Reference:**
*   **P.S. Bimbhra (Electrical Machinery):** Chapter 3 (DC Generators) and Chapter 4 (DC Motors) discuss power flow and losses.
*   **D P Kothari & I J Nagrath (Electric Machines):** Chapter 4 (DC Generators) and Chapter 5 (DC Motors) cover these aspects in detail.
*   **J.B. Gupta (Theory & Performance of Electrical Machines):** Chapters on DC Generators and Motors will provide detailed explanations.

### 5. Condition for Maximum Efficiency

The efficiency of a DC machine is maximum when the *variable losses* are equal to the *constant losses*.

**Derivation for a DC Motor:**

Let:
*   $P_{out}$ = Output power (constant for a given load)
*   $K_{const}$ = Sum of constant losses (Iron losses + Mechanical losses + Field copper loss for shunt/compound motor)
*   $K_{var}$ = Sum of variable losses (Armature copper loss + Brush contact loss)

The armature copper loss is $I_a^2 R_a$.
The brush contact loss is $V_{brush} I_a$.
Let's assume $V_{brush}$ is constant.
So, $K_{var} = I_a^2 R_a + V_{brush} I_a$.

The input power to the motor is $P_{in} = P_{out} + P_{losses}$.
$P_{losses} = I_a^2 R_a + V_{brush} I_a + K_{const}'$ (where $K_{const}'$ represents the constant losses other than field loss if field loss is included in $K_{const}$).

For simplicity, let's consider:
$P_{losses} = K_{var}(I_a) + K_{const}$

From the motor voltage equation: $V = E_b + I_a R_a$.
Generated EMF, $E_b = k \Phi N$.
Armature current $I_a = \frac{V - E_b}{R_a}$.
For a DC motor under a fixed load, $P_{out}$ is fixed. $P_{out} = E_b I_a - P_{stray}$. Since $P_{stray}$ is assumed constant, $E_b I_a$ is also roughly constant.
$E_b I_a = P_{dev}$.
$I_a = \frac{P_{dev}}{E_b}$.
This relationship is complex. A simpler approach is to consider the load on the machine.

Let's re-evaluate based on typical assumptions:
*   **Constant Losses ($K$):** Iron losses ($P_{iron}$) + Mechanical losses ($P_{mech\_loss}$) + Field copper loss ($I_f^2 R_f$ for shunt/compound).
*   **Variable Losses:** Armature copper loss ($I_a^2 R_a$) + Brush contact loss ($V_{brush} I_a$).

Let's assume for simplicity that brush loss is negligible or included in stray losses for the purpose of the *maximum efficiency condition*.
So, $P_{losses} = I_a^2 R_a + K$.

Efficiency of a DC Motor:
$\eta = \frac{P_{out}}{P_{in}} = \frac{P_{out}}{P_{out} + I_a^2 R_a + K}$

To find the condition for maximum efficiency, we differentiate $\eta$ with respect to $I_a$ and set it to zero. It's easier to differentiate with respect to output power or relate $I_a$ to output.

Alternatively, consider the input power: $P_{in} = P_{out} + P_{losses}$.
For maximum efficiency, $\frac{d\eta}{dP_{out}} = 0$.
$\frac{d}{dP_{out}} \left( \frac{P_{out}}{P_{out} + P_{losses}} \right) = 0$
$\frac{(P_{out} + P_{losses})(1) - P_{out}(1 + \frac{dP_{losses}}{dP_{out}})}{(P_{out} + P_{losses})^2} = 0$
$P_{out} + P_{losses} - P_{out} - P_{out}\frac{dP_{losses}}{dP_{out}} = 0$
$P_{losses} = P_{out}\frac{dP_{losses}}{dP_{out}}$

Now, consider how losses vary with output.
$P_{out} \approx P_{dev} = E_b I_a$. So $I_a \approx \frac{P_{out}}{E_b}$.
If we assume $E_b$ is constant (which is not entirely true, as it depends on speed, but for a given machine operating under some condition), then $I_a$ is proportional to $P_{out}$.
If $I_a$ is proportional to $P_{out}$, then $I_a^2 R_a$ is proportional to $P_{out}^2$.
This is getting complicated.

**The fundamental condition for maximum efficiency is:**

**Variable Losses = Constant Losses**

*   **For DC Generators:** $\eta = \frac{P_{out}}{P_{mech}} = \frac{P_{out}}{P_{out} + P_{losses}}$.
    Let $P_{losses} = I_a^2 R_a + K$.
    For a generator, $I_a = I_L + I_f$. If $I_f$ is constant (shunt/compound), $I_a$ is proportional to $I_L$. So $I_a^2 R_a$ is proportional to $I_L^2$.
    $P_{out} = V_L I_L$. So $I_L = P_{out} / V_L$.
    $I_a^2 R_a \propto (P_{out}/V_L)^2$.
    This still leads to complex relationships.

**A simpler approach using a general formulation:**
Let $P_{losses} = A + B I_a^2$ where A represents constant losses and $B I_a^2$ represents variable losses (ignoring brush drop for simplicity here).
$P_{out} = P_{in} - P_{losses} = V I_a - (A + B I_a^2)$
$\eta = \frac{P_{out}}{P_{in}} = \frac{V I_a - (A + B I_a^2)}{V I_a} = 1 - \frac{A + B I_a^2}{V I_a} = 1 - \frac{A}{V I_a} - \frac{B I_a}{V}$

To maximize $\eta$, we need to minimize $\frac{A}{V I_a} + \frac{B I_a}{V}$.
Differentiate with respect to $I_a$:
$\frac{d}{dI_a} \left( \frac{A}{V I_a} + \frac{B I_a}{V} \right) = -\frac{A}{V I_a^2} + \frac{B}{V} = 0$
$\frac{B}{V} = \frac{A}{V I_a^2}$
$B I_a^2 = A$

This means **variable losses ($B I_a^2$) must equal constant losses ($A$)** for maximum efficiency.

If brush drop ($V_{brush} I_a$) is significant and considered variable:
$P_{losses} = I_a^2 R_a + V_{brush} I_a + K$
Here, the variable part is $I_a^2 R_a + V_{brush} I_a$.
If $V_{brush}$ is constant, this is not a simple quadratic.

**Practical Assumption:**
For many DC machines, especially at rated or near-rated conditions, the armature current $I_a$ does not vary wildly. The condition "variable losses = constant losses" is a good rule of thumb.

*   **Constant Losses (K):** Usually includes Iron losses, mechanical losses, and field copper loss (for shunt/compound).
*   **Variable Losses:** Primarily armature copper loss ($I_a^2 R_a$). Brush drop ($V_{brush}I_a$) is also variable.

**So, the condition for maximum efficiency is:**
**Armature Copper Loss = Constant Losses**
($I_a^2 R_a = K_{const}$)

This condition allows us to determine the armature current ($I_a$) at which maximum efficiency occurs.

### 6. Numerical Problems

Let's work through some examples to illustrate the concepts.

**Example 1: DC Motor Efficiency Calculation**

A $220 \text{ V}$ DC shunt motor takes an armature current of $40 \text{ A}$ and a field current of $2 \text{ A}$. The armature resistance is $0.25 \Omega$ and the field resistance is $100 \Omega$. The brush drop is $1 \text{ V}$ per brush. The iron and mechanical losses are $450 \text{ W}$. Calculate the efficiency of the motor.

**Solution:**

1.  **Calculate Input Power ($P_{in}$):**
    The motor is connected to a $220 \text{ V}$ supply.
    Total current drawn = Armature current + Field current
    $I_{total} = I_a + I_f = 40 \text{ A} + 2 \text{ A} = 42 \text{ A}$
    $P_{in} = V \times I_{total} = 220 \text{ V} \times 42 \text{ A} = 9240 \text{ W}$

2.  **Calculate Losses:**
    *   Armature Copper Loss ($P_{cu,a}$): $I_a^2 R_a = (40 \text{ A})^2 \times 0.25 \Omega = 1600 \times 0.25 = 400 \text{ W}$
    *   Field Copper Loss ($P_{cu,f}$): $I_f^2 R_f = (2 \text{ A})^2 \times 100 \Omega = 4 \times 100 = 400 \text{ W}$
    *   Brush Contact Loss ($P_{brush}$): There are usually 4 brushes in a DC motor. So, $4 \times 1 \text{ V/brush} \times 40 \text{ A} = 160 \text{ W}$.
    *   Iron and Mechanical Losses ($P_{stray}$): $450 \text{ W}$ (given)

3.  **Calculate Total Losses ($P_{losses}$):**
    $P_{losses} = P_{cu,a} + P_{cu,f} + P_{brush} + P_{stray}$
    $P_{losses} = 400 \text{ W} + 400 \text{ W} + 160 \text{ W} + 450 \text{ W} = 1410 \text{ W}$

4.  **Calculate Output Power ($P_{out}$):**
    $P_{out} = P_{in} - P_{losses}$
    $P_{out} = 9240 \text{ W} - 1410 \text{ W} = 7830 \text{ W}$

5.  **Calculate Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
    $\eta = \frac{7830 \text{ W}}{9240 \text{ W}} \times 100\% \approx 84.74\%$

**Example 2: DC Generator Efficiency Calculation**

A $10 \text{ kW}$, $250 \text{ V}$ shunt generator has an armature resistance of $0.5 \Omega$ and a field resistance of $250 \Omega$. The stray losses are $300 \text{ W}$. Calculate the efficiency when operating at full load.

**Solution:**

1.  **Identify Full Load Conditions:**
    Rated output power $P_{out} = 10 \text{ kW} = 10000 \text{ W}$
    Rated terminal voltage $V_t = 250 \text{ V}$

2.  **Calculate Full Load Output Current ($I_L$):**
    $I_L = \frac{P_{out}}{V_t} = \frac{10000 \text{ W}}{250 \text{ V}} = 40 \text{ A}$

3.  **Calculate Field Current ($I_f$):**
    For a shunt generator, the field winding is connected across the terminal voltage.
    $I_f = \frac{V_t}{R_f} = \frac{250 \text{ V}}{250 \Omega} = 1 \text{ A}$

4.  **Calculate Armature Current ($I_a$):**
    $I_a = I_L + I_f = 40 \text{ A} + 1 \text{ A} = 41 \text{ A}$

5.  **Calculate Losses:**
    *   Armature Copper Loss ($P_{cu,a}$): $I_a^2 R_a = (41 \text{ A})^2 \times 0.5 \Omega = 1681 \times 0.5 = 840.5 \text{ W}$
    *   Field Copper Loss ($P_{cu,f}$): $I_f^2 R_f = (1 \text{ A})^2 \times 250 \Omega = 1 \times 250 = 250 \text{ W}$
    *   Stray Losses ($P_{stray}$): $300 \text{ W}$ (given)
    *   Brush Contact Loss: Assuming negligible or included in stray losses as per problem statement (often specified if to be included). If assumed negligible, we proceed without it.

6.  **Calculate Total Losses ($P_{losses}$):**
    $P_{losses} = P_{cu,a} + P_{cu,f} + P_{stray}$
    $P_{losses} = 840.5 \text{ W} + 250 \text{ W} + 300 \text{ W} = 1390.5 \text{ W}$

7.  **Calculate Input Mechanical Power ($P_{mech}$):**
    $P_{mech} = P_{out} + P_{losses}$
    $P_{mech} = 10000 \text{ W} + 1390.5 \text{ W} = 11390.5 \text{ W}$

8.  **Calculate Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{mech}} \times 100\%$
    $\eta = \frac{10000 \text{ W}}{11390.5 \text{ W}} \times 100\% \approx 87.79\%$

**Example 3: Finding Condition for Maximum Efficiency**

A $200 \text{ V}$ DC shunt motor has $R_a = 0.3 \Omega$ and $R_{sh} = 200 \Omega$. The motor draws $15 \text{ A}$ at full load. At no load, it draws $2 \text{ A}$ and runs at $1200 \text{ rpm}$. Assuming that stray losses are constant, find:
a) The output power at full load.
b) The efficiency at full load.
c) The armature current at which maximum efficiency occurs.
d) The maximum efficiency.
e) The output power for maximum efficiency.

**Solution:**

**Step 1: Calculate Losses at No Load**
At no load, $I_a = 2 \text{ A}$ (total input current is $2 \text{ A}$ if no load current is specified as armature current). Let's assume total input current is $2 \text{ A}$.
Input power at no load $P_{in,nl} = V \times I_{nl} = 200 \text{ V} \times 2 \text{ A} = 400 \text{ W}$.
Field current $I_f = \frac{V}{R_{sh}} = \frac{200 \text{ V}}{200 \Omega} = 1 \text{ A}$.
Armature current at no load $I_{a,nl} = I_{nl} - I_f = 2 \text{ A} - 1 \text{ A} = 1 \text{ A}$.
Armature copper loss at no load $P_{cu,a,nl} = I_{a,nl}^2 R_a = (1 \text{ A})^2 \times 0.3 \Omega = 0.3 \text{ W}$.
Brush drop at no load $P_{brush,nl} = 4 \times 1 \text{ V/brush} \times I_{a,nl} = 4 \times 1 \text{ V} \times 1 \text{ A} = 4 \text{ W}$.
Let's assume $P_{out,nl} \approx 0$.
Then, $P_{in,nl} = P_{losses,nl} = P_{cu,a,nl} + P_{brush,nl} + P_{cu,f} + P_{stray}$.
Field copper loss $P_{cu,f} = I_f^2 R_{sh} = (1 \text{ A})^2 \times 200 \Omega = 200 \text{ W}$.
$400 \text{ W} = 0.3 \text{ W} + 4 \text{ W} + 200 \text{ W} + P_{stray}$.
$P_{stray} = 400 - 0.3 - 4 - 200 = 195.7 \text{ W}$.
So, Constant Losses $K = P_{stray} + P_{cu,f} + P_{brush,nl} = 195.7 + 200 + 4 = 399.7 \text{ W}$. (Note: Brush drop is considered constant for the purpose of finding max efficiency condition when current is small at no load). A more precise approach might consider brush drop as variable. Let's re-evaluate this.

**Revised Step 1: Calculate Losses at No Load, Separating Variable Components**
At no load: $I_{total,nl} = 2 \text{ A}$, $V = 200 \text{ V}$, $R_a = 0.3 \Omega$, $R_{sh} = 200 \Omega$.
$I_f = 200/200 = 1 \text{ A}$.
$I_{a,nl} = 2 - 1 = 1 \text{ A}$.
$P_{in,nl} = 200 \times 2 = 400 \text{ W}$.
$P_{cu,a,nl} = (1)^2 \times 0.3 = 0.3 \text{ W}$.
$P_{cu,f} = (1)^2 \times 200 = 200 \text{ W}$.
$P_{brush,nl} = 4 \times 1 \text{ V} \times 1 \text{ A} = 4 \text{ W}$. (Assuming 4 brushes).

Since $P_{out,nl} \approx 0$, the input power is consumed by losses.
$P_{in,nl} = P_{cu,a,nl} + P_{brush,nl} + P_{cu,f} + P_{stray}$
$400 = 0.3 + 4 + 200 + P_{stray}$
$P_{stray} = 400 - 204.3 = 195.7 \text{ W}$.
We are told stray losses are constant. So $P_{stray} = 195.7 \text{ W}$.
Constant Losses $K = P_{stray} + P_{cu,f} = 195.7 \text{ W} + 200 \text{ W} = 395.7 \text{ W}$.
(Note: Brush drop is often treated as a variable loss proportional to $I_a$ when considering maximum efficiency conditions, but let's use the constant loss definition as per common practice where $K$ includes field loss, stray losses).

**a) Output power at full load:**
Full load: $I_{total,fl} = 15 \text{ A}$.
$I_a = I_{total,fl} - I_f = 15 \text{ A} - 1 \text{ A} = 14 \text{ A}$.
$P_{in,fl} = V \times I_{total,fl} = 200 \text{ V} \times 15 \text{ A} = 3000 \text{ W}$.
Armature copper loss at full load $P_{cu,a,fl} = I_a^2 R_a = (14 \text{ A})^2 \times 0.3 \Omega = 196 \times 0.3 = 58.8 \text{ W}$.
Brush drop at full load $P_{brush,fl} = 4 \times 1 \text{ V} \times 14 \text{ A} = 56 \text{ W}$.
Total losses at full load $P_{losses,fl} = P_{cu,a,fl} + P_{brush,fl} + P_{cu,f} + P_{stray}$
$P_{losses,fl} = 58.8 \text{ W} + 56 \text{ W} + 200 \text{ W} + 195.7 \text{ W} = 510.5 \text{ W}$.
Output power at full load $P_{out,fl} = P_{in,fl} - P_{losses,fl} = 3000 \text{ W} - 510.5 \text{ W} = 2489.5 \text{ W}$.

**b) Efficiency at full load:**
$\eta_{fl} = \frac{P_{out,fl}}{P_{in,fl}} \times 100\% = \frac{2489.5 \text{ W}}{3000 \text{ W}} \times 100\% \approx 82.98\%$

**c) Armature current at which maximum efficiency occurs:**
Condition for maximum efficiency: Variable Losses = Constant Losses.
Here, variable losses are primarily $P_{cu,a} + P_{brush}$. Constant losses $K$ are $P_{stray} + P_{cu,f}$.
Let $I_a$ be the armature current for max efficiency.
Variable Losses $= I_a^2 R_a + 4 \times 1 \times I_a = 0.3 I_a^2 + 4 I_a$.
Constant Losses $K = 195.7 \text{ W} + 200 \text{ W} = 395.7 \text{ W}$.
Set Variable Losses = Constant Losses:
$0.3 I_a^2 + 4 I_a = 395.7$
$0.3 I_a^2 + 4 I_a - 395.7 = 0$

Using the quadratic formula $I_a = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$a = 0.3, b = 4, c = -395.7$
$I_a = \frac{-4 \pm \sqrt{4^2 - 4(0.3)(-395.7)}}{2(0.3)}$
$I_a = \frac{-4 \pm \sqrt{16 + 474.84}}{0.6}$
$I_a = \frac{-4 \pm \sqrt{490.84}}{0.6}$
$I_a = \frac{-4 \pm 22.155}{0.6}$
Since current cannot be negative, we take the positive root:
$I_a = \frac{-4 + 22.155}{0.6} = \frac{18.155}{0.6} \approx 30.26 \text{ A}$.

*Self-Correction:* The common simplified condition $I_a^2 R_a = K_{const}$ is used when brush drop is negligible or assumed constant. If brush drop is significant, it's $I_a^2 R_a + V_{brush}I_a = K_{const}$. Let's use the simpler condition as it's more frequently tested.

**Revised c) using $I_a^2 R_a = K_{const}$:**
Constant Losses $K_{const} = P_{stray} + P_{cu,f} = 195.7 \text{ W} + 200 \text{ W} = 395.7 \text{ W}$.
Variable Loss is $I_a^2 R_a$.
Set $I_a^2 R_a = K_{const}$:
$I_a^2 \times 0.3 = 395.7$
$I_a^2 = \frac{395.7}{0.3} = 1319$
$I_a = \sqrt{1319} \approx 36.32 \text{ A}$.

*Note on brush drop:* The inclusion of brush drop significantly affects the current for max efficiency. The problem statement doesn't explicitly state how to treat it for max efficiency. Often, the simplified $I_a^2 R_a = K$ is assumed. If brush drop is $V_b I_a$, then $I_a^2 R_a + V_b I_a = K_{const}$. Let's stick with the $I_a^2 R_a = K_{const}$ for clarity unless specified otherwise. The full load armature current is $14 \text{ A}$, and no-load is $1 \text{ A}$. A current of $36.32 \text{ A}$ would be very high for this machine, suggesting the simpler assumption might not be best here. Let's reconsider the equation $0.3 I_a^2 + 4 I_a = 395.7$. This is the correct formulation if brush drop is considered variable.

Let's proceed with $I_a = 30.26 \text{ A}$ for maximum efficiency.

**d) Maximum efficiency:**
At $I_a = 30.26 \text{ A}$:
$P_{cu,a} = (30.26)^2 \times 0.3 = 915.67 \times 0.3 = 274.7 \text{ W}$.
$P_{brush} = 4 \times 1 \times 30.26 = 121.04 \text{ W}$.
$P_{losses,max\_eff} = P_{cu,a} + P_{brush} + P_{cu,f} + P_{stray}$
$P_{losses,max\_eff} = 274.7 \text{ W} + 121.04 \text{ W} + 200 \text{ W} + 195.7 \text{ W} = 791.44 \text{ W}$.

We need the output power at this condition. Output power is related to developed power by $P_{out} = P_{dev} - P_{stray}$.
Developed power $P_{dev} = V I_a - I_a^2 R_a - P_{brush}$
$P_{dev} = (200 \text{ V} \times 30.26 \text{ A}) - (30.26 \text{ A})^2 \times 0.3 \Omega - 121.04 \text{ W}$
$P_{dev} = 6052 - 274.7 - 121.04 = 5656.26 \text{ W}$.
$P_{out,max\_eff} = P_{dev} - P_{stray} = 5656.26 \text{ W} - 195.7 \text{ W} = 5460.56 \text{ W}$.

Input power $P_{in,max\_eff} = P_{out,max\_eff} + P_{losses,max\_eff}$
$P_{in,max\_eff} = 5460.56 \text{ W} + 791.44 \text{ W} = 6252 \text{ W}$.
(Also, $P_{in,max\_eff} = V \times (I_a + I_f) = 200 \times (30.26 + 1) = 200 \times 31.26 = 6252 \text{ W}$).

Maximum Efficiency $\eta_{max} = \frac{P_{out,max\_eff}}{P_{in,max\_eff}} \times 100\%$
$\eta_{max} = \frac{5460.56 \text{ W}}{6252 \text{ W}} \times 100\% \approx 87.34\%$

**e) Output power for maximum efficiency:**
This was calculated in part (d): $P_{out,max\_eff} = 5460.56 \text{ W}$.

**Alternative simplified approach for max efficiency (ignoring brush drop):**
c) $I_a^2 R_a = K_{const}$
$I_a^2 \times 0.3 = 395.7$
$I_a = 36.32 \text{ A}$.
d) $P_{losses} = I_a^2 R_a + K_{const} = 395.7 + 395.7 = 791.4 \text{ W}$.
$P_{in} = V (I_a + I_f) = 200 (36.32 + 1) = 200 \times 37.32 = 7464 \text{ W}$.
$P_{out} = P_{in} - P_{losses} = 7464 - 791.4 = 6672.6 \text{ W}$.
$\eta_{max} = \frac{6672.6}{7464} \times 100\% \approx 89.4\%$
e) $P_{out,max\_eff} = 6672.6 \text{ W}$.

*Conclusion on Example 3:* The inclusion of brush drop (as a variable loss) makes the calculation of maximum efficiency current more complex (quadratic equation). The simplified assumption $I_a^2 R_a = K_{const}$ is often used in textbooks for introductory purposes. The problem statement should ideally clarify the treatment of brush drop for maximum efficiency calculations. For exams, use the simplified $I_a^2 R_a = K_{const}$ unless brush drop is specifically asked to be considered in the maximum efficiency condition.

### 7. Practice Questions

**Question 1:**
A $230 \text{ V}$ DC shunt motor draws an armature current of $50 \text{ A}$ and a field current of $2 \text{ A}$. The armature resistance is $0.3 \Omega$, field resistance is $115 \Omega$. Brush contact drop is $1 \text{ V}$ per brush. Stray losses are $500 \text{ W}$. Calculate the motor efficiency.

**Question 2:**
A $100 \text{ kW}$, $400 \text{ V}$, $1200 \text{ rpm}$ DC generator has an armature resistance of $0.2 \Omega$ and a field resistance of $200 \Omega$. The stray losses are $1.5 \text{ kW}$. Calculate the full load efficiency. Assume brush drop is $2 \text{ V}$.

**Question 3:**
A $220 \text{ V}$ DC shunt motor has $R_a = 0.25 \Omega$ and $R_{sh} = 100 \Omega$. At full load, it draws $30 \text{ A}$ and develops an output of $5.5 \text{ kW}$. The stray losses are $250 \text{ W}$.
(a) Calculate the full load efficiency.
(b) Determine the armature current for maximum efficiency.
(c) Calculate the maximum efficiency.

**Answers:**

**Answer 1:**
1.  $P_{in} = 230 \text{ V} \times (50 \text{ A} + 2 \text{ A}) = 230 \times 52 = 11960 \text{ W}$.
2.  $P_{cu,a} = (50)^2 \times 0.3 = 2500 \times 0.3 = 750 \text{ W}$.
3.  $P_{cu,f} = (2)^2 \times 115 = 4 \times 115 = 460 \text{ W}$.
4.  $P_{brush} = 4 \times 1 \text{ V} \times 50 \text{ A} = 200 \text{ W}$.
5.  $P_{stray} = 500 \text{ W}$.
6.  $P_{losses} = 750 + 460 + 200 + 500 = 1910 \text{ W}$.
7.  $P_{out} = P_{in} - P_{losses} = 11960 - 1910 = 10050 \text{ W}$.
8.  $\eta = \frac{10050}{11960} \times 100\% = 83.94\%$.

**Answer 2:**
1.  $P_{out} = 100 \text{ kW} = 100000 \text{ W}$.
2.  $I_L = \frac{100000 \text{ W}}{400 \text{ V}} = 250 \text{ A}$.
3.  $I_f = \frac{400 \text{ V}}{200 \Omega} = 2 \text{ A}$.
4.  $I_a = I_L + I_f = 250 + 2 = 252 \text{ A}$.
5.  $P_{cu,a} = (252)^2 \times 0.2 = 63504 \times 0.2 = 12700.8 \text{ W}$.
6.  $P_{cu,f} = (2)^2 \times 200 = 4 \times 200 = 800 \text{ W}$.
7.  $P_{brush} = 2 \text{ V} \times 252 \text{ A} = 504 \text{ W}$.
8.  $P_{stray} = 1.5 \text{ kW} = 1500 \text{ W}$.
9.  $P_{losses} = 12700.8 + 800 + 504 + 1500 = 15504.8 \text{ W}$.
10. $P_{mech} = P_{out} + P_{losses} = 100000 + 15504.8 = 115504.8 \text{ W}$.
11. $\eta = \frac{100000}{115504.8} \times 100\% = 86.58\%$.

**Answer 3:**
1.  $V = 220 \text{ V}$, $R_a = 0.25 \Omega$, $R_{sh} = 100 \Omega$, $P_{out,fl} = 5.5 \text{ kW} = 5500 \text{ W}$, $P_{stray} = 250 \text{ W}$.
    $I_f = \frac{220}{100} = 2.2 \text{ A}$.
    $P_{dev} = P_{out,fl} + P_{stray} = 5500 + 250 = 5750 \text{ W}$.
    $P_{dev} = E_b I_a$. Let's find $I_a$.
    $V = E_b + I_a R_a \implies E_b = V - I_a R_a = 220 - 0.25 I_a$.
    $5750 = (220 - 0.25 I_a) I_a = 220 I_a - 0.25 I_a^2$.
    $0.25 I_a^2 - 220 I_a + 5750 = 0$.
    $I_a = \frac{220 \pm \sqrt{(-220)^2 - 4(0.25)(5750)}}{2(0.25)} = \frac{220 \pm \sqrt{48400 - 5750}}{0.5} = \frac{220 \pm \sqrt{42650}}{0.5}$
    $I_a = \frac{220 \pm 206.52}{0.5}$. Taking the smaller value for armature current: $I_a = \frac{206.52}{0.5} = 41.304 \text{ A}$ (This implies a larger field current if total current is 30A).
    Let's assume the $30 \text{ A}$ given is the total input current.
    $I_{total,fl} = 30 \text{ A}$.
    $I_a = I_{total,fl} - I_f = 30 - 2.2 = 27.8 \text{ A}$.
    $P_{in,fl} = 220 \text{ V} \times 30 \text{ A} = 6600 \text{ W}$.
    $P_{cu,a,fl} = (27.8)^2 \times 0.25 = 772.84 \times 0.25 = 193.21 \text{ W}$.
    $P_{cu,f} = (2.2)^2 \times 100 = 4.84 \times 100 = 484 \text{ W}$.
    $P_{brush,fl} = 4 \times 1 \text{ V} \times 27.8 \text{ A} = 111.2 \text{ W}$.
    $P_{losses,fl} = 193.21 + 484 + 111.2 + 250 = 1038.41 \text{ W}$.
    $P_{out,fl} = P_{in,fl} - P_{losses,fl} = 6600 - 1038.41 = 5561.59 \text{ W}$. (This matches the given output power of 5.5 kW reasonably well).

    (a) **Full load efficiency:**
    $\eta_{fl} = \frac{P_{out,fl}}{P_{in,fl}} \times 100\% = \frac{5561.59 \text{ W}}{6600 \text{ W}} \times 100\% = 84.27\%$

    (b) **Armature current for maximum efficiency:**
    Constant Losses $K_{const} = P_{stray} + P_{cu,f} = 250 + 484 = 734 \text{ W}$.
    Condition for max efficiency (simplified): $I_a^2 R_a = K_{const}$.
    $I_a^2 \times 0.25 = 734$
    $I_a^2 = \frac{734}{0.25} = 2936$
    $I_a = \sqrt{2936} \approx 54.18 \text{ A}$.

    (c) **Maximum efficiency:**
    At $I_a = 54.18 \text{ A}$:
    $P_{cu,a} = (54.18)^2 \times 0.25 = 2935.47 \times 0.25 = 733.87 \text{ W}$.
    $P_{brush} = 4 \times 1 \times 54.18 = 216.72 \text{ W}$.
    $P_{losses,max\_eff} = P_{cu,a} + P_{brush} + P_{cu,f} + P_{stray}$
    $P_{losses,max\_eff} = 733.87 + 216.72 + 484 + 250 = 1684.59 \text{ W}$.
    $P_{in,max\_eff} = V \times (I_a + I_f) = 220 \times (54.18 + 2.2) = 220 \times 56.38 = 12303.6 \text{ W}$.
    $P_{out,max\_eff} = P_{in,max\_eff} - P_{losses,max\_eff} = 12303.6 - 1684.59 = 10619.01 \text{ W}$.
    $\eta_{max} = \frac{10619.01}{12303.6} \times 100\% = 86.31\%$.

### 8. Key Points to Remember

*   **Power Flow:** Trace the energy conversion from mechanical input to electrical output (generator) or vice-versa (motor).
*   **Losses:** Understand the different types of losses: copper losses (armature, field), iron losses (hysteresis, eddy), and mechanical losses (friction, windage).
*   **Efficiency:** It's the ratio of useful output power to total input power.
*   **Condition for Max Efficiency:** Variable losses equal constant losses.
*   **Constant Losses:** Iron losses, mechanical losses, and field copper loss (for shunt/compound).
*   **Variable Losses:** Armature copper loss ($I_a^2 R_a$). Brush drop ($V_{brush} I_a$) is also variable.
*   When calculating losses, pay attention to whether the machine is a motor or a generator and the type of excitation (shunt, series, compound).
*   For efficiency calculations, clearly identify input power, output power, and all individual losses.
*   The simplified condition $I_a^2 R_a = K_{const}$ is a widely used approximation for maximum efficiency.

### 9. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K2):** The understanding of constructional details is implicitly linked as losses occur in specific components like the armature winding ($R_a$), field winding ($R_f$), and commutator/brushes.
*   **CO2 (Knowledge Level K3):** Analyzing generator performance under load involves calculating output power and losses, directly using power flow diagrams and efficiency calculations.
*   **CO3 (Knowledge Level K3):** Analyzing motor performance under load follows the same principles as generators, with a focus on input electrical power and output mechanical power, using power flow diagrams and efficiency. The concept of maximum efficiency is critical for performance analysis.
*   **CO4 & CO5:** While this topic is specific to DC machines, the fundamental concepts of power flow, losses, and efficiency are transferable to transformers and other AC machines. The principles of power dissipation due to resistance and magnetic effects are common.

This comprehensive set of notes covers the power flow diagram, various types of losses, the calculation of efficiency, the condition for maximum efficiency, and provides illustrative numerical examples and practice questions, aligning with the specified learning outcomes and course objectives.
