---
title: "active, reactive and apparent power in single phase and three phase system. (Simple numerical problems)"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912df3"
status: "completed"
scrapedAt: "2026-05-20T18:32:40.044Z"
---
# Module 1: Generation of Alternating Voltages
## Topic: Active, Reactive, and Apparent Power in Single-Phase and Three-Phase Systems

Welcome, everyone! Today, we're diving into a crucial aspect of AC circuits: **Power**. When we talk about electrical power, especially in AC systems, it's not as straightforward as just multiplying voltage and current. There are different "types" of power, and understanding them is key to designing, operating, and troubleshooting any electrical system, from your phone charger to a massive industrial plant. This topic directly relates to **CO1 (Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits)** and **CO2 (Develop an awareness on the fundamentals of electric power generation, transmission and distribution)**. A solid grasp here will help you with the practical application of electrical engineering principles.

Think about it: when you buy a motor, it has a power rating in Watts (W) or Kilowatts (kW), right? But sometimes you see "kVA" ratings too. What's the difference? That's exactly what we're going to unravel today. We’ll be looking at **active power**, **reactive power**, and **apparent power**, first in simple single-phase systems, and then extending our understanding to the more common three-phase systems used in industry. We'll also tackle some simple numerical problems to solidify your understanding, which is vital for exam success.

### 1. Understanding Power in AC Circuits: The Analogy

Before we get into the technical definitions, let's use an analogy. Imagine you're at a pub, and you order a beer. You get a glass with beer and some foam on top.

*   **The Beer:** This is like the **active power**. It's the useful stuff, the part that actually does the work. In an electrical circuit, it's the power that gets converted into mechanical work (in a motor), light (in a bulb), or heat (in a heater). It's what your electricity bill is primarily based on.
*   **The Foam:** This is like the **reactive power**. It takes up space in the glass, but it doesn't quench your thirst. In an AC circuit, reactive power is associated with magnetic fields (in inductors) and electric fields (in capacitors). It's necessary for the operation of many devices like motors and transformers, but it doesn't contribute to actual work done. It just sloshes back and forth.
*   **The Entire Glass (Beer + Foam):** This represents the **apparent power**. It's the total "size" of the package you're getting, the sum of both the useful beer and the non-useful foam. In electrical terms, it's the product of voltage and current magnitudes.

This analogy, often found in discussions on AC power, helps visualize why we need to distinguish between these power types.

### 2. Single-Phase AC Power

In a single-phase AC system, we have a sinusoidal voltage and a sinusoidal current. Let's define the powers:

#### 2.1. Active Power (P)

*   **Definition:** Active power, also known as **real power** or **true power**, is the power that is actually consumed by a circuit and converted into useful work or heat. It is the average power delivered over a complete cycle of the AC waveform.
*   **Unit:** Watts (W) or Kilowatts (kW).
*   **Formula:**
    If the voltage is $v(t) = V_m \sin(\omega t)$ and the current is $i(t) = I_m \sin(\omega t - \phi)$, where $\phi$ is the phase difference between voltage and current:
    $$P = V_{rms} I_{rms} \cos(\phi)$$
    Here, $V_{rms}$ and $I_{rms}$ are the root-mean-square values of voltage and current, respectively. The term $\cos(\phi)$ is called the **power factor (PF)**.
*   **Explanation:**
    *   Resistive loads (like heaters, incandescent bulbs) have a power factor of 1 ($\cos(0^\circ) = 1$), meaning voltage and current are in phase. All the power delivered is active power.
    *   Inductive loads (like motors, transformers) cause the current to lag the voltage ($\phi$ is positive). The power factor is less than 1.
    *   Capacitive loads (like capacitors, some electronic circuits) cause the current to lead the voltage ($\phi$ is negative). The power factor is also less than 1, but usually considered positive when leading.
*   **Connection to Course Outcomes:** This directly relates to **CO1** as calculating active power involves using RMS values of voltage and current and understanding the phase difference, fundamental AC circuit concepts. **CO2** is touched upon as this is the power we are interested in when transmitting and distributing electricity.

#### 2.2. Reactive Power (Q)

*   **Definition:** Reactive power is the power that oscillates back and forth between the source and the reactive components (inductors and capacitors) of the circuit. It does not perform any useful work but is essential for the creation and maintenance of magnetic and electric fields.
*   **Unit:** Volt-Amperes Reactive (VAR) or Kilovars (kVAR).
*   **Formula:**
    $$Q = V_{rms} I_{rms} \sin(\phi)$$
*   **Explanation:**
    *   Inductive loads require reactive power to establish their magnetic field. This power is drawn from the source during one part of the cycle and returned to the source during another part.
    *   Capacitive loads generate reactive power, which can sometimes compensate for the reactive power consumed by inductive loads.
*   **Connection to Course Outcomes:** Again, this builds on **CO1** by understanding the role of phase difference and reactive components. It's important for **CO2** as managing reactive power is crucial for efficient power transmission and distribution, affecting voltage levels and line loading.

#### 2.3. Apparent Power (S)

*   **Definition:** Apparent power is the total power that appears to be supplied to a circuit. It is simply the product of the RMS voltage and the RMS current, regardless of their phase relationship.
*   **Unit:** Volt-Amperes (VA) or Kilovolt-Amperes (kVA).
*   **Formula:**
    $$S = V_{rms} I_{rms}$$
*   **Explanation:**
    *   Apparent power represents the total load on the power supply and the wiring. It dictates the size of transformers, generators, and conductors needed. For example, a transformer rated in kVA can supply a certain amount of apparent power, which can be delivered as active power or reactive power, or a combination of both.
*   **Connection to Course Outcomes:** Essential for **CO1** as it's a fundamental calculation in AC circuits. Crucial for **CO2**, as it defines the capacity requirements for generation, transmission, and distribution equipment.

#### 2.4. The Power Triangle

The relationship between these three powers can be visualized using a right-angled triangle, known as the **power triangle**.

*   The **adjacent** side represents Active Power (P).
*   The **opposite** side represents Reactive Power (Q).
*   The **hypotenuse** represents Apparent Power (S).
*   The angle between P and S is the phase angle $\phi$.

From this triangle, we can see the Pythagorean relationship:
$$S^2 = P^2 + Q^2$$
And also:
$$P = S \cos(\phi)$$
$$Q = S \sin(\phi)$$

This triangle is a powerful tool for understanding and solving problems. Remember this relationship; it’s a common exam concept!

#### 2.5. Power Factor (PF)

*   **Definition:** The power factor is the ratio of active power to apparent power.
    $$PF = \frac{P}{S} = \cos(\phi)$$
*   **Significance:**
    *   A **leading power factor** (capacitive load) means current leads voltage.
    *   A **lagging power factor** (inductive load) means current lags voltage.
    *   A power factor of 1 (unity) is ideal, where all apparent power is active power.
    *   Low power factors (especially lagging) are undesirable because they require larger currents for the same amount of active power, leading to higher losses in wires and larger equipment. This is why utility companies often charge industrial customers a penalty if their power factor falls below a certain level (e.g., 0.9). Power factor correction (using capacitors) is a common practice in industries to improve efficiency.

### 3. Simple Numerical Problems (Single-Phase)

Let's work through a couple of examples to make this concrete.

**Example 1:** A single-phase AC motor draws a current of 5 A when connected to a 230 V supply. If the power factor of the motor is 0.8 lagging, calculate the active power, reactive power, and apparent power.

**Solution:**

Given:
*   $V_{rms} = 230$ V
*   $I_{rms} = 5$ A
*   $PF = \cos(\phi) = 0.8$ (lagging)

1.  **Apparent Power (S):**
    $$S = V_{rms} \times I_{rms}$$
    $$S = 230 \text{ V} \times 5 \text{ A} = 1150 \text{ VA}$$
    So, the apparent power is 1150 VA or 1.15 kVA.

2.  **Active Power (P):**
    $$P = V_{rms} \times I_{rms} \times \cos(\phi)$$
    $$P = S \times PF$$
    $$P = 1150 \text{ VA} \times 0.8 = 920 \text{ W}$$
    The active power consumed by the motor is 920 Watts. This is the power doing the actual work.

3.  **Reactive Power (Q):**
    We first need to find $\sin(\phi)$. Since $\cos(\phi) = 0.8$, we can use the identity $\sin^2(\phi) + \cos^2(\phi) = 1$.
    $$\sin^2(\phi) = 1 - \cos^2(\phi) = 1 - (0.8)^2 = 1 - 0.64 = 0.36$$
    $$\sin(\phi) = \sqrt{0.36} = 0.6$$
    Since the power factor is lagging, Q will be positive (inductive reactive power).
    $$Q = V_{rms} \times I_{rms} \times \sin(\phi)$$
    $$Q = S \times \sin(\phi)$$
    $$Q = 1150 \text{ VA} \times 0.6 = 690 \text{ VAR}$$
    The reactive power is 690 VAR.

Alternatively, using the power triangle:
$$Q = \sqrt{S^2 - P^2} = \sqrt{(1150)^2 - (920)^2} = \sqrt{1322500 - 846400} = \sqrt{476100} = 690 \text{ VAR}$$

**Remember this:** Notice that $P$, $Q$, and $S$ form a right triangle ($920^2 + 690^2 = 846400 + 476100 = 1322500 = 1150^2$). This confirms our calculations.

**Example 2:** A purely resistive heater draws 10 A when connected to a 240 V supply. What is the active power, reactive power, and apparent power?

**Solution:**
For a purely resistive load, the voltage and current are in phase, so $\phi = 0^\circ$.
*   $V_{rms} = 240$ V
*   $I_{rms} = 10$ A
*   $PF = \cos(0^\circ) = 1$

1.  **Apparent Power (S):**
    $$S = V_{rms} \times I_{rms} = 240 \text{ V} \times 10 \text{ A} = 2400 \text{ VA} = 2.4 \text{ kVA}$$

2.  **Active Power (P):**
    $$P = V_{rms} \times I_{rms} \times \cos(\phi) = S \times PF$$
    $$P = 2400 \text{ VA} \times 1 = 2400 \text{ W} = 2.4 \text{ kW}$$
    As expected, for a resistive load, active power equals apparent power.

3.  **Reactive Power (Q):**
    $$Q = V_{rms} \times I_{rms} \times \sin(\phi)$$
    Since $\phi = 0^\circ$, $\sin(0^\circ) = 0$.
    $$Q = 2400 \text{ VA} \times 0 = 0 \text{ VAR}$$
    Purely resistive loads consume no reactive power.

### 4. Three-Phase AC Power

Most of the power generated and consumed globally is in three-phase form. This is because three-phase systems are more efficient for transmitting power and can provide a constant, smooth power output to motors, making them ideal for industrial applications. The concepts of active, reactive, and apparent power extend to three-phase systems, but the calculations differ slightly depending on whether the system is **Wye (Y)** or **Delta ($\Delta$)** connected and whether we're using line or phase values.

A balanced three-phase system has three AC voltages of equal magnitude and frequency, displaced in phase by $120^\circ$ from each other.

Let:
*   $V_{ph}$ be the phase voltage (voltage across one phase winding or load element).
*   $I_{ph}$ be the phase current (current flowing through one phase winding or load element).
*   $V_L$ be the line voltage (voltage between any two lines).
*   $I_L$ be the line current (current flowing in any one line conductor).

For a balanced system:
*   In a **Wye (Y)** connection: $V_L = \sqrt{3} V_{ph}$ and $I_L = I_{ph}$.
*   In a **Delta ($\Delta$)** connection: $V_L = V_{ph}$ and $I_L = \sqrt{3} I_{ph}$.

#### 4.1. Three-Phase Active Power (P)

*   **Definition:** The total active power delivered to a balanced three-phase load.
*   **Formula:**
    $$P = 3 \times V_{ph} \times I_{ph} \times \cos(\phi)$$
    Using line values, which is often more convenient:
    $$P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$$
    Here, $\cos(\phi)$ is the **power factor** of the individual phase load.
*   **Explanation:** The total active power is simply the sum of the active powers in each of the three phases.

#### 4.2. Three-Phase Reactive Power (Q)

*   **Definition:** The total reactive power delivered to a balanced three-phase load.
*   **Formula:**
    $$Q = 3 \times V_{ph} \times I_{ph} \times \sin(\phi)$$
    Using line values:
    $$Q = \sqrt{3} \times V_L \times I_L \times \sin(\phi)$$
*   **Explanation:** Similar to active power, it's the sum of reactive powers in each phase.

#### 4.3. Three-Phase Apparent Power (S)

*   **Definition:** The total apparent power delivered to a balanced three-phase load.
*   **Formula:**
    $$S = 3 \times V_{ph} \times I_{ph}$$
    Using line values:
    $$S = \sqrt{3} \times V_L \times I_L$$
*   **Unit:** Volt-Amperes (VA) or Kilovolt-Amperes (kVA).

#### 4.4. The Three-Phase Power Triangle

Just like in single-phase systems, the relationship $S^2 = P^2 + Q^2$ still holds for three-phase systems. The power factor is also $PF = P/S = \cos(\phi)$.

**Connection to Course Outcomes:** These formulas are critical for **CO1** (solving AC circuits) and form the bedrock of **CO2** (power generation, transmission, distribution). Understanding how to calculate these values in three-phase systems is essential for any electrical engineer.

### 5. Simple Numerical Problems (Three-Phase)

Let's apply these formulas.

**Example 3:** A balanced three-phase load is connected to a 400 V (line voltage) supply. The load draws a line current of 50 A at a power factor of 0.85 lagging. Calculate the total active power, reactive power, and apparent power.

**Solution:**

Given:
*   $V_L = 400$ V
*   $I_L = 50$ A
*   $PF = \cos(\phi) = 0.85$ (lagging)

1.  **Total Apparent Power (S):**
    $$S = \sqrt{3} \times V_L \times I_L$$
    $$S = \sqrt{3} \times 400 \text{ V} \times 50 \text{ A}$$
    $$S \approx 1.732 \times 400 \times 50 = 34640 \text{ VA} = 34.64 \text{ kVA}$$

2.  **Total Active Power (P):**
    $$P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$$
    $$P = S \times PF$$
    $$P = 34640 \text{ VA} \times 0.85$$
    $$P \approx 29444 \text{ W} = 29.44 \text{ kW}$$

3.  **Total Reactive Power (Q):**
    First, find $\sin(\phi)$:
    $$\sin(\phi) = \sqrt{1 - \cos^2(\phi)} = \sqrt{1 - (0.85)^2} = \sqrt{1 - 0.7225} = \sqrt{0.2775}$$
    $$\sin(\phi) \approx 0.5268$$
    Now calculate Q:
    $$Q = \sqrt{3} \times V_L \times I_L \times \sin(\phi)$$
    $$Q = S \times \sin(\phi)$$
    $$Q = 34640 \text{ VA} \times 0.5268$$
    $$Q \approx 18253 \text{ VAR} = 18.25 \text{ kVAR}$$

**Check with the power triangle:**
$$P^2 + Q^2 = (29444)^2 + (18253)^2 \approx 867099136 + 333179409 = 1200278545$$
$$S^2 = (34640)^2 \approx 1200000000$$
The values are very close, confirming our calculations.

**Example 4:** A 20 kW, 0.8 power factor lagging motor is supplied by a 400 V, 50 Hz supply. Calculate the line current.

**Solution:**

Given:
*   $P = 20$ kW $= 20000$ W
*   $PF = \cos(\phi) = 0.8$ (lagging)
*   $V_L = 400$ V

We need to find $I_L$. We can use the formula for active power:
$$P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$$
Rearranging to solve for $I_L$:
$$I_L = \frac{P}{\sqrt{3} \times V_L \times \cos(\phi)}$$
$$I_L = \frac{20000 \text{ W}}{\sqrt{3} \times 400 \text{ V} \times 0.8}$$
$$I_L = \frac{20000}{1.732 \times 400 \times 0.8}$$
$$I_L = \frac{20000}{554.24}$$
$$I_L \approx 36.08 \text{ A}$$

So, the line current drawn by the motor is approximately 36.08 Amperes.

### 6. Key Takeaways and Exam Focus

*   **Understand the Definitions:** Be clear on what active, reactive, and apparent power represent. Think of the beer analogy if you get stuck!
*   **Power Factor is Crucial:** A power factor of 1 is ideal. Low power factors (especially lagging) mean inefficiency and higher currents. Utility companies care about this.
*   **Power Triangle:** This is your best friend for solving problems. If you know two sides, you can find the third.
*   **Single-Phase vs. Three-Phase Formulas:** Note the $\sqrt{3}$ factor in the three-phase line value formulas. Always use line values ($V_L, I_L$) for total power calculations unless phase values ($V_{ph}, I_{ph}$) are explicitly given and the connection type (Y or $\Delta$) is known.
*   **Units:** Watts (W) for active power, VAR for reactive power, and VA for apparent power.
*   **Lagging vs. Leading:** Lagging is associated with inductive loads (motors), leading with capacitive loads. This affects the sign of Q in some contexts, but for calculating magnitudes, we use $\sin(\phi)$.

This topic is fundamental for understanding power systems, motor operation, and energy efficiency. You'll see these concepts reappearing throughout your electrical engineering studies. Make sure you can confidently calculate these power values for both single-phase and three-phase systems.

---

### Sample Questions and Answers

**Q1. A single-phase load consumes 1000 W of active power and requires 800 VAR of reactive power. What is the apparent power and the power factor?**

**Answer:**
Using the power triangle, $S^2 = P^2 + Q^2$.
$P = 1000$ W, $Q = 800$ VAR.
$S^2 = (1000)^2 + (800)^2 = 1000000 + 640000 = 1640000$
$S = \sqrt{1640000} \approx 1280.6$ VA.

The power factor $PF = P/S$.
$PF = 1000 / 1280.6 \approx 0.781$.
Assuming the reactive power is inductive (common for loads requiring reactive power), it would be 0.781 lagging.

**Q2. What is the advantage of a three-phase power system over a single-phase system for power transmission?**
*(Conceptual Question, relates to CO2)*

**Answer:**
Three-phase systems offer several advantages for power transmission:
1.  **Efficiency:** For the same amount of power transmitted, a three-phase system requires less conductor material (copper or aluminum) than three separate single-phase systems. This leads to significant cost savings and reduced line losses ($I^2R$ losses).
2.  **Constant Power Delivery:** In a balanced three-phase system, the total instantaneous power delivered to a balanced load is constant, unlike the pulsating power in a single-phase system. This results in smoother operation of machinery, especially motors.
3.  **Motor Starting:** Three-phase induction motors are self-starting without the need for special starting capacitors or windings, which are often required for single-phase motors.
4.  **Higher Power Capacity:** Three-phase systems can deliver more power for the same conductor size and voltage compared to single-phase systems.

**Q3. A 3-phase induction motor operating at 415 V (line) draws 15 A (line) at a power factor of 0.85 lagging. Calculate the active power drawn by the motor.**

**Answer:**
Given:
*   $V_L = 415$ V
*   $I_L = 15$ A
*   $PF = \cos(\phi) = 0.85$ (lagging)

The active power (P) in a three-phase system is given by:
$P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$
$P = \sqrt{3} \times 415 \text{ V} \times 15 \text{ A} \times 0.85$
$P \approx 1.732 \times 415 \times 15 \times 0.85$
$P \approx 8731.6$ W
$P \approx 8.73$ kW

The motor draws approximately 8.73 kW of active power.

**Q4. If a single-phase system has a voltage of 230 V and draws a current of 10 A at unity power factor, what are the active, reactive, and apparent powers?**

**Answer:**
Given:
*   $V_{rms} = 230$ V
*   $I_{rms} = 10$ A
*   $PF = \cos(\phi) = 1$ (unity)

1.  **Apparent Power (S):**
    $S = V_{rms} \times I_{rms} = 230 \text{ V} \times 10 \text{ A} = 2300 \text{ VA} = 2.3 \text{ kVA}$

2.  **Active Power (P):**
    $P = V_{rms} \times I_{rms} \times \cos(\phi) = S \times PF$
    $P = 2300 \text{ VA} \times 1 = 2300 \text{ W} = 2.3 \text{ kW}$
    For unity power factor, active power equals apparent power.

3.  **Reactive Power (Q):**
    Since $PF = \cos(\phi) = 1$, then $\phi = 0^\circ$.
    $\sin(\phi) = \sin(0^\circ) = 0$.
    $Q = V_{rms} \times I_{rms} \times \sin(\phi) = S \times \sin(\phi)$
    $Q = 2300 \text{ VA} \times 0 = 0 \text{ VAR}$
    A unity power factor load consumes no reactive power.
