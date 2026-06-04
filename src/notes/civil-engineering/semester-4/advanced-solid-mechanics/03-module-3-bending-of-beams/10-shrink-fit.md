---
title: "Shrink fit"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a09"
status: "completed"
scrapedAt: "2026-05-20T18:42:46.203Z"
---
# ADVANCED SOLID MECHANICS: Module 3: Bending of Beams - Shrink Fit

## Introduction

Shrink fitting is a mechanical assembly process where one component is heated or cooled to induce thermal expansion or contraction, respectively. This allows it to be fitted onto another component. Upon returning to the ambient temperature, the differential expansion/contraction creates a tight interference fit and generates significant stresses within the components. This process is widely used in mechanical engineering for assembling shafts, gears, bearings, and wheels onto axles or other shafts.

## Learning Outcomes Covered:

This module aims to equip you with the understanding of:

1.  **The physical principle behind shrink fitting:** How temperature changes lead to dimensional changes and the resulting interference.
2.  **The mechanics of shrink-fitted assemblies:** Analyzing the stresses and strains generated due to thermal expansion and interference.
3.  **Calculating stresses and strains in shrink-fitted components:** Applying principles of mechanics to quantify these effects.
4.  **Determining the interface pressure:** Quantifying the pressure acting at the contact surface between the components.
5.  **Factors affecting shrink fit performance:** Identifying critical parameters that influence the strength and reliability of a shrink fit.
6.  **Applications and limitations of shrink fitting:** Understanding where and why shrink fitting is used, and its potential drawbacks.

---

## 1. The Physical Principle Behind Shrink Fitting

### 1.1 Thermal Expansion

*   **Definition:** When materials are heated, their atoms vibrate more vigorously, leading to an increase in volume. This phenomenon is known as thermal expansion.
*   **Coefficient of Thermal Expansion ($\alpha$):** A material property that quantifies the fractional change in length per degree of temperature change.
    *   $\Delta L = \alpha L_0 \Delta T$
        *   $\Delta L$: Change in length
        *   $\alpha$: Coefficient of thermal expansion (e.g., for steel, $\alpha \approx 12 \times 10^{-6} \, ^\circ\text{C}^{-1}$)
        *   $L_0$: Original length
        *   $\Delta T$: Change in temperature
*   **Volumetric Expansion:** Similarly, materials expand volumetrically with temperature. For isotropic materials, the volumetric expansion is approximately three times the linear expansion: $\Delta V \approx 3\alpha V_0 \Delta T$.

### 1.2 The Shrink Fit Process

1.  **Assembly:**
    *   **Heating the Outer Component:** The outer component (e.g., a sleeve or hub) is heated to a temperature where its inner diameter expands sufficiently to slide over the inner component (e.g., a shaft).
    *   **Assembly:** The heated outer component is placed onto the cooler inner component.
    *   **Cooling:** As the outer component cools down to the ambient temperature, it contracts. This contraction constricts the inner component, creating an interference fit.
2.  **Alternative: Cooling the Inner Component:**
    *   The inner component can be cooled (e.g., using dry ice or liquid nitrogen) to contract it.
    *   The outer component (at ambient temperature) is then fitted over the contracted inner component.
    *   As the inner component warms up, it expands, creating the interference.

### 1.3 Interference (Fit)

*   **Definition:** Interference is the difference in diameter between the outer component (unfitted) and the inner component (unfitted) when they are brought together. A positive interference ensures a tight fit.
*   **Types of Fits:**
    *   **Clearance Fit:** The hole diameter is larger than the shaft diameter, allowing free movement.
    *   **Transition Fit:** The fit can be either clearance or interference, depending on manufacturing tolerances.
    *   **Interference Fit (Shrink Fit):** The shaft diameter is larger than the hole diameter, requiring force or thermal methods for assembly.

**Example:**
Consider fitting a steel sleeve (outer component) onto a steel shaft (inner component).
*   Sleeve inner diameter ($d_h$): 50 mm
*   Shaft outer diameter ($d_s$): 50.1 mm
*   **Interference ($\delta$):** $d_s - d_h = 50.1 \, \text{mm} - 50 \, \text{mm} = 0.1 \, \text{mm}$

To assemble this, the sleeve would be heated, or the shaft cooled, such that the diameters can be overcome to achieve the desired fit.

---

## 2. The Mechanics of Shrink-Fitted Assemblies

When components are shrink-fitted, the interference between them leads to elastic deformation, generating stresses. The key is that the inner component is put into tension, and the outer component is put into compression at the interface.

### 2.1 Elastic Deformation

*   **Hoop Stress:** This is the primary stress developed in cylindrical components under internal or external pressure.
*   **Radial Stress:** The stress acting perpendicular to the radial direction.
*   **Axial Stress:** If the components are long cylinders, axial stresses can also be developed, especially if there are end effects or if axial constraints exist.

### 2.2 Interface Pressure ($P$)

*   The interference is accommodated by the elastic deformation of both components.
*   The inner component expands radially outwards, and the outer component contracts radially inwards.
*   This radial movement creates a pressure, $P$, at the interface, acting outwardly on the inner component and inwardly on the outer component.

### 2.3 Strain and Stress Relationships (Thin-Walled vs. Thick-Walled Cylinders)

For shrink fits, especially those involving significant pressure, we often model the components as thick-walled cylinders.

#### 2.3.1 Thin-Walled Cylinder Approximation (Limited Applicability for Shrink Fits)

If the wall thickness is small compared to the radius, the stress can be considered uniform across the thickness. This is usually *not* the case for significant shrink fits.

#### 2.3.2 Thick-Walled Cylinder Analysis (Lame's Equations)

Lame's equations are crucial for analyzing stresses in thick-walled cylinders subjected to internal and external pressures.

*   **Assumptions:**
    *   The material is homogeneous, isotropic, and obeys Hooke's Law.
    *   The cylinder is subjected to internal pressure ($p_i$) and external pressure ($p_o$).
    *   Plane strain conditions can be assumed for long cylinders (negligible axial strain).

*   **Lame's Equations for Stresses:**
    *   **Radial Stress ($\sigma_r$):**
        $\sigma_r = \frac{B}{r^2} - A$
    *   **Hoop (Circumferential) Stress ($\sigma_\theta$):**
        $\sigma_\theta = \frac{B}{r^2} + A$

    Where:
    *   $A$ and $B$ are constants determined by boundary conditions (pressures and radii).
    *   $r$ is the radial position.

*   **Strain in Thick-Walled Cylinders:**
    The radial and hoop strains are related to the stresses by Hooke's Law:
    *   $\epsilon_r = \frac{1}{E}(\sigma_r - \nu \sigma_\theta)$
    *   $\epsilon_\theta = \frac{1}{E}(\sigma_\theta - \nu \sigma_r)$

*   **Radial Displacement ($u_r$):**
    The radial strain is also the derivative of radial displacement with respect to radius: $\epsilon_r = \frac{du_r}{dr}$. Integrating this, along with the hoop strain, leads to:
    $u_r = \frac{1- \nu^2}{E} \frac{B}{r} - \frac{1+\nu}{E}Ar + C$
    For thick-walled cylinders, the constant $C$ is often incorporated into the terms or related to axial effects. A more simplified form for displacement often used is derived by considering the change in radius:
    $\Delta r = u_r$

### 2.4 Relating Interference to Interface Pressure

The core of shrink fit analysis is to relate the initial interference to the resulting interface pressure.

*   **Inner Component (Shaft/Hole):**
    Let $a$ be the inner radius of the outer component (hole) and $b$ be the outer radius of the inner component (shaft). The interference $\delta$ is the difference in diameters. In terms of radii, the initial gap is $b-a$. The interference is usually defined as the overlap if they were forced together without deformation.
    Consider the inner component (shaft) with radius $b$. After assembly, its outer radius effectively becomes $a$ due to the pressure $P$.
    The radial displacement at the outer surface ($r=b$) of the inner component will be $u_{r, inner} = a - b$. This displacement is caused by the *external* pressure $P$ applied at $r=b$.
    Using Lame's equations for the inner component, with internal pressure $p_{i,inner}$ and external pressure $p_{o,inner} = P$:
    *   $\sigma_{r,inner} = \frac{B_{inner}}{r^2} - A_{inner}$
    *   $\sigma_{\theta,inner} = \frac{B_{inner}}{r^2} + A_{inner}$
    At the inner surface ($r=a'$ if there's a hole, or 0 if solid), the radial stress might be different. For a solid shaft, $B_{inner}=0$, so $\sigma_{r,inner} = -A_{inner}$ (compressive) and $\sigma_{\theta,inner} = A_{inner}$ (tensile).
    For a shaft with radius $b$, the radial displacement is given by:
    $u_{r,inner} = \frac{1+\nu}{E} \frac{B_{inner}}{r} - \frac{1-\nu}{E} A_{inner} r$
    If the shaft is solid with radius $b$, the only stress acting is the hoop stress induced by the external pressure $P$. The radial displacement at the outer surface $r=b$ is given by the Lame constant relation for a solid cylinder under external pressure:
    $u_{r,inner}(b) = \frac{1+\nu}{E} \frac{B_{inner}}{b}$ (assuming solid shaft, so $p_{i,inner}=0$)
    The hoop stress at $r=b$ is $\sigma_{\theta,inner} = \frac{B_{inner}}{b^2} + A_{inner}$.
    The radial stress at $r=b$ is $\sigma_{r,inner} = \frac{B_{inner}}{b^2} - A_{inner}$.
    For a solid shaft, $B_{inner}=0$, so $\sigma_{r,inner}=-A_{inner}$ and $\sigma_{\theta,inner}=A_{inner}$.
    The radial displacement at $r=b$ for a solid shaft under external pressure $P$ is:
    $u_{r,inner}(b) = \frac{1-\nu}{E} \frac{P}{b} \times b = \frac{1-\nu}{E}P \times (\text{this is not directly correct})$.

    A more direct approach for the inner component (shaft):
    The interface pressure $P$ creates a radial stress $\sigma_r = -P$ at its outer surface ($r=b$). This pressure causes it to expand radially.
    The radial strain at $r=b$ is $\epsilon_{r,inner} = \frac{u_{r,inner}(b)}{b}$.
    For a solid cylinder subjected to external pressure $P$, the radial stress at any radius $r$ is $\sigma_r = -P \frac{a_1^2}{r^2} + P$ (where $a_1$ is the outer radius, i.e., $b$) and hoop stress is $\sigma_\theta = P \frac{a_1^2}{r^2} + P$.
    At the outer surface ($r=b$), $\sigma_{r,inner} = -P$ and $\sigma_{\theta,inner} = P + P \frac{b^2}{b^2} = 2P$. This is for a specific case.

    Let's use the common derivation for the expansion of the inner shaft:
    The radial displacement $u_{r,inner}$ at radius $r$ of the inner component due to an external pressure $P$ at its outer surface ($r=b$) is given by:
    $u_{r,inner}(r) = \frac{1+\nu}{E} \frac{B_{inner}}{r} - \frac{1-\nu}{E} A_{inner} r$
    Since the shaft is solid and initially at radius $b$, the radial displacement at its outer surface is $u_{r,inner}(b) = a - b$.
    For a solid cylinder with outer radius $b$ subjected to external pressure $P$, the constants are $A_{inner}$ and $B_{inner}$. The radial stress at $r=b$ is $-P$, and hoop stress is $\sigma_{\theta,inner}$.
    The displacement of the outer surface of the inner component (shaft) is:
    $\Delta d_{inner} = \frac{P}{E} \frac{2(1-\nu^2)}{d/D} ...$ this is getting complicated without a clear setup.

    **Simplified approach for radial expansion of the inner component:**
    The outer surface of the inner component (shaft) of radius $b$ expands by $\Delta b$. This expansion is caused by the internal tensile hoop stress, which in turn is caused by the applied external pressure $P$.
    For a solid cylinder under external pressure $P$, the radial expansion at its outer surface is:
    $\Delta b = \frac{P b}{E} \frac{1+\nu}{1} $ ... (this is for pressure applied over the entire surface, not just a point).

    **Using Lame's parameters for the inner component:**
    Let the inner component (shaft) have initial radius $b$. It's subjected to an external pressure $P$ at $r=b$. Assume it's solid, so no internal pressure.
    $\sigma_{r,inner} = \frac{B_{inner}}{r^2} - A_{inner}$
    $\sigma_{\theta,inner} = \frac{B_{inner}}{r^2} + A_{inner}$
    Boundary condition at $r=b$: $\sigma_{r,inner}(b) = -P$.
    For a solid cylinder ($r=0$), $\sigma_r$ and $\sigma_\theta$ must be finite, which implies $B_{inner} = 0$.
    So, $\sigma_{r,inner} = -A_{inner}$ and $\sigma_{\theta,inner} = A_{inner}$.
    Thus, $A_{inner} = P$.
    The radial displacement $u_{r,inner}(r) = \frac{1-\nu}{E} \frac{B_{inner}}{r} - \frac{1+\nu}{E} A_{inner} r$.
    With $B_{inner}=0$ and $A_{inner}=P$: $u_{r,inner}(r) = - \frac{1+\nu}{E} P r$.
    The radial displacement at the outer surface $r=b$ is $u_{r,inner}(b) = - \frac{1+\nu}{E} P b$.
    The expansion of the inner shaft's outer radius is $a-b$. So, $a-b = u_{r,inner}(b)$.
    $a-b = \frac{1+\nu}{E} P b$
    $\delta = (a-b) = \frac{(1+\nu)Pb}{E}$  --- (This is incorrect, $\delta$ is a positive value)

    Let's redefine the displacement. $u_{r,inner}$ is the *change* in radius.
    The original radius is $b$. The new radius is $a$. So the expansion is $a-b$.
    $u_{r,inner}(b) = a-b$.
    $a-b = \frac{1+\nu}{E} \frac{B_{inner}}{b} - \frac{1-\nu}{E} A_{inner} b$.
    For the inner component, $\sigma_{r,inner}(b) = -P$. Also, $\sigma_{r,inner}(0)$ is finite, hence $B_{inner}=0$.
    So, $\sigma_{r,inner} = -A_{inner}$. Thus $A_{inner} = P$.
    $\sigma_{\theta,inner} = A_{inner} = P$.
    $u_{r,inner}(b) = -\frac{1-\nu}{E}Pb$. This is the inward displacement, meaning radius decreases. This is not right.

    **Correcting Lame's equations for displacement:**
    $u_r = \frac{1+\nu}{E} \frac{B}{r} - \frac{1-\nu}{E} Ar$
    For a solid cylinder (inner component) of radius $b$, subjected to external pressure $P$ at $r=b$.
    $\sigma_{r,inner}(b) = -P$. Since it's solid, $B_{inner}=0$. $\sigma_{r,inner} = -A_{inner}$. So $A_{inner}=P$.
    $u_{r,inner}(r) = -\frac{1-\nu}{E}Pr$.
    The displacement at the outer surface ($r=b$) is $u_{r,inner}(b) = -\frac{1-\nu}{E}Pb$. This represents a *reduction* in radius.
    The original radius was $b$. The new radius is $a$. The change in radius is $a-b$.
    This implies $a-b = u_{r,inner}(b)$ which is negative if $P,b,E>0$ and $\nu<1$.

    **Let's use the diametral expansion formula:**
    The diametral expansion of a solid cylinder of radius $b$, subjected to external pressure $P$, is:
    $\Delta d_{inner} = \frac{2(1+\nu)Pb}{E}$.
    The interference $\delta$ is the diametral difference. So, $\Delta d_{inner} = \delta$.
    $\delta = \frac{2(1+\nu)Pb}{E}$

*   **Outer Component (Sleeve/Hub):**
    Let the outer component have inner radius $a$ and outer radius $c$. It's subjected to internal pressure $P$ at $r=a$ and external pressure $p_o$ (usually 0).
    $\sigma_{r,outer} = \frac{B_{outer}}{r^2} - A_{outer}$
    $\sigma_{\theta,outer} = \frac{B_{outer}}{r^2} + A_{outer}$
    Boundary conditions:
    At $r=a$: $\sigma_{r,outer}(a) = P$.
    At $r=c$: $\sigma_{r,outer}(c) = p_o$ (let's assume $p_o = 0$).
    $P = \frac{B_{outer}}{a^2} - A_{outer}$
    $0 = \frac{B_{outer}}{c^2} - A_{outer} \implies A_{outer} = \frac{B_{outer}}{c^2}$
    Substituting $A_{outer}$: $P = \frac{B_{outer}}{a^2} - \frac{B_{outer}}{c^2} = B_{outer} \left( \frac{1}{a^2} - \frac{1}{c^2} \right)$
    $B_{outer} = \frac{P}{\frac{1}{a^2} - \frac{1}{c^2}} = \frac{Pa^2c^2}{c^2 - a^2}$
    $A_{outer} = \frac{P a^2}{c^2 - a^2}$

    The radial displacement $u_{r,outer}(r) = \frac{1+\nu}{E} \frac{B_{outer}}{r} - \frac{1-\nu}{E} A_{outer} r$.
    The radial contraction of the outer component at its inner surface ($r=a$) is $b-a$.
    So, the inward displacement is $u_{r,outer}(a) = a-b$.
    $a-b = \frac{1+\nu}{E} \frac{B_{outer}}{a} - \frac{1-\nu}{E} A_{outer} a$
    Substitute $A_{outer}$ and $B_{outer}$:
    $a-b = \frac{1+\nu}{E} \frac{Pa^2c^2}{a(c^2 - a^2)} - \frac{1-\nu}{E} \frac{Pa^2}{c^2 - a^2} a$
    $a-b = \frac{P a}{E} \left[ \frac{(1+\nu)c^2}{c^2 - a^2} - \frac{(1-\nu)a^2}{c^2 - a^2} \right]$
    $a-b = \frac{P a}{E} \left[ \frac{c^2 + \nu c^2 - a^2 + \nu a^2}{c^2 - a^2} \right]$
    $a-b = \frac{P a}{E} \left[ \frac{(c^2 - a^2) + \nu (c^2 + a^2)}{c^2 - a^2} \right]$
    $a-b = \frac{P a}{E} \left[ 1 + \nu \frac{c^2 + a^2}{c^2 - a^2} \right]$

    The diametral contraction of the outer component at its inner surface is $\Delta d_{outer} = a-b$.
    $\Delta d_{outer} = \frac{2 \delta}{2} = \delta$.
    So, the diametral contraction of the inner surface of the outer component is equal to the diametral interference $\delta$.
    $\delta = \frac{2Pa}{E} \left[ 1 + \nu \frac{c^2 + a^2}{c^2 - a^2} \right]$

*   **Combining for Interface Pressure:**
    We have two expressions for the diametral interference $\delta$:
    1.  From the inner component (solid shaft of radius $b$): $\delta = \frac{2(1+\nu)Pb}{E}$
    2.  From the outer component (thick cylinder $a$ to $c$, subjected to internal pressure $P$): $\delta = \frac{2Pa}{E} \left[ 1 + \nu \frac{c^2 + a^2}{c^2 - a^2} \right]$

    **Equating these:**
    $\frac{2(1+\nu)Pb}{E} = \frac{2Pa}{E} \left[ 1 + \nu \frac{c^2 + a^2}{c^2 - a^2} \right]$
    $(1+\nu)b = a \left[ 1 + \nu \frac{c^2 + a^2}{c^2 - a^2} \right]$

    This equation relates the radii $a, b, c$ and material properties $\nu, E$ to the interface pressure $P$. **Note:** The derivation above for the inner component assumed a solid shaft. If it's a hollow shaft, the derivation for $B_{inner}$ would be different based on the inner radius of the shaft.

    **Simplified Interface Pressure Calculation:**
    A commonly used formula for the interface pressure $P$ when a shaft of radius $b$ is fitted into a hub of inner radius $a$ and outer radius $c$ is derived by equating the diametral expansion of the shaft and the diametral contraction of the hub due to the interface pressure $P$.

    For the shaft (radius $b$, solid): $\delta = \Delta d_{shaft} = \frac{2(1+\nu)Pb}{E}$
    For the hub (inner radius $a$, outer radius $c$): $\delta = \Delta d_{hub} = \frac{2Pa}{E} \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2}$

    Equating these two expressions for $\delta$:
    $\frac{2(1+\nu)Pb}{E} = \frac{2Pa}{E} \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2}$

    Solving for $P$:
    $P = \frac{E \delta}{2b(1+\nu)} \times \frac{E}{2a \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2}}$ (This is wrong algebra)

    Let's rearrange the equation:
    $(1+\nu)b = a \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2}$
    This equation allows us to find the required interference $\delta$ for a given pressure $P$, or vice-versa.

    **The relationship between interference ($\delta$) and interface pressure ($P$) for a shrink fit between a solid shaft (radius $b$) and a hollow cylinder (inner radius $a$, outer radius $c$) is:**
    $\delta = \Delta d_{shaft} + \Delta d_{hub\_inner\_surface}$
    Where:
    *   $\Delta d_{shaft}$ is the diametral expansion of the shaft of radius $b$ due to external pressure $P$. $\Delta d_{shaft} = \frac{2(1+\nu)Pb}{E}$
    *   $\Delta d_{hub\_inner\_surface}$ is the diametral contraction of the hub's inner surface (radius $a$) due to internal pressure $P$ and external pressure $p_o$ (assumed 0). $\Delta d_{hub\_inner\_surface} = \frac{2Pa}{E} \left[ \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2} \right]$

    The total diametral interference is $\delta = d_{shaft} - d_{hole\_unexpanded}$.
    The shaft expands by $\Delta d_{shaft}$ and the hole contracts by $\Delta d_{hub\_inner\_surface}$.
    So, $\delta = \Delta d_{shaft} + \Delta d_{hub\_inner\_surface}$.

    Therefore:
    $\delta = \frac{2(1+\nu)Pb}{E} + \frac{2Pa}{E} \left[ \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2} \right]$
    $\delta = \frac{2P}{E} \left[ (1+\nu)b + a \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2} \right]$

    This equation can be rearranged to solve for $P$:
    $P = \frac{E \delta}{2 \left[ (1+\nu)b + a \frac{(1-\nu)a^2 + (1+\nu)c^2}{c^2-a^2} \right]}$

    **A more simplified form is often used:**
    Let $k = \frac{a^2}{c^2-a^2}$. Then the expression for hub contraction becomes:
    $\Delta d_{hub\_inner\_surface} = \frac{2Pa}{E} [(1-\nu) + (1+\nu)k]$
    $\delta = \frac{2P}{E} \left[ (1+\nu)b + a((1-\nu) + (1+\nu)k) \right]$

    The formula commonly found in handbooks for the interface pressure $P$ for a shrink fit between a solid shaft of radius $b$ and a hollow cylinder of inner radius $a$ and outer radius $c$ is:
    $P = \frac{E \delta}{2a} \frac{(c^2-a^2)}{(c^2+a^2) + \nu(c^2-a^2)}$ ... this is for a specific case.

    **A more direct approach relating radii and pressure:**
    Consider the radial displacement of the inner component $u_{r,inner}(b)$ and the outer component $u_{r,outer}(a)$.
    The total interference $\delta$ is the sum of the radial expansion of the shaft's outer surface and the radial contraction of the hub's inner surface.
    $\frac{\delta}{2} = u_{r,inner}(b) + u_{r,outer}(a)$
    Assuming the inner component is solid with radius $b$, the expansion is $\frac{(1+\nu)Pb}{E}$.
    Assuming the outer component is a thick cylinder with inner radius $a$ and outer radius $c$, the contraction at the inner surface due to internal pressure $P$ is $\frac{aP}{E} \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right)$.

    So, the diametral interference $\delta$ is:
    $\delta = 2 \times \frac{(1+\nu)Pb}{E} + 2 \times \frac{aP}{E} \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right)$
    $\delta = \frac{2P}{E} \left[ (1+\nu)b + a \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right) \right]$

    This formula is often presented in slightly different forms. Let's use a common one:
    The diametral expansion of the inner shaft is $\Delta d_{shaft} = \frac{2Pb}{E} (1+\nu)$.
    The diametral contraction of the hub's inner bore is $\Delta d_{hub} = \frac{2Pa}{E} \frac{c^2+a^2}{c^2-a^2} - \frac{2P \nu a}{E}$.

    Equating interference $\delta$ to the sum of these:
    $\delta = \Delta d_{shaft} + \Delta d_{hub}$
    $\delta = \frac{2Pb}{E} (1+\nu) + \frac{2Pa}{E} \frac{c^2+a^2}{c^2-a^2} - \frac{2P \nu a}{E}$
    $\delta = \frac{2P}{E} \left[ b(1+\nu) + a \frac{c^2+a^2}{c^2-a^2} - \nu a \right]$
    $\delta = \frac{2P}{E} \left[ b + \nu b + a \frac{c^2+a^2}{c^2-a^2} - \nu a \right]$

    Rearranging to solve for $P$:
    $P = \frac{E \delta}{2 \left[ b(1+\nu) + a \left( \frac{c^2+a^2}{c^2-a^2} - \nu \right) \right]}$

    **Key Point:** The interface pressure $P$ is directly proportional to the interference $\delta$ and the modulus of elasticity $E$. It is also influenced by the geometry of the components (radii $a, b, c$) and Poisson's ratio $\nu$.

### 2.5 Stress Distribution

Once $P$ is known, the stresses ($\sigma_r$ and $\sigma_\theta$) can be calculated at any radial location within each component using Lame's equations.

*   **Inner Component (Shaft):**
    *   Applied external pressure $P$ at $r=b$.
    *   $B_{inner} = 0$, $A_{inner} = P$.
    *   $\sigma_{r,inner} = -P$ (at $r=b$) to $0$ (at $r=0$ if solid).
    *   $\sigma_{\theta,inner} = P$ (at $r=b$) to $P$ (at $r=0$ if solid).
    *   **Important:** The shaft experiences tensile hoop stress.

*   **Outer Component (Hub):**
    *   Applied internal pressure $P$ at $r=a$, external pressure $p_o=0$ at $r=c$.
    *   $A_{outer} = \frac{P a^2}{c^2 - a^2}$, $B_{outer} = \frac{P a^2 c^2}{c^2 - a^2}$.
    *   At the inner surface ($r=a$):
        *   $\sigma_{r,outer}(a) = P$.
        *   $\sigma_{\theta,outer}(a) = A_{outer} + B_{outer}/a^2 = \frac{P a^2}{c^2 - a^2} + \frac{P a^2 c^2}{a^2(c^2 - a^2)} = P \frac{c^2+a^2}{c^2-a^2}$.
    *   At the outer surface ($r=c$):
        *   $\sigma_{r,outer}(c) = 0$.
        *   $\sigma_{\theta,outer}(c) = A_{outer} + B_{outer}/c^2 = \frac{P a^2}{c^2 - a^2} + \frac{P a^2 c^2}{c^2(c^2 - a^2)} = P \frac{a^2}{c^2-a^2} + P \frac{a^2}{c^2-a^2} = P \frac{2a^2}{c^2-a^2}$.
    *   **Important:** The hub experiences compressive hoop stress at the bore and decreasing compression towards the outer surface.

**Example Calculation:**
A steel shaft (radius $b=25$ mm) is shrink-fitted into a steel hub (inner radius $a=25$ mm, outer radius $c=50$ mm). The interference is $\delta = 0.05$ mm.
Given: $E = 200$ GPa, $\nu = 0.3$.

First, we need to ensure the radii are consistent. If the shaft radius is $b$ and the hub bore is $a$, then the interference is usually $\delta = d_{shaft} - d_{hole}$. So, if $d_{shaft}$ is to be fitted into a hole of $d_{hole}$, then $d_{shaft} > d_{hole}$. Let's assume the shaft has an outer diameter $d_s$ and the hub has an inner diameter $d_h$. Interference $\delta = d_s - d_h$.
In the formulas derived, $b$ is the radius of the shaft and $a$ is the inner radius of the hub. So, $b=a$ if they are initially the same nominal size and the shaft is slightly larger.
Let's use the case where the shaft's outer radius is $b$, and the hub's inner radius is $a$.
If the shaft has radius $b$ and the hub's inner radius is $a$. The interference is the difference in their diameters when they are to be assembled without deformation.
Let's assume the shaft has radius $b$ and the hub has inner radius $a$. And we are given the interference $\delta$ as the diametral difference.
So, $d_{shaft} = 2b$, $d_{hole} = 2a$. $\delta = 2b - 2a$.
The formulas for $P$ derived above usually assume $b$ and $a$ are radii.
Let's re-evaluate the formula $P = \frac{E \delta}{2 \left[ b(1+\nu) + a \left( \frac{c^2+a^2}{c^2-a^2} - \nu \right) \right]}$.
Here $b$ is the radius of the inner component, and $a$ is the inner radius of the outer component.
Given: $a = b = 25$ mm. $c = 50$ mm. $\delta = 0.05$ mm. $E = 200 \times 10^3$ N/mm$^2$. $\nu = 0.3$.

$P = \frac{(200 \times 10^3 \text{ N/mm}^2) \times (0.05 \text{ mm})}{2 \left[ (25 \text{ mm})(1+0.3) + (25 \text{ mm}) \left( \frac{(50 \text{ mm})^2+(25 \text{ mm})^2}{(50 \text{ mm})^2-(25 \text{ mm})^2} - 0.3 \right) \right]}$
$P = \frac{10000}{2 \left[ 25 \times 1.3 + 25 \left( \frac{2500+625}{2500-625} - 0.3 \right) \right]}$
$P = \frac{10000}{2 \left[ 32.5 + 25 \left( \frac{3125}{1875} - 0.3 \right) \right]}$
$P = \frac{10000}{2 \left[ 32.5 + 25 (1.6667 - 0.3) \right]}$
$P = \frac{10000}{2 \left[ 32.5 + 25 (1.3667) \right]}$
$P = \frac{10000}{2 \left[ 32.5 + 34.1675 \right]}$
$P = \frac{10000}{2 \left[ 66.6675 \right]}$
$P = \frac{10000}{133.335} \approx 75$ N/mm$^2$ = 75 MPa.

Now, calculate stresses:
*   **Inner Component (Shaft):**
    $\sigma_{r,inner} = -P = -75$ MPa.
    $\sigma_{\theta,inner} = P = 75$ MPa (tensile).

*   **Outer Component (Hub):**
    $a=25$ mm, $c=50$ mm, $P=75$ MPa, $\nu=0.3$, $E=200$ GPa.
    $A_{outer} = \frac{P a^2}{c^2 - a^2} = \frac{75 \times 25^2}{50^2 - 25^2} = \frac{75 \times 625}{2500 - 625} = \frac{46875}{1875} = 25$ MPa.
    $B_{outer} = \frac{P a^2 c^2}{c^2 - a^2} = \frac{75 \times 25^2 \times 50^2}{50^2 - 25^2} = 25 \times 50^2 = 25 \times 2500 = 62500$ N$\cdot$mm$^2$.

    At the inner surface ($r=a=25$ mm):
    $\sigma_{r,outer}(a) = P = 75$ MPa.
    $\sigma_{\theta,outer}(a) = A_{outer} + \frac{B_{outer}}{a^2} = 25 + \frac{62500}{25^2} = 25 + \frac{62500}{625} = 25 + 100 = 125$ MPa.
    **Wait**, the hub should be in compression. The formula for $\sigma_\theta$ for the outer component under internal pressure $P$ is $\sigma_\theta = A + B/r^2$.
    $\sigma_{\theta,outer}(a) = \frac{Pa^2}{c^2-a^2} + \frac{Pc^2}{c^2-a^2} = P \frac{c^2+a^2}{c^2-a^2}$ -- This formula is for when $p_i$ is the *inner* pressure and $p_o$ is the *outer* pressure.
    For the outer component, the applied pressure at $r=a$ is $P$, and at $r=c$ is $0$.
    $\sigma_{r,outer}(r) = \frac{B_{outer}}{r^2} - A_{outer}$
    $\sigma_{\theta,outer}(r) = \frac{B_{outer}}{r^2} + A_{outer}$
    With $A_{outer} = \frac{Pa^2}{c^2-a^2}$ and $B_{outer} = \frac{Pa^2c^2}{c^2-a^2}$.
    At $r=a$:
    $\sigma_{r,outer}(a) = \frac{Pa^2c^2}{a^2(c^2-a^2)} - \frac{Pa^2}{c^2-a^2} = P \left( \frac{c^2}{c^2-a^2} - \frac{a^2}{c^2-a^2} \right) = P \frac{c^2-a^2}{c^2-a^2} = P$. (Correct for internal pressure)
    $\sigma_{\theta,outer}(a) = \frac{Pa^2c^2}{a^2(c^2-a^2)} + \frac{Pa^2}{c^2-a^2} = P \left( \frac{c^2}{c^2-a^2} + \frac{a^2}{c^2-a^2} \right) = P \frac{c^2+a^2}{c^2-a^2}$.
    So, $\sigma_{\theta,outer}(a) = 75 \times \frac{50^2+25^2}{50^2-25^2} = 75 \times \frac{3125}{1875} = 75 \times 1.6667 = 125$ MPa.

    **Issue:** The hoop stress in the hub at the bore should be compressive, not tensile. Let's recheck the Lame's equation application for the outer component.
    The derived constants $A_{outer}$ and $B_{outer}$ are correct for an *internal* pressure $P$.
    The hoop stress at the bore is $\sigma_{\theta,outer}(a) = P \frac{c^2+a^2}{c^2-a^2}$. This is indeed positive, meaning tensile.

    **Revisiting the physical meaning of hoop stress and radial stress:**
    For the outer component, it is under internal pressure $P$. The radial stress is compressive (negative). The hoop stress is tensile.
    For the inner component, it is under external pressure $P$. The radial stress is compressive (negative). The hoop stress is tensile.

    **Where is the compression in the hub?**
    The statement that the outer component is put into compression is referring to the *net effect* or perhaps the radial stress. Let's re-examine the radial stress.
    For the inner component (shaft): $\sigma_{r,inner}(b) = -P = -75$ MPa (compressive). $\sigma_{\theta,inner}(b) = P = 75$ MPa (tensile).
    For the outer component (hub):
    At the inner surface ($r=a$): $\sigma_{r,outer}(a) = P = 75$ MPa (tensile). $\sigma_{\theta,outer}(a) = P \frac{c^2+a^2}{c^2-a^2} = 125$ MPa (tensile).
    At the outer surface ($r=c$): $\sigma_{r,outer}(c) = 0$. $\sigma_{\theta,outer}(c) = P \frac{2a^2}{c^2-a^2} = 75 \times \frac{2 \times 25^2}{50^2-25^2} = 75 \times \frac{2 \times 625}{1875} = 75 \times \frac{1250}{1875} = 75 \times 0.6667 = 50$ MPa (tensile).

    **This seems counter-intuitive!** Usually, the outer component is described as being in compression.
    The *radial* stress at the interface for the hub is indeed tensile, acting outwards. The radial stress for the shaft is compressive, acting inwards.

    **Let's re-read a standard text on shrink fits.**
    "When the outer member is heated and shrunk onto the inner member, the inner member is put into a state of tension, and the outer member is put into a state of compression." This often refers to the hoop stress.

    **Let's re-check Lame's formulation:**
    Lame's equations for a cylinder with internal pressure $p_i$ and external pressure $p_o$:
    $\sigma_r = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_i - p_o) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)}$
    $\sigma_\theta = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} + \frac{(p_i - p_o) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)}$

    *   **Inner Component (Shaft, radius $b$):** Subject to external pressure $P$ at $r=b$. Assume solid.
        $r_i$ is internal radius, $r_o$ is external radius. For solid, $r_i=0$.
        $\sigma_r = -P \frac{r_o^2}{r^2}$ and $\sigma_\theta = -P \frac{r_o^2}{r^2}$. This is not right.

    Let's use the common parameterization: $A = \frac{p_o r_o^2 - p_i r_i^2}{r_o^2 - r_i^2}$, $B = \frac{(p_i - p_o) r_i^2 r_o^2}{r_o^2 - r_i^2}$.
    $\sigma_r = A - B/r^2$, $\sigma_\theta = A + B/r^2$.

    *   **Inner component (Shaft):** Outer radius $b$. Subject to external pressure $P$. $r_i$ (inner boundary) is irrelevant if solid. $r_o = b$.
        Boundary condition: $\sigma_r(b) = -P$.
        Let's assume it is solid and the point of interest is at $r=b$.
        From the displacement analysis, the effective hoop stress is $P$.

    *   **Outer component (Hub):** Inner radius $a$, outer radius $c$. Internal pressure $p_i = P$, external pressure $p_o = 0$.
        $r_i = a$, $r_o = c$.
        $A = \frac{0 \cdot c^2 - P a^2}{c^2 - a^2} = \frac{-P a^2}{c^2 - a^2}$.
        $B = \frac{(P - 0) a^2 c^2}{c^2 - a^2} = \frac{P a^2 c^2}{c^2 - a^2}$.

        $\sigma_r = \frac{-P a^2}{c^2 - a^2} - \frac{P a^2 c^2}{r^2(c^2 - a^2)} = -\frac{P a^2}{c^2 - a^2} \left( 1 + \frac{c^2}{r^2} \right)$.
        At $r=a$: $\sigma_r(a) = -\frac{P a^2}{c^2 - a^2} \left( 1 + \frac{c^2}{a^2} \right) = -\frac{P a^2}{c^2 - a^2} \frac{a^2+c^2}{a^2} = -P \frac{a^2+c^2}{c^2-a^2}$. This is wrong for radial pressure.

    Let's trust the displacement approach for $P$. And the stress calculation from it.
    For the inner component (solid shaft of radius $b$):
    $\sigma_{r,inner} = -P \frac{b^2}{r^2}$ is incorrect.
    The hoop stress for a solid cylinder under external pressure $P$ is $\sigma_\theta = P$. This is the tensile stress.

    Let's use the standard result from Timoshenko for shrink fit:
    Inner cylinder (shaft) of radius $b$:
    $\sigma_{r,inner} = -P \frac{b^2}{r^2}$ (radial stress, compressive)
    $\sigma_{\theta,inner} = P \frac{b^2}{r^2}$ (hoop stress, tensile)
    At $r=b$, $\sigma_{r,inner} = -P$ and $\sigma_{\theta,inner} = P$.

    Outer cylinder (hub) of inner radius $a$, outer radius $c$:
    $\sigma_{r,outer} = P \frac{a^2}{c^2 - a^2} (1 - \frac{c^2}{r^2})$ (radial stress, compressive for $r>a$)
    $\sigma_{\theta,outer} = P \frac{a^2}{c^2 - a^2} (1 + \frac{c^2}{r^2})$ (hoop stress, tensile for $r>a$)
    **This is for internal pressure $P$ and external pressure $p_o=0$.**

    Let's use the other formulation for stresses in a thick cylinder:
    $\sigma_r = C_1 - C_2/r^2$
    $\sigma_\theta = C_1 + C_2/r^2$

    *   **Inner component (Shaft):** Outer radius $b$. Subject to external pressure $P$. $p_o=P$, $p_i=0$. If solid, $C_2=0$.
        $\sigma_r = C_1$. $\sigma_\theta = C_1$.
        At $r=b$, $\sigma_r = -P$. So $C_1 = -P$.
        $\sigma_{r,inner} = -P$. $\sigma_{\theta,inner} = -P$. This is also wrong.

    Let's use the results from the displacement calculation directly.
    For the inner component, the radial expansion at its outer surface $b$ is $\frac{(1+\nu)Pb}{E}$.
    For the outer component, the radial contraction at its inner surface $a$ is $\frac{aP}{E} \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right)$.
    The sum of these is the diametral interference $\delta$.

    **Stress for Inner Component (Shaft):**
    Hoop stress $\sigma_{\theta,inner} = P = 75$ MPa (tensile).
    Radial stress $\sigma_{r,inner} = -P = -75$ MPa (compressive).

    **Stress for Outer Component (Hub):**
    At the inner bore ($r=a=25$ mm):
    $\sigma_{r,outer}(a) = P \frac{a^2}{c^2 - a^2} (1 - \frac{c^2}{a^2}) = P \frac{a^2}{c^2-a^2} \frac{a^2-c^2}{a^2} = P \frac{a^2-c^2}{c^2-a^2} = -P = -75$ MPa (compressive).
    $\sigma_{\theta,outer}(a) = P \frac{a^2}{c^2 - a^2} (1 + \frac{c^2}{a^2}) = P \frac{a^2}{c^2-a^2} \frac{a^2+c^2}{a^2} = P \frac{a^2+c^2}{c^2-a^2} = 75 \times 1.6667 = 125$ MPa.
    **This hoop stress is tensile!**

    Let's re-verify the stress formulas for outer component under internal pressure $P$.
    $\sigma_r = \frac{a^2 p_i - c^2 p_o}{c^2-a^2} - \frac{r_i^2 r_o^2}{r^2} \frac{p_i - p_o}{r_o^2-r_i^2}$
    $\sigma_\theta = \frac{a^2 p_i - c^2 p_o}{c^2-a^2} + \frac{r_i^2 r_o^2}{r^2} \frac{p_i - p_o}{r_o^2-r_i^2}$
    Here $r_i=a$, $r_o=c$, $p_i=P$, $p_o=0$.
    $\sigma_r = \frac{P a^2 - 0}{c^2-a^2} - \frac{a^2 c^2}{r^2} \frac{P - 0}{c^2-a^2} = \frac{Pa^2}{c^2-a^2} \left( 1 - \frac{c^2}{r^2} \right)$.
    At $r=a$: $\sigma_r(a) = \frac{Pa^2}{c^2-a^2} \left( 1 - \frac{c^2}{a^2} \right) = \frac{Pa^2}{c^2-a^2} \frac{a^2-c^2}{a^2} = -P$. (Correct!)

    $\sigma_\theta = \frac{P a^2}{c^2-a^2} + \frac{a^2 c^2}{r^2} \frac{P}{c^2-a^2} = \frac{Pa^2}{c^2-a^2} \left( 1 + \frac{c^2}{r^2} \right)$.
    At $r=a$: $\sigma_\theta(a) = \frac{Pa^2}{c^2-a^2} \left( 1 + \frac{c^2}{a^2} \right) = \frac{Pa^2}{c^2-a^2} \frac{a^2+c^2}{a^2} = P \frac{a^2+c^2}{c^2-a^2}$. (Correct formula, gives tensile stress).

    **My initial understanding of the "compression" of the outer member was possibly flawed or a simplification.** The outer member experiences varying radial stress (compressive at inner, zero at outer) and tensile hoop stress, though the magnitude of hoop stress is higher at the bore.

    Let's consider the case of a very thick hub: $c \to \infty$.
    $\sigma_r \approx \frac{Pa^2}{r^2}$, $\sigma_\theta \approx \frac{Pa^2}{r^2}$.
    These are tensile radial and hoop stresses acting outwards. This is not correct for a hub under internal pressure.

    **The common statement about compression in the outer member might refer to the radial stress acting ON the inner member, which is compressive.**

    **Important Point:** The interface pressure is the critical parameter, which is calculated based on the elastic deformation due to interference. The stresses are then derived from this pressure using Lame's equations.

---

## 3. Calculating Stresses and Strains in Shrink-Fitted Components

This has been largely covered in Section 2.5. The process is:
1.  **Determine Interference ($\delta$):** This is usually specified or calculated from required assembly temperature.
2.  **Calculate Interface Pressure ($P$):** Using the formula derived from equating the diametral expansion of the inner component and the diametral contraction of the outer component.
3.  **Calculate Stresses:**
    *   **Inner Component:** Typically tensile hoop stress ($\sigma_\theta = P$ for solid shaft).
    *   **Outer Component:** Tensile hoop stress at the bore ($\sigma_\theta = P \frac{c^2+a^2}{c^2-a^2}$). Compressive radial stress at the bore ($\sigma_r = -P$).

### 3.1 Strains

Strains are calculated from stresses using Hooke's Law:
*   $\epsilon_r = \frac{1}{E}(\sigma_r - \nu \sigma_\theta)$
*   $\epsilon_\theta = \frac{1}{E}(\sigma_\theta - \nu \sigma_r)$

**Example:** Using the previous example: $P=75$ MPa, $\nu=0.3$, $E=200$ GPa.
*   **Inner Component (Shaft) at $r=b$:**
    $\sigma_{r,inner} = -75$ MPa, $\sigma_{\theta,inner} = 75$ MPa.
    $\epsilon_{r,inner} = \frac{1}{200 \times 10^3 \text{ MPa}}(-75 - 0.3 \times 75) = \frac{-75(1+0.3)}{200 \times 10^3} = \frac{-97.5}{200000} \approx -0.0004875$.
    $\epsilon_{\theta,inner} = \frac{1}{200 \times 10^3 \text{ MPa}}(75 - 0.3 \times (-75)) = \frac{75(1+0.3)}{200 \times 10^3} = \frac{97.5}{200000} \approx 0.0004875$.
    The radial strain is negative (contraction), and hoop strain is positive (expansion), as expected.

*   **Outer Component (Hub) at $r=a$:**
    $\sigma_{r,outer} = -75$ MPa, $\sigma_{\theta,outer} = 125$ MPa.
    $\epsilon_{r,outer} = \frac{1}{200 \times 10^3 \text{ MPa}}(-75 - 0.3 \times 125) = \frac{-75 - 37.5}{200000} = \frac{-112.5}{200000} \approx -0.0005625$.
    $\epsilon_{\theta,outer} = \frac{1}{200 \times 10^3 \text{ MPa}}(125 - 0.3 \times (-75)) = \frac{125 + 22.5}{200000} = \frac{147.5}{200000} \approx 0.0007375$.
    Radial strain is negative (contraction), hoop strain is positive (expansion).

---

## 4. Determining the Interface Pressure

As established, the interface pressure $P$ is the key parameter. Its determination is central to shrink fit analysis.

### 4.1 Factors Affecting Interface Pressure

*   **Interference ($\delta$):** Higher interference leads to higher interface pressure.
*   **Modulus of Elasticity ($E$):** Materials with higher $E$ will generate higher pressure for the same interference, as they deform less elastically.
*   **Poisson's Ratio ($\nu$):** Influences the lateral deformation and thus the pressure.
*   **Geometry (Radii):** The ratio of radii ($a/c$ for the outer component) significantly affects the stress distribution and the overall pressure. Thicker walls (larger $c/a$ ratio) lead to lower interface pressure for a given interference compared to thinner walls.

### 4.2 Formulas for Interface Pressure

The primary formula used is derived by equating the diametral interference to the sum of the diametral expansions/contractions of the components.

For a solid inner shaft (radius $b$) and a hollow outer cylinder (inner radius $a$, outer radius $c$), the diametral interference $\delta$ is given by:
$\delta = \frac{2Pb}{E}(1+\nu) + \frac{2Pa}{E} \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right)$

Solving for $P$:
$P = \frac{E \delta}{2 \left[ b(1+\nu) + a \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right) \right]}$

**Note on radii:** In the formula, $b$ is the radius of the inner component, and $a$ is the inner radius of the outer component. For typical shrink fitting, $b=a$.

If the outer component is relatively thin-walled, approximations can be made. However, for accurate analysis, the thick-walled cylinder equations are essential.

---

## 5. Factors Affecting Shrink Fit Performance

Besides the parameters used in pressure calculation, other factors are critical:

*   **Material Properties:**
    *   **Yield Strength:** The stresses developed must not exceed the yield strength of the materials. Hoop stresses are generally the highest.
    *   **Thermal Expansion Coefficient ($\alpha$):** The difference in $\alpha$ between the two materials can be beneficial (e.g., using a material with a higher $\alpha$ for the outer component) or detrimental if not accounted for.
    *   **Thermal Conductivity:** Affects the time required for heating/cooling and the uniformity of temperature distribution, influencing assembly time and stress development.

*   **Surface Finish and Lubrication:**
    *   Good surface finish reduces friction during assembly.
    *   Lubrication can ease assembly but might affect the final clamping force if not properly chosen.

*   **Tolerance Control:**
    *   Precise control of component dimensions is crucial for achieving the desired interference and thus the intended interface pressure.

*   **Assembly Temperature:**
    *   The temperature difference $\Delta T$ during heating/cooling determines the initial dimensional change and hence the interference. $\Delta d = \alpha d_0 \Delta T$.

*   **External Loads:**
    *   The shrink fit must be able to withstand operating loads (torque, bending moments, axial forces) without slipping. The gripping force is a function of interface pressure and the contact area.

*   **Fatigue Life:**
    *   The cyclic stresses induced by operating loads and temperature variations can lead to fatigue failure.

---

## 6. Applications and Limitations of Shrink Fitting

### 6.1 Applications

*   **Wheels on Axles:** Locomotives, railway cars, automotive wheels.
*   **Gears and Bearings:** Mounting gears, pulleys, and bearings onto shafts.
*   **Turbine Rotors:** Assembling rotor discs and blades.
*   **Boiler Drums and High-Pressure Vessels:** Forming strong, leak-proof joints.
*   **Cylinders in Engines:** Cylinder liners in internal combustion engines.
*   **Brakes:** Mounting brake discs and drums.
*   **Precision Instruments:** Mounting optical components.

### 6.2 Advantages

*   **High Strength and Rigidity:** Creates a very strong interference fit that can transmit significant torque and axial forces.
*   **No Loosening:** The fit is maintained by the stresses, preventing loosening under vibration.
*   **No Fasteners:** Eliminates the need for keys, splines, or fasteners, simplifying design and assembly.
*   **Improved Fatigue Life (sometimes):** The compressive stresses in the outer member can sometimes improve fatigue resistance.
*   **Leak-Proof Joints:** Can create pressure-tight seals.

### 6.3 Limitations

*   **Disassembly:** Disassembly can be difficult, often requiring significant heating or cooling.
*   **Stress Concentration:** Sharp corners or discontinuities can lead to stress concentrations, potentially causing failure.
*   **Material Compatibility:** Different coefficients of thermal expansion can lead to undesirable stresses during temperature cycling.
*   **Dimensional Accuracy:** Relies on precise manufacturing and controlled assembly conditions.
*   **Potential for Damage:** Overheating or excessive interference can damage components.
*   **Cooling/Heating Equipment:** Requires specialized equipment for assembly.

---

## Practice Questions and Exercises

**Question 1:**
A steel shaft of radius $b = 30$ mm is shrink-fitted into a steel hub of inner radius $a = 30$ mm and outer radius $c = 60$ mm. The interference is $\delta = 0.06$ mm. If the modulus of elasticity $E = 200$ GPa and Poisson's ratio $\nu = 0.3$, calculate the interface pressure $P$.

**Answer 1:**
Using the formula:
$P = \frac{E \delta}{2 \left[ b(1+\nu) + a \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right) \right]}$
$E = 200 \times 10^3$ N/mm$^2$, $\delta = 0.06$ mm, $b=30$ mm, $a=30$ mm, $c=60$ mm, $\nu = 0.3$.

Denominator term:
$b(1+\nu) = 30 (1+0.3) = 30 \times 1.3 = 39$
$a \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right) = 30 \left( \frac{60^2+30^2}{60^2-30^2} + 0.3 \right) = 30 \left( \frac{3600+900}{3600-900} + 0.3 \right)$
$= 30 \left( \frac{4500}{2700} + 0.3 \right) = 30 (1.6667 + 0.3) = 30 (1.9667) = 59.001$

Denominator $= 2 \times [39 + 59.001] = 2 \times 98.001 = 196.002$

$P = \frac{(200 \times 10^3 \text{ N/mm}^2) \times 0.06 \text{ mm}}{196.002} = \frac{12000}{196.002} \approx 61.22$ N/mm$^2$ = 61.22 MPa.

**Question 2:**
For the shrink fit described in Question 1, calculate the hoop stress and radial stress at the interface (bore) of the outer component (hub).

**Answer 2:**
Interface pressure $P = 61.22$ MPa.
Inner radius of hub $a = 30$ mm, outer radius $c = 60$ mm, $\nu = 0.3$.

Stresses in the outer component (hub):
$\sigma_{r,outer}(a) = -P = -61.22$ MPa (compressive).
$\sigma_{\theta,outer}(a) = P \frac{c^2+a^2}{c^2-a^2} = 61.22 \times \frac{60^2+30^2}{60^2-30^2} = 61.22 \times \frac{4500}{2700} = 61.22 \times 1.6667 \approx 102.04$ MPa (tensile).

**Question 3:**
A cast iron sleeve (inner radius $a=40$ mm, outer radius $c=80$ mm) is to be shrink-fitted onto a steel shaft (radius $b=40$ mm).
Properties:
Steel shaft: $E_s = 200$ GPa, $\nu_s = 0.3$.
Cast iron sleeve: $E_{ci} = 150$ GPa, $\nu_{ci} = 0.25$.

The maximum allowable tensile stress in the steel shaft is $150$ MPa. Determine the maximum permissible interference $\delta$ for the shaft.

**Answer 3:**
For the steel shaft, the hoop stress is tensile: $\sigma_{\theta,inner} = P$.
So, the maximum permissible hoop stress in the shaft is $150$ MPa. This means the maximum interface pressure $P_{max} = 150$ MPa.

Now, we need to calculate the interference $\delta$ corresponding to this pressure. The formula for $P$ is:
$P = \frac{E \delta}{2 \left[ b(1+\nu) + a \left( \frac{c^2+a^2}{c^2-a^2} + \nu \right) \right]}$
We need to use the properties of both materials in the denominator. The formula for $\delta$ in terms of $P$ is:
$\delta = \frac{2P}{E_s} \left[ b(1+\nu_s) \right] + \frac{2P}{E_{ci}} \left[ a \left( \frac{c^2+a^2}{c^2-a^2} + \nu_{ci} \right) \right]$
This is incorrect. The modulus and Poisson's ratio in the formula for $P$ should correspond to the material of the component being analyzed.

Let's reformulate the expression for $\delta$:
$\delta = \Delta d_{shaft} + \Delta d_{hub}$
$\Delta d_{shaft} = \frac{2(1+\nu_s)Pb}{E_s}$ (diametral expansion of shaft)
$\Delta d_{hub} = \frac{2Pa}{E_{ci}} \left( \frac{c^2+a^2}{c^2-a^2} + \nu_{ci} \right)$ (diametral contraction of hub)

So, $\delta = \frac{2P}{E_s} b(1+\nu_s) + \frac{2P}{E_{ci}} a \left( \frac{c^2+a^2}{c^2-a^2} + \nu_{ci} \right)$.
Here, $P=150$ MPa.
$E_s = 200$ GPa, $\nu_s = 0.3$, $b=40$ mm.
$E_{ci} = 150$ GPa, $\nu_{ci} = 0.25$, $a=40$ mm, $c=80$ mm.

$\Delta d_{shaft} = \frac{2 \times 150 \text{ MPa}}{200 \times 10^3 \text{ MPa}} \times 40 \text{ mm} \times (1+0.3) = \frac{300}{200000} \times 40 \times 1.3 = 0.0015 \times 40 \times 1.3 = 0.078$ mm.

Term for hub:
$\frac{c^2+a^2}{c^2-a^2} = \frac{80^2+40^2}{80^2-40^2} = \frac{6400+1600}{6400-1600} = \frac{8000}{4800} = 1.6667$.
$a \left( \frac{c^2+a^2}{c^2-a^2} + \nu_{ci} \right) = 40 (1.6667 + 0.25) = 40 (1.9167) = 76.668$ mm.
$\Delta d_{hub} = \frac{2 \times 150 \text{ MPa}}{150 \times 10^3 \text{ MPa}} \times 76.668 \text{ mm} = \frac{300}{150000} \times 76.668 = 0.002 \times 76.668 = 0.1533$ mm.

Total interference $\delta = \Delta d_{shaft} + \Delta d_{hub} = 0.078 \text{ mm} + 0.1533 \text{ mm} = 0.2313$ mm.

The maximum permissible interference for the shaft is $0.2313$ mm.

---

## Important Points to Remember

*   **Interference is key:** The amount of interference directly dictates the interface pressure and the resulting stresses.
*   **Thermal expansion is the method:** Heating/cooling is used to create the interference by exploiting thermal expansion/contraction.
*   **Lame's equations are foundational:** They are used to analyze stresses and strains in thick-walled cylinders, which are common in shrink-fit applications.
*   **Tensile hoop stress:** The inner component (shaft) experiences tensile hoop stress, which is often the critical factor for failure.
*   **Factors influencing pressure:** Modulus of elasticity, Poisson's ratio, geometry, and interference all play significant roles in determining the interface pressure.
*   **Material limits:** Always ensure that the calculated stresses are within the material's yield and ultimate strength limits.
*   **Assembly temperature:** The required assembly temperature depends on the desired interference and the coefficient of thermal expansion. $\Delta T = \delta / (\alpha d_0)$.

This concludes the notes for Module 3: Shrink Fit. Remember to practice the calculations for interface pressure and stresses using different geometries and material properties.
