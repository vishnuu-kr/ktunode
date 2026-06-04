---
title: "Aim: To plot the IV characteristics of a PV module in MATLAB Simulink and determine the Maximum Power Point"
subject: "POWER SYSTEM LAB"
module: "Module 10: Plot the IV characteristics of a PV module and determine Maximum Power Point"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367fa"
status: "completed"
scrapedAt: "2026-05-23T16:31:12.138Z"
---
# POWER SYSTEM LAB: Module 10 - PV Module IV Characteristics and Maximum Power Point (MPP) Determination

## 1. Introduction

This module focuses on understanding the electrical behavior of a Photovoltaic (PV) module by plotting its Current-Voltage (IV) characteristics. We will then learn how to determine the Maximum Power Point (MPP), which is crucial for optimizing the energy harvested from the PV module. This will be achieved using MATLAB Simulink, a powerful tool for system modeling and simulation.

## 2. Learning Outcomes & Course Outcome Alignment

*   **Learning Outcome:** To plot the IV characteristics of a PV module in MATLAB Simulink.
    *   **Aligned Course Outcome:** CO1: Develop mathematical models and conduct steady state analysis of power system networks using standard / dedicated software. (K3)
    *   **Explanation:** By modeling a PV module in Simulink and simulating its behavior under varying conditions, we are developing a mathematical representation and performing a steady-state analysis of a power system component.

*   **Learning Outcome:** To determine the Maximum Power Point (MPP) from the plotted IV characteristics.
    *   **Aligned Course Outcome:** CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance. (K3)
    *   **Explanation:** Plotting the IV curve and identifying the MPP can be considered an analytical test to determine the performance of the PV module under specific environmental conditions.

## 3. Key Concepts and Definitions

### 3.1. Photovoltaic (PV) Module

*   A PV module (or solar panel) is a device that converts light energy (specifically photons from sunlight) directly into electrical energy through the photovoltaic effect.
*   It is typically composed of several solar cells connected in series and/or parallel.

### 3.2. Photovoltaic Effect

*   The phenomenon where light energy incident on a semiconductor material generates an electromotive force (voltage) and consequently, an electric current.

### 3.3. Current-Voltage (IV) Characteristics

*   A graphical representation of the relationship between the current ($I$) flowing through a PV module and the voltage ($V$) across its terminals under specific operating conditions (e.g., irradiance, temperature).
*   The IV curve is fundamental to understanding the performance and behavior of a PV module.

### 3.4. Key Parameters of the IV Curve

*   **Short-Circuit Current ($I_{sc}$):** The maximum current the PV module can produce when the voltage across its terminals is zero (i.e., the terminals are short-circuited). This occurs when the load resistance is 0 $\Omega$.
*   **Open-Circuit Voltage ($V_{oc}$):** The maximum voltage the PV module can produce when no current is flowing (i.e., the terminals are open-circuited). This occurs when the load resistance is infinite ($\infty$).
*   **Maximum Power Point (MPP):** The unique operating point on the IV curve where the PV module delivers the maximum possible power. This is the product of voltage and current ($P = V \times I$) at that specific point.
*   **Voltage at Maximum Power ($V_{mp}$):** The voltage at which the MPP occurs.
*   **Current at Maximum Power ($I_{mp}$):** The current at which the MPP occurs.
*   **Fill Factor (FF):** A measure of the "squareness" of the IV curve, indicating how close the actual maximum power is to the theoretical maximum power (product of $V_{oc}$ and $I_{sc}$).
    *   $FF = \frac{V_{mp} \times I_{mp}}{V_{oc} \times I_{sc}}$
    *   A higher fill factor indicates better performance.

### 3.5. Mathematical Model of a PV Cell (Simplified)

A simplified, single-diode model is commonly used to represent a PV cell for simulation purposes. The equation for the output current ($I$) is:

$I = I_{ph} - I_0 \left( e^{\frac{V + IR_s}{nV_T}} - 1 \right) - \frac{V + IR_s}{R_{sh}}$

Where:
*   $I$ = Output current of the PV cell (A)
*   $V$ = Output voltage of the PV cell (V)
*   $I_{ph}$ = Photocurrent (A) - Directly proportional to irradiance.
*   $I_0$ = Diode reverse saturation current (A) - Temperature dependent.
*   $R_s$ = Series resistance ($\Omega$) - Represents internal resistance and contact resistance.
*   $R_{sh}$ = Shunt resistance ($\Omega$) - Represents leakage currents.
*   $n$ = Diode ideality factor (dimensionless) - Depends on the semiconductor material and manufacturing process.
*   $V_T$ = Thermal voltage ($V_T = \frac{kT}{q}$), where:
    *   $k$ = Boltzmann constant ($1.38 \times 10^{-23}$ J/K)
    *   $T$ = Temperature in Kelvin (K)
    *   $q$ = Elementary charge ($1.602 \times 10^{-19}$ C)

**Simplified Model for Simulation (often used in Simulink):**

For practical simulations, especially when focusing on the general shape of the IV curve and MPP, a simplified model can be derived. The photocurrent ($I_{ph}$) is directly proportional to the solar irradiance ($G$) and can be expressed as:

$I_{ph} = I_{ph,ref} \frac{G}{G_{ref}} (1 + \alpha (T - T_{ref}))$

Where:
*   $I_{ph,ref}$ = Photocurrent at reference conditions (W/m$^2$)
*   $G$ = Current irradiance (W/m$^2$)
*   $G_{ref}$ = Reference irradiance (typically 1000 W/m$^2$)
*   $\alpha$ = Temperature coefficient of photocurrent (A/K)
*   $T$ = Cell temperature (K)
*   $T_{ref}$ = Reference temperature (K)

The diode saturation current ($I_0$) is also temperature-dependent. However, in many simulations, the focus is on varying the load resistance to sweep the IV curve, and the model parameters are often pre-defined or taken from datasheets.

### 3.6. Maximum Power Point Tracking (MPPT)

*   MPPT is a technique used in conjunction with PV systems to continuously adjust the operating point of the PV module to extract the maximum possible power under varying environmental conditions. This is often achieved by varying the load connected to the PV module.

## 4. Aim of the Experiment

The aim of this experiment is to:
1.  **Model a PV module in MATLAB Simulink.**
2.  **Generate the IV characteristics of the PV module by varying the load resistance.**
3.  **Determine the Maximum Power Point (MPP) from the plotted IV curve.**

## 5. Methodology in MATLAB Simulink

To achieve the aim, we will follow these steps:

### 5.1. PV Module Modeling in Simulink

*   **Simulink Library:** We will primarily use the "Simscape Electrical" library, specifically the "Specialized Power Systems" > "Renewable Energy" > "Photovoltaic" block.
*   **PV Array Block:** This block allows us to model a PV array based on its electrical parameters or by specifying the number of series and parallel connected cells. Key parameters to input include:
    *   **Number of series cells (Ns):** Number of cells connected in series.
    *   **Number of parallel strings (Np):** Number of parallel strings of series-connected cells.
    *   **Short-circuit current ($I_{sc}$):** Current at MPP.
    *   **Open-circuit voltage ($V_{oc}$):** Voltage at MPP.
    *   **Voltage at MPP ($V_{mp}$):** Voltage at MPP.
    *   **Current at MPP ($I_{mp}$):** Current at MPP.
    *   **Diode ideality factor (n):** Typically between 1 and 2.
    *   **Diode saturation current ($I_0$):** Calculated from $I_{mp}$ and $V_{mp}$.
    *   **Series resistance ($R_s$):** Typically a small value.
    *   **Shunt resistance ($R_{sh}$):** Typically a large value.
    *   **Irradiance (G):** W/m$^2$.
    *   **Cell temperature (T):** Degrees Celsius.

    *Alternatively, you can use a simplified PV subsystem that implements the simplified diode equation if the specific block is not available or if you need more control over the underlying equations.*

### 5.2. Simulating the IV Characteristics

To obtain the IV curve, we need to sweep the load resistance connected to the PV module from a very low value (near short-circuit) to a very high value (near open-circuit).

*   **Load Block:** We will use a "Series Resistor" or a variable resistance block to act as the load.
*   **Simulation Approach:**
    1.  **Connect a Resistor:** Connect a resistor block to the PV module's terminals.
    2.  **Vary Resistance:** To obtain the IV curve, we need to simulate the PV module's behavior at different resistance values. This can be done in a few ways:
        *   **Parameter Variation (in older Simulink versions or for specific analysis):** Run multiple simulations, changing the resistance value in each simulation.
        *   **Using a Controlled Voltage Source and Current Meter (more common for IV sweep):**
            *   Connect a variable voltage source in series with a current measurement block and the PV module.
            *   Sweep the voltage source from 0 to $V_{oc}$ and record the corresponding current.
            *   **Alternatively (and more directly for PV):** Connect a series resistor whose value is swept. To do this efficiently:
                *   Use a **Controlled Voltage Source** connected in series with a **Current Measurement** block and the PV module.
                *   The output of the Current Measurement block is the current $I$.
                *   The voltage across the PV module is the terminal voltage, which you can measure using a **Voltage Measurement** block.
                *   To get the IV curve, you can iterate through different load conditions. A common way in Simulink is to use a **Controlled Current Source** connected in series with a **Resistor** and a **Voltage Measurement** block to measure the voltage drop across the PV module. You then sweep the current source.

            *   **Most Efficient Method for IV Sweep:**
                1.  Place a **Voltage Measurement** block to measure the voltage across the PV module terminals.
                2.  Place a **Current Measurement** block in series with the PV module to measure the current flowing through it.
                3.  Connect the PV module to a **Series Resistor** block.
                4.  To sweep the resistance, you can either:
                    *   Use a **MATLAB function block** to calculate the resistance value for each simulation step.
                    *   Use a **Sweep Function** block (if available in specific toolboxes like Simscape Electrical) or a controlled voltage source and measure current.

                Let's focus on a practical Simulink setup:

                **Setup for IV Curve:**
                *   PV Array Block
                *   A **Series Resistor** block connected to the PV Array's positive terminal.
                *   The negative terminal of the PV Array connected to ground.
                *   A **Voltage Measurement** block connected across the PV Array terminals.
                *   A **Current Measurement** block connected in series between the PV Array's positive terminal and the resistor.
                *   To get a single IV curve, we need to change the resistance. A common approach is to use a **Signal Builder** or **MATLAB Function** block to create a vector of resistance values and then loop through them in a MATLAB script that runs the simulation.

                **A more integrated approach:**
                1.  PV Array Block.
                2.  **Series Resistor** block.
                3.  **Voltage Measurement** block across the PV Array.
                4.  **Current Measurement** block in series with the resistor.
                5.  To sweep the resistance efficiently, you can use a **Controlled Voltage Source** block set to gradually increase voltage from 0 to $V_{oc}$ (or slightly beyond) and measure the current flowing through it. Then, the voltage across the PV module can be inferred.
                6.  Alternatively, connect a **Variable Resistor** (e.g., by creating a MATLAB Function block that outputs the resistance value based on a simulation time or iteration count) in series with the PV module.

### 5.3. Data Acquisition and Plotting

*   **Scope Block:** Use a "Scope" block to visualize the voltage and current as they are generated during the simulation.
*   **To Workspace Block:** For detailed analysis and plotting, connect "To Workspace" blocks to the outputs of the Voltage Measurement and Current Measurement blocks. This will save the simulation data into MATLAB variables.
*   **MATLAB Script:** After running the simulation, use a MATLAB script to:
    *   Retrieve the saved voltage ($V$) and current ($I$) data from the workspace.
    *   Calculate the power ($P = V \times I$).
    *   Plot the IV characteristics ($I$ vs. $V$).
    *   Plot the Power-Voltage (PV) characteristics ($P$ vs. $V$).

### 5.4. Determining the Maximum Power Point (MPP)

*   **From the PV Curve:** Visually identify the peak of the PV curve. The corresponding voltage and current values are $V_{mp}$ and $I_{mp}$, and their product is $P_{max}$.
*   **Using MATLAB Functions:** In the MATLAB script:
    *   Find the maximum value of the power vector: `[P_max, index] = max(P);`
    *   The corresponding voltage and current are: `V_mp = V(index);` and `I_mp = I(index);`
    *   Calculate the MPP: `P_max = V_mp * I_mp;`

## 6. Step-by-Step Simulink Model Construction

Let's consider a typical Simulink model setup for generating the IV curve.

**Example Simulation Setup:**

1.  **Open MATLAB and create a new Simulink model.**
2.  **Add the PV Array block:**
    *   Navigate to `Simscape Electrical` > `Renewable Energy` > `Photovoltaic`.
    *   Drag and drop the "PV Array" block into your model.
    *   Double-click the block and configure its parameters. For example, to simulate a single panel with typical values:
        *   **Number of series cells:** 60
        *   **Number of parallel strings:** 1
        *   **Short-circuit current (A):** 6
        *   **Open-circuit voltage (V):** 22
        *   **Voltage at MPP (V):** 18
        *   **Current at MPP (A):** 5.5
        *   **Diode ideality factor:** 1.5
        *   **Series resistance (Ohms):** 0.2
        *   **Shunt resistance (Ohms):** 1000
        *   **Irradiance (W/m^2):** 1000 (Standard Test Conditions - STC)
        *   **Cell temperature (deg C):** 25 (STC)

3.  **Add a variable load (e.g., a resistor whose value is controlled):**
    *   To sweep the IV curve, we need to vary the load. A common approach is to simulate with a fixed resistor and then repeat the simulation with different resistor values.
    *   For a single sweep, let's use a **Resistor** block. Connect it in series with the PV Array.
    *   However, to get a continuous IV curve in *one* simulation run, we typically use a voltage source sweep.

    **Let's adapt for an IV Sweep (using a controlled voltage source to sweep terminal voltage):**

    *   From `Simscape Electrical` > `Specialized Power Systems` > `Electrical Sources`: Drag and drop a **Controlled Voltage Source**.
    *   From `Simscape Electrical` > `Specialized Power Systems` > `Electrical Measurements`: Drag and drop a **Voltage Measurement** block and a **Current Measurement** block.
    *   From `Simscape Electrical` > `Specialized Power Systems` > `Electrical Elements`: Drag and drop a **Series Resistor** block.
    *   From `Simscape Electrical` > `Specialized Power Systems` > `Electrical Elements`: Drag and drop a **Series RLC Branch** block and set its resistance to a very small value (e.g., 0.001 Ohms) or simply a **Resistor** block with a small value. This helps in setting up the connection.

    **Correcting the IV Sweep approach:**

    To sweep the IV curve for a PV module, you need to control the voltage or current. The most straightforward way in Simulink is to:

    1.  Place the **PV Array** block.
    2.  Connect a **Series Resistor** block to its positive terminal.
    3.  Connect the negative terminal to ground.
    4.  **To measure the voltage across the PV Array**, place a **Voltage Measurement** block in parallel with the PV Array.
    5.  **To measure the current from the PV Array**, place a **Current Measurement** block in series with the PV Array.

    **Now, how to sweep?** The easiest way to demonstrate the concept is to run multiple simulations with varying resistor values.

    **Method 1: Multiple Simulations with Varying Resistors**
    *   Connect the PV Array to a **Resistor** block.
    *   Connect **Voltage Measurement** across the PV Array.
    *   Connect **Current Measurement** in series with the PV Array.
    *   **Save the measured V and I to the workspace** using "To Workspace" blocks.
    *   **Create a MATLAB script** that iterates through a predefined range of resistor values (e.g., 0.1 Ohm to 1000 Ohms in small steps). In each iteration:
        *   Set the resistance value in the Simulink model (this can be done programmatically using `set_param`).
        *   Run the simulation (`sim`).
        *   Extract the `V` and `I` data from the workspace.
        *   Store these `V` and `I` pairs.
    *   After the loop, plot all the stored `V` and `I` data to get the IV curve.

    **Method 2: Using a Controlled Voltage Source and Measuring Current (Commonly used for I-V Sweep)**
    *   Place the **PV Array** block.
    *   Place a **Controlled Voltage Source** in series with the PV Array.
    *   Place a **Current Measurement** block in series with the PV Array and the Controlled Voltage Source. This measures the current ($I$).
    *   Place a **Voltage Measurement** block to measure the voltage across the PV Array terminals.
    *   **Set the Controlled Voltage Source to generate a sweep of voltages** from 0 up to $V_{oc}$ (or slightly more). You can use a **Signal Builder** block or a **MATLAB Function** block to define the voltage input to the Controlled Voltage Source.
    *   Connect the output of the Current Measurement block and the Voltage Measurement block to **To Workspace** blocks.
    *   Run the simulation.
    *   Plot `I` vs. `V` from the workspace data.

    Let's go with Method 2 for demonstration.

    **Simulink Model Structure (Method 2):**

    ```
    [PV Array] --- [Controlled Voltage Source] --- [Current Measurement] --- Ground
        |                                                                     ^
        |                                                                     |
        +------------------ [Voltage Measurement] ----------------------------+
    ```
    *Note: The Controlled Voltage Source is in series with the PV Array. The voltage measurement is across the PV Array.*

    **Configuration Details:**

    *   **Controlled Voltage Source:**
        *   Set the **Input Signal Unit** to "V".
        *   For the **Signal Source**, use a **Signal Builder** block.
        *   In the Signal Builder:
            *   Create a time vector from 0 to, say, 0.1 seconds.
            *   Create a corresponding voltage vector that linearly increases from 0 to $V_{oc}$ (e.g., 25V).
            *   You might need to adjust the simulation time to match the duration of your voltage sweep.

    *   **PV Array:** Configure parameters as described earlier.

    *   **Voltage Measurement:** Connect its output to a "To Workspace" block named `V_out`.

    *   **Current Measurement:** Connect its output to a "To Workspace" block named `I_out`.

    *   **Solver:** Ensure you are using a suitable solver for power systems (e.g., `ode15s` or `ode23tb`). Set the **Stop Time** of the simulation to match the duration of your voltage sweep.

4.  **Run the Simulation:** Click the "Run" button.

5.  **Analyze Results in MATLAB:**
    *   In the MATLAB command window, you should have `V_out` and `I_out` variables.
    *   Calculate Power: `P_out = V_out .* I_out;`
    *   Plot the IV characteristics:
        ```matlab
        figure;
        plot(V_out, I_out);
        title('PV Module IV Characteristics');
        xlabel('Voltage (V)');
        ylabel('Current (A)');
        grid on;
        ```
    *   Plot the Power-Voltage characteristics:
        ```matlab
        figure;
        plot(V_out, P_out);
        title('PV Module Power-Voltage Characteristics');
        xlabel('Voltage (V)');
        ylabel('Power (W)');
        grid on;
        ```
    *   Determine MPP:
        ```matlab
        [P_max, idx] = max(P_out);
        V_mp = V_out(idx);
        I_mp = I_out(idx);

        fprintf('Maximum Power Point (MPP):\n');
        fprintf('Voltage (V_mp): %.2f V\n', V_mp);
        fprintf('Current (I_mp): %.2f A\n', I_mp);
        fprintf('Maximum Power (P_max): %.2f W\n', P_max);

        % Optional: Mark MPP on the IV curve
        hold on;
        plot(V_mp, I_mp, 'ro', 'MarkerSize', 8, 'LineWidth', 2);
        legend('IV Curve', 'MPP');
        hold off;
        ```

## 7. Factors Affecting IV Characteristics

*   **Irradiance (G):**
    *   Higher irradiance leads to a higher photocurrent ($I_{ph}$).
    *   Consequently, $I_{sc}$ increases almost linearly with irradiance.
    *   $V_{oc}$ is less sensitive to irradiance changes but also increases slightly with higher irradiance.
    *   Maximum power ($P_{max}$) increases significantly with irradiance.

*   **Temperature (T):**
    *   Higher cell temperature leads to a decrease in $V_{oc}$ and a slight increase in $I_{sc}$.
    *   The overall effect is a significant decrease in maximum power ($P_{max}$) with increasing temperature. This is why proper ventilation for PV panels is important.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 8. Reference Books and Content Incorporation

*   **"Power System Analysis and Design" by Glover, Overbye, and Sarma:** While this book focuses on grid-level analysis, the principles of modeling components and understanding their characteristics are applicable. The concept of component behavior under varying conditions is a common thread.
*   **"Power System Modeling, Computation and Control" by R. Ramanarayanan:** This book might offer deeper insights into the mathematical modeling of semiconductor devices like solar cells, which forms the basis of the PV Array block in Simulink.
*   **"MATLAB Simulink for Engineers" by Holly Moore:** This book would be invaluable for understanding the practical aspects of building models in Simulink, using various blocks, and analyzing simulation results.

**Content from References:**

*   **Modeling:** The mathematical equations of PV cells (as discussed in Section 3.5) are derived from semiconductor physics and are implemented within the PV Array block. Understanding these equations helps in correctly parameterizing the block.
*   **Analysis:** The process of sweeping a parameter (like resistance or voltage) to obtain a characteristic curve is a standard analytical technique in electrical engineering, applicable to various components beyond PV modules. This aligns with CO1.
*   **Performance Evaluation:** Identifying the MPP is a key performance metric for a PV module, directly addressing CO2. Datasheets for PV modules provide $V_{oc}$, $I_{sc}$, $V_{mp}$, $I_{mp}$ under Standard Test Conditions (STC), which are essential inputs for the Simulink model.

## 9. Practice Questions and Exercises

**Question 1:**
What are the key parameters that define the IV characteristics of a PV module?

**Answer 1:**
The key parameters are:
*   Short-Circuit Current ($I_{sc}$)
*   Open-Circuit Voltage ($V_{oc}$)
*   Voltage at Maximum Power ($V_{mp}$)
*   Current at Maximum Power ($I_{mp}$)
*   Fill Factor (FF)

**Question 2:**
How does solar irradiance affect the IV characteristics of a PV module? Explain the impact on $I_{sc}$, $V_{oc}$, and $P_{max}$.

**Answer 2:**
*   **Irradiance:** Higher irradiance leads to:
    *   A significant increase in $I_{sc}$ (almost linearly).
    *   A slight increase in $V_{oc}$.
    *   A substantial increase in $P_{max}$ due to the combined effect on voltage and current.

**Question 3:**
How does cell temperature affect the IV characteristics of a PV module? Explain the impact on $I_{sc}$, $V_{oc}$, and $P_{max}$.

**Answer 3:**
*   **Cell Temperature:** Higher cell temperature leads to:
    *   A slight increase in $I_{sc}$.
    *   A noticeable decrease in $V_{oc}$.
    *   An overall decrease in $P_{max}$ because the decrease in $V_{oc}$ is more dominant than the increase in $I_{sc}$.

**Question 4 (Practical Exercise):**
Using MATLAB Simulink, model a PV Array with the following parameters:
*   $V_{oc}$ = 35 V
*   $I_{sc}$ = 8 A
*   $V_{mp}$ = 30 V
*   $I_{mp}$ = 7.5 A
*   Irradiance = 1000 W/m$^2$
*   Temperature = 25 °C

Plot its IV and PV characteristics. From the PV curve, identify and report the values of $V_{mp}$, $I_{mp}$, and $P_{max}$.

**Answer 4 (Expected Output):**
You would build the Simulink model as described in Section 6, using the provided parameters for the PV Array block. After running the simulation and analyzing the `V_out` and `I_out` data, you would obtain plots similar to those described. The output for MPP would be approximately:
*   $V_{mp} \approx 30$ V
*   $I_{mp} \approx 7.5$ A
*   $P_{max} \approx 30 \text{ V} \times 7.5 \text{ A} = 225$ W

**(Note: Due to the simplified nature of the PV Array block, the simulated $V_{mp}$ and $I_{mp}$ might slightly differ from the input parameters, but they should be very close. The exercise tests the ability to extract these values from the simulation results.)**

## 10. Important Points to Remember

*   The IV characteristic is a fundamental representation of a PV module's performance.
*   The Maximum Power Point (MPP) is the optimal operating point for maximum energy extraction.
*   Irradiance and temperature are the primary environmental factors affecting the IV characteristics and MPP.
*   Simulink provides powerful tools (PV Array block, Simscape Electrical) for modeling and simulating PV systems.
*   Sweeping the load resistance (or terminal voltage/current) is necessary to obtain the full IV curve.
*   Always verify your simulation results against expected theoretical behavior.
*   Properly configure the solver and simulation time for accurate power system simulations.

This detailed study material should provide a comprehensive understanding of plotting PV module IV characteristics and determining the MPP using MATLAB Simulink, aligning with the course outcomes.