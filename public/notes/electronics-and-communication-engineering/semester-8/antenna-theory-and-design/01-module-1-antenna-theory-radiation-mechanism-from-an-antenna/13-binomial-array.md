---
title: "Binomial array"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7cf"
status: "completed"
scrapedAt: "2026-05-23T18:11:41.689Z"
---
# ANTENNA THEORY AND DESIGN

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Binomial Array

---

**Understanding the Binomial Array: A Key to Narrow Beamwidths and Low Sidelobes**

This topic delves into the Binomial Array, a specific type of linear antenna array that utilizes a particular distribution of currents along its elements to achieve desirable radiation characteristics. Understanding Binomial Arrays is crucial for analyzing and designing antennas with controlled directivity and reduced interference.

---

### Learning Outcomes Addressed:

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   Understanding how the binomial current distribution affects the overall radiation pattern.
    *   Relating the mathematical formulation of the binomial array to its physical radiation properties.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Learning the design principles of a binomial array, including element spacing and excitation coefficients.
    *   Analyzing the performance of a binomial array in terms of beamwidth, sidelobe levels, and directivity.

---

### Key Concepts and Definitions:

*   **Linear Array:** A configuration of antennas where the elements are arranged along a straight line.
*   **Array Factor (AF):** The part of the radiation pattern that depends only on the geometry and excitation of the array elements, independent of the individual element's pattern. For a linear array of $N$ isotropic elements, the array factor is given by:
    $$AF(\psi) = \sum_{n=1}^{N} I_n e^{j (n-1) \psi}$$
    where:
    *   $I_n$ is the complex excitation amplitude of the $n$-th element.
    *   $\psi = kd \cos(\theta) + \beta$, with $k$ being the wavenumber, $d$ the element spacing, $\theta$ the angle from the array axis, and $\beta$ the progressive phase shift.
*   **Uniform Linear Array (ULA):** An array where all elements have equal spacing and equal excitation amplitudes. This often results in high sidelobes.
*   **Binomial Distribution:** A sequence of coefficients that resembles the binomial expansion $(a+b)^n$. In the context of antenna arrays, these coefficients are used to weight the excitation amplitudes of the array elements.
*   **Binomial Array:** A linear array whose element excitation amplitudes are proportional to the binomial coefficients of a binomial expansion.
*   **Sidelobes:** Minor lobes in the radiation pattern of an antenna array that occur in directions other than the main beam.
*   **Beamwidth:** The angular width of the main beam of the antenna, typically measured at the half-power points (Half-Power Beamwidth - HPBW).
*   **Nulls:** Directions in the radiation pattern where the radiated power is zero.
*   **Super-Gain Array:** An array with very narrow beamwidths and extremely low sidelobes, often achieved at the cost of increased element excitation or bandwidth limitations. Binomial arrays approach super-gain characteristics.

---

### 1. The Principle of the Binomial Array

The primary motivation for using a binomial distribution of currents in an array is to **suppress sidelobes**. Uniform linear arrays, while simple to design, often exhibit significant sidelobe levels, which can lead to unwanted interference. The binomial distribution achieves this suppression by a specific tapering of the excitation amplitudes.

**How it works:** The binomial coefficients naturally provide a smooth tapering of excitation. For an array of $N$ elements, the excitation amplitudes $I_n$ are proportional to the coefficients of $(1+x)^{N-1}$.

*   **For an array of $N$ elements:** The excitation amplitudes are proportional to the coefficients of $(1+x)^{N-1}$.
*   **Example (N=3 elements):** Coefficients are 1, 2, 1. The array factor is proportional to $1 + 2e^{j\psi} + e^{j2\psi} = (1+e^{j\psi})^2$.
*   **Example (N=4 elements):** Coefficients are 1, 3, 3, 1. The array factor is proportional to $1 + 3e^{j\psi} + 3e^{j2\psi} + e^{j3\psi} = (1+e^{j\psi})^3$.
*   **General Form:** For an $N$-element binomial array, the array factor is proportional to $(1+e^{j\psi})^{N-1}$.

**Significance of the form $(1+e^{j\psi})^{N-1}$:**
This form directly leads to controlled nulls and significantly reduced sidelobes. When $\psi = \pi$, $e^{j\psi} = -1$, making $(1+e^{j\psi}) = 0$. This means that for $(1+e^{j\psi})^{N-1}$, there will be $N-1$ nulls at $\psi = \pi$ (and multiples of $2\pi$).

---

### 2. Array Factor of a Binomial Array

Consider a linear array of $N$ elements. If the element spacing is $d$ and the progressive phase shift is $\beta$, the position of the $n$-th element is $z_n = (n-1)d$. The total field at a distant point is the sum of fields from each element.

The array factor for a binomial array with $N$ elements, excited with binomial coefficients $I_n$, and with elements located at $0, d, 2d, ..., (N-1)d$, is given by:

$$AF(\theta) = \sum_{n=0}^{N-1} \binom{N-1}{n} e^{j n (kd \cos \theta + \beta)}$$

Let $\psi = kd \cos \theta + \beta$. Then:

$$AF(\theta) = \sum_{n=0}^{N-1} \binom{N-1}{n} e^{j n \psi}$$

This sum is precisely the binomial expansion of $(1 + e^{j\psi})^{N-1}$.

$$AF(\theta) = (1 + e^{j\psi})^{N-1}$$

Substituting back $\psi$:

$$AF(\theta) = (1 + e^{j(kd \cos \theta + \beta)})^{N-1}$$

To steer the main beam to a direction $\theta_0$, a progressive phase shift $\beta$ is applied such that $kd \cos \theta_0 + \beta = 0$. Thus, $\beta = -kd \cos \theta_0$.

In the broadside direction ($\theta_0 = 90^\circ$, $\cos \theta_0 = 0$), $\beta = 0$. In this case:

$$AF(\theta) = (1 + e^{jkd \cos \theta})^{N-1}$$

**Sidelobe Suppression:**
The binomial array exhibits significantly lower sidelobes compared to a uniform array. As $N$ increases, the sidelobe levels decrease dramatically. For $N=3$, the sidelobes are about -23 dB. For $N=4$, they are about -30 dB. As $N \to \infty$, the sidelobe levels approach theoretically zero, approaching the characteristics of a super-gain array.

**Beamwidth:**
The beamwidth of a binomial array is generally **wider** than that of a uniform array with the same number of elements and the same spacing. This is a trade-off for achieving lower sidelobes.

---

### 3. Design Considerations for Binomial Arrays

*   **Number of Elements (N):** The choice of $N$ depends on the desired beamwidth and sidelobe suppression. A larger $N$ leads to narrower beamwidths and lower sidelobes, but requires more elements and potentially more complex feeding networks.
*   **Element Spacing (d):** The element spacing is typically chosen to avoid grating lobes. For broadside arrays, $d < \lambda$ is usually sufficient. For end-fire arrays, $d \approx \lambda/4$ to $\lambda/2$ is common. The binomial distribution is relatively insensitive to the exact spacing, but wider spacing can lead to narrower beams.
*   **Excitation Amplitudes:** These are determined by the binomial coefficients. For $N$ elements, the coefficients are $\binom{N-1}{0}, \binom{N-1}{1}, ..., \binom{N-1}{N-1}$.
    *   **Normalization:** The coefficients are often normalized to the largest coefficient or to the sum of coefficients.
    *   **Implementation:** The binomial coefficients can be implemented using power dividers and attenuators in the feed network.

---

### 4. Comparison with Uniform Linear Array (ULA)

| Feature             | Uniform Linear Array (ULA)                               | Binomial Array                                              |
| :------------------ | :------------------------------------------------------- | :---------------------------------------------------------- |
| Excitation          | Equal amplitudes, equal phase progression                | Binomial coefficients for amplitudes, typically no phase shift for broadside |
| Sidelobe Levels     | High (e.g., ~-13 dB for N>2)                             | Very low (decreases rapidly with N)                         |
| Beamwidth           | Narrower                                                 | Wider                                                       |
| Nulls               | Located at specific angles determined by $\psi$          | $N-1$ nulls at $\psi = \pi$ (main beam direction shifted if not broadside) |
| Feed Network        | Simpler (equal power split)                              | More complex (requires amplitude tapering)                  |
| Directivity         | Generally higher for same $N$ and $d$                    | Lower for same $N$ and $d$ (due to wider beamwidth)        |
| Applications        | Radar, general directional antennas                      | Applications requiring low interference, precise beam control |

---

### 5. Advantages and Disadvantages of Binomial Arrays

**Advantages:**

*   **Excellent Sidelobe Reduction:** The most significant advantage, leading to reduced interference.
*   **Smooth Radiation Pattern:** The absence of large sidelobes results in a cleaner pattern.
*   **Approaches Super-Gain:** With increasing $N$, it exhibits characteristics of super-gain arrays, which have very narrow beams for a given physical aperture.

**Disadvantages:**

*   **Wider Beamwidth:** This is a direct trade-off for sidelobe reduction.
*   **Complex Feed Network:** Implementing the tapered excitation amplitudes requires a more sophisticated feed system, which can lead to increased losses and cost.
*   **Bandwidth Limitations:** The tapered feed networks can sometimes limit the operational bandwidth of the array.
*   **Lower Directivity for a given N:** Compared to a ULA with the same number of elements and spacing, the directivity is lower due to the wider beamwidth.

---

### 6. Examples and Calculations

**Example 1: 3-Element Binomial Array (Broadside)**

Consider a 3-element array with elements at $0, d, 2d$. For broadside, $\beta=0$. The binomial coefficients are 1, 2, 1.
The array factor is proportional to:
$AF(\theta) \propto 1 + 2e^{jkd \cos \theta} + e^{j2kd \cos \theta}$
Let $\psi = kd \cos \theta$.
$AF(\theta) \propto 1 + 2e^{j\psi} + e^{j2\psi} = (1 + e^{j\psi})^2$

*   **Main Beam:** Occurs when $\psi = 0$ (i.e., $\cos \theta = 0$, so $\theta = 90^\circ$, broadside). $AF(90^\circ) = (1+1)^2 = 4$.
*   **Nulls:** Occur when $1 + e^{j\psi} = 0$, which means $e^{j\psi} = -1$.
    $j\psi = j\pi \implies \psi = \pi$
    $kd \cos \theta = \pi$
    $\cos \theta = \frac{\pi}{kd}$
    For typical spacing $d = \lambda/2$, $k = 2\pi/\lambda$, so $kd = \pi$.
    $\cos \theta = \frac{\pi}{\pi} = 1$. This implies $\theta = 0^\circ$ (end-fire).
    Wait, this is not quite right. The form is $(1+e^{j\psi})^{N-1}$. So for $N=3$, it's $(1+e^{j\psi})^2$.
    Nulls occur when $1+e^{j\psi}=0$, so $e^{j\psi} = -1$, meaning $\psi = \pi$.
    $\psi = kd \cos \theta$. So $kd \cos \theta = \pi$.
    If $d = \lambda/2$, $kd = \pi$. Then $\pi \cos \theta = \pi \implies \cos \theta = 1 \implies \theta = 0^\circ$ (end-fire).
    This indicates one null at end-fire for a 3-element binomial array.

Let's re-evaluate the nulls using the general form $AF(\theta) = (1 + e^{j\psi})^{N-1}$. For $N=3$, $AF(\theta) = (1 + e^{j\psi})^2$. Nulls occur when $1 + e^{j\psi} = 0$, which implies $e^{j\psi} = -1$.
$\psi = kd \cos \theta = (2n+1)\pi$ for integer $n$.
If $d=\lambda/2$, then $kd = \pi$. $\pi \cos \theta = \pi \implies \cos \theta = 1 \implies \theta = 0^\circ$. So one null is at $\theta=0^\circ$.
What about the second null? This formulation indicates that a binomial array of $N$ elements has $N-1$ nulls. For $N=3$, we should have 2 nulls.
The nulls of $(1+e^{j\psi})^{N-1}$ occur when $1+e^{j\psi}=0$, i.e., $e^{j\psi}=-1$. This means $\psi = \pi, 3\pi, 5\pi, ...$.
So, $kd \cos \theta = \pi, 3\pi, ...$.
For $d=\lambda/2$, $kd=\pi$.
$\pi \cos \theta = \pi \implies \cos \theta = 1 \implies \theta = 0^\circ$.
$\pi \cos \theta = 3\pi \implies \cos \theta = 3$ (impossible).
This suggests the analysis of nulls requires a slightly more nuanced approach or considering the definition of $\psi$ carefully.

**Correction:** The form $(1+e^{j\psi})^{N-1}$ implies nulls when $1+e^{j\psi}=0$, which means $e^{j\psi}=-1$. This leads to $\psi = (2m+1)\pi$.
For an $N$-element array starting at element 0, the positions are $0, d, ..., (N-1)d$. The phase term for the $n$-th element is $e^{jn\psi}$.
The AF is $\sum_{n=0}^{N-1} \binom{N-1}{n} e^{jn\psi} = (1+e^{j\psi})^{N-1}$.
For $N=3$, AF is $(1+e^{j\psi})^2$. Nulls when $1+e^{j\psi}=0$, so $e^{j\psi}=-1$.
This implies $\psi = \pi + 2m\pi = (2m+1)\pi$.
So $kd \cos \theta = (2m+1)\pi$.
If $d=\lambda/2$, $kd=\pi$.
$\pi \cos \theta = \pi \implies \cos \theta = 1 \implies \theta = 0^\circ$. This is one null.
Where is the second null? The factor $(1+e^{j\psi})^2$ means that the null at $\psi=\pi$ has a multiplicity of 2. This is characteristic of a binomial array.

**Sidelobe Level:** For a binomial array, the first sidelobe level is approximately -23 dB for any $N \ge 3$. (Source: Balanis, 4th Ed., Chapter 10).

**Example 2: 4-Element Binomial Array (Broadside)**

For $N=4$, coefficients are 1, 3, 3, 1.
$AF(\theta) \propto (1 + e^{j\psi})^3$, where $\psi = kd \cos \theta$.
*   **Main Beam:** $\psi=0$ ($\theta=90^\circ$). $AF(90^\circ) \propto (1+1)^3 = 8$.
*   **Nulls:** Occur when $1+e^{j\psi}=0$, so $e^{j\psi}=-1$, meaning $\psi = \pi, 3\pi, ...$.
    $kd \cos \theta = \pi, 3\pi, ...$.
    If $d=\lambda/2$, $kd=\pi$.
    $\pi \cos \theta = \pi \implies \cos \theta = 1 \implies \theta = 0^\circ$.
    $\pi \cos \theta = 3\pi \implies \cos \theta = 3$ (impossible).
    Again, the null at $\psi=\pi$ has multiplicity 3. The nulls are located at angles where $\psi = \pi, 3\pi, 5\pi, ...$. For $d=\lambda/2$, only $\psi = \pi$ corresponds to a real angle.

**Beamwidth Calculation:**
Calculating the HPBW for binomial arrays involves finding the angles $\theta$ where $|AF(\theta)|$ is $1/\sqrt{2}$ of the maximum. This often requires numerical methods or approximations due to the complex form.

---

### 7. Applications of Binomial Arrays

*   **Low Sidelobe Antennas:** Essential in applications where minimizing interference is critical, such as:
    *   **Radar Systems:** To detect weak targets near strong clutter.
    *   **Communications Systems:** To avoid interfering with adjacent channels or other users.
    *   **Radio Astronomy:** To observe faint celestial sources without interference from terrestrial signals.
*   **Directional Antennas:** Where a well-defined main beam is needed.
*   **Phased Arrays:** While binomial distribution is for fixed amplitude tapering, the concept of amplitude tapering is also used in phased arrays for sidelobe control.

---

### 8. Important Points to Remember

*   **Binomial arrays achieve low sidelobes by tapering element excitations according to binomial coefficients.**
*   **The array factor of an $N$-element binomial array is proportional to $(1+e^{j\psi})^{N-1}$.**
*   **They have $N-1$ nulls, typically located at end-fire directions for broadside configurations.**
*   **The trade-off for low sidelobes is a wider beamwidth compared to uniform arrays.**
*   **The first sidelobe level in a binomial array is approximately -23 dB, independent of N (for $N \ge 3$).**
*   **The feed network for a binomial array is more complex than for a uniform array.**
*   **The number of elements ($N$) determines the degree of beam narrowing and sidelobe suppression.**

---

### 9. Practice Questions and Exercises

**Question 1:**
A linear array has 5 elements. If the excitation amplitudes follow a binomial distribution, what are the relative amplitudes of the elements?
(a) 1, 2, 3, 2, 1
(b) 1, 4, 6, 4, 1
(c) 1, 5, 10, 10, 5, 1
(d) 1, 3, 3, 1

**Answer 1:**
The coefficients for an $N$-element array follow $(1+x)^{N-1}$. For $N=5$, we need the coefficients of $(1+x)^{5-1} = (1+x)^4$.
The binomial expansion of $(1+x)^4$ is $1x^0 + 4x^1 + 6x^2 + 4x^3 + 1x^4$.
So the coefficients are 1, 4, 6, 4, 1.
The correct answer is **(b)**.

**Question 2:**
What is the primary advantage of using a binomial distribution for element excitations in a linear antenna array?
(a) Narrower beamwidth
(b) Lower sidelobe levels
(c) Increased directivity
(d) Simpler feed network

**Answer 2:**
The primary advantage is the significant reduction in sidelobe levels. While it affects beamwidth and directivity, the key motivation is sidelobe suppression.
The correct answer is **(b)**.

**Question 3:**
A 3-element binomial array is designed to be broadside. If the element spacing is $\lambda/2$, where are the nulls located in terms of $\theta$? (Assume the array is along the z-axis and $\psi = kd \cos \theta$).
(a) $\theta = 0^\circ$ and $\theta = 180^\circ$
(b) $\theta = 90^\circ$
(c) $\theta = 0^\circ$ (with multiplicity 2)
(d) Nulls are not defined for binomial arrays.

**Answer 3:**
For a binomial array, the array factor is proportional to $(1+e^{j\psi})^{N-1}$. For $N=3$, AF is $(1+e^{j\psi})^2$. Nulls occur when $1+e^{j\psi}=0$, i.e., $e^{j\psi}=-1$. This means $\psi = (2m+1)\pi$.
With $d=\lambda/2$, $kd=\pi$. So $\pi \cos \theta = (2m+1)\pi$, which means $\cos \theta = 2m+1$.
For $m=0$, $\cos \theta = 1$, which implies $\theta = 0^\circ$.
For $m=-1$, $\cos \theta = -1$, which implies $\theta = 180^\circ$.
So the nulls are at $\theta = 0^\circ$ and $\theta = 180^\circ$. The null at $\psi=\pi$ has a multiplicity of 2 for $N=3$.
The question asks for locations in terms of $\theta$. The nulls are at end-fire directions.
The correct answer is **(a)**.

**Question 4 (Conceptual):**
Discuss the trade-off between beamwidth and sidelobe levels when designing an antenna array. How does the binomial array represent this trade-off?

**Answer 4:**
The trade-off between beamwidth and sidelobe levels is fundamental in antenna array design.
*   **Narrow Beamwidth:** Achieved by maximizing the array's directivity, often by using uniform excitation and sufficient element spacing. However, uniform excitation leads to high sidelobes.
*   **Low Sidelobe Levels:** Achieved by tapering the excitation amplitudes (e.g., using Chebyshev, Taylor, or Binomial distributions). Tapering generally results in wider beamwidths.

The **binomial array** exemplifies this trade-off by sacrificing beamwidth for significantly reduced sidelobes. As the number of elements ($N$) increases in a binomial array, the sidelobes decrease dramatically, approaching the ideal of zero sidelobes. Concurrently, the main beam becomes wider than that of a uniform array with the same number of elements. This makes binomial arrays suitable for applications where interference from sidelobes is a critical concern, even at the expense of a broader main beam.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. Further Reading and References

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.**
    *   Chapter 10, "Linear Arrays," discusses various array design techniques, including binomial arrays, their analysis, and comparison with uniform arrays. This is the primary source for the theoretical underpinnings.
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.**
    *   While not directly about antenna arrays, Pozar's book provides excellent background on feed networks and microwave components, which are relevant for implementing the amplitude tapering required by binomial arrays.
*   **Kraus, J. D. (2002). *Antennas for all applications* (3rd ed.). Tata McGraw hill.**
    *   Kraus is a foundational text in antenna theory and likely covers array theory in detail, including amplitude tapering methods like the binomial distribution.

---