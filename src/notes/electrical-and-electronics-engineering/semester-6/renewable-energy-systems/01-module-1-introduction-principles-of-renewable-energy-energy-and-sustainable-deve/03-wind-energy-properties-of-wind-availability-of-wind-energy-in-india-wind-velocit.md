---
title: "Wind Energy: Properties of wind, availability of wind energy in India, wind velocity and power from wind (numerical problems); major problems associated with wind power,"
subject: "RENEWABLE ENERGY SYSTEMS"
module: "Module 1: Introduction:  Principles of renewable energy; energy and sustainable development, fundamentals and social implications."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3672f"
status: "completed"
scrapedAt: "2026-05-23T16:31:45.843Z"
---
# RENEWABLE ENERGY SYSTEMS

## Module 1: Introduction: Principles of Renewable Energy; Energy and Sustainable Development, Fundamentals and Social Implications

### Topic: Wind Energy

---

This topic introduces us to the principles of wind energy, its properties, availability in India, the relationship between wind velocity and power generation, and the challenges associated with wind power. It contributes to understanding the environmental aspects of renewable energy and the fundamental concepts of wind energy.

**Course Outcomes addressed:**

*   **CO1:** Describe the environmental aspects of renewable energy resources in comparison with various conventional energy systems, their prospects and limitations. (Knowledge Level: K1) - *This topic touches upon the prospects and limitations of wind energy.*
*   **CO2:** Understand the concepts of wind energy. (Knowledge Level: K1) - *This topic directly addresses this outcome.*

---

### 1. Properties of Wind

Wind is the natural movement of air from areas of high pressure to areas of low pressure. Understanding its properties is crucial for harnessing its energy effectively.

*   **Origin of Wind:**
    *   Primarily caused by the **uneven heating of the Earth's surface by the sun**.
    *   This uneven heating creates differences in air temperature and density, leading to pressure gradients.
    *   Air flows from high-pressure zones to low-pressure zones, resulting in wind.
    *   **Rotation of the Earth (Coriolis effect)** also influences wind direction.

*   **Key Properties of Wind relevant to Energy Generation:**
    *   **Wind Velocity (Speed):** The speed at which air masses move. This is the most critical factor for power generation as power is proportional to the cube of wind velocity.
        *   *Units:* Meters per second (m/s), kilometers per hour (km/h), knots.
    *   **Wind Direction:** The direction from which the wind is blowing. Wind turbines need to be oriented to face the wind.
    *   **Wind Density ($\rho$):** The mass of air per unit volume. Denser air carries more kinetic energy.
        *   Density of air at standard atmospheric pressure (101325 Pa) and 15°C is approximately **1.225 kg/m³**.
        *   Density decreases with increasing altitude and temperature.
    *   **Wind Consistency/Variability:** How stable the wind speed and direction are over time. Intermittency is a key challenge.
    *   **Wind Shear:** The change in wind speed with height above the ground. Wind speed generally increases with height.

---

### 2. Availability of Wind Energy in India

India is a nation with significant wind energy potential due to its long coastline and vast landmass.

*   **Global Context:** Wind energy is one of the fastest-growing renewable energy sources globally.
*   **Indian Scenario:**
    *   **Favorable Wind Resources:** India possesses a considerable wind energy potential, especially along its southern and western coasts.
    *   **Long Coastline:** The Indian coastline, stretching over 7,500 km, offers excellent opportunities for offshore and onshore wind farms.
    *   **Major Wind-Producing States:**
        *   Tamil Nadu
        *   Gujarat
        *   Maharashtra
        *   Karnataka
        *   Rajasthan
        *   Andhra Pradesh
        *   Madhya Pradesh
    *   **Onshore vs. Offshore:**
        *   **Onshore:** Most of India's current wind power capacity is from onshore installations.
        *   **Offshore:** Significant untapped potential exists along the coasts, particularly in states like Gujarat and Tamil Nadu, for offshore wind farms. Offshore winds are generally stronger and more consistent.
    *   **Government Initiatives:** The Indian government has been actively promoting wind energy through policies, incentives, and targets to meet its renewable energy goals.
        *   *Reference:* G. D. Rai's "Non-conventional energy sources" likely discusses India's wind energy policy and potential in detail.

---

### 3. Wind Velocity and Power from Wind (Numerical Problems)

The kinetic energy of wind can be converted into mechanical energy using wind turbines, which then drives a generator to produce electricity.

#### 3.1. Kinetic Energy of Wind

The kinetic energy (KE) of a mass of air moving with velocity $v$ is given by:
$KE = \frac{1}{2}mv^2$

where:
*   $m$ is the mass of air
*   $v$ is the velocity of air

#### 3.2. Power Available in the Wind

Consider a streamtube of air with cross-sectional area $A$ passing through a wind turbine. In time $\Delta t$, a length of air $v \Delta t$ passes through the area $A$.

*   **Volume of air:** $V = A \times (v \Delta t)$
*   **Mass of air:** $m = \rho \times V = \rho \times A \times v \Delta t$
    where $\rho$ is the air density.

The kinetic energy of this mass of air is:
$KE = \frac{1}{2} m v^2 = \frac{1}{2} (\rho A v \Delta t) v^2 = \frac{1}{2} \rho A v^3 \Delta t$

**Power ($P$) is the rate of energy transfer:**
$P = \frac{KE}{\Delta t} = \frac{\frac{1}{2} \rho A v^3 \Delta t}{\Delta t}$
$P = \frac{1}{2} \rho A v^3$

This equation shows that the power available in the wind is directly proportional to the air density ($\rho$), the swept area of the turbine blades ($A$), and the cube of the wind velocity ($v^3$).

**Key Takeaways:**
*   **Velocity is paramount:** Doubling wind speed increases available power by 2³ = 8 times.
*   **Larger rotor diameter means larger swept area:** This significantly increases the power captured.

#### 3.3. Betz Limit (Betz's Law)

It is impossible for a wind turbine to extract 100% of the kinetic energy from the wind. This is due to fundamental aerodynamic principles.

*   **Theoretical Maximum Efficiency:** The maximum theoretical power that can be extracted from the wind is **59.3%** (approximately 16/27). This limit is known as the **Betz Limit** or **Betz's Law**.
*   **Why the Limit Exists:** For the wind to continue flowing through the turbine, the air must leave the turbine at a non-zero velocity. If all kinetic energy were extracted, the air would stop, creating a vacuum and blocking further airflow.

Therefore, the actual power output of a wind turbine is:
$P_{actual} = C_p \times \frac{1}{2} \rho A v^3$

where:
*   $C_p$ is the **Power Coefficient** (or efficiency), which is always less than 0.593. Modern large wind turbines typically have $C_p$ values between 0.45 and 0.50.

#### 3.4. Cut-in Velocity, Rated Velocity, and Cut-out Velocity

Wind turbines operate within specific wind speed ranges:

*   **Cut-in Velocity:** The minimum wind speed at which a turbine starts to generate power. Below this speed, the wind is not strong enough to overcome the friction and inertia of the system. (Typically 3-4 m/s)
*   **Rated Velocity:** The wind speed at which the turbine reaches its maximum designed power output. Beyond this speed, the turbine's output is usually limited by a control system to prevent damage. (Typically 12-15 m/s)
*   **Cut-out Velocity:** The maximum wind speed at which the turbine is designed to operate. Above this speed, the turbine is shut down and its blades are feathered (turned parallel to the wind) to prevent structural damage. (Typically 25 m/s)

#### 3.5. Numerical Problems and Examples

**Problem 1:**
Calculate the power available in the wind passing through a rotor of diameter 50 m, assuming air density is 1.225 kg/m³ and wind velocity is 10 m/s.

**Solution:**
*   Diameter ($D$) = 50 m
*   Radius ($R$) = $D/2$ = 25 m
*   Swept Area ($A$) = $\pi R^2 = \pi (25 \text{ m})^2 = 625\pi \text{ m}^2 \approx 1963.5 \text{ m}^2$
*   Air Density ($\rho$) = 1.225 kg/m³
*   Wind Velocity ($v$) = 10 m/s

Power available in the wind ($P$):
$P = \frac{1}{2} \rho A v^3$
$P = \frac{1}{2} \times 1.225 \text{ kg/m}^3 \times 1963.5 \text{ m}^2 \times (10 \text{ m/s})^3$
$P = 0.6125 \times 1963.5 \times 1000$
$P \approx 1,203,483.75 \text{ Watts}$
$P \approx 1.203 \text{ MW}$

**Problem 2:**
A wind turbine has a rotor diameter of 80 m and operates at a wind speed of 15 m/s. The air density is 1.2 kg/m³. If the power coefficient ($C_p$) of the turbine is 0.45, calculate the actual electrical power output.

**Solution:**
*   Diameter ($D$) = 80 m
*   Radius ($R$) = 40 m
*   Swept Area ($A$) = $\pi R^2 = \pi (40 \text{ m})^2 = 1600\pi \text{ m}^2 \approx 5026.5 \text{ m}^2$
*   Air Density ($\rho$) = 1.2 kg/m³
*   Wind Velocity ($v$) = 15 m/s
*   Power Coefficient ($C_p$) = 0.45

Power available in the wind ($P_{available}$):
$P_{available} = \frac{1}{2} \rho A v^3$
$P_{available} = \frac{1}{2} \times 1.2 \text{ kg/m}^3 \times 5026.5 \text{ m}^2 \times (15 \text{ m/s})^3$
$P_{available} = 0.6 \times 5026.5 \times 3375$
$P_{available} \approx 10,180,031.25 \text{ Watts}$
$P_{available} \approx 10.18 \text{ MW}$

Actual electrical power output ($P_{actual}$):
$P_{actual} = C_p \times P_{available}$
$P_{actual} = 0.45 \times 10.18 \text{ MW}$
$P_{actual} \approx 4.581 \text{ MW}$

**Problem 3:**
How much will the power output of a wind turbine change if the wind speed increases from 8 m/s to 16 m/s, assuming all other factors remain constant?

**Solution:**
Power is proportional to $v^3$.
Let $P_1$ be the power at velocity $v_1$ and $P_2$ be the power at velocity $v_2$.
$\frac{P_2}{P_1} = \frac{\frac{1}{2} \rho A v_2^3}{\frac{1}{2} \rho A v_1^3} = \left(\frac{v_2}{v_1}\right)^3$

Given:
*   $v_1 = 8$ m/s
*   $v_2 = 16$ m/s

$\frac{P_2}{P_1} = \left(\frac{16 \text{ m/s}}{8 \text{ m/s}}\right)^3 = (2)^3 = 8$

The power output will increase by a factor of **8**. If the wind speed doubles, the power output increases by eight times.

---

### 4. Major Problems Associated with Wind Power

While wind energy is a clean and abundant resource, its widespread adoption faces several challenges:

*   **Intermittency and Variability:**
    *   **Dependence on Wind:** Wind is not constantly available. Wind speed fluctuates, leading to variable power output.
    *   **Grid Integration:** This variability poses challenges for grid operators to maintain a stable supply-demand balance. Energy storage solutions (like batteries) are often required.
    *   **Predictability:** Accurate forecasting of wind speed is crucial but can be difficult.

*   **Location Constraints:**
    *   **Wind Resource Availability:** Wind turbines are most effective in areas with consistently high wind speeds, which are not always near population centers or existing grid infrastructure.
    *   **Land Use:** Large wind farms require significant land area, which can lead to competition with other land uses like agriculture or residential development.
    *   **Visual Impact and Aesthetics:** Some people find wind turbines visually unappealing, leading to "NIMBY" (Not In My Backyard) opposition.

*   **Environmental Impacts:**
    *   **Bird and Bat Mortality:** Rotating turbine blades can pose a threat to birds and bats. Careful siting and operational strategies are employed to minimize this.
    *   **Noise Pollution:** Wind turbines produce aerodynamic noise, which can be a concern for nearby residents, though modern turbines are designed to be quieter.
    *   **Electromagnetic Interference:** Turbines can sometimes interfere with radar and telecommunications signals.

*   **Technical and Operational Challenges:**
    *   **High Capital Costs:** The initial investment for wind farms (turbines, installation, grid connection) can be substantial.
    *   **Maintenance:** Wind turbines, especially offshore ones, require regular maintenance, which can be costly and complex.
    *   **Transmission Infrastructure:** Connecting remote wind farms to the grid often requires significant investment in new transmission lines.
    *   **Efficiency Limitations:** As discussed with Betz's Law, there's a fundamental limit to how much power can be extracted.

*   **Social and Economic Issues:**
    *   **Public Acceptance:** Gaining public acceptance for wind farm development can be challenging due to visual impact, noise, and perceived environmental concerns.
    *   **Grid Stability:** Integrating large amounts of variable renewable energy like wind can affect grid stability if not managed properly.
    *   **Resource Availability:** While the resource is free, the technology and infrastructure to capture it are not.

---

### Important Points to Remember

*   **Wind Power Formula:** $P = \frac{1}{2} \rho A v^3$ (Power available in wind).
*   **Betz Limit:** Maximum theoretical efficiency for wind turbines is 59.3% ($C_p < 0.593$).
*   **Actual Power Output:** $P_{actual} = C_p \times \frac{1}{2} \rho A v^3$.
*   **Wind Speed is Critical:** Power output is proportional to the *cube* of wind speed ($v^3$).
*   **Key Wind Speeds:** Cut-in, Rated, and Cut-out velocities define the operational range of a turbine.
*   **India's Potential:** Significant wind energy potential, particularly along its coast.
*   **Key Challenges:** Intermittency, location, environmental impacts (bird/bat mortality, noise), and high initial costs are major hurdles.

---

### Practice Questions

**Question 1:**
What is the theoretical maximum percentage of kinetic energy that can be extracted from the wind by a wind turbine?
a) 25%
b) 50%
c) 59.3%
d) 75%

**Question 2:**
If the wind speed doubles, by what factor does the power available in the wind increase?
a) 2
b) 4
c) 8
d) 16

**Question 3:**
Which of the following factors directly influences the power available in the wind?
i. Air Density ($\rho$)
ii. Swept Area of the rotor ($A$)
iii. Wind Velocity ($v$)
iv. Power Coefficient ($C_p$)
a) i, ii, iii only
b) i, ii, iii, iv
c) i, ii only
d) i, iii only

**Question 4:**
A wind turbine has a rotor diameter of 60 meters. If the wind speed is 12 m/s and the air density is 1.2 kg/m³, calculate the power available in the wind. (Take $\pi \approx 3.14$)

**Question 5:**
List any three major problems associated with wind power generation.

---

### Answers to Practice Questions

**Answer 1:**
c) 59.3% (This is the Betz Limit)

**Answer 2:**
c) 8 (Since power is proportional to $v^3$, doubling the velocity means $(2v)^3 = 8v^3$, so the power increases by a factor of 8).

**Answer 3:**
a) i, ii, iii only (The power coefficient $C_p$ is related to the *actual* power output, not the power *available* in the wind. The formula for power available in the wind is $P = \frac{1}{2} \rho A v^3$).

**Answer 4:**
*   Diameter ($D$) = 60 m
*   Radius ($R$) = $D/2$ = 30 m
*   Swept Area ($A$) = $\pi R^2 = \pi (30 \text{ m})^2 = 900\pi \text{ m}^2 \approx 900 \times 3.14 = 2826 \text{ m}^2$
*   Air Density ($\rho$) = 1.2 kg/m³
*   Wind Velocity ($v$) = 12 m/s

Power available in the wind ($P$):
$P = \frac{1}{2} \rho A v^3$
$P = \frac{1}{2} \times 1.2 \text{ kg/m}^3 \times 2826 \text{ m}^2 \times (12 \text{ m/s})^3$
$P = 0.6 \times 2826 \times 1728$
$P \approx 2,923,596.8 \text{ Watts}$
$P \approx 2.924 \text{ MW}$

**Answer 5:**
Any three of the following:
*   Intermittency/Variability of wind.
*   Location constraints (need for high wind areas, land use).
*   Environmental impacts (bird/bat mortality, noise pollution).
*   High capital costs.
*   Maintenance requirements.
*   Grid integration challenges.
*   Visual impact/aesthetics.
*   Public acceptance issues.

---

This section provides a foundational understanding of wind energy, its physics, potential in India, and practical considerations for its implementation as a renewable energy source.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
