---
title: "Micro strip Rectangular Patch Antennas -Design equations, important feeding methods."
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb5"
status: "completed"
scrapedAt: "2026-05-23T18:01:46.894Z"
---
## MICROWAVES & ANTENNAS: Module 4 - Antenna Arrays & Microstrip Patch Antennas

This document provides comprehensive study notes for Module 4, focusing on Antenna Arrays and Microstrip Rectangular Patch Antennas. These notes are designed to align with the stated learning outcomes and course outcomes, referencing the provided textbooks and offering practice questions.

---

### 1. Antenna Arrays (Overview & Foundation)

**1.1 Field of Two Isotropic Point Sources**

*   **Concept:** An array is a collection of radiating elements, spaced and phased in a specific manner to achieve desired radiation characteristics (e.g., directivity, beamwidth, sidelobe levels). The simplest array consists of two isotropic point sources.
*   **Isotropic Source:** A hypothetical antenna that radiates power uniformly in all directions.
*   **Field Calculation:** The total electric field at any point in space due to an array of sources is the vector sum of the fields from each individual source.
    *   For two isotropic sources separated by a distance 'd' along the z-axis, and with a phase difference $\phi$ between them, the resultant field can be calculated.
    *   The phase difference ($\phi$) determines the beam steering and the shape of the radiation pattern.
*   **Key takeaway:** The interference between the fields of individual elements is fundamental to array behavior.

**1.2 Principle of Pattern Multiplication**

*   **Concept:** For an array of identical elements, the overall radiation pattern of the array can be obtained by multiplying the pattern of a single element by the "array factor."
*   **Array Factor (AF):** This represents the radiation pattern of the array if each element were an isotropic point source, considering only the spatial arrangement and phasing of the elements. It solely depends on the geometry and excitation of the array.
*   **Array Pattern = (Single Element Pattern) x (Array Factor)**
*   **Significance:** This principle simplifies the design and analysis of complex arrays by separating the contributions of the element's intrinsic radiation characteristics and the array's structural arrangement.
*   **Textbook Reference:** This principle is a cornerstone in antenna array analysis and is thoroughly discussed in *Antennas for all Applications* by Krauss et al. and *Antennas and Wave Propagation* by G S N Raju.

**1.3 Array Factor (AF)**

*   **Definition:** The array factor is the radiation pattern of an array of isotropic point sources, assuming they are the only radiators. It describes how the spacing and phasing of the elements combine to produce directivity.
*   **Derivation:** For a linear array of $n$ isotropic point sources, equally spaced along the z-axis with a spacing $d$, and with uniform amplitude and progressive phase shift $\alpha$ between adjacent elements:
    *   The array factor is given by:
        $$ AF(\theta) = \sum_{n=1}^{N} I_n e^{j(n-1)kd \cos\theta + j(n-1)\alpha} $$
        Where:
        *   $N$ is the number of elements.
        *   $I_n$ is the excitation amplitude of the $n$-th element.
        *   $k$ is the free-space wavenumber ($k = 2\pi/\lambda$).
        *   $d$ is the spacing between elements.
        *   $\theta$ is the elevation angle (measured from the z-axis).
        *   $\alpha$ is the progressive phase shift between adjacent elements.
*   **For equal amplitude ($I_n = 1$) and uniform spacing:**
    $$ AF(\theta) = \frac{\sin(N\psi/2)}{\sin(\psi/2)} $$
    Where $\psi = kd \cos\theta + \alpha$.
*   **Key takeaway:** The array factor governs the shape of the main beam and the sidelobe levels, and its behavior is dictated by the number of elements ($N$), spacing ($d$), and phase shift ($\alpha$).

**1.4 Linear Arrays of 'n' Isotropic Point Sources with Equal Amplitude**

*   **Focus:** This section specializes the array factor to the common case of $N$ identical isotropic elements with the same excitation amplitude.
*   **Array Factor Formula:** As derived above:
    $$ AF(\theta) = \frac{\sin(N\psi/2)}{\sin(\psi/2)} $$
    Where $\psi = kd \cos\theta + \alpha$.
*   **Analysis of the AF:**
    *   **Main Lobe:** Occurs when $\psi = 0$ (i.e., $kd \cos\theta = -\alpha$). The maximum value of AF is $N$.
    *   **Nulls:** Occur when $\psi/2 = m\pi$ (where $m$ is an integer, $m \neq 0$), provided $\sin(\psi/2) \neq 0$. This implies $N\psi/2 = m\pi$.
    *   **Sidelobes:** Occur at values of $\theta$ where the numerator of the AF is small but non-zero, while the denominator is also small. These are typically less significant than the main lobe.
*   **Behavior based on 'd' and 'alpha':**
    *   **Broadside Array:** Main beam directed broadside to the array axis (i.e., $\theta = 90^\circ$). This happens when $\alpha = 0$. The AF becomes $\frac{\sin(N(kd \cos\theta)/2)}{\sin((kd \cos\theta)/2)}$.
    *   **End-fire Array:** Main beam directed along the array axis (i.e., $\theta = 0^\circ$ or $\theta = 180^\circ$). This occurs when $\alpha = \pm kd$.

**1.5 Grating Lobes**

*   **Concept:** Grating lobes are spurious, high-amplitude secondary maxima that appear in the radiation pattern of an array when the element spacing ($d$) is too large. They occur at angles where the phase progression around the array leads to constructive interference, mimicking the main beam but in an undesired direction.
*   **Condition for Grating Lobes:** A grating lobe appears when the phase progression $\psi$ can simultaneously satisfy the condition for the main beam maximum in the AF ($kd \cos\theta = -\alpha$) and also allow for constructive interference from all elements in a direction other than the intended broadside or end-fire.
    *   Specifically, a grating lobe occurs when $kd > |\alpha \pm 2\pi|$.
    *   For a uniformly spaced array with equal amplitudes, a grating lobe occurs at $\theta_g$ if $kd \cos\theta_g = \pm 2\pi$.
*   **Appearance:** Grating lobes are typically located symmetrically around the broadside direction. If $d > \lambda$, a grating lobe will appear at $\theta_g = \cos^{-1}(\pm \lambda/d)$.
*   **Consequence:** Grating lobes reduce the directivity of the desired main beam and can degrade the overall performance of the array.
*   **Design Consideration:** To avoid grating lobes, the element spacing $d$ must be kept less than or equal to the wavelength $\lambda$, particularly for broadside arrays where $\alpha=0$. For end-fire arrays, $d \le \lambda/2$ is a safer design to prevent grating lobes in the end-fire direction.
*   **Textbook Reference:** This is a critical concept for array design and is well-explained in *Microwave Engineering* by Das and Das, and *Antennas and Wave Propagation* by G S N Raju.

**1.6 Design of Broadside and End-fire Arrays**

*   **Broadside Array:**
    *   **Objective:** To steer the main beam perpendicular to the axis of the linear array (i.e., $\theta = 90^\circ$).
    *   **Condition:** This is achieved by setting the progressive phase shift $\alpha = 0$.
    *   **Array Factor:** $AF(\theta) = \frac{\sin(N(kd \cos\theta)/2)}{\sin((kd \cos\theta)/2)}$.
    *   **Design Parameters:**
        *   **Element Spacing (d):** For broadside arrays, to avoid grating lobes, $d \le \lambda$. Typically, $d = \lambda/2$ or $d = \lambda/4$ is used to ensure the main lobe is directed at $90^\circ$ and no grating lobes appear in the visible region ($ -90^\circ \le \theta \le 90^\circ$).
        *   **Number of Elements (N):** Increasing $N$ narrows the main beam and increases directivity.
*   **End-fire Array:**
    *   **Objective:** To steer the main beam along the axis of the linear array (i.e., $\theta = 0^\circ$ or $\theta = 180^\circ$).
    *   **Condition:** This is achieved by setting the progressive phase shift $\alpha = \mp kd$.
    *   **Array Factor:** $AF(\theta) = \frac{\sin(N(kd \cos\theta \mp kd)/2)}{\sin((kd \cos\theta \mp kd)/2)}$.
    *   **Design Parameters:**
        *   **Element Spacing (d):** For end-fire arrays, to achieve a sharp end-fire beam and avoid grating lobes, the spacing is typically chosen as $d \le \lambda/2$. For a Hansen-Woodyard end-fire array, a slightly larger spacing and phase shift are used to achieve increased directivity.
        *   **Phase Shift ($\alpha$):** For end-fire at $\theta=0$, $\alpha = -kd$. For end-fire at $\theta=180$, $\alpha = +kd$.
    *   **Hansen-Woodyard End-fire Array:** A modification where the phase shift is adjusted to $\alpha = -(kd - \pi/N)$ to slightly shift the main beam in the end-fire direction, increasing directivity.

**1.7 Phased Array Principle**

*   **Concept:** A phased array is an array of antennas where the relative phase of the signals feeding each antenna element is varied electronically, rather than by physically moving the antennas. This allows for rapid and agile steering of the main beam without mechanical movement.
*   **Mechanism:** Each element is fed with a signal whose phase can be adjusted independently. By controlling these phases, the direction of maximum radiation (the beam) can be steered.
*   **Beam Steering Equation:** The angle of the main beam ($\theta_0$) for a linear array is given by:
    $$ \cos\theta_0 = -\frac{\alpha}{kd} $$
    For a planar array, the beam can be steered in two dimensions using phase shifters.
*   **Key Components:**
    *   **Antenna Elements:** Typically dipoles, patches, or horns.
    *   **Phase Shifters:** Electronic devices (e.g., PIN diodes, varactors, MEMS) that introduce a controllable phase delay.
    *   **Control System:** A digital system that calculates and sets the required phase shifts for each element to achieve the desired beam pointing direction.
*   **Advantages:** Fast beam steering, high reliability (no moving parts), ability to form multiple beams, and adaptive capabilities.
*   **Disadvantages:** Complexity, cost, potential for higher sidelobes if not designed carefully, and insertion loss from phase shifters.
*   **Textbook Reference:** Phased arrays are a modern antenna technology discussed in *Antennas for all Applications* by Krauss et al. and *Microwave Engineering* by Das and Das.

**1.8 Adaptive Antenna Array Principle**

*   **Concept:** An adaptive array is a phased array that can automatically adjust the phase and amplitude of its elements to optimize its radiation pattern in response to the received signals. This is primarily used for interference suppression and signal enhancement.
*   **Objective:** To steer the main beam towards the desired signal source while simultaneously forming nulls in the directions of interfering signals.
*   **Mechanism:** The array uses feedback mechanisms and signal processing algorithms to sense the incoming signals, identify desired signals and interference, and then calculate and apply the optimal excitation weights (amplitude and phase) to each element.
*   **Key Techniques/Algorithms:**
    *   **Least Mean Squares (LMS):** A widely used iterative algorithm for adapting weights.
    *   **Recursive Least Squares (RLS):** A faster converging algorithm.
    *   **Minimum Variance Distortionless Response (MVDR):** A beamforming technique that minimizes output power while maintaining unity gain in the desired direction.
*   **Applications:** Radar, electronic warfare, wireless communication (beamforming, interference cancellation), satellite communication.
*   **Advantages:** Robustness against interference, improved signal-to-noise ratio (SNR), flexible and intelligent antenna operation.
*   **Disadvantages:** High computational complexity, real-time processing requirements, susceptibility to noise and jamming if not designed properly.
*   **Textbook Reference:** While not always a core topic in introductory texts, concepts related to adaptive signal processing for antennas are found in advanced microwave engineering and signal processing literature, often discussed in relation to radar and communication systems. *Antennas for all Applications* may touch upon adaptive beamforming concepts.

---

### 2. Microstrip Rectangular Patch Antennas

Microstrip patch antennas are a popular type of planar antenna due to their low profile, conformability, low manufacturing cost, and ease of integration with printed circuit boards. They consist of a radiating metallic patch (typically rectangular, circular, or triangular) suspended in free space or over a ground plane by a thin dielectric substrate.

**2.1 Design Equations for a Rectangular Microstrip Patch Antenna**

The design of a rectangular patch antenna involves determining its physical dimensions (length $L$ and width $W$) to resonate at a desired frequency ($f_0$).

*   **Fundamental Principle:** The patch is modeled as a resonant cavity or a transmission line. The length $L$ is the dominant factor determining the resonant frequency.
*   **Effective Length ($L_{eff}$):** Due to fringing fields extending beyond the physical edges of the patch, the effective length is greater than the actual length.
    $$ L_{eff} = L + 2\Delta L $$
    Where $\Delta L$ is the length extension due to fringing fields.
*   **Fringing Length ($\Delta L$):** The exact formula for $\Delta L$ depends on the width-to-length ratio ($W/L$) and the dielectric substrate properties. A common empirical formula is:
    $$ \Delta L \approx 0.412 \frac{(\epsilon_{eff} + 0.3)(\frac{W}{L} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{W}{L} + 0.8)} $$
    Where $\epsilon_{eff}$ is the effective dielectric constant.
*   **Effective Dielectric Constant ($\epsilon_{eff}$):** This accounts for the fact that the electromagnetic field is partially in the dielectric substrate and partially in the air above it. It is a function of the relative dielectric constant of the substrate ($\epsilon_r$) and the width-to-length ratio ($W/L$):
    $$ \epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left(1 + 12\frac{h}{W}\right)^{-1/2} $$
    Where $h$ is the thickness of the dielectric substrate.
*   **Resonant Frequency Equation:** The patch resonates when its effective length is approximately half a wavelength in the effective dielectric medium.
    $$ L_{eff} = \frac{\lambda_0}{2} $$
    Where $\lambda_0$ is the free-space wavelength. Substituting $L_{eff}$ and $\lambda_0 = c/f_0$:
    $$ L + 2\Delta L = \frac{c}{2 f_0 \sqrt{\epsilon_{eff}}} $$
    Rearranging to solve for the physical length $L$:
    $$ L = \frac{c}{2 f_0 \sqrt{\epsilon_{eff}}} - 2\Delta L $$
    This equation is typically used iteratively. You assume a $W/L$ ratio, calculate $\epsilon_{eff}$, then $\Delta L$, then $L$, and then update $W/L$ and repeat until convergence.
*   **Width (W) Determination:** The width $W$ is primarily chosen to achieve the desired input impedance (usually 50 $\Omega$) and to control the radiation pattern characteristics, such as beamwidth. A common starting point for $W$ is:
    $$ W \approx \frac{c}{2 f_0 \sqrt{\epsilon_r}} $$
    However, this is a rough estimate. The optimal width is often found through EM simulation or by matching to the desired impedance. A common design practice is to choose $W$ such that the substrate thickness $h$ is approximately $0.05\lambda_0$ to $0.1\lambda_0$ and $W/h \approx 1$ to $2$. This leads to a wider patch, potentially lower impedance, and a wider beamwidth.
*   **Height (h) and $\epsilon_r$ Impact:**
    *   Increasing $h$ (substrate thickness) increases the fringing field, leading to a larger $\Delta L$ and a smaller required physical length $L$. It also generally reduces the effective dielectric constant $\epsilon_{eff}$, leading to a wider bandwidth and lower radiation efficiency.
    *   Increasing $\epsilon_r$ (dielectric constant) increases the effective dielectric constant $\epsilon_{eff}$, which reduces the effective wavelength and hence the physical dimensions $L$ and $W$. However, higher $\epsilon_r$ can lead to reduced radiation efficiency and narrower bandwidth.

**2.2 Important Feeding Methods for Microstrip Patch Antennas**

The feeding method is crucial for efficiently coupling the RF power to the patch and establishing the desired field distribution for radiation.

*   **1. Microstrip Line Feed (Edge Feed):**
    *   **Description:** A microstrip transmission line is directly connected to one edge of the patch. The width of the microstrip feed line is typically chosen to match the 50 $\Omega$ impedance of the system.
    *   **Operation:** The transmission line excites the dominant TM$_{10}$ mode in the patch. The impedance seen by the feed line at the edge of the patch depends on the position of the feed point.
    *   **Matching:** To achieve maximum power transfer, the feed point is positioned at a location where the impedance of the patch equals the impedance of the feed line (e.g., 50 $\Omega$). This requires calculating the input impedance along the length of the patch.
    *   **Advantages:** Simple construction, easy to fabricate.
    *   **Disadvantages:** Prone to spurious radiation from the feed line, potential for surface waves, limited bandwidth.
    *   **Textbook Reference:** Discussed in *Microwave Engineering* by Das and Das, and *Antennas and Wave Propagation* by G S N Raju.

*   **2. Probe Feed (Perpendicular Feed):**
    *   **Description:** A coaxial probe (center conductor extending from the inner core of a coaxial cable) penetrates the dielectric substrate and is soldered to the center of the patch. The outer shield of the coaxial cable is connected to the ground plane.
    *   **Operation:** The probe acts as a vertical antenna, exciting the patch. The impedance matching is achieved by adjusting the radial position of the probe from the center of the patch.
    *   **Matching:** For a rectangular patch, the impedance is minimum at the center and increases towards the edges. The probe is typically placed at a distance from the center to achieve the desired 50 $\Omega$ impedance.
    *   **Advantages:** Simple to implement, less spurious radiation compared to microstrip feed.
    *   **Disadvantages:** Requires drilling through the ground plane, potential for probe inductance at higher frequencies, can excite TM$_{11}$ modes if not placed symmetrically.
    *   **Textbook Reference:** *Microwave Devices & Circuits* by Samuel Y Liao and *Microwave Engineering* by Das and Das.

*   **3. Aperture Coupled Feed:**
    *   **Description:** The patch is fed by a microstrip line or stripline on a separate substrate, located beneath the ground plane of the main patch antenna. A radiating aperture (slot) is etched in the ground plane beneath the patch, allowing energy to transfer from the feed line to the patch.
    *   **Operation:** The slot in the ground plane acts as a coupling mechanism. The size and shape of the slot, and its position relative to the patch, determine the coupling strength and impedance match.
    *   **Advantages:** Isolates the radiating element from the feed network, reduces spurious radiation and surface waves, allows for independent optimization of the patch and feed line, suitable for stacked arrays.
    *   **Disadvantages:** More complex fabrication due to multiple layers and aperture etching.
    *   **Textbook Reference:** Advanced topics in feeding methods are often covered in texts like *Antennas for all Applications* by Krauss et al. and specialized literature.

*   **4. Proximity Coupled Feed (Coupled Line Feed):**
    *   **Description:** The patch is coupled to a parallel microstrip or stripline on an adjacent substrate layer, separated by a dielectric substrate. A slot or a coupling gap between the feed line and the patch facilitates energy transfer.
    *   **Operation:** Electromagnetic coupling occurs between the feed line and the patch through the fringing fields across the dielectric.
    *   **Advantages:** High performance, good isolation, wide bandwidth, reduced surface wave excitation.
    *   **Disadvantages:** Requires precise alignment of substrates and potentially complex fabrication.

---

### Important Points to Remember:

*   **Array Factor:** The pattern of isotropic sources that determines the beam shape, direction, and sidelobe levels of an array.
*   **Pattern Multiplication:** Array pattern = Element pattern x Array Factor.
*   **Grating Lobes:** Undesired maxima in array patterns caused by excessive element spacing ($d > \lambda$). Avoid them by keeping $d \le \lambda$.
*   **Broadside Array:** Main beam perpendicular to the array axis; achieved with $\alpha = 0$.
*   **End-fire Array:** Main beam along the array axis; achieved with $\alpha = \pm kd$.
*   **Phased Array:** Electronic beam steering by varying element phases.
*   **Adaptive Array:** Automatically adjusts weights to optimize signal reception and suppress interference.
*   **Microstrip Patch Antenna Dimensions:** Length ($L$) is determined by resonant frequency, influenced by fringing fields ($\Delta L$) and effective dielectric constant ($\epsilon_{eff}$).
*   **Feeding Methods:** Microstrip, probe, aperture coupled, and proximity coupled are common ways to excite patch antennas, each with pros and cons regarding ease of fabrication, performance, and isolation.
*   **Bandwidth of Patch Antennas:** Typically narrow, but can be improved by increasing substrate height ($h$) or using different feeding techniques (aperture/proximity coupling).

---

### Practice Questions and Answers

**Question 1:** For a linear array of $N$ isotropic point sources with equal amplitude and spacing $d$, what is the condition for the appearance of grating lobes?
**Answer:** Grating lobes appear when $d > \lambda$. Specifically, if the phase shift $\alpha$ is set for broadside radiation ($\alpha=0$), a grating lobe occurs at $\theta_g = \cos^{-1}(\pm \lambda/d)$. For end-fire, $d \le \lambda/2$ is generally needed to avoid them.

**Question 2:** Explain the principle of pattern multiplication for antenna arrays.
**Answer:** The principle states that the overall radiation pattern of an array of identical elements is the product of the radiation pattern of a single element and the array factor. The array factor describes the spatial distribution and phasing of the array elements, while the element pattern describes the radiation characteristics of an individual element.

**Question 3:** A rectangular microstrip patch antenna needs to resonate at 2 GHz. If it is fabricated on a substrate with $\epsilon_r = 2.2$ and $h = 0.157$ cm, and the width-to-length ratio is chosen to be $W/L = 1.2$, estimate the physical length $L$. (Assume $\Delta L \approx 0.412 \frac{(\epsilon_{eff} + 0.3)(\frac{W}{L} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{W}{L} + 0.8)}$ and $\epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left(1 + 12\frac{h}{W}\right)^{-1/2}$).
**Answer:**
Let's assume an initial $L$ to calculate $W/L$ and then $\epsilon_{eff}$, $\Delta L$, and then $L$ again.
Given $f_0 = 2$ GHz, $c = 3 \times 10^8$ m/s, $\epsilon_r = 2.2$, $h = 0.00157$ m.
We need to find $L$ and $W$. Let's assume $W/L = 1.2$.

1.  **Estimate $\epsilon_{eff}$:**
    To use the $\epsilon_{eff}$ formula, we need $W/h$. If $W/L = 1.2$, let's assume $W \approx 3$ cm (typical). Then $W/h \approx 3 \text{ cm} / 0.157 \text{ cm} \approx 19$. (This ratio is very large, meaning the width is much larger than the thickness. This might not be the best assumption for the start).
    Let's try assuming $W$ to be roughly $\lambda_0/2$ divided by $\sqrt{\epsilon_{eff}}$. A very rough initial guess for $\epsilon_{eff}$ could be around $(2.2+1)/2 \approx 1.6$. $\lambda_0 = c/f_0 = (3 \times 10^8) / (2 \times 10^9) = 0.15$ m = 15 cm.
    If $\epsilon_{eff} \approx 1.6$, then $W \approx \lambda_0 / (2 \sqrt{1.6}) \approx 15 / (2 \times 1.26) \approx 5.95$ cm.
    Now let's use $W = 5.95$ cm.
    $W/h = 5.95 \text{ cm} / 0.157 \text{ cm} \approx 37.9$.
    $\epsilon_{eff} = \frac{2.2 + 1}{2} + \frac{2.2 - 1}{2} \left(1 + 12\frac{0.157}{5.95}\right)^{-1/2}$
    $\epsilon_{eff} = 1.6 + 0.6 \left(1 + 12 \times 0.02638\right)^{-1/2}$
    $\epsilon_{eff} = 1.6 + 0.6 \left(1 + 0.31656\right)^{-1/2}$
    $\epsilon_{eff} = 1.6 + 0.6 \left(1.31656\right)^{-1/2}$
    $\epsilon_{eff} = 1.6 + 0.6 \times 0.8726 \approx 1.6 + 0.52356 \approx 2.12356$.

2.  **Use the ratio $W/L = 1.2$ to find $L$ based on this $\epsilon_{eff}$:**
    $L = W / 1.2 = 5.95 \text{ cm} / 1.2 \approx 4.96$ cm.

3.  **Calculate $\Delta L$ with the current $W/L \approx 1.2$ and $\epsilon_{eff} \approx 2.12$: **
    $\Delta L \approx 0.412 \frac{(2.12356 + 0.3)(1.2 + 0.264)}{(2.12356 - 0.258)(1.2 + 0.8)}$
    $\Delta L \approx 0.412 \frac{(2.42356)(1.464)}{(1.86556)(2.0)}$
    $\Delta L \approx 0.412 \frac{3.5484}{3.73112} \approx 0.412 \times 0.9509 \approx 0.3918$ cm.

4.  **Calculate the required $L_{eff}$:**
    $\lambda_{eff} = \frac{c}{f_0 \sqrt{\epsilon_{eff}}} = \frac{3 \times 10^8 \text{ m/s}}{2 \times 10^9 \text{ Hz} \sqrt{2.12356}} = \frac{0.15}{\sqrt{2.12356}} \approx \frac{0.15}{1.4572} \approx 0.1029$ m = 10.29 cm.
    $L_{eff} = \lambda_{eff} / 2 \approx 10.29 / 2 \approx 5.145$ cm.

5.  **Calculate the physical length $L$:**
    $L = L_{eff} - 2\Delta L = 5.145 \text{ cm} - 2 \times 0.3918 \text{ cm}$
    $L = 5.145 \text{ cm} - 0.7836 \text{ cm} = 4.3614$ cm.

6.  **Iterate:** Now we have a new $L = 4.3614$ cm.
    $W/L = 5.95 \text{ cm} / 4.3614 \text{ cm} \approx 1.364$.
    Recalculate $\epsilon_{eff}$ with $W/h = 5.95/0.157 = 37.9$ and $W/L = 1.364$.
    $\epsilon_{eff} = \frac{2.2 + 1}{2} + \frac{2.2 - 1}{2} \left(1 + 12\frac{0.157}{5.95}\right)^{-1/2} \approx 2.12356$ (This value doesn't change much with $W/L$ for large $W/h$).
    $\Delta L \approx 0.412 \frac{(2.12356 + 0.3)(1.364 + 0.264)}{(2.12356 - 0.258)(1.364 + 0.8)}$
    $\Delta L \approx 0.412 \frac{(2.42356)(1.628)}{(1.86556)(2.164)}$
    $\Delta L \approx 0.412 \frac{3.946}{4.036} \approx 0.412 \times 0.977 \approx 0.4026$ cm.
    $L_{eff} = 5.145$ cm (assuming $\epsilon_{eff}$ is stable).
    $L = L_{eff} - 2\Delta L = 5.145 - 2 \times 0.4026 = 5.145 - 0.8052 = 4.3398$ cm.

The value of $L$ converges to approximately **4.34 cm**.

**Question 4:** Briefly describe the advantages of aperture-coupled feeding for microstrip patch antennas.
**Answer:** Aperture-coupled feeding offers several advantages:
    *   **Isolation:** It isolates the radiating patch from the feed network, reducing spurious radiation from the feed line and minimizing surface wave excitation.
    *   **Flexibility:** Allows for independent optimization of the patch antenna and the feed network.
    *   **Reduced Parasitic Coupling:** Less susceptible to unwanted coupling effects.
    *   **Suitability for Arrays:** Well-suited for developing stacked arrays where multiple patches need to be fed from a common ground plane.

**Question 5:** What is the primary advantage of a phased array over a traditional mechanically steered antenna?
**Answer:** The primary advantage of a phased array is its ability to steer the beam electronically at very high speeds without any physical movement. This provides agility, faster response times, and higher reliability compared to mechanically steered antennas.

---

### Course Outcome Alignment:

*   **CO1 (Knowledge Level K2):** Concepts like isotropic sources, array factor, and the basic principle of phased arrays are explained.
*   **CO2 (Knowledge Level K3):** While S-parameters are not directly detailed here, the understanding of impedance matching in patch antennas (implicitly related to S-parameters) and the concept of efficient power transfer via feeding methods supports this outcome.
*   **CO3 (Knowledge Level K2):** Basic antenna radiation concepts are touched upon through array patterns and the field of isotropic sources. Antenna parameters are implicitly considered in array design.
*   **CO4 (Knowledge Level K3):** The design equations for rectangular patch antennas and the discussion of different feeding methods directly support the design of broadband (or at least functional) antennas and arrays. The array design principles (broadside/end-fire) are also relevant.

---
This comprehensive study note covers the specified topics within Module 4, providing theoretical explanations, design considerations, practical aspects of feeding methods, and key takeaways. The practice questions are designed to reinforce understanding of the core concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
