---
title: "Sign conventions"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bb0"
status: "completed"
scrapedAt: "2026-05-20T18:08:01.380Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 1: Introduction: Energy Scenario: India and World

### Topic: Sign Conventions

**Learning Outcomes:**

*   Understand the fundamental principles of energy flow and energy balance in solar energy systems.
*   Apply consistent sign conventions for various energy transfer mechanisms and quantities.
*   Interpret and analyze energy data and performance metrics using established sign conventions.

---

### 1. Importance of Sign Conventions

In the study of solar energy, particularly when analyzing energy flows, heat transfer, and system performance, a consistent and well-defined system of sign conventions is crucial. This ensures that:

*   **Clarity and Unambiguity:** Prevents misinterpretation of energy gains and losses.
*   **Accuracy in Calculations:** Leads to correct mathematical formulations and predictions.
*   **Comparability:** Allows for meaningful comparison of different systems and technologies.
*   **Understanding of Thermodynamics:** Aligns with fundamental thermodynamic principles where energy entering a system is positive and energy leaving is negative.

**Reference:** Sukhatme's "Solar Energy" emphasizes the importance of adhering to established conventions in thermodynamics and heat transfer for accurate system analysis. (Sukhatme, Chapter 2)

---

### 2. General Principles of Sign Convention in Thermodynamics and Heat Transfer

The most widely accepted sign convention, aligned with the First Law of Thermodynamics, is as follows:

*   **Energy Entering a System:** Taken as **positive (+)**. This includes heat absorbed by the system and work done *on* the system.
*   **Energy Leaving a System:** Taken as **negative (-)**. This includes heat rejected by the system and work done *by* the system.

This convention is fundamental to understanding energy balance equations for any system, including solar collectors and storage devices.

**Reference:** Goswami, Kreith, and Kreider's "Principles of Solar Engineering" extensively uses this thermodynamic convention when discussing energy balances for solar systems. (Goswami et al., Chapter 3)

---

### 3. Specific Sign Conventions in Solar Energy Systems

While the general thermodynamic convention is overarching, specific contexts in solar energy require careful application:

#### 3.1. Solar Radiation

When dealing with solar radiation incident on a surface, the convention generally considers the **incoming solar radiation as positive**. This is the energy *entering* the system (e.g., the collector surface).

*   **Incident Solar Radiation (G or I):** The total radiation falling on a surface. Conventionally positive.
    *   *Example:* Solar irradiance measured in W/m². A value of 1000 W/m² means 1000 W of solar power is incident per square meter.

**Reference:** Tiwari's "Handbook of Solar Energy" defines incident radiation as the input energy to the solar system and treats it as positive. (Tiwari, Chapter 4)

#### 3.2. Heat Transfer

The direction of heat flow dictates the sign convention.

*   **Heat Absorbed by the System (Q_in, Q_gain):** Heat entering the system. Conventionally **positive (+)**.
    *   *Example:* Heat absorbed by a flat plate collector from the sun and converted into thermal energy.
*   **Heat Lost from the System (Q_out, Q_loss):** Heat leaving the system to the surroundings. Conventionally **negative (-)**.
    *   *Example:* Heat lost from the collector surface to the ambient air due to convection and radiation.

**Energy Balance Equation for a Solar Collector:**

The net energy gained by the collector can be expressed as:

$Q_{gain} = Q_{incident} - Q_{loss}$

Using the sign convention:

$Q_{net} = (\text{Energy In}) - (\text{Energy Out})$
$Q_{net} = (+Q_{incident}) - (-Q_{loss})$  (If losses are treated as negative output)

Alternatively, and more commonly:

$Q_{net} = Q_{useful} = G \times A_c \times \alpha - Q_{loss}$

Where:
*   $Q_{useful}$ is the useful heat gained by the working fluid.
*   $G$ is the incident solar irradiance (positive).
*   $A_c$ is the collector area.
*   $\alpha$ is the absorptivity of the collector surface.
*   $Q_{loss}$ represents the total heat losses (conventionally treated as a positive value representing the magnitude of loss, and subtracted from the absorbed solar energy).

A more rigorous application of the thermodynamic convention would look at the energy balance of the *fluid* within the collector:

$Q_{useful} = \dot{m} c_p (T_{out} - T_{in})$

Here, if $T_{out} > T_{in}$, the fluid has gained energy, and $Q_{useful}$ is positive, indicating heat absorbed by the fluid. If the problem statement defines $Q_{loss}$ as energy *leaving* the system, it would be negative. However, in practical solar engineering analysis, $Q_{loss}$ is often used to represent the *magnitude* of heat loss, and the equation is written as:

$Q_{useful} = (\text{Solar Energy Absorbed}) - (\text{Total Heat Losses})$

**Reference:** Messenger and Ventre's "Photovoltaic Systems Engineering" often deals with energy flows within PV panels, where incident solar radiation is positive and electrical power output is positive (as it leaves the panel for the load). Heat losses from the panel would be negative if considered as an output. (Messenger & Ventre, Chapter 5)

#### 3.3. Work Transfer

*   **Work Done *by* the System (W_out):** Conventionally **positive (+)**.
    *   *Example:* Electrical work produced by a PV system or mechanical work from a solar thermal power plant.
*   **Work Done *on* the System (W_in):** Conventionally **negative (-)**.
    *   *Example:* Work done by a pump to circulate fluid in a solar thermal system.

**First Law of Thermodynamics (for a closed system):**

$\Delta U = Q - W$

Where:
*   $\Delta U$ is the change in internal energy.
*   $Q$ is the net heat added to the system.
*   $W$ is the net work done *by* the system.

If we follow the convention where energy entering is positive and leaving is negative:
*   Heat added ($Q$) is positive.
*   Work done *by* the system ($W_{out}$) is positive.
*   Work done *on* the system ($W_{in}$) is negative.

So, the equation remains $\Delta U = Q - W$. If work is done *on* the system ($W_{in}$), then $W$ in the equation would be $-W_{in}$, making $\Delta U = Q - (-W_{in}) = Q + W_{in}$, which is consistent.

**Reference:** Boyle's "Renewable Energy" often discusses energy conversion, where energy inputs (like solar radiation) are positive and useful energy outputs (like electricity) are also positive. (Boyle, Chapter 3)

#### 3.4. Electrical Systems (Photovoltaics)

For photovoltaic systems, the primary energy flow is from solar radiation to electrical power.

*   **Incident Solar Radiation:** Positive.
*   **Electrical Power Output ($P_{out}$):** The electrical power generated by the PV panel, delivered to the load or grid. Conventionally **positive (+)**. This is energy leaving the system *as useful work*.
*   **Electrical Power Input ($P_{in}$):** If the system consumes power (e.g., for auxiliary components), it's conventionally **negative (-)**.
*   **Heat Loss from PV Panel:** Similar to thermal collectors, heat leaving the PV panel is conventionally **negative (-)**.

**Energy Balance for a PV Panel (simplified):**

$G \times A_p - P_{out} - Q_{loss} = \Delta E_{stored}$ (if there's energy storage within the panel itself)

Using thermodynamic signs:
*   $G \times A_p$: Solar energy absorbed (positive).
*   $P_{out}$: Electrical energy leaving as useful work (positive).
*   $Q_{loss}$: Heat energy leaving (negative).

So, the energy balance of the panel itself would be:
$Q_{absorbed} - W_{out} - Q_{out} = \Delta U_{panel}$
$(G \times A_p \times \alpha) - P_{out} - Q_{loss} = \Delta U_{panel}$

**Reference:** Solanki's "Solar Photovoltaic Technology and Systems" provides clear diagrams and equations for PV system energy balances, consistently treating incident solar radiation and electrical output as positive energy flows. (Solanki, Chapter 4)

#### 3.5. Storage Systems (e.g., Batteries, Thermal Storage)

*   **Energy Stored:** When energy is added to the storage system, the change in stored energy is **positive (+)**.
*   **Energy Delivered from Storage:** When energy is withdrawn from the storage system, it's considered an output, and the energy delivered is **positive (+)**.

**Example: Battery Charging and Discharging**

*   **Charging:** Electrical energy entering the battery. $Q_{charge}$ is positive (if considering heat transfer convention, though typically current and voltage are used). If considering electrical power $P_{charge}$, it's power *into* the battery.
*   **Discharging:** Electrical energy leaving the battery as useful output. $P_{discharge}$ is positive (power *out* of the battery).

**Reference:** Luque and Hegedus's "Handbook of Photovoltaic Science and Engineering" discusses energy storage integration and the accounting of energy flows into and out of storage devices. (Luque & Hegedus, Chapter 16)

---

### 4. Key Takeaways and Important Points to Remember

*   **Consistency is Paramount:** Always stick to the chosen sign convention throughout your analysis.
*   **Thermodynamic Convention as Foundation:** Energy entering a system is positive (+), and energy leaving is negative (-). This is crucial for energy balance equations.
*   **Solar Radiation:** Incident solar radiation on a surface is generally treated as a positive energy input.
*   **Useful Energy Output:** Useful energy outputs (like electrical power from PV, or useful heat gain from a collector) are typically considered positive, as they represent energy that has successfully performed its intended function and left the primary system boundary for the load.
*   **Losses:** Energy losses (heat, friction, etc.) are typically energy leaving the system and are therefore negative. However, in many engineering formulations, the *magnitude* of the loss is subtracted from the gain.
*   **System Boundary:** Clearly define the system boundary for which the energy balance is being performed. The sign of energy transfer depends on whether it's entering or leaving this defined boundary.

---

### 5. Practice Questions

**Question 1:**

A solar flat plate collector has an area of 2 m². The incident solar irradiance on the collector surface is 800 W/m². The collector absorbs 70% of this incident radiation. The collector loses 150 W of heat to the surroundings. What is the useful energy gained by the collector in Watts?

**Answer:**

*   Incident Solar Radiation = $800 \text{ W/m}^2 \times 2 \text{ m}^2 = 1600 \text{ W}$
*   Absorbed Solar Radiation = $1600 \text{ W} \times 0.70 = 1120 \text{ W}$ (This is energy entering the collector as heat)
*   Heat Loss = $150 \text{ W}$ (This is energy leaving the collector)

Using the convention:
Useful Energy Gain = (Energy Absorbed) - (Heat Loss)
Useful Energy Gain = $1120 \text{ W} - 150 \text{ W} = 970 \text{ W}$

This useful energy gain is positive, as it's the net energy absorbed by the working fluid.

**Question 2:**

A photovoltaic panel receives solar irradiance of 1000 W/m² over its surface area of 1.6 m². The panel converts 18% of this energy into electrical power. It also loses 50 W of heat to the environment. Calculate the total energy output from the panel in Watts, adhering to standard thermodynamic sign conventions for energy flows.

**Answer:**

*   Total Incident Solar Energy = $1000 \text{ W/m}^2 \times 1.6 \text{ m}^2 = 1600 \text{ W}$ (Positive input)
*   Electrical Power Output = $1600 \text{ W} \times 0.18 = 288 \text{ W}$ (Positive output as useful work)
*   Heat Loss = $50 \text{ W}$ (This is energy leaving the panel, so it's a negative term in the energy balance equation for the panel itself)

Let's consider the energy balance of the panel itself:
$E_{in} = E_{out} + E_{loss}$
$Q_{absorbed} = P_{electrical, out} + Q_{heat, loss}$

Here, $Q_{absorbed}$ is the solar energy captured, which is $1600 \times \alpha$. Assuming $\alpha$ is implicitly included in the efficiency calculation or that the 1000 W/m² is what's effectively absorbed for conversion:

If we consider the energy balance of the panel as a system:
Solar Energy Absorbed = $1600 \text{ W}$ (Positive input)
Electrical Power Output = $288 \text{ W}$ (Positive output - useful work)
Heat Loss = $-50 \text{ W}$ (Negative output - heat leaving)

Total energy account of the panel:
$1600 \text{ W} + (-50 \text{ W}) = \text{Energy Conversion} + \text{Heat Loss}$
$1600 \text{ W} - 50 \text{ W} = 288 \text{ W} + 50 \text{ W}$ (This is incorrect, it implies conservation of total energy, not net output)

Correct approach:
Energy balance for the panel:
Energy Absorbed (from Sun) - Energy Lost (as heat) = Energy Converted (to electricity) + Change in stored energy (assumed zero for steady state)

$Q_{incident, total} \times \alpha - Q_{heat, loss} = P_{electrical, out}$

Assuming the 18% efficiency is applied to the incident radiation that is effectively available for conversion:

$1600 \text{ W}$ (incident)
$1600 \text{ W} \times 0.18 = 288 \text{ W}$ (electrical output, positive)
$50 \text{ W}$ (heat loss, negative contribution to useful output, or positive magnitude of loss)

The "total energy output" typically refers to the useful energy delivered. In this case, it's the electrical power.

Total useful energy output (as defined by the task) = Electrical Power Output = **288 W**

If the question implies the net energy leaving the system boundary in any form:
Net Energy Leaving = Electrical Output + Heat Output
Net Energy Leaving = $288 \text{ W} + 50 \text{ W} = 338 \text{ W}$

However, in the context of solar energy systems, "output" usually refers to the intended useful output, which is electricity in this PV case. The sign convention is applied to accounting for energy flows *within* an energy balance equation.

**Let's re-evaluate Question 2's intent:** If it asks for the total energy *output* from the panel, it means the sum of all useful energy leaving the panel. In this case, it's primarily electrical. Heat loss is energy *leaving* but not considered "useful output." If the question implies accounting for all energy leaving the panel, then it's electrical + thermal loss. Given the context of energy conservation, it's important to be precise. The most common interpretation of "energy output" from a PV panel is the electrical power generated.

**Refined Answer for Question 2:**
The useful energy output from the PV panel is the electrical power generated.
Electrical Power Output = $1600 \text{ W} \times 0.18 = 288 \text{ W}$. This is positive, as it's a useful energy output.
Heat loss is $50 \text{ W}$. If we consider the energy balance of the panel itself:
Energy In (Solar) = Energy Out (Electrical) + Energy Out (Heat)
$1600 \text{ W} \times \alpha$ (where $\alpha$ is absorptivity, assume efficiency accounts for it) = $288 \text{ W} + 50 \text{ W}$
$1600 \text{ W} \times \alpha = 338 \text{ W}$
$\alpha = 338/1600 \approx 0.21$ (This implies a very low absorptivity or efficiency if 18% is of incident, or that 18% is net of losses, which is unlikely).

Let's assume the 18% efficiency is applied to the incident radiation that is available for conversion:
Energy available for conversion = $1600 \text{ W}$
Electrical Power Output = $1600 \text{ W} \times 0.18 = 288 \text{ W}$ (This is the useful energy output, treated as positive).
Heat loss of $50 \text{ W}$ is energy leaving the system, so if writing an energy balance for the panel, it would be $-50 \text{ W}$.

The question asks for "total energy output". This is ambiguous. If it means the total useful energy, it's 288W. If it means all energy that has left the panel's boundary, it's 288W (electrical) + 50W (heat) = 338W.

For clarity in typical solar energy coursework, "output" usually refers to the desired, useful output.

**Final Answer for Q2:** The useful energy output from the panel is **288 W**.

**Question 3 (Conceptual):**

In a solar thermal system, if the working fluid enters the collector at 30°C and leaves at 60°C, is the useful heat gain by the fluid positive or negative according to the thermodynamic convention? Explain why.

**Answer:**

The useful heat gain by the fluid is **positive**.
**Explanation:** The fluid has undergone a temperature increase. This means the fluid has gained internal energy. According to the thermodynamic convention, an increase in a system's internal energy, achieved by receiving energy (in this case, heat from the collector absorber plate), is represented by a positive value. The useful heat gain ($Q_{useful}$) is calculated as $\dot{m} c_p (T_{out} - T_{in})$. Since $T_{out} > T_{in}$, $(T_{out} - T_{in})$ is positive, making $Q_{useful}$ positive.

---

This concludes the notes on sign conventions for Module 1. Understanding these conventions is foundational for all subsequent energy balance calculations and system analysis in solar energy conservation systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
