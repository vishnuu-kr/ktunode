---
title: "Starting of induction motors – types of starters – DOL starter, autotransformer starter, star-delta starter – numerical problems - rotor resistance starter (no design)"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 3: 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dfa"
status: "completed"
scrapedAt: "2026-05-23T16:19:17.354Z"
---
## SYNCHRONOUS & INDUCTION MACHINES - Module 3: Starting of Induction Motors

This module delves into the crucial aspect of starting three-phase induction motors, exploring various methods to mitigate high starting currents and ensure smooth operation. We will analyze the principles behind different starter types, their advantages, disadvantages, and when to apply them. Numerical problems will be solved to solidify understanding.

**Relevant Course Outcomes:**

*   **CO4: Analyse the various starting, braking and speed control methods of 3- phase induction motors. (Knowledge Level: K3)** - This module directly addresses the "starting methods" aspect of this CO.

---

### 1. Introduction to Induction Motor Starting

**Key Concepts:**

*   **High Starting Current:** Induction motors draw a very high current (typically 5-8 times the full-load current) during starting, especially when directly connected to the supply.
*   **Problems Associated with High Starting Current:**
    *   **Voltage Dip:** Significant voltage drop occurs in the supply lines, affecting other connected loads.
    *   **Mechanical Stress:** High starting torque and current can cause mechanical shock to the motor and driven machinery.
    *   **Reduced Torque:** The torque developed at starting is often lower than the breakdown torque.
    *   **Damage to Windings:** Prolonged exposure to high currents can overheat and damage stator windings.
    *   **Fuse Blowing/Breaker Tripping:** High inrush current can cause protective devices to operate unnecessarily.
*   **Need for Starters:** Starters are devices used to limit the starting current and/or increase the starting torque of an induction motor.

**Reference:**
*   Bhimbara, P.S. - Chapter on "Starting of Induction Motors".
*   Kothari & Nagrath - Chapter on "Starting of Induction Motors".
*   Gupta, J.B. - Chapter on "Starting of Induction Motors".

---

### 2. Direct On-Line (DOL) Starter

**Key Concepts:**

*   **Simplest Starting Method:** The motor is directly connected to the full supply voltage.
*   **Operation:** A contactor (switch) connects the stator windings to the AC supply. A thermal overload relay provides protection against overcurrent.
*   **Advantages:**
    *   Simple construction and operation.
    *   Low cost.
    *   Provides full starting torque.
    *   Suitable for small horsepower motors (typically up to 5 HP or 7.5 kW, depending on supply capacity and motor design).
*   **Disadvantages:**
    *   Very high starting current (5-8 times full load current).
    *   Significant voltage dip.
    *   Not suitable for large motors due to the issues mentioned above.
*   **Circuit Diagram:** (A simple schematic showing the motor terminals connected to the supply through a contactor and overload relay would be beneficial here, but cannot be directly rendered in text. Imagine a three-pole contactor and a three-phase thermal overload relay).

**Important Points to Remember:**
*   DOL starting is the most basic method and is limited to smaller motors.

---

### 3. Autotransformer Starter

**Key Concepts:**

*   **Voltage Reduction Principle:** An autotransformer is used to reduce the voltage applied to the stator during starting. This, in turn, reduces the starting current and starting torque.
*   **Operation:**
    1.  The motor is connected to a reduced voltage from the autotransformer for a specific duration.
    2.  Once the motor gains sufficient speed, it is switched to the full line voltage.
    3.  The autotransformer is typically a tapped transformer, allowing for different voltage reduction percentages.
*   **Starting Torque and Current Relationship:**
    *   Starting Current $\propto$ Applied Voltage
    *   Starting Torque $\propto$ (Applied Voltage)$^2$
    *   If the applied voltage is reduced to $V_s / k$, then the starting current is reduced to $I_s / k$, and the starting torque is reduced to $T_s / k^2$, where $k$ is the voltage reduction factor (e.g., if voltage is reduced to 70% of line voltage, $k = 1/0.7 = 1.43$).
*   **Advantages:**
    *   Reduces starting current significantly (e.g., with a 70% tap, current is reduced to approximately 70% of DOL current).
    *   Reduces starting torque proportionally to the square of the voltage reduction.
    *   Can start larger motors than DOL.
    *   Reduced voltage dip compared to DOL.
*   **Disadvantages:**
    *   More expensive than DOL.
    *   Requires two switching operations (start and run).
    *   Reduced starting torque might not be sufficient for some applications.
    *   The autotransformer is only in the circuit during starting, making it less efficient.
*   **Transformer Tappings:** Common tapping percentages are 50%, 65%, and 80% of the line voltage.

**Example:**
A 10 HP, 400V, 50Hz induction motor draws 5 times its full load current at starting when connected directly to the supply. If an autotransformer starter with 70% tapping is used, calculate:
a) Starting current with the starter.
b) Starting torque with the starter in terms of DOL starting torque.

**Solution:**
Let $I_{sc}$ be the starting current and $T_s$ be the starting torque with DOL.
a) When using an autotransformer with 70% tapping, the applied voltage is $0.7V$.
Starting Current with starter = $0.7 \times I_{sc}$ = $0.7 \times (5 \times I_{FL})$ = $3.5 \times I_{FL}$ (where $I_{FL}$ is the full load current).
So, the starting current is reduced to 70% of the DOL starting current.

b) Starting Torque with starter = $(0.7)^2 \times T_s$ = $0.49 \times T_s$.
The starting torque is reduced to 49% of the DOL starting torque.

**Reference:**
*   Bhimbara, P.S. - "Autotransformer Starting".
*   Gupta, J.B. - "Autotransformer Starters".

---

### 4. Star-Delta Starter

**Key Concepts:**

*   **Voltage Reduction Principle:** This method reduces the voltage applied to each stator winding by connecting the windings first in a star configuration and then in a delta configuration for normal running.
*   **Operation:**
    1.  **Starting (Star Connection):** The three stator windings are connected in star. This means each winding receives $\frac{V_L}{\sqrt{3}}$ volts, where $V_L$ is the line voltage.
    2.  **Running (Delta Connection):** After the motor reaches about 75-80% of its rated speed, the stator windings are reconnected in delta. In delta connection, each winding receives the full line voltage $V_L$.
*   **Starting Torque and Current Relationship:**
    *   Starting Current (Line) with Star = $\frac{1}{3}$ of DOL starting current.
    *   Starting Torque with Star = $\frac{1}{3}$ of DOL starting torque.
*   **Advantages:**
    *   Economical as no external transformer is required.
    *   Reduces starting current to one-third of the DOL value.
    *   Reduces starting torque to one-third of the DOL value.
    *   Suitable for medium-sized motors (typically 5 HP to 25 HP or more).
*   **Disadvantages:**
    *   Requires a motor with all six stator terminals brought out.
    *   Reduced starting torque might be insufficient for applications requiring high starting torque.
    *   Requires two switching operations (start and run).
    *   There is a brief period of open circuit during the transition from star to delta, which can cause voltage transients and current surges.

**Circuit Diagram:** (Visual representation of the internal connections for star and delta is crucial. Imagine three pairs of windings: U1-U2, V1-V2, W1-W2. In star, U2, V2, W2 are shorted. In delta, U2 is connected to V1, V2 to W1, and W2 to U1.)

**Important Points to Remember:**
*   Star-delta starters are very common due to their cost-effectiveness.
*   The motor must be designed to run in delta.
*   The starting torque is significantly reduced.

**Numerical Problem:**
A 3-phase, 415V, 50Hz induction motor has the following ratings:
Full load power = 15 kW
Full load efficiency = 85%
Full load power factor = 0.85 lagging
Starting current (DOL) = 6 times full load current
Starting torque (DOL) = 1.5 times full load torque

Calculate:
a) Full load current.
b) Starting current and torque with DOL.
c) Starting current and torque with Star-Delta starter.

**Solution:**
a) Full load output power = 15 kW = 15,000 W
Full load input power = Full load output power / efficiency = 15,000 W / 0.85 = 17647.06 W
Full load line current ($I_{FL}$) = Input Power / ($\sqrt{3} \times V_L \times \cos\phi_{FL}$)
$I_{FL} = 17647.06 / (\sqrt{3} \times 415 \times 0.85)$
$I_{FL} \approx 29.94$ A

b) Starting current (DOL) = $6 \times I_{FL}$ = $6 \times 29.94$ A $\approx 179.64$ A
Starting torque (DOL) = $1.5 \times$ Full load torque. To find full load torque, we need to know the synchronous speed. Assuming a 4-pole motor:
Synchronous speed ($N_s$) = (120 * 50) / 4 = 1500 rpm
Full load output power = $2\pi N_{FL} T_{FL} / 60$
$T_{FL} = (15000 \times 60) / (2\pi \times 1400)$ (Assuming slip of 6.7% for estimation of $N_{FL}$)
$T_{FL} \approx 102.06$ Nm
Starting torque (DOL) $\approx 1.5 \times 102.06$ Nm $\approx 153.09$ Nm

c) Starting current with Star-Delta = $\frac{1}{3} \times$ Starting current (DOL) = $\frac{1}{3} \times 179.64$ A $\approx 59.88$ A
Starting torque with Star-Delta = $\frac{1}{3} \times$ Starting torque (DOL) = $\frac{1}{3} \times 153.09$ Nm $\approx 51.03$ Nm

**Reference:**
*   Kothari & Nagrath - "Star-Delta Starters".
*   Murugesh Kumar, K. - "Star-Delta Starting".
*   Say, M.G. - "Starting Methods for Induction Motors".

---

### 5. Rotor Resistance Starter (for Slip Ring Induction Motors)

**Key Concepts:**

*   **Applicability:** This method is exclusively used for **slip-ring induction motors** (also known as wound-rotor induction motors).
*   **Principle:** External resistance is added to the rotor circuit during starting. This increases the rotor power factor at starting and shifts the torque-speed curve such that the maximum torque is developed at or near standstill.
*   **Operation:**
    1.  During starting, the external resistances connected to the slip rings are gradually reduced in steps.
    2.  As the motor speeds up, the external resistances are gradually cut out of the rotor circuit.
    3.  Finally, when the motor reaches near full speed, the external resistances are short-circuited, and the rotor winding is connected directly to the shorting contact.
*   **Advantages:**
    *   Provides high starting torque with relatively low starting current.
    *   Smooth acceleration due to gradual increase in speed.
    *   Allows for better control over starting.
*   **Disadvantages:**
    *   Requires slip-ring induction motors, which are more expensive than squirrel-cage motors.
    *   Requires additional resistors and a control mechanism, increasing complexity and cost.
    *   Losses in the external resistors during starting.
*   **Torque-Speed Curve Modification:** Adding external resistance to the rotor shifts the peak torque to lower speeds and increases the starting torque for a given slip. The slip at which maximum torque occurs is $s_{max} = R_2 / X_2$, where $R_2$ and $X_2$ are the rotor resistance and reactance per phase at standstill. Adding external resistance $R_{ext}$ makes the total rotor resistance $R_2' = R_2 + R_{ext}$. Thus, $s'_{max} = (R_2 + R_{ext}) / X_2$. By increasing $R_{ext}$, $s'_{max}$ can be brought closer to zero, allowing maximum torque to be developed at start.

**Important Note:** The question specifically mentions "no design" for the rotor resistance starter, meaning we focus on the principle of operation and its effect on performance rather than the design calculations of the resistors.

**Reference:**
*   Bhimbara, P.S. - Chapter on "Starting of Slip Ring Induction Motors".
*   Kothari & Nagrath - Chapter on "Rotor Resistance Starting".
*   Gupta, J.B. - Chapter on "Starting of Slip Ring Induction Motors".

---

### 6. Comparison of Starting Methods

| Feature           | DOL Starter                         | Autotransformer Starter             | Star-Delta Starter                  | Rotor Resistance Starter (Slip-Ring) |
| :---------------- | :---------------------------------- | :---------------------------------- | :---------------------------------- | :----------------------------------- |
| **Motor Type**    | Squirrel Cage                       | Squirrel Cage                       | Squirrel Cage (6 terminals)         | Slip-Ring Induction Motor            |
| **Starting Current**| High (5-8 $I_{FL}$)                 | Reduced (e.g., 70% of DOL)          | Low (1/3 of DOL)                    | Low, controllable                    |
| **Starting Torque** | High (same as DOL)                  | Reduced (e.g., 49% of DOL)          | Low (1/3 of DOL)                    | High, controllable                   |
| **Cost**          | Low                                 | Medium                              | Medium                              | High                                 |
| **Complexity**    | Simple                              | Medium                              | Medium                              | High                                 |
| **Voltage Dip**   | High                                | Medium                              | Low                                 | Low                                  |
| **Applications**  | Small HP motors (up to 5-7.5 kW)    | Medium to large HP motors           | Medium HP motors                    | Applications requiring high starting torque and controlled acceleration |

**Reference:**
*   Kothari & Nagrath - Summary tables for starting methods.
*   Gupta, J.B. - Comparative analysis of starting methods.

---

### 7. Practice Questions and Answers

**Question 1:**
A 3-phase, 400V, 50Hz induction motor draws 6 times its full-load current at starting and develops 1.5 times its full-load torque. If the full-load current is 50A, what would be the starting current and torque if a Star-Delta starter is used?

**Answer:**
*   Starting current (DOL) = $6 \times 50$ A = 300 A
*   Starting torque (DOL) = 1.5 times full load torque ($T_{FL}$)
*   Starting current with Star-Delta = $\frac{1}{3} \times$ Starting current (DOL) = $\frac{1}{3} \times 300$ A = **100 A**
*   Starting torque with Star-Delta = $\frac{1}{3} \times$ Starting torque (DOL) = $\frac{1}{3} \times 1.5 T_{FL}$ = **0.5 times full load torque**

**Question 2:**
An induction motor is started using an autotransformer. If the starter is connected to a 70% tapping, by what factor is the starting current and starting torque reduced compared to DOL starting?

**Answer:**
*   Let the voltage reduction factor be $k$. Here, the applied voltage is 70% of the line voltage, so $V_{applied} = 0.7 V_L$. The reduction factor is $k = 1 / 0.7 \approx 1.43$.
*   Starting Current reduction factor = $1/k$ = 0.7. The starting current is reduced to **70%** of the DOL value.
*   Starting Torque reduction factor = $(1/k)^2$ = $(0.7)^2$ = 0.49. The starting torque is reduced to **49%** of the DOL value.

**Question 3:**
What type of induction motor is required for the rotor resistance starting method? Briefly explain its principle.

**Answer:**
*   **Rotor resistance starting** is used for **slip-ring induction motors** (wound-rotor induction motors).
*   **Principle:** External resistance is added to the rotor circuit through slip rings and brushes. This resistance is gradually decreased in steps as the motor accelerates. Adding external resistance increases the rotor circuit impedance, improving the power factor at start and shifting the maximum torque point to a lower speed (or standstill), thereby allowing high starting torque with reduced starting current.

---

### 8. Key Points to Remember

*   **Starting current** in induction motors is a critical parameter affecting the power system.
*   **DOL starting** is the simplest but is limited to small motors.
*   **Autotransformer starters** reduce starting current and torque by reducing the applied voltage. Torque is reduced by the square of the voltage reduction factor.
*   **Star-Delta starters** reduce starting current and torque to one-third of DOL values by altering the stator winding connections.
*   **Rotor resistance starters** are used for slip-ring induction motors to improve starting torque and control starting current by adding external resistance to the rotor circuit.
*   The choice of starter depends on motor size, application requirements (starting torque needs), and cost considerations.

---

This comprehensive set of notes covers the essential aspects of induction motor starting methods as outlined in the provided topic and learning outcomes. The references to textbooks ensure that the information is aligned with standard electrical machinery literature. Remember to supplement these notes with diagrams from your textbooks for a complete understanding of the circuit configurations.
