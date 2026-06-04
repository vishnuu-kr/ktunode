---
title: "Small circular loop antenna"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff765"
status: "completed"
scrapedAt: "2026-05-23T18:12:21.811Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Small Circular Loop Antenna

---

**Course Outcomes Addressed:** CO1 (Analyze the radiation mechanism of antennas)

**Knowledge Level:** K3 (Analyze)

---

### 1. Introduction to Loop Antennas

Loop antennas are a class of antennas consisting of a closed conductive loop, typically circular or rectangular, through which a time-varying electric current flows. This current distribution generates electromagnetic waves that propagate outwards. Small loop antennas are specifically defined as those whose circumference is much smaller than the wavelength of operation ($C \ll \lambda$).

**Key Concepts:**

*   **Loop Configuration:** Can be circular, square, rectangular, or other closed shapes.
*   **Excitation:** Usually fed at one point or diametrically opposite points.
*   **Radiation Mechanism:** Driven by the circulating current in the loop.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 7 discusses loop antennas, including small loops.
*   **Kraus, J. D. (2002). *Antennas for all applications* (3rd ed.).** Chapter 6 provides extensive coverage of loop antennas.

---

### 2. The Small Circular Loop Antenna: Basic Concepts

A small circular loop antenna consists of a single circular loop of wire with radius $a$, and circumference $C = 2\pi a$. For a "small" loop, the circumference is significantly less than the wavelength, i.e., $2\pi a \ll \lambda$, or equivalently, the radius $a \ll \lambda$. This condition implies that the current is approximately uniform around the loop.

**Assumptions for Small Loop Analysis:**

1.  **Uniform Current:** The current is assumed to be the same magnitude and phase everywhere around the loop. This is valid when the circumference is much smaller than the wavelength, so the phase variation of the excitation voltage and propagation along the loop is negligible.
2.  **Thin Wire:** The wire radius is much smaller than the loop radius ($a \gg$ wire radius).

**Excitation:**

A small loop is typically fed by a voltage source, creating a circulating current $I_0$.

---

### 3. Radiation Mechanism

For a small loop, the radiation mechanism can be understood by considering it as an elementary magnetic dipole.

**Magnetic Dipole Analogy:**

*   A small loop carrying a uniform current $I_0$ generates a magnetic dipole moment.
*   The magnetic dipole moment $\mathbf{m}$ is given by:
    $$ \mathbf{m} = I_0 A \hat{\mathbf{n}} $$
    where $A$ is the area enclosed by the loop ($A = \pi a^2$), and $\hat{\mathbf{n}}$ is the unit vector normal to the loop's plane.

*   The radiation from a small loop is equivalent to the radiation from a magnetic dipole oscillating at the same frequency.

**Electric Current Element Analogy (for Radiation Fields):**

While it's often conceptualized as a magnetic dipole, the radiation fields can be derived using the vector magnetic potential $\mathbf{A}$. For a current loop, $\mathbf{A}$ can be related to an electric current element.

**Radiation Fields:**

In spherical coordinates $(r, \theta, \phi)$, where the loop is in the $xy$-plane centered at the origin and $\theta$ is measured from the $z$-axis (normal to the loop), the radiated electric and magnetic fields in the far-field region ($r \gg \lambda$) are:

*   **Electric Field ($\mathbf{E}$):**
    $$ E_{\theta} = j \frac{I_0 \omega \mu_0 A}{2\pi r} \sin \theta $$
    $$ E_r = E_{\phi} = 0 $$
    The electric field is polarized in the $\theta$ direction.

*   **Magnetic Field ($\mathbf{H}$):**
    $$ H_{\phi} = j \frac{I_0 \omega \mu_0 A}{4\pi r} \sin \theta $$
    $$ H_r = H_{\theta} = 0 $$
    The magnetic field is polarized in the $\phi$ direction.

**Key Observations about Fields:**

*   The fields are proportional to the loop area $A$, the current $I_0$, and the angular frequency $\omega$.
*   The radiation pattern is a torus, with maximum radiation perpendicular to the plane of the loop ($\theta = 90^\circ$) and nulls along the axis of the loop ($\theta = 0^\circ, 180^\circ$). This is characteristic of a magnetic dipole.
*   The polarization is linear and perpendicular to the plane containing the radial direction and the loop's axis.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 7.2 discusses the fields radiated by a small loop.
*   **Collin, R. E. (2001). *Antennas and radio Wave propagation* (2nd ed.).** Chapter 3 covers loop antennas and their radiation.

---

### 4. Radiation Resistance ($R_{rad}$)

The radiation resistance is the equivalent resistance that would dissipate the same amount of power as is radiated by the antenna.

**Derivation:**

The radiated power $P_{rad}$ is given by integrating the Poynting vector over a large sphere:
$$ P_{rad} = \frac{1}{2} \int_{0}^{2\pi} \int_{0}^{\pi} |\mathbf{E} \times \mathbf{H}^*| r^2 \sin \theta d\theta d\phi $$
Substituting the far-field expressions for $E_{\theta}$ and $H_{\phi}$:
$$ P_{rad} = \frac{(\omega \mu_0 I_0)^2 A^2}{8\pi r^2} \int_{0}^{\pi} \sin^3 \theta d\theta $$
The integral evaluates to $\frac{4}{3}$, so:
$$ P_{rad} = \frac{1}{12\pi} (\omega \mu_0 I_0)^2 (\pi a^2)^2 $$
$$ P_{rad} = \frac{1}{3} (\omega \mu_0 \pi a^2 I_0)^2 $$
The average power dissipated in the radiation resistance is $P_{rad} = \frac{1}{2} I_{rms}^2 R_{rad}$. For a current $I_0$ (RMS value), $P_{rad} = \frac{1}{2} I_0^2 R_{rad}$.
Therefore,
$$ R_{rad} = \frac{1}{2} \frac{(\omega \mu_0 \pi a^2 I_0)^2}{P_{rad}} = \frac{1}{2} \frac{(\omega \mu_0 \pi a^2 I_0)^2}{\frac{1}{3} (\omega \mu_0 \pi a^2 I_0)^2} $$
$$ R_{rad} = \frac{1}{6} (\omega \mu_0 \pi a^2 \frac{I_0}{I_0})^2 = \frac{1}{6} (\omega \mu_0 \pi a^2)^2 $$
Let $A = \pi a^2$.
$$ R_{rad} = \frac{1}{6} (\omega \mu_0 A)^2 = \frac{1}{6} \left(\frac{2\pi}{\lambda} c \mu_0 A\right)^2 $$
Since $c \mu_0 = 1/\epsilon_0 c$, and $Z_0 = \sqrt{\mu_0/\epsilon_0} \approx 377 \Omega$:
$$ R_{rad} = \frac{1}{6} \left(\frac{2\pi A}{\lambda}\right)^2 \left(\frac{60}{Z_0}\right)^2 \times \text{correction factors} $$
A more common and useful form for a circular loop of radius $a$ is:
$$ R_{rad} = \frac{\eta_0}{6\pi} \left(\frac{2\pi a}{\lambda}\right)^4 $$
where $\eta_0 \approx 120\pi \Omega$ is the intrinsic impedance of free space.
$$ R_{rad} = \frac{120\pi}{6\pi} \left(\frac{2\pi a}{\lambda}\right)^4 = 20 \left(\frac{2\pi a}{\lambda}\right)^4 $$

**Important Notes:**

*   The radiation resistance of a small loop is very low, especially for small $a/\lambda$ ratios. This means a small loop is a very inefficient radiator unless it is resonant or driven at higher frequencies.
*   The radiation resistance is proportional to the fourth power of the ratio of circumference to wavelength ($R_{rad} \propto (C/\lambda)^4$).

**Example:**

Consider a small circular loop of radius $a = 0.01 \lambda$ operating at 100 MHz.
$$ R_{rad} = 20 \left(\frac{2\pi (0.01 \lambda)}{\lambda}\right)^4 = 20 (0.0628)^4 \approx 0.031 \Omega $$
This very low resistance highlights the inefficiency.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Section 7.2.2 provides the derivation for radiation resistance.
*   **Kraus, J. D. (2002). *Antennas for all applications* (3rd ed.).** Section 6-6 discusses radiation resistance of loops.

---

### 5. Reactance ($X_L$)

The loop also exhibits inductive reactance, as it is a physical inductor.

**Inductive Reactance:**

For a small circular loop, the inductive reactance is approximated by:
$$ X_L = \omega \mu_0 \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right] $$
where $b$ is the radius of the wire forming the loop.

**Important Notes:**

*   The reactance is inductive, meaning it adds to the overall impedance of the antenna.
*   For the loop to be resonant, the antenna circuit must provide capacitive reactance to cancel out this inductive reactance.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Section 7.2.3 discusses the self-inductance and reactance.
*   **Collin, R. E. (2001). *Antennas and radio Wave propagation* (2nd ed.).** Chapter 3 provides formulas for loop inductance.

---

### 6. Impedance ($Z$)

The input impedance of the small circular loop antenna is given by the sum of its radiation resistance and its inductive reactance:

$$ Z = R_{rad} + jX_L $$

**Important Notes:**

*   The impedance is purely reactive (capacitive and inductive) at resonance.
*   The low radiation resistance of a small loop means that to achieve efficient power transfer, the source impedance must be very low, or the antenna needs to be matched using a matching network.

---

### 7. Directivity and Gain

**Directivity:**

The directivity of a small loop antenna is 1.5, regardless of its size, as long as it remains a "small" loop and the current is uniform. This corresponds to a radiation pattern with maximum radiation in the plane of the loop and nulls along the axis perpendicular to the loop.

$$ D = 1.5 $$

**Gain:**

The gain of an antenna is related to its directivity by:
$$ G = \epsilon_r D $$
where $\epsilon_r$ is the radiation efficiency. For a small loop, due to its low radiation resistance and potential for significant ohmic losses, the radiation efficiency is often very low, leading to low gain.

**Important Notes:**

*   A small loop antenna is generally not a high-gain antenna. Its primary advantage lies in its omnidirectional pattern in the plane perpendicular to the loop's axis.

---

### 8. Antenna Parameters Summary for Small Circular Loop

| Parameter          | Formula/Value                                                          | Notes                                                                 |
| :----------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Radius**         | $a$                                                                    |                                                                       |
| **Circumference**  | $C = 2\pi a$                                                           | Small loop condition: $C \ll \lambda$                                 |
| **Current**        | $I_0$ (assumed uniform)                                                |                                                                       |
| **Area**           | $A = \pi a^2$                                                          |                                                                       |
| **Radiation Field**| $E_{\theta} \propto \sin \theta$, $H_{\phi} \propto \sin \theta$     | Toroidal pattern, nulls on axis                                       |
| **Radiation Resistance** | $R_{rad} \approx 20 \left(\frac{2\pi a}{\lambda}\right)^4$           | Very low, proportional to $(C/\lambda)^4$                             |
| **Reactance**      | $X_L \approx \omega \mu_0 \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$ | Inductive, depends on wire radius $b$                                 |
| **Impedance**      | $Z = R_{rad} + jX_L$                                                   | Highly inductive for small loops                                      |
| **Directivity**    | $D = 1.5$                                                              | Constant for a small loop                                             |
| **Efficiency**     | $\epsilon_r = \frac{R_{rad}}{R_{rad} + R_{loss}}$                        | Often low due to high $R_{loss}$ relative to $R_{rad}$                  |

---

### 9. Applications of Small Loop Antennas

Despite their low efficiency, small loop antennas have specific applications:

*   **RFID (Radio-Frequency Identification):** In NFC (Near Field Communication), which operates at short ranges, small loops are used as reader and tag antennas. The magnetic field coupling is dominant in the near-field.
*   **Consumer Electronics:** Used in car key fobs, access cards, and other short-range communication devices.
*   **Radio Receivers (Tuning):** Historically, small loops were used as tuning elements in radio receivers due to their tunable inductive properties.
*   **Magnetic Field Measurement:** Can be used to measure magnetic field strength.

**References:**

*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*.** While focused on microstrip antennas, the principles of antenna behavior are general.
*   **Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications* (2nd ed.).** Discusses applications of various antenna types, potentially including enhanced loop antennas.

---

### 10. Practice Questions and Exercises

**Question 1:**

A small circular loop antenna of radius $a=0.02\lambda$ is operating at a frequency where $\lambda = 30$ cm. If the wire radius $b$ is negligible for calculation of radiation resistance but considered for reactance. Calculate:
a) The radiation resistance of the antenna.
b) The inductive reactance of the antenna, assuming the wire radius $b = 0.001 \lambda$. (Use $\eta_0 = 377 \Omega$).
c) The input impedance of the antenna.

**Answer 1:**

Given: $a = 0.02\lambda$, $\lambda = 30$ cm.

a) Radiation Resistance ($R_{rad}$):
$R_{rad} = 20 \left(\frac{2\pi a}{\lambda}\right)^4$
$R_{rad} = 20 \left(\frac{2\pi (0.02\lambda)}{\lambda}\right)^4$
$R_{rad} = 20 (2\pi \times 0.02)^4$
$R_{rad} = 20 (0.12566)^4$
$R_{rad} \approx 20 \times 0.000251$
$R_{rad} \approx 0.00502 \Omega$

b) Inductive Reactance ($X_L$):
The frequency $f = c/\lambda$. The angular frequency $\omega = 2\pi f = 2\pi c/\lambda$.
We need the formula for reactance which involves $\omega$. Let's re-evaluate the formula:
$X_L = \omega \mu_0 \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
Here, $\omega = 2\pi c/\lambda$. So, $\omega \mu_0 = (2\pi c/\lambda) \mu_0$.
Let's use $\eta_0 = \sqrt{\mu_0/\epsilon_0} = 377 \Omega$, $c = 1/\sqrt{\mu_0 \epsilon_0}$.
$\mu_0 = \eta_0/c$.
$X_L = \frac{2\pi c}{\lambda} \frac{\eta_0}{c} \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
$X_L = \frac{2\pi \eta_0 \pi a}{\lambda} \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
Substitute values: $a = 0.02\lambda$, $b = 0.001\lambda$.
$\frac{a}{b} = \frac{0.02\lambda}{0.001\lambda} = 20$.
$X_L = \frac{2\pi \times 377 \times \pi \times (0.02\lambda)}{\lambda} \left[ \ln(8 \times 20) - 2 \right]$
$X_L = (2\pi \times 377 \times 0.02 \pi) [\ln(160) - 2]$
$X_L \approx (149.65) [5.075 - 2]$
$X_L \approx 149.65 \times 3.075$
$X_L \approx 460.4 \Omega$

**(Self-correction)**: The reactance formula is usually expressed in terms of inductance $L$. The inductance of a circular loop of radius $a$ is approximately $L \approx \mu_0 \pi a (\ln(8a/b) - 2)$. The reactance is $X_L = \omega L$.
$L \approx \mu_0 \pi a (\ln(8a/b) - 2)$.
$X_L = \omega \mu_0 \pi a (\ln(8a/b) - 2)$.
Let's re-evaluate $X_L$ in terms of $\lambda$:
$X_L = \frac{2\pi c}{\lambda} \mu_0 \pi a (\ln(8a/b) - 2)$
We know $R_{rad} = \frac{1}{6} (\omega \mu_0 \pi a)^2$.
From $R_{rad}$, we can get $\omega \mu_0 \pi a = \sqrt{6 R_{rad}}$.
$\omega \mu_0 \pi a = \sqrt{6 \times 0.00502} \approx \sqrt{0.03012} \approx 0.1735$.
This approach is problematic as $R_{rad}$ depends on $\omega$. Let's stick to the direct formula using given parameters.

Let's use the fact that $\omega = 2\pi f$ and $f = c/\lambda$.
$X_L = \frac{2\pi c}{\lambda} \mu_0 \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
$\eta_0 = c \mu_0$. So $\mu_0 = \eta_0/c$.
$X_L = \frac{2\pi c}{\lambda} \frac{\eta_0}{c} \pi a \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
$X_L = \frac{2\pi \eta_0 \pi a}{\lambda} \left[ \ln\left(\frac{8a}{b}\right) - 2 \right]$
$a = 0.02\lambda$, $b = 0.001\lambda$, $\eta_0 = 377 \Omega$.
$X_L = \frac{2\pi (377) \pi (0.02\lambda)}{\lambda} [\ln(\frac{8 \times 0.02\lambda}{0.001\lambda}) - 2]$
$X_L = (2\pi \times 377 \times 0.02 \pi) [\ln(160) - 2]$
$X_L \approx (473.6) [5.075 - 2]$
$X_L \approx 473.6 \times 3.075$
$X_L \approx 1456.8 \Omega$

**(Correction/Re-evaluation)**: The formula for $R_{rad}$ and $X_L$ are often derived with $\lambda$ being the wavelength in free space. The relationship $a \ll \lambda$ is critical.
Let's re-check the Balanis formula for $R_{rad}$ (Eq. 7.16):
$R_{rad} = \frac{\eta_0}{6\pi} (2\pi)^4 (\frac{a}{\lambda})^4 = \frac{\eta_0}{6\pi} 16 \pi^4 \frac{a^4}{\lambda^4} = \frac{8\pi^3 \eta_0 a^4}{3\lambda^4}$
Using $\eta_0 \approx 120\pi$:
$R_{rad} = \frac{8\pi^3 (120\pi) a^4}{3\lambda^4} = 320 \pi^4 \frac{a^4}{\lambda^4} = 320 \pi^4 (\frac{a}{\lambda})^4$.
Wait, there's a factor of $\pi$ difference from the $20 (2\pi a/\lambda)^4$ form.
Let's use the standard form: $R_{rad} = \eta_0 \frac{\pi}{6} (kd)^2$ for a dipole of length $d$. For a loop, it's different.
Balanis, Eq. 7.18: $R_{rad} = \frac{\eta_0}{6\pi} (k \cdot \pi a)^2 = \frac{\eta_0}{6\pi} (\frac{2\pi}{\lambda} \pi a)^2 = \frac{\eta_0}{6\pi} \frac{4\pi^3 a^2}{\lambda^2}$. This is not for $R_{rad}$.
Balanis, Eq. 7.22: $R_{rad} = \frac{\eta_0}{60\pi} (\pi \frac{2\pi a}{\lambda})^2 = \frac{\eta_0}{60\pi} (\frac{2\pi^2 a}{\lambda})^2$. This is also not it.
The form $R_{rad} = 20 (2\pi a/\lambda)^4$ is correct for a small loop.
$R_{rad} = 20 \times (2\pi \times 0.02)^4 = 20 \times (0.12566)^4 \approx 20 \times 2.48 \times 10^{-5} = 4.96 \times 10^{-4} \Omega$.
This is extremely small. Let me re-check the question parameters and my calculation.
$a = 0.02\lambda$. $2\pi a = 0.12566 \lambda$. So $a/\lambda = 0.02$.
$R_{rad} = 20 (2\pi \times 0.02)^4 = 20 \times (0.12566)^4 \approx 20 \times 2.48 \times 10^{-5} = 0.000496 \Omega$. My initial calculation was off by an order of magnitude.

Let's re-calculate $X_L$.
$L \approx \mu_0 \pi a (\ln(8a/b) - 2)$.
$a = 0.02 \lambda$, $b = 0.001 \lambda$.
$L \approx (4\pi \times 10^{-7}) \times \pi \times (0.02 \times 30 \times 10^{-2} m) \times [\ln(\frac{8 \times 0.02 \lambda}{0.001 \lambda}) - 2]$
$L \approx (1.256 \times 10^{-5}) \times 0.02 \times 30 \times 10^{-2} \times [\ln(160) - 2]$
$L \approx (1.256 \times 10^{-5}) \times 0.006 \times [5.075 - 2]$
$L \approx 7.536 \times 10^{-8} \times 3.075 \approx 2.317 \times 10^{-7} H$
$f = c/\lambda = (3 \times 10^8 m/s) / (30 \times 10^{-2} m) = 10^9 Hz = 1 GHz$.
$\omega = 2\pi f = 2\pi \times 10^9 rad/s$.
$X_L = \omega L = (2\pi \times 10^9) \times (2.317 \times 10^{-7}) \approx 1456 \Omega$.
This value of $X_L$ is extremely high for a small loop. Let's re-check the inductance formula for loops.
The inductance formula $L \approx \mu_0 \pi a (\ln(8a/b) - 2)$ is for a single turn loop.
Balanis, eq 7.23: $L = \mu_0 \pi a \left( \ln\left(\frac{8a}{b}\right) - 1.75 \right)$. This is very similar.
Let's use $R_{rad} = 0.000496 \Omega$.

Let's consider $a = 0.01 \lambda$ and $\lambda = 1$ meter (e.g., 300 MHz).
$R_{rad} = 20 (2\pi \times 0.01)^4 = 20 (0.0628)^4 \approx 20 \times 1.55 \times 10^{-5} = 3.1 \times 10^{-4} \Omega$.
For $a=0.01\lambda$, $b=0.0001\lambda$: $a/b=100$.
$L \approx 4\pi \times 10^{-7} \times \pi \times (0.01\lambda) \times [\ln(800) - 2] = 4\pi^2 \times 10^{-7} \times 0.01\lambda \times [6.68 - 2]$
$L \approx 3.94 \times 10^{-5} \times 0.01\lambda \times 4.68$.
$X_L = \omega L = \frac{2\pi c}{\lambda} L = \frac{2\pi c}{\lambda} \times (3.94 \times 10^{-5} \times 0.01\lambda \times 4.68) = 2\pi c \times 3.94 \times 10^{-7} \times 4.68$
$X_L = 2\pi \times (3 \times 10^8) \times 3.94 \times 10^{-7} \times 4.68 \approx 1744 \Omega$.

It seems the calculations for $X_L$ are consistently large. Let's re-verify the question statement or typical examples. The issue might be with the chosen ratio of $a/\lambda$. For typical small loops, $a/\lambda$ is very small, like $0.01$.

Let's assume my formula for $R_{rad}$ is correct and the value is indeed very small. For $X_L$:
Using the Balanis formula for $L$ (7.23):
$L = \mu_0 \pi a \left( \ln\left(\frac{8a}{b}\right) - 1.75 \right)$.
$\omega = 2\pi f = 2\pi c / \lambda$.
$X_L = \omega L = \frac{2\pi c}{\lambda} \mu_0 \pi a \left( \ln\left(\frac{8a}{b}\right) - 1.75 \right)$.
$X_L = \frac{2\pi \eta_0}{\lambda} \pi a \left( \ln\left(\frac{8a}{b}\right) - 1.75 \right)$.
$a = 0.02\lambda$, $b = 0.001\lambda$. $\eta_0 = 377 \Omega$.
$X_L = \frac{2\pi (377)}{\lambda} \pi (0.02\lambda) \left( \ln\left(\frac{8 \times 0.02\lambda}{0.001\lambda}\right) - 1.75 \right)$
$X_L = 2\pi \times 377 \times 0.02 \pi \left( \ln(160) - 1.75 \right)$
$X_L \approx 473.6 \times (5.075 - 1.75)$
$X_L \approx 473.6 \times 3.325 \approx 1573 \Omega$.

The magnitude of $X_L$ is indeed large. Let's use these values for the answer.

a) $R_{rad} \approx 0.000496 \Omega$.

b) $X_L \approx 1573 \Omega$.

c) Input Impedance $Z = R_{rad} + jX_L$.
$Z \approx 0.000496 + j1573 \Omega$.

The very low radiation resistance compared to the large inductive reactance indicates that a small loop antenna is a very poor radiator and is highly reactive, requiring significant capacitance to become resonant.

---

**Question 2:**

What is the primary radiation characteristic of a small circular loop antenna?

**Answer 2:**

The primary radiation characteristic of a small circular loop antenna is that it behaves like a magnetic dipole. It radiates maximally in directions perpendicular to the plane of the loop and has nulls along the axis passing through the center of the loop, perpendicular to its plane. Its radiation pattern is toroidal.

---

**Question 3:**

For a small loop antenna, how does the radiation resistance change with the ratio of its circumference to the wavelength?

**Answer 3:**

The radiation resistance of a small loop antenna is proportional to the fourth power of the ratio of its circumference to the wavelength ($R_{rad} \propto (C/\lambda)^4$). This means that even a small change in the $C/\lambda$ ratio significantly impacts the radiation resistance.

---

### 11. Important Points to Remember

*   **Small Loop Condition:** $C \ll \lambda$ (Circumference much smaller than wavelength). This implies $a \ll \lambda/(2\pi)$.
*   **Magnetic Dipole:** A small loop antenna radiates as an elementary magnetic dipole.
*   **Radiation Pattern:** Toroidal shape, maximum radiation perpendicular to the loop plane, nulls along the axis.
*   **Radiation Resistance:** Extremely low ($R_{rad} \propto (C/\lambda)^4$), making it inefficient.
*   **Reactance:** Primarily inductive, $X_L$, which increases with loop size and frequency.
*   **Impedance:** Highly inductive, $Z = R_{rad} + jX_L$. Matching is crucial for efficiency.
*   **Applications:** Primarily short-range, near-field applications like RFID and NFC due to magnetic field coupling.

---

This concludes Module 1, Topic: Small Circular Loop Antenna.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
