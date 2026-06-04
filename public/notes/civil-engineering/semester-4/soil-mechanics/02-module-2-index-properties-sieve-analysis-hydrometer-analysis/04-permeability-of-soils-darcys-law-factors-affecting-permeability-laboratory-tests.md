---
title: "Permeability of soils : Darcy’s law – Factors affecting permeability –Laboratory tests: Constant head and variable head permeability tests -Average permeability of stratified deposits - Numerical problems"
subject: "SOIL MECHANICS"
module: "Module 2: Index properties : Sieve analysis, Hydrometer analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810978"
status: "completed"
scrapedAt: "2026-05-20T18:47:00.647Z"
---
# Soil Mechanics: Module 2 - Index Properties and Permeability

## Topic: Permeability of Soils

### 1. Introduction to Permeability

Permeability is a fundamental index property of soil that describes its ability to transmit water or other fluids. It is crucial for understanding various geotechnical phenomena such as:

*   **Seepage through dams and foundations:** Predicting seepage flow rates and uplift pressures.
*   **Drainage of construction sites:** Designing efficient drainage systems.
*   **Groundwater flow:** Analyzing aquifer behavior and well hydraulics.
*   **Consolidation of soils:** Understanding the rate of settlement.

### 2. Darcy's Law

Darcy's Law, formulated by Henry Darcy in 1856, quantifies the flow of water through porous media like soil. It states that the flow rate ($Q$) is directly proportional to the hydraulic gradient ($i$) and the cross-sectional area ($A$) through which the flow occurs, and inversely proportional to the length of the flow path ($L$).

**Key Concepts:**

*   **Flow Rate ($Q$):** The volume of fluid passing through a unit area per unit time (e.g., $m^3/s$, $cm^3/s$).
*   **Hydraulic Gradient ($i$):** The ratio of the head loss ($\Delta h$) to the length of the flow path ($L$) over which the head loss occurs. It is a dimensionless quantity.
    $i = \frac{\Delta h}{L}$
    Where:
    *   $\Delta h$ = Head loss (difference in hydraulic head between two points)
    *   $L$ = Length of the flow path
*   **Hydraulic Conductivity ($k$):** A proportionality constant that represents the ease with which a fluid can flow through a porous medium. It depends on the properties of the fluid and the porous medium. Its units are typically velocity (e.g., $m/s$, $cm/s$).

**Darcy's Law Equation:**

$Q = k \cdot i \cdot A$

**Volumetric Flow Rate (Discharge):**

$Q = k \frac{\Delta h}{L} A$

**Seepage Velocity ($v_s$) or Discharge Velocity:**

The average velocity of water molecules as they flow through the pores.

$v_s = \frac{Q}{A} = k \cdot i$

**Seepage Velocity vs. True Velocity (Interstitial Velocity):**

*   **Seepage Velocity ($v_s$):** The average velocity calculated based on the total cross-sectional area.
*   **True Velocity ($v_{true}$) or Interstitial Velocity:** The actual velocity of water within the pores, considering only the cross-sectional area of the pores.

$v_{true} = \frac{Q}{A_v}$

Where $A_v$ is the area of the voids.

The relationship between seepage velocity and true velocity is given by:

$v_{true} = \frac{v_s}{n_e} = \frac{k \cdot i}{n_e}$

Where $n_e$ is the effective porosity (void ratio $e$ divided by $1+e$).

**Important Point:** Darcy's Law is applicable for laminar flow conditions in soils. Laminar flow is generally assumed for most seepage problems in soil mechanics. The Reynolds number ($Re$) can be used to determine the flow regime.

$Re = \frac{\rho v_s D}{\mu} < 1$ (for laminar flow in soil pores)

Where:
*   $\rho$ = density of the fluid
*   $v_s$ = seepage velocity
*   $D$ = characteristic dimension of the soil particles (e.g., effective grain size $D_{10}$)
*   $\mu$ = dynamic viscosity of the fluid

### 3. Factors Affecting Permeability

The hydraulic conductivity ($k$) is influenced by several factors related to both the soil and the fluid.

**3.1. Properties of the Soil:**

*   **Grain Size Distribution:**
    *   **Larger particles:** Generally lead to larger voids and higher permeability.
    *   **Well-graded soils:** Have a wider range of particle sizes, which can pack tightly, reducing permeability compared to uniformly graded soils with the same average particle size.
    *   **Uniformly graded soils:** Tend to have larger void spaces and higher permeability.
*   **Void Ratio ($e$):**
    *   **Higher void ratio:** Means more and larger voids, leading to higher permeability.
    *   **Lower void ratio:** Means smaller and fewer voids, leading to lower permeability.
    Permeability generally increases exponentially with void ratio.
*   **Particle Shape and Surface Texture:**
    *   **Rounded particles:** Can pack more closely, potentially reducing permeability.
    *   **Angular particles:** Tend to interlock more, creating larger void spaces and increasing permeability.
    *   **Flaky particles (e.g., clays):** Can align themselves to reduce permeability.
*   **Void Structure/Arrangement:** The arrangement of particles and voids (e.g., layered structure) can significantly influence the direction of flow and thus the measured permeability.
*   **Degree of Saturation:** Permeability is usually considered for fully saturated soils. Partially saturated soils have lower permeability due to the presence of air in the pores.

**3.2. Properties of the Fluid:**

*   **Viscosity ($\mu$):**
    *   **Higher viscosity:** Restricts flow, leading to lower permeability.
    *   **Lower viscosity:** Facilitates flow, leading to higher permeability.
*   **Density ($\rho$):**
    *   **Higher density:** Can contribute to higher flow if other factors are equal, but viscosity is a more dominant factor.

**Relationship with Fluid Properties:**

Hydraulic conductivity ($k$) is often expressed as a product of a geometric term related to the soil and a fluid-related term:

$k = K \frac{\rho g}{\mu}$

Where:
*   $K$ = Permeability coefficient (or intrinsic permeability) – a property solely of the porous medium.
*   $\rho$ = Density of the fluid
*   $g$ = Acceleration due to gravity
*   $\mu$ = Dynamic viscosity of the fluid

**Note:** When comparing permeability of different soils using the same fluid, hydraulic conductivity ($k$) is used. When comparing flow of different fluids through the same soil, the term $K$ (intrinsic permeability) is more appropriate.

### 4. Laboratory Tests for Permeability

Laboratory tests are conducted to determine the coefficient of hydraulic conductivity ($k$) of soil samples. The two most common methods are:

**4.1. Constant Head Permeability Test:**

*   **Applicability:** Suitable for coarse-grained soils (sands and gravels) with relatively high permeability.
*   **Principle:** Maintains a constant hydraulic head difference ($\Delta h$) across the soil sample. The volume of water ($Q$) that flows through the sample in a measured time ($t$) is recorded.
*   **Apparatus:**
    *   Permeameter cell (cylindrical mold) to hold the soil sample.
    *   Water supply with an overflow mechanism to maintain a constant head.
    *   Standpipes or gauges to measure the head at the inlet and outlet of the sample.
    *   Collecting cylinder and stopwatch to measure flow rate.
*   **Procedure:**
    1.  Prepare a representative soil sample and compact it into the permeameter cell of a known length ($L$) and cross-sectional area ($A$). Ensure the sample is saturated.
    2.  Apply a constant head difference ($\Delta h$) across the sample.
    3.  Allow water to flow through the sample until a steady flow rate is achieved.
    4.  Measure the volume of water ($V$) collected in a specific time interval ($t$).
*   **Calculation:**
    Using Darcy's Law ($Q = k \cdot i \cdot A$):
    $Q = \frac{V}{t}$
    $i = \frac{\Delta h}{L}$
    $A = \text{cross-sectional area of the sample}$

    Substituting these into Darcy's Law:
    $\frac{V}{t} = k \frac{\Delta h}{L} A$

    Therefore, the hydraulic conductivity ($k$) is calculated as:
    $k = \frac{V \cdot L}{A \cdot t \cdot \Delta h}$

**Example:**
A constant head permeability test was conducted on a soil sample of length 15 cm and diameter 10 cm. The head difference was maintained at 25 cm. In 5 minutes, 300 cm³ of water was collected. Calculate the hydraulic conductivity.

*   $L = 15 \text{ cm}$
*   Diameter $= 10 \text{ cm} \implies$ Radius $= 5 \text{ cm}$
*   $A = \pi r^2 = \pi (5 \text{ cm})^2 = 25\pi \text{ cm}^2 \approx 78.54 \text{ cm}^2$
*   $\Delta h = 25 \text{ cm}$
*   $V = 300 \text{ cm}^3$
*   $t = 5 \text{ minutes} = 5 \times 60 = 300 \text{ seconds}$

$k = \frac{300 \text{ cm}^3 \cdot 15 \text{ cm}}{78.54 \text{ cm}^2 \cdot 300 \text{ s} \cdot 25 \text{ cm}}$
$k = \frac{4500}{1178100} \text{ cm/s}$
$k \approx 0.00382 \text{ cm/s}$

**4.2. Variable Head Permeability Test (Falling Head Permeability Test):**

*   **Applicability:** Suitable for fine-grained soils (silts and clays) with relatively low permeability, where the flow rate is too small to be accurately measured in a constant head test.
*   **Principle:** The head difference across the sample decreases with time as water flows from a standpipe into the soil sample. The rate of decrease of the head is used to calculate permeability.
*   **Apparatus:**
    *   Permeameter cell.
    *   Standpipe of a known cross-sectional area ($a$) connected to the inlet of the sample.
    *   Collecting vessel or a way to measure the head.
    *   Stopwatch.
*   **Procedure:**
    1.  Prepare and saturate the soil sample in the permeameter cell of known length ($L$) and cross-sectional area ($A$).
    2.  Fill the standpipe with water to a certain initial head ($h_1$).
    3.  Allow the water to flow through the sample, and the head in the standpipe decreases.
    4.  Record the initial head ($h_1$) and the final head ($h_2$) after a measured time interval ($t$).
*   **Calculation:**
    Consider a small time interval $dt$. During this interval, the head drops by $dh$.
    The volume of water flowing out of the standpipe is $dV_{standpipe} = a \cdot dh$.
    This volume is also equal to the flow through the soil sample: $dV_{soil} = Q \cdot dt$.
    From Darcy's Law, the flow rate through the soil is $Q = k \cdot i \cdot A$.
    The hydraulic gradient at a given head $h$ is $i = \frac{h}{L}$.
    So, $Q = k \frac{h}{L} A$.

    Equating the volumes:
    $a \cdot dh = -Q \cdot dt$ (The negative sign indicates the head is decreasing)
    $a \cdot dh = -k \frac{h}{L} A \cdot dt$

    Rearranging to integrate:
    $\frac{dh}{h} = -\frac{kA}{aL} dt$

    Integrating from $t=0$ to $t=t$ and from $h=h_1$ to $h=h_2$:
    $\int_{h_1}^{h_2} \frac{dh}{h} = -\int_{0}^{t} \frac{kA}{aL} dt$
    $[\ln h]_{h_1}^{h_2} = -\frac{kA}{aL} [t]_{0}^{t}$
    $\ln h_2 - \ln h_1 = -\frac{kA}{aL} t$
    $\ln \left(\frac{h_2}{h_1}\right) = -\frac{kA}{aL} t$

    Therefore, the hydraulic conductivity ($k$) is calculated as:
    $k = \frac{aL}{At} \ln \left(\frac{h_1}{h_2}\right)$

**Example:**
A variable head permeability test was performed on a clay sample of length 10 cm and diameter 5 cm. The standpipe used had a diameter of 1 cm and a cross-sectional area of 0.785 cm². The head dropped from 50 cm to 25 cm in 10 minutes. Calculate the hydraulic conductivity.

*   $L = 10 \text{ cm}$
*   $A = \pi (2.5 \text{ cm})^2 = 6.25\pi \text{ cm}^2 \approx 19.63 \text{ cm}^2$ (Sample area)
*   $a = 0.785 \text{ cm}^2$ (Standpipe area)
*   $h_1 = 50 \text{ cm}$
*   $h_2 = 25 \text{ cm}$
*   $t = 10 \text{ minutes} = 10 \times 60 = 600 \text{ seconds}$

$k = \frac{0.785 \text{ cm}^2 \cdot 10 \text{ cm}}{19.63 \text{ cm}^2 \cdot 600 \text{ s}} \ln \left(\frac{50 \text{ cm}}{25 \text{ cm}}\right)$
$k = \frac{7.85}{11778} \ln (2)$
$k \approx 0.0006665 \cdot 0.6931$
$k \approx 0.000462 \text{ cm/s}$

### 5. Average Permeability of Stratified Deposits

When a soil deposit consists of layers of different soil types, each with its own coefficient of permeability ($k$), the overall permeability of the deposit can be different depending on the direction of flow relative to the stratification.

**5.1. Flow Parallel to Stratification:**

If the flow is horizontal and parallel to the layers, the head loss across each layer is the same, but the flow rate through each layer is different. The total flow is the sum of the flows through each layer.

Consider $n$ layers of soil, each with thickness $L_j$ and permeability $k_j$. The total thickness is $L = \sum_{j=1}^{n} L_j$.

The flow rate through layer $j$ is $Q_j = k_j \frac{\Delta h}{L} A$.
The total flow is $Q = \sum_{j=1}^{n} Q_j = \sum_{j=1}^{n} k_j \frac{\Delta h}{L} A$.

The average permeability for flow parallel to stratification ($k_{avg, parallel}$) can be calculated using the formula for the equivalent hydraulic conductivity of parallel resistors:

$k_{avg, parallel} = \frac{\sum_{j=1}^{n} k_j L_j}{\sum_{j=1}^{n} L_j} = \frac{\sum_{j=1}^{n} k_j L_j}{L}$

**Important Point:** This is a weighted average of the permeabilities, weighted by the thickness of each layer.

**5.2. Flow Perpendicular to Stratification:**

If the flow is vertical and perpendicular to the layers, the flow rate through each layer is the same, but the head loss across each layer is different. The total head loss is the sum of the head losses across each layer.

The head loss across layer $j$ is $\Delta h_j = i_j L_j = \frac{Q}{A k_j} L_j$.
The total head loss is $\Delta h = \sum_{j=1}^{n} \Delta h_j = \sum_{j=1}^{n} \frac{Q}{A k_j} L_j$.

The average permeability for flow perpendicular to stratification ($k_{avg, perpendicular}$) is calculated using the formula for the equivalent hydraulic conductivity of series resistors:

$\frac{1}{k_{avg, perpendicular}} = \frac{\sum_{j=1}^{n} \frac{L_j}{k_j}}{\sum_{j=1}^{n} L_j} = \frac{\sum_{j=1}^{n} \frac{L_j}{k_j}}{L}$

Or:

$k_{avg, perpendicular} = \frac{L}{\sum_{j=1}^{n} \frac{L_j}{k_j}}$

**Important Point:** This is the harmonic mean of the permeabilities, weighted by the thickness of each layer.

**Example:**
A soil deposit consists of three layers:
*   Layer 1: Thickness $L_1 = 2$ m, Permeability $k_1 = 1 \times 10^{-4}$ m/s
*   Layer 2: Thickness $L_2 = 3$ m, Permeability $k_2 = 5 \times 10^{-5}$ m/s
*   Layer 3: Thickness $L_3 = 1$ m, Permeability $k_3 = 2 \times 10^{-4}$ m/s

Calculate the average permeability for horizontal flow (parallel to stratification) and vertical flow (perpendicular to stratification).

**Horizontal Flow (Parallel):**
$L = L_1 + L_2 + L_3 = 2 + 3 + 1 = 6$ m

$k_{avg, parallel} = \frac{k_1 L_1 + k_2 L_2 + k_3 L_3}{L}$
$k_{avg, parallel} = \frac{(1 \times 10^{-4})(2) + (5 \times 10^{-5})(3) + (2 \times 10^{-4})(1)}{6}$
$k_{avg, parallel} = \frac{2 \times 10^{-4} + 15 \times 10^{-5} + 2 \times 10^{-4}}{6}$
$k_{avg, parallel} = \frac{0.2 \times 10^{-3} + 0.15 \times 10^{-3} + 0.2 \times 10^{-3}}{6}$
$k_{avg, parallel} = \frac{0.55 \times 10^{-3}}{6}$
$k_{avg, parallel} \approx 0.0917 \times 10^{-3} \text{ m/s} = 9.17 \times 10^{-5} \text{ m/s}$

**Vertical Flow (Perpendicular):**
$k_{avg, perpendicular} = \frac{L}{\frac{L_1}{k_1} + \frac{L_2}{k_2} + \frac{L_3}{k_3}}$
$k_{avg, perpendicular} = \frac{6}{\frac{2}{1 \times 10^{-4}} + \frac{3}{5 \times 10^{-5}} + \frac{1}{2 \times 10^{-4}}}$
$k_{avg, perpendicular} = \frac{6}{20000 + 60000 + 5000}$
$k_{avg, perpendicular} = \frac{6}{85000}$
$k_{avg, perpendicular} \approx 0.0000706 \text{ m/s} = 7.06 \times 10^{-5} \text{ m/s}$

### 6. Practice Questions and Exercises

**Question 1 (Darcy's Law & Constant Head):**
A soil sample, 10 cm long and with a cross-sectional area of 50 cm², is subjected to a constant head of 20 cm. If the hydraulic conductivity is $1 \times 10^{-3}$ cm/s, what is the flow rate in cm³/s?

**Answer 1:**
$k = 1 \times 10^{-3}$ cm/s
$L = 10$ cm
$A = 50$ cm²
$\Delta h = 20$ cm

$Q = k \cdot \frac{\Delta h}{L} \cdot A$
$Q = (1 \times 10^{-3} \text{ cm/s}) \cdot \frac{20 \text{ cm}}{10 \text{ cm}} \cdot (50 \text{ cm}^2)$
$Q = (1 \times 10^{-3}) \cdot 2 \cdot 50$
$Q = 100 \times 10^{-3} \text{ cm}^3/\text{s}$
$Q = 0.1 \text{ cm}^3/\text{s}$

**Question 2 (Variable Head):**
In a variable head permeability test, a soil sample of length 8 cm and diameter 6 cm was used. The standpipe had a diameter of 0.8 cm. The head dropped from 45 cm to 15 cm in 8 minutes. Calculate the hydraulic conductivity of the soil.

**Answer 2:**
$L = 8$ cm
$A = \pi (3 \text{ cm})^2 = 9\pi \approx 28.27 \text{ cm}^2$ (Sample area)
$a = \pi (0.4 \text{ cm})^2 = 0.16\pi \approx 0.503 \text{ cm}^2$ (Standpipe area)
$h_1 = 45$ cm
$h_2 = 15$ cm
$t = 8 \text{ minutes} = 8 \times 60 = 480 \text{ seconds}$

$k = \frac{aL}{At} \ln \left(\frac{h_1}{h_2}\right)$
$k = \frac{0.503 \text{ cm}^2 \cdot 8 \text{ cm}}{28.27 \text{ cm}^2 \cdot 480 \text{ s}} \ln \left(\frac{45 \text{ cm}}{15 \text{ cm}}\right)$
$k = \frac{4.024}{13569.6} \ln (3)$
$k \approx 0.0002965 \cdot 1.0986$
$k \approx 0.0003258 \text{ cm/s}$

**Question 3 (Stratified Deposits - Parallel Flow):**
A soil profile consists of three horizontal layers:
*   Layer A: Thickness 4 m, $k = 3 \times 10^{-4}$ m/s
*   Layer B: Thickness 2 m, $k = 8 \times 10^{-5}$ m/s
*   Layer C: Thickness 3 m, $k = 5 \times 10^{-4}$ m/s

Calculate the average permeability for horizontal flow.

**Answer 3:**
$L = 4 + 2 + 3 = 9$ m

$k_{avg, parallel} = \frac{(3 \times 10^{-4})(4) + (8 \times 10^{-5})(2) + (5 \times 10^{-4})(3)}{9}$
$k_{avg, parallel} = \frac{12 \times 10^{-4} + 16 \times 10^{-5} + 15 \times 10^{-4}}{9}$
$k_{avg, parallel} = \frac{0.12 \times 10^{-2} + 0.016 \times 10^{-2} + 0.15 \times 10^{-2}}{9}$
$k_{avg, parallel} = \frac{0.286 \times 10^{-2}}{9}$
$k_{avg, parallel} \approx 0.03178 \times 10^{-2} \text{ m/s} = 3.178 \times 10^{-4} \text{ m/s}$

**Question 4 (Stratified Deposits - Perpendicular Flow):**
Using the same soil profile as in Question 3, calculate the average permeability for vertical flow.

**Answer 4:**
$L = 9$ m

$k_{avg, perpendicular} = \frac{9}{\frac{4}{3 \times 10^{-4}} + \frac{2}{8 \times 10^{-5}} + \frac{3}{5 \times 10^{-4}}}$
$k_{avg, perpendicular} = \frac{9}{13333.33 + 25000 + 6000}$
$k_{avg, perpendicular} = \frac{9}{44333.33}$
$k_{avg, perpendicular} \approx 0.000203 \text{ m/s} = 2.03 \times 10^{-4} \text{ m/s}$

### 7. Important Points to Remember

*   **Permeability** is the ability of a soil to transmit water.
*   **Darcy's Law ($Q = k \cdot i \cdot A$)** governs fluid flow through porous media under laminar conditions.
*   **Hydraulic conductivity ($k$)** is a measure of permeability and depends on soil and fluid properties.
*   **Factors affecting $k$:** Grain size, void ratio, particle shape, fluid viscosity.
*   **Constant Head Test:** For coarse-grained soils, measures flow under a constant head difference.
*   **Variable Head Test:** For fine-grained soils, measures the rate of head decrease in a standpipe.
*   **Stratified Deposits:** Average permeability differs for parallel (arithmetic mean of $k \times L$) and perpendicular (harmonic mean of $L/k$) flow.
*   The **seepage velocity** is higher than the discharge velocity because it accounts for the actual flow path through the voids.
*   Always check units carefully when performing calculations.

---
