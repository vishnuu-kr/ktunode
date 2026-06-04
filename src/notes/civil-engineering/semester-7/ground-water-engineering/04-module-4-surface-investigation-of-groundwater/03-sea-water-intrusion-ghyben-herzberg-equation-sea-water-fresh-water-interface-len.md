---
title: "Sea water intrusion- Ghyben-Herzberg equation, sea water-fresh water interface, length of intrusion, upconing, preventive measures.( Problems from sea water intrusion)"
subject: "GROUND WATER ENGINEERING"
module: "Module 4: Surface investigation of groundwater"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81153c"
status: "completed"
scrapedAt: "2026-05-20T19:00:09.357Z"
---
# Ground Water Engineering: Module 4 - Surface Investigation of Groundwater

## Topic: Sea Water Intrusion

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the phenomenon of seawater intrusion into coastal aquifers.
*   Explain the principles behind the Ghyben-Herzberg equation.
*   Determine the position of the saltwater-freshwater interface.
*   Calculate the length of seawater intrusion.
*   Understand the concept and causes of upconing.
*   Identify and explain various preventive measures against seawater intrusion.
*   Solve practical problems related to seawater intrusion.

---

### 1. Introduction to Sea Water Intrusion

#### 1.1 What is Sea Water Intrusion?

*   **Definition:** Sea water intrusion is the lateral or vertical movement of saline groundwater into freshwater aquifers, typically occurring in coastal areas.
*   **Causes:**
    *   **Over-pumping of Freshwater:** Lowering the freshwater hydraulic head in coastal wells reduces the pressure that normally holds back the denser seawater. This creates a hydraulic gradient that draws seawater inland.
    *   **Reduced Freshwater Recharge:** Decreased rainfall, diversion of surface water for other uses, or increased evaporation can lower the freshwater table, weakening the barrier against seawater.
    *   **Sea Level Rise:** Rising sea levels increase the hydraulic head of seawater in coastal areas, pushing it further into freshwater aquifers.
    *   **Construction of Canals/Ditches:** Artificial channels can act as direct conduits for seawater to reach inland aquifers.

#### 1.2 Why is it a Problem?

*   **Contamination of Drinking Water:** Saline water makes groundwater unusable for drinking purposes, impacting public health and water supply.
*   **Impact on Agriculture:** Salinity can harm crops, reducing agricultural productivity and economic viability.
*   **Damage to Ecosystems:** Saltwater can disrupt delicate coastal ecosystems, affecting freshwater-dependent flora and fauna.
*   **Economic Losses:** Costs associated with treating contaminated water, finding alternative water sources, and lost agricultural revenue.

---

### 2. The Ghyben-Herzberg Equation

#### 2.1 Principles of Buoyancy

*   **Density Difference:** Seawater is denser than freshwater due to its higher salt content.
    *   Density of Freshwater ($\rho_f$): Approximately $1000 \, \text{kg/m}^3$
    *   Density of Seawater ($\rho_s$): Approximately $1025 \, \text{kg/m}^3$
*   **Pressure Balance:** In coastal aquifers, a balance exists between the hydrostatic pressure exerted by the freshwater lens and the hydrostatic pressure exerted by the seawater wedge.
*   **Interface:** The boundary between freshwater and saltwater is called the saltwater-freshwater interface.

#### 2.2 The Ghyben-Herzberg Equation

This equation describes the relationship between the freshwater head and the position of the saltwater-freshwater interface in a **vertical well** or at a **vertical shoreline**.

**Derivation (Conceptual):**

Consider a point on the saltwater-freshwater interface.
The pressure at this point due to the freshwater column above it must equal the pressure at the same elevation due to the seawater column.

*   Let $z_f$ be the height of the freshwater table above a reference datum (e.g., sea level).
*   Let $z_s$ be the depth of the saltwater-freshwater interface below the same reference datum.
*   The freshwater pressure at the interface (at depth $z_s$ below sea level) is proportional to $\rho_f \times g \times (z_f + z_s)$, where $g$ is the acceleration due to gravity.
*   The seawater pressure at the same elevation is proportional to $\rho_s \times g \times z_s$.

Equating these pressures:
$\rho_f \times g \times (z_f + z_s) = \rho_s \times g \times z_s$

Simplifying by canceling $g$:
$\rho_f (z_f + z_s) = \rho_s z_s$
$\rho_f z_f + \rho_f z_s = \rho_s z_s$
$\rho_f z_f = \rho_s z_s - \rho_f z_s$
$\rho_f z_f = z_s (\rho_s - \rho_f)$

Therefore, the depth of the saltwater-freshwater interface ($z_s$) is given by:

$$z_s = z_f \frac{\rho_f}{\rho_s - \rho_f}$$

This is the Ghyben-Herzberg equation.

#### 2.3 Relationship to Freshwater Head

*   **$z_f$**: Represents the height of the freshwater table **above sea level**.
*   **$z_s$**: Represents the depth of the saltwater-freshwater interface **below sea level**.
*   **Density Ratio ($\frac{\rho_f}{\rho_s - \rho_f}$)**: This ratio is often called the **Buoyancy Ratio** or **Specific Gravity Ratio**. It quantifies how much deeper the freshwater table needs to be to support the freshwater column against the denser seawater.

**Common Approximation:**
The density difference between seawater and freshwater is typically around 25 kg/m³ (using $\rho_f = 1000$ and $\rho_s = 1025$).
So, the density ratio is approximately:
$\frac{1000}{1025 - 1000} = \frac{1000}{25} = 40$

This means that for every 1 meter rise in the freshwater table above sea level, the saltwater-freshwater interface will be found approximately 40 meters below sea level.

**Important Note:** The Ghyben-Herzberg equation is a simplified model and assumes:
*   A sharp interface between freshwater and saltwater (no transition zone).
*   Unconfined aquifer conditions.
*   Hydrostatic equilibrium (no groundwater flow).
*   Infinite aquifer extent.

---

### 3. Sea Water-Fresh Water Interface

#### 3.1 The Freshwater Lens

*   **Concept:** In coastal areas, a body of freshwater floats on the denser seawater, forming a "freshwater lens."
*   **Shape:** In unconfined aquifers, the interface is typically curved, rising towards the shore and dipping downwards offshore.
*   **Ghyben-Herzberg Application:** The equation provides a simplification for the depth of this interface, particularly at the shore or in the vicinity of a vertical boundary.

#### 3.2 Interface in Confined Aquifers

*   In confined aquifers, the interface is more complex. If the confining layer is permeable, seawater can still intrude.
*   The Ghyben-Herzberg equation can be adapted by considering the pressure head in the confined aquifer relative to sea level.

---

### 4. Length of Intrusion

#### 4.1 Factors Influencing Length

The horizontal distance inland that seawater intrudes depends on several factors:

*   **Freshwater Hydraulic Head ($z_f$)**: Higher freshwater head pushes seawater further offshore.
*   **Aquifer Properties**:
    *   **Hydraulic Conductivity (K)**: Higher conductivity allows for more groundwater flow, which can help maintain the freshwater barrier.
    *   **Porosity ($\phi$)**: Affects storage and flow.
    *   **Aquifer Thickness (b)**: A thicker aquifer can support a larger freshwater lens.
*   **Recharge Rate**: Higher recharge increases the freshwater head.
*   **Discharge to the Sea**: Natural discharge of freshwater into the ocean helps to flush out intruding seawater.
*   **Pumping Rate**: Increased pumping in coastal wells reduces the freshwater head and extends intrusion.
*   **Sea Level**: Higher sea level pushes the interface inland.

#### 4.2 Empirical and Analytical Solutions

*   **Empirical Formulas:** Based on observations and statistical analysis.
*   **Analytical Solutions:** More complex mathematical models that consider hydraulic conductivity, recharge, and discharge. These often lead to equations that describe the shape and extent of the freshwater lens.

**Simplified Example for Horizontal Length ($L$) (Conceptual):**

For a simplified scenario (e.g., a uniform aquifer with a constant recharge rate and discharge to the sea), analytical solutions exist. These often involve balancing the freshwater flow driving inland with the forces pushing the interface offshore.

One such simplified equation derived by **Kohler** (and others) for the horizontal extent of the saltwater wedge ($L$) in a confined aquifer with a recharge source upstream and discharging to the sea is approximately:

$$L \approx \frac{Q_f}{K b \frac{\Delta\rho}{\rho_f}}$$

Where:
*   $Q_f$ is the freshwater flow rate per unit width.
*   $K$ is the hydraulic conductivity.
*   $b$ is the aquifer thickness.
*   $\frac{\Delta\rho}{\rho_f}$ is the density ratio (similar to the Ghyben-Herzberg ratio).

**Note:** This is a highly simplified representation. Real-world calculations involve more complex flow nets and numerical modeling.

---

### 5. Upconing

#### 5.1 What is Upconing?

*   **Definition:** Upconing is the upward movement of a deeper saline or poorer quality water into a shallower aquifer or cone of depression created by pumping from a well. This is distinct from horizontal intrusion, but often occurs in conjunction with it, especially when pumping from wells located near the saltwater-freshwater interface.
*   **Cause:** Pumping a well in an aquifer that has a layer of denser, poorer quality water beneath it (like a saline water body or an aquitard with saline pore water). When a well pumps freshwater from the upper aquifer, it lowers the hydraulic head in that aquifer. If the pumping rate is too high, the pressure exerted by the overlying freshwater column is insufficient to hold back the denser water below. This causes the interface to bulge upwards, forming a "cone" of saline water that can reach the pumping well.

#### 5.2 Factors Influencing Upconing

*   **Pumping Rate:** Higher pumping rates increase the drawdown and the likelihood of upconing.
*   **Depth of Pumping Well:** Wells screened too close to the saline water interface are more susceptible.
*   **Thickness of the Freshwater Aquifer:** A thicker freshwater layer provides more buffer.
*   **Density Contrast:** The greater the density difference between the waters, the more prone to upconing.
*   **Aquifer Properties:** Hydraulic conductivity influences the rate of drawdown.
*   **Impermeable Layers:** The presence of impermeable layers can trap saline water and exacerbate upconing.

#### 5.3 Prevention of Upconing

*   **Control Pumping Rate:** Reduce pumping rates to maintain a sufficient buffer of freshwater above the saline water.
*   **Well Design:**
    *   **Screening:** Screen wells in the upper parts of the freshwater aquifer, away from the interface.
    *   **Multiple Wells:** Distribute pumping among multiple wells to reduce drawdown in any single area.
    *   **Recharge Wells:** In some cases, injecting freshwater can help maintain the freshwater lens.
*   **Monitoring:** Regularly monitor water quality from wells to detect early signs of upconing.
*   **Artificial Recharge:** Injecting freshwater into the aquifer can help push the saline water back down.
*   **Well Depth:** Consider shallow wells instead of deep wells if the risk of upconing is high.

---

### 6. Preventive Measures Against Sea Water Intrusion

These measures aim to either reduce the driving forces for intrusion or create barriers to its movement.

#### 6.1 Reducing Pumping Stress

*   **Optimized Pumping Schedules:** Avoid continuous heavy pumping, especially in coastal areas.
*   **Water Conservation:** Reduce overall demand to lessen the need for pumping.
*   **Alternative Water Sources:** Develop surface water sources or desalination plants where feasible.
*   **Inter-basin Transfer:** Transporting water from areas with abundant freshwater.

#### 6.2 Artificial Recharge

*   **Purpose:** To replenish the freshwater aquifer and increase the freshwater hydraulic head, pushing back the saltwater interface.
*   **Methods:**
    *   **Injection Wells:** Injecting freshwater directly into the aquifer.
    *   **Recharge Basins/Pits:** Allowing surface water to infiltrate into the aquifer.
    *   **Spreading Grounds:** Similar to recharge basins, designed for efficient infiltration.

#### 6.3 Physical Barriers

*   **Seawalls/Dikes:** Can provide some protection against direct inundation, but do not prevent diffusion or flow through the aquifer.
*   **Sheet Piles/Grout Curtains:** Installing impermeable barriers underground to block the lateral movement of saline water. These can be expensive and may not be completely effective over the long term.
*   **Subsurface Dams:** Constructing impermeable barriers across the flow path of groundwater.

#### 6.4 Managed Aquifer Recharge (MAR) with Freshwater Barriers

*   **Purpose:** Creating a "freshwater barrier" by injecting freshwater in a line parallel to the coast. This creates a zone of higher freshwater head that resists the inland movement of seawater.

#### 6.5 Desalination

*   **Purpose:** Treating saline water to make it potable. While not a preventive measure for intrusion itself, it provides an alternative water source, reducing the reliance on potentially intruded freshwater.

#### 6.6 Monitoring and Management

*   **Salinity Monitoring:** Regular monitoring of groundwater salinity in coastal wells is crucial to detect intrusion early.
*   **Piezometric Monitoring:** Measuring water levels in observation wells to track changes in the freshwater table.
*   **Integrated Water Resource Management:** Holistic planning that considers all aspects of water use and management in coastal areas.

---

### 7. Practice Problems (Sea Water Intrusion)

**Problem 1: Ghyben-Herzberg Application**

In a coastal area, the freshwater table in an unconfined aquifer is observed to be 3 meters above mean sea level. Assuming freshwater density ($\rho_f$) of $1000 \, \text{kg/m}^3$ and seawater density ($\rho_s$) of $1025 \, \text{kg/m}^3$, calculate the depth of the saltwater-freshwater interface below mean sea level at this location using the Ghyben-Herzberg equation.

**Solution 1:**

*   Freshwater head ($z_f$) = 3 m
*   $\rho_f = 1000 \, \text{kg/m}^3$
*   $\rho_s = 1025 \, \text{kg/m}^3$

Using the Ghyben-Herzberg equation:
$$z_s = z_f \frac{\rho_f}{\rho_s - \rho_f}$$
$$z_s = 3 \, \text{m} \times \frac{1000 \, \text{kg/m}^3}{1025 \, \text{kg/m}^3 - 1000 \, \text{kg/m}^3}$$
$$z_s = 3 \, \text{m} \times \frac{1000}{25}$$
$$z_s = 3 \, \text{m} \times 40$$
$$z_s = 120 \, \text{m}$$

Therefore, the saltwater-freshwater interface is approximately 120 meters below mean sea level.

**Problem 2: Impact of Pumping on Interface Depth**

Consider the same aquifer as in Problem 1. A pumping well is installed, causing the freshwater table to drop to 1 meter above mean sea level. Calculate the new depth of the saltwater-freshwater interface below mean sea level.

**Solution 2:**

*   New freshwater head ($z_f$) = 1 m
*   $\rho_f = 1000 \, \text{kg/m}^3$
*   $\rho_s = 1025 \, \text{kg/m}^3$

Using the Ghyben-Herzberg equation:
$$z_s = z_f \frac{\rho_f}{\rho_s - \rho_f}$$
$$z_s = 1 \, \text{m} \times \frac{1000 \, \text{kg/m}^3}{1025 \, \text{kg/m}^3 - 1000 \, \text{kg/m}^3}$$
$$z_s = 1 \, \text{m} \times \frac{1000}{25}$$
$$z_s = 1 \, \text{m} \times 40$$
$$z_s = 40 \, \text{m}$$

The saltwater-freshwater interface is now 40 meters below mean sea level. This demonstrates how reducing the freshwater head brings the saltwater interface closer to the surface, increasing the risk of intrusion.

**Problem 3: Upconing Scenario**

A well is drilled into a freshwater aquifer that is underlain by a saline water body. The top of the saline water body is at a depth of 60 meters below ground surface. The well is screened from 30 meters to 50 meters below ground surface. The freshwater table is initially at 5 meters below ground surface. If the pumping rate is increased significantly, leading to a drawdown that brings the water table near the bottom of the well screen (to 48 meters below ground surface), what is the likely consequence?

**Solution 3:**

The well is screened from 30-50m. The saline water body starts at 60m.
The initial freshwater table is at 5m below ground surface.
The pumping causes a significant drawdown, lowering the freshwater table to 48m below ground surface. This is very close to the top of the screen (50m) and the saline water body (60m).

The consequence is **upconing**. The significant drawdown of the freshwater table reduces the hydrostatic pressure supporting the freshwater lens. The denser saline water below will bulge upwards into the cone of depression. Since the well is screened in the lower part of the freshwater zone and the drawdown is substantial, the saline water is likely to be drawn into the well screen, leading to contamination of the pumped water.

**Problem 4: Preventive Measure Identification**

List three distinct preventive measures that can be implemented in a coastal aquifer to mitigate seawater intrusion.

**Solution 4:**

Three distinct preventive measures are:

1.  **Artificial Recharge:** Injecting freshwater into the aquifer to increase the freshwater head and push back the saltwater.
2.  **Controlling Pumping Rates:** Reducing the extraction of groundwater to maintain a higher freshwater table and prevent excessive drawdown.
3.  **Constructing Physical Barriers:** Installing impermeable barriers (like sheet piles or grout curtains) underground to block the lateral movement of saline water.
4.  **Well Design Modifications:** Screening wells in the upper parts of the freshwater aquifer and avoiding over-pumping.

---

### 8. Important Points to Remember

*   **Density is Key:** The density difference between freshwater and seawater is the fundamental principle driving saltwater intrusion and the Ghyben-Herzberg relationship.
*   **Freshwater Head is Critical:** A higher freshwater table (higher $z_f$) provides greater protection against intrusion. Pumping that lowers the freshwater table significantly increases intrusion risk.
*   **Ghyben-Herzberg is a Simplification:** It provides a good first estimate for the depth of the interface, especially in simple unconfined aquifer scenarios without significant flow. Real-world interfaces are often diffuse.
*   **Upconing is a Vertical Threat:** It occurs when dense underlying water rises into a pumping well due to excessive drawdown.
*   **Integrated Approach:** Effective management of seawater intrusion requires a combination of strategies, including water conservation, controlled pumping, and potentially artificial recharge or physical barriers.
*   **Monitoring is Essential:** Continuous monitoring of water levels and salinity is vital for early detection and timely intervention.

---
