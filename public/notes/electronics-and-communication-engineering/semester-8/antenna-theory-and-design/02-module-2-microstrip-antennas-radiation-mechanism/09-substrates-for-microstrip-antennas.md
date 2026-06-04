---
title: "Substrates for microstrip antennas"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7db"
status: "completed"
scrapedAt: "2026-05-23T18:11:50.788Z"
---
# ANTENNA THEORY AND DESIGN
## Module 2: Microstrip Antennas: Radiation Mechanism
### Topic: Substrates for Microstrip Antennas

---

### 1. Introduction to Microstrip Antennas and the Role of Substrates

Microstrip antennas, also known as patch antennas, are a cornerstone of modern microwave and wireless communication systems due to their low profile, conformal nature, ease of integration, and cost-effectiveness. At the heart of any microstrip antenna lies its dielectric substrate, which plays a crucial role in its performance. The substrate dictates key antenna parameters such as bandwidth, efficiency, radiation pattern, and physical size. Understanding the properties of different substrates is paramount for effective microstrip antenna design.

**Key Concept:** The dielectric substrate of a microstrip antenna acts as the medium through which electromagnetic fields propagate and radiate. Its electrical and physical properties directly influence the antenna's behavior.

**Learning Outcome Addressed:** This section directly supports CO1 (Analyse the radiation mechanism of antennas) by explaining how the substrate influences the fields and radiation.

**Textbook References:**
*   **Balanis (4th Ed.)**: Chapter 13 (Microstrip Antennas) will discuss the structure and general principles, including the substrate.
*   **Garg (2001)**: Chapter 2 (Microstrip Lines) will delve into the fundamental electrical properties of dielectrics relevant to microstrip structures.
*   **Pozar (4th Ed.)**: Chapter 11 (Microstrip Lines) will also cover substrate characteristics in detail.

---

### 2. Key Properties of Dielectric Substrates

The choice of substrate is critical and depends on the specific application requirements. Several key properties must be considered:

*   **Dielectric Constant ($\epsilon_r$)**:
    *   **Definition**: A measure of how well a dielectric material can store electrical energy in an electric field. It is the ratio of the permittivity of the material to the permittivity of free space ($\epsilon = \epsilon_r \epsilon_0$).
    *   **Impact on Antenna Design**:
        *   **Size**: A higher $\epsilon_r$ leads to a smaller antenna size for a given resonant frequency because the wavelength in the dielectric is shorter ($\lambda_d = \lambda_0 / \sqrt{\epsilon_r}$).
        *   **Bandwidth**: Generally, lower $\epsilon_r$ substrates offer wider bandwidths.
        *   **Radiation Efficiency**: High $\epsilon_r$ can lead to increased surface waves, reducing radiation efficiency, especially for thicker substrates.
        *   **Mode Excitation**: The dielectric constant influences the propagation characteristics of surface waves and spurious modes.
    *   **Range**: Typically ranges from 2.2 to 12 or higher.

*   **Loss Tangent ($\tan \delta$)**:
    *   **Definition**: A measure of the dielectric and conductor losses in the material. It represents the ratio of the imaginary part of the complex permittivity ($\epsilon''$) to the real part ($\epsilon'$), i.e., $\tan \delta = \epsilon'' / \epsilon'$. It also relates to the ratio of conductivity to the imaginary part of permittivity.
    *   **Impact on Antenna Design**:
        *   **Efficiency**: Lower loss tangent is crucial for high-efficiency antennas, as losses manifest as heat and reduce the power radiated.
        *   **Gain**: High losses lead to lower antenna gain.
        *   **Bandwidth**: Lossy substrates can contribute to lower bandwidth if the losses are significant compared to the radiation loss.
    *   **Target Value**: For most RF applications, $\tan \delta$ should be less than 0.005, preferably below 0.001 for optimal performance.

*   **Substrate Thickness ($h$)**:
    *   **Definition**: The physical thickness of the dielectric material.
    *   **Impact on Antenna Design**:
        *   **Bandwidth**: Thicker substrates generally lead to wider bandwidths due to increased fringing fields and reduced surface wave excitation.
        *   **Radiation Efficiency**: Thicker substrates can improve radiation efficiency by reducing the excitation of surface waves and increasing the radiation from the radiating slots.
        *   **Mutual Coupling**: Can influence coupling between adjacent elements in an array.
        *   **Mechanical Stability**: Thicker substrates are mechanically more robust.
        *   **Dominant Mode**: The ratio $h/\lambda_0$ is important. As this ratio increases, spurious modes can be excited, degrading performance.
    *   **Trade-off**: There's a trade-off between bandwidth and other factors like surface wave propagation.

*   **Thermal Conductivity**:
    *   **Definition**: The ability of the material to conduct heat.
    *   **Impact on Antenna Design**:
        *   **High Power Handling**: Important for high-power applications where heat dissipation is critical.
        *   **Operating Environment**: Relevant for antennas operating in environments with significant temperature variations.

*   **Mechanical Strength and Stability**:
    *   **Definition**: The ability of the substrate to withstand mechanical stress and maintain its shape and dimensions under environmental changes (temperature, humidity).
    *   **Impact on Antenna Design**:
        *   **Durability**: Crucial for antennas in mobile or outdoor environments.
        *   **Dimensional Stability**: Changes in substrate dimensions due to temperature can cause frequency drift.

**Learning Outcome Addressed:** CO1, CO2 (Design and measure the parameters of a microstrip antenna) by understanding how substrate properties affect design parameters.

**Textbook References:**
*   **Garg (2001)**: Chapter 2 and subsequent chapters on microstrip antennas will detail these properties and their impact.
*   **Balanis (4th Ed.)**: Chapter 13 will explain how these properties affect the resonant frequency and radiation characteristics.
*   **Pozar (4th Ed.)**: Chapter 11 provides detailed mathematical treatments of how $\epsilon_r$ and $h$ influence characteristic impedance and propagation constants.
*   **Raju (2009)**: Chapter 4 (Microstrip Antennas) will likely provide a good overview of substrate selection criteria.

---

### 3. Common Substrate Materials and Their Characteristics

Different applications necessitate different substrate materials. Here are some commonly used ones:

**3.1. RT/duroid® (Rogers Corporation)**

*   **Description**: A family of high-performance, non-woven glass fiber-reinforced PTFE (Polytetrafluoroethylene) substrates.
*   **Properties**:
    *   **$\epsilon_r$**: Available in a wide range, typically from 2.2 to 10.4 (e.g., RT/duroid 5870 with $\epsilon_r = 2.33$, RT/duroid 6002 with $\epsilon_r = 2.94$, RT/duroid 6010.2LM with $\epsilon_r = 10.2$).
    *   **$\tan \delta$**: Very low, typically 0.0009 to 0.0019, making them excellent for high-frequency and high-efficiency applications.
    *   **Thickness ($h$)**: Available in a broad range, allowing for bandwidth control.
    *   **Mechanical**: Good mechanical strength and dimensional stability.
    *   **Cost**: Relatively expensive.
*   **Applications**: High-frequency circuits, phased arrays, satellite communications, aerospace, defense.

**3.2. FR-4 (Flame Retardant 4)**

*   **Description**: A glass-reinforced epoxy laminate material. It is the most common and cheapest substrate used in printed circuit boards (PCBs).
*   **Properties**:
    *   **$\epsilon_r$**: Typically around 4.4 to 4.8.
    *   **$\tan \delta$**: Relatively high, around 0.018 to 0.025, especially at higher frequencies. This leads to significant losses.
    *   **Thickness ($h$)**: Standard thicknesses like 1.6 mm are common.
    *   **Mechanical**: Good mechanical strength but can be susceptible to moisture absorption, affecting electrical properties and dimensional stability.
    *   **Cost**: Very low.
*   **Applications**: Low-cost commercial applications, general-purpose PCBs, lower frequency amateur radio projects. Not ideal for high-performance or high-frequency antennas where efficiency and bandwidth are critical.

**3.3. Porcelain / Alumina (Ceramics)**

*   **Description**: Inorganic ceramic materials.
*   **Properties**:
    *   **$\epsilon_r$**: High, typically ranging from 9 to 25 (e.g., Alumina 99.5% has $\epsilon_r \approx 9.8$).
    *   **$\tan \delta$**: Very low at microwave frequencies (e.g., $\approx$ 0.0001 for pure Alumina).
    *   **Thickness ($h$)**: Can be manufactured to precise thicknesses.
    *   **Mechanical**: Very rigid, excellent thermal conductivity, and good dimensional stability. Can be brittle.
    *   **Cost**: Moderate to high.
*   **Applications**: High-frequency and high-power applications, millimeter-wave antennas, applications requiring good thermal management. High $\epsilon_r$ allows for miniaturization.

**3.4. PTFE with Various Fillers (e.g., Arlon®, Taconic®)**

*   **Description**: Similar to RT/duroid®, these are PTFE-based composites with various fillers (e.g., glass microballoons, ceramic particles) to tailor properties.
*   **Properties**:
    *   **$\epsilon_r$**: Wide range available by adjusting filler content.
    *   **$\tan \delta$**: Generally low.
    *   **Mechanical**: Varies depending on the filler.
*   **Applications**: Broad range of RF and microwave applications, including wireless communications, radar, and instrumentation.

**3.5. Flexible Substrates (e.g., Polyimide)**

*   **Description**: Thin, flexible dielectric films.
*   **Properties**:
    *   **$\epsilon_r$**: Typically around 3.4 to 4.
    *   **$\tan \delta$**: Can be low to moderate.
    *   **Mechanical**: Highly flexible, allowing for conformal antennas.
*   **Applications**: Wearable antennas, conformal antennas on curved surfaces, flexible electronics.

**3.6. Metamaterials and Specialized Dielectrics**

*   **Description**: Engineered materials with electromagnetic properties not found in nature. Can include structured dielectrics or inclusion of metamaterial unit cells within the substrate.
*   **Properties**: Can exhibit negative permittivity, permeability, or permittivity/permeability. Can be designed to manipulate wave propagation for unique antenna characteristics (e.g., size reduction, bandwidth enhancement, directivity control).
*   **Impact on Antenna Design**: Allows for radical departures from conventional antenna designs, enabling miniaturization, achieving higher efficiencies with small antennas, and creating novel radiation patterns.
*   **Learning Outcome Addressed**: CO3 (Analyse and design advanced antennas) by incorporating metamaterial concepts.

**Textbook References:**
*   **Garg (2001)**: Chapter 2 and potentially appendices will list various substrate types.
*   **Balanis (4th Ed.)**: May refer to common substrate types in examples.
*   **Singh, Abegaonkar, Koul (2nd Ed.)**: This textbook is specifically dedicated to metamaterials for antenna applications and will provide extensive details on their use and impact on substrate properties.

**Important Point to Remember**: The selection of a substrate is a trade-off between electrical performance (loss, bandwidth), physical characteristics (size, flexibility), mechanical properties, and cost.

---

### 4. Substrate Effects on Antenna Performance Parameters

Let's examine how the substrate properties directly influence specific antenna performance metrics.

*   **Resonant Frequency ($f_r$)**:
    *   The resonant frequency of a microstrip antenna is inversely proportional to the square root of the effective dielectric constant ($\epsilon_{eff}$).
    *   $\epsilon_{eff}$ is a weighted average of $\epsilon_r$ and the free-space permittivity, and it is always between 1 and $\epsilon_r$.
    *   $\epsilon_{eff} = \epsilon_r \left(1 + \frac{h}{W}\right) \frac{1}{1 + 12 \frac{h}{W} \left(1 - \frac{h}{W}\right)}$ (approximate formula for a microstrip line, used to understand $\epsilon_{eff}$). More accurate formulas exist for patches.
    *   **Impact**: Higher $\epsilon_r$ and larger $h/W$ ratios lead to higher $\epsilon_{eff}$, thus lowering the resonant frequency. For a fixed patch dimension, a higher $\epsilon_r$ substrate will result in a lower resonant frequency.
    *   **Design Implication**: To design a smaller antenna for a given frequency, a substrate with a higher $\epsilon_r$ is chosen.

*   **Bandwidth (BW)**:
    *   Bandwidth is typically defined as the frequency range over which the Voltage Standing Wave Ratio (VSWR) is below a specified limit (e.g., VSWR ≤ 2).
    *   **$\epsilon_r$ Impact**: Lower $\epsilon_r$ substrates generally provide wider bandwidths. This is because the fringing fields are less confined to the dielectric and extend more into the air, allowing for more radiation.
    *   **$h$ Impact**: Thicker substrates ($h$) generally lead to wider bandwidths. This is due to increased fringing fields and reduced surface wave excitation.
    *   **$\tan \delta$ Impact**: High dielectric losses ($\tan \delta$) can significantly reduce the operational bandwidth, as the antenna efficiency drops rapidly with frequency.
    *   **Trade-off**: While thicker substrates and lower $\epsilon_r$ increase bandwidth, they can also lead to increased surface wave excitation and reduced radiation efficiency, especially for larger antennas.

*   **Radiation Efficiency ($\eta$)**:
    *   **Definition**: The ratio of power radiated to the net power accepted by the antenna. $\eta = \frac{P_{rad}}{P_{accepted}} = \frac{P_{rad}}{P_{rad} + P_{loss}}$.
    *   **Loss Mechanisms**:
        *   **Conductor Losses**: Due to finite conductivity of the radiating patch and ground plane.
        *   **Dielectric Losses**: Due to the finite conductivity and loss tangent of the substrate.
        *   **Surface Wave Losses**: Electromagnetic energy propagating along the dielectric interface between the substrate and air. These are particularly problematic for thick substrates with high $\epsilon_r$.
    *   **Substrate Impact**:
        *   **$\tan \delta$**: Directly proportional to dielectric losses. Lower $\tan \delta$ is essential for high efficiency.
        *   **$\epsilon_r$ and $h$**: High $\epsilon_r$ and thicker substrates ($h/\lambda_0 > 0.05-0.1$) increase the likelihood and strength of surface waves, which carry energy away from the radiating aperture and can couple to unintended modes or become trapped, reducing radiation efficiency.
        *   **Conductor Losses**: While not directly a substrate property, the surface roughness of the conductor on the substrate can impact conductor losses.

*   **Radiation Pattern**:
    *   The substrate indirectly affects the radiation pattern by influencing the field distribution at the radiating aperture and the excitation of surface waves.
    *   **Surface Waves**: When surface waves are strongly excited, they can interfere with the direct radiation, potentially distorting the radiation pattern, reducing directivity, and causing sidelobes.
    *   **Thickness and $\epsilon_r$**: For thicker substrates with higher $\epsilon_r$, surface wave excitation is more pronounced, potentially leading to broader beams and reduced directivity.

*   **Polarization**:
    *   The substrate can influence polarization purity, especially for dual-polarized antennas.
    *   **$\epsilon_r$ and $h$**: Asymmetric fringing fields due to substrate thickness and dielectric constant can lead to cross-polarization. Proper design and substrate selection can minimize this.

**Learning Outcome Addressed:** CO1, CO2, CO3 (design advanced antennas) by understanding how substrate properties are manipulated to achieve desired performance.

**Textbook References:**
*   **Balanis (4th Ed.)**: Chapter 13 will detail these relationships mathematically and with examples.
*   **Garg (2001)**: Chapters 2 and 3 will provide formulas for effective dielectric constant and discuss bandwidth, efficiency, and surface waves.
*   **Pozar (4th Ed.)**: Chapter 11 and 13 offer rigorous analysis of these effects.
*   **Raju (2009)**: Chapter 4 provides practical insights into how substrate choices impact antenna design.

---

### 5. Design Considerations for Substrates

When choosing and working with substrates, engineers must consider:

*   **Frequency of Operation**: Lower frequency applications might tolerate lossier substrates (like FR-4) for cost savings, while millimeter-wave applications demand low-loss, stable materials.
*   **Bandwidth Requirements**: For wideband antennas, lower $\epsilon_r$ and thicker substrates are preferred, but trade-offs with efficiency and surface waves must be managed.
*   **Power Handling**: High-power applications require substrates with good thermal conductivity and low dielectric losses.
*   **Environmental Conditions**: Humidity and temperature variations can affect substrate properties. Materials with low moisture absorption and good thermal stability are preferred for outdoor or harsh environments.
*   **Manufacturing Tolerances**: The consistency of dielectric constant and thickness from the manufacturer is crucial for repeatable antenna performance.
*   **Cost**: FR-4 is cheap but has poor RF performance. Rogers® materials are excellent but expensive. The application's budget dictates the choice.
*   **Mechanical Constraints**: For wearable or conformal antennas, flexible substrates are necessary. For structural antennas, rigid substrates are required.

**Example Scenario**:
Consider designing a $5.5$ GHz Wi-Fi antenna for a portable device.
*   **Requirement**: Moderate bandwidth, good efficiency, low cost, and reasonable size.
*   **Substrate Choice**: FR-4 ($\epsilon_r \approx 4.4$, $\tan \delta \approx 0.02$) might be considered for cost reasons, but the higher loss will limit bandwidth and efficiency. A substrate like RT/duroid 5880 ($\epsilon_r = 2.2$, $\tan \delta = 0.0009$) would offer significantly better performance (wider bandwidth, higher efficiency) but at a higher cost. A compromise might be a mid-range material if available and cost-effective. The thickness would be chosen to balance bandwidth and surface wave effects.

**Learning Outcome Addressed:** CO2, CO3, CO1 (design and analyze based on substrate choices).

**Textbook References:**
*   **Garg (2001)**: Chapter 2 (Microstrip Lines) and Chapter 3 (Microstrip Antennas) offer detailed design procedures and considerations.
*   **Milligan (2005)**: Chapter 5 (Microstrip Antennas) might provide practical design guidelines.
*   **Pozar (4th Ed.)**: Chapter 11 discusses the practical aspects of designing with microstrip lines and patches.

---

### 6. Practice Questions and Answers

**Question 1:**
Which dielectric property has the most significant impact on reducing the physical size of a microstrip antenna for a given resonant frequency?
(a) Loss Tangent ($\tan \delta$)
(b) Dielectric Constant ($\epsilon_r$)
(c) Substrate Thickness ($h$)
(d) Thermal Conductivity

**Answer 1:**
(b) Dielectric Constant ($\epsilon_r$). A higher dielectric constant reduces the wavelength within the dielectric material ($\lambda_d = \lambda_0 / \sqrt{\epsilon_r}$), allowing for a smaller antenna size to achieve resonance.

**Question 2:**
For a wideband microstrip antenna application, which combination of substrate properties would generally be preferred?
(a) High $\epsilon_r$, Low $h$, Low $\tan \delta$
(b) Low $\epsilon_r$, High $h$, Low $\tan \delta$
(c) High $\epsilon_r$, High $h$, High $\tan \delta$
(d) Low $\epsilon_r$, Low $h$, High $\tan \delta$

**Answer 2:**
(b) Low $\epsilon_r$, High $h$, Low $\tan \delta$. Low $\epsilon_r$ and higher thickness ($h$) generally promote wider bandwidths. A low loss tangent ($\tan \delta$) is crucial for maintaining efficiency and good VSWR over a wider frequency range.

**Question 3:**
Explain why surface waves can be a problem for microstrip antennas, particularly on certain substrates.
**(Answer):**
Surface waves are electromagnetic waves that propagate along the interface between the dielectric substrate and the surrounding air. They are essentially guided waves. When surface waves are excited on a microstrip antenna, they:
1.  **Reduce Radiation Efficiency**: Energy is channeled away from the radiating aperture as surface waves, leading to lower antenna gain and efficiency.
2.  **Distort Radiation Pattern**: The presence of surface waves can lead to undesired radiation from the substrate edges or interfere with the main radiation, causing pattern degradation, reduced directivity, and increased sidelobes.
3.  **Cause Mutual Coupling**: In arrays, surface waves can couple energy between adjacent elements, leading to unwanted mutual coupling, which can detune the array and affect its performance.
Surface waves are more strongly excited on substrates with **high dielectric constants ($\epsilon_r$)** and **larger thicknesses ($h$)**, especially when the ratio $h/\lambda_0$ becomes significant. Therefore, for optimal performance, especially at higher frequencies or when high efficiency is required, substrates with lower $\epsilon_r$ and thinner profiles are generally preferred, or techniques to suppress surface waves must be employed.

**Question 4:**
You need to design a low-cost antenna for a low-frequency IoT device operating at 900 MHz. Which substrate would you most likely choose, and why? What are the potential drawbacks?
**(Answer):**
**Most Likely Choice**: FR-4.
**Reasoning**: FR-4 is chosen primarily due to its **low cost** and **widespread availability**. For lower frequencies (like 900 MHz), the performance limitations of FR-4 (higher loss tangent, moderate dielectric constant) are less critical compared to higher frequency applications. The slightly higher loss will reduce efficiency, but this might be acceptable for a low-power IoT device. The moderate dielectric constant means the antenna size will be moderate.
**Potential Drawbacks**:
1.  **Limited Bandwidth**: The loss tangent of FR-4 can limit the achievable bandwidth.
2.  **Lower Efficiency**: Dielectric losses will reduce the overall antenna efficiency, meaning more input power is converted to heat than radiated.
3.  **Moisture Absorption**: FR-4 can absorb moisture, which can alter its dielectric constant and loss tangent, leading to performance drift, especially in humid environments.
4.  **Mechanical Stability**: Can be less dimensionally stable than higher-performance substrates under varying temperatures.

**Learning Outcome Addressed:** All questions test understanding of concepts related to CO1 and CO2. Question 3 and 4 also touch upon CO3 by asking about design implications.

---

### 7. Summary and Key Takeaways

*   **Substrate's Central Role**: The dielectric substrate is fundamental to microstrip antenna design, influencing everything from size to bandwidth and efficiency.
*   **Key Properties**: Dielectric Constant ($\epsilon_r$), Loss Tangent ($\tan \delta$), and Thickness ($h$) are the primary electrical parameters of interest.
*   **Impact of $\epsilon_r$**: Higher $\epsilon_r$ reduces antenna size but can increase surface wave excitation and reduce bandwidth.
*   **Impact of $\tan \delta$**: Lower $\tan \delta$ is crucial for high efficiency and good gain, especially at higher frequencies. FR-4 has high loss; Rogers® materials and ceramics have low loss.
*   **Impact of $h$**: Thicker substrates increase bandwidth and radiation efficiency but also exacerbate surface wave effects and can lead to spurious mode excitation.
*   **Material Selection**: A trade-off exists between performance (low loss, wide bandwidth), mechanical properties (stability, flexibility), and cost. RT/duroid® and similar PTFE composites are standard for high-performance RF applications, while FR-4 is used for cost-sensitive, lower-performance needs. Ceramics offer rigidity and thermal stability. Metamaterials offer novel solutions for miniaturization and performance enhancement.
*   **Surface Waves**: A significant design challenge, particularly for thick, high-$\epsilon_r$ substrates, leading to reduced efficiency and pattern distortion.

**Learning Outcome Addressed**: This summary reinforces learning for CO1, CO2, and CO3.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
