---
title: "IIR Filter Design by Impulse Invariance"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe991"
status: "completed"
scrapedAt: "2026-05-23T17:55:32.267Z"
---
# Digital Signal Processing: Module 2 - Design of FIR Filters
## Topic: IIR Filter Design by Impulse Invariance

This topic falls under the broader theme of IIR (Infinite Impulse Response) filter design within FIR (Finite Impulse Response) filter design, which might seem counter-intuitive. However, the methods for designing IIR filters are often discussed in conjunction with FIR filter design due to shared principles and the ultimate goal of obtaining digital filters.

### Learning Outcomes Covered:

*   Understanding the principle of impulse invariance for IIR filter design.
*   Relating the impulse response of an analog filter to its digital counterpart.
*   Designing IIR filters using the impulse invariance method to meet specific specifications.
*   Understanding the limitations and potential issues associated with impulse invariance.

---

### 1. Introduction to IIR Filter Design

*   **IIR Filters:** These filters have an impulse response that theoretically lasts forever. Their transfer function, $H(z)$, typically has both poles and zeros.
*   **FIR Filters:** These filters have an impulse response that is finite in duration. Their transfer function, $H(z)$, only has zeros.
*   **Why study IIR design when the module is about FIR?** The study of different filter design techniques provides a broader understanding of digital filter synthesis. IIR filters are often preferred when sharper frequency responses are required with a lower order, leading to computational efficiency. Understanding various design methods helps in choosing the most appropriate technique for a given application.

---

### 2. The Impulse Invariance Method

#### 2.1 Principle

The core idea of impulse invariance is to obtain a digital filter whose impulse response is a sampled version of the impulse response of a desired analog filter. This method aims to preserve the time-domain characteristics of the analog prototype.

*   **Analog Filter:** Let the impulse response of the analog filter be $h_a(t)$ and its Laplace transform be $H_a(s)$.
*   **Digital Filter:** We want to design a digital filter with impulse response $h[n]$ and transfer function $H(z)$.
*   **Impulse Invariance:** The relationship is established by sampling the analog impulse response at the sampling instants:
    $h[n] = h_a(nT)$
    where $T$ is the sampling period.

#### 2.2 Mathematical Formulation

Consider an analog filter with transfer function $H_a(s)$ that can be decomposed into a sum of first-order terms using partial fraction expansion:

$H_a(s) = \sum_{i=1}^{N} \frac{A_i}{s - p_i}$

The impulse response $h_a(t)$ is then:

$h_a(t) = \sum_{i=1}^{N} A_i e^{p_i t} u(t)$

where $u(t)$ is the unit step function.

Now, we sample $h_a(t)$ to obtain the digital impulse response $h[n]$:

$h[n] = h_a(nT) = \sum_{i=1}^{N} A_i e^{p_i nT} u(nT)$

We know that the $z$-transform of $a^n u[n]$ is $\frac{1}{1 - az^{-1}}$. Let $a_i = e^{p_i T}$. Then, the $z$-transform of $h[n]$ becomes:

$H(z) = \mathcal{Z}\{h[n]\} = \sum_{i=1}^{N} A_i \mathcal{Z}\{ (e^{p_i T})^n u[n] \}$
$H(z) = \sum_{i=1}^{N} \frac{A_i}{1 - e^{p_i T} z^{-1}}$

This gives us the transfer function of the digital filter. Notice that each pole $p_i$ in the $s$-plane of the analog filter maps to a pole $e^{p_i T}$ in the $z$-plane of the digital filter. This is known as the **$s$-plane to $z$-plane mapping** or the **$z$-transform of the sampled exponential**.

**Key Concept:** The mapping from the $s$-plane to the $z$-plane for impulse invariance is $z = e^{sT}$.

#### 2.3 Designing IIR Filters using Impulse Invariance

The design process typically involves the following steps:

1.  **Specify the desired digital filter:** This usually involves defining the frequency response characteristics (e.g., passband, stopband, cutoff frequencies).
2.  **Choose an analog filter prototype:** Based on the digital filter specifications, select an appropriate analog filter (e.g., Butterworth, Chebyshev, Elliptic) that meets these requirements. This is often the most challenging step, as it involves mapping digital specifications to analog specifications, considering the sampling rate.
3.  **Obtain the transfer function of the analog prototype, $H_a(s)$:** This can be done using standard analog filter design techniques.
4.  **Perform partial fraction expansion of $H_a(s)$:** Decompose $H_a(s)$ into first-order terms (assuming no repeated poles). For higher-order poles, the expansion will include terms like $\frac{A}{(s-p)^k}$, which require a slightly modified sampling technique.
5.  **Apply the impulse invariance transformation:** For each term $\frac{A_i}{s - p_i}$ in $H_a(s)$, the corresponding term in $H(z)$ is $\frac{A_i}{1 - e^{p_i T} z^{-1}}$.
6.  **Sum the $z$-domain terms:** Add up all the transformed terms to get the final digital filter transfer function $H(z)$.

#### 2.4 Example: Designing a First-Order IIR Filter

Let's design a digital filter by impulse invariance from a simple analog low-pass filter with transfer function:

$H_a(s) = \frac{a}{s+a}$

Here, the pole is at $s = -a$, and the coefficient $A_1 = a$.

Using the impulse invariance mapping:

$H(z) = \frac{A_1}{1 - e^{p_1 T} z^{-1}} = \frac{a}{1 - e^{-aT} z^{-1}}$

**If we set $a_d = e^{-aT}$**, then the digital filter transfer function is:

$H(z) = \frac{a}{1 - a_d z^{-1}}$

This is a first-order IIR filter. The impulse response is $h[n] = a(e^{-aT})^n u[n]$.

#### 2.5 Example: Designing a Second-Order IIR Filter (Butterworth)

Let's consider designing a digital low-pass filter by approximating an analog Butterworth filter.
Suppose we want a digital filter with a cutoff frequency $\omega_c$. We need to map this to an analog cutoff frequency $\Omega_c$. This mapping is crucial and often involves a **pre-warping** step.

A common approach for mapping digital specifications to analog prototypes is the **Bilinear Transformation**, which is often preferred for its ability to map the entire $j\omega$ axis of the $s$-plane to the unit circle of the $z$-plane without aliasing. However, for impulse invariance, we directly sample the analog impulse response.

Let's assume we have an analog Butterworth filter specification. For simplicity, let's consider a second-order analog Butterworth low-pass filter:

$H_a(s) = \frac{\Omega_c^2}{s^2 + \sqrt{2}\Omega_c s + \Omega_c^2}$

We need to find the poles of this analog filter. The poles are the roots of the denominator polynomial:
$s^2 + \sqrt{2}\Omega_c s + \Omega_c^2 = 0$

Using the quadratic formula, $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$s = \frac{-\sqrt{2}\Omega_c \pm \sqrt{(\sqrt{2}\Omega_c)^2 - 4(1)(\Omega_c^2)}}{2(1)}$
$s = \frac{-\sqrt{2}\Omega_c \pm \sqrt{2\Omega_c^2 - 4\Omega_c^2}}{2}$
$s = \frac{-\sqrt{2}\Omega_c \pm \sqrt{-2\Omega_c^2}}{2}$
$s = \frac{-\sqrt{2}\Omega_c \pm j\sqrt{2}\Omega_c}{2}$
$s = -\frac{\Omega_c}{\sqrt{2}} \pm j\frac{\Omega_c}{\sqrt{2}}$

So, the poles are:
$p_1 = -\frac{\Omega_c}{\sqrt{2}} + j\frac{\Omega_c}{\sqrt{2}}$
$p_2 = -\frac{\Omega_c}{\sqrt{2}} - j\frac{\Omega_c}{\sqrt{2}}$

To perform partial fraction expansion, we need to express $H_a(s)$ as:

$H_a(s) = \frac{A_1}{s - p_1} + \frac{A_2}{s - p_2}$

For a Butterworth filter, the coefficients $A_i$ can be found. For this specific form, $A_1 = A_2 = \frac{\Omega_c^2}{p_1 - p_2}$.
$p_1 - p_2 = \left(-\frac{\Omega_c}{\sqrt{2}} + j\frac{\Omega_c}{\sqrt{2}}\right) - \left(-\frac{\Omega_c}{\sqrt{2}} - j\frac{\Omega_c}{\sqrt{2}}\right) = j\sqrt{2}\Omega_c$
$A_1 = A_2 = \frac{\Omega_c^2}{j\sqrt{2}\Omega_c} = \frac{\Omega_c}{j\sqrt{2}} = -j\frac{\Omega_c}{\sqrt{2}}$

Now, we apply the impulse invariance transformation:
For $\frac{A_1}{s - p_1}$, the $z$-transform is $\frac{A_1}{1 - e^{p_1 T} z^{-1}}$.
For $\frac{A_2}{s - p_2}$, the $z$-transform is $\frac{A_2}{1 - e^{p_2 T} z^{-1}}$.

$H(z) = \frac{A_1}{1 - e^{p_1 T} z^{-1}} + \frac{A_2}{1 - e^{p_2 T} z^{-1}}$

Let $z_1 = e^{p_1 T}$ and $z_2 = e^{p_2 T}$.
$p_1 = -\alpha + j\omega_d$, where $\alpha = \frac{\Omega_c}{\sqrt{2}}$ and $\omega_d = \frac{\Omega_c}{\sqrt{2}}$.
$p_2 = -\alpha - j\omega_d$.

$z_1 = e^{(-\alpha + j\omega_d)T} = e^{-\alpha T} e^{j\omega_d T}$
$z_2 = e^{(-\alpha - j\omega_d)T} = e^{-\alpha T} e^{-j\omega_d T}$

These are complex conjugate poles in the $z$-plane, as expected for a stable IIR filter.
$H(z) = \frac{A_1}{1 - z_1 z^{-1}} + \frac{A_2}{1 - z_2 z^{-1}}$

Combining these terms:
$H(z) = \frac{A_1(1 - z_2 z^{-1}) + A_2(1 - z_1 z^{-1})}{(1 - z_1 z^{-1})(1 - z_2 z^{-1})}$
$H(z) = \frac{(A_1 + A_2) - (A_1 z_2 + A_2 z_1) z^{-1}}{1 - (z_1 + z_2) z^{-1} + z_1 z_2 z^{-2}}$

Since $A_1 = -j\frac{\Omega_c}{\sqrt{2}}$ and $A_2 = j\frac{\Omega_c}{\sqrt{2}}$ (conjugate), $A_1 + A_2 = 0$.
$A_1 z_2 + A_2 z_1 = -j\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} e^{-j\omega_d T} + j\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} e^{j\omega_d T}$
$= j\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} (e^{j\omega_d T} - e^{-j\omega_d T})$
$= j\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} (2j \sin(\omega_d T))$
$= -2\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} \sin(\omega_d T)$

Also, $z_1 + z_2 = e^{-\alpha T} e^{j\omega_d T} + e^{-\alpha T} e^{-j\omega_d T} = e^{-\alpha T} (e^{j\omega_d T} + e^{-j\omega_d T}) = 2e^{-\alpha T} \cos(\omega_d T)$.
And $z_1 z_2 = e^{-\alpha T} e^{j\omega_d T} e^{-\alpha T} e^{-j\omega_d T} = e^{-2\alpha T}$.

Substituting back into $H(z)$:
$H(z) = \frac{-(-2\frac{\Omega_c}{\sqrt{2}} e^{-\alpha T} \sin(\omega_d T)) z^{-1}}{1 - (2e^{-\alpha T} \cos(\omega_d T)) z^{-1} + e^{-2\alpha T} z^{-2}}$
$H(z) = \frac{\sqrt{2}\Omega_c e^{-\alpha T} \sin(\omega_d T) z^{-1}}{1 - 2e^{-\alpha T} \cos(\omega_d T) z^{-1} + e^{-2\alpha T} z^{-2}}$

This is the form of a second-order IIR filter. To get the coefficients numerically, we need to choose a sampling period $T$ and the analog cutoff frequency $\Omega_c$.

---

### 3. Pole-Zero Mapping

The impulse invariance method directly maps the poles of the analog filter $H_a(s)$ to the poles of the digital filter $H(z)$ using the relationship $z = e^{sT}$.

*   **Zeros:** The zeros of $H(z)$ are not directly related to the zeros of $H_a(s)$. When decomposing $H_a(s)$ into first-order terms, the zeros are implicitly handled by the coefficients $A_i$. If $H_a(s)$ has zeros, they influence the $A_i$ values. However, if $H_a(s)$ has zeros at $s=0$ (e.g., a numerator factor of $s$), these would not appear in the summation of first-order terms.

*   **The $z$-plane mapping $z = e^{sT}$:**
    *   The left-half of the $s$-plane (LHP), where stable analog filters reside ($Re(s) < 0$), maps to the interior of the unit circle in the $z$-plane ($|z| < 1$). This ensures the stability of the digital filter.
    *   The right-half of the $s$-plane (RHP) maps to the exterior of the unit circle.
    *   The imaginary axis ($Re(s) = 0$) maps to the unit circle ($|z| = 1$).

*   **The Problem of Aliasing:** A major drawback of impulse invariance is that if the analog filter $h_a(t)$ is not bandlimited, sampling it will introduce aliasing. Specifically, the $j\omega$ axis in the $s$-plane ($Re(s) = 0$) maps to the unit circle in the $z$-plane. However, the mapping $z = e^{sT}$ is periodic in $s$ with period $j2\pi/T$. This means that multiple points in the $s$-plane can map to the same point in the $z$-plane.
    For example, poles at $s = p_i$ and $s = p_i + j2\pi k/T$ (for integer $k \neq 0$) both map to $z = e^{p_i T}$.
    If the analog filter $H_a(s)$ has poles in the right-half $s$-plane, the impulse invariance method will result in an unstable digital filter.
    More importantly, if $h_a(t)$ has significant high-frequency components, sampling can cause these to appear as lower-frequency components in the digital domain, distorting the frequency response. To avoid this, the analog filter's spectrum must be sufficiently limited relative to the sampling rate. Typically, the analog filter must be bandlimited to $|\omega| < \pi/T$. This is difficult to achieve in practice with analog filters.

---

### 4. Advantages and Disadvantages of Impulse Invariance

#### 4.1 Advantages

*   **Simple Concept:** The idea of directly sampling the impulse response is intuitive.
*   **Preserves Time Domain Characteristics:** Aims to maintain the temporal behavior of the analog prototype.
*   **Direct Mapping of Poles:** Provides a straightforward way to transfer stable analog poles to stable digital poles.

#### 4.2 Disadvantages

*   **Aliasing:** The primary disadvantage. If the analog filter's impulse response is not sufficiently bandlimited, aliasing occurs, distorting the frequency response. This means the digital filter's frequency response will not accurately match the analog filter's frequency response at all frequencies. The frequency response of the digital filter will be a sum of the responses of all analog filters that alias to the same $H(z)$.
    $H(z) = T \sum_{k=-\infty}^{\infty} H_a(s + j k \frac{2\pi}{T})$ where $s = \frac{1}{T} \ln(z)$.
    This implies that the desired analog filter must have its spectrum confined to the band $(-\pi/T, \pi/T)$.
*   **Bandlimiting Requirement:** The analog filter must be designed such that its impulse response is effectively zero outside the interval $[0, T]$ or $(0, T]$ to avoid aliasing. This often requires a very sharp analog low-pass filter before sampling, which is difficult to achieve and can introduce unwanted phase distortion.
*   **Difficulty with Zero Placement:** It's not straightforward to precisely place zeros in the digital filter to meet specific specifications. The zeros are implicitly determined by the coefficients $A_i$.
*   **Inaccurate Frequency Response Matching:** Due to aliasing, the magnitude and phase response of the designed digital filter may not accurately match the desired analog prototype at all frequencies, especially at higher digital frequencies.

---

### 5. Practical Considerations and Alternatives

*   **Pre-Warping:** To match the cutoff frequency of an analog filter more accurately, pre-warping is often used when mapping digital frequencies to analog frequencies. However, impulse invariance's primary issue is aliasing in the time domain, not directly frequency mapping accuracy.
*   **Alternative Methods:** Due to the aliasing problem, other methods are generally preferred for IIR filter design:
    *   **Bilinear Transformation:** This method maps the entire $j\omega$ axis of the $s$-plane to the unit circle in the $z$-plane without aliasing. It also provides a direct mapping between analog and digital cutoff frequencies via a non-linear transformation $s = \frac{2}{T}\frac{z-1}{z+1}$, which requires pre-warping of the digital cutoff frequencies. This is generally the most popular method for IIR filter design.
    *   **Other Approximation Methods:** Methods like frequency sampling design (for FIR) or direct numerical optimization can also be used to design IIR filters.

**Reference from Textbooks:**

*   **Proakis & Ingle (3rd Ed.):** Chapter 7, "Design of IIR Filters," discusses impulse invariance as one of the classic methods. It highlights the aliasing problem and the need for bandlimited analog prototypes or appropriate sampling rates.
*   **Oppenheim & Schafer (3rd Ed.):** Chapter 6, "Digital Filter Design," covers various IIR design techniques, including impulse invariance. It elaborates on the $s$-plane to $z$-plane mapping and the issues related to frequency response distortion.
*   **Downey (2nd Ed.):** While primarily focused on Python, the underlying DSP concepts are consistent. Downey's approach might emphasize practical implementation and understanding the limitations of such methods.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle of the impulse invariance method for designing IIR filters.

**Answer:**
The impulse invariance method designs a digital IIR filter by sampling the impulse response of a desired analog filter. If $h_a(t)$ is the analog impulse response, the digital impulse response is $h[n] = h_a(nT)$, where $T$ is the sampling period. This method aims to preserve the time-domain characteristics of the analog prototype.

**Question 2:**
What is the $s$-plane to $z$-plane mapping used in the impulse invariance method?

**Answer:**
The mapping used is $z = e^{sT}$, where $s$ is the complex variable in the Laplace transform and $z$ is the complex variable in the $z$-transform, and $T$ is the sampling period.

**Question 3:**
Describe the main drawback of the impulse invariance method and why it occurs.

**Answer:**
The main drawback is **aliasing**. This occurs because the sampling process in the time domain is equivalent to summing shifted replicas of the analog filter's frequency response in the digital frequency domain. If the analog filter's spectrum is not sufficiently bandlimited (ideally, confined to $|\omega| < \pi/T$), the high-frequency components will fold back into the desired frequency band, distorting the digital filter's frequency response.

**Question 4:**
Consider an analog filter with transfer function $H_a(s) = \frac{2s+1}{s^2+3s+2}$. Design a digital filter using impulse invariance with a sampling period $T = 0.1$ seconds.

**Answer:**
1.  **Partial Fraction Expansion of $H_a(s)$:**
    The denominator is $s^2+3s+2 = (s+1)(s+2)$.
    $H_a(s) = \frac{2s+1}{(s+1)(s+2)} = \frac{A}{s+1} + \frac{B}{s+2}$
    $2s+1 = A(s+2) + B(s+1)$
    Let $s=-1$: $2(-1)+1 = A(-1+2) + B(0) \implies -1 = A$
    Let $s=-2$: $2(-2)+1 = A(0) + B(-2+1) \implies -3 = -B \implies B = 3$
    So, $H_a(s) = \frac{-1}{s+1} + \frac{3}{s+2}$.

2.  **Impulse Invariance Transformation:**
    The poles are $p_1 = -1$ and $p_2 = -2$. The coefficients are $A_1 = -1$ and $A_2 = 3$.
    For the first term, $\frac{-1}{s+1}$: The digital equivalent is $\frac{-1}{1 - e^{-1 \cdot T} z^{-1}} = \frac{-1}{1 - e^{-0.1} z^{-1}}$.
    For the second term, $\frac{3}{s+2}$: The digital equivalent is $\frac{3}{1 - e^{-2 \cdot T} z^{-1}} = \frac{3}{1 - e^{-0.2} z^{-1}}$.

3.  **Digital Filter Transfer Function $H(z)$:**
    $H(z) = \frac{-1}{1 - e^{-0.1} z^{-1}} + \frac{3}{1 - e^{-0.2} z^{-1}}$
    $e^{-0.1} \approx 0.9048$
    $e^{-0.2} \approx 0.8187$
    $H(z) = \frac{-1}{1 - 0.9048 z^{-1}} + \frac{3}{1 - 0.8187 z^{-1}}$
    Combine the fractions:
    $H(z) = \frac{-1(1 - 0.8187 z^{-1}) + 3(1 - 0.9048 z^{-1})}{(1 - 0.9048 z^{-1})(1 - 0.8187 z^{-1})}$
    $H(z) = \frac{-1 + 0.8187 z^{-1} + 3 - 2.7144 z^{-1}}{1 - 0.8187 z^{-1} - 0.9048 z^{-1} + (0.9048)(0.8187) z^{-2}}$
    $H(z) = \frac{2 - 1.8957 z^{-1}}{1 - 1.7235 z^{-1} + 0.7408 z^{-2}}$

**Question 5:**
Under what condition can the impulse invariance method be considered a good approximation for IIR filter design?

**Answer:**
The impulse invariance method is a good approximation when the analog filter's impulse response $h_a(t)$ is significantly zero for $t \geq T$. This implies that the analog filter's spectrum is very narrow and concentrated around DC, effectively bandlimited to a range smaller than $\pm \pi/T$. In practice, achieving such a sharp bandlimit in an analog filter is difficult.

---

### 7. Important Points to Remember

*   Impulse invariance preserves the time-domain characteristics by sampling the analog impulse response.
*   The mapping from the $s$-plane to the $z$-plane is $z = e^{sT}$.
*   Poles of the analog filter $p_i$ map to digital poles $z_i = e^{p_i T}$.
*   The major limitation is **aliasing**, which distorts the frequency response.
*   The analog filter must be bandlimited to avoid aliasing.
*   Due to aliasing, the bilinear transformation is generally preferred for IIR filter design.
*   Impulse invariance is conceptually simple but practically problematic for achieving accurate frequency response matching unless stringent bandlimiting conditions are met.

---

This topic serves as an important stepping stone in understanding IIR filter design, even though its practical use is often superseded by other methods like the bilinear transformation. It lays the groundwork for understanding the relationship between continuous-time and discrete-time systems and the challenges of mapping between them.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
