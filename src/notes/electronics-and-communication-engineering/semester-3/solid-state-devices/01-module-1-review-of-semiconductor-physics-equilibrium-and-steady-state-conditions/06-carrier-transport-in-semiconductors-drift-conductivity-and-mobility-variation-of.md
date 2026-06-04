---
title: "Carrier transport in semiconductors : Drift, conductivity and mobility, variation of mobility with temperature and doping, Hall Effect."
subject: "SOLID STATE DEVICES"
module: "Module 1: Review of Semiconductor physics: Equilibrium and steady state conditions"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ae"
status: "completed"
scrapedAt: "2026-05-23T17:47:29.818Z"
---
# SOLID STATE DEVICES - Module 1: Review of Semiconductor Physics: Equilibrium and Steady State Conditions

## Topic: Carrier Transport in Semiconductors: Drift, Conductivity and Mobility, Variation of Mobility with Temperature and Doping, Hall Effect

---

### **1. Introduction to Carrier Transport in Semiconductors**

*   **Objective:** To understand how charge carriers (electrons and holes) move within a semiconductor material under the influence of external stimuli. This movement constitutes electrical current.
*   **Key Concept:** In a semiconductor, current flow is due to the movement of two types of charge carriers: free electrons (in the conduction band) and holes (in the valence band).
*   **Relevance to Course Outcomes:** This section directly addresses **CO2** (state different carrier transport mechanisms) and **CO3** (apply concepts to solve current components).

---

### **2. Drift Current**

*   **Definition:** Drift is the net directional motion of charge carriers in a semiconductor due to the presence of an electric field ($\mathcal{E}$).
*   **Mechanism:** When an electric field is applied across a semiconductor, charged particles experience a force. Electrons, being negatively charged, move in the opposite direction of the electric field, while holes, being positively charged, move in the same direction as the electric field.
*   **Drift Velocity ($v_d$):** The average velocity attained by the charge carriers due to the applied electric field.
*   **Mathematical Expression:**
    *   For electrons: $v_{dn} = -\mu_n \mathcal{E}$
    *   For holes: $v_{dp} = \mu_p \mathcal{E}$
    *   Where:
        *   $v_{dn}$ is the drift velocity of electrons.
        *   $v_{dp}$ is the drift velocity of holes.
        *   $\mu_n$ is the electron mobility.
        *   $\mu_p$ is the hole mobility.
        *   $\mathcal{E}$ is the applied electric field.
        *   The negative sign for electrons indicates movement opposite to the electric field.

*   **Drift Current Density ($J_{drift}$):** The net current per unit area due to drift.
    *   For electrons: $J_{dn} = q n v_{dn} = q n (-\mu_n \mathcal{E}) = -q n \mu_n \mathcal{E}$
    *   For holes: $J_{dp} = q p v_{dp} = q p (\mu_p \mathcal{E}) = q p \mu_p \mathcal{E}$
    *   Where:
        *   $q$ is the magnitude of the electronic charge ($1.602 \times 10^{-19}$ C).
        *   $n$ is the electron concentration.
        *   $p$ is the hole concentration.
    *   **Total Drift Current Density:** $J_{drift} = J_{dn} + J_{dp} = q (p \mu_p + n \mu_n) \mathcal{E}$

*   **Reference (Pierret, Chapter 2):** Pierret provides a thorough explanation of drift velocity and current density, introducing the concept of mobility as the proportionality constant between drift velocity and electric field.

---

### **3. Conductivity and Mobility**

*   **Conductivity ($\sigma$):** A measure of a material's ability to conduct electric current. It is the reciprocal of resistivity ($\rho$).
    *   **Definition:** The proportionality constant between current density and electric field in Ohm's Law in its microscopic form.
    *   **Relationship to Drift Current:** From $J_{drift} = q (p \mu_p + n \mu_n) \mathcal{E}$, we can see that $\sigma = q (p \mu_p + n \mu_n)$.
    *   **Units:** Siemens per meter (S/m) or $(\Omega \cdot m)^{-1}$.

*   **Mobility ($\mu$):** A measure of how easily a charge carrier can move through the semiconductor lattice under the influence of an electric field.
    *   **Definition:** The proportionality constant relating the drift velocity of a charge carrier to the applied electric field.
    *   **Units:** $\text{cm}^2/\text{V} \cdot \text{s}$ or $\text{m}^2/\text{V} \cdot \text{s}$. (Note: $1 \text{ cm}^2/\text{V} \cdot \text{s} = 10^{-4} \text{ m}^2/\text{V} \cdot \text{s}$)
    *   **Physical Interpretation:** Higher mobility means carriers move faster for a given electric field, leading to higher conductivity.
    *   **Contribution to Conductivity:**
        *   Electron conductivity: $\sigma_n = q n \mu_n$
        *   Hole conductivity: $\sigma_p = q p \mu_p$
        *   Total conductivity: $\sigma = \sigma_n + \sigma_p$

*   **Extrinsic Semiconductors:**
    *   In an n-type semiconductor, $n \gg p$, so $\sigma \approx q n \mu_n$.
    *   In a p-type semiconductor, $p \gg n$, so $\sigma \approx q p \mu_p$.

*   **Reference (Sze & Lee, Chapter 2):** Sze and Lee detail the relationship between conductivity, carrier concentrations, and mobility, emphasizing their importance in determining the electrical properties of semiconductors.

---

### **4. Variation of Mobility with Temperature and Doping**

*   **Key Concept:** Mobility is not constant and is influenced by scattering mechanisms within the semiconductor crystal lattice. The dominant scattering mechanisms change with temperature and doping concentration.

*   **Scattering Mechanisms:**
    1.  **Lattice Scattering (Phonon Scattering):** At higher temperatures, the atoms in the crystal lattice vibrate more vigorously. These vibrations (phonons) scatter the charge carriers, impeding their motion. This scattering increases with temperature.
    2.  **Impurity Scattering:** At lower temperatures and higher doping concentrations, ionized impurity atoms (from doping) act as scattering centers. These charged centers attract and repel carriers, deflecting them from their path. This scattering is more significant at lower temperatures and higher doping levels.

*   **Temperature Dependence of Mobility:**
    *   **At High Temperatures:** Lattice scattering dominates. The mobility ($\mu$) is inversely proportional to a power of temperature, typically $\mu \propto T^{-m}$, where 'm' is an exponent ranging from 1.5 to 2.5 depending on the material and carrier type.
        *   *Example:* For silicon electrons, $\mu_n \approx 1400 (T/300)^{-2.4}$ $\text{cm}^2/\text{V} \cdot \text{s}$ (Shur, Chapter 2).
    *   **At Low Temperatures:** Impurity scattering dominates. The mobility ($\mu$) is directly proportional to a power of temperature, typically $\mu \propto T^{m'}$, where 'm'' is a positive exponent.
        *   *Example:* For silicon electrons, $\mu_n \propto T^{1.5}$ at low temperatures due to impurity scattering.
    *   **Overall:** Mobility generally decreases as temperature increases, especially in the range where lattice scattering is dominant.

*   **Doping Dependence of Mobility:**
    *   **Low Doping:** Mobility is relatively high, determined primarily by lattice scattering (which is temperature-dependent).
    *   **High Doping:** Impurity scattering becomes significant. As doping concentration increases, the number of ionized impurity centers increases, leading to more scattering and a decrease in mobility. This effect is more pronounced at lower temperatures.
    *   **Combined Effect:** At higher doping concentrations, mobility saturates and then decreases significantly. The peak mobility occurs at a moderate doping level.

*   **Reference (Shur, Chapter 2):** Shur provides detailed models and plots showing the temperature and doping dependence of mobility for common semiconductors like silicon and gallium arsenide. He discusses the contributions of various scattering mechanisms.
*   **Reference (Neamen, Chapter 5):** Neamen also elaborates on the scattering mechanisms and their impact on mobility, presenting empirical models for mobility variation.

*   **Important Point to Remember:** Mobility is a crucial parameter that dictates carrier transport efficiency and is strongly influenced by temperature and doping concentration due to the interplay of lattice and impurity scattering.

---

### **5. Hall Effect**

*   **Definition:** The Hall effect is a phenomenon observed when a magnetic field is applied perpendicular to a current-carrying conductor or semiconductor. This results in a voltage (Hall voltage) that is perpendicular to both the current and the magnetic field.
*   **Mechanism:**
    1.  A current flows through the semiconductor.
    2.  A magnetic field ($\mathbf{B}$) is applied perpendicular to the current direction.
    3.  Charge carriers moving with drift velocity ($\mathbf{v}_d$) experience a Lorentz force ($\mathbf{F}_L = q(\mathbf{v}_d \times \mathbf{B})$).
    4.  This force deflects the carriers towards one side of the semiconductor.
    5.  As carriers accumulate on one side, an electric field (Hall field, $\mathcal{E}_H$) is established across the width of the semiconductor.
    6.  This Hall field exerts an electric force ($\mathbf{F}_E = q\mathcal{E}_H$) on the carriers, opposing the Lorentz force.
    7.  Equilibrium is reached when the electric force balances the magnetic force: $q\mathcal{E}_H = q v_d B$ (assuming $\mathbf{v}_d$ is perpendicular to $\mathbf{B}$).
    8.  The voltage associated with this Hall field is the Hall voltage ($V_H$).

*   **Hall Voltage ($V_H$):**
    *   $V_H = \mathcal{E}_H w$, where $w$ is the width of the semiconductor sample.
    *   Substituting $\mathcal{E}_H = v_d B$: $V_H = v_d B w$.
    *   Since $v_d = \mu \mathcal{E}_{drift}$ and current density $J = \sigma \mathcal{E}_{drift}$, we have $\mathcal{E}_{drift} = J/\sigma$. So, $v_d = \mu (J/\sigma)$.
    *   We know $J = I/(wt)$ where $I$ is the total current and $t$ is the thickness. So, $v_d = \mu (I/(wt\sigma))$.
    *   Substituting $v_d$ into the Hall voltage equation: $V_H = \left(\frac{\mu I}{wt\sigma}\right) B w = \frac{\mu I B}{t\sigma}$.
    *   Using $\sigma = q n \mu$ for a semiconductor dominated by one carrier type (e.g., electrons, $n$): $V_H = \frac{\mu I B}{t (q n \mu)} = \frac{I B}{t q n}$.
    *   Rearranging to find carrier concentration ($n$): $n = \frac{I B}{q t V_H}$.
    *   **Hall Coefficient ($R_H$):** Defined as $R_H = \frac{\mathcal{E}_H}{J B}$.
        *   Substituting $\mathcal{E}_H = V_H/w$, $J=I/(wt)$: $R_H = \frac{V_H/w}{(I/wt)B} = \frac{V_H t}{I B}$.
        *   For electrons, $R_H \approx -1/(q n)$.
        *   For holes, $R_H \approx +1/(q p)$.
        *   The sign of the Hall coefficient indicates the type of majority carrier. A negative $R_H$ implies electrons are the majority carriers (n-type), and a positive $R_H$ implies holes are the majority carriers (p-type).

*   **Applications of Hall Effect:**
    *   **Determination of Carrier Concentration:** The Hall effect is a powerful tool to measure the concentration of majority carriers ($n$ or $p$) in a semiconductor.
    *   **Determination of Carrier Type:** The sign of the Hall voltage (and hence the Hall coefficient) directly reveals whether the semiconductor is n-type or p-type.
    *   **Measurement of Mobility:** Once the carrier concentration and conductivity are known, mobility can be calculated using the Hall coefficient and conductivity. $\mu = |R_H| \sigma$.
    *   **Magnetic Field Sensors:** Hall effect sensors are widely used to measure magnetic fields.

*   **Reference (Sze, Chapter 1):** Sze's book, particularly in its introductory chapters, provides a solid foundation for understanding the Hall effect, its derivation, and its significance in characterizing semiconductor materials.
*   **Reference (Tsividis, Chapter 2):** Tsividis might discuss the Hall effect in the context of understanding charge transport in the context of MOSFETs, where carrier behavior is crucial.

*   **Important Point to Remember:** The Hall effect is a direct experimental technique to determine carrier type, carrier concentration, and mobility, making it indispensable in semiconductor characterization.

---

### **6. Practice Questions and Answers**

**Question 1:**
Calculate the conductivity of a silicon sample at room temperature (300K) doped with $10^{17}$ arsenic atoms/cm$^3$. Assume that all arsenic atoms are ionized. Given: $\mu_n = 1350 \text{ cm}^2/\text{V} \cdot \text{s}$ for Si at 300K. (Assume negligible hole concentration).
**Learning Outcome Alignment:** CO2, CO3
**Knowledge Level:** K3

**Answer 1:**
Silicon doped with arsenic (a donor) is n-type. Since $n \gg p$, we can approximate the conductivity as $\sigma \approx q n \mu_n$.
Given:
*   Doping concentration ($N_D$) = $10^{17}$ atoms/cm$^3$. Since all atoms are ionized, the electron concentration $n = N_D = 10^{17}$ cm$^{-3}$.
*   Electron mobility ($\mu_n$) = $1350 \text{ cm}^2/\text{V} \cdot \text{s}$.
*   Charge of an electron ($q$) = $1.602 \times 10^{-19}$ C.

First, convert units to SI if needed for consistency, but working in CGS with SI charge is also common for this type of problem. Let's work in CGS for conductivity as typically presented.
$\sigma = q n \mu_n$
$\sigma = (1.602 \times 10^{-19} \text{ C}) \times (10^{17} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s})$

To make units consistent, we use $1 \text{ C} = 1 \text{ A} \cdot \text{s}$ and $1 \text{ V} = 1 \text{ J}/\text{C} = 1 \text{ kg} \cdot \text{m}^2/(\text{s}^2 \cdot \text{C})$. Conductivity unit is S/cm.
$1 \text{ S} = 1/\Omega$. $1 \Omega = 1 \text{ V} \cdot \text{s} / \text{C}$.
So, $\text{cm}^2/\text{V} \cdot \text{s} = \text{cm}^2 \cdot \text{C} / (\text{V} \cdot \text{s} \cdot \text{C}) = \text{cm}^2 / \Omega \cdot \text{s}$. This is confusing.

Let's use the definition $\sigma = J/\mathcal{E}$.
If $\mathcal{E}$ is in V/cm, then $J$ will be in A/cm$^2$.
$\sigma = (1.602 \times 10^{-19} \text{ C}) \times (10^{17} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s})$
$\sigma = (1.602 \times 10^{-19} \times 10^{17} \times 1350) \frac{\text{C}}{\text{cm}^3} \frac{\text{cm}^2}{\text{V} \cdot \text{s}}$
$\sigma = (1.602 \times 1.350 \times 10^{-2} \times 10^{19}) \frac{\text{A} \cdot \text{s}}{\text{cm}^3} \frac{\text{cm}^2}{\text{V} \cdot \text{s}}$
$\sigma = (2.1627 \times 10^{-2} \times 10^{19}) \frac{\text{A}}{\text{cm} \cdot \text{V}}$
$\sigma = 2.1627 \times 10^{17} \text{ S/cm}$ - This unit seems off.

Let's convert mobility to SI units first for consistency.
$\mu_n = 1350 \text{ cm}^2/\text{V} \cdot \text{s} = 1350 \times (10^{-2} \text{ m})^2 / (\text{V} \cdot \text{s}) = 1350 \times 10^{-4} \text{ m}^2/\text{V} \cdot \text{s} = 0.135 \text{ m}^2/\text{V} \cdot \text{s}$.
$n = 10^{17} \text{ cm}^{-3} = 10^{17} \times (10^{-2} \text{ m})^{-3} = 10^{17} \times 10^6 \text{ m}^{-3} = 10^{23} \text{ m}^{-3}$.
$q = 1.602 \times 10^{-19}$ C.

$\sigma = q n \mu_n = (1.602 \times 10^{-19} \text{ C}) \times (10^{23} \text{ m}^{-3}) \times (0.135 \text{ m}^2/\text{V} \cdot \text{s})$
$\sigma = (1.602 \times 10^{-19} \times 10^{23} \times 0.135) \frac{\text{C} \cdot \text{m}}{\text{V} \cdot \text{s} \cdot \text{m}^3}$
$\sigma = (1.602 \times 0.135 \times 10^{4}) \frac{\text{A} \cdot \text{s} \cdot \text{m}}{\text{V} \cdot \text{s} \cdot \text{m}^3}$
$\sigma = (0.21627 \times 10^{4}) \frac{\text{A}}{\text{V} \cdot \text{m}^2} = 2162.7 \text{ S/m}$.

Commonly, conductivity in semiconductor problems is presented in $(\Omega \cdot \text{cm})^{-1}$.
If $\mu_n = 1350 \text{ cm}^2/\text{V} \cdot \text{s}$ and $n = 10^{17} \text{ cm}^{-3}$, $q=1.602 \times 10^{-19}$ C.
$\sigma = q n \mu_n = (1.602 \times 10^{-19} \text{ C}) \times (10^{17} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s})$
To get $(\Omega \cdot \text{cm})^{-1}$ we need A, cm, V, s.
$\sigma = (1.602 \times 10^{-19} \times 10^{17} \times 1350) \frac{\text{A} \cdot \text{s}}{\text{cm}^3} \frac{\text{cm}^2}{\text{V} \cdot \text{s}}$
$\sigma = (2.1627 \times 10^4) \frac{\text{A} \cdot \text{cm}}{\text{V} \cdot \text{cm}^3} = 21627 \text{ S/cm}$.

Let's recheck units and conversions carefully.
$1 \text{ S/m} = 1 \text{ S} / (100 \text{ cm}) = 10^{-2} \text{ S/cm}$.
So, $2162.7 \text{ S/m} = 2162.7 \times 10^{-2} \text{ S/cm} = 21.627 \text{ S/cm}$.

Let's use the CGS values given for mobility directly:
$\sigma = (1.602 \times 10^{-19} \text{ C}) \times (10^{17} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s})$
We need to convert Coulombs to Amperes seconds.
$\sigma = (1.602 \times 10^{-19} \text{ A} \cdot \text{s}) \times (10^{17} \text{ cm}^{-3}) \times (1350 \text{ cm}^2/\text{V} \cdot \text{s})$
$\sigma = (1.602 \times 10^{-19} \times 10^{17} \times 1350) \frac{\text{A} \cdot \text{s} \cdot \text{cm}^2}{\text{cm}^3 \cdot \text{V} \cdot \text{s}} = (2.1627 \times 10^4) \frac{\text{A}}{\text{V} \cdot \text{cm}} = 21627 \text{ S/cm}$.

Let's check the relationship between $\Omega \cdot \text{cm}$ and S/cm.
Resistivity $\rho$ unit is $\Omega \cdot \text{cm}$. Conductivity $\sigma = 1/\rho$.
$\sigma$ in $\text{S/cm} = 1/(\Omega \cdot \text{cm})$.
So, the calculation seems correct for S/cm.

$\sigma = 21627 \text{ S/cm}$.
In $(\Omega \cdot \text{cm})^{-1}$, this is $21627 (\Omega \cdot \text{cm})^{-1}$.

**Answer:** $\sigma \approx 21627 \text{ S/cm}$ or $21.627 \text{ S/m}$.

---

**Question 2:**
A sample of intrinsic germanium at 300K is subjected to a magnetic field of 0.5 T perpendicular to the direction of current flow. A Hall voltage of -5 mV is measured across the width of the sample. If the current is 10 mA and the thickness of the sample is 1 mm, determine:
a) The type of majority carrier.
b) The carrier concentration.
c) The mobility of the majority carrier.
Given: Intrinsic Ge at 300K has $\mu_n = 3900 \text{ cm}^2/\text{V} \cdot \text{s}$ and $\mu_p = 1900 \text{ cm}^2/\text{V} \cdot \text{s}$. The intrinsic carrier concentration $n_i = 2.4 \times 10^{13} \text{ cm}^{-3}$. $q = 1.602 \times 10^{-19}$ C.
**Learning Outcome Alignment:** CO2, CO3
**Knowledge Level:** K3

**Answer 2:**
Given:
*   Magnetic field ($B$) = 0.5 T
*   Hall voltage ($V_H$) = -5 mV = $-5 \times 10^{-3}$ V
*   Current ($I$) = 10 mA = $10 \times 10^{-3}$ A
*   Thickness ($t$) = 1 mm = $1 \times 10^{-3}$ m
*   $q = 1.602 \times 10^{-19}$ C

To find the Hall coefficient $R_H = \frac{V_H t}{I B}$.
$R_H = \frac{(-5 \times 10^{-3} \text{ V}) \times (1 \times 10^{-3} \text{ m})}{(10 \times 10^{-3} \text{ A}) \times (0.5 \text{ T})}$
$R_H = \frac{-5 \times 10^{-6}}{5 \times 10^{-3}} \frac{\text{V} \cdot \text{m}}{\text{A} \cdot \text{T}}$
$R_H = -1 \times 10^{-3} \text{ T}^{-1} \cdot \text{m}^3/\text{C}$. (Note: $1 \text{ T} = 1 \text{ N}/(\text{A} \cdot \text{m})$, so $\text{V} \cdot \text{m} / (\text{A} \cdot \text{T}) = \text{V} \cdot \text{m} / (\text{A} \cdot \text{N}/(\text{A} \cdot \text{m})) = \text{V} \cdot \text{m}^2 / \text{N}$. Also, $\text{V} = \text{J}/\text{C}$, $N=J/m$. So $\text{J} \cdot \text{m}^2 / (\text{J}/\text{m}) = \text{m}^3$. $\text{C} = \text{A} \cdot \text{s}$. The unit is $\text{m}^3/\text{C}$.)

a) **Type of majority carrier:**
Since the Hall coefficient $R_H$ is negative, the majority carriers are **electrons** (n-type).

b) **Carrier concentration:**
For a material dominated by one type of carrier, $R_H \approx -1/(q n)$.
$n = \frac{-1}{q R_H} = \frac{-1}{(1.602 \times 10^{-19} \text{ C}) \times (-1 \times 10^{-3} \text{ T}^{-1} \cdot \text{m}^3/\text{C})}$
$n = \frac{1}{1.602 \times 10^{-22}} \text{ m}^{-3} = 6.242 \times 10^{21} \text{ m}^{-3}$.
Converting to cm$^{-3}$: $n = 6.242 \times 10^{21} \text{ m}^{-3} \times (10^{-2} \text{ m/cm})^3 = 6.242 \times 10^{21} \times 10^{-6} \text{ cm}^{-3} = 6.242 \times 10^{15} \text{ cm}^{-3}$.

This is an intrinsic sample, so $n = p = n_i$. However, the Hall voltage measurement implies a deviation from intrinsic behavior or that the given Hall voltage is for this specific applied field and current. If it were truly intrinsic, the Hall coefficient formula is more complex. For an intrinsic semiconductor, $n=p=n_i$, and the Hall coefficient is given by $R_H = \frac{p \mu_p^2 - n \mu_n^2}{q(p \mu_p + n \mu_n)^2}$.
If $n=p=n_i$, $R_H = \frac{n_i \mu_p^2 - n_i \mu_n^2}{q(n_i \mu_p + n_i \mu_n)^2} = \frac{n_i (\mu_p^2 - \mu_n^2)}{q n_i^2 (\mu_p + \mu_n)^2} = \frac{\mu_p^2 - \mu_n^2}{q n_i (\mu_p + \mu_n)^2} = \frac{(\mu_p - \mu_n)(\mu_p + \mu_n)}{q n_i (\mu_p + \mu_n)^2} = \frac{\mu_p - \mu_n}{q n_i (\mu_p + \mu_n)}$.

Let's check if the measured Hall voltage is consistent with intrinsic Ge.
$n_i = 2.4 \times 10^{13} \text{ cm}^{-3}$.
$\mu_n = 3900 \text{ cm}^2/\text{V} \cdot \text{s}$, $\mu_p = 1900 \text{ cm}^2/\text{V} \cdot \text{s}$.
$R_H = \frac{1900 - 3900}{1.602 \times 10^{-19} \times 2.4 \times 10^{13} \times (1900 + 3900)} = \frac{-2000}{1.602 \times 10^{-19} \times 2.4 \times 10^{13} \times 5800}$
$R_H = \frac{-2000}{2.234 \times 10^{-3}} \approx -895 \text{ cm}^3/\text{C}$.

Converting this to SI: $-895 \text{ cm}^3/\text{C} = -895 \times (10^{-2} \text{ m})^3 / \text{C} = -895 \times 10^{-6} \text{ m}^3/\text{C}$.
This is very different from the measured $R_H = -1 \times 10^{-3} \text{ m}^3/\text{C}$ (which is $-1000 \text{ cm}^3/\text{C}$).

This suggests the sample is not intrinsic, or there's a simplification in the problem. Usually, when a Hall voltage is measured, it's assumed the formula for a single carrier type is applicable for finding the concentration.

Let's proceed with the assumption that the measured Hall voltage indicates a net excess of electrons, and we use $R_H \approx -1/(qn)$ for calculation.

Carrier concentration $n \approx 6.242 \times 10^{15} \text{ cm}^{-3}$.

c) **Mobility of the majority carrier:**
We know $\sigma = q n \mu_n$ (for n-type).
We can also find conductivity from the drift equation: $J = \sigma \mathcal{E}_{drift}$.
From the Hall effect, we had $V_H = \frac{I B}{t q n}$ (assuming $R_H = -1/(qn)$).
We also know $V_H = \mathcal{E}_H w$, and $\mathcal{E}_H$ is related to drift velocity.
Let's use the relationship $\mu = |R_H| \sigma$. We need $\sigma$.

We can calculate conductivity from Ohm's law if we knew the voltage across the length of the sample for the current $I$. This is not given.

However, let's use the derived relation for Hall Voltage: $V_H = \frac{I B}{t q n}$ (for electrons).
And for conductivity $\sigma_n = q n \mu_n$.
We can express $n$ in terms of $R_H$: $n = -1/(q R_H)$.
So $\sigma_n = q (-\frac{1}{q R_H}) \mu_n = -\frac{\mu_n}{R_H}$.
Rearranging for mobility: $\mu_n = -R_H \sigma_n$.

We need to find $\sigma_n$. The problem doesn't provide enough information to calculate $\sigma$ directly from Ohm's law (we don't have the voltage along the sample length).

Let's re-examine the Hall effect derivation and the relationship between $V_H$ and $\mathcal{E}_{drift}$.
$V_H = \mathcal{E}_H w$.
$\mathcal{E}_H = v_d B$.
$v_d = \mu \mathcal{E}_{drift}$.
$\mathcal{E}_{drift} = J/\sigma$.
$V_H = (\mu \frac{J}{\sigma}) B w$.
$J = I/(wt)$.
$V_H = (\mu \frac{I}{wt\sigma}) B w = \frac{\mu I B}{t \sigma}$.
Since $\sigma = q n \mu$: $V_H = \frac{\mu I B}{t (q n \mu)} = \frac{I B}{t q n}$. This formula is consistent.

We have $n = -1/(qR_H)$.
Let's consider the conductivity formula relating $R_H$ and $\sigma$: $\sigma = - \frac{1}{R_H} \mu$.
So, $\mu = -R_H \sigma$.
We need $\sigma$.

Perhaps there's a way to relate conductivity to the Hall voltage and current.
The drift current density is $J_x = q n v_{dx}$.
The Hall field $\mathcal{E}_y$ causes a Hall current density $J_y = q n v_{dy}$.
$v_{dy} = \mu_n \mathcal{E}_y$.
$V_H = \mathcal{E}_y w$.

Let's check if there's a direct relationship between $V_H$ and mobility.
From $R_H = \frac{V_H t}{I B}$, we have $t = \frac{R_H I B}{V_H}$.
From $\sigma = q n \mu$:
We know $n = -1/(q R_H)$.
So $\sigma = q (-1/(q R_H)) \mu = -\mu/R_H$.
This gives $\mu = -R_H \sigma$.

If we assume the current density is $J = I/(wt)$, and if we could determine the electric field along the current path, we could find $\sigma$.

Let's look at common textbook examples. Often, Hall voltage is used to find $n$ and then mobility is found using conductivity.

If the question implies that the measured Hall voltage is the *only* measurement from which to deduce all parameters, then there might be an implicit assumption about the conductivity.

Let's assume the question intends for us to calculate mobility from the Hall coefficient and the given mobility values for intrinsic Ge. This is unusual.

Let's assume the sample is actually doped, and the measurement is being made.
We have $R_H = -1 \times 10^{-3} \text{ m}^3/\text{C}$ and $n = 6.242 \times 10^{21} \text{ m}^{-3}$.
We need $\sigma$.

Let's assume the problem meant to give the voltage drop along the length. Without it, we cannot find $\sigma$.

**Revisiting the basics:**
$J_x = \sigma (\mathcal{E}_x - R_H J_y B)$
$J_y = \sigma (\mathcal{E}_y + R_H J_x B)$
In our case, $J_y=0$ (no current flows in the y direction, only Hall voltage builds up) and $\mathcal{E}_y$ is the Hall field.
$J_x = \sigma (\mathcal{E}_x - R_H (0) B) = \sigma \mathcal{E}_x$.
So, $\sigma = J_x / \mathcal{E}_x$.

The Hall effect setup measures $V_H$ across the width (y-direction) due to current $I$ (x-direction) and field $B$ (z-direction).
$I = J_x A = J_x (wt)$.
$V_H = \mathcal{E}_y w$.

Let's check the relation $\mu = |R_H| \sigma$.
If we assume the sample is n-type with concentration $n \approx 6.242 \times 10^{15} \text{ cm}^{-3}$, and we need its mobility.
We don't know $\sigma$.

**Possible interpretation:** The problem intends to test if we can use the given intrinsic mobilities to derive something if the sample were not intrinsic. This is unlikely.

Let's consider a scenario where the sample is doped such that its electron concentration is $6.242 \times 10^{15} \text{ cm}^{-3}$. If we assume a typical mobility for silicon at this doping level (though the material is Ge).

Let's assume there's missing information or a misunderstanding of the question's intent. However, if forced to find a mobility, we must find $\sigma$.

**Alternative approach:**
The average drift velocity $v_d$ for electrons is related by $v_d = |J_x| / (q n)$.
We know $I = 10$ mA and $n = 6.242 \times 10^{15} \text{ cm}^{-3}$.
$J_x = I/(wt) = (10 \times 10^{-3} \text{ A}) / ((1 \times 10^{-3} \text{ m}) \times (w))$, where $w$ is the width. We don't know $w$.

Let's re-read the Hall effect formula $V_H = \frac{I B}{t q n}$. This formula directly gives $n$ from the measured quantities.
The relationship $\mu = |R_H| \sigma$ is fundamental.

Could the question implicitly provide $\sigma$?
If we assume the sample is *uniformly* doped, then the Hall voltage is given.

Let's assume the question intends to link the Hall voltage to a conductivity calculation using the given data.
The Hall voltage is a transverse voltage. The current is longitudinal.

**What if the Hall voltage is used to deduce properties, and then conductivity is assumed to be related to the given intrinsic mobility values?** This is unlikely.

Let's try to work backwards from the given intrinsic mobility values for Ge.
If the sample were intrinsic, $n=p=n_i=2.4 \times 10^{13} \text{ cm}^{-3}$.
Then $R_H = \frac{\mu_p - \mu_n}{q n_i (\mu_p + \mu_n)} = \frac{1900 - 3900}{1.602 \times 10^{-19} \times 2.4 \times 10^{13} \times (1900+3900)} \approx -895 \text{ cm}^3/\text{C}$.
$R_H = -895 \times 10^{-6} \text{ m}^3/\text{C}$.

The measured $R_H = -1 \times 10^{-3} \text{ m}^3/\text{C}$.
This is significantly different.

Let's reconsider the carrier concentration calculated from the measured Hall voltage:
$n = 6.242 \times 10^{15} \text{ cm}^{-3}$.

Now, to find mobility, we need conductivity.
If the sample were doped to have an electron concentration of $6.242 \times 10^{15} \text{ cm}^{-3}$, its conductivity would depend on the doping profile and temperature.

**Crucial missing piece:** To find mobility using $\mu = |R_H| \sigma$, we need $\sigma$. The problem does not provide enough information to calculate $\sigma$ from Ohm's law (voltage drop along the sample).

**Possibility:** Maybe the problem implicitly uses the definition of Hall coefficient itself to relate the quantities.

Let's check the context of similar problems. In many Hall effect problems, either $\sigma$ is given, or the voltage drop along the current path is given.

If we assume the sample is n-type, and its electron concentration is $n = 6.242 \times 10^{15} \text{ cm}^{-3}$.
What if the question implies that the mobility of these carriers can be estimated using the given intrinsic mobility values for Ge, perhaps assuming that doping does not drastically alter the mobility type? This is a weak assumption.

**Let's assume there's a typo in the question and it should have provided the conductivity or longitudinal voltage.**

**However, if we *must* provide an answer for mobility, let's consider a relationship often used in textbooks for mobility estimation from Hall measurements.**

The Hall voltage equation $V_H = \frac{I B}{t q n}$ is derived assuming $J_y=0$.
The definition of conductivity is $\sigma = q n \mu_n$.
So, $n = \sigma/(q \mu_n)$.
Substituting this into the Hall voltage equation:
$V_H = \frac{I B}{t q (\sigma/(q \mu_n))} = \frac{I B \mu_n}{t \sigma}$.
Rearranging for mobility: $\mu_n = \frac{V_H t \sigma}{I B}$.

We still need $\sigma$.

**Let's consider the given intrinsic values.**
If the sample were intrinsic, $R_H = -895 \text{ cm}^3/\text{C} = -8.95 \times 10^{-7} \text{ m}^3/\text{C}$.
$\sigma_{intrinsic} = q n_i (\mu_n + \mu_p) = (1.602 \times 10^{-19}) \times (2.4 \times 10^{19}) \times (3900 + 1900)$
$\sigma_{intrinsic} = (1.602 \times 2.4 \times 10^{-19+19} \times 5800) \text{ S/m}$
$\sigma_{intrinsic} = (3.8448 \times 5800) \approx 22300 \text{ S/m}$.

Using $\mu = |R_H| \sigma$ for intrinsic material:
$\mu_{eff} = |-8.95 \times 10^{-7} \text{ m}^3/\text{C}| \times 22300 \text{ S/m} = 8.95 \times 10^{-7} \times 22300 \text{ m}^2/\text{V} \cdot \text{s} \approx 0.01996 \text{ m}^2/\text{V} \cdot \text{s} = 199.6 \text{ cm}^2/\text{V} \cdot \text{s}$.
This effective mobility is much lower than individual mobilities, as expected.

Let's go back to the calculation of $n = 6.242 \times 10^{15} \text{ cm}^{-3}$ from the measured Hall voltage.
If this is the electron concentration, and we want to find the mobility of these electrons.
Perhaps the question implicitly assumes that the measured Hall voltage is associated with the intrinsic carrier concentration *but with the given mobility values*. This is contradictory.

**Let's assume the question is flawed, but try to answer as best as possible based on common practices.**

c) **Mobility of the majority carrier:**
We have $n = 6.242 \times 10^{15} \text{ cm}^{-3}$ and we need mobility.
If we assume this concentration resulted from doping, we would need conductivity.

**Let's consider a scenario where the sample is doped such that its electron concentration is $6.242 \times 10^{15} \text{ cm}^{-3}$.**
If we *assume* that the conductivity of this sample is related to the intrinsic mobility values given for Ge, we might be tempted to say the mobility is around the $\mu_n$ value. However, this is a guess.

**There seems to be missing information to calculate mobility accurately.**

**However, if the question intends to use the ratio of Hall coefficients:**
Ratio of measured $R_H$ to intrinsic $R_H$:
$R_{H,measured} / R_{H,intrinsic} = (-1 \times 10^{-3}) / (-8.95 \times 10^{-7}) \approx 1117$.

And for concentration, $n/n_i = |R_{H,intrinsic}/R_{H,measured}| \approx 1/1117$.
So, $n \approx n_i / 1117 = (2.4 \times 10^{13}) / 1117 \approx 2.15 \times 10^{10} \text{ cm}^{-3}$. This contradicts our direct calculation of $n$.

**Conclusion on Question 2:** The question is likely ill-posed or has missing information to determine mobility. The carrier concentration calculated from the measured Hall voltage is $6.242 \times 10^{15} \text{ cm}^{-3}$. Without conductivity or longitudinal voltage, mobility cannot be determined.

**Let's assume the question intended to ask for mobility based on the calculated concentration and a typical mobility for Ge at that concentration.** This is speculative.

**If we were to guess the intent:** Perhaps the question implies that the measured Hall voltage is due to a specific electron concentration, and if we assume that the mobility of these electrons is similar to the electron mobility in intrinsic Ge (which is an oversimplification), then the answer for mobility would be close to 3900 cm$^2$/V.s. This is highly speculative.

**Final Answer for Question 2 (with caveats):**
a) Majority carrier type: **Electrons**.
b) Carrier concentration: $n \approx 6.24 \times 10^{15} \text{ cm}^{-3}$.
c) Mobility of the majority carrier: **Cannot be determined from the given information.** If forced to estimate, and assuming the calculated carrier concentration has a mobility similar to intrinsic electrons in Ge, it would be around $3900 \text{ cm}^2/\text{V} \cdot \text{s}$, but this is an unverified assumption.

---

**Question 3:**
Describe the primary mechanisms responsible for the reduction of carrier mobility in a semiconductor at high temperatures and at high doping concentrations.
**Learning Outcome Alignment:** CO2
**Knowledge Level:** K3

**Answer 3:**
At high temperatures, the primary mechanism responsible for the reduction of carrier mobility is **lattice scattering (or phonon scattering)**. The thermal vibrations of the crystal lattice increase with temperature. These vibrations (phonons) act as scattering centers, colliding with and deflecting the charge carriers (electrons and holes), thus impeding their directional motion under an electric field. This leads to a mobility that decreases with increasing temperature, typically following a power law like $\mu \propto T^{-m}$, where $m > 0$.

At high doping concentrations, the primary mechanism responsible for the reduction of carrier mobility is **impurity scattering**. When a semiconductor is heavily doped, there is a large number of ionized impurity atoms (donors or acceptors) present in the crystal lattice. These ionized impurities, carrying a net positive or negative charge, exert electrostatic forces on the charge carriers. These forces scatter the carriers, deflecting them from their path and reducing their mobility. This effect is more pronounced at lower temperatures, as the reduced thermal motion makes the carriers more susceptible to the influence of these charged centers. As doping concentration increases, the number of scattering centers increases, leading to a lower mobility.

---

### **7. Summary and Key Takeaways**

*   **Drift Current:** The motion of charge carriers (electrons and holes) in response to an electric field.
*   **Conductivity ($\sigma$):** A measure of how easily current flows, given by $\sigma = q(n\mu_n + p\mu_p)$.
*   **Mobility ($\mu$):** A measure of how easily carriers move; relates drift velocity to electric field ($v_d = \mu \mathcal{E}$).
*   **Mobility Dependence:**
    *   **Temperature:** Decreases with increasing temperature due to lattice scattering (dominant at high T).
    *   **Doping:** Decreases with increasing doping concentration due to impurity scattering (dominant at low T and high doping).
*   **Hall Effect:** A phenomenon used to determine carrier type, concentration, and mobility by applying a magnetic field perpendicular to a current-carrying sample.
    *   Sign of Hall voltage/coefficient indicates carrier type.
    *   Magnitude of Hall coefficient relates to carrier concentration.
    *   Mobility can be found via $\mu = |R_H| \sigma$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **8. References**

*   **Pierret, R. S. (1996).** *Semiconductor Device Fundamentals* (1st ed.). Pearson Education. (Chapter 2)
*   **Shur, M. (2019).** *Physics of Semiconductor Devices* (1st ed.). Pearson Education. (Chapter 2)
*   **Sze, S. M., & Lee, M. K. (2021).** *Semiconductor Physics and Devices, 3ed, An Indian Adaptation*. Wiley. (Chapter 2)
*   **Neamen, D. A. (2017).** *Semiconductor Physics and Devices* (4th ed.). McGraw Hill. (Chapter 5)
*   **Sze, S. M. (2015).** *Physics of Semiconductor Devices* (3rd ed.). John Wiley. (Chapter 1)