---
title: "(ii) To incorporate changes in basic topology."
subject: "POWER SYSTEM LAB"
module: "Module 1: Y"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367df"
status: "completed"
scrapedAt: "2026-05-23T16:30:39.775Z"
---
# POWER SYSTEM LAB: Module 1: Y - Incorporating Changes in Basic Topology

## Objective:
To incorporate changes in the basic topology of a power system network and analyze their impact on system performance.

## Introduction:
The "topology" of a power system refers to the configuration of its interconnected components, such as generators, transformers, transmission lines, and loads. Changes in this topology, such as adding or removing lines, transformers, or even generators, can significantly alter the power flow, voltage profiles, and overall stability of the system. This experiment aims to understand and quantify these impacts using simulation software.

## Key Concepts and Definitions:

*   **Power System Topology:** The physical and electrical arrangement of interconnected components in a power system. This includes the connectivity and types of elements.
*   **Basic Topology:** The initial, fundamental configuration of the power system network that serves as a baseline for comparison.
*   **Changes in Topology:** Modifications to the basic topology, such as:
    *   **Adding new components:** Incorporating new transmission lines, transformers, generators, or loads.
    *   **Removing existing components:** Disconnecting transmission lines, taking generators offline, or removing loads.
    *   **Changing component parameters:** Modifying impedance, voltage ratings, or power ratings of existing components (though this is more of a parameter change, it can be conceptually linked to altering the "connectivity effectiveness").
*   **Power Flow Analysis (Load Flow Analysis):** A numerical technique used to determine the steady-state operating conditions of a power system, including voltage magnitudes and angles, real and reactive power flows on lines, and power injections at buses. This is crucial for assessing the impact of topological changes.
*   **Steady State:** The condition of the power system where all variables (voltage, current, power) are constant with respect to time, assuming no disturbances.
*   **Bus (Node):** A point in the power system where two or more components are connected. Buses are classified based on their voltage and angle characteristics (e.g., Slack bus, PV bus, PQ bus).
*   **Transmission Line Impedance:** The resistance and reactance of a transmission line, which dictates the power transfer capability and voltage drop.
*   **Transformer Impedance:** The impedance of a transformer, which influences voltage transformation and power flow between different voltage levels.
*   **System Performance Metrics:** Quantifiable measures used to evaluate the power system's operation, including:
    *   **Voltage Profile:** The magnitude of voltage at each bus.
    *   **Power Flow:** The real and reactive power transmitted through transmission lines and delivered to loads.
    *   **Line Loading:** The percentage of the thermal capacity of a transmission line that is being utilized.
    *   **System Losses:** The total real and reactive power dissipated in the transmission network.

## Learning Outcomes (LO) Addressed:

This experiment directly addresses the following learning outcomes:

*   **LO (ii): To incorporate changes in basic topology.**
    *   This is the primary objective of the experiment. Students will learn how to modify the network configuration in simulation software.
*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (Knowledge Level: K3 - Application)
    *   **Mathematical Models:** By using simulation software, students are implicitly working with the underlying mathematical models of power system components (e.g., Y-bus matrix, load flow equations).
    *   **Steady State Analysis:** The core of this experiment involves conducting steady-state power flow analysis before and after topological changes. This allows for the comparison of system performance under different configurations.
    *   **Standard/Dedicated Software:** This experiment is typically performed using power system simulation software like PSS/E, ETAP, DIgSILENT PowerFactory, or MATLAB/Simulink.

## Practical Implementation Steps:

The general procedure for conducting this experiment will involve the following steps:

1.  **Familiarization with the Simulation Software:** Understand the interface and basic functionalities of the chosen power system simulation software.
2.  **Building the Basic Topology:** Construct the initial power system network in the software. This will typically involve:
    *   Defining buses with their voltage levels and types (Slack, PV, PQ).
    *   Adding generators, transformers, transmission lines, and loads to the respective buses.
    *   Specifying the parameters for each component (impedances, ratings, power output/demand).
3.  **Performing Baseline Power Flow Analysis:**
    *   Run a power flow study on the basic topology.
    *   Record key results such as bus voltages, voltage angles, line flows (MW, MVAR), and transformer flows.
    *   Calculate system losses.
4.  **Incorporating Topological Changes:** Modify the network by:
    *   **Adding a transmission line:** Connect two existing buses with a new line, specifying its impedance.
    *   **Removing a transmission line:** Disconnect an existing line between two buses.
    *   **Adding a transformer:** Connect two buses at different voltage levels with a new transformer, specifying its parameters.
    *   **Changing bus configuration:** For example, re-routing power flow by adding a line between previously unconnected buses.
5.  **Performing Power Flow Analysis after Changes:**
    *   Run a power flow study on the modified topology.
    *   Record the same key results as in step 3.
6.  **Comparison and Analysis:**
    *   Compare the results of the baseline analysis with the analysis after the topological changes.
    *   Analyze the impact of the changes on:
        *   Voltage magnitudes at various buses.
        *   Power flow distribution on transmission lines.
        *   Transformer loading.
        *   Total system losses.
        *   Potential overloading of lines or equipment.

## Examples of Topological Changes and Their Expected Impacts:

Let's consider a simple example of a 3-bus system:

**Basic Topology:**

*   Bus 1: Slack Bus (Generator G1)
*   Bus 2: PV Bus (Generator G2)
*   Bus 3: PQ Bus (Load L1)
*   Line 1-2: Transmission Line with impedance $Z_{12}$
*   Line 2-3: Transmission Line with impedance $Z_{23}$

**Scenario 1: Adding a transmission line between Bus 1 and Bus 3 ($Z_{13}$).**

*   **Change:** A new line is added connecting Bus 1 and Bus 3.
*   **Expected Impact:**
    *   **Power Flow:** Power flow from Bus 1 to Bus 3 will now have two paths: directly through the new line ($Z_{13}$) and indirectly through Bus 2 ($Z_{12} + Z_{23}$). This will likely reduce the power flow on line 1-2 and line 2-3.
    *   **Voltage Profile:** The voltage at Bus 3 might increase slightly due to the alternative power supply path.
    *   **System Losses:** System losses might decrease due to a more optimized power flow distribution, especially if the new line has a lower impedance.
    *   **Security:** The system becomes more robust, as power can still be supplied to Bus 3 even if line 1-2 or line 2-3 experiences an outage.

**Scenario 2: Removing the transmission line between Bus 2 and Bus 3 (Line 2-3).**

*   **Change:** Line 2-3 is disconnected.
*   **Expected Impact:**
    *   **Power Flow:** The load at Bus 3 will now have to be supplied from Bus 1 through Bus 2. This will significantly increase the power flow on line 1-2.
    *   **Voltage Profile:** The voltage at Bus 3 will likely drop due to the increased impedance in the path and potential overloading of line 1-2.
    *   **System Losses:** System losses might increase due to the higher current flowing through line 1-2.
    *   **Security:** The system's reliability is significantly reduced, as Bus 3 is now dependent on the uninterrupted operation of line 1-2. If line 1-2 fails, Bus 3 will lose its power supply.

**Scenario 3: Adding a Transformer between Bus 1 and Bus 3 (if Bus 1 and Bus 3 were at different voltage levels).**

*   **Change:** A transformer is added to connect Bus 1 and Bus 3.
*   **Expected Impact:**
    *   **Voltage Transformation:** This allows for power transfer between different voltage levels.
    *   **Power Flow:** Power will flow from the higher voltage bus to the lower voltage bus (or vice-versa, depending on the transformer connection and power flow direction).
    *   **System Interconnection:** This can be used to integrate different voltage-level networks or to reroute power flow more effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbook and Reference Book Content Incorporation:

This experiment directly relates to concepts covered in standard power system analysis textbooks. While specific page numbers are difficult to provide without knowing the exact edition and titles, the following concepts are typically covered:

*   **Power System Modeling:**
    *   **Y-Bus Matrix Formulation:** Textbooks like "Elements of Power System Analysis" by William D. Stevenson Jr. or "Power System Analysis and Design" by J. Duncan Glover, Mulukutla S. Sarma, and Theodore Overbye detail the formation of the admittance matrix (Y-bus) which represents the system connectivity and component admittances. Topological changes directly alter the structure of the Y-bus matrix. Adding a line between bus `i` and bus `j` adds $Y_{ij}$ and $Y_{ji}$ terms and modifies the diagonal elements $Y_{ii}$ and $Y_{jj}$. Removing a line removes these terms.
*   **Load Flow Studies:**
    *   **Newton-Raphson Method, Gauss-Seidel Method:** These iterative methods are used to solve the non-linear power flow equations. Understanding these methods helps in appreciating how the software arrives at the steady-state solution for different topologies. Chapters on load flow analysis in texts like "Modern Power Systems Analysis" by Steven Lapidot and Haifa Systems Ltd. or "Power System Analysis" by Hadi Saadat are relevant.
*   **System Performance Evaluation:**
    *   **Voltage Stability, Congestion Management:** The impact of topological changes on voltage profiles and line loading is a key aspect of system planning and operation, as discussed in various chapters on system operation and control.

## Important Points to Remember:

*   **Software Accuracy:** The results are dependent on the accuracy of the simulation software and the input data.
*   **Component Parameters:** Ensure that all component parameters (impedances, ratings) are correctly entered in the software.
*   **Bus Classification:** The correct classification of buses (Slack, PV, PQ) is crucial for the load flow solution.
*   **Load Flow Convergence:** Some topological changes might lead to convergence issues in the load flow solution, indicating an unstable or unfeasible operating point. This itself is an important observation.
*   **Thermal Limits:** Always check if any line or transformer is overloaded (exceeding its thermal capacity) after a topological change.
*   **System Stability:** While this experiment focuses on steady-state, significant topological changes can impact transient stability, which would require dynamic simulations.

## Practice Questions and Exercises:

**Exercise 1:**

Consider a simple 3-bus system with the following data:

*   **Bus 1:** Slack Bus, $V_1 = 1.05 \angle 0^\circ$ pu
*   **Bus 2:** PV Bus, $P_{G2} = 0.5$ pu, $V_2 = 1.04$ pu
*   **Bus 3:** PQ Bus, $P_{L3} = 0.8$ pu, $Q_{L3} = 0.4$ pu

*   **Line 1-2:** $Z_{12} = 0.02 + j0.08$ pu
*   **Line 2-3:** $Z_{23} = 0.03 + j0.12$ pu

**(a)** Build this basic topology in your simulation software.
**(b)** Perform a power flow analysis and record the voltage magnitudes and angles at all buses, and the real and reactive power flow on lines 1-2 and 2-3. Calculate system losses.
**(c)** Now, add a transmission line between Bus 1 and Bus 3 with impedance $Z_{13} = 0.02 + j0.06$ pu.
**(d)** Perform a power flow analysis on the new topology. Record the same parameters as in (b).
**(e)** Compare the results from (b) and (d). Discuss the impact of adding the line 1-3 on voltage profiles, line flows, and system losses.

**Answer to Exercise 1 (Illustrative, actual values depend on software and load flow method):**

**(b) Baseline Analysis (Illustrative):**
*   Bus 1: $V_1 = 1.050 \angle 0.00^\circ$ pu
*   Bus 2: $V_2 = 1.040 \angle -3.50^\circ$ pu (Voltage magnitude and angle will be solved for)
*   Bus 3: $V_3 = 1.025 \angle -6.80^\circ$ pu (Voltage magnitude and angle will be solved for)
*   Line 1-2 Flow: $P_{12} = 0.60$ pu, $Q_{12} = 0.20$ pu
*   Line 2-3 Flow: $P_{23} = 0.55$ pu, $Q_{23} = 0.25$ pu
*   System Losses: $P_{Loss} = 0.05$ pu, $Q_{Loss} = 0.05$ pu

**(d) Analysis after adding Line 1-3 (Illustrative):**
*   Bus 1: $V_1 = 1.050 \angle 0.00^\circ$ pu
*   Bus 2: $V_2 = 1.042 \angle -3.20^\circ$ pu (Voltage magnitudes and angles will shift)
*   Bus 3: $V_3 = 1.030 \angle -6.50^\circ$ pu (Voltage magnitudes and angles will shift)
*   Line 1-2 Flow: $P_{12} = 0.50$ pu, $Q_{12} = 0.15$ pu
*   Line 2-3 Flow: $P_{23} = 0.48$ pu, $Q_{23} = 0.20$ pu
*   Line 1-3 Flow: $P_{13} = 0.30$ pu, $Q_{13} = 0.10$ pu
*   System Losses: $P_{Loss} = 0.04$ pu, $Q_{Loss} = 0.04$ pu

**(e) Comparison and Discussion:**
The addition of line 1-3 provides an alternative path for power to reach Bus 3. Consequently, the power flow on lines 1-2 and 2-3 decreases. The voltage at Bus 3 has slightly increased. System losses have also decreased due to a more balanced distribution of power flow. The system is now more robust as Bus 3 has multiple sources of power supply.

**Exercise 2:**

Using the same basic topology as in Exercise 1, now perform the following change:

**(a)** Remove the transmission line between Bus 1 and Bus 2 (Line 1-2).
**(b)** Perform a power flow analysis and record the same parameters as in Exercise 1 (b).
**(c)** Compare the results from Exercise 1 (b) and your analysis in (b). Discuss the impact of removing line 1-2 on voltage profiles, line flows, and system losses. What are the implications for system security?

**Answer to Exercise 2 (Illustrative):**

**(b) Analysis after removing Line 1-2 (Illustrative):**
*   Bus 1: $V_1 = 1.050 \angle 0.00^\circ$ pu
*   Bus 2: Bus 2 might now lose its direct connection to Bus 1. If Bus 2 has no generation of its own or other interconnections, the load at Bus 3 would become unserved unless Bus 2 is also a generator bus. Assuming Bus 2 has generation, it would still be difficult to supply Bus 3 directly from Bus 1 without line 1-2. The power flow calculation might fail or result in very low voltages at Bus 3.
*   If we assume Bus 2 also has a generator and is now isolated from Bus 1 but still connected to Bus 3 via Line 2-3:
    *   Bus 1: $V_1 = 1.050 \angle 0.00^\circ$ pu
    *   Bus 2: $V_2 = 1.020 \angle -5.00^\circ$ pu (Voltage will drop significantly if it's trying to supply load without a strong connection to the slack bus)
    *   Bus 3: $V_3 = 0.980 \angle -7.50^\circ$ pu (Voltage will drop significantly)
    *   Line 1-2 Flow: $0$ pu (since removed)
    *   Line 2-3 Flow: $P_{23} = 0.40$ pu, $Q_{23} = 0.15$ pu (significantly reduced)
    *   System Losses: Might decrease due to reduced overall power flow.

**(c) Comparison and Discussion:**
Removing line 1-2 severely isolates Bus 3 from the main grid (Bus 1). If Bus 2 has generation, it can only supply its local loads and Bus 3 to a limited extent. The voltage at Bus 3 drops significantly, and the power flow on the remaining line (2-3) is reduced because it's less effectively supplied. System security is drastically reduced, as any outage on line 2-3 would mean a complete loss of power to Bus 3. This scenario highlights the importance of network redundancy.

---

This comprehensive set of notes should provide a solid foundation for understanding and performing the experiment on incorporating changes in basic power system topology. Remember to refer to your specific lab manual and simulation software documentation for precise instructions and data.