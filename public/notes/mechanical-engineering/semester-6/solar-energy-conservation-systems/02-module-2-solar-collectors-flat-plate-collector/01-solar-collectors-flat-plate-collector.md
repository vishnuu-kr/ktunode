---
title: "Solar collectors: Flat plate collector"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bb9"
status: "completed"
scrapedAt: "2026-05-20T18:08:07.078Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS: Module 2: Solar Collectors: Flat Plate Collector

## Topic: Solar Collectors: Flat Plate Collector

This module focuses on understanding the fundamental principles, design, and performance of flat plate solar collectors, a crucial component in many solar energy conservation systems. We will delve into their construction, working principles, heat transfer mechanisms, and performance analysis.

### Course Outcome Alignment:

*   **CO1 (K2):** While this module primarily focuses on collectors, understanding the solar radiation impinging on them is crucial for their performance. (Background knowledge)
*   **CO2 (K1):** This module directly addresses the recall of a specific type of solar collector (flat plate collectors) and their theoretical principles.
*   **CO3 (K3):** This module will equip you with the knowledge to apply thermal analysis techniques to flat plate collectors and understand design principles related to their integration into systems.
*   **CO4 (K2):** While not directly covered in this specific topic, the performance data derived from understanding flat plate collectors will be essential for later economic evaluations of solar systems.

---

## 1. Introduction to Solar Collectors

### 1.1 What are Solar Collectors?

Solar collectors are devices that absorb solar radiation and convert it into usable thermal energy or electrical energy.

*   **Thermal Collectors:** Absorb solar radiation and transfer the heat to a fluid (e.g., water, air, oil).
*   **Photovoltaic (PV) Collectors (Solar Panels):** Convert solar radiation directly into electricity using the photovoltaic effect.

**This module specifically focuses on Thermal Collectors.**

### 1.2 Classification of Solar Collectors

Solar collectors are broadly classified based on their ability to concentrate solar radiation.

*   **Non-Concentrating Collectors:**
    *   **Flat Plate Collectors (FPCs):** These are the focus of this module. They absorb solar radiation over their entire aperture area and do not concentrate it.
    *   **Evacuated Tube Collectors (ETCs):** Similar to FPCs but with evacuated tubes to reduce heat loss.
*   **Concentrating Collectors:**
    *   Use optical elements (mirrors or lenses) to concentrate solar radiation onto a smaller receiver area. Examples include parabolic troughs, parabolic dishes, and Fresnel lenses.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4.

---

## 2. Flat Plate Solar Collectors (FPCs)

### 2.1 Definition and Purpose

A flat plate solar collector is a thermal device designed to absorb solar radiation and transfer the captured heat to a working fluid, typically water or air. They are commonly used for domestic water heating, space heating, and swimming pool heating.

**Key Concept:** FPCs operate at relatively low to medium temperatures and are designed for direct absorption, not concentration.

### 2.2 Components of a Flat Plate Collector

A typical FPC consists of the following main components:

*   **Glazing (Cover):**
    *   **Purpose:** To reduce heat loss by convection and radiation from the absorber plate to the surroundings, while allowing maximum solar radiation to pass through.
    *   **Material:** Typically made of glass (low-iron, tempered glass is preferred for durability and high transmittance) or sometimes plastic (e.g., polycarbonate, acrylic) for lighter and more impact-resistant applications.
    *   **Properties:** High transmissivity for solar radiation, low emissivity in the infrared spectrum (to minimize radiative heat loss).
    *   **Number of Covers:** Single, double, or even triple glazing can be used to improve performance by further reducing heat losses, but at the cost of increased initial cost and reduced solar transmittance.
*   **Absorber Plate:**
    *   **Purpose:** The core component that absorbs solar radiation and transfers the heat to the fluid.
    *   **Material:** Highly absorbent surface with low emissivity. Typically a metal sheet (copper or aluminum) coated with a selective surface.
    *   **Selective Surface:** A coating that has high absorptivity in the solar spectrum (0.3-3 $\mu$m) and low emissivity in the thermal infrared spectrum (3-30 $\mu$m). This is crucial for efficient operation. Examples include black chrome, nickel black, and oxidized copper.
    *   **Design:** Can be a simple flat sheet or have attached fins and tubes for better heat transfer.
*   **Fluid Passages (Tubes or Channels):**
    *   **Purpose:** To carry the working fluid (water or air) that absorbs heat from the absorber plate.
    *   **Types:**
        *   **Integral Fin and Tube:** The absorber plate has tubes or fins bonded to it. This is the most common design for liquid heating.
        *   **Riser and Header:** Parallel tubes (risers) are connected to larger horizontal tubes (headers) at the top and bottom. This arrangement is common for water heating.
        *   **Air Ducts:** For air heating collectors, the air flows through channels formed by the absorber plate and the casing.
*   **Insulation:**
    *   **Purpose:** To minimize heat loss from the back and sides of the collector to the surroundings.
    *   **Material:** Typically fiberglass, mineral wool, or polyurethane foam.
    *   **Placement:** Applied to the back and sides of the collector casing.
*   **Casing (Box):**
    *   **Purpose:** To enclose and protect all the components from the environment and to provide structural integrity.
    *   **Material:** Usually made of metal (e.g., aluminum, galvanized steel) or wood.

**Example:** Imagine a typical solar water heater. The black absorber plate, painted with a special black coating, sits inside an insulated box covered by a glass panel. Water flows through pipes attached to the back of the absorber plate, getting heated by the absorbed sunlight.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4; Goswami, Kreith, & Kreider, "Principles of Solar Engineering", Chapter 12.

### 2.3 Working Principle of a Flat Plate Collector

1.  **Solar Radiation Incidence:** Sunlight passes through the glazing and strikes the absorber plate.
2.  **Absorption:** The selective coating on the absorber plate absorbs most of the incident solar radiation.
3.  **Heat Transfer to Fluid:** The absorbed solar energy heats the absorber plate. This heat is then transferred to the working fluid flowing through the tubes or channels attached to the plate. The primary modes of heat transfer here are conduction and convection.
4.  **Heat Loss:** The collector loses heat to the surroundings through conduction, convection, and radiation from its surfaces (primarily the glazing).
5.  **Fluid Outlet:** The heated fluid leaves the collector and is transported to where the thermal energy is needed (e.g., storage tank for water heating).

**Key Concept:** The efficiency of an FPC is determined by the balance between the absorbed solar energy and the heat losses.

---

## 3. Heat Transfer Mechanisms in FPCs

Understanding heat transfer is crucial for analyzing and designing FPCs. The main heat transfer processes involved are:

### 3.1 Heat Gain

*   **Solar Radiation Absorption:** The primary mechanism for gaining heat. The rate of heat absorbed is:
    $Q_{abs} = \alpha \cdot I_{AB} \cdot A_{abs}$
    Where:
    *   $Q_{abs}$ is the rate of absorbed solar radiation (W)
    *   $\alpha$ is the absorptivity of the selective surface (dimensionless)
    *   $I_{AB}$ is the solar radiation incident on the absorber plate (W/m²)
    *   $A_{abs}$ is the area of the absorber plate (m²)

### 3.2 Heat Losses

Heat is lost from the collector to the surroundings through three main mechanisms:

*   **Convection from Glazing to Ambient Air (Top Loss):**
    *   **Mechanism:** Heat transfer from the outer surface of the glazing to the surrounding air due to wind.
    *   **Affected by:** Wind speed, glazing surface temperature, ambient air temperature.
    *   **Formula (simplified):** $Q_{conv, top} = h_{c,top} \cdot A_{glaz} \cdot (T_{glaz,out} - T_{amb})$
        *   $h_{c,top}$ is the convective heat transfer coefficient from the outer glazing surface.
        *   $A_{glaz}$ is the area of the glazing.
        *   $T_{glaz,out}$ is the outer surface temperature of the glazing.
        *   $T_{amb}$ is the ambient air temperature.
*   **Radiation from Glazing to Ambient Sky (Top Loss):**
    *   **Mechanism:** Heat transfer from the outer surface of the glazing to the cooler sky through thermal radiation.
    *   **Affected by:** Glazing surface temperature, sky temperature, emissivity of the glazing.
    *   **Formula (simplified):** $Q_{rad, top} = \epsilon_{glaz} \cdot \sigma \cdot A_{glaz} \cdot (T_{glaz,out}^4 - T_{sky}^4)$
        *   $\epsilon_{glaz}$ is the emissivity of the outer glazing surface.
        *   $\sigma$ is the Stefan-Boltzmann constant.
        *   $T_{sky}$ is the effective sky temperature.
*   **Convection and Radiation from Absorber Plate to Glazing (Internal Loss):**
    *   **Mechanism:** Heat transfer from the absorber plate to the inner surface of the glazing through convection and radiation across the gap between them.
    *   **Affected by:** Temperature difference between absorber and glazing, air gap width, properties of the surfaces (emissivity), presence of multiple glazings.
    *   **Combined Loss (often represented by a single coefficient):** $Q_{loss,int} = U_{L} \cdot A_{abs} \cdot (T_{abs} - T_{glaz,in})$
        *   $U_{L}$ is the overall heat loss coefficient for the collector (W/m²·K). This coefficient accounts for convection and radiation between the absorber and the inner glazing surface.
        *   $T_{abs}$ is the absorber plate temperature.
        *   $T_{glaz,in}$ is the inner surface temperature of the glazing.
*   **Conduction and Convection from Back and Sides:**
    *   **Mechanism:** Heat loss through the insulation and casing.
    *   **Affected by:** Insulation material and thickness, casing properties, ambient temperature.
    *   **Formula (simplified):** $Q_{loss,back/sides} = U_{back} \cdot A_{abs} \cdot (T_{abs} - T_{amb})$
        *   $U_{back}$ is the overall heat loss coefficient for the back and sides.

**Important Note:** Calculating the precise values of these coefficients ($h_{c,top}$, $U_L$, $U_{back}$) involves complex correlations and depends on various parameters like collector geometry, fluid properties, and environmental conditions. These are often determined empirically or through numerical simulations.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4; Goswami, Kreith, & Kreider, "Principles of Solar Engineering", Chapter 12; Tiwari, "Handbook of Solar Energy", Chapter 6.

---

## 4. Performance Analysis of FPCs

The performance of an FPC is typically evaluated by its **efficiency**, which is the ratio of useful heat gained by the fluid to the incident solar radiation.

### 4.1 Useful Heat Gain ($Q_u$)

The rate of useful heat gained by the working fluid is the absorbed solar energy minus all heat losses.

$Q_u = \alpha \cdot I_{AB} \cdot A_{abs} - U_L \cdot A_{abs} \cdot (T_{abs} - T_{amb})$

However, the absorber plate temperature ($T_{abs}$) is usually not directly known. A more practical approach uses the mean fluid temperature ($T_f$).

$Q_u = \dot{m} \cdot c_p \cdot (T_{f,out} - T_{f,in})$
Where:
*   $\dot{m}$ is the mass flow rate of the working fluid (kg/s)
*   $c_p$ is the specific heat capacity of the working fluid (J/kg·K)
*   $T_{f,out}$ is the outlet fluid temperature (°C or K)
*   $T_{f,in}$ is the inlet fluid temperature (°C or K)

### 4.2 Collector Efficiency ($\eta$)

The collector efficiency is defined as:

$\eta = \frac{Q_u}{I_s \cdot A_c}$
Where:
*   $Q_u$ is the useful heat gained (W)
*   $I_s$ is the solar irradiance on the collector aperture (W/m²)
*   $A_c$ is the collector aperture area (m²) (usually approximated as $A_{abs}$)

**The Hottel-Whillier-Bliss (HWB) Equation:**

A widely used model to predict the useful heat gain is the HWB equation, which relates the useful heat gain to the collector parameters and operating conditions. It is often expressed in terms of the fluid inlet temperature ($T_{f,in}$) and ambient temperature ($T_{amb}$).

$Q_u = F_R \cdot A_c \cdot [ \alpha \cdot I_s - U_L \cdot (T_{f,in} - T_{amb}) ]$
Where:
*   $F_R$ is the collector heat removal factor (dimensionless). It represents the ratio of the actual useful heat gain to the heat gain if the entire collector area were at the inlet fluid temperature. It accounts for the fact that the absorber plate is hotter than the inlet fluid.
*   $\alpha$ is the effective absorptivity of the absorber.
*   $I_s$ is the solar irradiance on the collector aperture.
*   $U_L$ is the overall heat loss coefficient of the collector.
*   $T_{f,in}$ is the inlet fluid temperature.
*   $T_{amb}$ is the ambient temperature.

**Collector Efficiency in terms of $F_R$ and $U_L$:**

$\eta = \frac{F_R \cdot A_c \cdot [ \alpha \cdot I_s - U_L \cdot (T_{f,in} - T_{amb}) ]}{I_s \cdot A_c}$

$\eta = F_R \cdot \alpha - F_R \cdot U_L \cdot \frac{(T_{f,in} - T_{amb})}{I_s}$

This equation shows that the efficiency is a linear function of the temperature difference $\frac{(T_{f,in} - T_{amb})}{I_s}$, which is often referred to as the "fluid temperature parameter" or "dimensionless temperature difference."

**Important Points:**

*   **$F_R$ vs. $F'$:** $F_R$ is the collector heat removal factor, while $F'$ is the fin efficiency factor. $F_R$ is always less than or equal to $F'$.
    $F_R = \frac{\dot{m} c_p}{\alpha A_c} (1 - e^{-\frac{F' U_L A_c}{\dot{m} c_p}})$
*   **$U_L$:** The overall heat loss coefficient is a complex parameter and depends on many factors, including glazing properties, insulation, and ambient conditions. Typical values for FPCs range from 2 to 10 W/m²K.
*   **$\alpha$:** The effective absorptivity depends on the absorber coating and can range from 0.9 to 0.98.

**Graphical Representation:** Collector efficiency is often plotted against the fluid temperature parameter $\frac{(T_{f,in} - T_{amb})}{I_s}$. This plot is usually a straight line with a negative slope, allowing for graphical determination of collector performance.

**Example:** If a collector has $F_R \alpha = 0.7$ and $F_R U_L = 5$ W/m²K, its efficiency at a fluid temperature parameter of 0.02 m²K/W would be:
$\eta = 0.7 - 5 \cdot (0.02) = 0.7 - 0.1 = 0.6$ or 60%.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4; Goswami, Kreith, & Kreider, "Principles of Solar Engineering", Chapter 12; Tiwari, "Handbook of Solar Energy", Chapter 6.

---

## 5. Factors Affecting FPC Performance

Several factors influence the efficiency and output of a flat plate solar collector:

*   **Solar Irradiance ($I_s$):** Higher irradiance leads to higher heat gain and efficiency (up to a point where heat losses become dominant).
*   **Fluid Inlet Temperature ($T_{f,in}$):** Higher inlet temperature increases the temperature difference between the absorber and the fluid, leading to higher heat losses and lower efficiency.
*   **Ambient Temperature ($T_{amb}$):** Lower ambient temperature increases heat losses, reducing efficiency.
*   **Collector Construction:**
    *   **Absorber Coating:** Selective surfaces significantly improve performance over non-selective black paint.
    *   **Glazing Properties:** High transmissivity and low emissivity of the glazing are crucial. The number of glazings also affects performance (more glazings reduce losses but also reduce transmittance).
    *   **Insulation:** Better insulation reduces back and side losses.
    *   **Air Gap:** The width of the air gap between the absorber and glazing influences convective and radiative heat transfer.
*   **Fluid Flow Rate ($\dot{m}$):**
    *   **Low Flow Rate:** Results in higher outlet fluid temperatures but also higher absorber plate temperatures, leading to increased heat losses. $F_R$ is lower.
    *   **High Flow Rate:** Results in lower outlet fluid temperatures but lower absorber plate temperatures, reducing heat losses. $F_R$ is higher, but the temperature rise is less.
    *   **Optimal Flow Rate:** There exists an optimal flow rate that maximizes useful heat gain.
*   **Collector Orientation and Tilt:** The angle and direction of the collector affect the amount of solar radiation incident on it.
*   **Wind Speed:** Higher wind speeds increase convective heat loss from the outer glazing surface.
*   **Collector Fouling:** Dust or dirt on the glazing reduces the amount of solar radiation reaching the absorber.

**Important Point:** The performance of an FPC is highly dependent on the difference between the collector fluid temperature and the ambient temperature, relative to the incident solar radiation.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4; Goswami, Kreith, & Kreider, "Principles of Solar Engineering", Chapter 12.

---

## 6. Types of Flat Plate Collectors

While the basic design is similar, FPCs can be categorized based on the working fluid:

### 6.1 Liquid Flat Plate Collectors

*   **Working Fluid:** Water or a mixture of water and antifreeze (glycol).
*   **Design:** Typically feature riser tubes bonded to the absorber plate, connected to inlet and outlet headers.
*   **Applications:** Domestic water heating, solar heating systems, solar cooling systems.
*   **Advantages:** High heat transfer coefficients, suitable for space heating and hot water.
*   **Disadvantages:** Risk of freezing in cold climates (requires antifreeze or drain-back systems), potential for corrosion.

### 6.2 Air Flat Plate Collectors

*   **Working Fluid:** Air.
*   **Design:** Air flows through channels formed by the absorber plate and the casing. The absorber might be a perforated sheet or corrugated fin.
*   **Applications:** Space heating, crop drying.
*   **Advantages:** No freezing issues, simpler plumbing.
*   **Disadvantages:** Lower heat transfer coefficients compared to liquids, requires larger ducts and fans for circulation, can be less efficient for water heating applications.

**Reference:** Sukhatme & Sukhatme, "Solar Energy", Chapter 4.

---

## 7. Key Design Considerations for FPCs

Designing an effective FPC involves optimizing several parameters:

*   **Absorber Plate Area ($A_{abs}$):** Influences total heat gain and cost.
*   **Absorber Plate Material and Coating:** Selection of high-absorptivity, low-emissivity selective surfaces.
*   **Fluid Passages:** Type (riser-and-header, integral fin), diameter, and spacing of tubes to ensure adequate heat transfer and minimize pressure drop.
*   **Glazing:** Number of covers, material, transmissivity, and emissivity.
*   **Insulation:** Type, thickness, and placement to minimize heat loss.
*   **Collector Tilt and Orientation:** For optimal energy collection based on latitude and season.
*   **Flow Rate:** To balance heat removal with fluid temperature rise.

---

## 8. Practice Questions and Answers

**Question 1:** List the main components of a flat plate solar collector and briefly describe the function of each.

**Answer:**
1.  **Glazing:** Reduces heat loss by convection and radiation from the absorber plate, allows solar radiation to pass.
2.  **Absorber Plate:** Absorbs solar radiation and transfers heat to the working fluid. Often coated with a selective surface.
3.  **Fluid Passages:** Tubes or channels through which the working fluid flows to collect heat.
4.  **Insulation:** Minimizes heat loss from the back and sides of the collector.
5.  **Casing:** Protects the internal components from the environment and provides structural support.

**Question 2:** What is a "selective surface" on an absorber plate, and why is it important for FPC performance?

**Answer:** A selective surface is a coating that has high absorptivity in the solar spectrum (short wavelengths, 0.3-3 $\mu$m) and low emissivity in the thermal infrared spectrum (long wavelengths, 3-30 $\mu$m). It's important because it maximizes the absorption of incoming solar radiation while minimizing the re-radiation of absorbed heat, thereby increasing the collector's efficiency and operating temperature.

**Question 3:** State the Hottel-Whillier-Bliss (HWB) equation for the useful heat gain of a flat plate collector. Define all the terms.

**Answer:**
$Q_u = F_R \cdot A_c \cdot [ \alpha \cdot I_s - U_L \cdot (T_{f,in} - T_{amb}) ]$

*   $Q_u$: Useful heat gain rate (W)
*   $F_R$: Collector heat removal factor (dimensionless)
*   $A_c$: Collector aperture area (m²)
*   $\alpha$: Effective absorptivity of the absorber (dimensionless)
*   $I_s$: Solar irradiance on the collector aperture (W/m²)
*   $U_L$: Overall heat loss coefficient (W/m²·K)
*   $T_{f,in}$: Inlet fluid temperature (°C or K)
*   $T_{amb}$: Ambient temperature (°C or K)

**Question 4:** Explain how the collector efficiency of an FPC changes with an increase in the fluid inlet temperature ($T_{f,in}$), assuming constant solar irradiance and ambient temperature.

**Answer:** An increase in fluid inlet temperature ($T_{f,in}$) leads to a larger temperature difference between the absorber plate and the ambient surroundings, and also between the absorber and the fluid. This increased temperature difference increases the rate of heat loss ($Q_{loss}$) from the collector. Since the useful heat gain ($Q_u$) is the absorbed solar energy minus the heat losses, an increase in heat loss will result in a decrease in useful heat gain and consequently a decrease in collector efficiency.

**Question 5:** If a flat plate collector has an $F_R \alpha = 0.8$ and $F_R U_L = 6$ W/m²·K, what is its efficiency when the solar irradiance ($I_s$) is 800 W/m² and the temperature difference $(T_{f,in} - T_{amb})$ is 20°C?

**Answer:**
Using the efficiency equation:
$\eta = F_R \cdot \alpha - F_R \cdot U_L \cdot \frac{(T_{f,in} - T_{amb})}{I_s}$

First, calculate the temperature parameter:
$\frac{(T_{f,in} - T_{amb})}{I_s} = \frac{20 \text{ °C}}{800 \text{ W/m}^2} = 0.025 \text{ m}^2\text{K/W}$

Now, substitute the values into the efficiency equation:
$\eta = 0.8 - 6 \text{ W/m}^2\text{K} \cdot (0.025 \text{ m}^2\text{K/W})$
$\eta = 0.8 - 0.15$
$\eta = 0.65$

The collector efficiency is 65%.

---

## 9. Important Points to Remember

*   Flat plate collectors are non-concentrating thermal collectors.
*   Their primary function is to absorb solar radiation and transfer heat to a fluid.
*   Key components are glazing, absorber plate (with selective coating), insulation, and fluid passages.
*   Heat losses (convection, radiation, conduction) are critical factors affecting performance.
*   The Hottel-Whillier-Bliss (HWB) equation is a fundamental tool for predicting useful heat gain and collector efficiency.
*   Collector efficiency is generally a linear function of the temperature parameter $(T_{f,in} - T_{amb})/I_s$.
*   Selective surfaces are crucial for improving FPC performance.
*   Factors like irradiance, temperature difference, flow rate, and collector design significantly impact efficiency.
*   Liquid and air FPCs are the main types, each suited for different applications.

---

This comprehensive set of notes covers the essential aspects of flat plate solar collectors as per the learning outcomes and course objectives. It provides a foundation for understanding the principles and performance of this vital solar energy technology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
