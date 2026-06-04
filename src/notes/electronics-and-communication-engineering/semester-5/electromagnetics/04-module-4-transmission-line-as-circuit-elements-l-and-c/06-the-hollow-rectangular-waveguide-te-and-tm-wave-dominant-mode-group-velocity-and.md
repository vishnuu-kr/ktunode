---
title: "The hollow rectangular waveguide –TE and TM wave-dominant mode, group velocity and phase velocity –derivation and simple problems only."
subject: "ELECTROMAGNETICS"
module: "Module 4: Transmission line as circuit elements (L and C)."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8de"
status: "completed"
scrapedAt: "2026-05-23T17:56:37.534Z"
---
# ELECTROMAGNETICS - Module 4: Transmission Lines as Circuit Elements (L and C)

## Topic: The Hollow Rectangular Waveguide – TE and TM Waves, Dominant Mode, Group Velocity and Phase Velocity

---

### Introduction

This section delves into the behavior of electromagnetic waves propagating within hollow rectangular waveguides. Unlike transmission lines which are two-conductor structures, waveguides are single-conductor hollow metallic tubes that confine and guide electromagnetic energy. We will explore the different types of waves that can propagate, identify the most fundamental mode of propagation (dominant mode), and understand the concepts of phase and group velocities in this context.

**Learning Outcome Alignment:**

*   **LO 1:** Understand the types of electromagnetic waves (TE and TM) that can propagate in a hollow rectangular waveguide.
*   **LO 2:** Apply Maxwell's equations (implicitly, to derive field solutions in waveguides).
*   **LO 3:** Analyze the propagation characteristics of EM waves in waveguides, specifically phase and group velocities.
*   **LO 4:** Analyze the propagation of EM waves in transmission lines and waveguides.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding the underlying mathematical framework (wave equations, boundary conditions) for waveguide propagation.
*   **CO2 (K3):** While direct application of Maxwell's equations might be beyond "simple problems," the derived solutions for TE/TM modes are a result of applying them.
*   **CO3 (K3):** Analyzing phase and group velocities directly relates to understanding wave propagation characteristics.
*   **CO4 (K3):** This topic is directly aligned with analyzing EM wave propagation in waveguides.

**Textbook References:**

*   **Sadiku:** Chapters on Waveguides.
*   **Hayt & Buck:** Chapters on Waveguides.
*   **Reddy:** Chapters on Waveguides.

---

### 1. Hollow Rectangular Waveguide

A hollow rectangular waveguide is a metallic pipe with a rectangular cross-section. It guides electromagnetic waves by reflecting them off its internal walls. The absence of a central conductor distinguishes it from coaxial cables.

**Key Concepts:**

*   **Structure:** A rectangular tube with dimensions $a \times b$, where $a$ is the width and $b$ is the height. Typically, $a > b$.
*   **Material:** The interior of the waveguide is usually filled with a lossless dielectric (often air or vacuum, $\epsilon = \epsilon_0$, $\mu = \mu_0$).
*   **Boundary Conditions:** The tangential electric field components must be zero at the perfectly conducting walls of the waveguide.

---

### 2. Types of Electromagnetic Waves in Waveguides

When electromagnetic waves propagate within a waveguide, their field components can be decomposed into Transverse Electric (TE) and Transverse Magnetic (TM) modes.

#### 2.1 Transverse Electric (TE) Waves

*   **Definition:** In TE waves, the electric field is entirely transverse to the direction of propagation. This means the component of the electric field along the direction of propagation (usually the z-axis) is zero: $E_z = 0$.
*   **Field Components:** TE waves possess $H_z$, $E_x$, $E_y$, $H_x$, and $H_y$ components.
*   **Notation:** TE modes are denoted as $TE_{mn}$, where $m$ and $n$ are integers representing the number of half-period variations of the magnetic field along the $a$ and $b$ dimensions, respectively.

#### 2.2 Transverse Magnetic (TM) Waves

*   **Definition:** In TM waves, the magnetic field is entirely transverse to the direction of propagation. This means the component of the magnetic field along the direction of propagation (z-axis) is zero: $H_z = 0$.
*   **Field Components:** TM waves possess $E_z$, $E_x$, $E_y$, $H_x$, and $H_y$ components.
*   **Notation:** TM modes are denoted as $TM_{mn}$, where $m$ and $n$ are integers representing the number of half-period variations of the electric field along the $a$ and $b$ dimensions, respectively.

**Important Note (Sadiku, Hayt & Buck):**

*   TE waves can exist with $m=0$ or $n=0$ (but not both simultaneously).
*   TM waves require both $m \neq 0$ and $n \neq 0$. If either $m=0$ or $n=0$, there is no longitudinal electric field, and thus no TM wave.

---

### 3. Wave Propagation in Waveguides

The propagation of electromagnetic waves in a waveguide is governed by Maxwell's equations and the boundary conditions. Solving these equations leads to the concept of a **propagation constant ($\gamma$)** and a **cutoff frequency ($f_c$)**.

#### 3.1 General Waveguide Equations

The solutions to Maxwell's equations in a rectangular waveguide lead to a general dispersion relation:

$k^2 = \omega^2 \mu \epsilon - k_{mn}^2$

where:
*   $k$ is the propagation constant in the waveguide.
*   $\omega = 2\pi f$ is the angular frequency.
*   $\mu$ and $\epsilon$ are the permeability and permittivity of the dielectric filling the waveguide.
*   $k_{mn}$ is the transverse propagation number, dependent on the mode ($m, n$) and waveguide dimensions.

For a rectangular waveguide with dimensions $a \times b$, the transverse propagation number $k_{mn}$ is given by:

$k_{mn} = \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2}$

This equation dictates whether a particular mode can propagate.

#### 3.2 Cutoff Frequency ($f_c$)

The **cutoff frequency** is the minimum frequency at which a particular mode can propagate in the waveguide. Below the cutoff frequency, the mode is attenuated (does not propagate). Above the cutoff frequency, the mode propagates with negligible loss (in a lossless waveguide).

From the dispersion relation, propagation occurs when $k^2 > 0$. This happens when:

$\omega^2 \mu \epsilon > k_{mn}^2$

The cutoff angular frequency $\omega_c$ is when $k^2 = 0$:

$\omega_c^2 \mu \epsilon = k_{mn}^2$

The cutoff frequency $f_c$ is then:

$f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi\sqrt{\mu\epsilon}} \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2}$

Let $v_p = \frac{1}{\sqrt{\mu\epsilon}}$ be the phase velocity in the unbounded dielectric. Then:

$f_c = \frac{v_p}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$

**For air/vacuum filling:** $v_p = c = \frac{1}{\sqrt{\mu_0\epsilon_0}} \approx 3 \times 10^8 \, \text{m/s}$.

$f_c = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$

**Key Point:** For a given mode ($m, n$), if the operating frequency $f$ is less than $f_c$, the mode is evanescent (attenuated). If $f > f_c$, the mode propagates.

#### 3.3 Propagation Constant ($\gamma$)

The propagation constant in the waveguide, $k$, is related to the frequency $f$ and the cutoff frequency $f_c$ by:

$k^2 = \omega^2 \mu \epsilon - k_{mn}^2 = (2\pi f)^2 \mu \epsilon - \left(\frac{2\pi f_c}{v_p}\right)^2 (v_p^2) = (2\pi f)^2 \mu \epsilon - (2\pi f_c)^2 \mu \epsilon$

$k^2 = (2\pi)^2 (\mu \epsilon) (f^2 - f_c^2)$

Let $\beta = k = 2\pi f \sqrt{\mu\epsilon} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$ be the phase constant in the waveguide.

$\beta = \sqrt{\omega^2 \mu \epsilon - k_{mn}^2}$

**Important Note:** In lossless waveguides, the propagation constant is usually denoted by $\beta$ (phase constant) when propagation occurs ($f > f_c$), and by $\alpha$ (attenuation constant, imaginary) when it's evanescent ($f < f_c$). For simple problems, we focus on the propagating case.

$\beta = \frac{2\pi f}{v_{p,waveguide}} = \frac{2\pi f}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$

This shows that $\beta$ depends on frequency.

---

### 4. Dominant Mode

The **dominant mode** is the mode with the lowest cutoff frequency. It is the first mode to propagate as the frequency is increased from zero.

**Calculation of Cutoff Frequencies for Different Modes:**

Let's consider a rectangular waveguide with dimensions $a \times b$ filled with air, where $a > b$.

*   **TE Modes:** $f_{c,mn}^{TE} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$
*   **TM Modes:** $f_{c,mn}^{TM} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$ (Same formula as TE, but $m, n \neq 0$)

Let's evaluate the cutoff frequencies for the first few modes:

*   **$TE_{10}$ Mode:** $m=1, n=0$.
    $f_{c,10}^{TE} = \frac{c}{2} \sqrt{\left(\frac{1}{a}\right)^2 + \left(\frac{0}{b}\right)^2} = \frac{c}{2a}$

*   **$TE_{01}$ Mode:** $m=0, n=1$.
    $f_{c,01}^{TE} = \frac{c}{2} \sqrt{\left(\frac{0}{a}\right)^2 + \left(\frac{1}{b}\right)^2} = \frac{c}{2b}$
    Since $a > b$, $f_{c,01}^{TE} > f_{c,10}^{TE}$.

*   **$TE_{11}$ Mode:** $m=1, n=1$.
    $f_{c,11}^{TE} = \frac{c}{2} \sqrt{\left(\frac{1}{a}\right)^2 + \left(\frac{1}{b}\right)^2}$
    This will be higher than $f_{c,10}^{TE}$ and $f_{c,01}^{TE}$.

*   **$TM_{11}$ Mode:** $m=1, n=1$. (Note: $m,n \neq 0$ for TM)
    $f_{c,11}^{TM} = \frac{c}{2} \sqrt{\left(\frac{1}{a}\right)^2 + \left(\frac{1}{b}\right)^2}$
    This cutoff frequency is the same as $TE_{11}$.

**Conclusion:**

Since $a > b$, $\frac{1}{a} < \frac{1}{b}$, and thus $\frac{c}{2a} < \frac{c}{2b}$.
The lowest cutoff frequency is for the $TE_{10}$ mode, which is $f_{c,10}^{TE} = \frac{c}{2a}$.

Therefore, the **$TE_{10}$ mode is the dominant mode**.

**Operating a Waveguide:**

To ensure only the dominant mode propagates and to avoid signal distortion due to multimode propagation, the operating frequency $f$ of the waveguide is typically chosen such that:

$f_{c,10}^{TE} < f < f_{c,20}^{TE}$ (or $f_{c,01}^{TE}$ if $b$ is small enough for $TE_{01}$ to be the next lowest, which is not the case if $a > b$)
The next lowest cutoff frequency after $TE_{10}$ will be either $TE_{01}$ or $TE_{11}$ (or $TM_{11}$ if $a$ and $b$ are comparable). If $a > b$, then $f_{c,01} = c/2b > c/2a = f_{c,10}$. The $TE_{20}$ mode has a cutoff of $f_{c,20}^{TE} = c/2a \times 2 = c/a$. So, the typical operating range for single-mode operation is $c/2a < f < c/a$.

---

### 5. Phase Velocity ($v_p$) and Group Velocity ($v_g$)

#### 5.1 Phase Velocity ($v_p$)

*   **Definition:** The phase velocity is the velocity at which a point of constant phase (e.g., a crest or trough) of a monochromatic wave propagates.
*   **Derivation:**
    The phase of a wave propagating in the z-direction can be represented as $\phi = \omega t - \beta z$.
    The phase velocity is found by keeping $\phi$ constant and finding $dz/dt$:
    $d\phi = \omega dt - \beta dz = 0$
    $v_p = \frac{dz}{dt} = \frac{\omega}{\beta}$

    Substituting the expression for $\beta$:
    $v_p = \frac{\omega}{\frac{2\pi f}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}} = \frac{2\pi f}{\frac{2\pi f}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}} = \frac{c}{\sqrt{1 - \left(\frac{f_c}{f}\right)^2}}$

    **Key Observation:** $v_p = \frac{c}{\sqrt{1 - (f_c/f)^2}}$. Since $f > f_c$, the term $\sqrt{1 - (f_c/f)^2}$ is always less than 1.
    Therefore, **$v_p > c$**. This does *not* violate relativity, as no information is being transmitted at the phase velocity.

#### 5.2 Group Velocity ($v_g$)

*   **Definition:** The group velocity is the velocity at which the envelope of a wave packet (a group of waves with slightly different frequencies) propagates. It represents the velocity of energy or information transfer.
*   **Derivation:**
    Group velocity is defined as $v_g = \frac{d\omega}{d\beta}$.

    We have $\beta = \frac{\omega}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$. It's easier to work with $\beta^2$ and $\omega^2$:
    $\beta^2 = \frac{\omega^2}{c^2} \left(1 - \frac{f_c^2}{\omega^2}\right) = \frac{\omega^2}{c^2} - \frac{f_c^2}{c^2}$

    $\beta^2 = \frac{\omega^2}{c^2} - k_{mn}^2$ (Since $f_c = k_{mn} \frac{v_p}{2\pi}$ and $v_p = c$, $f_c = k_{mn} \frac{c}{2\pi}$)
    $(2\pi f_c)^2 \mu \epsilon = k_{mn}^2$
    $k_{mn}^2 = (2\pi f_c)^2 \mu \epsilon = (\omega_c)^2 \mu \epsilon$

    Differentiating $\beta^2 = \omega^2 \mu \epsilon - k_{mn}^2$ with respect to $\beta$:
    $2\beta \frac{d\beta}{d\omega} = 2\omega \mu \epsilon$
    $\frac{d\beta}{d\omega} = \frac{\omega \mu \epsilon}{\beta}$

    $v_g = \frac{d\omega}{d\beta} = \frac{\beta}{\omega \mu \epsilon}$

    Substitute $\beta = \omega \mu \epsilon v_g = \omega \mu \epsilon \frac{1}{v_{phase\_unbounded}}$ and $\beta = \frac{\omega}{v_p}$

    We know $\beta = \frac{\omega}{v_p}$.
    So, $\frac{d\beta}{d\omega} = \frac{1}{v_p} + \omega \frac{d}{d\omega} \left(\frac{1}{v_p}\right)$.

    Alternatively, use the relationship between phase and group velocity:
    $v_g = \frac{d\omega}{d\beta} = \frac{1}{\frac{d\beta}{d\omega}}$

    From $\beta^2 = \frac{\omega^2}{c^2} - \frac{f_c^2}{c^2}$ (for air filling, $\mu\epsilon = 1/c^2$):
    Differentiate implicitly with respect to $\omega$:
    $2\beta \frac{d\beta}{d\omega} = \frac{2\omega}{c^2}$
    $\frac{d\beta}{d\omega} = \frac{\omega}{\beta c^2}$

    $v_g = \frac{d\omega}{d\beta} = \frac{\beta c^2}{\omega}$

    Substitute $\beta = \frac{\omega}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$:
    $v_g = \frac{\left(\frac{\omega}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}\right) c^2}{\omega} = c \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$

    **Key Observation:** $v_g = c \sqrt{1 - (f_c/f)^2}$.
    Since $f > f_c$, the term $\sqrt{1 - (f_c/f)^2}$ is always less than 1.
    Therefore, **$v_g < c$**.

**Relationship between $v_p$ and $v_g$:**

$v_p v_g = \left(\frac{c}{\sqrt{1 - (f_c/f)^2}}\right) \left(c \sqrt{1 - (f_c/f)^2}\right) = c^2$

This fundamental relationship $v_p v_g = c^2$ (or $v_p v_g = v_{p,unbounded}^2$ for a general dielectric) holds for waveguides.

**Important Points:**

*   When $f \to f_c$, $v_g \to 0$, meaning energy propagation becomes very slow.
*   When $f \gg f_c$, $v_p \to c$ and $v_g \to c$, meaning propagation approaches that in an unbounded medium.

---

### 6. Simple Problems and Examples

**Problem 1: Cutoff Frequency of a Dominant Mode**

A standard WR90 waveguide has inner dimensions $a = 2.286 \, \text{cm}$ and $b = 1.016 \, \text{cm}$. Calculate the cutoff frequency of the dominant mode. Assume the waveguide is filled with air.

**Solution:**

The dominant mode is $TE_{10}$.
The cutoff frequency is given by $f_{c,10} = \frac{c}{2a}$.
Given $c \approx 3 \times 10^8 \, \text{m/s}$ and $a = 2.286 \, \text{cm} = 0.02286 \, \text{m}$.

$f_{c,10} = \frac{3 \times 10^8 \, \text{m/s}}{2 \times 0.02286 \, \text{m}} = \frac{3 \times 10^8}{0.04572} \, \text{Hz}$
$f_{c,10} \approx 6.56 \times 10^9 \, \text{Hz} = 6.56 \, \text{GHz}$

**Answer:** The cutoff frequency of the dominant mode ($TE_{10}$) is approximately 6.56 GHz.

**Problem 2: Phase and Group Velocity at a Specific Frequency**

For the WR90 waveguide in Problem 1, calculate the phase velocity and group velocity at a frequency of 10 GHz.

**Solution:**

We know $f_{c,10} = 6.56 \, \text{GHz}$. The operating frequency is $f = 10 \, \text{GHz}$.
$a = 0.02286 \, \text{m}$, $c = 3 \times 10^8 \, \text{m/s}$.

**Phase Velocity ($v_p$):**
$v_p = \frac{c}{\sqrt{1 - \left(\frac{f_c}{f}\right)^2}}$
$\frac{f_c}{f} = \frac{6.56}{10} = 0.656$
$\left(\frac{f_c}{f}\right)^2 = (0.656)^2 \approx 0.4303$
$1 - \left(\frac{f_c}{f}\right)^2 \approx 1 - 0.4303 = 0.5697$
$\sqrt{1 - \left(\frac{f_c}{f}\right)^2} \approx \sqrt{0.5697} \approx 0.7548$

$v_p = \frac{3 \times 10^8 \, \text{m/s}}{0.7548} \approx 3.974 \times 10^8 \, \text{m/s}$

**Group Velocity ($v_g$):**
Using the relation $v_p v_g = c^2$:
$v_g = \frac{c^2}{v_p} = \frac{(3 \times 10^8 \, \text{m/s})^2}{3.974 \times 10^8 \, \text{m/s}}$
$v_g = \frac{9 \times 10^{16}}{3.974 \times 10^8} \, \text{m/s} \approx 2.265 \times 10^8 \, \text{m/s}$

Alternatively, using the formula for $v_g$:
$v_g = c \sqrt{1 - \left(\frac{f_c}{f}\right)^2} = (3 \times 10^8 \, \text{m/s}) \times 0.7548 \approx 2.264 \times 10^8 \, \text{m/s}$

**Answer:** At 10 GHz, the phase velocity is approximately $3.97 \times 10^8 \, \text{m/s}$, and the group velocity is approximately $2.26 \times 10^8 \, \text{m/s}$.

**Problem 3: Higher Order Mode Cutoff**

For the WR90 waveguide ($a=2.286 \, \text{cm}$, $b=1.016 \, \text{cm}$), calculate the cutoff frequencies for the $TE_{01}$ and $TE_{11}$ modes.

**Solution:**

*   **$TE_{01}$ Mode:** $m=0, n=1$.
    $f_{c,01}^{TE} = \frac{c}{2b} = \frac{3 \times 10^8 \, \text{m/s}}{2 \times 0.01016 \, \text{m}} = \frac{3 \times 10^8}{0.02032} \, \text{Hz}$
    $f_{c,01}^{TE} \approx 14.76 \times 10^9 \, \text{Hz} = 14.76 \, \text{GHz}$

*   **$TE_{11}$ Mode:** $m=1, n=1$.
    $f_{c,11}^{TE} = \frac{c}{2} \sqrt{\left(\frac{1}{a}\right)^2 + \left(\frac{1}{b}\right)^2}$
    $f_{c,11}^{TE} = \frac{3 \times 10^8}{2} \sqrt{\left(\frac{1}{0.02286}\right)^2 + \left(\frac{1}{0.01016}\right)^2}$
    $f_{c,11}^{TE} = 1.5 \times 10^8 \sqrt{(43.74)^2 + (98.42)^2}$
    $f_{c,11}^{TE} = 1.5 \times 10^8 \sqrt{1913.1 + 9686.5}$
    $f_{c,11}^{TE} = 1.5 \times 10^8 \sqrt{11599.6}$
    $f_{c,11}^{TE} = 1.5 \times 10^8 \times 107.7$
    $f_{c,11}^{TE} \approx 16.16 \times 10^9 \, \text{Hz} = 16.16 \, \text{GHz}$

**Answer:** The cutoff frequency for the $TE_{01}$ mode is approximately 14.76 GHz, and for the $TE_{11}$ mode is approximately 16.16 GHz.

---

### 7. Summary and Key Points to Remember

*   **Hollow Rectangular Waveguide:** A metallic tube guiding EM waves by reflection from its walls.
*   **Modes:** TE (Transverse Electric, $E_z=0$) and TM (Transverse Magnetic, $H_z=0$).
*   **Notation:** $TE_{mn}$ and $TM_{mn}$, where $m,n$ are integers indicating field variations.
*   **Cutoff Frequency ($f_c$):** The minimum frequency for a mode to propagate. Below $f_c$, the mode is evanescent.
    $f_c = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$ for air-filled waveguides.
*   **Dominant Mode:** The mode with the lowest cutoff frequency. For $a>b$, it is the $TE_{10}$ mode, with $f_{c,10} = c/2a$.
*   **Single-Mode Operation:** Achieved by operating the waveguide at a frequency between the cutoff of the dominant mode and the cutoff of the next higher-order mode.
*   **Phase Velocity ($v_p$):** Velocity of constant phase. $v_p = \frac{\omega}{\beta} = \frac{c}{\sqrt{1 - (f_c/f)^2}}$. Always $v_p > c$.
*   **Group Velocity ($v_g$):** Velocity of energy/information transfer. $v_g = \frac{d\omega}{d\beta} = c \sqrt{1 - (f_c/f)^2}$. Always $v_g < c$.
*   **Relationship:** $v_p v_g = c^2$.

---

### 8. Practice Questions

1.  A rectangular waveguide of dimensions $2.286 \, \text{cm} \times 1.016 \, \text{cm}$ is filled with air.
    a) Calculate the cutoff frequency of the dominant mode.
    b) Determine the cutoff frequency of the $TE_{01}$ mode.
    c) If the waveguide operates at 9 GHz, what is the phase constant $\beta$ for the dominant mode?
    d) Calculate the phase velocity and group velocity at 9 GHz for the dominant mode.

2.  A rectangular waveguide has a cutoff frequency of 6 GHz for its dominant mode. If the waveguide is filled with a dielectric material with relative permittivity $\epsilon_r = 4$ (assume $\mu_r = 1$), what is the cutoff frequency of the dominant mode in this dielectric-filled waveguide? (Assume the same physical dimensions as the air-filled waveguide).

3.  Explain why the phase velocity in a waveguide is greater than the speed of light in vacuum, and why this does not violate the principles of relativity.

4.  For a $TE_{mn}$ mode in a rectangular waveguide, what condition must be met for $m$ and $n$? What is the implication if $m=0$ or $n=0$?

---

### 9. Answers to Practice Questions

1.  **Solution:**
    Given: $a = 2.286 \, \text{cm} = 0.02286 \, \text{m}$, $b = 1.016 \, \text{cm} = 0.01016 \, \text{m}$, $c = 3 \times 10^8 \, \text{m/s}$.
    a) Dominant mode is $TE_{10}$. $f_{c,10} = \frac{c}{2a} = \frac{3 \times 10^8}{2 \times 0.02286} \approx 6.56 \, \text{GHz}$.
    b) $TE_{01}$ mode. $f_{c,01} = \frac{c}{2b} = \frac{3 \times 10^8}{2 \times 0.01016} \approx 14.76 \, \text{GHz}$.
    c) At $f = 9 \, \text{GHz} = 9 \times 10^9 \, \text{Hz}$.
       $\beta = \frac{2\pi f}{c} \sqrt{1 - \left(\frac{f_c}{f}\right)^2}$
       $\frac{f_c}{f} = \frac{6.56}{9} \approx 0.7289$
       $\left(\frac{f_c}{f}\right)^2 \approx 0.5313$
       $1 - \left(\frac{f_c}{f}\right)^2 \approx 0.4687$
       $\sqrt{1 - \left(\frac{f_c}{f}\right)^2} \approx 0.6846$
       $\beta = \frac{2\pi (9 \times 10^9)}{3 \times 10^8} \times 0.6846 = 60\pi \times 0.6846 \approx 128.9 \, \text{rad/m}$.
    d) Phase velocity: $v_p = \frac{c}{\sqrt{1 - (f_c/f)^2}} = \frac{3 \times 10^8}{0.6846} \approx 4.38 \times 10^8 \, \text{m/s}$.
       Group velocity: $v_g = c \sqrt{1 - (f_c/f)^2} = (3 \times 10^8) \times 0.6846 \approx 2.05 \times 10^8 \, \text{m/s}$.

2.  **Solution:**
    Let the cutoff frequency in air be $f_{c,air}$. $f_{c,air} = 6 \, \text{GHz}$.
    Let the dielectric-filled cutoff frequency be $f_{c,dielectric}$.
    The cutoff frequency formula in a dielectric medium is $f_c = \frac{v_p}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$, where $v_p = \frac{1}{\sqrt{\mu\epsilon}} = \frac{c}{\sqrt{\mu_r\epsilon_r}}$.
    $f_{c,dielectric} = \frac{c/\sqrt{\mu_r\epsilon_r}}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2} = \frac{f_{c,air}}{\sqrt{\mu_r\epsilon_r}}$
    Given $\mu_r = 1$ and $\epsilon_r = 4$.
    $f_{c,dielectric} = \frac{6 \, \text{GHz}}{\sqrt{1 \times 4}} = \frac{6 \, \text{GHz}}{2} = 3 \, \text{GHz}$.

3.  **Explanation:**
    The phase velocity $v_p = c / \sqrt{1 - (f_c/f)^2}$. Since $f_c > 0$ and $f > f_c$, the term $\sqrt{1 - (f_c/f)^2}$ is less than 1, making $v_p > c$. This does not violate relativity because $v_p$ represents the speed of a point of constant phase, not the speed of information or energy. Information and energy are transmitted at the group velocity $v_g$, which is always less than $c$.

4.  **Answer:**
    For a $TE_{mn}$ mode, $m$ and $n$ are integers, and it's permissible for $m=0$ or $n=0$ (but not both simultaneously). If $m=0$ or $n=0$, it signifies that the electric field is not varying sinusoidally in that particular dimension along the waveguide axis. If either $m=0$ or $n=0$ in the TM mode definition ($H_z = 0$), then the condition for TM waves (presence of $E_z$) is not met, so TM modes require $m \neq 0$ and $n \neq 0$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
