---
title: "Transmission Lines:  Transmission line equations, Characteristic impedance, Input impedance, Standing wave ratio."
subject: "ELECTROMAGNETIC THEORY"
module: "Module 4: Electromagnetic Waves : Time varying potentials, Waves in general, Electromagnetic waves, Wave propagation in lossy dielectrics, Plane waves in free space, conductors, skin effect, Power, Poynting theorem, Reflection of plane wave at normal incidence."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361ba"
status: "completed"
scrapedAt: "2026-05-23T16:21:54.943Z"
---
# Electromagnetic Theory: Module 4 - Electromagnetic Waves & Transmission Lines

## Topic: Transmission Lines

This section delves into the behavior of electrical signals as they propagate along transmission lines, a fundamental concept in high-frequency electronics and signal integrity. We will explore the mathematical models describing transmission line behavior, key parameters like characteristic impedance and input impedance, and the phenomenon of standing waves.

**Learning Outcomes:**

*   Understand the fundamental equations governing voltage and current on a transmission line.
*   Define and calculate characteristic impedance.
*   Determine the input impedance of a transmission line with various terminations.
*   Analyze the concept of standing waves and calculate the standing wave ratio.

**Course Outcomes Alignment:**

*   **CO5 (K4):** Demonstrate the propagation of electromagnetic excitations in transmission lines. This topic directly addresses the propagation of electromagnetic signals along physical structures.

---

### 1. Transmission Line Equations

Transmission lines are two-conductor structures designed to guide electromagnetic waves from one point to another, typically from a source to a load. Unlike lumped circuit elements, the distributed nature of inductance and capacitance along the length of the line is crucial at high frequencies.

**1.1. The Telegrapher's Equations (Transmission Line Equations)**

Consider a differential section of a transmission line of length $dz$. This section can be modeled as a series of distributed series impedance ($R$ and $L$ per unit length) and shunt admittance ($G$ and $C$ per unit length).

*   **R:** Series resistance per unit length (due to conductor resistivity).
*   **L:** Series inductance per unit length (due to magnetic field surrounding conductors).
*   **G:** Shunt conductance per unit length (due to dielectric losses between conductors).
*   **C:** Shunt capacitance per unit length (due to electric field between conductors).

Applying Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) to this differential section, we arrive at the fundamental transmission line equations, also known as the Telegrapher's Equations:

**Voltage Equation:**
$$
\frac{\partial V(z,t)}{\partial z} = -(R + L\frac{\partial}{\partial t})V(z,t)
$$

**Current Equation:**
$$
\frac{\partial I(z,t)}{\partial z} = -(G + C\frac{\partial}{\partial t})I(z,t)
$$

Where:
*   $V(z,t)$ is the voltage at position $z$ and time $t$.
*   $I(z,t)$ is the current at position $z$ and time $t$.

**1.2. Lossless Transmission Line Assumption**

For many practical applications, especially at microwave frequencies or when dealing with low-loss conductors and dielectrics, we can make the following simplifications:
*   $R \approx 0$ (Lossless conductors)
*   $G \approx 0$ (Lossless dielectric)

Under these assumptions, the Telegrapher's Equations simplify to:

**Simplified Voltage Equation:**
$$
\frac{\partial V(z,t)}{\partial z} = -L\frac{\partial I(z,t)}{\partial t}
$$

**Simplified Current Equation:**
$$
\frac{\partial I(z,t)}{\partial z} = -C\frac{\partial V(z,t)}{\partial t}
$$

**1.3. Wave Propagation in Lossless Lines (Sinusoidal Steady State)**

Assuming sinusoidal time variation, $V(z,t) = Re\{V(z)e^{j\omega t}\}$ and $I(z,t) = Re\{I(z)e^{j\omega t}\}$. Substituting these into the simplified equations, we get:

$$
\frac{dV(z)}{dz} = -j\omega L I(z)
$$

$$
\frac{dI(z)}{dz} = -j\omega C V(z)
$$

Differentiating the first equation with respect to $z$ and substituting $I(z)$ from the second equation:

$$
\frac{d^2V(z)}{dz^2} = -j\omega L \frac{dI(z)}{dz} = -j\omega L (-j\omega C V(z)) = -\omega^2 L C V(z)
$$

This gives us the **wave equation for voltage**:
$$
\frac{d^2V(z)}{dz^2} + \omega^2 L C V(z) = 0
$$

The general solution for this second-order linear differential equation is:
$$
V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{+j\beta z}
$$

Where:
*   $\beta = \omega\sqrt{LC}$ is the **phase constant** (or propagation constant for lossless lines).
*   $V_0^+$ is the complex amplitude of the forward-traveling voltage wave.
*   $V_0^-$ is the complex amplitude of the backward-traveling voltage wave.

Similarly, we can derive the wave equation for current:
$$
\frac{d^2I(z)}{dz^2} + \omega^2 L C I(z) = 0
$$

And its general solution:
$$
I(z) = I_0^+ e^{-j\beta z} + I_0^- e^{+j\beta z}
$$

**Important Point:** The solution for voltage and current involves waves traveling in both the positive ($e^{-j\beta z}$) and negative ($e^{+j\beta z}$) $z$ directions.

---

### 2. Characteristic Impedance ($Z_0$)

The characteristic impedance of a transmission line is a fundamental property that relates the voltage and current of a wave traveling in one direction on the line. It is defined as the ratio of the voltage wave to the current wave for a single traveling wave.

From the voltage equation: $V_0^+ = -j\omega L I_0^+ / (-j\beta)$
$$
V_0^+ = \frac{\omega L}{\beta} I_0^+
$$

Substituting $\beta = \omega\sqrt{LC}$:
$$
V_0^+ = \frac{\omega L}{\omega\sqrt{LC}} I_0^+ = \sqrt{\frac{L}{C}} I_0^+
$$

Therefore, the **characteristic impedance** ($Z_0$) is:
$$
Z_0 = \frac{V_0^+}{I_0^+} = \sqrt{\frac{L}{C}}
$$

And similarly for the backward-traveling wave:
$$
Z_0 = \frac{V_0^-}{I_0^-} \quad \text{but with } I_0^- = -\frac{V_0^+}{\sqrt{L/C}} = -\frac{V_0^+}{Z_0}
$$
So, $I_0^- = -V_0^- / Z_0$.

**Key Properties of Characteristic Impedance:**

*   **Independent of frequency** for a lossless line.
*   **Determined by the physical geometry and material properties** of the transmission line (e.g., conductor size, spacing, dielectric constant).
*   It's the impedance the line presents to a wave traveling in one direction.
*   It's a purely real quantity for a lossless line.

**Example:** For a two-wire line with conductors of radius $a$ and separation $d$, $L \approx \frac{\mu}{\pi} \ln(\frac{d}{a})$ and $C \approx \frac{\pi\epsilon}{\ln(d/a)}$. Thus, $Z_0 = \sqrt{L/C} \approx \frac{1}{\pi}\sqrt{\frac{\mu}{\epsilon}}\ln(\frac{d}{a})$. For a coaxial cable with inner conductor radius $a$ and outer conductor radius $b$, $L = \frac{\mu}{2\pi}\ln(\frac{b}{a})$ and $C = \frac{2\pi\epsilon}{\ln(b/a)}$, so $Z_0 = \sqrt{L/C} = \frac{1}{2\pi}\sqrt{\frac{\mu}{\epsilon}}\ln(\frac{b}{a})$.

**Textbook Reference:**
*   Sadiku, 7th Ed., Chapter 11: Transmission Lines.
*   Hayt & Buck, 9th Ed., Chapter 10: Transmission Lines.

**Important Point:** The characteristic impedance is an intrinsic property of the line, not dependent on its length or the load connected to it.

---

### 3. Input Impedance ($Z_{in}$)

The input impedance of a transmission line is the impedance seen by the source at the input terminals of the line. It depends on the characteristic impedance of the line, its length, and the impedance of the load terminating the line.

Consider a transmission line of length $l$ terminated with a load impedance $Z_L$ at $z=l$. Let the input be at $z=0$.
The voltage and current at any point $z$ can be written as:
$$
V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{+j\beta z}
$$
$$
I(z) = \frac{V_0^+}{Z_0} e^{-j\beta z} - \frac{V_0^-}{Z_0} e^{+j\beta z}
$$

At the load ($z=l$):
$$
V(l) = V_L = V_0^+ e^{-j\beta l} + V_0^- e^{+j\beta l}
$$
$$
I(l) = I_L = \frac{V_0^+}{Z_0} e^{-j\beta l} - \frac{V_0^-}{Z_0} e^{+j\beta l}
$$

The load impedance is $Z_L = V(l)/I(l)$. We can solve these equations for the ratio $V_0^- / V_0^+$:
$$
Z_L = \frac{V_0^+ e^{-j\beta l} + V_0^- e^{+j\beta l}}{\frac{V_0^+}{Z_0} e^{-j\beta l} - \frac{V_0^-}{Z_0} e^{+j\beta l}}
$$
$$
Z_L \left(\frac{V_0^+}{Z_0} e^{-j\beta l} - \frac{V_0^-}{Z_0} e^{+j\beta l}\right) = V_0^+ e^{-j\beta l} + V_0^- e^{+j\beta l}
$$
$$
\frac{Z_L}{Z_0} (V_0^+ e^{-j\beta l} - V_0^- e^{+j\beta l}) = V_0^+ e^{-j\beta l} + V_0^- e^{+j\beta l}
$$
$$
V_0^+ e^{-j\beta l} (\frac{Z_L}{Z_0} - 1) = V_0^- e^{+j\beta l} (\frac{Z_L}{Z_0} + 1)
$$
$$
\frac{V_0^-}{V_0^+} = e^{-2j\beta l} \frac{Z_L - Z_0}{Z_L + Z_0}
$$

Now, the input impedance ($Z_{in}$) is the ratio of total voltage to total current at the input ($z=0$):
$$
Z_{in} = \frac{V(0)}{I(0)} = \frac{V_0^+ + V_0^-}{\frac{V_0^+}{Z_0} - \frac{V_0^-}{Z_0}} = Z_0 \frac{V_0^+ + V_0^-}{V_0^+ - V_0^-}
$$
Divide numerator and denominator by $V_0^+$:
$$
Z_{in} = Z_0 \frac{1 + (V_0^-/V_0^+)}{1 - (V_0^-/V_0^+)}
$$
Substitute the expression for $V_0^-/V_0^+$:
$$
Z_{in} = Z_0 \frac{1 + e^{-2j\beta l} \frac{Z_L - Z_0}{Z_L + Z_0}}{1 - e^{-2j\beta l} \frac{Z_L - Z_0}{Z_L + Z_0}}
$$
Multiply numerator and denominator by $Z_L + Z_0$:
$$
Z_{in} = Z_0 \frac{(Z_L + Z_0) + e^{-2j\beta l} (Z_L - Z_0)}{(Z_L + Z_0) - e^{-2j\beta l} (Z_L - Z_0)}
$$
Let's express $e^{-2j\beta l}$ as $\cos(2\beta l) - j\sin(2\beta l)$.
It's often more convenient to use the formula derived by letting $z' = l - z$, so at the input $z'=l$. Then $V(z') = V_0^+ e^{j\beta z'} + V_0^- e^{-j\beta z'}$. The load is at $z'=0$, so $V_L = V_0^+ + V_0^-$ and $I_L = (V_0^+ - V_0^-)/Z_0$.
$Z_L = V_0^+/I_0^+ = V_0^-/(-I_0^-)$. Let $V_0^+ = V_L/2$, $V_0^- = V_L/2$.
$I_L = V_L/(2Z_0) - V_L/(2Z_0) = V_L/Z_L \implies \frac{V_L}{2Z_0} (1 - \frac{V_0^-}{V_0^+}) = \frac{V_L}{2} (1 + \frac{V_0^-}{V_0^+})$
$Z_L = Z_0 \frac{1 + V_0^-/V_0^+}{1 - V_0^-/V_0^+}$. So $\frac{V_0^-}{V_0^+} = \frac{Z_L - Z_0}{Z_L + Z_0}$.

The input impedance at $z'=l$ is:
$$
Z_{in}(l) = \frac{V(l)}{I(l)} = Z_0 \frac{V_0^+ e^{j\beta l} + V_0^- e^{-j\beta l}}{V_0^+ e^{j\beta l} - V_0^- e^{-j\beta l}} = Z_0 \frac{1 + (V_0^-/V_0^+)e^{-2j\beta l}}{1 - (V_0^-/V_0^+)e^{-2j\beta l}}
$$
Substitute $V_0^-/V_0^+$:
$$
Z_{in}(l) = Z_0 \frac{1 + \frac{Z_L - Z_0}{Z_L + Z_0}e^{-2j\beta l}}{1 - \frac{Z_L - Z_0}{Z_L + Z_0}e^{-2j\beta l}} = Z_0 \frac{(Z_L + Z_0) + (Z_L - Z_0)e^{-2j\beta l}}{(Z_L + Z_0) - (Z_L - Z_0)e^{-2j\beta l}}
$$
$$
Z_{in}(l) = Z_0 \frac{Z_L(e^{-2j\beta l} + 1) + Z_0(e^{-2j\beta l} - 1)}{Z_L(e^{-2j\beta l} + 1) - Z_0(e^{-2j\beta l} - 1)}
$$
Using $e^{-j\theta} = \cos\theta - j\sin\theta$:
$e^{-2j\beta l} + 1 = (\cos(2\beta l) - j\sin(2\beta l)) + 1 = 2\cos^2(\beta l) - j2\sin(\beta l)\cos(\beta l) = 2\cos(\beta l)(\cos(\beta l) - j\sin(\beta l)) = 2\cos(\beta l)e^{-j\beta l}$
$e^{-2j\beta l} - 1 = (\cos(2\beta l) - j\sin(2\beta l)) - 1 = -2\sin^2(\beta l) - j2\sin(\beta l)\cos(\beta l) = -2\sin(\beta l)(\sin(\beta l) + j\cos(\beta l)) = -2j\sin(\beta l)(\cos(\beta l) - j\sin(\beta l)) = -2j\sin(\beta l)e^{-j\beta l}$

So,
$$
Z_{in}(l) = Z_0 \frac{Z_L(2\cos(\beta l)e^{-j\beta l}) + Z_0(-2j\sin(\beta l)e^{-j\beta l})}{Z_L(2\cos(\beta l)e^{-j\beta l}) - Z_0(-2j\sin(\beta l)e^{-j\beta l})}
$$
Divide by $2e^{-j\beta l}$:
$$
Z_{in}(l) = Z_0 \frac{Z_L\cos(\beta l) - jZ_0\sin(\beta l)}{Z_L\cos(\beta l) + jZ_0\sin(\beta l)}
$$
Divide numerator and denominator by $Z_L\cos(\beta l)$:
$$
Z_{in}(l) = Z_0 \frac{1 - j\frac{Z_0}{Z_L}\tan(\beta l)}{1 + j\frac{Z_0}{Z_L}\tan(\beta l)}
$$
This is a more common form. Alternatively, divide by $Z_0\cos(\beta l)$:
$$
Z_{in}(l) = Z_0 \frac{\frac{Z_L}{Z_0}\cos(\beta l) - j\sin(\beta l)}{\frac{Z_L}{Z_0}\cos(\beta l) + j\sin(\beta l)}
$$
Divide numerator and denominator by $\cos(\beta l)$:
$$
Z_{in}(l) = Z_0 \frac{\frac{Z_L}{Z_0} - j\tan(\beta l)}{\frac{Z_L}{Z_0} + j\tan(\beta l)}
$$
Let $Z_L = R_L + jX_L$.
$$
Z_{in}(l) = Z_0 \frac{(R_L + jX_L) - jZ_0\tan(\beta l)}{(R_L + jX_L) + jZ_0\tan(\beta l)}
$$
$$
Z_{in}(l) = Z_0 \frac{R_L + j(X_L - Z_0\tan(\beta l))}{R_L + j(X_L + Z_0\tan(\beta l))}
$$

A more useful form is obtained by dividing the numerator and denominator by $\cos(\beta l)$:
$$
Z_{in}(l) = Z_0 \frac{Z_L \cos(\beta l) - jZ_0 \sin(\beta l)}{Z_L \cos(\beta l) + jZ_0 \sin(\beta l)}
$$
Let $Z_L = R_L + jX_L$.
$$
Z_{in}(l) = Z_0 \frac{(R_L + jX_L)\cos(\beta l) - jZ_0\sin(\beta l)}{(R_L + jX_L)\cos(\beta l) + jZ_0\sin(\beta l)}
$$
$$
Z_{in}(l) = Z_0 \frac{R_L\cos(\beta l) + j(X_L\cos(\beta l) - Z_0\sin(\beta l))}{R_L\cos(\beta l) + j(X_L\cos(\beta l) + Z_0\sin(\beta l))}
$$
$$
Z_{in}(l) = Z_0 \frac{R_L\cos(\beta l) + jX_L\cos(\beta l) - jZ_0\sin(\beta l)}{R_L\cos(\beta l) + jX_L\cos(\beta l) + jZ_0\sin(\beta l)}
$$
$$
Z_{in}(l) = Z_0 \frac{R_L\cos(\beta l) - jZ_0\sin(\beta l) + jX_L\cos(\beta l)}{R_L\cos(\beta l) + jZ_0\sin(\beta l) + jX_L\cos(\beta l)}
$$

The standard formula for input impedance is:
$$
Z_{in}(l) = Z_0 \frac{Z_L + jZ_0 \tan(\beta l)}{Z_0 + jZ_L \tan(\beta l)}
$$

**Special Cases:**

1.  **Matched Load ($Z_L = Z_0$):**
    If $Z_L = Z_0$, then $\frac{Z_L - Z_0}{Z_L + Z_0} = 0$.
    This means $V_0^- = 0$. The line is terminated with its characteristic impedance, and there are no reflected waves.
    $$
    Z_{in}(l) = Z_0 \frac{Z_0 + jZ_0 \tan(\beta l)}{Z_0 + jZ_0 \tan(\beta l)} = Z_0
    $$
    The input impedance is equal to the characteristic impedance, regardless of the line length. This is the ideal case for maximum power transfer and minimum signal reflection.

2.  **Open Circuit ($Z_L \to \infty$):**
    If the line is open-circuited, $Z_L \to \infty$.
    $$
    Z_{in}(l) = Z_0 \frac{1 + (Z_L/Z_0)(e^{-2j\beta l})}{1 - (Z_L/Z_0)(e^{-2j\beta l})} \approx Z_0 \frac{1 + \infty e^{-2j\beta l}}{1 - \infty e^{-2j\beta l}}
    $$
    To handle this, use the alternative form:
    $$
    Z_{in}(l) = Z_0 \frac{Z_L + jZ_0 \tan(\beta l)}{Z_0 + jZ_L \tan(\beta l)} = Z_0 \frac{1 + \frac{j}{Z_L/Z_0} \tan(\beta l)}{\frac{1}{Z_L/Z_0} + j\tan(\beta l)}
    $$
    As $Z_L \to \infty$, $Z_L/Z_0 \to \infty$.
    $$
    Z_{in}(l) \approx Z_0 \frac{jZ_0 \tan(\beta l)}{jZ_L \tan(\beta l)} \approx Z_0 \frac{Z_0}{Z_L} \to 0 \quad \text{if } \tan(\beta l) \neq 0
    $$
    Using the form $Z_{in}(l) = Z_0 \frac{Z_L\cos(\beta l) - jZ_0\sin(\beta l)}{Z_L\cos(\beta l) + jZ_0\sin(\beta l)}$
    $$
    Z_{in}(l) = Z_0 \frac{1 - j\frac{Z_0}{Z_L}\tan(\beta l)}{1 + j\frac{Z_0}{Z_L}\tan(\beta l)}
    $$
    As $Z_L \to \infty$, $Z_0/Z_L \to 0$:
    $$
    Z_{in}(l) = Z_0 \frac{1 - 0}{1 + 0} = Z_0
    $$
    Wait, this seems wrong. Let's re-examine.
    The current at the open circuit end must be zero ($I(l) = 0$).
    $I(l) = \frac{V_0^+}{Z_0} e^{-j\beta l} - \frac{V_0^-}{Z_0} e^{+j\beta l} = 0 \implies V_0^+ e^{-j\beta l} = V_0^- e^{+j\beta l}$.
    So, $V_0^- = V_0^+ e^{-2j\beta l}$.
    The voltage at the input ($z=0$) is $V(0) = V_0^+ + V_0^- = V_0^+(1 + e^{-2j\beta l})$.
    The current at the input ($z=0$) is $I(0) = \frac{V_0^+}{Z_0} - \frac{V_0^-}{Z_0} = \frac{V_0^+}{Z_0}(1 - e^{-2j\beta l})$.
    $$
    Z_{in}(l) = \frac{V(0)}{I(0)} = Z_0 \frac{1 + e^{-2j\beta l}}{1 - e^{-2j\beta l}}
    $$
    Using $e^{-j\theta} = \cos\theta - j\sin\theta$:
    $1 + e^{-2j\beta l} = 1 + \cos(2\beta l) - j\sin(2\beta l) = 2\cos^2(\beta l) - j2\sin(\beta l)\cos(\beta l) = 2\cos(\beta l)(\cos(\beta l) - j\sin(\beta l)) = 2\cos(\beta l)e^{-j\beta l}$.
    $1 - e^{-2j\beta l} = 1 - (\cos(2\beta l) - j\sin(2\beta l)) = 2\sin^2(\beta l) + j2\sin(\beta l)\cos(\beta l) = 2\sin(\beta l)(\sin(\beta l) + j\cos(\beta l)) = 2j\sin(\beta l)(\cos(\beta l) - j\sin(\beta l)) = 2j\sin(\beta l)e^{-j\beta l}$.
    $$
    Z_{in}(l) = Z_0 \frac{2\cos(\beta l)e^{-j\beta l}}{2j\sin(\beta l)e^{-j\beta l}} = Z_0 \frac{\cos(\beta l)}{j\sin(\beta l)} = -jZ_0 \cot(\beta l)
    $$
    For an open circuit, the input impedance is purely reactive and inductive/capacitive depending on $\beta l$. This is expected as an open circuit is a capacitive load for short lines and inductive for longer lines.

3.  **Short Circuit ($Z_L = 0$):**
    If the line is short-circuited, $Z_L = 0$.
    $$
    Z_{in}(l) = Z_0 \frac{0 + jZ_0 \tan(\beta l)}{Z_0 + j0 \tan(\beta l)} = Z_0 \frac{jZ_0 \tan(\beta l)}{Z_0} = jZ_0 \tan(\beta l)
    $$
    For a short circuit, the input impedance is purely reactive.

**Textbook Reference:**
*   Sadiku, 7th Ed., Chapter 11: Transmission Lines.
*   Hayt & Buck, 9th Ed., Chapter 10: Transmission Lines.

**Important Point:** The input impedance of a lossless transmission line is periodic with respect to length, with a period of $\lambda/2$, where $\lambda = 2\pi/\beta$ is the wavelength.

**Example:** A lossless transmission line of length $l=0.15\lambda$ has $Z_0=50\,\Omega$ and is terminated with a load $Z_L = 100 + j50\,\Omega$. Calculate the input impedance.
Here, $\beta l = (2\pi/\lambda) \times 0.15\lambda = 0.3\pi$.
$\tan(\beta l) = \tan(0.3\pi) \approx \tan(54^\circ) \approx 1.376$.
$Z_{in}(l) = Z_0 \frac{Z_L + jZ_0 \tan(\beta l)}{Z_0 + jZ_L \tan(\beta l)}$
$Z_{in}(l) = 50 \frac{(100 + j50) + j50 (1.376)}{50 + j(100 + j50)(1.376)}$
$Z_{in}(l) = 50 \frac{100 + j50 + j68.8}{50 + j137.6 + j^2 50(1.376)}$
$Z_{in}(l) = 50 \frac{100 + j118.8}{50 + j137.6 - 68.8}$
$Z_{in}(l) = 50 \frac{100 + j118.8}{-18.8 + j137.6}$
To simplify, let's divide the numerator and denominator by $Z_0$:
$$
Z_{in}(l) = Z_0 \frac{(Z_L/Z_0) + j\tan(\beta l)}{1 + j(Z_L/Z_0)\tan(\beta l)}
$$
$Z_L/Z_0 = (100+j50)/50 = 2 + j1$.
$Z_{in}(l) = 50 \frac{(2+j1) + j1.376}{1 + j(2+j1)(1.376)}$
$Z_{in}(l) = 50 \frac{2 + j1 + j1.376}{1 + j(2.752 + j1.376)}$
$Z_{in}(l) = 50 \frac{2 + j2.376}{1 + j2.752 - 1.376}$
$Z_{in}(l) = 50 \frac{2 + j2.376}{-0.376 + j2.752}$
$Z_{in}(l) = 50 \times \frac{2(1 + j1.188)}{-0.376 + j2.752}$
Convert denominator to polar: $|-0.376 + j2.752| = \sqrt{(-0.376)^2 + (2.752)^2} \approx 2.778$. Angle $\phi = \arctan(2.752/-0.376) \approx 98.0^\circ$.
Convert numerator to polar: $|2(1 + j1.188)| = 2\sqrt{1^2 + 1.188^2} \approx 2 \times 1.55 \approx 3.1$. Angle $\theta = \arctan(1.188/1) \approx 49.9^\circ$.
$Z_{in}(l) \approx 50 \times \frac{3.1 \angle 49.9^\circ}{2.778 \angle 98.0^\circ} = 50 \times 1.115 \angle (49.9^\circ - 98.0^\circ)$
$Z_{in}(l) \approx 55.75 \angle -48.1^\circ$
In rectangular form: $55.75 (\cos(-48.1^\circ) + j\sin(-48.1^\circ)) \approx 55.75 (0.668 - j0.744) \approx 37.2 - j41.4\,\Omega$.

---

### 4. Standing Wave Ratio (SWR)

When a transmission line is terminated with a load impedance that is not matched to its characteristic impedance ($Z_L \neq Z_0$), reflections occur at the load. These reflected waves interfere with the incident waves, creating a pattern of voltage and current that varies along the line. This pattern is called a **standing wave**.

**4.1. Reflection Coefficient ($\Gamma$)**

The reflection coefficient at the load ($\Gamma_L$) is the ratio of the reflected voltage wave amplitude to the incident voltage wave amplitude at the load.
$$
\Gamma_L = \frac{V_{reflected}}{V_{incident}} = \frac{V_0^- e^{j\beta l}}{V_0^+ e^{j\beta l}} \quad (\text{if load is at } z=l)
$$
Using the relation $V_0^-/V_0^+ = (Z_L - Z_0)/(Z_L + Z_0)$, and considering the phase shift due to the length $l$, the reflection coefficient at the load is:
$$
\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0}
$$
This $\Gamma_L$ is a complex quantity, $\Gamma_L = |\Gamma_L|e^{j\phi_\Gamma}$.

**4.2. Voltage and Current on the Line with Reflections**

The total voltage and current on the line are the sum of incident and reflected waves:
$$
V(z) = V_{inc}(z) + V_{ref}(z) = V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}
$$
$$
I(z) = I_{inc}(z) + I_{ref}(z) = \frac{V_0^+}{Z_0} e^{-j\beta z} - \frac{V_0^-}{Z_0} e^{j\beta z}
$$
Using $V_0^- = \Gamma_L V_0^+$ (assuming load at $z=l$) and $\Gamma_L = |\Gamma_L|e^{j\phi_\Gamma}$:
$$
V(z) = V_0^+ (e^{-j\beta z} + \Gamma_L e^{j\beta z}) = V_0^+ (e^{-j\beta z} + |\Gamma_L|e^{j\phi_\Gamma} e^{j\beta z})
$$
$$
I(z) = \frac{V_0^+}{Z_0} (e^{-j\beta z} - \Gamma_L e^{j\beta z}) = \frac{V_0^+}{Z_0} (e^{-j\beta z} - |\Gamma_L|e^{j\phi_\Gamma} e^{j\beta z})
$$
The input impedance at position $z$ (distance $z$ from the load, i.e., $z' = l-z$ in the previous derivation) is:
$$
Z_{in}(z') = Z_0 \frac{1 + \Gamma_L e^{-2j\beta z'}}{1 - \Gamma_L e^{-2j\beta z'}}
$$

**4.3. Standing Wave Pattern**

The voltage along the line can be expressed as:
$$
V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}
$$
The magnitude of the voltage is $|V(z)| = |V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}|$.
Let $z=0$ be the input end, and $z=l$ be the load end. Then the voltage at the load is $V(l) = V_0^+ e^{-j\beta l} + V_0^- e^{j\beta l}$. The reflection coefficient at the load is $\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0}$.
The voltage wave can be written relative to the load end. Let the position be $z'$ from the load ($z'=0$ at load).
$$
V(z') = V_0^+ (e^{-j\beta z'} + \Gamma_L e^{j\beta z'})
$$
If we set $z'$ such that $\beta z'$ is the phase of $\Gamma_L$, i.e., $\phi_\Gamma = \beta z'$, then $e^{j\phi_\Gamma} = e^{j\beta z'}$.
Let $\Gamma_L = |\Gamma_L| e^{j\phi_\Gamma}$.
$$
V(z') = V_0^+ (e^{-j\beta z'} + |\Gamma_L| e^{j\phi_\Gamma} e^{j\beta z'})
$$
The points of maximum voltage occur when the term in parentheses has maximum magnitude.
$|V(z')| = |V_0^+| |e^{-j\beta z'} + \Gamma_L e^{j\beta z'}|$
Let $\Gamma_L = |\Gamma_L| e^{j\phi_\Gamma}$.
$|V(z')| = |V_0^+| |e^{-j\beta z'} + |\Gamma_L| e^{j(\beta z' + \phi_\Gamma)}|$
The maximum voltage occurs when $e^{-j\beta z'}$ and $e^{j(\beta z' + \phi_\Gamma)}$ are in phase.
This happens when $-\beta z' = \beta z' + \phi_\Gamma + 2n\pi$, or $2\beta z' = -\phi_\Gamma - 2n\pi$.
$\beta z'_{max} = -\phi_\Gamma/2 - n\pi$.
The minimum voltage occurs when they are out of phase.
This happens when $-\beta z' = \beta z' + \phi_\Gamma + \pi + 2n\pi$, or $2\beta z' = -\phi_\Gamma - \pi - 2n\pi$.
$\beta z'_{min} = -\phi_\Gamma/2 - \pi/2 - n\pi$.

The ratio of the maximum voltage to the minimum voltage along the line is defined as the **Standing Wave Ratio (SWR)**, also known as the Voltage Standing Wave Ratio (VSWR).
$$
SWR = \frac{|V|_{max}}{|V|_{min}}
$$

**4.4. Relation between SWR and $\Gamma_L$**

The voltage magnitude is given by:
$|V(z')| = |V_0^+| |e^{-j\beta z'} + \Gamma_L e^{j\beta z'}|$
Let $\Gamma_L = |\Gamma_L|e^{j\phi_\Gamma}$.
$|V(z')| = |V_0^+| |e^{-j\beta z'} + |\Gamma_L| e^{j(\beta z' + \phi_\Gamma)}|$
To find the maximum and minimum, we need the arguments of the two complex exponentials to be equal or differ by $\pi$.
Let the phase of $e^{-j\beta z'}$ be $-\beta z'$.
Let the phase of $\Gamma_L e^{j\beta z'}$ be $\phi_\Gamma + \beta z'$.
For maximum voltage, these phases should be equal: $-\beta z' = \phi_\Gamma + \beta z' + 2n\pi \implies 2\beta z' = -\phi_\Gamma - 2n\pi$.
At these points, $|V(z')|_{max} = |V_0^+| |e^{-j\beta z'} + e^{j\beta z'} e^{j\phi_\Gamma} e^{j\beta z'}| = |V_0^+| |e^{-j\beta z'} + e^{j\beta z'} e^{j\beta z'} e^{j\phi_\Gamma}| = |V_0^+| |e^{-j\beta z'} (1 + e^{j2\beta z'} e^{j\phi_\Gamma})|$
Let's use the relation from input impedance:
$Z_{in}(z') = Z_0 \frac{1 + \Gamma_L e^{-2j\beta z'}}{1 - \Gamma_L e^{-2j\beta z'}}$.
Let the reflection coefficient at the input end ($z'=l$) be $\Gamma_{in}$.
The magnitude of the total voltage at any point $z'$ from the load is:
$|V(z')| = |V_0^+ (1 + \Gamma_L e^{-2j\beta z'})|$.
Maximum voltage occurs when $1$ and $\Gamma_L e^{-2j\beta z'}$ are in phase. This happens when $\arg(\Gamma_L e^{-2j\beta z'}) = 0$, so $\phi_\Gamma - 2\beta z' = 0 \implies z'_{max} = \phi_\Gamma / (2\beta)$.
At this point, $|V|_{max} = |V_0^+| (1 + |\Gamma_L|)$.
Minimum voltage occurs when $1$ and $\Gamma_L e^{-2j\beta z'}$ are out of phase by $\pi$. This happens when $\phi_\Gamma - 2\beta z' = \pi \implies z'_{min} = (\phi_\Gamma - \pi) / (2\beta)$.
At this point, $|V|_{min} = |V_0^+| |1 - |\Gamma_L|| = |V_0^+| (1 - |\Gamma_L|)$ (since $|\Gamma_L| \leq 1$).

Therefore,
$$
SWR = \frac{|V|_{max}}{|V|_{min}} = \frac{|V_0^+|(1 + |\Gamma_L|)}{|V_0^+|(1 - |\Gamma_L|)} = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|}
$$

**Interpretation of SWR:**

*   **SWR = 1:** This occurs when $|\Gamma_L| = 0$, meaning $Z_L = Z_0$. There are no reflections, and the voltage is constant along the line. This is the ideal condition.
*   **SWR > 1:** This indicates reflections are present.
*   **SWR $\to \infty$:** This occurs when $|\Gamma_L| = 1$, meaning the load is a pure reactive load (open or short circuit). The minimum voltage is zero, and the maximum voltage is $2|V_0^+|$.

**4.5. Relation between SWR and Input Impedance**

The input impedance can be expressed in terms of SWR.
Let $\rho = |\Gamma_L|$ and $\phi_\Gamma = \arg(\Gamma_L)$.
$Z_{in}(z') = Z_0 \frac{1 + \rho e^{j(\phi_\Gamma - 2\beta z')}}{1 - \rho e^{j(\phi_\Gamma - 2\beta z')}}$
Let $\theta = \phi_\Gamma - 2\beta z'$.
$Z_{in}(z') = Z_0 \frac{1 + \rho(\cos\theta + j\sin\theta)}{1 - \rho(\cos\theta + j\sin\theta)} = Z_0 \frac{(1 + \rho\cos\theta) + j\rho\sin\theta}{(1 - \rho\cos\theta) - j\rho\sin\theta}$
$Z_{in}(z') = Z_0 \frac{(1 + \rho\cos\theta) - j\rho\sin\theta}{(1 - \rho\cos\theta) + j\rho\sin\theta} \times \frac{(1 - \rho\cos\theta) + j\rho\sin\theta}{(1 - \rho\cos\theta) + j\rho\sin\theta}$
Denominator: $(1 - \rho\cos\theta)^2 + (\rho\sin\theta)^2 = 1 - 2\rho\cos\theta + \rho^2\cos^2\theta + \rho^2\sin^2\theta = 1 - 2\rho\cos\theta + \rho^2$.
Numerator: $(1 + \rho\cos\theta)(1 - \rho\cos\theta) + j\rho\sin\theta(1 + \rho\cos\theta) - j\rho\sin\theta(1 - \rho\cos\theta) + \rho^2\sin^2\theta$
Numerator real part: $1 - \rho^2\cos^2\theta + \rho^2\sin^2\theta = 1 - \rho^2(\cos^2\theta - \sin^2\theta) = 1 - \rho^2\cos(2\theta)$.
Numerator imaginary part: $j\rho\sin\theta(1 + \rho\cos\theta - (1 - \rho\cos\theta)) = j\rho\sin\theta(2\rho\cos\theta) = j2\rho^2\sin\theta\cos\theta = j\rho^2\sin(2\theta)$.
$Z_{in}(z') = Z_0 \frac{1 - \rho^2\cos(2\theta) + j\rho^2\sin(2\theta)}{1 - 2\rho\cos\theta + \rho^2}$

We know $SWR = \frac{1 + \rho}{1 - \rho}$. So $\rho = \frac{SWR - 1}{SWR + 1}$.
This relationship is important for measurements using SWR meters.

**Textbook Reference:**
*   Sadiku, 7th Ed., Chapter 11: Transmission Lines.
*   Hayt & Buck, 9th Ed., Chapter 10: Transmission Lines.

**Important Point:** SWR is a measure of how well the load is matched to the transmission line. A high SWR indicates significant reflections, leading to signal loss and potential distortion.

**Example:** A 75 $\Omega$ lossless transmission line is terminated with a load $Z_L = 50\,\Omega$. Calculate the reflection coefficient and the SWR.
$Z_0 = 75\,\Omega$, $Z_L = 50\,\Omega$.
$$
\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{50 - 75}{50 + 75} = \frac{-25}{125} = -0.2
$$
The reflection coefficient is purely real, $\Gamma_L = -0.2$.
$|\Gamma_L| = 0.2$.
$$
SWR = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|} = \frac{1 + 0.2}{1 - 0.2} = \frac{1.2}{0.8} = 1.5
$$
The SWR is 1.5:1. This means the maximum voltage is 1.5 times the minimum voltage along the line.

---

### Practice Questions

1.  A $50\,\Omega$ lossless transmission line is terminated with a load $Z_L = 100\,\Omega$. Calculate the input impedance of the line if its length is $\lambda/4$.
    *   **Hint:** $\beta l = (2\pi/\lambda) \times (\lambda/4) = \pi/2$. $\tan(\pi/2)$ is infinite. Use the form $Z_{in}(l) = Z_0 \frac{Z_L + jZ_0 \tan(\beta l)}{Z_0 + jZ_L \tan(\beta l)}$ and consider the limit as $\tan(\beta l) \to \infty$.

2.  A transmission line with $Z_0 = 50\,\Omega$ is terminated with a short circuit ($Z_L=0$). What is the SWR? What is the input impedance for lengths $l = \lambda/8$, $l=\lambda/4$, and $l=3\lambda/8$?
    *   **Hint:** For a short circuit, $\Gamma_L = -1$.

3.  If a transmission line has an SWR of 2:1, what is the magnitude of the reflection coefficient at the load?
    *   **Hint:** Use the formula $SWR = (1 + |\Gamma_L|)/(1 - |\Gamma_L|)$.

4.  Derive the input impedance for an open-circuited lossless transmission line.

5.  Explain the significance of characteristic impedance and matched loads in transmission line theory.

---

### Answers to Practice Questions

1.  For $\beta l = \pi/2$, $\tan(\beta l)$ is infinite.
    $$
    Z_{in}(l) = Z_0 \frac{Z_L + jZ_0 \tan(\beta l)}{Z_0 + jZ_L \tan(\beta l)} = Z_0 \frac{(Z_L / \tan(\beta l)) + jZ_0}{(Z_0 / \tan(\beta l)) + jZ_L}
    $$
    As $\tan(\beta l) \to \infty$, $1/\tan(\beta l) \to 0$.
    $$
    Z_{in}(l) = Z_0 \frac{0 + jZ_0}{0 + jZ_L} = Z_0 \frac{jZ_0}{jZ_L} = Z_0 \frac{Z_0}{Z_L}
    $$
    Given $Z_0 = 50\,\Omega$ and $Z_L = 100\,\Omega$:
    $$
    Z_{in} = 50 \times \frac{50}{100} = 50 \times 0.5 = 25\,\Omega
    $$

2.  For a short circuit, $Z_L=0$, so $\Gamma_L = \frac{0 - Z_0}{0 + Z_0} = -1$.
    $|\Gamma_L| = 1$.
    $$
    SWR = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|} = \frac{1 + 1}{1 - 1} = \frac{2}{0} \to \infty
    $$
    The SWR for a short-circuited line is infinite.
    The input impedance of a short-circuited line is $Z_{in}(l) = jZ_0 \tan(\beta l)$.
    *   For $l = \lambda/8$: $\beta l = (2\pi/\lambda) \times (\lambda/8) = \pi/4$.
        $Z_{in}(\lambda/8) = j50 \tan(\pi/4) = j50 \times 1 = j50\,\Omega$.
    *   For $l = \lambda/4$: $\beta l = (2\pi/\lambda) \times (\lambda/4) = \pi/2$.
        $Z_{in}(\lambda/4) = j50 \tan(\pi/2) \to \infty$ (open circuit behavior).
    *   For $l = 3\lambda/8$: $\beta l = (2\pi/\lambda) \times (3\lambda/8) = 3\pi/4$.
        $Z_{in}(3\lambda/8) = j50 \tan(3\pi/4) = j50 \times (-1) = -j50\,\Omega$.

3.  Given $SWR = 2$.
    $$
    SWR = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|}
    $$
    $$
    2 = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|}
    $$
    $$
    2(1 - |\Gamma_L|) = 1 + |\Gamma_L|
    $$
    $$
    2 - 2|\Gamma_L| = 1 + |\Gamma_L|
    $$
    $$
    1 = 3|\Gamma_L|
    $$
    $$
    |\Gamma_L| = \frac{1}{3} \approx 0.333
    $$
    The magnitude of the reflection coefficient is 1/3.

4.  For an open-circuited lossless transmission line ($Z_L \to \infty$), we derived the input impedance as:
    $$
    Z_{in}(l) = -jZ_0 \cot(\beta l)
    $$

5.  **Characteristic Impedance ($Z_0$)**: It's an intrinsic property of the transmission line, determined by its physical geometry and the materials used. It represents the ratio of voltage to current for a single, unreflected wave traveling on the line. It's crucial for understanding how energy propagates and how the line interacts with sources and loads.

    **Matched Loads ($Z_L = Z_0$)**: When the load impedance is equal to the characteristic impedance of the line, there are no reflections. This is the ideal condition for efficient power transfer from the source to the load. It minimizes signal loss due to reflections and prevents the formation of standing waves, which can lead to voltage and current fluctuations, potential damage to components, and signal distortion.

---

### Important Points to Remember

*   **Telegrapher's Equations:** Form the basis of transmission line analysis, describing the distributed voltage and current.
*   **Lossless Line Assumption:** Simplifies the equations by setting $R=0$ and $G=0$.
*   **Characteristic Impedance ($Z_0$):** A crucial parameter, independent of length for lossless lines, determined by $L$ and $C$. Typically $50\,\Omega$ or $75\,\Omega$ for RF applications.
*   **Input Impedance ($Z_{in}$):** Depends on $Z_0$, line length ($l$), and load impedance ($Z_L$). It's periodic with length.
*   **Reflection Coefficient ($\Gamma_L$):** Quantifies reflections at the load; $\Gamma_L = (Z_L - Z_0) / (Z_L + Z_0)$.
*   **Standing Waves:** Formed by the superposition of incident and reflected waves.
*   **SWR:** A measure of the severity of reflections. An SWR of 1 is ideal (matched load). $SWR = (1 + |\Gamma_L|) / (1 - |\Gamma_L|)$.
*   **Special Terminations:** Open circuits ($Z_L \to \infty$) and short circuits ($Z_L = 0$) lead to infinite SWR and purely reactive input impedances.

---
This comprehensive set of notes covers the essential concepts related to transmission lines as per the provided topic description and learning outcomes. The inclusion of formulas, special cases, examples, and practice questions aims to facilitate a thorough understanding of the subject.
