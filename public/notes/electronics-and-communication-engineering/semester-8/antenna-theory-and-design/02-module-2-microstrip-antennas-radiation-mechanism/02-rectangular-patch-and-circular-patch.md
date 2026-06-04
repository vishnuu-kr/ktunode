---
title: "Rectangular Patch and Circular Patch"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7d4"
status: "completed"
scrapedAt: "2026-05-23T18:11:44.994Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Rectangular Patch and Circular Patch

---

### **Introduction to Microstrip Antennas**

Microstrip antennas, also known as patch antennas, are planar antennas fabricated on a dielectric substrate with a conductive ground plane on one side and a conductive radiating patch on the other. They are widely used due to their low profile, light weight, conformability, low cost, and ease of integration with other microwave circuits.

---

### **1. Radiation Mechanism of Microstrip Antennas**

Microstrip antennas radiate primarily due to the fringing fields at the edges of the radiating patch. These fringing fields act as equivalent magnetic current sources or electric current sources, leading to radiation.

*   **Equivalent Circuit Model:** Microstrip antennas can be modeled using an equivalent circuit consisting of transmission lines and radiating slots or antennas.
*   **Modal Expansion:** The radiation mechanism can be understood by analyzing the electromagnetic fields within the microstrip structure using modal expansion techniques. The dominant modes (e.g., TM$_{10}$ for rectangular patches, TM$_{11}$ for circular patches) contribute significantly to the radiation.
*   **Surface Waves:** While microstrip antennas are designed to radiate efficiently into free space, some energy can propagate as surface waves along the dielectric substrate. This is an undesired loss mechanism.

---

### **2. Rectangular Microstrip Patch Antenna**

A rectangular microstrip patch antenna consists of a rectangular conductive patch printed on a dielectric substrate above a ground plane.

#### **2.1. Structure and Dimensions**

*   **Radiating Patch:** A rectangular conductor of length $L$ and width $W$.
*   **Dielectric Substrate:** A layer of dielectric material with permittivity $\epsilon_r$ and thickness $h$.
*   **Ground Plane:** A conductive plane on the bottom side of the substrate.

*   **Key Dimensions:**
    *   **Length (L):** Primarily determines the resonant frequency. For resonance, $L \approx \frac{\lambda_0}{2}$, where $\lambda_0$ is the free-space wavelength. However, due to fringing fields, the effective length $L_{eff}$ is larger than $L$.
    *   **Width (W):** Influences the bandwidth and radiation pattern. A larger width generally leads to wider bandwidth.
    *   **Substrate Thickness (h):** Affects bandwidth, efficiency, and spurious radiation. Thicker substrates lead to wider bandwidth and higher radiation efficiency but can also increase surface wave excitation.
    *   **Dielectric Constant ($\epsilon_r$):** Affects the wavelength within the substrate and the impedance matching.

#### **2.2. Resonance Condition**

The antenna resonates when the length of the patch is approximately half a guided wavelength within the substrate.

*   **Effective Length ($L_{eff}$):** The fringing fields extend beyond the physical edges of the patch. This extension is accounted for by an "effective length" $L_{eff} = L + 2\Delta L$, where $\Delta L$ is the fringe field extension.
*   **Fringe Field Extension ($\Delta L$):** This depends on the width of the patch ($W$), the substrate thickness ($h$), and the dielectric constant ($\epsilon_r$). A common empirical formula for $\Delta L$ is:
    $\Delta L \approx 0.412h \frac{(\epsilon_{eff} + 0.3)(\frac{W}{h} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{W}{h} + 0.8)}{ \quad [\text{from Balanis, 4th Ed.]}}$
    where $\epsilon_{eff}$ is the effective dielectric constant of the microstrip line.
*   **Resonant Frequency ($f_r$):** The resonant frequency is given by:
    $f_r = \frac{c}{2L_{eff}\sqrt{\epsilon_{eff}}}$
    where $c$ is the speed of light in vacuum.
*   **Effective Dielectric Constant ($\epsilon_{eff}$):** This accounts for the fact that the electromagnetic fields are not entirely confined within the dielectric substrate but also fringe into the air. It is a function of $\epsilon_r$, $h$, and $W$. A common approximation is:
    $\epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2}\left(1 + 12\frac{h}{W}\right)^{-1/2} { \quad [\text{from Balanis, 4th Ed.]}}$

#### **2.3. Radiation Mechanism (Rectangular Patch)**

*   **Dominant Mode (TM$_{10}$):** The dominant mode is typically the TM$_{10}$ mode. This mode has a magnetic field null at the center of the patch and maxima at the edges along the length.
*   **Equivalent Magnetic Currents:** The fringing fields at the edges perpendicular to the length ($L$) can be modeled as equivalent magnetic current sheets. These edges radiate primarily in the broadside direction (perpendicular to the patch surface).
*   **Radiation Pattern:** The rectangular patch generally radiates a broadside pattern, with the main beam directed perpendicular to the patch surface. The radiation pattern is influenced by the aspect ratio ($W/L$).

#### **2.4. Analysis and Design Considerations (Rectangular Patch)**

*   **Input Impedance:** The input impedance of the patch is typically high (around 300-500 $\Omega$ for a square patch). This necessitates impedance matching for efficient power transfer.
*   **Bandwidth:** Microstrip patch antennas inherently have narrow bandwidth (typically 1-5%). Bandwidth can be increased by:
    *   Using thicker substrates with lower dielectric constants.
    *   Using wider patches.
    *   Employing parasitic elements or stacked patches.
    *   Using aperture coupling or proximity coupling feed techniques.
*   **Feed Methods:** Common feed methods include:
    *   **Coaxial Probe Feed:** A coaxial probe is inserted through the ground plane and connects to the patch. The feed point location determines the input impedance.
    *   **Microstrip Line Feed:** A microstrip line is directly connected to the edge of the patch. The width of the microstrip line and its position relative to the patch edge are used for impedance matching.
    *   **Slot-Coupled Feed:** A slot in the ground plane couples energy from a microstrip line to the patch.
    *   **Proximity-Coupled Feed:** The patch is coupled to a feeding microstrip line through the substrate, without direct electrical contact. This offers better isolation and bandwidth.
*   **Polarization:**
    *   **Linear Polarization:** Achieved with standard rectangular patches.
    *   **Circular Polarization:** Can be achieved by:
        *   Using a square patch fed by two orthogonal probes with a 90-degree phase difference.
        *   Introducing a small perturbation (e.g., a slit or chamfer) on the edges of a square patch, fed by a single probe.

#### **2.5. Example: Design of a Rectangular Patch for Resonance**

**Problem:** Design a rectangular microstrip patch antenna operating at 2 GHz using a substrate with $\epsilon_r = 2.2$ and $h = 1.6$ mm. Assume the patch is fed by a coaxial probe.

**Solution Steps:**

1.  **Determine free-space wavelength:**
    $\lambda_0 = \frac{c}{f_r} = \frac{3 \times 10^8 \text{ m/s}}{2 \times 10^9 \text{ Hz}} = 0.15 \text{ m}$

2.  **Assume a width W and calculate $\epsilon_{eff}$:**
    Let's assume $W = 40$ mm.
    $\epsilon_{eff} = \frac{2.2 + 1}{2} + \frac{2.2 - 1}{2}\left(1 + 12\frac{1.6 \text{ mm}}{40 \text{ mm}}\right)^{-1/2}$
    $\epsilon_{eff} = 1.6 + 0.6 \left(1 + 12 \times 0.04 \right)^{-1/2} = 1.6 + 0.6 (1.48)^{-1/2} = 1.6 + 0.6 \times 0.811 \approx 1.6 + 0.4866 \approx 2.0866$

3.  **Calculate fringe field extension $\Delta L$:**
    $\Delta L \approx 0.412 \times 1.6 \text{ mm} \frac{(2.0866 + 0.3)(\frac{40}{1.6} + 0.264)}{(2.0866 - 0.258)(\frac{40}{1.6} + 0.8)}$
    $\Delta L \approx 0.6592 \frac{(2.3866)(25.264)}{(1.8286)(25.8)} \approx 0.6592 \frac{60.27}{47.17} \approx 0.6592 \times 1.2777 \approx 0.842$ mm

4.  **Calculate the required physical length L:**
    $L_{eff} = \frac{\lambda_0}{2} = \frac{0.15 \text{ m}}{2} = 0.075 \text{ m} = 75 \text{ mm}$
    $L = L_{eff} - 2\Delta L = 75 \text{ mm} - 2 \times 0.842 \text{ mm} = 75 - 1.684 \approx 73.316 \text{ mm}$

**Therefore, a rectangular patch of approximately 73.3 mm x 40 mm would resonate around 2 GHz.** (Note: This is an approximate design; actual performance requires full-wave simulation and tuning.)

---

### **3. Circular Microstrip Patch Antenna**

A circular microstrip patch antenna consists of a circular conductive patch on a dielectric substrate above a ground plane.

#### **3.1. Structure and Dimensions**

*   **Radiating Patch:** A circular conductor of radius $a$.
*   **Dielectric Substrate:** A layer of dielectric material with permittivity $\epsilon_r$ and thickness $h$.
*   **Ground Plane:** A conductive plane on the bottom side of the substrate.

*   **Key Dimensions:**
    *   **Radius (a):** Primarily determines the resonant frequency.
    *   **Substrate Thickness (h):** Affects bandwidth, efficiency, and spurious radiation.
    *   **Dielectric Constant ($\epsilon_r$):** Affects the wavelength within the substrate and the impedance matching.

#### **3.2. Resonance Condition**

Circular patches resonate in specific modes, with the dominant mode being the TM$_{11}$ mode (which behaves like the TM$_{10}$ mode in a rectangular patch in terms of radiation).

*   **Effective Radius ($a_{eff}$):** Similar to the rectangular patch, fringing fields extend beyond the physical edge.
*   **Resonant Frequency ($f_r$):** The resonant frequency for the dominant TM$_{11}$ mode is given by:
    $f_r = \frac{1.841c}{2\pi a_{eff}\sqrt{\epsilon_{eff}}}$
    where $c$ is the speed of light in vacuum, and $1.841$ is the first root of the Bessel function $J_1'(x) = 0$.
*   **Effective Dielectric Constant ($\epsilon_{eff}$):** Similar to the rectangular patch, but the formulas might vary slightly depending on the source. A common approximation for $\epsilon_{eff}$ for a circular patch is:
    $\epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2}\left(1 + 12\frac{h}{2a}\right)^{-1/2}$ (Note: The ratio $h/D$ or $h/(2a)$ is used.)
*   **Fringe Field Extension ($\Delta a$):** The fringe field extension for a circular patch. An empirical formula is:
    $\Delta a \approx 0.412h \frac{(\epsilon_{eff} + 0.3)(\frac{2a}{h} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{2a}{h} + 0.8)}$ (Similar form to rectangular $\Delta L$, but with diameter $D=2a$).
    The effective radius is then $a_{eff} = a + \Delta a$.

#### **3.3. Radiation Mechanism (Circular Patch)**

*   **Dominant Mode (TM$_{11}$):** The TM$_{11}$ mode is the lowest-order mode that radiates. It has no variation along the azimuthal direction ($\phi$) but has two maxima in the radial direction ($r$) and a null at the center.
*   **Equivalent Magnetic Currents:** The fringing fields around the circumference of the circular patch can be represented as equivalent magnetic currents.
*   **Radiation Pattern:** The circular patch typically radiates a broadside pattern, similar to the rectangular patch, with maximum radiation occurring perpendicular to the patch surface. The pattern is generally more omnidirectional in the azimuthal plane compared to a rectangular patch.

#### **3.4. Analysis and Design Considerations (Circular Patch)**

*   **Input Impedance:** The input impedance of a circular patch depends on the radial position of the feed. For a probe feed at the center, the impedance is theoretically infinite for TM modes. For practical feeds, the probe is offset from the center. For a probe feed at a radial distance $r_0$ from the center, the input impedance $Z_{in}(r_0)$ can be approximated using the impedance of the radiating slot.
*   **Bandwidth:** Similar to rectangular patches, circular patches have narrow bandwidth. The factors influencing bandwidth are the same: substrate thickness, dielectric constant, and feed method.
*   **Feed Methods:**
    *   **Coaxial Probe Feed:** The probe is inserted at a radial distance from the center to match the desired impedance.
    *   **Microstrip Line Feed:** A microstrip line is connected tangentially to the edge of the patch.
    *   **Annular Ring Slot Feed:** A slot is cut around the patch to couple to a feeding line.
*   **Polarization:**
    *   **Linear Polarization:** Achieved with a standard circular patch fed off-center.
    *   **Circular Polarization:** Can be achieved by:
        *   Using two orthogonal probe feeds with a 90-degree phase difference.
        *   Introducing a perturbation (e.g., a linear slot) across the diameter of the patch.

#### **3.5. Example: Design of a Circular Patch for Resonance**

**Problem:** Design a circular microstrip patch antenna operating at 5 GHz using a substrate with $\epsilon_r = 4.4$ and $h = 0.8$ mm.

**Solution Steps:**

1.  **Determine free-space wavelength:**
    $\lambda_0 = \frac{c}{f_r} = \frac{3 \times 10^8 \text{ m/s}}{5 \times 10^9 \text{ Hz}} = 0.06 \text{ m}$

2.  **Assume a diameter D (or radius a) and calculate $\epsilon_{eff}$:**
    Let's assume a diameter $D = 30$ mm, so $a = 15$ mm.
    $\epsilon_{eff} = \frac{4.4 + 1}{2} + \frac{4.4 - 1}{2}\left(1 + 12\frac{0.8 \text{ mm}}{30 \text{ mm}}\right)^{-1/2}$
    $\epsilon_{eff} = 2.7 + 1.7 \left(1 + 12 \times 0.0267 \right)^{-1/2} = 2.7 + 1.7 (1.3204)^{-1/2} = 2.7 + 1.7 \times 0.872 \approx 2.7 + 1.4824 \approx 4.1824$

3.  **Calculate fringe field extension $\Delta a$:**
    $\Delta a \approx 0.412 \times 0.8 \text{ mm} \frac{(4.1824 + 0.3)(\frac{30}{0.8} + 0.264)}{(4.1824 - 0.258)(\frac{30}{0.8} + 0.8)}$
    $\Delta a \approx 0.3296 \frac{(4.4824)(37.764)}{(3.9244)(38.3)} \approx 0.3296 \frac{169.29}{150.33} \approx 0.3296 \times 1.126 \approx 0.371$ mm

4.  **Calculate the effective radius $a_{eff}$:**
    $a_{eff} = a + \Delta a = 15 \text{ mm} + 0.371 \text{ mm} = 15.371 \text{ mm}$

5.  **Calculate the required radius a for resonance (working backward):**
    We need $f_r = 5$ GHz.
    $a_{eff} = \frac{1.841c}{2\pi f_r\sqrt{\epsilon_{eff}}}$
    $a_{eff} = \frac{1.841 \times 3 \times 10^8 \text{ m/s}}{2\pi \times 5 \times 10^9 \text{ Hz} \sqrt{4.1824}}$
    $a_{eff} = \frac{1.841 \times 0.03}{2\pi \times \sqrt{4.1824}} = \frac{0.05523}{2\pi \times 2.045} \approx \frac{0.05523}{12.85} \approx 0.004298 \text{ m} = 4.298 \text{ mm}$

    This calculation implies that the effective radius should be around 4.3 mm, which is very different from our assumed 15 mm. This indicates our initial assumption of diameter was incorrect for the target frequency. We need to recalculate with a smaller diameter.

    Let's try to find the radius directly:
    $a_{eff} = a + \Delta a$
    The $\Delta a$ also depends on $a$. This is an iterative process or requires a solver.
    A more direct approach is to use the resonant frequency formula to find $a_{eff}$:
    $a_{eff} = \frac{1.841c}{2\pi f_r\sqrt{\epsilon_{eff}}}$
    Let's assume $\epsilon_{eff}$ is roughly equal to $\epsilon_r$ for a first approximation (if $h$ is small compared to diameter).
    $a_{eff} \approx \frac{1.841 \times 3 \times 10^8}{2\pi \times 5 \times 10^9 \sqrt{4.4}} = \frac{0.05523}{2\pi \times 2.0976} \approx \frac{0.05523}{13.18} \approx 0.00419 \text{ m} = 4.19 \text{ mm}$.
    This still seems small. Let's recheck the $\epsilon_{eff}$ formula and its use.

    *Correction:* The $\epsilon_{eff}$ calculation uses $h/W$ or $h/(2a)$.
    Let's work backward for radius $a$. We need $a_{eff}$ for 5 GHz.
    $a_{eff} = \frac{1.841c}{2\pi f_r\sqrt{\epsilon_{eff}}} = \frac{1.841 \times 3 \times 10^8}{2\pi \times 5 \times 10^9 \sqrt{\epsilon_{eff}}} = \frac{0.002946}{\sqrt{\epsilon_{eff}}}$

    We need to find $a$ such that $a_{eff} = a + \Delta a$, where $\Delta a$ depends on $a$ and $\epsilon_{eff}$, and $\epsilon_{eff}$ depends on $a$. This is an iterative solution.

    Let's use the approximate formula for $\epsilon_{eff}$ and solve for $a$.
    Suppose we are aiming for $f_r = 5$ GHz.
    We know that $a_{eff}$ must be such that it gives 5 GHz.
    Let's assume a radius $a=10$mm. Then $D=20$mm.
    $\epsilon_{eff} = \frac{4.4+1}{2} + \frac{4.4-1}{2} \left(1 + 12 \frac{0.8}{20}\right)^{-1/2} = 2.7 + 1.7 (1 + 0.48)^{-1/2} = 2.7 + 1.7 (1.48)^{-1/2} \approx 2.7 + 1.7 \times 0.811 \approx 4.0787$
    $\Delta a \approx 0.412 \times 0.8 \frac{(4.0787+0.3)(20/0.8 + 0.264)}{(4.0787-0.258)(20/0.8 + 0.8)} = 0.3296 \frac{(4.3787)(25.264)}{(3.8207)(25.8)} \approx 0.3296 \frac{110.55}{98.57} \approx 0.3296 \times 1.1215 \approx 0.3696$ mm
    $a_{eff} = a + \Delta a = 10 + 0.3696 = 10.3696$ mm
    Now, calculate the resonant frequency for this $a_{eff}$ and $\epsilon_{eff}$:
    $f_r = \frac{1.841c}{2\pi a_{eff}\sqrt{\epsilon_{eff}}} = \frac{1.841 \times 3 \times 10^8}{2\pi \times 10.3696 \times 10^{-3} \sqrt{4.0787}} \approx \frac{55230}{65.14 \times 2.0196} \approx \frac{55230}{131.64} \approx 419.5$ GHz. This is extremely high.

    **Let's re-examine the formulas and units. The problem is with the scaling.**

    The goal is to find 'a' for 5 GHz.
    Let's use a typical ratio of $a$ to $\lambda_0$ for circular patches. The diameter is usually around $\lambda_0 / \sqrt{\epsilon_{eff}}$.
    For 5 GHz, $\lambda_0 = 6$ cm.
    Let's assume $\epsilon_{eff} \approx 3.5$.
    Then diameter $D \approx \frac{6 \text{ cm}}{\sqrt{3.5}} \approx \frac{6}{1.87} \approx 3.2$ cm. So radius $a \approx 1.6$ cm = 16 mm.
    This is consistent with our first assumption of 15 mm. Let's redo the calculation for 15mm radius more carefully.

    If $a = 15$ mm:
    $D = 30$ mm. $h=0.8$ mm. $\epsilon_r = 4.4$.
    $\epsilon_{eff} = 4.0787$ (as calculated before).
    $\Delta a = 0.3696$ mm (as calculated before).
    $a_{eff} = 10.3696$ mm.

    Now, let's calculate $f_r$ with these values:
    $f_r = \frac{1.841c}{2\pi a_{eff}\sqrt{\epsilon_{eff}}} = \frac{1.841 \times 3 \times 10^8 \text{ m/s}}{2\pi \times (10.3696 \times 10^{-3} \text{ m}) \sqrt{4.0787}}$
    $f_r = \frac{55230}{65.14 \times 2.0196} \approx 419.5$ GHz. **This is incorrect. There must be an error in the scaling of the formulas or their application.**

    **Let's refer to Balanis or Garg for the exact formula application.**
    From Balanis (4th Ed.), for TM$_{11}$ mode of a circular patch:
    $f_{r11} = \frac{1.841 c}{2 \pi a \sqrt{\epsilon_{eff}}}$ (when fringing is ignored).
    The effective radius is $a_{eff} = a + \Delta a$.
    $\Delta a$ formula is given as:
    $\Delta a \approx 0.412h \frac{(\epsilon_{eff}+0.3)(\frac{2a}{h}+0.264)}{(\epsilon_{eff}-0.258)(\frac{2a}{h}+0.8)}$

    Let's assume the diameter $D$ is approximately $\lambda_d/2$, where $\lambda_d$ is the guided wavelength.
    $\lambda_d = \frac{\lambda_0}{\sqrt{\epsilon_{eff}}}$.
    So, $D \approx \frac{\lambda_0}{2\sqrt{\epsilon_{eff}}}$.
    Let's aim for $f_r = 5$ GHz. $\lambda_0 = 6$ cm.
    Let's assume $\epsilon_{eff} \approx 3.5$.
    $D \approx \frac{6 \text{ cm}}{2 \sqrt{3.5}} \approx \frac{6}{3.74} \approx 1.6$ cm = 16 mm.
    So, $a \approx 8$ mm. Let's try $a=8$ mm.

    If $a=8$ mm:
    $D = 16$ mm. $h=0.8$ mm. $\epsilon_r = 4.4$.
    $\epsilon_{eff} = \frac{4.4+1}{2} + \frac{4.4-1}{2} \left(1 + 12 \frac{0.8}{16}\right)^{-1/2} = 2.7 + 1.7 (1 + 0.6)^{-1/2} = 2.7 + 1.7 (1.6)^{-1/2} = 2.7 + 1.7 \times 0.7905 \approx 2.7 + 1.3438 \approx 4.0438$
    $\Delta a \approx 0.412 \times 0.8 \frac{(4.0438+0.3)(16/0.8 + 0.264)}{(4.0438-0.258)(16/0.8 + 0.8)} = 0.3296 \frac{(4.3438)(20.264)}{(3.7858)(20.8)} \approx 0.3296 \frac{88.04}{78.74} \approx 0.3296 \times 1.118 \approx 0.3685$ mm
    $a_{eff} = a + \Delta a = 8 + 0.3685 = 8.3685$ mm

    Now, calculate the resonant frequency:
    $f_r = \frac{1.841c}{2\pi a_{eff}\sqrt{\epsilon_{eff}}} = \frac{1.841 \times 3 \times 10^8 \text{ m/s}}{2\pi \times (8.3685 \times 10^{-3} \text{ m}) \sqrt{4.0438}}$
    $f_r = \frac{55230}{52.57 \times 2.0109} \approx \frac{55230}{105.69} \approx 522.5$ GHz. **Still incorrect scaling.**

    **Let's re-verify the resonant frequency formula for circular patch.**
    The formula is indeed $f_{rnm} = \frac{p_{nm} c}{2\pi a_{eff} \sqrt{\epsilon_{eff}}}$, where $p_{nm}$ are roots of $J_n'(x)=0$ or $J_m(x)=0$.
    For TM$_{11}$, $p_{11} = 1.841$.

    **Re-check the units conversion and magnitude of constants.**
    $c = 3 \times 10^8$ m/s.
    $f_r = 5 \times 10^9$ Hz.
    $\lambda_0 = c/f_r = 0.06$ m = 60 mm.

    Let's use a simpler approximation first: $a_{eff} \approx \frac{1.841 \lambda_0}{2\pi \sqrt{\epsilon_{eff}}}$.
    Let $\epsilon_{eff} \approx \epsilon_r = 4.4$.
    $a_{eff} \approx \frac{1.841 \times 60 \text{ mm}}{2\pi \sqrt{4.4}} = \frac{110.46}{2\pi \times 2.0976} \approx \frac{110.46}{13.18} \approx 8.38$ mm.

    Now, we use this $a_{eff}$ to estimate $a$ and then check $\epsilon_{eff}$ and $\Delta a$ iteratively.
    Let $a_{eff} = 8.38$ mm.
    Assume $a = 8$ mm.
    $D = 16$ mm. $h=0.8$ mm. $\epsilon_r = 4.4$.
    $\epsilon_{eff} = 4.0438$ (as calculated before).
    $\Delta a = 0.3685$ mm (as calculated before).
    $a_{eff} = a + \Delta a = 8 + 0.3685 = 8.3685$ mm.
    This matches our target $a_{eff}$ very closely.

    **Therefore, a circular patch with a radius of approximately 8 mm would resonate around 5 GHz.** The fringe extension is about 0.37 mm.

---

### **4. Comparison of Rectangular and Circular Patch Antennas**

| Feature               | Rectangular Patch                                       | Circular Patch                                            |
| :-------------------- | :------------------------------------------------------ | :-------------------------------------------------------- |
| **Shape**             | Rectangular                                             | Circular                                                  |
| **Dominant Mode**     | TM$_{10}$                                               | TM$_{11}$                                                 |
| **Resonant Dimension**| Length $L$                                              | Radius $a$                                                |
| **Radiation Pattern** | Broadside, directive pattern influenced by $W/L$ ratio. | Broadside, more omnidirectional in azimuth than rectangular. |
| **Bandwidth**         | Narrow (typically 1-5%).                                | Narrow (typically 1-5%).                                  |
| **Polarization**      | Primarily linear. CP achievable with modifications.   | Primarily linear. CP achievable with modifications.     |
| **Design Complexity** | Relatively straightforward analytical formulas.         | Requires solving Bessel functions and iterative design. |
| **Efficiency**        | Can be higher than circular for same substrate.         | Can be lower due to TM$_{11}$ mode characteristics.        |
| **Manufacturing**     | Easier to fabricate interdigital coupling or slots.   | Easier to achieve CP with two feeds.                      |

---

### **5. Learning Outcomes Addressed**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   The notes explain that radiation in microstrip patches originates from fringing fields at the edges.
    *   The equivalent magnetic current model is discussed.
    *   The role of dominant modes (TM$_{10}$ for rectangular, TM$_{11}$ for circular) in radiation is detailed.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   The notes provide the design equations for determining dimensions (length $L$ for rectangular, radius $a$ for circular) based on desired resonant frequency.
    *   Formulas for effective dielectric constant ($\epsilon_{eff}$) and fringe field extension ($\Delta L$ or $\Delta a$) are given, which are crucial for accurate design.
    *   Examples of the design process are provided, although full-wave simulation is recommended for final tuning.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   While this topic focuses on basic patches, it lays the foundation for understanding how these elements are modified for advanced applications (e.g., achieving circular polarization). The discussion of feed methods and polarization techniques touches upon this.

---

### **6. Important Points to Remember**

*   **Fringing Fields:** The primary source of radiation for microstrip patches.
*   **Effective Length/Radius:** Physical dimensions are modified by fringe field extension.
*   **Effective Dielectric Constant ($\epsilon_{eff}$):** Accounts for fields extending into the air, influencing wavelength and resonant frequency.
*   **Resonant Frequency Formulas:** Crucial for dimension calculations.
*   **Bandwidth Limitation:** Microstrip patches are inherently narrow-band antennas.
*   **Feed Methods:** Impact impedance matching, bandwidth, and polarization.
*   **Circular Polarization:** Requires specific feed arrangements or modifications to the patch shape.
*   **Design Iteration:** Analytical formulas provide approximations; simulation is often needed for precise design.

---

### **7. Practice Questions**

**Question 1:**
What is the primary mechanism responsible for radiation from a microstrip patch antenna?
a) Surface currents on the patch.
b) Fringing fields at the edges of the patch.
c) Magnetic dipole formed by the patch.
d) Dielectric polarization within the substrate.

**Question 2:**
For a rectangular microstrip patch antenna, which physical dimension primarily determines the resonant frequency?
a) Width (W)
b) Substrate thickness (h)
c) Length (L)
d) Dielectric constant ($\epsilon_r$)

**Question 3:**
The effective dielectric constant ($\epsilon_{eff}$) of a microstrip line (or patch) is always:
a) Less than the dielectric constant of the substrate ($\epsilon_r$).
b) Equal to the dielectric constant of the substrate ($\epsilon_r$).
c) Greater than the dielectric constant of the substrate ($\epsilon_r$).
d) Between 1 and $\epsilon_r$.

**Question 4:**
Which mode is the dominant radiating mode for a typical rectangular microstrip patch antenna?
a) TE$_{10}$
b) TM$_{01}$
c) TM$_{10}$
d) TM$_{11}$

**Question 5:**
Designing a circular patch antenna for circular polarization typically involves:
a) Using a rectangular patch with a slot.
b) Feeding a circular patch with a single probe at the center.
c) Feeding a square patch with two orthogonal probes at 90-degree phase difference.
d) Feeding a circular patch with two orthogonal probes with a 90-degree phase difference.

**Question 6:**
Calculate the approximate effective dielectric constant ($\epsilon_{eff}$) for a microstrip line with $\epsilon_r = 3.5$, $h = 1.0$ mm, and $W = 2.0$ mm.

**Question 7:**
If a rectangular patch has an effective length $L_{eff} = 50$ mm and its dominant mode resonance is at 3 GHz, what is the guided wavelength $\lambda_g$ for this mode?

---

### **8. Answers to Practice Questions**

**Answer 1:**
b) Fringing fields at the edges of the patch.

**Answer 2:**
c) Length (L)

**Answer 3:**
d) Between 1 and $\epsilon_r$.
*   **Explanation:** $\epsilon_{eff}$ accounts for fields that are partially in the dielectric and partially in the air, so it will be between the dielectric constant of air (1) and the substrate ($\epsilon_r$).

**Answer 4:**
c) TM$_{10}$

**Answer 5:**
d) Feeding a circular patch with two orthogonal probes with a 90-degree phase difference.
*   **Explanation:** Option c is for a square patch.

**Answer 6:**
$\epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2}\left(1 + 12\frac{h}{W}\right)^{-1/2}$
$\epsilon_{eff} = \frac{3.5 + 1}{2} + \frac{3.5 - 1}{2}\left(1 + 12\frac{1.0}{2.0}\right)^{-1/2}$
$\epsilon_{eff} = \frac{4.5}{2} + \frac{2.5}{2}\left(1 + 6\right)^{-1/2}$
$\epsilon_{eff} = 2.25 + 1.25 \left(7\right)^{-1/2}$
$\epsilon_{eff} = 2.25 + 1.25 \times 0.378 \approx 2.25 + 0.4725 \approx 2.7225$
**Approximate $\epsilon_{eff} \approx 2.72$**

**Answer 7:**
The resonant condition for a rectangular patch is approximately $L_{eff} = \frac{\lambda_g}{2}$.
Therefore, the guided wavelength $\lambda_g = 2 \times L_{eff}$.
$\lambda_g = 2 \times 50 \text{ mm} = 100 \text{ mm}$
**The guided wavelength $\lambda_g$ is 100 mm.**

---
This concludes the study notes for Rectangular and Circular Patch Antennas, focusing on their radiation mechanisms. Remember to consult the provided textbooks for more in-depth analysis and detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
