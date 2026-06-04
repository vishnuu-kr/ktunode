---
title: "Helical gear"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d8f"
status: "completed"
scrapedAt: "2026-05-20T18:11:21.590Z"
---
# DESIGN OF MACHINE ELEMENTS: Module 4: Design of Gears: Nomenclature: Helical Gears

## Introduction

Helical gears are a more advanced type of gear compared to spur gears, offering smoother and quieter operation, higher load-carrying capacity, and the ability to transmit power between non-parallel shafts. This module will delve into the nomenclature, advantages, disadvantages, and fundamental design aspects of helical gears, aligning with the course outcome of modeling suitable helical gear drives.

---

## 1. Nomenclature of Helical Gears

Helical gears, like spur gears, have teeth that are cut on their periphery. However, the defining characteristic of a helical gear is that its teeth are cut at an **angle** to the axis of rotation. This angle is known as the **helix angle ($\psi$)**.

### Key Terms and Definitions:

*   **Helix Angle ($\psi$)**: The angle between any helix of the tooth and the axis of the gear. It's typically measured in the plane of rotation of the gear.
    *   **Important Note**: In helical gears, the helix angle of the pinion and the mating gear must be the same (though their hand might be opposite).
*   **Normal Plane**: The plane perpendicular to the tooth helix.
*   **Transverse Plane**: The plane containing the axis of the gear.
*   **Face Width (F)**: The width of the gear tooth along its axis.
*   **Normal Module ($m_n$)**: The module measured in the normal plane. This is the fundamental parameter used in the design of helical gears.
    *   **Relationship**: $m_t = m_n / \cos(\psi)$ (where $m_t$ is the transverse module)
*   **Transverse Module ($m_t$)**: The module measured in the transverse plane. It's analogous to the module in spur gears.
*   **Addendum ($a$)**: The radial distance from the pitch surface to the top of the tooth.
*   **Dedendum ($b$)**: The radial distance from the pitch surface to the bottom of the tooth.
*   **Tooth Depth ($h$)**: The radial distance from the pitch surface to the root of the tooth ($h = a + b$).
*   **Circular Pitch ($p$)**: The distance along the pitch circle from one point on a tooth to the corresponding point on the next tooth.
    *   **Normal Circular Pitch ($p_n$)**: $p_n = \pi m_n$. This is the actual spacing between teeth in the normal direction.
    *   **Transverse Circular Pitch ($p_t$)**: $p_t = \pi m_t$. This is the spacing measured along the pitch circle.
    *   **Relationship**: $p_t = p_n / \cos(\psi)$
*   **Diametral Pitch ($P$)**: Related to circular pitch by $P = \text{number of teeth} / \text{diameter}$.
    *   **Normal Diametral Pitch ($P_n$)**: $P_n = 1/m_n$.
    *   **Transverse Diametral Pitch ($P_t$)**: $P_t = 1/m_t$.
    *   **Relationship**: $P_t = P_n \cos(\psi)$.
*   **Pitch Diameter ($d$)**: The diameter of the pitch circle.
    *   **Transverse Pitch Diameter ($d_t$)**: $d_t = Z m_t = Z m_n / \cos(\psi)$ (where Z is the number of teeth).
    *   **Normal Pitch Diameter ($d_n$)**: $d_n = Z m_n$.
*   **Outside Diameter ($D_o$)**: The diameter of the gear at the top of the teeth. $D_o = d_t + 2a$.
*   **Root Diameter ($D_r$)**: The diameter of the gear at the bottom of the teeth. $D_r = d_t - 2b$.
*   **Pressure Angle ($\phi$)**: The angle between the line of action and the common tangent to the pitch circles. In helical gears, we primarily deal with the **normal pressure angle ($\phi_n$)**. The **transverse pressure angle ($\phi_t$)** is related by $\tan(\phi_t) = \tan(\phi_n) / \cos(\psi)$.
    *   **Standard Pressure Angles**: Typically 20 degrees.
*   **Axial Pitch ($p_a$)**: The distance along the axis of the gear from one tooth to the corresponding tooth on the next tooth. $p_a = p_n / \tan(\psi) = \pi m_n / \tan(\psi)$.
*   **Face Angle**: The angle of the tooth at the end face of the gear.
*   **Hand of Helix**: Helical gears can have a right-hand helix or a left-hand helix. A right-hand helix gear rotates clockwise when viewed from the left, and a left-hand helix gear rotates counterclockwise. For power transmission between parallel shafts, the two gears must have opposite hands. For transmission between crossed shafts, they must have the same hand.

### Visualization:

Imagine a spur gear tooth being "twisted" to form a helix. The amount of twist is governed by the helix angle. This twist distributes the load over a larger area of the tooth face, leading to several advantages.

---

## 2. Types of Helical Gears

Based on shaft orientation, helical gears are classified into:

*   **Parallel Shaft Helical Gears**: Used to transmit power between shafts that are parallel. This is the most common type.
*   **Crossed Shaft Helical Gears**: Used to transmit power between shafts that are not parallel (intersecting at any angle) but are also not in the same plane. They can transmit power between shafts at any angle, but the efficiency is lower, and the load-carrying capacity is reduced compared to parallel shaft gears.

---

## 3. Advantages of Helical Gears (over Spur Gears)

*   **Smoother and Quieter Operation**: The gradual engagement and disengagement of the helical teeth, due to the helix angle, results in less shock and vibration, leading to quieter operation.
*   **Higher Load-Carrying Capacity**: The helical teeth are in contact along a diagonal line, which distributes the load over a larger area of the tooth face compared to the line contact in spur gears. This increases the strength and durability.
*   **Increased Tooth Strength**: The effective thickness of the helical tooth is greater than that of a spur gear tooth of the same module in the transverse plane, leading to higher bending strength.
*   **Higher Speed Applications**: Due to their smoother operation, helical gears are suitable for higher speed applications.

---

## 4. Disadvantages of Helical Gears

*   **Axial Thrust**: The helix angle creates an axial thrust component on the bearings, which needs to be accommodated by using thrust bearings or a double helical (herringbone) gear.
*   **More Complex Manufacturing**: Cutting helical teeth is more complex than cutting spur teeth, leading to higher manufacturing costs.
*   **Higher Cost**: Due to the complexity of manufacturing, helical gears are generally more expensive than spur gears.
*   **Need for Bearing Support**: The axial thrust necessitates robust bearing arrangements.
*   **Lubrication Issues (for Crossed Shaft Gears)**: Lubrication can be more challenging in crossed shaft applications.

---

## 5. Design Considerations for Helical Gears

The design of helical gears involves ensuring that they can withstand the applied loads without failure due to bending stress, surface endurance (pitting), or deflection. The design procedure largely follows that of spur gears but with modifications to account for the helix angle.

### Key Design Aspects:

*   **Material Selection**: Similar to spur gears, materials like steel (hardened and tempered), cast iron, and bronze are used, depending on the load and application. Material properties (tensile strength, hardness, fatigue strength) are crucial.
*   **Tooth Strength (Bending Stress)**:
    *   The Lewis formula, modified for helical gears, is often used. The effective tooth width in the direction of force is related to the face width and helix angle.
    *   **Modified Lewis Equation**: $W_t = \sigma_b F Y \frac{m_t}{d_t/Z}$, where $W_t$ is the tangential tooth load, $\sigma_b$ is the allowable bending stress, $F$ is the face width, $Y$ is the form factor, $m_t$ is the transverse module, and $d_t/Z$ is the transverse circular pitch.
    *   **Note**: The form factor $Y$ depends on the pressure angle and the number of teeth. For helical gears, the effective number of teeth in bending is considered in the normal plane, so $Z_{eff} = Z / \cos(\psi)$.
    *   The design calculation involves determining the required module ($m_t$) based on the tangential load and allowable stress.
*   **Surface Endurance (Pitting)**:
    *   The surface stress calculation involves Hertzian contact stress. The load distribution is affected by the helix angle and face width.
    *   The calculation considers the material properties (surface endurance limit), geometry of the teeth (curvature in the normal plane), and the load.
    *   **Schutz's Formula (Simplified)**: $W_t = q d_t F \frac{I}{C_{eq}}$, where $W_t$ is the tangential load, $q$ is the surface load factor, $d_t$ is the pitch diameter, $F$ is the face width, $I$ is the geometry factor, and $C_{eq}$ is the equivalent modulus of elasticity.
    *   **Note**: The geometry factor $I$ depends on the pressure angle and the curvature of the teeth in the normal plane.
*   **Load Calculation**:
    *   **Tangential Load ($W_t$)**: $W_t = \frac{2 T}{d_t}$, where $T$ is the torque transmitted.
    *   **Radial Load ($W_r$)**: $W_r = W_t \tan(\phi_t)$, where $\phi_t$ is the transverse pressure angle.
    *   **Axial Thrust Load ($W_a$)**: $W_a = W_t \frac{\tan(\psi)}{\cos(\phi_t)}$.
*   **Face Width Selection**: The face width is typically chosen to be between 8 to 15 times the transverse module ($m_t$). A larger face width generally increases the load-carrying capacity but also increases the axial thrust.
*   **Helix Angle Selection**: Common helix angles range from 15 to 30 degrees.
    *   **Smaller helix angles** (closer to spur gears) result in less axial thrust but also less of the benefits of helical action (smoother operation, higher strength).
    *   **Larger helix angles** provide smoother operation and higher strength but generate more axial thrust.
*   **Bearing Design**: The axial thrust component ($W_a$) must be considered when designing the bearings to prevent premature failure. Thrust bearings or double-acting thrust bearings might be required.
*   **Double Helical (Herringbone) Gears**: To eliminate axial thrust, gears with two sets of teeth inclined at equal angles but in opposite directions are used. This is known as a herringbone gear. The axial thrusts generated by the two sets of teeth cancel each other out.

---

## 6. Design Procedure Outline (Similar to Spur Gears with Modifications)

1.  **Gather Input Data**:
    *   Power to be transmitted (P)
    *   Speed of the driving and driven shafts (N1, N2)
    *   Shaft orientation (parallel or crossed)
    *   Desired life of the gear drive
    *   Material properties (allowable bending stress $\sigma_b$, surface endurance limit $\sigma_c$)
    *   Operating conditions (service factor, load factor)

2.  **Select Materials and Operating Conditions**: Choose appropriate gear materials and determine the service factor ($C_s$) and load factor ($C_L$).

3.  **Determine Torque and Tangential Load**:
    *   Calculate input torque: $T_1 = \frac{P \times 60}{2 \pi N_1}$
    *   Calculate tangential force: $W_t = C_s C_L \frac{2 T_1}{d_{p1}}$, where $d_{p1}$ is the pitch diameter of the pinion.

4.  **Preliminary Selection of Gear Parameters**:
    *   **Gear Ratio ($i$)**: $i = N_1 / N_2 = d_{p2} / d_{p1} = Z_2 / Z_1$.
    *   **Number of Teeth**: Select a minimum number of teeth for the pinion to avoid undercutting (typically 17 for 20° pressure angle).
    *   **Helix Angle ($\psi$)**: Select a suitable helix angle (e.g., 15° to 30°).
    *   **Normal Module ($m_n$)**: This will be the primary parameter to determine.
    *   **Face Width ($F$)**: Tentatively choose $F = (10 \text{ to } 15) m_t$.

5.  **Calculate Transverse Module ($m_t$) and Pitch Diameter ($d_t$)**:
    *   $m_t = m_n / \cos(\psi)$
    *   $d_{p1} = Z_1 m_t$

6.  **Check for Bending Strength**:
    *   Use the Lewis formula, considering the effective number of teeth in the normal plane: $Z_{eff} = Z / \cos(\psi)$.
    *   Calculate the required $m_t$ based on the tangential load $W_t$ and allowable bending stress $\sigma_b$, and the form factor $Y$ (obtained from tables for the effective number of teeth and pressure angle).
    *   $W_t = \sigma_b b Y \frac{m_t}{d_t/Z}$, where $b = F \cos(\psi)$ is the effective tooth width in the normal plane.
    *   Rearrange to find $m_t$: $m_t \ge \frac{W_t \times d_t}{Z \times \sigma_b \times Y \times \cos(\psi)}$.

7.  **Check for Surface Endurance (Pitting)**:
    *   Calculate the tangential load $W_t$ based on surface stress.
    *   Use a formula like Schutz's or one provided in Bhandari/Norton.
    *   The formula typically involves the surface load-carrying capacity factor ($C_{pq}$), modulus of elasticity ($E$), Poisson's ratio ($v$), and a geometry factor ($I$).
    *   $W_t = d_{p1} F \frac{I}{C_{pq}}$ (simplified representation)
    *   The calculation determines the required $m_t$ for surface endurance.

8.  **Select the Larger Module**: Choose the larger value of $m_t$ obtained from bending and surface endurance checks.

9.  **Finalize Gear Dimensions**:
    *   Calculate the final transverse module ($m_t$) and normal module ($m_n$).
    *   Calculate pitch diameters ($d_{p1}$, $d_{p2}$) and outside diameters ($D_{o1}$, $D_{o2}$).
    *   Determine the face width ($F$).

10. **Calculate Axial Thrust**:
    *   $W_a = W_t \frac{\tan(\psi)}{\cos(\phi_t)}$.
    *   Ensure bearings can withstand this thrust.

11. **Check for other factors**: Interference, wear, etc., might need consideration depending on the application and depth of design.

---

## 7. Examples and Practice Questions

**Example 1: Calculating Axial Thrust**

A helical gear has a tangential load of 5000 N, a helix angle of 20°, and a transverse pressure angle of 20°. Calculate the axial thrust.

**Solution:**
$W_t = 5000 \text{ N}$
$\psi = 20^{\circ}$
$\phi_t = 20^{\circ}$

$W_a = W_t \frac{\tan(\psi)}{\cos(\phi_t)}$
$W_a = 5000 \times \frac{\tan(20^{\circ})}{\cos(20^{\circ})}$
$W_a = 5000 \times \frac{0.3640}{0.9397}$
$W_a \approx 5000 \times 0.3873$
$W_a \approx 1936.5 \text{ N}$

The axial thrust is approximately 1936.5 N.

**Example 2: Determining Normal Module (Simplified)**

A helical gear is to transmit 10 kW power at 1000 rpm. The gear has 30 teeth, helix angle 25°, and a transverse pressure angle of 20°. The allowable bending stress is 150 MPa. Assume a face width of 10 times the transverse module.

**Solution Steps (Conceptual):**

1.  **Calculate Torque and Tangential Load:**
    $T = \frac{10 \times 1000 \times 60}{2 \pi \times 1000} = 95.49 \text{ Nm}$
    $W_t = \frac{2 T}{d_{p1}}$ (Need to assume $d_{p1}$ or $m_t$ initially to proceed with $W_t$ calculation, or iterate.)

2.  **Relate Parameters:**
    $m_t = m_n / \cos(25^{\circ})$
    $d_{p1} = Z_1 m_t = 30 m_t$
    $W_t = \frac{2 \times 95.49 \times 10^3}{30 m_t} = \frac{6366}{m_t} \text{ N}$

3.  **Use Lewis Formula for Bending Strength:**
    We need the form factor $Y$ for $Z_{eff} = 30 / \cos(25^{\circ}) \approx 33.07$ and $\phi_t = 20^{\circ}$. From tables (e.g., Bhandari, Norton), $Y$ would be found. Let's assume $Y \approx 0.3$.
    $W_t = \sigma_b \times F \times Y \times \frac{m_t}{d_t/Z}$
    $W_t = 150 \times (10 m_t) \times 0.3 \times \frac{m_t}{(30 m_t)/30}$
    $W_t = 150 \times 10 m_t \times 0.3 \times m_t = 450 m_t^2$

4.  **Equate Tangential Loads and Solve for $m_t$:**
    $\frac{6366}{m_t} = 450 m_t^2$
    $m_t^3 = \frac{6366}{450} \approx 14.147$
    $m_t \approx 2.42$

5.  **Calculate Normal Module ($m_n$):**
    $m_n = m_t \cos(\psi) = 2.42 \times \cos(25^{\circ}) \approx 2.42 \times 0.9063 \approx 2.19$

**Standard Module Selection**: A standard module close to 2.19 would be selected (e.g., 2.25 or 2.5). The face width would then be calculated.

---

## 8. Important Points to Remember

*   **Helix Angle is Key**: The helix angle ($\psi$) is the defining parameter of helical gears.
*   **Normal vs. Transverse**: Always distinguish between parameters measured in the normal plane ($m_n, p_n, \phi_n$) and the transverse plane ($m_t, p_t, \phi_t$). Design calculations often rely on normal plane parameters.
*   **Axial Thrust**: This is a significant consequence of the helix angle and must be accounted for in bearing selection. Double helical gears eliminate this.
*   **Load Distribution**: The inclined teeth provide better load distribution and smoother engagement.
*   **Module Convention**: Standard modules are usually specified in the normal plane ($m_n$).
*   **Relationship between Modules**: $m_t = m_n / \cos(\psi)$.
*   **Gear Ratio**: For parallel shaft helical gears, the hands of the helix must be opposite. For crossed helical gears, the hands must be the same.

---

## 9. Alignment with Course Outcomes

*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements. (Knowledge Level: K3)**
    This module directly addresses CO5 by covering the nomenclature, advantages, disadvantages, and basic design considerations of helical gears. Understanding these aspects allows for the selection and preliminary modeling of a helical gear drive for specific industrial applications. The calculation of key dimensions, load capacities, and the understanding of axial thrust are all part of modeling a suitable helical gear drive.

---

## Practice Questions

1.  Define helix angle and axial pitch for a helical gear. How do they influence the design?
2.  What is the primary advantage of helical gears over spur gears? Explain why.
3.  What is the main disadvantage of helical gears? How can it be overcome?
4.  Explain the relationship between normal module ($m_n$), transverse module ($m_t$), and helix angle ($\psi$).
5.  A helical pinion meshes with a helical gear. What should be the hand of helix for both gears if they transmit power between two parallel shafts? What if the shafts are crossed?
6.  Calculate the axial thrust for a helical gear transmitting a tangential load of 8 kN with a helix angle of 30° and a transverse pressure angle of 20°.
7.  A helical gear drive is designed with a helix angle of 25°. If the tangential force on the teeth is 4000 N and the transverse pressure angle is 20°, calculate the radial force and the axial thrust.
8.  (Design-oriented) Outline the steps involved in designing a helical gear drive for a specific power and speed requirement, highlighting the key differences from spur gear design.

---

## Answers to Practice Questions

1.  **Helix Angle ($\psi$)**: The angle between any helix of the tooth and the axis of the gear. It affects load distribution, smoothness of operation, and axial thrust.
    **Axial Pitch ($p_a$)**: The distance along the axis of the gear from one tooth to the corresponding tooth on the next tooth. $p_a = p_n / \tan(\psi)$. It's relevant for understanding the spacing along the shaft.
2.  **Primary Advantage**: Smoother and quieter operation, higher load-carrying capacity. This is due to the gradual engagement and disengagement of the teeth along the helix, distributing the load over a larger area.
3.  **Main Disadvantage**: Generation of axial thrust. This can be overcome by using thrust bearings, or by employing double helical (herringbone) gears where the axial thrusts from opposing helices cancel out.
4.  The relationship is: $m_t = m_n / \cos(\psi)$. This means the transverse module (measured along the pitch circle) is larger than the normal module (measured perpendicular to the helix).
5.  *   **Parallel Shafts**: Opposite hands of helix (e.g., pinion is right-hand, gear is left-hand).
    *   **Crossed Shafts**: Same hand of helix (e.g., both are right-hand).
6.  $W_t = 8000 \text{ N}$, $\psi = 30^{\circ}$, $\phi_t = 20^{\circ}$.
    $W_a = W_t \frac{\tan(\psi)}{\cos(\phi_t)} = 8000 \times \frac{\tan(30^{\circ})}{\cos(20^{\circ})} = 8000 \times \frac{0.57735}{0.93969} \approx 8000 \times 0.6144 \approx 4915.2 \text{ N}$.
7.  $W_t = 4000 \text{ N}$, $\psi = 25^{\circ}$, $\phi_t = 20^{\circ}$.
    *   **Radial Force ($W_r$)**: $W_r = W_t \tan(\phi_t) = 4000 \times \tan(20^{\circ}) = 4000 \times 0.36397 \approx 1455.9 \text{ N}$.
    *   **Axial Thrust ($W_a$)**: $W_a = W_t \frac{\tan(\psi)}{\cos(\phi_t)} = 4000 \times \frac{\tan(25^{\circ})}{\cos(20^{\circ})} = 4000 \times \frac{0.4663}{0.9397} \approx 4000 \times 0.4962 \approx 1984.8 \text{ N}$.
8.  **Design Steps Outline**:
    *   **Data Collection**: Power, speed, materials, service conditions.
    *   **Preliminary Selection**: Gear ratio, number of teeth (pinion), helix angle, tentative face width.
    *   **Load Calculation**: Tangential load ($W_t$).
    *   **Bending Strength Check**: Calculate required transverse module ($m_t$) using Lewis formula modified for helix angle.
    *   **Surface Endurance Check**: Calculate required transverse module ($m_t$) based on pitting resistance.
    *   **Module Selection**: Choose the higher $m_t$ from bending and surface checks and determine the standard normal module ($m_n$).
    *   **Dimensioning**: Finalize pitch diameters, outside diameters, and face width.
    *   **Axial Thrust Calculation**: Calculate $W_a$ and ensure bearing capacity.
    *   **Bearing Selection**: Select suitable bearings to handle radial and axial loads.
    *   **Final Checks**: Interference, wear considerations.
    *   **Key Differences**: Use of normal module ($m_n$) as the primary parameter, inclusion of helix angle in load calculations and formula modifications, calculation and management of axial thrust.

---
This comprehensive set of study notes provides a solid foundation for understanding helical gears, their nomenclature, advantages, disadvantages, and basic design principles, directly contributing to the attainment of CO5.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
