---
title: "Power flow diagram - losses and efficiency – numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 3: 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df8"
status: "completed"
scrapedAt: "2026-05-23T16:19:15.848Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 3: 3
## Topic: Power Flow Diagram - Losses and Efficiency – Numerical Problems

This module delves into the critical aspects of machine performance by analyzing how power flows through both synchronous and induction machines, identifying various losses, and calculating their efficiency. Understanding these concepts is vital for predicting and optimizing machine operation.

---

### 1. Power Flow Diagrams

A power flow diagram visually represents the energy conversion process within an electrical machine, from the electrical input to the mechanical output, accounting for all intermediate stages and energy losses.

#### 1.1. Synchronous Machine Power Flow Diagram

Synchronous machines (generators and motors) have a similar fundamental power flow.

**Synchronous Generator (Power Input: Mechanical, Power Output: Electrical)**

```
+---------------------+     +-----------------+     +-----------------+     +-----------------+     +------------------+
| Mechanical Input    | --> | Rotational Losses| --> | Stator Copper   | --> | Core Losses     | --> | Stator Copper    | --> | Gross Mechanical  |
| (Prime Mover Power) |     | (Friction & Wind)|     | Losses (I^2*R_a)|     | (Hysteresis &   |     | Losses (I^2*R_a)|     | Power Developed   |
+---------------------+     +-----------------+     +-----------------+     | Eddy Currents)  |     +-----------------+     +------------------+
                                                                                |                 |
                                                                                v                 v
                                                                        +-----------------+     +-----------------+
                                                                        | Armature Current| --> | Electrical Output|
                                                                        | Flow            |     | (Terminal Power) |
                                                                        +-----------------+     +------------------+
```

*   **Mechanical Input Power:** Power supplied by the prime mover (e.g., turbine).
*   **Rotational Losses:** Friction and windage losses in bearings and rotating parts. These are generally constant regardless of load.
*   **Armature Copper Losses ($I_a^2 R_a$):** Losses due to current flowing through the armature winding resistance ($R_a$). This is a variable loss dependent on the armature current.
*   **Core Losses (Iron Losses):** Losses occurring in the stator and rotor iron due to alternating magnetic flux. These comprise:
    *   **Hysteresis Loss:** Due to the repeated magnetization and demagnetization of the iron core.
    *   **Eddy Current Loss:** Due to circulating currents induced in the iron core by the changing magnetic flux.
    *   Core losses are primarily dependent on the applied voltage and frequency, and are considered relatively constant for a given operating voltage and frequency.
*   **Gross Mechanical Power Developed:** The mechanical power available at the shaft after subtracting stator losses. For a generator, this is the power transferred to the armature conductors.
*   **Electrical Output Power:** The net electrical power delivered to the external load terminals.

**Synchronous Motor (Power Input: Electrical, Power Output: Mechanical)**

```
+-----------------+     +-----------------+     +-----------------+     +-----------------+     +-----------------+     +-------------------+
| Electrical Input| --> | Stator Copper   | --> | Core Losses     | --> | Armature Copper | --> | Gross Mechanical| --> | Rotational Losses | --> | Mechanical Output |
| (Terminal Power)|     | Losses (I^2*R_a)|     | (Hysteresis &   |     | Losses (I^2*R_a)|     | Power Developed |     | (Friction & Wind)|     | (Shaft Power)     |
+-----------------+     +-----------------+     | Eddy Currents)  |     +-----------------+     +-----------------+     +-------------------+
                                                |                 |
                                                v                 v
                                         +-----------------+
                                         | Armature Current|
                                         | Flow            |
                                         +-----------------+
```

*   **Electrical Input Power:** Power supplied to the stator terminals.
*   **Stator Copper Losses ($I_a^2 R_a$):** Losses due to current flowing through the stator winding resistance.
*   **Core Losses:** Hysteresis and eddy current losses in the stator iron.
*   **Armature Copper Losses ($I_a^2 R_a$):** (Same as stator copper losses, but often referred to as armature loss in motor context).
*   **Gross Mechanical Power Developed:** The mechanical power generated internally within the motor after stator losses.
*   **Rotational Losses:** Friction and windage losses in bearings and rotating parts.
*   **Mechanical Output Power:** The net mechanical power delivered to the load shaft.

#### 1.2. Induction Machine Power Flow Diagram

Induction machines (motors and generators) have a distinct power flow due to the presence of slip.

**Induction Motor (Power Input: Electrical, Power Output: Mechanical)**

```
+-----------------+     +-----------------+     +-----------------+     +-----------------+     +-----------------+     +--------------------+
| Electrical Input| --> | Stator Copper   | --> | Core Losses     | --> | Air Gap Power   | --> | Rotor Copper    | --> | Mechanical Output  |
| (Line Input)    |     | Losses (I_s^2*R_s)|     | (Hysteresis &   |     | (P_ag)          |     | Losses (I_r^2*R_r)|     | (Shaft Power)      |
+-----------------+     +-----------------+     | Eddy Currents)  |     +-----------------+     +-----------------+     +--------------------+
                                                |                 |
                                                v                 v
                                         +-----------------+
                                         | Stator Current  |
                                         | Flow            |
                                         +-----------------+
```

*   **Electrical Input Power:** Power supplied to the stator terminals (three-phase).
*   **Stator Copper Losses ($I_s^2 R_s$):** Losses in the stator winding resistance. $I_s$ is stator current, $R_s$ is stator resistance per phase.
*   **Core Losses:** Hysteresis and eddy current losses in the stator iron. These are assumed constant.
*   **Air Gap Power ($P_{ag}$):** The power transferred across the air gap from the stator to the rotor. This is the gross power developed by the rotor.
    *   $P_{ag} = 3 I_r^2 \frac{R_r'}{s}$, where $I_r$ is rotor current, $R_r'$ is equivalent rotor resistance referred to stator, and $s$ is slip.
*   **Rotor Copper Losses ($I_r^2 R_r'$):** Losses in the rotor winding resistance. These are also known as slip losses.
    *   $P_{rotor\_copper} = s \times P_{ag}$
*   **Mechanical Output Power (Shaft Power, $P_{out}$):** The net mechanical power delivered to the load after subtracting rotor losses and rotational losses.
    *   $P_{out} = P_{ag} - P_{rotor\_copper} - P_{rotational}$
*   **Rotational Losses:** Friction and windage losses in bearings and rotating parts. These are usually assumed constant.

**Induction Generator (Power Input: Mechanical, Power Output: Electrical)**

The power flow is reversed compared to an induction motor.

```
+-----------------+     +-----------------+     +-----------------+     +-----------------+     +-----------------+     +--------------------+
| Mechanical Input| --> | Rotational      | --> | Rotor Copper    | --> | Air Gap Power   | --> | Core Losses     | --> | Stator Copper    | --> | Electrical Output|
| (Shaft Power)   |     | Losses          |     | Losses (I_r^2*R_r)|     | (P_ag)          |     | (Hysteresis &   |     | Losses (I_s^2*R_s)|     | (Line Output)    |
+-----------------+     +-----------------+     +-----------------+     +-----------------+     | Eddy Currents)  |     +-----------------+     +--------------------+
                                                                                                  |                 |
                                                                                                  v                 v
                                                                                            +-----------------+
                                                                                            | Rotor Current   |
                                                                                            | Flow            |
                                                                                            +-----------------+
```

*   **Mechanical Input Power:** Power supplied to the shaft by the prime mover.
*   **Rotational Losses:** Friction and windage losses.
*   **Rotor Copper Losses:** Losses in the rotor winding. For a generator, the slip is negative, hence these are additive losses to the mechanical input before reaching the air gap.
*   **Air Gap Power ($P_{ag}$):** Power transferred across the air gap.
*   **Core Losses:** Stator iron losses.
*   **Stator Copper Losses ($I_s^2 R_s$):** Losses in the stator winding.
*   **Electrical Output Power:** Net electrical power delivered to the load.

---

### 2. Losses and Efficiency

**2.1. Classification of Losses**

Losses in rotating electrical machines can be broadly classified as:

*   **Constant Losses (Fixed Losses):** These losses are generally independent of the load on the machine.
    *   **Rotational Losses:** Friction and windage losses.
    *   **Core Losses:** Hysteresis and eddy current losses in the iron parts.
*   **Variable Losses (Load-Dependent Losses):** These losses vary with the load current.
    *   **Copper Losses ($I^2R$ losses):**
        *   Stator/Armature Copper Losses.
        *   Rotor Copper Losses (in induction motors and synchronous motor rotors).

**2.2. Efficiency ($\eta$)**

Efficiency is defined as the ratio of output power to input power.

$\eta = \frac{\text{Output Power}}{\text{Input Power}}$

This can also be expressed as:

$\eta = \frac{\text{Input Power} - \text{Total Losses}}{\text{Input Power}} = 1 - \frac{\text{Total Losses}}{\text{Input Power}}$

Or

$\eta = \frac{\text{Output Power}}{\text{Output Power} + \text{Total Losses}}$

**2.3. Efficiency Calculation for Different Machines**

**a) Synchronous Machines (Generators)**

*   **Input Power:** Mechanical Power ($P_{mech}$)
*   **Output Power:** Electrical Power ($P_{out}$)
*   **Total Losses:** $P_{loss} = P_{rotational} + P_{core} + P_{stator\_copper}$
*   $\eta = \frac{P_{out}}{P_{mech}} = \frac{P_{mech} - P_{loss}}{P_{mech}}$

**b) Synchronous Machines (Motors)**

*   **Input Power:** Electrical Power ($P_{in}$)
*   **Output Power:** Mechanical Power ($P_{mech}$)
*   **Total Losses:** $P_{loss} = P_{stator\_copper} + P_{core} + P_{rotational}$
*   $\eta = \frac{P_{mech}}{P_{in}} = \frac{P_{in} - P_{loss}}{P_{in}}$

**c) Induction Motors**

*   **Input Power:** Electrical Input Power ($P_{in}$)
*   **Output Power:** Mechanical Shaft Power ($P_{out}$)
*   **Total Losses:** $P_{loss} = P_{stator\_copper} + P_{core} + P_{rotor\_copper} + P_{rotational}$
*   $P_{rotor\_copper} = s \times P_{ag}$
*   $\eta = \frac{P_{out}}{P_{in}} = \frac{P_{in} - P_{loss}}{P_{in}}$

**d) Induction Generators**

*   **Input Power:** Mechanical Power ($P_{mech}$)
*   **Output Power:** Electrical Power ($P_{out}$)
*   **Total Losses:** $P_{loss} = P_{rotational} + P_{rotor\_copper} + P_{core} + P_{stator\_copper}$
*   $\eta = \frac{P_{out}}{P_{mech}} = \frac{P_{mech} - P_{loss}}{P_{mech}}$

**Important Point:** In induction machines, the rotor copper losses ($P_{rotor\_copper}$) are the most significant variable loss and are directly proportional to the slip ($s$).

**2.4. Maximum Efficiency**

Maximum efficiency occurs when variable losses are equal to constant losses.

*   For synchronous machines (motor/generator): $\eta_{max}$ when $P_{stator\_copper} = P_{core} + P_{rotational}$ (approximately when variable losses equal fixed losses).
*   For induction motors: $\eta_{max}$ when $P_{stator\_copper} + P_{rotor\_copper} = P_{core} + P_{rotational}$.

**Referencing Textbooks:**

*   **P.S. Bhimbra (7th ed.):** Chapters on "Equivalent Circuits and Performance of Synchronous Machines" and "Equivalent Circuits and Performance of Induction Motors" detail these power flow and loss calculations.
*   **M.G. Say (3rd ed.):** Similar sections on performance analysis will cover power flow and efficiency.
*   **Kothari & Nagrath (5th ed.):** Chapters on "Synchronous Machines" and "Induction Machines" provide detailed power flow diagrams and efficiency calculations.
*   **K. Murugesh Kumar (11th ed.):** Focuses on induction and synchronous machines, with ample coverage of losses and efficiency.
*   **J.B. Gupta (15th ed.):** Offers comprehensive treatment of performance, including detailed power flow and efficiency analysis.

---

### 3. Numerical Problems

Let's work through some example problems to solidify our understanding.

**Example 1: Synchronous Generator**

A $500 \text{ kVA}$, $3300 \text{ V}$, 3-phase synchronous generator has an armature resistance of $0.2 \Omega$ per phase. The full-load armature current is $87 \text{ A}$. The total rotational and core losses are $15 \text{ kW}$. Calculate the efficiency at full load, unity power factor, and 0.8 power factor lagging.

**Solution:**

*   **Given:**
    *   Apparent Power $S_{FL} = 500 \text{ kVA} = 500 \times 10^3 \text{ VA}$
    *   Line Voltage $V_L = 3300 \text{ V}$
    *   Armature Resistance $R_a = 0.2 \Omega/\text{phase}$
    *   Full Load Armature Current $I_a = 87 \text{ A}$
    *   Rotational & Core Losses $P_{const} = 15 \text{ kW} = 15000 \text{ W}$

*   **Calculations:**
    *   **Full Load Output Power (at unity PF):**
        $P_{out\_FL} = \sqrt{3} V_L I_a \cos \phi = \sqrt{3} \times 3300 \times 87 \times 1 = 495400 \text{ W} \approx 495.4 \text{ kW}$
        (Note: $500 \text{ kVA} \times 1.0 = 500 \text{ kW}$. The difference is due to the voltage/current values and is acceptable).
        Let's use the value derived from $\sqrt{3} V_L I_a$: $P_{out\_FL} = 495400 \text{ W}$.
    *   **Armature Copper Loss at Full Load:**
        $P_{cu\_FL} = 3 I_a^2 R_a = 3 \times (87)^2 \times 0.2 = 4539.6 \text{ W}$
    *   **Total Losses at Full Load:**
        $P_{loss\_FL} = P_{cu\_FL} + P_{const} = 4539.6 + 15000 = 19539.6 \text{ W}$
    *   **Input Power at Full Load (unity PF):**
        $P_{in\_FL} = P_{out\_FL} + P_{loss\_FL} = 495400 + 19539.6 = 514939.6 \text{ W}$
    *   **Efficiency at Full Load, Unity PF:**
        $\eta_{FL\_UPF} = \frac{P_{out\_FL}}{P_{in\_FL}} = \frac{495400}{514939.6} \times 100\% \approx 96.21\%$

*   **At 0.8 PF Lagging (Full Load):**
    *   **Output Power:**
        $P_{out\_FL\_0.8} = \sqrt{3} V_L I_a \cos \phi = \sqrt{3} \times 3300 \times 87 \times 0.8 = 396320 \text{ W}$
    *   **Armature Copper Loss:** The current is still full load $87 \text{ A}$, so copper loss remains the same:
        $P_{cu\_FL} = 4539.6 \text{ W}$
    *   **Constant Losses:** Rotational and core losses are assumed constant:
        $P_{const} = 15000 \text{ W}$
    *   **Total Losses:**
        $P_{loss\_FL\_0.8} = P_{cu\_FL} + P_{const} = 4539.6 + 15000 = 19539.6 \text{ W}$
    *   **Input Power at Full Load, 0.8 PF Lagging:**
        $P_{in\_FL\_0.8} = P_{out\_FL\_0.8} + P_{loss\_FL\_0.8} = 396320 + 19539.6 = 415859.6 \text{ W}$
    *   **Efficiency at Full Load, 0.8 PF Lagging:**
        $\eta_{FL\_0.8} = \frac{P_{out\_FL\_0.8}}{P_{in\_FL\_0.8}} = \frac{396320}{415859.6} \times 100\% \approx 95.30\%$

**Example 2: Induction Motor**

A $10 \text{ kW}$, $400 \text{ V}$, 50 Hz, 4-pole, 3-phase induction motor runs at $1450 \text{ rpm}$ at full load. The stator resistance per phase is $1.5 \Omega$. The total rotational losses are $300 \text{ W}$. At full load, the slip is $0.0333$. The total stator copper losses are $500 \text{ W}$. Calculate the full load efficiency.

**Solution:**

*   **Given:**
    *   Rated Output Power $P_{out} = 10 \text{ kW} = 10000 \text{ W}$
    *   Line Voltage $V_L = 400 \text{ V}$
    *   Frequency $f = 50 \text{ Hz}$
    *   Full Load Speed $N = 1450 \text{ rpm}$
    *   Stator Resistance $R_s = 1.5 \Omega/\text{phase}$
    *   Rotational Losses $P_{rot} = 300 \text{ W}$
    *   Full Load Slip $s = 0.0333$
    *   Stator Copper Losses $P_{s\_cu} = 500 \text{ W}$

*   **Calculations:**
    *   **Mechanical Power Developed (Gross Rotor Power, $P_{ag}$):**
        The output power is the shaft power, which is after rotor copper losses and rotational losses.
        $P_{out} = P_{ag} - P_{r\_cu} - P_{rot}$
        We also know $P_{r\_cu} = s \times P_{ag}$.
        So, $P_{out} = P_{ag} - s P_{ag} - P_{rot} = P_{ag}(1-s) - P_{rot}$
        $10000 = P_{ag}(1 - 0.0333) - 300$
        $10300 = P_{ag}(0.9667)$
        $P_{ag} = \frac{10300}{0.9667} \approx 10654.8 \text{ W}$
    *   **Rotor Copper Losses:**
        $P_{r\_cu} = s \times P_{ag} = 0.0333 \times 10654.8 \approx 354.8 \text{ W}$
    *   **Total Losses:**
        $P_{loss} = P_{s\_cu} + P_{r\_cu} + P_{rot} + P_{core}$
        The core losses are not given, so we might need to infer them or assume they are negligible or included implicitly. Let's assume for now we only consider stated losses. If core losses were given, they'd be added here. A common simplification is to group core losses with rotational losses if not specified. Let's assume $P_{core}$ is implicitly included in rotational losses for this problem, or that they are negligible if not mentioned.
        $P_{loss} = 500 \text{ W (stator cu)} + 354.8 \text{ W (rotor cu)} + 300 \text{ W (rotational)} \approx 1154.8 \text{ W}$
        *(Self-correction: The problem asks for efficiency using the given information. If core losses are not provided, we assume they are either negligible or bundled elsewhere. In many textbook problems, rotational losses are stated as "constant losses," which often includes core losses. Let's recalculate assuming rotational losses = constant losses = 300 W, and no separate core losses are mentioned)*.
        Let's re-evaluate $P_{out}$. The output power is the shaft power.
        $P_{ag} = P_{out} + P_{r\_cu} + P_{rot}$
        $P_{ag} = 10000 \text{ W} + P_{r\_cu} + 300 \text{ W}$
        $P_{ag} = 10300 \text{ W} + s \times P_{ag}$
        $P_{ag}(1-s) = 10300$
        $P_{ag}(1-0.0333) = 10300$
        $P_{ag}(0.9667) = 10300$
        $P_{ag} = \frac{10300}{0.9667} \approx 10654.8 \text{ W}$ (This seems consistent)
        $P_{r\_cu} = s P_{ag} = 0.0333 \times 10654.8 \approx 354.8 \text{ W}$
        Total losses $P_{loss} = P_{s\_cu} + P_{r\_cu} + P_{rot} = 500 + 354.8 + 300 = 1154.8 \text{ W}$.
        This implies the calculation of $P_{ag}$ should be based on output power *after* rotational losses, which is not the standard definition of air gap power. Let's reconsider the power flow diagram for induction motors.

        **Revised understanding of Induction Motor Power Flow:**
        $P_{in} \rightarrow P_{s\_cu} \rightarrow P_{core} \rightarrow P_{ag} \rightarrow P_{r\_cu} \rightarrow P_{rot} \rightarrow P_{out}$
        $P_{out} = P_{ag} - P_{r\_cu} - P_{rot}$
        $P_{ag} = P_{out} + P_{r\_cu} + P_{rot}$
        $P_{ag} = 10000 + P_{r\_cu} + 300 = 10300 + P_{r\_cu}$
        Also, $P_{r\_cu} = s P_{ag}$.
        Substitute $P_{r\_cu}$:
        $P_{ag} = 10300 + s P_{ag}$
        $P_{ag}(1-s) = 10300$
        $P_{ag}(1-0.0333) = 10300$
        $P_{ag} = \frac{10300}{0.9667} \approx 10654.8 \text{ W}$ (This calculation is correct).
        Rotor Copper Loss $P_{r\_cu} = s P_{ag} = 0.0333 \times 10654.8 \approx 354.8 \text{ W}$.

        Now, calculate Input Power:
        $P_{in} = P_{s\_cu} + P_{core} + P_{ag}$
        Assuming $P_{core}$ is negligible or bundled with rotational losses as $300 \text{ W}$, and rotational losses are applied after rotor copper losses:
        $P_{in} = P_{s\_cu} + P_{ag} + P_{r\_cu} + P_{rot}$ (This is wrong, power flows sequentially)
        $P_{in} = P_{s\_cu} + P_{core} + P_{ag}$ (Let's assume $P_{core}$ is not provided and we proceed)
        $P_{ag}$ is the power converted from electrical to mechanical form.
        $P_{in} = P_{s\_cu} + P_{core} + P_{ag}$
        We are given $P_{s\_cu} = 500 \text{ W}$ and $P_{rot} = 300 \text{ W}$.
        Total losses = $P_{s\_cu} + P_{core} + P_{r\_cu} + P_{rot}$.
        Let's use the direct definition:
        $P_{in} = P_{out} + P_{total\_losses}$
        $P_{total\_losses} = P_{s\_cu} + P_{r\_cu} + P_{rot} (+ P_{core})$
        $P_{total\_losses} = 500 + 354.8 + 300 + P_{core}$
        If we assume $P_{core}$ is zero or included in $P_{rot}$: $P_{total\_losses} = 1154.8 \text{ W}$
        $P_{in} = 10000 + 1154.8 = 11154.8 \text{ W}$
    *   **Efficiency:**
        $\eta = \frac{P_{out}}{P_{in}} = \frac{10000}{11154.8} \times 100\% \approx 89.65\%$

    **Recheck for clarity on $P_{rot}$ and $P_{core}$:**
    In many problems, "rotational losses" are given as constant losses that include friction, windage, and core losses. If core losses are not explicitly mentioned, we assume they are included in the stated rotational losses.

    Let's recalculate $P_{ag}$ from the input side:
    $P_{in} = 3 V_{phase} I_{s} \cos \phi$ (We don't have $V_{phase}$ or $I_s$ or $\cos \phi$)
    We know $P_{s\_cu} = 3 I_{s}^2 R_s$. If $R_s = 1.5 \Omega$, and $P_{s\_cu} = 500 \text{ W}$:
    $500 = 3 I_s^2 (1.5) \Rightarrow I_s^2 = \frac{500}{4.5} \Rightarrow I_s \approx 10.54 \text{ A}$
    Let's assume $V_{phase} = 400/\sqrt{3} \approx 230.94 \text{ V}$.
    We don't have $\cos \phi$. So, we must work backwards from output.

    The calculation $P_{ag} = \frac{P_{out} + P_{rot}}{1-s}$ is commonly used when rotational losses are considered constant and subtracted from the mechanical power *after* the rotor copper losses.
    $P_{ag} = \frac{10000 + 300}{1-0.0333} = \frac{10300}{0.9667} \approx 10654.8 \text{ W}$
    $P_{r\_cu} = s P_{ag} = 0.0333 \times 10654.8 \approx 354.8 \text{ W}$
    Input power calculation:
    $P_{in} = P_{s\_cu} + P_{core} + P_{ag}$
    If $P_{core}$ is not given, we often assume $P_{core}$ is part of the rotational losses. If rotational losses are given as $300 \text{ W}$, and these are the constant losses, they are subtracted from $P_{ag}$ to get output power.
    $P_{out} = P_{ag} - P_{r\_cu} - P_{rot}$
    $10000 = 10654.8 - 354.8 - 300$. This equation holds.

    Now, $P_{in}$ should be $P_{s\_cu} + P_{core} + P_{ag}$.
    If $P_{core}$ is not provided, it's usually assumed negligible or included in $P_{rot}$.
    Let's assume $P_{core} = 0$.
    $P_{in} = P_{s\_cu} + P_{ag} = 500 + 10654.8 = 11154.8 \text{ W}$
    Efficiency $\eta = \frac{P_{out}}{P_{in}} = \frac{10000}{11154.8} \times 100\% \approx 89.65\%$

    **This result is consistent.** The key is how rotational losses are treated. They are typically the last stage of losses before the shaft output.

**Example 3: Calculating Maximum Efficiency Load**

An induction motor has constant losses of $300 \text{ W}$ and stator copper loss at full load is $500 \text{ W}$. The rotor copper loss is proportional to the square of the load torque. If the full load output is $10 \text{ kW}$ at $89.65\%$ efficiency, find the load at which maximum efficiency occurs.

**Solution:**

*   **Given:**
    *   Constant Losses $P_{const} = P_{core} + P_{rot} = 300 \text{ W}$
    *   Full Load Stator Copper Loss $P_{s\_cu\_FL} = 500 \text{ W}$
    *   Full Load Output Power $P_{out\_FL} = 10 \text{ kW} = 10000 \text{ W}$
    *   Full Load Efficiency $\eta_{FL} = 89.65\%$

*   **Calculations:**
    *   **Full Load Input Power:**
        $P_{in\_FL} = \frac{P_{out\_FL}}{\eta_{FL}} = \frac{10000}{0.8965} \approx 11154.8 \text{ W}$
    *   **Full Load Total Losses:**
        $P_{loss\_FL} = P_{in\_FL} - P_{out\_FL} = 11154.8 - 10000 = 1154.8 \text{ W}$
    *   **Full Load Rotor Copper Loss:**
        $P_{r\_cu\_FL} = P_{loss\_FL} - P_{s\_cu\_FL} - P_{const} = 1154.8 - 500 - 300 = 354.8 \text{ W}$

    *   **Rotor Copper Loss as a function of load:**
        Let $P_{r\_cu} = k \times s$. We know $P_{r\_cu} = s P_{ag}$. Also $P_{ag} = P_{out} + P_{r\_cu} + P_{rot}$.
        The rotor copper loss is proportional to slip, $P_{r\_cu} \propto s$.
        It's also proportional to the square of the rotor current, $I_r^2$.
        In an induction motor, output torque $T_{out} = \frac{P_{out}}{\omega_m}$.
        Also, $P_{ag} = T_{ind} \omega_s$, where $\omega_s$ is synchronous speed.
        $P_{r\_cu} = T_{ind} \omega_s s = T_{ind} \frac{\omega_s}{\omega_r} \omega_r s = T_{ind} \frac{\omega_s}{\omega_m} \omega_m s$. No, this is not straightforward.

        Let's use the relation that rotor copper loss is proportional to slip: $P_{r\_cu} = k \cdot s$.
        We have $P_{r\_cu\_FL} = 354.8 \text{ W}$.
        We need to find the slip at full load.
        $P_{out\_FL} = P_{ag}(1-s) - P_{rot}$
        $10000 = P_{ag}(1-s) - 300 \implies P_{ag}(1-s) = 10300$.
        $P_{r\_cu} = s P_{ag} \implies P_{ag} = P_{r\_cu}/s$.
        Substitute $P_{ag}$: $(\frac{P_{r\_cu}}{s})(1-s) = 10300$
        $P_{r\_cu} (\frac{1-s}{s}) = 10300$
        $P_{r\_cu} (\frac{1}{s} - 1) = 10300$

        We know $P_{r\_cu\_FL} = 354.8 \text{ W}$. We need the full load slip, $s_{FL}$.
        From Example 2, $s_{FL} = 0.0333$.
        Let's verify if $P_{r\_cu}$ is proportional to $s$:
        $P_{r\_cu} = k \cdot s$.
        $354.8 = k \times 0.0333 \implies k = \frac{354.8}{0.0333} \approx 10654.66$
        So, $P_{r\_cu} = 10654.66 \times s$.

    *   **Condition for Maximum Efficiency:**
        Maximum efficiency occurs when variable losses equal constant losses.
        Variable losses are $P_{s\_cu} + P_{r\_cu}$.
        Constant losses are $P_{const} = P_{core} + P_{rot} = 300 \text{ W}$.
        So, $P_{s\_cu} + P_{r\_cu} = 300 \text{ W}$.

        We know that $P_{s\_cu}$ is proportional to the square of the stator current, and stator current is approximately proportional to torque. Output torque is approximately proportional to the product of stator current and rotor flux.
        A more precise relation for induction motors states that $P_{s\_cu}$ is proportional to the square of the load.
        Let $P_{s\_cu} = c \times (\text{Load})^2$.
        $P_{s\_cu\_FL} = 500 \text{ W}$.
        $P_{r\_cu} = k \times s$.
        We also know $s = \frac{N_s - N_r}{N_s}$. Output torque is proportional to $sI_r^2$, and $P_{ag}$ is proportional to $sI_r^2$.
        The output torque $T_{out}$ is proportional to $P_{ag}/\omega_s$.
        $T_{out} \propto P_{ag} \propto s I_r^2 / s = I_r^2$. (This is incorrect).
        $T_{out} \propto s I_r^2$ is generally true.
        $P_{out} = T_{out} \omega_m$.
        $P_{r\_cu} = s P_{ag} = s (P_{out} + P_{r\_cu} + P_{rot})$.
        $P_{r\_cu}(1-s) = s(P_{out}+P_{rot})$.
        $P_{r\_cu} = s \frac{P_{out}+P_{rot}}{1-s}$. This shows $P_{r\_cu}$ is not simply proportional to $s$.

        **Let's use the property that the ratio of losses:**
        Ratio of stator copper loss to rotor copper loss at a given load is approximately constant if the stator and rotor currents vary in a similar manner.
        $P_{s\_cu} / P_{r\_cu} = (3 I_s^2 R_s) / (3 I_r^2 R_r')$.
        This ratio depends on the motor design (e.g., turns ratio).
        However, a common simplification in these problems is to assume:
        $P_{s\_cu} = c_1 \times (\text{load fraction})^2$
        $P_{r\_cu} = c_2 \times (\text{load fraction})^2 \times s$ (this is not right)
        $P_{r\_cu} = c_2 \times (\text{load fraction})^2 \times s$, where $s$ is also load dependent.

        Let's use the principle that at maximum efficiency, variable losses = constant losses.
        Variable losses = $P_{s\_cu} + P_{r\_cu}$.
        Constant losses = $P_{const} = 300 \text{ W}$.
        Let $x$ be the load fraction (output power/rated output power).
        $P_{s\_cu}(x) = x^2 P_{s\_cu\_FL} = x^2 \times 500$.
        $P_{r\_cu}(x) = x^2 P_{r\_cu\_FL}$ if the slip was also proportional to load, which is not true.
        $P_{r\_cu}(x) = s_x P_{ag,x}$.
        We know $P_{r\_cu\_FL} = 354.8 \text{ W}$ at $s_{FL} = 0.0333$.
        If $x$ is the load fraction, the slip $s$ is approximately proportional to $x$ for small slips: $s_x \approx x s_{FL}$.
        $P_{r\_cu}(x) \approx x^2 P_{r\_cu\_FL}$ IS NOT TRUE. $P_{r\_cu}$ is related to $s$.

        A more accurate approach is that rotor copper loss is proportional to the slip: $P_{r\_cu} \propto s$.
        The stator copper loss is proportional to the square of stator current, and stator current is approximately proportional to the torque. The torque is proportional to $sI_r^2$.
        Let $P_{s\_cu} = A \times (\text{Load})^2$.
        Let $P_{r\_cu} = B \times (\text{Load})^2 \times s$. This is still problematic.

        **Key relationship for Maximum Efficiency:**
        Maximum efficiency occurs when $P_{s\_cu} + P_{r\_cu} = P_{constant}$.
        Let the load be $x$ times the full load.
        $P_{s\_cu}(x) = x^2 P_{s\_cu\_FL} = 500 x^2$.
        $P_{r\_cu}(x)$ is the rotor copper loss at load $x$.
        $P_{r\_cu}(x) = s_x P_{ag,x}$.
        We know $P_{ag,x} = \frac{P_{out,x} + P_{rot}}{1-s_x}$.
        $P_{out,x} = x \cdot P_{out\_FL} = 10000x$.
        $P_{r\_cu}(x) = s_x \frac{10000x + 300}{1-s_x}$.

        We need to relate $s_x$ to $x$. For small slips, $s_x \approx x s_{FL}$.
        $s_x \approx x \times 0.0333$.
        $P_{r\_cu}(x) \approx (0.0333x) \frac{10000x + 300}{1 - 0.0333x}$. This is getting complicated.

        **Simpler Approach:**
        Maximum efficiency occurs when $P_{s\_cu} = P_{r\_cu} + P_{const}$ is not correct.
        It is when variable losses = constant losses.
        Variable losses are $P_{s\_cu} + P_{r\_cu}$.
        Constant losses are $P_{const} = 300 \text{ W}$.
        So, $P_{s\_cu} + P_{r\_cu} = 300 \text{ W}$.

        Let's assume $P_{s\_cu} = c_1 (\text{Load})^2$ and $P_{r\_cu} = c_2 (\text{Load})^2 s$, where $s$ is also dependent on load.
        A more standard method: Let the load be $x$ (as a fraction of rated power).
        $P_{s\_cu}(x) = x^2 P_{s\_cu\_FL} = 500 x^2$.
        Rotor copper loss at load $x$: $P_{r\_cu}(x)$.
        The relation $P_{r\_cu} = s \times P_{ag}$ holds.
        $P_{ag} = P_{out} + P_{r\_cu} + P_{rot}$.
        $P_{ag,x} = x \times 10000 + P_{r\_cu}(x) + 300$.
        $P_{r\_cu}(x) = s_x \times P_{ag,x} = s_x \times (10000x + P_{r\_cu}(x) + 300)$.
        $P_{r\_cu}(x) (1-s_x) = s_x (10000x + 300)$.
        $P_{r\_cu}(x) = s_x \frac{10000x + 300}{1-s_x}$.

        Now, we know that at full load ($x=1$), $s_1 = 0.0333$ and $P_{r\_cu}(1) = 354.8 \text{ W}$.
        $354.8 = 0.0333 \frac{10000(1) + 300}{1 - 0.0333} = 0.0333 \frac{10300}{0.9667} \approx 354.8$. This is consistent.

        At maximum efficiency, variable losses = constant losses:
        $P_{s\_cu}(x) + P_{r\_cu}(x) = 300$.
        $500 x^2 + s_x \frac{10000x + 300}{1-s_x} = 300$.

        We need to find $s_x$ in terms of $x$.
        For induction motors, it is often assumed that the torque is proportional to the load fraction $x$.
        $T \propto x$.
        $T \propto s I_r^2$.
        $P_{r\_cu} = s P_{ag} = s \frac{P_{out}}{1-s}$.
        $P_{r\_cu}(x) = s_x \frac{10000x}{1-s_x}$. (Ignoring rotational losses in $P_{ag}$ here for simplicity in relation to torque, as $P_{rot}$ is small compared to $P_{ag}$).
        $T_{FL} \propto P_{ag,FL} = 10654.8 \text{ W}$.
        $T_x \propto s_x P_{ag,x}$.
        $P_{r\_cu}(x) = s_x \frac{P_{out,x}}{1-s_x}$.

        The rotor copper losses $P_{r\_cu}$ are approximately proportional to the square of the slip $s$ *only if the air gap power is constant*. This is not the case.
        However, the relation $P_{r\_cu} = s P_{ag}$ and $P_{ag} \approx P_{out}$ for small slips is often used.
        $P_{r\_cu} \approx s \times P_{out}$.
        $P_{r\_cu\_FL} = 354.8 \text{ W}$ at $s_{FL}=0.0333$.
        $354.8 \approx 0.0333 \times 10000 = 333 \text{ W}$ (close enough).

        Let's assume $P_{r\_cu} \approx s \times (P_{out\_FL} + P_{rot})$.
        $P_{r\_cu}(x) \approx s_x \times (x \times 10000 + 300)$.
        Using $s_x \approx x s_{FL}$:
        $P_{r\_cu}(x) \approx (x s_{FL}) \times (10000x + 300) = x \times 0.0333 \times (10000x + 300)$.

        Condition for max efficiency: $P_{s\_cu}(x) + P_{r\_cu}(x) = 300$.
        $500 x^2 + (0.0333x)(10000x + 300) = 300$.
        $500 x^2 + 333 x^2 + 9.99 x = 300$.
        $833 x^2 + 9.99 x - 300 = 0$.

        Using the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
        $x = \frac{-9.99 \pm \sqrt{(9.99)^2 - 4(833)(-300)}}{2(833)}$
        $x = \frac{-9.99 \pm \sqrt{99.8 + 999600}}{1666}$
        $x = \frac{-9.99 \pm \sqrt{999699.8}}{1666}$
        $x = \frac{-9.99 \pm 1000}{1666}$
        Since $x$ must be positive, $x = \frac{990.01}{1666} \approx 0.594$.

        **The load at which maximum efficiency occurs is approximately 0.594 times the full load rating.**
        So, the load is $0.594 \times 10 \text{ kW} = 5.94 \text{ kW}$.

        **Let's verify:**
        At $x=0.594$:
        $P_{s\_cu} = 500 \times (0.594)^2 \approx 500 \times 0.3528 = 176.4 \text{ W}$.
        $s \approx 0.594 \times 0.0333 \approx 0.01978$.
        $P_{r\_cu} \approx s \times (10000x + 300) = 0.01978 \times (10000 \times 0.594 + 300) = 0.01978 \times (5940 + 300) = 0.01978 \times 6240 \approx 123.45 \text{ W}$.
        Total variable losses = $P_{s\_cu} + P_{r\_cu} = 176.4 + 123.45 = 299.85 \text{ W}$.
        This is very close to the constant losses of $300 \text{ W}$. The approximation $s_x \approx x s_{FL}$ is key here.

**Example 4: Synchronous Motor**

A 3-phase, 400 V, 50 Hz synchronous motor takes $60 \text{ A}$ at a power factor of $0.8$ lagging. The motor has an efficiency of $90\%$. Calculate the input power, output power, and total losses.

**Solution:**

*   **Given:**
    *   Line Voltage $V_L = 400 \text{ V}$
    *   Frequency $f = 50 \text{ Hz}$
    *   Line Current $I_L = 60 \text{ A}$
    *   Power Factor $\cos \phi = 0.8$ (lagging)
    *   Efficiency $\eta = 90\% = 0.90$

*   **Calculations:**
    *   **Input Power ($P_{in}$):**
        For a 3-phase system, input power is $P_{in} = \sqrt{3} V_L I_L \cos \phi$.
        $P_{in} = \sqrt{3} \times 400 \times 60 \times 0.8 = 33255.4 \text{ W} \approx 33.26 \text{ kW}$.
    *   **Output Power ($P_{out}$):**
        Efficiency $\eta = \frac{P_{out}}{P_{in}}$.
        $P_{out} = \eta \times P_{in} = 0.90 \times 33255.4 = 29929.86 \text{ W} \approx 29.93 \text{ kW}$.
    *   **Total Losses ($P_{loss}$):**
        $P_{loss} = P_{in} - P_{out} = 33255.4 - 29929.86 = 3325.54 \text{ W} \approx 3.33 \text{ kW}$.

---

### 4. Practice Questions

1.  A $200 \text{ kVA}$, $6600 \text{ V}$, 50 Hz, 3-phase Y-connected synchronous generator has a synchronous reactance of $10 \Omega$ per phase and armature resistance of $1 \Omega$ per phase. If the friction and windage losses are $5 \text{ kW}$, and iron losses are $4 \text{ kW}$, calculate the efficiency at full load, unity power factor. (Assume armature current at FL is $17.5 \text{ A}$).
    *   **Answer:** $96.7\%$ (approx.)

2.  A $40 \text{ HP}$ (output), $480 \text{ V}$, 6-pole, $60 \text{ Hz}$, 3-phase induction motor has its performance characteristics given as follows:
    *   Stator resistance per phase: $0.3 \Omega$
    *   Rotor resistance referred to stator per phase: $0.2 \Omega$
    *   Stator leakage reactance per phase: $0.8 \Omega$
    *   Rotor leakage reactance referred to stator per phase: $0.7 \Omega$
    *   Magnetizing reactance: $30 \Omega$
    *   Rotational losses: $1.2 \text{ kW}$ (constant)
    At full load, the motor operates at $1150 \text{ rpm}$ with a power factor of $0.85$ lagging. (1 HP = 746 W)
    Calculate:
    a) Full load stator current.
    b) Full load slip.
    c) Air gap power.
    d) Rotor copper losses.
    e) Stator copper losses.
    f) Total losses.
    g) Input power.
    h) Efficiency.
    *   **Answers:**
        a) $I_s \approx 46.8 \text{ A}$
        b) $s \approx 0.0417$
        c) $P_{ag} \approx 35.9 \text{ kW}$
        d) $P_{r\_cu} \approx 1.5 \text{ kW}$
        e) $P_{s\_cu} \approx 0.65 \text{ kW}$
        f) $P_{loss} \approx 3.35 \text{ kW}$
        g) $P_{in} \approx 33.1 \text{ kW}$
        h) $\eta \approx 90.6\%$

3.  A 3-phase induction motor draws $80 \text{ A}$ at $400 \text{ V}$ and $0.8$ power factor lagging. The stator resistance is $0.2 \Omega$ per phase. The rotor resistance referred to the stator is $0.3 \Omega$ per phase. The stator and rotor copper losses are in the ratio $1:1.2$. The core losses are $1.5 \text{ kW}$, and friction and windage losses are $1 \text{ kW}$. Calculate the efficiency of the motor.
    *   **Answer:** $88.2\%$ (approx.)

4.  An induction motor is tested and found to have rotational losses of $1.5 \text{ kW}$. At full load output of $15 \text{ kW}$, the stator copper loss is $1.2 \text{ kW}$ and the rotor copper loss is $0.8 \text{ kW}$. The load is reduced such that the stator copper loss becomes $0.5 \text{ kW}$. Calculate the efficiency at this new load, assuming the rotor copper loss varies as the square of the slip and that slip is proportional to the load.
    *   **Answer:** $91.3\%$ (approx.)

---

### 5. Important Points to Remember

*   **Power Flow Diagram:** Essential for visualizing energy transfer and identifying losses.
*   **Losses:** Understand the distinction between constant (rotational, core) and variable ($I^2R$) losses.
*   **Efficiency Definition:** $\eta = \text{Output} / \text{Input}$ or $( \text{Input} - \text{Losses} ) / \text{Input}$.
*   **Induction Motor Specifics:** Air gap power ($P_{ag}$) and rotor copper loss ($P_{r\_cu} = s P_{ag}$) are crucial.
*   **Maximum Efficiency:** Occurs when variable losses equal constant losses ($P_{s\_cu} + P_{r\_cu} = P_{const}$ for induction motors; $P_{cu} = P_{core} + P_{rot}$ for synchronous machines).
*   **Approximations:** In induction motors, for small slips, rotor copper loss $P_{r\_cu} \approx s P_{out}$ and slip $s \propto x$ (load fraction) are useful approximations for calculating maximum efficiency load.
*   **Units:** Be consistent with units (Watts, Kilowatts, Volts, Amperes, Ohms).
*   **Per-Phase vs. 3-Phase:** Remember to use $3I^2R$ for copper losses and $\sqrt{3}VI \cos \phi$ for 3-phase power.

---

This module is foundational for understanding the practical performance of electrical machines. Mastering these calculations allows for efficient operation and troubleshooting.
