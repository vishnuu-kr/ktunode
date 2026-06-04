---
title: "compressibility"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f7c"
status: "completed"
scrapedAt: "2026-05-20T17:53:59.123Z"
---
# Engineering Thermodynamics: Module 4: Entropy Generation

## Topic: Compressibility

**Learning Outcomes:**

*   Understand the concept of compressibility and its impact on thermodynamic properties.
*   Relate compressibility to the equation of state for gases.
*   Utilize compressibility charts and factors to determine gas properties.
*   Analyze the effect of compressibility on work done and energy balances.
*   Appreciate the limitations of ideal gas assumptions and the need for compressibility considerations.

**Course Outcomes Alignment:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *This topic builds upon basic concepts of pressure, volume, temperature, and introduces the deviation from ideal behavior.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *Compressibility affects the energy balances and work calculations that are derived from the first and second laws.*
*   **CO3:** Conduct first law analysis of open and closed systems (Knowledge Level: K3) - *Compressibility directly influences the calculation of work done and internal energy changes in thermodynamic analyses.*
*   **CO4:** Determine entropy changes associated with different processes (Knowledge Level: K3) - *While not directly calculating entropy generation from compressibility itself, understanding real gas behavior is crucial for accurate entropy calculations where ideal gas assumptions break down.*
*   **CO5:** Determine the properties of pure substances (Knowledge Level: K2, K3) - *This topic is fundamental to determining the properties of real gases, moving beyond simple ideal gas relationships.*

---

### 1. Introduction to Compressibility

*   **Definition:** Compressibility is a measure of the relative change in volume of a fluid (gas or liquid) or a solid in response to a change in pressure or stress. For gases, it is particularly important as their volume is highly sensitive to pressure and temperature changes.
*   **Real vs. Ideal Gases:**
    *   **Ideal Gas:** An ideal gas is a theoretical gas composed of many randomly moving, non-interacting point particles. Its behavior is accurately described by the Ideal Gas Law:
        $$PV = nRT \quad \text{or} \quad PV = mRT$$
        where:
        *   $P$ = pressure
        *   $V$ = volume
        *   $n$ = number of moles
        *   $R$ = universal gas constant
        *   $m$ = mass
        *   $T$ = absolute temperature
        *   $R$ = specific gas constant ($R_{universal}/M$, where $M$ is molar mass)
    *   **Real Gas:** Real gases deviate from ideal gas behavior due to intermolecular forces and the finite volume occupied by gas molecules. These deviations become significant at high pressures and low temperatures.
*   **Why is Compressibility Important?**
    *   **Accurate Property Determination:** For high-pressure or low-temperature applications, the Ideal Gas Law is insufficient. Compressibility must be considered to accurately determine properties like specific volume, enthalpy, and entropy.
    *   **Work Calculations:** The work done during expansion or compression ($W = \int P dV$) is directly affected by the pressure-volume relationship of the gas, which is influenced by compressibility.
    *   **System Design:** In engineering applications involving gases (e.g., turbines, compressors, pipelines), accurate predictions of gas behavior are critical for efficient and safe design.

**Reference (Cengel & Boles):** Chapter 4, "Properties of Pure Substances," introduces the concept of real gas behavior and deviations from ideal gas law. Chapter 12, "Isentropic Flow of Gases," also touches upon compressibility in fluid dynamics.

**Reference (P.K. Nag):** Chapter 2, "Properties of Substances," and Chapter 3, "First Law of Thermodynamics," discuss the behavior of gases and the work done.

---

### 2. Compressibility Factor (Z)

*   **Definition:** The compressibility factor, denoted by $Z$, is a dimensionless quantity used to quantify the deviation of a real gas from ideal gas behavior. It is defined as the ratio of the actual molar volume of a gas to the molar volume it would have if it behaved as an ideal gas at the same temperature and pressure.

    $$Z = \frac{PV}{nRT} = \frac{Pv}{RT}$$
    where:
    *   $Pv$ is the specific molar volume (volume per mole) of the real gas.

*   **Interpretation of Z:**
    *   **Z = 1:** The gas behaves ideally.
    *   **Z < 1:** The gas is more compressible than an ideal gas. This typically occurs at intermediate pressures where attractive intermolecular forces are dominant. The actual volume is less than the ideal volume.
    *   **Z > 1:** The gas is less compressible than an ideal gas. This typically occurs at very high pressures where repulsive intermolecular forces due to molecular volume become dominant. The actual volume is greater than the ideal volume.

*   **Factors Affecting Z:**
    *   **Pressure (P):** Generally, as pressure increases, the deviation from ideal behavior increases.
    *   **Temperature (T):** At higher temperatures, gases tend to behave more ideally.
    *   **Nature of the Gas:** Different gases have different intermolecular forces and molecular sizes, leading to different compressibility behavior.

**Reference (Cengel & Boles):** Chapter 4 extensively uses the compressibility factor to present real gas behavior.

**Reference (P.K. Nag):** Chapter 2 discusses the compressibility factor and its relationship to real gas behavior.

---

### 3. Equations of State for Real Gases

The Ideal Gas Law is a simplification. For real gases, more complex equations of state are used to describe their behavior.

*   **The Generalized Compressibility Chart:** This is a graphical method to estimate the compressibility factor ($Z$) for various gases based on reduced properties.
    *   **Reduced Pressure ($P_r$):**
        $$P_r = \frac{P}{P_{cr}}$$
        where $P_{cr}$ is the critical pressure.
    *   **Reduced Temperature ($T_r$):**
        $$T_r = \frac{T}{T_{cr}}$$
        where $T_{cr}$ is the critical temperature.
    *   **Usage:** By knowing $P_r$ and $T_r$, one can look up the corresponding $Z$ value from a generalized compressibility chart (available in most thermodynamics textbooks). These charts are often divided into regions based on $T_r$.

**Example (Using Generalized Compressibility Chart):**
Determine the specific volume of nitrogen (N₂) at $P = 10$ MPa and $T = 200$ K.
*   From tables, critical properties of N₂ are: $P_{cr} = 3.39$ MPa, $T_{cr} = 126.2$ K.
*   Calculate reduced properties:
    *   $P_r = P/P_{cr} = 10 \text{ MPa} / 3.39 \text{ MPa} = 2.95$
    *   $T_r = T/T_{cr} = 200 \text{ K} / 126.2 \text{ K} = 1.58$
*   From a generalized compressibility chart (look for $P_r \approx 2.95$ and $T_r \approx 1.58$), find $Z \approx 0.85$.
*   Using the real gas equation: $Pv = ZRT$
    *   Specific gas constant for N₂ ($R$): $R = R_{universal} / M_{N_2} = 8.314 \text{ kJ/(kmol}\cdot\text{K)} / 28.013 \text{ kg/kmol} \approx 0.2968 \text{ kJ/(kg}\cdot\text{K)}$
    *   $v = \frac{ZRT}{P} = \frac{0.85 \times 0.2968 \text{ kJ/(kg}\cdot\text{K)} \times 200 \text{ K}}{10 \times 1000 \text{ kPa}} \approx 0.005045 \text{ m}^3\text{/kg}$

**Important Point:** When using generalized charts, ensure you use absolute temperature and pressure, and the correct critical properties.

---

*   **Virial Equations of State:** These equations express the deviation from ideal gas behavior as a power series in terms of molar volume or pressure.
    *   **In terms of molar volume:**
        $$\frac{PV}{RT} = Z = 1 + \frac{B}{v} + \frac{C}{v^2} + \dots$$
    *   **In terms of pressure (low pressure approximation):**
        $$\frac{PV}{RT} = Z = 1 + BP + \frac{C P^2}{RT} + \dots$$
    *   Where $B$, $C$, etc., are virial coefficients, which are functions of temperature. The second virial coefficient ($B$) accounts for the most significant deviation from ideal behavior.

**Reference (Moran & Shapiro):** Chapter 3 discusses equations of state, including virial equations.

---

*   **Cubic Equations of State:** These equations are cubic in volume and are more complex but provide better accuracy over a wider range of conditions.
    *   **Van der Waals Equation:** The first successful real gas equation of state.
        $$ \left(P + \frac{a}{v^2}\right)(v - b) = RT $$
        where:
        *   $a$ and $b$ are constants specific to the gas, accounting for intermolecular attractive forces and molecular volume, respectively.
        *   $\frac{a}{v^2}$ corrects for attractive forces.
        *   $b$ corrects for the finite volume of molecules.
    *   **Redlich-Kwong Equation:** A simpler cubic equation that often provides better results than van der Waals for certain applications.
        $$ P = \frac{RT}{v-b} - \frac{a}{T^{1/2}v(v+b)} $$
    *   **Soave-Redlich-Kwong (SRK) Equation:** An improvement on the Redlich-Kwong equation.
    *   **Peng-Robinson Equation:** Another widely used cubic equation of state.

**Reference (Cengel & Boles):** Chapter 4 discusses these equations in detail.

**Reference (Sonntag, Borgnakke, VanWylen):** Chapter 3 and 4 provide thorough coverage of real gas equations of state.

---

### 4. Compressibility and Thermodynamic Properties

The compressibility factor ($Z$) can be used to relate real gas properties to ideal gas properties.

*   **Specific Volume:**
    $$v = \frac{ZRT}{P}$$

*   **Internal Energy (U) and Enthalpy (H):** For real gases, the change in internal energy and enthalpy depends not only on temperature but also on pressure.
    *   From fundamental thermodynamic relations, for a simple compressible substance:
        $$du = c_v dT + \left(\frac{\partial u}{\partial P}\right)_T dP$$
        $$dh = c_p dT + \left(\frac{\partial h}{\partial P}\right)_T dP$$
    *   The pressure dependence is related to intermolecular forces and is often expressed in terms of deviation functions.
    *   **Enthalpy Deviation Function ($\Delta h = h - h_{ideal}$):**
        $$\Delta h = h - h_{ideal} = \int_{0}^{P} \left[ v - T\left(\frac{\partial v}{\partial T}\right)_P \right] dP$$
        Using $v = ZRT/P$, we can show that:
        $$\Delta h = RT(Z-1) - RT^2 \int_{0}^{P} \left(\frac{\partial Z}{\partial T}\right)_P \frac{dP}{P}$$
        These deviations can be found using generalized enthalpy deviation charts.

*   **Entropy (S):** Similarly, entropy also depends on pressure.
    *   **Entropy Deviation Function ($\Delta s = s - s_{ideal}$):**
        $$\Delta s = s - s_{ideal} = \int_{0}^{P} \left[ \left(\frac{\partial v}{\partial T}\right)_P - \frac{R}{P} \right] dP$$
        Using $v = ZRT/P$, we can show that:
        $$\Delta s = R(Z-1) - RT \int_{0}^{P} \left(\frac{\partial Z}{\partial T}\right)_P \frac{dP}{P}$$
        These deviations can be found using generalized entropy deviation charts.

**Important Point:** For many engineering applications at moderate pressures and temperatures, ideal gas assumptions for enthalpy and entropy changes are acceptable (i.e., $\Delta h \approx \Delta h_{ideal}$, $\Delta s \approx \Delta s_{ideal}$). However, at high pressures and low temperatures, real gas effects become significant, and these deviation functions are crucial for accurate calculations, especially in energy balances involving work and heat transfer.

---

### 5. Compressibility and Work Done

The work done during an expansion or compression process is given by $W = \int_{V_1}^{V_2} P dV$. The pressure-volume relationship for a real gas, dictated by its equation of state, directly influences the work done.

*   **Work Done for Real Gases:**
    *   For a process where the pressure-volume relationship is known (e.g., isothermal, adiabatic), the integral is evaluated using the specific equation of state for the real gas.
    *   For example, isothermal compression of a real gas using the van der Waals equation:
        $$W = \int_{V_1}^{V_2} \left( \frac{RT}{v-b} - \frac{a}{v^2} \right) dv$$
        $$W = RT \ln\left(\frac{v_2-b}{v_1-b}\right) + a\left(\frac{1}{v_2} - \frac{1}{v_1}\right)$$
        This is more complex than the ideal gas isothermal work $W = P_1V_1 \ln(V_2/V_1) = nRT \ln(V_2/V_1)$.

*   **Impact on Compression/Expansion:**
    *   **Compression:** At high pressures, real gases are less compressible ($Z>1$). This means more work is required to compress a real gas compared to an ideal gas, for the same pressure ratio and temperature.
    *   **Expansion:** Conversely, a real gas will do less work during expansion compared to an ideal gas under similar conditions at high pressures.

**Reference (P.K. Nag):** Chapter 3 provides detailed examples of work calculations for various processes, and the effect of real gas behavior can be inferred when using non-ideal equations of state.

---

### 6. Limitations of Ideal Gas Assumptions and Practice

*   **When Ideal Gas Assumptions are Valid:**
    *   At low pressures and high temperatures, real gases approximate ideal gas behavior (Z approaches 1).
    *   Many common engineering applications operate in this regime, making ideal gas assumptions sufficient.

*   **When to Use Compressibility:**
    *   High-pressure systems (e.g., natural gas pipelines, high-pressure storage tanks, refrigeration cycles at low temperatures).
    *   Low-temperature systems where intermolecular forces become significant.
    *   Processes where high accuracy is required.

**Reference (Cengel & Boles):** Chapter 4 reiterates the conditions under which ideal gas assumptions are acceptable and when real gas behavior must be considered.

---

### Practice Questions and Answers

**Question 1:**
What is the compressibility factor ($Z$) for an ideal gas?
*   **Answer:** $Z=1$

**Question 2:**
For a real gas, at what conditions is it most likely to deviate significantly from ideal gas behavior?
*   **Answer:** High pressures and low temperatures.

**Question 3:**
The quantity $\frac{PV}{nRT}$ for a real gas is equal to:
(a) 0
(b) 1
(c) $Z$
(d) $v$
*   **Answer:** (c) $Z$

**Question 4:**
Calculate the compressibility factor ($Z$) for oxygen (O₂) at $P = 20$ MPa and $T = 250$ K. Use the generalized compressibility chart.
*   **Given:**
    *   Critical pressure of O₂ ($P_{cr}$) = 5.08 MPa
    *   Critical temperature of O₂ ($T_{cr}$) = 154.6 K
*   **Solution:**
    *   Reduced pressure, $P_r = P/P_{cr} = 20 \text{ MPa} / 5.08 \text{ MPa} = 3.94$
    *   Reduced temperature, $T_r = T/T_{cr} = 250 \text{ K} / 154.6 \text{ K} = 1.62$
    *   From a generalized compressibility chart (looking at $P_r \approx 3.94$ and $T_r \approx 1.62$), we find $Z \approx 0.9$. (The exact value depends on the specific chart used).

**Question 5:**
If $Z < 1$ for a real gas at a given condition, does it mean the gas is more or less compressible than an ideal gas? What does this imply about the actual volume compared to the ideal volume?
*   **Answer:** If $Z < 1$, the gas is **more compressible** than an ideal gas. This implies that the actual volume ($v$) of the gas is **less** than the ideal volume ($v_{ideal}$) at the same pressure and temperature. This is due to dominant attractive intermolecular forces.

**Question 6:**
Why is it important to consider compressibility in thermodynamic analysis?
*   **Answer:** It is important for accurate determination of properties (volume, internal energy, enthalpy, entropy) and for correct calculation of work done, especially at high pressures and low temperatures where the Ideal Gas Law deviates significantly from real gas behavior.

---

### Important Points to Remember

*   **Compressibility Factor (Z):** A dimensionless ratio that quantifies deviation from ideal gas behavior. $Z = PV/nRT$.
*   **Real Gas Behavior:** Significant deviations from ideal gas law occur at high pressures and low temperatures due to intermolecular forces and finite molecular volume.
*   **Reduced Properties ($P_r, T_r$):** Used with generalized compressibility charts to estimate $Z$ for various gases. $P_r = P/P_{cr}$, $T_r = T/T_{cr}$.
*   **Equations of State:** More complex equations (Virial, Cubic like van der Waals, Redlich-Kwong) are used to describe real gas behavior.
*   **Deviation Functions:** Used to correct ideal gas properties (enthalpy, entropy) for real gas behavior.
*   **Work Calculations:** Compressibility significantly affects the work done during compression and expansion processes, especially at extreme conditions.

---

This concludes the study notes on compressibility for Module 4. Remember to consult the provided textbooks for detailed charts, derivations, and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
