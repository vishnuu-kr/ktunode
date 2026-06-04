---
title: "bevel and worm gears"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d7f"
status: "completed"
scrapedAt: "2026-05-20T18:11:10.365Z"
---
# Design of Machine Elements - Module 4: Design of Gears

## Topic: Bevel and Worm Gears

This module extends our understanding of gear drives from spur gears to the more complex geometries of bevel and worm gears. We will explore their nomenclature, fundamental principles, advantages, disadvantages, and the basic design considerations for each type. This knowledge will enable us to select and design appropriate gear drives for various industrial applications.

---

### 1. Introduction to Bevel Gears

Bevel gears are used to transmit motion and power between **intersecting shafts**. The shafts are typically at an angle of 90 degrees, but other angles are also possible.

**Key Concepts:**

*   **Shaft Angle ($\Sigma$):** The angle between the axes of the shafts. Most commonly, $\Sigma = 90^\circ$.
*   **Pitch Angle ($\delta$):** The angle of the pitch cone apex from the shaft axis.
*   **Cone Distance (or Pitch Radius, $R$):** The radius of the pitch cone at the large end.
*   **Back Cone:** The cone perpendicular to the pitch cone at its apex.
*   **Face Angle:** The angle of the tooth flank at the large end of the pitch cone.
*   **Root Angle:** The angle of the tooth root at the large end of the pitch cone.
*   **Apex:** The point where the pitch cones of meshing bevel gears intersect.

**Types of Bevel Gears:**

*   **Straight Bevel Gears:** Teeth are straight and parallel to the axis of the cone. They are the simplest type but produce noise and impact loads.
*   **Spiral Bevel Gears:** Teeth are curved and oblique, providing smoother and quieter operation. They offer higher load-carrying capacity due to greater tooth contact.
*   **Hypoid Bevel Gears:** Similar to spiral bevel gears, but the shafts are non-intersecting. This allows for better drive shaft positioning and improved ground clearance in automotive applications. (While not the primary focus of this topic, it's good to be aware of.)
*   **Zerrol® Bevel Gears:** A patented type of spiral bevel gear with a specific tooth profile for reduced noise and vibration.

**Nomenclature of Straight Bevel Gears:**

*   **Pitch Cone:** The imaginary cone formed by the pitch surfaces of the bevel gear.
*   **Pitch Angle ($\delta$):** The angle between the shaft axis and the pitch cone element.
*   **Pitch Diameter ($D$):** Diameter of the pitch cone at the large end.
*   **Cone Distance ($C$):** The slant height of the pitch cone, measured from the apex to the pitch circle at the large end. $C = D / (2 \sin \delta)$.
*   **Addendum Angle:** The angle corresponding to the addendum outside the pitch cone.
*   **Dedendum Angle:** The angle corresponding to the dedendum inside the pitch cone.
*   **Face Width ($b$):** The width of the tooth along the cone distance.
*   **Tooth Angles:** Angles related to the tooth shape at the large end.

**Relationship between Meshing Bevel Gears:**

Let gear 1 be the pinion and gear 2 be the gear.
*   Shaft angle: $\Sigma = \delta_1 + \delta_2$
*   Gear ratio: $m_G = \frac{N_2}{N_1} = \frac{\sin \delta_2}{\sin \delta_1}$
*   Pitch diameters: $D_1 = 2R_1$, $D_2 = 2R_2$
*   Cone distances: $C_1 = R_1$, $C_2 = R_2$

**Design Considerations for Bevel Gears:**

*   **Load Carrying Capacity:** Similar to spur gears, but influenced by cone distance and tooth form.
*   **Tooth Stresses:** Bending stress and surface compressive stress are analyzed, considering the geometry of the conical teeth.
*   **Lubrication:** Proper lubrication is crucial to dissipate heat and reduce wear.
*   **Mounting and Alignment:** Accurate mounting is essential for smooth operation and to prevent premature wear.

**Learning Outcome Alignment:**

*   **CO6:** Apply the design procedure for bevel gear drives for specific application. (This section provides the foundational understanding for CO6).

**References:**

*   **Bhandari:** Chapter 16 (Bevel Gears)
*   **Norton:** Chapter 9 (Gears), provides general gear principles applicable to bevel gears.
*   **Sharma & Agarwal:** Chapter 11 (Bevel Gears)
*   **PSG Tech:** Section on Bevel Gears

---

### 2. Introduction to Worm Gears

Worm gear drives are used to transmit motion and power between **non-intersecting shafts**, typically at 90 degrees. They offer high speed reduction ratios in a compact space and are often used for applications requiring high torque.

**Key Concepts:**

*   **Worm:** The driving member, usually a screw-like cylinder.
*   **Worm Gear (Wheel):** The driven member, a disk with teeth that mesh with the worm.
*   **Lead Angle ($\lambda$):** The angle of the worm thread helix.
*   **Helix Angle:** Often used interchangeably with lead angle for cylindrical worms.
*   **Axial Pitch ($p_a$):** The distance along the axis of the worm between corresponding points on adjacent threads.
*   **Lead ($L$):** The axial distance advanced by the worm in one complete revolution. For a single-start worm, $L = p_a$. For multiple-start worms, $L = m \times p_a$, where $m$ is the number of starts.
*   **Pitch Diameter ($d$ for worm, $D$ for worm gear):** The diameter of the pitch cylinder.
*   **Module ($m$):** Same definition as for spur gears, usually defined based on the worm's axial pitch: $m = p_a / \pi$.
*   **Center Distance ($a$):** The distance between the axes of the worm and worm gear. $a = (d + D) / 2$.
*   **Velocity Ratio (Speed Ratio):** $i = \frac{N_{worm}}{N_{worm\_gear}} = \frac{Z_2}{Z_1}$, where $Z_1$ is the number of starts on the worm and $Z_2$ is the number of teeth on the worm gear. For a single-start worm ($Z_1=1$), the speed reduction is directly proportional to the number of teeth on the worm gear.

**Types of Worms:**

*   **Cylindrical Worms:**
    *   **Straight Worm:** Teeth are cut straight across the worm.
    *   **Concave Worm:** The thread has a concave profile to improve contact.
*   **Globoid Worms:** The thread profile is curved to envelop the worm gear, offering better contact and load capacity.

**Types of Worm Gears:**

*   **Concave-faced Worm Gear:** The face of the gear has a concave profile.
*   **Axis-enveloping Worm Gear:** The gear teeth are formed around the worm's pitch cylinder.

**Nomenclature of Worm and Worm Gear:**

*   **Worm:**
    *   **Core Diameter:** Diameter at the root of the thread.
    *   **Pitch Diameter ($d$):** Diameter of the pitch cylinder.
    *   **Outside Diameter ($D_o$):** Diameter at the outside of the thread.
    *   **Thread Angle ($\alpha$):** The angle between the tangent to the pitch helix and the plane perpendicular to the axis. For a cylindrical worm, it is often approximated by the angle of the cutting tool.
    *   **Pressure Angle ($\psi$):** The angle between the line of action and the common tangent to the pitch cylinders at the point of contact. For standard worms, this is usually 20 degrees.
*   **Worm Gear:**
    *   **Pitch Diameter ($D$):** Diameter of the pitch cylinder.
    *   **Throat Diameter ($D_t$):** The diameter of the worm gear at its widest point.
    *   **Outside Diameter ($D_o$):** The maximum diameter of the worm gear.
    *   **Face Width ($b$):** The width of the gear teeth.
    *   **Addendum:** Radial distance from the pitch circle to the top of the tooth.
    *   **Dedendum:** Radial distance from the pitch circle to the bottom of the tooth.

**Advantages of Worm Gear Drives:**

*   **High Speed Reduction:** Achievable in a single stage.
*   **High Torque Transmission:** Capable of transmitting significant torque.
*   **Quiet and Smooth Operation:** Due to the sliding nature of contact.
*   **Self-Locking Potential:** Under certain conditions, the worm gear can be prevented from driving the worm (important for hoist applications).
*   **Compact Design:** Can achieve high reduction ratios in a small space.

**Disadvantages of Worm Gear Drives:**

*   **Lower Efficiency:** Significant power loss due to sliding friction. Efficiency typically ranges from 50% to 90%, decreasing with higher speed ratios and poorer lubrication.
*   **Heat Generation:** High sliding friction leads to significant heat generation, requiring effective cooling.
*   **Wear:** High sliding velocity can cause rapid wear if lubrication is inadequate or the materials are not selected properly.
*   **Axial Thrust:** The worm experiences significant axial thrust, requiring robust bearing arrangements.
*   **Manufacturing Complexity:** More complex to manufacture than spur gears.

**Design Considerations for Worm Gears:**

*   **Material Selection:** Bronze for the worm gear and hardened steel for the worm is a common combination to minimize wear and ensure proper tribology.
*   **Load Capacity:** Based on bending strength and surface durability (Hertzian contact stress).
*   **Efficiency:** Crucial due to significant power losses. It depends on the lead angle, coefficient of friction, and pressure angle.
*   **Heat Dissipation:** Proper cooling mechanisms (fans, oil circulation) are essential.
*   **Lubrication:** Critical for both reducing friction and dissipating heat. Special worm gear oils are often used.
*   **Self-Locking:** Can be achieved by designing with a small lead angle (typically less than 7 degrees), where the friction force is greater than the tangential force component. This prevents back-driving.
*   **Axial Thrust Bearing:** The worm shaft needs to be supported by thrust bearings to handle the large axial loads.

**Efficiency Formula (Approximate):**

$\eta = \frac{\tan \lambda}{\tan \lambda + \mu \cot(\psi - \phi)}$ (for worm driving worm gear)

Where:
*   $\eta$ = efficiency
*   $\lambda$ = lead angle
*   $\mu$ = coefficient of friction
*   $\psi$ = pressure angle
*   $\phi$ = friction angle ($\tan \phi = \mu$)

**Learning Outcome Alignment:**

*   **CO6:** Apply the design procedure for worm gear drives for specific application. (This section provides the foundational understanding for CO6).

**References:**

*   **Bhandari:** Chapter 17 (Worm Gears)
*   **Norton:** Chapter 9 (Gears), provides general gear principles applicable to worm gears.
*   **Sharma & Agarwal:** Chapter 12 (Worm Gears)
*   **PSG Tech:** Section on Worm Gears

---

### 3. Design Procedure for Bevel Gears (Summary)

The design procedure for bevel gears generally follows these steps, similar to spur gears but with considerations for the conical geometry:

1.  **Determine Input Data:** Power to be transmitted, speed of the driving shaft, required speed of the driven shaft, shaft angle ($\Sigma$), service factor, and operating conditions.
2.  **Calculate Gear Ratio and Shaft Angles:**
    *   $i = N_2 / N_1$
    *   $\Sigma = \delta_1 + \delta_2$
    *   $N_2 / N_1 = \sin \delta_2 / \sin \delta_1$
    *   Solve these equations for $\delta_1$ and $\delta_2$.
3.  **Select Materials:** Choose appropriate materials for the pinion and gear based on load, speed, and wear requirements. Hardened steel for pinion and softer steel or bronze for gear are common.
4.  **Determine Module ($m$) and Cone Distance ($C$):**
    *   Initially assume a value for cone distance based on the desired gear ratio and power.
    *   Calculate the beam strength and wear strength based on the assumed module and face width.
    *   Iterate to find suitable values of $m$ and $C$ that satisfy the strength and durability requirements.
5.  **Calculate Tooth Forces:**
    *   Tangential force ($W_t$) at the pitch line.
    *   Radial force ($W_r$).
    *   Axial force ($W_a$).
    These forces are calculated considering the forces acting on the teeth and the geometry of the bevel gears.
6.  **Check for Bending Strength:** Calculate the bending stress using a suitable Lewis factor or Buckingham analysis and ensure it is within the allowable stress limits.
7.  **Check for Surface Durability (Wear Strength):** Calculate the contact stress (Hertzian stress) and ensure it is within the allowable contact stress limits.
8.  **Consider Dynamic Load:** Account for dynamic effects if the gear speed is high.
9.  **Lubrication and Mounting:** Specify appropriate lubrication and ensure proper mounting for optimal performance.

**Important Points to Remember:**

*   Bevel gears are for **intersecting shafts**.
*   Shaft angle ($\Sigma$) and pitch angles ($\delta_1, \delta_2$) are critical for geometry.
*   Cone distance ($C$) is analogous to the pitch radius for spur gears.
*   Tooth forces have tangential, radial, and axial components.

---

### 4. Design Procedure for Worm Gears (Summary)

The design of worm gear drives is more complex due to the sliding action and heat generation. The primary focus is often on efficiency and wear.

1.  **Determine Input Data:** Power to be transmitted, speed of the worm shaft, speed of the worm gear, shaft angle ($\Sigma = 90^\circ$ typically), service factor, operating conditions, and desired efficiency.
2.  **Select Materials:** Typically, a hardened steel worm and a bronze worm gear (e.g., phosphor bronze, aluminum bronze) are used.
3.  **Determine Worm Geometry:**
    *   **Number of Starts ($Z_1$):** Often 1, 2, or 4. Higher starts increase lead and reduce speed reduction but can reduce efficiency.
    *   **Number of Teeth on Worm Gear ($Z_2$):** This determines the speed reduction.
    *   **Module ($m$):** Standard module based on axial pitch ($p_a = m \times \pi$).
    *   **Worm Thread Form:** Standard ISO or AGMA standards. Pressure angle ($\psi$) is typically 20 degrees.
    *   **Lead Angle ($\lambda$):** Calculated from $L = Z_1 \times p_a$ and $d$. $\tan \lambda = L / (\pi d)$.
4.  **Determine Center Distance ($a$):** Usually chosen to provide a suitable worm gear face width and pitch diameter.
5.  **Calculate Efficiency ($\eta$):** This is a crucial step. It depends on the lead angle, coefficient of friction, and pressure angle. An iterative process may be needed if materials and lubrication conditions are not fixed.
6.  **Calculate Load Capacity:**
    *   **Bending Strength:** Similar to spur gears, but using the worm gear tooth geometry.
    *   **Surface Durability (Contact Stress):** Critical due to high sliding. Hertzian contact stress is calculated.
7.  **Calculate Tooth Forces:**
    *   Tangential force ($W_t$) on the worm gear.
    *   Axial force on the worm ($W_{ax}$).
    *   Radial force on the worm ($W_r$).
    These forces depend on the transmitted torque, pitch diameters, and lead angle.
8.  **Check for Strength and Durability:** Ensure the worm gear teeth can withstand the bending stress and the contact stress.
9.  **Check for Temperature Rise:** Estimate the heat generated and ensure it can be dissipated by the cooling mechanism. The power loss is approximately $P_{loss} = P_{transmitted} (1 - \eta)$.
10. **Check for Self-Locking:** If required, verify that the lead angle is small enough for self-locking.
11. **Select Bearings:** Choose appropriate bearings for the worm shaft, considering the axial thrust and radial loads.
12. **Lubrication:** Specify the type of lubricant and lubrication system.

**Important Points to Remember:**

*   Worm gears transmit power between **non-intersecting shafts**, usually at 90 degrees.
*   High speed reduction and torque transmission are key advantages.
*   Efficiency is a major design consideration due to **sliding friction**.
*   **Heat generation** and **wear** are significant issues.
*   **Material selection** (hardened steel worm, bronze gear) is critical.
*   The worm shaft experiences significant **axial thrust**.
*   **Self-locking** is a unique characteristic that can be designed for.

---

### 5. Practice Questions and Answers

**Question 1 (Bevel Gear):**
A pair of straight bevel gears transmit 10 kW power at 1200 rpm of the pinion. The speed of the gear is 600 rpm. The shaft angle is 90 degrees. Determine the pitch angles of the pinion and the gear.

**Answer 1:**
Given:
Power ($P$) = 10 kW
Speed of pinion ($N_1$) = 1200 rpm
Speed of gear ($N_2$) = 600 rpm
Shaft angle ($\Sigma$) = 90 degrees

Gear ratio ($i$) = $N_1 / N_2 = 1200 / 600 = 2$.
Alternatively, the velocity ratio can be defined as $N_2/N_1$ which is $1/2$. Let's stick to the common convention where gear ratio is driven/driver speed, so $i = N_1/N_2 = 2$.

We know that for bevel gears:
$\Sigma = \delta_1 + \delta_2$
$i = N_1 / N_2 = \sin \delta_2 / \sin \delta_1$

So, $2 = \sin \delta_2 / \sin \delta_1 \implies \sin \delta_2 = 2 \sin \delta_1$.
And $90^\circ = \delta_1 + \delta_2 \implies \delta_2 = 90^\circ - \delta_1$.

Substitute $\delta_2$ in the first equation:
$\sin (90^\circ - \delta_1) = 2 \sin \delta_1$
$\cos \delta_1 = 2 \sin \delta_1$
$\frac{\cos \delta_1}{\sin \delta_1} = 2$
$\cot \delta_1 = 2$
$\tan \delta_1 = 1/2 = 0.5$

Using a calculator:
$\delta_1 = \arctan(0.5) \approx 26.565^\circ$

Now, calculate $\delta_2$:
$\delta_2 = 90^\circ - \delta_1 = 90^\circ - 26.565^\circ \approx 63.435^\circ$

**Therefore, the pitch angle of the pinion is approximately 26.565 degrees, and the pitch angle of the gear is approximately 63.435 degrees.**

---

**Question 2 (Worm Gear):**
A single-start worm meshes with a worm gear having 40 teeth. The module is 10 mm. The worm rotates at 1500 rpm. The lead angle is 15 degrees. The coefficient of friction is 0.05. The pressure angle is 20 degrees. Calculate the efficiency of the worm gear drive and the axial thrust on the worm.

**Answer 2:**

Given:
Number of starts ($Z_1$) = 1
Number of teeth on worm gear ($Z_2$) = 40
Module ($m$) = 10 mm
Worm speed ($N_1$) = 1500 rpm
Lead angle ($\lambda$) = 15 degrees
Coefficient of friction ($\mu$) = 0.05
Pressure angle ($\psi$) = 20 degrees

**Calculations:**

1.  **Axial Pitch ($p_a$):**
    $p_a = m \times \pi = 10 \times \pi = 31.416$ mm

2.  **Lead ($L$):**
    $L = Z_1 \times p_a = 1 \times 31.416 = 31.416$ mm

3.  **Pitch Diameter of Worm ($d$):**
    From the lead angle formula: $\tan \lambda = L / (\pi d)$
    $\pi d = L / \tan \lambda = 31.416 / \tan(15^\circ)$
    $\pi d = 31.416 / 0.2679 = 117.267$ mm
    $d = 117.267 / \pi = 37.33$ mm

4.  **Pitch Diameter of Worm Gear ($D$):**
    $D = m \times Z_2 = 10 \times 40 = 400$ mm

5.  **Efficiency ($\eta$):**
    First, calculate the friction angle ($\phi$): $\tan \phi = \mu = 0.05 \implies \phi = \arctan(0.05) \approx 2.862^\circ$.

    Now, use the efficiency formula:
    $\eta = \frac{\tan \lambda}{\tan \lambda + \mu \cot(\psi - \phi)}$
    $\eta = \frac{\tan(15^\circ)}{\tan(15^\circ) + 0.05 \cot(20^\circ - 2.862^\circ)}$
    $\eta = \frac{0.2679}{0.2679 + 0.05 \cot(17.138^\circ)}$
    $\eta = \frac{0.2679}{0.2679 + 0.05 \times 3.267}$
    $\eta = \frac{0.2679}{0.2679 + 0.16335}$
    $\eta = \frac{0.2679}{0.43125} \approx 0.6212$

    **Efficiency $\eta \approx 62.12\%$**

6.  **Axial Thrust on Worm ($W_{ax}$):**
    To calculate axial thrust, we need the tangential force on the worm. Assume some power and calculate torque. Let's assume the input power to the worm is $P_w = 5$ kW (this is just for demonstration, actual power needs to be given or calculated from torque).
    Torque on worm ($T_w$) = $P_w \times 1000 / (2 \pi N_1 / 60)$
    $T_w = 5000 \times 60 / (2 \pi \times 1500) = 31.83$ Nm

    Tangential force at the pitch line of the worm ($W_t$) = $T_w / (d/2) = 31.83 / (0.03733 / 2) = 31.83 / 0.018665 = 1705.35$ N.

    The axial thrust on the worm ($W_{ax}$) is given by:
    $W_{ax} = W_t \tan(\lambda + \phi)$ (for worm driving worm gear, where $\phi$ is friction angle)
    $W_{ax} = 1705.35 \times \tan(15^\circ + 2.862^\circ)$
    $W_{ax} = 1705.35 \times \tan(17.862^\circ)$
    $W_{ax} = 1705.35 \times 0.3229 = 550.8$ N.

    **Axial Thrust on the worm $\approx 550.8$ N.**

    **Note:** The calculation of axial thrust requires knowing the tangential force, which is derived from the transmitted torque/power. If power or torque is not given, this part cannot be fully calculated. The example above assumes a power value for illustration.

---

### 6. Important Points to Remember

*   **Bevel Gears:** For **intersecting shafts**, especially at 90 degrees. Tooth forces have three components. Cone distance is a key parameter.
*   **Worm Gears:** For **non-intersecting shafts**, typically at 90 degrees. High speed reduction. Significant **sliding friction**, leading to lower efficiency and heat generation. **Bronze gears** with **hardened steel worms** are common. The worm shaft experiences large **axial thrust**. **Self-locking** is a possible feature.
*   **Material Selection:** Crucial for both types to manage wear and stresses.
*   **Lubrication:** Essential for all gears, but particularly vital for worm gears to manage friction and heat.
*   **Efficiency:** Always a critical parameter for worm gears.
*   **Tooth Forces:** Must be analyzed carefully, considering all components, for accurate strength and durability calculations.

---

### 7. Further Learning and Practice

*   **Refer to the specified textbooks (Bhandari, Norton, Sharma & Agarwal, etc.) for detailed design formulas, examples, and material property data.**
*   **Consult design data handbooks (Bhandari Data Book, Mahadevan & Reddy, PSG Tech) for standard parameters, material properties, and design charts.**
*   **Practice solving numerical problems involving the calculation of tooth forces, stresses, and efficiency for both bevel and worm gears.**
*   **Study the geometric relationships and tooth profiles in detail as presented in the textbooks.**
*   **Research specific applications where bevel and worm gears are commonly used (e.g., automotive differentials, hoists, conveyor systems).**

This comprehensive overview provides a strong foundation for understanding bevel and worm gears within the context of designing machine elements. Remember to apply the learned principles to solve practical design problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
