---
title: "vehicle load forces: aerodynamic drag"
subject: "ELECTRIC VEHICLES"
module: "Module 1: Conventional Vehicles : Basics of vehicle performance"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3629a"
status: "completed"
scrapedAt: "2026-05-23T16:21:25.478Z"
---
# Electric Vehicles: Module 1 - Conventional Vehicles: Basics of Vehicle Performance

## Topic: Vehicle Load Forces: Aerodynamic Drag

### Course Outcomes Addressed:
*   **CO1: Familiarise the performance of conventional vehicles and electric vehicles (Knowledge Level: K2)** - Understanding aerodynamic drag is fundamental to vehicle performance, applicable to both conventional and electric vehicles.

### Learning Outcomes Covered:
*   Understanding the concept of aerodynamic drag as a significant load force on a vehicle.
*   Identifying the factors influencing aerodynamic drag.
*   Quantifying aerodynamic drag using relevant formulas.
*   Recognizing the impact of aerodynamic drag on vehicle efficiency and performance.

---

### 1. Introduction to Vehicle Load Forces

Vehicles experience various forces that oppose their motion. Overcoming these forces requires energy from the powertrain. Understanding these forces is crucial for designing efficient vehicles, especially electric vehicles (EVs) where energy efficiency directly impacts range. The primary load forces include:

*   **Aerodynamic Drag:** Resistance from the air.
*   **Rolling Resistance:** Resistance from the deformation of tires and the road surface.
*   **Gradient Resistance:** Force due to inclines or declines.
*   **Acceleration Force (Inertia Force):** Force required to increase the vehicle's velocity.

This module focuses on **Aerodynamic Drag**.

---

### 2. Aerodynamic Drag: The Force of Air Resistance

Aerodynamic drag is the force that opposes a vehicle's motion through the air. It is a significant factor affecting vehicle performance, particularly at higher speeds. As a vehicle moves, it pushes air out of the way, creating pressure differences around its body. This pressure difference results in a force that acts against the direction of motion.

**Key Concept:** Aerodynamic drag is the resistance force exerted by the air on a moving object.

---

### 3. Factors Influencing Aerodynamic Drag

The magnitude of aerodynamic drag is determined by several factors, which can be broadly categorized as:

#### 3.1. Vehicle Design and Shape

*   **Frontal Area ($A$):** The projected area of the vehicle perpendicular to the direction of motion. A larger frontal area generally leads to higher drag.
    *   *Example:* A large SUV typically has a larger frontal area than a compact car.
*   **Drag Coefficient ($C_d$):** A dimensionless coefficient that represents the aerodynamic efficiency of the vehicle's shape. A lower $C_d$ indicates a more streamlined design.
    *   *Design features that reduce $C_d$ include:*
        *   Smooth, rounded contours.
        *   Sloping rear ends (fastback or Kammback designs).
        *   Enclosed wheels.
        *   Underbody fairings.
        *   Integrated spoilers.
        *   Minimized protrusions (e.g., flush door handles, recessed wipers).
    *   *Reference:* **Chau, K. T. (2015)** likely discusses how aerodynamic design is crucial for reducing energy consumption in EVs. A lower $C_d$ directly translates to less power required to overcome air resistance.

#### 3.2. Air Properties

*   **Air Density ($\rho$):** The mass per unit volume of the air. Denser air exerts more resistance. Air density is affected by temperature, altitude, and humidity.
    *   *Impact:* At higher altitudes or higher temperatures, air density is lower, resulting in slightly reduced aerodynamic drag.
*   **Air Viscosity:** Although a property of air, its direct impact is often incorporated into the Reynolds number, which influences the flow regime.

#### 3.3. Vehicle Velocity

*   **Velocity ($v$):** The speed of the vehicle relative to the air. Aerodynamic drag is proportional to the square of the velocity. This means drag increases dramatically as speed increases.
    *   *Implication:* Driving at 60 mph requires significantly more energy to overcome drag than driving at 30 mph. This is a critical consideration for EV range.

---

### 4. Quantifying Aerodynamic Drag

The aerodynamic drag force ($F_D$) can be calculated using the following formula:

$F_D = \frac{1}{2} \rho v^2 C_d A$

Where:
*   $F_D$ = Aerodynamic Drag Force (Newtons, N)
*   $\rho$ = Air Density (kg/m³)
*   $v$ = Vehicle Velocity (m/s)
*   $C_d$ = Drag Coefficient (dimensionless)
*   $A$ = Frontal Area (m²)

**Important Note:** The velocity ($v$) in this formula is the *relative velocity between the vehicle and the air*. For a stationary vehicle in wind, this would be the wind speed. For a moving vehicle in still air, it's the vehicle's speed. If there's wind, it's the vector difference between the vehicle's velocity and the air's velocity.

---

### 5. Impact of Aerodynamic Drag on Vehicle Performance and EV Efficiency

Aerodynamic drag has a profound impact on vehicle performance, especially at highway speeds:

*   **Power Requirement:** The power required to overcome aerodynamic drag is given by:
    $P_D = F_D \times v = \frac{1}{2} \rho v^3 C_d A$
    Notice that power is proportional to the **cube** of the velocity. This means doubling the speed requires **eight times** the power to overcome aerodynamic drag.
    *   *Example:* If a car travels at 30 mph and requires 10 kW to overcome drag, at 60 mph it will require approximately 80 kW.

*   **Fuel/Energy Consumption:** Higher drag leads to increased power demand, which in turn results in higher fuel consumption for conventional vehicles and reduced range for EVs.
    *   *EV Specific Impact:* For EVs, overcoming aerodynamic drag is a major drain on battery energy. Reducing $C_d$ and $A$ can significantly increase an EV's driving range. This is why EV manufacturers invest heavily in aerodynamic design.

*   **Top Speed:** Aerodynamic drag is often the limiting factor for a vehicle's top speed. As speed increases, drag increases rapidly, eventually balancing the maximum power output of the engine or motor.

*   **Handling and Stability:** At high speeds, aerodynamic forces can also affect vehicle stability and handling (e.g., lift or downforce). While not directly a load force *opposing* motion, these effects are part of vehicle aerodynamics.

---

### 6. Practical Examples and Considerations

*   **EV Aerodynamic Design:** The Tesla Model 3, Hyundai Ioniq 5, and Lucid Air are examples of EVs with meticulously designed aerodynamic features to maximize range. Features like flush door handles, a sloping roofline, and underbody panels contribute to lower drag coefficients.
    *   *Reference:* **Chau, K. T. (2015)** would likely provide detailed examples of how aerodynamic design principles are applied in modern EV development to improve efficiency.

*   **Open Windows vs. Air Conditioning:** At low speeds, opening windows might be more energy-efficient than using air conditioning. However, at highway speeds, the increased aerodynamic drag from open windows can outweigh the energy saved by not using AC.

*   **Truck Aerodynamics:** For heavy-duty trucks, aerodynamic drag is a substantial portion of the total resistance, even at highway speeds. Trailer aerodynamics, side skirts, and cab fairings are crucial for fuel efficiency.

---

### 7. Key Points to Remember

*   **Aerodynamic drag is proportional to the square of velocity ($v^2$).**
*   **Power required to overcome aerodynamic drag is proportional to the cube of velocity ($v^3$).**
*   **Lowering the drag coefficient ($C_d$) and frontal area ($A$) are key strategies for improving vehicle efficiency, especially for EVs.**
*   **Aerodynamic drag becomes the dominant load force at higher speeds.**
*   **Careful aerodynamic design is essential for maximizing the range of electric vehicles.**

---

### 8. Practice Questions and Exercises

**Question 1:**
A vehicle has a frontal area of $2.2 m^2$ and a drag coefficient of $0.30$. If the air density is $1.225 kg/m^3$, calculate the aerodynamic drag force when the vehicle is traveling at $72 km/h$.

**Answer 1:**
First, convert the velocity from km/h to m/s:
$v = 72 \frac{km}{h} \times \frac{1000 m}{1 km} \times \frac{1 h}{3600 s} = 20 m/s$

Now, use the formula for aerodynamic drag:
$F_D = \frac{1}{2} \rho v^2 C_d A$
$F_D = \frac{1}{2} \times 1.225 \, kg/m^3 \times (20 \, m/s)^2 \times 0.30 \times 2.2 \, m^2$
$F_D = \frac{1}{2} \times 1.225 \times 400 \times 0.30 \times 2.2$
$F_D = 1.225 \times 200 \times 0.30 \times 2.2$
$F_D = 245 \times 0.30 \times 2.2$
$F_D = 73.5 \times 2.2$
$F_D = 161.7 \, N$

Therefore, the aerodynamic drag force is $161.7 \, N$.

**Question 2:**
If the speed of the vehicle in Question 1 is increased from $72 km/h$ to $108 km/h$, by what factor does the aerodynamic drag force increase?

**Answer 2:**
First, convert the new velocity to m/s:
$v_{new} = 108 \frac{km}{h} \times \frac{1000 m}{1 km} \times \frac{1 h}{3600 s} = 30 m/s$

The aerodynamic drag force is proportional to the square of the velocity ($v^2$). The factor by which the drag force increases is the square of the ratio of the new velocity to the original velocity.

Velocity ratio = $\frac{v_{new}}{v_{original}} = \frac{30 \, m/s}{20 \, m/s} = 1.5$

Factor of increase in drag = $(\text{Velocity ratio})^2 = (1.5)^2 = 2.25$

Therefore, the aerodynamic drag force increases by a factor of 2.25.

**Alternatively, calculate the new drag force and find the ratio:**
$F_{D, new} = \frac{1}{2} \rho v_{new}^2 C_d A$
$F_{D, new} = \frac{1}{2} \times 1.225 \, kg/m^3 \times (30 \, m/s)^2 \times 0.30 \times 2.2 \, m^2$
$F_{D, new} = \frac{1}{2} \times 1.225 \times 900 \times 0.30 \times 2.2$
$F_{D, new} = 1.225 \times 450 \times 0.30 \times 2.2$
$F_{D, new} = 551.25 \times 0.30 \times 2.2$
$F_{D, new} = 165.375 \times 2.2$
$F_{D, new} = 363.825 \, N$

Factor of increase = $\frac{F_{D, new}}{F_{D, original}} = \frac{363.825 \, N}{161.7 \, N} \approx 2.25$

**Question 3:**
Why is reducing aerodynamic drag particularly important for the range of electric vehicles compared to internal combustion engine (ICE) vehicles?

**Answer 3:**
Electric vehicles rely solely on battery energy for propulsion. At highway speeds, aerodynamic drag is a significant load force, and the power required to overcome it increases with the cube of velocity ($v^3$). Therefore, a reduction in aerodynamic drag directly translates to a substantial decrease in energy consumption from the battery, leading to a significant increase in the EV's driving range. While ICE vehicles also benefit from reduced drag, their energy source (fuel) is typically more energy-dense and easier to replenish, making the impact on overall fuel economy slightly less critical for daily usability compared to the impact on EV range, which is a primary consumer concern. This is a core concept in understanding EV performance as per **CO1**.

---
