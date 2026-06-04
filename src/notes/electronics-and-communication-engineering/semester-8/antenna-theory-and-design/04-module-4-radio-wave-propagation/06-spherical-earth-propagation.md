---
title: "Spherical earth propagation"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f5"
status: "completed"
scrapedAt: "2026-05-23T18:12:10.620Z"
---
# ANTENNA THEORY AND DESIGN: Module 4: Radio Wave Propagation

## Topic: Spherical Earth Propagation

### 1. Introduction to Spherical Earth Propagation

This topic delves into how radio waves propagate over the curved surface of the Earth, considering its spherical geometry. This is crucial for understanding long-distance communication systems where the Earth's curvature significantly affects signal strength and coverage.

**Key Concepts:**

*   **Earth's Curvature:** The Earth is not flat; its spherical shape necessitates specific models for predicting radio wave propagation.
*   **Line of Sight (LOS):** The direct path between a transmitting and receiving antenna, unobstructed by the Earth's surface.
*   **Horizon:** The apparent line where the sky meets the Earth's surface. The distance to the horizon is dependent on antenna height and Earth's curvature.
*   **Effective Earth Radius:** A concept used to simplify the analysis of propagation over a curved Earth by transforming the problem into propagation over a flat Earth with modified parameters.

**Learning Outcomes Covered:**

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** - This topic directly addresses how propagation is affected by the Earth's shape, a key parameter in wave propagation.

**References:**

*   **Balanis (4th Ed.):** Chapter 14, "Propagation Predictions – The Earth and Its Atmosphere," discusses ground wave propagation and factors affecting it.
*   **Collin (2nd Ed.):** Chapter 13, "Terrestrial Propagation," covers surface wave propagation and the effects of Earth's curvature.
*   **Raju (1st Ed.):** Chapter 9, "Tropospheric Propagation," likely includes sections on propagation over the Earth's surface.
*   **Kraus (3rd Ed.):** Chapter 22, "Radio Wave Propagation," will have discussions on propagation over the Earth's surface.

### 2. The Horizon and Radio Horizon

The Earth's curvature limits the direct line-of-sight communication. The horizon is the geometrical limit, while the radio horizon accounts for the bending of radio waves due to atmospheric refraction.

**Key Concepts:**

*   **Geometric Horizon:** The farthest point visible on the Earth's surface from a given height.
*   **Radio Horizon:** The farthest point reached by radio waves, considering the bending of waves due to atmospheric refraction.
*   **Atmospheric Refraction:** The bending of radio waves as they pass through layers of the atmosphere with different refractive indices.

**Geometric Horizon Distance:**

For a transmitting antenna at height $h_t$ above a flat Earth, the distance to the horizon $d_{th}$ is given by:

$d_{th} = \sqrt{2 R_e h_t}$

where:
*   $R_e$ is the radius of the Earth (approximately 6371 km).
*   $h_t$ is the height of the transmitting antenna.

**For a Spherical Earth:**

When considering the Earth's curvature, the distance to the horizon from an antenna at height $h_t$ is:

$d_{h_t} = \sqrt{2 R_e h_t (1 + \frac{h_t}{R_e})}$

However, a more practical approximation for small heights is:

$d_{h_t} \approx \sqrt{2 R_e h_t}$

**Example:**

Calculate the geometric horizon distance for an antenna at a height of 100 meters.
$R_e = 6371 \text{ km} = 6.371 \times 10^6 \text{ m}$
$h_t = 100 \text{ m}$

$d_{h_t} \approx \sqrt{2 \times (6.371 \times 10^6 \text{ m}) \times 100 \text{ m}}$
$d_{h_t} \approx \sqrt{1.2742 \times 10^9 \text{ m}^2}$
$d_{h_t} \approx 35,700 \text{ m} \approx 35.7 \text{ km}$

**Important Point:** The distance to the horizon is proportional to the square root of the antenna height.

### 3. Effective Earth Radius (k-factor)

Atmospheric refraction typically causes radio waves to bend downwards, extending the radio horizon beyond the geometric horizon. This effect is modeled by introducing an "effective Earth radius" ($R_e'$), which is larger than the actual Earth radius.

**Key Concepts:**

*   **Standard Atmosphere:** An atmosphere where the refractive index decreases linearly with height at a specific rate.
*   **k-factor:** The ratio of the effective Earth radius to the actual Earth radius, $k = R_e' / R_e$.
*   **Normal Refraction:** In a standard atmosphere, $k \approx 4/3$. This means the radio horizon is approximately 15% farther than the geometric horizon.
*   **Sub-refraction and Super-refraction:** Deviations from normal refraction can occur due to atmospheric conditions, leading to reduced or increased bending of radio waves.

**Effective Earth Radius Calculation:**

The effective Earth radius is used to modify the geometric horizon calculations for propagation:

$d'_{h_t} \approx \sqrt{2 k R_e h_t}$

where:
*   $k$ is the k-factor.
*   $R_e$ is the actual Earth radius.
*   $h_t$ is the antenna height.

**Example:**

Using the previous example with $k = 4/3$:
$d'_{h_t} \approx \sqrt{2 \times (4/3) \times (6.371 \times 10^6 \text{ m}) \times 100 \text{ m}}$
$d'_{h_t} \approx \sqrt{1.6989 \times 10^9 \text{ m}^2}$
$d'_{h_t} \approx 41,218 \text{ m} \approx 41.2 \text{ km}$

**Important Point:** The k-factor accounts for the average bending of radio waves in the atmosphere. For non-standard atmospheric conditions, the k-factor can vary, significantly impacting propagation.

**References:**

*   **Balanis (4th Ed.):** Discusses the concept of effective Earth radius and its role in propagation predictions.
*   **Collin (2nd Ed.):** Explains atmospheric refraction and the use of the k-factor.
*   **Raju (1st Ed.):** Will likely cover the k-factor in its discussion of tropospheric propagation.
*   **Kraus (3rd Ed.):** Provides an overview of atmospheric effects on radio wave propagation.

### 4. Propagation Modes over Spherical Earth

The way radio waves propagate over the Earth's surface depends on the frequency, the antenna heights, and the Earth's electrical properties. For spherical Earth propagation, we primarily consider:

*   **Surface Wave Propagation (Ground Wave):** This mode involves the radio wave "hugging" the Earth's surface. It's most effective for lower frequencies (LF, MF, and some HF) and is influenced by the Earth's conductivity and permittivity.
*   **Space Wave Propagation (Line-of-Sight):** This mode involves direct propagation between antennas or propagation via reflection from the Earth's surface. It's dominant at VHF, UHF, and microwave frequencies. The Earth's curvature limits the range of space wave propagation.

**Key Concepts:**

*   **Surface Wave:** The electromagnetic field that propagates along the surface of a conducting Earth. Its strength decreases with distance and frequency.
*   **Space Wave:** The direct wave between antennas and the wave reflected from the Earth's surface.
*   **Reflection Coefficient:** Describes how a wave is reflected by the Earth's surface. It depends on the Earth's electrical properties and the angle of incidence.
*   **Fading:** Fluctuations in signal strength due to interference between direct and reflected waves or multipath effects.

**Surface Wave Propagation:**

*   **Effectiveness:** Strongest for low frequencies and over highly conductive surfaces (e.g., seawater).
*   **Attenuation:** The signal strength of the surface wave decreases more rapidly with distance than free-space propagation due to energy losses into the Earth and the spreading of the wave over the curved surface.
*   **Balanis (4th Ed.)** provides detailed mathematical treatments for surface wave propagation, including attenuation factors.
*   **Collin (2nd Ed.)** elaborates on the theory of surface wave propagation and its dependence on Earth's properties.

**Space Wave Propagation:**

*   **Range:** Limited by the sum of the radio horizons of the transmitting and receiving antennas.
*   **Interference:** The direct wave and the wave reflected from the Earth can interfere constructively or destructively, leading to variations in received signal strength. The phase difference between these waves depends on the path lengths and the reflection coefficient.
*   **Fading:** Can occur due to variations in atmospheric conditions, reflections from irregular terrain, and multipath propagation.

**Example:**

Consider two antennas separated by a distance $d$. If both antennas are above the horizon for each other (line of sight), communication is possible via space wave. The maximum range for reliable space wave communication is approximately the sum of their individual radio horizon distances.

Range $\approx d_{h_t} + d_{h_r} = \sqrt{2 k R_e h_t} + \sqrt{2 k R_e h_r}$

**Important Point:** For line-of-sight communication over the spherical Earth, the maximum range is limited by the combined radio horizon distances of the transmitting and receiving antennas.

**References:**

*   **Balanis (4th Ed.):** Chapter 14 covers both ground wave and space wave propagation over the Earth.
*   **Collin (2nd Ed.):** Chapter 13 provides a thorough analysis of terrestrial propagation modes.
*   **Raju (1st Ed.):** Discusses tropospheric propagation, including space wave and its limitations.
*   **Kraus (3rd Ed.):** Explains the different modes of radio wave propagation over the Earth.

### 5. Factors Affecting Spherical Earth Propagation

Several factors influence how radio waves propagate over the curved Earth:

*   **Earth's Electrical Properties:**
    *   **Conductivity ($\sigma$):** Higher conductivity leads to less attenuation of surface waves and stronger reflections. Seawater has high conductivity.
    *   **Permittivity ($\epsilon$):** Affects the dielectric properties of the Earth.
*   **Frequency of Operation:**
    *   **Low Frequencies (LF, MF, HF):** Surface waves are significant. Propagation range can be very long, especially with the ionosphere's influence (which is a separate topic but interacts with ground wave).
    *   **VHF, UHF, Microwaves:** Primarily space wave propagation. Range is limited by the Earth's curvature and atmospheric effects.
*   **Antenna Height:** As seen earlier, higher antennas increase the radio horizon and thus the communication range.
*   **Atmospheric Conditions:**
    *   **Refraction (k-factor):** Normal, super, or sub-refraction.
    *   **Ducts:** Layers in the atmosphere where temperature and humidity gradients can trap radio waves, leading to very long-distance propagation (ducting).
    *   **Rain, Fog, etc.:** Can cause attenuation and scattering, particularly at higher frequencies.
*   **Terrain Roughness:** Irregular terrain can cause scattering and diffuse reflections, affecting signal strength and leading to multipath.

**Important Point:** The interaction of frequency, antenna height, Earth's electrical properties, and atmospheric conditions determines the effective propagation range and signal quality.

**References:**

*   **Balanis (4th Ed.):** Discusses the impact of Earth's properties and atmospheric conditions.
*   **Collin (2nd Ed.):** Provides detailed analysis of how these factors influence propagation modes.
*   **Raju (1st Ed.):** Covers the impact of atmospheric layers and terrain on tropospheric propagation.
*   **Kraus (3rd Ed.):** Offers a broad overview of factors affecting radio wave propagation.

### 6. Path Loss Calculations for Spherical Earth

Calculating path loss over a spherical Earth is more complex than for a flat Earth. It involves accounting for:

*   **Free-space path loss.**
*   **The curvature of the Earth** (which effectively increases the distance over which the signal spreads).
*   **Earth's surface interaction** (attenuation for surface waves, reflection for space waves).
*   **Atmospheric effects.**

**Key Concepts:**

*   **Geometric Spreading:** The signal power density decreases with the square of the distance. Over a curved Earth, the effective spreading is different.
*   **Reflection Loss:** Energy lost during reflection from the Earth's surface.
*   **Absorption Loss:** Energy absorbed by the Earth's surface, particularly for surface waves.

**Simplified Path Loss Model (for Space Waves over Spherical Earth):**

For line-of-sight propagation, the path loss can be approximated by modifying the free-space path loss to account for the Earth's curvature and reflection.

For two antennas at heights $h_t$ and $h_r$ separated by a distance $d$, and considering the effect of the Earth's curvature with a k-factor, the path loss ($PL$) can be conceptually represented as:

$PL \approx PL_{fs} + 10 \log_{10} \left( \frac{d}{d_{fs}} \right)^2 + \text{Reflection Loss} + \text{Surface Attenuation Factors}$

where:
*   $PL_{fs}$ is the free-space path loss.
*   $d$ is the distance between antennas.
*   $d_{fs}$ is the distance in free space corresponding to the path.

More sophisticated models involve:

*   **Two-Ray Model:** Considers direct and reflected waves. The interference between them causes signal variations.
*   **Ray Tracing and Diffraction Models:** Used for more complex terrains and for situations beyond the radio horizon.
*   **Balanis (4th Ed.)** provides detailed mathematical formulations for path loss calculations, including the effects of ground reflections and Earth's curvature.
*   **Collin (2nd Ed.)** also offers advanced path loss models for terrestrial propagation.

**Important Point:** Path loss over a spherical Earth is always greater than or equal to free-space path loss due to additional spreading, reflection, and absorption effects.

**References:**

*   **Balanis (4th Ed.):** Chapter 14.
*   **Collin (2nd Ed.):** Chapter 13.
*   **Raju (1st Ed.):** Discusses path loss calculations in tropospheric propagation.

### 7. Practice Questions and Answers

**Question 1:**
An antenna is located at a height of 50 meters above the ground. Calculate the geometric horizon distance in kilometers. Assume the Earth's radius is 6371 km.

**Answer 1:**
Using the formula $d_{th} = \sqrt{2 R_e h_t}$:
$R_e = 6371 \text{ km} = 6.371 \times 10^6 \text{ m}$
$h_t = 50 \text{ m}$

$d_{th} = \sqrt{2 \times (6.371 \times 10^6 \text{ m}) \times 50 \text{ m}}$
$d_{th} = \sqrt{6.371 \times 10^8 \text{ m}^2}$
$d_{th} \approx 25,240 \text{ m} \approx 25.24 \text{ km}$

**Question 2:**
If the k-factor is 4/3, what is the radio horizon distance for the antenna in Question 1?

**Answer 2:**
Using the formula $d'_{h_t} \approx \sqrt{2 k R_e h_t}$:
$d'_{h_t} \approx \sqrt{2 \times (4/3) \times (6.371 \times 10^6 \text{ m}) \times 50 \text{ m}}$
$d'_{h_t} \approx \sqrt{8.494 \times 10^8 \text{ m}^2}$
$d'_{h_t} \approx 29,144 \text{ m} \approx 29.14 \text{ km}$

**Question 3:**
Which type of radio wave propagation is most effective for frequencies below 30 MHz over long distances, and what are the primary factors affecting its strength over a spherical Earth?

**Answer 3:**
Surface wave (ground wave) propagation is most effective for frequencies below 30 MHz over long distances. The primary factors affecting its strength over a spherical Earth are:
1.  **Earth's Conductivity:** Higher conductivity (like seawater) leads to less attenuation.
2.  **Earth's Permittivity:** Influences dielectric losses.
3.  **Frequency:** Surface wave strength decreases rapidly with increasing frequency.
4.  **Curvature of the Earth:** Causes spreading and additional attenuation of the wave as it follows the surface.
5.  **Antenna Height:** While less dominant than for space waves, higher antennas can marginally improve surface wave coupling.

**Question 4:**
Explain the concept of the k-factor and its importance in spherical Earth propagation.

**Answer 4:**
The k-factor is a dimensionless multiplier used in radio propagation calculations to account for the bending (refraction) of radio waves in the Earth's atmosphere. It is defined as the ratio of the effective Earth's radius ($R_e'$) to the actual Earth's radius ($R_e$), i.e., $k = R_e' / R_e$. In a standard atmosphere, the refractive index decreases with height in a way that causes radio waves to bend downwards, extending the radio horizon beyond the geometric horizon. The effective Earth radius model simplifies this by treating propagation over a curved Earth as propagation over a flat Earth with modified geometry. A typical value for the k-factor in a standard atmosphere is 4/3, meaning the radio horizon is approximately 15% farther than the geometric horizon. The k-factor is crucial because it allows us to use simplified geometric formulas to estimate propagation ranges, and its variation due to atmospheric conditions can significantly impact communication link budgets.

**Question 5:**
For line-of-sight communication between two antennas at heights $h_t$ and $h_r$, what is the approximate maximum communication range over a spherical Earth, assuming a k-factor?

**Answer 5:**
The approximate maximum communication range ($d_{max}$) for line-of-sight propagation between two antennas at heights $h_t$ and $h_r$ over a spherical Earth, considering a k-factor, is the sum of their respective radio horizon distances:

$d_{max} \approx d'_{h_t} + d'_{h_r}$
$d_{max} \approx \sqrt{2 k R_e h_t} + \sqrt{2 k R_e h_r}$

### 8. Important Points to Remember

*   **Earth's curvature is paramount:** Unlike flat-earth models, spherical geometry dictates propagation limits.
*   **Radio Horizon extends beyond the geometric horizon:** Due to atmospheric refraction, modeled by the k-factor.
*   **Surface waves dominate at low frequencies:** And are strongly influenced by Earth's conductivity.
*   **Space waves dominate at high frequencies:** Limited by the sum of radio horizon distances.
*   **Antenna height is a key parameter:** Increasing antenna height significantly extends the communication range by increasing the radio horizon.
*   **Atmospheric conditions are critical:** Variations in the k-factor and the presence of ducts can drastically alter propagation.
*   **Path loss is greater than free-space loss:** Due to spreading over the curved Earth, reflection, and absorption.

### 9. Alignment with Course Outcomes

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** This topic directly addresses the modes (surface and space wave) and parameters (Earth's curvature, k-factor, antenna height, conductivity) of radio wave propagation, fulfilling CO4 at the stated knowledge level.

This comprehensive set of notes covers the essential aspects of spherical Earth propagation, drawing upon the principles and concepts found in the recommended textbooks. Remember to consult these references for deeper mathematical treatments and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
