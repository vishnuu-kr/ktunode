---
title: "band and block brake"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 2: Design of IC Engine parts: General design considerations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d6b"
status: "completed"
scrapedAt: "2026-05-20T18:10:57.529Z"
---
# DESIGN OF MACHINE ELEMENTS
## Module 2: Design of IC Engine Parts: General Design Considerations
### Topic: Band and Block Brake

---

### 1. Introduction to Braking Systems

Braking systems are crucial in IC engine applications for controlling vehicle speed, stopping the vehicle, and holding it stationary on gradients. They operate by converting the kinetic energy of the moving vehicle into heat energy through friction.

*   **Key Concept:** Friction is the fundamental principle behind the operation of all brakes.

**Learning Outcome Covered:**
*   General design considerations for IC engine parts. (Implicitly, as braking is a supporting system for vehicles powered by IC engines)

**Course Outcomes Alignment:**
*   **CO1:** While not a direct transmission system, brakes are integral to the overall vehicle control, which is influenced by the transmission. (K3)
*   **CO2:** Understanding brakes is part of understanding the operational aspects and support systems of IC engine powered vehicles. (K3)

---

### 2. Types of Brakes

Brakes can be broadly classified based on their operating mechanism and contact surface. Band and block brakes fall under the category of friction brakes.

*   **Friction Brakes:** Utilize friction between two surfaces to dissipate energy.
    *   Examples: Drum brakes, Disc brakes, Band brakes, Block brakes.
*   **Non-Friction Brakes:** Utilize other principles like regenerative braking (in electric vehicles) or magnetic braking.

---

### 3. Band Brake

A band brake consists of a flexible band wrapped around a rotating drum. When the band is tightened, friction is generated between the band and the drum, creating a braking torque.

#### 3.1. Construction and Operation

*   **Components:**
    *   **Braking Drum:** A rotating cylindrical component, typically attached to the wheel hub or shaft.
    *   **Braking Band:** A flexible metallic strap lined with friction material (brake lining).
    *   **Actuating Mechanism:** A lever or linkage system to tighten the band against the drum.
    *   **Friction Lining:** A material with high coefficient of friction and good wear resistance.

*   **Operation:**
    *   When the actuating lever is moved, it tightens the band around the drum.
    *   The friction between the band lining and the drum generates a tangential force that opposes the rotation of the drum.
    *   This tangential force produces a braking torque.

#### 3.2. Types of Band Brakes

*   **Simple Band Brake:** The band is anchored at one end and pulled at the other by an actuating lever.
*   **Differential Band Brake:** Two bands are used, one connected to a fixed pivot and the other to an actuating lever. This type provides a self-energizing effect, meaning the drum's rotation helps to tighten the band, increasing the braking force.

#### 3.3. Analysis of Simple Band Brake

Consider a simple band brake where the band subtends an angle $\theta$ at the center of the drum. Let:
*   $T_1$ = Tension in the tight side of the band
*   $T_2$ = Tension in the slack side of the band
*   $P$ = Perpendicular force applied by the band on the drum
*   $F_f$ = Frictional force acting along the band
*   $\mu$ = Coefficient of friction between the band lining and the drum
*   $r$ = Radius of the drum
*   $W$ = Braking force acting tangentially at the drum surface

The relationship between $T_1$ and $T_2$ is given by the **Capstan Formula**:

$T_1 / T_2 = e^{\mu \alpha}$

where $\alpha$ is the angle of contact in radians.

The braking torque ($T_b$) is given by:

$T_b = (T_1 - T_2) r$

The actuating force ($F$) required to apply the brake depends on the lever arm and the tensions.

#### 3.4. Design Considerations for Band Brakes

*   **Material Selection:**
    *   **Band:** Spring steel, mild steel, or stainless steel for flexibility and strength.
    *   **Lining:** Asbestos-based materials (though increasingly being replaced due to health concerns), organic compounds, sintered materials, ceramic composites for good friction and heat dissipation.
*   **Drum Material:** Cast iron or steel for strength and wear resistance.
*   **Band Width and Thickness:** Determined by the required braking torque and permissible stress in the band.
*   **Lever Design:** To provide sufficient mechanical advantage and apply the necessary force.
*   **Heat Dissipation:** Band brakes can generate significant heat, especially during heavy braking. The design should consider heat dissipation to prevent overheating and fading of the brake lining.
*   **Wear of Lining:** The lining will wear over time and needs to be replaceable. The design should accommodate this.

**Important Point to Remember:** The Capstan formula is fundamental to analyzing band brakes and highlights the significant increase in tension due to friction, which is crucial for braking effectiveness.

**Reference:**
*   **V. B. Bhandari, Design of Machine Elements:** Chapter on "Brakes" will provide detailed derivations and design procedures.
*   **R. L. Norton, Machine Design – An Integrated Approach:** May offer insights into practical design aspects and material considerations.

---

### 4. Block Brake

A block brake consists of a stationary block lined with friction material that is pressed against a rotating drum.

#### 4.1. Construction and Operation

*   **Components:**
    *   **Braking Drum:** Same as in band brakes.
    *   **Braking Block(s):** Rigid blocks made of cast iron or other suitable material, lined with friction material.
    *   **Actuating Mechanism:** A lever or linkage system to press the block(s) against the drum.

*   **Operation:**
    *   The actuating mechanism pushes the block against the rotating drum.
    *   Friction is generated between the block and the drum, opposing rotation.
    *   The braking torque is produced by the tangential force exerted by the block.

#### 4.2. Types of Block Brakes

*   **Single Block Brake (Reversible):** The block is positioned such that the friction force assists the actuating force, making it effective in both directions of rotation.
*   **Single Block Brake (Non-Reversible):** The block is positioned such that friction opposes the actuating force, leading to a self-locking effect, which can be advantageous but also requires more force to release.
*   **Double Block Brake:** Two blocks are used, one on each side of the drum, actuated simultaneously. This design provides a more balanced braking action and higher braking torque.

#### 4.3. Analysis of Single Block Brake

Consider a single block brake pressing against a drum of radius $r$. Let:
*   $P$ = Perpendicular force applied by the block on the drum
*   $F_f$ = Frictional force acting tangentially on the block
*   $\mu$ = Coefficient of friction between the block lining and the drum
*   $b$ = Width of the block
*   $w$ = Width of the contact surface of the block
*   $d$ = Depth of the contact surface of the block
*   $\theta$ = Half angle subtended by the contact surface of the block at the center of the drum

**Case 1: Reversible Block Brake**
The block is positioned such that the frictional force $F_f = \mu P$ acts in the direction of rotation.
The braking torque ($T_b$) is given by:
$T_b = F_f \times r = (\mu P) r$

The actuating force $F$ is applied at a distance $L$ from the pivot. The torque due to the applied force must overcome the torque due to the friction force.
Torque due to applied force = $F \times L$
Torque due to friction force = $(\mu P) \times r$
Therefore, $F \times L = (\mu P) \times r$.

**Case 2: Non-Reversible Block Brake**
The block is positioned such that the frictional force $F_f = \mu P$ acts against the direction of rotation.
The braking torque ($T_b$) is given by:
$T_b = F_f \times r = (\mu P) r$

The actuating force $F$ is applied at a distance $L$ from the pivot. The torque due to the applied force must overcome the torque due to the friction force and the torque due to the normal force.
Torque due to applied force = $F \times L$
Torque due to normal force = $P \times x$, where $x$ is the distance of the line of action of $P$ from the pivot.
Torque due to friction force = $(\mu P) \times r$

The condition for self-locking is when the frictional torque is greater than the torque due to the normal force that tends to release the brake. This typically happens when the line of action of the normal force passes behind the pivot.

**Important Note on Friction Distribution:** For long blocks, the pressure distribution is not uniform. It tends to be higher at the leading edge. However, for simpler analysis, uniform pressure distribution is often assumed, leading to the frictional force acting at the center of the contact area. For more accurate analysis, the effect of the center of pressure needs to be considered.

**Case 3: Double Block Brake**
With two blocks, the total braking torque is twice the torque produced by a single block. The design and analysis are similar to a single block brake, but the actuating force might be distributed.

#### 4.4. Design Considerations for Block Brakes

*   **Material Selection:**
    *   **Block:** Cast iron, steel, or bronze, lined with friction materials.
    *   **Lining:** Similar to band brakes (asbestos, organic, sintered, ceramic).
*   **Drum Material:** Cast iron or steel.
*   **Block Shape and Size:** Determined by the required braking force, pressure distribution, and heat dissipation. The block should be designed to avoid excessive localized pressure.
*   **Actuating Mechanism:** Should provide sufficient force and a good mechanical advantage.
*   **Heat Dissipation:** Similar to band brakes, heat management is crucial. Drum diameter, block contact area, and material properties influence heat dissipation.
*   **Wear of Lining:** Replaceable linings are essential.
*   **Self-Locking:** The design of non-reversible block brakes can incorporate self-locking to reduce the actuating force, but it also makes release more difficult.

**Important Point to Remember:** Block brakes, especially double block brakes, offer good braking torque and are relatively simple to design and manufacture. The placement of the block relative to the pivot determines whether the brake is reversible or non-reversible.

**Reference:**
*   **V. B. Bhandari, Design of Machine Elements:** Chapter on "Brakes" will detail the analysis of block brakes, including different configurations and pressure distribution considerations.
*   **PSG Design Data:** Can be used to find standard dimensions, properties of brake linings, and material properties.
*   **Machine Design Data Book by V. B. Bhandari:** Useful for obtaining design data related to friction coefficients, permissible pressures, and material properties.

---

### 5. Comparison of Band and Block Brakes

| Feature          | Band Brake                                        | Block Brake                                       |
| :--------------- | :------------------------------------------------ | :------------------------------------------------ |
| **Construction** | Flexible band wrapped around drum.                | Rigid block(s) pressed against drum.              |
| **Braking Torque**| Can be high, especially with self-energizing designs. | Generally good, can be very high with double block. |
| **Heat Dissipation**| Can be an issue due to limited surface contact area. | Generally better due to larger contact area.      |
| **Actuation**    | Can be simple or complex (e.g., differential). | Usually simple lever mechanism.                   |
| **Wear**         | Lining wears, needs replacement.                  | Lining wears, needs replacement.                  |
| **Self-Energizing**| Possible with differential band brakes.         | Possible with non-reversible single block brakes. |
| **Applications** | Less common in modern vehicles, used in some industrial machinery. | Common in vehicles (drum brakes) and industrial applications. |

---

### 6. Practice Questions and Answers

**Question 1:** A band brake is used to control the speed of a hoist. The drum diameter is 200 mm, and the angle of contact is 225°. The coefficient of friction is 0.3. If the tight side tension is 2000 N, determine the slack side tension and the braking torque.

**Answer 1:**
Given:
Drum Diameter, $D = 200$ mm $\implies$ Radius, $r = 100$ mm $= 0.1$ m
Angle of contact, $\alpha = 225^\circ = 225 \times \frac{\pi}{180} = \frac{5\pi}{4}$ radians
Coefficient of friction, $\mu = 0.3$
Tight side tension, $T_1 = 2000$ N

Using the Capstan Formula:
$T_1 / T_2 = e^{\mu \alpha}$
$2000 / T_2 = e^{(0.3 \times \frac{5\pi}{4})}$
$2000 / T_2 = e^{(0.3 \times 3.927)}$
$2000 / T_2 = e^{1.1781}$
$2000 / T_2 \approx 3.247$
$T_2 = 2000 / 3.247 \approx 615.95$ N

Braking Torque, $T_b = (T_1 - T_2) r$
$T_b = (2000 - 615.95) \times 0.1$
$T_b = 1384.05 \times 0.1$
$T_b = 138.405$ Nm

**Question 2:** A single block brake is required to develop a braking torque of 50 Nm. The drum diameter is 300 mm, and the coefficient of friction is 0.4. The block subtends an angle of 60° at the center. If the brake is reversible, determine the perpendicular force required on the block and the actuating force if the actuating lever is 150 mm from the pivot and the block is pivoted at a distance of 100 mm from the point of contact.

**Answer 2:**
Given:
Braking Torque, $T_b = 50$ Nm
Drum Diameter, $D = 300$ mm $\implies$ Radius, $r = 150$ mm $= 0.15$ m
Coefficient of friction, $\mu = 0.4$
Angle of contact, $2\theta = 60^\circ \implies \theta = 30^\circ$
Actuating lever length from pivot, $L = 150$ mm $= 0.15$ m
Block pivot distance from contact point, $x = 100$ mm $= 0.10$ m (This is the distance from the line of action of the normal force to the block pivot)

**Part 1: Perpendicular force (P)**
For a reversible block brake, the braking torque is given by:
$T_b = \mu P r$
$50 = 0.4 \times P \times 0.15$
$50 = 0.06 P$
$P = 50 / 0.06 = 833.33$ N

**Part 2: Actuating force (F)**
For a reversible block brake, the friction force ($F_f = \mu P$) acts in the direction of rotation. The actuating force $F$ is applied to overcome the torque due to this friction force. The line of action of the friction force is at the center of the contact area. Assuming uniform pressure, the frictional force acts at a radius $r$.

Torque due to applied force = $F \times L$
Torque due to friction force = $(\mu P) \times r$

Equating the torques:
$F \times L = (\mu P) \times r$
$F \times 0.15 = (0.4 \times 833.33) \times 0.15$
$F \times 0.15 = 333.33 \times 0.15$
$F \times 0.15 = 50$
$F = 50 / 0.15 = 333.33$ N

*(Note: The block pivot distance of 100 mm is relevant for non-reversible brakes or when analyzing the resultant forces acting on the pivot. For a simple reversible brake analysis, the primary torque balance is sufficient.)*

---

### 7. Important Points to Remember

*   **Capstan Formula:** Essential for analyzing band brakes ($T_1/T_2 = e^{\mu \alpha}$).
*   **Friction Force:** Acts tangentially to oppose motion. Its location of action is crucial for torque calculation.
*   **Braking Torque:** The product of the net tangential force and the drum radius.
*   **Reversible vs. Non-Reversible:** The orientation of the block in a block brake determines if it is reversible (friction aids actuation) or non-reversible (friction opposes actuation, potential for self-locking).
*   **Heat Dissipation:** A critical design consideration for both band and block brakes, as friction generates heat. Material selection and cooling are important.
*   **Wear:** Brake linings are wear components and must be designed for easy replacement.
*   **Pressure Distribution:** For long blocks, uniform pressure distribution is an approximation. The actual pressure distribution can be complex and affect the center of friction.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. Further Reading and Resources

*   **V. B. Bhandari, Design of Machine Elements:** The primary textbook for detailed derivations, formulas, and design examples.
*   **R. L. Norton, Machine Design – An Integrated Approach:** Provides a good balance of theory and practical design considerations.
*   **PSG Design Data / V. B. Bhandari Machine Design Data Book:** Essential for obtaining standard values for coefficients of friction, material properties, bearing capacities, etc.
*   **Shigley's Mechanical Engineering Design:** A comprehensive reference for fundamental mechanical design principles.

---

This concludes the study notes for Band and Block Brakes. Remember to refer to the specified textbooks for deeper understanding and detailed design procedures.