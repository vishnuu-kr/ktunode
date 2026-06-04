---
title: "Aim: To implement Automatic Generation Control in MATLAB Simulink."
subject: "POWER SYSTEM LAB"
module: "Module 7: Automatic Generation Control –  Single Area, Two Area"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367f0"
status: "completed"
scrapedAt: "2026-05-23T16:31:02.210Z"
---
# Power System Lab: Module 7 - Automatic Generation Control (AGC)

## Aim: To implement Automatic Generation Control in MATLAB Simulink.

---

### 1. Introduction to Automatic Generation Control (AGC)

Automatic Generation Control (AGC), also known as Economic Dispatch Control (EDC) in some contexts, is a crucial function in modern power systems. Its primary goal is to maintain the system frequency and tie-line power flows at their scheduled values, despite sudden load disturbances or changes in generation.

**Key Concepts:**

*   **System Frequency:** The frequency of the AC power system is a direct indicator of the balance between total generation and total load. Any imbalance causes the frequency to deviate.
*   **Tie-line Power Flows:** These are the power flows between interconnected power systems or areas. Maintaining scheduled tie-line flows is essential for economic operation and contractual obligations.
*   **Load Disturbance:** An unexpected increase or decrease in the power demand within the system.
*   **Generator Response:** The ability of generators to increase or decrease their power output in response to changes in frequency or control signals.

**Why is AGC necessary?**

*   **Maintain Frequency Stability:** Deviations in frequency can lead to equipment damage, instability, and loss of synchronism.
*   **Ensure Reliable Power Supply:** AGC helps to meet the fluctuating power demand accurately.
*   **Economic Dispatch:** While primarily focused on frequency and tie-line control, AGC also plays a role in dispatching generation economically.
*   **Interchange Power Management:** For interconnected systems, AGC ensures that the agreed-upon power exchanges between areas are maintained.

---

### 2. AGC - Single Area System

#### 2.1 Components of a Single Area AGC System

A single area AGC system typically consists of the following components:

*   **Turbine/Governor (T/G):** This is the primary regulator of generator speed (and hence frequency). The governor senses frequency deviations and adjusts the steam or hydraulic input to the turbine, thereby controlling the generator's power output.
    *   **Speed Governor:** A device that senses rotor speed and adjusts the prime mover input.
    *   **Governor Droop Characteristic:** A feedback mechanism where the generator's power output is proportional to the frequency deviation. This is crucial for steady-state stability and automatic load sharing among generators.
        *   **Droop (R):** Defined as the change in frequency for a 100% change in generator output. A typical droop is 4-5%.
        *   **Equation for Governor:** $\Delta P_g = -\frac{1}{R} \Delta f$
*   **Load Frequency Control (LFC) Controller:** This is the secondary speed controller that aims to restore the system frequency to its nominal value and eliminate steady-state errors caused by the governor droop. It receives a bias signal from the system's frequency deviation and an integral of the area control error (ACE).
    *   **Area Control Error (ACE):** This is the primary signal used by the LFC controller. For a single area, ACE is typically defined as:
        $ACE = \Delta P_{tie} + B \Delta f$
        where:
        *   $\Delta P_{tie}$ is the change in net tie-line power flow.
        *   $B$ is the frequency bias factor, which accounts for the inadvertent power flow due to frequency changes.
    *   **LFC Controller Action:** The LFC controller, usually a PID controller, adjusts the reference setpoint of the governor to counteract the ACE.
        *   **Proportional (P) control:** Provides a response proportional to the current ACE.
        *   **Integral (I) control:** Eliminates steady-state errors by integrating the ACE over time.
        *   **Derivative (D) control:** Predicts future ACE based on the rate of change, improving transient response.
*   **Load Model:** Represents the change in power demand with respect to frequency.
    *   **Frequency Sensitivity of Load:** Loads generally decrease with decreasing frequency. This characteristic provides a natural damping effect on frequency deviations.
    *   **Load Model Equation:** $\Delta P_L = D \Delta f$
        where $D$ is the load frequency sensitivity coefficient.

**Block Diagram of a Single Area AGC System:**

```
      +-------------------+     +-------------------+     +-------------------+
  --> |  Load Disturbance | --> |     Load Model    | --> | Net Load Change   |
      +-------------------+     +-------------------+     +-------------------+
               |                                                    |
               |                                                    V
      +-------------------+     +-------------------+     +-------------------+
  --> |  Reference Power  | --> | Governor/Turbine  | --> | Generator Output  |
      |      Set Point    |     |       (T/G)       |     |      (Pg)         |
      +-------------------+     +-------------------+     +-------------------+
               ^                                                    |
               |                                                    |
      +-------------------+     +-------------------+     +-------------------+
  --> |     LFC Controller| <-- |   ACE Signal      | <-- | System Frequency  |
      | (PID)             |     | (Delta P_tie + B*Delta f)| --> |      (f)          |
      +-------------------+     +-------------------+     +-------------------+
               ^                                                    |
               |                                                    |
      +-------------------+                                 +-------------------+
  --> |  Tie-line Flow    | -------------------------------> |  Net Tie-line Flow|
      |   Measurement     |                                 |      (P_tie)      |
      +-------------------+                                 +-------------------+
```

**How it Works (Single Area):**

1.  **Load Disturbance:** A sudden increase in load occurs.
2.  **Frequency Drop:** The generator's output is initially insufficient to meet the increased demand, causing the system frequency to drop.
3.  **Governor Action:** The governor senses the frequency drop and increases the turbine power output to partially compensate for the load change. However, due to droop, the frequency will settle at a new, lower steady-state value.
4.  **ACE Calculation:** The ACE signal is calculated based on the tie-line power deviation (which is zero in a single, isolated area) and the frequency deviation.
5.  **LFC Controller Action:** The LFC controller, acting on the ACE signal, generates a control signal to adjust the governor's setpoint. The integral action of the LFC controller will continue to adjust the governor setpoint until the frequency returns to its nominal value and the ACE becomes zero.

#### 2.2 Mathematical Modeling for Single Area

*   **Turbine-Governor Dynamics:**
    $\Delta P_g(s) = \frac{1}{1+sT_{tg}} \left( \Delta P_{ref}(s) - \frac{1}{R} \Delta f(s) \right)$
    where:
    *   $T_{tg}$ is the turbine-governor time constant.
    *   $\Delta P_{ref}$ is the change in the governor's power reference setpoint.
*   **Generator Dynamics:**
    $2H \frac{d(\Delta f)}{dt} = \Delta P_m - \Delta P_d - D \Delta f$
    where:
    *   $H$ is the inertia constant of the generator.
    *   $\Delta P_m$ is the change in mechanical power input from the turbine.
    *   $\Delta P_d$ is the change in mechanical power demand (load disturbance).
    *   In the Laplace domain: $2H s \Delta f(s) = \Delta P_m(s) - \Delta P_d(s) - D \Delta f(s)$
    *   $\Delta P_m(s) = \Delta P_g(s)$ (assuming perfect mechanical coupling)
    *   Therefore: $(2Hs + D) \Delta f(s) = \Delta P_g(s) - \Delta P_d(s)$
*   **LFC Controller Dynamics:**
    $\Delta P_{ref}(s) = K_P \cdot ACE(s) + \frac{K_I}{s} \cdot ACE(s) + K_D s \cdot ACE(s)$
    where $ACE(s) = \Delta P_{tie}(s) + B \Delta f(s)$. In a single area, $\Delta P_{tie} = 0$.
    $ACE(s) = B \Delta f(s)$
    $\Delta P_{ref}(s) = \left( K_P + \frac{K_I}{s} + K_D s \right) B \Delta f(s)$

**Transfer Function of Single Area AGC System:**

Combining these equations, we can derive the open-loop transfer function from load disturbance ($\Delta P_d$) to frequency deviation ($\Delta f$).

The AGC control loop adjusts $\Delta P_g$ to counteract $\Delta P_d$. The LFC controller manipulates $\Delta P_{ref}$, which in turn affects $\Delta P_g$.

The core closed-loop system without AGC (only governor action) has a transfer function from $\Delta P_d$ to $\Delta f$:
$\frac{\Delta f(s)}{\Delta P_d(s)} = \frac{-1}{(2Hs + D) + \frac{1}{1+sT_{tg}} \frac{1}{R}}$

With AGC, the $\Delta P_{ref}$ signal, which is dependent on $\Delta f$, acts to modify the governor output.

A common simplified model for the AGC loop can be represented by the transfer function of the LFC controller and its impact on the system.

**Simplified Single Area Block Diagram (Focus on Control Loop):**

```
      +-----------------+      +---------------+      +--------------+
-->   | Load Disturbance| -->  |   System      | -->  | Frequency    |
      |     (dP_d)      |      |   Dynamics    |      | Deviation (df)|
      +-----------------+      | (2Hs+D)       |      +--------------+
                               +---------------+               |
                                       ^                       |
                                       |                       |  (1/R)
                               +---------------+      +--------------+
                               | Governor/T/G  | <----| Delta f signal|
                               | (1/(1+sT_tg)) |      +--------------+
                               +---------------+
                                       ^
                                       |
                               +---------------+
                               | Delta P_ref   |
                               +---------------+
                                       ^
                                       |
                               +---------------+
                               | LFC Controller|
                               | (Kp + Ki/s + Kd*s)|
                               +---------------+
                                       ^
                                       | ACE = B * df
```

For simulation purposes in MATLAB Simulink, you would build this block diagram.

#### 2.3 Implementation in MATLAB Simulink (Single Area)

**Steps:**

1.  **Open MATLAB:** Launch MATLAB.
2.  **Open Simulink:** Type `simulink` in the command window or click the Simulink icon.
3.  **Create a New Model:** File -> New -> Model.
4.  **Add Blocks:**
    *   **Sources:**
        *   `Step` block for load disturbance (`dP_d`).
        *   `Constant` block for nominal frequency.
    *   **Math Operations:**
        *   `Sum` blocks for adding/subtracting signals.
        *   `Gain` blocks for coefficients ($R$, $B$, $D$, $K_P$, $K_I$, $K_D$, $1/T_{tg}$, $1/(2H)$).
        *   `Integrator` block for integrating ACE.
        *   `Derivative` block for derivative of ACE.
    *   **Continuous:**
        *   `Transfer Fcn` blocks for turbine-governor and system dynamics.
        *   `PID Controller` block (can be used for LFC, or build with P, I, D components).
    *   **Sinks:**
        *   `Scope` blocks to visualize frequency deviation, generator output, etc.
    *   **Model Configuration:**
        *   Solver: Variable-step solver (e.g., `ode45`) is generally preferred for transient simulations.
5.  **Assemble the Model:** Connect the blocks according to the block diagram described in Section 2.1 or 2.2.
6.  **Parameterize Blocks:** Enter the values for time constants, gains, inertia, droop, etc., based on typical power system values or specific problem statements.
    *   **Example Parameters:**
        *   $R = 0.05$ pu/MW
        *   $B = 0.42$ pu MW/Hz
        *   $D = 1.0$ pu MW/Hz
        *   $2H = 5$ seconds
        *   $T_{tg} = 0.1$ seconds
        *   $K_P = 0.5$
        *   $K_I = 2.0$
        *   $K_D = 0.1$
7.  **Run Simulation:** Click the "Run" button.
8.  **Analyze Results:** Observe the waveforms in the Scope blocks to evaluate the system's response to the load disturbance with and without AGC.

**To observe the effect of AGC:**

*   Run the simulation first with the LFC controller outputs (to the governor setpoint) disconnected or set to zero (representing no AGC).
*   Then, connect the LFC controller and run again to see the improvement in frequency response.

---

### 3. AGC - Two Area System

#### 3.1 Introduction to Two Area Systems

Most real-world power systems are interconnected, forming complex networks. In a multi-area system, AGC is implemented to coordinate the control actions of individual areas to maintain frequency and tie-line power flow between them at scheduled values.

**Key Considerations in Two Area Systems:**

*   **Tie-line Power Flow:** The power flow between the two areas. Changes in load or generation in one area affect the tie-line flow, which must be controlled.
*   **Inter-area Oscillation:** Uncontrolled tie-line power flows can lead to oscillations between areas.
*   **Coordinated Control:** AGC in a multi-area system requires coordination between the control centers of each area.
*   **Area Control Error (ACE) for Multi-Area:** The ACE calculation is extended to include the deviation in tie-line power flow.

#### 3.2 Components of a Two Area AGC System

Each area in a two-area system will have its own set of AGC components (governor, load model, LFC controller) similar to the single-area case. The key difference is the introduction of tie-lines and their control.

*   **Tie-line Dynamics:** The power flow on a tie-line between two areas is influenced by the frequency difference between the areas and the synchronizing impedance.
    *   **Equation:** $\Delta P_{tie} = \frac{1}{R_{tie}} \int (\Delta f_1 - \Delta f_2) dt$ or $\Delta P_{tie} = \frac{1}{R_{tie}} (\Delta f_1 - \Delta f_2)$ in some simplified models where $R_{tie}$ is the synchronizing impedance. More accurately, it's a transfer function.
*   **ACE Calculation in Two Areas:**
    *   **Area 1:** $ACE_1 = \Delta P_{tie_{12}} + B_1 \Delta f_1$
    *   **Area 2:** $ACE_2 = \Delta P_{tie_{21}} + B_2 \Delta f_2$
    where:
    *   $\Delta P_{tie_{12}}$ is the change in power flow from Area 1 to Area 2.
    *   $\Delta P_{tie_{21}}$ is the change in power flow from Area 2 to Area 1. Note that $\Delta P_{tie_{21}} = -\Delta P_{tie_{12}}$.
    *   $B_1$ and $B_2$ are the frequency bias factors for Area 1 and Area 2, respectively.
*   **LFC Controller Action:** Each area's LFC controller uses its respective ACE to adjust the generator setpoints in that area. The goal is to drive both $\Delta f_1$ and $\Delta f_2$ to zero, and also to maintain $\Delta P_{tie_{12}}$ at its scheduled value (usually zero for control purposes).

#### 3.3 Mathematical Modeling for Two Area System

Consider two interconnected areas with the following dynamics:

*   **Area 1:**
    *   Load Disturbance: $\Delta P_{d1}$
    *   Generator Output: $\Delta P_{g1}$
    *   Frequency: $\Delta f_1$
    *   Governor Dynamics: $\Delta P_{g1}(s) = \frac{1}{1+sT_{tg1}} (\Delta P_{ref1}(s) - \frac{1}{R_1} \Delta f_1(s))$
    *   System Dynamics: $(2H_1 s + D_1) \Delta f_1(s) = \Delta P_{g1}(s) - \Delta P_{d1}(s) - \Delta P_{tie_{12}}(s)$
    *   ACE: $ACE_1(s) = \Delta P_{tie_{12}}(s) + B_1 \Delta f_1(s)$
    *   LFC Controller: $\Delta P_{ref1}(s) = (K_{P1} + \frac{K_{I1}}{s} + K_{D1} s) ACE_1(s)$
*   **Area 2:**
    *   Load Disturbance: $\Delta P_{d2}$
    *   Generator Output: $\Delta P_{g2}$
    *   Frequency: $\Delta f_2$
    *   Governor Dynamics: $\Delta P_{g2}(s) = \frac{1}{1+sT_{tg2}} (\Delta P_{ref2}(s) - \frac{1}{R_2} \Delta f_2(s))$
    *   System Dynamics: $(2H_2 s + D_2) \Delta f_2(s) = \Delta P_{g2}(s) - \Delta P_{d2}(s) + \Delta P_{tie_{21}}(s)$
    *   ACE: $ACE_2(s) = \Delta P_{tie_{21}}(s) + B_2 \Delta f_2(s)$
    *   LFC Controller: $\Delta P_{ref2}(s) = (K_{P2} + \frac{K_{I2}}{s} + K_{D2} s) ACE_2(s)$

*   **Tie-line Power Flow Dynamics:**
    $\Delta P_{tie_{12}}(s) = \frac{K_{tie}}{1+sT_{tie}}(\Delta f_1(s) - \Delta f_2(s))$
    where:
    *   $K_{tie}$ is related to the synchronizing coefficient.
    *   $T_{tie}$ is the tie-line time constant.

**Block Diagram of a Two Area AGC System:**

This is a more complex diagram. Each area is a single-area system as described earlier. The crucial addition is the block representing the tie-line power flow, which links the two areas' frequency dynamics.

```
      +---------------------+      +--------------------+
  --> | Area 1 Load Dist.   | ---> | Area 1 System      | --->
      |       (dP_d1)       |      | Dynamics (2H1s+D1)|
      +---------------------+      +--------------------+
                ^                                |
                |                                |
      +---------------------+      +--------------------+
  --> | Area 1 LFC Output   | ---> | Area 1 Governor/T/G| --> Delta P_g1
      |     (dP_ref1)       |      |   (1/(1+sT_tg1))   |
      +---------------------+      +--------------------+
                                             ^
                                             |
      +---------------------+      +--------------------+
  --> | Area 1 ACE Signal   | <--- | Area 1 Frequency   |
      |    (ACE1)           |      |      (df1)         |
      +---------------------+      +--------------------+
                ^                                |
                | (B1 * df1)                     |
      +---------------------+      +--------------------+
  --> | Tie-line Flow (1->2)| ---> | Tie-line Dynamics  | ---> Delta P_tie12
      |     (dP_tie12)      |      |   (K_tie/(1+sT_tie))|
      +---------------------+      +--------------------+
                                             ^
                                             |
                                     +-------------------+
                                     | Area 2 Frequency  |
                                     |      (df2)        |
                                     +-------------------+
                                             ^
                                             |
      +---------------------+      +--------------------+
  --> | Area 2 LFC Output   | ---> | Area 2 Governor/T/G| --> Delta P_g2
      |     (dP_ref2)       |      |   (1/(1+sT_tg2))   |
      +---------------------+      +--------------------+
                ^                                |
                |                                |
      +---------------------+      +--------------------+
  --> | Area 2 ACE Signal   | <--- | Area 2 System      | --->
      |    (ACE2)           |      | Dynamics (2H2s+D2)|
      +---------------------+      +--------------------+
                ^                                |
                | (B2 * df2)                     |
      +---------------------+      +--------------------+
  --> | Area 2 Load Dist.   | ---> | Area 2 Tie-line    | --->
      |       (dP_d2)       |      | Flow (21)          |
      +---------------------+      +--------------------+

```

**Note:** The diagram above is conceptual. In Simulink, you would replicate the blocks for each area and connect them appropriately. The tie-line dynamics block would take inputs from both $\Delta f_1$ and $\Delta f_2$ and provide $\Delta P_{tie_{12}}$ as output.

#### 3.4 Implementation in MATLAB Simulink (Two Area)

**Steps:**

1.  **Replicate Single Area Setup:** Create two identical copies of the single-area AGC model. Label them clearly as "Area 1" and "Area 2".
2.  **Introduce Tie-line Link:**
    *   **Measure Frequencies:** Add `Scope` blocks or `Sum` blocks to extract $\Delta f_1$ from Area 1 and $\Delta f_2$ from Area 2.
    *   **Tie-line Dynamics Block:** Create a new block or use existing ones to implement the tie-line dynamics:
        *   Use a `Sum` block to calculate $(\Delta f_1 - \Delta f_2)$.
        *   Use a `Gain` block for $K_{tie}$.
        *   Use an `Integrator` block for the integration (or a `Transfer Fcn` block representing $\frac{K_{tie}}{1+sT_{tie}}$).
        *   This block will output $\Delta P_{tie_{12}}$.
    *   **Connect Tie-line:**
        *   The output $\Delta P_{tie_{12}}$ from the tie-line dynamics block will be:
            *   Added to the input of Area 2's system dynamics (since $\Delta P_{tie_{21}} = -\Delta P_{tie_{12}}$).
            *   Used in the ACE calculation for both Area 1 and Area 2.
3.  **Modify ACE Calculation:**
    *   In Area 1's ACE calculation, replace the term $\Delta P_{tie}$ with $\Delta P_{tie_{12}}$.
    *   In Area 2's ACE calculation, replace the term $\Delta P_{tie}$ with $-\Delta P_{tie_{12}}$.
4.  **Parameterize:** Assign appropriate parameters for each area (which can be identical or different depending on the problem). Ensure the tie-line parameters ($K_{tie}$, $T_{tie}$) are set.
5.  **Load Disturbances:** Apply load disturbances to one or both areas simultaneously or sequentially to observe the coordinated response.
6.  **Run and Analyze:** Run the simulation and observe the frequency responses ($\Delta f_1$, $\Delta f_2$) and tie-line power flow ($\Delta P_{tie_{12}}$).

**Example Scenario for Two Area Simulation:**

*   **System:** Two identical areas.
*   **Load Disturbance:** A step increase in load ($\Delta P_{d1} = 0.1$ pu MW) in Area 1.
*   **Objective:** Observe how AGC in both areas works to restore frequency and control tie-line power.

**Expected Observations:**

*   **Without AGC:** A load disturbance in Area 1 will cause $\Delta f_1$ to decrease, and this frequency deviation will cause a tie-line power flow from Area 2 to Area 1 ($\Delta P_{tie_{12}} > 0$). $\Delta f_2$ might also deviate slightly due to the tie-line interaction.
*   **With AGC:**
    *   The governor in Area 1 will provide initial primary response.
    *   The LFC in Area 1 will detect the ACE (primarily due to $\Delta f_1$) and increase $\Delta P_{g1}$ to return $\Delta f_1$ to zero.
    *   The LFC in Area 2 will detect the ACE (due to $\Delta P_{tie_{12}}$ and potentially $\Delta f_2$) and adjust $\Delta P_{g2}$ to maintain the tie-line flow at its scheduled value and its own frequency.
    *   Ideally, both frequencies settle to zero, and the tie-line flow returns to its scheduled value (or the required scheduled exchange if not zero).

---

### 4. Achieving Learning Outcomes and Course Outcomes

#### 4.1 Addressing Learning Outcomes

*   **LO1: Develop mathematical models for AGC in Single Area and Two Area Systems:**
    *   **Notes Coverage:** Sections 2.2 and 3.3 provide the detailed mathematical equations for single and two-area AGC systems, including turbine-governor dynamics, system dynamics, tie-line dynamics, and LFC controller equations.
    *   **Implementation:** The steps outlined in Sections 2.3 and 3.4 detail how these mathematical models are translated into MATLAB Simulink models.
*   **LO2: Implement AGC in MATLAB Simulink:**
    *   **Notes Coverage:** Sections 2.3 and 3.4 provide step-by-step guides for building the Simulink models for both single and two-area AGC, including block selection and connections.
    *   **Implementation:** The practical steps in these sections guide the user through the actual simulation setup.
*   **LO3: Analyze the performance of AGC by observing frequency deviations and tie-line power flows:**
    *   **Notes Coverage:** The expected observations for both single and two-area systems (Sections 2.3 and 3.4) describe what to look for in the simulation results.
    *   **Implementation:** Using Scope blocks in Simulink allows for direct visualization and analysis of these performance metrics.

#### 4.2 Aligning with Course Outcomes

*   **CO1: Develop mathematical models and conduct steady-state and transient analysis of power system networks using standard/dedicated software.**
    *   **Knowledge Level (K3 - Apply):**
        *   The notes provide the mathematical models (differential equations and transfer functions) for AGC in single and two-area systems.
        *   The implementation steps in Simulink demonstrate how to *apply* these mathematical models to build a functional simulation.
        *   The analysis of simulation results (frequency deviations, tie-line flows) constitutes a transient analysis of the power system's control behavior.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyze their performance.**
    *   **Knowledge Level (K3 - Apply):**
        *   The "tests" in this context are the simulation runs with specific load disturbances.
        *   The components being tested are the governor, turbine, LFC controller, and the overall AGC system.
        *   The analysis of the simulation outputs (how quickly frequency settles, magnitude of deviations, tie-line flow stability) is the analysis of their performance. While formal "standards" for AGC performance metrics (like settling time, peak overshoot) might be in advanced texts, the fundamental concept of testing and analyzing performance is covered.

---

### 5. Practice Questions and Answers

**Question 1:** In a single-area AGC system, what is the primary function of the LFC controller?

**Answer:** The primary function of the LFC controller is to restore the system frequency to its nominal value and to eliminate steady-state frequency errors that persist due to the governor's droop characteristic. It does this by adjusting the governor's speed-changer setpoint based on the Area Control Error (ACE).

**Question 2:** Define the Area Control Error (ACE) for a single area.

**Answer:** For a single area, ACE is defined as:
$ACE = \Delta P_{tie} + B \Delta f$
Since in a single, isolated area there are no tie-lines, $\Delta P_{tie} = 0$. Therefore, $ACE = B \Delta f$, where $B$ is the frequency bias factor and $\Delta f$ is the frequency deviation.

**Question 3:** What is the impact of governor droop on steady-state frequency?

**Answer:** Governor droop provides proportional control of generator output with frequency. When there is a load disturbance, the governor increases generation but the frequency settles at a new, lower steady-state value. This steady-state frequency error is present because the governor output is directly linked to the frequency deviation. The LFC controller is needed to eliminate this steady-state error.

**Question 4:** In a two-area system, if a load increases in Area 1, what is the expected initial direction of tie-line power flow ($\Delta P_{tie_{12}}$)?

**Answer:** If a load increases in Area 1, the frequency in Area 1 ($\Delta f_1$) will initially decrease. This frequency deviation will cause power to flow from Area 2 to Area 1 through the tie-line to help meet the increased demand. Therefore, the initial direction of tie-line power flow ($\Delta P_{tie_{12}}$, power from Area 1 to Area 2) will be negative, indicating flow from Area 2 to Area 1.

**Question 5 (Simulink Implementation):** You are building a single-area AGC model in Simulink. You have added a `Step` block for load disturbance and a `Sum` block to calculate frequency deviation. Where would you connect the output of the `Sum` block representing $\Delta f$ to calculate the ACE?

**Answer:** The output of the `Sum` block representing $\Delta f$ would be connected to a `Gain` block with the value of the frequency bias factor ($B$). The output of this `Gain` block is then used in the calculation of ACE (which for a single area is simply $B \Delta f$). This ACE signal is then fed into the LFC controller.

**Question 6 (Two Area Simulink):** In your two-area Simulink model, you have calculated $\Delta P_{tie_{12}}$. How would you incorporate this into the ACE calculation for Area 2?

**Answer:** The ACE for Area 2 is given by $ACE_2 = \Delta P_{tie_{21}} + B_2 \Delta f_2$. Since $\Delta P_{tie_{21}} = -\Delta P_{tie_{12}}$, you would use a `Gain` block with a value of -1 to invert $\Delta P_{tie_{12}}$ and then add this to the $B_2 \Delta f_2$ term (where $\Delta f_2$ is multiplied by $B_2$ using another `Gain` block).

---

### 6. Important Points to Remember

*   **Frequency is the primary indicator of generation-load balance.**
*   **Governor droop is essential for steady-state stability and load sharing but introduces steady-state frequency errors.**
*   **LFC is the secondary control that restores frequency to nominal and eliminates steady-state errors.**
*   **ACE is the crucial signal for LFC controllers, combining tie-line power deviation and frequency deviation.**
*   **In a single-area system, ACE is directly proportional to frequency deviation (since tie-line power deviation is zero).**
*   **In a two-area system, ACE considers both the area's frequency deviation and the deviation in tie-line power flow.**
*   **MATLAB Simulink is a powerful tool for modeling and simulating AGC, allowing for parameter tuning and performance analysis.**
*   **PID controllers are commonly used for LFC to provide robust frequency regulation.**
*   **The frequency sensitivity of the load ($D$) provides natural damping to the system.**
*   **Interconnected systems require coordinated AGC to manage tie-line flows and prevent inter-area oscillations.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Power System Analysis and Design** by J. Duncan Glover, Mulukutla S. Sarma, and Tony J. Overbye (for fundamental power system concepts and modeling).
*   **Modern Power Systems Analysis** by D. P. Kothari and I. J. Nagrath (often covers AGC in detail).
*   **Power System Control and Stability** by P. M. Anderson and A. A. Fouad (for deeper theoretical understanding of control aspects).
*   **MATLAB Simulink Documentation:** For specific block usage and simulation techniques.

*(Note: Specific page numbers or chapters depend on the edition of the textbook. It is recommended to consult the relevant chapters on Load Frequency Control (LFC) or Automatic Generation Control (AGC) in these texts.)*

---
This comprehensive study note covers the aim, concepts, implementation details, and practical aspects of Automatic Generation Control (AGC) for both single and two-area systems in MATLAB Simulink, aligning with the provided learning and course outcomes.