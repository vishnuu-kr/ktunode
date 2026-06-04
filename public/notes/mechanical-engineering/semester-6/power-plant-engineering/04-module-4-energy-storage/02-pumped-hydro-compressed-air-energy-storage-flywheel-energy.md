---
title: "Pumped hydro, Compressed air energy storage, flywheel energy"
subject: "POWER PLANT ENGINEERING"
module: "Module 4: Energy Storage"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463798"
status: "completed"
scrapedAt: "2026-05-20T18:06:39.951Z"
---
# Module 4: Energy Storage - Pumped Hydro, Compressed Air Energy Storage, Flywheel Energy

## 1. Introduction to Energy Storage Systems

Energy storage is crucial for modern power systems, especially with the increasing integration of intermittent renewable energy sources like solar and wind. Energy storage systems can:

*   **Balance supply and demand:** Store excess energy generated during periods of low demand or high renewable output and release it when demand is high or renewable generation is low.
*   **Improve grid stability:** Provide ancillary services like frequency regulation and voltage support.
*   **Enhance reliability:** Offer backup power during grid outages.
*   **Reduce peak demand charges:** Allow consumers to shift energy consumption to off-peak hours.

**(Reference: El Wakil, M. M. "Power Plant Technology." McGraw Hill Education, 1, 2017. Chapter on Energy Storage)**
**(Reference: Nag, P. K. "Power Plant Engineering." McGraw Hill Education, 4, 2017. Chapter on Energy Storage)**

---

## 2. Pumped Hydro Storage (PHS)

Pumped Hydro Storage is the most mature and widely deployed large-scale energy storage technology. It operates by moving water between two reservoirs at different elevations.

### 2.1. Key Concepts and Definitions

*   **Reservoirs:** Two water bodies, an upper reservoir and a lower reservoir, are required. The elevation difference between them is the "head."
*   **Pumps/Turbines:** Reversible pump-turbines are commonly used. During charging (storage), they act as pumps to move water from the lower reservoir to the upper reservoir. During discharging (generation), they act as turbines to drive a generator, producing electricity as water flows back to the lower reservoir.
*   **Penstock:** A conduit that carries water from the upper reservoir to the turbine.
*   **Generator/Motor:** A machine that converts mechanical energy from the turbine into electrical energy (generator) and electrical energy into mechanical energy for the pump (motor).
*   **Charging (Pumping Mode):** Electricity from the grid is used to pump water from the lower reservoir to the upper reservoir.
*   **Discharging (Generating Mode):** Water from the upper reservoir flows through the penstock to drive the turbine, generating electricity.

### 2.2. Working Principle

1.  **Charging (Energy Storage):** When electricity is abundant and cheap (e.g., during off-peak hours or high renewable generation), the pump-turbine unit acts as a pump. It draws water from the lower reservoir and lifts it to the upper reservoir, storing potential energy.
2.  **Discharging (Energy Release):** When electricity demand is high and prices are high, the pump-turbine unit reverses its operation. Water is released from the upper reservoir, flows down the penstock, and passes through the turbine. The turbine spins a generator, producing electricity that is fed back into the grid.

### 2.3. Components

*   **Upper Reservoir:** Stores water at a higher elevation.
*   **Lower Reservoir:** Stores water at a lower elevation.
*   **Pump-Turbine Unit:** A reversible machine that acts as either a pump or a turbine.
*   **Generator-Motor:** Connects to the pump-turbine shaft to generate electricity or drive the pump.
*   **Penstock:** Pipe connecting the reservoirs to the turbine.
*   **Powerhouse:** Houses the turbine and generator.
*   **Transmission Lines:** For connecting to the grid.

### 2.4. Advantages

*   **Large Scale Storage:** Can store significant amounts of energy.
*   **Long Lifespan:** Facilities can operate for 50-100 years.
*   **High Efficiency:** Round-trip efficiency typically ranges from 70% to 85%.
*   **Fast Response Time:** Can switch from pumping to generating in minutes.
*   **Grid Stabilization:** Provides ancillary services like frequency regulation.
*   **Mature Technology:** Well-established and proven.

### 2.5. Disadvantages

*   **Site Specificity:** Requires specific topographical features (two reservoirs at different elevations) and access to water.
*   **High Capital Cost:** Initial investment is substantial.
*   **Environmental Impact:** Can involve significant land use, alteration of river flows, and potential impact on ecosystems.
*   **Long Construction Time:** Projects can take many years to complete.

### 2.6. Example

The **Bath County Pumped Storage Power Station** in Virginia, USA, is the largest PHS facility in the world, with a capacity of 3,000 MW. It utilizes two reservoirs separated by approximately 1,200 feet (366 meters) of elevation.

### 2.7. Performance Parameters

*   **Head (H):** The vertical distance between the water levels of the upper and lower reservoirs.
*   **Flow Rate (Q):** The volume of water passing through the turbine per unit time.
*   **Storage Capacity:** The total energy that can be stored, often expressed in MWh.
*   **Power Output (P):** The rate at which energy is generated, typically in MW.
    *   $P = \eta \times \rho \times g \times Q \times H$
    *   Where:
        *   $\eta$ is the overall efficiency (turbine efficiency, generator efficiency, etc.)
        *   $\rho$ is the density of water
        *   $g$ is the acceleration due to gravity
        *   $Q$ is the flow rate
        *   $H$ is the head

*   **Round-trip Efficiency:** The ratio of energy discharged to energy pumped.

### 2.8. Practice Question

**Question:** A pumped hydro storage system has an upper reservoir with a surface area of 1 million m². Water is pumped to a height of 150 m. If the system pumps water for 6 hours and the pump-turbine efficiency is 80%, calculate the amount of energy stored in terms of potential energy. Assume the density of water is 1000 kg/m³ and $g = 9.81$ m/s².

**Answer:**
First, calculate the volume of water pumped. Let's assume a certain volume is pumped for storage. For this question, we'll assume the system fills a certain capacity of the upper reservoir. A more typical question would give a power input to the pump. Let's rephrase to be more specific about storage.

**Revised Question:** A pumped hydro storage system has a reservoir capacity of 500,000 m³. The water is pumped to a height of 150 m. If the pumping efficiency is 80%, calculate the energy required to pump this volume of water.

**Answer:**
Volume of water (V) = 500,000 m³
Density of water ($\rho$) = 1000 kg/m³
Height (H) = 150 m
Acceleration due to gravity (g) = 9.81 m/s²
Pumping efficiency ($\eta_{pump}$) = 80% = 0.80

Mass of water (m) = $\rho \times V = 1000 \, \text{kg/m}³ \times 500,000 \, \text{m}³ = 5 \times 10^8 \, \text{kg}$

Potential Energy stored = $m \times g \times H = (5 \times 10^8 \, \text{kg}) \times (9.81 \, \text{m/s}²) \times (150 \, \text{m}) = 7.3575 \times 10^{11} \, \text{Joules}$

Energy required for pumping = $\frac{\text{Potential Energy stored}}{\eta_{pump}} = \frac{7.3575 \times 10^{11} \, \text{J}}{0.80} = 9.196875 \times 10^{11} \, \text{Joules}$

Converting to kWh: $9.196875 \times 10^{11} \, \text{J} / (3.6 \times 10^6 \, \text{J/kWh}) \approx 255,468.75 \, \text{MWh}$

---

## 3. Compressed Air Energy Storage (CAES)

Compressed Air Energy Storage (CAES) stores energy by compressing air and storing it in underground caverns, depleted gas fields, or above-ground tanks. The compressed air is then released and heated before expanding through a turbine to generate electricity.

### 3.1. Key Concepts and Definitions

*   **Compression:** Air is compressed using electrical energy, increasing its pressure and temperature.
*   **Storage:** The compressed air is stored in a suitable vessel (e.g., cavern, tank).
*   **Expansion:** When electricity is needed, the stored compressed air is released, heated (usually with natural gas or by the heat generated during compression), and then expanded through a turbine to drive a generator.
*   **Adiabatic Process:** Ideally, compression and expansion would be isothermal (constant temperature), but in reality, it's closer to adiabatic (no heat transfer). In practice, heat is generated during compression and lost during storage, leading to inefficiencies.
*   **Diabatic CAES:** The most common type, where compressed air is reheated using fossil fuels before expansion. This improves efficiency but releases emissions.
*   **Adiabatic CAES:** Aims to capture and reuse the heat of compression, eliminating the need for fossil fuels during generation. This is more complex but offers higher efficiency and no emissions.

### 3.2. Working Principle (Diabatic CAES)

1.  **Charging (Compression):** During periods of low electricity demand or surplus renewable energy, the compressor (driven by electricity) compresses ambient air. This process generates heat.
2.  **Storage:** The compressed air is often passed through an aftercooler to reduce its temperature and then stored in an underground cavern or tank. The heat generated during compression is typically dissipated or used in other applications (in advanced systems).
3.  **Discharging (Expansion and Generation):** When electricity is needed, the compressed air is released from storage. It passes through a heat exchanger (a combustor in diabatic systems) where it is heated, usually by burning natural gas. The hot, high-pressure air then expands through a turbine, driving a generator to produce electricity.

### 3.3. Components

*   **Compressor:** Compresses ambient air.
*   **Motor:** Drives the compressor during charging.
*   **High-pressure Air Storage:** Underground cavern, depleted gas field, or above-ground pressure vessels.
*   **Expander/Turbine:** Expands the heated compressed air to drive a generator.
*   **Generator:** Converts mechanical energy into electrical energy.
*   **Heat Exchanger/Combustor:** Heats the compressed air before expansion (in diabatic systems).
*   **Aftercooler:** Cools the air after compression.

### 3.4. Advantages

*   **Large Scale Storage:** Suitable for utility-scale energy storage.
*   **Long Lifespan:** Storage caverns can last for decades.
*   **Can Utilize Existing Infrastructure:** Depleted gas fields can be repurposed.
*   **Fast Response Time:** Can transition from charging to discharging relatively quickly.
*   **Can Provide Load Following:** Ability to ramp up and down power output.

### 3.5. Disadvantages

*   **Site Specificity:** Requires suitable geological formations for underground storage.
*   **Diabatic CAES Emissions:** Burning natural gas for reheating produces greenhouse gas emissions.
*   **Lower Round-trip Efficiency:** Typically ranges from 40% to 55% for diabatic CAES due to heat losses and compressor inefficiencies. Adiabatic CAES promises higher efficiency (up to 70%).
*   **High Capital Cost:** Similar to PHS, initial investment is significant.
*   **Natural Gas Dependency (Diabatic CAES):** Relies on the availability and price of natural gas.

### 3.6. Example

The **Huntorf Power Station** in Germany was the first large-scale CAES plant, commissioned in 1978. It uses a salt cavern for air storage and is a diabatic system. A more modern example is the **Ladywalk CAES plant** in Iowa, USA.

### 3.7. Performance Parameters

*   **Pressure Ratio:** The ratio of storage pressure to ambient pressure.
*   **Storage Volume:** The capacity of the storage vessel.
*   **Round-trip Efficiency:** Ratio of electrical energy generated to electrical energy consumed for compression.
*   **Power Output:** Typically in MW.

### 3.8. Practice Question

**Question:** A CAES plant uses a compressor with an efficiency of 85% to compress air. For every 1 kWh of electrical energy used for compression, 2 kWh of thermal energy is released and lost. The stored compressed air, when heated and expanded through a turbine, generates 0.5 kWh of electrical energy. Calculate the overall round-trip efficiency of this CAES plant.

**Answer:**
Let the input electrical energy to the compressor be $E_{in} = 1 \, \text{kWh}$.

Electrical energy consumed by compressor = $1 \, \text{kWh}$.

Due to compressor efficiency, the actual work done on the air is $1 \, \text{kWh} \times 0.85 = 0.85 \, \text{kWh}$. (This interpretation can be tricky. Usually, efficiency is output/input. If 1 kWh is supplied, the work done on air is $1 \times 0.85$ and some is lost. Let's assume 1 kWh is the energy supplied to the compressor shaft).

A more direct interpretation:
Energy supplied to compressor = $E_{supply} = 1 \, \text{kWh}$.
Energy stored in compressed air (as work input) = $E_{stored\_work} = E_{supply} \times \eta_{compressor} = 1 \, \text{kWh} \times 0.85 = 0.85 \, \text{kWh}$.

Thermal energy released during compression = $2 \, \text{kWh}$ (This is given as a fact about the process, not directly tied to the 1 kWh input in a simple ratio).

Output electrical energy from the turbine = $E_{out} = 0.5 \, \text{kWh}$.

The input to the *entire cycle* for storage is the electrical energy consumed by the compressor, which is $E_{supply} = 1 \, \text{kWh}$.

The output of the cycle is the electrical energy generated by the turbine, which is $E_{out} = 0.5 \, \text{kWh}$.

Round-trip efficiency = $\frac{\text{Electrical Energy Output}}{\text{Electrical Energy Input}} = \frac{E_{out}}{E_{supply}} = \frac{0.5 \, \text{kWh}}{1 \, \text{kWh}} = 0.5 \, \text{or} \, 50\%$.

*Note: The information about thermal energy released (2 kWh) is relevant for calculating the *thermal efficiency* or analyzing where energy is lost, but for the overall round-trip *electrical* efficiency, we only need the electrical input and output.*

---

## 4. Flywheel Energy Storage (FES)

Flywheel Energy Storage (FES) stores rotational kinetic energy in a spinning rotor. It's a mechanical form of energy storage, often used for short-duration, high-power applications.

### 4.1. Key Concepts and Definitions

*   **Rotor:** A heavy, precisely balanced mass (often made of composite materials like carbon fiber) that spins at high speeds.
*   **Bearings:** Support the rotor and minimize friction. Advanced magnetic bearings are often used to reduce friction significantly.
*   **Motor/Generator:** An electric machine that accelerates the rotor (charging) and extracts energy from it (discharging).
*   **Containment Unit/Enclosure:** A strong casing to contain the rotor in case of failure.
*   **Vacuum Enclosure:** To minimize air resistance and friction.
*   **Kinetic Energy:** The energy of motion, stored by the spinning rotor ($KE = \frac{1}{2}I\omega^2$, where $I$ is the moment of inertia and $\omega$ is the angular velocity).

### 4.2. Working Principle

1.  **Charging (Acceleration):** When there is surplus electricity, the motor accelerates the flywheel rotor to high rotational speeds. Electrical energy is converted into kinetic energy stored in the rotor.
2.  **Discharging (Deceleration):** When electricity is needed, the motor acts as a generator. It extracts kinetic energy from the spinning rotor, slowing it down. This mechanical energy is converted back into electrical energy.

### 4.3. Components

*   **Rotor:** The spinning mass.
*   **Motor-Generator:** Electrically coupled to the rotor.
*   **Bearings:** To support the rotor (magnetic bearings are common for high performance).
*   **Vacuum Enclosure:** To minimize aerodynamic drag.
*   **Power Conditioning Electronics:** To manage the flow of electrical energy between the grid and the FES unit.
*   **Housing/Containment:** For safety.

### 4.4. Advantages

*   **Very High Power Density:** Can deliver and absorb large amounts of power very quickly.
*   **Fast Response Time:** Instantaneous response to grid demands.
*   **Long Cycle Life:** Can be cycled millions of times with minimal degradation.
*   **High Round-trip Efficiency:** Typically 85-95% under ideal conditions.
*   **Environmentally Friendly:** No emissions during operation.
*   **Compact Size:** Can be relatively compact for their power rating.

### 4.5. Disadvantages

*   **Low Energy Density:** Stores relatively small amounts of energy compared to PHS or CAES. Storage duration is limited (seconds to minutes).
*   **High Self-Discharge Rate:** Rotational energy is gradually lost due to friction (even with magnetic bearings and vacuum).
*   **High Cost:** Especially for high-performance systems with advanced materials and magnetic bearings.
*   **Safety Concerns:** High-speed rotors pose a risk if containment fails.

### 4.6. Applications

*   **Uninterruptible Power Supplies (UPS):** For critical loads like data centers and hospitals.
*   **Grid Stabilization:** Frequency regulation, voltage support, and smoothing out renewable energy output.
*   **Electric Vehicle Charging:** Storing energy for rapid charging.
*   **Regenerative Braking:** Capturing energy from braking in vehicles or industrial machinery.

### 4.7. Performance Parameters

*   **Moment of Inertia (I):** A measure of an object's resistance to changes in its rotation.
*   **Angular Velocity ($\omega$):** The speed of rotation in radians per second.
*   **Maximum Stored Energy:** $E_{max} = \frac{1}{2}I\omega_{max}^2$.
*   **Usable Energy:** The energy that can be extracted before the rotor slows down to a minimum acceptable speed.
*   **Round-trip Efficiency:** Ratio of electrical energy output to electrical energy input.
*   **Power Rating:** The maximum power the FES unit can deliver or absorb.

### 4.8. Practice Question

**Question:** A flywheel has a moment of inertia $I = 50 \, \text{kg} \cdot \text{m}^2$. It spins at an initial angular velocity of $1000 \, \text{rad/s}$. If the flywheel is used to provide power until its angular velocity drops to $500 \, \text{rad/s}$, and the motor-generator efficiency is 90%, calculate the total electrical energy that can be delivered.

**Answer:**
Moment of inertia ($I$) = $50 \, \text{kg} \cdot \text{m}^2$
Initial angular velocity ($\omega_1$) = $1000 \, \text{rad/s}$
Final angular velocity ($\omega_2$) = $500 \, \text{rad/s}$
Motor-generator efficiency ($\eta_{MG}$) = 90% = 0.90

Initial kinetic energy ($KE_1$) = $\frac{1}{2}I\omega_1^2 = \frac{1}{2} \times 50 \, \text{kg} \cdot \text{m}^2 \times (1000 \, \text{rad/s})^2$
$KE_1 = 25 \times 1,000,000 \, \text{J} = 25,000,000 \, \text{J} = 25 \, \text{MJ}$

Final kinetic energy ($KE_2$) = $\frac{1}{2}I\omega_2^2 = \frac{1}{2} \times 50 \, \text{kg} \cdot \text{m}^2 \times (500 \, \text{rad/s})^2$
$KE_2 = 25 \times 250,000 \, \text{J} = 6,250,000 \, \text{J} = 6.25 \, \text{MJ}$

Mechanical energy delivered by the flywheel = $KE_1 - KE_2 = 25 \, \text{MJ} - 6.25 \, \text{MJ} = 18.75 \, \text{MJ}$

Electrical energy delivered = Mechanical energy delivered $\times \eta_{MG}$
Electrical energy delivered = $18.75 \, \text{MJ} \times 0.90 = 16.875 \, \text{MJ}$

Converting to kWh: $16.875 \times 10^6 \, \text{J} / (3.6 \times 10^6 \, \text{J/kWh}) \approx 4.6875 \, \text{kWh}$

---

## 5. Comparison of Energy Storage Technologies

| Feature                | Pumped Hydro Storage (PHS) | Compressed Air Energy Storage (CAES) | Flywheel Energy Storage (FES) |
| :--------------------- | :--------------------------- | :----------------------------------- | :---------------------------- |
| **Technology Maturity**| Very High                    | High                                 | Medium                        |
| **Scale**              | Large Utility Scale          | Large Utility Scale                  | Small to Medium               |
| **Energy Density**     | High                         | Medium                               | Very Low                      |
| **Power Density**      | Medium                       | Medium                               | Very High                     |
| **Round-trip Efficiency** | 70-85%                       | 40-55% (Diabatic), up to 70% (Adiabatic) | 85-95%                        |
| **Response Time**      | Minutes                      | Minutes                              | Milliseconds                  |
| **Storage Duration**   | Hours to Days                | Hours                                | Seconds to Minutes            |
| **Lifespan**           | 50-100 years                 | Caverns: Decades, Plant: 20-30 years | 10-20 years (components), millions of cycles |
| **Capital Cost**       | High                         | High                                 | High (per unit energy)        |
| **Site Requirements**  | Topography, Water            | Geological formations                | Minimal (structural support)  |
| **Environmental Impact**| Significant (land use)       | Emissions (Diabatic CAES)            | Low                           |

**(Reference: El Wakil, M. M. "Power Plant Technology." McGraw Hill Education, 1, 2017.)**
**(Reference: Nag, P. K. "Power Plant Engineering." McGraw Hill Education, 4, 2017.)**
**(Reference: Nagpal, G. R., Sharma, S. C. "Power Plant Engineering." KHANNA Publishers, 16, 2012.)**
**(Reference: Gupta, M. K. "Power Plant Engineering." PHI Learning Pvt. Ltd, 1, 2012.)**

---

## 6. Alignment with Course Outcomes

This module directly addresses **CO4: Explain the working of various energy storage systems (Knowledge Level: K2)** by detailing the principles, components, advantages, and disadvantages of PHS, CAES, and FES. While not directly focused on calculating performance parameters for these systems, the understanding of their working principles is fundamental to their potential role in power generation discussed in other COs.

---

## 7. Important Points to Remember

*   **Purpose of Energy Storage:** To balance supply and demand, improve grid stability, and integrate renewables.
*   **PHS:** Mature, large-scale, site-specific, relies on gravity and water.
*   **CAES:** Stores energy as pressurized air, requires geological formations or tanks, diabatic systems have emissions.
*   **FES:** Stores kinetic energy in a rotor, excellent for high power, short duration, rapid response.
*   **Efficiency:** Varies significantly between technologies.
*   **Cost and Scalability:** PHS and CAES are for utility-scale, FES is for niche applications where rapid power is critical.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
