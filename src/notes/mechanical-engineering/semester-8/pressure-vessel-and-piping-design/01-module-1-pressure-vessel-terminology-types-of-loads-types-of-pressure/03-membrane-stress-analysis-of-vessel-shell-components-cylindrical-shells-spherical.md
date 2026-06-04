---
title: "Membrane stress analysis of vessel shell components- cylindrical shells, spherical shells, torus, conical head, elliptical head, (Familiarisation of corresponding ASME section 8 codes for membrane stress equations))"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 1: Pressure vessel – Terminology – Types of loads – Types of pressure"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044643fb"
status: "completed"
scrapedAt: "2026-05-20T18:23:31.601Z"
---
# Pressure Vessel and Piping Design - Module 1: Membrane Stress Analysis of Vessel Shell Components

This module introduces the fundamental concepts of membrane stress analysis in pressure vessels, focusing on common shell geometries. We will explore how internal pressure generates stresses within these components and how these stresses are calculated. We will also familiarize ourselves with the relevant equations from ASME Section VIII codes.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Explain the design considerations of various shell type pressure vessels. (This module directly addresses the fundamental stress analysis for common shell types, a core design consideration.)
*   **CO2 (K2):** Explain the design considerations of thick cylinders under various kinds of loadings. (While this module primarily focuses on thin shells, the principles of stress distribution are foundational for understanding thick cylinder behavior. ASME Section VIII codes often have separate rules for thick shells, but the understanding of membrane stress is a prerequisite.)

---

## 1. Introduction to Membrane Stress Analysis

### 1.1 What is Membrane Stress?

*   **Definition:** Membrane stress refers to the uniformly distributed tensile stress acting within the plane of the shell's surface. It is assumed that the stress is uniform across the thickness of the shell and that there are no bending stresses.
*   **Assumptions:**
    *   The shell is thin relative to its radius of curvature. This means the ratio of thickness ($t$) to radius ($R$) is small (typically $R/t > 10$).
    *   The stresses are purely in-plane (tangential and longitudinal).
    *   No shear stresses exist on the surface.
    *   The stress is uniformly distributed across the thickness.
*   **Importance:** Membrane stresses are the primary stresses resisting the internal pressure in thin-walled pressure vessels. Accurately calculating these stresses is crucial for preventing yielding or rupture of the vessel.

### 1.2 Key Concepts and Terminology

*   **Pressure Vessel:** A closed container designed to hold fluids (liquids or gases) at a pressure substantially different from the ambient atmospheric pressure.
*   **Internal Pressure ($P$):** The pressure of the fluid contained within the vessel.
*   **External Pressure:** Pressure applied to the outer surface of the vessel. This module primarily focuses on internal pressure.
*   **Stress ($\sigma$):** Force per unit area acting within the material.
*   **Hoop Stress (Circumferential Stress, $\sigma_h$):** Tensile stress acting around the circumference of a cylindrical or spherical shell.
*   **Longitudinal Stress (Axial Stress, $\sigma_l$):** Tensile stress acting along the axis of a cylindrical shell.
*   **Meridional Stress ($\sigma_m$):** Tensile stress acting along a line of longitude in a spherical or heads.
*   **Thickness ($t$):** The wall thickness of the vessel shell.
*   **Radius ($R$):** The internal radius of the shell component.
*   **Diameter ($D$):** The internal diameter of the shell component ($D = 2R$).
*   **Mean Radius ($R_m$):** The average of the internal and external radii ($R_m = R + t/2$). ASME codes sometimes use mean radius in their formulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 1.3 Sources of Textbooks and References

*   **Theory and Design of Pressure Vessels by John F. Harvey:** Provides a strong theoretical foundation for stress analysis in pressure vessels.
*   **Process Equipment Design by Brownell, L. E., and Young, E. H.:** Offers practical applications and design considerations for process equipment, including pressure vessels.
*   **Pressure Vessels Design and practice by Somnath Chathopadhyay:** A comprehensive guide covering design, fabrication, and inspection.
*   **Pressure vessel design handbook by Eugene F megyesy:** A detailed handbook with equations and design procedures.
*   **Pressure Vessel Design Manual by Dennis R. Moss:** A valuable reference for practical design aspects and ASME code interpretations.

---

## 2. Membrane Stress Analysis of Cylindrical Shells

Cylindrical shells are the most common shape for pressure vessel shells. They are subjected to internal pressure, which creates hoop and longitudinal stresses.

### 2.1 Hoop Stress ($\sigma_h$)

*   **Derivation (Simplified):** Consider a longitudinal section through a cylinder of radius $R$ and wall thickness $t$, subjected to an internal pressure $P$. If we cut the cylinder in half, the force due to internal pressure acting on the cross-sectional area is $P \times (2R \times L)$, where $L$ is the length. This force must be resisted by the tensile stress acting on the inner surface of the two halves, which is $2 \times (\sigma_h \times t \times L)$.
    *   Force due to pressure = $P \times D \times L$
    *   Resisting force = $2 \times \sigma_h \times t \times L$
    *   Equating forces: $P \times D \times L = 2 \times \sigma_h \times t \times L$
    *   $\sigma_h = \frac{P D}{2 t}$
*   **Formula (using Radius):**
    $\sigma_h = \frac{P R}{t}$
*   **Nature:** This stress is tensile and acts tangentially to the circumference. It is twice the longitudinal stress.

### 2.2 Longitudinal Stress ($\sigma_l$)

*   **Derivation (Simplified):** Consider a transverse section through a cylinder of radius $R$ and wall thickness $t$, subjected to an internal pressure $P$. The force due to internal pressure acting on the end cap of the cylinder is $P \times (\pi R^2)$. This force must be resisted by the tensile stress acting on the cross-sectional area of the shell wall, which is $\sigma_l \times (2 \pi R \times t)$.
    *   Force due to pressure = $P \times \pi R^2$
    *   Resisting force = $\sigma_l \times 2 \pi R t$
    *   Equating forces: $P \times \pi R^2 = \sigma_l \times 2 \pi R t$
    *   $\sigma_l = \frac{P R}{2 t}$
*   **Formula:**
    $\sigma_l = \frac{P D}{4 t}$
*   **Nature:** This stress is tensile and acts along the axis of the cylinder.

### 2.3 Relationship between Hoop and Longitudinal Stress

*   $\sigma_h = 2 \sigma_l$
*   This means hoop stress is the critical stress in a thin cylindrical shell under internal pressure.

### 2.4 ASME Section VIII Division 1 - Thin-Walled Cylinders

*   **UG-27(c)(1) - Cylindrical Shells under Internal Pressure:**
    *   **Circumferential Stress:** The required thickness ($t$) for a cylindrical shell under internal pressure is determined by:
        $t = \frac{PR}{SE - 0.6P}$ (for operating temperature)
        Where:
        *   $P$ = Internal design pressure (psi)
        *   $R$ = Inside radius of the shell (inches)
        *   $S$ = Maximum allowable stress for the material at the design temperature (psi)
        *   $E$ = Joint efficiency (usually 1.0 for seamless shells, less for welded joints)
    *   **Longitudinal Stress:** The required thickness ($t$) for a cylindrical shell under internal pressure based on longitudinal stress is:
        $t = \frac{PD}{4SE + 0.4P}$ (for operating temperature)
        *   $D$ = Inside diameter of the shell (inches)
    *   **Design Note:** The larger of the two calculated thicknesses (based on hoop and longitudinal stress) must be used for design. For thin-walled cylinders, the hoop stress governs.

### 2.5 Example

A cylindrical pressure vessel has an internal diameter of 1000 mm and a wall thickness of 10 mm. It is designed for an internal pressure of 1.0 MPa. The material has an allowable stress of 150 MPa, and it is a seamless shell ($E=1.0$). Calculate the hoop and longitudinal stresses.

*   **Given:**
    *   $D = 1000$ mm
    *   $R = 500$ mm
    *   $t = 10$ mm
    *   $P = 1.0$ MPa
    *   $S = 150$ MPa
    *   $E = 1.0$

*   **Calculations:**
    *   Hoop Stress:
        $\sigma_h = \frac{P R}{t} = \frac{(1.0 \, \text{MPa})(500 \, \text{mm})}{10 \, \text{mm}} = 50 \, \text{MPa}$
    *   Longitudinal Stress:
        $\sigma_l = \frac{P R}{2 t} = \frac{(1.0 \, \text{MPa})(500 \, \text{mm})}{2 \times 10 \, \text{mm}} = 25 \, \text{MPa}$

*   **ASME Section VIII Calculation for Thickness:**
    *   Based on Hoop Stress:
        $t = \frac{PR}{SE - 0.6P} = \frac{(1.0 \, \text{MPa})(500 \, \text{mm})}{(150 \, \text{MPa})(1.0) - 0.6(1.0 \, \text{MPa})} = \frac{500}{150 - 0.6} = \frac{500}{149.4} \approx 3.35 \, \text{mm}$
    *   Based on Longitudinal Stress:
        $t = \frac{PD}{4SE + 0.4P} = \frac{(1.0 \, \text{MPa})(1000 \, \text{mm})}{4(150 \, \text{MPa})(1.0) + 0.4(1.0 \, \text{MPa})} = \frac{1000}{600 + 0.4} = \frac{1000}{600.4} \approx 1.67 \, \text{mm}$

    *   The required minimum thickness to safely withstand the pressure based on the given material properties and seamless construction would be approximately 3.35 mm. The vessel's actual thickness of 10 mm provides a significant safety margin.

---

## 3. Membrane Stress Analysis of Spherical Shells

Spherical shells are stronger than cylindrical shells for the same internal pressure and thickness because the stress is distributed uniformly in all directions.

### 3.1 Stress in a Spherical Shell ($\sigma_{sphere}$)

*   **Derivation (Simplified):** Consider a hemisphere of radius $R$ and wall thickness $t$, subjected to an internal pressure $P$. If we cut the hemisphere, the force due to internal pressure acting on the projected area of the opening is $P \times (\pi R^2)$. This force must be resisted by the tensile stress acting on the cross-sectional area of the shell wall, which is $\sigma_{sphere} \times (2 \pi R \times t)$.
    *   Force due to pressure = $P \times \pi R^2$
    *   Resisting force = $\sigma_{sphere} \times 2 \pi R t$
    *   Equating forces: $P \times \pi R^2 = \sigma_{sphere} \times 2 \pi R t$
    *   $\sigma_{sphere} = \frac{P R}{2 t}$
*   **Formula:**
    $\sigma_{sphere} = \frac{P R}{2 t}$
*   **Nature:** This stress is tensile and acts tangentially in all directions (meridional and circumferential). It is equivalent to the longitudinal stress in a cylinder.

### 3.2 ASME Section VIII Division 1 - Spherical Shells

*   **UG-27(c)(2) - Spherical Shells under Internal Pressure:**
    *   The required thickness ($t$) for a spherical shell under internal pressure is determined by:
        $t = \frac{PR}{2SE - 0.2P}$ (for operating temperature)
        Where:
        *   $P$ = Internal design pressure (psi)
        *   $R$ = Inside radius of the spherical shell (inches)
        *   $S$ = Maximum allowable stress for the material at the design temperature (psi)
        *   $E$ = Joint efficiency (usually 1.0 for seamless shells, less for welded joints)

### 3.3 Example

A spherical pressure vessel has an internal radius of 500 mm and is designed for an internal pressure of 2.0 MPa. The material has an allowable stress of 120 MPa, and it is a seamless shell ($E=1.0$). Calculate the required minimum thickness.

*   **Given:**
    *   $R = 500$ mm
    *   $P = 2.0$ MPa
    *   $S = 120$ MPa
    *   $E = 1.0$

*   **Calculation (ASME Section VIII):**
    *   $t = \frac{PR}{2SE - 0.2P} = \frac{(2.0 \, \text{MPa})(500 \, \text{mm})}{2(120 \, \text{MPa})(1.0) - 0.2(2.0 \, \text{MPa})} = \frac{1000}{240 - 0.4} = \frac{1000}{239.6} \approx 4.17 \, \text{mm}$

*   **Note:** A spherical shell requires less thickness than a cylindrical shell for the same pressure and radius.

---

## 4. Membrane Stress Analysis of Torispherical Heads

Torispherical heads are commonly used closures for cylindrical vessels. They consist of a spherical crown, a toroidal knuckle, and a cylindrical shell connection. The knuckle region is the most critical due to the change in curvature.

### 4.1 Components of a Torispherical Head

*   **Crown Radius ($R_c$):** The radius of the spherical cap forming the main part of the head. Typically, $R_c$ is equal to the inside radius of the cylindrical shell.
*   **Knuckle Radius ($r_k$):** The radius of the toroidal section connecting the crown to the cylindrical shell. It is typically between 0.06D and 0.2D, where D is the diameter of the cylinder. A smaller knuckle radius leads to higher stresses.
*   **Inside Diameter ($D$):** The inside diameter of the cylindrical shell to which the head is attached.

### 4.2 Membrane Stresses in Torispherical Heads

The stress analysis for torispherical heads is more complex than for cylinders or spheres due to the changing curvature and the presence of the knuckle.

*   **Crown Region:** The stress in the crown, when its radius is equal to the cylinder diameter ($R_c = R$), is approximately:
    $\sigma_{crown} \approx \frac{PD}{2t}$ (similar to hoop stress in cylinder)
*   **Knuckle Region:** The stresses in the knuckle are significantly higher than in the crown due to the combination of stretching and bending effects arising from the change in curvature. The analysis here often involves more advanced methods like finite element analysis (FEA) or is simplified using empirical factors.

### 4.3 ASME Section VIII Division 1 - Torispherical Heads

*   **UG-32 - Formed Heads:** This section provides formulas for various types of formed heads, including torispherical heads.
    *   **For the Crown (where $R_c$ is the radius of spherical crown):**
        $t = \frac{PD}{2SE - 0.2P}$
        (Note: This formula is similar to that for a full sphere, assuming $R_c$ is the radius used.)
    *   **For the Knuckle (where $r_k$ is the knuckle radius):**
        The required thickness ($t$) for the knuckle is generally higher and is given by:
        $t = \frac{PD}{2SE - 0.2P} \times K$
        Where $K$ is a factor that depends on the ratio $r_k / D$ and $R_c / D$. The ASME code provides charts and tables for determining the $K$ factor, which accounts for the stress concentration in the knuckle.
        *   **Key Relationship:** The knuckle region is the limiting factor for torispherical head design. The required thickness is often governed by the knuckle stress.
        *   **General Guideline:** The required thickness for the knuckle is approximately 1.5 to 2 times the thickness required for the crown, depending on the knuckle radius.

### 4.4 Example (Conceptual)

Consider a torispherical head with an internal diameter of 1000 mm, a crown radius ($R_c$) of 1000 mm, and a knuckle radius ($r_k$) of 100 mm. The design pressure is 1.5 MPa, and the allowable stress is 120 MPa with $E=1.0$.

*   **To calculate the required thickness:**
    1.  Calculate the thickness required for the crown using the spherical shell formula.
    2.  Determine the $K$ factor from ASME Section VIII tables based on $r_k/D = 100/1000 = 0.1$ and $R_c/D = 1000/1000 = 1.0$.
    3.  Calculate the thickness required for the knuckle using the formula incorporating the $K$ factor.
    4.  The greater of the two thicknesses is the minimum required thickness for the torispherical head.

*   **Important Note:** For detailed calculations, refer to ASME Section VIII Division 1, UG-32. The specific values of $K$ are found in the code's figures.

---

## 5. Membrane Stress Analysis of Elliptical Heads

Elliptical heads (specifically, 2:1 ellipsoidal heads) are a common type of formed head where the depth of the head is half of its major axis. They offer a smoother stress distribution than torispherical heads.

### 5.1 Components of an Elliptical Head (2:1 Ellipsoidal)

*   **Major Axis ($A$):** The diameter of the cylindrical shell to which the head is attached ($A = D$).
*   **Minor Axis ($B$):** The depth of the head, which is half of the major axis ($B = A/2 = D/2$).
*   **Inside Diameter ($D$):** The inside diameter of the cylindrical shell.

### 5.2 Membrane Stresses in Elliptical Heads

The stress distribution in an ellipsoidal head is not uniform, and the maximum stress occurs at the junction of the head and the cylinder (the knuckle region).

*   **Maximum Stress ($\sigma_{max}$):** The maximum membrane stress in a 2:1 ellipsoidal head under internal pressure is approximately:
    $\sigma_{max} \approx \frac{PD}{2t} \times (2/\pi)$ (This is a simplified approximation, actual values depend on complex analysis)

### 5.3 ASME Section VIII Division 1 - Elliptical Heads

*   **UG-32 - Formed Heads:**
    *   **For 2:1 Ellipsoidal Heads:**
        $t = \frac{PD}{2SE - 0.2P}$
        Where:
        *   $P$ = Internal design pressure (psi)
        *   $D$ = Inside diameter of the head (inches)
        *   $S$ = Maximum allowable stress for the material at the design temperature (psi)
        *   $E$ = Joint efficiency (usually 1.0 for seamless heads)
    *   **Key Observation:** For a 2:1 ellipsoidal head, the ASME code formula for required thickness is the same as that for a full sphere. This implies that the stress distribution is more uniform and generally lower than in the critical knuckle region of a torispherical head.

### 5.4 Example

A 2:1 ellipsoidal head with an inside diameter of 1200 mm is used for a pressure vessel. The design pressure is 1.2 MPa, and the material has an allowable stress of 130 MPa with $E=1.0$. Calculate the required minimum thickness.

*   **Given:**
    *   $D = 1200$ mm
    *   $P = 1.2$ MPa
    *   $S = 130$ MPa
    *   $E = 0.9$ (Assume a welded head for a more realistic scenario)

*   **Calculation (ASME Section VIII):**
    *   $t = \frac{PD}{2SE - 0.2P} = \frac{(1.2 \, \text{MPa})(1200 \, \text{mm})}{2(130 \, \text{MPa})(0.9) - 0.2(1.2 \, \text{MPa})} = \frac{1440}{234 - 0.24} = \frac{1440}{233.76} \approx 6.16 \, \text{mm}$

---

## 6. Membrane Stress Analysis of Conical Heads

Conical heads are used as closures for pressure vessels. They are typically formed by tapering the cylindrical shell.

### 6.1 Components of a Conical Head

*   **Conical Angle ($\alpha$):** The angle between the axis of the cone and its slant height. A common angle is $30^\circ$ (vertex angle of $60^\circ$).
*   **Diameter ($D$):** The diameter of the cylindrical shell.
*   **Wall Thickness ($t$):** The thickness of the conical shell.

### 6.2 Membrane Stresses in Conical Heads

The membrane stresses in a conical head under internal pressure are not uniform. They vary along the slant height.

*   **Circumferential Stress ($\sigma_\theta$):** This stress acts tangentially to the circumference at any point along the cone.
    $\sigma_\theta = \frac{PD}{2t \sin \phi}$
    Where:
    *   $P$ = Internal design pressure
    *   $D$ = Diameter at that point of the cone
    *   $t$ = Wall thickness
    *   $\phi$ = Angle between the cone's slant height and the axis of the cone (half apex angle, complementary to the angle used in some texts). If $\alpha$ is the angle from the axis to the slant height, then $\phi = \alpha$.
*   **Meridional Stress ($\sigma_m$):** This stress acts along the slant height of the cone.
    $\sigma_m = \frac{PD}{2t \tan \phi}$
*   **Critical Stress:** The circumferential stress is typically higher and governs the design of conical sections. The stress increases as $\phi$ decreases (i.e., as the cone becomes more pointed).

### 6.3 ASME Section VIII Division 1 - Conical Heads

*   **UG-39 - Conical Heads:** This section provides formulas for conical heads.
    *   **Required Thickness ($t$) for Conical Sections (when the angle is $\alpha$ from the axis, and $\theta$ is the angle from the perpendicular to the axis):**
        $t = \frac{PD}{2S E \cos \theta}$ (This formulation uses $\theta$ as the angle to the perpendicular, so for a cone with half apex angle $\alpha$, $\theta = 90^\circ - \alpha$, and $\cos\theta = \sin\alpha$).
        *   $P$ = Internal design pressure
        *   $D$ = Diameter at the large end of the cone (inches)
        *   $S$ = Maximum allowable stress
        *   $E$ = Joint efficiency
    *   **Important Note:** The above formula is for a flat cone. For a tapered section, where the diameter changes, the stress is proportional to the diameter. For a conical head, the thickness is often determined based on the stress at the large end.

### 6.4 Example

A conical head with a large end diameter of 800 mm and a cone angle of $30^\circ$ (half apex angle) is designed for an internal pressure of 0.5 MPa. The material has an allowable stress of 100 MPa and $E=1.0$. Calculate the required minimum thickness at the large end.

*   **Given:**
    *   $D = 800$ mm
    *   $\alpha = 30^\circ$ (half apex angle)
    *   $P = 0.5$ MPa
    *   $S = 100$ MPa
    *   $E = 1.0$

*   **Calculation (ASME Section VIII):**
    *   Using the formula $t = \frac{PD}{2S E \sin \alpha}$ (where $\alpha$ is the half apex angle):
        $t = \frac{(0.5 \, \text{MPa})(800 \, \text{mm})}{2(100 \, \text{MPa})(1.0) \sin(30^\circ)} = \frac{400}{200 \times 0.5} = \frac{400}{100} = 4 \, \text{mm}$

*   **Note:** The stress in the conical section increases as the diameter decreases if the thickness is uniform. Therefore, a constant thickness cone is typically designed based on the stresses at the large diameter.

---

## 7. Familiarization of Corresponding ASME Section VIII Codes for Membrane Stress Equations

The primary reference for pressure vessel design in the United States and widely adopted internationally is the **ASME Boiler and Pressure Vessel Code (BPVC), Section VIII, Division 1**. This section provides rules for the construction of pressure vessels.

### 7.1 Key Sections in ASME Section VIII Division 1

*   **UG-20:** General Requirements
*   **UG-27:** General Stress Calculations (for Cylindrical and Spherical shells)
*   **UG-28:** Basis for Thickness Calculations (includes various factors like joint efficiency, temperature derating)
*   **UG-32:** Formed Heads (covers ellipsoidal, torispherical, hemispherical, and conical heads)
*   **UG-39:** Conical Heads
*   **UW:** Requirements for Welded Construction
*   **Appendix 1:** Material specifications and allowable stresses.

### 7.2 ASME Equations and their Context

*   **Basic Stress Equation for Thin Cylindrical Shells (Hoop Stress):**
    $\sigma_h = \frac{PR}{t}$
    **ASME Formula for Thickness:** $t = \frac{PR}{SE - 0.6P}$
    *   **Purpose:** This equation ensures that the hoop stress in the cylindrical shell does not exceed the allowable stress of the material at the design temperature, considering material properties and weld joint quality.

*   **Basic Stress Equation for Thin Spherical Shells:**
    $\sigma_{sphere} = \frac{PR}{2t}$
    **ASME Formula for Thickness:** $t = \frac{PR}{2SE - 0.2P}$
    *   **Purpose:** Similar to cylindrical shells, this ensures the uniform stress in a spherical shell is within limits.

*   **Formed Heads (General Principle):** ASME Section VIII provides specific formulas for different head geometries. The general approach is to calculate the maximum membrane stress in the critical region of the head and then determine the required thickness to keep this stress within allowable limits, using material properties and joint efficiency.
    *   **Torispherical Heads:** The knuckle region requires special attention, and a factor $K$ (found in code tables/charts) is used to increase the effective stress or required thickness.
    *   **Ellipsoidal Heads (2:1):** The code uses formulas that are similar to spherical heads, reflecting their better stress distribution compared to torispherical heads.
    *   **Conical Heads:** The formulas account for the angle of the cone, as stress varies with the cone's geometry.

### 7.3 Important Considerations when using ASME Codes:

*   **Design Temperature:** Allowable stresses ($S$) are highly dependent on the material and the design temperature. They are typically obtained from tables in Appendix 1 of ASME Section VIII, Division 1.
*   **Joint Efficiency ($E$):** This factor accounts for the reduction in strength due to welding and the quality of the weld (e.g., radiography, visual inspection). Seamless construction has $E=1.0$.
*   **Corrosion Allowance:** Often, an additional thickness is added to the calculated minimum required thickness to account for potential corrosion over the vessel's lifetime. This is not part of the membrane stress calculation itself but a design addition.
*   **External Pressure:** The code also provides methods for calculating stresses and required thicknesses for vessels subjected to external pressure.
*   **Thick-Walled Vessels:** For situations where the ratio of radius to thickness is small ($R/t < 10$), the membrane stress assumption breaks down, and more complex analysis considering radial stress and bending stress is required. ASME Section VIII, Division 1 has specific rules for "Category A" and "Category B" joints, and often references different equations or methods for thicker sections.

---

## 8. Practice Questions and Exercises

**Instructions:** Solve the following problems, showing your steps. Assume standard atmospheric pressure for any external pressure considerations unless otherwise stated.

**Question 1 (Cylindrical Shell):**
A seamless cylindrical pressure vessel with an inside diameter of 600 mm and a wall thickness of 5 mm is subjected to an internal pressure of 1.5 MPa. The allowable stress for the material at the design temperature is 120 MPa.
a) Calculate the hoop stress and longitudinal stress in the vessel shell.
b) Determine the minimum required thickness for this vessel based on ASME Section VIII Division 1 using hoop stress.
c) Is the given thickness sufficient?

**Question 2 (Spherical Shell):**
A spherical pressure vessel has an internal radius of 400 mm and is designed for an internal pressure of 3.0 MPa. The material has an allowable stress of 150 MPa, and it is a seamless shell ($E=1.0$).
a) Calculate the membrane stress in the spherical shell.
b) Determine the minimum required thickness for this vessel based on ASME Section VIII Division 1.

**Question 3 (Torispherical Head):**
A torispherical head has an inside diameter of 1000 mm, a crown radius equal to the shell diameter (1000 mm), and a knuckle radius of 150 mm. The design pressure is 1.0 MPa, and the allowable stress is 130 MPa. Assume $E=1.0$.
a) What is the approximate stress in the crown region?
b) To properly design the knuckle, you would need to refer to ASME Section VIII, Division 1, UG-32 for the appropriate knuckle factor. Without the actual table, explain how the knuckle thickness would be calculated relative to the crown thickness.
c) If the required crown thickness is calculated to be 3.0 mm, and the knuckle factor $K$ is 1.8, what would be the required knuckle thickness?

**Question 4 (Ellipsoidal Head):**
A 2:1 ellipsoidal head with an inside diameter of 800 mm is used for a pressure vessel. The design pressure is 2.0 MPa. The material has an allowable stress of 100 MPa, and it's a welded head with an efficiency of $E=0.85$.
a) Calculate the minimum required thickness for this ellipsoidal head using ASME Section VIII Division 1.

**Question 5 (Conical Head):**
A conical section has a large end diameter of 1200 mm and a cone angle (half apex angle) of $45^\circ$. It is designed for an internal pressure of 0.8 MPa. The material has an allowable stress of 110 MPa, and it's a seamless cone ($E=1.0$).
a) Calculate the required minimum thickness for the conical section at the large end.
b) What is the circumferential stress at the large end diameter?

---

## 9. Answers to Practice Questions

**Answer 1:**
Given: $D = 600$ mm, $R = 300$ mm, $t = 5$ mm, $P = 1.5$ MPa, $S = 120$ MPa, $E = 1.0$
a) Hoop Stress:
$\sigma_h = \frac{PR}{t} = \frac{(1.5 \, \text{MPa})(300 \, \text{mm})}{5 \, \text{mm}} = 90 \, \text{MPa}$
Longitudinal Stress:
$\sigma_l = \frac{PR}{2t} = \frac{(1.5 \, \text{MPa})(300 \, \text{mm})}{2 \times 5 \, \text{mm}} = 45 \, \text{MPa}$

b) Minimum required thickness (hoop stress governing):
$t = \frac{PR}{SE - 0.6P} = \frac{(1.5 \, \text{MPa})(300 \, \text{mm})}{(120 \, \text{MPa})(1.0) - 0.6(1.5 \, \text{MPa})} = \frac{450}{120 - 0.9} = \frac{450}{119.1} \approx 3.78 \, \text{mm}$

c) The given thickness of 5 mm is greater than the required minimum thickness of 3.78 mm. Therefore, the thickness is sufficient.

**Answer 2:**
Given: $R = 400$ mm, $P = 3.0$ MPa, $S = 150$ MPa, $E = 1.0$
a) Membrane Stress:
$\sigma_{sphere} = \frac{PR}{2t}$
We need to find $t$ first using the ASME formula:
$t = \frac{PR}{2SE - 0.2P} = \frac{(3.0 \, \text{MPa})(400 \, \text{mm})}{2(150 \, \text{MPa})(1.0) - 0.2(3.0 \, \text{MPa})} = \frac{1200}{300 - 0.6} = \frac{1200}{299.4} \approx 4.01 \, \text{mm}$
Now, calculate the stress with this thickness:
$\sigma_{sphere} = \frac{(3.0 \, \text{MPa})(400 \, \text{mm})}{2 \times 4.01 \, \text{mm}} \approx 149.6 \, \text{MPa}$

b) Minimum required thickness is approximately 4.01 mm.

**Answer 3:**
Given: $D = 1000$ mm, $R_c = 1000$ mm, $r_k = 150$ mm, $P = 1.0$ MPa, $S = 130$ MPa, $E = 1.0$
a) Approximate stress in the crown region (assuming $R_c \approx D/2$ for simplicity in the stress formula, though here $R_c=D$ is given, which is uncommon for a torispherical head attached to a cylinder of diameter D. Let's assume $R_c$ is the radius of the spherical portion and $D$ is the diameter of the cylinder it's attached to. For a standard torispherical head where $R_c = D$, the stress in the crown is approx. $\sigma_h = PD/2t$).
If we consider the crown radius to be $R_c = 1000$ mm, and the stress in the crown is similar to a sphere of radius $R_c$:
$\sigma_{crown} \approx \frac{P R_c}{2t}$. We need the crown thickness first. Using the spherical formula for the crown:
$t_{crown} = \frac{PR_c}{2SE - 0.2P} = \frac{(1.0 \, \text{MPa})(1000 \, \text{mm})}{2(130 \, \text{MPa})(1.0) - 0.2(1.0 \, \text{MPa})} = \frac{1000}{260 - 0.2} = \frac{1000}{259.8} \approx 3.85 \, \text{mm}$.
Then, $\sigma_{crown} = \frac{(1.0 \, \text{MPa})(1000 \, \text{mm})}{2 \times 3.85 \, \text{mm}} \approx 129.87 \, \text{MPa}$.
However, if $R_c = D$ is interpreted as the spherical cap matching the cylinder diameter, the stress is closer to hoop stress: $\sigma_{crown} \approx \frac{PD}{2t}$. This is a bit ambiguous without precise definition of $R_c$ in relation to $D$.

b) The knuckle thickness is calculated using the ASME formula for torispherical heads: $t_{knuckle} = \frac{PD}{2SE - 0.2P} \times K$. The factor $K$ is obtained from code tables based on the ratio $r_k/D$. The denominator in the base formula is generally lower than for the cylinder (due to the $0.2P$ term) and higher than for a sphere's $2SE$ term, and then $K$ increases it further. So, $t_{knuckle}$ will be greater than $t_{crown}$.

c) Required knuckle thickness = $t_{crown} \times K = 3.0 \, \text{mm} \times 1.8 = 5.4 \, \text{mm}$.

**Answer 4:**
Given: $D = 800$ mm, $P = 2.0$ MPa, $S = 100$ MPa, $E = 0.85$
For a 2:1 ellipsoidal head:
$t = \frac{PD}{2SE - 0.2P} = \frac{(2.0 \, \text{MPa})(800 \, \text{mm})}{2(100 \, \text{MPa})(0.85) - 0.2(2.0 \, \text{MPa})} = \frac{1600}{170 - 0.4} = \frac{1600}{169.6} \approx 9.43 \, \text{mm}$
The minimum required thickness is approximately 9.43 mm.

**Answer 5:**
Given: $D = 1200$ mm, $\alpha = 45^\circ$, $P = 0.8$ MPa, $S = 110$ MPa, $E = 1.0$
a) Required minimum thickness at the large end:
$t = \frac{PD}{2S E \sin \alpha} = \frac{(0.8 \, \text{MPa})(1200 \, \text{mm})}{2(110 \, \text{MPa})(1.0) \sin(45^\circ)} = \frac{960}{220 \times 0.7071} = \frac{960}{155.56} \approx 6.17 \, \text{mm}$

b) Circumferential stress at the large end diameter:
$\sigma_\theta = \frac{PD}{2t \sin \alpha} = \frac{(0.8 \, \text{MPa})(1200 \, \text{mm})}{2 \times 6.17 \, \text{mm} \times \sin(45^\circ)} = \frac{960}{12.34 \times 0.7071} = \frac{960}{8.72} \approx 109.97 \, \text{MPa}$
This is very close to the allowable stress $S$, as expected when the required thickness is calculated.

---

## 10. Important Points to Remember

*   **Membrane stress is an idealization:** It assumes uniform stress distribution across the shell thickness and neglects bending. This is valid for thin shells.
*   **Hoop stress is critical in cylinders:** It is twice the longitudinal stress.
*   **Spherical shells are stronger:** Stress is uniform in all directions and is half of the hoop stress in a cylinder of the same diameter and thickness.
*   **Knuckles are critical in torispherical heads:** The change in curvature concentrates stress.
*   **ASME Section VIII, Division 1 is the primary design code:** It provides specific formulas and factors for various geometries and conditions.
*   **Always check the applicable section of the ASME code:** The exact formulas and factors can vary slightly, and it's crucial to use the correct edition.
*   **Allowable stress ($S$) is temperature-dependent:** Always use the correct value for the design temperature.
*   **Joint efficiency ($E$) is crucial for welded vessels:** It reflects the quality of the weld.
*   **Corrosion allowance is a separate design consideration:** It adds to the minimum required thickness.

---
This module provides the foundational understanding of membrane stress analysis, crucial for the subsequent design and analysis of pressure vessels and piping systems.