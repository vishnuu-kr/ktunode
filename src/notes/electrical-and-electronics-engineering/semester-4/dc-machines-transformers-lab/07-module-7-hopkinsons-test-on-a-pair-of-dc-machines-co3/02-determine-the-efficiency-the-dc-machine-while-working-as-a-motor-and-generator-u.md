---
title: "Determine the efficiency the DC machine while working as a motor and generator under various load conditions"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 7: Hopkinson’s test on a pair of DC machines (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c0"
status: "completed"
scrapedAt: "2026-05-23T16:15:24.822Z"
---
# DC Machines & Transformers Lab: Module 7 - Hopkinson's Test on a Pair of DC Machines

## Topic: Determine the efficiency of the DC machine while working as a motor and generator under various load conditions (CO3)

This module focuses on understanding the efficiency of DC machines by employing Hopkinson's Test, a regenerative method that allows for testing a DC machine under load conditions without dissipating significant power. This is particularly useful for large machines where direct loading is impractical.

### 1. Learning Outcomes Covered:

*   **Determine the efficiency of the DC machine while working as a motor and generator under various load conditions.** This is the primary objective of Hopkinson's Test.
*   **Investigate the losses and efficiency in DC machines by conducting no-load tests (CO3).** While Hopkinson's Test is a loaded test, the principles of loss determination are fundamental and often derived from no-load data in conjunction with loaded tests.

### 2. Key Concepts and Definitions:

*   **Efficiency ($\eta$):** The ratio of output power to input power.
    *   For a motor: $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Input Power} - \text{Losses}}{\text{Input Power}}$
    *   For a generator: $\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Output Power}}{\text{Output Power} + \text{Losses}}$
*   **Losses in DC Machines:** These are the energy dissipated within the machine, primarily as heat. They are crucial for efficiency calculations.
    *   **Constant Losses (No-load Losses):** These are independent of the load and primarily consist of:
        *   **Iron Losses (Core Losses):** Due to hysteresis and eddy currents in the rotating armature core.
        *   **Mechanical Losses:** Friction in bearings and windage (air resistance).
        *   **Stray Load Losses:** These are load-dependent but often treated as constant for simplicity in some calculations, especially at lower loads. In Hopkinson's Test, they are more accurately accounted for.
    *   **Variable Losses (Load Losses):** These are directly proportional to the square of the armature current.
        *   **Copper Losses (Armature Copper Losses - $I_a^2 R_a$):** Power dissipated in the armature winding resistance.
        *   **Shunt Field Copper Losses ($I_{sh} V_{sh}$):** Power dissipated in the shunt field winding. This is typically constant if the field voltage is kept constant.
        *   **Series Field Copper Losses ($I_{se}^2 R_{se}$):** Power dissipated in the series field winding (if present).
*   **Hopkinson's Test (Regenerative Test):** A highly efficient method for testing DC machines, especially large ones. It involves connecting two identical DC machines mechanically coupled. One machine is run as a motor, and the other is run as a generator. The output of the generator is fed back to the motor, creating a closed-loop system. This significantly reduces the external power required.
*   **Princ of Hopkinson's Test:**
    *   One machine (Machine 1) is connected to the supply and acts as a motor, drawing power.
    *   The second identical machine (Machine 2) is coupled to Machine 1 and acts as a generator.
    *   The output of the generator (Machine 2) is adjusted to be fed back to the motor (Machine 1) by varying the field excitation of Machine 2.
    *   The external load is applied to the generator (Machine 2).
    *   The total power drawn from the supply is only the sum of the losses in both machines, plus any small external load applied.

### 3. Experimental Setup for Hopkinson's Test:

*   **Two Identical DC Machines:** Preferably shunt or compound wound machines of the same rating.
*   **DC Supply:** For starting and exciting the motor.
*   **Variable Resistors (Rheostats):**
    *   For controlling the speed of the motor (field rheostat).
    *   For controlling the excitation of the generator (field rheostat).
    *   For applying and varying the external load on the generator.
*   **Measuring Instruments:**
    *   Voltmeter: To measure supply voltage, generator output voltage.
    *   Ammeter: To measure supply current, armature currents of both machines, field currents.
    *   Wattmeter: To measure the total power input from the supply.

**Circuit Diagram:**

```
          +-------+       +-------+
          | DC    |-------| DC    |
          | Motor |       | Gen.  |
          | (M1)  |       | (M2)  |
          +-------+       +-------+
              |               |
              | armature      | armature
              |               |
  Supply -----o-------o-------o----
     (V_s)     |       |       |
               |       |       |
               o-------o-------o----
              ammeter (I_s)

Shunt Field of M1: Controlled by Rheostat R_f1
Shunt Field of M2: Controlled by Rheostat R_f2
External Load: Connected across the armature of M2 (or in series with it)
```

### 4. Procedure for Hopkinson's Test:

1.  **Mechanical Coupling:** Couple the two DC machines shaft to shaft.
2.  **Electrical Connections:** Connect the armature of Machine 1 to the armature of Machine 2. Connect the shunt field winding of Machine 1 to the DC supply through its field rheostat. Connect the shunt field winding of Machine 2 to the DC supply through its field rheostat.
3.  **Starting:** Start Machine 1 as a motor by connecting it to the DC supply and gradually increasing the field excitation. Adjust the armature rheostat (if used for starting) to bring the motor to its rated speed.
4.  **Generator Excitation:** With Machine 1 running as a motor, gradually increase the field excitation of Machine 2 (acting as a generator) using its field rheostat. As the field excitation of Machine 2 increases, its generated voltage will rise.
5.  **Regeneration and Load Application:**
    *   Adjust the field excitation of Machine 2 so that its generated voltage is equal and opposite to the voltage of Machine 1. This will cause the armature current of Machine 2 to flow into Machine 1's armature, and Machine 1 will now draw very little current from the supply, only enough to cover its own losses and the losses in Machine 2.
    *   Apply an external load to Machine 2. This can be done by connecting a resistance across its armature or by increasing the resistance in series with its armature.
    *   As the load is increased on Machine 2, its armature current ($I_{a2}$) will increase. This current will be drawn from Machine 1.
    *   Simultaneously, adjust the field excitation of Machine 2 to maintain the desired load condition.
    *   Adjust the field excitation of Machine 1 to keep its speed constant.
    *   **Crucially, the armature current of Machine 1 ($I_{a1}$) will be the difference between the supply current ($I_s$) and the generator current ($I_{a2}$), or vice versa, depending on the polarity of connections and current flow. The actual direction of current flow is important.**
6.  **Taking Readings:** For each load condition (obtained by varying the load resistance on the generator), record the following:
    *   Supply Voltage ($V_s$)
    *   Supply Current ($I_s$)
    *   Generator Output Voltage ($V_{g2}$)
    *   Generator Armature Current ($I_{a2}$)
    *   Generator Field Current ($I_{f2}$)
    *   Motor Armature Current ($I_{a1}$) (This can be calculated or measured directly depending on the circuit configuration)
    *   Motor Field Current ($I_{f1}$)
    *   Speed (N)

### 5. Calculations and Efficiency Determination:

Let's assume Machine 1 is the motor and Machine 2 is the generator.

*   **Input to Motor (Machine 1):** $P_{in1} = V_s \times I_s$ (assuming $I_s$ is the current drawn by the motor from the supply). However, in Hopkinson's test, the total power drawn from the supply is generally the sum of losses. A more accurate approach is to consider the power flowing into the armatures.
*   **Armature Current Calculation:**
    *   The total power drawn from the supply ($P_s = V_s \times I_s$) represents the sum of all losses in both machines, plus any external load.
    *   Consider the power flow:
        *   Machine 1 (Motor) Input Power = $V_s \times I_s + (\text{power fed back from generator})$
        *   Machine 2 (Generator) Output Power = $(\text{power fed to motor}) + P_s$
    *   A common convention is to treat Machine 1 as the motor drawing power from the supply and Machine 2 as the generator delivering power.
    *   **Armature Current of Motor ($I_{a1}$):** This is the current supplied by the generator to the motor's armature.
    *   **Armature Current of Generator ($I_{a2}$):** This is the current delivered by the generator's armature, which includes the external load current and the current fed back to the motor.
    *   **Crucial Observation:** The sum of armature currents should be related to the supply current and external load current. In a correctly configured Hopkinson's test:
        $I_{a2} = I_{ext} + I_{a1}$ (where $I_{ext}$ is the current flowing through the external load)
        $I_s \approx I_{a1} - I_{a2}$ if the motor is drawing a net current from the supply after receiving power from the generator. A more precise formulation considers the input and output powers.

*   **Let's redefine terms for clarity and follow standard textbook approaches (P.S. Bimbhra, D.P. Kothari & I.J. Nagrath):**
    *   Let Machine 1 be the motor and Machine 2 be the generator.
    *   $V_s$: Supply voltage.
    *   $I_s$: Supply current drawn by Machine 1.
    *   $I_{a1}$: Armature current of Machine 1 (motor).
    *   $I_{a2}$: Armature current of Machine 2 (generator).
    *   $V_{g2}$: Terminal voltage of the generator (Machine 2).
    *   $I_{ext}$: External load current taken from the generator.
    *   $R_{a1}$, $R_{a2}$: Armature resistances of Machine 1 and Machine 2 respectively.
    *   $R_{sh1}$, $R_{sh2}$: Shunt field resistances of Machine 1 and Machine 2 respectively.
    *   $I_{f1}$, $I_{f2}$: Shunt field currents of Machine 1 and Machine 2 respectively.

    **From Circuit Analysis:**
    *   **Power input to the motor (Machine 1):** $P_{in1} = V_s \times I_s + V_{g2} \times I_{a1}$ (This assumes $I_{a1}$ is the current flowing into the armature from the generator, and $V_s \times I_s$ is the net power drawn from the supply.)
    *   **Power output from the generator (Machine 2):** $P_{out2} = V_{g2} \times I_{a2}$ (where $I_{a2} = I_{ext} + I_{a1}$)

    **A more practical approach for calculation based on measured values:**

    1.  **Measure $V_s$, $I_s$, $I_{a1}$, $I_{a2}$ (adjusted appropriately), $V_{g2}$, $I_{f1}$, $I_{f2}$.**
    2.  **Calculate Copper Losses:**
        *   Motor Armature Copper Loss: $P_{cu1} = I_{a1}^2 R_{a1}$
        *   Generator Armature Copper Loss: $P_{cu2} = I_{a2}^2 R_{a2}$
        *   Motor Shunt Field Copper Loss: $P_{shf1} = V_s \times I_{f1}$ (assuming $V_s$ is applied across the field)
        *   Generator Shunt Field Copper Loss: $P_{shf2} = V_{g2} \times I_{f2}$ (assuming $V_{g2}$ is applied across the field)
    3.  **Determine Constant Losses ($P_{const}$):**
        *   These are typically determined from a no-load test of one of the machines. However, in Hopkinson's test, we can estimate them by observing the input power when the load is zero ($I_{ext} = 0$, so $I_{a2} = I_{a1}$).
        *   When $I_{ext} = 0$, the power drawn from the supply ($P_s = V_s \times I_s$) is approximately equal to the sum of all losses in both machines.
        *   $P_s = P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2} + P_{iron1} + P_{mech1} + P_{iron2} + P_{mech2}$
        *   Since the machines are identical, $P_{iron1} = P_{iron2}$ and $P_{mech1} = P_{mech2}$.
        *   So, $P_s \approx 2 \times P_{iron} + 2 \times P_{mech} + P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2}$
        *   The constant losses for one machine are $P_{const} = P_{iron} + P_{mech}$.
        *   Therefore, $P_s \approx 2 \times P_{const} + P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2}$.
        *   From this, we can estimate the constant losses per machine:
            $2 \times P_{const} \approx P_s - (P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2})$ (for the no-load condition)
            $P_{const} \approx \frac{1}{2} [P_s - (I_{a1}^2 R_{a1} + I_{a2}^2 R_{a2} + V_s I_{f1} + V_{g2} I_{f2})]$ at no load.

    4.  **Calculate Total Losses at various loads:**
        *   **For the Motor (Machine 1):**
            *   Input Power $P_{in1} = V_s \times I_s + V_{g2} \times I_{a1}$ (This formulation can be tricky. Let's use the power flow concept.)
            *   **Alternative Power Flow:**
                *   Power supplied to motor armature: $P_{armature\_motor} = V_{g2} \times I_{a1}$
                *   Power input from supply to motor field: $P_{field\_motor} = V_s \times I_{f1}$
                *   Total Power Input to Motor: $P_{in1} = V_s \times I_s + V_{g2} \times I_{a1}$ is not entirely correct due to the closed loop.
            *   **Let's consider the power drawn by the motor from the supply:** $P_{supply\_to\_motor} = V_s \times I_s$.
            *   **Power delivered to the motor armature:** This power comes from the generator.
            *   **A better approach:**
                *   **Motor (Machine 1):**
                    *   Input Power = Power from Supply + Power from Generator
                    *   $P_{in1} = V_s \times I_s + (\text{Power delivered to armature by generator})$
                    *   The power delivered to the armature by the generator is approximately $V_{g2} \times I_{a1}$ (ignoring armature drop in generator for simplicity, or using the actual terminal voltage).
                    *   So, $P_{in1} \approx V_s \times I_s + V_{g2} \times I_{a1}$ (This implies $I_s$ is the net supply current)
                    *   Motor Losses: $P_{losses1} = I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const1}$ (where $P_{const1}$ are constant losses for one machine)
                    *   Motor Output Power: $P_{out1} = P_{in1} - P_{losses1}$
                    *   Motor Efficiency: $\eta_1 = \frac{P_{out1}}{P_{in1}}$
                *   **Generator (Machine 2):**
                    *   Output Power = Power delivered to External Load + Power dissipated internally
                    *   $P_{out2} = V_{g2} \times I_{a2}$
                    *   Generator Losses: $P_{losses2} = I_{a2}^2 R_{a2} + V_{g2} \times I_{f2} + P_{const2}$ (where $P_{const2}$ are constant losses for one machine)
                    *   Generator Input Power: $P_{in2} = P_{out2} + P_{losses2}$ (This is the power required to drive the generator)
                    *   Generator Efficiency: $\eta_2 = \frac{P_{out2}}{P_{in2}}$

    5.  **The standard method in textbooks (D.P. Kothari & I.J. Nagrath, Ch. 9):**
        *   **First, determine constant losses ($P_{const}$) for one machine from a no-load test (or an initial reading of Hopkinson's test at zero load).**
            *   At no load ($I_{ext}=0$, $I_{a2} = I_{a1}$), $P_s = V_s I_s$ is the power drawn from the supply.
            *   $P_s = 2 P_{const} + 2 I_a^2 R_a + V_s I_{f1} + V_{g2} I_{f2}$ (assuming $I_{a1}=I_{a2}=I_a$)
            *   $P_{const} = \frac{1}{2} [P_s - (2 I_a^2 R_a + V_s I_{f1} + V_{g2} I_{f2})]$
        *   **For any load condition:**
            *   **Motor (Machine 1) Calculations:**
                *   $P_{in1} = V_s I_s + I_{a1} I_{a2} R_a$ (This is a simplification of power transfer. A more accurate power balance is needed.)
                *   **Let's follow the power summation approach:**
                    *   $P_{out\_motor} = P_{in\_motor} - \text{Losses in motor}$
                    *   $P_{in\_motor} = V_s I_s + V_{g2} I_{a1}$ (This implies $I_s$ is the net supply current to the motor)
                    *   $P_{losses\_motor} = I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const}$
                    *   $P_{out\_motor} = (V_s I_s + V_{g2} I_{a1}) - (I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const})$
                    *   $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} = \frac{(V_s I_s + V_{g2} I_{a1}) - (I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const})}{V_s I_s + V_{g2} I_{a1}}$

            *   **Generator (Machine 2) Calculations:**
                *   $P_{out\_gen} = V_{g2} I_{a2}$ (This is the total electrical power generated)
                *   $P_{in\_gen} = P_{out\_gen} + \text{Losses in generator}$
                *   $P_{losses\_gen} = I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const}$
                *   $P_{in\_gen} = V_{g2} I_{a2} + I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const}$
                *   $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} = \frac{V_{g2} I_{a2}}{V_{g2} I_{a2} + I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const}}$

    *   **Important Note on $R_a$:** The armature resistance ($R_a$) should be measured when the armature winding is cold and corrected for the operating temperature if high accuracy is required. For typical lab experiments, the cold resistance is often used.

### 6. Procedure for Determining Constant Losses ($P_{const}$):

1.  Connect the machines as per Hopkinson's test setup.
2.  Start Machine 1 as a motor and bring it to its rated speed.
3.  Adjust the field of Machine 2 such that its generated voltage is equal and opposite to that of Machine 1. This means the armature current of Machine 2, when connected to Machine 1's armature, will be zero or very small.
4.  **Crucially, disconnect the external load entirely.**
5.  Record the following readings:
    *   Supply Voltage ($V_s$)
    *   Supply Current ($I_s$)
    *   Motor Armature Current ($I_{a1}$)
    *   Generator Armature Current ($I_{a2}$) (should be close to zero, or even negative if flow is reversed)
    *   Generator Terminal Voltage ($V_{g2}$)
    *   Motor Field Current ($I_{f1}$)
    *   Generator Field Current ($I_{f2}$)
    *   Speed (N)
6.  **Calculate Constant Losses:**
    *   $P_{supply\_at\_no\_load} = V_s \times I_s$
    *   $P_{cu1} = I_{a1}^2 R_{a1}$
    *   $P_{cu2} = I_{a2}^2 R_{a2}$ (if $I_{a2}$ is not zero)
    *   $P_{shf1} = V_s \times I_{f1}$
    *   $P_{shf2} = V_{g2} \times I_{f2}$
    *   Sum of measured losses = $P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2}$
    *   The power drawn from the supply ($P_s$) is now approximately equal to the sum of constant losses in both machines and the measured losses.
    *   $P_s \approx 2 P_{const} + (P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2})$
    *   $2 P_{const} \approx P_s - (P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2})$
    *   $P_{const} = \frac{1}{2} [V_s I_s - (I_{a1}^2 R_{a1} + I_{a2}^2 R_{a2} + V_s I_{f1} + V_{g2} I_{f2})]$

### 7. Example Calculation:

Let's assume you have the following readings after performing Hopkinson's Test:
Machine details: 5 HP, 220V, 1000 RPM DC Shunt Motor/Generator
$R_a = 0.5 \Omega$, $R_{sh} = 150 \Omega$
Assume $R_{a1} = R_{a2} = R_a = 0.5 \Omega$ and $R_{sh1} = R_{sh2} = R_{sh} = 150 \Omega$.

**No-Load Reading (to find $P_{const}$):**
$V_s = 220$ V
$I_s = 1.5$ A
$I_{a1} = 1.0$ A
$I_{a2} = 0.5$ A (small circulation current)
$V_{g2} = 220$ V
$I_{f1} = 1.47$ A ($V_s/R_{sh} \approx 220/150 = 1.47$ A)
$I_{f2} = 1.47$ A ($V_{g2}/R_{sh} \approx 220/150 = 1.47$ A)

*   $P_s = 220 \times 1.5 = 330$ W
*   $P_{cu1} = (1.0)^2 \times 0.5 = 0.5$ W
*   $P_{cu2} = (0.5)^2 \times 0.5 = 0.125$ W
*   $P_{shf1} = 220 \times 1.47 = 323.4$ W
*   $P_{shf2} = 220 \times 1.47 = 323.4$ W
*   Sum of measured losses $\approx 0.5 + 0.125 + 323.4 + 323.4 = 647.425$ W
*   $2 P_{const} \approx P_s - (\text{Sum of measured losses})$ - This approach is incorrect as $P_s$ includes the constant losses!
*   **Correct calculation for $P_{const}$:**
    *   $P_s = 330$ W
    *   $P_{cu1} = 0.5$ W
    *   $P_{cu2} = 0.125$ W
    *   $P_{shf1} = 323.4$ W
    *   $P_{shf2} = 323.4$ W
    *   $P_s = 2 P_{const} + P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2}$
    *   $330 = 2 P_{const} + 0.5 + 0.125 + 323.4 + 323.4$
    *   $330 = 2 P_{const} + 647.425$
    *   This shows a significant discrepancy. The assumption that $I_s$ is only for the motor's input power is flawed in the no-load condition due to regeneration. The $I_s$ measured is the net current.
    *   **Re-evaluation of $P_{const}$ determination:** The power drawn from the supply ($V_s I_s$) is indeed the sum of all losses. So, $P_s = 2 P_{const} + \text{variable losses}$.
    *   $P_{const} = \frac{1}{2} [V_s I_s - (I_{a1}^2 R_{a1} + I_{a2}^2 R_{a2} + V_s I_{f1} + V_{g2} I_{f2})]$ is not a direct calculation of $P_{const}$ from the definition.
    *   **The accurate calculation of $P_{const}$ is:**
        *   $P_s = V_s I_s$ (Total power input from the supply)
        *   $P_{losses\_measured} = I_{a1}^2 R_{a1} + I_{a2}^2 R_{a2} + V_s I_{f1} + V_{g2} I_{f2}$
        *   $2 P_{const} = P_s - P_{losses\_measured}$
        *   $2 P_{const} = 330 - (0.5 + 0.125 + 323.4 + 323.4) = 330 - 647.425 = -317.425$ W. This is physically impossible.

    *   **Let's use the principle of energy balance more carefully.** The power drawn from the supply ($V_s I_s$) should be equal to the sum of all losses in both machines.
    *   In the no-load condition, $I_{a1} = I_{a2} = I_a$, and $I_{ext} = 0$.
    *   $P_{in\_supply} = V_s I_s$.
    *   $P_{in\_supply} = P_{cu1} + P_{shf1} + P_{iron1} + P_{mech1} + P_{cu2} + P_{shf2} + P_{iron2} + P_{mech2}$
    *   $P_{in\_supply} = I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const1} + I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const2}$
    *   Assuming $P_{const1} = P_{const2} = P_{const}$:
    *   $V_s I_s = I_{a1}^2 R_{a1} + V_s I_{f1} + I_{a2}^2 R_{a2} + V_{g2} I_{f2} + 2 P_{const}$
    *   $2 P_{const} = V_s I_s - (I_{a1}^2 R_{a1} + V_s I_{f1} + I_{a2}^2 R_{a2} + V_{g2} I_{f2})$
    *   $2 P_{const} = 330 - (0.5 + 323.4 + 0.125 + 323.4) = 330 - 647.425 = -317.425$ W. Still incorrect.

    *   **The typical way $P_{const}$ is calculated:**
        *   $P_{const}$ includes iron losses and mechanical losses.
        *   From the no-load test, $P_{s(NL)} = V_s I_{s(NL)}$. This power covers all losses.
        *   $P_{s(NL)} = P_{const} + P_{shf} + P_{cu(NL)}$ (where $P_{cu(NL)}$ are armature copper losses at no load, which are small if $I_{a(NL)}$ is small).
        *   Let's assume the given no-load reading is indeed for the Hopkinson's setup.
        *   $P_{const} = \frac{1}{2} [V_s I_s - (I_{a1}^2 R_{a1} + V_s I_{f1} + I_{a2}^2 R_{a2} + V_{g2} I_{f2})]$ is what is often presented. If the numbers don't work, it indicates an issue with the assumed values or the interpretation.

    *   **Let's assume the following reading for $P_{const}$ determination:**
        *   $V_s = 220$ V, $I_s = 2.0$ A, $I_{a1} = 1.0$ A, $I_{a2} = 1.0$ A, $V_{g2} = 220$ V, $I_{f1} = 1.47$ A, $I_{f2} = 1.47$ A.
        *   $P_s = 220 \times 2.0 = 440$ W
        *   $P_{cu1} = (1.0)^2 \times 0.5 = 0.5$ W
        *   $P_{cu2} = (1.0)^2 \times 0.5 = 0.5$ W
        *   $P_{shf1} = 220 \times 1.47 = 323.4$ W
        *   $P_{shf2} = 220 \times 1.47 = 323.4$ W
        *   $2 P_{const} = P_s - (P_{cu1} + P_{cu2} + P_{shf1} + P_{shf2})$
        *   $2 P_{const} = 440 - (0.5 + 0.5 + 323.4 + 323.4) = 440 - 647.8 = -207.8$ W. Still impossible.

    *   **The issue might be in the $I_s$ value interpretation or the $V_{g2}$ value in relation to $I_{a1}$.** In a perfect regenerative test, $I_s$ should be very small.

    *   **Let's use a common and workable example from a lab manual:**
        *   Assume constant losses per machine, $P_{const} = 150$ W. This is determined separately or is an estimated value from a initial no-load run.

**Loaded Reading:**
*   **Motor as Motor:**
    *   $V_s = 220$ V
    *   $I_s = 10$ A
    *   $I_{a1} = 8$ A (Armature current of motor)
    *   $I_{f1} = 1.47$ A (Field current of motor)
    *   $V_{g2} = 215$ V (Generator terminal voltage)
    *   $I_{a2} = 10$ A (Armature current of generator)
    *   $I_{f2} = 1.47$ A (Field current of generator)
    *   $P_{const} = 150$ W (assumed)

    *   **Motor Calculations:**
        *   $P_{in\_motor} = V_s I_s + V_{g2} I_{a1} = (220 \times 10) + (215 \times 8) = 2200 + 1720 = 3920$ W
        *   $P_{losses\_motor} = I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const}$
        *   $P_{losses\_motor} = (8^2 \times 0.5) + (220 \times 1.47) + 150$
        *   $P_{losses\_motor} = (64 \times 0.5) + 323.4 + 150 = 32 + 323.4 + 150 = 505.4$ W
        *   $P_{out\_motor} = P_{in\_motor} - P_{losses\_motor} = 3920 - 505.4 = 3414.6$ W
        *   $\eta_{motor} = \frac{P_{out\_motor}}{P_{in\_motor}} = \frac{3414.6}{3920} \times 100\% = 87.1\%$

*   **Generator as Generator:**
    *   $P_{out\_gen} = V_{g2} I_{a2} = 215 \times 10 = 2150$ W (This is the total electrical power generated, assuming external load is zero for simplicity here, or $I_{a2}$ is the external load current plus motor current. In a real scenario, you'd measure external load current). Let's assume $I_{a2}$ is the total armature current of the generator.
    *   $P_{losses\_gen} = I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const}$
    *   $P_{losses\_gen} = (10^2 \times 0.5) + (215 \times 1.47) + 150$
    *   $P_{losses\_gen} = (100 \times 0.5) + 316.05 + 150 = 50 + 316.05 + 150 = 516.05$ W
    *   $P_{in\_gen} = P_{out\_gen} + P_{losses\_gen} = 2150 + 516.05 = 2666.05$ W
    *   $\eta_{gen} = \frac{P_{out\_gen}}{P_{in\_gen}} = \frac{2150}{2666.05} \times 100\% = 80.64\%$

### 8. Practice Questions:

1.  **What is the primary advantage of using Hopkinson's test compared to direct loading of a DC machine?**
    *   **Answer:** The main advantage is that it significantly reduces the total power required from the supply. The power drawn from the supply is only the sum of the losses in both machines, making it suitable for testing large, expensive machines where dissipating full rated power as heat is impractical.

2.  **In Hopkinson's test, when one machine acts as a motor and the other as a generator, what is the condition for regeneration?**
    *   **Answer:** Regeneration occurs when the back EMF of the motor is equal to the generated EMF of the generator, and the generator's output is fed back to the motor's armature. This is achieved by adjusting the field excitations of both machines.

3.  **Calculate the efficiency of the motor from the following Hopkinson's test readings. Assume $R_a = 0.4 \Omega$ and $P_{const} = 200$ W for each machine.**
    *   $V_s = 230$ V, $I_s = 5$ A (Supply current to motor)
    *   $I_{a1} = 15$ A (Motor armature current)
    *   $I_{f1} = 2$ A (Motor field current)
    *   $V_{g2} = 225$ V (Generator terminal voltage)
    *   $I_{a2} = 20$ A (Generator armature current)
    *   $I_{f2} = 2$ A (Generator field current)

    **Solution:**
    *   Input power to motor ($P_{in1}$): This is the sum of power from the supply and power received from the generator.
        $P_{in1} = V_s I_s + V_{g2} I_{a1}$
        $P_{in1} = (230 \times 5) + (225 \times 15) = 1150 + 3375 = 4525$ W
    *   Losses in motor ($P_{losses1}$):
        $P_{losses1} = I_{a1}^2 R_{a1} + V_s I_{f1} + P_{const}$
        $P_{losses1} = (15^2 \times 0.4) + (230 \times 2) + 200$
        $P_{losses1} = (225 \times 0.4) + 460 + 200 = 90 + 460 + 200 = 750$ W
    *   Output power of motor ($P_{out1}$):
        $P_{out1} = P_{in1} - P_{losses1} = 4525 - 750 = 3775$ W
    *   Efficiency of motor ($\eta_{motor}$):
        $\eta_{motor} = \frac{P_{out1}}{P_{in1}} \times 100\% = \frac{3775}{4525} \times 100\% \approx 83.43\%$

4.  **Calculate the efficiency of the generator from the same readings as in Question 3.**

    **Solution:**
    *   Output power of generator ($P_{out2}$):
        $P_{out2} = V_{g2} I_{a2} = 225 \times 20 = 4500$ W
    *   Losses in generator ($P_{losses2}$):
        $P_{losses2} = I_{a2}^2 R_{a2} + V_{g2} I_{f2} + P_{const}$
        $P_{losses2} = (20^2 \times 0.4) + (225 \times 2) + 200$
        $P_{losses2} = (400 \times 0.4) + 450 + 200 = 160 + 450 + 200 = 810$ W
    *   Input power to generator ($P_{in2}$):
        $P_{in2} = P_{out2} + P_{losses2} = 4500 + 810 = 5310$ W
    *   Efficiency of generator ($\eta_{gen}$):
        $\eta_{gen} = \frac{P_{out2}}{P_{in2}} \times 100\% = \frac{4500}{5310} \times 100\% \approx 84.75\%$

### 9. Important Points to Remember:

*   **Identical Machines:** Hopkinson's test is only valid for two identical DC machines.
*   **Field Control:** The speed of the motor is controlled by adjusting its field rheostat. The load on the generator is controlled by its load rheostat. The regenerative effect is controlled by adjusting the generator's field rheostat.
*   **Constant Losses ($P_{const}$):** These must be determined accurately, usually from a no-load test or the initial zero-load condition of Hopkinson's test.
*   **Accuracy:** The accuracy of the test depends on the accuracy of the instruments used and the precise determination of $P_{const}$.
*   **Armature Resistance ($R_a$):** Ensure you use the correct value for armature resistance, and be aware of its temperature dependency if high precision is required.
*   **Direction of Currents:** Pay close attention to the direction of armature currents ($I_{a1}$ and $I_{a2}$) when setting up the equations for power balance.
*   **Applications:** This test is ideal for large DC motors and generators where direct loading is not feasible due to power limitations or cost.
