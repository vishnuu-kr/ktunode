---
title: "sedimentation"
subject: "WATER AND AIR QUALITY MANAGEMENT"
module: "Module 2: Water treatment:Aeration and types of aerators"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811851"
status: "completed"
scrapedAt: "2026-05-20T19:06:08.799Z"
---
# Water and Air Quality Management

## Module 2: Water Treatment: Aeration and Types of Aerators

### Topic: Sedimentation

**Sedimentation** is a physical water treatment process that uses gravity to remove suspended solids from water. It's a crucial step in preparing raw water for subsequent treatment processes and in managing wastewater by separating settleable solids. While the module title mentions "Aeration," sedimentation is often a preceding or subsequent process, especially in raw water treatment where grit removal is necessary before aeration, or in wastewater treatment where primary sedimentation precedes secondary (aerobic) treatment.

---

### Learning Outcomes Covered:

*   **Understanding the principles of sedimentation:** How gravity is used to remove solids.
*   **Identifying factors affecting sedimentation:** Velocity, particle characteristics, and basin design.
*   **Describing different types of sedimentation tanks:** Horizontal flow, radial flow, and high-rate clarifiers.
*   **Explaining the concept of overflow rate and weir loading rate:** Key design parameters.
*   **Discussing the role of sedimentation in water treatment:** Pre-treatment, post-treatment, and wastewater management.

---

### 1. Principles of Sedimentation

Sedimentation relies on the fundamental principle of **gravity settling**. When water containing suspended particles flows through a quiescent (still or slowly moving) zone, gravity exerts a downward force on the particles. If the particles are denser than water and of sufficient size, they will settle out of the water column.

*   **Key Concept:** **Settling Velocity ($v_s$)**: The speed at which a particle settles under the influence of gravity. This is the primary factor determining if a particle will be removed.
*   **Factors influencing Settling Velocity:**
    *   **Particle Size:** Larger particles settle faster.
    *   **Particle Density:** Denser particles settle faster.
    *   **Fluid Viscosity:** Higher viscosity slows down settling.
    *   **Particle Shape:** Irregular shapes can settle slower due to drag.
*   **Stokes' Law:** This fundamental law describes the settling velocity of a spherical particle in a viscous fluid.
    $$v_s = \frac{g(\rho_p - \rho_w)d^2}{18\mu}$$
    Where:
    *   $v_s$ = settling velocity (m/s)
    *   $g$ = acceleration due to gravity (9.81 m/s²)
    *   $\rho_p$ = density of the particle (kg/m³)
    *   $\rho_w$ = density of the water (kg/m³)
    *   $d$ = diameter of the particle (m)
    *   $\mu$ = dynamic viscosity of the fluid (Pa·s or kg/(m·s))

*   **Hindered Settling:** In high concentrations of solids (common in wastewater), particles can hinder each other's settling. This is known as **hindered settling** and is more complex than Stokes' Law.

---

### 2. Factors Affecting Sedimentation Efficiency

The effectiveness of a sedimentation process is influenced by several factors:

*   **Hydraulic Retention Time (HRT):** The average time water spends in the sedimentation tank. Longer HRT allows more time for particles to settle.
    *   **Definition:** HRT = Volume of Tank / Flow Rate
*   **Overflow Rate (OFR):** The flow rate per unit surface area of the sedimentation tank. This is a critical design parameter.
    *   **Definition:** OFR = Flow Rate / Surface Area of Tank
    *   **Significance:** A lower OFR generally leads to better removal of smaller particles, as it reduces the upward velocity of water and allows more time for settling.
*   **Surface Overflow Rate (SOR) / Surface Loading Rate (SLR):** These terms are often used interchangeably with OFR, especially in sedimentation basins.
*   **Upflow Velocity (or Vertical Velocity):** The velocity at which the water rises in the tank. This should be less than the settling velocity of the particles to be removed.
*   **Scouring Velocity:** The velocity of water flow that is high enough to resuspend settled solids. The tank design must prevent flow velocities from exceeding this value in the settled solids zone.
*   **Inlet and Outlet Conditions:** Turbulent flow at the inlet can disrupt settling. Well-designed baffles are used to minimize turbulence and distribute flow evenly. Outlet weirs should be designed to avoid surface scum being carried over.
*   **Temperature:** Affects water viscosity ($\mu$). Colder water is more viscous, leading to slower settling.
*   **Particle Characteristics:** Size, density, shape, and cohesiveness of the suspended solids.
*   **Presence of Chemicals (Coagulants/Flocculants):** Often added to enhance sedimentation by causing smaller particles to clump together into larger, faster-settling flocs. This is a process called **flocculation** and is often combined with sedimentation in clarifiers.

---

### 3. Types of Sedimentation Tanks

Sedimentation tanks are designed to provide the necessary volume and flow conditions for gravity settling. They are broadly categorized based on the direction of flow.

#### A. Horizontal Flow Sedimentation Tanks

*   **Description:** Water enters at one end of a rectangular or square tank and flows horizontally towards the outlet at the opposite end. Solids settle to the bottom.
*   **Advantages:** Relatively simple to construct, can handle large flows.
*   **Disadvantages:** Can suffer from short-circuiting (some water bypassing the longer path), less efficient for removing very fine particles.
*   **Key Features:**
    *   **Inlet Baffles:** To distribute flow and reduce turbulence.
    *   **Outlet Weirs:** To collect clarified water.
    *   **Sludge Hoppers/Collection System:** At the bottom for removing settled solids.
*   **Example:** Primary clarifiers in wastewater treatment plants.

#### B. Radial Flow Sedimentation Tanks (Circular Clarifiers)

*   **Description:** Water enters a circular tank at the center and flows radially outwards towards peripheral weirs.
*   **Advantages:** More efficient than horizontal flow tanks due to more uniform flow distribution and reduced short-circuiting. Sludge is collected at the center, facilitating easier removal.
*   **Disadvantages:** Can be more complex to construct.
*   **Key Features:**
    *   **Inlet Mechanism:** Often a central well with baffles to slow down incoming water and promote even distribution.
    *   **Sludge Scraper/Collector:** A rotating mechanism that moves settled sludge towards a central sludge hopper.
    *   **Peripheral Weirs:** Around the outer edge for effluent collection.
*   **Example:** Common in both water and wastewater treatment for primary and secondary clarification.

#### C. High-Rate Clarifiers

These are specialized sedimentation tanks designed for faster settling, often used in water treatment when raw water has high turbidity or after coagulation/flocculation.

*   **Lamella/Plate Settlers:**
    *   **Description:** Use a series of inclined parallel plates or tubes to increase the effective settling surface area within a smaller tank volume. Particles settle on the inclined surfaces and slide down into a collection zone.
    *   **Advantages:** High settling efficiency in a compact footprint, reduced footprint compared to conventional clarifiers.
    *   **Disadvantages:** Can be prone to clogging, requires careful operation and maintenance.
    *   **Example:** Used in raw water treatment plants after coagulation and flocculation.

*   **Sludge Blanket Clarifiers:**
    *   **Description:** Designed to operate with a thickened sludge layer (sludge blanket) suspended in the water. Flocculated particles collide with particles in the sludge blanket, promoting faster aggregation and settling.
    *   **Advantages:** High removal efficiency for small and flocculated particles.
    *   **Disadvantages:** Requires careful control of flow rates and sludge depth.
    *   **Example:** Often used in treating mineral slurries or in some specialized water treatment applications.

---

### 4. Key Design Parameters

*   **Surface Overflow Rate (SOR) / Surface Loading Rate (SLR):**
    *   **Formula:** $SOR = \frac{Q}{A}$
        Where:
        *   $Q$ = Flow rate (e.g., m³/d, m³/hr)
        *   $A$ = Surface area of the tank (e.g., m²)
    *   **Typical Values (for sedimentation basins in water treatment):** 20-50 m³/m²/d. Lower values are better for removing finer particles.
    *   **Units:** Volume per area per time (e.g., m³/m²/hr or m/hr). This unit can also be interpreted as the maximum theoretical overflow velocity, which should be less than the settling velocity of the smallest particle to be removed.

*   **Weir Loading Rate (WLR):**
    *   **Definition:** The flow rate per unit length of the outlet weir. It indicates the velocity at which water flows over the weir.
    *   **Formula:** $WLR = \frac{Q}{L}$
        Where:
        *   $Q$ = Flow rate (e.g., m³/d, m³/hr)
        *   $L$ = Total length of the weir (e.g., m)
    *   **Significance:** High weir loading rates can cause surface turbulence, leading to carryover of floatable materials and scum.
    *   **Typical Values:** 150-300 m³/m/d.

*   **Hydraulic Retention Time (HRT):**
    *   **Formula:** $HRT = \frac{V}{Q}$
        Where:
        *   $V$ = Volume of the sedimentation tank (e.g., m³)
        *   $Q$ = Flow rate (e.g., m³/d, m³/hr)
    *   **Typical Values (for primary sedimentation):** 1.5-2.5 hours.

---

### 5. Role of Sedimentation in Water Treatment

Sedimentation plays a vital role at different stages of water and wastewater treatment:

*   **Raw Water Treatment:**
    *   **Pre-sedimentation:** Removing coarse suspended solids from turbid raw water before it enters the main treatment plant. This reduces the load on subsequent processes like coagulation, flocculation, and filtration.
    *   **Primary Sedimentation (Clarification):** After coagulation and flocculation, sedimentation is used to remove the larger, denser flocs formed. This is often referred to as **clarification**.
*   **Wastewater Treatment:**
    *   **Primary Sedimentation:** Removing settleable organic solids from raw sewage. The settled solids form primary sludge, and the clarified liquid is sent for secondary treatment.
    *   **Secondary Sedimentation (Clarification):** Following biological treatment (e.g., activated sludge process), secondary clarifiers are used to settle the biomass (activated sludge) from the treated wastewater. This separates the treated effluent from the biological solids.
    *   **Tertiary Sedimentation:** In some advanced treatment schemes, sedimentation can be used to remove remaining suspended solids after tertiary treatment processes.

---

### 6. Important Points to Remember

*   **Gravity is the driving force.**
*   **Sedimentation efficiency is primarily governed by the settling velocity of particles and the overflow rate of the tank.**
*   **Lower overflow rates generally mean better removal efficiency, especially for smaller particles.**
*   **Proper tank design, including inlet and outlet structures, is crucial to minimize turbulence and short-circuiting.**
*   **Sedimentation is often enhanced by chemical addition (coagulation and flocculation).**
*   **Two key design parameters are Overflow Rate (SOR) and Weir Loading Rate (WLR).**
*   **Sedimentation is a foundational unit process in both water purification and wastewater treatment.**

---

### Practice Questions and Exercises

**Question 1:**
What is the primary principle by which sedimentation removes suspended solids from water?

**Answer 1:**
Sedimentation removes suspended solids from water primarily by using the force of **gravity** to settle particles that are denser than water.

**Question 2:**
Define Overflow Rate (OFR) and explain its significance in sedimentation tank design.

**Answer 2:**
Overflow Rate (OFR) is the flow rate per unit surface area of a sedimentation tank (OFR = Flow Rate / Surface Area). Its significance lies in determining the efficiency of particle removal. A lower OFR means a slower upward velocity of water, allowing more time for particles to settle out by gravity, thus improving removal efficiency, especially for smaller particles.

**Question 3:**
A circular sedimentation tank has a diameter of 15 meters and is designed to treat a flow of 5,000 m³/day. Calculate the Surface Overflow Rate (SOR). (Assume 1 day = 24 hours).

**Answer 3:**
*   Flow Rate ($Q$) = 5,000 m³/day
*   Diameter ($D$) = 15 m
*   Surface Area ($A$) = $\pi \times (D/2)^2 = \pi \times (15/2)^2 = \pi \times (7.5)^2 = \pi \times 56.25 \approx 176.7 m^2$
*   SOR = $Q / A = 5000 m³/day / 176.7 m^2$
*   SOR $\approx 28.3 m/day$

    To express this in m/hr:
    SOR $\approx 28.3 m/day / 24 hr/day \approx 1.18 m/hr$

**Question 4:**
List two types of sedimentation tanks and briefly describe their flow patterns.

**Answer 4:**
1.  **Horizontal Flow Sedimentation Tanks:** Water enters at one end and flows horizontally across the tank to the outlet at the opposite end.
2.  **Radial Flow Sedimentation Tanks (Circular Clarifiers):** Water enters at the center and flows radially outwards towards peripheral collection weirs.

**Question 5:**
When are Lamella/Plate Settlers typically used, and what is their primary advantage?

**Answer 5:**
Lamella/Plate Settlers are typically used in raw water treatment after coagulation and flocculation to enhance the removal of flocculated particles. Their primary advantage is their ability to achieve high settling efficiency in a significantly smaller footprint compared to conventional sedimentation tanks, due to the increased effective settling surface area provided by the inclined plates.
