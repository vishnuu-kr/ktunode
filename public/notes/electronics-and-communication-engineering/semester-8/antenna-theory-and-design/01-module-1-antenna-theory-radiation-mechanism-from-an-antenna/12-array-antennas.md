---
title: "Array antennas"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7ce"
status: "completed"
scrapedAt: "2026-05-23T18:11:40.873Z"
---
# ANTENNA THEORY AND DESIGN - Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Array Antennas

### Introduction

Array antennas are fundamental to modern antenna engineering, enabling enhanced performance characteristics like increased directivity, beam steering, and the ability to shape radiation patterns. This topic delves into the principles behind array antennas, their analysis, and common design considerations. This aligns with **CO1: Analyse the radiation mechanism of antennas (K3)** and provides foundational knowledge for **CO3: Analyse and design advanced antennas (K4)**.

### 1. What is an Antenna Array?

An antenna array is a collection of individual radiating elements arranged in a specific geometric configuration and fed with excitation signals (currents or voltages) that are phased and amplitude-controlled to produce a desired overall radiation pattern.

*   **Individual Elements:** These can be any basic radiating structure, such as dipoles, monopoles, slots, or horns.
*   **Geometric Configuration:** Refers to the spatial arrangement of the elements (e.g., linear, planar, circular).
*   **Excitation Signals:** The amplitude and phase of the signals fed to each element determine the array's radiation characteristics.

**Key Concept:** The total radiation pattern of an array is the vector sum of the individual element patterns, modified by the array factor, which accounts for the geometrical arrangement and excitations of the elements.

*   **Balanis (4th Ed., Chapter 5):** Provides a comprehensive treatment of array antennas, starting with basic concepts of linear arrays.

### 2. Array Factor (AF)

The array factor is a mathematical expression that describes the radiation pattern of an array of point sources, assuming each source radiates identically and isotropically (or with a specified pattern). It essentially represents the contribution of the spatial arrangement and excitation of the elements to the overall radiation pattern.

*   **Fundamental Principle:** The total electric field (or radiated power) from an array is the superposition of the fields from individual elements.
*   **Superposition Principle:** The electric field at a distant point from an array is the phasor sum of the electric fields produced by each individual element at that point.

**Mathematical Representation (for a linear array of $N$ isotropic point sources):**

Consider $N$ isotropic point sources located along the z-axis, separated by a distance $d$. Let the position of the $m$-th element be $z_m = (m-1)d$ for $m = 1, 2, \dots, N$. The sources are excited with currents $I_m$ and phases $\alpha_m$.

The electric field at a point $P$ in spherical coordinates $(\theta, \phi)$ can be expressed as:

$E(\theta, \phi) = E_0 \sum_{m=1}^{N} I_m e^{j \alpha_m} e^{j (m-1)kd \cos(\theta)}$

where:
*   $E_0$ is the field produced by a single element (assumed to be the same for all elements).
*   $k = 2\pi/\lambda$ is the wavenumber.
*   $d$ is the spacing between elements.
*   $I_m$ is the amplitude of the current excitation for the $m$-th element.
*   $\alpha_m$ is the phase of the current excitation for the $m$-th element.

The **Array Factor (AF)** is defined as the part of the expression that depends on the geometry and excitations, excluding the pattern of the individual element and the amplitude/phase of a single element:

$AF(\theta) = \sum_{m=1}^{N} I_m e^{j \alpha_m} e^{j (m-1)kd \cos(\theta)}$

If all elements have the same amplitude and phase offset $\alpha$, and are located at $z_m = (m - \frac{N+1}{2})d$, the AF simplifies. For $N$ elements, with uniform spacing $d$, uniform amplitude $I$, and uniform phase progression $\alpha$:

$AF(\theta) = I \sum_{m=1}^{N} e^{j [\alpha + (m-1)kd \cos(\theta)]}$

For a uniform linear array (ULA) of $N$ isotropic elements with spacing $d$, excited with uniform amplitude $I$ and uniform phase shift $\alpha$ between adjacent elements:

$AF(\theta) = \sum_{n=0}^{N-1} e^{j(n \alpha + nkd \cos\theta)} = \sum_{n=0}^{N-1} e^{j n (\alpha + kd \cos\theta)}$

This is a geometric series with sum:

$AF(\theta) = \frac{\sin\left(\frac{N(\alpha + kd \cos\theta)}{2}\right)}{\sin\left(\frac{\alpha + kd \cos\theta}{2}\right)}$

**Important Points:**
*   The AF is independent of the individual element's radiation pattern.
*   The total pattern is $E(\theta, \phi) = F(\theta, \phi) \times AF(\theta, \phi)$, where $F(\theta, \phi)$ is the element factor.
*   The main beam direction is determined by the phase progression $\alpha$.

*   **Collin (2/e, Chapter 7):** Discusses array factor and its properties in detail.
*   **Kraus (3/e, Chapter 10):** Covers fundamental array theory and calculations.

### 3. Types of Antenna Arrays

Arrays can be classified based on several criteria:

#### 3.1 Based on Geometry:

*   **Linear Arrays:** Elements arranged along a straight line.
    *   **Uniform Linear Array (ULA):** Elements are equally spaced, and excitations are uniform in amplitude and phase progression.
    *   **Non-uniform Linear Array:** Spacing, amplitude, or phase (or a combination) is not uniform.
*   **Planar Arrays:** Elements arranged on a plane.
    *   **Rectangular Array:** Elements at the vertices of a rectangular grid.
    *   **Circular Array:** Elements arranged on a circle.
*   **Areal Arrays (or Surface Arrays):** Elements arranged over a two-dimensional area, often in a non-regular fashion.

#### 3.2 Based on Excitation:

*   **Uniform Arrays:** All elements have the same amplitude and spacing.
*   **Non-uniform Arrays:** Amplitude and/or phase of excitations vary between elements. This is crucial for pattern synthesis (e.g., Taylor, Chebyshev arrays).

#### 3.3 Based on Radiation Pattern:

*   **Broadside Array:** The main beam is perpendicular to the array axis.
*   **End-fire Array:** The main beam is along the array axis.
*   **Chebyshev Array:** Designed to have equal side lobe levels.
*   **Taylor Array:** Designed to have a desired side lobe level with a taper and a wider main beam than Chebyshev.

### 4. Linear Arrays - Detailed Analysis

#### 4.1 Broadside Array

*   **Condition for Broadside:** The main beam points in the direction perpendicular to the array axis (broadside). For a linear array along the z-axis, this means $\theta = 90^\circ$ or $\cos\theta = 0$.
*   **Phase Progression:** To achieve broadside radiation, the phase progression $\alpha$ must be set such that the argument of the AF's sine function is zero at $\theta = 90^\circ$.
    *   $\alpha + kd \cos(90^\circ) = 0 \implies \alpha = 0$.
    *   Thus, a broadside array requires zero phase progression between adjacent elements.

*   **Array Factor for Broadside:**
    $AF(\theta) = \frac{\sin\left(\frac{Nk d \cos\theta}{2}\right)}{\sin\left(\frac{kd \cos\theta}{2}\right)}$

*   **Condition for Maximum Radiation:** The maximum of the AF occurs when $\alpha + kd \cos\theta = 0$. For broadside, $\alpha=0$, so $kd \cos\theta = 0$. This implies $\cos\theta = 0$, hence $\theta = 90^\circ$.

*   **Spacing for Single Main Lobe:** To avoid grating lobes, the maximum of the AF should occur only at the desired beam direction. A grating lobe appears when the phase term $\alpha + kd \cos\theta$ becomes a multiple of $2\pi$ for directions other than the main beam.
    *   For a broadside array with $\alpha=0$, the AF is maximum at $\theta = 90^\circ$ (main beam).
    *   A grating lobe would occur if $kd \cos\theta = \pm 2\pi m$ for some integer $m$.
    *   The first grating lobe occurs when $kd = 2\pi$ (or $d = \lambda$). If $d > \lambda$, grating lobes will appear at other angles.
    *   **Condition to avoid grating lobes:** $|kd \cos\theta| < 2\pi$ for all $\theta$. The most restrictive condition is at $\theta = 0^\circ$ or $\theta = 180^\circ$ where $|\cos\theta|=1$. So, $kd < 2\pi$, which means $d < \lambda$.
    *   **Typical spacing for broadside arrays is $d \le \lambda/2$ to ensure a single main beam and reasonable side lobe levels.**

*   **Half-Power Beamwidth (HPBW):** The angular width of the main beam at half the maximum power. For a broadside array, the main beam is centered at $\theta = 90^\circ$.
    *   The nulls occur when $\frac{N(\alpha + kd \cos\theta)}{2} = \pm n\pi$ for $n = 1, 2, \dots, N-1$.
    *   With $\alpha=0$, nulls are at $Nkd \cos\theta = \pm 2n\pi$.
    *   The first nulls ($n=1$) are at $kd \cos\theta = \pm 2\pi/N$.
    *   HPBW is approximately related to the angle between the first nulls. A common approximation for the HPBW of a uniform linear array in terms of the angle $\psi = kd \cos\theta$ is $\Delta\psi \approx 2\pi/N$.
    *   In terms of $\theta$: $\cos\theta_{HP1} - \cos\theta_{HP2} \approx 2\pi/N$. Since $\cos\theta$ is roughly linear around $\theta=90^\circ$ ($\cos\theta \approx \pi/2 - \theta$ in radians), $\Delta\theta \approx \frac{2\pi}{Nkd}$.

*   **Balanis (4th Ed., Chapter 5.2):** Detailed derivation and analysis of the uniform linear broadside array.

#### 4.2 End-fire Array

*   **Condition for End-fire:** The main beam points along the array axis ($\theta = 0^\circ$ or $\theta = 180^\circ$).
*   **Phase Progression:** To achieve end-fire radiation, the phase progression $\alpha$ must be such that the maximum of the AF occurs at $\theta = 0^\circ$ or $\theta = 180^\circ$.
    *   For $\theta = 0^\circ$, $\cos\theta = 1$. The condition for maximum is $\alpha + kd = 0$, so $\alpha = -kd$.
    *   For $\theta = 180^\circ$, $\cos\theta = -1$. The condition for maximum is $\alpha - kd = 0$, so $\alpha = kd$.

*   **Array Factor for End-fire (with $\alpha = -kd$ for $\theta = 0^\circ$ beam):**
    $AF(\theta) = \frac{\sin\left(\frac{N(kd \cos\theta - kd)}{2}\right)}{\sin\left(\frac{kd \cos\theta - kd}{2}\right)} = \frac{\sin\left(\frac{Nk d ( \cos\theta - 1)}{2}\right)}{\sin\left(\frac{k d (\cos\theta - 1)}{2}\right)}$

*   **Grating Lobes in End-fire Arrays:**
    *   The main beam is at $\theta=0^\circ$, where $\cos\theta=1$.
    *   A grating lobe occurs when $\alpha + kd \cos\theta = \pm 2\pi m$.
    *   Substituting $\alpha = -kd$, we get $-kd + kd \cos\theta = \pm 2\pi m$.
    *   $kd(\cos\theta - 1) = \pm 2\pi m$.
    *   If $d=\lambda$, then $2\pi(\cos\theta - 1) = \pm 2\pi m$.
    *   For $m=0$, $2\pi(\cos\theta - 1) = 0 \implies \cos\theta = 1 \implies \theta = 0^\circ$ (main beam).
    *   For $m=1$, $2\pi(\cos\theta - 1) = \pm 2\pi \implies \cos\theta - 1 = \pm 1$.
        *   $\cos\theta - 1 = 1 \implies \cos\theta = 2$ (impossible).
        *   $\cos\theta - 1 = -1 \implies \cos\theta = 0 \implies \theta = 90^\circ$.
    *   So, if $d=\lambda$, a grating lobe appears at $\theta=90^\circ$.
    *   **Condition to avoid grating lobes for end-fire:** The beam direction $\theta=0^\circ$ requires $kd(\cos\theta-1)=0$. A grating lobe at $\theta=90^\circ$ requires $kd(\cos(90^\circ)-1) = kd(-1) = \pm 2\pi m$. For $m=1$, $-kd = \pm 2\pi$, so $kd = 2\pi$ or $d=\lambda$.
    *   **To avoid grating lobes in end-fire arrays, the spacing must be $d < \lambda$.** For end-fire, this condition is more critical than for broadside. A common practical choice is $d \approx \lambda/4$ or $d \approx \lambda/2$.

*   **Hansen-Woodyard Condition:** For end-fire arrays, the beamwidth can be narrowed by slightly increasing the phase shift beyond the theoretical end-fire value. This is known as the Hansen-Woodyard condition.
    *   The phase shift $\alpha$ is adjusted to $\alpha = -kd + \delta$, where $\delta$ is a small positive increment.
    *   This shifts the main beam slightly off the end-fire direction but significantly narrows the beam and increases directivity.

*   **Balanis (4th Ed., Chapter 5.3):** Covers end-fire arrays and the Hansen-Woodyard condition.

#### 4.3 Side Lobes and Directivity

*   **Side Lobes:** Peaks in the radiation pattern away from the main beam. They represent radiated power in undesired directions.
*   **Grating Lobes:** Strong side lobes that occur when the spacing between elements is too large, causing a maximum in the AF at an angle other than the intended main beam direction.
*   **Side Lobe Level (SLL):** The ratio of the power in the strongest side lobe to the power in the main beam. Lower SLL is generally desirable.
*   **Directivity (D):** A measure of the antenna's ability to concentrate radiated power in a particular direction.
    $D = \frac{4\pi U_{max}}{P_{rad}}$, where $U_{max}$ is the maximum radiation intensity and $P_{rad}$ is the total radiated power.
*   **Directivity of an Array:** The directivity of an array is approximately the product of the directivity of a single element and the number of elements, multiplied by the array gain due to constructive interference.
    $D_{array} \approx N \times D_{element}$ (for a uniformly excited array with spacing $d < \lambda$).
    More accurately, $D_{array} = D_{element} \times (\text{Array Gain})$.
    The array gain is proportional to the maximum value of the AF squared.

*   **Balanis (4th Ed., Chapter 5.4):** Discusses beamwidth, side lobes, and directivity for uniform linear arrays.

#### 4.4 Non-uniform Linear Arrays (Pattern Synthesis)

*   **Purpose:** To control the side lobe levels or shape the radiation pattern to meet specific requirements (e.g., beam shaping, null steering).
*   **Methods:**
    *   **Chebyshev Array:** Achieves equal side lobe levels. The excitation amplitudes are non-uniform, tapered from the center to the edges.
    *   **Taylor Array:** Achieves a desired side lobe level with a tapered distribution of amplitudes and a wider main beam than Chebyshev. It provides a compromise between side lobe suppression and main beam width.
    *   **Butterworth Array:** Provides a maximally flat main beam with a rapid decrease in side lobes.
    *   **Dolby Array:** Minimizes the maximum side lobe level.

*   **Key Concept:** By adjusting the amplitude and phase of the excitations to each element, the array factor can be shaped to achieve desired radiation patterns. This involves solving systems of equations based on the desired pattern characteristics.

*   **Balanis (4th Ed., Chapter 5.5 & 5.6):** Detailed coverage of pattern synthesis techniques like Chebyshev and Taylor arrays.
*   **Garg (2001, Chapter 7):** Microstrip arrays, including design of shaped patterns.

**Example: Uniform Linear Array (ULA) - Broadside**

Consider a ULA of 4 isotropic elements with spacing $d = \lambda/2$.
The Array Factor is:
$AF(\theta) = \frac{\sin\left(\frac{4 (kd \cos\theta)}{2}\right)}{\sin\left(\frac{kd \cos\theta}{2}\right)} = \frac{\sin(2 kd \cos\theta)}{\sin(kd \cos\theta)}$

With $d = \lambda/2$, $kd = k(\lambda/2) = (2\pi/\lambda)(\lambda/2) = \pi$.
$AF(\theta) = \frac{\sin(2 \pi \cos\theta)}{\sin(\pi \cos\theta)}$

The main beam is at $\theta = 90^\circ$ ($\cos\theta=0$).
Nulls occur when $2\pi \cos\theta = \pm n\pi$, i.e., $\cos\theta = \pm n/2$.
For $n=1$, $\cos\theta = \pm 1/2$, so $\theta = 60^\circ$ and $120^\circ$.
For $n=2$, $\cos\theta = \pm 1$, so $\theta = 0^\circ$ and $180^\circ$. These are the end-fire directions.

**Practice Question 1:**
A uniform linear array of 10 isotropic elements with spacing $d = \lambda/2$ is excited for broadside radiation. What is the approximate half-power beamwidth (HPBW) in degrees?

**Answer 1:**
For a ULA, HPBW (in radians) is approximately $\Delta\theta \approx \frac{2\pi}{Nkd \sin\theta_0}$, where $\theta_0$ is the beam direction. For broadside, $\theta_0 = 90^\circ$ and $\sin\theta_0 = 1$.
$N=10$, $d=\lambda/2 \implies kd = \pi$.
$\Delta\theta \approx \frac{2\pi}{10 \times \pi \times 1} = \frac{2\pi}{10\pi} = \frac{1}{5}$ radians.
In degrees: $\frac{1}{5} \times \frac{180}{\pi} \approx 11.46^\circ$.
A more accurate calculation for HPBW using the first nulls:
Nulls are at $Nkd \cos\theta = \pm n\pi$, so $\cos\theta = \pm \frac{n\pi}{Nkd}$.
For $N=10, d=\lambda/2 \implies kd=\pi$, $\cos\theta = \pm \frac{n\pi}{10\pi} = \pm \frac{n}{10}$.
First nulls ($n=1$): $\cos\theta = \pm 0.1$. $\theta_{null1} = \arccos(0.1) \approx 84.26^\circ$, $\theta_{null2} = \arccos(-0.1) \approx 95.74^\circ$.
The angle between nulls is $95.74^\circ - 84.26^\circ = 11.48^\circ$. This is close to the HPBW.

### 5. Planar Arrays

Planar arrays have elements arranged on a 2D surface. They offer higher directivity and the ability to steer the beam in two dimensions.

#### 5.1 Rectangular Planar Arrays

*   Elements are arranged on a rectangular grid with spacing $d_x$ along the x-axis and $d_y$ along the y-axis.
*   The array factor is the product of the AFs in the x and y directions:
    $AF(u, v) = \left(\sum_{n=0}^{N_x-1} e^{j[n\alpha_x + nk_x d_x]}\right) \times \left(\sum_{m=0}^{N_y-1} e^{j[m\alpha_y + mk_y d_y]}\right)$
    where $u = k \sin\theta \cos\phi$, $v = k \sin\theta \sin\phi$, $k_x = k \sin\theta \cos\phi$, $k_y = k \sin\theta \sin\phi$.

*   **Independent Beam Steering:** The phase progressions $\alpha_x$ and $\alpha_y$ control the beam direction in the $\theta$ and $\phi$ planes, respectively.
    *   Main beam direction $(\theta_0, \phi_0)$:
        *   $\alpha_x + k d_x \sin\theta_0 \cos\phi_0 = 0$
        *   $\alpha_y + k d_y \sin\theta_0 \sin\phi_0 = 0$

*   **Grating Lobes:** Grating lobes can occur if the spacing $d_x$ or $d_y$ is too large.
    *   Condition to avoid grating lobes: $|kd_x \sin\theta \cos\phi| < 2\pi$ and $|kd_y \sin\theta \sin\phi| < 2\pi$.
    *   The most critical condition occurs when $\sin\theta=1$. So, $d_x < \lambda$ and $d_y < \lambda$.
    *   **For most practical planar arrays, $d_x \approx \lambda/2$ and $d_y \approx \lambda/2$ is used to avoid grating lobes and maintain reasonable side lobe levels.**

*   **Balanis (4th Ed., Chapter 6):** Detailed discussion of planar arrays, including rectangular and circular configurations.

#### 5.2 Circular Arrays

*   Elements are arranged on a circle of radius $R$.
*   The analysis involves Bessel functions due to the circular symmetry.
*   Circular arrays can achieve omnidirectional patterns in the plane of the circle and can steer beams in 3D.

*   **Balanis (4th Ed., Chapter 6.5):** Covers circular arrays.

### 6. Phased Arrays

Phased arrays are a type of array antenna where the direction of the main beam is controlled electronically by changing the phase of the signals fed to each element, rather than by physically moving the antenna.

*   **Key Feature:** Electronic beam steering.
*   **Components:**
    *   **Radiating Elements:** Usually a large number of small elements (e.g., dipoles, patches).
    *   **Phase Shifters:** Components that introduce controllable phase shifts to the signal for each element. These can be analog (e.g., ferrite, varactor diode) or digital.
    *   **Beamforming Network:** Distributes the signals to the elements and combines signals from elements in receive mode.
*   **Operation:** By applying specific phase shifts to each element, the constructive interference of the radiated waves can be steered to a desired direction.
*   **Applications:** Radar systems, satellite communications, wireless communication systems.

*   **Advantages:**
    *   Rapid beam steering without mechanical movement.
    *   Multiple beams can be generated simultaneously.
    *   High reliability (no moving parts).

*   **Disadvantages:**
    *   Complexity and cost due to phase shifters and control circuitry.
    *   Scan loss: The gain and beamwidth of the array vary as the beam is scanned away from the broadside direction. This is due to element pattern changes and polarization effects.

*   **Balanis (4th Ed., Chapter 5.7):** Discusses phased arrays and beam steering.
*   **Pozar (4th Ed., Chapter 9):** Microwave Engineering aspects of phased arrays.
*   **Milligan (2nd Ed., Chapter 11):** Practical aspects of phased array design.

**Example: Beam Steering in a Linear Array**

For a ULA with spacing $d$, the main beam direction is given by $\alpha + kd \cos\theta = 0$.
To steer the beam to $\theta_0$, the phase progression $\alpha$ should be set as $\alpha = -kd \cos\theta_0$.

If we steer the beam from broadside ($\theta_0=90^\circ$, $\cos\theta_0=0 \implies \alpha=0$) to an angle $\theta_0 = 30^\circ$, the required phase shift is $\alpha = -kd \cos(30^\circ) = -kd (\sqrt{3}/2)$.

**Scan Loss:** As the beam is steered away from broadside, the element pattern that was originally designed for broadside may not have the same gain or phase response in the steered direction. This leads to a reduction in the array's gain, known as scan loss. The element pattern $F(\theta)$ needs to be considered in the steered direction. The array factor for a steered beam is maximum at $\theta_0$. The actual pattern is $E(\theta) = F(\theta) \times AF(\theta)$. The gain at $\theta_0$ will be $G(\theta_0) \propto |F(\theta_0)|^2 \times |AF(\theta_0)|^2_{max}$. As $\theta$ deviates from $90^\circ$ for a broadside-designed element, $|F(\theta)|$ typically decreases, causing scan loss.

### 7. Array Antennas in Specific Contexts

*   **Microstrip Arrays:** For planar arrays, microstrip patch antennas are often used as elements due to their low profile, light weight, and ease of integration. Design considerations include element spacing, corporate feed networks, and beam steering.
    *   **Garg (2001, Chapter 7):** Covers design of microstrip patch arrays for various applications.
    *   **Choudhury (2/e, 2023):** Reconfigurable antennas, which often employ array structures, are discussed.

*   **Metamaterial Arrays:** Metamaterials can be used to create novel array antennas with enhanced properties, such as improved bandwidth, beam shaping, or reduced size.
    *   **Singh, Abegaonkar, Koul (2/e, 2021):** Discusses metamaterial applications in antenna design, including arrays.

### 8. Summary of Important Points to Remember

*   **Array Factor (AF):** Represents the contribution of element arrangement and excitation to the radiation pattern.
*   **Total Pattern = Element Pattern × Array Factor.**
*   **Uniform Linear Array (ULA):** Simplest form, with uniform spacing and excitation.
*   **Broadside Array:** Main beam perpendicular to the array axis ($\alpha=0$). Requires $d \le \lambda$ to avoid grating lobes.
*   **End-fire Array:** Main beam along the array axis ($\alpha = \pm kd$). Requires $d < \lambda$ to avoid grating lobes.
*   **Grating Lobes:** Appear when $d \ge \lambda$ in broadside arrays or when $d \ge \lambda$ in end-fire arrays, causing significant power in undesired directions.
*   **Pattern Synthesis:** Non-uniform excitation (amplitude/phase tapering) is used to control side lobe levels (Chebyshev, Taylor).
*   **Planar Arrays:** Offer 2D beam steering and higher directivity. Rectangular arrays have AF as a product of linear AFs.
*   **Phased Arrays:** Electronic beam steering achieved by controlling element phases. Offers rapid, mechanical-free steering but can suffer from scan loss.
*   **Spacing:** Typically $d \le \lambda/2$ for linear arrays and $d_x, d_y \le \lambda/2$ for planar arrays to avoid grating lobes and manage side lobes.

### Practice Questions

1.  A linear array of 8 isotropic elements has a spacing of $d = 0.3\lambda$. If the array is fed with uniform amplitude and a progressive phase shift of $-60^\circ$ per element, at what angle $\theta$ will the main beam be directed? (Assume the array is along the z-axis).
2.  What is the condition on element spacing $d$ for a uniform linear end-fire array to avoid grating lobes? Explain why.
3.  An array of dipoles is designed to have a beam width of $10^\circ$. If the element factor is nearly constant over the main beam, how would you expect the directivity of this array to vary with the number of elements $N$?
4.  Differentiate between a broadside array and an end-fire array in terms of phase progression and main beam direction.
5.  What is the primary advantage of a phased array over a mechanically steered array? What is a potential disadvantage?

### Answers to Practice Questions

1.  **Answer:** The main beam direction $\theta_0$ for a uniform linear array is given by $\alpha + kd \cos\theta_0 = 0$.
    Here, $N=8$, $d=0.3\lambda$, $\alpha = -60^\circ = -\pi/3$ radians.
    $k = 2\pi/\lambda$.
    $kd = (2\pi/\lambda)(0.3\lambda) = 0.6\pi$.
    So, $-\pi/3 + 0.6\pi \cos\theta_0 = 0$.
    $0.6\pi \cos\theta_0 = \pi/3$.
    $\cos\theta_0 = \frac{\pi/3}{0.6\pi} = \frac{1/3}{6/10} = \frac{1}{3} \times \frac{10}{6} = \frac{10}{18} = \frac{5}{9}$.
    $\theta_0 = \arccos(5/9) \approx 56.25^\circ$.

2.  **Answer:** For a uniform linear end-fire array, the phase progression is $\alpha = -kd$ (for beam along $\theta=0^\circ$). The array factor maxima occur when $\alpha + kd \cos\theta = 2\pi m$.
    Substituting $\alpha = -kd$: $-kd + kd \cos\theta = 2\pi m$.
    $kd(\cos\theta - 1) = 2\pi m$.
    The main beam is at $\theta=0^\circ$, where $\cos\theta=1$, so $kd(1-1)=0$, which is $0=2\pi m$ for $m=0$.
    A grating lobe occurs when $m=1$: $kd(\cos\theta - 1) = 2\pi$.
    If $d=\lambda$, then $2\pi(\cos\theta - 1) = 2\pi \implies \cos\theta - 1 = 1 \implies \cos\theta = 2$ (impossible).
    However, if we consider another direction, say $\theta=90^\circ$ (broadside), $\cos\theta=0$. The condition becomes $kd(0-1) = -kd = 2\pi m$.
    For $m=-1$, $-kd = -2\pi$, which means $kd=2\pi$, or $d=\lambda$.
    Therefore, if $d=\lambda$, a grating lobe appears at $\theta=90^\circ$.
    To avoid grating lobes, the spacing must be $d < \lambda$.

3.  **Answer:** The directivity of an array is approximately proportional to the number of elements $N$, provided that the spacing is less than $\lambda$ and side lobes are not too large. For a fixed beam width of $10^\circ$, the directivity is roughly proportional to $N$. So, as $N$ increases, the directivity increases. The directivity of an array can be approximated as $D_{array} \approx N \times D_{element}$ for a uniform array. Thus, the directivity would increase linearly with $N$.

4.  **Answer:**
    *   **Broadside Array:**
        *   Phase Progression ($\alpha$): Zero ($\alpha=0$).
        *   Main Beam Direction: Perpendicular to the array axis (e.g., $\theta = 90^\circ$ for a linear array).
    *   **End-fire Array:**
        *   Phase Progression ($\alpha$): Equal and opposite to the phase shift due to spacing along the array axis ($\alpha = \pm kd$).
        *   Main Beam Direction: Along the array axis (e.g., $\theta = 0^\circ$ or $\theta = 180^\circ$ for a linear array).

5.  **Answer:**
    *   **Primary Advantage:** Electronic beam steering without mechanical movement, allowing for rapid and agile beam repositioning.
    *   **Potential Disadvantage:** Scan loss, where the gain and efficiency of the array decrease as the beam is steered away from the broadside direction. This is due to variations in element patterns and polarization mismatch as the scan angle increases.

This comprehensive set of notes covers the fundamental aspects of array antennas, their analysis, types, and applications, aligning with the learning outcomes and course objectives. The provided references are essential for deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
