---
title: "Infinitesimal dipole"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff763"
status: "completed"
scrapedAt: "2026-05-23T18:12:20.172Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Infinitesimal Dipole

---

### **1. Introduction: The Essence of Radiation**

*   **Antenna:** A transducer designed to convert electrical signals into electromagnetic waves (transmitting antenna) or vice-versa (receiving antenna). It acts as a bridge between guided waves and free-space waves.
*   **Radiation Mechanism:** The fundamental process by which an antenna converts time-varying electric and magnetic fields into propagating electromagnetic waves. This involves accelerating charges.
*   **Infinitesimal Dipole (Hertzian Dipole):** The simplest theoretical radiating element. It serves as a fundamental building block for understanding the radiation characteristics of more complex antennas. Its simplicity allows for analytical solutions to Maxwell's equations, providing foundational insights.

**Key Concept:** Radiation of electromagnetic waves is fundamentally linked to the acceleration of electric charges.

---

### **2. The Infinitesimal Dipole Model**

*   **Definition:** An infinitesimal dipole is an idealized current element of length '$dl$' carrying a uniform current '$I$'. The length '$dl$' is considered much smaller than the wavelength of the electromagnetic wave being radiated ($dl \ll \lambda$). This assumption simplifies the mathematical analysis significantly.

*   **Physical Representation:** Imagine a very short segment of wire with current flowing through it. This current represents moving charges, and if this current is time-varying, the charges are accelerating.

*   **Mathematical Description:**
    *   Current distribution: $I(z') = I_0 e^{-j\omega t}$ (Assuming a sinusoidal time variation, though for analysis often $e^{j\omega t}$ is used, and the '$e^{-j\omega t}$' is implicitly understood. We will use $e^{j\omega t}$ for consistency with many texts like Balanis).
    *   Current element: A point charge '$q$' oscillating along a small length '$dl$'. The current is $I = \frac{dq}{dt}$.
    *   For an infinitesimal dipole of length $dl$, the current is considered uniform along its length.
    *   Let the dipole be placed at the origin and oriented along the z-axis.

**Important Point:** The infinitesimal dipole is a theoretical construct. Real antennas approximate its behavior when their physical dimensions are much smaller than the wavelength.

**Reference:** Balanis, Chapter 2.1.1 "The Infinitesimal Dipole"

---

### **3. Electric and Magnetic Vector Potentials**

To analyze the radiation, we use the concept of vector potentials, which simplify the solution of Maxwell's equations.

*   **Vector Magnetic Potential ($\vec{A}$):**
    *   For a current distribution $\vec{J}$ and current density $\vec{M}$, $\vec{A}$ is defined such that $\nabla \times \vec{A} = \vec{B}$.
    *   In terms of current density: $\vec{A}(\vec{r}) = \frac{\mu}{4\pi} \iiint_{V'} \frac{\vec{J}(\vec{r'}) e^{-jkR}}{R} dV'$
    *   For an infinitesimal dipole, the current is confined to a line of length $dl$. The current density can be represented using the Dirac delta function.
    *   Current element $\vec{I} dl$: A current $I$ flowing along a line segment $dl$.
    *   $\vec{A} = \frac{\mu I dl}{4\pi R} e^{-jkR} \hat{z}$ (where $\hat{z}$ is the direction of current flow and $R$ is the distance from the source to the observation point).

*   **Electric Vector Potential ($\vec{F}$):**
    *   For a volume charge density $\rho$ and surface charge density $\sigma$, $\vec{F}$ is defined such that $\nabla \times \vec{F} = -\vec{E}$ (when permeability $\mu = \mu_0$).
    *   In terms of charge density: $\vec{F}(\vec{r}) = \frac{1}{4\pi\epsilon} \iiint_{V'} \frac{\rho(\vec{r'}) e^{-jkR}}{R} dV'$
    *   For the infinitesimal dipole, the charges are at the ends. If the current is $I e^{j\omega t}$, then the charge distribution at the ends can be represented as $q = \frac{I}{j\omega}$.
    *   $\vec{F} = \frac{q dl}{4\pi\epsilon R} e^{-jkR} \hat{z} = \frac{I dl}{4\pi\epsilon j\omega R} e^{-jkR} \hat{z}$

**Relationship between Potentials and Fields:**
*   $\vec{E} = -\nabla V - j\omega\vec{A}$
*   $\vec{H} = \nabla \times \vec{A}$
*   $V$ is the scalar electric potential.

**Important Point:** Vector potentials simplify the derivation of electric and magnetic fields from the source current and charge distributions.

**Reference:** Balanis, Chapter 2.1.2 "Fields of an Infinitesimal Dipole"

---

### **4. Electric and Magnetic Fields of an Infinitesimal Dipole**

The fields are derived from the vector potentials in spherical coordinates. Let the observation point be at a distance $R$ from the dipole and at an angle $\theta$ with respect to the dipole's axis (z-axis).

*   **Fields in Spherical Coordinates:**
    *   $\vec{E} = E_R \hat{r} + E_\theta \hat{\theta} + E_\phi \hat{\phi}$
    *   $\vec{H} = H_R \hat{r} + H_\theta \hat{\theta} + H_\phi \hat{\phi}$

    The resultant fields are:
    *   **Electric Field:**
        *   $E_R = \frac{I dl \cos\theta}{2\pi\omega\epsilon R^2} e^{-jkR} + \frac{j k I dl \sin\theta}{2\pi\epsilon R} e^{-jkR}$
        *   $E_\theta = \frac{j k I dl \sin\theta}{4\pi}(\frac{1}{R} + \frac{1}{jkR^2}) e^{-jkR}$
        *   $E_\phi = 0$

    *   **Magnetic Field:**
        *   $H_R = 0$
        *   $H_\theta = 0$
        *   $H_\phi = \frac{j k I dl \sin\theta}{4\pi}(\frac{1}{R} + \frac{1}{jkR^2}) e^{-jkR}$

**Simplification in different regions:**

*   **Near-Field (Reactive Near-Field) Region ($R \ll \lambda$):**
    *   Dominant terms are those with $1/R^2$ and $1/R^3$. These are reactive terms, storing energy.
    *   $E_R \approx \frac{I dl \cos\theta}{2\pi\omega\epsilon R^2}$
    *   $E_\theta \approx \frac{j k I dl \sin\theta}{2\pi\omega\epsilon R^2}$
    *   $H_\phi \approx \frac{j k I dl \sin\theta}{2\pi R^2}$
    *   (Note: Some texts have slightly different forms depending on the handling of $\omega$ vs $k$).
    *   These fields are primarily capacitive and inductive. The energy oscillates between the electric and magnetic fields and does not propagate away.

*   **Far-Field (Radiation) Region ($R \gg \lambda$):**
    *   Dominant terms are those with $1/R$. These are the radiating terms.
    *   $E_\theta \approx \frac{j k I dl \sin\theta}{4\pi R} e^{-jkR}$
    *   $H_\phi \approx \frac{j k I dl \sin\theta}{4\pi R} e^{-jkR}$
    *   $E_R \approx 0$
    *   The fields vary as $1/R$ and have a spherical wave nature ($e^{-jkR}$).
    *   The electric and magnetic fields are perpendicular to each other and to the direction of propagation ($\hat{r}$), forming a transverse electromagnetic (TEM) wave.
    *   The ratio $|E_\theta|/|H_\phi| = \eta$, where $\eta$ is the intrinsic impedance of the medium ($\eta = \sqrt{\frac{\mu}{\epsilon}}$). For free space, $\eta_0 \approx 377 \Omega$.

**Important Points:**
*   The fields of an infinitesimal dipole are anisotropic, meaning they depend on the angle $\theta$.
*   In the far-field, the fields are transverse and propagate as a plane wave.
*   The radiation is strongest in the directions perpendicular to the dipole axis ($\theta = 90^\circ$) and zero along the axis ($\theta = 0^\circ, 180^\circ$).

**Reference:** Balanis, Chapter 2.1.3 "Fields of an Infinitesimal Dipole"

---

### **5. Radiation Characteristics**

The radiation characteristics describe how the antenna radiates power in different directions.

*   **Radiation Intensity ($U$):** The power radiated per unit solid angle.
    *   $U = R \times \text{Power density} = R^2 \times S_r$, where $S_r$ is the radial component of the Poynting vector.
    *   $S_r = \frac{1}{2} \text{Re}(\vec{E} \times \vec{H}^*)$
    *   For the infinitesimal dipole in the far-field:
        *   $E_\theta = \frac{j k I dl \sin\theta}{4\pi R} e^{-jkR}$
        *   $H_\phi = \frac{j k I dl \sin\theta}{4\pi R} e^{-jkR}$
        *   $S_r = \frac{1}{2} \text{Re}(E_\theta \hat{\theta} \times H_\phi^* \hat{\phi}^*) = \frac{1}{2} \text{Re}(E_\theta H_\phi^* (\hat{\theta} \times \hat{\phi})^*)$
        *   Since $\hat{\theta} \times \hat{\phi} = \hat{r}$, and $(\hat{r})^* = \hat{r}$:
        *   $S_r = \frac{1}{2} \text{Re} \left(\frac{j k I dl \sin\theta}{4\pi R} e^{-jkR} \times \frac{-j k I dl \sin\theta}{4\pi R} e^{jkR}\right)$
        *   $S_r = \frac{1}{2} \frac{k^2 |I|^2 dl^2 \sin^2\theta}{(4\pi R)^2}$
        *   $U(\theta, \phi) = R^2 S_r = \frac{k^2 |I|^2 dl^2 \sin^2\theta}{32\pi^2} = \frac{1}{32\pi^2} \left(\frac{2\pi}{\lambda}\right)^2 |I|^2 dl^2 \sin^2\theta$
        *   $U(\theta, \phi) = \frac{|I|^2 dl^2}{8\lambda^2} \sin^2\theta$

*   **Radiation Pattern:** A graphical representation of the radiation intensity as a function of direction.
    *   **3-D Pattern:** Shows the spatial distribution of radiated power. For an infinitesimal dipole, it's a torus shape with the dipole at the center of the hole, maximum radiation perpendicular to the dipole axis.
    *   **2-D Patterns:**
        *   **Elevation Pattern:** Typically, the pattern in the $xz$-plane (for a dipole along z), showing $U$ versus $\theta$ at $\phi = 0^\circ$ or $180^\circ$. This is a cardioid shape proportional to $\sin^2\theta$.
        *   **Azimuth Pattern:** Typically, the pattern in the $xy$-plane, showing $U$ versus $\phi$ at $\theta = 90^\circ$. For an infinitesimal dipole, the radiation intensity is constant ($\sin^2(90^\circ) = 1$), resulting in a circle.

*   **Directivity ($D$) and Gain ($G$):**
    *   **Directivity:** The ratio of the radiation intensity in the direction of maximum radiation to the average radiation intensity over all directions.
    *   $D_0 = \frac{U_{max}}{U_{avg}}$
    *   $U_{max} = \frac{|I|^2 dl^2}{8\lambda^2}$ (at $\theta = 90^\circ$)
    *   Total radiated power ($P_{rad}$) = $\int_0^{2\pi} \int_0^\pi U(\theta, \phi) R^2 \sin\theta d\theta d\phi$
    *   $P_{rad} = \int_0^{2\pi} \int_0^\pi \frac{|I|^2 dl^2}{8\lambda^2} \sin^2\theta R^2 \sin\theta d\theta d\phi$ (Note: $R$ is typically taken as 1 for pattern calculations. The $R^2$ in $U$ comes from $R^2 S_r$ and is implicitly handled as $U$ is power per unit solid angle, not power density). The integral is over solid angle $d\Omega = \sin\theta d\theta d\phi$.
    *   $P_{rad} = \frac{|I|^2 dl^2}{8\lambda^2} \int_0^{2\pi} d\phi \int_0^\pi \sin^3\theta d\theta$
    *   $\int_0^\pi \sin^3\theta d\theta = \int_0^\pi (1-\cos^2\theta)\sin\theta d\theta$. Let $u = \cos\theta$, $du = -\sin\theta d\theta$.
        *   $\int_1^{-1} (1-u^2)(-du) = \int_{-1}^1 (1-u^2)du = [u - \frac{u^3}{3}]_{-1}^1 = (1-\frac{1}{3}) - (-1 - (-\frac{1}{3})) = \frac{2}{3} - (-\frac{2}{3}) = \frac{4}{3}$.
    *   $P_{rad} = \frac{|I|^2 dl^2}{8\lambda^2} (2\pi) (\frac{4}{3}) = \frac{\pi |I|^2 dl^2}{3\lambda^2}$
    *   $U_{avg} = \frac{P_{rad}}{4\pi}$
    *   $D_0 = \frac{|I|^2 dl^2 / (8\lambda^2)}{(\pi |I|^2 dl^2 / (3\lambda^2)) / (4\pi)} = \frac{|I|^2 dl^2 / (8\lambda^2)}{\pi |I|^2 dl^2 / (12\lambda^2)} = \frac{12\pi}{8\pi} = 1.5$.
    *   **Directivity of an infinitesimal dipole is 1.5.**

    *   **Gain ($G$):** Ratio of the radiation intensity in the direction of maximum radiation to the total power accepted by the antenna, expressed in terms of directivity and efficiency.
        *   $G = \eta D$, where $\eta$ is the antenna efficiency.
        *   For an ideal, lossless antenna, gain equals directivity.

*   **Beamwidth:** The angular width of the main lobe, typically measured at the half-power points.
    *   For the infinitesimal dipole, the radiation pattern is $\sin^2\theta$.
    *   Half-power points occur when $\sin^2\theta = \frac{1}{2} \sin^2(90^\circ) = \frac{1}{2}$.
    *   $\sin\theta = \frac{1}{\sqrt{2}}$.
    *   $\theta = 45^\circ$ and $\theta = 135^\circ$.
    *   Beamwidth ($BW$) is the angular separation between these points: $BW = 135^\circ - 45^\circ = 90^\circ$. This is the half-power beamwidth (HPBW).

*   **Radiation Resistance ($R_r$):** The equivalent resistance that, if placed at the antenna terminals, would dissipate the same total power as radiated by the antenna.
    *   $P_{rad} = \frac{1}{2} |I_{rms}|^2 R_r$
    *   If $I$ is the peak current, $|I_{rms}| = |I|/\sqrt{2}$.
    *   $P_{rad} = \frac{1}{2} \frac{|I|^2}{2} R_r = \frac{|I|^2}{4} R_r$
    *   We found $P_{rad} = \frac{\pi |I|^2 dl^2}{3\lambda^2}$.
    *   Equating the two expressions for $P_{rad}$: $\frac{|I|^2}{4} R_r = \frac{\pi |I|^2 dl^2}{3\lambda^2}$
    *   $R_r = \frac{4\pi dl^2}{3\lambda^2} = 20\pi (\frac{dl}{\lambda})^2 \Omega$

**Important Points:**
*   The radiation pattern of an infinitesimal dipole is figure-eight in the elevation plane and circular in the azimuth plane.
*   Directivity is a measure of how focused the radiation is.
*   Radiation resistance is a crucial parameter for impedance matching and power calculations.

**Reference:** Balanis, Chapter 2.1.4 "Power Radiated by an Infinitesimal Dipole", Chapter 2.1.5 "Radiation Intensity and Directivity"

---

### **6. Applications and Limitations**

*   **Applications:**
    *   **Theoretical Basis:** Essential for understanding the radiation from more complex antennas like dipoles, monopoles, and even loop antennas (by approximating them as collections of current elements).
    *   **Short Dipoles:** Practical dipoles with lengths $l \ll \lambda$ approximate the behavior of the infinitesimal dipole, though their radiation resistance is slightly different due to end effects and current distribution.
    *   **Small Apertures:** In some cases, small apertures can be modeled as equivalent current elements.

*   **Limitations:**
    *   **Idealization:** The uniform current assumption is not strictly true for any real antenna, especially as its length approaches a significant fraction of a wavelength. The current on a finite dipole is sinusoidal.
    *   **Infinite Conductivity:** Assumes perfect conductor, hence no ohmic losses.
    *   **No End Effects:** Assumes no charge accumulation at the ends.
    *   **Limited Bandwidth:** Short antennas generally have narrow bandwidth.

**Course Outcome Alignment:**
*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** The derivation of fields and radiation intensity from the infinitesimal dipole directly explains the fundamental radiation mechanism driven by accelerating charges.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4):** The infinitesimal dipole serves as a foundational element for analyzing and understanding the radiation of more complex antennas.

---

### **7. Practice Questions and Answers**

**Q1. What are the key assumptions made in modeling an antenna as an infinitesimal dipole?**

**Answer:**
The key assumptions are:
1.  **Length much smaller than wavelength:** $dl \ll \lambda$.
2.  **Uniform current distribution:** The current is assumed to be the same amplitude and phase along the entire length of the dipole.
3.  **Ideal conductor:** No ohmic losses are considered.
4.  **No end effects:** Charges are not assumed to accumulate at the ends.

---

**Q2. Describe the radiation pattern of an infinitesimal dipole in both elevation and azimuth planes. Where is the radiation maximum and minimum?**

**Answer:**
*   **Elevation Plane (e.g., xz-plane, for dipole along z):** The radiation pattern is proportional to $\sin^2\theta$. This results in a **cardioid-like shape** with maximum radiation at $\theta = 90^\circ$ (perpendicular to the dipole axis) and zero radiation at $\theta = 0^\circ$ and $180^\circ$ (along the dipole axis).
*   **Azimuth Plane (xy-plane, for dipole along z):** The radiation pattern is proportional to $\sin^2(90^\circ) = 1$. This results in a **circular pattern** with constant radiation intensity in all directions around the dipole axis.

**Radiation Maximum:** Perpendicular to the dipole axis ($\theta = 90^\circ$).
**Radiation Minimum:** Along the dipole axis ($\theta = 0^\circ, 180^\circ$).

---

**Q3. Calculate the radiation resistance of an infinitesimal dipole of length $dl = \lambda/20$ in free space.**

**Answer:**
The radiation resistance of an infinitesimal dipole is given by:
$R_r = 20\pi (\frac{dl}{\lambda})^2 \Omega$

Given $dl = \lambda/20$:
$R_r = 20\pi (\frac{\lambda/20}{\lambda})^2 = 20\pi (\frac{1}{20})^2 = 20\pi (\frac{1}{400})$
$R_r = \frac{20\pi}{400} = \frac{\pi}{20} \Omega$

$R_r \approx \frac{3.14159}{20} \approx 0.157 \Omega$

---

**Q4. What is the directivity of an infinitesimal dipole? Explain what it signifies.**

**Answer:**
The directivity of an infinitesimal dipole is **1.5**.

**Significance:** Directivity quantifies how effectively an antenna concentrates its radiated power in a particular direction compared to an isotropic radiator (which radiates equally in all directions). A directivity of 1.5 means that the infinitesimal dipole concentrates its power 1.5 times more effectively in its direction of maximum radiation than an isotropic antenna would.

---

**Q5. Derive the expression for the total radiated power ($P_{rad}$) of an infinitesimal dipole.**

**Answer:**
The radial component of the Poynting vector in the far-field is $S_r = \frac{1}{2} \frac{k^2 |I|^2 dl^2 \sin^2\theta}{(4\pi R)^2}$.
The radiation intensity is $U(\theta, \phi) = R^2 S_r = \frac{k^2 |I|^2 dl^2 \sin^2\theta}{32\pi^2}$.

Total radiated power is the integral of radiation intensity over all solid angles:
$P_{rad} = \int_0^{2\pi} \int_0^\pi U(\theta, \phi) \sin\theta d\theta d\phi$
$P_{rad} = \int_0^{2\pi} \int_0^\pi \frac{k^2 |I|^2 dl^2 \sin^2\theta}{32\pi^2} \sin\theta d\theta d\phi$

Substitute $k = \frac{2\pi}{\lambda}$:
$P_{rad} = \int_0^{2\pi} \int_0^\pi \frac{(2\pi/\lambda)^2 |I|^2 dl^2 \sin^3\theta}{32\pi^2} d\theta d\phi$
$P_{rad} = \frac{4\pi^2 |I|^2 dl^2}{32\pi^2\lambda^2} \int_0^{2\pi} d\phi \int_0^\pi \sin^3\theta d\theta$
$P_{rad} = \frac{|I|^2 dl^2}{8\lambda^2} (2\pi) (\frac{4}{3})$
$P_{rad} = \frac{\pi |I|^2 dl^2}{3\lambda^2}$

---

### **8. Important Points to Remember**

*   The infinitesimal dipole is the fundamental radiating element.
*   Radiation is caused by accelerating charges (time-varying current).
*   The far-field of an infinitesimal dipole consists of transverse electric and magnetic fields, propagating as a wave.
*   The radiation pattern is directional, with maximum radiation perpendicular to the dipole axis.
*   Directivity of an infinitesimal dipole is 1.5.
*   Radiation resistance depends on the square of the ratio of dipole length to wavelength ($dl/\lambda$).
*   The infinitesimal dipole model simplifies analysis but has limitations due to its idealized assumptions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **9. Textbook and Reference Material Alignment**

This topic is primarily covered in:

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):** Chapter 2, specifically sections on the infinitesimal dipole. This is the primary reference for the detailed derivations and equations presented.
*   **Antennas and radio Wave propagation by R.E.Collin (McGraw Hill, 2/e, 2001):** May offer alternative derivations or perspectives.
*   **Microwave Engineering by David M. Pozar (Wiley India, 4/e, 2012):** While primarily on microwave circuits, it might touch upon basic antenna elements like the dipole as sources.
*   **Antenna and Wave Propagation by Raju GSN (Pearson, 1/e, 2009):** Likely covers the infinitesimal dipole as a foundational topic.
*   **Modern Antenna Design, by Thomas A. Milligan (IEEE PRESS, Wiley Inter science, 2/e, 2005):** Could provide practical context or simplified explanations.

---

### **10. Course Outcome Mapping**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** This topic is the cornerstone of understanding radiation. The derivation of fields and Poynting vector from the infinitesimal dipole demonstrates the physical process of electromagnetic wave generation from an oscillating current.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4):** The infinitesimal dipole is a building block. Understanding its radiation characteristics (fields, patterns, resistance) is essential for analyzing how combinations of such elements form more complex antennas (like finite dipoles, arrays, etc.) and for making initial design choices.