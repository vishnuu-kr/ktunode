---
title: "Numerical calculations for torque transmission by clutches."
subject: "AUTOMOBILE ENGINEERING"
module: "Module 3: Power Trains: General arrangement of clutch, Principle of friction clutches, Constructional details, Single plate and multi"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d30"
status: "completed"
scrapedAt: "2026-05-20T18:10:25.861Z"
---
# Module 3: Power Trains - Numerical Calculations for Torque Transmission by Clutches

## 1. Introduction to Clutches

A clutch is a mechanical device that engages and disengages power transmission, especially between a driving and a driven shaft. In automobiles, it's primarily used to connect or disconnect the engine from the transmission, allowing for smooth gear changes and starting from rest.

**Learning Outcome Addressed:**

*   Understanding the general arrangement of a clutch (implicitly, as it leads to torque transmission calculations).
*   Understanding the principle of friction clutches.
*   Explaining power train components and functioning (CO4: K3).

**Key Concepts & Definitions:**

*   **Torque:** The twisting force that causes rotation. Measured in Newton-meters (Nm) or pound-feet (lb-ft).
*   **Friction:** The force that opposes motion between two surfaces in contact.
*   **Coefficient of Friction ($\mu$):** A dimensionless ratio of the frictional force to the normal force pressing the surfaces together.
*   **Normal Force (W):** The force acting perpendicular to the surfaces in contact.
*   **Axial Force ($F_a$):** The force that presses the clutch plates together, generating the normal force.

**Textbook References:**

*   **Kirpal Singh, Vol. 1:** Likely provides foundational principles of clutch operation.
*   **S K Gupta:** Expected to cover the mechanics and torque calculations.
*   **Hillier and Peter Coobes:** Might offer practical explanations and applications.

---

## 2. Principle of Friction Clutches

Friction clutches work on the principle of **dry friction**. When two surfaces are pressed against each other, a frictional force is generated that can transmit torque. The key is to maximize this frictional force to transmit the required engine torque without slipping.

**Key Concepts & Definitions:**

*   **Frictional Torque:** The torque that can be transmitted by the clutch before slippage occurs. It's directly proportional to the normal force pressing the surfaces and the coefficient of friction.
*   **Contact Pressure:** The force per unit area acting between the friction surfaces.
*   **Uniform Pressure Theory:** Assumes that the pressure distribution across the friction surface is uniform.
*   **Uniform Wear Theory:** Assumes that the wear rate across the friction surface is uniform, which leads to a specific pressure distribution.

**Important Points to Remember:**

*   The greater the axial force and the coefficient of friction, the higher the frictional torque that can be transmitted.
*   The area of contact and the radius of contact also play crucial roles.

---

## 3. Numerical Calculations for Torque Transmission

The torque-transmitting capacity of a friction clutch is determined by the frictional forces developed between the mating friction surfaces. We will explore calculations based on two common theories: Uniform Pressure and Uniform Wear.

### 3.1 Torque Transmission based on Uniform Pressure Theory

This theory assumes that the pressure distribution is uniform across the entire friction surface.

**Assumptions:**

*   Pressure ($p$) is constant over the contact area.
*   The clutch surface is an annular ring (between inner radius $r_1$ and outer radius $r_2$).

**Derivation:**

Consider a small annular ring of radius $r$ and width $dr$.

*   **Normal Force on the ring ($dN$):**
    *   Area of the ring ($dA$) = $2\pi r \cdot dr$
    *   Pressure ($p$) = Normal Force / Area
    *   Normal Force on the ring ($dN$) = $p \cdot dA = p \cdot (2\pi r \cdot dr)$

*   **Frictional Force on the ring ($dF$):**
    *   Frictional Force = $\mu \cdot dN$
    *   $dF = \mu \cdot p \cdot (2\pi r \cdot dr)$

*   **Frictional Torque on the ring ($dT$):**
    *   Torque = Force $\times$ Radius
    *   $dT = dF \cdot r = (\mu \cdot p \cdot 2\pi r \cdot dr) \cdot r$
    *   $dT = 2\pi \mu p r^2 dr$

*   **Total Frictional Torque ($T_{total}$):**
    *   Integrate $dT$ from the inner radius ($r_1$) to the outer radius ($r_2$):
    *   $T_{total} = \int_{r_1}^{r_2} 2\pi \mu p r^2 dr$
    *   $T_{total} = 2\pi \mu p \int_{r_1}^{r_2} r^2 dr$
    *   $T_{total} = 2\pi \mu p \left[ \frac{r^3}{3} \right]_{r_1}^{r_2}$
    *   $T_{total} = 2\pi \mu p \left( \frac{r_2^3 - r_1^3}{3} \right)$

*   **Relating Pressure to Axial Force:**
    *   The total axial force ($F_a$) is the integral of pressure over the entire contact area.
    *   $F_a = \int_{r_1}^{r_2} p \cdot dA = \int_{r_1}^{r_2} p \cdot (2\pi r \cdot dr)$
    *   Since $p$ is constant: $F_a = p \cdot (Area) = p \cdot \pi (r_2^2 - r_1^2)$
    *   Therefore, $p = \frac{F_a}{\pi (r_2^2 - r_1^2)}$

*   **Substituting 'p' back into the Torque equation:**
    *   $T_{total} = 2\pi \mu \left( \frac{F_a}{\pi (r_2^2 - r_1^2)} \right) \left( \frac{r_2^3 - r_1^3}{3} \right)$
    *   $T_{total} = \frac{2}{3} \mu F_a \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$

*   **Simplification using mean radius:**
    *   The mean radius ($r_m$) for uniform pressure is often approximated as $r_m = \frac{r_1 + r_2}{2}$.
    *   The torque equation can be simplified for a single plate clutch as:
        $T = \mu \cdot F_a \cdot r_m$ (where $r_m$ is the effective radius)
    *   For uniform pressure, it can be shown that: $r_m = \frac{2}{3} \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$.
    *   So, $T = \mu F_a \left( \frac{2}{3} \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2} \right)$

**Textbook References:**

*   **Kirpal Singh, Vol. 1:** Expected to provide this derivation and formula.
*   **S K Gupta:** Will likely have detailed examples.
*   **Heisler:** May offer a more in-depth theoretical treatment.

### 3.2 Torque Transmission based on Uniform Wear Theory

This theory assumes that the wear is uniform across the friction surface. This implies that the product of pressure and radius is constant ($p \cdot r = C$).

**Assumptions:**

*   Wear rate is uniform across the surface. This leads to $p \cdot r = C$ (constant).
*   The clutch surface is an annular ring.

**Derivation:**

Consider a small annular ring of radius $r$ and width $dr$.

*   **Pressure on the ring ($p$):**
    *   Since $p \cdot r = C$, then $p = \frac{C}{r}$.

*   **Normal Force on the ring ($dN$):**
    *   Area of the ring ($dA$) = $2\pi r \cdot dr$
    *   $dN = p \cdot dA = \frac{C}{r} \cdot (2\pi r \cdot dr) = 2\pi C \cdot dr$

*   **Frictional Force on the ring ($dF$):**
    *   $dF = \mu \cdot dN = \mu \cdot (2\pi C \cdot dr)$

*   **Frictional Torque on the ring ($dT$):**
    *   $dT = dF \cdot r = (\mu \cdot 2\pi C \cdot dr) \cdot r = 2\pi \mu C r \cdot dr$

*   **Total Frictional Torque ($T_{total}$):**
    *   Integrate $dT$ from the inner radius ($r_1$) to the outer radius ($r_2$):
    *   $T_{total} = \int_{r_1}^{r_2} 2\pi \mu C r \cdot dr$
    *   $T_{total} = 2\pi \mu C \int_{r_1}^{r_2} r \cdot dr$
    *   $T_{total} = 2\pi \mu C \left[ \frac{r^2}{2} \right]_{r_1}^{r_2}$
    *   $T_{total} = 2\pi \mu C \left( \frac{r_2^2 - r_1^2}{2} \right)$
    *   $T_{total} = \pi \mu C (r_2^2 - r_1^2)$

*   **Relating Constant 'C' to Axial Force:**
    *   The total axial force ($F_a$) is the integral of pressure over the entire contact area.
    *   $F_a = \int_{r_1}^{r_2} p \cdot dA = \int_{r_1}^{r_2} \frac{C}{r} \cdot (2\pi r \cdot dr) = \int_{r_1}^{r_2} 2\pi C \cdot dr$
    *   $F_a = 2\pi C [r]_{r_1}^{r_2} = 2\pi C (r_2 - r_1)$
    *   Therefore, $C = \frac{F_a}{2\pi (r_2 - r_1)}$

*   **Substituting 'C' back into the Torque equation:**
    *   $T_{total} = \pi \mu \left( \frac{F_a}{2\pi (r_2 - r_1)} \right) (r_2^2 - r_1^2)$
    *   $T_{total} = \frac{1}{2} \mu F_a \frac{r_2^2 - r_1^2}{r_2 - r_1}$
    *   Since $r_2^2 - r_1^2 = (r_2 - r_1)(r_2 + r_1)$, we can simplify:
    *   $T_{total} = \frac{1}{2} \mu F_a (r_2 + r_1)$

*   **Simplification using mean radius:**
    *   The mean radius ($r_m$) for uniform wear is $r_m = \frac{r_1 + r_2}{2}$.
    *   So, $T_{total} = \mu F_a \left( \frac{r_1 + r_2}{2} \right) = \mu F_a r_m$.

**Comparison of Theories:**

*   The uniform wear theory generally gives a slightly higher torque capacity than the uniform pressure theory, especially when the outer radius is significantly larger than the inner radius.
*   In practice, clutch surfaces tend to wear more uniformly than what the uniform pressure theory assumes, making the uniform wear theory a more realistic model.

**Textbook References:**

*   **Kirpal Singh, Vol. 1:** Will likely cover this theory and its derivation.
*   **S K Gupta:** Essential for understanding practical applications and calculations.
*   **Automotive Mechanical and Electrical Systems (Denton & Pells):** Might offer practical insights into clutch design and performance based on wear.

### 3.3 Torque Transmission for Single and Multi-Plate Clutches

#### 3.3.1 Single Plate Clutch

A single plate clutch has one pair of friction surfaces. The torque transmitted is given by the formulas derived above.

*   **Torque (Uniform Pressure):** $T = \frac{2}{3} \mu F_a \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$
*   **Torque (Uniform Wear):** $T = \mu F_a \left( \frac{r_1 + r_2}{2} \right)$

**Key Variables:**

*   $T$: Transmitted torque (Nm)
*   $\mu$: Coefficient of friction of the clutch lining
*   $F_a$: Axial clamping force pressing the plates together (N)
*   $r_1$: Inner radius of the friction surface (m)
*   $r_2$: Outer radius of the friction surface (m)

#### 3.3.2 Multi-Plate Clutch

A multi-plate clutch uses multiple friction surfaces to transmit higher torques within a compact space. If there are 'n' pairs of friction surfaces, the total torque transmitted is 'n' times the torque transmitted by a single pair.

*   **Number of friction surfaces:** In a multi-plate clutch, there are (n-1) driven plates and 'n' driving plates, or vice-versa, leading to 'n' pairs of friction surfaces.
*   **Total Torque (Uniform Pressure):** $T = n \times \frac{2}{3} \mu F_a \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$
*   **Total Torque (Uniform Wear):** $T = n \times \mu F_a \left( \frac{r_1 + r_2}{2} \right)$

**Important Note:** The axial force ($F_a$) in the formula is the force applied to *one* pair of friction surfaces. The total axial force applied by the clamping mechanism is usually distributed among these pairs.

**Example:** A 3-plate clutch typically has 2 driving plates and 2 driven plates, meaning there are 2 pairs of friction surfaces. So, $n=2$.

**Learning Outcome Addressed:**

*   Understanding the constructional details of single and multi-plate clutches (in relation to torque calculation).
*   Calculating torque transmission for different clutch types.

**Textbook References:**

*   **Kirpal Singh, Vol. 1:** Likely has specific sections on multi-plate clutches.
*   **S K Gupta:** Essential for comparative calculations and examples involving multi-plate clutches.
*   **Hillier and Peter Coobes:** Good for practical context and application of multi-plate clutches.

---

## 4. Factors Affecting Torque Transmission

Several factors influence the amount of torque a clutch can transmit:

*   **Axial Clamping Force ($F_a$):** Higher axial force increases the normal force and thus torque capacity. This force is generated by springs or diaphragm in a clutch.
*   **Coefficient of Friction ($\mu$):** A higher coefficient of friction between the clutch facing material and the flywheel/pressure plate leads to greater torque capacity.
*   **Effective Radius ($r_m$):** A larger mean radius increases the torque arm, leading to higher torque capacity for the same axial force. This is related to the inner and outer radii of the friction surfaces.
*   **Number of Friction Surfaces (n):** For multi-plate clutches, increasing the number of friction surfaces significantly increases the torque capacity.
*   **Contact Area:** Larger contact area can potentially handle higher forces, but the distribution (pressure or wear) matters more for torque calculation.
*   **Condition of Clutch Surfaces:** Wear, glazing, or contamination of clutch facings can reduce the coefficient of friction and hence torque capacity.
*   **Heat Dissipation:** Clutches generate heat during engagement. If the heat cannot be dissipated effectively, it can lead to fading (loss of friction) and reduced torque capacity.

**Textbook References:**

*   **Automotive Control Systems (Kiencke & Nielsen):** Might touch upon how clutch performance relates to control and temperature.
*   **Automotive Lubricants Reference Book (Caines):** Relevant for understanding how lubricants (or their absence) affect friction.

---

## 5. Practice Questions and Exercises

**Instructions:** Use the formulas derived above. Assume uniform wear theory unless stated otherwise.

**Question 1:**
A single-plate clutch has an outer radius of 150 mm and an inner radius of 100 mm. The axial clamping force applied is 5000 N. The coefficient of friction between the clutch plates is 0.3. Calculate the maximum torque that can be transmitted by the clutch using the uniform wear theory.

**Answer 1:**
*   $r_1 = 100 \text{ mm} = 0.1 \text{ m}$
*   $r_2 = 150 \text{ mm} = 0.15 \text{ m}$
*   $F_a = 5000 \text{ N}$
*   $\mu = 0.3$

Using the uniform wear theory formula: $T = \mu F_a \left( \frac{r_1 + r_2}{2} \right)$
Mean radius, $r_m = \frac{0.1 + 0.15}{2} = \frac{0.25}{2} = 0.125 \text{ m}$
$T = 0.3 \times 5000 \text{ N} \times 0.125 \text{ m}$
$T = 1500 \text{ N} \times 0.125 \text{ m}$
$T = 187.5 \text{ Nm}$

**Question 2:**
For the same clutch as in Question 1, calculate the maximum torque using the uniform pressure theory.

**Answer 2:**
*   $r_1 = 0.1 \text{ m}$
*   $r_2 = 0.15 \text{ m}$
*   $F_a = 5000 \text{ N}$
*   $\mu = 0.3$

Using the uniform pressure theory formula: $T = \frac{2}{3} \mu F_a \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$
$r_1^3 = (0.1)^3 = 0.001 \text{ m}^3$
$r_2^3 = (0.15)^3 = 0.003375 \text{ m}^3$
$r_1^2 = (0.1)^2 = 0.01 \text{ m}^2$
$r_2^2 = (0.15)^2 = 0.0225 \text{ m}^2$

$\frac{r_2^3 - r_1^3}{r_2^2 - r_1^2} = \frac{0.003375 - 0.001}{0.0225 - 0.01} = \frac{0.002375}{0.0125} = 0.19$

$T = \frac{2}{3} \times 0.3 \times 5000 \text{ N} \times 0.19 \text{ m}$
$T = 0.2 \times 5000 \text{ N} \times 0.19 \text{ m}$
$T = 1000 \text{ N} \times 0.19 \text{ m}$
$T = 190 \text{ Nm}$

*(Note: As expected, the uniform pressure theory gives a slightly higher torque capacity in this case).*

**Question 3:**
A multi-plate clutch has 4 pairs of friction surfaces. The inner and outer radii of each friction surface are 80 mm and 120 mm respectively. The coefficient of friction is 0.35, and the total axial force applied by the springs is 7200 N, distributed equally among the pairs. Calculate the total torque that can be transmitted assuming uniform wear.

**Answer 3:**
*   Number of friction pairs ($n$) = 4
*   $r_1 = 80 \text{ mm} = 0.08 \text{ m}$
*   $r_2 = 120 \text{ mm} = 0.12 \text{ m}$
*   $\mu = 0.35$
*   Total axial force = 7200 N
*   Axial force per pair ($F_a$) = $7200 \text{ N} / 4 = 1800 \text{ N}$

Using the uniform wear theory formula for multi-plate clutches: $T = n \times \mu F_a \left( \frac{r_1 + r_2}{2} \right)$
Mean radius, $r_m = \frac{0.08 + 0.12}{2} = \frac{0.20}{2} = 0.1 \text{ m}$
$T = 4 \times 0.35 \times 1800 \text{ N} \times 0.1 \text{ m}$
$T = 4 \times 0.35 \times 180 \text{ Nm}$
$T = 4 \times 63 \text{ Nm}$
$T = 252 \text{ Nm}$

**Question 4:**
What would be the required axial clamping force for a single-plate clutch, designed using the uniform wear theory, to transmit 200 Nm of torque? The clutch has an inner radius of 90 mm and an outer radius of 140 mm, and the coefficient of friction is 0.3.

**Answer 4:**
*   $T = 200 \text{ Nm}$
*   $r_1 = 90 \text{ mm} = 0.09 \text{ m}$
*   $r_2 = 140 \text{ mm} = 0.14 \text{ m}$
*   $\mu = 0.3$

Using the uniform wear theory formula: $T = \mu F_a \left( \frac{r_1 + r_2}{2} \right)$
Mean radius, $r_m = \frac{0.09 + 0.14}{2} = \frac{0.23}{2} = 0.115 \text{ m}$
$200 \text{ Nm} = 0.3 \times F_a \times 0.115 \text{ m}$
$200 = 0.0345 \times F_a$
$F_a = \frac{200}{0.0345} \text{ N}$
$F_a \approx 5797.1 \text{ N}$

---

## 6. Summary and Important Points to Remember

*   **Clutch Function:** Connects/disconnects engine from transmission for smooth operation.
*   **Principle:** Dry friction between mating surfaces.
*   **Torque Transmission Formulas:**
    *   **Uniform Pressure:** $T = \frac{2}{3} \mu F_a \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$
    *   **Uniform Wear:** $T = \mu F_a \left( \frac{r_1 + r_2}{2} \right)$
*   **Mean Radius:**
    *   Uniform Pressure: $r_m = \frac{2}{3} \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$
    *   Uniform Wear: $r_m = \frac{r_1 + r_2}{2}$
*   **Multi-Plate Clutch:** Total torque is $n$ times the torque of a single pair of friction surfaces, where $n$ is the number of pairs.
*   **Key Factors:** Axial force ($F_a$), coefficient of friction ($\mu$), effective radius ($r_m$), and number of surfaces ($n$) are critical for torque transmission.
*   **Practicality:** Uniform wear theory is generally considered more realistic for clutch performance.

**Learning Outcomes Addressed:**

*   All learning outcomes related to numerical calculations for torque transmission by clutches.
*   CO4: Explain the power train (clutch's role) (K3).

---
This comprehensive set of study notes covers the fundamental principles and numerical calculations for torque transmission in clutches, drawing upon the specified textbooks and aligning with the learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
