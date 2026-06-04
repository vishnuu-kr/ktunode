---
title: "Natural convection – natural convection heat transfer from vertical plate, horizontal and vertical cylinder."
subject: "HEAT AND MASS TRANSFER"
module: "Module 2: Convection heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a9"
status: "completed"
scrapedAt: "2026-05-20T18:00:14.332Z"
---
# HEAT AND MASS TRANSFER: MODULE 2 - CONVECTION HEAT TRANSFER

## Topic: Natural Convection Heat Transfer from Vertical Plate, Horizontal and Vertical Cylinder

This module delves into the principles of convection heat transfer, with a specific focus on **natural convection**. We will explore the fundamental mechanisms driving natural convection and its application to common geometric shapes like vertical plates, horizontal cylinders, and vertical cylinders. This knowledge is crucial for understanding and designing various thermal systems.

---

### 1. Introduction to Convection Heat Transfer

Convection is a mode of heat transfer that occurs in fluids (liquids and gases) due to the bulk movement of the fluid. This fluid motion is either caused by external means (forced convection) or by density differences arising from temperature gradients within the fluid (natural or free convection).

*   **Key Concept:** Convection heat transfer rate is governed by Newton's Law of Cooling:
    $$q = hA(T_s - T_\infty)$$
    where:
    *   $q$ is the heat transfer rate (W)
    *   $h$ is the convective heat transfer coefficient (W/m²·K)
    *   $A$ is the surface area for heat transfer (m²)
    *   $T_s$ is the surface temperature (K or °C)
    *   $T_\infty$ is the fluid temperature far from the surface (K or °C)

*   **Importance:** The convective heat transfer coefficient ($h$) is the key parameter that dictates the rate of convective heat transfer. It depends on various fluid properties, flow characteristics, and geometry of the surface.

---

### 2. Natural Convection: The Driving Force

Natural convection is driven by buoyancy forces that arise from density variations in the fluid due to temperature differences. When a fluid in contact with a heated surface is heated, it expands, becomes less dense, and rises. Cooler, denser fluid then moves in to replace the rising fluid, creating a continuous circulation and hence heat transfer.

*   **Key Concept:** Buoyancy force. For a fluid element of volume $V$, immersed in a fluid with density $\rho_\infty$ and subjected to gravity $g$, the buoyancy force is:
    $$F_B = (\rho_\infty - \rho)Vg$$
    where $\rho$ is the density of the fluid element.

*   **Mechanism:**
    1.  A surface is at a different temperature ($T_s$) than the surrounding fluid ($T_\infty$).
    2.  If $T_s > T_\infty$, the fluid near the surface is heated, its density ($\rho$) decreases.
    3.  The less dense, hotter fluid is buoyed up by the surrounding, denser, cooler fluid.
    4.  This upward motion of the fluid carries thermal energy away from the surface.
    5.  The void left by the rising fluid is filled by cooler fluid from the surroundings, continuing the circulation.

*   **Important Point to Remember:** Natural convection occurs even in the absence of any external fan or pump. It is crucial in applications where forced circulation is not feasible or desirable, such as cooling of electronic components, radiators in buildings, and solar collectors. (Relates to CO2).

*   **Textbook Reference:** Sachdeva (2022), Chapter 10 discusses the fundamental principles of convection. Cengel & Ghajar (2020), Chapter 9 provides a thorough introduction to natural convection.

---

### 3. Dimensionless Numbers in Natural Convection

To generalize the analysis of natural convection and develop correlations for the heat transfer coefficient, several dimensionless numbers are used:

*   **Grashof Number (Gr):** This dimensionless number represents the ratio of buoyancy forces to viscous forces acting within the fluid. It is the primary driving force for natural convection.
    $$Gr = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2}$$
    where:
    *   $g$ is the acceleration due to gravity (m/s²)
    *   $\beta$ is the volumetric thermal expansion coefficient of the fluid (1/K). For ideal gases, $\beta = 1/T$, where $T$ is the absolute temperature (K). Typically, $\beta$ is evaluated at the film temperature $T_f = (T_s + T_\infty)/2$.
    *   $L$ is the characteristic length of the geometry (m)
    *   $\nu$ is the kinematic viscosity of the fluid (m²/s)

*   **Prandtl Number (Pr):** This dimensionless number represents the ratio of momentum diffusivity (kinematic viscosity) to thermal diffusivity. It relates the relative thickness of the velocity and thermal boundary layers.
    $$Pr = \frac{\nu}{\alpha} = \frac{\nu c_p \rho}{k}$$
    where:
    *   $\alpha$ is the thermal diffusivity (m²/s)
    *   $c_p$ is the specific heat at constant pressure (J/kg·K)
    *   $\rho$ is the fluid density (kg/m³)
    *   $k$ is the thermal conductivity (W/m·K)

*   **Rayleigh Number (Ra):** This dimensionless number is the product of the Grashof and Prandtl numbers. It represents the ratio of buoyancy forces to viscous and thermal diffusion forces. The Rayleigh number is often used to characterize the flow regime in natural convection.
    $$Ra = Gr \cdot Pr$$

*   **Nusselt Number (Nu):** This dimensionless number represents the ratio of convective heat transfer to conductive heat transfer across the boundary layer. It is used to determine the convective heat transfer coefficient ($h$).
    $$Nu = \frac{hL}{k}$$
    where $k$ is the thermal conductivity of the fluid.

*   **Important Point to Remember:** The Nusselt number is typically correlated as a function of the Rayleigh number and the Prandtl number for different geometries and flow regimes.

*   **Textbook Reference:** Nag (2011), Chapter 12 discusses dimensionless numbers in convection. Sukhatme (2005), Chapter 7 covers similarity parameters for convection.

---

### 4. Natural Convection from a Vertical Plate

Consider a flat vertical plate of height $L$ and width $W$, maintained at a uniform temperature $T_s$ and immersed in a quiescent fluid at temperature $T_\infty$.

*   **Flow Characteristics:** For a vertical plate, the fluid near the surface is heated, becomes less dense, and rises, forming a boundary layer along the plate. The flow can be laminar or turbulent depending on the Rayleigh number.

*   **Boundary Layer Development:** A thermal boundary layer and a velocity boundary layer develop along the plate. The velocity boundary layer is driven by the buoyancy forces.

*   **Correlations for Heat Transfer:** The average Nusselt number for a vertical plate is generally correlated as a function of the Rayleigh number and Prandtl number.

    *   **Laminar Flow ($10^4 < Ra_L < 10^9$):**
        $$Nu_L = 0.59 \cdot Ra_L^{1/4}$$
        or alternatively, using a Nusselt number based on height $L$:
        $$Nu_L = 0.67 \cdot Ra_L^{1/4}$$
        (Note: Slight variations in correlations exist across textbooks. It's important to be consistent with the definition of $L$).

    *   **Turbulent Flow ($Ra_L > 10^9$):**
        $$Nu_L = 0.10 \cdot Ra_L^{1/3}$$

*   **Characteristic Length:** For a vertical plate, the characteristic length $L$ is usually taken as the height of the plate.

*   **Calculating Heat Transfer Rate:**
    1.  Calculate the film temperature: $T_f = (T_s + T_\infty)/2$.
    2.  Obtain fluid properties ( $\beta$, $\nu$, $k$, $Pr$ ) at $T_f$.
    3.  Calculate the Grashof number ($Gr_L$).
    4.  Calculate the Rayleigh number ($Ra_L = Gr_L \cdot Pr$).
    5.  Determine the flow regime (laminar or turbulent) based on $Ra_L$.
    6.  Use the appropriate Nusselt number correlation to find $Nu_L$.
    7.  Calculate the convective heat transfer coefficient: $h = \frac{Nu_L \cdot k}{L}$.
    8.  Calculate the heat transfer rate: $q = h \cdot A \cdot (T_s - T_\infty)$, where $A = W \cdot L$.

*   **Example:** A vertical copper plate of size $0.5 \text{ m} \times 0.5 \text{ m}$ is at $60^\circ\text{C}$ and is exposed to ambient air at $20^\circ\text{C}$. Calculate the heat loss by natural convection.
    *   **Solution Steps:** (Follow the calculation steps above, assuming air properties at the film temperature of $40^\circ\text{C}$).

*   **Important Point to Remember:** The transition from laminar to turbulent flow for a vertical plate is approximately at $Ra_L \approx 10^9$. Correlations for mixed flow regimes are also available. (Relates to CO2).

*   **Textbook Reference:** Cengel & Ghajar (2020), Section 9-2 for vertical plates. Sachdeva (2022), Chapter 10.

---

### 5. Natural Convection from a Horizontal Cylinder

Consider a horizontal cylinder of diameter $D$ and length $L$, maintained at a uniform temperature $T_s$ and immersed in a quiescent fluid at temperature $T_\infty$.

*   **Flow Characteristics:** For a horizontal cylinder, the heated fluid rises from the entire circumference, forming a plume along the top. The flow is generally assumed to be symmetrical around the cylinder.

*   **Correlations for Heat Transfer:** The average Nusselt number for a horizontal cylinder is correlated as a function of the Rayleigh number and Prandtl number.

    *   **General Correlation (wide range of $Ra_D$):**
        $$Nu_D = 0.53 \cdot Ra_D^{1/4}$$

    *   **For Laminar Flow ($10^4 < Ra_D < 10^9$):**
        $$Nu_D = 0.53 \cdot Ra_D^{1/4}$$

    *   **For Turbulent Flow ($Ra_D > 10^9$):**
        $$Nu_D = 0.125 \cdot Ra_D^{1/3}$$

*   **Characteristic Length:** For a horizontal cylinder, the characteristic length $L$ is taken as the diameter $D$.

*   **Calculating Heat Transfer Rate:**
    1.  Calculate the film temperature: $T_f = (T_s + T_\infty)/2$.
    2.  Obtain fluid properties ( $\beta$, $\nu$, $k$, $Pr$ ) at $T_f$.
    3.  Calculate the Grashof number ($Gr_D$).
    4.  Calculate the Rayleigh number ($Ra_D = Gr_D \cdot Pr$).
    5.  Determine the flow regime based on $Ra_D$.
    6.  Use the appropriate Nusselt number correlation to find $Nu_D$.
    7.  Calculate the convective heat transfer coefficient: $h = \frac{Nu_D \cdot k}{D}$.
    8.  Calculate the heat transfer rate: $q = h \cdot A \cdot (T_s - T_\infty)$, where $A = \pi \cdot D \cdot L$.

*   **Example:** A $0.05 \text{ m}$ diameter horizontal pipe carrying steam at $120^\circ\text{C}$ is exposed to air at $25^\circ\text{C}$. Calculate the heat loss per unit length of the pipe by natural convection.
    *   **Solution Steps:** (Follow the calculation steps above, assuming air properties at the film temperature of $72.5^\circ\text{C}$).

*   **Important Point to Remember:** The characteristic length for a horizontal cylinder is its diameter. (Relates to CO2).

*   **Textbook Reference:** Cengel & Ghajar (2020), Section 9-3 for horizontal cylinders. Nag (2011), Chapter 12.

---

### 6. Natural Convection from a Vertical Cylinder

Consider a vertical cylinder of diameter $D$ and height $L$, maintained at a uniform temperature $T_s$ and immersed in a quiescent fluid at temperature $T_\infty$.

*   **Flow Characteristics:** For a vertical cylinder, the behavior is similar to that of a vertical plate, especially when the diameter $D$ is much smaller than the height $L$. The heated fluid rises along the cylinder surface.

*   **Correlations for Heat Transfer:** When the diameter $D$ is significantly smaller than the height $L$ ($L/D > \approx 20$), the cylinder can be treated similarly to a vertical plate, but the characteristic length should be taken as the height $L$. However, when $L/D$ is smaller, the influence of the circumference becomes more significant.

    *   **When $L/D$ is large (cylinder behaves like a plate):** Use the correlations for a vertical plate with $L$ as the height.
        *   Laminar Flow ($10^4 < Ra_L < 10^9$): $Nu_L = 0.59 \cdot Ra_L^{1/4}$
        *   Turbulent Flow ($Ra_L > 10^9$): $Nu_L = 0.10 \cdot Ra_L^{1/3}$

    *   **A more general correlation for vertical cylinders (often used when $L/D$ is not very large) is based on the diameter $D$ as the characteristic length:**
        $$Nu_D = 0.60 \cdot Ra_D^{1/4}$$
        This correlation is often cited for laminar flow conditions.

*   **Characteristic Length:** When treating as a vertical plate, use height $L$. When using correlations specific to cylinders where the diameter's effect is considered, use diameter $D$. It's crucial to check the definition of the characteristic length in the specific correlation being used.

*   **Calculating Heat Transfer Rate:**
    1.  Calculate the film temperature: $T_f = (T_s + T_\infty)/2$.
    2.  Obtain fluid properties ( $\beta$, $\nu$, $k$, $Pr$ ) at $T_f$.
    3.  Calculate the Grashof number. If using the plate analogy, calculate $Gr_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2}$. If using cylinder-specific correlations, calculate $Gr_D = \frac{g\beta(T_s - T_\infty)D^3}{\nu^2}$.
    4.  Calculate the Rayleigh number ($Ra = Gr \cdot Pr$).
    5.  Determine the flow regime and select the appropriate Nusselt number correlation.
    6.  Calculate the convective heat transfer coefficient: $h = \frac{Nu \cdot k}{L}$ (if using $L$) or $h = \frac{Nu \cdot k}{D}$ (if using $D$).
    7.  Calculate the heat transfer rate: $q = h \cdot A \cdot (T_s - T_\infty)$, where $A = \pi \cdot D \cdot L$.

*   **Example:** A vertical cylinder $0.2 \text{ m}$ in diameter and $1.0 \text{ m}$ in height is at $80^\circ\text{C}$ in air at $30^\circ\text{C}$. Calculate the heat transfer rate by natural convection. Assume $L/D$ is not excessively large.
    *   **Solution Steps:** (Follow calculation steps using diameter $D$ as the characteristic length).

*   **Important Point to Remember:** The behavior of a vertical cylinder can be approximated by that of a vertical plate if the aspect ratio ($L/D$) is large. However, specialized correlations exist for cylinders. (Relates to CO2).

*   **Textbook Reference:** Cengel & Ghajar (2020), Section 9-4 on vertical cylinders. Sukhatme (2005), Chapter 7 discusses various geometries.

---

### 7. Factors Affecting Natural Convection

*   **Temperature Difference ($T_s - T_\infty$):** A larger temperature difference leads to stronger buoyancy forces and thus higher heat transfer rates.
*   **Fluid Properties:** Viscosity, thermal conductivity, density, and specific heat of the fluid significantly influence the Grashof and Prandtl numbers, and hence the heat transfer.
*   **Geometry:** The shape and orientation of the surface (plate, cylinder, sphere) and the characteristic length ($L$, $D$) dictate the flow patterns and the applicable correlations.
*   **Surface Orientation:** Horizontal surfaces exhibit different convection patterns compared to vertical surfaces. For horizontal surfaces, the orientation (heated from below vs. cooled from below) is critical.
*   **Presence of Other Surfaces:** The proximity of other surfaces can affect the fluid circulation and thus the heat transfer.
*   **Inclination Angle:** For inclined plates, the angle of inclination affects the component of gravity that drives the buoyancy flow.

*   **Textbook Reference:** All textbooks in the list provide detailed discussions on factors affecting convection.

---

### 8. Applications of Natural Convection

*   **Cooling of Electronic Components:** Heat sinks relying on natural convection for cooling.
*   **Room Heating and Cooling:** Radiators in buildings, solar thermal collectors.
*   **Cooling of Power Transmission Lines:** Natural convection plays a role in heat dissipation.
*   **Solar Chimneys:** Harnessing natural convection for ventilation or power generation.
*   **Geothermal Energy Systems:** Natural convection in underground fluids.
*   **Heat Exchangers:** Some designs utilize natural convection.

*   **Textbook Reference:** Cengel & Ghajar (2020), Chapter 9 provides examples.

---

### 9. Practice Questions and Answers

**Question 1:** A vertical plate of height $1.0 \text{ m}$ is at $100^\circ\text{C}$ in air at $20^\circ\text{C}$. Calculate the average heat transfer coefficient using the appropriate correlation for natural convection. Assume air properties at the film temperature of $60^\circ\text{C}$. (Air properties: $\beta = 1/333 \text{ K}^{-1}$, $\nu = 18.97 \times 10^{-6} \text{ m}^2/\text{s}$, $k = 0.0281 \text{ W/m}\cdot\text{K}$, $Pr = 0.721$)

**Answer 1:**
1.  Film temperature $T_f = (100+20)/2 = 60^\circ\text{C}$.
2.  Grashof number: $Gr_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2} = \frac{(9.81 \text{ m/s}^2)(1/333 \text{ K}^{-1})(100-20)^\circ\text{C}(1.0 \text{ m})^3}{(18.97 \times 10^{-6} \text{ m}^2/\text{s})^2} \approx 1.03 \times 10^{10}$.
3.  Rayleigh number: $Ra_L = Gr_L \cdot Pr = (1.03 \times 10^{10}) \times 0.721 \approx 7.43 \times 10^9$.
4.  Since $Ra_L > 10^9$, the flow is turbulent.
5.  Turbulent correlation for vertical plate: $Nu_L = 0.10 \cdot Ra_L^{1/3} = 0.10 \cdot (7.43 \times 10^9)^{1/3} \approx 0.10 \cdot 1951 \approx 195.1$.
6.  Heat transfer coefficient: $h = \frac{Nu_L \cdot k}{L} = \frac{195.1 \times 0.0281 \text{ W/m}\cdot\text{K}}{1.0 \text{ m}} \approx 5.48 \text{ W/m}^2\cdot\text{K}$.

**Question 2:** A horizontal cylinder of diameter $0.1 \text{ m}$ and length $2 \text{ m}$ is at $150^\circ\text{C}$ in air at $30^\circ\text{C}$. Calculate the heat transfer rate by natural convection. Use air properties at the film temperature of $90^\circ\text{C}$. (Air properties: $\beta = 1/363 \text{ K}^{-1}$, $\nu = 21.13 \times 10^{-6} \text{ m}^2/\text{s}$, $k = 0.0304 \text{ W/m}\cdot\text{K}$, $Pr = 0.713$)

**Answer 2:**
1.  Film temperature $T_f = (150+30)/2 = 90^\circ\text{C}$.
2.  Grashof number: $Gr_D = \frac{g\beta(T_s - T_\infty)D^3}{\nu^2} = \frac{(9.81 \text{ m/s}^2)(1/363 \text{ K}^{-1})(150-30)^\circ\text{C}(0.1 \text{ m})^3}{(21.13 \times 10^{-6} \text{ m}^2/\text{s})^2} \approx 1.58 \times 10^8$.
3.  Rayleigh number: $Ra_D = Gr_D \cdot Pr = (1.58 \times 10^8) \times 0.713 \approx 1.13 \times 10^8$.
4.  Since $10^4 < Ra_D < 10^9$, the flow is laminar.
5.  Laminar correlation for horizontal cylinder: $Nu_D = 0.53 \cdot Ra_D^{1/4} = 0.53 \cdot (1.13 \times 10^8)^{1/4} \approx 0.53 \cdot 103.0 \approx 54.59$.
6.  Heat transfer coefficient: $h = \frac{Nu_D \cdot k}{D} = \frac{54.59 \times 0.0304 \text{ W/m}\cdot\text{K}}{0.1 \text{ m}} \approx 16.6 \text{ W/m}^2\cdot\text{K}$.
7.  Surface area: $A = \pi \cdot D \cdot L = \pi \times 0.1 \text{ m} \times 2 \text{ m} = 0.628 \text{ m}^2$.
8.  Heat transfer rate: $q = h \cdot A \cdot (T_s - T_\infty) = 16.6 \text{ W/m}^2\cdot\text{K} \times 0.628 \text{ m}^2 \times (150-30)^\circ\text{C} \approx 1250 \text{ W}$.

**Question 3:** What is the primary driving force for natural convection?
**Answer 3:** Buoyancy force, which arises from density differences within the fluid due to temperature gradients.

**Question 4:** For natural convection from a vertical plate, what is the characteristic length used in the Grashof and Nusselt numbers?
**Answer 4:** The height of the plate.

**Question 5:** State the relationship between the Rayleigh number, Grashof number, and Prandtl number.
**Answer 5:** $Ra = Gr \cdot Pr$.

---

### 10. Important Points to Remember

*   **Natural convection is driven by buoyancy forces.**
*   **The Grashof number (Gr) quantifies the ratio of buoyancy to viscous forces.**
*   **The Rayleigh number (Ra) is the product of Grashof and Prandtl numbers and indicates the flow regime.**
*   **The Nusselt number (Nu) relates convective to conductive heat transfer and is used to find the heat transfer coefficient ($h$).**
*   **Characteristic lengths vary with geometry (height for vertical plate/cylinder, diameter for horizontal cylinder).**
*   **Fluid properties are evaluated at the film temperature ($T_f = (T_s + T_\infty)/2$).**
*   **Correlations for laminar and turbulent regimes differ significantly.**
*   **Understand the limitations of the correlations (range of $Ra$, geometry).**

---

### 11. Alignment with Course Outcomes

*   **CO1 (Knowledge Level: K3):** This topic helps understand the fundamental principles of heat conduction as a basis for comparing convective heat transfer (implicit in the definition of Nu).
*   **CO2 (Knowledge Level: K4):** This is directly addressed. We analyze mechanisms of natural convection and understand factors influencing its rate, crucial for designing heat transfer equipment.
*   **CO3 (Knowledge Level: K3):** While this topic is about convection, understanding it is foundational for comparing different heat transfer modes.
*   **CO4 (Knowledge Level: K3):** Understanding natural convection contributes to the broader knowledge of modern cooling techniques and problem-solving in heat transfer.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
