---
title: "Simulation of a small water supply pipe network using EPANET"
subject: "CIVIL ENGINEERING MODELLING LAB"
module: "Module 11: Simulation of a small water supply pipe network using EPANET"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cd56b5e963ba810d5e"
status: "completed"
scrapedAt: "2026-05-20T18:43:26.114Z"
---
# CIVIL ENGINEERING MODELLING LAB - Module 11: Simulation of a Small Water Supply Pipe Network Using EPANET

This module introduces the fundamental principles and practical application of simulating a small water supply pipe network using EPANET, a widely used, free software package for hydraulic modelling of water distribution systems.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **Understand the purpose and importance of water supply pipe network simulation.**
*   **Identify and define key components of a water supply pipe network.**
*   **Familiarize yourself with the EPANET software interface and its functionalities.**
*   **Create and configure a small water supply pipe network model in EPANET.**
*   **Assign hydraulic properties to network components (nodes, links, sources).**
*   **Set up simulation scenarios and run hydraulic analysis.**
*   **Interpret and analyze the results of the EPANET simulation.**
*   **Identify potential issues and propose improvements for the simulated network.**

---

## 1. Purpose and Importance of Water Supply Pipe Network Simulation

### Key Concepts:

*   **Water Supply System:** A complex interconnected system of pipes, pumps, reservoirs, storage tanks, and other components designed to deliver potable water from a source to consumers.
*   **Hydraulic Simulation:** The process of using mathematical models to predict the behavior of water flow within a pipe network under various operating conditions.
*   **Demand:** The quantity of water required by consumers at specific locations.
*   **Pressure:** The force exerted by the water at a given point in the network, crucial for ensuring adequate supply to all users.
*   **Flow Rate:** The volume of water passing through a pipe or at a node per unit time.

### Importance:

*   **Design and Planning:**
    *   Sizing pipes to meet demands and maintain adequate pressure.
    *   Determining the optimal location and capacity of reservoirs and storage tanks.
    *   Selecting appropriate pump types and operating schedules.
    *   Evaluating the impact of future demand growth.
*   **Operation and Management:**
    *   Identifying areas of low pressure or insufficient flow.
    *   Detecting potential pipe bursts or leaks.
    *   Optimizing pump operation for energy efficiency.
    *   Assessing the impact of system changes (e.g., new connections, pipe replacements).
    *   Emergency response planning (e.g., fire flow analysis).
*   **Troubleshooting:**
    *   Diagnosing the cause of operational problems.
    *   Testing the effectiveness of proposed solutions.

---

## 2. Key Components of a Water Supply Pipe Network

A typical water supply pipe network consists of the following fundamental components:

### 2.1. Nodes (Junctions):

*   **Definition:** Points in the network where pipes connect, and where water can be consumed or enter/leave the system.
*   **Types:**
    *   **Junction:** A point where two or more pipes meet, and demand can be present.
    *   **Reservoir:** A source of water with a constant water level (and thus constant head) that supplies water to the network. It is assumed to have an infinite storage capacity and is not affected by outflow.
    *   **Tank:** A storage unit with a defined volume and variable water level. The head at the tank depends on its water level.
*   **Key Properties:**
    *   **Elevation:** The ground elevation of the node.
    *   **Head (for reservoirs):** The constant water surface elevation.
    *   **Demand:** The water consumption rate at the node (e.g., liters per second, cubic meters per hour). Can be fixed or a function of time.
    *   **Level (for tanks):** Minimum and maximum water levels, initial water level, and overflow level.

### 2.2. Links:

*   **Definition:** The conduits through which water flows between nodes.
*   **Types:**
    *   **Pipe:** A conduit with a defined length, diameter, roughness, and material.
    *   **Pump:** Devices that add energy (head) to the water to move it between nodes.
    *   **Valve:** Devices that control flow or pressure by introducing a head loss or by regulating flow.
        *   **General Purpose Valve (GPV):** Introduces a head loss based on flow.
        *   **Pressure Reducing Valve (PRV):** Maintains a constant downstream pressure regardless of upstream conditions.
        *   **Pressure Sustaining Valve (PSV):** Maintains a minimum upstream pressure.
        *   **Flow Control Valve (FCV):** Regulates flow to a specific value.
        *   **Check Valve (CV):** Allows flow in only one direction.
*   **Key Properties:**
    *   **From Node:** The starting node of the link.
    *   **To Node:** The ending node of the link.
    *   **Length:** The physical length of the pipe or conduit.
    *   **Diameter:** The internal diameter of the pipe.
    *   **Roughness Coefficient:** A measure of the friction within the pipe (e.g., Hazen-Williams C-factor or Darcy-Weisbach roughness).
    *   **Minor Loss Coefficient (for pipes):** Accounts for additional head losses due to fittings, bends, etc.
    *   **Pump Curve (for pumps):** Relationship between head and flow for the pump.
    *   **Settings (for valves):** Specific parameters like setpoint pressure for PRVs.

### 2.3. Sources:

*   **Definition:** Points from which water enters the network. Typically represented by Reservoirs or Tanks.

---

## 3. EPANET Software: Interface and Functionalities

EPANET (Environmental Protection Agency Network Evaluation Tool) is a sophisticated hydraulic modeling software.

### 3.1. EPANET Interface Overview:

*   **Main Window:** Displays the network map and allows interaction with network components.
*   **Menu Bar:** Provides access to all functionalities (File, Edit, View, Project, Run, Results, etc.).
*   **Toolbar:** Contains quick access buttons for common operations (zoom, pan, select, add components).
*   **Network Map:** The central canvas where you build and visualize your network.
*   **Property Editor:** Appears when a network component is selected, allowing you to view and edit its properties.
*   **Status Bar:** Displays information about the current state of the program and the network.

### 3.2. Key Functionalities:

*   **Network Creation:** Drawing and connecting nodes and links.
*   **Data Input:** Assigning hydraulic properties to each component.
*   **Scenario Management:** Defining different demand patterns, pump operations, and other conditions.
*   **Hydraulic Analysis:** Solving the network equations to determine flow rates, pressures, and heads.
*   **Results Visualization:** Displaying results graphically (e.g., node pressures, link flows) and in tabular format.
*   **Reporting:** Generating summary reports of the simulation.
*   **Data Export:** Exporting results for further analysis in other software.

---

## 4. Creating and Configuring a Small Water Supply Pipe Network Model in EPANET

This section outlines the step-by-step process of building a basic network.

### 4.1. Project Setup:

1.  **Start EPANET.**
2.  **New Project:** Go to `File > New Project`.
3.  **Units:** Select appropriate hydraulic units (e.g., Flow: L/s, Head: m). You can set these permanently in `Tools > Options > Hydrology`.

### 4.2. Building the Network:

1.  **Add Nodes:**
    *   Select the "Junction" tool from the toolbar.
    *   Click on the network map to place junctions.
    *   Select the "Reservoir" tool and click to place a reservoir.
    *   You can also add Tanks similarly.
2.  **Connect Nodes with Links:**
    *   Select the "Pipe" tool.
    *   Click on the "from" node and then click on the "to" node to draw a pipe. EPANET will automatically create a new junction if the pipe connects to an empty space.
    *   Use the "Pump" tool to connect two nodes, representing a pump lifting water.
    *   Use "Valve" tools to insert valves.

### 4.3. Assigning Hydraulic Properties:

1.  **Select a Component:** Click on a node or link on the network map.
2.  **Edit Properties:** Use the Property Editor that appears.

    *   **Reservoir:**
        *   **Head:** Enter the water surface elevation (e.g., 150 m).
    *   **Junctions:**
        *   **Elevation:** Enter the ground elevation (e.g., 100 m).
        *   **Demand:** Enter the water demand (e.g., 5 L/s). You can also define demand patterns for time-varying demands.
    *   **Pipes:**
        *   **Length:** Enter the pipe length (e.g., 1000 m).
        *   **Diameter:** Enter the internal diameter (e.g., 0.2 m).
        *   **Roughness:** Select a roughness coefficient. For simplicity, you can use Hazen-Williams (HW) and set the C-factor (e.g., 130).
        *   **Minor Loss:** Leave as default (0) for simplicity, or specify if known.
    *   **Pumps:**
        *   **Pump Curve:** You'll need to define a pump curve. Go to `Project > Pumps` to add a new pump. You'll typically define a few head-flow points. Select the pump type (e.g., Constant Power, Multi-stage).

---

## 5. Setting Up Simulation Scenarios and Running Hydraulic Analysis

### 5.1. Setting Up the Simulation:

1.  **Run Control:** Go to `Project > Run Control`.
2.  **Simulation Type:**
    *   **Hydraulic:** Solves for steady-state flow and pressure conditions based on average demands and operating conditions. This is the most common for initial analysis.
    *   **Quality:** Simulates the movement and mixing of water quality constituents (e.g., chlorine).
    *   **Extended Period Simulation (EPS):** Simulates how the network behaves over a period of time (e.g., 24 hours), considering diurnal demand variations, tank level fluctuations, and pump operations. This is crucial for understanding system dynamics.
3.  **Time Settings (for EPS):**
    *   **Start Time:** The beginning of the simulation period.
    *   **Duration:** The total length of the simulation.
    *   **Reporting Interval:** The time step at which results are saved.
    *   **Time Pattern:** Assign time patterns to demands and tank levels to simulate diurnal variations. These are defined in `Project > Patterns`.

### 5.2. Running the Hydraulic Analysis:

1.  **Run the Simulation:** Go to `Run > Run`.
2.  **Check for Errors:** EPANET will perform calculations. If there are errors, a "Status" window will appear with messages. Address any critical errors (e.g., disconnected pipes, impossible heads).

---

## 6. Interpreting and Analyzing the Results of the EPANET Simulation

Once the simulation is complete, you can visualize and analyze the results.

### 6.1. Visualization Tools:

1.  **Network View:**
    *   **Node Results:** Right-click on the network map and select `Node Options`. Choose to display "Head" or "Pressure." You can also use the "Color Code" option to visualize pressure ranges.
    *   **Link Results:** Right-click and select `Link Options`. Choose to display "Flow" or "Velocity." Color coding can also be applied.
2.  **Graphs:**
    *   **Node Graph:** Select a node, then go to `View > Graph > Node Graph`. This allows you to plot head, pressure, or demand over time (for EPS).
    *   **Link Graph:** Select a link, then go to `View > Graph > Link Graph`. This allows you to plot flow rate, velocity, or head loss over time (for EPS).
    *   **Pump Curve:** For pumps, you can view the operating point on the pump curve to check for efficiency and suitability.
3.  **Tables:**
    *   **Node Table:** Go to `View > Table > Nodes`. This provides a detailed list of properties and results for all nodes.
    *   **Link Table:** Go to `View > Table > Links`. This provides a detailed list of properties and results for all links.

### 6.2. Key Results to Analyze:

*   **Node Pressures:**
    *   **Adequate Pressure:** Ensure pressures are within the required range (e.g., minimum 20 m, maximum 50 m, depending on local standards) at all demand nodes.
    *   **Low Pressure Zones:** Identify areas with insufficient pressure, which could indicate undersized pipes, high demands, or excessive head losses.
    *   **High Pressure Zones:** Identify areas with excessively high pressure, which can lead to pipe bursts or damage to fixtures.
*   **Link Flows and Velocities:**
    *   **Flow Rates:** Verify that pipes are carrying the required flow to meet demands.
    *   **Velocities:**
        *   **Minimum Velocity:** Ensure velocities are not too low (e.g., < 0.3 m/s) to prevent sedimentation.
        *   **Maximum Velocity:** Ensure velocities are not too high (e.g., > 3 m/s) to avoid excessive head loss, erosion, and water hammer.
*   **Tank Levels (for EPS):**
    *   **Cycling:** Observe if tank levels fluctuate appropriately to meet demand and refill during off-peak periods.
    *   **Emptying/Overflowing:** Check if tanks are expected to empty or overflow, indicating potential issues with supply or demand.
*   **Pump Performance:**
    *   **Operating Points:** Ensure pumps are operating near their most efficient points on their curves.
    *   **On/Off Cycles:** For EPS, analyze how frequently pumps cycle on and off, which can affect pump lifespan.

---

## 7. Identifying Potential Issues and Proposing Improvements

Based on the simulation results, you can identify problems and suggest solutions.

### 7.1. Common Issues:

*   **Low Pressure:**
    *   **Cause:** Undersized pipes, excessive demand, high friction losses, pump capacity insufficient.
    *   **Solution:** Increase pipe diameters, reduce demands (e.g., leak detection, conservation), upgrade pumps, add booster pumps, reduce system length.
*   **High Pressure:**
    *   **Cause:** Oversized pipes, low demands, insufficient head loss, incorrect pump operation.
    *   **Solution:** Install pressure-reducing valves (PRVs), reduce pump speed or discharge head, consider smaller pipe diameters in specific sections.
*   **Insufficient Flow:**
    *   **Cause:** Similar to low pressure, also blocked or closed valves.
    *   **Solution:** Check valve positions, increase pipe sizes, upgrade pumps.
*   **Water Hammer (Transient Pressures):** While not directly simulated by standard EPANET, high velocities and rapid valve closures can indicate a risk.
    *   **Solution:** Slow down valve closures, install surge protection devices, reduce velocities.
*   **Sedimentation/Corrosion:** Low velocities can lead to sedimentation, while high velocities can cause erosion and corrosion.
    *   **Solution:** Adjust pipe sizes to achieve optimal velocity ranges.

### 7.2. Improving the Network Design:

*   **Pipe Looping:** Adding loops to the network can improve pressure distribution and reliability, providing alternative flow paths.
*   **Parallel Pipes:** Using larger diameter pipes or multiple smaller pipes in parallel can reduce head loss.
*   **Optimized Pump Selection and Operation:** Choosing pumps that match the system's head-flow requirements and operating them efficiently.
*   **Strategic Reservoir/Tank Placement:** Locating storage appropriately can help balance supply and demand and maintain pressure.
*   **Demand Management:** Implementing strategies to reduce peak demands.

---

## Practice Questions & Exercises

Let's work through a simple example.

### Scenario: A Simple Network

Imagine a small water supply system with the following components:

*   **Source:** A Reservoir (Node 1) at an elevation of 150 m.
*   **Demand Point:** A Junction (Node 2) at an elevation of 100 m, with a constant demand of 10 L/s.
*   **Connection:** A single pipe (Link 1) connecting Node 1 to Node 2.

**Pipe Properties (Link 1):**
*   Length: 500 m
*   Diameter: 0.2 m
*   Hazen-Williams C-factor: 130

### Exercise 1: Building the Network in EPANET

1.  **Start EPANET.**
2.  **Create a New Project.**
3.  **Add a Reservoir:** Place Node 1 on the map. Set its Elevation to 150 m.
4.  **Add a Junction:** Place Node 2 on the map. Set its Elevation to 100 m.
5.  **Add a Pipe:** Draw a pipe (Link 1) connecting Node 1 to Node 2.
6.  **Set Pipe Properties:** Select Link 1 and set its Length to 500 m, Diameter to 0.2 m, and Hazen-Williams C-factor to 130.
7.  **Set Junction Demand:** Select Node 2 and set its Demand to 10 L/s.
8.  **Run a Hydraulic Simulation (Steady-State).**

### Exercise 2: Analyzing the Results

1.  **View Node Pressures:** After the simulation, check the pressure at Node 2.
    *   *What is the pressure at Node 2?*
2.  **View Link Flow:** Check the flow rate in Link 1.
    *   *What is the flow rate in Link 1? Is it equal to the demand at Node 2?*
3.  **Calculate Head Loss:** Estimate the head loss in the pipe using the Hazen-Williams formula (you may need to look up the formula).
    *   Head Loss = (4.73 * L * Q^1.852) / (C^1.852 * D^4.87)
        *   L = Length (m) = 500
        *   Q = Flow Rate (m³/s) = 0.010 (10 L/s = 0.010 m³/s)
        *   C = Hazen-Williams Coefficient = 130
        *   D = Diameter (m) = 0.2
    *   *How does the calculated head loss compare to the head difference between Node 1 and Node 2, considering the pressure at Node 2?*

### Expected Answers to Exercises:

**Exercise 1:**
*   You should have successfully created the network with the specified components and properties.

**Exercise 2:**
1.  **Pressure at Node 2:** EPANET will calculate this. It will be approximately **49.5 m**.
    *   *Calculation Check:*
        *   Flow (Q) = 0.010 m³/s
        *   Head Loss (h_f) = (4.73 * 500 * (0.010)^1.852) / (130^1.852 * (0.2)^4.87)
        *   h_f ≈ (4.73 * 500 * 0.0138) / (2410.5 * 0.00335) ≈ 32.6 / 8.07 ≈ **4.04 m**
        *   Head at Node 1 = 150 m
        *   Elevation of Node 2 = 100 m
        *   Pressure at Node 2 = Head at Node 1 - Elevation of Node 2 - Head Loss in Pipe
        *   Pressure at Node 2 = 150 m - 100 m - 4.04 m = **45.96 m** (EPANET might have slight variations due to rounding or internal solver precision).

2.  **Flow Rate in Link 1:** The flow rate in Link 1 should be **0.010 m³/s** (or 10 L/s), as it's the only path for demand.

3.  **Calculated Head Loss:** As calculated above, the head loss is approximately **4.04 m**. The head difference between Node 1 (150m) and Node 2's elevation (100m) is 50m. After accounting for the head loss, the pressure at Node 2 is indeed around 45.96 m.

---

## Important Points to Remember

*   **Units Consistency:** Always ensure that your units for flow, pressure, length, and diameter are consistent throughout the project.
*   **Node Elevations:** Accurately assigning node elevations is crucial for pressure calculations.
*   **Demand Patterns:** For EPS, correctly defined demand patterns are essential for realistic simulation of diurnal variations.
*   **Pump Curves:** Using appropriate pump curves for your selected pumps is vital for accurate pump operation simulation.
*   **Error Checking:** Pay close attention to EPANET's status messages for any errors or warnings. Resolve them before drawing conclusions.
*   **Sanity Checks:** Always perform sanity checks on your results. Do the pressures and flows make physical sense for the given network configuration?
*   **Model Simplification:** For learning purposes, start with simple networks and gradually increase complexity. Make reasonable assumptions where precise data is unavailable, but document them.
*   **Data Accuracy:** The accuracy of your simulation results is directly dependent on the accuracy of the input data.

---

This comprehensive study note provides a strong foundation for understanding and performing simulations of small water supply pipe networks using EPANET. Remember to practice regularly to build your skills and confidence.
