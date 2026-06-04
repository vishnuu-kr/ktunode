---
title: "Polarization of waves."
subject: "ELECTROMAGNETICS"
module: "Module 2: Maxwell’s equation from fundamental laws."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d4"
status: "completed"
scrapedAt: "2026-05-23T17:56:31.859Z"
---
# ELECTROMAGNETICS: Module 2 - Maxwell's Equations from Fundamental Laws

## Topic: Polarization of Waves

This topic delves into the fascinating concept of polarization, which describes the orientation of the electric field vector of an electromagnetic wave as it propagates through space. Understanding polarization is crucial for analyzing wave behavior, designing antennas, and various applications in optics and telecommunications.

---

### 1. Introduction to Polarization

**What is Polarization?**

Polarization refers to the orientation of the electric field vector ($\vec{E}$) of an electromagnetic wave as it propagates through space. Since electromagnetic waves are transverse waves, the electric field vector oscillates perpendicular to the direction of propagation. Polarization describes the path traced by the tip of the electric field vector in a plane perpendicular to the direction of propagation.

**Relationship to Maxwell's Equations:**

While Maxwell's equations describe the fundamental behavior of electromagnetic fields and waves, the concept of polarization arises from the nature of the wave solution itself. Specifically, when solving Maxwell's equations for a plane wave in a source-free medium, we obtain transverse waves where $\vec{E}$ and $\vec{H}$ are perpendicular to the direction of propagation ($\vec{k}$). The orientation of $\vec{E}$ within this transverse plane is what defines polarization.

*   **Key Concept:** For a plane wave propagating in the z-direction ($\vec{k} = k\hat{z}$), the electric field vector $\vec{E}(z,t) = E_x(z,t)\hat{x} + E_y(z,t)\hat{y}$ can have components along the x and y directions. The relative amplitudes and phase differences between these components determine the polarization.

**Types of Polarization:**

The polarization of a wave is determined by the relationship between the components of the electric field vector.

#### 1.1. Linear Polarization

*   **Definition:** In linear polarization, the electric field vector oscillates along a straight line in a fixed direction in the plane perpendicular to propagation. This occurs when the components of the electric field are in phase or out of phase by 180 degrees.

*   **Mathematical Representation:**
    Consider a wave propagating in the z-direction:
    $\vec{E}(z,t) = E_0 \cos(\omega t - kz + \phi) \hat{u}$
    where $\hat{u}$ is a constant unit vector.

    Alternatively, if the electric field has components along the x and y directions:
    $E_x(z,t) = E_{0x} \cos(\omega t - kz)$
    $E_y(z,t) = E_{0y} \cos(\omega t - kz)$
    If $E_{0y} = 0$ or $E_{0x} = 0$, the field is linearly polarized along the x or y axis, respectively.
    If $E_{0y} \neq 0$ and $E_{0x} \neq 0$, but their phases are the same ($\phi_x = \phi_y$), then:
    $\vec{E}(z,t) = (E_{0x}\hat{x} + E_{0y}\hat{y}) \cos(\omega t - kz)$
    This represents linear polarization along the direction given by the vector $(E_{0x}\hat{x} + E_{0y}\hat{y})$.

*   **Examples:**
    *   A radio antenna radiating a signal where the electric field is solely oriented vertically or horizontally.
    *   Light polarized by a simple polarizing filter.

#### 1.2. Circular Polarization

*   **Definition:** In circular polarization, the electric field vector has a constant magnitude but rotates in a circle in the plane perpendicular to propagation. This occurs when the components of the electric field are equal in magnitude and 90 degrees ( $\pi/2$ radians) out of phase.

*   **Mathematical Representation:**
    $E_x(z,t) = E_0 \cos(\omega t - kz)$
    $E_y(z,t) = E_0 \sin(\omega t - kz)$
    The resultant electric field is:
    $\vec{E}(z,t) = E_0 \cos(\omega t - kz) \hat{x} + E_0 \sin(\omega t - kz) \hat{y}$
    Squaring and adding the components:
    $| \vec{E} |^2 = E_x^2 + E_y^2 = E_0^2 \cos^2(\omega t - kz) + E_0^2 \sin^2(\omega t - kz) = E_0^2$
    Thus, the magnitude of the electric field is constant ($E_0$).
    The direction of the electric field vector rotates. For example, at $z=0$:
    *   $t = 0$: $\vec{E}(0,0) = E_0 \cos(0)\hat{x} + E_0 \sin(0)\hat{y} = E_0\hat{x}$
    *   $t = \pi/(2\omega)$: $\vec{E}(0, \pi/(2\omega)) = E_0 \cos(-\pi/2)\hat{x} + E_0 \sin(-\pi/2)\hat{y} = -E_0\hat{y}$
    *   $t = \pi/\omega$: $\vec{E}(0, \pi/\omega) = E_0 \cos(-\pi)\hat{x} + E_0 \sin(-\pi)\hat{y} = -E_0\hat{x}$

*   **Types of Circular Polarization:**
    *   **Right-Circular Polarization (RCP):** The electric field vector rotates clockwise when viewed by the observer looking in the direction of propagation. This occurs when $E_y$ leads $E_x$ by 90 degrees (or $E_y = E_0 \sin(\omega t - kz)$ and $E_x = E_0 \cos(\omega t - kz)$).
    *   **Left-Circular Polarization (LCP):** The electric field vector rotates counter-clockwise when viewed by the observer looking in the direction of propagation. This occurs when $E_x$ leads $E_y$ by 90 degrees (or $E_x = E_0 \cos(\omega t - kz)$ and $E_y = E_0 \sin(\omega t - kz)$).

*   **Examples:**
    *   Satellite communications use circular polarization to avoid polarization losses due to the orientation of antennas.
    *   GPS signals.

#### 1.3. Elliptical Polarization

*   **Definition:** In elliptical polarization, the electric field vector has varying magnitudes and rotates in an elliptical path in the plane perpendicular to propagation. This is the most general form of polarization and occurs when the components of the electric field have different amplitudes and/or phase differences other than 0, 180, or 90 degrees.

*   **Mathematical Representation:**
    $E_x(z,t) = E_{0x} \cos(\omega t - kz)$
    $E_y(z,t) = E_{0y} \cos(\omega t - kz + \delta)$
    where $\delta$ is the phase difference.

    The locus of the electric field vector tip in the plane perpendicular to propagation is an ellipse. The axes of the ellipse are generally not aligned with the x and y axes unless $\delta = 0$ or $\delta = \pi$ (linear polarization) or if the ellipse is a circle (circular polarization).

*   **Examples:**
    *   Most naturally occurring electromagnetic waves.
    *   Signals transmitted through complex media that cause phase distortions.

---

### 2. Describing Polarization: The Jones Vector

**What is a Jones Vector?**

The Jones vector is a mathematical tool used to represent the polarization state of a monochromatic, fully polarized plane wave. It is a column vector in a 2D complex vector space, representing the transverse components of the electric field.

*   **Definition:** For a wave propagating in the z-direction, the electric field can be written as:
    $\vec{E}(z,t) = \text{Re} \{ \tilde{\vec{E}}(z) e^{j\omega t} \}$
    where $\tilde{\vec{E}}(z) = \tilde{E}_x(z) \hat{x} + \tilde{E}_y(z) \hat{y}$ is the complex amplitude.

    The Jones vector is defined as:
    $J = \begin{bmatrix} \tilde{E}_x \\ \tilde{E}_y \end{bmatrix}$

    Normalization: Often, the Jones vector is normalized such that $|\tilde{E}_x|^2 + |\tilde{E}_y|^2 = 1$. This means $\tilde{E}_x = \cos \theta$ and $\tilde{E}_y = \sin \theta e^{j\delta}$ where $\theta$ is the semi-minor/major axis angle with the x-axis, and $\delta$ is the phase difference.

*   **Representing Polarization States with Jones Vectors:**

    *   **Linear Polarization:**
        *   Horizontal polarization (along x-axis): $J = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ or $\begin{bmatrix} E_{0x} \\ 0 \end{bmatrix}$
        *   Vertical polarization (along y-axis): $J = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ or $\begin{bmatrix} 0 \\ E_{0y} \end{bmatrix}$
        *   Polarization at 45 degrees: $J = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ or $\begin{bmatrix} E_0 \\ E_0 \end{bmatrix}$
        *   Polarization at angle $\theta$ to x-axis: $J = \begin{bmatrix} \cos \theta \\ \sin \theta \end{bmatrix}$

    *   **Circular Polarization:**
        *   Right-circular polarization (RCP): $J = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ -j \end{bmatrix}$ (when $\tilde{E}_y$ lags $\tilde{E}_x$ by 90 degrees, i.e., $\delta = -\pi/2$)
        *   Left-circular polarization (LCP): $J = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ j \end{bmatrix}$ (when $\tilde{E}_y$ leads $\tilde{E}_x$ by 90 degrees, i.e., $\delta = \pi/2$)

    *   **Elliptical Polarization:**
        *   General elliptical polarization: $J = \begin{bmatrix} \cos \theta \\ \sin \theta e^{j\delta} \end{bmatrix}$

*   **Important Note:** Jones vectors are only for fully polarized light. For partially polarized or unpolarized light, the Stokes parameters are used.

*   **Reference:** Sadiku's "Elements of Electromagnetics" and Hayt's "Engineering Electromagnetics" discuss wave propagation and can be used to infer the mathematical forms of electric fields that lead to these polarization states.

---

### 3. Polarization and Wave Propagation

**Polarization in Different Media:**

The polarization of an electromagnetic wave can change as it propagates through a medium. This is particularly relevant when waves encounter interfaces or anisotropic materials.

*   **Isotropic Media:** In isotropic media, the material properties (like permittivity and permeability) are the same in all directions. Plane waves in isotropic, homogeneous media maintain their polarization state unless acted upon by external factors (e.g., scattering).

*   **Anisotropic Media:** In anisotropic media, the material properties depend on the direction. This can lead to:
    *   **Birefringence:** Different polarizations can travel at different speeds, causing a change in polarization state. For example, in a uniaxial crystal, there are ordinary and extraordinary rays with different refractive indices.
    *   **Dichroism:** The absorption of the medium depends on the polarization of the wave.

*   **Reflection and Transmission at Interfaces:** When an electromagnetic wave strikes an interface between two different media, both reflection and transmission occur. The polarization of the reflected and transmitted waves can be different from the incident wave, especially if the incident wave is not polarized parallel or perpendicular to the plane of incidence.

    *   **Fresnel Equations:** These equations describe the amplitude and phase of reflected and transmitted waves at an interface. They are dependent on the polarization of the incident wave (TE and TM polarization with respect to the plane of incidence).
    *   **Brewster's Angle:** At a specific angle of incidence, called Brewster's angle, the reflected wave polarized parallel to the plane of incidence is completely zero. The reflected wave then becomes linearly polarized perpendicular to the plane of incidence.

*   **Reference:** Reddy's "Electromagnetic Waves and Transmission Lines" likely provides detailed discussions on wave propagation and interaction with materials, which are fundamental to understanding polarization changes.

---

### 4. Applications of Polarization

*   **Antenna Design:** The polarization of the electromagnetic wave radiated by an antenna is crucial for efficient transmission and reception. Antennas are designed to radiate or receive specific polarizations. For maximum power transfer between transmitting and receiving antennas, their polarizations must match.

*   **Optical Devices:**
    *   **Polarizing Filters:** Used in sunglasses, camera filters, and LCD screens to control light intensity and reduce glare.
    *   **Wave Plates (Retarders):** Devices like half-wave plates and quarter-wave plates are used to change the polarization state of light (e.g., converting linear to circular polarization or vice-versa).

*   **Telecommunications:**
    *   **Satellite Communication:** Circular polarization is often used to avoid polarization losses due to the relative orientation of satellite and ground antennas.
    *   **Mobile Communication:** Different polarization schemes can be used to improve signal quality and increase channel capacity (polarization diversity).

*   **3D Glasses:** Active shutter 3D glasses use polarizing filters that alternate between linear polarizations to present different images to each eye.

*   **Remote Sensing:** Polarization can provide additional information about the target surface and its composition.

---

### 5. Polarization of Unpolarized and Partially Polarized Waves

**What are Unpolarized and Partially Polarized Waves?**

*   **Unpolarized Wave:** An unpolarized wave has an electric field vector whose orientation changes randomly and rapidly over time. It can be thought of as a collection of waves with all possible polarization states, each with equal probability.
*   **Partially Polarized Wave:** A partially polarized wave is a mixture of a polarized wave and an unpolarized wave.

**Representing with Stokes Parameters:**

For unpolarized and partially polarized waves, the Jones vector is insufficient. The **Stokes parameters** are used. There are four Stokes parameters ($S_0, S_1, S_2, S_3$) which represent:

*   $S_0$: Total intensity of the wave.
*   $S_1$: Intensity difference between horizontal and vertical linear polarizations.
*   $S_2$: Intensity difference between +45° and -45° linear polarizations.
*   $S_3$: Intensity difference between right and left circular polarizations.

The degree of polarization ($P$) can be calculated as:
$P = \frac{\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$
If $P=1$, the wave is fully polarized. If $P=0$, the wave is unpolarized. For partially polarized waves, $0 < P < 1$.

*   **Reference:** While not explicitly stated for polarization in the provided list, texts covering wave optics and modern optics would likely detail Stokes parameters. Nahvi's "Schaum's Outline of Electromagnetics" might have examples of advanced topics that touch upon this.

---

### 6. Practice Questions and Exercises

**Question 1:**
A linearly polarized plane wave is propagating in the +z direction. The electric field is given by:
$\vec{E}(z,t) = 10 \cos(\omega t - kz) \hat{x} + 10 \sin(\omega t - kz) \hat{y}$
Determine the polarization state of the wave.

**Answer 1:**
The electric field has components:
$E_x(z,t) = 10 \cos(\omega t - kz)$
$E_y(z,t) = 10 \sin(\omega t - kz)$
Here, the amplitudes of $E_x$ and $E_y$ are equal ($E_{0x} = E_{0y} = 10$), and there is a phase difference of $90^\circ$ ($\delta = \pi/2$). This represents **circular polarization**. To determine if it's left or right circular, we can check the rotation.
At $z=0$:
At $t=0$, $\vec{E}(0,0) = 10 \cos(0)\hat{x} + 10 \sin(0)\hat{y} = 10\hat{x}$ (along the positive x-axis).
At $t=\pi/(2\omega)$, $\vec{E}(0, \pi/(2\omega)) = 10 \cos(-\pi/2)\hat{x} + 10 \sin(-\pi/2)\hat{y} = -10\hat{y}$ (along the negative y-axis).
The electric field rotates counter-clockwise when viewed from the positive z-axis. Therefore, this is **left-circular polarization (LCP)**.

**Question 2:**
Write the Jones vector for a wave that is linearly polarized at an angle of $30^\circ$ with respect to the positive x-axis.

**Answer 2:**
For linear polarization at an angle $\theta$ to the x-axis, the electric field components are proportional to $\cos \theta$ and $\sin \theta$, and are in phase.
Given $\theta = 30^\circ$:
$\cos(30^\circ) = \frac{\sqrt{3}}{2}$
$\sin(30^\circ) = \frac{1}{2}$
The Jones vector, after normalization, is:
$J = \begin{bmatrix} \cos(30^\circ) \\ \sin(30^\circ) \end{bmatrix} = \begin{bmatrix} \sqrt{3}/2 \\ 1/2 \end{bmatrix}$
Or, equivalently, without normalization:
$J = \begin{bmatrix} \cos(30^\circ) \\ \sin(30^\circ) \end{bmatrix} = \begin{bmatrix} \sqrt{3}/2 \\ 1/2 \end{bmatrix}$ (This is a unit vector representing the direction).

**Question 3:**
A wave has electric field components $E_x(z,t) = 5 \cos(\omega t - kz)$ and $E_y(z,t) = 3 \cos(\omega t - kz + \pi/2)$. Describe its polarization.

**Answer 3:**
The electric field components are:
$E_x(z,t) = 5 \cos(\omega t - kz)$
$E_y(z,t) = 3 \cos(\omega t - kz + \pi/2) = 3 (-\sin(\omega t - kz)) = -3 \sin(\omega t - kz)$

Here, the amplitudes are different ($E_{0x} = 5$, $E_{0y} = 3$), and there is a phase difference of $\pi/2$ between the x and y components (when expressed in cosine form, $E_y = 3 \cos(\omega t - kz + \pi/2)$). This indicates **elliptical polarization**.

To be more precise about the shape of the ellipse and its orientation, one would typically analyze the locus of the $\vec{E}$ vector, which is more complex with unequal amplitudes and phase shifts. However, the presence of unequal amplitudes and a phase difference of $\pi/2$ guarantees an elliptical polarization that is generally not circular or linear.

---

### 7. Important Points to Remember

*   **Polarization** describes the orientation of the electric field vector of an electromagnetic wave.
*   Electromagnetic waves are **transverse**, meaning the electric field is perpendicular to the direction of propagation.
*   **Linear, Circular, and Elliptical polarization** are the main types, distinguished by the path traced by the electric field vector.
*   **Linear polarization** occurs when $\vec{E}$ oscillates along a straight line.
*   **Circular polarization** occurs when $\vec{E}$ has constant magnitude and rotates in a circle. It can be right-circular (RCP) or left-circular (LCP).
*   **Elliptical polarization** is the general case where $\vec{E}$ rotates in an elliptical path.
*   The **Jones vector** is a mathematical tool to represent fully polarized, monochromatic waves using the complex amplitudes of the electric field components.
*   The polarization of a wave can change when propagating through **anisotropic media** or when undergoing **reflection/transmission** at interfaces.
*   **Brewster's angle** is important for understanding polarization effects at reflection.
*   For **unpolarized or partially polarized waves**, **Stokes parameters** are used.
*   Matching antenna polarization is crucial for efficient **power transfer**.

---

### 8. Alignment with Course Outcomes

*   **CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields. (Knowledge Level: K2)**
    *   This topic builds upon the understanding of vector fields as derived from Maxwell's equations. The mathematical representation of $\vec{E}$ with its components and the use of Jones vectors directly address this outcome.
*   **CO2: Apply Maxwell’s equations in different forms to diverse electromagnetic problems. (Knowledge Level: K3)**
    *   While polarization is a *solution property* derived from wave propagation which is governed by Maxwell's equations, understanding how these equations lead to transverse waves with specific field orientations implicitly links to CO2. If one were to analyze a wave in a specific medium, Maxwell's equations would be the starting point to understand its polarization behavior.
*   **CO3: Analyze reflection, refraction and power density of electromagnetic waves. (Knowledge Level: K3)**
    *   The section on polarization and wave propagation explicitly discusses reflection and transmission at interfaces and how polarization affects these phenomena (e.g., Fresnel equations, Brewster's angle). Understanding polarization is key to calculating reflection coefficients and power distribution.
*   **CO4: Analyse the propagation of EM waves in transmission lines and wave guides. (Knowledge Level: K3)**
    *   While this topic focuses on plane waves in free space or general media, the fundamental principles of polarization are extended to guided structures. Different modes in waveguides have specific polarization characteristics (e.g., TE, TM, TEM modes).

---

This comprehensive set of study notes covers the topic of polarization of waves within the context of Module 2: Maxwell's Equations from Fundamental Laws. It aims to provide a thorough understanding with definitions, mathematical representations, examples, and connections to the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
