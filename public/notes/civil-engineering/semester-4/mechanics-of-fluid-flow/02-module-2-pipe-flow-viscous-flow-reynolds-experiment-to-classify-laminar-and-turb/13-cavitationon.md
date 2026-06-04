---
title: "Cavitation.on"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a72"
status: "completed"
scrapedAt: "2026-05-20T18:46:32.505Z"
---
# MECHANICS OF FLUID FLOW - Module 2: Pipe Flow: Viscous Flow

## Topic: Cavitation

---

### Introduction to Cavitation

Cavitation is a phenomenon that occurs when the pressure in a liquid drops to or below its vapor pressure. This causes the formation of vapor bubbles within the liquid. As these bubbles move to regions of higher pressure, they collapse violently, generating shock waves and causing damage to surrounding surfaces.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Define cavitation** and explain the fundamental conditions under which it occurs.
*   **Explain the process of cavitation formation and collapse.**
*   **Identify the various causes of cavitation** in fluid systems.
*   **Describe the detrimental effects of cavitation** on fluid machinery and pipelines.
*   **Discuss methods for preventing or mitigating cavitation.**
*   **Relate cavitation to concepts like vapor pressure and Bernoulli's principle.**

---

### Key Concepts and Definitions

*   **Vapor Pressure ($P_v$)**: The pressure at which a liquid will boil or vaporize at a given temperature. For a pure liquid at a constant temperature, it is the equilibrium pressure of its vapor in contact with its liquid phase.
*   **Static Pressure ($P$)**: The pressure of the fluid at rest.
*   **Dynamic Pressure ($\frac{1}{2}\rho V^2$)**: The pressure associated with the kinetic energy of the fluid.
*   **Bernoulli's Principle**: States that for an inviscid flow, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure or a decrease in the fluid's potential energy. In its simplified form for horizontal flow, it can be expressed as:
    $P + \frac{1}{2}\rho V^2 = \text{constant}$
    Where:
    *   $P$ is the static pressure.
    *   $\rho$ is the fluid density.
    *   $V$ is the fluid velocity.
*   **Cavitation Number ($\sigma$)**: A dimensionless parameter used to characterize the susceptibility of a fluid system to cavitation. It is defined as:
    $\sigma = \frac{P - P_v}{\frac{1}{2}\rho V^2}$
    Where:
    *   $P$ is the static pressure in the region of interest (often the minimum pressure in the system).
    *   $P_v$ is the vapor pressure of the liquid at the prevailing temperature.
    *   $\rho$ is the density of the liquid.
    *   $V$ is the characteristic velocity of the flow (e.g., average velocity in a pipe or impeller tip speed).
*   **Cavitation Limit**: The value of the cavitation number below which cavitation is likely to occur. This limit is specific to the type of equipment and application.
*   **Incipient Cavitation**: The initial formation of vapor bubbles.
*   **Developed Cavitation**: Significant formation and collapse of vapor bubbles, leading to noticeable effects.

---

### The Process of Cavitation

1.  **Low Pressure Formation**: In a fluid flow, regions of low pressure can develop due to high velocities (as per Bernoulli's principle) or geometric constrictions.
2.  **Vapor Bubble Formation**: If the local pressure ($P$) in these low-pressure regions drops to or below the liquid's vapor pressure ($P_v$) at that temperature, the liquid begins to vaporize, forming small vapor-filled bubbles.
3.  **Bubble Transport**: These vapor bubbles are carried along with the flow.
4.  **Bubble Collapse**: As the bubbles move into regions of higher pressure (where $P > P_v$), the surrounding liquid exerts immense pressure on the bubbles. This causes them to collapse violently and rapidly.
5.  **Shock Wave Generation**: The implosion of the vapor bubbles creates localized high-pressure shock waves.
6.  **Surface Damage**: These shock waves, along with the high-speed micro-jets of liquid that are also formed during collapse, impinge on nearby solid surfaces (e.g., pump impellers, turbine blades, pipe walls), causing erosion and material fatigue.

---

### Causes of Cavitation

Cavitation can be induced by various factors in fluid systems:

*   **High Fluid Velocities**: According to Bernoulli's principle, high velocities lead to low pressures. This is common at restrictions, constrictions, or sharp turns in pipes.
    *   **Example**: Water flowing through a partially closed valve will experience a significant increase in velocity and a corresponding drop in pressure in the narrowest section.
*   **Low Static Pressure**: If the overall static pressure in a system is already close to the vapor pressure, even a small increase in velocity can trigger cavitation.
    *   **Example**: Pumping water from a deep well can lead to low suction pressure at the pump inlet.
*   **Geometric Features**: Sharp edges, abrupt changes in cross-section, and protrusions can create localized low-pressure zones.
    *   **Example**: The leading edge of an impeller blade or the entrance to a nozzle can be prone to cavitation.
*   **Altitude Changes**: In systems where fluid is lifted to higher elevations, the pressure at the pump inlet can decrease significantly.
*   **High Fluid Temperature**: As temperature increases, the vapor pressure of the liquid also increases. This makes it easier for the local pressure to drop below the vapor pressure.
*   **Entrained Gases**: While not the primary cause, dissolved or entrained gases can influence the formation and collapse of bubbles.

---

### Detrimental Effects of Cavitation

Cavitation is a highly destructive phenomenon with several negative consequences:

*   **Erosion and Corrosion**: The repeated collapse of vapor bubbles generates high-velocity liquid jets and shock waves that bombard solid surfaces. This mechanical action erodes the material, causing pitting and wear. This erosion can be exacerbated by chemical corrosion if the fluid is corrosive.
    *   **Example**: Pump impellers showing significant pitting and surface damage due to cavitation.
*   **Noise and Vibration**: The violent collapse of vapor bubbles creates characteristic noise (often described as "gravel rattling") and vibrations in the fluid machinery.
    *   **Example**: A pump operating with cavitation might produce a loud, irregular buzzing or rattling sound.
*   **Performance Degradation**: Cavitation can disrupt the smooth flow of the fluid, leading to a significant reduction in the efficiency and performance of pumps, turbines, and other fluid machinery.
    *   **Example**: A centrifugal pump may experience a drop in its head-flow rate curve and a reduction in its efficiency when cavitation occurs.
*   **Structural Fatigue**: The repeated shock waves and vibrations can lead to material fatigue and eventual structural failure of components.
*   **Flow Instability**: Cavitation can cause unsteady flow patterns and erratic behavior in the system.

---

### Preventing and Mitigating Cavitation

Several strategies can be employed to prevent or minimize cavitation:

*   **Increase Static Pressure**:
    *   **Increase Suction Head**: Ensure the liquid level is sufficiently high before the pump (or increase the static pressure in the system).
    *   **Reduce Suction Lift**: Minimize the vertical distance the fluid needs to be lifted.
    *   **Use a More Suitable Pump Type**: Select a pump with a higher Net Positive Suction Head Available (NPSHA).
*   **Reduce Fluid Velocity**:
    *   **Increase Pipe Diameter**: Use larger diameter pipes to reduce velocity for a given flow rate.
    *   **Avoid Abrupt Changes**: Use gradual transitions, rounded bends, and avoid sharp edges in the flow path.
*   **Control Fluid Temperature**:
    *   **Cool the Fluid**: Lowering the fluid temperature reduces its vapor pressure, making cavitation less likely.
*   **Improve System Design**:
    *   **Proper Valve Selection and Operation**: Use valves with smooth flow characteristics and avoid operating them in a severely throttled position for extended periods.
    *   **Aerate the Inlet (Carefully)**: In some specific applications, controlled introduction of small amounts of air can cushion bubble collapse, but this is generally not recommended as it can affect fluid properties.
*   **Select Materials Resistant to Cavitation Damage**: Use harder and more erosion-resistant materials for components prone to cavitation.
*   **Maintain the System**: Ensure proper operation and maintenance of pumps, valves, and pipelines.

---

### Relationship with Bernoulli's Principle and Reynolds Experiment

*   **Bernoulli's Principle**: Bernoulli's principle is crucial for understanding how low-pressure regions are created. The $\frac{1}{2}\rho V^2$ term directly relates fluid velocity to pressure. As velocity increases, the pressure decreases, potentially reaching the vapor pressure.
*   **Reynolds Experiment**: While Reynolds' experiment (with its focus on laminar vs. turbulent flow and the Reynolds number) doesn't directly predict cavitation, the concept of flow regime is indirectly related. Turbulent flows are often associated with higher energy dissipation and more complex velocity fluctuations, which can contribute to localized pressure drops. However, cavitation is primarily governed by the pressure-velocity relationship dictated by Bernoulli's principle and the fluid's vapor pressure.

---

### Practice Questions and Exercises

**Question 1:** Define cavitation and state the primary condition required for it to occur.

**Answer 1:** Cavitation is the formation and subsequent violent collapse of vapor bubbles within a liquid when the local pressure drops to or below the liquid's vapor pressure.

**Question 2:** Explain how Bernoulli's principle contributes to the occurrence of cavitation.

**Answer 2:** Bernoulli's principle states that in a fluid flow, an increase in velocity is accompanied by a decrease in pressure. If the velocity becomes high enough in certain regions, the pressure can drop to the vapor pressure of the liquid, leading to cavitation.

**Question 3:** List three detrimental effects of cavitation on fluid machinery.

**Answer 3:**
1.  Erosion and corrosion of surfaces.
2.  Increased noise and vibration.
3.  Degradation of performance (efficiency, head).
4.  Material fatigue and structural failure.

**Question 4:** A pump is operating with a suction head that is too low, and a rattling noise is heard. What phenomenon is likely occurring, and what is a possible solution?

**Answer 4:** The phenomenon is likely cavitation. A possible solution is to increase the suction head or lower the static pressure at the pump inlet by ensuring a higher liquid level or reducing the suction lift.

**Question 5:** Calculate the cavitation number ($\sigma$) for water at 20°C flowing through a pipe at an average velocity of 5 m/s, where the minimum pressure in a certain section is measured to be 50 kPa. Assume the vapor pressure of water at 20°C is 2.34 kPa (absolute) and the density of water is 998 kg/m³.

**Answer 5:**
Given:
*   $P = 50 \text{ kPa} = 50 \times 10^3 \text{ Pa}$
*   $P_v = 2.34 \text{ kPa} = 2.34 \times 10^3 \text{ Pa}$
*   $V = 5 \text{ m/s}$
*   $\rho = 998 \text{ kg/m}^3$

$\sigma = \frac{P - P_v}{\frac{1}{2}\rho V^2}$

$\sigma = \frac{(50 \times 10^3 \text{ Pa}) - (2.34 \times 10^3 \text{ Pa})}{\frac{1}{2} \times 998 \text{ kg/m}^3 \times (5 \text{ m/s})^2}$

$\sigma = \frac{47.66 \times 10^3 \text{ Pa}}{0.5 \times 998 \text{ kg/m}^3 \times 25 \text{ m}^2/\text{s}^2}$

$\sigma = \frac{47.66 \times 10^3 \text{ Pa}}{12475 \text{ Pa}}$

$\sigma \approx 3.82$

**Interpretation**: A cavitation number of approximately 3.82 indicates that the pressure is well above the vapor pressure. If the cavitation number were significantly lower (e.g., less than 1 or 2, depending on the system), cavitation would be expected.

---

### Important Points to Remember

*   **Cavitation occurs when local pressure drops to or below vapor pressure.**
*   **Bernoulli's principle is key to understanding low-pressure formation due to high velocity.**
*   **Cavitation number ($\sigma$) is the critical parameter for assessing cavitation risk.** Lower $\sigma$ means higher risk.
*   **The consequences of cavitation are severe: erosion, noise, vibration, and performance loss.**
*   **Prevention involves increasing static pressure, reducing velocity, and controlling temperature.**

---
