---
title: "Parallel operation of DC shunt generators – load sharing – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b23"
status: "completed"
scrapedAt: "2026-05-23T16:12:17.928Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: Parallel Operation of DC Shunt Generators – Load Sharing – Numerical Problems

**Course Outcomes Addressed:**

*   **CO1:** Describe the constructional details of DC machines (Knowledge Level: K2) - *While this topic focuses on operation, understanding the shunt generator's construction is foundational.*
*   **CO2:** Analyze the performance DC generator under various load conditions (Knowledge Level: K3) - *This is the primary CO addressed, as parallel operation is a key aspect of performance analysis.*

**Learning Outcomes:**

*   Understand the conditions required for the parallel operation of DC shunt generators.
*   Explain the concept of load sharing among DC shunt generators in parallel.
*   Analyze the voltage-current characteristics of DC shunt generators and their impact on load sharing.
*   Solve numerical problems related to the parallel operation of DC shunt generators, including load sharing and voltage/current calculations.

---

### 1. Introduction to Parallel Operation of DC Shunt Generators

Parallel operation of DC generators is a common practice in power systems to:

*   **Meet increasing load demands:** Additional generators can be connected as the load grows.
*   **Improve reliability:** If one generator fails, others can continue to supply power.
*   **Increase efficiency:** Generators can be operated at or near their full load efficiency.
*   **Facilitate maintenance:** Generators can be taken offline for maintenance without interrupting the power supply.

**Key Concept:** The primary goal of parallel operation is to ensure that the connected generators supply power to a common load without causing detrimental effects on each other.

---

### 2. Conditions for Parallel Operation of DC Generators

For successful and stable parallel operation of DC generators, the following conditions must be met:

*   **(a) Identical Terminal Voltages:** The voltage of the incoming generator must be equal to the busbar voltage (voltage of the already connected generators). If the voltages are not equal, a circulating current will flow between the generators, which is undesirable.
    *   *Reference: P.S. Bimbhra, Electrical Machinery, 7th ed., Chapter 5.*
    *   *Reference: D P Kothari & I J Nagrath, Electric Machines, 5th ed., Chapter 12.*

*   **(b) Identical Polarity:** The positive terminal of the incoming generator must be connected to the positive terminal of the busbar, and the negative terminal to the negative terminal. Incorrect polarity connection will lead to a short circuit.

*   **(c) Similar Voltage-Current Characteristics:** The generators should have similar drooping voltage-current characteristics. This ensures that as the load increases, the voltage of each generator drops similarly, leading to proportional load sharing.
    *   *Reference: J.B. Gupta, Theory & Performance of Electrical Machines, 15th ed., Chapter 7.*

*   **(d) Speed of Prime Movers:** The prime movers of all generators must have similar speed-load characteristics. For shunt generators, this condition is implicitly met if their voltage-regulation curves are similar.

---

### 3. Connecting a DC Shunt Generator to an Existing Busbar

Let's consider connecting a new DC shunt generator (Generator 2) to a busbar where another DC shunt generator (Generator 1) is already supplying load.

**Steps:**

1.  **Start Generator 2:** Start the prime mover of Generator 2 and bring it up to its rated speed.
2.  **Adjust Excitation:** Adjust the field rheostat of Generator 2 to increase its generated EMF ($E_2$) until it is slightly *higher* than the busbar voltage ($V_{bus}$).
3.  **Check Polarity:** Ensure the polarity of Generator 2 matches the busbar polarity.
4.  **Close the Circuit Breaker:** Close the circuit breaker of Generator 2.
5.  **Load Sharing Adjustment:**
    *   If $E_2 > V_{bus}$, Generator 2 will start supplying current to the busbar. The magnitude of this current depends on the difference between $E_2$ and $V_{bus}$, and the internal resistances of Generator 2 and the connecting cables.
    *   To adjust the load sharing, decrease the field resistance (increase excitation) of Generator 2 if it's not taking enough load, or increase the field resistance (decrease excitation) if it's taking too much load. This effectively raises or lowers its terminal voltage characteristic.

**Important Note:** For DC shunt generators, the excitation is controlled by adjusting the field rheostat.

---

### 4. Load Sharing Between Parallel Connected DC Shunt Generators

When multiple DC shunt generators are connected in parallel to a common load, they share the total load current. The distribution of this load current depends on their individual voltage-current characteristics.

**Voltage-Current Characteristics of Shunt Generators:**

A DC shunt generator's terminal voltage ($V_{terminal}$) decreases as the load current ($I_L$) increases. This relationship can be represented by a drooping voltage-current characteristic curve.

The terminal voltage of a shunt generator is given by:
$V_{terminal} = E_g - I_a R_a$

Where:
*   $E_g$ is the generated EMF.
*   $I_a$ is the armature current.
*   $R_a$ is the armature resistance.

The armature current is the sum of the load current and the shunt field current ($I_{sh}$):
$I_a = I_L + I_{sh}$

Since the shunt field current is relatively constant for a shunt generator (assuming constant excitation), we can approximate $I_a \approx I_L$ for simplicity in load sharing analysis, especially when armature resistance is small compared to the equivalent resistance of the external circuit.

Therefore, the terminal voltage can be expressed as:
$V_{terminal} \approx E_g - I_L R_a$

This equation shows that the terminal voltage is a function of the generated EMF and the armature resistance. The characteristic curve of $V_{terminal}$ vs. $I_L$ will be a drooping line.

**Graphical Method for Load Sharing:**

Consider two shunt generators (G1 and G2) operating in parallel.
*   Generator 1 has generated EMF $E_1$ and armature resistance $R_{a1}$. Its terminal voltage characteristic is represented by a drooping curve $V_1$ vs. $I_{L1}$.
*   Generator 2 has generated EMF $E_2$ and armature resistance $R_{a2}$. Its terminal voltage characteristic is represented by a drooping curve $V_2$ vs. $I_{L2}$.

When connected in parallel to a busbar of voltage $V_{bus}$, the operating point for each generator is where its characteristic curve intersects the busbar voltage line. However, since the busbar voltage is common, the actual operating point is determined by the intersection of the *sum of their individual characteristics* with the common bus voltage.

More practically, for shunt generators, their terminal voltage is adjusted to match the bus voltage. Once connected, they share the total load current ($I_{Total} = I_{L1} + I_{L2}$) such that their terminal voltages are equal ($V_{terminal1} = V_{terminal2} = V_{bus}$).

The load shared by each generator is determined by its individual voltage-current characteristic. If two generators are operating in parallel at a common terminal voltage $V$, the current supplied by generator 1 is $I_{L1}$ and by generator 2 is $I_{L2}$.

From the characteristic curves, at voltage $V$:
$I_{L1} = f_1(V)$
$I_{L2} = f_2(V)$

The total load current is $I_{Total} = I_{L1} + I_{L2}$.

**Impact of Mismatched Characteristics:**

*   **Similar Characteristics:** If the voltage-current characteristics are similar (i.e., the curves are parallel, indicating similar armature resistance and regulation), they will share the load in proportion to their capacities.
*   **Dissimilar Characteristics:**
    *   **Generator with a "steeper" characteristic (higher $R_a$ or poorer regulation):** Will supply less load.
    *   **Generator with a "flatter" characteristic (lower $R_a$ or better regulation):** Will supply more load.
    *   If one generator's voltage characteristic is significantly higher than the other at all load currents, it will attempt to supply the entire load and even circulate current back into the other generator.

**Load Sharing Equation (Simplified Approach):**

Assuming the generated EMFs are adjusted to be equal to the busbar voltage ($E_1 = E_2 = V_{bus}$) and the armature resistances are $R_{a1}$ and $R_{a2}$ respectively. The shunt field currents are often assumed constant or their contribution to voltage drop is considered part of the generator characteristic.

The load current supplied by each generator can be expressed based on their drooping characteristics. If we consider the terminal voltage $V$ to be common, the current $I_L$ supplied by a generator with generated EMF $E$ and armature resistance $R_a$ is:
$V = E - I_L R_a$
$I_L = \frac{E - V}{R_a}$

For two generators in parallel:
$I_{L1} = \frac{E_1 - V}{R_{a1}}$
$I_{L2} = \frac{E_2 - V}{R_{a2}}$

The total load current is $I_{Total} = I_{L1} + I_{L2}$.

**Crucial Point:** In practice, to connect a new generator, its generated EMF is slightly raised above the busbar voltage to ensure it supplies current. Once connected, its excitation is adjusted (by changing the field rheostat, which indirectly affects $E_g$) to achieve the desired load sharing. This means $E_1$ and $E_2$ might not be exactly equal to the bus voltage but are adjusted to ensure the correct load sharing at the common terminal voltage $V$.

The actual common terminal voltage $V$ is such that the sum of the load currents from each generator equals the total load current.

$I_{Total} = \frac{E_1 - V}{R_{a1}} + \frac{E_2 - V}{R_{a2}}$

Solving this equation for $V$ is essential for determining the load shared by each generator.

---

### 5. Numerical Problems and Solutions

Let's work through some examples to solidify the understanding.

**Example 1: Load Sharing with Similar Characteristics**

Two DC shunt generators, A and B, are connected in parallel to supply a total load of 200 A at 230 V.
Generator A has an open-circuit voltage of 240 V and an armature resistance of 0.04 $\Omega$.
Generator B has an open-circuit voltage of 245 V and an armature resistance of 0.05 $\Omega$.
The shunt field currents can be neglected.

**Solution:**

*   **Step 1: Express load current for each generator.**
    For generator A: $I_{LA} = \frac{E_A - V}{R_{aA}} = \frac{240 - V}{0.04}$
    For generator B: $I_{LB} = \frac{E_B - V}{R_{aB}} = \frac{245 - V}{0.05}$

*   **Step 2: Use the total load current equation.**
    $I_{Total} = I_{LA} + I_{LB}$
    $200 = \frac{240 - V}{0.04} + \frac{245 - V}{0.05}$

*   **Step 3: Solve for the common bus voltage (V).**
    Multiply by the least common multiple of 0.04 and 0.05, which is 0.20:
    $200 \times 0.20 = \frac{240 - V}{0.04} \times 0.20 + \frac{245 - V}{0.05} \times 0.20$
    $40 = 5(240 - V) + 4(245 - V)$
    $40 = 1200 - 5V + 980 - 4V$
    $40 = 2180 - 9V$
    $9V = 2180 - 40$
    $9V = 2140$
    $V = \frac{2140}{9} \approx 237.78 \text{ V}$

*   **Step 4: Calculate the load shared by each generator.**
    $I_{LA} = \frac{240 - 237.78}{0.04} = \frac{2.22}{0.04} = 55.5 \text{ A}$
    $I_{LB} = \frac{245 - 237.78}{0.05} = \frac{7.22}{0.05} = 144.4 \text{ A}$

*   **Step 5: Verify the total load.**
    $I_{LA} + I_{LB} = 55.5 + 144.4 = 199.9 \text{ A} \approx 200 \text{ A}$ (Slight difference due to rounding).

**Answer:** Generator A supplies 55.5 A and Generator B supplies 144.4 A.

---

**Example 2: Adjusting Load Sharing**

Two DC shunt generators, rated for 230 V, are connected in parallel to supply a load of 150 A.
Generator 1 has an armature resistance of 0.05 $\Omega$ and its open-circuit voltage is adjusted to 240 V.
Generator 2 has an armature resistance of 0.06 $\Omega$ and its open-circuit voltage is adjusted to 238 V.
Neglect shunt field currents.

**Solution:**

*   **Step 1: Express load current for each generator.**
    For generator 1: $I_{L1} = \frac{E_1 - V}{R_{a1}} = \frac{240 - V}{0.05}$
    For generator 2: $I_{L2} = \frac{E_2 - V}{R_{a2}} = \frac{238 - V}{0.06}$

*   **Step 2: Use the total load current equation.**
    $I_{Total} = I_{L1} + I_{L2}$
    $150 = \frac{240 - V}{0.05} + \frac{238 - V}{0.06}$

*   **Step 3: Solve for the common bus voltage (V).**
    Multiply by the LCM of 0.05 and 0.06, which is 0.30:
    $150 \times 0.30 = \frac{240 - V}{0.05} \times 0.30 + \frac{238 - V}{0.06} \times 0.30$
    $45 = 6(240 - V) + 5(238 - V)$
    $45 = 1440 - 6V + 1190 - 5V$
    $45 = 2630 - 11V$
    $11V = 2630 - 45$
    $11V = 2585$
    $V = \frac{2585}{11} \approx 235 \text{ V}$

*   **Step 4: Calculate the load shared by each generator.**
    $I_{L1} = \frac{240 - 235}{0.05} = \frac{5}{0.05} = 100 \text{ A}$
    $I_{L2} = \frac{238 - 235}{0.06} = \frac{3}{0.06} = 50 \text{ A}$

*   **Step 5: Verify the total load.**
    $I_{L1} + I_{L2} = 100 + 50 = 150 \text{ A}$

**Answer:** Generator 1 supplies 100 A and Generator 2 supplies 50 A.

**What if we wanted to equalize load sharing?**

If we wanted each generator to supply 75 A, we would need to adjust the generated EMFs ($E_1$ and $E_2$).

For Generator 1 to supply 75 A at voltage V:
$75 = \frac{E_1 - V}{0.05}$  =>  $E_1 - V = 75 \times 0.05 = 3.75$  =>  $E_1 = V + 3.75$

For Generator 2 to supply 75 A at voltage V:
$75 = \frac{E_2 - V}{0.06}$  =>  $E_2 - V = 75 \times 0.06 = 4.5$  =>  $E_2 = V + 4.5$

We also know that the total load current is 150 A:
$I_{L1} + I_{L2} = 150$
$75 + 75 = 150$

The common voltage $V$ would be such that these conditions are met. Without knowing the relationship between $E$ and field current, we can only say that the excitation of Generator 1 needs to be increased (to increase $E_1$) and Generator 2 needs to be decreased (to decrease $E_2$) if they were initially sharing load unequally and we wanted to equalize it.

---

**Example 3: Interconnecting Generators with Different Voltages**

Two DC shunt generators are to be connected in parallel to supply a load.
Generator 1: $E_1 = 240$ V, $R_{a1} = 0.05 \Omega$.
Generator 2: $E_2 = 235$ V, $R_{a2} = 0.04 \Omega$.
They are connected to a busbar and then a load is connected, drawing a total of 180 A.

**Solution:**

*   **Step 1: Set up the equations for load current.**
    $I_{L1} = \frac{240 - V}{0.05}$
    $I_{L2} = \frac{235 - V}{0.04}$

*   **Step 2: Use the total load current equation.**
    $I_{Total} = I_{L1} + I_{L2}$
    $180 = \frac{240 - V}{0.05} + \frac{235 - V}{0.04}$

*   **Step 3: Solve for the common bus voltage (V).**
    Multiply by 0.20:
    $180 \times 0.20 = 5(240 - V) + 4(235 - V)$
    $36 = 1200 - 5V + 940 - 4V$
    $36 = 2140 - 9V$
    $9V = 2140 - 36$
    $9V = 2104$
    $V = \frac{2104}{9} \approx 233.78 \text{ V}$

*   **Step 4: Calculate the load shared by each generator.**
    $I_{L1} = \frac{240 - 233.78}{0.05} = \frac{6.22}{0.05} = 124.4 \text{ A}$
    $I_{L2} = \frac{235 - 233.78}{0.04} = \frac{1.22}{0.04} = 30.5 \text{ A}$

*   **Step 5: Verify the total load.**
    $I_{L1} + I_{L2} = 124.4 + 30.5 = 154.9 \text{ A}$. This doesn't match 180A.

Let's re-check the calculation.
$36 = 1200 - 5V + 940 - 4V$
$36 = 2140 - 9V$
$9V = 2140 - 36 = 2104$
$V = 2104 / 9 = 233.777...$

$I_{L1} = (240 - 233.777) / 0.05 = 6.222 / 0.05 = 124.44$ A
$I_{L2} = (235 - 233.777) / 0.04 = 1.222 / 0.04 = 30.55$ A
Sum = $124.44 + 30.55 = 154.99$ A. This is not 180A.

There might be an issue with the problem statement, or my assumption of how the load is connected *after* generators are paralleled.

**Rethink:** When generators are connected in parallel to supply a common load, the total load current is the sum of the currents they supply *at the common bus voltage*.

The common bus voltage $V$ is determined by the condition $I_{Total} = I_{L1} + I_{L2}$.

Let's assume the generated EMFs are set correctly to supply the load.

$I_{L1} = \frac{E_1 - V}{R_{a1}}$
$I_{L2} = \frac{E_2 - V}{R_{a2}}$

$I_{Total} = I_{L1} + I_{L2}$

This equation implies that the common voltage $V$ is the voltage that satisfies the load sharing.

Let's re-examine Example 3 with the total load being 180A.
If $E_1 = 240$ V, $R_{a1} = 0.05 \Omega$, $E_2 = 235$ V, $R_{a2} = 0.04 \Omega$.
$I_{Total} = 180$ A.

$180 = \frac{240 - V}{0.05} + \frac{235 - V}{0.04}$
$180 \times 0.20 = 5(240 - V) + 4(235 - V)$
$36 = 1200 - 5V + 940 - 4V$
$36 = 2140 - 9V$
$9V = 2140 - 36 = 2104$
$V = 2104 / 9 = 233.78$ V

Then, $I_{L1} = (240 - 233.78) / 0.05 = 124.44$ A
$I_{L2} = (235 - 233.78) / 0.04 = 30.55$ A
Sum is $154.99$ A, not 180 A.

**What if the question implies the generators were *already* operating and then a load of 180A was connected?**

The standard approach assumes that the total load is the demand that the parallel combination must meet. The bus voltage will settle at a value that allows this total demand to be met by the sum of individual generator contributions.

**Let's re-check the algebra for Example 3:**
$180 = (240-V)/0.05 + (235-V)/0.04$
Multiply by 0.05 x 0.04 = 0.002:
$180 \times 0.002 = 0.04(240-V) + 0.05(235-V)$
$0.36 = 9.6 - 0.04V + 11.75 - 0.05V$
$0.36 = 21.35 - 0.09V$
$0.09V = 21.35 - 0.36 = 20.99$
$V = 20.99 / 0.09 \approx 233.22$ V

Let's try multiplying by the LCM of denominators (0.05, 0.04) which is 0.20:
$180 \times 0.20 = \frac{240 - V}{0.05} \times 0.20 + \frac{235 - V}{0.04} \times 0.20$
$36 = 4(240 - V) + 5(235 - V)$
$36 = 960 - 4V + 1175 - 5V$
$36 = 2135 - 9V$
$9V = 2135 - 36 = 2099$
$V = 2099 / 9 = 233.22$ V

Now, calculate the currents:
$I_{L1} = (240 - 233.22) / 0.05 = 6.78 / 0.05 = 135.6$ A
$I_{L2} = (235 - 233.22) / 0.04 = 1.78 / 0.04 = 44.5$ A
Sum = $135.6 + 44.5 = 180.1$ A. This is correct!

**Answer for Example 3 (corrected):**
The common bus voltage is approximately 233.22 V.
Generator 1 supplies approximately 135.6 A.
Generator 2 supplies approximately 44.5 A.

**Important Observation for Example 3:** Generator 1, with a higher generated EMF and lower armature resistance, supplies a significantly larger portion of the load. This aligns with the concept that generators with "flatter" voltage regulation (or higher generated EMF relative to the bus voltage) take more load.

---

### 6. Practice Questions

1.  Two DC shunt generators, each rated 110 V, are connected in parallel to supply a load of 500 A.
    Generator A has an armature resistance of 0.02 $\Omega$ and generates an EMF of 115 V.
    Generator B has an armature resistance of 0.03 $\Omega$ and generates an EMF of 116 V.
    Neglecting the shunt field currents, calculate:
    (a) The voltage at which they operate in parallel.
    (b) The load shared by each generator.

    **Answer:**
    (a) $V \approx 115.45$ V
    (b) $I_{LA} \approx 277.5$ A, $I_{LB} \approx 225$ A. (Sum is 502.5A, which is close to 500A, error might be due to assumed EMFs not perfectly matching load)

    *Let's redo for exact total load of 500A:*
    $500 = \frac{115 - V}{0.02} + \frac{116 - V}{0.03}$
    Multiply by 0.06:
    $500 \times 0.06 = 3(115 - V) + 2(116 - V)$
    $30 = 345 - 3V + 232 - 2V$
    $30 = 577 - 5V$
    $5V = 577 - 30 = 547$
    $V = 547 / 5 = 109.4$ V. This is lower than the rated voltage, indicating the initial EMFs might need to be higher for a stable operation at rated voltage. However, let's proceed.

    (a) $V \approx 109.4$ V
    (b) $I_{LA} = (115 - 109.4) / 0.02 = 5.6 / 0.02 = 280$ A
    $I_{LB} = (116 - 109.4) / 0.03 = 6.6 / 0.03 = 220$ A
    Total = $280 + 220 = 500$ A. This is correct.

2.  Two DC shunt generators, G1 and G2, are connected in parallel to supply a total load of 300 A at 220 V.
    G1 has generated EMF $E_1 = 230$ V and armature resistance $R_{a1} = 0.04 \Omega$.
    G2 has generated EMF $E_2 = 228$ V and armature resistance $R_{a2} = 0.05 \Omega$.
    Calculate the load shared by each generator.

    **Answer:**
    $I_{L1} = 137.5$ A
    $I_{L2} = 162.5$ A
    (Note: Generator 2 takes more load due to lower armature resistance, leading to flatter characteristic).

    *Let's verify:*
    $300 = \frac{230 - V}{0.04} + \frac{228 - V}{0.05}$
    Multiply by 0.20:
    $300 \times 0.20 = 5(230 - V) + 4(228 - V)$
    $60 = 1150 - 5V + 912 - 4V$
    $60 = 2062 - 9V$
    $9V = 2062 - 60 = 2002$
    $V = 2002 / 9 = 222.44$ V

    $I_{L1} = (230 - 222.44) / 0.04 = 7.56 / 0.04 = 189$ A
    $I_{L2} = (228 - 222.44) / 0.05 = 5.56 / 0.05 = 111.2$ A
    Sum = $189 + 111.2 = 300.2$ A.

    My previous answer was incorrect. The generator with higher EMF and higher resistance takes less load if the bus voltage is higher than its EMF. Let's review the problem statement and my calculations.

    Ah, the issue is how the EMFs are given. If these are open-circuit voltages that are then connected, the bus voltage will settle. If the load is already connected and generators are being paralleled, their EMFs must be adjusted to match the bus. The formula $I_L = (E-V)/R_a$ is key.

    Let's re-check Question 2 calculations:
    $V = 222.44$ V.
    $I_{L1} = (230 - 222.44)/0.04 = 189$ A.
    $I_{L2} = (228 - 222.44)/0.05 = 111.2$ A.
    Total load = $189 + 111.2 = 300.2$ A.

    **Corrected Answer for Question 2:**
    The common bus voltage is approximately 222.44 V.
    Generator 1 supplies approximately 189 A.
    Generator 2 supplies approximately 111.2 A.
    Generator 1 supplies more load because its generated EMF is higher relative to the common bus voltage.

---

### 7. Important Points to Remember

*   **Conditions for parallel operation:** Equal voltage, same polarity, similar characteristics, and proper phase sequence (for AC, but applies conceptually to DC machines as well for connection).
*   **Connecting generator:** Bring generated voltage slightly above bus voltage before closing the breaker.
*   **Load sharing:** Determined by the intersection of individual voltage-current characteristic curves. Generators with "flatter" characteristics (lower armature resistance, higher generated EMF relative to bus voltage) supply more load.
*   **Circulating current:** Occurs if voltages are unequal or polarity is reversed.
*   **Neglecting shunt field current:** Often done for simplicity in load sharing calculations, as it's usually much smaller than armature current. However, it's a component of armature current. The formula $V = E - I_a R_a$ or $V = E - (I_L + I_{sh})R_a$ is more precise. For simple load sharing, $I_a \approx I_L$ is a common assumption if $I_{sh}$ is small.
*   **Adjustment:** Load sharing can be adjusted by changing the excitation of individual generators (i.e., adjusting the field rheostat to change $E_g$).

---
