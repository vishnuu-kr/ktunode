---
title: "Classification DC generators – steady-state equations – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b1f"
status: "completed"
scrapedAt: "2026-05-23T16:12:15.039Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: Classification of DC Generators – Steady-State Equations – Numerical Problems

### 1. Introduction to DC Generators

A DC generator is an electrical machine that converts mechanical energy into direct current (DC) electrical energy. This conversion is based on the principle of electromagnetic induction.

### 2. Classification of DC Generators

DC generators can be broadly classified based on how their field winding is excited.

#### 2.1. Separately Excited DC Generator

*   **Definition:** In a separately excited DC generator, the field winding is energized by an external DC source independent of the armature circuit.
*   **Construction:** The field winding is connected to a separate DC supply. The armature winding is connected to the external load through a commutator and brushes.
*   **Circuit Diagram:**
    ```
    +-------+       +----------+
    | Ext.  |------>| Field    |
    | DC    |       | Winding  |
    | Source|       +----------+
    +-------+              |
                           |
                           |
                           v
                      +---------+
                      | Armature|
                      | Winding |
                      +---------+
                           |
                           |
                           v
                         Load
    ```
*   **Characteristics:**
    *   Field flux is independent of armature current.
    *   Provides better voltage regulation compared to self-excited generators.
    *   Field current can be controlled over a wide range, allowing for flexible control of the generated voltage.

#### 2.2. Self-Excited DC Generator

In self-excited DC generators, the field winding is energized by the current produced by the armature itself. This classification further subdivides based on the connection of the field winding with respect to the armature winding.

##### 2.2.1. Shunt Generator

*   **Definition:** The field winding is connected in parallel (shunt) with the armature winding and the external load.
*   **Construction:** The field winding has a high resistance and a large number of turns, connected across the armature terminals.
*   **Circuit Diagram:**
    ```
           +----------+
           | Field    | -----+
           | Winding  |      |
           +----------+      |
                 ^           |
                 |           |
                 +-----------+
                 |           |
          +-------------+    |
          | Armature    |----+
          | Winding     |
          +-------------+
                 |
                 |
                 v
               Load
    ```
*   **Characteristics:**
    *   The field current is a fraction of the armature current.
    *   Terminal voltage is affected by armature reaction and voltage drop in the armature resistance.
    *   Good for maintaining a relatively constant voltage under varying loads, up to a certain point.

##### 2.2.2. Series Generator

*   **Definition:** The field winding is connected in series with the armature winding and the external load.
*   **Construction:** The field winding has a low resistance and a small number of turns, designed to carry the full armature current.
*   **Circuit Diagram:**
    ```
          +----------+
          | Field    |
          | Winding  | -----+
          +----------+      |
                 ^          |
                 |          |
                 |          |
          +-------------+   |
          | Armature    |---+
          | Winding     |
          +-------------+
                 |
                 |
                 v
               Load
    ```
*   **Characteristics:**
    *   The field flux is directly proportional to the armature current (and hence the load current).
    *   The terminal voltage increases with the load current, up to a saturation point of the magnetic field.
    *   Poor voltage regulation; terminal voltage can be very low at no load and very high at full load.
    *   Not generally used for constant voltage applications.

##### 2.2.3. Compound Generator

*   **Definition:** A compound generator has both a series field winding and a shunt field winding.
*   **Construction:** It has two field windings:
    *   **Shunt Winding:** Connected in parallel with the armature.
    *   **Series Winding:** Connected in series with the armature and the load.
*   **Types of Compound Generators:**
    *   **Cumulatively Compound:** The magnetic effect of the series field winding aids the magnetic effect of the shunt field winding.
    *   **Differentially Compound:** The magnetic effect of the series field winding opposes the magnetic effect of the shunt field winding. (Rarely used due to poor voltage regulation).

*   **Sub-classification of Cumulatively Compound Generators:**
    *   **Flat Compound:** Designed to maintain a constant terminal voltage from no-load to full-load.
    *   **Over Compound:** Terminal voltage increases with increasing load.
    *   **Under Compound:** Terminal voltage decreases with increasing load, but less so than a series generator.

*   **Circuit Diagram (Cumulatively Compound):**
    ```
           +----------+
           | Shunt    | -----+
           | Field    |      |
           +----------+      |
                 ^           |
                 |           |
                 +-----------+
                 |           |
          +-------------+    |
          | Armature    |----+
          | Winding     |
          +-------------+
                 |
                 |
          +----------+
          | Series   |
          | Field    | -----+
          | Winding  |      |
          +----------+      |
                 ^          |
                 |          |
                 +----------+
                 |
                 |
                 v
               Load
    ```
*   **Characteristics:**
    *   Combines characteristics of both shunt and series generators.
    *   Compound generators offer a compromise in voltage regulation.
    *   Flat compound generators are particularly useful for applications requiring stable voltage.

### 3. Steady-State Equations of DC Generators

The steady-state operation of a DC generator can be described by a few fundamental equations.

#### 3.1. Electromotive Force (EMF) Equation

The induced EMF ($E_g$) in a DC generator is given by:

$E_g = \frac{\Phi Z N P}{60 A}$

Where:
*   $E_g$ = Generated EMF (Volts)
*   $\Phi$ = Flux per pole (Webers)
*   $Z$ = Total number of armature conductors
*   $N$ = Speed of armature in RPM
*   $P$ = Number of poles
*   $A$ = Number of parallel paths in the armature winding

**Important Note:** The value of $A$ depends on the type of winding:
*   Lap Winding: $A = P$ (for simplex lap winding)
*   Wave Winding: $A = 2$ (for simplex wave winding)

The term $\frac{Z P}{60 A}$ is a constant for a given machine and is often denoted as $K$ (generator constant).
So, $E_g = K \Phi N$.

#### 3.2. Voltage Equation

The terminal voltage ($V_t$) of a DC generator is related to the generated EMF by the armature circuit voltage drop:

$V_t = E_g - I_a R_a$

Where:
*   $V_t$ = Terminal Voltage (Volts)
*   $I_a$ = Armature Current (Amperes)
*   $R_a$ = Armature Circuit Resistance (Ohms) (Includes armature winding resistance, brush contact resistance, and series resistance if any).

**Important Note:** This equation assumes the generator is producing voltage. If a load is connected, $I_a$ flows out of the armature.

#### 3.3. Field Circuit Equation

The field current ($I_f$) is determined by the applied field voltage ($V_f$) and the total field resistance ($R_f$):

$I_f = \frac{V_f}{R_f}$

Where:
*   $V_f$ = Field Voltage (Volts)
*   $R_f$ = Field Winding Resistance (Ohms)

In self-excited generators, $V_f$ is usually equal to the terminal voltage $V_t$.

#### 3.4. Load Circuit Equation

For a load connected to the generator:

$V_t = I_L R_L$

Where:
*   $I_L$ = Load Current (Amperes)
*   $R_L$ = Load Resistance (Ohms)

**Relationship between Currents:**
*   **Shunt Generator:** $I_a = I_L + I_f$
*   **Series Generator:** $I_a = I_{se} = I_L$ (where $I_{se}$ is series field current)
*   **Cumulatively Compound Generator:** $I_a = I_L + I_f$ (Shunt current)

### 4. Numerical Problems and Solutions

Let's work through some examples to illustrate the application of these equations.

**Problem 1 (Shunt Generator):**
A 20 kW, 200 V, 100 A shunt generator has an armature resistance of 0.1 $\Omega$ and a field resistance of 100 $\Omega$. Calculate the generated EMF when the generator delivers full load.

**Solution:**
Given:
*   Rated Power ($P_{rated}$) = 20 kW = 20,000 W
*   Rated Voltage ($V_{t,rated}$) = 200 V
*   Rated Load Current ($I_{L,rated}$) = 100 A
*   Armature Resistance ($R_a$) = 0.1 $\Omega$
*   Field Resistance ($R_f$) = 100 $\Omega$

1.  **Calculate Field Current ($I_f$):**
    Since the field is connected across the terminal voltage (which is 200 V at full load):
    $I_f = \frac{V_t}{R_f} = \frac{200}{100} = 2$ A

2.  **Calculate Armature Current ($I_a$):**
    For a shunt generator, $I_a = I_L + I_f$.
    At full load, $I_L = 100$ A.
    $I_a = 100 + 2 = 102$ A

3.  **Calculate Generated EMF ($E_g$):**
    Using the voltage equation: $V_t = E_g - I_a R_a$
    $E_g = V_t + I_a R_a$
    $E_g = 200 + (102 \times 0.1)$
    $E_g = 200 + 10.2$
    $E_g = 210.2$ V

**Therefore, the generated EMF is 210.2 V.**

**Problem 2 (Series Generator):**
A 10 kW, 230 V, series generator is operating at a load current of 40 A. The armature resistance is 0.2 $\Omega$, and the series field resistance is 0.1 $\Omega$. If the terminal voltage is 230 V, calculate the generated EMF.

**Solution:**
Given:
*   Load Current ($I_L$) = 40 A
*   Terminal Voltage ($V_t$) = 230 V
*   Armature Resistance ($R_a$) = 0.2 $\Omega$
*   Series Field Resistance ($R_{se}$) = 0.1 $\Omega$

1.  **Determine Armature Current ($I_a$):**
    For a series generator, $I_a = I_L$.
    $I_a = 40$ A

2.  **Determine Series Field Current ($I_{se}$):**
    For a series generator, $I_{se} = I_a$.
    $I_{se} = 40$ A

3.  **Calculate Total Resistance in Armature Circuit:**
    The armature circuit includes the armature winding and the series field winding.
    $R_{total} = R_a + R_{se}$
    $R_{total} = 0.2 + 0.1 = 0.3 \Omega$

4.  **Calculate Generated EMF ($E_g$):**
    Using the voltage equation: $V_t = E_g - I_a R_{total}$
    $E_g = V_t + I_a R_{total}$
    $E_g = 230 + (40 \times 0.3)$
    $E_g = 230 + 12$
    $E_g = 242$ V

**Therefore, the generated EMF is 242 V.**

**Problem 3 (Compound Generator - Cumulatively Compounded):**
A cumulatively compounded DC generator is operating at a terminal voltage of 250 V and delivers a load current of 150 A. The armature resistance is 0.05 $\Omega$, the series field resistance is 0.02 $\Omega$, and the shunt field resistance is 150 $\Omega$. Calculate the generated EMF.

**Solution:**
Given:
*   Terminal Voltage ($V_t$) = 250 V
*   Load Current ($I_L$) = 150 A
*   Armature Resistance ($R_a$) = 0.05 $\Omega$
*   Series Field Resistance ($R_{se}$) = 0.02 $\Omega$
*   Shunt Field Resistance ($R_f$) = 150 $\Omega$

1.  **Calculate Shunt Field Current ($I_f$):**
    The shunt field is connected across the terminal voltage.
    $I_f = \frac{V_t}{R_f} = \frac{250}{150} = 1.67$ A (approx.)

2.  **Calculate Armature Current ($I_a$):**
    For a compound generator, $I_a = I_L + I_f$.
    $I_a = 150 + 1.67 = 151.67$ A

3.  **Calculate Total Resistance in Armature Circuit:**
    The armature circuit includes the armature winding and the series field winding.
    $R_{total} = R_a + R_{se}$
    $R_{total} = 0.05 + 0.02 = 0.07 \Omega$

4.  **Calculate Generated EMF ($E_g$):**
    Using the voltage equation: $V_t = E_g - I_a R_{total}$
    $E_g = V_t + I_a R_{total}$
    $E_g = 250 + (151.67 \times 0.07)$
    $E_g = 250 + 10.617$
    $E_g = 260.617$ V

**Therefore, the generated EMF is approximately 260.62 V.**

### 5. Practice Questions/Exercises

**Question 1:**
A separately excited DC generator has an armature resistance of 0.5 $\Omega$ and a field resistance of 100 $\Omega$. It is excited by a 220 V DC source. When driven at 1500 RPM, it generates an open-circuit voltage of 200 V. If the field voltage is kept constant and the generator is driven at 1800 RPM, what will be the open-circuit voltage?

**Answer 1:**
The generated EMF ($E_g$) is directly proportional to the speed ($N$) when the flux ($\Phi$) is constant.
$E_g \propto N$
$\frac{E_{g1}}{N_1} = \frac{E_{g2}}{N_2}$
$\frac{200}{1500} = \frac{E_{g2}}{1800}$
$E_{g2} = \frac{200 \times 1800}{1500} = 200 \times 1.2 = 240$ V

**Question 2:**
A 4-pole DC generator has 400 armature conductors. It is lap-wound. If the flux per pole is 0.02 Wb and the speed is 1200 RPM, calculate the generated EMF.

**Answer 2:**
Given:
*   $P = 4$
*   $Z = 400$
*   Lap-wound, so $A = P = 4$
*   $\Phi = 0.02$ Wb
*   $N = 1200$ RPM

$E_g = \frac{\Phi Z N P}{60 A}$
$E_g = \frac{0.02 \times 400 \times 1200 \times 4}{60 \times 4}$
$E_g = \frac{0.02 \times 400 \times 1200}{60}$
$E_g = 0.02 \times 400 \times 20$
$E_g = 8 \times 20 = 160$ V

**Question 3:**
A DC shunt generator has $R_a = 0.1 \Omega$ and $R_f = 50 \Omega$. It generates an EMF of 220 V when the field current is 4 A. Calculate the terminal voltage when the load current is 80 A.

**Answer 3:**
Given:
*   $E_g = 220$ V
*   $I_f = 4$ A
*   $R_a = 0.1 \Omega$
*   $R_f = 50 \Omega$
*   $I_L = 80$ A

1.  **Calculate Terminal Voltage ($V_t$) at which $E_g=220$ V:**
    The field current is given as 4 A. Assuming the field is connected across the terminal voltage at this operating point:
    $V_t = I_f \times R_f = 4 \times 50 = 200$ V.
    So, when the generator is producing 220 V, the terminal voltage is 200 V.

2.  **Calculate Armature Current ($I_a$) when $E_g=220$ V:**
    $V_t = E_g - I_a R_a$
    $200 = 220 - I_a \times 0.1$
    $I_a \times 0.1 = 220 - 200$
    $I_a \times 0.1 = 20$
    $I_a = 200$ A.
    (This implies the full load armature current is 200 A for the given EMF and terminal voltage.)

3.  **Calculate Shunt Field Current ($I_f$) under new load conditions:**
    The problem states the field current is 4A. It doesn't explicitly say the field voltage changes. Assuming the field voltage is maintained such that the field current remains 4A (e.g., controlled by a rheostat or a constant voltage source for the field).
    $I_f = 4$ A (constant).

4.  **Calculate Armature Current ($I_a$) with Load:**
    For a shunt generator, $I_a = I_L + I_f$.
    $I_a = 80 + 4 = 84$ A.

5.  **Calculate Terminal Voltage ($V_t$) with Load:**
    We need the generated EMF at this new load condition. However, the problem statement implies the conditions under which $E_g = 220$ V are given, but doesn't state what the field flux or speed would be at the new load.
    **Re-interpretation needed:** The question implies the generator characteristics remain similar. The initial condition might be an open circuit or a specific load condition. Let's assume the initial condition (220V EMF, 4A field current) implies a certain flux per pole. The speed is not given. The field resistance is constant, but $V_f$ might vary.

    **Let's assume the generator is driven at a constant speed and the field circuit is connected to a constant voltage source.**
    If the field current is 4A when $E_g = 220$V, and $R_f = 50 \Omega$, then the field voltage $V_f = I_f \times R_f = 4 \times 50 = 200$ V. This means the field circuit is connected to a 200 V supply.
    Since the field current is given as 4A, it suggests that $R_f$ has not changed. If the field circuit is supplied by a constant voltage of 200V, the field current will remain 4A.

    Now, calculate the terminal voltage when the load current is 80 A and the field current is 4 A:
    Armature current $I_a = I_L + I_f = 80 + 4 = 84$ A.
    The generated EMF equation is $E_g = \frac{\Phi Z N P}{60 A}$.
    We know $E_g = 220$ V when $\Phi$ is such that $I_f = 4$ A (assuming constant speed $N$).
    The voltage equation is $V_t = E_g - I_a R_a$.
    $V_t = 220 - (84 \times 0.1)$
    $V_t = 220 - 8.4$
    $V_t = 211.6$ V

    **Alternative interpretation:** If the field current of 4A is associated with the 220V EMF, and the question implies the generator is operating at the same speed and flux, then $E_g$ remains 220V. The field current is dictated by the field circuit. If the field circuit is connected to a constant voltage, $I_f$ stays constant. If the field rheostat is adjusted, $I_f$ can change.

    **The most common interpretation for such problems is that the generated EMF is calculated based on the armature current and terminal voltage, and the field current affects the flux, which in turn affects the EMF.**
    Let's assume the first condition gives us the $E_g$ that the machine is capable of generating at a certain speed and flux. The field current of 4A implies a certain excitation. If the field circuit is connected to a constant voltage source, $I_f$ will remain 4A.

    **Let's stick with the interpretation that $E_g = 220$ V is the induced EMF, and the field current is 4 A.**
    When $I_L = 80$ A and $I_f = 4$ A:
    $I_a = I_L + I_f = 80 + 4 = 84$ A
    $V_t = E_g - I_a R_a$
    $V_t = 220 - (84 \times 0.1)$
    $V_t = 220 - 8.4$
    $V_t = 211.6$ V

    **Answer 3:** The terminal voltage is 211.6 V.

### 6. Important Points to Remember

*   **EMF Equation:** $E_g = \frac{\Phi Z N P}{60 A}$ is crucial for understanding voltage generation.
*   **Voltage Equation:** $V_t = E_g - I_a R_a$ is fundamental for calculating terminal voltage, accounting for internal losses.
*   **Classifications:** Understand the distinct characteristics of separately excited, shunt, series, and compound generators, especially concerning voltage regulation.
*   **Armature Reaction:** While not explicitly covered in detail in this section, it's an important phenomenon that affects the flux and thus the generated EMF, particularly in self-excited generators. It's discussed in detail in later sections or textbooks.
*   **Commutation:** The commutator's role in converting AC induced EMF to DC output is critical.
*   **Field Excitation:** The method of exciting the field winding significantly impacts the generator's performance.
*   **Resistance Calculations:** Always include all resistances in the path of current flow (armature, series field, brush drop if specified) for accurate calculations.
