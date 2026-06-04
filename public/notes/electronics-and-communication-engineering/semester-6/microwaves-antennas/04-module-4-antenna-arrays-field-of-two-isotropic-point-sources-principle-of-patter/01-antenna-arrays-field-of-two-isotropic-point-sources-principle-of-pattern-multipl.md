---
title: "Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb2"
status: "completed"
scrapedAt: "2026-05-23T18:01:44.550Z"
---
# MICROWAVES & ANTENNAS - Module 4: Antenna Arrays

This module delves into the fascinating world of antenna arrays, which are combinations of multiple antenna elements to achieve desired radiation characteristics. We will explore the fundamental principles, design techniques, and advanced concepts related to antenna arrays.

**Course Outcomes Addressed:**

*   **CO3:** Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques (Knowledge Level: K2) - *This module directly contributes to understanding how arrays shape radiation patterns.*
*   **CO4:** Design important broadband antennas and arrays (Knowledge Level: K3) - *This module provides the foundation for designing specific types of arrays, including broadband configurations.*

**Learning Outcomes Addressed:**

*   Field of two isotropic point sources
*   Principle of pattern multiplication
*   Array factor
*   Linear arrays of ‘n’ isotropic point sources with equal amplitude
*   Grating lobes
*   Design of Broadside and End fire arrays
*   Phased array principle
*   Adaptive antenna array principle

---

## 1. Field of Two Isotropic Point Sources

An isotropic point source radiates uniformly in all directions. When we consider two such sources, their combined field at a distant point is the vector sum of the fields from each individual source.

**Key Concepts:**

*   **Isotropic Source:** An idealized antenna that radiates power equally in all directions. Its radiation pattern is a sphere.
*   **Superposition Principle:** The total field at a point due to multiple sources is the vector sum of the fields from each individual source.
*   **Phase Difference:** The difference in phase between the signals fed to the array elements. This is crucial for steering the radiation pattern.
*   **Path Difference:** The difference in distance traveled by the waves from each source to the observation point.

**Derivation (Simplified):**

Consider two isotropic point sources, $S_1$ and $S_2$, separated by a distance $d$. Let them be fed with signals of equal amplitude $A$ and a phase difference of $\delta$.

*   The field from $S_1$ at an observation point $P$ is $E_1 = A e^{-jkR_1}$, where $R_1$ is the distance from $S_1$ to $P$.
*   The field from $S_2$ at $P$ is $E_2 = A e^{j\delta} e^{-jkR_2}$, where $R_2$ is the distance from $S_2$ to $P$, and $e^{j\delta}$ represents the phase shift.

The total field $E_{total} = E_1 + E_2 = A e^{-jkR_1} + A e^{j\delta} e^{-jkR_2}$.

For a far-field observation point, the path difference $R_1 - R_2$ is related to the observation angle $\theta$ (measured from the line connecting the sources) and the distance $d$ between the sources: $R_1 - R_2 \approx d \cos\theta$ (assuming the observation point is far away, perpendicular to the array axis).

Let's assume a uniform linear array along the z-axis, with sources at $z_1 = 0$ and $z_2 = d$. For a far-field point in the xz-plane, the distance difference is $R_1 - R_2 = d \cos\theta$.

Then, $E_{total} = A e^{-jkR_1} (1 + e^{j(\delta - k(R_2-R_1))})$.
$E_{total} = A e^{-jkR_1} (1 + e^{j(\delta + kd \cos\theta)})$.

The magnitude of the total field is $|E_{total}| = |A(1 + e^{j(\delta + kd \cos\theta)})|$.
This can be expressed in terms of the phase difference $\phi = \delta + kd \cos\theta$.
$|E_{total}| = |A(1 + \cos\phi + j\sin\phi)| = |A| \sqrt{(1+\cos\phi)^2 + \sin^2\phi}$
$|E_{total}| = |A| \sqrt{1 + 2\cos\phi + \cos^2\phi + \sin^2\phi} = |A| \sqrt{2(1 + \cos\phi)}$
Using $1 + \cos\phi = 2\cos^2(\phi/2)$:
$|E_{total}| = |A| \sqrt{4\cos^2(\phi/2)} = 2|A| |\cos(\phi/2)|$.

So, the radiation pattern of two isotropic sources depends on the phase difference $\delta$ and the position of the observation point.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Chapter on Array Antennas provides detailed derivations for the field of multiple isotropic sources.
*   **Raju, G S N (Antennas and Wave Propagation):** Similar derivations can be found in their sections on antenna arrays.

---

## 2. Principle of Pattern Multiplication

The principle of pattern multiplication states that the radiation pattern of a multiple-element array can be obtained by multiplying the pattern of a single element by the array factor. This principle simplifies the analysis of complex antenna arrays.

**Key Concepts:**

*   **Array Factor (AF):** The radiation pattern of an array of point sources, assuming each source is isotropic. It describes how the arrangement and excitation of the elements influence the overall radiation.
*   **Element Factor (EF):** The radiation pattern of a single element of the array, when it is used in isolation.
*   **Total Pattern (or Array Pattern):** The product of the array factor and the element factor.

**Mathematical Representation:**

$E_{total}(\theta, \phi) = EF(\theta, \phi) \times AF(\theta, \phi)$

This principle is valid under the following conditions:

1.  **Uniform Excitation:** All elements are fed with the same amplitude.
2.  **Linear Arrangement:** Elements are arranged in a linear fashion.
3.  **In-phase or Progressive Phase Excitation:** The phase difference between elements is uniform across the array.

**Significance:**

*   **Simplification:** Allows for independent analysis of element behavior and array geometry.
*   **Design Flexibility:** Enables tailoring the overall pattern by choosing appropriate elements and array configurations.

**Example:**

Consider a broadside array of two dipoles. The pattern of a single dipole has nulls and maxima. The array factor will introduce additional lobes and nulls based on the spacing and phase. The product of these two will give the final radiation pattern of the two-dipole array.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** This is a fundamental principle discussed early in their array antenna chapters.
*   **Liao, Samuel Y (Microwave Devices & Circuits):** May touch upon this principle in the context of array antennas.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Likely to explain this in their antenna sections.

---

## 3. Array Factor (AF)

The array factor is a crucial concept for understanding the radiation pattern of antenna arrays. It represents the contribution of the spatial arrangement and excitation of the array elements to the overall radiation pattern.

**Key Concepts:**

*   **Definition:** The array factor is the radiation pattern that would be obtained from an array of point sources (usually isotropic) with the same spacing and excitation as the array elements, but neglecting the pattern of the individual elements.
*   **Dependence:** The AF depends on:
    *   The number of elements ($N$).
    *   The spacing between elements ($d$).
    *   The phase difference between adjacent elements ($\delta$).
    *   The direction of observation ($\theta$, $\phi$).

**Derivation for a Uniform Linear Array of N Isotropic Point Sources:**

Consider a linear array of $N$ isotropic point sources located at $z_i = (i-1)d$ for $i = 1, 2, ..., N$. Assume each source is fed with equal amplitude $A$ and a progressive phase shift $\delta$ between adjacent elements.

The phase of the $i$-th source relative to the first source (at $z=0$) is $(i-1)\delta$.
The distance from the $i$-th source to an observation point $P$ in the far field is $R_i \approx R_0 - (i-1)d\cos\theta$, where $R_0$ is the distance to the first element and $\theta$ is the angle from the array axis.

The field from the $i$-th element is $E_i = A e^{j(i-1)\delta} e^{-jkR_i}$.
Substituting $R_i \approx R_0 - (i-1)d\cos\theta$:
$E_i = A e^{j(i-1)\delta} e^{-jk(R_0 - (i-1)d\cos\theta)}$
$E_i = A e^{-jkR_0} e^{j(i-1)(\delta + kd\cos\theta)}$

The total field is the sum of fields from all elements:
$E_{total} = \sum_{i=1}^{N} E_i = A e^{-jkR_0} \sum_{i=1}^{N} e^{j(i-1)(\delta + kd\cos\theta)}$

Let $\psi = \delta + kd\cos\theta$.
$E_{total} = A e^{-jkR_0} \sum_{i=1}^{N} e^{j(i-1)\psi}$

The sum is a geometric series: $\sum_{i=1}^{N} e^{j(i-1)\psi} = 1 + e^{j\psi} + e^{j2\psi} + ... + e^{j(N-1)\psi}$
This sum is equal to $\frac{1 - e^{jN\psi}}{1 - e^{j\psi}}$.

The array factor is the magnitude of this sum, normalized:
$AF(\theta) = \left| \sum_{i=1}^{N} e^{j(i-1)\psi} \right| = \left| \frac{1 - e^{jN\psi}}{1 - e^{j\psi}} \right|$
$AF(\theta) = \left| \frac{e^{jN\psi/2}(e^{-jN\psi/2} - e^{jN\psi/2})}{e^{j\psi/2}(e^{-j\psi/2} - e^{j\psi/2})} \right|$
$AF(\theta) = \left| e^{j(N-1)\psi/2} \frac{-2j \sin(N\psi/2)}{-2j \sin(\psi/2)} \right|$
$AF(\theta) = \left| \frac{\sin(N\psi/2)}{\sin(\psi/2)} \right|$

Substituting $\psi = \delta + kd\cos\theta$:
$AF(\theta) = \left| \frac{\sin(N/2 (\delta + kd\cos\theta))}{\sin(1/2 (\delta + kd\cos\theta))} \right|$

**Important Properties of AF:**

*   **Maximum:** The AF is maximum when $\psi = 0$, i.e., $\delta + kd\cos\theta = 0$. This implies $\cos\theta = -\delta/(kd)$.
*   **Nulls:** Nulls occur when $N\psi/2 = m\pi$, where $m$ is an integer, provided $\psi/2 \neq n\pi$. So, $N/2 (\delta + kd\cos\theta) = m\pi$, which means $\delta + kd\cos\theta = 2m\pi/N$.
*   **Bandwidth:** The bandwidth of an array is related to how much the AF changes with frequency.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Chapter 4 is dedicated to Array Antennas, with detailed AF derivations.
*   **Raju, G S N (Antennas and Wave Propagation):** Section 12.3 provides a comprehensive treatment of array factor for linear arrays.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Chapter 10 covers antenna arrays and array factor.
*   **Saurabh Shukla, Sanjay Kumar (Concepts & Applications of Microwave Engineering):** Likely to have a section on antenna arrays and their factors.

---

## 4. Linear Arrays of 'n' Isotropic Point Sources with Equal Amplitude

This section builds upon the array factor derivation for a general uniform linear array, specifically focusing on the case where all $N$ elements are isotropic and fed with equal amplitude.

**Key Concepts:**

*   **Uniform Linear Array (ULA):** Elements are arranged along a straight line, with equal spacing and equal amplitude excitation.
*   **Progressive Phase Shift ($\delta$):** A constant phase difference between adjacent elements. This is key to steering the main beam.

**Array Factor Formula (reiterated for clarity):**

$AF(\theta) = \left| \frac{\sin(N/2 (\delta + kd\cos\theta))}{\sin(1/2 (\delta + kd\cos\theta))} \right|$

**Analysis based on $\delta$ and $d$:**

The radiation pattern of a ULA is highly dependent on the choice of $N$, $d$, and $\delta$.

*   **Broadside Array:** The main beam is perpendicular to the array axis. This occurs when $\delta = 0$. The maximum radiation is at $\cos\theta = 0$, i.e., $\theta = 90^\circ$.
    *   $AF(\theta) = \left| \frac{\sin(Nk d\cos\theta / 2)}{\sin(kd\cos\theta / 2)} \right|$.
    *   The main lobe is centered at $\theta = 90^\circ$.

*   **End-fire Array:** The main beam is along the array axis. This occurs when $\delta = \pm kd$.
    *   If $\delta = -kd$, then $\psi = -kd + kd\cos\theta = kd(\cos\theta - 1)$.
    *   The maximum is when $\psi = 0$, i.e., $\cos\theta = 1$, so $\theta = 0^\circ$.
    *   If $\delta = +kd$, then $\psi = kd + kd\cos\theta = kd(1 + \cos\theta)$.
    *   The maximum is when $\psi = 0$, i.e., $\cos\theta = -1$, so $\theta = 180^\circ$.

*   **Dolph-Chebyshev Array:** A design technique to achieve a specific side-lobe level by tapering the excitation amplitudes. (While not explicitly asked for in the topic list, it's a common design for ULAs).

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Sections 4.3, 4.4, 4.5.
*   **Raju, G S N (Antennas and Wave Propagation):** Chapter 12.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Chapter 10.

---

## 5. Grating Lobes

Grating lobes are undesirable secondary maxima in the radiation pattern of an antenna array, which occur when the element spacing is too large.

**Key Concepts:**

*   **Condition for Grating Lobes:** Grating lobes occur when the condition for a main lobe maximum is met for a direction other than the intended one. This happens when $|\delta + kd\cos\theta| = 2m\pi$ for $m \neq 0$.
*   The most problematic grating lobe is when $m=1$.
*   The direction of the $m$-th grating lobe is given by: $\cos\theta_{m} = \frac{-(\delta + 2m\pi)}{kd}$.

**Condition for Absence of Grating Lobes:**

To avoid grating lobes in the visible region (i.e., $-1 \le \cos\theta \le 1$), the condition for the first grating lobe ($m=1$ or $m=-1$) must not fall within the visible region.

*   For a broadside array ($\delta = 0$), the AF maxima are at $kd\cos\theta = 2m\pi/N$.
    *   For $m=0$, we get the main lobe at $\cos\theta = 0$ (broadside).
    *   For $m=1$, we get a grating lobe at $kd\cos\theta = 2\pi$.
    *   To avoid grating lobes in the visible range, we need $kd < 2\pi$ (for the $m=1$ lobe to be outside $\cos\theta = 1$) and $kd > -2\pi$ (for the $m=-1$ lobe to be outside $\cos\theta = -1$).
    *   Therefore, for a broadside array, the spacing $d$ should be less than a wavelength: $d < \lambda$.

*   For an end-fire array ($\delta = \pm kd$), the AF maxima are at $\delta + kd\cos\theta = 2m\pi/N$.
    *   If $\delta = -kd$, maxima are at $-kd + kd\cos\theta = 2m\pi/N$.
    *   For $m=0$, we get the main lobe at $\cos\theta = 1$ (end-fire).
    *   For $m=1$, we get a grating lobe at $-kd + kd\cos\theta = 2\pi/N$.
    *   If we consider the first possible grating lobe by setting $m=1$, the condition $\cos\theta = 1 - 2\pi/(Nk)$ and $\cos\theta = -1 + 2\pi/(Nk)$ can lead to grating lobes if $d$ is too large.
    *   For end-fire arrays with **Hansen-Woodyard condition** ($\delta = -kd + \pi/N$), the main beam is slightly tilted towards broadside to sharpen the beam, and the condition for grating lobes is also important.
    *   A more robust condition for end-fire arrays to avoid grating lobes is $d \le \lambda/2$.

**Consequences of Grating Lobes:**

*   **Reduced Gain:** Power is directed into undesired directions.
*   **Poor Directivity:** The antenna is less directional.
*   **Interference:** Can cause interference with other systems.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Section 4.6 discusses grating lobes and their conditions.
*   **Raju, G S N (Antennas and Wave Propagation):** Section 12.5 covers grating lobes.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Section 10.5.

---

## 6. Design of Broadside and End Fire Arrays

These are two fundamental types of linear antenna arrays with distinct radiation characteristics and design considerations.

### 6.1 Broadside Arrays

**Objective:** To produce a radiation pattern with the main beam maximum perpendicular to the array axis.

**Design Parameters:**

*   **Element Spacing ($d$):** To avoid grating lobes, $d < \lambda$. A common choice is $d = \lambda/2$ or $d = \lambda/4$.
*   **Phase Shift ($\delta$):** For a broadside array, the progressive phase shift between adjacent elements is $\delta = 0$. This ensures that the maxima of the array factor occur when $kd\cos\theta = 0$, which means $\cos\theta = 0$, or $\theta = 90^\circ$.
*   **Number of Elements ($N$):** Increasing $N$ increases the directivity and narrows the main beam.
*   **Amplitude Tapering:** Equal amplitudes are assumed for simplicity. However, amplitude tapering (e.g., Chebyshev) can be used to reduce side lobe levels at the expense of beam broadening and reduced directivity.

**Array Factor for Broadside Array ($\delta=0$):**

$AF(\theta) = \left| \frac{\sin(Nkd\cos\theta / 2)}{\sin(kd\cos\theta / 2)} \right|$

**Example:** A linear array of $N$ isotropic sources with $\lambda/2$ spacing and fed in phase. The main beam is directed at $\theta = 90^\circ$.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Section 4.3.
*   **Raju, G S N (Antennas and Wave Propagation):** Section 12.4.1.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Section 10.3.

### 6.2 End Fire Arrays

**Objective:** To produce a radiation pattern with the main beam maximum along the array axis.

**Design Parameters:**

*   **Element Spacing ($d$):** The spacing is critical for end-fire arrays.
*   **Phase Shift ($\delta$):** For end-fire, the progressive phase shift is $\delta = \pm kd$.
    *   If $\delta = -kd$, the main lobe is at $\theta = 0^\circ$.
    *   If $\delta = +kd$, the main lobe is at $\theta = 180^\circ$.

**Array Factor for End Fire Array ($\delta = -kd$):**

$\psi = -kd + kd\cos\theta = kd(\cos\theta - 1)$.
$AF(\theta) = \left| \frac{\sin(N/2 \cdot kd(\cos\theta - 1))}{\sin(1/2 \cdot kd(\cos\theta - 1))} \right|$.

**Hansen-Woodyard Condition:**

For a "super-directive" end-fire array (sharper beam), the phase shift is slightly modified to $\delta = -kd + \pi/N$. This tilts the beam slightly towards broadside. This modification, however, comes with increased sensitivity to frequency and potentially higher side lobes.

**Grating Lobe Consideration:**

*   For $\delta = -kd$, the first grating lobe ($m=1$) occurs at $\cos\theta_1 = \frac{-(-kd + 2\pi)}{kd} = \frac{kd - 2\pi}{kd} = 1 - \frac{2\pi}{kd}$.
*   To avoid a grating lobe at $\theta = 0^\circ$ (where $\cos\theta=1$), we need $1 - \frac{2\pi}{kd} < 1$, which is always true if $d>0$.
*   However, for the lobe to be outside the visible region (i.e., $\cos\theta_1 < -1$), we need $1 - \frac{2\pi}{kd} < -1$, so $2 < \frac{2\pi}{kd}$, or $kd < \pi$.
*   This implies $d < \lambda/2$. So, for a basic end-fire array to avoid grating lobes in the visible range, the spacing must be $d < \lambda/2$.

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Section 4.4.
*   **Raju, G S N (Antennas and Wave Propagation):** Section 12.4.2.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Section 10.4.

---

## 7. Phased Array Principle

Phased arrays are a class of antenna arrays where the beam direction is controlled by electronically changing the phase of the signals fed to each element, rather than physically moving the antenna.

**Key Concepts:**

*   **Electronic Beam Steering:** The primary advantage of phased arrays is the ability to steer the beam rapidly and electronically.
*   **Phase Shifters:** Each element or group of elements is connected to a phase shifter, which can adjust the phase of the signal.
*   **Beamwidth:** The beamwidth is determined by the array aperture size and the number of elements.
*   **Scanning Angle:** The range of angles over which the beam can be steered.
*   **Grating Lobes in Phased Arrays:** When steering the beam away from broadside, grating lobes can appear. For a linear array, grating lobes appear when the scanning angle $\theta_s$ satisfies $kd\sin\theta_s = \pm 2m\pi$. To avoid grating lobes within the visible region ($\pm 90^\circ$), the element spacing must be $d \le \lambda/(1 + |\sin\theta_{s\_max}|)$, where $\theta_{s\_max}$ is the maximum scanning angle. For two-dimensional arrays, the condition becomes more complex.

**How it works:**

By adjusting the progressive phase shift $\delta$ in a linear array, we can control the direction of the main beam.
The direction of the main beam is where $\psi = \delta + kd\cos\theta = 0$.
So, $\cos\theta = -\delta/(kd)$.

If we want to steer the beam to an angle $\theta_s$, we set $\cos\theta_s = -\delta/(kd)$.
This means the required phase shift is $\delta = -kd\cos\theta_s$.

**Types of Phased Arrays:**

*   **Single-Axis Steering:** The beam can be steered in one plane.
*   **Multi-Axis Steering:** The beam can be steered in two dimensions using planar arrays.

**Applications:**

*   Radar systems (e.g., electronic scanning radar)
*   Satellite communication
*   Electronic warfare
*   Medical imaging

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** Chapter 4, Section 4.8.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** Section 10.6.
*   **Raju, G S N (Antennas and Wave Propagation):** Section 12.6.

---

## 8. Adaptive Antenna Array Principle

Adaptive antenna arrays are advanced phased arrays that can dynamically adjust their radiation pattern to optimize performance in the presence of interference and jamming. They can shape their beams to null out unwanted signals while maintaining or enhancing desired signals.

**Key Concepts:**

*   **Interference Rejection:** The primary goal is to reject or null out interfering signals.
*   **Signal Optimization:** To maximize the signal-to-interference-plus-noise ratio (SINR).
*   **Adaptive Algorithms:** These arrays use sophisticated algorithms (e.g., LMS, RLS, MUSIC) to estimate the direction of arrival (DOA) of desired signals and interference and adjust the weights (amplitude and phase) of the array elements accordingly.
*   **Weights:** Complex weights ($w_i$) are applied to each element's signal. $w_i = a_i e^{j\phi_i}$, where $a_i$ is the amplitude and $\phi_i$ is the phase.
*   **Beamforming:** The process of creating directional beams by combining the signals from the array elements with appropriate weights.
    *   **Constrained Optimization:** The array maintains a specific beam shape in the desired direction while minimizing interference in other directions.

**How it works:**

1.  **Signal Reception:** The array receives signals from various directions.
2.  **Interference Detection:** Algorithms analyze the received signals to identify the presence and direction of interference.
3.  **Weight Calculation:** Based on the interference information and the desired signal, the algorithm calculates optimal complex weights for each element.
4.  **Pattern Adaptation:** The weights are applied to the signals from each element, dynamically shaping the radiation pattern to null out interference and enhance the desired signal.

**Types of Adaptive Arrays:**

*   **Minimum Variance Distortionless Response (MVDR) / Generalized Sidelobe Canceller (GSC):** Common beamforming techniques.
*   **Least Mean Squares (LMS):** A simple and widely used iterative algorithm for weight adaptation.

**Applications:**

*   Advanced radar systems
*   Cellular communication (e.g., smart antennas)
*   Electronic countermeasures (ECM)
*   Sonar systems

**Textbook Reference:**

*   **Krauss, John D., Marhefka, & Khan (Antennas for all Applications):** May have introductory sections on smart antennas or adaptive arrays. More detailed information is often found in specialized books.
*   **Raju, G S N (Antennas and Wave Propagation):** Might touch upon intelligent antennas or adaptive techniques in later chapters.
*   **Das, Annapurna & Sisir K Das (Microwave Engineering):** May include sections on advanced antenna systems.

---

## Practice Questions and Answers

**Question 1:** For a uniform linear array of $N$ isotropic sources with spacing $d$ and a progressive phase shift $\delta$, what is the condition for the main beam to be in the broadside direction?
**Answer:** The main beam is in the broadside direction when $\delta = 0$. This leads to the condition $kd\cos\theta = 0$, which means $\cos\theta = 0$, or $\theta = 90^\circ$.

**Question 2:** What is the maximum spacing allowed between elements of a uniform linear broadside array to avoid grating lobes in the visible region ($\pm 90^\circ$)?
**Answer:** The condition for no grating lobes in the visible region for a broadside array is $d < \lambda$.

**Question 3:** State the principle of pattern multiplication.
**Answer:** The principle of pattern multiplication states that the radiation pattern of a multi-element array can be obtained by multiplying the radiation pattern of a single element by the array factor, provided the elements are identical and their excitation is uniform (or progressive).

**Question 4:** In an end-fire array, what is the progressive phase shift $\delta$ for the main beam to be directed along the array axis ($\theta = 0^\circ$)?
**Answer:** For an end-fire array with the main beam at $\theta = 0^\circ$, the progressive phase shift is $\delta = -kd$.

**Question 5:** What is the primary advantage of a phased array antenna over a mechanically steered antenna?
**Answer:** The primary advantage is rapid and electronic beam steering without any physical movement, allowing for faster scanning and greater agility.

**Question 6:** Describe what a grating lobe is and under what general condition it arises in an array antenna.
**Answer:** A grating lobe is an undesired secondary maximum in the radiation pattern of an antenna array. It arises when the element spacing is too large, causing the array factor to have multiple maxima in the visible region of observation angles. The general condition for a grating lobe is when $|\delta + kd\cos\theta| = 2m\pi$ for $m \neq 0$.

---

## Important Points to Remember

*   **Array Factor:** A powerful tool for analyzing the radiation pattern of arrays, representing the collective effect of element positions and excitation.
*   **Pattern Multiplication:** Simplifies the analysis of arrays by decoupling the element pattern from the array geometry.
*   **Broadside vs. End-fire:** Broadside arrays beam perpendicular to the array axis ($\delta=0$), while end-fire arrays beam along the axis ($\delta=\pm kd$).
*   **Grating Lobes:** A critical design consideration. For broadside arrays, $d < \lambda$ prevents them in the visible region. For end-fire arrays, $d < \lambda/2$ is generally required.
*   **Phased Arrays:** Enable electronic beam steering by controlling phase, offering agility and speed.
*   **Adaptive Arrays:** Dynamically adjust patterns to null interference, enhancing signal reception.
*   **Hansen-Woodyard Condition:** A modification for end-fire arrays to achieve a slightly sharper beam, but with potential drawbacks.
*   **Spacing and Phase:** The element spacing ($d$) and progressive phase shift ($\delta$) are the fundamental parameters that dictate the array's radiation characteristics.

---

This comprehensive set of notes covers the core concepts of Module 4 on Antenna Arrays, aligning with the stated learning and course outcomes and referencing the provided textbooks. Remember to consult the mentioned textbooks for more detailed derivations and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
