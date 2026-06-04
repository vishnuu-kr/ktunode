---
title: "Power density of EM wave, Poynting vector theorem."
subject: "ELECTROMAGNETICS"
module: "Module 3: Reflection and refraction of plane electromagnetic waves at boundaries for normal & oblique incidence (parallel and perpendicular polarization), Snell’s law of refraction, Brewster angle."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d7"
status: "completed"
scrapedAt: "2026-05-23T17:56:33.283Z"
---
# Electromagnetics: Module 3 - Reflection, Refraction, and Power Density

## Topic: Power Density of EM Wave, Poynting Vector Theorem

This section delves into the fundamental concepts of how electromagnetic waves carry and transfer energy, focusing on the Poynting vector and its implications for power density.

---

### 1. Power Density of an Electromagnetic Wave

#### 1.1 What is Power Density?

**Definition:** Power density refers to the rate at which energy is transferred per unit area by an electromagnetic wave. It quantifies the intensity of the electromagnetic field in terms of the power it carries.

**Units:** Watts per square meter ($W/m^2$).

#### 1.2 The Poynting Vector ($\vec{S}$)**

The Poynting vector is a crucial concept for understanding the flow of energy in electromagnetic fields.

**Definition:** The Poynting vector, denoted by $\vec{S}$, represents the directional energy flux density (the rate of energy transfer per unit area) of an electromagnetic field. Its direction indicates the direction of energy propagation, and its magnitude represents the power per unit area.

**Mathematical Expression:**

The instantaneous Poynting vector is defined as:

$\vec{S} = \vec{E} \times \vec{H}$

Where:
*   $\vec{E}$ is the instantaneous electric field vector.
*   $\vec{H}$ is the instantaneous magnetic field vector.

**Key Properties of the Poynting Vector:**

*   **Direction:** $\vec{S}$ is perpendicular to both $\vec{E}$ and $\vec{H}$, following the right-hand rule. This aligns with the direction of wave propagation.
*   **Magnitude:** The magnitude of $\vec{S}$ gives the instantaneous power per unit area passing through a surface perpendicular to the direction of propagation.

**Relationship to Power Density:**

The instantaneous power density $P(t)$ flowing through an area $A$ perpendicular to the direction of propagation is given by the integral of the Poynting vector over that area:

$P(t) = \oint_A \vec{S} \cdot d\vec{a}$

For a plane wave propagating in a uniform medium, the power density at a point is simply the magnitude of the Poynting vector:

$P(t) = |\vec{S}| = |\vec{E} \times \vec{H}|$

#### 1.3 Time-Averaged Power Density

In many practical applications, we are interested in the average power delivered over a period of time, especially for sinusoidal time-varying fields.

**Definition:** The time-averaged power density, denoted by $\langle P \rangle$ or $S_{avg}$, is the average of the instantaneous power density over one period of the wave.

**Mathematical Expression for Sinusoidal Fields:**

For sinusoidal electric and magnetic fields, we often work with their phasor representations. If:

$\vec{E}(\vec{r}, t) = \text{Re}\{\vec{E}_0(\vec{r}) e^{j\omega t}\}$
$\vec{H}(\vec{r}, t) = \text{Re}\{\vec{H}_0(\vec{r}) e^{j\omega t}\}$

Where $\vec{E}_0$ and $\vec{H}_0$ are the phasor representations of the electric and magnetic fields, respectively.

The instantaneous Poynting vector is:

$\vec{S}(\vec{r}, t) = \vec{E}(\vec{r}, t) \times \vec{H}(\vec{r}, t)$

The time-averaged Poynting vector is given by:

$\vec{S}_{avg}(\vec{r}) = \frac{1}{2} \text{Re}\{\vec{E}(\vec{r}) \times \vec{H}^*(\vec{r})\}$

Where:
*   $\vec{E}(\vec{r})$ and $\vec{H}(\vec{r})$ are the phasor representations of the electric and magnetic fields.
*   $\vec{H}^*(\vec{r})$ is the complex conjugate of the magnetic field phasor.

**Important Note:** This formula is derived by substituting the sinusoidal expressions and performing time averaging. The factor of $\frac{1}{2}$ arises from the averaging process.

**Example:** For a plane wave in a lossless medium where $\vec{E} = E_0 \cos(\omega t - \beta z) \hat{a}_x$ and $\vec{H} = H_0 \cos(\omega t - \beta z) \hat{a}_y$, with $E_0 = \eta H_0$:

$\vec{S}(z, t) = (\vec{E}_0 \cos(\omega t - \beta z) \hat{a}_x) \times (\vec{H}_0 \cos(\omega t - \beta z) \hat{a}_y)$
$\vec{S}(z, t) = E_0 H_0 \cos^2(\omega t - \beta z) (\hat{a}_x \times \hat{a}_y)$
$\vec{S}(z, t) = E_0 H_0 \cos^2(\omega t - \beta z) \hat{a}_z$

The time-averaged power density is:

$\langle S \rangle = \frac{1}{T} \int_0^T E_0 H_0 \cos^2(\omega t - \beta z) dt$

Since the average of $\cos^2(\theta)$ over a period is $\frac{1}{2}$:

$\langle S \rangle = E_0 H_0 \cdot \frac{1}{2} \hat{a}_z$
$\langle S \rangle = \frac{1}{2} E_0 H_0 \hat{a}_z$

Using $E_0 = \eta H_0$:

$\langle S \rangle = \frac{1}{2} \eta H_0^2 \hat{a}_z = \frac{1}{2} \frac{E_0^2}{\eta} \hat{a}_z$

In phasor form:
$\vec{E} = E_0 \hat{a}_x$
$\vec{H} = H_0 \hat{a}_y$

$\vec{S}_{avg} = \frac{1}{2} \text{Re}\{\vec{E} \times \vec{H}^*\} = \frac{1}{2} \text{Re}\{(E_0 \hat{a}_x) \times (H_0 \hat{a}_y)^*\} = \frac{1}{2} \text{Re}\{E_0 \hat{a}_x \times H_0^* \hat{a}_y\}$
$\vec{S}_{avg} = \frac{1}{2} \text{Re}\{E_0 H_0^* (\hat{a}_x \times \hat{a}_y)\} = \frac{1}{2} \text{Re}\{E_0 H_0^* \hat{a}_z\}$

If $E_0$ and $H_0$ are real and positive (as is common for wave magnitude in time domain):
$\vec{S}_{avg} = \frac{1}{2} E_0 H_0 \hat{a}_z$

---

### 2. The Poynting Vector Theorem

#### 2.1 Statement of the Theorem

The Poynting vector theorem is a statement of the conservation of energy for electromagnetic fields. It relates the rate of change of energy stored in the electromagnetic field within a volume to the net power flowing out of the volume and the rate at which work is done by the field on charges within the volume.

**In essence:** Energy is conserved. It can be transferred, stored, or dissipated. The theorem tracks these energy flows.

#### 2.2 Derivation and Mathematical Formulation

The Poynting vector theorem can be derived from Maxwell's equations.

Starting with Maxwell's equations:
1.  $\nabla \times \vec{E} = -\mu \frac{\partial \vec{H}}{\partial t}$ (Faraday's Law)
2.  $\nabla \times \vec{H} = \vec{J} + \epsilon \frac{\partial \vec{E}}{\partial t}$ (Ampere-Maxwell Law)

Consider the scalar product of $\vec{H}$ with equation (1) and $\vec{E}$ with equation (2):

$\vec{H} \cdot (\nabla \times \vec{E}) = -\mu \vec{H} \cdot \frac{\partial \vec{H}}{\partial t}$
$\vec{E} \cdot (\nabla \times \vec{H}) = \vec{E} \cdot \vec{J} + \epsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$

Subtracting the first from the second:

$\vec{E} \cdot (\nabla \times \vec{H}) - \vec{H} \cdot (\nabla \times \vec{E}) = \vec{E} \cdot \vec{J} + \epsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} + \mu \vec{H} \cdot \frac{\partial \vec{H}}{\partial t}$

Using the vector identity $\nabla \cdot (\vec{E} \times \vec{H}) = \vec{H} \cdot (\nabla \times \vec{E}) - \vec{E} \cdot (\nabla \times \vec{H})$:

$-\nabla \cdot (\vec{E} \times \vec{H}) = \vec{E} \cdot \vec{J} + \epsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} + \mu \vec{H} \cdot \frac{\partial \vec{H}}{\partial t}$

Recall that $\frac{\partial}{\partial t} (\frac{1}{2} \epsilon E^2) = \epsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$ and $\frac{\partial}{\partial t} (\frac{1}{2} \mu H^2) = \mu \vec{H} \cdot \frac{\partial \vec{H}}{\partial t}$.
Let $w_e = \frac{1}{2} \epsilon E^2$ be the electric energy density and $w_m = \frac{1}{2} \mu H^2$ be the magnetic energy density. The total energy density is $w = w_e + w_m$.

So, $\epsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{\partial w_e}{\partial t}$ and $\mu \vec{H} \cdot \frac{\partial \vec{H}}{\partial t} = \frac{\partial w_m}{\partial t}$.

Therefore:

$-\nabla \cdot (\vec{E} \times \vec{H}) = \vec{E} \cdot \vec{J} + \frac{\partial w_e}{\partial t} + \frac{\partial w_m}{\partial t}$

Rearranging:

$\nabla \cdot (\vec{E} \times \vec{H}) + \vec{E} \cdot \vec{J} + \frac{\partial}{\partial t} (\frac{1}{2} \epsilon E^2 + \frac{1}{2} \mu H^2) = 0$

Replacing $\vec{S} = \vec{E} \times \vec{H}$ and $w = \frac{1}{2} \epsilon E^2 + \frac{1}{2} \mu H^2$:

$\nabla \cdot \vec{S} + \vec{E} \cdot \vec{J} + \frac{\partial w}{\partial t} = 0$

This is the differential form of the Poynting vector theorem.

#### 2.3 Integral Form of the Poynting Vector Theorem

To understand the theorem in terms of energy flow across a closed surface, we integrate the differential form over a volume $V$ bounded by a closed surface $S$.

$\int_V \left( \nabla \cdot \vec{S} + \vec{E} \cdot \vec{J} + \frac{\partial w}{\partial t} \right) dV = 0$

Using the Divergence Theorem for the first term: $\int_V (\nabla \cdot \vec{S}) dV = \oint_S \vec{S} \cdot d\vec{a}$

$\oint_S \vec{S} \cdot d\vec{a} + \int_V \vec{E} \cdot \vec{J} dV + \int_V \frac{\partial w}{\partial t} dV = 0$

The term $\int_V \frac{\partial w}{\partial t} dV$ can be written as $\frac{d}{dt} \int_V w \, dV$, which represents the rate of change of the total electromagnetic energy stored in the volume $V$.

The term $\int_V \vec{E} \cdot \vec{J} dV$ represents the rate at which work is done by the electric field on the charges (currents) within the volume. This work is often dissipated as heat (Joule heating) in conductive media.

The term $\oint_S \vec{S} \cdot d\vec{a}$ represents the net rate at which energy flows out of the volume $V$ through the surface $S$.

**The Integral Form of the Poynting Vector Theorem:**

$\oint_S \vec{S} \cdot d\vec{a} + \int_V \vec{E} \cdot \vec{J} dV + \frac{d}{dt} \int_V w \, dV = 0$

**Interpretation:**

*   **$\oint_S \vec{S} \cdot d\vec{a}$ (Outgoing Power):** The net power leaving the volume.
*   **$\int_V \vec{E} \cdot \vec{J} dV$ (Power Dissipation/Work Done):** The rate at which energy is converted from electromagnetic field energy into other forms (e.g., heat) within the volume. This is often called the power dissipated in the volume.
*   **$\frac{d}{dt} \int_V w \, dV$ (Rate of Change of Stored Energy):** The rate at which the total electromagnetic energy (electric and magnetic) stored within the volume is changing.

Rearranging the equation to highlight energy conservation:

**Outgoing Power = - (Power Dissipated + Rate of Change of Stored Energy)**

Or, more intuitively:

**Rate of Energy Flow Out of Volume = - Rate of Energy Dissipation - Rate of Energy Accumulation**

If we move the terms related to energy within the volume to the right side:

$\oint_S \vec{S} \cdot d\vec{a} = - \int_V \vec{E} \cdot \vec{J} dV - \frac{d}{dt} \int_V w \, dV$

This means the net power flowing *out* of the volume equals the negative of the power dissipated inside plus the negative of the energy stored inside. Or, the power flowing *into* the volume is equal to the sum of power dissipated and energy stored.

#### 2.4 Applications and Significance

*   **Energy Transfer in Wave Propagation:** The Poynting vector describes how electromagnetic waves carry energy from one point to another. For a plane wave propagating in free space (where $\vec{J}=0$), the theorem simplifies to $\nabla \cdot \vec{S} + \frac{\partial w}{\partial t} = 0$, meaning energy is conserved and flows from one region to another without dissipation.
*   **Antenna Theory:** It's used to calculate the total power radiated by an antenna by integrating the Poynting vector over a large closed surface surrounding the antenna.
*   **Transmission Lines and Waveguides:** It helps analyze power flow along these structures.
*   **Understanding Power Dissipation:** The $\vec{E} \cdot \vec{J}$ term quantifies power dissipation due to resistance (Joule heating).
*   **Energy Storage:** The $\frac{\partial w}{\partial t}$ term accounts for changes in the energy stored in the electric and magnetic fields.

---

### 3. Important Points to Remember

*   **Poynting Vector ($\vec{S}$):** Represents the instantaneous power density (power per unit area) of an EM wave. Its direction is the direction of energy flow.
*   **Formula for $\vec{S}$:** $\vec{S} = \vec{E} \times \vec{H}$.
*   **Time-Averaged Power Density ($\vec{S}_{avg}$):** For sinusoidal fields, $\vec{S}_{avg} = \frac{1}{2} \text{Re}\{\vec{E} \times \vec{H}^*\}$. This is what we usually measure as power.
*   **Poynting Vector Theorem:** An energy conservation statement for electromagnetic fields.
*   **Differential Form:** $\nabla \cdot \vec{S} + \vec{E} \cdot \vec{J} + \frac{\partial w}{\partial t} = 0$.
*   **Integral Form:** $\oint_S \vec{S} \cdot d\vec{a} + \int_V \vec{E} \cdot \vec{J} dV + \frac{d}{dt} \int_V w \, dV = 0$.
*   **Meaning of Terms in Integral Form:**
    *   $\oint_S \vec{S} \cdot d\vec{a}$: Net power leaving the volume.
    *   $\int_V \vec{E} \cdot \vec{J} dV$: Power dissipated (work done on charges) within the volume.
    *   $\frac{d}{dt} \int_V w \, dV$: Rate of change of stored electromagnetic energy within the volume.
*   **Energy Conservation:** The total energy leaving the volume, plus the energy dissipated within, plus the energy stored (or changing storage) within must sum to zero (or, alternatively, the power entering the volume equals power dissipated plus power stored).

---

### 4. Practice Questions and Exercises

**Question 1:**
A plane electromagnetic wave propagating in free space has an electric field given by $\vec{E}(z, t) = 100 \cos(10^9 \pi t - 3\pi z) \hat{a}_x V/m$.
(a) Find the corresponding magnetic field $\vec{H}(z, t)$.
(b) Calculate the instantaneous Poynting vector $\vec{S}(z, t)$.
(c) Determine the time-averaged power density of the wave.

**Solution 1:**
Given: $\vec{E}(z, t) = 100 \cos(10^9 \pi t - 3\pi z) \hat{a}_x V/m$.
This is a plane wave in free space. The angular frequency is $\omega = 10^9 \pi$ rad/s. The wave number is $\beta = 3\pi$ rad/m.

(a) **Magnetic Field:**
In free space, $\eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 377 \Omega$.
The magnetic field is perpendicular to the electric field and the direction of propagation. The direction of propagation is $\hat{a}_z$.
The magnitude of the magnetic field is $H_0 = E_0 / \eta_0$.
$E_0 = 100 V/m$.
$H_0 = \frac{100}{377} \approx 0.265 A/m$.
The direction of $\vec{H}$ is found using $\vec{E} \times \vec{H} \propto \hat{k}$ (direction of propagation).
$\hat{a}_x \times \vec{H} \propto \hat{a}_z$.
This implies $\vec{H}$ must be in the $\hat{a}_y$ direction.
So, $\vec{H}(z, t) = H_0 \cos(10^9 \pi t - 3\pi z) \hat{a}_y = \frac{100}{377} \cos(10^9 \pi t - 3\pi z) \hat{a}_y A/m$.

(b) **Instantaneous Poynting Vector:**
$\vec{S}(z, t) = \vec{E}(z, t) \times \vec{H}(z, t)$
$\vec{S}(z, t) = (100 \cos(10^9 \pi t - 3\pi z) \hat{a}_x) \times (\frac{100}{377} \cos(10^9 \pi t - 3\pi z) \hat{a}_y)$
$\vec{S}(z, t) = 100 \times \frac{100}{377} \cos^2(10^9 \pi t - 3\pi z) (\hat{a}_x \times \hat{a}_y)$
$\vec{S}(z, t) = \frac{10000}{377} \cos^2(10^9 \pi t - 3\pi z) \hat{a}_z \ W/m^2$
$\vec{S}(z, t) \approx 26.53 \cos^2(10^9 \pi t - 3\pi z) \hat{a}_z \ W/m^2$

(c) **Time-Averaged Power Density:**
The time-averaged power density is the average of $\vec{S}(z, t)$ over one period.
The average of $\cos^2(\theta)$ is $\frac{1}{2}$.
$S_{avg} = \frac{1}{2} \frac{10000}{377} \hat{a}_z \ W/m^2$
$S_{avg} \approx \frac{1}{2} (26.53) \hat{a}_z \ W/m^2$
$S_{avg} \approx 13.26 \hat{a}_z \ W/m^2$

Alternatively, using phasor form:
$\vec{E} = 100 \hat{a}_x$
$\vec{H} = \frac{100}{377} \hat{a}_y$
$S_{avg} = \frac{1}{2} \text{Re}\{\vec{E} \times \vec{H}^*\} = \frac{1}{2} \text{Re}\{ (100 \hat{a}_x) \times (\frac{100}{377} \hat{a}_y)^* \}$
$S_{avg} = \frac{1}{2} \text{Re}\{ 100 \times \frac{100}{377} \hat{a}_z \} = \frac{1}{2} \frac{10000}{377} \hat{a}_z \approx 13.26 \hat{a}_z \ W/m^2$.

**Question 2:**
Consider a volume $V$ filled with a conducting medium. Inside this volume, the electric field is $\vec{E}$ and the current density is $\vec{J}$. The total electromagnetic energy stored in the volume is $w$. Using the Poynting vector theorem, describe what happens to the energy flowing into the volume if the electromagnetic energy stored within the volume is decreasing.

**Solution 2:**
The integral form of the Poynting vector theorem is:
$\oint_S \vec{S} \cdot d\vec{a} + \int_V \vec{E} \cdot \vec{J} dV + \frac{d}{dt} \int_V w \, dV = 0$

We are given that the electromagnetic energy stored within the volume is decreasing. This means $\frac{d}{dt} \int_V w \, dV < 0$.
Let's denote the net power flowing *out* of the volume as $P_{out} = \oint_S \vec{S} \cdot d\vec{a}$ and the power dissipated within the volume as $P_{diss} = \int_V \vec{E} \cdot \vec{J} dV$.
The theorem can be rewritten as:
$P_{out} + P_{diss} + \frac{d}{dt} (\text{Energy stored}) = 0$

Since $\frac{d}{dt} (\text{Energy stored}) < 0$, let's say it is $-E_{store\_rate}$ where $E_{store\_rate} > 0$.
$P_{out} + P_{diss} - E_{store\_rate} = 0$

Rearranging for the net power flowing *into* the volume ($P_{in} = -P_{out}$):
$-P_{in} + P_{diss} - E_{store\_rate} = 0$
$P_{in} = P_{diss} - E_{store\_rate}$

Since $E_{store\_rate}$ is positive, $P_{in}$ is less than $P_{diss}$. This means that for the stored energy to decrease, the power dissipated within the volume must be greater than the power entering the volume.

Alternatively, let's consider the total power flow balance from the perspective of power entering the volume ($P_{in}$ is power entering, so $P_{in} = -\oint_S \vec{S} \cdot d\vec{a}$) and energy depletion.
Power entering the volume = Power dissipated + Rate of decrease of stored energy
$- \oint_S \vec{S} \cdot d\vec{a} = \int_V \vec{E} \cdot \vec{J} dV - (-\frac{d}{dt} \int_V w \, dV)$

So, if the electromagnetic energy stored within the volume is decreasing ($\frac{d}{dt} \int_V w \, dV < 0$), it means energy is being consumed from storage. This energy, along with any energy dissipated through currents, must have entered the volume.

**In summary:** If the electromagnetic energy stored within the volume is decreasing, it implies that the rate at which energy is being dissipated within the volume (due to currents) is greater than the rate at which energy is flowing out of the volume. Consequently, power must be flowing into the volume to account for both the dissipation and the net decrease in stored energy.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 5. References

*   **Elements of Electromagnetics by Matthew N. O. Sadiku:** Chapter 11 discusses the Poynting vector and its applications. (Refer to sections on Poynting vector definition, calculation for plane waves, and power in EM waves).
*   **Engineering Electromagnetics by William Hayt and John Buck:** Chapter 9 covers energy and momentum in electromagnetic fields, including the Poynting vector and its theorem. (Refer to sections on Poynting vector and energy conservation).
*   **Electromagnetic Waves and Transmission Lines by Y Mallikarjuna Reddy:** Likely to have sections detailing the Poynting vector for power calculation in wave propagation.

---

### 6. Alignment with Course Outcomes

*   **CO1 (K2):** This topic builds upon the understanding of electric and magnetic fields, which are mathematical concepts related to vector fields. The definitions of Poynting vector and energy density contribute to this.
*   **CO2 (K3):** The derivation of the Poynting vector theorem directly uses Maxwell's equations in their differential form, demonstrating their application to energy conservation principles.
*   **CO3 (K3):** This topic is central to analyzing the power density of electromagnetic waves. Understanding the Poynting vector is crucial for quantifying how much power a wave carries and how that power is distributed. The theorem provides the framework for analyzing energy flow at boundaries, which is relevant to reflection and refraction (though not explicitly detailed in this specific topic section).
*   **CO4 (K3):** While CO4 focuses on transmission lines and waveguides, the fundamental principles of power flow described by the Poynting vector are directly applicable to understanding how power propagates through these structures.

---
This concludes the study notes for Power Density of EM Wave and the Poynting Vector Theorem. Remember to review the relevant chapters in your textbooks for further details and examples.