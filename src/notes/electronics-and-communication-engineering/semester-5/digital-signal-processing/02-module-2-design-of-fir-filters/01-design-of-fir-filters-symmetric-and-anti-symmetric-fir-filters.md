---
title: "Design of FIR Filters - Symmetric and Anti-symmetric FIR Filters"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe98e"
status: "completed"
scrapedAt: "2026-05-23T17:55:30.133Z"
---
# Digital Signal Processing - Module 2: Design of FIR Filters

## Topic: Symmetric and Anti-symmetric FIR Filters

---

### 1. Introduction to FIR Filters

Finite Impulse Response (FIR) filters are a fundamental class of digital filters characterized by their impulse response that is of finite duration. This means that the output of the filter is a finite sum of past input samples, weighted by the filter coefficients.

**Key Concepts:**

*   **Impulse Response ($h[n]$):** The output of a filter when the input is a unit impulse signal $\delta[n]$. For an FIR filter of order $M$, the impulse response is non-zero for $0 \le n \le M$.
*   **Transfer Function ($H(z)$):** The z-transform of the impulse response, representing the input-output relationship in the z-domain. For an FIR filter, it is a polynomial in $z^{-1}$:
    $H(z) = \sum_{n=0}^{M} h[n]z^{-n}$
*   **Causality:** An FIR filter is always causal because its impulse response starts at $n=0$.
*   **Stability:** All FIR filters are inherently stable because their impulse response has finite energy.

**Why design FIR filters?**

*   **Linear Phase:** FIR filters can easily be designed to have linear phase response, which is crucial for preserving the waveform of signals without introducing phase distortion. This is a key aspect covered in **CO2**.
*   **Stability:** As mentioned, they are always stable.
*   **Simpler Design:** Compared to IIR filters, FIR filter design is generally more straightforward and less prone to instability issues.

---

### 2. Linear Phase FIR Filters

A filter has a linear phase response if the phase of its frequency response is a linear function of frequency. This is highly desirable in many applications, such as audio processing, image processing, and communication systems, as it ensures that all frequency components of the input signal are delayed by the same amount of time, preventing waveform distortion.

**Frequency Response:** The frequency response $H(e^{j\omega})$ is obtained by evaluating the transfer function $H(z)$ on the unit circle ($z = e^{j\omega}$).

$H(e^{j\omega}) = \sum_{n=0}^{M} h[n]e^{-j\omega n}$

**Phase Response ($\phi(\omega)$):** The phase response is the argument of the frequency response:

$\phi(\omega) = \angle H(e^{j\omega})$

**Condition for Linear Phase:** A filter has a linear phase response if $\phi(\omega) = -\beta\omega$ for some constant $\beta$.

**Types of Linear Phase FIR Filters:**

Linear phase FIR filters can be classified into four types based on the symmetry of their impulse response coefficients and the length of the impulse response (number of taps, $M+1$).

#### 2.1 Type I Linear Phase FIR Filters

*   **Symmetry Property:** The impulse response coefficients are symmetric about the center of the impulse response.
    $h[n] = h[M-n]$ for $0 \le n \le M$.
*   **Order of Impulse Response:** $M$ is an even integer. This means the total number of taps ($M+1$) is odd.
*   **Center of Symmetry:** The center of symmetry is at $n = M/2$.
*   **Frequency Response Form:**
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{n=0}^{M} h[n]e^{-j\omega (n-M/2)}$

    Let $k = n - M/2$. When $n=0$, $k = -M/2$. When $n=M$, $k = M/2$.
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{k=-M/2}^{M/2} h[k+M/2]e^{-j\omega k}$

    Using the symmetry property $h[n] = h[M-n]$, we can show that:
    $h[M/2+k] = h[M/2-k]$
    Therefore,
    $H(e^{j\omega}) = e^{-j\omega M/2} [h[M/2] + 2\sum_{k=1}^{M/2} h[M/2+k]\cos(\omega k)]$

    The term in the square brackets is a real-valued function of $\omega$. Thus, the phase response is:
    $\phi(\omega) = -\omega \frac{M}{2}$
    This is a linear phase response with a group delay of $M/2$.

**Example:** A Type I FIR filter of order $M=2$ (3 taps).
$h[n] = h[2-n]$
$h[0] = h[2]$
The impulse response is $[h[0], h[1], h[0]]$

**Practice Question:** For a Type I FIR filter with $M=4$, what is the relationship between $h[1]$ and $h[3]$?
**Answer:** $h[1] = h[4-1] = h[3]$

#### 2.2 Type II Linear Phase FIR Filters

*   **Symmetry Property:** The impulse response coefficients are symmetric about the center of the impulse response.
    $h[n] = h[M-n]$ for $0 \le n \le M$.
*   **Order of Impulse Response:** $M$ is an odd integer. This means the total number of taps ($M+1$) is even.
*   **Center of Symmetry:** The center of symmetry is at $n = M/2$. Note that $M/2$ is not an integer.
*   **Frequency Response Form:**
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{n=0}^{M} h[n]e^{-j\omega (n-M/2)}$

    Let $k = n - M/2$. When $n=0$, $k = -M/2$. When $n=M$, $k = M/2$.
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{k=-M/2}^{M/2} h[k+M/2]e^{-j\omega k}$

    Using the symmetry property $h[n] = h[M-n]$:
    $h[M/2+k] = h[M/2-k]$

    Since $M/2$ is not an integer, we can pair the terms:
    $H(e^{j\omega}) = e^{-j\omega M/2} [ \sum_{k=1}^{(M+1)/2} h[M/2 - k + 1/2]e^{-j\omega(k-1/2)} + \sum_{k=1}^{(M+1)/2} h[M/2 + k - 1/2]e^{-j\omega(-k+1/2)} ]$
    (Note: This can be expressed more directly by pairing terms around $M/2$)

    A more intuitive way to express this is:
    $H(e^{j\omega}) = e^{-j\omega M/2} [ 2\sum_{n=0}^{(M-1)/2} h[n]\cos(\omega(M/2-n)) ]$

    The term in the square brackets is a real-valued function of $\omega$. Thus, the phase response is:
    $\phi(\omega) = -\omega \frac{M}{2}$
    This is a linear phase response with a group delay of $M/2$.

**Example:** A Type II FIR filter of order $M=3$ (4 taps).
$h[n] = h[3-n]$
$h[0] = h[3]$
$h[1] = h[2]$
The impulse response is $[h[0], h[1], h[1], h[0]]$

**Practice Question:** For a Type II FIR filter with $M=5$, what is the relationship between $h[0]$ and $h[5]$?
**Answer:** $h[0] = h[5-0] = h[5]$

**Important Point:** For Type I and Type II filters, the magnitude response $|H(e^{j\omega})|$ can be expressed as $|H(e^{j\omega})| = |A(e^{j\omega})|$ where $A(e^{j\omega})$ is a real-valued function. This is a direct consequence of the symmetry property.

#### 2.3 Type III Linear Phase FIR Filters

*   **Symmetry Property:** The impulse response coefficients are anti-symmetric about the center of the impulse response.
    $h[n] = -h[M-n]$ for $0 \le n \le M$.
*   **Order of Impulse Response:** $M$ is an even integer. This means the total number of taps ($M+1$) is odd.
*   **Center of Symmetry:** The center of symmetry is at $n = M/2$.
*   **Special Condition:** For $n=M/2$, we must have $h[M/2] = -h[M-M/2] = -h[M/2]$. This implies $2h[M/2] = 0$, so $h[M/2] = 0$.
*   **Frequency Response Form:**
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{n=0}^{M} h[n]e^{-j\omega (n-M/2)}$

    Let $k = n - M/2$.
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{k=-M/2}^{M/2} h[k+M/2]e^{-j\omega k}$

    Using the anti-symmetry property $h[n] = -h[M-n]$:
    $h[M/2+k] = -h[M/2-k]$

    Therefore,
    $H(e^{j\omega}) = e^{-j\omega M/2} [ h[M/2] + \sum_{k=1}^{M/2} h[M/2+k]e^{-j\omega k} + \sum_{k=1}^{M/2} h[M/2-k]e^{j\omega k} ]$
    $H(e^{j\omega}) = e^{-j\omega M/2} [ 0 + \sum_{k=1}^{M/2} h[M/2+k](e^{-j\omega k} + e^{j\omega k}) ]$
    $H(e^{j\omega}) = e^{-j\omega M/2} [ 2\sum_{k=1}^{M/2} h[M/2+k]\cos(\omega k) ]$

    The term in the square brackets is a real-valued function of $\omega$. Thus, the phase response is:
    $\phi(\omega) = -\omega \frac{M}{2}$
    This is a linear phase response with a group delay of $M/2$.

**Example:** A Type III FIR filter of order $M=2$ (3 taps).
$h[n] = -h[2-n]$
$h[0] = -h[2]$
$h[1] = -h[1] \implies h[1] = 0$
The impulse response is $[h[0], 0, -h[0]]$

**Practice Question:** For a Type III FIR filter with $M=4$, what is the relationship between $h[0]$ and $h[4]$?
**Answer:** $h[0] = -h[4-0] = -h[4]$

#### 2.4 Type IV Linear Phase FIR Filters

*   **Symmetry Property:** The impulse response coefficients are anti-symmetric about the center of the impulse response.
    $h[n] = -h[M-n]$ for $0 \le n \le M$.
*   **Order of Impulse Response:** $M$ is an odd integer. This means the total number of taps ($M+1$) is even.
*   **Center of Symmetry:** The center of symmetry is at $n = M/2$. Note that $M/2$ is not an integer.
*   **Frequency Response Form:**
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{n=0}^{M} h[n]e^{-j\omega (n-M/2)}$

    Let $k = n - M/2$.
    $H(e^{j\omega}) = e^{-j\omega M/2} \sum_{k=-M/2}^{M/2} h[k+M/2]e^{-j\omega k}$

    Using the anti-symmetry property $h[n] = -h[M-n]$:
    $h[M/2+k] = -h[M/2-k]$

    Therefore,
    $H(e^{j\omega}) = e^{-j\omega M/2} [ \sum_{k=1}^{(M+1)/2} h[M/2 - k + 1/2]e^{-j\omega(k-1/2)} + \sum_{k=1}^{(M+1)/2} h[M/2 + k - 1/2]e^{-j\omega(-k+1/2)} ]$
    (Note: Similar pairing as Type II, but with anti-symmetry)

    A more intuitive way to express this is:
    $H(e^{j\omega}) = e^{-j\omega M/2} [ 2j\sum_{n=0}^{(M-1)/2} h[n]\sin(\omega(M/2-n)) ]$

    The term in the square brackets is an imaginary-valued function of $\omega$. Thus, the phase response is:
    $\phi(\omega) = -\omega \frac{M}{2} + \frac{\pi}{2}$
    This is a linear phase response with a group delay of $M/2$.

**Example:** A Type IV FIR filter of order $M=3$ (4 taps).
$h[n] = -h[3-n]$
$h[0] = -h[3]$
$h[1] = -h[2]$
The impulse response is $[h[0], h[1], -h[1], -h[0]]$

**Practice Question:** For a Type IV FIR filter with $M=1$, what is the relationship between $h[0]$ and $h[1]$?
**Answer:** $h[0] = -h[1-0] = -h[1]$

---

### 3. Summary of Linear Phase FIR Filter Types

| Type  | $M$ (Order) | Number of Taps ($M+1$) | Symmetry/Anti-symmetry | $h[M/2]$   | $H(e^{j\omega})$ Form                                  | $\phi(\omega)$          |
| :---- | :---------- | :--------------------- | :--------------------- | :--------- | :----------------------------------------------------- | :---------------------- |
| I     | Even        | Odd                    | Symmetric              | $h[M/2]$   | $e^{-j\omega M/2} \times (\text{real})$                | $-\omega M/2$           |
| II    | Odd         | Even                   | Symmetric              | N/A        | $e^{-j\omega M/2} \times (\text{real})$                | $-\omega M/2$           |
| III   | Even        | Odd                    | Anti-symmetric         | $0$        | $e^{-j\omega M/2} \times (\text{real})$                | $-\omega M/2$           |
| IV    | Odd         | Even                   | Anti-symmetric         | N/A        | $e^{-j\omega M/2} \times (\text{imaginary})$           | $-\omega M/2 + \pi/2$ |

*(Note: The imaginary term in Type IV filters is typically expressed as $j \times (\text{real})$, so the phase becomes $-\omega M/2 + \pi/2$)*

**Important Distinction:** While all four types provide linear phase, Type I and II have a pure delay-based phase shift, while Type III and IV have an additional phase shift ($0$ for Type III, $\pi/2$ for Type IV). This means Type I and II filters preserve the phase response shape more directly, while Type III and IV invert or shift the phase response at certain frequencies.

**References:**

*   **Proakis & Ingle:** Chapter 7 extensively discusses FIR filter design, including the properties of linear phase filters and their classification.
*   **Oppenheim & Schafer:** Chapter 7 also covers linear phase FIR filters in detail, providing the mathematical derivations for the frequency response forms.
*   **Apte:** Discusses filter types and their properties, with a focus on practical design considerations.
*   **Mitra:** Chapter 4 on FIR filter design covers the classification and properties of linear phase FIR filters.

---

### 4. Properties and Implications of Symmetric/Anti-symmetric Filters

**Symmetric FIR Filters (Type I and II):**

*   **Zero-Phase Response:** If we consider the definition of zero-phase filters, where $|H(e^{j\omega})|$ is an even function of $\omega$, symmetric FIR filters have a *constant group delay*, which is a form of linear phase.
*   **Magnitude Response:** The magnitude response $|H(e^{j\omega})|$ can be expressed in a form that is easily analyzed and designed from.
*   **Applications:** Widely used in applications where preserving the shape of the signal is paramount, such as audio and image processing.

**Anti-symmetric FIR Filters (Type III and IV):**

*   **Phase Characteristics:** They exhibit linear phase, but with a phase jump of $\pi$ at frequencies where $H(e^{j\omega})=0$. For Type IV, there's an additional $\pi/2$ phase shift.
*   **Magnitude Response:** For Type III, $H(e^{j\omega}) = e^{-j\omega M/2} A(\omega)$, where $A(\omega)$ is real. For Type IV, $H(e^{j\omega}) = e^{-j\omega M/2} j B(\omega)$, where $B(\omega)$ is real.
*   **Applications:** Can be useful in specific filter designs, like differentiators or in applications where a specific phase characteristic is required. For instance, differentiators typically have a phase response of $\pi/2 - \omega\pi/2$ (for $M=1$), which aligns with Type IV behavior.

**Relationship to Course Outcomes:**

*   **CO2:** Designing linear phase FIR filters of different specifications directly relates to understanding and implementing Type I, II, III, and IV filters. The properties discussed here are essential for this design process.
*   **CO1:** While primarily focused on DFT, understanding the frequency response of these filters (which is related to the DFT of the impulse response) helps in analyzing DFT-based filtering methods.
*   **CO3:** The symmetry and anti-symmetry properties of the impulse response are directly related to the system function and its realization in various structures.

---

### 5. Practice Questions and Exercises

**Question 1:**
An FIR filter has an impulse response $h[n] = \{1, 2, 3, 2, 1\}$. What type of linear phase FIR filter is this? Determine its order $M$, the number of taps, and the center of symmetry.

**Solution 1:**
The impulse response is $h[n] = \{1, 2, 3, 2, 1\}$.
The length of the impulse response is 5. So, $M+1 = 5$, which means $M = 4$.
Since $M=4$ is even, it could be Type I or Type III.
Let's check for symmetry:
$h[0] = 1$, $h[4] = 1$. So, $h[0] = h[4]$.
$h[1] = 2$, $h[3] = 2$. So, $h[1] = h[3]$.
$h[2] = 3$. This is the center element.
The symmetry property $h[n] = h[M-n]$ holds.
Therefore, this is a **Type I** linear phase FIR filter.
The order is $M=4$.
The number of taps is $M+1=5$.
The center of symmetry is at $n = M/2 = 4/2 = 2$.

**Question 2:**
Consider an FIR filter with an impulse response $h[n] = \{1, -1, 1, -1\}$. Is this a linear phase FIR filter? If so, what type is it? Determine its order $M$ and the center of symmetry.

**Solution 2:**
The impulse response is $h[n] = \{1, -1, 1, -1\}$.
The length of the impulse response is 4. So, $M+1 = 4$, which means $M = 3$.
Since $M=3$ is odd, it could be Type II or Type IV.
Let's check for symmetry:
$h[0] = 1$, $h[3] = -1$. So, $h[0] = -h[3]$.
$h[1] = -1$, $h[2] = 1$. So, $h[1] = -h[2]$.
The anti-symmetry property $h[n] = -h[M-n]$ holds.
Therefore, this is a **Type IV** linear phase FIR filter.
The order is $M=3$.
The center of symmetry is at $n = M/2 = 3/2 = 1.5$.

**Question 3:**
An FIR filter of order $M=5$ is known to be linear phase and anti-symmetric. What type is it, and what is the relationship between $h[0]$ and $h[5]$?

**Solution 3:**
The order $M=5$ is odd.
The filter is anti-symmetric, meaning $h[n] = -h[M-n]$.
Since $M$ is odd, this is a **Type IV** linear phase FIR filter.
The relationship between $h[0]$ and $h[5]$ is:
$h[0] = -h[5-0] = -h[5]$.

**Question 4 (Conceptual):**
Why is linear phase desirable in signal processing applications? Briefly explain the consequence of non-linear phase.

**Solution 4:**
Linear phase is desirable because it ensures that all frequency components of a signal are delayed by the same amount of time. This means the *shape* of the signal is preserved during filtering, preventing distortion of transient signals or complex waveforms.
Non-linear phase, on the other hand, introduces *phase distortion*. Different frequency components are delayed by different amounts, leading to a change in the signal's shape. This can manifest as "ringing" artifacts, smearing, or changes in the timing of different parts of a complex signal.

**Question 5 (Reference Based):**
According to Proakis & Ingle (3rd Ed.), what is the general form of the frequency response for a Type I linear phase FIR filter and what is its group delay?

**Solution 5:**
As per Proakis & Ingle (Chapter 7), for a Type I linear phase FIR filter with $M$ even, the frequency response can be expressed as:
$H(e^{j\omega}) = e^{-j\omega M/2} A(\omega)$
where $A(\omega) = h[M/2] + 2\sum_{k=1}^{M/2} h[M/2+k]\cos(\omega k)$.
The group delay $\tau_g(\omega) = -\frac{d\phi(\omega)}{d\omega} = -\frac{d}{d\omega}(-\omega M/2) = M/2$.
The group delay is constant, equal to $M/2$.

---

### 6. Important Points to Remember

*   **FIR filters are always stable and can achieve linear phase.**
*   **Linear phase is crucial for preserving signal waveform.**
*   **The four types of linear phase FIR filters are distinguished by the order ($M$) and the symmetry/anti-symmetry of their impulse response coefficients.**
*   **Type I and II filters have symmetric impulse responses ($h[n] = h[M-n]$).**
*   **Type III and IV filters have anti-symmetric impulse responses ($h[n] = -h[M-n]$).**
*   **The order $M$ determines the center of symmetry ($M/2$). If $M$ is even, $M/2$ is an integer; if $M$ is odd, $M/2$ is a half-integer.**
*   **For Type III filters, the coefficient at the center of symmetry ($h[M/2]$) must be zero.**
*   **The frequency response of linear phase FIR filters can be factored into a linear phase term ($e^{-j\omega M/2}$) and a real-valued magnitude/amplitude term (or $j \times \text{real-valued term}$ for Type IV).**
*   **All linear phase FIR filters have a constant group delay ($M/2$).**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Further Reading and Exploration

*   **Design Methods:** This topic focuses on the properties of symmetric and anti-symmetric filters. The actual design of coefficients ($h[n]$) for these filters (e.g., using the Window Method or Frequency Sampling Method) is a subsequent step. Refer to the textbooks for these methods.
*   **Magnitude Response Factorization:** Understanding how the magnitude response is obtained from the factored form is key for design.
*   **Applications:** Explore specific applications where linear phase is critical (e.g., data transmission, image processing filters).

---
This concludes the study notes for Symmetric and Anti-symmetric FIR Filters. Remember to consult the provided textbooks for deeper mathematical understanding and practical examples.