---
title: "Cavity Resonator : TE and TM modes in waveguides (Review only)- Rectangular Cavity Resonator- Resonance frequency, Q factor, Excitation and Tuning, Re-entrant cavity."
subject: "MICROWAVES & ANTENNAS"
module: "Module 1: Microwaves: Electromagnetic spectrum, Frequency Bands, Features of microwaves, advantages & disadvantages, Applications, Atmospheric propagation effects."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feda2"
status: "completed"
scrapedAt: "2026-05-23T18:01:34.931Z"
---
# MICROWAVES & ANTENNAS: Module 1 - Cavity Resonators

This module provides a foundational understanding of cavity resonators, essential components in microwave circuits. We will review TE and TM modes in waveguides, then delve into the specifics of rectangular cavity resonators, including their resonance frequency, quality factor, excitation, tuning, and the concept of re-entrant cavities.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Explain the basic mechanism of operation of cavity resonators.
*   **CO3 (K2):** While not directly about antennas, understanding resonant structures is crucial for antenna design where resonance dictates performance.

**Learning Outcomes Covered:**

*   Review of TE and TM modes in waveguides.
*   Understanding the structure and operation of a rectangular cavity resonator.
*   Calculating the resonance frequency of a rectangular cavity resonator.
*   Defining and calculating the Q factor of a cavity resonator.
*   Explaining methods for exciting and tuning cavity resonators.
*   Understanding the concept and purpose of re-entrant cavities.

---

## 1. Review of TE and TM Modes in Waveguides

**(Based on Das & Das, Liao, Jordan & Balmain)**

Before understanding cavity resonators, it's crucial to recall the modes of propagation in hollow metallic waveguides. A waveguide acts as a high-frequency filter, allowing only specific electromagnetic field patterns (modes) to propagate.

### 1.1. Waveguide Modes: Transverse Electric (TE) and Transverse Magnetic (TM)

*   **Definition:** Modes are characterized by the direction of the electric ($\vec{E}$) and magnetic ($\vec{H}$) fields relative to the direction of propagation (usually along the z-axis).
*   **TE Modes (or H Modes):** In TE modes, the electric field component in the direction of propagation ($E_z$) is zero. The magnetic field has a component in the direction of propagation ($H_z$).
    *   Notation: $TE_{mn}$ (where 'm' and 'n' are integers representing the number of half-wavelength variations along the waveguide dimensions).
    *   Example: $TE_{10}$ mode is the dominant mode in a standard rectangular waveguide.
*   **TM Modes (or E Modes):** In TM modes, the magnetic field component in the direction of propagation ($H_z$) is zero. The electric field has a component in the direction of propagation ($E_z$).
    *   Notation: $TM_{mn}$ (where 'm' and 'n' are integers).
    *   Requirement: For TM modes, both 'm' and 'n' must be non-zero. $TM_{0n}$ and $TM_{m0}$ modes do not exist because they would require a non-zero $E_z$ with no corresponding magnetic field to support it.

**Important Point to Remember:** The cutoff frequency ($f_c$) for a particular mode determines whether that mode can propagate. Modes with frequencies above their cutoff frequency propagate, while those below do not.

---

## 2. Rectangular Cavity Resonator

**(Based on Das & Das, Liao, Raju, Saurabh Shukla & Sanjay Kumar)**

A rectangular cavity resonator can be visualized as a section of a rectangular waveguide terminated at both ends by conducting plates (e.g., short circuits). This confinement of electromagnetic energy leads to resonant behavior.

### 2.1. Structure and Principle of Operation

*   **Structure:** A rectangular cavity resonator is a closed conducting box with dimensions $a \times b \times d$.
*   **Principle:** It acts like a resonant circuit (LC circuit). When excited at its resonant frequency, electromagnetic energy is stored in the electric and magnetic fields within the cavity. The conducting walls reflect the waves, causing them to interfere constructively, leading to standing waves.

### 2.2. Resonance Frequency ($f_{mnp}$)

The resonant frequencies of a rectangular cavity resonator depend on its dimensions ($a, b, d$) and the mode of oscillation. For a cavity with dimensions $a$ (width), $b$ (height), and $d$ (depth), the resonance frequency for a $TE_{mnp}$ or $TM_{mnp}$ mode is given by:

$$ f_{mnp} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2 + \left(\frac{p}{d}\right)^2} $$

Where:
*   $c$ is the speed of light in vacuum (or the material filling the cavity).
*   $m, n, p$ are integers representing the number of half-wavelength variations along the $a, b, d$ dimensions, respectively.
*   For TE modes, $m, n, p$ can be zero or positive integers, but not all can be zero simultaneously. For $TE_{m n p}$ modes, at least one of $m, n, p$ must be non-zero.
*   For TM modes, $m, n, p$ must be positive integers ($m \ge 1, n \ge 1, p \ge 1$).

**Dominant Mode:** The dominant mode is the mode with the lowest resonant frequency. For a rectangular cavity where $a > b > d$, the dominant mode is typically $TE_{101}$.

**Example Calculation:**
Consider a rectangular cavity with dimensions $a = 3$ cm, $b = 2$ cm, and $d = 1$ cm. Calculate the resonance frequency for the $TE_{101}$ mode.

*   $m = 1, n = 0, p = 1$
*   $c \approx 3 \times 10^8$ m/s
*   $a = 0.03$ m, $b = 0.02$ m, $d = 0.01$ m

$$ f_{101} = \frac{3 \times 10^8}{2} \sqrt{\left(\frac{1}{0.03}\right)^2 + \left(\frac{0}{0.02}\right)^2 + \left(\frac{1}{0.01}\right)^2} $$
$$ f_{101} = 1.5 \times 10^8 \sqrt{(33.33)^2 + 0 + (100)^2} $$
$$ f_{101} = 1.5 \times 10^8 \sqrt{1110.89 + 10000} $$
$$ f_{101} = 1.5 \times 10^8 \sqrt{11110.89} $$
$$ f_{101} = 1.5 \times 10^8 \times 105.4 $$
$$ f_{101} \approx 15.81 \times 10^9 \text{ Hz} = 15.81 \text{ GHz} $$

### 2.3. Q Factor (Quality Factor)

**(Based on Das & Das, Liao, Raju)**

The Q factor is a measure of how "good" a resonant circuit is, indicating the ratio of energy stored to energy dissipated per cycle. For a cavity resonator, it signifies its selectivity and low loss.

*   **Definition:**
    $$ Q = 2\pi f_0 \frac{\text{Energy Stored}}{\text{Energy Dissipated per second}} $$
    or
    $$ Q = \frac{\text{Energy Stored}}{\text{Average Power Dissipated}} $$
    or
    $$ Q = \frac{f_0}{\Delta f} $$
    Where:
    *   $f_0$ is the resonant frequency.
    *   $\Delta f$ is the bandwidth (the range of frequencies over which the power output is at least half of the maximum power).

*   **Factors Affecting Q:**
    *   **Dimensions of the cavity:** Larger cavities generally have higher Q.
    *   **Material of the walls:** Highly conductive materials (like copper) lead to lower losses and higher Q.
    *   **Surface roughness:** Smoother surfaces have lower losses.
    *   **Presence of dielectric materials:** Dielectrics can introduce losses.

*   **Types of Q:**
    *   **Unloaded Q ($Q_0$):** The Q of the cavity when it is isolated, with only intrinsic losses considered.
    *   **Loaded Q ($Q_L$):** The Q of the cavity when it is coupled to external circuits. $1/Q_L = 1/Q_0 + 1/Q_{ext}$, where $Q_{ext}$ accounts for losses due to coupling.

**Example:** A cavity operating at 10 GHz has a bandwidth of 10 MHz. Calculate its unloaded Q factor.

*   $f_0 = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
*   $\Delta f = 10 \text{ MHz} = 10 \times 10^6 \text{ Hz}$

$$ Q_0 = \frac{f_0}{\Delta f} = \frac{10 \times 10^9 \text{ Hz}}{10 \times 10^6 \text{ Hz}} = 1000 $$

**Highlight:** Higher Q values are desirable for applications requiring sharp tuning and low signal distortion.

### 2.4. Excitation of Cavity Resonators

**(Based on Liao, Saurabh Shukla)**

To make a cavity resonator oscillate, energy must be coupled into it at or near its resonant frequency. This is done by introducing electromagnetic fields that match the desired mode.

*   **Methods of Excitation:**
    1.  **Probe (Electric Field Excitation):** A small conducting probe (like a wire) is inserted into the cavity. If the probe is placed where the electric field of the desired mode is strong, it couples energy into the cavity. The probe acts like an antenna.
        *   **Placement:** For $TE_{10p}$ modes in a rectangular cavity, the probe is typically placed near a wall where $E_z$ is maximum (e.g., center of the top or bottom wall).
    2.  **Loop (Magnetic Field Excitation):** A small conducting loop is inserted into the cavity. If the loop is placed where the magnetic field lines are changing rapidly, it couples energy into the cavity. The loop acts as a current element.
        *   **Placement:** For $TE_{10p}$ modes, the loop is often placed near the side walls where the magnetic field is strongest.
    3.  **Aperture Coupling:** A small slot or hole is made in the wall of the cavity. This slot allows electromagnetic energy to enter or exit the cavity, exciting specific modes. The size and position of the slot determine which modes are excited.
    4.  **Waveguide Coupling:** The cavity is directly coupled to a waveguide. The waveguide's electromagnetic fields can excite the cavity modes if their frequencies match.

**Important Point:** The excitation method and the position of the coupling element are crucial for selectively exciting a specific mode. Incorrect placement can lead to excitation of unwanted modes or no excitation at all.

### 2.5. Tuning of Cavity Resonators

**(Based on Liao, Saurabh Shukla, R.S.Rao)**

Tuning refers to changing the resonant frequency of the cavity. This is often necessary in applications like oscillators and filters.

*   **Methods of Tuning:**
    1.  **Mechanical Tuning:**
        *   **Plunger:** A movable piston or plunger is inserted into the cavity. Changing the effective length of the cavity (by moving the plunger) changes the resonant frequency according to the formula: $f_{mnp} \propto 1/d$.
        *   **Deformable Cavity:** The cavity walls are made slightly flexible, allowing their dimensions to be adjusted mechanically.
    2.  **Dielectric Tuning:** Introducing a movable dielectric material with a variable dielectric constant into the cavity. The presence of a dielectric changes the speed of light and thus the resonant frequency.
    3.  **Post or Screw Tuning:** Inserting adjustable screws or posts into the cavity. These metal components effectively alter the boundary conditions and the distribution of electromagnetic fields, thereby changing the resonant frequency.
        *   **Placement:** Screws are usually placed in regions of high electric or magnetic field intensity to achieve a significant frequency shift.

**Example:** A cavity resonator is tuned by inserting a screw. If the screw is tightened, it effectively reduces the volume available for the fields, leading to a higher resonant frequency.

### 2.6. Re-entrant Cavity

**(Based on Liao, Das & Das, R.S.Rao)**

A re-entrant cavity is a type of cavity resonator where the dimensions are intentionally constricted in certain regions, typically by the insertion of posts or irises. This constriction leads to a higher concentration of electric field in the gap region.

*   **Structure:** Features posts or indentations that protrude into the cavity volume.
*   **Principle:** These protrusions create regions with very high electric field gradients.
*   **Advantages:**
    *   **Compact Size:** Allows for smaller cavities for a given frequency compared to standard rectangular cavities.
    *   **High Electric Field Intensity:** The concentrated electric field is beneficial for applications like klystrons and magnetrons, where it interacts with electron beams.
    *   **Easier Excitation:** Can be excited more easily with probes in the high electric field gap.
*   **Common Examples:**
    *   **Cylindrical re-entrant cavities:** Used in klystrons.
    *   **Multiple-gap klystron cavities:** Designed for efficient energy transfer.
    *   **Magnetron cavities:** Often have a "sole" or central post to enhance the electric field.

**Illustration:** Imagine a rectangular cavity with a central post extending from one wall towards the other. The gap between the post and the opposite wall is where the electric field is highly concentrated.

**Highlight:** Re-entrant cavities are designed to maximize the interaction between electromagnetic fields and charged particles or to achieve compact designs at microwave frequencies.

---

## Practice Questions and Answers

**Question 1:** A rectangular cavity resonator has internal dimensions of $a = 2$ cm, $b = 1$ cm, and $d = 0.5$ cm. Calculate the resonant frequency of the $TE_{101}$ and $TM_{111}$ modes.

**Answer:**
*   **For $TE_{101}$:**
    $m=1, n=0, p=1$
    $a = 0.02$ m, $b = 0.01$ m, $d = 0.005$ m
    $f_{101} = \frac{3 \times 10^8}{2} \sqrt{\left(\frac{1}{0.02}\right)^2 + \left(\frac{0}{0.01}\right)^2 + \left(\frac{1}{0.005}\right)^2}$
    $f_{101} = 1.5 \times 10^8 \sqrt{(50)^2 + 0 + (200)^2}$
    $f_{101} = 1.5 \times 10^8 \sqrt{2500 + 40000}$
    $f_{101} = 1.5 \times 10^8 \sqrt{42500}$
    $f_{101} = 1.5 \times 10^8 \times 206.16$
    $f_{101} \approx 30.92 \text{ GHz}$

*   **For $TM_{111}$:**
    $m=1, n=1, p=1$
    $f_{111} = \frac{3 \times 10^8}{2} \sqrt{\left(\frac{1}{0.02}\right)^2 + \left(\frac{1}{0.01}\right)^2 + \left(\frac{1}{0.005}\right)^2}$
    $f_{111} = 1.5 \times 10^8 \sqrt{(50)^2 + (100)^2 + (200)^2}$
    $f_{111} = 1.5 \times 10^8 \sqrt{2500 + 10000 + 40000}$
    $f_{111} = 1.5 \times 10^8 \sqrt{52500}$
    $f_{111} = 1.5 \times 10^8 \times 229.13$
    $f_{111} \approx 34.37 \text{ GHz}$

**Question 2:** What is the Q factor of a cavity resonator operating at 5 GHz if its bandwidth is 500 kHz?

**Answer:**
$f_0 = 5 \text{ GHz} = 5 \times 10^9 \text{ Hz}$
$\Delta f = 500 \text{ kHz} = 500 \times 10^3 \text{ Hz}$

$Q = \frac{f_0}{\Delta f} = \frac{5 \times 10^9}{500 \times 10^3} = \frac{5000}{500} = 10000$
$Q = 10000$

**Question 3:** Describe two common methods for exciting a rectangular cavity resonator and explain the principle behind them.

**Answer:**
1.  **Probe Excitation:** A small conducting probe (wire) is inserted into the cavity. It couples to the electric field of the desired mode. For $TE_{10p}$ modes, the probe should be placed where the electric field component ($E_z$) is maximum (e.g., at the center of the top or bottom wall). The probe acts as a dipole antenna, injecting energy at a frequency close to the cavity's resonant frequency.
2.  **Loop Excitation:** A small conducting loop is placed inside the cavity. It couples to the magnetic field. For $TE_{10p}$ modes, the loop is typically placed near the side walls where the magnetic field lines are concentrated. The changing magnetic flux through the loop induces a voltage, allowing energy transfer into the cavity.

**Question 4:** What is a re-entrant cavity and what is its primary advantage?

**Answer:**
A re-entrant cavity is a cavity resonator with constricted dimensions, often achieved by inserting posts or irises. These constrictions lead to a region of high electric field intensity within the cavity. The primary advantage is the ability to achieve a high electric field concentration in a compact volume, which is useful for enhancing the interaction between electromagnetic fields and charged particle beams in devices like klystrons and magnetrons.

---

## 3. Important Points to Remember

*   **Resonant Frequency Formula:** The formula $f_{mnp} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2 + \left(\frac{p}{d}\right)^2}$ is fundamental for calculating the resonant frequencies of rectangular cavities.
*   **Mode Definitions:** Differentiate clearly between TE (no $E_z$) and TM (no $H_z$) modes, and their index requirements.
*   **Q Factor:** A measure of selectivity and low loss. Higher Q means a narrower bandwidth and better performance in many applications.
*   **Excitation Methods:** Probe (electric field) and loop (magnetic field) excitation are common, and their placement is critical for mode selectivity.
*   **Tuning:** Essential for adjusting resonant frequency in applications. Mechanical and post/screw tuning are common.
*   **Re-entrant Cavities:** Designed for high electric field concentration and compactness, crucial for electron beam devices.
*   **Dominant Mode:** The mode with the lowest resonant frequency (often $TE_{101}$ for a typical rectangular cavity).

---

This concludes Module 1's focus on Cavity Resonators. The next steps in your microwave and antenna studies will build upon these fundamental concepts of resonant structures and electromagnetic field behavior.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
