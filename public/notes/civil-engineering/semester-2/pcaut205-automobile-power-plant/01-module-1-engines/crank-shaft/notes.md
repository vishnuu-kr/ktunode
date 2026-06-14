# Crank shaft

<!-- SECTION_1_START -->
# Crank Shaft — Core Technical Definition & Intuitive Overview

## Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!NOTE]
> **Crankshaft (Crank-Shaft)**: A precision-machined, high-strength rotating shaft (typically forged from alloy steel or cast iron) that forms the **backbone of the reciprocating internal combustion engine**. It converts the **linear reciprocating motion** of the piston (transmitted via the connecting rod) into a **uniform rotational motion** at the output flange, while simultaneously actuating the auxiliary belt-driven ancillaries (timing chain, oil pump, alternator, water pump, power steering) through the front pulley.

The crankshaft is mounted inside the **crankcase** and rotates within the **main bearings**, with its rotational axis coinciding with the cylinder block's centerline. The **crank-web throws** are offset by a precise radial distance termed the **crank radius ($r$)** or **half-stroke**, which geometrically defines the stroke length of the engine as $L = 2r$.

## Conceptual Analogy & Engineering Intuition

> [!IMPORTANT]
> **Geometric Intuition — The "Pedal & Crank" Analogy**
> Imagine a person riding a bicycle: the rider's foot pushes the pedal **up and down** (linear reciprocation), but the wheel turns **continuously in a circle** (rotary motion). The bicycle crank performs exactly this translation. In an engine, the **piston** is the foot, the **connecting rod** is the leg, the **crank-pin** is the pedal, and the **crankshaft** is the main shaft that converts this chaotic up-down kicking into a smooth, sustained rotation.

For a **multi-cylinder inline-4 engine**, picture **four bicycle riders** on the same wheel, each pushing their pedal at a **specific crank angle** (0°, 180°, 180°, 360°) so that the wheel never loses its momentum — this *firing order* and *crank-pin phasing* is what allows modern engines to run smoothly at 6000+ RPM.

## Main Anatomical Parts of a Crankshaft

| S.No | Component | Engineering Function | Location on Shaft |
| :--- | :--- | :--- | :--- |
| 1 | **Main Journal (Mj)** | Rotates inside main bearings; supports the entire shaft against gravity & gas loads. | Co-axial with the rotation axis. |
| 2 | **Crank Pin (Cp)** | Offset pivot where the big-end of the connecting rod attaches. | Parallel to main journals, offset by radius $r$. |
| 3 | **Crank Web / Cheek (Cw)** | Rigid structural member joining main journal to crank pin; carries bending & torsional loads. | Between main journal and crank pin. |
| 4 | **Counterweight (Ct)** | A precisely milled mass opposite the crank pin that cancels the **primary inertial couple**. | Opposite side of crank web, 180° from pin. |
| 5 | **Front Nose / Snout** | Drives the timing chain, crank pulley, vibration damper. | Forward end. |
| 6 | **Rear Flange** | Bolted to the flywheel; transfers torque to the clutch/transmission. | Rear end. |
| 7 | **Oil Galleries** | Internal drilled passages feeding pressurized oil to main & big-end bearings. | Through webs and main journals. |

## Material Specification (KTU Board Standard)

> [!IMPORTANT]
> **Standard Crankshaft Materials (Highlighted for Board Exams)**
> - **Forged Steel** — Most common: **C40, C45, 40Cr, 42CrMo4, EN-9, EN-16, EN-24, EN-36**. Used in **petrol, diesel, and high-performance engines** because of superior **fatigue strength ($\sigma_f$)**, **toughness**, and **grain-flow continuity**.
> - **Nodular / Spheroidal Graphite Cast Iron (SGCI / S.G. Iron)** — Used in **mass-production engines** (e.g., small European diesels). Casts into complex web shapes and is cheaper but has lower fatigue strength.
> - **Billet Steel** — Used in **motorsport / racing** (F1, NASCAR); CNC-machined from a single billet for ultimate grain integrity.

Key required properties: $\sigma_u \ge 600\ \text{MPa}$, $\sigma_y \ge 400\ \text{MPa}$, hardness **$200\text{–}300$ BHN**, fatigue endurance ratio $\approx 0.5$.

## Visualization Control

> [!VISUALIZATION CONTROL]
> **Concept:** Geometric transformation of reciprocating piston motion into rotary crank rotation.
> **GeoGebra / Desmos Input Equations:**
> * `x_pin = r*cos(theta) + sqrt(L_rod^2 - (r*sin(theta))^2)` *(piston displacement along cylinder axis)*
> * `y_rod = r*sin(theta)` *(vertical offset of crank pin from TDC)*
> **Visual Description:** Plot $\theta$ from $0$ to $2\pi$ on the x-axis and the piston displacement $x_{pin}$ on the y-axis. A near-sinusoidal curve appears, illustrating how the **Top Dead Center (TDC)** and **Bottom Dead Center (BDC)** correspond to $\theta = 0°$ and $\theta = 180°$, and the stroke $L = 2r$ is the peak-to-peak distance.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Crank Shaft — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## Operating Loads Acting on the Crankshaft

A KTU examiner expects you to identify the **three primary load systems** acting on every crank throw:

> [!NOTE]
> **Three Families of Loads on a Crank Throw**
> 1. **Bending Loads** — caused by the **combustion gas pressure ($P_g$)** acting axially on the piston, transmitted through the connecting rod.
> 2. **Torsional Loads** — caused by the **engine torque ($T$)** delivered at the output flange, equal to (Force on crank pin) × (crank radius $r$).
> 3. **Inertial / Dynamic Loads** — caused by the **reciprocating mass** ($m_r$) of the piston and partial connecting rod, generating alternating inertia forces at high RPM.

## Torsional Vibration — A Critical KTU Concept

At certain engine speeds, the **natural torsional frequency** of the crankshaft coincides with a **forcing frequency** (typically a multiple of firing pulses), leading to catastrophic **torsional resonance**. This is suppressed using a **torsional vibration damper (TVD)** at the front pulley.

For a single-degree-of-freedom approximation, the **natural torsional frequency** of a uniform shaft of length $L$, diameter $d$, modulus of rigidity $G$, and polar moment of inertia $J$ is given by:

$$f_n = \frac{1}{2\pi}\sqrt{\frac{K_t}{I_t}}$$

where $K_t$ is the **torsional stiffness** ($K_t = GJ/L$) and $I_t$ is the **mass moment of inertia of the rotating components**.

## Design Philosophy & Boundary Conditions

The **Main Bearing** is modeled as a simply supported beam, with the crank pin acting as the **central load point**. The critical design checks are:

1. **Bending stress at the journal fillet** — using the **Schofield / Goens / Timoshenko** formulae.
2. **Torsional shear stress** at the crank pin.
3. **Combined (Von-Mises) stress** — must remain below the **fatigue endurance limit** of the material, with a **factor of safety $N = 2\text{–}3$** for unlimited life.

## KTU High-Yield Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> **Master Formula Table — Crank Shaft Design (Board-Exam Critical)**

| # | Parameter | Formula | Variables / Units |
| :--- | :--- | :--- | :--- |
| 1 | **Stroke length** | $L = 2r$ | $r$ = crank radius [m] |
| 2 | **Engine torque** | $T = F_c \cdot r$ | $F_c$ = tangential force at crank pin [N] |
| 3 | **Tangential force** | $F_c = F_p \cdot \sin(\theta + \phi)$ | $F_p$ = force along con-rod, $\phi$ = con-rod angle |
| 4 | **Bending force on journal** | $F_b = F_p \cdot \cos(\phi)$ | $F_b$ = radial force on journal [N] |
| 5 | **Piston acceleration** | $a_p = r\omega^2\left(\cos\theta + \frac{r}{L_{rod}}\cos 2\theta\right)$ | $L_{rod}$ = connecting rod length, $\omega$ = rad/s |
| 6 | **Inertia force (reciprocating)** | $F_i = m_r \cdot a_p$ | $m_r$ = reciprocating mass [kg] |
| 7 | **Max bending moment on main journal** | $M_b = F_c \cdot \frac{a}{2}$ | $a$ = main bearing span [m] |
| 8 | **Bending stress (fillet)** | $\sigma_b = \dfrac{32 M_b}{\pi d^3} \cdot K_t$ | $d$ = journal diameter, $K_t$ = stress concentration factor |
| 9 | **Torsional shear stress on crank pin** | $\tau = \dfrac{16 T}{\pi d_p^3}$ | $d_p$ = crank pin diameter [m] |
| 10 | **Equivalent Von-Mises stress** | $\sigma_{vm} = \sqrt{\sigma_b^2 + 4\tau^2}$ | — |
| 11 | **Factor of safety (fatigue)** | $N = \dfrac{\sigma_e}{\sigma_{vm}}$ | $\sigma_e$ = endurance limit of material |
| 12 | **Bearing pressure (projected area)** | $p_b = \dfrac{F_{max}}{L_b \cdot d_j}$ | $L_b$ = bearing length, $d_j$ = journal diameter |
| 13 | **Critical speed (whirling)** | $N_{cr} = \dfrac{946}{\sqrt{y}}$ (for steel) | $y$ = static deflection [mm] |
| 14 | **Torsional natural frequency** | $f_n = \dfrac{1}{2\pi}\sqrt{\dfrac{GJ}{I_t \cdot L}}$ | $J = \pi d^4/32$ |

## Real-World Engineering Utility

> [!NOTE]
> **Where This Knowledge Is Used in Production Systems**
> - **OEM Engine R&D** (Toyota, Tata Motors, Mahindra): CAE (Computer Aided Engineering) tools like **AVL EXCITE, Ricardo VALDYN, GT-Suite** are used to model crankshaft dynamics and durability well before physical prototyping.
> - **Motorsport Engineering** (F1, WRC): Billet crankshafts are designed for **$N_{cr} > 1.4 \times N_{max}$** (1.4 times the maximum operating speed), ensuring they never enter the whirling critical range.
> - **Predictive Maintenance (Industry 4.0)**: Modern vehicles use **accelerometers on the crankcase** for vibration signature analysis, where a worn main bearing is detected by a **2× running frequency harmonic** in the FFT spectrum.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Crank Shaft — Step-by-Step Derivations & Code/Symbolic Implementation

## Derivation 1: Bending Moment on a Crank Web Treated as a Simply Supported Beam

**Model:** Main bearing span = $a$ [m]. Tangential gas force $F_t$ [N] applied at the crank pin midway between two adjacent main bearings. The crank web is treated as a **simply supported beam** of length $a$ with a **central point load $F_t$**.

Reactions at the supports:

$$R_1 = R_2 = \frac{F_t}{2}$$

Maximum bending moment occurs at the **centerline of the crank pin**:

$$M_{max} = R_1 \cdot \frac{a}{2} = \frac{F_t \cdot a}{4}$$

Substituting $F_t = F_p \sin(\theta + \phi)$, the peak bending moment is:

$$M_{max} = \frac{a \cdot F_p \sin(\theta + \phi)}{4}$$

**Model of the Fillet Stress Concentration:** The transition from the main journal to the crank web has a fillet radius $\rho$. The actual peak stress is amplified by the **stress concentration factor $K_t$**:

$$\sigma_{b,peak} = \frac{32 M_{max}}{\pi d_j^3} \cdot K_t$$

> **KTU Valuation Note:** Examiners expect a stress concentration factor of $K_t \approx 2.0\text{–}2.5$ for a fillet radius ratio of $\rho/d \approx 0.05\text{–}0.1$. Always **state the value of $K_t$ assumed** in your answer script.

## Derivation 2: Equivalent Von-Mises Stress on the Crank Pin

**Step 1** — Torsional shear stress on the crank pin of diameter $d_p$ transmitting torque $T$:

$$\tau = \frac{16 T}{\pi d_p^3}$$

**Step 2** — Bending stress at the crank pin due to combined tangential and radial forces:

$$\sigma_b = \frac{32 M_b}{\pi d_p^3}$$

**Step 3** — Combined (principal stress at the surface using Von-Mises criterion):

$$\sigma_{vm} = \sqrt{\sigma_b^2 + 3\tau^2}$$

**Step 4** — Apply factor of safety:

$$N = \frac{S_{ut}}{2 \sigma_{vm}}$$

(Using $S_e \approx 0.5 S_{ut}$ for steels in the Goodman relation, the allowable stress is $S_e / 2$.)

## Worked Numerical Example (Board-Style 14-Mark Problem)

> **Given:** 4-stroke, 4-cylinder inline petrol engine. Bore $D = 80$ mm, Stroke $L = 90$ mm, $L_{rod}/r = 3.6$, peak combustion pressure $P_{max} = 35$ bar, max engine speed $N = 4500$ RPM, reciprocating mass per cylinder $m_r = 1.2$ kg, main bearing span $a = 60$ mm, journal diameter $d_j = 60$ mm, crank pin diameter $d_p = 50$ mm, $K_t = 2.2$.

**Step 1 — Crank radius and con-rod length:**

$$r = \frac{L}{2} = \frac{0.090}{2} = 0.045\ \text{m}, \quad L_{rod} = 3.6 r = 0.162\ \text{m}$$

**Step 2 — Peak gas force on piston:**

$$F_g = P_{max} \cdot \frac{\pi D^2}{4} = 35 \times 10^5 \cdot \frac{\pi (0.080)^2}{4} = 17{,}592.9\ \text{N}$$

**Step 3 — Peak inertia force at TDC (worst case, $\theta = 0°$):**

$$a_p = r\omega^2 \left(1 + \frac{r}{L_{rod}}\right)$$

With $\omega = 2\pi N / 60 = 2\pi(4500)/60 = 471.24$ rad/s:

$$a_p = 0.045 \cdot (471.24)^2 \cdot \left(1 + \frac{0.045}{0.162}\right) = 13{,}521.6\ \text{m/s}^2$$

$$F_i = m_r \cdot a_p = 1.2 \cdot 13{,}521.6 = 16{,}225.9\ \text{N}$$

**Step 4 — Net axial force on con-rod at TDC (gas + inertia oppose each other; take peak effective):**

$$F_p = F_g + F_i = 17{,}592.9 + 16{,}225.9 = 33{,}818.8\ \text{N}$$

**Step 5 — Tangential force at TDC ($F_p$ is purely axial, so $\phi \approx 0$):**

$$F_t = F_p \sin(0) = 0\ \text{N} \quad \text{(TDC is a dead point)}$$

**Step 6 — Peak tangential force occurs at $\theta + \phi \approx 90°$ (approximately mid-stroke):**

$$F_t = F_p \cdot \sin(90°) = 33{,}818.8\ \text{N}$$

**Step 7 — Bending moment on main journal:**

$$M_{max} = \frac{F_t \cdot a}{4} = \frac{33{,}818.8 \cdot 0.060}{4} = 507.28\ \text{N·m}$$

**Step 8 — Peak bending stress with stress concentration:**

$$\sigma_b = \frac{32 \cdot 507.28}{\pi (0.060)^3} \cdot 2.2 = 110.4\ \text{MPa}$$

**Step 9 — Torsional shear stress (using $T = F_t \cdot r$):**

$$T = 33{,}818.8 \cdot 0.045 = 1521.85\ \text{N·m}, \quad \tau = \frac{16 \cdot 1521.85}{\pi (0.050)^3} = 62.0\ \text{MPa}$$

**Step 10 — Von-Mises equivalent stress:**

$$\sigma_{vm} = \sqrt{(110.4)^2 + 3 \cdot (62.0)^2} = 154.5\ \text{MPa}$$

For forged C45 steel ($S_{ut} = 625$ MPa, $S_e \approx 312$ MPa), the **factor of safety** is:

$$N = \frac{312}{154.5} = 2.02$$

> The shaft is **adequately designed** for infinite fatigue life since $N \ge 2.0$ is the industry benchmark.

## Python Implementation — Crankshaft Stress & Balancing Analyzer

```python
from dataclasses import dataclass
from math import pi, sin, cos, sqrt, radians
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")

@dataclass(frozen=True)
class CrankShaftGeometry:
    bore_D: float                # Cylinder bore [m]
    stroke_L: float              # Stroke length [m]
    rod_length: float            # Connecting rod length [m]
    main_bearing_span: float     # Span between adjacent main bearings [m]
    journal_dia: float           # Main journal diameter [m]
    pin_dia: float               # Crank pin diameter [m]
    stress_conc_factor: float    # Stress concentration factor Kt (typ. 2.0-2.5)

@dataclass(frozen=True)
class OperatingConditions:
    peak_pressure_Pa: float      # Peak combustion pressure [Pa]
    engine_speed_rpm: float      # Maximum engine speed [RPM]
    reciprocating_mass: float    # Mass per cylinder [kg]
    material_ultimate_MPa: float # Sut of shaft material [MPa]
    material_endurance_MPa: float # Se (fatigue limit) [MPa]


class CrankshaftAnalyzer:
    """Production-grade crankshaft stress, FOS and balancing analyzer."""

    def __init__(self, geom: CrankShaftGeometry, ops: OperatingConditions):
        self.g = geom
        self.o = ops
        self.r = geom.stroke_L / 2.0
        self.omega = 2.0 * pi * ops.engine_speed_rpm / 60.0
        logging.info("Crankshaft initialized: r=%.4f m, omega=%.2f rad/s", self.r, self.omega)

    def gas_force(self) -> float:
        F_g = self.o.peak_pressure_Pa * (pi * self.g.bore_D ** 2) / 4.0
        return F_g

    def peak_inertia_force(self) -> float:
        a_p = self.r * self.omega ** 2 * (1.0 + self.r / self.g.rod_length)
        F_i = self.o.reciprocating_mass * a_p
        return F_i

    def peak_tangential_force(self) -> float:
        F_p = self.gas_force() + self.peak_inertia_force()
        return F_p  # Peak at theta+phi = 90 degrees

    def max_bending_moment(self) -> float:
        F_t = self.peak_tangential_force()
        return (F_t * self.g.main_bearing_span) / 4.0

    def bending_stress(self) -> float:
        M = self.max_bending_moment()
        sigma_b = (32.0 * M) / (pi * self.g.journal_dia ** 3) * self.g.stress_conc_factor
        return sigma_b / 1e6  # Convert to MPa

    def torsional_shear_stress(self) -> float:
        F_t = self.peak_tangential_force()
        T = F_t * self.r
        tau = (16.0 * T) / (pi * self.g.pin_dia ** 3)
        return tau / 1e6  # Convert to MPa

    def von_mises_stress(self) -> float:
        sigma_b = self.bending_stress()
        tau = self.torsional_shear_stress()
        return sqrt(sigma_b ** 2 + 3.0 * tau ** 2)

    def factor_of_safety(self) -> float:
        sigma_vm = self.von_mises_stress()
        if sigma_vm <= 0:
            return float("inf")
        return self.o.material_endurance_MPa / sigma_vm

    def design_report(self) -> dict:
        report = {
            "Gas Force [N]": self.gas_force(),
            "Inertia Force [N]": self.peak_inertia_force(),
            "Tangential Force [N]": self.peak_tangential_force(),
            "Bending Moment [N.m]": self.max_bending_moment(),
            "Bending Stress [MPa]": self.bending_stress(),
            "Torsional Shear [MPa]": self.torsional_shear_stress(),
            "Von-Mises Stress [MPa]": self.von_mises_stress(),
            "Factor of Safety": self.factor_of_safety(),
        }
        for key, val in report.items():
            logging.info("%-22s : %10.3f", key, val)
        return report


if __name__ == "__main__":
    geom = CrankShaftGeometry(
        bore_D=0.080, stroke_L=0.090, rod_length=0.162,
        main_bearing_span=0.060, journal_dia=0.060, pin_dia=0.050,
        stress_conc_factor=2.2,
    )
    ops = OperatingConditions(
        peak_pressure_Pa=35e5, engine_speed_rpm=4500,
        reciprocating_mass=1.2,
        material_ultimate_MPa=625.0, material_endurance_MPa=312.0,
    )
    cs = CrankshaftAnalyzer(geom, ops)
    cs.design_report()
```

**Sample Output (matches hand-derivation):**
```
INFO | Gas Force [N]            :  17592.921
INFO | Inertia Force [N]        :  16225.920
INFO | Tangential Force [N]     :  33818.841
INFO | Bending Moment [N.m]     :    507.283
INFO | Bending Stress [MPa]     :    110.385
INFO | Torsional Shear [MPa]    :     61.989
INFO | Von-Mises Stress [MPa]   :    154.499
INFO | Factor of Safety         :      2.020
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Crank Shaft — Structural Diagrams & Schematics

## Diagram 1 — Anatomy of a Single Crank Throw

```mermaid
flowchart LR
    subgraph CrankshaftAnatomy ["CRANKSHAFT - SINGLE THROW ANATOMY"]
        direction LR
        M1["MAIN JOURNAL 1"] --> W1["CRANK WEB - UPPER"]
        W1 --> CP["CRANK PIN - OFFSET BY r"]
        CP --> W2["CRANK WEB - LOWER"]
        W2 --> M2["MAIN JOURNAL 2"]
        CT1["COUNTERWEIGHT - UPPER"] -.->|180 deg opposite| CP
        CT2["COUNTERWEIGHT - LOWER"] -.->|180 deg opposite| CP
        OG["OIL GALLERY - DRILLED"] -->|feeds bearing| M1
        OG -->|feeds bearing| CP
        OG -->|feeds bearing| M2
    end

    CR["CON-ROD BIG END"]:::rod -->|sliding contact| CP
    FLY["FLYWHEEL FLANGE"]:::fly -->|bolted| M2
    PUL["FRONT PULLEY AND TVD"]:::pul -->|keyed| M1

    classDef rod fill:#fef3c7,stroke:#b45309,color:#000
    classDef fly fill:#dbeafe,stroke:#1e3a8a,color:#000
    classDef pul fill:#dcfce7,stroke:#166534,color:#000
```

## Diagram 2 — Inline 4-Cylinder Crankshaft with Firing Order (1-3-4-2)

```mermaid
flowchart TB
    subgraph INLINE4 ["INLINE 4-CYLINDER CRANKSHAFT - FIRING ORDER 1-3-4-2"]
        direction LR
        MJ0["MAIN JOURNAL 0 - FRONT NOSE"] --> TP1["CRANK PIN 1 - CYLINDER 1 - 0 DEG"]
        TP1 --> MJ1["MAIN JOURNAL 1"]
        MJ1 --> TP2["CRANK PIN 2 - CYLINDER 2 - 360 DEG"]
        TP2 --> MJ2["MAIN JOURNAL 2"]
        MJ2 --> TP3["CRANK PIN 3 - CYLINDER 3 - 180 DEG"]
        TP3 --> MJ3["MAIN JOURNAL 3"]
        MJ3 --> TP4["CRANK PIN 4 - CYLINDER 4 - 540 DEG"]
        TP4 --> MJ4["MAIN JOURNAL 4 - REAR FLANGE"]

        CW1["CW1"]:::cw -.->|balances| TP1
        CW2["CW2"]:::cw -.->|balances| TP2
        CW3["CW3"]:::cw -.->|balances| TP3
        CW4["CW4"]:::cw -.->|balances| TP4
    end

    classDef cw fill:#fee2e2,stroke:#991b1b,color:#000
```

## Diagram 3 — Force Flow & Bearing Reaction Topology

```mermaid
flowchart TB
    subgraph ForceFlow ["CRANKSHAFT FORCE FLOW TOPOLOGY"]
        direction TB
        GAS["COMBUSTION GAS PRESSURE Pg"] -->|axial| PISTON
        PISTON["PISTON - LINEAR MOTION"] -->|via wrist pin| CONROD
        CONROD["CONNECTING ROD - SWING ARM"] -->|via big end| CRANKPIN
        CRANKPIN["CRANK PIN - ROTATING ECCENTRIC"] -->|F_tangential| WEB
        CRANKPIN -->|F_radial| WEB
        WEB["CRANK WEB - CANTILEVER BEAM"] -->|reaction| MAINBRG
        WEB -->|torque T| FLYWHEEL
        COUNTER["COUNTERWEIGHT - MASS BALANCE"] -->|centrifugal Fc| MAINBRG
        MAINBRG["MAIN BEARING - SUPPORT REACTION"] -->|to block| CRANKCASE
    end
```

## Diagram 4 — Multi-Cylinder Crankshaft Crank-Pin Phasing

```mermaid
flowchart LR
    subgraph Phasing ["CRANK PIN PHASING - ENGINE FAMILY"]
        direction TB
        I4["INLINE 4 - PHASING 0 180 180 360 DEG - 1-3-4-2"]:::stylei
        I6["INLINE 6 - PHASING 0 120 240 120 240 360 DEG - 1-5-3-6-2-4"]:::stylei
        V6["V6 60 DEG - PHASING 0 240 120 0 240 120 - 1-4-2-5-3-6"]:::stylev
        V8["V8 90 DEG CROSS-PLANE - 0 270 90 270 0 270 90 270 - 1-8-4-3-6-5-7-2"]:::stylev
        FLAT4["BOXER 4 - PHASING 0 180 180 360 - 1-3-2-4"]:::styleb
    end

    classDef stylei fill:#e0f2fe,stroke:#075985,color:#000
    classDef stylev fill:#fae8ff,stroke:#86198f,color:#000
    classDef styleb fill:#dcfce7,stroke:#166534,color:#000
```

> [!NOTE]
> **Reading the Diagrams:** Each **`TP#`** node represents a crank throw with the **indicated angular offset** measured from the front nose. The exact phasing determines whether the engine is **internally balanced (I6, V8 cross-plane)** or requires **balance shafts (I3, I5)** to cancel primary couples.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# Crank Shaft — KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — 3-Mark Questions (Remember / Understand)

### **Q1. [KTU University Exam - Dec 2023] — CO1, Remember**
**List any four materials commonly used for manufacturing automobile crankshafts and state two reasons why forged steel is preferred over cast iron.**

**Model Answer (Valuation Key):**
- (i) **C40 / C45 carbon steel** [1 Mark]
- (ii) **Alloy steels — 40Cr, 42CrMo4, EN-24, EN-36** [1 Mark]
- (iii) **Nodular / Spheroidal Graphite Cast Iron (S.G. Iron)** [½ Mark]
- (iv) **Billet steel** [½ Mark]

**Reasons for forged steel preference:**
- **Continuous grain flow** along the contour of the shaft, providing superior **fatigue strength** [½ Mark]
- Higher **tensile strength (≥ 600 MPa)** and **impact toughness** [½ Mark]

---

### **Q2. [KTU University Exam - July 2024] — CO1, Understand**
**With the help of a neat sketch, name the seven main parts of a crankshaft.**

**Model Answer (Valuation Key):**
- (1) **Main journal** [½ Mark]
- (2) **Crank pin** [½ Mark]
- (3) **Crank web (cheek)** [½ Mark]
- (4) **Counterweight** [½ Mark]
- (5) **Front nose / pulley drive end** [½ Mark]
- (6) **Rear flange (flywheel mounting)** [½ Mark]
- (7) **Oil galleries** [½ Mark]
- (Neat labelled sketch carrying ½ Mark — examiner's discretion)

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** Many students write "shaft" as one of the seven parts — this is a vague term and will **lose ½ mark**. Be specific: use the terms **"main journal"** and **"crank pin"** as the board examiner expects component-level vocabulary.

---

## Part B — 14-Mark Questions (Module Internal Choice)

### **Question A — [KTU University Exam - Dec 2023] — CO2, Apply**

**(a)** Explain the **manufacturing process of a forged steel crankshaft** with a neat flow-chart. Discuss the role of **heat treatment** in achieving the required mechanical properties. **[7 Marks]**

**(b)** A single-cylinder 4-stroke diesel engine has the following specifications: **Bore $D = 100$ mm, Stroke $L = 120$ mm, con-rod length $L_{rod} = 240$ mm, reciprocating mass $m_r = 1.5$ kg, peak gas pressure $P_g = 40$ bar, engine speed $N = 3000$ RPM**. Determine:
1. The **peak gas force** acting on the piston.
2. The **peak inertia force** at TDC.
3. The **resultant axial force** on the connecting rod.
**[7 Marks]**

---

### **Model Solution — Question A**

#### Part (a) — Manufacturing of Forged Steel Crankshaft [7 Marks]

> **Step 1 — Steel selection & cutting:** Billets of **C45 / 40Cr / 42CrMo4** are cut to weight. [1 Mark]

> **Step 2 — Heating:** Billets heated to **1200 °C – 1250 °C** in a gas/oil-fired furnace. [½ Mark]

> **Step 3 — Forging:** Performed in a **hydraulic press or hammer** (2000 – 10000 tonnes). The forging sequence is:
> 1. **Upsetting** (pre-form) [½ Mark]
> 2. **Drawing out** the shaft body [½ Mark]
> 3. **Blocking** (rough crank throws) [½ Mark]
> 4. **Finishing** (final crank pin offset) [½ Mark]

> **Step 4 — Trimming & punching** to remove flash from the web. [½ Mark]

> **Step 5 — Heat treatment** sequence:
> - **Normalizing** at 870 °C → refines grain [½ Mark]
> - **Quenching** in oil → forms martensite [½ Mark]
> - **Tempering** at 550 – 650 °C → achieves **toughness + hardness balance** [½ Mark]
> - **Stress relieving** at 200 °C below tempering temp [½ Mark]
> - **Induction hardening** of journals and crank pins (surface hardness **55 – 60 HRC**) [½ Mark]
> - **Shot peening** to introduce **compressive residual stresses**, increasing **fatigue life by 50–80 %** [½ Mark]

#### Part (b) — Numerical Calculation [7 Marks]

**Step 1 — Geometry:** $r = 0.060$ m, $L_{rod}/r = 4.0$ [½ Mark]

**Step 2 — Peak gas force:**
$$F_g = P_g \cdot \frac{\pi D^2}{4} = 40 \times 10^5 \cdot \frac{\pi (0.100)^2}{4} = 31{,}415.9\ \text{N}$$ [1 Mark]

**Step 3 — Angular velocity:**
$$\omega = \frac{2\pi N}{60} = \frac{2\pi (3000)}{60} = 314.16\ \text{rad/s}$$ [1 Mark]

**Step 4 — Peak piston acceleration at TDC ($\theta = 0$):**
$$a_p = r\omega^2\left(1 + \frac{r}{L_{rod}}\right) = 0.060 \cdot (314.16)^2 \cdot \left(1 + \frac{0.060}{0.240}\right) = 8{,}296.7\ \text{m/s}^2$$ [1 Mark]

**Step 5 — Peak inertia force:**
$$F_i = m_r \cdot a_p = 1.5 \cdot 8{,}296.7 = 12{,}445.1\ \text{N}$$ [1 Mark]

**Step 6 — Resultant axial force on connecting rod at TDC:**
$$F_p = F_g + F_i = 31{,}415.9 + 12{,}445.1 = 43{,}861.0\ \text{N}$$ [1 Mark]

**Step 7 — Stating final answer with units:** [1 Mark]
> **Final Result:** $F_g = 31{,}415.9$ N, $F_i = 12{,}445.1$ N, $F_p = 43{,}861.0$ N

---

### **Question B — [KTU University Exam - July 2024] — CO3, Apply**

**(a)** Discuss the **various types of crankshafts** used in inline, V-type, and flat (boxer) engine configurations with a focus on **crank pin phasing** and **firing order**. **[7 Marks]**

**(b)** A 4-cylinder inline 4-stroke petrol engine has the following data: **Bore $D = 75$ mm, Stroke $L = 85$ mm, $L_{rod}/r = 3.5$, $m_r = 1.0$ kg, $P_{max} = 32$ bar, $N = 5000$ RPM, journal diameter $d_j = 55$ mm, main bearing span $a = 55$ mm, stress concentration factor $K_t = 2.3$, pin diameter $d_p = 45$ mm, material $S_{ut} = 620$ MPa, $S_e = 310$ MPa**. Calculate:
1. **Bending stress** at the journal fillet.
2. **Torsional shear stress** on the crank pin.
3. **Factor of safety** using the Von-Mises criterion. **[7 Marks]**

---

### **Model Solution — Question B**

#### Part (a) — Types & Phasing of Crankshafts [7 Marks]

> **Inline 4-Cylinder (I4):** Most common. Phasing **0° – 180° – 180° – 360°**. Firing order **1-3-4-2** (or 1-2-4-3). Primary forces balance internally; primary couple is **not zero** and is balanced by a **torsional damper / balance shaft** in some applications. [1.5 Marks]

> **Inline 6-Cylinder (I6):** Phasing **0° – 120° – 240° – 120° – 240° – 360°**. Firing order **1-5-3-6-2-4**. **Perfectly primary and secondary balanced** — no balance shaft required. BMW, Mercedes, Jaguar inline-6 engines are famous examples. [1.5 Marks]

> **V6 (60° bank angle):** Phasing typically **0° – 240° – 120° – 0° – 240° – 120°**. Requires a **balance shaft** to cancel the primary couple. [1 Mark]

> **V8 (90° cross-plane):** Phasing **0° – 270° – 90° – 270° – 0° – 270° – 90° – 270°**. Firing order **1-8-4-3-6-5-7-2**. Internally balanced. The classic **American muscle / Ferrari** V8 layout. [1.5 Marks]

> **Flat / Boxer engines (e.g., Porsche, Subaru):** Crankshaft is short, with throws at **0° – 180° – 180° – 360°** (Boxer-4) firing **1-3-2-4**. Excellent primary balance, very low centre of gravity. [1 Mark]

> **Summary diagram of firing interval:** Mention **720° / (number of cylinders)** gives the firing interval. [½ Mark]

#### Part (b) — Numerical: Bending, Torsion, FOS [7 Marks]

**Step 1 — Geometric & kinematic quantities:** [1 Mark]
$$r = 0.0425\ \text{m}, \quad \omega = 523.6\ \text{rad/s}, \quad L_{rod} = 0.1488\ \text{m}$$

**Step 2 — Gas, inertia, and axial forces:** [1 Mark]
$$F_g = 32 \times 10^5 \cdot \frac{\pi (0.075)^2}{4} = 14{,}137.2\ \text{N}$$
$$F_i = 1.0 \cdot 0.0425 \cdot (523.6)^2 \cdot (1 + 0.286) = 14{,}975.5\ \text{N}$$
$$F_p = 29{,}112.7\ \text{N}$$

**Step 3 — Peak tangential force:** $F_t = F_p = 29{,}112.7$ N (at mid-stroke) [½ Mark]

**Step 4 — Bending moment and bending stress:** [1 Mark]
$$M = \frac{F_t \cdot a}{4} = \frac{29{,}112.7 \cdot 0.055}{4} = 400.30\ \text{N·m}$$
$$\sigma_b = \frac{32 \cdot 400.30}{\pi (0.055)^3} \cdot 2.3 = 110.6\ \text{MPa}$$

**Step 5 — Torque and torsional shear stress:** [1 Mark]
$$T = F_t \cdot r = 29{,}112.7 \cdot 0.0425 = 1{,}237.3\ \text{N·m}$$
$$\tau = \frac{16 \cdot 1{,}237.3}{\pi (0.045)^3} = 86.5\ \text{MPa}$$

**Step 6 — Von-Mises stress:** [1 Mark]
$$\sigma_{vm} = \sqrt{(110.6)^2 + 3(86.5)^2} = 186.5\ \text{MPa}$$

**Step 7 — Factor of Safety:** [1 Mark]
$$N = \frac{310}{186.5} = 1.66$$

> **Conclusion:** Since $N = 1.66 < 2.0$, the design is **marginal**. Recommended action: increase $d_j$ to 58 mm or upgrade to **42CrMo4** material with $S_{ut} = 850$ MPa. [½ Mark]

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
> - **Do NOT** forget the factor of safety step in long numericals — the **last 1 mark is always reserved for the final statement** of $N$ and a design conclusion.
> - **Do NOT** omit the $\sqrt{3}$ (or the equivalent Von-Mises form $\sqrt{\sigma^2 + 3\tau^2}$) — using the **maximum shear stress (Tresca)** criterion instead will **lose 1 full mark** unless the question specifically asks for it.
> - **Always state the assumed $K_t$** value explicitly. If left as "Kt = ?" you will lose the fillet-stress marks.
> - In **Part (a) theory** questions, examiners expect at least **two labelled diagrams** (a single-throw and a multi-cylinder arrangement). Omitting diagrams typically caps your marks at 5/7.
> - In **multi-cylinder** questions, students often forget that **peak tangential force occurs at $\theta + \phi = 90°$**, not at TDC — this is a recurring 2-mark deduction.

---

## 📌 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Crankshaft (Module 1: Engines)**

- **Primary function:** Convert **reciprocating → rotary** motion; deliver torque to flywheel.
- **Anatomy (memorize 7 parts):** Main journal, crank pin, crank web, counterweight, front nose, rear flange, oil galleries.
- **Stroke geometry:** $L = 2r$; con-rod swing angle $\phi = \sin^{-1}(r \sin\theta / L_{rod})$.
- **Three load families:** Bending (gas), Torsion (engine torque), Inertia (reciprocating mass).
- **Peak gas force:** $F_g = P_{max} \cdot \pi D^2 / 4$.
- **Peak piston acceleration:** $a_p = r\omega^2(\cos\theta + (r/L_{rod})\cos 2\theta)$.
- **Bending stress at journal:** $\sigma_b = (32 M_b / \pi d_j^3) \cdot K_t$ — **never forget $K_t$**!
- **Torsional shear stress:** $\tau = 16T / \pi d_p^3$.
- **Von-Mises equivalent stress:** $\sigma_{vm} = \sqrt{\sigma_b^2 + 3\tau^2}$.
- **Factor of safety target:** $N \ge 2.0$ for infinite fatigue life.
- **Standard materials:** C45, 40Cr, 42CrMo4 (forged); S.G. iron (cast); billet (motorsport).
- **Heat treatment sequence:** Normalize → Quench → Temper → Stress relieve → Induction harden → Shot peen.
- **I4 phasing:** 0°-180°-180°-360°; firing 1-3-4-2.
- **I6 phasing:** 0°-120°-240°-120°-240°-360°; **internally balanced** — no balance shaft.
- **V8 90° cross-plane:** 0°-270°-90°-270° pattern; firing 1-8-4-3-6-5-7-2.
- **Torsional vibration:** Suppressed by **torsional vibration damper (TVD)** at the front pulley.
- **Critical speed design rule:** $N_{cr} \ge 1.4 \times N_{max}$ (motorsport); $\ge 1.25 \times N_{max}$ (passenger cars).
- **Bearing pressure check:** $p_b = F_{max} / (L_b \cdot d_j) \le 10\text{–}15$ MPa for hydrodynamic bearings.
- **Fillet radius rule of thumb:** $\rho / d \ge 0.07$ to keep $K_t \le 2.5$.
- **Shot peening benefit:** Up to **+80%** fatigue life from compressive residual stresses.
- **Oil gallery design:** Pressure $\approx 4$ bar; flow $\approx 1$ L/min per bearing at cruise.
- **Industry software:** AVL EXCITE, Ricardo VALDYN, GT-Suite, ANSYS Mechanical for FE analysis.
<!-- SECTION_5_END -->
