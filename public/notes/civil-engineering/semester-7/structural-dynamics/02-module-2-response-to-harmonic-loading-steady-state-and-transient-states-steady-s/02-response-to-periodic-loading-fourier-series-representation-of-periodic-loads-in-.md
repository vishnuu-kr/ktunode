---
title: "Response to periodic loading – Fourier series representation of periodic loads in time domain. Response of SDOF systems."
subject: "STRUCTURAL DYNAMICS"
module: "Module 2: Response to harmonic loading  – steady state and transient states steady sate amplitude, Dynamic magnification factor, force transmissibility and vibration isolation."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81141a"
status: "completed"
scrapedAt: "2026-05-20T19:01:37.449Z"
---
# Structural Dynamics: Module 2 - Response to Harmonic Loading (Periodic Loads)

## 1. Introduction to Periodic Loading

Periodic loading is a type of excitation that repeats itself at regular intervals. This is common in many real-world structural systems, such as:

*   **Machinery:** Rotating or reciprocating machines often produce forces that repeat cyclically.
*   **Engines:** Internal combustion engines generate periodic forces due to combustion cycles.
*   **Bridges:** Vehicles crossing bridges can induce periodic forces.
*   **Human activity:** Rhythmic activities like dancing or jumping can create periodic loads.

Understanding the response of structures to periodic loading is crucial for designing them to avoid resonance and ensure their safety and serviceability.

## 2. Fourier Series Representation of Periodic Loads

A fundamental tool for analyzing the response to periodic loads is the **Fourier Series**. It allows us to decompose any periodic function into an infinite sum of simple sine and cosine waves of different frequencies and amplitudes.

### 2.1. The Fourier Series Formula

For a periodic function $f(t)$ with period $T$, the Fourier series representation is given by:

$f(t) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t))$

where:

*   $a_0$: The **DC component** or average value of the function.
*   $\omega_0 = \frac{2\pi}{T}$: The **fundamental frequency** of the periodic load (in radians per second).
*   $n\omega_0$: The **nth harmonic frequency**.
*   $a_n$: The amplitude of the cosine term for the nth harmonic.
*   $b_n$: The amplitude of the sine term for the nth harmonic.

### 2.2. Calculating Fourier Coefficients

The coefficients $a_0$, $a_n$, and $b_n$ are calculated using the following integral formulas over one period $T$:

*   **DC Component ($a_0$)**:
    $a_0 = \frac{1}{T} \int_{0}^{T} f(t) dt$

*   **Cosine Coefficients ($a_n$)**:
    $a_n = \frac{2}{T} \int_{0}^{T} f(t) \cos(n\omega_0 t) dt$

*   **Sine Coefficients ($b_n$)**:
    $b_n = \frac{2}{T} \int_{0}^{T} f(t) \sin(n\omega_0 t) dt$

### 2.3. Example: Square Wave

Consider a **symmetric square wave** with amplitude $A$, period $T$, and duration of the positive pulse being $T/2$.

```
      A  +-----------------+
         |                 |
      ---+-----------------+--- t
         |                 |
     -A  +-----------------+
         <------ T ------>
```

*   **Function Definition**:
    $f(t) = \begin{cases} A & \text{if } 0 \le t < T/2 \\ -A & \text{if } T/2 \le t < T \end{cases}$

*   **Fundamental Frequency**: $\omega_0 = \frac{2\pi}{T}$

*   **Calculating Coefficients**:
    *   $a_0 = \frac{1}{T} \left( \int_{0}^{T/2} A dt + \int_{T/2}^{T} -A dt \right) = \frac{1}{T} \left( A \frac{T}{2} - A \frac{T}{2} \right) = 0$
        *   *(Observation: For symmetric waves with zero average, $a_0=0$.)*

    *   $a_n = \frac{2}{T} \left( \int_{0}^{T/2} A \cos(n\omega_0 t) dt + \int_{T/2}^{T} -A \cos(n\omega_0 t) dt \right)$
        $a_n = \frac{2A}{T} \left( \left[ \frac{\sin(n\omega_0 t)}{n\omega_0} \right]_0^{T/2} - \left[ \frac{\sin(n\omega_0 t)}{n\omega_0} \right]_{T/2}^{T} \right)$
        Since $\omega_0 T = 2\pi$, $\sin(n\omega_0 T) = \sin(2\pi n) = 0$.
        $a_n = \frac{2A}{T} \left( \frac{\sin(n\omega_0 T/2)}{n\omega_0} - 0 - (0 - \frac{\sin(n\omega_0 T/2)}{n\omega_0}) \right)$
        $a_n = \frac{2A}{T} \left( \frac{\sin(n\pi)}{n\omega_0} + \frac{\sin(n\pi)}{n\omega_0} \right) = 0$
        *   *(Observation: For a wave symmetric about the origin, like this square wave, $a_n=0$.)*

    *   $b_n = \frac{2}{T} \left( \int_{0}^{T/2} A \sin(n\omega_0 t) dt + \int_{T/2}^{T} -A \sin(n\omega_0 t) dt \right)$
        $b_n = \frac{2A}{T} \left( \left[ -\frac{\cos(n\omega_0 t)}{n\omega_0} \right]_0^{T/2} - \left[ -\frac{\cos(n\omega_0 t)}{n\omega_0} \right]_{T/2}^{T} \right)$
        $b_n = \frac{2A}{n\omega_0 T} \left( [-\cos(n\omega_0 t)]_0^{T/2} - [-\cos(n\omega_0 t)]_{T/2}^{T} \right)$
        $b_n = \frac{A}{n\pi} \left( (-\cos(n\pi/2) - (-\cos(0))) - (-\cos(n\pi) - (-\cos(n\pi/2))) \right)$
        $b_n = \frac{A}{n\pi} \left( -\cos(n\pi/2) + 1 + \cos(n\pi) - \cos(n\pi/2) \right)$
        $b_n = \frac{A}{n\pi} (1 + \cos(n\pi) - 2\cos(n\pi/2))$

        Let's evaluate for different values of n:
        *   n = 1: $b_1 = \frac{A}{\pi} (1 + \cos(\pi) - 2\cos(\pi/2)) = \frac{A}{\pi} (1 - 1 - 0) = 0$
        *   n = 2: $b_2 = \frac{A}{2\pi} (1 + \cos(2\pi) - 2\cos(\pi)) = \frac{A}{2\pi} (1 + 1 - 2(-1)) = \frac{A}{2\pi} (4) = \frac{2A}{\pi}$
        *   n = 3: $b_3 = \frac{A}{3\pi} (1 + \cos(3\pi) - 2\cos(3\pi/2)) = \frac{A}{3\pi} (1 - 1 - 0) = 0$
        *   n = 4: $b_4 = \frac{A}{4\pi} (1 + \cos(4\pi) - 2\cos(2\pi)) = \frac{A}{4\pi} (1 + 1 - 2(1)) = 0$
        *   n = 5: $b_5 = \frac{A}{5\pi} (1 + \cos(5\pi) - 2\cos(5\pi/2)) = \frac{A}{5\pi} (1 - 1 - 0) = 0$
        *   n = 6: $b_6 = \frac{A}{6\pi} (1 + \cos(6\pi) - 2\cos(3\pi)) = \frac{A}{6\pi} (1 + 1 - 2(-1)) = \frac{A}{6\pi} (4) = \frac{2A}{3\pi}$

        It turns out that $b_n$ is non-zero only for odd values of $n$.
        For odd $n$: $b_n = \frac{A}{n\pi} (1 + (-1) - 2(0)) = 0$
        Wait, let's re-evaluate the cosine terms for odd $n$:
        $\cos(n\pi/2)$:
        n=1: $\cos(\pi/2) = 0$
        n=3: $\cos(3\pi/2) = 0$
        n=5: $\cos(5\pi/2) = 0$
        So $\cos(n\pi/2) = 0$ for all odd $n$.

        $\cos(n\pi)$:
        n=1: $\cos(\pi) = -1$
        n=3: $\cos(3\pi) = -1$
        n=5: $\cos(5\pi) = -1$
        So $\cos(n\pi) = -1$ for all odd $n$.

        Thus, for odd $n$: $b_n = \frac{A}{n\pi} (1 + (-1) - 2(0)) = 0$. This is incorrect. Let's check the integration bounds and definitions again.

        **Corrected Calculation for $b_n$ for square wave:**
        $b_n = \frac{2A}{T} \left( \int_{0}^{T/2} \sin(n\omega_0 t) dt - \int_{T/2}^{T} \sin(n\omega_0 t) dt \right)$
        $b_n = \frac{2A}{T} \left( \left[-\frac{\cos(n\omega_0 t)}{n\omega_0}\right]_0^{T/2} - \left[-\frac{\cos(n\omega_0 t)}{n\omega_0}\right]_{T/2}^{T} \right)$
        $b_n = \frac{2A}{n\omega_0 T} \left( [-\cos(n\omega_0 t)]_0^{T/2} - [-\cos(n\omega_0 t)]_{T/2}^{T} \right)$
        Substitute $\omega_0 = 2\pi/T$:
        $b_n = \frac{2A}{n(2\pi/T)T} \left( [-\cos(n\frac{2\pi}{T} t)]_0^{T/2} - [-\cos(n\frac{2\pi}{T} t)]_{T/2}^{T} \right)$
        $b_n = \frac{A}{n\pi} \left( (-\cos(n\pi) - (-\cos(0))) - (-\cos(2n\pi) - (-\cos(n\pi))) \right)$
        $b_n = \frac{A}{n\pi} \left( (-\cos(n\pi) + 1) - (-1 + \cos(n\pi)) \right)$
        $b_n = \frac{A}{n\pi} (1 - \cos(n\pi) + 1 - \cos(n\pi))$
        $b_n = \frac{A}{n\pi} (2 - 2\cos(n\pi))$

        Now evaluate for different $n$:
        *   n = 1: $b_1 = \frac{2A}{\pi} (1 - \cos(\pi)) = \frac{2A}{\pi} (1 - (-1)) = \frac{4A}{\pi}$
        *   n = 2: $b_2 = \frac{2A}{2\pi} (1 - \cos(2\pi)) = \frac{A}{\pi} (1 - 1) = 0$
        *   n = 3: $b_3 = \frac{2A}{3\pi} (1 - \cos(3\pi)) = \frac{2A}{3\pi} (1 - (-1)) = \frac{4A}{3\pi}$
        *   n = 4: $b_4 = \frac{2A}{4\pi} (1 - \cos(4\pi)) = \frac{A}{2\pi} (1 - 1) = 0$

        So, $b_n = 0$ for even $n$, and $b_n = \frac{4A}{n\pi}$ for odd $n$.

*   **Fourier Series for Square Wave**:
    $f(t) = \sum_{n \text{ odd}}^{\infty} \frac{4A}{n\pi} \sin(n\omega_0 t) = \frac{4A}{\pi} \left( \sin(\omega_0 t) + \frac{1}{3}\sin(3\omega_0 t) + \frac{1}{5}\sin(5\omega_0 t) + \dots \right)$

### 2.4. Key Properties of Fourier Series for Structural Dynamics

*   **Harmonic Content**: The Fourier series reveals the frequencies present in the periodic load. These frequencies are integer multiples of the fundamental frequency $\omega_0$.
*   **Resonance**: If any of the harmonic frequencies ($n\omega_0$) are close to the natural frequency ($\omega_n$) of the structure, resonance can occur, leading to large amplitudes of vibration.
*   **Superposition**: The response of a linear SDOF system to each harmonic component can be calculated individually. The total response is the sum of the responses to each harmonic component (due to the principle of superposition for linear systems).

## 3. Response of SDOF Systems to Periodic Loading

A Single Degree of Freedom (SDOF) system can be represented by the equation of motion:

$m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F(t)$

where:
*   $m$: mass
*   $c$: damping coefficient
*   $k$: stiffness
*   $x(t)$: displacement
*   $F(t)$: applied external force

When the applied force $F(t)$ is periodic, we can use its Fourier series representation.

### 3.1. Response to a Single Harmonic Force

First, consider the response of an SDOF system to a single harmonic force:

$F_n(t) = F_{0n} \cos(\omega_n t - \phi_n)$  or  $F_n(t) = F_{0n} \sin(\omega_n t)$

where $\omega_n = n\omega_0$ is the forcing frequency and $F_{0n}$ is the amplitude of the nth harmonic component.

The steady-state response to a harmonic force $F_n(t) = F_{0n} \sin(\omega_n t)$ is given by:

$x_n(t) = X_n \sin(\omega_n t - \psi)$

where:
*   $X_n$: The amplitude of the steady-state response for the nth harmonic.
*   $\psi$: The phase lag between the displacement and the force.

The formulas for $X_n$ and $\psi$ are derived from the steady-state solution of the SDOF equation of motion subjected to harmonic forcing.

#### 3.1.1. Steady-State Amplitude ($X_n$)

The steady-state amplitude of the response to the nth harmonic force component $F_{0n} \sin(\omega_n t)$ is:

$X_n = \frac{F_{0n}}{k} \frac{1}{\sqrt{(1 - (\frac{\omega_n}{\omega_n})^2)^2 + (2\zeta\frac{\omega_n}{\omega_n})^2}}$

It's more convenient to express this using the **dynamic magnification factor (DMF)**.

### 3.2. Dynamic Magnification Factor (DMF)

The Dynamic Magnification Factor (DMF), often denoted by $M$, is the ratio of the maximum dynamic displacement amplitude to the static displacement amplitude. For a harmonic force $F(t) = F_0 \sin(\omega t)$, the static displacement is $X_{st} = F_0/k$. The steady-state amplitude is $X = X_{st} \cdot M$.

The DMF is given by:

$M(\frac{\omega}{\omega_n}) = \frac{1}{\sqrt{(1 - (\frac{\omega}{\omega_n})^2)^2 + (2\zeta\frac{\omega}{\omega_n})^2}}$

where:
*   $\omega$: Forcing frequency.
*   $\omega_n$: Natural frequency of the system ($\sqrt{k/m}$).
*   $\zeta$: Damping ratio ($c/(2\sqrt{mk})$).

For our periodic loading, we consider the $n^{th}$ harmonic frequency $\omega_n = n\omega_0$. So, the DMF for the $n^{th}$ harmonic is:

$M_n = \frac{1}{\sqrt{(1 - (\frac{n\omega_0}{\omega_n})^2)^2 + (2\zeta\frac{n\omega_0}{\omega_n})^2}}$

The steady-state amplitude for the $n^{th}$ harmonic force component $F_{0n} \sin(n\omega_0 t)$ is:

$X_n = \frac{F_{0n}}{k} M_n = \frac{F_{0n}}{k} \frac{1}{\sqrt{(1 - (\frac{n\omega_0}{\omega_n})^2)^2 + (2\zeta\frac{n\omega_0}{\omega_n})^2}}$

#### 3.2.1. Behavior of DMF

*   **Low Frequency ($\omega \ll \omega_n$)**: $M \approx 1$. The response is close to static.
*   **Near Resonance ($\omega \approx \omega_n$)**: If damping is low ($\zeta$ is small), $M$ becomes very large. This is the phenomenon of resonance.
*   **High Frequency ($\omega \gg \omega_n$)**: $M \approx (\frac{\omega_n}{\omega})^2$. The DMF decreases as the square of the frequency ratio.

#### 3.2.2. Phase Angle ($\psi$)

The phase lag of the steady-state displacement relative to the force is:

$\psi = \arctan\left(\frac{2\zeta(\omega/\omega_n)}{1 - (\omega/\omega_n)^2}\right)$

For the $n^{th}$ harmonic:

$\psi_n = \arctan\left(\frac{2\zeta(n\omega_0/\omega_n)}{1 - (n\omega_0/\omega_n)^2}\right)$

### 3.3. Total Steady-State Response to Periodic Load

Since the system is linear, the total steady-state response to the periodic load $F(t) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t))$ is the superposition of the responses to each harmonic component:

$x(t) = x_0 + \sum_{n=1}^{\infty} (x_{an}(t) + x_{bn}(t))$

where:
*   $x_0 = \frac{a_0}{k}$ is the static deflection due to the DC component.

*   The response to $a_n \cos(n\omega_0 t)$:
    $x_{an}(t) = \frac{a_n}{k} M_n \cos(n\omega_0 t - \psi_n)$

*   The response to $b_n \sin(n\omega_0 t)$:
    $x_{bn}(t) = \frac{b_n}{k} M_n \sin(n\omega_0 t - \psi_n)$

Combining these, the total steady-state displacement is:

$x(t) = \frac{a_0}{k} + \sum_{n=1}^{\infty} \frac{1}{k} \left[ a_n M_n \cos(n\omega_0 t - \psi_n) + b_n M_n \sin(n\omega_0 t - \psi_n) \right]$

where $M_n$ and $\psi_n$ are evaluated at the forcing frequency $n\omega_0$.

**Important Note:** In practice, only a finite number of terms in the Fourier series are needed for a sufficiently accurate representation of the periodic load and its response. This is especially true if the natural frequency of the structure is significantly different from the harmonic frequencies.

### 3.4. Example: Response to Square Wave Load

Let's consider the square wave load from Section 2.3, $f(t) = \sum_{n \text{ odd}}^{\infty} \frac{4A}{n\pi} \sin(n\omega_0 t)$, applied to an SDOF system with natural frequency $\omega_n$ and damping ratio $\zeta$.

The steady-state response will be:

$x(t) = \sum_{n \text{ odd}}^{\infty} X_n \sin(n\omega_0 t - \psi_n)$

where:
*   $X_n = \frac{F_{0n}}{k} M_n$
*   $F_{0n} = \frac{4A}{n\pi}$ (amplitude of the nth harmonic force component)
*   $M_n = \frac{1}{\sqrt{(1 - (n\omega_0/\omega_n)^2)^2 + (2\zeta n\omega_0/\omega_n)^2}}$
*   $\psi_n = \arctan\left(\frac{2\zeta(n\omega_0/\omega_n)}{1 - (n\omega_0/\omega_n)^2}\right)$

**Scenario:** Suppose the natural frequency $\omega_n$ is much higher than the fundamental frequency $\omega_0$.
If $\omega_n \gg n\omega_0$ for all relevant $n$, then $(n\omega_0/\omega_n)^2 \ll 1$.
In this case, $M_n \approx 1$ and $\psi_n \approx 0$.
The response would be approximately:
$x(t) \approx \sum_{n \text{ odd}}^{\infty} \frac{4A}{n\pi k} \sin(n\omega_0 t)$
This is close to the static response of the average force value.

**Scenario:** Suppose one of the harmonic frequencies, say $3\omega_0$, is very close to the natural frequency $\omega_n$, i.e., $\omega_n \approx 3\omega_0$.
Then for $n=3$, $M_3$ will be very large (resonance), leading to a dominant third harmonic component in the displacement, even if its force amplitude is smaller than the fundamental.

## 4. Force Transmissibility

Force transmissibility ($TR$) is a measure of how much of the applied force is transmitted to the support of the vibrating system. It is defined as the ratio of the force transmitted to the support to the applied force.

### 4.1. Definition

Consider an SDOF system where the force $F(t)$ is applied to the mass $m$, and the base is fixed. If the base is allowed to move, the force transmitted to the support is the force exerted by the spring and damper on the support.

For a harmonic force $F(t) = F_0 \sin(\omega t)$:

$TR = \frac{|F_{transferred}|}{|F_0|}$

The force transmitted to the support is the sum of the forces from the spring and the damper acting on the mass, which are equal and opposite to the forces acting on the support:

$F_{transferred} = kx(t) + c\dot{x}(t)$

The steady-state response is $x(t) = X \sin(\omega t - \psi)$ and $\dot{x}(t) = \omega X \cos(\omega t - \psi)$.

Substituting these into the transmitted force equation and considering the amplitude, we get:

$|F_{transferred}| = |kX \sin(\omega t - \psi) + c\omega X \cos(\omega t - \psi)|$
$|F_{transferred}| = |kX - c\omega X \tan(\psi)|$ ... this is getting complicated.

A simpler approach using phasors:
$x = X e^{j(\omega t - \psi)}$
$\dot{x} = j\omega X e^{j(\omega t - \psi)}$

$F_{spring} = kx = kX e^{j(\omega t - \psi)}$
$F_{damper} = c\dot{x} = c j\omega X e^{j(\omega t - \psi)}$

$F_{transferred} = kx + c\dot{x} = (kX + cj\omega X) e^{j(\omega t - \psi)}$
$F_{transferred} = X (k + j\omega c) e^{j(\omega t - \psi)}$

We know $X = \frac{F_0}{k - m\omega^2 + jc\omega}$.
$F_{transferred} = \frac{F_0}{k - m\omega^2 + jc\omega} (k + j\omega c) e^{j(\omega t - \psi)}$

This still looks complex. Let's use the relation with DMF.

$TR = \frac{|F_{transferred}|}{|F_0|} = \frac{|kX + c\dot{x}|}{|F_0|}$
$X = \frac{F_0}{k} M$ where $M = \frac{1}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$ and $r = \omega/\omega_n$.

$F_{transferred} = kx + c\dot{x}$
Amplitude of $F_{transferred}$ is $\sqrt{(kx_0)^2 + (c\omega x_0)^2}$ if $x_0$ is peak displacement.
$F_{transferred} = kX \cos(\omega t - \psi) + c \omega X \sin(\omega t - \psi)$
$F_{transferred} = X \sqrt{k^2 + (c\omega)^2} \cos(\omega t - \psi - \phi_{force})$ where $\tan(\phi_{force}) = c\omega/k$

$|F_{transferred}| = X \sqrt{k^2 + (c\omega)^2}$
$|F_{transferred}| = \frac{F_0}{k} M \sqrt{k^2 + (c\omega)^2}$
$|F_{transferred}| = F_0 M \sqrt{1 + (c\omega/k)^2}$

$TR = M \sqrt{1 + (\frac{c\omega}{k})^2}$
$TR = M \sqrt{1 + (\frac{2\zeta\omega_n \omega}{\omega_n^2})^2}$
$TR = M \sqrt{1 + (2\zeta r)^2}$

Substitute $M$:
$TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$

### 4.2. Behavior of Force Transmissibility

*   **Low Frequency ($r \ll 1$)**: $TR \approx \frac{\sqrt{1}}{\sqrt{1}} = 1$. The transmitted force equals the applied force.
*   **Near Resonance ($r \approx 1$)**: If $\zeta$ is small, $TR$ is large.
*   **High Frequency ($r \gg 1$)**:
    $TR \approx \frac{\sqrt{(2\zeta r)^2}}{\sqrt{(-r^2)^2}} = \frac{2\zeta r}{r^2} = \frac{2\zeta}{r}$
    As $r$ increases, $TR$ decreases. This means that at high frequencies, a large portion of the force is isolated from the support.

## 5. Vibration Isolation

Vibration isolation is the process of reducing the transmission of vibratory forces from a source to a surrounding structure, or vice versa. This is typically achieved by placing a flexible element (like a spring or a rubber mount) between the vibrating object and the supporting structure.

### 5.1. Principles of Vibration Isolation

*   **Using the Force Transmissibility**: The goal of vibration isolation is to have a low force transmissibility ($TR < 1$). From the formula $TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$, this occurs when the frequency ratio $r = \omega/\omega_n$ is large.
*   **Low Natural Frequency**: To achieve a large $r$ for a given excitation frequency $\omega$, the natural frequency of the isolation system ($\omega_n$) must be significantly lower than the excitation frequency.
    $\omega_n = \sqrt{k/m}$. To minimize $\omega_n$, we need to minimize the stiffness $k$ or maximize the mass $m$.
*   **Mass of the Object**: A larger mass $m$ for the isolated object leads to a lower natural frequency $\omega_n = \sqrt{k/m}$.
*   **Stiffness of the Isolator**: A lower stiffness $k$ for the isolator leads to a lower natural frequency $\omega_n = \sqrt{k/m}$.
*   **Damping**: Damping is important for reducing the transmissibility near resonance (when the excitation frequency is close to the natural frequency). However, excessive damping can increase transmissibility at high frequencies. Therefore, damping in isolators is often designed to be minimal, unless the operating range is expected to be near resonance.

### 5.2. Design Considerations

*   **Operating Frequency**: Determine the dominant frequencies of the vibration source.
*   **Mass of the Equipment**: This determines the required capacity of the isolator.
*   **Static Deflection**: The desired isolator stiffness is often specified by the static deflection it produces under the weight of the equipment. A larger static deflection means a lower natural frequency. Static deflection $x_{st} = W/k$, so $k = W/x_{st}$. Then $\omega_n = \sqrt{g/x_{st}}$.
*   **Type of Isolator**: Springs, rubber mounts, air springs are common types of isolators.

### 5.3. Example: Isolating an Engine

Consider an engine operating at 1800 RPM, with a dominant harmonic frequency of $\omega = 1800 \times 2\pi / 60 = 188.5 \text{ rad/s}$.
We want to isolate this engine from its foundation.

*   **Requirement**: For effective isolation, we want $r = \omega/\omega_n \ge 3$.
*   **Desired $\omega_n$**: $\omega_n = \omega / 3 = 188.5 / 3 = 62.8 \text{ rad/s}$.
*   **Natural Frequency in Hz**: $f_n = \omega_n / (2\pi) = 62.8 / (2\pi) \approx 10 \text{ Hz}$.
*   **Static Deflection**: $\omega_n = \sqrt{g/x_{st}}$. Assuming $g = 9.81 \text{ m/s}^2$,
    $x_{st} = g / \omega_n^2 = 9.81 / (62.8)^2 = 9.81 / 3944 \approx 0.0025 \text{ m} = 2.5 \text{ mm}$.

So, we need to select isolators that provide a static deflection of about 2.5 mm under the weight of the engine. If the engine weighs 500 kg, the stiffness of the isolators should be $k = W/x_{st} = (500 \text{ kg} \times 9.81 \text{ m/s}^2) / 0.0025 \text{ m} = 1,962,000 \text{ N/m}$.

## 6. Practice Questions and Answers

**Question 1:**
A periodic force $f(t)$ has a Fourier series representation: $f(t) = 10 + 20\cos(2t) + 15\sin(4t) \text{ N}$.
What is the fundamental frequency of this periodic force?

**Answer 1:**
The fundamental frequency $\omega_0$ is the base frequency present in the Fourier series. From the given series, the terms are $10$ (DC component), $20\cos(2t)$ (fundamental frequency $\omega_0 = 2$ rad/s), and $15\sin(4t)$ (second harmonic $2\omega_0 = 4$ rad/s).
Therefore, the fundamental frequency is $\omega_0 = 2 \text{ rad/s}$.

**Question 2:**
An SDOF system with mass $m=10$ kg, stiffness $k=1000$ N/m, and damping ratio $\zeta=0.05$ is subjected to a periodic force with fundamental frequency $\omega_0 = 5$ rad/s. The first harmonic component of the force is $F_{01} = 50$ N. Calculate the steady-state amplitude of the response due to this first harmonic component.

**Answer 2:**
Given:
$m = 10$ kg
$k = 1000$ N/m
$\zeta = 0.05$
$\omega_0 = 5$ rad/s
$F_{01} = 50$ N

First, calculate the natural frequency $\omega_n$:
$\omega_n = \sqrt{k/m} = \sqrt{1000/10} = \sqrt{100} = 10$ rad/s

For the first harmonic, the forcing frequency is $\omega = 1 \cdot \omega_0 = 5$ rad/s.
The frequency ratio is $r = \omega/\omega_n = 5/10 = 0.5$.

Calculate the Dynamic Magnification Factor (DMF) for the first harmonic:
$M_1 = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$
$M_1 = \frac{1}{\sqrt{(1 - (0.5)^2)^2 + (2 \times 0.05 \times 0.5)^2}}$
$M_1 = \frac{1}{\sqrt{(1 - 0.25)^2 + (0.05)^2}}$
$M_1 = \frac{1}{\sqrt{(0.75)^2 + 0.0025}}$
$M_1 = \frac{1}{\sqrt{0.5625 + 0.0025}} = \frac{1}{\sqrt{0.565}} \approx \frac{1}{0.7517} \approx 1.330$

The static displacement for the first harmonic is $X_{st1} = F_{01}/k = 50 \text{ N} / 1000 \text{ N/m} = 0.05$ m.

The steady-state amplitude $X_1$ is:
$X_1 = X_{st1} \cdot M_1 = 0.05 \text{ m} \times 1.330 \approx 0.0665$ m.

**Question 3:**
For the SDOF system in Question 2, calculate the Force Transmissibility ($TR$) when subjected to the first harmonic force.

**Answer 3:**
Using the formula for Force Transmissibility:
$TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$
We have $\zeta = 0.05$, $r = 0.5$.
$2\zeta r = 2 \times 0.05 \times 0.5 = 0.05$
$1 - r^2 = 1 - (0.5)^2 = 1 - 0.25 = 0.75$

$TR = \frac{\sqrt{1 + (0.05)^2}}{\sqrt{(0.75)^2 + (0.05)^2}}$
$TR = \frac{\sqrt{1 + 0.0025}}{\sqrt{0.5625 + 0.0025}}$
$TR = \frac{\sqrt{1.0025}}{\sqrt{0.565}} = \frac{1.00125}{0.7517} \approx 1.332$

*(Note: For low damping and $r < 1$, $TR$ is very close to $M$.)*

**Question 4:**
An operating machine vibrates at $600$ RPM with significant energy at its fundamental frequency. You want to mount this machine on isolation mounts to reduce vibration transmission to the building. If the machine weighs $200$ kg, what should be the approximate static deflection of the isolation mounts to achieve effective isolation, assuming the primary excitation frequency is $600$ RPM?

**Answer 4:**
Given:
Excitation frequency $\omega = 600 \text{ RPM} = 600 \times 2\pi / 60 = 62.83 \text{ rad/s}$.
Mass of machine $m = 200$ kg.

For effective isolation, we generally require the frequency ratio $r = \omega/\omega_n \ge 3$.
So, the desired natural frequency $\omega_n \le \omega / 3 = 62.83 / 3 = 20.94 \text{ rad/s}$.

The natural frequency is related to static deflection $x_{st}$ by $\omega_n = \sqrt{g/x_{st}}$.
Rearranging for $x_{st}$: $x_{st} = g / \omega_n^2$.
Using $g \approx 9.81 \text{ m/s}^2$:
$x_{st} \ge 9.81 / (20.94)^2 = 9.81 / 438.48 \approx 0.0224 \text{ m}$.

So, the static deflection of the isolation mounts should be at least $0.0224$ meters or $2.24$ cm for effective isolation. This corresponds to a stiffness of $k = W/x_{st} = (200 \text{ kg} \times 9.81 \text{ m/s}^2) / 0.0224 \text{ m} \approx 87.6 \text{ kN/m}$.

## 7. Important Points to Remember

*   **Fourier Series**: Decomposes periodic loads into sinusoids. Crucial for analyzing complex periodic excitations.
*   **Harmonics**: Integer multiples of the fundamental frequency.
*   **Superposition**: The total response of a linear system to a periodic load is the sum of responses to each harmonic component.
*   **Dynamic Magnification Factor (DMF)**: Amplifies the static response. Peaks near resonance ($\omega \approx \omega_n$).
*   **Resonance**: Occurs when forcing frequency matches natural frequency, leading to large amplitudes. For periodic loads, resonance can occur if *any* harmonic frequency matches the natural frequency.
*   **Force Transmissibility (TR)**: Ratio of transmitted force to applied force. Low TR means good isolation.
*   **Vibration Isolation**: Achieved by designing systems with a natural frequency significantly lower than the excitation frequencies ($r = \omega/\omega_n \gg 1$). This requires low stiffness isolators or heavy masses.
*   **Damping's Role**: Damping is beneficial near resonance but can be detrimental to isolation at high frequencies.

This concludes the notes for Module 2: Response to Harmonic Loading (Periodic Loads).
