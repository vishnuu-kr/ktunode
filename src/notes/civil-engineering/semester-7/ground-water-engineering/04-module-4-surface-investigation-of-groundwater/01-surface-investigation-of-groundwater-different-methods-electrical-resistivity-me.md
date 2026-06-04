---
title: "Surface investigation of groundwater- different methods-electrical resistivity method, seismic refraction method- determination of aquifer thickness of horizontal aquifers (Problems from resistivity method, seismic refraction)"
subject: "GROUND WATER ENGINEERING"
module: "Module 4: Surface investigation of groundwater"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81153a"
status: "completed"
scrapedAt: "2026-05-20T19:00:07.851Z"
---
# Ground Water Engineering: Module 4 - Surface Investigation of Groundwater

This module delves into surface investigation methods used to understand the subsurface and identify potential groundwater resources. We will focus on the Electrical Resistivity Method and the Seismic Refraction Method, and how to determine aquifer thickness using these techniques.

## Learning Outcomes:

By the end of this module, you should be able to:

*   Understand the fundamental principles behind surface geophysical methods for groundwater investigation.
*   Explain the operational procedures and applications of the Electrical Resistivity Method.
*   Explain the operational procedures and applications of the Seismic Refraction Method.
*   Apply the principles of these methods to interpret subsurface geological formations, including identifying potential aquifers.
*   Calculate aquifer thickness using data obtained from Electrical Resistivity and Seismic Refraction surveys.

---

## 1. Introduction to Surface Investigation of Groundwater

Surface geophysical methods are non-invasive techniques that utilize physical properties of the earth to infer subsurface geological conditions and identify potential groundwater zones. These methods are crucial for reconnaissance, site selection, and preliminary assessment of groundwater resources before resorting to more expensive drilling operations.

**Key Concepts:**

*   **Geophysical Properties:** These are physical characteristics of subsurface materials that can be measured from the surface (e.g., electrical conductivity, seismic wave velocity).
*   **Contrast in Properties:** Geophysical methods rely on contrasts in these properties between different geological layers to differentiate them. Water-saturated zones typically exhibit different properties compared to dry or less permeable formations.
*   **Reconnaissance Tool:** Surface investigations are primarily used for large-scale mapping and identifying promising areas for further detailed study.

---

## 2. Electrical Resistivity Method

The Electrical Resistivity (ER) method measures the electrical resistance of subsurface materials by injecting electrical current into the ground and measuring the resulting potential difference.

**2.1. Fundamental Principles:**

*   **Electrical Resistivity ($\rho$)**: A material's resistance to the flow of electrical current. It is measured in Ohm-meters ($\Omega \cdot m$).
*   **Factors Affecting Resistivity:**
    *   **Porosity:** Higher porosity generally leads to lower resistivity (more pore space for water).
    *   **Water Saturation:** Water is a good conductor, so saturated zones have lower resistivity than dry zones.
    *   **Water Salinity:** Saline water has much lower resistivity than fresh water.
    *   **Clay Content:** Clays can conduct electricity due to surface conduction, leading to lower resistivity even in unsaturated conditions.
    *   **Lithology:** Different rock types have inherent resistivity values (e.g., sandstones generally have higher resistivity than shales).

**2.2. Instrumentation and Setup:**

*   **Current Electrodes (A & B):** Two electrodes are used to inject current into the ground.
*   **Potential Electrodes (M & N):** Two electrodes are used to measure the potential difference.
*   **Resistivity Meter:** A device that generates current and measures the voltage difference.
*   **Electrode Arrays:** Various configurations of electrodes are used to control the depth of investigation and resolution. Common arrays include:
    *   **Schlumberger Array:** Electrodes are collinear, with current electrodes spaced further apart than potential electrodes. This allows for greater depth penetration by increasing the current electrode separation.
    *   **Wenner Array:** All four electrodes are equally spaced in a collinear fashion. This provides good resolution but limited depth penetration for a given electrode spacing.

**2.3. Operational Procedure:**

1.  **Site Selection and Layout:** Define the survey area and establish a baseline.
2.  **Electrode Placement:** Place electrodes in the ground according to the chosen array.
3.  **Current Injection:** The resistivity meter injects a known current ($I$) through electrodes A and B.
4.  **Potential Measurement:** The potential difference ($\Delta V$) is measured between electrodes M and N.
5.  **Apparent Resistivity Calculation:** The apparent resistivity ($\rho_a$) is calculated using a geometric factor ($K$) that depends on the electrode array and spacing.
    *   For Schlumberger array: $K = \frac{\pi (L^2 - a^2)}{2a}$, where $L$ is half the distance between A and B, and $a$ is half the distance between M and N.
    *   For Wenner array: $K = 2\pi a$.
    *   The formula is generally $\rho_a = K \frac{\Delta V}{I}$.
6.  **Data Acquisition:** Repeat measurements at different electrode spacings or positions to build a resistivity profile.

**2.4. Applications in Groundwater Investigation:**

*   **Delineation of Aquifers:** Water-saturated, permeable formations (aquifers) typically have lower resistivity than overlying or underlying layers.
*   **Mapping of Aquifer Boundaries:** Identifying the extent and thickness of aquifers.
*   **Assessment of Groundwater Quality:** Higher resistivity can indicate fresh water, while lower resistivity might suggest saline or brackish water.
*   **Detection of Clay Lenses:** Clays generally have lower resistivity.
*   **Mapping of Subsurface Structures:** Identifying faults or lithological changes.

**2.5. Determination of Aquifer Thickness (Horizontal Aquifers) using Resistivity:**

For horizontal aquifers, resistivity soundings (typically using the Schlumberger array) are performed. As the current electrode spacing ($AB/2$) increases, the current penetrates deeper. The apparent resistivity values plotted against $AB/2$ reveal changes in subsurface layers.

*   **Two-Layer Earth Model:** A common simplification assumes the subsurface consists of two layers: an overburden and an aquifer.
*   **Master Curves and Software:** Interpretation involves matching the field sounding data (apparent resistivity vs. $AB/2$) to theoretical "master curves" generated for various layer thicknesses and resistivities. Specialized software is now widely used for this inversion process.
*   **Interpretation:** A typical resistivity sounding for a horizontal aquifer will show:
    *   Initially, higher resistivity for the overburden.
    *   A decrease in apparent resistivity as the current penetrates the aquifer.
    *   A plateau at larger $AB/2$ values where the current is predominantly flowing within the aquifer.

**Example of Resistivity Interpretation (Conceptual):**

Imagine a resistivity sounding where you observe the following trend:

*   **Small $AB/2$:** High apparent resistivity ($\rho_{a1}$), indicating dry, resistive overburden (e.g., dry soil, rock).
*   **Medium $AB/2$:** Apparent resistivity decreases ($\rho_{a2}$), indicating the current is reaching a less resistive layer (potential aquifer).
*   **Large $AB/2$:** Apparent resistivity stabilizes at a lower value ($\rho_{a3}$), representing the bulk resistivity of a thick, saturated aquifer.

By fitting these observed values to theoretical models (often using inversion software), the thickness of the aquifer and its true resistivity can be estimated.

---

## 3. Seismic Refraction Method

The Seismic Refraction method exploits the difference in seismic wave velocities between different subsurface layers. Seismic waves travel faster through denser and more consolidated materials.

**3.1. Fundamental Principles:**

*   **Seismic Waves:** Sound waves generated by a source (e.g., hammer blow, explosion) that travel through the earth.
*   **Wave Velocities:**
    *   **P-waves (Primary/Compressional waves):** Travel fastest and compress the material.
    *   **S-waves (Secondary/Shear waves):** Travel slower and move the material perpendicular to the direction of propagation.
*   **Refraction at Interfaces:** When seismic waves encounter an interface between layers with different velocities, they refract (bend) according to Snell's Law.
*   **Critical Angle:** A specific angle of incidence at which the refracted wave travels along the interface between two layers. These critically refracted waves then travel back to the surface.
*   **Travel Time:** The time it takes for the seismic waves to travel from the source to a receiver.

**3.2. Instrumentation and Setup:**

*   **Seismic Source:** Generates seismic waves (e.g., sledgehammer, explosive charges, vibroseis).
*   **Geophones (or Hydrophones for marine):** Sensitive receivers placed at various distances from the source to detect the arrival of seismic waves.
*   **Seismograph (Data Acquisition System):** Records the time of wave arrival at each geophone.
*   **Layout:** Geophones are typically laid out in a linear array, with the source at one end or in the center.

**3.3. Operational Procedure:**

1.  **Source Generation:** The seismic source is activated.
2.  **Wave Propagation:** Waves travel through the subsurface layers.
3.  **Reception:** Geophones detect the arrival of waves.
4.  **Travel Time Recording:** The seismograph records the arrival time at each geophone.
5.  **Data Plotting:** Travel times are plotted against the distance from the source to create a **seismogram**.
6.  **Interpretation:** The seismogram is analyzed to identify different wave arrivals (direct waves, critically refracted waves).

**3.4. Applications in Groundwater Investigation:**

*   **Mapping Bedrock Depth:** Identifying the depth to the impermeable bedrock layer, which often forms the base of an aquifer.
*   **Identifying Lithological Boundaries:** Differentiating between unconsolidated sediments and bedrock, or between different types of bedrock.
*   **Detecting Fractured Rock Zones:** Fractured rocks may have lower seismic velocities than intact rock.
*   **Locating Potential Aquifers:** Water-saturated zones or porous formations might exhibit lower seismic velocities compared to saturated, consolidated material. However, the contrast is often less pronounced than with resistivity.

**3.5. Determination of Aquifer Thickness (Horizontal Aquifers) using Seismic Refraction:**

This method is most effective for determining the depth to bedrock or a consolidated layer underlying unconsolidated sediments.

*   **Assumptions:**
    *   Layers are horizontal and of uniform thickness.
    *   Velocity increases with depth.
    *   Waves travel along interfaces at the critical angle.
*   **Procedure:**
    1.  Place geophones at increasing distances from a seismic source.
    2.  Plot travel time ($T$) against geophone distance ($X$).
    3.  **Identify Wave Arrivals:**
        *   **Direct Wave:** The first arrivals will be from waves traveling directly through the uppermost layer. The slope of this segment on the T-X plot represents the reciprocal of the velocity in the first layer ($1/v_1$).
        *   **Critically Refracted Wave:** At a certain distance (the "crossover distance"), waves critically refracted along the interface of the second layer will arrive first. The slope of this segment represents the reciprocal of the velocity in the second layer ($1/v_2$).
    4.  **Calculate Layer Thickness:**
        *   The thickness of the first layer ($h_1$) can be calculated using the formula:
            $h_1 = \frac{t_{i1}}{2} \cdot \frac{v_1 v_2}{\sqrt{v_2^2 - v_1^2}}$
            where:
            *   $t_{i1}$ is the intercept time for the first layer (the time extrapolated back to $X=0$ for the refracted wave from the second layer, if it were to travel entirely in the first layer). This can be determined from the T-X plot by extrapolating the second layer's travel time curve to $X=0$.
            *   $v_1$ is the velocity in the first layer.
            *   $v_2$ is the velocity in the second layer.
        *   Alternatively, using the crossover distance ($X_c$) where the direct and critically refracted waves arrive at the same time:
            $X_c = 2 h_1 \sqrt{\frac{v_2}{v_1} - 1}$
            This can be rearranged to solve for $h_1$:
            $h_1 = \frac{X_c}{2 \sqrt{\frac{v_2}{v_1} - 1}}$

**Example of Seismic Refraction Interpretation (Conceptual):**

Consider a survey where you have a hammer source and geophones.

*   **T-X Plot:**
    *   The initial arrivals show a straight line with a certain slope (representing $v_1$).
    *   At further distances, a second straight line with a steeper slope emerges (representing $v_2$).
    *   The intersection of these two lines (extrapolating the second line back to the y-axis) gives the intercept time ($t_{i1}$).

Let's assume:
*   $v_1 = 300$ m/s (velocity in loose sediments)
*   $v_2 = 1500$ m/s (velocity in saturated sand or weathered bedrock)
*   Intercept time ($t_{i1}$) = 0.04 seconds

Using the formula:
$h_1 = \frac{0.04 \, s}{2} \cdot \frac{(300 \, m/s) \cdot (1500 \, m/s)}{\sqrt{(1500 \, m/s)^2 - (300 \, m/s)^2}}$
$h_1 = 0.02 \cdot \frac{450000}{\sqrt{2250000 - 90000}}$
$h_1 = 0.02 \cdot \frac{450000}{\sqrt{2160000}}$
$h_1 = 0.02 \cdot \frac{450000}{1469.69}$
$h_1 \approx 0.02 \cdot 306.2$
$h_1 \approx 6.12$ meters

Therefore, the thickness of the first layer (which could be the overburden above an aquifer or the aquifer itself if the second layer is bedrock) is approximately 6.12 meters.

---

## 4. Comparison of Methods

| Feature                 | Electrical Resistivity Method                                    | Seismic Refraction Method                                          |
| :---------------------- | :--------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Physical Property**   | Electrical resistivity                                           | Seismic wave velocity                                              |
| **Primary Application** | Delineating lithology, groundwater presence, and quality        | Mapping bedrock depth, identifying consolidated layers            |
| **Sensitivity to Water**| Highly sensitive to water presence and salinity                  | Sensitive to saturation and consolidation, less direct to water quality |
| **Resolution**          | Can provide good resolution for fine layers and contrasts      | Generally better for delineating major geological boundaries      |
| **Interpretation**      | Involves inversion to obtain true resistivity and layer thickness | Involves analyzing travel times and calculating layer velocities and thicknesses |
| **Cost**                | Generally less expensive for basic surveys                       | Can be more expensive, especially with explosive sources          |
| **Limitations**         | Ambiguity in interpretation due to various factors affecting resistivity | Requires velocity contrast, may miss thin layers, sensitive to lateral variations |

---

## 5. Practice Problems

**Problem 1 (Electrical Resistivity):**

A Schlumberger resistivity sounding was conducted. The following data was obtained for a two-layer earth model (overburden and aquifer). Using master curves (or assuming a simplified inversion for this problem), the interpreted parameters are:

*   Overburden resistivity ($\rho_1$) = 100 $\Omega \cdot m$
*   Aquifer resistivity ($\rho_2$) = 20 $\Omega \cdot m$
*   Apparent resistivity at the plateau where aquifer dominates ($R_A$) = 30 $\Omega \cdot m$

Estimate the thickness of the aquifer.

*Hint: For a two-layer case with $\rho_1 > \rho_2$, the apparent resistivity tends towards $\rho_2$ as the current electrode spacing ($AB/2$) becomes much larger than the aquifer thickness. The ratio $\rho_2/\rho_1$ is a key factor in the shape of the curve. If $\rho_1 > \rho_2$, the apparent resistivity will be lower than $\rho_1$ and approach $\rho_2$. A simplified interpretation might involve looking at the overall shape or using approximation formulas.*

**Problem 2 (Seismic Refraction):**

In a seismic refraction survey to determine the depth to bedrock, the following data was obtained:

*   Velocity in the upper layer ($v_1$) = 400 m/s
*   Velocity in the lower layer (bedrock) ($v_2$) = 1600 m/s
*   The travel time vs. distance plot shows that the critically refracted wave from the bedrock begins to arrive first at a distance of 60 meters from the source.

Calculate the thickness of the upper layer.

**Problem 3 (Seismic Refraction - Intercept Time):**

From a seismic refraction survey, the following information was extracted from the travel-time graph:

*   Velocity of the first layer ($v_1$) = 350 m/s
*   Velocity of the second layer ($v_2$) = 1800 m/s
*   Intercept time for the second layer ($t_{i1}$) = 0.05 seconds

Calculate the thickness of the first layer.

---

## 6. Answers to Practice Problems

**Answer to Problem 1 (Electrical Resistivity):**

**Explanation:** This problem is conceptual and highlights the challenge of direct calculation without inversion software or detailed master curves. However, we can infer the relationship.

*   The apparent resistivity decreases from 100 $\Omega \cdot m$ as we penetrate the aquifer.
*   The plateau of 30 $\Omega \cdot m$ indicates the bulk resistivity is influenced by both layers.

For a simplified two-layer earth with $\rho_1 > \rho_2$, the apparent resistivity curve will be somewhere between $\rho_1$ and $\rho_2$. The exact value of 30 $\Omega \cdot m$ relative to $\rho_1$ and $\rho_2$ along with the shape of the curve (which is not provided, but implied by the plateau value) would be used in inversion to estimate thickness.

**Without master curves or inversion software, it's impossible to give a precise numerical answer for thickness from the given data alone.** However, if we *were* given a master curve or a specific software output, we would be looking for the thickness value on the curve that best matches the observed apparent resistivity plateau of 30 $\Omega \cdot m$ given $\rho_1=100$ and $\rho_2=20$. This plateau value is influenced by the ratio $\rho_2/\rho_1$ and the thickness/spacing ratio.

**(Note: In a real scenario, you would typically use software like IPI2Win or RES2DINV. A typical outcome for this scenario might yield a thickness of a few meters to over ten meters, depending on the detailed curve.)**

---

**Answer to Problem 2 (Seismic Refraction):**

Given:
*   $v_1 = 400$ m/s
*   $v_2 = 1600$ m/s
*   Crossover distance ($X_c$) = 60 meters

We use the formula: $h_1 = \frac{X_c}{2 \sqrt{\frac{v_2}{v_1} - 1}}$

$h_1 = \frac{60 \, m}{2 \sqrt{\frac{1600 \, m/s}{400 \, m/s} - 1}}$
$h_1 = \frac{60 \, m}{2 \sqrt{4 - 1}}$
$h_1 = \frac{60 \, m}{2 \sqrt{3}}$
$h_1 = \frac{60 \, m}{2 \times 1.732}$
$h_1 = \frac{60 \, m}{3.464}$
$h_1 \approx 17.32$ meters

**The thickness of the upper layer is approximately 17.32 meters.**

---

**Answer to Problem 3 (Seismic Refraction - Intercept Time):**

Given:
*   $v_1 = 350$ m/s
*   $v_2 = 1800$ m/s
*   Intercept time ($t_{i1}$) = 0.05 seconds

We use the formula: $h_1 = \frac{t_{i1}}{2} \cdot \frac{v_1 v_2}{\sqrt{v_2^2 - v_1^2}}$

$h_1 = \frac{0.05 \, s}{2} \cdot \frac{(350 \, m/s) \cdot (1800 \, m/s)}{\sqrt{(1800 \, m/s)^2 - (350 \, m/s)^2}}$
$h_1 = 0.025 \, s \cdot \frac{630000 \, m/s}{\sqrt{3240000 - 122500}}$
$h_1 = 0.025 \, s \cdot \frac{630000 \, m/s}{\sqrt{3117500}}$
$h_1 = 0.025 \, s \cdot \frac{630000 \, m/s}{1765.65 \, m/s}$
$h_1 = 0.025 \, s \cdot 356.82 \, m$
$h_1 \approx 8.92$ meters

**The thickness of the first layer is approximately 8.92 meters.**

---

## 7. Important Points to Remember

*   **Surface investigations are reconnaissance tools:** They help identify promising areas and guide subsequent drilling.
*   **Electrical Resistivity:**
    *   Water-saturated zones generally have *lower* resistivity.
    *   Saline water significantly *reduces* resistivity.
    *   Clays also tend to have *lower* resistivity.
    *   The Schlumberger array is common for depth sounding.
*   **Seismic Refraction:**
    *   Seismic velocity generally *increases* with depth due to consolidation and lithology changes.
    *   Water saturation can lower seismic velocity compared to dry, unconsolidated material, but the contrast is less dramatic than with resistivity.
    *   It's very effective for determining the depth to bedrock.
    *   Accurate determination of layer velocities and intercept times is crucial for thickness calculations.
*   **Ambiguity:** Both methods can suffer from ambiguity. A low resistivity might be due to saline water, clay, or a thin saturated zone. Similarly, a low seismic velocity might be due to fractured rock or a specific type of unconsolidated material.
*   **Integration:** Combining results from multiple geophysical methods, along with geological mapping and borehole data, provides a more robust understanding of the subsurface.

---
