---
title: "Stresses in pressure vessels – Dilation of pressure vessels"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 1: Pressure vessel – Terminology – Types of loads – Types of pressure"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044643fa"
status: "completed"
scrapedAt: "2026-05-20T18:23:30.898Z"
---
# Module 1: Pressure Vessels - Terminology, Loads, and Types of Pressure

## Topic: Stresses in Pressure Vessels – Dilation of Pressure Vessels

This topic delves into the fundamental mechanical behavior of pressure vessels when subjected to internal and external pressure, focusing on the resulting stresses and dimensional changes (dilation). Understanding these concepts is crucial for ensuring the safety and integrity of pressure vessels in various industrial applications.

---

### 1. Introduction to Stresses in Pressure Vessels

Pressure vessels are designed to contain fluids (liquids or gases) at pressures significantly different from the ambient atmospheric pressure. This pressure difference generates stresses within the vessel walls. The primary goal of pressure vessel design is to ensure that these stresses remain within acceptable limits to prevent failure.

**Key Concepts:**

*   **Stress:** Force per unit area acting within a material. In pressure vessels, we primarily consider normal stress (acting perpendicular to a surface) and shear stress (acting parallel to a surface).
*   **Strain:** The deformation of a material per unit of its original dimensions.
*   **Hooke's Law:** For elastic materials, stress is directly proportional to strain ($\sigma = E\epsilon$), where $E$ is the Young's modulus of the material.

---

### 2. Types of Stresses in Pressure Vessels

The most common types of stresses encountered in thin-walled pressure vessels due to internal pressure are:

#### 2.1. Hoop Stress (Circumferential Stress)

Hoop stress is the stress acting tangentially to the circumference of the vessel. It is induced by the internal pressure trying to expand the vessel outwards.

**Derivation (Thin-Walled Cylindrical Vessel):**

Consider a longitudinal section of a thin-walled cylinder cut through its diameter.
*   Let $P$ be the internal pressure.
*   Let $t$ be the wall thickness.
*   Let $D$ be the internal diameter (or $R$ as internal radius).
*   Let $\sigma_h$ be the hoop stress.

The force acting to split the cylinder along its length is due to the internal pressure acting on the projected area of the cylinder's cross-section.
Force due to pressure = $P \times (\text{projected area}) = P \times (D \times L)$, where $L$ is the length of the cylinder.

This force is resisted by the internal force acting on the two cut surfaces of the cylinder wall.
Resisting force = $2 \times (\text{stress} \times \text{area}) = 2 \times \sigma_h \times (t \times L)$.

Equating the forces:
$P \times D \times L = 2 \times \sigma_h \times t \times L$
$\sigma_h = \frac{P \times D}{2 \times t}$

**Important Points:**

*   Hoop stress is the **highest stress** in a thin-walled cylindrical pressure vessel.
*   It acts in a direction **tangential to the circumference**.

**Example:** A cylindrical vessel with an internal diameter of 1 meter and a wall thickness of 10 mm is subjected to an internal pressure of 5 MPa. Calculate the hoop stress.

*   $D = 1000$ mm
*   $t = 10$ mm
*   $P = 5$ MPa

$\sigma_h = \frac{5 \text{ MPa} \times 1000 \text{ mm}}{2 \times 10 \text{ mm}} = \frac{5000}{20} \text{ MPa} = 250 \text{ MPa}$

#### 2.2. Longitudinal Stress (Axial Stress)

Longitudinal stress is the stress acting along the axis of the cylindrical vessel. It is induced by the internal pressure acting on the end caps of the vessel.

**Derivation (Thin-Walled Cylindrical Vessel):**

Consider a cross-section of the cylinder perpendicular to its axis.
*   Let $P$ be the internal pressure.
*   Let $t$ be the wall thickness.
*   Let $D$ be the internal diameter (or $R$ as internal radius).
*   Let $\sigma_l$ be the longitudinal stress.

The force acting to split the cylinder across its cross-section is due to the internal pressure acting on the circular end of the cylinder.
Force due to pressure = $P \times (\text{area of end cap}) = P \times (\frac{\pi D^2}{4})$ or $P \times (\pi R^2)$.

This force is resisted by the internal force acting on the cross-sectional area of the cylinder wall.
Resisting force = $\sigma_l \times (\text{area of wall cross-section}) = \sigma_l \times (\pi D t)$ or $\sigma_l \times (2 \pi R t)$.

Equating the forces:
$P \times \frac{\pi D^2}{4} = \sigma_l \times \pi D t$
$\sigma_l = \frac{P \times D}{4 \times t}$

**Important Points:**

*   Longitudinal stress is **half** the hoop stress in a thin-walled cylindrical pressure vessel.
*   It acts in a direction **parallel to the axis** of the cylinder.

**Example:** Using the same example as above, calculate the longitudinal stress.

*   $D = 1000$ mm
*   $t = 10$ mm
*   $P = 5$ MPa

$\sigma_l = \frac{5 \text{ MPa} \times 1000 \text{ mm}}{4 \times 10 \text{ mm}} = \frac{5000}{40} \text{ MPa} = 125 \text{ MPa}$

#### 2.3. Stresses in Spherical Vessels

In a spherical pressure vessel, the internal pressure induces uniform tensile stress in all directions on the surface of the sphere.

**Derivation (Thin-Walled Spherical Vessel):**

Consider a hemisphere of the spherical vessel.
*   Let $P$ be the internal pressure.
*   Let $t$ be the wall thickness.
*   Let $R$ be the internal radius.
*   Let $\sigma_s$ be the stress in the spherical shell.

The force acting to split the hemisphere is due to the internal pressure acting on the projected circular area of the hemisphere.
Force due to pressure = $P \times (\text{projected area}) = P \times (\pi R^2)$.

This force is resisted by the internal force acting on the cross-sectional area of the hemisphere's rim.
Resisting force = $\sigma_s \times (\text{area of rim cross-section}) = \sigma_s \times (2 \pi R t)$.

Equating the forces:
$P \times \pi R^2 = \sigma_s \times 2 \pi R t$
$\sigma_s = \frac{P \times R}{2 \times t}$

**Important Points:**

*   The stress in a spherical vessel is **uniform in all tangential directions**.
*   The stress in a spherical vessel is **equal to the hoop stress** of a cylinder of the same diameter and pressure, but only when the cylinder's diameter is equal to the sphere's diameter.
*   Compared to a cylindrical vessel of the same diameter, a spherical vessel requires half the wall thickness for the same internal pressure and stress level.

**Example:** A spherical vessel with an internal radius of 500 mm and a wall thickness of 8 mm is subjected to an internal pressure of 2 MPa. Calculate the stress in the spherical shell.

*   $R = 500$ mm
*   $t = 8$ mm
*   $P = 2$ MPa

$\sigma_s = \frac{2 \text{ MPa} \times 500 \text{ mm}}{2 \times 8 \text{ mm}} = \frac{1000}{16} \text{ MPa} = 62.5 \text{ MPa}$

#### 2.4. Stresses in Thick-Walled Cylinders

For thick-walled cylinders, the assumption of uniform stress distribution across the thickness is no longer valid. Stresses vary with the radial distance from the center. Lame's equations are used to determine the radial and circumferential stresses in thick-walled cylinders.

**Key Concepts (Lame's Equations):**

*   **Circumferential Stress ($\sigma_c$) or Tangential Stress:** Varies with radius, maximum at the inner surface.
*   **Radial Stress ($\sigma_r$):** Varies with radius, maximum (negative, i.e., compressive) at the inner surface and zero at the outer surface.

Lame's equations for a thick-walled cylinder under internal pressure ($P_i$) and external pressure ($P_o$):

$\sigma_c = \frac{P_i r_i^2 - P_o r_o^2}{r_o^2 - r_i^2} + \frac{(r_o^2 r_i^2)(P_i - P_o)}{r^2(r_o^2 - r_i^2)}$
$\sigma_r = \frac{P_i r_i^2 - P_o r_o^2}{r_o^2 - r_i^2} - \frac{r_o^2 r_i^2(P_i - P_o)}{r^2(r_o^2 - r_i^2)}$

Where:
*   $r_i$ is the inner radius.
*   $r_o$ is the outer radius.
*   $r$ is the radial distance from the center.

**Important Points:**

*   **Inner Surface:**
    *   $\sigma_c$ is maximum tensile.
    *   $\sigma_r$ is maximum compressive (equal to $-P_i$).
*   **Outer Surface:**
    *   $\sigma_c$ is minimum tensile (or maximum compressive if external pressure is significant).
    *   $\sigma_r$ is zero (if no external pressure) or $-P_o$.
*   The ratio of outer radius to inner radius ($r_o/r_i$) determines how "thick" the wall is and the degree of stress concentration at the inner surface. A ratio greater than approximately 1.5 to 2.0 generally indicates a thick-walled cylinder.

**Reference:** **"Theory and Design of Pressure Vessels" by John F. Harvey** provides detailed derivations and applications of Lame's equations for thick-walled cylinders.

**Example:** A thick-walled cylinder with an inner radius of 50 mm and an outer radius of 100 mm is subjected to an internal pressure of 100 MPa and no external pressure. Calculate the hoop and radial stresses at the inner and outer surfaces.

*   $r_i = 50$ mm
*   $r_o = 100$ mm
*   $P_i = 100$ MPa
*   $P_o = 0$ MPa

**At the inner surface ($r = r_i = 50$ mm):**

$\sigma_c = \frac{100 \times 50^2 - 0 \times 100^2}{100^2 - 50^2} + \frac{(100^2 \times 50^2)(100 - 0)}{50^2(100^2 - 50^2)}$
$\sigma_c = \frac{100 \times 2500}{10000 - 2500} + \frac{250000 \times 2500}{2500 \times 7500} = \frac{250000}{7500} + \frac{625000000}{18750000}$
$\sigma_c = 33.33 + 33.33 = 66.66$ MPa

$\sigma_r = \frac{100 \times 50^2 - 0 \times 100^2}{100^2 - 50^2} - \frac{100^2 \times 50^2(100 - 0)}{50^2(100^2 - 50^2)}$
$\sigma_r = 33.33 - 33.33 = 0$ MPa.  Wait, this is not correct. Let's re-calculate carefully.

Let $A = \frac{P_i r_i^2 - P_o r_o^2}{r_o^2 - r_i^2}$ and $B = \frac{r_o^2 r_i^2(P_i - P_o)}{r_o^2 - r_i^2}$.
$A = \frac{100 \times 50^2 - 0 \times 100^2}{100^2 - 50^2} = \frac{100 \times 2500}{10000 - 2500} = \frac{250000}{7500} = 33.33$
$B = \frac{100^2 \times 50^2(100 - 0)}{100^2 - 50^2} = \frac{10000 \times 2500 \times 100}{7500} = \frac{2500000000}{7500} = 333333.33$

$\sigma_c = A + \frac{B}{r^2}$
$\sigma_r = A - \frac{B}{r^2}$

**At the inner surface ($r = r_i = 50$ mm):**
$\sigma_c = 33.33 + \frac{333333.33}{50^2} = 33.33 + \frac{333333.33}{2500} = 33.33 + 133.33 = 166.66$ MPa
$\sigma_r = 33.33 - \frac{333333.33}{50^2} = 33.33 - 133.33 = -100$ MPa (This is $-P_i$, as expected)

**At the outer surface ($r = r_o = 100$ mm):**
$\sigma_c = 33.33 + \frac{333333.33}{100^2} = 33.33 + \frac{333333.33}{10000} = 33.33 + 33.33 = 66.66$ MPa
$\sigma_r = 33.33 - \frac{333333.33}{100^2} = 33.33 - 33.33 = 0$ MPa (As expected for $P_o = 0$)

**Note:** The hoop stress at the inner surface (166.66 MPa) is significantly higher than at the outer surface (66.66 MPa).

#### 2.5. Stresses due to External Pressure

When a vessel is subjected to external pressure, the stresses are reversed. The vessel tends to collapse inwards.

*   **Hoop Stress:** Becomes compressive.
*   **Longitudinal Stress:** Becomes compressive.

For thin-walled vessels under external pressure, the formulas are similar but the pressure is negative. However, the primary failure mode for thin-walled vessels under external pressure is **buckling**, not yielding due to compressive stress.

For thick-walled vessels under external pressure, Lame's equations are applied with $P_i = 0$ and $P_o$ as a positive value, leading to compressive stresses.

#### 2.6. Stresses due to Other Loads

Besides internal and external pressure, pressure vessels can experience other loads:

*   **Weight of the vessel and its contents:** Induces bending stresses and shear stresses.
*   **Wind loads:** Induces bending and torsional stresses.
*   **Seismic loads:** Induces dynamic forces leading to bending and shear stresses.
*   **Thermal stresses:** Due to temperature gradients or differential expansion/contraction of different parts.
*   **Moment loads on nozzles and attachments:** Can cause localized stress concentrations.

**Reference:** **"Process Equipment Design" by Brownell, L. E., and Young, E. H.** and **"Pressure Vessel Design Manual" by Dennis R. Moss** cover these additional loading conditions and their impact on stress analysis.

---

### 3. Dilation of Pressure Vessels

Dilation refers to the change in dimensions (diameter and length) of a pressure vessel due to the stresses induced by internal pressure. This is essentially a manifestation of the strain experienced by the material.

**Key Concepts:**

*   **Volumetric Strain ($\epsilon_v$):** The change in volume per unit original volume.
*   **Poisson's Ratio ($\nu$):** The ratio of transverse strain to axial strain for a given material under uniaxial stress.

#### 3.1. Dilation of Thin-Walled Cylindrical Vessels

**Circumferential (Hoop) Strain ($\epsilon_h$):**

From Hooke's Law and considering the biaxial stress state (hoop and longitudinal stress):
$\epsilon_h = \frac{1}{E} (\sigma_h - \nu \sigma_l)$

Substituting the expressions for $\sigma_h$ and $\sigma_l$:
$\epsilon_h = \frac{1}{E} \left(\frac{P D}{2t} - \nu \frac{P D}{4t}\right)$
$\epsilon_h = \frac{P D}{4Et} (2 - \nu)$

**Change in Circumference ($\Delta C$):**
$\Delta C = C \times \epsilon_h = (\pi D) \times \frac{P D}{4Et} (2 - \nu) = \frac{\pi P D^2}{4Et} (2 - \nu)$

**Change in Diameter ($\Delta D$):**
Since $\Delta C = \pi \Delta D$,
$\Delta D = \frac{\Delta C}{\pi} = \frac{P D^2}{4Et} (2 - \nu)$

**Longitudinal (Axial) Strain ($\epsilon_l$):**

$\epsilon_l = \frac{1}{E} (\sigma_l - \nu \sigma_h)$

Substituting the expressions for $\sigma_h$ and $\sigma_l$:
$\epsilon_l = \frac{1}{E} \left(\frac{P D}{4t} - \nu \frac{P D}{2t}\right)$
$\epsilon_l = \frac{P D}{4Et} (1 - 2\nu)$

**Change in Length ($\Delta L$):**
$\Delta L = L \times \epsilon_l = L \times \frac{P D}{4Et} (1 - 2\nu)$

**Volumetric Strain ($\epsilon_v$):**

For a cylindrical vessel with radius $R$ and length $L$, the volume $V = \pi R^2 L$.
The volumetric strain is approximately the sum of the strains in the three principal directions. For a thin-walled cylinder:
$\epsilon_v \approx \epsilon_h + \epsilon_h + \epsilon_l$ (since hoop stress and strain occur in two perpendicular tangential directions)
$\epsilon_v = 2 \epsilon_h + \epsilon_l$

Substituting the expressions for $\epsilon_h$ and $\epsilon_l$:
$\epsilon_v = 2 \left(\frac{P D}{4Et} (2 - \nu)\right) + \frac{P D}{4Et} (1 - 2\nu)$
$\epsilon_v = \frac{P D}{4Et} [2(2 - \nu) + (1 - 2\nu)]$
$\epsilon_v = \frac{P D}{4Et} [4 - 2\nu + 1 - 2\nu]$
$\epsilon_v = \frac{P D}{4Et} (5 - 4\nu)$

**Important Points:**

*   The change in diameter is always positive (expansion).
*   The change in length can be positive (expansion) or negative (contraction) depending on the value of Poisson's ratio. If $\nu > 0.5$, the vessel will shorten under internal pressure, which is unusual for most common engineering materials (typical $\nu$ values are 0.25 to 0.35).

**Example:** A thin-walled cylindrical vessel with an internal diameter of 1 meter, length of 2 meters, and wall thickness of 10 mm is made of steel with $E = 200$ GPa and $\nu = 0.3$. If it's subjected to an internal pressure of 5 MPa, calculate the change in diameter and length.

*   $D = 1000$ mm
*   $L = 2000$ mm
*   $t = 10$ mm
*   $E = 200 \times 10^3$ MPa
*   $\nu = 0.3$
*   $P = 5$ MPa

**Change in Diameter ($\Delta D$):**
$\Delta D = \frac{P D^2}{4Et} (2 - \nu) = \frac{5 \text{ MPa} \times (1000 \text{ mm})^2}{4 \times (200 \times 10^3 \text{ MPa}) \times 10 \text{ mm}} (2 - 0.3)$
$\Delta D = \frac{5 \times 10^6}{8 \times 10^6} (1.7) = 0.625 \times 1.7 = 1.0625$ mm

**Change in Length ($\Delta L$):**
$\Delta L = L \times \frac{P D}{4Et} (1 - 2\nu) = 2000 \text{ mm} \times \frac{5 \text{ MPa} \times 1000 \text{ mm}}{4 \times (200 \times 10^3 \text{ MPa}) \times 10 \text{ mm}} (1 - 2 \times 0.3)$
$\Delta L = 2000 \times \frac{5000}{8 \times 10^6} (1 - 0.6)$
$\Delta L = 2000 \times 0.625 \times 10^{-3} \times 0.4 = 2000 \times 0.25 \times 10^{-3} = 0.5$ mm

#### 3.2. Dilation of Thin-Walled Spherical Vessels

In a spherical vessel, the stress is uniform in all tangential directions ($\sigma_s$).
$\sigma_s = \frac{P R}{2t}$

The strain in any tangential direction is:
$\epsilon_{tangential} = \frac{1}{E}(\sigma_s - \nu \sigma_s)$ (since stress in the perpendicular tangential direction is also $\sigma_s$)
$\epsilon_{tangential} = \frac{\sigma_s}{E}(1 - \nu) = \frac{P R}{2Et}(1 - \nu)$

**Change in Radius ($\Delta R$):**
$\Delta R = R \times \epsilon_{tangential} = R \times \frac{P R}{2Et}(1 - \nu) = \frac{P R^2}{2Et}(1 - \nu)$

**Change in Diameter ($\Delta D$):**
$\Delta D = 2 \times \Delta R = \frac{P R^2}{Et}(1 - \nu)$
Since $R = D/2$:
$\Delta D = \frac{P (D/2)^2}{Et}(1 - \nu) = \frac{P D^2}{4Et}(1 - \nu)$

**Volumetric Strain ($\epsilon_v$):**

For a sphere with radius $R$, $V = \frac{4}{3}\pi R^3$.
$\epsilon_v = 3 \times \epsilon_{tangential}$ (since strain is same in all three directions)
$\epsilon_v = 3 \times \frac{P R}{2Et}(1 - \nu) = \frac{3 P R}{2Et}(1 - \nu)$

**Important Points:**

*   A spherical vessel expands uniformly in all directions.
*   For the same internal pressure and material, a spherical vessel with a diameter equal to the cylinder's diameter will experience less radial expansion than the cylinder's change in diameter. However, the hoop strain in the cylinder is higher ($ \frac{PD}{4Et}(2-\nu)$ vs $\frac{PR}{2Et}(1-\nu)$ which is $\frac{PD}{4Et}(1-\nu)$).

**Comparison of Dilation (Cylinder vs. Sphere, same $P$, $t$, $D=D_{sphere}$):**

*   **Cylinder Diameter Change:** $\Delta D_{cyl} = \frac{P D^2}{4Et} (2 - \nu)$
*   **Sphere Diameter Change:** $\Delta D_{sph} = \frac{P D^2}{4Et} (1 - \nu)$

Since $(2-\nu) > (1-\nu)$ for typical values of $\nu$, the cylindrical vessel will expand more in diameter than a spherical vessel of the same diameter.

#### 3.3. Dilation of Thick-Walled Cylinders

The dilation (change in radius) of thick-walled cylinders can be calculated by integrating the radial strain from the inner to the outer radius.

The radial strain at a radius $r$ is given by $\epsilon_r(r)$.
$\Delta R = \int_{r_i}^{r_o} \epsilon_r(r) dr$

Using Lame's equations for $\sigma_r$ and $\sigma_c$:
$\epsilon_r(r) = \frac{1}{E} (\sigma_r - \nu \sigma_c)$

Substituting the expressions for $\sigma_r$ and $\sigma_c$ from Lame's equations and integrating will yield the change in radius at the inner and outer surfaces. This calculation is more complex and is detailed in advanced texts.

**Reference:** **"Pressure vessel design handbook" by Eugene F megyesy** likely contains detailed calculations for dilation in thick-walled vessels.

---

### 4. Material Properties and Stresses

The choice of material is critical in pressure vessel design. Key material properties relevant to stress and dilation include:

*   **Yield Strength ($S_y$):** The stress at which the material begins to deform plastically.
*   **Tensile Strength ($S_u$):** The maximum stress the material can withstand before fracturing.
*   **Young's Modulus ($E$):** Relates stress and elastic strain.
*   **Poisson's Ratio ($\nu$):** Relates transverse and axial strain.
*   **Thermal Expansion Coefficient ($\alpha$):** Relates temperature change to strain.

**Design Considerations:**

*   The calculated stresses must be less than the allowable stress for the material, which is typically a fraction of the yield or tensile strength (often incorporating a safety factor).
*   Thermal expansion must be accounted for, especially in systems with significant temperature variations, to prevent thermal stresses and deformation.

---

### 5. Course Outcome Alignment

This topic directly supports the following course outcomes:

*   **CO1: Explain the design considerations of various shell type pressure vessels (Knowledge Level: K2)**
    *   Understanding hoop and longitudinal stresses in thin-walled cylinders and stresses in spherical vessels are foundational to their design.
*   **CO2: Explain the design considerations of thick cylinders under various kind of loadings (Knowledge Level: K2)**
    *   The introduction to Lame's equations for thick cylinders directly addresses this outcome.

---

### 6. Practice Questions and Exercises

**Question 1:**
A thin-walled cylindrical pressure vessel has an internal diameter of 1.5 m and a wall thickness of 12 mm. It is designed to operate at an internal pressure of 2.5 MPa. Calculate the hoop stress and longitudinal stress in the vessel wall. If the vessel is made of steel with $E = 210$ GPa and $\nu = 0.3$, what is the expected increase in its diameter?

**Answer 1:**
*   $D = 1500$ mm, $t = 12$ mm, $P = 2.5$ MPa
*   Hoop Stress ($\sigma_h$):
    $\sigma_h = \frac{P D}{2t} = \frac{2.5 \text{ MPa} \times 1500 \text{ mm}}{2 \times 12 \text{ mm}} = \frac{3750}{24} = 156.25 \text{ MPa}$
*   Longitudinal Stress ($\sigma_l$):
    $\sigma_l = \frac{P D}{4t} = \frac{2.5 \text{ MPa} \times 1500 \text{ mm}}{4 \times 12 \text{ mm}} = \frac{3750}{48} = 78.125 \text{ MPa}$
*   Increase in Diameter ($\Delta D$):
    $\Delta D = \frac{P D^2}{4Et} (2 - \nu) = \frac{2.5 \text{ MPa} \times (1500 \text{ mm})^2}{4 \times (210 \times 10^3 \text{ MPa}) \times 12 \text{ mm}} (2 - 0.3)$
    $\Delta D = \frac{2.5 \times 2.25 \times 10^6}{10.08 \times 10^6} (1.7) = 0.558 (1.7) \approx 0.949$ mm

**Question 2:**
A spherical pressure vessel has an internal radius of 0.8 m and a wall thickness of 15 mm. It is subjected to an internal pressure of 3 MPa. Calculate the stress in the spherical shell. If the vessel expands by 1 mm in diameter, what is the effective Young's modulus of the material?

**Answer 2:**
*   $R = 800$ mm, $t = 15$ mm, $P = 3$ MPa
*   Stress in Spherical Shell ($\sigma_s$):
    $\sigma_s = \frac{P R}{2t} = \frac{3 \text{ MPa} \times 800 \text{ mm}}{2 \times 15 \text{ mm}} = \frac{2400}{30} = 80 \text{ MPa}$
*   Effective Young's Modulus ($E$):
    We know $\Delta D = \frac{P D^2}{4Et} (1 - \nu)$. Assuming a typical $\nu = 0.3$, we have:
    $\Delta D = \frac{P D^2}{4Et} (1 - 0.3) = \frac{0.7 P D^2}{4Et}$
    $1 \text{ mm} = \frac{0.7 \times 3 \text{ MPa} \times (1600 \text{ mm})^2}{4 \times E \times 15 \text{ mm}}$
    $1 = \frac{0.7 \times 3 \times 2.56 \times 10^6}{60 E}$
    $60 E = 5.376 \times 10^6$
    $E = \frac{5.376 \times 10^6}{60} \approx 89600 \text{ MPa} = 89.6 \text{ GPa}$
    *Note: This would be a very low Young's modulus for common pressure vessel materials. This indicates either a typo in the problem statement or a need to use a different approach if $\nu$ is not known. If we assume $\nu$ is unknown and try to find $E$ directly from the stress-strain relationship:*
    $\epsilon_{tangential} = \frac{\Delta D}{D} = \frac{1 \text{ mm}}{1600 \text{ mm}} = 0.000625$
    $\sigma_s = E \times \epsilon_{tangential}$
    $80 \text{ MPa} = E \times 0.000625$
    $E = \frac{80}{0.000625} = 128000 \text{ MPa} = 128 \text{ GPa}$. This is a more reasonable, though still low, value for some alloys.

**Question 3:**
A thick-walled cylinder has an internal radius of 40 mm and an outer radius of 80 mm. It is subjected to an internal pressure of 150 MPa and an external pressure of 10 MPa. Calculate the hoop stress and radial stress at the inner surface.

**Answer 3:**
*   $r_i = 40$ mm, $r_o = 80$ mm, $P_i = 150$ MPa, $P_o = 10$ MPa
*   Let $A = \frac{P_i r_i^2 - P_o r_o^2}{r_o^2 - r_i^2}$ and $B = \frac{r_o^2 r_i^2(P_i - P_o)}{r_o^2 - r_i^2}$.
    $A = \frac{150 \times 40^2 - 10 \times 80^2}{80^2 - 40^2} = \frac{150 \times 1600 - 10 \times 6400}{6400 - 1600} = \frac{240000 - 64000}{4800} = \frac{176000}{4800} = 36.67$
    $B = \frac{80^2 \times 40^2 (150 - 10)}{80^2 - 40^2} = \frac{6400 \times 1600 \times 140}{4800} = \frac{1433600000}{4800} = 298666.67$
*   **At the inner surface ($r = r_i = 40$ mm):**
    $\sigma_c = A + \frac{B}{r_i^2} = 36.67 + \frac{298666.67}{40^2} = 36.67 + \frac{298666.67}{1600} = 36.67 + 186.67 = 223.34$ MPa
    $\sigma_r = A - \frac{B}{r_i^2} = 36.67 - \frac{298666.67}{40^2} = 36.67 - 186.67 = -150$ MPa (This is $-P_i$, as expected)

---

### 7. Important Points to Remember

*   **Hoop stress is generally the highest stress** in thin-walled cylindrical vessels.
*   **Longitudinal stress is half the hoop stress** in thin-walled cylindrical vessels.
*   **Spherical vessels have uniform stress** in all tangential directions, equal to the hoop stress of a cylinder of the same diameter.
*   For **thick-walled cylinders**, stresses vary with radius, with the highest hoop stress occurring at the inner surface.
*   **Dilation** is the dimensional change due to stress and is governed by the material's Young's modulus and Poisson's ratio.
*   The **failure mode for thin-walled vessels under external pressure is buckling**, not compressive yielding.
*   Always use appropriate units and be consistent.
*   Ensure safety factors are applied when comparing calculated stresses to material allowable stresses.

---

This concludes the study notes for "Stresses in Pressure Vessels – Dilation of Pressure Vessels." The concepts covered here are fundamental for proceeding to more advanced topics in pressure vessel and piping design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
