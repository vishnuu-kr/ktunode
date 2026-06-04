---
title: "the Tds relations"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f64"
status: "completed"
scrapedAt: "2026-05-20T17:53:42.965Z"
---
# Engineering Thermodynamics - Module 3: Second Law - Tds Relations

## Topic: The Tds Relations

This module delves into the Second Law of Thermodynamics, focusing on the Kelvin-Planck statement and introducing the fundamental Tds relations. These relations are crucial for understanding entropy changes in various thermodynamic processes and are derived from the first and second laws.

**Course Outcomes Addressed:**
*   **CO1:** Understand basic concepts of thermodynamics (K1, K2) - The Tds relations build upon foundational concepts like internal energy, enthalpy, and entropy.
*   **CO2:** Understand the laws of thermodynamics (K1, K2) - The derivation of Tds relations is a direct application of the First and Second Laws.
*   **CO3:** Conduct first law analysis of open and closed systems (K3) - While Tds relations are derived from the Second Law, understanding their application often involves first law considerations for energy balances.
*   **CO4:** Determine entropy changes associated with different processes (K3) - This is the primary purpose of the Tds relations.
*   **CO5:** Determine the properties of pure substances (K2, K3) - Tds relations are widely used to construct property tables and diagrams for pure substances.

**Learning Outcomes Covered:**
*   Understanding the fundamental Tds relations for simple compressible systems.
*   Deriving and applying the Tds relations for ideal gases.
*   Deriving and applying the Tds relations for incompressible substances.
*   Understanding the significance of Tds relations in determining entropy changes.

---

### 1. Introduction to the Second Law and Entropy

Before diving into the Tds relations, it's essential to recap the core concepts of the Second Law and entropy.

*   **Second Law of Thermodynamics:**
    *   States that the total entropy of an isolated system can only increase over time, or remain constant in ideal cases where the system is in a steady state or undergoing a reversible process.
    *   Introduces the concept of irreversibility and the directionality of natural processes.
*   **Entropy (S):**
    *   A thermodynamic property that measures the degree of randomness or disorder in a system.
    *   In a closed system, the change in entropy is related to heat transfer and temperature.
    *   **Clausius inequality:** For any cyclic process, $\oint \frac{\delta Q}{T} \le 0$. For a reversible process, $\oint \frac{\delta Q_{rev}}{T} = 0$.

**References:**
*   **Cengel & Boles:** Chapter 7 (Second Law of Thermodynamics), Chapter 2 (Properties of Pure Substances) for background on entropy and properties.
*   **P.K. Nag:** Chapter 6 (Second Law of Thermodynamics), Chapter 2 (Properties of Steam) for background on entropy and properties.
*   **Moran & Shapiro:** Chapter 5 (Second Law of Thermodynamics), Chapter 6 (Entropy) for a comprehensive overview of entropy.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 7 (The Second Law of Thermodynamics), Chapter 8 (Entropy) for detailed derivations and applications.

---

### 2. The Fundamental Tds Relations

The Tds relations, also known as the **Gibbs equations** or **Clausius-Gibbs relations**, are fundamental to understanding entropy changes. They provide a mathematical link between temperature, specific heat, and the change in entropy for a system undergoing a process.

These relations are derived by considering a closed system undergoing an infinitesimal reversible process.

**Key Principles Used in Derivation:**
*   **First Law of Thermodynamics (for a closed system):** $\delta Q = dU + \delta W$. For a simple compressible system where $\delta W = P d\nu$, we have $\delta Q = dU + P d\nu$.
*   **Definition of Entropy Change (for a reversible process):** $\delta S = \frac{\delta Q_{rev}}{T}$.
*   **Thermodynamic Property Relations:** For a simple compressible substance, internal energy ($U$) and enthalpy ($H$) are functions of temperature ($T$) and specific volume ($\nu$) or pressure ($P$).

---

### 2.1 Tds Relation for Simple Compressible Systems

Consider a closed system undergoing an infinitesimal reversible process.

**Derivation:**

1.  **Start with the First Law:**
    $\delta Q_{rev} = dU + P d\nu$

2.  **Apply the definition of entropy change:**
    $\delta S = \frac{\delta Q_{rev}}{T}$
    Therefore, $\delta Q_{rev} = T dS$

3.  **Substitute $\delta Q_{rev}$ into the First Law:**
    $T dS = dU + P d\nu$

4.  **Rearrange to get the first Tds relation:**
    $$T ds = du + P d\nu \quad \text{(First Tds Relation)}$$

This equation is a **universal relation** valid for any substance undergoing any process (reversible or irreversible), as $s$, $u$, $P$, and $\nu$ are properties. However, $T$ and $P$ in this context are the *temperature* and *pressure* of the system, and $du$ and $d\nu$ are infinitesimal changes in specific internal energy and specific volume.

**Important Note:** While the derivation uses a reversible process, the resulting equation relates properties ($u, s, P, \nu$) and is therefore valid for any process. The actual heat transfer in an irreversible process would be less than $Tds$.

**Key Concepts:**
*   **Specific Internal Energy (u):** Energy stored within a substance due to its molecular motion and configuration.
*   **Specific Volume ($\nu$):** Volume per unit mass.
*   **Specific Entropy (s):** Entropy per unit mass.
*   **Temperature (T):** Absolute temperature.

---

### 2.2 Tds Relation for Ideal Gases

For an ideal gas, we can express the Tds relations in terms of temperature and pressure or temperature and specific volume. We use the ideal gas law and the specific heat relations.

**Ideal Gas Relations:**
*   Ideal Gas Law: $P\nu = R T$ (where $R$ is the specific gas constant)
*   Specific Internal Energy: $du = c_v dT$
*   Specific Enthalpy: $dh = c_p dT$

**Derivation of Tds Relations for Ideal Gases:**

**First Tds Relation:** $T ds = du + P d\nu$

1.  **Substitute $du = c_v dT$ and $P = \frac{RT}{\nu}$:**
    $T ds = c_v dT + \frac{RT}{\nu} d\nu$

2.  **Divide by $T$:**
    $ds = c_v \frac{dT}{T} + R \frac{d\nu}{\nu}$

3.  **Integrate from state 1 to state 2:**
    $\int_{s_1}^{s_2} ds = \int_{T_1}^{T_2} c_v \frac{dT}{T} + \int_{\nu_1}^{\nu_2} R \frac{d\nu}{\nu}$
    $$s_2 - s_1 = \int_{T_1}^{T_2} c_v \frac{dT}{T} + R \ln\left(\frac{\nu_2}{\nu_1}\right)$$

This is the **first Tds relation for ideal gases (in terms of T and $\nu$)**.

**Second Tds Relation (in terms of T and P):**

1.  **Start with the relation for enthalpy:** $h = u + P\nu$. Differentiating gives $dh = du + P d\nu + \nu dP$.
2.  **Substitute $du = c_v dT$ and $P d\nu = T ds - du$ from the first Tds relation:**
    $dh = c_v dT + (T ds - du) + \nu dP$
    $dh = c_v dT + T ds - (c_v dT) + \nu dP$ (assuming $du=c_vdT$)
    $dh = T ds + \nu dP$

3.  **Rearrange to get the second Tds relation:**
    $$T ds = dh - \nu dP$$

4.  **Substitute $dh = c_p dT$ and $\nu = \frac{RT}{P}$ for an ideal gas:**
    $T ds = c_p dT - \frac{RT}{P} dP$

5.  **Divide by $T$:**
    $ds = c_p \frac{dT}{T} - R \frac{dP}{P}$

6.  **Integrate from state 1 to state 2:**
    $\int_{s_1}^{s_2} ds = \int_{T_1}^{T_2} c_p \frac{dT}{T} - \int_{P_1}^{P_2} R \frac{dP}{P}$
    $$s_2 - s_1 = \int_{T_1}^{T_2} c_p \frac{dT}{T} - R \ln\left(\frac{P_2}{P_1}\right)$$

This is the **second Tds relation for ideal gases (in terms of T and P)**.

**Important Considerations for Ideal Gases:**

*   **Constant Specific Heats:** If $c_v$ and $c_p$ are assumed constant over the temperature range, the integrals simplify:
    *   $s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{\nu_2}{\nu_1}\right)$
    *   $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$

*   **Variable Specific Heats:** If specific heats vary with temperature, the integrals must be evaluated using temperature-dependent $c_v(T)$ and $c_p(T)$ functions, or by using tabulated values (e.g., from ideal gas tables).

**References:**
*   **Cengel & Boles:** Chapter 8 (Second Law: Irreversibility and the Availability Concept) - for ideal gas relations.
*   **P.K. Nag:** Chapter 6 (Second Law of Thermodynamics) - for ideal gas relations.
*   **Moran & Shapiro:** Chapter 6 (Entropy) - detailed derivation of Tds relations for ideal gases.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 8 (Entropy) - comprehensive treatment of ideal gas Tds relations.

---

### 2.3 Tds Relation for Incompressible Substances

Incompressible substances are those whose specific volume (and density) can be assumed to be constant during a process. This is a good approximation for solids and liquids, especially over moderate temperature and pressure changes.

**Assumptions for Incompressible Substances:**
*   $d\nu \approx 0$ (or $\nu$ is constant)
*   Internal energy and enthalpy are primarily functions of temperature: $du = c_v dT$ and $dh = c_p dT$. For incompressible substances, $c_v \approx c_p = c$.

**Derivation of Tds Relations for Incompressible Substances:**

**First Tds Relation:** $T ds = du + P d\nu$

1.  **Substitute $du = c dT$ and $d\nu = 0$ (since $\nu$ is constant):**
    $T ds = c dT + P (0)$
    $T ds = c dT$

2.  **Divide by $T$:**
    $ds = c \frac{dT}{T}$

3.  **Integrate from state 1 to state 2:**
    $\int_{s_1}^{s_2} ds = \int_{T_1}^{T_2} c \frac{dT}{T}$
    $$s_2 - s_1 = \int_{T_1}^{T_2} c \frac{dT}{T}$$

**If specific heat ($c$) is constant:**
$$s_2 - s_1 = c \ln\left(\frac{T_2}{T_1}\right)$$

**Second Tds Relation:** $T ds = dh - \nu dP$

1.  **Substitute $dh = c dT$ and $d\nu = 0$ (which means $\nu dP$ is not necessarily zero, but we need to relate $dh$ and $du$ more carefully):**
    For incompressible substances, $h = u + P\nu$.
    $dh = du + P d\nu + \nu dP$
    Since $d\nu = 0$, $dh = du + \nu dP$.
    Also, $du = c dT$. So, $dh = c dT + \nu dP$.

2.  **Substitute into the second Tds relation:**
    $T ds = (c dT + \nu dP) - \nu dP$
    $T ds = c dT$

3.  **This leads to the same result as the first Tds relation:**
    $$s_2 - s_1 = \int_{T_1}^{T_2} c \frac{dT}{T}$$

**Key Points for Incompressible Substances:**
*   The pressure change does not directly affect the entropy change in the simplified model. The entropy change is solely dependent on the temperature change.
*   For solids and liquids undergoing heating or cooling at constant pressure, these relations are highly applicable.

**References:**
*   **Cengel & Boles:** Chapter 8 (Second Law: Irreversibility and the Availability Concept) - mentions incompressible substances.
*   **P.K. Nag:** Chapter 6 (Second Law of Thermodynamics) - covers incompressible substances.
*   **Moran & Shapiro:** Chapter 6 (Entropy) - details for incompressible substances.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 8 (Entropy) - provides relations for solids and liquids.

---

### 3. Applications of Tds Relations

The Tds relations are fundamental for calculating entropy changes.

**3.1 Calculating Entropy Changes:**

*   **For Ideal Gases (Constant Specific Heats):**
    *   $s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{\nu_2}{\nu_1}\right)$
    *   $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$

*   **For Incompressible Substances (Constant Specific Heat):**
    *   $s_2 - s_1 = c \ln\left(\frac{T_2}{T_1}\right)$

**3.2 Entropy Change during Specific Processes:**

*   **Isothermal Process ($T_1 = T_2$):**
    *   **Ideal Gas:** $s_2 - s_1 = R \ln\left(\frac{\nu_2}{\nu_1}\right) = -R \ln\left(\frac{P_2}{P_1}\right)$. Entropy changes due to volume or pressure changes.
    *   **Incompressible Substance:** $s_2 - s_1 = c \ln(1) = 0$. If temperature is constant, entropy change is zero for incompressible substances in this model.

*   **Isobaric Process ($P_1 = P_2$):**
    *   **Ideal Gas:** $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{\nu_2}{\nu_1}\right)$. Using $P\nu = RT$, $\frac{\nu_2}{\nu_1} = \frac{T_2}{T_1}$.
        $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{T_2}{T_1}\right) = (c_p + R) \ln\left(\frac{T_2}{T_1}\right)$.
        Since $c_p - c_v = R$, $c_p + R = c_v + 2R$. This is not the standard form.
        Let's re-evaluate:
        $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln(1) = c_p \ln\left(\frac{T_2}{T_1}\right)$.
        Alternatively, using $s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{\nu_2}{\nu_1}\right)$:
        Since $P_1 = P_2$, $\frac{\nu_2}{\nu_1} = \frac{T_2}{T_1}$.
        $s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{T_2}{T_1}\right) = (c_v + R) \ln\left(\frac{T_2}{T_1}\right) = c_p \ln\left(\frac{T_2}{T_1}\right)$.
        So, $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right)$. This makes sense as heat added at constant pressure leads to temperature increase, and $Q_{rev} = \int c_p dT = h_2 - h_1$. $s_2 - s_1 = \frac{Q_{rev}}{T_{avg}}$.
    *   **Incompressible Substance:** $s_2 - s_1 = c \ln\left(\frac{T_2}{T_1}\right)$.

*   **Isochoric Process ($\nu_1 = \nu_2$):**
    *   **Ideal Gas:** $s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln(1) = c_v \ln\left(\frac{T_2}{T_1}\right)$. This makes sense as heat added at constant volume leads to temperature increase, and $Q_{rev} = \int c_v dT = u_2 - u_1$. $s_2 - s_1 = \frac{Q_{rev}}{T_{avg}}$.
    *   **Incompressible Substance:** $s_2 - s_1 = c \ln\left(\frac{T_2}{T_1}\right)$.

*   **Isentropic Process ($s_1 = s_2$):**
    *   **Ideal Gas (Constant Specific Heats):**
        *   $c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{\nu_2}{\nu_1}\right) = 0 \implies \ln\left(\frac{\nu_2}{\nu_1}\right) = -\frac{c_v}{R} \ln\left(\frac{T_2}{T_1}\right) = -\frac{c_v}{c_p-c_v} \ln\left(\frac{T_2}{T_1}\right)$.
        *   $c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right) = 0 \implies \ln\left(\frac{P_2}{P_1}\right) = \frac{c_p}{R} \ln\left(\frac{T_2}{T_1}\right)$.
        Let $k = c_p/c_v$. Then $c_p = kc_v$ and $R = c_p - c_v = (k-1)c_v$.
        $\frac{c_p}{R} = \frac{kc_v}{(k-1)c_v} = \frac{k}{k-1}$.
        $\ln\left(\frac{P_2}{P_1}\right) = \frac{k}{k-1} \ln\left(\frac{T_2}{T_1}\right) \implies \frac{P_2}{P_1} = \left(\frac{T_2}{T_1}\right)^{k/(k-1)}$.
        Also, $\frac{P \nu}{T} = \frac{P_{ref} \nu_{ref}}{T_{ref}} (\frac{T}{T_{ref}})^{k/(k-1)} (\frac{T}{T_{ref}})^{-1} = \frac{P_{ref} \nu_{ref}}{T_{ref}} (\frac{T}{T_{ref}})^{(1/(k-1))}$.
        Using $P\nu = RT$, $P_2\nu_2 = RT_2$.
        $\frac{P_2\nu_2}{RT_2} = \frac{P_1\nu_1}{RT_1} \implies \nu_2 = \nu_1 \frac{P_1}{P_2} \frac{T_2}{T_1}$.
        Substitute $\frac{P_2}{P_1} = \left(\frac{T_2}{T_1}\right)^{k/(k-1)}$:
        $\nu_2 = \nu_1 \left(\frac{T_1}{T_2}\right)^{k/(k-1)} \frac{T_2}{T_1} = \nu_1 \left(\frac{T_1}{T_2}\right)^{k/(k-1) - 1} = \nu_1 \left(\frac{T_1}{T_2}\right)^{1/(k-1)}$.
        So, $\frac{\nu_2}{\nu_1} = \left(\frac{T_1}{T_2}\right)^{1/(k-1)} \implies \frac{\nu_1}{\nu_2} = \left(\frac{T_2}{T_1}\right)^{1/(k-1)}$.
        This implies $\nu T^{1/(k-1)}$ is constant.
        $P \nu^k$ is constant for isentropic processes of ideal gases. This can be derived from $P\nu = RT$.
        $P \nu = RT \implies T = P\nu/R$.
        $s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right) = 0$.
        $c_p \ln\left(\frac{P_2\nu_2}{P_1\nu_1}\right) = R \ln\left(\frac{P_2}{P_1}\right)$.
        $c_p (\ln(\frac{P_2}{P_1}) + \ln(\frac{\nu_2}{\nu_1})) = R \ln\left(\frac{P_2}{P_1}\right)$.
        $(c_p - R) \ln\left(\frac{P_2}{P_1}\right) = -c_p \ln\left(\frac{\nu_2}{\nu_1}\right)$.
        $c_v \ln\left(\frac{P_2}{P_1}\right) = -c_p \ln\left(\frac{\nu_2}{\nu_1}\right)$.
        $\ln\left(\frac{P_2}{P_1}\right) = -\frac{c_p}{c_v} \ln\left(\frac{\nu_2}{\nu_1}\right) = -k \ln\left(\frac{\nu_2}{\nu_1}\right) = \ln\left(\left(\frac{\nu_1}{\nu_2}\right)^k\right)$.
        $\frac{P_2}{P_1} = \left(\frac{\nu_1}{\nu_2}\right)^k \implies P_1 \nu_1^k = P_2 \nu_2^k$. This is the standard isentropic relation.

**3.3 Constructing Property Tables:**

The Tds relations are essential for generating property tables (like steam tables or ideal gas tables). By integrating the Tds relations, one can calculate changes in entropy based on changes in other properties (temperature, pressure, specific volume).

**Example:** Constructing an ideal gas table for Nitrogen ($N_2$) requires integrating $s_2 - s_1 = \int_{T_1}^{T_2} c_p(T) \frac{dT}{T} - R \ln\left(\frac{P_2}{P_1}\right)$. The integral term is often tabulated as $s^\circ(T)$, representing the "standard-state entropy" at a given temperature and unit pressure.

**References:**
*   **Cengel & Boles:** Chapter 8, Chapter 11 (Ideal and Real Gases).
*   **P.K. Nag:** Chapter 6, Chapter 4 (Properties of Substances).
*   **Moran & Shapiro:** Chapter 6.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 8.

---

### 4. Examples

**Example 1: Entropy change of air during cooling**

Air, treated as an ideal gas, is cooled in a piston-cylinder device from $T_1 = 500$ K and $P_1 = 300$ kPa to $T_2 = 300$ K. The cooling occurs at constant volume. Determine the entropy change of the air per unit mass.

**Given:**
*   Ideal Gas: Air
*   $T_1 = 500$ K, $P_1 = 300$ kPa
*   $T_2 = 300$ K
*   Constant Volume Process ($\nu_1 = \nu_2$)

**Properties of Air (approximate, constant specific heats):**
*   $c_v = 0.718$ kJ/(kg·K)
*   $R = 0.287$ kJ/(kg·K)

**Solution:**
For an ideal gas, the Tds relation in terms of temperature and specific volume is:
$s_2 - s_1 = \int_{T_1}^{T_2} c_v \frac{dT}{T} + R \ln\left(\frac{\nu_2}{\nu_1}\right)$

Since the process is at constant volume, $\nu_2 = \nu_1$, so $\ln(\nu_2/\nu_1) = \ln(1) = 0$.
Assuming constant specific heats:
$s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right)$

Substitute the given values:
$s_2 - s_1 = 0.718 \text{ kJ/(kg·K)} \times \ln\left(\frac{300 \text{ K}}{500 \text{ K}}\right)$
$s_2 - s_1 = 0.718 \times \ln(0.6)$
$s_2 - s_1 = 0.718 \times (-0.5108)$
$s_2 - s_1 = -0.3668$ kJ/(kg·K)

The entropy of the air decreases, which is expected for a cooling process.

**Example 2: Entropy change of water during heating**

Liquid water is heated from $T_1 = 20^\circ$C to $T_2 = 80^\circ$C at a constant pressure of 1 atm. Determine the entropy change of the water per unit mass. Treat water as an incompressible substance.

**Given:**
*   Incompressible Substance: Water
*   $T_1 = 20^\circ$C = 293.15 K
*   $T_2 = 80^\circ$C = 353.15 K
*   Constant Pressure Process (P = 1 atm)

**Properties of Water (approximate, constant specific heat):**
*   Specific heat of liquid water, $c \approx 4.18$ kJ/(kg·K)

**Solution:**
For an incompressible substance with constant specific heat:
$s_2 - s_1 = c \ln\left(\frac{T_2}{T_1}\right)$

Substitute the given values:
$s_2 - s_1 = 4.18 \text{ kJ/(kg·K)} \times \ln\left(\frac{353.15 \text{ K}}{293.15 \text{ K}}\right)$
$s_2 - s_1 = 4.18 \times \ln(1.2047)$
$s_2 - s_1 = 4.18 \times 0.1862$
$s_2 - s_1 = 0.7783$ kJ/(kg·K)

The entropy of the water increases, as expected for a heating process.

---

### 5. Practice Questions

1.  **Ideal Gas Entropy Change:** Nitrogen gas ($N_2$) is compressed isothermally from 100 kPa and $0.1 \, m^3/kg$ to $500$ kPa. Calculate the entropy change of the nitrogen per unit mass.
    *(Hint: Use the ideal gas relation $s_2 - s_1 = -R \ln(P_2/P_1)$ for isothermal processes)*
    *   **Answer:** For $N_2$, $R = 0.297$ kJ/(kg·K).
        $s_2 - s_1 = -0.297 \text{ kJ/(kg·K)} \times \ln(500/100) = -0.297 \times \ln(5) = -0.297 \times 1.6094 = -0.478 \, \text{kJ/(kg·K)}$.

2.  **Incompressible Substance Entropy Change:** A block of copper weighing 5 kg is heated from $25^\circ$C to $100^\circ$C. The specific heat of copper is approximately $0.385 \, \text{kJ/(kg}^\circ\text{C)}$. Calculate the entropy change of the copper.
    *(Hint: Treat copper as an incompressible substance with constant specific heat)*
    *   **Answer:** $T_1 = 25^\circ\text{C} = 298.15 \, \text{K}$, $T_2 = 100^\circ\text{C} = 373.15 \, \text{K}$.
        $s_2 - s_1 = c \ln(T_2/T_1) = 0.385 \, \text{kJ/(kg·K)} \times \ln(373.15/298.15) = 0.385 \times \ln(1.2515) = 0.385 \times 0.2243 = 0.0864 \, \text{kJ/(kg·K)}$.
        Total entropy change for 5 kg: $5 \, \text{kg} \times 0.0864 \, \text{kJ/(kg·K)} = 0.432 \, \text{kJ/K}$.

3.  **Air during Polytropic Process:** Air undergoes a polytropic process with $n=1.2$. The initial state is $T_1 = 300$ K and $P_1 = 100$ kPa, and the final pressure is $P_2 = 600$ kPa. Calculate the entropy change of the air per unit mass.
    *(Hint: For a polytropic process $Pv^n = constant$. Use ideal gas relations and the fact that $s_2 - s_1 = c_p \ln(T_2/T_1) - R \ln(P_2/P_1)$ after finding $T_2$. For $P v^n = \text{constant}$, $T v^{n-1} = \text{constant}$ and $T P^{(1-n)/n} = \text{constant}$.)*
    *   **Answer:** For air, $k \approx 1.4$. We need $T_2$. Using $T P^{(1-n)/n} = \text{constant}$:
        $T_2 = T_1 \left(\frac{P_1}{P_2}\right)^{(n-1)/n} = 300 \, \text{K} \times \left(\frac{100}{600}\right)^{(1.2-1)/1.2} = 300 \times (1/6)^{0.2/1.2} = 300 \times (1/6)^{1/6} = 300 \times (0.16667)^{0.16667} \approx 300 \times 0.7649 = 229.47 \, \text{K}$.
        Now, $s_2 - s_1 = c_p \ln(T_2/T_1) - R \ln(P_2/P_1)$.
        Using $c_p = 1.005$ kJ/(kg·K) and $R = 0.287$ kJ/(kg·K) for air:
        $s_2 - s_1 = 1.005 \ln(229.47/300) - 0.287 \ln(600/100)$
        $s_2 - s_1 = 1.005 \ln(0.7649) - 0.287 \ln(6)$
        $s_2 - s_1 = 1.005 \times (-0.2681) - 0.287 \times 1.7918$
        $s_2 - s_1 = -0.2694 - 0.5142 = -0.7836 \, \text{kJ/(kg·K)}$.

---

### 6. Important Points to Remember

*   The Tds relations are derived from the First and Second Laws of Thermodynamics and are fundamental for calculating entropy changes.
*   **First Tds Relation:** $T ds = du + P d\nu$ (universal for simple compressible systems).
*   **Second Tds Relation:** $T ds = dh - \nu dP$ (universal for simple compressible systems).
*   **For Ideal Gases:** These relations can be simplified using $du = c_v dT$, $dh = c_p dT$, and $P\nu = RT$.
    *   $s_2 - s_1 = \int c_v \frac{dT}{T} + R \ln\left(\frac{\nu_2}{\nu_1}\right)$
    *   $s_2 - s_1 = \int c_p \frac{dT}{T} - R \ln\left(\frac{P_2}{P_1}\right)$
*   **For Incompressible Substances:** Assuming $d\nu = 0$ and $du = c dT$:
    *   $s_2 - s_1 = \int c \frac{dT}{T}$. Entropy change is primarily dependent on temperature.
*   The Tds relations are crucial for constructing thermodynamic property tables and for analyzing various thermodynamic processes.
*   When specific heats are assumed constant, the integrals simplify to logarithmic terms. If they vary, integration of the specific heat functions is required.

---

This concludes the notes on the Tds relations. A thorough understanding of these relations is vital for further studies in thermodynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
