---
title: "Basic laws of radiation heat transfer – Black, gray, diffuse and real surfaces - emission characteristics and laws of black body radiation -  solid angle and radiation intensity – radiation heat exchange between two infinite and finite back surfaces – shape factors- radiation heat exchange between two infinite parallel diffuse gray surfaces. Electrical network analogy for radiation heat exchange."
subject: "HEAT AND MASS TRANSFER"
module: "Module 3: Radiation heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633ad"
status: "completed"
scrapedAt: "2026-05-20T18:00:16.486Z"
---
# HEAT AND MASS TRANSFER - Module 3: Radiation Heat Transfer

## Introduction to Thermal Radiation

Thermal radiation is the electromagnetic radiation emitted by matter due to its temperature. Unlike conduction and convection, radiation does not require a medium for heat transfer. This makes it crucial in situations like:

*   Heat transfer from the Sun to Earth.
*   Heat transfer in furnaces and boilers.
*   Heat transfer from incandescent objects.
*   Design of spacecraft and high-temperature equipment.

**Key Concept:** All matter at a temperature above absolute zero emits thermal radiation. The amount and spectral distribution of this radiation depend on the temperature and the surface properties of the object.

---

## Basic Laws of Radiation Heat Transfer

### 1. Emission Characteristics and Laws of Black Body Radiation

#### 1.1 Black Surfaces

*   **Definition:** A **black surface** is an idealized surface that absorbs all incident thermal radiation, regardless of wavelength and direction. It also emits the maximum possible radiation at a given temperature.
*   **Emissivity ($\epsilon$)**: The ratio of the thermal radiation emitted by a surface to the radiation emitted by a black surface at the same temperature. For a black surface, $\epsilon = 1$.
*   **Kirchhoff's Law of Radiation:** For an opaque surface, the emissivity of the surface at a given wavelength and temperature is equal to its absorptivity at the same wavelength and temperature. For a black surface, absorptivity ($\alpha$) is 1, so emissivity is also 1.

#### 1.2 Laws of Black Body Radiation

These laws describe the emission characteristics of an ideal black body:

*   **Planck's Law:** Describes the spectral distribution of radiation emitted by a black body at a given temperature. It relates the emissive power per unit wavelength to the wavelength and temperature.
    *   $E_b\lambda(T) = \frac{C_1}{\lambda^5 (\exp(\frac{C_2}{\lambda T}) - 1)}$
    *   Where:
        *   $E_b\lambda(T)$ is the monochromatic emissive power (W/m$^2 \cdot \mu$m).
        *   $\lambda$ is the wavelength (m).
        *   $T$ is the absolute temperature (K).
        *   $C_1$ is the first radiation constant ($3.74 \times 10^{-16}$ W m$^2$/m).
        *   $C_2$ is the second radiation constant ($1.44 \times 10^{-2}$ m K).

*   **Stefan-Boltzmann Law:** States that the total emissive power of a black body (sum of radiation over all wavelengths) is proportional to the fourth power of its absolute temperature.
    *   $E_b(T) = \sigma T^4$
    *   Where:
        *   $E_b(T)$ is the total emissive power of a black body (W/m$^2$).
        *   $\sigma$ is the Stefan-Boltzmann constant ($5.67 \times 10^{-8}$ W/m$^2 \cdot K^4$).
        *   $T$ is the absolute temperature (K).

*   **Wien's Displacement Law:** Relates the wavelength at which the spectral emissive power of a black body is maximum to its temperature.
    *   $\lambda_{max} T = 2898 \mu m \cdot K$
    *   This means as temperature increases, the peak wavelength shifts to shorter wavelengths (e.g., visible light).

**Example:** A black body at 1000 K emits radiation. Calculate its total emissive power.
*   Using Stefan-Boltzmann Law: $E_b = \sigma T^4 = (5.67 \times 10^{-8} \text{ W/m}^2\cdot\text{K}^4) \times (1000 \text{ K})^4 = 5.67 \times 10^4 \text{ W/m}^2$.

**Important Point to Remember:** The Stefan-Boltzmann law is a consequence of integrating Planck's law over all wavelengths.

---

### 2. Gray, Diffuse, and Real Surfaces

#### 2.1 Real Surfaces

*   **Definition:** Real surfaces are neither perfectly black nor perfectly reflecting. They absorb, reflect, and transmit a portion of incident radiation.
*   **Properties:** Their emissive and absorptive properties are dependent on wavelength, direction, and temperature.

#### 2.2 Gray Surfaces

*   **Definition:** A **gray surface** is an approximation for real surfaces where the emissivity and absorptivity are assumed to be independent of wavelength.
*   **Emissivity ($\epsilon$):** For a gray surface, $\epsilon$ is a constant value between 0 and 1.
*   **Absorptivity ($\alpha$):** For a gray surface, $\alpha$ is also a constant value between 0 and 1.
*   **Relationship for Gray Surfaces (using Kirchhoff's Law):** For opaque gray surfaces, $\alpha = \epsilon$.

**Sachdeva (2022) - Fundamentals of Engineering Heat and Mass Transfer:** Discusses gray surfaces as a simplification to make radiation calculations tractable.

#### 2.3 Diffuse Surfaces

*   **Definition:** A **diffuse surface** is one for which the radiation properties (emissivity, absorptivity) are independent of the direction of radiation.
*   **Diffuse Emitter:** Emits radiation equally in all directions. The intensity of emitted radiation is constant with respect to direction.
*   **Diffuse Reflector:** Reflects incident radiation uniformly in all directions.

**Example:** A diffuse surface at 500 K has an emissivity of 0.8. What is the emissive power?
*   Assuming it's a gray-diffuse surface: $E = \epsilon \sigma T^4 = 0.8 \times (5.67 \times 10^{-8} \text{ W/m}^2\cdot\text{K}^4) \times (500 \text{ K})^4 = 0.8 \times 708.75 \times 10^{-8} \times 625 \times 10^8 \approx 3.54 \times 10^4 \text{ W/m}^2$.

**Important Point to Remember:** Real surfaces are generally not perfectly diffuse; their properties can vary with direction. However, diffuse surface approximation is often used for simplicity.

---

### 3. Solid Angle and Radiation Intensity

#### 3.1 Solid Angle ($\Omega$)

*   **Definition:** A solid angle is the three-dimensional equivalent of a planar angle. It represents the "amount of view" an object has from a point.
*   **Unit:** Steradian (sr).
*   **Formula:** For a surface area $A$ on a sphere of radius $r$ centered at the origin, the solid angle subtended by $A$ at the origin is:
    *   $\Omega = \frac{A}{r^2}$
*   **Total Solid Angle:** The solid angle subtended by a full sphere at its center is $4\pi$ steradians.

**Example:** What is the solid angle subtended by a small area $dA$ at a point at a distance $r$?
*   If $dA$ is perpendicular to the line connecting the point and $dA$, then $d\Omega = \frac{dA}{r^2}$.
*   If $dA$ is not perpendicular, and the angle between the normal to $dA$ and the line connecting the point and $dA$ is $\theta$, then $d\Omega = \frac{dA \cos\theta}{r^2}$.

#### 3.2 Radiation Intensity ($I$)

*   **Definition:** Radiation intensity is the rate of energy flow per unit area and per unit solid angle in a particular direction.
*   **Unit:** W/(m$^2 \cdot$ sr).
*   **Relationship to Emissive Power:** The total emissive power of a surface is the integral of the radiation intensity over all possible solid angles from the surface.
    *   For a diffuse surface: $E = \pi I$
    *   This means the intensity of radiation from a diffuse surface is the same in all directions.

**Derivation:**
Consider a small area $dA$ on a surface emitting radiation. The rate of energy emitted in a solid angle $d\Omega$ in a specific direction is $d\dot{Q}_{emit} = I(\theta, \phi) dA \, d\Omega$.
To find the total emissive power $E$, we integrate over all directions ($\Omega$):
$E = \frac{1}{dA} \int_{\Omega} I(\theta, \phi) dA \, d\Omega = \int_{\Omega} I(\theta, \phi) \, d\Omega$
For a diffuse surface, $I(\theta, \phi) = I$, which is constant.
$E = I \int_{\Omega} d\Omega = I (4\pi)$ - **This is incorrect if $I$ is defined per unit area of the emitting surface.**

**Correct Definition and Relation:**
Radiation intensity ($I$) is the radiant power emitted per unit projected area of the source and per unit solid angle in a given direction.
For a diffuse surface, the emissive power ($E$) is related to intensity ($I$) by:
$E = \pi I_{diffuse}$
This implies that the intensity is related to the total power emitted per unit surface area.

**Example:** A diffuse surface emits radiation with an intensity of $1000 \, \text{W/(m}^2 \cdot \text{sr)}$. What is its emissive power?
*   $E = \pi I = \pi \times 1000 \, \text{W/m}^2 \approx 3141.6 \, \text{W/m}^2$.

**Important Point to Remember:** Intensity is directional, while emissive power is the total radiation emitted per unit area. The $\pi I$ relationship holds for diffuse surfaces.

---

## Radiation Heat Exchange

Radiation heat exchange occurs between surfaces when there is a temperature difference and a view factor between them.

### 4. Radiation Heat Exchange Between Two Infinite and Finite Black Surfaces

#### 4.1 Radiation Exchange Between Infinite Parallel Black Surfaces

*   **Scenario:** Two large parallel surfaces, both ideally black, separated by a vacuum or a non-participating medium.
*   **Heat Flux:** The net rate of radiation heat transfer per unit area between the two surfaces.
*   **Law:** The net heat flux between two infinite parallel black surfaces at temperatures $T_1$ and $T_2$ is given by the difference in their emissive powers.
    *   $q_{12} = E_{b1} - E_{b2} = \sigma (T_1^4 - T_2^4)$
*   **Explanation:** Surface 1 emits $E_{b1}$ and absorbs radiation from surface 2, which is $E_{b2}$ (since surface 2 is black, it emits $E_{b2}$ and absorbs none from surface 1, assuming surface 1 is also black and not reflecting anything back). The net exchange is the difference.

**Example:** Two large parallel black plates are at 1000 K and 300 K. Calculate the net heat flux between them.
*   $q_{12} = \sigma (T_1^4 - T_2^4) = (5.67 \times 10^{-8}) (1000^4 - 300^4) = (5.67 \times 10^{-8}) (10^{12} - 8.1 \times 10^{10}) \approx 5.26 \times 10^4 \text{ W/m}^2$.

#### 4.2 Radiation Exchange Between Finite Black Surfaces

*   **Scenario:** Two finite surfaces with arbitrary shapes and orientations, both black.
*   **Key Factor:** The **view factor** (or shape factor), denoted by $F_{ij}$, which represents the fraction of the radiation leaving surface $i$ that is intercepted by surface $j$.
*   **Net Radiation Heat Transfer ($Q_{ij}$):** The rate of net radiation heat transfer from surface $i$ to surface $j$ is given by:
    *   $Q_{ij} = A_i E_{bi} F_{ij} - A_j E_{bj} F_{ji}$
*   **Reciprocity Rule:** $A_i F_{ij} = A_j F_{ji}$. This simplifies the equation to:
    *   $Q_{ij} = A_i F_{ij} (E_{bi} - E_{bj})$
    *   $Q_{ij} = A_i F_{ij} \sigma (T_i^4 - T_j^4)$

**Example:** A small circular disk of area $A_1$ at $T_1$ is parallel to a large circular disk of area $A_2$ at $T_2$, and their centers coincide. If $A_1 = 0.1 \, m^2$, $T_1 = 1000 \, K$, $T_2 = 300 \, K$, and the view factor $F_{12} = 0.2$.
*   Assuming both are black surfaces:
    *   $Q_{12} = A_1 F_{12} \sigma (T_1^4 - T_2^4) = 0.1 \times 0.2 \times (5.67 \times 10^{-8}) (1000^4 - 300^4) \approx 0.105 \times 10^4 \text{ W} = 1050 \text{ W}$.

**Important Point to Remember:** The view factor $F_{ij}$ is always between 0 and 1. The sum of view factors from surface $i$ to all other surfaces (including itself) is 1: $\sum_{j=1}^{N} F_{ij} = 1$.

---

### 5. Shape Factors (View Factors)

*   **Definition:** The shape factor $F_{ij}$ from surface $i$ to surface $j$ is the fraction of the radiation leaving surface $i$ that strikes surface $j$.
*   **Key Properties:**
    1.  $0 \le F_{ij} \le 1$
    2.  $F_{ii} = 0$ for flat or concave surfaces. For a convex surface, $F_{ii} \ne 0$.
    3.  $\sum_{j=1}^{N} F_{ij} = 1$ (for $N$ surfaces that enclose the emitter).
    4.  $A_i F_{ij} = A_j F_{ji}$ (Reciprocity rule).

*   **Calculating Shape Factors:**
    *   **Direct Integration:** For simple geometries, shape factors can be derived by integrating the differential solid angle expression:
        $F_{12} = \frac{1}{A_1} \int_{A_1} \int_{A_2} \frac{\cos\theta_1 \cos\theta_2}{\pi r^2} dA_2 dA_1$
        Where $\theta_1$ and $\theta_2$ are the angles between the surface normals and the line connecting the differential areas, and $r$ is the distance between them.
    *   **Geometric Relations and Tables:** For common geometries (parallel disks, coaxial cylinders, perpendicular rectangles), shape factors are available in charts and tables (e.g., in Cengel & Ghajar, Sukhatme).
    *   **Analogy Methods:**
        *   **Huisman-Pritchard Analogy (Cross-String Method):** For radiation exchange between two polygons in a plane, if they are visible to each other, the shape factor $F_{12}$ can be calculated using a string method.
        *   **Other Graphical Methods:** Such as the "Nudelman-Pritchard Chart."

**Example:** Consider two concentric, parallel, black disks. Disk 1 has radius $r_1$ and Disk 2 has radius $r_2$ ($r_1 < r_2$). Disk 1 is at $T_1$ and Disk 2 is at $T_2$. The distance between them is $L$. The shape factor $F_{12}$ for this configuration can be found in tables.
*   If $F_{12}$ is known, the heat transfer $Q_{12}$ can be calculated using $Q_{12} = A_1 F_{12} \sigma (T_1^4 - T_2^4)$.

**Cengel & Ghajar (2020) - Heat and Mass Transfer: Fundamentals and Application:** Provides extensive charts and tables for shape factor calculations for various common geometries.

**Sukhatme (2005) - A Textbook on Heat Transfer:** Also presents detailed derivations and tables for shape factors.

**Important Point to Remember:** For complex geometries, calculating shape factors can be challenging, often requiring numerical methods or specialized software.

---

### 6. Radiation Heat Exchange Between Two Infinite Parallel Diffuse Gray Surfaces

*   **Scenario:** Two large parallel gray surfaces at temperatures $T_1$ and $T_2$ with emissivities $\epsilon_1$ and $\epsilon_2$, and absorptivities $\alpha_1$ and $\alpha_2$. Since they are gray, $\alpha_1 = \epsilon_1$ and $\alpha_2 = \epsilon_2$.
*   **Analysis:** This involves considering not just the direct emission but also reflections.
    *   Surface 1 emits $E_1 = \epsilon_1 \sigma T_1^4$.
    *   Surface 2 emits $E_2 = \epsilon_2 \sigma T_2^4$.
    *   Surface 1 absorbs $\alpha_1$ of the radiation incident on it. The radiation incident on surface 1 is its own emission plus the reflected radiation from surface 2.
    *   Surface 2 absorbs $\alpha_2$ of the radiation incident on it. The radiation incident on surface 2 is its own emission plus the reflected radiation from surface 1.

*   **Simplified approach for Infinite Parallel Gray Surfaces:**
    Let $J_1$ and $J_2$ be the radiosity of surfaces 1 and 2, respectively. Radiosity is the total radiation leaving a surface per unit area. For a diffuse gray surface:
    $J_1 = E_1 + \rho_1 G_1 = \epsilon_1 \sigma T_1^4 + (1-\epsilon_1) G_1$
    $J_2 = E_2 + \rho_2 G_2 = \epsilon_2 \sigma T_2^4 + (1-\epsilon_2) G_2$
    Where $G_1$ and $G_2$ are the incident irradiations.
    For infinite parallel surfaces, $G_1 = J_2$ and $G_2 = J_1$.
    So,
    $J_1 = \epsilon_1 \sigma T_1^4 + (1-\epsilon_1) J_2$
    $J_2 = \epsilon_2 \sigma T_2^4 + (1-\epsilon_2) J_1$
    Solving these two linear equations for $J_1$ and $J_2$:
    $J_1 = \frac{\epsilon_1 \sigma T_1^4 + \epsilon_1 \epsilon_2 \sigma T_2^4}{1 - (1-\epsilon_1)(1-\epsilon_2)}$
    $J_2 = \frac{\epsilon_2 \sigma T_2^4 + \epsilon_1 \epsilon_2 \sigma T_1^4}{1 - (1-\epsilon_1)(1-\epsilon_2)}$

    The net heat transfer rate per unit area ($q_{12}$) is the difference between the radiosities:
    $q_{12} = J_1 - J_2 = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1 }$

    This can be rewritten using the concept of "view factor for gray surfaces" or "radiation resistance."

**Special Case: One surface is black ($\epsilon_1 = 1$)**
If $\epsilon_1 = 1$, then $J_1 = \sigma T_1^4$.
$J_2 = \epsilon_2 \sigma T_2^4 + (1-\epsilon_2) J_1 = \epsilon_2 \sigma T_2^4 + (1-\epsilon_2) \sigma T_1^4$
$q_{12} = J_1 - J_2 = \sigma T_1^4 - [\epsilon_2 \sigma T_2^4 + (1-\epsilon_2) \sigma T_1^4]$
$q_{12} = \sigma T_1^4 - \epsilon_2 \sigma T_2^4 - \sigma T_1^4 + \epsilon_2 \sigma T_1^4$
$q_{12} = \epsilon_2 \sigma (T_1^4 - T_2^4)$
This matches the Stefan-Boltzmann law for radiation from a black surface to a gray surface if the incident radiation on the gray surface is from the black surface.

**Example:** Two large parallel gray plates are at 500 K and 300 K, with emissivities $\epsilon_1 = 0.7$ and $\epsilon_2 = 0.5$. Calculate the net heat flux.
*   $q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1 } = \frac{(5.67 \times 10^{-8}) (500^4 - 300^4)}{ \frac{1}{0.7} + \frac{1}{0.5} - 1 }$
*   $q_{12} = \frac{(5.67 \times 10^{-8}) (6.25 \times 10^{10} - 8.1 \times 10^9)}{ 1.4286 + 2 - 1 } = \frac{(5.67 \times 10^{-8}) (5.44 \times 10^{10})}{ 2.4286 }$
*   $q_{12} \approx \frac{3085}{2.4286} \approx 1270 \text{ W/m}^2$.

**Important Point to Remember:** The presence of reflections in gray surfaces reduces the net heat transfer compared to black surfaces. The term $\frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1$ acts as a resistance to radiation heat transfer.

---

## 7. Electrical Network Analogy for Radiation Heat Exchange

*   **Concept:** Radiation heat exchange problems can be analogously represented as an electrical circuit. This method, often called the **Nusselt analogy** or **radiation network method**, simplifies complex radiation exchange calculations.
*   **Components of the Analogy:**
    *   **Temperature ($T$):** Analogous to voltage ($V$).
    *   **Emissive Power ($E = \epsilon \sigma T^4$):** Analogous to a voltage source.
    *   **Radiosity ($J$):** Analogous to a voltage node.
    *   **Irradiation ($G$):** Analogous to a voltage node.
    *   **Net Radiation Heat Transfer ($Q$ or $q$):** Analogous to electric current ($I$).
    *   **Conductance/Resistance to Radiation:** Analogous to electrical resistance.

*   **Resistances:**
    *   **Surface Resistance ($R_s$):** Represents the internal resistance to emission and absorption within a surface. For a diffuse gray surface, it's related to emissivity:
        $R_s = \frac{1 - \epsilon}{\epsilon A}$ (for heat transfer $Q$)
        Or for heat flux $q$: $r_s = \frac{1 - \epsilon}{\epsilon \sigma T^3}$ (This is not a true resistance, but often used in analogy).
        A more common form is that the difference between radiosity and emissive power is proportional to the heat transfer:
        $J - E_b = q \times \frac{1-\epsilon}{\epsilon A}$. So, the surface resistance is $R_s = \frac{1-\epsilon}{\epsilon A}$.

    *   **Space Resistance ($R_{space}$):** Represents the resistance to heat transfer through space due to the geometry and view factor. For two surfaces $i$ and $j$, it's related to the view factor and surface area:
        $R_{space} = \frac{1}{A_i F_{ij}}$ (for heat transfer $Q$)
        Or for heat flux $q$: $r_{space} = \frac{1}{A_i F_{ij}}$ (This is also not a true resistance per unit area.)
        The net heat transfer between two surfaces is $Q_{ij} = A_i F_{ij} (E_{bi} - E_{bj})$.
        $Q_{ij} = \frac{E_{bi} - E_{bj}}{ \frac{1}{A_i F_{ij}} }$.
        So, the space resistance is $R_{space} = \frac{1}{A_i F_{ij}}$.

*   **Network Representation:**
    *   **Two Infinite Parallel Black Surfaces:**
        *   Surface 1 at $T_1$ emits $E_{b1} = \sigma T_1^4$.
        *   Surface 2 at $T_2$ emits $E_{b2} = \sigma T_2^4$.
        *   They are perfectly viewed by each other ($F_{12}=1$).
        *   No surface resistance ($\epsilon=1$).
        *   Circuit: A voltage source $E_{b1}$ connected to a resistance $R_{space} = \frac{1}{A_1 F_{12}} = \frac{1}{A_1}$ (since $F_{12}=1$ for infinite area) to node $J_1$. A voltage source $E_{b2}$ connected to a resistance $R_{space} = \frac{1}{A_2 F_{21}} = \frac{1}{A_2}$ to node $J_2$. Since $A_1$ and $A_2$ are infinite, these resistances are zero. Therefore, $J_1 = E_{b1}$ and $J_2 = E_{b2}$. The net heat transfer is $Q_{12} = \frac{J_1 - J_2}{R_{space}} = \frac{E_{b1} - E_{b2}}{1/(A_1 F_{12})} = A_1 F_{12} \sigma (T_1^4 - T_2^4)$. For infinite parallel surfaces, $A_1 F_{12} = A_1$, so $q_{12} = \sigma(T_1^4 - T_2^4)$. The analogy becomes simpler for heat flux if resistances are per unit area.

    *   **Two Infinite Parallel Gray Surfaces:**
        *   Surface 1 ($T_1, \epsilon_1$): Emissive power $E_1 = \epsilon_1 \sigma T_1^4$. Surface resistance $R_{s1} = \frac{1-\epsilon_1}{\epsilon_1 A_1}$.
        *   Surface 2 ($T_2, \epsilon_2$): Emissive power $E_2 = \epsilon_2 \sigma T_2^4$. Surface resistance $R_{s2} = \frac{1-\epsilon_2}{\epsilon_2 A_2}$.
        *   Space resistance $R_{space} = \frac{1}{A_1 F_{12}}$. For infinite parallel surfaces, $F_{12}=1$, so $R_{space} = \frac{1}{A_1}$.
        *   Circuit:
            *   Node $J_1$ (radiosity of surface 1).
            *   Voltage source $E_1$ connected to $R_{s1}$ to node $J_1$.
            *   Node $J_2$ (radiosity of surface 2).
            *   Voltage source $E_2$ connected to $R_{s2}$ to node $J_2$.
            *   Node $J_1$ and $J_2$ are connected by $R_{space}$.
        *   The net heat transfer $Q_{12}$ is the current flowing between $J_1$ and $J_2$.
        *   $Q_{12} = \frac{E_1 - J_1}{R_{s1}} = \frac{J_1 - J_2}{R_{space}} = \frac{J_2 - E_2}{R_{s2}}$
        *   This yields the same equation as derived earlier:
            $q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1-\epsilon_1}{\epsilon_1 A_1} + \frac{1}{A_1 F_{12}} + \frac{1-\epsilon_2}{\epsilon_2 A_2} }$
            For infinite parallel surfaces, $A_1=A_2=A$ and $F_{12}=1$:
            $q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1-\epsilon_1}{\epsilon_1} + 1 + \frac{1-\epsilon_2}{\epsilon_2} }$
            $q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1}{\epsilon_1} - 1 + 1 + \frac{1}{\epsilon_2} - 1 } = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1 }$

**Nag (2011) - Heat and Mass Transfer Elements:** Provides a good introduction to the radiation network analogy.
**Cengel & Ghajar (2020):** Elaborates on building complex radiation networks for multiple surfaces.

**Example using Electrical Analogy:**
Consider a small hot object ($\epsilon_1=1$, area $A_1$, $T_1$) inside a large enclosure ($\epsilon_2 \approx 1$, area $A_2$, $T_2$).
*   Object 1 (hot object): $E_1 = \sigma T_1^4$, $R_{s1} = \frac{1-1}{1 \cdot A_1} = 0$.
*   Enclosure 2: $E_2 = \sigma T_2^4$, $R_{s2} = \frac{1- \epsilon_2}{\epsilon_2 A_2}$.
*   View factor from object 1 to enclosure 2 is $F_{12} = 1$.
*   Space resistance $R_{space} = \frac{1}{A_1 F_{12}} = \frac{1}{A_1}$.
*   Network: $E_1$ is connected directly to node $J_1$ (since $R_{s1}=0$). Node $J_1$ is connected by $R_{space}$ to node $J_2$. Node $J_2$ is connected by $R_{s2}$ to $E_2$.
*   $J_1 = E_1 = \sigma T_1^4$.
*   $Q_{12} = \frac{J_1 - J_2}{R_{space}} = \frac{\sigma T_1^4 - J_2}{1/A_1}$
*   $Q_{12} = \frac{J_2 - E_2}{R_{s2}} = \frac{J_2 - \sigma T_2^4}{(1-\epsilon_2)/(\epsilon_2 A_2)}$
*   From the first equation, $J_2 = \sigma T_1^4 - \frac{Q_{12}}{A_1}$.
*   Substitute into the second equation: $Q_{12} = \frac{(\sigma T_1^4 - Q_{12}/A_1) - \sigma T_2^4}{(1-\epsilon_2)/(\epsilon_2 A_2)}$.
*   If enclosure 2 is also black ($\epsilon_2=1$), then $R_{s2}=0$, and $J_2 = E_2 = \sigma T_2^4$.
    $Q_{12} = \frac{J_1 - J_2}{R_{space}} = \frac{\sigma T_1^4 - \sigma T_2^4}{1/A_1} = A_1 \sigma (T_1^4 - T_2^4)$.
    This confirms the Stefan-Boltzmann law for a small object in a large enclosure.

**Important Point to Remember:** The electrical analogy is powerful for solving problems with multiple interacting surfaces and provides a visual representation of the resistances to radiation heat transfer.

---

## Practice Questions

**Question 1:**
A black body is at a temperature of 1500 K. Calculate the following:
a) The total emissive power.
b) The wavelength at which the emissive power is maximum.
c) The emissive power per unit wavelength at 2 $\mu$m.

**Answer 1:**
a) $E_b = \sigma T^4 = (5.67 \times 10^{-8} \, \text{W/m}^2\cdot\text{K}^4) \times (1500 \, \text{K})^4 = 284.3 \times 10^4 \, \text{W/m}^2 = 2.843 \, \text{MW/m}^2$.
b) $\lambda_{max} T = 2898 \implies \lambda_{max} = \frac{2898}{1500} = 1.932 \, \mu\text{m}$.
c) Using Planck's Law:
$E_b\lambda(T) = \frac{C_1}{\lambda^5 (\exp(\frac{C_2}{\lambda T}) - 1)}$
$E_b\lambda(1500) = \frac{3.74 \times 10^{-16}}{(2 \times 10^{-6})^5 (\exp(\frac{1.44 \times 10^{-2}}{(2 \times 10^{-6}) \times 1500}) - 1)}$
$E_b\lambda(1500) = \frac{3.74 \times 10^{-16}}{32 \times 10^{-30} (\exp(\frac{1.44 \times 10^{-2}}{3 \times 10^{-3}}) - 1)}$
$E_b\lambda(1500) = \frac{3.74 \times 10^{14}}{32 (\exp(4.8) - 1)} = \frac{3.74 \times 10^{14}}{32 (121.51 - 1)} \approx 1.01 \times 10^{12} \, \text{W/(m}^2 \cdot \mu\text{m)}$.

**Question 2:**
Two large parallel gray surfaces have temperatures $T_1 = 800 \, \text{K}$ and $T_2 = 300 \, \text{K}$. The emissivities are $\epsilon_1 = 0.9$ and $\epsilon_2 = 0.4$. Calculate the net heat flux between them.

**Answer 2:**
Using the formula for infinite parallel gray surfaces:
$q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ \frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1 }$
$q_{12} = \frac{(5.67 \times 10^{-8} \, \text{W/m}^2\cdot\text{K}^4) \times (800^4 - 300^4) \, \text{K}^4}{ \frac{1}{0.9} + \frac{1}{0.4} - 1 }$
$q_{12} = \frac{(5.67 \times 10^{-8}) \times (4.096 \times 10^{11} - 6.561 \times 10^9)}{ 1.111 + 2.5 - 1 }$
$q_{12} = \frac{(5.67 \times 10^{-8}) \times (4.03 \times 10^{11})}{ 2.611 }$
$q_{12} = \frac{22850}{2.611} \approx 8751 \, \text{W/m}^2$.

**Question 3:**
A small diffuse surface area $dA_1$ is at a distance $r$ from a point. The line connecting the point to $dA_1$ makes an angle $\theta$ with the normal to $dA_1$.
a) What is the solid angle $d\Omega$ subtended by $dA_1$ at the point?
b) If $dA_1$ is a diffuse emitter with intensity $I$, what is the rate of radiation emitted by $dA_1$ into the solid angle $d\Omega$?

**Answer 3:**
a) $d\Omega = \frac{dA_1 \cos\theta}{r^2}$ steradians.
b) The rate of radiation emitted is $d\dot{Q} = I \, dA_1 \cos\theta \, d\Omega = I \, dA_1 \cos\theta \left(\frac{dA_1 \cos\theta}{r^2}\right)$ - **This is incorrect.**
The correct relation is: $d\dot{Q} = I \, dA_1 \, \cos\theta \, d\Omega_{projected}$.
The power emitted by $dA_1$ in a direction is $I dA_1$. The projected area in that direction is $dA_1 \cos\theta$.
The rate of energy emission per unit solid angle in that direction is $I \, dA_1 \cos\theta$.
So, the radiation emitted into solid angle $d\Omega$ is $d\dot{Q} = (I \, dA_1 \cos\theta) \, d\Omega$.
This is **incorrect**. The intensity $I$ is defined as radiant power per unit projected area and per unit solid angle.
So, $d\dot{Q} = I \cdot (dA_1 \cos\theta) \cdot d\Omega$.

Let's re-evaluate the definition of intensity.
Intensity $I$ is the radiant power per unit **area projected perpendicular to the direction of radiation** and per unit solid angle.
So, $d\dot{Q} = I \cdot (dA_1 \cos\theta) \cdot d\Omega$. This is correct.

If the surface is diffuse, $I$ is constant for all directions.
The total emitted power from $dA_1$ is $E_1 dA_1$. We know $E_1 = \pi I$.
So, $d\dot{Q} = (\pi I) \, dA_1 \cos\theta \, \frac{d\Omega}{4\pi}$ is not the way.
The emission into solid angle $d\Omega$ is $d\dot{Q} = I \cdot (dA_1 \cos\theta) \cdot d\Omega$. This is the correct interpretation of the definition of intensity.

Final answer for b): $d\dot{Q} = I \cdot (dA_1 \cos\theta) \cdot d\Omega$.

---

## Course Outcome Alignment

*   **CO1 (Knowledge Level K3):** Understanding the basic laws of black body radiation (Planck's, Stefan-Boltzmann, Wien's) and the properties of surfaces (black, gray, diffuse) aligns with K3.
*   **CO2 (Knowledge Level K4):** While this module focuses on radiation, understanding the mechanisms and factors influencing heat transfer (like view factors) indirectly supports K4 analysis skills in convection.
*   **CO3 (Knowledge Level K3):** This module directly addresses the principles of thermal radiation. Applying these principles for radiation shielding is a direct application of understanding emissivities and net heat transfer. Calculating heat exchange between surfaces using shape factors and understanding gray surface behavior is K3.
*   **CO4 (Knowledge Level K3):** Not directly addressed by this module's content.

---

## Summary and Key Takeaways

*   **Black Body:** Ideal absorber and emitter ($\epsilon=1$).
*   **Stefan-Boltzmann Law:** $E_b = \sigma T^4$.
*   **Gray Body:** $\epsilon$ and $\alpha$ are constant and independent of wavelength. $\alpha = \epsilon$.
*   **Diffuse Body:** Radiation properties are independent of direction.
*   **Intensity ($I$):** Radiant power per unit projected area and per unit solid angle. For diffuse surfaces, $E = \pi I$.
*   **Solid Angle ($\Omega$):** Measure of view; $d\Omega = \frac{dA \cos\theta}{r^2}$.
*   **View Factor ($F_{ij}$):** Fraction of radiation from surface $i$ reaching surface $j$.
*   **Radiation Exchange (Black Surfaces):** $Q_{ij} = A_i F_{ij} \sigma (T_i^4 - T_j^4)$.
*   **Radiation Exchange (Gray Surfaces):** Involves surface and space resistances, often solved using the electrical analogy. $q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{ R_{total} }$, where $R_{total}$ includes surface and space resistances.
*   **Electrical Analogy:** Useful tool for visualizing and solving complex radiation networks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
