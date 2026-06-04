---
title: "Bilinear 
Transformation"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe992"
status: "completed"
scrapedAt: "2026-05-23T17:55:32.978Z"
---
# Module 2: Design of FIR Filters - Bilinear Transformation

This module delves into the design of Finite Impulse Response (FIR) filters. While FIR filters are typically designed directly in the digital domain, understanding transformations is crucial for relating analog filter design techniques to digital filter design. This topic, the Bilinear Transformation, is primarily associated with the design of Infinite Impulse Response (IIR) filters, but its study within the context of FIR filter design is to understand the broader landscape of filter design and to appreciate the nuances of different transformation methods.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of analog-to-digital filter transformation.
*   Explain the Bilinear Transformation and its mathematical derivation.
*   Analyze the properties of the Bilinear Transformation, including the mapping of the s-plane to the z-plane and the effect on frequency response.
*   Apply the Bilinear Transformation to design digital filters from analog filter prototypes.
*   Discuss the advantages and disadvantages of the Bilinear Transformation compared to other transformation methods.
*   Recognize how transformations, while primarily for IIR, inform the understanding of digital filter design principles, which can indirectly relate to FIR filter design considerations like stability and linear phase.

## 1. Introduction to Analog-to-Digital Filter Transformation

While FIR filters are designed directly in the digital domain, understanding transformations from analog filters is a fundamental concept in Digital Signal Processing (DSP). It allows us to leverage well-established analog filter design techniques (like Butterworth, Chebyshev, etc.) for designing digital filters.

*   **Why Transform?**
    *   Leverage decades of established analog filter design theory and techniques.
    *   Design analog prototypes with desired characteristics (e.g., passband ripple, stopband attenuation, transition bandwidth).
    *   Convert these analog prototypes into digital filters that meet similar specifications.

*   **Types of Transformations:**
    *   Impulse Invariance
    *   Bilinear Transformation
    *   Step Invariance

This topic focuses on the **Bilinear Transformation**, which is particularly important for IIR filter design due to its ability to map stable analog filters to stable digital filters and its preservation of causality.

## 2. The Bilinear Transformation

The Bilinear Transformation is a mapping from the continuous-time complex variable 's' (Laplace domain) to the discrete-time complex variable 'z' (z-domain).

### 2.1 Mathematical Derivation

The Bilinear Transformation is derived by approximating the integral in the Laplace transform definition using the **trapezoidal rule**.

Let $x(t)$ be a continuous-time signal and $x[n]$ be its sampled version. The impulse response of a continuous-time system is $h(t)$ and the output is $y(t) = x(t) * h(t)$. In the discrete-time domain, $y[n] = x[n] * h[n]$.

Consider the integral defining the Laplace transform:
$X(s) = \int_{-\infty}^{\infty} x(t) e^{-st} dt$

The trapezoidal rule for approximating the integral of $x(t)$ from $t_1$ to $t_2$ is:
$\int_{t_1}^{t_2} x(t) dt \approx \frac{x(t_1) + x(t_2)}{2} (t_2 - t_1)$

In discrete-time, we consider intervals of length $T$ (sampling period). Let $t = nT$. We can approximate the continuous-time impulse response $h(t)$ by considering its values at discrete time instances $nT$.

A common derivation involves considering the relationship between the continuous-time integrator and the discrete-time integrator. An analog integrator has a transfer function of $1/s$. A discrete-time integrator can be approximated using the trapezoidal rule.

Let's consider the forward difference and backward difference approximations for derivatives. For the Bilinear Transformation, we use the trapezoidal rule for integration.

Consider the integral:
$y(t) = \int_{-\infty}^{t} x(\tau) d\tau$
$Y(s) = \frac{X(s)}{s}$

Using the trapezoidal rule to approximate the integral $y[n] = \sum_{k=-\infty}^{n} x[k]$:
$y[n] \approx y[n-1] + \frac{x[n] + x[n-1]}{2} T$

Taking the Z-transform on both sides:
$Y(z) = z^{-1}Y(z) + \frac{1+z^{-1}}{2} T X(z)$

$Y(z)(1 - z^{-1}) = \frac{T}{2} (1+z^{-1}) X(z)$

$\frac{Y(z)}{X(z)} = \frac{T}{2} \frac{1+z^{-1}}{1-z^{-1}}$

This is not the Bilinear Transformation directly. The standard Bilinear Transformation is derived by relating the frequency response.

The Bilinear Transformation is defined by the substitution:
$s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$

Alternatively, it's often expressed as:
$z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s}$

Let $K = T/2$. Then:
$z = \frac{1 + Ks}{1 - Ks}$

Rearranging for $s$:
$z(1 - Ks) = 1 + Ks$
$z - zKs = 1 + Ks$
$z - 1 = Ks + zKs$
$z - 1 = Ks(1 + z)$
$s = \frac{1}{K} \frac{z-1}{z+1}$
$s = \frac{2}{T} \frac{z-1}{z+1}$

**Key Takeaway:** The Bilinear Transformation maps the s-plane (continuous time) to the z-plane (discrete time).

### 2.2 Mapping of the s-plane to the z-plane

The Bilinear Transformation establishes a specific relationship between the complex variable $s = \sigma + j\omega$ and $z = re^{j\Omega}$.

Substitute $s = \sigma + j\omega$ into the transformation $z = \frac{1 + Ks}{1 - Ks}$:

$z = \frac{1 + K(\sigma + j\omega)}{1 - K(\sigma + j\omega)}$
$z = \frac{(1 + K\sigma) + jK\omega}{(1 - K\sigma) - jK\omega}$

To find the magnitude and phase of $z$:

$|z| = \frac{|(1 + K\sigma) + jK\omega|}{|(1 - K\sigma) - jK\omega|} = \frac{\sqrt{(1 + K\sigma)^2 + (K\omega)^2}}{\sqrt{(1 - K\sigma)^2 + (K\omega)^2}}$

Consider specific regions of the s-plane:

*   **The jω-axis (Imaginary axis) of the s-plane:** This corresponds to the frequency response of analog filters. Here, $s = j\omega$, and $\sigma = 0$.
    $z = \frac{1 + jK\omega}{1 - jK\omega}$

    $|z| = \frac{\sqrt{1^2 + (K\omega)^2}}{\sqrt{1^2 + (K\omega)^2}} = 1$

    The phase of $z$ is:
    $\arg(z) = \arctan\left(\frac{K\omega}{1}\right) - \arctan\left(\frac{-K\omega}{1}\right)$
    $\arg(z) = \arctan(K\omega) - (-\arctan(K\omega))$
    $\arg(z) = 2 \arctan(K\omega)$

    Since $|z|=1$, we can write $z = e^{j\Omega}$.
    $e^{j\Omega} = \frac{1 + jK\omega}{1 - jK\omega}$

    This shows that the entire $j\omega$-axis of the s-plane maps to the **unit circle** in the z-plane ($|z|=1$). This is a crucial property as it means that the frequency response of the analog filter is mapped to the frequency response of the digital filter.

    The mapping of frequency is:
    $\Omega = 2 \arctan(K\omega) = 2 \arctan\left(\frac{T\omega}{2}\right)$

    This relationship is non-linear, meaning that the frequency scale is warped.

*   **The left half of the s-plane (LHP):** This is where stable analog systems reside, i.e., $\sigma < 0$.
    Let $s = -\sigma_0 + j\omega$, where $\sigma_0 > 0$.
    $z = \frac{1 + K(-\sigma_0 + j\omega)}{1 - K(-\sigma_0 + j\omega)} = \frac{(1 - K\sigma_0) + jK\omega}{(1 + K\sigma_0) - jK\omega}$

    $|z| = \frac{\sqrt{(1 - K\sigma_0)^2 + (K\omega)^2}}{\sqrt{(1 + K\sigma_0)^2 + (K\omega)^2}}$

    Since $\sigma_0 > 0$ and $K > 0$, $1 + K\sigma_0 > 1$.
    Also, $1 - K\sigma_0$ can be positive, zero, or negative.

    If $\sigma_0 > 0$ (LHP), then $K\sigma_0 > 0$.
    Let's consider the condition for $|z| < 1$.
    $|z|^2 = \frac{(1 - K\sigma_0)^2 + (K\omega)^2}{(1 + K\sigma_0)^2 + (K\omega)^2}$

    For $|z|^2 < 1$:
    $(1 - K\sigma_0)^2 + (K\omega)^2 < (1 + K\sigma_0)^2 + (K\omega)^2$
    $(1 - K\sigma_0)^2 < (1 + K\sigma_0)^2$
    $1 - 2K\sigma_0 + K^2\sigma_0^2 < 1 + 2K\sigma_0 + K^2\sigma_0^2$
    $-2K\sigma_0 < 2K\sigma_0$
    $0 < 4K\sigma_0$

    Since $K > 0$ and $\sigma_0 > 0$, this inequality is always true. Therefore, the **left half of the s-plane (LHP) maps inside the unit circle** in the z-plane ($|z|<1$).

*   **The right half of the s-plane (RHP):** This is where unstable analog systems reside, i.e., $\sigma > 0$.
    If $\sigma > 0$, then $K\sigma > 0$.
    Following the same $|z|^2$ analysis:
    $(1 - K\sigma)^2 < (1 + K\sigma)^2$
    $1 - 2K\sigma + K^2\sigma^2 < 1 + 2K\sigma + K^2\sigma^2$
    $0 < 4K\sigma$
    This inequality holds for $\sigma > 0$.
    However, we need to be careful with the term $(1-K\sigma)^2$. If $1 - K\sigma < 0$, i.e., $\sigma > 1/K$, then $|1-K\sigma| > |1+K\sigma|$ is not necessarily true.

    Let's re-examine the mapping: $z = \frac{1 + Ks}{1 - Ks}$.
    If $\sigma > 0$, then $1 - Ks$ will have a larger magnitude in the denominator if $K\sigma$ is significant.
    Consider $s = \sigma + j\omega$ with $\sigma > 0$.
    $z = \frac{1 + K\sigma + jK\omega}{1 - K\sigma - jK\omega}$
    The denominator's real part is $1-K\sigma$. If $1-K\sigma < 0$, the denominator's magnitude can be larger.

    Let's look at the mapping $s = \frac{1}{K} \frac{z-1}{z+1}$.
    If $\sigma > 0$, we want to find the region for $z$.
    $s = \frac{1}{K} \frac{z-1}{z+1}$
    $Ks = \frac{z-1}{z+1}$
    $Ks(z+1) = z-1$
    $Ksz + Ks = z-1$
    $Ks + 1 = z - Ksz$
    $Ks + 1 = z(1 - Ks)$
    $z = \frac{1+Ks}{1-Ks}$ (back to the original form)

    Let $z = re^{j\Omega}$.
    $s = \frac{1}{K} \frac{re^{j\Omega}-1}{re^{j\Omega}+1}$
    For $\sigma > 0$, we need the real part of $s$ to be positive.
    Real part of $\frac{z-1}{z+1}$ for $z=re^{j\Omega}$:
    $\frac{z-1}{z+1} = \frac{re^{j\Omega}-1}{re^{j\Omega}+1} = \frac{(r\cos\Omega - 1) + jr\sin\Omega}{(r\cos\Omega + 1) + jr\sin\Omega}$
    Multiply by conjugate of denominator:
    $\frac{((r\cos\Omega - 1) + jr\sin\Omega)((r\cos\Omega + 1) - jr\sin\Omega)}{((r\cos\Omega + 1) + jr\sin\Omega)((r\cos\Omega + 1) - jr\sin\Omega)}$
    Numerator real part: $(r\cos\Omega - 1)(r\cos\Omega + 1) + (r\sin\Omega)(r\sin\Omega)$
    $= r^2\cos^2\Omega - 1 + r^2\sin^2\Omega = r^2(\cos^2\Omega + \sin^2\Omega) - 1 = r^2 - 1$
    Denominator magnitude squared: $(r\cos\Omega + 1)^2 + (r\sin\Omega)^2 = r^2\cos^2\Omega + 2r\cos\Omega + 1 + r^2\sin^2\Omega = r^2 + 2r\cos\Omega + 1$
    So, $\frac{z-1}{z+1} = \frac{r^2-1}{(r\cos\Omega + 1)^2 + (r\sin\Omega)^2} + j \frac{(r\sin\Omega)(r\cos\Omega + 1) - (r\cos\Omega - 1)(r\sin\Omega)}{...}$

    The real part of $s$ is $\frac{1}{K} \times \text{Real part of } \frac{z-1}{z+1}$.
    $\sigma = \frac{1}{K} \frac{r^2-1}{(r\cos\Omega + 1)^2 + (r\sin\Omega)^2}$

    For $\sigma > 0$, we need $\frac{r^2-1}{(r\cos\Omega + 1)^2 + (r\sin\Omega)^2} > 0$.
    The denominator is always positive (unless $z=-1$, where it's zero).
    So, we need $r^2 - 1 > 0$, which means $r > 1$.
    Therefore, the **right half of the s-plane (RHP) maps outside the unit circle** in the z-plane ($|z|>1$).

*   **The imaginary axis of the z-plane (unit circle):** This corresponds to the frequency response of digital filters.
    Let $z = e^{j\Omega}$.
    $s = \frac{2}{T} \frac{e^{j\Omega}-1}{e^{j\Omega}+1}$
    $e^{j\Omega} - 1 = (\cos\Omega + j\sin\Omega) - 1 = (\cos\Omega - 1) + j\sin\Omega$
    $e^{j\Omega} + 1 = (\cos\Omega + j\sin\Omega) + 1 = (\cos\Omega + 1) + j\sin\Omega$

    $\frac{e^{j\Omega}-1}{e^{j\Omega}+1} = \frac{(\cos\Omega - 1) + j\sin\Omega}{(\cos\Omega + 1) + j\sin\Omega}$
    Multiply by conjugate of denominator:
    $= \frac{((\cos\Omega - 1) + j\sin\Omega)((\cos\Omega + 1) - j\sin\Omega)}{(\cos\Omega + 1)^2 + \sin^2\Omega}$
    Numerator real part: $(\cos\Omega - 1)(\cos\Omega + 1) + \sin^2\Omega = \cos^2\Omega - 1 + \sin^2\Omega = (\cos^2\Omega + \sin^2\Omega) - 1 = 1 - 1 = 0$.
    This confirms that the real part of $\frac{e^{j\Omega}-1}{e^{j\Omega}+1}$ is zero.

    Numerator imaginary part: $\sin\Omega(\cos\Omega + 1) - (\cos\Omega - 1)\sin\Omega$
    $= \sin\Omega\cos\Omega + \sin\Omega - (\sin\Omega\cos\Omega - \sin\Omega)$
    $= \sin\Omega\cos\Omega + \sin\Omega - \sin\Omega\cos\Omega + \sin\Omega = 2\sin\Omega$
    Denominator magnitude squared: $\cos^2\Omega + 2\cos\Omega + 1 + \sin^2\Omega = 2 + 2\cos\Omega = 2(1+\cos\Omega)$

    So, $\frac{e^{j\Omega}-1}{e^{j\Omega}+1} = \frac{2\sin\Omega}{2(1+\cos\Omega)} j = \frac{\sin\Omega}{1+\cos\Omega} j = \tan(\Omega/2) j$.
    (Using half-angle identities: $\sin\Omega = 2\sin(\Omega/2)\cos(\Omega/2)$, $1+\cos\Omega = 2\cos^2(\Omega/2)$)
    $\frac{2\sin(\Omega/2)\cos(\Omega/2)}{2\cos^2(\Omega/2)} = \tan(\Omega/2)$.

    Therefore, $s = \frac{2}{T} \tan(\Omega/2) j$.
    Comparing with $s = \sigma + j\omega$, we have $\sigma = 0$ and $\omega = \frac{2}{T} \tan(\Omega/2)$.
    This is the inverse of the frequency mapping derived earlier.

    **Frequency Warping:**
    The mapping $\Omega = 2 \arctan\left(\frac{T\omega}{2}\right)$ shows that the digital frequency $\Omega$ is not linearly proportional to the analog frequency $\omega$. High frequencies in the analog domain are compressed into a smaller range of digital frequencies.

### 2.3 Effect on Filter Characteristics

*   **Stability:** As shown above, the Bilinear Transformation maps the stable region of the s-plane (LHP) to the stable region of the z-plane (inside the unit circle). Thus, a stable analog filter will be transformed into a stable digital filter. This is a major advantage.
*   **Causality:** The transformation preserves causality.
*   **Frequency Response:** The $j\omega$-axis of the s-plane maps to the unit circle $|z|=1$ of the z-plane. This means that the frequency response is preserved, but the frequency scale is warped.
*   **Magnitude Response:** Generally, the magnitude response shape is preserved, but the frequencies at which specific magnitudes occur are altered due to warping.
*   **Phase Response:** The phase response is also transformed.
*   **Non-linear Phase:** Due to frequency warping, filters designed using the Bilinear Transformation (unless specifically designed to have flat phase characteristics in the analog domain, like Bessel filters) will generally not have linear phase in the digital domain. This is a disadvantage if linear phase is a requirement.
*   **Pre-warping:** To counteract frequency warping, a process called "pre-warping" is used. If a specific cutoff frequency $\omega_c$ is desired in the digital filter, the analog prototype must be designed with a cutoff frequency $\omega_{a}$ such that $\omega_c = 2 \arctan(\frac{T\omega_a}{2})$. This can be rewritten as $\omega_a = \frac{2}{T} \tan(\frac{\omega_c}{2})$. This means the analog cutoff frequency is chosen to be higher than the desired digital cutoff frequency.

### 2.4 Design Procedure using Bilinear Transformation

The design of a digital filter using the Bilinear Transformation involves the following steps:

1.  **Specify Digital Filter Requirements:** Define the desired characteristics of the digital filter, such as cutoff frequencies, passband ripple, stopband attenuation, and filter type (low-pass, high-pass, band-pass, band-stop).
2.  **Pre-warp Critical Frequencies:** If specific cutoff frequencies are critical, pre-warp them to account for the frequency warping effect of the Bilinear Transformation. For a digital cutoff frequency $\Omega_c$, the corresponding analog cutoff frequency $\omega_a$ is given by:
    $\omega_a = \frac{2}{T} \tan\left(\frac{\Omega_c}{2}\right)$
    For a band-pass filter with cutoff frequencies $\Omega_1$ and $\Omega_2$, the analog cutoff frequencies are:
    $\omega_{a1} = \frac{2}{T} \tan\left(\frac{\Omega_1}{2}\right)$
    $\omega_{a2} = \frac{2}{T} \tan\left(\frac{\Omega_2}{2}\right)$
    The sampling period $T$ is related to the normalized digital frequency $\Omega$ by $\Omega = \omega T$. If $\Omega$ is given in rad/sample, then $T=1$.
3.  **Design Analog Filter Prototype:** Design a continuous-time (analog) filter that meets the pre-warped specifications. Common analog filter types include:
    *   Butterworth (maximally flat passband)
    *   Chebyshev Type I (equiripple in passband, monotonic in stopband)
    *   Chebyshev Type II (monotonic in passband, equiripple in stopband)
    *   Elliptic (equiripple in both passband and stopband)
    Select the filter type based on the trade-offs between passband flatness, transition band steepness, and phase linearity.
4.  **Obtain Analog Transfer Function $H(s)$:** Determine the transfer function of the designed analog filter.
5.  **Apply Bilinear Transformation:** Substitute $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ into $H(s)$ to obtain the digital filter transfer function $H(z)$.
    Let $s = \frac{2}{T} \frac{z-1}{z+1}$. Substitute this into $H(s)$:
    $H(z) = H\left(\frac{2}{T} \frac{z-1}{z+1}\right)$
    This substitution will result in a rational function of $z$, which is the digital filter's transfer function.
6.  **Analyze Digital Filter:** Evaluate the characteristics of the resulting digital filter, such as its frequency response, magnitude response, phase response, and stability.

### 2.5 Advantages and Disadvantages of the Bilinear Transformation

**Advantages:**

*   **Preserves Stability:** Maps stable analog systems (LHP) to stable digital systems (inside the unit circle).
*   **Preserves Causality:** Transforms causal analog systems to causal digital systems.
*   **Finite Impulse Response (FIR) to FIR:** The Bilinear Transformation applied to an FIR analog filter results in an FIR digital filter if $T$ is considered. However, its primary use is for IIR design from analog IIR filters.
*   **Frequency Response Mapping:** The entire $j\omega$-axis maps to the unit circle $|z|=1$, allowing direct mapping of analog frequency response characteristics.
*   **No Aliasing:** Unlike impulse invariance, the Bilinear Transformation does not suffer from aliasing as it does not involve direct sampling of the impulse response.

**Disadvantages:**

*   **Frequency Warping:** The non-linear mapping between analog and digital frequencies can be a significant issue, distorting the frequency response. This requires pre-warping of critical frequencies.
*   **Non-linear Phase:** Filters designed using this method generally do not have linear phase unless the analog prototype was specifically designed for it. This is a major drawback for applications requiring constant group delay (e.g., data transmission, audio processing).

## 3. Bilinear Transformation and FIR Filters (Contextual Relevance)

While the Bilinear Transformation is predominantly used for **IIR filter design**, it's important to understand its context within a module on FIR filters.

*   **Contrast with FIR Design:** FIR filters are typically designed directly in the digital domain using methods like the window method, frequency sampling, or optimal design (e.g., Parks-McClellan). These methods focus on directly synthesizing the desired coefficients from digital specifications, often with explicit control over linear phase.
*   **Understanding Transformations:** Studying transformations like Bilinear Transformation helps to understand the broader landscape of filter design. It highlights different approaches to achieving frequency selectivity and the trade-offs involved. For instance, the frequency warping issue with Bilinear Transformation emphasizes why direct digital design methods are preferred when linear phase is critical for FIR filters.
*   **Analog FIR Filter Design:** While less common, it is possible to design analog FIR filters. If one were to transform an analog FIR filter using the Bilinear Transformation, the resulting digital filter would also be FIR. However, this is not the typical application or motivation for learning the Bilinear Transformation. The key takeaway is that transformations can be applied to various analog filter types, and the nature of the resulting digital filter depends on the analog prototype.

**Connecting to FIR Design (CO2):** While Bilinear Transformation itself isn't the primary tool for designing FIR filters with specific specifications, understanding its behavior (like phase distortion) informs the choice of design methods for FIR filters where linear phase is critical (a common requirement for FIR filters). Knowing the limitations of transformations helps appreciate why direct digital FIR design methods are powerful.

## 4. Examples

Let's illustrate with an example, though this is more typical for IIR design.

**Example:** Design a digital low-pass filter with a cutoff frequency $\Omega_c = \pi/2$ rad/sample, using a first-order Butterworth analog prototype. Assume $T=1$.

1.  **Digital Specification:** $\Omega_c = \pi/2$ rad/sample.
2.  **Pre-warp:**
    $\omega_a = \frac{2}{T} \tan\left(\frac{\Omega_c}{2}\right) = \frac{2}{1} \tan\left(\frac{\pi/2}{2}\right) = 2 \tan(\pi/4) = 2 \times 1 = 2$ rad/s.
3.  **Analog Prototype (First-order Butterworth):**
    A first-order Butterworth low-pass filter has the transfer function:
    $H(s) = \frac{\omega_a}{s + \omega_a}$
    With $\omega_a = 2$:
    $H(s) = \frac{2}{s + 2}$
4.  **Apply Bilinear Transformation:**
    Substitute $s = \frac{1 - z^{-1}}{1 + z^{-1}}$ (since $T=1$).
    $H(z) = \frac{2}{\frac{1 - z^{-1}}{1 + z^{-1}} + 2}$
    $H(z) = \frac{2}{\frac{1 - z^{-1} + 2(1 + z^{-1})}{1 + z^{-1}}}$
    $H(z) = \frac{2(1 + z^{-1})}{1 - z^{-1} + 2 + 2z^{-1}}$
    $H(z) = \frac{2(1 + z^{-1})}{3 + z^{-1}}$

    To express in terms of positive powers of $z$:
    $H(z) = \frac{2(1 + z^{-1})}{3 + z^{-1}} \times \frac{z}{z} = \frac{2(z + 1)}{3z + 1}$
    $H(z) = \frac{2z + 2}{3z + 1}$

    This is the transfer function of the designed digital IIR filter.

**Important Note:** If we were to design an FIR filter with a cutoff at $\Omega_c = \pi/2$, we would typically use a window method and obtain coefficients directly without involving analog prototypes or the Bilinear Transformation.

## 5. Practice Questions and Exercises

**Question 1:**
The Bilinear Transformation maps the $j\omega$-axis of the s-plane to which curve in the z-plane?
(a) The unit circle $|z|=1$
(b) The real axis
(c) The imaginary axis
(d) The unit circle $|z|=0$

**Answer 1:** (a) The unit circle $|z|=1$.

**Question 2:**
What is the primary disadvantage of the Bilinear Transformation when designing digital filters, especially for applications requiring constant group delay?
(a) It does not preserve stability.
(b) It causes aliasing.
(c) It introduces frequency warping and non-linear phase.
(d) It can only be used for FIR filters.

**Answer 2:** (c) It introduces frequency warping and non-linear phase.

**Question 3:**
If a digital filter is required to have a cutoff frequency $\Omega_c = \pi/4$ rad/sample, and we are using the Bilinear Transformation with $T=1$, what is the corresponding analog cutoff frequency $\omega_a$ that the analog prototype must be designed with?

**Solution 3:**
The pre-warping formula is $\omega_a = \frac{2}{T} \tan\left(\frac{\Omega_c}{2}\right)$.
Given $\Omega_c = \pi/4$ and $T=1$:
$\omega_a = \frac{2}{1} \tan\left(\frac{\pi/4}{2}\right) = 2 \tan(\pi/8)$
Using the tangent half-angle identity $\tan(\theta/2) = \frac{1 - \cos\theta}{\sin\theta}$:
$\tan(\pi/8) = \frac{1 - \cos(\pi/4)}{\sin(\pi/4)} = \frac{1 - \frac{\sqrt{2}}{2}}{\frac{\sqrt{2}}{2}} = \frac{\frac{2-\sqrt{2}}{2}}{\frac{\sqrt{2}}{2}} = \frac{2-\sqrt{2}}{\sqrt{2}} = \frac{2\sqrt{2}-2}{2} = \sqrt{2}-1$
So, $\omega_a = 2(\sqrt{2}-1)$.

**Question 4:**
True or False: The Bilinear Transformation can be used to design FIR filters with perfectly linear phase.

**Answer 4:** False. While the analog prototype *could* have linear phase (e.g., Bessel filter), the frequency warping introduced by the Bilinear Transformation generally results in non-linear phase for the digital filter, especially if the analog prototype had a phase response that wasn't specifically chosen to compensate for warping. Direct digital design methods for FIR filters are preferred for guaranteed linear phase.

## 6. Important Points to Remember

*   **Bilinear Transformation:** $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ or $z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s}$.
*   **Key Mapping:** $j\omega$-axis (s-plane) $\rightarrow$ Unit Circle $|z|=1$ (z-plane).
*   **Stability Preservation:** LHP (s-plane) $\rightarrow$ Inside Unit Circle $|z|<1$ (z-plane).
*   **Frequency Warping:** Non-linear mapping $\Omega = 2 \arctan\left(\frac{T\omega}{2}\right)$.
*   **Pre-warping:** Essential to counteract frequency warping by designing the analog prototype with appropriately adjusted frequencies: $\omega_a = \frac{2}{T} \tan\left(\frac{\Omega_c}{2}\right)$.
*   **Primary Application:** Designing IIR digital filters from analog filter prototypes.
*   **Disadvantage for FIR:** While transformations can be applied to analog FIR filters, the Bilinear Transformation's frequency warping and non-linear phase characteristics make it less suitable for designing FIR filters where linear phase is a primary requirement. Direct digital design methods are preferred for FIR filters.
*   **Contrast with Impulse Invariance:** Impulse invariance samples the analog impulse response, which can lead to aliasing. Bilinear transformation avoids aliasing but introduces warping.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. Textbook and Reference Material Cross-Reference

*   **Ingle & Proakis (Cengage Learning):** Chapters on IIR filter design will extensively cover the Bilinear Transformation as a primary method. Look for sections discussing the mapping properties and design procedure.
*   **Downey (Think DSP):** While focused on Python, Downey's book provides intuitive explanations of DSP concepts. You might find analogies or practical examples of frequency warping.
*   **Oppenheim & Schafer (Pearson Education):** A foundational text. This book will provide a rigorous mathematical treatment of the Bilinear Transformation, including its derivation and mapping properties. Expect detailed analysis of the s-plane to z-plane mapping and frequency warping.
*   **Apte (Wiley):** Likely to cover the Bilinear Transformation in the context of IIR filter design, providing design examples and comparative analysis with other methods.
*   **Mitra (McGraw Hill):** Mitra's book is known for its practical approach and often includes algorithmic descriptions of filter design. Expect to see the Bilinear Transformation as a key algorithm for IIR filter design.
*   **Ifeachor & Jervis (Pearson Education):** Will likely present the Bilinear Transformation with a focus on practical applications and the steps involved in designing filters using this method.
*   **Salivahanan (McGraw Hill):** Similar to Mitra, Salivahanan's book would offer a comprehensive overview of filter design techniques, including the Bilinear Transformation.

## 8. Alignment with Course Outcomes

*   **CO1 (DFT, DFT-based filtering):** While not directly about DFT, understanding filter design principles (like the limitations of frequency response mapping) indirectly helps in understanding how filters operate and how their characteristics relate to frequency domain analysis performed using DFT.
*   **CO2 (Design linear phase FIR filters and IIR filters):** This topic directly addresses the "design IIR filters" part. By contrasting the Bilinear Transformation's tendency towards non-linear phase with the goal of linear phase FIR filters, it highlights the importance of choosing the correct design method for FIR filters. Understanding Bilinear Transformation's phase properties helps appreciate why direct FIR design is necessary for linear phase.
*   **CO3 (Realise filter structures):** The transfer function $H(z)$ obtained through the Bilinear Transformation is the basis for realizing FIR and IIR filter structures (e.g., Direct Form I, Direct Form II, Transposed forms). So, understanding the transformation is a precursor to realization.
*   **CO4 (Compute DFT efficiently, DSP processor architecture):** Less direct relevance. The emphasis here is on filter design itself, not the computational efficiency of DFT or processor architecture.

This topic, Bilinear Transformation, while primarily an IIR filter design technique, provides crucial context for understanding the different approaches to digital filter design and the inherent properties and limitations of each method. For FIR filter design, its main value is in highlighting the importance of direct digital design for achieving specific characteristics like linear phase.