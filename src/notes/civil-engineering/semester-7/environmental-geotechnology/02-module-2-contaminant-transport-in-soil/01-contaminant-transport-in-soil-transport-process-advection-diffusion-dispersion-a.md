---
title: "Contaminant transport in soil -Transport process- Advection, Diffusion, Dispersion and sorption-Fick’s equation"
subject: "ENVIRONMENTAL GEOTECHNOLOGY"
module: "Module 2: Contaminant transport in soil "
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81149e"
status: "completed"
scrapedAt: "2026-05-20T18:58:00.349Z"
---
# Environmental Geotechnology: Module 2 - Contaminant Transport in Soil

## Topic: Contaminant Transport Processes and Fick's Equation

### 1. Introduction to Contaminant Transport in Soil

Contaminant transport in soil is the movement of undesirable substances (contaminants) through the soil matrix. Understanding these processes is crucial for assessing environmental risks, designing remediation strategies, and managing contaminated sites.

**Key Concepts:**

*   **Contaminant:** Any substance that is present in soil at concentrations that pose a risk to human health or the environment. Examples include heavy metals, organic chemicals (e.g., petroleum hydrocarbons, pesticides), and radioactive isotopes.
*   **Soil Matrix:** The solid components of soil (minerals, organic matter) and the pore spaces between them, which can be filled with air or water.
*   **Transport Processes:** The physical and chemical mechanisms that cause contaminants to move from one location to another within the soil.

### 2. Contaminant Transport Processes

#### 2.1 Advection

**Definition:** Advection is the bulk movement of contaminants carried by the flow of the pore fluid (typically water) through the soil. It's driven by hydraulic gradients.

**Key Concepts:**

*   **Hydraulic Gradient:** The change in hydraulic head over a distance. A higher hydraulic gradient indicates a faster flow rate.
*   **Pore Water Velocity (Darcy Velocity vs. Actual Velocity):**
    *   **Darcy Velocity ($v_d$):** The average velocity of water flowing through a porous medium, calculated as $v_d = -K \frac{dh}{dl}$, where $K$ is hydraulic conductivity and $\frac{dh}{dl}$ is the hydraulic gradient. This assumes flow through the entire cross-sectional area.
    *   **Actual Linear Velocity ($v_a$):** The average velocity of the pore water within the pore spaces. It's related to Darcy velocity by $v_a = \frac{v_d}{n_e}$, where $n_e$ is the effective porosity (the volume of interconnected pores).
*   **Contribution to Transport:** Advection is often the dominant transport mechanism for contaminants in saturated soils with significant water flow.

**Example:**
Rainwater infiltrating into the soil carrying dissolved pesticides from agricultural land. The pesticides move downwards with the infiltrating water.

#### 2.2 Diffusion

**Definition:** Diffusion is the movement of contaminants from a region of higher concentration to a region of lower concentration due to random molecular motion.

**Key Concepts:**

*   **Concentration Gradient:** The difference in contaminant concentration over a distance.
*   **Molecular Diffusion:** The inherent random movement of molecules.
*   **Contribution to Transport:** Diffusion is important in situations where there is little or no bulk fluid flow, or when the contaminant is highly concentrated in a small area. It's also significant in the gas phase within unsaturated soils.
*   **Fick's First Law:** Describes the flux of a substance due to diffusion.

**Example:**
A spill of a chemical at a specific point in the soil. Over time, the chemical will spread out into surrounding areas even if there's no water flow, simply due to the random movement of its molecules.

#### 2.3 Dispersion

**Definition:** Dispersion is the spreading of contaminants due to variations in the flow paths within the porous medium. It is a combination of both mechanical dispersion (due to velocity variations) and molecular diffusion.

**Key Concepts:**

*   **Mechanical Dispersion:** Occurs because water doesn't flow at a uniform velocity throughout the pore network. Some fluid particles move faster through wider pores or more direct paths, while others move slower through tortuous paths or narrower pores. This leads to differential travel times and spreading.
*   **Longitudinal Dispersion:** Spreading of the contaminant plume in the direction of flow.
*   **Transverse Dispersion:** Spreading of the contaminant plume perpendicular to the direction of flow.
*   **Dispersivity ($\alpha$):** A parameter that quantifies the extent of dispersion. It's related to the scale of the porous medium (e.g., grain size).
    *   **Longitudinal Dispersivity ($\alpha_L$):** The characteristic length scale of longitudinal dispersion.
    *   **Transverse Dispersivity ($\alpha_T$):** The characteristic length scale of transverse dispersion. Typically, $\alpha_L > \alpha_T$.
*   **Contribution to Transport:** Dispersion is always present when advection occurs and is often more significant than diffusion in contributing to plume spreading, especially at higher flow rates.

**Example:**
A plume of a dissolved contaminant moving through soil with varying pore sizes and tortuosity. The contaminant will spread out laterally and along the direction of flow due to these variations.

#### 2.4 Sorption

**Definition:** Sorption is the process by which contaminants adhere to or are absorbed by the solid soil matrix (minerals and organic matter). It includes **adsorption** (adhesion to the surface) and **absorption** (incorporation into the bulk of the soil matrix).

**Key Concepts:**

*   **Sorption Isotherm:** A relationship that describes the equilibrium partitioning of a contaminant between the solid phase (soil) and the liquid phase (pore water) at a constant temperature.
    *   **Linear Sorption (e.g., Freundlich or Langmuir models approximating linear behavior):** The amount of contaminant sorbed is directly proportional to its concentration in the pore water. Represented by a distribution coefficient ($K_d$) or sorption coefficient.
        *   $S = K_d C$, where $S$ is the concentration of contaminant in the solid phase (e.g., mg/kg), and $C$ is the concentration of contaminant in the liquid phase (e.g., mg/L).
    *   **Non-linear Sorption:** The relationship is not linear, indicating saturation effects or complex binding mechanisms.
*   **Distribution Coefficient ($K_d$):** The ratio of the concentration of a contaminant in the solid phase to its concentration in the liquid phase at equilibrium. It's a measure of the tendency of a contaminant to sorb to soil. Higher $K_d$ means stronger sorption.
*   **Organic Carbon-Water Partitioning Coefficient ($K_{oc}$):** Used for organic contaminants. It represents the partitioning between the organic carbon fraction of the soil and the water. $K_d \approx K_{oc} \times f_{oc}$, where $f_{oc}$ is the fraction of organic carbon in the soil.
*   **Retardation Factor ($R$):** A dimensionless factor that describes how much slower a sorbing contaminant moves through the soil compared to a non-sorbing contaminant.
    *   $R = 1 + \frac{\rho_b K_d}{n_e}$, where $\rho_b$ is the bulk density of the soil.
    *   The actual velocity of the sorbing contaminant is $v_{a, \text{sorbing}} = \frac{v_a}{R}$.
*   **Contribution to Transport:** Sorption acts as a **retarding mechanism**. It reduces the effective concentration of contaminants in the pore water and slows down their movement through the soil.

**Example:**
Heavy metals like lead or cadmium binding to clay minerals or organic matter in the soil. This binding reduces the amount of free metal ions in the pore water, slowing down their transport.

### 3. Fick's Equation for Contaminant Transport

Fick's equations mathematically describe the flux of substances due to diffusion and dispersion.

#### 3.1 Fick's First Law (Diffusion Flux)

**Description:** Relates the flux ($J$) of a substance to the concentration gradient.

**Equation:**
$J = -D \frac{\partial C}{\partial x}$

Where:
*   $J$ = Flux (mass per unit area per unit time, e.g., g/cm²/s)
*   $D$ = Diffusion coefficient (area per unit time, e.g., cm²/s). It represents the mobility of the substance.
*   $\frac{\partial C}{\partial x}$ = Concentration gradient (mass per unit volume per unit length, e.g., g/cm³/cm)

**Interpretation:**
*   The negative sign indicates that the flux is in the opposite direction to the concentration gradient (from high to low concentration).
*   A higher diffusion coefficient ($D$) means faster diffusion.

#### 3.2 Fick's Second Law (Transient Diffusion)

**Description:** Describes how concentration changes over time and space due to diffusion. It's a conservation equation.

**Equation (for one dimension, constant D):**
$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$

Where:
*   $\frac{\partial C}{\partial t}$ = Rate of change of concentration with respect to time.
*   $\frac{\partial^2 C}{\partial x^2}$ = Second spatial derivative of concentration, representing the curvature of the concentration profile.

**Interpretation:**
*   This equation predicts how the concentration distribution of a diffusing substance evolves over time.
*   It's a partial differential equation (PDE).

#### 3.3 Dispersion Equation (Advection-Dispersion Equation)

**Description:** Combines advection and dispersion to describe the overall transport of contaminants in flowing porous media.

**Equation (simplified for one dimension, constant velocity and dispersion coefficient, no source/sink, and with sorption):**
$R \frac{\partial C}{\partial t} = -v_a \frac{\partial C}{\partial x} + D_L \frac{\partial^2 C}{\partial x^2}$

Where:
*   $R$ = Retardation factor (accounts for sorption).
*   $v_a$ = Actual linear velocity of the pore fluid.
*   $D_L$ = Longitudinal dispersion coefficient (combines mechanical dispersion and diffusion in the direction of flow).

**More General Form (including transverse dispersion and potentially reactions):**
$\frac{\partial C}{\partial t} + \frac{\rho_b}{\theta} \frac{\partial S}{\partial t} = \frac{\partial}{\partial x_i} (D_{ij} \frac{\partial C}{\partial x_j}) - v_i \frac{\partial C}{\partial x_i}$

Where:
*   $\theta$ = Volumetric water content.
*   $\frac{\rho_b}{\theta} \frac{\partial S}{\partial t}$ = Term accounting for sorption/desorption (if assuming a relation between S and C like $S = K_d C$, this simplifies).
*   $D_{ij}$ = Dispersivity tensor (accounts for longitudinal and transverse dispersion).
*   $v_i$ = Seepage velocity (actual pore water velocity) in the $x_i$ direction.

**Key Takeaway:** The advection-dispersion equation is a fundamental tool in environmental geotechnology for modeling how contaminants spread through the subsurface. The relative importance of advection and dispersion depends on flow velocity and the properties of the porous medium. Sorption (retardation) significantly modifies the effective velocity.

### 4. Practice Questions and Exercises

**Question 1:**
A contaminant is released into a sandy soil with an effective porosity of 0.3. The Darcy velocity of the groundwater is 5 cm/day. If the contaminant undergoes no sorption, what is its actual linear velocity?

**Answer 1:**
Actual linear velocity ($v_a$) = Darcy velocity ($v_d$) / effective porosity ($n_e$)
$v_a = 5 \text{ cm/day} / 0.3 = 16.67 \text{ cm/day}$

**Question 2:**
Consider a contaminant with a distribution coefficient ($K_d$) of 0.5 L/g and a soil bulk density ($\rho_b$) of 1.5 g/cm³. The effective porosity ($n_e$) is 0.25. The actual linear velocity of the pore water is 10 cm/day. Calculate the retardation factor ($R$) and the effective velocity of the contaminant.

**Answer 2:**
First, calculate $R$:
$R = 1 + \frac{\rho_b K_d}{n_e}$
*   Need consistent units for $K_d$. If $K_d$ is in L/g, convert $\rho_b$ to g/L or $K_d$ to cm³/g.
*   Let's convert $K_d$ to cm³/g: 1 L = 1000 cm³. So, $K_d = 0.5 \text{ L/g} \times 1000 \text{ cm³/L} = 500 \text{ cm³/g}$.
*   $R = 1 + \frac{1.5 \text{ g/cm³} \times 500 \text{ cm³/g}}{0.25}$
*   $R = 1 + \frac{750}{0.25} = 1 + 3000 = 3001$

Effective velocity of the contaminant ($v_{\text{contaminant}}$) = Actual linear velocity of pore water ($v_a$) / $R$
$v_{\text{contaminant}} = 10 \text{ cm/day} / 3001 \approx 0.0033 \text{ cm/day}$

**Question 3:**
Fick's First Law describes the relationship between flux and:
a) Time and velocity
b) Concentration and velocity
c) Concentration gradient and diffusion coefficient
d) Time gradient and dispersion coefficient

**Answer 3:**
c) Concentration gradient and diffusion coefficient

**Question 4:**
What is the primary mechanism responsible for the spreading of contaminants in the direction of flow due to variations in pore water velocity?
a) Diffusion
b) Advection
c) Sorption
d) Mechanical Dispersion

**Answer 4:**
d) Mechanical Dispersion

### 5. Important Points to Remember

*   **Advection** is bulk movement driven by water flow.
*   **Diffusion** is molecular movement driven by concentration differences.
*   **Dispersion** is the combination of mechanical spreading and diffusion, always occurring with advection.
*   **Sorption** retards contaminant movement by binding them to the soil matrix.
*   The **Retardation Factor (R)** quantifies the slowing effect of sorption.
*   **Fick's Laws** are fundamental to describing diffusion.
*   The **Advection-Dispersion Equation** is used to model combined transport processes.
*   The relative importance of these processes depends on flow rates, soil properties (porosity, grain size, organic matter), and contaminant properties ($K_d$, solubility).

---
