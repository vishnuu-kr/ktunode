---
title: "Determination of heat transfer coefficients in forced convection"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 10: Determination of heat transfer coefficients in forced convection"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636bf"
status: "completed"
scrapedAt: "2026-05-20T18:02:15.962Z"
---
# THERMAL ENGINEERING LAB-1: Module 10 - Determination of Heat Transfer Coefficients in Forced Convection

## 1. Introduction to Forced Convection

### 1.1 What is Convection?

Convection is a mode of heat transfer that occurs due to the bulk movement of a fluid (liquid or gas). This movement can be either **natural** (driven by density differences due to temperature gradients) or **forced** (driven by external means like a fan or pump).

### 1.2 Forced Convection

In forced convection, the fluid is forced to move over a surface by an external device, such as a fan, pump, or wind. This external stirring significantly enhances the rate of heat transfer compared to natural convection.

**Key Concept:** The effectiveness of forced convection depends on the velocity of the fluid and the geometry of the surface. Higher fluid velocities lead to higher heat transfer rates.

### 1.3 Importance in Thermal Engineering

Forced convection plays a crucial role in numerous engineering applications, including:

*   **Cooling of electronic components:** Fans in computers, heatsinks with forced airflow.
*   **HVAC systems:** Air conditioners, heaters, forced ventilation.
*   **Automotive engines:** Radiators with fans.
*   **Industrial processes:** Drying, curing, heat treatment of materials.
*   **Power generation:** Cooling of turbines and generators.

## 2. Heat Transfer Coefficient (h)

### 2.1 Definition

The heat transfer coefficient ($h$) is a proportionality constant that relates the heat transfer rate per unit area to the temperature difference between a surface and the adjacent fluid. It quantifies the efficiency of heat transfer by convection.

The fundamental equation for convective heat transfer is Newton's Law of Cooling:

$$ Q_{conv} = h \cdot A \cdot (T_s - T_\infty) $$

Where:
*   $Q_{conv}$ is the rate of heat transfer by convection (Watts, W).
*   $h$ is the convective heat transfer coefficient (W/m²·K).
*   $A$ is the heat transfer surface area (m²).
*   $T_s$ is the surface temperature (K or °C).
*   $T_\infty$ is the bulk fluid temperature (K or °C).

### 2.2 Factors Affecting 'h' in Forced Convection

The convective heat transfer coefficient ($h$) is not a material property like thermal conductivity. It depends on a complex interplay of several factors:

*   **Fluid Properties:**
    *   **Thermal conductivity ($k$)**: Higher thermal conductivity generally leads to higher $h$.
    *   **Viscosity ($\mu$ or $\nu$)**: Higher viscosity can hinder fluid motion, potentially lowering $h$.
    *   **Density ($\rho$)**: Affects momentum and buoyancy forces.
    *   **Specific heat ($c_p$)**: Higher specific heat means the fluid can absorb more heat for a given temperature rise.
*   **Flow Characteristics:**
    *   **Fluid Velocity ($V$)**: The most dominant factor in forced convection. Higher velocity means more fluid turnover and higher heat transfer.
    *   **Flow Regime (Laminar vs. Turbulent)**: Turbulent flow generally results in significantly higher $h$ due to increased mixing.
*   **Geometry of the Surface:**
    *   **Shape and size**: Flat plates, cylinders, spheres, tubes, fins.
    *   **Surface roughness**: Can promote turbulence.
*   **Flow Arrangement:**
    *   **Internal flow** (e.g., flow inside a pipe) vs. **External flow** (e.g., flow over a flat plate).

**Important Point to Remember:** $h$ is often a correlation that depends on dimensionless numbers that group these various factors.

## 3. Dimensionless Numbers in Forced Convection

Dimensionless numbers are crucial for correlating experimental data and developing predictive models for heat transfer. They represent the ratio of different physical phenomena.

### 3.1 Reynolds Number (Re)

*   **Definition:** The Reynolds number is the ratio of inertial forces to viscous forces within the fluid. It characterizes the flow regime.

    $$ Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu} $$

    Where:
    *   $\rho$ is the fluid density (kg/m³).
    *   $V$ is the characteristic velocity of the fluid (m/s).
    *   $D$ is a characteristic length (e.g., pipe diameter for internal flow, length of plate for external flow) (m).
    *   $\mu$ is the dynamic viscosity of the fluid (Pa·s or N·s/m²).
    *   $\nu = \mu/\rho$ is the kinematic viscosity (m²/s).

*   **Significance:**
    *   **Laminar Flow ($Re < 2300$ for internal flow):** Fluid particles move in smooth, parallel layers. Heat transfer is mainly by conduction across layers.
    *   **Transitional Flow ($2300 \lesssim Re \lesssim 10000$ for internal flow):** Flow is unstable, with intermittent bursts of turbulence.
    *   **Turbulent Flow ($Re > 10000$ for internal flow):** Fluid particles move chaotically, with significant eddies and mixing. This greatly enhances convective heat transfer.

*   **Example:** Water flowing through a pipe. If the velocity is low, the flow might be laminar. If the velocity is high, it will likely be turbulent.

### 3.2 Prandtl Number (Pr)

*   **Definition:** The Prandtl number is the ratio of momentum diffusivity (kinematic viscosity) to thermal diffusivity. It relates the thickness of the velocity boundary layer to the thermal boundary layer.

    $$ Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k} $$

    Where:
    *   $\nu$ is the kinematic viscosity (m²/s).
    *   $\alpha = k/(\rho c_p)$ is the thermal diffusivity (m²/s).
    *   $\mu$ is the dynamic viscosity (Pa·s).
    *   $c_p$ is the specific heat at constant pressure (J/kg·K).
    *   $k$ is the thermal conductivity (W/m·K).

*   **Significance:**
    *   **Pr = 1 (e.g., gases):** Momentum and thermal boundary layers are of similar thickness.
    *   **Pr > 1 (e.g., oils, water):** Thermal diffusivity is smaller than momentum diffusivity. The thermal boundary layer is thinner than the velocity boundary layer. Heat transfer is relatively slower.
    *   **Pr < 1 (e.g., liquid metals):** Thermal diffusivity is larger than momentum diffusivity. The thermal boundary layer is thicker than the velocity boundary layer. Heat transfer is relatively faster.

*   **Example:** For air, $Pr \approx 0.7$. For water, $Pr \approx 7$. For engine oil, $Pr$ can be around 100 or more.

### 3.3 Nusselt Number (Nu)

*   **Definition:** The Nusselt number is the ratio of convective to conductive heat transfer across the boundary layer. It represents the enhancement of heat transfer due to convection.

    $$ Nu = \frac{h L}{k} $$

    Where:
    *   $h$ is the convective heat transfer coefficient (W/m²·K).
    *   $L$ is the characteristic length (m).
    *   $k$ is the thermal conductivity of the fluid (W/m·K).

*   **Significance:**
    *   **$Nu = 1$**: Heat transfer is purely by conduction (no convection). This occurs in very stagnant fluids or at extremely low velocities.
    *   **$Nu > 1$**: Heat transfer is enhanced by convection. Higher $Nu$ values indicate higher $h$.

*   **Relationship to other dimensionless numbers:** For forced convection, the Nusselt number is typically correlated with the Reynolds and Prandtl numbers:

    $$ Nu = f(Re, Pr) $$

## 4. Correlations for Forced Convection

Correlations are empirical or semi-empirical relationships that express the Nusselt number as a function of Reynolds and Prandtl numbers for specific geometries and flow conditions.

### 4.1 Flow Over a Flat Plate (External Flow)

For flow over a flat plate, the characteristic length $L$ is typically the length of the plate in the direction of flow.

*   **Laminar Flow ($Re_x < 5 \times 10^5$):**
    *   *Local Nusselt Number:*
        $$ Nu_x = 0.332 Re_x^{0.5} Pr^{0.333} \left(\frac{L}{x}\right)^{0.5} $$
        (Cengel, Chapter 7)
        This gives the heat transfer coefficient at a specific point 'x' along the plate.
    *   *Average Nusselt Number:* For a plate of length $L$, the average Nusselt number is:
        $$ Nu_L = 0.664 Re_L^{0.5} Pr^{0.333} $$
        And the average heat transfer coefficient is:
        $$ h = \frac{Nu_L \cdot k}{L} $$

*   **Turbulent Flow ($Re_x > 5 \times 10^5$):**
    *   *Local Nusselt Number:*
        $$ Nu_x = 0.0296 Re_x^{0.8} Pr^{0.333} $$
    *   *Average Nusselt Number:* For a plate of length $L$ starting from the leading edge with a turbulent boundary layer:
        $$ Nu_L = 0.037 Re_L^{0.8} Pr^{0.333} $$
        (Cengel, Chapter 7)
        This correlation is valid for $0.6 \lesssim Pr \lesssim 60$ and $5 \times 10^5 \lesssim Re_L \lesssim 10^7$.
    *   **Mixed Flow (Laminar and Turbulent):** If the boundary layer starts laminar and becomes turbulent, a combined correlation is used, subtracting the laminar contribution from the turbulent one.

        $$ Nu_L = (0.037 Re_L^{0.8} - 871) Pr^{0.333} $$
        (Cengel, Chapter 7)
        This is valid for $0.6 \lesssim Pr \lesssim 60$ and $10^6 \lesssim Re_L \lesssim 10^7$.

**Important Note on Fluid Properties:** For these correlations, fluid properties (like $k$, $\mu$, $c_p$, $\nu$, $\alpha$, $Pr$) should be evaluated at the **film temperature ($T_f$)**:

$$ T_f = \frac{T_s + T_\infty}{2} $$

Where $T_s$ is the surface temperature and $T_\infty$ is the free-stream fluid temperature.

### 4.2 Flow Inside Tubes (Internal Flow)

For flow inside tubes, the characteristic length $L$ is the tube diameter ($D$).

*   **Fully Developed Laminar Flow ($Re < 2300$):**
    *   $$ Nu = 3.66 $$
        This is a constant value for fully developed laminar flow in a circular tube with constant wall temperature.
    *   $$ Nu = 4.36 $$
        This is for fully developed laminar flow with constant wall heat flux.
        (Sachdeva, Chapter 8)

*   **Turbulent Flow ($Re > 10000$):**
    *   **Dittus-Boelter Equation:** A widely used correlation for turbulent flow.
        $$ Nu = 0.023 Re^{0.8} Pr^n $$
        Where:
        *   $n = 0.4$ if the fluid is being heated (bulk temperature increasing).
        *   $n = 0.3$ if the fluid is being cooled (bulk temperature decreasing).
        (Cengel, Chapter 7; Sachdeva, Chapter 8)
        This correlation is valid for $0.7 \lesssim Pr \lesssim 160$, $Re > 10000$, and $L/D > 10$. Fluid properties are evaluated at the bulk mean temperature.

    *   **Sieder-Tate Equation:** Accounts for the effect of large temperature differences, which cause significant variations in viscosity.
        $$ Nu = 0.027 Re^{0.8} Pr^{0.333} \left(\frac{\mu}{\mu_w}\right)^{0.14} $$
        Where $\mu$ is the viscosity at the bulk mean temperature and $\mu_w$ is the viscosity at the wall temperature. (Cengel, Chapter 7; Holman, Chapter 5)

**Important Point to Remember:** For internal flows, the development of the velocity and thermal boundary layers is important. The above correlations for turbulent flow are for **hydrodynamically and thermally fully developed flow**.

## 5. Experimental Determination of Heat Transfer Coefficients

The goal of the lab experiment is to measure the heat transfer rate and temperature difference and then calculate the heat transfer coefficient.

### 5.1 Experimental Setup (Typical)

A typical setup might involve:

*   **Heated Surface:** A metal cylinder or flat plate with a uniform heat source (e.g., electric heater).
*   **Flow Generation:** A fan or blower to force air or another fluid over the heated surface.
*   **Temperature Measurement:** Thermocouples or RTDs to measure:
    *   Surface temperature ($T_s$) at multiple points.
    *   Bulk fluid temperature ($T_\infty$) upstream of the heated surface.
    *   Fluid outlet temperature ($T_{out}$) downstream of the heated surface.
*   **Flow Rate Measurement:** Anemometer (for air velocity) or flow meter (for liquids).
*   **Power Measurement:** Wattmeter to measure the electrical power supplied to the heater.

### 5.2 Procedure (General)

1.  **Setup:** Assemble the apparatus. Ensure all sensors are calibrated and properly connected.
2.  **Establish Flow:** Turn on the fan/blower and adjust the fluid flow rate to a desired level.
3.  **Apply Heat:** Turn on the heater and adjust the power input to a constant value.
4.  **Reach Steady State:** Monitor temperatures until they become constant over time. This indicates steady state has been reached.
5.  **Record Data:** At steady state, record:
    *   Heater power input ($Q_{input}$).
    *   Surface temperatures ($T_{s1}, T_{s2}, ...$).
    *   Bulk fluid inlet temperature ($T_{\infty, in}$).
    *   Fluid outlet temperature ($T_{\infty, out}$) (if applicable for energy balance).
    *   Fluid velocity ($V$) or flow rate.
6.  **Vary Parameters:** Repeat steps 2-5 by changing the fluid velocity and/or heater power input.

### 5.3 Calculations

#### 5.3.1 Heat Transfer Rate ($Q_{conv}$)

The heat transfer rate from the surface to the fluid is usually calculated from the energy balance of the heater.

*   **From Electrical Input:**
    $$ Q_{conv} = Q_{input} - Q_{loss} $$
    Where $Q_{input}$ is the electrical power supplied to the heater. $Q_{loss}$ represents heat losses to the surroundings (e.g., radiation, conduction through insulation). In a well-designed experiment, $Q_{loss}$ is minimized or accounted for.
    *   *Assumption for simplified calculation:* If heat losses are assumed negligible, then $Q_{conv} \approx Q_{input}$. This is often a reasonable first approximation.

*   **From Fluid Energy Balance (if outlet temperature is measured):**
    $$ Q_{conv} = \dot{m} c_p (T_{\infty, out} - T_{\infty, in}) $$
    Where $\dot{m}$ is the mass flow rate of the fluid. This method is more accurate if $Q_{loss}$ is significant.

#### 5.3.2 Average Surface Temperature ($T_s$)

If multiple surface temperature measurements are taken:

$$ T_s = \frac{\sum T_{si}}{n} $$
Where $n$ is the number of thermocouples on the surface.

#### 5.3.3 Heat Transfer Coefficient ($h$)

Using Newton's Law of Cooling:

$$ h = \frac{Q_{conv}}{A (T_s - T_\infty)} $$
Where $A$ is the heat transfer surface area of the object.

#### 5.3.4 Dimensionless Numbers

*   **Calculate fluid properties:** Evaluate $\rho, \mu, c_p, k, \nu, \alpha$ at the film temperature $T_f = (T_s + T_{\infty, in})/2$.
*   **Reynolds Number ($Re$):** Using the appropriate characteristic length ($L$ for flat plate, $D$ for tube).
*   **Prandtl Number ($Pr$):**
*   **Nusselt Number ($Nu$):**

### 5.4 Data Analysis and Comparison

1.  **Plotting:** Plot $h$ versus $V$ (or $Re$) to visualize the trend. Also, plot $Nu$ versus $Re$ and $Pr$.
2.  **Comparison with Correlations:**
    *   Calculate the theoretical Nusselt number ($Nu_{theo}$) using appropriate correlations (e.g., Dittus-Boelter for internal flow, flat plate correlations for external flow) based on the measured $Re$ and $Pr$.
    *   Calculate the theoretical heat transfer coefficient ($h_{theo}$) from $Nu_{theo}$.
3.  **Error Analysis:** Compare the experimentally determined $h$ (or $Nu$) with the theoretical values. Calculate the percentage error.
    $$ \% Error = \frac{|h_{exp} - h_{theo}|}{h_{theo}} \times 100 $$

**Possible sources of error:**
*   Heat losses to surroundings.
*   Inaccurate temperature measurements.
*   Inaccurate flow rate measurements.
*   Non-uniform surface temperature.
*   Development region effects (flow not fully developed).
*   Uncertainty in fluid property values.

## 6. Alignment with Course Outcomes

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    While this experiment doesn't directly measure fuel properties, it involves measuring and utilizing properties like thermal conductivity, viscosity, and specific heat of the working fluid (e.g., air, water). Understanding these properties and how they influence heat transfer is essential. The experimental determination requires accurate measurement of temperatures and flow rates, demonstrating the ability to apply knowledge to practical measurement scenarios.

*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    This is the primary focus of this module. The experiment directly involves **convection**. By measuring heat transfer rates and temperature differences, students evaluate the **convective heat transfer coefficient ($h$)**, which is a key parameter for convection. The calculation of dimensionless numbers like Nusselt number allows for a deeper evaluation of the convective heat transfer process. Understanding the fluid properties at different temperatures relates to their thermal characteristics.

*   **CO3: Analyse the performance of heat exchangers and heat pipes (Knowledge Level: K4)**
    The principles of convective heat transfer, including the calculation of $h$ and the use of dimensionless numbers, are fundamental to analyzing the performance of heat exchangers and heat pipes. This experiment provides hands-on experience in determining a critical parameter ($h$) that directly impacts the effectiveness and efficiency of these devices. A heat exchanger's performance is largely dictated by its convective heat transfer coefficients on both sides.

*   **CO4: Measure solar radiation (Knowledge Level: K4)**
    This outcome is less directly related to this specific module. However, understanding heat transfer mechanisms is crucial for analyzing solar energy systems, including how solar radiation heats surfaces and how that heat is then transferred to fluids via convection.

## 7. Key Points to Remember

*   **Forced convection** significantly enhances heat transfer compared to natural convection due to external fluid motion.
*   The **convective heat transfer coefficient ($h$)** quantifies the efficiency of convective heat transfer.
*   $h$ is not a material property; it depends on fluid properties, flow velocity, and geometry.
*   **Dimensionless numbers** (Re, Pr, Nu) are crucial for correlating heat transfer data.
    *   **Reynolds Number (Re):** Indicates flow regime (laminar/turbulent).
    *   **Prandtl Number (Pr):** Relates momentum and thermal diffusivity, indicating relative thickness of boundary layers.
    *   **Nusselt Number (Nu):** Represents the ratio of convective to conductive heat transfer.
*   **Fluid properties** for correlations should generally be evaluated at the **film temperature ($T_f$)** for external flows and the **bulk mean temperature** for internal flows (with viscosity correction for Sieder-Tate).
*   Careful measurement of **temperatures, flow rates, and power input** is essential for accurate determination of $h$.
*   **Heat losses** are a common source of error and should be minimized or accounted for.
*   Comparing experimental results with **theoretical correlations** helps validate understanding and identify experimental uncertainties.

## 8. Practice Questions

1.  Define the convective heat transfer coefficient. What are its units?
    *   **Answer:** The convective heat transfer coefficient ($h$) is a proportionality constant that relates the heat transfer rate per unit area to the temperature difference between a surface and the adjacent fluid. Its units are W/m²·K.

2.  Explain the significance of the Reynolds number and the Prandtl number in forced convection.
    *   **Answer:** The Reynolds number indicates the flow regime (laminar or turbulent), with turbulent flow leading to higher heat transfer. The Prandtl number relates momentum and thermal diffusivity, affecting the relative thickness of the velocity and thermal boundary layers and hence the convective heat transfer efficiency.

3.  For forced convection of air over a flat plate, if the surface temperature is 100°C and the free-stream air temperature is 20°C, should the fluid properties be evaluated at 20°C, 100°C, or 60°C? Explain why.
    *   **Answer:** Fluid properties should be evaluated at the film temperature, which is $(100°C + 20°C)/2 = 60°C$. This temperature better represents the average thermodynamic state of the fluid in the boundary layer.

4.  A fluid flows through a heated tube. If the Nusselt number correlation is given by $Nu = 0.023 Re^{0.8} Pr^{0.3}$, and the fluid is being cooled, should the exponent for $Pr$ be 0.3 or 0.4?
    *   **Answer:** If the fluid is being cooled, the exponent for $Pr$ should be 0.3 (as per Dittus-Boelter correlation for cooling).

5.  A circular duct of diameter 0.1 m has air flowing through it. The air enters at 20°C and leaves at 70°C. The heat transfer rate from the duct wall to the air is 1000 W. If the mass flow rate of air is 0.05 kg/s, calculate the average heat transfer coefficient, assuming the average surface temperature is 90°C. (Assume $c_p$ for air is 1005 J/kg·K).
    *   **Given:**
        *   $D = 0.1$ m
        *   $T_{in} = 20°C$
        *   $T_{out} = 70°C$
        *   $Q_{conv} = 1000$ W
        *   $\dot{m} = 0.05$ kg/s
        *   $T_s = 90°C$
        *   $c_p = 1005$ J/kg·K
    *   **Solution:**
        *   The heat transfer area $A$ is not directly given, but the question asks for the average heat transfer coefficient. The formula for $h$ is $h = Q_{conv} / (A \cdot (T_s - T_{avg, fluid}))$.
        *   We need to find the average fluid temperature to calculate the temperature difference. The average fluid temperature can be approximated by $(T_{in} + T_{out})/2 = (20 + 70)/2 = 45°C$.
        *   Let's re-read the question. It asks for the average heat transfer coefficient, which implies we should be able to calculate it without the area. This suggests that perhaps a specific type of problem setup is implied, or there might be missing information. However, if we assume a length 'L' of the tube, the area is $A = \pi D L$.
        *   Let's assume the question meant to ask for a calculation that doesn't require 'A' if 'L' is not given, or perhaps it's a simplified scenario.
        *   Let's re-evaluate the question's intent. Usually, to find 'h', you need 'A'. If 'A' is not given, it's likely a problem where 'h' can be determined from other measured parameters or that the question implies a unit area scenario.
        *   Let's consider the context of determining 'h'. The definition of 'h' is $h = Q / (A \Delta T)$. Without 'A', we cannot directly compute 'h'.

        *   **Correction/Clarification for Question 5:** A question asking to calculate 'h' typically provides the heat transfer area. Let's rephrase the question to make it solvable.

        *   **Revised Question 5:** A heated section of a circular duct of diameter 0.1 m and length 2 m has air flowing through it. The air enters at 20°C and leaves at 70°C. The heat transfer rate from the duct wall to the air is 1000 W. If the average surface temperature is 90°C, and the mass flow rate of air is 0.05 kg/s, calculate the average heat transfer coefficient. (Assume $c_p$ for air is 1005 J/kg·K).

        *   **Solution for Revised Question 5:**
            *   Heat Transfer Area, $A = \pi D L = \pi \times 0.1 \text{ m} \times 2 \text{ m} = 0.6283 \text{ m}^2$.
            *   Average Surface Temperature, $T_s = 90°C$.
            *   Bulk Fluid Temperature (inlet), $T_{\infty, in} = 20°C$.
            *   Bulk Fluid Temperature (outlet), $T_{\infty, out} = 70°C$.
            *   Heat Transfer Rate, $Q_{conv} = 1000$ W.
            *   Average heat transfer coefficient, $h$:
                $$ h = \frac{Q_{conv}}{A (T_s - T_{avg, fluid})} $$
                We can use the average fluid temperature for the $\Delta T$:
                $T_{avg, fluid} = \frac{T_{\infty, in} + T_{\infty, out}}{2} = \frac{20°C + 70°C}{2} = 45°C$.
                $$ h = \frac{1000 \text{ W}}{0.6283 \text{ m}^2 (90°C - 45°C)} = \frac{1000 \text{ W}}{0.6283 \text{ m}^2 \times 45 \text{ K}} $$
                $$ h = \frac{1000}{28.2735} \text{ W/m}^2\text{·K} \approx 35.37 \text{ W/m}^2\text{·K} $$

        *   **Alternative approach using energy balance to verify $Q_{conv}$ (if $Q_{conv}$ wasn't given):**
            $Q_{conv} = \dot{m} c_p (T_{\infty, out} - T_{\infty, in})$
            $Q_{conv} = 0.05 \text{ kg/s} \times 1005 \text{ J/kg·K} \times (70°C - 20°C)$
            $Q_{conv} = 0.05 \times 1005 \times 50 = 2512.5$ W.
            *Notice that the provided $Q_{conv}$ (1000W) does not match the energy balance calculation (2512.5W). This indicates a discrepancy in the problem statement or a significant heat loss scenario not accounted for.*
            *Assuming the given $Q_{conv} = 1000$ W is the actual heat transferred to the fluid, we proceed with that value.*

        *   **Let's use the given $Q_{conv} = 1000$ W:**
            $$ h = \frac{1000 \text{ W}}{0.6283 \text{ m}^2 (90°C - 45°C)} \approx 35.37 \text{ W/m}^2\text{·K} $$

## 9. Recommended Textbooks

*   **Heat Transfer a Practical Approach by Yunus A. Cengel:** Excellent for practical applications and clear explanations of correlations. Chapter 7 covers Convection Heat Transfer.
*   **Fundamentals of Engineering, Heat and Mass Transfer by R. C. Sachdeva:** Provides a good balance of theory and problem-solving for engineering students. Chapter 8 deals with convective heat transfer.
*   **Heat transfer by Holman J.P:** A classic and comprehensive textbook. Chapter 5 discusses forced convection.
*   **Heat and Mass Transfer by Frank P. Incropera and David P. Dewitt:** A very thorough and rigorous treatment of the subject. Chapter 7 and 8 cover convection.
*   **Fundamentals of Heat and Mass Transfer by Kothandaraman C.P:** Another solid resource often used in Indian universities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
