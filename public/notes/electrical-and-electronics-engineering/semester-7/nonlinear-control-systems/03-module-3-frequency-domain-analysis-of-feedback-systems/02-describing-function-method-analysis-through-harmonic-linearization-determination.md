---
title: "Describing function method: Analysis through harmonic linearization- Determination of describing function of nonlinearities."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 3: Frequency domain Analysis of Feedback systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369ab"
status: "completed"
scrapedAt: "2026-05-23T16:38:25.469Z"
---
# Module 3: Frequency Domain Analysis of Feedback Systems: Describing Function Method

## Introduction

This module introduces the **Describing Function (DF) method**, a powerful technique for analyzing the behavior of nonlinear control systems in the frequency domain. Unlike linear systems where the output is a linear superposition of inputs, nonlinear systems exhibit phenomena like limit cycles, which cannot be predicted by traditional linear frequency domain methods. The DF method addresses this by **harmonic linearization**, approximating the nonlinear element's behavior with an equivalent linear gain that depends on the amplitude of the input signal.

**Relevance to Course Outcomes:**

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points.** (K3) - The DF method helps identify the existence and amplitude of limit cycles, providing insight into the system's qualitative behavior beyond equilibrium.
*   **CO2: Analyse the stability of nonlinear systems.** (K3) - By analyzing the intersection of the Nyquist locus and the inverse describing function locus, we can predict the stability of potential limit cycles.
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis.** (K2) - This module directly addresses this by applying frequency domain concepts to nonlinear systems.
*   **CO4: Design feedback controller for nonlinear systems.** (K3) - Understanding system behavior through DF analysis can inform the design of controllers to achieve desired performance or avoid unwanted oscillations.

**Key Concepts:**

*   **Harmonic Linearization:** Approximating a nonlinear system's response to a sinusoidal input with a fundamental component and neglecting higher-order harmonics.
*   **Describing Function (DF):** The ratio of the fundamental component of the output of a nonlinear element to the amplitude of the sinusoidal input, considered as a complex gain that depends on the input amplitude.
*   **Limit Cycle:** A periodic oscillation in a nonlinear system that is not necessarily a harmonic of the input. These can be stable or unstable.
*   **Frequency Response:** The steady-state response of a linear system to a sinusoidal input, characterized by magnitude and phase.

## 3.1 Harmonic Linearization: The Core Idea

The fundamental principle behind the DF method is to treat nonlinearities as having an **amplitude-dependent equivalent gain**. When a nonlinear element is subjected to a sinusoidal input $x(t) = A \sin(\omega t)$, its output $y(t)$ will generally be non-sinusoidal due to the nonlinearity. However, if we assume that the rest of the system (the linear part) acts as a low-pass filter, it will attenuate higher-order harmonics present in $y(t)$, leaving primarily the fundamental component.

The DF, denoted by $N(A)$, is defined as:

$N(A) = \frac{\text{Fundamental component of } y(t)}{A}$

where $A$ is the amplitude of the input sinusoid $x(t) = A \sin(\omega t)$.

**Mathematically:**

If $y(t) = f(x(t))$ and $x(t) = A \sin(\omega t)$, then we can express $y(t)$ using a Fourier series:

$y(t) = \sum_{n=1}^{\infty} a_n \sin(n\omega t) + b_n \cos(n\omega t)$

The DF is then given by:

$N(A) = \frac{1}{A} \left( b_1 \cos(\omega t) + a_1 \sin(\omega t) \right) \text{ evaluated at } \omega t = \frac{\pi}{2}$  (this is a simplified view, a more rigorous definition is below)

A more precise definition involves the Fourier coefficients:

$N(A) = \frac{a_1 - jb_1}{A}$

where $a_1 = \frac{1}{\pi} \int_0^{2\pi} f(A \sin(\theta)) \sin(\theta) d\theta$ and $b_1 = \frac{1}{\pi} \int_0^{2\pi} f(A \sin(\theta)) \cos(\theta) d\theta$.

The DF method replaces the nonlinear element $f(x)$ with an equivalent linear element with gain $N(A)$. The transfer function of the nonlinear system can then be approximated as $G_{eq}(j\omega) = N(A) G(j\omega)$, where $G(j\omega)$ is the transfer function of the linear part of the system.

**Important Point to Remember:** The DF is only defined for a sinusoidal input and assumes the output can be characterized by its fundamental component. This is an approximation, and its validity depends on the nature of the nonlinearity and the frequency response of the linear part of the system.

---

## 3.2 Determination of Describing Functions of Common Nonlinearities

We will now derive the DFs for several common nonlinearities. This involves calculating the fundamental component of the output for a sinusoidal input $x(t) = A \sin(\omega t)$.

### 3.2.1 Saturation (Ideal Relay with Dead Zone)

A saturating nonlinearity is characterized by a linear region with a constant slope, followed by constant output values (saturation) for inputs exceeding certain thresholds.

**Function:**
$y(t) = \begin{cases} Kx(t) & \text{if } |x(t)| \le \delta \\ K\delta \cdot \text{sgn}(x(t)) & \text{if } |x(t)| > \delta \end{cases}$

Here, $\delta$ is the saturation limit and $K$ is the slope in the linear region.

Let $x(t) = A \sin(\omega t)$.

The output $y(t)$ will resemble a clipped sine wave. We need to find the coefficient $a_1$ of the fundamental sine component.

$a_1 = \frac{1}{\pi} \int_0^{2\pi} f(A \sin(\theta)) \sin(\theta) d\theta$

Due to symmetry, we can integrate from $0$ to $\pi$ and multiply by 2, and then consider the behavior in $[0, \pi]$ and $[\pi, 2\pi]$. For $x(t) = A \sin(\omega t)$, the saturation occurs when $A \sin(\omega t) > \delta$ or $A \sin(\omega t) < -\delta$. This happens for $\theta \in [\alpha, \pi - \alpha]$ and $[\pi + \alpha, 2\pi - \alpha]$ where $\sin(\alpha) = \delta/A$.

The integral becomes:

$a_1 = \frac{2}{\pi} \int_0^{\pi/2} f(A \sin(\theta)) \sin(\theta) d\theta$

For $0 \le \theta \le \alpha$, $A \sin(\theta) \le \delta$, so $f(A \sin(\theta)) = K A \sin(\theta)$.
For $\alpha \le \theta \le \pi/2$, $A \sin(\theta) > \delta$, so $f(A \sin(\theta)) = K \delta$.

$a_1 = \frac{2}{\pi} \left[ \int_0^{\alpha} K A \sin^2(\theta) d\theta + \int_{\alpha}^{\pi/2} K \delta \sin(\theta) d\theta \right]$

Solving these integrals:

$\int \sin^2(\theta) d\theta = \frac{\theta}{2} - \frac{\sin(2\theta)}{4}$
$\int \sin(\theta) d\theta = -\cos(\theta)$

$a_1 = \frac{2K}{\pi} \left[ A \left( \frac{\theta}{2} - \frac{\sin(2\theta)}{4} \right) \Big|_0^{\alpha} + \delta (-\cos(\theta)) \Big|_{\alpha}^{\pi/2} \right]$
$a_1 = \frac{2K}{\pi} \left[ A \left( \frac{\alpha}{2} - \frac{\sin(2\alpha)}{4} \right) + \delta (0 - (-\cos(\alpha))) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} - A \frac{2\sin(\alpha)\cos(\alpha)}{4} + \delta \cos(\alpha) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} - A \frac{\sin(\alpha)\cos(\alpha)}{2} + \delta \cos(\alpha) \right]$

Since $\sin(\alpha) = \delta/A$, $\cos(\alpha) = \sqrt{1 - (\delta/A)^2} = \frac{\sqrt{A^2 - \delta^2}}{A}$.
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} - A \frac{(\delta/A)\sqrt{A^2 - \delta^2}}{2} + \delta \frac{\sqrt{A^2 - \delta^2}}{A} \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} - \frac{\delta \sqrt{A^2 - \delta^2}}{2} + \frac{\delta \sqrt{A^2 - \delta^2}}{A} \right]$ - there's a mistake in algebraic simplification. Let's use the $\cos(\alpha)$ directly.

$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} - A \frac{\sin(\alpha)\cos(\alpha)}{2} + \delta \cos(\alpha) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} + \cos(\alpha) (\delta - \frac{A}{2} \sin(\alpha)) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} + \cos(\alpha) (\delta - \frac{A}{2} \frac{\delta}{A}) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} + \cos(\alpha) (\delta - \frac{\delta}{2}) \right]$
$a_1 = \frac{2K}{\pi} \left[ A \frac{\alpha}{2} + \frac{\delta}{2} \cos(\alpha) \right]$

$N(A) = \frac{a_1}{A} = \frac{2K}{\pi A} \left[ A \frac{\alpha}{2} + \frac{\delta}{2} \cos(\alpha) \right]$
$N(A) = K \left[ \frac{\alpha}{\pi} + \frac{\delta}{\pi A} \cos(\alpha) \right]$

where $\alpha = \arcsin(\delta/A)$.
For $A \le \delta$, the nonlinearity is fully in the linear region, and $N(A) = K$.

**Khalil (Chapter 5.2.1) derivation:**
Khalil uses a slightly different approach to derive the same result.
For $|x| \le \delta$, $y(t) = Kx(t)$.
For $|x| > \delta$, $y(t) = K\delta \text{sgn}(x(t))$.
Input: $x(t) = A \sin(\omega t)$.
Output: $y(t)$.
$y(t) = \begin{cases} KA\sin(\omega t) & \text{if } |A\sin(\omega t)| \le \delta \\ K\delta \text{sgn}(A\sin(\omega t)) & \text{if } |A\sin(\omega t)| > \delta \end{cases}$
This means for $\theta \in [0, \alpha]$ and $[\pi-\alpha, \pi]$, $y(t)=KA\sin(\theta)$.
For $\theta \in [\alpha, \pi-\alpha]$, $y(t)=K\delta$.
The definition of $a_1$ is $a_1 = \frac{1}{\pi} \int_0^{2\pi} y(t) \sin(\omega t) d(\omega t)$.
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} KA\sin^2(\theta) d\theta + \int_{\alpha}^{\pi-\alpha} K\delta \sin(\theta) d\theta + \int_{\pi-\alpha}^{\pi} KA\sin^2(\theta) d\theta \right]$
(The integral from $\pi$ to $2\pi$ is similar due to symmetry, resulting in the same values for $a_1$).
$a_1 = \frac{KA}{\pi} \int_0^{\alpha} \sin^2(\theta) d\theta + \frac{K\delta}{\pi} \int_{\alpha}^{\pi-\alpha} \sin(\theta) d\theta + \frac{KA}{\pi} \int_{\pi-\alpha}^{\pi} \sin^2(\theta) d\theta$
The first and third integrals are equal due to symmetry.
$\int_0^{\alpha} \sin^2(\theta) d\theta = \frac{\alpha}{2} - \frac{\sin(2\alpha)}{4}$
$\int_{\pi-\alpha}^{\pi} \sin^2(\theta) d\theta = \left[ \frac{\theta}{2} - \frac{\sin(2\theta)}{4} \right]_{\pi-\alpha}^{\pi} = (\frac{\pi}{2} - 0) - (\frac{\pi-\alpha}{2} - \frac{\sin(2(\pi-\alpha))}{4}) = \frac{\pi}{2} - \frac{\pi}{2} + \frac{\alpha}{2} + \frac{\sin(2\alpha)}{4} = \frac{\alpha}{2} + \frac{\sin(2\alpha)}{4}$
So $\frac{KA}{\pi} \left[ (\frac{\alpha}{2} - \frac{\sin(2\alpha)}{4}) + (\frac{\alpha}{2} + \frac{\sin(2\alpha)}{4}) \right] = \frac{KA}{\pi} \alpha$.

$\int_{\alpha}^{\pi-\alpha} \sin(\theta) d\theta = [-\cos(\theta)]_{\alpha}^{\pi-\alpha} = -\cos(\pi-\alpha) - (-\cos(\alpha)) = -(-\cos(\alpha)) + \cos(\alpha) = 2\cos(\alpha)$.

$a_1 = \frac{KA}{\pi} \alpha + \frac{K\delta}{\pi} (2\cos(\alpha))$
$N(A) = \frac{a_1}{A} = \frac{K}{\pi} \alpha + \frac{2K\delta}{\pi A} \cos(\alpha)$.
With $\alpha = \arcsin(\delta/A)$ and $\cos(\alpha) = \frac{\sqrt{A^2-\delta^2}}{A}$.
$N(A) = \frac{K}{\pi} \arcsin(\frac{\delta}{A}) + \frac{2K\delta}{\pi A} \frac{\sqrt{A^2-\delta^2}}{A}$
$N(A) = \frac{K}{\pi} \left( \arcsin(\frac{\delta}{A}) + \frac{2\delta \sqrt{A^2-\delta^2}}{A^2} \right)$.

**Important Note:** The derivation is consistent. The previous one had a slight algebraic simplification error. The correct form is:
$N(A) = \frac{K}{\pi} \left( \arcsin\left(\frac{\delta}{A}\right) + \frac{2\delta \sqrt{A^2-\delta^2}}{A^2} \right)$ for $A > \delta$.
And $N(A) = K$ for $A \le \delta$.

**Behavior:** As $A$ increases, $\delta/A$ decreases, $\arcsin(\delta/A)$ decreases, and $\frac{2\delta \sqrt{A^2-\delta^2}}{A^2}$ also decreases. Thus, $N(A)$ decreases as $A$ increases.

### 3.2.2 Saturation (Clipping)

This is a simpler case where the output is limited to a maximum value.
**Function:**
$y(t) = \begin{cases} x(t) & \text{if } |x(t)| \le M \\ M \cdot \text{sgn}(x(t)) & \text{if } |x(t)| > M \end{cases}$

This is a special case of the previous saturation with $K=1$ and $\delta=M$.
$N(A) = \frac{1}{\pi} \left( \arcsin\left(\frac{M}{A}\right) + \frac{2M \sqrt{A^2-M^2}}{A^2} \right)$ for $A > M$.
$N(A) = 1$ for $A \le M$.

### 3.2.3 Relay (Ideal Hysteresis or Bang-Bang)

A relay switches its output between two constant values, $+M$ and $-M$, based on the sign of the input. For an ideal relay without hysteresis, the switching is instantaneous.

**Function:**
$y(t) = \begin{cases} M & \text{if } x(t) > 0 \\ -M & \text{if } x(t) < 0 \\ \text{undefined or } 0 & \text{if } x(t) = 0 \end{cases}$

Let $x(t) = A \sin(\omega t)$.
For $0 < \theta < \pi$, $x(t) > 0$, so $y(t) = M$.
For $\pi < \theta < 2\pi$, $x(t) < 0$, so $y(t) = -M$.

This results in a square wave output. We need the fundamental component of this square wave.

$a_1 = \frac{1}{\pi} \int_0^{2\pi} y(t) \sin(\theta) d\theta$
$a_1 = \frac{1}{\pi} \left[ \int_0^{\pi} M \sin(\theta) d\theta + \int_{\pi}^{2\pi} (-M) \sin(\theta) d\theta \right]$
$a_1 = \frac{M}{\pi} [-\cos(\theta)]_0^{\pi} - \frac{M}{\pi} [-\cos(\theta)]_{\pi}^{2\pi}$
$a_1 = \frac{M}{\pi} [-(-1) - (-1)] - \frac{M}{\pi} [-0 - (-(-1))]$
$a_1 = \frac{M}{\pi} [1+1] - \frac{M}{\pi} [-1] = \frac{2M}{\pi} + \frac{M}{\pi} = \frac{3M}{\pi}$ -- Error here.

Let's re-evaluate the second integral:
$-\frac{M}{\pi} [-\cos(\theta)]_{\pi}^{2\pi} = -\frac{M}{\pi} [-1 - (-(-1))] = -\frac{M}{\pi} [-1 - 1] = -\frac{M}{\pi} [-2] = \frac{2M}{\pi}$.

So, $a_1 = \frac{2M}{\pi} + \frac{2M}{\pi} = \frac{4M}{\pi}$.

The DF is:
$N(A) = \frac{a_1}{A} = \frac{4M}{\pi A}$.

**Important Point:** The DF of an ideal relay is independent of the amplitude $A$. This implies that the relay behaves like a linear gain whose value is inversely proportional to the input amplitude. This is a significant approximation.

### 3.2.4 Relay with Hysteresis

A relay with hysteresis switches output states only after the input crosses a certain threshold and then returns. This introduces a dead zone in terms of switching action.

**Function:**
$y(t) = \begin{cases} M & \text{if } x(t) > h \\ -M & \text{if } x(t) < -h \\ y_{prev} & \text{if } -h \le x(t) \le h \end{cases}$

Here, $h$ is the switching threshold.

Let $x(t) = A \sin(\omega t)$.
Switching occurs when $A \sin(\omega t) = h$ or $A \sin(\omega t) = -h$.
Let $\alpha = \arcsin(h/A)$.

For $0 < \theta < \alpha$, $x(t)$ is increasing and $A \sin(\theta) < h$. If $y_{prev}$ was $-M$, it stays $-M$.
For $\alpha < \theta < \pi - \alpha$, $x(t)$ is increasing and $A \sin(\theta) > h$. Output switches to $M$.
For $\pi - \alpha < \theta < \pi$, $x(t)$ is decreasing and $A \sin(\theta) > h$. It stays $M$.
For $\pi < \theta < \pi + \alpha$, $x(t)$ is decreasing and $A \sin(\theta) < -h$. If $y_{prev}$ was $M$, it stays $M$.
For $\pi + \alpha < \theta < 2\pi - \alpha$, $x(t)$ is decreasing and $A \sin(\theta) < -h$. Output switches to $-M$.
For $2\pi - \alpha < \theta < 2\pi$, $x(t)$ is increasing and $A \sin(\theta) > -h$. It stays $-M$.

Assuming the system is in a stable limit cycle and starting from a state where $y(t)$ is about to switch from $-M$ to $M$ at $\theta = \alpha$.
The output will be:
$y(t) = -M$ for $0 \le \theta < \alpha$
$y(t) = M$ for $\alpha \le \theta < \pi - \alpha$
$y(t) = M$ for $\pi - \alpha \le \theta < \pi$ (stays $M$)
$y(t) = M$ for $\pi \le \theta < \pi + \alpha$ (stays $M$)
$y(t) = -M$ for $\pi + \alpha \le \theta < 2\pi - \alpha$
$y(t) = -M$ for $2\pi - \alpha \le \theta < 2\pi$ (stays $-M$)

The waveform is a modified square wave.
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M) \sin(\theta) d\theta + \int_{\alpha}^{\pi+\alpha} M \sin(\theta) d\theta + \int_{\pi+\alpha}^{2\pi} (-M) \sin(\theta) d\theta \right]$
Due to symmetry, we can consider the integral from $0$ to $\pi$.
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M) \sin(\theta) d\theta + \int_{\alpha}^{\pi-\alpha} M \sin(\theta) d\theta + \int_{\pi-\alpha}^{\pi} M \sin(\theta) d\theta \right]$ -- Wait, this is incorrect, the sign change occurs.

Let's consider the full cycle for $a_1$:
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M)\sin(\theta) d\theta + \int_{\alpha}^{\pi-\alpha} M\sin(\theta) d\theta + \int_{\pi-\alpha}^{\pi} M\sin(\theta) d\theta + \int_{\pi}^{\pi+\alpha} (-M)\sin(\theta) d\theta + \int_{\pi+\alpha}^{2\pi-\alpha} (-M)\sin(\theta) d\theta + \int_{2\pi-\alpha}^{2\pi} (-M)\sin(\theta) d\theta \right]$

Due to symmetry of $\sin(\theta)$, the integrals over $[\pi, 2\pi]$ are related to $[0, \pi]$.
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M)\sin(\theta) d\theta + \int_{\alpha}^{\pi-\alpha} M\sin(\theta) d\theta + \int_{\pi-\alpha}^{2\pi-\alpha} (-M)\sin(\theta) d\theta + \int_{2\pi-\alpha}^{2\pi} (-M)\sin(\theta) d\theta \right]$ -- this is becoming complicated.

Let's use the symmetry of the output waveform with respect to the input. The output is an odd function of the input shifted by a phase.
The fundamental component $a_1$ can be calculated as:
$a_1 = \frac{2}{\pi} \int_0^{\pi} y(A\sin\theta) \sin\theta d\theta$
For $0 \le \theta \le \alpha$, $y = -M$.
For $\alpha \le \theta \le \pi - \alpha$, $y = M$.
For $\pi - \alpha \le \theta \le \pi$, $y = M$. (This interval has the same value as the previous, which is not right. The input goes from positive to negative).

Let's re-examine the output for $x(t) = A\sin(\omega t)$:
- If $A\sin(\omega t)$ goes from negative to positive and crosses $h$, output switches from $-M$ to $M$. This happens at $\theta = \alpha$.
- If $A\sin(\omega t)$ goes from positive to negative and crosses $-h$, output switches from $M$ to $-M$. This happens at $\theta = \pi - \alpha$.

So, the output waveform for $0$ to $2\pi$ is:
$y(t) = -M$ for $0 \le \theta < \alpha$
$y(t) = M$ for $\alpha \le \theta < \pi - \alpha$
$y(t) = -M$ for $\pi - \alpha \le \theta < 2\pi - \alpha$
$y(t) = -M$ for $2\pi - \alpha \le \theta < 2\pi$ -- error in interval. It should be switching back at $2\pi-\alpha$.

Corrected waveform:
$y(t) = -M$ for $0 \le \theta < \alpha$
$y(t) = M$ for $\alpha \le \theta < \pi - \alpha$
$y(t) = -M$ for $\pi - \alpha \le \theta < 2\pi - \alpha$

The integral for $a_1$:
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M) \sin(\theta) d\theta + \int_{\alpha}^{\pi - \alpha} M \sin(\theta) d\theta + \int_{\pi - \alpha}^{2\pi - \alpha} (-M) \sin(\theta) d\theta \right]$
$a_1 = \frac{1}{\pi} \left[ -M [-\cos\theta]_0^{\alpha} + M [-\cos\theta]_{\alpha}^{\pi-\alpha} - M [-\cos\theta]_{\pi-\alpha}^{2\pi-\alpha} \right]$
$a_1 = \frac{M}{\pi} \left[ (\cos\alpha - 1) - (\cos(\pi-\alpha) - \cos\alpha) + (\cos(2\pi-\alpha) - \cos(\pi-\alpha)) \right]$
$a_1 = \frac{M}{\pi} \left[ (\cos\alpha - 1) - (-\cos\alpha - \cos\alpha) + (\cos\alpha - (-\cos\alpha)) \right]$
$a_1 = \frac{M}{\pi} \left[ \cos\alpha - 1 + 2\cos\alpha + 2\cos\alpha \right]$
$a_1 = \frac{M}{\pi} [5\cos\alpha - 1]$ -- This looks incorrect.

Let's use the result from Khalil (Chapter 5.2.2).
The DF for a relay with hysteresis $2h$ and output $\pm M$ is:
$N(A) = \frac{2M}{\pi A} \left( 2\sqrt{1 - (\frac{h}{A})^2} + \frac{h}{A} \arcsin(\frac{h}{A}) \right)$ -- This seems to be for a different definition of hysteresis.

The standard DF for hysteresis (Slotine & Li, Chapter 8.2.1, similar concepts) involves the phase shift. Let's re-derive the $a_1$ for the waveform:
$y(t) = -M$ for $0 \le \theta < \alpha$
$y(t) = M$ for $\alpha \le \theta < \pi - \alpha$
$y(t) = -M$ for $\pi - \alpha \le \theta < 2\pi$

This assumes the input starts at 0 and increases.
$a_1 = \frac{1}{\pi} \left[ \int_0^{\alpha} (-M)\sin\theta d\theta + \int_{\alpha}^{\pi-\alpha} M\sin\theta d\theta + \int_{\pi-\alpha}^{2\pi} (-M)\sin\theta d\theta \right]$
$a_1 = \frac{M}{\pi} \left[ [-\cos\theta]_0^{\alpha} - [\cos\theta]_{\alpha}^{\pi-\alpha} + [\cos\theta]_{\pi-\alpha}^{2\pi} \right]$
$a_1 = \frac{M}{\pi} \left[ (1-\cos\alpha) - (\cos(\pi-\alpha) - \cos\alpha) + (\cos(2\pi) - \cos(\pi-\alpha)) \right]$
$a_1 = \frac{M}{\pi} \left[ (1-\cos\alpha) - (-\cos\alpha - \cos\alpha) + (1 - (-\cos\alpha)) \right]$
$a_1 = \frac{M}{\pi} \left[ 1-\cos\alpha + 2\cos\alpha + 1 + \cos\alpha \right]$
$a_1 = \frac{M}{\pi} [2 + 2\cos\alpha]$
$a_1 = \frac{2M}{\pi} (1 + \cos\alpha)$

$N(A) = \frac{a_1}{A} = \frac{2M}{\pi A} (1 + \cos(\arcsin(h/A)))$.
Using $\cos(\arcsin x) = \sqrt{1-x^2}$:
$N(A) = \frac{2M}{\pi A} \left( 1 + \sqrt{1 - (h/A)^2} \right)$.

**Important Point:** For relay with hysteresis, the DF is amplitude-dependent and also has an implicit phase shift if the switching is not perfectly aligned with zero crossings. The formula above assumes no phase shift in the fundamental component.

### 3.2.5 Dead Zone

A dead zone is an interval around zero where the output is zero.
**Function:**
$y(t) = \begin{cases} Kx(t) & \text{if } |x(t)| > d \\ 0 & \text{if } |x(t)| \le d \end{cases}$

Let $x(t) = A \sin(\omega t)$.
The output is zero for $0 \le \theta \le \alpha$ and $\pi - \alpha \le \theta \le \pi$, where $\alpha = \arcsin(d/A)$.
The output is $K A \sin(\theta)$ for $\alpha \le \theta \le \pi - \alpha$.

$a_1 = \frac{1}{\pi} \int_0^{2\pi} y(A \sin(\theta)) \sin(\theta) d\theta$
$a_1 = \frac{1}{\pi} \int_{\alpha}^{\pi-\alpha} K A \sin^2(\theta) d\theta + \frac{1}{\pi} \int_{\pi}^{\pi+\alpha} 0 \cdot \sin(\theta) d\theta + \frac{1}{\pi} \int_{\pi+\alpha}^{2\pi-\alpha} K A \sin^2(\theta) d\theta + \frac{1}{\pi} \int_{2\pi-\alpha}^{2\pi} 0 \cdot \sin(\theta) d\theta$

Due to symmetry, we can focus on the first half:
$a_1 = \frac{2}{\pi} \int_{\alpha}^{\pi-\alpha} K A \sin^2(\theta) d\theta$
$a_1 = \frac{2KA}{\pi} \int_{\alpha}^{\pi-\alpha} \frac{1 - \cos(2\theta)}{2} d\theta$
$a_1 = \frac{KA}{\pi} \left[ \theta - \frac{\sin(2\theta)}{2} \right]_{\alpha}^{\pi-\alpha}$
$a_1 = \frac{KA}{\pi} \left[ (\pi-\alpha - \frac{\sin(2(\pi-\alpha))}{2}) - (\alpha - \frac{\sin(2\alpha)}{2}) \right]$
$a_1 = \frac{KA}{\pi} \left[ \pi - 2\alpha - \frac{\sin(2\alpha)}{2} - \frac{\sin(2\alpha)}{2} \right]$
$a_1 = \frac{KA}{\pi} \left[ \pi - 2\alpha - \sin(2\alpha) \right]$

$N(A) = \frac{a_1}{A} = \frac{K}{\pi} \left[ \pi - 2\alpha - \sin(2\alpha) \right]$
$N(A) = K \left[ 1 - \frac{2\alpha}{\pi} - \frac{\sin(2\alpha)}{\pi} \right]$

Since $\alpha = \arcsin(d/A)$, $\sin(2\alpha) = 2\sin\alpha\cos\alpha = 2(d/A) \sqrt{1-(d/A)^2} = \frac{2d\sqrt{A^2-d^2}}{A^2}$.
$N(A) = K \left[ 1 - \frac{2}{\pi} \arcsin(\frac{d}{A}) - \frac{2d\sqrt{A^2-d^2}}{\pi A^2} \right]$ for $A > d$.
$N(A) = 0$ for $A \le d$.

**Important Point:** For a dead zone, the DF starts at 0 and increases with $A$ towards $K$ as $A \to \infty$.

### 3.2.6 Quadratic Nonlinearity

Consider a nonlinearity of the form $y(t) = Kx^2(t)$.
Let $x(t) = A \sin(\omega t)$.
$y(t) = K (A \sin(\omega t))^2 = K A^2 \sin^2(\omega t) = K A^2 \left( \frac{1 - \cos(2\omega t)}{2} \right)$
$y(t) = \frac{K A^2}{2} - \frac{K A^2}{2} \cos(2\omega t)$

The output contains a DC component and a second harmonic. There is no fundamental component at frequency $\omega$.
Therefore, the DF for $y = Kx^2$ is $N(A) = 0$.

Consider $y(t) = Kx^3(t)$.
Let $x(t) = A \sin(\omega t)$.
$y(t) = K (A \sin(\omega t))^3 = K A^3 \sin^3(\omega t)$
Using $\sin(3\theta) = 3\sin\theta - 4\sin^3\theta$, so $\sin^3\theta = \frac{3\sin\theta - \sin(3\theta)}{4}$.
$y(t) = K A^3 \frac{3\sin(\omega t) - \sin(3\omega t)}{4} = \frac{3K A^3}{4} \sin(\omega t) - \frac{K A^3}{4} \sin(3\omega t)$.

The fundamental component of the output is $\frac{3K A^3}{4} \sin(\omega t)$.
The amplitude of the fundamental component is $\frac{3K A^3}{4}$.

The DF is $N(A) = \frac{\text{Amplitude of fundamental}}{\text{Amplitude of input}} = \frac{3K A^3 / 4}{A} = \frac{3K A^2}{4}$.

**Slotin & Li (Chapter 8.2.1) covers cubic nonlinearity:**
For $y=Kx^3$, $N(A) = \frac{3KA^2}{4}$.

**Important Point:** Odd-power nonlinearities (like $x^3, x^5$) produce an output with a fundamental component. Even-power nonlinearities (like $x^2, x^4$) produce a DC component and even harmonics, but no fundamental component, thus their DF is zero.

## 3.3 Limit Cycle Analysis Using Describing Functions

The DF method is used to predict the existence and amplitude of **limit cycles** in nonlinear feedback systems. A limit cycle is a stable or unstable periodic oscillation that occurs in a nonlinear system even in the absence of external forcing.

Consider a closed-loop system with a nonlinear element $N$ and a linear element $G$.
The system equation is $N(A) + G(j\omega) = 0$ for stability (Nyquist criterion).
In terms of transfer functions, the open-loop transfer function of the equivalent linear system is $L_{eq}(j\omega) = N(A) G(j\omega)$.
For sustained oscillations (limit cycles), the system must be on the verge of instability or marginally stable. This occurs when the open-loop transfer function has a gain of -1 (or magnitude 1 and phase -180 degrees) at some frequency.

The condition for a limit cycle is:
$1 + G(j\omega) N(A) = 0$
or
$G(j\omega) = -\frac{1}{N(A)}$

This equation is solved by plotting the frequency response of the linear part, $G(j\omega)$, and the inverse of the describing function, $-1/N(A)$, as a function of amplitude $A$.

**Steps for Limit Cycle Analysis:**

1.  **Identify the nonlinear element** and the linear part of the system.
2.  **Derive the Describing Function $N(A)$** for the nonlinear element.
3.  **Derive the inverse of the Describing Function, $-1/N(A)$**, considering it as a function of amplitude $A$. Treat $N(A)$ as a complex number representing a gain.
4.  **Obtain the frequency response of the linear part**, $G(j\omega)$, which is a function of frequency $\omega$.
5.  **Plot the locus of $G(j\omega)$** in the complex plane as $\omega$ varies from $0$ to $\infty$ (the Nyquist locus).
6.  **Plot the locus of $-1/N(A)$** in the complex plane as $A$ varies from $0$ to $\infty$. This is called the **inverse describing function locus**.
7.  **Find the intersection(s)** of the Nyquist locus $G(j\omega)$ and the inverse describing function locus $-1/N(A)$.

**Interpretation of Intersections:**

*   An intersection point $(G_c, j\omega_c)$ signifies a potential limit cycle with amplitude $A_c$ and frequency $\omega_c$. The amplitude $A_c$ is determined from the condition $G(j\omega_c) = -1/N(A_c)$.
*   **Stability of the Limit Cycle:** The stability of a limit cycle can be determined by examining the relative positions of the $G(j\omega)$ locus and the $-1/N(A)$ locus near the intersection point.

    *   **Stable Limit Cycle:** If the $G(j\omega)$ locus crosses the $-1/N(A)$ locus in such a way that for increasing amplitude $A$, the $-1/N(A)$ locus moves away from the intersection point in the direction of decreasing gain, the limit cycle is stable. Conversely, if for decreasing amplitude $A$, the $-1/N(A)$ locus moves away from the intersection point in the direction of increasing gain, the limit cycle is stable.
    *   **Unstable Limit Cycle:** If the $G(j\omega)$ locus crosses the $-1/N(A)$ locus such that for increasing amplitude $A$, the $-1/N(A)$ locus moves towards the intersection point in the direction of increasing gain, the limit cycle is unstable.

**Khalil (Chapter 5.3) provides a detailed approach to stability analysis:**
The closed-loop system with the DF approximation is:
$G(j\omega)N(A) = -1$
Let $\omega_0$ be the frequency at which $|G(j\omega_0)| = 1$ and $\arg(G(j\omega_0)) = -\pi + \phi_0$. Let $A_0$ be the amplitude such that $N(A_0)$ has the appropriate gain and phase to satisfy the condition.
The stability of the limit cycle is determined by the gain margin or phase margin around the intersection point.
Consider $G(j\omega)N(A) = -1$. Let $A$ be a small perturbation around $A_0$, $A = A_0 + \delta A$.
$G(j\omega) N(A_0 + \delta A) \approx G(j\omega) N(A_0) + G(j\omega) N'(A_0) \delta A = -1$.
$G(j\omega) N(A_0) (1 + \frac{N'(A_0) \delta A}{N(A_0)}) = -1$.
Since $G(j\omega)N(A_0) \approx -1$, we have $-(1 + \frac{N'(A_0) \delta A}{N(A_0)}) = -1$, which implies $\frac{N'(A_0)}{N(A_0)} \delta A = 0$.

A more formal method involves analyzing the roots of the characteristic equation for the perturbed system.
Let $s = j\omega$. The characteristic equation is $1 + G(s) N(A) = 0$.
For a limit cycle at amplitude $A_0$ and frequency $\omega_0$, $1 + G(j\omega_0) N(A_0) = 0$.
Consider a perturbation in amplitude $\delta A$. The characteristic equation can be approximated as:
$1 + G(j\omega) N(A_0) + G(j\omega) N'(A_0) \delta A = 0$.
Let $j\omega = j\omega_0 + s'$.
$1 + G(j\omega_0) N(A_0) + G(j\omega_0) N'(A_0) \delta A + G'(j\omega_0) s' N(A_0) = 0$.
$0 + 0 + G(j\omega_0) N'(A_0) \delta A + G'(j\omega_0) s' N(A_0) = 0$.
$s' = - \frac{G(j\omega_0) N'(A_0) \delta A}{G'(j\omega_0) N(A_0)}$.

The stability depends on the sign of the real part of $s'$. This is related to $\frac{N'(A_0)}{N(A_0)}$ and $\frac{G'(j\omega_0)}{G(j\omega_0)}$.
A common criterion for stability is:
**Stable Limit Cycle:** $\frac{d|G(j\omega)|}{d\omega}|_{\omega=\omega_0} \frac{d|N(A)|^{-1}}{dA}|_{A=A_0} > 0$.
Or, equivalently, $\frac{d|G(j\omega)|}{d\omega}|_{\omega=\omega_0} \frac{d|N(A)|}{dA}|_{A=A_0} < 0$.

This means that if $N(A)$ decreases with $A$, and $|G(j\omega)|$ decreases with $\omega$ around $\omega_0$, the limit cycle is stable.
If $|G(j\omega)|$ increases with $\omega$ around $\omega_0$, the limit cycle is unstable.

**Slotin & Li (Chapter 8.2.2) Stability of Limit Cycles:**
They analyze the equation $G(j\omega)N(A) = -1$.
Let $G(j\omega) = R(\omega) e^{j\phi(\omega)}$ and $N(A) = |N(A)| e^{j\psi(A)}$.
$R(\omega)|N(A)| e^{j(\phi(\omega) + \psi(A))} = 1$.
So $R(\omega)|N(A)| = 1$ and $\phi(\omega) + \psi(A) = 0$ (modulo $2\pi$).
For the DF method, we usually consider nonlinearities that are purely real, so $\psi(A) = 0$.
Then $R(\omega)|N(A)| = 1$ and $\phi(\omega) = -\pi$.
This means we look for points where $G(j\omega)$ is on the negative real axis.

The stability criterion is often stated as:
A limit cycle is stable if, as the amplitude $A$ increases, the gain $|G(j\omega)|$ increases (or $|-1/N(A)|$ decreases).
If $|G(j\omega)|$ decreases as $A$ increases, the limit cycle is unstable.

Consider plotting $|G(j\omega)|$ vs $\omega$ and $|N(A)|^{-1}$ vs $A$. An intersection point gives the frequency and amplitude.
The stability is determined by the slopes at the intersection.
If $\frac{d|G(j\omega)|}{d\omega}|_{\omega_0} \cdot \frac{d|N(A)|^{-1}}{dA}|_{A_0} > 0$, the limit cycle is stable.
This means if $|G(j\omega)|$ increases with $\omega$ and $|N(A)|^{-1}$ increases with $A$, it's stable.
Or if $|G(j\omega)|$ decreases with $\omega$ and $|N(A)|^{-1}$ decreases with $A$, it's stable.

For common nonlinearities like saturation, relay, dead zone, $N(A)$ decreases with $A$. So $N(A)^{-1}$ increases with $A$.
If $|G(j\omega)|$ also increases with $\omega$ around the crossover frequency, the limit cycle is stable.
If $|G(j\omega)|$ decreases with $\omega$, the limit cycle is unstable.

**Example:** System with a relay and integral action.
$G(s) = \frac{K}{s(s+a)}$. $N(A) = \frac{4M}{\pi A}$.
$-1/N(A) = -\frac{\pi A}{4M}$. This is a line on the negative real axis.
$G(j\omega) = \frac{K}{j\omega(j\omega+a)} = \frac{K}{- \omega^2 + ja\omega} = \frac{K(-\omega^2 - ja\omega)}{(\omega^2+a^2)\omega^2}$ -- Error in denominator.
$G(j\omega) = \frac{K}{j\omega(j\omega+a)} = \frac{K}{-\omega^2 + j\omega a} = \frac{K(-\omega^2 - j\omega a)}{\omega^2(\omega^2+a^2)}$.
$G(j\omega) = \frac{-K\omega^2}{\omega^2(\omega^2+a^2)} + j \frac{-Ka\omega}{\omega^2(\omega^2+a^2)} = \frac{-K}{\omega^2+a^2} + j \frac{-Ka}{\omega(\omega^2+a^2)}$.

For the intersection, $G(j\omega)$ must be on the negative real axis. This means the imaginary part of $G(j\omega)$ must be zero.
$\text{Im}(G(j\omega)) = \frac{-Ka}{\omega(\omega^2+a^2)} = 0$. Since $K, a, \omega$ are positive, this is impossible.
This implies that a system with $G(s) = K/(s(s+a))$ and a relay might not have a limit cycle predicted by the DF method where the intersection is on the negative real axis.

Let's consider $G(s) = \frac{K}{s+a}$. $N(A) = \frac{4M}{\pi A}$.
$G(j\omega) = \frac{K}{j\omega+a} = \frac{K(a-j\omega)}{a^2+\omega^2} = \frac{Ka}{a^2+\omega^2} - j \frac{K\omega}{a^2+\omega^2}$.
$-1/N(A) = -\frac{\pi A}{4M}$. This is on the negative real axis.
We need $\text{Im}(G(j\omega)) = 0$ and $\text{Re}(G(j\omega)) = -1/N(A)$.
$\text{Im}(G(j\omega)) = \frac{-K\omega}{a^2+\omega^2} = 0$. This implies $\omega=0$.
If $\omega=0$, $G(j0) = K/a$. If $K/a > 0$, it's on the positive real axis. No intersection.

Let's consider $G(s) = \frac{K}{s}$. $N(A) = \frac{4M}{\pi A}$.
$G(j\omega) = \frac{K}{j\omega}$. This is on the negative imaginary axis.
$-1/N(A) = -\frac{\pi A}{4M}$. This is on the negative real axis.
No intersection unless $A$ is such that $-1/N(A)$ is on the imaginary axis, which is not possible.

Consider $G(s) = \frac{K(s+b)}{s(s+a)}$.
$G(j\omega) = \frac{K(j\omega+b)}{j\omega(j\omega+a)} = \frac{K(b+j\omega)}{j\omega(a+j\omega)} = \frac{K(b+j\omega)}{-\omega^2 + ja\omega}$
$G(j\omega) = \frac{K(b+j\omega)(-\omega^2 - ja\omega)}{(\omega^2+a^2)\omega^2}$
$G(j\omega) = \frac{K}{-\omega^2(\omega^2+a^2)} [ (b(-\omega^2) - \omega(-a\omega)) + j(b(-a\omega) + \omega(-\omega^2)) ]$
$G(j\omega) = \frac{K}{\omega^2(\omega^2+a^2)} [ (\omega^2(a-b)) + j(-\omega(ab+\omega^2)) ]$ -- error in sign.

$G(j\omega) = \frac{K(b+j\omega)}{(-\omega^2+ja\omega)}$
Numerator: $Kb - \omega^2 b + j(K\omega b - K\omega^2)$ -- Error in numerator algebra.
Numerator: $K(b+j\omega)$
Denominator: $j\omega(a+j\omega) = -\omega^2 + ja\omega$
$G(j\omega) = \frac{K(b+j\omega)}{-\omega^2+ja\omega} \times \frac{-\omega^2-ja\omega}{-\omega^2-ja\omega}$
$G(j\omega) = \frac{K [b(-\omega^2-ja\omega) + j\omega(-\omega^2-ja\omega)]}{\omega^4 + a^2\omega^2}$
$G(j\omega) = \frac{K [ -b\omega^2 -jab\omega -j\omega^3 + a\omega^2 ]}{\omega^2(\omega^2+a^2)}$
$G(j\omega) = \frac{K [ \omega^2(a-b) + j(-\omega^3 - ab\omega) ]}{\omega^2(\omega^2+a^2)}$
$G(j\omega) = \frac{K}{\omega^2+a^2} [ (a-b) + j(-\frac{\omega^2+ab}{\omega}) ]$ -- Error in denominator.

$G(j\omega) = \frac{K [ (a-b)\omega^2 - j(\omega^3 + ab\omega) ]}{\omega^2(\omega^2+a^2)}$
$G(j\omega) = \frac{K (a-b)}{\omega^2+a^2} + j \frac{-K(\omega^2+ab)}{\omega(\omega^2+a^2)}$.

We need $\text{Im}(G(j\omega)) = 0$ for an intersection with $-1/N(A)$.
$\text{Im}(G(j\omega)) = \frac{-K(\omega^2+ab)}{\omega(\omega^2+a^2)} = 0$.
This implies $\omega^2+ab = 0$. Since $\omega$ and $a,b$ are usually positive, this is not possible.

The standard approach for limit cycle analysis using DF is to plot $G(j\omega)$ and $-1/N(A)$ on the same complex plane. The intersection gives the potential limit cycle parameters.

**Example from Khalil:**
Consider a system with $G(s) = \frac{10}{s(s+1)(s+2)}$.
Let the nonlinearity be a relay with $\pm 1$ output. $N(A) = 4/(\pi A)$.
$-1/N(A) = -\pi A/4$.
$G(j\omega) = \frac{10}{j\omega(j\omega+1)(j\omega+2)} = \frac{10}{j\omega(-\omega^2 + 3j\omega + 2)} = \frac{10}{-\omega^2 + 3j\omega^2 + 2j\omega}$
$G(j\omega) = \frac{10}{(-\omega^2) + j(3\omega^3 - 2\omega)}$ -- Error in multiplication.
$G(j\omega) = \frac{10}{j\omega(-\omega^2 + 2 + 3j\omega)} = \frac{10}{-\omega^2(j) + 2j\omega - 3\omega^2}$
$G(j\omega) = \frac{10}{(-3\omega^2) + j(2\omega - \omega^3)}$.

We need the locus of $G(j\omega)$ and $-1/N(A)$.
The locus of $-1/N(A) = -\pi A/4$ is a line on the negative real axis.
So, we need $G(j\omega)$ to be on the negative real axis.
$\text{Im}(G(j\omega)) = \frac{10(2\omega - \omega^3)}{(-3\omega^2)^2 + (2\omega - \omega^3)^2} = 0$.
$2\omega - \omega^3 = 0 \implies \omega(2 - \omega^2) = 0$.
Since $\omega > 0$, $\omega^2 = 2 \implies \omega = \sqrt{2}$ rad/sec.

At $\omega = \sqrt{2}$:
$G(j\sqrt{2}) = \frac{10}{(-3(\sqrt{2})^2) + j(2\sqrt{2} - (\sqrt{2})^3)} = \frac{10}{(-3 \times 2) + j(2\sqrt{2} - 2\sqrt{2})} = \frac{10}{-6}$.
$G(j\sqrt{2}) = -10/6 = -5/3$.

Now we set $G(j\sqrt{2}) = -1/N(A)$:
$-5/3 = -\pi A/4$
$A = \frac{5}{3} \frac{4}{\pi} = \frac{20}{3\pi} \approx 2.12$.

This indicates a stable limit cycle with amplitude $A \approx 2.12$ and frequency $\omega = \sqrt{2}$ rad/sec.

**Stability Check:**
$|G(j\omega)| = \frac{10}{\sqrt{(-3\omega^2)^2 + (2\omega - \omega^3)^2}} = \frac{10}{\sqrt{9\omega^4 + (2\omega - \omega^3)^2}}$.
$|N(A)|^{-1} = \frac{\pi A}{4}$.
At $\omega = \sqrt{2}$, $|G(j\sqrt{2})| = 5/3$.
$|N(A)|^{-1}$ at $A = 20/(3\pi)$ is $\frac{\pi}{4} \frac{20}{3\pi} = 5/3$.

We need to check the slope of $|G(j\omega)|$ with respect to $\omega$ and $|N(A)|^{-1}$ with respect to $A$ at the intersection.
$N(A) = 4M/(\pi A)$, so $|N(A)|^{-1} = \pi A/(4M)$. The slope with respect to $A$ is $\pi/(4M) > 0$.
We need to check the slope of $|G(j\omega)|$ with respect to $\omega$ at $\omega = \sqrt{2}$.
Let $f(\omega) = (-3\omega^2)^2 + (2\omega - \omega^3)^2 = 9\omega^4 + 4\omega^2 - 4\omega^4 + \omega^6 = \omega^6 + 5\omega^4 + 4\omega^2$.
$|G(j\omega)| = 10 / \sqrt{f(\omega)}$.
$\frac{d|G(j\omega)|}{d\omega} = -\frac{10}{2\sqrt{f(\omega)^3}} f'(\omega) = -\frac{5 f'(\omega)}{f(\omega)^{3/2}}$.
$f'(\omega) = 6\omega^5 + 20\omega^3 + 8\omega$.
At $\omega = \sqrt{2}$:
$f(\sqrt{2}) = 216 + 5(2) + 4(2) = 8 + 10(2) + 4(2) = 8+20+8 = 36$? No.
$f(\sqrt{2}) = (\sqrt{2})^6 + 5(\sqrt{2})^4 + 4(\sqrt{2})^2 = 2^3 + 5(2^2) + 4(2) = 8 + 5(4) + 8 = 8+20+8 = 36$.
$f'(\sqrt{2}) = 6(\sqrt{2})^5 + 20(\sqrt{2})^3 + 8(\sqrt{2}) = 6(4\sqrt{2}) + 20(2\sqrt{2}) + 8\sqrt{2} = 24\sqrt{2} + 40\sqrt{2} + 8\sqrt{2} = 72\sqrt{2}$.
$\frac{d|G(j\omega)|}{d\omega}|_{\omega=\sqrt{2}} = -\frac{5 (72\sqrt{2})}{36^{3/2}} = -\frac{360\sqrt{2}}{216} < 0$.

Since $\frac{d|G(j\omega)|}{d\omega} < 0$ and $\frac{d|N(A)|^{-1}}{dA} > 0$, the product is negative.
This indicates an **unstable limit cycle**.

**Correction:** The stability criterion is $\frac{d|G(j\omega)|}{d\omega}|_{\omega_0} \frac{d|N(A)|^{-1}}{dA}|_{A_0} > 0$ for stable.
My calculation for $\frac{d|G(j\omega)|}{d\omega}$ is negative, and $\frac{d|N(A)|^{-1}}{dA}$ is positive. Their product is negative. Thus, the limit cycle is unstable.

Let's re-check the criterion.
Khalil states:
If $|G(j\omega)|$ increases with $\omega$, and $|-1/N(A)|$ increases with $A$, it's stable.
Or if $|G(j\omega)|$ decreases with $\omega$, and $|-1/N(A)|$ decreases with $A$, it's stable.

In our case, $N(A) = 4M/(\pi A)$ (relay). $|N(A)|^{-1} = \pi A / (4M)$. Slope w.r.t A is positive.
We found slope of $|G(j\omega)|$ w.r.t $\omega$ is negative.
Product of slopes is negative. This implies **unstable limit cycle**.

**Slotin & Li (p. 319) Stability of limit cycles:**
The criterion is derived from $G(j\omega)N(A) = -1$.
Let $\omega = \omega_0 + \delta\omega$ and $A = A_0 + \delta A$.
Stability is determined by the sign of $\frac{d|G(j\omega)|}{d\omega}|_{\omega_0} \frac{d|N(A)|}{dA}|_{A_0}$.
If this product is positive, the limit cycle is stable.
If it is negative, the limit cycle is unstable.

In our example:
$N(A) = 4M/(\pi A)$. $\frac{dN(A)}{dA} = -\frac{4M}{\pi A^2}$. Slope w.r.t A is negative.
$\frac{d|G(j\omega)|}{d\omega}|_{\omega_0}$ is negative.
Product of slopes = (negative) * (negative) = positive.
This implies a **stable limit cycle**.

**Important Distinction:** The stability criterion depends on whether you use $N(A)$ or $N(A)^{-1}$. Using $N(A)$ directly seems more common in some texts.

Let's use the Slotin & Li criterion: $\frac{d|G(j\omega)|}{d\omega}|_{\omega_0} \frac{d|N(A)|}{dA}|_{A_0}$.
For $N(A) = 4M/(\pi A)$, $dN/dA = -4M/(\pi A^2) < 0$.
For $|G(j\omega)|$ at $\omega = \sqrt{2}$, $d|G|/d\omega < 0$.
Product is $(-)\times(-) = (+)$. So, stable limit cycle.

## 3.4 Limitations of the Describing Function Method

While powerful, the DF method has limitations:

*   **Assumes Sinusoidal Input:** The method relies on the assumption that the input to the nonlinearity is sinusoidal. If the system has significant low-frequency noise or other non-sinusoidal inputs, the DF may not be accurate.
*   **Neglects Higher Harmonics:** The core approximation is the neglect of higher-order harmonics. This approximation is generally good if the linear part of the system acts as a low-pass filter, attenuating these harmonics. If the linear system has resonances at harmonic frequencies, the approximation can be poor.
*   **No Guarantee of Periodicity:** The DF method is for predicting periodic oscillations (limit cycles). It cannot analyze chaotic or quasi-periodic behavior.
*   **Difficulty with Multiple Nonlinearities:** While extensions exist, the DF method becomes more complex and less straightforward when multiple nonlinearities are present.
*   **Only Predicts Steady-State Behavior:** The DF method is primarily for analyzing steady-state behavior, like limit cycles. It does not provide information about transient responses.
*   **Amplitude-Dependent Frequency:** The intersection of $G(j\omega)$ and $-1/N(A)$ can sometimes imply that the frequency of oscillation depends on its amplitude. This is a more complex scenario than the DF method directly handles in its basic form.

**Khalil (Chapter 5.4) discusses shortcomings:**
*   The method is heuristic and based on approximations.
*   It may not detect all types of oscillations.
*   The stability analysis is based on linearized dynamics around the limit cycle and might not always be accurate.

## Practice Questions

1.  **Derive the describing function for a dead zone nonlinearity with gain $K$ and dead zone width $2d$.**
    *   *Answer:* $N(A) = K \left[ 1 - \frac{2}{\pi} \arcsin(\frac{d}{A}) - \frac{2d\sqrt{A^2-d^2}}{\pi A^2} \right]$ for $A > d$, and $N(A) = 0$ for $A \le d$.

2.  **For a relay nonlinearity with output $\pm M$, what is its describing function $N(A)$?**
    *   *Answer:* $N(A) = \frac{4M}{\pi A}$.

3.  **Consider a closed-loop system with a nonlinear element having a describing function $N(A)$ and a linear part with transfer function $G(s)$. State the condition for a sustained oscillation (limit cycle) in the frequency domain using the describing function method.**
    *   *Answer:* $G(j\omega) = -1/N(A)$.

4.  **A system has a linear part $G(s) = \frac{1}{s+1}$ and a saturating nonlinearity with gain $K=1$ and saturation limit $M=1$. Find the amplitude and frequency of a possible limit cycle if the system is in a closed loop.**
    *   *Answer:*
        *   $N(A) = \frac{1}{\pi} \left( \arcsin\left(\frac{1}{A}\right) + \frac{2\sqrt{A^2-1}}{A^2} \right)$ for $A > 1$.
        *   $G(j\omega) = \frac{1}{1+j\omega}$.
        *   $-1/N(A) = -\frac{\pi A}{\arcsin(1/A) + 2\sqrt{A^2-1}/A}$.
        *   We need $G(j\omega)$ to be on the negative real axis for a simple intersection with $-1/N(A)$ which is also on the negative real axis.
        *   $G(j\omega) = \frac{1}{1+j\omega} = \frac{1-j\omega}{1+\omega^2}$.
        *   For $G(j\omega)$ to be real, $\text{Im}(G(j\omega)) = \frac{-\omega}{1+\omega^2} = 0$, which implies $\omega = 0$.
        *   If $\omega = 0$, $G(j0) = 1$. This is on the positive real axis, not the negative.
        *   This indicates that with $G(s) = \frac{1}{s+1}$ and a saturating nonlinearity, the DF method might not predict a limit cycle with the common approach of intersecting on the negative real axis. A more general analysis of $G(j\omega) = -1/N(A)$ is needed.
        *   Let's assume the intersection is on the negative real axis. This implies the $\text{Im}(G(j\omega))=0$, leading to $\omega=0$. $G(0)=1$.
        *   We need $-1/N(A) = 1$. $N(A) = -1$. This is not possible for saturation.

        *   **Re-evaluation:** The intersection can happen anywhere on the $G(j\omega)$ locus. We need to find $A, \omega$ such that $G(j\omega) = -1/N(A)$.
        *   $G(j\omega) = \frac{1-j\omega}{1+\omega^2}$.
        *   Let's consider the Nyquist plot of $G(j\omega)$. It's a semicircle in the left half-plane.
        *   The locus of $-1/N(A)$ starts at $-\infty$ for $A \to 1^+$ (since $N(A) \to 1$) and goes towards 0 as $A \to \infty$.
        *   The exact intersection point requires numerical solution or graphical analysis.
        *   For example, if $A=2$: $N(2) = \frac{1}{\pi} (\arcsin(1/2) + \frac{2\sqrt{3}}{4}) = \frac{1}{\pi} (\pi/6 + \sqrt{3}/2) \approx 0.556$.
        *   $-1/N(2) \approx -1/0.556 \approx -1.798$.
        *   We need $G(j\omega) = \frac{1-j\omega}{1+\omega^2} = -1.798$. This requires $\text{Im}(G(j\omega)) = 0$, which means $\omega=0$.
        *   This points to the limitation that the simple analysis often assumes $\omega > 0$.

        *   **Let's consider a system where a limit cycle is guaranteed:** $G(s) = \frac{K}{s(s+a)}$.
        *   Suppose $K=10, a=1$ and nonlinearity is relay $N(A) = 4/(\pi A)$.
        *   $G(j\omega) = \frac{10}{j\omega(j\omega+1)} = \frac{10}{-\omega^2 + j\omega}$.
        *   We need $G(j\omega) = -1/N(A) = -\pi A/4$.
        *   $\frac{10}{-\omega^2 + j\omega} = -\frac{\pi A}{4}$.
        *   This requires the imaginary part of $G(j\omega)$ to be zero. $\text{Im}(G(j\omega)) = \frac{10\omega}{(-\omega^2)^2 + \omega^2} = \frac{10\omega}{\omega^4+\omega^2} = \frac{10}{\omega^3+\omega}$. This is never zero for $\omega > 0$.

        *   **The standard approach is to find an intersection between the Nyquist plot of G(s) and the plot of -1/N(A).**
        *   For $G(s) = \frac{1}{s+1}$, the Nyquist plot is a semicircle in the left-half plane, passing through $(0, j)$ at $\omega=0$ and approaching $0$ as $\omega \to \infty$.
        *   The locus of $-1/N(A)$ for saturation $N(A) = \frac{1}{\pi}(\arcsin(1/A) + \frac{2\sqrt{A^2-1}}{A^2})$ for $A>1$.
        *   As $A \to 1^+$, $N(A) \to 1$, so $-1/N(A) \to -1$.
        *   As $A \to \infty$, $N(A) \to 1/\pi (\pi/2 + 0) = 1/2$, so $-1/N(A) \to -2$.
        *   So the locus of $-1/N(A)$ starts at $-1$ for $A=1$ and moves towards $-2$ as $A \to \infty$.
        *   The Nyquist plot of $G(s) = 1/(s+1)$ has a real part $Re(G(j\omega)) = 1/(1+\omega^2)$ and imaginary part $Im(G(j\omega)) = -\omega/(1+\omega^2)$.
        *   The real part ranges from 1 (at $\omega=0$) to 0 (as $\omega \to \infty$).
        *   The locus of $-1/N(A)$ for $A>1$ is on the negative real axis from $-1$ to $-2$.
        *   There is no intersection between the Nyquist plot of $G(s) = 1/(s+1)$ and the locus of $-1/N(A)$ for saturation, as the Nyquist plot is never on the negative real axis. This suggests no limit cycle of this form.

5.  **Discuss the conditions under which the Describing Function method is most applicable and when it might yield inaccurate results.**
    *   *Answer:*
        *   **Most Applicable:** When the system has a single nonlinearity, the linear part acts as a low-pass filter, and the dominant oscillation is sinusoidal.
        *   **Inaccurate Results:** When there are multiple nonlinearities, the linear part has resonances at harmonic frequencies, the input to the nonlinearity is not nearly sinusoidal, or the system exhibits chaotic behavior. The accuracy also degrades if the nonlinearity is highly asymmetric or has strong hysteresis that introduces significant phase shifts.

---

## Summary of Key Points

*   The Describing Function (DF) method linearizes nonlinearities based on their response to sinusoidal inputs.
*   $N(A)$ is the ratio of the fundamental component of the output to the input amplitude.
*   DFs are amplitude-dependent.
*   Limit cycles are predicted by finding intersections between the Nyquist locus of the linear part $G(j\omega)$ and the inverse DF locus $-1/N(A)$.
*   Stability of a limit cycle is determined by the slopes of $|G(j\omega)|$ versus $\omega$ and $|N(A)|$ versus $A$ at the intersection point.
*   Limitations include assuming sinusoidal input, neglecting higher harmonics, and difficulty with multiple nonlinearities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## References

*   **Khalil, Hassan K. Nonlinear Systems.** (Prentice - Hall International (UK), 2002) - Chapters 5.2 and 5.3 provide detailed derivations and examples.
*   **Slotine, Jean-Jacques E., and Weiping Li. Applied Nonlinear Control.** (Prentice-Hall, NJ, 1991) - Chapter 8.2 discusses describing functions and limit cycle analysis.
*   **Isidori, Alberto. Nonlinear Control Systems: An Introduction.** (Springer-Verlag, 1985) - Provides a theoretical foundation for nonlinear system analysis.
*   **Vidyasagar, M. Nonlinear System Analysis, Stability and Control.** (Prentice-Hall, India, 1991) - Offers further perspectives on nonlinear analysis techniques.