---
title: "Scattering parameters : Properties of S matrix, S matrix formulation of E plane Tee, H plane Tee, Magic Tee, Directional coupler."
subject: "MICROWAVES & ANTENNAS"
module: "Module 1: Microwaves: Electromagnetic spectrum, Frequency Bands, Features of microwaves, advantages & disadvantages, Applications, Atmospheric propagation effects."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feda4"
status: "completed"
scrapedAt: "2026-05-23T18:01:36.419Z"
---
# MICROWAVES & ANTENNAS - Module 1: Microwaves

## Topic: Scattering Parameters (S-parameters)

This topic focuses on understanding how microwave components interact with electromagnetic waves, particularly in terms of power transfer and reflection. S-parameters provide a convenient way to characterize these interactions for components that are typically terminated in characteristic impedance, making them ideal for microwave frequencies where direct voltage and current measurements are difficult.

---

### 1. Electromagnetic Spectrum and Frequency Bands

*   **Definition:** Microwaves are a region of the electromagnetic spectrum characterized by their wavelengths, typically ranging from about one meter to one millimeter, corresponding to frequencies from 300 MHz (0.3 GHz) to 300 GHz.
*   **Key Concept:** The electromagnetic spectrum is a continuous range of electromagnetic waves ordered by frequency or wavelength.
*   **Frequency Bands:** Different frequency ranges within the microwave spectrum are assigned specific designations for various applications.
    *   **L-band:** 1-2 GHz (e.g., GPS, some radar)
    *   **S-band:** 2-4 GHz (e.g., weather radar, satellite communication)
    *   **C-band:** 4-8 GHz (e.g., satellite communication, some radar)
    *   **X-band:** 8-12 GHz (e.g., military radar, satellite communication)
    *   **Ku-band:** 12-18 GHz (e.g., satellite TV, radar)
    *   **K-band:** 18-27 GHz (e.g., high-resolution radar, satellite communication)
    *   **Ka-band:** 27-40 GHz (e.g., high-speed satellite communication, advanced radar)
    *   **Higher bands (V, W, mmWave):** >40 GHz (e.g., high-bandwidth wireless, short-range communication)
*   **Textbook Reference:** Das & Das (4th ed.), Chapter 1 discusses the electromagnetic spectrum and its relation to microwave frequencies.

---

### 2. Features of Microwaves

*   **Short Wavelength:** Leads to smaller component sizes, enabling miniaturization and integration.
*   **High Frequencies:** Allow for high bandwidths, supporting high data rates and multiple simultaneous communications.
*   **Directionality:** Microwave beams can be focused, enabling directional antennas and minimizing interference.
*   **Penetration:** Can penetrate rain, fog, and clouds to some extent, crucial for radar and satellite communication.
*   **Low Noise:** Microwave systems can achieve very low noise figures, important for sensitive receivers.
*   **Textbook Reference:** Liao (3rd ed.), Chapter 1 covers the characteristics of microwaves.

---

### 3. Advantages and Disadvantages of Microwaves

**Advantages:**

*   **High Bandwidth:** Enables high data rates for communication systems.
*   **Directionality:** Allows for focused beams, reducing interference and increasing signal strength.
*   **Small Component Size:** Due to short wavelengths, microwave components are compact.
*   **Penetration:** Can propagate through atmospheric conditions that block lower frequencies.
*   **High Power Handling:** Microwave tubes (like klystrons and magnetrons) can generate high power.
*   **Textbook Reference:** Raju (3rd ed.), Chapter 1 highlights the benefits of microwave applications.

**Disadvantages:**

*   **Atmospheric Effects:** Susceptible to attenuation and scattering from rain, fog, and atmospheric gases at higher frequencies.
*   **Line-of-Sight Propagation:** Primarily propagates via line-of-sight, requiring tall towers or satellites for long distances.
*   **Component Complexity:** Design and fabrication of microwave components require specialized techniques and materials.
*   **High Power Dissipation:** Loss mechanisms in components can lead to significant power dissipation.
*   **Cost:** Microwave equipment can be more expensive than lower-frequency counterparts.

---

### 4. Applications of Microwaves

*   **Communication:**
    *   Satellite Communication (TV broadcasting, data transfer)
    *   Terrestrial Microwave Links (point-to-point communication)
    *   Wireless Communication (Wi-Fi, mobile phone networks)
    *   Broadband Internet Access
*   **Radar Systems:**
    *   Weather Radar
    *   Air Traffic Control
    *   Military Surveillance and Targeting
    *   Automotive Radar
*   **Heating and Industrial Processes:**
    *   Microwave Ovens
    *   Industrial Drying and Curing
*   **Medical Applications:**
    *   Diathermy (tissue heating)
    *   Surgical Instruments
    *   Cancer Therapy
*   **Scientific Research:**
    *   Radio Astronomy
    *   Spectroscopy
*   **Textbook Reference:** Krauss et al. (4th ed.), Chapter 1 and Raju (3rd ed.), Chapter 1 provide overviews of microwave applications. Saurabh Shukla (2014), Chapter 1.

---

### 5. Atmospheric Propagation Effects

*   **Definition:** The interaction of microwave signals with the Earth's atmosphere, causing signal degradation.
*   **Key Effects:**
    *   **Attenuation:** Reduction in signal power due to absorption by atmospheric gases (oxygen, water vapor) and scattering by precipitation (rain, snow, fog).
        *   **Oxygen Absorption:** Peaks around 60 GHz.
        *   **Water Vapor Absorption:** Peaks around 22 GHz and 183 GHz.
        *   **Rain Attenuation:** Becomes significant above ~10 GHz, increasing with frequency and rain rate.
    *   **Scattering:** Deviation of signal from its intended path due to interaction with particles in the atmosphere.
    *   **Multipath Propagation:** Signal arriving at the receiver via multiple paths due to reflections from atmospheric layers or the ground, causing fading.
    *   **Refraction:** Bending of the microwave beam due to variations in the refractive index of the atmosphere, affecting coverage.
    *   **Diffraction:** Bending of waves around obstacles, less significant for microwaves due to their short wavelengths compared to lower frequencies.
*   **Textbook Reference:** Raju (3rd ed.), Chapter 17 discusses wave propagation and atmospheric effects. Jordan & Balmain (2nd ed.), Chapter 9.

---

### 6. Scattering Parameters (S-parameters)

**Core Concept:** S-parameters are a set of dimensionless complex numbers that characterize the linear behavior of a multi-port network when driven by a traveling wave at each port. They relate the incident and reflected voltage waves at each port.

**Why S-parameters?**
At microwave frequencies, it is difficult to measure voltage and current directly due to impedance mismatches and the presence of standing waves. S-parameters are defined in terms of incident and reflected power waves, which are easier to measure and are related to the port voltages and currents normalized to the characteristic impedance ($Z_0$).

**Mathematical Formulation:**
Consider an $N$-port network. Let $a_i$ be the incident voltage wave at port $i$, and $b_i$ be the reflected voltage wave at port $i$. These are related by the S-parameter matrix:

$$
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_N
\end{bmatrix}
=
\begin{bmatrix}
S_{11} & S_{12} & \cdots & S_{1N} \\
S_{21} & S_{22} & \cdots & S_{2N} \\
\vdots & \vdots & \ddots & \vdots \\
S_{N1} & S_{N2} & \cdots & S_{NN}
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2 \\
\vdots \\
a_N
\end{bmatrix}
$$

Or, more compactly:
$$ \mathbf{b} = \mathbf{S} \mathbf{a} $$

**Definition of S-parameters ($S_{ij}$):**
$S_{ij}$ is the ratio of the reflected wave at port $i$ to the incident wave at port $j$, when all other ports ($k \neq j$) are terminated in the characteristic impedance ($Z_0$), i.e., $a_k = 0$ for $k \neq j$.

$$ S_{ij} = \left. \frac{b_i}{a_j} \right|_{a_k=0 \text{ for } k \neq j} $$

**Meaning of $S_{ij}$:**
*   **$S_{ii}$ (Reflection Coefficient at Port $i$):** When power is incident only on port $i$ ($a_j=0$ for $j \neq i$), $S_{ii} = b_i / a_i$ represents the voltage reflection coefficient at port $i$. If port $i$ is matched ($S_{ii}=0$), there is no reflection.
*   **$S_{ij}$ ($i \neq j$) (Transmission Coefficient from Port $j$ to Port $i$):** When power is incident only on port $j$ ($a_k=0$ for $k \neq j$), $S_{ij} = b_i / a_j$ represents the complex transmission coefficient from port $j$ to port $i$. This indicates how much signal is transmitted and its phase.

**Important Point to Remember:** S-parameters are defined under the assumption that all ports are terminated in the characteristic impedance ($Z_0$). This is a crucial aspect of their utility in microwave engineering.

**Textbook Reference:** Das & Das (4th ed.), Chapter 3; Liao (3rd ed.), Chapter 4; Saurabh Shukla (2014), Chapter 3.

---

### 7. Properties of the S-Matrix

The S-matrix of a passive, reciprocal, and lossless network has several important properties:

1.  **Symmetry for Reciprocal Networks:** For a reciprocal network (where the transmission from port $i$ to port $j$ is the same as from port $j$ to port $i$), the S-matrix is symmetric:
    $$ S_{ij} = S_{ji} $$
    This applies to structures like Tees and directional couplers.

2.  **Unitarity for Lossless Networks:** For a lossless network (no power is dissipated within the network), the S-matrix is unitary. This means that the total incident power equals the total reflected power. Mathematically, this is expressed as:
    $$ \mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I} $$
    where $\mathbf{S}^{\dagger}$ is the conjugate transpose of $\mathbf{S}$, and $\mathbf{I}$ is the identity matrix.
    For a 2-port network, this expands to:
    *   $|S_{11}|^2 + |S_{21}|^2 = 1$ (Power conservation at port 1)
    *   $|S_{12}|^2 + |S_{22}|^2 = 1$ (Power conservation at port 2)
    *   $S_{11}S_{12}^* + S_{21}S_{22}^* = 0$
    *   $S_{12}S_{11}^* + S_{22}S_{21}^* = 0$

3.  **Unit Magnitude of $S_{ii}$ for Matched Ports:** If a port is perfectly matched (e.g., to $Z_0$), then $S_{ii} = 0$.

4.  **Sum of Magnitudes:** For a passive network, the sum of the magnitudes of all entries in any column $j$ is less than or equal to 1:
    $$ \sum_{i=1}^{N} |S_{ij}| \le 1 $$
    This signifies that the total power incident on port $j$ cannot be greater than the power delivered to the port if it were matched. For lossless networks, the equality holds.

5.  **Absence of Negative Reflections:** $|S_{ij}| \le 1$ for all $i, j$.

**Course Outcome Alignment:** CO2 (Apply the S parameter theory to obtain the S matrices of various microwave hybrid circuits) directly utilizes these properties.
**Knowledge Level:** K3.

---

### 8. S-Matrix Formulation of Microwave Junctions and Couplers

We will now formulate the S-matrices for common microwave components. Assume all ports are terminated in $Z_0$.

#### 8.1 E-Plane Tee (Series Tee)

*   **Description:** An E-plane tee is a three-port junction where the electric field vectors of the incident waves in two collinear arms are in the same direction and perpendicular to the plane of symmetry. The third arm is perpendicular to the plane of symmetry. It's called an E-plane tee because the dominant mode propagates in the E-plane.
*   **Symmetry:** It is a reciprocal device.
*   **Lossless:** Assume it's lossless.
*   **Configuration:**
    *   Port 1: Incident Waveguide (main arm)
    *   Port 2: Incident Waveguide (main arm, collinear with Port 1)
    *   Port 3: Incident Waveguide (branch arm)

*   **S-Matrix Properties:**
    *   **Reciprocal:** $S_{ij} = S_{ji}$
    *   **Lossless:** $\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$
    *   **Three Ports:** $3 \times 3$ matrix.
    *   **Input vs. Output:** Ports 1 and 2 are identical in their relation to port 3. Power incident on port 3 is split equally between ports 1 and 2.
    *   **No Reflection:** For a perfectly matched junction, $S_{11} = S_{22} = S_{33} = 0$.
    *   **Phase Relationship:** When power is incident on port 3, it splits equally between ports 1 and 2. The phases at ports 1 and 2 are the same.
    *   **Transmission:** When power is incident on port 1, it is transmitted to port 3. Due to symmetry, the transmission to port 2 is also present, but with a specific phase relationship. If ports 1 and 2 are collinear, a match at port 3 implies that power from port 1 goes to port 3 and also to port 2 with a specific phase relation. In a symmetric E-plane tee, power incident on port 1 is ideally split equally between ports 2 and 3, with a 180-degree phase difference between the transmitted signals. However, typically, port 1 and port 2 are considered the "through" ports and port 3 is the "coupled" or "branch" port.

*   **S-Matrix Formulation for a Symmetrical E-plane Tee:**
    Let port 3 be the side arm and ports 1 and 2 be the main line ports.
    When power is incident on port 3:
    *   $S_{33} = 0$ (no reflection if matched)
    *   $S_{13} = S_{31} = \frac{1}{\sqrt{2}}$ (equal power split)
    *   $S_{23} = S_{32} = \frac{1}{\sqrt{2}}$ (equal power split)
    *   $S_{13}$ and $S_{23}$ have the same phase.
    *   $S_{11} = S_{22} = S_{12} = S_{21} = 0$ (ideal matching and no direct coupling between main arms)

    When power is incident on port 1:
    *   $S_{11} = 0$ (no reflection)
    *   $S_{21} = S_{12}$ (reciprocity)
    *   $S_{31} = S_{13}$
    *   Power incident on port 1 splits between port 2 (through) and port 3 (coupled). For a symmetric E-plane tee, the wave transmitted to port 2 is in phase with the incident wave (ideally $S_{21}=1$ for no coupling to port 3, which is not the case for a Tee).
    *   In a tee junction, power incident on the collinear ports (1 and 2) is split between the third port (3) and the other collinear port. For an E-plane tee, the waves leaving ports 2 and 3 are in phase when power is incident on port 1.
    *   Let's re-evaluate based on common usage: Ports 1 & 2 are collinear, Port 3 is perpendicular.
        *   If power enters port 3: It splits equally between 1 and 2. $S_{13} = S_{23} = \frac{1}{\sqrt{2}}$. Phase is same. $S_{11}=S_{22}=S_{33}=0$, $S_{12}=S_{21}=0$.
        *   If power enters port 1: It goes to port 3 and port 2. $S_{21} = S_{31}$. For a symmetric E-plane tee, the signal going to port 2 is in phase with the incident signal, and the signal going to port 3 is also in phase.
        *   Let's use a standard definition where ports 1 and 2 are main arm, port 3 is branch.
            *   $S_{11} = S_{22} = S_{33} = 0$ (matched ports)
            *   $S_{12} = S_{21}$ (reciprocity)
            *   $S_{13} = S_{31}$ (reciprocity)
            *   $S_{23} = S_{32}$ (reciprocity)
            *   If power enters port 3: $S_{13} = S_{23} = 1/\sqrt{2}$. The phases are same. $S_{12} = 0$.
            *   If power enters port 1: It splits between port 2 and port 3. Let the transmission coefficient to port 3 be $x$. Then transmission to port 2 is related.
            *   For a symmetric E-plane tee, $S_{31} = \frac{1}{\sqrt{2}}e^{-j\phi_1}$ and $S_{21} = \frac{1}{\sqrt{2}}e^{-j\phi_2}$ where $\phi_1$ and $\phi_2$ represent propagation delays.
            *   A commonly cited S-matrix for a lossless symmetric E-plane tee:
                $$ \mathbf{S} = \begin{bmatrix} 0 & 0 & \frac{1}{\sqrt{2}} \\ 0 & 0 & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix} $$
                This matrix implies that if power enters port 3, it splits equally to ports 1 and 2 with no phase shift. If power enters port 1, it splits equally to ports 2 and 3 with no phase shift. However, this simplified version does not account for the phase difference in propagation or the power splitting characteristics when power enters the main arm.
            *   A more rigorous analysis for a lossless, symmetric E-plane tee gives:
                $$ \mathbf{S} = \begin{bmatrix} 0 & -j/\sqrt{2} & 1/\sqrt{2} \\ -j/\sqrt{2} & 0 & 1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \end{bmatrix} $$
                Here, port 1 and 2 are main arms, port 3 is the side arm. When power enters port 3, it splits equally to 1 and 2 with same phase. When power enters port 1, it transmits to port 2 (main line) with a phase shift and to port 3 (branch) with a different phase shift. The $-j/\sqrt{2}$ indicates a 90-degree phase lag for transmission between the main arms if they are coupled. For an E-plane tee, when power enters port 1, it is split between port 2 and port 3. The signal transmitted to port 2 is ideally in phase with the incident signal. The signal transmitted to port 3 is also in phase with the incident signal.

            *   **Let's stick to a standard convention:** Ports 1 and 2 are collinear. Port 3 is the branch.
                When power is incident on port 3: $S_{13} = S_{23} = 1/\sqrt{2}$ (equal power split, same phase). $S_{11}=S_{22}=S_{33}=0$. $S_{12}=S_{21}=0$.
                When power is incident on port 1: It splits to port 2 and port 3. $S_{21}$ is the transmission to port 2, $S_{31}$ is the transmission to port 3.
                For a lossless symmetric E-plane tee, let's consider the case where the lengths of propagation are equal:
                $$ \mathbf{S} = \begin{bmatrix} 0 & 0 & \frac{1}{\sqrt{2}} \\ 0 & 0 & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix} $$
                This matrix suggests no coupling between the collinear ports when power is incident on the branch, and no transmission between the collinear ports when power is incident on one of them. This is incorrect for a tee.

            *   **Correct S-Matrix for a Lossless Symmetric E-Plane Tee (Ports 1 & 2 collinear, Port 3 branch):**
                If input is at Port 3: $S_{13} = S_{23} = 1/\sqrt{2}$ (equal power split, same phase). $S_{12}=S_{21}=0$.
                If input is at Port 1: $S_{21}$ is transmission to Port 2, $S_{31}$ is transmission to Port 3.
                For a symmetric E-plane tee, transmission to port 2 ($S_{21}$) is ideally lossless if port 3 is matched and not connected, but here port 3 is connected. The signal incident on port 1 splits between port 2 and port 3.
                A common representation where port 1 and 2 are main, port 3 is branch:
                $$ \mathbf{S} = \begin{bmatrix} 0 & c & s \\ c & 0 & s \\ s & s & 0 \end{bmatrix} $$
                where $|c|^2 + |s|^2 = 1$ (lossless property if $S_{11}=S_{22}=S_{33}=0$).
                For an E-plane tee, the input at port 1 couples to port 2 and port 3 with equal phase.
                $S_{11}=0, S_{22}=0, S_{33}=0$
                $S_{21} = S_{12} = c$
                $S_{31} = S_{13} = s$
                $S_{32} = S_{23} = s$
                $S_{12}=0$ is not always true.

                **Let's use a standard, widely accepted S-matrix for a symmetric E-plane Tee:**
                Port 1 & 2 are collinear, Port 3 is the branch.
                $$ \mathbf{S} = \begin{bmatrix} 0 & 0 & \frac{1}{\sqrt{2}} \\ 0 & 0 & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix} $$
                This matrix implies that when input is on port 3, it splits equally to 1 and 2 with same phase. $S_{12}=0$ indicates no direct coupling between main arms, which is an idealization. When input is on port 1, it ideally goes to port 3 only and not port 2 ($S_{21}=0$), which is also not typical.

                **A more realistic S-matrix for a symmetric E-plane Tee, considering power division:**
                Let power $P_{in}$ enter port 3. Then power $P_1 = P_2 = P_{in}/2$.
                $S_{13} = S_{23} = 1/\sqrt{2}$ (amplitude), same phase.
                $S_{11}=S_{22}=S_{33}=0$.
                $S_{12}=S_{21}$.
                $S_{13}=S_{31}$, $S_{23}=S_{32}$.
                Let's assume propagation lengths are equal for ports 1 and 2.
                $$ \mathbf{S} = \begin{bmatrix} 0 & s & s \\ s & 0 & s \\ s & s & 0 \end{bmatrix} $$
                For lossless operation, $|S_{11}|^2+|S_{21}|^2+|S_{31}|^2=1$, $|S_{12}|^2+|S_{22}|^2+|S_{32}|^2=1$, $|S_{13}|^2+|S_{23}|^2+|S_{33}|^2=1$.
                With $S_{ii}=0$:
                $|s|^2 + |s|^2 = 1 \implies 2|s|^2 = 1 \implies |s| = 1/\sqrt{2}$.
                This means $s=1/\sqrt{2}$ (assuming zero phase shift for simplicity in this example).
                $$ \mathbf{S}_{\text{E-plane Tee}} = \begin{bmatrix} 0 & 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & 0 & 1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \end{bmatrix} $$
                **Interpretation:**
                *   Input at port 3 splits equally between ports 1 and 2 with same phase.
                *   Input at port 1 splits equally between ports 2 and 3 with same phase.
                *   Input at port 2 splits equally between ports 1 and 3 with same phase.
                This matrix represents a perfectly matched, lossless, symmetric E-plane tee where coupling between collinear ports is equal to coupling to the branch port.

*   **Textbook Reference:** Das & Das (4th ed.), Chapter 3; Liao (3rd ed.), Chapter 4.

---

#### 8.2 H-Plane Tee (Shunt Tee)

*   **Description:** An H-plane tee is a three-port junction where the magnetic field vectors of the incident waves in two collinear arms are in the same direction and perpendicular to the plane of symmetry. The third arm is perpendicular to the plane of symmetry. It's called an H-plane tee because the dominant mode propagates in the H-plane.
*   **Symmetry:** It is a reciprocal device.
*   **Lossless:** Assume it's lossless.
*   **Configuration:**
    *   Port 1: Incident Waveguide (main arm)
    *   Port 2: Incident Waveguide (main arm, collinear with Port 1)
    *   Port 3: Incident Waveguide (branch arm)

*   **S-Matrix Properties:**
    *   **Reciprocal:** $S_{ij} = S_{ji}$
    *   **Lossless:** $\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$
    *   **Three Ports:** $3 \times 3$ matrix.
    *   **Phase Relationship:** When power is incident on port 3, it splits equally between ports 1 and 2, but with a **180-degree phase difference**.
    *   **Transmission:** When power is incident on port 1, it is transmitted to port 3 and also to port 2. The phase relationship is different from the E-plane tee.

*   **S-Matrix Formulation for a Symmetrical H-plane Tee:**
    Let port 3 be the side arm and ports 1 and 2 be the main line ports.
    If power enters port 3: $S_{13} = 1/\sqrt{2}$ and $S_{23} = -1/\sqrt{2}$ (equal power split, 180-degree phase difference).
    $S_{11}=S_{22}=S_{33}=0$.
    $S_{12}=S_{21}$.
    $S_{13}=S_{31}$, $S_{23}=S_{32}$.
    For a symmetric H-plane tee, let's assume propagation lengths are equal for ports 1 and 2.
    $$ \mathbf{S} = \begin{bmatrix} 0 & s & s \\ s & 0 & -s \\ s & -s & 0 \end{bmatrix} $$
    For lossless operation with $S_{ii}=0$:
    $|s|^2 + |-s|^2 = 1 \implies 2|s|^2 = 1 \implies |s| = 1/\sqrt{2}$.
    Let $s = 1/\sqrt{2}$ (assuming zero phase shift for $S_{12}$ and $S_{13}$ etc for simplicity).
    $$ \mathbf{S}_{\text{H-plane Tee}} = \begin{bmatrix} 0 & 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & 0 & -1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} & 0 \end{bmatrix} $$
    **Interpretation:**
    *   Input at port 3 splits equally between ports 1 and 2, with a 180-degree phase difference between the outputs.
    *   Input at port 1 splits equally between ports 2 and 3. The transmission to port 2 has a 180-degree phase shift, while the transmission to port 3 has no phase shift (relative to the incident wave).
    *   Input at port 2 splits equally between ports 1 and 3, with a 180-degree phase shift between the outputs.

*   **Textbook Reference:** Das & Das (4th ed.), Chapter 3; Liao (3rd ed.), Chapter 4.

---

#### 8.3 Magic Tee (Hybrid Junction)

*   **Description:** A magic tee is a four-port junction formed by combining E-plane and H-plane tees. It has two collinear arms (Ports 1 and 2), a branch arm (Port 3), and a terminating arm (Port 4) which is isolated from the others. It's called "magic" because of its unique power distribution and isolation properties.
*   **Symmetry:** It is a reciprocal device.
*   **Lossless:** Assume it's lossless.
*   **Configuration:**
    *   Port 1: Collinear arm 1
    *   Port 2: Collinear arm 2
    *   Port 3: Branch arm (connected to one of the tees)
    *   Port 4: Terminating arm (connected to the other tee)

*   **S-Matrix Properties:**
    *   **Reciprocal:** $S_{ij} = S_{ji}$
    *   **Lossless:** $\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$
    *   **Four Ports:** $4 \times 4$ matrix.
    *   **Isolation:** Port 4 is isolated from ports 1, 2, and 3 ($S_{i4}=0$ and $S_{4i}=0$ for $i=1,2,3$). This is a key characteristic.
    *   **Input at Port 3:** Power incident on Port 3 splits equally between Ports 1 and 2 with the **same phase**.
    *   **Input at Port 4:** Power incident on Port 4 splits equally between Ports 1 and 2 with **opposite phases** (180-degree phase difference).
    *   **Input at Port 1:** Power incident on Port 1 is transmitted to Port 3 and Port 4. Due to the isolation of Port 4 from Port 1 and 2, this implies a specific coupling behavior.

*   **S-Matrix Formulation for a Magic Tee:**
    Let Ports 1 and 2 be the collinear arms, Port 3 be the branch arm (from E-plane tee), and Port 4 be the terminating arm (from H-plane tee).
    *   Due to isolation of Port 4: $S_{14} = S_{41} = S_{24} = S_{42} = S_{34} = S_{43} = 0$.
    *   Input at Port 3 (E-plane characteristic): $S_{13} = S_{31} = 1/\sqrt{2}$ and $S_{23} = S_{32} = 1/\sqrt{2}$ (same phase).
    *   Input at Port 4 (H-plane characteristic): $S_{14} = S_{41} = 0$ (this port is ideally isolated from 1 and 2, but the connection from H-plane tee creates the coupling).
    *   Let's refine: Input at Port 4 gives outputs at Port 1 and Port 2 with opposite phases. So, $S_{14} = 1/\sqrt{2}$ and $S_{24} = -1/\sqrt{2}$.
    *   Combining these:
        *   Input at Port 3: $S_{13} = 1/\sqrt{2}$, $S_{23} = 1/\sqrt{2}$, $S_{43} = 0$.
        *   Input at Port 4: $S_{14} = 1/\sqrt{2}$, $S_{24} = -1/\sqrt{2}$, $S_{34} = 0$.
        *   Reciprocity: $S_{31}=S_{13}$, $S_{32}=S_{23}$, $S_{41}=S_{14}$, $S_{42}=S_{24}$.
        *   $S_{11}=S_{22}=S_{33}=S_{44}=0$ for matched ports.
        *   $S_{12}=S_{21}$.
    *   Let's construct the matrix based on these rules:
        $$ \mathbf{S} = \begin{bmatrix} S_{11} & S_{12} & S_{13} & S_{14} \\ S_{21} & S_{22} & S_{23} & S_{24} \\ S_{31} & S_{32} & S_{33} & S_{34} \\ S_{41} & S_{42} & S_{43} & S_{44} \end{bmatrix} $$
        Substituting known values:
        $$ \mathbf{S} = \begin{bmatrix} 0 & S_{12} & 1/\sqrt{2} & 1/\sqrt{2} \\ S_{12} & 0 & 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 & 0 \\ 1/\sqrt{2} & -1/\sqrt{2} & 0 & 0 \end{bmatrix} $$
        Now, use the unitarity condition. For column 1:
        $S_{11}S_{11}^* + S_{21}S_{21}^* + S_{31}S_{31}^* + S_{41}S_{41}^* = 1$
        $0 + |S_{12}|^2 + |1/\sqrt{2}|^2 + |1/\sqrt{2}|^2 = 1$
        $|S_{12}|^2 + 1/2 + 1/2 = 1 \implies |S_{12}|^2 = 0 \implies S_{12} = 0$.
        So, $S_{12} = S_{21} = 0$.

        $$ \mathbf{S}_{\text{Magic Tee}} = \begin{bmatrix} 0 & 0 & 1/\sqrt{2} & 1/\sqrt{2} \\ 0 & 0 & 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 & 0 \\ 1/\sqrt{2} & -1/\sqrt{2} & 0 & 0 \end{bmatrix} $$
        **Interpretation:**
        *   **Input at Port 3:** Splits equally to Ports 1 and 2 with same phase. Port 4 is terminated.
        *   **Input at Port 4:** Splits equally to Ports 1 and 2 with opposite phases. Port 3 is terminated.
        *   **Input at Port 1:** Output at Port 3 and Port 4. $S_{31}=1/\sqrt{2}$, $S_{41}=1/\sqrt{2}$. Since $S_{12}=0$, there is no coupling between Port 1 and Port 2.
        *   **Input at Port 2:** Output at Port 3 and Port 4. $S_{32}=1/\sqrt{2}$, $S_{42}=-1/\sqrt{2}$. Since $S_{21}=0$, there is no coupling between Port 1 and Port 2.
        *   **Isolation:** Ports 1 and 2 are isolated from each other ($S_{12}=S_{21}=0$). Ports 1 and 2 are isolated from Port 4 in terms of direct path (but signal from 3 goes to 1 and 2, and signal from 1 and 2 goes to 3 and 4). The most important isolation is between the collinear ports (1 and 2) when power is applied to the branch ports (3 and 4).

*   **Applications:**
    *   **Balanced Modulators:** Used to modulate a carrier signal.
    *   **Duplexers:** To transmit and receive signals simultaneously on the same antenna.
    *   **Mixers:** Used in superheterodyne receivers.
    *   **Phase Comparators:** For measuring phase differences.
*   **Textbook Reference:** Das & Das (4th ed.), Chapter 3; Liao (3rd ed.), Chapter 4; Saurabh Shukla (2014), Chapter 3.

---

#### 8.4 Directional Coupler

*   **Description:** A directional coupler is a passive microwave device that transfers a portion of the power from one transmission line to another, while maintaining the direction of power flow. It has four ports: two ports for the main line (Port 1 and Port 2) and two ports for the coupled line (Port 3 and Port 4).
*   **Symmetry:** It is a reciprocal device.
*   **Lossless:** Assume it's lossless.
*   **Configuration:**
    *   Port 1: Input
    *   Port 2: Through (output of main line)
    *   Port 3: Coupled (output of coupled line, same direction as input)
    *   Port 4: Isolated (termination of coupled line, ideally no power)

*   **S-Matrix Properties:**
    *   **Reciprocal:** $S_{ij} = S_{ji}$
    *   **Lossless:** $\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$
    *   **Four Ports:** $4 \times 4$ matrix.
    *   **Isolation:** Port 4 is ideally isolated from all other ports ($S_{i4}=S_{4i}=0$ for $i=1,2,3$).
    *   **Directivity:** Power entering Port 1 is coupled to Port 3, but ideally not to Port 4. $S_{41}=0$.
    *   **Coupling:** A specific fraction of power is transferred from Port 1 to Port 3.
    *   **Through Transmission:** Most of the power passes from Port 1 to Port 2.
    *   **Phase:** The phase difference between the through and coupled signals is typically fixed.

*   **S-Matrix Formulation for a Directional Coupler (e.g., Bethe-hole type or Lange coupler):**
    Let's define the power levels:
    *   Input power at Port 1: $P_1$
    *   Power transmitted to Port 2 (Through power): $P_2$
    *   Power coupled to Port 3: $P_3$
    *   Power to Port 4 (Isolated port): $P_4$

    **Definitions:**
    *   **Coupling Factor (C):** $C = 10 \log_{10} (P_1/P_3)$ dB. A 10 dB coupler means $P_1/P_3 = 10$.
    *   **Through Loss (TL):** $TL = 10 \log_{10} (P_1/P_2)$ dB. This is typically very small (e.g., 0.1-0.5 dB).
    *   **Directivity (D):** $D = 10 \log_{10} (P_3/P_4)$ dB. Ideally infinite, practically very high.
    *   **Insertion Loss (IL):** $IL = 10 \log_{10} (P_1/P_2)$ dB (same as Through Loss).

    Let's assume a lossless coupler with zero insertion loss ($S_{11}=S_{22}=0$) and perfect isolation ($S_{41}=S_{14}=S_{42}=S_{24}=S_{43}=S_{34}=0$).
    Let the coupling factor be $C$ (as a ratio, not dB). So $P_3 = P_1/C$.
    Since it's lossless, $P_1 = P_2 + P_3$.
    $P_2 = P_1 - P_3 = P_1 - P_1/C = P_1(1 - 1/C)$.
    In terms of S-parameters (voltage amplitudes):
    *   $S_{11} = 0, S_{22} = 0, S_{33} = 0, S_{44} = 0$ (matched ports).
    *   $S_{41} = 0$ (perfect isolation of port 4 from port 1).
    *   $S_{14} = S_{41} = 0$.
    *   $S_{12} = \sqrt{1 - 1/C}e^{-j\theta_1}$ (transmission to through port).
    *   $S_{13} = \frac{1}{\sqrt{C}}e^{-j\theta_2}$ (transmission to coupled port).
    *   The phase difference between coupled and through ports is $\phi = \theta_2 - \theta_1$. This is characteristic of the coupler type. Common values are 0, 90, or 180 degrees.

    Let's construct the S-matrix for a common directional coupler (e.g., a Lange coupler or a branch-guide coupler) where the coupled and through ports have the same phase when power enters the input port, and port 4 is terminated. Let's assume a coupling of 10 dB ($C=10$).
    $S_{13} = 1/\sqrt{10}$. $S_{12} = \sqrt{1 - 1/10} = \sqrt{9/10} = 3/\sqrt{10}$.
    Assume phase difference $\phi = 0$. So $\theta_1 = \theta_2$. Let's set $\theta_1 = \theta_2 = 0$ for simplicity.

    $$ \mathbf{S} = \begin{bmatrix} 0 & 3/\sqrt{10} & 1/\sqrt{10} & 0 \\ 3/\sqrt{10} & 0 & 0 & 0 \\ 1/\sqrt{10} & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix} $$
    Let's check unitarity for column 1:
    $S_{11}S_{11}^* + S_{21}S_{21}^* + S_{31}S_{31}^* + S_{41}S_{41}^* = 0 + (3/\sqrt{10})^2 + (1/\sqrt{10})^2 + 0 = 9/10 + 1/10 = 1$. This is consistent.

    **A common case for a 3 dB coupler (e.g., branch-guide) or 90-degree hybrid:**
    The phase difference between the coupled and through ports is 90 degrees.
    Let $S_{13} = \frac{1}{\sqrt{2}}e^{-j\phi}$. $S_{12} = \frac{1}{\sqrt{2}}e^{-j\phi}$.
    If $S_{13}$ leads $S_{12}$ by 90 degrees:
    Let $S_{12} = 1/\sqrt{2}$ and $S_{13} = (1/\sqrt{2})e^{j\pi/2} = j/\sqrt{2}$.
    $$ \mathbf{S} = \begin{bmatrix} 0 & 1/\sqrt{2} & j/\sqrt{2} & 0 \\ 1/\sqrt{2} & 0 & 0 & 0 \\ j/\sqrt{2} & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix} $$
    **Interpretation:**
    *   Input at Port 1 (forward direction) splits equally between Port 2 (through) and Port 3 (coupled).
    *   Port 4 is ideally isolated.
    *   The signal at Port 3 is 90 degrees ahead in phase compared to the signal at Port 2.

*   **Textbook Reference:** Das & Das (4th ed.), Chapter 3; Liao (3rd ed.), Chapter 4; Krauss et al. (4th ed.), Chapter 6.

---

### 9. Practice Questions and Exercises

**Question 1:**
For a lossless, reciprocal 2-port network, its S-matrix is given by:
$$ \mathbf{S} = \begin{bmatrix} 0.2 & 0.8 \\ 0.8 & 0.2 \end{bmatrix} $$
(a) Is this network reciprocal? Justify.
(b) Is this network lossless? Justify.
(c) If a signal with amplitude 1V is incident on port 1, what are the amplitudes and phases of the reflected and transmitted waves at port 1 and port 2?

**Answer 1:**
(a) Yes, the matrix is symmetric ($S_{12} = S_{21}$), so it is reciprocal.
(b) For a lossless 2-port network, $|S_{11}|^2 + |S_{21}|^2 = 1$ and $|S_{12}|^2 + |S_{22}|^2 = 1$.
    Checking the first condition: $|0.2|^2 + |0.8|^2 = 0.04 + 0.64 = 0.68$.
    Since $0.68 \neq 1$, the network is **lossy**.
(c) Incident wave at port 1: $a_1 = 1$. Other ports terminated, so $a_2 = 0$.
    $b_1 = S_{11}a_1 + S_{12}a_2 = 0.2 \times 1 + 0.8 \times 0 = 0.2$.
    Reflected wave at port 1 has amplitude 0.2 and the same phase as the incident wave (assuming $S_{11}$ is real and positive).
    $b_2 = S_{21}a_1 + S_{22}a_2 = 0.8 \times 1 + 0.2 \times 0 = 0.8$.
    Transmitted wave at port 2 has amplitude 0.8 and the same phase as the incident wave (assuming $S_{21}$ is real and positive).

---

**Question 2:**
Derive the S-matrix for a symmetric E-plane tee, assuming it is lossless and perfectly matched. Explain the meaning of the non-zero elements.

**Answer 2:**
A symmetric E-plane tee is a 3-port device. Let Ports 1 and 2 be the collinear ports and Port 3 be the branch port.
For a lossless, reciprocal, and matched E-plane tee, the S-matrix is:
$$ \mathbf{S}_{\text{E-plane Tee}} = \begin{bmatrix} 0 & 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & 0 & 1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \end{bmatrix} $$
**Meaning of elements:**
*   $S_{11}=S_{22}=S_{33}=0$: All ports are perfectly matched, so there is no reflection from any port when power is incident on it.
*   $S_{12}=S_{21}=1/\sqrt{2}$: When power is incident on port 1, half of the power is transmitted to port 2 with the same phase. Similarly, when power is incident on port 2, half of the power is transmitted to port 1 with the same phase. This indicates coupling between the main arms.
*   $S_{13}=S_{31}=1/\sqrt{2}$: When power is incident on port 1, half of the power is transmitted to port 3 with the same phase. Similarly, when power is incident on port 3, half of the power is transmitted to port 1 with the same phase.
*   $S_{23}=S_{32}=1/\sqrt{2}$: When power is incident on port 2, half of the power is transmitted to port 3 with the same phase. Similarly, when power is incident on port 3, half of the power is transmitted to port 2 with the same phase.

**Key Observation:** Input at any port splits equally to the other two ports with the same phase.

---

**Question 3:**
Write down the S-matrix for a Magic Tee and explain its key properties, particularly regarding isolation and power splitting.

**Answer 3:**
The S-matrix for a Magic Tee (assuming Ports 1 and 2 are collinear, Port 3 is the branch arm from E-plane tee, and Port 4 is the terminating arm from H-plane tee) is:
$$ \mathbf{S}_{\text{Magic Tee}} = \begin{bmatrix} 0 & 0 & 1/\sqrt{2} & 1/\sqrt{2} \\ 0 & 0 & 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 & 0 \\ 1/\sqrt{2} & -1/\sqrt{2} & 0 & 0 \end{bmatrix} $$
**Key Properties:**
*   **Isolation:** $S_{12} = S_{21} = 0$. This means the two collinear ports (1 and 2) are isolated from each other. Power incident on port 1 does not appear at port 2 directly, and vice-versa.
*   **Power Splitting (Input at Port 3):** $S_{13} = S_{23} = 1/\sqrt{2}$. Power incident on Port 3 splits equally into Ports 1 and 2 with the same phase.
*   **Power Splitting (Input at Port 4):** $S_{14} = 1/\sqrt{2}$, $S_{24} = -1/\sqrt{2}$. Power incident on Port 4 splits equally into Ports 1 and 2, but with a 180-degree phase difference.
*   **Termination:** $S_{34} = S_{43} = 0$. Port 3 and Port 4 are terminated when power is incident on the other ports.
*   **Reflection:** $S_{ii} = 0$ for all $i$, indicating all ports are matched.

---

### 10. Important Points to Remember

*   S-parameters are defined for microwave circuits terminated in the characteristic impedance ($Z_0$).
*   They relate incident and reflected voltage waves at each port.
*   $S_{ii}$ represents the reflection coefficient at port $i$.
*   $S_{ij}$ ($i \neq j$) represents the transmission coefficient from port $j$ to port $i$.
*   Reciprocal networks have symmetric S-matrices ($S_{ij} = S_{ji}$).
*   Lossless networks have unitary S-matrices ($\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$).
*   The E-plane tee splits power equally with the same phase between its collinear ports when excited from the branch port.
*   The H-plane tee splits power equally with opposite phases between its collinear ports when excited from the branch port.
*   The Magic Tee is a four-port device that splits power equally between its collinear ports, with either in-phase (from one branch port) or out-of-phase (from the other branch port) outputs. It exhibits isolation between the collinear ports.
*   Directional couplers transfer power from a main line to a coupled line with a specific coupling factor and directivity.

---

### Course Outcome Alignment Check:

*   **CO1:** Explain the basic mechanism of operation of cavity resonator and microwave sources (Knowledge Level: K2)
    *   This topic doesn't directly cover cavity resonators or microwave sources. However, the understanding of microwave properties and propagation is foundational for these.
*   **CO2:** Apply the S parameter theory to obtain the S matrices of various microwave hybrid circuits (Knowledge Level: K3)
    *   This entire topic is dedicated to applying S-parameter theory to derive S-matrices for E-plane Tee, H-plane Tee, Magic Tee, and Directional Couplers. This directly addresses CO2 at K3.
*   **CO3:** Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques (Knowledge Level: K2)
    *   This topic is primarily about circuit components, not antennas themselves. However, understanding microwave propagation (Module 1, initial part) is crucial for antennas.
*   **CO4:** Design important broadband antennas and arrays (Knowledge Level: K3)
    *   Similar to CO3, this topic doesn't directly cover antenna design.

**Focus of this topic:** Primarily supports CO2. The foundational concepts of microwaves and propagation support the broader course understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
