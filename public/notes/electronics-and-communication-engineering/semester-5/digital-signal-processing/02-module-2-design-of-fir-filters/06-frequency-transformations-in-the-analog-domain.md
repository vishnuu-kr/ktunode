---
title: "Frequency Transformations in the Analog Domain"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe993"
status: "completed"
scrapedAt: "2026-05-23T17:55:33.688Z"
---
# DIGITAL SIGNAL PROCESSING - Module 2: Design of FIR Filters

## Topic: Frequency Transformations in the Analog Domain

### Learning Outcomes:
Upon successful completion of this topic, students will be able to:
* Understand the concept of frequency transformations in the analog domain and their role in filter design.
* Apply specific analog frequency transformation techniques to convert prototype low-pass analog filters into other types of analog filters (e.g., high-pass, band-pass, band-stop).
* Relate analog filter design to digital filter design through the use of transformations.
* Analyze the impact of frequency transformations on filter characteristics (e.g., bandwidth, cutoff frequencies).

### Introduction to Frequency Transformations

Frequency transformations are a crucial technique in filter design, particularly when translating a well-designed prototype filter into a different filter characteristic. In the context of digital filter design, we often start with an analog prototype filter and then convert it to a digital filter using methods like the Bilinear Transform. However, before we can even get to the digital domain, it's often necessary to transform an analog prototype into the desired analog filter type. This topic focuses on these analog-to-analog frequency transformations.

**Key Concept:** The fundamental idea is to manipulate the frequency response of a prototype filter to achieve a new desired frequency response by mapping the frequencies in a specific way.

**Reference:**
*   **Ingle & Proakis (3rd Ed., 2011), Chapter 7: Design of Digital Filters** - While this chapter primarily focuses on digital filter design, the underlying principles of filter types and their characteristics are rooted in analog filter design. Frequency transformations are often the bridge to achieving these different digital filter types.
*   **Oppenheim & Schafer (3rd Ed., 2014), Chapter 5: Design of IIR Filters** - This chapter delves into IIR filter design, where analog prototypes are heavily utilized. Understanding analog transformations is a prerequisite for many IIR design techniques.

---

### 1. Why Frequency Transformations?

*   **Simplification of Design:** It's often easier to design a simple prototype filter (like a low-pass filter) with desired performance specifications and then transform it into more complex filter types.
*   **Variety of Filter Characteristics:** We can achieve low-pass, high-pass, band-pass, and band-stop filters from a single analog low-pass prototype.
*   **Leveraging Existing Knowledge:** Decades of research have gone into the design of analog filters. Frequency transformations allow us to leverage this knowledge for digital filter design.

**Course Outcome Alignment:**
*   **CO2:** Design linear phase FIR filters and IIR filters of different specifications. (Knowledge Level: K3) - Understanding analog transformations is a stepping stone for designing IIR filters with various specifications. While FIR filters are the primary focus of Module 2, the concepts of filter types and their interrelationships are foundational.

---

### 2. Analog Frequency Transformations: General Concepts

A frequency transformation is a mapping of the complex frequency variable $s$ of a prototype filter $H_{proto}(s)$ to a new complex frequency variable $p$ such that a new filter $H_{new}(p) = H_{proto}(s(p))$ has the desired frequency response.

Let the prototype filter have a transfer function $H_{proto}(s)$. We want to find a transformation $s = g(p)$ such that when $H_{proto}(s)$ is expressed in terms of $p$, the new filter $H_{new}(p) = H_{proto}(g(p))$ has the desired frequency characteristics.

**Key Concept:** The transformation $s = g(p)$ defines how the frequencies of the prototype filter are mapped to the frequencies of the new filter.

**Reference:**
*   **Mitra (4th Ed., 2014), Chapter 4: Analog Filter Design** - This chapter typically covers analog filter design in detail, including the fundamental concepts of frequency transformations.

---

### 3. Common Analog Low-Pass to Other Analog Filter Transformations

The most common approach is to start with a normalized low-pass prototype filter $H_{LP,proto}(s)$ with a cutoff frequency at $\omega_c = 1$ rad/s. Then, we apply a frequency transformation to convert it into other filter types.

Let $s$ be the complex frequency variable for the prototype filter and $p$ be the complex frequency variable for the transformed filter.

#### 3.1. Low-Pass to Low-Pass Transformation

This transformation scales the cutoff frequency.
*   **Transformation:** $s = \frac{s'}{\omega_c'}$
    *   Here, $s'$ is the variable of the new low-pass filter and $\omega_c'$ is its desired cutoff frequency.
*   **Effect:** The cutoff frequency $\omega_c = 1$ rad/s of the prototype is mapped to $\omega_c'$ rad/s in the new filter.
*   **Example:** If $H_{proto}(s) = \frac{1}{s+1}$ (a first-order low-pass filter with cutoff at 1 rad/s), and we want a new low-pass filter with cutoff at $\omega_c' = 1000$ rad/s, the new transfer function is:
    $H_{new}(s') = H_{proto}\left(\frac{s'}{1000}\right) = \frac{1}{\frac{s'}{1000} + 1} = \frac{1000}{s' + 1000}$

#### 3.2. Low-Pass to High-Pass Transformation

This transformation inverts and scales the frequency.
*   **Transformation:** $s = \frac{\omega_c'}{s'}$
    *   Here, $s'$ is the variable of the new high-pass filter and $\omega_c'$ is its desired cutoff frequency.
*   **Effect:** The cutoff frequency $\omega_c = 1$ rad/s of the prototype is mapped to $\omega_c'$ rad/s in the new filter. Frequencies below $\omega_c'$ are attenuated, and frequencies above $\omega_c'$ are passed.
*   **Example:** For the same prototype $H_{proto}(s) = \frac{1}{s+1}$, if we want a high-pass filter with cutoff at $\omega_c' = 1000$ rad/s:
    $H_{new}(s') = H_{proto}\left(\frac{1000}{s'}\right) = \frac{1}{\frac{1000}{s'} + 1} = \frac{s'}{1000 + s'}$

#### 3.3. Low-Pass to Band-Pass Transformation

This transformation maps a single cutoff frequency of the low-pass prototype to two cutoff frequencies, creating a band-pass filter.
*   **Transformation:** $s = \frac{s'^2 + \omega_0'^2}{Bs'}$
    *   $s'$ is the variable of the new band-pass filter.
    *   $\omega_0'$ is the geometric center frequency of the band-pass filter, $\omega_0' = \sqrt{\omega_{cL}' \omega_{cH}'}$.
    *   $B$ is the bandwidth of the band-pass filter, $B = \omega_{cH}' - \omega_{cL}'$.
*   **Effect:** A low-pass filter with cutoff at $\omega_c = 1$ rad/s in the $s$-domain is transformed into a band-pass filter with lower cutoff $\omega_{cL}'$ and upper cutoff $\omega_{cH}'$ in the $s'$-domain. The transformation ensures that the critical frequencies of the prototype are mapped correctly.
*   **Example:** For a second-order low-pass Butterworth filter with transfer function $H_{proto}(s) = \frac{1}{s^2 + \sqrt{2}s + 1}$, with cutoff at $\omega_c = 1$.
    Let's say we want a band-pass filter with center frequency $\omega_0' = 2000$ rad/s and bandwidth $B = 1000$ rad/s.
    This implies $\omega_{cL}' = 1500$ rad/s and $\omega_{cH}' = 2500$ rad/s.
    The transformation is $s = \frac{s'^2 + (2000)^2}{1000 s'} = \frac{s'^2 + 4 \times 10^6}{1000 s'}$.
    Substituting this into $H_{proto}(s)$:
    $H_{new}(s') = H_{proto}\left(\frac{s'^2 + 4 \times 10^6}{1000 s'}\right) = \frac{1}{\left(\frac{s'^2 + 4 \times 10^6}{1000 s'}\right)^2 + \sqrt{2}\left(\frac{s'^2 + 4 \times 10^6}{1000 s'}\right) + 1}$
    This will result in a fourth-order band-pass filter.

#### 3.4. Low-Pass to Band-Stop Transformation

This transformation maps a single cutoff frequency of the low-pass prototype to two cutoff frequencies, creating a band-stop filter.
*   **Transformation:** $s = \frac{B s'}{s'^2 + \omega_0'^2}$
    *   $s'$ is the variable of the new band-stop filter.
    *   $\omega_0'$ is the geometric center frequency of the band-stop filter, $\omega_0' = \sqrt{\omega_{cL}' \omega_{cH}'}$.
    *   $B$ is the bandwidth of the band-stop filter, $B = \omega_{cH}' - \omega_{cL}'$.
*   **Effect:** A low-pass filter with cutoff at $\omega_c = 1$ rad/s in the $s$-domain is transformed into a band-stop filter with lower cutoff $\omega_{cL}'$ and upper cutoff $\omega_{cH}'$ in the $s'$-domain. Frequencies within the band $[\omega_{cL}', \omega_{cH}']$ are attenuated, and frequencies outside this band are passed.
*   **Example:** Using the same second-order low-pass Butterworth prototype $H_{proto}(s) = \frac{1}{s^2 + \sqrt{2}s + 1}$.
    Let's say we want a band-stop filter with center frequency $\omega_0' = 2000$ rad/s and bandwidth $B = 1000$ rad/s.
    The transformation is $s = \frac{1000 s'}{s'^2 + (2000)^2} = \frac{1000 s'}{s'^2 + 4 \times 10^6}$.
    Substituting this into $H_{proto}(s)$:
    $H_{new}(s') = H_{proto}\left(\frac{1000 s'}{s'^2 + 4 \times 10^6}\right) = \frac{1}{\left(\frac{1000 s'}{s'^2 + 4 \times 10^6}\right)^2 + \sqrt{2}\left(\frac{1000 s'}{s'^2 + 4 \times 10^6}\right) + 1}$
    This will also result in a fourth-order band-stop filter.

**Important Note on Band Transformations:**
For band-pass and band-stop transformations, the degree of the transformed filter is twice the degree of the prototype filter. This is because the transformation expressions are quadratic in $s'$.

**Reference:**
*   **Apte (2nd Ed., 2019), Chapter 5: Analog Filter Design** - This chapter would provide a detailed mathematical derivation of these transformations and their properties.
*   **Ifeachor & Jervis (2nd Ed., 2009), Chapter 3: Digital Filter Design** - While focusing on digital, this chapter might briefly touch upon analog prototypes and the logic behind transforming them, setting the stage for digital filter design.

---

### 4. Relationship to Digital Filter Design

Frequency transformations in the analog domain are a crucial precursor to designing digital filters, especially IIR filters. The general procedure is:

1.  **Design an Analog Prototype Filter:** Choose an analog low-pass filter that meets certain specifications (e.g., Butterworth, Chebyshev).
2.  **Apply Analog Frequency Transformation:** Transform the analog low-pass prototype into the desired analog filter type (low-pass, high-pass, band-pass, band-stop) with the specified frequencies.
3.  **Apply the Bilinear Transform:** Convert the analog filter transfer function $H_{analog}(s)$ into a digital filter transfer function $H_{digital}(z)$ using the bilinear transformation:
    $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$
    or more commonly, with pre-warping:
    $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ where $T$ is the sampling period.

**Key Concept:** The bilinear transform preserves the causality and stability of the filter and maps the entire $j\omega$ axis of the analog $s$-plane to the unit circle of the digital $z$-plane. However, it introduces a non-linear frequency warping.

**Reference:**
*   **Oppenheim & Schafer (3rd Ed., 2014), Chapter 5: Design of IIR Filters** - This is the primary reference for understanding how analog filter design techniques, including frequency transformations, are utilized to create digital IIR filters.
*   **Ingle & Proakis (3rd Ed., 2011), Chapter 7: Design of Digital Filters** - Section 7.3 discusses the design of IIR filters from analog prototypes, which inherently involves these analog transformations and the subsequent bilinear transform.

**Course Outcome Alignment:**
*   **CO2:** Design linear phase FIR filters and IIR filters of different specifications. (Knowledge Level: K3) - Analog transformations are foundational for designing IIR filters with specific frequency responses, which is a key aspect of this CO.

---

### 5. Pre-warping for Digital Filters

The bilinear transform causes a non-linear mapping between analog frequencies ($\omega$) and digital frequencies ($\Omega$). This is known as frequency warping:

$\Omega = 2 \arctan\left(\frac{\omega T}{2}\right)$

This warping means that the cutoff frequencies specified in the digital domain do not directly correspond to the cutoff frequencies used in the analog prototype if we simply use the bilinear transform. To counteract this, we often pre-warp the analog cutoff frequencies.

If the desired digital cutoff frequency is $\Omega_d$, we find the corresponding analog cutoff frequency $\omega_d$ using the inverse of the warping relation:

$\omega_d = \frac{2}{T} \tan\left(\frac{\Omega_d T}{2}\right)$

This $\omega_d$ is then used as the cutoff frequency when designing the analog prototype and applying the analog frequency transformations.

**Example:** Suppose we want a digital low-pass filter with a cutoff frequency of $\Omega_c = 0.2\pi$ rad/sample, and the sampling period $T = 1$ second.
The analog cutoff frequency $\omega_c$ to be used in the analog design would be:
$\omega_c = \frac{2}{1} \tan\left(\frac{(0.2\pi) \times 1}{2}\right) = 2 \tan(0.1\pi) \approx 2 \times 0.3249 = 0.6498$ rad/s.

**Reference:**
*   **Think DSP (Downey, 2nd Ed., 2012), Chapter 9: Filters** - Downey's book often provides practical insights into filter design. While it might focus on digital methods, the necessity of pre-warping when using analog-to-digital transformations is a critical concept for practical implementation.

---

### 6. FIR Filters and Frequency Transformations

While this topic is primarily about analog transformations, it's important to note that FIR filter design also involves frequency shaping. However, the direct method for FIR filter design (e.g., windowing method, frequency sampling method) typically works directly in the digital domain.

The analog frequency transformations discussed here are most directly applicable to the design of **IIR filters** because IIR filter design relies heavily on starting with analog filter prototypes.

**Key Point:** Analog frequency transformations are the foundation for designing *analog* filters of different types from a single prototype. These analog filters are then often converted to *digital* IIR filters.

**Course Outcome Alignment:**
*   **CO2:** Design linear phase FIR filters and IIR filters of different specifications. (Knowledge Level: K3) - This topic directly supports the "IIR filters of different specifications" part of CO2.

---

### 7. Practice Questions and Exercises

**Question 1:**
A normalized low-pass analog filter has the transfer function $H_{LP,proto}(s) = \frac{1}{s+1}$.
Derive the transfer function of a high-pass analog filter with a cutoff frequency of $\omega_c' = 500$ rad/s, obtained by transforming the low-pass prototype.
(Knowledge Level: K3)

**Answer 1:**
The transformation for low-pass to high-pass is $s = \frac{\omega_c'}{s'}$.
Given $\omega_c' = 500$ rad/s.
$s = \frac{500}{s'}$
$H_{HP}(s') = H_{LP,proto}\left(\frac{500}{s'}\right) = \frac{1}{\frac{500}{s'} + 1} = \frac{s'}{500 + s'}$

---

**Question 2:**
Consider a normalized low-pass Butterworth filter of order 1, $H_{LP,proto}(s) = \frac{1}{s+1}$.
We want to design a band-pass analog filter with a center frequency $\omega_0' = 1000$ rad/s and a bandwidth $B = 500$ rad/s.
What is the required transformation and what is the order of the resulting band-pass filter?
(Knowledge Level: K3)

**Answer 2:**
The transformation for low-pass to band-pass is $s = \frac{s'^2 + \omega_0'^2}{Bs'}$.
Given $\omega_0' = 1000$ rad/s and $B = 500$ rad/s.
$s = \frac{s'^2 + (1000)^2}{500 s'} = \frac{s'^2 + 10^6}{500 s'}$
The order of the resulting band-pass filter is twice the order of the prototype. Since the prototype is order 1, the band-pass filter will be order 2.

---

**Question 3:**
Suppose you are designing a digital IIR filter using the bilinear transform. Your desired digital low-pass filter has a cutoff frequency $\Omega_c = 0.3\pi$ rad/sample. If the sampling period $T = 0.01$ s, what analog cutoff frequency $\omega_c$ should you use for the analog prototype design?
(Knowledge Level: K3)

**Answer 3:**
We use the pre-warping formula: $\omega_c = \frac{2}{T} \tan\left(\frac{\Omega_c T}{2}\right)$.
Given $\Omega_c = 0.3\pi$ rad/sample and $T = 0.01$ s.
$\omega_c = \frac{2}{0.01} \tan\left(\frac{(0.3\pi) \times 0.01}{2}\right)$
$\omega_c = 200 \tan(0.0015\pi)$
$\omega_c \approx 200 \times 0.004713 \approx 0.9426$ rad/s.

---

### 8. Important Points to Remember

*   **Prototype Filter:** Frequency transformations are typically applied to a normalized low-pass analog prototype filter.
*   **Transformation Formulas:** Memorize the key transformation formulas for low-pass to low-pass, high-pass, band-pass, and band-stop filters.
*   **Order Increase:** Band-pass and band-stop transformations double the order of the filter.
*   **Analog to Digital Bridge:** These analog transformations are critical steps in designing digital IIR filters via analog prototypes.
*   **Pre-warping:** Essential for accurate digital cutoff frequencies when using the bilinear transform to convert analog designs to digital.
*   **FIR vs. IIR:** Analog transformations are most relevant to IIR filter design. FIR filters are usually designed directly in the digital domain.

---

This set of notes provides a comprehensive overview of frequency transformations in the analog domain, as relevant to the design of digital filters, particularly IIR filters. The content aims to align with the provided learning outcomes and course outcomes, with references to the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
