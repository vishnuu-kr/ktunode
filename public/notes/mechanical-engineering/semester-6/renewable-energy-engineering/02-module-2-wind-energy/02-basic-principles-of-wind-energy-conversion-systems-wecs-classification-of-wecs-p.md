---
title: "Basic principles of Wind Energy Conversion Systems (WECS), Classification of WECS, Parts of WECS"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 2: Wind Energy"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463ae3"
status: "completed"
scrapedAt: "2026-05-20T18:07:47.441Z"
---
# Renewable Energy Engineering: Module 2 - Wind Energy

## Topic: Basic Principles of WECS, Classification of WECS, Parts of WECS

---

### **Course Outcomes Addressed:**
*   **CO2:** Explain the different types of wind power machines and control strategies of wind turbines (Knowledge Level: K2)

### **Learning Outcomes Covered:**
*   Understand the basic principles of Wind Energy Conversion Systems (WECS).
*   Classify different types of WECS.
*   Identify and describe the various parts of a WECS.

---

### **1. Basic Principles of Wind Energy Conversion Systems (WECS)**

Wind energy is a form of solar energy, as the uneven heating of the Earth's surface by the sun causes temperature and pressure differences, leading to the movement of air (wind). Wind turbines convert the kinetic energy of the wind into mechanical energy, which can then be used to generate electricity or perform other work.

#### **1.1 Kinetic Energy of Wind**

The kinetic energy (KE) of a mass of air ($m$) moving at a velocity ($v$) is given by:

$KE = \frac{1}{2}mv^2$

The mass of air ($m$) passing through an area ($A$) per unit time ($t$) is:

$m/t = \rho \times A \times v$

where:
*   $\rho$ is the air density (approximately 1.225 kg/m³ at sea level and 15°C)
*   $A$ is the swept area of the rotor (m²)
*   $v$ is the wind velocity (m/s)

Therefore, the power available in the wind ($P_{wind}$) passing through area $A$ is:

$P_{wind} = \frac{1}{2} \times (\rho \times A \times v) \times v^2 = \frac{1}{2}\rho Av^3$

**Key Concept:** The power available in the wind is directly proportional to the cube of the wind velocity ($v^3$). This means a small increase in wind speed can lead to a significant increase in available power.

#### **1.2 Betz's Law (Power Coefficient)**

A wind turbine cannot extract all the kinetic energy from the wind. Betz's Law, also known as the Betz Limit or Betz's Theorem, states that the maximum theoretical efficiency of a wind turbine is approximately 59.3% (16/27). This maximum efficiency is achieved when the wind speed downstream of the rotor is one-third of the upstream wind speed.

The actual power extracted by a wind turbine is given by:

$P_{actual} = C_p \times P_{wind} = C_p \times \frac{1}{2}\rho Av^3$

where:
*   $C_p$ is the Power Coefficient (or aerodynamic efficiency) of the wind turbine. It represents the fraction of the total wind power that is converted into mechanical power by the rotor.
*   $C_p$ is always less than 0.593.

**Important Point to Remember:** The Betz Limit is a theoretical maximum. In practice, real-world wind turbines have $C_p$ values typically ranging from 0.35 to 0.50 due to aerodynamic losses, mechanical friction, and other inefficiencies.

#### **1.3 Energy Conversion Process**

The conversion of wind energy into electrical energy typically involves the following steps:

1.  **Kinetic Energy to Mechanical Energy:** The wind strikes the rotor blades, causing them to rotate. This converts the kinetic energy of the wind into rotational mechanical energy.
2.  **Mechanical Energy to Electrical Energy:** The rotating rotor is connected to a gearbox (in most horizontal-axis wind turbines) to increase the rotational speed. This high-speed shaft then drives a generator, which converts the mechanical energy into electrical energy.

#### **1.4 Wind Resource Assessment**

Understanding the wind resource is crucial for siting and designing WECS. Key parameters include:

*   **Wind Speed:** Measured in meters per second (m/s).
*   **Wind Power Density:** The amount of power available per unit area, often expressed in Watts per square meter (W/m²).
*   **Wind Rose:** A circular diagram showing the distribution of wind speed and direction over a period.
*   **Weibull Distribution:** A statistical method used to model the distribution of wind speeds over time.

**Example:** If a wind turbine with a rotor diameter of 100m is operating in a wind speed of 10 m/s, the swept area is $A = \pi (50)^2 \approx 7854$ m². Assuming an air density of 1.225 kg/m³ and a $C_p$ of 0.40, the electrical power output would be:

$P_{actual} = 0.40 \times \frac{1}{2} \times 1.225 \times 7854 \times (10)^3$
$P_{actual} = 0.40 \times 0.6125 \times 7854 \times 1000$
$P_{actual} \approx 1,924,155$ Watts or approximately 1.92 MW.

---

### **2. Classification of Wind Energy Conversion Systems (WECS)**

WECS can be classified based on several criteria:

#### **2.1 Based on Axis of Rotation**

*   **Horizontal Axis Wind Turbines (HAWTs):**
    *   The rotor axis is parallel to the ground and the wind direction.
    *   Most common type, with blades rotating in a vertical plane.
    *   **Advantages:** Higher aerodynamic efficiency, generally capture more wind energy.
    *   **Disadvantages:** Require yaw control to face the wind, taller towers are needed for optimal performance, more complex installation.
    *   **Examples:** Three-bladed, upwind rotor designs are the most prevalent (e.g., Vestas V112, GE 1.5 MW).

*   **Vertical Axis Wind Turbines (VAWTs):**
    *   The rotor axis is perpendicular to the ground.
    *   **Advantages:** Omnidirectional (do not need to yaw to face the wind), generator and gearbox can be located at ground level (easier maintenance), can be placed in urban environments more easily, lower noise levels.
    *   **Disadvantages:** Lower aerodynamic efficiency, blades experience cyclic stress, starting torque can be an issue for some designs, less mature technology.
    *   **Sub-types of VAWTs:**
        *   **Drag-Type VAWTs (e.g., Savonius Rotor):** Rely on drag force to rotate. Low efficiency, used for low-speed applications or for starting up other turbines. (See Figure 2.1)
        *   **Lift-Type VAWTs (e.g., Darrieus Rotor):** Rely on lift force acting on airfoil-shaped blades. Higher efficiency than drag-type, but can have starting torque problems. (See Figure 2.2)
            *   *Egg-beater type:* Curved blades.
            *   *Giromill type:* Straight, vertical blades.

**Figure 2.1: Savonius Rotor (Drag-Type VAWT)**
*(Imagine a rotor made of two C-shaped scoops offset from each other, mounted on a vertical shaft.)*

**Figure 2.2: Darrieus Rotor (Lift-Type VAWT)**
*(Imagine a rotor with curved, airfoil-shaped blades, resembling an egg-beater, mounted on a vertical shaft.)*

#### **2.2 Based on Number of Blades**

*   **Single-Blade Turbines:** Rare, require counterweights for balance, high rotational speeds.
*   **Two-Blade Turbines:** Less vibration than three-bladed, but can be noisier and less stable in yaw.
*   **Three-Blade Turbines:** Most common, offer a good balance of efficiency, stability, and noise.
*   **Multi-Blade Turbines:** Typically VAWTs (like Savonius) or older HAWT designs. Used for water pumping due to high starting torque at low wind speeds, but low efficiency at higher speeds.

#### **2.3 Based on Wind Speed**

*   **Low-Speed Turbines:** Operate at lower wind speeds, often used in remote or off-grid applications.
*   **Medium-Speed Turbines:** Standard for most grid-connected applications.
*   **High-Speed Turbines:** Designed for very windy locations, less common.

#### **2.4 Based on Generator Capacity**

*   **Small Wind Turbines:** Typically up to 100 kW, used for residential, agricultural, or small commercial applications.
*   **Medium Wind Turbines:** 100 kW to 1 MW, used for community-scale projects or small industrial sites.
*   **Large Wind Turbines:** > 1 MW, used for utility-scale wind farms, both onshore and offshore. Modern turbines can be 5 MW, 10 MW, or even larger.

#### **2.5 Based on Location**

*   **Onshore Wind Turbines:** Located on land.
*   **Offshore Wind Turbines:** Located in bodies of water (seas, oceans, lakes). Offshore turbines generally experience higher and more consistent wind speeds, leading to greater energy production, but are more expensive to install and maintain.

**Reference:** Tiwari G N, Ghosal M K (2007) discusses various types of wind turbines, including HAWTs and VAWTs, highlighting their operating principles and applications.

---

### **3. Parts of a Wind Energy Conversion System (WECS)**

A typical modern HAWT consists of several key components:

#### **3.1 Rotor Assembly**

*   **Blades:** Aerodynamic surfaces designed to capture wind energy and convert it into rotational motion. Made from composite materials like fiberglass or carbon fiber for strength and lightness. Modern turbines usually have three blades.
    *   **Airfoil Shape:** Similar to aircraft wings, generating lift as wind passes over them.
    *   **Twist and Taper:** Blades are twisted along their length to optimize aerodynamic performance at different radial speeds and are tapered towards the tip.
*   **Hub:** Connects the blades to the main shaft. Houses the pitch control mechanism.

#### **3.2 Nacelle**

The enclosure at the top of the tower housing the main mechanical and electrical components.

*   **Main Shaft (Low-Speed Shaft):** Directly connected to the rotor hub, rotates at the same speed as the rotor (typically 10-20 rpm for large turbines).
*   **Gearbox:** Increases the slow rotational speed of the low-speed shaft to the high speed required by the generator (e.g., from 20 rpm to 1500 rpm). Not all WECS use gearboxes; some use direct-drive generators.
*   **High-Speed Shaft:** Connects the gearbox to the generator.
*   **Generator:** Converts mechanical energy into electrical energy. Common types include asynchronous (induction) generators and synchronous generators.
*   **Brake:** A mechanical brake system to stop the rotor in emergencies or during maintenance. Often a disc brake on the high-speed shaft.
*   **Yaw Drive and Yaw Motor:** Orients the nacelle and rotor to face the wind. A wind vane on the nacelle detects wind direction, and the yaw system adjusts the turbine's orientation.
*   **Pitch Control System:** Adjusts the angle (pitch) of the rotor blades.
    *   **For normal operation:** Optimizes energy capture at different wind speeds.
    *   **For high winds:** Turns the blades out of the wind to reduce aerodynamic forces and prevent damage.
*   **Controller:** The "brain" of the turbine. Monitors wind conditions, turbine performance, and controls operations like starting, stopping, yawing, and pitching.
*   **Anemometer and Wind Vane:** Measure wind speed and direction, respectively, providing critical data to the controller.

#### **3.3 Tower**

Supports the nacelle and rotor assembly at a height where wind speeds are typically higher and less turbulent.

*   **Types of Towers:**
    *   **Tubular Steel Towers:** Most common for utility-scale turbines.
    *   **Lattice Towers:** Often used for smaller turbines or in specific applications.
    *   **Concrete Towers:** Can be used for very large turbines.
*   **Tower Height:** Crucial for accessing stronger winds. Taller towers generally mean higher energy production.

#### **3.4 Foundation**

Anchors the tower to the ground, providing stability. The design depends on soil conditions and turbine size.

#### **3.5 Electrical Components**

*   **Transformer:** Steps up the voltage from the generator to a level suitable for transmission to the grid.
*   **Switchgear and Protection Devices:** For connecting to the grid and protecting the system from faults.
*   **Cables:** Transmit electricity from the generator down the tower and to the grid connection point.

**Figure 3.1: Components of a Horizontal Axis Wind Turbine (HAWT)**
*(Imagine a diagram showing the rotor (blades and hub), nacelle (containing gearbox, generator, shafts, brake, yaw system, controller), tower, and foundation.)*

**Sukhatme & Nayak (2015)** and **Tester et.al (2006)** provide detailed insights into the design and operation of WECS, including discussions on rotor aerodynamics, drivetrain components, and the importance of tower height for maximizing energy capture.

---

### **Practice Questions:**

1.  **What is the relationship between wind velocity and the power available in the wind?**
    *   a) Directly proportional ($v$)
    *   b) Proportional to the square ($v^2$)
    *   c) Proportional to the cube ($v^3$)
    *   d) Inversely proportional ($1/v$)

2.  **According to Betz's Law, what is the theoretical maximum efficiency of a wind turbine?**
    *   a) 100%
    *   b) 75%
    *   c) 59.3%
    *   d) 40%

3.  **Which type of wind turbine has its axis of rotation perpendicular to the ground?**
    *   a) Horizontal Axis Wind Turbine (HAWT)
    *   b) Vertical Axis Wind Turbine (VAWT)
    *   c) Propeller Type Turbine
    *   d) Darrieus Turbine

4.  **Name two advantages of Vertical Axis Wind Turbines (VAWTs) over Horizontal Axis Wind Turbines (HAWTs).**

5.  **Describe the function of the gearbox in a typical HAWT.**

---

### **Answers to Practice Questions:**

1.  **Answer:** c) Proportional to the cube ($v^3$)
    *   **Explanation:** The power available in the wind is given by $P_{wind} = \frac{1}{2}\rho Av^3$.

2.  **Answer:** c) 59.3%
    *   **Explanation:** Betz's Law states the maximum power coefficient ($C_p$) is 16/27, which is approximately 0.593 or 59.3%.

3.  **Answer:** b) Vertical Axis Wind Turbine (VAWT)
    *   **Explanation:** VAWTs have their rotor axis perpendicular to the ground, while HAWTs have their axis parallel to the ground.

4.  **Answer:** Two advantages of VAWTs over HAWTs include:
    *   Omnidirectional operation (no need for yaw control).
    *   Generator and gearbox can be placed at ground level, simplifying maintenance.
    *   Potentially lower noise levels.
    *   Better suitability for urban environments.

5.  **Answer:** The function of the gearbox in a typical HAWT is to increase the slow rotational speed of the rotor (low-speed shaft) to the much higher rotational speed required by the generator to produce electricity efficiently. For example, it might convert speeds of 10-20 rpm to 1500 rpm.

---

### **Important Points to Remember:**

*   Wind power is kinetic energy, and its availability is proportional to the cube of wind speed ($v^3$).
*   Betz's Law sets the theoretical limit for wind turbine efficiency at 59.3%.
*   HAWTs are the most common type, known for higher efficiency, but require yaw control.
*   VAWTs are omnidirectional and have easier ground-level maintenance but generally lower efficiency.
*   Key WECS components include the rotor (blades, hub), nacelle (gearbox, generator, brake, control systems), tower, and foundation.
*   Pitch control and yaw control are crucial for optimizing performance and protecting the turbine.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
