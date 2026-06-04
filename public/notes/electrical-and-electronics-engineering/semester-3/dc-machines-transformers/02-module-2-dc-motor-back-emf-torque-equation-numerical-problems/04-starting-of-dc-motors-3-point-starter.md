---
title: "Starting of DC motors – 3-point starter"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 2: DC motor – back emf – torque equation – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b28"
status: "completed"
scrapedAt: "2026-05-23T16:12:20.853Z"
---
# DC MACHINES & TRANSFORMERS - Module 2: DC Motor - Back EMF, Torque Equation, Numerical Problems

## Topic: Starting of DC Motors – 3-Point Starter

This topic focuses on the practical methods employed to start DC motors safely and efficiently, with a detailed explanation of the 3-point starter.

---

### 1. Why is a Starter Necessary for DC Motors?

**Key Concept:** DC motors, especially shunt and compound motors, require a starter to limit the initial inrush current and protect the motor windings from damage.

**Explanation:**

*   **High Starting Current:** When a DC motor is started, its armature is stationary. According to the torque equation ($T \propto \phi I_a$) and the back EMF equation ($E_b \propto N \phi$), at standstill ($N=0$), the back EMF ($E_b$) is zero.
*   **Ohm's Law:** The armature current is given by $I_a = \frac{V - E_b}{R_a}$, where $V$ is the supply voltage, $E_b$ is the back EMF, and $R_a$ is the armature resistance.
*   **Ohm's Law at Start:** With $E_b = 0$, the armature current at start becomes $I_a = \frac{V}{R_a}$.
*   **Low Armature Resistance:** The armature resistance ($R_a$) is typically very small (e.g., 0.1 to 1 Ohm).
*   **Consequences of High Current:** This very high armature current can:
    *   Cause excessive heat in the armature windings, leading to insulation damage and burnout.
    *   Draw a disproportionately large current from the supply, potentially causing voltage dips in the supply lines.
    *   Exert strong mechanical forces on the armature conductors, which can damage the windings and commutator.

**Reference:**
*   **P.S. Bimbhra, "Electrical Machinery," Chapter 6 - DC Motors, Section 6.10 Starting of DC Motors:** This section elaborates on the need for starters due to the low armature resistance.
*   **D P Kothari & I J Nagrath, "Electric Machines," Chapter 5 - DC Motors, Section 5.8 Starting of DC Motors:** Similar emphasis on low armature resistance and its implications.

**Important Point to Remember:** The primary reason for using a starter is to limit the initial armature current to a safe value, typically 1.5 to 2 times the full-load current, instead of the excessive $V/R_a$.

---

### 2. Types of Starters for DC Motors

**Key Concept:** Starters are designed to introduce external resistance in series with the armature circuit during the starting phase, which is gradually reduced as the motor speed increases.

**Types:**

*   **2-Point Starter:** Primarily used for DC series motors. It connects directly to the armature and field in series.
*   **3-Point Starter:** Used for DC shunt and compound motors. It has three terminals: Armature, Field, and Line.
*   **4-Point Starter:** Also used for DC shunt and compound motors, offering better control over the field circuit.

**Focus of this Topic:** We will concentrate on the **3-Point Starter**.

---

### 3. The 3-Point Starter for DC Shunt and Compound Motors

**Key Concept:** The 3-point starter is a rheostatic starter with three distinct terminals, designed to gradually cut out starting resistance and protect the motor against overloads and no-voltage conditions.

**Construction and Operation:**

The 3-point starter is essentially a variable resistor (rheostat) connected in series with the armature winding and a protective mechanism. It comprises the following components:

*   **Starting Resistance (Series Resistance):** This is a bank of resistors that are progressively cut out of the armature circuit as the motor speeds up.
*   **No-Volt Coil (NV Coil or Holding Coil):** This is a coil wound on an electromagnet. It is connected in series with the field winding and in parallel with the armature circuit. Its purpose is to keep the starter arm engaged when the supply is on.
*   **Overload Release Coil:** This is another electromagnet connected in series with the armature circuit. It is designed to trip a latch when the armature current exceeds a safe limit.
*   **Starter Arm (Lever):** A movable arm that slides over a series of studs.

**Working Principle:**

The 3-point starter operates in several stages as the starter arm is moved from the "OFF" position to the "RUN" position:

1.  **OFF Position:** The starter arm is at the leftmost position. The armature and field windings are disconnected from the supply.

2.  **Starting Position (First Stud):**
    *   The starter arm is moved to the first stud.
    *   The line supply is connected.
    *   The armature circuit is completed through the entire starting resistance ($R_{start}$) and the armature winding ($R_a$).
    *   The field winding is connected directly to the supply voltage ($V$).
    *   The armature current is limited to a safe starting value ($I_a = \frac{V - E_b}{R_a + R_{start}}$). Since $E_b$ is zero at start, $I_a = \frac{V}{R_a + R_{start}}$.
    *   The No-Volt coil is energized through the field winding, and it attracts the starter arm, holding it against the first stud.
    *   The overload release coil is also energized by the armature current.

3.  **Running Position (Subsequent Studs):**
    *   As the motor speeds up, the back EMF ($E_b$) increases.
    *   The operator gradually moves the starter arm from stud to stud.
    *   With each movement, a portion of the starting resistance is bypassed (cut out) from the armature circuit.
    *   The armature current decreases as the starting resistance is reduced and the back EMF increases.
    *   The No-Volt coil continues to hold the arm as long as the field circuit is energized.
    *   Finally, the starter arm reaches the last stud, bypassing all the starting resistance. The armature is now directly connected to the supply, and the motor runs at its normal speed. The starter arm is held in this position by the No-Volt coil.

**Safety Features:**

*   **No-Volt Protection:**
    *   If the supply voltage drops significantly or fails, the field current also drops.
    *   The electromagnet of the No-Volt coil loses its strength and can no longer hold the starter arm.
    *   A spring pulls the starter arm back to the "OFF" position, disconnecting the armature from the supply, thus preventing damage to the motor when the supply is restored.
*   **Overload Protection:**
    *   If the motor draws an excessive current (due to overload or a fault), the current through the overload release coil increases.
    *   The electromagnet of the overload release coil becomes strong enough to attract a lever.
    *   This lever trips a latch, causing the starter arm to be pulled back to the "OFF" position by a spring, disconnecting the motor from the supply.

**Diagram:**
A typical diagram of a 3-point starter would show:
*   Line terminal (L)
*   Armature terminal (A)
*   Field terminal (F)
*   Resistance bank with multiple studs
*   Starter arm connected to the armature terminal
*   No-volt coil in series with the field winding and connected to the line terminal
*   Overload release coil in series with the armature circuit

**Reference:**
*   **J.B. Gupta, "Theory & Performance of Electrical Machines," Chapter 3 - DC Motors, Section 3.11 Starting of DC Motors:** Provides a detailed explanation and circuit diagram of the 3-point starter.
*   **K Murugesh Kumar, "DC Machines & Transformers," Chapter 6 - DC Motors, Section 6.5 Starters:** Discusses the necessity and types of starters, including a section on the 3-point starter.

**Important Point to Remember:** The 3-point starter connects the No-Volt coil in series with the field winding to leverage the field current for holding the arm. This inherently provides no-voltage protection but limits the ability to control the motor speed by varying field resistance during operation.

---

### 4. Working Principle Explained with Equations and Circuit

Let:
*   $V$ = Supply Voltage
*   $I_{a\_start}$ = Starting Armature Current
*   $E_{b\_start}$ = Back EMF at start (which is 0)
*   $R_a$ = Armature Resistance
*   $R_{se}$ = Starting Resistance (external resistance added)

At standstill: $E_b = 0$.
The armature current is given by:
$I_{a\_start} = \frac{V - E_{b\_start}}{R_a + R_{se}} = \frac{V}{R_a + R_{se}}$

As the motor speeds up, let the speed be $N$. The back EMF is $E_b = k \phi N$.
The armature current becomes:
$I_a = \frac{V - E_b}{R_a}$

When the starter arm is moved from stud to stud, $R_{se}$ is reduced.

**Circuit Analysis:**

*   **No-Volt Coil:** Connected in series with the field winding. $I_{NV} = I_f = \frac{V}{R_{f}}$. The magnetic force is proportional to $(I_f)^2$ or $I_f$.
*   **Overload Release Coil:** Connected in series with the armature circuit. $I_{OLC} = I_a$. The magnetic force is proportional to $(I_a)^2$ or $I_a$.

**Design Considerations for Starting Resistance ($R_{se}$):**

The total starting resistance required can be determined based on the desired starting current. If $I_{a\_start}$ is the desired starting current (e.g., 1.5 to 2 times the full-load current), then:

$R_a + R_{se} = \frac{V}{I_{a\_start}}$
$R_{se} = \frac{V}{I_{a\_start}} - R_a$

The total starting resistance is divided into sections to be cut out gradually. If the starter has $n$ studs (excluding the OFF position), there will be $n$ sections of resistance.

---

### 5. Limitations of the 3-Point Starter

**Key Concept:** The inherent connection of the No-Volt coil in series with the field winding limits the flexibility of speed control using field variation with a 3-point starter.

**Limitations:**

*   **Cannot Vary Field Resistance for Speed Control:** If the operator tries to increase the field resistance using an external rheostat in series with the field winding to increase the motor speed, the field current ($I_f$) will decrease. This would weaken the magnetic field of the No-Volt coil, potentially causing it to release the starter arm and disconnect the motor from the supply. Therefore, speed control by field weakening cannot be effectively performed with a standard 3-point starter.
*   **No Over-Speed Protection:** The starter does not inherently protect the motor from over-speeding if the field circuit accidentally opens.

**Reference:**
*   **D P Kothari & I J Nagrath, "Electric Machines," Chapter 5 - DC Motors, Section 5.8.2 Limitations of 3-point Starter:** Explicitly discusses these limitations.

---

### 6. Practice Questions and Exercises

**Question 1:** Why is it essential to use a starter for a DC shunt motor?
**Answer:** A starter is essential to limit the high initial armature current ($I_a = V/R_a$) when the motor is switched on, as the armature resistance ($R_a$) is very low. This prevents damage to the armature winding due to overheating and excessive mechanical forces.

**Question 2:** Describe the function of the No-Volt coil in a 3-point starter.
**Answer:** The No-Volt coil is an electromagnet connected in series with the field winding. It holds the starter arm against the studs when the motor is running. If the supply voltage fails or drops significantly, the No-Volt coil loses its magnetism, and a spring pulls the starter arm back to the OFF position, disconnecting the motor and preventing damage upon power restoration.

**Question 3:** What happens if the field winding of a DC shunt motor connected to a 3-point starter gets disconnected during operation?
**Answer:** If the field winding gets disconnected, the field current ($I_f$) drops to zero. This causes the No-Volt coil to lose its magnetism. The starter arm will be released by the No-Volt coil and will return to the OFF position due to the spring action, disconnecting the armature from the supply. This is a safety feature to prevent over-speeding.

**Question 4:** A DC shunt motor is started with a 3-point starter. The armature resistance is 0.5 $\Omega$, and the field resistance is 150 $\Omega$. The supply voltage is 230 V. The motor requires a starting current of approximately 20 A. Calculate the total starting resistance required.
**Solution:**
Given:
*   $V = 230$ V
*   $R_a = 0.5 \Omega$
*   $I_{a\_start} = 20$ A

Using the formula $I_{a\_start} = \frac{V}{R_a + R_{se}}$:
$20 = \frac{230}{0.5 + R_{se}}$
$20 (0.5 + R_{se}) = 230$
$10 + 20 R_{se} = 230$
$20 R_{se} = 230 - 10$
$20 R_{se} = 220$
$R_{se} = \frac{220}{20} = 11 \Omega$

The total starting resistance required is $11 \Omega$.

**Question 5:** Why is a 3-point starter not suitable for speed control by varying the field resistance?
**Answer:** The No-Volt coil is connected in series with the field winding. If the field resistance is increased to weaken the field and increase speed, the field current decreases. This reduction in field current weakens the electromagnet of the No-Volt coil, which may cause it to release the starter arm and disconnect the motor.

---

### 7. Alignment with Course Outcomes

*   **CO1: Describe the constructional details of DC machines (Knowledge Level: K2)**
    *   While this topic is about starters, understanding the components connected to the motor (armature, field) implicitly aligns with knowing these parts of the DC machine.
*   **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)**
    *   Starting is a critical phase of a DC motor's operation. Understanding how the starter manages the initial current and influences the motor's behavior during acceleration relates directly to analyzing its performance. The overload protection aspect also relates to performance under fault/overload conditions.

---

### 8. Important Points to Remember (Summary)

*   **High starting current** in DC motors is due to **low armature resistance** and **zero back EMF** at standstill.
*   Starters are used to **limit this initial current** to a safe value (typically 1.5-2 times full load).
*   The **3-point starter** is used for DC shunt and compound motors.
*   It consists of **starting resistance**, a **No-Volt coil**, and an **overload release coil**.
*   The **No-Volt coil** (in series with the field) provides **no-voltage protection**.
*   The **overload release coil** (in series with the armature) provides **overload protection**.
*   The **starting resistance is gradually cut out** as the motor speeds up and back EMF increases.
*   A **limitation** of the 3-point starter is that it **cannot be used for speed control by field weakening** due to the connection of the No-Volt coil.

---
