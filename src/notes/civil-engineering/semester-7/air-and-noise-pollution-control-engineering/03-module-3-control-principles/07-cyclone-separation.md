---
title: "cyclone separation"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 3: Control principles"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81167d"
status: "completed"
scrapedAt: "2026-05-20T18:57:13.671Z"
---
# Module 3: Control Principles - Cyclone Separation

## 1. Introduction to Cyclone Separators

Cyclone separators, also known as centrifugal separators, are **mechanical devices used for separating solid particles from a gas stream (typically air) by utilizing centrifugal force.** They are widely used in various industries for dust collection, air pollution control, and product recovery.

### Key Concepts:

*   **Centrifugal Force:** The outward force experienced by an object moving in a circular path. In a cyclone, the swirling gas stream imparts centrifugal force on the entrained particles.
*   **Inertial Force:** The tendency of a body to resist changes in its state of motion. Larger and denser particles have greater inertia, making them more susceptible to being separated.
*   **Gravity Force:** The downward force exerted by gravity. While gravity plays a role, centrifugal force is dominant in cyclone separation.

### How it Works:

1.  **Tangential Inlet:** Dirty gas enters the cyclone tangentially, creating a swirling vortex.
2.  **Vortex Formation:** The gas spirals down the cylindrical or conical body.
3.  **Centrifugal Force Action:** As the gas swirls, heavier particles are thrown outwards against the cyclone wall by centrifugal force.
4.  **Particle Trajectory:** Particles slide down the wall to the bottom of the cyclone.
5.  **Clean Gas Outlet:** The cleaned gas, having lost most of its particulate matter, moves upwards in a smaller inner vortex and exits through an outlet pipe (vortex finder) at the top.
6.  **Collected Dust:** The separated solid particles accumulate at the bottom of the cyclone, often in a hopper.

## 2. Design Parameters and Their Impact on Performance

The efficiency of a cyclone separator is significantly influenced by its design parameters.

### Key Design Parameters:

*   **Inlet Velocity/Gas Flow Rate:**
    *   **Effect:** Higher inlet velocity generally leads to increased centrifugal force and thus higher collection efficiency for larger particles. However, excessively high velocities can lead to particle re-entrainment and reduced efficiency for smaller particles.
    *   **Optimal Range:** Typically 15-25 m/s for standard cyclones.
*   **Cyclone Diameter (D):**
    *   **Effect:** Smaller diameter cyclones are generally more efficient, especially for smaller particles, as the radius of curvature is smaller, resulting in stronger centrifugal forces. However, smaller cyclones have a lower gas handling capacity.
    *   **Trade-off:** Diameter is a crucial trade-off between efficiency and capacity.
*   **Inlet Width (W) and Height (H):**
    *   **Effect:** A rectangular inlet with W x H dimensions is common. The ratio W/H and the inlet area influence the gas flow pattern and velocity distribution. A common ratio is W/H = 2 to 4.
*   **Vortex Finder Diameter (Dv) and Length (Lv):**
    *   **Effect:** The vortex finder determines the path of the clean gas vortex. A larger Dv can reduce re-entrainment of collected dust but may decrease efficiency for fine particles. The length of the vortex finder influences the stability of the vortex.
    *   **Common Practice:** Dv is typically 0.5 * D.
*   **Gas Outlet Diameter (Do) (if separate from vortex finder):**
    *   **Effect:** Similar to the vortex finder, it affects the exit flow of clean gas.
*   **Dust Outlet/Underflow Diameter (Du):**
    *   **Effect:** Controls the rate at which collected dust exits the cyclone. It should be sized to prevent clogging while minimizing gas leakage. Typically, Du is around 0.5 * D.
*   **Cylindrical/Conical Section Length (Lc, Ls):**
    *   **Effect:** The length of the cylindrical section provides time for particles to move towards the wall. The length of the conical section aids in dust discharge. Longer sections can improve collection but increase pressure drop.

### **Important Point to Remember:**

*   **Smaller diameter cyclones are more efficient but have lower capacity.**

## 3. Performance Parameters

Cyclone performance is quantified by its efficiency and pressure drop.

### Key Performance Parameters:

*   **Collection Efficiency ($\eta$):**
    *   **Definition:** The fraction of the total mass of dust entering the cyclone that is collected.
    *   **Calculation:**
        $$ \eta = \frac{\text{Mass of dust collected}}{\text{Mass of dust entering}} \times 100\% $$
    *   **Types of Efficiency:**
        *   **Overall Efficiency:** The total mass collected divided by the total mass of dust entering.
        *   **Particle Size Efficiency (Grade Efficiency):** The efficiency of collection for particles within a specific size range.
*   **Cut Diameter ($d_{pc}$):**
    *   **Definition:** The particle diameter for which the collection efficiency is 50%. It's a measure of the cyclone's ability to separate particles of different sizes.
    *   **Smaller $d_{pc}$ implies better separation of finer particles.**
*   **Pressure Drop ($\Delta P$):**
    *   **Definition:** The resistance to gas flow through the cyclone, measured as the difference in pressure between the inlet and the outlet.
    *   **Factors affecting $\Delta P$:** Inlet velocity, gas density, cyclone dimensions, and gas viscosity.
    *   **Calculation:** Often calculated using empirical correlations, e.g.,
        $$ \Delta P = K_c \frac{\rho_g v_{in}^2}{2} $$
        where $K_c$ is a dimensionless cyclone constant (typically 16-20 for standard designs), $\rho_g$ is gas density, and $v_{in}$ is inlet velocity.

### **Important Point to Remember:**

*   **Higher inlet velocity increases both collection efficiency (for larger particles) and pressure drop.**

## 4. Types of Cyclone Separators

Various cyclone designs exist, each with specific applications and performance characteristics.

### Common Types:

*   **Darcy Cyclone:** A classic design with a specific geometry and performance characteristics.
*   **Lapple Cyclone:** Developed by Lapple, this design is widely used and has well-defined performance correlations.
*   **Von Krusenstierne Cyclone:** Known for its high efficiency, often used for finer dusts.
*   **Swerner Cyclone:** Features a spiral inlet for improved gas distribution.
*   **Multi-cyclones (or Tube Cyclones):**
    *   **Description:** Consist of a large number of small diameter cyclones operating in parallel.
    *   **Advantages:** High efficiency for fine particles, compact size, and modularity.
    *   **Disadvantages:** Higher pressure drop compared to single large cyclones, and potential for clogging in individual tubes.
    *   **Example:** Used in baghouse pre-collectors or industrial boilers.
*   **Reverse Flow Cyclones:**
    *   **Description:** The gas enters tangentially, spirals down, and then reverses direction to exit through an axial vortex finder.
    *   **Advantages:** Efficient for fine particle separation.
    *   **Examples:** Industrial dust collectors, sawmills.
*   **Straight-Through Cyclones:**
    *   **Description:** Gas enters tangentially and exits directly through a tangential outlet at the top.
    *   **Advantages:** Simpler design, lower pressure drop, and less prone to clogging.
    *   **Disadvantages:** Generally lower efficiency compared to reverse flow cyclones.
    *   **Examples:** Fly ash collection, material handling.
*   **High-Efficiency Cyclones:**
    *   **Description:** Designed with smaller diameters and specific geometric ratios to achieve higher collection efficiencies for finer particles.
    *   **Example:** Often used for collecting micron-sized particles.

### **Important Point to Remember:**

*   **Multi-cyclones offer high efficiency for fine particles but at the cost of higher pressure drop and complexity.**

## 5. Factors Affecting Cyclone Performance (Beyond Design)

Several external factors can influence how well a cyclone performs.

### Key Factors:

*   **Particle Properties:**
    *   **Size and Shape:** Larger and denser particles are easier to collect. Irregularly shaped particles might behave differently.
    *   **Density:** Higher density particles experience greater centrifugal force.
    *   **Moisture Content:** Wet particles can agglomerate, increasing their effective size and improving collection. However, excessive moisture can lead to fouling.
*   **Gas Properties:**
    *   **Density:** Higher gas density increases centrifugal forces, improving collection.
    *   **Viscosity:** Higher gas viscosity increases drag forces, potentially reducing efficiency for very fine particles.
    *   **Temperature:** Affects gas density and viscosity.
*   **Operational Factors:**
    *   **Gas Flow Rate:** As discussed, velocity is critical.
    *   **Particle Loading:** Very high dust loads can overwhelm the cyclone, leading to particle re-entrainment and reduced efficiency.
    *   **Wall Slurry/Fouling:** Buildup of material on the cyclone walls can alter the flow patterns and reduce efficiency.
    *   **Gas Leakage:** Leakage from the dust outlet can lead to the escape of collected dust.

## 6. Advantages and Disadvantages of Cyclone Separators

Understanding the pros and cons helps in selecting the appropriate pollution control device.

### Advantages:

*   **Simple Design and Construction:** Easy to fabricate and maintain.
*   **Low Capital Cost:** Relatively inexpensive compared to other dust collection devices.
*   **Low Operating Cost:** No moving parts (except for dust discharge mechanisms), minimal maintenance.
*   **High Temperature Applications:** Can be used at high temperatures where bag filters might fail.
*   **Can Handle Explosive Dusts:** If properly designed and grounded, they can be used for explosive dusts.
*   **No Filter Media Required:** Eliminates the need for replacement filter bags.
*   **Wet or Dry Collection:** Can be used for both dry dusts and slurries.
*   **Compact Size:** Relatively small footprint.

### Disadvantages:

*   **Limited Efficiency for Fine Particles:** Typically inefficient for particles below 10-15 micrometers (µm).
*   **High Pressure Drop for High Efficiency:** Achieving high efficiency for fine particles requires smaller diameters or higher velocities, leading to significant pressure drops.
*   **Abrasive Wear:** Can experience wear in the inlet and cyclone walls due to abrasive dusts.
*   **Potential for Clogging:** The dust outlet can clog if not sized correctly or if dust agglomerates.
*   **Re-entrainment of Fine Particles:** Fine particles can be carried out with the clean gas if vortex breakdown occurs or due to secondary vortices.

### **Important Point to Remember:**

*   **Cyclones are excellent for coarse particle removal but are not a solution for very fine particulate matter.**

## 7. Applications of Cyclone Separators

Cyclones are ubiquitous in many industrial processes.

### Common Applications:

*   **Industrial Dust Collection:** Removing dust from manufacturing processes (e.g., woodworking, grain processing, cement plants, metalworking).
*   **Pre-collectors for Baghouses and Electrostatic Precipitators (ESPs):** Reducing the dust load on more efficient downstream devices.
*   **Product Recovery:** Separating valuable solid products from process gases (e.g., in chemical and pharmaceutical industries).
*   **Fly Ash Collection:** In power plants.
*   **Classification of Powders:** Separating particles based on size in various industries.
*   **Wood Chip Separators:** In the wood industry.
*   **Catalyst Recovery:** In petrochemical processes.

## 8. Practice Questions and Exercises

**Question 1:**
A standard cyclone has an inlet velocity of 20 m/s. If the inlet velocity is increased to 25 m/s, how would you expect the collection efficiency and pressure drop to change?

**Answer:**
*   **Collection Efficiency:** Expected to **increase** for larger particles due to higher centrifugal forces. However, efficiency for very fine particles might decrease due to increased turbulence and re-entrainment.
*   **Pressure Drop:** Expected to **increase significantly**, as pressure drop is proportional to the square of the velocity ($\Delta P \propto v_{in}^2$).

**Question 2:**
What is the definition of the cut diameter in a cyclone separator? What does a smaller cut diameter indicate?

**Answer:**
The **cut diameter ($d_{pc}$)** is the particle diameter for which the collection efficiency of the cyclone is 50%. A smaller cut diameter indicates that the cyclone is more effective at separating smaller particles.

**Question 3:**
List three advantages and three disadvantages of using cyclone separators for air pollution control.

**Answer:**
**Advantages:**
1.  Simple design and low capital cost.
2.  Can handle high temperatures and corrosive gases.
3.  Low operating and maintenance costs.

**Disadvantages:**
1.  Ineffective for very fine particles (< 10-15 µm).
2.  Can experience abrasive wear from dust.
3.  High pressure drop required for high efficiency, especially for finer particles.

**Question 4:**
A multi-cyclone unit is being considered for a process. What are the primary benefits of using a multi-cyclone over a single large cyclone for the same gas flow rate?

**Answer:**
The primary benefit of a multi-cyclone is its **higher collection efficiency for finer particles** compared to a single large cyclone of equivalent capacity. This is due to the smaller diameter of individual cyclone tubes, which creates stronger centrifugal forces.

**Question 5:**
A cyclone is designed with a smaller diameter. How does this typically affect its collection efficiency and gas handling capacity?

**Answer:**
*   **Collection Efficiency:** Generally **increases**, especially for finer particles, due to stronger centrifugal forces.
*   **Gas Handling Capacity:** Generally **decreases**, meaning it can process less gas for a given unit.

## 9. Summary and Key Takeaways

*   **Cyclone separators use centrifugal force to separate solid particles from gas streams.**
*   **Key design parameters (diameter, inlet velocity, dimensions) critically influence performance.**
*   **Smaller diameter cyclones are more efficient but have lower capacity.**
*   **Collection efficiency and pressure drop are the main performance indicators.**
*   **Cut diameter is a measure of the cyclone's ability to separate fine particles.**
*   **Multi-cyclones offer higher efficiency for fine particles at the cost of higher pressure drop.**
*   **Cyclones are cost-effective for coarse particle removal but are not suitable for very fine dusts.**
*   **Their ability to handle high temperatures and their simplicity make them widely applicable.**

This concludes the study notes for Cyclone Separation. Remember to revisit the relationships between design parameters, performance, and the trade-offs involved.
