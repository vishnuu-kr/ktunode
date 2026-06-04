---
title: "Steam nozzles : -Types of nozzles"
subject: "THERMAL ENGINEERING"
module: "Module 1: Steam Power Cycle : Simple Rankine cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463985"
status: "completed"
scrapedAt: "2026-05-20T18:08:34.958Z"
---
# Thermal Engineering: Module 1 - Steam Power Cycle: Simple Rankine Cycle

## Topic: Steam Nozzles: Types of Nozzles

---

### 1. Introduction to Steam Nozzles in the Rankine Cycle

Steam nozzles are crucial components in steam power plants, particularly in the **Rankine cycle**. Their primary function is to convert the **enthalpy** (internal energy and flow work) of high-pressure, high-temperature steam into **kinetic energy**. This high-velocity steam is then directed onto the turbine blades, causing the turbine to rotate and generate mechanical power.

**Key Concept:**
*   **Enthalpy:** A thermodynamic property representing the total heat content of a system. In the context of steam, it includes internal energy and the energy associated with pressure and volume.
*   **Kinetic Energy:** The energy an object possesses due to its motion.

**Relevance to Rankine Cycle (CO1 - K4):**
The efficiency of the steam turbine, a core component of the Rankine cycle, is directly dependent on the velocity of steam leaving the nozzle. Efficient conversion of thermal energy to kinetic energy in the nozzle leads to higher turbine work output and improved overall cycle performance.

**Textbook Reference:**
*   **Rudra Moorthy, Thermal Engineering:** Likely discusses nozzles as part of the steam turbine section, explaining the energy conversion process.
*   **R.K. Rajput, Thermal Engineering:** Provides detailed analysis of nozzle flow and types.

---

### 2. Function of Steam Nozzles

The primary function of a steam nozzle is to accelerate a fluid (steam) by expanding it from a high-pressure, low-velocity state to a low-pressure, high-velocity state. This process occurs adiabatically, meaning there is no heat transfer to or from the surroundings.

**Process:**
1.  **Expansion:** Steam enters the nozzle at high pressure and temperature and expands to a lower pressure.
2.  **Enthalpy Drop:** During expansion, the steam's enthalpy decreases.
3.  **Velocity Increase:** This enthalpy drop is converted into kinetic energy, significantly increasing the steam's velocity.
4.  **Temperature and Pressure Drop:** As velocity increases, the temperature and pressure of the steam also decrease.

**Governing Principles:**
*   **First Law of Thermodynamics (Steady Flow Energy Equation):** For adiabatic flow through a nozzle, the enthalpy drop is directly related to the change in kinetic energy.
    $h_1 + \frac{c_1^2}{2} = h_2 + \frac{c_2^2}{2}$
    where:
    *   $h_1, h_2$ are enthalpies at inlet and outlet respectively.
    *   $c_1, c_2$ are velocities at inlet and outlet respectively.
    Since $c_1$ is usually negligible compared to $c_2$, the equation simplifies to:
    $\frac{c_2^2}{2} = h_1 - h_2 = \Delta h$
    $c_2 = \sqrt{2 \Delta h}$
    This shows that the exit velocity is proportional to the square root of the enthalpy drop.

**Important Point to Remember:**
The efficiency of a nozzle is defined as the ratio of the actual kinetic energy of the fluid at the exit to the ideal kinetic energy that would be obtained if the expansion were isentropic.

---

### 3. Types of Steam Nozzles

Steam nozzles are classified based on their geometry and the nature of the flow through them. The most common types are:

#### 3.1. Convergent Nozzle

*   **Geometry:** A nozzle with a cross-sectional area that continuously decreases along the direction of flow.
*   **Function:** Accelerates the steam.
*   **Flow Behavior:**
    *   **Subsonic Flow:** When the flow velocity is less than the speed of sound, the nozzle will always accelerate the steam, regardless of the back pressure.
    *   **Sonic Flow (Choked Flow):** As the back pressure is reduced, the velocity at the narrowest point (throat) can reach the speed of sound (Mach 1). This condition is known as **choking**. Once choked, the mass flow rate through the nozzle becomes constant, even if the back pressure is further reduced.
*   **Application:** Used when the back pressure is sufficiently high such that the flow does not reach sonic velocity at the throat, or when a controlled lower velocity is desired. In the Rankine cycle, convergent nozzles are typically used in the initial stages of a turbine where the pressure drop is not large enough to cause choking.

**Example:**
Imagine water flowing through a hose. If you squeeze the end (convergent nozzle), the water speeds up. However, there's a limit to how much faster it can go before it starts to "choke" at the squeezed point.

**Diagram (Conceptual):**
```
   -----____
  /          \
 |            |  (Decreasing Area)
  \          /
   --------
```

**Textbook Reference:**
*   **R.K. Rajput, Thermal Engineering:** Will likely provide detailed explanations and diagrams of convergent nozzle geometry and flow characteristics.

---

#### 3.2. Divergent Nozzle

*   **Geometry:** A nozzle with a cross-sectional area that continuously increases along the direction of flow.
*   **Function:** Used to further accelerate steam *after* it has reached sonic velocity at the throat.
*   **Flow Behavior:**
    *   **Subsonic Flow:** If steam enters a divergent section with subsonic velocity, it will decelerate, and its pressure will increase.
    *   **Supersonic Flow:** If steam enters a divergent section with supersonic velocity (Mach > 1), it will accelerate, and its pressure and temperature will decrease.
*   **Application:** Used in situations where a significant pressure drop occurs, and the steam reaches sonic velocity at the throat, requiring further expansion and acceleration to supersonic speeds. This is common in later stages of steam turbines operating at low back pressures.

**Diagram (Conceptual):**
```
   ---------
  /         \
 |           |  (Increasing Area)
  \         /
   ----____
```

---

#### 3.3. Convergent-Divergent (C-D) Nozzle (De Laval Nozzle)

*   **Geometry:** Consists of two sections: a convergent section followed by a divergent section. The point where the convergent and divergent sections meet is called the **throat**, which has the minimum cross-sectional area.
*   **Function:** Designed to accelerate steam from subsonic speeds to supersonic speeds, achieving the maximum possible velocity for a given pressure drop.
*   **Flow Behavior:**
    1.  **Convergent Section:** Steam accelerates from subsonic to sonic velocity (Mach 1) at the throat.
    2.  **Divergent Section:** If the back pressure is low enough to allow supersonic expansion, the steam continues to accelerate from sonic to supersonic velocities (Mach > 1) in the divergent section.
*   **Conditions for Operation:**
    *   **Convergent Nozzle Operation:** If the back pressure is higher than the critical pressure (approx. 0.528 times the inlet pressure for ideal gas), the steam will reach sonic velocity at the throat and the flow will be choked. The divergent section will have no effect or might even cause a slight deceleration if the back pressure is too high.
    *   **C-D Nozzle Operation:** For efficient supersonic expansion, the back pressure must be below the critical pressure. The lowest pressure the nozzle can discharge to is the back pressure, provided it's low enough to sustain supersonic flow in the divergent section.
*   **Application:** Essential for achieving high steam velocities required in modern, efficient steam turbines, especially in the low-pressure stages where large pressure drops occur.

**Diagram (Conceptual):**
```
   -----____-------
  /            \   \
 |              |   |  (Convergent) (Throat) (Divergent)
  \            /   /
   ------------
```

**Key Concept:**
*   **Choking:** The condition where the flow velocity at the throat of a convergent-divergent nozzle reaches Mach 1, and the mass flow rate becomes maximum and independent of further reductions in back pressure.
*   **Critical Pressure Ratio:** The ratio of the pressure at the throat to the inlet pressure, which is approximately 0.528 for steam.
*   **Mach Number (M):** The ratio of the flow velocity to the local speed of sound.

**Textbook Reference:**
*   **Rudra Moorthy, Thermal Engineering:** Provides comprehensive coverage of C-D nozzles, including their design and performance characteristics.
*   **R.K. Rajput, Thermal Engineering:** Also covers C-D nozzles in detail.
*   **Mahesh Rathore, Thermal Engineering:** Offers insights into the thermodynamic principles governing C-D nozzle behavior.

**Example:**
A jet engine's exhaust nozzle is a type of convergent-divergent nozzle. It accelerates hot gases to supersonic speeds to generate thrust. Similarly, in a steam turbine, the steam is accelerated to very high speeds to efficiently transfer energy to the turbine blades.

---

### 4. Important Considerations for Nozzle Design and Operation

*   **Isentropic Efficiency:** Real nozzles are not perfectly isentropic due to friction and boundary layer effects. The isentropic efficiency of a nozzle accounts for these losses and is defined as:
    $\eta_{nozzle} = \frac{\text{Actual Kinetic Energy at Exit}}{\text{Isentropic Kinetic Energy at Exit}} = \frac{\frac{1}{2} c_{actual}^2}{\frac{1}{2} c_{isentropic}^2} = \frac{h_1 - h_2_{actual}}{h_1 - h_2_{isentropic}}$
    A higher isentropic efficiency means less energy is lost due to friction, resulting in higher exit velocities and better turbine performance.
*   **Mass Flow Rate:** The mass flow rate through a nozzle is a critical parameter. For choked flow in a C-D nozzle, the mass flow rate is determined by the throat area and the conditions at the throat.
    $\dot{m} = A_{throat} \rho_{throat} c_{throat}$
    where $\rho_{throat}$ and $c_{throat}$ are the density and velocity at the throat, respectively.
*   **Back Pressure:** The back pressure of the steam leaving the nozzle significantly influences the type of nozzle required and its performance.
    *   **Convergent Nozzle:** If back pressure is above critical pressure, it acts as a convergent nozzle and chokes at the throat.
    *   **C-D Nozzle:** Requires back pressure below critical pressure for supersonic expansion. If back pressure is too high, it behaves like a convergent nozzle choked at the throat, or may even experience flow separation.

**CO2 - K3:** Understanding nozzle efficiency is crucial for analyzing turbine performance. Inefficient nozzles reduce the steam's kinetic energy, leading to lower turbine work output and consequently, reduced overall cycle efficiency.

**CO5 - K6:** Design of efficient nozzles involves complex fluid dynamics calculations and can be a subject for simulation and prototyping to optimize performance for specific operating conditions.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary function of a steam nozzle in a Rankine cycle?
**Answer:** To convert the thermal energy (enthalpy) of steam into kinetic energy by expanding it from a high-pressure to a low-pressure state.

**Question 2:** What type of nozzle is most suitable for accelerating steam to supersonic speeds?
**Answer:** A Convergent-Divergent (C-D) nozzle.

**Question 3:** Define choking in the context of nozzle flow.
**Answer:** Choking is the condition where the flow velocity at the narrowest point (throat) of a nozzle reaches the speed of sound (Mach 1), and the mass flow rate through the nozzle becomes maximum and independent of further decreases in back pressure.

**Question 4:** A steam nozzle converts thermal energy to kinetic energy. Is this process generally considered reversible or irreversible? Explain.
**Answer:** While the ideal expansion in a nozzle is assumed to be isentropic (reversible adiabatic), real nozzles involve irreversibilities like friction and turbulence. Therefore, the actual process is irreversible. The degree of irreversibility is quantified by the nozzle's isentropic efficiency.

**Question 5:** For a given pressure drop, which type of nozzle will produce a higher exit velocity: a convergent nozzle or a convergent-divergent nozzle?
**Answer:** A convergent-divergent nozzle will produce a higher exit velocity, provided the pressure drop is sufficient to achieve supersonic flow in the divergent section. A convergent nozzle will choke at Mach 1 at its exit if the pressure drop is large enough, but it cannot accelerate the flow beyond sonic velocity.

---

### 6. Summary and Key Takeaways

*   Steam nozzles are essential for preparing high-velocity steam for steam turbines in the Rankine cycle.
*   Their main function is the conversion of enthalpy into kinetic energy.
*   **Convergent nozzles** accelerate subsonic flow and can choke at the throat.
*   **Divergent nozzles** decelerate subsonic flow but accelerate supersonic flow.
*   **Convergent-Divergent (C-D) nozzles** are used to achieve supersonic velocities by combining a convergent section (to reach Mach 1 at the throat) and a divergent section (to accelerate the flow to supersonic speeds).
*   Nozzle efficiency is a measure of how effectively thermal energy is converted to kinetic energy, with real nozzles having efficiencies less than 100% due to friction.
*   The back pressure plays a critical role in determining the flow behavior and performance of a nozzle.

---

This concludes the study notes for "Steam Nozzles: Types of Nozzles" within the context of the Simple Rankine Cycle. These notes are designed to be comprehensive and align with the provided learning outcomes and course outcomes by explaining the fundamental principles and practical applications of steam nozzles in thermal engineering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
