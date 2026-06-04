---
title: "Theory and principles of sedimentation-Stoke’s Law-Types of settling - Design of plain sedimentation tanks"
subject: "ENVIRONMENTAL ENGINEERING"
module: "Module 1: Introduction to environmental engineering"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e00"
status: "completed"
scrapedAt: "2026-05-20T18:48:11.286Z"
---
# Environmental Engineering: Module 1 - Introduction to Environmental Engineering

## Topic: Theory and Principles of Sedimentation, Stoke’s Law, Types of Settling, and Design of Plain Sedimentation Tanks

---

### Learning Outcomes:

*   Understand the fundamental theory and principles of sedimentation.
*   Explain Stoke's Law and its application in sedimentation.
*   Differentiate between various types of settling.
*   Outline the design principles and considerations for plain sedimentation tanks.

---

### 1. Theory and Principles of Sedimentation

**Definition:** Sedimentation is a physical process used to remove suspended solids from water or wastewater by gravity. It involves allowing the water or wastewater to flow slowly through a tank, giving the suspended particles time to settle out.

**Purpose of Sedimentation:**

*   **Water Treatment:** To remove turbidity, color, and other suspended impurities before further treatment processes like filtration or disinfection.
*   **Wastewater Treatment:** To remove settleable solids (primary sludge) from raw wastewater before biological treatment.
*   **Industrial Processes:** To separate solids from liquids in various industrial applications.

**Key Principles:**

*   **Gravity:** The driving force for sedimentation. Denser particles settle faster than less dense particles or the surrounding fluid.
*   **Fluid Resistance:** As particles move through the fluid, they encounter resistance, which opposes the gravitational force.
*   **Particle Characteristics:** The size, shape, density, and surface characteristics of the suspended particles influence their settling velocity.
*   **Fluid Characteristics:** The viscosity and density of the fluid affect the resistance experienced by the particles.
*   **Flow Conditions:** The velocity of the fluid within the sedimentation tank is crucial. Low flow velocities allow sufficient time for particles to settle.

---

### 2. Stoke’s Law

**Definition:** Stoke's Law describes the terminal settling velocity of a spherical particle in a viscous fluid under laminar flow conditions. It quantifies the relationship between the particle's properties and the fluid properties that determine its settling speed.

**Formula:**

$v_t = \frac{g(\rho_p - \rho_f)d^2}{18\mu}$

Where:

*   $v_t$ = Terminal settling velocity of the particle (m/s)
*   $g$ = Acceleration due to gravity ($9.81 \text{ m/s}^2$)
*   $\rho_p$ = Density of the particle ($\text{kg/m}^3$)
*   $\rho_f$ = Density of the fluid ($\text{kg/m}^3$)
*   $d$ = Diameter of the particle (m)
*   $\mu$ = Dynamic viscosity of the fluid (Pa·s or N·s/m²)

**Assumptions of Stoke’s Law:**

*   The particle is spherical.
*   The particle is small (typically less than 0.1 mm diameter).
*   The flow around the particle is laminar (Reynolds number is low, generally < 1).
*   The particle is falling slowly.
*   The fluid is infinite in extent (no wall effects).
*   There is no slip between the particle surface and the fluid.

**Application in Sedimentation:**

Stoke's Law helps determine the minimum settling velocity required for a particle to be removed in a sedimentation tank. Particles with settling velocities greater than or equal to the overflow rate of the tank will be removed.

**Example:**

Calculate the terminal settling velocity of a spherical silica particle ($d = 0.05$ mm, $\rho_p = 2650 \text{ kg/m}^3$) in water at $20^\circ\text{C}$ ($\rho_f = 998.2 \text{ kg/m}^3$, $\mu = 1.002 \times 10^{-3} \text{ Pa·s}$).

**Solution:**

First, convert the diameter to meters: $d = 0.05 \text{ mm} = 0.05 \times 10^{-3} \text{ m} = 5 \times 10^{-5} \text{ m}$.

Now, apply Stoke's Law:

$v_t = \frac{9.81 \text{ m/s}^2 (2650 \text{ kg/m}^3 - 998.2 \text{ kg/m}^3)(5 \times 10^{-5} \text{ m})^2}{18 \times 1.002 \times 10^{-3} \text{ Pa·s}}$

$v_t = \frac{9.81 \times 1651.8 \times (25 \times 10^{-10})}{18.036 \times 10^{-3}}$

$v_t = \frac{4.054 \times 10^{-5}}{18.036 \times 10^{-3}}$

$v_t \approx 2.25 \times 10^{-3} \text{ m/s}$

**Important Note:** Stoke's Law is an idealization. In reality, particles are often non-spherical, and flow conditions might not always be laminar. However, it provides a fundamental understanding and a useful starting point for design.

---

### 3. Types of Settling

The behavior of suspended solids during sedimentation depends on the concentration of solids and their interaction with each other. We can broadly categorize settling into four types:

**Type I: Discrete Settling (Free Settling)**

*   **Characteristics:** Particles are widely dispersed and do not interfere with each other as they settle. Their settling velocity remains constant.
*   **Conditions:** Low concentration of solids.
*   **Examples:** Grit removal, primary sedimentation of dilute wastewater, removal of larger flocs formed by chemical coagulation.
*   **Stoke's Law Application:** This type of settling is best described by Stoke's Law.

**Type II: Flocculent Settling**

*   **Characteristics:** Particles aggregate and grow larger as they settle, increasing their settling velocity.
*   **Conditions:** Medium concentration of solids where particles collide and form flocs.
*   **Examples:** Primary sedimentation of raw wastewater, settling of coagulated and flocculated water.
*   **Behavior:** Settling velocity increases with time and depth.

**Type III: Hindered Settling (Zone Settling)**

*   **Characteristics:** High concentration of solids. Particles are so close that they form a lattice structure, and the entire mass settles at a uniform velocity. Upward flow of displaced fluid occurs through the voids of the lattice.
*   **Conditions:** High concentration of solids.
*   **Examples:** Thickeners in sludge treatment.
*   **Behavior:** Settling velocity decreases with time. The interface between the settled sludge and the clear liquid remains relatively sharp.

**Type IV: Compression Settling**

*   **Characteristics:** Very high concentration of solids. Particles are in close contact, and the settling is due to consolidation and compression of the sludge mass.
*   **Conditions:** Very high concentration of solids where the settling velocity becomes negligible.
*   **Examples:** Sludge thickening under its own weight.
*   **Behavior:** Settling occurs due to the expulsion of water from the sludge blanket.

**Graphical Representation of Settling Velocities:**

*   A plot of settling velocity versus time (or depth) can illustrate these types:
    *   **Discrete:** Constant velocity.
    *   **Flocculent:** Increasing velocity.
    *   **Hindered:** Decreasing velocity.
    *   **Compression:** Negligible velocity (or very slow decrease).

---

### 4. Design of Plain Sedimentation Tanks

**Purpose:** To remove settleable solids by providing sufficient detention time and quiescent flow conditions.

**Types of Plain Sedimentation Tanks:**

*   **Rectangular Tanks:** Most common type. Flow is horizontal.
*   **Circular Tanks:** Flow is radial inwards or outwards. Often called clarifiers.
*   **Imhoff Tanks:** Two-story tanks for combined sedimentation and anaerobic digestion.
*   **Upflow Tanks:** (e.g., Lamella clarifiers, Pulsator clarifiers) Flow is upwards, and solids settle against the flow.

**Key Design Parameters for Rectangular and Circular Tanks:**

*   **Surface Overflow Rate (SOR) / Weir Loading Rate (WLR):**
    *   **Definition:** The volume of water passing over a unit area of the tank's surface per unit time. It is the most critical parameter for designing sedimentation tanks for discrete settling. It represents the settling velocity of the smallest particle that should theoretically be removed.
    *   **Formula:** $SOR = \frac{Q}{A}$
        *   $Q$ = Flow rate ($\text{m}^3/\text{d}$ or $\text{m}^3/\text{h}$)
        *   $A$ = Surface area of the tank ($\text{m}^2$)
    *   **Typical Values:**
        *   Water Treatment: $20 - 40 \text{ m}^3/\text{m}^2/\text{d}$
        *   Wastewater Treatment (Primary): $30 - 50 \text{ m}^3/\text{m}^2/\text{d}$
    *   **Relationship to Stoke's Law:** $v_t \geq SOR$ for theoretical removal of particles.

*   **Detention Time (DT) / Nominal Detention Time (NDT):**
    *   **Definition:** The average time a particle or fluid element spends in the tank. It ensures sufficient time for settling.
    *   **Formula:** $DT = \frac{V}{Q}$
        *   $V$ = Volume of the tank ($\text{m}^3$)
        *   $Q$ = Flow rate ($\text{m}^3/\text{d}$ or $\text{m}^3/\text{h}$)
    *   **Typical Values:**
        *   Water Treatment: 2 - 4 hours
        *   Wastewater Treatment (Primary): 1.5 - 2.5 hours
    *   **Note:** Detention time is more important for flocculent settling where particles grow and settle over time.

*   **Flow Velocity (Horizontal or Vertical):**
    *   **Horizontal Velocity ($V_h$):** The velocity of the fluid flow across the tank. Should be low enough to prevent resuspension of settled solids.
        *   $V_h = \frac{Q}{B \times H}$ (for rectangular tanks)
        *   $B$ = Width of tank, $H$ = Depth of tank
    *   **Vertical Velocity ($V_v$):** The velocity of fluid rising in the tank (especially in upflow tanks).
    *   **General Guideline:** Horizontal velocity should be kept below a certain limit (e.g., $< 1.5 \text{ m/min}$ for wastewater to avoid resuspension).

*   **Depth of Tank:**
    *   Influences detention time and the potential for short-circuiting.
    *   Typical depths: 3 - 5 meters for rectangular tanks. Deeper tanks can reduce short-circuiting but may require more pumping power.

*   **Weir Loading Rate (WLR) - for Circular Tanks:**
    *   **Definition:** The flow rate per unit length of the effluent weir.
    *   **Formula:** $WLR = \frac{Q}{L}$
        *   $L$ = Circumference of the tank (length of weir)
    *   **Importance:** To ensure uniform withdrawal of clarified water and prevent scour of settled sludge.
    *   **Typical Values:** 10 - 25 $\text{m}^3/\text{m}/\text{d}$ for wastewater.

*   **Sludge Removal Mechanism:**
    *   **Rectangular:** Scrapers with flights that move sludge to a hopper at one end.
    *   **Circular:** Rotating scraper arms that move sludge to a central hopper.

*   **Inlet and Outlet Structures:**
    *   **Inlets:** Designed to distribute flow uniformly across the tank cross-section and minimize turbulence (e.g., baffles, submerged inlet pipes).
    *   **Outlets:** Effluent weirs or slots designed for uniform withdrawal of clarified water.

*   **Baffling:**
    *   Used to promote quiescent conditions and prevent short-circuiting.
    *   Inlet baffles to dissipate incoming energy.
    *   Outlet baffles to ensure uniform weir loading and prevent floating solids from escaping.

**Design Steps (Simplified for a Rectangular Plain Sedimentation Tank in Water Treatment):**

1.  **Determine the design flow rate ($Q$).**
2.  **Select a suitable Surface Overflow Rate (SOR) based on water treatment standards.**
3.  **Calculate the required surface area ($A$):** $A = \frac{Q}{SOR}$.
4.  **Choose a length-to-width ratio (L:W) for the tank.** Common ratios are 3:1 to 5:1.
5.  **Calculate the dimensions (Length, Width) from the area and the chosen ratio.**
6.  **Select a suitable Detention Time (DT).**
7.  **Calculate the required Volume ($V$):** $V = Q \times DT$.
8.  **Determine the tank depth ($H$) based on the volume and surface area:** $H = \frac{V}{A}$. Ensure the depth is within practical limits (e.g., 3-5m).
9.  **Check horizontal velocity ($V_h$) to ensure it's not too high.**
10. **Design inlet and outlet structures, and consider baffling.**
11. **Specify the sludge removal mechanism.**

**Example Design Problem:**

Design a rectangular plain sedimentation tank for a water treatment plant with a flow rate of $50,000 \text{ m}^3/\text{d}$. Assume an SOR of $30 \text{ m}^3/\text{m}^2/\text{d}$ and a detention time of 3 hours.

**Solution:**

1.  **Flow Rate ($Q$):** $50,000 \text{ m}^3/\text{d}$.
2.  **Surface Overflow Rate (SOR):** $30 \text{ m}^3/\text{m}^2/\text{d}$.
3.  **Required Surface Area ($A$):**
    $A = \frac{Q}{SOR} = \frac{50,000 \text{ m}^3/\text{d}}{30 \text{ m}^3/\text{m}^2/\text{d}} = 1666.67 \text{ m}^2$.
4.  **Detention Time (DT):** 3 hours. Convert to days: $DT = \frac{3 \text{ hours}}{24 \text{ hours/d}} = 0.125 \text{ d}$.
5.  **Required Volume ($V$):**
    $V = Q \times DT = 50,000 \text{ m}^3/\text{d} \times 0.125 \text{ d} = 6250 \text{ m}^3$.
6.  **Tank Depth ($H$):**
    $H = \frac{V}{A} = \frac{6250 \text{ m}^3}{1666.67 \text{ m}^2} = 3.75 \text{ m}$.
    This depth is reasonable for a sedimentation tank.
7.  **Tank Dimensions:**
    Let's assume a Length-to-Width ratio (L:W) of 4:1.
    $A = L \times W = (4W) \times W = 4W^2$.
    $1666.67 \text{ m}^2 = 4W^2$.
    $W^2 = \frac{1666.67}{4} = 416.67 \text{ m}^2$.
    $W = \sqrt{416.67} \approx 20.4 \text{ m}$.
    $L = 4W = 4 \times 20.4 \approx 81.6 \text{ m}$.
    So, two tanks, each approximately $81.6 \text{ m} \times 20.4 \text{ m} \times 3.75 \text{ m}$.
    We could also use one tank of these dimensions.
8.  **Check Horizontal Velocity ($V_h$):**
    Let's use one tank of $81.6 \text{ m} \times 20.4 \text{ m}$ with a depth of $3.75 \text{ m}$.
    Cross-sectional area for flow = $W \times H = 20.4 \text{ m} \times 3.75 \text{ m} = 76.5 \text{ m}^2$.
    $V_h = \frac{Q}{W \times H} = \frac{50,000 \text{ m}^3/\text{d}}{76.5 \text{ m}^2 \times 24 \text{ hours/d}} = \frac{50,000}{1836} \approx 27.2 \text{ m/hour}$
    $V_h \approx 0.45 \text{ m/min}$. This velocity is acceptable.

**Therefore, the designed tank could be:** A single rectangular tank with dimensions of approximately $81.6 \text{ m}$ length, $20.4 \text{ m}$ width, and $3.75 \text{ m}$ depth, with appropriate inlet/outlet structures and sludge removal mechanism.

---

### Practice Questions and Exercises:

**Question 1:**
A spherical particle of diameter $0.01$ mm and density $2500 \text{ kg/m}^3$ settles in water at $20^\circ\text{C}$. Calculate its terminal settling velocity using Stoke's Law.
($g = 9.81 \text{ m/s}^2$, $\rho_f = 998.2 \text{ kg/m}^3$, $\mu = 1.002 \times 10^{-3} \text{ Pa·s}$)

**Answer 1:**
$d = 0.01 \text{ mm} = 1 \times 10^{-5} \text{ m}$
$v_t = \frac{9.81 \times (2500 - 998.2) \times (1 \times 10^{-5})^2}{18 \times 1.002 \times 10^{-3}}$
$v_t = \frac{9.81 \times 1501.8 \times 1 \times 10^{-10}}{18.036 \times 10^{-3}}$
$v_t = \frac{1.473 \times 10^{-6}}{18.036 \times 10^{-3}} \approx 8.17 \times 10^{-5} \text{ m/s}$

**Question 2:**
What type of settling is characterized by particles settling at a constant velocity and not interfering with each other?
a) Flocculent Settling
b) Hindered Settling
c) Discrete Settling
d) Compression Settling

**Answer 2:**
c) Discrete Settling

**Question 3:**
A primary sedimentation tank in a wastewater treatment plant has a flow rate of $30,000 \text{ m}^3/\text{d}$. If the tank dimensions are $25 \text{ m}$ long, $10 \text{ m}$ wide, and $4 \text{ m}$ deep, calculate:
a) The surface overflow rate.
b) The detention time.

**Answer 3:**
a) **Surface Overflow Rate (SOR):**
   Surface Area ($A$) = Length $\times$ Width = $25 \text{ m} \times 10 \text{ m} = 250 \text{ m}^2$.
   $SOR = \frac{Q}{A} = \frac{30,000 \text{ m}^3/\text{d}}{250 \text{ m}^2} = 120 \text{ m}^3/\text{m}^2/\text{d}$.

b) **Detention Time (DT):**
   Volume ($V$) = Length $\times$ Width $\times$ Depth = $25 \text{ m} \times 10 \text{ m} \times 4 \text{ m} = 1000 \text{ m}^3$.
   $DT = \frac{V}{Q} = \frac{1000 \text{ m}^3}{30,000 \text{ m}^3/\text{d}} = 0.0333 \text{ d}$.
   Convert to hours: $DT = 0.0333 \text{ d} \times 24 \text{ hours/d} \approx 0.8 \text{ hours}$.

**Question 4:**
List three important design considerations for plain sedimentation tanks.

**Answer 4:**
Any three of the following:
*   Surface Overflow Rate (SOR)
*   Detention Time (DT)
*   Flow Velocity (horizontal and vertical)
*   Tank Depth
*   Weir Loading Rate (WLR)
*   Inlet and Outlet Structures
*   Baffling
*   Sludge Removal Mechanism

---

### Important Points to Remember:

*   **Stoke's Law** is fundamental for understanding particle settling velocity but has limitations (spherical, laminar flow, etc.).
*   **SOR** is the primary design parameter for discrete settling, dictating the minimum settling velocity for particle removal.
*   **Detention Time** is crucial for flocculent settling, allowing particles time to aggregate and settle.
*   **Low flow velocities** within the tank are essential to prevent the resuspension of settled solids.
*   **Inlet and outlet structures** are critical for ensuring uniform flow distribution and minimizing turbulence.
*   **Type of settling** depends heavily on the concentration of suspended solids.
*   **Plain sedimentation tanks** are a basic but vital unit operation in both water and wastewater treatment.

---
