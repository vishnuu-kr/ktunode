---
title: "Power transmitted by circular shafts and hollow circular shafts"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e83a09"
status: "completed"
scrapedAt: "2026-05-20T17:46:35.124Z"
---
## Module 4: Stresses on Inclined Planes for Uniaxial and Biaxial Stress Fields
### Topic: Power Transmitted by Circular Shafts and Hollow Circular Shafts

Welcome, everyone, to another exciting session in our Mechanics of Solids course! Today, we're going to dive into a topic that's fundamental to how machines and structures work in the real world: **Power Transmitted by Circular Shafts**. Think about all the rotating machinery you see – from car engines to industrial mixers, even bicycle pedals – they all rely on shafts to transfer power. Understanding how much power a shaft can handle is crucial for designing safe and efficient mechanical systems.

This topic, while seemingly distinct, beautifully ties back to our earlier discussions on stresses and strains, particularly the concepts we've been exploring regarding stresses on inclined planes. Remember, when a shaft transmits torque, it experiences torsional shear stresses, and these stresses, as we know, are not uniform across all planes. This understanding is key.

Our focus today is on two primary types of shafts: **solid circular shafts** and **hollow circular shafts**. We'll explore the formulas and the underlying principles that allow us to calculate the power they can transmit, and more importantly, why these formulas are derived the way they are. This will directly help us achieve **CO3** (applying principles to calculate stresses and strain energies) and **CO6** (analyzing members to calculate safe loads or proportion cross-sections).

### Understanding Torque and Power Transmission

Before we get into the nitty-gritty of shafts, let's establish a clear understanding of what we mean by torque and power.

**Torque ($T$)** is essentially a twisting force. Imagine you’re trying to unscrew a stubborn jar lid. The force you apply around the circumference is creating a torque. In mechanical terms, torque is the product of a force and the perpendicular distance from the axis of rotation to the line of action of the force. It's often measured in Newton-meters (Nm) or pound-feet (lb-ft).

**Power ($P$)** is the rate at which work is done. When a shaft rotates, it’s doing work. The power transmitted by a rotating shaft is directly related to the torque it experiences and its angular speed.

The fundamental relationship is:

$P = T \times \omega$

where:
*   $P$ is power
*   $T$ is torque
*   $\omega$ (omega) is the angular velocity (or angular speed)

Often, power is given in terms of revolutions per minute (RPM). To use the formula $P = T \omega$, we need to convert RPM to radians per second. If $N$ is the speed in RPM, then:

$\omega = \frac{2 \pi N}{60}$ radians/second

So, the power transmitted can be expressed as:

$P = T \times \frac{2 \pi N}{60}$

Common units for power are Watts (W) or horsepower (hp). If $T$ is in Nm and $\omega$ is in rad/s, $P$ will be in Watts.

**Real-World Analogy:** Think of a bicycle. Your legs apply a force to the pedals, creating a torque on the crank arm. This torque is then transmitted through the chain to the rear wheel, causing it to rotate. The faster you pedal (higher $N$) and the harder you push (higher $T$), the more power you transmit to move forward. If the chain snaps, you can still pedal, but no power is transmitted to the wheel – the shaft (crank arm) is still there, but the torque isn't being effectively transferred.

**Connection to CO3 & CO6:** This formula for power transmission is a direct application of principles to understand how mechanical elements transmit energy. We'll use this as a base to then determine the stresses induced in the shafts, which is essential for **CO6** – ensuring the shaft can handle the load without failing.

### Power Transmission by Solid Circular Shafts

Now, let's focus on the **solid circular shaft**. When a torque $T$ is applied to a solid circular shaft, it experiences torsional shear stress. This shear stress is maximum at the outer surface of the shaft and zero at the center. This distribution of stress is a direct consequence of how the material deforms under torsion.

We’ve already covered the torsional shear stress formula derived from the **Theory of Torsion** (often found in chapters related to torsion in our textbooks like Bansal or Punmia). Let's recall it:

$\frac{\tau}{r} = \frac{T}{J} = \frac{G \theta}{L}$

where:
*   $\tau$ (tau) is the shear stress at a radial distance $r$ from the center.
*   $r$ is the radial distance from the center of the shaft.
*   $T$ is the applied torque.
*   $J$ is the **Polar Moment of Inertia** of the cross-section. For a solid circular shaft of radius $R$ (or diameter $D$), $J = \frac{\pi R^4}{2} = \frac{\pi D^4}{32}$.
*   $G$ is the shear modulus of the material.
*   $\theta$ (theta) is the total angle of twist in radians.
*   $L$ is the length of the shaft.

The maximum shear stress ($\tau_{max}$) occurs at the outer surface, where $r = R$ (or $r = D/2$). So,

$\tau_{max} = \frac{T \cdot R}{J}$

Substituting the value of $J$ for a solid circular shaft:

$\tau_{max} = \frac{T \cdot R}{\frac{\pi R^4}{2}} = \frac{2T}{\pi R^3}$

Or, in terms of diameter $D = 2R$:

$\tau_{max} = \frac{T \cdot (D/2)}{\frac{\pi D^4}{32}} = \frac{16T}{\pi D^3}$

This formula tells us the maximum shear stress a solid shaft will experience for a given torque.

**Connecting Torque to Power:** We know that the power transmitted ($P$) is related to torque ($T$) by $P = T \omega$. If we want to find the maximum torque a shaft can transmit without exceeding a certain allowable shear stress ($\tau_{allow}$), we can rearrange the shear stress formula:

$T = \frac{\tau_{max} \cdot J}{R}$

And for a solid circular shaft:

$T = \frac{\tau_{allow} \cdot (\pi R^4/2)}{R} = \frac{\pi R^3 \tau_{allow}}{2}$

Or, in terms of diameter $D$:

$T = \frac{\tau_{allow} \cdot (\pi D^4/32)}{D/2} = \frac{\pi D^3 \tau_{allow}}{16}$

This $T$ is the maximum torque the shaft can withstand. Now, we can relate this to power. If we need to transmit a certain power $P$ at an angular speed $\omega$, we can determine the required torque:

$T = \frac{P}{\omega}$

And then we can check if the shaft material and dimensions are adequate by comparing this required torque with the maximum allowable torque of the shaft.

**Design Implication (CO6):** This is where **CO6** really comes into play. If we are given a power requirement and an operating speed, we first calculate the torque. Then, we might be given a material with an allowable shear stress ($\tau_{allow}$). Our task would be to select a suitable shaft diameter ($D$) such that the calculated maximum shear stress in the shaft (using the torque derived from power) is less than or equal to $\tau_{allow}$.

The expression $\frac{\pi D^3}{16}$ is often referred to as the **Torsional Section Modulus** for a solid circular shaft (similar to the section modulus $Z$ in bending, $Z = \frac{I}{y_{max}}$). Let's denote the torsional section modulus as $Z_p$. So, $Z_p = \frac{J}{R} = \frac{\pi R^3}{2} = \frac{\pi D^3}{16}$.
The torque equation becomes $T = \tau_{allow} \cdot Z_p$.

**Quick Recall Tip:** Remember the torsional formula $\frac{\tau}{r} = \frac{T}{J}$. For maximum stress at radius $R$, $\tau_{max} = \frac{TR}{J}$. For solid shafts, $J = \frac{\pi D^4}{32}$ and $R = D/2$. Substituting these gives $\tau_{max} = \frac{T(D/2)}{\pi D^4/32} = \frac{16T}{\pi D^3}$. Thus, $T = \frac{\pi D^3 \tau_{allow}}{16}$.

**Example:** A solid circular shaft is designed to transmit 100 kW of power at 1200 RPM. If the allowable shear stress for the shaft material is 80 MPa, determine the minimum diameter of the shaft required.

*   **Given:**
    *   Power, $P = 100 \text{ kW} = 100 \times 10^3 \text{ W}$
    *   Speed, $N = 1200 \text{ RPM}$
    *   Allowable shear stress, $\tau_{allow} = 80 \text{ MPa} = 80 \times 10^6 \text{ N/m}^2$
*   **Step 1: Convert speed to rad/s.**
    $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 1200}{60} = 40 \pi \text{ rad/s}$
*   **Step 2: Calculate the required torque.**
    $T = \frac{P}{\omega} = \frac{100 \times 10^3 \text{ W}}{40 \pi \text{ rad/s}} = \frac{2500}{\pi} \text{ Nm}$
*   **Step 3: Use the torque and allowable stress to find the diameter.**
    We use the formula $T = \frac{\pi D^3 \tau_{allow}}{16}$.
    Rearranging for $D^3$:
    $D^3 = \frac{16T}{\pi \tau_{allow}}$
    $D^3 = \frac{16 \times (\frac{2500}{\pi})}{\pi \times (80 \times 10^6)} = \frac{40000}{\pi^2 \times 80 \times 10^6} = \frac{500}{\pi^2 \times 10^6}$
    $D^3 \approx \frac{500}{9.87 \times 10^6} \approx 50.66 \times 10^{-6} \text{ m}^3$
    $D = \sqrt[3]{50.66 \times 10^{-6}} \approx 0.0370 \text{ m} = 37.0 \text{ mm}$

So, the minimum diameter of the solid shaft required is approximately 37 mm. This illustrates how we use the power and material properties to determine the necessary dimensions, a core task in **CO6**.

### Power Transmission by Hollow Circular Shafts

Now, let's consider **hollow circular shafts**. These are often preferred in engineering because they offer a better strength-to-weight ratio. Think of an axle in a car – it’s usually hollow to reduce weight while maintaining strength.

A hollow circular shaft has an outer radius $R_1$ (or outer diameter $D_1$) and an inner radius $R_2$ (or inner diameter $D_2$). The torque applied to a hollow shaft also causes torsional shear stress, and again, the stress is maximum at the outer surface and minimum (but not zero) at the inner surface.

The torsional shear stress at a radial distance $r$ from the center is still given by the same fundamental relationship:

$\frac{\tau}{r} = \frac{T}{J}$

However, the **Polar Moment of Inertia ($J$)** for a hollow circular shaft is different. It’s the difference between the polar moment of inertia of the outer circle and the inner circle:

$J = J_{outer} - J_{inner}$
$J = \frac{\pi R_1^4}{2} - \frac{\pi R_2^4}{2} = \frac{\pi}{2} (R_1^4 - R_2^4)$

Or, in terms of diameters $D_1$ (outer) and $D_2$ (inner):

$J = \frac{\pi}{32} (D_1^4 - D_2^4)$

The maximum shear stress ($\tau_{max}$) occurs at the outer surface ($r = R_1$ or $r = D_1/2$):

$\tau_{max} = \frac{T \cdot R_1}{J}$

Substituting the value of $J$ for a hollow shaft:

$\tau_{max} = \frac{T \cdot R_1}{\frac{\pi}{2} (R_1^4 - R_2^4)} = \frac{2T R_1}{\pi (R_1^4 - R_2^4)}$

In terms of diameters:

$\tau_{max} = \frac{T \cdot (D_1/2)}{\frac{\pi}{32} (D_1^4 - D_2^4)} = \frac{16T D_1}{\pi (D_1^4 - D_2^4)}$

Notice that the maximum stress is proportional to $D_1$ in the numerator, unlike the solid shaft where it's $D$ (effectively $D^4$ in the denominator).

**Torque Transmitted by a Hollow Shaft:** Similar to the solid shaft, the maximum torque a hollow shaft can transmit without exceeding the allowable shear stress ($\tau_{allow}$) is:

$T = \frac{\tau_{allow} \cdot J}{R_1}$

Substituting the expression for $J$ and $R_1$:

$T = \frac{\tau_{allow} \cdot \frac{\pi}{2} (R_1^4 - R_2^4)}{R_1} = \frac{\pi \tau_{allow} (R_1^4 - R_2^4)}{2 R_1}$

Or, in terms of diameters:

$T = \frac{\tau_{allow} \cdot \frac{\pi}{32} (D_1^4 - D_2^4)}{D_1/2} = \frac{\pi \tau_{allow} (D_1^4 - D_2^4)}{16 D_1}$

**Torsional Section Modulus for Hollow Shafts:** The torsional section modulus for a hollow shaft is $Z_p = \frac{J}{R_1}$.

$Z_p = \frac{\frac{\pi}{2} (R_1^4 - R_2^4)}{R_1} = \frac{\pi}{2 R_1} (R_1^4 - R_2^4)$

Or, in terms of diameters:

$Z_p = \frac{\frac{\pi}{32} (D_1^4 - D_2^4)}{D_1/2} = \frac{\pi}{16 D_1} (D_1^4 - D_2^4)$

So, $T = \tau_{allow} \cdot Z_p$.

**Comparison with Solid Shafts:** For the same external diameter, a hollow shaft is generally stronger (can transmit more torque) and lighter than a solid shaft. This is because the material near the center of a solid shaft experiences very little stress. By removing this material to create a hollow shaft, we reduce the weight without significantly impacting the ability to carry torque, as the stress is concentrated at the outer radii. This aligns with **CO6** in terms of optimizing material usage for strength.

**Example:** A hollow circular shaft has an outer diameter of 50 mm and an inner diameter of 30 mm. It transmits 25 kW of power at 800 RPM. Calculate the maximum shear stress induced in the shaft.

*   **Given:**
    *   Outer diameter, $D_1 = 50 \text{ mm} = 0.050 \text{ m}$
    *   Inner diameter, $D_2 = 30 \text{ mm} = 0.030 \text{ m}$
    *   Power, $P = 25 \text{ kW} = 25 \times 10^3 \text{ W}$
    *   Speed, $N = 800 \text{ RPM}$
*   **Step 1: Convert speed to rad/s.**
    $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 800}{60} = \frac{80 \pi}{3} \text{ rad/s}$
*   **Step 2: Calculate the torque transmitted.**
    $T = \frac{P}{\omega} = \frac{25 \times 10^3 \text{ W}}{\frac{80 \pi}{3} \text{ rad/s}} = \frac{75 \times 10^3}{80 \pi} = \frac{7500}{8 \pi} = \frac{1875}{2 \pi} \text{ Nm}$
    $T \approx 298.4 \text{ Nm}$
*   **Step 3: Calculate the Polar Moment of Inertia ($J$).**
    $J = \frac{\pi}{32} (D_1^4 - D_2^4) = \frac{\pi}{32} (50^4 - 30^4) \times 10^{-12} \text{ m}^4$
    $J = \frac{\pi}{32} (6,250,000 - 810,000) \times 10^{-12} \text{ m}^4$
    $J = \frac{\pi}{32} (5,440,000) \times 10^{-12} \text{ m}^4$
    $J \approx \frac{\pi}{32} \times 5.44 \times 10^6 \times 10^{-12} \text{ m}^4 \approx 0.5336 \times 10^{-6} \text{ m}^4$
*   **Step 4: Calculate the maximum shear stress.**
    $\tau_{max} = \frac{T \cdot (D_1/2)}{J} = \frac{T \cdot R_1}{J}$
    $R_1 = D_1/2 = 50/2 = 25 \text{ mm} = 0.025 \text{ m}$
    $\tau_{max} = \frac{(\frac{1875}{2 \pi} \text{ Nm}) \times 0.025 \text{ m}}{0.5336 \times 10^{-6} \text{ m}^4}$
    $\tau_{max} = \frac{23.4375}{\pi \times 0.5336 \times 10^{-6}} \approx \frac{7.46}{\pi \times 0.5336 \times 10^{-6}} \approx \frac{2.37 \times 10^6}{0.5336}$
    $\tau_{max} \approx 4.44 \times 10^6 \text{ N/m}^2 = 4.44 \text{ MPa}$

This result shows that for the given power and speed, the maximum shear stress induced is well within typical allowable limits for many engineering materials. This calculation directly addresses **CO3** by applying the torsional stress formula and **CO6** by analyzing the stress level for safe design.

### Relation to Stresses on Inclined Planes (CO5)

You might be wondering, "How does this connect to Module 4's focus on stresses on inclined planes?" Excellent question!

When a shaft is subjected to torque, we primarily talk about shear stress. However, if we consider a small element on the surface of the shaft, the torsional shear stress is acting on planes perpendicular and parallel to the shaft's axis. According to the principles of stress transformation (which we covered earlier in this module), these shear stresses, along with any direct stresses (if present, though for pure torsion, there are none), will result in **principal stresses** acting on inclined planes.

Specifically, for a shaft under pure torsion, the planes inclined at 45 degrees to the axis will experience **direct tensile stresses** and **direct compressive stresses** of equal magnitude, which are equal to the maximum shear stress induced by the torsion.

$\sigma_1 = \tau_{max}$ (tensile)
$\sigma_2 = -\tau_{max}$ (compressive)
$\sigma_3 = 0$ (radial stress, negligible)

The maximum shear stress on the shaft's surface, given by $\tau_{max} = \frac{16T}{\pi D^3}$ (for solid) or $\tau_{max} = \frac{16T D_1}{\pi (D_1^4 - D_2^4)}$ (for hollow), is itself a result of shear stress acting on specific planes (cross-sectional planes). When we look at other inclined planes, these shear stresses resolve into normal stresses. This understanding is vital for predicting potential failure modes. For instance, brittle materials like cast iron often fail in tension. If a shaft made of such material is subjected to torque, the 45-degree tensile stress might be the critical factor causing failure, rather than the shear stress on the cross-sectional plane.

This directly supports **CO5** (Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point in a structural member). The $\tau_{max}$ we calculate here *is* the maximum shear stress on the cross-sectional plane. Further transformation would reveal the inclined planes where tensile and compressive stresses equal to this $\tau_{max}$ occur.

### Summary and Key Takeaways

*   **Power Transmission:** Power ($P$) is directly proportional to torque ($T$) and angular velocity ($\omega$), with $P = T\omega$. Ensure consistent units (Watts, Nm, rad/s).
*   **Solid Shafts:**
    *   Torque capacity depends on diameter $D$ and allowable shear stress $\tau_{allow}$.
    *   $T = \frac{\pi D^3 \tau_{allow}}{16}$
    *   $J = \frac{\pi D^4}{32}$
*   **Hollow Shafts:**
    *   Offer better strength-to-weight ratio.
    *   Torque capacity depends on outer diameter $D_1$, inner diameter $D_2$, and $\tau_{allow}$.
    *   $T = \frac{\pi \tau_{allow} (D_1^4 - D_2^4)}{16 D_1}$
    *   $J = \frac{\pi}{32} (D_1^4 - D_2^4)$
*   **Design Aspect (CO6):** For a given power and speed, we calculate torque. Then, using $\tau_{allow}$, we determine the required shaft diameter(s) to ensure safety.
*   **Connection to Inclined Planes (CO5):** Torsional shear stress induces tensile and compressive stresses on planes inclined at 45 degrees to the shaft axis, with magnitudes equal to the maximum shear stress.

Remember these formulas; they are workhorses in mechanical design. Always pay attention to units and whether the shaft is solid or hollow. Understanding the derivation from the basic torsional formula $\frac{\tau}{r} = \frac{T}{J}$ will help you adapt and recall them.

### Sample Questions and Answers

**Q1. Conceptual Question:** Why are hollow shafts often preferred over solid shafts of the same outer diameter for power transmission?

**Answer:** Hollow shafts are preferred because they have a better strength-to-weight ratio. The material near the center of a solid circular shaft experiences very low torsional shear stress. By removing this material to create a hollow shaft, we reduce the overall weight without a proportional decrease in torque-carrying capacity. This is because the maximum shear stress occurs at the outer surface, which is retained in the hollow shaft. This design choice leads to material savings and reduced inertia, crucial in many engineering applications. This relates to **CO6** by emphasizing efficient design.

**Q2. Exam-Oriented Question:** A solid circular shaft is required to transmit 150 kW of power at 1500 RPM. If the maximum allowable shear stress in the shaft is 75 MPa, calculate the minimum diameter of the shaft.

**Solution:**
*   **Given:** $P = 150 \text{ kW} = 150 \times 10^3 \text{ W}$, $N = 1500 \text{ RPM}$, $\tau_{allow} = 75 \text{ MPa} = 75 \times 10^6 \text{ N/m}^2$.
*   **Convert speed to rad/s:**
    $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 1500}{60} = 50 \pi \text{ rad/s}$
*   **Calculate required torque ($T$):**
    $T = \frac{P}{\omega} = \frac{150 \times 10^3 \text{ W}}{50 \pi \text{ rad/s}} = \frac{3000}{\pi} \text{ Nm}$
*   **Use the torque and allowable stress for a solid shaft:**
    $T = \frac{\pi D^3 \tau_{allow}}{16}$
    Rearranging for $D^3$:
    $D^3 = \frac{16T}{\pi \tau_{allow}} = \frac{16 \times (\frac{3000}{\pi})}{\pi \times (75 \times 10^6)}$
    $D^3 = \frac{48000}{\pi^2 \times 75 \times 10^6} = \frac{640}{\pi^2 \times 10^6}$
    $D^3 \approx \frac{640}{9.87 \times 10^6} \approx 64.84 \times 10^{-6} \text{ m}^3$
*   **Calculate diameter ($D$):**
    $D = \sqrt[3]{64.84 \times 10^{-6}} \approx 0.04018 \text{ m} = 40.18 \text{ mm}$

Therefore, the minimum diameter of the solid shaft required is approximately 40.18 mm. This problem directly applies the formulas derived and tests understanding of **CO3** and **CO6**.

**Q3. Conceptual & Calculation Question:** A hollow circular shaft of outer diameter 80 mm transmits 200 kW of power at 400 RPM. If the shaft is also subjected to an axial tensile load of 50 kN, find the maximum shear stress and the maximum tensile stress at any point on the shaft's surface.

**Solution:**
*   **Given:** $D_1 = 80 \text{ mm} = 0.08 \text{ m}$, $P = 200 \text{ kW} = 200 \times 10^3 \text{ W}$, $N = 400 \text{ RPM}$, Axial load $P_{axial} = 50 \text{ kN} = 50 \times 10^3 \text{ N}$.
    *   We need the inner diameter ($D_2$) to calculate $J$ for the hollow shaft. Let's assume a common ratio, e.g., $D_2 = 0.6 D_1$. So, $D_2 = 0.6 \times 80 \text{ mm} = 48 \text{ mm} = 0.048 \text{ m}$. (Note: In a real exam, $D_2$ would be provided).
*   **Torsional Analysis:**
    *   Convert speed to rad/s: $\omega = \frac{2 \pi \times 400}{60} = \frac{40 \pi}{3} \text{ rad/s}$
    *   Calculate torque ($T$): $T = \frac{P}{\omega} = \frac{200 \times 10^3}{40 \pi / 3} = \frac{15000}{\pi} \text{ Nm} \approx 4774.6 \text{ Nm}$.
    *   Calculate Polar Moment of Inertia ($J$):
        $J = \frac{\pi}{32} (D_1^4 - D_2^4) = \frac{\pi}{32} (0.08^4 - 0.048^4) \text{ m}^4$
        $J = \frac{\pi}{32} (4.096 \times 10^{-5} - 0.05308 \times 10^{-5}) \text{ m}^4 = \frac{\pi}{32} (3.5652 \times 10^{-5}) \text{ m}^4 \approx 0.3505 \times 10^{-6} \text{ m}^4$.
    *   Maximum shear stress due to torsion ($\tau_{torsion}$):
        $\tau_{torsion} = \frac{T \cdot (D_1/2)}{J} = \frac{4774.6 \times (0.04 \text{ m})}{0.3505 \times 10^{-6} \text{ m}^4} \approx \frac{190.984}{0.3505 \times 10^{-6}} \approx 544.86 \times 10^6 \text{ N/m}^2 = 544.86 \text{ MPa}$.

*   **Axial Load Analysis:**
    *   Axial stress ($\sigma_{axial}$): $\sigma_{axial} = \frac{P_{axial}}{A}$
    *   Calculate cross-sectional area ($A$):
        $A = \frac{\pi}{4} (D_1^2 - D_2^2) = \frac{\pi}{4} (0.08^2 - 0.048^2) \text{ m}^2 = \frac{\pi}{4} (0.0064 - 0.002304) \text{ m}^2$
        $A = \frac{\pi}{4} (0.004096) \text{ m}^2 \approx 0.003217 \text{ m}^2$.
    *   $\sigma_{axial} = \frac{50 \times 10^3 \text{ N}}{0.003217 \text{ m}^2} \approx 15.54 \times 10^6 \text{ N/m}^2 = 15.54 \text{ MPa}$.
    *   This axial stress is a direct tensile stress.

*   **Combined Stresses:**
    We have a state of stress at the surface with:
    *   Shear stress, $\tau = \tau_{torsion} = 544.86 \text{ MPa}$
    *   Direct tensile stress, $\sigma_x = \sigma_{axial} = 15.54 \text{ MPa}$
    *   Direct stress in the radial direction is zero ($\sigma_y = 0$).

    This is a biaxial stress field with shear. To find the principal stresses ($\sigma_1, \sigma_2$) and maximum shear stress ($\tau_{max}$), we use the formulas for stress transformation:

    $\sigma_1, \sigma_2 = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau^2}$
    $\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau^2}$

    Here, $\sigma_y = 0$.
    $\sigma_1, \sigma_2 = \frac{15.54 + 0}{2} \pm \sqrt{\left(\frac{15.54 - 0}{2}\right)^2 + (544.86)^2}$
    $\sigma_1, \sigma_2 = 7.77 \pm \sqrt{(7.77)^2 + (544.86)^2}$
    $\sigma_1, \sigma_2 = 7.77 \pm \sqrt{60.37 + 296872.6}$
    $\sigma_1, \sigma_2 = 7.77 \pm \sqrt{296933} = 7.77 \pm 544.91$

    $\sigma_1 = 7.77 + 544.91 = 552.68 \text{ MPa}$ (Maximum Tensile Stress)
    $\sigma_2 = 7.77 - 544.91 = -537.14 \text{ MPa}$ (Maximum Compressive Stress)

    $\tau_{max} = 544.91 \text{ MPa}$ (Maximum Shear Stress)

    So, the maximum shear stress induced in the shaft is approximately 544.91 MPa, and the maximum tensile stress is approximately 552.68 MPa. This question directly tests **CO3**, **CO5**, and **CO6** by combining torsion with axial load and applying stress transformation principles.

This concludes our discussion on power transmission by circular and hollow shafts. I encourage you to practice more problems from your textbooks to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
