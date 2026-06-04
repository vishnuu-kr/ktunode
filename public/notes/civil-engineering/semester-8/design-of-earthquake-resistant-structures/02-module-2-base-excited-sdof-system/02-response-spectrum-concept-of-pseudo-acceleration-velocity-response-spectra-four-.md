---
title: "Response spectrum:  Concept of pseudo acceleration, velocity. Response spectra, Four-way logarithmic plot – DVA spectrum (concept only)."
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 2: Base excited SDOF system  "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119b2"
status: "completed"
scrapedAt: "2026-05-20T19:02:49.595Z"
---
# Design of Earthquake Resistant Structures

## Module 2: Base Excited SDOF System

### Topic: Response Spectrum

This module delves into the behavior of a Single Degree of Freedom (SDOF) system when subjected to earthquake ground motion. The Response Spectrum is a crucial tool for understanding this behavior, particularly in earthquake engineering.

---

### 1. Concept of Pseudo Acceleration and Pseudo Velocity

When a structure is subjected to ground motion, its motion is characterized by displacement, velocity, and acceleration relative to the ground. However, for analysis and design purposes, especially in earthquake engineering, it's often more convenient to consider the *absolute* acceleration and velocity of the mass of the SDOF system.

#### 1.1 Absolute Acceleration ($a_x$)

The absolute acceleration of the mass ($m$) in an SDOF system is the sum of the ground acceleration ($\ddot{u}_g$) and the relative acceleration ($\ddot{x}$), where $x$ is the displacement of the mass relative to the ground.

The equation of motion for a base-excited SDOF system is:
$m\ddot{x} + c\dot{x} + kx = -m\ddot{u}_g$

Dividing by $m$:
$\ddot{x} + \frac{c}{m}\dot{x} + \frac{k}{m}x = -\ddot{u}_g$

Let $\omega_n^2 = k/m$ (natural circular frequency squared) and $2\xi\omega_n = c/m$ (where $\xi$ is the damping ratio and $\omega_n$ is the natural circular frequency).
$\ddot{x} + 2\xi\omega_n\dot{x} + \omega_n^2 x = -\ddot{u}_g$

The absolute acceleration of the mass is given by:
$a_x = \ddot{x} + \ddot{u}_g$

From the equation of motion, we can rearrange to find $\ddot{x}$:
$\ddot{x} = -\ddot{u}_g - 2\xi\omega_n\dot{x} - \omega_n^2 x$

Substituting this back into the absolute acceleration equation:
$a_x = (-\ddot{u}_g - 2\xi\omega_n\dot{x} - \omega_n^2 x) + \ddot{u}_g$
$a_x = -2\xi\omega_n\dot{x} - \omega_n^2 x$

**Key Concept:**
*   **Absolute Acceleration ($a_x$):** The total acceleration of the mass of the SDOF system, considering both the ground motion and the system's relative motion.

#### 1.2 Pseudo Acceleration ($PSA$)

In earthquake engineering, when we consider the response of a structure to a specific ground motion, we are often interested in the *maximum* relative displacement ($x_{max}$) and *maximum* relative velocity ($\dot{x}_{max}$) that a structure of a certain natural period would experience.

The term $\omega_n^2 x$ is related to the acceleration of the mass if it were fixed to the ground and experiencing the same relative displacement. However, due to damping, the term $-2\xi\omega_n\dot{x}$ also contributes.

**Pseudo Acceleration ($PSA$)** is defined as:
$PSA = \omega_n^2 \cdot x_{max}$

where $x_{max}$ is the maximum relative displacement experienced by the SDOF system during the ground motion.

**Why "Pseudo"?**
It's called "pseudo" because it's not the true absolute acceleration of the mass. It's calculated using the maximum *relative* displacement and the natural frequency squared.

**Significance of PSA:**
PSA provides a measure of the inertial forces that a structure of a given period would experience during an earthquake. The inertial force is $F = ma = m(\omega_n^2 x)$. Therefore, $F = m \cdot PSA$.

#### 1.3 Pseudo Velocity ($PSV$)

Similarly, **Pseudo Velocity ($PSV$)** is defined as:
$PSV = \omega_n \cdot x_{max}$

where $x_{max}$ is the maximum relative displacement.

**Relationship between PSA and PSV:**
$PSA = \omega_n \cdot (\omega_n \cdot x_{max}) = \omega_n \cdot PSV$

**Significance of PSV:**
PSV represents the velocity of a simple harmonic oscillator with undamped natural frequency $\omega_n$ whose amplitude is equal to the maximum relative displacement $x_{max}$ of the system under the given ground motion. It can also be seen as related to the damping forces. The maximum damping force is $c\dot{x}_{max} = (2\xi\omega_n m)\dot{x}_{max}$. If we consider the velocity component associated with the maximum relative displacement, $\omega_n x_{max}$ is a representative velocity.

**Important Distinction:**
*   **Absolute Velocity ($V_x$):** Velocity of the mass relative to a fixed point in space. $V_x = \dot{x} + \dot{u}_g$.
*   **Pseudo Velocity ($PSV$):** Related to the maximum relative displacement and the natural frequency.

---

### 2. Response Spectra

A response spectrum is a graphical representation of the maximum response (e.g., displacement, velocity, or acceleration) of an SDOF system to a specific earthquake ground motion as a function of the system's natural period (or frequency) and damping.

#### 2.1 Generation of a Response Spectrum

For a given earthquake ground motion record ($\ddot{u}_g(t)$):

1.  **Select a natural period (T) or natural circular frequency ($\omega_n$) and damping ratio ($\xi$).**
2.  **Solve the equation of motion for the SDOF system:**
    $m\ddot{x} + c\dot{x} + kx = -m\ddot{u}_g(t)$
    or
    $\ddot{x} + 2\xi\omega_n\dot{x} + \omega_n^2 x = -\ddot{u}_g(t)$
    This is typically done numerically (e.g., using Newmark's method or Wilson's method).
3.  **Determine the maximum relative displacement ($x_{max}$) over the duration of the ground motion.**
4.  **Calculate the corresponding Pseudo Acceleration ($PSA = \omega_n^2 x_{max}$) and Pseudo Velocity ($PSV = \omega_n x_{max}$).**
5.  **Repeat steps 1-4 for a range of natural periods (T) and damping ratios ($\xi$).**
6.  **Plot the results.**

#### 2.2 Types of Response Spectra

Commonly plotted response quantities include:

*   **Maximum Relative Displacement ($SD$ or $X_{max}$):** The maximum displacement of the mass relative to the ground.
*   **Maximum Relative Velocity ($SV$ or $V_{max}$):** The maximum velocity of the mass relative to the ground.
*   **Maximum Absolute Acceleration ($SA$ or $A_{max}$):** The maximum absolute acceleration of the mass.

**Relationship between SA, SV, and SD:**
For an undamped system ($\xi = 0$), the response is simple harmonic. In this case:
*   $x(t) = X_{max} \sin(\omega_n t - \phi)$
*   $\dot{x}(t) = \omega_n X_{max} \cos(\omega_n t - \phi)$
*   $\ddot{x}(t) = -\omega_n^2 X_{max} \sin(\omega_n t - \phi)$

The absolute acceleration $a_x = \ddot{x} + \ddot{u}_g$. The maximum value of $-\ddot{x}$ is $\omega_n^2 X_{max}$, which is the $PSA$.
$a_{x,max} \approx \omega_n^2 X_{max} = PSA$ (This approximation is accurate for low damping).
$V_{max} \approx \omega_n X_{max} = PSV$

Therefore, for low damping:
$SA \approx \omega_n \cdot SV \approx \omega_n^2 \cdot SD$

The response spectrum is typically plotted with the **Natural Period (T)** on the x-axis and the response quantity (SD, SV, or SA) on the y-axis.

#### 2.3 Characteristics of a Typical Response Spectrum

A typical response spectrum for a single earthquake can be divided into three main regions:

1.  **Long Periods (Low Frequencies):**
    *   $T$ is large, so $\omega_n$ is small.
    *   $SA \approx \omega_n^2 SD$. As $T$ increases, $SD$ tends to be more uniform and closer to the ground displacement.
    *   Therefore, $SA$ tends to be small.
    *   $SV \approx \omega_n SD$. As $T$ increases, $SV$ tends to be more uniform.

2.  **Intermediate Periods (Moderate Frequencies):**
    *   This is the region where the spectral acceleration ($SA$) is relatively constant, often referred to as the "plateau" region.
    *   Structures with periods in this range experience significant amplification of ground motion.
    *   $SA \approx$ constant.
    *   $SV \approx SA/\omega_n$. As $T$ increases, $SV$ decreases.
    *   $SD \approx SA/\omega_n^2$. As $T$ increases, $SD$ increases quadratically.

3.  **Short Periods (High Frequencies):**
    *   $T$ is small, so $\omega_n$ is large.
    *   $SA \approx \omega_n^2 SD$. In this region, $SA$ tends to approach the peak ground acceleration ($PGA$).
    *   $SD$ tends to be small.
    *   $SV \approx \omega_n SD$. As $T$ decreases, $SV$ tends to decrease.

**Influence of Damping:**
*   **Higher damping reduces the spectral values** (SA, SV, SD) across all periods. The reduction is more pronounced in the intermediate and short period regions.
*   At very long periods, damping has less effect on the displacement response.

**Example:**
Imagine an earthquake ground motion with a peak ground acceleration of 0.5g.
*   A very stiff structure (short period, e.g., T = 0.1s) might experience a spectral acceleration close to 0.5g.
*   A structure with a period close to the dominant period of the earthquake (e.g., T = 0.5s) might experience a spectral acceleration significantly higher than 0.5g, say 1.5g.
*   A very flexible structure (long period, e.g., T = 2.0s) might experience a spectral acceleration much lower than 0.5g, but its spectral displacement could be large.

#### 2.4 Design Response Spectra

For design purposes, it's not practical to use the response spectrum of a single earthquake. Instead, **design response spectra** are developed. These are typically based on:

*   **Statistical analysis of response spectra from multiple recorded ground motions** representative of the seismicity of a region.
*   **Probabilistic seismic hazard analysis**.
*   **Envelope curves** that capture the general shape and peak values.

Design response spectra are often specified in building codes, providing acceleration or force levels for different structural periods and damping ratios.

---

### 3. Four-Way Logarithmic Plot – DVA Spectrum (Concept Only)

While the standard response spectrum plots SA vs. T, SV vs. T, and SD vs. T, there exists a more comprehensive way to represent the response of an SDOF system that relates all three quantities simultaneously.

#### 3.1 Concept of the DVA Spectrum

The **DVA (Displacement-Velocity-Acceleration) Spectrum** is a graphical representation that plots the maximum relative displacement ($SD$), maximum relative velocity ($SV$), and maximum absolute acceleration ($SA$) of an SDOF system on a **three-dimensional logarithmic plot**.

*   **Axes:** The three axes represent $SD$, $SV$, and $SA$. Often, the scales are logarithmic to accommodate a wide range of values.
*   **Envelope Curve:** For a given damping ratio and ground motion, the possible combinations of $(SD, SV, SA)$ that an SDOF system can experience will trace out a curve (or surface in 3D) on this plot.
*   **Relationship:** The fundamental relationships $SV = \omega_n \cdot SD$ and $SA = \omega_n \cdot SV = \omega_n^2 \cdot SD$ dictate the shape of these curves.
    *   If you plot $SV$ vs. $SD$ on a log-log scale, it forms a straight line with a slope of 1 ($log(SV) = log(\omega_n) + log(SD)$).
    *   If you plot $SA$ vs. $SV$ on a log-log scale, it forms a straight line with a slope of 1 ($log(SA) = log(\omega_n) + log(SV)$).
    *   If you plot $SA$ vs. $SD$ on a log-log scale, it forms a straight line with a slope of 2 ($log(SA) = log(\omega_n^2) + log(SD)$).

#### 3.2 Four-Way Logarithmic Plot

The "four-way" aspect typically refers to including **damping ratio ($\xi$)** as a parameter, either by presenting a family of curves for different damping ratios or by having a fourth axis/dimension to represent damping.

**Visualizing the concept:**
Imagine a plot where:
*   X-axis represents $SD$ (logarithmic)
*   Y-axis represents $SV$ (logarithmic)
*   Z-axis represents $SA$ (logarithmic)

For a specific damping ratio $\xi$, the set of $(SD, SV, SA)$ values for different natural periods will form a curve in this 3D space. As you change the damping ratio, this curve will shift.

**Purpose:**
The DVA spectrum provides a unified view of the response across displacement, velocity, and acceleration. It can be useful for understanding the trade-offs between different response measures and how damping influences them. For example, a structure might have a high spectral displacement but a relatively low spectral acceleration if it has high damping.

**Key takeaway (Concept Only):** The DVA spectrum consolidates the spectral information (SD, SV, SA) for different natural periods and damping ratios into a single graphical representation, highlighting the interrelationships between these response quantities. It's a more comprehensive visualization tool than traditional single-axis spectra.

---

### Learning Outcomes Covered:

*   **Concept of pseudo acceleration, velocity:** Explained the definitions and significance of PSA and PSV.
*   **Response spectra:** Covered what a response spectrum is, how it's generated, its characteristics, the influence of damping, and design response spectra.
*   **Four-way logarithmic plot – DVA spectrum (concept only):** Explained the conceptual basis of the DVA spectrum as a unified representation of spectral response.

---

### Practice Questions and Exercises

**Question 1:**
Define Pseudo Acceleration (PSA) and Pseudo Velocity (PSV). What is the fundamental difference between absolute acceleration and pseudo acceleration?

**Answer 1:**
*   **Pseudo Acceleration (PSA):** Defined as $PSA = \omega_n^2 \cdot x_{max}$, where $\omega_n$ is the natural circular frequency and $x_{max}$ is the maximum relative displacement experienced by the SDOF system. It represents the inertial force per unit mass ($F/m$) based on the maximum relative displacement.
*   **Pseudo Velocity (PSV):** Defined as $PSV = \omega_n \cdot x_{max}$. It represents the velocity of a simple harmonic oscillator with amplitude $x_{max}$ and natural frequency $\omega_n$.
*   **Difference:** Absolute acceleration ($a_x$) is the total acceleration of the mass with respect to a fixed point in space ($a_x = \ddot{x} + \ddot{u}_g$). Pseudo acceleration is calculated using the maximum relative displacement and the natural frequency squared ($PSA = \omega_n^2 x_{max}$) and is an approximation of the absolute acceleration for low damping.

---

**Question 2:**
A single-degree-of-freedom system with a natural period of 0.5 seconds and 10% damping is subjected to an earthquake. If the maximum relative displacement recorded for this system is 0.02 meters, calculate its Pseudo Acceleration and Pseudo Velocity. (Assume $g = 9.81 \, m/s^2$)

**Answer 2:**
*   Natural Period ($T$) = 0.5 s
*   Natural circular frequency ($\omega_n$) = $2\pi / T = 2\pi / 0.5 = 4\pi \, rad/s \approx 12.57 \, rad/s$
*   Maximum relative displacement ($x_{max}$) = 0.02 m

*   **Pseudo Velocity (PSV):**
    $PSV = \omega_n \cdot x_{max} = (4\pi \, rad/s) \cdot (0.02 \, m) = 0.08\pi \, m/s \approx 0.251 \, m/s$

*   **Pseudo Acceleration (PSA):**
    $PSA = \omega_n \cdot PSV = (4\pi \, rad/s) \cdot (0.08\pi \, m/s) = 0.32\pi^2 \, m/s^2 \approx 3.16 \, m/s^2$

    Alternatively:
    $PSA = \omega_n^2 \cdot x_{max} = (4\pi \, rad/s)^2 \cdot (0.02 \, m) = 16\pi^2 \cdot 0.02 \, m/s^2 = 0.32\pi^2 \, m/s^2 \approx 3.16 \, m/s^2$

    To express PSA in terms of 'g':
    $PSA \approx (3.16 \, m/s^2) / (9.81 \, m/s^2/g) \approx 0.322 \, g$

---

**Question 3:**
Describe the general shape of a typical earthquake response spectrum and how damping affects it.

**Answer 3:**
A typical earthquake response spectrum plots spectral acceleration (SA) against natural period (T). It generally has three regions:
1.  **Short Periods (High Frequencies):** SA tends to approach the Peak Ground Acceleration (PGA).
2.  **Intermediate Periods (Moderate Frequencies):** SA is relatively constant, forming a "plateau" where spectral amplification is highest.
3.  **Long Periods (Low Frequencies):** SA decreases significantly as the period increases, often varying with $1/T^2$ for undamped systems.

**Effect of Damping:**
*   Increasing the damping ratio ($\xi$) **reduces the spectral values (SA, SV, SD)** across all periods.
*   The reduction is most significant in the **intermediate and short period regions**.
*   At very long periods, damping has a less pronounced effect on the displacement response.

---

**Question 4:**
What is the conceptual significance of a DVA spectrum?

**Answer 4:**
The conceptual significance of a DVA spectrum is to provide a unified, three-dimensional (or four-way when including damping) graphical representation of the response of an SDOF system to a specific ground motion. It plots the maximum relative displacement (SD), maximum relative velocity (SV), and maximum absolute acceleration (SA) on a single diagram, usually using logarithmic scales. This allows for a comprehensive understanding of how these three key response quantities are interrelated and how they vary with the natural period and damping of the system. It highlights the trade-offs and connections between displacement, velocity, and acceleration demands on a structure during an earthquake.

---

### Important Points to Remember:

*   **PSA vs. SA:** PSA is derived from maximum *relative* displacement, while SA is the maximum *absolute* acceleration. For low damping, $PSA \approx SA$.
*   **PSV:** Represents a characteristic velocity related to the maximum relative displacement.
*   **Response Spectrum:** A tool to predict the maximum response of an SDOF system for a given earthquake, as a function of its natural period and damping.
*   **Design Spectra:** Used in practice, they are statistical averages or envelopes of spectra from multiple earthquakes, and are provided in building codes.
*   **Damping:** Reduces spectral response, particularly in the intermediate and short period ranges.
*   **DVA Spectrum:** A conceptual tool for visualizing the interrelationship between SD, SV, and SA.
