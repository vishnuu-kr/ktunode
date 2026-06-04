---
title: "Piezoresistive Sensors"
subject: "SENSORS AND ACTUATORS"
module: "Module 2: Position and Displacement Sensors "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea73"
status: "completed"
scrapedAt: "2026-05-23T17:57:54.832Z"
---
# SENSORS AND ACTUATORS - Module 2: Position and Displacement Sensors

## Topic: Piezoresistive Sensors

---

### 1. Introduction to Piezoresistive Sensors

**1.1 Definition:**
Piezoresistive sensors are transducers that convert mechanical stress or strain into an electrical signal. This phenomenon is known as the **piezoresistive effect**.

**1.2 The Piezoresistive Effect:**
The piezoresistive effect is the change in the electrical resistivity of a material when subjected to mechanical strain. Unlike piezoelectric materials, where stress directly generates a voltage, piezoresistive materials require an external excitation current or voltage to produce a measurable electrical output (change in resistance).

**1.3 Key Concepts:**
*   **Strain:** A measure of deformation representing the displacement between points on a material, divided by the initial distance between these points. Mathematically, strain ($\epsilon$) = $\Delta L / L_0$, where $\Delta L$ is the change in length and $L_0$ is the original length.
*   **Stress:** The internal force per unit area within a material. Mathematically, stress ($\sigma$) = Force / Area.
*   **Resistivity ($\rho$):** An intrinsic property of a material that measures how strongly it resists electric current. It is the reciprocal of conductivity.
*   **Resistance (R):** The opposition to the flow of electric current in a conductor. $R = \rho (L/A)$, where L is the length and A is the cross-sectional area.

**1.4 How it Works:**
When a piezoresistive material is subjected to mechanical stress, its dimensions (length and cross-sectional area) change, and importantly, its **resistivity** itself also changes. This change in resistivity is the primary mechanism behind the piezoresistive effect.

The change in resistance ($\Delta R$) can be expressed as:
$\Delta R / R = GF * \epsilon$

Where:
*   $\Delta R$ is the change in resistance.
*   $R$ is the original resistance.
*   $GF$ is the **Gauge Factor**, a dimensionless quantity that characterizes the sensitivity of the piezoresistive material.
*   $\epsilon$ is the applied strain.

**1.5 Gauge Factor (GF):**
The gauge factor is a critical parameter for piezoresistive sensors. A higher gauge factor indicates a greater change in resistance for a given strain, leading to higher sensitivity.
$GF = (\Delta R / R) / \epsilon$

**Important Point:** While the change in resistance can be due to dimensional changes ($(\Delta L/L)$ and $(\Delta A/A)$), the piezoresistive effect emphasizes the inherent change in the material's resistivity.

**Reference:** Fraden, J. (2010). *Handbook of Modern Sensors* (4th ed.). Springer. (Chapter on Piezoresistive Sensors)

---

### 2. Materials Used in Piezoresistive Sensors

**2.1 Semiconductor Materials:**
Semiconductors are the most common materials used for piezoresistive sensors due to their significantly higher gauge factors compared to metals.

*   **Silicon (Si):** The most prevalent material. Its piezoresistive properties are highly dependent on crystal orientation, doping type, and doping concentration.
    *   **P-type Silicon:** Generally exhibits a positive piezoresistive coefficient for strain along certain crystal axes.
    *   **N-type Silicon:** Exhibits a negative piezoresistive coefficient for strain along certain crystal axes.
*   **Germanium (Ge):** Also exhibits a strong piezoresistive effect but is less common than silicon due to cost and stability issues.

**2.2 Metallic Materials:**
Metals also exhibit the piezoresistive effect, but their gauge factors are much lower (typically around 2).

*   **Constantan (Copper-Nickel alloy):** Commonly used in strain gauges.
*   **Karma (Nickel-Chromium alloy):** Similar to Constantan.

**2.3 Important Point:** The significantly higher GF of semiconductors makes them ideal for applications requiring high sensitivity.

**Reference:** Patranabis, D. (2021). *Sensors and Transducers* (4th ed.). PHI Learning. (Chapter on Resistive Sensors)

---

### 3. Working Principle and Construction

**3.1 Basic Principle:**
Piezoresistive sensors work by integrating piezoresistive elements (strain gauges) onto a diaphragm or beam structure that deforms under pressure or force. This deformation induces strain in the piezoresistive elements, changing their resistance.

**3.2 Wheatstone Bridge Configuration:**
To measure the small changes in resistance effectively and to compensate for temperature variations, piezoresistive elements are typically arranged in a **Wheatstone bridge** circuit.

*   **How it works:** The bridge consists of four resistive arms. When a voltage is applied across the bridge, an output voltage is produced across the diagonal points. If all resistances are equal, the output voltage is zero. When strain is applied, the resistance of one or more arms changes, causing an imbalance in the bridge and producing a non-zero output voltage proportional to the strain.

*   **Bridge Configurations:**
    *   **Quarter Bridge:** One active strain gauge.
    *   **Half Bridge:** Two active strain gauges (either two in the same arm to double sensitivity or two in adjacent arms to cancel temperature effects).
    *   **Full Bridge:** Four active strain gauges (maximizes sensitivity and provides excellent temperature compensation).

**3.3 Construction of a Piezoresistive Pressure Sensor:**
A typical piezoresistive pressure sensor consists of:
*   **Diaphragm:** A thin, flexible membrane (often made of silicon) that deflects when subjected to pressure.
*   **Piezoresistors:** Thin films or diffused elements of semiconductor material (usually doped silicon) strategically placed on the diaphragm where strain is highest. These are typically bonded or diffused directly onto the diaphragm surface.
*   **Wheatstone Bridge:** The piezoresistors are connected in a Wheatstone bridge configuration.
*   **Packaging:** The entire assembly is enclosed in a protective housing.

**3.4 Strain Distribution:**
The piezoresistors are positioned on the diaphragm in areas where tensile (stretching) and compressive (squeezing) strains are maximized. For optimal performance, often two resistors are placed in tensile regions and two in compressive regions of the diaphragm, configured as a full Wheatstone bridge.

**Example:** In a silicon diaphragm under pressure, the edges typically experience tensile strain, while the center experiences compressive strain.

**Reference:** Johnson, C. D. (2019). *Process Control Instrumentation Technology* (8th ed.). Pearson/Prentice Hall. (Chapter on Pressure Transducers)

---

### 4. Advantages and Disadvantages of Piezoresistive Sensors

**4.1 Advantages:**
*   **High Sensitivity:** Due to the high gauge factor of semiconductor materials (especially silicon).
*   **Good Linearity:** For moderate strain levels, the relationship between strain and output voltage is highly linear.
*   **Miniaturization:** Can be fabricated using micro-machining techniques, leading to very small and lightweight sensors.
*   **Low Cost (in mass production):** Silicon fabrication processes allow for cost-effective manufacturing.
*   **Good Frequency Response:** Can respond to rapid changes in pressure or force.
*   **Low Power Consumption:** Generally require less power than other types of sensors.
*   **Integrability:** Can be easily integrated with electronic circuitry for signal conditioning and processing.

**4.2 Disadvantages:**
*   **Temperature Sensitivity:** The piezoresistive effect is temperature-dependent, requiring compensation techniques.
*   **Zero Drift:** Can experience drift in the zero output signal due to creep or aging of the material.
*   **Susceptible to Overload:** Excessive stress can permanently deform or damage the sensor.
*   **Excitation Required:** Unlike piezoelectric sensors, they require an excitation voltage or current.
*   **Sensitivity to Strain Gradients:** Performance can be affected by non-uniform strain distributions.

**Important Point:** Temperature compensation is a critical design consideration for piezoresistive sensors.

**Reference:** Pawlak, A. M. (2016). *Sensors and Actuators in Mechatronics, Design and Applications*. Taylor & Francis Group. (Chapter on Strain Gauges)

---

### 5. Applications of Piezoresistive Sensors

Piezoresistive sensors are widely used in various fields due to their versatility and performance.

**5.1 Pressure Sensors:**
*   **Automotive:** Engine oil pressure, tire pressure monitoring systems (TPMS), fuel pressure.
*   **Industrial:** Process control, hydraulic systems, pneumatic systems.
*   **Medical:** Blood pressure monitoring, respiratory monitoring.
*   **Aerospace:** Cabin pressure, hydraulic system pressure.

**5.2 Accelerometers:**
*   By mounting piezoresistors on a proof mass that is attached to a cantilever beam or diaphragm, acceleration can be converted into strain, which then alters the resistance.
*   **Applications:** Inertial navigation, vibration analysis, automotive airbag deployment systems.

**5.3 Force Sensors:**
*   Directly measuring force by applying it to a structure containing piezoresistive elements.
*   **Applications:** Weighing scales, industrial testing, robotics.

**5.4 Strain Gauges:**
*   Used extensively for measuring strain in structures (bridges, aircraft wings, machinery) to monitor structural integrity and stress.

**5.5 Other Applications:**
*   **Microphones:** Piezoresistive microphones use a diaphragm that vibrates with sound waves, inducing strain in attached piezoresistors.
*   **Tactile Sensors:** Arrays of piezoresistive elements to detect pressure and shape.
*   **Humidity Sensors:** Some designs utilize the swelling or shrinking of a polymer film under humidity changes to induce strain.

**Example:** A car's Anti-lock Braking System (ABS) uses piezoresistive accelerometers to detect wheel slip by measuring the deceleration of each wheel.

**Reference:** Bishop, R. H. (2022). *Mechatronic Systems, Sensors and Actuators Fundamentals and Modelling* (3rd ed.). Taylor & Francis Group. (Chapter on Pressure Sensors)

---

### 6. Learning Outcomes Alignment

*   **CO1: Describe Sensor Fundamentals (Knowledge Level: K2)**
    *   This note covers the fundamental working principle of piezoresistive sensors, including the piezoresistive effect, gauge factor, and how strain is converted to an electrical signal.

*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available. (Knowledge Level: K2)**
    *   This note details the principles of piezoresistive sensors, their purpose (measuring strain, pressure, force, acceleration), how they work (strain -> resistance change -> electrical signal), and their common applications.

*   **CO3: Illustrate the working principles of smart sensors (Knowledge Level: K2)**
    *   While not explicitly focusing on "smart sensors" as a separate category, the note discusses signal conditioning via Wheatstone bridges and the potential for integration with electronic circuitry, which are foundational aspects of smart sensor design.

*   **CO4: Explain the working principle of different types of actuators. (Knowledge Level: K2)**
    *   This module and topic specifically focus on sensors, not actuators. This learning outcome is outside the scope of this particular topic.

---

### 7. Practice Questions & Exercises

**Question 1:**
What is the fundamental physical phenomenon exploited by piezoresistive sensors?
a) Piezoelectric effect
b) Piezomagnetic effect
c) Piezoresistive effect
d) Hall effect

**Answer:** c) Piezoresistive effect

**Question 2:**
Define the Gauge Factor (GF) for a piezoresistive material.
a) GF = $(\Delta R / R) * \epsilon$
b) GF = $\epsilon / (\Delta R / R)$
c) GF = $(\Delta R / R) / \epsilon$
d) GF = $R / (\Delta R * \epsilon)$

**Answer:** c) GF = $(\Delta R / R) / \epsilon$

**Question 3:**
Which type of material typically exhibits a higher Gauge Factor, making it more suitable for high-sensitivity piezoresistive sensors?
a) Metals
b) Semiconductors (e.g., Silicon)
c) Polymers
d) Ceramics

**Answer:** b) Semiconductors (e.g., Silicon)

**Question 4:**
A piezoresistive pressure sensor uses a diaphragm and piezoresistors arranged in a Wheatstone bridge. If the pressure increases, causing tensile strain in one of the piezoresistors, how will its resistance change, and what configuration of the Wheatstone bridge would maximize the output signal for this change?

**Answer:**
The resistance of the piezoresistor subjected to tensile strain will increase. A full Wheatstone bridge configuration, with active resistors placed in both tensile and compressive strain regions of the diaphragm, would maximize the output signal and provide better temperature compensation.

**Question 5 (Exercise):**
A silicon piezoresistor has a resistance of $1000 \Omega$. It is subjected to a strain of $500 \mu\epsilon$ (microstrain, $1 \mu\epsilon = 10^{-6}$). If the Gauge Factor of the silicon is 150, calculate the change in resistance. What would be the output voltage from a full Wheatstone bridge with a supply voltage of 5V, assuming two resistors experience a strain of $+500 \mu\epsilon$ and two experience a strain of $-500 \mu\epsilon$ (with appropriate polarity for resistance change)?

**Solution:**
1.  **Calculate $\Delta R$:**
    $\Delta R = R * GF * \epsilon$
    $\Delta R = 1000 \Omega * 150 * (500 \times 10^{-6})$
    $\Delta R = 1000 * 150 * 0.0005$
    $\Delta R = 75 \Omega$

2.  **Wheatstone Bridge Output:**
    In a full bridge with two resistors experiencing $+ \epsilon$ and two experiencing $- \epsilon$, the total change in resistance contributing to the output is effectively $4 * (\Delta R / R) * R = 4 * \Delta R$. This isn't quite right for calculating voltage directly. A better approach is to consider the relative resistance changes.
    Let $R_1 = R(1 + GF*\epsilon)$, $R_2 = R(1 + GF*\epsilon)$, $R_3 = R(1 - GF*\epsilon)$, $R_4 = R(1 - GF*\epsilon)$.
    For simplicity, let's assume $R_1$ and $R_2$ increase by $\Delta R = 75 \Omega$, and $R_3$ and $R_4$ decrease by $\Delta R = 75 \Omega$.
    The output voltage ($V_{out}$) of a Wheatstone bridge can be approximated for small changes as:
    $V_{out} \approx (V_{supply} / 4) * (GF * \epsilon_{total})$
    Where $\epsilon_{total}$ is the effective total strain that causes imbalance. In a symmetric full bridge, with positive strain in two opposite arms and negative in the other two, the total effective strain is $4 \times \epsilon$. Or, consider the ratio change:
    If $R_1$ and $R_2$ are in one diagonal and $R_3$ and $R_4$ in the other:
    $V_{out} = V_{supply} * [(R_1/(R_1+R_2)) - (R_3/(R_3+R_4))]$
    Let $R_1 = R+\Delta R$, $R_2 = R+\Delta R$, $R_3 = R-\Delta R$, $R_4 = R-\Delta R$.
    $V_{out} = V_{supply} * [((R+\Delta R)/(R+\Delta R+R+\Delta R)) - ((R-\Delta R)/(R-\Delta R+R-\Delta R))]$
    $V_{out} = V_{supply} * [((R+\Delta R)/(2R+2\Delta R)) - ((R-\Delta R)/(2R-2\Delta R))]$
    $V_{out} = V_{supply} * [((R+\Delta R)/2(R+\Delta R)) - ((R-\Delta R)/2(R-\Delta R))]$
    This simplifies to $V_{out} = V_{supply} * [1/2 - 1/2] = 0$. This is incorrect.

    **Correct Approach for Full Bridge:**
    In a full bridge, if elements 1 and 3 are parallel to the strain, and 2 and 4 are perpendicular, and we apply strain $\epsilon$:
    $R_1$ increases by $\Delta R$
    $R_2$ decreases by $\Delta R$
    $R_3$ increases by $\Delta R$
    $R_4$ decreases by $\Delta R$
    Let's assume strain is applied to a diaphragm. Typically, two piezoresistors are in tension (resistance increases) and two are in compression (resistance decreases).
    If $R_1$ and $R_2$ are in tension (resistance $R+\Delta R$) and $R_3$ and $R_4$ are in compression (resistance $R-\Delta R$):
    $V_{out} = V_{supply} * [(R_3 / (R_3+R_4)) - (R_1 / (R_1+R_2))]$
    $V_{out} = V_{supply} * [((R-\Delta R) / (R-\Delta R + R-\Delta R)) - ((R+\Delta R) / (R+\Delta R + R+\Delta R))]$
    $V_{out} = V_{supply} * [((R-\Delta R) / (2R-2\Delta R)) - ((R+\Delta R) / (2R+2\Delta R))]$
    $V_{out} = V_{supply} * [ (R-\Delta R) / (2(R-\Delta R)) - (R+\Delta R) / (2(R+\Delta R)) ]$
    $V_{out} = V_{supply} * [ 1/2 - 1/2 ] = 0$. Still not right.

    **Using the approximation for small $\Delta R/R$:**
    $V_{out} \approx V_{supply} * \frac{1}{4} (\frac{\Delta R_1}{R_1} - \frac{\Delta R_2}{R_2} + \frac{\Delta R_3}{R_3} - \frac{\Delta R_4}{R_4})$
    In a full bridge, with two elements in tension ($\epsilon > 0$) and two in compression ($\epsilon < 0$):
    Let $R_1$ and $R_2$ be in tension, so $\Delta R_1 = R \cdot GF \cdot \epsilon$ and $\Delta R_2 = R \cdot GF \cdot \epsilon$.
    Let $R_3$ and $R_4$ be in compression, so $\Delta R_3 = R \cdot GF \cdot (-\epsilon)$ and $\Delta R_4 = R \cdot GF \cdot (-\epsilon)$.
    Assuming all resistors are initially R.
    $V_{out} \approx \frac{V_{supply}}{4} [ \frac{R \cdot GF \cdot \epsilon}{R} - \frac{R \cdot GF \cdot (-\epsilon)}{R} + \frac{R \cdot GF \cdot (-\epsilon)}{R} - \frac{R \cdot GF \cdot \epsilon}{R} ]$
    $V_{out} \approx \frac{V_{supply}}{4} [ GF \cdot \epsilon - GF \cdot (-\epsilon) + GF \cdot (-\epsilon) - GF \cdot \epsilon ]$
    $V_{out} \approx \frac{V_{supply}}{4} [ GF \cdot \epsilon + GF \cdot \epsilon - GF \cdot \epsilon - GF \cdot \epsilon ] = 0$. This is for specific bridge configurations.

    **The most common full bridge configuration for pressure sensing:**
    Two resistors in tension (e.g., at the edges of a diaphragm) and two in compression (e.g., at the center).
    Let $R_1, R_2$ be in tension: $R_1 = R(1+GF\epsilon)$, $R_2 = R(1+GF\epsilon)$
    Let $R_3, R_4$ be in compression: $R_3 = R(1-GF\epsilon)$, $R_4 = R(1-GF\epsilon)$
    If $R_1$ and $R_3$ are on one diagonal, and $R_2$ and $R_4$ are on the other.
    $V_{out} = V_{supply} * [(R_1/(R_1+R_2)) - (R_3/(R_3+R_4))]$
    $V_{out} = V_{supply} * [((R+GF\epsilon R)/(R+GF\epsilon R + R+GF\epsilon R)) - ((R-GF\epsilon R)/(R-GF\epsilon R + R-GF\epsilon R))]$
    $V_{out} = V_{supply} * [((R(1+GF\epsilon))/(2R(1+GF\epsilon))) - ((R(1-GF\epsilon))/(2R(1-GF\epsilon)))]$
    $V_{out} = V_{supply} * [1/2 - 1/2] = 0$. This suggests my assignment of resistors in the bridge is wrong for the output calculation.

    **Standard Full Bridge Output Derivation:**
    Consider a bridge with $R_1$ and $R_3$ changing with strain, and $R_2$ and $R_4$ constant.
    $V_{out} = V_{supply} * (R_3/(R_3+R_4) - R_1/(R_1+R_2))$
    If $R_1 = R(1+GF\epsilon)$ and $R_3 = R(1-GF\epsilon)$, and $R_2=R_4=R$:
    $V_{out} = V_{supply} * ( (R(1-GF\epsilon))/(R(1-GF\epsilon)+R) - (R(1+GF\epsilon))/(R(1+GF\epsilon)+R) )$
    $V_{out} = V_{supply} * ( (R(1-GF\epsilon))/(R(2-GF\epsilon)) - (R(1+GF\epsilon))/(R(2+GF\epsilon)) )$
    $V_{out} = V_{supply} * ( (1-GF\epsilon)/(2-GF\epsilon) - (1+GF\epsilon)/(2+GF\epsilon) )$
    For small $GF\epsilon$, we can use approximations: $(1-x)/(2-x) \approx (1-x)/2 * (1+x/2) \approx 1/2 - x/4$.
    $V_{out} \approx V_{supply} * ( (1/2 - GF\epsilon/4) - (1/2 + GF\epsilon/4) )$
    $V_{out} \approx V_{supply} * (-GF\epsilon/2)$ --- This is still not the standard form.

    **Let's use the formula for a full bridge:**
    $V_{out} = V_{supply} * GF * \epsilon_{effective}$
    Where $\epsilon_{effective}$ is the sum of strains in the arms contributing to the imbalance.
    In a typical pressure sensor full bridge configuration:
    *   Two elements are in tension: Resistance $R(1+GF\epsilon)$
    *   Two elements are in compression: Resistance $R(1-GF\epsilon)$
    When connected as a full bridge:
    The output voltage is approximately: $V_{out} \approx V_{supply} \times \frac{1}{2} \times GF \times \epsilon$ (This is for a half bridge, if configured correctly).

    **For a full bridge with symmetric strain:**
    Two arms increase resistance by $\Delta R$, two decrease by $\Delta R$.
    $V_{out} = V_{supply} \times \frac{1}{2} \times \frac{\Delta R_{effective}}{R_{effective}}$
    Where $\Delta R_{effective}$ is the total effective resistance change contributing to the output. In a full bridge with strain $\epsilon$ and $-\epsilon$ in opposite arms, the effective imbalance is often considered to be $4 \times (\Delta R / R)$.
    $V_{out} \approx \frac{V_{supply}}{2} \times \frac{\Delta R}{R} = \frac{V_{supply}}{2} \times GF \times \epsilon$
    This formula is for a half-bridge.

    **The correct formula for a full bridge:**
    If two arms have $R+\Delta R$ and two arms have $R-\Delta R$:
    $V_{out} = V_{supply} \times \frac{1}{4} \times \left(\frac{\Delta R_1}{R_1} - \frac{\Delta R_2}{R_2} + \frac{\Delta R_3}{R_3} - \frac{\Delta R_4}{R_4}\right)$ is not the right formula for voltage difference.

    Consider the voltage difference between the midpoints of the two halves of the bridge.
    $V_{mid1} = V_{supply} \times R_2/(R_1+R_2)$
    $V_{mid2} = V_{supply} \times R_4/(R_3+R_4)$
    $V_{out} = V_{mid1} - V_{mid2}$
    Let $R_1 = R+\Delta R$, $R_2=R+\Delta R$, $R_3=R-\Delta R$, $R_4=R-\Delta R$.
    $V_{mid1} = V_{supply} \times (R+\Delta R) / (R+\Delta R + R+\Delta R) = V_{supply} \times (R+\Delta R) / (2R+2\Delta R) = V_{supply}/2$
    $V_{mid2} = V_{supply} \times (R-\Delta R) / (R-\Delta R + R-\Delta R) = V_{supply} \times (R-\Delta R) / (2R-2\Delta R) = V_{supply}/2$
    $V_{out} = V_{supply}/2 - V_{supply}/2 = 0$. Still 0!

    **The correct arrangement for maximum output:**
    Place the two tension resistors ($R_1, R_2$) in diagonally opposite arms, and the two compression resistors ($R_3, R_4$) in the other two diagonally opposite arms.
    Let $R_1$ and $R_3$ be tension ($R+\Delta R$). Let $R_2$ and $R_4$ be compression ($R-\Delta R$).
    $V_{mid1} = V_{supply} \times R_3/(R_1+R_3) = V_{supply} \times (R-\Delta R) / (R+\Delta R + R-\Delta R) = V_{supply} \times (R-\Delta R) / (2R)$
    $V_{mid2} = V_{supply} \times R_2/(R_2+R_4) = V_{supply} \times (R+\Delta R) / (R+\Delta R + R-\Delta R) = V_{supply} \times (R+\Delta R) / (2R)$
    $V_{out} = V_{mid2} - V_{mid1} = V_{supply} \times (R+\Delta R)/(2R) - V_{supply} \times (R-\Delta R)/(2R)$
    $V_{out} = (V_{supply}/2R) \times (R+\Delta R - (R-\Delta R))$
    $V_{out} = (V_{supply}/2R) \times (2\Delta R)$
    $V_{out} = V_{supply} \times (\Delta R / R)$

    Now, substitute $\Delta R = 75 \Omega$ and $R = 1000 \Omega$:
    $V_{out} = 5V \times (75 \Omega / 1000 \Omega)$
    $V_{out} = 5V \times 0.075$
    $V_{out} = 0.375V$

    So, the output voltage is $0.375V$.

---

### 8. Important Points to Remember

*   **Piezoresistive Effect:** Change in resistivity due to strain.
*   **Gauge Factor (GF):** Key parameter determining sensitivity. Semiconductors have much higher GF than metals.
*   **Wheatstone Bridge:** Essential for measuring small resistance changes and providing temperature compensation. Full bridge configuration offers maximum sensitivity.
*   **Temperature Sensitivity:** A major challenge requiring compensation techniques.
*   **Applications:** Widely used for pressure, force, acceleration, and strain measurement.
*   **Silicon:** The most common material for piezoresistive sensors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
