---
title: "Solar Energy collectors: Solar thermal collectors -Flat plate collectors –Solar concentrators (Tracking concentrators and Non-tracking concentrators)"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 2: Solar Energy collectors: Solar thermal collectors "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464077"
status: "completed"
scrapedAt: "2026-05-20T18:18:24.892Z"
---
# Module 2: Solar Energy Collectors - Solar Thermal Collectors

This module focuses on the fundamental principles and types of solar thermal collectors, which are devices designed to capture solar radiation and convert it into thermal energy (heat). We will explore flat-plate collectors and various types of solar concentrators.

## 1. Introduction to Solar Thermal Collectors

Solar thermal collectors are the backbone of solar thermal energy systems, responsible for absorbing solar irradiance and transferring that heat to a working fluid (e.g., water, air, or a heat transfer fluid). This captured heat can then be used for various applications like water heating, space heating, industrial process heat, and even electricity generation through steam turbines.

**Key Concepts:**

*   **Solar Irradiance:** The amount of solar power received per unit area. Measured in W/m².
*   **Solar Azimuth:** The angular displacement of the sun east or west of true south (in the Northern Hemisphere).
*   **Solar Altitude:** The angle of the sun above the horizon.
*   **Absorptance ($\alpha$):** The fraction of incident solar radiation that is absorbed by the collector surface.
*   **Emittance ($\epsilon$):** The fraction of thermal radiation emitted by the collector surface relative to that of a blackbody at the same temperature.
*   **Transmittance ($\tau$):** The fraction of incident solar radiation that passes through a transparent cover (like glass).

**Types of Solar Thermal Collectors:**

Solar thermal collectors can be broadly categorized into two main types:

1.  **Non-concentrating Collectors:** These collectors have a relatively large aperture area compared to the absorber area. They collect solar radiation over their entire aperture and do not focus it.
2.  **Concentrating Collectors:** These collectors use reflective or refractive surfaces to focus a larger area of sunlight onto a smaller absorber area, thereby increasing the intensity of radiation on the absorber.

---

## 2. Flat Plate Collectors (Non-concentrating Collectors)

Flat plate collectors are the most common type of solar thermal collector used for low to medium-temperature applications (up to 100°C). They are simple in design, relatively inexpensive, and suitable for domestic water heating and space heating.

**Components of a Flat Plate Collector:**

*   **Glazing (Cover):** Typically made of tempered glass or plastic, it reduces heat loss by convection and radiation from the absorber surface. It also protects the absorber from environmental factors.
    *   *Properties of Glazing:* High solar transmittance ($\tau$) and low thermal emittance ($\epsilon$) are desired. Single or double glazing can be used to improve thermal performance by reducing convection and radiation losses.
*   **Absorber Plate:** This is the core component that absorbs solar radiation. It is usually a flat metal plate (often copper or aluminum) with a selective coating that maximizes absorptance ($\alpha$) and minimizes emittance ($\epsilon$).
    *   *Selective Coatings:* These coatings are crucial for enhancing performance. They have high absorptivity in the solar spectrum and low emissivity in the thermal infrared spectrum (e.g., black chrome, titanium nitride).
*   **Fluid Passages (Riser and Header Tubes):** These are attached to the absorber plate and carry the working fluid. The fluid flows through these passages, picking up heat from the absorber.
*   **Insulation:** Located at the back and sides of the collector, it minimizes heat loss to the surroundings. Materials like fiberglass or mineral wool are commonly used.
*   **Casing (Box):** A weather-resistant enclosure that houses all the components.

**Working Principle:**

1.  Solar radiation passes through the glazing and strikes the absorber plate.
2.  The absorber plate heats up due to the absorbed radiation.
3.  Heat is transferred from the absorber plate to the working fluid flowing through the attached tubes via conduction and convection.
4.  The heated fluid then flows out of the collector to be used or stored.
5.  Heat losses from the collector occur through transmission through the glazing, convection from the glazing surface, and radiation from the absorber surface.

**Heat Transfer in a Flat Plate Collector:**

The overall heat transfer can be described by the useful heat gain ($Q_u$) by the working fluid:

$Q_u = F_R (I_b \alpha - U_L (T_{pm} - T_a))$

Where:
*   $F_R$ is the heat removal factor.
*   $I_b$ is the beam solar irradiance on the collector surface (W/m²).
*   $\alpha$ is the absorptance of the absorber.
*   $U_L$ is the overall heat loss coefficient of the collector (W/m²°C).
*   $T_{pm}$ is the mean fluid temperature in the collector (°C).
*   $T_a$ is the ambient temperature (°C).

**Types of Flat Plate Collectors based on fluid:**

*   **Liquid Flat Plate Collectors:** Use water or antifreeze solutions as the working fluid.
*   **Air Flat Plate Collectors (Solar Air Heaters):** Use air as the working fluid. These are simpler and avoid freezing issues but have lower heat transfer coefficients.

**Advantages of Flat Plate Collectors:**

*   Simple design and construction.
*   Low manufacturing cost.
*   Reliable operation.
*   Suitable for a wide range of applications.
*   Can collect diffuse solar radiation.

**Disadvantages of Flat Plate Collectors:**

*   Lower thermal efficiency at higher temperatures.
*   Significant heat losses, especially at high temperatures.
*   Not suitable for high-temperature applications requiring solar concentration.

**Textbook References:**

*   **Twidell & Weir:** Chapters on Flat Plate Collectors detailing their design, heat transfer analysis, and performance evaluation.
*   **Kothari, Singal, & Ranjan:** Sections on solar thermal collectors, with a focus on flat plate collectors, their construction, and working.
*   **Rai:** Provides a good overview of flat plate collector principles and applications.

---

## 3. Solar Concentrators

Solar concentrators utilize optical elements (mirrors or lenses) to focus sunlight from a larger area onto a smaller absorber. This significantly increases the concentration ratio, allowing for higher operating temperatures suitable for power generation (e.g., solar thermal power plants) and industrial processes.

**Key Concepts:**

*   **Concentration Ratio (C):** The ratio of the aperture area (area receiving sunlight) to the absorber area. $C = A_{aperture} / A_{absorber}$. Higher concentration ratios lead to higher operating temperatures.
*   **Optical Efficiency ($\eta_{opt}$):** The efficiency with which incident solar radiation is delivered to the absorber surface, accounting for reflection, absorption, and transmission losses within the optical system.
*   **Geometric Concentration Ratio:** The ratio of the aperture area to the absorber area based purely on geometry.
*   **Intercept Factor:** The fraction of the solar energy reflected or refracted by the concentrator that actually strikes the absorber.

**Types of Solar Concentrators:**

Solar concentrators are classified based on their ability to track the sun:

### 3.1. Non-tracking Concentrators

These concentrators have a fixed orientation and do not follow the sun's movement. Their performance relies on the sun being at a specific angle relative to the concentrator. They are typically used for applications where the sun's path is predictable or for diffuse radiation collection.

**Examples:**

*   **Fixed Concentrating Collectors:**
    *   **Compound Parabolic Concentrator (CPC):** A non-imaging collector that can achieve moderate concentration ratios (typically 3-10). It has a parabolic reflector but is designed to capture radiation from a wider range of angles, allowing for some tolerance in tracking or fixed applications. CPCs can efficiently concentrate diffuse radiation to some extent.
        *   *Design:* Consists of two parabolic sections that are tangent at the absorber.
        *   *Applications:* Used for solar water heating, solar cooling, and photovoltaic-thermal (PV/T) systems where moderate concentration is needed.
    *   **V-Trough Collectors:** Simple trough-shaped reflectors placed around flat plate collectors to increase incident radiation.

**Advantages of Non-tracking Concentrators:**

*   Simpler design, lower cost.
*   No moving parts (for fixed types).
*   Can capture some diffuse radiation (e.g., CPCs).

**Disadvantages of Non-tracking Concentrators:**

*   Lower concentration ratios compared to tracking concentrators.
*   Performance drops significantly as the sun deviates from the optimal angle.
*   Limited to lower to medium-temperature applications.

**Textbook References:**

*   **Twidell & Weir:** Discusses CPCs and their importance in non-imaging optics for solar energy.
*   **Rai:** Covers basic concentrating collector types, including non-imaging designs.

### 3.2. Tracking Concentrators

These concentrators are designed to continuously follow the sun's movement throughout the day to maximize the amount of solar radiation incident on the absorber. This allows for much higher concentration ratios and higher operating temperatures.

**Types of Tracking Concentrators:**

Tracking concentrators can be further categorized based on their optical design:

#### a) Imaging Concentrators

These concentrators form a focused image of the sun on the absorber. They are highly efficient in concentrating beam radiation but are less effective with diffuse radiation.

*   **Parabolic Trough Collectors:**
    *   *Description:* A parabolic reflector (mirror) focuses sunlight onto a linear receiver (tube) located at its focal line.
    *   *Tracking:* Requires single-axis tracking to follow the sun's path from east to west.
    *   *Absorber:* Typically a metal tube coated with a selective surface, often enclosed in a glass envelope with a vacuum to minimize heat losses.
    *   *Working Fluid:* Usually a heat transfer fluid (e.g., synthetic oil, molten salt) that circulates through the receiver.
    *   *Temperatures Achieved:* Can reach 200-400°C.
    *   *Applications:* Large-scale solar thermal power plants (using the hot fluid to generate steam for turbines), industrial process heat.
    *   **Textbook References:** **Twidell & Weir** and **Kothari, Singal, & Ranjan** provide detailed descriptions and performance analysis of parabolic trough collectors.

*   **Parabolic Dish Collectors (Dish Stirling Systems):**
    *   *Description:* A parabolic dish reflector focuses sunlight onto a point receiver located at its focal point.
    *   *Tracking:* Requires dual-axis tracking (both east-west and north-south altitude) for maximum efficiency.
    *   *Absorber:* A small receiver connected to a heat engine (e.g., Stirling engine, Rankine cycle engine) or a heat exchanger.
    *   *Temperatures Achieved:* Can reach very high temperatures (700-1500°C).
    *   *Applications:* Concentrated solar power (CSP) generation, high-temperature industrial processes.
    *   **Textbook References:** Mentioned in **Twidell & Weir** and **Kothari, Singal, & Ranjan** as a high-temperature concentrating technology.

*   **Linear Fresnel Reflectors (LFRs):**
    *   *Description:* Uses a series of long, narrow, flat or slightly curved mirrors to focus sunlight onto a linear receiver tube positioned above the mirrors. The mirrors are arranged to approximate the shape of a parabolic trough but are simpler and less expensive to manufacture.
    *   *Tracking:* Requires single-axis tracking.
    *   *Absorber:* Similar to parabolic troughs, a receiver tube.
    *   *Temperatures Achieved:* 200-300°C.
    *   *Applications:* Solar thermal power generation, industrial process heat.
    *   **Textbook References:** **Twidell & Weir** may touch upon LFRs as an alternative to parabolic troughs.

#### b) Non-imaging Concentrators

These concentrators do not necessarily form a sharp image of the sun but are designed to concentrate radiation from a wide field of view onto the absorber using geometrical optics principles (e.g., total internal reflection). They can concentrate diffuse radiation more effectively than imaging concentrators.

*   **Compound Parabolic Concentrator (CPC):** (Already discussed under non-tracking, but can be designed with tracking for higher concentration).
    *   *High Concentration CPCs:* Can achieve higher concentration ratios by using materials with higher refractive indices and precise designs, often requiring tracking.
    *   *Applications:* High-temperature applications when combined with tracking.

**Advantages of Tracking Concentrators:**

*   Higher concentration ratios.
*   Higher operating temperatures, suitable for power generation.
*   Higher thermal efficiency at higher temperatures.

**Disadvantages of Tracking Concentrators:**

*   More complex design and higher cost due to tracking mechanisms.
*   Require regular maintenance of tracking systems.
*   Primarily collect beam radiation; less effective with diffuse radiation.

**Textbook References:**

*   **Tester:** May offer insights into the system-level integration of concentrating solar power (CSP) technologies.
*   **Çengel & Cimbala:** Likely covers thermodynamic principles related to high-temperature energy conversion from concentrating collectors.

---

## 4. Flat Plate Collectors vs. Solar Concentrators: A Comparison

| Feature             | Flat Plate Collectors                                  | Solar Concentrators (Tracking)                                  |
| :------------------ | :----------------------------------------------------- | :-------------------------------------------------------------- |
| **Concentration Ratio** | Low (C=1)                                              | High (e.g., 10 to >1000)                                        |
| **Operating Temp.** | Low to Medium (up to 100°C)                            | Medium to Very High (200°C to >1500°C)                          |
| **Radiation Type**  | Beam and Diffuse                                       | Primarily Beam Radiation                                        |
| **Tracking**        | Not required (fixed orientation)                       | Single-axis or Dual-axis tracking required                      |
| **Complexity**      | Simple                                                 | Complex (tracking mechanisms, precise optics)                   |
| **Cost**            | Lower                                                  | Higher                                                          |
| **Applications**    | Domestic water heating, space heating, low-temp industrial | Solar thermal power generation, high-temp industrial processes |
| **Efficiency**      | Higher at lower temperatures                           | Higher at higher temperatures                                   |

---

## 5. Alignment with Course Outcomes

*   **CO1: Differentiate between commercial energy systems and alternatives (Knowledge Level: K2)**
    *   This module contributes by showcasing solar thermal collectors as a key alternative energy technology to conventional fossil-fuel-based heating and power generation systems. The comparison between flat plate and concentrating collectors highlights different levels of technological sophistication and application suitability.
*   **CO2: Obtain a detailed knowledge in solar energy implementation for collection, conversion and storage (Knowledge Level: K2)**
    *   This module directly addresses the "collection" aspect of solar energy. It details the design, working, and types of collectors (flat plate and concentrators) that are essential for capturing solar thermal energy. Understanding these collectors is a prerequisite for comprehending subsequent steps like conversion (e.g., to electricity) and storage.
*   **CO3: Understand the possibilities of wind energy and small hydel power plants (Knowledge Level: K2)**
    *   While this module focuses on solar, understanding solar thermal collection is vital for a holistic view of renewable energy. It allows students to compare the technological maturity, applicability, and limitations of solar thermal systems against wind and hydro, contributing to a broader understanding of renewable energy portfolios.
*   **CO4: Gain knowledge about tidal and wave energy, energy from biomass and hydrogen (Knowledge Level: K2)**
    *   Similar to CO3, this module provides a foundational understanding of one specific renewable energy technology (solar thermal). This knowledge base allows for comparative analysis with other renewable sources mentioned in CO4, fostering a comprehensive understanding of the renewable energy landscape.
*   **CO5: Understand about the energy alternatives by hybrid system (Knowledge Level: K2)**
    *   The different types of solar thermal collectors (flat plate vs. concentrators) can be integrated into hybrid systems. For instance, a flat plate collector might handle pre-heating water, while a concentrator could provide higher temperatures for specific industrial needs or power generation. This module provides the building blocks for understanding such hybrid configurations.

---

## 6. Practice Questions and Answers

**Question 1:** What is the primary function of the glazing in a flat plate solar collector?
    *   **Answer:** The glazing (cover) reduces heat loss from the absorber plate by convection and radiation, and it protects the absorber from environmental factors like dust and rain.

**Question 2:** Differentiate between imaging and non-imaging solar concentrators.
    *   **Answer:** Imaging concentrators form a focused image of the sun on the absorber, typically requiring precise tracking and only effective with direct sunlight (e.g., parabolic troughs, dishes). Non-imaging concentrators concentrate radiation without necessarily forming a sharp image, using principles like total internal reflection, and can also effectively concentrate diffuse radiation (e.g., CPCs).

**Question 3:** Which type of solar collector is generally more suitable for domestic water heating, and why?
    *   **Answer:** Flat plate collectors are generally more suitable for domestic water heating because they operate efficiently at the lower to medium temperatures required for this application (typically up to 60-80°C) and can utilize both beam and diffuse solar radiation. They are also simpler and less expensive than tracking concentrators.

**Question 4:** Explain the concept of "Concentration Ratio" for solar concentrators.
    *   **Answer:** The concentration ratio (C) is the ratio of the aperture area (the area receiving sunlight) to the absorber area. It indicates how many times the solar irradiance on the aperture is amplified on the absorber. A higher concentration ratio allows for higher operating temperatures.

**Question 5:** Name two types of tracking solar concentrators and their typical applications.
    *   **Answer:**
        *   **Parabolic Trough Collectors:** Used for solar thermal power plants to generate steam for electricity production and for industrial process heat.
        *   **Parabolic Dish Collectors:** Used for concentrated solar power (CSP) with high-temperature heat engines (like Stirling engines) and for high-temperature industrial applications.

---

## 7. Important Points to Remember

*   **Solar thermal collectors** convert solar radiation into heat.
*   **Flat plate collectors** are non-concentrating, simple, and suitable for low-to-medium temperatures, utilizing both beam and diffuse radiation.
*   **Selective coatings** on absorber plates are crucial for maximizing solar energy capture by having high absorptance and low emittance.
*   **Solar concentrators** use optics to focus sunlight onto a smaller absorber, achieving higher temperatures.
*   **Tracking** is essential for most concentrating collectors to maintain focus on the sun, improving efficiency.
*   **Parabolic troughs** and **parabolic dishes** are key types of tracking, imaging concentrators with different receiver geometries and tracking requirements.
*   **Linear Fresnel Reflectors (LFRs)** offer a simpler alternative to parabolic troughs for linear concentration.
*   **Compound Parabolic Concentrators (CPCs)** are versatile non-imaging collectors that can concentrate diffuse radiation and are used in various applications.
*   The choice between flat plate and concentrating collectors depends on the required operating temperature, application, cost considerations, and availability of direct vs. diffuse solar radiation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
