---
title: "Efficiency"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff76f"
status: "completed"
scrapedAt: "2026-05-23T18:12:29.042Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Efficiency

---

### 1. Introduction to Antenna Efficiency

Antenna efficiency is a critical parameter that quantifies how effectively an antenna converts input power into radiated power. In the context of microstrip antennas, understanding and maximizing efficiency is crucial for achieving good overall antenna performance, especially in miniaturized and portable electronic devices.

**Definition:** Antenna efficiency ($\eta_a$) is defined as the ratio of the power radiated by the antenna ($P_{rad}$) to the net power accepted by the antenna at its terminals ($P_{in}$).

$$ \eta_a = \frac{P_{rad}}{P_{in}} $$

**Key Concept:** A perfectly efficient antenna would radiate all the power delivered to it. In reality, some power is lost due to various dissipative mechanisms within the antenna structure.

---

### 2. Components of Antenna Efficiency

Antenna efficiency can be broken down into two main components:

*   **Radiation Efficiency ($\eta_r$):** This represents the ratio of power radiated by the antenna to the power delivered to the antenna terminals after accounting for conductor losses.

    $$ \eta_r = \frac{P_{rad}}{P_{in} - P_{loss}} $$
    where $P_{loss}$ is the power lost due to conductor resistance.

*   **Efficiency due to Mismatch ($ \eta_m $):** This is related to the power delivered to the antenna terminals that is reflected back to the source due to impedance mismatch.

    $$ \eta_m = \frac{P_{in} - P_{reflected}}{P_{in}} = 1 - |\Gamma|^2 $$
    where $\Gamma$ is the reflection coefficient at the antenna terminals.

**Total Antenna Efficiency:** The overall efficiency of an antenna is the product of these two efficiencies:

$$ \eta_a = \eta_r \times \eta_m $$

**Alternatively, using Terminal Efficiency and Radiation Efficiency:**

$$ \eta_a = \frac{P_{rad}}{P_{in}} = \frac{P_{rad}}{P_{in} - P_{reflected} - P_{loss}} \times \frac{P_{in} - P_{reflected}}{P_{in}} $$

Let $P_{in}$ be the power delivered to the antenna terminals.
Let $P_{reflected}$ be the power reflected back from the antenna terminals.
Let $P_{loss}$ be the power lost due to ohmic losses and dielectric losses.
Let $P_{rad}$ be the power radiated by the antenna.

The power delivered to the antenna for radiation is $P_{in} - P_{reflected} - P_{loss}$.
The total input power is $P_{in}$.

**The relationship between these parameters is:**

$$ P_{in} = P_{reflected} + P_{loss} + P_{rad} $$

**Antenna Efficiency ($\eta_a$):**
$$ \eta_a = \frac{P_{rad}}{P_{in}} $$

**Terminal Efficiency ($\eta_t$):** This is the ratio of power delivered to the antenna terminals to the incident power from the source.
$$ \eta_t = \frac{P_{in} - P_{reflected}}{P_{in}} = 1 - |\Gamma|^2 $$

**Radiation Efficiency ($\eta_r$):** This is the ratio of power radiated to the power accepted by the antenna terminals after considering reflections.
$$ \eta_r = \frac{P_{rad}}{P_{in} - P_{reflected}} $$

Combining these, we get:
$$ \eta_a = \eta_t \times \eta_r = \frac{P_{in} - P_{reflected}}{P_{in}} \times \frac{P_{rad}}{P_{in} - P_{reflected}} = \frac{P_{rad}}{P_{in}} $$

This confirms that the total efficiency is the product of terminal efficiency and radiation efficiency.

---

### 3. Losses in Microstrip Antennas

Microstrip antennas, due to their planar structure and the presence of dielectric substrates, are susceptible to several loss mechanisms that significantly impact their efficiency.

#### 3.1. Conductor Losses (Ohmic Losses)

These losses arise from the finite conductivity of the metallic conductors (patch and ground plane) used in the microstrip antenna. As current flows through these conductors, it encounters resistance, leading to power dissipation in the form of heat.

*   **Mechanism:** Current crowding near the edges of the conductors due to the skin effect at microwave frequencies.
*   **Factors affecting Conductor Loss:**
    *   **Conductivity of the conductor material:** Higher conductivity (e.g., copper, silver) leads to lower losses.
    *   **Thickness of the conductor:** Thicker conductors reduce ohmic losses.
    *   **Frequency of operation:** Conductor losses increase with frequency as the skin depth decreases.
    *   **Geometry of the patch and ground plane:** The shape and dimensions influence current distribution.
*   **Modeling:** Often modeled by adding a series resistance to the transmission line equivalent circuit of the microstrip line. Balanis (4th Ed.) discusses skin effect and conductor losses in detail.

#### 3.2. Dielectric Losses

These losses occur within the dielectric substrate material that separates the radiating patch from the ground plane. The dielectric material is not a perfect insulator; it exhibits a small amount of conductivity and polarization losses.

*   **Mechanism:**
    *   **Ohmic conductivity of the dielectric:** The dielectric material has a finite conductivity, allowing a small leakage current to flow through it, dissipating power.
    *   **Dielectric polarization losses:** At high frequencies, the electric field causes molecular dipoles within the dielectric to oscillate. This oscillating motion leads to friction and energy dissipation.
*   **Factors affecting Dielectric Loss:**
    *   **Dielectric loss tangent ($\tan \delta$):** A measure of the dielectric material's ability to dissipate energy. Lower $\tan \delta$ is desirable.
    *   **Permittivity of the dielectric ($\epsilon_r$):** While not directly a loss factor, higher permittivity can lead to increased current density and thus higher ohmic losses in the dielectric if its conductivity is not negligible.
    *   **Thickness of the substrate:** Thicker substrates generally lead to higher dielectric losses, especially if the field extends further into the dielectric.
*   **Modeling:** Modeled by incorporating a parallel conductance across the dielectric layer in the equivalent circuit. Garg (2001) provides detailed analysis of dielectric losses in microstrip antennas.

#### 3.3. Surface Wave Losses

Surface waves are non-radiating electromagnetic waves that propagate along the dielectric-air interface or along the dielectric-ground plane interface. These waves carry energy away from the radiating element, reducing the radiated power and efficiency.

*   **Mechanism:** Occurs when the dielectric substrate thickness and permittivity are sufficiently large, allowing certain modes to propagate as surface waves. These modes do not radiate into free space but are confined to the substrate.
*   **Factors affecting Surface Wave Loss:**
    *   **Dielectric substrate thickness ($h$):** Thicker substrates are more prone to surface wave excitation.
    *   **Relative permittivity of the substrate ($\epsilon_r$):** Higher permittivity substrates also increase the likelihood of surface wave propagation.
    *   **Frequency of operation:** The propagation of surface waves is frequency-dependent.
*   **Mitigation:** Using thinner substrates with lower dielectric constants is a common method to minimize surface wave losses. Garg (2001) and Balanis (4th Ed.) discuss methods to suppress surface waves.

#### 3.4. Spurious Radiation / Off-Radiation Losses

In microstrip antennas, fields can fringe from the edges of the radiating patch and the slots, leading to radiation in unwanted directions or polarization. This can also include radiation from feed lines.

*   **Mechanism:** The fringing fields from the edges of the patch and slots are not perfectly contained and can radiate into space. Energy radiated in directions other than the intended main lobe contributes to reduced directivity and efficiency.
*   **Factors affecting Spurious Radiation:**
    *   **Aspect ratio of the patch:** Long and narrow patches are more prone to spurious radiation.
    *   **Edge conditions and substrate thickness:**
*   **Mitigation:** Careful design of the patch geometry and judicious choice of substrate parameters can minimize these losses.

#### 3.5. Feed Line Radiation

The feed line (e.g., microstrip line) connecting the source to the radiating patch can also radiate electromagnetic energy. If this radiation is in a direction that doesn't contribute to the main beam, it represents a loss of efficiency.

*   **Mechanism:** The microstrip feed line itself can act as a parasitic antenna.
*   **Mitigation:** Proper shielding of the feed line, using techniques like quarter-wave transformers or shorting pins, can suppress feed line radiation.

---

### 4. Maximizing Microstrip Antenna Efficiency

Several design considerations and techniques can be employed to enhance the efficiency of microstrip antennas.

#### 4.1. Material Selection

*   **Low Dielectric Loss Tangent ($\tan \delta$):** Choosing substrates with very low dielectric loss tangents (e.g., RT/duroid, Rogers materials) is crucial. High-loss dielectrics like ceramics, while offering thinness, can severely degrade efficiency.
*   **Low Permittivity ($\epsilon_r$):** Substrates with lower relative permittivity (e.g., $\epsilon_r < 3$) generally exhibit lower surface wave excitation and can contribute to higher radiation efficiency.

#### 4.2. Substrate Thickness ($h$)

*   **Optimizing Thickness:** A thicker substrate can reduce conductor losses by increasing the effective aperture and reducing current density. However, it also increases the potential for surface wave excitation and dielectric losses. An optimal thickness needs to be chosen based on the operating frequency, dielectric constant, and desired efficiency.
*   **Minimizing Surface Waves:** For higher frequencies and higher dielectric constant substrates, thinner substrates are preferred to suppress surface wave propagation.

#### 4.3. Conductor Properties

*   **High Conductivity Materials:** Using conductors with high conductivity (e.g., copper, silver plating) minimizes ohmic losses.
*   **Thicker Metal Layers:** Employing thicker metallization layers reduces the effective resistance of the conductors.

#### 4.4. Antenna Geometry and Dimensions

*   **Aspect Ratio:** For rectangular patches, an aspect ratio closer to unity (square patch) generally leads to better efficiency compared to very elongated patches.
*   **Patch Thickness:** While the patch is typically thin, its thickness can influence current distribution and thus conductor losses.

#### 4.5. Feed Network Design

*   **Efficient Feeding Techniques:** Using efficient feeding techniques like microstrip line feed, aperture coupling, or proximity coupling can minimize losses associated with the feed.
*   **Impedance Matching:** Ensuring good impedance matching between the feed line and the radiating element (using matching networks, quarter-wave transformers, etc.) minimizes reflection losses and maximizes the power delivered to the antenna.

#### 4.6. Suppression of Surface Waves

*   **Use of Parasitic Elements/Slots:** Incorporating slots in the ground plane beneath the patch or using parasitic elements can help suppress surface waves by disrupting their propagation paths.
*   **Modified Ground Plane:** Techniques like using a thicker substrate with a low-permittivity dielectric and a specific ground plane aperture can be used to mitigate surface waves.

---

### 5. Examples and Illustrations

**Example 1: Effect of Dielectric Loss Tangent**

Consider two identical microstrip patch antennas operating at the same frequency.
*   Antenna A uses a substrate with $\tan \delta = 0.001$.
*   Antenna B uses a substrate with $\tan \delta = 0.02$.

Antenna A, with its lower dielectric loss tangent, will exhibit significantly higher radiation efficiency compared to Antenna B, as less power will be dissipated within the dielectric material.

**Example 2: Surface Wave Mitigation**

A common technique to suppress surface waves in a microstrip patch antenna printed on a thick, high-permittivity substrate is to etch a slot in the ground plane directly underneath the radiating patch. This slot acts as a barrier to the surface waves, scattering them and preventing them from propagating efficiently along the substrate-air interface.

**Example 3: Impedance Matching for Terminal Efficiency**

A microstrip patch antenna might have a feed point impedance of $Z_{ant} = 50 - j50 \Omega$. If it is fed by a $50 \Omega$ transmission line without any matching network, the reflection coefficient would be significant, leading to low terminal efficiency. A matching network (e.g., a quarter-wave transformer or an L-section matching circuit) is designed to transform the $50 \Omega$ line impedance to match the antenna's impedance, thereby minimizing reflections and improving terminal efficiency.

---

### 6. Practice Questions and Exercises

**Question 1:** Define antenna efficiency. What are the main components of antenna efficiency, and how do they relate to each other?

**Answer 1:** Antenna efficiency ($\eta_a$) is the ratio of power radiated ($P_{rad}$) to the net power accepted at the terminals ($P_{in}$). It is comprised of terminal efficiency ($\eta_t$) and radiation efficiency ($\eta_r$), where $\eta_a = \eta_t \times \eta_r$. Terminal efficiency accounts for power reflected due to impedance mismatch, while radiation efficiency accounts for power dissipated as losses within the antenna (conductor, dielectric, etc.).

**Question 2:** List and briefly explain the primary loss mechanisms that affect the efficiency of a microstrip antenna.

**Answer 2:** The primary loss mechanisms are:
1.  **Conductor Losses:** Dissipation of power in the metallic conductors due to their finite conductivity and skin effect.
2.  **Dielectric Losses:** Power dissipation within the dielectric substrate due to its finite conductivity and polarization effects, quantified by the loss tangent ($\tan \delta$).
3.  **Surface Wave Losses:** Energy carried away by non-radiating surface waves propagating along the dielectric-air interface, especially prevalent in thick, high-permittivity substrates.
4.  **Spurious Radiation/Off-Radiation:** Radiation in unwanted directions due to fringing fields.
5.  **Feed Line Radiation:** Radiation from the feed line itself.

**Question 3:** What material properties of the dielectric substrate are most critical for achieving high efficiency in a microstrip antenna?

**Answer 3:** The most critical material properties are:
1.  **Low Dielectric Loss Tangent ($\tan \delta$):** Minimizes dielectric dissipation.
2.  **Low Relative Permittivity ($\epsilon_r$):** Helps suppress surface wave excitation.

**Question 4:** If an antenna accepts 10W of power, radiates 7W, and has 1W lost due to conductor and dielectric losses, calculate its total antenna efficiency. Assume no reflection losses.

**Answer 4:**
*   $P_{in} = 10$ W
*   $P_{rad} = 7$ W
*   $P_{loss} = 1$ W
*   $P_{reflected} = 0$ W (since no reflection losses)

The power delivered to the antenna terminals is $P_{in} = 10$ W.
The power lost at the terminals is $P_{reflected} = 0$ W.
The power dissipated within the antenna is $P_{loss} = 1$ W.
The power radiated is $P_{rad} = 7$ W.

Check consistency: $P_{in} = P_{reflected} + P_{loss} + P_{rad}$
$10 = 0 + 1 + 7$  -> This implies $P_{in}$ is actually the power available *after* reflection from the source, or there's a misunderstanding of the provided values.

Let's re-interpret the question to mean:
Input power from the source to the antenna is $P_{source\_in}$.
Power delivered to antenna terminals is $P_{in}$.
Power radiated is $P_{rad} = 7$ W.
Power lost is $P_{loss} = 1$ W.
Assume the 10W is the power *delivered* to the antenna terminals.

If $P_{in}$ (power delivered to terminals) = 10 W:
Then $P_{rad} = 7$ W and $P_{loss} = 1$ W.
This implies $P_{in} = P_{rad} + P_{loss}$.
So, $10 = 7 + 1 + P_{reflected}$. This gives $P_{reflected} = 2$ W.

Let's assume the question means: Power *available* at the antenna terminals from the source is 10W.
If 1W is lost due to conductor and dielectric losses ($P_{loss} = 1$ W) and 7W is radiated ($P_{rad} = 7$ W), and we assume no reflection loss for now to simplify:
Then the power accepted by the antenna terminals is $P_{in} = P_{rad} + P_{loss} = 7 + 1 = 8$ W.
The power available from the source was 10W.
So, $P_{reflected} = 10 - 8 = 2$ W.

Total Antenna Efficiency:
$\eta_a = \frac{P_{rad}}{P_{source\_in}} = \frac{7 \text{ W}}{10 \text{ W}} = 0.7$ or 70%.

**Using the components:**
Terminal Efficiency ($\eta_t$): $P_{in} = P_{source\_in} - P_{reflected} = 10 - 2 = 8$ W.
$\eta_t = \frac{P_{in}}{P_{source\_in}} = \frac{8}{10} = 0.8$.
Radiation Efficiency ($\eta_r$): $\eta_r = \frac{P_{rad}}{P_{in}} = \frac{7}{8} = 0.875$.
Total Efficiency: $\eta_a = \eta_t \times \eta_r = 0.8 \times 0.875 = 0.7$ or 70%.

**Question 5:** How can the use of a thicker substrate with a lower dielectric constant improve the efficiency of a microstrip antenna?

**Answer 5:** A thicker substrate can reduce conductor losses by spreading the current over a larger area, effectively decreasing the current density. A lower dielectric constant is beneficial because it reduces the excitation of surface waves, which carry energy away from the antenna without radiating it into space. By mitigating both conductor losses (to some extent) and surface wave losses, the overall radiation efficiency can be improved. However, an excessively thick substrate can increase dielectric losses and excitation of higher-order modes.

---

### 7. Important Points to Remember

*   **Efficiency is key:** High efficiency is crucial for battery-powered and compact devices.
*   **Losses are unavoidable:** Microstrip antennas inherently have higher losses than some other antenna types due to their planar structure.
*   **Trade-offs exist:** Designing for high efficiency often involves trade-offs with other parameters like bandwidth, size, and fabrication cost.
*   **Material selection is critical:** Low $\tan \delta$ and moderate to low $\epsilon_r$ are essential for good efficiency.
*   **Surface waves are a major concern:** Especially for substrates with $\epsilon_r > 3$ and at higher frequencies.
*   **Impedance matching is vital for terminal efficiency:** Minimizing reflections ensures maximum power transfer.
*   **Conductor losses are frequency-dependent:** They increase with frequency due to the skin effect.

---

### 8. Alignment with Course Outcomes

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3)**
    This topic delves into the mechanisms of power loss (conductor, dielectric, surface waves) that affect the proportion of power radiated, directly relating to the analysis of the radiation mechanism and its imperfections.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    Understanding efficiency is paramount for the design phase (CO2). Knowledge of loss mechanisms informs material selection, substrate thickness, and geometry choices. Measurements of radiated power, input power, and reflection coefficient are necessary to determine efficiency.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4)**
    The principles discussed for improving efficiency in basic microstrip antennas are foundational for designing more complex and advanced antennas (e.g., arrays, reconfigurable antennas) where efficiency is often even more critical.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    While this topic focuses on antenna efficiency, surface wave propagation is a specific mode discussed that directly impacts antenna performance and is a form of non-radiating wave propagation related to the antenna environment.

---
**(End of Notes)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
