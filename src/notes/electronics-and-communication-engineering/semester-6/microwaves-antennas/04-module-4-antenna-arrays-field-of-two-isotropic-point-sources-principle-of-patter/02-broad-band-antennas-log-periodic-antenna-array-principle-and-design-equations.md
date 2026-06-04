---
title: "Broad band antennas : Log periodic antenna array – Principle and design equations"
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb3"
status: "completed"
scrapedAt: "2026-05-23T18:01:45.286Z"
---
# MICROWAVES & ANTENNAS: Module 4 - Antenna Arrays & Broadband Antennas

## Topic: Log Periodic Antenna Array (LPDA)

**Course Outcome Alignment:** CO4 (Design important broadband antennas and arrays) - **Knowledge Level: K3**

**Learning Outcome:** Understand the principle and design equations of Log Periodic Antenna Arrays.

---

### 1. Introduction to Broadband Antennas

Before delving into the specifics of LPDAs, it's essential to understand why broadband antennas are crucial in microwave engineering.

*   **Definition:** A broadband antenna is designed to operate efficiently over a wide range of frequencies, typically with a VSWR (Voltage Standing Wave Ratio) of less than 2:1 or 3:1.
*   **Importance:**
    *   **Frequency Agility:** Allows systems to operate on multiple frequencies without changing antennas.
    *   **Wideband Applications:** Essential for applications like electronic warfare (EW), radar, digital broadcasting, and data communications.
    *   **Reduced System Complexity:** Eliminates the need for multiple single-frequency antennas.
*   **Challenges:** Achieving broad bandwidth often comes with trade-offs in terms of directivity, gain, and physical size.

---

### 2. Principle of Log Periodic Antenna Array (LPDA)

The Log Periodic Antenna Array (LPDA), also known as a Log-Periodic Dipole Array (LPDA), is a passive antenna design that achieves broadband characteristics by employing a series of resonant elements of progressively changing lengths and spacings.

*   **Key Idea:** The LPDA is designed such that as the operating frequency changes, a different set of elements within the array becomes resonant, while the others remain significantly off-resonance. This ensures that there is always at least one pair of elements resonating effectively at any given frequency within the design bandwidth.
*   **Logarithmic Periodicity:** The term "log periodic" refers to the fact that the dimensions of the antenna (element lengths and spacings) change in a geometric progression with respect to frequency. This means that the design parameters exhibit periodicity on a logarithmic scale of frequency.
    *   The ratio of consecutive element lengths and spacings remains constant.
    *   This logarithmic scaling is what enables the antenna to maintain its radiation characteristics over a wide band of frequencies.

*   **Resonance and Excitation:**
    *   Each dipole element in the array has a resonant frequency determined by its length (approximately $\lambda/2$).
    *   The driving point of the array is usually at the shortest dipole, which is designed to be resonant at the highest frequency of operation.
    *   As the frequency decreases, the resonant elements shift progressively towards the longer dipoles.
    *   The parasitic coupling between adjacent elements plays a crucial role in directing the radiation. The longest elements are usually terminated in a short circuit or a terminating resistor to absorb power and prevent reflections.

*   **Structure:**
    *   An LPDA typically consists of a series of dipoles or similar radiating elements.
    *   These elements are mounted on a single boom or support structure.
    *   The elements are arranged in a "V" shape or along a straight line.
    *   The lengths of the elements decrease exponentially along the array.
    *   The spacing between elements also decreases exponentially along the array.
    *   The feed point is usually at the end with the shortest elements.

*   **Pattern Multiplication Analogy (from previous sections of Module 4):**
    While not a direct application of the "pattern multiplication" principle as in basic array theory (where an array of point sources creates a resulting pattern by multiplying the pattern of a single element by the array factor), the LPDA utilizes a similar *concept* of distributed resonance. The overall radiation pattern is a result of the combined radiation from the actively resonating elements at a given frequency. The "array factor" in an LPDA context is more implicitly defined by the geometric scaling of elements and their positions.

*   **Key Parameters:**
    *   **Length of the shortest element ($l_1$):** Determines the upper frequency limit ($f_{max}$).
    *   **Length of the longest element ($l_n$):** Determines the lower frequency limit ($f_{min}$).
    *   **Number of elements (N):** Affects bandwidth, gain, and directivity.
    *   **Spacing between elements ($d_i$):** Influences the impedance and radiation characteristics.
    *   **Scaling factor ($\tau$):** The ratio of consecutive element lengths ($l_{i+1}/l_i$) and spacings ($d_{i+1}/d_i$).
    *   **Growth factor ($\sigma$):** The ratio of consecutive inter-element distances to the lengths of the elements at those positions (e.g., $d_i / l_i$).

---

### 3. Design Equations for Log Periodic Antenna Array (LPDA)

The design of an LPDA involves selecting specific geometric parameters to achieve the desired bandwidth and radiation characteristics. The core design is governed by two main scaling factors: $\tau$ and $\sigma$.

**References:**
*   **Krauss, Marhefka, Khan - Antennas for all Applications:** Provides detailed derivations and design considerations for LPDAs.
*   **G S N Raju - Antennas and Wave Propagation:** Offers practical approaches to LPDA design.

**Design Steps and Equations:**

1.  **Define the Desired Frequency Range:**
    *   Upper frequency limit: $f_{max}$
    *   Lower frequency limit: $f_{min}$
    *   Bandwidth ratio: $B = f_{max} / f_{min}$

2.  **Choose the Scaling Factors:**
    *   **Scaling factor ($\tau$):** This determines the geometric progression of element lengths and spacings. A typical range for $\tau$ is **0.7 to 0.95**.
        *   A smaller $\tau$ leads to a larger number of elements for a given bandwidth and generally better performance over the band.
        *   $\tau = l_{i+1} / l_i = d_{i+1} / d_i$
    *   **Growth factor ($\sigma$):** This relates the spacing to the element length. A typical range for $\sigma$ is **0.02 to 0.15**.
        *   $\sigma = 2 \times (d_i / l_i)$ (Note: Some texts define $\sigma$ as $d_i / l_i$, but the factor of 2 is common when considering the spacing relative to the dipole length which is roughly $\lambda/2$).
        *   The factor of 2 arises because the element length $l_i$ is approximately $\lambda_i / 2$, and the spacing $d_i$ is often related to the wavelength at the *next* element, or the average wavelength. A more robust definition often used is $\sigma = 2(d_i/l_i)$. The $\sigma$ parameter influences the antenna's input impedance and radiation pattern.

3.  **Determine Element Lengths:**
    The length of each element ($l_i$) is related to its resonant frequency. The longest element ($l_n$) is generally designed to resonate at the lowest frequency ($f_{min}$), and the shortest element ($l_1$) at the highest frequency ($f_{max}$).

    *   **Relationship between length and resonant frequency:** For a dipole of length $l$, its resonant frequency $f_r$ is approximately $f_r \approx c / (2l)$, where $c$ is the speed of light. Therefore, $l \approx c / (2f_r)$.

    *   **Using the scaling factor ($\tau$):**
        Let $l_1$ be the length of the shortest element and $l_N$ be the length of the longest element.
        *   $l_i = l_1 / \tau^{(i-1)}$ for $i=1, 2, ..., N$
        *   If $l_N$ is the longest element, then $l_N = l_1 / \tau^{(N-1)}$.

    *   **Calculating Element Lengths from Frequency Limits:**
        We can relate the longest and shortest element lengths to the frequency limits.
        *   $l_1 \approx \frac{c}{2 f_{max}} \times K_{l1}$ (where $K_{l1}$ is a correction factor, often slightly less than 1, accounting for end effects and probe feed).
        *   $l_N \approx \frac{c}{2 f_{min}} \times K_{lN}$ (where $K_{lN}$ is a similar correction factor for the longest element).

        Using the scaling factor $\tau$:
        $l_N = l_1 \times (\text{factor based on } \tau \text{ and } N)$
        A more direct way relating $l_1$ and $l_N$ is through the number of elements and $\tau$:
        $l_N = l_1 / \tau^{(N-1)}$
        Substituting the frequency relationships:
        $\frac{c}{2 f_{min}} \approx \frac{c}{2 f_{max}} \times \frac{1}{\tau^{(N-1)}}$
        $f_{max} / f_{min} \approx 1 / \tau^{(N-1)}$
        $B \approx 1 / \tau^{(N-1)}$

        From this, we can estimate the number of elements $N$ required for a given bandwidth $B$ and scaling factor $\tau$:
        $\tau^{(N-1)} \approx 1/B$
        $(N-1) \log(\tau) \approx \log(1/B)$
        $N-1 \approx \frac{\log(B)}{-\log(\tau)}$
        $N \approx 1 + \frac{\log(B)}{-\log(\tau)}$

        Once $l_1$ is determined (based on $f_{max}$), the lengths of other elements can be calculated:
        $l_i = l_1 \cdot \tau^{i-1}$

4.  **Determine Element Spacings:**
    The spacing between elements ($d_i$) is also scaled geometrically. It's often related to the element lengths.

    *   **Using the growth factor ($\sigma$):**
        $d_i = \frac{\sigma}{2} \cdot l_i$
        So, the spacing between element $i$ and element $i+1$ is $d_i$ (or sometimes the distance between the centers of the elements). Let's assume $d_i$ is the distance between element $i$ and $i+1$.
        *   $d_i = d_1 \cdot \tau^{(i-1)}$ (if $d_1$ is the spacing between element 1 and 2).

        Using the relationship with element lengths:
        $d_i = \frac{\sigma}{2} l_i$.
        This implies:
        $\frac{\sigma}{2} l_{i+1} = \frac{\sigma}{2} l_i \cdot \tau$
        $l_{i+1} = l_i \cdot \tau$, which is consistent.

        The distance between element $i$ and $i+1$ is $d_i$. So:
        $d_i = \frac{\sigma}{2} l_i$ (This definition might vary in texts, check context).
        A more precise definition often used is that the distance between the center of element $i$ and element $i+1$ is $d_i$, and:
        $d_i = d_1 \tau^{i-1}$.
        And the relationship with element length is often expressed as:
        $d_i \approx \sigma l_i$ or $d_i \approx \sigma (\lambda_i/2)$.

        The common parameterization is:
        *   $l_i = l_1 \tau^{i-1}$
        *   $d_i = d_1 \tau^{i-1}$
        And the relationship between $l_i$ and $d_i$ is established through $\sigma$:
        $d_i / l_i \approx \sigma/2$ (for dipole spacing).
        So $d_1 = (\sigma/2) l_1$.
        Thus, $d_i = (\sigma/2) l_1 \tau^{i-1}$.

    *   **Feed Point:** The feed is usually at the end with the shortest elements. The impedance matching is critical and is typically achieved by varying the length and spacing parameters or using a balun.

5.  **Termination:**
    The longest elements (at the other end of the array) are usually terminated in a resistor ($R_T$) to absorb any residual energy and prevent reflections, which would degrade the broadband performance. The value of $R_T$ is typically close to the characteristic impedance of the feed line (e.g., 50 Ohms).

**Example Design Procedure:**

Let's design an LPDA for the frequency range of 100 MHz to 1000 MHz.

*   $f_{min} = 100 \text{ MHz}$
*   $f_{max} = 1000 \text{ MHz}$
*   Bandwidth ratio $B = f_{max} / f_{min} = 1000 / 100 = 10$.

*   **Choose design parameters:**
    *   Let $\tau = 0.9$.
    *   Let $\sigma = 0.1$. (This implies $d_i/l_i \approx 0.05$).

*   **Calculate the number of elements (N):**
    $N \approx 1 + \frac{\log(10)}{-\log(0.9)} \approx 1 + \frac{1}{-0.04575} \approx 1 - 21.86 \approx -20.86$.
    *Wait, log(0.9) is negative. Let's recheck the formula.*
    $N \approx 1 + \frac{\log(B)}{-\log(\tau)} = 1 + \frac{\log(10)}{-\log(0.9)} = 1 + \frac{1}{-(-\log(10/9))} = 1 + \frac{1}{\log(10/9)}$.
    $N \approx 1 + \frac{1}{\log(1.111)} \approx 1 + \frac{1}{0.04575} \approx 1 + 21.86 \approx 22.86$.
    So, we need approximately 23 elements.

    *Alternatively, using $B \approx 1 / \tau^{(N-1)}$ directly:*
    $10 \approx 1 / (0.9)^{(N-1)}$
    $(0.9)^{(N-1)} \approx 0.1$
    $(N-1) \log(0.9) \approx \log(0.1)$
    $(N-1) (-0.04575) \approx -1$
    $N-1 \approx \frac{-1}{-0.04575} \approx 21.86$
    $N \approx 22.86$. Let's use $N=23$.

*   **Calculate the shortest element length ($l_1$):**
    $l_1 \approx \frac{c}{2 f_{max}}$. Assuming $c \approx 3 \times 10^8$ m/s.
    $l_1 \approx \frac{3 \times 10^8 \text{ m/s}}{2 \times 1000 \times 10^6 \text{ Hz}} = \frac{3 \times 10^8}{2 \times 10^9} = 0.15 \text{ meters} = 15 \text{ cm}$.
    *(Note: In practice, $l_1$ might be slightly shorter, e.g., 0.14 m, to account for end effects and feed probe capacitance.)* Let's use $l_1 = 0.14$ m.

*   **Calculate the lengths of other elements:**
    $l_2 = l_1 \times \tau = 0.14 \times 0.9 = 0.126 \text{ m}$
    $l_3 = l_2 \times \tau = 0.126 \times 0.9 = 0.1134 \text{ m}$
    ...
    $l_{23} = l_1 \times \tau^{22} = 0.14 \times (0.9)^{22} \approx 0.14 \times 0.1085 \approx 0.0152 \text{ m} = 1.52 \text{ cm}$.
    *(The longest element is $l_1 = 0.14$ m, and the shortest is $l_{23}$ in this ordering convention. If we consider the shortest element as element 1, $l_1 = 0.0152$ m and $l_{23} = 0.14$ m.)* Let's re-align:

    Let element 1 be the longest, and element 23 be the shortest.
    *   $l_1$ (longest) $\approx \frac{c}{2 f_{min}} = \frac{3 \times 10^8}{2 \times 100 \times 10^6} = 1.5 \text{ m}$.
    *   $l_{23}$ (shortest) $\approx \frac{c}{2 f_{max}} = \frac{3 \times 10^8}{2 \times 1000 \times 10^6} = 0.15 \text{ m}$.

    Let's re-choose $\tau$ and $N$ such that $l_1$ and $l_{23}$ fit the bandwidth.
    If we fix the longest element $l_1 = 1.5$ m and the shortest element $l_N = 0.15$ m, then:
    $l_N = l_1 \tau^{N-1}$
    $0.15 = 1.5 \tau^{N-1}$
    $0.1 = \tau^{N-1}$

    If we choose $\tau = 0.8$, then $0.1 = (0.8)^{N-1}$.
    $\log(0.1) = (N-1) \log(0.8)$
    $-1 = (N-1) (-0.0969)$
    $N-1 = 1 / 0.0969 \approx 10.32$
    $N \approx 11.32$. Let's use $N=12$.

    So, for $f_{min}=100$ MHz, $f_{max}=1000$ MHz:
    *   $\tau = 0.8$
    *   $\sigma = 0.1$
    *   $N = 12$ elements.
    *   Longest element length $l_1 = 1.5$ m.
    *   Shortest element length $l_{12} = 1.5 \times (0.8)^{11} \approx 1.5 \times 0.0859 \approx 0.129$ m.
    *(This fits our requirement of $l_{shortest} \approx 0.15$ m. Slight adjustments might be needed for optimal performance.)*

*   **Calculate element spacings:**
    Using $d_i = (\sigma/2) l_i$:
    $d_1 = (\sigma/2) l_1 = (0.1/2) \times 1.5 \text{ m} = 0.075 \text{ m} = 7.5 \text{ cm}$.
    $d_2 = (\sigma/2) l_2 = (\sigma/2) (l_1 \tau) = d_1 \tau = 0.075 \times 0.8 = 0.06 \text{ m} = 6 \text{ cm}$.
    ...
    $d_{11} = d_1 \tau^{10} = 0.075 \times (0.8)^{10} \approx 0.075 \times 0.107 \approx 0.008 \text{ m} = 0.8 \text{ cm}$.

*   **Feed Point:** The feed is connected to the shortest elements (element 12 in this case).

*   **Termination:** The longest element (element 1) is typically terminated with a resistor $R_T$.

**Important Considerations:**

*   **Element Type:** While dipoles are common, LPDAs can be constructed with other elements like folded dipoles, Yagi-Uda elements, or even slots.
*   **Feed Network:** A feeding mechanism (often a balun) is required to feed the array and ensure balanced operation.
*   **Impedance Matching:** The input impedance of an LPDA is generally around 50 Ohms, but variations occur across the band. Techniques like varying $\sigma$ or element lengths can optimize impedance matching.
*   **VSWR:** A well-designed LPDA can achieve a VSWR of 2:1 or better over its specified bandwidth.
*   **Radiation Pattern:** LPDAs typically produce a directional beam in the direction of the tapering elements. The beamwidth and directivity vary with frequency.

---

### 4. Grating Lobes in LPDAs (Contextual Relevance)

While the primary focus of this topic is LPDA design, it's worth noting that the concept of grating lobes, discussed earlier for linear arrays, can also be relevant in understanding the behavior of LPDAs, especially concerning their element spacing.

*   **Grating Lobes:** Occur in periodic antenna arrays when the spacing between elements becomes too large relative to the wavelength. They manifest as additional beams in the radiation pattern, appearing at angles other than the main beam.
*   **LPDA Spacing:** The geometric progression of element spacing in an LPDA, governed by $\tau$ and $\sigma$, is designed to maintain a consistent relationship between element spacing and wavelength across the operating band.
    *   As frequency decreases, wavelengths increase, and element lengths and spacings also increase (relative to the feed point).
    *   The chosen $\sigma$ parameter helps to keep the spacing-to-wavelength ratio within limits that avoid significant grating lobe formation, particularly in the forward direction of radiation.
*   **Design Trade-off:** A smaller $\sigma$ (closer spacing relative to length) generally reduces the likelihood of grating lobes but might lead to reduced gain or different impedance characteristics.

---

### 5. Practice Questions and Answers

**Question 1:**
An LPDA is designed for a frequency range of 200 MHz to 1200 MHz. If the scaling factor $\tau$ is chosen as 0.9, what is the approximate number of elements required?

**Answer:**
Bandwidth ratio $B = f_{max} / f_{min} = 1200 \text{ MHz} / 200 \text{ MHz} = 6$.
Using the formula $N \approx 1 + \frac{\log(B)}{-\log(\tau)}$:
$N \approx 1 + \frac{\log(6)}{-\log(0.9)}$
$N \approx 1 + \frac{0.7781}{-(-0.04575)}$
$N \approx 1 + \frac{0.7781}{0.04575} \approx 1 + 16.99 \approx 17.99$.
Therefore, approximately **18 elements** are required.

**Question 2:**
Explain the role of the scaling factor $\tau$ and the growth factor $\sigma$ in the design of an LPDA.

**Answer:**
*   **Scaling Factor ($\tau$):** $\tau$ is the ratio of consecutive element lengths and spacings (e.g., $l_{i+1}/l_i = \tau$). It dictates the geometric progression of the array's dimensions. A smaller $\tau$ implies a larger number of elements for a given bandwidth and generally leads to more uniform performance across the band.
*   **Growth Factor ($\sigma$):** $\sigma$ relates the spacing between elements to their lengths (e.g., $2d_i/l_i = \sigma$). It influences the antenna's input impedance and radiation characteristics. A smaller $\sigma$ leads to closer spacing and can affect the active region of resonance.

**Question 3:**
What is the primary principle that allows a Log Periodic Antenna Array to operate over a wide range of frequencies?

**Answer:**
The primary principle is the **logarithmic scaling of element dimensions**. As the frequency changes, the resonant elements within the array shift progressively due to the geometric progression of element lengths. This ensures that there is always at least one pair of elements resonating effectively at any given frequency within the design bandwidth, maintaining consistent radiation characteristics.

---

### 6. Important Points to Remember

*   **Logarithmic Periodicity:** The core concept enabling broadband operation.
*   **Geometric Progression:** Element lengths and spacings change by a constant ratio ($\tau$).
*   **Resonant Elements:** At any given frequency, a subset of elements will be resonant, determining the radiation pattern.
*   **Design Parameters:** $\tau$, $\sigma$, and the number of elements ($N$) are key to LPDA design.
*   **Frequency Range:** Determined by the length of the shortest and longest elements.
*   **Termination:** The longest elements are typically terminated to absorb unwanted energy.
*   **Applications:** Wideband applications like TV reception, EW, and telemetry.
*   **Bandwidth:** Achieved by ensuring that as frequency changes, the active resonant elements shift along the array.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Textual References

*   **Annapurna Das and Sisir K Das - Microwave Engineering (4th ed.):** Chapter 7 (Antennas) will likely cover broadband antennas, including LPDAs, with practical design considerations.
*   **John D. Krauss, Marhefka, Khan - Antennas for all Applications (4th ed.):** Chapter 12 (Log-Periodic Antennas) is a comprehensive resource detailing the theory, design, and applications of LPDAs.
*   **G S N Raju - Antennas and Wave Propagation (3rd ed.):** Chapter 10 (Broadband Antennas) typically includes sections on LPDAs, providing design equations and principles.
*   **Samuel Y Liao - Microwave Devices & Circuits (3rd ed.):** While more focused on devices, it might touch upon antenna principles in the context of system design.

---

This concludes the detailed study notes on the Log Periodic Antenna Array. Ensure to refer to the mentioned textbooks for deeper insights and specific derivations.