---
title: "Combined Bending & Twisting Moments"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 1: Design of Shafts: Design of Shafts Based on Bending Moment"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d5b"
status: "completed"
scrapedAt: "2026-05-20T18:10:46.961Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 1: Design of Shafts

### Topic: Combined Bending & Twisting Moments

**Learning Outcomes:**

*   Understand the phenomenon of combined bending and twisting moments acting on a shaft.
*   Determine the equivalent twisting moment for a shaft subjected to combined bending and twisting.
*   Apply relevant design theories (e.g., Maximum Shear Stress Theory, Distortion Energy Theory) to design shafts under combined loading.
*   Calculate the required shaft diameter based on the equivalent twisting moment and permissible stresses.
*   Consider factors like stress concentration and fatigue in the design of shafts subjected to combined loading.

---

### 1. Introduction to Shafts and Combined Loading

**Key Concepts:**

*   **Shaft:** A rotating machine element that transmits power and torque from one pulley or gear to another. Shafts are typically subjected to both axial loads (though often negligible in basic design) and bending moments, as well as torsional moments.
*   **Torsion:** The twisting of a shaft due to the application of a torque. This induces shear stresses within the shaft material.
*   **Bending:** The deformation of a shaft due to the application of a bending moment. This induces tensile and compressive stresses within the shaft material.
*   **Combined Loading:** In reality, most shafts in machinery are subjected to *simultaneous* bending moments and torsional moments. This is a critical aspect of shaft design.

**Why is it important to consider combined loading?**

When both bending and twisting moments are present, the stress distribution within the shaft becomes more complex. Simply designing for each type of load independently might lead to an under-designed or over-designed shaft. Combined loading typically results in higher stresses at certain points, which can significantly affect the shaft's fatigue life and overall reliability.

**Examples of Combined Loading in Shafts:**

*   **Line Shafts:** Transmit power to multiple machines via pulleys. Pulleys themselves exert bending moments due to belt tensions, and the power transmission generates torsional moments.
*   **Axle Shafts:** Transmit torque to wheels, but also experience bending due to the weight of the vehicle and road irregularities.
*   **Crankshafts:** Bear complex bending, torsional, and sometimes axial stresses due to the reciprocating motion of pistons.
*   **Shafts supporting Gears or Pulleys:** Forces from gears and pulleys create bending moments, while the transmitted power creates torsional moments.

---

### 2. Stresses Induced by Combined Loading

When a shaft is subjected to both a bending moment ($M$) and a torsional moment ($T$), the following stresses are induced:

*   **Bending Stress ($\sigma_b$):** This is a normal stress (tensile or compressive) that varies linearly across the shaft's diameter. It is maximum at the outer surface.
    *   Formula: $\sigma_b = \frac{M y}{I}$
    *   Where:
        *   $M$ = Bending Moment
        *   $y$ = Distance from the neutral axis to the point of interest (for solid circular shafts, $y_{max} = d/2$)
        *   $I$ = Area moment of inertia of the shaft's cross-section.
    *   For a solid circular shaft of diameter $d$, $I = \frac{\pi d^4}{64}$.
    *   Therefore, the maximum bending stress is: $\sigma_{b,max} = \frac{M (d/2)}{\pi d^4 / 64} = \frac{32 M}{\pi d^3}$.

*   **Shear Stress due to Torsion ($\tau_t$):** This is a shear stress that varies linearly from zero at the center to a maximum at the outer surface.
    *   Formula: $\tau_t = \frac{T r}{J}$
    *   Where:
        *   $T$ = Torsional Moment (Torque)
        *   $r$ = Radial distance from the center (for maximum shear, $r_{max} = d/2$)
        *   $J$ = Polar moment of inertia of the shaft's cross-section.
    *   For a solid circular shaft of diameter $d$, $J = \frac{\pi d^4}{32}$.
    *   Therefore, the maximum shear stress due to torsion is: $\tau_{t,max} = \frac{T (d/2)}{\pi d^4 / 32} = \frac{16 T}{\pi d^3}$.

---

### 3. Equivalent Twisting Moment (Torque)

To design a shaft subjected to combined bending and twisting, we need to determine an "equivalent" twisting moment that would produce the same critical stress as the combined loading. This allows us to use standard torsion formulas for design.

**Key Concept:** The critical stress in a shaft subjected to combined loading is typically a **resultant stress**, which is a combination of normal stress (from bending) and shear stress (from torsion). The failure theories often convert this complex stress state into an equivalent shear stress or equivalent normal stress.

Two primary methods are used to determine the equivalent twisting moment:

#### 3.1. Based on Maximum Shear Stress Theory (Guest's Theory)

**Key Concept:** This theory states that failure occurs when the maximum shear stress in the material reaches the shear stress at the yield point of the material under uniaxial tension. For a shaft under combined stress, the maximum shear stress occurs at the outer surface.

When a shaft is subjected to a bending moment ($M$) and a torsional moment ($T$), the stresses at any point on the outer surface can be represented as:

*   Normal stress: $\sigma_x = \frac{32 M}{\pi d^3}$
*   Shear stress: $\tau_{xy} = \frac{16 T}{\pi d^3}$

According to the Maximum Shear Stress Theory, the equivalent shear stress ($\tau_{eq}$) is given by:

$\tau_{eq} = \frac{1}{2} \sqrt{\sigma_x^2 + 4 \tau_{xy}^2}$

For a shaft subjected to combined loading, we want to find an equivalent torque ($T_{eq}$) that, if applied alone, would produce the same maximum shear stress. If only torque $T_{eq}$ is applied, the shear stress is $\tau_{eq} = \frac{16 T_{eq}}{\pi d^3}$.

Equating the two expressions for $\tau_{eq}$:

$\frac{16 T_{eq}}{\pi d^3} = \frac{1}{2} \sqrt{\left(\frac{32 M}{\pi d^3}\right)^2 + 4 \left(\frac{16 T}{\pi d^3}\right)^2}$

$\frac{16 T_{eq}}{\pi d^3} = \frac{1}{2} \sqrt{\frac{1024 M^2}{(\pi d^3)^2} + \frac{1024 T^2}{(\pi d^3)^2}}$

$\frac{16 T_{eq}}{\pi d^3} = \frac{1}{2} \frac{32}{\pi d^3} \sqrt{M^2 + T^2}$

$T_{eq} = \frac{1}{2} \sqrt{M^2 + T^2}$  **This is incorrect. Let's re-evaluate.**

Let's simplify the expression for $\tau_{eq}$ first:

$\tau_{eq} = \frac{1}{2} \sqrt{\sigma_x^2 + 4 \tau_{xy}^2}$
Substitute the stresses in terms of $M$ and $T$:
$\tau_{eq} = \frac{1}{2} \sqrt{\left(\frac{32 M}{\pi d^3}\right)^2 + 4 \left(\frac{16 T}{\pi d^3}\right)^2}$
$\tau_{eq} = \frac{1}{2} \sqrt{\frac{1024 M^2}{(\pi d^3)^2} + \frac{1024 T^2}{(\pi d^3)^2}}$
$\tau_{eq} = \frac{1}{2} \frac{32}{\pi d^3} \sqrt{M^2 + T^2}$  **Still the same mistake. Check the formula of stresses.**

Let's use the standard formulas for maximum bending stress and maximum torsional shear stress directly:
Maximum bending stress: $\sigma_{b,max} = \frac{M}{Z}$, where $Z$ is the section modulus. For a solid circular shaft, $Z = \frac{\pi d^3}{32}$. So, $\sigma_{b,max} = \frac{32M}{\pi d^3}$.
Maximum shear stress due to torsion: $\tau_{t,max} = \frac{T}{Z_p}$, where $Z_p$ is the polar section modulus. For a solid circular shaft, $Z_p = \frac{\pi d^3}{16}$. So, $\tau_{t,max} = \frac{16T}{\pi d^3}$.

Now, consider a state of stress with normal stress $\sigma_x$ and shear stress $\tau_{xy}$. The maximum shear stress is given by:
$\tau_{max} = \frac{1}{2} \sqrt{\sigma_x^2 + 4\tau_{xy}^2}$

Here, $\sigma_x$ represents the normal stress due to bending and $\tau_{xy}$ represents the shear stress due to torsion.
So, $\tau_{max} = \frac{1}{2} \sqrt{\left(\frac{32 M}{\pi d^3}\right)^2 + 4 \left(\frac{16 T}{\pi d^3}\right)^2}$
$\tau_{max} = \frac{1}{2} \sqrt{\frac{1024 M^2}{(\pi d^3)^2} + \frac{1024 T^2}{(\pi d^3)^2}}$
$\tau_{max} = \frac{1}{2} \frac{32}{\pi d^3} \sqrt{M^2 + T^2}$  **Ah, I see the issue. The shear stress is $\tau_{xy}$, not necessarily the maximum shear stress component in the $xy$ plane.**

Let's restart with the correct understanding of stress components.
At the outer surface of the shaft:
*   Normal stress due to bending: $\sigma_1 = \frac{M y}{I} = \frac{32 M}{\pi d^3}$ (along the x-axis, if bending is in xy plane)
*   Shear stress due to torsion: $\tau_{12} = \frac{T r}{J} = \frac{16 T}{\pi d^3}$ (acting in the plane of the cross-section)

Consider a plane at $45^\circ$ to the axis of the shaft. The normal and shear stresses on this plane are:
Normal stress $\sigma_n = \frac{\sigma_1}{2}$
Shear stress $\tau_{n\tau} = \sqrt{(\frac{\sigma_1}{2})^2 + \tau_{12}^2}$

This $\tau_{n\tau}$ is the maximum shear stress in the material.
So, $\tau_{max} = \sqrt{\left(\frac{1}{2} \frac{32 M}{\pi d^3}\right)^2 + \left(\frac{16 T}{\pi d^3}\right)^2}$
$\tau_{max} = \sqrt{\frac{256 M^2}{(\pi d^3)^2} + \frac{256 T^2}{(\pi d^3)^2}}$
$\tau_{max} = \frac{16}{\pi d^3} \sqrt{M^2 + T^2}$  **This formula for $\tau_{max}$ is correct for combined bending and torsion.**

Now, according to the Maximum Shear Stress Theory, failure occurs when $\tau_{max} = \tau_y$, where $\tau_y$ is the yield shear stress.
The shear stress due to pure torsion that causes $\tau_y$ is $\tau_{y} = \frac{16 T_{eq}}{\pi d^3}$.
Equating these:
$\frac{16 T_{eq}}{\pi d^3} = \frac{16}{\pi d^3} \sqrt{M^2 + T^2}$

Therefore, the **Equivalent Twisting Moment ($T_{eq}$) based on Maximum Shear Stress Theory is:**

$$T_{eq} = \sqrt{M^2 + T^2}$$

*This is the formula often cited in textbooks for equivalent torque when considering yield strength in shear.*

**Design Criterion:** $\tau_{eq, induced} \le \tau_{allowable}$
$\frac{16 T_{eq}}{\pi d^3} \le \tau_{allowable}$
$\frac{16 \sqrt{M^2 + T^2}}{\pi d^3} \le \tau_{allowable}$

To design for the shaft diameter $d$, we can rearrange:
$d^3 \ge \frac{16 \sqrt{M^2 + T^2}}{\pi \tau_{allowable}}$

#### 3.2. Based on Distortion Energy Theory (Von Mises Theory)

**Key Concept:** This theory states that failure occurs when the distortion strain energy per unit volume in the material reaches the distortion strain energy per unit volume at the yield point of the material under uniaxial tension. This theory generally provides a more accurate prediction for ductile materials, especially for complex stress states.

For a general 3D stress state, the equivalent stress ($\sigma_v$) according to the Distortion Energy Theory is:
$\sigma_v = \frac{1}{\sqrt{2}} \sqrt{(\sigma_x - \sigma_y)^2 + (\sigma_y - \sigma_z)^2 + (\sigma_z - \sigma_x)^2 + 6(\tau_{xy}^2 + \tau_{yz}^2 + \tau_{zx}^2)}$

In our case, at the outer surface of the shaft:
*   Normal stress (along the axis of the shaft, say x-axis): $\sigma_x = \frac{32 M}{\pi d^3}$
*   Shear stress (in the plane of the cross-section, say xy plane): $\tau_{xy} = \frac{16 T}{\pi d^3}$
*   Other stresses are zero ($\sigma_y = \sigma_z = \tau_{yz} = \tau_{zx} = 0$).

Substituting these into the Von Mises formula:
$\sigma_v = \frac{1}{\sqrt{2}} \sqrt{\left(\frac{32 M}{\pi d^3} - 0\right)^2 + (0 - 0)^2 + (0 - \frac{32 M}{\pi d^3})^2 + 6\left(\frac{16 T}{\pi d^3}\right)^2}$
$\sigma_v = \frac{1}{\sqrt{2}} \sqrt{\left(\frac{32 M}{\pi d^3}\right)^2 + \left(\frac{32 M}{\pi d^3}\right)^2 + 6\left(\frac{16 T}{\pi d^3}\right)^2}$
$\sigma_v = \frac{1}{\sqrt{2}} \sqrt{2 \left(\frac{32 M}{\pi d^3}\right)^2 + 6 \left(\frac{16 T}{\pi d^3}\right)^2}$
$\sigma_v = \sqrt{\left(\frac{32 M}{\pi d^3}\right)^2 + 3 \left(\frac{16 T}{\pi d^3}\right)^2}$

$\sigma_v = \sqrt{\frac{1024 M^2}{(\pi d^3)^2} + 3 \frac{256 T^2}{(\pi d^3)^2}}$
$\sigma_v = \sqrt{\frac{1024 M^2 + 768 T^2}{(\pi d^3)^2}}$
$\sigma_v = \frac{1}{\pi d^3} \sqrt{1024 M^2 + 768 T^2}$
$\sigma_v = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$

According to the Distortion Energy Theory, failure occurs when $\sigma_v = \sigma_y$, where $\sigma_y$ is the yield strength in uniaxial tension.
We can express this in terms of an equivalent torque. If only torque $T_{eq}$ were applied, the maximum shear stress would be $\tau_{eq,T} = \frac{16 T_{eq}}{\pi d^3}$. The equivalent tensile stress from this torque would be $\sigma_{eq,T} = 2 \tau_{eq,T} = \frac{32 T_{eq}}{\pi d^3}$ (from Maximum Shear Stress Theory for pure shear, or using Von Mises for pure shear $\sigma_v = \sqrt{3} \tau_{max}$).

Let's use the equivalence of yielding. Yielding under combined stress occurs when the Von Mises stress equals the yield stress $\sigma_y$.
So, $\frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2} = \sigma_y$.

We want to find an equivalent torque $T_{eq}$ such that if only torsion is applied, the yielding condition is met.
For pure torsion, $\sigma_v = \sqrt{3} \tau_{max} = \sqrt{3} \frac{16 T_{eq}}{\pi d^3} = \frac{16 \sqrt{3} T_{eq}}{\pi d^3}$.
Equating this to $\sigma_y$:
$\frac{16 \sqrt{3} T_{eq}}{\pi d^3} = \sigma_y$

So, $\sigma_y = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$.

Equating the two expressions for $\sigma_y$:
$\frac{16 \sqrt{3} T_{eq}}{\pi d^3} = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$
$\sqrt{3} T_{eq} = 2 \sqrt{M^2 + 0.75 T^2}$
$T_{eq} = \frac{2}{\sqrt{3}} \sqrt{M^2 + 0.75 T^2}$
$T_{eq} = \sqrt{\frac{4}{3} (M^2 + 0.75 T^2)}$
$T_{eq} = \sqrt{\frac{4}{3} M^2 + T^2}$

Therefore, the **Equivalent Twisting Moment ($T_{eq}$) based on Distortion Energy Theory is:**

$$T_{eq} = \sqrt{M^2 + \frac{3}{4} T^2}$$

**Design Criterion:** $\sigma_{eq,induced} \le \sigma_{allowable}$
$\frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2} \le \sigma_{allowable}$

To design for the shaft diameter $d$:
$d^3 \ge \frac{32}{\pi \sigma_{allowable}} \sqrt{M^2 + 0.75 T^2}$

---

**Comparison of $T_{eq}$ Formulas:**

*   **Max Shear Stress Theory ($T_{eq} = \sqrt{M^2 + T^2}$):** Generally more conservative, especially when $T$ is significant.
*   **Distortion Energy Theory ($T_{eq} = \sqrt{M^2 + 0.75 T^2}$):** Generally preferred for ductile materials as it is less conservative and more accurately reflects experimental results.

**Important Note:** The choice between the two theories depends on the material properties and the desired level of conservatism. Bhandari and other textbooks often present both. For design purposes, it's common to use the $\sqrt{M^2 + 0.75 T^2}$ formula derived from Von Mises' criterion for general ductile materials.

---

### 4. Design Procedure for Shafts Under Combined Loading

The general procedure involves the following steps:

1.  **Identify Loads and Support Conditions:** Determine all forces acting on the shaft, which will allow you to calculate the bending moments and torsional moments at various points along the shaft. This is usually done by drawing free-body diagrams and shear force/bending moment diagrams.
2.  **Calculate Maximum Bending Moment ($M$) and Maximum Torsional Moment ($T$):** For the critical section of the shaft where stresses are highest, find the maximum values of $M$ and $T$.
3.  **Select a Failure Theory:**
    *   For ductile materials (most common for shafts), Distortion Energy Theory (Von Mises) is often preferred.
    *   Maximum Shear Stress Theory (Guest) can be used for a more conservative design.
4.  **Calculate the Equivalent Twisting Moment ($T_{eq}$):**
    *   Using Maximum Shear Stress Theory: $T_{eq} = \sqrt{M^2 + T^2}$
    *   Using Distortion Energy Theory: $T_{eq} = \sqrt{M^2 + 0.75 T^2}$
5.  **Determine the Permissible Stress:**
    *   For static loading, the permissible stress is typically the yield strength divided by a factor of safety ($\sigma_{allowable} = \frac{\sigma_y}{FS}$ or $\tau_{allowable} = \frac{\tau_y}{FS}$).
    *   For fatigue loading, the endurance limit and fatigue strength modification factors are used.
6.  **Calculate the Required Diameter ($d$):**
    *   Using the torsion formula for the equivalent twisting moment: $\tau_{eq,induced} = \frac{16 T_{eq}}{\pi d^3}$.
    *   Set $\tau_{eq,induced} \le \tau_{allowable}$.
    *   $d^3 \ge \frac{16 T_{eq}}{\pi \tau_{allowable}}$.
    *   Alternatively, using the Von Mises equivalent stress directly: $\sigma_{eq,induced} = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$.
    *   Set $\sigma_{eq,induced} \le \sigma_{allowable}$.
    *   $d^3 \ge \frac{32}{\pi \sigma_{allowable}} \sqrt{M^2 + 0.75 T^2}$.
7.  **Consider Stress Concentration:** If there are shoulders, keyways, or holes, stress concentration factors ($k_t$ for static and $k_{fs}$ for fatigue) should be applied to the calculated stresses or moments.
    *   With stress concentration: $T_{eq,effective} = \sqrt{(k_t M)^2 + (k_{fs} T)^2}$ (for fatigue design using equivalent torque) or design using stress concentration factors in the stress calculation.
8.  **Check for Deflection and Rigidity:** Ensure that the calculated diameter provides adequate stiffness and does not lead to excessive deflection, which could cause misalignment or interference.
9.  **Select Standard Size:** Choose a standard diameter for the shaft that is equal to or greater than the calculated minimum diameter.

---

### 5. Examples and Applications

**Example 1: Shaft Subjected to Bending and Torsion**

A solid circular shaft is subjected to a bending moment of $2000$ Nm and a torsional moment of $3000$ Nm. The material has an allowable shear stress of $80$ MPa. Design the shaft using the maximum shear stress theory.

**Solution:**

1.  **Given:**
    *   $M = 2000$ Nm $= 2 \times 10^6$ Nmm
    *   $T = 3000$ Nm $= 3 \times 10^6$ Nmm
    *   $\tau_{allowable} = 80$ MPa $= 80$ N/mm$^2$
    *   Failure Theory: Maximum Shear Stress Theory

2.  **Calculate Equivalent Twisting Moment ($T_{eq}$):**
    $T_{eq} = \sqrt{M^2 + T^2}$
    $T_{eq} = \sqrt{(2 \times 10^6)^2 + (3 \times 10^6)^2}$
    $T_{eq} = \sqrt{4 \times 10^{12} + 9 \times 10^{12}}$
    $T_{eq} = \sqrt{13 \times 10^{12}}$
    $T_{eq} = \sqrt{13} \times 10^6$ Nmm
    $T_{eq} \approx 3.606 \times 10^6$ Nmm

3.  **Calculate Required Diameter ($d$):**
    The induced maximum shear stress due to this equivalent torque is $\tau_{eq,induced} = \frac{16 T_{eq}}{\pi d^3}$.
    We need $\tau_{eq,induced} \le \tau_{allowable}$.
    $\frac{16 T_{eq}}{\pi d^3} \le \tau_{allowable}$
    $d^3 \ge \frac{16 T_{eq}}{\pi \tau_{allowable}}$
    $d^3 \ge \frac{16 \times (3.606 \times 10^6)}{\pi \times 80}$
    $d^3 \ge \frac{57.696 \times 10^6}{251.327}$
    $d^3 \ge 229565.3$ mm$^3$

4.  **Find $d$:**
    $d = \sqrt[3]{229565.3}$ mm
    $d \approx 61.24$ mm

5.  **Select Standard Size:** A standard shaft diameter of $65$ mm would be chosen.

**Example 2: Shaft Subjected to Bending and Torsion (Distortion Energy Theory)**

Use the same shaft as in Example 1, but design using the Distortion Energy Theory. The material has an allowable tensile stress of $120$ MPa.

**Solution:**

1.  **Given:**
    *   $M = 2000$ Nm $= 2 \times 10^6$ Nmm
    *   $T = 3000$ Nm $= 3 \times 10^6$ Nmm
    *   $\sigma_{allowable} = 120$ MPa $= 120$ N/mm$^2$
    *   Failure Theory: Distortion Energy Theory

2.  **Calculate Equivalent Twisting Moment ($T_{eq}$) (or use equivalent stress directly):**
    Using the equivalent stress formula derived from Von Mises:
    $\sigma_{eq,induced} = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$
    We need $\sigma_{eq,induced} \le \sigma_{allowable}$.
    $\frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2} \le \sigma_{allowable}$
    $d^3 \ge \frac{32}{\pi \sigma_{allowable}} \sqrt{M^2 + 0.75 T^2}$

3.  **Calculate $d^3$:**
    $0.75 T^2 = 0.75 \times (3 \times 10^6)^2 = 0.75 \times 9 \times 10^{12} = 6.75 \times 10^{12}$
    $M^2 = (2 \times 10^6)^2 = 4 \times 10^{12}$
    $\sqrt{M^2 + 0.75 T^2} = \sqrt{4 \times 10^{12} + 6.75 \times 10^{12}} = \sqrt{10.75 \times 10^{12}}$
    $\sqrt{M^2 + 0.75 T^2} \approx 3.279 \times 10^6$ Nmm

    $d^3 \ge \frac{32}{\pi \times 120} \times (3.279 \times 10^6)$
    $d^3 \ge \frac{32}{376.99} \times (3.279 \times 10^6)$
    $d^3 \ge 0.08488 \times 3.279 \times 10^6$
    $d^3 \ge 278144.9$ mm$^3$

4.  **Find $d$:**
    $d = \sqrt[3]{278144.9}$ mm
    $d \approx 65.28$ mm

5.  **Select Standard Size:** A standard shaft diameter of $65$ mm or $70$ mm would be chosen. Note that this is slightly larger than what was calculated using the Max Shear Stress Theory in Example 1, indicating the Von Mises criterion is less conservative in this case.

---

### 6. Fatigue Consideration and Stress Concentration

**Key Concepts:**

*   **Fatigue:** The progressive and localized structural damage that occurs when a material is subjected to cyclic loading. Shafts are often subjected to fluctuating bending and torsional moments.
*   **Endurance Limit ($\sigma_e$ or $\tau_e$):** The stress level below which a material can withstand an infinite number of cycles without fatigue failure.
*   **Fatigue Strength Modification Factors:** Factors that adjust the endurance limit for different loading conditions, surface finish, size, temperature, and reliability.
*   **Stress Concentration:** Geometric discontinuities (e.g., shoulders, keyways, holes) cause local increases in stress, which can significantly reduce fatigue life.

**Design Procedure for Fatigue:**

1.  **Calculate fluctuating and steady components of bending and torque.**
2.  **Apply stress concentration factors.** For fatigue, different factors are used for bending ($k_t$ for bending stress) and torsion ($k_{ts}$ for shear stress).
3.  **Calculate equivalent static stresses or equivalent fluctuating stresses.** This often involves using an "effective" bending moment and torque that accounts for stress concentration.
    *   $M' = k_t M$
    *   $T' = k_{ts} T$
4.  **Use fatigue criteria:** Apply theories like Soderberg, Gerber, Goodman, or Von Mises fatigue criterion to determine the required shaft diameter under cyclic loading.
5.  **Equivalent Torque for Fatigue:** A common approach is to calculate an equivalent torque for fatigue that accounts for both bending and torsion, including stress concentration.
    For fatigue design under combined stresses, the equivalent torque can be expressed as:
    $T_{eq, fatigue} = \sqrt{(k_t M)^2 + (k_{ts} T)^2}$  (This is for Von Mises fatigue criterion if $\sigma_e$ and $\tau_e$ are related by $\sigma_e = \sqrt{3} \tau_e$).
    Using this equivalent torque, the design can proceed similarly to static design but with fatigue strength values.

**Sources of Information (Textbooks):**

*   **B.S. Bhandari, Chapter 5 (Shaft Design):** Discusses combined stresses, equivalent torque calculation (both $\sqrt{M^2 + T^2}$ and $\sqrt{M^2 + 0.75 T^2}$), and fatigue design considerations. He often uses an equivalent static load approach.
*   **R. L. Norton, Chapter 10 (Shaft Design):** Covers static and fatigue analysis of shafts, including combined loading and stress concentration effects. He also details the use of fatigue modification factors and failure theories.
*   **K. Raghavendra, Chapter 2 (Design of Shafts):** Provides a good overview of stresses in shafts, combined loading, equivalent torque, and fatigue design.
*   **P.C. Sharma & D.K. Agarwal, Chapter 4 (Shafts):** Explains stresses in shafts, bending and torsion, combined effects, and fatigue life prediction.
*   **V. B. Bhandari, Machine Design Data Book:** Contains stress concentration factors, fatigue strength data, and design formulas.
*   **K. Mahadevan & K. Balaveera Reddy, Design Data Hand Book:** Similar to Bhandari's data book, providing design data and formulas.
*   **PSG Design Data:** A comprehensive Indian data book for mechanical design, likely containing relevant formulas and data for shafts.
*   **Shigley's Mechanical Engineering Design:** A classic reference that covers the theoretical basis of stress analysis, failure theories, and fatigue design in great detail.
*   **Juvinall & Marshek, Fundamentals of Machine Component Design:** Focuses on the mechanics of materials and fatigue, providing a strong theoretical foundation for shaft design.

---

### 7. Important Points to Remember

*   **Combined loading is the norm:** Always assume shafts are subjected to both bending and torsion unless specified otherwise.
*   **Equivalent Twisting Moment:** Use the concept of equivalent twisting moment to simplify the design process.
*   **Failure Theories:** Understand the difference between Maximum Shear Stress Theory and Distortion Energy Theory and when to use them. Distortion Energy Theory is generally preferred for ductile materials.
*   **Stress Concentration:** Crucial for fatigue life. Always account for geometric discontinuities.
*   **Fatigue Design:** For applications with cyclic loading, fatigue strength and endurance limits are paramount.
*   **Allowable Stresses:** These are derived from material properties (yield strength, ultimate strength, endurance limit) and a chosen factor of safety.
*   **Data Books:** Utilize design data books for stress concentration factors, fatigue modification factors, and material properties.
*   **Deflection:** Never ignore the rigidity and deflection requirements of shafts.

---

### 8. Practice Questions

**Question 1:**
A shaft is subjected to a bending moment $M = 1500$ Nm and a torsional moment $T = 2000$ Nm. If the allowable shear stress for the shaft material is $85$ MPa, determine the required diameter of the shaft using the Distortion Energy Theory.
(Use $\sigma_{allowable} = \frac{\sqrt{3}}{2} \tau_{allowable}$ for converting shear allowable to tensile allowable for Von Mises).

**Answer:**
Given:
$M = 1500$ Nm $= 1.5 \times 10^6$ Nmm
$T = 2000$ Nm $= 2 \times 10^6$ Nmm
$\tau_{allowable} = 85$ MPa $= 85$ N/mm$^2$

Using Distortion Energy Theory:
Equivalent tensile stress $\sigma_{eq} = \frac{32}{\pi d^3} \sqrt{M^2 + 0.75 T^2}$
We need $\sigma_{eq} \le \sigma_{allowable}$.
To relate to shear allowable: $\sigma_{allowable} = \frac{\sqrt{3}}{2} \tau_{allowable} = \frac{\sqrt{3}}{2} \times 85 \approx 73.62$ MPa.

$d^3 \ge \frac{32}{\pi \sigma_{allowable}} \sqrt{M^2 + 0.75 T^2}$
$0.75 T^2 = 0.75 \times (2 \times 10^6)^2 = 0.75 \times 4 \times 10^{12} = 3 \times 10^{12}$
$M^2 = (1.5 \times 10^6)^2 = 2.25 \times 10^{12}$
$\sqrt{M^2 + 0.75 T^2} = \sqrt{2.25 \times 10^{12} + 3 \times 10^{12}} = \sqrt{5.25 \times 10^{12}} \approx 2.291 \times 10^6$ Nmm

$d^3 \ge \frac{32}{\pi \times 73.62} \times (2.291 \times 10^6)$
$d^3 \ge \frac{32}{231.26} \times (2.291 \times 10^6)$
$d^3 \ge 0.13836 \times 2.291 \times 10^6$
$d^3 \ge 317000.76$ mm$^3$

$d = \sqrt[3]{317000.76} \approx 68.18$ mm.
A standard shaft diameter of $70$ mm should be chosen.

**Question 2:**
A shaft carrying a gear is subjected to a bending moment of $800$ Nm and a torque of $1200$ Nm. The shaft is made of steel with an ultimate tensile strength of $500$ MPa and yield strength of $350$ MPa. The shaft has a shoulder fillet with a stress concentration factor of $2.5$ for bending and $2.0$ for torsion. The desired fatigue life is $10^7$ cycles. Using Goodman's criterion and appropriate fatigue strength modification factors (assume a surface finish factor of $0.8$, size factor of $0.85$, and load factor of $1$ for bending and $0.5$ for torsion if not specified in problem statement). Calculate the diameter of the shaft. (Note: For simplification, assume endurance limit is half of ultimate tensile strength).

**Answer (Conceptual Outline):**
1.  **Material Properties:** $\sigma_u = 500$ MPa, $\sigma_y = 350$ MPa.
2.  **Endurance Limit:** $\sigma_e' = \sigma_u / 2 = 250$ MPa.
3.  **Fatigue Strength Modification Factors:**
    *   Surface finish factor ($k_a$) = $0.8$
    *   Size factor ($k_b$) = $0.85$
    *   Load factor ($k_c$): For bending, $k_c = 1$; For torsion, $k_c = 0.5$ (common assumption).
    *   Reliability factor ($k_d$) = $1$ (for $99\%$ reliability, assume standard value).
    *   Miscellaneous effect factor ($k_e$) = $1$
    *   Endurance limit $\sigma_e = k_a k_b k_c k_d k_e \sigma_e'$
        *   For bending: $\sigma_e^{bend} = 0.8 \times 0.85 \times 1 \times 1 \times 1 \times 250 = 170$ MPa.
        *   For torsion: $\tau_e = 0.8 \times 0.85 \times 0.5 \times 1 \times 1 \times (\sigma_e' \times \text{relation between } \sigma_e' \text{ and } \tau_e)$. Assuming $\tau_e = 0.55 \sigma_e'$ for steel, $\tau_e = 0.55 \times 250 = 137.5$ MPa. *However, for Goodman's criterion using equivalent torque, it's better to find an equivalent tensile endurance limit.*
4.  **Stress Concentration Factors:** $k_t = 2.5$ (bending), $k_{ts} = 2.0$ (torsion).
5.  **Equivalent Static Loads for Fatigue (considering stress concentration):**
    *   $M_{eff} = k_t M = 2.5 \times 800 = 2000$ Nm
    *   $T_{eff} = k_{ts} T = 2.0 \times 1200 = 2400$ Nm
6.  **Equivalent Fluctuating Torque using Von Mises:**
    *   $T_{eq, fluctuate} = \sqrt{M_{eff}^2 + 0.75 T_{eff}^2}$
    *   $T_{eq, fluctuate} = \sqrt{(2000)^2 + 0.75 (2400)^2} = \sqrt{4 \times 10^6 + 0.75 \times 5.76 \times 10^6} = \sqrt{4 \times 10^6 + 4.32 \times 10^6} = \sqrt{8.32 \times 10^6}$ Nm $\approx 2884$ Nm.
7.  **Equivalent Tensile Strength:** Using Goodman's criterion: $\frac{\sigma_{mean}}{\sigma_y} + \frac{\sigma_{alt}}{\sigma_e} = 1$. For pure torque, the alternating stress is $\tau_{alt}$ and the mean stress is $\tau_{mean}$. For combined loading with fluctuating components, this becomes more complex.
    A common simplification is to find an equivalent alternating torque $T_{ea}$ and equivalent mean torque $T_{em}$ and use a criterion like:
    $\frac{\sigma_{ea} + \sigma_{em}}{\sigma_y} + \frac{\tau_{ea}}{\tau_e} = 1$ (for certain criteria).
    However, if we assume the entire load is fluctuating (a common simplification for fatigue problems unless mean loads are specified), we can use the effective fluctuating components and appropriate allowable stresses.
    Let's assume mean stress is zero for simplicity in this example. The alternating stress components are:
    $\sigma_{alt} = \frac{32 M_{eff}}{\pi d^3}$
    $\tau_{alt} = \frac{16 T_{eff}}{\pi d^3}$
    Using Von Mises for alternating stress: $\sigma_{alt, eq} = \sqrt{\sigma_{alt}^2 + 3\tau_{alt}^2}$
    $\sigma_{alt, eq} = \sqrt{\left(\frac{32 M_{eff}}{\pi d^3}\right)^2 + 3\left(\frac{16 T_{eff}}{\pi d^3}\right)^2} = \frac{32}{\pi d^3} \sqrt{M_{eff}^2 + 0.75 T_{eff}^2}$
    This $\sigma_{alt, eq}$ needs to be less than or equal to the allowable alternating stress, $\sigma_{e}$.
    $\frac{32}{\pi d^3} \sqrt{M_{eff}^2 + 0.75 T_{eff}^2} \le \sigma_{e}^{bend}$ (using the bending endurance limit as it's often the governing one or $\sigma_e$ if it applies to both).
    $\frac{32}{\pi d^3} (2884 \times 10^3) \le 170$
    $d^3 \ge \frac{32 \times 2884 \times 10^3}{\pi \times 170}$
    $d^3 \ge \frac{92288000}{534.07}$
    $d^3 \ge 172801.8$ mm$^3$
    $d = \sqrt[3]{172801.8} \approx 55.7$ mm.
    A standard shaft diameter of $60$ mm would be selected.

This is a simplified approach; a full fatigue analysis would involve calculating mean and alternating stress components and using a fatigue diagram (e.g., modified Goodman). The question emphasizes combined bending and twisting moments, so the calculation of effective torque/moments and then applying a failure criterion is the core.

---

### 9. Alignment with Course Outcomes (COs)

*   **CO1: Model suitable transmission system for the stated conditions:** Understanding shaft design under combined loading is fundamental to selecting appropriate shaft sizes and materials for transmission systems (e.g., power transmission shafts). This topic directly contributes to the ability to model these components accurately.
*   **CO2: Make use of the design procedure for I C engine components:** Crankshafts in IC engines are prime examples of components experiencing severe combined bending and torsional stresses, often with fatigue. The principles learned here are directly applicable.
*   **CO3 & CO4: Bearing Design:** While this topic is about shafts, the shaft's diameter and any shoulders or keyways are determined by the loads it transmits. These features interface with bearings, and the shaft's rigidity (dictated by its diameter) affects bearing performance.
*   **CO5 & CO6: Gear Drives:** Shafts in gear drives transmit the torque and are subjected to bending from gear forces. Designing the shaft correctly is integral to the successful design of the entire gear drive system.

**Knowledge Level (K3 - Application):** Students are expected to *apply* the principles of stress analysis and failure theories to calculate shaft dimensions under combined loading scenarios. They need to choose appropriate theories and formulas, substitute values, and perform calculations to arrive at a design solution.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
