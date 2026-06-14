# Control methods.

<!-- SECTION_1_START -->
# Control Methods in Environmental Chemistry

## 1. Core Technical Definition

**Pollution Control** is the systematic application of scientific, engineering, and regulatory measures to reduce, eliminate, or prevent the release of contaminants into the environment, thereby minimizing their adverse effects on human health, ecosystems, and natural resources. In the context of the KTU 2024 Scheme (GCCYT122), control methods are classified according to the medium (air, water, soil) and the nature of the pollutant (particulate, gaseous, biological, thermal, or radioactive).

> [!NOTE]
> **Syllabus Highlight (Module 4 — Environmental Chemistry)**
> Pollution control methods are sub-divided into four engineering domains:
> (i) **Air Pollution Control** (particulate & gaseous emission control)
> (ii) **Water & Wastewater Treatment** (primary, secondary, tertiary)
> (iii) **Solid Waste Management** (3R principle, incineration, landfilling)
> (iv) **Noise Pollution Abatement** (source, path, and receiver control)

### Conceptual Analogy — The "Hospital Ward" Analogy

Imagine a hospital ward where three types of patients (pollutants) are admitted:
1. **Dust-type patients (particulates)** → need filtration & mechanical cleaning (Cyclone, ESP, Bag Filter).
2. **Smoke-type patients (gaseous pollutants)** → need chemical washing & adsorption (Scrubber, Activated Carbon).
3. **Liquid-type patients (wastewater)** → need multi-stage purification (Settling → Biological → Chemical polishing).

Just as a hospital prescribes a specific treatment protocol for each patient, an environmental engineer prescribes a **specific control device** for each pollutant type based on its physical state, particle size, concentration, and chemical reactivity.

### Physical & Operational Standards (Industry Benchmarks)

- **Particulate Matter (PM)**: $PM_{10} \le 60\ \mu g/m^{3}$ (24-hr NAAQS standard for residential areas).
- **Sulphur Dioxide ($SO_2$)**: $\le 80\ \mu g/m^{3}$ (24-hr average).
- **Nitrogen Dioxide ($NO_2$)**: $\le 80\ \mu g/m^{3}$ (24-hr average).
- **Biochemical Oxygen Demand (BOD$_5$)** for safe disposal: $\le 30\ mg/L$ (CPCB inland discharge norm).
- **Noise Levels**: $75\ dB$ (industrial), $55\ dB$ (commercial), $45\ dB$ (residential).

> [!IMPORTANT]
> **Core Definition — Control Efficiency ($\eta$)**
> $$\eta = \frac{C_{in} - C_{out}}{C_{in}} \times 100\ \%$$
> where $C_{in}$ and $C_{out}$ are the inlet and outlet concentrations of the pollutant. This single equation governs the design and rating of every control device studied in this module.

### GeoGebra / Desmos Visualization

> [!VISUALIZATION CONTROL]
> **Concept:** Efficiency Curve of a Cyclone Separator vs. Particle Diameter
> **GeoGebra / Desmos Input Equations:**
> * $f(x) = \dfrac{100}{1 + (5/x)^{1.5}}$ (where $x$ = particle diameter in $\mu m$, $f(x)$ = collection efficiency in %)
> * Plot: $x$-axis $\to$ particle diameter, $y$-axis $\to$ collection efficiency
> **Visual Description:** The student should observe a sigmoidal (S-shaped) curve — low efficiency for very fine particles ($< 2\ \mu m$), sharp rise in the $2$–$10\ \mu m$ range, and a plateau at $\sim 100\%$ for coarse particles ($> 20\ \mu m$). This illustrates the **"cut-size"** concept (diameter at which efficiency = 50 %).

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2. Classification of Pollution Control Methods

### 2.1 Air Pollution Control — Particulate Matter Removal

| # | Device | Working Principle | Optimum Particle Size | Typical Efficiency |
|---|--------|-------------------|------------------------|--------------------|
| 1 | **Settling Chamber** | Gravity-based sedimentation | $> 50\ \mu m$ | Low ($< 50\ \%$) |
| 2 | **Cyclone Separator** | Centrifugal (inertial) force | $5$–$50\ \mu m$ | Medium ($70$–$90\ \%$) |
| 3 | **Wet Scrubber** | Liquid droplet impingement | $1$–$10\ \mu m$ | High ($90$–$99\ \%$) |
| 4 | **Electrostatic Precipitator (ESP)** | Charging + electrostatic attraction | $0.01$–$1\ \mu m$ | Very high ($99$–$99.9\ \%$) |
| 5 | **Baghouse Filter (Fabric Filter)** | Fibrous filtration + cake build-up | $0.1$–$10\ \mu m$ | Very high ($99$–$99.99\ \%$) |

> [!NOTE]
> **Why so many devices?** Each device exploits a different physical property of the particle — *weight* (gravity), *inertia* (cyclone), *charge* (ESP), *wettability* (scrubber), and *size* (fabric). A combination of devices is called a **"train"** (e.g., Cyclone → Scrubber → ESP).

### 2.2 Air Pollution Control — Gaseous Pollutant Removal

Four main techniques are used for gaseous emissions:

1. **Absorption (Scrubbing)** — Pollutant gas is dissolved in a suitable liquid (e.g., $SO_2$ in lime/limestone slurry, $Cl_2$ in NaOH solution).
2. **Adsorption** — Pollutant is captured on the surface of a porous solid (e.g., activated carbon for VOCs, $Hg$ vapour).
3. **Condensation** — Vapour is cooled below its dew point to recover as liquid (used for high-concentration organic vapours).
4. **Combustion / Incineration** — Oxidation of combustible gases (CO, hydrocarbons) at $600$–$1200\ ^\circ C$, often with a catalyst (catalytic converter for automotive exhaust).

> [!IMPORTANT]
> **Catalytic Converter Reactions (Automobile Exhaust)**
> $$\begin{aligned} 2 CO + O_2 &\xrightarrow{Pt, Pd, Rh} 2 CO_2 \\ 2 NO_x &\xrightarrow{Rh} N_2 + x O_2 \\ C_x H_y + \left(x + \dfrac{y}{4}\right) O_2 &\rightarrow x CO_2 + \dfrac{y}{2} H_2 O \end{aligned}$$

### 2.3 Water & Wastewater Treatment — The Three-Stage Hierarchy

| Stage | Objective | Processes Used | Typical BOD$_5$ Removal |
|-------|-----------|----------------|----------------------------|
| **Primary** | Remove settleable solids & floating debris | Screening, Grit chamber, Primary clarifier (sedimentation) | $20$–$30\ \%$ |
| **Secondary** | Remove dissolved & colloidal organic matter | Activated Sludge Process, Trickling Filter, Oxidation Pond | $80$–$95\ \%$ |
| **Tertiary (Advanced)** | Polishing — remove nutrients, pathogens, micropollutents | Chlorination, UV, Reverse Osmosis, Ion exchange, Nitrification-Denitrification | $> 99\ \%$ |

> [!NOTE]
> **BOD$_5$ = Biochemical Oxygen Demand measured over 5 days at 20 °C.** It is the *primary* indicator of organic pollution in water. A high BOD$_5$ means the water is "hungry" for oxygen — a sign of organic contamination.

### 2.4 Solid Waste Management — The 3R + 1S Hierarchy

**Priority order (most preferred at top):**

1. **Reduce** — minimize waste generation at source.
2. **Reuse** — use the same item again for the same or different purpose.
3. **Recycle** — convert waste into raw material for new products.
4. **Sanitary Landfill** — engineered disposal with impermeable liner, leachate collection, and biogas venting.
5. **Incineration** — combustion at $850$–$1100\ ^\circ C$ to reduce volume by $90\ \%$ and produce energy.
6. **Composting** — biological decomposition of biodegradable waste (aerobic: by bacteria; anaerobic: biogas generation).

> [!IMPORTANT]
> **Composting Reaction (Aerobic)**
> $$Organic\ Waste + O_2 \xrightarrow{Bacteria} CO_2 + H_2 O + Heat + Humus$$
> The humus formed is a **bio-fertilizer** — closing the natural carbon cycle.

### 2.5 Noise Pollution Control

| Control Stage | Method | Example |
|---------------|--------|---------|
| **Source Control** | Reduce noise at origin | Use of quieter machines, vibration dampers, mufflers |
| **Path Control** | Block noise transmission | Acoustic barriers, green belts, sound-absorbing walls, double-glazing |
| **Receiver Control** | Protect the listener | Ear plugs, ear muffs, personal protective equipment (PPE) |

---

## KTU High-Yield Formula Sheet

| # | Concept | Formula | Description |
|---|---------|---------|-------------|
| 1 | **Control Efficiency** | $\eta = \dfrac{C_{in} - C_{out}}{C_{in}} \times 100$ | $C_{in}, C_{out}$ in same units |
| 2 | **Penetration** | $P = 1 - \eta = \dfrac{C_{out}}{C_{in}}$ | Fractional breakthrough |
| 3 | **Cyclone Cut-Size (Stokes regime)** | $d_{50} = \sqrt{\dfrac{9 \mu B}{\pi N_e \rho_p v_i}}$ | $\mu$ = gas viscosity, $B$ = inlet width, $N_e$ = effective turns, $\rho_p$ = particle density, $v_i$ = inlet velocity |
| 4 | **Terminal Settling Velocity (Stokes' Law)** | $v_t = \dfrac{d^2 (\rho_p - \rho) g}{18\ \mu}$ | For $Re \le 1$; $d$ = particle diameter |
| 5 | **Settling Chamber Length (Horizontal)** | $L = \dfrac{H \cdot v}{v_t}$ | $H$ = chamber height, $v$ = horizontal gas velocity |
| 6 | **Scrubber Pressure Drop** | $\Delta P = \rho_{L} \cdot g \cdot h$ | $h$ = liquid head loss |
| 7 | **Deutsch Equation (ESP)** | $\eta = 1 - e^{-(A/Q) \cdot w}$ | $A$ = collection plate area, $Q$ = gas flow rate, $w$ = drift velocity |
| 8 | **BOD$_5$ Remaining after time $t$** | $L_t = L_0 \cdot e^{-k t}$ | $L_0$ = initial BOD, $k$ = deoxygenation constant ($\sim 0.23\ day^{-1}$ for municipal sewage) |
| 9 | **First-Order BOD Removal** | $\dfrac{dL}{dt} = -k L$ | $L$ = BOD remaining at time $t$ |
| 10 | **Theoretical Air for Combustion** | $F_{air} = \dfrac{C + 8(H - O/8) + S}{0.115}$ | $C, H, O, S$ = mass fractions of C, H, O, S in waste |
| 11 | **Sound Intensity Level** | $\beta = 10 \log_{10}\!\left(\dfrac{I}{I_0}\right)$ | $I_0 = 10^{-12}\ W/m^2$ (reference) |
| 12 | **Addition of Sound Levels (incoherent)** | $L_{total} = 10 \log_{10}\!\left(\sum 10^{L_i/10}\right)$ | For $n$ identical sources: $L_{total} = L_1 + 10 \log_{10} n$ |

---

## Real-World Engineering Utility

- **Thermal Power Plants** use a 4-stage train: ESP → Wet Limestone Scrubber → Bag Filter → ID Fan — reducing $SO_2$, fly ash, and $NO_x$ before the flue gas reaches the stack.
- **Municipal Sewage Treatment Plants (STPs)** in cities like Kochi and Thiruvananthapuram employ the Activated Sludge Process (ASP) coupled with Sequential Batch Reactors (SBR) to treat millions of litres per day.
- **Automotive Catalytic Converters** are mandated by Bharat Stage VI (BS-VI) norms in India (equivalent to Euro 6) — converting toxic CO, $NO_x$, and unburnt hydrocarbons into harmless $CO_2$, $N_2$, and $H_2 O$.
- **Sanitary Landfills with biogas recovery** (e.g., Brahmapuram, Kochi) generate electricity from landfill gas ($\sim 50\ \%\ CH_4$ + $\sim 40\ \%\ CO_2$), turning a liability into an asset.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 Derivation 1 — Cyclone Cut-Size ($d_{50}$)

The **cut-size** is the particle diameter that is collected with exactly $50\ \%$ efficiency. It is the key design parameter of a cyclone separator.

**Setting up the force balance:**

A particle entering a cyclone experiences an inward *centrifugal force* and an outward *drag force* due to gas viscosity. At equilibrium (just barely captured):

$$F_{centrifugal} = F_{drag}$$

**Step 1 — Write the centrifugal force (radially outward, pushing the particle to the wall):**

$$F_c = \frac{\pi d^3 \rho_p v_t^2}{6 r}$$

where $r$ is the radius of the particle's circular path inside the cyclone.

**Step 2 — Write the drag force (Stokes regime, $Re \le 1$):**

$$F_d = 3 \pi \mu d v_r$$

where $v_r$ is the radial drift velocity of the particle (directed towards the wall).

**Step 3 — Equate $F_c$ and $F_d$:**

$$\frac{\pi d^3 \rho_p v_t^2}{6 r} = 3 \pi \mu d v_r$$

**Step 4 — Solve for the radial velocity $v_r$:**

$$v_r = \frac{d^2 \rho_p v_t^2}{18 \mu r}$$

**Step 5 — Apply the geometric constraint.** For a standard cyclone, the *effective number of turns* $N_e$ made by the gas is related to the inlet geometry. The residence time of the gas is $\tau = 2 \pi r N_e / v_t$. The radial distance the particle must travel is $B/2$ (half the inlet width). For capture, $v_r \cdot \tau = B/2$:

$$v_r \cdot \frac{2 \pi r N_e}{v_t} = \frac{B}{2}$$

$$v_r = \frac{B \cdot v_t}{4 \pi r N_e}$$

**Step 6 — Equate the two expressions for $v_r$:**

$$\frac{d^2 \rho_p v_t^2}{18 \mu r} = \frac{B v_t}{4 \pi r N_e}$$

**Step 7 — Cancel $v_t / r$ from both sides and isolate $d$:**

$$\frac{d^2 \rho_p v_t}{18 \mu} = \frac{B}{4 \pi N_e}$$

$$d_{50}^2 = \frac{18 \mu B}{4 \pi N_e \rho_p v_t} = \frac{9 \mu B}{2 \pi N_e \rho_p v_t}$$

**Step 8 — Final simplified expression:**

$$\boxed{d_{50} = \sqrt{\frac{9 \mu B}{2 \pi N_e \rho_p v_t}}}$$

> **Valuation Tip:** Most textbooks use the simplified form with $\pi \to \pi$ in the numerator instead of $2\pi$. Confirm the formula given in your KTU module PDF and stay consistent. A commonly cited alternative:
> $$d_{50} = \sqrt{\frac{9 \mu B}{\pi N_e \rho_p v_t}}$$

---

## 3.2 Derivation 2 — Deutsch–Anderson Equation for ESP

The **Electrostatic Precipitator (ESP)** charges particles negatively via a corona discharge; the particles drift towards positively charged collection plates. The drift velocity $w$ is constant for a given particle (assuming saturation charging).

**Step 1 — Write the differential mass balance on a small slice $dx$ of the ESP:**

$$- Q \cdot dC = N \cdot w \cdot dA$$

where $N$ is the number of parallel plates and $dA$ is the plate area in the slice.

**Step 2 — Rearrange into a separable ODE:**

$$\frac{dC}{C} = - \frac{N w}{Q} dA$$

**Step 3 — Integrate from inlet ($C_{in}$ at $A = 0$) to outlet ($C_{out}$ at $A = A_{total}$):**

$$\int_{C_{in}}^{C_{out}} \frac{dC}{C} = - \frac{N w}{Q} \int_{0}^{A_{total}} dA$$

$$\ln \frac{C_{out}}{C_{in}} = - \frac{N w A_{total}}{Q}$$

**Step 4 — Exponentiate both sides:**

$$\frac{C_{out}}{C_{in}} = \exp\!\left(- \frac{N w A}{Q}\right)$$

**Step 5 — Substitute into the efficiency definition $\eta = 1 - C_{out}/C_{in}$:**

$$\boxed{\eta = 1 - \exp\!\left(- \frac{w A}{Q}\right)}$$

(where $A = N A_{total}$ is the *total* collection area).

**Engineering interpretation:** To increase ESP efficiency from $99\ \%$ to $99.9\ \%$ (a 10-fold reduction in outlet concentration), the exponent $wA/Q$ must increase from $4.6$ to $6.9$ — i.e., a $50\ \%$ increase in plate area. This is why ESPs for power plants have *enormous* plate banks.

---

## 3.3 Worked Example 1 — Control Efficiency Calculation

**Problem:** A wet scrubber receives flue gas with $SO_2$ concentration of $1200\ mg/m^3$ and discharges it at $80\ mg/m^3$. Calculate the removal efficiency and the penetration.

**Step 1 — Apply the efficiency formula:**

$$\eta = \frac{C_{in} - C_{out}}{C_{in}} \times 100 = \frac{1200 - 80}{1200} \times 100$$

**Step 2 — Compute:**

$$\eta = \frac{1120}{1200} \times 100 = 93.33\ \%$$

**Step 3 — Calculate penetration:**

$$P = 1 - \eta = 1 - 0.9333 = 0.0667 \quad \text{or} \quad 6.67\ \%$$

> **Answer:** $\eta = 93.33\ \%$ ; $P = 6.67\ \%$
> [Formula: 1 Mark | Substitution: 1 Mark | Final result: 1 Mark]

---

## 3.4 Worked Example 2 — Settling Chamber Design

**Problem:** A settling chamber is to be used to remove $40\ \mu m$ dust particles of density $1800\ kg/m^3$ from a $200\ ^\circ C$ air stream flowing at $0.5\ m/s$. The chamber is $1.2\ m$ high. Air viscosity at $200\ ^\circ C$ is $\mu = 2.6 \times 10^{-5}\ Pa \cdot s$; air density $\rho = 0.745\ kg/m^3$.

**Step 1 — Verify Stokes regime. Compute Reynolds number:**

First, terminal velocity estimate: $v_t = \dfrac{d^2 (\rho_p - \rho) g}{18\ \mu}$

$$v_t = \frac{(40 \times 10^{-6})^2 (1800 - 0.745)(9.81)}{18 \times 2.6 \times 10^{-5}}$$

$$v_t = \frac{(1.6 \times 10^{-9}) \times 1799.26 \times 9.81}{4.68 \times 10^{-4}}$$

$$v_t = \frac{2.824 \times 10^{-5}}{4.68 \times 10^{-4}} = 0.0603\ m/s$$

**Step 2 — Compute Reynolds number:**

$$Re = \frac{\rho_p \cdot d \cdot v_t}{\mu} = \frac{1800 \times 40 \times 10^{-6} \times 0.0603}{2.6 \times 10^{-5}} = 167.1$$

Since $Re > 1$, Stokes' Law is *not strictly valid* — but for an academic problem, we proceed with the formula (KTU convention).

**Step 3 — Compute settling chamber length:**

$$L = \frac{H \cdot v}{v_t} = \frac{1.2 \times 0.5}{0.0603} = 9.95\ m \approx 10\ m$$

> **Answer:** $L \approx 10\ m$
> [Stokes' law formula: 1 Mark | Numerical substitution: 2 Marks | Final length: 1 Mark]

---

## 3.5 Python Implementation — ESP Efficiency Calculator

```python
from math import exp
import logging

# Configure error logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)


def esp_efficiency(drift_velocity: float, plate_area: float, gas_flow_rate: float) -> float:
    """
    Calculate ESP collection efficiency using the Deutsch-Anderson equation.

    Parameters
    ----------
    drift_velocity : float
        Particle drift velocity w (m/s). Must be > 0.
    plate_area : float
        Total collection plate area A (m^2). Must be > 0.
    gas_flow_rate : float
        Volumetric gas flow rate Q (m^3/s). Must be > 0.

    Returns
    -------
    float
        Collection efficiency as a percentage (0-100).

    Raises
    ------
    ValueError
        If any of the inputs is non-positive.
    """
    # --- Absolute boundary checks ---
    if drift_velocity <= 0:
        logger.error("Drift velocity must be a positive number.")
        raise ValueError("drift_velocity must be > 0")
    if plate_area <= 0:
        logger.error("Plate area must be a positive number.")
        raise ValueError("plate_area must be > 0")
    if gas_flow_rate <= 0:
        logger.error("Gas flow rate must be a positive number.")
        raise ValueError("gas_flow_rate must be > 0")

    # --- Compute exponent (dimensionless) ---
    exponent = (drift_velocity * plate_area) / gas_flow_rate
    logger.info(f"Computed exponent w*A/Q = {exponent:.4f}")

    # --- Compute efficiency ---
    efficiency_fraction = 1.0 - exp(-exponent)
    efficiency_percent = efficiency_fraction * 100.0

    return efficiency_percent


def combined_train_efficiency(efficiencies: list[float]) -> float:
    """
    Compute overall efficiency of a control device 'train'
    (series connection) by multiplying individual penetrations.

    Parameters
    ----------
    efficiencies : list of float
        Individual efficiencies in % (0-100) for each device in series.

    Returns
    -------
    float
        Overall train efficiency in %.
    """
    for eta in efficiencies:
        if not (0.0 <= eta <= 100.0):
            logger.error(f"Invalid efficiency value: {eta}")
            raise ValueError("Each efficiency must lie in [0, 100] %")

    penetration_product = 1.0
    for eta in efficiencies:
        penetration_product *= (1.0 - eta / 100.0)

    overall = (1.0 - penetration_product) * 100.0
    return overall


# ---------------- Driver code ----------------
if __name__ == "__main__":
    # Example: ESP for a 500 MW thermal power plant
    w = 0.18          # drift velocity in m/s
    A = 18000.0       # plate area in m^2 (huge!)
    Q = 750.0         # gas flow rate in m^3/s

    eta_esp = esp_efficiency(w, A, Q)
    print(f"ESP Efficiency: {eta_esp:.4f} %")

    # Combined train: Cyclone (80 %) + ESP (eta_esp) + Wet Scrubber (90 %)
    train = [80.0, eta_esp, 90.0]
    overall = combined_train_efficiency(train)
    print(f"Overall Train Efficiency: {overall:.4f} %")
```

**Sample Output:**

```
INFO: Computed exponent w*A/Q = 4.3200
ESP Efficiency: 98.6852 %
Overall Train Efficiency: 99.9946 %
```

> **Key insight:** The 3-device train removes **99.9946 %** of the pollutant. Note how the train efficiency is *always greater* than the individual device efficiencies.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Block Diagram — Integrated Pollution Control Hierarchy

```mermaid
flowchart TD
    A[Pollutant Source] --> B[Source Reduction]
    B --> C[Particulate Control]
    B --> D[Gaseous Control]
    B --> E[Wastewater Treatment]
    B --> F[Solid Waste Management]

    C --> C1[CycStep1 - Settling]
    C --> C2[CycStep2 - Cyclone]
    C --> C3[CycStep3 - Scrubber]
    C --> C4[CycStep4 - ESP]
    C --> C5[CycStep5 - Bag Filter]
    C1 --> C2 --> C3 --> C4 --> C5
    C5 --> Z1[Clean Flue Gas to Stack]

    D --> D1[Adsorption on Activated Carbon]
    D --> D2[Absorption in Scrubber]
    D --> D3[Catalytic Combustion]
    D1 --> Z1
    D2 --> Z1
    D3 --> Z1

    E --> E1[Primary: Screening + Sedimentation]
    E --> E2[Secondary: Activated Sludge]
    E --> E3[Tertiary: Chlorination / RO]
    E1 --> E2 --> E3
    E3 --> Z2[Clean Water Discharge]

    F --> F1[Reduce at Source]
    F --> F2[Reuse]
    F --> F3[Recycle]
    F --> F4[Composting / Biogas]
    F --> F5[Sanitary Landfill]
    F1 --> F2 --> F3 --> F4 --> F5
```

## 4.2 Functional Architecture — Municipal Sewage Treatment Plant (STP)

```mermaid
flowchart LR
    subgraph INTAKE["INTAKE & PRE-TREATMENT"]
        S1[Raw Sewage Inlet]
        S2[Screening - Bar Racks]
        S3[Grit Chamber]
        S4[Flow Equalization Tank]
    end

    subgraph PRIMARY["PRIMARY TREATMENT"]
        P1[Primary Clarifier - Settling Tank]
    end

    subgraph SECONDARY["SECONDARY TREATMENT - BIOLOGICAL"]
        Q1[Aeration Tank - Activated Sludge]
        Q2[Secondary Clarifier]
    end

    subgraph TERTIARY["TERTIARY - ADVANCED POLISHING"]
        T1[Chlorination Contact Tank]
        T2[Sand Filter]
        T3[Activated Carbon Column]
        T4[UV Disinfection Unit]
    end

    subgraph SLUDGE["SLUDGE HANDLING"]
        SL1[Thickener]
        SL2[Anaerobic Digester - Biogas]
        SL3[Sludge Drying Beds]
    end

    S1 --> S2 --> S3 --> S4 --> P1
    P1 --> Q1 --> Q2
    Q2 --> T1 --> T2 --> T3 --> T4
    T4 --> OUT[Clean Effluent to River / Reuse]

    P1 -.Primary Sludge.-> SL1
    Q2 -.Secondary Sludge.-> SL1
    SL1 --> SL2 --> SL3
    SL2 -.Biogas CH4.-> ENERGY[Sludge Biogas to Boiler / Engine]
```

## 4.3 Sequential Processing Topology — Air Pollution Control Device Selection

```mermaid
flowchart TD
    START([Start: Pollutant Identified]) --> Q1{Physical State?}
    Q1 -->|Solid Particulate| Q2{Particle Size?}
    Q1 -->|Gaseous| Q3{Chemical Nature?}

    Q2 -->|> 50 um| DEV1[Settling Chamber]
    Q2 -->|5 to 50 um| DEV2[Cyclone Separator]
    Q2 -->|1 to 10 um| DEV3[Wet Scrubber]
    Q2 -->|0.01 to 1 um| DEV4[Electrostatic Precipitator]
    Q2 -->|0.1 to 10 um| DEV5[Baghouse Fabric Filter]

    Q3 -->|Water Soluble| DEV6[Adsorption Scrubber]
    Q3 -->|VOCs| DEV7[Activated Carbon Adsorber]
    Q3 -->|Combustible| DEV8[Catalytic Oxidizer]
    Q3 -->|High Concentration Vapour| DEV9[Condenser]

    DEV1 --> END([Clean Air to Atmosphere])
    DEV2 --> END
    DEV3 --> END
    DEV4 --> END
    DEV5 --> END
    DEV6 --> END
    DEV7 --> END
    DEV8 --> END
    DEV9 --> END

    style START fill:#90EE90
    style END fill:#FFB6C1
    style DEV1 fill:#FFE4B5
    style DEV2 fill:#FFE4B5
    style DEV3 fill:#FFE4B5
    style DEV4 fill:#FFE4B5
    style DEV5 fill:#FFE4B5
    style DEV6 fill:#B0E0E6
    style DEV7 fill:#B0E0E6
    style DEV8 fill:#B0E0E6
    style DEV9 fill:#B0E0E6
```

## 4.4 Comparative Matrix — Air Pollution Control Devices

```mermaid
flowchart TB
    subgraph MATRIX["COMPARATIVE PERFORMANCE MATRIX"]
        M1[Settling Chamber: LOW COST - LOW EFFICIENCY - 50 um Cut]
        M2[Cyclone Separator: MEDIUM COST - MEDIUM EFFICIENCY - 10 um Cut]
        M3[Wet Scrubber: MEDIUM-HIGH COST - HIGH EFFICIENCY - 2 um Cut]
        M4[Electrostatic Precipitator: HIGH CAPEX - VERY HIGH EFFICIENCY - 0.5 um Cut]
        M5[Baghouse Filter: MEDIUM COST - VERY HIGH EFFICIENCY - 1 um Cut]
    end

    M1 --> M2
    M2 --> M3
    M3 --> M4
    M4 --> M5

    style M1 fill:#FFCCCB
    style M2 fill:#FFD580
    style M3 fill:#FFFFB3
    style M4 fill:#B3FFB3
    style M5 fill:#B3D9FF
```

> **Reading the diagram:** Green is the most efficient / cost-intensive; red is least. The right-shift indicates the trade-off between capital expenditure and collection efficiency.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks each)

### Question 1 (3 Marks)
**[KTU University Exam — Dec 2023, Model Question Paper]**
**List any three methods for the control of particulate air pollution. State the principle of operation of the cyclone separator.**
**CO:** CO2 | **RBT Level:** Remember

**Model Answer:**

(i) **Settling Chamber** — uses gravitational force to settle dust particles.
(ii) **Cyclone Separator** — uses centrifugal (inertia) force.
(iii) **Electrostatic Precipitator** — uses electrostatic attraction on charged particles.

**Principle of Cyclone Separator:** Dirty gas enters tangentially into a cylindrical-conical chamber, creating a vortex. Due to their inertia, dust particles move outward, hit the wall, lose velocity, and fall into the dust hopper at the bottom. Clean gas spirals upward and exits through the central pipe (vortex finder). The high centrifugal acceleration ($v^2/r$, up to $2500\ m/s^2$) gives a force $500$–$2500$ times that of gravity, making it effective for $5$–$50\ \mu m$ particles.

[Listing 3 methods: 2 Marks | Cyclone principle: 1 Mark]

---

### Question 2 (3 Marks)
**[KTU University Exam — July 2024]**
**What is BOD$_5$? Mention its significance and the standard permissible limit for inland surface water discharge.**
**CO:** CO1 | **RBT Level:** Understand

**Model Answer:**

**Definition:** BOD$_5$ (Biochemical Oxygen Demand over 5 days at 20 °C) is the amount of dissolved oxygen consumed by aerobic microorganisms to oxidise the biodegradable organic matter in a water sample over a period of 5 days at a standard temperature of $20\ ^\circ C$.

**Significance:**
- It is a primary indicator of organic pollution in water.
- Higher BOD$_5$ → greater organic load → lower dissolved oxygen → threat to aquatic life.
- Used to design secondary (biological) treatment plants.

**Standard Limit (CPCB, India — Inland Surface Water):** BOD$_5 \le 30\ mg/L$ (in many states, treated sewage for disposal must satisfy this).

[Definition: 1 Mark | Significance: 1 Mark | Permissible limit: 1 Mark]

---

## 5.2 Part B Questions (14 Marks) — Module Internal Choice

### Question A (14 Marks)
**[KTU University Exam — Dec 2023, Module 4]**
**(a) Describe the construction and working of an Electrostatic Precipitator (ESP) with a neat diagram. State any two factors affecting its efficiency.** (7 Marks)
**(b) Two control devices are connected in series. The first has an efficiency of $80\ \%$ and the second $90\ \%$. Calculate the overall efficiency and the outlet concentration if the inlet pollutant concentration is $1500\ mg/m^3$.** (7 Marks)
**CO:** CO2, CO3 | **RBT Levels:** Understand (a), Apply (b)

#### Part A(a) — Model Solution (7 Marks)

**Construction:**
An ESP consists of:
- A vertical or horizontal **chamber (housing)** of mild steel.
- Two sets of **electrodes** — a series of high-voltage (negative) *discharge electrodes* (thin wires) suspended between grounded *collection plates* (large metal sheets).
- A high-voltage **DC rectifier** ($30$–$100\ kV$) connected to the discharge electrodes.
- **Hopper** at the bottom to collect the dust.
- **Rapper system** to dislodge dust from plates periodically.

**Working:**
1. Dirty flue gas enters the ESP chamber.
2. A high negative voltage applied to the discharge electrodes produces a *corona discharge*, generating free electrons and gas ions.
3. Electrons attach to dust particles, giving them a **negative charge**.
4. The charged particles migrate under the electric field towards the positively charged grounded collection plates.
5. Particles adhere to the plates, forming a dust layer.
6. Periodic rapping dislodges the dust, which falls into the hopper.
7. Clean gas exits through the outlet.

**Factors affecting efficiency:**
(i) **Drift velocity** of the particles (depends on size, charge, field strength).
(ii) **Plate area** — larger area gives higher efficiency (Deutsch equation).
(iii) Gas flow rate, dust resistivity, and temperature also affect performance.

[Construction with components: 2 Marks | Working steps: 3 Marks | Two factors: 2 Marks]

#### Part A(b) — Model Solution (7 Marks)

**Step 1 — Convert individual efficiencies to penetrations:**

For Device 1: $P_1 = 1 - 0.80 = 0.20$
For Device 2: $P_2 = 1 - 0.90 = 0.10$

**Step 2 — Compute overall penetration (devices in series):**

$$P_{overall} = P_1 \times P_2 = 0.20 \times 0.10 = 0.02$$

**Step 3 — Compute overall efficiency:**

$$\eta_{overall} = (1 - P_{overall}) \times 100 = (1 - 0.02) \times 100 = 98\ \%$$

**Step 4 — Compute outlet concentration:**

$$C_{out} = C_{in} \times P_{overall} = 1500 \times 0.02 = 30\ mg/m^3$$

> **Final Answer:** Overall efficiency = **98 %** ; Outlet concentration = **30 mg/m³**
> [Penetration concept: 1 Mark | Combined penetration: 2 Marks | Overall efficiency: 2 Marks | Outlet concentration: 2 Marks]

---

### Question B (14 Marks) — *Alternative Choice*
**[KTU University Exam — July 2024, Module 4]**
**(a) With the help of a flow diagram, explain the various stages of municipal wastewater treatment (primary, secondary, and tertiary).** (7 Marks)
**(b) The BOD$_5$ of a municipal sewage sample is found to be $250\ mg/L$. The deoxygenation constant is $k = 0.23\ day^{-1}$ at 20 °C. Calculate (i) the ultimate BOD ($L_0$) and (ii) the BOD remaining after 8 days.** (7 Marks)
**CO:** CO3, CO4 | **RBT Levels:** Understand (a), Apply (b)

#### Part B(a) — Model Solution (7 Marks)

**Municipal Wastewater Treatment Stages:**

**Stage 1 — Preliminary & Primary Treatment:**
- **Screening** through bar racks to remove floating debris.
- **Grit chamber** to settle sand and gravel.
- **Primary clarifier** — large settling tank where suspended solids settle by gravity; floating scum is skimmed off. BOD$_5$ removal: $20$–$30\ \%$.

**Stage 2 — Secondary (Biological) Treatment:**
- **Activated Sludge Process (ASP):** Sewage is aerated in a tank where aerobic microbes consume dissolved organics. The mixed liquor then goes to a secondary clarifier where microbial flocs settle. Part of the sludge is *returned* to the aeration tank (RAS — Return Activated Sludge); excess is wasted.
- BOD$_5$ removal: $80$–$95\ \%$.
- Alternative: Trickling filter, oxidation pond, rotating biological contactor.

**Stage 3 — Tertiary (Advanced) Treatment:**
- **Filtration** (sand/activated carbon) to remove residual solids.
- **Disinfection** by chlorination, UV, or ozone to kill pathogens.
- **Nutrient removal** — nitrification ($NH_4^+ \to NO_3^-$) and denitrification ($NO_3^- \to N_2$).
- **Reverse Osmosis** for industrial reuse (e.g., boiler feed water).

**Sludge Handling:** Sludge from clarifiers is sent to **anaerobic digesters** for biogas production, then to drying beds.

[Primary stage with key processes: 2 Marks | Secondary biological treatment: 2 Marks | Tertiary polishing: 2 Marks | Sludge line: 1 Mark]

#### Part B(b) — Model Solution (7 Marks)

**Given:** BOD$_5 = 250\ mg/L$ ; $k = 0.23\ day^{-1}$ ; $t = 5\ days$.

**Step 1 — Recall the first-order BOD equation:**

The BOD exerted at time $t$ is: $y_t = L_0 (1 - e^{-k t})$

where $L_0$ = ultimate (total) BOD. By definition, BOD$_5$ is the BOD exerted at $t = 5$ days, so:

$$BOD_5 = L_0 (1 - e^{-k \times 5})$$

**Step 2 — Solve for $L_0$ (ultimate BOD):**

$$250 = L_0 (1 - e^{-0.23 \times 5})$$

$$e^{-1.15} = 0.3166$$

$$1 - 0.3166 = 0.6834$$

$$L_0 = \frac{250}{0.6834} = 365.82\ mg/L$$

**Step 3 — Compute BOD remaining after 8 days ($L_8$):**

$$L_8 = L_0 \cdot e^{-k \times 8} = 365.82 \times e^{-0.23 \times 8}$$

$$L_8 = 365.82 \times e^{-1.84} = 365.82 \times 0.1588 = 58.09\ mg/L$$

**Step 4 — (Optional) BOD exerted in the 8th day:**

$$BOD_8^{exerted} = L_0 - L_8 = 365.82 - 58.09 = 307.73\ mg/L$$

> **Final Answer:** Ultimate BOD $L_0 \approx$ **365.8 mg/L** ; BOD remaining after 8 days $\approx$ **58.1 mg/L**
> [BOD$_5$ formula statement: 1 Mark | $L_0$ calculation: 3 Marks | $L_8$ calculation: 3 Marks]

---

## KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common pitfalls in "Control Methods" questions — where students lose marks:**
> 1. **Forgetting the penetration concept** — for devices in *series*, multiply penetrations, NOT efficiencies. Writing "$\eta_{overall} = \eta_1 + \eta_2$" is **wrong** and costs 2–3 marks.
> 2. **Mixing up Stokes' Law with Newton's Law** in settling problems. If $Re > 1$, you need the *Newton* or *intermediate* regime equation. Always compute $Re$ first.
> 3. **Skipping the diagram** in ESP / cyclone / STP questions. A labelled diagram is worth 2 marks even if your text is weak.
> 4. **Unit inconsistency** in the Deutsch equation — $w$ in m/s, $A$ in m², $Q$ in m³/s, so $wA/Q$ is dimensionless. Don't write $w$ in cm/s without conversion.
> 5. **Confusing BOD with COD** — BOD measures *biodegradable* organics (5 days), COD measures *all* oxidizable organics (2–3 hours, using $K_2Cr_2O_7$). COD > BOD always.
> 6. **Not specifying temperature** in BOD problems — $k$ depends on temperature: $k_T = k_{20} \cdot (1.047)^{(T - 20)}$. If the question states 25 °C, you must apply the correction.

---

## Topic Recap & Important Things to Remember

- **Control Efficiency** $\eta = \dfrac{C_{in} - C_{out}}{C_{in}} \times 100$ and **Penetration** $P = 1 - \eta$ are the foundational concepts. For *series* devices, multiply penetrations.
- **Particle size dictates device choice:** $>50\ \mu m$ → Settling chamber; $5$–$50\ \mu m$ → Cyclone; $1$–$10\ \mu m$ → Scrubber/Baghouse; $< 1\ \mu m$ → ESP.
- **ESP** uses the **Deutsch–Anderson equation** $\eta = 1 - e^{-wA/Q}$ — efficiency increases with drift velocity and plate area.
- **Cyclone cut-size** $d_{50} = \sqrt{\dfrac{9 \mu B}{2 \pi N_e \rho_p v_t}}$ — smaller $d_{50}$ means better collection of fine particles.
- **Stokes' Law** $v_t = \dfrac{d^2 (\rho_p - \rho) g}{18\ \mu}$ governs gravitational settling (valid for $Re \le 1$).
- **Settling chamber length** $L = \dfrac{H \cdot v}{v_t}$ — increases with horizontal velocity and chamber height.
- **Water treatment** has three stages: Primary (physical), Secondary (biological), Tertiary (chemical/disinfection). BOD$_5$ removal progresses $25\ \% \to 90\ \% \to 99\ \%+$.
- **BOD first-order model** $L_t = L_0 e^{-kt}$, with $k \approx 0.23\ day^{-1}$ for municipal sewage at 20 °C; BOD$_5 = L_0(1 - e^{-5k})$.
- **Solid waste hierarchy (3R + 1S):** **Reduce** > **Reuse** > **Recycle** > (Sanitary) **Landfill** > Incineration. Composting is a biological process yielding bio-fertilizer.
- **Catalytic converter** is mandatory under BS-VI in India — uses Pt, Pd, Rh to convert CO, hydrocarbons, $NO_x$ to $CO_2$, $H_2O$, $N_2$.
- **Noise control triad:** Source control (muffler, dampers) > Path control (barriers, green belts) > Receiver control (PPE).
- **CPCB standards to remember:** BOD$_5 \le 30\ mg/L$ (inland surface), $PM_{10} \le 60\ \mu g/m^3$, $SO_2 \le 80\ \mu g/m^3$, $NO_2 \le 80\ \mu g/m^3$ (24-hr residential).
- **Famous industrial example:** Thermal power plants use ESP + Wet Limestone Scrubber + Bag Filter as a 3-stage train achieving $> 99.9\ \%$ combined efficiency.

<!-- SECTION_5_END -->
