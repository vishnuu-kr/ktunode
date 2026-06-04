---
title: "Pelton, Francis and Kaplan Turbines: Principle and working, head, work done, efficiencies (Problems using velocity triangles not required)."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 4: Impact of jets: Impact of jet on fixed vertical, moving vertical flat plates."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d2b"
status: "completed"
scrapedAt: "2026-05-20T17:49:32.864Z"
---
# Fluid Mechanics and Machinery - Module 4: Impact of Jets & Turbines

## Topic: Pelton, Francis and Kaplan Turbines: Principle and Working, Head, Work Done, Efficiencies (Problems using velocity triangles not required)

---

### Introduction to Turbo Machines

Turbo machines are rotary machines that transfer energy between a rotor and a fluid. They are broadly classified into **turbines** (which extract energy from the fluid) and **pumps/compressors** (which impart energy to the fluid). This module focuses on the key types of hydraulic turbines.

---

### 1. Impact of Jets on Surfaces (Brief Overview - Context for Turbines)

While the primary focus of this topic is on turbines, understanding the principle of jet impact is fundamental to how these machines operate.

*   **Principle:** When a jet of fluid strikes a surface, it exerts a force on that surface due to the change in momentum of the fluid. This force is related to the mass flow rate of the jet and the change in its velocity.
*   **Fixed Vertical Flat Plate:**
    *   If the jet strikes perpendicular to the surface, the force exerted is $F = \rho \cdot A \cdot V^2$, where:
        *   $\rho$ is the density of the fluid.
        *   $A$ is the cross-sectional area of the jet.
        *   $V$ is the velocity of the jet.
    *   The fluid flows off tangentially without any change in velocity in the direction of impact.
*   **Moving Vertical Flat Plate:**
    *   If the plate is moving in the same direction as the jet with a velocity $u$, the relative velocity of the jet with respect to the plate is $(V-u)$.
    *   The force exerted by the jet on the moving plate is $F = \rho \cdot A \cdot (V-u)^2$.
    *   The power delivered to the plate is $P = F \cdot u = \rho \cdot A \cdot (V-u)^2 \cdot u$.
    *   **Observation:** This principle of transferring kinetic energy through a change in momentum is the basis for how turbines extract energy from the moving water.

---

### 2. Pelton Turbine (Impulse Turbine)

The Pelton turbine is a **high-head, low-flow** impulse turbine. It is most suitable for sites with a large vertical head of water and a relatively small flow rate.

#### 2.1. Principle and Working

*   **Principle:** The Pelton turbine works on the principle of **impact of a high-velocity jet of water**. A high-velocity jet, produced by a nozzle, strikes a series of buckets mounted on a runner. The force exerted by the jet on the buckets changes the momentum of the water, causing the runner to rotate.
*   **Working:**
    1.  **Water Supply:** Water is brought from a high reservoir through a penstock (a large pipe).
    2.  **Nozzle:** At the end of the penstock, a nozzle is used to convert the pressure energy of water into kinetic energy, producing a high-velocity jet. A spear or needle valve within the nozzle controls the flow rate and thus the power output.
    3.  **Runner with Buckets:** The runner is a wheel with a series of specially shaped buckets mounted around its periphery. Each bucket is divided into two hemispherical cups by a sharp-edged ridge called a **splitter**.
    4.  **Jet Impact:** The high-velocity jet from the nozzle strikes the splitter of a bucket. The splitter divides the jet into two equal streams, which then flow smoothly along the inner curved surfaces of the two halves of the bucket.
    5.  **Momentum Change:** As the water flows through the bucket, its direction is reversed (approximately 160-170 degrees). This significant change in momentum results in a force on the bucket, causing the runner to rotate.
    6.  **Water Discharge:** After striking the buckets, the water is discharged with reduced velocity into the tailrace. The buckets are designed to minimize energy loss.
    7.  **Casing:** The runner is enclosed in a casing to prevent splashing of water and to guide the discharged water to the tailrace.

#### 2.2. Head

*   **Gross Head ($H_g$):** The vertical difference between the water level in the reservoir and the center of the nozzle.
*   **Net Head ($H$):** The head available at the nozzle after accounting for friction losses in the penstock and other minor losses.
    $H = H_g - h_f$ (where $h_f$ is the head loss due to friction).
*   **Velocity of Jet ($V_j$):** According to Torricelli's theorem, the theoretical velocity of the jet is $V_j = \sqrt{2gH}$. However, due to losses at the nozzle, the actual velocity is slightly less: $V_j = C_v \sqrt{2gH}$, where $C_v$ is the coefficient of velocity (typically 0.97-0.99).

#### 2.3. Work Done and Power Developed

*   **Work done per unit weight of water:** This is the energy gained by the water as it interacts with the runner.
    *   The force on the bucket is related to the change in momentum of the water.
    *   The work done is the force multiplied by the distance moved.
*   **Theoretical Work Done per unit weight of water:**
    *   The water enters the bucket with velocity $V_j$ and leaves with a relative velocity $V_{r2}$.
    *   The angle of deflection of the jet in the bucket is approximately 180 degrees.
    *   The work done on the runner per unit weight of water is approximately $V_j \cdot u / g$, where $u$ is the peripheral velocity of the runner.
*   **Power Developed ($P$):**
    $P = \text{Weight flow rate} \times \text{Work done per unit weight}$
    $P = (\rho \cdot Q \cdot g) \times (V_j \cdot u / g)$
    $P = \rho \cdot Q \cdot V_j \cdot u$
    where $Q$ is the flow rate through the nozzle.

#### 2.4. Efficiencies

*   **Hydraulic Efficiency ($\eta_h$):** The ratio of the power delivered to the runner to the power supplied by the jet.
    $\eta_h = \frac{\text{Power delivered to runner}}{\text{Power supplied by the jet}}$
    The power supplied by the jet is $\frac{1}{2} m V_j^2 \cdot g$ per unit time, or $\frac{1}{2} \rho Q V_j^2$.
    $\eta_h = \frac{\rho Q (V_j \cdot u)}{0.5 \rho Q V_j^2} = \frac{2u}{V_j}$
    *(Note: This simplified relation assumes ideal conditions where the jet is completely reversed relative to the bucket, which is not entirely accurate in practice due to bucket design and friction, hence velocity triangles are usually used for precise calculation. However, for this module's scope, this is sufficient.)*
*   **Mechanical Efficiency ($\eta_m$):** The ratio of the power available at the shaft to the power delivered to the runner. This accounts for frictional losses in bearings and packing.
    $\eta_m = \frac{\text{Shaft Power}}{\text{Power delivered to runner}}$
*   **Overall Efficiency ($\eta_o$):** The ratio of the power available at the shaft to the power supplied by the jet.
    $\eta_o = \eta_h \cdot \eta_m$

#### 2.5. Important Points to Remember (Pelton Turbine)

*   Suitable for **high heads** and **low flow rates**.
*   **Impulse turbine**: The pressure of water remains atmospheric throughout its flow through the turbine.
*   **Runner consists of buckets**, each with a splitter.
*   **Nozzle** converts pressure energy into kinetic energy.
*   **Spear** controls the flow rate.
*   Jet deflection angle is about 160-170 degrees.
*   **Maximum efficiency** occurs when the peripheral velocity of the runner ($u$) is approximately half the jet velocity ($V_j$), i.e., $u \approx V_j/2$.

---

### 3. Francis Turbine (Reaction Turbine)

The Francis turbine is a **medium-head, medium-flow** radial-axial turbine. It is the most common type of turbine used in hydroelectric power plants.

#### 3.1. Principle and Working

*   **Principle:** The Francis turbine is a **reaction turbine**. It works on the principle that a reaction force is produced when a fluid flows through a set of guide vanes and then through the runner vanes. Both the pressure energy and kinetic energy of the water are utilized to produce rotation. As water flows through the runner, its pressure decreases, causing a reaction force on the runner.
*   **Working:**
    1.  **Water Supply:** Water is supplied from a reservoir through a penstock.
    2.  **Spiral Casing (Volute Casing):** The penstock leads to a spiral casing that surrounds the runner. The casing is designed to reduce the velocity of water uniformly and to distribute it evenly around the periphery of the runner.
    3.  **Guide Vanes:** Stationary guide vanes are arranged around the runner. These vanes control the flow rate of water and impart a specific tangential velocity to the water entering the runner. The angle of the guide vanes can be adjusted to control the output power and maintain high efficiency over a range of flow rates.
    4.  **Runner:** The runner consists of a series of curved vanes. Water enters the runner radially under the guide vanes and flows outwards and then axially through the runner vanes.
    5.  **Radial to Axial Flow:** As water passes through the runner, it changes direction from radial to axial. This change in direction and the decreasing pressure as it flows through the runner contribute to the torque on the runner.
    6.  **Draft Tube:** After passing through the runner, the water has some residual kinetic energy and is discharged into a **draft tube**. The draft tube is a diverging pipe that gradually slows down the water, recovering some of the kinetic energy as pressure, thereby increasing the effective head on the turbine and improving efficiency. It also allows the turbine to be placed above the tailrace level without significant loss of head.

#### 3.2. Head

*   **Net Head ($H$):** The difference in water level between the upstream and downstream of the turbine, after accounting for all losses.
    $H = H_{upstream} - H_{downstream} - h_f$ (where $h_f$ represents friction losses in the penstock and casing).
*   In a reaction turbine, the water enters and leaves under pressure, and the pressure at the runner inlet is greater than the pressure at the runner outlet.

#### 3.3. Work Done and Power Developed

*   **Work Done per unit weight of water:** This is the sum of the change in kinetic energy and the change in pressure energy.
    *   The energy given to the runner per unit weight of water is given by $\frac{1}{g} (V_{w1} u_1 \pm V_{w2} u_2)$, where $V_{w1}$ and $V_{w2}$ are the tangential components of the absolute velocities of water entering and leaving the runner, respectively, and $u_1$ and $u_2$ are the corresponding peripheral velocities of the runner. The '+' sign is used when the tangential component of velocity is in the same direction as the rotation, and the '-' sign when it's in the opposite direction. For a Francis turbine, typically $V_{w1}$ causes rotation in one direction, and $V_{w2}$ is often smaller and can be in the same or opposite direction.
    *   The theoretical work done per unit weight is commonly expressed as $\frac{1}{g} (V_{w1} u_1 - V_{w2} u_2)$.
*   **Power Developed ($P$):**
    $P = \text{Weight flow rate} \times \text{Work done per unit weight}$
    $P = (\rho \cdot Q \cdot g) \times \frac{1}{g} (V_{w1} u_1 - V_{w2} u_2)$
    $P = \rho \cdot Q \cdot (V_{w1} u_1 - V_{w2} u_2)$

#### 3.4. Efficiencies

*   **Hydraulic Efficiency ($\eta_h$):** The ratio of the useful work done on the runner to the energy supplied by the water to the runner.
    $\eta_h = \frac{\text{Work done on runner}}{\text{Energy supplied by water}}$
    $\eta_h = \frac{\rho Q g \cdot (V_{w1} u_1 - V_{w2} u_2) / g}{\rho Q g H}$
    $\eta_h = \frac{V_{w1} u_1 - V_{w2} u_2}{gH}$
*   **Mechanical Efficiency ($\eta_m$):** The ratio of the power delivered at the shaft to the power delivered to the runner.
    $\eta_m = \frac{\text{Shaft Power}}{\text{Power delivered to runner}}$
*   **Overall Efficiency ($\eta_o$):** The ratio of the power delivered at the shaft to the power supplied by the water to the turbine.
    $\eta_o = \eta_h \cdot \eta_m$

#### 3.5. Important Points to Remember (Francis Turbine)

*   Suitable for **medium heads** and **medium flow rates**.
*   **Reaction turbine**: Operates partly under pressure.
*   Water enters **radially** and leaves **axially**.
*   Uses **guide vanes** to control flow and direct water onto the runner.
*   **Spiral casing** distributes water evenly.
*   **Draft tube** recovers kinetic energy and allows flexibility in placement.
*   **Runner vanes** are curved to extract energy from both pressure and kinetic energy changes.

---

### 4. Kaplan Turbine (Propeller Turbine)

The Kaplan turbine is a **low-head, high-flow** propeller turbine. It is an axial flow turbine suitable for sites with very low heads and large flow rates.

#### 4.1. Principle and Working

*   **Principle:** The Kaplan turbine is also a **reaction turbine**, similar in principle to the Francis turbine, but designed for axial flow. It utilizes the reaction force generated by the flow of water through its propeller-like runner. The key feature of a Kaplan turbine is that its runner vanes are **adjustable**, allowing it to maintain high efficiency over a wide range of flow rates and heads.
*   **Working:**
    1.  **Water Supply:** Water is supplied through a penstock.
    2.  **Spiral Casing:** Similar to the Francis turbine, a spiral casing directs water to the guide vanes.
    3.  **Guide Vanes:** Stationary guide vanes regulate the flow and impart a tangential velocity to the water entering the runner. The guide vanes are adjustable.
    4.  **Runner:** The runner resembles a ship's propeller, with a few adjustable blades. Water flows axially through the runner.
    5.  **Adjustment of Blades:** This is the crucial aspect of the Kaplan turbine. By adjusting the pitch (angle) of the runner blades using a hydraulic servo-mechanism, the turbine can operate efficiently at varying flow rates. For example, at lower flow rates, the blades are turned to a smaller angle, reducing the area for flow and maintaining optimal energy transfer. At higher flow rates, the blade angle is increased.
    6.  **Draft Tube:** A draft tube is essential for Kaplan turbines to recover the residual kinetic energy of the water discharged axially, thereby increasing the net head.

#### 4.2. Head

*   **Net Head ($H$):** The difference in water level between the upstream and downstream of the turbine, after accounting for all losses. For Kaplan turbines, this head is typically very low.

#### 4.3. Work Done and Power Developed

*   **Work Done per unit weight of water:** Similar to the Francis turbine, it's related to the change in momentum and pressure.
    *   The energy given to the runner per unit weight of water is $\frac{1}{g} (V_{w1} u_1 - V_{w2} u_2)$.
*   **Power Developed ($P$):**
    $P = \rho \cdot Q \cdot (V_{w1} u_1 - V_{w2} u_2)$

#### 4.4. Efficiencies

*   **Hydraulic Efficiency ($\eta_h$):** The ratio of the work done on the runner to the energy supplied by the water.
    $\eta_h = \frac{V_{w1} u_1 - V_{w2} u_2}{gH}$
*   **Mechanical Efficiency ($\eta_m$):** The ratio of the power at the shaft to the power delivered to the runner.
*   **Overall Efficiency ($\eta_o$):** The ratio of the power at the shaft to the power supplied by the water to the turbine.
    $\eta_o = \eta_h \cdot \eta_m$
    The key advantage of the Kaplan turbine is its ability to maintain a high overall efficiency ($\approx 90\%$ or more) over a wide range of operating conditions due to the adjustable blades.

#### 4.5. Important Points to Remember (Kaplan Turbine)

*   Suitable for **low heads** and **high flow rates**.
*   **Reaction turbine**, operates with axial flow.
*   **Adjustable runner blades** are its defining feature, enabling high efficiency over a wide range of flow conditions.
*   Often referred to as a **propeller turbine**.
*   Requires a **draft tube**.
*   **Guide vanes** are also adjustable.

---

### 5. Comparison of Turbines

| Feature           | Pelton Turbine                     | Francis Turbine                       | Kaplan Turbine                      |
| :---------------- | :--------------------------------- | :------------------------------------ | :---------------------------------- |
| **Type**          | Impulse Turbine                    | Reaction Turbine                      | Reaction Turbine                    |
| **Head Range**    | High (100m to 1800m)               | Medium (20m to 600m)                  | Low (2m to 60m)                     |
| **Flow Rate**     | Low                                | Medium                                | High                                |
| **Water Jet**     | Single or multiple jets            | Water delivered radially and axially  | Axial flow                          |
| **Runner Design** | Buckets with splitter              | Vanes (radial to axial flow)          | Propeller-like blades (axial flow)  |
| **Key Component** | Nozzle, Buckets                    | Guide Vanes, Runner, Spiral Casing    | Adjustable Guide Vanes, Adjustable Runner Blades, Draft Tube |
| **Efficiency**    | High efficiency at design flow     | Good efficiency over a range of heads | Very high efficiency over a wide range of flow rates |
| **Applications**  | Mountainous regions, high dams     | Most common in hydroelectric power    | Low-head power generation, run-of-river plants |

---

### 6. Relating to Course Outcomes

*   **CO1 (Fluid Properties, Pressure, Forces):** While not directly calculating hydrostatic forces, understanding how pressure changes (in Francis and Kaplan turbines) and how jet velocity is derived from head relates to pressure concepts.
*   **CO2 (Flow Classification, Kinematics, Dynamics):** The working of turbines involves fluid flow through vanes and changes in velocity and direction, which are core concepts of kinematics and dynamics. The force exerted by jets is a direct application of momentum principles.
*   **CO3 (Viscous Flow, Losses):** While this topic focuses on the ideal operation, the mention of friction losses in penstocks and draft tubes touches upon viscous flow concepts.
*   **CO4 (Dimensional Analysis):** Understanding the similarity between turbines and scaling their performance often involves dimensional analysis (though not covered in detail here).
*   **CO5 (Turbo Machine Selection):** This entire topic is dedicated to enabling the selection of the appropriate turbine (Pelton, Francis, Kaplan) based on the given head and flow rate, which is the primary objective of CO5.

---

### 7. Practice Questions and Answers

**Question 1:** A Pelton wheel is required to develop 1500 kW under a head of 125 m. The jet diameter is 150 mm and the overall efficiency is 85%. Calculate the velocity of the jet and the specific speed of the turbine.
*(Assume $C_v = 1$, $\eta_o = \eta_h$. Let $u = V_j/2$ for maximum efficiency of the turbine itself, but for overall power calculation, we use the general formulas.)*

**Solution 1:**
Given:
Power output ($P_{out}$) = 1500 kW = $1500 \times 10^3$ W
Head ($H$) = 125 m
Jet diameter ($d$) = 150 mm = 0.15 m
Overall efficiency ($\eta_o$) = 85% = 0.85
Density of water ($\rho$) = 1000 kg/m³

1.  **Calculate Jet Velocity ($V_j$):**
    Assuming $C_v = 1$ for simplicity as per typical problem statements where it's not given.
    $V_j = \sqrt{2gH} = \sqrt{2 \times 9.81 \times 125} = \sqrt{2452.5} \approx 49.52$ m/s.

2.  **Calculate Flow Rate ($Q$):**
    The power supplied by the jet is $P_{jet} = \rho \cdot Q \cdot V_j \cdot u$ (this is the power delivered to the runner).
    The power output is $P_{out} = P_{jet} \cdot \eta_m = \rho \cdot Q \cdot V_j \cdot u \cdot \eta_m$.
    However, it's simpler to use the overall efficiency definition:
    $P_{out} = \eta_o \times \text{Power supplied by water}$
    Power supplied by water = $\rho \cdot g \cdot Q \cdot H$.
    So, $P_{out} = \eta_o \times \rho \times g \times Q \times H$.
    $1500 \times 10^3 = 0.85 \times 1000 \times 9.81 \times Q \times 125$
    $Q = \frac{1500 \times 10^3}{0.85 \times 1000 \times 9.81 \times 125} \approx 1.16$ m³/s.

3.  **Calculate Specific Speed ($N_s$):**
    First, we need to find the rotational speed ($N$) of the turbine. To do this, we'd ideally use velocity triangles. However, without velocity triangles, we can relate the power to the speed if we assume optimal conditions. A common assumption for Pelton turbines for calculating speed is that the jet velocity is roughly twice the bucket speed ($V_j \approx 2u$), and then relating runner diameter ($D$) to bucket speed ($u = \pi D N / 60$).
    The power developed by the runner (before mechanical losses) is $P_{runner} = \rho \cdot Q \cdot (V_j \cdot u)$.
    We know $P_{out} = P_{runner} \cdot \eta_m$.
    Let's assume $\eta_h = \eta_o$ and we have $P_{out} = \eta_h \times \rho \times Q \times (V_j \cdot u) / g$? No, this is wrong.
    Let's use the formula: $P_{out} = \eta_o \times (\frac{1}{2} \rho Q V_j^2)$. This is incorrect.
    The power supplied by the jet is $\frac{1}{2} \rho A V_j^3$.
    $P_{out} = \eta_o \times (\frac{1}{2} \rho A V_j^3)$.
    $1500 \times 10^3 = 0.85 \times \frac{1}{2} \times 1000 \times (\frac{\pi}{4} (0.15)^2) \times (49.52)^3$
    $1500 \times 10^3 = 0.85 \times 500 \times 0.01767 \times 121420$
    $1500 \times 10^3 \approx 914000$. This suggests our assumed $V_j$ or efficiency might be slightly off if we are calculating it this way.

    Let's use the power delivered to the runner: $P_{runner} = \rho Q (V_j u)$. Assuming optimal conditions where $u \approx V_j/2$.
    $P_{runner} = \rho Q V_j (V_j/2) = \rho Q V_j^2 / 2$.
    $P_{out} = P_{runner} \cdot \eta_m$.
    If we assume $\eta_h = 0.95$ and $\eta_m = 0.95$, then $\eta_o = 0.9025$.
    Let's re-calculate $Q$ using a more standard approach for power:
    $P_{out} = \eta_o \times (\text{Mass flow rate} \times \text{Energy per unit mass})$
    $P_{out} = \eta_o \times (\rho Q) \times (V_j u / g \times g) = \eta_o \times \rho Q V_j u$. This formula is for power delivered to the shaft if $V_j u$ is work done per unit mass.
    Power developed on the runner per unit weight is $W_r = V_j u / g$.
    Total power developed on the runner = $\rho Q g \times W_r = \rho Q V_j u$.
    Shaft power = $\eta_m \rho Q V_j u$.
    The power supplied by the jet is $\frac{1}{2} \rho Q V_j^2$.
    So, $\eta_h = \frac{\rho Q V_j u}{\frac{1}{2} \rho Q V_j^2} = \frac{2u}{V_j}$.
    Assuming $\eta_h = 0.95$, then $u = 0.95 \times V_j / 2 \approx 0.95 \times 49.52 / 2 \approx 23.52$ m/s.

    Now, let's use the power equation with $u$:
    $P_{out} = \eta_m \times \rho \times Q \times V_j \times u$
    We need $Q$ and $u$. We have $V_j$.
    Let's use the power delivered to the runner, assuming optimal hydraulic efficiency where $u = V_j/2$:
    $P_{runner} = \rho Q V_j (V_j/2) = \rho Q V_j^2 / 2$.
    $P_{out} = \eta_m \times P_{runner} = \eta_m \times (\rho Q V_j^2 / 2)$.
    We also know that $P_{out} = \eta_o \times (\frac{1}{2} \rho A V_j^3)$ is incorrect.
    The actual power input to the turbine is $P_{in} = \rho Q g H$.
    $P_{out} = \eta_o \times P_{in} = \eta_o \times \rho Q g H$.
    $1500 \times 10^3 = 0.85 \times 1000 \times 9.81 \times Q \times 125$.
    $Q = \frac{1500 \times 10^3}{0.85 \times 1000 \times 9.81 \times 125} \approx 1.16$ m³/s. This calculation for $Q$ seems consistent.

    Now for speed ($N$). We need to relate $u$ to $N$.
    Assume $u = V_j/2 = 49.52 / 2 = 24.76$ m/s for maximum hydraulic efficiency.
    The runner diameter ($D$) is usually 10-15 times the jet diameter. Let's assume $D = 12d = 12 \times 0.15 = 1.8$ m.
    $u = \frac{\pi D N}{60}$
    $24.76 = \frac{\pi \times 1.8 \times N}{60}$
    $N = \frac{24.76 \times 60}{\pi \times 1.8} \approx 264$ rpm.

    **Specific Speed ($N_s$):**
    $N_s = \frac{N \sqrt{P}}{H^{5/4}}$ (where P is power in kW, H is head in m, N is speed in rpm).
    $N_s = \frac{264 \sqrt{1500}}{125^{5/4}} = \frac{264 \times 38.73}{438.77} \approx 23.3$ rpm.

    *Note: Without velocity triangles, calculating the exact speed and hence specific speed for a Pelton turbine can be ambiguous. The relationship $u \approx V_j/2$ is a common assumption for optimal performance. The problem statement is simplified.*

**Question 2:** A Francis turbine operates under a head of 64 m and discharges 2 m³/s. The turbine runs at 300 rpm. If the hydraulic efficiency is 90% and mechanical efficiency is 95%, find the power developed at the shaft.

**Solution 2:**
Given:
Head ($H$) = 64 m
Flow rate ($Q$) = 2 m³/s
Speed ($N$) = 300 rpm
Hydraulic efficiency ($\eta_h$) = 0.90
Mechanical efficiency ($\eta_m$) = 0.95

1.  **Calculate Power Supplied by Water:**
    $P_{in} = \rho \cdot g \cdot Q \cdot H$
    $P_{in} = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 2 \, \text{m}^3/\text{s} \times 64 \, \text{m}$
    $P_{in} = 1255.68 \times 10^3$ W = 1255.68 kW.

2.  **Calculate Power Delivered to Runner (Hydraulic Power):**
    $P_{runner} = \eta_h \times P_{in}$
    $P_{runner} = 0.90 \times 1255.68$ kW = 1130.11 kW.

3.  **Calculate Power Developed at Shaft (Shaft Power):**
    $P_{shaft} = \eta_m \times P_{runner}$
    $P_{shaft} = 0.95 \times 1130.11$ kW = 1073.6 kW.

**Answer:** The power developed at the shaft is approximately 1073.6 kW.

---

### 8. Important Points to Remember for the Entire Topic

*   **Turbine Classification:** Based on head and flow rate (Pelton - High Head/Low Flow, Francis - Medium Head/Medium Flow, Kaplan - Low Head/High Flow).
*   **Energy Transfer:** Pelton is impulse, Francis and Kaplan are reaction.
*   **Water Path:** Jet strikes buckets (Pelton), enters radially, leaves axially (Francis), enters and leaves axially (Kaplan).
*   **Key Components:** Nozzle (Pelton), Guide Vanes (Francis/Kaplan), Runner, Draft Tube (Francis/Kaplan).
*   **Efficiency:** All turbines aim for high overall efficiency, but Kaplan's adjustable blades give it an advantage over a wider operating range.
*   **Head Loss:** Friction in penstock, casing, and draft tube affects the net head available for work.
*   **Draft Tube:** Recovers kinetic energy at the outlet, increasing efficiency and allowing flexibility in setting the turbine.

---

This concludes the study notes for Pelton, Francis, and Kaplan turbines. Remember to focus on their principles of operation, characteristic parameters (head, flow), and how their design leads to different efficiencies and applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
