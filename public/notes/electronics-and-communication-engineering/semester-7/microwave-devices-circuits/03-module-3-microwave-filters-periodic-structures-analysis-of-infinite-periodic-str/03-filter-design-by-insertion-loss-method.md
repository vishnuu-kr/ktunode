---
title: "Filter design by insertion loss method."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 3: Microwave filters – Periodic structures – Analysis of infinite periodic structures and terminated periodic structures"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff49f"
status: "completed"
scrapedAt: "2026-05-23T18:07:57.053Z"
---
# MICROWAVE DEVICES & CIRCUITS: Module 3 - Microwave Filters

## Topic: Filter Design by Insertion Loss Method

This topic delves into a powerful and widely used method for designing microwave filters: the **Insertion Loss Method**. This approach focuses on achieving desired filter performance metrics, such as passband ripple, stopband attenuation, and bandwidth, by synthesizing a low-pass prototype filter and then transforming it to the desired bandpass, bandstop, or highpass characteristics.

---

### 1. Introduction to Filter Design by Insertion Loss Method

The Insertion Loss Method, also known as the **Butterworth-Chebyshev method** or **approximation method**, is a synthesis technique that starts from a set of desired filter specifications and works backward to determine the circuit elements. It aims to achieve a prescribed response in the passband and stopband by approximating the ideal filter response with rational functions.

**Key Concepts:**

*   **Filter Specifications:** These are the desired performance characteristics of the filter, including:
    *   **Passband Ripple ($A_p$):** The maximum allowable variation in insertion loss within the passband.
    *   **Stopband Attenuation ($A_s$):** The minimum required attenuation in the stopband.
    *   **Cutoff Frequencies ($f_p$, $f_s$):** The frequencies marking the edge of the passband and the beginning of the stopband.
    *   **Bandwidth ($BW$):** The range of frequencies where the filter passes signals.
    *   **Order of the Filter (n):** The complexity of the filter, directly related to the number of reactive elements.
*   **Low-Pass Prototype Filter:** A normalized low-pass filter with a cutoff frequency of 1 rad/s and a characteristic impedance of 1 Ohm. The design process begins with synthesizing this prototype.
*   **Approximation Functions:** Mathematical functions that approximate the ideal filter response. Common choices include:
    *   **Butterworth (Maximally Flat):** Offers a maximally flat passband response, but the transition from passband to stopband is gradual.
    *   **Chebyshev Type I:** Provides a steeper transition band than Butterworth at the expense of ripple in the passband.
    *   **Chebyshev Type II (Inverse Chebyshev):** Features a maximally flat passband and introduces ripples in the stopband for a sharper transition.
    *   **Elliptic (Cauer):** Offers the steepest transition band for a given order, but exhibits ripple in both the passband and stopband.
*   **Synthesis:** The process of deriving the component values (inductances and capacitances for lumped element filters, or lengths and characteristic impedances for distributed element filters) that realize the designed filter response.

**Textbook References:**

*   **Pozar, "Microwave Engineering" (4/e):** Chapter 7, "Microwave Filters," extensively covers filter design principles, including the insertion loss method and various approximation techniques.
*   **Collin, "Foundation of Microwave Engineering" (2/e):** Chapter 5, "Filters," provides a detailed treatment of filter synthesis and approximation methods.
*   **Liao, "Microwave Devices & Circuits" (3/e):** Chapter 6, "Microwave Filters," discusses filter design concepts and practical considerations.

---

### 2. Filter Approximation and Synthesis

The core of the insertion loss method involves approximating the desired filter response and then synthesizing the circuit.

#### 2.1 Approximation Techniques

The choice of approximation function dictates the trade-off between passband ripple, transition bandwidth, and stopband attenuation.

**2.1.1 Butterworth Approximation (Maximally Flat)**

*   **Response:** Maximally flat in the passband.
*   **Transfer Function Magnitude Squared:** $|K(j\omega)|^2 = \frac{1}{1 + \epsilon^2 \omega^{2n}}$, where $\epsilon$ is a constant related to the passband ripple.
*   **Characteristics:**
    *   Monotonic insertion loss in the passband.
    *   Gradual transition band.
    *   Good for applications where passband flatness is critical.
*   **Example:** A 3rd-order Butterworth low-pass filter has a transfer function that is maximally flat at $\omega=0$.

**2.1.2 Chebyshev Type I Approximation**

*   **Response:** Equiripple in the passband, monotonic in the stopband.
*   **Transfer Function Magnitude Squared:** $|K(j\omega)|^2 = \frac{1}{1 + \epsilon^2 T_n^2(\omega/\omega_p)}$, where $T_n(\omega)$ is the $n^{th}$-order Chebyshev polynomial, and $\omega_p$ is the passband cutoff frequency.
*   **Characteristics:**
    *   Steeper transition band compared to Butterworth for the same order.
    *   Passband ripple ($A_p$) can be controlled.
    *   Requires careful selection of ripple and cutoff frequency.
*   **Example:** A 2nd-order Chebyshev Type I filter will have a specific ripple magnitude in its passband and a sharper rolloff than a 2nd-order Butterworth.

**2.1.3 Chebyshev Type II Approximation (Inverse Chebyshev)**

*   **Response:** Maximally flat passband, equiripple in the stopband.
*   **Transfer Function Magnitude Squared:** $|K(j\omega)|^2 = \frac{1}{1 + \epsilon^2 / T_n^2(\omega_s/\omega)}$, where $\omega_s$ is the stopband frequency.
*   **Characteristics:**
    *   Maximally flat passband.
    *   Steeper transition band due to stopband zeros.
    *   The stopband ripples allow for a sharper cutoff.
*   **Example:** Designing an inverse Chebyshev filter aims to achieve a flat passband while placing zeros in the stopband to create deep notches.

**2.1.4 Elliptic Approximation (Cauer)**

*   **Response:** Equiripple in both the passband and stopband.
*   **Transfer Function Magnitude Squared:** Involves Jacobian elliptic functions.
*   **Characteristics:**
    *   Steepest transition band for a given order.
    *   Offers the best overall performance for a given number of elements.
    *   Requires careful design to balance passband and stopband ripple.
*   **Example:** Elliptic filters are chosen when the available space for filter components is limited, and the sharpest possible cutoff is required.

**Important Point to Remember:** The choice of approximation function is a critical design decision based on the specific requirements of the application.

**Textbook References:**

*   **Pozar:** Chapter 7.2, "Filter Approximation," provides detailed mathematical derivations and comparisons of Butterworth, Chebyshev, and Elliptic approximations.
*   **Collin:** Chapter 5.2, "Approximation Methods," offers in-depth mathematical analysis of these approximation functions.

#### 2.2 Synthesis of the Low-Pass Prototype

Once the approximation function is chosen and the order of the filter determined, the next step is to synthesize the low-pass prototype. This typically involves:

1.  **Normalized Response:** Converting the desired filter specifications (cutoff frequencies, ripple, etc.) into normalized values for a low-pass prototype with $\omega_c = 1$ rad/s and $R_0 = 1 \Omega$.
2.  **Low-Pass Prototype Transfer Function:** Deriving the polynomial representing the magnitude squared of the transfer function based on the chosen approximation.
3.  **Polynomial Factorization:** Factoring the denominator polynomial of the transfer function to find the poles of the filter.
4.  **Realization:** Using the poles to construct the ladder network (using $L$ and $C$ elements for lumped filters) or the equivalent circuit for distributed element filters. This involves techniques like:
    *   **Partial Fraction Expansion:** For lumped element filters, this is used to derive the series and shunt elements of the ladder network.
    *   **Element Values:** The component values of the prototype are derived from the coefficients of the Chebyshev polynomials or other approximation functions.

**Textbook References:**

*   **Pozar:** Chapter 7.3, "Synthesis of Lossless Networks," and Chapter 7.4, "Realization of Lumped-Element Filters," explain the synthesis procedures for prototype filters.
*   **Collin:** Chapter 5.3, "Filter Synthesis," details various synthesis techniques.

---

### 3. Transformation to Bandpass, Bandstop, and Highpass Filters

The synthesized low-pass prototype is then transformed to achieve the desired bandpass, bandstop, or highpass filter characteristics. This transformation involves replacing the reactance ($j\omega$) of the low-pass prototype with appropriate frequency-dependent functions.

#### 3.1 Low-Pass to Bandpass Transformation

*   **Transformation:** Replace $s$ with $\frac{s^2 + \omega_0^2}{\beta s}$ in the low-pass prototype polynomial, where $\omega_0$ is the center frequency and $\beta$ is the fractional bandwidth.
*   **Result:** The single pole at $s = j\omega$ in the low-pass prototype is transformed into two poles in the bandpass filter.
*   **Component Realization:** This transformation leads to pairs of series or shunt resonant circuits, which are the building blocks of bandpass filters.

#### 3.2 Low-Pass to Bandstop Transformation

*   **Transformation:** Replace $s$ with $\frac{\beta s}{s^2 + \omega_0^2}$ in the low-pass prototype polynomial, where $\omega_0$ is the center frequency and $\beta$ is the fractional bandwidth.
*   **Result:** The single pole at $s = j\omega$ in the low-pass prototype is transformed into two zeros in the bandstop filter.
*   **Component Realization:** This transformation leads to pairs of parallel resonant circuits, forming the basis of bandstop filters.

#### 3.3 Low-Pass to Highpass Transformation

*   **Transformation:** Replace $s$ with $\frac{\omega_c}{s}$ in the low-pass prototype polynomial, where $\omega_c$ is the cutoff frequency.
*   **Result:** The low-pass characteristics are inverted to high-pass characteristics. Capacitors become inductors and vice-versa.
*   **Component Realization:** Inductors in the low-pass prototype become capacitors, and capacitors become inductors in the high-pass filter.

**Textbook References:**

*   **Pozar:** Chapter 7.5, "Filter Transformations," provides detailed explanations and formulas for these transformations.
*   **Collin:** Chapter 5.4, "Frequency Transformations," covers the mathematical basis for transforming filter types.

---

### 4. Design of Microwave Filters using Distributed Elements

The insertion loss method can be applied to design microwave filters using distributed elements like microstrip lines, striplines, and coupled-line structures. The synthesis process starts with the lumped element prototype and then converts these lumped elements into their distributed equivalents.

**Key Distributed Element Structures:**

*   **Microstrip Hairpin Filters:** Utilize folded sections of microstrip lines to realize inductance and capacitance.
*   **Coupled-Line Filters:** Employ pairs of closely spaced transmission lines (e.g., coupled microstrips, coupled slotlines) to create the filtering response.
*   **Stub Filters:** Use open-circuited or short-circuited stubs to introduce transmission zeros or create resonant structures.
*   **Meandered Lines:** Used to reduce the physical size of filters by increasing the electrical length within a given area.

**Design Steps for Distributed Element Filters:**

1.  **Lumped Element Prototype Synthesis:** Design a lumped element low-pass prototype filter using the insertion loss method as described above.
2.  **Transformation:** Transform the low-pass prototype to the desired bandpass, bandstop, or highpass filter.
3.  **Distributed Element Realization:** Convert the lumped reactances ($L$ and $C$) into their distributed equivalents. This often involves:
    *   **Series Inductor:** Realized by a short length of transmission line with appropriate characteristic impedance and electrical length.
    *   **Shunt Capacitor:** Realized by a stub or a section of transmission line with specific impedance and length.
    *   **Resonant Circuits:** Achieved using combinations of transmission lines and stubs.
4.  **Physical Layout and Tuning:** Designing the physical layout on a substrate and performing electromagnetic simulations and tuning to achieve the desired performance.

**Reference Books:**

*   **Bhat and Koul, "Stripline-like Transmission Lines for MIC":** Chapter 7, "Filters," provides specific design techniques for filters using stripline and microstrip.
*   **Konishi, "Microwave Integrated Circuits":** Chapter 5, "Microwave Filters," discusses various distributed element filter structures and their design.
*   **Maloratsky, "Passive RF and Microwave Integrated Circuits":** Chapter 5, "Filters," covers distributed element filter design and practical considerations.

**Example:**

Consider designing a bandpass filter using coupled-line sections. After synthesizing a lumped element bandpass prototype, each series inductance might be realized by a pair of coupled lines with a certain coupling coefficient and length, and each shunt capacitance by a stub.

---

### 5. Filter Design Considerations and Practical Aspects

*   **Insertion Loss:** Minimizing insertion loss in the passband is crucial for signal integrity. This is influenced by the Q-factor of the components and the losses in the transmission lines.
*   **Return Loss:** A measure of impedance matching in the passband. High return loss (low VSWR) is desired.
*   **Group Delay:** Variations in group delay can cause signal distortion, especially for modulated signals. Filters are often designed to have a constant group delay in the passband.
*   **Quality Factor (Q):** The Q-factor of individual components and the filter as a whole directly impacts the insertion loss. High-Q components are preferred.
*   **Fabrication Tolerances:** Real-world manufacturing processes have tolerances that can affect the actual filter performance. Design should account for these variations.
*   **Softenning of the Response:** The transition band of a real filter is not as sharp as predicted by ideal models due to losses and dispersion.
*   **Choke Structures:** In some designs, especially those involving stubs, choke structures might be needed to ensure effective isolation between different parts of the circuit.

**Textbook References:**

*   **Liao:** Chapter 6, "Microwave Filters," discusses practical design considerations and techniques.
*   **Maloratsky:** Chapter 5, "Filters," highlights practical aspects of filter design and implementation.

---

### 6. Practice Questions and Answers

**Q1. What are the key specifications that define a microwave filter's performance?**

**A1.** The key specifications include passband ripple ($A_p$), stopband attenuation ($A_s$), cutoff frequencies ($f_p$, $f_s$), bandwidth ($BW$), and the order of the filter ($n$).

**Q2. Compare and contrast Butterworth and Chebyshev Type I approximations. When would you choose one over the other?**

**A2.**
*   **Butterworth:** Maximally flat passband, gradual transition. Ideal when passband flatness is paramount.
*   **Chebyshev Type I:** Equiripple in the passband, steeper transition. Chosen when a sharper cutoff is needed, and some passband ripple is acceptable.

**Q3. Explain the basic idea behind the low-pass to bandpass transformation.**

**A3.** The transformation replaces $s$ with $\frac{s^2 + \omega_0^2}{\beta s}$ in the low-pass prototype. This converts a single pole at $j\omega$ in the low-pass filter into two poles in the bandpass filter, effectively creating resonant circuits that form the bandpass response.

**Q4. How can a lumped element series inductor be realized using distributed elements?**

**A4.** A lumped element series inductor can be realized by a short section of transmission line with an appropriate characteristic impedance ($Z_0$) and electrical length ($\theta$). The equivalent inductance is approximately $L_{eq} \approx Z_0 \sin(\theta) / \omega$.

**Q5. What is the primary advantage of using an elliptic approximation for filter design?**

**A5.** The primary advantage of elliptic approximation is its ability to provide the steepest transition band for a given filter order, offering the best performance in terms of selectivity. However, this comes at the cost of ripple in both the passband and stopband.

---

### 7. Important Points to Remember

*   The **Insertion Loss Method** is a synthesis technique that starts with filter specifications and works backward to design the filter circuit.
*   The process begins by designing a **normalized low-pass prototype filter**.
*   The choice of **approximation function** (Butterworth, Chebyshev, Elliptic) dictates the trade-offs between passband ripple, transition bandwidth, and stopband attenuation.
*   **Frequency transformations** are used to convert the low-pass prototype into bandpass, bandstop, or highpass filters.
*   For microwave filters, **distributed element equivalents** of lumped elements are used, requiring careful selection of transmission line lengths and characteristic impedances.
*   Practical considerations like **insertion loss, return loss, group delay, and fabrication tolerances** are crucial for successful microwave filter design.

---

### 8. Alignment with Course Outcomes (COs)

*   **CO1 (K2):** While this topic primarily focuses on design, understanding the specifications and approximations lays the groundwork for understanding the behavior of active microwave devices when used in filter circuits.
*   **CO2 (K3):** The process of synthesizing filter circuits from transfer functions involves analyzing network behavior, albeit implicitly. Signal flow graphs can be used to analyze the performance of complex filter networks.
*   **CO3 (K3):** This topic is directly aligned with CO3 as it provides a detailed methodology for designing microwave filters. Students will learn to translate specifications into realizable circuits.
*   **CO4 (K2):** While not directly about MICs, the distributed element realization aspects of filter design are fundamental to understanding microwave integrated circuits. The principles of transmission line behavior are central to both.

---
This comprehensive set of notes provides a thorough understanding of the Filter Design by Insertion Loss Method, covering its theoretical underpinnings, practical implementation, and alignment with the course outcomes. Remember to consult the provided textbooks for more in-depth mathematical derivations and specific design examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
