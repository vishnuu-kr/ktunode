---
title: "Reflection and refraction of plane electromagnetic waves at boundaries for normal & oblique incidence (parallel and perpendicular polarization), Snell’s law of refraction, Brewster angle."
subject: "ELECTROMAGNETICS"
module: "Module 3: Reflection and refraction of plane electromagnetic waves at boundaries for normal & oblique incidence (parallel and perpendicular polarization), Snell’s law of refraction, Brewster angle."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d6"
status: "completed"
scrapedAt: "2026-05-23T17:56:32.570Z"
---
# Module 3: Reflection and Refraction of Plane Electromagnetic Waves

## Introduction

This module delves into the behavior of plane electromagnetic waves as they encounter a boundary between two different media. We will explore how these waves are reflected back into the original medium and refracted into the second medium, analyzing the conditions under which this occurs for both normal and oblique incidences. The concepts of polarization, Snell's Law, and the Brewster angle will be central to our understanding.

**Course Outcomes Addressed:**
*   **CO3:** Analyze reflection, refraction, and power density of electromagnetic waves. (K3)

## 3.1 Reflection and Refraction at a Boundary

When an electromagnetic wave encounters a boundary between two different media, it can be partially reflected back into the incident medium and partially transmitted (refracted) into the second medium. This phenomenon is governed by the properties of the two media, specifically their permittivity ($\epsilon$), permeability ($\mu$), and conductivity ($\sigma$).

### 3.1.1 Key Concepts and Definitions

*   **Incident Wave:** The electromagnetic wave that strikes the boundary.
*   **Reflected Wave:** The portion of the incident wave that bounces back into the original medium.
*   **Transmitted (Refracted) Wave:** The portion of the incident wave that passes into the second medium.
*   **Boundary:** The interface separating two different media.
*   **Medium Properties:**
    *   **Permittivity ($\epsilon$):** A measure of how well a material stores electrical energy in an electric field.
    *   **Permeability ($\mu$):** A measure of how well a material supports the formation of a magnetic field.
    *   **Conductivity ($\sigma$):** A measure of how easily electric current flows through a material.
*   **Intrinsic Impedance ($\eta$):** The ratio of the electric field to the magnetic field in a medium. For a lossless medium, $\eta = \sqrt{\frac{\mu}{\epsilon}}$.
*   **Reflection Coefficient ($\Gamma$):** The ratio of the reflected electric field amplitude to the incident electric field amplitude.
*   **Transmission Coefficient ($T$):** The ratio of the transmitted electric field amplitude to the incident electric field amplitude.
*   **Power Density:** The rate of energy flow per unit area, often described by the Poynting vector ($\mathbf{S}$).

**Textbook References:**
*   Sadiku: Chapter 9 (Plane Wave Propagation) - discusses wave properties and impedance.
*   Hayt & Buck: Chapter 7 (Wave Propagation in Lossless and Lossy Media) - covers wave behavior and boundaries.
*   Reddy: Chapter 4 (Electromagnetic Wave Propagation) - elaborates on wave propagation characteristics.

## 3.2 Normal Incidence

Normal incidence occurs when the direction of propagation of the incident wave is perpendicular to the boundary surface.

### 3.2.1 Key Concepts and Definitions

*   **Angle of Incidence ($\theta_i$):** The angle between the incident wave vector and the normal to the boundary. For normal incidence, $\theta_i = 0^\circ$.

### 3.2.2 Mathematical Formulation (Lossless Media)

Consider a plane wave incident normally from medium 1 (with intrinsic impedance $\eta_1$) to medium 2 (with intrinsic impedance $\eta_2$).

Let the incident electric field be $\mathbf{E}_i = E_{0i} \hat{\mathbf{x}} e^{-j\beta_1 z}$.
The incident magnetic field is $\mathbf{H}_i = \frac{E_{0i}}{\eta_1} \hat{\mathbf{y}} e^{-j\beta_1 z}$.

At the boundary ($z=0$):
*   The tangential electric field must be continuous: $E_{ix} + E_{rx} = E_{tx}$
*   The tangential magnetic field must be continuous: $H_{iy} + H_{ry} = H_{ty}$

The reflected electric field is $\mathbf{E}_r = \Gamma E_{0i} \hat{\mathbf{x}} e^{j\beta_1 z}$.
The reflected magnetic field is $\mathbf{H}_r = -\frac{\Gamma E_{0i}}{\eta_1} \hat{\mathbf{y}} e^{j\beta_1 z}$.

The transmitted electric field is $\mathbf{E}_t = E_{0t} \hat{\mathbf{x}} e^{-j\beta_2 z}$.
The transmitted magnetic field is $\mathbf{H}_t = \frac{E_{0t}}{\eta_2} \hat{\mathbf{y}} e^{-j\beta_2 z}$.

Applying boundary conditions:
1.  $E_{0i} + \Gamma E_{0i} = E_{0t}$
2.  $\frac{E_{0i}}{\eta_1} - \frac{\Gamma E_{0i}}{\eta_1} = \frac{E_{0t}}{\eta_2}$

Substituting $E_{0t}$ from (1) into (2):
$\frac{E_{0i}}{\eta_1} (1 - \Gamma) = \frac{E_{0i}(1 + \Gamma)}{\eta_2}$
$\eta_2 (1 - \Gamma) = \eta_1 (1 + \Gamma)$
$\eta_2 - \eta_2 \Gamma = \eta_1 + \eta_1 \Gamma$
$\eta_2 - \eta_1 = (\eta_1 + \eta_2) \Gamma$

**Reflection Coefficient ($\Gamma$):**
$\Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1}$

**Transmission Coefficient ($T$):**
From $E_{0t} = E_{0i}(1 + \Gamma)$, we have $T = \frac{E_{0t}}{E_{0i}} = 1 + \Gamma$.
$T = 1 + \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{\eta_2 + \eta_1 + \eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{2\eta_2}{\eta_2 + \eta_1}$

**Important Points to Remember:**
*   If $\eta_2 > \eta_1$ (e.g., air to dielectric), $\Gamma$ is positive, and the reflected wave is in phase with the incident wave.
*   If $\eta_2 < \eta_1$ (e.g., dielectric to air), $\Gamma$ is negative, and the reflected wave is $180^\circ$ out of phase with the incident wave. This is equivalent to a phase shift of $\pi$ radians.

### 3.2.3 Example

A plane wave traveling in air ($\eta_1 = 377 \, \Omega$) is incident normally on a non-magnetic dielectric material ($\eta_2 = 200 \, \Omega$). Calculate the reflection and transmission coefficients.

**Solution:**
$\Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{200 - 377}{200 + 377} = \frac{-177}{577} \approx -0.307$

$T = 1 + \Gamma = 1 - 0.307 = 0.693$
Alternatively, $T = \frac{2\eta_2}{\eta_2 + \eta_1} = \frac{2 \times 200}{200 + 377} = \frac{400}{577} \approx 0.693$

The negative reflection coefficient indicates a $180^\circ$ phase shift for the reflected wave.

### 3.2.4 Power Transfer

The power transmitted across the boundary is related to the transmission coefficient and the intrinsic impedances.
Power Reflection Coefficient ($|\Gamma|^2$): The fraction of incident power that is reflected.
Power Transmission Coefficient ($P_t/P_i$): The fraction of incident power that is transmitted.
For lossless media, the incident power is the sum of reflected and transmitted power.
$P_i = P_r + P_t$
$\frac{P_r}{P_i} = |\Gamma|^2$
$\frac{P_t}{P_i} = \frac{\eta_1}{\eta_2} |T|^2 = \frac{\eta_1}{\eta_2} \left(\frac{2\eta_2}{\eta_1 + \eta_2}\right)^2 = \frac{4\eta_1\eta_2}{(\eta_1 + \eta_2)^2}$

**Check:** $|\Gamma|^2 + \frac{\eta_1}{\eta_2} |T|^2 = \left(\frac{\eta_2 - \eta_1}{\eta_2 + \eta_1}\right)^2 + \frac{4\eta_1\eta_2}{(\eta_1 + \eta_2)^2} = \frac{\eta_2^2 - 2\eta_1\eta_2 + \eta_1^2 + 4\eta_1\eta_2}{(\eta_1 + \eta_2)^2} = \frac{\eta_1^2 + 2\eta_1\eta_2 + \eta_2^2}{(\eta_1 + \eta_2)^2} = 1$.

## 3.3 Oblique Incidence

Oblique incidence occurs when the direction of propagation of the incident wave is at an angle to the boundary surface. This is a more general case and requires considering the polarization of the wave.

### 3.3.1 Key Concepts and Definitions

*   **Angle of Incidence ($\theta_i$):** The angle between the incident wave vector and the normal to the boundary.
*   **Angle of Reflection ($\theta_r$):** The angle between the reflected wave vector and the normal to the boundary.
*   **Angle of Transmission/Refraction ($\theta_t$):** The angle between the transmitted wave vector and the normal to the boundary.
*   **Polarization:** The orientation of the electric field vector of the electromagnetic wave.
    *   **Perpendicular Polarization (TE or E-perp):** The electric field vector is perpendicular to the plane of incidence. The plane of incidence is defined by the incident wave vector and the normal to the boundary.
    *   **Parallel Polarization (TM or E-para):** The electric field vector is parallel to the plane of incidence.

**Textbook References:**
*   Sadiku: Chapter 9.4 (Plane Waves at Boundaries: Oblique Incidence) - detailed analysis of both polarizations.
*   Hayt & Buck: Chapter 7.6 (Wave Propagation in Lossless Media - Oblique Incidence) - covers the concepts and derivations for both polarizations.
*   Reddy: Chapter 4.5 (Reflection and Refraction of Plane Waves at the Boundary) - provides a comprehensive treatment of oblique incidence.

### 3.3.2 Perpendicular Polarization (TE)

In this case, the electric field is perpendicular to the plane of incidence.

*   Let the boundary be the $xy$-plane, and the normal be along the $z$-axis.
*   Let the plane of incidence be the $yz$-plane.
*   The incident wave propagates in the $z$ direction with an angle $\theta_i$ with respect to the $z$-axis. The wave vector components are $k_{iz} = k_1 \cos \theta_i$ and $k_{iy} = k_1 \sin \theta_i$.
*   The electric field is polarized in the $\hat{\mathbf{x}}$ direction: $\mathbf{E}_i = E_{0i} \hat{\mathbf{x}} e^{-j(k_{iy}y + k_{iz}z)}$.
*   The magnetic field components will be in the $y$ and $z$ directions.

**Boundary Conditions:**
*   Tangential electric field is continuous: $E_{ix} = E_{rx} = E_{tx}$
*   Tangential magnetic field is continuous: $H_{iy} = H_{ry} = H_{ty}$

**Reflection Coefficient for Perpendicular Polarization ($\Gamma_{\perp}$):**
$\Gamma_{\perp} = \frac{\eta_2 \cos \theta_i - \eta_1 \cos \theta_t}{\eta_2 \cos \theta_i + \eta_1 \cos \theta_t}$

**Transmission Coefficient for Perpendicular Polarization ($T_{\perp}$):**
$T_{\perp} = \frac{2\eta_2 \cos \theta_i}{\eta_2 \cos \theta_i + \eta_1 \cos \theta_t}$

### 3.3.3 Parallel Polarization (TM)

In this case, the electric field is parallel to the plane of incidence.

*   The electric field will have components in the $y$ and $z$ directions.
*   $\mathbf{E}_i = E_{0i} (\cos \theta_i \hat{\mathbf{y}} - \sin \theta_i \hat{\mathbf{z}}) e^{-j(k_{iy}y + k_{iz}z)}$.
*   The magnetic field will be polarized in the $\hat{\mathbf{x}}$ direction: $\mathbf{H}_i = \frac{E_{0i}}{\eta_1} \hat{\mathbf{x}} e^{-j(k_{iy}y + k_{iz}z)}$.

**Boundary Conditions:**
*   Tangential electric field is continuous: $E_{iy} = E_{ry} = E_{ty}$ (Note: $E_z$ components are also tangential).
*   Tangential magnetic field is continuous: $H_{ix} = H_{rx} = H_{tx}$

**Reflection Coefficient for Parallel Polarization ($\Gamma_{\parallel}$):**
$\Gamma_{\parallel} = \frac{\eta_2 \cos \theta_t - \eta_1 \cos \theta_i}{\eta_2 \cos \theta_t + \eta_1 \cos \theta_i}$

**Transmission Coefficient for Parallel Polarization ($T_{\parallel}$):**
$T_{\parallel} = \frac{2\eta_2 \cos \theta_i}{\eta_2 \cos \theta_t + \eta_1 \cos \theta_i}$

**Important Note on $\theta_t$:**
The angle of refraction $\theta_t$ is related to the angle of incidence $\theta_i$ by Snell's Law of Refraction.

## 3.4 Snell's Law of Refraction

Snell's Law describes the relationship between the angles of incidence and refraction and the properties of the media. It arises from the continuity of the tangential components of the wave vector at the boundary.

### 3.4.1 Key Concepts and Definitions

*   **Snell's Law:** A fundamental law in optics and electromagnetics that relates the angles of incidence and refraction to the refractive indices of the two media.

### 3.4.2 Mathematical Formulation

From the continuity of the tangential component of the wave vector ($k_y$) at the boundary:
$k_{1y} = k_{2y}$
$(\omega/v_1) \sin \theta_i = (\omega/v_2) \sin \theta_t$
where $v_1$ and $v_2$ are the wave velocities in medium 1 and 2, respectively.

Since $v = 1/\sqrt{\mu\epsilon}$, we have:
$\sqrt{\mu_1\epsilon_1} \sin \theta_i = \sqrt{\mu_2\epsilon_2} \sin \theta_t$

Often, media are characterized by their refractive indices ($n$), where $n = c/v = \sqrt{\mu_r\epsilon_r}$ (assuming vacuum has $\mu_0, \epsilon_0$).
$n_1 \sin \theta_i = n_2 \sin \theta_t$

**Snell's Law of Refraction:** $n_1 \sin \theta_i = n_2 \sin \theta_t$

**Textbook References:**
*   Sadiku: Chapter 9.4.1 (Snell's Law) - derivation and explanation.
*   Hayt & Buck: Chapter 7.6.1 (Snell's Law) - provides the derivation from wave propagation properties.
*   Reddy: Chapter 4.5.1 (Snell's Law) - clearly outlines the law and its implications.

### 3.4.3 Example

A plane wave in air ($n_1 \approx 1$) is incident at an angle of $30^\circ$ on a dielectric medium with a refractive index $n_2 = 1.5$. What is the angle of refraction?

**Solution:**
Using Snell's Law: $n_1 \sin \theta_i = n_2 \sin \theta_t$
$1 \cdot \sin 30^\circ = 1.5 \cdot \sin \theta_t$
$0.5 = 1.5 \sin \theta_t$
$\sin \theta_t = \frac{0.5}{1.5} = \frac{1}{3}$
$\theta_t = \arcsin(\frac{1}{3}) \approx 19.47^\circ$

## 3.5 Brewster Angle

The Brewster angle (also known as the polarization angle) is a specific angle of incidence at which light with a particular polarization is perfectly transmitted through a dielectric surface, with no reflection.

### 3.5.1 Key Concepts and Definitions

*   **Brewster Angle ($\theta_B$):** The angle of incidence at which the reflection coefficient for parallel polarization ($\Gamma_{\parallel}$) is zero. At this angle, the reflected wave is entirely polarized perpendicular to the plane of incidence.

### 3.5.2 Mathematical Formulation

For $\Gamma_{\parallel} = 0$, the numerator must be zero:
$\eta_2 \cos \theta_t - \eta_1 \cos \theta_i = 0$
$\eta_2 \cos \theta_t = \eta_1 \cos \theta_i$

Using Snell's Law: $\sin \theta_t = \frac{n_1}{n_2} \sin \theta_i$.
Also, for a lossless medium, $\eta = \sqrt{\mu/\epsilon}$. If both media are non-magnetic ($\mu_1 = \mu_2 = \mu_0$), then $\eta_1 = \sqrt{\mu_0/\epsilon_1}$ and $\eta_2 = \sqrt{\mu_0/\epsilon_2}$.
$\frac{\eta_1}{\eta_2} = \frac{\sqrt{\mu_0/\epsilon_1}}{\sqrt{\mu_0/\epsilon_2}} = \sqrt{\frac{\epsilon_2}{\epsilon_1}}$.
And $n = \sqrt{\mu_r\epsilon_r}$. If $\mu_r = 1$, then $n = \sqrt{\epsilon_r}$.
$\frac{n_1}{n_2} = \frac{\sqrt{\epsilon_{r1}}}{\sqrt{\epsilon_{r2}}} = \sqrt{\frac{\epsilon_1}{\epsilon_2}}$.
Therefore, $\frac{\eta_1}{\eta_2} = \frac{n_2}{n_1}$.

Substituting into the condition for $\Gamma_{\parallel} = 0$:
$\frac{n_1}{n_2} \cos \theta_t = \frac{n_2}{n_1} \cos \theta_i$
$\frac{\eta_2}{\eta_1} \cos \theta_t = \frac{\eta_1}{\eta_2} \cos \theta_i \implies \eta_2^2 \cos \theta_t = \eta_1^2 \cos \theta_i$

Let's use the refractive indices:
$\frac{\eta_2}{\eta_1} \sqrt{1 - \sin^2 \theta_t} = \frac{\eta_1}{\eta_2} \cos \theta_i$
$\frac{\eta_2}{\eta_1} \sqrt{1 - (\frac{n_1}{n_2})^2 \sin^2 \theta_i} = \frac{\eta_1}{\eta_2} \cos \theta_i$

A simpler approach uses the fact that at the Brewster angle, the reflected and refracted rays are perpendicular. This is a known result from optics, which implies $\theta_i + \theta_t = 90^\circ$.
If $\theta_t = 90^\circ - \theta_i$, then $\sin \theta_t = \cos \theta_i$.
From Snell's Law: $n_1 \sin \theta_i = n_2 \sin \theta_t = n_2 \cos \theta_i$.
$\tan \theta_i = \frac{n_2}{n_1}$.

Therefore, the **Brewster Angle ($\theta_B$)** is given by:
$\tan \theta_B = \frac{n_2}{n_1}$

**Brewster's Law:** $\theta_i = \arctan\left(\frac{n_2}{n_1}\right)$

**Important Points to Remember:**
*   Brewster's angle exists only for parallel polarization. For perpendicular polarization, the reflection coefficient is never zero (except for the trivial case where $\eta_1 = \eta_2$).
*   When unpolarized light is incident at the Brewster angle, the reflected light is perfectly polarized perpendicularly to the plane of incidence.
*   If the incident medium is air ($n_1 = 1$) and the second medium is a dielectric with refractive index $n$, then $\tan \theta_B = n$.

**Textbook References:**
*   Sadiku: Chapter 9.4.3 (Brewster Angle) - clear derivation and physical interpretation.
*   Hayt & Buck: Chapter 7.6.3 (Brewster Angle) - explains the polarization of reflected light.
*   Reddy: Chapter 4.5.3 (Brewster's Angle) - provides the condition for zero reflection.

### 3.5.3 Example

For a plane wave incident from air ($n_1 \approx 1$) onto glass ($n_2 = 1.5$), find the Brewster angle. At this angle, what is the reflection coefficient for perpendicular polarization?

**Solution:**
Brewster Angle:
$\tan \theta_B = \frac{n_2}{n_1} = \frac{1.5}{1} = 1.5$
$\theta_B = \arctan(1.5) \approx 56.3^\circ$

Reflection Coefficient for Perpendicular Polarization at $\theta_B$:
We need to relate $\cos \theta_t$ to $\theta_B$.
Since $\tan \theta_B = n_2/n_1$, we have $\sin \theta_B = \frac{n_2}{\sqrt{n_1^2 + n_2^2}}$ and $\cos \theta_B = \frac{n_1}{\sqrt{n_1^2 + n_2^2}}$.
From Snell's Law, $\sin \theta_t = \frac{n_1}{n_2} \sin \theta_B = \frac{n_1}{n_2} \frac{n_2}{\sqrt{n_1^2 + n_2^2}} = \frac{n_1}{\sqrt{n_1^2 + n_2^2}}$.
So, $\sin \theta_t = \cos \theta_B$. This implies $\theta_t = 90^\circ - \theta_B$.
Then, $\cos \theta_t = \sin \theta_B = \frac{n_2}{\sqrt{n_1^2 + n_2^2}}$.

Now, substitute into $\Gamma_{\perp}$:
$\Gamma_{\perp} = \frac{\eta_2 \cos \theta_i - \eta_1 \cos \theta_t}{\eta_2 \cos \theta_i + \eta_1 \cos \theta_t}$
Using $\eta = \sqrt{\mu/\epsilon}$ and $n = \sqrt{\mu_r\epsilon_r}$, and assuming non-magnetic materials ($\mu_1=\mu_2=\mu_0$), so $\eta_1/\eta_2 = n_2/n_1$:
$\Gamma_{\perp} = \frac{(n_1/n_2) \cos \theta_B - (n_2/n_1) \cos \theta_t}{(n_1/n_2) \cos \theta_B + (n_2/n_1) \cos \theta_t}$
Substitute $\cos \theta_t = \sin \theta_B$:
$\Gamma_{\perp} = \frac{(n_1/n_2) \cos \theta_B - (n_2/n_1) \sin \theta_B}{(n_1/n_2) \cos \theta_B + (n_2/n_1) \sin \theta_B}$
Divide numerator and denominator by $\cos \theta_B$:
$\Gamma_{\perp} = \frac{(n_1/n_2) - (n_2/n_1) \tan \theta_B}{(n_1/n_2) + (n_2/n_1) \tan \theta_B}$
Substitute $\tan \theta_B = n_2/n_1$:
$\Gamma_{\perp} = \frac{(n_1/n_2) - (n_2/n_1)(n_2/n_1)}{(n_1/n_2) + (n_2/n_1)(n_2/n_1)} = \frac{(n_1/n_2) - (n_2/n_1)^2}{(n_1/n_2) + (n_2/n_1)^2}$
$\Gamma_{\perp} = \frac{n_1^3 - n_2^3}{n_1^3 + n_1 n_2^2} \times \frac{n_1}{n_2}$  (This is getting complicated, let's use the direct $\eta$ form with $\cos \theta_t = \sin \theta_B$)
$\Gamma_{\perp} = \frac{\eta_2 \cos \theta_B - \eta_1 \sin \theta_B}{\eta_2 \cos \theta_B + \eta_1 \sin \theta_B}$
Divide numerator and denominator by $\cos \theta_B$:
$\Gamma_{\perp} = \frac{\eta_2 - \eta_1 \tan \theta_B}{\eta_2 + \eta_1 \tan \theta_B}$
Substitute $\tan \theta_B = n_2/n_1$ and $\eta_1/\eta_2 = n_2/n_1$ (or $\eta_2/\eta_1 = n_1/n_2$):
$\Gamma_{\perp} = \frac{\eta_2 - \eta_1 (n_2/n_1)}{\eta_2 + \eta_1 (n_2/n_1)}$
Using $\eta_2/\eta_1 = n_1/n_2$:
$\Gamma_{\perp} = \frac{(n_1/n_2)\eta_1 - \eta_1 (n_2/n_1)}{(n_1/n_2)\eta_1 + \eta_1 (n_2/n_1)} = \frac{(n_1/n_2) - (n_2/n_1)}{(n_1/n_2) + (n_2/n_1)}$
$\Gamma_{\perp} = \frac{n_1^2 - n_2^2}{n_1^2 + n_2^2}$

For our example: $n_1=1, n_2=1.5$.
$\Gamma_{\perp} = \frac{1^2 - 1.5^2}{1^2 + 1.5^2} = \frac{1 - 2.25}{1 + 2.25} = \frac{-1.25}{3.25} \approx -0.385$

So, at the Brewster angle, the reflection coefficient for perpendicular polarization is NOT zero.

## 3.6 Practice Questions and Exercises

**Question 1:**
A plane wave traveling in air is incident normally on a lossless dielectric medium. If the intrinsic impedance of the dielectric is half that of air, calculate the reflection and transmission coefficients for the electric field. What is the ratio of the power transmitted to the power incident?

**Answer 1:**
Let $\eta_1$ be the impedance of air and $\eta_2 = \eta_1/2$ be the impedance of the dielectric.
$\Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{\eta_1/2 - \eta_1}{\eta_1/2 + \eta_1} = \frac{-\eta_1/2}{3\eta_1/2} = -\frac{1}{3}$
$T = 1 + \Gamma = 1 - \frac{1}{3} = \frac{2}{3}$
Power Reflection Coefficient: $|\Gamma|^2 = (-1/3)^2 = 1/9$.
Power Transmission Coefficient: $\frac{P_t}{P_i} = 1 - |\Gamma|^2 = 1 - 1/9 = 8/9$.
Alternatively, $\frac{P_t}{P_i} = \frac{\eta_1}{\eta_2} |T|^2 = \frac{\eta_1}{\eta_1/2} (2/3)^2 = 2 \times 4/9 = 8/9$.

**Question 2:**
A plane wave is incident from water ($n_1 = 1.33$) to air ($n_2 = 1$) at an angle of $45^\circ$. Calculate the angle of refraction. Is there total internal reflection?

**Answer 2:**
Using Snell's Law: $n_1 \sin \theta_i = n_2 \sin \theta_t$
$1.33 \sin 45^\circ = 1 \sin \theta_t$
$1.33 \times 0.707 = \sin \theta_t$
$\sin \theta_t = 0.94031$
$\theta_t = \arcsin(0.94031) \approx 70.1^\circ$
Since $\theta_t > 0$, there is no total internal reflection. Total internal reflection occurs when $\sin \theta_t > 1$, which means $\frac{n_1}{n_2} \sin \theta_i > 1$.

**Question 3:**
For a plane wave incident from a medium with refractive index $n_1$ to a medium with refractive index $n_2$, under what conditions is the reflection coefficient for parallel polarization zero? What is this angle called?

**Answer 3:**
The reflection coefficient for parallel polarization ($\Gamma_{\parallel}$) is zero when $\eta_2 \cos \theta_t - \eta_1 \cos \theta_i = 0$. This condition, when combined with Snell's Law, leads to $\tan \theta_i = n_2/n_1$. This angle is called the Brewster angle.

**Question 4:**
Consider a plane wave incident from air to a dielectric with refractive index $n=1.6$.
a) Calculate the Brewster angle.
b) At the Brewster angle, calculate the reflection coefficient for perpendicular polarization.
c) At the Brewster angle, calculate the transmission coefficient for parallel polarization.

**Answer 4:**
Given: $n_1 = 1$ (air), $n_2 = 1.6$ (dielectric). Assume non-magnetic media, so $\eta_1/\eta_2 = n_2/n_1 = 1.6$.
a) Brewster angle $\theta_B$:
$\tan \theta_B = n_2/n_1 = 1.6/1 = 1.6$
$\theta_B = \arctan(1.6) \approx 58.0^\circ$

b) Reflection coefficient for perpendicular polarization ($\Gamma_{\perp}$) at $\theta_B$:
We derived $\Gamma_{\perp} = \frac{n_1^2 - n_2^2}{n_1^2 + n_2^2}$ at $\theta_B$.
$\Gamma_{\perp} = \frac{1^2 - 1.6^2}{1^2 + 1.6^2} = \frac{1 - 2.56}{1 + 2.56} = \frac{-1.56}{3.56} \approx -0.438$

c) Transmission coefficient for parallel polarization ($T_{\parallel}$) at $\theta_B$:
We know $\Gamma_{\parallel} = 0$ at $\theta_B$.
$T_{\parallel} = 1 + \Gamma_{\parallel} = 1 + 0 = 1$.
Alternatively, $T_{\parallel} = \frac{2\eta_2 \cos \theta_i}{\eta_2 \cos \theta_t + \eta_1 \cos \theta_i}$. At $\theta_i = \theta_B$, we have $\theta_t = 90^\circ - \theta_B$.
$\cos \theta_t = \sin \theta_B$.
$T_{\parallel} = \frac{2\eta_2 \cos \theta_B}{\eta_2 \sin \theta_B + \eta_1 \cos \theta_B}$.
Divide numerator and denominator by $\cos \theta_B$:
$T_{\parallel} = \frac{2\eta_2}{\eta_2 \tan \theta_B + \eta_1}$.
Substitute $\tan \theta_B = n_2/n_1$ and $\eta_2/\eta_1 = n_1/n_2$:
$T_{\parallel} = \frac{2(n_1/n_2)\eta_1}{(n_1/n_2)\eta_1 (n_2/n_1) + \eta_1} = \frac{2(n_1/n_2)\eta_1}{\eta_1 + \eta_1} = \frac{2(n_1/n_2)\eta_1}{2\eta_1} = \frac{n_1}{n_2}$.
Wait, this is incorrect. Let's re-evaluate $T_{\parallel}$.
From the relationship $E_{tx} = E_{0t} (\cos \theta_t \hat{\mathbf{y}} - \sin \theta_t \hat{\mathbf{z}})$.
Boundary condition: $E_{iy} = E_{ty}$.
$E_{iy} = E_{0i} \cos \theta_i$.
$E_{ty} = E_{0t} \cos \theta_t$.
$E_{0i} \cos \theta_i = E_{0t} \cos \theta_t \implies T_{\parallel} = \frac{E_{0t}}{E_{0i}} = \frac{\cos \theta_i}{\cos \theta_t}$.
At $\theta_i = \theta_B$, $\cos \theta_t = \sin \theta_B$.
$T_{\parallel} = \frac{\cos \theta_B}{\sin \theta_B} = \cot \theta_B$.
Since $\tan \theta_B = n_2/n_1$, $\cot \theta_B = n_1/n_2$.
So, $T_{\parallel} = n_1/n_2$.

For our example: $T_{\parallel} = 1/1.6 = 0.625$.

Let's recheck the $T_{\parallel}$ formula from textbooks.
$T_{\parallel} = \frac{2 \eta_2 \cos \theta_i}{\eta_2 \cos \theta_t + \eta_1 \cos \theta_i}$.
At $\theta_B$, $\eta_2 \cos \theta_t = \eta_1 \cos \theta_i$, so the denominator is $2 \eta_1 \cos \theta_i$.
$T_{\parallel} = \frac{2 \eta_2 \cos \theta_i}{2 \eta_1 \cos \theta_i} = \frac{\eta_2}{\eta_1} = \frac{n_1}{n_2}$.
This confirms $T_{\parallel} = n_1/n_2$.
For $n_1=1, n_2=1.6$, $T_{\parallel} = 1/1.6 = 0.625$.

## 3.7 Summary and Key Takeaways

*   **Normal Incidence:** Reflection and transmission coefficients depend on the intrinsic impedances of the two media. For lossless media, $|\Gamma|^2 + \frac{\eta_1}{\eta_2} |T|^2 = 1$.
*   **Oblique Incidence:** Behavior depends on polarization.
    *   **Perpendicular Polarization (TE):** $\Gamma_{\perp}$ and $T_{\perp}$ depend on $\eta_1, \eta_2, \theta_i, \theta_t$.
    *   **Parallel Polarization (TM):** $\Gamma_{\parallel}$ and $T_{\parallel}$ depend on $\eta_1, \eta_2, \theta_i, \theta_t$.
*   **Snell's Law:** $n_1 \sin \theta_i = n_2 \sin \theta_t$, relating angles of incidence and refraction to refractive indices.
*   **Brewster Angle:** The angle of incidence where parallel polarization is perfectly transmitted ($\Gamma_{\parallel} = 0$). It's given by $\tan \theta_B = n_2/n_1$. At this angle, the reflected wave is perpendicularly polarized.
*   **Total Internal Reflection (TIR):** Occurs when a wave travels from a denser medium to a rarer medium ($n_1 > n_2$) and the angle of incidence exceeds the critical angle ($\theta_c = \arcsin(n_2/n_1)$). In this case, there is no transmitted wave, and the wave is entirely reflected.

This module lays the foundation for understanding wave propagation and interaction with matter, crucial for many applications in electromagnetics, optics, and telecommunications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
