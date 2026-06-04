---
title: "sedimentation tanks"
subject: "WATER AND AIR QUALITY MANAGEMENT"
module: "Module 2: Water treatment:Aeration and types of aerators"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811853"
status: "completed"
scrapedAt: "2026-05-20T19:06:10.211Z"
---
# Water and Air Quality Management - Module 2: Water Treatment: Aeration and Types of Aerators

## Topic: Sedimentation Tanks

### Introduction

Sedimentation is a crucial physical process in water treatment that removes suspended solids from water by gravity. Suspended solids are particles that are not dissolved in the water but are small enough to remain dispersed. These can include:

*   **Natural organic matter:** Algae, plankton, bacteria, decaying plant and animal material.
*   **Inorganic matter:** Silt, clay, sand.
*   **Chemical precipitates:** Formed during coagulation and flocculation.

Sedimentation tanks, also known as clarifiers, are designed to provide a quiescent (still or slow-moving) environment where these suspended particles can settle out of the water due to gravity. This process significantly reduces the turbidity (cloudiness) of the water, making it easier for subsequent treatment processes like filtration to remove the remaining fine particles.

### Learning Outcomes Covered:

This topic will address the following learning outcomes:

*   **Understand the purpose and principles of sedimentation in water treatment.**
*   **Identify and describe the different types of sedimentation tanks.**
*   **Explain the key design parameters and operational considerations for sedimentation tanks.**
*   **Recognize the advantages and disadvantages of sedimentation tanks.**

---

### 1. Purpose and Principles of Sedimentation

**Purpose:**

*   To remove settleable suspended solids from raw or pre-treated water.
*   To reduce turbidity and improve water clarity.
*   To decrease the load on downstream treatment processes (e.g., filtration).
*   To recover valuable materials (in some industrial wastewater treatment scenarios).

**Principles of Sedimentation:**

Sedimentation relies on **gravity** to settle particles. The effectiveness of sedimentation depends on several factors:

*   **Particle Settling Velocity:** The speed at which a particle settles. This is influenced by:
    *   **Particle Size:** Larger particles settle faster.
    *   **Particle Density:** Denser particles settle faster.
    *   **Water Viscosity:** Higher viscosity (e.g., at lower temperatures) slows settling.
    *   **Particle Shape:** More spherical particles settle faster than irregular or flat ones.
*   **Surface Overflow Rate (SOR):** The flow rate per unit surface area of the tank. A lower SOR allows more time for particles to settle. It is a primary design parameter.
    *   **Formula:** SOR = Q / A
        *   Q = Flow rate (e.g., m³/s or L/s)
        *   A = Surface area of the tank (e.g., m²)
*   **Detention Time:** The average time water spends in the tank. A longer detention time generally leads to better removal of slower-settling particles.
    *   **Formula:** Detention Time (θ) = V / Q
        *   V = Volume of the tank (e.g., m³)
        *   Q = Flow rate (e.g., m³/s)
*   **Flow Velocity:** The velocity of water within the tank. It should be low enough to prevent settled particles from being resuspended, but high enough to prevent short-circuiting.
    *   **Horizontal Velocity:** Influences the distance a particle travels horizontally before settling.
    *   **Vertical Velocity:** The rate at which water moves downwards. Ideally, this should be less than the settling velocity of the particles to be removed.

**Stoke's Law:** This fundamental law describes the settling velocity of a discrete particle in a fluid. While the conditions in a sedimentation tank are rarely ideal for pure Stoke's Law application (particles can interact and may not be perfectly spherical), it provides the foundational understanding:

*   **Formula:** $v_s = \frac{g( \rho_p - \rho_w ) d^2}{18 \mu}$
    *   $v_s$ = Settling velocity of the particle (m/s)
    *   $g$ = Acceleration due to gravity (9.81 m/s²)
    *   $\rho_p$ = Density of the particle (kg/m³)
    *   $\rho_w$ = Density of the water (kg/m³)
    *   $d$ = Diameter of the particle (m)
    *   $\mu$ = Dynamic viscosity of the water (Pa·s)

**Types of Sedimentation (based on particle behavior):**

1.  **Type I Sedimentation (Discrete Settling):** Particles settle individually without significant flocculation or interaction. Examples include sand or grit.
2.  **Type II Sedimentation (Flocculent Settling):** Particles flocculate (gather together) as they settle, increasing their size and settling velocity. This is common in water treatment after coagulation and flocculation.
3.  **Type III Sedimentation (Hindered Settling):** Particles settle in a concentrated suspension, forming a blanket that settles as a mass. This occurs when the concentration of solids is high, and settling velocities decrease as the suspension consolidates. Common in sludge thickening.
4.  **Type IV Sedimentation (Compression Settling):** Particles are in such close contact that they compress under their own weight, squeezing out water. Occurs in very concentrated suspensions.

---

### 2. Types of Sedimentation Tanks

Sedimentation tanks are broadly classified based on their shape and flow patterns.

#### 2.1 Rectangular Sedimentation Tanks (Longitudinal Flow)

*   **Description:** These are elongated tanks with water flowing horizontally from one end to the other. Inlet and outlet structures are at opposite ends.
*   **Flow Pattern:** Water enters at one end, flows slowly through the tank, and exits at the other. Settled solids accumulate at the bottom.
*   **Sludge Removal:** Typically removed by a mechanical scraper (flight and chain mechanism) that moves the settled sludge towards a hopper at the inlet end for withdrawal.
*   **Advantages:**
    *   Relatively simple to construct.
    *   Good hydraulic performance if designed properly, minimizing short-circuiting.
    *   Efficient for Type I and Type II sedimentation.
*   **Disadvantages:**
    *   Can be space-intensive.
    *   Scraper mechanism requires maintenance.
    *   Potential for dead zones if not designed or operated correctly.
*   **Example:** Commonly used in municipal water treatment plants for primary clarification.

#### 2.2 Circular Sedimentation Tanks (Radial Flow)

*   **Description:** These are cylindrical tanks with water flowing radially inwards or outwards.
*   **Flow Pattern:**
    *   **Conventional Radial Flow (Upflow):** Water enters near the center, flows horizontally outwards towards the periphery, and is collected by an effluent weir. Settled sludge moves towards the center and is collected in a sludge hopper.
    *   **Inverted Radial Flow:** Water enters around the periphery and flows inwards and upwards. Less common for primary treatment but seen in some industrial applications.
*   **Sludge Removal:** Mechanically removed by a rotating sludge collector (driven by a center pier) that moves sludge towards a central discharge pipe.
*   **Advantages:**
    *   Good hydraulic efficiency.
    *   Sludge removal mechanism is generally efficient.
    *   Compact design.
    *   Can be operated in series or parallel.
*   **Disadvantages:**
    *   More complex construction than rectangular tanks.
    *   Higher initial cost.
    *   Potential for short-circuiting if inlet/outlet structures are not well-designed.
*   **Example:** Widely used in both municipal and industrial water and wastewater treatment.

#### 2.3 Inclined Plate or Tube Settlers

*   **Description:** These are not traditional tanks but rather modules containing a series of inclined plates or tubes. Water flows through these channels.
*   **Princ:** The inclined surfaces create a shorter settling path for particles. Gravity causes particles to settle onto the inclined surfaces, where they slide down to a sludge collection zone.
*   **Advantages:**
    *   Significantly smaller footprint compared to conventional tanks for the same capacity.
    *   Higher overflow rates are possible, leading to smaller tank volumes.
    *   Effective for removing larger, faster-settling particles.
    *   Can be retrofitted into existing clarifiers.
*   **Disadvantages:**
    *   More prone to clogging, especially if pre-treatment is inadequate.
    *   Higher head loss.
    *   More expensive per unit volume of tank than conventional clarifiers.
    *   Less effective for very fine or flocculent particles that might not reach the inclined surface.
*   **Example:** Often used in raw water treatment or after chemical coagulation for enhanced removal of larger flocs.

#### 2.4 Lamella Sedimentation Tanks

*   **Description:** Similar to inclined plate settlers but often use a more compact, bundled arrangement of plates or tubes.
*   **Princ:** Maximizes the effective settling area within a smaller volume.
*   **Advantages:** High efficiency in a compact space, suitable for applications with limited land availability.
*   **Disadvantages:** Similar to inclined plate settlers regarding clogging and head loss.

---

### 3. Key Design Parameters and Operational Considerations

**3.1 Design Parameters:**

*   **Surface Overflow Rate (SOR):** Crucial for determining the tank's surface area. It is the most important parameter for Type I settling.
    *   Typical values for primary sedimentation in municipal water treatment: 20-40 m³/m²/d (0.00023-0.00046 m/s).
    *   Higher SORs are acceptable for larger particles.
*   **Detention Time:** Important for Type II settling and ensuring sufficient time for smaller particles to settle.
    *   Typical values: 2-4 hours for primary sedimentation.
*   **Depth of Tank:** Influences detention time and sludge storage capacity.
    *   Typically 3-5 meters for circular and rectangular tanks.
*   **Inlet and Outlet Structures:**
    *   **Inlets:** Designed to distribute water uniformly across the tank's surface and dissipate energy to avoid resuspension of settled solids. Baffles are often used.
    *   **Outlets:** Typically effluent weirs (common in circular tanks) or scum baffles at the outlet end to prevent floating solids from escaping. Weir loading rate (flow per unit length of weir) is also a design parameter.
*   **Sludge Scraper/Collector Mechanism:** Design ensures efficient removal of settled solids without disturbing the settled sludge blanket excessively.
*   **Upflow Velocity (for radial flow tanks):** The upward velocity of water in the tank. It should be less than the settling velocity of the particles to be removed.
*   **Weir Loading Rate:** Flow rate per unit length of weir. Should be controlled to prevent scouring of settled solids or carryover of floating material.

**3.2 Operational Considerations:**

*   **Flow Rate Control:** Maintaining a consistent flow rate is essential for optimal performance. Fluctuations can disrupt settling patterns.
*   **Sludge Removal Frequency:** Regular and complete removal of settled sludge is critical. Accumulation of sludge can reduce effective tank volume, increase internal turbidity due to settling and resuspension, and lead to anaerobic conditions and the release of harmful gases.
*   **Inlet Turbulence:** Minimizing turbulence at the inlet is vital to prevent resuspension of settled particles.
*   **Short-Circuiting:** This occurs when water travels through the tank faster than the average detention time, reducing the effective volume and efficiency. Proper inlet and outlet design and baffling can mitigate this.
*   **Floating Material (Scum):** Light materials like oil, grease, and debris can accumulate at the surface and should be removed regularly.
*   **Algal Growth:** In uncovered tanks, algal growth can occur, which can shed particles and interfere with sedimentation.
*   **Temperature:** Water temperature affects viscosity and thus settling velocity. Colder water has higher viscosity, leading to slower settling.

---

### 4. Advantages and Disadvantages of Sedimentation Tanks

**Advantages:**

*   **Effective Removal of Settleable Solids:** Significantly reduces turbidity and suspended solids.
*   **Relatively Simple Process:** Primarily relies on gravity.
*   **Low Operating Costs (energy):** Primarily gravity-driven, requiring minimal energy for pumping (though pumps are needed for influent/effluent).
*   **Reduces Load on Downstream Processes:** Makes filtration more efficient and extends filter run times.
*   **Can Handle High Flow Rates:** With proper design, can process large volumes of water.
*   **Durable and Long Lifespan:** Properly constructed tanks are robust.

**Disadvantages:**

*   **Ineffective for Very Fine or Colloidal Particles:** Particles smaller than about 10-20 micrometers may not settle effectively. These often require chemical coagulation and flocculation prior to sedimentation.
*   **Requires Large Footprint:** Especially for conventional tanks, requiring significant land area.
*   **Susceptible to Short-Circuiting:** Poor design can lead to reduced efficiency.
*   **Sludge Handling and Disposal:** The settled sludge needs to be removed, dewatered, and disposed of, which can be a significant operational challenge.
*   **Temperature Dependency:** Performance can be affected by seasonal temperature variations.
*   **Potential for Resuspension:** High flow velocities or inadequate design can resuspend settled solids.

---

### 5. Practice Questions and Exercises

**Question 1:** Define Surface Overflow Rate (SOR) and explain its importance in the design of sedimentation tanks.
**Answer:** SOR is the flow rate of water per unit surface area of the sedimentation tank. It is a critical design parameter because it directly influences the settling efficiency. A lower SOR allows more time for particles to settle, ensuring effective removal, especially for slower-settling particles.

**Question 2:** Differentiate between rectangular and circular sedimentation tanks in terms of their flow pattern and sludge removal mechanism.
**Answer:**
*   **Rectangular Tanks:** Water flows horizontally from inlet to outlet. Sludge is typically moved towards one end by a scraper mechanism.
*   **Circular Tanks:** Water flows radially outwards (or inwards). Sludge is moved towards the center by a rotating sludge collector.

**Question 3:** What are the primary limitations of sedimentation as a water treatment process?
**Answer:** Sedimentation is less effective for very fine, colloidal, or very light suspended particles that do not settle readily by gravity alone. These particles often require chemical pre-treatment (coagulation and flocculation).

**Question 4 (Calculation):** A rectangular sedimentation tank is designed to treat a flow of 5,000 m³/day. The desired Surface Overflow Rate (SOR) is 30 m³/m²/day. Calculate the required surface area of the tank.
**Answer:**
SOR = Q / A
A = Q / SOR
A = 5,000 m³/day / 30 m³/m²/day
A = 166.67 m²

**Question 5:** Explain why regular and efficient sludge removal is crucial for the effective operation of sedimentation tanks.
**Answer:** Regular sludge removal prevents the accumulation of solids, which can reduce the effective tank volume, increase turbidity through resuspension, and lead to anaerobic conditions within the sludge, releasing gases that can disrupt settling.

---

### Important Points to Remember:

*   **Gravity is the driving force:** Sedimentation relies on gravity to separate solids from water.
*   **SOR is key:** Surface Overflow Rate is the most critical design parameter for sedimentation tank sizing, especially for discrete settling.
*   **Detention time matters:** Especially for flocculent settling, sufficient detention time ensures particles have adequate time to settle.
*   **Pre-treatment is often necessary:** For fine and colloidal particles, coagulation and flocculation are essential before sedimentation.
*   **Sludge removal is vital:** Ineffective sludge removal significantly degrades tank performance.
*   **Hydraulic design is crucial:** Proper inlet, outlet, and baffling prevent short-circuiting and resuspension of solids.
*   **Inclined settlers offer space savings:** They increase settling area in a compact volume.

---
