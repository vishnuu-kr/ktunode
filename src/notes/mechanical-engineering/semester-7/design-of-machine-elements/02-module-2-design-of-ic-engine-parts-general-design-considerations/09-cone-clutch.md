---
title: "Cone clutch"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 2: Design of IC Engine parts: General design considerations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d67"
status: "completed"
scrapedAt: "2026-05-20T18:10:54.679Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 2: Design of IC Engine Parts: General Design Considerations

## Topic: Cone Clutch

### 1. Introduction to Cone Clutches

Cone clutches are a type of friction clutch used to transmit torque between rotating shafts. They are particularly effective for engaging and disengaging power smoothly, making them suitable for applications where controlled engagement is crucial.

**Key Concepts:**

*   **Friction:** The fundamental principle behind the operation of a cone clutch is friction between two mating conical surfaces.
*   **Engagement:** When the conical surfaces are brought into contact, friction opposes relative motion, thereby transmitting torque.
*   **Disengagement:** When the conical surfaces are separated, the connection is broken, and no torque is transmitted.

**Importance in IC Engines:**

While not as prevalent as in some other machinery, cone clutches can be found in specific IC engine applications, particularly in older designs or specialized vehicles where smooth engagement and a compact design are desirable. They are often used in starting mechanisms or to engage auxiliary drives.

**Comparison with other Clutches:**

*   **Disc Clutches:** Disc clutches typically use flat surfaces for friction and can handle higher torque in a more compact axial space. However, they might offer less smooth engagement compared to cone clutches.
*   **Centrifugal Clutches:** Centrifugal clutches engage automatically based on engine speed, making them ideal for applications like automatic transmissions or starting systems where manual engagement isn't required.

**Referenced Textbooks:**

*   **Bhandari, V. B. (2020).** *Design of Machine Elements*. This textbook is a primary source for general design principles and specific component design, including clutches.
*   **Norton, R. L. (2018).** *Machine Design – An Integrated Approach*. Norton's text emphasizes a systems approach to design, which is relevant for understanding how a cone clutch fits into a larger machine.
*   **Sharma, P.C., & Agarwal, D.K. (2017).** *Machine Design*. Provides a solid foundation in fundamental machine design concepts applicable to clutches.

### 2. Types of Cone Clutches

Cone clutches can be broadly classified based on the direction of application of the engaging force:

*   **Single Cone Clutch:** The simplest type, where one cone is male and the other is female.
*   **Multiple Cone Clutch:** Utilizes multiple pairs of conical surfaces to increase the torque transmitting capacity. This is less common in IC Engine applications but is used in heavy-duty machinery.

**Further Classification:**

*   **Convex Cone Clutch:** The engaging surface of the male cone is convex.
*   **Concave Cone Clutch:** The engaging surface of the male cone is concave.
*   **Full Cone Clutch:** The entire surface of the cone is used for friction.
*   **Hollow Cone Clutch:** The male cone is hollowed out to reduce weight and inertia.

**Referenced Textbooks:**

*   **Raghavendra K. (2019).** *Design of Machine Elements II*. This book is likely to delve into specific types and their variations.
*   **Spotts, M. F., & Shoup, T. E. (2019).** *Design of Machine Elements*. Will provide detailed descriptions and comparisons of different clutch types.

### 3. Design Considerations for Cone Clutches

The design of a cone clutch involves several critical factors to ensure reliable and efficient operation.

**3.1. Torque Transmitting Capacity:**

The primary objective is to design a clutch that can transmit the required torque from the driving shaft to the driven shaft.

*   **Torque due to friction:** The torque transmitted by a cone clutch is a function of the axial force applied, the coefficient of friction, the cone angle, and the radius of the frictional surfaces.

    *   **Derivation:**
        *   Consider a small elemental annular ring on the cone surface with radius $r$ and width $dr$.
        *   The area of this ring is $dA = 2\pi r dr$.
        *   Let the axial force on this ring be $dF_a$.
        *   The normal force on this ring is $dN = \frac{dF_a}{\sin \alpha}$, where $\alpha$ is the cone semi-vertical angle.
        *   The frictional force is $dF_f = \mu dN = \mu \frac{dF_a}{\sin \alpha}$.
        *   The torque due to this frictional force is $dT = dF_f \cdot r = \mu \frac{dF_a}{\sin \alpha} \cdot r$.
        *   To find the total torque, we need to integrate this expression over the entire frictional surface.

*   **Types of Friction:**

    *   **Uniform Pressure Theory:** Assumes that the pressure distribution on the frictional surface is uniform. This is a simplification.
        *   For uniform pressure, $P = \frac{W}{\text{Area}}$. However, it's more accurately derived as $P = C$, a constant.
        *   $dF_a = P dA \sin \alpha = P (2\pi r dr) \sin \alpha$.
        *   $dT = \mu dN \cdot r = \mu (P dA / \sin \alpha) \cdot r = \mu (P (2\pi r dr) / \sin \alpha) \cdot r = 2\pi \mu P r^2 dr / \sin \alpha$.
        *   Integrating from $r_1$ (inner radius) to $r_2$ (outer radius):
            $T = \int_{r_1}^{r_2} \frac{2\pi \mu P r^2}{\sin \alpha} dr = \frac{2\pi \mu P}{\sin \alpha} \left[\frac{r^3}{3}\right]_{r_1}^{r_2} = \frac{2\pi \mu P}{3 \sin \alpha} (r_2^3 - r_1^3)$.
        *   The total axial force $W$ is given by $W = \int_{r_1}^{r_2} P dA \sin \alpha = \int_{r_1}^{r_2} P (2\pi r dr) \sin \alpha = 2\pi P \sin \alpha \left[\frac{r^2}{2}\right]_{r_1}^{r_2} = \pi P \sin \alpha (r_2^2 - r_1^2)$.
        *   Substituting $P = \frac{W}{\pi \sin \alpha (r_2^2 - r_1^2)}$ into the torque equation:
            $T = \frac{2\pi \mu}{3 \sin \alpha} \frac{W}{\pi \sin \alpha (r_2^2 - r_1^2)} (r_2^3 - r_1^3) = \frac{2\pi \mu W}{3 \sin \alpha} \frac{(r_2 - r_1)(r_2^2 + r_1 r_2 + r_1^2)}{\pi \sin \alpha (r_2 - r_1)(r_2 + r_1)}$.
            This simplifies to $T = \frac{2}{3} \mu W \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2} \frac{1}{\sin \alpha}$.
        *   This can be further approximated using the mean radius $r_m = \frac{r_1 + r_2}{2}$ and mean coefficient of friction $\mu_{mean} = \frac{2}{3} \mu \frac{r_2^2 + r_1 r_2 + r_1^2}{r_2^2 - r_1^2}$.
            A common approximation is $T \approx \mu W r_m \frac{1}{\sin \alpha}$.

    *   **Uniform Wear Theory:** Assumes that the wear on the frictional surfaces is uniform, which leads to the intensity of pressure being inversely proportional to the radius ($P \propto 1/r$). This is a more realistic assumption for lightly loaded clutches.
        *   For uniform wear, $Pr = C'$, a constant. Thus, $P = C'/r$.
        *   $dF_a = P dA \sin \alpha = (C'/r) (2\pi r dr) \sin \alpha = 2\pi C' \sin \alpha dr$.
        *   $dN = dF_a / \sin \alpha = 2\pi C' dr$.
        *   $dF_f = \mu dN = 2\pi \mu C' dr$.
        *   $dT = dF_f \cdot r = (2\pi \mu C' dr) \cdot r = 2\pi \mu C' r dr$.
        *   Integrating from $r_1$ to $r_2$:
            $T = \int_{r_1}^{r_2} 2\pi \mu C' r dr = 2\pi \mu C' \left[\frac{r^2}{2}\right]_{r_1}^{r_2} = \pi \mu C' (r_2^2 - r_1^2)$.
        *   The total axial force $W$ is given by $W = \int_{r_1}^{r_2} P dA \sin \alpha = \int_{r_1}^{r_2} (C'/r) (2\pi r dr) \sin \alpha = 2\pi C' \sin \alpha \int_{r_1}^{r_2} dr = 2\pi C' \sin \alpha (r_2 - r_1)$.
        *   From this, $C' = \frac{W}{2\pi \sin \alpha (r_2 - r_1)}$.
        *   Substituting $C'$ into the torque equation:
            $T = \pi \mu \frac{W}{2\pi \sin \alpha (r_2 - r_1)} (r_2^2 - r_1^2) = \frac{\mu W}{2 \sin \alpha} (r_2 + r_1)$.
        *   Since $r_m = \frac{r_1 + r_2}{2}$, the torque can be written as $T = \mu W r_m \frac{1}{\sin \alpha}$. This is a commonly used formula.

    *   **Important Note:** The uniform wear theory generally gives a more accurate result for practical clutch design.

*   **Cone Angle ($\alpha$):**
    *   A smaller cone angle leads to a larger contact area and requires less axial force for a given torque.
    *   However, a smaller angle increases the tendency for the clutch to self-lock.
    *   A larger cone angle requires more axial force but is less prone to self-locking.
    *   A common range for the cone semi-vertical angle is $10^\circ$ to $15^\circ$ to avoid self-locking. The total angle of the cone is $2\alpha$.
    *   The angle of friction, $\lambda$, is such that $\tan \lambda = \mu$. For non-self-locking, $2\alpha > \lambda$.

*   **Coefficient of Friction ($\mu$):**
    *   Depends on the materials of the friction surfaces and the presence of lubricant.
    *   Typical values for dry friction: 0.3 to 0.4. For lubricated surfaces, it can be lower.

*   **Axial Force ($F_a$):**
    *   The axial force is applied by a mechanism (e.g., a spring or a lever system) to engage the clutch.
    *   It must be sufficient to generate the required frictional torque.

**3.2. Material Selection:**

The friction surfaces must be able to withstand the heat generated during engagement and wear.

*   **Friction Lining:** Typically made of materials like asbestos, carbon, or ceramic composites, bonded to a metal backing.
*   **Metal Surfaces:** Usually made of cast iron or steel.
*   **Heat Dissipation:** Materials should have good thermal conductivity to dissipate heat effectively, preventing overheating and glazing of the friction surfaces.

**3.3. Wear Considerations:**

The clutch design must account for wear over time to maintain its performance.

*   **Uniform Wear:** As discussed earlier, assuming uniform wear leads to a more robust design.
*   **Contact Area:** The size of the friction surfaces dictates the contact pressure and the amount of wear.

**3.4. Heat Generation and Dissipation:**

Friction generates heat during engagement, which can affect the clutch's performance and lifespan.

*   **Heat due to sliding:** The energy dissipated as heat during engagement is approximately the work done by friction.
*   **Heat Balance:** The rate of heat generated should be less than or equal to the rate at which heat can be dissipated to the surroundings.
*   **Cooling:** For applications with frequent engagement or heavy loads, provisions for cooling (e.g., fins) might be necessary.

**3.5. Engagement Mechanism:**

The method of applying the axial force influences the ease of operation and control.

*   **Spring-loaded:** Commonly used, where a spring provides the axial force.
*   **Lever-operated:** Allows for manual engagement and disengagement.

**3.6. Self-Locking:**

A critical design consideration for cone clutches.

*   **Condition for Non-Self-Locking:** The cone semi-vertical angle $\alpha$ should be greater than the angle of friction $\lambda$, where $\tan \lambda = \mu$.
    *   So, $2\alpha > \arctan(\mu)$.
*   **Consequences of Self-Locking:** If the clutch self-locks, it may be difficult to disengage, leading to continuous friction and overheating.

**Referenced Textbooks & Data Books:**

*   **Bhandari, V. B. (2020).** *Design of Machine Elements*. Essential for torque calculations and material properties.
*   **Norton, R. L. (2018).** *Machine Design – An Integrated Approach*. For understanding the system context and load analysis.
*   **Bhandari, V. B. (2019).** *Machine Design Data Book*. Provides standard dimensions, material properties, and friction coefficients.
*   **PSG Tech. (2022).** *PSG Design Data*. A comprehensive resource for design data, tables, and formulas.
*   **Mahadevan, K., & Reddy, K. B. (2019).** *Design Data Hand Book*. Another valuable resource for design parameters and formulas.

**Learning Outcomes Covered:**

*   This section directly addresses **CO1** (Model suitable transmission system) and **CO2** (Make use of the design procedure for I C engine components) by outlining the fundamental design steps and considerations for a cone clutch, a potential transmission component.

### 4. Design Procedure for a Cone Clutch

A systematic approach is necessary for designing a cone clutch.

**Step 1: Determine the Required Torque ($T$)**

*   This is based on the power to be transmitted and the speed of the driving shaft.
*   $T = \frac{P \times 1000}{2\pi N / 60}$, where $P$ is power in kW and $N$ is speed in rpm.
*   Factor of safety should be applied to account for shock loads and uncertainties.

**Step 2: Select Materials and Coefficient of Friction ($\mu$)**

*   Choose appropriate materials for the friction lining and the mating surfaces based on wear resistance, thermal properties, and the operating environment.
*   Obtain the coefficient of friction ($\mu$) for the selected materials from design data books.

**Step 3: Select Cone Semi-Vertical Angle ($\alpha$)**

*   Choose $\alpha$ such that the clutch is not self-locking. A common range is $10^\circ$ to $15^\circ$.
*   Ensure $2\alpha > \arctan(\mu)$.

**Step 4: Determine the Mean Radius ($r_m$) or Radii ($r_1, r_2$)**

*   This can be an initial assumption or derived from other design constraints.
*   The width of the friction surface ($b = r_2 - r_1$) is also a design parameter.

**Step 5: Calculate the Axial Force Required ($F_a$)**

*   Using the uniform wear theory formula: $T = \mu W r_m \frac{1}{\sin \alpha}$.
*   Rearrange to find the total axial force $W$: $W = \frac{T \sin \alpha}{\mu r_m}$.
*   Alternatively, using the derived torque formulas based on uniform pressure or wear with specific radii.

**Step 6: Determine the Face Width ($b$)**

*   The face width is related to the mean radius and the cone angle.
*   $r_1 = r_m - b/2$ and $r_2 = r_m + b/2$.
*   The width $b$ is also limited by the pressure that the materials can withstand.
    *   Maximum pressure ($P_{max}$) allowed for the materials.
    *   Using uniform wear theory, $P_{max} = \frac{W}{2\pi \sin \alpha (r_2 - r_1) r_1}$ (at the inner radius).
    *   Using uniform pressure theory, $P_{max} = \frac{W}{\pi \sin \alpha (r_2^2 - r_1^2)}$.

**Step 7: Design the Engaging Mechanism**

*   Determine the springs or levers needed to provide the calculated axial force ($W$).
*   Consider the spring stiffness and deflection or the lever arm lengths and applied forces.

**Step 8: Check for Stresses and Deflections**

*   Analyze stresses in the clutch components (e.g., hub, cone) due to axial forces, bending moments, and torsional loads.
*   Ensure that the deflections of the components do not impede proper engagement or disengagement.

**Step 9: Heat Dissipation Check**

*   Estimate the heat generated during engagement and ensure that it can be dissipated without exceeding the temperature limits of the materials.

**Referenced Textbooks & Data Books:**

*   All previously mentioned textbooks and data books are relevant for the formulas, material properties, and design guidelines.

**Learning Outcomes Covered:**

*   This section directly supports **CO2** (Make use of the design procedure for I C engine components) by providing a step-by-step design methodology. It also contributes to **CO1** by outlining how to approach the design of a transmission component.

### 5. Design Example (Illustrative)

**Problem:** Design a cone clutch to transmit 10 kW power at 1500 rpm. The clutch is to be engaged by a single lever mechanism. The coefficient of friction for the clutch surfaces is 0.3. The maximum allowable intensity of pressure is $0.1 \, N/mm^2$. Assume uniform wear conditions.

**Solution:**

**Step 1: Calculate the Torque ($T$)**

*   Power $P = 10 \, kW = 10 \times 1000 \, W$
*   Speed $N = 1500 \, rpm$
*   $T = \frac{P \times 1000}{2\pi N / 60} = \frac{10 \times 1000}{2\pi \times 1500 / 60} = \frac{10000}{50\pi} \approx 63.66 \, Nm = 63660 \, Nmm$.

**Step 2: Select Cone Angle ($\alpha$) and Friction Coefficient ($\mu$)**

*   $\mu = 0.3$. Angle of friction $\lambda = \arctan(0.3) \approx 16.7^\circ$.
*   To avoid self-locking, let's choose $2\alpha = 30^\circ$, so $\alpha = 15^\circ$.
*   Check: $2\alpha = 30^\circ > \lambda = 16.7^\circ$. So, it is not self-locking.

**Step 3: Assume Mean Radius ($r_m$)**

*   Let's assume a mean radius $r_m = 80 \, mm$.

**Step 4: Calculate Axial Force ($W$)**

*   Using the uniform wear formula: $T = \mu W r_m \frac{1}{\sin \alpha}$
*   $63660 = 0.3 \times W \times 80 \times \frac{1}{\sin(15^\circ)}$
*   $63660 = 0.3 \times W \times 80 \times 3.864$
*   $W = \frac{63660}{0.3 \times 80 \times 3.864} \approx 728.8 \, N$.

**Step 5: Calculate Inner and Outer Radii ($r_1, r_2$) and Face Width ($b$)**

*   Let's assume a face width $b = 25 \, mm$.
*   $r_1 = r_m - b/2 = 80 - 25/2 = 80 - 12.5 = 67.5 \, mm$.
*   $r_2 = r_m + b/2 = 80 + 25/2 = 80 + 12.5 = 92.5 \, mm$.
*   Check using $r_2 - r_1 = b = 25 \, mm$.

**Step 6: Verify Maximum Pressure ($P_{max}$)**

*   Using uniform wear theory, $P = \frac{W}{2\pi r \sin \alpha}$.
*   The pressure is maximum at the inner radius $r_1$.
*   $P_{max} = \frac{W}{2\pi r_1 \sin \alpha} = \frac{728.8}{2\pi \times 67.5 \times \sin(15^\circ)}$
*   $P_{max} = \frac{728.8}{2\pi \times 67.5 \times 0.2588} \approx 21.4 \, N/mm^2$.

*   **Oops!** The calculated maximum pressure (21.4 N/mm²) is much higher than the allowed maximum pressure (0.1 N/mm²). This indicates our initial assumption for $r_m$ or $b$ was not suitable for the given pressure limit. We need to recalculate.

**Revised Step 5 & 6: Recalculate based on Pressure Limit**

*   We know $P_{max} = \frac{W}{2\pi r_1 \sin \alpha}$.
*   We also know $r_1 = r_m - b/2$ and $r_m = (r_1+r_2)/2$.
*   Let's use the relationship between $r_1$, $r_2$, and $P_{max}$ from uniform wear theory.
*   From $W = 2\pi C' \sin \alpha (r_2 - r_1)$, and $P = C'/r$, so $C' = Pr$.
*   $W = 2\pi (Pr) \sin \alpha (r_2 - r_1)$.
*   $P_{max}$ occurs at $r_1$. So $P_{max} r_1 = C'$.
*   $W = 2\pi (P_{max} r_1) \sin \alpha (r_2 - r_1)$.
*   We need to relate $r_2$ and $r_1$. Let $r_2 = r_1 + b$.
*   $W = 2\pi P_{max} r_1 \sin \alpha (b)$.

Let's re-evaluate our approach. We have $T$, $\mu$, $\alpha$, and $P_{max}$. We need to find $r_1$ and $r_2$.

*   From $T = \mu W r_m \frac{1}{\sin \alpha}$, we get $W = \frac{T \sin \alpha}{\mu r_m}$.
*   From $P_{max} = \frac{W}{2\pi r_1 \sin \alpha}$, we get $W = 2\pi r_1 \sin \alpha P_{max}$.
*   Equating the two expressions for $W$:
    $\frac{T \sin \alpha}{\mu r_m} = 2\pi r_1 \sin \alpha P_{max}$
    $\frac{T}{\mu r_m} = 2\pi r_1 P_{max}$
*   $r_1 = \frac{T}{2\pi \mu P_{max} r_m}$.
*   We also know $r_m = \frac{r_1 + r_2}{2}$. And $r_2 = r_1 + b$.
*   $r_m = \frac{r_1 + r_1 + b}{2} = r_1 + b/2$.
*   Substitute $r_m$ in the equation for $r_1$:
    $r_1 = \frac{T}{2\pi \mu P_{max} (r_1 + b/2)}$
    $r_1 (2\pi \mu P_{max} r_1 + \pi \mu P_{max} b) = T$
    $2\pi \mu P_{max} r_1^2 + \pi \mu P_{max} b r_1 - T = 0$.

This is a quadratic equation for $r_1$, provided we assume a value for the face width $b$. Let's assume a face width $b = 30 \, mm$.

*   $T = 63660 \, Nmm$
*   $\mu = 0.3$
*   $P_{max} = 0.1 \, N/mm^2$
*   $b = 30 \, mm$
*   $\alpha = 15^\circ$

The equation becomes:
$2\pi (0.3) (0.1) r_1^2 + \pi (0.3) (0.1) (30) r_1 - 63660 = 0$
$0.1885 r_1^2 + 2.827 r_1 - 63660 = 0$

Solving this quadratic equation for $r_1$:
$r_1 = \frac{-2.827 \pm \sqrt{(2.827)^2 - 4(0.1885)(-63660)}}{2(0.1885)}$
$r_1 = \frac{-2.827 \pm \sqrt{7.99 + 47910}}{0.377}$
$r_1 = \frac{-2.827 \pm \sqrt{47918}}{0.377}$
$r_1 = \frac{-2.827 \pm 218.9}{0.377}$

Since radius must be positive, $r_1 = \frac{-2.827 + 218.9}{0.377} = \frac{216.073}{0.377} \approx 573 \, mm$.

This value of $r_1$ seems excessively large. Let's re-examine the assumptions or formulas. The maximum pressure constraint is often limiting.

Let's go back to the relationship:
$r_1 = \frac{T}{2\pi \mu P_{max} r_m}$ and $r_m = r_1 + b/2$.
$r_1 = \frac{T}{2\pi \mu P_{max} (r_1 + b/2)}$.
$2\pi \mu P_{max} r_1^2 + \pi \mu P_{max} b r_1 - T = 0$.

Let's try a different approach. We know the torque is transmitted by the friction force acting on the cone surface.
The total friction force is $F_f = \mu W / \sin \alpha$.
This friction force acts tangentially at the mean radius.
$T = F_f \times r_m = (\mu W / \sin \alpha) \times r_m$.

The axial force $W$ is distributed over the contact area.
For uniform wear, $P = C'/r$, and $P_{max}$ occurs at $r_1$. So $C' = P_{max} r_1$.
$W = \int_{r_1}^{r_2} P (2\pi r dr) \sin \alpha = \int_{r_1}^{r_2} \frac{P_{max} r_1}{r} (2\pi r dr) \sin \alpha$
$W = 2\pi P_{max} r_1 \sin \alpha \int_{r_1}^{r_2} dr = 2\pi P_{max} r_1 \sin \alpha (r_2 - r_1) = 2\pi P_{max} r_1 \sin \alpha \cdot b$.

Now substitute this $W$ into the torque equation:
$T = \mu (2\pi P_{max} r_1 \sin \alpha \cdot b) r_m \frac{1}{\sin \alpha}$
$T = 2\pi \mu P_{max} r_1 b r_m$.

We have $r_m = r_1 + b/2$.
$T = 2\pi \mu P_{max} r_1 b (r_1 + b/2)$
$T = 2\pi \mu P_{max} (r_1^2 b + r_1 b^2 / 2)$.

We need to find $r_1$. Let's assume a value for $b$, say $b = 20 \, mm$.
$63660 = 2\pi (0.3) (0.1) (r_1^2 \times 20 + r_1 \times 20^2 / 2)$
$63660 = 0.1885 (20 r_1^2 + 200 r_1)$
$337720 = 20 r_1^2 + 200 r_1$
$20 r_1^2 + 200 r_1 - 337720 = 0$
$r_1^2 + 10 r_1 - 16886 = 0$.

Solving this quadratic equation for $r_1$:
$r_1 = \frac{-10 \pm \sqrt{10^2 - 4(1)(-16886)}}{2(1)}$
$r_1 = \frac{-10 \pm \sqrt{100 + 67544}}{2}$
$r_1 = \frac{-10 \pm \sqrt{67644}}{2}$
$r_1 = \frac{-10 \pm 260.08}{2}$.

Since $r_1$ must be positive:
$r_1 = \frac{-10 + 260.08}{2} = \frac{250.08}{2} = 125.04 \, mm$.

Now, calculate $r_2$ and $r_m$:
$r_2 = r_1 + b = 125.04 + 20 = 145.04 \, mm$.
$r_m = r_1 + b/2 = 125.04 + 20/2 = 125.04 + 10 = 135.04 \, mm$.

Check the torque with these values:
$T = 2\pi \mu P_{max} r_1 b r_m = 2\pi (0.3) (0.1) (125.04) (20) (135.04) \approx 63670 \, Nmm$. This matches.

Now, calculate the required axial force $W$:
$W = 2\pi P_{max} r_1 \sin \alpha \cdot b = 2\pi (0.1) (125.04) \sin(15^\circ) (20)$
$W = 2\pi (0.1) (125.04) (0.2588) (20) \approx 403.5 \, N$.

Let's verify this $W$ with the torque equation $T = \mu W r_m \frac{1}{\sin \alpha}$:
$T = 0.3 \times 403.5 \times 135.04 \times \frac{1}{\sin(15^\circ)}$
$T = 0.3 \times 403.5 \times 135.04 \times 3.864 \approx 63180 \, Nmm$.
This is close to the required torque of 63660 Nmm, with slight variations due to rounding.

**Summary of Designed Parameters:**

*   Inner Radius ($r_1$): $125 \, mm$
*   Outer Radius ($r_2$): $145 \, mm$
*   Face Width ($b$): $20 \, mm$
*   Mean Radius ($r_m$): $135 \, mm$
*   Cone Semi-Vertical Angle ($\alpha$): $15^\circ$
*   Required Axial Force ($W$): $403.5 \, N$

**Step 7: Design of Engaging Mechanism**

*   The mechanism must provide an axial force of approximately $403.5 \, N$. This could be achieved using springs with appropriate stiffness and initial compression.

**Step 8 & 9: Further Checks**

*   Further checks would involve stress analysis of the clutch components and heat dissipation calculations, which are beyond this illustrative example but are crucial in a real design.

**Referenced Textbooks & Data Books:**

*   This example uses formulas and concepts found in Bhandari, Norton, and Sharma & Agarwal. Data book values for $\mu$ and allowable pressures are implicitly used.

**Learning Outcomes Covered:**

*   This example directly demonstrates **CO2** (Make use of the design procedure for I C engine components) by walking through the calculation steps. It also implicitly supports **CO1** by modeling a functional transmission component.

### 6. Practice Questions and Exercises

**Question 1:**
A cone clutch is required to transmit 25 kW power at 1200 rpm. The clutch is to be engaged by an axial force applied by a spring. The coefficient of friction is 0.35 and the cone semi-vertical angle is 12.5°. Assume uniform wear conditions.
Calculate:
(a) The torque to be transmitted.
(b) The axial force required to engage the clutch, assuming a mean radius of 75 mm.
(c) The required inner and outer radii if the face width is 25 mm.
(d) Check if the clutch is self-locking.

**Answer 1:**
(a) $T = \frac{25 \times 1000}{2\pi \times 1200 / 60} = \frac{25000}{40\pi} \approx 198.9 \, Nm = 198900 \, Nmm$.
(b) $T = \mu W r_m \frac{1}{\sin \alpha}$
$198900 = 0.35 \times W \times 75 \times \frac{1}{\sin(12.5^\circ)}$
$198900 = 0.35 \times W \times 75 \times 4.606$
$W = \frac{198900}{0.35 \times 75 \times 4.606} \approx 1618 \, N$.
(c) $r_m = 75 \, mm$, $b = 25 \, mm$.
$r_1 = r_m - b/2 = 75 - 12.5 = 62.5 \, mm$.
$r_2 = r_m + b/2 = 75 + 12.5 = 87.5 \, mm$.
(d) $\mu = 0.35$. Angle of friction $\lambda = \arctan(0.35) \approx 19.29^\circ$.
Cone semi-vertical angle $\alpha = 12.5^\circ$.
$2\alpha = 25^\circ$.
Since $2\alpha = 25^\circ > \lambda = 19.29^\circ$, the clutch is **not self-locking**.

**Question 2:**
Design a cone clutch for transmitting 8 kW at 1440 rpm. The outer diameter of the clutch is 200 mm. The coefficient of friction is 0.4 and the cone semi-vertical angle is 10°. Assume uniform pressure conditions. The maximum intensity of pressure is $0.05 \, N/mm^2$.
Calculate:
(a) The torque to be transmitted.
(b) The required axial force.
(c) The inner diameter and face width.

**Answer 2:**
(a) $T = \frac{8 \times 1000}{2\pi \times 1440 / 60} = \frac{8000}{48\pi} \approx 53.05 \, Nm = 53050 \, Nmm$.
(b) Uniform pressure theory: $T = \frac{2\pi \mu P}{3 \sin \alpha} (r_2^3 - r_1^3)$.
$W = \pi P \sin \alpha (r_2^2 - r_1^2)$.
Given $P_{max} = 0.05 \, N/mm^2$.
Outer diameter $D_2 = 200 \, mm$, so $r_2 = 100 \, mm$.
$\alpha = 10^\circ$, $\sin(10^\circ) \approx 0.1736$.
$W = \pi (0.05) (0.1736) (100^2 - r_1^2) = 0.02728 (10000 - r_1^2)$.

$T = \frac{2\pi (0.35) (0.05)}{3 (0.1736)} (100^3 - r_1^3) = 1.356 (1000000 - r_1^3)$.
$53050 = 1.356 (1000000 - r_1^3)$.
$1000000 - r_1^3 = \frac{53050}{1.356} \approx 39122$.
$r_1^3 = 1000000 - 39122 = 960878$.
$r_1 = \sqrt[3]{960878} \approx 98.67 \, mm$.

(c) Inner diameter $= 2 \times r_1 = 2 \times 98.67 \approx 197.34 \, mm$.
Face width $b = r_2 - r_1 = 100 - 98.67 = 1.33 \, mm$.

Axial force $W = 0.02728 (10000 - (98.67)^2) = 0.02728 (10000 - 9735.8) = 0.02728 \times 264.2 \approx 7.2 \, N$.

**Important Points to Remember:**

*   Cone clutches transmit torque through friction between conical surfaces.
*   The design is governed by torque transmission, material properties, and preventing self-locking.
*   Uniform wear theory generally provides a more practical design basis than uniform pressure.
*   The cone semi-vertical angle is crucial to avoid self-locking ($2\alpha > \arctan(\mu)$).
*   Heat generation and dissipation are important considerations, especially for frequent engagements.
*   Material selection impacts wear resistance, thermal properties, and friction coefficient.

### 7. Relation to Course Outcomes

*   **CO1: Model suitable transmission system for the stated conditions (Knowledge Level: K3):** This topic directly contributes to CO1 by detailing the design process and considerations for a cone clutch, a type of transmission system. Students learn to select parameters based on load and speed requirements.
*   **CO2: Make use of the design procedure for I C engine components (Knowledge Level: K3):** Cone clutches, though not universally dominant, are used in certain IC engine applications. This module's focus on them allows students to apply general design procedures to a specific IC engine component.

### 8. Conclusion

The design of a cone clutch involves a careful balance of factors to ensure efficient and reliable torque transmission. Understanding the principles of friction, material behavior, and the critical aspect of avoiding self-locking is essential. By following a structured design procedure and utilizing design data, engineers can create effective cone clutch systems for various applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
