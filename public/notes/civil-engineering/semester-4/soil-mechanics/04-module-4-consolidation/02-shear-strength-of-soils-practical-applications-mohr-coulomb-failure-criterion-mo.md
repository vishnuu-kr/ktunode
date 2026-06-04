---
title: "Shear strength of soils - Practical Applications - Mohr-Coulomb failure criterion - Mohr circle method for determination of principal planes and stresses– relationship between shear parameters and principal stresses - Numerical problems - Brief discussion of Laboratory tests - Triaxial compression test - UU, CU and CD tests - Total and effective stress strength parameters - Unconfined compression test, Direct shear test and vane shear test"
subject: "SOIL MECHANICS"
module: "Module 4: Consolidation "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810981"
status: "completed"
scrapedAt: "2026-05-20T18:47:05.502Z"
---
# Soil Mechanics: Module 4 - Shear Strength of Soils and Practical Applications

This module focuses on understanding the shear strength of soils, a critical property for analyzing the stability of soil structures. We'll explore the fundamental concepts, practical applications, failure criteria, and laboratory methods used to determine shear strength.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the importance of soil shear strength in practical geotechnical applications.
*   Explain and apply the Mohr-Coulomb failure criterion.
*   Utilize the Mohr circle method to determine principal planes and stresses.
*   Establish relationships between shear strength parameters and principal stresses.
*   Solve numerical problems related to shear strength.
*   Describe the principles of key laboratory tests for determining shear strength:
    *   Triaxial Compression Test (UU, CU, CD)
    *   Unconfined Compression Test
    *   Direct Shear Test
    *   Vane Shear Test
*   Differentiate between total and effective stress strength parameters.

## 1. Shear Strength of Soils - Practical Applications

**Definition:** Shear strength is the maximum resistance of a soil to shearing stresses before failure. It's the soil's ability to withstand forces acting parallel to a surface.

**Importance in Geotechnical Engineering:**

*   **Slope Stability:** Determining the factor of safety against landslides in natural slopes, embankments, and excavations.
*   **Bearing Capacity:** Calculating the maximum pressure a foundation can withstand without shear failure of the underlying soil.
*   **Retaining Walls:** Analyzing the lateral earth pressure and the stability of retaining structures.
*   **Earth Dams and Embankments:** Ensuring the stability of these structures under their own weight and applied loads.
*   **Settlement Analysis:** While primarily related to consolidation, shear strength influences the overall deformation behavior.

**Key Concepts:**

*   **Shear Stress ($\tau$):** The stress acting parallel to a plane.
*   **Normal Stress ($\sigma_n$):** The stress acting perpendicular to a plane.
*   **Failure Envelope:** A line representing the shear stress at which a soil fails under various normal stresses.

## 2. Mohr-Coulomb Failure Criterion

**Concept:** The Mohr-Coulomb criterion is an empirical model that describes the shear strength of soils based on the interplay between shear stress and normal stress. It postulates that failure occurs when the shear stress on a plane reaches a critical value that depends on the normal stress on that plane.

**Equation:**

The Mohr-Coulomb failure criterion is expressed as:

$\tau_f = c + \sigma_n \tan \phi$

Where:

*   $\tau_f$: Shear strength (shear stress at failure)
*   $c$: Cohesion (shear strength of the soil when the normal stress is zero). It's a measure of the attractive forces between soil particles, significant in clays.
*   $\sigma_n$: Normal stress acting on the failure plane.
*   $\phi$: Angle of internal friction (represents the interlocking and frictional resistance between soil particles). It's a measure of the soil's frictional properties, significant in granular soils.

**Failure Envelope:**

*   The Mohr-Coulomb failure criterion defines a linear failure envelope in the $\tau - \sigma_n$ plane.
*   For cohesive soils (clays), $c > 0$ and $\phi$ is typically smaller.
*   For cohesionless soils (sands, gravels), $c = 0$ and $\phi$ is significant.
*   For overconsolidated clays, $c$ can be significant, and they may exhibit a "apparent cohesion" due to cementation or high overconsolidation.

**Example:**

A soil has $c = 20 \text{ kPa}$ and $\phi = 30^\circ$. What is its shear strength on a plane where the normal stress is $100 \text{ kPa}$?

$\tau_f = 20 \text{ kPa} + 100 \text{ kPa} \times \tan(30^\circ)$
$\tau_f = 20 \text{ kPa} + 100 \text{ kPa} \times 0.577$
$\tau_f = 20 \text{ kPa} + 57.7 \text{ kPa} = 77.7 \text{ kPa}$

## 3. Mohr Circle Method for Determination of Principal Planes and Stresses

**Concept:** The Mohr circle is a graphical representation of the state of stress at a point within a soil mass. It allows us to determine the stresses and orientations of planes at that point, including the principal stresses and principal planes.

**Key Elements of the Mohr Circle:**

*   **Center of the Circle:** Lies on the normal stress axis ($\sigma_n$) and has coordinates $(\frac{\sigma_x + \sigma_y}{2}, 0)$.
*   **Radius of the Circle:** Represents the shear stress ($\tau$) on the plane, with magnitude $\sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2}$.
*   **Principal Stresses ($\sigma_1$, $\sigma_3$):** The maximum and minimum normal stresses acting on a soil element. They occur on planes where the shear stress is zero.
    *   $\sigma_1 = \frac{\sigma_x + \sigma_y}{2} + R$ (Major principal stress)
    *   $\sigma_3 = \frac{\sigma_x + \sigma_y}{2} - R$ (Minor principal stress)
    *   Where $R$ is the radius of the Mohr circle.
*   **Principal Planes:** The planes on which the principal stresses act. These planes are oriented at $90^\circ$ to each other and are free from shear stress.
*   **Pole of the Mohr Circle:** A point on the Mohr circle that has the same angle with respect to the $\sigma_n$ axis as the corresponding plane in the physical element.

**Steps to Construct the Mohr Circle:**

1.  **Establish Axes:** Draw the $\sigma_n$ (horizontal) and $\tau$ (vertical) axes.
2.  **Plot Known Points:** Plot the stress conditions for two known planes (e.g., $\sigma_x, \tau_{xy}$ and $\sigma_y, -\tau_{xy}$).
    *   For plane A (e.g., horizontal plane): $(\sigma_x, \tau_{xy})$
    *   For plane B (e.g., vertical plane): $(\sigma_y, -\tau_{xy})$
3.  **Locate the Center:** Find the midpoint of the line segment connecting the two plotted points. This is the center of the Mohr circle.
4.  **Draw the Circle:** Using the center and the distance to either plotted point as the radius, draw the circle.

**Determining Principal Planes and Stresses from the Mohr Circle:**

*   **Principal Stresses:** The points where the circle intersects the $\sigma_n$ axis are $\sigma_1$ (major principal stress) and $\sigma_3$ (minor principal stress).
*   **Principal Planes:** The angle between the line joining the two known points and the $\sigma_n$ axis, when doubled, gives the angle between the corresponding planes in the actual stress element. The principal planes are perpendicular to each other.

**Example:**

A soil element has the following stresses: $\sigma_x = 50 \text{ kPa}$, $\sigma_y = 20 \text{ kPa}$, and $\tau_{xy} = 15 \text{ kPa}$. Construct the Mohr circle and determine the principal stresses and the orientation of the principal planes.

1.  **Axes:** $\sigma_n$ and $\tau$.
2.  **Plot Points:**
    *   Point 1: $(50, 15)$
    *   Point 2: $(20, -15)$
3.  **Center:** $(\frac{50+20}{2}, 0) = (35, 0)$
4.  **Radius:** $R = \sqrt{(\frac{50-20}{2})^2 + 15^2} = \sqrt{(15)^2 + 15^2} = \sqrt{225 + 225} = \sqrt{450} \approx 21.21 \text{ kPa}$
5.  **Draw Circle:** Center at $(35, 0)$ with radius $21.21 \text{ kPa}$.
6.  **Principal Stresses:**
    *   $\sigma_1 = 35 + 21.21 = 56.21 \text{ kPa}$
    *   $\sigma_3 = 35 - 21.21 = 13.79 \text{ kPa}$
7.  **Orientation of Principal Planes:** The angle $\alpha$ between the line connecting $(50, 15)$ and $(20, -15)$ and the $\sigma_n$ axis can be found using trigonometry. The angle of the major principal plane from the plane where $\sigma_x$ acts is $\theta$. The angle on the Mohr circle from the point $(50, 15)$ to the point $(\sigma_1, 0)$ is $2\theta$.

    $\tan(2\theta) = \frac{15}{(\frac{50-20}{2})} = \frac{15}{15} = 1$
    $2\theta = 45^\circ$
    $\theta = 22.5^\circ$

    The major principal plane is oriented $22.5^\circ$ counter-clockwise from the plane where $\sigma_x$ acts.

## 4. Relationship Between Shear Parameters and Principal Stresses

The Mohr-Coulomb failure criterion can be expressed in terms of principal stresses:

$\sigma_1 = \sigma_3 \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right) + 2c \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)^{1/2}$

This equation relates the major and minor principal stresses at failure to the soil's shear strength parameters ($c$ and $\phi$).

**Important Points:**

*   For cohesionless soils ($c=0$), $\sigma_1 = \sigma_3 \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)$.
*   The term $\left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)$ is often denoted as $N_\phi$ or $K_p$ (for passive earth pressure) or $K_a$ (for active earth pressure) depending on the context of stress states.
*   The angle of obliquity is the angle between the resultant stress on a failure plane and the normal to that plane.

## 5. Numerical Problems

**Problem 1:**

A direct shear test on a saturated clay resulted in the following data at failure:
*   Normal stress: 150 kPa
*   Shear stress: 90 kPa

If the soil has cohesion ($c$) and an angle of internal friction ($\phi$), and a similar soil element experiences stresses where the major principal stress ($\sigma_1$) is 200 kPa and the minor principal stress ($\sigma_3$) is 50 kPa, what are the values of $c$ and $\phi$ using the Mohr-Coulomb criterion?

**Solution:**

**Step 1: From direct shear test data:**
On the failure plane of the direct shear test, the normal stress is $\sigma_n = 150 \text{ kPa}$ and the shear stress is $\tau_f = 90 \text{ kPa}$.
Using the Mohr-Coulomb equation: $\tau_f = c + \sigma_n \tan \phi$
$90 = c + 150 \tan \phi$  (Equation 1)

**Step 2: From principal stresses:**
We know $\sigma_1 = 200 \text{ kPa}$ and $\sigma_3 = 50 \text{ kPa}$. We also need to find the shear strength parameters $c$ and $\phi$. We can use the principal stress relationship of the Mohr-Coulomb criterion:
$\sigma_1 = \sigma_3 \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right) + 2c \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)^{1/2}$

This equation requires another piece of information or we need to relate it to the direct shear test. Let's assume the failure envelope determined from the direct shear test also applies to this triaxial condition.

Alternatively, we can consider that for a triaxial test, if the confining pressure is $\sigma_3$ and the axial stress at failure is $\sigma_1$, then:
$\sigma_1 = \sigma_3 + 2c \sqrt{N_\phi} + 2\sigma_3 \tan \phi \sqrt{N_\phi}$
where $N_\phi = \frac{1 + \sin \phi}{1 - \sin \phi}$.

Let's stick to the fundamental Mohr-Coulomb equations. We need another data point to solve for both $c$ and $\phi$ from the principal stress relationship directly. However, the problem implies that the direct shear test results provide a point on the failure envelope.

Let's assume the failure envelope from the direct shear test is what we use. We can also find the stress state at failure in a triaxial test from the Mohr circle.

If we assume this is a triaxial compression test with $\sigma_3 = 50 \text{ kPa}$ and $\sigma_1 = 200 \text{ kPa}$, we can plot these on a Mohr circle.
Center of the circle = $(\frac{200+50}{2}, 0) = (125, 0)$
Radius of the circle = $\frac{200-50}{2} = 75 \text{ kPa}$

The failure envelope passes through the origin (for cohesionless) or has a cohesion intercept. The failure envelope will be tangent to this Mohr circle.

Let's re-interpret the problem: The direct shear test provides *one* point on the failure envelope. We need *two* points or a different approach to define the envelope. A common approach is to assume a failure envelope based on the direct shear test and then see if it's tangent to the triaxial Mohr circle.

Let's assume the direct shear test gives us $c$ and $\phi$. If we had another direct shear test result at a different normal stress, we could define the line. Since we only have one point, let's use the principal stress relation to *find* the failure envelope parameters.

If the triaxial test resulted in $\sigma_1 = 200 \text{ kPa}$ and $\sigma_3 = 50 \text{ kPa}$, then the Mohr circle has a radius of $75 \text{ kPa}$ and its center is at $125 \text{ kPa}$ on the $\sigma_n$ axis. The failure envelope must be tangent to this circle.

The distance from the center of the circle to the point of tangency represents the shear strength at that normal stress.

Let's go back to the direct shear test. The failure envelope is $\tau_f = c + \sigma_n \tan \phi$. We know at failure, $\tau_f = 90$ and $\sigma_n = 150$. So, $90 = c + 150 \tan \phi$. This is one equation with two unknowns.

Now consider the triaxial test. The major principal stress at failure is $\sigma_1 = 200$ and the minor principal stress is $\sigma_3 = 50$. The normal stress on the failure plane in a triaxial test is the average of the principal stresses, $\sigma_n = (\sigma_1 + \sigma_3)/2 = (200+50)/2 = 125 \text{ kPa}$. The shear stress on the failure plane is $\tau_f = (\sigma_1 - \sigma_3)/2 = (200-50)/2 = 75 \text{ kPa}$.

So, from the triaxial test, we have another point on the failure envelope: $\sigma_n = 125 \text{ kPa}$ and $\tau_f = 75 \text{ kPa}$.
Using the Mohr-Coulomb equation again:
$75 = c + 125 \tan \phi$ (Equation 2)

Now we have a system of two linear equations:
1.  $c + 150 \tan \phi = 90$
2.  $c + 125 \tan \phi = 75$

Subtract Equation 2 from Equation 1:
$(c + 150 \tan \phi) - (c + 125 \tan \phi) = 90 - 75$
$25 \tan \phi = 15$
$\tan \phi = \frac{15}{25} = 0.6$
$\phi = \arctan(0.6) \approx 30.96^\circ$

Substitute $\tan \phi = 0.6$ into Equation 2:
$c + 125 \times 0.6 = 75$
$c + 75 = 75$
$c = 0 \text{ kPa}$

**Answer:** $c = 0 \text{ kPa}$ and $\phi \approx 30.96^\circ$. This indicates the soil is cohesionless, behaving like a sand or gravel.

**Problem 2:**

For a normally consolidated clay, the shear strength parameters are $c = 5 \text{ kPa}$ and $\phi = 25^\circ$. Calculate the shear strength on a plane inclined at $30^\circ$ to the major principal stress axis when the minor principal stress is $50 \text{ kPa}$.

**Solution:**

**Step 1: Find the major principal stress at failure ($\sigma_1$).**
Using the principal stress relationship for Mohr-Coulomb:
$\sigma_1 = \sigma_3 \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right) + 2c \left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)^{1/2}$

Given: $\sigma_3 = 50 \text{ kPa}$, $c = 5 \text{ kPa}$, $\phi = 25^\circ$.
$\sin \phi = \sin 25^\circ \approx 0.4226$

$\frac{1 + \sin \phi}{1 - \sin \phi} = \frac{1 + 0.4226}{1 - 0.4226} = \frac{1.4226}{0.5774} \approx 2.464$
$\left(\frac{1 + \sin \phi}{1 - \sin \phi}\right)^{1/2} \approx \sqrt{2.464} \approx 1.570$

$\sigma_1 = 50 \times (2.464) + 2 \times 5 \times (1.570)$
$\sigma_1 = 123.2 + 15.70$
$\sigma_1 = 138.9 \text{ kPa}$

**Step 2: Determine the normal and shear stresses on the inclined plane.**
The inclined plane is at $30^\circ$ to the major principal stress axis. Let this angle be $\theta = 30^\circ$.
The normal stress ($\sigma_n$) and shear stress ($\tau_f$) on a plane inclined at an angle $\theta$ to the major principal plane are given by:

$\sigma_n = \frac{\sigma_1 + \sigma_3}{2} + \frac{\sigma_1 - \sigma_3}{2} \cos(2\theta)$
$\tau_f = \frac{\sigma_1 - \sigma_3}{2} \sin(2\theta)$

We know $\sigma_1 = 138.9 \text{ kPa}$ and $\sigma_3 = 50 \text{ kPa}$.
$\frac{\sigma_1 + \sigma_3}{2} = \frac{138.9 + 50}{2} = \frac{188.9}{2} = 94.45 \text{ kPa}$
$\frac{\sigma_1 - \sigma_3}{2} = \frac{138.9 - 50}{2} = \frac{88.9}{2} = 44.45 \text{ kPa}$

$\cos(2\theta) = \cos(2 \times 30^\circ) = \cos(60^\circ) = 0.5$
$\sin(2\theta) = \sin(2 \times 30^\circ) = \sin(60^\circ) = 0.866$

$\sigma_n = 94.45 + 44.45 \times 0.5 = 94.45 + 22.225 = 116.675 \text{ kPa}$
$\tau_f = 44.45 \times 0.866 = 38.48 \text{ kPa}$

**Step 3: Verify the shear strength using the Mohr-Coulomb criterion.**
Using the calculated $\sigma_n$ and the soil parameters $c=5 \text{ kPa}$ and $\phi=25^\circ$:
$\tau_f = c + \sigma_n \tan \phi$
$\tau_f = 5 + 116.675 \times \tan(25^\circ)$
$\tau_f = 5 + 116.675 \times 0.4663$
$\tau_f = 5 + 54.41$
$\tau_f = 59.41 \text{ kPa}$

There's a discrepancy. Let's re-examine the premise. The question asks for the *shear strength on a plane inclined at $30^\circ$*. This implies we need to find the shear stress acting on that plane. The Mohr-Coulomb criterion defines the *maximum shear stress* a soil can withstand, which is the shear strength.

The shear stress acting on the plane is indeed $38.48 \text{ kPa}$. The shear strength *available* on that plane, according to the Mohr-Coulomb criterion, is $59.41 \text{ kPa}$. Since the applied shear stress ($38.48 \text{ kPa}$) is less than the available shear strength ($59.41 \text{ kPa}$), the soil will not fail on this plane.

The question phrasing can be interpreted in two ways:
1.  What is the shear stress acting on a plane at $30^\circ$ to the major principal stress axis when $\sigma_1 = 138.9 \text{ kPa}$ and $\sigma_3 = 50 \text{ kPa}$? (Answer: $38.48 \text{ kPa}$)
2.  What is the shear strength of the soil on a plane inclined at $30^\circ$ to the major principal stress axis? (This usually refers to the $\tau_f$ calculated from the failure envelope using the $\sigma_n$ of that plane).

Given the context of shear strength, the second interpretation is more likely. The shear strength on that plane is $59.41 \text{ kPa}$.

**Let's clarify the interpretation:** The problem asks for the *shear strength* on a plane. This means we must use the failure envelope.

**Answer:** The shear strength on a plane inclined at $30^\circ$ to the major principal stress axis is $59.41 \text{ kPa}$.

## 6. Brief Discussion of Laboratory Tests

These tests are designed to determine the shear strength parameters ($c$ and $\phi$) of a soil.

### 6.1 Triaxial Compression Test

**Principle:** A cylindrical soil specimen is subjected to a confining hydrostatic pressure (cell pressure, $\sigma_3$) and an increasing axial deviator stress ($\sigma_a$). Failure occurs when the axial stress reaches a value at which the soil can no longer withstand the applied stresses.

**Types of Triaxial Tests:**

*   **Unconsolidated Undrained (UU) Test:**
    *   **Procedure:** Specimen is not allowed to drain during the test. This is performed quickly.
    *   **Conditions:** No drainage. Total stress analysis is applicable.
    *   **Parameters Determined:** Total stress strength parameters ($c_u, \phi_u$).
    *   **Application:** Suitable for short-term stability analysis of cohesive soils where rapid loading occurs and drainage is unlikely (e.g., construction of embankments on soft clays).

*   **Consolidated Undrained (CU) Test:**
    *   **Procedure:** The specimen is first consolidated under a given cell pressure ($\sigma_3$) and allowed to drain. Then, the axial stress is increased *without* allowing drainage. Pore water pressures are measured.
    *   **Conditions:** Drainage during consolidation, no drainage during shear. Effective stress analysis can be performed if pore water pressures are measured.
    *   **Parameters Determined:**
        *   **Total stress parameters ($c_u, \phi_u$):** Using total stresses.
        *   **Effective stress parameters ($c', \phi'$):** Using effective stresses ($\sigma'_1 = \sigma_1 - u$, $\sigma'_3 = \sigma_3 - u$). This is the more fundamental approach for long-term analysis.
    *   **Application:** Suitable for both short-term (total stress) and long-term (effective stress) stability analysis of saturated soils.

*   **Consolidated Drained (CD) Test:**
    *   **Procedure:** The specimen is consolidated under a given cell pressure ($\sigma_3$) and allowed to drain. The axial stress is then increased slowly enough to allow pore water pressures to dissipate.
    *   **Conditions:** Drainage allowed throughout the test. Effective stress analysis is directly applicable.
    *   **Parameters Determined:** Effective stress strength parameters ($c', \phi'$).
    *   **Application:** Suitable for long-term stability analysis of saturated soils where significant drainage and pore pressure dissipation occur over time (e.g., stability of old embankments).

**Total vs. Effective Stress Strength Parameters:**

*   **Total Stress Parameters ($c_u, \phi_u$):**
    *   These parameters are based on total stresses and are used in the UU test.
    *   They are useful for short-term analysis of undrained conditions.
    *   For saturated clays, $\phi_u$ is often $0^\circ$ for normally consolidated clays under UU conditions.

*   **Effective Stress Parameters ($c', \phi'$):**
    *   These parameters are based on effective stresses ($\sigma' = \sigma - u$, where $u$ is pore water pressure).
    *   They are determined from CU and CD tests and are considered more fundamental as they represent the true frictional and cohesive components of strength due to particle-to-particle contact.
    *   $c'$ represents the cohesion acting on the effective stress plane. For clean sands and gravels, $c' = 0$. For clays, $c'$ represents the true cohesion.
    *   $\phi'$ represents the angle of internal friction based on effective stresses.

### 6.2 Unconfined Compression Test (UCT)

**Principle:** A simple test where a cylindrical specimen of cohesive soil is subjected to an increasing axial load until failure, with no confining pressure.

**Procedure:** The specimen is compressed axially until it fails or deforms excessively.

**Parameters Determined:**
*   **Unconfined Compressive Strength ($q_u$):** The maximum axial stress the soil can withstand.
*   **Cohesion ($c_u$):** For saturated clays, if the test is assumed to be undrained and $\phi_u = 0$, then $q_u = 2c_u$. Therefore, $c_u = q_u / 2$.
*   **Angle of Internal Friction ($\phi_u$):** Can be estimated from the stress-strain curve if it's not zero, but typically the UU test is preferred for $\phi_u$.

**Application:** Primarily used for quick estimation of shear strength of cohesive soils in the field and for quality control during construction. It's an undrained test.

### 6.3 Direct Shear Test

**Principle:** A soil specimen is placed in a shear box, and a normal load is applied. Then, a shear force is applied to one half of the box, causing the soil to shear along a predefined horizontal plane between the two halves of the box.

**Procedure:**
1.  A soil specimen is placed in a shear box.
2.  A normal load is applied to the specimen.
3.  A horizontal force is applied to one half of the shear box, causing shear along the plane of separation.
4.  The shear force and deformation are recorded until failure.
5.  The test is repeated on identical specimens with different normal loads to establish the failure envelope.

**Parameters Determined:**
*   Shear strength parameters ($c$ and $\phi$) based on the Mohr-Coulomb criterion. The failure envelope is constructed by plotting shear stress vs. normal stress at failure for several tests with different normal loads.

**Application:** Commonly used for cohesionless soils (sands, gravels) as it directly measures shear resistance. It's relatively simple and fast. However, it has limitations:
*   It enforces failure along a specific horizontal plane, which may not be the plane of maximum shear stress.
*   It's difficult to control or measure pore water pressure, making effective stress analysis challenging.

### 6.4 Vane Shear Test (VST)

**Principle:** A specially designed vane (four blades) is inserted into the soil, and it is rotated. The torque required to rotate the vane at a constant rate is measured. Failure occurs when the soil shears around the cylindrical surface defined by the vane blades.

**Procedure:**
1.  The vane is pushed into the soil.
2.  The vane is rotated at a controlled speed.
3.  The torque is measured at the point of maximum deflection or when the vane reaches a steady angular velocity.
4.  The shear strength is calculated from the torque.

**Parameters Determined:**
*   **Undrained Shear Strength ($c_u$):** The Vane Shear Test is primarily used for soft, saturated clays and silts. It directly provides the undrained shear strength.
*   **Sensitivity ($S_t$):** By performing the test initially and then after remolding the soil, the sensitivity (ratio of undisturbed shear strength to remolded shear strength) can be determined.

**Application:** Ideal for in-situ testing of soft to medium clays. It's a quick and effective method for obtaining undisturbed shear strength values in the field. It's an undrained test.

**Important Note:** The Vane Shear Test is not suitable for granular soils or very stiff/hard clays.

## Key Points to Remember

*   **Shear strength** is crucial for slope stability, bearing capacity, and retaining wall design.
*   The **Mohr-Coulomb failure criterion** ($\tau_f = c + \sigma_n \tan \phi$) is a fundamental model for soil shear strength.
*   The **Mohr circle** is a graphical tool to visualize stress states and determine principal stresses and planes.
*   **Total stress parameters ($c_u, \phi_u$)** are used for short-term analysis, while **effective stress parameters ($c', \phi'$)** are used for long-term analysis and are more fundamental.
*   **UU tests** provide total stress parameters, **CD tests** provide effective stress parameters, and **CU tests** can provide both.
*   The **Unconfined Compression Test** is for cohesive soils and gives $q_u$ and $c_u$.
*   The **Direct Shear Test** is good for granular soils but has limitations in pore pressure measurement.
*   The **Vane Shear Test** is an in-situ test ideal for soft, saturated clays to determine undrained shear strength ($c_u$).

---

## Practice Questions

**Question 1:**
A normally consolidated clay layer has shear strength parameters $c' = 0 \text{ kPa}$ and $\phi' = 28^\circ$. Calculate the shear strength of the soil on a plane where the effective normal stress is $120 \text{ kPa}$.

**Question 2:**
In a triaxial compression test on a saturated clay specimen, the major principal stress at failure is $250 \text{ kPa}$ and the minor principal stress is $100 \text{ kPa}$. Calculate the undrained shear strength parameters ($c_u, \phi_u$) if the pore water pressure at failure is $50 \text{ kPa}$.

**Question 3:**
Describe the main differences between UU, CU, and CD triaxial tests, and state the type of parameters each test determines and their typical applications.

**Question 4:**
A soil element is subjected to stresses: $\sigma_x = 100 \text{ kPa}$, $\sigma_y = 50 \text{ kPa}$, $\tau_{xy} = 30 \text{ kPa}$. Construct the Mohr circle for this stress state. Determine the major and minor principal stresses and the angle of the major principal plane with respect to the plane of $\sigma_x$.

---

## Answers to Practice Questions

**Answer 1:**
Using the Mohr-Coulomb criterion:
$\tau_f = c' + \sigma'_n \tan \phi'$
$\tau_f = 0 + 120 \text{ kPa} \times \tan(28^\circ)$
$\tan(28^\circ) \approx 0.5317$
$\tau_f = 120 \times 0.5317 \approx 63.80 \text{ kPa}$

**Answer 2:**
Given: $\sigma_1 = 250 \text{ kPa}$, $\sigma_3 = 100 \text{ kPa}$, $u = 50 \text{ kPa}$.

Effective stresses at failure:
$\sigma'_1 = \sigma_1 - u = 250 - 50 = 200 \text{ kPa}$
$\sigma'_3 = \sigma_3 - u = 100 - 50 = 50 \text{ kPa}$

For a saturated clay under undrained conditions ($\phi_u=0$), the shear strength is primarily due to cohesion. In a triaxial test, the failure occurs when $\sigma'_1 = \sigma'_3$ if $\phi'=0$. However, if $\phi_u$ is not zero, we need to relate these.

Let's use the relationship derived from the Mohr circle for undrained conditions (where $\phi_u = 0$, so $\tau_f = c_u$):
The shear stress on the failure plane is $\tau_f = (\sigma_1 - \sigma_3)/2 = (250 - 100)/2 = 75 \text{ kPa}$.
Since this is an undrained test, $\tau_f = c_u$.
So, $c_u = 75 \text{ kPa}$.

To find $\phi_u$, we would need more data points or a different approach for undrained conditions if $\phi_u \neq 0$. However, if the question implies a Mohr-Coulomb failure envelope with both $c_u$ and $\phi_u$, we would need additional tests. If this is a single test and it's undrained, the simplest interpretation is that the shear strength is $c_u$.

Let's assume this is a saturated clay where $\phi_u$ might not be zero. The problem asks for $c_u$ and $\phi_u$. We have one data point for the Mohr circle of total stresses with center $(\frac{250+100}{2}, 0) = (175, 0)$ and radius $\frac{250-100}{2} = 75$. The failure envelope $(\tau_f = c_u + \sigma_n \tan \phi_u)$ must be tangent to this circle.

We can also use the effective stress parameters determined from the effective stress Mohr circle:
$\sigma'_1 = 200 \text{ kPa}$, $\sigma'_3 = 50 \text{ kPa}$.
Let's assume the test implies that we can find both $c'$ and $\phi'$ for effective stresses.
Center of effective stress Mohr circle = $(\frac{200+50}{2}, 0) = (125, 0)$. Radius = $\frac{200-50}{2} = 75 \text{ kPa}$.

If we only have this one triaxial test for $c_u$ and $\phi_u$, we cannot uniquely determine both without another test. However, if the question implies we can extract them from this single test, we can relate it to the failure envelope.

**Let's re-examine the typical interpretation of a single UU test result:**
The unconfined compressive strength ($q_u$) is often used. If the soil is saturated and $\phi_u = 0$, then $q_u = 2c_u$.
In this problem, if it's treated as a UU test (undrained), the major principal stress at failure is $\sigma_1 = 250 \text{ kPa}$, and the minor principal stress (confining pressure) is $\sigma_3 = 100 \text{ kPa}$.
The shear stress at failure is $\tau_f = (\sigma_1 - \sigma_3)/2 = (250 - 100)/2 = 75 \text{ kPa}$.
If $\phi_u = 0$, then $\tau_f = c_u$, so $c_u = 75 \text{ kPa}$.

If the question intends to find $\phi_u$ as well, then the problem is underspecified with only one test unless we assume the failure envelope is tangent to the Mohr circle for total stresses at some angle $\phi_u$.

**Alternative interpretation for effective stress parameters:**
If the question meant to ask for effective stress parameters, and the pore water pressure is given for the failure point:
$\sigma'_1 = 200 \text{ kPa}$
$\sigma'_3 = 50 \text{ kPa}$
These are the effective principal stresses at failure. The relationship $\sigma'_1 = \sigma'_3 N_\phi + 2c' \sqrt{N_\phi}$ can be used, where $N_\phi = \frac{1+\sin\phi'}{1-\sin\phi'}$.

If we assume this is a single test used to define the failure envelope, we can use the relationship for effective stress:
The Mohr circle in terms of effective stresses has a center at $(\frac{200+50}{2}, 0) = (125, 0)$ and radius $\frac{200-50}{2} = 75$.
The failure envelope $\tau = c' + \sigma' \tan \phi'$ must be tangent to this circle.
We cannot find $c'$ and $\phi'$ from a single point.

**Revisiting typical question formats:** Usually, to find $c_u$ and $\phi_u$ (or $c'$ and $\phi'$), you need at least two triaxial tests at different confining pressures.

**If the question is about finding shear strength using effective stress parameters derived from this single test:**
If we assume $c' = 0$ (like a sand), then $\phi'$ would be calculated from $\sigma'_1 = \sigma'_3 \left(\frac{1 + \sin \phi'}{1 - \sin \phi'}\right)$.
$200 = 50 \left(\frac{1 + \sin \phi'}{1 - \sin \phi'}\right)$
$4 = \frac{1 + \sin \phi'}{1 - \sin \phi'}$
$4 - 4\sin \phi' = 1 + \sin \phi'$
$3 = 5\sin \phi'$
$\sin \phi' = 3/5 = 0.6$
$\phi' = \arcsin(0.6) = 36.87^\circ$.
So, if $c'=0$, then $\phi'=36.87^\circ$.

**However, the question asks for $c_u$ and $\phi_u$.**
The most standard interpretation for a single triaxial test of a saturated soil is that the shear stress at failure is the undrained shear strength if $\phi_u=0$.
$c_u = (\sigma_1 - \sigma_3)/2 = (250 - 100)/2 = 75 \text{ kPa}$.
If this is treated as a UU test, then $\phi_u = 0$.

**Therefore, the most likely answer based on common practice for a single UU test result:**
$c_u = 75 \text{ kPa}$
$\phi_u = 0^\circ$

**Answer 3:**
*   **UU (Unconsolidated Undrained) Test:**
    *   **Procedure:** No drainage allowed during consolidation or shear.
    *   **Parameters:** Total stress parameters ($c_u, \phi_u$).
    *   **Application:** Short-term stability analysis of saturated cohesive soils where rapid loading occurs (e.g., construction of embankments on soft clays).
*   **CU (Consolidated Undrained) Test:**
    *   **Procedure:** Drainage allowed during consolidation, but not during shear. Pore water pressures are measured.
    *   **Parameters:** Can determine both total stress parameters ($c_u, \phi_u$) using total stresses, and effective stress parameters ($c', \phi'$) using effective stresses.
    *   **Application:** Both short-term (total stress) and long-term (effective stress) stability analysis of saturated soils.
*   **CD (Consolidated Drained) Test:**
    *   **Procedure:** Drainage allowed during consolidation and shear. Test is performed slowly to prevent buildup of excess pore water pressure.
    *   **Parameters:** Effective stress parameters ($c', \phi'$).
    *   **Application:** Long-term stability analysis of saturated soils where pore water pressure dissipates over time (e.g., stability of old embankments).

**Answer 4:**
1.  **Axes:** $\sigma_n$ (horizontal) and $\tau$ (vertical).
2.  **Plot Points:**
    *   Point 1 (for plane with $\sigma_x$): $(\sigma_x, \tau_{xy}) = (100, 30)$
    *   Point 2 (for plane with $\sigma_y$): $(\sigma_y, -\tau_{xy}) = (50, -30)$
3.  **Center of the Circle:**
    *   $C = (\frac{\sigma_x + \sigma_y}{2}, 0) = (\frac{100 + 50}{2}, 0) = (75, 0)$
4.  **Radius of the Circle:**
    *   $R = \sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2} = \sqrt{(\frac{100 - 50}{2})^2 + 30^2}$
    *   $R = \sqrt{(\frac{50}{2})^2 + 30^2} = \sqrt{25^2 + 30^2} = \sqrt{625 + 900} = \sqrt{1525} \approx 39.05 \text{ kPa}$
5.  **Principal Stresses:**
    *   Major Principal Stress ($\sigma_1$): $C + R = 75 + 39.05 = 114.05 \text{ kPa}$
    *   Minor Principal Stress ($\sigma_3$): $C - R = 75 - 39.05 = 35.95 \text{ kPa}$
6.  **Angle of the Major Principal Plane:**
    *   Let $\theta$ be the angle from the plane of $\sigma_x$ to the major principal plane. On the Mohr circle, the angle between the line connecting the two points and the $\sigma_n$ axis is $2\theta$.
    *   $\tan(2\theta) = \frac{|\tau_{xy}|}{|\frac{\sigma_x - \sigma_y}{2}|} = \frac{30}{|25|} = 1.2$
    *   $2\theta = \arctan(1.2) \approx 50.19^\circ$
    *   $\theta = \frac{50.19^\circ}{2} \approx 25.10^\circ$

    The major principal plane is oriented approximately $25.10^\circ$ counter-clockwise from the plane where $\sigma_x$ acts.

**Summary of Answer 4:**
*   Mohr Circle: Centered at $(75, 0)$ with a radius of $39.05 \text{ kPa}$.
*   Major Principal Stress ($\sigma_1$): $114.05 \text{ kPa}$
*   Minor Principal Stress ($\sigma_3$): $35.95 \text{ kPa}$
*   Angle of major principal plane from the plane of $\sigma_x$: $25.10^\circ$ counter-clockwise.
