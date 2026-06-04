---
title: "Design of journal bearings"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 3: Bearings and Lubrication: Introduction to lubrication"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d70"
status: "completed"
scrapedAt: "2026-05-20T18:11:00.399Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 3: Bearings and Lubrication: Introduction to lubrication

### Topic: Design of Journal Bearings

**Course Outcome (CO) Alignment:**

*   **CO3: Develop of Sliding contact bearing for industrial applications. (Knowledge Level: K3)** - This topic directly addresses the design principles and procedures for journal bearings, which are a fundamental type of sliding contact bearing.

**Learning Outcomes for this Topic:**

*   Understanding the working principle of journal bearings.
*   Classifying different types of journal bearings.
*   Identifying the key parameters influencing journal bearing performance.
*   Understanding the concept of the Sommerfeld number and its significance.
*   Applying the design procedure for journal bearings.
*   Estimating bearing life and reliability.
*   Selecting appropriate lubrication systems.

---

### 1. Introduction to Journal Bearings

Journal bearings, also known as plain bearings or sleeve bearings, are a type of sliding contact bearing that supports a rotating shaft (journal) in a stationary housing. The relative motion between the shaft and the housing generates a hydrodynamic film of lubricant, which separates the two surfaces and prevents direct metal-to-metal contact, thereby reducing friction and wear.

**Key Concepts:**

*   **Journal:** The rotating shaft or pin that is supported by the bearing.
*   **Bearing:** The stationary housing that supports the journal.
*   **Bearing Material:** The material used for the bearing surface, chosen for its wear resistance, embeddability, conformability, and thermal conductivity.
*   **Lubricant:** The fluid (oil or grease) introduced between the journal and bearing to create a separating film.
*   **Clearance:** The difference between the bearing bore diameter and the journal diameter. It is crucial for establishing and maintaining the lubricant film.
*   **Eccentricity:** The displacement of the journal's center from the bearing's center due to the applied load.

**Working Principle (Hydrodynamic Lubrication):**

1.  **Starting Condition:** At rest or low speeds, metal-to-metal contact occurs, leading to high friction.
2.  **As Speed Increases:** The rotating journal starts to wedge the lubricant into the converging clearance space between the journal and the bearing.
3.  **Pressure Generation:** The relative motion of the journal drags the lubricant, causing it to build up pressure within the converging wedge.
4.  **Lubricant Film Formation:** This generated pressure creates a continuous film of lubricant that completely separates the journal from the bearing surface.
5.  **Load Support:** The pressure in the lubricant film supports the applied load.

**Reference:**
*   **Bhandari, V. B. (2020). Design of Machine Elements (5th ed.).** Chapter on Bearings will provide detailed explanation of hydrodynamic lubrication and journal bearing operation.
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach (5th ed.).** This book offers a visual and integrated approach to understanding bearing mechanics.

---

### 2. Classification of Journal Bearings

Journal bearings can be classified based on various criteria:

**2.1. Based on Lubrication Regime:**

*   **Hydrodynamic Bearings:** Rely on the relative motion of the surfaces to generate a lubricant film (most common).
*   **Hydrostatic Bearings:** Lubricant is supplied under external pressure, independent of relative motion.
*   **Boundary Lubrication Bearings:** Operate with thin lubricant films where surface asperities may come into contact.
*   **Mixed Lubrication Bearings:** A combination of hydrodynamic and boundary lubrication.
*   **Dry Bearings:** Operate without liquid lubrication, often using self-lubricating materials.

**2.2. Based on Geometry/Design:**

*   **Plain Cylindrical Bearings:** Simplest form with a cylindrical bearing surface.
*   **Fitted Bearings:** Journal fits snugly into the bearing, often used for oscillating motion.
*   **Elliptical Bearings:** Bearing bore is elliptical, creating a converging wedge.
*   **Tilting Pad Bearings (Thrust Bearings usually, but can be applied):** Bearing surface is divided into multiple pads that can tilt to optimize lubricant film formation.
*   **Pressure Fed Bearings:** Lubricant is supplied under pressure through grooves.
*   **Splash Lubricated Bearings:** Lubricant is splashed onto the journal and bearing by a rotating element.

**2.3. Based on Load Direction:**

*   **Radial Bearings:** Support loads perpendicular to the shaft axis.
*   **Thrust Bearings:** Support loads parallel to the shaft axis (often involve collars on the shaft and thrust pads).

**Important Point:** For this topic, we will primarily focus on **hydrodynamic radial journal bearings**.

---

### 3. Key Parameters Influencing Journal Bearing Performance

The performance of a journal bearing is critically dependent on several factors:

*   **Load (W):** The force the bearing must support.
*   **Journal Speed (N):** The rotational speed of the shaft.
*   **Bearing Diameter (d):** The diameter of the bearing bore.
*   **Bearing Length (l):** The axial length of the bearing.
*   **Radial Clearance (c):** $c = \frac{d_b - d_j}{2}$, where $d_b$ is bearing diameter and $d_j$ is journal diameter.
*   **Viscosity of Lubricant ($\mu$):** The internal resistance of the fluid to flow. This is highly temperature-dependent.
*   **Temperature of Lubricant (T):** Affects viscosity.
*   **Bearing Material Properties:** Affects wear, embeddability, and thermal conductivity.
*   **Surface Roughness:** Affects lubricant film formation and wear.
*   **Lubricant Delivery Method:** Affects the consistency of lubrication.

**Important Point:** A smaller clearance generally leads to higher pressure and better load-carrying capacity but can increase friction and the risk of seizure if lubrication is poor.

---

### 4. Hydrodynamic Lubrication Theory & Parameters

The fundamental principle behind journal bearing operation is the generation of pressure in the lubricant film due to the relative motion of the journal and bearing.

**4.1. Reynolds Equation:**

The differential equation that describes the pressure distribution in a lubricant film is the Reynolds equation. For a steady-state, incompressible, and Newtonian fluid in a journal bearing, it can be expressed as:

$\frac{1}{r} \frac{\partial}{\partial \theta} \left( \frac{h^3}{12\mu} \frac{\partial p}{\partial \theta} \right) + \frac{\partial}{\partial z} \left( \frac{h^3}{12\mu} \frac{\partial p}{\partial z} \right) = \frac{r \omega}{2} \frac{\partial h}{\partial \theta} - v_h h$

Where:
*   $p$ = pressure in the lubricant film
*   $\mu$ = dynamic viscosity of the lubricant
*   $h$ = film thickness
*   $r$ = radial coordinate
*   $\theta$ = angular coordinate
*   $z$ = axial coordinate
*   $\omega$ = angular velocity of the journal
*   $v_h$ = velocity of oil film in radial direction (often neglected for thin films)

**Simplification for Short Bearings (l/d << 1):**

For short bearings, the axial pressure gradient is negligible ($\frac{\partial p}{\partial z} \approx 0$), simplifying the Reynolds equation.

**4.2. Film Thickness (h):**

The film thickness varies around the bearing due to the eccentricity of the journal.
$h = c(1 + \epsilon \cos \theta)$
Where:
*   $\epsilon = e/c$ is the eccentricity ratio ($e$ is the eccentricity, the distance between journal and bearing centers).
*   $\theta$ is the angular position from the point of minimum film thickness.

**4.3. Pressure Distribution:**

Solving the Reynolds equation with appropriate boundary conditions yields the pressure distribution in the lubricant film. This pressure distribution creates the force that supports the load.

**4.4. Load-Carrying Capacity:**

The load-carrying capacity is the maximum load the bearing can support for a given speed and lubricant. It is calculated by integrating the pressure distribution over the bearing surface.

**4.5. Coefficient of Friction (f):**

The friction force in a journal bearing is primarily due to viscous shearing of the lubricant.
$F_f = \frac{\mu U A}{h_{min}}$ (simplified, for illustration)
$f = \frac{F_f}{W}$

**4.6. Heat Generation and Dissipation:**

Friction in the bearing generates heat. This heat must be dissipated to prevent the lubricant from degrading or reaching dangerously high temperatures. The heat generated is $Q_g = F_f \times V$, where $V$ is the journal surface velocity.

**Reference:**
*   **Sharma, P. C., & Agarwal, D. K. (2017). Machine Design.** This textbook will likely provide a detailed derivation of the Reynolds equation and its application.
*   **Shigley, J. E. (2003). Mechanical Engineering Design.** A classic reference for fundamental lubrication theory and bearing analysis.

---

### 5. The Sommerfeld Number (S)

The Sommerfeld number is a dimensionless parameter that characterizes the operating condition of a journal bearing. It relates the bearing load, speed, viscosity, and geometry.

$S = \left(\frac{r}{c}\right)^2 \frac{\mu N Z}{W}$

Where:
*   $r$ = journal radius
*   $c$ = radial clearance
*   $\mu$ = dynamic viscosity of lubricant
*   $N$ = rotational speed (typically in revolutions per second, rps)
*   $Z$ = bearing axial length (often denoted as 'l')
*   $W$ = bearing load

**Or, using angular velocity $\omega$ (rad/s):**

$S = \left(\frac{r}{c}\right)^2 \frac{\mu \omega}{P}$

Where:
*   $P = \frac{W}{ld}$ is the projected bearing pressure.

**Significance of the Sommerfeld Number:**

The Sommerfeld number is crucial in journal bearing design because it is often used in conjunction with empirical curves (like the Raimondi-Boyd curves or Ocvirk curves) to determine other performance parameters like:

*   Minimum film thickness ($h_{min}$)
*   Coefficient of friction ($f$)
*   Flow rate ($Q$)
*   Lubricant temperature rise ($\Delta T$)
*   Maximum pressure ($p_{max}$)

**Important Point:** A higher Sommerfeld number generally indicates a more stable, thick lubricant film and better load-carrying capacity.

**Reference:**
*   **Mahadevan, K., & Balaveera Reddy, K. (2019). Design Data Hand Book (4th ed.).** This handbook will likely contain charts and data related to the Sommerfeld number and bearing performance.
*   **PSG Design Data (2022).** Similar to Mahadevan and Reddy, this data book will be a valuable resource for empirical data and design charts.

---

### 6. Design Procedure for Journal Bearings

A systematic approach is required for designing a journal bearing. The general steps are:

**Step 1: Gather Design Requirements:**

*   Load ($W$)
*   Journal diameter ($d$)
*   Shaft speed ($N$ or $\omega$)
*   Operating temperature range
*   Permissible bearing temperature rise
*   Lubrication type available
*   Space constraints
*   Environmental conditions

**Step 2: Select Bearing Material:**

Choose a suitable bearing material based on load, speed, operating temperature, desired life, and cost. Common materials include:
*   Bronze alloys (e.g., phosphor bronze, babbitt-lined bronze)
*   Babbitts (white metal alloys, e.g., tin-based, lead-based) - good embeddability and conformability.
*   Aluminum alloys
*   Polymers (e.g., PTFE, nylon) for light duty or specific environments.

**Reference:**
*   **Bhandari, V. B. (2020). Design of Machine Elements (5th ed.).** Chapter on Bearing Materials will provide selection criteria.
*   **Juvinall R.C, Marshek K.M. (2011). Fundamentals of Machine Component Design (5th ed.).** Offers comprehensive information on material properties for bearing applications.

**Step 3: Select Lubricant:**

Choose a lubricant with appropriate viscosity at the operating temperature. Viscosity-temperature charts (e.g., Viscosity Index charts) are used for this.

**Reference:**
*   **Bhandari, V. B. (2020). Design of Machine Elements (5th ed.).** Chapter on Lubricants and Lubrication.

**Step 4: Determine Bearing Geometry (Initial Guess/Selection):**

*   **Bearing Length (l):** A common starting point is to select an $l/d$ ratio between 0.5 and 1.5. For short bearings, $l/d < 1$; for long bearings, $l/d > 1$.
*   **Radial Clearance (c):** The clearance is typically a small fraction of the journal diameter, often in the range of 0.001d to 0.003d. The exact value depends on precision requirements and operating conditions.
*   **Journal Radius (r):** $r = d/2$.

**Step 5: Calculate Projected Bearing Pressure ($P$):**

$P = \frac{W}{ld}$

**Step 6: Calculate the Sommerfeld Number (S):**

Using the selected lubricant viscosity at the expected operating temperature, calculate $S$.

$S = \left(\frac{r}{c}\right)^2 \frac{\mu N}{P}$

**Step 7: Determine Performance Parameters using Design Charts:**

Using the calculated Sommerfeld number and the selected $l/d$ ratio, use empirical charts (e.g., Raimondi-Boyd) to find:

*   **Minimum Film Thickness (h_min):** This is a critical parameter for assessing the risk of seizure. It should be greater than the combined surface roughness of the journal and bearing.
    $h_{min} = c (1 - \epsilon_{max})$ where $\epsilon_{max}$ is the maximum eccentricity ratio obtained from charts.
*   **Coefficient of Friction (f):** Used to calculate friction power loss.
*   **Flow Requirement (Q):** The amount of lubricant needed to maintain the desired operating temperature.
*   **Lubricant Temperature Rise ($\Delta T$):**
    $\Delta T = \frac{Q_g}{c_p \dot{m}} = \frac{F_f \times V}{c_p \times (\rho \times Q)}$
    Where:
    *   $Q_g$ = Heat generated = $F_f \times V = (fW) \times (\pi d N)$
    *   $c_p$ = Specific heat of lubricant
    *   $\dot{m}$ = Mass flow rate of lubricant = $\rho Q$
    *   $\rho$ = Density of lubricant

**Step 8: Check for Adequacy:**

*   **Minimum Film Thickness:** Ensure $h_{min}$ is sufficient (e.g., $h_{min} > \text{combined roughness}$).
*   **Temperature Rise:** Ensure $\Delta T$ is within the acceptable limits for the lubricant and bearing material. If not, adjust bearing geometry, lubricant viscosity, or consider cooling.
*   **Load Capacity:** If the calculated load capacity for the chosen geometry is less than the applied load, redesign (increase bearing area or use a different material/lubricant).
*   **Bearing Pressure:** Ensure $P$ is within the limits for the chosen bearing material.

**Step 9: Select Lubrication System:**

Choose an appropriate method for delivering lubricant to the bearing (e.g., oil rings, wick lubrication, pressure circulation).

**Step 10: Refine Design:**

If any of the checks in Step 8 fail, iterate by adjusting bearing dimensions ($l, d, c$), lubricant viscosity, or bearing material.

**Reference:**
*   **Raghavendra K. (2019). Design of Machine Elements II.** This book may offer specific design case studies and detailed procedural examples.
*   **Spotts, M. F., & Shoup, T. E. (2019). Design of Machine Elements (8th ed.).** Provides established methods and examples for bearing design.

---

### 7. Design of Short Journal Bearings (Ocvirk Approximation)

For short bearings ($l/d < 0.5$), the Ocvirk approximation simplifies the Reynolds equation, leading to analytical solutions for pressure and load. This is often used for initial design estimates.

The load capacity for a short bearing can be approximated as:
$W \approx \frac{\mu U l^3}{c^2} f(\epsilon)$
Where $f(\epsilon)$ is a function of eccentricity ratio.

**Important Point:** The Ocvirk approximation tends to over-predict the load capacity compared to full Reynolds equation solutions.

---

### 8. Bearing Life and Reliability

Bearing life is often defined by the number of cycles or hours of operation before failure due to wear or fatigue. For hydrodynamic bearings, failure is typically associated with:

*   **Seizure:** Due to inadequate lubrication or excessive temperature, leading to metal-to-metal contact and seizure.
*   **Wear:** Gradual removal of material from bearing surfaces.
*   **Fatigue:** Though less common in hydrodynamic bearings than rolling element bearings, surface fatigue can occur under high cyclic stresses.

**Factors Affecting Bearing Life:**

*   Minimum film thickness ($h_{min}$)
*   Lubricant properties (cleanliness, viscosity)
*   Load variations
*   Temperature
*   Surface finish and material quality

**Reliability:**

Reliability is the probability that the bearing will perform its intended function for a specified period under given operating conditions. It's a statistical concept, and for hydrodynamic bearings, it's often related to maintaining adequate film thickness and avoiding conditions that lead to seizure.

**Reference:**
*   **Klebanov, B. M., Barlam, D. M., & Nystrom, F. E. (2019). Machine Elements: Life and Design.** This book may delve into the statistical aspects of bearing life.

---

### 9. Lubrication Systems for Journal Bearings

The effective operation of journal bearings relies on a proper lubrication system.

**9.1. Gravity Lubrication:**

*   **Drop Feed Lubricators:** Deliver oil drop by drop at a controlled rate. Suitable for slow-speed, lightly loaded bearings.
*   **Gravity Feed:** Oil reservoir above the bearing, supplied by gravity through a tube or wick.

**9.2. Wick Lubrication:**

A wick draws oil from a reservoir and delivers it to the bearing surface. Simple and effective for moderate speeds and loads.

**9.3. Splash Lubrication:**

*   **Ring Lubrication:** A rotating ring dips into an oil sump and carries oil up to the shaft, which then distributes it to the bearing. Common in many machines.
*   **Chain Lubrication:** Similar to ring lubrication but uses a chain.
*   **Disc Lubrication:** A rotating disc picks up oil and throws it onto the bearing.

**9.4. Force Feed Lubrication:**

An external pump supplies oil under pressure to the bearing through drilled passages and grooves. This system provides the most reliable and controlled lubrication, suitable for high-speed, high-load applications where precise temperature control is needed.

**9.5. Grease Lubrication:**

Grease, a semi-solid lubricant, can be used in certain applications, especially where a sealed-for-life bearing is desired or where oil leakage is a concern. Selection of the correct grease consistency and base oil viscosity is crucial.

**Reference:**
*   **Bhandari, V. B. (2020). Design of Machine Elements (5th ed.).** Dedicated chapter on lubrication systems.
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach (5th ed.).** Provides practical insights into various lubrication methods.

---

### 10. Design Considerations and Best Practices

*   **Grooving:** Proper placement and design of oil grooves in the bearing surface are essential for uniform lubricant distribution. For centrally loaded bearings, a straight axial groove or a shallow circumferential groove might be used. For fixed-orientation bearings, a half-groove on the unloaded side might be employed.
*   **Bearing Materials:** Consider embeddability (ability to absorb foreign particles) and conformability (ability to deform slightly to match the journal) for softer bearing materials like babbitts. Harder materials like bronze offer better wear resistance but are less forgiving of dirt.
*   **Shaft Misalignment:** Design should account for potential shaft misalignment.
*   **Starting Torque:** Hydrodynamic bearings have higher starting torque than lubricated rolling element bearings because of the absence of a fluid film at rest.
*   **Dynamic Behavior:** At high speeds, journal bearings can exhibit phenomena like oil whirl and whip, which can lead to instability and premature failure.

---

### Practice Questions and Exercises

**Question 1:**
A journal bearing is to support a radial load of 3000 N. The journal diameter is 50 mm and its speed is 1500 rpm. The bearing length is 50 mm. The lubricant used has a viscosity of 0.02 Pa·s at the operating temperature. The radial clearance is 0.05 mm.
Determine:
a) The projected bearing pressure.
b) The Sommerfeld number.
c) If the bearing is operating under a short bearing assumption, estimate the load-carrying capacity using a simplified Ocvirk analysis (you may need to refer to a specific formula for this).

**Answer 1:**
Given:
$W_{applied} = 3000 \, \text{N}$
$d = 50 \, \text{mm} = 0.05 \, \text{m}$
$N = 1500 \, \text{rpm} = 1500/60 \, \text{rps} = 25 \, \text{rps}$
$l = 50 \, \text{mm} = 0.05 \, \text{m}$
$\mu = 0.02 \, \text{Pa} \cdot \text{s}$
$c = 0.05 \, \text{mm} = 0.00005 \, \text{m}$

Calculations:
$r = d/2 = 0.025 \, \text{m}$
$l/d = 50/50 = 1$ (This is not a short bearing, so Ocvirk approximation is less accurate, but for estimation purposes...)

a) Projected bearing pressure, $P = \frac{W_{applied}}{ld}$
$P = \frac{3000 \, \text{N}}{(0.05 \, \text{m})(0.05 \, \text{m})} = \frac{3000}{0.0025} \, \text{N/m}^2 = 1,200,000 \, \text{Pa} = 1.2 \, \text{MPa}$

b) Sommerfeld number, $S = \left(\frac{r}{c}\right)^2 \frac{\mu N}{P}$
$S = \left(\frac{0.025 \, \text{m}}{0.00005 \, \text{m}}\right)^2 \frac{(0.02 \, \text{Pa} \cdot \text{s})(25 \, \text{rps})}{1,200,000 \, \text{Pa}}$
$S = (500)^2 \times \frac{0.5}{1,200,000}$
$S = 250,000 \times \frac{0.5}{1,200,000} = 250,000 \times 0.4167 \times 10^{-6} = 0.104175$

c) Ocvirk approximation for load capacity of a short bearing (assuming a specific formula, e.g., $W = \frac{\pi}{4} \frac{\mu U l^3}{c^2}$ is a simplified form for certain cases or derived with specific assumptions):
Let's use a more generalized form or refer to typical Ocvirk curves. For estimation, if we were to reverse engineer, we'd use S.
If we assume $l/d$ is small for Ocvirk, let's re-evaluate if it's appropriate. Since $l/d = 1$, the Ocvirk approximation is less suitable. However, if the question *insists* on using it for an estimation:

A common formula derived from Ocvirk for a full journal bearing with $l/d \rightarrow 0$ is:
$W = \frac{\mu U l^3}{c^2} \cdot (\frac{\pi}{2}) \cdot \frac{1}{(1-\epsilon^2)^{1/2}}$ (This is a complex form, let's use a simpler referenced one if available in textbooks).

Let's refer to typical design charts. For $S=0.104$ and $l/d=1$, you'd typically look up the eccentricity ratio ($\epsilon$) from Raimondi-Boyd or similar charts.
From typical charts (not provided here, but would be in data books), for $S \approx 0.1$ and $l/d=1$, $\epsilon$ might be around 0.6-0.7.
Then $h_{min} = c(1-\epsilon)$.

**Let's reframe the question for a typical design calculation:**

**Question 2:**
A journal bearing is designed to carry a radial load of 4000 N. The shaft rotates at 1000 rpm. The journal diameter is 60 mm. The bearing is to be designed using a suitable length-to-diameter ratio and lubricant. Select a suitable bearing material, lubricant viscosity at the operating temperature (assume $40^\circ\text{C}$), and determine the bearing dimensions and radial clearance. Check the minimum film thickness and temperature rise if the bearing is made of bronze and the oil flow rate is 0.5 liters/min.
Assume:
*   Specific heat of oil ($c_p$) = 2000 J/kg·K
*   Density of oil ($\rho$) = 850 kg/m³
*   Specific heat of bronze = 385 J/kg·K (for calculating bearing temperature, though less critical for hydrodynamics)
*   Surface roughness: Journal $R_a = 0.8 \, \mu\text{m}$, Bearing $R_a = 1.0 \, \mu\text{m}$
*   Use Raimondi-Boyd charts (or similar conceptual chart data) for performance parameters.

**Answer 2 (Conceptual Steps):**

1.  **Initial Design Choices:**
    *   **Bearing Material:** Bronze (good wear resistance, moderate cost).
    *   **l/d Ratio:** Let's assume $l/d = 1$ initially. So, $l = d = 60 \, \text{mm} = 0.06 \, \text{m}$.
    *   **Journal Radius:** $r = d/2 = 30 \, \text{mm} = 0.03 \, \text{m}$.
    *   **Lubricant:** Assume a mineral oil with viscosity $\mu = 0.015 \, \text{Pa} \cdot \text{s}$ at $40^\circ\text{C}$.

2.  **Calculate Projected Pressure:**
    $P = \frac{W}{ld} = \frac{4000 \, \text{N}}{(0.06 \, \text{m})(0.06 \, \text{m})} = \frac{4000}{0.0036} \, \text{Pa} \approx 1.11 \times 10^6 \, \text{Pa} = 1.11 \, \text{MPa}$

3.  **Select Radial Clearance (c):**
    Let's select $c = 0.0015d = 0.0015 \times 60 \, \text{mm} = 0.09 \, \text{mm}$.

4.  **Calculate Sommerfeld Number:**
    $N = 1000 \, \text{rpm} = 1000/60 \, \text{rps} \approx 16.67 \, \text{rps}$.
    $S = \left(\frac{r}{c}\right)^2 \frac{\mu N}{P} = \left(\frac{30 \, \text{mm}}{0.09 \, \text{mm}}\right)^2 \frac{(0.015 \, \text{Pa} \cdot \text{s})(16.67 \, \text{rps})}{1.11 \times 10^6 \, \text{Pa}}$
    $S = (333.3)^2 \times \frac{0.25}{1.11 \times 10^6} = 111111 \times 0.225 \times 10^{-6} \approx 0.025$

5.  **Determine Performance Parameters from Charts (Conceptual):**
    *   Using Raimondi-Boyd charts for $l/d = 1$ and $S = 0.025$, we would find:
        *   Eccentricity Ratio ($\epsilon$) $\approx 0.75$ (assuming this value from typical charts).
        *   Minimum Film Thickness parameter ($h_{min}/c$) $\approx 0.25$.
        *   Coefficient of Friction parameter ($f \cdot (r/c)$) $\approx 7$.

6.  **Calculate Minimum Film Thickness:**
    $h_{min} = (h_{min}/c) \times c = 0.25 \times 0.09 \, \text{mm} = 0.0225 \, \text{mm} = 22.5 \, \mu\text{m}$.
    Combined surface roughness = $3 \times R_{a(journal)} + 3 \times R_{a(bearing)} = 3 \times 0.8 + 3 \times 1.0 = 2.4 + 3.0 = 5.4 \, \mu\text{m}$.
    Since $h_{min} (22.5 \, \mu\text{m}) >> 5.4 \, \mu\text{m}$, the lubrication is likely adequate to prevent direct metal contact.

7.  **Calculate Coefficient of Friction and Friction Power:**
    $f \cdot (r/c) = 7 \implies f = 7 \times (c/r) = 7 \times (0.09/30) = 7 \times 0.003 = 0.021$.
    Friction force, $F_f = fW = 0.021 \times 4000 \, \text{N} = 84 \, \text{N}$.
    Shaft velocity, $V = \pi d N = \pi (0.06 \, \text{m})(1000/60 \, \text{rps}) \approx 10.47 \, \text{m/s}$.
    Heat generated, $Q_g = F_f \times V = 84 \, \text{N} \times 10.47 \, \text{m/s} \approx 879.5 \, \text{W}$.

8.  **Calculate Temperature Rise:**
    Oil flow rate $Q = 0.5 \, \text{L/min} = 0.5 \times 10^{-3} \, \text{m}^3 / 60 \, \text{s} \approx 8.33 \times 10^{-6} \, \text{m}^3/\text{s}$.
    Mass flow rate $\dot{m} = \rho Q = 850 \, \text{kg/m}^3 \times 8.33 \times 10^{-6} \, \text{m}^3/\text{s} \approx 0.00708 \, \text{kg/s}$.
    Temperature rise, $\Delta T = \frac{Q_g}{c_p \dot{m}} = \frac{879.5 \, \text{W}}{(2000 \, \text{J/kg} \cdot \text{K})(0.00708 \, \text{kg/s})} \approx \frac{879.5}{14.16} \, \text{K} \approx 62 \, \text{K} = 62^\circ\text{C}$.

9.  **Check Temperature Rise:** If the ambient temperature is $25^\circ\text{C}$, the bearing operating temperature would be $25 + 62 = 87^\circ\text{C}$. This is generally acceptable for many lubricating oils. If it were too high, one might reduce clearance, increase flow rate, or select a lower viscosity oil if the initial choice was too high.

**Important Note:** The answers for performance parameters (like $\epsilon$, $h_{min}/c$, $f \cdot (r/c)$) are highly dependent on the specific design charts used. These are illustrative calculations.

---

### Important Points to Remember

*   **Hydrodynamic lubrication is key:** The goal is to maintain a fluid film separating the surfaces.
*   **Sommerfeld number (S):** A critical dimensionless parameter for design.
*   **Minimum film thickness ($h_{min}$):** Must be greater than the combined surface roughness to prevent seizure.
*   **Clearance (c):** Crucial for creating the wedge action. Too small a clearance can lead to starvation, too large can reduce load capacity.
*   **Viscosity ($\mu$):** Highly temperature-dependent and essential for pressure generation.
*   **l/d Ratio:** Affects load capacity and stability. Short bearings ($l/d < 1$) are more prone to instability but easier to manufacture. Long bearings ($l/d > 1$) have higher load capacity but are more sensitive to misalignment.
*   **Bearing Materials:** Balance of wear resistance, embeddability, conformability, and thermal conductivity is needed.
*   **Lubrication system:** Must reliably deliver the correct amount of lubricant at the operating temperature.

---
This comprehensive set of notes covers the fundamental aspects of journal bearing design, aligning with the specified learning outcomes and course objectives. The inclusion of definitions, procedures, a design example, and key takeaways aims to facilitate a thorough understanding of the topic. Remember to consult the recommended textbooks and data handbooks for specific charts, empirical data, and detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
