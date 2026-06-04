---
title: "Development of Acoustic wave equation, plane wave equation and D-Alembert’s solution, Helmholtz equation(frequency-domain)"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd8"
status: "completed"
scrapedAt: "2026-05-20T18:09:28.526Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Development of Acoustic Wave Equation, Plane Wave Equation and D-Alembert’s Solution, Helmholtz Equation (Frequency-Domain)

---

### **Learning Outcomes:**

*   Understand the fundamental principles of acoustic wave propagation.
*   Derive the acoustic wave equation from basic principles.
*   Analyze the properties of plane waves.
*   Understand and apply D-Alembert's solution to the wave equation.
*   Understand and apply the Helmholtz equation for frequency-domain analysis.

---

### **Course Outcomes Alignment:**

*   **CO1 (K2):** Define various acoustic terminologies and understand the physics behind acoustic wave propagation.
    *   This topic directly addresses the understanding of acoustic wave propagation and the derivation of the governing equations.
*   **CO2 (K4):** Analyze the transmission of sound through different media and tubes.
    *   The derived wave equations are fundamental to analyzing sound transmission in various media and, with further development, in tubes.
*   **CO3 (K2):** Understand the mechanism of hearing, noise regulations and noise measuring devices.
    *   While not directly about hearing or measurements, understanding wave propagation is foundational to understanding how sound travels to the ear and how measurements are interpreted.
*   **CO4 (K2):** Explain various noise reducing measures.
    *   The wave equation is essential for understanding how sound travels and interacts with materials, which is crucial for designing noise reduction strategies.

---

### **Key Concepts and Definitions:**

*   **Sound:** A disturbance that propagates as a wave, typically through a medium such as air, water, or solids. It is characterized by variations in pressure, density, or displacement of particles.
*   **Acoustic Wave:** A mechanical wave that propagates through a medium due to the oscillation of particles within the medium.
*   **Pressure Variation (p):** The instantaneous deviation of the local pressure from the ambient (equilibrium) pressure.
*   **Particle Velocity (v):** The instantaneous velocity of a small element of the medium as it oscillates around its equilibrium position.
*   **Density Variation (ρ'):** The instantaneous deviation of the local density from the equilibrium density.
*   **Medium Properties:**
    *   **Density ($\rho_0$):** Mass per unit volume of the medium at equilibrium.
    *   **Bulk Modulus (K):** A measure of a fluid's resistance to compression. It is defined as the ratio of pressure change to the relative volume change: $K = -\frac{\Delta P}{\Delta V/V}$.
*   **Wave Speed (c):** The speed at which a disturbance propagates through a medium. For acoustic waves, it's related to the medium's properties by $c = \sqrt{K/\rho_0}$.
*   **Wavelength ($\lambda$):** The spatial period of the wave, the distance over which the wave's shape repeats.
*   **Frequency (f):** The number of complete cycles of oscillation that pass a point per unit time.
*   **Angular Frequency ($\omega$):** Related to frequency by $\omega = 2\pi f$.
*   **Harmonic Wave:** A wave whose shape can be described by a sinusoidal function.

---

### **1. Development of the Acoustic Wave Equation**

The acoustic wave equation describes how sound propagates through a medium. It is derived by applying fundamental principles of fluid dynamics and continuum mechanics.

**(Based on Ekinsler, Frey, Coppens, Sanders - Chapter 2 & 3; Ver & Beranek - Chapter 2)**

**Assumptions:**

*   **Medium is a fluid:** The derivation typically starts with a fluid medium (like air or water).
*   **Small Amplitude Disturbances:** Pressure, density, and particle velocity variations are small compared to their equilibrium values. This allows for linearization of governing equations.
*   **Homogeneous and Isotropic Medium:** The medium's properties are uniform and the same in all directions.
*   **No Viscosity or Thermal Conduction:** Ideal fluid assumptions simplify the derivation.
*   **Adiabatic Process:** For sound propagation, compressions and rarefactions happen quickly, so heat transfer is negligible.

**Governing Principles:**

1.  **Conservation of Mass (Continuity Equation):**
    The rate of change of mass in a control volume equals the net rate of mass flow into the volume.
    For a fluid element with volume $V$:
    $\frac{\partial (\rho V)}{\partial t} = \sum_{surfaces} (\rho \vec{v} \cdot \vec{n}) V$
    Considering a small control volume $\Delta x \Delta y \Delta z$:
    $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$
    For small amplitude disturbances, $\rho = \rho_0 + \rho'$ and $\vec{v}$ is the particle velocity. Approximating $\rho \approx \rho_0$:
    $\frac{\partial \rho'}{\partial t} + \rho_0 (\nabla \cdot \vec{v}) = 0$  (Equation 1)

2.  **Conservation of Momentum (Euler's Equation):**
    The rate of change of momentum of a fluid element equals the sum of forces acting on it.
    $\rho \frac{d\vec{v}}{dt} = -\nabla P$
    For small amplitude waves, $\rho \approx \rho_0$, and the material derivative $d\vec{v}/dt$ becomes the local acceleration $\partial\vec{v}/\partial t$ because the particle velocity is already a perturbation. The pressure $P = P_0 + p'$, where $P_0$ is ambient pressure and $p'$ is the acoustic pressure.
    $\rho_0 \frac{\partial \vec{v}}{\partial t} = -\nabla p'$ (Equation 2)

3.  **Equation of State (Relationship between Pressure and Density):**
    For a reversible adiabatic process in a fluid:
    $P = K \left(\frac{\rho}{\rho_{ref}}\right)^\gamma$ (This is a general form, more practically, we consider the perturbation)
    Using the definition of bulk modulus $K = -\frac{\Delta P}{\Delta V/V}$, and relating density change to volume change: $\Delta V/V = -\Delta \rho/\rho$.
    So, $K = -\frac{p'}{(-\rho'/\rho_0)} = \frac{\rho'}{\rho_0} K$
    This implies: $\rho' = \frac{\rho_0}{K} p'$ (Equation 3)

**Derivation:**

Substitute Equation 2 into Equation 1:
$\frac{\partial}{\partial t} \left( \frac{\rho_0}{K} p' \right) + \rho_0 \left( \nabla \cdot \left( -\frac{1}{\rho_0} \nabla p' \right) \right) = 0$
$\frac{\rho_0}{K} \frac{\partial p'}{\partial t} - \nabla \cdot (\nabla p') = 0$
$\frac{1}{K} \frac{\partial p'}{\partial t} - \nabla^2 p' = 0$

Multiply by $K$:
$\frac{\partial p'}{\partial t} - \frac{K}{\rho_0} \nabla^2 p' = 0$

Recall that the speed of sound in the medium is $c = \sqrt{K/\rho_0}$, so $c^2 = K/\rho_0$.
Substituting this, we get the **Acoustic Wave Equation** for pressure:

$$ \nabla^2 p' - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0 $$

**Important Note:** The acoustic wave equation can also be written in terms of particle velocity or displacement potential, but the pressure form is most common for sound.

---

### **2. Plane Wave Equation and D-Alembert's Solution**

A plane wave is a wave whose wavefronts are parallel planes. In one dimension (e.g., along the x-axis), the acoustic wave equation simplifies significantly.

**Simplification to 1D:**
Assume the acoustic pressure $p'$ depends only on position $x$ and time $t$, i.e., $p' = p'(x, t)$.
Then, $\nabla^2 p' = \frac{\partial^2 p'}{\partial x^2}$.

The acoustic wave equation becomes:
$$ \frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0 $$

This is the **1D Acoustic Wave Equation** or **Plane Wave Equation**.

**D-Alembert's Solution:**

Jean le Rond d'Alembert found a general solution to the 1D wave equation. This solution states that any solution can be represented as a sum of two arbitrary functions, one depending on $(x - ct)$ and the other on $(x + ct)$.

Let $\xi = x - ct$ and $\eta = x + ct$. Then $x = (\xi + \eta)/2$ and $t = (\eta - \xi)/(2c)$.
Using the chain rule for partial derivatives:
$\frac{\partial}{\partial x} = \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} = 1 \cdot \frac{\partial}{\partial \xi} + 1 \cdot \frac{\partial}{\partial \eta} = \frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta}$
$\frac{\partial}{\partial t} = \frac{\partial \xi}{\partial t} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial t} \frac{\partial}{\partial \eta} = (-c) \frac{\partial}{\partial \xi} + c \frac{\partial}{\partial \eta}$

Applying these to the wave equation:
$\frac{\partial^2 p'}{\partial x^2} = \left(\frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta}\right)\left(\frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta}\right) p' = \left(\frac{\partial^2}{\partial \xi^2} + 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2}\right) p'$
$\frac{\partial^2 p'}{\partial t^2} = \left(-c \frac{\partial}{\partial \xi} + c \frac{\partial}{\partial \eta}\right)\left(-c \frac{\partial}{\partial \xi} + c \frac{\partial}{\partial \eta}\right) p' = c^2 \left(\frac{\partial^2}{\partial \xi^2} - 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2}\right) p'$

Substituting into the 1D wave equation:
$\left(\frac{\partial^2}{\partial \xi^2} + 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2}\right) p' - \frac{1}{c^2} \left(c^2 \left(\frac{\partial^2}{\partial \xi^2} - 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2}\right) p'\right) = 0$
$\frac{\partial^2 p'}{\partial \xi^2} + 2\frac{\partial^2 p'}{\partial \xi \partial \eta} + \frac{\partial^2 p'}{\partial \eta^2} - \frac{\partial^2 p'}{\partial \xi^2} + 2\frac{\partial^2 p'}{\partial \xi \partial \eta} - \frac{\partial^2 p'}{\partial \eta^2} = 0$
$4\frac{\partial^2 p'}{\partial \xi \partial \eta} = 0$

This implies $\frac{\partial}{\partial \xi} \left( \frac{\partial p'}{\partial \eta} \right) = 0$.
Integrating with respect to $\eta$:
$\frac{\partial p'}{\partial \eta} = f(\xi)$ (where $f$ is an arbitrary function of $\xi$)
Integrating again with respect to $\xi$:
$p'(\xi, \eta) = \int f(\xi) d\xi + g(\eta)$
Let $F(\xi) = \int f(\xi) d\xi$. Then:

$$ p'(x, t) = F(x - ct) + G(x + ct) $$

This is **D-Alembert's Solution**.

*   $F(x - ct)$: Represents a wave traveling in the **positive x-direction**.
*   $G(x + ct)$: Represents a wave traveling in the **negative x-direction**.

**Example: Harmonic Plane Wave**

A common and important solution is the harmonic plane wave, where the pressure variation is sinusoidal.
Let $p'(x, t) = A \cos(kx - \omega t + \phi)$, where:
*   $A$ is the amplitude.
*   $k$ is the wavenumber ($k = \omega/c = 2\pi/\lambda$).
*   $\omega$ is the angular frequency.
*   $\phi$ is the phase constant.

This solution can be written as:
$p'(x, t) = A \cos((x - ct)\omega/c + \phi)$
This fits D-Alembert's form, with $F(\xi) = A \cos(\omega \xi/c + \phi)$ and $G(\eta) = 0$.

**(Refer to Ekinsler et al., Chapter 3 for detailed derivation and examples of harmonic waves).**

---

### **3. Helmholtz Equation (Frequency-Domain)**

The Helmholtz equation is a form of the wave equation that is useful for analyzing time-harmonic waves, i.e., waves where the source and the resulting disturbance oscillate at a single frequency. This is often referred to as the "frequency-domain" representation.

**(Based on Ver & Beranek - Chapter 2; Munjal - Chapter 3)**

Consider a source oscillating with angular frequency $\omega$. The acoustic pressure $p'$ can be expressed as a complex quantity representing the amplitude and phase:
$p'(x, y, z, t) = \text{Re}\{ P(x, y, z) e^{j\omega t} \}$
where $P(x, y, z)$ is the complex amplitude, and $j = \sqrt{-1}$.

Substitute this into the 3D acoustic wave equation:
$\nabla^2 [\text{Re}\{ P e^{j\omega t} \}] - \frac{1}{c^2} \frac{\partial^2}{\partial t^2} [\text{Re}\{ P e^{j\omega t} \}] = 0$

The Laplacian operator $\nabla^2$ acts only on spatial coordinates, so:
$\text{Re}\{ \nabla^2 (P e^{j\omega t}) \} - \frac{1}{c^2} \text{Re}\{ \frac{\partial^2}{\partial t^2} (P e^{j\omega t}) \} = 0$

Let's evaluate the time derivatives:
$\frac{\partial}{\partial t} (P e^{j\omega t}) = P (j\omega) e^{j\omega t}$
$\frac{\partial^2}{\partial t^2} (P e^{j\omega t}) = P (j\omega)^2 e^{j\omega t} = P (-\omega^2) e^{j\omega t}$

Substitute back into the equation:
$\text{Re}\{ (\nabla^2 P) e^{j\omega t} \} - \frac{1}{c^2} \text{Re}\{ -\omega^2 P e^{j\omega t} \} = 0$
$\text{Re}\{ (\nabla^2 P) e^{j\omega t} \} + \frac{\omega^2}{c^2} \text{Re}\{ P e^{j\omega t} \} = 0$

Since the equation must hold for all time $t$, the real part of the expression in the curly braces must be zero:
$\nabla^2 P + \frac{\omega^2}{c^2} P = 0$

This is the **Helmholtz Equation**.

The term $\frac{\omega}{c}$ is often replaced by the wavenumber $k = \frac{\omega}{c}$. So the Helmholtz equation is commonly written as:

$$ \nabla^2 P + k^2 P = 0 $$

**Significance:**

*   **Transforms PDE to ODE (in simplified cases):** If the geometry is simple (e.g., 1D), the Helmholtz equation becomes an ordinary differential equation.
*   **Frequency Domain Analysis:** It simplifies the analysis of steady-state vibrations and wave propagation at a specific frequency. This is crucial for understanding resonance, impedance, and radiation from sources.
*   **Boundary Value Problems:** It is the fundamental equation solved in conjunction with boundary conditions to determine the acoustic field in a given region.

**Helmholtz Equation for Plane Waves:**
For a plane wave propagating along the x-axis, $P(x) = P_0 e^{-jkx}$ (assuming propagation in the positive x-direction).
$\nabla^2 P = \frac{d^2 P}{dx^2}$
$\frac{d^2}{dx^2} (P_0 e^{-jkx}) + k^2 (P_0 e^{-jkx}) = 0$
$\frac{d}{dx} (-jk P_0 e^{-jkx}) + k^2 P_0 e^{-jkx} = 0$
$(-jk)^2 P_0 e^{-jkx} + k^2 P_0 e^{-jkx} = 0$
$-k^2 P_0 e^{-jkx} + k^2 P_0 e^{-jkx} = 0$
$0 = 0$
This confirms that a harmonic plane wave is a solution to the Helmholtz equation.

**(Refer to Ekinsler et al., Chapter 3 for further details on solving the Helmholtz equation in different coordinate systems).**

---

### **Important Points to Remember:**

*   The acoustic wave equation describes how pressure variations propagate through a medium.
*   It is derived from the principles of conservation of mass, momentum, and an equation of state.
*   The speed of sound ($c$) is a critical parameter in the wave equation and depends on the medium's properties (Bulk Modulus and density).
*   The 1D wave equation applies to plane waves.
*   D-Alembert's solution shows that any 1D wave can be represented as a sum of waves traveling in opposite directions.
*   The Helmholtz equation is the time-independent form of the wave equation, used for harmonic (single-frequency) phenomena.
*   The wavenumber ($k$) relates angular frequency ($\omega$) and wave speed ($c$) by $k = \omega/c$.

---

### **Practice Questions:**

1.  **Derive the 1D acoustic wave equation from the continuity equation and Euler's equation, assuming small amplitude pressure and density variations.**
    *   **Answer:** (See derivation in Section 1, focusing on the 1D simplification). Start with $\frac{\partial \rho'}{\partial t} + \rho_0 \frac{\partial v_x}{\partial x} = 0$ and $\rho_0 \frac{\partial v_x}{\partial t} = -\frac{\partial p'}{\partial x}$. Use $\rho' = \frac{\rho_0}{K} p'$ to eliminate $\rho'$ and $v_x$, leading to $\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$.

2.  **Show that $p'(x, t) = A \sin(kx - \omega t)$ is a solution to the 1D acoustic wave equation $\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$, assuming $k = \omega/c$.**
    *   **Answer:**
        *   $\frac{\partial p'}{\partial x} = Ak \cos(kx - \omega t)$
        *   $\frac{\partial^2 p'}{\partial x^2} = -Ak^2 \sin(kx - \omega t)$
        *   $\frac{\partial p'}{\partial t} = -A\omega \cos(kx - \omega t)$
        *   $\frac{\partial^2 p'}{\partial t^2} = -A\omega (-\omega) \sin(kx - \omega t) = A\omega^2 \sin(kx - \omega t)$
        *   Substitute into the wave equation: $-Ak^2 \sin(kx - \omega t) - \frac{1}{c^2} (A\omega^2 \sin(kx - \omega t)) = 0$
        *   $-Ak^2 \sin(kx - \omega t) - A\frac{\omega^2}{c^2} \sin(kx - \omega t) = 0$
        *   Since $k = \omega/c$, then $k^2 = \omega^2/c^2$.
        *   $-Ak^2 \sin(kx - \omega t) - Ak^2 \sin(kx - \omega t) = 0$ (Mistake in calculation, let's recheck)
        *   Correct calculation: $-Ak^2 \sin(kx - \omega t) - \frac{1}{c^2} (A\omega^2 \sin(kx - \omega t)) = 0$. Substitute $k=\omega/c \implies \omega^2/c^2 = k^2$.
        *   $-Ak^2 \sin(kx - \omega t) - Ak^2 \sin(kx - \omega t) = 0$ (Still wrong, there should be a cancellation).
        *   Let's retry:
        *   $\frac{\partial^2 p'}{\partial x^2} = -A k^2 \sin(kx - \omega t)$
        *   $\frac{\partial^2 p'}{\partial t^2} = A \omega^2 \sin(kx - \omega t)$
        *   The equation is $\frac{\partial^2 p'}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2}$.
        *   $-Ak^2 \sin(kx - \omega t) = \frac{1}{c^2} (A \omega^2 \sin(kx - \omega t))$
        *   $-Ak^2 \sin(kx - \omega t) = Ak^2 \sin(kx - \omega t)$ (This means the equation is NOT satisfied unless the amplitude is zero, something is wrong in the premise. A solution is of the form $\sin(kx-\omega t)$ *or* $\cos(kx-\omega t)$).

        *   **Correct Approach:** The wave equation is $\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$.
        *   Let $p'(x,t) = A \sin(kx - \omega t)$.
        *   $\frac{\partial^2 p'}{\partial x^2} = -Ak^2 \sin(kx - \omega t)$.
        *   $\frac{\partial^2 p'}{\partial t^2} = A\omega^2 \sin(kx - \omega t)$.
        *   Substitute: $-Ak^2 \sin(kx - \omega t) - \frac{1}{c^2} (A\omega^2 \sin(kx - \omega t)) = 0$.
        *   If $k = \omega/c$, then $k^2 = \omega^2/c^2$. So, $-Ak^2 \sin(kx - \omega t) - Ak^2 \sin(kx - \omega t) = 0$. This is incorrect.

        *   **Let's use the correct form of D'Alembert's solution:** $p'(x, t) = F(x - ct)$. If $F(\xi) = A \sin(k\xi)$, then $p'(x, t) = A \sin(k(x-ct)) = A \sin(kx - kct)$. For this to be a harmonic wave, we need $kc = \omega$. Thus, $k=\omega/c$.
        *   So, $p'(x, t) = A \sin(kx - \omega t)$ is a valid solution if $k = \omega/c$.
        *   Let's check again:
        *   $\frac{\partial^2 p'}{\partial x^2} = -Ak^2 \sin(kx - \omega t)$.
        *   $\frac{\partial^2 p'}{\partial t^2} = A\omega^2 \sin(kx - \omega t)$.
        *   Wave equation: $\frac{\partial^2 p'}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2}$.
        *   $-Ak^2 \sin(kx - \omega t) = \frac{1}{c^2} (A\omega^2 \sin(kx - \omega t))$.
        *   $-Ak^2 \sin(kx - \omega t) = A \frac{\omega^2}{c^2} \sin(kx - \omega t)$.
        *   If we choose $k = \omega/c$, then $k^2 = \omega^2/c^2$.
        *   $-Ak^2 \sin(kx - \omega t) = Ak^2 \sin(kx - \omega t)$.
        *   This implies $0 = 2Ak^2 \sin(kx - \omega t)$, which is only true if $A=0$ or $k=0$ or $\sin(\dots)=0$.
        *   **The error is in the setup of the problem or my interpretation of the solution test.** A solution like $A \sin(kx - \omega t)$ *is* a valid solution. Let's re-evaluate the second derivative with respect to time.

        *   $p'(x, t) = A \sin(kx - \omega t)$
        *   $\frac{\partial p'}{\partial t} = A \cos(kx - \omega t) \cdot (-\omega) = -A\omega \cos(kx - \omega t)$
        *   $\frac{\partial^2 p'}{\partial t^2} = -A\omega (-\sin(kx - \omega t)) \cdot (-\omega) = -A\omega^2 \sin(kx - \omega t)$

        *   Now substitute into $\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$:
        *   $(-Ak^2 \sin(kx - \omega t)) - \frac{1}{c^2} (-A\omega^2 \sin(kx - \omega t)) = 0$
        *   $-Ak^2 \sin(kx - \omega t) + \frac{A\omega^2}{c^2} \sin(kx - \omega t) = 0$
        *   If $k = \omega/c$, then $k^2 = \omega^2/c^2$.
        *   $-Ak^2 \sin(kx - \omega t) + Ak^2 \sin(kx - \omega t) = 0$
        *   $0 = 0$. This is correct! The solution is verified.

3.  **If a sound wave in air (speed of sound $c \approx 343 \, \text{m/s}$) has a frequency of $1000 \, \text{Hz}$, what is its wavenumber?**
    *   **Answer:** $k = \frac{\omega}{c} = \frac{2\pi f}{c} = \frac{2\pi \times 1000 \, \text{Hz}}{343 \, \text{m/s}} \approx \frac{6283}{343} \approx 18.31 \, \text{rad/m}$.

4.  **Consider a sound wave described by $p'(x, t) = P_0 e^{j(\omega t - kx)}$. Does this satisfy the Helmholtz equation?**
    *   **Answer:** Yes, but the Helmholtz equation is for the complex amplitude $P(x)$, where $p'(x, t) = \text{Re}\{P(x)e^{j\omega t}\}$.
    *   If we start with $p'(x, t) = P_0 e^{j(\omega t - kx)} = P_0 e^{-jkx} e^{j\omega t}$.
    *   The complex amplitude is $P(x) = P_0 e^{-jkx}$.
    *   The Helmholtz equation is $\nabla^2 P + k^2 P = 0$.
    *   For 1D, $\frac{d^2 P}{dx^2} + k^2 P = 0$.
    *   $\frac{d^2}{dx^2}(P_0 e^{-jkx}) + k^2 (P_0 e^{-jkx}) = 0$
    *   $\frac{d}{dx}(-jkP_0 e^{-jkx}) + k^2 P_0 e^{-jkx} = 0$
    *   $(-jk)^2 P_0 e^{-jkx} + k^2 P_0 e^{-jkx} = 0$
    *   $-k^2 P_0 e^{-jkx} + k^2 P_0 e^{-jkx} = 0$
    *   $0 = 0$. Yes, it satisfies the Helmholtz equation.

5.  **Explain the physical meaning of D-Alembert's solution in the context of wave propagation.**
    *   **Answer:** D-Alembert's solution $p'(x, t) = F(x - ct) + G(x + ct)$ signifies that any one-dimensional wave can be thought of as a superposition of two waves: one traveling in the positive direction ($F(x-ct)$) and another traveling in the negative direction ($G(x+ct)$). The shape of these waves ($F$ and $G$) remains unchanged as they propagate, only their position changes with time.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **Further Reading/References:**

*   **Noise and vibration control engineering by Istvan L. Ver and Leo L. Beranek (Wiley, Second edition, 2006):** Chapters 1 and 2 provide a good introduction to acoustics and the wave equation.
*   **Fundamentals of Acoustics by Lawrence Ekinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000):** Chapters 2 and 3 are crucial for the detailed derivation of the wave equation and its solutions, including harmonic waves.
*   **Noise and Vibration Control by M L Munjal (World Scientific publishing, 2013):** Chapter 3 discusses wave phenomena and the relevant equations.

---