---
title: "Parabolic dish antenna –Principle, Cassegrain feed, expression for E, H and Gain without derivation,"
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb7"
status: "completed"
scrapedAt: "2026-05-23T18:01:48.319Z"
---
# MICROWAVES & ANTENNAS - Module 4: Antenna Arrays & Parabolic Dish Antenna

---

## Module 4: Antenna Arrays

This module delves into the fundamental principles of antenna arrays, the foundation for constructing more complex and directive antennas. We will explore the behavior of multiple radiating elements working in concert and introduce advanced concepts like phased and adaptive arrays.

---

### 1. Field of Two Isotropic Point Sources

**Concept:** Understanding the radiation pattern of two simple isotropic point sources provides a foundational stepping stone for analyzing more complex arrays. Isotropic sources radiate equally in all directions.

**Key Concepts:**
*   **Superposition Principle:** The total electric and magnetic fields at any point in space due to multiple sources are the vector sum of the fields due to each individual source.
*   **Phase Difference:** The relative phase between the currents in the two sources significantly impacts the resultant radiation pattern.
*   **Interference:** Constructive interference leads to higher radiation in certain directions, while destructive interference leads to lower radiation or nulls.

**Derivation (Conceptual):**
Consider two isotropic point sources, $S_1$ and $S_2$, separated by a distance $d$. Let them be fed with currents of equal amplitude but with a phase difference $\phi$. The electric field at a point P in space due to $S_1$ is $E_1$ and due to $S_2$ is $E_2$. The total field $E_{total}$ at P is $E_1 + E_2$. The directivity and the shape of the radiation pattern will depend on the distance $d$ and the phase difference $\phi$.

**Important to Remember:** The pattern of an array is influenced by both the pattern of individual elements and their arrangement and excitation.

---

### 2. Principle of Pattern Multiplication

**Concept:** This principle simplifies the analysis of radiation patterns for arrays of identical antennas. It states that the total radiation pattern of an array is the product of the individual element's radiation pattern and the array factor, which represents the pattern due to the arrangement of the elements.

**Formula:**
$$ \text{Total Pattern} = (\text{Element Pattern}) \times (\text{Array Factor}) $$

**Key Concepts:**
*   **Element Pattern:** The radiation pattern of a single antenna element when it is operating in isolation.
*   **Array Factor (AF):** The pattern that results from the spatial arrangement and excitation of the antenna elements. It shows how the array, as a whole, directs the energy.

**Significance:**
This principle allows us to design complex array patterns by selecting suitable individual elements and then arranging and exciting them in a way that generates the desired array factor.

**Example:**
If you have a broadside array of dipoles, the total pattern will be the combination of the figure-eight pattern of a single dipole and the array factor that creates a beam in the broadside direction.

---

### 3. Array Factor (AF)

**Concept:** The array factor is a mathematical expression that describes the directional properties of an antenna array, independent of the radiation pattern of the individual elements. It essentially represents the "focusing" or "beamforming" capability of the array.

**Key Concepts:**
*   **Geometric Arrangement:** The physical spacing and orientation of the elements.
*   **Excitation:** The amplitude and phase of the currents feeding each element.
*   **Direction of Observation:** The angle $(\theta, \phi)$ in spherical coordinates at which the field is being observed.

**General Expression (for a linear array):**
For a linear array of $N$ isotropic point sources with spacing $d$ along the z-axis, with current amplitude $I_n$ and phase $\alpha_n$ for the $n^{th}$ element (where $n$ goes from 0 to $N-1$), the array factor is given by:

$$ AF(\theta) = \sum_{n=0}^{N-1} I_n e^{j (\alpha_n + k d n \cos \theta)} $$

Where:
*   $k = 2\pi/\lambda$ is the free-space wavenumber.
*   $\theta$ is the angle measured from the array axis.

**Important to Remember:** The array factor is a complex quantity, and its magnitude squared often represents the power distribution in different directions.

---

### 4. Linear Arrays of 'n' Isotropic Point Sources with Equal Amplitude

**Concept:** This section focuses on a specific and fundamental type of array: a linear array where all elements are isotropic, have the same current amplitude, and are equally spaced.

**Key Concepts:**
*   **Uniform Linear Array (ULA):** An array where elements are arranged in a straight line, with equal spacing and equal amplitudes.
*   **Progressive Phase Shift:** A constant phase difference between adjacent elements, often denoted by $\alpha$.

**Array Factor for a ULA with Equal Amplitude:**
For a ULA of $N$ isotropic point sources with equal amplitude $I_0$ and spacing $d$, and a progressive phase shift $\alpha$ between adjacent elements:

$$ AF(\theta) = I_0 \sum_{n=0}^{N-1} e^{j ( \alpha + k d n \cos \theta)} $$

This can be expressed in a more compact form:

$$ AF(\theta) = I_0 \frac{\sin(N\psi/2)}{\sin(\psi/2)} $$

Where $\psi = \alpha + k d \cos \theta$.

**Analysis of the Pattern:**
*   **Maximum Radiation:** Occurs when the denominator $\sin(\psi/2)$ is non-zero and the numerator $\sin(N\psi/2)$ is maximum (i.e., $\pm 1$). This happens when $N\psi/2 = m\pi$, where $m$ is an integer.
*   **Nulls:** Occur when the numerator $\sin(N\psi/2)$ is zero, but the denominator $\sin(\psi/2)$ is not zero. This happens when $N\psi/2 = m\pi$, but $\psi/2 \neq p\pi$, where $m$ and $p$ are integers.

---

### 5. Grating Lobes

**Concept:** Grating lobes are undesirable secondary maxima in the radiation pattern of an antenna array that occur when the spacing between elements is too large. They represent significant radiation in directions other than the intended main beam.

**Cause:**
Grating lobes arise due to the periodicity of the array. When the argument of the exponential term in the array factor becomes a multiple of $2\pi$ for a direction different from the main beam direction, a grating lobe is formed.

**Condition for Grating Lobes:**
Grating lobes occur when the array factor has maxima at angles $\theta$ such that:
$$ k d \cos \theta = -(\alpha + 2m\pi) $$
for integers $m$, where $\alpha$ is the progressive phase shift.

If the array is designed for broadside radiation ($\alpha = 0$) and elements are isotropic, a grating lobe appears at $\cos \theta = \pm \frac{2m\pi}{kd} = \pm \frac{m\lambda}{d}$.

**Prevention:**
To avoid grating lobes, the element spacing $d$ should be kept less than or equal to $\lambda$. Specifically, for broadside arrays ($\alpha=0$):
$$ d \le \lambda $$
For end-fire arrays ($\alpha = \pm kd$), the condition is $d \le \lambda/2$.

**Textbook Reference:**
*   **Krauss, Marhefka, Khan (4th Ed.)**: Discusses the condition for grating lobes in detail and their relationship to element spacing.
*   **Raju (3rd Ed.)**: Provides analytical expressions and diagrams illustrating the formation of grating lobes.

---

### 6. Design of Broadside and End Fire Arrays

**Concept:** These are two fundamental types of linear arrays distinguished by the direction of their main beam.

#### a) Broadside Array

**Definition:** In a broadside array, the main beam is directed perpendicular to the axis of the array (broadside).

**Design Requirements:**
*   **Maximum Radiation:** Occurs when $\cos \theta = 0$, which implies $\theta = 90^\circ$ (or $\pi/2$ radians).
*   **Condition for Maximum:** This requires the argument of the array factor's sine function to be zero for the main beam direction.
    *   For $AF(\theta) = \frac{\sin(N\psi/2)}{\sin(\psi/2)}$, the maximum occurs when $N\psi/2 = m\pi$.
    *   For broadside, we want $\psi = \alpha + kd \cos \theta = 0$ when $\theta = 90^\circ$.
    *   So, $\alpha + kd \cos(90^\circ) = 0 \implies \alpha = 0$.
*   **Element Spacing:** To avoid grating lobes, $d \le \lambda$.

**Array Factor for Broadside Array ($\alpha = 0$):**
$$ AF(\theta) = \frac{\sin(N(kd \cos \theta)/2)}{\sin((kd \cos \theta)/2)} $$

**Textbook Reference:**
*   **Liao (3rd Ed.)**: Explains the concept of broadside arrays and their phase requirements.
*   **Sanjay Kumar Saurabh Shukla (2014)**: Provides design considerations and examples for achieving broadside radiation.

#### b) End Fire Array

**Definition:** In an end-fire array, the main beam is directed along the axis of the array.

**Design Requirements:**
*   **Maximum Radiation:** Occurs when $\cos \theta = \pm 1$ (i.e., $\theta = 0^\circ$ or $180^\circ$).
*   **Condition for Maximum:** This requires the argument of the array factor's sine function to be zero for the main beam direction.
    *   For $\theta = 0^\circ$, we need $\psi = \alpha + kd \cos(0^\circ) = \alpha + kd = 0 \implies \alpha = -kd$.
    *   For $\theta = 180^\circ$, we need $\psi = \alpha + kd \cos(180^\circ) = \alpha - kd = 0 \implies \alpha = +kd$.
*   **Element Spacing:** To avoid grating lobes when $\alpha = \pm kd$, the condition becomes $d \le \lambda/2$.

**Array Factor for End Fire Array ($\alpha = -kd$):**
$$ AF(\theta) = \frac{\sin(N(kd(\cos \theta - 1))/2)}{\sin((kd(\cos \theta - 1))/2)} $$

**Yagi-Uda Antenna as an End-Fire Array Example:** While not strictly a ULA of isotropic sources, a Yagi-Uda antenna utilizes driven and parasitic elements to create a directional end-fire beam. The spacing and lengths of directors and reflectors are optimized for this purpose.

**Textbook Reference:**
*   **Das & Das (4th Ed.)**: Details the phase conditions for end-fire arrays and their characteristics.
*   **Raju (3rd Ed.)**: Presents practical considerations for designing end-fire arrays.

---

### 7. Phased Array Principle

**Concept:** A phased array is an antenna array where the relative phase of the signals feeding each element is varied electronically to steer the main beam without physically moving the antenna.

**Key Principles:**
*   **Beam Steering:** By changing the progressive phase shift $\alpha$ across the array elements, the direction of maximum radiation (the main beam) can be electronically controlled.
*   **Array Factor Modification:** The phase shift $\alpha$ in the array factor formula $AF(\theta) = \frac{\sin(N\psi/2)}{\sin(\psi/2)}$, where $\psi = \alpha + kd \cos \theta$, directly influences the angle of maximum radiation.
*   **Electronic Scanning:** This electronic control of the beam allows for rapid and precise steering.

**Mathematical Basis:**
The direction of maximum radiation occurs when $\psi = 0$, i.e., $\alpha + kd \cos \theta_{max} = 0$.
Therefore, the angle of maximum radiation $\theta_{max}$ can be controlled by adjusting $\alpha$:
$$ \cos \theta_{max} = -\frac{\alpha}{kd} $$

**Components:**
*   **Antenna Elements:** Individual radiating elements.
*   **Phase Shifters:** Electronic components that introduce a controlled phase shift to the signal fed to each element.
*   **Beamforming Network:** Controls the phase shifters.

**Applications:** Radar systems, satellite communication, wireless communication.

**Textbook Reference:**
*   **Krauss, Marhefka, Khan (4th Ed.)**: Provides a thorough introduction to phased arrays, their operation, and applications.
*   **Sanjay Kumar Saurabh Shukla (2014)**: Discusses the underlying principles of beam steering in phased arrays.

---

### 8. Adaptive Antenna Array Principle

**Concept:** An adaptive antenna array is a phased array that can automatically adjust its radiation pattern to optimize performance in a changing environment. It can steer its main beam towards a desired signal and simultaneously place nulls in the directions of interfering signals.

**Key Principles:**
*   **Self-Adaptation:** The array's weights (amplitude and phase) are adjusted based on received signals to achieve a specific objective function (e.g., maximize signal-to-interference-plus-noise ratio).
*   **Environment Sensing:** The array continuously monitors the electromagnetic environment.
*   **Weight Optimization Algorithms:** Various algorithms (e.g., LMS, RLS) are used to iteratively update the weights.

**Objective Functions:**
*   **Minimum Mean Squared Error (MMSE):** Minimizes the error between the array's output and a desired signal.
*   **Maximum Signal-to-Noise Ratio (SNR):** Maximizes the ratio of the desired signal power to the noise and interference power.

**How it Works:**
1.  The array receives signals from all elements.
2.  A control algorithm processes these signals.
3.  The algorithm adjusts the amplitude and phase (weights) applied to each element.
4.  This adjustment shapes the overall radiation pattern to enhance the desired signal and suppress interference.

**Applications:** Cellular communications, electronic warfare, cognitive radio.

**Textbook Reference:**
*   **Das & Das (4th Ed.)**: Introduces adaptive arrays and their capabilities in interference suppression.
*   **Raju (3rd Ed.)**: Discusses the algorithms and implementation aspects of adaptive arrays.
*   **Jordan and Balmain (2nd Ed.)**: Provides a theoretical foundation for adaptive array processing.

---
---

## Topic: Parabolic Dish Antenna

### Principle

**Concept:** A parabolic dish antenna is a highly directive antenna that uses a parabolic reflector to focus electromagnetic waves. It converts spherical or plane waves into a highly directional beam.

**Working Principle:**
*   **Reflector Shape:** The antenna utilizes a parabolic surface, which has a unique geometric property: all rays originating from the focus of the parabola and striking the parabolic surface are reflected parallel to the axis of the parabola.
*   **Feed Element:** A radiating element (like a dipole, horn, or patch antenna) is placed at the focal point of the parabolic reflector.
*   **Radiation:** The feed element radiates electromagnetic waves. These waves strike the parabolic surface and are reflected outwards in a narrow, collimated beam, perpendicular to the aperture of the dish.
*   **Reception:** When receiving, the incoming parallel electromagnetic waves strike the parabolic reflector, are reflected towards the focal point, and are then captured by the feed element.

**Key Components:**
*   **Parabolic Reflector:** The main reflecting surface.
*   **Feed (or Illuminator):** The primary radiating element placed at the focus.
*   **Support Structure:** Holds the feed element at the focal point.

**Types of Reflectors:**
*   **Front-fed:** The feed is placed in front of the reflector, directly in the path of the outgoing beam. This can cause blockage.
*   **Cassegrain:** Uses a secondary sub-reflector to redirect the energy from the focal point of the main parabola back through a hole in the main reflector to the feed located behind the main reflector. This reduces blockage.

**Textbook Reference:**
*   **Krauss, Marhefka, Khan (4th Ed.)**: Provides detailed explanations of parabolic reflectors, feed patterns, and aperture illumination.
*   **Raju (3rd Ed.)**: Explains the geometrical optics principles behind parabolic reflectors.

---

### Cassegrain Feed

**Concept:** The Cassegrain feed system is a modification of the parabolic dish antenna that reduces blockage and allows for convenient placement of the feed and associated electronics.

**How it Works:**
1.  The primary feed element is located behind the main parabolic reflector, near its center.
2.  The feed element illuminates a **hyperbolic sub-reflector** placed at the focal point of the main reflector.
3.  The hyperbolic sub-reflector is positioned such that its focal point coincides with the focal point of the main parabolic reflector.
4.  Rays originating from the feed and striking the sub-reflector are reflected towards the main reflector's focal point.
5.  These rays then strike the main parabolic reflector and are reflected into a parallel beam.

**Advantages of Cassegrain Feed:**
*   **Reduced Blockage:** The sub-reflector is smaller than a front-fed feed horn, and the main feed is located behind the main reflector, minimizing blockage of the primary beam.
*   **Convenient Feed Location:** The feed electronics can be easily accessed and maintained behind the main reflector.
*   **Support Structure Integration:** The sub-reflector can be supported by struts from the main reflector structure, which can be designed to have minimal impact on the radiation pattern.

**Textbook Reference:**
*   **Das & Das (4th Ed.)**: Explains the Cassegrain feed system and its advantages.
*   **Liao (3rd Ed.)**: Discusses different feed configurations, including the Cassegrain.

---

### Expression for E, H and Gain (Without Derivation)

**Context:** For a parabolic dish antenna with aperture diameter $D$ and operating at frequency $f$ (wavelength $\lambda$), the radiation characteristics can be approximated.

**Electric Field (E) and Magnetic Field (H) at the Aperture:**
The field distribution at the aperture of a parabolic dish is often approximated as a uniform plane wave. However, in reality, it tapers towards the edges. A common approximation for the field distribution across the aperture is a tapered distribution, often modeled as:

$$ E_{aperture}(\rho, \phi) \approx E_0 \left(1 - (\frac{\rho}{D/2})^n\right) e^{-jk\rho^2/(2R_{ff})} $$

Where:
*   $E_0$ is the field strength at the center.
*   $\rho$ is the radial distance from the center of the aperture.
*   $D$ is the diameter of the aperture.
*   $n$ is a parameter determining the taper (e.g., $n=1$ for linear taper, $n=2$ for quadratic taper).
*   $R_{ff}$ is the focal length of the parabola.
*   $k = 2\pi/\lambda$.

The magnetic field is related to the electric field by the intrinsic impedance of free space: $H = E/\eta_0$.

**Far-Field Expressions (Approximations):**
In the far-field, the electric field radiated by the aperture can be approximated by:

$$ E_{\theta}(\theta, \phi) \approx \frac{j k D^2 E_0}{4 r} e^{-jkr} \left( \frac{2 J_1(u)}{u} \right) \cos \theta $$
$$ E_{\phi}(\theta, \phi) \approx 0 $$

Where:
*   $r$ is the distance from the antenna to the observation point.
*   $u = k \frac{D}{2} \sin \theta$.
*   $J_1(u)$ is the Bessel function of the first kind of order one.
*   $\cos \theta$ term accounts for the projected aperture area.

The magnetic field is $H = E/\eta_0$.

**Gain (G):**
The gain of a parabolic dish antenna is a measure of its ability to concentrate power in a particular direction. It is directly related to its directivity and aperture efficiency.

**Gain Expression:**
$$ G = \eta_a \left(\frac{\pi D}{\lambda}\right)^2 $$

Where:
*   $G$ is the dimensionless gain.
*   $\eta_a$ is the aperture efficiency (typically between 0.5 and 0.75 for common feeds).
*   $D$ is the diameter of the aperture.
*   $\lambda$ is the wavelength.

In decibels:
$$ G_{dB} = 10 \log_{10} \left( \eta_a \left(\frac{\pi D}{\lambda}\right)^2 \right) = 10 \log_{10}(\eta_a) + 20 \log_{10}(\pi) + 20 \log_{10}(D/\lambda) $$
$$ G_{dB} \approx \eta_a + 10 \log_{10}(D/\lambda)^2 $$

**Relationship to Beamwidth:**
The gain is inversely proportional to the square of the half-power beamwidth ($\theta_{HPBW}$).

$$ G \approx \frac{4\pi}{\Omega_A} $$
where $\Omega_A$ is the solid angle of the beam. For a dish, $\Omega_A \approx \theta_{HPBW} \phi_{HPBW}$.

**Textbook Reference:**
*   **Das & Das (4th Ed.)**: Provides the gain formula and discusses aperture efficiency.
*   **Krauss, Marhefka, Khan (4th Ed.)**: Derives the far-field expressions and discusses gain and beamwidth relationship.
*   **Raju (3rd Ed.)**: Explains the concept of gain and its dependence on antenna parameters.

---

## Practice Questions and Answers

**Q1: What is the fundamental principle of pattern multiplication in antenna arrays?**

**A1:** The principle of pattern multiplication states that the total radiation pattern of an antenna array is the product of the radiation pattern of a single element and the array factor, which accounts for the spatial arrangement and excitation of the elements.

---

**Q2: Under what condition does a grating lobe appear in a linear array?**

**A2:** A grating lobe appears when the element spacing ($d$) is greater than the wavelength ($\lambda$). Specifically, for a uniform linear array with progressive phase shift $\alpha$, grating lobes occur when $d > \lambda / (1 + |\alpha|/2\pi)$. For broadside arrays ($\alpha=0$), this condition simplifies to $d > \lambda$.

---

**Q3: For a broadside array, what is the required progressive phase shift between adjacent elements?**

**A3:** For a broadside array, the required progressive phase shift between adjacent elements is $0^\circ$. This ensures that the main beam is directed perpendicular to the axis of the array.

---

**Q4: How is the beam steered in a phased array antenna?**

**A4:** The beam in a phased array antenna is steered by electronically varying the relative phase of the signals fed to each antenna element. By changing these phase shifts, the direction of maximum constructive interference (the main beam) is electronically controlled.

---

**Q5: What is the main advantage of a Cassegrain feed system over a front-fed parabolic dish?**

**A5:** The main advantage of a Cassegrain feed system is the significant reduction in aperture blockage. The feed and sub-reflector are placed behind the main reflector, minimizing interference with the outgoing or incoming radio waves compared to a front-fed system.

---

**Q6: The gain of a parabolic dish antenna is directly proportional to:**
    a) Wavelength
    b) Diameter squared
    c) Diameter
    d) Square root of the frequency

**A6:** b) Diameter squared. The gain is proportional to $(\frac{\pi D}{\lambda})^2$.

---

**Q7: What is the primary function of the sub-reflector in a Cassegrain antenna?**

**A7:** The primary function of the sub-reflector in a Cassegrain antenna is to redirect the electromagnetic waves from the primary feed (located behind the main reflector) towards the main parabolic reflector, which then focuses them into a parallel beam.

---

**Q8: Explain the difference between a phased array and an adaptive antenna array.**

**A8:** A phased array allows for electronic beam steering by controlling the phase shifts between elements. An adaptive antenna array is a type of phased array that can *also* adjust the amplitude and phase of its elements (its weights) based on the received signal environment to optimize its radiation pattern, often by suppressing interference and enhancing desired signals.

---

## Important Points to Remember

*   **Pattern Multiplication:** Total Pattern = Element Pattern × Array Factor.
*   **Array Factor:** Represents the spatial contribution of the array geometry and excitation.
*   **Grating Lobes:** Occur when element spacing $d > \lambda$, causing unwanted maxima. Always aim for $d \le \lambda$.
*   **Broadside Array:** Main beam perpendicular to the array axis; requires $\alpha = 0$.
*   **End Fire Array:** Main beam along the array axis; requires $\alpha = \pm kd$.
*   **Phased Array:** Electronic beam steering via phase shifters.
*   **Adaptive Array:** Electronically adjusts amplitude and phase to optimize performance in dynamic environments (interference suppression, signal enhancement).
*   **Parabolic Dish Principle:** Focuses electromagnetic waves using a parabolic reflector, with the feed at the focal point.
*   **Cassegrain Feed:** Reduces blockage by using a sub-reflector and placing the feed behind the main reflector.
*   **Gain of a Dish:** $G = \eta_a (\pi D / \lambda)^2$. Higher gain means narrower beamwidth and higher directivity.

---

This module provides the foundational understanding of antenna arrays and introduces the highly directive parabolic dish antenna. The principles of array factor and pattern multiplication are crucial for understanding how arrays achieve directional radiation, while phased and adaptive arrays highlight advanced beamforming capabilities. The parabolic dish's efficient use of a reflector to create a focused beam makes it a staple in many high-frequency applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
