---
title: "settling chambers"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 3: Control principles"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81167c"
status: "completed"
scrapedAt: "2026-05-20T18:57:12.922Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 3: Control Principles - Settling Chambers

### 1. Introduction to Settling Chambers

Settling chambers, also known as gravity settlers or sedimentation chambers, are the simplest type of particulate control devices. They operate on the principle of gravity to remove larger particulate matter from an airstream. As the dusty gas flows through a large chamber at a reduced velocity, gravity causes the heavier particles to settle out on the floor.

**Key Concepts:**

*   **Gravity Settling:** The fundamental principle of operation, where gravitational force pulls particles downwards.
*   **Inertial Impaction:** For larger particles, their inertia causes them to continue in a straight line while the airstream turns, leading to impaction on a surface. While not the primary mechanism for *settling chambers* themselves, it's a related principle in particle control.
*   **Residence Time:** The average time a particle spends within the settling chamber. Longer residence times generally lead to higher collection efficiencies.
*   **Settling Velocity:** The terminal velocity of a particle when the gravitational force is balanced by the drag force. This is a critical parameter in determining if a particle will settle out.

**Learning Outcome 1: Describe the fundamental principles of operation for settling chambers.**

*   **Mechanism:** Settling chambers are designed to slow down the gas velocity. This reduced velocity allows gravity to overcome the drag forces acting on larger and denser particles, causing them to settle onto a collection surface.
*   **Particle Size:** They are most effective for removing relatively large and dense particles (typically > 50-100 µm). Smaller and less dense particles remain suspended in the airstream and exit the chamber.
*   **Design Factors:** The efficiency of a settling chamber is primarily determined by its dimensions (length, width, height) and the inlet gas velocity. Larger chambers and lower velocities generally lead to higher efficiencies.

### 2. Design and Types of Settling Chambers

Settling chambers can be designed in various configurations to optimize performance and accommodate different applications.

**Key Concepts:**

*   **Geometric Settling Velocity ($v_s$):** The minimum velocity a particle must have to be collected in a chamber of a specific height and length. It is often expressed as:
    $$v_s = \frac{Q}{WH}$$
    where:
    *   $v_s$ is the geometric settling velocity (m/s)
    *   $Q$ is the volumetric flow rate of gas (m³/s)
    *   $W$ is the width of the chamber (m)
    *   $H$ is the height of the chamber (m)
    This equation implies that for a given flow rate and width, a taller chamber will have a lower geometric settling velocity, meaning it can collect smaller particles.
*   **Residence Time ($\tau$):** The time a particle spends in the chamber.
    $$\tau = \frac{Volume}{Flow Rate} = \frac{LWH}{Q}$$
    where:
    *   $\tau$ is the residence time (s)
    *   $L$ is the length of the chamber (m)
    *   $W$ is the width of the chamber (m)
    *   $H$ is the height of the chamber (m)
    *   $Q$ is the volumetric flow rate of gas (m³/s)
*   **Cut-off Diameter ($d_{pc}$):** The smallest particle diameter that can be theoretically removed with 100% efficiency. This is the diameter of a particle with a settling velocity equal to the superficial velocity of the gas.
    $$d_{pc} = \sqrt{\frac{18 \mu \sqrt{C} v_0}{ \rho_p g}}$$
    (This is a simplified form, for Stokes' Law region, $C=1$, and if $v_0$ is the superficial velocity, $v_0 = Q/Area$). A more practical approach for design is to relate particle settling velocity to gas velocity and chamber dimensions.
*   **Superficial Velocity ($v_0$):** The average velocity of the gas flowing through the cross-sectional area of the chamber.
    $$v_0 = \frac{Q}{A}$$
    where $A$ is the cross-sectional area (m²).

**Types of Settling Chambers:**

*   **Simple Rectangular Chamber:** The most basic design. Gas enters horizontally and exits at the opposite end. Particles settle on the floor.
    *   **Configuration:** Long and wide, with low gas velocity.
    *   **Advantages:** Simple to construct, low capital cost.
    *   **Disadvantages:** Low efficiency for small particles, large footprint.
*   **Multiple-Hearth Settling Chambers (Belled Hopper / Baffled Settlers):** These designs involve multiple horizontal plates or baffles to create multiple settling zones, effectively increasing the settling area and reducing the required chamber volume for a given efficiency.
    *   **Configuration:** Plates are arranged with staggered openings, forcing the gas to flow in a zig-zag pattern, promoting settling.
    *   **Advantages:** Higher efficiency for a given footprint compared to simple chambers, reduced headroom requirements.
    *   **Disadvantages:** More complex construction, higher pressure drop.
*   **Inverted V-Shaped Settlers:** These chambers have inverted V-shaped bottoms, guiding settled dust into collection hoppers more effectively.
    *   **Configuration:** Similar to rectangular chambers but with a V-shaped floor.
    *   **Advantages:** Improved dust discharge, reduced re-entrainment.

**Learning Outcome 2: Explain the factors affecting the efficiency and performance of settling chambers.**

*   **Gas Flow Rate (Q):** Higher flow rates lead to shorter residence times and higher velocities, reducing efficiency.
*   **Gas Velocity (v₀):** Lower gas velocities are crucial for settling. High velocities can cause re-entrainment of settled particles.
*   **Particle Size and Density:** Larger and denser particles settle faster and are more effectively removed. Smaller and less dense particles remain suspended.
*   **Chamber Dimensions (L, W, H):**
    *   **Length (L):** Longer chambers increase residence time, improving efficiency.
    *   **Width (W):** Wider chambers reduce gas velocity for a given flow rate and cross-sectional area, aiding settling.
    *   **Height (H):** Taller chambers allow for collection of particles with lower settling velocities (smaller particles) for a given horizontal velocity and length.
*   **Particle Loading:** High dust concentrations can sometimes lead to particle-particle interactions and cluster formation, which can affect settling.
*   **Gas Viscosity and Temperature:** These affect the drag force on particles and thus their settling velocity. Higher viscosity or lower temperature generally increases settling velocity.
*   **Flow Distribution:** Uneven flow distribution within the chamber can create dead zones and reduce overall collection efficiency.
*   **Re-entrainment:** High gas velocities or turbulence can dislodge settled particles, reducing net collection efficiency.

### 3. Performance Characteristics and Equations

The performance of a settling chamber is often characterized by its efficiency and cut-off diameter.

**Key Concepts:**

*   **Collection Efficiency ($\eta$):** The fraction of incoming particulate matter removed by the device.
    $$\eta = \frac{Mass~of~particulate~collected}{Mass~of~particulate~entering}$$
    For settling chambers, efficiency is strongly dependent on particle size.
*   **Grade Efficiency:** The efficiency of the settling chamber as a function of particle size. It's typically a curve that rises from zero for very small particles to 100% for very large particles.
*   **Cut-off Diameter ($d_{pc}$):** The particle diameter for which the collection efficiency is 50%. It is related to the geometric settling velocity and the superficial velocity.
    A simplified theoretical approach can be derived from equating particle settling velocity to the upward gas velocity. For Stokes' Law region, the settling velocity of a particle is given by:
    $$v_{st} = \frac{\rho_p g d_p^2 C}{18 \mu}$$
    where:
    *   $v_{st}$ is the settling velocity (m/s)
    *   $\rho_p$ is particle density (kg/m³)
    *   $g$ is acceleration due to gravity (9.81 m/s²)
    *   $d_p$ is particle diameter (m)
    *   $C$ is Cunningham slip correction factor (approaches 1 for larger particles)
    *   $\mu$ is gas viscosity (Pa·s)
    To be collected, a particle's settling velocity must be greater than or equal to the upward velocity component induced by the gas flow. In a settling chamber, the gas flows horizontally, but conceptually, we can think of the "effective upward velocity" that a particle must overcome. For a horizontal flow settling chamber, the condition for collection is that the particle's settling velocity is sufficient to overcome the time the particle is in the chamber and move downwards.
    A more practical approach for design relates the *geometric settling velocity* ($v_{s,g}$) to the superficial velocity ($v_0$):
    $$v_{s,g} = \frac{Q}{WH}$$
    The cut-off diameter ($d_{pc}$) is the particle diameter whose settling velocity ($v_{st}$) equals $v_{s,g}$.
    $$v_{st}(d_{pc}) = v_{s,g}$$
    Substituting the Stokes' Law formula for $v_{st}$:
    $$\frac{\rho_p g d_{pc}^2 C}{18 \mu} = \frac{Q}{WH}$$
    $$d_{pc} = \sqrt{\frac{18 \mu Q C}{18 \mu WH \rho_p g}}$$
    $$d_{pc} = \sqrt{\frac{18 \mu Q C}{WH \rho_p g}}$$
    *   **Note on $v_{s,g}$:** It's the velocity required for a particle to travel the height ($H$) during the time it takes to traverse the length ($L$).
    *   **Correction Factors:** Real-world performance is affected by factors like non-uniform flow, turbulence, and particle re-entrainment. Therefore, empirical correction factors are often applied to theoretical calculations.

**Learning Outcome 3: Calculate the theoretical efficiency and cut-off diameter for a given settling chamber design.**

*   **Steps for Calculation:**
    1.  **Determine input parameters:** Flow rate ($Q$), chamber dimensions ($L$, $W$, $H$), gas properties (viscosity $\mu$), particle properties (density $\rho_p$, size $d_p$).
    2.  **Calculate superficial velocity:** $v_0 = Q / (W \times H)$.
    3.  **Calculate geometric settling velocity:** $v_{s,g} = Q / (W \times H)$. (Note: This is the same as superficial velocity if we consider the flow cross-section to be W*H and the settling to be across H. However, it's more common to define $v_{s,g}$ as the velocity required to settle across height H in time L/Q. Let's use a more robust definition for $d_{pc}$).

    Let's reconsider the cut-off diameter using the concept of settling across the height $H$ in the time it takes for the gas to travel the length $L$.
    Time of travel $t_{travel} = \frac{L \times W \times H}{Q} / (W \times H) = \frac{L}{v_{avg}}$, where $v_{avg} = Q/(WH)$ is the average velocity.
    The settling distance required is $H$. So, the settling velocity must be at least $v_{st} \geq H / t_{travel} = H / (L / v_{avg}) = v_{avg} \frac{H}{L}$.
    Using $v_{avg} = Q/(WH)$:
    $v_{st} \geq \frac{Q}{WH} \frac{H}{L} = \frac{Q}{WL}$

    So, the cut-off diameter $d_{pc}$ is the particle diameter whose settling velocity $v_{st}(d_{pc})$ equals $\frac{Q}{WL}$.
    Equating Stokes' Law:
    $$\frac{\rho_p g d_{pc}^2 C}{18 \mu} = \frac{Q}{WL}$$
    $$d_{pc} = \sqrt{\frac{18 \mu Q C}{WL \rho_p g}}$$

    4.  **Calculate efficiency for a given particle size:**
        *   For a particle to be collected, its settling velocity ($v_{st}$) must be greater than or equal to the effective upward velocity component that it must overcome. In a simplified horizontal settling chamber, this is often conceptualized as the velocity required to settle the height $H$ in the time it takes to traverse the length $L$.
        *   A common approach for theoretical efficiency is to consider that particles with settling velocity $v_{st}$ will be collected if $v_{st} \geq v_{s,g} = Q/(WL)$.
        *   Therefore, the theoretical efficiency for a particle of diameter $d_p$ is 1 if $v_{st}(d_p) \geq Q/(WL)$, and 0 otherwise. This is a step function.
        *   In reality, the grade efficiency is a smooth curve. A more sophisticated approach uses integration over the flow field. However, for basic calculations, the cut-off diameter is the primary metric.
        *   **Simplified efficiency estimation:** If $d_p \gg d_{pc}$, efficiency $\approx 1$. If $d_p \ll d_{pc}$, efficiency $\approx 0$. A very rough approximation for grade efficiency could be a sigmoidal curve, but that's beyond basic calculations.

*   **Example Calculation:**
    Consider a rectangular settling chamber with:
    *   Flow rate ($Q$) = 10 m³/s
    *   Chamber length ($L$) = 3 m
    *   Chamber width ($W$) = 2 m
    *   Chamber height ($H$) = 1 m
    *   Gas viscosity ($\mu$) = 1.8 x 10⁻⁵ Pa·s (at approx. 20°C)
    *   Particle density ($\rho_p$) = 2500 kg/m³
    *   Assume Cunningham slip factor ($C$) = 1 (for particles > ~10 µm)
    *   Gravity ($g$) = 9.81 m/s²

    **Calculate the cut-off diameter ($d_{pc}$):**
    $$d_{pc} = \sqrt{\frac{18 \mu Q C}{WL \rho_p g}}$$
    $$d_{pc} = \sqrt{\frac{18 \times (1.8 \times 10^{-5} \text{ Pa·s}) \times (10 \text{ m³/s}) \times 1}{(2 \text{ m}) \times (3 \text{ m}) \times (2500 \text{ kg/m³}) \times (9.81 \text{ m/s²})}}$$
    $$d_{pc} = \sqrt{\frac{3.24 \times 10^{-3}}{147150}}$$
    $$d_{pc} = \sqrt{2.201 \times 10^{-8} \text{ m²}}$$
    $$d_{pc} \approx 4.69 \times 10^{-5} \text{ m} = 46.9 \text{ µm}$$

    **Interpretation:** This settling chamber is theoretically capable of removing particles with diameters of 46.9 µm and larger with 100% efficiency, assuming perfect plug flow and no re-entrainment. Particles smaller than this will have reduced efficiency.

**Learning Outcome 4: Discuss the limitations and applications of settling chambers.**

**Limitations:**

*   **Low Efficiency for Fine Particles:** Settling chambers are inherently inefficient for removing particles smaller than about 50-100 µm, which constitute a significant portion of air pollution in many industrial processes.
*   **Large Footprint:** To achieve reasonable efficiencies for even moderately sized particles, settling chambers need to be very large, making them impractical for many applications.
*   **High Energy Cost (if low velocity is maintained):** While they have no pressure drop from internal elements like fans or filters, achieving the required low velocity over a large area can mean a large volume of air being handled, which might implicitly require larger fans depending on system design.
*   **Re-entrainment:** Settled dust can be re-suspended by turbulent gas flow, especially at higher velocities or due to vibrations.
*   **Not Suitable for Sticky or Hygroscopic Particles:** These particles may adhere to surfaces and cause clogging or reduced effectiveness.

**Applications:**

*   **Pre-cleaners:** Often used as a preliminary stage in a multi-stage particulate control system. They remove the coarsest and heaviest particles, protecting more efficient (and often more fragile) downstream devices like baghouses or electrostatic precipitators from blinding or overloading.
*   **Removal of Large Debris:** Effective for removing large, abrasive particles that could damage other equipment.
*   **Low-Cost Coarse Particle Removal:** In applications where only coarse particle removal is necessary, or where a high overall efficiency is not critical.
*   **Gravity Dust Collectors:** In specific scenarios like wood shops for sawdust collection or grain handling.
*   **Pre-conditioning of Gas Streams:** For example, in some thermal processes, settling chambers might be used to remove larger ash particles before further processing.

### 4. Practice Questions and Exercises

**Question 1:**
A settling chamber is to be designed to remove particles with a settling velocity of 0.5 m/s. If the chamber has a width of 4 m and a length of 5 m, what is the maximum flow rate (in m³/s) that can be handled to theoretically achieve this collection?

**Answer 1:**
The condition for collection is $v_{st} \geq Q/(WL)$.
We are given $v_{st} = 0.5$ m/s, $W = 4$ m, $L = 5$ m.
$0.5 \text{ m/s} \geq \frac{Q}{(4 \text{ m})(5 \text{ m})}$
$0.5 \geq \frac{Q}{20}$
$Q \leq 0.5 \times 20$
$Q \leq 10 \text{ m³/s}$
The maximum flow rate is **10 m³/s**.

**Question 2:**
Calculate the cut-off diameter ($d_{pc}$) for a settling chamber with the following specifications:
*   Flow rate ($Q$) = 20 m³/s
*   Chamber dimensions ($L$ x $W$ x $H$) = 5 m x 3 m x 1.5 m
*   Particle density ($\rho_p$) = 3000 kg/m³
*   Gas viscosity ($\mu$) = 1.9 x 10⁻⁵ Pa·s
*   Assume Cunningham slip factor ($C$) = 1.
*   $g$ = 9.81 m/s²

**Answer 2:**
Using the formula: $d_{pc} = \sqrt{\frac{18 \mu Q C}{WL \rho_p g}}$
$d_{pc} = \sqrt{\frac{18 \times (1.9 \times 10^{-5} \text{ Pa·s}) \times (20 \text{ m³/s}) \times 1}{(3 \text{ m}) \times (5 \text{ m}) \times (3000 \text{ kg/m³}) \times (9.81 \text{ m/s²})}}$
$d_{pc} = \sqrt{\frac{6.84 \times 10^{-3}}{220725}}$
$d_{pc} = \sqrt{3.099 \times 10^{-8} \text{ m²}}$
$d_{pc} \approx 5.57 \times 10^{-5} \text{ m} = 55.7 \text{ µm}$
The cut-off diameter is approximately **55.7 µm**.

**Question 3:**
What are the primary disadvantages of using a simple rectangular settling chamber for air pollution control? List at least two.

**Answer 3:**
1.  **Low efficiency for fine particles:** They are only effective for removing large and dense particles.
2.  **Large footprint:** They require substantial space to achieve even moderate efficiencies.
3.  **Risk of re-entrainment:** Settled particles can be disturbed and re-entrained by turbulent flow.

### 5. Important Points to Remember

*   **Simplicity is key:** Settling chambers are the most basic form of mechanical dust collectors.
*   **Gravity is the driving force:** They rely solely on gravitational settling.
*   **Best for coarse particles:** Effective only for particles generally > 50 µm.
*   **Efficiency is a function of particle size:** Low overall efficiency, but it varies significantly with particle diameter.
*   **Low pressure drop:** Typically have very low resistance to gas flow.
*   **Crucial as pre-collectors:** Their main role is often to remove heavy particles before they reach more sensitive or efficient collectors.
*   **Design parameters:** Flow rate, velocity, and chamber dimensions are critical for performance.
*   **Cut-off diameter is a key design metric:** Represents the smallest particle theoretically collected with high efficiency.

---
