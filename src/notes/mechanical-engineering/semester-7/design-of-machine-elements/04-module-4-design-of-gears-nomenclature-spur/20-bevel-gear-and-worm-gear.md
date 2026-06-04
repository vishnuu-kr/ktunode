---
title: "bevel gear and worm gear"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d90"
status: "completed"
scrapedAt: "2026-05-20T18:11:22.292Z"
---
# DESIGN OF MACHINE ELEMENTS - MODULE 4: DESIGN OF GEARS
## Topic: Bevel Gear and Worm Gear

---

### 1. Introduction to Gears

Gears are toothed wheels that mesh with other toothed wheels to transmit power and motion. They are fundamental components in mechanical power transmission systems due to their efficiency, reliability, and ability to achieve significant speed reductions or increases.

**Key Concepts:**
*   **Gear Drive:** A mechanical system where gears transmit power between shafts.
*   **Gear Ratio:** The ratio of the number of teeth on the driven gear to the number of teeth on the driving gear, which determines the speed and torque transmission.
*   **Mesh:** The point where two gears engage and teeth interlock.

---

### 2. Bevel Gears

Bevel gears are used to transmit power between shafts that are **intersecting**. The shafts are typically at a 90-degree angle, but other intersecting angles are also possible.

**2.1. Nomenclature and Geometry of Bevel Gears**

Unlike spur gears, the teeth of bevel gears are tapered. This means their dimensions change from the heel (outer end) to the toe (inner end).

**Key Terms (Refer to Bhandari - Chapter 22, Norton - Chapter 13):**

*   **Pitch Cone:** An imaginary cone formed by the pitch surfaces of a pair of bevel gears. The apexes of the pitch cones of mating bevel gears coincide.
*   **Pitch Angle ($\gamma$):** The angle between the pitch cone element and the axis of rotation.
    *   For the pinion (driver): $\gamma_p$
    *   For the gear (driven): $\gamma_g$
    *   $\gamma_p + \gamma_g = 90^\circ$ (for 90-degree shaft angle)
*   **Apex:** The point where the pitch cone elements of mating gears intersect.
*   **Face Angle:** The angle of the tooth surface at the outer end (heel).
*   **Root Angle:** The angle of the tooth surface at the inner end (toe).
*   **Cone Distance (L):** The slant length of the pitch cone from the apex to the pitch circle.
*   **Back Cone:** An imaginary cone perpendicular to the pitch cone element at the pitch circle.
*   **Tooth Angles:**
    *   **Pitch Angle ($\gamma$):** Angle of the pitch cone element with the shaft axis.
    *   **Face Angle:** Angle of the root tangent to the cone element.
    *   **Root Angle:** Angle of the tooth tip tangent to the cone element.
*   **Addendum Angle and Dedendum Angle:** Similar to spur gears, but defined on the cone.
*   **Outside Diameter ($D_o$) and Root Diameter ($D_r$):** Varies along the face width. The pitch diameter ($D$) is usually taken at the large end or mean section.

**2.2. Types of Bevel Gears:**

*   **Straight Bevel Gears:** Have straight teeth that taper in length and thickness. They are the simplest type but are noisy and have limited load-carrying capacity.
*   **Spiral Bevel Gears:** Have teeth that are curved and oblique to the axis of rotation. This allows for gradual engagement, resulting in smoother and quieter operation, and higher load-carrying capacity. However, they are more complex to manufacture and more expensive.
*   **Zerol® Bevel Gears:** A type of spiral bevel gear with zero spiral angle. They are a compromise between straight and spiral bevel gears, offering better load capacity than straight bevels but are easier to manufacture than spiral bevels.
*   **Mitre Gears:** A pair of identical bevel gears mounted on shafts at a 90-degree angle. They have equal pitch angles ($45^\circ$).

**2.3. Design Considerations for Bevel Gears:**

**Key Concepts (Refer to Bhandari - Chapter 22, Sharma & Agarwal - Chapter 15):**

*   **Gear Ratio:** Crucial for determining speed and torque.
*   **Shaft Angle:** Typically 90 degrees, but can be other intersecting angles.
*   **Pitch Angle:** Determined by the gear ratio and shaft angle.
*   **Cone Distance (L):** Affects the strength and stiffness of the teeth. A longer cone distance generally leads to a stronger gear.
*   **Face Width (b):** The width of the teeth. A wider face width increases load-carrying capacity.
*   **Material:** Similar to spur gears (steel alloys, cast iron). Heat treatment is important for wear resistance and strength.
*   **Lubrication:** Essential for reducing friction and heat, and preventing wear.

**2.4. Design Procedure (Simplified, based on Lewis Equation for Bevel Gears):**

The design of bevel gears often involves ensuring that the bending stress and wear stress in the teeth are within acceptable limits. The Lewis equation, adapted for bevel gears, is a common approach.

**Bending Strength:**

*   **Effective Module (m_e):** A module that accounts for the varying tooth dimensions along the face width. Often approximated by the mean module.
*   **Lewis Form Factor ($Y$):** Similar to spur gears, depends on tooth form and number of teeth.
*   **Face Width (b):**
*   **Tangential Force ($W_t$):** The force acting tangentially at the pitch circle.
    *   $W_t = \frac{2T}{D}$ (where T is torque, D is pitch diameter)
*   **Bending Stress ($\sigma_b$):**
    *   $\sigma_b = \frac{W_t \times K \times SF}{m_e \times b \times Y \times J_{cone}}$ (approximate form)
    *   Where $K$ is the dynamic factor, $SF$ is the service factor, and $J_{cone}$ is a geometric factor accounting for the taper.

**Wear Strength:**

*   **Surface Hardness:** Important for wear resistance.
*   **Surface Stress ($\sigma_c$):** Often estimated using Hertzian contact stress principles.
    *   $\sigma_c \propto \sqrt{\frac{W_t}{b \times D \times \rho}}$ (where $\rho$ is the radius of curvature of the teeth)

**Important Points to Remember for Bevel Gears:**

*   **Shaft Orientation:** Intersecting shafts.
*   **Tooth Taper:** Teeth get smaller from heel to toe.
*   **Cone Distance (L):** A critical geometric parameter.
*   **Spiral Bevels:** Offer smoother operation and higher capacity.
*   **Miter Gears:** For 90-degree shafts with equal speeds.
*   **Refer to Data Books:** Use PSG Tech or Mahadevan & Reddy for form factors, materials, and load-carrying capacities.

---

### 3. Worm Gears

Worm gear drives are used to transmit power between **non-parallel and non-intersecting shafts**, most commonly at a 90-degree angle. They are known for their ability to provide very high speed reduction ratios in a single stage.

**3.1. Nomenclature and Geometry of Worm Gear Drives:**

**Key Terms (Refer to Bhandari - Chapter 23, Norton - Chapter 13, Raghavendra K - Chapter 16):**

*   **Worm:** The driving member, usually a screw-like component.
    *   **Thread:** The helical ridge of the worm.
    *   **Lead (l):** The axial distance advanced by the worm in one complete revolution. For a single-start worm, lead = pitch. For multi-start worms, lead = n x pitch, where n is the number of starts.
    *   **Pitch (p):** The axial distance between corresponding points on adjacent threads.
    *   **Lead Angle ($\psi$):** The angle between the lead and a plane perpendicular to the axis of the worm. $\tan \psi = \frac{l}{\pi D_w}$, where $D_w$ is the pitch diameter of the worm.
    *   **Axial Pitch:** The pitch measured along the axis of the worm.
    *   **Normal Pitch:** The pitch measured on a plane perpendicular to the worm thread.
    *   **Thread Form:** Often based on an ACME thread form or a stub ACME thread.
*   **Worm Wheel (Gear):** The driven member, a wheel with teeth that mesh with the worm threads.
    *   **Throat Diameter ($D_g$):** The outer diameter of the worm wheel.
    *   **Root Diameter ($D_{gr}$):** The diameter at the root of the worm wheel teeth.
    *   **Addendum ($a_g$):** The radial distance from the pitch circle to the top of the tooth.
    *   **Dedendum ($d_g$):** The radial distance from the pitch circle to the bottom of the tooth space.
*   **Gear Ratio (i):** The ratio of the number of teeth on the worm wheel ($Z_g$) to the number of starts on the worm ($n$).
    *   $i = \frac{Z_g}{n}$
*   **Center Distance (a):** The distance between the axes of the worm and the worm wheel.
    *   $a = \frac{D_w + D_g}{2}$
*   **Helix Angle of Worm Wheel:** Equal to the lead angle of the worm.

**3.2. Types of Worm Gears:**

*   **Straight Worm Gear:** The worm threads are straight and parallel to the worm axis. The worm wheel teeth are generally straight but may have some curvature.
*   **Hindley Worm Gear (Globoidal Worm Gear):** The worm has a hollowed-out profile that closely matches the curvature of the worm wheel. This provides better contact and higher load-carrying capacity but is more complex to manufacture.

**3.3. Design Considerations for Worm Gear Drives:**

**Key Concepts (Refer to Bhandari - Chapter 23, Sharma & Agarwal - Chapter 17):**

*   **High Speed Reduction:** Achieved with a single stage (e.g., 10:1 to 100:1 or more).
*   **Self-Locking:** Under certain conditions, the worm wheel cannot drive the worm. This occurs when the lead angle ($\psi$) is less than the friction angle ($\lambda$), where $\lambda = \tan^{-1}(\mu)$, and $\mu$ is the coefficient of friction.
    *   Self-locking condition: $\psi < \lambda$ or $\psi + \lambda < 90^\circ$.
*   **Efficiency:** Generally lower than spur or helical gears due to sliding friction. Efficiency depends on the lead angle, coefficient of friction, and pressure angle.
    *   Efficiency ($\eta$) $\approx \frac{\tan \psi}{\tan \psi + \mu}$ (for a single-start worm, neglecting axial thrust and other losses)
    *   Efficiency is highest for larger lead angles and lower coefficients of friction.
*   **Heat Dissipation:** Due to high sliding speeds and friction, heat generation can be significant. Effective cooling and lubrication are crucial.
*   **Wear:** Subject to significant sliding wear. Material selection and surface hardness are important.
*   **Axial Thrust:** The worm experiences a significant axial thrust force due to the helix angle.
*   **Noise and Vibration:** Can be an issue, especially with straight worm gears.

**3.4. Design Procedure:**

The design of worm gear drives primarily focuses on ensuring sufficient strength for the worm wheel teeth and preventing excessive wear and overheating.

**3.4.1. Determination of Worm Wheel Teeth ($Z_g$) and Worm Starts ($n$):**

*   **Gear Ratio (i):** Based on the application requirement.
*   **Number of Starts ($n$):** Usually 1, 2, or 4. Higher starts increase efficiency but reduce the gear ratio per tooth count and can increase axial thrust.
*   **Number of Teeth on Worm Wheel ($Z_g$):** $Z_g = i \times n$. A minimum number of teeth (e.g., $Z_g \ge 25$ to 40) is often recommended to avoid undercutting and ensure smooth engagement.

**3.4.2. Determination of Worm and Worm Wheel Diameters and Module:**

*   **Center Distance (a):** Often specified or chosen based on space constraints.
*   **Diameters:**
    *   $D_w + D_g = 2a$
    *   $D_g \approx D_w \times (\text{gear ratio})$ (approximately, for a first estimate, assuming $Z_w \approx 1$ or 2)
    *   A common rule is to choose $D_w$ based on the worm speed and power, or use empirical relations related to center distance. For example, $D_w = 35.5 \sqrt[3]{a}$ or $D_w = 38 \sqrt[3]{a}$ (refer to Bhandari).
*   **Module (m):** Calculated using the worm wheel diameter and number of teeth.
    *   $D_g = m \times Z_g$
*   **Lead (l):** $l = m \times Z_w$, where $Z_w$ is the axial pitch of the worm.
*   **Lead Angle ($\psi$):** $\tan \psi = \frac{l}{\pi D_w}$
*   **Axial Pitch of Worm:** Related to the module and number of teeth on the worm wheel. Often $Z_w$ is chosen such that the worm pitch is close to the worm wheel module for a good thread form.

**3.4.3. Checking for Self-Locking:**

*   Calculate the friction angle $\lambda = \tan^{-1}(\mu)$. Common $\mu$ values range from 0.05 to 0.2.
*   Check if $\psi < \lambda$. If not, the drive might not be self-locking.

**3.4.4. Calculating Efficiency:**

*   Use the formula for efficiency, considering sliding velocity and friction. Bhandari provides detailed formulas.
*   $\eta = \frac{\tan \psi}{\tan \psi + \mu \frac{\sin \phi_a}{\sin \phi_n}}$ (more refined, where $\phi_a$ is the axial pressure angle and $\phi_n$ is the normal pressure angle)

**3.4.5. Bending Strength of Worm Wheel Teeth:**

*   Similar to spur gears, using the Lewis equation, but with factors adapted for worm gears.
*   $\sigma_b = \frac{W_t \times K \times SF}{m \times b \times Y}$
*   $W_t$ is the tangential force acting on the worm wheel at its pitch diameter.
*   $W_t = \frac{2T_w}{D_w}$ (where $T_w$ is the torque on the worm)
*   Factors for worm gears are available in data books.

**3.4.6. Wear Strength of Worm Wheel Teeth:**

*   This is often the critical design factor due to high sliding velocities.
*   The permissible tangential force based on wear is proportional to the product of the pitch diameter of the worm wheel and its face width.
*   $W_{tw} = C \times D_g \times b$
*   The factor $C$ depends on the material properties, lubrication, and module. This is a key parameter found in design data books.

**3.4.7. Thermal Rating:**

*   Ensure the drive can dissipate the heat generated by friction. This often involves calculating the power lost due to friction and comparing it to the cooling capacity of the drive housing.

**Important Points to Remember for Worm Gears:**

*   **Shaft Orientation:** Non-parallel, non-intersecting shafts (typically 90 degrees).
*   **High Speed Reduction:** Single-stage capability.
*   **Self-Locking:** A key feature when required ($\psi < \lambda$).
*   **Efficiency:** Lower than spur/helical, depends on lead angle and friction.
*   **Heat Dissipation:** Critical due to high sliding.
*   **Wear:** Significant factor, often governs design.
*   **Materials:** Bronze for worm wheel (good anti-friction properties), hardened steel for worm.

---

### 4. Practice Questions and Exercises

**Question 1 (Bevel Gear):**
A pair of straight bevel gears transmits 5 kW of power at a speed of 1200 rpm for the pinion. The gear ratio is 3:1. The shafts are at 90 degrees. The pinion has 30 teeth. If the cone distance is 150 mm and the face width is 25 mm, calculate the tangential force and bending stress, assuming appropriate Lewis form factor and dynamic factor from a data book.

**Solution Approach:**
1.  Calculate pinion speed and torque.
2.  Calculate pitch angles ($\gamma_p$, $\gamma_g$).
3.  Calculate the pitch diameter of the pinion ($D_p$).
4.  Calculate the tangential force ($W_t$) at the pinion's pitch circle.
5.  Select appropriate material and stress values.
6.  Look up the Lewis form factor ($Y$) for the pinion and the dynamic factor ($K$) from a data book (e.g., PSG Tech).
7.  Calculate bending stress using an appropriate formula for bevel gears, considering the module at the large end or mean section.

**Question 2 (Worm Gear):**
A worm gear drive is required to transmit 2 kW of power at a worm speed of 1500 rpm. The gear ratio is 20:1. The worm has a single start and a module of 6 mm. The normal pressure angle is $20^\circ$. The coefficient of friction is 0.08.
(a) Determine the number of teeth on the worm wheel.
(b) Calculate the lead, lead angle, and axial pitch of the worm.
(c) Estimate the efficiency of the drive.
(d) Check if the drive is self-locking.

**Solution Approach:**
1.  **Part (a):** Number of teeth on worm wheel ($Z_g$) = Gear Ratio $\times$ Number of starts = 20 $\times$ 1 = 20.
2.  **Part (b):**
    *   Axial pitch of worm ($p$) = Module ($m$) $\times$ $Z_w$ (assuming $Z_w$ such that axial pitch matches module for good meshing). Let's assume $p = m = 6$ mm (common practice for standard thread forms).
    *   Lead ($l$) = Number of starts $\times$ Axial pitch = 1 $\times$ 6 mm = 6 mm.
    *   To calculate the lead angle, we need the worm's pitch diameter ($D_w$). Refer to Bhandari's empirical relations for $D_w$ based on the center distance or power. Let's assume a center distance of 100 mm. Bhandari suggests $D_w = 38 \sqrt[3]{a} = 38 \sqrt[3]{100} \approx 175$ mm.
    *   Lead Angle ($\psi$): $\tan \psi = \frac{l}{\pi D_w} = \frac{6}{\pi \times 175} \approx 0.0109$. $\psi \approx 0.62^\circ$.
3.  **Part (c):** Friction Angle ($\lambda = \tan^{-1}(\mu) = \tan^{-1}(0.08) \approx 4.57^\circ$).
    *   Efficiency ($\eta$) $\approx \frac{\tan \psi}{\tan \psi + \mu} = \frac{0.0109}{0.0109 + 0.08} \approx 0.12$ or 12%. (This is a very rough estimate, actual efficiency is much higher for good lead angles).
    *   *Correction:* Let's re-evaluate the lead angle for better efficiency. For a 20:1 ratio and $Z_g=20$, if we use $n=1$, $Z_w$ is typically small (e.g., 2 to 4). Let's assume a worm with $Z_w=2$ starts and a module of 6mm. Axial pitch = 2 x 6 = 12mm. If $D_w$ is around 100mm, $\tan \psi = 12 / (\pi \times 100) \approx 0.038$. $\psi \approx 2.18^\circ$. This still yields low efficiency.
    *   *Better approach for worm diameter:* Often $D_w$ is chosen to give a reasonable lead angle for efficiency. If we aim for $\psi \approx 20-30^\circ$, $D_w$ would be smaller. Let's assume a common pressure angle of $20^\circ$ normal and axial.
    *   Let's take the Bhandari example for worm diameter selection: For a center distance 'a', $D_w = 35.5 \sqrt[3]{a}$. If $a=150$ mm, $D_w = 35.5 \sqrt[3]{150} \approx 191.5$ mm. With $n=1$ and $m=6$, $l = 6$ mm. $\tan \psi = 6 / (\pi \times 191.5) \approx 0.00997$. $\psi \approx 0.57^\circ$. This will lead to very low efficiency.
    *   **Let's assume a standard setup where the worm axial pitch is designed to provide a good lead angle.** If we assume $Z_w=2$ and $m=6$, axial pitch = 12 mm. If we choose $D_w = 40$ mm, $\tan \psi = 12 / (\pi \times 40) \approx 0.0955$. $\psi \approx 5.46^\circ$. $\lambda = \tan^{-1}(0.08) \approx 4.57^\circ$. So $\psi > \lambda$, not self-locking.
    *   Efficiency $\eta \approx \frac{\tan(5.46^\circ)}{\tan(5.46^\circ) + 0.08} = \frac{0.0955}{0.0955 + 0.08} \approx 0.544$ or 54.4%.
4.  **Part (d):** Since $\psi (5.46^\circ) > \lambda (4.57^\circ)$, the drive is **not self-locking**.

**Important Note:** The diameter of the worm ($D_w$) is often a crucial starting point, and its selection impacts the lead angle and efficiency. Data books provide guidelines for choosing $D_w$ or center distance 'a' for worm gears.

---

### 5. Important Points to Remember

*   **Bevel Gears:** For **intersecting shafts**. Tooth geometry changes along the face width. Spiral bevels offer better performance than straight bevels. Cone distance is a key parameter.
*   **Worm Gears:** For **non-parallel, non-intersecting shafts**. Capable of very **high speed reduction** in a single stage. **Efficiency** is typically lower due to high sliding friction. **Heat dissipation** and **wear** are critical design considerations. **Self-locking** is a unique property that can be achieved.

---

### 6. Alignment with Course Outcomes

*   **CO1: Model suitable transmission system for the stated conditions:** Understanding the applications of bevel and worm gears helps in choosing the right gear type for different shaft orientations and speed reduction requirements.
*   **CO2: Make use of the design procedure for I C engine components:** While not directly for IC engines, the principles of gear design (stress analysis, material selection) are transferable.
*   **CO3: Develop of Sliding contact bearing for industrial applications:** Worm gears involve significant sliding contact, making the study relevant to understanding the challenges of lubrication and wear in such systems.
*   **CO4: Choose a suitable Rolling contact bearing from manufacturer’s Catalogue for a specific application:** Understanding load calculations for gears is vital for selecting appropriate bearings that support the gear shafts.
*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements:** This module extends the knowledge from spur gears to more complex gear types like bevel and worm gears.
*   **CO6: Apply the design procedure for bevel and worm gear drives for specific application:** This is the primary learning outcome addressed by this topic, covering the theoretical design steps and considerations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References

*   **Design of Machine Elements by V B Bhandari:** Chapters on Bevel Gears and Worm Gear Drives provide detailed theoretical background and design procedures.
*   **Machine Design – An Integrated Approach by R. L. Norton:** Offers practical insights and design methodologies for various gear types.
*   **Design of Machine Elements II by Raghavendra K:** Likely contains specific chapters dedicated to bevel and worm gears with design examples.
*   **Machine Design Data Book by V B Bhandari / Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy / PSG Design Data:** Essential for obtaining empirical data, Lewis form factors, material properties, and permissible loads.
*   **Mechanical Engineering Design by J. E. Shigley:** A classic text that provides fundamental principles of gear design, including stress analysis.