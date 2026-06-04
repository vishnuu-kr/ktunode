---
title: "Axial Loads in Addition to Combined Torsional and Bending Loads"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 1: Design of Shafts: Design of Shafts Based on Bending Moment"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d5c"
status: "completed"
scrapedAt: "2026-05-20T18:10:47.656Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 1: Design of Shafts

### Topic: Axial Loads in Addition to Combined Torsional and Bending Loads

---

### 1. Introduction to Shafts and Loading Conditions

Shafts are rotating machine elements that transmit power and torque from one component to another. While torsional and bending loads are the most common, shafts can also be subjected to axial loads. Understanding how these combined loads affect the shaft's design is crucial for ensuring its safe and efficient operation.

**Key Concepts:**

*   **Shaft:** A rotating machine element used to transmit power.
*   **Torque (T):** The rotational force applied to the shaft.
*   **Bending Moment (M):** The internal moment resulting from forces acting perpendicular to the shaft's axis.
*   **Axial Load (P):** A force acting along the shaft's longitudinal axis.
*   **Stress:** The internal resistance per unit area of a material.
*   **Strain:** The deformation per unit length of a material.

**Importance of Combined Loading:**

When a shaft is subjected to multiple types of loads simultaneously, the stresses at any point within the shaft are additive. This means that the resulting stresses can be significantly higher than those caused by individual loads, potentially leading to failure if not accounted for in the design.

---

### 2. Types of Loads on Shafts

Shafts can experience various load combinations. This topic specifically focuses on the scenario where axial loads are present along with combined torsional and bending loads.

**Common Load Combinations:**

*   **Pure Torsion:** Only torque is applied (e.g., a simple propeller shaft).
*   **Pure Bending:** Only bending moments are present (e.g., a shaft supported at two ends with a load between them).
*   **Combined Bending and Torsion:** The most common scenario, where torque and bending moments act simultaneously (e.g., shafts connecting gears, pulleys, or sprockets).
*   **Combined Bending, Torsion, and Axial Load:** This is the focus of this topic, where all three types of loads are present. Examples include:
    *   Shafts of machines where axial thrust is generated (e.g., screw conveyors, pumps with axial forces).
    *   Shafts in geared systems where axial forces from bevel gears or helical gears are transmitted.

---

### 3. Stress Analysis in Shafts with Combined Loads

When axial loads are present along with bending and torsion, the stresses developed are:

*   **Tensile or Compressive Stress due to Axial Load ($\sigma_a$):** This is a direct stress calculated as $P/A$, where $P$ is the axial load and $A$ is the cross-sectional area of the shaft.
*   **Tensile or Compressive Stress due to Bending ($\sigma_b$):** This is a varying stress across the cross-section, with maximum tensile stress on one side and maximum compressive stress on the other. It is calculated as $M \cdot y / I$, where $M$ is the bending moment, $y$ is the distance from the neutral axis, and $I$ is the moment of inertia. For a circular shaft, the maximum bending stress occurs at the outer fiber ($y = d/2$) and is given by $\sigma_{b,max} = 32M / (\pi d^3)$, where $d$ is the shaft diameter.
*   **Shear Stress due to Torsion ($\tau_t$):** This stress is distributed radially across the cross-section, with zero stress at the center and maximum stress at the outer surface. It is calculated as $T \cdot r / J$, where $T$ is the torque, $r$ is the radial distance, and $J$ is the polar moment of inertia. For a circular shaft, the maximum shear stress occurs at the outer surface ($r = d/2$) and is given by $\tau_{t,max} = 16T / (\pi d^3)$.

**Important Note:** Axial loads, if tensile, will add to the tensile bending stress. If compressive, they will reduce the tensile bending stress (or increase the compressive bending stress).

---

### 4. Equivalent Stress Theories for Combined Loading

To design a shaft subjected to combined stresses, we need to use equivalent stress theories that convert the complex stress state into a single equivalent stress value. This equivalent stress is then compared with the material's yield strength or ultimate strength to determine the factor of safety.

**Key Theories:**

*   **Maximum Principal Stress Theory (Rankine's Theory):** This theory states that failure occurs when the maximum principal stress reaches the yield strength in simple tension. It's generally not suitable for ductile materials which fail by shear yielding.
    *   **Applicability:** Brittle materials.

*   **Maximum Shear Stress Theory (Guest's Theory or Tresca's Theory):** This theory states that failure occurs when the maximum shear stress in the component reaches the maximum shear stress in a simple tension test (which is half the yield strength). This theory is suitable for ductile materials.
    *   **Formula:** $\tau_{max} = \sigma_{yp} / 2$, where $\sigma_{yp}$ is the yield strength in simple tension.

*   **Maximum Distortion Energy Theory (Von Mises Hencky Theory):** This theory states that failure occurs when the distortion energy per unit volume in the component reaches the distortion energy per unit volume in a simple tension test. This is the most commonly used and accurate theory for ductile materials.
    *   **Equivalent Stress ($\sigma_e$):**
        *   For a general 3D stress state: $\sigma_e = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]}$
        *   For plane stress (when $\sigma_3 = 0$): $\sigma_e = \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2}$

**Applying Theories to Combined Loads (Bending, Torsion, Axial):**

Let's consider a point on the outer surface of a solid circular shaft where bending, torsion, and axial stresses are present.

*   **Axial Stress ($\sigma_a = P/A$):** This is a direct axial stress.
*   **Bending Stress ($\sigma_b = 32M / (\pi d^3)$):** This is a normal stress.
*   **Shear Stress ($\tau_t = 16T / (\pi d^3)$):** This is a shear stress.

At a point on the outer surface, the stresses can be combined. For instance, on the top surface where bending induces tension, the stress state is:

*   Normal stress in x-direction: $\sigma_x = \sigma_a + \sigma_b$
*   Normal stress in y-direction: $\sigma_y = 0$ (assuming y is the bending direction)
*   Shear stress in xy-plane: $\tau_{xy} = \tau_t$
*   Normal stress in z-direction: $\sigma_z = 0$
*   Shear stresses in other planes are zero.

This is a 2D stress state. The principal stresses can be found using the Mohr's circle for stress. The maximum principal stress ($\sigma_1$) and minimum principal stress ($\sigma_3$) are given by:

$\sigma_{1,3} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

Substituting $\sigma_y = 0$, $\sigma_x = \sigma_a + \sigma_b$, and $\tau_{xy} = \tau_t$:

$\sigma_{1,3} = \frac{\sigma_a + \sigma_b}{2} \pm \sqrt{\left(\frac{\sigma_a + \sigma_b}{2}\right)^2 + \tau_t^2}$

**Design using Von Mises Theory for Combined Bending, Torsion, and Axial Load:**

The equivalent stress ($\sigma_e$) for a 2D stress state with $\sigma_x$, $\sigma_y=0$, and $\tau_{xy}$ is:

$\sigma_e = \sqrt{\sigma_x^2 + 3\tau_{xy}^2}$

Substituting the stresses:

$\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$

This equivalent stress is then compared with the material's yield strength ($\sigma_{yp}$) or ultimate strength ($\sigma_{ut}$) to determine the required diameter of the shaft.

**Design Equation (Factor of Safety S_f):**

For ductile materials, using the Von Mises criterion and considering fatigue, the design equation typically becomes:

$S_f = \frac{\sigma_{yp}}{\sigma_e}$ (for static loading)

Where:
*   $\sigma_{yp}$ is the yield strength of the material.
*   $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$ is the equivalent stress.

**Incorporating Fatigue:**

In reality, shafts are often subjected to fluctuating loads. For fatigue design, the equivalent stresses are modified by fatigue stress concentration factors ($K_t, K_{ts}$) and applied to the endurance limits of the material. The Soderberg, Gerber, Goodman, or ASME elliptic equations are used for fatigue analysis.

For combined stresses under fatigue, the equivalent stress can be expressed as:

$\sigma_e = \sqrt{(\sigma_{a,mean} + \sigma_{b,mean})^2 + 3(\tau_{t,mean})^2}$ (for mean stresses)
$\sigma_e = \sqrt{(\sigma_{a,alt} + \sigma_{b,alt})^2 + 3(\tau_{t,alt})^2}$ (for alternating stresses)

And then applied to fatigue design criteria. However, for a foundational understanding of static design with axial loads, the static equivalent stress is the primary focus.

**Reference (Bhandari, 5th Edition):** Chapter 5, "Design of Shafts" covers stresses in shafts and equivalent stress theories. Section 5.6 discusses combined stresses.

---

### 5. Design Procedure for Shafts with Axial Loads

The design procedure for shafts subjected to combined torsional, bending, and axial loads follows a systematic approach:

1.  **Understand the Application and Identify Loads:**
    *   Determine the source of torque ($T$).
    *   Calculate the bending moments ($M$) at critical sections due to forces acting perpendicular to the shaft axis. This might involve drawing Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD).
    *   Determine the axial load ($P$) acting along the shaft's axis. Identify if it's tensile or compressive.

2.  **Determine Material Properties:**
    *   Select an appropriate shaft material (e.g., carbon steel, alloy steel).
    *   Obtain the yield strength ($\sigma_{yp}$) and ultimate tensile strength ($\sigma_{ut}$) for the chosen material.
    *   Consider fatigue properties if cyclic loading is expected (endurance limit, fatigue stress concentration factors).

3.  **Calculate Stresses at Critical Sections:**
    *   For a solid circular shaft of diameter $d$:
        *   Axial stress: $\sigma_a = \frac{P}{A} = \frac{P}{\frac{\pi d^2}{4}} = \frac{4P}{\pi d^2}$
        *   Maximum bending stress: $\sigma_b = \frac{32M}{\pi d^3}$
        *   Maximum shear stress due to torsion: $\tau_t = \frac{16T}{\pi d^3}$

4.  **Calculate Equivalent Stress ($\sigma_e$) using Von Mises Theory:**
    *   Combine the stresses for points on the outer surface where bending stress is maximum:
        $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$
    *   Substitute the stress formulas:
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

5.  **Apply Factor of Safety (S_f):**
    *   The design must ensure that the calculated equivalent stress is less than the allowable stress for the material.
    *   Allowable stress = $\sigma_{allow} = \frac{\sigma_{yp}}{S_f}$ (for static design) or based on endurance limit for fatigue.
    *   The design equation becomes: $\sigma_e \le \sigma_{allow}$
    *   Or, $\sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2} \le \frac{\sigma_{yp}}{S_f}$

6.  **Solve for the Shaft Diameter (d):**
    *   The equation from Step 5 is a non-linear equation in $d$. It can be solved iteratively or by rearranging into a polynomial form.
    *   A common approach is to rearrange and solve for an equivalent bending moment ($M_e$) or an equivalent torque ($T_e$) and then use standard formulas for shafts under bending and torsion.

    *   **Equivalent Bending Moment Approach:**
        The Von Mises equivalent stress can be related to an equivalent bending moment $M_e$ that would produce the same equivalent stress as the combined loading:
        $\sigma_e = \frac{32 M_e}{\pi d^3}$
        Equating the two expressions for $\sigma_e$:
        $\frac{32 M_e}{\pi d^3} = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$
        This approach is complex due to the $d^2$ term inside the square root.

    *   **Simplified Equivalent Torque Approach (often used when bending and torsion dominate):**
        For combined bending and torsion (without axial load):
        Equivalent Torque $T_e = \sqrt{M^2 + T^2}$
        $\sigma_e = \frac{16}{\pi d^3} \sqrt{(8M)^2 + (8T)^2} = \frac{16}{\pi d^3} \sqrt{64M^2 + 64T^2} = \frac{16}{\pi d^3} \times 8 \sqrt{M^2 + T^2} = \frac{128}{\pi d^3} \sqrt{M^2 + T^2}$ - **This formula is incorrect. The standard approach is to relate it to stresses.**

        Let's re-evaluate the equivalent stress $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$
        $\sigma_e = \sqrt{\left(\frac{P}{\frac{\pi d^2}{4}} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

        For design purposes, it's often easier to work with an equivalent bending moment or torque.
        Let $\sigma_{allow} = \sigma_{yp}/S_f$.
        The equation is: $\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3} = K_t \sigma_{allow}$ or $\frac{16T}{\pi d^3} = K_{ts} \tau_{allow}$
        This is complicated. A more practical approach:

        **Equivalent Static Load Approach:**
        Consider the axial force $P$ and the bending moment $M$. The total axial force on the cross-section is $P_{axial} = P$. The bending stress can be thought of as a varying axial stress.
        The maximum tensile axial stress due to bending is $\sigma_b = M y / I$.
        The total axial stress at one end of the diameter is $\sigma_a + \sigma_b$.
        The total axial stress at the other end is $\sigma_a - \sigma_b$.

        The Von Mises equivalent stress can be derived from the principal stresses.
        $\sigma_1, \sigma_3 = \frac{(\sigma_a + \sigma_b)}{2} \pm \sqrt{\left(\frac{\sigma_a + \sigma_b}{2}\right)^2 + \tau_t^2}$
        Let $\sigma_x = \sigma_a + \sigma_b$ and $\tau_{xy} = \tau_t$.
        $\sigma_e = \sqrt{\sigma_x^2 + 3\tau_{xy}^2} = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$

        Substitute the expressions for stress:
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

        To solve for $d$, we need to make some approximations or use numerical methods.
        A common simplification is to introduce an "equivalent bending moment" $M_e$ such that the equivalent stress due to $M_e$ alone matches the combined stress:
        $\sigma_e = \frac{32 M_e}{\pi d^3}$

        So, $\frac{32 M_e}{\pi d^3} = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$
        Squaring both sides:
        $\frac{(32M_e)^2}{(\pi d^3)^2} = \left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2$
        $\frac{1024 M_e^2}{\pi^2 d^6} = \frac{(4P\pi d + 32M)^2}{(\pi d^3)^2} + \frac{3(16T)^2}{(\pi d^3)^2}$
        $1024 M_e^2 = (4P\pi d + 32M)^2 + 3(256T^2)$
        $1024 M_e^2 = 16P^2\pi^2 d^2 + 2 \cdot 4P\pi d \cdot 32M + (32M)^2 + 768T^2$
        $1024 M_e^2 = 16P^2\pi^2 d^2 + 256 PM\pi d + 1024M^2 + 768T^2$

        This is a quadratic equation in $d$ if $P$ and $M$ are known.
        Let $A = 16 P^2 \pi^2$, $B = 256 PM \pi$, $C = 1024M^2 + 768T^2$.
        $A d^2 + B d + (768T^2 - 1024M_e^2) = 0$ - **This is incorrect derivation for $M_e$.**

        **A more practical way to get an equivalent bending moment:**

        Consider the stress at the critical location. The principal stresses are calculated from $\sigma_x = \sigma_a + \sigma_b$, $\tau_{xy} = \tau_t$.
        The Von Mises equivalent stress is $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$.
        We want to find an $M_e$ such that $\frac{32 M_e}{\pi d^3} = \sigma_e$.
        $\frac{32 M_e}{\pi d^3} = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$
        $\frac{32 M_e}{\pi d^3} = \frac{1}{\pi d^3} \sqrt{(4P\pi d + 32M)^2 + 3(16T)^2}$
        $M_e = \frac{1}{32} \sqrt{(4P\pi d + 32M)^2 + 3(256T^2)}$
        $M_e = \frac{1}{32} \sqrt{16P^2\pi^2 d^2 + 256 PM\pi d + 1024M^2 + 768T^2}$
        $M_e = \frac{1}{8} \sqrt{P^2\pi^2 d^2 + 16 PM\pi d + 64M^2 + 48T^2}$

        This means $M_e$ is not a constant but depends on $d$. This iterative solution is needed.

        **Alternative simplified formulation (often found in texts):**

        Sometimes, the stress due to axial load is combined with bending stress directly to get an equivalent axial stress, and then this is combined with shear stress.
        $\sigma_{combined} = \sigma_a + \sigma_b = \frac{P}{A} + \frac{My}{I}$
        Maximum value of this combined axial stress is at the outer fiber:
        $\sigma_{axial, max} = \frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}$

        Now we have a principal stress $\sigma_1 = \sigma_{axial, max}$ and a shear stress $\tau = \tau_t$.
        Using Von Mises criteria for this case:
        $\sigma_e = \sqrt{\sigma_1^2 + 3\tau^2}$
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

        This leads to the same equation.

        **A common design formula derived from Von Mises for combined bending and torsion without axial load is:**
        $M_e = \frac{1}{2} (M + \sqrt{M^2 + T^2})$ - **This is incorrect. The correct equivalent bending moment for pure bending and torsion is $M_e = \frac{1}{2} [M + \sqrt{M^2+T^2}]$ if using principal stresses derived from bending and torsion, but this is for a different stress combination.**

        **The correct approach for combined bending (M), torsion (T), and axial load (P) using Von Mises:**

        The stresses at the outer surface are $\sigma_x = \frac{P}{A} + \frac{My}{I}$ and $\tau_{xy} = \frac{Tr}{J}$.
        Let's use $d$ as the diameter.
        $\sigma_x = \frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}$
        $\tau_{xy} = \frac{16T}{\pi d^3}$

        The equivalent stress $\sigma_e = \sqrt{\sigma_x^2 + 3\tau_{xy}^2}$
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

        We set $\sigma_e = \sigma_{yp} / S_f$.
        $\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2 = \left(\frac{\sigma_{yp}}{S_f}\right)^2$

        This equation can be rewritten in terms of an equivalent bending moment $M_e$:
        $\frac{32 M_e}{\pi d^3} = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$
        This equation is difficult to solve directly for $d$ because $d$ appears with different powers.

        **Practical Solution Method:**
        It's often solved by assuming a diameter, calculating $\sigma_e$, and checking if it's within the allowable stress. If not, the diameter is increased. This is an iterative process.

        **Simplified formulas for equivalent static load:**
        Some texts provide approximate equivalent static loads that can be used. For example, consider the axial force $P$ and the bending moment $M$. They contribute to axial stresses. Torsion contributes to shear stress.
        The combined effect of axial and bending can be expressed as an equivalent bending moment.
        If $P$ is tensile, it adds to the tensile bending stress. If $P$ is compressive, it reduces the tensile bending stress.

        Let's consider the extreme fiber stresses:
        Tensile stress $\sigma_{max} = \sigma_a + \sigma_b = \frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}$
        Compressive stress $\sigma_{min} = \sigma_a - \sigma_b = \frac{4P}{\pi d^2} - \frac{32M}{\pi d^3}$

        The shear stress is $\tau_t = \frac{16T}{\pi d^3}$.
        Applying Von Mises to $\sigma_{max}$ and $\tau_t$:
        $\sigma_e = \sqrt{\sigma_{max}^2 + 3\tau_t^2}$ (This assumes $\sigma_{min}$ is not critical, which is true if $\sigma_{max}$ is tensile and $\tau_t$ is significant).

        **Using equivalent torque $T_e$ or equivalent bending moment $M_e$ is often preferred for simplicity:**
        From Bhandari, Section 5.6, for combined bending and torsion, the equivalent bending moment $M_e$ is given by:
        $M_e = \frac{1}{2}[M + \sqrt{M^2 + T^2}]$ - **This formula is for when the direct axial stress due to axial force is negligible or is considered separately.**

        **For combined bending, torsion, and axial load, a more robust approach is needed.**

        Let's use the equivalent stress formula derived from Von Mises:
        $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$
        $\sigma_e = \sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2}$

        To solve for $d$, we can first estimate a diameter based on bending and torsion only, and then refine it.
        Let $d_0$ be the diameter required for bending and torsion only:
        $\frac{32M_e}{\pi d_0^3} = \frac{\sigma_{yp}}{S_f}$, where $M_e = \frac{1}{2}[M + \sqrt{M^2+T^2}]$ (This is a common simplified approach for combined bending and torsion).

        Once an initial $d_0$ is found, substitute it into the full equation and solve for the improved diameter $d$.

7.  **Consider Stress Concentrations:**
    *   If there are keyways, shoulders, or holes in the shaft, stress concentration factors ($K_t$ for bending, $K_{ts}$ for torsion, $K_a$ for axial) must be applied.
    *   Modified stresses: $\sigma_{b,actual} = K_t \cdot \sigma_b$, $\tau_{t,actual} = K_{ts} \cdot \tau_t$, $\sigma_{a,actual} = K_a \cdot \sigma_a$.
    *   The equivalent stress calculation needs to incorporate these factors appropriately.

8.  **Check for Deflection and Critical Speeds:**
    *   Shaft deflection can affect the performance of mating components. Ensure deflection limits are met.
    *   For rotating shafts, critical speeds (speeds at which resonance occurs) must be avoided. This is especially important if the shaft has significant mass and is operating at high speeds.

---

### 6. Example Problem

**Problem Statement:**
A steel shaft is subjected to a torque of 1000 Nm, a bending moment of 500 Nm, and an axial tensile force of 10 kN. The shaft is made of plain carbon steel with a yield strength of 300 MPa. The allowable factor of safety is 3. Design the diameter of the shaft.

**Given:**
*   Torque, $T = 1000$ Nm
*   Bending Moment, $M = 500$ Nm
*   Axial Load, $P = 10$ kN (tensile) $= 10 \times 10^3$ N
*   Yield Strength, $\sigma_{yp} = 300$ MPa $= 300 \times 10^6$ N/m$^2$
*   Factor of Safety, $S_f = 3$

**Solution:**

1.  **Calculate Allowable Stress:**
    $\sigma_{allow} = \frac{\sigma_{yp}}{S_f} = \frac{300 \times 10^6}{3} = 100 \times 10^6$ N/m$^2 = 100$ MPa

2.  **Formulate the Design Equation (using Von Mises):**
    The equivalent stress $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$ must be less than or equal to $\sigma_{allow}$.
    $\sigma_a = \frac{4P}{\pi d^2}$
    $\sigma_b = \frac{32M}{\pi d^3}$
    $\tau_t = \frac{16T}{\pi d^3}$

    $\sqrt{\left(\frac{4P}{\pi d^2} + \frac{32M}{\pi d^3}\right)^2 + 3\left(\frac{16T}{\pi d^3}\right)^2} \le \frac{\sigma_{yp}}{S_f}$

3.  **Substitute Values and Simplify:**
    $\frac{4P}{\pi d^2} = \frac{4 \times 10 \times 10^3}{\pi d^2} = \frac{40000}{\pi d^2}$ N/m$^2$
    $\frac{32M}{\pi d^3} = \frac{32 \times 500}{\pi d^3} = \frac{16000}{\pi d^3}$ N/m$^2$
    $\frac{16T}{\pi d^3} = \frac{16 \times 1000}{\pi d^3} = \frac{16000}{\pi d^3}$ N/m$^2$

    Let's use the equation in terms of diameter $d$ (in meters).
    $\sigma_{allow} = 100 \times 10^6$ N/m$^2$

    $\sqrt{\left(\frac{40000}{\pi d^2} + \frac{16000}{\pi d^3}\right)^2 + 3\left(\frac{16000}{\pi d^3}\right)^2} \le 100 \times 10^6$

    Square both sides:
    $\left(\frac{40000}{\pi d^2} + \frac{16000}{\pi d^3}\right)^2 + 3\left(\frac{16000}{\pi d^3}\right)^2 \le (100 \times 10^6)^2$

    This equation is difficult to solve directly. We can try an iterative approach or try to find an equivalent bending moment.

    **Alternative approach using equivalent static load:**
    Consider an equivalent bending moment $M_e$ that would produce the same maximum stress if only bending was present.
    Using the Von Mises stress calculation:
    $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$
    Let's use the formula for equivalent bending moment $M_e$ (derived from stress considerations):
    $M_e = \frac{1}{2} [M + \sqrt{M^2 + T^2}]$ is for combined bending and torsion *without* axial load.

    When axial load is present, a more accurate approach would be to use the equation derived earlier for $\sigma_e$ and solve for $d$ iteratively.

    **Iterative Solution:**

    **Step 1: Initial Guess for $d$**
    Let's first estimate the diameter considering only bending and torsion, ignoring the axial load for a rough initial guess.
    Use $M_e = \frac{1}{2}[M + \sqrt{M^2 + T^2}] = \frac{1}{2}[500 + \sqrt{500^2 + 1000^2}] = \frac{1}{2}[500 + \sqrt{250000 + 1000000}] = \frac{1}{2}[500 + \sqrt{1250000}] = \frac{1}{2}[500 + 1118.03] = 809.015$ Nm.
    For bending and torsion: $\sigma_e = \frac{32 M_e}{\pi d^3}$
    $d^3 = \frac{32 M_e}{\pi \sigma_{allow}} = \frac{32 \times 809.015}{\pi \times 100 \times 10^6} = \frac{25888.48}{314.159 \times 10^6} \approx 8.237 \times 10^{-5}$ m$^3$
    $d \approx (8.237 \times 10^{-5})^{1/3} \approx 0.0436$ m $= 43.6$ mm.

    **Step 2: Check with Axial Load using Iteration**
    Let's try $d = 50$ mm $= 0.05$ m.
    $\sigma_a = \frac{40000}{\pi (0.05)^2} = \frac{40000}{\pi \times 0.0025} = \frac{40000}{0.007854} \approx 5.09 \times 10^6$ N/m$^2$
    $\sigma_b = \frac{16000}{\pi (0.05)^3} = \frac{16000}{\pi \times 0.000125} = \frac{16000}{0.0003927} \approx 40.74 \times 10^6$ N/m$^2$
    $\tau_t = \frac{16000}{\pi (0.05)^3} = \frac{16000}{\pi \times 0.000125} \approx 40.74 \times 10^6$ N/m$^2$

    $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$
    $\sigma_e = \sqrt{(5.09 \times 10^6 + 40.74 \times 10^6)^2 + 3(40.74 \times 10^6)^2}$
    $\sigma_e = \sqrt{(45.83 \times 10^6)^2 + 3(1659.7 \times 10^{12})}$
    $\sigma_e = \sqrt{2100.3 \times 10^{12} + 4979.1 \times 10^{12}} = \sqrt{7079.4 \times 10^{12}} \approx 84.14 \times 10^6$ N/m$^2 = 84.14$ MPa.

    Since $84.14$ MPa $< 100$ MPa, a diameter of 50 mm might be acceptable. However, for safety and to satisfy the condition with a margin, let's try a slightly larger diameter or confirm if 50mm is indeed sufficient. The initial guess was 43.6 mm.

    **Let's try $d = 45$ mm $= 0.045$ m.**
    $\sigma_a = \frac{40000}{\pi (0.045)^2} = \frac{40000}{\pi \times 0.002025} = \frac{40000}{0.00636} \approx 6.29 \times 10^6$ N/m$^2$
    $\sigma_b = \frac{16000}{\pi (0.045)^3} = \frac{16000}{\pi \times 0.000091125} = \frac{16000}{0.0002863} \approx 55.88 \times 10^6$ N/m$^2$
    $\tau_t = \frac{16000}{\pi (0.045)^3} \approx 55.88 \times 10^6$ N/m$^2$

    $\sigma_e = \sqrt{(6.29 \times 10^6 + 55.88 \times 10^6)^2 + 3(55.88 \times 10^6)^2}$
    $\sigma_e = \sqrt{(62.17 \times 10^6)^2 + 3(3122.5 \times 10^{12})}$
    $\sigma_e = \sqrt{3865.1 \times 10^{12} + 9367.5 \times 10^{12}} = \sqrt{13232.6 \times 10^{12}} \approx 115.03 \times 10^6$ N/m$^2 = 115.03$ MPa.

    Since $115.03$ MPa $> 100$ MPa, $d=45$ mm is not sufficient.

    **Let's try $d = 48$ mm $= 0.048$ m.**
    $\sigma_a = \frac{40000}{\pi (0.048)^2} = \frac{40000}{\pi \times 0.002304} = \frac{40000}{0.007238} \approx 5.53 \times 10^6$ N/m$^2$
    $\sigma_b = \frac{16000}{\pi (0.048)^3} = \frac{16000}{\pi \times 0.0001106} = \frac{16000}{0.0003474} \approx 46.05 \times 10^6$ N/m$^2$
    $\tau_t = \frac{16000}{\pi (0.048)^3} \approx 46.05 \times 10^6$ N/m$^2$

    $\sigma_e = \sqrt{(5.53 \times 10^6 + 46.05 \times 10^6)^2 + 3(46.05 \times 10^6)^2}$
    $\sigma_e = \sqrt{(51.58 \times 10^6)^2 + 3(2120.6 \times 10^{12})}$
    $\sigma_e = \sqrt{2660.5 \times 10^{12} + 6361.8 \times 10^{12}} = \sqrt{9022.3 \times 10^{12}} \approx 94.98 \times 10^6$ N/m$^2 = 94.98$ MPa.

    Since $94.98$ MPa $< 100$ MPa, a diameter of 48 mm is sufficient.

    **Answer:** The required diameter of the shaft is approximately **48 mm**.

---

### 7. Practice Questions

1.  A shaft is subjected to a bending moment of 200 Nm and a torque of 300 Nm. Calculate the equivalent bending moment and equivalent torque for the shaft, using the standard formulas for combined bending and torsion. If the allowable stress is 150 MPa, determine the diameter of the shaft.
    *   **Answer:**
        *   Equivalent Bending Moment, $M_e = \frac{1}{2} [M + \sqrt{M^2 + T^2}] = \frac{1}{2} [200 + \sqrt{200^2 + 300^2}] = \frac{1}{2} [200 + \sqrt{40000 + 90000}] = \frac{1}{2} [200 + \sqrt{130000}] = \frac{1}{2} [200 + 360.55] = 280.275$ Nm.
        *   Diameter calculation: $\sigma_e = \frac{32 M_e}{\pi d^3}$.
        *   $d^3 = \frac{32 M_e}{\pi \sigma_{allow}} = \frac{32 \times 280.275}{\pi \times 150 \times 10^6} = \frac{8968.8}{\pi \times 150 \times 10^6} \approx 1.908 \times 10^{-5}$ m$^3$.
        *   $d \approx (1.908 \times 10^{-5})^{1/3} \approx 0.0267$ m $= 26.7$ mm.

2.  A shaft needs to transmit 50 kW power at 400 rpm. It is also subjected to a bending moment of 300 Nm and an axial tensile load of 5 kN. The material has a yield strength of 250 MPa. The factor of safety is 4. Determine the diameter of the shaft using the Von Mises criterion.
    *   **Solution Outline:**
        *   Calculate Torque ($T$) from power and speed: $P = \frac{2\pi NT}{60}$.
        *   Calculate stresses: $\sigma_a = \frac{4P}{\pi d^2}$, $\sigma_b = \frac{32M}{\pi d^3}$, $\tau_t = \frac{16T}{\pi d^3}$.
        *   Calculate $\sigma_{allow} = \sigma_{yp} / S_f$.
        *   Use the equation $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2} \le \sigma_{allow}$.
        *   Solve for $d$ iteratively.

3.  Explain why axial loads need to be considered in shaft design when bending and torsional loads are already present.
    *   **Answer:** Axial loads contribute to the normal stresses in the shaft. When combined with bending stresses (which are also normal stresses), they can increase the maximum tensile or compressive stress. Combined with torsional shear stresses, they alter the stress state, which is accounted for by equivalent stress theories. Failure occurs based on the combined effect of all stresses, not just individual load components. Ignoring axial loads can lead to an underestimation of the stresses and an unsafe design.

---

### 8. Important Points to Remember

*   **Von Mises Theory** is the most appropriate for ductile materials under combined loading.
*   The equivalent stress calculation for bending, torsion, and axial load involves combining the axial/bending stress ($\sigma_a + \sigma_b$) and the torsional shear stress ($\tau_t$).
*   The formula for equivalent stress is $\sigma_e = \sqrt{(\sigma_a + \sigma_b)^2 + 3\tau_t^2}$.
*   Solving for shaft diameter $d$ from the design equation often requires **iterative methods** because the equation is complex.
*   **Stress concentration factors** must be applied if geometric discontinuities exist on the shaft.
*   **Fatigue analysis** is crucial for shafts subjected to fluctuating loads, requiring modification of stresses using endurance limits and fatigue stress concentration factors.
*   **Deflection and critical speed analysis** are important secondary considerations in shaft design.

---

### 9. Alignment with Course Outcomes

*   **CO1: Model suitable transmission system for the stated conditions.** This topic directly contributes by enabling the design of a crucial component (shaft) within a transmission system, considering realistic load conditions.
*   **CO2: Make use of the design procedure for I C engine components.** Shafts are integral to IC engines (e.g., crankshafts, camshafts). Understanding combined loading is essential for their design.
*   **CO3: Develop of Sliding contact bearing for industrial applications.** While not directly about bearings, shaft design dictates the geometry and operational stresses that bearings must support.
*   **CO4: Choose a suitable Rolling contact bearing from manufacturer’s Catalogue for a specific application.** Similar to CO3, bearing selection depends on the shaft's load capacity and operational parameters.
*   **CO5 & CO6: Model suitable gear drives and apply design procedures.** Gears transmit power to shafts, imposing bending, torsional, and sometimes axial loads on them. This topic provides the foundation for designing the shafts that carry these loads.

The knowledge level is primarily **K3 (Application)** as students apply design procedures and theories to solve practical problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
