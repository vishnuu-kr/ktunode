---
title: "analysis of discrete and flocculent settling"
subject: "WATER AND AIR QUALITY MANAGEMENT"
module: "Module 2: Water treatment:Aeration and types of aerators"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811852"
status: "completed"
scrapedAt: "2026-05-20T19:06:09.505Z"
---
# Water and Air Quality Management

## Module 2: Water Treatment: Aeration and Types of Aerators

### Topic: Analysis of Discrete and Flocculent Settling

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  **Differentiate between discrete settling and flocculent settling.**
2.  **Explain the factors influencing discrete settling.**
3.  **Describe the characteristics of flocculent settling.**
4.  **Analyze the performance of sedimentation tanks based on settling behavior.**
5.  **Discuss the implications of discrete and flocculent settling for water treatment processes.**

---

### 1. Introduction to Settling in Water Treatment

Settling, or sedimentation, is a crucial physical process in water treatment used to remove suspended solids from water. It relies on gravity to separate denser solid particles from the less dense liquid. Understanding the different types of settling is vital for designing and operating efficient sedimentation tanks.

---

### 2. Types of Sedimentation

Sedimentation is broadly categorized into four types based on the behavior of the suspended particles during settling. For this module, we will focus on two primary types relevant to water treatment:

#### 2.1. Discrete Settling

*   **Definition:** In discrete settling, particles are widely dispersed and do not interact with each other as they settle. Each particle settles independently at a constant velocity determined by its size, density, and the fluid properties.
*   **Characteristics:**
    *   Particles are relatively large and dense (e.g., sand, grit).
    *   Particles are well-separated, with no significant forces of attraction or repulsion between them.
    *   The settling velocity of individual particles remains constant throughout the process.
    *   The interface between the settling solids and the supernatant liquid remains clear and well-defined.
*   **Factors Influencing Discrete Settling:**
    *   **Particle Characteristics:**
        *   **Size:** Larger particles settle faster due to a higher surface area to volume ratio and greater gravitational force relative to drag.
        *   **Density:** Denser particles settle faster because the gravitational force pulling them down is greater than the buoyant force pushing them up.
        *   **Shape:** Irregularly shaped particles experience more drag and settle slower than spherical particles of the same volume and density.
    *   **Fluid Characteristics:**
        *   **Viscosity:** Higher viscosity leads to greater drag force, slowing down settling velocity.
        *   **Temperature:** Affects viscosity; higher temperatures generally decrease viscosity, leading to faster settling.
        *   **Density:** Denser fluids exert a stronger buoyant force, slowing down settling.
    *   **Gravitational Force:** The driving force for settling.

*   **Governing Laws:**
    *   **Stokes' Law (for laminar flow, small particles, low Reynolds number):**
        $$v_s = \frac{g(\rho_s - \rho)d^2}{18\mu}$$
        Where:
        *   $v_s$ = settling velocity (m/s)
        *   $g$ = acceleration due to gravity (m/s²)
        *   $\rho_s$ = density of solid particle (kg/m³)
        *   $\rho$ = density of fluid (kg/m³)
        *   $d$ = diameter of particle (m)
        *   $\mu$ = dynamic viscosity of fluid (Pa·s or kg/(m·s))
    *   **Newton's Law (for turbulent flow, large particles, high Reynolds number):**
        $$v_s = \sqrt{\frac{4gd(\rho_s - \rho)}{3 C_D \rho}}$$
        Where $C_D$ is the drag coefficient, which depends on the Reynolds number.

*   **Example in Water Treatment:** The removal of grit and sand in grit chambers. These are large, dense particles that settle quickly and independently.

#### 2.2. Flocculent Settling

*   **Definition:** In flocculent settling, particles are initially dispersed but begin to aggregate and form larger, heavier clumps (flocs) as they settle. These flocs grow in size and settle at increasing velocities.
*   **Characteristics:**
    *   Particles are smaller and lighter than those in discrete settling (e.g., colloidal particles, precipitates from chemical coagulation).
    *   Particles are initially dispersed but tend to attract each other (due to Van der Waals forces, electrostatic attraction, or bridging agents).
    *   As particles aggregate, the flocs become larger and denser.
    *   The settling velocity of the flocs increases as they grow.
    *   The interface between the settling solids and the supernatant liquid is often cloudy and irregular, with a "clear overflow" line that is difficult to discern.
*   **Factors Influencing Flocculent Settling:**
    *   **Particle Characteristics:**
        *   **Size:** Smaller initial particle size.
        *   **Surface Properties:** Tendency to aggregate or coagulate.
        *   **Concentration:** Higher concentrations can promote collision and floc formation.
    *   **Fluid Characteristics:**
        *   **Presence of Coagulants/Flocculants:** Chemicals (like alum or polyacrylamide) are often added to promote flocculation.
        *   **Mixing Intensity:** Gentle mixing can promote collisions, while excessive mixing can break up flocs.
    *   **Time:** Flocculation is a time-dependent process.

*   **Example in Water Treatment:** The settling of flocs formed during the coagulation and flocculation stages of water treatment. Chemicals are added to destabilize and aggregate fine suspended particles into larger flocs that can then be removed by sedimentation.

---

### 3. Analysis of Settling Behavior in Tanks

The settling behavior of particles dictates the design and performance of sedimentation tanks.

#### 3.1. Analyzing Discrete Settling in Tanks

*   **Key Design Parameter:** **Surface Overflow Rate (SOR)** or **Overflow Rate (OVR)**. This is the primary parameter used for designing settling tanks for discrete settling.
    *   **Definition:** The volume of water treated per unit surface area of the tank per unit time.
    *   **Formula:** $SOR = \frac{Q}{A}$
        Where:
        *   $SOR$ = Surface Overflow Rate (e.g., m³/m²/d or m/d)
        *   $Q$ = Flow rate (m³/d)
        *   $A$ = Surface area of the tank (m²)
    *   **Significance:** For effective removal of discrete particles, the SOR should be less than or equal to the settling velocity of the smallest particle that needs to be removed. This ensures that even the slowest settling particles have enough time to settle out before being carried over.
*   **Tank Dimensions:**
    *   **Surface Area (A):** Determined by the SOR and flow rate ($A = Q / SOR$).
    *   **Detention Time (t):** The average time water spends in the tank ($t = V/Q$, where $V$ is the tank volume). While not the primary design parameter for discrete settling, adequate detention time is still necessary.
    *   **Depth:** Influences detention time and sludge accumulation volume.

*   **Ideal Discrete Settling (Héen's Law):**
    *   Héen's law describes the removal efficiency in a rectangular sedimentation tank assuming uniform flow and discrete settling.
    *   **Removal Efficiency ($\eta$) for a particle with settling velocity $v_s$**:
        *   If $v_s > SOR$: $\eta = 100\%$
        *   If $v_s \le SOR$: $\eta = \frac{v_s}{SOR} \times 100\%$
    *   This implies that if the SOR is set equal to the settling velocity of the smallest particle to be removed, 100% removal of that particle will be achieved.

#### 3.2. Analyzing Flocculent Settling in Tanks

*   **Key Design Parameter:** **Detention Time** is more critical than SOR for flocculent settling.
    *   **Significance:** Flocculation is a time-dependent process. Sufficient detention time is needed for particles to aggregate, grow, and then settle.
    *   **Challenge:** The increasing settling velocity of flocs complicates simple removal efficiency calculations based on SOR alone. The interface is unclear, making it hard to determine the "cut-off" settling velocity.
*   **Tank Dimensions:**
    *   **Detention Time (t):** Chosen based on pilot studies or empirical data for effective flocculation and settling. Typical detention times are longer than for discrete settling.
    *   **Surface Area (A):** While SOR is still calculated, it's often a secondary consideration compared to detention time. The tank is designed to provide adequate time for both flocculation and settling.
    *   **Depth:** Important for providing sufficient settling volume and for managing sludge.

*   **Removal Efficiency:**
    *   Difficult to predict precisely due to the dynamic nature of floc growth and settling.
    *   Affected by the efficiency of the upstream coagulation and flocculation processes.
    *   Larger flocs settle faster, but the initial stages require sufficient time.
    *   Tank hydraulics play a significant role; short-circuiting can lead to reduced removal.

---

### 4. Implications for Water Treatment Processes

Understanding the distinction between discrete and flocculent settling is crucial for selecting appropriate treatment units and optimizing their performance.

*   **Discrete Settling:**
    *   **Applications:** Grit chambers, primary sedimentation tanks for raw water with significant coarse solids.
    *   **Design Focus:** Ensuring SOR is low enough to capture target particles.
*   **Flocculent Settling:**
    *   **Applications:** Secondary sedimentation tanks (after biological treatment), clarifiers in chemical coagulation processes.
    *   **Design Focus:** Providing adequate detention time for flocculation and settling, optimizing upstream chemical dosing and mixing.
*   **Mixed Settling:** Realistically, sedimentation tanks often experience a combination of settling types. For example, a primary clarifier might remove some discrete particles as well as begin forming small flocs.

---

### 5. Types of Aerators and their Relevance to Settling

While this topic focuses on settling analysis, it's important to note how aeration relates to the upstream processes that lead to different settling behaviors.

*   **Aeration:** Can be used to remove dissolved gases (like CO2 or H2S), oxidize dissolved iron and manganese, and increase dissolved oxygen.
*   **Impact on Settling:**
    *   **Oxidation of Fe/Mn:** Leads to the formation of precipitates (e.g., Fe(OH)₃, MnO₂) which are often very fine and can contribute to flocculent settling after coagulation.
    *   **Gas Removal:** Can sometimes lead to the formation of small bubbles that might attach to particles, affecting their effective density and settling behavior (though usually detrimental and addressed by defoamers or tank design).
    *   **Biologically Treated Water:** Aeration in biological treatment tanks promotes flocculation of biomass, which then settles in secondary clarifiers (flocculent settling).

---

### 6. Practice Questions and Answers

**Question 1:** Differentiate between discrete settling and flocculent settling, listing two key characteristics for each.

**Answer 1:**
*   **Discrete Settling:** Particles settle independently at a constant velocity. The interface remains clear. Example: Grit removal.
*   **Flocculent Settling:** Particles aggregate to form flocs, which grow and settle at increasing velocities. The interface is cloudy. Example: Settling of coagulated particles.

**Question 2:** A rectangular sedimentation tank is designed to remove discrete particles with a minimum settling velocity of 0.5 m/min. If the flow rate is 10,000 m³/d, what is the required surface area of the tank?

**Answer 2:**
*   Convert flow rate to m³/min: $Q = 10,000 \text{ m³/d} \times \frac{1 \text{ d}}{24 \text{ hr}} \times \frac{1 \text{ hr}}{60 \text{ min}} = 6.94 \text{ m³/min}$
*   Required SOR = minimum settling velocity = 0.5 m/min
*   $A = Q / SOR = 6.94 \text{ m³/min} / 0.5 \text{ m/min} = 13.88 \text{ m²}$

**Question 3:** In which type of settling is the Surface Overflow Rate (SOR) generally the most critical design parameter, and why?

**Answer 3:** SOR is most critical for **discrete settling**. This is because for discrete settling, the SOR can be directly related to the settling velocity of the particles. Setting the SOR equal to the settling velocity of the smallest desired particle ensures its efficient removal. In flocculent settling, the dynamic nature of floc formation and increasing settling velocities makes SOR a less direct predictor of performance compared to detention time.

**Question 4:** You are designing a sedimentation tank for water that has undergone chemical coagulation and flocculation. What type of settling behavior do you expect, and what would be a primary design consideration?

**Answer 4:** You would expect **flocculent settling**. The primary design consideration would be **detention time**, as this is crucial for allowing the flocs to form, grow, and then settle effectively.

---

### 7. Important Points to Remember

*   **Discrete Settling:** Independent particle settling, constant velocity, clear interface. Key design parameter: **Surface Overflow Rate (SOR)**.
*   **Flocculent Settling:** Particles aggregate, increasing velocity, cloudy interface. Key design consideration: **Detention Time**.
*   Stokes' Law governs discrete settling for small particles at low Reynolds numbers.
*   The SOR should be less than or equal to the settling velocity of the smallest particle you want to remove in discrete settling.
*   Upstream processes like coagulation and flocculation are critical for achieving effective flocculent settling.
*   Understanding settling behavior is fundamental to the design and efficient operation of sedimentation tanks in water treatment.

---
