---
title: "Load test on DC shunt generator (CO1)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 2: Load test on DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a8"
status: "completed"
scrapedAt: "2026-05-23T16:15:09.914Z"
---
# DC Machines & Transformers Lab: Module 2 - Load Test on DC Shunt Generator (CO1)

## 1. Introduction to DC Shunt Generators

A DC shunt generator is a DC electric generator where the field winding is connected in parallel (shunt) with the armature winding and the external load.

**Key Concepts:**

*   **Armature Winding:** The winding where the electromotive force (EMF) is induced due to the rotation in the magnetic field.
*   **Field Winding:** The winding that produces the magnetic field. In a shunt generator, it's connected in parallel with the armature.
*   **Commutator and Brushes:** Convert the internally generated AC EMF into external DC EMF and collect the current.
*   **Self-Excitation:** DC shunt generators are self-exciting, meaning they can build up their own magnetic field from residual magnetism in the field poles. This is crucial for their operation.

**Princ of Operation:**
When the armature is rotated in a magnetic field, an EMF is induced. This induced EMF circulates a small current through the field winding (connected in parallel), which strengthens the magnetic field. This process continues until the EMF reaches a steady value. The generated EMF drives a current to the external load.

**Relevant Textbooks:**

*   **P.S. Bimbhra, "Electrical Machinery":** Chapters on DC Generators, particularly sections on the construction, principle, and types of DC generators. (Refer to chapters related to DC Generator working principle and excitation methods).
*   **D.P. Kothari & I.J. Nagrath, "Electric Machines":** Chapters covering DC Machines, focusing on the shunt generator characteristics and excitation. (Refer to chapters on DC Generators, especially those detailing shunt generator operation).

## 2. Learning Outcomes and Course Outcome Alignment

This lab module is designed to help you achieve **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**. Specifically, the load test on a DC shunt generator allows you to experimentally determine its performance parameters and understand how they change under varying load conditions.

**Knowledge Level K3 (Analysis):** This means you are expected to not just observe but to break down the information, identify patterns, understand cause-and-effect relationships, and draw conclusions about the generator's behavior.

## 3. The Load Test on a DC Shunt Generator

The load test is a crucial experiment to evaluate the performance of a DC shunt generator under different load conditions. It allows us to observe how parameters like terminal voltage, armature current, field current, and speed vary as the load is increased.

**Objective of the Load Test:**

*   To determine the terminal voltage characteristics (Voltage vs. Load Current).
*   To determine the efficiency of the generator at different loads.
*   To determine the regulation of the generator.
*   To observe the effect of load on speed and field current (though speed is usually kept constant by the prime mover in a controlled lab setup).

## 4. Experimental Setup

**Components Required:**

1.  **DC Shunt Generator:** The machine under test.
2.  **DC Shunt Motor (Prime Mover):** To drive the generator at a constant speed. Often, a DC compound motor is used as a prime mover, but for this specific test, the generator's performance is the focus, so maintaining its speed is key.
3.  **Variable Rheostat (for Armature Circuit):** To control the load current.
4.  **Variable Rheostat (for Field Circuit):** To adjust the field excitation and maintain rated voltage or to study the effect of field current.
5.  **Voltmeter:** To measure the terminal voltage ($V_t$).
6.  **Ammeter (for Load Current):** To measure the armature current ($I_a$) or load current ($I_L$). Typically, one ammeter in the armature circuit and another in the load circuit are used.
7.  **Ammeter (for Field Current):** To measure the field current ($I_{f}$).
8.  **Tachometer:** To measure the speed of the generator (optional, but good practice to monitor).
9.  **Load Bank:** A set of resistors or lamps to act as the variable load.

**Circuit Diagram:**

A typical circuit diagram for the load test on a DC shunt generator would include:

*   The DC shunt generator's armature, field winding, and commutator.
*   The prime mover connected to the generator shaft.
*   An ammeter in series with the armature winding to measure $I_a$.
*   A voltmeter connected across the armature terminals to measure $V_t$.
*   An ammeter in series with the field winding to measure $I_f$.
*   A variable rheostat in series with the field winding for excitation control.
*   A load bank connected to the generator terminals, with a switch to connect/disconnect the load.
*   An ammeter in the load circuit to measure $I_L$.

```
                 +-----[ Rheostat (Field) ]-----+-----[ Field Winding ]-----+
                 |                                                          |
                 |                                                          |
     +-----------+----------------------------------------------------------+----------+
     |                                                                                 |
  [Voltmeter]                                                                        [Ammeter (If)]
     |                                                                                 |
     +---------------------( Terminal Voltage V_t )------------------------------------+
     |                                                                                 |
     +-----[ Ammeter (Ia) ]-----[ Rheostat (Armature/Load Control) ]-----[ Load Bank ]----+
     |                                                                                 |
  [Generator Armature]                                                              [Ammeter (IL)]
     |                                                                                 |
     +---------------------------------------------------------------------------------+
```

**Important Note:** In a DC shunt generator, $I_a = I_L + I_f$.

## 5. Procedure for Conducting the Load Test

1.  **Initial Setup:**
    *   Ensure all connections are made correctly as per the circuit diagram.
    *   Set the field rheostat to its maximum resistance to ensure minimum field current and thus minimum generated voltage.
    *   Set the armature/load rheostat (if used for controlling load current directly) to its maximum resistance (i.e., no load initially).
    *   Ensure the generator is not connected to any external load.

2.  **Starting the Prime Mover:**
    *   Start the DC motor (prime mover) and run it at its rated speed. Allow it to stabilize.

3.  **Excitation and Voltage Build-up:**
    *   Gradually decrease the resistance of the field rheostat to increase the field current.
    *   Observe the voltmeter. The terminal voltage ($V_t$) will gradually increase from zero due to self-excitation.
    *   Adjust the field rheostat to bring the terminal voltage to its rated value (e.g., 220V or 440V) at no load.

4.  **Applying the Load:**
    *   Once the rated no-load voltage is achieved, start connecting the load gradually by increasing the load resistance (or decreasing the load resistance if using a rheostat as load).
    *   For each step of load increase:
        *   Close the switch for the next section of the load bank.
        *   Record the readings of the voltmeter ($V_t$), armature ammeter ($I_a$), field ammeter ($I_f$), and load ammeter ($I_L$).
        *   If the prime mover speed control is available and essential, adjust it to maintain the rated speed. In most lab setups, the prime mover speed is assumed to be constant.
        *   Monitor the terminal voltage. As the load increases, the terminal voltage of a shunt generator tends to decrease due to armature resistance drop and increased field resistance (if field rheostat is used to maintain voltage).

5.  **Taking Readings:**
    *   Take readings for a range of loads, starting from no load up to the rated load or slightly beyond, depending on the generator's capacity.
    *   Maintain a steady speed for all readings.

6.  **Stopping the Setup:**
    *   After taking all readings, remove the load gradually, starting from the full load.
    *   Increase the field rheostat resistance to its maximum value.
    *   Stop the prime mover.
    *   Switch off all power supplies.

## 6. Data Sheet and Calculations

**Data Sheet:**

| Sr. No. | Speed (N) (RPM) | Field Current ($I_f$) (A) | Terminal Voltage ($V_t$) (V) | Load Current ($I_L$) (A) | Armature Current ($I_a = I_L + I_f$) (A) | Output Power ($P_{out} = V_t \times I_L$) (W) |
| :------ | :-------------- | :------------------------ | :--------------------------- | :----------------------- | :------------------------------------------ | :------------------------------------------- |
| 1       |                 |                           |                              |                          |                                             |                                              |
| 2       |                 |                           |                              |                          |                                             |                                              |
| ...     |                 |                           |                              |                          |                                             |                                              |
| n       |                 |                           |                              |                          |                                             |                                              |

**Calculations:**

1.  **Armature Current ($I_a$):** For each reading, calculate $I_a = I_L + I_f$.
2.  **Output Power ($P_{out}$):** Calculate the output power for each load point: $P_{out} = V_t \times I_L$.
3.  **Losses:** To calculate efficiency, we need to estimate the losses.
    *   **Constant Losses ($P_{const}$):** These are primarily due to:
        *   **Field Copper Loss ($P_{f}$) = $I_f^2 \times R_f$**: Where $R_f$ is the shunt field winding resistance. This loss is approximately constant if the field current is maintained constant.
        *   **Armature Copper Loss ($P_{a}$) = $I_a^2 \times R_a$**: Where $R_a$ is the armature winding resistance. This loss varies with the square of the armature current.
        *   **Core Losses ($P_{core}$):** Due to hysteresis and eddy currents in the iron core. These depend on the flux density and speed.
        *   **Brush Contact Losses ($P_{brush}$):** Due to the resistance at the brush contacts.
        *   **Mechanical Losses ($P_{mech}$):** Due to friction at bearings and windage.

    *   **How to Estimate Constant Losses:**
        *   **From No-Load Test (if performed):** If a separate no-load test was conducted, the input power to the generator at no load (minus armature copper loss if any significant) is approximately equal to the sum of core, mechanical, and brush losses.
        *   **From Load Test Data (Approximation):** For a DC shunt generator, at a particular load, the input power ($P_{in}$) is $P_{out} + \text{Total Losses}$. We can approximate constant losses by extrapolating the $I_a^2 R_a$ loss curve or by considering the input power at the lowest load point. A common method is to consider the no-load input power as an approximation for constant losses if $I_a$ is small at no load.
        *   **Assuming $R_a$ and $R_f$ are known or measured separately.**
        *   **Calculating $P_{f}$ and $P_a$ for each point.**
        *   **Estimate Constant Losses ($P_{const}$)**: A common approach is to calculate $P_{f}$ and $P_a$ for each point. Then, calculate the input power as $P_{in} = V_t I_a$. Total Losses = $P_{in} - P_{out}$.
        *   **Simplified Approach:** If $R_a$ and $R_f$ are known and $R_f$ is kept constant, we can calculate $P_f = I_f^2 R_f$ and $P_a = I_a^2 R_a$. Then, $P_{in} = P_{out} + P_f + P_a + P_{const}$. The constant losses ($P_{const}$ = $P_{core} + P_{mech} + P_{brush}$) can be estimated from the no-load condition or by assuming a value. In many labs, we might assume $P_{const}$ from previous experiments or literature values for similar machines. A very common approach for efficiency calculation is to calculate $P_f = I_f^2 R_f$ and $P_a = I_a^2 R_a$. Then, $P_{in} = P_{out} + P_f + P_a + P_{const}$. If $R_a$ is not known, it can be measured using an ohmmeter.

        *   **Example of calculating $P_{const}$ from Load Test Data:**
            *   Calculate $P_f = I_f^2 R_f$ for each point.
            *   Calculate $P_a = I_a^2 R_a$ for each point.
            *   The input power to the generator is $P_{in} = V_t I_a$ (This is armature input. The actual input power is $P_{out} + \text{Total Losses}$).
            *   Let's refine: The electrical power generated is $E_g I_a$. The input power to the shaft is $P_{mech\_input} = P_{out} + \text{Total Losses}$.
            *   For efficiency calculation, we often consider the input to the generator terminals as $P_{out}$ and the losses. A simpler way to find constant losses is to assume the no-load input power to the generator shaft is mostly constant losses. If you are given $R_a$ and $R_f$:
                *   Calculate $P_f = I_f^2 R_f$ for each point.
                *   Calculate $P_a = I_a^2 R_a$ for each point.
                *   Assume constant losses $P_{const}$.
                *   Input power $P_{in} = P_{out} + P_f + P_a + P_{const}$.
                *   If $R_a$ and $R_f$ are known:
                    *   **Method 1 (Using no-load data):** If you know the input power to the prime mover at no-load, $P_{input\_NL}$. Then $P_{input\_NL} \approx P_{const} + P_{f\_NL}$ (field loss at no-load, where $V_t$ is maintained constant). This is often a good approximation for $P_{const}$.
                    *   **Method 2 (From load data):** For each load point, calculate $P_{f} = I_{f}^2 R_f$ and $P_{a} = I_{a}^2 R_a$. Then, $P_{in} = V_t I_a$ (this is the armature electrical power output). The total losses are $P_{total\_losses} = P_{in} - P_{out}$. Therefore, $P_{const} = P_{total\_losses} - P_f - P_a$. If $P_{const}$ is assumed constant, you can average it from several load points, or better, use a value obtained from a no-load test.

            *   **Let's assume $R_a$ and $R_f$ are known.**
                *   $P_f = I_f^2 R_f$
                *   $P_a = I_a^2 R_a$
                *   $P_{out} = V_t I_L$
                *   To calculate efficiency, we need the shaft input power. $P_{shaft\_in} = P_{out} + P_f + P_a + P_{core} + P_{mech} + P_{brush}$.
                *   $P_{const} = P_{core} + P_{mech} + P_{brush}$.
                *   If we assume $P_{const}$ is constant and can be determined from the no-load condition (e.g., from a separate no-load test or by assuming the input power at rated no-load voltage and speed minus field loss is $P_{const}$), we can proceed.
                *   **Common approach in labs:** Estimate $P_{const}$ from the no-load condition. At no load, $I_a \approx 0$, so $P_a \approx 0$. The input power to the shaft is the power supplied to the armature terminals from the prime mover. If you can measure this (e.g., by measuring prime mover's voltage and current), then $P_{shaft\_in\_NL} \approx V_t \times I_{a\_NL} + \text{prime mover losses}$. If this is too complex, often $P_{const}$ is assumed from the no-load readings by approximating input power. A simpler approach is to use the formula $P_{in} = P_{out} + I_f^2 R_f + I_a^2 R_a + P_{const}$. If $P_{const}$ is not provided or derivable, it's hard to calculate true efficiency.

            *   **Practical Lab Approach:**
                *   Measure $R_f$ and $R_a$ of the generator.
                *   Calculate $P_f = I_f^2 R_f$ and $P_a = I_a^2 R_a$ for each load point.
                *   The output power is $P_{out} = V_t I_L$.
                *   **For efficiency calculation, the input power is the mechanical power supplied to the generator shaft.**
                *   $P_{shaft\_in} = P_{out} + P_f + P_a + P_{const}$
                *   If no-load data is available (e.g., from a previous test): At no load, $P_{out} = 0$. The shaft input power is $P_{shaft\_in\_NL} = V_{t\_NL} I_{a\_NL} + \text{losses in prime mover}$. A simpler approximation is to consider $P_{shaft\_in\_NL} \approx P_{const} + P_{f\_NL}$.
                *   **Let's assume $P_{const}$ is known (e.g., from a no-load test or given value).**
                *   **Efficiency ($\eta$) = $\frac{P_{out}}{P_{in}}$ = $\frac{P_{out}}{P_{out} + P_f + P_a + P_{const}}$**

4.  **Terminal Voltage Regulation:**
    *   Regulation is the change in terminal voltage from no load to full load, expressed as a percentage of the rated voltage.
    *   $\text{Voltage Regulation} = \frac{V_{t(\text{no-load})} - V_{t(\text{full-load})}}{V_{t(\text{full-load})}} \times 100\%$
    *   $V_{t(\text{no-load})}$ is the terminal voltage at no load (when the generator is excited to its rated voltage).
    *   $V_{t(\text{full-load})}$ is the terminal voltage at the rated full load.

5.  **Efficiency vs. Load:**
    *   Calculate efficiency for each load point using the formula above.

## 7. Performance Characteristics (Graphs)

Plotting these graphs is essential for analyzing the performance.

1.  **Terminal Voltage ($V_t$) vs. Load Current ($I_L$):**
    *   **Expected Shape:** The terminal voltage will generally decrease as the load current increases. This is due to:
        *   **Armature Resistance Drop:** $I_a R_a$ drop increases with $I_a$.
        *   **Armature Reaction:** The magnetic field produced by the armature current distorts and weakens the main field, reducing the generated EMF ($E_g$).
        *   **Field Weakening (if field rheostat is adjusted):** If the field rheostat is not used to compensate for voltage drop, the field current might also decrease slightly due to increased $I_a$ diverting current from the field (though in a pure shunt generator, $I_f$ is primarily controlled by $R_f$).
    *   **Plot:** $V_t$ on the Y-axis, $I_L$ on the X-axis.

2.  **Output Power ($P_{out}$) vs. Load Current ($I_L$):**
    *   **Expected Shape:** This will be a roughly linear relationship ($P_{out} = V_t \times I_L$). Since $V_t$ decreases slightly, the output power will increase slightly less than linearly.
    *   **Plot:** $P_{out}$ on the Y-axis, $I_L$ on the X-axis.

3.  **Efficiency ($\eta$) vs. Load Current ($I_L$) (or Output Power):**
    *   **Expected Shape:** The efficiency will be zero at no load. It will increase with load, reach a maximum value at a certain load, and then start to decrease slightly at very heavy loads.
        *   **Reason for Increase:** At light loads, constant losses (core, mechanical) are a significant portion of the input power, making efficiency low. As load increases, variable losses ($I_a^2 R_a$, $I_f^2 R_f$) increase, but the output power increases faster.
        *   **Reason for Decrease at Heavy Loads:** At very heavy loads, the variable losses ($I_a^2 R_a$) become dominant and increase rapidly, causing the efficiency to decrease.
    *   **Plot:** $\eta$ (%) on the Y-axis, $I_L$ (A) or $P_{out}$ (kW) on the X-axis.
    *   **Maximum Efficiency:** Occurs when variable losses equal constant losses ($I_a^2 R_a + I_f^2 R_f = P_{const}$).

**Important Points to Remember about Graphs:**

*   The $V_t$ vs. $I_L$ curve is often called the **external characteristic**.
*   The $E_g$ vs. $I_a$ curve (internal characteristic) would show a more pronounced drop than the external characteristic. $E_g = V_t + I_a R_a$.
*   The $\eta$ vs. Load curve is critical for understanding the optimal operating point of the generator.

## 8. Analysis of Results and Discussion

*   **Discuss the trend of the $V_t$ vs. $I_L$ curve:** Why does the voltage drop? Relate this to armature resistance drop and armature reaction.
*   **Analyze the efficiency curve:** Where is maximum efficiency achieved? What is the load current at maximum efficiency? Relate this to the balance between constant and variable losses.
*   **Comment on the voltage regulation:** Is it good or poor? Compare it with the expected values for a DC shunt generator.
*   **Compare experimental results with theoretical expectations:** Are there any significant deviations? If so, what could be the reasons (e.g., inaccurate readings, variations in speed, internal faults, assumption errors)?
*   **Practical implications:** How do these characteristics affect the operation of a DC shunt generator in real-world applications?

## 9. Practice Questions and Answers

**Question 1:** In a DC shunt generator, if the field winding resistance ($R_f$) is increased, what will be the effect on the generated voltage at no load, assuming the prime mover speed is constant?

**Answer:** Increasing $R_f$ decreases the field current ($I_f = V_t / R_f$, assuming $V_t$ is still built up). A lower field current leads to a weaker magnetic field, resulting in a lower generated EMF ($E_g$). Therefore, the generated voltage at no load will **decrease**.

**Question 2:** What are the main reasons for the terminal voltage drop in a DC shunt generator as the load is increased?

**Answer:** The main reasons are:
1.  **Armature Resistance Drop:** As the armature current ($I_a$) increases with load, the voltage drop across the armature resistance ($I_a R_a$) increases.
2.  **Armature Reaction:** The magnetic field produced by the armature current weakens and distorts the main field flux. This reduces the generated EMF ($E_g$).

**Question 3:** At what condition is the efficiency of a DC generator maximum?

**Answer:** The efficiency of a DC generator is maximum when the **variable losses are equal to the constant losses**.
*   Variable Losses: Primarily armature copper loss ($I_a^2 R_a$) and field copper loss ($I_f^2 R_f$ - although $I_f$ is often kept constant, so this can be considered constant for a shunt generator if $R_f$ is fixed).
*   Constant Losses: Core losses (hysteresis and eddy current) and mechanical losses (friction and windage).

**Question 4:** A DC shunt generator has a rated voltage of 230V. At no load, the terminal voltage is 230V. At full load, the terminal voltage drops to 210V. Calculate the voltage regulation.

**Answer:**
*   $V_{t(\text{no-load})} = 230V$
*   $V_{t(\text{full-load})} = 210V$
*   Voltage Regulation $= \frac{V_{t(\text{no-load})} - V_{t(\text{full-load})}}{V_{t(\text{full-load})}} \times 100\%$
*   Voltage Regulation $= \frac{230V - 210V}{210V} \times 100\%$
*   Voltage Regulation $= \frac{20V}{210V} \times 100\% \approx 9.52\%$

**Question 5:** If you were to conduct this load test and the speed of the prime mover fluctuated significantly, how would it affect your results and analysis?

**Answer:** Fluctuating speed would directly affect the generated EMF ($E_g$). Since $E_g \propto N \Phi$, any change in speed ($N$) would alter $E_g$, making it difficult to establish a clear relationship between terminal voltage and load current. This would lead to:
*   Inaccurate $V_t$ vs. $I_L$ characteristics.
*   Incorrect efficiency calculations as output power would be affected.
*   Difficulty in determining the voltage regulation accurately.
*   It would be hard to analyze the effects of load alone when speed is also a variable. Maintaining a constant speed with a stable prime mover is crucial for accurate load testing.

## 10. Key Points to Remember

*   **Self-excitation:** DC shunt generators rely on residual magnetism to build up voltage.
*   **$I_a = I_L + I_f$**: This fundamental relationship must always hold.
*   **Voltage Drop:** Terminal voltage drops with increasing load due to armature resistance and armature reaction.
*   **Efficiency Curve:** Typically bell-shaped, with maximum efficiency at a load where variable losses equal constant losses.
*   **Voltage Regulation:** A measure of how well the generator maintains its voltage under changing load conditions. Lower regulation is generally better.
*   **Constant Speed:** Maintaining a constant prime mover speed is critical for accurate load testing.

This comprehensive set of notes should provide a strong foundation for understanding and conducting the load test on a DC shunt generator in your lab. Remember to refer to your textbooks for detailed theoretical background and specific machine parameters.
