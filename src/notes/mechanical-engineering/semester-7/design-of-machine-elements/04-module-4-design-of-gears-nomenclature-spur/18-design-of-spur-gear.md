---
title: "Design of spur gear"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d8e"
status: "completed"
scrapedAt: "2026-05-20T18:11:20.864Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 4: Design of Gears: Nomenclature: Spur

## Topic: Design of Spur Gear

This module focuses on the design of spur gears, a fundamental component in power transmission. We will explore their nomenclature, the factors influencing their design, and the methodologies employed to ensure their safe and efficient operation. This topic directly contributes to **Course Outcome 5 (CO5): Model suitable spur or helical gear drive based on the industrial requirements (Knowledge Level: K3)**.

---

### 1. Introduction to Gears and Spur Gears

*   **Gears:** Gears are toothed wheels that transmit motion and power between shafts by meshing with other toothed wheels. They are crucial for changing speed, torque, and direction of rotation.
*   **Spur Gears:** Spur gears are the simplest and most common type of gear. They have teeth that are straight and parallel to the axis of rotation. They are used to transmit power between parallel shafts.

**Key Concepts:**
*   **Power Transmission:** The primary function of gears is to transfer rotational power from one shaft to another.
*   **Speed Reduction/Increase:** Gears can be used to change the rotational speed of shafts. A smaller gear driving a larger gear reduces speed and increases torque, and vice versa.
*   **Torque Multiplication:** By reducing speed, gears effectively multiply torque.
*   **Direction of Rotation:** Spur gears transmit motion between parallel shafts. If the number of idler gears is even, the output shaft rotates in the same direction as the input shaft. If the number of idler gears is odd, the output shaft rotates in the opposite direction.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.
*   Shigley, J. E. (2003). *Mechanical Engineering Design*. Chapter on Gears.

---

### 2. Gear Nomenclature for Spur Gears

Understanding the terminology associated with gears is essential for design and analysis.

**Key Terms and Definitions:**

*   **Pitch Circle:** An imaginary circle on which the gears are assumed to roll together. The pitch circles of meshing gears are tangent to each other.
*   **Pitch Diameter ($d$):** The diameter of the pitch circle.
*   **Module ($m$):** A parameter defining the size of gear teeth. It is the ratio of the pitch diameter to the number of teeth.
    $m = \frac{d}{Z}$
    *   **Important Note:** In metric countries, Module is the preferred system. A smaller module means smaller teeth and a smaller gear for a given number of teeth.
*   **Diametral Pitch ($P_d$):** The ratio of the number of teeth to the pitch diameter, expressed in teeth per inch.
    $P_d = \frac{Z}{d}$
    *   **Important Note:** In the US, Diametral Pitch is commonly used. A higher diametral pitch means smaller teeth.
    *   **Relationship:** $d = mZ = \frac{Z}{P_d}$
*   **Circular Pitch ($p$):** The distance along the pitch circle from the center of one tooth to the center of the next.
    $p = \frac{\pi d}{Z} = \pi m$
*   **Addendum ($a$):** The radial distance from the pitch circle to the top of the tooth. For standard gears, $a = m$.
*   **Dedendum ($b$):** The radial distance from the pitch circle to the bottom of the tooth space. For standard gears, $b = 1.157m$ (this includes clearance).
*   **Addendum Circle:** The circle forming the outer boundary of the gear teeth.
*   **Root Circle (Dedendum Circle):** The circle forming the bottom of the tooth spaces.
*   **Face Width ($F$):** The length of the gear tooth along its axis.
*   **Tooth Thickness:** The thickness of the tooth measured along the pitch circle.
*   **Tooth Space:** The distance along the pitch circle between adjacent teeth.
*   **Pressure Angle ($\phi$):** The angle between the line of action and the common tangent to the pitch circles. For standard gears, it is typically 20°.
*   **Line of Action:** The line along which the resultant force between the meshing teeth acts. It is tangent to the base circles of both gears.
*   **Base Circle:** A circle from which the involute tooth profile is generated.
*   **Tooth Flank (Face):** The working surface of the tooth.
*   **Tooth Fillet:** The curved surface at the base of the tooth where it joins the root circle.
*   **Land:** The top surface of the tooth.
*   **Tip (Outer Diameter):** The outer diameter of the gear. $D = d + 2a = d + 2m$.
*   **Root Diameter:** The diameter of the root circle. $d_r = d - 2b = d - 2(1.157m) = d - 2.314m$.
*   **Face Width ($b$ or $F$):** The width of the gear face.

**Diagrammatic Representation:**
*(Imagine a clear diagram of a spur gear with all these terms labeled. Refer to Bhandari or Norton for detailed illustrations.)*

**Example:**
A spur gear has a pitch diameter of 100 mm and 40 teeth.
1.  Calculate the module.
    $m = \frac{d}{Z} = \frac{100 \text{ mm}}{40} = 2.5 \text{ mm}$
2.  Calculate the circular pitch.
    $p = \pi m = \pi \times 2.5 \text{ mm} \approx 7.85 \text{ mm}$
3.  Calculate the addendum and dedendum (assuming standard proportions).
    Addendum ($a$) = $m = 2.5 \text{ mm}$
    Dedendum ($b$) = $1.157m = 1.157 \times 2.5 \text{ mm} \approx 2.89 \text{ mm}$
4.  Calculate the addendum circle diameter.
    $D = d + 2a = 100 \text{ mm} + 2(2.5 \text{ mm}) = 105 \text{ mm}$
5.  Calculate the root circle diameter.
    $d_r = d - 2b = 100 \text{ mm} - 2(2.89 \text{ mm}) \approx 100 \text{ mm} - 5.78 \text{ mm} = 94.22 \text{ mm}$

**Important Points to Remember:**
*   The Module (m) is the most fundamental parameter for defining gear size in metric systems.
*   The Pressure Angle ($\phi$) affects the contact ratio and the forces transmitted. 20° is standard.
*   The tooth profile is typically an involute curve, ensuring constant velocity ratio during meshing.

---

### 3. Gear Tooth Geometry and Involute Profile

*   **Involute Curve:** The involute of a circle is a curve traced by the end of a taut string as it is unwound from the circle. This profile is preferred for gear teeth because it provides a constant velocity ratio between mating gears, regardless of slight variations in center distance.
*   **Generation of Involute Profile:** The teeth profiles are generated by the rolling motion of the line of action (which is tangent to the base circle) across the face of the gear.

**Key Concepts Related to Involute Profile:**
*   **Base Circle Diameter ($d_b$):** The diameter of the circle from which the involute is generated.
    $d_b = d \cos \phi$
    *   This implies that the base circle diameter is always smaller than the pitch circle diameter.
*   **Path of Contact:** The locus of the points of contact between two mating involute teeth. For spur gears, it's a straight line segment.
*   **Contact Ratio:** The average number of teeth in contact at any given time. A higher contact ratio leads to smoother operation and reduced load per tooth.
    *   **Circulation Contact Ratio ($m_c$):** The ratio of the length of the path of contact to the circular pitch.
*   **Undercutting:** Occurs when the tip of a cutting tool removes material from the fillet of a gear tooth. This can weaken the tooth and reduce its contact ratio. It is more likely to occur with a small number of teeth on the pinion and a large pressure angle.

**Design Considerations for Involute Profile:**
*   **Minimum Number of Teeth without Undercutting:** To avoid undercutting, the generating rack's addendum should not extend beyond the point where the involute intersects the base circle.
    $Z_{min} = \frac{2}{\sin^2 \phi}$ (for a standard rack)
    For a pinion with teeth generated by a standard rack, the minimum number of teeth to avoid undercutting is:
    $Z_{min} = \frac{2A}{sin^2 \phi}$, where A is the addendum factor (typically 1 for standard gears).
    So, $Z_{min} = \frac{2}{\sin^2 \phi}$.
    *   For $\phi = 20^\circ$, $Z_{min} = \frac{2}{(\sin 20^\circ)^2} = \frac{2}{(0.342)^2} \approx 17.16$. So, a pinion should ideally have at least 18 teeth to avoid undercutting with standard proportions.
*   **Addendum Modification:** The addendum of the teeth can be modified (increased or decreased) to avoid undercutting or to improve contact ratio and strength.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.
*   Juvinall, R. C., & Marshek, K. M. (2011). *Fundamentals of Machine Component Design*. Chapter on Gears.

---

### 4. Gear Materials and Selection

The material of the gear significantly impacts its strength, durability, and cost.

**Common Gear Materials:**
*   **Cast Iron:** Used for low-speed, low-power applications. Cheaper but less strong than steel.
    *   *Gray Cast Iron:* Good machinability and damping properties.
    *   *Nodular (Ductile) Cast Iron:* Better strength and toughness than gray cast iron.
*   **Steel:** Most common material for gears due to its high strength, toughness, and wear resistance.
    *   *Carbon Steels:* Plain carbon steels are suitable for general-purpose gears.
    *   *Alloy Steels:* Chromium, nickel, molybdenum, etc., are added to improve hardenability, strength, toughness, and wear resistance. Examples: AISI 1040, 1050, 4140, 4340, 8620.
    *   *Stainless Steels:* Used in corrosive environments.
*   **Bronze and Brass:** Non-ferrous alloys, typically used for worm gears or where non-sparking properties are required. They have good bearing properties.
*   **Plastics:** Used for light-duty, low-noise applications. Examples: Nylon, Acetal (Delrin), PEEK. They offer corrosion resistance and self-lubrication but have lower strength and thermal limits.

**Heat Treatment:**
*   **Case Hardening:** A process that hardens the surface of the gear teeth while keeping the core tough. This is crucial for resisting wear and surface fatigue.
    *   *Carburizing:* For low-carbon alloy steels. The gear is heated in a carbon-rich atmosphere.
    *   *Nitriding:* For alloy steels with nitride-forming elements. The gear is heated in a nitrogen-rich atmosphere.
    *   *Carbonitriding:* Combines carburizing and nitriding.
    *   *Induction Hardening:* Surface hardening by induction heating.
    *   *Flame Hardening:* Surface hardening by direct flame heating.
*   **Through Hardening:** Hardening the entire gear body, typically for medium-carbon alloy steels.

**Selection Criteria:**
*   **Load and Speed:** Higher loads and speeds require stronger materials and better heat treatments.
*   **Operating Environment:** Temperature, presence of corrosives, dust, or moisture.
*   **Noise and Vibration:** Plastic gears are quieter.
*   **Cost:** Material cost and manufacturing cost.
*   **Wear Resistance:** Surface hardness and material properties.
*   **Fatigue Strength:** Ability to withstand cyclic loading.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Sharma, P. C., & Agarwal, D. K. (2017). *Machine Design*. Chapter on Gears.
*   Mahadevan, K., & Balaveera Reddy, K. (2019). *Design Data Hand Book*. Section on Gear Materials.

---

### 5. Forces Acting on Gear Teeth

Understanding the forces acting on gear teeth is crucial for calculating bending stress and surface stress.

**Types of Forces:**
1.  **Tangential Force ($F_t$):** This force acts at the pitch line and is responsible for transmitting power. It is tangential to the pitch circles.
    $F_t = \frac{P}{v}$, where $P$ is the transmitted power and $v$ is the pitch line velocity.
    Alternatively, $F_t = \frac{2P}{d \omega}$, where $\omega$ is the angular velocity in rad/s.
    Or, $F_t = \frac{2 \times 1000 P}{60 N d_{pitch}} \times \frac{1}{1000}$ (if P is in kW, N in rpm, d in mm)
2.  **Radial (Centrifugal) Force ($F_r$):** This force acts radially outwards from the center of the gear. It is due to the pressure angle.
    $F_r = F_t \tan \phi$
3.  **Axial Force ($F_a$):** This force acts along the axis of the gear. It is present in helical and bevel gears but is zero for spur gears.

**Direction of Forces:**
*   $F_t$ acts tangentially to the pitch circle.
*   $F_r$ acts radially outwards.
*   The resultant force ($F$) acts along the line of action.

**Calculation of Forces:**
*   **Power ($P$):** Transmitted power (e.g., in kW or hp).
*   **Pitch Line Velocity ($v$):** $v = \frac{\pi d N}{60}$, where $d$ is the pitch diameter in meters and $N$ is the speed in rpm.
    *   If $d$ is in mm, $v = \frac{\pi d N}{60 \times 1000} \text{ m/s}$.
*   **Tangential Force ($F_t$):**
    $F_t = \frac{P}{v}$ (in Newtons, if P is in Watts and v is in m/s)
    $F_t = \frac{1000 P_{kW}}{v_{m/s}}$
    $F_t = \frac{2 \pi P N}{60 v}$ (if $P$ is in N-m/s, $N$ in rpm, $v$ in m/s)
    $F_t = \frac{2 \pi \times 10^3 P_{kW}}{60 \times v_{m/s}}$

**Example:**
A gear transmits 10 kW of power at 1200 rpm. The pitch diameter is 100 mm. The pressure angle is 20°.
1.  Calculate the pitch line velocity ($v$):
    $v = \frac{\pi d N}{60 \times 1000} = \frac{\pi \times 100 \text{ mm} \times 1200 \text{ rpm}}{60 \times 1000} = 6.28 \text{ m/s}$
2.  Calculate the tangential force ($F_t$):
    $F_t = \frac{1000 P_{kW}}{v_{m/s}} = \frac{1000 \times 10 \text{ kW}}{6.28 \text{ m/s}} \approx 1592 \text{ N}$
3.  Calculate the radial force ($F_r$):
    $F_r = F_t \tan \phi = 1592 \text{ N} \times \tan 20^\circ = 1592 \text{ N} \times 0.364 \approx 579.6 \text{ N}$

**Important Points to Remember:**
*   The tangential force is the primary force responsible for power transmission.
*   The radial force acts to separate the gears.
*   The line of action is the path along which the resultant force acts.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.

---

### 6. Design Against Static Strength (Bending Stress)

This is the primary design criterion for gear teeth, ensuring they don't break under bending loads. The Lewis bending stress formula is a fundamental approach.

**Lewis Bending Stress Formula:**
The bending moment ($M$) on a gear tooth is approximately $M = F_t \times y$, where $y$ is the tangential force arm. The Lewis form factor ($Y$) is a dimensionless factor that accounts for the shape of the tooth and the location where the bending stress is maximum (usually at the fillet).

$\sigma_b = \frac{F_t}{F \times m} \times \frac{1}{Y}$

Where:
*   $\sigma_b$ = Bending stress at the tooth root.
*   $F_t$ = Tangential force acting on the pitch circle.
*   $F$ = Face width of the gear.
*   $m$ = Module of the gear.
*   $Y$ = Lewis form factor, which depends on the tooth form, pressure angle, and number of teeth.

**Steps for Design against Static Strength:**
1.  **Determine the tangential force ($F_t$)** based on the transmitted power and pitch line velocity.
2.  **Select a material and its allowable bending stress ($\sigma_{b, allow}$)**. This is obtained from material properties and a suitable factor of safety ($S_F$). $\sigma_{b, allow} = \frac{\sigma_{b, ultimate}}{S_F}$.
3.  **Estimate the Lewis form factor ($Y$)**. This can be found from tables or charts provided in textbooks like Bhandari or Norton, based on the pressure angle and number of teeth.
4.  **Determine the face width ($F$)**. A common practice is to assume a face width to pitch diameter ratio (e.g., $F/d \approx 10$ for standard gears, or typically 5 to 15 for spur gears).
5.  **Calculate the required module ($m$)** using the Lewis formula, rearranged as:
    $m = \frac{F_t}{F \times \sigma_{b, allow} \times Y}$
6.  **Select a standard module value** from available standards (e.g., ISO or AGMA standards).
7.  **Calculate the number of teeth ($Z$)** if not already known: $Z = \frac{d}{m}$. Ensure the number of teeth is sufficient to avoid undercutting.
8.  **Recalculate the gear dimensions** ($d$, $F$, etc.) using the chosen standard module and number of teeth.
9.  **Verify the design** by calculating the actual bending stress and comparing it with the allowable stress.

**Example:**
Design a spur gear to transmit 5 kW at 1000 rpm. The pinion is made of mild steel with an ultimate tensile strength of 400 N/mm². The gear is also mild steel. The pressure angle is 20°. The desired service factor ($S_F$) is 2. The face width is 5 times the module.

1.  **Tangential Force ($F_t$):**
    Assuming pitch line velocity $v \approx 10$ m/s (this needs to be estimated or iterated).
    $F_t = \frac{1000 \times 5 \text{ kW}}{10 \text{ m/s}} = 500 \text{ N}$
2.  **Allowable Bending Stress ($\sigma_{b, allow}$):**
    For mild steel, $\sigma_{b, ultimate} \approx 400 \text{ N/mm}^2$.
    $\sigma_{b, allow} = \frac{400 \text{ N/mm}^2}{S_F} = \frac{400}{2} = 200 \text{ N/mm}^2$
3.  **Lewis Form Factor ($Y$):**
    Assume number of teeth for pinion $Z_p = 25$. From tables (Bhandari, Table 14.1), for $\phi=20^\circ$ and $Z=25$, $Y=0.32$.
4.  **Face Width ($F$):** $F = 5m$
5.  **Calculate Module ($m$):**
    Substitute $F=5m$ into the Lewis formula:
    $m = \frac{F_t}{F \times \sigma_{b, allow} \times Y} = \frac{500 \text{ N}}{(5m) \times 200 \text{ N/mm}^2 \times 0.32}$
    $m = \frac{500}{5m \times 64} = \frac{500}{320m}$
    $m^2 = \frac{500}{320} = 1.5625$
    $m = \sqrt{1.5625} \approx 1.25 \text{ mm}$
    This seems too small. Let's re-evaluate the face width assumption or iterative process.

    **Iterative Approach (More Practical):**
    a.  Assume a pitch line velocity $v$. Let's try $v = 5 \text{ m/s}$.
        $F_t = \frac{1000 \times 5}{5} = 1000 \text{ N}$.
    b.  Let's assume a standard module, say $m=3$ mm.
    c.  Let's assume a number of teeth for pinion, say $Z_p = 20$.
    d.  From tables, for $\phi=20^\circ$ and $Z=20$, $Y=0.30$.
    e.  Let the face width $F = 10m = 10 \times 3 = 30 \text{ mm}$.
    f.  Calculate bending stress:
        $\sigma_b = \frac{F_t}{F \times m \times Y} = \frac{1000 \text{ N}}{30 \text{ mm} \times 3 \text{ mm} \times 0.30} = \frac{1000}{27} \approx 37 \text{ N/mm}^2$.
    g.  Compare with allowable stress: $37 \text{ N/mm}^2 < 200 \text{ N/mm}^2$. This is safe.
    h.  We can now calculate the pitch diameter: $d = mZ = 3 \times 20 = 60 \text{ mm}$.
    i.  Recheck pitch line velocity: $v = \frac{\pi \times 0.060 \times 1000}{60} = 3.14 \text{ m/s}$.
    j.  Recalculate $F_t$ with the new velocity: $F_t = \frac{1000 \times 5}{3.14} = 1592 \text{ N}$.
    k.  Re-calculate stress with the new $F_t$: $\sigma_b = \frac{1592}{30 \times 3 \times 0.30} = \frac{1592}{27} \approx 58.96 \text{ N/mm}^2$. This is still well within the limit.

    This shows the iterative nature of gear design.

**Modern Approach (AGMA/ISO Standards):**
Modern design procedures, as found in AGMA (American Gear Manufacturers Association) or ISO standards, are more comprehensive. They consider:
*   **Dynamic Load:** The load due to imperfections in tooth spacing, profile errors, and tooth stiffness. This is incorporated via a **velocity factor ($K_v$)** or **dynamic factor**.
*   **Load Distribution Factor ($K_m$):** Accounts for inaccuracies in the load distribution across the face width.
*   **Stress Cycle Factor ($K_{fc}$):** Accounts for the number of load cycles.
*   **Size Factor ($K_s$):** Accounts for the size of the gear teeth.
*   **Rim Thickness Factor ($K_r$):** Accounts for the stiffness of the rim.
*   **Bucket Factor ($K_{b}$):** Accounts for the stiffness of the web.

The modified bending stress equation is often represented as:
$\sigma_b = \frac{F_t K_v K_m K_s K_f}{F m Y}$
Where $K_f$ is the fatigue stress concentration factor.

However, for fundamental understanding, the Lewis formula is a good starting point.

**Important Points to Remember:**
*   Bending stress is calculated at the root of the tooth.
*   The Lewis form factor ($Y$) is crucial and depends on tooth geometry.
*   Material properties, factor of safety, and face width are key design inputs.
*   Modern designs incorporate dynamic and load distribution factors.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.
*   Shigley, J. E. (2003). *Mechanical Engineering Design*. Chapter on Gears.

---

### 7. Design Against Surface Durability (Wear and Pitting)

Gear teeth are subjected to repeated contact stresses, which can lead to surface fatigue failure, commonly known as pitting.

**Hertz Contact Stress:**
The compressive stress at the point of contact between two mating teeth is a significant factor in surface durability. The maximum compressive stress ($\sigma_c$) for two cylinders in line contact is given by Hertz's formula:

$\sigma_c = \sqrt{\frac{F_t \times E}{F \times d \times p \times \pi (1 - \nu^2)}}$
Where:
*   $F_t$ = Tangential force at pitch circle.
*   $E$ = Modulus of Elasticity of the gear material.
*   $F$ = Face width of the gear.
*   $d$ = Pitch diameter of the pinion.
*   $p$ = Circular pitch ($p = \pi m$).
*   $\nu$ = Poisson's ratio of the gear material.

For involute teeth, the stress is not uniform and is influenced by the geometry. The AGMA/ISO approach uses a **surface stress factor ($Z_E$)** and a **load stress factor ($Z_N$)**:

$\sigma_c = Z_E Z_N \sqrt{\frac{F_t K_v K_m K_a}{F d m}}$
Where:
*   $Z_E$ = Elastic coefficient, depends on the materials of the mating gears.
*   $Z_N$ = Geometry factor, depends on the tooth form and pressure angle.
*   $K_a$ = Application factor.

**Allowable Surface Stress:**
The allowable surface stress ($\sigma_{c, allow}$) is determined by the material's surface endurance limit, accounting for a **life factor ($K_L$)** and **application factor ($K_a$)**.

$\sigma_{c, allow} = \sigma_{c, lim} \times K_L \times K_a$

**Steps for Design Against Surface Durability:**
1.  **Determine the tangential force ($F_t$)**.
2.  **Select materials for pinion and gear** and their corresponding elastic coefficients ($E_p$, $E_g$) and Poisson's ratios ($\nu_p$, $\nu_g$).
3.  **Calculate the elastic coefficient ($Z_E$)**:
    $Z_E = \sqrt{\frac{1}{\pi \left(\frac{1-\nu_p^2}{E_p} + \frac{1-\nu_g^2}{E_g}\right)}}$
4.  **Determine the geometry factor ($Z_N$)** based on the pressure angle, helix angle (if applicable), and number of teeth of both gears. This is often obtained from charts or tables in design handbooks.
5.  **Select an allowable surface stress ($\sigma_{c, allow}$)** based on the material's surface endurance limit and desired life.
6.  **Assume a face width ($F$)** or **module ($m$)** and iterate.
7.  **Calculate the required module ($m$) or face width ($F$)** using the surface durability equation:
    $m = \frac{F_t K_v K_m K_a}{F Z_E^2 Z_N^2 \sigma_{c, allow}^2}$ (Rearranged for module)

**Example:**
Consider the previous example where $F_t = 1592$ N, $\phi = 20^\circ$, $d=60$ mm (pinion), $m=3$ mm.
Assume both gears are made of hardened steel with:
*   $E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$
*   $\nu = 0.3$
*   Allowable surface stress $\sigma_{c, allow} = 600 \text{ N/mm}^2$ (typical for hardened steel)
*   Let $K_v = 1$, $K_m = 1.25$, $K_a = 1$ (for simplicity).

1.  **Elastic Coefficient ($Z_E$)**:
    $Z_E = \sqrt{\frac{1}{\pi \left(\frac{1-0.3^2}{200 \times 10^3} + \frac{1-0.3^2}{200 \times 10^3}\right)}} = \sqrt{\frac{1}{\pi \left(\frac{2 \times 0.91}{200 \times 10^3}\right)}} = \sqrt{\frac{200000}{2 \times 0.91 \times \pi}} \approx 184.3$
2.  **Geometry Factor ($Z_N$)**: This needs to be looked up in tables based on pressure angle and number of teeth. For $\phi=20^\circ$ and $Z=20$ (pinion), $Z_N \approx 2.5$.
3.  **Calculate $\sigma_c$**:
    $\sigma_c = Z_E Z_N \sqrt{\frac{F_t K_v K_m K_a}{F d m}} = 184.3 \times 2.5 \sqrt{\frac{1592 \times 1 \times 1.25 \times 1}{30 \times 60 \times 3}}$
    $\sigma_c = 460.75 \sqrt{\frac{1990}{5400}} \approx 460.75 \times 0.607 \approx 279.7 \text{ N/mm}^2$.
4.  **Compare**: $279.7 \text{ N/mm}^2 < 600 \text{ N/mm}^2$. The design is safe against surface pitting.

**Important Points to Remember:**
*   Surface durability design focuses on preventing pitting.
*   Hertzian contact stress principles are applied.
*   Elastic properties and geometry factors are crucial.
*   Surface endurance limit and life factor determine the allowable stress.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.
*   Juvinall, R. C., & Marshek, K. M. (2011). *Fundamentals of Machine Component Design*. Chapter on Gears.

---

### 8. Design Procedure Summary for Spur Gears

Here's a consolidated procedure for designing a spur gear drive:

1.  **Gather Design Requirements:**
    *   Transmitted power ($P$).
    *   Input shaft speed ($N_1$) and output shaft speed ($N_2$).
    *   Center distance or gear ratio ($i = Z_2/Z_1 = N_1/N_2$).
    *   Operating conditions (load, shock, service hours).
    *   Desired accuracy and noise level.
    *   Available space.

2.  **Preliminary Design:**
    *   **Select Material:** Choose suitable materials for pinion and gear based on strength, wear, cost, and environment.
    *   **Select Pressure Angle ($\phi$)**: Typically 20°.
    *   **Select Face Width ($F$)**: Start with a reasonable assumption, e.g., $F = 10m$ or $F/d \approx 10$.
    *   **Estimate Pitch Line Velocity ($v$)**: This is an iterative process. Start with an estimated value.

3.  **Design for Static Strength (Bending Stress):**
    *   Calculate tangential force ($F_t$) using power and velocity.
    *   Determine allowable bending stress ($\sigma_{b, allow}$) from material properties and factor of safety ($S_F$).
    *   Find the Lewis form factor ($Y$) for the assumed or estimated number of teeth.
    *   Calculate the required module ($m$) using the Lewis formula: $m = \frac{F_t}{F \times \sigma_{b, allow} \times Y}$.
    *   Select a standard module value.
    *   Calculate the pitch diameter ($d$) of the pinion: $d = mZ$.
    *   Calculate the number of teeth for the pinion ($Z_p$). Ensure $Z_p \ge Z_{min}$ to avoid undercutting.
    *   Calculate the number of teeth for the gear ($Z_g = i Z_p$).
    *   Calculate the actual pitch diameter ($d = mZ$).
    *   Recalculate the pitch line velocity ($v$) using the actual pitch diameter.
    *   Recalculate $F_t$ and check the bending stress. Adjust $F$, $m$, or $Z$ if necessary.

4.  **Design for Surface Durability (Wear/Pitting):**
    *   Calculate the elastic coefficient ($Z_E$) for the chosen materials.
    *   Determine the geometry factor ($Z_N$) based on the number of teeth and pressure angle.
    *   Determine the allowable surface stress ($\sigma_{c, allow}$) based on material surface endurance limit, life factor, and application factor.
    *   Calculate the surface stress ($\sigma_c$) using the AGMA/ISO formula: $\sigma_c = Z_E Z_N \sqrt{\frac{F_t K_v K_m K_a}{F d m}}$.
    *   Check if $\sigma_c \le \sigma_{c, allow}$. Adjust face width ($F$) or module ($m$) if the design is not safe. A wider face width generally improves surface durability.

5.  **Final Checks and Refinements:**
    *   **Bearing Pressure:** Ensure the bearing pressure on the teeth is within acceptable limits.
    *   **Shaft and Bearing Design:** Design the shafts and bearings that support the gears.
    *   **Lubrication:** Specify the lubrication system.
    *   **Noise and Vibration:** Consider measures for noise reduction if required.
    *   **Manufacturing Accuracy:** Select the appropriate accuracy class for manufacturing.

**Important Points to Remember:**
*   Gear design is often an iterative process.
*   Both bending strength and surface durability must be checked.
*   Standard module sizes and tooth counts are used in practice.
*   Modern design standards (AGMA/ISO) provide more accurate factors for load and stress calculations.

**References:**
*   Bhandari, V. B. (2020). *Design of Machine Elements*. Chapter on Gears.
*   Norton, R. L. (2018). *Machine Design – An Integrated Approach*. Chapter on Gears.
*   Sharma, P. C., & Agarwal, D. K. (2017). *Machine Design*. Chapter on Gears.
*   PSG Design Data. (2022). *PSG Tech*. Section on Gears.

---

### 9. Practice Questions and Exercises

**Question 1:**
A spur gear pinion with 20 teeth meshes with a gear having 60 teeth. The module is 5 mm. The pressure angle is 20°. The pinion transmits 10 kW power at 1200 rpm. The face width is 50 mm.
Assume:
*   Allowable bending stress for pinion material = 100 N/mm².
*   Lewis form factor for the pinion (Y) = 0.30.
Calculate the bending stress in the pinion tooth and check if it is safe.

**Answer 1:**
1.  **Pitch Diameter of Pinion ($d_p$):**
    $d_p = m \times Z_p = 5 \text{ mm} \times 20 = 100 \text{ mm} = 0.1 \text{ m}$
2.  **Pitch Line Velocity ($v$):**
    $v = \frac{\pi d_p N_p}{60 \times 1000} = \frac{\pi \times 100 \text{ mm} \times 1200 \text{ rpm}}{60 \times 1000} = 6.28 \text{ m/s}$
3.  **Tangential Force ($F_t$):**
    $F_t = \frac{1000 P_{kW}}{v_{m/s}} = \frac{1000 \times 10 \text{ kW}}{6.28 \text{ m/s}} = 1592.36 \text{ N}$
4.  **Bending Stress ($\sigma_b$):**
    $\sigma_b = \frac{F_t}{F \times m \times Y} = \frac{1592.36 \text{ N}}{50 \text{ mm} \times 5 \text{ mm} \times 0.30} = \frac{1592.36}{75} = 21.23 \text{ N/mm}^2$
5.  **Check for Safety:**
    $21.23 \text{ N/mm}^2 < 100 \text{ N/mm}^2$. The pinion is safe against bending stress.

**Question 2:**
For the gear drive in Question 1, if both pinion and gear are made of hardened steel with $\sigma_{c, allow} = 700 \text{ N/mm}^2$.
Assume:
*   $E = 200 \text{ GPa}$, $\nu = 0.3$ for both.
*   $K_v = 1.25$ (due to moderate shock).
*   $K_m = 1.5$ (due to moderate accuracy).
*   $K_a = 1$.
*   $Z_E = 184.3$ (calculated for similar materials).
*   $Z_N = 2.5$ (for the pinion with 20 teeth, $\phi=20^\circ$).
Calculate the surface stress induced and check for pitting resistance.

**Answer 2:**
1.  **Surface Stress ($\sigma_c$):**
    $\sigma_c = Z_E Z_N \sqrt{\frac{F_t K_v K_m K_a}{F d_p m}}$
    $\sigma_c = 184.3 \times 2.5 \sqrt{\frac{1592.36 \times 1.25 \times 1.5 \times 1}{50 \times 100 \times 5}}$
    $\sigma_c = 460.75 \sqrt{\frac{2985.675}{25000}} = 460.75 \sqrt{0.1194} = 460.75 \times 0.3456 \approx 159.2 \text{ N/mm}^2$
2.  **Check for Safety:**
    $159.2 \text{ N/mm}^2 < 700 \text{ N/mm}^2$. The gear drive is safe against surface pitting.

---

### 10. Important Points to Remember (Summary)

*   **Spur gears transmit power between parallel shafts.**
*   **Module (m) and Diametral Pitch ($P_d$) are key parameters for gear size.**
*   **Involute profile ensures a constant velocity ratio.**
*   **Avoid undercutting by ensuring sufficient teeth on the pinion ($Z_{min} \approx 17/\sin^2\phi$).**
*   **Design involves checking both bending stress (static strength) and surface durability (pitting).**
*   **Tangential force ($F_t$) is calculated from power and velocity.**
*   **Lewis formula is fundamental for bending stress calculation.**
*   **Hertzian contact stress principles are used for surface durability.**
*   **Modern design incorporates dynamic factors ($K_v$) and load distribution factors ($K_m$).**
*   **Material selection and heat treatment are critical for performance.**

---
This comprehensive study note covers the essential aspects of spur gear design, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks and data handbooks for detailed tables, charts, and more specific design formulas.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
