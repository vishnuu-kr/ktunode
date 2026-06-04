---
title: "important dimensional numbers and their significance"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a80"
status: "completed"
scrapedAt: "2026-05-20T18:46:40.686Z"
---
# Mechanics of Fluid Flow - Module 4: Dimensional Analysis and Hydraulic Similitude

## Topic: Important Dimensional Numbers and Their Significance

---

### **Learning Outcomes:**

*   Understand the concept and importance of dimensional numbers.
*   Identify and define key dimensional numbers used in fluid mechanics.
*   Explain the physical significance of each dimensional number.
*   Apply dimensional numbers to analyze and predict fluid flow behavior.
*   Recognize the role of dimensional numbers in scaling up experiments (hydraulic similitude).

---

### **1. Introduction to Dimensional Analysis and Dimensional Numbers**

**Dimensional Analysis** is a powerful mathematical technique used to reduce the number of variables in a physical problem by combining them into a smaller number of dimensionless groups. This is particularly useful in experimental fluid mechanics, as it helps in designing experiments, scaling up results from models to prototypes, and understanding the fundamental relationships governing fluid flow.

**Dimensional Numbers (Dimensionless Groups)** are quantities that have no dimensions. They are formed by combining various physical parameters (like length, mass, time, velocity, pressure, viscosity, density, etc.) in such a way that all dimensions cancel out.

**Why are Dimensional Numbers Important?**

*   **Simplification:** Reduces the number of independent variables in a complex problem.
*   **Experiment Design:** Helps in planning and designing scaled models for testing.
*   **Data Correlation:** Allows for the correlation of experimental data from different scales and conditions.
*   **Understanding Physics:** Reveals the underlying physical principles governing a phenomenon.
*   **Predictive Power:** Enables prediction of the behavior of a prototype based on model tests.

---

### **2. Key Dimensional Numbers and Their Significance**

Here, we will explore the most important dimensional numbers encountered in fluid mechanics.

#### **2.1. Reynolds Number (Re)**

*   **Definition:** The Reynolds number is a dimensionless quantity that represents the ratio of inertial forces to viscous forces within a fluid. It is a crucial parameter for predicting flow patterns in different fluid flow situations.

*   **Formula:**
    $Re = \frac{\text{Inertial Forces}}{\text{Viscous Forces}} = \frac{\rho v L}{\mu} = \frac{v L}{\nu}$

    Where:
    *   $\rho$ (rho) = Density of the fluid ($ML^{-3}$)
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)
    *   $L$ = Characteristic linear dimension (e.g., pipe diameter, chord length) ($L$)
    *   $\mu$ (mu) = Dynamic viscosity of the fluid ($ML^{-1}T^{-1}$)
    *   $\nu$ (nu) = Kinematic viscosity of the fluid ($\mu/\rho$) ($L^2T^{-1}$)

*   **Physical Significance:**
    *   **Low Re:** Viscous forces dominate. The flow is generally smooth, orderly, and occurs in layers, known as **laminar flow**. Think of honey flowing slowly.
    *   **High Re:** Inertial forces dominate. The flow becomes chaotic, irregular, with swirling eddies and significant mixing, known as **turbulent flow**. Think of a fast-flowing river or water from a faucet.
    *   **Intermediate Re:** A transition region where the flow can switch between laminar and turbulent.

*   **Examples:**
    *   Flow through a pipe: $L$ is the pipe diameter.
    *   Flow over a flat plate: $L$ is the distance from the leading edge.
    *   Flow around a sphere: $L$ is the sphere's diameter.

*   **Importance:** The Reynolds number is fundamental in determining whether a flow will be laminar or turbulent, which significantly impacts drag, heat transfer, and mixing.

#### **2.2. Froude Number (Fr)**

*   **Definition:** The Froude number is a dimensionless quantity that represents the ratio of inertial forces to gravitational forces. It is particularly important in situations where gravity plays a significant role, such as open channel flow, ship hydrodynamics, and wave phenomena.

*   **Formula:**
    $Fr = \sqrt{\frac{\text{Inertial Forces}}{\text{Gravitational Forces}}} = \sqrt{\frac{v^2}{g L}} = \frac{v}{\sqrt{g L}}$

    Where:
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)
    *   $g$ = Acceleration due to gravity ($LT^{-2}$)
    *   $L$ = Characteristic linear dimension (e.g., water depth, ship length) ($L$)

*   **Physical Significance:**
    *   **Fr < 1 (Subcritical Flow):** Gravitational forces are dominant. Waves can propagate upstream against the flow. In open channels, the flow is tranquil, with a slow, deep profile.
    *   **Fr = 1 (Critical Flow):** Inertial and gravitational forces are balanced. This is a transitional state.
    *   **Fr > 1 (Supercritical Flow):** Inertial forces are dominant. Waves cannot propagate upstream against the flow. In open channels, the flow is rapid, shallow, and prone to hydraulic jumps.

*   **Examples:**
    *   Flow in open channels: $L$ is the hydraulic depth (flow area divided by top width) or flow depth.
    *   Flow around a ship hull: $L$ is the ship's length.
    *   Waves generated by an object: $L$ is related to the size of the object or the wavelength.

*   **Importance:** Crucial for analyzing open channel flow (e.g., rivers, spillways) and the behavior of floating bodies where wave drag is significant.

#### **2.3. Mach Number (M or Ma)**

*   **Definition:** The Mach number is a dimensionless quantity representing the ratio of the fluid velocity to the speed of sound in the fluid. It is used to describe the compressibility effects in fluid flow.

*   **Formula:**
    $M = \frac{v}{c}$

    Where:
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)
    *   $c$ = Speed of sound in the fluid ($LT^{-1}$)

*   **Physical Significance:**
    *   **M < 1 (Subsonic Flow):** Fluid velocity is less than the speed of sound. Compressibility effects are generally negligible for gases, and the flow can often be treated as incompressible.
    *   **M = 1 (Sonic Flow):** Fluid velocity is equal to the speed of sound.
    *   **M > 1 (Supersonic Flow):** Fluid velocity is greater than the speed of sound. Shock waves can form, and there are significant compressibility effects.
    *   **M >> 1 (Hypersonic Flow):** Very high Mach numbers, often associated with high temperatures and significant aerodynamic heating.

*   **Examples:**
    *   Aerodynamics of aircraft: $v$ is the aircraft speed.
    *   Flow through gas turbines and jet engines.
    *   High-speed gas jets.

*   **Importance:** Essential for understanding and designing high-speed aircraft, rockets, and other systems involving compressible fluid flow.

#### **2.4. Euler Number (Eu)**

*   **Definition:** The Euler number is a dimensionless quantity representing the ratio of pressure forces to inertial forces. It is used in situations where pressure differences are the primary driving force for flow.

*   **Formula:**
    $Eu = \frac{\Delta p}{\rho v^2}$

    Where:
    *   $\Delta p$ (delta p) = Characteristic pressure difference ($ML^{-1}T^{-2}$)
    *   $\rho$ (rho) = Density of the fluid ($ML^{-3}$)
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)

*   **Physical Significance:** The Euler number quantifies the relative importance of pressure forces compared to kinetic energy. It is often related to the drag coefficient in many situations. A lower Euler number indicates that pressure forces are significant relative to the flow's kinetic energy.

*   **Examples:**
    *   Flow through nozzles and orifices.
    *   Pressure drop across a pipe fitting.
    *   Forces on submerged objects.

*   **Importance:** Useful for analyzing pressure drops and relating them to flow velocities, particularly in applications where compressibility is negligible.

#### **2.5. Weber Number (We)**

*   **Definition:** The Weber number is a dimensionless quantity that represents the ratio of inertial forces to surface tension forces. It is important in situations involving interfaces between liquids and gases, such as droplet formation, atomization, and bubble dynamics.

*   **Formula:**
    $We = \frac{\rho v^2 L}{\sigma}$

    Where:
    *   $\rho$ (rho) = Density of the fluid ($ML^{-3}$)
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)
    *   $L$ = Characteristic length (e.g., droplet diameter) ($L$)
    *   $\sigma$ (sigma) = Surface tension of the liquid ($MT^{-2}$)

*   **Physical Significance:**
    *   **High We:** Inertial forces are dominant. Surface tension is less effective, leading to phenomena like breakup of liquid jets into droplets.
    *   **Low We:** Surface tension forces are dominant, tending to keep the liquid together (e.g., formation of spherical droplets).

*   **Examples:**
    *   Atomization of fuel sprays.
    *   Formation of bubbles in boiling liquids.
    *   Capillary rise.

*   **Importance:** Crucial for understanding processes involving interfaces and the formation of sprays and droplets.

#### **2.6. Strouhal Number (St)**

*   **Definition:** The Strouhal number is a dimensionless quantity that characterizes oscillating flows or flow-induced vibrations. It represents the ratio of the characteristic time scale of the flow to the time scale of the oscillation.

*   **Formula:**
    $St = \frac{f L}{v}$

    Where:
    *   $f$ = Frequency of oscillation ($T^{-1}$)
    *   $L$ = Characteristic length ($L$)
    *   $v$ = Characteristic velocity of the fluid ($LT^{-1}$)

*   **Physical Significance:**
    *   The Strouhal number relates the frequency of vortex shedding (or other unsteady flow phenomena) to the flow velocity and a characteristic dimension.
    *   For a given geometry and flow regime, vortex shedding occurs at a specific Strouhal number. This means the shedding frequency is proportional to the velocity.

*   **Examples:**
    *   Vortex shedding behind a cylinder (e.g., wind blowing over a flagpole, causing it to flutter).
    *   Flutter of airfoils.
    *   Flow-induced vibration of marine structures.

*   **Importance:** Essential for analyzing and predicting unsteady flow phenomena and associated vibrations.

#### **2.7. Prandtl Number (Pr)**

*   **Definition:** The Prandtl number is a dimensionless quantity that represents the ratio of momentum diffusivity (kinematic viscosity) to thermal diffusivity. It relates the velocity boundary layer thickness to the thermal boundary layer thickness.

*   **Formula:**
    $Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}$

    Where:
    *   $\nu$ (nu) = Kinematic viscosity ($L^2T^{-1}$)
    *   $\alpha$ (alpha) = Thermal diffusivity ($\frac{k}{\rho c_p}$) ($L^2T^{-1}$)
    *   $\mu$ (mu) = Dynamic viscosity ($ML^{-1}T^{-1}$)
    *   $c_p$ = Specific heat at constant pressure ($L^2T^{-2}\Theta^{-1}$)
    *   $k$ = Thermal conductivity ($MLT^{-3}\Theta^{-1}$)
    *   $\Theta$ represents temperature dimension.

*   **Physical Significance:**
    *   **Pr ≈ 1:** Momentum and thermal diffusivity are roughly equal. The velocity and thermal boundary layers have similar thicknesses. Common for gases.
    *   **Pr >> 1:** Momentum diffusivity is much greater than thermal diffusivity. The thermal boundary layer is much thinner than the velocity boundary layer. Common for oils and viscous liquids.
    *   **Pr << 1:** Thermal diffusivity is much greater than momentum diffusivity. The velocity boundary layer is much thinner than the thermal boundary layer. Common for liquid metals.

*   **Examples:**
    *   Heat transfer in heat exchangers.
    *   Cooling or heating of surfaces by fluid flow.
    *   Combustion processes.

*   **Importance:** Crucial for analyzing convective heat transfer problems.

---

### **3. Practice Questions and Exercises**

**Question 1:**
A model airplane is being tested in a wind tunnel. The air speed in the tunnel is 10 m/s. The airplane has a characteristic length of 0.5 m. If the full-scale airplane is expected to fly at 100 m/s, and the characteristic length of the full-scale airplane is 5 m, what is the appropriate Reynolds number for the model test if the flow is to be dynamically similar?

**Answer 1:**
For dynamic similarity, the Reynolds number must be the same for the model and the prototype.
$Re_{model} = Re_{prototype}$
$\frac{\rho_m v_m L_m}{\mu_m} = \frac{\rho_p v_p L_p}{\mu_p}$

Assuming the fluid is air and at similar conditions (so $\rho$ and $\mu$ are the same):
$v_m L_m = v_p L_p$
$10 \, \text{m/s} \times 0.5 \, \text{m} = 100 \, \text{m/s} \times 5 \, \text{m}$
$5 \, \text{m}^2/\text{s} = 500 \, \text{m}^2/\text{s}$

This indicates a mismatch in scaling for Reynolds number. The question likely implies a scenario where you *need* to achieve similarity based on Reynolds number. Let's rephrase: "What air speed should the model airplane be tested at in the wind tunnel (with air conditions the same as prototype) to achieve dynamic similarity if the characteristic length of the model is 0.5 m and the characteristic length and velocity of the prototype are 5 m and 100 m/s respectively?"

$Re_{model} = Re_{prototype}$
$\frac{\rho v_m L_m}{\mu} = \frac{\rho v_p L_p}{\mu}$
$v_m L_m = v_p L_p$
$v_m \times 0.5 \, \text{m} = 100 \, \text{m/s} \times 5 \, \text{m}$
$v_m = \frac{100 \times 5}{0.5} = 1000 \, \text{m/s}$

This result is impractical for a wind tunnel. This highlights that achieving similarity for all dimensionless numbers simultaneously can be challenging. The question as originally stated implies you are given model conditions and asked for the required Re, which would be $10 \times 0.5 = 5$. However, to match a prototype of $100 \times 5 = 500$, the model Re needs to be 500.

Let's assume the question meant: "If the model airplane has a characteristic length of 0.5 m and the prototype has a characteristic length of 5 m, and the prototype flies at 100 m/s, what must be the velocity of the air in the wind tunnel for the model test to match the prototype's Reynolds number, assuming air properties are the same?"

$v_m L_m = v_p L_p$
$v_m \times 0.5 \, \text{m} = 100 \, \text{m/s} \times 5 \, \text{m}$
$v_m = 1000 \, \text{m/s}$ (Still very high, indicating the scaling is difficult for this specific example).

A more typical question would be: "A model airplane with a characteristic length of 1 m is tested in a wind tunnel at 50 m/s. If the prototype airplane has a characteristic length of 10 m and flies at 25 m/s, what should be the velocity of the air in the wind tunnel to achieve dynamic similarity based on Reynolds number?"

$v_m L_m = v_p L_p$
$v_m \times 1 \, \text{m} = 25 \, \text{m/s} \times 10 \, \text{m}$
$v_m = 250 \, \text{m/s}$

Let's assume the question meant: "A model airplane with a characteristic length of 0.5 m is tested in a wind tunnel at 10 m/s. The prototype airplane has a characteristic length of 5 m. What should be the air velocity of the prototype to match the Reynolds number of the model, assuming identical air properties?"

$Re_{model} = \frac{\rho (10 \, \text{m/s}) (0.5 \, \text{m})}{\mu} = \frac{5 \, \rho/\mu}{\mu}$
$Re_{prototype} = \frac{\rho v_p (5 \, \text{m})}{\mu}$
Setting them equal:
$5 \, \rho/\mu = \frac{\rho v_p (5 \, \text{m})}{\mu}$
$5 = 5 v_p$
$v_p = 1 \, \text{m/s}$

This seems too low. The original problem statement is a bit ambiguous about what is being matched. Let's focus on the definition:
Reynolds number for model = $(10 \text{ m/s}) \times (0.5 \text{ m}) / \nu$.
Reynolds number for prototype = $(100 \text{ m/s}) \times (5 \text{ m}) / \nu = 500 \text{ m}^2/\text{s}$.
To achieve similarity, the model's Re must equal the prototype's Re. If the model is run at 10 m/s with a length of 0.5 m, its Re is $5 \, \text{m}^2/\text{s}$. To match the prototype's Re of $500 \, \text{m}^2/\text{s}$, the velocity should be 100 m/s with a length of 5 m. The question is likely asking about the Reynolds number *itself* that is important for similarity.

**The Reynolds number for the model test is 5 (in units of $m^2/s$ if kinematic viscosity is 1 $m^2/s$, but it's dimensionless). For dynamic similarity with the prototype, the Reynolds number for the prototype is $v_p L_p / \nu = (100)(5) / \nu = 500 / \nu$. The model Re is $v_m L_m / \nu = (10)(0.5) / \nu = 5 / \nu$. To achieve similarity, $5/\nu$ must equal $500/\nu$, which requires $5=500$, impossible. The question aims to check understanding of Re calculation.**

**Calculated Re for model:** $Re_m = \frac{(10 \, \text{m/s}) \times (0.5 \, \text{m})}{\nu} = \frac{5 \, \text{m}^2/\text{s}}{\nu}$
**Required Re for prototype:** $Re_p = \frac{(100 \, \text{m/s}) \times (5 \, \text{m})}{\nu} = \frac{500 \, \text{m}^2/\text{s}}{\nu}$
For dynamic similarity, $Re_m = Re_p$. This means $5/\nu = 500/\nu$, which implies $5=500$, an impossibility if $\nu$ is the same. This highlights that achieving similarity across all dimensionless numbers may require changing fluid properties or using different scale factors. The key is to *calculate* the Reynolds numbers.

**Correct interpretation:** The question asks for the Reynolds number relevant to the *model test*.
$Re_{model} = \frac{\rho_{model} v_{model} L_{model}}{\mu_{model}} = \frac{\rho_{model} (10 \, \text{m/s}) (0.5 \, \text{m})}{\mu_{model}} = \frac{5 \rho_{model}/\mu_{model}}{\mu_{model}}$
If $\rho_{model}/\mu_{model} = 1/\nu_{model}$, then $Re_{model} = 5/\nu_{model}$.
The value of the Reynolds number for the model test is determined by the product of velocity and characteristic length (5 m²/s) divided by kinematic viscosity.

---

**Question 2:**
In the design of a spillway, the Froude number is used for scaling. If a model spillway has a length scale of 1:50 (model:prototype) and is operated with water at a velocity of 0.5 m/s, what should be the velocity of water in the prototype spillway to maintain Froude number similarity?

**Answer 2:**
For Froude number similarity: $Fr_{model} = Fr_{prototype}$
$\frac{v_m}{\sqrt{g L_m}} = \frac{v_p}{\sqrt{g L_p}}$
$\frac{v_m}{\sqrt{L_m}} = \frac{v_p}{\sqrt{L_p}}$
$\frac{v_m}{\sqrt{L_m}} = \frac{v_p}{\sqrt{50 L_m}}$ (since $L_p = 50 L_m$)
$v_p = v_m \sqrt{\frac{50 L_m}{L_m}} = v_m \sqrt{50}$
$v_p = 0.5 \, \text{m/s} \times \sqrt{50} \approx 0.5 \times 7.07 = 3.54 \, \text{m/s}$

---

**Question 3:**
An aircraft flies at Mach 0.8 at an altitude where the speed of sound is 320 m/s. What is the speed of the aircraft?

**Answer 3:**
$M = \frac{v}{c}$
$0.8 = \frac{v}{320 \, \text{m/s}}$
$v = 0.8 \times 320 \, \text{m/s} = 256 \, \text{m/s}$

---

**Question 4:**
Explain the significance of the Reynolds number in distinguishing between laminar and turbulent flow.

**Answer 4:**
The Reynolds number (Re) is the ratio of inertial forces to viscous forces.
*   When Re is low (typically < 2000 for pipe flow), viscous forces dominate. The fluid particles move in smooth, parallel layers, resulting in **laminar flow**. There is little mixing between layers.
*   When Re is high (typically > 4000 for pipe flow), inertial forces dominate. The flow becomes chaotic, with irregular fluctuations and eddies, leading to **turbulent flow**. This results in significant mixing and increased drag.
*   Between these values, there is a **transitional flow** regime.

---

**Question 5:**
Which dimensionless number is most important for analyzing the flow of water in an open channel? Why?

**Answer 5:**
The **Froude number (Fr)** is most important for analyzing the flow of water in an open channel. This is because gravity is the primary force acting on the free surface and is responsible for restoring it to equilibrium. The Froude number compares the inertial forces (related to the flow velocity) to the gravitational forces. It determines whether the flow is subcritical, critical, or supercritical, which dictates the flow behavior, wave propagation, and the potential for phenomena like hydraulic jumps.

---

### **4. Important Points to Remember**

*   **Dimensionless numbers are key to scaling.** They allow engineers to predict the behavior of a large prototype from tests on a smaller model, provided the dimensionless numbers are matched.
*   **No single dimensionless number is universally dominant.** The most important number depends on the specific physical phenomenon being studied.
*   **Reynolds number:** Governs the transition between laminar and turbulent flow (inertial vs. viscous forces).
*   **Froude number:** Important for free-surface flows where gravity is significant (inertial vs. gravitational forces).
*   **Mach number:** Crucial for high-speed flows where compressibility effects are important (fluid velocity vs. speed of sound).
*   **Euler number:** Relates pressure forces to inertial forces, often linked to drag.
*   **Weber number:** Important for interfacial phenomena (inertial vs. surface tension forces).
*   **Strouhal number:** Characterizes unsteady, oscillating flows (flow timescale vs. oscillation timescale).
*   **Prandtl number:** Relates momentum and heat transfer characteristics (kinematic viscosity vs. thermal diffusivity).
*   **Achieving similarity:** Often requires matching multiple dimensionless numbers, which can sometimes lead to conflicting requirements for model design or testing conditions.

---
